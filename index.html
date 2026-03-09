<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cooking at Livingstone — Family Recipes</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #FAF6EF;
    --warm-white: #FDF9F4;
    --ink: #1A1410;
    --brown: #6B4C35;
    --rust: #C05A2C;
    --gold: #D4A847;
    --sage: #7A8C6E;
    --muted: #9C8B7A;
    --border: #E8DDD0;
    --card: #FFFFFF;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--ink);
    min-height: 100vh;
  }

  /* HEADER */
  header {
    background: var(--ink);
    padding: 48px 40px 40px;
    position: relative;
    overflow: hidden;
  }
  header::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 300px; height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212,168,71,0.15) 0%, transparent 70%);
  }
  header::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--rust), var(--gold), var(--sage));
  }
  .header-eyebrow {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 12px;
  }
  header h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(32px, 5vw, 56px);
    color: var(--warm-white);
    line-height: 1.1;
    font-weight: 400;
  }
  header h1 em {
    font-style: italic;
    color: var(--gold);
  }
  .header-meta {
    margin-top: 12px;
    font-size: 13px;
    color: var(--muted);
    font-weight: 300;
  }
  .header-meta span { color: var(--cream); }

  /* LAYOUT */
  .app {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 0;
    min-height: calc(100vh - 200px);
  }

  .mobile-filter-trigger,
  .mobile-filter-backdrop,
  .mobile-sheet-head {
    display: none;
  }

  /* SIDEBAR */
  .sidebar {
    background: var(--warm-white);
    border-right: 1px solid var(--border);
    padding: 28px 20px;
    position: sticky;
    top: 0;
    height: calc(100vh - 200px);
    overflow-y: auto;
  }
  .sidebar-title {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
  }
  /* AUTHOR FILTER */
  .author-section {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border);
  }
  .author-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 8px 10px;
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 8px;
    text-align: left;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: var(--brown);
    margin-bottom: 6px;
    transition: all 0.15s;
  }
  .author-btn:last-child { margin-bottom: 0; }
  .author-btn:hover { border-color: var(--sage); color: var(--ink); background: var(--cream); }
  .author-btn.active { background: var(--ink); color: var(--warm-white); border-color: var(--ink); }
  .author-btn.active .ing-count { background: rgba(255,255,255,0.15); color: var(--gold); }
  .author-name { font-weight: 500; }
  .author-book { font-size: 11px; opacity: 0.7; display: block; margin-top: 1px; font-style: italic; font-weight: 300; }

  .search-wrap {
    position: relative;
    margin-bottom: 20px;
  }
  .search-wrap input {
    width: 100%;
    padding: 10px 14px 10px 36px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--cream);
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: var(--ink);
    outline: none;
    transition: border-color 0.2s;
  }
  .search-wrap input:focus { border-color: var(--rust); }
  .search-wrap svg {
    position: absolute;
    left: 10px; top: 50%;
    transform: translateY(-50%);
    opacity: 0.4;
  }

  .ingredient-group { margin-bottom: 8px; }
  .letter-header {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    padding: 6px 8px 4px;
  }
  .ingredient-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 7px 10px;
    background: transparent;
    border: none;
    border-radius: 6px;
    text-align: left;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: var(--brown);
    transition: all 0.15s;
  }
  .ingredient-btn:hover { background: var(--cream); color: var(--rust); }
  .ingredient-btn.active { background: var(--rust); color: white; }
  .ingredient-btn.active .ing-count { background: rgba(255,255,255,0.25); color: white; }
  .ing-count {
    font-size: 10px;
    background: var(--border);
    color: var(--muted);
    border-radius: 10px;
    padding: 2px 7px;
    font-weight: 500;
    min-width: 22px;
    text-align: center;
  }

  /* MAIN CONTENT */
  .main {
    padding: 32px 40px;
  }
  .view-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
  }
  .view-heading {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 400;
  }
  .view-heading em { font-style: italic; color: var(--rust); }
  .result-count {
    font-size: 12px;
    color: var(--muted);
    font-weight: 300;
  }
  .clear-btn {
    background: none;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 6px 14px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: var(--brown);
    cursor: pointer;
    transition: all 0.15s;
  }
  .clear-btn:hover { border-color: var(--rust); color: var(--rust); }

  /* RECIPE GRID */
  .recipe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  #recipe-grid {
    display: block;
  }

  .category-section {
    margin-bottom: 24px;
  }

  .category-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--border);
  }

  .category-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 400;
    color: var(--ink);
  }

  .category-toggle {
    background: none;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 5px 11px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: var(--brown);
    cursor: pointer;
  }

  .category-toggle:hover {
    border-color: var(--rust);
    color: var(--rust);
  }
  .recipe-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    transition: all 0.2s;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .recipe-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--rust), var(--gold));
    opacity: 0;
    transition: opacity 0.2s;
  }
  .recipe-card:hover { border-color: var(--rust); box-shadow: 0 4px 24px rgba(192,90,44,0.1); transform: translateY(-2px); }
  .recipe-card:hover::before { opacity: 1; }
  .recipe-card.expanded { border-color: var(--rust); box-shadow: 0 4px 24px rgba(192,90,44,0.12); }
  .recipe-card.expanded::before { opacity: 1; }

  .card-type {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 8px;
  }
  .card-summary {
    font-size: 13px;
    line-height: 1.6;
    color: #5d554d;
    margin-top: 10px;
    margin-bottom: 0;
  }
  .card-title {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 10px;
    color: var(--ink);
  }
  .card-meta {
    display: flex;
    gap: 12px;
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 14px;
    flex-wrap: wrap;
  }
  .card-meta span { display: flex; align-items: center; gap: 4px; }

  .ingredient-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 0;
  }
  .tag {
    font-size: 11px;
    padding: 3px 9px;
    border-radius: 20px;
    background: var(--cream);
    color: var(--brown);
    border: 1px solid var(--border);
  }
  .tag.highlighted { background: var(--rust); color: white; border-color: var(--rust); }

  /* EXPANDED RECIPE */
  .recipe-detail {
    display: none;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
  }
  .recipe-card.expanded .recipe-detail { display: block; }

  .detail-section-label {
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 8px;
    margin-top: 14px;
  }
  .detail-section-label:first-child { margin-top: 0; }

  .ingredients-list {
    list-style: none;
    font-size: 13px;
    line-height: 1.7;
    color: var(--brown);
  }
  .ingredients-list li::before {
    content: '—';
    margin-right: 8px;
    color: var(--gold);
  }

  .method-text {
    font-size: 13px;
    line-height: 1.8;
    color: #555;
    white-space: pre-line;
  }

  /* ALL INGREDIENTS VIEW */
  .all-ingredients-view {
    columns: 3;
    column-gap: 32px;
  }
  .alpha-section { break-inside: avoid; margin-bottom: 24px; }
  .alpha-letter {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 400;
    color: var(--border);
    line-height: 1;
    margin-bottom: 8px;
  }
  .alpha-ingredient {
    font-size: 13px;
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    padding: 4px 0;
    color: var(--brown);
    border-bottom: 1px dashed var(--border);
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .alpha-ingredient:hover { color: var(--rust); }
  .alpha-ingredient.active { color: var(--rust); font-weight: 500; }
  .alpha-ingredient .recipes-for {
    font-size: 11px;
    color: var(--muted);
    font-style: italic;
  }

  /* TABS */
  .tabs {
    display: flex;
    gap: 4px;
    margin-bottom: 24px;
    border-bottom: 1px solid var(--border);
    padding-bottom: 0;
  }
  .tab-btn {
    background: none;
    border: none;
    padding: 10px 16px 12px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: var(--muted);
    cursor: pointer;
    position: relative;
    transition: color 0.2s;
    margin-bottom: -1px;
  }
  .tab-btn.active { color: var(--rust); font-weight: 500; }
  .tab-btn.active::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: var(--rust);
  }

  /* EMPTY STATE */
  .empty-state {
    text-align: center;
    padding: 80px 40px;
    color: var(--muted);
  }
  .empty-state .emoji { font-size: 48px; margin-bottom: 16px; }
  .empty-state p { font-size: 14px; }

  /* SCROLLBAR */
  .sidebar::-webkit-scrollbar { width: 4px; }
  .sidebar::-webkit-scrollbar-track { background: transparent; }
  .sidebar::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

  @media (max-width: 768px) {
    .app { grid-template-columns: 1fr; }
    .main { padding: 20px 20px 96px; }
    .all-ingredients-view { columns: 1; }

    .mobile-filter-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      left: 16px;
      right: 16px;
      bottom: calc(16px + env(safe-area-inset-bottom, 0px));
      z-index: 120;
      border: 1px solid var(--border);
      border-radius: 999px;
      padding: 10px 14px;
      background: var(--ink);
      color: var(--warm-white);
      font-family: 'DM Sans', sans-serif;
      font-size: 13px;
      cursor: pointer;
      box-shadow: 0 8px 24px rgba(26, 20, 16, 0.24);
    }

    .mobile-filter-trigger .summary {
      color: rgba(250, 246, 239, 0.7);
      font-size: 11px;
      margin-left: 8px;
    }

    .mobile-filter-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(26, 20, 16, 0.5);
      z-index: 100;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s;
    }

    .mobile-filter-backdrop.show {
      display: block;
      opacity: 1;
      pointer-events: auto;
    }

    .sidebar {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: auto;
      height: min(78vh, 620px);
      z-index: 110;
      border-right: none;
      border-top: 1px solid var(--border);
      border-radius: 16px 16px 0 0;
      box-shadow: 0 -10px 36px rgba(26, 20, 16, 0.2);
      transform: translateY(104%);
      transition: transform 0.24s ease;
      overflow-y: auto;
      padding: 14px 16px 24px;
    }

    .sidebar.mobile-open {
      transform: translateY(0);
    }

    .mobile-sheet-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--border);
    }

    .mobile-sheet-title {
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--muted);
      font-weight: 500;
    }

    .mobile-sheet-close {
      background: none;
      border: 1px solid var(--border);
      border-radius: 999px;
      padding: 4px 10px;
      font-size: 12px;
      color: var(--brown);
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
    }
  }
</style>
</head>
<body>

<header>
  <div class="header-eyebrow">Family Recipe Collection</div>
  <h1>Cooking at <em>Livingstone</em></h1>
  <div class="header-meta"><span id="total-count">20</span> recipes · <span id="ingredient-count">—</span> unique ingredients</div>
</header>

<div class="app">
  <aside class="sidebar" id="filters-sidebar">
    <div class="mobile-sheet-head">
      <div class="mobile-sheet-title">Filters</div>
      <button class="mobile-sheet-close" id="mobile-sheet-close" type="button">Close</button>
    </div>
    <div class="sidebar-title">Filter by Author</div>
    <div class="author-section" id="author-list"></div>
    <div class="sidebar-title">Ingredients A–Z</div>
    <div class="search-wrap">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" id="ing-search" placeholder="Search ingredients…">
    </div>
    <div id="ingredient-list"></div>
  </aside>

  <main class="main">
    <div class="tabs">
      <button class="tab-btn active" data-tab="recipes">Recipes</button>
      <button class="tab-btn" data-tab="index">Full Index</button>
    </div>

    <div id="tab-recipes">
      <div class="view-controls">
        <div>
          <div class="view-heading" id="view-heading">All <em>Recipes</em></div>
          <div class="result-count" id="result-count"></div>
        </div>
        <button class="clear-btn" id="clear-btn" style="display:none">Clear filter</button>
      </div>
      <div class="recipe-grid" id="recipe-grid"></div>
      <div class="empty-state" id="empty-state" style="display:none">
        <div class="emoji">🔍</div>
        <p>No recipes found for this ingredient.</p>
      </div>
    </div>

    <div id="tab-index" style="display:none">
      <div class="view-heading" style="margin-bottom:24px">Ingredient <em>Index</em></div>
      <div class="all-ingredients-view" id="all-ingredients-view"></div>
    </div>
  </main>
</div>
<div class="mobile-filter-backdrop" id="mobile-filter-backdrop"></div>
<button class="mobile-filter-trigger" id="mobile-filter-trigger" type="button" aria-expanded="false" aria-controls="filters-sidebar">
  <span>Filters <span class="summary" id="mobile-filter-summary">All recipes</span></span>
  <span>☰</span>
</button>

