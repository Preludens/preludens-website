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
    <clipPath id="sp-step-bl-clip" clipPathUnits="objectBoundingBox">
      <path d="M0.032 0 H0.968 Q1 0 1 0.02 V0.98 Q1 1 0.968 1 H0.2 Q0.16 1 0.132 0.972 L0.028 0.868 Q0 0.84 0 0.8 V0.02 Q0 0 0.032 0 Z"/>
    </clipPath>
  </defs>
</svg>

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
<div class="diensten-lijst">
  <a class="diensten-regel" id="e-learning" {% static_href %}href="{{ site.baseurl }}/e-learning/"{% endstatic_href %}>
    <h3 class="diensten-regel__naam">E-learning</h3>
    <div class="diensten-regel__tekst">
      <p class="sp-lead">Clear modules in Articulate Rise, where participants work through the material at their own pace.</p>
      <p class="sp-lead diensten-regel__keuze"><b>Choose this when</b> you want to transfer knowledge or explain a process.</p>
    </div>
    <span class="diensten-regel__pijl" aria-hidden="true">&rarr;</span>
  </a>
  <a class="diensten-regel" id="microgame-stories" {% static_href %}href="{{ site.baseurl }}/diensten/microgame-stories/"{% endstatic_href %}>
    <h3 class="diensten-regel__naam">MicroGame Stories</h3>
    <div class="diensten-regel__tekst">
      <p class="sp-lead">A story from your own practice with short MicroGames in between, so knowledge is practised right away.</p>
      <p class="sp-lead diensten-regel__keuze"><b>Choose this when</b> you want to reach a large group without long modules.</p>
    </div>
    <span class="diensten-regel__pijl" aria-hidden="true">&rarr;</span>
  </a>
  <a class="diensten-regel" id="dilemma-storytelling" {% static_href %}href="{{ site.baseurl }}/diensten/dilemma-storytelling/"{% endstatic_href %}>
    <h3 class="diensten-regel__naam">Dilemma Storytelling</h3>
    <div class="diensten-regel__tekst">
      <p class="sp-lead">Realistic scenarios in which every choice has consequences that participants see for themselves.</p>
      <p class="sp-lead diensten-regel__keuze"><b>Choose this when</b> several interests play at once and there is no simple answer.</p>
    </div>
    <span class="diensten-regel__pijl" aria-hidden="true">&rarr;</span>
  </a>
  <a class="diensten-regel" id="game-thinking" {% static_href %}href="{{ site.baseurl }}/diensten/game-thinking/"{% endstatic_href %}>
    <h3 class="diensten-regel__naam">Game Thinking</h3>
    <div class="diensten-regel__tekst">
      <p class="sp-lead">Find the Game: we draw out the goals, rules and choices that are already there in practice.</p>
      <p class="sp-lead diensten-regel__keuze"><b>Choose this when</b> the form that fits your question is not settled yet.</p>
    </div>
    <span class="diensten-regel__pijl" aria-hidden="true">&rarr;</span>
  </a>
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
