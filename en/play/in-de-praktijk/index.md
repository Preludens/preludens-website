---
layout: default
lang: en
title: Play in practice
description: Examples of how Play, GameStorm, and Game Thinking move teams forward.
body_class: page-panels
permalink: /play/in-de-praktijk/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_kicker %}<a href="{{ '/play/' | relative_url }}">Play</a>{% endcapture %}
{% capture hero_title %}Play in practice{% endcapture %}
{% capture hero_lead %}How play, story, and interaction come together in concrete programmes — from workshop to full learning experience.{% endcapture %}
{% include panels/hero.html kicker=hero_kicker title=hero_title lead=hero_lead figure_src="/assets/images/hero/play-hero.jpg" figure_alt="An open world in which someone chooses their own route" figure_href="/play/" figure_caption="From workshop to full learning experience." %}

{% capture story_items %}
{% include panels/step.html title="From obligation to inspiration" text="An organisation turned dry compliance material into a dilemma story with MicroGames. Participants said they recognised the situations and felt more confident making tough trade-offs." %}
{% include panels/step.html title="GameStorm as a starting point" text="In a half-day workshop, two storylines and five learning goals emerged — the foundation for a full MicroGame Story, even when the client was still unsure about next steps." %}
{% include panels/step.html title="Game Thinking in the field" text="A team used game mechanisms from their own work process to clarify an internal change challenge — with a blueprint they could use immediately for communication and training." %}
{% endcapture %}
{% capture story_body %}
{% include panels/steps.html variant="grid" items=story_items %}
{% include panels/actions.html secondary_label="← Back to Play" secondary_href="/play/" secondary2_label="View client stories →" secondary2_href="/verhalen/" %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=story_body %}

{% include panels/footer-reveal.html %}

</div>