<script>
const RECIPES = [
  {
    id: 1,
    title: "Sorta Salmon Niçoise",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "2",
    time: "18 mins",
    category: "Fish & Seafood",
    ingredients: [
      "2 x 120g salmon fillets, skin on, scaled, pin-boned",
      "300g green beans",
      "2 large eggs",
      "8 black olives (stone in)",
      "2 heaped tablespoons Greek yoghurt"
    ],
    method: `Place the salmon skin side down in a colander over a pan of boiling salted water, covered, to steam for 8 minutes. Line up the beans, trim off just the stalk end, then boil in the water under the salmon for 6 minutes, or until just cooked but not squeaky. Gently lower in the eggs to cook for exactly 5 1/2 minutes, alongside. Meanwhile, squash the olives and remove the stones, then finely chop the flesh. Mix half of the olives through the yoghurt with a splash of red wine vinegar, taste and season to perfection with sea salt and black pepper.

Remove the salmon to a board, then drain the eggs and beans in the colander. Toss the beans in the dressing and divide between your plates. Refresh the eggs under cold water until cool enough to handle, then peel and cut into quarters. Flake over the salmon, discarding the skin, arrange the eggs on top and dot over the remaining chopped olives. Finish with 1 teaspoon of extra virgin olive oil and a good pinch of pepper, from a height.`
  },
  {
    id: 2,
    title: "Broad Bean Salad",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "2",
    time: "15 mins",
    category: "Vegetarian",
    ingredients: [
      "200g fresh podded or frozen broad beans",
      "30g whole almonds",
      "1 x 480g jar of roasted red peppers in brine",
      "1/2 a bunch of fresh flat-leaf parsley (15g)",
      "30g Manchego cheese"
    ],
    method: `Boil the beans in a pan of boiling salted water for 3 minutes, then drain and pinch the skins off any larger beans. Toast the almonds in a dry griddle pan on a medium heat until lightly golden, tossing regularly, then remove and finely slice.

Drain the peppers and open out flat, then char on the hot griddle until bar-marked on one side only. Remove and slice 1cm thick. Finely slice the parsley stalks, pick the leaves, then toss with the broad beans, peppers, 1 1/2 tablespoons of extra virgin olive oil and 1 tablespoon each of red wine vinegar and brine from the pepper jar. Taste, season to perfection with sea salt and black pepper, and divide between your plates.

Finely shave over the cheese with a speed-peeler, drizzle with 1 teaspoon of extra virgin olive oil, scatter over the almonds, and serve.`
  },
  {
    id: 3,
    title: "Cherry Chard Wild Rice",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "2",
    time: "28 mins",
    category: "Vegetarian",
    ingredients: [
      "150g mixed wild rice",
      "200g mixed-colour chard",
      "60g dried sour cherries",
      "20g shelled unsalted walnut halves",
      "40g feta cheese"
    ],
    method: `Cook the rice in a pan of boiling salted water according to the packet instructions. Trim the chard stalks, cut them off and pop into a colander with the leaves on top, cover and steam above the rice for 3 minutes, then remove. Meanwhile, finely chop the cherries and, in a large bowl, mix with 1 tablespoon each of red wine vinegar and rice cooking water, then 1 tablespoon of extra virgin olive oil. Finely slice the walnuts, then the chard stalks, shred the leaves.

Drain the rice well, add to the cherry dressing bowl with all the chard and crumble in the feta. Toss well, then taste and season to perfection with sea salt and black pepper. Dish up, and sprinkle over the walnuts.`
  },
  {
    id: 4,
    title: "Prosciutto Celeriac Salad",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "2",
    time: "10 mins",
    category: "Salads",
    ingredients: [
      "200g celeriac",
      "2 teaspoons wholegrain mustard",
      "2 heaped tablespoons Greek yoghurt",
      "1/2 a bunch of fresh tarragon (15g)",
      "4 slices of prosciutto"
    ],
    method: `Peel the celeriac, then finely slice into matchsticks with good knife skills, using the julienne cutter on a mandolin (use the guard!), or a coarse box grater.

In a bowl, dress the celeriac with the mustard, yoghurt and 1 tablespoon each of extra virgin olive oil and red wine vinegar. Scrunch and massage together. Pick in the tarragon leaves, mix well, then taste and season to perfection with sea salt and black pepper. Divide between two plates, then wrap the prosciutto in waves around the outside. Drizzle with 1 teaspoon of extra virgin olive oil and sprinkle from a height with a pinch of pepper.`
  },
  {
    id: 5,
    title: "Super Green Spaghetti",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "2",
    time: "13 mins",
    category: "Pasta",
    ingredients: [
      "150g dried spaghetti",
      "4 cloves of garlic",
      "200g cavolo nero",
      "30g Parmesan cheese",
      "30g ricotta cheese"
    ],
    method: `Cook the pasta in a pan of boiling salted water according to the packet instructions. Meanwhile, peel the garlic. Tear the stems out of the cavolo and discard, adding the leaves and the garlic to the pasta pan for 5 minutes. Pour 1 1/2 tablespoons of extra virgin olive oil into a blender, then finely grate in the Parmesan. Use tongs to carefully transfer the cavolo leaves and garlic straight into the blender and blitz for a few minutes until super-smooth. Taste and season to perfection with sea salt and black pepper.

Drain the pasta, reserving a mugful of cooking water. Return it to the pan and toss with the vibrant green sauce, loosening with a splash of reserved cooking water, if needed, then divide between your plates. Dot over the ricotta, drizzle with a tiny bit of extra virgin olive oil, and tuck right in.`
  },
  {
    id: 6,
    title: "Lemony Courgette Linguine",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "2",
    time: "15 mins",
    category: "Pasta",
    ingredients: [
      "150g dried linguine",
      "2 mixed-colour courgettes",
      "1/2 a bunch of fresh mint (15g)",
      "30g Parmesan cheese",
      "1 lemon"
    ],
    method: `Cook the pasta in a pan of boiling salted water according to the packet instructions, then drain, reserving a mugful of cooking water. Meanwhile, slice the courgettes lengthways, then again into long matchsticks with good knife skills or using the julienne cutter on a mandolin (use the guard!). Place a large non-stick frying pan on a medium-high heat with 1 tablespoon of olive oil, then add the courgettes. Cook for 4 minutes, tossing regularly, while you finely slice the mint leaves, then stir them into the pan.

Toss the drained pasta into the courgette pan with a splash of reserved cooking water. Finely grate in most of the Parmesan and a little lemon zest, squeeze in all the juice, toss well, then taste and season to perfection with sea salt and black pepper. Dish up, finely grate over the remaining Parmesan and drizzle with 1 teaspoon of extra virgin olive oil before tucking in.`
  },
  {
    id: 7,
    title: "Hot-Smoked Salmon Frittata",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "2",
    time: "13 mins",
    category: "Fish & Seafood",
    ingredients: [
      "125g hot-smoked salmon, skin off",
      "1 bunch of spring onions",
      "4 large eggs",
      "2 heaped tablespoons half-fat crème fraîche",
      "40g Red Leicester cheese"
    ],
    method: `Preheat the grill to high. Place a 26cm non-stick ovenproof frying pan on a medium-high heat. Put the salmon into the pan, breaking it up as it starts to sizzle. Trim, finely slice and add the spring onions, along with a pinch of black pepper. Stir occasionally for 5 minutes while, in a large bowl, you vigorously whisk the eggs until they've doubled in size.

Reduce the heat to low, stir in the creme fraiche and grate in the cheese. Pour the contents of the pan into the egg bowl, mix well, then pour back into the pan, swirling it around and up the sides. Grill for 5 minutes, or until golden, set and just cooked through - keep an eye on it. Loosen the edges with a spatula, then slide on to a board, slice, and serve.`
  },
  {
    id: 8,
    title: "Roast Tikka Chicken",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "4",
    time: "1 hr 10 mins",
    category: "Poultry",
    ingredients: [
      "800g potatoes",
      "1 small head of cauliflower (600g)",
      "1 x 1.2kg whole chicken",
      "1 bunch of fresh coriander (30g)",
      "2 tablespoons tikka curry paste"
    ],
    method: `Preheat the oven to 180C/350F/gas 4. Wash the potatoes and chop into 3cm chunks. Trim the cauli stalk, remove any tough outer leaves, then chop the cauli and nice leaves the same size as the spuds. Finely slice the coriander stalks (reserving the leaves in a bowl of cold water). In a 30cm x 40cm roasting tray toss the veg and coriander stalks with a pinch of sea salt and black pepper, and 1 tablespoon each of olive oil and red wine vinegar.

Sit the chicken in the tray and rub all over with the tikka paste, getting into all the nooks and crannies. Place the chicken directly on the bars of the oven, scrunch everything in the tray and place exactly underneath the chicken to catch the tasty juices. Roast for 1 hour, or until everything is golden and cooked through, turning the veg halfway. Sit the chicken on top of the veg to rest for 5 minutes, then sprinkle over the drained coriander leaves and serve, tossing the veg in all the tasty juices before dishing up.`
  },
  {
    id: 9,
    title: "Harissa Chicken Traybake",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "4",
    time: "59 mins",
    category: "Poultry",
    ingredients: [
      "4 mixed-colour peppers",
      "2 red onions",
      "1 x 1.2kg whole chicken",
      "4 heaped teaspoons rose harissa",
      "4 sprigs of fresh mint"
    ],
    method: `Preheat the oven to 180C/350F/gas 4. Deseed the peppers and tear into big chunks, peel and quarter the onions and break apart into petals, then place it all in a 30cm x 40cm roasting tray. Use a large sharp knife to carefully cut down the back of the chicken, so you can open it out flat, then score the legs. Add to the tray with the harissa, and a little sea salt, black pepper and red wine vinegar. Toss well, making sure you get into all the nooks and crannies of the chicken.

Sit the chicken flat on top of the veg, skin side up, and roast it all for 50 minutes, or until gnarly and cooked through. Pick over the mint leaves before dishing up.`
  },
  {
    id: 10,
    title: "So Easy Fish Curry",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "4",
    time: "14 mins",
    category: "Fish & Seafood",
    ingredients: [
      "500g ripe mixed-colour cherry tomatoes",
      "500g white fish fillets, such as haddock, skin off, pin-boned",
      "1 heaped tablespoon korma curry paste",
      "1 tablespoon lime pickle",
      "1 x 400ml tin of light coconut milk"
    ],
    method: `Place 1 tablespoon of olive oil in a large shallow casserole pan on a high heat. Halve the tomatoes, adding them to the pan skin side down. Blister for 2 minutes without moving them while you chop the haddock into 4cm chunks.

Stir the haddock, korma paste, lime pickle and coconut milk into the pan. Bring to the boil, then simmer for 6 minutes, taking care not to break up the fish. Taste, season to perfection with sea salt and black pepper, then dish up. Joy.`
  },
  {
    id: 11,
    title: "Asian Tuna Steak Salad",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "2",
    time: "10 mins",
    category: "Fish & Seafood",
    ingredients: [
      "200g radishes, ideally with leaves",
      "2 heaped teaspoons pickled ginger",
      "2 teaspoons low-salt soy sauce",
      "250g frozen soya beans",
      "2 x 150g tuna steaks (ideally 2cm thick)"
    ],
    method: `Finely chop 2 radishes with the pickled ginger, then dress with the soy, 1 tablespoon of extra virgin olive oil and 2 teaspoons of water and put aside. Very finely slice the remaining radishes with their leaves.

Place the beans in a non-stick frying pan on a high heat, cover with boiling kettle water, boil for 2 minutes, then drain. Return the pan to a medium-high heat. Rub the tuna with 1 teaspoon of olive oil and a pinch of sea salt and black pepper, then sear for 1 1/2 minutes on each side, so it's blushing in the middle.

Divide the beans and radishes between your plates, half-tear the tuna and place proudly on top, then spoon over the pickled ginger mixture, drizzling all the juices around the plate. Finish with 1 teaspoon of extra virgin olive oil.`
  },
  {
    id: 12,
    title: "Sticky Mango Prawns",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "2",
    time: "20 mins",
    category: "Fish & Seafood",
    ingredients: [
      "300g large raw shell-on king prawns",
      "6 cloves of garlic",
      "1 teaspoon curry powder",
      "1 heaped tablespoon mango chutney",
      "1 lime"
    ],
    method: `Quickly pull the legs and tails off the prawns and peel off the shells, leaving the heads on for bonus flavour. Run the tip of your knife down their backs and pull out the vein. Put a large non-stick frying pan on a medium heat. Peel and very finely slice the garlic, fry with 1 tablespoon of olive oil until crisp, then scoop out and put aside, leaving the garlicky oil behind.

Stir the curry powder into the oil, then add the prawns. Fry for 4 minutes, or until the prawns are cooked through, tossing regularly. Stir in the mango chutney for 30 seconds, taste, season to perfection with sea salt and black pepper, then dish up. Scatter over the crispy garlic, finely grate over half the lime zest and serve with lime wedges, for squeezing over.`
  },
  {
    id: 13,
    title: "Meltin' Mustardy Beef",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "6",
    time: "4 hrs 8 mins",
    category: "Beef",
    ingredients: [
      "900g shin of beef, bone out",
      "500g carrots",
      "2 onions",
      "120ml Worcestershire sauce",
      "2 heaped teaspoons wholegrain mustard"
    ],
    method: `Preheat the oven to 160C/325F/gas 3. Place a large shallow casserole pan on a high heat, with a large non-stick frying pan on a high heat alongside. Dice the beef into 5cm chunks and toss with a generous amount of black pepper and a pinch of sea salt, then dry fry in the hot frying pan with the bone for 8 minutes.

Meanwhile, wash and trim the carrots, chop into 5cm chunks, and place in the casserole pan with 1 tablespoon of olive oil. Peel and quarter the onions and break apart into petals, straight into the pan, stirring regularly. When the meat is nicely coloured, tip it into the casserole pan, then stir in the Worcestershire sauce and mustard, and cover with 800ml of boiling kettle water.

Cover, then cook in the oven for 4 hours, or until the beef is meltingly tender. Loosen with a splash of water, if needed. Taste, season to perfection, and serve.`
  },
  {
    id: 14,
    title: "Chickpea Chard Pork",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "4",
    time: "29 mins",
    category: "Pork",
    ingredients: [
      "400g piece of pork fillet",
      "1 x 480g jar of roasted peeled peppers in brine",
      "300g rainbow chard",
      "1 heaped teaspoon fennel seeds",
      "1 x 660g jar of chickpeas"
    ],
    method: `Put a large shallow casserole pan on a high heat. Season the pork with sea salt and black pepper, then place in the pan with 1 tablespoon of olive oil and sear for 5 minutes, turning halfway. Meanwhile, drain the peppers and quickly dice into 1cm chunks, then trim and finely slice the chard, stalks and all.

Remove the pork to a plate, then add the fennel seeds, peppers and all the chard to the pork fat left behind in the pan. Stir and fry for 2 minutes, then pour in the chickpeas and their juice, stir, and bring to the boil. Sit the pork back in so it's touching the base of the pan, pour over any resting juices, cover, and simmer gently on a medium heat for 12 minutes, or until the pork is just cooked through and it all smells incredible, turning the pork occasionally.

Rest for 2 minutes, slice the pork, season the chickpeas to perfection, adding a splash of red wine vinegar, drizzle with extra virgin olive oil, and serve.`
  },
  {
    id: 15,
    title: "Comforting Sausage Bake",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "4",
    time: "55 mins",
    category: "Pork",
    ingredients: [
      "600g ripe mixed-colour cherry tomatoes",
      "4 cloves of garlic",
      "200g rosemary focaccia",
      "1 x 660g jar of white beans",
      "12 chipolatas"
    ],
    method: `Preheat the oven to 180C/350F/gas 4. Halve the cherry tomatoes, peel and finely slice the garlic, and tear the bread into bite-sized chunks. Place it all in a 30cm x 35cm roasting tray, pour in the beans and their juice, drizzle with 1 tablespoon each of olive oil and red wine vinegar, add a splash of water, and mix it all together. Quickly pinch and twist each chipolata in the middle to make it into two mini ones, then randomly dot them around your bake, lightly pressing them into the beans and tomatoes.

Roast for 45 minutes, or until everything is golden, bubbling and delicious.`
  },
  {
    id: 16,
    title: "Aromatic Lamb Curry",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "4",
    time: "1 hr 10 mins",
    category: "Lamb",
    ingredients: [
      "400g lamb shoulder, bone out",
      "2 large onions",
      "2 large aubergines (800g total)",
      "2 tablespoons rogan josh curry paste",
      "200g natural yoghurt"
    ],
    method: `Preheat the oven to 180C/350F/gas 4. Put a large shallow casserole pan on a high heat. Dice the lamb into 3cm chunks and place in the pan fat side down. Peel the onions, dice with the aubergines to the same size as the lamb, then stir into the pan. Season with sea salt and black pepper, stir in the curry paste and 1 tablespoon of red wine vinegar, then transfer to the oven for 1 hour, or until tender, stirring halfway and loosening with a splash of water, if needed.

Taste the curry, season to perfection, ripple through the yoghurt, drizzle over 1/2 a tablespoon of extra virgin olive oil, hit it with lots of black pepper, and serve.`
  },
  {
    id: 17,
    title: "Cherry Chocolate Mousse",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "6",
    time: "30 mins",
    category: "Dessert",
    ingredients: [
      "200g dark chocolate (70%)",
      "1 x 400g tin of black pitted cherries in syrup",
      "200ml double cream",
      "4 large eggs",
      "2 tablespoons golden caster sugar"
    ],
    method: `Melt the chocolate in a heatproof bowl over a pan of gently simmering water, then remove to cool for 10 minutes. Meanwhile, simmer the cherries and their syrup in a non-stick frying pan on a medium heat until thick, then remove.

Whip the cream to very soft peaks. Separate the eggs, add the yolks to the cream with the sugar, and whisk to combine. Add a pinch of sea salt to the whites and, with a clean whisk, beat until super-stiff. Fold the cooled chocolate into the cream, then very gently fold that through the egg whites with a spatula.

Divvy up the mousse between six glasses or bowls, interspersing the cherries and syrup throughout, and finishing with a few nice cherries on top.`
  },
  {
    id: 18,
    title: "Buddy's Flapjack Biscuits",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "16 biscuits",
    time: "29 mins",
    category: "Baking",
    ingredients: [
      "100g unsalted butter (at room temperature)",
      "100g mixed dried fruit and nuts",
      "100g porridge oats",
      "100g self-raising flour",
      "100g golden syrup"
    ],
    method: `Preheat the oven to 180C/350F/gas 4. Line a deep 20cm square baking tin with greaseproof paper and rub with olive oil. Pulse the butter, dried fruit and nuts, oats and flour in a food processor until the mix comes together and away from the sides, then pulse in the syrup until fully combined.

Transfer to the lined tin, flattening to the edges. Bake for 15 to 20 minutes, or until golden. Remove from the oven, slice into 16 squares ready to cut, and leave to cool in the tin for 5 minutes. Use the paper to lift out on to a wire rack, and leave to cool completely. Simple, easy, delicious - spread the word!`
  },
  {
    id: 19,
    title: "Walnut-Whip Affogato",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "4",
    time: "9 mins",
    category: "Dessert",
    ingredients: [
      "50g dark chocolate (70%)",
      "20g unsalted butter",
      "50g shelled unsalted walnut halves",
      "4 large scoops of vanilla ice cream",
      "4 long shots of espresso"
    ],
    method: `Melt the chocolate and butter with a pinch of sea salt in a heatproof bowl over a pan of gently simmering water, then remove. Reserving 4 perfect walnut halves for decoration, slice or crumble up the rest.

Roll your ice cream into nice round scoops and divide between four teacups. Scatter over the sliced or crumbled walnuts, pour a shot of hot espresso into each cup, stick a walnut proudly on top, then drizzle over the melted chocolate.`
  },
  {
    id: 20,
    title: "Berry Meringue Ripple",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "2",
    time: "8 mins",
    category: "Dessert",
    ingredients: [
      "2 large scoops of vanilla ice cream",
      "200g blueberries",
      "2 shop-bought meringues",
      "100g raspberries",
      "Dark chocolate (70%), to serve"
    ],
    method: `Get your ice cream out of the freezer. Put the blueberries into a non-stick frying pan with a splash of water and place on a high heat for 2 minutes, or until they all start to burst and get jammy, then remove from the heat.

Layering up as you like, crumble the meringues between glasses or bowls, halve and add the raspberries and a nice round scoop of ice cream to each, then spoon over the jammy blueberries and their juices. Shave or grate over a little chocolate and tuck in, rippling it all together in a wonderful collision of flavours.`
  },
  {
    id: 21,
    title: "Beef, Beets & Horseradish",
    author: "Jamie Oliver",
    book: "5 Ingredients",
    serves: "2",
    time: "14 mins",
    category: "Beef",
    ingredients: [
      "160g raw mixed-colour baby beets",
      "3 heaped teaspoons creamed horseradish",
      "3 heaped teaspoons half-fat crème fraîche",
      "50g watercress",
      "40g finely sliced bresaola"
    ],
    method: `Scrub the beets clean, reserving any nice leaves, then finely slice into matchsticks with good knife skills or using the julienne cutter on a mandolin (use the guard!). Dress with 1/2 a tablespoon each of extra virgin olive oil and red wine vinegar, the horseradish and creme fraiche, then season to perfection with sea salt and black pepper. Delicately toss with the watercress and any reserved beet leaves.

Divide up the bresaola between your plates, followed by the beet salad, then drizzle with 1 teaspoon of extra virgin olive oil, and serve.`
  },
  {
    id: 22,
    title: "Cauliflower Pickles",
    author: "Christine Mansfield",
    book: "Indian Cooking Masterclass",
    serves: "1 litre",
    time: "5 hrs 10 mins plus cooling",
    category: "Pickles & Chutneys",
    ingredients: [
      "500 g cauliflower, cut into florets",
      "2 tablespoons table salt",
      "3 tablespoons vegetable oil",
      "5 garlic cloves, finely sliced",
      "2 tablespoons finely shredded ginger",
      "10 small red chillies, thinly sliced",
      "2 teaspoons black mustard seeds",
      "1 teaspoon cumin seeds",
      "1 teaspoon ground turmeric",
      "1/2 teaspoon Kashmiri chilli powder",
      "2 cups (500 ml) apple cider vinegar"
    ],
    method: `Place the cauliflower in a colander, sprinkle with 1 teaspoon salt, cover with a lid and set aside at room temperature for 5 hours. This allows the cauliflower to soften slightly. Tip the cauliflower onto a dry cloth and rub off any excess liquid or salt. Don't rinse the cauliflower in water. Set aside.

Heat the oil in a wide-based pot over medium heat. Add the garlic, ginger and chilli and cook for 45 seconds or until softened but not coloured. Add the spices, stir to combine and cook for a further 30 seconds or until fragrant. Add the vinegar with the remaining salt, bring to the boil and simmer for 3 minutes. Remove from heat, add the cauliflower and stir to combine. Spoon into a 1 litre sterilised glass jar, making sure the cauliflower is covered with the liquid, and seal with a tight-fitting lid. Allow to cool before storing in the refrigerator until ready to serve. Enjoy these pickles within 2 weeks of making.`
  },
  {
    id: 23,
    title: "Chilli Mango Pickle",
    author: "Christine Mansfield",
    book: "Indian Cooking Masterclass",
    serves: "500 g",
    time: "40 mins plus cooling",
    category: "Pickles & Chutneys",
    ingredients: [
      "2 tablespoons vegetable oil",
      "1 red onion, minced",
      "2 garlic cloves, crushed",
      "1 teaspoon garam masala",
      "4 green cardamom pods, cracked",
      "2 small red chillies, minced",
      "1 tablespoon fresh curry leaves, finely sliced",
      "1 Granny Smith apple, peeled, cored and finely diced",
      "3 green or under-ripe mangoes, peeled and cubed",
      "330 g sugar"
    ],
    method: `Heat the oil in a large frying pan over medium heat. Add the onion, garlic, garam masala, cardamom, chilli and curry leaves and cook, stirring regularly, for 5 minutes or until softened. Add the apple and mangoes and cook for 5 minutes or until softened. Add the sugar and reduce heat to low and simmer for 30 minutes or until most of the liquid has evaporated.

Pour the hot pickle into hot sterilised glass jars and seal with tight-fitting lids. Keep for up to 1 year. Refrigerate after opening.`
  },
  {
    id: 24,
    title: "Tomato Kasundi",
    author: "Christine Mansfield",
    book: "Indian Cooking Masterclass",
    serves: "600 g",
    time: "1 hr plus cooling",
    category: "Pickles & Chutneys",
    ingredients: [
      "1 tablespoon brown mustard seeds",
      "160 ml malt vinegar",
      "1 tablespoon chopped fresh ginger",
      "6 garlic cloves",
      "8 small red chillies, minced",
      "1 tablespoon mustard oil",
      "1 tablespoon cumin seeds, toasted and ground",
      "1/2 teaspoon ground cloves",
      "2 teaspoons ground turmeric",
      "1 kg ripe tomatoes, peeled and roughly chopped",
      "1 tablespoon sea salt flakes"
    ],
    method: `Heat a frying pan over low heat. Add the mustard seeds and vinegar and cook for 5 minutes, taking care not to evaporate the vinegar. Set aside to cool.

Place the mustard seed vinegar, ginger, garlic and chilli in a food processor and blend until a smooth paste forms.

Heat the oil in a heavy-based frying pan over medium-low heat. Add the ground spices and cook for 15 seconds or until just fragrant. Add the mustard-cardamom paste and tomato, stir to combine and cook, stirring regularly, for 45 minutes or until the tomato has broken down. Add the sugar and salt, stir to combine and cook for a further 5 minutes. Taste and adjust seasoning, if necessary. Transfer to a food processor and pulse briefly to form a coarse paste. Pour into sterilised glass jars and seal with tight-fitting lids. Store in the pantry for up to 1 month. Refrigerate once opened.`
  },
  {
    id: 25,
    title: "Pork Vindaloo",
    author: "Christine Mansfield",
    book: "Indian Cooking Masterclass",
    serves: "6",
    time: "2 hrs 10 mins",
    category: "Curries",
    ingredients: [
      "1.2 kg pork neck",
      "2 teaspoons ground chilli",
      "2 teaspoons ground cumin",
      "1/2 teaspoon ground cloves",
      "1 tablespoon freshly ground black pepper",
      "1 teaspoon ground cinnamon",
      "1 teaspoon ground turmeric",
      "1/2 teaspoon ground cardamom",
      "6 garlic cloves, minced",
      "2 small red chillies, minced",
      "2 teaspoons minced ginger",
      "75 ml coconut vinegar, plus extra 2 tablespoons",
      "75 ml malt vinegar",
      "1/4 cup (60 ml) vegetable oil",
      "3 onions, thinly sliced",
      "100 ml tamarind liquid",
      "1 litre white chicken stock",
      "3 ripe tomatoes, roughly chopped",
      "1 tablespoon jaggery, shaved",
      "2 teaspoons sea salt flakes",
      "2 tablespoons fried garlic slices"
    ],
    method: `Cut the pork neck in half lengthwise then cut each piece into 4 cm-thick slices.

Place the ground spices, garlic, chilli, ginger and both vinegars in a bowl and stir to combine. Add the pork and set aside to marinate for 30 minutes.

Preheat oven to 160C. Heat the oil in a baking dish over medium heat and saute the onions for 3 minutes or until softened and starting to colour. Add the pork with the marinade and cook for 4-5 minutes on both sides. Add the tamarind liquid, stock, tomato and jaggery, cover with a lid and transfer to oven. Roast for 90 minutes or until the pork is tender.

Remove dish from oven and remove pork from the sauce. Set the pork aside in a warm place. Put the sauce in a saucepan over high heat and bring to the boil. Cook until reduced by half or until slightly thickened. Season the sauce with the extra coconut vinegar and salt, taste and adjust seasoning, if necessary.

Slice the meat into 2 cm-thick slices, arrange on plates and spoon over the sauce. Sprinkle with fried garlic and serve with steamed basmati rice.`
  },
  {
    id: 26,
    title: "Black Pepper Chicken and Onion Curry",
    author: "Christine Mansfield",
    book: "Indian Cooking Masterclass",
    serves: "4",
    time: "2 hrs 30 mins",
    category: "Curries",
    ingredients: [
      "1 tablespoon ginger garlic paste, see recipe page 436",
      "1 teaspoon sea salt flakes",
      "2 tablespoons lemon juice",
      "2 teaspoons ground turmeric",
      "2 teaspoons ground coriander",
      "1 teaspoon chilli powder",
      "1 tablespoon freshly ground black pepper",
      "4 x 180 g chicken marylands, cut into thigh and leg joints",
      "100 ml vegetable oil",
      "2 brown onions, sliced lengthwise",
      "1/2 cup onion puree (blend 1 white onion with 2 tablespoons vegetable oil)",
      "2 tablespoons finely shredded ginger",
      "4 tablespoons coriander leaves, roughly chopped",
      "2 tablespoons fried shallot slices, see Glossary"
    ],
    method: `Place the ginger garlic paste, salt, lemon juice, turmeric, coriander, chilli and half the pepper in a bowl and mix to combine. Rub into the chicken. Place in the fridge to marinate for 2 hours.

Heat the oil in a large frying pan over medium heat. Add the remaining black pepper and the onion and cook, stirring, for 5 minutes or until softened and starting to colour. Reduce heat slightly, stir in the onion puree and cook for a further 10 minutes or until onion is browned. Increase heat to medium-high, add the chicken with its marinade and cook for 5 minutes to remove any excess liquid. Add 1 cup (250 ml) water and simmer, turning the chicken halfway through, for 15 minutes or until chicken is just cooked through. Check seasoning and add a little extra salt, if necessary. Transfer to a serving dish and garnish with shredded ginger, coriander leaves and fried shallots.`
  },
  {
    id: 27,
    title: "Eggplant Pickle",
    author: "Christine Mansfield",
    book: "Indian Cooking Masterclass",
    serves: "800 g",
    time: "45 mins plus cooling",
    category: "Pickles & Chutneys",
    ingredients: [
      "4 x 300 g purple eggplants, peeled and diced into 2 cm cubes",
      "1 teaspoon table salt",
      "2 cups (500 ml) vegetable oil",
      "1/2 cup (125 ml) mustard oil",
      "1 tablespoon mustard seeds",
      "1 tablespoon fennel seeds",
      "1 tablespoon cumin seeds",
      "1/2 cup fresh curry leaves",
      "1 teaspoon Kashmiri chilli powder",
      "1 tablespoon ground turmeric",
      "160 ml white vinegar",
      "3 tablespoons tamarind puree",
      "2 tablespoons sea salt flakes"
    ],
    method: `Sprinkle the eggplant with table salt and set aside to drain in a colander for 10 minutes. Squeeze out excess moisture and pat dry with a cloth. Don't use water to wash the eggplant, as the flesh will become mushy.

Heat the vegetable oil in a deep-fryer or large saucepan until temperature reaches 180C. Add eggplant in small batches and fry for 4 minutes or until golden. Set aside to drain on paper towel.

Heat the mustard oil in a large frying pan over medium heat. Add the mustard, fennel and cumin seeds with the curry leaves and cook, being careful not to burn, for 30 seconds or until fragrant. Add the ginger garlic paste and cook for 2 minutes. Add the ground spices and cook for 30 seconds. Stir through the vinegar, tamarind, sugar and salt and cook for 5 minutes. Add the fried eggplant, reduce heat to medium-low and cook for a further 5 minutes or until flavoursome and slightly sticky. Pour into sterilised glass jars and seal with tight-fitting lids. Store in the refrigerator for up to 1 month.`
  },
  {
    id: 28,
    title: "Tomato Duck Curry",
    author: "Christine Mansfield",
    book: "Indian Cooking Masterclass",
    serves: "4",
    time: "1 hr 20 mins",
    category: "Curries",
    ingredients: [
      "100 ml vegetable oil",
      "1/2 teaspoon cumin seeds",
      "1 teaspoon black mustard seeds",
      "1 cinnamon stick",
      "4 green cardamom pods",
      "3 white onions, finely sliced",
      "1 tablespoon ginger garlic paste, see recipe page 436",
      "1 teaspoon chilli powder",
      "1 teaspoon ground turmeric",
      "2 teaspoons ground cumin",
      "4 duck marylands, cut into thigh and leg joints",
      "2 ripe tomatoes, chopped",
      "1 tablespoon tomato paste",
      "1 cup (250 ml) freshly squeezed orange or mandarin juice",
      "1/2 teaspoon garam masala",
      "2 tablespoons chopped coriander leaves"
    ],
    method: `Heat 2 teaspoons of oil in a wide-based frying pan over medium-low heat. Add the spices and cook until they start to pop, stirring occasionally and taking care not to burn, for 10 minutes or until just starting to brown. Add the chilli and ginger garlic paste and cook for 2 minutes or until fragrant. Stir through the ground cumin and cook for a further 1 minute. Add the duck pieces and mix thoroughly with the onion, using tongs to roll the pieces in the pan to coat. Cook for 2-3 minutes before adding the tomato, tomato paste, salt, orange juice and 1/2 cup (125 ml) water. Bring to the boil and reduce heat to low and simmer, turning the duck halfway through cooking, for 45 minutes or until duck is tender. Add a little extra water if the sauce dries out too much. The sauce should cling to the duck when finished, not be too wet. Remove the cinnamon stick. Season with salt and sprinkle with the garam masala. Top with the coriander leaves and serve with chapati.`
  },
  {
    id: 29,
    title: "Konkan Fish and Eggplant Curry",
    author: "Christine Mansfield",
    book: "Indian Cooking Masterclass",
    serves: "8",
    time: "1 hr 10 mins",
    category: "Curries",
    ingredients: [
      "1 dried kokum, see Glossary",
      "1/2 cup (90 g) rice flour",
      "2 teaspoons sea salt flakes",
      "1 kg white fish fillets, trimmed, skin removed and cut into 5 cm pieces",
      "1 litre vegetable oil, for deep-frying",
      "2 x 250 g purple eggplants, cut into 4 cm pieces",
      "2 tablespoons coconut oil",
      "1 teaspoon brown mustard seeds",
      "3 tablespoons fennel seeds",
      "20 fresh curry leaves",
      "1/4 teaspoon dried chilli flakes",
      "1 red onion, finely sliced lengthwise",
      "1 1/2 tablespoons ginger garlic paste, see recipe page 436",
      "3 small red chillies, minced",
      "1 teaspoon ground turmeric",
      "1 teaspoon ground cumin",
      "1 teaspoon Kashmiri chilli powder",
      "1 tablespoon freshly ground black pepper",
      "100 ml tamarind puree",
      "1/2 cup (125 ml) fresh tomato puree (blend 2 ripe tomatoes)",
      "1 1/2 cups (375 ml) coconut cream",
      "1 long red chilli, halved, deseeded and sliced diagonally",
      "1 long green chilli, halved, deseeded and sliced diagonally",
      "1/2 cup coriander leaves",
      "1/4 cup fried shallot slices, see Glossary",
      "1/4 cup fried curry leaves"
    ],
    method: `Soak the kokum in 100 ml water for 30 minutes. Discard kokum and reserve water.

Season the rice flour with a little salt and pepper and dust the fish in the flour to lightly coat, shaking off any excess. Heat the oil in a deep-fryer or large saucepan to 180C. Fry the fish in batches, 2 pieces at a time, taking care not to break it. Remove and drain on paper towel. In the same oil, fry the eggplant for 3-4 minutes or until golden. Drain and set aside.

To make the curry gravy, heat the coconut oil in a wide-based pan over low heat. Add the mustard and fennel seeds and cook for 30 seconds or until they start to pop. Add the curry leaves and chilli flakes and cook for 30 seconds. Add the onion and cook until softened, around 2 minutes. Stir through the ginger garlic paste and cook, stirring frequently, for 2 minutes or until softened.

Mix together the ground spices and salt in a small bowl. Add to the onion, stir to combine and cook for a further 1 minute or until fragrant. Add the reserved kokum water, tamarind, tomato puree and coconut cream and bring to a simmer. Reduce heat to low and simmer for 5 minutes. Add the red and green chilli, fried fish and eggplant and stir to combine. Cook for a further 5 minutes before removing from heat. Stir through the coriander and garnish with fried shallots and curry leaves. Serve with steamed rice and pappadams.`
  },
  {
    id: 30,
    title: "Yoghurt Baked Duck",
    author: "Christine Mansfield",
    book: "Indian Cooking Masterclass",
    serves: "4",
    time: "1 hr 25 mins",
    category: "Poultry",
    ingredients: [
      "4 x 180 g duck marylands",
      "170 ml mustard oil",
      "2 teaspoons freshly minced garlic",
      "1 red onion, finely diced",
      "1 tablespoon white vinegar",
      "2 tablespoons freshly chopped coriander leaves",
      "1 teaspoon freshly minced green chilli",
      "2 tablespoons mustard oil",
      "1 tablespoon Kashmiri chilli powder",
      "1 tablespoon ground coriander",
      "2 teaspoons ground turmeric",
      "2 teaspoons sea salt flakes",
      "2 tablespoons ginger garlic paste, see recipe page 436",
      "225 g thick plain yoghurt",
      "75 ml buttermilk"
    ],
    method: `To make the yoghurt marinade, place all the ingredients together in a bowl and mix to combine. Massage the marinade into the duck until thoroughly coated. Set aside for 30 minutes.

Heat the mustard oil in a large, deep saucepan over medium heat. Add the garlic and onion and cook, stirring, for 3 minutes or until softened and starting to colour. Add the duck with the marinade and 100 ml water and stir to combine. Cover with a lid, reduce heat to low and simmer for 25 minutes. Turn the duck pieces over in the gravy and cook for a further 25 minutes or until cooked. You may need to add a little extra water if the gravy dries out too much. Remove lid, add the vinegar and cook for 2-3 minutes. Remove from heat and stir through the coriander and chilli. Serve with chapati or roti.`
  },
  {
    id: 31,
    title: "Fried Turmeric Fish with Coconut Beetroot Salad",
    author: "Christine Mansfield",
    book: "Indian Cooking Masterclass",
    serves: "4",
    time: "35 mins",
    category: "Seafood",
    ingredients: [
      "1/2 teaspoon chilli powder",
      "1 teaspoon ground turmeric",
      "1 teaspoon freshly ground black pepper",
      "1 tablespoon minced ginger",
      "3 garlic cloves, minced",
      "2 teaspoons minced fresh turmeric",
      "2 teaspoons sea salt flakes",
      "1 tablespoon coconut vinegar",
      "4 x 150 g wild barramundi portions, cut from centre of the fillet for even thickness",
      "1/4 cup (60 ml) vegetable oil",
      "4 tablespoons coconut beetroot salad, to serve, see Salads page 81",
      "1 punnet Swiss chard cress, snipped",
      "1 punnet mustard cress, snipped",
      "2 tablespoons fried curry leaves"
    ],
    method: `Place the ground spices, ginger, garlic, turmeric, salt and coconut vinegar in a large bowl and mix to combine. Add the fish and toss gently to coat. Cover and set aside to marinate for 20 minutes.

Heat a frying pan over medium heat. Add the oil and fry the fish, skin-side down, for 4 minutes or until skin is crisp. Add a splash of water, making sure the paste doesn't burn, reduce the heat slightly, if necessary. Turn the fish and cook on the other side for a further 3-4 minutes, depending on the thickness of the fish, or until cooked through.

Divide fish between plates and spoon over the coconut beetroot salad. Scatter with the Swiss chard and mustard cress and fried curry leaves to serve.`
  },
  {
    id: 32,
    title: "Black Pepper Prawns",
    author: "Christine Mansfield",
    book: "Indian Cooking Masterclass",
    serves: "4",
    time: "30 mins",
    category: "Seafood",
    ingredients: [
      "1/2 cup grated fresh coconut",
      "1 tablespoon vegetable oil",
      "1 teaspoon brown mustard seed",
      "3 small garlic cloves, crushed",
      "20 fresh curry leaves",
      "1 brown onion, finely diced",
      "2 small green chillies",
      "1 tablespoon minced ginger",
      "2 tomatoes, chopped",
      "1 teaspoon freshly ground black pepper",
      "1/4 teaspoon ground turmeric",
      "2 teaspoons ground coriander seed",
      "1 teaspoon ground cumin",
      "1 teaspoon sea salt flakes",
      "12 x 120 g raw jumbo king prawns",
      "1 teaspoon lime juice",
      "1 tablespoon shredded coriander leaves"
    ],
    method: `Preheat oven to 160C. Scatter the coconut on a baking tray and roast for 5-6 minutes or until lightly coloured. Use a mortar and pestle to grind to a paste and set aside. Increase oven temperature to 200C.

Heat the oil in a deep frying pan over medium heat. Add the mustard seeds, garlic and curry leaves and cook for 1 minute or until fragrant. Add the onion and cook for 2 minutes or until softened. Stir in the green chilli and ginger and cook for 1 minute. Add the tomato and cook for 5 minutes or until softened. Add the ground spices and salt and cook for a further 1 minute. Add 3 tablespoons water, stir to combine and cook for 3 minutes or until sauce is thickened. Stir through the roasted coconut paste and remove from heat. Set aside.

Without removing the shells, butterfly the prawns by making a split down the centre of the prawn underside from head-to-tail, ensuring prawns stay in one piece. Spoon half the sauce onto a baking tray and top with the prawns, shell-side down, in a single layer. Spoon over the remaining sauce and bake for 6-8 minutes or until cooked through. Drizzle with lime juice and sprinkle with shredded coriander to serve.`
  },
  {
    id: 33,
    title: "Tamarind Prawns",
    author: "Christine Mansfield",
    book: "Indian Cooking Masterclass",
    serves: "6",
    time: "25 mins",
    category: "Seafood",
    ingredients: [
      "1 teaspoon ground turmeric",
      "1 teaspoon Kashmiri chilli powder",
      "2 teaspoons roasted ground coriander",
      "1 teaspoon sea salt flakes",
      "1/3 cup (80 ml) vegetable oil",
      "500 g raw king prawn meat, peeled (weight after shells removed), deveined and butterflied",
      "6 oven-roasted cherry tomatoes, halved",
      "3 tablespoons freshly chopped coriander leaves",
      "4 tablespoons fried curry leaves",
      "3 tablespoons sunflower oil",
      "1 teaspoon brown mustard seeds",
      "1 teaspoon fenugreek seeds",
      "6 red shallots, finely diced",
      "2 small green chillies, minced",
      "1 tablespoon ginger garlic paste, see recipe page 436",
      "12 fresh curry leaves",
      "2 ripe tomatoes, seeded and chopped",
      "1 teaspoon Kashmiri chilli powder",
      "1/2 teaspoon ground turmeric",
      "1 teaspoon roasted ground coriander",
      "2 teaspoons sea salt flakes",
      "1 tablespoon tamarind puree",
      "1 tablespoon caster sugar"
    ],
    method: `Place the turmeric, chilli powder, ground coriander, salt and vegetable oil in a bowl and mix to make a paste. Add the prawns and toss to coat well. Set aside.

To make the tamarind sauce, heat the oil in a frying pan over medium heat. Add the mustard seeds and fenugreek seeds and cook for 30 seconds or until they start to pop, taking care not to let them burn. Add the shallot and green chilli and cook for 2 minutes or until softened but not coloured. Stir in the ginger garlic paste and curry leaves and cook for 1 minute. Add the tomato and cook for 2 minutes or until softened. Add the ground spices, salt, tamarind and sugar and bring to a simmer. Cook for 5 minutes or until the sauce thickens. Remove from heat and set aside. If you want to make the sauce ahead of time, you'll need to reheat it in a frying pan or saucepan. Make sure it's hot when the prawns are being cooked, so you can do the final assembly.

To cook the prawns, heat a frying pan over high heat. Add the prawns and cook for 3 minutes or until half-cooked and starting to colour. Add the tamarind sauce to the prawns with the roasted cherry tomato and stir to combine. Cook for 1 minute only, just enough to warm through, remove from heat and stir through the chopped coriander. Top with fried curry leaves to serve.`
  },
  {
    id: 34,
    title: "Chicken Pepper Fry",
    author: "Christine Mansfield",
    book: "Indian Cooking Masterclass",
    serves: "4",
    time: "40 mins",
    category: "Poultry",
    ingredients: [
      "2 tablespoons vegetable oil",
      "1 cinnamon stick",
      "2 green cardamom pods, cracked",
      "2 white onions, finely diced",
      "2 tablespoons ginger garlic paste, see recipe page 436",
      "1 tablespoon curry leaves",
      "2 tomatoes, seeded and diced",
      "2 teaspoons sea salt flakes",
      "1 kg chicken wings, wing tips removed",
      "2 tablespoons fried curry leaves",
      "2 tablespoons coriander seeds",
      "1 1/2 teaspoons cumin seeds",
      "2 teaspoons black peppercorns",
      "2 small dried chillies"
    ],
    method: `To make the black pepper masala, place all the ingredients in a frying pan over low heat and dry roast for 1 minute or until fragrant. Allow to cool before grinding to a fine powder in a spice grinder.

Heat the oil in a heavy-based frying pan over medium heat. Add the cinnamon and cardamom and cook for 20 seconds. Add the onions and cook for 4 minutes or until softened and starting to colour. Stir in the black pepper masala and cook for 1 minute or until fragrant. Add the ginger garlic paste, curry leaves, tomato and salt and cook, stirring, for 2 minutes. Add the chicken and cook for 2 minutes, stirring to coat the chicken in the spice mix. Add 100 ml water (the water is to stop the masala base from burning, not to make a sauce), cover pan with a lid, reduce heat to low and cook for 6 minutes. Turn the chicken and cook for a further 6 minutes or until tender. The chicken should be nicely coated with the cooked masala paste. Stir through the lime juice and discard the cinnamon stick. Top with fried curry leaves and serve with appams or steamed rice.`
  },
  {
    id: 35,
    title: "Roadside Chickpea Salad",
    author: "Christine Mansfield",
    book: "Indian Cooking Masterclass",
    serves: "6",
    time: "20 mins",
    category: "Salads",
    ingredients: [
      "100 g sprouted mung bean sprouts (or mixed grains)",
      "300 g cooked chickpeas (canned is fine)",
      "75 g cooked freekeh (green wheat)",
      "2 tablespoons pomegranate seeds",
      "2 tablespoons sultanas",
      "150 g cooked potato, cut into 5 mm dice",
      "2 ripe tomatoes, seeded and diced",
      "1 small red onion, finely diced",
      "2 tablespoons shredded coriander leaves",
      "2 tablespoons pumpkin seeds",
      "1 tablespoon toasted white sesame seeds",
      "1 tablespoon pistachios, roughly chopped",
      "1 teaspoon sea salt flakes",
      "1 tablespoon lime juice",
      "1/4 cup (60 ml) grapeseed oil",
      "2 teaspoons green mango chutney, see Relishes page 361",
      "3 pappadams, cut into thin strips and deep-fried"
    ],
    method: `Place the mung bean sprouts, chickpeas, freekeh, pomegranate seeds, sultanas, potato, tomato, onion and coriander in a bowl and stir to combine. Set aside.

Place the pumpkin seeds in a frying pan over low heat and cook until toasted, taking care not to burn. Add to the salad with the sesame seeds, pistachios and grapeseed oil and stir through the salad. Add the chutney and stir thoroughly to combine. Top with the fried pappadam strips and serve immediately.`
  },
  {
    id: 36,
    title: "Spaghetti carbonara",
    author: "Andreas Papadakis",
    book: "Tipo 00",
    serves: "2",
    time: "50 mins",
    category: "Pasta",
    ingredients: [
      "75 g guanciale",
      "about 500 ml chicken stock",
      "parmesan rinds, if you have any saved up",
      "2 egg yolks",
      "3 tablespoons finely grated pecorino (pepato or romano), plus extra to serve",
      "225 g quality dried spaghetti",
      "freshly ground pepper"
    ],
    method: `Remove the skin from the guanciale (reserving it for the stock), then cut the guanciale into 5 mm (1/4 inch) dice.

Bring 400 ml (14 fl oz) of the chicken stock to the boil and add the reserved guanciale skin, along with any parmesan rinds you may have, then simmer gently for 30 minutes. You don't want the stock to reduce too much, so cook it over very low heat. You should end up with about 250 ml (1 cup) - make up this amount with more stock, if needed.

Put the diced guanciale into a frying pan over very low heat and cook slowly until all the fat is rendered and it becomes very crispy - this could take up to 15 minutes.

In the meantime, use a whisk or stick blender to mix the egg yolks and pecorino into the warm stock mixture until emulsified.

Once the guanciale is done, use a slotted spoon to remove the crisp guanciale and set aside. Strain the rendered fat into the egg yolk mixture and whisk or blend again, then pour back into the frying pan and keep warm.

Cook the spaghetti in plenty of boiling salted water until al dente, according to the instructions on the package.

Drain the pasta and add to the frying pan, then toss until the sauce thickens and coats the pasta. Grind in a generous amount of pepper, add the crisp guanciale and toss another couple of times - you may need to adjust the consistency with a little more stock.

Divide between warmed bowls and serve with more grated pecorino.`
  },
  {
    id: 37,
    title: "Stracciatella with pickled raisins, radicchio & saffron",
    author: "Andreas Papadakis",
    book: "Tipo 00",
    serves: "4",
    time: "1 hr 15 mins",
    category: "Salads",
    ingredients: [
      "50 g sorghum - optional",
      "200 g stracciatella",
      "1/2 head of radicchio, really thinly sliced",
      "sea salt",
      "75 g raisins",
      "25 ml white wine vinegar",
      "1 tablespoon caster (superfine) sugar",
      "0.25 g (3/4 teaspoon) saffron threads",
      "80 ml white wine vinegar",
      "50 ml vegetable oil",
      "50 ml olive oil"
    ],
    method: `For the pickled raisins, put the raisins into a heatproof bowl. In a small non-aluminium pan, bring the vinegar, sugar and 50 ml (1 1/2 fl oz) of water to the boil, then pour it over the raisins and let them soak, covered, for about an hour. Transfer the raisins, with their soaking liquid, to a food processor and blend into a puree.

For the saffron dressing, put the saffron and vinegar into a small non-aluminium pan with 125 ml (1/2 cup) of water and a pinch of salt. Bring to the boil, then simmer until reduced by two-thirds - you should be left with about 2 1/2 tablespoons. Let the saffron reduction cool to room temperature, then slowly drizzle in the oils, while blending with a stick blender or hand whisk to emulsify.

If using sorghum, cook it in a pan of lightly boiling salted water until tender, about an hour, then drain well.

To serve, put the stracciatella into a bowl and generously dress with most of the saffron dressing, then spoon the raisins and sorghum over the top. Dress the radicchio with the remaining saffron dressing and a pinch of salt, then use to cover the stracciatella.`
  },
  {
    id: 38,
    title: "Fermented mushroom risotto",
    author: "Andreas Papadakis",
    book: "Tipo 00",
    serves: "4",
    time: "6 days",
    category: "Risotto",
    ingredients: [
      "2 large shallots, finely chopped",
      "2 tablespoons olive oil",
      "320 g Vialone Nano rice",
      "80 ml white vermouth, such as Cocci Americano, or white wine",
      "100 g cold unsalted butter, diced",
      "125 g finely grated parmesan",
      "sea salt",
      "500 g field mushrooms, coarsely chopped",
      "2 large shallots, coarsely chopped",
      "2 teaspoons thyme leaves",
      "2 litres chicken or vegetable stock"
    ],
    method: `For the stock, lightly sprinkle the mushrooms with salt and leave in a warm place in the kitchen for a few hours, preferably overnight. This draws out the juices from the mushrooms and helps to oxidise them, intensifying their flavour.

Put the mushrooms, shallot and thyme into a stockpot or large saucepan, then pour in the stock. Bring to a simmer and cook over low heat for 1 1/2 hours, then take off the heat, cover and let it rest for 30 minutes. Strain the stock through a colander and squeeze the mushrooms to extract as much liquid as possible - you should have about 1-1.5 litres (4-6 cups). Store your stock in the fridge, where it will last well for up to a week, or freeze for longer storage. Keep the mushrooms aside for fermenting.

To lacto-ferment the mushrooms, you will need to weigh them, then make a brine using 2 per cent of the mushrooms' weight in salt - so, if the mushrooms weigh 300 g (10 1/2 oz), you'll need to dissolve 6 g (1/8 oz) of sea salt in 1 litre (4 cups) of filtered or bottled water. Pack the mushrooms into a sterilised 500 ml (2 cup) jar, then pour in enough of the brine to completely cover the mushrooms. Put the lid on the jar and leave at room temperature, away from sunlight, for 4-7 days, briefly opening the lid each day to allow any gases to escape. (If you have a vacuum sealer, you can use that to ferment the mushrooms instead: just seal the mushrooms in a bag with 2 per cent of their weight in salt - you will see that it's working once the bag starts filling up with air.)

After 4 days, taste a little of the ferment each day to check on its progress, resealing and leaving for longer, if needed. When it has reached the desired strength of flavour, strain off the liquid, transfer the fermented mushrooms to a blender or food processor and pulse to a coarsely chopped paste. (If you're not using it right away, the paste can be kept in the fridge for up to 6 months.)

When you're ready to make the risotto, bring your mushroom stock to the boil and keep warm. Place a wide pan over medium-low heat and saute the shallot in the olive oil until translucent. Add the rice and lightly toast for 2 minutes, then pour in the vermouth or wine and let it evaporate completely. Continue to cook the rice, adding the stock one ladle at a time and stirring every couple of minutes.

When almost all of the stock has been absorbed, about 15 minutes in, the rice should be 90 per cent cooked. If not, add some more stock or water and cook it for a little longer - you want the rice to have a good bite without being crunchy.

Now proceed with the 'mantecatura' (to make the risotto creamy), stirring in the cold butter one piece at a time. Once that's done, stir in 2 tablespoons of your fermented mushroom paste, then add the parmesan a handful at a time and keep stirring until the risotto is creamy and smooth. If it seems dry, add a little more stock or water. Check for seasoning, but you shouldn't need any as the fermented mushrooms are quite salty.

Serve the risotto in warmed shallow bowls.`
  },
  {
    id: 39,
    title: "Spaghetti with cured rainbow trout, mussels & tomato butter",
    author: "Andreas Papadakis",
    book: "Tipo 00",
    serves: "2",
    time: "1 hr 15 mins",
    category: "Seafood",
    ingredients: [
      "225 g quality dried spaghetti - or 1/2 quantity master pasta dough",
      "30 cm piece of rainbow trout, cut into strips 30 cm long and 2 mm wide",
      "50 g fine salt",
      "25 g white sugar",
      "2 rainbow trout fillets, skinned and pin-boned",
      "1 tablespoon olive oil",
      "1 clove of garlic",
      "1 sprig of thyme",
      "500 g mussels, scrubbed and de-bearded",
      "50 ml dry white wine",
      "60 g unsalted butter",
      "3 anchovy fillets",
      "1/2 teaspoon fennel seeds",
      "250 g ripe Black Russian tomatoes, grated on a box grater",
      "1 clove of garlic, finely chopped",
      "1/2 teaspoon fennel seeds",
      "1/2 teaspoon chilli flakes",
      "olive oil",
      "squeeze of lemon juice",
      "sea salt",
      "sea herbs, such as purslane, samphire or seablite, if available"
    ],
    method: `To cure the rainbow trout, first make a brine by bringing 500 ml (2 cups) of water, the salt and sugar to the boil and stirring until dissolved. Put the brine in the fridge until completely cold, then submerge the trout in it for 45 minutes, drain and pat dry.

To steam the mussels, place a large saucepan over medium-high heat. Add the olive oil, garlic, thyme, mussels and wine all at once, covering with a lid straightaway to create steam. Cook until the mussels are just open, 2-3 minutes. Pick the mussels out of their shells, then strain the juices through a fine sieve and reserve for the tomato butter.

For the tomato butter, melt the butter with the anchovies and fennel seeds in a saucepan over low heat. Once the anchovies start to break down, add the grated tomatoes and reserved mussel juices. Bring to a simmer, cover with a lid and cook for 45 minutes over the lowest possible heat, stirring occasionally to make sure it doesn't catch on the bottom. Let it cool for 10 minutes, then blend with a stick blender until smooth. Pass through a sieve and set aside.

To finish, place a large frying pan over medium-low heat. Saute the garlic, fennel seeds and chilli flakes in a little olive oil until the garlic is translucent. Add the mussels and tomato butter and bring to a simmer.

Preheat the oven to 70C (158F) fan-forced. Generously dress the trout fillets with olive oil and heat in the oven for 5-6 minutes until just warm.

In the meantime, cook the spaghetti in boiling salted water until al dente, according to the instructions on the package for dried, or 3-4 minutes for fresh.

Drain the pasta and add to the frying pan, toss together for 1 minute, then add the lemon juice and taste for salt.

Divide the spaghetti between warmed bowls, placing a trout fillet on top of each one. Finish with some local sea herbs, if you have them.`
  },
  {
    id: 40,
    title: "Fusilli al ferretto with puttanesca sauce",
    author: "Andreas Papadakis",
    book: "Tipo 00",
    serves: "4",
    time: "1 hr 40 mins",
    category: "Pasta",
    ingredients: [
      "300 g '00' flour",
      "100 g wholemeal flour",
      "1 teaspoon sea salt",
      "1 tablespoon olive oil",
      "1 teaspoon chilli flakes",
      "2 teaspoons fennel seeds",
      "1/2 teaspoon coriander seeds",
      "100 g anchovy fillets",
      "150 ml olive oil",
      "2 cloves of garlic, thinly sliced",
      "2 x 400 g tins of peeled tomatoes, preferably Italian",
      "40 g capers",
      "60 g mixed olive cheeks",
      "4 tablespoons finely grated pecorino"
    ],
    method: `However, this dough is also easy to mix by hand. In a large bowl, combine both flours and the salt. Make a well in the centre and pour in 200 g (7 oz) of water. With a fork, slowly mix the water with the flour until it has a crumble-like consistency. Add the olive oil, then transfer the dough to a clean work surface and knead with your palms, pushing forward and folding, until the dough is elastic and smooth but not too soft, about 10 minutes.

Wrap the dough really tightly in plastic film or reusable food wrap and set aside at room temperature for at least 30 minutes. I find it better to use this dough on the same day it's made.

To shape the fusilli, on a lightly floured workbench or wooden board, cut off a piece of dough and roll it into a long, skinny log about 5 mm (1/4 inch) thick, then cut 4-5 cm (1 1/2-2 inches) long strips off the log. Place your ferretto (or knitting needle or skewer) at a 45-degree angle on one of the long sides of the strip and slowly roll forward, lightly pressing evenly on both sides of the ferretto. When the spiral is complete, gently pull it away from the ferretto and place on a flour-dusted surface. Repeat until all the fusilli are shaped, then leave to dry for 1-2 hours.

For the puttanesca sauce, place a heavy-based saucepan over medium-low heat and toast the chilli flakes, fennel seeds and coriander seeds for 3-4 minutes, watching them carefully as they can quickly burn. Add the anchovies and their oil, together with the olive oil and garlic, and cook over the lowest possible heat until the anchovies break down, then add the tomatoes and cook, still over the lowest possible heat, for 1 hour. Pass the sauce through a fine sieve and discard all the seeds - you should have an intense, oily sauce.

Cook the fusilli in plenty of boiling salted water until al dente, about 3-4 minutes, depending on how long the pasta has been drying for.

In the meantime, to finish, place a large frying pan over medium-low heat and warm the capers and olive cheeks for 2-3 minutes. Add the sauce and bring to a simmer.

Drain the pasta and add to the frying pan, then toss thoroughly, making sure the fusilli are well coated with the sauce. Stir in the pecorino and taste for salt.

Serve in warmed bowls.`
  },
  {
    id: 41,
    title: "Casarecce with pork sausage & radicchio",
    author: "Andreas Papadakis",
    book: "Tipo 00",
    serves: "2",
    time: "20 mins",
    category: "Pork",
    ingredients: [
      "200 g sausage meat (see page 220) or Italian-style pork and fennel sausages, casings removed",
      "2 cloves of garlic, finely chopped",
      "1/2 long red chilli, finely chopped",
      "1 teaspoon finely chopped sage leaves",
      "50 ml dry white wine",
      "75 g quality radicchio (about a small head), washed and torn into large chunks",
      "2 tablespoons finely grated parmesan",
      "1 tablespoon finely chopped flat-leaf parsley leaves",
      "olive oil",
      "sea salt and freshly ground pepper"
    ],
    method: `To cook the sausage, place a large frying pan over medium-high heat and add 2 tablespoons of olive oil. When the oil is hot, add the sausage meat in large pieces and fry for about 4-5 minutes, or until golden all over.

Reduce the heat to low, add the garlic, chilli and sage and cook for 1-2 minutes, making sure the garlic doesn't get too dark. Pour in the wine, scraping to deglaze the pan, and simmer until it has almost completely evaporated.

In the meantime, cook the casarecce in plenty of boiling salted water until al dente, according to the instructions on the package.

To finish, pour a ladle of the boiling pasta water over the sausage mixture, then add the radicchio and cook for 1 minute, just to soften it a little.

Drain the pasta, reserving some of the pasta water, and add to the sausage mixture and radicchio, along with the parmesan and parsley. Toss everything together thoroughly, then taste for salt, toss again and add some of the reserved pasta water, if needed.

Serve in warmed bowls, with a drizzle of olive oil and a heap of freshly ground pepper.`
  },
  {
    id: 42,
    title: "Gnocchi with duck & porcini ragu",
    author: "Andreas Papadakis",
    book: "Tipo 00",
    serves: "2",
    time: "2 hrs 30 mins",
    category: "Poultry",
    ingredients: [
      "6 duck legs, preferably corn-fed",
      "1 carrot, diced",
      "1 brown onion, diced",
      "2 large cloves of garlic, finely chopped",
      "1/4 cup porcini, soaked in 250 ml warm water for about 15 minutes",
      "100 g tomato paste (concentrated puree)",
      "125 ml dry white wine",
      "750 ml chicken stock",
      "2 sprigs of sage",
      "1 sprig of thyme",
      "1 bay leaf",
      "sea salt",
      "1.5 kg Sebago or Muscat Burbank potatoes",
      "300 g '00' flour",
      "50 g finely grated parmesan",
      "2 teaspoons sea salt",
      "20 g egg (from 1 egg), pinch of freshly grated nutmeg, olive oil",
      "50 g unsalted butter",
      "handful of chopped flat-leaf parsley leaves",
      "35 g finely grated parmesan",
      "40 g thinly shaved pecorino pepato"
    ],
    method: `For the duck ragu, take the duck legs out of the fridge about an hour beforehand, season with salt and allow to come to room temperature.

Preheat the oven to 150C (300F) fan-forced.

Place a large heavy-based saucepan over medium heat. When it is hot, add the duck legs, skin side down, to render the fat, and cook until golden brown, about 5-6 minutes. Turn the legs over and cook on the other side for 2 minutes, then transfer to an ovenproof braising pan.

Next add the carrot, onion and garlic to the saucepan and cook over medium-low heat until soft, about 3-4 minutes.

Using a slotted spoon, gently lift out the soaked porcini, disturbing the liquid as little as possible - if any dirt has been dislodged from the mushrooms by the soaking liquid, you want it to fall to the bottom (reserve the liquid for later). Coarsely chop the porcini and add to the pan. Cook for 3 minutes, then add the tomato paste and let it caramelise for 2 minutes. Pour in the wine, stirring to deglaze, then simmer until reduced to a thick paste. Carefully add three-quarters of the mushroom liquid, leaving behind any grit or dirt, then add the stock and herbs, bring to the boil and season with salt.

Pour the contents of the frying pan over the duck legs, cover really tightly with a lid or foil and cook in the oven for 1 1/2 hours, or until the meat falls off the bone.

Meanwhile, for the gnocchi, wash the potatoes and put them into a pan of cold salted water. Bring to the boil, then simmer until tender (about 40 minutes), and drain. When the potatoes are cool enough to handle, peel off the skins and discard. Pass the peeled potatoes through a drum sieve, cover with a clean tea towel and leave to cool completely.

Weigh out 1 kg (2 lb 4 oz) of the potato and mix with the other gnocchi ingredients until you have a smooth dough. Take care not to overwork. Divide the dough into six balls. Working with one ball at a time, roll on a lightly floured surface to form a log 1.5 cm (5/8 inch) wide, then cut into pieces 1.5 cm (5/8 inch) long. Repeat with the remaining dough.

Cook a third of the gnocchi in plenty of boiling salted water until they rise to the surface, about 2 minutes. Using a slotted spoon, transfer the gnocchi to a bowl of iced water to stop the cooking, then drain and lightly oil them, so they don't stick together. (The rest of the gnocchi - if left uncooked - can be kept in the freezer for up to a month and cooked from frozen.)

Remove the ragu from the oven, uncover, and leave to rest for 15 minutes. Take the duck legs out of the liquid and, when cool enough to handle, pick the meat off the bones in big chunks, discarding the skin, bones and herb stalks. Return the meat to the ragu and stir well.

To finish, put a third of the ragu into a large frying pan and bring to a simmer before stirring through the butter and parsley.

Re-heat the gnocchi in boiling water until they float, then drain and add to the frying pan. Toss them with the ragu for 30 seconds, then add the parmesan and toss for another 30 seconds until the ragu has emulsified.

Serve in warmed bowls, with the thinly shaved pecorino pepato.`
  },
  {
    id: 43,
    title: "Tagliatelle with rabbit, olives & oregano",
    author: "Andreas Papadakis",
    book: "Tipo 00",
    serves: "2",
    time: "2 hrs 10 mins",
    category: "Game",
    ingredients: [
      "225 g dried tagliatelle - or 240 g master pasta dough, rolled out to 3 mm thickness, then cut into strips 30 cm long and 1.5 cm wide, lightly dusted with semolina flour",
      "farmed rabbit, 1.5-2 kg, cut into 6-8 large pieces",
      "plain flour, for dusting",
      "100 ml olive oil",
      "1 brown onion, diced",
      "2 cloves of garlic, crushed",
      "75 g mixed olives, pitted and chopped",
      "100 g tomato paste (concentrated puree)",
      "125 ml dry white wine",
      "1 litre chicken stock",
      "2 teaspoons dried oregano, ideally Sicilian",
      "sea salt",
      "50 g unsalted butter",
      "handful of flat-leaf parsley leaves, finely chopped",
      "50 g finely grated parmesan",
      "cracked black pepper"
    ],
    method: `Preheat the oven to 150-160C (300-315F) fan-forced.

For the rabbit ragu, season the rabbit with salt and dust lightly in flour. Place a heavy-based saucepan over medium heat and saute the rabbit pieces in the olive oil. Cook until golden brown on all sides, then transfer to an ovenproof braising pan.

Next add the onion, carrot and garlic to the saucepan and cook for 4-5 minutes until the onion is soft and translucent, then add the olives and tomato paste and cook over low heat for 2 minutes. Pour in the wine and stir to deglaze, then simmer until reduced by half. Add the stock and oregano, bring to a simmer and season with salt.

Pour the contents of the saucepan over the rabbit, cover really tightly with foil and cook in the oven for 1-1 1/2 hours, or until the meat of the back legs is falling off the bone.

Let the rabbit cool down in the ragu, then lift out and pull the meat off the bones, being careful to remove all the small bones. Return the rabbit meat to the ragu and let it rest for at least 30 more minutes.

Cook the tagliatelle in plenty of boiling salted water until al dente, according to the instructions on the package for dried, or about 3-4 minutes for fresh.

To finish, put a third of the ragu into a large frying pan and bring to a simmer, then stir in the butter.

Drain the pasta and toss with the ragu in the frying pan for 1 minute, adding the parsley and most of the parmesan. Taste for salt and toss again until the ragu thickens and coats the pasta.

Serve in warmed bowls, finishing with the remaining parmesan and some cracked pepper.`
  },
  {
    id: 44,
    title: "Cannelloni with smoked eggplant & ricotta",
    author: "Andreas Papadakis",
    book: "Tipo 00",
    serves: "4",
    time: "1 hr 10 mins",
    category: "Pasta",
    ingredients: [
      "1 quantity master pasta dough, rolled into sheets 2-3 mm thick",
      "1 quantity basic tomato sauce (see page 219)",
      "225 g eggplants (aubergines)",
      "125 g fresh ricotta",
      "50 g finely grated parmesan",
      "finely grated zest of 1 lemon",
      "1 tablespoon olive oil",
      "sea salt and freshly ground pepper",
      "4 tablespoons smoked ricotta salata, or grated parmesan, or olive oil, or fresh basil leaves"
    ],
    method: `For the cannelloni, lay out the pasta sheets on a lightly floured workbench or wooden board and cut a 9 cm (3 1/4 inch) square, using a ruler if you roll it around your rolling pin the edges should naturally overlap by 3-4 cm (depending on how much you adjust the size of the square, based on the thickness of your rolling pin). Once you get the size right, cut the pasta sheets into squares.

Lightly brush the front edge of a pasta square with water and wrap it around the rolling pin, pressing down firmly where the two edges meet. Gently pull the cannelloni off the rolling pin and place it upright on the work surface so it holds its shape. Repeat until all the cannelloni are made, then leave to dry for several hours, preferably overnight.

For the filling, preheat the barbecue or grill to medium-high. Cook the eggplants whole, turning every 5 minutes, until the skin is burned and the flesh is cooked all the way through - this should take around 30 minutes, depending on their size. When the eggplants are cool enough to handle, scoop out the flesh, discarding the burned skins and stems. Strain off any excess moisture. You should have 175 g (about 3/4 cup) eggplant flesh. Put this in a mixing bowl and mix well with the ricotta, parmesan, lemon zest, olive oil, salt and pepper.

Preheat the oven to 190C (375F) fan-forced.

The easiest way to fill the cannelloni is with a piping bag, but you can use a teaspoon. Only fill them about 90 per cent full, or the filling will come out of the pasta in the oven.

Pour two-thirds of the tomato sauce into a baking dish that just holds your filled cannelloni snugly spreading it out evenly. Place the cannelloni on top, arranging them side by side, then pour the rest of the sauce over. Sprinkle with the parmesan, cover with foil and cook in the oven for 15 minutes. Uncover and continue cooking for another 10-15 minutes until golden brown. Finish with the ricotta salata and a drizzle of basil oil.`
  },
  {
    id: 45,
    title: "Linguine with vongole & smoked cherry tomatoes",
    author: "Andreas Papadakis",
    book: "Tipo 00",
    serves: "2",
    time: "3 hrs",
    category: "Seafood",
    ingredients: [
      "500 g clams",
      "5 cloves of garlic, finely chopped",
      "1/2 long red chilli, finely chopped",
      "2 tablespoons olive oil",
      "125 ml dry white wine",
      "6 basil leaves, torn",
      "225 g quality dried linguine - or 1/2 quantity master pasta dough, cut into strips 30 cm long and 3 mm wide",
      "200 g ripe cherry tomatoes",
      "100 ml olive oil",
      "2 tablespoons smoking chips",
      "2 tablespoons finely chopped flat-leaf parsley leaves",
      "olive oil",
      "sea salt"
    ],
    method: `To purge the clams of sand and silt, leave them to soak in a bowl of lightly salted cold water for 2 hours.

In the meantime, for the smoked cherry tomatoes, preheat the oven to 90C (194F) fan-forced. Remove the skins of the tomatoes by blanching them in water kept at a rolling boil for 20 seconds, then use your fingers or a small knife to peel off the skins. Put the peeled tomatoes into a small baking dish, pour in the olive oil and season with salt, then cook in the oven for 1 1/2 hours - during this time, the tomatoes should shrink to half their size, get darker and become more concentrated in flavour.

Remove the tomatoes from the oven to smoke them. If you have a smoking gun, inject smoke from the smoking chips directly into the dish of tomatoes, cover with foil and leave the tomatoes to absorb the smoke for 20 minutes, then repeat one more time. If you don't have a smoking gun, light half of the smoking chips in a small metal container and, as soon as the flame subsides and the chips start smoking, carefully put the metal container into the dish with the tomatoes, cover and leave to smoke for 20 minutes, then repeat with the other half of the smoking chips.

To cook the clams, place a large frying pan over medium heat and fry the garlic and chilli in the olive oil until the garlic is translucent, about 1 minute. Add the clams and wine, cover with a lid and cook for 2-3 minutes or until the clams are just open. Add the tomatoes and half the basil and cook for 3 more minutes, then season with salt to taste.

Cook the linguine in plenty of boiling salted water until al dente, according to the instructions on the package for dried, or about 3-4 minutes for fresh.

Drain the pasta (reserving some of the pasta water) and add to the frying pan, then toss for 1 minute before adding the parsley and the remaining basil. Taste for salt, then toss again until the sauce thickens and coats the pasta, adding some of the reserved pasta water, if needed.

Serve in warmed bowls.`
  },
  {
    id: 46,
    title: "Spaghetti with king prawns & cavolo nero",
    author: "Andreas Papadakis",
    book: "Tipo 00",
    serves: "2",
    time: "30 mins",
    category: "Seafood",
    ingredients: [
      "4 large or extra-large king prawns, 200-250 g in total",
      "150 g cavolo nero (Tuscan kale)",
      "225 g quality dried spaghetti - or 1/2 quantity master pasta dough, cut into strips 30 cm long and 2 mm wide",
      "50 ml olive oil",
      "1 sprig of thyme",
      "30 g Napoli tomato sauce (see page 219)",
      "1 clove of garlic, finely chopped",
      "1/2 long red chilli, finely chopped, or more to taste",
      "100 ml dry white wine",
      "squeeze of lemon juice",
      "fennel fronds, to garnish - optional"
    ],
    method: `To prepare the prawns, take the head off the body, remove the liver parts under cold running water and reserve the head for the sauce. Peel the shell off the body, leaving only the tail segment, then remove the dark digestive tract that runs the length of the body. Reserve the shells for the sauce as well.

For the sauce, place a saucepan over medium heat, add half the olive oil and the reserved prawn heads and shells and cook really well for 5-6 minutes, stirring so they colour evenly. Add the herbs and Napoli tomato sauce and bring to a slow simmer. Add the remaining olive oil, cover the pan with a lid and cook the sauce over the lowest possible heat for 45 minutes, stirring occasionally to make sure it doesn't catch on the bottom. Pass through a colander with large holes, pushing with the back of a ladle to squeeze the juices out of the prawn heads.

Strip the leaves of the cavolo nero from the stalks and discard the stalks. Wash the leaves and coarsely chop into large pieces, then blanch in boiling salted water for 2 minutes. Drain well and set aside.

To cook the prawns, place a frying pan over medium-low heat. Season the prawns with salt, drizzle with olive oil and cook for 1 minute on each side until just cooked. Remove from the pan and keep warm.

To finish, in the same frying pan, briefly saute the garlic and chilli in olive oil. Deglaze with the wine and simmer until reduced by half, then add the sauce and cavolo nero and bring to a simmer. Season with salt and cook for 2 minutes.

In the meantime, cook the spaghetti in plenty of boiling salted water until al dente, according to the instructions on the package for dried, or 3-4 minutes for fresh.

Drain the spaghetti (reserving some of the pasta water) and add to the sauce. Remove from the heat and toss for 1 minute to coat the pasta. Add the lemon juice and season with salt, if needed, then add just enough of the reserved pasta water to achieve the perfect sauce consistency and toss again. Divide the spaghetti and sauce between warmed bowls. Briefly return the prawns to the frying pan, just to warm them through in the residual heat and coat them with the pan juices. Serve on top of the spaghetti and garnish with fennel fronds, if you like.`
  },
  {
    id: 47,
    title: "Master pasta dough",
    author: "Andreas Papadakis",
    book: "Tipo 00",
    serves: "4-6",
    time: "1 hr plus resting",
    category: "Basics",
    ingredients: [
      "350 g '00' flour",
      "150 g durum wheat semolina flour",
      "1 teaspoon sea salt",
      "65 g egg yolk (from about 3-4 eggs)",
      "190 g whole egg (about 4 eggs)"
    ],
    method: `If using an electric mixer, place both flours and the salt in the bowl of a mixer fitted with the dough hook attachment. Make a well in the centre and add the egg yolk and whole egg. (I find it easiest to weigh the egg yolks in a clean bowl first and then add the whole eggs to the same bowl up to the total amount of eggs, which is 255 g (9 oz) for this recipe. The total amount of egg is the important part.) Mix on slow speed for 8-10 minutes, until you start seeing large crumbs forming and the dough starts coming together. Transfer the dough to a clean benchtop and knead by hand until it comes together. Don't expect it to be really smooth, as this is a drier dough - it will come together more and get smoother in the rolling process.

To make the dough by hand, combine both flours and the salt in a mixing bowl. Make a well in the centre and add the egg yolk and whole egg. Mix with a fork until just combined, then transfer to a clean benchtop and knead by hand for 6-8 minutes until the dough comes together.

If the dough seems too dry and won't come together, you can spray it a couple of times with your spray bottle of water - just be careful not to overdo it and make the dough too wet, since it will become more hydrated and softer as it rests.

I like to shape the dough into a roughly rectangular block, rather than a ball, as I find it easier to feed through the pasta machine later. Wrap your dough really well in plastic film, making it as airtight as possible (at the restaurant we use a vacuum sealer).

If you are planning to make your pasta straight away, let the dough rest for at least an hour at room temperature - but ideally refrigerate it overnight, then take it out a couple of hours before rolling and cutting to let it come back to room temperature.

To make the rolling more manageable, it's best to work with a relatively small amount of dough, so divide it in two before you start. (If you are not using all the dough at once, you can refrigerate the rest of it, tightly wrapped, for up to 3 days.)

Set up the pasta machine on a solid benchtop. Using your hands or a rolling pin, flatten the dough enough that it will go through the widest setting on the pasta machine, then pass it through the rollers two or three times, going down one notch each time.

Bring both sides of the dough to the centre, so they meet in the middle, then fold in half to create four layers of dough.

Roll the dough through the widest setting again, then repeat the folding and rolling process one more time - but this time bring one third of the dough into the centre, laying it over the middle third, then cover with the last third to create three layers.

Flatten the dough again, so that it will go through the widest setting on your machine, then pass it through the rollers, going down one notch at a time; it should be smooth by now and starting to become elastic. Keep going until the pasta sheets are the thickness you need: for filled pasta, you want a 1-1.5 mm (1/16 inch) thickness, and for long and short shapes, 2-3 mm (1/8 inch). (4)

For long pasta (such as spaghetti and tagliatelle), the sheets are cut into strips using the cutter attachment on your pasta machine (if it has one) or a sharp knife.

For shaped pasta (such as sarganelli), the sheets are cut into squares with a pasta wheel and then formed into shapes.

For filled pasta (such as tortelloni and ravioli), the sheets are also cut into squares or circles before being filled and sealed.

And for more rustic kinds of pasta (such as fusilli al ferretto and orecchiette), the dough is not machine-rolled into sheets at all, but simply shaped by hand.`
  },
  {
    id: 48,
    title: "Hunter's Stew",
    author: "Benny Roff",
    book: "Borscht, Vodka & Tears",
    serves: "12",
    time: "2 days plus reheating",
    category: "Pork",
    ingredients: [
      "1 kg smoked pork hock",
      "1 bay leaf",
      "5 allspice berries",
      "5 juniper berries",
      "300 g pork neck",
      "10 g dried porcini mushrooms",
      "50 g pitted prunes",
      "1/4 white cabbage, finely shredded",
      "1 kg sauerkraut",
      "250 g kaiserfleisch or smoked pork belly, cut into 1 cm dice",
      "250 g Polish smoked ring sausage (wiejska kielbasa), sliced into quarters lengthwise, then into 5 mm slices",
      "500 g brown onions, halved and sliced",
      "4 garlic cloves, finely chopped",
      "2 bay leaves",
      "2 thyme sprigs",
      "1/2 teaspoon dried marjoram",
      "5 allspice berries",
      "5 whole black peppercorns",
      "1/2 teaspoon caraway seeds (optional)"
    ],
    method: `Day 1 method: Preheat the oven to 210C (415F/Gas 6-7).

Put the hock into a large saucepan or stockpot and cover with 3 litres (102 fl oz) cold water. Bring to a simmer over medium heat. Skim off any scum that rises to the surface at this point but leave the fat (this recipe will never receive the Heart Foundation tick of approval, so don't go acting like it will.)

Add the bay leaf, allspice and juniper berries and simmer, uncovered, for 3 hours, or until the meat is falling from the bone. Remove the hock from the stock, reserving the stock, and allow to cool. Put the stock into the refrigerator to thoroughly chill. Use your fingers to remove all the meat from the hock (this is easier if it is still a bit warm), separating and reserving any sinew or fat in the refrigerator for later use.

Meanwhile, place the pork neck in a roasting tin and cook in the oven for 15 minutes. Turn it over and cook for 10 minutes - it should be nicely browned. Reduce the oven temperature to 180C (350F/Gas 4) and cook for a further 10 minutes. Remove from the oven, allow to cool, then cover and refrigerate for later use.

Day 2 method: Put the porcini and prunes in a bowl and just cover with boiling water. Leave to soak until needed.

Blanch the cabbage in a saucepan of boiling water for 1 minute, then drain well, squeezing out and reserving the excess liquid - this will reduce any sulphurous smells during cooking. Coarsely chop the sauerkraut.

Cook the kaiserfleisch in a frying pan over medium-high heat, turning often, until it is well browned, about 10 minutes. Remove to a plate, leaving the rendered fat in the pan. Cook the Polish ring sausage until it is well browned. Remove the sausage and any fat to a plate with the kaiserfleisch.

Pick the meat from the pork neck and chop it into 1 cm (1/2 inch) dice. Cut the reserved hock meat into 1 cm (1/2 inch) dice.

Using a large metal spoon, remove the fat from the top of the chilled hock stock. Melt this in a large heavy-based saucepan over medium heat. Add the onion and half of the garlic and cook slowly until the onion is soft and translucent. Add the sauerkraut, cabbage, bay leaves, thyme, marjoram, allspice, peppercorns, caraway seeds, if using, hock stock, and all of the meats and their reserved fat. Cook it all over low heat for at least 3 hours, stirring often to prevent it from sticking to the base of the pan.

During the last 15 minutes of cooking, add the remaining garlic. Season with salt, black pepper and some of the reserved cabbage cooking liquid, to taste - the final result should be sweet, salty, fatty and sour in balance.`
  },
  {
    id: 49,
    title: "Phil's Veal Goulash",
    author: "Benny Roff",
    book: "Borscht, Vodka & Tears",
    serves: "4",
    time: "3 hrs",
    category: "Beef",
    ingredients: [
      "1 tablespoon plain flour",
      "2 teaspoons sweet paprika",
      "1 teaspoon hot paprika",
      "1 teaspoon salt",
      "600 g diced veal, shin or blade",
      "1 tablespoon vegetable oil",
      "1 litre Polish soup stock or water",
      "1 onion, cut into 1 cm dice",
      "1/2 large carrot, peeled and cut into 1 cm dice",
      "1/2 celery stick, cut into 1 cm dice",
      "1 garlic clove, sliced",
      "1 bay leaf",
      "1 teaspoon dried marjoram"
    ],
    method: `Preheat the oven to 130C (250F/Gas 1). In a bowl, mix together the flour, sweet and hot paprikas and the salt. Add the veal, tossing well to evenly coat the meat.

Heat half of the oil in a large saucepan over medium-high heat. Add the veal and cook, turning occasionally, until it is well browned, about 10 minutes. Transfer the veal to a casserole dish and set aside.

Add 60 ml (2 fl oz/1/4 cup) of the stock to the pan to deglaze, using a wooden spoon to remove any bits stuck to the base of the pan. Add more stock if necessary, then pour over the veal in the dish.

Add the remaining oil to the pan and cook the onion, carrot and celery until they are soft and the onion begins to colour. Repeat the deglazing procedure with more stock and add to the casserole along with the remaining ingredients. Cover and cook in the oven for 2 1/2-3 hours, or until the meat is very tender. Check it each hour for the first 2 hours, then every half hour - if it is sticking or burning, give it a stir and reduce the heat as required.

Of all the side dishes that go with this goulash, surely the least healthy and the most delicious are the potato blintzes - go ahead, doing what feels good right now is what Borsch is all about.`
  },
  {
    id: 50,
    title: "Borsch's Beef Goulash",
    author: "Benny Roff",
    book: "Borscht, Vodka & Tears",
    serves: "4",
    time: "2 hrs 30 mins",
    category: "Beef",
    ingredients: [
      "1 garlic clove",
      "1 1/2 tablespoons coriander (cilantro) leaves",
      "1 teaspoon green peppercorns",
      "1 teaspoon salt",
      "1 tablespoon vegetable oil",
      "600 g gravy beef (boneless shin), diced",
      "1 onion, finely diced",
      "1 teaspoon potato starch, cornflour or arrowroot",
      "sweet paprika, for garnish"
    ],
    method: `Use a mortar and pestle to grind the garlic, coriander, peppercorns and salt into a paste.

Heat the oil in a heavy-based casserole dish over high heat. Brown the meat evenly all over for about 5 minutes, turning a few times. Remove to a plate.

Reduce the heat to medium, add the onion to the dish and cook, stirring frequently, until it is softened, but not browned. Add the peppercorn paste and cook, stirring, for a further few minutes, then add enough water to just cover the meat. Bring to a simmer, then reduce the heat to low, cover, and cook for 2 1/2 hours, or until the meat is tender. You will need to stir the meat occasionally to prevent it sticking to the base of the dish.

When the meat is tender, mix the potato starch with 1 tablespoon of water until it is smooth. Pour into the goulash and stir to thicken. Sprinkle with a little sweet paprika, to serve.

At Borsch, we also serve goulash with a red capsicum relish (the kind where the peppers are cut into little dice) which is available prepared from Continental grocery stores and is probably labelled 'paprika relish'.`
  },
  {
    id: 51,
    title: "Uzbekistani Lamb Croquettes",
    author: "Benny Roff",
    book: "Borscht, Vodka & Tears",
    serves: "8 croquettes",
    time: "1 hr plus chilling",
    category: "Lamb",
    ingredients: [
      "a pinch of saffron threads",
      "2 tablespoons dry white wine",
      "65 g butter, softened",
      "500 g lean minced lamb",
      "15 g dried breadcrumbs",
      "1 teaspoon ground turmeric",
      "1/4 teaspoon ground coriander seeds",
      "1 garlic clove, crushed",
      "2 teaspoons mild paprika",
      "1 egg, plus 1 extra for crumbing",
      "1 teaspoon tomato sauce (ketchup) (optional)",
      "plain flour, for crumbing",
      "panko, for coating",
      "vegetable oil, for deep-frying",
      "lemon wedges, to serve"
    ],
    method: `Heat a small saucepan over medium heat, add the saffron threads and dry-toast, stirring constantly, for 10 seconds. Add the wine and simmer until the liquid reduces to 1 tablespoon. Remove from the heat and allow to cool.

Beat the butter and the saffron reduction until well combined. Wrap in plastic wrap and refrigerate until firm.

In a large bowl, mix together the lamb, breadcrumbs, turmeric, coriander, garlic, paprika, 1 egg and tomato sauce, if using. Remove the chilled saffron butter from the refrigerator and cut it into 8 batons.

Spread about 2 tablespoons of the lamb mixture on a clean work surface. Place a portion of butter in the centre and roll the lamb mixture up to enclose the butter and form a cylinder. Repeat with the remaining butter and lamb to make 8 croquettes in total.

Put the flour, extra egg and panko into separate bowls. Gently roll the croquettes first in the flour, then dip in the egg, and roll in the panko to coat.

Heat the oil in a deep-fryer or large heavy-based saucepan to 180C (350F), or until a cube of bread dropped into the oil browns in 15 seconds. Deep-fry the croquettes, in batches, for 3-5 minutes, or until crisp. Make sure the oil is not too hot, or they will become golden without cooking all the way through. Serve with lemon wedges on the side.`
  },
  {
    id: 52,
    title: "Cabbage Rolls",
    author: "Benny Roff",
    book: "Borscht, Vodka & Tears",
    serves: "4",
    time: "2 hrs",
    category: "Beef",
    ingredients: [
      "4-5 dried porcini mushrooms, soaked in 60 ml cold water for 30 minutes",
      "1 teaspoon butter, plus 1 tablespoon extra",
      "1 teaspoon plain flour",
      "375 ml beef or veal stock",
      "125 ml good-quality Italian tomato passata",
      "165 g medium-grain rice",
      "1-2 kg white cabbage, outer leaves and core removed",
      "1 onion, finely chopped",
      "300 g minced beef",
      "salt and freshly ground black pepper"
    ],
    method: `Preheat the oven to 180C (350F/Gas 4). Drain the mushrooms and reserve the soaking liquid. Squeeze the mushrooms of excess liquid, and finely chop. Set aside.

Melt the teaspoon of butter in a small saucepan over medium heat, then add the flour and stir for 2 minutes until it is thoroughly incorporated and bubbling a little bit. Slowly add the stock, a little at a time, and stir until it is well combined and starts to bubble again. When all of the stock has been used, stir in the tomato passata and the reserved porcini soaking liquid. Leave to simmer for a further 5 minutes, then remove from the heat.

Bring a medium-sized saucepan and a large saucepan of water to the boil.

Add the rice to the medium pan and stir it in. Bring back to the boil and cook until tender, about 15 minutes. Strain and refresh in cold running water, then drain well.

Put the whole cabbage carefully into the large saucepan of boiling water and cook for 5 minutes. Strain carefully (it can splash) and allow to cool for a further 5 minutes. Carefully remove the leaves, being sure not to break them. When you have eight good, unbroken leaves and a couple of spares, put the core of the cabbage away - you can shred it and heat it in butter with caraway seeds later. Using a sharp knife, carefully trim the protruding ribs on the back of each cabbage leaf so that it is flush with the rest of the leaf.

Melt the extra butter in a saucepan over medium heat. Add the onion and saute until it softens. Add to a bowl with the cooked rice, mushroom and beef. Season with salt and pepper and use your hands to mix together very well, squeezing the filling through your fingers.

Divide the filling into eight equal portions and form each into a fat cylinder. Place a cylinder at the bottom of each cabbage leaf, roll it up halfway, then fold in the sides and continue wrapping to make a neat roll. Place all the rolls in a roasting tin or baking dish so they fit snugly. Pour over the tomato sauce, cover the rolls with the extra cabbage leaves, and cook in the oven for about 1 hour, or until the filling inside them feels firm to the touch. Check the rolls after 50 minutes - you may need to place a sheet of foil over the rolls to prevent them from burning during cooking. Serve the rolls with the sauce.`
  },
  {
    id: 53,
    title: "Chicken Stroganoff",
    author: "Benny Roff",
    book: "Borscht, Vodka & Tears",
    serves: "4",
    time: "30 mins",
    category: "Poultry",
    ingredients: [
      "500 g skinless chicken thigh fillets",
      "2 tablespoons plain flour",
      "1/4 teaspoon sweet paprika",
      "1/2 teaspoon dried marjoram",
      "1/2 teaspoon black pepper",
      "1 1/2 teaspoons salt",
      "2 tablespoons vegetable oil",
      "250 ml beef stock",
      "1 brown onion, diced",
      "200 g button mushrooms, sliced",
      "250 g sour cream"
    ],
    method: `Trim any excess fat from the chicken thighs and cut them into 1 cm (1/2 inch) dice. Place in a large bowl with the flour, paprika, marjoram, pepper and 1 teaspoon of the salt. Toss well to thoroughly coat the chicken on all sides.

Heat 1 tablespoon of the oil in a large heavy-based saucepan over medium-high heat. Add the chicken and cook for about 5 minutes, stirring often and scraping the base of the pan to make sure it doesn't catch, until the chicken is cooked through and lightly browned. Remove the chicken to a bowl.

Return the pan to the heat and when any bits stuck to the base of the pan are sizzling, add the stock and use a wooden spoon to loosen them. When it is all thoroughly detached, pour the stock over the chicken.

Heat the remaining oil in a clean pan over medium heat. Add the onion and mushroom, and sprinkle in the remaining salt - this helps the vegetables to break down. Stir constantly over medium heat until the onions are soft and translucent, about 5 minutes. Return the chicken and stock to the pan with the sour cream, stirring well to incorporate. Bring the mixture to a simmer and let it cook for a further 10 minutes, stirring constantly to prevent it from sticking. Serve hot.`
  },
  {
    id: 54,
    title: "Duck Liver Pate with Green Walnut Vodka",
    author: "Benny Roff",
    book: "Borscht, Vodka & Tears",
    serves: "15-20 canape or 4 lunch",
    time: "2 hrs 30 mins",
    category: "Poultry",
    ingredients: [
      "500 g duck or chicken livers",
      "2 tablespoons butter",
      "2 French shallots, peeled and sliced",
      "a pinch of dried marjoram",
      "1 thyme stalk",
      "60 ml Orzechowa (green walnut vodka)",
      "1 teaspoon red wine vinegar",
      "125 ml pouring cream, chilled",
      "200 g clarified butter or ghee"
    ],
    method: `Carefully remove the connective tissue from the livers with a very sharp knife.

Melt the butter in a frying pan over high heat until the foam subsides, then add the shallots and saute for 30 seconds, or until they just start to soften. Add the liver, marjoram and thyme and season with salt and pepper. Continue to saute until the liver colours on the outside and just turns pink in the middle, about 90 seconds.

Add the Orzechowa to the pan and toss a few more times, then remove to a bowl and refrigerate to cool. Remove the thyme and add the vinegar.

When the liver is cool, transfer to a food processor and process to a puree. Slowly pour in the cream and stir until the mixture is smooth. Adjust the seasoning. Transfer to four 125 ml (4 fl oz/1/2 cup) ramekins.

Melt the clarified butter, allow to cool, then pour over the top of each pate and refrigerate for at least 2 hours, or until the butter has set.

Serve with pickles, buttered toast triangles and a shot of Orzechowa. Store in the refrigerator for up to 5 days.`
  },
  {
    id: 55,
    title: "Pickled Mushrooms",
    author: "Benny Roff",
    book: "Borscht, Vodka & Tears",
    serves: "600 g",
    time: "45 mins plus cooling",
    category: "Pickles & Chutneys",
    ingredients: [
      "4 large French shallots, peeled and sliced lengthwise",
      "1 carrot, peeled and sliced into rounds",
      "2 bay leaves",
      "1 teaspoon brown mustard seeds",
      "1 teaspoon allspice berries",
      "1 teaspoon black peppercorns",
      "500 ml white vinegar",
      "1 1/2 teaspoons salt",
      "2 teaspoons white sugar",
      "500 g button mushrooms"
    ],
    method: `Place all of the ingredients, except the mushrooms, in a medium saucepan with 250 ml (9 fl oz/1 cup) water. Bring to a boil, then reduce the heat and allow to simmer for 2 minutes. Add the mushrooms and bring back to the boil, stirring occasionally. Reduce the heat to low and simmer for a further 8 minutes, or until the mushrooms are just cooked through.

If you want to store the mushrooms as preserves, strain and reserve the liquid, then pack the mushrooms and vegetables into sterilised airtight jars - you will need the jars to have a combined volume of 1 litre (35 fl oz/4 cups). Pour the hot liquid over the mushrooms to fill each jar and screw the lids on tight. They should keep this way for a year or more.

If using straight away, allow the mushrooms to cool in the liquid, and transfer everything to a non-reactive bowl. Cover with plastic wrap and put in the refrigerator for 30 minutes. The mushrooms can be stored in the refrigerator for up to 3 months.`
  },
  {
    id: 56,
    title: "Eggs Baked in Caper Paste",
    author: "Benny Roff",
    book: "Borscht, Vodka & Tears",
    serves: "4",
    time: "20 mins",
    category: "Vegetarian",
    ingredients: [
      "1 garlic clove",
      "2 tablespoons small salted capers, soaked in water for 20 minutes and drained well",
      "30 g unsalted butter, plus 10 g extra",
      "20 g panko",
      "2 tablespoons finely grated parmesan cheese",
      "1 tablespoon finely chopped flat-leaf parsley",
      "4 eggs"
    ],
    method: `Put the garlic in a mortar and use a pestle to pound it to a paste (if using capers in vinegar you can aid the grinding by adding a pinch of salt).

Add the capers and the 30 g butter and continue to pound into a paste. Alternatively you can place it all into a bowl and process with a stick blender, scraping down the sides, until a paste is formed.

Melt the remaining butter and add the panko, parmesan and parsley, making sure the butter gets evenly distributed early before it can soak into the panko. Try not to break up the panko too much.

Preheat the oven to 200C (400F). Divide the caper paste (about 1 large teaspoon per portion) between four 125 ml (4 fl oz/1/2 cup) ramekins, oven-safe tea cups or even the holes of a muffin tray. Press the paste out with your fingers so that it covers the bottom of each ramekin and comes about 1 cm (1/2 inch) up the sides.

Crack an egg into each ramekin, then sprinkle the crumb mixture evenly over each egg, being careful not to break the eggs. Bake in the oven for 6-8 minutes, depending on how firm you like the yolks.`
  },
  {
    id: 57,
    title: "Honey Vodka Prawns",
    author: "Benny Roff",
    book: "Borscht, Vodka & Tears",
    serves: "4",
    time: "35 mins plus marinating",
    category: "Seafood",
    ingredients: [
      "1/2 bunch fresh coriander (cilantro), leaves picked",
      "2 cm piece of fresh ginger, peeled and grated",
      "1/2 birdseye or serrano chilli, seeds left in, thinly sliced",
      "1/2 teaspoon finely chopped garlic",
      "330 ml sweet chilli sauce",
      "60 ml Krupnik or Medos honey vodka",
      "500 g raw prawns (shrimp), peeled and deveined, heads removed and tails left intact"
    ],
    method: `Put all of the ingredients, except the prawns, into a food processor and process until a fairly smooth sauce is formed. Transfer to a bowl.

Toss the prawns in the sauce and leave to marinate for at least 30 minutes. The prawns can be stored for up to 1 day in the refrigerator at this stage.

When you are ready to start cooking, pour the prawns and the sauce into a frying pan and cook over medium-high heat, for about 5 minutes, stirring frequently once the sauce starts to bubble, until the prawns are just cooked through. Serve with steamed rice and a Flu Shot.`
  },
  {
    id: 58,
    title: "Chocolate peanut butter slice",
    author: "Donna Hay",
    book: "Balanced",
    serves: "24",
    time: "5 hrs plus chilling",
    category: "Dessert",
    ingredients: [
      "1/2 cup (120g) almonds",
      "1/2 cup (40g) desiccated coconut",
      "6 fresh dates, pitted",
      "1/4 cup (60g) coconut oil, melted",
      "3/4 cup (210g) smooth peanut butter",
      "8 fresh dates, pitted",
      "1/2 cup (125ml) rice malt syrup",
      "1/3 cup (35g) raw cacao powder",
      "1/4 cup (60g) coconut oil, melted",
      "1/2 cup (125ml) rice malt syrup"
    ],
    method: `Lightly grease a 20cm x 30cm slice tin and line with non-stick baking paper. Place the almonds in a food processor and process until finely chopped. Add the coconut, dates and oil and process until well combined. Press the mixture into the base of the prepared tin and refrigerate for 30 minutes or until firm.

To make the peanut butter filling, place the peanut butter, dates and rice malt syrup in a food processor and process until smooth. Spread over the base and refrigerate for 1 hour or until firm.

To make the cacao topping, place the cacao, oil and rice malt syrup in a heatproof bowl over a saucepan of simmering water and stir until smooth. Remove from the heat and spoon over the peanut butter filling. Refrigerate for 3-4 hours or until set. Remove from the tin and slice to serve. Store slice in an airtight container in the refrigerator for up to 1 week.`
  },
  {
    id: 59,
    title: "Banana and berry tray cake",
    author: "Donna Hay",
    book: "Balanced",
    serves: "15",
    time: "1 hr",
    category: "Dessert",
    ingredients: [
      "1 1/2 cups (390g) mashed banana (about 4 bananas)",
      "1/3 cup (40g) oat bran",
      "1/4 cup (60ml) milk",
      "1/2 cup (125ml) maple syrup, plus extra for brushing",
      "1 cup (250ml) vegetable or coconut oil",
      "2 eggs",
      "1 teaspoon vanilla extract",
      "1 teaspoon ground cinnamon",
      "1 cup (160g) buckwheat flour",
      "1 cup (130g) white spelt flour",
      "3 teaspoons baking powder",
      "1 cup (150g) blueberries, raspberries or blackberries"
    ],
    method: `Preheat oven to 160C (320F). Lightly grease a 20cm x 30cm slice tin, line with non-stick baking paper and set aside.

Place the banana, oat bran, milk, maple syrup, oil, eggs, vanilla and cinnamon in a large bowl, mix to combine and allow to stand for 15 minutes.

Sift in both the flours and the baking powder and mix to combine. Pour into the prepared tin and sprinkle with the blueberries. Bake for 45 minutes or until just cooked when tested with a skewer. Turn out onto a serving plate and, while the cake is still hot, brush with extra maple syrup. Slice and serve warm.`
  },
  {
    id: 60,
    title: "Orange and chia seed syrup cake",
    author: "Donna Hay",
    book: "Balanced",
    serves: "12",
    time: "1 hr 25 mins",
    category: "Dessert",
    ingredients: [
      "1/4 cup (50g) black chia seeds",
      "1/2 cup (125ml) milk",
      "125g unsalted butter, chopped",
      "1 tablespoon finely grated orange rind",
      "1 cup (220g) raw sugar",
      "4 eggs",
      "2 cups (240g) almond meal (ground almonds)",
      "1 cup (130g) white spelt flour",
      "1 1/2 teaspoons baking powder",
      "1/2 cup (125ml) rice malt syrup",
      "2 tablespoons orange zest",
      "1/2 cup (125ml) orange juice"
    ],
    method: `Preheat oven to 160C (320F). Lightly grease a 20cm round cake tin, line with non-stick baking paper and set aside. Place the chia seeds and milk in a bowl and set aside to soak for 10 minutes.

Place the butter, orange rind and sugar in the bowl of an electric mixer and beat for 8 minutes or until light and creamy. Add the eggs and beat until well combined. Add the chia mixture, almond meal, flour and baking powder and fold to combine. Spoon the mixture into the prepared tin and bake for 1 hour-1 hour 10 minutes or until cooked when tested with a skewer.

While the cake is baking, make the orange syrup. Place the rice malt syrup, orange rind and juice in a small saucepan over medium heat. Simmer for 12 minutes or until the syrup is reduced by half and thickened.

Invert the cake onto a cake stand and, while still hot, top with the syrup. Slice and serve warm.`
  },
  {
    id: 61,
    title: "Lemon delicious chia puddings",
    author: "Donna Hay",
    book: "Balanced",
    serves: "4-6",
    time: "30 mins plus soaking",
    category: "Breakfast",
    ingredients: [
      "1/2 cup (100g) white chia seeds",
      "1/4 cup (60ml) lemon juice",
      "2 cups (500ml) milk",
      "1/2 cup (125ml) coconut cream",
      "1/3 cup (80ml) rice malt syrup",
      "1/2 cup (140g) coconut yoghurt, plus extra to serve",
      "toasted shredded coconut and finely grated lemon rind, to serve"
    ],
    method: `Place the chia seeds, lemon juice, milk and coconut cream in a bowl and whisk to combine. Set aside to soak for 20-30 minutes.

Add the rice malt syrup and yoghurt and stir to combine. Divide between glasses and top the puddings with extra yoghurt, toasted coconut and lemon rind to serve.`
  },
  {
    id: 62,
    title: "Apple ice-cream sandwiches",
    author: "Donna Hay",
    book: "Balanced",
    serves: "20",
    time: "6 hrs plus freezing",
    category: "Dessert",
    ingredients: [
      "2 cups (560g) plain Greek-style (thick) yoghurt",
      "3/4 cup (180g) honey",
      "1/4 cup (60ml) rice malt syrup",
      "1 cup (260g) mashed banana (about 3 bananas)",
      "1 cup (250ml) coconut cream",
      "3 apples, nectarines or peaches, very thinly sliced"
    ],
    method: `Place the yoghurt, honey, rice malt syrup, banana and coconut cream in a large snap-lock plastic bag. Seal, shake to combine and freeze for 3-4 hours or until solid.

Line a metal container with non-stick baking paper. Break up the ice-cream by bending and tapping the bag on a hard surface. Place the ice-cream in a food processor and process until smooth. Pour into the prepared tin and freeze for 2 hours or until firm.

Press scoops of the banana coconut ice-cream between slices of apple to make sandwiches. Place on trays lined with non-stick baking paper and freeze for 30 minutes or until firm.`
  },
  {
    id: 63,
    title: "Kale and cashew dip",
    author: "Donna Hay",
    book: "Balanced",
    serves: "2 cups",
    time: "1 hr 15 mins plus chilling",
    category: "Snacks",
    ingredients: [
      "1 cup (160g) cashews",
      "3 cups (750ml) warm water",
      "2 cups (60g) shredded kale leaves",
      "1 litre boiling water",
      "1/4 cup (60ml) extra virgin olive oil, plus extra to serve",
      "1/2 clove garlic, chopped",
      "2 tablespoons lemon juice",
      "1 cup (80ml) cold water",
      "sea salt and cracked black pepper",
      "baby (micro) parsley leaves (optional), to serve",
      "seeded crackers (see recipe, right), or vegetable chips, to serve"
    ],
    method: `Place the cashews in a large bowl, cover with the warm water and allow to soak for 1 hour. Drain and set aside.

Place the kale in a bowl, cover with the boiling water and allow to stand for 1-2 minutes. Drain and pat dry with paper towel. Place the cashews and kale in a food processor and process until finely chopped. Add the oil, garlic, lemon juice, tahini, cold water, salt and pepper and process until smooth. Refrigerate until chilled.

Drizzle the dip with extra oil, top with baby parsley and serve with crackers or vegetable chips.`
  },
  {
    id: 64,
    title: "Seeded crackers",
    author: "Donna Hay",
    book: "Balanced",
    serves: "6-8",
    time: "30 mins",
    category: "Snacks",
    ingredients: [
      "1/2 cup (80g) sunflower seeds",
      "1/4 cup (45g) linseeds (flaxseeds)",
      "1/4 cup (40g) sesame seeds",
      "2 tablespoons chia seeds",
      "1 teaspoon sea salt flakes, plus extra for sprinkling",
      "1 cup (130g) white spelt flour",
      "1/2 cup (125ml) water",
      "1/4 cup (80ml) extra virgin olive oil"
    ],
    method: `Preheat oven to 180C (350F). Place all the seeds, the salt and flour in a large bowl and stir to combine. Add the water and oil and mix to form a dough. Divide the dough in half and roll each piece between 2 sheets of non-stick baking paper to 3mm thick. Transfer to baking trays and remove the top sheets of paper. Sprinkle with extra salt, pressing lightly to secure, and bake for 15-20 minutes or until golden and crisp. Allow to cool on wire racks and break into large pieces to serve. Store in an airtight container for up to 2 weeks.`
  },
  {
    id: 65,
    title: "Matcha yoghurt pops",
    author: "Donna Hay",
    book: "Balanced",
    serves: "10",
    time: "10 mins plus freezing",
    category: "Dessert",
    ingredients: [
      "1 1/4 cups (350g) plain Greek-style (thick) yoghurt",
      "1 cup (250ml) coconut milk",
      "1/3 cup (120g) honey",
      "1 tablespoon matcha green tea powder",
      "finely chopped pistachios, to serve"
    ],
    method: `Place the yoghurt, coconut milk, honey and matcha in a blender and blend until smooth. Divide between 10 x 1/3-cup-capacity popsicle moulds, insert popsicle sticks and freeze for 4-5 hours or until firm. Remove from the moulds and dip each pop in pistachios to serve.`
  },
  {
    id: 66,
    title: "Cacao, banana, date and cashew bars",
    author: "Donna Hay",
    book: "Balanced",
    serves: "12",
    time: "50 mins plus cooling",
    category: "Snacks",
    ingredients: [
      "1/2 cup (35g) raw cacao powder",
      "3/4 cup (180g) firmly packed chopped pitted fresh dates (about 10 dates)",
      "1/4 cup (60ml) vegetable, nut or coconut oil",
      "1 1/2 cups (240g) cashews",
      "1 1/2 teaspoons vanilla extract",
      "3/4 cup (200g) mashed banana (about 3 bananas)",
      "coconut flakes, for sprinkling"
    ],
    method: `Preheat oven to 160C (320F). Line a 20cm square cake tin with non-stick baking paper and set aside.

Place the cacao, date, oil, cashews, vanilla and banana in a food processor and process until smooth. Spoon the mixture into the prepared tin, spread evenly and sprinkle with coconut. Bake for 40 minutes or until firm to touch. Allow to cool in the tin before slicing into bars to serve. Store bars in an airtight container in the refrigerator for up to 1 week.`
  },
  {
    id: 67,
    title: "Cacao date truffles",
    author: "Donna Hay",
    book: "Balanced",
    serves: "50",
    time: "30 mins plus chilling",
    category: "Snacks",
    ingredients: [
      "1/2 cup (80g) almonds",
      "1 cup (250ml) warm water",
      "24 fresh dates, pitted",
      "1/4 cup (25g) raw cacao powder",
      "2 tablespoons coconut oil",
      "toasted shredded coconut, almond meal or extra raw cacao powder, to coat"
    ],
    method: `Place the almonds in a bowl, cover with the water and allow to soak for 20 minutes. Drain and place in a food processor. Add the dates, cacao and oil and process until smooth. Divide and shape the mixture into 2-teaspoon balls and toss in the coconut to coat. Refrigerate for 2-3 hours or until firm before serving. Store truffles in an airtight container in the refrigerator for 10-14 days.`
  },
  {
    id: 68,
    title: "Sriracha spiced chickpeas and almonds",
    author: "Donna Hay",
    book: "Balanced",
    serves: "4 cups",
    time: "45 mins",
    category: "Snacks",
    ingredients: [
      "1 x 400g can chickpeas (garbanzo beans), rinsed and drained",
      "1 cup (160g) almonds",
      "2 tablespoons black chia seeds",
      "1/2 cup (125ml) Sriracha chilli sauce",
      "2 tablespoons honey"
    ],
    method: `Preheat oven to 160C (320F). Place the chickpeas on layers of paper towel and dry well. Transfer to a bowl and add the chia seeds. Place the Sriracha and honey in a small bowl and mix to combine. Add to the chickpea mixture and toss to coat. Divide between 2 baking trays lined with non-stick baking paper. Roast, turning occasionally, for 30-35 minutes or until golden. Allow to cool on trays before serving. Store the mixture in an airtight container for up to 1 week.`
  },
  {
    id: 69,
    title: "Beetroot and horseradish cured salmon",
    author: "Donna Hay",
    book: "Balanced",
    serves: "4",
    time: "3 hrs 20 mins",
    category: "Seafood",
    ingredients: [
      "1/3 cup (100g) coarse rock salt",
      "2 tablespoons caster (superfine) sugar",
      "2 tablespoons finely chopped dill",
      "1 x 500g salmon fillet, skin and bones removed",
      "1 tablespoon finely grated fresh horseradish",
      "1 large beetroot (200g), coarsely grated",
      "1/4 cup each baby parsley and basil leaves (optional), to serve",
      "2 teaspoons finely grated fresh horseradish",
      "1/4 teaspoon rice wine vinegar",
      "2 tablespoons extra virgin olive oil",
      "sea salt and cracked black pepper",
      "4 small fennel bulbs (800g), trimmed and thinly sliced"
    ],
    method: `Place the salt, sugar and dill in a bowl and stir to combine. Sprinkle both sides of the salmon with the horseradish. Place half the salt mixture in the base of a glass or ceramic dish large enough to snugly fit the salmon. Top with half the beetroot and the salmon. Layer with the remaining beetroot and salt mixture. Cover with plastic wrap, weigh down with cans of beans or tomatoes and refrigerate for 3 hours.

While the salmon is curing, make the fennel salad. Place the horseradish, vinegar, oil, salt and pepper in a large bowl and whisk to combine. Add the fennel and toss to combine.

Remove the salmon from the salt and beetroot and slice thinly. Divide between serving plates and top with the salad and baby herbs to serve.`
  },
  {
    id: 70,
    title: "Whole-wheat ramen with miso-glazed chicken and kale",
    author: "Donna Hay",
    book: "Balanced",
    serves: "4",
    time: "25 mins",
    category: "Poultry",
    ingredients: [
      "3 x 200g chicken breast fillets, trimmed",
      "1 tablespoon vegetable oil",
      "2 tablespoons finely grated ginger",
      "2 tablespoons white miso paste",
      "1.5 litres chicken stock",
      "250g whole-wheat Japanese noodles",
      "2 cups (60g) torn kale leaves",
      "2 soft-boiled eggs, halved",
      "4 strips toasted nori",
      "baby (micro) coriander (cilantro) (optional), to serve",
      "shichimi togarashi and chilli oil, to serve",
      "2 tablespoons vegetable oil",
      "2 tablespoons white miso paste",
      "2 tablespoons mirin (Japanese rice wine)"
    ],
    method: `To make the miso glaze, place the oil, miso and mirin in a bowl and whisk until well combined.

Brush the miso glaze over the chicken. Heat the oil in a large non-stick frying pan over medium heat. Cook the chicken for 5 minutes each side or until golden and cooked through. Set aside and keep warm.

Place the ginger, miso paste and stock in a medium saucepan over medium heat. Stir to combine and bring to the boil. Reduce the heat to low and simmer for 5 minutes.

Cook the noodles in a large saucepan of salted boiling water for 4-6 minutes or until just tender. Drain and divide between serving bowls. Slice the chicken and place on top of the noodles. Top with the kale and ladle over the miso broth. Top each with half an egg, a strip of nori and baby coriander. Serve with togarashi and chilli oil.`
  },
  {
    id: 71,
    title: "Baked fish cakes with chilli lime dressing",
    author: "Donna Hay",
    book: "Balanced",
    serves: "4",
    time: "20 mins",
    category: "Seafood",
    ingredients: [
      "450g firm white fish fillets, chopped",
      "1 cup (160g) cooked quinoa",
      "1 jalapeno chilli, finely chopped",
      "2 cloves garlic, crushed",
      "4 kaffir lime leaves, finely shredded",
      "1/2 cup each mint and coriander (cilantro) leaves, shredded",
      "2 green onions (scallions), shredded",
      "1 egg white",
      "sea salt and cracked black pepper",
      "vegetable oil, for brushing",
      "1/2 cup (40g) shredded cabbage",
      "1 cup coriander (cilantro) leaves, extra baby (micro) coriander (cilantro) leaves (optional), to serve",
      "iceberg lettuce leaves, to serve",
      "lime wedges, to serve",
      "2 tablespoons mirin (Japanese rice wine)",
      "2 tablespoons lime juice",
      "1 long green chilli, sliced"
    ],
    method: `To make the chilli lime dressing, place the mirin, lime juice and chilli in a bowl and whisk to combine. Set aside.

Preheat oven to 220C (425F). Place the fish in a food processor and process until finely chopped. Transfer to a large bowl and add the quinoa, chilli, garlic, lime leaf, mint, coriander, onion, eggwhite, salt and pepper. Mix until well combined. Divide and shape the mixture into 1/3-cup (80ml) patties, place on a baking tray lined with non-stick baking paper and brush both sides with oil. Bake for 8 minutes. Turn and cook for a further 8 minutes or until golden and crisp.

Place the cabbage and extra coriander in a bowl, toss to combine and top with baby coriander. Serve the fish cakes with the lettuce cups, cabbage salad, dressing and lime wedges.`
  },
  {
    id: 72,
    title: "Moroccan chicken and carrot salad with whole-wheat couscous",
    author: "Donna Hay",
    book: "Balanced",
    serves: "4",
    time: "25 mins",
    category: "Poultry",
    ingredients: [
      "2 tablespoons extra virgin olive oil",
      "1 teaspoon ras el hanout",
      "1 tablespoon chopped preserved lemon rind",
      "1 teaspoon coriander seeds, crushed",
      "3 x 200g chicken breast fillets, trimmed",
      "1 1/2 cups (240g) dried whole-wheat couscous",
      "1 1/2 cups (375ml) boiling water",
      "sea salt flakes",
      "3 carrots, peeled and shredded",
      "1 cup (160g) smoked almonds, chopped",
      "1/2 cup (80g) dried currants",
      "2 tablespoons poppyseeds",
      "3 cups coriander (cilantro) leaves",
      "2 tablespoons extra virgin olive oil",
      "1/4 cup (60ml) orange juice",
      "2 tablespoons white wine vinegar",
      "1 clove garlic, crushed",
      "1 teaspoon Dijon mustard"
    ],
    method: `To make the orange dressing, place the oil, orange juice, vinegar, garlic and mustard in a bowl. Whisk to combine and set aside.

Preheat oven to 220C (425F). Place the oil, ras el hanout, lemon rind and coriander seeds in a small bowl and mix to combine. Place the chicken on a baking tray lined with non-stick baking paper and brush with the ras el hanout mixture. Roast for 12-15 minutes or until golden and cooked through. Allow to cool slightly before slicing into strips.

While the chicken is roasting, place the couscous, water and a pinch of salt in a large bowl and cover with plastic wrap. Set aside for 5 minutes or until the water is absorbed. Fluff the couscous with a fork and add the carrot, almonds, currants, poppyseeds, coriander and the chicken. Top with the orange dressing, toss to combine and divide between bowls to serve.`
  },
  {
    id: 73,
    title: "Watercress, broccoli and roasted garlic pesto",
    author: "Donna Hay",
    book: "Balanced",
    serves: "3 cups",
    time: "35 mins",
    category: "Vegetarian",
    ingredients: [
      "1 head garlic",
      "1 1/2 tablespoons extra virgin olive oil, for drizzling",
      "6 cups (360g) broccoli florets",
      "2 cups (30g) watercress sprigs, plus extra to serve",
      "1/2 cup (80g) roasted almonds",
      "2 teaspoons finely grated lemon rind",
      "2 tablespoons lemon juice",
      "1/2 cup (40g) finely grated parmesan",
      "1/2 cup (180ml) extra virgin olive oil, extra",
      "char-grilled bread and lemon wedges, to serve"
    ],
    method: `Preheat oven to 180C (350F). Place the garlic on a sheet of aluminium foil, drizzle with the oil and wrap to enclose. Roast for 30 minutes or until golden and soft. Allow to cool and squeeze the cloves from their skin into a food processor.

Add the broccoli, watercress, almonds, lemon rind, juice, parmesan and extra oil and process to a coarse paste. Serve with bread, lemon wedges and extra watercress.`
  },
  {
    id: 74,
    title: "Green vegetable salad",
    author: "Donna Hay",
    book: "Balanced",
    serves: "4",
    time: "20 mins",
    category: "Salads",
    ingredients: [
      "200g Brussels sprouts, blanched and sliced",
      "1 bunch asparagus (150g), blanched and sliced",
      "150g green beans, trimmed, blanched and shredded",
      "1 small fennel bulb (180g), trimmed and thinly sliced",
      "150g ricotta salata, shaved",
      "1/2 cup chervil sprigs",
      "1/3 cup (45g) roasted hazelnuts, skins removed and chopped",
      "1/4 cup (70g) plain Greek-style (thick) yoghurt",
      "1/4 cup (60ml) buttermilk",
      "2 tablespoons each chopped tarragon and chopped chives",
      "2 tablespoons lemon juice",
      "1 clove garlic, crushed",
      "2 anchovies, finely chopped",
      "sea salt and cracked black pepper"
    ],
    method: `To make the green dressing, place all the ingredients in a jug and, using a hand-held stick blender, blend until smooth.

Place the vegetables in a large bowl and toss to combine. Divide between serving plates and top with the ricotta salata. Divide the dressing and top with the chervil and hazelnuts to serve.`
  },
  {
    id: 75,
    title: "Kale and spinach omelette",
    author: "Donna Hay",
    book: "Balanced",
    serves: "2",
    time: "15 mins",
    category: "Vegetarian",
    ingredients: [
      "2 stalks kale, trimmed and chopped",
      "250g frozen spinach, thawed and drained",
      "4 eggs, separated",
      "1/2 cup (80ml) milk",
      "salt and cracked black pepper",
      "1/4 cup (20g) finely grated parmesan, plus extra to serve",
      "1/4 cup (30g) grated cheddar",
      "1/4 cup (60g) soft goat's cheese",
      "1/2 cup (120g) fresh ricotta",
      "1 tablespoon chopped chives",
      "20g unsalted butter",
      "frozen peas, cooked and crushed, to serve"
    ],
    method: `Place the kale and spinach in a food processor and process until finely chopped. Place the egg yolks, milk, salt and pepper in a large bowl and whisk to combine. Add the kale mixture, parmesan and cheddar and mix to combine. Place the eggwhites in a bowl and whisk until stiff peaks form. Add to the yolk mixture and gently fold to combine. Place the goat's cheese, ricotta and chives in a small bowl and mix to combine.

Melt half the butter in a 20cm non-stick frying pan over medium heat. Add half the egg mixture and cool for 5-6 minutes or until just set. Spoon half the goat's cheese mixture onto one side of the omelette and, using a spatula, carefully fold to enclose. Cook for a further 1 minute, remove from the pan, set aside and keep warm. Repeat with the remaining butter, egg mixture and goat's cheese mixture. Place the omelettes on serving plates, top with the peas and sprinkle with extra parmesan to serve.`
  },
  {
    id: 76,
    title: "Coconut and chai chia",
    author: "Donna Hay",
    book: "Balanced",
    serves: "4-6",
    time: "25 mins plus chilling",
    category: "Breakfast",
    ingredients: [
      "3 tablespoons chai tea",
      "1 1/2 cups (375ml) coconut milk",
      "1 1/2 cups (375ml) milk or nut milk",
      "3 tablespoons raw honey, plus extra to serve",
      "1/2 cup (100g) white chia seeds",
      "coconut yoghurt, chopped pistachios and pomegranate seeds, to serve"
    ],
    method: `Place the tea and coconut milk in a saucepan over medium heat. Bring to a gentle simmer and cook for 2 minutes. Strain the mixture into a medium bowl, discarding the solids. Add the milk, honey and chia seeds, mix to combine and refrigerate for 20 minutes or until the liquid is absorbed and the chia is soft.

Divide the chia between glasses and top with yoghurt, pistachio, pomegranate and extra honey to serve.`
  },
  {
    id: 77,
    title: "Power seed bircher with maple vanilla yoghurt",
    author: "Donna Hay",
    book: "Balanced",
    serves: "4",
    time: "4 hrs plus chilling",
    category: "Breakfast",
    ingredients: [
      "1/3 cup (55g) sunflower seeds",
      "1/3 cup (55g) pepitas (pumpkin seeds)",
      "1/3 cup (60g) linseeds (flaxseeds)",
      "1/2 cup (60g) rolled spelt oats",
      "1 1/2 cups (375ml) milk or nut milk",
      "1/2 teaspoon ground cinnamon",
      "1 tablespoon honey",
      "1 firm pear, grated",
      "raspberries, to serve",
      "1 cup (280g) plain Greek-style (thick) yoghurt",
      "2 tablespoons maple syrup",
      "1 teaspoon vanilla bean paste"
    ],
    method: `Place the sunflower seeds, pepitas, linseeds and oats in a large bowl. Add the milk, cinnamon and honey and mix to combine. Refrigerate for 4 hours or overnight.

To make the maple vanilla yoghurt, place the yoghurt, maple syrup and vanilla in a bowl and mix to combine.

Add the pear to the bircher and stir to combine. Spoon the bircher into serving bowls or jars and top with the yoghurt and raspberries to serve.`
  },
  {
    id: 78,
    title: "No-knead seeded morning bread",
    author: "Donna Hay",
    book: "Balanced",
    serves: "1 loaf",
    time: "9 hrs plus resting",
    category: "Baking",
    ingredients: [
      "3 1/3 cups (830ml) water",
      "1 teaspoon dry yeast",
      "1 tablespoon maple syrup",
      "3 teaspoons sea salt flakes",
      "6 cups (780g) white spelt flour, plus extra for dusting",
      "1/2 cup (90g) linseeds (flaxseeds)",
      "1/2 cup (80g) sunflower seeds",
      "butter, to serve"
    ],
    method: `Place the water, yeast, maple syrup and salt in a large bowl and mix to combine. Add the flour, linseeds and sunflower seeds and mix until a sticky dough forms. Turn out the dough onto a surface dusted with flour and fold over the edges to form a rough round loaf. Place the dough in a clean bowl dusted with flour. Dust the top of the dough with flour and cover with a clean tea towel. Allow to stand for 8 hours or overnight.

Preheat oven to 250C (480F). Heat a large heavy-based cast-iron saucepan in the oven for 30 minutes or until very hot. Carefully remove the pan from the oven and dust with flour. Slide the dough into the hot pan. Using a small sharp knife, score the top of the dough with a cross pattern. Cover with a tight-fitting lid and bake for 40-45 minutes. Reduce the oven temperature to 220C (425F), remove the lid and bake, uncovered, for a further 20 minutes or until the bread sounds hollow when tapped. Slice the bread and serve warm with butter.`
  },
  {
    id: 79,
    title: "Espresso granola",
    author: "Donna Hay",
    book: "Balanced",
    serves: "4",
    time: "1 hr",
    category: "Breakfast",
    ingredients: [
      "4 x 30ml shots espresso or strong brewed coffee",
      "1/2 cup (125ml) hot water",
      "2 cups (240g) rolled oats",
      "2/3 cup (100g) raisins",
      "1/3 cup (80ml) maple syrup, plus extra to serve",
      "2/3 cup (100g) sunflower seeds",
      "2/3 cup (50g) flaked almonds",
      "milk or nut milk, to serve",
      "figs, halved, to serve"
    ],
    method: `Preheat oven to 120C (250F). Place the espresso and water in a medium bowl and stir to combine. Add the oats and raisins, mix to combine and allow to stand for 20 minutes or until the liquid is absorbed. Add the maple syrup, sunflower seeds and almonds and mix to combine. Spread the mixture onto 2 baking trays lined with non-stick baking paper and bake, tossing occasionally, for 45 minutes or until the oats are crisp. Allow to cool on trays. Store granola in an airtight container for up to 2 weeks. To serve, divide between bowls and top with milk, fig and extra maple syrup.`
  },
  {
    id: 80,
    title: "Banana buckwheat pancakes",
    author: "Donna Hay",
    book: "Balanced",
    serves: "4",
    time: "20 mins",
    category: "Breakfast",
    ingredients: [
      "3/4 cup (120g) buckwheat flour",
      "3/4 cup (95g) white spelt flour",
      "3 teaspoons baking powder",
      "1 teaspoon ground cinnamon",
      "3/4 cup (200g) mashed banana (about 3 bananas)",
      "1 egg",
      "1/4 cup (60ml) maple syrup, plus extra to serve",
      "3/4 cup (180ml) milk",
      "unsalted butter, to grease the pan",
      "store-bought vanilla bean yoghurt, to serve",
      "extra banana, sliced, to serve"
    ],
    method: `Place both the flours, the baking powder and cinnamon in a large bowl and mix to combine. Add the banana, egg, maple syrup and milk and whisk until smooth.

Heat a little of the butter in a non-stick frying pan over medium heat. Add 1/3 cup (80ml) of the batter to the pan and cook for 2-3 minutes each side or until golden. Set aside and keep warm. Repeat with the butter and remaining batter. Divide pancakes between serving plates and top with yoghurt and extra banana. Drizzle with extra maple syrup to serve.`
  },
  {
    id: 81,
    title: "Amaranth oats with cashews",
    author: "Donna Hay",
    book: "Balanced",
    serves: "4",
    time: "15 mins",
    category: "Breakfast",
    ingredients: [
      "1 1/2 cups (180g) rolled oats",
      "1/2 teaspoon sea salt flakes",
      "2 cups (500ml) milk, plus extra to serve",
      "1 cup (250ml) water",
      "1/2 cup (60g) amaranth flakes",
      "1 tablespoon honey, plus extra to serve",
      "1/2 teaspoon ground cinnamon",
      "1 apple, cored and cut into matchsticks, to serve",
      "toasted cashews, to serve"
    ],
    method: `Place the oats, salt, milk and water in a saucepan over medium heat. Cook, stirring occasionally, for 10 minutes or until the oats are beginning to soften. Add the amaranth and cook, stirring, for a further 2-3 minutes or until soft. Add the honey and cinnamon and stir to combine. Spoon the oats into serving bowls and top with extra milk and honey. Sprinkle with the apple and cashews to serve.`
  },
  {
    id: 82,
    title: "Green minestrone",
    author: "Donna Hay",
    book: "Balanced",
    serves: "4",
    time: "20 mins",
    category: "Vegetarian",
    ingredients: [
      "2 tablespoons extra virgin olive oil",
      "3 cloves garlic, thinly sliced",
      "1 white onion, finely chopped",
      "1 leek, white part only, finely chopped",
      "1.5 litres chicken or vegetable stock",
      "1 small fennel bulb (180g), trimmed and thinly sliced",
      "2 stalks celery, sliced",
      "2 cups (240g) frozen peas",
      "1 cup (150g) peeled broad beans",
      "4 cups (100g) baby spinach leaves",
      "sea salt and cracked black pepper",
      "3/4 cup (195g) store-bought kale or basil pesto",
      "finely grated parmesan, to serve"
    ],
    method: `Heat the oil in a large saucepan over high heat. Add the garlic, onion and leek and cook, stirring, for 5-7 minutes or until softened. Add the stock and bring to the boil. Add the fennel, celery, peas and broad beans and cook for a further 5 minutes or until the vegetables are tender. Add the spinach, salt and pepper and stir to combine. Divide between serving bowls and top with the pesto and parmesan to serve.`
  },
  {
    id: 83,
    title: "Kale, pea and ricotta fritters",
    author: "Donna Hay",
    book: "Balanced",
    serves: "16 fritters",
    time: "30 mins",
    category: "Vegetarian",
    ingredients: [
      "1 cup (120g) frozen peas, thawed and crushed",
      "3 cups (150g) finely shredded kale leaves",
      "1 cup (240g) fresh ricotta",
      "3 eggs",
      "1/4 cup (50g) chia seeds",
      "1 tablespoon finely grated lemon rind",
      "2 tablespoons chopped mint leaves",
      "sea salt and cracked black pepper",
      "2 tablespoons extra virgin olive oil",
      "baba ganoush, watercress sprigs and lemon wedges, to serve"
    ],
    method: `Place the peas, kale, ricotta, eggs, chia seeds, lemon rind, mint, salt and pepper in a bowl, mix to combine and allow to stand for 20 minutes.

Heat a little of the oil in a large non-stick frying pan over medium heat. Shape the mixture into 2-tablespoon patties and flatten slightly. Cook, in batches, for 2-3 minutes each side or until golden, adding more oil as necessary. Divide between serving plates and top with baba ganoush. Serve with watercress and lemon wedges.`
  },
  {
    id: 84,
    title: "Chicken caesar salad with crispy kale",
    author: "Donna Hay",
    book: "Balanced",
    serves: "4",
    time: "30 mins",
    category: "Poultry",
    ingredients: [
      "4 x 200g chicken breast fillets, trimmed",
      "extra virgin olive oil, for brushing",
      "sea salt and cracked black pepper",
      "1 cup (200g) shredded Brussels sprouts",
      "2 baby cos (romaine) lettuces (360g), trimmed and leaves separated",
      "3 cups (75g) baby spinach leaves",
      "1/2 cup (80g) pine nuts",
      "8 stalks kale, trimmed",
      "2 tablespoons extra virgin olive oil",
      "1/3 cup (25g) finely grated parmesan",
      "sea salt and cracked black pepper",
      "3 egg yolks",
      "3 cloves garlic, crushed",
      "1 tablespoon Dijon mustard",
      "1/4 cup (60ml) extra virgin olive oil",
      "1 tablespoon apple cider vinegar"
    ],
    method: `To make the dressing, place the egg yolks, garlic and mustard in a bowl and whisk until thick and creamy. Gradually add half the oil, whisking continuously until combined. Gradually add the vinegar and the remaining oil, whisking to combine. Set aside.

To make the crispy kale, preheat oven to 150C (300F). Place the kale, oil, parmesan, salt and pepper in a bowl and toss to coat. Place in a single layer on baking trays lined with non-stick baking paper. Bake for 15-20 minutes or until crisp, and set aside.

Brush the chicken with oil and sprinkle with salt and pepper. Heat a char-grill pan or barbecue over high heat. Cook the chicken for 2-3 minutes each side or until cooked through. Slice the chicken and place in a large bowl. Add the Brussels sprout, lettuce, spinach and pine nuts and toss to combine. Divide between serving plates and top with crispy kale and the dressing to serve.`
  }
];

