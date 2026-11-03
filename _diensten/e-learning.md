---
layout: default
lang: nl
title: E-learning ontwikkelen met MicroGames
tile_title: E-learning
description: E-learning ontwikkelen die verder gaat dan informatie? Preludens maakt complexe kennis actief en toepasbaar met storytelling en MicroGames.
summary: >-
  Een heldere module voor kennis, processen of vaardigheden die je wilt
  opfrissen — zonder dat er een game aan te pas hoeft te komen.
permalink: /e-learning/
order: 1
body_class: page-panels page-elearning
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_actions %}
<p class="sp-lead">Preludens ontwikkelt interactieve e-learning waarin deelnemers actief aan de slag gaan. We combineren herkenbare verhalen met korte spelvormen en directe feedback.</p>
<p class="sp-lead">Zo wordt online leren meer dan informatie doorlopen. Het wordt een ervaring waarin mensen oefenen en ontdekken wat werkt.</p>
{% include panels/actions.html primary_label="Plan een GameStorm" primary_href="/gamestorm/" secondary_label="Ontdek MicroGame Stories" secondary_href="/diensten/microgame-stories/" %}
{% endcapture %}
{% capture hero_title %}E-learning die mensen <span class="hl">actief</span> laat leren{% endcapture %}
{% capture hero_lead %}Van complexe kennis naar interactieve leerervaringen met storytelling en MicroGames.{% endcapture %}
{% capture hero_lead2 %}E-learning maakt kennis toegankelijk. Maar hoe zorg je ervoor dat medewerkers die kennis ook onthouden en toepassen in hun werk?{% endcapture %}
{% include panels/hero.html kicker="E-learning" title=hero_title lead=hero_lead lead2=hero_lead2 actions=hero_actions figure_src="/assets/images/hero/diensten-hero.jpg" figure_alt="Een team dat samen een route uitzet" figure_href="/gamestorm/" figure_caption="Van kennis naar toepasbaar gedrag." %}

{% capture info_body %}
<h2>Van informatie naar toepasbare kennis</h2>
<p class="sp-lead">Veel organisaties beschikken over waardevolle kennis die ze willen overdragen aan medewerkers. Denk aan technische instructies, nieuwe processen, veiligheidsprocedures of complexe wet- en regelgeving.</p>
<p class="sp-lead">Die informatie is vaak al beschikbaar in documenten, presentaties of bestaande e-learningmodules. Maar informatie aanbieden is niet hetzelfde als <strong>leren</strong>.</p>
<p class="sp-lead">Medewerkers kunnen een online training volledig doorlopen zonder dat duidelijk wordt of ze de kennis ook in hun dagelijkse werk kunnen toepassen. Dat komt doordat traditionele e-learning vaak gericht is op uitleg en kennisoverdracht. De deelnemer leest, kijkt, luistert en beantwoordt enkele vragen.</p>
<p class="sp-lead">Wanneer het doel is om vaardigheden te ontwikkelen of betere beslissingen te nemen, is meer nodig. De uitdaging verschuift dan van kennis overdragen naar mensen laten <strong>oefenen met wat ze moeten kunnen</strong>.</p>
<p class="sp-lead">Daarom ontwerpen we bij Preludens leerervaringen waarin deelnemers actief met de inhoud aan de slag gaan.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="toepasbare-kennis" body=info_body %}

