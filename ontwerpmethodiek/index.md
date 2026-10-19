---
layout: default
lang: nl
title: Ontwerpmethodiek
description: De zeven principes achter elk Preludens-ontwerp — inhoudelijk scherp, technisch stevig en altijd gericht op leren dat toepasbaar wordt.
body_class: page-panels
permalink: /ontwerpmethodiek/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Zeven principes achter elk ontwerp{% endcapture %}
{% capture hero_lead %}Deze principes bepalen hoe Daan en Jan-Willem samen ontwerpen: inhoudelijk scherp, technisch stevig en altijd gericht op leren dat in de praktijk toepasbaar wordt.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Plan een GameStorm →" primary_href="/gamestorm/" secondary_label="Terug naar het team" secondary_href="/team/" %}
{% endcapture %}
{% include panels/hero.html kicker="Ontwerpmethodiek" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/ontwerpmethodiek-hero.jpg" figure_alt="Ontwerpers die samen aan een leerervaring werken" figure_href="/gamestorm/" figure_caption="Van leerdoel naar speelbare ervaring." %}

{% capture why_body %}
<h3>Waarom een methodiek</h3>
<h2>Van leerdoel naar een ervaring die blijft hangen</h2>
<p class="sp-lead sp-lead--center">
  Een goede leerervaring ontstaat niet toevallig. We werken vanuit een vaste set principes die ervoor zorgen dat
  elk verhaal, elke keuze en elke MicroGame terug te voeren is op een helder leerdoel — en dat de techniek de
  ervaring versterkt in plaats van in de weg zit.
</p>
{% endcapture %}
{% include panels/panel.html variant="mist" body=why_body %}

{% capture principle_items %}
{% include panels/step.html num="01" title="Gebruik heldere en haalbare doelstellingen" text="Ieder succesvol ontwerp begint met een solide doel. Bepaal wat je wilt bereiken, zorg dat het haalbaar is en stel een manier vast om voortgang te meten. Goede leerdoelen zetten we om naar uitdagingen voor maximale intrinsieke motivatie." %}
{% include panels/step.html num="02" title="Balanceer kennis met skills en geluk" text="De gameplay is gericht op het vergroten van kennis, en succes wordt behaald door die kennis toe te passen. Hoewel skills en geluk onderdeel zijn van gameplay, moet de speler sterk voelen dat voortgang op kennis is gebaseerd." %}
{% include panels/step.html num="03" title="Gebruik mechanismen uit de realiteit" text="Kennis ontstaat wanneer je de context herkent en begrijpt. Hoe dichter we bij de realiteit blijven, hoe groter de kennisretentie. Herkenbare mechanismen maken de gameplay ook toegankelijker en begrijpelijker." %}
{% include panels/step.html num="04" title="Focus op positieve, menselijke emoties" text="Intrinsieke motivatie ontstaat alleen wanneer de speler via emotie betrokken is bij de leerstof. Het gaat om een behoefte om te leren én om af te ronden en te behalen — die emotie hoeft niet eens direct aan de leerdoelen gekoppeld te zijn." %}
{% include panels/step.html num="05" title="Maak besturing robuust" text="Een training moet robuust en zoveel mogelijk bugvrij zijn. De interactie is logisch en de speler kan direct aan de slag zonder verloren te raken. Robuust betekent ook: in het juiste tempo door het object heen werken." %}
{% include panels/step.html num="06" title="Geef duidelijke feedback, zonder afleiding" text="Bij elke actie — goed of fout — volgt direct feedback, zonder vertraging. De feedback is helder en to-the-point, zodat de speler precies weet wat er nu en in de toekomst verwacht wordt." %}
{% include panels/step.html num="07" title="Maak de volgende stap altijd duidelijk" text="De speler weet altijd wat er verwacht wordt, hoe je voortgang maakt en wat je kunt doen om die te verbeteren. Het object voelt logisch en geeft op natuurlijke wijze een gevoel van accomplishment tijdens de training." %}
{% endcapture %}
{% capture principles_body %}
<h2>De zeven principes</h2>
{% include panels/steps.html variant="flow" items=principle_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=principles_body %}

{% capture cta_left %}In één dagdeel vertalen we jouw leeropgave naar een eerste concept — met deze principes als fundament.{% endcapture %}
{% capture cta_right %}Zo zie je meteen hoe onze methodiek in de praktijk werkt.{% endcapture %}
{% include panels/cta.html kicker="Benieuwd hoe dit voor jou uitpakt?" title="Zet de eerste stap met een GameStorm" left=cta_left right=cta_right primary_label="Plan een GameStorm" primary_href="/gamestorm/" secondary_label="Neem contact op" secondary_href="/contact/" %}

{% include panels/footer-reveal.html %}

</div>