const RECIPE_SUMMARIES = {
  1: "Steamed salmon with green beans, jammy eggs and olive yoghurt dressing for a bright, elegant, fast Nicoise-style plate.",
  2: "Broad beans, charred peppers, almonds and Manchego tossed with parsley and vinegar for a fresh, punchy Mediterranean salad.",
  3: "Wild rice with chard, sour cherries, feta and walnuts creates a tangy, textured, wholesome bowl with vibrant colour.",
  4: "Crunchy celeriac with mustardy yoghurt and tarragon, wrapped with prosciutto, makes a sharp, creamy, savoury quick salad.",
  5: "Spaghetti tossed in silky cavolo nero, garlic and Parmesan sauce, finished with ricotta for creamy, vibrant comfort.",
  6: "Linguine with julienned courgette, mint, lemon and Parmesan delivers a light, zesty pasta full of fresh flavour.",
  7: "Smoky salmon, spring onions, eggs, creme fraiche and cheese make a quick, creamy frittata with strong savoury character.",
  8: "Whole chicken roasted over tikka-spiced potatoes and cauliflower, creating a bold, warming tray roast with rich pan juices.",
  9: "Spatchcocked chicken with peppers, red onions and rose harissa roasts into a smoky, spicy, mint-finished traybake.",
  10: "Blistered tomatoes, white fish, korma paste and coconut milk make a fast, creamy curry with lively tang.",
  11: "Seared tuna with radishes, soya beans and pickled ginger dressing makes a fresh, sharp, protein-rich salad plate.",
  12: "King prawns cooked in curry-garlic oil and mango chutney, finished with lime, for sticky, sweet-hot seafood flavour.",
  13: "Beef shin slow-cooked with carrots, onions, Worcestershire and mustard until meltingly tender in a rich, comforting casserole.",
  14: "Pork fillet simmered with chickpeas, peppers, chard and fennel for a hearty one-pan dish with balanced acidity.",
  15: "Chipolatas baked with tomatoes, garlic, focaccia and white beans create a rustic, bubbling tray of savoury comfort.",
  16: "Lamb, onions and aubergines roasted with rogan josh, then rippled with yoghurt for a mellow aromatic curry.",
  17: "Silky dark chocolate mousse layered with syrupy cherries for a rich dessert balanced by fruity sharpness.",
  18: "Oats, dried fruit, nuts and syrup baked into chewy-crisp flapjack biscuits for an easy, comforting sweet treat.",
  19: "Vanilla ice cream, espresso, walnuts and warm chocolate combine for a quick, indulgent affogato with hot-cold contrast.",
  20: "Meringue, raspberries and vanilla ice cream topped with jammy blueberries and chocolate for a fast layered dessert.",
  21: "Baby beets with horseradish creme fraiche, watercress and bresaola create a sharp, earthy, elegant salad.",
  22: "Tangy cauliflower pickle with chilli, ginger and mustard, made to keep in jars and serve with grilled meats.",
  23: "A sweet-hot mango pickle with onion, apple and chilli, cooked down until sticky and intensely fragrant.",
  24: "A bold tomato kasundi with mustard, chilli and ginger, perfect as a punchy condiment for grilled food.",
  25: "Fiery pork vindaloo with vinegar, tamarind and tomatoes, slowly cooked until tender in a reduced sauce.",
  26: "A robust chicken curry driven by black pepper, onions and ginger, finished with coriander and fried shallots.",
  27: "Soft fried eggplant folded through a sharp, spiced pickle base with tamarind, vinegar and curry leaves.",
  28: "Duck curry with tomato, citrus and warming spices, simmered until tender and finished with coriander.",
  29: "Crisp fish and fried eggplant in a coconut-rich Konkan curry with tamarind, chillies and kokum.",
  30: "Duck braised in a yoghurt marinade with mustard oil, garlic and chilli for a rich, gently tangy dish.",
  31: "Turmeric-marinated fish served over coconut beetroot salad with cress and fried curry leaves.",
  32: "Butterflied prawns baked with roasted coconut, black pepper, curry leaves and tomato-spice sauce.",
  33: "Tamarind prawns in a fast spiced sauce with roasted tomato, coriander and crisp curry leaves.",
  34: "Chicken wings coated in an assertive black pepper masala, cooked dry and served with fried curry leaves.",
  35: "A lively chickpea salad with sprouts, freekeh, pomegranate, seeds, chutney and crisp pappadam strips.",
  36: "Rich carbonara with crisp guanciale, pecorino and yolks, loosened with stock for a glossy, savoury sauce.",
  37: "Creamy stracciatella topped with pickled raisins, saffron dressing and bitter radicchio for a refined sweet-savoury salad.",
  38: "Deeply savoury mushroom risotto enriched with fermented mushroom paste, butter and parmesan for layered umami richness.",
  39: "Spaghetti with warm trout, mussels and silky tomato butter creates a refined seafood pasta with layered depth.",
  40: "Hand-rolled fusilli in intense puttanesca sauce with anchovy, tomatoes and aromatics for a punchy southern Italian pasta.",
  41: "Casarecce with sausage, radicchio and parmesan balances rich pork, bitterness and gentle heat in a fast pasta.",
  42: "Soft gnocchi folded through rich duck and porcini ragu for a deeply comforting bowl with earthy depth.",
  43: "Tagliatelle with slow-cooked rabbit ragu, olives and oregano offers a robust, savoury pasta with Mediterranean character.",
  44: "Cannelloni filled with smoky eggplant and ricotta, baked in tomato sauce until golden and bubbling.",
  45: "Linguine with clams and smoked cherry tomatoes delivers briny sweetness, smoke and basil in a glossy sauce.",
  46: "Spaghetti with king prawns and cavolo nero uses prawn head sauce for concentrated seafood flavour and freshness.",
  47: "A versatile master pasta dough for long, filled and shaped pasta, made with eggs and semolina.",
  48: "A deep, meaty Polish stew of smoked pork, sauerkraut, sausage, prunes and cabbage, built over two days.",
  49: "Tender veal goulash with paprika, root vegetables and marjoram, slowly baked until rich and comforting.",
  50: "A simpler beef goulash scented with coriander and green peppercorns, finished with paprika for warmth.",
  51: "Crisp lamb croquettes hiding saffron butter, warmly spiced and served with lemon for brightness.",
  52: "Tender cabbage rolls stuffed with beef, rice and porcini, baked in a light tomato sauce.",
  53: "Chicken thigh stroganoff with mushrooms, sour cream and paprika, rich enough for cold-weather comfort.",
  54: "Silky duck liver pate lifted with green walnut vodka, cream and thyme for a rich spread.",
  55: "Tart pickled mushrooms with shallots, carrot and spices, ideal for platters, salads and cold spreads.",
  56: "Baked eggs set over caper-garlic paste and topped with buttery parmesan crumbs for a sharp starter.",
  57: "Prawns in sweet chilli, honey vodka, ginger and coriander for a sticky, spicy, quick seafood dish.",
  58: "A no-bake slice with nutty date base, creamy peanut filling and glossy cacao topping.",
  59: "A moist banana tray cake studded with berries and brushed with maple syrup while warm.",
  60: "A tender orange almond cake soaked with citrus syrup and thickened gently with chia seeds.",
  61: "Creamy lemon chia puddings with coconut, yoghurt and toasted coconut for a bright, spoonable breakfast.",
  62: "Frozen banana coconut yoghurt pressed between fruit slices for a cool, playful ice-cream sandwich.",
  63: "A creamy green dip of kale and soaked cashews with lemon and garlic, served chilled.",
  64: "Crisp seeded crackers baked until golden, sturdy enough for dips and good snack boards.",
  65: "Creamy matcha yoghurt pops with honey and coconut milk, finished with chopped pistachios.",
  66: "Soft cacao bars made with banana, dates and cashews, finished with coconut flakes.",
  67: "Rich cacao date truffles rolled into bite-sized balls for a quick, fridge-friendly snack.",
  68: "Roasted chickpeas and almonds glazed with Sriracha and honey for a sweet-hot crunchy snack.",
  69: "Beetroot-cured salmon served with sharp fennel and horseradish for a fresh, elegant plate.",
  70: "Whole-wheat ramen in miso broth with glazed chicken, kale, eggs and nori for a balanced bowl.",
  71: "Baked fish cakes with chilli-lime dressing, crisp lettuce cups and a bright herb salad.",
  72: "Moroccan-spiced chicken with couscous, carrot, currants and almonds in a bright orange dressing.",
  73: "A vivid broccoli and watercress pesto with roasted garlic, almonds and parmesan for spreading or spooning.",
  74: "A crisp green salad of sprouts, beans, fennel and ricotta with a herby yoghurt dressing.",
  75: "A fluffy folded omelette packed with kale, spinach and cheeses, topped with crushed peas.",
  76: "Chai-infused chia pots with coconut milk, yoghurt, pistachios and pomegranate for a fragrant breakfast.",
  77: "Seeded bircher with pear and maple vanilla yoghurt, built for an easy make-ahead breakfast.",
  78: "A crusty no-knead spelt loaf packed with seeds and baked in a hot cast-iron pan.",
  79: "Espresso granola with oats, raisins, seeds and almonds for a bitter-sweet breakfast crunch.",
  80: "Soft banana pancakes with buckwheat and cinnamon, served with yoghurt and extra maple syrup.",
  81: "Creamy oats enriched with amaranth, cinnamon, apple and toasted cashews for a warming bowl.",
  82: "A green, pesto-topped minestrone with fennel, peas, beans and spinach for a light meal.",
  83: "Golden ricotta fritters with kale, peas and lemon, served with baba ganoush and greens.",
  84: "A lighter chicken Caesar with crunchy kale, Brussels sprouts, pine nuts and creamy dressing."
};

