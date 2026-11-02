---
layout: default
lang: nl
title: "MicroGame Stories: interactieve e-learning"
tile_title: MicroGame Stories
description: Ontdek MicroGame Stories van Preludens. Korte leerervaringen met storytelling, MicroGames en directe feedback voor actief en toepasbaar leren.
summary: >-
  Korte, visuele online trainingen waarin basiskennis wordt gekoppeld aan
  herkenbare praktijksituaties.
permalink: /diensten/microgame-stories/
order: 2
body_class: page-panels
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_actions %}
<p class="sp-lead">Met MicroGame Stories maakt Preludens van die kennis een actieve leerervaring. We combineren korte, visuele verhalen met gerichte spelvormen waarin deelnemers zelf keuzes maken en direct feedback krijgen.</p>
<p class="sp-lead">Zo wordt online leren een leerroute waarin mensen stap voor stap nieuwe kennis en vaardigheden ontwikkelen.</p>
{% include panels/actions.html primary_label="Plan een GameStorm" primary_href="/gamestorm/" secondary_label="Ervaar een MicroGame Story" secondary_href="/verhalen/microgame-demo/" %}
{% endcapture %}
{% capture hero_title %}MicroGame Stories: maak complexe kennis <span class="hl">speelbaar</span>{% endcapture %}
{% capture hero_lead %}Interactieve e-learning waarin storytelling en MicroGames samenkomen.{% endcapture %}
{% capture hero_lead2 %}Je wilt belangrijke kennis overdragen aan je medewerkers. Kennis die ze moeten begrijpen, onthouden en toepassen wanneer het erop aankomt.{% endcapture %}
{% include panels/hero.html kicker="Diensten" title=hero_title lead=hero_lead lead2=hero_lead2 actions=hero_actions figure_src="/assets/images/hero/diensten-hero.jpg" figure_alt="Een team dat samen een route uitzet" figure_href="/verhalen/microgame-demo/" figure_caption="Van weten naar oefenen." %}

{% capture transfer_body %}
<h2>Van kennisoverdracht naar actief leren</h2>
<p class="sp-lead">Binnen veel organisaties is belangrijke kennis al beschikbaar. In handboeken, werkinstructies en bestaande e-learningmodules staat precies beschreven wat medewerkers moeten weten.</p>
<p class="sp-lead">Toch betekent beschikbare informatie niet automatisch dat mensen die kennis ook kunnen toepassen. Een medewerker kan een procedure kennen, maar moeite hebben om die in een onverwachte situatie uit te voeren. Of een technische uitleg begrijpen, zonder de belangrijkste principes te herkennen wanneer ze in de praktijk nodig zijn.</p>
<p class="sp-lead">Dat is de uitdaging bij veel vormen van online leren. De inhoud klopt, maar de deelnemer krijgt weinig gelegenheid om er actief mee te oefenen.</p>
<p class="sp-lead">Kennis krijgt pas betekenis wanneer mensen begrijpen <strong>waar ze die voor nodig hebben</strong> en ermee aan de slag kunnen. Daarom ontwikkelen we MicroGame Stories: korte, visuele leerervaringen waarin kennis wordt verbonden aan herkenbare situaties, concrete uitdagingen en directe feedback.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="actief-leren" body=transfer_body %}

