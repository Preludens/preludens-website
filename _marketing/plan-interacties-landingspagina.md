# Plan: de vragen en het dilemma op de landingspagina's

Voor: Jan-Willem (en wie het bouwt)
Datum: 24 november 2026
Status: gebouwd op 24 november 2026 (stap 1 tot en met 7), zie ronde 7 in `landingspagina-varianten.md`. Nog open: stap 8 (GTM) en de losse HubSpot-velden. Gaat over de zes pagina's onder `/oplossingen/` die `_includes/varianten/pagina-d.html` gebruiken.

Aanleiding: de rolkeuze ("Waar sta jij?") bevalt, want die brengt je naar wat voor jou relevant is. De vraag per rolblok en het dilemma in het probeerblok voelen minimaal. Dit plan trekt de werking van de rolkeuze door naar die twee.

---

## 1. Diagnose

### Wat de rolkeuze goed doet

1. **De keuze heeft een gevolg dat je ziet.** De pagina beweegt naar jouw blok.
2. **Waar je aankomt, staat dat je gekozen hebt** en wat er nu komt ("Jij geeft de workshop. Hieronder: wat AI Wijzer in je zaal doet.").
3. **De knop is een kaart**: groot, met beeld, een label en een tweede regel die zegt wie bedoeld is.
4. **Het kost niets**: je zegt alleen wie je bent. De bezoeker krijgt meer dan hij geeft.

### De vraag per rolblok (`rollen[].vraag`)

| | Wat er nu is | Waarom het minimaal voelt |
|---|---|---|
| Interactie | Kleine knoppen naast elkaar die afbreken waar het uitkomt; één zin eronder met een gouden kantlijn. | Na de klik gebeurt er verder niets. Geen vervolg, niets anders op de pagina reageert, het antwoord is bij het formulier vergeten. Een doodlopend pad, vlak na een keuze die je juist ergens bracht. |
| Vorm | Knop = alleen een label. Reactie = platte alinea. | Het ziet eruit als een poll. De knoppen zijn kleiner dan elke andere knop op de pagina, terwijl ze een inhoudelijke keuze dragen. |
| Content | Reacties beginnen bijna allemaal met "Dan …" en herhalen het antwoord ("Dan blijft die training staan."). | De bezoeker geeft ons informatie (welk systeem, hoeveel talen, welke aanleiding) en krijgt er één zin voor terug. Het antwoord op zijn eigenlijke vraag staat verderop in de FAQ, maar de reactie wijst er niet heen. |
| Voor ons | `question_answer` in de dataLayer. | Het antwoord kwalificeert de lead, maar komt niet mee in het formulier en dus niet in HubSpot. |

Uit de reviews: de vragen zelf zijn goed gekozen ("slim: ze moet even nadenken", "een vraag die deze persona serieus neemt"). Het probleem zit in wat erna komt. Bij safety is "Een register of toegangssysteem" het antwoord dat de persona het hardst nodig heeft, en juist daar zegt de reactie alleen "dat zoeken we graag met je uit".

### Het dilemma (`probeer.type: dilemma`)

| | Wat er nu is | Waarom het minimaal voelt |
|---|---|---|
| Interactie | Dezelfde kleine knoppen, maar met labels van een hele zin: vier knoppen van ongelijke breedte die rommelig afbreken. Eén alinea reactie. | Het blok heet "Probeer het zelf" en belooft hoe een keuze in een MicroGame voelt. In een MicroGame zie je wat er na je keuze gebeurt; hier lees je een toelichting. |
| Content | De reactie is uitleg. Wat de keuze teweegbrengt, staat er niet. | Het sterkste verkoopargument van de pagina ("jij ziet per situatie hoe ze kozen") wordt hier niet getoond, terwijl de CO-melder dat op de andere pagina's wel doet met het groepsoverzicht. |
| Vervolg | De demoknop staat eronder, los van het antwoord. | Twee reacties verwijzen naar "missie 2 van de demo", maar je kunt er niet op door. |

---

## 2. Doel per interactie

| Interactie | Wat de bezoeker eraan heeft | Wat wij ervan weten |
|---|---|---|
| Rolkeuze (blijft) | Naar het deel voor zijn rol. | `path_select`; rol mee in het formulier. |
| Vraag per rolblok | **Herkenning** (zijn situatie staat ertussen), **een antwoord op maat** (kop + uitleg), en **één volgende stap** naar de plek waar zijn vervolgvraag beantwoord wordt. | Kwalificatie: aanleiding, tools, moment, systeem, talen. `question_answer`, of de stap gevolgd wordt (`question_step`), en het antwoord als regel bij het bericht in HubSpot. |
| Dilemma | **Iets leren** en ervaren hoe een keuze met gevolg voelt, en **zien wat een beheerder of trainer daarna ziet**. Dan door naar de demo. | Eerste keuze en of iemand meer keuzes probeert (`answer_order`), en of het dilemma de demostart voorafgaat. |

Daans route (formulier of Bookings, met de HubSpot-velden herkomst en route): het formulier krijgt rol en antwoorden mee. Bookings opent in een nieuw tabblad bij Microsoft en neemt niets mee; daar blijft het bij de dataLayer.

---

## 3. Ontwerp

Eén principe, drie keer toegepast: **een keuze brengt je ergens, en daar staat dat je gekozen hebt.**

### 3.1 De vraag wordt een wegwijzer

