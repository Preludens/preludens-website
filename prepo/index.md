---
layout: default
lang: nl
title: "Prepo: MicroGames aanbieden en beheren"
description: Bied MicroGames en interactieve leerervaringen aan met Prepo. Beheer content, verzamel feedback en krijg inzicht in gebruik en voortgang.
body_class: page-panels
permalink: /prepo/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_actions %}
<p class="sp-lead">Met <strong>Prepo, de Preludens Portal</strong>, breng je gebruik, beheer en doorontwikkeling samen in één omgeving.</p>
<p class="sp-lead">Je beheert je MicroGames en Stories, verzamelt feedback, volgt gebruik en houdt grip op bestanden, versies en support. Zo stopt een leerervaring niet bij oplevering, maar blijft ze beschikbaar, vindbaar en beheersbaar.</p>
{% include panels/actions.html primary_label="Vraag een demo aan" primary_href="/contact/" secondary_label="Ontdek de mogelijkheden" secondary_href="#mogelijkheden" %}
{% endcapture %}
{% capture hero_title %}Prepo: jouw leerervaringen op <span class="hl">één plek</span>{% endcapture %}
{% capture hero_lead %}Eén omgeving voor distributie, beheer en doorontwikkeling van MicroGames en Stories.{% endcapture %}
{% capture hero_lead2 %}Je hebt een interactieve leerervaring ontwikkeld. De inhoud klopt, de eerste deelnemers kunnen aan de slag en de lancering staat gepland. Maar wat gebeurt er daarna? Hoe houd je overzicht over versies? Waar komt feedback terecht? Hoe krijgen nieuwe deelnemers toegang? En hoe blijft de leerervaring actueel wanneer de inhoud verandert?{% endcapture %}
{% include panels/hero.html kicker="Prepo · Preludens Portal" title=hero_title lead=hero_lead lead2=hero_lead2 actions=hero_actions figure_src="/assets/images/hero/prepo-hero.jpg" figure_alt="Het Prepo-overzicht, met projecten, versies en tickets" figure_href="#overzicht" figure_caption="Beschikbaar, ook na de oplevering." %}

{% capture recognize_body %}
<h2>Een leerervaring is niet klaar bij de lancering</h2>
<p class="sp-lead">Een nieuwe MicroGame of Story begint vaak overzichtelijk. Er is een eerste versie, een duidelijke link en een groep deelnemers die ermee aan de slag gaat.</p>
<p class="sp-lead">Na verloop van tijd verandert er iets. Er komt nieuwe inhoud. Een procedure wordt aangepast. Een deelnemer meldt een probleem. Er ontstaat behoefte aan statistieken, of een nieuwe groep medewerkers moet toegang krijgen.</p>
<p class="sp-lead">Langzaam raken bestanden, links en feedback verspreid. De nieuwste versie staat ergens anders dan de vorige. Vragen komen binnen via verschillende kanalen. En het is niet altijd duidelijk welke versie daadwerkelijk wordt gebruikt.</p>
<p class="sp-lead">Een goede leerervaring verdient ook aandacht <strong>tijdens het gebruik</strong>.</p>
<p class="sp-lead">Daarom ontwikkelde Preludens Prepo: een centrale omgeving waarin je grip houdt op de producten die je hebt laten ontwikkelen, en op de manier waarop ze worden gebruikt, beheerd en verbeterd.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="na-oplevering" body=recognize_body %}

{% capture what_copy %}
<ul class="sp-values sp-values--two" aria-label="Wat Prepo bij elkaar brengt">
  <li><strong>Overzicht</strong> <span>Projecten, leerproducten en hun status.</span></li>
  <li><strong>Testen en publiceren</strong> <span>Nieuwe versies eerst controleren, daarna delen.</span></li>
  <li><strong>Distributie</strong> <span>Publieke links, of een SCORM-bestand voor je eigen LMS.</span></li>
  <li><strong>Versies</strong> <span>Duidelijk welke versie actueel is.</span></li>
  <li><strong>Feedback en support</strong> <span>Opmerkingen en vragen bij het juiste product.</span></li>
  <li><strong>Statistieken</strong> <span>Deelname, voortgang, scores en activiteit.</span></li>
  <li><strong>Bestanden</strong> <span>Documentatie en exports bij het project.</span></li>
  <li><strong>Doorontwikkeling</strong> <span>Ondersteuning wanneer de leerervaring mee moet groeien.</span></li>
