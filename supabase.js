// ══════════════════════════════════════════════════════
//  SUPABASE CONFIG
//  Replace the two placeholder values below with your
//  project credentials from:
//  supabase.com → your project → Settings → API
// ══════════════════════════════════════════════════════
const SUPABASE_URL      = 'https://rlllpwghebmxcrmticjd.supabase.co';       // e.g. https://xyzxyz.supabase.co
const SUPABASE_ANON_KEY = 'sb_publishable_p2Nddq9K-FZpBslU9tvVjQ_HPyhXZq2';  // "anon public" key

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ══════════════════════════════════════════════════════
//  AUTH HELPERS
// ══════════════════════════════════════════════════════

async function sbGetUser() {
  const { data: { user } } = await sb.auth.getUser();
  return user;
}

async function sbSignUp(email, password) {
  return sb.auth.signUp({ email, password });
}

async function sbSignIn(email, password) {
  return sb.auth.signInWithPassword({ email, password });
}

async function sbSignInGoogle() {
  return sb.auth.signInWithOAuth({
    provider: 'google',
    options: {
      // Returns user to the exact page they were on
      redirectTo: window.location.href
    }
  });
}

async function sbSignOut() {
  return sb.auth.signOut();
}

// ══════════════════════════════════════════════════════
//  FAVOURITES — CLOUD CRUD
// ══════════════════════════════════════════════════════

async function sbLoadFavs(userId) {
  const { data, error } = await sb
    .from('favourites')
    .select('recipe_id')
    .eq('user_id', userId);
  if (error) { console.warn('sbLoadFavs:', error.message); return new Set(); }
  return new Set(data.map(r => r.recipe_id));
}

async function sbSaveFav(userId, recipeId) {
  const { error } = await sb
    .from('favourites')
    .upsert({ user_id: userId, recipe_id: recipeId });
  if (error) console.warn('sbSaveFav:', error.message);
}

async function sbRemoveFav(userId, recipeId) {
  const { error } = await sb
    .from('favourites')
    .delete()
    .eq('user_id', userId)
    .eq('recipe_id', recipeId);
  if (error) console.warn('sbRemoveFav:', error.message);
}

// ══════════════════════════════════════════════════════
//  MERGE — run once on sign-in
//  Loads cloud favs, merges with any local favs, saves
//  merged set back to cloud + localStorage, returns Set.
// ══════════════════════════════════════════════════════

async function sbMergeAndLoadFavs(userId) {
  const cloudFavs = await sbLoadFavs(userId);
  const localFavs = loadFavs(); // from data.js (reads localStorage)

  // Push any local-only favs up to the cloud
  const toAdd = [...localFavs].filter(id => !cloudFavs.has(id));
  if (toAdd.length) {
    await sb.from('favourites').upsert(
      toAdd.map(id => ({ user_id: userId, recipe_id: id }))
    );
  }

  const merged = new Set([...cloudFavs, ...localFavs]);
  saveFavs(merged); // keep localStorage in sync
  return merged;
}

// ══════════════════════════════════════════════════════
//  PER-TOGGLE SYNC
//  Called from data.js attachFavListeners and recipe.html
//  whenever a user taps a ❤ button.
// ══════════════════════════════════════════════════════

window.sbSyncFav = async (recipeId, adding) => {
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return; // not signed in — localStorage-only, nothing to do
  if (adding) await sbSaveFav(user.id, recipeId);
  else        await sbRemoveFav(user.id, recipeId);
};

// ══════════════════════════════════════════════════════
//  MEAL PLAN — CLOUD CRUD
// ══════════════════════════════════════════════════════

const _PLAN_KEY   = 'cal_plan_v1';
const _emptyPlan  = () => ({ days: Array(7).fill(null), desserts: Array(3).fill(null) });

async function sbLoadPlan(userId) {
  const { data, error } = await sb
    .from('user_plan')
    .select('plan')
    .eq('user_id', userId)
    .single();
  if (error || !data) return null;
  return data.plan;
}

async function sbSavePlan(userId, plan) {
  const { error } = await sb
    .from('user_plan')
    .upsert({ user_id: userId, plan, updated_at: new Date().toISOString() });
  if (error) console.warn('sbSavePlan:', error.message);
}

// Run once on sign-in: merges cloud plan with any local plan,
// saves merged result to both cloud and localStorage, returns merged plan.
async function sbMergeAndLoadPlan(userId) {
  const cloudPlan = await sbLoadPlan(userId);
  let localPlan;
  try { const r = localStorage.getItem(_PLAN_KEY); localPlan = r ? JSON.parse(r) : _emptyPlan(); }
  catch { localPlan = _emptyPlan(); }

  if (!cloudPlan) {
    // First sign-in — push whatever is local up to the cloud
    await sbSavePlan(userId, localPlan);
    return localPlan;
  }

  // Slot-level merge: cloud wins for filled slots; local fills in empty gaps
  const merged = {
    days:     cloudPlan.days.map((c, i)     => c || localPlan.days[i]     || null),
    desserts: cloudPlan.desserts.map((c, i) => c || localPlan.desserts[i] || null),
  };

  const localAdded =
    merged.days.some((s, i)     => s && !cloudPlan.days[i]) ||
    merged.desserts.some((s, i) => s && !cloudPlan.desserts[i]);
  if (localAdded) await sbSavePlan(userId, merged);

  localStorage.setItem(_PLAN_KEY, JSON.stringify(merged));
  return merged;
}

// Called from savePlan() on every plan change — fire-and-forget cloud write
window.sbSyncPlan = async (plan) => {
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return;
  await sbSavePlan(user.id, plan);
};

// Expose the client for auth.js
window._sb = sb;
