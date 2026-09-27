---
layout: default
lang: en
title: Home
description: We strengthen knowledge retention in organisations with storytelling and MicroGames.
permalink: /
permalink_lang:
  nl: /
body_class: page-home
---

<style>
  /* Stijl onder de warme band. Niet de nieuwe homepagestijl. */
  .sp-stack,
  .panel-stack {
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
    padding: clamp(2.25rem, 7vh, 6rem) var(--space-lg);
  }

  .sp-panel--quote {
    background-color: var(--color-prussian-blue);
    background-image: radial-gradient(ellipse at 50% 50%, rgba(237, 167, 14, 0.12), transparent 55%);
    color: var(--color-white);
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
  .sp-panel--team a { color: var(--color-gold); font-weight: 600; }

  .sp-panel--verhalen::after,
  .sp-panel--testimonial::after,
  .sp-panel--team::after,
  .sp-panel--quote::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: none;
  }
  .sp-panel--verhalen::after { background-image: url("{{ '/assets/images/panels/verhalen.svg' | relative_url }}"); }
  .sp-panel--testimonial::after { background-image: url("{{ '/assets/images/panels/testimonial.svg' | relative_url }}"); }
  .sp-panel--team::after { background-image: url("{{ '/assets/images/panels/team.svg' | relative_url }}"); }
  .sp-panel--quote::after { background-image: url("{{ '/assets/images/panels/quote.svg' | relative_url }}"); }

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
  .sp-panel--testimonial .sp-eyebrow { color: var(--color-harbor-teal); }

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
  .sp-panel h2 .hl { color: var(--color-preludens-gold); }
  .sp-panel p.sp-lead {
    font-size: 1.0625rem;
    line-height: 1.65;
    max-width: 46ch;
    margin: 0 0 clamp(var(--space-sm), 2vh, var(--space-md));
  }
  .sp-panel--verhalen p,
  .sp-panel--team p,
  .sp-panel--quote p { color: rgba(246, 249, 249, 0.9); }

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
    .sp-inner { padding-inline: var(--space-md); }
  }

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

  .sp-panel--testimonial {
    background-color: var(--color-cream);
    background-image: radial-gradient(ellipse at 18% 22%, rgba(237, 167, 14, 0.12), transparent 48%);
    color: var(--color-ink);
  }
  .sp-panel--testimonial > .sp-inner > h2 {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1.06;
    letter-spacing: 0.015em;
    max-width: 20ch;
    margin: 0 0 clamp(var(--space-md), 3vh, var(--space-lg));
    color: var(--color-ink);
  }
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

  @media (prefers-reduced-motion: reduce) {
    .sp-panel { position: relative; transform: none !important; filter: none !important; opacity: 1 !important; height: auto; min-height: 100svh; scroll-snap-align: none; }
  }
</style>

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}We strengthen <span class="hl">knowledge retention</span> <span class="sp-nowrap">in organisations.</span>{% endcapture %}
{% capture hero_lead %}Preludens designs and develops online training in which employees practise with situations from their work. With storytelling and game-based learning we invite participants to make their own choices. Focused feedback and repetition help them remember the knowledge and apply it in their work.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Discover our approach →" primary_href="/diensten/" play_label="View a MicroGame" play_href="/play/" %}
{% endcapture %}
{% capture hero_steps %}
{% include panels/steps.html i1="01" t1="Challenge" p1="Invite teams to make choices in realistic situations, practise weighing options and experience the consequences of what they do." i2="02" t2="Activate" p2="Use Play so participants actively choose. Trying, responding, deciding and learning from direct feedback." i3="03" t3="Motivate" p3="Strengthen engagement and intrinsic motivation, so teams act with more confidence when it really matters in practice." %}
{% endcapture %}
{% include panels/hero.html kicker="Learning by doing" title=hero_title lead=hero_lead actions=hero_actions steps=hero_steps figure_src="/assets/images/hero/homepage-concept-route.jpg" figure_alt="A person on a path leading towards a flag on the horizon" figure_href="/play/" figure_caption="From information to knowledge." %}

