# Drie formats voor de landingspagina's

Voor: Jan-Willem en Daan
Datum: 11 november 2026
Status: concept, lokaal te bekijken, niets op `production`

Drie uitwerkingen van dezelfde casus (1, betere praktijkdagen), elk met een andere tactische keuze. Ze zijn bedoeld om naast elkaar te leggen en te kiezen. Ze zijn niet bedoeld om tegen elkaar te A/B-testen: bij zestig tot honderdvijftig bezoekers per pagina zie je met een test alleen enorme verschillen (zie *Bij weinig verkeer*, onderaan).

**Bekijken.** Start de server met `./bin/serve` en open:

- overzicht: <http://localhost:4000/preludens-website/oplossingen/varianten/>
- A, demo eerst: <http://localhost:4000/preludens-website/oplossingen/varianten/a/>
- B, verhaal en bezwaren: <http://localhost:4000/preludens-website/oplossingen/varianten/b/>
- C, zelfselectie: <http://localhost:4000/preludens-website/oplossingen/varianten/c/>, en met een vooraf gekozen pad: `…/c/?pad=koper` of `…/c/?pad=instructeur`

Alle vier staan op `noindex, nofollow` en buiten `sitemap.xml` (gecontroleerd in de gebouwde site).

---

## 1. De gedeelde basis

Wat in alle drie hetzelfde is, zodat het verschil tussen de pagina's alleen in de tactiek zit.

