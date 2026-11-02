---
layout: default
lang: nl
title: "Dilemma Storytelling: besluitvorming trainen"
tile_title: Dilemma Storytelling
description: Train besluitvorming met Dilemma Storytelling. Laat medewerkers realistische dilemma's verkennen, belangen afwegen en gevolgen ervaren.
summary: >-
  Teams verkennen lastige situaties waarin meerdere belangen tegelijk spelen
  en niet elk antwoord even goed is.
permalink: /diensten/dilemma-storytelling/
order: 3
body_class: page-panels
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_actions %}
<p class="sp-lead">Met Dilemma Storytelling ontwikkelt Preludens interactieve verhalen waarin medewerkers oefenen met dit soort afwegingen. Ze stappen in een herkenbare situatie, maken keuzes en ontdekken welke gevolgen hun beslissingen hebben voor verschillende doelen en betrokkenen.</p>
<p class="sp-lead">Zo ontstaat een veilige leeromgeving waarin teams kunnen verkennen, oefenen en reflecteren voordat vergelijkbare situaties zich in de praktijk voordoen.</p>
{% include panels/actions.html primary_label="Plan een GameStorm" primary_href="/gamestorm/" secondary_label="Ontdek een interactief dilemma" secondary_href="#ervaringsblok" %}
{% endcapture %}
{% capture hero_title %}Dilemma Storytelling: leer betere <span class="hl">keuzes</span> maken{% endcapture %}
{% capture hero_lead %}Interactieve scenario's waarin medewerkers lastige beslissingen oefenen en de gevolgen van hun keuzes ervaren.{% endcapture %}
{% capture hero_lead2 %}In de praktijk is niet iedere beslissing eenvoudig. Medewerkers moeten regelmatig kiezen tussen belangen die met elkaar botsen. Veiligheid of snelheid? Kwaliteit of kosten? Klanttevredenheid of het volgen van een procedure? Vaak bestaat er niet één antwoord dat in iedere situatie juist is.{% endcapture %}
{% include panels/hero.html kicker="Diensten" title=hero_title lead=hero_lead lead2=hero_lead2 actions=hero_actions figure_src="/assets/images/hero/diensten-hero.jpg" figure_alt="Een team dat samen een route uitzet" figure_href="#ervaringsblok" figure_caption="Van weten naar afwegen." %}

{% capture recognize_body %}
<h2>Weten wat je moet doen, is niet hetzelfde als kunnen beslissen</h2>
<p class="sp-lead">Veel organisaties investeren in kennisoverdracht. Medewerkers leren procedures, richtlijnen en werkwijzen. Ze volgen trainingen en krijgen uitleg over de verantwoordelijkheden die bij hun functie horen.</p>
<p class="sp-lead">Maar de dagelijkse praktijk is zelden zo overzichtelijk als een instructie. Wat doe je wanneer een klant een uitzondering vraagt? Wanneer een veiligheidsmaatregel vertraging veroorzaakt? Of wanneer twee belangrijke doelen niet tegelijkertijd haalbaar zijn?</p>
<p class="sp-lead">Op zulke momenten moeten medewerkers meer doen dan kennis reproduceren. Ze moeten de situatie begrijpen, belangen herkennen, gevolgen inschatten en een beslissing nemen.</p>
<p class="sp-lead">De uitdaging zit niet altijd in het kennen van de regels, maar in het maken van een <strong>goede afweging wanneer belangen botsen</strong>. Juist die vaardigheid is lastig te trainen met alleen uitleg of een traditionele kennistoets.</p>
<p class="sp-lead">Daarom ontwikkelt Preludens leerervaringen waarin deelnemers kunnen oefenen met de complexiteit van echte beslissingen. Een MicroGame kan helpen om een procedure correct uit te voeren. Dilemma Storytelling laat ervaren wat er gebeurt wanneer die procedure botst met tijdsdruk, klantbelangen, veiligheid of andere verantwoordelijkheden.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="kunnen-beslissen" body=recognize_body %}