</ul>
{% endcapture %}
{% capture what_body %}
<h2>Wat is Prepo?</h2>
<p class="sp-lead">Prepo staat voor <strong>Preludens Portal</strong>. Het is de beheer- en distributieomgeving voor MicroGames, Stories en andere interactieve leerproducten van Preludens. Geen algemeen leeradministratiesysteem, maar de plek waarop die producten beschikbaar, beheersbaar en bruikbaar blijven.</p>
<p class="sp-lead">Daardoor hoef je niet voor iedere vraag, wijziging of nieuwe publicatie opnieuw te zoeken naar de juiste bestanden of contactpersoon. Voor deelnemers blijven leerervaringen toegankelijk. Voor organisaties ontstaat overzicht over gebruik, beheer en verdere ontwikkeling.</p>
{% include panels/media.html src="/assets/images/prepo/overzicht.jpg" webp="/assets/images/prepo/overzicht.webp" alt="Het Prepo-overzicht: projectstatus, games, live spelers, tickets en versies" width="1400" height="875" ratio="1400 / 875" body=what_copy %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="overzicht" body=what_body %}

{% capture feature_items %}
{% include panels/step.html num="1" title="Houd overzicht over projecten en producten" text="Welke MicroGames en Stories beschikbaar zijn, bij welk project ze horen en welke status ze hebben." %}
{% include panels/step.html num="2" title="Test nieuwe versies voor je publiceert" text="Via de testomgeving beoordeel je inhoud, interactie en techniek, en betrek je testers voordat deelnemers de versie zien." %}
{% include panels/step.html num="3" title="Deel via publieke links" text="Niet iedere leerervaring hoeft via een bestaand LMS. Deelnemers gaan rechtstreeks naar de juiste ervaring." %}
{% include panels/step.html num="4" title="Maak voortgang zichtbaar, waar dat past" text="Een leaderboard kan scores of voortgang tonen. Alleen wanneer dat aansluit op de doelgroep en het leerdoel." %}
{% include panels/step.html num="5" title="Verzamel feedback en beheer supportvragen" text="Het ticketsysteem houdt opmerkingen, meldingen en vragen bij het product, in plaats van in losse mails en documenten." %}
{% include panels/step.html num="6" title="Beheer MicroGames, Stories en versies" text="Duidelijk welke versie actueel is en welke wijzigingen zijn doorgevoerd, ook als procedures of regels veranderen." %}
{% include panels/step.html num="7" title="Krijg inzicht in statistieken en gebruik" text="Deelname, voortgang, scores en activiteit laten zien waar deelnemers goed doorheen gaan en waar extra uitleg nodig kan zijn." %}
{% include panels/step.html num="8" title="Houd bestanden en documentatie bij elkaar" text="Exports, rapportages en projectmateriaal blijven vindbaar en gekoppeld aan het juiste product." %}
{% include panels/step.html num="9" title="Houd support verbonden aan het product" text="Vragen horen bij het product, de organisatie en de gebruikte versie, zodat ondersteuning gerichter kan." %}
{% endcapture %}
{% capture feature_body %}
<h2>Wat kun je met Prepo?</h2>
<p class="sp-lead sp-lead--center">Prepo ondersteunt het beschikbaar maken, gebruiken en beheren van interactieve leerervaringen. Van de eerste publicatie tot de versie die maanden later nog in gebruik is.</p>
{% include panels/steps.html variant="grid" items=feature_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="mogelijkheden" body=feature_body %}

{% capture edit_copy %}
<p class="sp-lead">Soms verandert een instructie, een benaming of een korte toelichting. Met Prepo pas je die teksten zelf aan. Daarna download je een bijgewerkt SCORM-bestand voor je eigen Learning Management System, of je stelt de leerervaring beschikbaar via een publieke Prepo-link.</p>
<p class="sp-lead">Je hoeft niet voor iedere tekstaanpassing terug naar Preludens. Je houdt zelf grip op de inhoud, de actuele versie en de distributie.</p>
{% include panels/actions.html primary_label="Bekijk Prepo in een demo" primary_href="/contact/" %}
{% endcapture %}
{% capture edit_body %}
<h2>Zelf teksten aanpassen en opnieuw publiceren</h2>
<p class="sp-lead">Niet iedere wijziging hoeft een nieuw ontwikkeltraject te worden.</p>
{% include panels/media.html src="/assets/images/prepo/editor.jpg" webp="/assets/images/prepo/editor.webp" alt="De Prepo-editor waarin teksten in een MicroGame of Story worden aangepast" width="1400" height="875" ratio="1400 / 875" reverse=true body=edit_copy %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="teksten" body=edit_body %}

