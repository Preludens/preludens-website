---
layout: default
lang: en
title: Play — preview
description: Preview of the Play page in the style of the homepage concept.
permalink: /play-concept/
permalink_lang:
  nl: /play-concept/
body_class: page-scroll-preview page-play-concept
sitemap: false
robots: noindex, nofollow
---

{% include sp-concept-style.html %}

<style>
  .sp-hero-steps.sp-hero-steps--4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .sp-panel--hero .sp-hero-steps.sp-hero-steps--4 p {
    text-align: left;
    hyphens: manual;
  }

  .sp-panel--cream > .sp-inner > .sp-eyebrow,
  .sp-panel--band > .sp-inner > .sp-eyebrow {
    display: block;
    text-align: center;
  }
  .sp-panel--band .sp-eyebrow { color: var(--color-harbor-teal); }

  .sp-split {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 26rem);
    gap: clamp(1.5rem, 4vw, 3.5rem);
    align-items: center;
  }
  .sp-split--start { align-items: start; }
  .sp-split p.sp-lead { max-width: none; }
  .sp-split .sp-hero-scene { justify-self: end; }

  .sp-panel--band {
    background: var(--color-mist-blue);
    color: var(--color-ink);
  }
  .sp-panel--band::after { content: none; }
  .sp-panel--band h2,
  .sp-panel--band h3,
  .sp-panel--band p { color: var(--color-ink); }
  .sp-panel--band p.sp-lead,
  .sp-panel--band .sp-pain-points span { color: var(--color-ink-soft); }

  .sp-pain-points.sp-pain-points--pairs {
    margin-top: clamp(1.5rem, 4vh, 2.75rem);
  }
  @media (min-width: 720px) {
    .sp-pain-points.sp-pain-points--pairs {
      grid-template-columns: 1fr 1fr;
    }
  }

  .sp-aside-quote {
    margin: 0;
    padding: 1.5rem 1.35rem 1.35rem;
    background: var(--color-mist-blue);
    border-radius: var(--radius-sm);
    box-shadow: 0 8px 18px rgba(11, 42, 53, 0.08);
  }
  .sp-aside-quote blockquote {
    margin: 0 0 1rem;
    font-family: var(--font-display);
    font-size: clamp(1.15rem, 1.6vw, 1.4rem);
    font-weight: 600;
    line-height: 1.35;
    color: var(--color-ink);
  }
  .sp-aside-quote figcaption {
    font-family: var(--font-display);
    font-size: 0.92rem;
    font-weight: 600;
    color: var(--color-ink-gold);
  }

  .sp-panel--verhalen p.sp-lead,
  .sp-panel--warm p.sp-lead { max-width: 65ch; }
  .sp-panel--verhalen .sp-actions .btn-secondary {
    background: transparent;
    color: var(--color-white) !important;
    border-color: rgba(246, 249, 249, 0.42);
  }
  .sp-panel--verhalen .sp-actions .btn-secondary:hover {
    background: rgba(246, 249, 249, 0.1);
    color: var(--color-white) !important;
  }

  @media (max-width: 900px) {
    .sp-hero-steps.sp-hero-steps--4 { grid-template-columns: 1fr; }
    .sp-split { grid-template-columns: 1fr; }
    .sp-split .sp-hero-scene { justify-self: stretch; }
  }
</style>