{% capture focus_left %}At Preludens we believe online learning works when people become actively involved. That is why we design interactive learning experiences that fit practice: visually built, recognisable and aimed at knowledge people need to be able to apply.{% endcapture %}
{% capture focus_right %}Storytelling gives context and meaning. MicroGames create choices, repetition and direct feedback. Data shows where participants get stuck and where improvement is possible. Online learning then becomes a focused experience in which teams practise, discover and grow.{% endcapture %}
{% capture focus_title %}Interactive scenarios that<br><span class="hl">challenge</span>, <span class="hl">activate</span> and <span class="hl">motivate</span> teams.{% endcapture %}
{% capture focus_body %}
<h2>{{ focus_title }}</h2>
{% include panels/split.html left=focus_left right=focus_right %}
{% include panels/logo-row.html label="A selection of clients" src1="/assets/images/clients/focus-nnvo.png" alt1="NNVO, Nationale Nautische Verkeersdienst Opleiding" src2="/assets/images/clients/onitnow.png" alt2="onITnow" src3="/assets/images/clients/maryland.png" alt3="University of Maryland" src4="/assets/images/clients/focus-21cc.png" alt4="21CC Education" src5="/assets/images/clients/tudelft.png" alt5="TU Delft" %}
{% endcapture %}
{% include panels/panel.html variant="mist" line="online-focus" body=focus_body %}

{% capture track_items %}
{% include panels/track.html href="/diensten/" title="E-learning" text="Online training in which employees practise with situations from their work, make choices and receive direct feedback." more="Information" device="laptop-light" screen="/assets/images/verhalen/basis-koeltechniek-onderdelen.jpg" %}
{% include panels/track.html href="/prepo/" title="Preludens Portal" text="One environment to use, manage and keep developing MicroGames and Stories, also after delivery." more="Information" device="laptop-dark" screen="/assets/images/prepo/overzicht.jpg" %}
{% include panels/track.html href="/diensten/#microgame-stories" title="MicroGame Stories" text="Short, visual stories that connect basic knowledge to recognisable work situations, with play and repetition." more="Information" device="tablet" screen="/assets/images/verhalen/studium-co-wijzer.jpg" %}
{% include panels/track.html href="/diensten/#dilemma-storytelling" title="Dilemma short Stories" text="Short scenarios in which teams make difficult choices, experience the consequences and learn to weigh their options." more="Information" device="hands" screen="/assets/images/verhalen/disruption-game.jpg" %}
{% endcapture %}
{% capture paper_lead %}<strong>Which form fits your challenge?</strong> If you want to train and secure basic knowledge, a MicroGame Story is the natural choice. If you want to strengthen decision-making around difficult choices, Dilemma Storytelling fits. If you first want a grip on behaviour, learning goals and interventions, we start with Game Thinking.{% endcapture %}
{% capture paper_title %}<span class="hl">Knowledge journeys</span> with story, play and impact.{% endcapture %}
{% capture paper_body %}
<h3>What we do</h3>
<h2>{{ paper_title }}</h2>
<p class="sp-lead">{{ paper_lead }}</p>
{% include panels/tracks.html items=track_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=paper_body %}

{% capture warm_left %}In a GameStorm we explore your learning challenge together. In one half-day we bring the audience, context and key learning goals into sharp focus. Then we translate those insights into a first storyline, fitting choices and short game mechanisms.{% endcapture %}
{% capture warm_right %}You leave with a clear concept and a concrete direction for your learning experience. Even without a follow-up project, the session gives valuable footing for better e-learning, training or knowledge transfer.{% endcapture %}
{% include panels/cta.html kicker="No obligation · no commitments · a reply within one working day" title="Take the first step tomorrow" left=warm_left right=warm_right primary_label="Plan a GameStorm" primary_href="/gamestorm/" secondary_label="Discover Play" secondary_href="/play/" %}

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

{% include panels/footer-reveal.html %}

</div>

<script>
(function () {
  "use strict";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var carousel = document.querySelector("[data-sp-carousel]");
  if (!carousel) return;
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
})();
</script>