| Principe | Wat ik heb overgenomen | Waarom, en hoe sterk het bewijs is |
|---|---|---|
| **Message match** | De kop van A en B is letterlijk formulering A uit het plan ("Je herhaalt op de trainingsdag…"). In C krijgt elk pad zijn eigen formulering: A voor de instructeur, A2 voor de koper. Met `?pad=` landt een bericht op het juiste pad. | Google Ads rekent het mee in de landingspagina-ervaring [1]. Het veelgenoemde cijfer dat 98% van de advertenties niet matcht, heb ik niet tot een studie kunnen herleiden. Het principe is vooral logica, maar voor een experiment dat herkenning meet, is de kop het hele experiment. |
| **Eén doel per pagina** | De bestaande `landing`-layout: geen navigatie, geen logo-link. Eén actie: het fragment spelen en daarna het formulier. De twee knoppen in de hero van B dienen hetzelfde doel. | Het attention ratio-idee van Unbounce, met een paar eigen cases van rond 2015 [2]. Leveranciersdata, maar het past bij wat de layout al deed. |
| **Specifiek boven slim** | Koppen in de woorden van de lezer, korte zinnen, geen woorden als "innovatief" of "speels leren". | Unbounce: 41.000 pagina's. Eenvoudige tekst converteert in SaaS ruim zes keer beter dan tekst op professioneel niveau, en 250–725 woorden doet het best [3]. Dat is een correlatie, gemeten met Engelse leesbaarheidsformules. NN/g: mensen scannen in een F-patroon [4]. |
| **Laten zien, niet beschrijven** | Een speelbaar fragment van twee situaties plus het overzicht dat de instructeur ziet, in alle drie. De plek verschilt per variant. Variant B heeft daarnaast de explainer van CO Wijzer. | Navattic, 28.000 demo's: de beste demo's halen 62% voltooiing, en demo's zonder formulier ervoor scoren beter [5]. Leveranciersdata, en over SaaS-tours. Maar: **88% van de demosessies is op desktop.** Daarom is het fragment kort en gewone HTML, en op een telefoon speelbaar. |
| **Bewijs vlak bij de actie** | Eén project met naam (CO Wijzer, 21CC Education en Studium), vlak boven het formulier. Geen rij logo's, geen verzonnen citaat. | NN/g: testimonials op je eigen site worden met scepsis gelezen, naam en organisatie tellen [6]. Dat één concreet verhaal beter werkt dan logo's, heb ik niet als gemeten B2B-resultaat gevonden. Het is een keuze uit het plan van aanpak ("één sterke case verslaat vier logo's"). |
| **Bezwaren beantwoorden** | De bezwaren uit het marktonderzoek. A heeft er geen, B negen, C per pad drie tot vijf. De claimgrens staat er letterlijk in: "We vervangen de praktijkdag niet." | Schwartz' bewustzijnsniveaus, uitgewerkt door Copyhackers en CXL [7][8]: hoe minder bewust de lezer, hoe meer uitleg. Dat is een kader, geen meting, en precies daar verschillen A en B op. |
| **Weinig frictie in het formulier** | Het bestaande formulier van het meetfundament, door de varianten niet aangepast. Sinds 11 november is alleen de vraag "Waar loop je tegenaan?" verplicht, plus een e-mailadres óf een telefoonnummer; naam en organisatie mogen leeg blijven. Labels boven de velden, en een bevestiging op dezelfde plek. | HubSpot (40.000 pagina's): het type veld weegt zwaarder dan het aantal, telefoonnummer en dropdowns drukken het meest [9]. Baymard: labels altijd zichtbaar boven het veld [10]. Beide oud of uit e-commerce. |
| **Mobiel eerst** | Gecontroleerd op 375 px: geen horizontale scroll en knoppen van minstens 44 px hoog. In A komt het fragment op een telefoon direct onder de kop, vóór de knop. | Unbounce: 79% van de bezoeken aan SaaS-landingspagina's is mobiel [3]. Voor LinkedIn vond ik geen officieel actueel cijfer: de app is grotendeels mobiel, de browserversie veel minder [11]. WCAG 2.2 vraagt minimaal 24×24 px, 44×44 voor belangrijke knoppen [12]. |
| **Laadsnelheid** | Geen beeld in de hero. Het grootste element bovenaan is tekst. Beelden lazy, video `preload="none"`. HTML van 22–30 kB per pagina, één extra script van een paar kB. | Core Web Vitals: LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 [13]. Deloitte/Google: bij lead-gen 21,6% meer doorstroom per 0,1 s sneller [14]. Dat onderzoek is door Google betaald en correlationeel. Portent: op B2B lead-gen-sites converteert 1 s laadtijd drie keer beter dan 5 s [15]. |
| **Toegankelijkheid** | Echte `<button>`s, focus naar de volgende stap na een keuze, een live-regio voor de uitleg, oordeel in tekst en niet alleen in kleur, zichtbare focusrand, `<details>` voor de vragen. | WCAG 2.2 AA. De European Accessibility Act geldt sinds 28 juni 2025 voor diensten aan consumenten; puur B2B valt er in principe buiten [16]. Laat dat juridisch toetsen. Aanbestedingen vragen het vaak wel. |

**Drie dingen die ik uit het onderzoek heb toegevoegd:**

1. **Een herkenningsvraag met één klik** ("Herken je dit uit je eigen trainingen? Ja / Deels / Nee"), in alle drie. Het experiment meet herkenning. Dit vraagt het aan iedereen die de pagina ziet, ook aan wie niets invult. Event: `recognition_select`.
2. **Doorsturen als vervolgstap voor de instructeur** (variant C). NN/g raadt aan de gebruiker die het probleem voelt iets te geven om door te sturen naar wie kiest [17]. Gartner: kopers besteden zo'n 17% van hun aankooptijd aan leveranciers, en 61% heeft liever helemaal geen verkoper [18]. De link in de mail opent bij het koperspad, met `utm_source=doorgestuurd`.
3. **Geen A/B-test, wel kwalitatief meten.** Bij honderd bezoekers is een test blind voor alles behalve enorme verschillen. NN/g: vijf gesprekken per ronde vinden de meeste problemen [19]. Clarity-opnames en de herkenningsvraag zeggen meer dan een percentage.

---

## 2. De drie varianten

Alle drie gebruiken hetzelfde fragment (`_includes/varianten/fragment.html`): twee situaties uit een voorbereiding voor monteurs (een CO-melder ophangen, de melder gaat af) en daarna het overzicht dat de instructeur 's ochtends ziet. Dat overzicht maakt het tweede deel van het aanbod zichtbaar: **inzicht voor de instructeur**. Het staat erin omdat het onderzoek bij casus 1 twee lezers vond, en dit deel is voor de lezer die voor de groep staat.

Het fragment staat er omdat de demo nog geen URL heeft (beslissing F). Zodra `preludens.demo.url` in `_config.yml` staat, komt in alle drie een knop "Speel de hele demo (2 minuten)" bij, met `demo_start` eraan.

### A — Demo eerst

**Tactiek.** Laten ervaren vóór uitleggen. Het fragment staat in de hero, naast een korte kop en één zin. Daaronder alleen wat je nodig hebt om ja te zeggen: wat je net speelde (drie regels), de herkenningsvraag, één bewijs en het formulier. Ongeveer 250 woorden.

**Past bij.** Warm verkeer dat al weet waar het over gaat, of verkeer met een duidelijke zoekvraag: een LinkedIn-post waarin je het probleem al hebt uitgelegd, of een advertentie op "poortinstructie maken". De lezer die zelf het probleem voelt en snel wil zien of het iets is. Van de vier casussen het best voor **casus 3** (speel één regel) en voor de instructeurshelft van casus 1.

**Wat het opoffert.** Uitleg en vertrouwen. Wie niet weet wie Preludens is, krijgt meteen een opdracht. Een koper die eerst wil weten of het in de leeromgeving draait, vindt dat in één regel en niet in een antwoord. Er staan geen bezwaren op. En: het fragment moet goed zijn, want het ís de pagina. Een fragment dat niet klopt of saai is, kost hier alles.

**Wat je meet.**
- `demo_start` / paginaweergaven: begint men te spelen? Werkt het, dan begint ongeveer de helft. Onder een kwart betekent dat een opdracht in de hero afschrikt.
- `demo_complete` / `demo_start`: maken ze het af?
- `recognition_select` na het spelen.
- `form_start` en `form_submit`.
- In Clarity: spelen ze vóór ze lezen, of scrollen ze eerst langs het fragment?

**Boven de vouw op mobiel (375 × 812).** Logo, de kop over vier regels, de zin "Speel twee situaties…" over vier regels, en dan het donkere fragment met de eerste situatie. De vraag "Waar hang je de melder in de slaapkamer?" en de eerste keuze staan net op het scherm. De knop naar het formulier komt pas ná het fragment, met opzet.

### B — Verhaal en bezwaren

**Tactiek.** Eerst vertrouwen. De verhaallijn uit `content-structuur-en-copy.md`: herkenning (drie momenten van een praktijkdag) → inzicht ("Terughalen is goed lesgeven") → hoe het werkt (drie stappen) → het fragment → bewijs (de explainer van CO Wijzer, het verhaal van 21CC, de vijfdaagse training met de nuance erbij) → negen vragen → formulier. Ongeveer 1.100 woorden.

De toon volgt het plan van aanpak: herhalen is vakmanschap, en het testeffect geeft de instructeur gelijk. De pagina zegt dat ook. De e-learning wordt niet afgevallen.

**Past bij.** Koud verkeer uit een persoonlijk bericht, vooral aan de **koper**: het hoofd opleidingen dat niet om deze pagina vroeg en eerst wil weten of we het probleem begrijpen, of het in de leeromgeving draait en of het naast de verplichte e-learning mag. Van de vier casussen het best voor **casus 2**: daar is de markt bezet en zijn de bezwaren het verhaal ("we hebben Portlantis al", "dat bouwt de universiteit").

**Wat het opoffert.** Snelheid en de instructeur. De instructeur wil zien, niet lezen, en moet hier vier schermen scrollen voordat er iets te spelen valt. De lange pagina is ook het moeilijkst te lezen op een telefoon. En negen vragen tonen ook negen twijfels: wie dat bezwaar zelf niet had, krijgt het hier aangereikt.

**Wat je meet.**
- `scroll_50` en `scroll_90`: lezen ze het verhaal?
- `faq_open` met de vraag erbij (nieuw): welke bezwaren worden geopend? Dat is in deze variant het interessantste: het zegt welke bezwaren echt leven, en die horen in de gesprekken terug te komen.
- `video_play` / `video_75` bij de explainer.
- `demo_start` vanaf positie `voorbeeld`.
- `form_submit`, en of het vrije tekstvak vaker gevuld is dan bij A. De verwachting is dat een lezer met vertrouwen meer schrijft.

**Boven de vouw op mobiel.** De kop over vier regels, twee alinea's (negen regels samen), de gouden knop "Speel een voorbeeld" en de witte knop "Laat zien hoe dit bij jouw training past". Daaronder net de kop "Drie momenten van een praktijkdag". Geen beeld, geen fragment: dat staat vier schermen lager.

### C — Zelfselectie

**Tactiek.** Een kleine eerste toezegging. Onder een korte kop ("De praktijkdag begint nog steeds met theorie") kiest de bezoeker: *Ik geef de training*, *Ik beslis over de training* of *Allebei*. Daarna gaat het bijbehorende pad open:

| | Instructeur | Koper | Allebei |
|---|---|---|---|
| Kop | Formulering A | Formulering A2 | A, dan A2 |
| Eerste toezegging | Inschatting: "Hoeveel van je ochtend gaat er op aan herhalen?", met een antwoord dat het eigen getal terugspiegelt | — | inschatting |
| Fragment | ja | ja | ja |
| Bewijs | — | 21CC + vijfdaagse training met nuance | idem |
| Bezwaren | drie: korter, eigen werk, geen invloed | vijf: leeromgeving, verplichte e-learning, leverancier, geen gamers, prijs | vijf |
| Vervolgstap | **Stuur deze pagina door** naar wie beslist, of het formulier | formulier | formulier |

De instructeur krijgt dus een andere vervolgstap: de instructeur koopt niet. Het doorsturen opent een mail met een link naar het koperspad, met `utm_source=doorgestuurd`. Als dat gebeurt, zie je het terug als nieuwe sessie.

Wie niet kiest, ziet alleen de hero en het formulier. Zonder JavaScript staan alle blokken onder elkaar.

**Past bij.** Gemengd verkeer van twee soorten lezers: een LinkedIn-post die zowel instructeurs als kopers ziet. Voor persoonlijke berichten, waar je al weet wie je schrijft, gebruik je `?pad=instructeur` of `?pad=koper`. Dan valt de keuze weg en staat het juiste pad meteen open. Het plan van aanpak splitst de lijst van 40 in die twee helften; met deze links meet je ze ook apart, wat het plan vraagt. Van de vier casussen het best voor **casus 1** en **casus 4** (zie het advies).

**Wat het opoffert.** Een klik vóór de inhoud: elke extra stap is frictie. Het voet-in-de-deur-effect bestaat, maar is klein: in de meta-analyse van Burger r ≈ 0,09–0,17 [20]. Quizfunnelcijfers van 40% komen van leveranciers en tellen alleen wie al begonnen is [21]. Voor "kies je pad" op landingspagina's vond ik geen degelijk onderzoek. C is ook de duurste variant om te onderhouden: drie paden, drie sets bezwaren.

**Wat je meet.**
- `path_select` / paginaweergaven: kiest men? Onder de helft betekent dat de keuze een drempel is.
- De verdeling instructeur / koper / allebei. Dat is zelf een uitkomst: wie bereik je met een post?
- `estimate_select`: hoeveel tijd zeggen instructeurs kwijt te zijn? Dit is ook marktonderzoek. "Meer dan dat" bij een kwart of meer is een sterk signaal voor het probleem.
- `mailto_click` op "Stuur deze pagina door", en sessies met `utm_source=doorgestuurd`. Dat is de enige meting in deze vier experimenten die de stap van instructeur naar koper zichtbaar maakt.
- `form_submit` per pad. Het pad staat niet in HubSpot. Zie *Meting* hieronder.

**Boven de vouw op mobiel.** Kop over twee regels, één alinea van drie regels, "Waar sta jij?" en de drie keuzekaarten onder elkaar, elk met een gouden bovenrand. Bij `?pad=koper` staat de kaart *Ik beslis over de training* donker ingekleurd en is het koperspad al open onder de vouw.

### Waarom deze driedeling, en niet een andere

Ik heb het voorstel aangehouden, met twee aanscherpingen.

1. **Hetzelfde fragment in alle drie.** In het voorstel had alleen A de demo. Maar "laten zien in plaats van beschrijven" hoort bij de basis, niet bij één variant. Wat A onderscheidt, is dat het fragment de pagina *opent*. B laat het ook zien, maar pas na het verhaal. Zo vergelijk je plaats en volgorde, en niet "met of zonder product".
2. **C kiest op rol, niet op inschatting.** De inschatting zit er wel in, maar alleen in het instructeurspad, als tweede toezegging. Rol is de keuze die bij casus 1 ertoe doet: de twee lezers willen een andere kop, andere bezwaren en een andere vervolgstap. Een inschatting vooraan levert alleen een andere zin op.

Een vierde richting heb ik overwogen maar niet gebouwd: **één pagina waarvan de kop wisselt op `utm_content`**, zodat elke formulering uit de posts zijn eigen kop krijgt. Dat is message match zonder drie pagina's. Het is goedkoop te maken (dezelfde techniek als `?pad=`), maar het is een meetkeuze en geen format. Het past bij elk van de drie.

---

## 3. Meting

Alles gaat via `window.preludensTrack` uit `assets/js/tracking.js`, dus door dezelfde deur als de rest. De bestaande hooks (`cta_click` met label en positie, `form_start`, `form_submit`, `mailto_click`, `scroll_50/90`, `video_play/75`) werken ongewijzigd; de panelen hebben id's, en die worden `cta_position`.

Nieuw, in `assets/js/landing-varianten.js`:

| Event | Wanneer | Parameters |
|---|---|---|
| `demo_start` | eerste keuze in het fragment | `casus`, `demo_type: "fragment"`, `demo_position` (`hero` of `voorbeeld`) |
| `demo_complete` | het overzicht van de instructeur verschijnt | idem |
| `recognition_select` | klik op de herkenningsvraag | `casus`, `recognition` (`ja`, `deels`, `nee`) |
| `path_select` | keuze van een pad in C | `casus`, `path_choice` (`instructeur`, `koper`, `beide`), `path_source` (`klik` of `url`) |
| `estimate_select` | inschatting in het instructeurspad | `casus`, `estimate` (`kwartier`, `uur`, `halve-ochtend`, `meer`) |
| `faq_open` | een vraag gaat open (één keer per vraag) | `casus`, `faq_question`, `faq_position` |

Daarnaast zet het script `landing_variant` (`a`, `b`, `c`) in de dataLayer, zonder event.

**Voorgestelde naam voor de keuze in C: `path_select`.** Hij volgt de vorm van de bestaande events (zelfstandig naamwoord + werkwoord) en zegt niets over casus 1. Daardoor kan hij ook bij casus 4 gebruikt worden (paden AI en cyber).

**In GTM nog te doen**, alleen als een variant wint. Getest is alleen dat de events in de dataLayer verschijnen, lokaal in de browser.

- Data-laagvariabelen voor `demo_type`, `demo_position`, `recognition`, `path_choice`, `path_source`, `estimate`, `faq_question` en `landing_variant`.
- `demo_type` toevoegen aan de bestaande tags `GA4 - demo_start` en `GA4 - demo_complete`. Zonder die variabele telt een gespeeld fragment in GA4 als een gespeelde demo. Zolang de demo niet bestaat, is dat geen probleem, en `page_path` scheidt de varianten.
- Drie nieuwe tags: `recognition_select`, `path_select`, `faq_open`. `estimate_select` kan erbij als C gekozen wordt.
- **Het pad komt niet mee in HubSpot.** Het formulier heeft één verborgen veld (`casus`) en dat is van het meetfundament. Wil je leads per pad zien, dan is er een tweede verborgen veld nodig in `panels/form.html`. Dat heb ik niet aangeraakt.

Eén ding om te weten: het overzicht van de instructeur in het fragment ("5 van 12 in één keer goed") telt de antwoorden van de bezoeker mee bij een vaste voorbeeldgroep van elf. Er staat "voorbeeldgegevens" bij.

---

## 4. Advies per casus

Het verkeer verschilt per casus, en daarmee de beste tactiek. Kort: **kies per casus één format en verdeel geen verkeer over varianten.**

| Casus | Verkeer | Advies | Waarom |
|---|---|---|---|
| **1 — Praktijkdagen** | Persoonlijke berichten aan twee helften van een lijst van 40, drie posts. Push, koud tot lauw | **C**, met `?pad=` in elk persoonlijk bericht. De keuze zelf zie je dan alleen bij post-verkeer | Twee lezers met een andere kop, andere bezwaren en een andere vervolgstap. C is de enige variant die beide bedient, en de enige die meet of de instructeur doorstuurt. Met `?pad=` betaal je de extra klik alleen waar je niet weet wie er komt. |
| **2 — Complexe processen** | 15 persoonlijke benaderingen, één post met de Yard Crane-video. Koud, en de markt is bezet | **B**, met de explainer van Yard Crane Scheduler waar nu het fragment staat | De lezer heeft "we hebben al iets" (Portlantis, Dinalog, de universiteit). Dat beantwoord je met een verhaal en bezwaren, niet met een spel in de hero. Het bewijs (20.000 gespeelde missies) hoort bij de CTA. |
| **3 — Safety voor doeners** | €200 zoekpeiling op "poortinstructie maken", "Life Saving Rules" e.d., plus 13 benoemde opdrachtgevers | **A** voor de advertenties, met één Life Saving Rule als fragment. Voeg twee vragen toe (talen, systeem). Voor de 13: B | Iemand die zoekt op "poortinstructie maken" heeft een vraag en wil het ding zien. De secundaire CTA uit het plan ("In welk systeem moet afronding bij jullie terechtkomen?") is zelf al een kleine toezegging. Die past onder het fragment. |
| **4 — Onboarding / AI-beleid** | €150 zoekpeiling, gesplitst op intentie, plus een benoemde lijst. Twee kopers: HR/L&D bij AI, security bij cyber | **C**, met de paden *AI-gebruik* en *cyber*, vooraf gekozen per advertentiegroep (`?pad=ai`, `?pad=cyber`) | Twee kopers met een andere aanleiding (geen wettelijke plicht bij AI, de zorgplicht bij cyber) en andere bezwaren. Zoekverkeer weet al welk pad het zoekt, dus voor hen valt de keuze weg. De keuze blijft alleen voor de benoemde lijst. Het plan vraagt een prijs per module en een blok "waarom niet zelf met AI": dat horen bezwaren per pad te zijn. |

Kies je bij casus 3 en 4 voor zoekverkeer, dan geldt message match het hardst: de kop moet het zoekwoord zijn of er dicht bij liggen. Dat werkt bij A (één kop) en bij C met een vooraf gekozen pad. Bij B zakt de kop onder een lang verhaal.

---

## 5. Wat nog nagekeken moet worden voordat een variant live gaat

- **De vakinhoud van het fragment.** De situaties leunen op CO Wijzer ("op slaaphoogte", "geen CO-melders bij de ketel") en op het gangbare advies bij een CO-alarm (ventileren, toestel uit, naar buiten). De onderbouwing in de uitleg ("te dicht op de bron") heb ik zelf geformuleerd. Laat iemand van het CO Wijzer-project meelezen.
- **De zin over 21CC.** "21CC Education kwam bij ons met de vraag die op deze pagina staat" komt uit paragraaf 5 van het A4. Mag dat zo op de pagina?
- **De vijfdaagse training.** Staat er anoniem in, zoals het A4 voorschrijft ("bij een vijfdaagse training op locatie konden twee dagen vervallen"), in B en in het koperspad van C. De nuance staat erbij. Het plan zegt over formulering C "alleen bij meerdaags maatwerk". Voor A heb ik hem weggelaten.
- **Inzicht voor de instructeur.** De pagina's beloven dat de instructeur vóór de dag ziet waar de groep staat. Prepo levert "deelname, voortgang en scores" (zie `prepo/index.md`). Een overzicht per groep en per situatie, zoals in het fragment, heb ik nergens als bestaande functie gevonden. Kan dat, of moet de belofte kleiner?
- **SCORM en de publieke link.** Overgenomen van `prepo/index.md`. Geldt dat ook voor deze voorbereiding?
- **"Wat kost het?"** heeft geen bedrag. Het antwoord stelt voor klein te beginnen met "één moment uit één training". Dat is een aanbod. Klopt het met wat jullie willen verkopen?
- **De reactietermijn** onder het formulier ontbreekt nog steeds. Dat punt staat al open in het meetfundament.
- **Polyglot** maakt ook `/en/oplossingen/varianten/…` aan, zoals bij de stubs. Die staan ook op `noindex`.

---

## 6. Wat er in de repository staat

Alleen nieuwe bestanden, plus één regel in een gedeeld bestand:

| Bestand | Wat |
|---|---|
| `oplossingen/varianten/index.md` | overzicht, zonder casus (telt niet mee in de cijfers) |
| `oplossingen/varianten/a/index.md`, `b/`, `c/` | de drie varianten |
| `_includes/varianten/fragment.html` | het speelbare fragment, gedeeld door alle drie |
| `_includes/varianten/herkenning.html` | de herkenningsvraag |
| `assets/js/landing-varianten.js` | fragment, herkenningsvraag, paden, inschatting, `faq_open` |
| `_sass/components/_landing-varianten.scss` | stijl, alleen bestaande tokens |
| `assets/css/main.scss` | **één regel**: `@import "components/landing-varianten";` |

Niet aangeraakt: `_layouts/landing.html`, de vier stubs onder `/oplossingen/`, `panels/form.html`, `tracking.js`, `form.js` en de consent- en GTM-bestanden. Hergebruikt: `panels/hero`-stijl, `panel`, `values`, `steps`, `faq`, `video`, `actions`, `form`, `clips`, en de bestaande `.dilemma-play`-stijl van de pagina Dilemma Storytelling.

---

## Bij weinig verkeer

De pagina's krijgen zestig tot honderdvijftig bezoekers. Een A/B-test kan dan alleen verschillen aantonen die je ook zonder test ziet. Daarom het advies om per casus één format te kiezen. Wat in plaats daarvan werkt:

- **Clarity-opnames.** Dertig opnames per pagina zeggen meer dan elk percentage.
- **De herkenningsvraag.** Een antwoord van iemand die verder niets doet.
- **Vijf korte gesprekken of vijfsecondentests per format** vóór de livegang: laat de pagina vijf seconden zien en vraag wat het is en voor wie [19].

---

## Bronnen

Opgehaald op 11 november 2026. Bij bronnen die alleen in zoekresultaten te zien waren en niet geopend konden worden, staat dat erbij.

1. Google Ads Help, *About landing page experience*. <https://support.google.com/google-ads/answer/6238826?hl=en-GB>
2. Unbounce, *Conversion-centered design* (attention ratio). <https://unbounce.com/conversion-centered-design/> (alleen in zoekresultaten)
3. Unbounce, *Conversion Benchmark Report*, SaaS en methodologie, data juli 2023–juli 2024. <https://unbounce.com/conversion-benchmark-report/saas-conversion-rate/> · <https://unbounce.com/conversion-benchmark-report/methodology/>
4. Nielsen Norman Group, *F-shaped pattern of reading on the web*. <https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/> (alleen in zoekresultaten)
5. Navattic, *State of the Interactive Product Demo 2025*. <https://navattic.com/report/state-of-the-interactive-product-demo-2025>
6. Nielsen Norman Group, *Social proof in the user experience*. <https://www.nngroup.com/articles/social-proof-ux/> (alleen in zoekresultaten)
7. Copyhackers, *Long pages* (Joanna Wiebe). <https://copyhackers.com/2014/07/long-pages/> (alleen in zoekresultaten)
8. CXL, *Long-form or short-form*. <https://cxl.com/blog/long-form-or-short-form/> (alleen in zoekresultaten)
9. HubSpot (Dan Zarrella), *Which types of form fields lower landing page conversions*. <https://blog.hubspot.com/blog/tabid/6307/bid/6746/which-types-of-form-fields-lower-landing-page-conversions.aspx> (alleen in zoekresultaten)
10. Baymard Institute, over inline labels en inline validatie. <https://baymard.com/blog/mobile-forms-avoid-inline-labels> · <https://baymard.com/blog/inline-form-validation> (alleen in zoekresultaten)
11. Buffer, *LinkedIn statistics* (secundair, cijfers via Similarweb). <https://buffer.com/library/linkedin-statistics> (alleen in zoekresultaten)
12. W3C, *Understanding SC 2.5.8 Target Size (Minimum)*. <https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html>
13. web.dev, *Defining the Core Web Vitals metrics thresholds*. <https://web.dev/articles/defining-core-web-vitals-thresholds> (alleen in zoekresultaten)
14. web.dev, *Milliseconds make millions* (Deloitte/55 voor Google). <https://web.dev/case-studies/milliseconds-make-millions>
15. Portent, *Site speed is (still) impacting your conversion rate*. <https://www.portent.com/blog/analytics/research-site-speed-hurting-everyone.htm>
16. Europese Commissie, *European Accessibility Act*. <https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en> · Raad van de EU (alleen in zoekresultaten): <https://www.consilium.europa.eu/nl/policies/accessibility-goods-services/>
17. Nielsen Norman Group, *B2B websites: convincing decision makers*. <https://www.nngroup.com/articles/b2b-convincing-decision-makers/> (alleen in zoekresultaten)
18. Gartner, persbericht 25 juni 2025, 61% van de B2B-kopers wil liever geen verkoper. <https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience> (alleen in zoekresultaten; de pagina over de B2B buying journey gaf een 403)
19. Nielsen Norman Group, *Why you only need to test with 5 users*. <https://nngroup.com/articles/why-you-only-need-to-test-with-5-users/> (alleen in zoekresultaten)
20. Freedman & Fraser (1966), *Compliance without pressure: the foot-in-the-door technique*. <https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Influence_Compliance/Freedman_Fraser_Foot-in-the-door.pdf> (alleen in zoekresultaten). Burger (1999), meta-analyse, via NN/g: <https://www.nngroup.com/articles/commitment-consistency-ux/>
21. Interact, *Quiz conversion rate report*. <https://tryinteract.com/blog/quiz-conversion-rate-report/> (alleen in zoekresultaten) · ConvertFlow, quiz funnel benchmark september 2026: <https://www.convertflow.com/benchmark-reports/lead-generation-quiz-funnel-benchmark-september-2026> (alleen in zoekresultaten)
22. Google Search Central, *AI features and your website* (geen aparte eisen voor AI Overviews; kerninhoud als tekst op de pagina). <https://developers.google.com/search/docs/appearance/ai-features>

Uit het marktonderzoek onder casus 1 komen ook: het testeffect (Rowland 2014), de meta-analyse over flipped classroom (van Alten e.a. 2019, het grootste effect als de contacttijd niet wordt ingekort) en de persona's. Die staan met bronnummers in `casus-1-praktijkdagen.md`.
