---
layout: default
lang: en
title: Homepage concept
description: We strengthen knowledge retention in organisations with storytelling and MicroGames.
permalink: /homepage-concept/
permalink_lang:
  nl: /homepage-concept/
permalink_lang:
  en: /homepage-concept/
body_class: page-scroll-preview
sitemap: false
robots: noindex, nofollow
---

<style>
  /* ===== Scroll homepage — volledig scherm, vloeiende fade + snap ===== */
  html:has(body.page-scroll-preview) {
    scroll-behavior: auto;            /* easing komt uit de eigen rAF-animatie */
    scroll-snap-type: none;
    overflow-x: clip;                /* geen nieuwe scroll-container (geen sticky/snap-conflict) */
  }

  body.page-scroll-preview {
    background: #fff;
  }
  body.page-scroll-preview > .site-footer { display: none !important; }
  body.page-scroll-preview main { display: block; padding: 0; }
  body.page-scroll-preview #main { overflow: visible; }

  .sp-stack {
    position: relative;
  }

  .sp-panel {
    position: relative;
    height: auto;
    min-height: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
  }

  .sp-inner {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: var(--max-width);
    margin-inline: auto;
    /* B1: iets meer verticale ademruimte op hoge viewports; compact op klein */
    padding: clamp(2.25rem, 7vh, 6rem) var(--space-lg);
  }

  /* Achtergrondlagen per paneel */
  .sp-panel--hero {
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    height: auto;
    min-height: 0;
    overflow: visible;
    will-change: auto;
    transform: none;
    filter: none;
    padding-top: 50px;
    background: #fff;
    color: var(--color-ink);
  }

  .sp-panel--hero .sp-inner {
    flex: 0 1 auto;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 28rem);
    gap: clamp(1.5rem, 4vw, 3.5rem);
    align-items: center;
    width: min(100% - 2rem, var(--max-width));
    padding: 0;
  }
  .sp-hero-copy { justify-self: start; }
  .sp-panel--cream {
    --sp-jump: 50px;
    --sp-run: 59.6px; /* 40° met de horizontaal: tan(40°) ≈ 0.839, run = 50 / 0.839 */
    background-color: var(--color-cream);
    background-image: radial-gradient(ellipse at 80% 20%, rgba(237, 167, 14, 0.10), transparent 45%);
    color: var(--color-ink);
    /* Sprong boven: rechts, 40° omhoog. Sprong onder: dezelfde hoek, verder naar links. */
    clip-path: polygon(
      0 var(--sp-jump),
      calc(68% - var(--sp-run)) var(--sp-jump),
      68% 0,
      100% 0,
      100% calc(100% - var(--sp-jump)),
      50% calc(100% - var(--sp-jump)),
      calc(50% - var(--sp-run)) 100%,
      0 100%
    );
  }
  .sp-panel--cream .sp-inner {
    padding-top: calc(var(--sp-jump) + clamp(1.25rem, 4vh, 2.75rem));
    padding-bottom: calc(40px + var(--sp-jump));
  }
  .sp-focus-copy {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(1.5rem, 4vw, 3.5rem);
    align-items: start;
  }
  .sp-focus-copy p {
    margin: 0;
    max-width: none;
    text-align: justify;
    hyphens: auto;
  }
  .sp-focus-clients {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.75rem 2.5rem;
    margin: clamp(2.75rem, 7vh, 4.5rem) 0 0;
    padding: 0;
  }
  .sp-focus-clients li {
    flex: 1 1 8.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
  }
  .sp-focus-clients img {
    display: block;
    width: 100%;
    max-width: 11.5rem;
    height: auto;
    object-fit: contain;
  }
  .sp-panel--navy {
    background: #fff;
    color: var(--color-ink);
  }
  .sp-panel--navy::after { content: none; }
  .sp-panel--navy h2 { max-width: none; color: var(--color-ink); }
  .sp-panel--navy p.sp-lead { max-width: none; color: var(--color-ink-soft); }
  .sp-tracks {
    display: grid;
    grid-template-columns: 1fr;
    gap: 120px;
    margin-top: clamp(var(--space-lg), 5vh, 3.5rem);
  }
  @media (min-width: 800px) {
    .sp-tracks { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .sp-track:nth-child(odd) { --sp-shift-x: 40px; }
    .sp-track:nth-child(even) { --sp-shift-x: -40px; }
    .sp-track:nth-child(n + 3) { --sp-shift-y: -80px; }
  }
  .sp-track {
    --sp-shift-x: 0px;
    --sp-shift-y: 0px;
    position: relative;
    display: flex;
    aspect-ratio: 1 / 1;
    background: var(--color-mist-blue);
    transform: translate(var(--sp-shift-x), var(--sp-shift-y));
    border-radius: var(--radius-sm);
    overflow: hidden;
    box-shadow: 0 8px 18px rgba(11, 42, 53, 0.08);
    transition: transform var(--transition), box-shadow var(--transition);
  }
  .sp-track::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background: transparent;
    pointer-events: none;
    transition: background var(--transition);
  }
  .sp-track:hover,
  .sp-track:focus-within {
    transform: translate(var(--sp-shift-x), calc(var(--sp-shift-y) - 8px));
    box-shadow: 0 14px 24px rgba(11, 42, 53, 0.12);
  }
  .sp-track:hover::after,
  .sp-track:focus-within::after {
    background: rgba(11, 42, 53, 0.14);
  }
  .sp-track__link {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    height: 100%;
    text-align: center;
    text-decoration: none;
    color: var(--color-ink);
  }
  .sp-track__copy {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 auto;
    padding: 1.5rem 1.35rem 0;
  }
  .sp-track__link:hover,
  .sp-track__link:focus-visible { color: var(--color-ink); }
  .sp-track__link:focus-visible {
    outline: 3px solid var(--color-coral);
    outline-offset: -3px;
  }
  .sp-track h3 {
    margin: 0;
    max-width: 18em;
    font-family: var(--font-display);
    font-size: clamp(1.45rem, 2.2vw, 2rem);
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -0.02em;
    text-transform: none;
    color: var(--color-ink);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .sp-track p {
    margin: 0.7rem 0 0;
    max-width: 34em;
    color: var(--color-ink-soft);
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.45;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .sp-track__more {
    display: inline-flex;
    align-items: center;
    margin-top: 1.1rem;
    padding: 0.55rem 1.15rem;
    border: 0;
    border-radius: var(--radius-pill);
    background: var(--color-brand-navy);
    color: #fff;
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.2;
  }
  .sp-track__link:hover .sp-track__more,
  .sp-track__link:focus-visible .sp-track__more {
    background: var(--color-deep-navy);
    color: #fff;
  }
  .sp-track__stage {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex: 1 1 auto;
    min-height: 42%;
    margin-top: 0.75rem;
  }
  .sp-device {
    position: relative;
    height: 72%;
    width: fit-content;
    max-width: 78%;
  }
  .sp-device__frame {
    position: relative;
    z-index: 1;
    display: block;
    height: 100%;
    width: auto;
    max-width: 100%;
  }
  .sp-device__screen {
    position: absolute;
    z-index: 0;
    object-fit: cover;
  }
  .sp-device--hands .sp-device__screen {
    left: 17.3%;
    top: 14.1%;
    width: 65.4%;
    height: 60.9%;
  }
  .sp-device--tablet .sp-device__screen {
    left: 17.7%;
    top: 12.8%;
    width: 65%;
    height: 57.5%;
  }
  .sp-device--laptop-dark .sp-device__screen {
    left: 16.5%;
    top: 10%;
    width: 67%;
    height: 57.1%;
  }
  .sp-device--laptop-light .sp-device__screen {
    left: 16.7%;
    top: 10.3%;
    width: 66.6%;
    height: 56.5%;
  }
  .sp-panel--quote {
    background-color: var(--color-prussian-blue);
    background-image: radial-gradient(ellipse at 50% 50%, rgba(237, 167, 14, 0.12), transparent 55%);
    color: var(--color-white);
  }
  .sp-panel--warm {
    --sp-jump: 50px;
    --sp-run: 59.6px;
    background: linear-gradient(135deg, var(--color-coral) 0%, var(--color-gold) 100%);
    color: var(--color-deep-navy);
    clip-path: polygon(
      0 var(--sp-jump),
      calc(32% - var(--sp-run)) var(--sp-jump),
      32% 0,
      100% 0,
      100% calc(100% - var(--sp-jump)),
      68% calc(100% - var(--sp-jump)),
      calc(68% - var(--sp-run)) 100%,
      0 100%
    );
  }
  .sp-panel--warm .sp-inner {
    padding-top: calc(var(--sp-jump) + clamp(1.25rem, 4vh, 2.75rem));
    padding-bottom: calc(var(--sp-jump) + clamp(2.25rem, 7vh, 4rem));
  }
  .sp-panel--warm::after { content: none; }
  .sp-warm-copy {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(1.5rem, 4vw, 3.5rem);
    align-items: start;
  }
  .sp-warm-copy p.sp-lead {
    margin: 0;
    max-width: none;
    text-align: justify;
    hyphens: auto;
  }
  .sp-panel--warm::after { content: none; }
  .sp-panel--verhalen {
    background-color: var(--color-prussian-blue);
    background-image:
      radial-gradient(ellipse at 18% 22%, rgba(242, 196, 92, 0.16), transparent 46%),
      linear-gradient(160deg, var(--color-prussian-blue), var(--color-regal-navy));
    color: var(--color-white);
  }
  .sp-panel--team {
    background-color: var(--color-regal-navy);
    background-image:
      radial-gradient(ellipse at 78% 78%, rgba(45, 143, 158, 0.18), transparent 46%),
      linear-gradient(150deg, var(--color-regal-navy), var(--color-prussian-blue));
    color: var(--color-white);
  }

  .sp-final-copy {
    max-width: 46rem;
  }
  .sp-final-copy a { color: var(--color-harbor-teal); font-weight: 600; }
  .sp-panel--team a { color: var(--color-gold); font-weight: 600; }

  /* ===== Footer-reveal =====
     De footer staat als los blok ná de laatste (sticky) slide. Bij doorscrollen
     schuift hij over het onderste deel van de slide heen (hogere z-index), zodat
     de slide zelf full-view blijft en er nog een gedeelte zichtbaar blijft. */
  .sp-footer-reveal {
    position: relative;
    z-index: 10;
  }

  .sp-footer-reveal .site-footer {
    width: 100%;
    margin: 0;
    padding: var(--space-lg) 0 var(--space-sm);
    border-radius: 0;
  }

  .sp-footer-reveal .footer-grid {
    gap: var(--space-sm);
    align-items: start;
  }

  .sp-footer-reveal .site-footer p {
    margin-bottom: 0.45rem;
    font-size: 0.92rem;
    line-height: 1.45;
  }

  .sp-footer-reveal .footer-menu ul {
    gap: 0.2rem;
    font-size: 0.8rem;
  }

  .sp-footer-reveal .logo-footer .logo-img {
    height: 2.75rem;
  }

  .sp-footer-reveal .footer-bottom {
    margin-top: 0.45rem;
    padding-top: 0.45rem;
    font-size: 0.78rem;
  }

  /* ===== Achtergrondlaag per slide — abstracte LinePlay-stijl =====
     Eén rustige gouden koerslijn in de rechterderde, met twee subtiele parallelle
     metgezellen (dotted, geen kruisingen) en een handvol bewuste waypoints. De lijn komt
     per slide op dezelfde x binnen/uit als de buurslide, zodat de route van slide naar
     slide doorloopt. Kleuren passen per paneel. Ligt achter de inhoud (z-index 0). */
  .sp-panel--cream::after,
  .sp-panel--navy::after,
  .sp-panel--verhalen::after,
  .sp-panel--testimonial::after,
  .sp-panel--team::after,
  .sp-panel--quote::after,
  .sp-panel--warm::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: none;
  }

  .sp-panel--cream::after { background-image: url("{{ '/assets/images/panels/online-focus.svg' | relative_url }}"); }
  .sp-panel--navy::after  { background-image: url("{{ '/assets/images/panels/diensten.svg' | relative_url }}"); }
  .sp-panel--verhalen::after { background-image: url("{{ '/assets/images/panels/verhalen.svg' | relative_url }}"); }
  .sp-panel--testimonial::after { background-image: url("{{ '/assets/images/panels/testimonial.svg' | relative_url }}"); }
  .sp-panel--team::after  { background-image: url("{{ '/assets/images/panels/team.svg' | relative_url }}"); }
  .sp-panel--quote::after { background-image: url("{{ '/assets/images/panels/quote.svg' | relative_url }}"); }
  .sp-panel--warm::after  { content: none; background-image: none; }

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
  .sp-panel h3 {
    font-family: var(--font-display);
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 1.25;
  }
  .sp-track h3 {
    font-size: clamp(1.45rem, 2.2vw, 2rem);
    font-weight: 600;
    letter-spacing: -0.02em;
    text-transform: none;
    line-height: 1.15;
  }
  .sp-panel--cream .sp-eyebrow { color: var(--color-harbor-teal); }

  .sp-panel h2 {
    font-family: var(--font-display);
    font-size: clamp(1.9rem, 3.8vw, 3.1rem);
    font-weight: 800;
    line-height: 1.08;
    margin: 0 0 clamp(var(--space-md), 2.5vh, var(--space-lg));
    max-width: 22ch;
    color: inherit;
    letter-spacing: 0.015em;
  }
  .sp-panel--cream h2 { max-width: none; text-align: center; }
  .sp-panel h2 .hl,
  .sp-panel--hero h1 .hl { color: var(--color-preludens-gold); }
  .sp-panel--hero h1 {
    font-family: var(--font-display);
    font-size: clamp(2.35rem, 5vw, 3.75rem);
    font-weight: 800;
    line-height: 1.04;
    margin: 0 0 clamp(var(--space-md), 2.5vh, var(--space-lg));
    max-width: none;
    color: var(--color-ink);
    letter-spacing: 0.015em;
  }
  .sp-panel--hero h1 .hl { color: var(--color-preludens-gold); }
  .sp-nowrap { white-space: nowrap; }
  .sp-panel p.sp-lead {
    font-size: 1.0625rem;
    line-height: 1.65;
    max-width: 46ch;
    margin: 0 0 clamp(var(--space-sm), 2vh, var(--space-md));
  }
  .sp-panel--navy h2,
  .sp-panel--navy p.sp-lead { max-width: none; }
  .sp-warm-copy p.sp-lead {
    max-width: none;
    text-align: justify;
    hyphens: auto;
  }
  .sp-panel--hero p { color: var(--color-ink-soft); }
  .sp-panel--navy p,
  .sp-panel--verhalen p,
  .sp-panel--team p,
  .sp-panel--quote p { color: rgba(246, 249, 249, 0.9); }
  .sp-panel--navy p,
  .sp-panel--navy h2,
  .sp-panel--navy h3 { color: var(--color-ink); }
  .sp-panel--navy .sp-lead,
  .sp-panel--navy .sp-track p { color: var(--color-ink-soft); }
  .sp-panel--navy::after { content: none; }
  .sp-panel--warm p { color: var(--color-deep-navy); }
  .sp-panel--cream p { color: var(--color-ink-soft); }

  body.page-scroll-preview .site-nav ul a,
  body.page-scroll-preview .lang-switch__option { color: var(--color-deep-navy); }
  body.page-scroll-preview .site-nav ul a:hover,
  body.page-scroll-preview .site-nav ul a[aria-current="page"] { color: var(--color-preludens-gold); }
  body.page-scroll-preview .nav-toggle-bar { background: var(--color-deep-navy); }

  .sp-actions { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-sm); margin-top: clamp(var(--space-md), 3vh, var(--space-lg)); }
  .sp-actions .btn { padding: 0.85rem 1.4rem; font-weight: 600; }
  .sp-hero-cta {
    display: inline-flex;
    padding: 3px;
    background: #fff;
    clip-path: url(#sp-btn-clip);
    filter: drop-shadow(3px 4px 4px rgba(17, 56, 71, 0.24));
    transition: filter var(--transition);
  }
  .sp-hero-cta:hover {
    background: #fff;
    filter: drop-shadow(4px 5px 4px rgba(17, 56, 71, 0.3));
  }
  .sp-panel--hero .btn-primary {
    background: var(--color-preludens-gold);
    color: var(--color-deep-navy) !important;
    font-size: 0.95rem;
    border: none;
    border-radius: 0;
    clip-path: none;
    overflow: visible;
    box-shadow: none;
    filter: none;
  }
  .sp-panel--hero .btn-primary::after { content: none; }
  .sp-panel--hero .btn-primary:hover,
  .sp-hero-cta:hover .btn-primary {
    background: var(--color-deep-gold);
    color: var(--color-deep-navy) !important;
    border: none;
    filter: none;
  }

  /* Geruststelling onder de CTA (risk reversal) */
  .sp-reassure {
    margin-top: var(--space-sm);
    font-family: var(--font-display);
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--color-deep-navy);
    opacity: 0.8;
  }

  /* Opdrachtgevers — gelijke pill-cards, wrappend grid, geen lateraal scrollen */
  .sp-clients {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-sm);
    padding: 0;
    margin: clamp(var(--space-md), 3vh, var(--space-lg)) 0 0;
    max-width: 42rem;
    justify-content: center;
  }
  .sp-clients li {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 0;
    width: 100%;
    height: 4rem;
    min-height: 4rem;
    font-family: var(--font-display);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    line-height: 1.15;
    text-align: center;
    color: var(--color-cloud-white);
    padding: 0.35rem 0.6rem;
    border: 1px solid rgba(246, 249, 249, 0.22);
    border-radius: var(--radius-pill);
    background: rgba(246, 249, 249, 0.06);
    overflow: hidden;
  }
  .sp-clients__logo {
    display: block;
    max-width: 78%;
    max-height: 1.7rem;
    width: auto;
    height: auto;
    object-fit: contain;
    /* Monochroom / lichte tint op donkere panel-achtergrond */
    filter: grayscale(1) brightness(2.2) contrast(0.85);
    opacity: 0.9;
  }
  @media (max-width: 600px) {
    .sp-clients {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      max-width: none;
    }
    .sp-clients li {
      height: 3.75rem;
      min-height: 3.75rem;
      font-size: 0.68rem;
    }
  }

  /* Warm paneel CTA: donkerblauw + wit (consistent met hero-banner CTA's).
     Verberg decoratieve .btn-primary::after-boog (streep-artefact). */
  .sp-panel--warm .sp-actions .btn-primary {
    background: var(--color-brand-navy);
    color: var(--color-white) !important;
    border-color: rgba(246, 249, 249, 0.42);
    box-shadow: var(--shadow-soft);
  }
  .sp-panel--warm .sp-actions .btn-primary:hover {
    background: var(--color-harbor-teal);
    color: var(--color-white) !important;
    border-color: rgba(242, 196, 92, 0.45);
    box-shadow: var(--shadow-soft);
  }
  .sp-panel--warm .sp-actions .btn-primary::after {
    content: none;
  }

  .sp-hero-play {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    color: var(--color-ink);
    font-family: var(--font-display);
    font-weight: 600;
    text-decoration: none;
  }
  .sp-hero-play__icon {
    display: grid;
    place-items: center;
    width: 2.35rem;
    height: 2.35rem;
    border: 1.5px solid var(--color-border);
    border-radius: 50%;
    color: var(--color-ink);
  }
  .sp-hero-play:hover { color: var(--color-ink-gold); }
  .sp-hero-play:hover .sp-hero-play__icon { border-color: var(--color-preludens-gold); }

  .sp-hero-clip-def { position: absolute; width: 0; height: 0; }
  .sp-hero-scene {
    margin: 0;
    justify-self: end;
    width: 100%;
  }
  .sp-hero-shadow {
    filter: drop-shadow(3px 4px 4px rgba(17, 56, 71, 0.24));
  }
  .sp-hero-frame {
    position: relative;
    z-index: 0;
    aspect-ratio: 5 / 4;
    padding: 5px;
    background: #fff;
    clip-path: url(#sp-hero-clip);
    filter: none;
  }
  .sp-hero-frame::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: #fff;
    clip-path: url(#sp-hero-clip);
    pointer-events: none;
  }
  .sp-hero-frame img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    clip-path: url(#sp-hero-clip);
    transition: filter 0.35s ease;
  }
  .sp-hero-scene__link {
    display: block;
    color: inherit;
    text-decoration: none;
    transition: transform 0.35s ease;
  }
  .sp-hero-scene__link:hover,
  .sp-hero-scene__link:focus-visible {
    transform: translateY(-8px);
  }
  .sp-hero-scene__link:hover img,
  .sp-hero-scene__link:focus-visible img {
    filter: brightness(0.84);
  }
  .sp-hero-scene__link:focus-visible {
    outline: 2px solid var(--color-preludens-gold);
    outline-offset: 4px;
  }
  .sp-hero-scene figcaption {
    margin: 12px 0 0;
    text-align: left;
    font-size: 1.0625rem;
    line-height: 1.65;
    color: var(--color-ink-soft);
  }

  .sp-hero-steps {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1.25rem, 3vw, 2.5rem);
    width: min(100% - 2rem, var(--max-width));
    margin: 7.5rem auto 0;
    padding: 0 0 2.5rem;
  }
  .sp-hero-steps article:first-child { margin-left: 50px; }
  .sp-hero-steps article:last-child { margin-right: 50px; }
  .sp-panel--hero .sp-hero-steps h3 {
    display: flex;
    align-items: baseline;
    gap: 0.65rem;
    width: fit-content;
    position: relative;
    margin: 0 0 1.15rem;
    padding-bottom: 0.55rem;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.35rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-ink);
  }
  .sp-panel--hero .sp-hero-steps h3::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: var(--color-preludens-gold);
    transform: scaleX(0);
    transform-origin: left center;
    animation: sp-title-line 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  .sp-panel--hero .sp-hero-steps article:nth-child(2) h3::after { animation-delay: 0.12s; }
  .sp-panel--hero .sp-hero-steps article:nth-child(3) h3::after { animation-delay: 0.24s; }
  @keyframes sp-title-line { to { transform: scaleX(1); } }
  .sp-panel--hero .sp-hero-steps h3 span {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--color-preludens-gold);
  }
  .sp-panel--hero .sp-hero-steps p {
    margin: 0;
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 1.0625rem;
    line-height: 1.65;
    text-align: justify;
    hyphens: auto;
    color: var(--color-ink-soft);
  }

  /* Diensten kaarten in navy paneel */
  .sp-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: var(--space-md); margin-top: var(--space-lg); }
  .sp-cards .card { background: var(--color-white); border-radius: var(--radius-lg); padding: var(--space-md); border: 1px solid var(--color-border); box-shadow: var(--shadow-card); }
  .sp-cards .card h3 { color: var(--color-ink); margin-bottom: var(--space-xs); }
  .sp-cards .card p { color: var(--color-ink-soft); font-size: 1.0625rem; line-height: 1.65; }
  .sp-cards .card a { color: var(--color-harbor-teal); font-weight: 600; text-decoration-thickness: 1px; text-underline-offset: 3px; }
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

  /* Klant-testimonial paneel (met portret) */
  .sp-panel--testimonial {
    background-color: var(--color-cream);
    background-image: radial-gradient(ellipse at 18% 22%, rgba(237, 167, 14, 0.12), transparent 48%);
    color: var(--color-ink);
  }
  .sp-panel--testimonial .sp-eyebrow { color: var(--color-harbor-teal); }

  /* B5: bloktitel boven carousel — h2 voor SEO, visueel als blok-H1 */
  .sp-panel--testimonial > .sp-inner > h2 {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1.06;
    letter-spacing: 0.015em;
    max-width: 20ch;
    margin: 0 0 clamp(var(--space-md), 3vh, var(--space-lg));
    color: var(--color-ink);
  }

  /* Carousel: 1 slide tegelijk; active slide behoudt flex-layout van testimonial */
  .sp-carousel__slide.is-active { display: flex; }
  .sp-carousel__dots[hidden] { display: none; }
  .sp-carousel__dot {
    width: 0.85rem;
    height: 0.85rem;
    background: rgba(11, 42, 53, 0.22);
    transition: background var(--transition), box-shadow var(--transition);
  }
  .sp-carousel__dot.is-active {
    background: var(--color-preludens-gold);
    box-shadow: 0 0 0 3px rgba(237, 167, 14, 0.18);
  }

  .sp-testimonial {
    display: flex;
    align-items: center;
    gap: clamp(1.5rem, 4vw, var(--space-xl));
    max-width: 60rem;
    margin: 0 auto;
  }
  .sp-testimonial__photo {
    flex: 0 0 auto;
    width: clamp(8rem, 16vw, 12.5rem);
    height: clamp(8rem, 16vw, 12.5rem);
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--color-white);
    box-shadow: var(--shadow-card);
  }
  .sp-testimonial__body { min-width: 0; }
  .sp-testimonial blockquote {
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 2.4vw, 1.9rem);
    font-weight: 600;
    line-height: 1.32;
    margin: 0.4rem 0 var(--space-md);
    color: var(--color-ink);
    max-width: 34ch;
  }
  .sp-testimonial blockquote::before { content: "\201C"; color: var(--color-harbor-teal); }
  .sp-testimonial blockquote::after { content: "\201D"; color: var(--color-harbor-teal); }
  .sp-testimonial__cite { display: flex; flex-direction: column; gap: 0.1rem; }
  .sp-testimonial__name {
    font-family: var(--font-display);
    font-weight: 700;
    color: var(--color-ink);
  }
  .sp-testimonial__role { font-size: 0.9rem; color: var(--color-ink-soft); }

  @media (max-width: 640px) {
    .sp-testimonial { flex-direction: column; text-align: center; }
    .sp-testimonial__cite { align-items: center; }
    .sp-testimonial blockquote { max-width: none; }
  }

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

  @media (max-width: 900px) {
    .sp-panel--hero .sp-inner { grid-template-columns: 1fr; }
    .sp-hero-scene { justify-self: stretch; width: 100%; margin-inline: auto; }
    .sp-hero-scene figcaption { text-align: left; }
    .sp-hero-steps { grid-template-columns: 1fr; }
    .sp-hero-steps article:first-child,
    .sp-hero-steps article:last-child { margin-left: 0; margin-right: 0; }
    .sp-nowrap { white-space: normal; }
    .sp-focus-copy,
    .sp-warm-copy { grid-template-columns: 1fr; }
  }

  @media (max-width: 600px) {
    .sp-rail { display: none !important; }
    .sp-inner { padding-inline: var(--space-md); }
  }

  /* Korte schermen / mobiel: zachter snappen, inhoud mag meegroeien (geen klemmende blokken) */
  @media (max-width: 599px), (max-height: 639px) {
    html:has(body.page-scroll-preview) { scroll-snap-type: none; }
    .sp-panel { position: relative; height: auto; min-height: 0; }
  }

  /* Reduced motion: geen transform/filter manipulatie, normale scroll */
  @media (prefers-reduced-motion: reduce) {
    html:has(body.page-scroll-preview) { scroll-behavior: auto; scroll-snap-type: none; }
    .sp-panel { position: relative; transform: none !important; filter: none !important; opacity: 1 !important; height: auto; min-height: 100svh; scroll-snap-align: none; }
    .sp-scrollhint, .sp-panel::before, .sp-hero-steps h3::after { animation: none; }
    .sp-panel--hero .sp-hero-steps h3::after { transform: none; }
    .sp-hero-scene__link,
    .sp-hero-scene__link:hover,
    .sp-hero-scene__link:focus-visible { transform: none; }
    .sp-hero-scene__link:hover img,
    .sp-hero-scene__link:focus-visible img { filter: none; }
    .sp-track { transition: none; }
    .sp-track:hover,
    .sp-track:focus-within { transform: translate(var(--sp-shift-x), var(--sp-shift-y)); }
  }