{% capture dilemma_body %}
<h2>Ontdek een interactief dilemma</h2>
<p class="sp-lead">Een keuze is vaak ingewikkelder dan hij op het eerste gezicht lijkt. Hieronder kun je één situatie verkennen. Het is een verkort, fictief scenario, geen uitgevoerd project. In een echte Dilemma Story ontwikkelt het verhaal zich verder en werken eerdere keuzes door in latere situaties.</p>
<div class="dilemma-play" id="dilemma" data-dilemma>
  <p class="dilemma-play__kicker">Fictief scenario</p>
  <h3 class="sp-sub">De deadline komt dichterbij</h3>
  <p>Je bent teamleider. Een belangrijke opdracht moet vandaag worden afgerond. De klant rekent op oplevering, maar een medewerker meldt dat een veiligheidscontrole nog niet is voltooid.</p>
  <p><strong>Wat doe je?</strong></p>
  <div class="dilemma-play__choices" data-dilemma-choices>
    <button type="button" data-choice="stil">Je legt het werk stil totdat de veiligheidscontrole is afgerond.</button>
    <button type="button" data-choice="door">Je laat het team alvast verder werken om de deadline te halen.</button>
    <button type="button" data-choice="samen">Je onderzoekt met het team een veilige alternatieve werkwijze.</button>
  </div>
  <div data-dilemma-result hidden>
    <p data-dilemma-lead></p>
    <ul class="dilemma-play__kpis">
      <li><strong>Veiligheid</strong> <span data-kpi="veiligheid"></span></li>
      <li><strong>Kwaliteit</strong> <span data-kpi="kwaliteit"></span></li>
      <li><strong>Snelheid</strong> <span data-kpi="snelheid"></span></li>
      <li><strong>Klanttevredenheid</strong> <span data-kpi="klant"></span></li>
    </ul>
    <button class="dilemma-play__reset" type="button" data-dilemma-reset>Kies een andere aanpak</button>
  </div>
</div>
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="ervaringsblok" body=dilemma_body %}

{% capture parts %}
{% include panels/value.html title="Realistische scenario's geven context" text="Deelnemers herkennen de situaties, verantwoordelijkheden en spanningen uit hun eigen werkomgeving." %}
{% include panels/value.html title="Keuzes maken afwegingen zichtbaar" text="Deelnemers beslissen terwijl meerdere belangen tegelijk spelen. Niet iedere keuze is zonder nadelen." %}
{% include panels/value.html title="Gevolgen en reflectie geven inzicht" text="Elke beslissing beïnvloedt het verdere verloop. Deelnemers zien wat hun keuze doet en kunnen daarop reflecteren." %}
{% endcapture %}
{% capture what_body %}
<h2>Wat is Dilemma Storytelling?</h2>
<p class="sp-lead">Dilemma Storytelling is een vorm van scenario-based learning. Deelnemers doorlopen realistische scenario's en nemen beslissingen die het verdere verloop van het verhaal beïnvloeden. Meer over hoe wij leren en spel combineren, lees je bij <a href="{{ '/play/' | relative_url }}">onze methode</a>.</p>
<p class="sp-lead">De deelnemer krijgt een herkenbare rol in een situatie waarin meerdere belangen spelen. Er ontstaat een probleem dat om een keuze vraagt. Iedere beslissing heeft gevolgen voor het verhaal, de betrokken personen en de doelen die binnen de situatie belangrijk zijn. Denk aan veiligheid, kwaliteit, snelheid, kosten, samenwerking of klanttevredenheid.</p>
<p class="sp-lead">Niet iedere keuze is eenvoudig goed of fout. Soms verbetert een beslissing het ene resultaat, terwijl een ander doel onder druk komt te staan. Door die gevolgen zichtbaar te maken, ontdekken deelnemers hoe belangen samenhangen en waarom professioneel handelen om zorgvuldige afwegingen vraagt.</p>
{% include panels/values.html label="Drie onderdelen van Dilemma Storytelling" items=parts %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="wat-is-dilemma-storytelling" body=what_body %}