Bij een klik op een antwoord:

1. De knop staat op gekozen (`aria-pressed`), de andere blijven klikbaar maar worden rustiger.
2. Eronder verschijnt de reactie, nu in drie delen:
   - **kop**: wat dit antwoord betekent, in één regel;
   - **uitleg**: de bestaande `reactie`, hooguit twee zinnen;
   - **stap**: één link naar de plek op de pagina die bij dit antwoord hoort. Bijvoorbeeld "Lees hoe het in jullie LMS komt" → de FAQ-vraag over het LMS.
3. Klik op de stap: de pagina scrolt erheen. Is het doel een FAQ-vraag, dan klapt die open en krijgt de `summary` de focus. Is het een blok (`#probeer`, `#hoe-het-werkt`, `#afspraak`, `#actie`), dan krijgt de kop de focus, zoals bij de rolkeuze.
4. Het antwoord wordt onthouden (in het geheugen en in `sessionStorage`) en werkt door in het formulier, zie 3.3.

Er wordt niet automatisch gescrold bij het antwoord zelf. Alleen de stap scrolt, en die klikt de bezoeker zelf.

### 3.2 Het dilemma laat het gevolg zien

Bij een klik op een keuze:

1. De keuzes staan onder elkaar, over de volle breedte (lange labels).
2. De reactie heeft drie delen:
   - **kop**: de kern in een paar woorden ("Geen naam, wel één persoon");
   - **gevolg**: wat er daarna gebeurt, verteld als in het spel ("De assistent geeft je een gespreksplan. De beschrijving van je medewerker staat nu bij een AI-dienst.");
   - **uitleg**: de bestaande `reactie`.
3. **Het groepsbeeld** (nieuw, optioneel): in elke keuzeknop verschijnt rechts hoeveel van een voorbeeldgroep dit koos ("5 van 12"), met een dunne balk; de keuze van de bezoeker telt mee en is goud. Eronder een kop en één zin advies, plus de regel "Voorbeeldgegevens: elf medewerkers en jij." Dit is hetzelfde als het groepsoverzicht na de CO-melder, en toont wat de pagina belooft: per situatie zien hoe de groep koos.
4. Een regel "Kies gerust een andere: elke keuze heeft een eigen gevolg." Een tweede klik wisselt de reactie en verplaatst de gouden balk.
5. De demoknop staat er al direct onder; die blijft de vervolgstap. Een eigen `stap` per keuze kan, maar is hier niet nodig.

**Hoe andere bezoekers kozen** tonen we niet. Er is geen backend, en bij 60 tot 150 bezoekers per pagina zijn echte cijfers de eerste maanden te dun. De voorbeeldgroep is eerlijk zolang het erbij staat, en er is een precedent (CO-melder). Later kan `groep.aantallen` met echte GA4-cijfers gevuld worden; dan verandert alleen de metaregel ("Zo kozen 84 bezoekers van deze pagina, peildatum …").

### 3.3 Het antwoord werkt door in het formulier

- Boven het berichtveld staat, zodra er iets gekozen is, één regel: "We sturen mee wat je koos: *Rol: ik organiseer het leerprogramma · Aanleiding: we rollen AI-tools uit*" met een knop "Niet meesturen".
- De hint onder het berichtveld wisselt naar de tekst die bij het laatste antwoord hoort (`formulier`), bijvoorbeeld "Noem de tools die jullie uitrollen en wanneer de uitrol begint." Zonder antwoord blijft de standaardhint.
- Het berichtveld zelf vullen we niet vooraf in: een tekst die iemand niet schreef, wekt wantrouwen en moet hij eerst weghalen.
- Bij verzenden gaat de regel mee, zie hoofdstuk 6.

### 3.4 Nieuwe yml-sleutels

Alles is optioneel. Een bestand zonder nieuwe sleutels rendert zoals nu, alleen met de nieuwe opmaak.

```yaml
rollen:
  - vraag:
      id: ai-aanleiding
      vraag: "Wat is bij jullie de aanleiding?"
      veld: "Aanleiding"            # nieuw: naam van dit antwoord in het formulier en in HubSpot; standaard de id
      antwoorden:
        - waarde: tools
          label: "We rollen AI-tools uit"
          sub: "Copilot, ChatGPT of een eigen assistent"   # nieuw: tweede regel op de knop
          kop: "Dan gebruiken mensen ze, geoefend of niet"  # nieuw: kop van de reactie
          reactie: "Een module bij de uitrol laat …"        # bestaand
          stap: { label: "Lees hoe het in jullie LMS komt", href: "#faq-lms" }   # nieuw: één vervolgstap
          formulier: "Noem de tools die jullie uitrollen en wanneer de uitrol begint."  # nieuw: hint onder het berichtveld

probeer:
  dilemma:
    id: dilemma-ai-gesprek
    veld: "Dilemma"
    antwoorden:
      - waarde: versturen
        label: "Ik verstuur het, er staat geen naam in"
        kop: "Geen naam, wel één persoon"     # nieuw
        gevolg: "De assistent geeft je …"     # nieuw: wat er na de keuze gebeurt
        reactie: "Functie, vestiging en …"    # bestaand
        stap: { label: "…", href: "…" }       # nieuw, zelden nodig
    groep:                                    # nieuw: het groepsbeeld; weglaten = geen groepsbeeld
      titel: "Wat jij daarna ziet"
      tekst: "Zo kiest een voorbeeldgroep van elf medewerkers, en jij. In Prepo zie je dit per situatie voor jullie eigen medewerkers."
      aantallen: { versturen: 5, algemeen: 3, interne-tool: 2, navragen: 1 }
      advies: "De grootste groep verstuurt het bericht. Daar gaat je volgende uitleg over: iemand is ook zonder naam herkenbaar."
      meta: "Voorbeeldgegevens: elf medewerkers en jij."

vragen:
  items:
    - { id: lms, vraag: "Past het in ons LMS?", antwoord: "…" }   # nieuw: id, wordt id="faq-lms" op het <details>
```