{% capture parts %}
{% include panels/value.html title="Storytelling geeft context" text="Een herkenbaar verhaal maakt duidelijk waar de kennis nodig is en welk probleem ermee wordt opgelost." %}
{% include panels/value.html title="MicroGames zorgen voor oefening" text="Korte, gerichte uitdagingen laten deelnemers kennis herkennen en toepassen. Ze leren door zelf iets te doen." %}
{% include panels/value.html title="Feedback en herhaling" text="Deelnemers ontdekken waarom een keuze wel of niet werkt en krijgen ruimte om hun aanpak te verbeteren." %}
{% endcapture %}
{% capture what_media %}
<p class="sp-lead">MicroGame Stories zijn korte, interactieve online trainingen waarin storytelling en <a href="{{ '/play/' | relative_url }}">game-based leren</a> worden gecombineerd.</p>
<p class="sp-lead">De deelnemer volgt een visueel verhaal rond een herkenbare praktijksituatie. Binnen dat verhaal ontstaat een probleem waarvoor specifieke kennis nodig is. Die kennis wordt vervolgens aangeboden en actief geoefend in een MicroGame: een korte spelvorm die gericht is op een concreet leerdoel.</p>
<p class="sp-lead">De deelnemer maakt keuzes, voert opdrachten uit en krijgt directe feedback. Na de MicroGame gaat het verhaal verder. Zo wordt duidelijk waarom de kennis belangrijk is en hoe die in de praktijk kan worden toegepast.</p>
{% endcapture %}
{% capture what_body %}
<h2>Wat zijn MicroGame Stories?</h2>
<p class="sp-lead sp-lead--center">Een MicroGame Story verbindt een herkenbaar verhaal, de kennis die op dat moment nodig is, en een korte spelvorm om die kennis te oefenen.</p>
{% include panels/media.html src="/assets/images/verhalen/basis-koeltechniek-gesprek.jpg" alt="Stripscène uit een leerervaring: twee monteurs in gesprek op een terras, met een knop om de scène te starten" width="1024" height="462" ratio="1024 / 462" body=what_media %}
<p class="sp-lead">Zo ontstaat een leerervaring waarin verhaal, kennis en spel elkaar versterken. MicroGame Stories zijn bedoeld om basiskennis actief te trainen en te borgen. Voor lastige afwegingen zonder één juist antwoord werken we met <a href="{{ '/diensten/dilemma-storytelling/' | relative_url }}">Dilemma Storytelling</a>.</p>
{% include panels/values.html label="Drie onderdelen van een MicroGame Story" items=parts %}
{% include panels/actions.html secondary_label="Ervaar een MicroGame Story" secondary_href="/verhalen/microgame-demo/" %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="wat-zijn-microgame-stories" body=what_body %}

{% capture route_steps %}
{% include panels/step.html num="1" title="Herken de situatie" text="De deelnemer maakt kennis met een personage, een werkomgeving of een herkenbaar praktijkprobleem. Het verhaal geeft context en roept nieuwsgierigheid op." %}
{% include panels/step.html num="2" title="Ontdek de uitdaging" text="Binnen het verhaal ontstaat een probleem dat om kennis of een vaardigheid vraagt. De deelnemer ontdekt wat er op het spel staat." %}
{% include panels/step.html num="3" title="Verken de noodzakelijke kennis" text="De leerstof wordt aangeboden op het moment dat die relevant is. Zo krijgt informatie direct betekenis binnen de situatie." %}
{% include panels/step.html num="4" title="Oefen met een MicroGame" text="De deelnemer gaat actief aan de slag. Bijvoorbeeld door onderdelen te herkennen of een proces te ordenen." %}
{% include panels/step.html num="5" title="Ontvang feedback en probeer opnieuw" text="De deelnemer ziet wat goed gaat en waar verbetering mogelijk is. Feedback legt uit waarom een keuze werkt of niet werkt." %}
{% include panels/step.html num="6" title="Rond af en reflecteer" text="De deelnemer keert terug naar het verhaal. Wat heb je geleerd, waarom is dat belangrijk, en hoe gebruik je die kennis in een vergelijkbare situatie?" %}
{% endcapture %}
{% capture route_body %}
<h2>Hoe werkt een MicroGame Story?</h2>
<p class="sp-lead sp-lead--center">Een MicroGame Story neemt de deelnemer mee langs een herkenbare leerroute, waarin de kennis stap voor stap betekenis krijgt.</p>
{% include panels/steps.html variant="flow" items=route_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="hoe-het-werkt" body=route_body %}

