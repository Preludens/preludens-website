---
layout: default
lang: nl
title: "Game Thinking: leerervaringen ontwerpen"
tile_title: Game Thinking
description: Met Game Thinking vertaalt Preludens complexe kennis en gedragsvraagstukken naar actieve leerervaringen. Ontdek onze aanpak en de GameStorm.
summary: >-
  Een ontwerpaanpak om doelen, keuzes en spanningen in een leeropgave
  zichtbaar te maken voordat de vorm vaststaat.
permalink: /diensten/game-thinking/
order: 4
body_class: page-panels
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_actions %}
<p class="sp-lead">Met Game Thinking helpt Preludens organisaties om complexe leer- en veranderopgaven te onderzoeken voordat de oplossing wordt ontworpen.</p>
<p class="sp-lead">We kijken welke spelprincipes al in de praktijk aanwezig zijn, en hoe die kunnen helpen om mensen actief te laten leren.</p>
{% include panels/actions.html primary_label="Plan een GameStorm" primary_href="/gamestorm/" secondary_label="Ontdek onze aanpak" secondary_href="#find-the-game" %}
{% endcapture %}
{% capture hero_title %}Game Thinking: van leeruitdaging naar <span class="hl">actief leren</span>{% endcapture %}
{% capture hero_lead %}Ontdek het spel dat al in jouw vraagstuk verborgen zit.{% endcapture %}
{% capture hero_lead2 %}Je wilt dat medewerkers nieuwe kennis toepassen, betere keuzes maken of anders gaan handelen. De inhoud is vaak beschikbaar en de gewenste verandering lijkt duidelijk. Maar welke aanpak helpt mensen daadwerkelijk verder? Een training, een interactieve leerervaring, een serious game — of vraagt het probleem eerst om een andere manier van kijken?{% endcapture %}
{% include panels/hero.html kicker="Diensten" title=hero_title lead=hero_lead lead2=hero_lead2 actions=hero_actions figure_src="/assets/images/hero/gamestorm-hero.jpg" figure_alt="Een sessie waarin een leeropgave samen wordt onderzocht" figure_href="#find-the-game" figure_caption="Eerst het vraagstuk, dan de vorm." %}

{% capture recognize_body %}
<h2>De oplossing begint niet bij de vorm</h2>
<p class="sp-lead">Veel organisaties weten welke verandering ze willen bereiken. Medewerkers moeten veiliger werken, beter samenwerken, nieuwe processen toepassen of zelfstandiger beslissingen nemen.</p>
<p class="sp-lead">Vaak wordt al snel gezocht naar een oplossing. Een nieuwe training, een e-learningmodule, een serious game of een andere interventie.</p>
<p class="sp-lead">Voordat je bepaalt wat je gaat ontwikkelen, is het belangrijk om te begrijpen waarom het gewenste gedrag nog niet vanzelf ontstaat. Misschien zijn de doelen onvoldoende duidelijk. Misschien krijgen medewerkers te weinig feedback. Of zijn er tegenstrijdige belangen, ongeschreven regels of omstandigheden die verandering moeilijk maken.</p>
<p class="sp-lead">Wanneer je gedrag wilt veranderen, moet je eerst begrijpen <strong>hoe de praktijk werkt</strong>.</p>
<p class="sp-lead">Daarom beginnen we bij Preludens niet met het ontwerpen van een spel. We onderzoeken eerst het vraagstuk. Je hoeft nog niet te weten welk product nodig is. Misschien is er al een training, maar verandert het gedrag niet. Misschien is de inhoud complex, of ontbreekt de motivatie om ermee aan de slag te gaan.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="de-vorm" body=recognize_body %}

