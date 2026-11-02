---
layout: default
lang: en
title: Services
description: E-learning, MicroGame Stories, Dilemma Storytelling and Game Thinking — four routes to make knowledge playable and applicable.
body_class: page-panels
permalink: /diensten/
permalink_lang:
  nl: /diensten/
---

<div class="panel-stack">
{% include panels/clips.html %}
<svg class="sp-hero-clip-def" width="0" height="0" aria-hidden="true">
  <defs>
    <clipPath id="sp-slot-br-clip" clipPathUnits="objectBoundingBox">
      <path d="M0.031 0 H0.969 Q1 0 1 0.027 V0.8 Q1 0.84 0.972 0.868 L0.868 0.972 Q0.84 1 0.8 1 H0.031 Q0 1 0 0.973 V0.027 Q0 0 0.031 0 Z"/>
    </clipPath>
    <clipPath id="sp-step-bl-clip" clipPathUnits="objectBoundingBox">
      <path d="M0.032 0 H0.968 Q1 0 1 0.02 V0.98 Q1 1 0.968 1 H0.2 Q0.16 1 0.132 0.972 L0.028 0.868 Q0 0.84 0 0.8 V0.02 Q0 0 0.032 0 Z"/>
    </clipPath>
  </defs>
</svg>

<style>
  /* Alleen dit conceptblok: kop en alinea's op de linkerkant van de hero. */
  #kennis-hangen .panel__inner {
    width: min(100% - 2rem, var(--max-width));
    padding-inline: 0;
  }

  #kennis-hangen h2,
  #kennis-hangen .sp-aside-split__main {
    text-align: left;
  }

  #onze-diensten h2,
  #onze-diensten h3,
  #onze-diensten p.sp-lead {
    text-align: center;
    margin-inline: auto;
  }

  #onze-diensten .panel__inner {
    padding-bottom: 2.25rem;
  }

  /* Rechte bovenrand, met een kleinere versie van de paneelsnede rechtsboven. */
  #diensten-slots {
    --slot-jump: 22px;
    --slot-run: 26px;
    margin-top: 0;
    clip-path: polygon(
      0 0,
      calc(100% - 11rem - var(--slot-run)) 0,
      calc(100% - 11rem) var(--slot-jump),
      100% var(--slot-jump),
      100% calc(100% - var(--sp-jump)),
      50% calc(100% - var(--sp-jump)),
      calc(50% - var(--sp-run)) 100%,
      0 100%
    );
  }

  #diensten-slots .panel__inner {
    padding-top: 6rem;
    padding-bottom: calc(40px + var(--sp-jump) + 3rem);
  }

  #diensten-slots .diensten-slots {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(1.25rem, 3vw, 2rem);
  }

  #diensten-slots .diensten-slot {
    position: relative;
    height: auto;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.25rem;
    padding: calc(5px + clamp(1.35rem, 2vw, 1.75rem));
    background: var(--color-white);
    border: 0;
    border-radius: 0;
    box-shadow: none;
    filter: drop-shadow(3px 4px 4px color-mix(in srgb, var(--color-brand-navy) 24%, transparent));
    color: var(--color-white);
    clip-path: url("#sp-slot-br-clip");
    transition: transform 0.35s ease;
  }

  #diensten-slots .diensten-slot::before {
    content: "";
    position: absolute;
    inset: 5px;
    z-index: 0;
    background: var(--color-brand-navy);
    clip-path: url("#sp-slot-br-clip");
    pointer-events: none;
  }

  #diensten-slots .diensten-slot > * {
    position: relative;
    z-index: 1;
  }

  #diensten-slots .diensten-slot:hover {
    transform: translateY(-8px);
  }

  @media (prefers-reduced-motion: reduce) {
    #diensten-slots .diensten-slot {
      transition: none;
    }
  }

  #diensten-slots .diensten-slot h3 {
    margin: 0 0 0.55rem;
    text-align: left;
    color: var(--color-white);
  }

  #diensten-slots .diensten-slot h3::after {
    content: "";
    display: block;
    width: 2.4rem;
    height: 2px;
    margin-top: 0.7rem;
    background: var(--color-ink-gold);
  }

  #diensten-slots .diensten-slot h2 {
    margin: 0 0 0.85rem;
    max-width: none;
    text-align: left;
    font-size: clamp(1.85rem, 2.4vw, 2.35rem);
    color: var(--color-white);
  }

  #diensten-slots .diensten-slot p.sp-lead {
    max-width: none;
    margin: 0 0 0.75rem;
    color: var(--color-white);
  }

  #diensten-slots .diensten-slot p.sp-lead:last-child {
    margin-bottom: 0;
  }

  #diensten-slots .diensten-slot .sp-actions {
    margin-top: 0;
  }

  @media (max-width: 720px) {
    #diensten-slots .diensten-slots {
      grid-template-columns: 1fr;
    }
  }

  #route .sp-hero-steps--pyramid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.65rem 1.75rem;
    align-items: stretch;
    width: 100%;
    overflow-x: visible;
    padding-bottom: 0.35rem;
  }

  #route .sp-hero-steps--pyramid article,
  #route .sp-hero-steps--pyramid article:nth-child(n + 4) {
    grid-column: auto;
    margin: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0;
    background: transparent;
    border-radius: 0;
    color: var(--color-white);
  }

  #route .sp-step-face {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: calc(5px + 1.15rem) calc(5px + 1.05rem) calc(5px + 2.75rem) calc(5px + 2.5rem);
    background: var(--color-white);
    clip-path: url("#sp-step-bl-clip");
    filter: drop-shadow(3px 4px 4px color-mix(in srgb, var(--color-brand-navy) 24%, transparent));
    color: var(--color-white);
  }

  #route .sp-step-face::before {
    content: "";
    position: absolute;
    inset: 5px;
    z-index: 0;
    background: var(--color-brand-navy);
    clip-path: url("#sp-step-bl-clip");
    pointer-events: none;
  }

  #route .sp-step-face > * {
    position: relative;
    z-index: 1;
  }

  #route .sp-hero-steps h3 {
    display: block;
    width: 100%;
    margin: 0 0 0.85rem;
    font-size: 1.35rem;
    line-height: 1.25;
    color: var(--color-white);
  }

  #route .sp-hero-steps h3 span {
    color: var(--color-white);
    font-size: 1.15rem;
  }

  #route .sp-hero-steps h3::after {
    background: var(--color-preludens-gold);
  }

  #route .sp-hero-steps p {
    max-width: none;
    font-size: 1.0625rem;
    line-height: 1.65;
    color: var(--color-white);
  }

  #route .sp-hero-steps--pyramid article:not(:last-child)::after {
    content: "→";
    position: absolute;
    z-index: 1;
    top: 50%;
    left: calc(100% + 0.875rem);
    transform: translate(-50%, -50%);
    color: var(--color-brand-navy);
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1;
  }

  #route .sp-hero-steps--pyramid article:nth-child(4)::after {
    content: none;
  }

  @media (max-width: 800px) {
    #route .sp-hero-steps--pyramid {
      grid-template-columns: 1fr;
    }

    #route .sp-hero-steps--pyramid article::after {
      content: none;
    }
  }
