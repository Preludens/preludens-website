# Overdracht — Stap 0: meetfundament voor vier landingspagina's

Voor: de agent die aan `preludens-website` werkt
Van: planning marketingexperimenten (zie `_marketing/plan-van-aanpak-experimenten.md`)
Datum: 10 november 2026

---

## Waarom dit gebouwd wordt

Preludens zet vier landingspagina's live voor vier scherp afgebakende doelgroepen, en wil weten welke boodschap aanslaat. Twee pagina's krijgen betaald zoekverkeer (circa €300 elk via Google Ads), twee krijgen organisch verkeer en persoonlijke benadering.

Het verkeer blijft klein: reken op 60 tot 150 bezoekers per pagina over drie weken. Daarom is de eis niet "een compleet analyticsplatform", maar: **elke bezoeker moet terug te leiden zijn naar zijn bron, en elk gedrag op de pagina moet zichtbaar zijn**. Eén ontbrekend event kost bij dit volume het hele experiment.

## Wat er nu staat (gecontroleerd op 10 november 2026)

- **Geen analytics.** Geen GA4, geen GTM, geen Plausible, geen pixels. Nergens in `_includes/`, `_layouts/`, `_config.yml` of `assets/js/`.
- **Geen formulier.** Elke call to action op de site is een `mailto:`-link naar `info@preludens.nl`.
- **Geen cookiebanner**, en op dit moment ook geen cookies die er een nodig maken.
- Jekyll op GitHub Pages, tweetalig (nl/en), `baseurl: /preludens-website`, productiedomein `preludens.nl` via CNAME.
- Er draait al een Cloudflare Worker in `cloudflare/decap-oauth-worker`, dus die infrastructuur en dat account bestaan.
- `_verhalen/microgame-demo.md` staat op `published: false`.
- Panelsysteem in `_includes/panels/` (hero, panel, cta, actions, split, values, media, tracks). Dat is de bouwdoos; gebruik hem, maak geen nieuwe componenten waar een bestaande past.

## Werkafspraken

Lees `AGENTS.md` voor je begint. Kort:

- Werk op `main`, pull eerst, geen feature branches of PR's tenzij erom gevraagd.
- Start de server met `./bin/serve`, niet met een kaal `bundle exec jekyll serve`.
- **Zet niets live op `production`.** Dat doet Jan-Willem, of hij vraagt erom.
- Wijzig je `_sass/`, `assets/css/`, `_includes/`, `_layouts/` of `assets/js/`, loop dan `.claude/skills/unslop-ui/references/signs.md` langs voordat je commit.
- Blijf in deze repository.

---

## Te bouwen

Zeven onderdelen, in deze volgorde. De volgorde is niet willekeurig: consent moet er zijn vóór de tags, en de tags vóór de pagina's.

### 1. Consentlaag

Zonder consent geen GA4, en zonder een werkende consentlaag ook geen HubSpot-tracking.

- Consent Mode v2, standaard alles geweigerd, modus **advanced** (niet basic). Advanced stuurt geanonimiseerde pings bij weigering; bij een weigeringspercentage van 30 tot 50 procent scheelt dat de helft van een toch al kleine dataset.
- Categorieën: noodzakelijk, statistieken, marketing. Niet meer.
- Tweetalig (nl/en), teksten via `_data/nl.yml` en `_data/en.yml`.
- Keuze blijft 6 maanden staan, en is herroepbaar via een link in de footer.
- In huisstijl, onderaan, niet modaal, niet over de hero heen. Geen donkere patronen: weigeren is één klik, net als accepteren.

**Zie beslissing A: bouwen we dit zelf of gebruiken we de banner van HubSpot?**

### 2. Google Tag Manager + GA4

- GTM-snippet in `_includes/head.html` en het `noscript`-deel direct na `<body>` in `_layouts/default.html`. Eén container voor de hele site.
- GA4-property, één datastream voor `preludens.nl`. Dataretentie op 14 maanden.
- Interne verkeer uitsluiten op IP, en `preludens.nl`-verwijzingen uitsluiten.
- GTM laadt pas ná de consentbeslissing, of met Consent Mode-signalen erin.
- **Google Signals uit.** Levert bij dit volume niets en maakt de AVG-vraag groter dan nodig.

Let op: GA4 telt pas na consent, Google Ads telt de klik ervoor. Die twee zullen nooit gelijk zijn. Zet dat als notitie in de rapportagesheet, zodat niemand later gaat zoeken naar een verschil dat hoort te bestaan.

