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

<div class="panel-stack page-microgame-stories">
{% include panels/clips.html %}

<section class="hero-banner hero-banner--dark hero-banner--story" style="--hero-bg: url('{{ '/assets/images/hero/microgame-stories-banner.jpg' | relative_url }}?v=3');">
  <div class="container">
    <div class="hero-banner__inner">
      <h1>Zet je <span class="hl">leeropgave</span> om in een <span class="hl">verhaal</span> dat mensen <span class="hl">actief</span> meeneemt</h1>
      <hr class="hero-banner__accent">
      <p class="hero-banner__lead">Een MicroGame Story is een korte, online en visuele trainings-/leerervaring waarin storytelling de context vormt en MicroGames de deelnemer actief laten oefenen met concrete kennis of vaardigheden.</p>
      <div class="hero-banner__actions">
        <a class="btn hero-banner__contact" href="{{ '/contact/' | relative_url }}">Neem contact op <span class="btn__arrow" aria-hidden="true">→</span></a>
        <a class="btn btn-primary" href="{{ '/gamestorm/' | relative_url }}">Plan een GameStorm</a>
      </div>
    </div>
  </div>
</section>

{% capture transfer_copy %}
<p class="sp-lead sp-lead--justify">Je wilt belangrijke kennis overdragen aan je medewerkers. Kennis die ze moeten <strong>begrijpen, onthouden en toepassen wanneer het erop aankomt.</strong> Met MicroGame Stories maakt Preludens van die kennis een actieve leerervaring: herkenbare verhalen geven context, terwijl korte MicroGames deelnemers uitdagen om <strong>kennis terug te halen, te oefenen en toe te passen.</strong></p>
<p class="sp-lead sp-lead--justify">Kennisretentie ontstaat niet door informatie alleen maar vaker aan te bieden. Door deelnemers kennis actief uit hun geheugen te laten ophalen, ermee te laten oefenen en die op verschillende momenten opnieuw te gebruiken, wordt de kennis steeds opnieuw geactiveerd. <strong>Zo vergroot je de kans dat belangrijke kennis blijft hangen én beschikbaar is op het moment dat medewerkers die in de praktijk nodig hebben.</strong></p>
{% endcapture %}
{% capture transfer_body %}
<h2>Van informatieoverdracht naar <span class="hl">actief</span> leren</h2>
{% include panels/media.html reverse=true angle=true src="/assets/images/verhalen/co-wijzer-ruimtes.jpg" alt="Doorsnede van een huis waarin je ruimtes aanwijst waar een CO-melder hoort, uit de MicroGame CO-Wijzer" width="1024" height="464" ratio="1024 / 464" href="/verhalen/studium-co-wijzer/" caption="CO-Wijzer is ontwikkeld voor 21CC en Studium." body=transfer_copy %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="actief-leren" body=transfer_body %}

{% capture parts %}
{% include panels/value.html title="Storytelling geeft context" text="Een herkenbaar verhaal maakt duidelijk waar de kennis nodig is en welk probleem ermee wordt opgelost." %}
{% include panels/value.html title="MicroGames zorgen voor oefening" text="Korte, gerichte uitdagingen laten deelnemers kennis herkennen en toepassen. Ze leren door zelf iets te doen." %}
{% include panels/value.html title="Feedback en herhaling" text="Deelnemers ontdekken waarom een keuze wel of niet werkt en krijgen ruimte om hun aanpak te verbeteren." %}
{% endcapture %}
{% capture what_media %}
<p class="sp-lead sp-lead--justify">Een MicroGame Story verbindt een herkenbaar verhaal, relevante kennis en korte spelvormen tot één online leerervaring.</p>
<p class="sp-lead sp-lead--justify">De deelnemer volgt een visueel verhaal rond een herkenbare praktijksituatie. In het verhaal ontstaat een probleem of uitdaging waarvoor specifieke kennis nodig is. Op dat moment komt de MicroGame in beeld: een korte spelvorm waarin de deelnemer met die kennis aan de slag gaat, keuzes maakt, opdrachten uitvoert en directe feedback krijgt.</p>
<p class="sp-lead sp-lead--justify">Na de MicroGame gaat het verhaal verder en ziet de deelnemer hoe de opgedane kennis betekenis krijgt binnen de situatie. Zo ontstaat een natuurlijk ritme van verhaal → kennis → oefenen → feedback → vervolg, waarbij storytelling en game-based learning elkaar versterken.</p>
{% endcapture %}
{% capture what_body %}
<h2>Wat zijn <span class="hl">MicroGame Stories?</span></h2>
{% include panels/media.html angle=true src="/assets/images/verhalen/basis-koeltechniek-gesprek.jpg" alt="Stripscène uit Basis Koeltechniek: twee monteurs in gesprek op een terras" width="1024" height="462" ratio="1024 / 462" href="/verhalen/nieuw-verhaal/" caption="Koeltechniek is ontwikkeld voor Climatools en 21CC." body=what_media %}
{% include panels/values.html label="Drie onderdelen van een MicroGame Story" items=parts %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="wat-zijn-microgame-stories" body=what_body %}

