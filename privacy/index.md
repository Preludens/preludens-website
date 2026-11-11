---
layout: default
lang: nl
title: Privacyverklaring
description: Welke persoonsgegevens Preludens verwerkt als je de website bezoekt, het contactformulier invult of een kennismaking plant, waarom, en wat je rechten zijn.
body_class: page-panels page-privacy
permalink: /privacy/
---

{%- comment -%}
  Privacyverklaring. De Engelse versie staat in en/privacy/index.md en volgt
  deze pagina paragraaf voor paragraaf: pas ze samen aan.

  Wat hier staat, is nagelopen tegen de code (consent.js, form.js, head.html,
  de varianten-include met Bookings) en tegen _marketing/gtm-configuratie.md.
  Komt er een tag, cookie of dienst bij, dan hoort hij hier ook bij.
  De opmaak staat in _sass/components/_privacy.scss.
{%- endcomment -%}

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Hoe Preludens met je <span class="hl">gegevens</span> omgaat{% endcapture %}
{% capture hero_lead %}In deze verklaring lees je welke persoonsgegevens Preludens B.V. verwerkt als je deze website bezoekt, het contactformulier invult of een kennismaking plant. Ook waarom we dat doen, wie er verder bij kan, hoe lang we het bewaren en wat je kunt doen als je dat anders wilt.{% endcapture %}
{% include panels/hero.html kicker="Privacy" title=hero_title lead=hero_lead lead2="Laatst bijgewerkt op 11 november 2026." %}