{% capture why_items %}
{% include panels/value.html title="Betrokkenheid" text="Deelnemers krijgen een concrete uitdaging. Ze worden nieuwsgierig naar de situatie en hebben een reden om verder te gaan." %}
{% include panels/value.html title="Begrip en toepassing" text="Door kennis te gebruiken binnen herkenbare opdrachten ontdekken deelnemers hoe theorie en praktijk met elkaar samenhangen." %}
{% include panels/value.html title="Oefenen en verbeteren" text="Directe feedback en herhaling geven deelnemers de ruimte om fouten te begrijpen en hun aanpak te verbeteren." %}
{% endcapture %}
{% capture interactive_body %}
<h2>Wat is interactieve e-learning?</h2>
<p class="sp-lead sp-lead--center">Interactieve e-learning is online leren waarbij deelnemers actief betrokken worden bij het verwerken en toepassen van kennis.</p>
<p class="sp-lead">Ze voeren opdrachten uit, maken keuzes en krijgen feedback op hun handelen. De interactie heeft daarbij een duidelijk leerdoel.</p>
<p class="sp-lead">Een klik op een knop maakt een training nog niet betekenisvol interactief. Interactie werkt wanneer de deelnemer moet nadenken en kiezen. Bijvoorbeeld door een risico te herkennen, een technische handeling uit te voeren of een lastige beslissing te nemen binnen een herkenbare werksituatie.</p>
<p class="sp-lead">Zo wordt kennis verbonden aan de context waarin medewerkers die later nodig hebben.</p>
<h3 class="sp-sub">Waarom actieve e-learning?</h3>
<p class="sp-lead">Actieve e-learning biedt ruimte voor drie onderdelen van het leerproces. Het resultaat is een leerervaring waarin deelnemers kennis en vaardigheden ontwikkelen. Het afronden van de module is dan een uitkomst, geen doel.</p>
{% include panels/values.html label="Drie onderdelen van actieve e-learning" items=why_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="interactieve-e-learning" body=interactive_body %}

{% capture story_media %}
<h3 class="sp-sub">Storytelling: maak kennis herkenbaar</h3>
<p class="sp-lead">Een verhaal geeft context aan de kennis die iemand moet leren. We plaatsen de leerstof binnen een herkenbare situatie, met een concreet probleem of dilemma.</p>
<p class="sp-lead">Daardoor wordt duidelijk waarom de kennis belangrijk is, wanneer die nodig is en welke gevolgen verschillende keuzes kunnen hebben. De deelnemer leert de juiste aanpak kennen en begrijpt waarom die werkt.</p>
<h3 class="sp-sub">MicroGames: maak kennis speelbaar</h3>
<p class="sp-lead">Een MicroGame is een korte, gerichte spelvorm waarin deelnemers oefenen met één leerdoel. Ze moeten bijvoorbeeld een situatie beoordelen, onderdelen combineren, een proces ordenen of een beslissing nemen.</p>
<p class="sp-lead">Tijdens het spelen ontvangen ze directe feedback. Ze ontdekken wat werkt en hoe ze hun aanpak kunnen verbeteren. Door herhaling en variatie kunnen deelnemers dezelfde kennis vanuit verschillende invalshoeken oefenen.</p>
{% endcapture %}
{% capture method_body %}
<h2>E-learning ontwikkelen met storytelling en MicroGames</h2>
<p class="sp-lead">Bij Preludens combineren we twee ontwerpprincipes: storytelling en <a href="{{ '/play/' | relative_url }}">game-based leren</a>.</p>
{% include panels/media.html src="/assets/images/verhalen/basis-koeltechniek-kringloop.jpg" alt="MicroGame waarin je onderdelen van het koelproces naar de juiste plek in de kringloop sleept" width="1024" height="460" ratio="1024 / 460" body=story_media %}
<h3 class="sp-sub">MicroGame Stories: verhaal en spel in één leerervaring</h3>
<p class="sp-lead">Wanneer we storytelling en MicroGames combineren, ontstaat een MicroGame Story. De deelnemer volgt een kort, visueel verhaal waarin een herkenbare uitdaging centraal staat. Binnen dat verhaal wordt kennis aangeboden die nodig is om verder te komen.</p>
<p class="sp-lead">Vervolgens past de deelnemer die kennis toe in een MicroGame. De gemaakte keuzes krijgen betekenis binnen het verhaal, waarna de deelnemer kan reflecteren op het resultaat. Zo ontstaat een samenhangende leerroute waarin kennis en actief handelen elkaar versterken.</p>
{% include panels/actions.html secondary_label="Ontdek onze MicroGame Stories" secondary_href="/diensten/microgame-stories/" %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="storytelling-microgames" body=method_body %}

