# GTM, GA4 en Clarity — wat er in de interfaces moet staan

Hoort bij `overdracht-stap-0-meetfundament.md`. De site duwt alle events in de
`dataLayer`; welke tag daarop vuurt, staat hier. Dit deel kan niet in de
repository staan, want het leeft in Tag Manager, Analytics en Clarity.

Deze lijst is met de hand na te lopen in plaats van te importeren. Dat is een
keuze: een containerexport die half goed inleest, levert tags op die lijken te
werken. Bij 60 tot 150 bezoekers per pagina merk je dat pas als het experiment
voorbij is.

## 0. Wat er in `_config.yml` moet

```yaml
preludens:
  analytics:
    gtm_id: "GTM-5MMK7TXD"
    ga4_measurement_id: "G-Q0JG5Q810R"
    clarity_project_id: "zbl8vhhvgy"
  hubspot:
    portal_id: "149248161"
    form_guid: "5504aefa-116d-477c-870c-11795c5165e5"
    tracking: true
  demo:
    url: "/..."
```

Alleen `demo.url` is nog leeg (beslissing F). Zolang dat zo is, wijst de
primaire knop op de landingspagina's naar het formulier in plaats van naar de
demo — geen dode link, wel een pagina zonder demo.

## 0.1 HubSpot

Account `Preludens`, portal `149248161`, **regio eu1**. Het formulier post
daarom naar `api-eu1.hsforms.com` en de trackingcode komt van
`js-eu1.hs-scripts.com` — de regionale hosts van deze portal.

Dat endpoint is nagelopen: een lege post naar portal plus GUID komt terug met
`REQUIRED_FIELD` op `email`, niet met een 404. Het formulier bestaat dus en is
te bereiken; alleen een echte inzending is nog niet gedaan.

Formulier **Landingspagina's oplossingen**, zes velden, in deze koppeling:

| Veld in `form.js` | Eigenschap in HubSpot |
|---|---|
| `firstname` | Voornaam |
| `lastname` | Achternaam |
| `email` | E-mail |
| `company` | Naam onderneming |
| `message` | Bericht |
| `casus` | Casus (nieuw aangemaakt, één regel tekst) |

Het formulier wordt nergens getoond. De site tekent zijn eigen formulier en
post via de Forms API; HubSpot is hier alleen de ontvanger. Twee dingen staan
daarom met opzet uit:

- **reCAPTCHA.** HubSpot raadt het aan, maar de site stuurt niet het
  HubSpot-formulier in; spam vangen we met een honeypot en een drempel van drie
  seconden. Captcha aanzetten verandert niets aan de post en kost elke bezoeker
  een extra stap.
- **Het gegevensprivacyveld.** Dat hoort pas thuis als er een privacyverklaring
  is om naar te wijzen. Die is er nog niet (beslissing J).

Aan staat: *nieuwe contactpersonen aanmaken voor onbekende e-mailadressen*.
Zonder dat vinkje komt de inzending wel binnen maar wordt er geen contact van
gemaakt, en dat is nu juist de hele lead.

Zolang `gtm_id` leeg is, laadt de container niet en vuurt er niets. Dat is geen
storing; dat is de site zonder meting.

## 1. GA4-property

Account `Preludens` (415690069), property `preludens.nl` (563530409),
webstream `preludens.nl` (16314192540), metings-ID `G-Q0JG5Q810R`.

| Instelling | Waarde | Staat |
|---|---|---|
| Datastream | één, voor `preludens.nl` | staat |
| Dataretentie | 14 maanden, gebeurtenissen én gebruikers | staat |
| Google Signals | **uit** | staat (was al uit) |
| Delen met Google | alle vier de vinkjes uit | staat |
| Verbeterde meting → Formulierinteracties | **uit** | staat |
| Verwijzingen uitsluiten | `preludens.nl` | opgeslagen, nog niet gepubliceerd |
| Intern verkeer | uitsluiten op het kantoor-IP, filter op actief | open |
| Key event | `form_submit` | open |

