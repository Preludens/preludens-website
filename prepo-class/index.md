---
layout: default
lang: nl
title: "Prepo Class: MicroGames in de klas"
description: "Ontdek Prepo Class: een klasomgeving voor Prepo-games. Docenten begeleiden de les en deelnemers sluiten aan met een klascode."
body_class: page-panels
permalink: /prepo-class/
permalink_lang:
  en: /prepo-class/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_actions %}
<p class="sp-lead">Met MicroGames vertaal je leerstof naar korte, gerichte uitdagingen. Prepo Class is de klasomgeving waarin je die spelvormen gebruikt tijdens een les of begeleide training.</p>
<p class="sp-lead">Docenten krijgen toegang via Prepo. Deelnemers sluiten aan met een klascode. Zo ontstaat een toegankelijke route om interactieve spelvormen een plek te geven in het onderwijs of een training.</p>
{% include panels/actions.html primary_label="Bekijk Prepo Class" primary_href="https://class.prepo.nl/" secondary_label="Bespreek de mogelijkheden" secondary_href="/contact/" %}
{% endcapture %}
{% capture hero_title %}Prepo Class: samen leren met <span class="hl">MicroGames</span>{% endcapture %}
{% capture hero_lead %}Een klasomgeving waarin docenten en deelnemers aan de slag gaan met interactieve Prepo-games.{% endcapture %}
{% capture hero_lead2 %}Je wilt deelnemers actief betrekken bij de les. Niet alleen uitleg geven, maar mensen laten ontdekken, oefenen en nadenken over de kennis die ze nodig hebben. Hoe gebruik je die spelvormen binnen een klassikale leersituatie?{% endcapture %}
{% include panels/hero.html kicker="Prepo Class" title=hero_title lead=hero_lead lead2=hero_lead2 actions=hero_actions figure_src="/assets/images/prepo/class-start.png" figure_alt="De startpagina van Prepo Class, met inloggen als docent of deelnemen met een klascode" figure_href="https://class.prepo.nl/" figure_caption="Docent via Prepo, deelnemer met een klascode." %}

{% capture recognize_body %}
<h2>Van uitleg naar actief leren in de klas</h2>
<p class="sp-lead">In veel lessen en trainingen speelt uitleg een belangrijke rol. De docent introduceert nieuwe begrippen, bespreekt voorbeelden en helpt deelnemers om de leerstof te begrijpen.</p>
<p class="sp-lead">Begrijpen wat iemand vertelt, is niet hetzelfde als de kennis zelfstandig kunnen toepassen. Juist daarom is het waardevol om tijdens een les ruimte te maken voor actieve opdrachten. Wat gebeurt er wanneer deelnemers zelf moeten kiezen, verbanden leggen of een probleem oplossen?</p>
<p class="sp-lead">Ze worden uitgedaagd om de kennis te gebruiken. Daarbij wordt duidelijk wat ze al begrijpen en waar nog vragen ontstaan.</p>
<p class="sp-lead">Een goede klassikale leerervaring combineert <strong>de richting van de docent</strong> met de actieve deelname van de groep.</p>
<p class="sp-lead">Prepo Class is ontwikkeld om Prepo-games in die context te kunnen gebruiken. Meer over hoe wij leren en spel combineren, lees je bij <a href="{{ '/play/' | relative_url }}">onze methode</a>.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="actief-leren" body=recognize_body %}

{% capture what_body %}
<h2>Wat is Prepo Class?</h2>
<p class="sp-lead">Prepo Class is een digitale klasomgeving voor games die via Prepo worden aangeboden. De omgeving verbindt twee rollen, zonder dat deelnemers eerst door de beheeromgeving van Prepo hoeven.</p>
<h3 class="sp-sub">De docent</h3>
<p class="sp-lead">De docent krijgt toegang via Prepo en werkt vanuit de les of training met Prepo Class.</p>
<h3 class="sp-sub">De deelnemer</h3>
<p class="sp-lead">De deelnemer opent <a href="https://class.prepo.nl/">class.prepo.nl</a> en sluit aan met een klascode.</p>
<p class="sp-lead">Prepo Class vervangt de docent niet. Het is de digitale ingang waarmee Prepo-games onderdeel worden van een begeleide leeractiviteit.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" id="wat-is-prepo-class" body=what_body %}