{% capture lms_body %}
<h2>Prepo en je bestaande LMS</h2>
<p class="sp-lead">Veel organisaties hebben al een Learning Management System. Daarin worden trainingen aangeboden, deelnemers beheerd en leeractiviteiten gevolgd. Prepo hoeft die omgeving niet te vervangen. Het ondersteunt het beheer van de MicroGames en Stories die Preludens ontwikkelt.</p>
<p class="sp-lead">Wil je de leerervaring in je eigen LMS aanbieden, dan gebruik je een SCORM-bestand. Na een tekstwijziging in Prepo download je een nieuwe versie en plaats je die in je LMS. Wil je de leerervaring buiten het LMS beschikbaar maken, dan gebruik je een publieke Prepo-link.</p>
<p class="sp-lead">Zo kies je een route die past bij je organisatie. Prepo blijft gericht op de leerproducten van Preludens en op het beheer dat nodig is om die producten te blijven gebruiken.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="lms" body=lms_body %}

{% capture life_steps %}
{% include panels/step.html num="1" title="Testen" text="Betrokkenen controleren inhoud, interactie en techniek. Opmerkingen worden verzameld en verwerkt waar nodig." %}
{% include panels/step.html num="2" title="Publiceren" text="Via een publieke Prepo-link, of via een SCORM-bestand voor een bestaande leeromgeving." %}
{% include panels/step.html num="3" title="Gebruiken en volgen" text="Deelnemers gaan aan de slag. Statistieken geven inzicht in gebruik, activiteit en voortgang." %}
{% include panels/step.html num="4" title="Feedback verzamelen" text="Vragen, opmerkingen en verbeterpunten komen gestructureerd binnen, bij het juiste product." %}
{% include panels/step.html num="5" title="Aanpassen en beheren" text="Teksten worden bijgewerkt en nieuwe versies beheerd, zodat de leerervaring bij de praktijk blijft." %}
{% include panels/step.html num="6" title="Verder ontwikkelen" text="Inzichten uit gebruik en feedback kunnen aanleiding zijn om de leerervaring te verbeteren of uit te breiden." %}
{% endcapture %}
{% capture life_body %}
<h2>Van testen tot doorontwikkeling</h2>
<p class="sp-lead sp-lead--center">Prepo ondersteunt de levensloop van een MicroGame of Story, niet alleen het moment van oplevering.</p>
{% include panels/steps.html variant="flow" items=life_steps %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="levensloop" body=life_body %}

{% capture months_copy %}
<p class="sp-lead">Bij nieuwe MicroGames en Stories is standaard <strong>drie maanden toegang tot Prepo</strong> na oplevering inbegrepen. In die periode lanceer, test, gebruik en volg je de leerervaring. Er is ruimte om feedback te verzamelen, de eerste inzichten te bekijken en vragen over gebruik of distributie op te vangen.</p>
<h3 class="sp-sub">Daarna flexibel verlengen</h3>
<p class="sp-lead">Na die periode bepaal je of Prepo actief blijft. Met een licentie behoud je toegang tot de beheeromgeving. Afhankelijk van de afspraken kan dat worden uitgebreid met verlengde support, versiebeheer, updates, rapportages of doorontwikkeling.</p>
{% include panels/actions.html secondary_label="Bespreek de mogelijkheden" secondary_href="/contact/" %}
{% endcapture %}
{% capture months_body %}
<h2>Drie maanden Prepo inbegrepen</h2>
{% include panels/media.html src="/assets/images/prepo/statistieken.jpg" webp="/assets/images/prepo/statistieken.webp" alt="Gebruikscijfers in Prepo, zoals spelers, tickets en opgeloste meldingen" width="1400" height="875" ratio="1400 / 875" body=months_copy %}
{% endcapture %}
{% include panels/panel.html variant="paper" align="left" id="inbegrepen" body=months_body %}

