# Persona-review: casus 4, onboarding in losse modules

**Pagina:** `/oplossingen/onboarding-modules/` (lokaal, noindex) · **Bekeken:** 12 november 2026, desktop 1440 px en mobiel 375 px
**Bron van de tekst:** `_data/casussen/onboarding-modules.yml`, opbouw uit `_includes/varianten/pagina-d.html`
**Reviewer:** onafhankelijke sessie, niet de sessie die de pagina bouwde. Ik heb niets aan de pagina veranderd.

---

## De persona

**Inge, senior L&D-adviseur bij een gemeente met ongeveer 2.000 medewerkers.** Een verzonnen archetype op basis van *Persona 1: de L&D-adviseur die AI-beleid moet laten landen* in `_marketing/casus-4-onboarding-modules.md` (marktonderzoek, 10 november 2026). Daar staan geen interviews achter; dit is een samenstelling uit deskresearch.

- Juridische zaken en de FG hebben een AI-beleid geschreven. Het staat op intranet en niemand leest het. Na het nieuws over de gemeente Eindhoven (persoonsgegevens in openbare chatbots, bron [13]) ligt de opdracht bij L&D: "zorg dat mensen dit weten".
- Ze heeft een leerplatform met een catalogus en een auteurstool. Haar eerste vraag is of ze dit niet zelf kan bouwen.
- Ze beslist niet alleen. De FG, de CISO en haar manager lezen mee, en inkoop wil weten of het onder de drempel voor enkelvoudig onderhands blijft.
- Ze komt binnen via Google, op iets als "e-learning AI-beleid laten maken" of "AI-geletterdheid training op maat" (advertentiegroep B in het onderzoek).

Waarom zij en niet de security officer: de kop gaat over het AI-beleid, en het plan van aanpak zegt dat de koper bij AI-gebruik HR en L&D is (`plan-van-aanpak-experimenten.md`, casus 4, *Twee kopers*). Een gemeente kies ik omdat daar alles samenkomt: de Cyberbeveiligingswet, het Eindhoven-incident, en Maria zelf werkt bij een gemeente (zie *Bewijs*).

**De tweede rol die de pagina bedient:** de CISO of security officer van dezelfde gemeente (Persona 2 in het onderzoek). Die heeft al een awarenessplatform en moet onder de Cbw kunnen laten zien dat er aan beveiligingsbewustzijn wordt gewerkt. Waar zijn blik iets anders oplevert, noem ik dat apart.

---

## Eerste indruk boven de vouw

**Desktop.** De kop raakt meteen: *"Er is een AI-beleid. Niemand weet wat erin staat."* Dat zijn bijna letterlijk Inges eigen woorden. In twee seconden weet ze dat de pagina over haar probleem gaat.

Dan kijkt ze naar rechts, en daar gaat het mis. Het beeld is een Engelstalig scorescherm uit een ITSM-spel: *"OPERATE · Classify · Plan activities"*, met daaronder *"Congratulations, you found all 6 steps in the operations management process."* Over de rechterkant ligt een scoretabel (*Score 600, Highscore 600*), en de linker- en rechterkaart zijn afgesneden. Het onderschrift is eerlijk (*"Voorbeeld uit ons werk: Het verhaal van Maria, de onboarding van onITnow."*), maar het beeld zegt "procestraining voor IT-servicemanagement" en de kop zegt "AI-beleid". Inge denkt: is dit een bureau voor ITIL-spelletjes dat er een AI-kop boven heeft gezet?

**Wat het oplevert, staat niet boven de vouw.** De lead zegt wat Preludens doet (*"Wij maken jullie beleid speelbaar, in korte modules"*), niet wat er daarna anders is. De zin die dat wel zegt, staat pas in het securityblok: *"we zorgen dat mensen weten wat ze moeten doen."*

**Mobiel.** Daar valt het beter uit, omdat het beeld onder de vouw zakt. Boven de vouw staan alleen de kop, de lead en twee knoppen. Wie snel beslist, ziet het verwarrende beeld dus pas later.