{% capture short_items %}
{% include panels/check.html text="We meten alleen met cookies als je daar toestemming voor geeft. Je keuze kun je altijd aanpassen." %}
{% include panels/check.html text="Wat je in het contactformulier invult, komt in HubSpot terecht, in de Europese omgeving van HubSpot." %}
{% include panels/check.html text="We gebruiken je contactgegevens om je vraag te beantwoorden en het gesprek op te volgen." %}
{% include panels/check.html text="Je kunt je gegevens inzien, laten aanpassen of laten verwijderen via info@preludens.nl." %}
{% endcapture %}
{% capture short_body %}
<h2>In het kort</h2>
{% include panels/checklist.html label="De privacyverklaring in het kort" columns="two" items=short_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" body=short_body %}

<section class="panel panel--paper">
  <div class="panel__inner">
    <div class="privacy">
      <nav class="privacy__toc" aria-labelledby="privacy-toc-title">
        <p class="privacy__toc-title" id="privacy-toc-title">Op deze pagina</p>
        <ol>
          <li><a href="#wie">Wie verantwoordelijk is</a></li>
          <li><a href="#contact">Als je contact opneemt</a></li>
          <li><a href="#bezoek">Als je de website bezoekt</a></li>
          <li><a href="#cookies">Welke cookies we gebruiken</a></li>
          <li><a href="#delen">Wie je gegevens nog meer ziet</a></li>
          <li><a href="#buiten-eu">Gegevens buiten de EU</a></li>
          <li><a href="#bewaren">Hoe lang we gegevens bewaren</a></li>
          <li><a href="#beveiliging">Hoe we gegevens beschermen</a></li>
          <li><a href="#rechten">Jouw rechten</a></li>
          <li><a href="#wijzigingen">Als deze verklaring verandert</a></li>
        </ol>
      </nav>

      <div class="privacy__body">

        <section class="privacy__section" id="wie" aria-labelledby="wie-titel">
          <h2 id="wie-titel">Wie verantwoordelijk is</h2>
          <p>Preludens B.V. is verantwoordelijk voor de verwerking van de persoonsgegevens die in deze verklaring staan.</p>
          <dl class="privacy__facts">
            <div><dt>Bedrijf</dt><dd>Preludens B.V.</dd></div>
            <div><dt>Adres</dt><dd>Heemskerkstraat 36, 2613 AL Delft</dd></div>
            <div><dt>KVK</dt><dd>99042827</dd></div>
            <div><dt>E-mail</dt><dd><a href="mailto:info@preludens.nl">info@preludens.nl</a></dd></div>
            <div><dt>Telefoon</dt><dd><a href="tel:+31152024047">+31 15 202 404 7</a></dd></div>
          </dl>
          <p>Preludens heeft geen functionaris gegevensbescherming. Vragen over privacy beantwoorden we zelf, via <a href="mailto:info@preludens.nl">info@preludens.nl</a>.</p>
        </section>

        <section class="privacy__section" id="contact" aria-labelledby="contact-titel">
          <h2 id="contact-titel">Als je contact opneemt</h2>

          <h3>Via het contactformulier</h3>
          <p>Het formulier vraagt je naam, je organisatie, een e-mailadres of telefoonnummer en een korte omschrijving van je vraag. Bij het versturen gaan die gegevens naar HubSpot, het systeem waarin we contacten bijhouden. Ook de pagina waarop je het formulier invulde gaat mee, zodat we weten waar je vraag over gaat.</p>
          <p>Heb je toestemming gegeven voor statistieken, dan gaat ook het HubSpot-cookie van je browser mee. Daarmee ziet HubSpot via welke pagina's je bij het formulier kwam. Zonder die toestemming is er geen cookie en gaat alleen het formulier mee.</p>
          <p>Zodra het formulier binnen is, krijgen we een melding in Microsoft Teams of per e-mail. We nemen binnen één werkdag contact met je op.</p>

          <h3>Via de agenda voor een kennismaking</h3>
          <p>Op sommige pagina's kun je zelf een moment kiezen voor een online kennismaking. Die agenda is Microsoft Bookings en staat in de pagina zelf. Wat je daar invult, zoals je naam en e-mailadres, komt in onze Microsoft 365-omgeving terecht, net als de afspraak. Om de agenda te laden maakt je browser verbinding met Microsoft.</p>

          <h3>Per e-mail of telefoon</h3>
          <p>Mail of bel je ons rechtstreeks, dan gebruiken we je gegevens en wat je vertelt om je vraag te beantwoorden.</p>

          <h3>Waarom we dit mogen</h3>
          <p>Je vraagt ons zelf om contact op te nemen. Gaat het over een mogelijke opdracht, dan zijn je gegevens nodig voor de stappen voordat we een overeenkomst sluiten. Gaat het over iets anders, dan is het ons gerechtvaardigd belang om vragen te beantwoorden die bij ons binnenkomen.</p>
        </section>

        <section class="privacy__section" id="bezoek" aria-labelledby="bezoek-titel">
          <h2 id="bezoek-titel">Als je de website bezoekt</h2>

          <h3>Altijd, ook zonder toestemming</h3>
          <p>Om een pagina te tonen moet je browser verbinding maken met de servers die hem leveren. Daarbij zien die servers technische gegevens, zoals je IP-adres en het type browser. Het gaat om drie partijen:</p>
          <ul>
            <li>GitHub Pages host de website. GitHub gebruikt die gegevens om de site te leveren en te beveiligen.</li>
            <li>Google Fonts levert de lettertypen. Google ziet daarbij je IP-adres, maar zet geen cookies.</li>
            <li>Google Tag Manager laadt de meting die hieronder staat. Zonder je toestemming stuurt hij alleen een signaal zonder cookie en zonder identificatie, met daarin dat er een pagina is bekeken en welke cookiekeuze er is gemaakt. Daarmee kunnen we zien hoeveel bezoek de site ongeveer krijgt, zonder iemand te volgen.</li>
          </ul>
          <p>Deze gegevens hebben we nodig om de site te laten werken en te weten of hij gebruikt wordt. Dat is ons gerechtvaardigd belang.</p>

          <h3>Met toestemming voor statistieken</h3>
          <p>Geef je toestemming voor statistieken, dan meten drie diensten hoe de site gebruikt wordt. We gebruiken dat om pagina's duidelijker te maken en te zien welke onderwerpen mensen zoeken.</p>
          <ul>
            <li>Google Analytics 4 meet paginaweergaven, hoe ver je scrolt, klikken op knoppen en op e-mail- en telefoonlinks, het afspelen van video's, het openen van een demo en het starten en versturen van een formulier. Google Signals staat uit, we delen geen gegevens met Google voor eigen doeleinden en verkeer vanaf ons kantoor tellen we niet mee.</li>
            <li>Microsoft Clarity maakt opnames van een bezoek en zogenoemde heatmaps, die laten zien waar mensen klikken, hoe ver ze scrollen en waar ze afhaken. Daaraan zien we waar een pagina onduidelijk is.</li>
            <li>HubSpot herkent een terugkerende bezoeker. Vul je later het contactformulier in, dan koppelt HubSpot je eerdere bezoeken aan je vraag, zodat we weten wat je al gelezen hebt.</li>
          </ul>

          <h3>Met toestemming voor marketing</h3>
          <p>Adverteren we via Google Ads, dan meet de site met je toestemming voor marketing of een klik op een advertentie leidt tot een ingevuld formulier of een geplande afspraak. Zo weten we welke advertenties werken. Zonder die toestemming plaatst Google geen advertentiecookies.</p>

          <h3>Je keuze aanpassen</h3>
          <p>Statistieken en marketing gebruiken we alleen met je toestemming. Die kun je altijd intrekken of aanpassen met de knop <strong>Cookievoorkeuren</strong> onderaan elke pagina. Wat al gemeten is voordat je je toestemming introk, blijft staan tot de bewaartermijn verloopt.</p>
        </section>

        <section class="privacy__section" id="cookies" aria-labelledby="cookies-titel">
          <h2 id="cookies-titel">Welke cookies we gebruiken</h2>
          <p>Een cookie is een klein bestand dat een website in je browser opslaat. De taal van de site volgt uit het webadres; daar is geen cookie voor nodig. Dit zijn de cookies die de site kan plaatsen. De diensten kunnen er af en toe een toevoegen of hernoemen; de bewaartermijnen zijn die van de leverancier.</p>
          <div class="privacy__table-wrap">
            <table class="privacy__table">
              <thead>
                <tr><th scope="col">Cookie</th><th scope="col">Van</th><th scope="col">Waarvoor</th><th scope="col">Bewaard</th></tr>
              </thead>
              <tbody>
                <tr class="privacy__table-group"><th scope="rowgroup" colspan="4">Noodzakelijk</th></tr>
                <tr><td data-label="Cookie"><code>preludens_consent</code></td><td data-label="Van">Preludens</td><td data-label="Waarvoor">Onthoudt je cookiekeuze</td><td data-label="Bewaard">6 maanden</td></tr>
                <tr class="privacy__table-group"><th scope="rowgroup" colspan="4">Statistieken</th></tr>
                <tr><td data-label="Cookie"><span><code>_ga</code>, <code>_ga_*</code></span></td><td data-label="Van">Google Analytics</td><td data-label="Waarvoor">Herkent een terugkerende browser en houdt een bezoek bij</td><td data-label="Bewaard">2 jaar</td></tr>
                <tr><td data-label="Cookie"><code>_clck</code></td><td data-label="Van">Microsoft Clarity</td><td data-label="Waarvoor">Herkent een terugkerende browser</td><td data-label="Bewaard">1 jaar</td></tr>
                <tr><td data-label="Cookie"><code>_clsk</code></td><td data-label="Van">Microsoft Clarity</td><td data-label="Waarvoor">Voegt paginaweergaven samen tot één opname</td><td data-label="Bewaard">1 dag</td></tr>
                <tr><td data-label="Cookie"><code>hubspotutk</code></td><td data-label="Van">HubSpot</td><td data-label="Waarvoor">Koppelt eerdere bezoeken aan een ingevuld formulier</td><td data-label="Bewaard">6 maanden</td></tr>
                <tr><td data-label="Cookie"><code>__hstc</code></td><td data-label="Van">HubSpot</td><td data-label="Waarvoor">Houdt bezoeken en tijdstippen bij</td><td data-label="Bewaard">6 maanden</td></tr>
                <tr><td data-label="Cookie"><code>__hssc</code></td><td data-label="Van">HubSpot</td><td data-label="Waarvoor">Telt paginaweergaven binnen één bezoek</td><td data-label="Bewaard">30 minuten</td></tr>
                <tr><td data-label="Cookie"><code>__hssrc</code></td><td data-label="Van">HubSpot</td><td data-label="Waarvoor">Ziet of de browser opnieuw is opgestart</td><td data-label="Bewaard">Tot je de browser sluit</td></tr>
                <tr class="privacy__table-group"><th scope="rowgroup" colspan="4">Marketing</th></tr>
                <tr><td data-label="Cookie"><code>_gcl_au</code></td><td data-label="Van">Google Ads</td><td data-label="Waarvoor">Meet of een advertentieklik tot contact leidt</td><td data-label="Bewaard">90 dagen</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="privacy__section" id="delen" aria-labelledby="delen-titel">
          <h2 id="delen-titel">Wie je gegevens nog meer ziet</h2>
          <p>We werken met een paar diensten die gegevens voor ons verwerken. Met Google, Microsoft en HubSpot hebben we verwerkersovereenkomsten. Daarin staat dat ze je gegevens alleen voor ons gebruiken.</p>
          <ul>
            <li>HubSpot voor het contactformulier, ons klantsysteem en de meting van terugkerende bezoekers. Ons account staat in de Europese omgeving van HubSpot.</li>
            <li>Google voor Tag Manager, Analytics, Ads en de lettertypen.</li>
            <li>Microsoft voor Clarity, en voor meldingen, e-mail en afspraken in Teams, Outlook en Bookings.</li>
            <li>GitHub voor de hosting van de website.</li>
          </ul>
          <p>We verkopen je gegevens niet. We geven ze alleen aan anderen als de wet ons daartoe verplicht.</p>
        </section>

        <section class="privacy__section" id="buiten-eu" aria-labelledby="buiten-eu-titel">
          <h2 id="buiten-eu-titel">Gegevens buiten de Europese Unie</h2>
          <p>Google, Microsoft, HubSpot en GitHub zijn Amerikaanse bedrijven. Ook als gegevens in Europa staan, kunnen ze daardoor in de Verenigde Staten worden verwerkt. Deze bedrijven zijn aangesloten bij het EU-VS-gegevensprivacykader (Data Privacy Framework). De Europese Commissie heeft besloten dat gegevens die op grond daarvan worden doorgegeven voldoende beschermd zijn.</p>
        </section>

        <section class="privacy__section" id="bewaren" aria-labelledby="bewaren-titel">
          <h2 id="bewaren-titel">Hoe lang we gegevens bewaren</h2>
          <ul>
            <li>Je contactgegevens en je vraag bewaren we zo lang als nodig is om je vraag af te handelen en het gesprek op te volgen.<!-- TODO [BEWAARTERMIJN]: Jan-Willem legt de termijn voor leads in HubSpot nog vast. Vervang deze zin door de vaste termijn, ook in en/privacy/index.md. --></li>
            <li>Word je klant, dan bewaren we de gegevens die in onze administratie terechtkomen zeven jaar, omdat de wet dat van ons vraagt.</li>
            <li>Google Analytics bewaart gegevens die aan een bezoeker gekoppeld zijn 14 maanden.</li>
            <li>Cookies verlopen na de termijn in de tabel hierboven.</li>
          </ul>
        </section>

        <section class="privacy__section" id="beveiliging" aria-labelledby="beveiliging-titel">
          <h2 id="beveiliging-titel">Hoe we gegevens beschermen</h2>
          <p>De website heeft geen eigen server of database waarin persoonsgegevens staan. Het contactformulier gaat via een versleutelde verbinding rechtstreeks naar HubSpot. Diensten die toestemming nodig hebben, laden pas nadat je die gegeven hebt.</p>
        </section>

        <section class="privacy__section" id="rechten" aria-labelledby="rechten-titel">
          <h2 id="rechten-titel">Jouw rechten</h2>
          <p>Je hebt het recht om:</p>
          <ul>
            <li>te zien welke gegevens we van je hebben;</li>
            <li>onjuiste gegevens te laten verbeteren;</li>
            <li>je gegevens te laten verwijderen;</li>
            <li>het gebruik van je gegevens te laten beperken;</li>
            <li>bezwaar te maken tegen het gebruik op grond van ons gerechtvaardigd belang;</li>
            <li>je gegevens in een gangbaar bestandsformaat te krijgen, om ze aan een ander te geven;</li>
            <li>je toestemming in te trekken, voor cookies via Cookievoorkeuren onderaan de pagina.</li>
          </ul>
          <p>Stuur je verzoek naar <a href="mailto:info@preludens.nl">info@preludens.nl</a>. We reageren binnen een maand. Soms vragen we je eerst te bevestigen wie je bent, zodat we gegevens niet aan de verkeerde persoon geven. Een kopie van je identiteitsbewijs is daarvoor niet nodig.</p>
          <p>Ben je niet tevreden over hoe we met je gegevens of je verzoek omgaan, laat het ons dan eerst weten. Je kunt ook een klacht indienen bij de <a href="https://www.autoriteitpersoonsgegevens.nl/" rel="noopener">Autoriteit Persoonsgegevens</a>.</p>
        </section>

        <section class="privacy__section" id="wijzigingen" aria-labelledby="wijzigingen-titel">
          <h2 id="wijzigingen-titel">Als deze verklaring verandert</h2>
          <p>Gaan we gegevens anders gebruiken, of komt er een dienst bij, dan passen we deze pagina aan. Bovenaan staat de datum van de laatste wijziging.</p>
        </section>

      </div>
    </div>
  </div>
</section>

{% capture questions_body %}
<h2>Vragen over je gegevens?</h2>
<p class="sp-lead">Mail naar info@preludens.nl of bel +31&nbsp;15&nbsp;202&nbsp;404&nbsp;7. Je cookiekeuze pas je hier ook aan.</p>
<div class="sp-actions">
  <a class="btn btn-primary" href="mailto:info@preludens.nl">Mail info@preludens.nl</a>
  <button class="btn btn-secondary privacy__revoke" type="button" data-consent-revoke>{{ site.data.nl.consent.revoke }}</button>
</div>
{% endcapture %}
{% include panels/panel.html variant="harbor" align="left" body=questions_body %}

{% include panels/footer-reveal.html %}

</div>