<div class="sp-stack">

  <section class="sp-panel sp-panel--hero" data-sp="0">
    <div class="sp-inner">
      <div class="sp-hero-copy">
        <h3>Play</h3>
        <h1>Play creates the room to <span class="hl">learn</span></h1>
        <p class="sp-lead">
          When people are mainly busy avoiding mistakes and limiting risks, there is little room to practise new
          behaviour. Play breaks that pattern.
        </p>
        <p class="sp-lead">
          Preludens creates safe learning experiences in which teams may explore, try and choose again. With
          clear rules, recognisable situations and direct feedback, involvement, intrinsic motivation and
          the confidence to act more strongly in practice grow.
        </p>
        <div class="sp-actions">
          <span class="sp-hero-cta">
            <a class="btn btn-primary" href="{{ '/contact/' | relative_url }}">Get in touch →</a>
          </span>
          <a class="sp-hero-play" href="{{ '/diensten/' | relative_url }}">
            <span class="sp-hero-play__icon" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2.2 6h7.2M6.6 2.8 9.8 6 6.6 9.2"/></svg>
            </span>
            Our services
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
        <a class="sp-hero-scene__link" href="#magische-cirkel">
          <div class="sp-hero-shadow">
            <div class="sp-hero-frame">
              <img src="{{ '/assets/images/hero/play-hero.jpg' | relative_url }}" alt="An open landscape with a path — room to learn" width="1600" height="900">
            </div>
          </div>
        </a>
        <figcaption>Room to explore, to try and to choose again.</figcaption>
      </figure>
    </div>
    <div class="sp-hero-steps sp-hero-steps--4">
      <article>
        <h3><span>01</span> Room</h3>
        <p>People step out of the daily pressure for a moment.</p>
      </article>
      <article>
        <h3><span>02</span> Reality</h3>
        <p>They stay close to reality.</p>
      </article>
      <article>
        <h3><span>03</span> Safe</h3>
        <p>Making mistakes is allowed, without real harm.</p>
      </article>
      <article>
        <h3><span>04</span> Active</h3>
        <p>Learning becomes active: discover, act, reflect.</p>
      </article>
    </div>
  </section>

  <section class="sp-panel sp-panel--cream" id="magische-cirkel" data-sp="1">
    <div class="sp-inner">
      <span class="sp-eyebrow">Take your team out of survival mode</span>
      <h2>Play: the magic circle of <span class="hl">learning</span></h2>
      <div class="sp-focus-copy">
        <p class="sp-lead">
          In practice, teams make daily choices that affect safety, production, quality or
          efficiency. That is exactly why it is hard to practise new knowledge there directly. The pressure is high, mistakes
          have consequences and there is little room to pause, try or choose again.
        </p>
        <p class="sp-lead">
          People therefore often stay in a practical survival mode: avoid mistakes, limit risks and move
          quickly to the next task. Understandable, but not always helpful when they have to learn something new or
          develop different behaviour.
        </p>
        <p class="sp-lead">
          The alternative is often a passive form of learning: read theory, follow instructions and take tests afterwards.
          That can transfer information, but it does not always help people act more strongly when the situation
          becomes complex.
        </p>
        <p class="sp-lead">
          At Preludens we use Play to create that room to practise. We design a safe learning space with
          clear rules, recognisable situations, focused feedback and enough freedom to explore, try
          and choose again.
        </p>
      </div>
    </div>
  </section>

  <section class="sp-panel sp-panel--navy" data-sp="2">
    <div class="sp-inner">
      <div class="sp-split">
        <div>
          <span class="sp-eyebrow">Homo Ludens: the playing human</span>
          <h2>Play according to <span class="hl">Huizinga</span></h2>
          <p class="sp-lead">
            Johan Huizinga did not see play as a distraction, but as a fundamental way in which people give meaning to
            behaviour, rules and collaboration. Play has its own space. There are clear rules, a beginning and an end.
            Participants step out of daily reality for a while, but they take the experience seriously.
          </p>
          <p class="sp-lead">
            That combination makes Play powerful for learning. It offers freedom to try, structure to keep
            direction and safety to learn from what happens. Play makes learning not only more active, but also safer,
            more recognisable and easier to follow.
          </p>
        </div>
        <figure class="sp-hero-scene">
          <a class="sp-hero-scene__link" href="#magische-cirkel">
            <div class="sp-hero-shadow">
              <div class="sp-hero-frame">
                <img src="{{ '/assets/images/play/magische-cirkel.jpg' | relative_url }}" alt="An open world with a subtle path of light — the magic circle of learning" width="1600" height="900" loading="lazy" decoding="async">
              </div>
            </div>
          </a>
          <figcaption>A space of its own, with rules and an end.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="sp-panel sp-panel--band" data-sp="3">
    <div class="sp-inner">
      <span class="sp-eyebrow">What it delivers</span>
      <h2>What Play <span class="hl">delivers</span></h2>
      <ul class="sp-pain-points sp-pain-points--pairs">
        <li>
          <strong>Experiment safely</strong>
          <span>Play makes it possible to practise without direct consequences in practice. Participants try choices, make mistakes and discover what works — without fear of getting it wrong.</span>
        </li>
        <li>
          <strong>Active involvement</strong>
          <span>In Play a passive stance is hard to keep up. Participants look, choose, respond and act. They do not become spectators of the material, but part of the experience.</span>
        </li>
        <li>
          <strong>A recognisable context</strong>
          <span>With storytelling, realistic scenarios and MicroGames we place knowledge in situations that are recognisable from work. That gives information meaning.</span>
        </li>
        <li>
          <strong>A view of growth</strong>
          <span>Play makes behaviour visible. Choices, progress, scores and feedback show where participants are strong and where they get stuck. Those insights help improve learning experiences.</span>
        </li>
      </ul>
    </div>
  </section>

  <section class="sp-panel sp-panel--navy" data-sp="4">
    <div class="sp-inner">
      <div class="sp-split sp-split--start">
        <div>
          <span class="sp-eyebrow">We use Play more often than we think</span>
          <h2>Why Play also belongs in your daily <span class="hl">work</span></h2>
          <p class="sp-lead">
            We practise conversations before they happen. We turn repeating tasks into small challenges. We try
            something first in a safe setting before we really have to be able to do it. We learn by doing, repeating
            and discovering what works.
          </p>
          <p class="sp-lead">
            The same happens in organisations. Teams have to deal with new rules, processes, responsibilities and
            choices. Giving an explanation alone is often not enough then. People need to be able to explore what a situation asks
            and experience what their actions cause.
          </p>
          <p class="sp-lead">
            Play helps design that room to practise on purpose. It makes learning lighter, but no less serious. Precisely
            because people may try, they become more active, sharper and more confident when it matters in practice.
          </p>
        </div>
        <figure class="sp-aside-quote">
          <blockquote>
            Play is an inseparable aspect of human culture. The spirit of playful competition is, as a social impulse,
            older than culture itself and pervades all life like a veritable ferment.
          </blockquote>
          <figcaption>Johan Huizinga — Homo Ludens</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="sp-panel sp-panel--verhalen" data-sp="5">
    <div class="sp-inner">
      <span class="sp-eyebrow">Homo Ludens: the playing human</span>
      <h2>How Preludens uses <span class="hl">Play</span></h2>
      <p class="sp-lead">
        We do not add play afterwards as a layer on top of the content. We start from reality. Every
        challenge already hides game elements: goals, rules, choices, tension, feedback and consequences. An
        employee has to recognise something. A team has to weigh something. An organisation wants to strengthen certain behaviour.
      </p>
      <p class="sp-lead">
        We call that Find the Game. We look for the game that is already present in practice and make it visible.
        Then we translate that structure into a learning experience with stories, MicroGames, dilemmas or other
        game forms. Play stays recognisable, relevant and directly connected to the situations in which people will
        need to act more strongly.
      </p>
      <p class="sp-lead">
        Not a loose game. Not a trick to make learning more fun. A carefully designed learning route in which people
        practise the choices, knowledge and behaviour that matter.
      </p>
      <div class="sp-actions">
        <a class="btn btn-primary" href="{{ '/play/blog/' | relative_url }}">Read the Play blog</a>
        <a class="btn btn-secondary" href="{{ '/play/in-de-praktijk/' | relative_url }}">Play in practice</a>
      </div>
    </div>
  </section>

  <section class="sp-panel sp-panel--quote" data-sp="6">
    <div class="sp-inner">
      <figure class="sp-quote">
        <blockquote>
          Every time when I work with a customer, somewhere in the process, sooner or later, I see a change in their eyes
          and posture. As if a light has been switched on. That is when I know they have found their game.
        </blockquote>
        <cite>Find the Game — Daan Groen</cite>
      </figure>
    </div>
  </section>

  <section class="sp-panel sp-panel--warm" data-sp="7">
    <div class="sp-inner">
      <h3>Start with a GameStorm</h3>
      <h2>Discover the game in your challenge</h2>
      <p class="sp-lead">
        A good Play approach starts with a sharp exploration. In a GameStorm we explore your learning challenge,
        audience and context. We map which knowledge matters, which behaviour needs to change and where
        tension appears in practice. Then we look for the game mechanisms already hidden in your challenge.
      </p>
      <div class="sp-actions">
        <a class="btn btn-primary" href="{{ '/gamestorm/' | relative_url }}">Start with a GameStorm</a>
        <a class="btn btn-secondary" href="{{ '/contact/' | relative_url }}">Get in touch</a>
      </div>
    </div>
  </section>

  <div class="sp-footer-reveal">
    {% include footer.html %}
  </div>

</div>