{% capture what_body %}
<h2>Wat is Game Thinking?</h2>
<p class="sp-lead">Game Thinking is de ontwerpaanpak waarmee we een leer- of gedragsvraagstuk bekijken vanuit de structuur van een game. Spelprincipes maken zichtbaar hoe gedrag en keuzes in de praktijk samenhangen. Een uitdaging hoeft daarvoor niet in een spel te veranderen. Meer over hoe wij game-based leren inzetten, lees je bij <a href="{{ '/play/' | relative_url }}">onze methode</a>.</p>
<p class="sp-lead">In een game zijn er doelen, regels, keuzes, uitdagingen, feedback en voortgang. Die elementen komen ook voor in organisaties. Medewerkers werken naar doelen toe. Ze handelen binnen regels en afspraken. Ze maken keuzes, ervaren gevolgen en proberen obstakels te overwinnen.</p>
<p class="sp-lead">Door die bestaande structuur zichtbaar te maken, krijgen we beter inzicht in hoe mensen handelen en waar verandering mogelijk is. Vanuit dat inzicht ontwerpen we een leerervaring waarin mensen actief onderzoeken, kiezen, oefenen en reflecteren.</p>
<p class="sp-lead">Game Thinking is daarmee geen vooraf gekozen eindproduct. <a href="{{ '/diensten/microgame-stories/' | relative_url }}">MicroGame Stories</a> en <a href="{{ '/diensten/dilemma-storytelling/' | relative_url }}">Dilemma Storytelling</a> zijn concrete leerformats. Game Thinking is de manier om eerst te bepalen welke aanpak bij het vraagstuk past.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" id="wat-is-game-thinking" body=what_body %}

{% capture find_copy %}
<p class="sp-lead">Het uitgangspunt is eenvoudig: in veel processen en veranderingen zit al een spelstructuur verborgen. Er zijn doelen die mensen proberen te bereiken. Regels die bepalen wat mogelijk is. Keuzes die gevolgen hebben. Uitdagingen die overwonnen moeten worden. En signalen die laten zien of iemand op de goede weg is.</p>
<p class="sp-lead">Die elementen zijn niet altijd direct zichtbaar. Met Find the Game onderzoeken we welke spelmechanismen al aanwezig zijn en hoe ze samenhangen. We verzinnen niet zomaar nieuwe spelregels. We zoeken de structuur die mensen herkennen uit hun eigen werk, en kijken hoe die leren, oefenen of gedragsverandering kan ondersteunen.</p>
<p class="sp-lead">Zo sluit een leerervaring aan op het dagelijkse werk, in plaats van er los van te staan.</p>
{% include panels/actions.html secondary_label="Ontdek Find the Game" secondary_href="/play/blog/find-the-game/" %}
{% endcapture %}
{% capture find_body %}
<h2>Find the Game: ontdek het spel in de praktijk</h2>
<p class="sp-lead">Binnen Game Thinking gebruiken we onze ontwerpbenadering <strong>Find the Game</strong>. In een sessie verkennen we het vraagstuk samen, voordat er een vorm wordt gekozen.</p>
{% include panels/media.html src="/assets/images/gamestorm/sessie.jpg" webp="/assets/images/gamestorm/sessie.webp" alt="Een GameStorm-sessie waarin een team samen een leeropgave onderzoekt" ratio="1400 / 933" body=find_copy %}
{% endcapture %}
{% include panels/panel.html variant="paper" align="left" id="find-the-game" body=find_body %}

{% capture principle_items %}
{% include panels/value.html title="Doelen" text="Waar werken mensen naartoe, en welke prioriteiten ontstaan er als organisatiedoelen en dagelijkse doelen niet hetzelfde zijn?" %}
{% include panels/value.html title="Regels" text="Welke procedures, afspraken en gewoonten bepalen het speelveld, en hoe beïnvloeden die het handelen?" %}
{% include panels/value.html title="Keuzes" text="Op welke momenten moet iemand beslissen, met welke informatie, en wat gebeurt er bij een andere keuze?" %}
{% include panels/value.html title="Uitdagingen" text="Waar lopen mensen vast: door ontbrekende kennis, of door obstakels, tegenstrijdige belangen en de omstandigheden zelf?" %}
{% include panels/value.html title="Feedback" text="Hoe weten mensen of ze vooruitkomen? In organisaties is die terugkoppeling niet altijd aanwezig of duidelijk." %}
{% include panels/value.html title="Voortgang" text="Welke stappen horen bij het doel, wat beheersen mensen al, en waar moeten ze nog oefenen?" %}
{% endcapture %}
{% capture principles_body %}
<h2>Welke spelprincipes onderzoeken we?</h2>
<p class="sp-lead sp-lead--center">We kijken naar de onderdelen die gedrag en keuzes binnen een situatie beïnvloeden. Samen geven ze een beeld van de bestaande situatie en van waar verandering mogelijk is.</p>
{% include panels/values.html label="Spelprincipes binnen Game Thinking" columns="two" items=principle_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="spelprincipes" body=principles_body %}