{% capture benefit_items %}
{% include panels/value.html title="Meer betrokkenheid bij de leerstof" text="Een herkenbaar verhaal en een concrete uitdaging geven deelnemers een reden om actief met de kennis aan de slag te gaan. Ze moeten zelf keuzes maken en opdrachten uitvoeren." %}
{% include panels/value.html title="Beter begrip door herkenbare context" text="Kennis wordt gekoppeld aan situaties waarin medewerkers die later nodig hebben. Daardoor wordt duidelijk waarom regels en werkwijzen belangrijk zijn." %}
{% include panels/value.html title="Ruimte om veilig te oefenen" text="Een MicroGame is een omgeving waarin deelnemers fouten mogen maken. Door feedback en herhaling verbeteren ze hun aanpak zonder gevolgen voor de dagelijkse praktijk." %}
{% include panels/value.html title="Korte, gerichte leeractiviteiten" text="MicroGame Stories zijn opgebouwd rond concrete leerdoelen. Deelnemers werken stap voor stap aan specifieke onderwerpen en vaardigheden." %}
{% endcapture %}
{% capture why_body %}
<h2>Waarom kiezen voor MicroGame Stories?</h2>
<p class="sp-lead sp-lead--center">MicroGame Stories zijn ontworpen om de stap van informatie naar toepasbare kennis kleiner te maken.</p>
{% include panels/values.html label="Wat een MicroGame Story oplevert" columns="two" items=benefit_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="waarom" body=why_body %}

{% capture fit_items %}
{% include panels/value.html title="Technische kennis en vakvaardigheden" text="Deelnemers verkennen processen en passen kennis toe in visuele opdrachten." %}
{% include panels/value.html title="Veiligheid en procedures" text="Medewerkers oefenen met het herkennen van risico's en het toepassen van procedures in herkenbare situaties." %}
{% include panels/value.html title="Onboarding en inwerken" text="Nieuwe medewerkers ontdekken processen, afspraken en werkwijzen via situaties uit de organisatie." %}
{% include panels/value.html title="Wet- en regelgeving" text="Complexe regels worden concrete opdrachten: wanneer geldt een regel, en hoe gebruik je die?" %}
{% include panels/value.html title="Processen en werkinstructies" text="Deelnemers oefenen met processtappen, verantwoordelijkheden en veelvoorkomende fouten." %}
{% include panels/value.html title="Kennis opfrissen en herhalen" text="Korte MicroGames activeren eerder geleerde kennis opnieuw, met variatie en gerichte feedback." %}
{% endcapture %}
{% capture fit_body %}
<h2>Voor welke leeruitdagingen zijn MicroGame Stories geschikt?</h2>
<p class="sp-lead">MicroGame Stories passen wanneer je belangrijke basiskennis wilt overdragen en medewerkers wilt laten oefenen met de toepassing ervan.</p>
{% include panels/values.html label="Leeruitdagingen voor MicroGame Stories" columns="two" items=fit_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="leeruitdagingen" body=fit_body %}

{% capture case_media %}
<p class="sp-lead">Hoe maak je complexe technische kennis toegankelijk voor professionals die de theorie in hun dagelijks werk moeten toepassen? Die uitdaging stond centraal bij het project Basis Koeltechniek (BRL200).</p>
<p class="sp-lead">Samen met Climatools BV, 21CC Education en Studium ontwikkelde Preludens een reeks interactieve MicroGames rond koeltechnische basiskennis. Onderwerpen zoals het mechanisch koudeproces, oververhitting, onderkoeling en het h-log-P-diagram kunnen abstract blijven wanneer ze uitsluitend via tekst of uitleg worden aangeboden.</p>
<p class="sp-lead">Met korte, visuele opdrachten verkennen deelnemers technische processen, herkennen ze verbanden en passen ze begrippen toe. Daarnaast ontwikkelden we een gameframework waarmee voortgang, prestaties en leeractiviteiten inzichtelijk kunnen worden gemaakt.</p>
<p class="sp-lead">Het project laat zien hoe MicroGames complexe vakkennis omzetten naar gerichte, interactieve leeractiviteiten. Een volledige MicroGame Story, met stripverhaal en vijf MicroGames, maakten we voor onITnow rond <a href="{{ '/verhalen/onitnow-verhaal-maria/' | relative_url }}">het verhaal van Maria</a>.</p>
{% include panels/actions.html secondary_label="Bekijk het project Basis Koeltechniek" secondary_href="/verhalen/nieuw-verhaal/" %}
{% endcapture %}
{% capture case_body %}
<h3>Uit de praktijk</h3>
<h2>Basis Koeltechniek</h2>
{% include panels/media.html src="/assets/images/verhalen/basis-koeltechniek-kringloop.jpg" alt="MicroGame waarin je onderdelen van het koelproces naar de juiste plek in de kringloop sleept" width="1024" height="460" ratio="1024 / 460" reverse=true body=case_media %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="basis-koeltechniek" body=case_body %}