{% capture build_steps %}
{% include panels/step.html num="1" title="We onderzoeken de leeruitdaging" text="Wat moeten medewerkers leren? Waar lopen ze tegenaan? En in welke situaties moeten ze de nieuwe kennis gebruiken? We brengen de doelgroep, de context en de belangrijkste uitdagingen in kaart." %}
{% include panels/step.html num="2" title="We vertalen kennis naar concrete leerdoelen" text="Samen bepalen we wat deelnemers na afloop moeten begrijpen of kunnen uitvoeren. Daarbij benoemen we ook het gedrag dat nodig is om die kennis toe te passen." %}
{% include panels/step.html num="3" title="We ontwerpen het verhaal en de uitdagingen" text="We ontwikkelen een herkenbare verhaallijn waarin de kennis betekenis krijgt. Vervolgens kiezen we passende spelmechanismen waarmee deelnemers actief kunnen oefenen." %}
{% include panels/step.html num="4" title="We ontwikkelen de interactieve leerervaring" text="We combineren visuele storytelling, MicroGames en feedback tot een samenhangende online leerervaring. Deelnemers kunnen zelfstandig oefenen en ontdekken." %}
{% include panels/step.html num="5" title="We maken leren toegankelijk en inzichtelijk" text="De leerervaring kan worden aangeboden via een bestaande leeromgeving of via ons distributieplatform. Waar passend maken we voortgang en leeractiviteiten inzichtelijk, zodat zichtbaar wordt hoe deelnemers de training doorlopen en waar verdere verbetering mogelijk is." %}
{% endcapture %}
{% capture build_body %}
<h2>Hoe ontwikkelen wij interactieve e-learning?</h2>
<p class="sp-lead sp-lead--center">Een goede online leerervaring begint bij de mensen die ermee moeten leren. Daarom ontwikkelen we onze e-learning vanuit de doelgroep en de leerdoelen, en pas daarna vanuit de techniek.</p>
{% include panels/steps.html variant="flow" items=build_steps %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="aanpak" body=build_body %}

{% capture fit_items %}
{% include panels/value.html title="Technische kennis en vakvaardigheden" text="Maak abstracte processen en technische principes begrijpelijk met visuele opdrachten en korte oefeningen." %}
{% include panels/value.html title="Veiligheid en procedures" text="Laat medewerkers risico's herkennen, procedures toepassen en oefenen met de gevolgen van verschillende handelingen." %}
{% include panels/value.html title="Onboarding en inwerken" text="Help nieuwe medewerkers om processen, werkwijzen en herkenbare situaties binnen de organisatie te leren kennen." %}
{% include panels/value.html title="Wet- en regelgeving" text="Vertaal complexe regels naar concrete situaties waarin medewerkers moeten beoordelen welke kennis van toepassing is." %}
{% include panels/value.html title="Besluitvorming en professioneel handelen" text="Laat medewerkers oefenen met dilemma's, verschillende belangen en keuzes waarvan de gevolgen niet altijd direct duidelijk zijn." %}
{% endcapture %}
{% capture fit_body %}
<h2>Voor welke leeruitdagingen is interactieve e-learning geschikt?</h2>
<p class="sp-lead">Interactieve e-learning is vooral waardevol wanneer medewerkers meer moeten kunnen dan informatie onthouden. In al deze situaties geldt hetzelfde uitgangspunt: deelnemers moeten de kennis leren gebruiken.</p>
{% include panels/values.html label="Leeruitdagingen waarbij interactieve e-learning past" columns="two" items=fit_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="leeruitdagingen" body=fit_body %}