**Vijf-secondentoets:** *voor wie* is het, ja. *Wat het oplevert*, half: ze snapt "modules over ons beleid", maar niet wat ze daarmee wint. Op desktop zaait het beeld twijfel over de vraag of deze partij AI en beleid wel kent.

---

## Per blok

### 1. Hero

| | |
|---|---|
| **Raakt** | De kop. En *"Naast het leerplatform dat er al is"*: dat haalt haar eerste bezwaar weg voordat ze het kan opschrijven. |
| **Schuurt** | Het beeld (zie hierboven). En het slot van de lead, *"klaar voor de onboarding van nieuwe mensen"*. Haar opdracht geldt alle 2.000 medewerkers, niet alleen nieuwe. Is dit alleen voor nieuwe mensen? |
| **Mist** | Een uitkomst in één zin. |
| **Blijft hangen** | "Is dit voor iedereen of alleen voor nieuwe mensen?" |

Kleinigheid: in de browsertab staat *"Onboarding in losse modules | Preludens"*. Wie vanuit een advertentie over AI-beleid binnenkomt, ziet in de tab een ander onderwerp.

### 2. Waar sta jij?

| | |
|---|---|
| **Raakt** | Twee rollen, snel gekozen. Het antwoord verschijnt en de pagina scrolt naar het juiste blok. Dat werkt op desktop en op mobiel. |
| **Schuurt** | De ondertitel bij haar rol: *"Ik zit bij HR of L&D — Je richt de onboarding in"*. Inge richt niet de onboarding in, ze moet een beleid laten landen. Ze kiest de kaart wel, maar herkent zich er maar half in. |
| **Fout in het sjabloon** | Na de keuze staat er *"Jij koos: ik zit bij hr of l&d"*, met "HR" en "L&D" in kleine letters. Dat komt door `{{ rol.label \| downcase }}` in `pagina-d.html` (regel 76). Bij een afkorting ziet het er slordig uit. Kijk ook even of het op de andere drie pagina's gebeurt. |

### 3. HR-blok: "De onboarding loopt achter op wat mensen nu doen"

| | |
|---|---|
| **Raakt** | *"wat het betekent op een dinsdagochtend, weet bijna niemand"*. Dat is precies haar zorg, in gewone taal. De twee cijfers geven haar iets om aan haar manager door te sturen. |
| **Schuurt** | De kop gaat weer over onboarding, terwijl de hero over beleid ging. Het beeld is opnieuw Engels en USM (*"process / people / technology … Correct. The procedure is the combination of the who and the what."*). |
| **Gelooft ze niet helemaal** | *"Twee derde van het grootbedrijf gebruikt AI. Van de mensen die het op hun werk gebruiken, kreeg minder dan een derde er instructie bij."* Beide cijfers kloppen met het onderzoek (CBS: 66% van bedrijven met 250+ personen; Newcom: 29% van de werkenden die AI gebruiken). Maar het zijn twee populaties, bedrijven en werkenden, en er staat geen bron bij. Inge gaat dit citeren in een memo, dus ze wil weten waar het vandaan komt. |
| **De vraag** | *"Hebben jullie al een AI-beleid?"* is een goede vraag. De reactie op "Ja" schuurt: *"Daar is een module voor."* Dat klinkt als een kant-en-klare module, terwijl de hele pagina over maatwerk gaat. Ze vraagt zich af of ze die module kan zien. |
| **Mist** | Een voorbeeld van een situatie die over AI gaat. Het onderzoek noemt er één die raak is: *"mag ik een cliëntdossier in Copilot plakken?"* Op de pagina staat geen enkele concrete AI-situatie. |

### 4. Securityblok: "Iemand kijkt mee op je scherm. Wat doe je?"