</style>

<aside class="sp-rail" aria-label="Panel navigation"></aside>

<div class="sp-stack">

  <!-- 1. Hero -->
  <section class="sp-panel sp-panel--hero" data-sp="0">
    <div class="sp-inner">
      <div class="sp-hero-copy">
        <h3>Learning by doing</h3>
        <h1>We strengthen <span class="hl">knowledge retention</span> <span class="sp-nowrap">in organisations.</span></h1>
        <p class="sp-lead">
          Preludens designs and develops online training in which employees practise with situations from their work. With storytelling and game-based learning we invite participants to make their own choices. Focused feedback and repetition help them remember the knowledge and apply it in their work.
        </p>
        <div class="sp-actions">
          <span class="sp-hero-cta">
            <a class="btn btn-primary" href="{{ '/diensten/' | relative_url }}">Discover our approach →</a>
          </span>
          <a class="sp-hero-play" href="{{ '/play/' | relative_url }}">
            <span class="sp-hero-play__icon" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M3.2 1.4v9.2L10.4 6 3.2 1.4z"/></svg>
            </span>
            View a MicroGame
          </a>
        </div>
      </div>
      <figure class="sp-hero-scene">
        <svg class="sp-hero-clip-def" width="0" height="0" aria-hidden="true">
          <defs>
            <clipPath id="sp-hero-clip" clipPathUnits="objectBoundingBox">
              <path d="M0 0.2 L0 0.96 Q0 1 0.04 1 L0.8 1 Q0.84 1 0.868 0.972 L0.972 0.868 Q1 0.84 1 0.8 L1 0.04 Q1 0 0.96 0 L0.2 0 Q0.16 0 0.132 0.028 L0.028 0.132 Q0 0.16 0 0.2 Z"/>
            </clipPath>
            <clipPath id="sp-btn-clip" clipPathUnits="objectBoundingBox">
              <path d="M0.11 0 L1 0 L1 0.64 L0.89 1 L0 1 L0 0.36 Z"/>
            </clipPath>
          </defs>
        </svg>
        <a class="sp-hero-scene__link" href="{{ '/play/' | relative_url }}">
          <div class="sp-hero-shadow">
            <div class="sp-hero-frame">
              <img src="{{ '/assets/images/hero/homepage-concept-route.jpg' | relative_url }}" alt="A person on a path leading towards a flag on the horizon">
            </div>
          </div>
        </a>
        <figcaption>From information to knowledge.</figcaption>
      </figure>
    </div>
    <div class="sp-hero-steps">
      <article>
        <h3><span>01</span> Challenge</h3>
        <p>Invite teams to make choices in realistic situations, practise weighing options and experience the consequences of what they do.</p>
      </article>
      <article>
        <h3><span>02</span> Activate</h3>
        <p>Use Play so participants actively choose. Trying, responding, deciding and learning from direct feedback.</p>
      </article>
      <article>
        <h3><span>03</span> Motivate</h3>
        <p>Strengthen engagement and intrinsic motivation, so teams act with more confidence when it really matters in practice.</p>
      </article>
    </div>
  </section>

  <!-- 2. Online focus -->
  <section class="sp-panel sp-panel--cream" data-sp="1">
    <div class="sp-inner">
      <h2>Interactive scenarios that<br><span class="hl">challenge</span>, <span class="hl">activate</span> and <span class="hl">motivate</span> teams.</h2>
      <div class="sp-focus-copy">
        <p class="sp-lead">
          At Preludens we believe online learning works when people become actively involved. That is why we design
          interactive learning experiences that fit practice: visually built, recognisable and aimed at knowledge
          people need to be able to apply.
        </p>
        <p class="sp-lead">
          Storytelling gives context and meaning. MicroGames create choices, repetition and direct feedback. Data shows
          where participants get stuck and where improvement is possible. Online learning then becomes a focused
          experience in which teams practise, discover and grow.
        </p>
      </div>
      <ul class="sp-focus-clients" aria-label="A selection of clients">
        <li>
          <img src="{{ '/assets/images/clients/focus-nnvo.png' | relative_url }}" alt="NNVO, Nationale Nautische Verkeersdienst Opleiding" width="190" height="80" loading="lazy" decoding="async">
        </li>
        <li>
          <img src="{{ '/assets/images/clients/onitnow.png' | relative_url }}" alt="onITnow" width="190" height="80" loading="lazy" decoding="async">
        </li>
        <li>
          <img src="{{ '/assets/images/clients/maryland.png' | relative_url }}" alt="University of Maryland" width="190" height="80" loading="lazy" decoding="async">
        </li>
        <li>
          <img src="{{ '/assets/images/clients/focus-21cc.png' | relative_url }}" alt="21CC Education" width="190" height="80" loading="lazy" decoding="async">
        </li>
        <li>
          <img src="{{ '/assets/images/clients/tudelft.png' | relative_url }}" alt="TU Delft" width="190" height="80" loading="lazy" decoding="async">
        </li>
      </ul>
    </div>
  </section>

  <!-- 3. Diensten -->
  <section class="sp-panel sp-panel--navy" data-sp="2">
    <div class="sp-inner">
      <h3>What we do</h3>
      <h2><span class="hl">Knowledge journeys</span> with story, play and impact.</h2>
      <p class="sp-lead">
        <strong>Which form fits your challenge?</strong>
        If you want to train and secure basic knowledge, a MicroGame Story is the natural choice. If you want to strengthen decision-making around difficult choices, Dilemma Storytelling fits. If you first want a grip on behaviour, learning goals and interventions, we start with Game Thinking.
      </p>
      <div class="sp-tracks">
        <article class="sp-track">
          <a class="sp-track__link" href="{{ '/diensten/' | relative_url }}">
            <span class="sp-track__copy">
              <h3>E-learning</h3>
              <p>Online training in which employees practise with situations from their work, make choices and receive direct feedback.</p>
              <span class="sp-track__more">Information</span>
            </span>
            <span class="sp-track__stage" aria-hidden="true">
              <span class="sp-device sp-device--laptop-light">
                <img class="sp-device__screen" src="{{ '/assets/images/verhalen/basis-koeltechniek-onderdelen.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
                <img class="sp-device__frame" src="{{ '/assets/images/verhalen/device-laptop-light.png' | relative_url }}" alt="" loading="lazy" decoding="async">
              </span>
            </span>
          </a>
        </article>
        <article class="sp-track">
          <a class="sp-track__link" href="{{ '/prepo/' | relative_url }}">
            <span class="sp-track__copy">
              <h3>Preludens Portal</h3>
              <p>One environment to use, manage and keep developing MicroGames and Stories, also after delivery.</p>
              <span class="sp-track__more">Information</span>
            </span>
            <span class="sp-track__stage" aria-hidden="true">
              <span class="sp-device sp-device--laptop-dark">
                <img class="sp-device__screen" src="{{ '/assets/images/prepo/overzicht.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
                <img class="sp-device__frame" src="{{ '/assets/images/verhalen/device-laptop-dark.png' | relative_url }}" alt="" loading="lazy" decoding="async">
              </span>
            </span>
          </a>
        </article>
        <article class="sp-track">
          <a class="sp-track__link" href="{{ '/diensten/#microgame-stories' | relative_url }}">
            <span class="sp-track__copy">
              <h3>MicroGame Stories</h3>
              <p>Short, visual stories that connect basic knowledge to recognisable work situations, with play and repetition.</p>
              <span class="sp-track__more">Information</span>
            </span>
            <span class="sp-track__stage" aria-hidden="true">
              <span class="sp-device sp-device--tablet">
                <img class="sp-device__screen" src="{{ '/assets/images/verhalen/studium-co-wijzer.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
                <img class="sp-device__frame" src="{{ '/assets/images/verhalen/device-tablet-02.png' | relative_url }}" alt="" loading="lazy" decoding="async">
              </span>
            </span>
          </a>
        </article>
        <article class="sp-track">
          <a class="sp-track__link" href="{{ '/diensten/#dilemma-storytelling' | relative_url }}">
            <span class="sp-track__copy">
              <h3>Dilemma short Stories</h3>
              <p>Short scenarios in which teams make difficult choices, experience the consequences and learn to weigh their options.</p>
              <span class="sp-track__more">Information</span>
            </span>
            <span class="sp-track__stage" aria-hidden="true">
              <span class="sp-device sp-device--hands">
                <img class="sp-device__screen" src="{{ '/assets/images/verhalen/disruption-game.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
                <img class="sp-device__frame" src="{{ '/assets/images/verhalen/tablet-hands.png' | relative_url }}" alt="" loading="lazy" decoding="async">
              </span>
            </span>
          </a>
        </article>
      </div>
    </div>
  </section>

  <!-- 4. CTA -->
  <section class="sp-panel sp-panel--warm" data-sp="3">
    <div class="sp-inner">
      <h3>No obligation · no commitments · a reply within one working day</h3>
      <h2>Take the first step tomorrow</h2>
      <div class="sp-warm-copy">
        <p class="sp-lead">
          In a GameStorm we explore your learning challenge together. In one half-day we bring the audience, context and
          key learning goals into sharp focus. Then we translate those insights into a first storyline, fitting choices
          and short game mechanisms.
        </p>
        <p class="sp-lead">
          You leave with a clear concept and a concrete direction for your learning experience. Even without a follow-up
          project, the session gives valuable footing for better e-learning, training or knowledge transfer.
        </p>
      </div>
      <div class="sp-actions">
        <a class="btn btn-primary" href="{{ '/gamestorm/' | relative_url }}">Plan a GameStorm</a>
        <a class="btn btn-secondary" href="{{ '/play/' | relative_url }}">Discover Play</a>
      </div>
    </div>
  </section>

  <!-- 5. Verhalen — bewijs uit de praktijk -->
  <section class="sp-panel sp-panel--verhalen" data-sp="4" data-title="Stories from practice">
    <div class="sp-inner">
      <span class="sp-eyebrow">Proven in practice</span>
      <h2>From challenge to playable learning experience</h2>
      <p class="sp-lead">
        From nautical supervision to the energy transition: every project starts with a challenge that asks for
        movement. That is why Preludens offers an end-to-end approach to game-based learning: from first exploration
        to implementation in your own learning environment.
      </p>
      <ol class="sp-steps" aria-label="The 7 steps of success">
        <li><span class="sp-steps__num">1</span> GameStorm</li>
        <li><span class="sp-steps__num">2</span> Storytelling</li>
        <li><span class="sp-steps__num">3</span> Visualisation</li>
        <li><span class="sp-steps__num">4</span> Learning goals</li>
        <li><span class="sp-steps__num">5</span> Design</li>
        <li><span class="sp-steps__num">6</span> Production</li>
        <li><span class="sp-steps__num">7</span> Implementation</li>
      </ol>
      <ul class="sp-clients" aria-label="A selection of clients">
        <li>Amsterdam University of Applied Sciences</li>
        <li>
          <img
            class="sp-clients__logo"
            src="{{ '/assets/images/clients/nnvo.png' | relative_url }}"
            alt="NNVO"
            width="160"
            height="48"
            loading="lazy"
            decoding="async"
          >
        </li>
        <li>
          <img
            class="sp-clients__logo"
            src="{{ '/assets/images/clients/21cc.png' | relative_url }}"
            alt="21CC"
            width="160"
            height="48"
            loading="lazy"
            decoding="async"
          >
        </li>
        <li>
          <img
            class="sp-clients__logo"
            src="{{ '/assets/images/clients/studium.png' | relative_url }}"
            alt="Studium"
            width="160"
            height="48"
            loading="lazy"
            decoding="async"
          >
        </li>
        <li>Wijkz</li>
        <li>onITnow</li>
      </ul>
      <div class="sp-actions">
        <a class="btn btn-primary" href="{{ '/verhalen/' | relative_url }}">Read the stories</a>
      </div>
    </div>
  </section>

  <!-- 6. Klant-testimonial -->
  <section class="sp-panel sp-panel--testimonial" data-sp="5" data-title="What clients say">
    <div class="sp-inner">
      <h2>Experiences from practice</h2>
      <div class="sp-carousel" data-sp-carousel>
        <div class="sp-carousel__track">
          <figure class="sp-testimonial sp-carousel__slide is-active">
            <img
              class="sp-testimonial__photo"
              src="{{ '/assets/images/testimonials/renee-heller.jpg' | relative_url }}"
              alt="Renée Heller"
              width="800"
              height="800"
              loading="lazy"
              decoding="async"
            >
            <div class="sp-testimonial__body">
              <blockquote>
                Daan helped us turn a static design tool into a game that challenges players on every aspect of their choices. His work made sure every step was set out logically, for a broad audience of professionals and students, in a beautiful card game.
              </blockquote>
              <figcaption class="sp-testimonial__cite">
                <span class="sp-testimonial__name">Renée Heller</span>
                <span class="sp-testimonial__role">Professor Energy &amp; Innovation, Amsterdam University of Applied Sciences</span>
              </figcaption>
            </div>
          </figure>
        </div>
        <div class="sp-carousel__dots" role="tablist" aria-label="Quotes">
          <button class="sp-carousel__dot is-active" type="button" aria-label="Quote 1" data-sp-carousel-dot="0"></button>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. Team — de makers (E-E-A-T) -->
  <section class="sp-panel sp-panel--team" data-sp="6" data-title="The team">
    <div class="sp-inner">
      <span class="sp-eyebrow">The team</span>
      <h2>The people behind Preludens</h2>
      <p class="sp-lead">
        Preludens combines more than fifteen years of experience in serious games with storytelling,
        game design, didactics and technology. We are a compact team of makers, designers and
        developers that turns complex knowledge into learning experiences in which people actively
        discover, choose and practise.
      </p>
      <p><a href="{{ '/team/' | relative_url }}">Meet the team →</a></p>
      <ul class="sp-values" aria-label="What we stand for">
        <li>
          <strong>Robust</strong>
          <span>Learning experiences that work reliably, feel logical and build trust.</span>
        </li>
        <li>
          <strong>Purposeful</strong>
          <span>Design choices that always trace back to learning goals, behaviour and application.</span>
        </li>
        <li>
          <strong>Accessible</strong>
          <span>Complex knowledge becomes clear, recognisable and playable for the people who need to use it.</span>
        </li>
      </ul>
    </div>
  </section>

  <!-- 8. Quote -->
  <section class="sp-panel sp-panel--quote" data-sp="7">
    <div class="sp-inner">
      <figure class="sp-quote">
        <blockquote>
          Play is older than culture, for culture, however inadequately defined, always presupposes human society, and animals have not waited for man to teach them their playing.
        </blockquote>
        <cite>Johan Huizinga — Homo Ludens (1938)</cite>
      </figure>
    </div>
  </section>

  <!-- Footer verschijnt als je voorbij de laatste slide scrollt; de slide blijft
       gedeeltelijk zichtbaar omdat de footer geen full-view heeft. -->
  <div class="sp-footer-reveal">
    {% include footer.html %}
  </div>