{% capture route_steps %}
{% include panels/step.html num="1" title="We verkennen de uitdaging" text="Wat wil de organisatie bereiken, welk gedrag moet veranderen, en waarom lukt dat nu nog niet voldoende?" %}
{% include panels/step.html num="2" title="We brengen de situatie in kaart" text="Processen, verantwoordelijkheden, doelen en terugkerende praktijksituaties. Waar ontstaan keuzes, en waar lopen mensen vast?" %}
{% include panels/step.html num="3" title="We zoeken verborgen spelmechanismen" text="Met Find the Game maken we zichtbaar hoe de spelprincipes elkaar in de praktijk beïnvloeden." %}
{% include panels/step.html num="4" title="We formuleren leerdoelen en ontwerpprincipes" text="Wat moeten deelnemers begrijpen, herkennen, oefenen of anders gaan doen? Kennis, vaardigheid en context blijven daarbij uit elkaar." %}
{% include panels/step.html num="5" title="We verkennen passende interventies" text="Een MicroGame Story, een Dilemma Story, een serious game of een andere vorm. De vorm volgt uit de leerdoelen en de praktijk." %}
{% include panels/step.html num="6" title="We werken toe naar een blauwdruk" text="Inzichten, leerdoelen, spelmechanismen en ontwerpkeuzes worden het vertrekpunt voor ontwikkeling. Waar dat past, verkennen we keuzes met een eerste concept." %}
{% endcapture %}
{% capture route_body %}
<h2>Hoe werkt Game Thinking bij Preludens?</h2>
<p class="sp-lead sp-lead--center">Game Thinking is een gezamenlijk ontwerpproces. We combineren de kennis van jullie organisatie met onze ervaring in storytelling, spelprincipes en didactisch ontwerp. Van de praktijk naar een passende aanpak.</p>
{% include panels/steps.html variant="flow" items=route_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="werkwijze" body=route_body %}

{% capture yield_items %}
{% include panels/value.html title="Een duidelijker beeld van de doelgroep" text="Inzicht in de situaties waarin mensen handelen, de keuzes die ze maken en de factoren die hun gedrag beïnvloeden." %}
{% include panels/value.html title="Concrete leer- en veranderdoelen" text="Wat mensen moeten weten, kunnen of anders gaan doen. Zo blijft het ontwerp gericht." %}
{% include panels/value.html title="Inzicht in bestaande spelmechanismen" text="De spelprincipes die al onderdeel zijn van de praktijk, en wat daarvan te versterken is." %}
{% include panels/value.html title="Een passende ontwerpaanpak" text="Welke vorm aansluit op de leeruitdaging, zodat een vooraf gekozen oplossing het vraagstuk niet gaat bepalen." %}
{% include panels/value.html title="Een blauwdruk voor verdere ontwikkeling" text="Ontwerpprincipes en een concrete richting voor de volgende fase: ontwikkeling, testen en implementatie." %}
{% endcapture %}
{% capture yield_body %}
<h2>Wat levert Game Thinking op?</h2>
<p class="sp-lead sp-lead--center">Game Thinking helpt om betere ontwerpkeuzes te maken voordat tijd en middelen in ontwikkeling gaan. Het resultaat is een scherper begrip van het vraagstuk en een onderbouwde richting, geen spel om het spel.</p>
{% include panels/values.html label="Wat Game Thinking oplevert" items=yield_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="opbrengst" body=yield_body %}

{% capture fit_items %}
{% include panels/value.html title="Organisatieverandering en transities" text="Zichtbaar maken welke keuzes en omstandigheden nieuw gedrag beïnvloeden wanneer processen of verantwoordelijkheden verschuiven." %}
{% include panels/value.html title="Gedragsverandering" text="Mensen weten wat de bedoeling is, maar handelen anders. We kijken naar welke doelen, regels en feedback hun keuzes sturen." %}
{% include panels/value.html title="Complexe kennisoverdracht" text="Abstracte of omvangrijke kennis vertalen naar herkenbare situaties en gerichte leeractiviteiten." %}
{% include panels/value.html title="Samenwerking tussen teams" text="Verschillen in doelen, verwachtingen en verantwoordelijkheden zichtbaar maken, en zoeken waar betere afstemming mogelijk is." %}
{% include panels/value.html title="Besluitvorming en probleemoplossing" text="Onderzoeken hoe mensen kiezen wanneer er meerdere belangen en routes zijn, en hoe ze veilig kunnen oefenen." %}
{% include panels/value.html title="Voorbereiding op serious gaming" text="Leerdoelen, doelgroep en ontwerpprincipes scherp krijgen voordat een serious game wordt ontworpen." %}
{% endcapture %}
{% capture fit_body %}
<h2>Voor welke vraagstukken is Game Thinking geschikt?</h2>
<p class="sp-lead sp-lead--center">Vooral wanneer de oplossing nog niet vaststaat, of wanneer een vraagstuk meer omvat dan kennisoverdracht alleen.</p>
{% include panels/values.html label="Vraagstukken voor Game Thinking" columns="two" items=fit_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="vraagstukken" body=fit_body %}