| | |
|---|---|
| **Raakt (CISO)** | De kop is het sterkste stuk tekst op de pagina: een situatie, geen thema. *"We beloven geen compliance"* wekt vertrouwen, omdat het eerlijk is. De reactie op "Een abonnement op een platform" (*"Dan houd je dat abonnement."*) neemt het grootste bezwaar weg. |
| **Schuurt** | De kop stelt een vraag die nergens beantwoord wordt. Daaronder komt een andere vraag, *"Wat doen jullie nu aan awareness?"*. Het beeld ernaast gaat over de definitie van "support" in het USM-raamwerk, niet over meekijken. |
| **Gelooft hij niet** | *"Cybergedrag leer je niet uit een jaarlijkse training."* In deze stelligheid voelt een CISO met een platform dat hij wordt aangevallen, en het onderzoek ondersteunt het maar half (UCSD: jaarlijkse training hing niet samen met minder klikken). Met "niet alleen uit" klopt het en wordt het niet persoonlijk. |
| **Mist** | Afrondingsgegevens per medewerker. Voor de audit is dat zijn eerste vraag (*"Levert dit rapportage per medewerker voor de audit?"*, Persona 2), en de pagina zegt er niets over. Ook mist een zin over wat het niet is: geen phishingsimulatie. |
| **Klopt** | *"Voor wie onder de Cyberbeveiligingswet valt, is dat sinds 15 augustus 2026 ook een zorgplicht."* Dat valt binnen de claimgrens: de zorgplicht wordt benoemd, compliance wordt niet beloofd. |

### 5. Probeer: "Zo ziet een module eruit"

Dit is het zwakste blok, en de primaire knop in de hero verwijst ernaar.

- Inge klikt op *"Zie hoe een module eruitziet"* en komt bij drie stilstaande beelden. Op desktop is elk beeld ongeveer 330 px breed. De tekst erin is niet te lezen, en je kunt de beelden niet vergroten.
- Alle drie zijn Engelstalig en gaan over IT-servicemanagement: een strip (*"New Macbooks … Aaargh, not again."*), een sorteerspel (*"SUPPORT · GOODS · ACTIONS · SERVICE"*) en een workflowpuzzel (*"Workflow type 7: Handling a risk via a change"*).
- De lead belooft *"een herkenbare situatie, keuzes, en wat die keuzes doen"*. Het derde onderschrift, *"Zien wat je keuze doet"*, staat bij een sleeppuzzel waarin je stappen op volgorde zet. Een gevolg van een keuze is daar niet te zien.
- Op mobiel zijn de beelden groter en deels leesbaar, maar ze blijven Engels en blijven over USM gaan.

Wat Inge wilde zien, staat in het onderzoek: *"Eén module met een situatie uit hún praktijk."* Ze krijgt een spel over een ander onderwerp in een andere taal. Ze voelt zich een beetje aan het lijntje gehouden: de knop beloofde een module.

De zin eronder, *"Wij ontwerpen jullie onboarding niet. Jullie weten wat erin moet; wij maken het speelbaar."*, werkt bij haar averechts. Ze wéét niet welke situaties erin moeten. Dat ze een beleid van zes pagina's moet vertalen naar concrete momenten, is juist het werk waar ze hulp bij zoekt. Volgens de eigen verhaalpagina deed Preludens bij Maria *"Verhaalontwerp en ontwikkeling"* (`_verhalen/onitnow-verhaal-maria.md`), dus dat werk doet Preludens wel. De zin verkoopt het tekort.

### 6. Hoe het werkt