</div>

<script>
(function () {
  "use strict";
  var panels = Array.prototype.slice.call(document.querySelectorAll(".sp-panel"));
  if (!panels.length) return;
  // Naast de panelen is er één extra "view": de footer-reveal onder de laatste slide.
  var maxIndex = panels.length;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var rail = document.querySelector(".sp-rail");

  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
  function desktopMode() { return window.innerWidth >= 600 && window.innerHeight >= 640; }

  var headerEl = document.querySelector(".site-header");
  function measureHeader() { return headerEl ? headerEl.getBoundingClientRect().height : 0; }
  var headerHeight = measureHeader();
  window.addEventListener("resize", function () { headerHeight = measureHeader(); });

  var carousel = document.querySelector("[data-sp-carousel]");
  if (carousel) {
    var slides = Array.prototype.slice.call(carousel.querySelectorAll(".sp-carousel__slide"));
    var dots = Array.prototype.slice.call(carousel.querySelectorAll("[data-sp-carousel-dot]"));
    var dotsWrap = carousel.querySelector(".sp-carousel__dots");
    var slideIndex = 0;
    var autoTimer = null;
    var AUTO_MS = 6000;
    var multiSlide = slides.length > 1;

    if (dotsWrap && !multiSlide) {
      dotsWrap.hidden = true;
    }

    function showSlide(index) {
      if (!slides.length) return;
      slideIndex = ((index % slides.length) + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === slideIndex);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === slideIndex);
      });
    }

    function stopCarouselAuto() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    function startCarouselAuto() {
      stopCarouselAuto();
      if (!multiSlide || reduced) return;
      autoTimer = setInterval(function () {
        showSlide(slideIndex + 1);
      }, AUTO_MS);
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        showSlide(Number(dot.getAttribute("data-sp-carousel-dot")) || 0);
        startCarouselAuto();
      });
    });

    if (multiSlide && !reduced) {
      carousel.addEventListener("mouseenter", stopCarouselAuto);
      carousel.addEventListener("mouseleave", startCarouselAuto);
      carousel.addEventListener("focusin", stopCarouselAuto);
      carousel.addEventListener("focusout", function (e) {
        if (!carousel.contains(e.relatedTarget)) startCarouselAuto();
      });
      startCarouselAuto();
    }
  }

  return;

  // Programma-gestuurde snap: één gebaar = automatisch naar de volgende view
  var lock = false;
  var lockTimer = null;
  var current = 0;

  function goTo(i) {
    i = clamp(i, 0, maxIndex);
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
    // Extra view voorbij de laatste slide: scroll naar de bodem zodat de footer
    // onthuld wordt terwijl de laatste slide (sticky) gedeeltelijk zichtbaar blijft.
    if (i >= panels.length) return maxScroll;
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
    return "Panel " + (index + 1);
  }

  // Voortgangsrail opbouwen
  if (rail) {
    panels.forEach(function (p, i) {
      var b = document.createElement("button");
      b.type = "button";
      var title = panelTitle(p, i);
      b.setAttribute("aria-label", "Go to " + title);
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
      if (p.classList.contains("sp-panel--hero")) {
        p._t.blur = 0;
        p._t.scale = 1;
        p._t.bright = 1;
        p._t.ty = 0;
      }
    });
    // Actieve view = die waarvan het scroll-doel (offsetTop-keten) dichtst bij
    // scrollY zit. Ook de footer-reveal (maxIndex) telt mee, zodat current klopt
    // wanneer je onderaan staat.
    for (var i = 0; i <= maxIndex; i++) {
      var dist = Math.abs(sy - panelTarget(i));
      if (dist < bestDist) { bestDist = dist; active = i; }
    }
    return active;
  }

  // Initiele target direct overnemen (geen flash bij laden). Synchroniseer current
  // meteen met de (evt. door de browser herstelde) scrollpositie.
  current = compute();
  panels.forEach(function (p, i) { state[i] = Object.assign({}, p._t); });

  var raf = null;
  var last = performance.now();
  var lastActive = current;

  function setActiveRail(active) {
    railButtons.forEach(function (b, i) {
      if (i === active) b.setAttribute("aria-current", "true");
      else b.removeAttribute("aria-current");
    });
  }
  setActiveRail(current);

  function apply(p, s) {
    var isHero = p.classList.contains("sp-panel--hero");
    p.style.opacity = s.opacity.toFixed(4);
    p.style.transform = isHero ? "none" : "translate3d(0," + s.ty.toFixed(2) + "px,0) scale(" + s.scale.toFixed(4) + ")";
    p.style.filter = isHero ? "none" : "blur(" + s.blur.toFixed(2) + "px) brightness(" + s.bright.toFixed(3) + ")";
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
    // Zolang er geen programma-scroll loopt, moet current de echte scrollpositie
    // volgen (o.a. na een refresh met herstelde scroll, of vrij scrollen).
    if (!lock) current = active;
    if (active !== lastActive) {
      lastActive = active;
      setActiveRail(active);
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
