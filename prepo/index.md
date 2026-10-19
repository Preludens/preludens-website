---
layout: default
lang: nl
title: Prepo
description: Prepo (Preludens Portal) — één omgeving voor het gebruiken, beheren en doorontwikkelen van je MicroGames en Stories.
body_class: page-panels
permalink: /prepo/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Eén omgeving voor gebruik, beheer en doorontwikkeling{% endcapture %}
{% capture hero_lead %}Prepo (Preludens Portal) is de beheer- en distributieomgeving van Preludens. Het voorkomt dat MicroGames en Stories na oplevering versnipperen over losse links, bestanden, mails en versies. Prepo brengt projecten, producten, distributie, feedback, statistieken, versiebeheer en support samen in één omgeving.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Vraag een demo aan →" primary_href="/contact/" secondary_label="Bekijk onze diensten" secondary_href="/diensten/" %}
{% endcapture %}
{% include panels/hero.html kicker="Prepo · Preludens Portal" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/prepo-hero.jpg" figure_alt="Eén omgeving waarin leerervaringen samenkomen" figure_href="/contact/" figure_caption="Alles bij elkaar, ook na de oplevering." %}

{% capture grip_main %}
<p class="sp-lead">Preludens helpt niet alleen bij het ontwerpen van speelbare leerervaringen. We denken ook mee over hoe die ervaringen gebruikt, beheerd en verbeterd worden. Daarom sluit Prepo logisch aan op onze aanpak. Zo blijven jouw leerervaringen niet alleen speelbaar, maar ook vindbaar, beheersbaar en doorontwikkelbaar.</p>
<p class="sp-lead">Na de lancering moeten MicroGames en Stories beschikbaar blijven, versies beheerd worden en feedback ergens terechtkomen. Resultaten moeten inzicht geven, en wanneer er iets verandert moet de leerervaring kunnen meegroeien.</p>
<p class="sp-lead">Met Prepo pas je zelf de teksten in je SCORM-bestanden aan. Daarna download je de bijgewerkte SCORM-versie en plaats je die eenvoudig in je eigen LMS. Zo houd je meer grip op je leercontent, zonder dat elke tekstwijziging een nieuw ontwikkeltraject hoeft te worden.</p>
{% endcapture %}
{% capture grip_checks %}
{% include panels/check.html text="Projecten en producten overzichtelijk bij elkaar." %}
{% include panels/check.html text="Distributie via centrale, publieke links." %}
{% include panels/check.html text="Feedback en support gestructureerd verzameld." %}
{% include panels/check.html text="Statistieken en versiebeheer op één plek." %}
{% include panels/check.html text="SCORM files bewerken en downloaden." %}
{% endcapture %}
{% capture grip_aside %}
{% include panels/checklist.html label="Wat Prepo bij elkaar brengt" items=grip_checks %}
{% endcapture %}
{% capture grip_body %}
<h3>Distributie · Beheer · Support</h3>
<h2>Houd grip op je MicroGames en Stories via de Preludens Portal (Prepo)</h2>
{% include panels/aside.html main=grip_main aside=grip_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=grip_body %}

{% capture included_copy %}
<h3>Tijdens én na de oplevering</h3>
<h2>Drie maanden inbegrepen bij nieuwe producten</h2>
<p class="sp-lead">Bij nieuwe MicroGames en Stories krijgen klanten na oplevering standaard drie maanden gratis toegang tot Prepo. In die periode kan de leerervaring worden gelanceerd, getest, gebruikt en gevolgd, met ruimte om feedback te verzamelen en eerste inzichten te bekijken.</p>
<p class="sp-lead"><strong>Daarna flexibel verlengen.</strong> Met een Prepo-licentie behoud je toegang tot de beheeromgeving, eventueel uitgebreid met verlengde support, versiebeheer, updates, rapportages of doorontwikkeling.</p>
{% endcapture %}
{% capture included_body %}
{% include panels/media.html src="/assets/images/prepo/statistieken.jpg" webp="/assets/images/prepo/statistieken.webp" alt="Prepo-dashboard met projectoverzicht en statistieken" width="1400" height="875" ratio="1400 / 875" body=included_copy %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=included_body %}

{% capture control_copy %}
<h3>Zelfstandig aanpassen en publiceren</h3>
<h2>Houd zelf grip op inhoud, versie en distributie</h2>
<p class="sp-lead">Via Prepo pas je teksten in MicroGames en Stories zelf aan, zonder dat Preludens iedere wijziging hoeft door te voeren. Na een aanpassing download je direct een nieuw SCORM-bestand voor je eigen LMS, of stel je de leerervaring beschikbaar via een publieke Prepo-link.</p>
<p class="sp-lead">Zo vervalt bij eenvoudige wijzigingen de tussenstap via Preludens en houd je zelf grip op de inhoud, de actieve versie en de distributie.</p>
{% endcapture %}
{% capture control_body %}
{% include panels/media.html src="/assets/images/prepo/editor.jpg" webp="/assets/images/prepo/editor.webp" alt="De Prepo-editor waarin je teksten in MicroGames en Stories zelf aanpast" width="1400" height="875" ratio="1400 / 875" reverse=true body=control_copy %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=control_body %}

{% capture feature_items %}
{% include panels/step.html num="1" title="Overzicht van projecten en producten" text="Zie welke MicroGames, Stories of andere leerervaringen beschikbaar zijn, bij welk project ze horen en welke status ze hebben." %}
{% include panels/step.html num="2" title="Testomgeving en aansturen testers" text="Nieuwe versies worden eerst veilig getest voordat ze breed worden gedeeld, zodat deelnemers nooit met een onafgeronde versie werken." %}
{% include panels/step.html num="3" title="Distributie via publieke links" text="MicroGames en Stories worden centraal aangeboden, zodat gebruikers weten waar ze moeten zijn en organisaties grip houden." %}
{% include panels/step.html num="4" title="Leaderboard voor spelers" text="Waar passend maakt een leaderboard voortgang, scores of prestaties zichtbaar — bewust ingezet als het past bij leerdoel en doelgroep." %}
{% include panels/step.html num="5" title="Feedback en ticketsysteem" text="Inhoudelijke opmerkingen, technische meldingen en supportvragen worden gestructureerd verzameld in plaats van in losse mails." %}
{% include panels/step.html num="6" title="Beheer van MicroGames, Stories en versies" text="Versiebeheer houdt duidelijk welke versie actueel is, wat er gewijzigd is en welke versie deelnemers gebruiken." %}
{% include panels/step.html num="7" title="Inzicht in statistieken en gebruik" text="Deelname, voortgang, scores en activiteit maken zichtbaar waar deelnemers goed doorheen gaan en waar aandacht nodig is." %}
{% include panels/step.html num="8" title="Downloaden van bestanden in eigen beheer" text="Exports, bronbestanden, rapportages en documentatie blijven vindbaar en gekoppeld aan de juiste leerervaring." %}
{% include panels/step.html num="9" title="Support op producten" text="Support blijft gekoppeld aan het product, de versie en de organisatie, zodat vragen eenvoudig te beantwoorden zijn." %}
{% endcapture %}
{% capture feature_body %}
<h3>Negen functies voor grip na oplevering</h3>
<h2>Alles om je leerervaring goed te beheren</h2>
<p class="sp-lead">Voor deelnemers zijn leerervaringen toegankelijk en overzichtelijk beschikbaar. Voor organisaties betekent Prepo meer grip op gebruik, voortgang, beheer en doorontwikkeling.</p>
{% include panels/steps.html variant="grid" items=feature_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=feature_body %}

{% capture why_main %}
<p class="sp-lead">Veel leerproducten beginnen overzichtelijk: een eerste versie, een duidelijke link en een groep deelnemers. Maar na verloop van tijd ontstaat versnippering: nieuwe versies, feedback via mail en documenten, verspreide bestanden, rondgaande testlinks en statistieken die lastig terug te vinden zijn.</p>
<p class="sp-lead">Prepo voorkomt dat beheer een losse verzameling afspraken, bestanden en links wordt. Het brengt structuur aan rondom de leerervaring: welke producten actief zijn, welke versie gebruikt wordt, waar feedback binnenkomt en hoe deelnemers de MicroGames of Stories bereiken.</p>
{% endcapture %}
{% capture why_aside %}
{% include panels/figure.html src="/assets/images/prepo/editor.jpg" webp="/assets/images/prepo/editor.webp" alt="Overzicht binnen Prepo" width="1400" height="875" ratio="1400 / 875" %}
{% endcapture %}
{% capture why_body %}
<h3>Waarom Prepo nodig is</h3>
<h2>Van losse oplevering naar blijvend overzicht</h2>
{% include panels/aside.html main=why_main aside=why_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=why_body %}

{% capture who_checks %}
{% include panels/check.html text="meerdere MicroGames of Stories tegelijk wilt inzetten en beheren;" %}
{% include panels/check.html text="leerervaringen beschikbaar wilt houden voor nieuwe deelnemers;" %}
{% include panels/check.html text="versies wilt beheren;" %}
{% include panels/check.html text="feedback gestructureerd wilt verzamelen;" %}
{% include panels/check.html text="inzicht wilt krijgen in gebruik en voortgang;" %}
{% include panels/check.html text="support wilt verlengen na oplevering;" %}
{% include panels/check.html text="bestanden en documentatie overzichtelijk wilt bewaren;" %}
{% include panels/check.html text="leerervaringen wilt blijven verbeteren." %}
{% endcapture %}
{% capture who_body %}
<h3>Voor wie is Prepo bedoeld?</h3>
<h2>Voor organisaties die hun leerervaring serieus willen beheren</h2>
<p class="sp-lead">Prepo is vooral waardevol wanneer een MicroGame, Story of leerroute langer gebruikt wordt dan een korte campagne of eenmalige pilot. Bijvoorbeeld wanneer je:</p>
{% include panels/checklist.html label="Wanneer Prepo waardevol is" columns="two" items=who_checks %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=who_body %}

{% capture cta_left %}Met Prepo blijven je MicroGames en Stories beschikbaar, vindbaar en beheersbaar.{% endcapture %}
{% capture cta_right %}Met grip op distributie, feedback, versies, statistieken en support vanuit één omgeving.{% endcapture %}
{% include panels/cta.html kicker="Klaar om grip te houden?" title="Geef je leerervaring ruimte om verder te groeien" left=cta_left right=cta_right stack=true primary_label="Vraag een demo aan" primary_href="/contact/" secondary_label="Bekijk onze diensten" secondary_href="/diensten/" %}

{% include panels/footer-reveal.html %}

</div>