{% capture case_media %}
<p class="sp-lead">Hoe maak je technische theorie toegankelijk voor professionals die de kennis in hun dagelijks werk nodig hebben?</p>
<p class="sp-lead">Voor het project Basis Koeltechniek (BRL200) werkte Preludens samen met Climatools BV, 21CC Education en Studium. Onderwerpen zoals het mechanisch koudeproces, oververhitting, onderkoeling en het h-log-P-diagram zijn belangrijk, maar kunnen abstract blijven wanneer ze uitsluitend via tekst en uitleg worden aangeboden.</p>
<p class="sp-lead">Daarom ontwikkelden we een reeks interactieve MicroGames. Deelnemers verkennen technische processen, herkennen verbanden en passen kennis toe binnen visuele opdrachten. Daarnaast ontwikkelden we een gameframework waarmee voortgang, prestaties en leeractiviteiten inzichtelijk kunnen worden gemaakt.</p>
<p class="sp-lead">Het project laat zien hoe complexe vakkennis vertaald kan worden naar korte, gerichte leerervaringen.</p>
{% include panels/actions.html secondary_label="Bekijk het project Basis Koeltechniek" secondary_href="/verhalen/basis-koeltechniek/" %}
{% endcapture %}
{% capture case_body %}
<h3>Uit de praktijk</h3>
<h2>Basis Koeltechniek</h2>
{% include panels/media.html src="/assets/images/verhalen/basis-koeltechniek-onderdelen.jpg" alt="MicroGame waarin onderdelen van een koelinstallatie op de juiste plek worden geplaatst" width="1024" height="499" ratio="1024 / 499" reverse=true body=case_media %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="basis-koeltechniek" body=case_body %}

{% capture existing_body %}
<h2>Game-based leren als aanvulling op bestaande e-learning</h2>
<p class="sp-lead">Interactieve e-learning hoeft niet te betekenen dat een organisatie volledig opnieuw moet beginnen. Veel organisaties beschikken al over waardevolle leerinhoud, duidelijke leerdoelen en een bestaande digitale leeromgeving.</p>
<p class="sp-lead">Preludens helpt om die basis te versterken. We kunnen bestaande kennis vertalen naar een MicroGame Story of een afzonderlijke MicroGame ontwikkelen die aansluit op een bestaande e-learningmodule. Zo voeg je actieve oefenmomenten toe waar ze het meeste waarde hebben.</p>
<p class="sp-lead">Onze aanpak is gericht op toegankelijkheid. We houden de leerervaringen compact, beperken onnodige ontwerpcomplexiteit en sluiten waar mogelijk aan op bestaande leeromgevingen. Daardoor kun je klein beginnen en voortbouwen op de eerste ervaringen.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="bestaande-e-learning" body=existing_body %}

{% capture faq_body %}
<h2>Veelgestelde vragen over e-learning</h2>
<h3 class="sp-sub">Wat is het verschil tussen e-learning en game-based leren?</h3>
<p class="sp-lead">E-learning is de verzamelnaam voor leren via digitale middelen. Game-based leren is een didactische aanpak waarbij spelprincipes worden ingezet om deelnemers actief te laten leren.</p>
<p class="sp-lead">Game-based leren kan dus onderdeel zijn van e-learning. Bij Preludens gebruiken we MicroGames en storytelling om online leerervaringen actiever te maken.</p>
<h3 class="sp-sub">Wat kost het ontwikkelen van interactieve e-learning?</h3>
<p class="sp-lead">De ontwikkelkosten hangen af van de hoeveelheid leerinhoud, de complexiteit van de interacties en de gewenste vormgeving.</p>
<p class="sp-lead">Bij Preludens werken we met korte, gerichte MicroGames en MicroGame Stories. Daarmee willen we game-based leren toegankelijk maken zonder dat direct een omvangrijk serious-gametraject nodig is. In een <a href="{{ '/gamestorm/' | relative_url }}">GameStorm</a> onderzoeken we welke aanpak past bij jouw leerdoelen en beschikbare middelen.</p>
<h3 class="sp-sub">Kunnen MicroGames worden gebruikt binnen ons bestaande LMS?</h3>
<p class="sp-lead">Onze leerervaringen kunnen worden ingezet binnen bestaande leeromgevingen of via ons eigen distributieplatform. Welke technische koppeling het meest geschikt is, hangt af van de mogelijkheden van de gebruikte leeromgeving.</p>
<h3 class="sp-sub">Is interactieve e-learning geschikt voor iedere doelgroep?</h3>
<p class="sp-lead">De juiste leervorm hangt af van de doelgroep, de leerdoelen en de context. Niet ieder onderwerp vraagt om een uitgebreide interactieve ervaring. Soms is een heldere uitleg voldoende. Wanneer medewerkers moeten oefenen, afwegen of kennis toepassen, kunnen MicroGames een waardevolle aanvulling zijn.</p>
<h3 class="sp-sub">Kunnen we bestaande e-learning omzetten naar MicroGames?</h3>
<p class="sp-lead">Ja. Bestaande leerinhoud kan het vertrekpunt zijn voor een nieuwe interactieve leerervaring. We onderzoeken welke onderdelen zich lenen voor actieve opdrachten en vertalen deze naar passende verhalen, uitdagingen en spelmechanismen.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="vragen" body=faq_body %}