{% capture who_items %}
{% include panels/value.html title="Organisaties met meerdere leerproducten" text="Overzicht over projecten, versies en beschikbaarheid wanneer je meer dan één MicroGame of Story inzet." %}
{% include panels/value.html title="L&D- en opleidingsverantwoordelijken" text="Beheer en gebruiksinformatie bij elkaar, voor wie leerervaringen aanbiedt, evalueert en verbetert." %}
{% include panels/value.html title="Inhoudelijke beheerders" text="Teksten bijwerken en de actuele versie opnieuw beschikbaar maken wanneer processen of regels veranderen." %}
{% include panels/value.html title="Organisaties met een bestaand LMS" text="Bijgewerkte SCORM-bestanden beheren en downloaden voor gebruik in de eigen leeromgeving." %}
{% include panels/value.html title="Teams die willen blijven verbeteren" text="Feedback, gebruik en support volgen, en verbeteringen verbinden aan het juiste leerproduct." %}
{% endcapture %}
{% capture who_body %}
<h2>Voor wie is Prepo bedoeld?</h2>
<p class="sp-lead sp-lead--center">Voor organisaties die hun interactieve leerervaringen langer willen gebruiken dan een eenmalige pilot of campagne.</p>
{% include panels/values.html label="Voor wie Prepo bedoeld is" items=who_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="voor-wie" body=who_body %}

{% capture place_body %}
<h2>Prepo als onderdeel van de Preludens-aanpak</h2>
<p class="sp-lead">Preludens maakt complexe kennis speelbaar met storytelling, spelprincipes en MicroGames. We helpen leeruitdagingen te verkennen, leerervaringen te ontwerpen en die te ontwikkelen. De route stopt niet bij oplevering. Een leerervaring moet de juiste deelnemers bereiken, actueel blijven en kunnen meegroeien.</p>
<p class="sp-lead"><a href="{{ '/diensten/game-thinking/' | relative_url }}">Game Thinking</a> onderzoekt de leeruitdaging en bepaalt een richting. <a href="{{ '/diensten/microgame-stories/' | relative_url }}">MicroGame Stories</a> en <a href="{{ '/diensten/dilemma-storytelling/' | relative_url }}">Dilemma Storytelling</a> maken kennis en keuzes actief leerbaar. Prepo houdt die leerervaringen daarna beschikbaar, vindbaar en beheersbaar.</p>
{% include panels/actions.html secondary_label="Ontdek MicroGame Stories" secondary_href="/diensten/microgame-stories/" secondary2_label="Ontdek onze diensten" secondary2_href="/diensten/" %}
{% endcapture %}
{% include panels/panel.html variant="paper" align="left" id="aanpak" body=place_body %}

{% capture faq_body %}
<h2>Veelgestelde vragen over Prepo</h2>
<h3 class="sp-sub">Wat is Prepo?</h3>
<p class="sp-lead">Preludens Portal: de beheer- en distributieomgeving voor MicroGames, Stories en andere interactieve leerproducten. Je maakt leerervaringen beschikbaar, beheert versies, verzamelt feedback, bekijkt statistieken en organiseert ondersteuning.</p>
<h3 class="sp-sub">Is Prepo een Learning Management System?</h3>
<p class="sp-lead">Nee. Prepo is een beheer- en distributieomgeving voor leerproducten van Preludens, geen vervanging van een bestaand LMS. Je biedt leerervaringen via Prepo aan, of je gebruikt SCORM-bestanden in je eigen leeromgeving.</p>
<h3 class="sp-sub">Kunnen we MicroGames aanbieden zonder eigen LMS?</h3>
<p class="sp-lead">Ja. Via publieke links maak je MicroGames en Stories rechtstreeks beschikbaar voor deelnemers.</p>
<h3 class="sp-sub">Kunnen we zelf teksten aanpassen?</h3>
<p class="sp-lead">Ja. Daarna download je een bijgewerkt SCORM-bestand voor je LMS, of je stelt de leerervaring via Prepo beschikbaar.</p>
<h3 class="sp-sub">Wat is SCORM?</h3>
<p class="sp-lead">Een veelgebruikte standaard om digitale leercontent in een LMS aan te bieden. Met Prepo download je een bijgewerkte versie om die opnieuw in je leeromgeving te plaatsen.</p>
<h3 class="sp-sub">Welke statistieken zijn beschikbaar?</h3>
<p class="sp-lead">Onder andere deelname, voortgang, scores en activiteit. Welke gegevens er zijn, hangt af van de leerervaring en de manier van aanbieden.</p>
<h3 class="sp-sub">Kunnen we nieuwe versies eerst testen?</h3>
<p class="sp-lead">Ja. In de testomgeving controleer je een nieuwe versie voordat die breed beschikbaar wordt.</p>
<h3 class="sp-sub">Hoe werkt feedback verzamelen?</h3>
<p class="sp-lead">Via het ticketsysteem leg je opmerkingen, technische meldingen, verbeterpunten en supportvragen vast, gekoppeld aan het product of de versie.</p>
<h3 class="sp-sub">Is Prepo inbegrepen bij een nieuwe MicroGame of Story?</h3>
<p class="sp-lead">Bij nieuwe MicroGames en Stories is drie maanden toegang na oplevering inbegrepen. Daarna kun je verlengen met een licentie.</p>
<h3 class="sp-sub">Wat kost Prepo na die periode?</h3>
<p class="sp-lead">Dat hangt af van de licentie en van afspraken over support, updates, rapportages of doorontwikkeling. We kijken samen welke vorm bij het gebruik past.</p>
<h3 class="sp-sub">Kunnen we Prepo eerst bekijken?</h3>
<p class="sp-lead">Ja. In een demo zie je hoe de beheeromgeving werkt en welke mogelijkheden voor jouw organisatie relevant zijn.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" id="vragen" body=faq_body %}