// Build ingredient → recipe map
function normalizeIngredientForIndex(ingredient) {
  const raw = ingredient.toLowerCase().trim();
  const cleaned = raw
    .replace(/\(.*?\)/g, "")
    .replace(/^[-–]\s*/, "")
    .replace(/^\d+\s*[x×]\s*/, "")
    .replace(/^\d+(?:\.\d+)?\s+/, "")
    .replace(/^\d+\s*\/\s*\d+\s+/, "")
    .replace(/^\d+(?:\.\d+)?\s*(?:kg|g|mg|ml|l)\s+/, "")
    .replace(/^(?:g|kg|mg|ml|l)\s+/, "")
    .replace(/^g\s+/, "")
    .replace(/^(?:tablespoons?|teaspoons?|tbsp|tsp|cups?|cup)\s+(?:of\s+)?/, "")
    .replace(/^\d+(?:\.\d+)?\s*(?:heaped\s+)?(?:tablespoons?|teaspoons?|tbsp|tsp|cloves?|sprigs?|slices?|shots?|scoops?|cups?)\s+(?:of\s+)?/, "")
    .replace(/^(?:half|quarter)\s+(?:a\s+)?/, "")
    .replace(/^1\/2\s+(?:a\s+)?/, "")
    .replace(/^1\/4\s+(?:a\s+)?/, "")
    .replace(/^3\/4\s+(?:a\s+)?/, "")
    .replace(/^\d+\s+(?:large|small|medium)\s+/, "")
    .replace(/^\d+\s+(?:punnets?|pods?|fillets?|portions?|pieces?|tails?|marylands?|wings?)\s+(?:of\s+)?/, "")
    .replace(/^\d+\s+(?:a\s+)?bunch(?:es)?\s+(?:of\s+)?/, "")
    .replace(/^1\/2\s+(?:a\s+)?bunch of\s+/, "")
    .replace(/^bunch of\s+/, "")
    .replace(/^(?:small|medium|large)\s+/, "")
    .replace(/^(?:sticks?|stalks?)\s+of\s+/, "")
    .replace(/^(?:head|heads)\s+of\s+/, "")
    .replace(/^(?:half|quarter)\s+head\s+of\s+/, "")
    .replace(/^(?:quality|good-quality|italian|polish|french|japanese|plain|skinless|lean|boneless|smoked)\s+/, "")
    .replace(/^piece of\s+/, "")
    .replace(/^tin of\s+/, "")
    .replace(/^jar of\s+/, "")
    .replace(/^extra\s+/, "")
    .replace(/^dry\s+/, "")
    .replace(/^whole-?wheat\s+/, "")
    .replace(/^(?:coarse|finely|thinly|lightly)\s+/, "")
    .replace(/^ripe\s+/, "")
    .replace(/^mixed-colour\s+/, "")
    .replace(/^mixed colour\s+/, "")
    .replace(/^fresh\s+/, "")
    .replace(/^dried\s+/, "")
    .replace(/^raw\s+/, "")
    .replace(/^cooked\s+/, "")
    .replace(/^frozen\s+/, "")
    .replace(/^shelled\s+/, "")
    .replace(/^unsalted\s+/, "")
    .replace(/^low-salt\s+/, "")
    .replace(/^half-fat\s+/, "")
    .replace(/^natural\s+/, "")
    .replace(/^whole\s+/, "")
    .replace(/^self-raising\s+/, "")
    .replace(/^extra virgin\s+/, "")
    .replace(/^shop-bought\s+/, "")
    .replace(/^hot-smoked\s+/, "")
    .replace(/^freshly squeezed\s+/, "")
    .replace(/^(?:coarse|finely|thinly|lightly|roughly|softly|firmly)\s+/, "")
    .replace(/^(?:grated|shredded|chopped|crushed|mashed|ground|flaked|rolled)\s+/, "")
    .replace(/\s+(?:fillets?|portions?|pieces?|tails?|heads?|cloves?|sprigs?|leaves?|sticks?|stalks?|bulbs?|fronds?|tablespoons?|teaspoons?|tbsp|tsp|cups?|cup|ml|l|g|kg|mg)$/, "")
    .replace(/\s+(?:flakes?|powder|meal|bran|flours?)$/, "")
    .replace(/,\s*.*$/, "")
    .replace(/\s+/g, " ")
    .trim();

  const spiceOrDetailPatterns = [
    /\bcurry powder\b/,
    /\bcurry paste\b/,
    /\bgaram masala\b/,
    /\bmasala\b/,
    /\brogan josh\b/,
    /\bkorma\b/,
    /\bharissa\b/,
    /\bturmeric\b/,
    /\bcumin\b/,
    /\bcardamom\b/,
    /\bcinnamon\b/,
    /\bcloves?\b/,
    /\bfenugreek\b/,
    /\bfennel seeds?\b/,
    /\bblack pepper\b/,
    /\bpeppercorns?\b/,
    /\bchilli powder\b/,
    /\bkashmiri chilli\b/,
    /\bsaffron\b/,
    /\bginger garlic paste\b/,
    /\bmustard\b/,
    /\bsoy sauce\b/,
    /\bpickle\b/,
    /\bvinegar\b/,
    /\bolive oil\b/,
    /\bvegetable oil\b/,
    /\bcoconut oil\b/,
    /\bmustard oil\b/,
    /\bsunflower oil\b/,
    /\bgrapeseed oil\b/,
    /\bsugar\b/,
    /\bsyrup\b/,
    /\bjaggery\b/,
    /\bchutney\b/,
    /\bmixed dried fruit\b/,
    /\bmixed dried fruit & nuts\b/,
    /\bpapp?adams?\b/,
    /\bpapads?\b/,
    /\bappams?\b/,
    /\bstock\b/,
    /\bwater\b/,
    /\brace flour\b/,
    /\bflour\b/,
    /\btable salt\b/,
    /\bsea salt\b/,
    /\bsalt flakes\b/,
    /\btamarind\b/,
    /\bkokum\b/,
    /\bpaste\b/,
    /\bpuree\b/,
    /\bpurée\b/,
    /\bcream\b/,
    /\bcapers?\b/,
    /\bsalad\b/,
    /\bcurry leaves?\b/,
    /\bfried curry leaves?\b/,
    /\bfried shallot\b/,
    /\bfried garlic\b/,
    /\bvodka\b/,
    /\bliqueur\b/,
    /\bpaprika\b/,
    /\bmarjoram\b/,
    /\ballspice\b/,
    /\bjuniper\b/,
    /\bcaraway\b/,
    /\bghee\b/,
    /\bbreadcrumbs?\b/,
    /\bpanko\b/,
    /\bpotato starch\b/,
    /\bcornflour\b/,
    /\barrowroot\b/
  ];
  if (spiceOrDetailPatterns.some((re) => re.test(cleaned))) return null;

  const aliasPatterns = [
    { re: /\bspaghetti\b|\blinguine\b|\bpasta\b/, value: "pasta" },
    { re: /\bshin of beef\b|\bbeef\b|\bveal\b/, value: "beef" },
    { re: /\bfocaccia\b|\bbread\b/, value: "bread" },
    { re: /\bporridge oats?\b|\boats?\b/, value: "oats" },
    { re: /\bbaby beets?\b|\bbeets?\b|\bbeetroot\b/, value: "beetroots" },
    { re: /\bespresso\b|\bcoffee\b/, value: "coffee" },
    { re: /\bcoriander(?: leaves?)?\b|\bparsley\b|\btarragon\b|\bsage\b|\bthyme\b|\bbasil\b/, value: "herbs" },
    { re: /\bmint\b/, value: "mint" },
    { re: /\bcauliflower\b/, value: "cauliflower" },
    { re: /\bmango(es)?\b/, value: "mango" },
    { re: /\bapples?\b/, value: "apple" },
    { re: /\bginger\b/, value: "ginger" },
    { re: /\bhorseradish\b/, value: "horseradish" },
    { re: /\bchilli(es)?\b/, value: "chilli" },
    { re: /\bolives?\b/, value: "olives" },
    { re: /\bpeppers?\b/, value: "peppers" },
    { re: /\bbay(?: leaf)?\b/, value: "bay leaf" },
    { re: /\bbaba ganoush\b/, value: "eggplant" },
    { re: /\basparagus\b/, value: "asparagus" },
    { re: /\bshallots?\b/, value: "shallots" },
    { re: /\bonions?\b|spring onions?/, value: "onions" },
    { re: /\bcelery(?: stick| sticks| stalk| stalks)?\b/, value: "celery" },
    { re: /\bguanciale\b|\bpork\b|\bsmoked pork belly\b|\bpolish smoked ring sausage\b|\bwiejska kielbasa\b|\bkaiserfleisch\b|\bsausage meat\b/, value: "pork" },
    { re: /\bduck\b/, value: "duck" },
    { re: /\bchicken\b/, value: "chicken" },
    { re: /\brabbit\b/, value: "rabbit" },
    { re: /\btuna\b/, value: "tuna" },
    { re: /\bsalmon fillets?\b|\bsalmon\b/, value: "salmon" },
    { re: /\brainbow trout\b|\btrout\b|\bwhite fish\b|\bhaddock\b|\bbarramundi\b|\bmahi mahi\b|\bbass groper\b|\bsnapper\b|\bfish\b/, value: "fish" },
    { re: /\bmussels?\b|\bclams?\b|\bvongole\b/, value: "shellfish" },
    { re: /\bking prawns?\b|\bprawns?\b|\bshrimp\b/, value: "prawns" },
    { re: /\bchipolatas?\b|\bsausage(s)?\b/, value: "sausages" },
    { re: /\bbroad beans?\b|\bsoya beans?\b|\bwhite beans?\b/, value: "beans" },
    { re: /\bchickpeas?\b/, value: "chickpeas" },
    { re: /\bmung bean sprouts?\b|\bsprouts?\b/, value: "sprouts" },
    { re: /\bchia\b|\blinseeds?\b|\bflaxseeds?\b|\bsunflower seeds?\b|\bpepitas\b|\bpumpkin seeds?\b|\bsesame seeds?\b|\bpoppyseeds?\b|\bpoppy seeds?\b|\bpomegranate seeds?\b|\bseeds?\b/, value: "seeds" },
    { re: /\bamaranth\b|\bsorghum\b|\bvialone nano rice\b|\bfreekeh\b|\bmixed wild rice\b|\brice\b|\bcouscous\b|\bquinoa\b|\bgrains?\b/, value: "grains" },
    { re: /\bwalnuts?\b|\balmonds?\b|\bcashews?\b|\bhazelnuts?\b|\bpistachios?\b|\bnuts?\b/, value: "nuts" },
    { re: /\bcherry tomatoes?\b|\bnapoli tomato sauce\b|\btomato sauce\b|\bpassata\b|\btomatoes?\b/, value: "tomatoes" },
    { re: /\bradicchio\b/, value: "radicchio" },
    { re: /\bcourgettes?\b|\bzucchini\b|\bzuchinni\b/, value: "zuchinni" },
    { re: /\baubergines?\b|\beggplants?\b|\bbrinjal\b/, value: "eggplant" },
    { re: /\brainbow chard\b|\bchard\b/, value: "chard" },
    { re: /\bfennel(?: bulb| bulbs| fronds)?\b/, value: "fennel" },
    { re: /\bcavolo nero\b|\bkale\b/, value: "greens" },
    { re: /\bfield mushrooms?\b|\bbutton mushrooms?\b|\bmushrooms?\b|\bporcini\b/, value: "mushrooms" },
    { re: /\banchov(?:y|ies)\b/, value: "anchovy" },
    { re: /\bdark chocolate\b|\bchocolate\b/, value: "chocolate" },
    { re: /\bparmesan\b|\bmanchego\b|\bfeta\b|\bred leicester\b|\bricotta\b|\bpecorino\b|\bstracciatella\b|\bcheese\b/, value: "cheese" },
    { re: /\byoghurt\b|creme fraiche|crème fraîche|buttermilk/, value: "yoghurt" },
    { re: /\blivers?\b/, value: "liver" },
    { re: /\bblueberries?\b|\braspberries?\b|\bcherries?\b/, value: "berries" },
    { re: /\bice cream\b/, value: "ice cream" },
    { re: /\bmeringues?\b/, value: "meringue" },
    { re: /\beggs?\b/, value: "eggs" },
    { re: /\bgarlic\b/, value: "garlic" },
    { re: /\bcarrots?\b/, value: "carrot" },
    { re: /\bcoconut\b/, value: "coconut" },
    { re: /\bcold butter\b|\bbutter\b/, value: "butter" },
    { re: /\bdry white wine\b|\bwhite wine\b|\bvermouth\b|\bwine\b/, value: "wine" },
    { re: /\bwhole ?wheat japanese noodles\b|\bnoodles\b/, value: "noodles" },
    { re: /\bpotatoes?\b/, value: "potato" },
    { re: /\bsauerkraut\b|\bcabbage\b/, value: "cabbage" },
    { re: /\bwatercress\b|\bcress\b/, value: "watercress" },
    { re: /\blemon\b|\blime\b|\borange\b|\bmandarin\b|\bcitrus\b/, value: "citrus" },
    { re: /\bbresaola\b|\bprosciutto\b/, value: "cured meat" }
  ];

  for (const alias of aliasPatterns) {
    if (alias.re.test(cleaned)) return alias.value;
  }

  return cleaned || raw;
}