</style>

{% capture hero_title %}We develop training that <span class="hl">activates</span> people.{% endcapture %}
{% capture hero_lead %}Preludens turns complex knowledge into interactive learning experiences with story, play and feedback. Teams are challenged to explore situations, activated to make choices and motivated to apply knowledge in practice.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Get in touch →" primary_href="/contact/" secondary_label="Start with a GameStorm" secondary_href="/gamestorm/" %}
{% endcapture %}
{% include panels/hero.html kicker="Services" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/diensten-hero.jpg" figure_alt="A team mapping out a route together" figure_href="/gamestorm/" figure_caption="From knowledge to applicable behaviour." %}

{% capture gap_main %}
<p class="sp-lead">Many learning programmes get stuck at the same point: employees are offered the right information, but forget it over time or do not know how to apply it. Reading theory, watching instructions or taking a test helps transfer knowledge, but it does not by itself make that knowledge stick. For that, people need to process the information actively, recognise it in their own practice and practise with it repeatedly.</p>
<p class="sp-lead">With MicroGame Stories we strengthen knowledge retention by combining storytelling, active challenges, repetition and immediate feedback. Recognisable stories give knowledge context and meaning. Short MicroGames challenge participants to apply that knowledge, make choices and learn from mistakes.</p>
<p class="sp-lead">By repeating exercises and building up the difficulty step by step, knowledge is reinforced further and further. That creates a learning experience in which employees not only understand and remember what matters, but also learn how to use that knowledge at the right moment.</p>
{% endcapture %}
{% capture gap_checks %}
{% include panels/check.html text="Storytelling gives knowledge context and meaning." %}
{% include panels/check.html text="MicroGames make learning active and challenging." %}
{% include panels/check.html text="Immediate feedback strengthens insight and understanding." %}
{% include panels/check.html text="Repetition and variation help knowledge stick better." %}
{% include panels/check.html text="Data makes progress and development visible." %}
{% include panels/check.html text="Reflection connects what is learned to practice." %}
{% endcapture %}
{% capture gap_aside %}
{% include panels/checklist.html label="What our approach adds" items=gap_checks %}
{% endcapture %}
{% capture gap_body %}
<h2>Knowledge that gets applied and that sticks</h2>
{% include panels/aside.html main=gap_main aside=gap_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="kennis-hangen" body=gap_body %}

{% capture routes_body %}
<h3>Four routes to make knowledge playable and applicable</h3>
<h2>Our services</h2>
<p class="sp-lead">Every learning challenge asks for a different form. Sometimes you want to train and embed basic knowledge. Sometimes people need to learn how to handle difficult choices. And sometimes you first need a sharp analysis of behaviour, goals and tensions in practice. That is why Preludens works with four clear routes.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="onze-diensten" body=routes_body %}