| | |
|---|---|
| **Raakt** | Stap 3, *"Als SCORM-bestand in jullie leerplatform, en apart bij te werken als het beleid verandert."* Dat beantwoordt twee bezwaren in één zin. |
| **Schuurt** | Tussen stap 1 (*"Jullie kiezen het onderwerp"*) en stap 2 (*"Wij maken er een module van"*) zit alles wat Inge wil weten. Wie vertaalt het beleid naar situaties? Moet de FG meelezen? Hoeveel rondes zijn er? Hoe lang duurt het? Hoeveel tijd kost het haar? |
| **Mist** | Wat "apart bij te werken" in de praktijk betekent. Op de eigen Prepo-pagina staat het antwoord: *"Met Prepo pas je die teksten zelf aan. Daarna download je een bijgewerkt SCORM-bestand"* (`prepo/index.md`). Dat is precies het antwoord op haar bezwaar *"Over een half jaar is het beleid anders"*, maar het staat niet op deze pagina. |

De beelden bij de stappen zijn opnieuw USM-schermen (*"This is the USM customer-Provider Interaction Model"*). Het derde is een abstract netwerkbeeld.

### 7. Bewijs: "Waar het eerder werkte"

| | |
|---|---|
| **Raakt** | Er staat een echte klant met naam. |
| **Schuurt** | *"introduceert in de principes van USM"*. Inge weet niet wat USM is, en dat wordt nergens uitgelegd. Er staat geen resultaat, geen cijfer en geen citaat bij. De titel belooft "werkte", maar je leest alleen wat er gemaakt is. |
| **Gemiste kans** | Volgens de verhaalpagina werkt Maria *"op de servicedesk van een gemeente"*. Voor een gemeente-L&D'er is dat de herkenning die de pagina zoekt, en ze krijgt het niet te lezen. |
| **Tegenstrijdig** | Dezelfde verhaalpagina noemt bij Maria *"Ongeveer 120 minuten, in eigen tempo"*. Deze pagina belooft *"korte modules"*. Inge klikt vroeg of laat door naar het verhaal en ziet twee uur. Als de vijf MicroGames elk kort zijn, zeg dat dan. |
| **Gaat verder dan de bron** | *"Voor NNVO maakten we IT-veiligheid die mensen begrijpen en toepassen."* De verhaalpagina `_verhalen/nnvo-it-veiligheid.md` staat op `published: false`, spreekt in de tegenwoordige tijd (*"ontwikkelen we"*, *"een groeiende set"*) en heeft een citaat met de naam *"Naam achternaam"*. Dat mensen het "toepassen", is dus nergens onderbouwd. De verleden tijd "maakten" klopt ook niet. |

### 8. Bezwaren (FAQ)

Opent en sluit goed, op desktop en op mobiel. Per vraag:

- **"We hebben al een leerplatform met een catalogus."** Goed antwoord. Kort, en het gaat er niet tegenin.
- **"Kunnen we dit niet zelf maken met AI?"** *"Een quiz of een tekst wel. Wat een tool niet levert, is een situatie die klopt met jullie beleid en jullie praktijk."* Inge gelooft dit niet. Haar auteurstool heeft een AI-copiloot, en daar kan ze haar beleid in plakken om scenario's te laten maken. Het antwoord moet zeggen wat Preludens levert dat zij niet heeft: spelontwerp, testen met echte medewerkers, Prepo om te beheren, en dat ze daarna zelf de teksten bijwerkt.
- **"Is dit verplicht onder de AI Act?"** *"Daar doen we geen uitspraak over."* Dat voelt ontwijkend. Inge kent artikel 4 en de handreiking van de AP. De claimgrens in het plan staat een feitelijke zin toe (*"Hooguit feitelijk: wat de norm sinds juli 2026 is"*), en daarmee wint de pagina vertrouwen zonder iets te beloven.
- **"Draait het in ons LMS?"** Helder. *"in onze omgeving Prepo"* zegt haar niets; een link naar `/prepo/` of een halve zin uitleg helpt. Over xAPI en afrondingsgegevens staat er niets.
- **"Wat kost een module?"** Zie *Prijs* hieronder.

**Wat ontbreekt**, in de volgorde waarin Inge of de CISO het zou vragen:

1. Krijg ik afrondingsgegevens per medewerker in ons LMS? (CISO, audit)
2. Hoe lang duurt het van kennismaking tot een module die live staat?
3. Wat kost bijwerken als het beleid verandert, en kan ik dat zelf? (Ja, via Prepo, maar dat staat er niet.)
4. Waar staan de gegevens als we de Prepo-link gebruiken? (FG; verwerkersovereenkomst)
5. Is het toegankelijk? Voor een gemeente is digitale toegankelijkheid een inkoopeis.

### 9. Afspraak en formulier

- **Afspraak:** *"Begin met één module"* is een goede kop, want klein en concreet. Dat de Bookings-iframe op localhost leeg blijft, is bekend en geen bevinding.
- **Formulier:** *"Vertel welk onderwerp in jullie onboarding ontbreekt."* Hier is het weer onboarding, terwijl Inge over beleid kwam. En wat is een "moduleopzet"? Een document, een schets, een offerte? Is het gratis? Ze weet niet wat ze aanvraagt.
- *"Je krijgt een persoonlijk antwoord, geen nieuwsbrief."* is goed. Een termijn ("binnen twee werkdagen") zou het afmaken.
- Het formulier is kort en vraagt alleen een e-mailadres of telefoonnummer. Dat is goed.

### Mobiel in het algemeen

Er is geen horizontaal scrollen en de knoppen zijn goed te raken. De pagina is op 375 px wel ongeveer 11.500 px lang, zo'n veertien schermen. Bijna de helft daarvan bestaat uit Engelse USM-beelden die op mobiel groter worden en daardoor nog meer ruimte innemen.

---

## Claims die de persona wantrouwt of die verder gaan dan de bronnen

| Tekst op de pagina | Waar | Oordeel |
|---|---|---|
| *"Voor NNVO maakten we IT-veiligheid die mensen begrijpen en toepassen."* | `bewijs.alineas[1]` | **Gaat verder dan de bron.** Het verhaal is niet gepubliceerd, het project loopt nog en het citaat heeft geen echte naam. Herschrijf naar wat er gemaakt wordt, zonder effectclaim. |
| *"in korte modules"* met Maria als voorbeeld | `hero.lead`, `probeer.lead` | **Tegenstrijdig** met "ongeveer 120 minuten" op de verhaalpagina. |
| *"wat het betekent op een dinsdagochtend, weet bijna niemand"* | `rollen[0].alineas[0]` | **Niet onderbouwd.** Het onderzoek meet of er regels zijn (42%), niet of mensen weten wat erin staat. In de hero kan het als haar eigen woorden; in de lopende tekst staat het als feit. |
| *"Twee derde van het grootbedrijf … minder dan een derde er instructie bij"* | `rollen[0].alineas[0]` | **Klopt**, maar het zijn twee populaties en er staat geen bron bij. Zet de bron er klein onder. |
| *"Cybergedrag leer je niet uit een jaarlijkse training."* | `rollen[1].alineas[0]` | **Te stellig.** Het onderzoek steunt "niet alleen uit". |
| *"Daar is een module voor."* | `rollen[0].vraag.antwoorden[0].reactie` | **Wekt een verkeerde verwachting**: het klinkt als een bestaand product. |
| *"Jullie weten wat erin moet; wij maken het speelbaar."* | `probeer.claim` | **Verkoopt te weinig.** Preludens doet het verhaalontwerp; de persona weet juist niet wat erin moet. |
| *"sinds 15 augustus 2026 ook een zorgplicht"* / *"We beloven geen compliance"* | `rollen[1].alineas` | **Binnen de claimgrens.** Goed. |
| *"Is dit verplicht onder de AI Act? Daar doen we geen uitspraak over."* | `vragen.items[2]` | **Binnen de grens**, maar ontwijkend. Een feitelijke zin mag. |

De afspraken uit het plan zijn verder nagekomen: de kop gaat over het beleid, de pagina staat naast het leerplatform, er is geen AI Act-claim en geen compliancebelofte.

---

## Zijn drie stilstaande beelden genoeg als probeerblok?