function titleCaseIngredient(value) {
  return value.replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildIndex(recipes) {
  const map = {};
  recipes.forEach(r => {
    r.ingredients.forEach(ing => {
      const key = normalizeIngredientForIndex(ing);
      if (!key) return;
      if (!map[key]) map[key] = { display: titleCaseIngredient(key), recipes: [] };
      map[key].recipes.push(r.id);
    });
  });
  return map;
}

// Build author → recipes map
function buildAuthorIndex(recipes) {
  const map = {};
  recipes.forEach(r => {
    const key = r.author;
    if (!map[key]) map[key] = { books: new Set(), recipes: [] };
    map[key].recipes.push(r.id);
    map[key].books.add(r.book);
  });
  return map;
}

const INDEX = buildIndex(RECIPES);
const AUTHOR_INDEX = buildAuthorIndex(RECIPES);
const ALL_INGREDIENTS = Object.keys(INDEX).sort();
const ALL_AUTHORS = Object.keys(AUTHOR_INDEX).sort();

document.getElementById('ingredient-count').textContent = ALL_INGREDIENTS.length;
document.getElementById('total-count').textContent = RECIPES.length;

let activeIngredient = null;
let activeAuthor = null;
let expandedCard = null;
let isMobileSheetOpen = false;
const collapsedCategories = new Set();

function isMobileView() {
  return window.matchMedia('(max-width: 768px)').matches;
}

function updateMobileFilterSummary() {
  const summary = document.getElementById('mobile-filter-summary');
  if (!summary) return;
  const parts = [];
  if (activeAuthor) parts.push(activeAuthor);
  if (activeIngredient) parts.push(INDEX[activeIngredient].display);
  summary.textContent = parts.length ? parts.join(' + ') : 'All recipes';
}

function syncMobileSheet() {
  const sidebar = document.getElementById('filters-sidebar');
  const backdrop = document.getElementById('mobile-filter-backdrop');
  const trigger = document.getElementById('mobile-filter-trigger');

  if (!isMobileView()) {
    sidebar.classList.remove('mobile-open');
    backdrop.classList.remove('show');
    trigger.setAttribute('aria-expanded', 'false');
    isMobileSheetOpen = false;
    return;
  }

  sidebar.classList.toggle('mobile-open', isMobileSheetOpen);
  backdrop.classList.toggle('show', isMobileSheetOpen);
  trigger.setAttribute('aria-expanded', String(isMobileSheetOpen));
}

function getFilteredRecipes() {
  let filtered = RECIPES;
  if (activeAuthor) filtered = filtered.filter(r => r.author === activeAuthor);
  if (activeIngredient) {
    filtered = filtered.filter(r => r.ingredients.some(i => normalizeIngredientForIndex(i) === activeIngredient));
  }
  return filtered;
}

// Group by letter
function groupByLetter(ingredients) {
  const groups = {};
  ingredients.forEach(ing => {
    const letter = ing[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(ing);
  });
  return groups;
}

function renderAuthors() {
  const list = document.getElementById('author-list');
  list.innerHTML = ALL_AUTHORS.map(author => {
    const books = [...AUTHOR_INDEX[author].books].filter(Boolean).join(', ');
    const count = AUTHOR_INDEX[author].recipes.length;
    return `
      <button class="author-btn ${activeAuthor === author ? 'active' : ''}" data-author="${author}">
        <span>
          <span class="author-name">${author}</span>
          ${books ? `<span class="author-book">${books}</span>` : ''}
        </span>
        <span class="ing-count">${count}</span>
      </button>
    `;
  }).join('');

  list.querySelectorAll('.author-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const author = btn.dataset.author;
      activeAuthor = activeAuthor === author ? null : author;
      // If active ingredient no longer in filtered set, clear it
      if (activeIngredient && activeAuthor) {
        const validRecipes = RECIPES.filter(r => r.author === activeAuthor);
        const ingInAuthor = validRecipes.some(r => r.ingredients.some(i => normalizeIngredientForIndex(i) === activeIngredient));
        if (!ingInAuthor) activeIngredient = null;
      }
      renderAuthors();
      renderSidebar(document.getElementById('ing-search').value);
      renderRecipes();
      renderFullIndex();
      if (isMobileView()) {
        isMobileSheetOpen = false;
        syncMobileSheet();
      }
    });
  });
}