{% capture build_steps %}
{% include panels/step.html num="1" title="We brengen de leeruitdaging in kaart" text="Wat moeten deelnemers weten, welke vaardigheden moeten ze ontwikkelen, en welke problemen komen ze in de praktijk tegen? Samen onderzoeken we de doelgroep en de leerbehoeften." %}
{% include panels/step.html num="2" title="We formuleren concrete leerdoelen" text="We maken duidelijk wat deelnemers moeten kunnen herkennen, begrijpen, kiezen of toepassen." %}
{% include panels/step.html num="3" title="We ontwikkelen een herkenbare verhaallijn" text="De deelnemer krijgt een herkenbare situatie, ontdekt een probleem en krijgt een reden om de leerstof te gebruiken." %}
{% include panels/step.html num="4" title="We ontwerpen passende MicroGames" text="Voor ieder leerdoel kiezen we een spelmechanisme dat past bij de leeractiviteit: herkennen, ordenen, combineren, beoordelen of toepassen. Inclusief feedback en herhaling." %}
{% include panels/step.html num="5" title="We ontwikkelen en testen" text="We brengen verhaal, vormgeving, kennis en interactie samen en verbeteren de ervaring waar dat nodig is." %}
{% include panels/step.html num="6" title="We leveren de MicroGame Story op" text="De leerervaring wordt beschikbaar via een bestaande leeromgeving of via Prepo, zodat die beheersbaar blijft en verder kan groeien." %}
{% endcapture %}
{% capture build_body %}
<h2>Hoe ontwikkelen wij een MicroGame Story?</h2>
<p class="sp-lead sp-lead--center">We beginnen bij de kennis die belangrijk is, de mensen die ermee moeten leren en de situaties waarin die kennis wordt gebruikt. Een spelidee komt daarna.</p>
{% include panels/steps.html variant="flow" items=build_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="ontwikkeling" body=build_body %}

{% capture existing_body %}
<h2>MicroGame Stories binnen je bestaande e-learning</h2>
<p class="sp-lead">Je hoeft niet direct een volledig nieuw leertraject te ontwikkelen om game-based leren in te zetten. Veel organisaties beschikken al over lesmateriaal, bestaande <a href="{{ '/e-learning/' | relative_url }}">e-learning</a> en duidelijke leerdoelen. Die inhoud is vaak een goed vertrekpunt.</p>
<p class="sp-lead">Preludens helpt om bestaande kennis te vertalen naar herkenbare verhalen, korte uitdagingen en gerichte spelmechanismen. Een bestaande module kan worden aangevuld met een MicroGame. Of één hoofdstuk wordt een MicroGame Story waarin deelnemers de belangrijkste kennis actief oefenen.</p>
<p class="sp-lead">Zo wordt game-based leren een aanvulling op bestaande e-learning. Onze missie is om deze manier van leren toegankelijk te maken voor organisaties die hun online trainingen willen versterken.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="bestaande-e-learning" body=existing_body %}

{% capture prepo_body %}
<h2>Eenvoudig aanbieden en beheren via Prepo</h2>
<p class="sp-lead">Een goede leerervaring is prettig in gebruik en blijft eenvoudig beschikbaar. Daarom helpen we bij de distributie en het beheer van MicroGames en Stories.</p>
<p class="sp-lead">Via <a href="{{ '/prepo/' | relative_url }}">Prepo</a>, de Preludens Portal, kunnen organisaties leerervaringen beheren, feedback verzamelen, versies bijhouden en inzicht krijgen in gebruik en voortgang. MicroGames en Stories kunnen ook worden aangeboden via een bestaande leeromgeving.</p>
<p class="sp-lead">Bij nieuwe MicroGames en Stories is drie maanden toegang tot Prepo inbegrepen. Daarmee is er na oplevering ruimte om de leerervaring te volgen en waar nodig te verbeteren.</p>
{% include panels/actions.html secondary_label="Ontdek Prepo" secondary_href="/prepo/" %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="prepo" body=prepo_body %}

