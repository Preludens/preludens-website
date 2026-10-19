---
layout: default
lang: nl
title: Diensten
description: MicroGame Stories, Dilemma Storytelling en Game Thinking — drie routes om complexe kennis speelbaar en toepasbaar te maken.
body_class: page-panels
permalink: /diensten/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Wij ontwerpen en implementeren leerervaringen die mensen in beweging brengen{% endcapture %}
{% capture hero_lead %}Preludens vertaalt complexe kennis naar interactieve leerervaringen met verhaal, spel en feedback. Zo worden teams uitgedaagd om situaties te verkennen, geactiveerd om keuzes te maken en gemotiveerd om kennis toe te passen in de praktijk.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Neem contact op →" primary_href="/contact/" secondary_label="Start met een GameStorm" secondary_href="/gamestorm/" %}
{% endcapture %}
{% include panels/hero.html kicker="Diensten" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/diensten-hero.jpg" figure_alt="Een team dat samen een route uitzet" figure_href="/gamestorm/" figure_caption="Van kennis naar toepasbaar gedrag." %}

{% capture gap_main %}
<p class="sp-lead">Veel leertrajecten lopen vast op hetzelfde punt: de inhoud klopt, maar de toepassing blijft achter. Medewerkers lezen theorie, bekijken instructies of maken een toets. Dat kan helpen om informatie over te dragen, maar het bereidt mensen niet altijd voor op de momenten waarop ze moeten afwegen, reageren of handelen.</p>
<p class="sp-lead">Juist daar ontstaat de leeruitdaging.</p>
<p class="sp-lead">Wanneer veiligheid, kwaliteit, klantcontact, samenwerking of efficiëntie op het spel staan, is alleen uitleg geven vaak niet genoeg. Teams moeten kunnen oefenen met herkenbare situaties. Ze moeten ervaren welke keuzes mogelijk zijn, wat de gevolgen zijn en hoe ze kunnen bijsturen.</p>
<p class="sp-lead">Daarom ontwerpen wij leerervaringen waarin mensen actief ontdekken, kiezen, oefenen en reflecteren. Met storytelling geven we kennis context. Met MicroGames maken we oefenen kort, gericht en actief. Met feedback en data wordt zichtbaar waar deelnemers sterk zijn en waar ze extra ondersteuning nodig hebben.</p>
<p class="sp-lead">Zo wordt leren geen verplichting om doorheen te klikken, maar een route waarin mensen stap voor stap sterker leren handelen.</p>
{% endcapture %}
{% capture gap_checks %}
{% include panels/check.html text="Kennis krijgt context via storytelling." %}
{% include panels/check.html text="MicroGames maken oefenen kort en actief." %}
{% include panels/check.html text="Feedback en data maken groei zichtbaar." %}
{% include panels/check.html text="Leren wordt een route, geen doorgeklikte verplichting." %}
{% endcapture %}
{% capture gap_aside %}
{% include panels/checklist.html label="Wat onze aanpak toevoegt" items=gap_checks %}
{% endcapture %}
{% capture gap_body %}
<h3>Als kennis blijft liggen</h3>
<h2>Van kennisoverdracht naar toepasbaar gedrag</h2>
{% include panels/aside.html main=gap_main aside=gap_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=gap_body %}

{% capture routes_body %}
<h3>Drie routes om kennis speelbaar en toepasbaar te maken</h3>
<h2>Onze diensten</h2>
<p class="sp-lead">Elke leeruitdaging vraagt om een andere vorm. Soms wil je basiskennis trainen en borgen. Soms moeten mensen leren omgaan met lastige keuzes. En soms is eerst een scherpe analyse nodig van gedrag, doelen en spanningen in de praktijk. Daarom werkt Preludens met drie duidelijke routes.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" body=routes_body %}

<!-- TODO [WACHTEN OP FOTO]: plaats bij MicroGame Stories, Dilemma Storytelling en Game Thinking een productafbeelding (praatplaten) naast de tekst, via panels/media.html. -->
{% capture mgs_checks %}
{% include panels/check.html text="Het trainen en borgen van basiskennis" %}
{% include panels/check.html text="Onboarding of introductie van nieuwe processen" %}
{% include panels/check.html text="Het herhalen van regels, afspraken of werkwijzen" %}
{% include panels/check.html text="Het koppelen van theorie aan herkenbare werksituaties" %}
{% include panels/check.html text="Online leren dat kort, visueel en actief moet zijn" %}
{% endcapture %}
{% capture mgs_main %}
<h3>Geschikt voor</h3>
{% include panels/checklist.html label="MicroGame Stories zijn geschikt voor" items=mgs_checks %}
{% endcapture %}
{% capture mgs_aside %}
<h3>Wat deelnemers ervaren</h3>
<p class="sp-lead">Ze lezen niet alleen wat ze moeten weten, maar worden meegenomen in een verhaal. Ze herkennen situaties, maken keuzes, krijgen feedback en oefenen met de kennis die ze later nodig hebben.</p>
{% include panels/actions.html primary_label="Meer over MicroGame Stories →" primary_href="/contact/" %}
{% endcapture %}
{% capture mgs_body %}
<h3>Korte leerervaringen met verhaal, spel en herhaling</h3>
<h2>MicroGame Stories</h2>
<p class="sp-lead">MicroGame Stories zijn korte, visuele online trainingen waarin basiskennis wordt gekoppeld aan herkenbare praktijksituaties. Deelnemers volgen een verhaal, maken keuzes en oefenen tussendoor met korte MicroGames. Elk onderdeel is gericht op een concreet leerdoel. Zo krijgt kennis context, herhaling en directe feedback.</p>
<p class="sp-lead">Een MicroGame Story is geschikt wanneer je belangrijke kennis wilt overdragen aan een grotere doelgroep, zonder mensen te belasten met lange, passieve modules.</p>
{% include panels/aside.html variant="even" main=mgs_main aside=mgs_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="microgame-stories" body=mgs_body %}

{% capture dil_checks %}
{% include panels/check.html text="Besluitvorming in complexe situaties" %}
{% include panels/check.html text="Veiligheid, kwaliteit, samenwerking of klantcontact" %}
{% include panels/check.html text="Situaties waarin gedrag belangrijker is dan kennis alleen" %}
{% include panels/check.html text="Het oefenen van afwegingen tussen verschillende doelen" %}
{% include panels/check.html text="Teams die beter willen leren reflecteren op keuzes en gevolgen" %}
{% endcapture %}
{% capture dil_main %}
<h3>Geschikt voor</h3>
{% include panels/checklist.html label="Dilemma Storytelling is geschikt voor" items=dil_checks %}
{% endcapture %}
{% capture dil_aside %}
<h3>Wat deelnemers ervaren</h3>
<p class="sp-lead">Ze stappen in een herkenbare situatie, maken een keuze en zien wat die keuze veroorzaakt. Daardoor ontstaat gesprek, inzicht en meer bewustzijn over handelen in de praktijk.</p>
{% include panels/actions.html primary_label="Meer over Dilemma Storytelling →" primary_href="/contact/" %}
{% endcapture %}
{% capture dil_body %}
<h3>Oefenen met keuzes waar geen simpel antwoord op is</h3>
<h2>Dilemma Storytelling</h2>
<p class="sp-lead">Dilemma Storytelling helpt teams om lastige situaties te verkennen waarin meerdere belangen tegelijk spelen. Deelnemers krijgen realistische scenario’s voorgelegd en maken keuzes die gevolgen hebben. Niet elke situatie heeft één goed antwoord. Soms vraagt veiligheid om iets anders dan snelheid. Soms schuurt klanttevredenheid met kwaliteit. Soms moet een team leren afwegen wat op dat moment het zwaarst weegt.</p>
<p class="sp-lead">Door keuzes zichtbaar te maken en te koppelen aan gevolgen, leren deelnemers scherper kijken naar hun eigen afwegingen.</p>
{% include panels/aside.html variant="even" main=dil_main aside=dil_aside %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="dilemma-storytelling" body=dil_body %}

{% capture gt_checks %}
{% include panels/check.html text="Complexe vraagstukken waarin de oplossing nog niet scherp is" %}
{% include panels/check.html text="Leer- of verandertrajecten die beter moeten aansluiten op gedrag" %}
{% include panels/check.html text="Organisaties die eerst willen verkennen voordat productie start" %}
{% include panels/check.html text="Het formuleren van leerdoelen en ontwerpprincipes" %}
{% include panels/check.html text="Het ontdekken van de spelstructuur die al in de praktijk verborgen zit" %}
{% endcapture %}
{% capture gt_main %}
<h3>Geschikt voor</h3>
{% include panels/checklist.html label="Game Thinking is geschikt voor" items=gt_checks %}
{% endcapture %}
{% capture gt_aside %}
<h3>Wat het oplevert</h3>
<p class="sp-lead">Game Thinking geeft richting voordat je gaat ontwikkelen. Je krijgt meer grip op de doelgroep, de leerdoelen, de gewenste verandering en de vorm die daarbij past.</p>
{% include panels/actions.html primary_label="Meer over Game Thinking →" primary_href="/contact/" %}
{% endcapture %}
{% capture gt_body %}
<h3>Eerst grip krijgen op gedrag, doelen en spelmechanismen</h3>
<h2>Game Thinking</h2>
<p class="sp-lead">Game Thinking is onze ontwerpaanpak voor complexe leer- en veranderopgaven. We bekijken een vraagstuk alsof het een game is. Niet om er direct een spel van te maken, maar om zichtbaar te krijgen welke doelen, regels, keuzes, spanningen, feedbackmomenten en blokkades al in de praktijk aanwezig zijn.</p>
<p class="sp-lead">Dat noemen we Find the Game. Samen onderzoeken we wat mensen moeten leren, welk gedrag moet veranderen en waar in de praktijk beweging mogelijk is. Vanuit die analyse ontstaat een duidelijke blauwdruk voor een leerervaring, interventie of serious game.</p>
{% include panels/aside.html variant="even" main=gt_main aside=gt_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="game-thinking" body=gt_body %}

{% capture route_steps %}
{% include panels/step.html num="1" title="Verkennen" text="We brengen je leeropgave scherp in beeld. In een eerste gesprek of GameStorm onderzoeken we het probleem, de doelgroep, de context en de belangrijkste leerdoelen." %}
{% include panels/step.html num="2" title="Scherpstellen" text="We vertalen de leeropgave naar duidelijke doelen en ontwerpkeuzes. We maken concreet wat deelnemers na afloop moeten begrijpen, herkennen, kiezen of toepassen." %}
{% include panels/step.html num="3" title="Inhoud verzamelen" text="Jullie brengen de praktijkkennis, wij maken die speelbaar. We verzamelen trainingen, processen, casussen en expertkennis en onderzoeken hoe die kennis speelbaar wordt." %}
{% include panels/step.html num="4" title="De juiste vorm kiezen" text="Wil je basiskennis trainen, dan past een MicroGame Story. Wil je besluitvaardigheid versterken, dan Dilemma Storytelling. Is de oplossing nog niet scherp, dan starten we met Game Thinking." %}
{% include panels/step.html num="5" title="Ontwerpen" text="We vertalen kennis naar verhaal, keuzes en feedback. Samen werken we toe naar herkenbare situaties, passende spelmechanismen en een eerste verhaallijn." %}
{% include panels/step.html num="6" title="Ontwikkelen en testen" text="We maken de leerervaring klaar voor gebruik: ontwikkelen, testen en verbeteren waar nodig — van MicroGame Story tot blauwdruk of publiceerbare module." %}
{% include panels/step.html num="7" title="Opleveren en beheren" text="Je krijgt een leerervaring die beschikbaar, vindbaar en doorontwikkelbaar blijft — in je eigen leeromgeving of via Prepo." %}
{% endcapture %}
{% capture route_body %}
<h3>Welke route past bij jouw uitdaging?</h3>
<h2>Van eerste vraag naar speelbare leerervaring</h2>
<p class="sp-lead">Niet elk vraagstuk vraagt om dezelfde oplossing. Daarom beginnen we niet bij de vorm, maar bij de leeropgave. Wat moeten mensen begrijpen, oefenen of anders gaan doen? Vanuit die vraag bepalen we welke route past: een MicroGame Story, Dilemma Storytelling, Game Thinking of een eerste GameStorm.</p>
{% include panels/steps.html variant="pyramid" items=route_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=route_body %}

{% capture cta_left %}Heb je kennis die beter moet blijven hangen? Gedrag dat moet veranderen? Of een complex vraagstuk waar je team mee moet leren omgaan?{% endcapture %}
{% capture cta_right %}In een GameStorm onderzoeken we samen waar de leeruitdaging zit en welke vorm daarbij past.{% endcapture %}
{% include panels/cta.html kicker="Ontdek welke leerroute past bij jouw team" title="Zet morgen de eerste stap" left=cta_left right=cta_right stack=true primary_label="Start met een GameStorm" primary_href="/gamestorm/" secondary_label="Neem contact op" secondary_href="/contact/" %}

{% include panels/footer-reveal.html %}

</div>