function renderSidebar(filter = '') {
  const list = document.getElementById('ingredient-list');
  // When author is active, only show ingredients from that author's recipes
  let relevantRecipes = activeAuthor ? RECIPES.filter(r => r.author === activeAuthor) : RECIPES;
  const relevantIngredients = new Set();
  relevantRecipes.forEach(r => r.ingredients.forEach(i => {
    const normalized = normalizeIngredientForIndex(i);
    if (normalized) relevantIngredients.add(normalized);
  }));

  const filtered = ALL_INGREDIENTS.filter(i => relevantIngredients.has(i) && i.includes(filter.toLowerCase()));
  const groups = groupByLetter(filtered);

  list.innerHTML = Object.keys(groups).sort().map(letter => `
    <div class="ingredient-group">
      <div class="letter-header">${letter}</div>
      ${groups[letter].map(ing => `
        <button class="ingredient-btn ${activeIngredient === ing ? 'active' : ''}" data-ing="${ing}">
          <span>${INDEX[ing].display}</span>
          <span class="ing-count">${relevantRecipes.filter(r => r.ingredients.some(i => normalizeIngredientForIndex(i) === ing)).length}</span>
        </button>
      `).join('')}
    </div>
  `).join('');

  list.querySelectorAll('.ingredient-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const ing = btn.dataset.ing;
      activeIngredient = activeIngredient === ing ? null : ing;
      renderSidebar(document.getElementById('ing-search').value);
      renderRecipes();
      renderFullIndex();
      if (isMobileView()) {
        isMobileSheetOpen = false;
        syncMobileSheet();
      }
    });
  });
}