{% capture slots_body %}
<div class="diensten-slots">
  <article class="diensten-slot" id="e-learning">
    <div>
      <h3>Offering knowledge clearly and accessibly</h3>
      <h2>E-learning</h2>
      <p class="sp-lead">Not every learning challenge asks for a game. Sometimes a clear, well-structured e-learning module is exactly what is needed to teach employees new knowledge, explain processes or refresh existing skills.</p>
      <p class="sp-lead">With Articulate Rise we develop accessible, interactive e-learning modules in which information is presented clearly and participants learn at their own pace.</p>
    </div>
    {% include panels/actions.html primary_label="More about E-learning →" primary_href="/e-learning/" primary_fixed=true %}
  </article>
  <article class="diensten-slot" id="microgame-stories">
    <div>
      <h3>Short learning experiences with story, play and repetition</h3>
      <h2>MicroGame Stories</h2>
      <p class="sp-lead">MicroGame Stories are short, visual online training modules in which basic knowledge is linked to recognisable work situations. Participants follow a story, make choices and practise along the way with short MicroGames. Each part targets a concrete learning goal. That gives knowledge context, repetition and immediate feedback.</p>
      <p class="sp-lead">A MicroGame Story is a good fit when you want to transfer important knowledge to a larger audience without burdening people with long, passive modules.</p>
    </div>
    {% include panels/actions.html primary_label="More about MicroGame Stories →" primary_href="/diensten/microgame-stories/" primary_fixed=true %}
  </article>
  <article class="diensten-slot" id="dilemma-storytelling">
    <div>
      <h3>Practising with choices that have no simple answer</h3>
      <h2>Dilemma Storytelling</h2>
      <p class="sp-lead">Dilemma Storytelling helps teams explore difficult situations in which several interests play at once. Participants are presented with realistic scenarios and make choices that have consequences. Not every situation has one right answer. Sometimes safety asks for something different than speed. Sometimes customer satisfaction rubs against quality. Sometimes a team needs to learn how to weigh what matters most in that moment.</p>
      <p class="sp-lead">By making choices visible and linking them to consequences, participants learn to look more sharply at their own trade-offs.</p>
    </div>
    {% include panels/actions.html primary_label="More about Dilemma Storytelling →" primary_href="/diensten/dilemma-storytelling/" primary_fixed=true %}
  </article>
  <article class="diensten-slot" id="game-thinking">
    <div>
      <h3>First get a grip on behaviour, goals and game mechanisms</h3>
      <h2>Game Thinking</h2>
      <p class="sp-lead">Game Thinking is our design approach for complex learning and change challenges. We look at a question as if it were a game — not to turn it into a game immediately, but to make visible which goals, rules, choices, tensions, feedback moments and blockers are already present in practice.</p>
      <p class="sp-lead">We call that Find the Game. Together we explore what people need to learn, which behaviour needs to change and where movement is possible in practice. From that analysis a clear blueprint emerges for a learning experience, intervention or serious game.</p>
    </div>
    {% include panels/actions.html primary_label="More about Game Thinking →" primary_href="/diensten/game-thinking/" primary_fixed=true %}
  </article>