Regels voor de inhoud:

- `stap.href` is een anker op dezelfde pagina: `#faq-<id>`, `#probeer`, `#hoe-het-werkt`, `#bewijs`, `#afspraak` of `#actie`. Geen externe links.
- Hooguit één stap per antwoord.
- `groep.advies` moet kloppen bij elke keuze van de bezoeker. Kies de aantallen zo dat de grootste groep de grootste blijft als er één bij een andere keuze komt, en noem geen getal in het advies.

---

## 4. Visueel

Uitgangspunt: de bestaande kaart (`.lv-question`, wit, Preludens-snede, gouden streep van 3px bovenaan) blijft. Alleen tokens uit `assets/css/main.scss`; geen nieuwe kleuren.

**Antwoordknoppen**

- Van een rij losse knopjes naar een raster van keuzerijen. Vraag: `grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr))`, dus twee kolommen op desktop en één op mobiel. Dilemma: altijd één kolom.
- Elke rij: links uitgelijnd, `min-height: 3.25rem`, padding `var(--space-sm) var(--space-md)`, label in `--font-display` 600, daaronder `sub` in `--font-body` 0.9375rem `--color-ink-soft`.
- Vorm zoals nu: kleine snede (`--lv-cut-sm`), donkere rand van 2px via de achtergrond, witte vulling in `::before`. Hover: vulling `--color-mist-blue`. Gekozen: vulling `--color-ink`, tekst `--color-cloud-white`.
- Na een antwoord (`.is-answered`): de rand van de niet-gekozen rijen gaat naar `--color-ink-soft`. Ze blijven volledig leesbaar en klikbaar.
- Geen iconen, geen letters A/B/C, geen vinkje. De gevulde rij is het signaal.

**Reactie**

- De gouden kantlijn vervalt. Goud zit al in de streep boven de kaart; twee keer goud in één kaart maakt het accent zwakker.
- De reactie is een vlak in `--color-mist-blue` met de kleine snede, `margin-top: var(--space-sm)`, padding `var(--space-sm) var(--space-md)`.
- Kop: `--font-display` 600, 1.0625rem, `--color-ink`. Uitleg: body, `--color-ink`.
- Gevolg (dilemma): staat boven de uitleg, met een klein label "Wat er gebeurt" in `--font-display` 0.875rem `--color-ink-soft`, gewone letters, geen kapitalen.
- Stap: een tekstlink in `--font-display` 600, onderstreept (`text-underline-offset: 3px`), `--color-ink`. Geen knop: de pagina heeft al een primaire en een secundaire knop per blok.

**Groepsbeeld in het dilemma**

- In elke keuzerij rechts het aantal ("5 van 12", `font-variant-numeric: tabular-nums`, 0.875rem) en onderin een balk van 3px, breedte via een CSS-variabele (`--share`). Balk neutraal (`--color-ink-soft` op 35%; in de gekozen rij `--color-preludens-gold`). Eén accentkleur, één reeks.
- Daaronder kop (`h3`), tekst, advies en metaregel, in dezelfde opmaak als `.lv-melder__group`, maar op de witte kaart.

**Beweging**

- De reactie komt binnen met `opacity` en `translateY(4px)`, 200ms, `ease-out`. De balken groeien met `transform: scaleX`, 300ms. Geen hoogte-animatie, geen veer, geen `transition: all`.
- `prefers-reduced-motion: reduce`: geen overgang, en scrollen met `behavior: "auto"` (bestaat al in `scrollToEl`).

**Mobiel (375px)**

- Eén kolom, kaartpadding `var(--space-sm)`, snede van de kaart 16px.
- Het aantal in het groepsbeeld komt onder het label in plaats van rechts als het label over meer dan twee regels loopt (flex-wrap).
- Valt de reactie na een klik onder de rand van het scherm, dan `reply.scrollIntoView({ block: "nearest" })`. Verder scrolt er niets vanzelf.

**Toegankelijkheid**

- Antwoorden blijven echte `<button type="button">` met `aria-pressed`, in een `role="group"` met `aria-labelledby` op de vraag.
- De reactie blijft een `aria-live="polite"`-gebied; alle reacties staan in de HTML en wisselen op `hidden`.
- De focus blijft op de gekozen knop. De stap staat in de DOM direct na de knoppen, dus één Tab verder.
- Stap naar een FAQ-vraag: `details.open = true`, scrollen, focus op de `summary`.
- Groepsbeeld: het aantal staat als tekst in de knop ("5 van 12 kozen dit" voor schermlezers via `.sr-only`), de balk is `aria-hidden`.
- Focusring: `focus-ring-inset(3px)` zoals op de andere geknipte knoppen.
- Raakvlak minstens 44px hoog (nu 2.75rem, wordt 3.25rem).
- Zonder JavaScript: de kaart krijgt pas via JS de klasse `is-ready`. Zonder die klasse toont CSS alle reacties onder elkaar, elk met het label van het antwoord erboven, en verbergt het de knoppen.