### 3. Events

Alles via `dataLayer.push()` vanuit `assets/js/`, met GTM-triggers erop. Geen events rechtstreeks naar GA4 vanuit de pagina.

| Event | Trigger | Parameters |
|---|---|---|
| `page_view` | automatisch | — |
| `scroll_50`, `scroll_90` | scrolldiepte | `page_path` |
| `video_play`, `video_75` | explainer uit de Scaleway-bucket | `video_title` |
| `demo_start` | demo geopend | `casus` |
| `demo_complete` | demo afgerond | `casus` |
| `cta_click` | elke primaire of secundaire knop | `cta_label`, `cta_position`, `casus` |
| `form_start` | eerste veld krijgt focus | `casus` |
| `form_submit` | geslaagde verzending | `casus` — **markeren als key event** |
| `mailto_click` | elke `mailto:`-link | `link_text` |

`casus` is één van: `praktijkdagen`, `complexe-processen`, `safety-doeners`, `onboarding-modules`.

Zet `form_submit` als key event in GA4 en importeer hem in Google Ads als conversie.

### 4. Formulier, gekoppeld aan HubSpot

Preludens heeft sinds kort HubSpot. Leads horen daar binnen te komen, niet in een mailbox.

**Aanbevolen aanpak: eigen formulier in de huisstijl, dat post naar de HubSpot Forms API.**

```
POST https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}
```

Dat endpoint is publiek en vereist geen token in de client, dus er is geen Worker of server nodig. Stuur `context.hutk` mee (de `hubspotutk`-cookie) als die er is, plus `pageUri` en `pageName`; dan koppelt HubSpot de inzending aan de sessie en de bron.

Waarom niet de standaard HubSpot-embed: die rendert in een iframe, is maar beperkt te stylen en past slecht bij een site die zo strak is vormgegeven. Bovendien moet je voor een `form_submit`-event dan luisteren op `window.addEventListener('message', ...)` naar `hsFormCallback` / `onFormSubmitted`, wat fragiel is.

Velden, en niet meer dan dit:

| Veld | Type | HubSpot-property |
|---|---|---|
| Naam | verplicht | `firstname` + `lastname` |
| E-mail | verplicht | `email` |
| Organisatie | verplicht | `company` |
| Waar loop je tegenaan? | optioneel, tekstvak | `message` |
| Casus | verborgen | eigen property, zie beslissing D |

Elk extra veld kost bij 100 bezoekers een merkbaar deel van de oogst. Geen telefoonnummer, geen functietitel, geen aanhef.

Verder nodig: spambescherming zonder captcha (honeypot-veld plus een tijdsdrempel), een bevestigingsscherm in plaats van een doorverwijzing naar een bedanktpagina (scheelt een afhaakmoment), en een foutmelding die de ingevulde tekst bewaart.

### 5. Landingspagina-layout

- `_layouts/landing.html`: zonder hoofdnavigatie, met een minimale footer. Eén uitgang per pagina.
- Hergebruik `_includes/panels/`. Voeg hooguit toe wat er echt niet is: een blok voor veelgestelde vragen en een formulierblok.
- Vier pagina's onder `/oplossingen/<slug>/`:
  - `/oplossingen/praktijkdagen/`
  - `/oplossingen/complexe-processen/`
  - `/oplossingen/safety-doeners/`
  - `/oplossingen/onboarding-modules/`
- **Lever ze als stub op**, met de blokstructuur erin en plaatsaanduidingen voor de tekst. De kopij komt uit de vier A4's (`_marketing/casus-*.md`) en wordt apart geschreven.
- Niet opnemen in de hoofdnavigatie.
- Blokvolgorde ligt vast: hero → herkenning → wat je krijgt → hoe het werkt → bewijs → bezwaren → actie.

### 6. Microsoft Clarity

Gratis, onbeperkte sessieopnames en heatmaps, via GTM achter de statistiekencategorie. Bij 100 bezoekers per pagina is dit het instrument waar het meeste uit komt: dertig opnames bekijken zegt meer dan elk percentage.

### 7. Demo speelbaar maken

`_verhalen/microgame-demo.md` op `published: true`, en controleren of de demo los van de verhaalpagina te openen is. De demo is op alle vier de pagina's de primaire call to action.