{% capture cta_left %}Wil je bestaande e-learning versterken of nieuwe online leerervaringen ontwikkelen? In een GameStorm onderzoeken we samen jouw leeruitdaging.{% endcapture %}
{% capture cta_right %}We brengen de doelgroep, de belangrijkste leerdoelen en de relevante praktijksituaties in kaart. Vervolgens vertalen we die inzichten naar een eerste verhaallijn en passende spelmechanismen.{% endcapture %}
{% include panels/cta.html kicker="E-learning" title="Zet de eerste stap naar actieve e-learning" left=cta_left right=cta_right stack=true primary_label="Plan een GameStorm" primary_href="/gamestorm/" secondary_label="Bekijk onze diensten" secondary_href="/diensten/" %}

{% include panels/footer-reveal.html %}
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat is het verschil tussen e-learning en game-based leren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "E-learning is de verzamelnaam voor leren via digitale middelen. Game-based leren is een didactische aanpak waarbij spelprincipes worden ingezet om deelnemers actief te laten leren. Game-based leren kan dus onderdeel zijn van e-learning. Bij Preludens gebruiken we MicroGames en storytelling om online leerervaringen actiever te maken."
      }
    },
    {
      "@type": "Question",
      "name": "Wat kost het ontwikkelen van interactieve e-learning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De ontwikkelkosten hangen af van de hoeveelheid leerinhoud, de complexiteit van de interacties en de gewenste vormgeving. Bij Preludens werken we met korte, gerichte MicroGames en MicroGame Stories. In een GameStorm onderzoeken we welke aanpak past bij jouw leerdoelen en beschikbare middelen."
      }
    },
    {
      "@type": "Question",
      "name": "Kunnen MicroGames worden gebruikt binnen ons bestaande LMS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Onze leerervaringen kunnen worden ingezet binnen bestaande leeromgevingen of via ons eigen distributieplatform. Welke technische koppeling het meest geschikt is, hangt af van de mogelijkheden van de gebruikte leeromgeving."
      }
    },
    {
      "@type": "Question",
      "name": "Is interactieve e-learning geschikt voor iedere doelgroep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De juiste leervorm hangt af van de doelgroep, de leerdoelen en de context. Niet ieder onderwerp vraagt om een uitgebreide interactieve ervaring. Soms is een heldere uitleg voldoende. Wanneer medewerkers moeten oefenen, afwegen of kennis toepassen, kunnen MicroGames een waardevolle aanvulling zijn."
      }
    },
    {
      "@type": "Question",
      "name": "Kunnen we bestaande e-learning omzetten naar MicroGames?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Bestaande leerinhoud kan het vertrekpunt zijn voor een nieuwe interactieve leerervaring. We onderzoeken welke onderdelen zich lenen voor actieve opdrachten en vertalen deze naar passende verhalen, uitdagingen en spelmechanismen."
      }
    }
  ]
}
</script>
