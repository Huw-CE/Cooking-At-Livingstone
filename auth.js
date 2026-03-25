// ══════════════════════════════════════════════════════
//  AUTH.JS
//  Requires supabase.js + data.js loaded before this.
//  • Injects a "Sign In / account" button into the nav
//  • Injects a sign-in / sign-up / account modal
//  • On sign-in: merges cloud favs → dispatches lv:favssynced
//  • On sign-out: dispatches lv:favssynced with local favs
// ══════════════════════════════════════════════════════

(function () {

  // ── INJECT NAV BUTTON ──────────────────────────────
  function injectNavButton() {
    const navLinks = document.getElementById('nav-links');
    if (!navLinks) return;
    const li = document.createElement('li');
    li.className = 'nav-account-li';
    li.innerHTML = `
      <button class="nav-account-btn" id="nav-account-btn" aria-label="Account">
        <span id="nav-account-label">Sign In</span>
      </button>`;
    navLinks.appendChild(li);
    document.getElementById('nav-account-btn').addEventListener('click', openModal);
  }

  // ── INJECT MODAL ────────────────────────────────────
  function injectModal() {
    const wrap = document.createElement('div');
    wrap.innerHTML = `
      <div class="auth-backdrop" id="auth-backdrop"></div>

      <div class="auth-modal" id="auth-modal" role="dialog" aria-modal="true" aria-label="Sign in">
        <button class="auth-close" id="auth-close" aria-label="Close">×</button>

        <!-- ── SIGNED-OUT VIEW ── -->
        <div id="auth-out">
          <div class="auth-heading">
            <div class="auth-eyebrow">Your Account</div>
            <h2 class="auth-title">Welcome to <em>Livingstone</em></h2>
            <p class="auth-sub">Sign in to save your favourites across all your devices.</p>
          </div>

          <div class="auth-tabs" role="tablist">
            <button class="auth-tab is-active" data-tab="signin" role="tab">Sign In</button>
            <button class="auth-tab" data-tab="signup" role="tab">Create Account</button>
          </div>

          <!-- Sign In panel -->
          <div class="auth-panel is-active" id="panel-signin">
            <button class="auth-google-btn" id="auth-google-btn">
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              Continue with Google
            </button>

            <div class="auth-divider"><span>or sign in with email</span></div>

            <div class="auth-field">
              <label for="si-email">Email</label>
              <input type="email" id="si-email" placeholder="you@example.com" autocomplete="email">
            </div>
            <div class="auth-field">
              <label for="si-password">Password</label>
              <input type="password" id="si-password" placeholder="••••••••" autocomplete="current-password">
            </div>
            <div class="auth-msg" id="si-msg"></div>
            <button class="auth-submit" id="si-submit">Sign In</button>
          </div>

          <!-- Sign Up panel -->
          <div class="auth-panel" id="panel-signup">
            <div class="auth-field">
              <label for="su-name">Your name <span class="auth-field-optional">optional</span></label>
              <input type="text" id="su-name" placeholder="e.g. Huw Cushing" autocomplete="name">
            </div>
            <div class="auth-field">
              <label for="su-email">Email</label>
              <input type="email" id="su-email" placeholder="you@example.com" autocomplete="email">
            </div>
            <div class="auth-field">
              <label for="su-password">Password</label>
              <input type="password" id="su-password" placeholder="At least 6 characters" autocomplete="new-password">
            </div>
            <div class="auth-msg" id="su-msg"></div>
            <button class="auth-submit" id="su-submit">Create Account</button>
            <p class="auth-note">We'll send a confirmation email to verify your address.</p>
          </div>
        </div>

        <!-- ── SIGNED-IN VIEW ── -->
        <div id="auth-in" style="display:none;">
          <div class="auth-avatar-lg" id="auth-avatar-lg"></div>
          <div class="auth-user-name" id="auth-user-name" style="display:none;"></div>
          <div class="auth-user-email" id="auth-user-email"></div>
          <div class="auth-fav-summary">
            <span class="auth-fav-heart">❤️</span>
            <span id="auth-fav-count">0</span> recipes saved to favourites
          </div>
          <button class="auth-signout" id="auth-signout">Sign Out</button>
        </div>
      </div>`;
    document.body.appendChild(wrap);
    bindModal();
  }

  // ── BIND EVENTS ─────────────────────────────────────
  function bindModal() {
    document.getElementById('auth-backdrop').addEventListener('click', closeModal);
    document.getElementById('auth-close').addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // Tab switching
    document.querySelectorAll('.auth-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('is-active'));
        document.querySelectorAll('.auth-panel').forEach(p => p.classList.remove('is-active'));
        tab.classList.add('is-active');
        document.getElementById('panel-' + tab.dataset.tab).classList.add('is-active');
      });
    });

    // Google OAuth
    document.getElementById('auth-google-btn').addEventListener('click', async () => {
      const btn = document.getElementById('auth-google-btn');
      btn.disabled = true;
      btn.textContent = 'Redirecting…';
      await sbSignInGoogle();
    });

    // Sign In submit
    document.getElementById('si-submit').addEventListener('click', async () => {
      const email    = document.getElementById('si-email').value.trim();
      const password = document.getElementById('si-password').value;
      const msgEl    = document.getElementById('si-msg');
      if (!email || !password) { showMsg(msgEl, 'Please enter your email and password.', 'error'); return; }
      setBtnLoading('si-submit', true, 'Sign In');
      const { error } = await sbSignIn(email, password);
      setBtnLoading('si-submit', false, 'Sign In');
      if (error) { showMsg(msgEl, error.message, 'error'); return; }
      closeModal();
    });

    // Sign Up submit
    document.getElementById('su-submit').addEventListener('click', async () => {
      const name     = document.getElementById('su-name').value.trim();
      const email    = document.getElementById('su-email').value.trim();
      const password = document.getElementById('su-password').value;
      const msgEl    = document.getElementById('su-msg');
      if (!email || !password) { showMsg(msgEl, 'Please enter your email and password.', 'error'); return; }
      if (password.length < 6) { showMsg(msgEl, 'Password must be at least 6 characters.', 'error'); return; }
      setBtnLoading('su-submit', true, 'Create Account');
      const { error } = await sbSignUp(email, password, name);
      setBtnLoading('su-submit', false, 'Create Account');
      if (error) { showMsg(msgEl, error.message, 'error'); return; }
      showMsg(msgEl, '✓ Check your email to confirm your account.', 'success');
    });

    // Sign Out
    document.getElementById('auth-signout').addEventListener('click', async () => {
      await sbSignOut();
      closeModal();
    });
  }

  // ── HELPERS ─────────────────────────────────────────
  function openModal()  {
    document.getElementById('auth-modal').classList.add('is-open');
    document.getElementById('auth-backdrop').classList.add('is-open');
  }
  function closeModal() {
    document.getElementById('auth-modal').classList.remove('is-open');
    document.getElementById('auth-backdrop').classList.remove('is-open');
  }

  function setBtnLoading(id, loading, label) {
    const btn = document.getElementById(id);
    btn.disabled    = loading;
    btn.textContent = loading ? '…' : label;
  }

  function showMsg(el, text, type) {
    el.textContent  = text;
    el.className    = 'auth-msg ' + type;
  }

  function userInitials(user) {
    // Prefer full name from OAuth (e.g. Google sets this)
    const fullName = user.user_metadata?.full_name;
    if (fullName) {
      return fullName.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
    }
    // Fall back to email: use only the local part (before @),
    // then split on . _ - so "huw.cushing@gmail.com" → HC not HG
    const local = (user.email || '??').split('@')[0];
    const parts  = local.split(/[.\-_]+/).filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return local.slice(0, 2).toUpperCase();
  }

  // ── UPDATE NAV BUTTON ────────────────────────────────
  function setNavUser(user) {
    const btn   = document.getElementById('nav-account-btn');
    const label = document.getElementById('nav-account-label');
    if (!btn) return;
    if (user) {
      btn.classList.add('is-signed-in');
      label.textContent = userInitials(user);
      btn.title = user.email;
    } else {
      btn.classList.remove('is-signed-in');
      label.textContent = 'Sign In';
      btn.title = '';
    }
  }

  // ── UPDATE SIGNED-IN MODAL VIEW ──────────────────────
  function setModalSignedIn(user, favCount) {
    document.getElementById('auth-out').style.display = 'none';
    document.getElementById('auth-in').style.display  = '';
    document.getElementById('auth-user-email').textContent  = user.email;
    document.getElementById('auth-avatar-lg').textContent   = userInitials(user);
    document.getElementById('auth-fav-count').textContent   = favCount;
    const nameEl   = document.getElementById('auth-user-name');
    const dispName = user.user_metadata?.full_name || user.user_metadata?.display_name || '';
    if (dispName) {
      nameEl.textContent    = dispName;
      nameEl.style.display  = '';
    } else {
      nameEl.style.display  = 'none';
    }
  }
  function setModalSignedOut() {
    document.getElementById('auth-out').style.display = '';
    document.getElementById('auth-in').style.display  = 'none';
  }

  // ── DISPATCH FAVS SYNCED ─────────────────────────────
  // Updates the page's favIds Set in-place (if it exposed
  // itself as window.lvFavIds), then updates all fav UI.
  function dispatchFavsSync(newSet) {
    // Mutate the page's favIds in place so all closures stay valid
    const favIds = window.lvFavIds;
    if (favIds) {
      favIds.clear();
      for (const id of newSet) favIds.add(id);
    }

    // Update fav count badge(s) in the sidebar
    document.querySelectorAll('#fav-count').forEach(el => {
      el.textContent = newSet.size;
    });

    // Update all ♡ / ❤️ buttons in recipe cards
    document.querySelectorAll('[data-fav]').forEach(btn => {
      const id = parseInt(btn.dataset.fav);
      const on = newSet.has(id);
      btn.textContent = on ? '❤️' : '♡';
      btn.classList.toggle('is-on', on);
    });

    // Update the recipe-page hero fav button
    const heroFav = document.getElementById('hero-fav');
    if (heroFav && window.lvCurrentRecipeId != null) {
      const on = newSet.has(window.lvCurrentRecipeId);
      heroFav.textContent = on ? '❤️' : '♡';
      heroFav.classList.toggle('is-on', on);
    }

    // Let pages do any deeper re-render if they need it
    window.dispatchEvent(new CustomEvent('lv:favssynced', { detail: { favIds: newSet } }));
  }

  // ── INIT ─────────────────────────────────────────────
  async function init() {
    injectNavButton();
    injectModal();

    const sb = window._sb;
    if (!sb) return;

    // Restore session from the Supabase cookie/token on page load
    const { data: { session } } = await sb.auth.getSession();
    if (session?.user) {
      setNavUser(session.user);
      const merged = await sbMergeAndLoadFavs(session.user.id);
      setModalSignedIn(session.user, merged.size);
      dispatchFavsSync(merged);
    }

    // React to future auth state changes (sign in / sign out / token refresh)
    sb.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setNavUser(session.user);
        const merged = await sbMergeAndLoadFavs(session.user.id);
        setModalSignedIn(session.user, merged.size);
        dispatchFavsSync(merged);
      } else if (event === 'SIGNED_OUT') {
        setNavUser(null);
        setModalSignedOut();
        dispatchFavsSync(loadFavs()); // fall back to localStorage
      }
    });
  }

  document.addEventListener('DOMContentLoaded', init);

})();