{% capture route_steps %}
{% include panels/step.html num="1" title="Stap in een herkenbare situatie" text="De deelnemer krijgt een rol binnen een realistisch scenario, bijvoorbeeld als teamleider, toezichthouder, servicemedewerker of technisch specialist." %}
{% include panels/step.html num="2" title="Ontdek de spanning" text="Belangen botsen. Een klant vraagt om snelheid terwijl de kwaliteit onder druk staat, of een procedure staat een urgente oplossing in de weg." %}
{% include panels/step.html num="3" title="Maak een keuze" text="Iedere optie heeft een eigen afweging. Er is niet altijd één antwoord dat op alle onderdelen het beste resultaat oplevert." %}
{% include panels/step.html num="4" title="Ervaar de gevolgen" text="De keuze verandert het verhaal: in de reactie van betrokkenen, in de situatie en in de doelen die ertoe doen." %}
{% include panels/step.html num="5" title="Herken nieuwe uitdagingen" text="Eerdere beslissingen openen mogelijkheden, maar kunnen ook beperkingen veroorzaken. De deelnemer moet opnieuw kijken en handelen." %}
{% include panels/step.html num="6" title="Reflecteer op de gemaakte keuzes" text="Welke doelen zijn bereikt, waar ontstonden risico's, en welke andere aanpak was mogelijk geweest?" %}
{% endcapture %}
{% capture route_body %}
<h2>Hoe werkt Dilemma Storytelling?</h2>
<p class="sp-lead sp-lead--center">Een Dilemma Story neemt de deelnemer mee door herkenbare situaties waarin beslissingen het verdere verloop beïnvloeden. Er is ruimte om mogelijkheden te onderzoeken, en een duidelijk kader om gericht te blijven leren.</p>
{% include panels/steps.html variant="flow" items=route_steps %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="hoe-het-werkt" body=route_body %}

{% capture goal_items %}
{% include panels/value.html title="Veiligheid" text="Welke risico's ontstaan of worden voorkomen door een bepaalde beslissing?" %}
{% include panels/value.html title="Kwaliteit" text="Wat betekent de keuze voor de kwaliteit van het werk of de dienstverlening?" %}
{% include panels/value.html title="Snelheid" text="Welke invloed heeft de beslissing op de voortgang of doorlooptijd?" %}
{% include panels/value.html title="Klanttevredenheid" text="Hoe ervaren klanten of andere betrokkenen de gevolgen van het handelen?" %}
{% include panels/value.html title="Samenwerking" text="Welke invloed heeft de keuze op vertrouwen, afstemming en verantwoordelijkheden binnen het team?" %}
{% endcapture %}
{% capture goals_body %}
<h2>Maak de gevolgen van keuzes inzichtelijk</h2>
<p class="sp-lead">In de praktijk hebben keuzes vaak invloed op meerdere doelen tegelijk. Een organisatie wil veilig werken, goede kwaliteit leveren, klanten tevreden houden en efficiënt omgaan met tijd en middelen. Die doelen kunnen botsen.</p>
<p class="sp-lead">Daarom koppelen we beslissingen binnen een Dilemma Story aan specifieke doelen. Het gaat niet om het behalen van een hoge score, maar om het begrijpen van de samenhang tussen keuzes en gevolgen.</p>
{% include panels/values.html label="Doelen waarop een keuze kan doorwerken" items=goal_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="gevolgen" body=goals_body %}

{% capture benefit_items %}
{% include panels/value.html title="Sterker leren afwegen" text="Deelnemers oefenen met situaties waarin meerdere belangen tegelijk spelen. Ze kijken verder dan de eerste oplossing." %}
{% include panels/value.html title="Veilig experimenteren" text="Keuzes onderzoeken kan zonder directe gevolgen voor klanten, collega's of bedrijfsprocessen. Ook een minder goede beslissing levert inzicht op." %}
{% include panels/value.html title="Meer inzicht in professioneel handelen" text="Afwegingen worden bespreekbaar. Deelnemers zien welke aannames, prioriteiten en gewoonten hun handelen beïnvloeden." %}
{% include panels/value.html title="Een gezamenlijke basis voor reflectie" text="Wanneer een team hetzelfde dilemma doorloopt, ontstaat een gedeelde ervaring om verschillen in aanpak te bespreken." %}
{% endcapture %}
{% capture why_body %}
<h2>Waarom kiezen voor Dilemma Storytelling?</h2>
<p class="sp-lead sp-lead--center">Dilemma Storytelling bereidt medewerkers voor op situaties waarin kennis, gedrag en besluitvorming samenkomen.</p>
{% include panels/values.html label="Wat Dilemma Storytelling oplevert" columns="two" items=benefit_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="waarom" body=why_body %}