**Nagelopen tegen `signs.md`:** geen gloed, geen verloop, geen pillen, geen emoji of iconen, geen kapitalen met spatiëring, geen `hover:scale`, één accent per kaart, getallen in één notatie, geen punt achter knoplabels.

---

## 5. Content per pagina

Schrijfregels voor alle zes:

- **Kop** zegt wat het antwoord betekent. Niet het antwoord herhalen.
- **Uitleg** is hooguit twee zinnen: wat wij dan doen, of wat het voor hen inhoudt.
- **Stap** begint met een werkwoord en noemt de bestemming: "Lees …", "Ga naar …", "Bespreek …".
- **Gevolg** vertelt wat er gebeurt, in de tegenwoordige tijd, zonder oordeel. Het oordeel staat in de kop.
- Niet elke reactie met "Dan" beginnen; wissel af.
- De claimgrenzen uit de yml-commentaren blijven: geen compliancebelofte, geen AI Act, het beleid schrijven wij niet, Northfield is fictief, het dilemma is een voorbeeld, geen verzonnen resultaten, geen prijzen behalve de bestaande plekhouder.

### 5.1 ai-leerprogramma (uitgeschreven)

FAQ-id's: `catalogus`, `lms`, `eigen-beleid`, `goedkeuren`, `compliance`, `zelf-maken`, `voor-wie`, `doorlooptijd`, `begin` (in de volgorde van het bestand).

**Vraag `ai-aanleiding`**: "Wat is bij jullie de aanleiding?" · veld: Aanleiding

| waarde | label / sub | kop | reactie | stap | formulier |
|---|---|---|---|---|---|
| `tools` | We rollen AI-tools uit / *Een assistent in de kantoorsoftware of een eigen chatbot* | Mensen gaan ze gebruiken, geoefend of niet | Een module bij de uitrol laat medewerkers oefenen met wat er in die tools wel en niet mag. Hij staat in hetzelfde leerplatform als de rest van de uitrol. | Lees hoe het in jullie LMS komt → `#faq-lms` | Noem de tools die jullie uitrollen en wanneer de uitrol begint. |
| `richtlijnen` | Er zijn net AI-richtlijnen / *Ze staan op papier of op intranet* | Er staat wat mag. De vraag is wat mensen ermee doen | In een versie voor jullie staat bij elke keuze wat jullie richtlijnen zeggen. Jullie leveren ze aan; het beleid zelf schrijven wij niet. | Lees hoe dat met jullie eigen beleid gaat → `#faq-eigen-beleid` | Vertel sinds wanneer de richtlijnen er zijn en voor wie ze gelden. |
| `training` | Een bestaande training moet praktischer / *Een e-learning, workshop of catalogus* | Die training blijft staan | De MicroGame komt erbij als oefening, in hetzelfde leerplatform. De training legt uit; in de module kiezen medewerkers zelf, in situaties uit hun werk. | Lees wat het toevoegt aan een catalogus → `#faq-catalogus` | Vertel welke training er nu is en wat er praktischer aan moet. |
| `orienteren` (nieuw) | We oriënteren ons nog / *Er is nog geen concrete aanleiding* | Begin met de demo | Tien opdrachten bij het fictieve Northfield laten zien hoe oefenen eruitziet. Daarna kun je beter inschatten of het in jullie programma past. | Ga naar de demo → `#probeer` | Vertel wat je zou willen weten voordat je verder kijkt. |

**Vraag `ai-tools`**: "Welke AI-tools mogen medewerkers bij jullie gebruiken?" · veld: AI-tools

| waarde | label / sub | kop | reactie | stap | formulier |
|---|---|---|---|---|---|
| `een-tool` | Eén aangewezen tool / *De rest is niet toegestaan* | De module gaat over die ene tool | Wat erin mag, wat niet, en wanneer iemand moet navragen: in situaties uit jullie werk. Jullie toetsen elke situatie voordat een medewerker hem ziet. | Lees wie de inhoud goedkeurt → `#faq-goedkeuren` | Noem de tool, en de afspraak waar medewerkers het meest over twijfelen. |
| `meerdere` | Meerdere, per taak verschillend / *Welke tool hangt af van het werk* | De juiste tool kiezen is zelf een oefening | Welke tool voor welke taak, en wat er in welke mag: dat wordt een situatie in de module. | Lees hoe dat met jullie eigen beleid gaat → `#faq-eigen-beleid` | Vertel welke tools er zijn en waar medewerkers ze door elkaar halen. |
| `onbeslist` | Dat is nog niet besloten / *Er wordt aan gewerkt* | Dat besluit is de eerste stap, en het ligt bij jullie | Het beleid schrijven wij niet. Is het er, dan maken wij het speelbaar. Tot die tijd laat de demo zien hoe dat eruitziet. | Lees voor wie dit nu al past → `#faq-voor-wie` | Vertel wanneer jullie het besluit verwachten. |

**Dilemma `dilemma-ai-gesprek`** · veld: Dilemma. Situatie en vraag blijven.

