---
layout: default
lang: en
title: GameStorm
description: In a single half-day we map your learning challenge, audience and learning goals together — the first step towards a playable learning experience.
body_class: page-panels
permalink: /gamestorm/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Explore the possibilities of game-based learning{% endcapture %}
{% capture hero_lead %}You don't need to know which learning solution you need yet. In a single half-day we map the problem, the audience and the key learning goals together — a clear first direction, without committing to a full project.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Book a GameStorm →" primary_href="/contact/" secondary_label="Read more about Play" secondary_href="/play/" %}
{% endcapture %}
{% include panels/hero.html kicker="GameStorm" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/gamestorm-hero.jpg" figure_alt="A session in which a learning challenge is brought into focus together" figure_href="/contact/" figure_caption="Bringing the learning challenge into focus." %}

{% capture scope_main %}
<p class="sp-lead">You know that foundational knowledge is crucial for an effective team. But which knowledge really matters? In which situations do people need to apply it? And is game-based learning the right approach?</p>
<p class="sp-lead">A GameStorm helps answer those questions. Precisely when the learning challenge isn't clear yet, the session offers a structured first step — so you don't need to know which learning solution you need yet.</p>
{% endcapture %}
{% capture scope_checks %}
{% include panels/check.html text="What problem do you want the learning experience to solve?" %}
{% include panels/check.html text="What knowledge, insights or skills does the audience need?" %}
{% include panels/check.html text="In which recognisable real-world situations should they apply them?" %}
{% endcapture %}
{% capture scope_aside %}
{% include panels/checklist.html label="What we bring into focus during the session" items=scope_checks %}
{% endcapture %}
{% capture scope_body %}
<h3>The first exploration</h3>
<h2>Bring your learning challenge into focus</h2>
{% include panels/aside.html main=scope_main aside=scope_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=scope_body %}

{% capture story_copy %}
<h3>From learning goal to story</h3>
<h2>A first story that sets direction</h2>
<p class="sp-lead">If game-based learning fits your case, we translate the learning challenge into a first storyline. We use a recognisable narrative structure in which the participant faces a challenge, makes choices and experiences the consequences.</p>
<p class="sp-lead">This storyline usually weaves in four or five central learning goals. That creates a first concept that can later grow into MicroGames, a digital learning experience, a comic story or another form of storytelling.</p>
{% endcapture %}
{% capture story_body %}
{% include panels/media.html src="/assets/images/gamestorm/sessie.jpg" webp="/assets/images/gamestorm/sessie.webp" alt="A GameStorm session where we explore the learning challenge together" ratio="1400 / 933" body=story_copy %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=story_body %}

{% capture result_checks %}
{% include panels/check.html text="a sharper description of the problem;" %}
{% include panels/check.html text="clear and coherent learning goals;" %}
{% include panels/check.html text="insight into the relevant context and real-world situations;" %}
{% include panels/check.html text="a first storyline or conceptual direction;" %}
{% include panels/check.html text="advice on a fitting next step." %}
{% endcapture %}
{% capture result_body %}
<h3>What does it deliver?</h3>
<h2>A solid starting point, after one half-day</h2>
<p class="sp-lead sp-lead--center">After the session you hold a concrete result in your hands — whether you continue or not.</p>
{% include panels/checklist.html label="What you hold after the session" columns="two" items=result_checks %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=result_body %}

{% capture price_main %}
<p class="sp-lead">A GameStorm lasts one half-day, takes place on location and costs €500. If you decide to continue with Preludens afterwards, this amount is fully included in the project costs.</p>
<p class="sp-lead">Even without a follow-up project you keep a usable result: the sharpened learning challenge, learning goals and first conceptual direction can be used to work on internally or to choose a different next step.</p>
{% endcapture %}
{% capture price_aside %}
{% include panels/price.html amount="€500" meta="one half-day · on location" note="Fully credited against a follow-up project." %}
{% endcapture %}
{% capture price_body %}
<h3>Start with a low threshold</h3>
<h2>A manageable first investment</h2>
{% include panels/aside.html main=price_main aside=price_aside %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=price_body %}

{% capture cta_left %}In a GameStorm we explore the problem, the audience and the desired change together.{% endcapture %}
{% capture cta_right %}You get a concrete first direction, without committing to a full project.{% endcapture %}
{% include panels/cta.html kicker="Take the first step" title="Discover which learning route fits your organisation" left=cta_left right=cta_right stack=true primary_label="Book a GameStorm" primary_href="/contact/" secondary_label="Read more about Play" secondary_href="/play/" %}

{% include panels/footer-reveal.html %}

</div>