**Nee.** Op de pagina's met een CO-melder of video is "probeer" iets wat je doet of ziet bewegen. Hier is het een galerij van drie kleine screenshots over een ander onderwerp, in een andere taal, en de primaire knop van de pagina verwijst ernaar. Het onderzoek waarschuwt hier al voor: *"Zonder iets zichtbaars is de primaire CTA leeg."* Dat is nu zo, ook al staan er beelden.

Er is een oplossing zonder nieuwe productie. Het sjabloon heeft al een vraag-met-feedback (`lv-question`). Eén dilemma over AI-gebruik, met drie antwoorden en per antwoord wat het beleid zegt, laat precies zien wat een module doet. Bijvoorbeeld: *"Je wilt een klantmail laten samenvatten door Copilot. Wat doe je?"* Het kost geen spel, alleen tekst, en het is meteen in haar onderwerp.

## Stoort het ontbreken van een prijs?

**Ja, voor beide rollen.** Inge moet weten of dit €3.000 of €30.000 is, want daarvan hangt af of ze het zelf kan regelen, haar manager nodig heeft of inkoop moet inschakelen. De markt rekent per medewerker per maand (awarenessplatforms: €10.000–20.000 per jaar voor 200 medewerkers; een dagtraining AI-geletterdheid: €625 per persoon, onderzoek [31][43]). Zonder bedrag kan ze niet vergelijken. Het antwoord *"In een kennismaking noemen we een indicatie"* maakt van het half uur in haar ogen een verkoopgesprek. Het plan zegt hetzelfde: *"zonder bedrag kan niemand vergelijken"*. Een "vanaf"-bedrag en een bandbreedte zijn genoeg.

## Zou de persona een afspraak plannen?

**Inge: nog niet.** Ze herkent het probleem en de positionering (naast het platform) bevalt haar, maar ze heeft niets gezien over haar onderwerp en weet niet wat het kost. Ze zou de pagina doorsturen naar de FG met "interessant?", of een kort bericht via het formulier sturen met de vraag om een prijsindicatie en een AI-voorbeeld. Dat is een lead, maar een koude. Een afspraak plant ze pas als ze één AI-situatie heeft gezien en een bedrag kent.

**De CISO: nee.** De kop trekt hem binnen, maar daarna ziet hij geen enkel securityvoorbeeld, niets over rapportage en een NNVO-verwijzing zonder inhoud. Hij heeft al een platform; deze pagina geeft hem geen reden voor een tweede gesprek.

---

## Top 5 verbeteringen

**1. Laat één situatie over AI-gebruik zien, en zet het hero-beeld recht.**
- `probeer` in de yml: vervang de drie USM-beelden door een dilemma over AI-gebruik met directe feedback. Het sjabloon (`pagina-d.html`, blok 5) kent nu `co-melder`, `video` en `beelden`. Een type `vraag` dat de bestaande `lv-question`-markup hergebruikt, is een kleine uitbreiding. Wil je de code niet aanpassen, dan kan het dilemma tijdelijk in `rollen[0].vraag`. Dan verlies je wel de kwalificerende vraag "Hebben jullie al een AI-beleid?", en die is nuttig voor de meting ("of aanvragers een eigen programma hebben").
- `hero.beeld`: niet het scorescherm. Als er geen AI-beeld is, kies dan het stripbeeld van Maria (mensen, herkenbaar) of het dilemma zelf, en zeg in het onderschrift dat het voorbeeld over servicemanagement gaat.
- Verander `hero.knop` pas als de knop echt naar een module leidt. Tot die tijd is "Bekijk een voorbeeld uit ons werk" eerlijker.

**2. Noem een prijs en een doorlooptijd.**
- `vragen.items[4].antwoord`: een "vanaf"-bedrag en een gebruikelijke bandbreedte per module (bedragen in te vullen door Preludens; ik verzin ze niet).
- Een nieuwe vraag in `vragen.items`: "Hoe lang duurt het?", met de doorlooptijd en de tijd die het de klant kost (meelezen door FG en juridische zaken).