</div>
{% endcapture %}
{% include panels/panel.html variant="mist" id="diensten-slots" body=slots_body %}

{% capture route_steps %}
<article><div class="sp-step-face"><h3><span>1</span> Explore</h3><p>We bring your learning challenge into sharp focus. In a first conversation or GameStorm we examine the problem, audience, context and key learning goals.</p></div></article>
<article><div class="sp-step-face"><h3><span>2</span> Sharpen</h3><p>We translate the learning challenge into clear goals and design choices. We make concrete what participants should understand, recognise, choose or apply afterwards.</p></div></article>
<article><div class="sp-step-face"><h3><span>3</span> Gather content</h3><p>You bring the practice knowledge; we make it playable. We collect training, processes, cases and expert knowledge and explore how that knowledge becomes playable.</p></div></article>
<article><div class="sp-step-face"><h3><span>4</span> Choose the right form</h3><p>Want to train basic knowledge? A MicroGame Story. Want to strengthen decisiveness? Dilemma Storytelling. Solution not sharp yet? We start with Game Thinking.</p></div></article>
<article><div class="sp-step-face"><h3><span>5</span> Design</h3><p>We translate knowledge into story, choices and feedback. Together we work towards recognisable situations, fitting game mechanisms and a first storyline.</p></div></article>
<article><div class="sp-step-face"><h3><span>6</span> Develop and test</h3><p>We make the learning experience ready for use: develop, test and improve where needed — from MicroGame Story to blueprint or publishable module.</p></div></article>
<article><div class="sp-step-face"><h3><span>7</span> Deliver and manage</h3><p>You get a learning experience that stays available, findable and improvable — in your own learning environment or via Prepo.</p></div></article>
{% endcapture %}
{% capture route_body %}
<h3>Which route fits your challenge?</h3>
<h2>From first question to playable learning experience</h2>
<p class="sp-lead">Not every challenge asks for the same solution. That is why we do not start with the form, but with the learning task. What do people need to understand, practise or do differently? From that question we determine which route fits: a MicroGame Story, Dilemma Storytelling, Game Thinking or a first GameStorm.</p>
{% include panels/steps.html variant="pyramid" items=route_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="route" body=route_body %}

{% capture cta_left %}Do you have knowledge that needs to stick better? Behaviour that needs to change? Or a complex challenge your team needs to learn to handle?{% endcapture %}
{% capture cta_right %}In a GameStorm we explore together where the learning challenge sits and which form fits.{% endcapture %}
{% include panels/cta.html kicker="Discover which learning route fits your team" title="Take the first step tomorrow" left=cta_left right=cta_right stack=true primary_label="Start with a GameStorm" primary_href="/gamestorm/" secondary_label="Get in touch" secondary_href="/contact/" %}

{% include panels/footer-reveal.html %}

</div>