{% capture how_steps %}
{% include panels/step.html num="1" title="De docent krijgt toegang" text="Via de docenttoegang in Prepo. De docentroute blijft gescheiden van de deelnemerstoegang." %}
{% include panels/step.html num="2" title="Deelnemers ontvangen een klascode" text="Met die code sluiten ze aan bij de juiste klas. De code is de verbinding tussen deelnemer en klasomgeving." %}
{% include panels/step.html num="3" title="Deelnemers openen Prepo Class" text="Op class.prepo.nl kiezen ze Join with class code. Zo komen ze binnen via een gerichte ingang." %}
{% include panels/step.html num="4" title="De groep gaat aan de slag" text="De docent verbindt de spelactiviteit aan de leerdoelen. Deelnemers herkennen, ordenen, kiezen of passen kennis toe." %}
{% include panels/step.html num="5" title="De docent verbindt de ervaring aan de les" text="Na de opdracht bespreek je wat lastig was, welke kennis belangrijk bleek en hoe de opdracht aansluit op de praktijk." %}
{% endcapture %}
{% capture how_note %}
<p class="sp-lead">De startpagina laat twee ingangen zien: inloggen als docent, en deelnemen met een klascode. Wat een docent daarna in de les precies kan volgen of aansturen, lichten we toe zodra die functies vaststaan. We presenteren hier geen live voortgang, scores of sessiebediening als bestaande mogelijkheden.</p>
{% endcapture %}
{% capture how_body %}
<h2>Hoe werkt Prepo Class?</h2>
<p class="sp-lead sp-lead--center">De basis is eenvoudig: een docent werkt vanuit Prepo, deelnemers sluiten aan via een klascode.</p>
{% include panels/media.html src="/assets/images/prepo/class-start.png" alt="Startpagina van Prepo Class met Log in as teacher en Join with class code" width="1760" height="940" ratio="1760 / 940" body=how_note %}
{% include panels/steps.html variant="flow" items=how_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" align="left" id="hoe-het-werkt" body=how_body %}

{% capture why_items %}
{% include panels/value.html title="Maak kennis actief" text="Deelnemers doen iets met de leerstof: begrippen herkennen, verbanden onderzoeken of kennis toepassen in een gerichte opdracht." %}
{% include panels/value.html title="Geef ruimte om te oefenen" text="Een MicroGame is een afgebakende leeractiviteit. Feedback helpt deelnemers hun aanpak te begrijpen en te verbeteren." %}
{% include panels/value.html title="Maak abstracte inhoud concreet" text="Processen en principes worden begrijpelijker wanneer deelnemers ermee kunnen werken, bijvoorbeeld een stap of een samenhang." %}
{% include panels/value.html title="Van opdracht naar gesprek" text="De docent gebruikt de spelactiviteit als aanleiding. De uitleg en de reflectie daarna horen bij de les." %}
{% endcapture %}
{% capture game_copy %}
<p class="sp-lead">MicroGames zijn korte spelvormen rond concrete leerdoelen. In de klas koppelt de docent zo'n opdracht aan de les: eerst de context, dan de opdracht, daarna het gesprek.</p>
<p class="sp-lead">Meer over het leerformat zelf lees je bij <a href="{{ '/diensten/microgame-stories/' | relative_url }}">MicroGame Stories</a>.</p>
{% endcapture %}
{% capture why_body %}
<h2>Waarom MicroGames tijdens een les?</h2>
<p class="sp-lead">Deelnemers ontvangen niet alleen informatie. Ze werken ermee.</p>
{% include panels/media.html src="/assets/images/verhalen/basis-koeltechniek-gesprek.jpg" alt="Een scène uit de MicroGame Basis Koeltechniek, als voorbeeld van een Prepo-game" width="1024" height="462" ratio="1024 / 462" reverse=true body=game_copy %}
{% include panels/values.html label="Wat MicroGames in de les toevoegen" columns="two" items=why_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="waarom" body=why_body %}

{% capture when_items %}
{% include panels/value.html title="Tijdens een klassikale les" text="Een MicroGame om nieuwe kennis te verkennen, of om een onderwerp dat net is besproken te oefenen." %}
{% include panels/value.html title="Bij praktijkgericht onderwijs" text="Opdrachten die aansluiten op technische processen, werkwijzen of andere praktijksituaties." %}
{% include panels/value.html title="Tijdens een training of workshop" text="Uitleg afwisselen met korte interactieve opdrachten, zodat deelnemers de inhoud verwerken." %}
{% include panels/value.html title="Als onderdeel van een leertraject" text="Op momenten waarop deelnemers kennis moeten toepassen, herhalen of samen bespreken." %}
{% endcapture %}
{% capture when_body %}
<h2>Wanneer gebruik je Prepo Class?</h2>
<p class="sp-lead sp-lead--center">Wanneer een docent, trainer of begeleider Prepo-games wil inzetten in een gezamenlijke leercontext. De juiste inzet hangt af van de leerdoelen, de doelgroep en de beschikbare games.</p>
{% include panels/values.html label="Situaties voor Prepo Class" columns="two" items=when_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="wanneer" body=when_body %}

{% capture teacher_body %}
<h2>De docent blijft richting geven</h2>
<p class="sp-lead">Actief leren betekent niet dat deelnemers alles zelfstandig moeten ontdekken. Een goede leerervaring biedt vrijheid om te proberen, en voldoende structuur om verder te komen.</p>
<p class="sp-lead">De docent legt vooraf uit waarom een opdracht relevant is, helpt deelnemers de juiste vragen te stellen en legt achteraf het verband met de leerstof.</p>
<p class="sp-lead">Prepo Class is de digitale ingang voor de spelactiviteit. De docent zorgt voor de verbinding met het grotere leerproces. Begeleiding en de interactieve opdracht versterken elkaar.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" id="docent" body=teacher_body %}

{% capture diff_body %}
<h2>Prepo Class en Prepo</h2>
<p class="sp-lead">Ze horen bij elkaar, en ze doen iets anders.</p>
<h3 class="sp-sub">Prepo: beheer en distributie</h3>
<p class="sp-lead"><a href="{{ '/prepo/' | relative_url }}">Prepo</a> is de beheer- en distributieomgeving voor MicroGames en Stories. De nadruk ligt op beschikbaar maken, beheren en doorontwikkelen.</p>
<h3 class="sp-sub">Prepo Class: gebruik in de klas</h3>
<p class="sp-lead">Prepo Class is de klasomgeving voor Prepo-games. De nadruk ligt op de toegang voor docenten en deelnemers tijdens een les of training. De docent komt binnen via Prepo. De deelnemer gebruikt een klascode.</p>
{% include panels/actions.html secondary_label="Ontdek Prepo" secondary_href="/prepo/" %}
{% endcapture %}
{% include panels/panel.html variant="paper" align="left" id="verschil" body=diff_body %}

{% capture fit_body %}
<h2>Prepo Class als onderdeel van actief leren</h2>
<p class="sp-lead">Mensen leren meer wanneer ze actief met kennis aan de slag gaan. Daarom combineren we inhoud, storytelling, didactisch ontwerp en spelprincipes. MicroGames zijn korte uitdagingen om te ontdekken, oefenen en reflecteren.</p>
<p class="sp-lead">Prepo maakt die leerproducten beschikbaar en beheersbaar. Prepo Class is de ingang om ze in een klas te gebruiken. Samen dekken ze verschillende momenten van hetzelfde leerproces: ontwikkelen, aanbieden, oefenen en verder leren.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" id="actief" body=fit_body %}

{% capture faq_body %}
<h2>Veelgestelde vragen over Prepo Class</h2>
<h3 class="sp-sub">Wat is Prepo Class?</h3>
<p class="sp-lead">De klasomgeving voor Prepo-games. Docenten krijgen toegang via Prepo. Deelnemers sluiten aan met een klascode.</p>
<h3 class="sp-sub">Wat is het verschil tussen Prepo en Prepo Class?</h3>
<p class="sp-lead">Prepo is gericht op beheer en distributie van interactieve leerproducten. Prepo Class is de klasomgeving waarin docenten en deelnemers met die games werken.</p>
<h3 class="sp-sub">Hoe krijgen deelnemers toegang?</h3>
<p class="sp-lead">Ze openen class.prepo.nl en kiezen Join with class code.</p>
<h3 class="sp-sub">Hoe krijgen docenten toegang?</h3>
<p class="sp-lead">Via de docenttoegang in Prepo. Op de startpagina is dat Log in as teacher.</p>
<h3 class="sp-sub">Is Prepo Class geschikt voor klassikaal onderwijs?</h3>
<p class="sp-lead">Het is ingericht als klasomgeving voor Prepo-games. Hoe je het inzet, hangt af van de leerdoelen, de beschikbare games en de begeleiding door de docent.</p>
<h3 class="sp-sub">Welke games kunnen worden gebruikt?</h3>
<p class="sp-lead">Prepo-games. Welke games beschikbaar zijn, hangt af van de inrichting voor de klas of de organisatie.</p>
<h3 class="sp-sub">Kan ik Prepo Class eerst bekijken?</h3>
<p class="sp-lead">De publieke startpagina is te bekijken op class.prepo.nl. Voor een inhoudelijke demonstratie van de docentomgeving neem je contact op met Preludens.</p>
<h3 class="sp-sub">Kan Prepo Class onderdeel zijn van een groter leertraject?</h3>
<p class="sp-lead">Ja. Een klassikale spelactiviteit kan worden verbonden aan uitleg, praktijkopdrachten en gezamenlijke reflectie. Welke technische mogelijkheden daarbij horen, stemmen we per toepassing af.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="vragen" body=faq_body %}

