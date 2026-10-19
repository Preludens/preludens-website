---
layout: default
lang: nl
title: Impact
description: Zichtbaar resultaat door storytelling, MicroGames en data-gedreven verbetering.
body_class: page-panels
permalink: /impact/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Leren dat zichtbaar resultaat oplevert{% endcapture %}
{% capture hero_lead %}We meten wat ertoe doet: betrokkenheid, besluitvaardigheid en gedragsverandering in de praktijk.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Bekijk de verhalen →" primary_href="/verhalen/" secondary_label="Neem contact op" secondary_href="/contact/" %}
{% endcapture %}
{% include panels/hero.html kicker="Impact" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/impact-hero.jpg" figure_alt="Een route waarop voortgang zichtbaar wordt" figure_href="/verhalen/" figure_caption="Merkbare verandering, niet alleen cijfers." %}

{% capture impact_items %}
{% include panels/value.html icon="📈" title="Activeren" text="MicroGames en dilemma's zetten kennis direct om in handelen — met directe feedback per keuze." %}
{% include panels/value.html icon="🧠" title="Behouden" text="Verhaal en herhaling verankeren inzicht op een manier die aansluit bij hoe mensen écht leren." %}
{% include panels/value.html icon="📊" title="Verbeteren" text="Data uit interacties helpt om gericht bij te sturen op leerdoelen en gedrag." %}
{% include panels/value.html icon="✨" title="Motiveren" text="Intrinsieke betrokkenheid door relevante scenario's en een veilige speelruimte." %}
{% endcapture %}
{% capture impact_body %}
{% include panels/values.html label="Waar leren resultaat oplevert" columns="two" items=impact_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=impact_body %}

{% capture closing_body %}
<p class="sp-lead">Impact betekent voor ons niet alleen afrondingspercentages, maar merkbare verandering in hoe mensen afwegen, kiezen en handelen wanneer het erop aankomt.</p>
{% include panels/actions.html secondary_label="Bekijk verhalen van opdrachtgevers →" secondary_href="/verhalen/" %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=closing_body %}

{% include panels/footer-reveal.html %}

</div>
