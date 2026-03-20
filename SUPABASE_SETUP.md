# Supabase Setup — Cooking at Livingstone

Your credentials are already baked into `supabase.js`. Two quick steps remain.

---

## Step 1 — Create the Favourites table

Go to your Supabase project → **SQL Editor** → **New Query**, paste and run:

```sql
create table favourites (
  user_id   uuid references auth.users on delete cascade,
  recipe_id integer not null,
  primary key (user_id, recipe_id)
);

alter table favourites enable row level security;

create policy "Users manage own favs" on favourites
  for all using (auth.uid() = user_id);
```

This creates a simple two-column table (user + recipe ID), locks it down with
Row-Level Security so each user can only see and edit their own favourites, and
cascades deletes so rows are cleaned up if a user account is deleted.

---

## Step 2 — Enable Google OAuth (optional but recommended)

1. Go to **Authentication → Providers → Google**
2. Toggle it **on**
3. Create OAuth credentials at https://console.cloud.google.com:
   - Create a project → APIs & Services → Credentials → OAuth 2.0 Client ID
   - Application type: **Web application**
   - Authorised redirect URI: `https://rlllpwghebmxcrmticjd.supabase.co/auth/v1/callback`
4. Paste the **Client ID** and **Client Secret** back into Supabase
5. Also add your GitHub Pages URL to Supabase → **Authentication → URL Configuration → Redirect URLs**

If you skip Google OAuth, email/password sign-in still works perfectly.

---

## Step 3 — Add to GitHub

The new/changed files to commit:

| File | What changed |
|------|-------------|
| `supabase.js` | **New** — Supabase client + auth + fav CRUD |
| `auth.js` | **New** — Nav button + sign-in modal |
| `shared.css` | Auth modal + nav button styles appended |
| `data.js` | `attachFavListeners` now calls `sbSyncFav` |
| `index.html` | Supabase SDK + auth scripts added |
| `browse.html` | + scripts + `window.lvFavIds` exposed |
| `author.html` | + scripts + `window.lvFavIds` exposed |
| `category.html` | + scripts + `window.lvFavIds` exposed |
| `recipe.html` | + scripts + `window.lvFavIds` + hero fav syncs |
| `authors.html` | + scripts |
| `categories.html` | + scripts |
| `ingredient-index.html` | + scripts |
| `submit.html` | + scripts |

---

## How it works end-to-end

1. User clicks **Sign In** in the nav → modal opens
2. They sign up with email/password or Google
3. On sign-in, any ❤️s they'd saved locally (before having an account) are
   automatically merged into their cloud favourites
4. From that point on, every ❤️ tap writes instantly to Supabase
5. They sign in on another device → same favourites appear immediately
6. Sign out → falls back gracefully to localStorage-only mode