| waarde | label | kop | gevolg | reactie |
|---|---|---|---|---|
| `versturen` | Ik verstuur het, er staat geen naam in | Geen naam, wel één persoon | De assistent geeft je een bruikbaar gespreksplan. De beschrijving van je medewerker, met zijn ziekte erbij, staat nu bij een AI-dienst. | Functie, vestiging en omstandigheden wijzen samen precies één persoon aan. In de demo oefen je dit in missie&nbsp;2. |
| `algemeen` | Ik haal vestiging en ziekte eruit en vraag algemeen advies | Minder gedeeld, toch een antwoord | Je vraagt hoe je een gesprek voert met iemand die terug is na een lange afwezigheid. Het advies is even bruikbaar. | Voor gespreksadvies heeft de assistent die details meestal niet nodig. Of dit bij jullie de bedoeling is, hangt af van de tool en van jullie afspraken. |
| `interne-tool` | Ik gebruik de AI-tool die we intern mogen gebruiken | De goede tool. Dan de tweede vraag | Je opent de assistent die jullie mogen gebruiken en typt hetzelfde bericht. | Mag informatie over iemands gezondheid in die tool? In een versie voor jullie staat hier wat jullie afspraken daarover zeggen. |
| `navragen` | Ik vraag het eerst na bij HR of privacy | Het kost tijd, en soms is het de afspraak | HR antwoordt aan het eind van de middag. Je gesprek is morgenochtend. | Een medewerker moet weten wanneer navragen nodig is, en bij wie. Ook dat kun je oefenen. |

Groep: zoals in het schema in 3.4 (5, 3, 2, 1). Regel onder de reactie: "Kies gerust een andere: elke keuze heeft een eigen gevolg." De `claim` onder het blok blijft.

### 5.2 ai-trainers (uitgeschreven)

FAQ-id's: `eigen-workshop`, `mentimeter`, `moment`, `afnemen`, `kosten`, `snelheid`, `wie-betaalt`, `op-maat`, `groep-zien`, `laptop`, `begin`.

**Vraag `trainer-moment`**: "Waar in je programma zou je het inzetten?" · veld: Moment

| waarde | label / sub | kop | reactie | stap | formulier |
|---|---|---|---|---|---|
| `vooraf` | Als voorbereiding / *Deelnemers spelen vóór de sessie* | Je weet vóór de sessie waar de groep staat | Speelt de groep via een eigen link in Prepo, dan zie je per situatie hoe ze kozen. Je begint je uitleg waar het misging. | Lees wat je van de groep ziet → `#faq-groep-zien` | Noem de datum van je sessie en de grootte van je groep. |
| `tijdens` | Tijdens de sessie / *Als werkvorm in de zaal* | Iedereen speelt op zijn eigen scherm | Telefoon of laptop, niets installeren. Waar de groep verschillend kiest, heb je je gesprek. | Lees wat deelnemers nodig hebben → `#faq-laptop` | Vertel hoe lang je sessie duurt en hoeveel tijd je voor een oefening hebt. |
| `erna` | Als vervolgopdracht / *Terug op het werk* | Ze oefenen nog een keer als het ertoe doet | Onderzoek naar serious games vond meer effect als een spel over meerdere sessies loopt en andere instructie aanvult (Wouters e.a., 2013). | Lees hoe vóór, tijdens en na werkt → `#faq-moment` | Vertel wat deelnemers na je sessie anders moeten doen. |
| `weet-niet` | Dat weet ik nog niet / *Ik wil het eerst zien* | Speel eerst de demo | Dan weet je wat een deelnemer doet en ziet. Het moment kiezen we daarna, in een gesprek van een half uur. | Ga naar de demo → `#probeer` | Vertel welke workshop je geeft en voor wie. |

**Vraag `opdrachtgever-afspraken`**: "Hebben jullie al afspraken over AI-gebruik?" · veld: AI-afspraken

| waarde | label / sub | kop | reactie | stap | formulier |
|---|---|---|---|---|---|
| `ja` | Ja, die liggen vast / *Medewerkers kunnen ze nalezen* | Een versie op maat laat ze toepassen | Bij elke keuze staat wat jullie afspraken zeggen. Jullie leveren ze aan; het beleid schrijven wij niet. | Lees hoe een versie op maat werkt → `#faq-op-maat` | Vertel voor welke groep de training is en wanneer. |
| `bezig` | Daar werken we aan / *Er ligt een concept* | In de workshop hoor je waar mensen tegenaan lopen | AI Wijzer zoals hij is, kan daar nu al naast. Een versie op maat volgt als de afspraken vastliggen. | Lees welke twee vormen er zijn → `#faq-afnemen` | Vertel wanneer jullie de afspraken verwachten. |
| `nee` | Nog niet / *Iedereen doet wat hem verstandig lijkt* | AI Wijzer werkt ook zoals hij is | Algemene afspraken bij het fictieve Northfield: wat deel je, wanneer controleer je het antwoord, wanneer vraag je na. Een versie op maat kan later. | Ga naar de demo → `#probeer` | Vertel om hoeveel medewerkers het gaat. |

**Dilemma `dilemma-ai-offerte`** · veld: Dilemma.