{% capture fit_items %}
{% include panels/value.html title="Veiligheid en risicobeheersing" text="Oefenen met beslissingen waarin veiligheid, voortgang en operationele belangen botsen, ook als de situatie afwijkt van de procedure." %}
{% include panels/value.html title="Leiderschap en management" text="Leidinggevenden verkennen afwegingen rond samenwerking, prestaties, werkdruk en verantwoordelijkheid." %}
{% include panels/value.html title="Klantcontact en dienstverlening" text="Klantverwachtingen, kwaliteit, middelen en interne afspraken sluiten niet vanzelf op elkaar aan." %}
{% include panels/value.html title="Toezicht en handhaving" text="Professionals oefenen met het beoordelen van situaties, het inschatten van risico's en het afwegen van belangen binnen hun bevoegdheden." %}
{% include panels/value.html title="Samenwerking en organisatieverandering" text="Zichtbaar maken hoe beslissingen van verschillende teams elkaar beïnvloeden wanneer prioriteiten uiteenlopen." %}
{% include panels/value.html title="Professionele en ethische dilemma's" text="Situaties waarin waarden en verantwoordelijkheden botsen, en deelnemers hun keuze moeten kunnen onderbouwen." %}
{% endcapture %}
{% capture fit_body %}
<h2>Voor welke situaties is Dilemma Storytelling geschikt?</h2>
<p class="sp-lead">Dilemma Storytelling is waardevol wanneer medewerkers moeten handelen terwijl verschillende belangen, verantwoordelijkheden of risico's samenkomen.</p>
{% include panels/values.html label="Situaties voor Dilemma Storytelling" columns="two" items=fit_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="situaties" body=fit_body %}

{% capture case_media %}
<p class="sp-lead">Voor de TU Delft ontwikkelden we The Disruption Game: een interactieve Dilemma Story over een logistieke verstoring. Deelnemers hebben niet alle informatie, moeten kiezen en zien hoe die keuze doorwerkt in veiligheid, klanttevredenheid en prestaties.</p>
<p class="sp-lead">Er is niet één antwoord dat de verstoring oplost. Het scenario laat zien wat er gebeurt wanneer je meer informatie zoekt, instructies geeft of een andere route neemt, en welke belangen daardoor verschuiven.</p>
{% include panels/actions.html secondary_label="Bekijk The Disruption Game" secondary_href="/verhalen/maryland-disruption-game/" %}
{% endcapture %}
{% capture case_body %}
<h3>Uit de praktijk</h3>
<h2>The Disruption Game</h2>
{% include panels/media.html src="/assets/images/verhalen/disruption-keuze.jpg" alt="Scherm uit The Disruption Game: twee keuzes tijdens een staking, met indicatoren voor veiligheid, klanttevredenheid en prestaties" width="1024" height="459" ratio="1024 / 459" body=case_media %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="disruption-game" body=case_body %}

{% capture build_steps %}
{% include panels/step.html num="1" title="We onderzoeken de praktijksituatie" text="Welke beslissingen zijn lastig, welke belangen spelen een rol, en waar ontstaan risico's of terugkerende problemen?" %}
{% include panels/step.html num="2" title="We bepalen de leerdoelen" text="Bijvoorbeeld belangen herkennen, risico's beoordelen, keuzes onderbouwen of de gevolgen van een beslissing begrijpen." %}
{% include panels/step.html num="3" title="We ontwerpen het scenario" text="Een herkenbaar verhaal met rollen, verantwoordelijkheden en spanningen. De deelnemer moet beslissen om verder te komen." %}
{% include panels/step.html num="4" title="We ontwerpen keuzes en gevolgen" text="We bepalen welke gevolgen iedere keuze heeft voor het verhaal, de betrokken personen en de doelen binnen het scenario." %}
{% include panels/step.html num="5" title="We ontwikkelen en testen" text="We kijken of de situaties herkenbaar zijn, de afwegingen betekenis hebben en de feedback aansluit op de leerdoelen." %}
{% include panels/step.html num="6" title="We maken de leerervaring beschikbaar" text="Via een bestaande leeromgeving of via Prepo. Waar dat past, geven keuzes inzicht in het verloop van de training." %}
{% endcapture %}
{% capture build_body %}
<h2>Hoe ontwikkelen wij Dilemma Storytelling?</h2>
<p class="sp-lead sp-lead--center">Een goede Dilemma Story begint bij een herkenbare spanning uit de praktijk. We onderzoeken waar medewerkers moeilijke keuzes moeten maken en welk gedrag de organisatie wil versterken.</p>
{% include panels/steps.html variant="flow" items=build_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="ontwikkeling" body=build_body %}