**3. Maak het bewijs waar en concreet.**
- `bewijs.alineas[1]` (NNVO): haal "die mensen begrijpen en toepassen" weg, of vervang het door wat er echt gebeurt ("samen met NNVO ontwikkelen we…"). Zet het pas in de verleden tijd als het verhaal gepubliceerd is en het citaat een naam heeft.
- `bewijs.alineas[0]` (Maria): leg in vier woorden uit wat USM is, noem dat Maria op de servicedesk van een gemeente werkt, en geef de vorm (vijf MicroGames, met de duur per game als die kort is). Kijk of "korte modules" in `hero.lead` en `probeer.lead` te verenigen is met de 120 minuten op de verhaalpagina.
- Heb je een afrondingscijfer uit eigen werk (punt 12 in het plan)? Zet het hier.

**4. Laat zien wat "apart bij te werken" betekent, en geef de CISO zijn antwoord.**
- `stappen.items[2].tekst`: zeg dat de klant teksten zelf aanpast in Prepo en een nieuw SCORM-bestand downloadt. Zo staat het op `prepo/index.md`, en het beantwoordt het bezwaar "over een half jaar is het beleid anders".
- `vragen.items[3].antwoord`: zet erbij dat afronding per medewerker via SCORM in het eigen LMS terechtkomt (laat eerst bevestigen of dat klopt), en link "Prepo" naar `/prepo/`.
- `vragen.items[1].antwoord` ("zelf maken met AI"): noem wat Preludens levert dat een auteurstool niet levert (verhaal- en spelontwerp, testen met medewerkers, beheer in Prepo), in plaats van te stellen dat een tool "geen situatie levert die klopt".
- `vragen.items[2].antwoord` (AI Act): één feitelijke zin over de norm sinds 27 juli 2026 (maatregelen die AI-geletterdheid ondersteunen, geen certificaat vereist), zonder te zeggen dat de module daaraan voldoet.

**5. Kies tussen beleid en onboarding, en houd die keuze vol.**
- `rollen[0].sub`: niet *"Je richt de onboarding in"*, maar zoiets als "Je moet het beleid laten landen". Dezelfde lijn in `rollen[0].reactie` en `rollen[0].titel`.
- `hero.lead`: "voor nieuwe en huidige medewerkers" in plaats van alleen *"klaar voor de onboarding van nieuwe mensen"*.
- `formulier.lead`: "Vertel welk beleid of welke situatie je wilt laten landen", en leg in een halve zin uit wat een moduleopzet is en dat die niets kost (als dat zo is).
- `rollen[0].vraag.antwoorden[0].reactie`: haal *"Daar is een module voor"* weg.
- Sjabloon `pagina-d.html` regel 76: haal `| downcase` weg, of zet de labels in de yml zelf in de juiste vorm. Nu staat er "hr of l&d".

### Kleinere punten

- `rollen[1].alineas[0]`: maak er *"niet alleen uit een jaarlijkse training"* van.
- `rollen[1].titel` stelt een vraag die niet wordt beantwoord. Gebruik hem als dilemma (zie punt 1), of beantwoord hem in de alinea.
- `rollen[0].alineas[0]`: zet een bronregel onder de cijfers (CBS 2025; Newcom AI-Monitor, juli 2026).
- `rollen[*].beeld` en `stappen.items[*].beeld`: zes van de negen inhoudsbeelden zijn Engelse USM-schermen. Ook als de probeer-oplossing er komt, haal het aantal omlaag.
- Paginatitel (`title` in `oplossingen/onboarding-modules/index.md`): "Onboarding in losse modules" past niet bij een kop over AI-beleid. Pagina en slug blijven zoals ze zijn (dat staat in het plan), maar de `<title>` kan mee.
- `formulier.noot`: noem een reactietermijn.