{% capture small_body %}
<h2>Begin klein met één MicroGame Story</h2>
<p class="sp-lead">Game-based leren hoeft niet te beginnen met een omvangrijk ontwikkeltraject. Soms is één herkenbare situatie en één concreet leerdoel voldoende om de mogelijkheden te verkennen.</p>
<p class="sp-lead">Daarom kun je bij Preludens ook starten met één hoofdstuk van een MicroGame Story. We kiezen samen een afgebakend onderwerp, ontwikkelen een visueel verhaal en voegen een gerichte MicroGame toe waarin deelnemers actief met de kennis oefenen.</p>
<p class="sp-lead">Zo krijg je een eerste concrete leerervaring. Daarmee ontdek je hoe storytelling en spelprincipes aansluiten op jouw inhoud en doelgroep, en bepaal je of en hoe je verder wilt bouwen.</p>
{% include panels/actions.html secondary_label="Begin met één hoofdstuk" secondary_href="/contact/#een-hoofdstuk" %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="begin-klein" body=small_body %}

{% capture faq_body %}
<h2>Veelgestelde vragen over MicroGame Stories</h2>
<h3 class="sp-sub">Wat is het verschil tussen een MicroGame en een MicroGame Story?</h3>
<p class="sp-lead">Een MicroGame is een korte, gerichte spelvorm waarin deelnemers oefenen met een concreet leerdoel.</p>
<p class="sp-lead">Een MicroGame Story combineert één of meerdere MicroGames met een visueel verhaal. Het verhaal geeft context aan de kennis, terwijl de MicroGames zorgen voor actieve toepassing, feedback en herhaling.</p>
<h3 class="sp-sub">Wat is het verschil tussen MicroGame Stories en traditionele e-learning?</h3>
<p class="sp-lead">Traditionele e-learning richt zich vaak op het aanbieden van informatie via tekst, beeld, video en toetsen.</p>
<p class="sp-lead">MicroGame Stories voegen daar een verhalende context en actieve spelvormen aan toe. Deelnemers oefenen met de kennis binnen herkenbare situaties.</p>
<h3 class="sp-sub">Zijn MicroGame Stories hetzelfde als serious games?</h3>
<p class="sp-lead">MicroGame Stories gebruiken principes uit serious gaming, maar zijn compacter en gerichter opgebouwd. In plaats van één uitgebreide spelomgeving werken we met korte verhalen en MicroGames rond specifieke leerdoelen.</p>
<p class="sp-lead">Daardoor kunnen ze goed aansluiten op bestaande e-learning en kleinere leeropgaven.</p>
<h3 class="sp-sub">Kunnen we bestaande lesmaterialen gebruiken?</h3>
<p class="sp-lead">Ja. Bestaande documenten, presentaties, werkinstructies en e-learningmodules kunnen dienen als inhoudelijke basis. We onderzoeken welke kennis belangrijk is en vertalen die naar passende verhalen, uitdagingen en interacties.</p>
<h3 class="sp-sub">Kunnen MicroGame Stories in ons eigen LMS worden gebruikt?</h3>
<p class="sp-lead">Ja, afhankelijk van de technische mogelijkheden van de leeromgeving. Preludens kan leerervaringen geschikt maken voor gebruik binnen een bestaand LMS of beschikbaar stellen via Prepo.</p>
<h3 class="sp-sub">Wat kost het ontwikkelen van een MicroGame Story?</h3>
<p class="sp-lead">De kosten hangen af van de omvang van de leerinhoud, het aantal leerdoelen, de gewenste interacties en de vormgeving. We werken met korte, gerichte leerervaringen en bieden de mogelijkheid om klein te beginnen.</p>
<h3 class="sp-sub">Hoe lang duurt het ontwikkelen van een MicroGame Story?</h3>
<p class="sp-lead">Dat hangt af van de omvang en complexiteit. Voor een afgebakend eerste hoofdstuk hanteren we als uitgangspunt een ontwikkeltraject van ongeveer één maand. Een uitgebreidere leerroute vraagt een planning die aansluit op de inhoud en het aantal MicroGames.</p>
<h3 class="sp-sub">Voor welke organisaties zijn MicroGame Stories geschikt?</h3>
<p class="sp-lead">Voor organisaties die belangrijke kennis willen overdragen aan medewerkers, studenten of andere doelgroepen. Vooral wanneer kennis complex is, regelmatig moet worden herhaald of in herkenbare praktijksituaties moet worden toegepast.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="vragen" body=faq_body %}