| waarde | label | kop | gevolg | reactie |
|---|---|---|---|---|
| `hele-offerte` | Ik upload de hele offerte | Snel klaar, en de offerte ligt bij een ander | Na een minuut heb je je samenvatting. De prijzen en voorwaarden van je leverancier staan nu bij een AI-dienst. | Of dat mag, hangt af van de tool en van de afspraken in de organisatie. In de zaal is dit een goede eerste vraag: wie heeft dit weleens gedaan? |
| `training-uit` | Ik zet eerst modeltraining uit en upload hem dan | Niet trainen is iets anders dan niet bewaren | Je zet de schakelaar om en uploadt de offerte. Of de dienst het bestand bewaart, heb je niet bekeken. | Over dat verschil gaat missie&nbsp;2 van de demo. Kiest een deel van je groep dit, dan weet je waar je uitleg begint. |
| `zonder-prijzen` | Ik laat de prijzen weg en upload de rest | Minder gedeeld. Wat staat er nog in? | Je haalt de prijstabel eruit en uploadt de rest. | Voorwaarden, namen en contactgegevens zijn vaak ook vertrouwelijk. Dat is de vraag voor je groep. |
| `navragen` | Ik vraag eerst na welke tool hiervoor mag | Het uur loopt | Je stuurt een bericht aan IT. Twintig minuten later is er nog geen antwoord. | Bij de ene organisatie staat het antwoord in de afspraken, bij de andere weet niemand het. Welke van de twee het is, hoor je in de zaal. |

Groep:

```yaml
groep:
  titel: "Wat jij van je groep ziet"
  tekst: "Zo kiest een voorbeeldgroep van elf deelnemers, en jij. Speelt je groep via Prepo of het LMS, dan zie je dit per situatie."
  aantallen: { hele-offerte: 3, training-uit: 5, zonder-prijzen: 2, navragen: 1 }
  advies: "De grootste groep zet modeltraining uit en uploadt dan toch. Daar begint je uitleg."
  meta: "Voorbeeldgegevens: elf deelnemers en jij."
```

De kop zegt met opzet niet "in de zaal": we beloven geen live scherm.

### 5.3 praktijkdagen (richting)

FAQ-id's toevoegen: `vervangt`, `groepsoverzicht`, `leeromgeving`, `werk-erbij`, `gamers`, `korter`, `begin`.

- **`herhaal-tijd`**: koppen die de tijd vertalen naar de dag ("Dan gaat het om wie wat mist", "Dat uur gaat van de oefentijd af", "Het oefenen begint pas tegen elven", "Een theoriedag met een stuk praktijk"). Stappen: `kwartier` → `#probeer` ("Hang de melder op en zie wat je vooraf weet"); `uur` en `halve-ochtend` → `#faq-groepsoverzicht`; `meer` → `#afspraak`. Geen rekensom met daglengte (zie review).
- **`eigenaar-elearning`**: `zelf` → `#faq-werk-erbij`; `leverancier` → `#faq-leeromgeving`; `normsteller` → `#faq-werk-erbij`, en de reactie zegt in een halve zin dat de verplichte e-learning met toets blijft. Formulierhints: "Noem de training en het LMS", "Noem de normsteller".
- Probeerblok is de CO-melder: geen wijziging.

### 5.4 complexe-processen (richting)

FAQ-id's: `rondleiding`, `onderhoud`, `lesuur`, `klopt`, `begin`.

- **`aanbod-nu`**: `rondleiding` → `#faq-rondleiding`; `lespakket` → `#hoe-het-werkt`; `niets` → `#faq-begin`. Koppen: "De rondleiding blijft", "Het deel waarin ze het werk zelf doen", "Begin met één functie".
- **`bezoek-moment`**: `vooraf` en `achteraf` → `#faq-lesuur`; `geen-bezoek` → `#probeer` ("Bekijk een minuut uit het spel"). Formulierhint: "Vertel welke klas of opleiding, en of er een bezoek gepland staat."
- Probeerblok is een video: geen wijziging. Een dilemma uit The Disruption Game kan later, als de inhoud uit het spel zelf komt.

### 5.5 safety-doeners (richting)

FAQ-id's: `poortinstructie`, `certificaat`, `bestaande-elearning`, `regels-veranderen`, `lms-telefoon`, `talen`, `begin`.

- **`afrondingssysteem`**: `lms` → `#faq-lms-telefoon`; `register` krijgt de meeste aandacht (zie review): kop "Dat hangt af van het systeem", reactie die zegt wat nu zeker is (afronding per persoon in jullie LMS of in Prepo) en dat de koppeling naar een register per systeem wordt uitgezocht, zonder belofte. Stap → `#afspraak`; formulierhint "Noem het register of toegangssysteem waar de afronding in moet." `weet-niet` → `#faq-lms-telefoon`.
- **`talen`**: `een` → `#faq-begin`; `twee-drie` en `meer` → `#faq-talen`. Formulierhint: "Noem de talen op jullie terrein." Geen uitspraak over opgeleverde vertalingen.
- Probeerblok is de CO-melder: geen wijziging.

### 5.6 onboarding-modules (richting)

FAQ-id's: `catalogus`, `zelf-maken`, `ai-act`, `lms`, `begin`.