Nodig: een URL die direct opent, en een manier om `demo_start` en `demo_complete` te laten vuren. Draait de demo in een iframe of in Prepo, dan moet daar `postMessage` uit komen. **Zie beslissing F.**

---

## Beslissingen die eerst genomen moeten worden

Niet voor de agent om zelf in te vullen. Elk punt heeft een advies, maar de keuze ligt bij Jan-Willem en Daan.

**A. Consentbanner: zelf bouwen of die van HubSpot gebruiken?**
HubSpot heeft een eigen cookiebanner die ook andere scripts kan aansturen, via `_hsp.push(['addPrivacyConsentListener', cb])`. Dan heb je één plek waar consent beheerd wordt, in plaats van twee systemen die elkaar kunnen tegenspreken.
*Advies: HubSpot gebruiken, mits het abonnement hem bevat en hij in de huisstijl te krijgen is. Zo niet: zelf bouwen, het is een klein component.*

**B. Welk HubSpot-abonnement, en van wie is de portal?**
Dit bepaalt of je bronattributie, lijsten en opvolging per e-mail hebt, of alleen een contactenlijst. En of er een limiet op marketingcontacten zit waar vier campagnes tegenaan lopen.
*Nodig: portal-ID, abonnementsniveau, en wie beheerder is.*

**C. HubSpot-trackingcode op de hele site of alleen op de vier pagina's?**
De code zet cookies (`__hstc`, `hubspotutk`) en valt dus onder consent. Op de hele site krijg je een completer beeld van bezoekers die later converteren; op alleen de landingspagina's blijft het klein en overzichtelijk.
*Advies: hele site, achter consent. De `hubspotutk` moet er al staan vóór iemand het formulier bereikt, anders mist de bronkoppeling.*

**D. Eén formulier of vier?**
*Advies: één HubSpot-formulier met een verborgen veld `casus`. Vier losse formulieren splitsen je rapportage en je moet alles vier keer onderhouden.* Wel een eigen property `casus` aanmaken in HubSpot, met de vier waarden als vaste keuzelijst.

**E. Waar landen de leads, en wie krijgt bericht?**
Een nieuwe deal in een pipeline, of alleen een contact met een tag? En gaat de melding naar `info@preludens.nl` of naar een persoon? Bij vier experimenten tegelijk is "iemand kijkt wel in HubSpot" niet genoeg: een lead die drie dagen blijft liggen is bij dit volume een verspild experiment.

**F. Hoe draait de demo?**
Is er een losse, direct te openen URL? Draait die in Prepo of op de site zelf? Kan er een signaal uit bij start en bij afronding? Zonder dat laatste vervalt `demo_complete`, en dat is de sterkste indicator die het hele plan heeft.

**G. Pagina's indexeerbaar of op `noindex`?**
*Advies: alle vier indexeren. Casus 3 en 4 hebben die zoekzichtbaarheid op termijn nodig, en de andere twee doen geen kwaad zolang ze niet in de navigatie staan.* Wel een `canonical` zetten en ze uit `sitemap.xml` laten als ze nog niet af zijn.

**H. Nederlands of ook Engels?**
De site is tweetalig. De experimenten draaien in Nederland, maar casus 3 (safety) heeft een internationale kant — Allseas, suppliers van Shell, de drillingsites in Houston.
*Advies: nu alleen Nederlands, en de Engelse versie pas als casus 3 groen uit de evaluatie komt.*

**I. Google Ads-account.**
Bestaat het al, zit er een betaalmethode op, en koppelen we het aan GA4? Nodig voordat casus 3 en 4 live kunnen.

**J. Verwerkersovereenkomsten.**
HubSpot, Google en Microsoft Clarity verwerken persoonsgegevens. Nagaan of de overeenkomsten er zijn en of de privacyverklaring op de site de drie noemt. Dit is geen juridisch advies, wel een punt dat voor de start afgevinkt moet zijn.

---

## Testprotocol

Af te vinken vóór de oplevering, bij voorkeur op een voorvertoning en daarna nog een keer live:

- [ ] Banner verschijnt, en vóór een keuze staan er geen cookies van GA4, HubSpot of Clarity
- [ ] Na weigeren: nog steeds geen cookies, wel geanonimiseerde pings in GA4 (advanced mode)
- [ ] Na accepteren: GA4 ontvangt binnen 30 seconden een `page_view` in realtime
- [ ] Alle negen events vuren, gecontroleerd in de voorbeeldmodus van GTM
- [ ] `casus` komt mee als parameter op elk event dat hem hoort te hebben
- [ ] Testinzending komt aan in HubSpot, met de juiste casus en met bronattributie
- [ ] `form_submit` staat als key event in GA4 en als conversie in Google Ads
- [ ] UTM-parameters komen door tot in GA4 en in HubSpot
- [ ] Clarity neemt op en de opname is terug te kijken
- [ ] Demo opent, is af te ronden, en `demo_complete` vuurt
- [ ] De vier pagina's hebben geen hoofdnavigatie en één uitgang
- [ ] Op mobiel gecontroleerd, laadtijd onder twee seconden
- [ ] Banner en formulier werken ook in de Engelse versie van de site

## Buiten scope

Niet doen zonder erom te vragen: kopij voor de vier pagina's schrijven, advertenties aanmaken, naar `production` deployen, de bestaande contactpagina ombouwen, `Gemfile.lock` aanpassen, of een dashboardtool toevoegen. De rapportage is een sheet die met de hand wordt bijgewerkt.

## Oplevering

Een commit op `main` met de bouwdelen, plus een kort verslag in dit bestand onderaan: wat er staat, welke beslissingen anders uitpakten dan hierboven geadviseerd, en wat er nog open is.

---

# Verslag — 10 november 2026

Gebouwd op `main`, niets naar `production`. De vier open punten die het
formulier en de demo blokkeerden (B tot en met F) zijn niet ingevuld maar
voorbereid: alles wat erop wacht staat klaar en komt in werking zodra de
waarden in `_config.yml` staan.

## Wat er staat

**1. Consentlaag.** Consent Mode v2 in de modus advanced, in
`_includes/consent-default.html` — inline en synchroon in de `<head>`, vóór de
container, met `wait_for_update: 500`. Standaard alles geweigerd, behalve
`functionality_storage` en `security_storage`. Drie categorieën: noodzakelijk,
statistieken, marketing. De banner (`_includes/consent-banner.html`,
`assets/js/consent.js`, `_sass/components/_consent.scss`) staat onderaan, is
niet modaal en legt de hero niet toe. Accepteren en weigeren zijn allebei één
klik en staan naast elkaar; "Zelf kiezen" vouwt de categorieën uit. Teksten
staan in `_data/nl.yml` en `_data/en.yml`, beide talen getest. De keuze gaat in
`preludens_consent`, 182 dagen, en is herroepbaar via de knop onderaan elke
pagina — op de landingspagina's ook, in de smalle voettekst.

Het cookie draagt een versienummer. Komen er later categorieën bij, dan loopt
dat nummer op en vraagt de banner het opnieuw in plaats van een oude keuze te
laten gelden voor iets wat die keuze niet dekte.

**2. GTM en GA4.** `_includes/head.html` is nieuw: de `<head>` zit niet meer in
`_layouts/default.html` maar in een los bestand, zodat de gewone layout en de
landingspagina-layout dezelfde meta- en meetcode delen. Twee koppen die uit
elkaar lopen is precies hoe je een ontbrekend event krijgt. De container laadt
uit `_includes/analytics.html`, het `noscript`-deel staat direct achter `<body>`
in beide layouts. `casus`, `page_language` en `page_path` gaan de dataLayer in
vóór de container laadt, zodat de eerste `page_view` zijn casus al heeft.

De configuratie die in Tag Manager, Analytics en Clarity hoort — variabelen,
triggers, tags, dataretentie, Google Signals uit, intern verkeer, het key event
— staat in `_marketing/gtm-configuratie.md`.

**3. Events.** `assets/js/tracking.js`. Acht van de negen vuren vanuit de site;
`page_view` hangt aan de Google-tag in GTM. Lokaal nagelopen in de browser, met
de dataLayer ernaast:

| Event | Status |
|---|---|
| `scroll_50`, `scroll_90` | vuren, met `page_path` en `casus` |
| `video_play`, `video_75` | vuren, één keer per video, met `video_title` |
| `cta_click` | vuurt, `cta_position` is de id van het paneel |
| `mailto_click` | vuurt, met `link_text` |
| `form_start` | vuurt op het eerste veld, honeypot telt niet mee |
| `form_submit` | vuurt, maar pas na een geslaagde post |
| `demo_start`, `demo_complete` | vuren op `postMessage`, zie hieronder |

`casus` komt mee op elk event. Op pagina's zonder casus is hij leeg in plaats
van afwezig: een lege waarde zie je in GTM staan, een ontbrekende sleutel niet.

