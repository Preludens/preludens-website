---
layout: default
lang: nl
title: GameStorm
description: In één dagdeel brengen we samen jouw leeruitdaging, doelgroep en leerdoelen scherp in beeld — de eerste stap naar een speelbare leerervaring.
body_class: page-panels
permalink: /gamestorm/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Verken de mogelijkheden van game-based leren{% endcapture %}
{% capture hero_lead %}Je hoeft nog niet te weten welke leeroplossing je nodig hebt. In één dagdeel brengen we samen het probleem, de doelgroep en de belangrijkste leerdoelen in kaart — een duidelijke eerste richting, zonder je vast te leggen op een volledig project.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Plan een GameStorm →" primary_href="/contact/" secondary_label="Lees meer over Play" secondary_href="/play/" %}
{% endcapture %}
{% include panels/hero.html kicker="GameStorm" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/gamestorm-hero.jpg" figure_alt="Een sessie waarin een leeropgave samen scherp wordt gemaakt" figure_href="/contact/" figure_caption="Samen de leeropgave scherp maken." %}

{% capture scope_main %}
<p class="sp-lead">Je weet dat basiskennis cruciaal is voor een effectief team. Maar welke kennis is echt belangrijk? In welke situaties moeten mensen die kunnen toepassen? En is game-based leren daarvoor de juiste aanpak?</p>
<p class="sp-lead">Een GameStorm helpt om die vragen te beantwoorden. Juist wanneer de leeropgave nog niet helder is, biedt de sessie een gestructureerde eerste stap — je hoeft dus nog niet te weten welke leeroplossing je nodig hebt.</p>
{% endcapture %}
{% capture scope_checks %}
{% include panels/check.html text="Welk probleem wil je met de leerervaring oplossen?" %}
{% include panels/check.html text="Welke kennis, inzichten of vaardigheden heeft de doelgroep nodig?" %}
{% include panels/check.html text="In welke herkenbare praktijksituaties moet de doelgroep die toepassen?" %}
{% endcapture %}
{% capture scope_aside %}
{% include panels/checklist.html label="Wat we in de sessie scherp maken" items=scope_checks %}
{% endcapture %}
{% capture scope_body %}
<h3>De eerste verkenning</h3>
<h2>Breng je leeropgave scherp in beeld</h2>
{% include panels/aside.html main=scope_main aside=scope_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=scope_body %}

{% capture story_copy %}
<h3>Van leerdoel naar verhaal</h3>
<h2>Een eerste verhaal dat richting geeft</h2>
<p class="sp-lead">Als game-based leren bij jullie past, vertalen we de leeropgave naar een eerste verhaallijn. We gebruiken een herkenbare verhaalstructuur waarin de deelnemer voor een uitdaging komt te staan, keuzes maakt en de gevolgen daarvan ervaart.</p>
<p class="sp-lead">In deze verhaallijn verwerken we meestal vier of vijf centrale leerdoelen. Zo ontstaat een eerste concept dat later kan uitgroeien tot MicroGames, een digitale leerervaring, een stripverhaal of een andere vorm van storytelling.</p>
{% endcapture %}
{% capture story_body %}
{% include panels/media.html src="/assets/images/gamestorm/sessie.jpg" webp="/assets/images/gamestorm/sessie.webp" alt="Een GameStorm-sessie waarin we samen de leeropgave verkennen" ratio="1400 / 933" body=story_copy %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=story_body %}

{% capture result_checks %}
{% include panels/check.html text="een scherpere omschrijving van het probleem;" %}
{% include panels/check.html text="duidelijke en samenhangende leerdoelen;" %}
{% include panels/check.html text="inzicht in de relevante context en praktijksituaties;" %}
{% include panels/check.html text="een eerste verhaallijn of conceptuele richting;" %}
{% include panels/check.html text="advies over een passende vervolgstap." %}
{% endcapture %}
{% capture result_body %}
<h3>Wat levert het op?</h3>
<h2>Een stevig vertrekpunt, na één dagdeel</h2>
<p class="sp-lead sp-lead--center">Na de sessie heb je een concreet resultaat in handen — of je nu doorgaat of niet.</p>
{% include panels/checklist.html label="Wat je na de sessie in handen hebt" columns="two" items=result_checks %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=result_body %}

{% capture price_main %}
<p class="sp-lead">Een GameStorm duurt één dagdeel, vindt plaats op locatie en kost €500. Besluit je daarna met Preludens verder te gaan, dan wordt dit bedrag volledig opgenomen in de projectkosten.</p>
<p class="sp-lead">Ook zonder vervolgproject houd je een bruikbaar resultaat over: de aangescherpte leeropgave, leerdoelen en eerste conceptuele richting kun je gebruiken om intern verder te werken of een andere stap te kiezen.</p>
{% endcapture %}
{% capture price_aside %}
{% include panels/price.html amount="€500" meta="één dagdeel · op locatie" note="Volledig verrekend bij een vervolgtraject." %}
{% endcapture %}
{% capture price_body %}
<h3>Laagdrempelig beginnen</h3>
<h2>Een overzichtelijke eerste investering</h2>
{% include panels/aside.html main=price_main aside=price_aside %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=price_body %}

{% capture cta_left %}In een GameStorm onderzoeken we samen het probleem, de doelgroep en de gewenste verandering.{% endcapture %}
{% capture cta_right %}Je krijgt een concrete eerste richting, zonder je direct vast te leggen op een volledig project.{% endcapture %}
{% include panels/cta.html kicker="Zet de eerste stap" title="Ontdek welke leerroute bij jouw organisatie past" left=cta_left right=cta_right stack=true primary_label="Plan een GameStorm" primary_href="/contact/" secondary_label="Lees meer over Play" secondary_href="/play/" %}

{% include panels/footer-reveal.html %}

</div>
