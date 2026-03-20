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

// Expose the client for auth.js
window._sb = sb;