{% capture example_body %}
<h2>Een voorbeeld: een nieuw proces dat niet vanzelf wordt gevolgd</h2>
<p class="sp-lead">Stel dat een organisatie een nieuwe werkwijze heeft ingevoerd. De instructies zijn beschikbaar. Medewerkers hebben uitleg gekregen en weten welke stappen ze moeten volgen. Toch vallen teams regelmatig terug op de oude manier van werken.</p>
<p class="sp-lead">De eerste reactie kan zijn om extra training te ontwikkelen. Game Thinking begint met andere vragen. Waarom kiezen medewerkers voor de oude werkwijze? Welke doelen proberen ze te bereiken? Welke obstakels ervaren ze? Welke feedback krijgen ze op hun handelen?</p>
<p class="sp-lead">Misschien vraagt de nieuwe procedure meer tijd, terwijl medewerkers vooral worden aangesproken op snelheid. Of zijn verantwoordelijkheden onduidelijk, waardoor mensen zelf oplossingen zoeken.</p>
<p class="sp-lead">Door het vraagstuk als een game te bekijken, worden de doelen, regels en keuzes achter dat gedrag zichtbaar. Vanuit die analyse kan een interactieve training waardevol blijken. Misschien zijn ook duidelijkere feedback, aangepaste werkafspraken of een andere interventie nodig.</p>
<p class="sp-lead">Game Thinking helpt om <strong>de structuur waarin dat gedrag ontstaat</strong> aan te pakken, en niet alleen het gedrag zelf.</p>
<p class="sp-lead"><em>Dit is een illustratief voorbeeld, geen beschrijving van een uitgevoerd Preludens-project.</em></p>
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="voorbeeld" body=example_body %}

{% capture formats_body %}
<h2>Van Game Thinking naar een passende leerervaring</h2>
<p class="sp-lead">Game Thinking staat niet los van de andere diensten. Het helpt om te bepalen welke aanpak bij de leeruitdaging past. Het doel is een aanpak die past bij de mensen, de situatie en de gewenste verandering; een game is daarvan één mogelijke uitkomst.</p>
<h3 class="sp-sub">MicroGame Stories: wanneer kennis actief geoefend moet worden</h3>
<p class="sp-lead">Ligt de uitdaging bij het begrijpen, toepassen en herhalen van concrete kennis, dan kan een <a href="{{ '/diensten/microgame-stories/' | relative_url }}">MicroGame Story</a> passen. Visuele storytelling en korte spelvormen waarin deelnemers gericht oefenen.</p>
{% include panels/actions.html secondary_label="Ontdek MicroGame Stories" secondary_href="/diensten/microgame-stories/" %}
<h3 class="sp-sub">Dilemma Storytelling: wanneer keuzes en belangen centraal staan</h3>
<p class="sp-lead">Moeten medewerkers leren omgaan met lastige afwegingen, dan sluit <a href="{{ '/diensten/dilemma-storytelling/' | relative_url }}">Dilemma Storytelling</a> beter aan. Deelnemers doorlopen herkenbare scenario's, maken keuzes en ervaren de gevolgen voor verschillende doelen.</p>
{% include panels/actions.html secondary_label="Ontdek Dilemma Storytelling" secondary_href="/diensten/dilemma-storytelling/" %}
<h3 class="sp-sub">Serious games en andere interventies</h3>
<p class="sp-lead">Sommige vraagstukken vragen om een uitgebreidere simulatie, een gezamenlijke oefenvorm of iets anders dan een digitale game. Game Thinking helpt om de benodigde vorm en complexiteit te bepalen.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" align="left" id="leerervaringen" body=formats_body %}