{% capture start_copy %}
<h2>Start met één hoofdstuk</h2>
<p class="sp-lead">Je hoeft niet direct een complete leerroute te ontwikkelen. Begin met één onderwerp, één herkenbare praktijksituatie en een aantal gerichte MicroGames. Zo maak je belangrijke kennis direct trainbaar en ervaar je hoe MicroGame Stories binnen jouw organisatie kunnen werken.</p>
<div class="sp-actions">
  <a class="btn btn-primary" href="{{ '/contact/' | relative_url }}">Neem contact op <span class="btn__arrow" aria-hidden="true">→</span></a>
  <a class="btn btn-secondary" href="{{ '/gamestorm/' | relative_url }}">Plan een GameStorm <span class="btn__arrow" aria-hidden="true">→</span></a>
</div>
{% endcapture %}
{% capture start_body %}
{% include panels/media.html reverse=true src="/assets/images/verhalen/new-macbooks.png" alt="Strip New Macbooks: een rustige werkdag slaat om wanneer de computers uitvallen" width="906" height="979" ratio="906 / 979" body=start_copy %}
{% endcapture %}
{% include panels/panel.html variant="pale" id="start-met-een-hoofdstuk" body=start_body %}

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
{% include panels/steps.html variant="cards" items=route_steps %}
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

{% capture story_intro %}
<h2>Storytelling brengt kennis tot leven</h2>
<p class="sp-lead sp-lead--justify">Herkenbare personages en praktijksituaties geven nieuwe informatie context en maken duidelijk waarom die kennis ertoe doet. Door nieuwe kennis te verbinden aan een betekenisvolle situatie, wordt het makkelijker om verbanden te leggen en de informatie later weer terug te halen. Zo vormt het verhaal de basis waarop deelnemers in de MicroGames actief verder oefenen en hun kennis versterken.</p>
<p class="sp-lead sp-lead--justify">De deelnemer volgt een visueel verhaal rond een herkenbare praktijksituatie. Binnen dat verhaal ontstaat een probleem waarvoor specifieke kennis nodig is. Die kennis wordt vervolgens aangeboden en actief geoefend in een MicroGame: een korte spelvorm die gericht is op een concreet leerdoel.</p>
{% endcapture %}
{% capture story_body %}
{% include panels/media.html src="/assets/images/verhalen/maria-storytelling.jpg" alt="Stripverhaal waarin Maria haar team coacht bij de USM-methode: agree, change en recover" width="862" height="1024" ratio="862 / 1024" reverse=true body=story_intro %}
<h2 class="sp-story__next">Drie stappen naar kennis die blijft</h2>
<p class="sp-lead sp-lead--justify">Elke MicroGame richt zich op één concrete vaardigheid. Samen vormen de MicroGames een leerroute waarin deelnemers hun kennis stap voor stap versterken. Door kennis actief terug te halen, toe te passen en op verschillende momenten te herhalen, versterken we het leerproces.</p>
<ol class="sp-steps3">
  <li>
    <h3><span>01 —</span> Onthouden</h3>
    <p class="sp-steps3__q">Wat weet je eigenlijk?</p>
    <p>Deelnemers worden uitgedaagd om belangrijke informatie actief uit hun geheugen op te halen. Door te herkennen, ordenen en herinneren bouwen ze aan een stevige kennisbasis.</p>
  </li>
  <li>
    <h3><span>02 —</span> Begrijpen</h3>
    <p class="sp-steps3__q">Snap je ook waarom?</p>
    <p>Kennis krijgt betekenis wanneer deelnemers verbanden ontdekken en begrijpen hoe iets werkt. Ze onderzoeken situaties, leggen relaties en leren van gerichte feedback.</p>
  </li>
  <li>
    <h3><span>03 —</span> Toepassen</h3>
    <p class="sp-steps3__q">Kun je het ook gebruiken?</p>
    <p>Deelnemers krijgen herkenbare praktijksituaties voorgelegd waarin ze hun kennis moeten gebruiken. Ze maken keuzes, proberen oplossingen en ontdekken wat wel en niet werkt.</p>
  </li>