- **`ai-beleid`**: `ja` → `#probeer` ("Probeer één situatie"); `bezig` → `#faq-lms` (losse modules, zelf bijwerken); `nee` → `#faq-begin`. Koppen: "Het staat er. Weten mensen wat het betekent?", "Een module kan meegroeien", "Het beleid is de eerste stap".
- **`awareness-nu`**: `abonnement` → `#faq-catalogus`; `jaarlijks` → `#hoe-het-werkt`; `niets` → `#faq-begin`.
- **Dilemma `dilemma-ai`**: per keuze een kop en een gevolg erbij. Koppen: "De gegevens staan nu bij een externe dienst", "Zonder naam nog te herkennen", "Vaak precies wat het beleid bedoelt", "Veilig, en het kost tijd". Gevolgen in dezelfde verteltrant als bij de AI-pagina's (wat er gebeurt met de mail van de inwoner). Groep met voorbeeldgegevens, kop "Wat jij daarna ziet", en de bestaande `claim` blijft. Geen AI Act-claim, geen compliance.

---

## 6. Meting

Alles blijft via `window.preludensTrack`.

| Event | Wijziging | Parameters |
|---|---|---|
| `question_answer` | uitgebreid | `casus`, `question_id`, `answer` (bestaand) + `question_type` (`vraag` of `dilemma`), `answer_order` (1 voor de eerste klik op deze vraag, 2 voor de tweede, …) |
| `question_step` | nieuw: klik op de stap in een reactie | `casus`, `question_id`, `answer`, `step_target` (het anker, bv. `faq-lms`) |
| `faq_open` | uitgebreid | + `faq_source` (`klik` of `antwoord`), zodat een FAQ die via een stap openging niet als eigen nieuwsgierigheid telt |
| `form_submit` | uitgebreid | + `path_choice`, `answers` (aantal beantwoorde vragen, 0 tot 3) |
| `path_select`, `cta_click`, `demo_start` | ongewijzigd | De stap krijgt geen `btn`-klasse en geen `data-cta`, dus hij telt niet dubbel als `cta_click`. |

Het groepsbeeld krijgt geen eigen event: het verschijnt bij elk dilemma-antwoord.

**In GTM:** datalaagvariabelen `question_type`, `answer_order`, `step_target`, `faq_source`, `answers`; één nieuwe tag `GA4 - question_step`; de variabelen toevoegen aan de bestaande tags. Bijwerken: `_marketing/gtm-configuratie.md`, hoofdstuk 3 van `_marketing/landingspagina-varianten.md` en de tabel bovenaan `assets/js/landing-varianten.js`.

**Het antwoord mee naar het formulier**

1. `landing-varianten.js` houdt één object bij en zet het op `window.preludensKeuzes` en in `sessionStorage`:
   `{ pad: {waarde, tekst}, antwoorden: [{id, veld, waarde, tekst}] }`. `tekst` is het label van de knop; `veld` komt uit de yml (`data-field` op de kaart). Per vraag telt het laatste antwoord.
2. `_includes/panels/form.html` krijgt twee verborgen velden, `lp_pad` en `lp_antwoorden`, en de meestuurregel (`[data-form-keuzes]`, standaard `hidden`). Na elke keuze vult het script ze: `lp_pad = "programma"`, `lp_antwoorden = "ai-aanleiding=tools; dilemma-ai-gesprek=algemeen"`.
3. `assets/js/form.js` bij verzenden:
   - **Werkt vandaag, zonder iets in HubSpot:** als de bezoeker "Niet meesturen" niet aanklikte, komt er onder het bericht een leesbare regel: `Gekozen op de pagina. Rol: ik organiseer het leerprogramma · Aanleiding: we rollen AI-tools uit · Dilemma: algemeen advies gevraagd`. Sales leest het in het bericht.
   - **Zodra de eigenschappen bestaan:** `lp_pad` en `lp_antwoorden` als eigen velden in de `fields`-lijst, alleen als ze gevuld zijn (lege velden gaan nu ook al niet mee). De interne namen komen in `_config.yml` onder `preludens.hubspot` (`veld_pad`, `veld_antwoorden`); staan die leeg, dan gaan de losse velden niet mee. Zo breekt een inzending niet op een veld dat HubSpot niet kent.
4. Het compacte formulier (naam en bereikbaarheid, met vast bericht) krijgt dezelfde regel achter zijn vaste bericht.

Bookings krijgt niets mee; wie daar boekt, kennen we alleen uit `booking_click` en de events ervoor in dezelfde sessie.

---

## 7. Uitvoering

Eerst `git checkout main && git pull origin main`; er werken andere sessies in deze repo. `_verhalen/ai-wijzer.md` blijft buiten dit werk.

| # | Stap | Bestanden |
|---|---|---|
| 1 | FAQ-vragen een optionele `id` geven (`id="faq-<id>"` op het `<details>`). | `_includes/panels/faq-item.html`, `_includes/varianten/pagina-d.html` |
| 2 | Eén include voor vraag en dilemma (staat nu twee keer in het sjabloon). Parameters: het vraagobject en `type`. Rendert `sub`, `kop`, `gevolg`, `stap`, `groep` als ze er zijn, zet `data-field` en per knop `data-form-hint`. | nieuw `_includes/varianten/vraag.html`, `pagina-d.html` |
| 3 | Opmaak: keuzerijen, reactievlak, groepsbeeld, zonder-JS-weergave, mobiel, reduced motion. De oude selectors (`.lv-question__options button`, `.lv-question__reply p`) blijven werken. | `_sass/components/_landing-varianten.scss` |
| 4 | Gedrag: `is-ready`, `answer_order`, stap (scroll, FAQ openen, focus), groepsbeeld tekenen, keuzes bewaren, formulier vullen, `faq_source`. | `assets/js/landing-varianten.js` |
| 5 | Formulier: verborgen velden, meestuurregel, wisselende hint, regel onder het bericht, `form_submit`-parameters. | `_includes/panels/form.html`, `assets/js/form.js`, `_sass/components/_form.scss`, `_data/nl.yml` en `_data/en.yml` (twee nieuwe teksten) |
| 6 | Kopij van de twee AI-pagina's uit 5.1 en 5.2. | `_data/casussen/ai-leerprogramma.yml`, `ai-trainers.yml` |
| 7 | Kopij van de andere vier volgens 5.3 tot 5.6. | de vier andere yml-bestanden |
| 8 | Documentatie en GTM. | `_marketing/landingspagina-varianten.md` (ronde 7), `_marketing/gtm-configuratie.md`, GTM zelf |
| 9 | Unslop: UI tegen `signs.md`, kopij tegen `taboo-phrases.md` en `tekst-verbeteren.mdc`. Dan committen op `main`. Niet naar `production` zonder vraag. | |

