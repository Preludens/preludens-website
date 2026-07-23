---
layout: default
lang: en
title: Home
description: Activate your team and prepare them for the future with storytelling and MicroGames.
body_class: page-scroll-preview
permalink: /
---

<style>
  /* ===== Scroll homepage — full screen, smooth fade + snap ===== */
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

  .sp-footer-reveal .site-footer h2 {
    margin-bottom: 0.45rem;
  }

  .sp-footer-reveal .site-footer p {
    margin-bottom: 0.45rem;
    font-size: 0.92rem;
    line-height: 1.45;
  }

  .sp-footer-reveal .footer-links li {
    margin-bottom: 0.15rem;
  }

  .sp-footer-reveal .footer-cta .btn {
    padding: 0.65rem 1rem;
  }

  .sp-footer-reveal .footer-cta p {
    display: none;
  }

  .sp-footer-reveal .logo-footer .logo-img {
    height: 1.85rem;
  }

  .sp-footer-reveal .footer-bottom {
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
  .sp-panel--warm::after,
  .sp-panel--micro::after,
  .sp-panel--play::after {
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
  .sp-panel--warm::after  { background-image: url("{{ '/assets/images/panels/cta.svg' | relative_url }}"); }
  .sp-panel--micro::after { background-image: url("{{ '/assets/images/panels/micro.svg' | relative_url }}"); }
  .sp-panel--play::after  { background-image: url("{{ '/assets/images/panels/play.svg' | relative_url }}"); }

  /* Inhoud van het play-paneel (incl. footer) boven het achtergrondbeeld houden */
  .sp-panel--play .sp-inner,
  .sp-panel--play .site-footer { position: relative; z-index: 2; }

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
  .sp-panel--play .sp-eyebrow { color: var(--color-harbor-teal); }

  .sp-panel h2 {
    font-family: var(--font-display);
    font-size: clamp(1.9rem, 4.2vw, 3rem);
    font-weight: 800;
    line-height: 1.08;
    margin: 0 0 var(--space-md);
    max-width: 22ch;
    color: inherit;
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
  .sp-panel--hero h1 .hl { color: var(--color-preludens-gold); }
  .sp-panel p.sp-lead {
    font-size: clamp(1.05rem, 1.6vw, 1.3rem);
    line-height: 1.6;
    max-width: 46ch;
    margin: 0 0 var(--space-md);
  }
  .sp-panel--hero p,
  .sp-panel--navy p,
  .sp-panel--verhalen p,
  .sp-panel--team p,
  .sp-panel--quote p,
  .sp-panel--micro p { color: rgba(246, 249, 249, 0.9); }
  .sp-panel--warm p { color: var(--color-deep-navy); }
  .sp-panel--cream p,
  .sp-panel--play p { color: var(--color-ink-soft); }

  .sp-actions { display: flex; flex-wrap: wrap; gap: var(--space-sm); margin-top: var(--space-md); }
  .sp-actions .btn { padding: 0.85rem 1.4rem; border-radius: var(--radius-md); font-weight: 600; }

  .sp-reassure {
    margin-top: var(--space-sm);
    font-family: var(--font-display);
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--color-deep-navy);
    opacity: 0.8;
  }

  .sp-clients {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 0.75rem;
    padding: 0;
    margin: var(--space-md) 0 0;
  }
  .sp-clients li {
    font-family: var(--font-display);
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: rgba(246, 249, 249, 0.9);
    padding: 0.35rem 0.7rem;
    border: 1px solid rgba(246, 249, 249, 0.22);
    border-radius: var(--radius-pill);
    background: rgba(246, 249, 249, 0.06);
  }

  /* Warm (geel/koraal) paneel: koraal primaire knop valt weg tegen de achtergrond.
     Gebruik een blauwe knop voor voldoende contrast. */
  .sp-panel--warm .sp-actions .btn-primary {
    background: var(--color-regal-navy);
    color: var(--color-white) !important;
  }
  .sp-panel--warm .sp-actions .btn-primary:hover {
    background: var(--color-prussian-blue);
    color: var(--color-white) !important;
  }

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

<aside class="sp-rail" aria-label="Panel navigation"></aside>

<div class="sp-stack">

  <!-- 1. Hero -->
  <section class="sp-panel sp-panel--hero" data-sp="0">
    <div class="sp-inner">
      <p class="sp-eyebrow">Challenge · Activate · Motivate</p>
      <h1>Activate your team and challenge them to explore the <span class="hl">future</span>.</h1>
      <p class="sp-lead">
        Preludens uses storytelling and game-based learning to challenge teams, activate them and let them explore
        new situations. That is how intrinsic motivation grows and essential knowledge is better understood, applied
        and embedded.
      </p>
      <div class="sp-actions">
        <a class="btn btn-primary" href="{{ '/gamestorm/' | relative_url }}">Start with a GameStorm</a>
        <a class="btn btn-secondary" href="{{ '/diensten/' | relative_url }}">Our services</a>
      </div>
      <div class="sp-hero-pillars" aria-label="Challenge, activate, motivate">
        <div class="sp-hero-pillar">
          <span class="sp-hero-pillar__num">01 — Challenge</span>
          <h3>Challenge</h3>
          <p>Challenge teams to make choices in realistic situations, practise trade-offs and experience the consequences of their actions.</p>
        </div>
        <div class="sp-hero-pillar">
          <span class="sp-hero-pillar__num">02 — Activate</span>
          <h3>Activate</h3>
          <p>Use Play so participants choose actively. Not watching or clicking, but trying, responding, deciding and learning from immediate feedback.</p>
        </div>
        <div class="sp-hero-pillar">
          <span class="sp-hero-pillar__num">03 — Motivate</span>
          <h3>Motivate</h3>
          <p>Strengthen engagement and intrinsic motivation so teams act with more confidence when it truly matters in practice.</p>
        </div>
      </div>
    </div>
    <div class="sp-scrollhint">Scroll</div>
  </section>

  <!-- 2. Online focus -->
  <section class="sp-panel sp-panel--cream" data-sp="1">
    <div class="sp-inner">
      <span class="sp-eyebrow">Online focus</span>
      <h2>Interactive stories that challenge, activate and motivate teams</h2>
      <p class="sp-lead">
        At Preludens we believe online learning only works when people become actively engaged. That is why we design
        interactive learning experiences that connect to practice: visually built, recognisable and focused on knowledge
        people truly need to apply.
      </p>
      <p class="sp-lead">
        Storytelling gives context and meaning. MicroGames create choices, repetition and immediate feedback. Data shows
        where participants get stuck and where improvement is possible. So online learning is no longer a click-through
        obligation, but a focused experience in which teams practise, discover and grow.
      </p>
      <ul class="sp-pain-points" aria-label="Three friction points we remove">
        <li>
          <strong>Engagement</strong>
          <span>Grow intrinsic motivation so people want to practise instead of click through.</span>
        </li>
        <li>
          <strong>Knowledge retention</strong>
          <span>Strengthen insight through repetition, context and choices that stick better.</span>
        </li>
        <li>
          <strong>Safe practice space</strong>
          <span>Create room to explore, make mistakes and act more strongly in practice.</span>
        </li>
      </ul>
    </div>
  </section>

  <!-- 3. Services -->
  <section class="sp-panel sp-panel--navy" data-sp="2">
    <div class="sp-inner">
      <span class="sp-eyebrow">What we do</span>
      <h2>Learning experiences with story, play and impact</h2>
      <div class="sp-cards">
        <article class="card card--coral">
          <span class="sp-card-icon" aria-hidden="true">📖</span>
          <h3>MicroGame Stories</h3>
          <p>Short visual stories that link basic knowledge to recognisable work situations. People practise with short game mechanisms, make choices and get immediate feedback.</p>
          <a href="{{ '/diensten/#microgame-stories' | relative_url }}">More about MicroGame Stories</a>
        </article>
        <article class="card card--gold">
          <span class="sp-card-icon" aria-hidden="true">⚖️</span>
          <h3>Dilemma Storytelling</h3>
          <p>Realistic scenarios in which people make tough choices, experience consequences and learn to weigh options — linked to goals or KPIs from practice.</p>
          <a href="{{ '/diensten/#dilemma-storytelling' | relative_url }}">More about Dilemma Storytelling</a>
        </article>
        <article class="card card--mint">
          <span class="sp-card-icon" aria-hidden="true">🎯</span>
          <h3>Game Thinking</h3>
          <p>Explore complex challenges as if they were a game — with workshops that make goals, behaviour, choices and feedback visible in a concrete blueprint.</p>
          <a href="{{ '/diensten/#game-thinking' | relative_url }}">More about Game Thinking</a>
        </article>
      </div>
      <div class="sp-fit-note">
        <p>
          <strong>Which form fits your challenge?</strong>
          Want to train and embed basic knowledge? A MicroGame Story. Want to strengthen decisiveness around tough
          choices? Dilemma Storytelling. Want grip on behaviour, learning goals and interventions first? We start with
          Game Thinking.
        </p>
        <a class="btn btn-secondary" href="{{ '/diensten/' | relative_url }}">Explore our services</a>
      </div>
    </div>
  </section>

  <!-- 4. Stories — proof from practice -->
  <section class="sp-panel sp-panel--verhalen" data-sp="3" data-title="Stories from practice">
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
        <li>NNVO</li>
        <li>21CC</li>
        <li>Studium</li>
        <li>Wijkz</li>
        <li>onITnow</li>
      </ul>
      <div class="sp-actions">
        <a class="btn btn-primary" href="{{ '/verhalen/' | relative_url }}">Read the stories</a>
      </div>
    </div>
  </section>

  <!-- 5. Client testimonial -->
  <section class="sp-panel sp-panel--testimonial" data-sp="4" data-title="What clients say">
    <div class="sp-inner">
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
              <span class="sp-eyebrow">Experiences from practice</span>
              <blockquote>
                Daan helped us turn a static design tool into a game that challenges players on every aspect of their choices. His work made sure every step was set out logically — for a broad audience of professionals and students — in a beautiful card game.
              </blockquote>
              <figcaption class="sp-testimonial__cite">
                <span class="sp-testimonial__name">Renée Heller</span>
                <span class="sp-testimonial__role">Professor Energy &amp; Innovation, Amsterdam University of Applied Sciences</span>
              </figcaption>
            </div>
          </figure>
          <figure class="sp-testimonial sp-carousel__slide">
            <img
              class="sp-testimonial__photo"
              src="{{ '/assets/images/testimonials/martijn-dorrestijn.jpg' | relative_url }}"
              alt="Martijn Dorrestijn"
              width="800"
              height="800"
              loading="lazy"
              decoding="async"
            >
            <div class="sp-testimonial__body">
              <span class="sp-eyebrow">Experiences from practice</span>
              <blockquote>
                [Quote to follow] — placeholder for Martijn Dorrestijn’s experience. Replace with the final quote once available.
              </blockquote>
              <figcaption class="sp-testimonial__cite">
                <span class="sp-testimonial__name">Martijn Dorrestijn</span>
                <span class="sp-testimonial__role">Quote and role to follow</span>
              </figcaption>
            </div>
          </figure>
        </div>
        <div class="sp-carousel__dots" role="tablist" aria-label="Quotes">
          <button class="sp-carousel__dot is-active" type="button" aria-label="Quote 1" data-sp-carousel-dot="0"></button>
          <button class="sp-carousel__dot" type="button" aria-label="Quote 2" data-sp-carousel-dot="1"></button>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. Team -->
  <section class="sp-panel sp-panel--team" data-sp="5" data-title="The team">
    <div class="sp-inner">
      <span class="sp-eyebrow">The team</span>
      <h2>The people behind Preludens</h2>
      <p class="sp-lead">
        Preludens combines more than fifteen years of experience in serious games with storytelling, game design,
        didactics and technology. We are a compact team of makers, designers and developers that turns complex
        knowledge into learning experiences in which people actively discover, choose and practise.
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

  <!-- 7. Quote -->
  <section class="sp-panel sp-panel--quote" data-sp="6">
    <div class="sp-inner">
      <figure class="sp-quote">
        <blockquote>
          Play is older than culture, for culture, however inadequately defined, always presupposes human society, and animals have not waited for man to teach them their playing.
        </blockquote>
        <cite>Johan Huizinga — Homo Ludens (1938)</cite>
      </figure>
    </div>
  </section>

  <!-- 8. CTA -->
  <section class="sp-panel sp-panel--warm" data-sp="7">
    <div class="sp-inner">
      <p class="sp-reassure">No obligation · no commitments · reply within one business day</p>
      <h2>Take the first step tomorrow</h2>
      <p class="sp-lead">
        In a GameStorm we explore your learning challenge together. In one half-day we bring the audience, context and
        key learning goals into sharp focus. Then we translate those insights into a first storyline, fitting choices
        and short game mechanisms.
      </p>
      <p class="sp-lead">
        You leave with a clear concept and a concrete direction for your learning experience. Even without a follow-up
        project, the session gives valuable footing for better e-learning, training or knowledge transfer.
      </p>
      <div class="sp-actions">
        <a class="btn btn-primary" href="{{ '/gamestorm/' | relative_url }}">Plan a GameStorm</a>
        <a class="btn btn-secondary" href="{{ '/play/' | relative_url }}">Discover Play</a>
      </div>
    </div>
  </section>

  <!-- 9. Mini interaction — slider -->
  <section class="sp-panel sp-panel--micro" data-sp="8">
    <div class="sp-inner">
      <div class="sp-micro">
        <span class="sp-eyebrow">Experience it yourself</span>
        <h2>What weighs heavier?</h2>
        <p class="sp-lead">
          Slide between speed and safety and see the feedback respond instantly — exactly what a MicroGame does: choose, feel, learn.
        </p>

        <div class="sp-slider-card">
          <h3>Speed or safety?</h3>
          <div class="sp-range-row"><span>Speed</span><span>Safety</span></div>
          <input id="spRange" class="sp-range" type="range" min="0" max="100" value="68" aria-label="Balance between speed and safety" />
          <div class="sp-feedback" id="spRangeFeedback" aria-live="polite">
            <strong>Feedback</strong>
            <span>You choose control and make professional behaviour visible. It takes time, but increases safety and ownership.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 10. Play -->
  <section class="sp-panel sp-panel--play" data-sp="9">
    <div class="sp-inner">
      <div class="sp-final-copy">
        <span class="sp-eyebrow">What we do</span>
        <h2>In the world of Play</h2>
        <p class="sp-lead">
          We prepare teams for the future by letting them experience knowledge and decision-making before it becomes a problem.
        </p>
        <p class="sp-lead">
          In <em>Homo Ludens</em>, Huizinga describes how play creates a safe, separate space — the magic circle — where mistakes are allowed and curiosity is sparked. That is exactly what Preludens applies.
        </p>
        <p><a href="{{ '/play/' | relative_url }}">Discover our view on Play →</a></p>
      </div>
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

  var microRange = document.getElementById("spRange");
  var microFeedback = document.getElementById("spRangeFeedback");
  if (microRange && microFeedback) {
    var microText = microFeedback.querySelector("span");
    microRange.addEventListener("input", function () {
      var value = Number(microRange.value);
      var text = "You choose control and make professional behaviour visible. It takes time, but increases safety and ownership.";
      if (value < 35) text = "You lean strongly towards speed. That can seem efficient, but makes the risk depend on assumptions rather than control.";
      else if (value > 82) text = "You lean very strongly towards safety. Good, but be careful: acting professionally also means clearly communicating why a delay is needed.";
      if (microText) microText.textContent = text;
    });
  }

  var carousel = document.querySelector("[data-sp-carousel]");
  if (carousel) {
    var slides = Array.prototype.slice.call(carousel.querySelectorAll(".sp-carousel__slide"));
    var dots = Array.prototype.slice.call(carousel.querySelectorAll("[data-sp-carousel-dot]"));
    function showSlide(index) {
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === index);
      });
    }
    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        showSlide(Number(dot.getAttribute("data-sp-carousel-dot")) || 0);
      });
    });
  }

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
</output>
