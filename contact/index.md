---
layout: default
lang: nl
title: Contact
description: Neem contact op met Preludens — van GameStorm tot eerste hoofdstuk of volledige speelbare leerervaring.
body_class: page-panels
permalink: /contact/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Zet je leeropgave om in een verhaal dat mensen actief meeneemt{% endcapture %}
{% capture hero_lead %}Heb je kennis die beter moet blijven hangen, gedrag dat moet veranderen of een vaardigheid die mensen moeten oefenen? Vertel ons waar je tegenaan loopt. We denken graag mee over een passende route: van GameStorm tot eerste hoofdstuk of volledige speelbare leerervaring.{% endcapture %}
{% include panels/hero.html kicker="Contact" title=hero_title lead=hero_lead figure_src="/assets/images/hero/contact-hero.jpg" figure_alt="Een open landschap met een route naar de horizon" figure_href="/gamestorm/" figure_caption="Vertel ons waar je tegenaan loopt." %}

{% capture contact_items %}
{% include panels/value.html title="Preludens B.V." text="KVK: 99042827<br>Btw-id: NL868763664B01" %}
{% include panels/value.html title="Algemeen" text="E-mail: <a href=\"mailto:info@preludens.nl\">info@preludens.nl</a><br>Telefoon: <a href=\"tel:+31154042027\">+31 15 404 202 7</a>" %}
{% include panels/value.html title="Support" text="E-mail: <a href=\"mailto:support@preludens.nl\">support@preludens.nl</a><br>Telefoon: <a href=\"tel:+31154042028\">+31 15 404 202 8</a>" %}
{% include panels/value.html title="Bezoek" text="Alleen op afspraak." %}
{% endcapture %}
{% capture talk_body %}
<h3>Voor wie al een vraag heeft of wil sparren</h3>
<h2>Start het gesprek</h2>
<p class="sp-lead">Wil je een leeropgave verkennen, een vraag stellen of samen kijken welke route past bij jouw organisatie? Neem gerust contact op. We denken graag met je mee.</p>
{% include panels/values.html label="Contactgegevens van Preludens" columns="two" items=contact_items %}
<p class="sp-lead">Stuur een mail naar <a href="mailto:info@preludens.nl">info@preludens.nl</a>. We nemen contact met je op om samen te kijken welke vervolgstap logisch is.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" body=talk_body %}

{% capture start_main %}
<h3>Start met een GameStorm</h3>
<p class="sp-lead">Een creatieve workshop van een dagdeel waarin we jouw leeropgave verkennen en vertalen naar een eerste richting. Je krijgt meer grip op doelgroep, leerdoelen, verhaal en mogelijke spelmechanismen.</p>
{% include panels/actions.html secondary_label="Meer over GameStorm" secondary_href="/gamestorm/" %}
{% endcapture %}
{% capture start_aside %}
<h3>Of begin klein met één hoofdstuk</h3>
<p class="sp-lead">Ontwikkel in één maand een eerste MicroGame Story-hoofdstuk rond één vaardigheid of leerdoelcluster. Zo ervaar je snel hoe verhaal, keuzes en feedback jouw inhoud speelbaar maken.</p>
{% include panels/actions.html secondary_label="Meer over één hoofdstuk" secondary_href="/diensten/#microgame-stories" %}
{% endcapture %}
{% capture start_body %}
<h3>De missie van Preludens is om de drempel naar game-based leren te verlagen</h3>
<h2>Hoe kun je laagdrempelig starten?</h2>
{% include panels/aside.html variant="even" main=start_main aside=start_aside %}
<h3>Laat kort weten waar je tegenaan loopt</h3>
{% include panels/actions.html primary_label="Stuur een mail naar info@preludens.nl →" primary_href="mailto:info@preludens.nl" %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=start_body %}

<!-- TODO [WACHTEN OP FOTO]: vervang gamestorm/sessie.* door een foto van jullie samen (TU Twente-project) -->
{% capture expect_copy %}
<h3>Voor wie een leeropgave wil verkennen en richting wil krijgen</h3>
<h2>Wat kun je verwachten?</h2>
<p class="sp-lead">We beginnen met een kennismaking. Daarin brengen we je vraagstuk, doelgroep en kennisbehoefte in kaart. Je hoeft nog geen uitgewerkt plan te hebben; juist de eerste verkenning helpt om scherp te krijgen waar de leerervaring op moet aansluiten.</p>
<p class="sp-lead">Daarna kunnen we in een GameStorm de belangrijkste verhalen, vaardigheden en leerdoelen samen ontwerpen. Vanuit die richting werken we toe naar een leerervaring met herkenbare situaties, keuzes, feedback en spelmechanismen die passen bij de praktijk.</p>
<p class="sp-lead">Als de richting staat, ontwerpen en ontwikkelen we de leerervaring. We testen, verbeteren en bereiden de oplevering voor. Afhankelijk van de gekozen route kan de leerervaring daarna worden gebruikt in je eigen LMS of beschikbaar worden gemaakt via Prepo.</p>
{% endcapture %}
{% capture expect_body %}
{% include panels/media.html src="/assets/images/gamestorm/sessie.jpg" webp="/assets/images/gamestorm/sessie.webp" alt="Kennismaking en verkenning van een leeropgave" ratio="1400 / 933" body=expect_copy %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=expect_body %}

{% capture route_checks %}
{% include panels/check.html text="We maken kennis en brengen je leerbehoefte in kaart." %}
{% include panels/check.html text="In een GameStorm vertalen we vraagstuk, doelgroep en leerdoelen naar een eerste richting." %}
{% include panels/check.html text="We ontwerpen een verhaal, keuzes, feedback en spelmechanismen die passen bij de praktijk." %}
{% include panels/check.html text="We ontwikkelen, testen en verbeteren de leerervaring." %}
{% include panels/check.html text="Na oplevering zorgen we voor distributie, beheer en support via je eigen LMS of via Prepo." %}
{% endcapture %}
{% capture route_body %}
<h3>De route in het kort</h3>
<h2>Van kennismaking tot beheersbare oplevering</h2>
{% include panels/checklist.html label="De route in het kort" columns="two" items=route_checks %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=route_body %}

{% capture prepo_copy %}
<p class="sp-lead">Via Prepo blijven MicroGames en Stories beschikbaar, vindbaar en goed te beheren. Je houdt grip op distributie, feedback, versies, statistieken, bestanden en support vanuit één omgeving.</p>
<p class="sp-lead">Bij nieuwe MicroGames en Stories is drie maanden toegang tot Prepo inbegrepen. In die periode kan de leerervaring rustig worden gelanceerd, getest, gevolgd en waar nodig verbeterd.</p>
{% include panels/actions.html primary_label="Meer over Prepo →" primary_href="/prepo/" %}
{% endcapture %}
{% capture prepo_body %}
<h3>Na oplevering blijft de leerervaring beheersbaar</h3>
<h2>Een sterke leerervaring stopt niet bij de lancering</h2>
{% include panels/media.html src="/assets/images/prepo/overzicht.jpg" webp="/assets/images/prepo/overzicht.webp" alt="Prepo-overzicht voor beheer na oplevering" ratio="1400 / 875" reverse=true body=prepo_copy %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=prepo_body %}

{% include panels/footer-reveal.html %}

</div>