{% capture cta_left %}Wil je MicroGames inzetten tijdens een les, training of begeleide leeractiviteit? Met Prepo Class krijgen docenten en deelnemers een gerichte toegang tot Prepo-games binnen een klasomgeving.{% endcapture %}
{% capture cta_right %}We denken graag mee over de inzet van MicroGames, de leerdoelen en de rol die Prepo Class daarin kan spelen.{% endcapture %}
{% include panels/cta.html kicker="Prepo Class" title="Breng actief leren naar de klas" left=cta_left right=cta_right stack=true primary_label="Bespreek Prepo Class" primary_href="/contact/" secondary_label="Bekijk Prepo Class" secondary_href="https://class.prepo.nl/" %}

{% include panels/footer-reveal.html %}
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Wat is Prepo Class?", "acceptedAnswer": {"@type": "Answer", "text": "De klasomgeving voor Prepo-games. Docenten krijgen toegang via Prepo en deelnemers sluiten aan met een klascode."}},
    {"@type": "Question", "name": "Wat is het verschil tussen Prepo en Prepo Class?", "acceptedAnswer": {"@type": "Answer", "text": "Prepo is gericht op beheer en distributie. Prepo Class is de klasomgeving waarin docenten en deelnemers met Prepo-games werken."}},
    {"@type": "Question", "name": "Hoe krijgen deelnemers toegang?", "acceptedAnswer": {"@type": "Answer", "text": "Ze openen class.prepo.nl en kiezen Join with class code."}},
    {"@type": "Question", "name": "Hoe krijgen docenten toegang?", "acceptedAnswer": {"@type": "Answer", "text": "Via de docenttoegang in Prepo."}},
    {"@type": "Question", "name": "Is Prepo Class geschikt voor klassikaal onderwijs?", "acceptedAnswer": {"@type": "Answer", "text": "Het is een klasomgeving voor Prepo-games. De inzet hangt af van de leerdoelen, de beschikbare games en de begeleiding."}},
    {"@type": "Question", "name": "Welke games kunnen worden gebruikt?", "acceptedAnswer": {"@type": "Answer", "text": "Prepo-games. Welke games beschikbaar zijn, hangt af van de inrichting voor de klas of organisatie."}},
    {"@type": "Question", "name": "Kan ik Prepo Class eerst bekijken?", "acceptedAnswer": {"@type": "Answer", "text": "De publieke startpagina staat op class.prepo.nl. Voor een demonstratie van de docentomgeving neem je contact op."}},
    {"@type": "Question", "name": "Kan Prepo Class onderdeel zijn van een groter leertraject?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Een klassikale spelactiviteit kan worden verbonden aan uitleg, praktijkopdrachten en reflectie. De technische mogelijkheden worden per toepassing afgestemd."}}
  ]
}
</script>
