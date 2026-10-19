---
layout: default
lang: nl
title: Team
description: De mensen achter Preludens — storytelling, game design, didactiek en techniek, samengebracht in leerervaringen die blijven hangen.
body_class: page-panels
permalink: /team/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Wij geloven dat mensen beter leren wanneer ze actief betrokken zijn{% endcapture %}
{% capture hero_lead %}Daarom ontwerpen we leerervaringen waarin mensen niet alleen informatie ontvangen, maar zelf keuzes maken, de gevolgen van hun handelen ervaren en gerichte feedback krijgen. Door kennis in een herkenbare context toe te passen, wordt die beter begrepen, onthouden en gebruikt wanneer het ertoe doet.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Neem contact op →" primary_href="/contact/" secondary_label="Onze diensten" secondary_href="/diensten/" %}
{% endcapture %}
{% include panels/hero.html kicker="Team" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/team-hero.jpg" figure_alt="Twee ontwerpers die samen aan een vraagstuk werken" figure_href="/gamestorm/" figure_caption="Ontwerp en techniek aan dezelfde tafel." %}

{% capture intro_main %}
<p class="sp-lead">Preludens wordt gevormd door Daan Groen en Jan-Willem Manenschijn, aangevuld met specialisten wanneer een project daarom vraagt. We combineren expertise in storytelling, game design en learning &amp; development om teams voor te bereiden op situaties waarin kennis en handelen samenkomen.</p>
<p class="sp-lead">We werken in kleine, betrokken teams en houden de lijnen kort. Klanten werken rechtstreeks met de ontwerpers en ontwikkelaars die het project uitvoeren. Daardoor kunnen we snel schakelen, kritisch doorvragen en ideeën vroeg testen.</p>
<p class="sp-lead">Preludens maakt complexe kennis speelbaar, verhalend en toepasbaar. Met MicroGames, storytelling en spelprincipes creëren we leerervaringen die nieuwsgierigheid oproepen, actieve betrokkenheid stimuleren en mensen motiveren om verder te leren.</p>
{% endcapture %}
{% capture intro_checks %}
{% include panels/check.html text="Betrokkenheid activeert mensen." %}
{% include panels/check.html text="Spel en storytelling creëren die betrokkenheid." %}
{% include panels/check.html text="Daardoor gaan mensen ontdekken, kiezen, oefenen en feedback verwerken." %}
{% include panels/check.html text="Zo wordt complexe kennis begrijpelijker, beter onthouden en toepasbaar in de praktijk." %}
{% endcapture %}
{% capture intro_aside %}
<h3>Van betrokkenheid naar toepasbare kennis</h3>
{% include panels/checklist.html label="Van betrokkenheid naar toepasbare kennis" items=intro_checks %}
{% endcapture %}
{% capture intro_body %}
<h3>Kennis komt niet automatisch</h3>
<h2>Wij zien dagelijks de kracht van het spel binnen complexe vraagstukken</h2>
{% include panels/aside.html main=intro_main aside=intro_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=intro_body %}

{% capture daan_body %}
<p class="sp-lead">Daan grijpt zelden de eerste oplossing. Hij graaft dieper naar creatieve antwoorden op procesvraagstukken, met spelmechanismen en win-win denken als kompas. Met meer dan vijftien jaar ervaring in MicroGaming begeleidt hij organisaties die spel en verhaal doordachter willen inzetten voor leren en veranderen.</p>
<p class="sp-lead">Zijn kracht ligt in het zichtbaar maken van de game die vaak al in de werkelijkheid verborgen zit — niet door spelelementen los toe te voegen, maar door te onderzoeken welke spanning, keuzes en gedragspatronen al aanwezig zijn.</p>
{% endcapture %}
{% capture jw_body %}
<p class="sp-lead">Jan-Willem is een enthousiaste creatieveling met een passie voor onderwijs, techniek en puzzels. Hij maakt vage ideeën concreet met snelle prototypes en zet mensen in beweging, van escape rooms tot serious games.</p>
<p class="sp-lead">Zijn kracht ligt in het verbinden van concept en uitvoering. Waar een leeridee nog abstract is, brengt hij structuur aan. Waar een ervaring technisch complex kan worden, zoekt hij naar eenvoud.</p>
{% endcapture %}
{% capture people_items %}
{% include panels/person.html name="Daan Groen" role="Oprichter en ontwerper" photo="/assets/images/team/daan-groen.jpg" alt="Daan Groen" body=daan_body %}
{% include panels/person.html name="Jan-Willem Manenschijn" role="Vernieuwer en ontwikkelaar" photo="/assets/images/team/jan-willem-manenschijn.jpg" alt="Jan-Willem Manenschijn" body=jw_body %}
{% endcapture %}
{% capture team_body %}
<h3>Maak kennis met het team</h3>
<h2>Ontwerp en techniek, in één compact team</h2>
<p class="sp-lead">Waar Daan leerproblemen ontrafelt en spelmechanismen zichtbaar maakt, vertaalt Jan-Willem ideeën naar heldere, werkende ervaringen. Samen brengen we serious games, storytelling, didactisch ontwerp en techniek bij elkaar.</p>
{% include panels/people.html label="Het team van Preludens" items=people_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=team_body %}

<!-- TODO [WACHTEN OP FOTO]: vervang missie.* door foto van Daan + Jan-Willem in het New Future Lab, aan tafel -->
{% capture missie_copy %}
<h3>Waarom we Preludens zijn gestart</h3>
<h2>Game-based leren moet voor iedereen toegankelijk zijn</h2>
<p class="sp-lead">Onze missie is om game-based leren toegankelijk te maken voor iedere organisatie — groot én klein. Na jaren ervaring met serious games zagen we hoeveel sterker leren wordt wanneer mensen actief kunnen kiezen, oefenen en ervaren wat hun handelen betekent.</p>
<p class="sp-lead">Daarom ontwikkelen we leerervaringen die betaalbaar, schaalbaar en tastbaar zijn: beheersbare ontwikkelkosten, modulaire oplossingen en producten die klanten zonder onnodige technische drempels binnen hun bestaande leeromgeving kunnen inzetten.</p>
{% endcapture %}
{% capture missie_body %}
{% include panels/media.html src="/assets/images/team/missie.jpg" webp="/assets/images/team/missie.webp" alt="Preludens maakt game-based leren toegankelijk voor iedere organisatie" ratio="1400 / 499" reverse=true body=missie_copy %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=missie_body %}

{% capture value_items %}
{% include panels/value.html title="Robuust" text="Een leerervaring moet vertrouwen geven. We ontwerpen oplossingen die logisch aanvoelen, stabiel werken en helder zijn. De techniek mag nooit in de weg staan van de ervaring." %}
{% include panels/value.html title="Doelgericht" text="We maken ontwerpkeuzes niet omdat ze leuk zijn, maar omdat ze bijdragen aan het leren. Elk verhaal, iedere keuze en elke MicroGame is terug te voeren op duidelijke leerdoelen." %}
{% include panels/value.html title="Toegankelijk" text="Complexe kennis hoeft niet ingewikkeld te voelen. We vertalen inhoud naar herkenbare situaties, duidelijke keuzes en concrete feedback, zodat mensen kunnen ontdekken en groeien." %}
{% include panels/value.html title="Nieuwsgierig" text="We nemen de eerste oplossing niet zomaar over. We onderzoeken de praktijk, stellen vragen en zoeken de route die kennis, gedrag en ervaring met elkaar verbindt." %}
{% endcapture %}
{% capture values_body %}
<h2>Waar wij voor staan</h2>
<p class="sp-lead">Kwaliteit geeft ons energie.</p>
{% include panels/values.html label="Waar wij voor staan" columns="two" items=value_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=values_body %}

{% capture principle_steps %}
{% include panels/step.html num="1" title="Heldere en haalbare doelstellingen" %}
{% include panels/step.html num="2" title="Balans tussen kennis, skills en geluk" %}
{% include panels/step.html num="3" title="Mechanismen uit de realiteit" %}
{% include panels/step.html num="4" title="Focus op positieve, menselijke emoties" %}
{% include panels/step.html num="5" title="Robuuste, logische besturing" %}
{% include panels/step.html num="6" title="Duidelijke feedback, zonder afleiding" %}
{% include panels/step.html num="7" title="De volgende stap altijd duidelijk" %}
{% endcapture %}
{% capture principles_main %}
<p class="sp-lead">Elk ontwerp is inhoudelijk scherp, technisch stevig en gericht op leren dat in de praktijk toepasbaar wordt. In onze ontwerpmethodiek lees je precies hoe we dat doen — van heldere doelstellingen tot duidelijke feedback en een altijd zichtbare volgende stap.</p>
{% include panels/actions.html primary_label="Bekijk onze ontwerpmethodiek →" primary_href="/ontwerpmethodiek/" %}
{% endcapture %}
{% capture principles_aside %}
{% include panels/steps.html variant="list" items=principle_steps %}
{% endcapture %}
{% capture principles_body %}
<h3>Zo ontwerpen wij leerervaringen</h3>
<h2>Zeven principes achter ons ontwerp</h2>
{% include panels/aside.html main=principles_main aside=principles_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=principles_body %}

{% capture cta_left %}In één dagdeel onderzoeken we samen het probleem, de doelgroep en de gewenste verandering.{% endcapture %}
{% capture cta_right %}Je krijgt een concrete eerste richting, zonder je direct vast te leggen op een volledig project.{% endcapture %}
{% include panels/cta.html kicker="Zet de eerste stap" title="Begin met een GameStorm" left=cta_left right=cta_right stack=true primary_label="Plan een GameStorm" primary_href="/gamestorm/" secondary_label="Neem contact op" secondary_href="/contact/" %}

{% include panels/footer-reveal.html %}

</div>