Drie aantekeningen bij die tabel.

**Formulierinteracties staan uit** in de verbeterde meting. Die functie stuurt
zelf gebeurtenissen die `form_start` en `form_submit` heten — precies de namen
die de site zelf in de `dataLayer` duwt. Aan laten staan betekent elke inzending
dubbel tellen, zonder `casus` op de helft ervan. De andere zes onderdelen van de
verbeterde meting staan aan; die botsen nergens mee.

**De uitgesloten verwijzing is opgeslagen maar nog niet live.** GA4 heeft de
Google-tag omgezet naar een eigen container `GTM-WB3PXW46`. Dat is níét de
container van de site (`GTM-5MMK7TXD`); hij houdt alleen de taginstellingen van
deze stream vast. Instellingen daarin gelden pas na *Verzenden* in die
container.

**`form_submit` is nog geen key event.** GA4 laat alleen een gebeurtenis
aanvinken die minstens één keer is binnengekomen. Zet dat vinkje dus direct na
de eerste testinzending uit stap 5 hieronder, bij Beheer → Gebeurtenissen.

### 1.1 Aangepaste dimensies

Alle vijf aangemaakt, bereik **gebeurtenis**:

| Dimensienaam | Gebeurtenisparameter |
|---|---|
| Casus | `casus` |
| CTA label | `cta_label` |
| CTA positie | `cta_position` |
| Linktekst | `link_text` |
| Videotitel | `video_title` |

`form_submit` ook importeren als conversie in Google Ads (beslissing I).

> GA4 telt pas na toestemming, Google Ads telt de klik ervoor. Die twee komen
> nooit gelijk uit. Zet dat als notitie in de rapportagesheet, zodat niemand
> later naar een verschil gaat zoeken dat er hoort te zijn.

## 2. Variabelen in GTM

Ingebouwde variabelen aanzetten: `Page Path`, `Page URL`, `Click Element`,
`Click Text`.

Zelf aanmaken, alle van het type **Variabele voor gegevenslaag**, versie 2, en
met een lege standaardwaarde:

| Naam | Naam van variabele voor gegevenslaag |
|---|---|
| `dlv - casus` | `casus` |
| `dlv - page_path` | `page_path` |
| `dlv - page_language` | `page_language` |
| `dlv - video_title` | `video_title` |
| `dlv - cta_label` | `cta_label` |
| `dlv - cta_position` | `cta_position` |
| `dlv - link_text` | `link_text` |
| `dlv - consent_statistics` | `consent_statistics` |
| `dlv - consent_marketing` | `consent_marketing` |

Plus twee constanten: `const - GA4 meting-ID` (`G-XXXXXXXXXX`) en
`const - Clarity project-ID`.

## 3. Triggers

Allemaal van het type **Aangepaste gebeurtenis**, met de gebeurtenisnaam
precies zoals hieronder, en "Alle aangepaste gebeurtenissen".

| Trigger | Gebeurtenisnaam |
|---|---|
| `ce - scroll_50` | `scroll_50` |
| `ce - scroll_90` | `scroll_90` |
| `ce - video_play` | `video_play` |
| `ce - video_75` | `video_75` |
| `ce - demo_start` | `demo_start` |
| `ce - demo_complete` | `demo_complete` |
| `ce - cta_click` | `cta_click` |
| `ce - form_start` | `form_start` |
| `ce - form_submit` | `form_submit` |
| `ce - mailto_click` | `mailto_click` |

`page_view` krijgt geen trigger: die hangt aan de Google-tag zelf, op
**Initialisatie — alle pagina's**.

## 4. Tags

### 4.1 Google-tag (GA4)

- Type: **Google-tag**, tag-ID `{{const - GA4 meting-ID}}`
- Trigger: Initialisatie — alle pagina's
- Instellingen voor configuratie: `casus` = `{{dlv - casus}}`, `page_language` = `{{dlv - page_language}}`
- Toestemming: ingebouwde controles laten staan (de tag kijkt zelf naar
  `analytics_storage`)