{% capture diff_body %}
<h2>Dilemma Storytelling en MicroGame Stories</h2>
<p class="sp-lead">Beide leerformats combineren storytelling met actieve deelname. Het vertrekpunt verschilt.</p>
<h3 class="sp-sub">MicroGame Stories: kennis begrijpen en toepassen</h3>
<p class="sp-lead"><a href="{{ '/diensten/microgame-stories/' | relative_url }}">MicroGame Stories</a> zijn gericht op het overdragen, oefenen en borgen van concrete kennis. Deelnemers volgen een visueel verhaal en oefenen met korte MicroGames rond specifieke leerdoelen. Dat past bij technische kennis, procedures, onboarding en werkinstructies.</p>
<h3 class="sp-sub">Dilemma Storytelling: belangen afwegen en beslissingen nemen</h3>
<p class="sp-lead">Dilemma Storytelling richt zich op situaties waarin meerdere belangen tegelijk spelen en niet iedere keuze één duidelijk goed antwoord heeft. Deelnemers onderzoeken handelingsmogelijkheden en ervaren de gevolgen. Dat past bij leiderschap, veiligheid, klantcontact, toezicht en professioneel handelen.</p>
<p class="sp-lead">Welke aanpak past, hangt af van de leeruitdaging. Soms moeten medewerkers kennis leren toepassen. Soms moeten ze beter leren omgaan met complexe beslissingen. In sommige trajecten vullen beide vormen elkaar aan. Wanneer de opgave zelf nog niet scherp is, beginnen we met <a href="{{ '/diensten/game-thinking/' | relative_url }}">Game Thinking</a>: eerst zicht krijgen op gedrag, doelen en wat er moet veranderen.</p>
{% include panels/actions.html secondary_label="Ontdek MicroGame Stories" secondary_href="/diensten/microgame-stories/" %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="verschil" body=diff_body %}

{% capture wider_body %}
<h2>Dilemma Storytelling als onderdeel van een leertraject</h2>
<p class="sp-lead">Dilemma Storytelling kan een zelfstandige leerervaring zijn, of een onderdeel van een breder trainings- of verandertraject. Bijvoorbeeld als voorbereiding op een workshop, als oefening in een leiderschapsprogramma, of als verdieping na een bestaande e-learningmodule.</p>
<p class="sp-lead">Deelnemers kunnen vooraf zelfstandig een situatie verkennen. In een gezamenlijke bijeenkomst worden de gemaakte keuzes besproken. Waarom koos iemand voor een bepaalde aanpak? Welke belangen kregen prioriteit? Hoe zou een collega dezelfde situatie beoordelen?</p>
<p class="sp-lead">Zo wordt het interactieve verhaal niet alleen een individuele leerervaring, maar ook een vertrekpunt voor dialoog en gezamenlijke reflectie. Distributie en beheer kunnen via een bestaande leeromgeving of via <a href="{{ '/prepo/' | relative_url }}">Prepo</a>.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="leertraject" body=wider_body %}