{% capture cta_left %}Een sterke leerervaring stopt niet bij de lancering. Met Prepo blijven je MicroGames en Stories beschikbaar, vindbaar en beheersbaar, met grip op distributie, inhoud, versies, feedback, statistieken en support.{% endcapture %}
{% capture cta_right %}We laten je graag zien hoe je leerproducten beheert, teksten aanpast, nieuwe versies publiceert en inzicht houdt in gebruik.{% endcapture %}
{% include panels/cta.html kicker="Prepo" title="Geef je leerervaring ruimte om verder te groeien" left=cta_left right=cta_right stack=true primary_label="Vraag een demo aan" primary_href="/contact/" secondary_label="Neem contact op" secondary_href="/contact/" %}

{% include panels/footer-reveal.html %}
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Wat is Prepo?", "acceptedAnswer": {"@type": "Answer", "text": "Preludens Portal: de beheer- en distributieomgeving voor MicroGames, Stories en andere interactieve leerproducten van Preludens."}},
    {"@type": "Question", "name": "Is Prepo een Learning Management System?", "acceptedAnswer": {"@type": "Answer", "text": "Nee. Prepo beheert en distribueert leerproducten van Preludens. Het vervangt geen bestaand LMS. Leerervaringen kunnen via Prepo of als SCORM-bestand in een eigen leeromgeving worden aangeboden."}},
    {"@type": "Question", "name": "Kunnen we MicroGames aanbieden zonder eigen LMS?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Via publieke links maak je MicroGames en Stories rechtstreeks beschikbaar."}},
    {"@type": "Question", "name": "Kunnen we zelf teksten aanpassen?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Daarna download je een bijgewerkt SCORM-bestand of stel je de leerervaring via Prepo beschikbaar."}},
    {"@type": "Question", "name": "Wat is SCORM?", "acceptedAnswer": {"@type": "Answer", "text": "Een standaard om digitale leercontent in een LMS aan te bieden. Met Prepo download je een bijgewerkte versie voor je leeromgeving."}},
    {"@type": "Question", "name": "Welke statistieken zijn beschikbaar?", "acceptedAnswer": {"@type": "Answer", "text": "Onder andere deelname, voortgang, scores en activiteit. Wat beschikbaar is, hangt af van de leerervaring en de manier van aanbieden."}},
    {"@type": "Question", "name": "Kunnen we nieuwe versies eerst testen?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. In de testomgeving controleer je een versie voordat die breed beschikbaar wordt."}},
    {"@type": "Question", "name": "Hoe werkt feedback verzamelen?", "acceptedAnswer": {"@type": "Answer", "text": "Via het ticketsysteem leg je opmerkingen, meldingen en supportvragen vast, gekoppeld aan het product of de versie."}},
    {"@type": "Question", "name": "Is Prepo inbegrepen bij een nieuwe MicroGame of Story?", "acceptedAnswer": {"@type": "Answer", "text": "Bij nieuwe MicroGames en Stories is drie maanden toegang na oplevering inbegrepen. Daarna kun je verlengen met een licentie."}},
    {"@type": "Question", "name": "Wat kost Prepo na die periode?", "acceptedAnswer": {"@type": "Answer", "text": "Dat hangt af van de licentie en van afspraken over support, updates, rapportages of doorontwikkeling."}},
    {"@type": "Question", "name": "Kunnen we Prepo eerst bekijken?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. In een demo zie je hoe de beheeromgeving werkt."}}
  ]
}
</script>