Stap 1 tot en met 5 kunnen live zonder stap 6 en 7: zonder nieuwe sleutels verandert alleen de opmaak.

**Testen** (desktop en 375px, op alle zes de pagina's plus `oplossingen/varianten/c/` en `d/`, die de oude opmaak via `herkenning.html` en eigen markup gebruiken):

- Elk antwoord op elke vraag: reactie, kop, stap. Elke stap komt uit op een bestaand anker (controleer met een grep op `href: "#faq-` tegen de id's).
- Stap naar een FAQ: vraag klapt open, focus op de `summary`, `faq_open` met `faq_source: "antwoord"`.
- Dilemma: gevolg, groepsbeeld telt de eigen keuze mee, tweede klik verplaatst de gouden balk, de som is steeds twaalf.
- Toetsenbord alleen: Tab, Enter en spatie; de focusring is zichtbaar op de geknipte rijen.
- Schermlezer (VoiceOver): gekozen staat wordt gemeld, reactie wordt voorgelezen.
- `prefers-reduced-motion`: geen overgangen, direct scrollen.
- Zonder JavaScript: alle reacties leesbaar.
- `?pad=…`: de rol staat klaar en staat in de meestuurregel van het formulier.
- Formulier: regel verschijnt, "Niet meesturen" haalt hem weg, een testinzending komt in HubSpot aan met de regel onder het bericht. Daarna een test met de losse velden.
- dataLayer (`?gtm_debug=1`): `question_answer` met `answer_order`, `question_step`, `form_submit` met `path_choice`.
- De contactpagina (gebruikt hetzelfde formulier): geen regel, geen fout.

**Risico's**

- **HubSpot weigert onbekende velden.** Daarom eerst alleen de regel in het bericht, en de losse velden achter een instelling.
- **Voorbeeldgegevens worden als echt gelezen.** De metaregel staat direct onder het groepsbeeld, in dezelfde woorden als bij de CO-melder. Wil Jan-Willem dit niet, dan vervalt `groep` en blijft de rest staan.
- **Ankers die niet meer bestaan** als iemand een FAQ-vraag weghaalt. De klik doet dan niets. Het script controleert het doel en verbergt een stap zonder doel.
- **De kaart wordt te hoog op mobiel** met vier keuzerijen, reactie en groepsbeeld. Houd `sub` kort (één regel) en het gevolg op twee zinnen.
- **`form.js` en `faq-item.html` zijn gedeeld** met de rest van de site. Alle toevoegingen doen niets als de velden of de id ontbreken.
- **Andere sessies** werken in dezelfde repo. Klein committen en vóór elke commit pullen.

---

## 8. Wat ik bewust niet doe

- **Geen live cijfers van andere bezoekers.** Geen backend, en te weinig verkeer om het eerlijk te tonen.
- **Geen goed-fout met punten of een score.** Wat goed is, bepalen de afspraken van de klant; dat is de claimgrens van deze pagina's.
- **Geen blokken verbergen of herschikken op basis van een antwoord.** Alles blijft zichtbaar, zoals bij de rolkeuze besloten in ronde 2.
- **Het berichtveld niet vooraf invullen.**
- **Geen vraag in meer stappen of een quiz.** Eén vraag per rol, één dilemma.
- **De rolkeuze en de CO-melder blijven zoals ze zijn.**
- **Geen nieuwe kleuren, iconen of beelden.**
- **Geen framework of bibliotheek.** Liquid, SCSS en het bestaande script.

---

## Open vragen voor Jan-Willem

1. **Voorbeeldgroep bij het dilemma:** akkoord met een groepsbeeld op voorbeeldgegevens, zoals bij de CO-melder?
2. **HubSpot:** hoe heten de eigenschappen voor herkomst en route precies, en mogen rol en antwoorden daar in, of komen er twee nieuwe (`lp_pad`, `lp_antwoorden`)? Tot dan staat het alleen in het bericht.
3. **Extra antwoord "We oriënteren ons nog"** op de leerprogrammapagina: toevoegen? Het geeft koude bezoekers een eerlijke optie en zegt ons dat de lead vroeg is.
4. **De `sub`-regels** bij de AI-vragen zijn door mij ingevuld (bijvoorbeeld "Een assistent in de kantoorsoftware of een eigen chatbot"). Kloppen ze met wat Daan bij deze doelgroepen hoort?
5. **Volgorde:** eerst alleen de twee AI-pagina's live met nieuwe kopij, of alle zes tegelijk?