function renderRecipes() {
  const grid = document.getElementById('recipe-grid');
  const heading = document.getElementById('view-heading');
  const countEl = document.getElementById('result-count');
  const clearBtn = document.getElementById('clear-btn');
  const emptyState = document.getElementById('empty-state');

  const filtered = getFilteredRecipes();

  const parts = [];
  if (activeAuthor) parts.push(`<em>${activeAuthor}</em>`);
  if (activeIngredient) parts.push(`<em>${INDEX[activeIngredient].display}</em>`);

  if (parts.length) {
    heading.innerHTML = `Recipes — ${parts.join(' + ')}`;
    clearBtn.style.display = 'block';
    countEl.textContent = `${filtered.length} recipe${filtered.length !== 1 ? 's' : ''}`;
  } else {
    heading.innerHTML = `All <em>Recipes</em>`;
    clearBtn.style.display = 'none';
    countEl.textContent = '';
  }
  updateMobileFilterSummary();

  if (filtered.length === 0) {
    grid.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }
  grid.style.display = 'block';
  emptyState.style.display = 'none';

  const grouped = filtered.reduce((acc, recipe) => {
    const key = recipe.category || 'Other';
    if (!acc[key]) acc[key] = [];
    acc[key].push(recipe);
    return acc;
  }, {});

  const categories = Object.keys(grouped).sort((a, b) => a.localeCompare(b));

  grid.innerHTML = categories.map(category => {
    const isCollapsed = collapsedCategories.has(category);
    const cards = grouped[category].map(r => {
    const summary = RECIPE_SUMMARIES[r.id] || "A quick, flavour-forward recipe from Jamie Oliver's 5 Ingredients collection.";
    const isExpanded = expandedCard === r.id;
    return `
      <div class="recipe-card ${isExpanded ? 'expanded' : ''}" data-id="${r.id}">
        <div class="card-type">${r.category} · ${r.author}</div>
        <div class="card-title">${r.title}</div>
        <div class="card-meta">
          <span>⏱ ${r.time}</span>
          <span>👤 Serves ${r.serves}</span>
          <span>🥕 ${r.ingredients.length} ingredients</span>
        </div>
        <p class="card-summary">${summary}</p>
        <div class="recipe-detail">
          <div class="detail-section-label">Ingredients</div>
          <ul class="ingredients-list">
            ${r.ingredients.map(i => `<li>${i}</li>`).join('')}
          </ul>
          <div class="detail-section-label">Method</div>
          <div class="method-text">${r.method}</div>
        </div>
      </div>
    `;
    }).join('');

    return `
      <section class="category-section" data-category="${category}">
        <div class="category-header">
          <h3 class="category-title">${category}</h3>
          <button
            class="category-toggle"
            type="button"
            data-category-toggle="${category}"
            aria-expanded="${String(!isCollapsed)}"
          >
            ${isCollapsed ? 'Show' : 'Hide'}
          </button>
        </div>
        <div class="recipe-grid" style="display:${isCollapsed ? 'none' : 'grid'};">
          ${cards}
        </div>
      </section>
    `;
  }).join('');

  grid.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      expandedCard = expandedCard === id ? null : id;
      renderRecipes();
    });
  });

  grid.querySelectorAll('[data-category-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.categoryToggle;
      if (collapsedCategories.has(category)) {
        collapsedCategories.delete(category);
      } else {
        collapsedCategories.add(category);
      }
      renderRecipes();
    });
  });
}

