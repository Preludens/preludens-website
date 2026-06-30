---
layout: default
lang: nl
title: Home
description: Activeer je team en bereid ze voor op de toekomst met storytelling en MicroGames.
body_class: page-scroll-preview
---

<style>
  /* ===== Scroll homepage — volledig scherm, vloeiende fade + snap ===== */
  html:has(body.page-scroll-preview) {
    scroll-behavior: auto;            /* easing komt uit de eigen rAF-animatie */
    scroll-snap-type: y proximity;  /* zachte fallback; de animatie wordt JS-gestuurd */
    scroll-padding-top: var(--header-height); /* snap net onder het sticky menu */
    overflow-x: clip;                /* geen nieuwe scroll-container (geen sticky/snap-conflict) */
  }

  body.page-scroll-preview {
    background: var(--color-prussian-blue);
  }
  body.page-scroll-preview > .site-footer { display: none !important; }
  body.page-scroll-preview main { display: block; padding: 0; }
  body.page-scroll-preview #main { overflow: hidden; }

  /* Sticky menu altijd zichtbaar bovenaan, boven de panelen */
  body.page-scroll-preview .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
  }

  .sp-stack {
    position: relative;
    /* Geeft de laatste sticky slide genoeg ruimte om onder het vaste menu te landen. */
    padding-bottom: calc(var(--header-height) + var(--space-lg));
  }

  .sp-panel {
    position: sticky;
    top: 0;
    height: 100svh;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    will-change: opacity, transform, filter;
    transform-origin: center center;
    backface-visibility: hidden;
    scroll-snap-align: start;
    scroll-snap-stop: normal;
  }

  .sp-inner {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: var(--max-width);
    margin-inline: auto;
    padding: clamp(2rem, 6vw, 5rem) var(--space-lg);
  }

  /* Achtergrondlagen per paneel */
  .sp-panel--hero {
    background-color: var(--color-prussian-blue);
    background-image:
      radial-gradient(ellipse at 72% 20%, rgba(242, 196, 92, 0.18), transparent 42%),
      linear-gradient(135deg, var(--color-prussian-blue), var(--color-regal-navy));
    color: var(--color-white);
  }

  .sp-panel--hero::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    background:
      linear-gradient(90deg, rgba(11, 42, 53, 0.78) 0%, rgba(11, 42, 53, 0.38) 34%, rgba(11, 42, 53, 0.1) 62%, rgba(11, 42, 53, 0.44) 100%),
      linear-gradient(180deg, rgba(11, 42, 53, 0.36) 0%, rgba(11, 42, 53, 0.05) 35%, rgba(11, 42, 53, 0.56) 100%),
      url("{{ '/assets/images/hero/preludens-hero-bg.jpg' | relative_url }}");
    background-size: cover, cover, cover;
    background-position: center, center, center;
    pointer-events: none;
    opacity: 0.94;
    -webkit-mask-image:
      linear-gradient(90deg, transparent 0%, var(--color-deep-navy) 9%, var(--color-deep-navy) 91%, transparent 100%),
      linear-gradient(180deg, transparent 0%, var(--color-deep-navy) 8%, var(--color-deep-navy) 88%, transparent 100%);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(90deg, transparent 0%, var(--color-deep-navy) 9%, var(--color-deep-navy) 91%, transparent 100%),
      linear-gradient(180deg, transparent 0%, var(--color-deep-navy) 8%, var(--color-deep-navy) 88%, transparent 100%);
    mask-composite: intersect;
  }
  .sp-panel--cream {
    background-color: var(--color-cream);
    background-image: radial-gradient(ellipse at 80% 20%, rgba(237, 167, 14, 0.10), transparent 45%);
    color: var(--color-ink);
  }
  .sp-panel--navy {
    background-color: var(--color-regal-navy);
    background-image: radial-gradient(ellipse at 20% 80%, rgba(242, 196, 92, 0.16), transparent 45%);
    color: var(--color-white);
  }
  .sp-panel--quote {
    background-color: var(--color-prussian-blue);
    background-image: radial-gradient(ellipse at 50% 50%, rgba(237, 167, 14, 0.12), transparent 55%);
    color: var(--color-white);
  }
  .sp-panel--warm {
    background: linear-gradient(135deg, var(--color-coral) 0%, var(--color-gold) 100%);
    color: var(--color-deep-navy);
  }
  .sp-panel--play {
    background-color: var(--color-cream-dark);
    background-image: radial-gradient(ellipse at 25% 25%, rgba(17, 56, 71, 0.10), transparent 50%);
    color: var(--color-ink);
  }

  .sp-panel--play {
    align-items: stretch;
    flex-direction: column;
    justify-content: flex-end;
    transform: none !important; /* footer moet full-width blijven en niet meeschalen met de panel-animatie */
  }

  .sp-panel--play .sp-inner {
    min-height: auto;
    flex: 1 1 auto;
    display: block;
    padding-top: clamp(var(--space-md), 4vw, var(--space-lg));
    padding-bottom: var(--space-md);
  }

  .sp-final-copy {
    max-width: 46rem;
  }
  .sp-final-copy a { color: var(--color-deep-gold); font-weight: 600; }

  .sp-panel--play .site-footer {
    width: 100%;
    margin: 0;
    padding: var(--space-lg) 0 var(--space-sm);
    border-radius: 0;
    flex: 0 0 auto;
  }

  .sp-panel--play .footer-grid {
    gap: var(--space-sm);
    align-items: start;
  }

  .sp-panel--play .site-footer h2 {
    margin-bottom: 0.45rem;
  }

  .sp-panel--play .site-footer p {
    margin-bottom: 0.45rem;
    font-size: 0.92rem;
    line-height: 1.45;
  }

  .sp-panel--play .footer-links li {
    margin-bottom: 0.15rem;
  }

  .sp-panel--play .footer-cta .btn {
    padding: 0.65rem 1rem;
  }

  .sp-panel--play .footer-cta p {
    display: none;
  }

  .sp-panel--play .logo-footer .logo-img {
    height: 1.85rem;
  }

  .sp-panel--play .footer-bottom {
    margin-top: 0.45rem;
    padding-top: 0.45rem;
    font-size: 0.78rem;
  }
  .sp-panel--micro {
    background-color: var(--color-prussian-blue);
    background-image:
      radial-gradient(ellipse at 82% 18%, rgba(242, 196, 92, 0.20), transparent 42%),
      linear-gradient(140deg, var(--color-prussian-blue), var(--color-regal-navy));
    color: var(--color-white);
  }

  /* Route/richting-lijn als subtiele betekenislaag */
  .sp-panel::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(90deg, transparent 0 49.6%, rgba(237, 167, 14, 0.22) 49.8% 50.2%, transparent 50.4% 100%);
    background-size: 200% 1px;
    background-position: 0 88%;
    background-repeat: no-repeat;
    opacity: 0.5;
    pointer-events: none;
    z-index: 1;
  }
  .sp-panel--hero::before { background-position: 0 92%; opacity: 0.7; }

  /* Typografie inside panels */
  .sp-eyebrow {
    display: inline-block;
    font-family: var(--font-display);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-gold);
    margin-bottom: var(--space-sm);
  }
  .sp-panel--cream .sp-eyebrow,
  .sp-panel--play .sp-eyebrow { color: var(--color-deep-gold); }

  .sp-panel h2 {
    font-family: var(--font-display);
    font-size: clamp(1.9rem, 4.2vw, 3rem);
    font-weight: 800;
    line-height: 1.08;
    margin: 0 0 var(--space-md);
    max-width: 22ch;
  }
  .sp-panel--hero h1 {
    font-family: var(--font-display);
    font-size: clamp(2.4rem, 6vw, 4rem);
    font-weight: 800;
    line-height: 1.04;
    margin: 0 0 var(--space-md);
    max-width: 18ch;
    color: var(--color-white);
  }
  .sp-panel p.sp-lead {
    font-size: clamp(1.05rem, 1.6vw, 1.3rem);
    line-height: 1.6;
    max-width: 46ch;
    margin: 0 0 var(--space-md);
  }
  .sp-panel--hero p,
  .sp-panel--navy p,
  .sp-panel--quote p,
  .sp-panel--micro p { color: rgba(246, 249, 249, 0.9); }
  .sp-panel--warm p { color: var(--color-deep-navy); }
  .sp-panel--cream p,
  .sp-panel--play p { color: var(--color-ink-soft); }

  .sp-actions { display: flex; flex-wrap: wrap; gap: var(--space-sm); margin-top: var(--space-md); }
  .sp-actions .btn { padding: 0.85rem 1.4rem; border-radius: var(--radius-md); font-weight: 600; }

  .sp-hero-pillars {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1px;
    margin-top: clamp(var(--space-md), 3vw, var(--space-lg));
    max-width: min(100%, 58rem);
    border: 1px solid rgba(246, 249, 249, 0.16);
    border-radius: var(--radius-lg);
    background: rgba(246, 249, 249, 0.14);
    overflow: hidden;
    box-shadow: var(--shadow-card);
  }

  .sp-hero-pillar {
    position: relative;
    padding: clamp(1rem, 2vw, var(--space-md));
    background: rgba(11, 42, 53, 0.72);
    backdrop-filter: blur(10px);
  }

  .sp-hero-pillar__num {
    display: inline-block;
    font-family: var(--font-display);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-gold);
    margin-bottom: 0.4rem;
  }

  .sp-hero-pillar h3 {
    color: var(--color-white);
    font-size: clamp(1.05rem, 1.4vw, 1.25rem);
    margin: 0 0 0.3rem;
  }

  .sp-hero-pillar p {
    color: rgba(246, 249, 249, 0.74);
    font-size: 0.94rem;
    line-height: 1.45;
    margin: 0;
  }

  /* Mini-interactie — slider */
  .sp-micro {
    width: min(100%, 40rem);
    margin-inline: auto;
    text-align: center;
  }
  .sp-micro .sp-eyebrow { color: var(--color-gold); }
  .sp-micro h2 { margin-inline: auto; max-width: 20ch; }
  .sp-micro > .sp-lead { margin-inline: auto; }

  .sp-slider-card {
    margin-top: var(--space-lg);
    padding: clamp(var(--space-md), 3vw, var(--space-lg));
    border: 1px solid rgba(246, 249, 249, 0.16);
    border-radius: var(--radius-xl);
    background:
      linear-gradient(180deg, rgba(246, 249, 249, 0.12), rgba(246, 249, 249, 0.06)),
      radial-gradient(ellipse at 84% 0%, rgba(242, 196, 92, 0.20), transparent 52%);
    box-shadow: var(--shadow-soft);
    text-align: left;
  }
  .sp-slider-card h3 {
    color: var(--color-white);
    font-size: 1.15rem;
    margin: 0 0 var(--space-md);
  }
  .sp-range-row {
    display: flex;
    justify-content: space-between;
    gap: var(--space-sm);
    margin-bottom: 0.6rem;
    font-family: var(--font-display);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(246, 249, 249, 0.7);
  }
  .sp-range {
    width: 100%;
    accent-color: var(--color-gold);
    cursor: pointer;
  }
  .sp-feedback {
    margin-top: var(--space-md);
    padding: var(--space-md);
    border-radius: var(--radius-lg);
    background: rgba(11, 42, 53, 0.55);
    border: 1px solid rgba(246, 249, 249, 0.12);
    color: rgba(246, 249, 249, 0.85);
    line-height: 1.5;
  }
  .sp-feedback strong {
    display: block;
    margin-bottom: 0.3rem;
    color: var(--color-gold);
    font-family: var(--font-display);
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  /* Diensten kaarten in navy paneel */
  .sp-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: var(--space-md); margin-top: var(--space-lg); }
  .sp-cards .card { background: var(--color-white); border-radius: var(--radius-lg); padding: var(--space-md); border: 1px solid var(--color-border); box-shadow: var(--shadow-card); }
  .sp-cards .card h3 { color: var(--color-ink); margin-bottom: var(--space-xs); }
  .sp-cards .card p { color: var(--color-ink-soft); font-size: 0.98rem; }
  .sp-cards .card a { color: var(--color-deep-gold); font-weight: 600; text-decoration-thickness: 1px; text-underline-offset: 3px; }
  .sp-card-icon { font-size: 1.6rem; display: block; margin-bottom: var(--space-xs); }

  /* Quote paneel */
  .sp-quote { max-width: 50ch; text-align: center; margin-inline: auto; }
  .sp-quote blockquote {
    font-family: var(--font-display);
    font-size: clamp(1.4rem, 3vw, 2.1rem);
    font-weight: 600;
    line-height: 1.3;
    margin: 0 0 var(--space-md);
    color: var(--color-white);
  }
  .sp-quote cite { font-style: normal; color: var(--color-gold); letter-spacing: 0.04em; }

  /* Scroll indicator + voortgangsrail (richting) */
  .sp-rail {
    position: fixed;
    top: 50%;
    right: clamp(0.75rem, 2vw, 1.5rem);
    transform: translateY(-50%);
    z-index: 50;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.05rem;
  }
  .sp-rail button {
    position: relative;
    width: 2.25rem;
    height: 1.85rem;
    border: 0;
    padding: 0;
    border-radius: var(--radius-pill);
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    outline: none;
  }

  .sp-rail button::after {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: rgba(246, 249, 249, 0.35);
    box-shadow: 0 0 0 0 rgba(242, 196, 92, 0);
    transition:
      background 0.32s cubic-bezier(0.22, 1, 0.36, 1),
      border-radius 0.32s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.32s cubic-bezier(0.22, 1, 0.36, 1),
      height 0.32s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .sp-rail button[aria-current="true"]::after {
    background: var(--color-gold);
    height: 22px;
    border-radius: var(--radius-pill);
    box-shadow: 0 0 0 5px rgba(242, 196, 92, 0.1);
  }

  .sp-rail button:hover::after,
  .sp-rail button:focus::after,
  .sp-rail button:focus-visible::after,
  .sp-rail button.is-label-visible::after {
    background: var(--color-gold);
    transform: scale(1.18);
    box-shadow: 0 0 0 8px rgba(242, 196, 92, 0.13);
  }

  .sp-rail-label {
    position: absolute;
    top: 50%;
    right: 1.65rem;
    max-width: min(18rem, calc(100vw - 5rem));
    padding: 0.48rem 0.72rem;
    border: 1px solid rgba(246, 249, 249, 0.18);
    border-radius: var(--radius-pill);
    background: rgba(11, 42, 53, 0.78);
    box-shadow: var(--shadow-card);
    backdrop-filter: blur(10px);
    color: var(--color-white);
    font-family: var(--font-display);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1.2;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transform: translate(0.6rem, -50%) scale(0.96);
    transition:
      opacity 0.24s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .sp-rail button:hover .sp-rail-label,
  .sp-rail button:focus .sp-rail-label,
  .sp-rail button:focus-visible .sp-rail-label,
  .sp-rail button.is-label-visible .sp-rail-label {
    opacity: 1;
    transform: translate(0, -50%) scale(1);
  }

  .sp-scrollhint {
    position: absolute;
    bottom: var(--space-md);
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    font-family: var(--font-display);
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(246, 249, 249, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    animation: sp-bob 2.4s ease-in-out infinite;
  }
  .sp-scrollhint::after {
    content: "";
    width: 1px; height: 28px;
    background: linear-gradient(180deg, rgba(246,249,249,0.7), transparent);
  }
  @keyframes sp-bob { 0%,100% { transform: translate(-50%, 0); } 50% { transform: translate(-50%, 6px); } }

  @media (max-width: 600px) {
    .sp-rail { display: none; }
    .sp-inner { padding-inline: var(--space-md); }
    .sp-hero-pillars { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .sp-hero-pillar { padding: 0.65rem; }
    .sp-hero-pillar__num { font-size: 0.58rem; letter-spacing: 0.08em; }
    .sp-hero-pillar h3 { font-size: 0.92rem; }
    .sp-hero-pillar p { font-size: 0.72rem; line-height: 1.28; }
  }

  /* Korte schermen / mobiel: zachter snappen, inhoud mag meegroeien (geen klemmende blokken) */
  @media (max-width: 599px), (max-height: 639px) {
    html:has(body.page-scroll-preview) { scroll-snap-type: y proximity; }
    .sp-panel {
      position: relative;
      height: auto;
      min-height: 100svh;
      scroll-snap-stop: normal;
    }
  }

  /* Reduced motion: geen transform/filter manipulatie, normale scroll */
  @media (prefers-reduced-motion: reduce) {
    html:has(body.page-scroll-preview) { scroll-behavior: auto; scroll-snap-type: none; }
    .sp-panel { position: relative; transform: none !important; filter: none !important; opacity: 1 !important; height: auto; min-height: 100svh; scroll-snap-align: none; }
    .sp-scrollhint, .sp-panel::before { animation: none; }
  }
</style>

<aside class="sp-rail" aria-label="Paneel-navigatie"></aside>

<div class="sp-stack">

  <!-- 1. Hero -->
  <section class="sp-panel sp-panel--hero" data-sp="0">
    <div class="sp-inner">
      <p class="sp-eyebrow">Challenge · activate · motivate</p>
      <h1>Activeer je team en bereid ze voor op de toekomst.</h1>
      <p class="sp-lead">
        Wij bereiden teams voor op de werkelijkheid van morgen door ze nu al ervaringen te bieden die ertoe doen.
        Via storytelling en MicroGames zetten we medewerkers in realistische situaties waar ze moeten kiezen, handelen en leren.
      </p>
      <div class="sp-actions">
        <a class="btn btn-primary" href="{{ '/contact/' | relative_url }}">Start met een GameStorm</a>
        <a class="btn btn-secondary" href="{{ '/diensten/' | relative_url }}">Onze diensten</a>
      </div>
      <div class="sp-hero-pillars" aria-label="Challenge, activate, motivate">
        <div class="sp-hero-pillar">
          <span class="sp-hero-pillar__num">01 — Challenge</span>
          <h3>Uitdagen</h3>
          <p>Realistische situaties waarin medewerkers moeten kiezen en handelen.</p>
        </div>
        <div class="sp-hero-pillar">
          <span class="sp-hero-pillar__num">02 — Activate</span>
          <h3>Activeren</h3>
          <p>MicroGames die kennis activeren en denkkracht aanspreken.</p>
        </div>
        <div class="sp-hero-pillar">
          <span class="sp-hero-pillar__num">03 — Motivate</span>
          <h3>Motiveren</h3>
          <p>Sterker en zelfverzekerder presteren wanneer het er écht op aankomt.</p>
        </div>
      </div>
    </div>
    <div class="sp-scrollhint">Scroll</div>
  </section>

  <!-- 2. Online focus -->
  <section class="sp-panel sp-panel--cream" data-sp="1">
    <div class="sp-inner">
      <span class="sp-eyebrow">Online focus</span>
      <h2>Interactieve stories die teams uitdagen, activeren en motiveren</h2>
      <p class="sp-lead">
        Bij Preludens geloven we dat leren impactvol én natuurlijk moet zijn. Daarom ontwerpen we interactieve leerervaringen die mensen écht raken: relevant voor hun werk, visueel opgebouwd en gericht op gedragsverandering.
      </p>
      <p class="sp-lead">
        Storytelling zorgt voor context en herkenning, MicroGames motiveren en versterken retentie, en data helpt om gericht te verbeteren. Zo wordt leren geen verplichting, maar een inspirerende reis.
      </p>
    </div>
  </section>

  <!-- 3. Diensten -->
  <section class="sp-panel sp-panel--navy" data-sp="2">
    <div class="sp-inner">
      <span class="sp-eyebrow">Wat we doen</span>
      <h2>Leerervaringen met verhaal, spel en impact</h2>
      <div class="sp-cards">
        <article class="card card--coral">
          <span class="sp-card-icon" aria-hidden="true">📖</span>
          <h3>MicroGame Stories</h3>
          <p>Korte, verhalende online trainingen waarin medewerkers oefenen in realistische situaties — verrijkt met stripverhalen en krachtige MicroGames die kennis activeren en motivatie vergroten.</p>
          <a href="{{ '/diensten/#microgame-stories' | relative_url }}">Meer over MicroGame Stories</a>
        </article>
        <article class="card card--gold">
          <span class="sp-card-icon" aria-hidden="true">⚖️</span>
          <h3>Dilemma Storytelling</h3>
          <p>Realistische scenario’s waarin lastige keuzes en directe gevolgen besluitvaardigheid en inzicht versterken — zonder één juist antwoord.</p>
          <a href="{{ '/diensten/#dilemma-storytelling' | relative_url }}">Meer over Dilemma Stories</a>
        </article>
        <article class="card card--mint">
          <span class="sp-card-icon" aria-hidden="true">🎯</span>
          <h3>Game Thinking</h3>
          <p>Complexe vraagstukken oplossen door processen te bekijken alsof het een game is — met workshops en concrete blauwdrukken voor gedrag en leerdoelen.</p>
          <a href="{{ '/diensten/#game-thinking' | relative_url }}">Meer over Game Thinking</a>
        </article>
      </div>
    </div>
  </section>

  <!-- 4. Quote -->
  <section class="sp-panel sp-panel--quote" data-sp="3">
    <div class="sp-inner">
      <figure class="sp-quote">
        <blockquote>
          Play is older than culture, for culture, however inadequately defined, always presupposes human society, and animals have not waited for man to teach them their playing.
        </blockquote>
        <cite>Johan Huizinga — Homo Ludens (1938)</cite>
      </figure>
    </div>
  </section>

  <!-- 5. CTA -->
  <section class="sp-panel sp-panel--warm" data-sp="4">
    <div class="sp-inner">
      <h2>Neem morgen de eerste stap</h2>
      <p class="sp-lead">
        Start met een GameStorm: een creatieve workshop van een dagdeel waarin we samen jouw verhaal vormgeven. Met de structuur van de Hero’s Journey ontwerpen we één of twee krachtige verhaallijnen en koppelen daar 4 tot 5 leerdoelen aan.
      </p>
      <div class="sp-actions">
        <a class="btn btn-primary" href="{{ '/contact/' | relative_url }}">Plan een GameStorm</a>
        <a class="btn btn-secondary" href="{{ '/play/' | relative_url }}">Ontdek Play</a>
      </div>
    </div>
  </section>

  <!-- 6. Mini-interactie — slider -->
  <section class="sp-panel sp-panel--micro" data-sp="5">
    <div class="sp-inner">
      <div class="sp-micro">
        <span class="sp-eyebrow">Ervaar het zelf</span>
        <h2>Wat weegt zwaarder?</h2>
        <p class="sp-lead">
          Schuif tussen tempo en veiligheid en zie direct hoe de feedback meebeweegt — precies wat een MicroGame doet: kiezen, voelen, leren.
        </p>

        <div class="sp-slider-card">
          <h3>Tempo of veiligheid?</h3>
          <div class="sp-range-row"><span>Tempo</span><span>Veiligheid</span></div>
          <input id="spRange" class="sp-range" type="range" min="0" max="100" value="68" aria-label="Balans tussen tempo en veiligheid" />
          <div class="sp-feedback" id="spRangeFeedback" aria-live="polite">
            <strong>Feedback</strong>
            <span>Je kiest voor controle en maakt professioneel gedrag zichtbaar. Dat kost tijd, maar verhoogt veiligheid en eigenaarschap.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. Play -->
  <section class="sp-panel sp-panel--play" data-sp="6">
    <div class="sp-inner">
      <div class="sp-final-copy">
        <span class="sp-eyebrow">What we do</span>
        <h2>In de wereld van Play</h2>
        <p class="sp-lead">
          We bereiden teams voor op de toekomst door kennis en besluitvorming te laten ervaren nog vóór het een probleem wordt.
        </p>
        <p class="sp-lead">
          In <em>Homo Ludens</em> beschrijft Huizinga hoe spel een veilige, afgescheiden ruimte creëert — de magische cirkel — waarin fouten maken mag en nieuwsgierigheid wordt geactiveerd. Dat is precies wat Preludens toepast.
        </p>
        <p><a href="{{ '/play/' | relative_url }}">Ontdek onze visie op Play →</a></p>
      </div>
    </div>
    {% include footer.html %}
  </section>

</div>

<script>
(function () {
  "use strict";
  var panels = Array.prototype.slice.call(document.querySelectorAll(".sp-panel"));
  if (!panels.length) return;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var rail = document.querySelector(".sp-rail");

  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
  function desktopMode() { return window.innerWidth >= 600 && window.innerHeight >= 640; }

  var headerEl = document.querySelector(".site-header");
  function measureHeader() { return headerEl ? headerEl.getBoundingClientRect().height : 0; }
  var headerHeight = measureHeader();
  window.addEventListener("resize", function () { headerHeight = measureHeader(); });

  var microRange = document.getElementById("spRange");
  var microFeedback = document.getElementById("spRangeFeedback");
  if (microRange && microFeedback) {
    var microText = microFeedback.querySelector("span");
    microRange.addEventListener("input", function () {
      var value = Number(microRange.value);
      var text = "Je kiest voor controle en maakt professioneel gedrag zichtbaar. Dat kost tijd, maar verhoogt veiligheid en eigenaarschap.";
      if (value < 35) text = "Je kiest sterk voor tempo. Dat kan efficiënt lijken, maar maakt het risico afhankelijk van aannames in plaats van controle.";
      else if (value > 82) text = "Je kiest zeer sterk voor veiligheid. Goed, maar let op: professioneel handelen betekent ook helder communiceren waarom vertraging nodig is.";
      if (microText) microText.textContent = text;
    });
  }

  // Programma-gestuurde snap: één gebaar = automatisch naar de volgende view
  var lock = false;
  var lockTimer = null;
  var current = 0;

  function goTo(i) {
    i = clamp(i, 0, panels.length - 1);
    if (i === current || lock) return;
    current = i;                       // direct updaten, anders loopt current achter op de smooth scroll
    lock = true;
    scrollToPanel(i);
    clearTimeout(lockTimer);
    lockTimer = setTimeout(function () { lock = false; }, SCROLL_DURATION);
  }

  // Eigen rAF-geanimeerde scroll (easeOutCubic) met vaste duur — robuuster dan
  // browser-smooth-scroll, dat met snap-on animaties kan negeren.
  var SCROLL_DURATION = 720;
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  // Layout-positie (offsetTop-keten) — ongevoelig voor transforms (scale) op de panelen.
  function absOffsetTop(el) {
    var y = 0;
    while (el) { y += el.offsetTop; el = el.offsetParent; }
    return y;
  }
  function panelTarget(i) {
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (i === panels.length - 1) return maxScroll;
    // Land precies op de paneeltop (rect.top = 0) zodat de fade-in volledig op
    // 100% opacity uitkomt. De inhoud is verticaal gecentreerd en het vaste menu
    // overlapt enkel de lege bovenruimte, dus er valt niets onder de header weg.
    return clamp(absOffsetTop(panels[i]), 0, maxScroll);
  }
  function scrollToPanel(i) {
    var target = panelTarget(i);
    if (reduced) { window.scrollTo(0, target); return; }
    var startY = window.scrollY;
    if (Math.abs(target - startY) < 1) { window.scrollTo(0, target); return; }
    var start = performance.now();
    function frame(now) {
      var t = Math.min((now - start) / SCROLL_DURATION, 1);
      window.scrollTo(0, startY + (target - startY) * easeOutCubic(t));
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function panelTitle(panel, index) {
    var explicit = panel.getAttribute("data-title");
    var heading = panel.querySelector("h1, h2");
    var quote = panel.querySelector("blockquote");
    if (explicit) return explicit;
    if (heading) return heading.textContent.trim();
    if (quote) return "Homo Ludens";
    return "Paneel " + (index + 1);
  }

  // Voortgangsrail opbouwen
  if (rail) {
    panels.forEach(function (p, i) {
      var b = document.createElement("button");
      b.type = "button";
      var title = panelTitle(p, i);
      b.setAttribute("aria-label", "Ga naar " + title);
      b.setAttribute("title", title);
      var label = document.createElement("span");
      label.className = "sp-rail-label";
      label.textContent = title;
      b.appendChild(label);
      b.addEventListener("pointerenter", function () { b.classList.add("is-label-visible"); });
      b.addEventListener("pointerleave", function () { b.classList.remove("is-label-visible"); });
      b.addEventListener("focusin", function () { b.classList.add("is-label-visible"); });
      b.addEventListener("focusout", function () { b.classList.remove("is-label-visible"); });
      b.addEventListener("click", function () { goTo(i); });
      rail.appendChild(b);
    });
  }
  var railButtons = rail ? Array.prototype.slice.call(rail.querySelectorAll("button")) : [];

  if (reduced) {
    panels.forEach(function (p) { p.style.opacity = "1"; });
    if (railButtons.length) railButtons[0].setAttribute("aria-current", "true");
    return;
  }

  // Per-paneel animatiestatus (exponential smoothing voor buttery transitions)
  var state = panels.map(function () {
    return { opacity: 1, ty: 0, scale: 1, blur: 0, bright: 1 };
  });

  function compute() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var sy = window.scrollY;
    var active = 0;
    var bestDist = Infinity;
    panels.forEach(function (p, i) {
      var rect = p.getBoundingClientRect();
      var reveal = clamp((vh - rect.top) / vh, 0, 1);
      var cover = 0;
      if (i < panels.length - 1) {
        var next = panels[i + 1].getBoundingClientRect();
        cover = clamp((vh - next.top) / vh, 0, 1);
      }
      p._t = {
        opacity: reveal * (1 - cover),
        ty: (1 - reveal) * 70,
        scale: (0.9 + 0.1 * reveal) * (1 - cover * 0.07),
        blur: cover * 12,
        bright: 1 - cover * 0.4
      };
      // Actief paneel = degene waarvan het scroll-doel (offsetTop-keten) dichtst bij scrollY zit
      var dist = Math.abs(sy - panelTarget(i));
      if (dist < bestDist) { bestDist = dist; active = i; }
    });
    return active;
  }

  // Initiele target direct overnemen (geen flash bij laden)
  compute();
  panels.forEach(function (p, i) { state[i] = Object.assign({}, p._t); });
  if (railButtons.length) railButtons[0].setAttribute("aria-current", "true");

  var raf = null;
  var last = performance.now();
  var lastActive = 0;

  function apply(p, s) {
    p.style.opacity = s.opacity.toFixed(4);
    p.style.transform = "translate3d(0," + s.ty.toFixed(2) + "px,0) scale(" + s.scale.toFixed(4) + ")";
    p.style.filter = "blur(" + s.blur.toFixed(2) + "px) brightness(" + s.bright.toFixed(3) + ")";
  }

  function tick(now) {
    var dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    var k = 1 - Math.exp(-dt / 0.085); // frame-rate onafhankelijke smoothing
    var active = compute();
    panels.forEach(function (p, i) {
      var t = p._t, s = state[i];
      s.opacity += (t.opacity - s.opacity) * k;
      s.ty += (t.ty - s.ty) * k;
      s.scale += (t.scale - s.scale) * k;
      s.blur += (t.blur - s.blur) * k;
      s.bright += (t.bright - s.bright) * k;
      apply(p, s);
    });
    if (active !== lastActive) {
      lastActive = active;
      railButtons.forEach(function (b, i) {
        if (i === active) b.setAttribute("aria-current", "true");
        else b.removeAttribute("aria-current");
      });
    }
    raf = requestAnimationFrame(tick);
  }

  function start() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); } }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop(); else start();
  });

  // === Input → automatisch door naar de volgende view (fullpage-style) ===
  // Wheel: elk scrollgebaar advanced precies één blok (desktop). Native scroll wordt
  // overgenomen zodat je nooit "tussen twee blokken" blijft hangen.
  window.addEventListener("wheel", function (e) {
    if (!desktopMode()) return;
    e.preventDefault();
    if (lock) return;
    if (Math.abs(e.deltaY) < 4) return;
    goTo(current + (e.deltaY > 0 ? 1 : -1));
  }, { passive: false });

  // Toetsenbord: pijltjes, PageUp/Down, Space, Home/End
  window.addEventListener("keydown", function (e) {
    if (!desktopMode()) return;
    if (e.target && e.target.closest("button, a, input, textarea, select")) return;
    var k = e.key;
    if (k === "ArrowDown" || k === "PageDown" || k === " ") { e.preventDefault(); goTo(current + 1); }
    else if (k === "ArrowUp" || k === "PageUp") { e.preventDefault(); goTo(current - 1); }
    else if (k === "Home") { e.preventDefault(); goTo(0); }
    else if (k === "End") { e.preventDefault(); goTo(panels.length - 1); }
  });

  // Touch: swipe up/down → volgende/vorige blok
  var touchStartY = 0;
  window.addEventListener("touchstart", function (e) { touchStartY = e.touches[0].clientY; }, { passive: true });
  window.addEventListener("touchend", function (e) {
    if (!desktopMode() || lock) return;
    var dy = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 35) goTo(current + (dy > 0 ? 1 : -1));
  }, { passive: true });

  start();
})();
</script>
