---
layout: default
lang: nl
title: Play in de praktijk
description: Voorbeelden van hoe Play, GameStorm en Game Thinking teams in beweging zetten.
body_class: page-panels
permalink: /play/in-de-praktijk/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_kicker %}<a href="{{ '/play/' | relative_url }}">Play</a>{% endcapture %}
{% capture hero_title %}Play in de praktijk{% endcapture %}
{% capture hero_lead %}Hoe spel, verhaal en interactie samenkomen in concrete trajecten — van workshop tot volledige leerervaring.{% endcapture %}
{% include panels/hero.html kicker=hero_kicker title=hero_title lead=hero_lead figure_src="/assets/images/hero/play-hero.jpg" figure_alt="Een open wereld waarin iemand een eigen route kiest" figure_href="/play/" figure_caption="Van workshop tot volledige leerervaring." %}

{% capture story_items %}
{% include panels/step.html title="Van verplichting naar inspiratie" text="Een organisatie zette droog compliance-materiaal om in een dilemma-verhaal met MicroGames. Medewerkers gaven aan dat ze situaties herkenden en sneller durfden te kiezen in lastige afwegingen." %}
{% include panels/step.html title="GameStorm als startpunt" text="Tijdens een dagdeel workshop ontstonden twee verhaallijnen en vijf leerdoelen — de basis voor een volledige MicroGame Story, ook toen de opdrachtgever nog twijfelde over de vervolgstappen." %}
{% include panels/step.html title="Game Thinking in de praktijk" text="Een team gebruikte game-mechanismen uit hun eigen werkproces om een intern change-vraagstuk helderder te maken — met een blauwdruk die direct inzetbaar was voor communicatie en training." %}
{% endcapture %}
{% capture story_body %}
{% include panels/steps.html variant="grid" items=story_items %}
{% include panels/actions.html secondary_label="← Terug naar Play" secondary_href="/play/" secondary2_label="Bekijk klantverhalen →" secondary2_href="/verhalen/" %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=story_body %}

{% include panels/footer-reveal.html %}

</div>