</ol>
{% endcapture %}
{% include panels/panel.html variant="harbor" id="storytelling" body=story_body %}

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

{% capture case_maria %}
<p class="sp-lead">Hoe breng je servicemanagement over zonder in een droge training te vervallen? Voor onITnow stond die vraag centraal in het verhaal van Maria, een MicroGame Story met een stripverhaal en vijf MicroGames.</p>
{% include panels/actions.html secondary_label="Bekijk het project Het verhaal van Maria" secondary_href="/verhalen/onitnow-verhaal-maria/" %}
{% include panels/case-pager.html %}
{% endcapture %}
{% capture case_koeltechniek %}
<p class="sp-lead">Hoe maak je complexe technische kennis toegankelijk voor professionals die de theorie in hun dagelijks werk moeten toepassen? Die uitdaging stond centraal bij het project Basis Koeltechniek (BRL200).</p>
{% include panels/actions.html secondary_label="Bekijk het project Basis Koeltechniek" secondary_href="/verhalen/nieuw-verhaal/" %}
{% include panels/case-pager.html %}
{% endcapture %}
{% capture case_cowijzer %}
<p class="sp-lead">Koolmonoxide kun je niet zien, ruiken of proeven. Bij CO-Wijzer oefenen professionals met het herkennen van dat risico en het maken van de veilige keuze.</p>
{% include panels/actions.html secondary_label="Bekijk het project CO-Wijzer" secondary_href="/verhalen/studium-co-wijzer/" %}
{% include panels/case-pager.html %}
{% endcapture %}
{% capture case_body %}
<h3>Uit de praktijk</h3>
<div class="sp-case" data-sp-case>
  <div class="sp-case__slide is-active" data-sp-case-slide>
    <h2>Het verhaal van Maria</h2>
    {% include panels/media.html src="/assets/images/verhalen/onitnow-verhaal-maria.jpg" alt="MicroGame waarin je de zes stappen van het operations management-proces vindt" width="1024" height="574" ratio="1024 / 574" reverse=true angle="flip" body=case_maria %}
  </div>
  <div class="sp-case__slide" data-sp-case-slide inert aria-hidden="true">
    <h2>Basis Koeltechniek</h2>
    {% include panels/media.html src="/assets/images/verhalen/basis-koeltechniek-kringloop.jpg" alt="MicroGame waarin je onderdelen van het koelproces naar de juiste plek in de kringloop sleept" width="1024" height="460" ratio="1024 / 460" reverse=true angle="flip" body=case_koeltechniek %}
  </div>
  <div class="sp-case__slide" data-sp-case-slide inert aria-hidden="true">
    <h2>CO-Wijzer</h2>
    {% include panels/media.html src="/assets/images/verhalen/co-wijzer-ruimtes.jpg" alt="CO-Wijzer: oefenen met de plek van een koolmonoxidemelder in een woning" width="1024" height="464" ratio="1024 / 460" reverse=true angle="flip" body=case_cowijzer %}
  </div>
</div>
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
{% include panels/steps.html variant="route" items=build_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="ontwikkeling" body=build_body %}

{% capture existing_main %}
<h2>MicroGame Stories binnen je bestaande e&#8209;learning</h2>
<p class="sp-lead sp-lead--justify">Je hoeft niet direct een volledig nieuw leertraject te ontwikkelen om game-based leren in te zetten. Veel organisaties beschikken al over lesmateriaal, bestaande <a href="{{ '/e-learning/' | relative_url }}">e-learning</a> en duidelijke leerdoelen. Die inhoud is vaak een goed vertrekpunt.</p>
<p class="sp-lead sp-lead--justify">Preludens helpt om bestaande kennis te vertalen naar herkenbare verhalen, korte uitdagingen en gerichte spelmechanismen. Een bestaande module kan worden aangevuld met een MicroGame. Of één hoofdstuk wordt een MicroGame Story waarin deelnemers de belangrijkste kennis actief oefenen.</p>
<p class="sp-lead sp-lead--justify">Zo wordt game-based leren een aanvulling op bestaande e-learning. Onze missie is om deze manier van leren toegankelijk te maken voor organisaties die hun online trainingen willen versterken.</p>
{% endcapture %}
{% capture existing_aside %}
<h2>SCORM of Prepo: kies wat bij jouw leeromgeving past</h2>
<p class="sp-lead sp-lead--justify">MicroGame Stories kunnen we opleveren als SCORM-pakket of in Articulate-formaat, zodat je ze kunt opnemen in je eigen LMS en onderdeel kunt maken van bestaande leertrajecten. Heb je geen eigen leeromgeving, of wil je de hosting liever aan ons overlaten? Dan kunnen we de MicroGame Stories ook beschikbaar stellen via Prepo Class. Zo kies je zelf hoe je de training aanbiedt.</p>
<p class="sp-lead sp-lead--justify">Via Prepo kun je de training vervolgens zelf beheren en aanpassen.</p>
<p class="sp-lead sp-lead--justify">Vanuit Prepo kun je een nieuwe SCORM- of Articulate-versie downloaden, zonder dat daarvoor opnieuw inzet van Preludens nodig is. Zo houd je zelf controle over de content én over de versie die je in je LMS gebruikt.</p>
{% endcapture %}
{% capture existing_body %}
{% include panels/aside.html variant="even" main=existing_main aside=existing_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="bestaande-e-learning" body=existing_body %}