{% capture cta_left %}Heb je belangrijke kennis die medewerkers beter moeten begrijpen, onthouden of toepassen? Met MicroGame Stories vertalen we die inhoud naar een actieve leerervaring waarin storytelling en MicroGames samenkomen.{% endcapture %}
{% capture cta_right %}Je hoeft nog niet precies te weten hoe die leerervaring eruit moet zien. In een GameStorm onderzoeken we de leeruitdaging en de leerdoelen, en verkennen we een eerste richting.{% endcapture %}
{% include panels/cta.html kicker="MicroGame Stories" title="Maak jouw kennis speelbaar" left=cta_left right=cta_right stack=true primary_label="Plan een GameStorm" primary_href="/gamestorm/" secondary_label="Begin met één hoofdstuk" secondary_href="/contact/#een-hoofdstuk" %}

{% include panels/footer-reveal.html %}
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat is het verschil tussen een MicroGame en een MicroGame Story?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Een MicroGame is een korte, gerichte spelvorm waarin deelnemers oefenen met een concreet leerdoel. Een MicroGame Story combineert één of meerdere MicroGames met een visueel verhaal. Het verhaal geeft context aan de kennis, terwijl de MicroGames zorgen voor actieve toepassing, feedback en herhaling."
      }
    },
    {
      "@type": "Question",
      "name": "Wat is het verschil tussen MicroGame Stories en traditionele e-learning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditionele e-learning richt zich vaak op het aanbieden van informatie via tekst, beeld, video en toetsen. MicroGame Stories voegen daar een verhalende context en actieve spelvormen aan toe. Deelnemers oefenen met de kennis binnen herkenbare situaties."
      }
    },
    {
      "@type": "Question",
      "name": "Zijn MicroGame Stories hetzelfde als serious games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MicroGame Stories gebruiken principes uit serious gaming, maar zijn compacter en gerichter opgebouwd. In plaats van één uitgebreide spelomgeving werken we met korte verhalen en MicroGames rond specifieke leerdoelen."
      }
    },
    {
      "@type": "Question",
      "name": "Kunnen we bestaande lesmaterialen gebruiken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Bestaande documenten, presentaties, werkinstructies en e-learningmodules kunnen dienen als inhoudelijke basis. We vertalen die kennis naar passende verhalen, uitdagingen en interacties."
      }
    },
    {
      "@type": "Question",
      "name": "Kunnen MicroGame Stories in ons eigen LMS worden gebruikt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, afhankelijk van de technische mogelijkheden van de leeromgeving. Preludens kan leerervaringen geschikt maken voor een bestaand LMS of beschikbaar stellen via Prepo."
      }
    },
    {
      "@type": "Question",
      "name": "Wat kost het ontwikkelen van een MicroGame Story?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De kosten hangen af van de omvang van de leerinhoud, het aantal leerdoelen, de gewenste interacties en de vormgeving. We werken met korte, gerichte leerervaringen en de mogelijkheid om klein te beginnen."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe lang duurt het ontwikkelen van een MicroGame Story?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dat hangt af van de omvang en complexiteit. Voor een afgebakend eerste hoofdstuk hanteren we als uitgangspunt een ontwikkeltraject van ongeveer één maand."
      }
    },
    {
      "@type": "Question",
      "name": "Voor welke organisaties zijn MicroGame Stories geschikt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Voor organisaties die belangrijke kennis willen overdragen aan medewerkers, studenten of andere doelgroepen, vooral wanneer die kennis complex is, herhaald moet worden of in de praktijk moet worden toegepast."
      }
    }
  ]
}
</script>