{% capture faq_body %}
<h2>Veelgestelde vragen over Dilemma Storytelling</h2>
<h3 class="sp-sub">Wat is Dilemma Storytelling?</h3>
<p class="sp-lead">Een interactieve leervorm waarin deelnemers realistische scenario's doorlopen, keuzes maken en de gevolgen van hun beslissingen ervaren. Het oefent besluitvorming, het afwegen van belangen en reflectie op professioneel handelen.</p>
<h3 class="sp-sub">Wat is het verschil met scenario-based learning?</h3>
<p class="sp-lead">Scenario-based learning is de brede aanpak waarbij deelnemers leren vanuit realistische situaties. Dilemma Storytelling is de toepassing van Preludens waarin een verhalende structuur, betekenisvolle keuzes en zichtbare gevolgen centraal staan. De nadruk ligt op situaties waarin belangen botsen.</p>
<h3 class="sp-sub">Heeft ieder dilemma een goed of fout antwoord?</h3>
<p class="sp-lead">Nee. Bij complexe dilemma's bestaat niet altijd één oplossing die op alle onderdelen het beste resultaat oplevert. Deelnemers onderzoeken welke afwegingen mogelijk zijn. Sommige beslissingen kunnen wel strijdig zijn met belangrijke regels, veiligheidsvoorwaarden of professionele verantwoordelijkheden.</p>
<h3 class="sp-sub">Kunnen deelnemers verschillende uitkomsten ervaren?</h3>
<p class="sp-lead">Ja. Verschillende keuzes kunnen leiden tot andere reacties, gevolgen of vervolgsituaties. Welke vertakkingen nodig zijn, bepalen we aan de hand van de leerdoelen en de complexiteit van het scenario.</p>
<h3 class="sp-sub">Kunnen we onze eigen praktijksituaties gebruiken?</h3>
<p class="sp-lead">Ja. Herkenbare situaties uit de organisatie zijn het vertrekpunt. Samen met inhoudelijke experts onderzoeken we welke dilemma's zich lenen voor een interactieve leerervaring.</p>
<h3 class="sp-sub">Kunnen we Dilemma Storytelling inzetten voor teams?</h3>
<p class="sp-lead">Ja. De leerervaring kan individueel worden doorlopen en daarna de basis zijn voor gezamenlijke reflectie. Zo worden verschillende perspectieven binnen een team bespreekbaar.</p>
<h3 class="sp-sub">Kunnen keuzes en resultaten inzichtelijk worden gemaakt?</h3>
<p class="sp-lead">Keuzes kunnen worden gekoppeld aan doelen zoals veiligheid, kwaliteit, snelheid en klanttevredenheid. Welke informatie wordt geregistreerd, hangt af van de technische oplossing en de afspraken over gegevensgebruik.</p>
<h3 class="sp-sub">Wat kost het ontwikkelen van Dilemma Storytelling?</h3>
<p class="sp-lead">De kosten hangen af van het aantal scenario's, de complexiteit van de keuzes, het aantal verhaallijnen en de gewenste vormgeving. In een eerste verkenning onderzoeken we welke omvang past bij de leerdoelen en de middelen.</p>
<h3 class="sp-sub">Kunnen we klein beginnen?</h3>
<p class="sp-lead">Ja. Eén afgebakend dilemma kan een eerste verkenning zijn. Daarmee zien we of de situatie herkenbaar is, welke keuzes betekenis hebben en hoe de gevolgen het best zichtbaar worden. Vanuit die ervaring kan een uitgebreider scenario ontstaan.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="vragen" body=faq_body %}

{% capture cta_left %}Zijn er binnen jouw organisatie situaties waarin medewerkers regelmatig moeilijke beslissingen moeten nemen? Situaties waarin veiligheid, kwaliteit, snelheid, klanttevredenheid of samenwerking met elkaar botsen?{% endcapture %}
{% capture cta_right %}In een GameStorm onderzoeken we de belangrijkste spanningen, de doelgroep en het gewenste gedrag. Zo ontstaat een eerste richting voor een Dilemma Story.{% endcapture %}
{% include panels/cta.html kicker="Dilemma Storytelling" title="Maak complexe keuzes bespreekbaar en leerbaar" left=cta_left right=cta_right stack=true primary_label="Plan een GameStorm" primary_href="/gamestorm/" secondary_label="Ontdek onze diensten" secondary_href="/diensten/" %}

{% include panels/footer-reveal.html %}
</div>