{% capture storm_body %}
<h2>Begin met een GameStorm</h2>
<p class="sp-lead">Je hoeft niet meteen een volledig ontwerptraject te starten. Een <a href="{{ '/gamestorm/' | relative_url }}">GameStorm</a> is een concrete eerste stap om een leeruitdaging samen te verkennen.</p>
<p class="sp-lead">Tijdens de sessie onderzoeken we de doelgroep, de context en het gewenste gedrag. We brengen de belangrijkste doelen, keuzes en spanningen in kaart en zoeken naar spelmechanismen die al in de praktijk aanwezig zijn. Die inzichten vertalen we naar eerste leerdoelen, ontwerpkeuzes en mogelijke spelvormen.</p>
<p class="sp-lead">Zo krijg je een duidelijker beeld van het vraagstuk en een eerste richting. Een GameStorm is een toegankelijke kennismaking met de manier waarop we bij Preludens denken en ontwerpen. Game Thinking is de bredere aanpak; de GameStorm is de afgebakende sessie waarmee die aanpak begint.</p>
{% include panels/actions.html primary_label="Plan een GameStorm" primary_href="/gamestorm/" %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="gamestorm" body=storm_body %}

{% capture faq_body %}
<h2>Veelgestelde vragen over Game Thinking</h2>
<h3 class="sp-sub">Wat is Game Thinking?</h3>
<p class="sp-lead">Een ontwerpaanpak waarbij we een leer- of veranderopgave bekijken vanuit spelprincipes. We onderzoeken doelen, regels, keuzes, uitdagingen en feedback die al in de praktijk aanwezig zijn, en gebruiken die inzichten om een passende leerervaring of interventie te ontwerpen.</p>
<h3 class="sp-sub">Wat is het verschil tussen Game Thinking en gamification?</h3>
<p class="sp-lead">Gamification voegt spelelementen toe aan een bestaande activiteit. Game Thinking begint eerder: eerst hoe een situatie werkt, welk gedrag belangrijk is en welke spelmechanismen al aanwezig zijn. Daarna bepalen we of en hoe spelprincipes kunnen bijdragen.</p>
<h3 class="sp-sub">Wat is Find the Game?</h3>
<p class="sp-lead">De ontwerpbenadering van Preludens waarbij we zoeken naar spelstructuren die al in bestaande processen zitten. In plaats van direct nieuwe mechanismen te ontwerpen, kijken we hoe de praktijk zelf aanknopingspunten biedt. Meer daarover staat in het artikel <a href="{{ '/play/blog/find-the-game/' | relative_url }}">Find the Game</a>.</p>
<h3 class="sp-sub">Is Game Thinking hetzelfde als Design Thinking?</h3>
<p class="sp-lead">Nee. Beide benaderingen vertrekken vanuit mensen en hun context, maar leggen andere accenten. Bij Game Thinking gebruiken we spelprincipes om doelen, regels, keuzes, uitdagingen en feedback zichtbaar te maken.</p>
<h3 class="sp-sub">Leidt Game Thinking altijd tot een serious game?</h3>
<p class="sp-lead">Nee. Een serious game kan passen, maar de analyse kan ook leiden tot een MicroGame Story, Dilemma Storytelling, een aanpassing in een bestaand leertraject of een andere interventie.</p>
<h3 class="sp-sub">Wanneer is Game Thinking geschikt?</h3>
<p class="sp-lead">Wanneer de leeruitdaging complex is, de gewenste gedragsverandering nog onvoldoende duidelijk is, of de juiste oplossing nog niet vaststaat. Ook als voorbereiding op een serious-gamingtraject.</p>
<h3 class="sp-sub">Wat levert een Game Thinking-traject concreet op?</h3>
<p class="sp-lead">Dat hangt af van het vraagstuk en de afgesproken scope. Het uitgangspunt is een scherper beeld van de doelgroep, de gewenste verandering, de relevante spelmechanismen en de ontwerpprincipes. Vanuit die inzichten ontstaat een blauwdruk.</p>
<h3 class="sp-sub">Wat is het verschil tussen Game Thinking en een GameStorm?</h3>
<p class="sp-lead">Game Thinking is de bredere ontwerpaanpak. Een GameStorm is een afgebakende sessie waarin we een leeruitdaging verkennen en eerste ontwerpideeën ontwikkelen. De GameStorm kan het startpunt zijn van een uitgebreider traject.</p>
<h3 class="sp-sub">Kunnen we Game Thinking inzetten zonder daarna iets te laten ontwikkelen?</h3>
<p class="sp-lead">Ja. De verkenning kan op zichzelf waardevol zijn om grip te krijgen op een vraagstuk en richting te bepalen. Of daarna een leerervaring wordt ontwikkeld, is een aparte keuze.</p>
<h3 class="sp-sub">Wat kost Game Thinking?</h3>
<p class="sp-lead">Dat hangt af van de complexiteit van het vraagstuk, het aantal betrokkenen en de gewenste diepgang. Een eerste GameStorm is kleiner dan een ontwerptraject met analyse, concept en prototyping. Samen bepalen we welke vorm past.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="vragen" body=faq_body %}