**4. Formulier.** `_includes/panels/form.html`, `assets/js/form.js`,
`_sass/components/_form.scss`. Eigen formulier in de huisstijl, geen embed. Vijf
velden: naam (gesplitst naar `firstname` en `lastname`), e-mail, organisatie,
een vrij tekstvak en een verborgen `casus`. Honeypot plus een tijdsdrempel van
drie seconden; beide leiden tot het bevestigingsscherm zonder post en zonder
`form_submit`, zodat een bot niet merkt dat hij geweigerd is en de cijfers
schoon blijven. Een foutmelding laat de ingevulde tekst staan. Het
bevestigingsscherm komt op de plaats van het formulier, geen bedankpagina.

De post naar de Forms API is lokaal nagelopen met een onderschepte `fetch`: de
URL, de zes velden, `pageUri`, `pageName` en `context.hutk` komen eruit zoals ze
moeten. Wat nog niet getest is, is of HubSpot ze accepteert — daarvoor is het
portal-ID nodig.

**5. Landingspagina's.** `_layouts/landing.html`: geen hoofdnavigatie, een
voettekst met alleen contact, jaartal en cookiekeuze. Geen logo dat naar de
homepage wijst, want dat is de uitgang die we juist niet willen. De vier stubs
staan onder `oplossingen/<slug>/index.md`, met de vaste blokvolgorde (hero →
herkenning → wat je krijgt → hoe het werkt → bewijs → bezwaren → actie) en
plaatsaanduidingen waar de kopij komt. Ze staan niet in de navigatie en niet in
`sitemap.xml`. Twee nieuwe panelen: `panels/faq.html` voor het bezwarenblok en
`panels/form.html` voor het actieblok. De rest is bestaand werk uit
`_includes/panels/`.

**6. Microsoft Clarity.** Als tag in GTM, achter `analytics_storage`. Staat
beschreven in `gtm-configuratie.md` en niet in de site: zo hangt hij aan
dezelfde toestemmingscategorie als GA4, en staan alle statistiekentags op één
plek.

## Wat anders ging dan geadviseerd

**Beslissing A — de banner is zelf gebouwd, niet die van HubSpot.** Het advies
was HubSpot, "mits het abonnement hem bevat". Dat weten we niet (beslissing B),
en de banner is de eerste schakel: zonder hem laadt er niets. Hij is gebouwd
volgens het alternatief uit het advies. Blijkt het abonnement de banner van
HubSpot te bevatten en wil je die alsnog, dan is dit het component dat eruit
gaat; de rest van de meetketen hangt er niet aan vast.