function renderFullIndex() {
  const container = document.getElementById('all-ingredients-view');
  const groups = groupByLetter(ALL_INGREDIENTS);
  container.innerHTML = Object.keys(groups).sort().map(letter => `
    <div class="alpha-section">
      <div class="alpha-letter">${letter}</div>
      ${groups[letter].map(ing => {
        const isActive = activeIngredient === ing;
        return `<button class="alpha-ingredient ${isActive ? 'active' : ''}" type="button" data-ing="${ing}">
          <span>${INDEX[ing].display}</span>
          <span class="recipes-for">${INDEX[ing].recipes.length} recipe${INDEX[ing].recipes.length > 1 ? 's' : ''}</span>
        </button>`;
      }).join('')}
    </div>
  `).join('');

  container.querySelectorAll('[data-ing]').forEach(btn => {
    btn.addEventListener('click', () => {
      const ing = btn.dataset.ing;
      activeIngredient = activeIngredient === ing ? null : ing;
      renderSidebar(document.getElementById('ing-search').value);
      renderRecipes();
      renderFullIndex();
      activateTab('recipes');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function activateTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const selected = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
  if (selected) selected.classList.add('active');
  document.getElementById('tab-recipes').style.display = tabName === 'recipes' ? 'block' : 'none';
  document.getElementById('tab-index').style.display = tabName === 'index' ? 'block' : 'none';
}

// TABS
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    activateTab(btn.dataset.tab);
  });
});

document.getElementById('ing-search').addEventListener('input', e => {
  renderSidebar(e.target.value);
});

document.getElementById('clear-btn').addEventListener('click', () => {
  activeIngredient = null;
  activeAuthor = null;
  renderAuthors();
  renderSidebar(document.getElementById('ing-search').value);
  renderRecipes();
  renderFullIndex();
});

document.getElementById('mobile-filter-trigger').addEventListener('click', () => {
  isMobileSheetOpen = !isMobileSheetOpen;
  syncMobileSheet();
});

document.getElementById('mobile-sheet-close').addEventListener('click', () => {
  isMobileSheetOpen = false;
  syncMobileSheet();
});

document.getElementById('mobile-filter-backdrop').addEventListener('click', () => {
  isMobileSheetOpen = false;
  syncMobileSheet();
});

window.addEventListener('resize', syncMobileSheet);

// Init
renderAuthors();
renderSidebar();
renderRecipes();
renderFullIndex();
syncMobileSheet();
</script>
</body>
</html>