{% capture cta_left %}Heb je een leer- of veranderopgave waarvoor de oplossing nog niet duidelijk is? Wil je beter begrijpen waarom mensen handelen zoals ze doen, welke keuzes ertoe doen en hoe je beweging kunt creëren?{% endcapture %}
{% capture cta_right %}Met Game Thinking brengen we structuur in complexe vraagstukken. We zoeken naar de spelprincipes die al in de praktijk aanwezig zijn, en vertalen die naar een passende ontwerpaanpak. Zo ontstaat richting voordat je gaat ontwikkelen.{% endcapture %}
{% include panels/cta.html kicker="Game Thinking" title="Ontdek het spel in jouw vraagstuk" left=cta_left right=cta_right stack=true primary_label="Plan een GameStorm" primary_href="/gamestorm/" secondary_label="Neem contact op" secondary_href="/contact/" %}

{% include panels/footer-reveal.html %}
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Wat is Game Thinking?", "acceptedAnswer": {"@type": "Answer", "text": "Een ontwerpaanpak waarbij Preludens een leer- of veranderopgave bekijkt vanuit spelprincipes: doelen, regels, keuzes, uitdagingen en feedback die al in de praktijk aanwezig zijn."}},
    {"@type": "Question", "name": "Wat is het verschil tussen Game Thinking en gamification?", "acceptedAnswer": {"@type": "Answer", "text": "Gamification voegt spelelementen toe aan een bestaande activiteit. Game Thinking onderzoekt eerst hoe een situatie werkt en welke mechanismen al aanwezig zijn."}},
    {"@type": "Question", "name": "Wat is Find the Game?", "acceptedAnswer": {"@type": "Answer", "text": "De ontwerpbenadering van Preludens waarbij we zoeken naar spelstructuren die al in bestaande processen aanwezig zijn."}},
    {"@type": "Question", "name": "Is Game Thinking hetzelfde als Design Thinking?", "acceptedAnswer": {"@type": "Answer", "text": "Nee. Beide vertrekken vanuit mensen en hun context. Game Thinking gebruikt specifiek spelprincipes om doelen, regels, keuzes, uitdagingen en feedback zichtbaar te maken."}},
    {"@type": "Question", "name": "Leidt Game Thinking altijd tot een serious game?", "acceptedAnswer": {"@type": "Answer", "text": "Nee. De analyse kan ook leiden tot een MicroGame Story, Dilemma Storytelling, een aanpassing in een leertraject of een andere interventie."}},
    {"@type": "Question", "name": "Wanneer is Game Thinking geschikt?", "acceptedAnswer": {"@type": "Answer", "text": "Wanneer de leeruitdaging complex is, de gewenste verandering nog onvoldoende duidelijk is, of de oplossing nog niet vaststaat."}},
    {"@type": "Question", "name": "Wat levert een Game Thinking-traject concreet op?", "acceptedAnswer": {"@type": "Answer", "text": "Een scherper beeld van de doelgroep, de gewenste verandering, de relevante spelmechanismen en de ontwerpprincipes, als blauwdruk voor een leerervaring of interventie."}},
    {"@type": "Question", "name": "Wat is het verschil tussen Game Thinking en een GameStorm?", "acceptedAnswer": {"@type": "Answer", "text": "Game Thinking is de bredere ontwerpaanpak. Een GameStorm is een afgebakende sessie om een leeruitdaging te verkennen en eerste ontwerpideeën te ontwikkelen."}},
    {"@type": "Question", "name": "Kunnen we Game Thinking inzetten zonder daarna iets te laten ontwikkelen?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. De verkenning kan op zichzelf waardevol zijn. Of daarna iets wordt ontwikkeld, is een aparte keuze."}},
    {"@type": "Question", "name": "Wat kost Game Thinking?", "acceptedAnswer": {"@type": "Answer", "text": "Dat hangt af van de complexiteit, het aantal betrokkenen en de gewenste diepgang. Een GameStorm is kleiner dan een volledig ontwerptraject."}}
  ]
}
</script>