<script>
(function () {
  var root = document.querySelector("[data-dilemma]");
  if (!root) return;
  var choices = root.querySelector("[data-dilemma-choices]");
  var result = root.querySelector("[data-dilemma-result]");
  var lead = root.querySelector("[data-dilemma-lead]");
  var outcomes = {
    stil: {
      lead: "Het werk ligt stil tot de controle is afgerond. Het risico blijft beheerst, de planning schuift.",
      veiligheid: "De controle wordt afgemaakt voordat het team verdergaat.",
      kwaliteit: "Het werk gaat daarna verder op een gecontroleerde basis.",
      snelheid: "Oplevering vandaag is niet meer haalbaar.",
      klant: "De klant hoort een duidelijke reden, en ook dat de deadline niet wordt gehaald."
    },
    door: {
      lead: "Het team werkt door om de deadline te halen. De oplevering blijft in zicht, het openstaande risico ook.",
      veiligheid: "De controle is niet afgerond. Er blijft een risico dat later kan terugkomen.",
      kwaliteit: "Het werk kan opnieuw moeten als de controle alsnog iets oplevert.",
      snelheid: "De klant kan vandaag de oplevering verwachten.",
      klant: "De klant krijgt wat was beloofd, met een onzekerheid die nog niet is weggenomen."
    },
    samen: {
      lead: "Je zoekt met het team een route die een deel van het werk mogelijk maakt zonder het openstaande risico te negeren.",
      veiligheid: "Jullie beperken het werk tot wat nog verantwoord kan, tot de controle rond is.",
      kwaliteit: "De oplossing hangt af van wat het team nog zorgvuldig kan doen.",
      snelheid: "Afstemmen kost tijd. Een deel van de opdracht kan misschien wel vandaag af.",
      klant: "De klant hoort wat wel en niet kan, in plaats van een ja of een nee."
    }
  };

  function show(key) {
    var outcome = outcomes[key];
    if (!outcome) return;
    lead.textContent = outcome.lead;
    ["veiligheid", "kwaliteit", "snelheid", "klant"].forEach(function (name) {
      root.querySelector('[data-kpi="' + name + '"]').textContent = outcome[name];
    });
    choices.hidden = true;
    result.hidden = false;
  }

  choices.addEventListener("click", function (event) {
    var button = event.target.closest("[data-choice]");
    if (!button) return;
    show(button.getAttribute("data-choice"));
  });

  root.querySelector("[data-dilemma-reset]").addEventListener("click", function () {
    result.hidden = true;
    choices.hidden = false;
  });
})();
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Wat is Dilemma Storytelling?", "acceptedAnswer": {"@type": "Answer", "text": "Een interactieve leervorm waarin deelnemers realistische scenario's doorlopen, keuzes maken en de gevolgen van hun beslissingen ervaren."}},
    {"@type": "Question", "name": "Wat is het verschil met scenario-based learning?", "acceptedAnswer": {"@type": "Answer", "text": "Scenario-based learning is de brede aanpak waarbij deelnemers leren vanuit realistische situaties. Dilemma Storytelling is de toepassing van Preludens waarin een verhaal, betekenisvolle keuzes en zichtbare gevolgen centraal staan."}},
    {"@type": "Question", "name": "Heeft ieder dilemma een goed of fout antwoord?", "acceptedAnswer": {"@type": "Answer", "text": "Nee. Bij complexe dilemma's bestaat niet altijd één oplossing die op alle onderdelen het beste resultaat oplevert. Sommige beslissingen kunnen wel strijdig zijn met regels, veiligheid of professionele verantwoordelijkheden."}},
    {"@type": "Question", "name": "Kunnen deelnemers verschillende uitkomsten ervaren?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Verschillende keuzes kunnen leiden tot andere reacties, gevolgen of vervolgsituaties."}},
    {"@type": "Question", "name": "Kunnen we onze eigen praktijksituaties gebruiken?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Herkenbare situaties uit de organisatie zijn het vertrekpunt."}},
    {"@type": "Question", "name": "Kunnen we Dilemma Storytelling inzetten voor teams?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. De leerervaring kan individueel worden doorlopen en daarna de basis zijn voor gezamenlijke reflectie."}},
    {"@type": "Question", "name": "Kunnen keuzes en resultaten inzichtelijk worden gemaakt?", "acceptedAnswer": {"@type": "Answer", "text": "Keuzes kunnen worden gekoppeld aan doelen zoals veiligheid, kwaliteit, snelheid en klanttevredenheid. Wat wordt geregistreerd, hangt af van de technische oplossing en de afspraken over gegevensgebruik."}},
    {"@type": "Question", "name": "Wat kost het ontwikkelen van Dilemma Storytelling?", "acceptedAnswer": {"@type": "Answer", "text": "De kosten hangen af van het aantal scenario's, de complexiteit van de keuzes, het aantal verhaallijnen en de vormgeving."}},
    {"@type": "Question", "name": "Kunnen we klein beginnen?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Eén afgebakend dilemma kan een eerste verkenning zijn."}}
  ]
}
</script>