Daarmee is `page_view` klaar.

### 4.2 Negen GA4-gebeurtenistags

Alle van het type **GA4-gebeurtenis**, met de Google-tag hierboven als
configuratie. Eén tag per regel, met de trigger uit paragraaf 3:

| Tag | Gebeurtenisnaam | Parameters |
|---|---|---|
| `GA4 - scroll_50` | `scroll_50` | `page_path` = `{{dlv - page_path}}`, `casus` = `{{dlv - casus}}` |
| `GA4 - scroll_90` | `scroll_90` | `page_path` = `{{dlv - page_path}}`, `casus` = `{{dlv - casus}}` |
| `GA4 - video_play` | `video_play` | `video_title` = `{{dlv - video_title}}`, `casus` = `{{dlv - casus}}` |
| `GA4 - video_75` | `video_75` | `video_title` = `{{dlv - video_title}}`, `casus` = `{{dlv - casus}}` |
| `GA4 - demo_start` | `demo_start` | `casus` = `{{dlv - casus}}` |
| `GA4 - demo_complete` | `demo_complete` | `casus` = `{{dlv - casus}}` |
| `GA4 - cta_click` | `cta_click` | `cta_label` = `{{dlv - cta_label}}`, `cta_position` = `{{dlv - cta_position}}`, `casus` = `{{dlv - casus}}` |
| `GA4 - form_start` | `form_start` | `casus` = `{{dlv - casus}}` |
| `GA4 - form_submit` | `form_submit` | `casus` = `{{dlv - casus}}` |
| `GA4 - mailto_click` | `mailto_click` | `link_text` = `{{dlv - link_text}}`, `casus` = `{{dlv - casus}}` |

`casus`, `cta_label`, `cta_position`, `video_title` en `link_text` staan in GA4
als **aangepaste dimensie** aangemeld (zie 1.1). Zonder die stap komen ze binnen
maar zijn ze niet in een rapport te kiezen — en dat is bij vier casussen de hele
vergelijking. Voeg je later een parameter toe, meld hem daar dan ook aan.

### 4.3 Microsoft Clarity

- Type: **Aangepaste HTML**
- Trigger: Alle pagina's
- Toestemming: *Aanvullende toestemming vereist* → `analytics_storage`
- Code: het script van Clarity, met `{{const - Clarity project-ID}}` als ID

Clarity staat met opzet in GTM en niet in de site: dan hangt hij aan dezelfde
toestemmingscategorie als GA4, en is er één plek waar de statistiekentags staan.

Bij 100 bezoekers per pagina is dit het instrument waar het meeste uit komt.
Dertig opnames bekijken zegt meer dan elk percentage.

## 5. Nakijken in de voorbeeldmodus

Open elke landingspagina in de voorbeeldmodus en loop dit af:

1. Vóór een keuze in de banner: geen cookies van GA4, HubSpot of Clarity.
2. Weiger: nog steeds geen cookies, wel een geanonimiseerde ping in GA4.
3. Accepteer: binnen 30 seconden een `page_view` in het realtime-rapport.
4. Scroll naar de helft en naar het eind: `scroll_50`, `scroll_90`.
5. Speel de film: `video_play`, en na driekwart `video_75`.
6. Klik elke knop: `cta_click`, met `cta_position` gelijk aan de id van het paneel.
7. Klik een `mailto:`-link: `mailto_click` met `link_text`.
8. Zet de cursor in het eerste veld: `form_start`.
9. Verstuur een testinzending: `form_submit`, en de lead in HubSpot met de juiste casus.
10. Open en rond de demo af: `demo_start`, `demo_complete`.
11. Op elk van deze events: staat `casus` erbij en klopt hij?

Doe dit daarna nog een keer op de live site, en in het Engels.