{% capture prepo_copy %}
<p class="sp-lead sp-lead--justify">Een goede leerervaring is prettig in gebruik en blijft eenvoudig beschikbaar. Daarom helpen we bij de distributie en het beheer van MicroGames en Stories.</p>
<p class="sp-lead sp-lead--justify">Via <a href="{{ '/prepo/' | relative_url }}">Prepo</a>, de Preludens Portal, kunnen organisaties leerervaringen beheren, feedback verzamelen, versies bijhouden en inzicht krijgen in gebruik en voortgang. MicroGames en Stories kunnen ook worden aangeboden via een bestaande leeromgeving.</p>
<p class="sp-lead sp-lead--justify">Bij nieuwe MicroGames en Stories is drie maanden toegang tot Prepo inbegrepen. Daarmee is er na oplevering ruimte om de leerervaring te volgen en waar nodig te verbeteren.</p>
{% include panels/actions.html secondary_label="Ontdek Prepo" secondary_href="/prepo/" %}
{% endcapture %}
{% capture prepo_body %}
<h2>Eenvoudig aanbieden en beheren via Prepo</h2>
{% include panels/media.html angle=true src="/assets/images/verhalen/prepo-overzicht.jpg" alt="Prepo-overzicht van het project CO-Wijzer vervolg, met games als Rookgasanalyse en Onderhoud" width="1024" height="582" ratio="1024 / 582" body=prepo_copy %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="prepo" body=prepo_body %}

{% capture small_copy %}
<p class="sp-lead sp-lead--justify">Game-based leren hoeft niet te beginnen met een omvangrijk ontwikkeltraject. Soms is één herkenbare situatie en één concreet leerdoel voldoende om de mogelijkheden te verkennen.</p>
<p class="sp-lead sp-lead--justify">Daarom kun je bij Preludens ook starten met één hoofdstuk van een MicroGame Story. We kiezen samen een afgebakend onderwerp, ontwikkelen een visueel verhaal en voegen een gerichte MicroGame toe waarin deelnemers actief met de kennis oefenen.</p>
<p class="sp-lead sp-lead--justify">Zo krijg je een eerste concrete leerervaring. Daarmee ontdek je hoe storytelling en spelprincipes aansluiten op jouw inhoud en doelgroep, en bepaal je of en hoe je verder wilt bouwen.</p>
{% include panels/actions.html secondary_label="Begin met één hoofdstuk" secondary_href="/contact/#een-hoofdstuk" %}
{% endcapture %}
{% capture small_body %}
<h2>Begin compact met één hoofdstuk</h2>
{% include panels/media.html reverse=true angle=true src="/assets/images/verhalen/brug-in-bedrijf.png" alt="MicroGame waarin je een brug bedient, met de melding dat doorvaart is toegestaan" width="1024" height="498" ratio="1024 / 498" body=small_copy %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="begin-klein" body=small_body %}

{% capture cta_left %}Heb je belangrijke kennis die medewerkers beter moeten begrijpen, onthouden of toepassen? Met MicroGame Stories vertalen we die inhoud naar een actieve leerervaring waarin storytelling en MicroGames samenkomen.{% endcapture %}
{% capture cta_right %}Je hoeft nog niet precies te weten hoe die leerervaring eruit moet zien. In een GameStorm onderzoeken we de leeruitdaging en de leerdoelen, en verkennen we een eerste richting.{% endcapture %}
{% include panels/cta.html kicker="MicroGame Stories" title="Maak jouw kennis speelbaar" left=cta_left right=cta_right stack=true primary_label="Plan een GameStorm" primary_href="/gamestorm/" secondary_label="Begin met één hoofdstuk" secondary_href="/contact/#een-hoofdstuk" %}

{% include panels/footer-reveal.html %}
</div>