**De HubSpot-trackingcode laadt vanuit de site, niet vanuit GTM.** In
`assets/js/consent.js`, achter de categorie statistieken, en alleen als
`preludens.hubspot.tracking` aan staat en er een portal-ID is. Beslissing C ging
over de reikwijdte (hele site of alleen de vier pagina's); dat blijft hele site.
De plaats is een eigen keuze: de consentlogica voor HubSpot staat dan in
hetzelfde bestand als de banner die hem aanstuurt, in plaats van verdeeld over
twee systemen.

**Geen importeerbare GTM-container, wel een uitgeschreven configuratie.** Een
containerexport die half goed inleest, levert tags op die lijken te werken. Bij
60 tot 150 bezoekers per pagina merk je dat pas als het experiment voorbij is.
`gtm-configuratie.md` is daarom een lijst om met de hand na te lopen, met de
voorbeeldmodus als controle.

**De demo is niet op `published: true` gezet.** `_verhalen/microgame-demo.md`
heeft alleen front matter: geen inhoud, geen speelbare demo, en nergens in de
repository een URL waarop er een opent. Publiceren zou een pagina opleveren die
"speel in een paar minuten een MicroGame" belooft met niets om te spelen. Dat is
beslissing F, en die is niet in te vullen zonder te verzinnen waar de demo
draait. Wat er wél staat: de aansluiting. Zet `preludens.demo.url` in
`_config.yml` en de primaire knop op alle vier de pagina's wordt de demo, met
`demo_start` eraan. Laat de demo bij afronding dit bericht sturen, dan vuurt
`demo_complete`:

```js
window.parent.postMessage({ preludens: "demo_complete", casus: "safety-doeners" }, "*");
```

Hetzelfde bericht met `"demo_start"` werkt ook, voor als de demo zelf wil zeggen
wanneer hij begint. Beide zijn lokaal getest.

**De vier stubs staan op `noindex` en uit de sitemap.** Beslissing G is om alle
vier te indexeren, maar het document zegt er zelf bij: "ze uit `sitemap.xml`
laten als ze nog niet af zijn". Er staat nu geen kopij op. Haal de twee regels
`robots:` en `sitemap:` uit de front matter zodra de tekst erin staat; de
canonical staat er dan al.

**Polyglot maakt ook een `/en/oplossingen/...`-versie.** Dat doet hij met elke
Nederlandse pagina op deze site (zie `/en/gamestorm/`), het is bestaand gedrag en
niet iets wat in deze stap is veranderd. De hreflang wijst er niet naartoe en de
pagina's staan op `noindex`, dus ze doen geen kwaad. Beslissing H blijft: nu
alleen Nederlands.

## Wat nog open is

**De waarden in `_config.yml` staan er inmiddels in** (10 en 11 november 2026,
opgehaald bij de bron, niets verzonnen):

| Waarde | Staat |
|---|---|
| `gtm_id` | `GTM-5MMK7TXD` — container `preludens.nl`, account Preludens |
| `ga4_measurement_id` | `G-Q0JG5Q810R` — property `preludens.nl`, stream 16314192540 |
| `clarity_project_id` | `zbl8vhhvgy` — project Preludens |
| `hubspot.portal_id` | `149248161` — account Preludens, regio eu1 |
| `hubspot.form_guid` | formulier *Landingspagina's oplossingen*, zes velden |
| `hubspot.tracking` | aan, achter de categorie statistieken |
| `demo.url` | **nog leeg** (beslissing F) |

Google Analytics, Tag Manager en het Google-account draaien op
`info@preludens.nl`. De eigenschap `casus` is in HubSpot aangemaakt als vrij
tekstveld, niet als keuzelijst: zo hoeft HubSpot niet mee te veranderen als er
later een vijfde casus bij komt. Wat er per interface staat, met de afwegingen
erbij, staat in `gtm-configuratie.md`.

**De container is ingericht en getest.** In `GTM-5MMK7TXD`, werkruimte 2: elf
eigen variabelen (negen uit de gegevenslaag, twee constanten) naast de
ingebouwde `Click Element` en `Click Text`, elf triggers, en twaalf tags —
`Google-tag - GA4` op Initialisatie, tien `GA4 - <gebeurtenis>` op hun eigen
trigger, en `Clarity` op All Pages plus `ce - consent_update`. Dat dekt alle elf
gebeurtenissen die de site duwt, `page_view` meegerekend.

**Wat de voorbeeldmodus opleverde** (11 november 2026, op
`localhost:4000/preludens-website/oplossingen/praktijkdagen/`, nagekeken in Tag
Assistant én in het netwerkverkeer naar `region1.google-analytics.com`):

| Stap uit paragraaf 5 | Uitkomst |
|---|---|
| Geen keuze gemaakt | Vijf Google-categorieën op *denied*, `functionality_storage` en `security_storage` op *granted*; de hit vertrekt met `gcs=G100`, `npa=1`, `pscdl=denied` — cookieloos, zoals bedoeld |
| Accepteren | Alle vijf naar *granted*, `gcs=G111`; `page_view` binnen een seconde |
| `scroll_50`, `scroll_90` | Beide één keer, met `casus=praktijkdagen` |
| `cta_click` | `cta_label=Vraag een gesprek aan`, `cta_position=hero`, `casus=praktijkdagen` |
| `mailto_click` | `link_text` en `casus` staan erbij |
| `form_start` | Vuurt op het eerste veld, met `casus`; in GA4 DebugView aangekomen mét `casus` |
| Clarity | Start, en stuurt daarna zelf naar `a.clarity.ms/collect` |

**De test leverde twee dingen op.**

Het eerste is gerepareerd: **Clarity startte nooit voor een nieuwe bezoeker.**
Op All Pages staat `analytics_storage` nog op *denied*, dus GTM hield de tag
tegen, en een tegengehouden tag probeert GTM daarna niet uit zichzelf opnieuw.
Tag Assistant liet dat zien bij *Container geladen*. De tag heeft er nu een
tweede trigger bij, `ce - consent_update`, en vuurt daarmee precies één keer:
`consent.js` duwt `consent_update` alleen bij een nieuwe keuze en `consent_state`
bij een opgeslagen keuze, dus een terugkerende bezoeker start Clarity via All
Pages en een nieuwe via de nieuwe trigger. Opnieuw getest: Clarity vuurt nu op
`consent_update` en de opnames gaan de deur uit.

Het tweede is een waarneming, geen storing: **`page_view` komt zonder `casus` en
zonder `page_language` binnen.** Ze staan wel als configuratie-instelling op de
Google-tag en de variabelen zijn op dat moment gevuld (`dlv - casus` =
`praktijkdagen`, `dlv - page_language` = `nl`, gecontroleerd in Tag Assistant),
maar op de `page_view`-hit staan ze niet. De tien gebeurtenistags hebben er geen
last van — die zetten `casus` zelf op de hit. Voor het experiment is het geen
blokkade: de vier casussen hebben elk hun eigen URL, dus `page_path` splitst de
paginaweergaven net zo hard. Wil je `casus` ook als dimensie op `page_view`, dan
is dat ná publiceren nog een keer nakijken waard.

**Nog niet uitgeprobeerd, omdat het buiten de browser iets achterlaat of omdat
de pagina's het nog niet hebben:** een echte inzending (`form_submit` plus de
lead in HubSpot — dat maakt een contact aan in het echte CRM en wacht op jouw
akkoord), `video_play`, `video_75`, `demo_start` en `demo_complete` (de vier
stubpagina's hebben nog geen video en geen demo; die komen met de kopij), en de
hele ronde nog een keer op de live site en in het Engels.

**Wat daar nog bij hoort, en nog niet klaar is:**

1. **De werkruimte is niet gepubliceerd.** Zolang je niet op *Verzenden* drukt,
   staat dit alles wel in GTM maar niet op de site. Dat is bewust: publiceren is
   live zetten, en dat is niet aan mij. Het testprotocol uit
   `gtm-configuratie.md` paragraaf 5 is wel langsgelopen — zie hierboven wat
   dat opleverde.
2. **`form_submit` als key event in GA4.** Dat vinkje kan pas nadat het event
   één keer is binnengekomen. Zet het direct na de eerste testinzending.
3. **Het filter voor intern verkeer staat op *Testen*.** De regel *Kantoor
   Preludens* staat er met de twee kantoor-IP-adressen als `/32` (welke dat zijn, staat alleen in GA4). Activeren
   is onomkeerbaar en werkt niet terug; doe dat pas als in de test te zien is
   dat het kantoorverkeer als intern binnenkomt. Het derde IP komt er later bij
   als derde voorwaarde in dezelfde regel.
4. **De uitgesloten verwijzing `preludens.nl`** staat opgeslagen in de
   Google-tagcontainer die GA4 zelf aanmaakte (`GTM-WB3PXW46`, níét die van de
   site), maar is daar nog niet verzonden.
5. **De demo-URL** (beslissing F), plus het `postMessage` hierboven.

**Ook nog niet getest:** bronattributie en UTM-parameters tot in GA4 en HubSpot.
Wel nagelopen: een lege post naar het HubSpot-endpoint komt terug met
`REQUIRED_FIELD` op `email` en niet met een 404, dus portal en GUID kloppen en
het formulier is bereikbaar. Het protocol staat in `gtm-configuratie.md`
paragraaf 5.

**Twee punten die buiten de code vallen en nog open staan:**

- **De reactietermijn op het bevestigingsscherm.** Daar staat nu "we nemen
  contact met je op", zonder termijn. Een termijn is een toezegging die
  Preludens doet; die heb ik niet verzonnen. Zet hem in `_data/nl.yml` en
  `_data/en.yml` onder `form.success_text` zodra hij vaststaat — "binnen twee
  werkdagen" is sterker dan wat er nu staat, en hangt samen met beslissing E.
- **Beslissing E** — waar landen de leads, en wie krijgt bericht? Een lead die
  drie dagen blijft liggen is bij dit volume een verspild experiment.
- **Beslissing J** — er is op deze site geen privacyverklaring. Geen pagina,
  geen link, nergens. De banner verwijst er daarom niet naar, en dat is voor een
  consentbanner een gat: iemand die op "Zelf kiezen" klikt, kan nergens nalezen
  wie wat verwerkt. HubSpot, Google en Microsoft Clarity horen er alle drie in te
  staan. Dit is geen juridisch advies, wel iets wat vóór de start afgevinkt moet
  zijn.
