---
name: "Preludens"
description: "Leren als verkennen met rust, richting en diepgang"
version: "1.0.0"
colors:
  harvestOrange: "#E97C2C"
  prussianBlue: "#011C42"
  regalNavy: "#123763"
  duskBlue: "#37547E"
  sandyBrown: "#FCA653"
  primary: "#123763"
  primaryLight: "#37547E"
  primaryDark: "#011C42"
  secondary: "#37547E"
  accent: "#E97C2C"
  success: "#37547E"
  warning: "#FCA653"
  danger: "#E97C2C"
  info: "#FCA653"
  background: "#F7F3EF"
  surface: "#ffffff"
  surfaceAlt: "#EEF2F7"
  text: "#123763"
  textMuted: "#37547E"
  textSubtle: "#37547E"
  border: "rgba(18, 55, 99, 0.16)"
  borderFocused: "#E97C2C"
  accentSoft: "rgba(252, 166, 83, 0.18)"
  accentWarm: "#E97C2C"
  accentWarmSoft: "#FCA653"
  accentBlueGray: "#37547E"
  backgroundSection: "#ffffff"
  backgroundHero: "#011C42"
typography:
  fontHeading: "Outfit, system-ui, sans-serif"
  fontBody: "DM Sans, system-ui, sans-serif"
  fontMono: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
spacing:
  unit: 4
rounded:
  none: "0"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  full: "999px"
shadows:
  none: "none"
  xs: "0 1px 2px rgba(26, 18, 48, 0.04)"
  sm: "0 4px 24px rgba(26, 18, 48, 0.06)"
  md: "0 12px 40px rgba(26, 18, 48, 0.08)"
  lg: "0 16px 48px rgba(26, 18, 48, 0.12)"
  xl: "0 24px 64px rgba(26, 18, 48, 0.16)"
  inner: "inset 0 1px 0 rgba(255,255,255,0.4)"
motion:
  duration-fast: "150ms"
  duration-normal: "200ms"
  duration-slow: "300ms"
---

## Overview

Preludens is a brand with the tagline "Leren als verkennen met rust, richting en diepgang".
Mission: Preludens ontwikkelt game-based leerervaringen waarin mensen actief ontdekken, onderzoeken en groeien.
Vision: Complexe leerprocessen helder, menselijk en betekenisvol maken zonder diepgang te verliezen.
Target audience: Organisaties en professionals die willen leren via praktijkgerichte, begeleide ontdekking.
Brand archetype: Explorer met Sage-kwaliteiten
Personality traits: Nieuwsgierig, Avontuurlijk, Rustig, Gelaagd, Richtinggevend, Innovatief.

## Colors

Brand palette (CSS: `assets/css/main.scss`):

| Token | Hex | Gebruik |
|-------|-----|---------|
| harvest-orange | `#E97C2C` | Hoofdaccent, links, primaire knoppen |
| prussian-blue | `#011C42` | Hero-achtergrond, footer, quote-blokken |
| regal-navy | `#123763` | Koppen, donkere UI (`--color-ink`) |
| dusk-blue | `#37547E` | Bodytekst, secundaire accenten (`--color-ink-soft`) |
| sandy-brown | `#FCA653` | Warm accent, labels, hero-eyebrows (`--color-gold`) |

Use semantic color tokens. Never hardcode hex values in components.
- **primary**: `#123763` — use as `var(--color-ink)` / `var(--hs-color-primary)`
- **primaryLight**: `#37547E` — use as `var(--color-ink-soft)`
- **primaryDark**: `#011C42` — use as `var(--color-prussian-blue)`
- **secondary**: `#37547E` — use as `var(--color-lilac)`
- **accent**: `#E97C2C` — use as `var(--color-coral)`
- **success**: `#37547E`
- **warning**: `#FCA653`
- **danger**: `#E97C2C`
- **info**: `#FCA653`
- **background**: `#F7F3EF` — use as `var(--color-cream)`
- **surface**: `#ffffff`
- **surfaceAlt**: `#EEF2F7` — use as `var(--color-cream-dark)`
- **text**: `#123763`
- **textMuted**: `#37547E`
- **textSubtle**: `#37547E`
- **border**: `rgba(18, 55, 99, 0.16)`
- **borderFocused**: `#E97C2C`
- **accentSoft**: `rgba(252, 166, 83, 0.18)`
- **accentWarm**: `#E97C2C`
- **accentWarmSoft**: `#FCA653`
- **accentBlueGray**: `#37547E`
- **backgroundSection**: `#ffffff`
- **backgroundHero**: `#011C42`

## Typography

- Headings: Outfit, system-ui, sans-serif
- Body: DM Sans, system-ui, sans-serif
- Monospace: JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace
- Base size: 17px, scale ratio: 1.2

- **h1**: size 3xl, weight extrabold, line-height tight
- **h2**: size 2xl, weight bold, line-height tight
- **h3**: size xl, weight semibold, line-height tight
- **h4**: size lg, weight semibold, line-height normal
- **body**: size base, weight normal, line-height normal
- **caption**: size sm, weight medium, line-height normal

## Layout

Spacing unit: 4px. Scale: 0, 4, 8, 12, 16, 24, 40, 64, 96px.
Use consistent whitespace. Prefer the spacing scale over arbitrary values.

## Elevation & Depth

- **shadow-none**: `none`
- **shadow-xs**: `0 1px 2px rgba(26, 18, 48, 0.04)`
- **shadow-sm**: `0 4px 24px rgba(26, 18, 48, 0.06)`
- **shadow-md**: `0 12px 40px rgba(26, 18, 48, 0.08)`
- **shadow-lg**: `0 16px 48px rgba(26, 18, 48, 0.12)`
- **shadow-xl**: `0 24px 64px rgba(26, 18, 48, 0.16)`
- **shadow-inner**: `inset 0 1px 0 rgba(255,255,255,0.4)`

## Shapes

- **radius-none**: `0`
- **radius-sm**: `8px`
- **radius-md**: `16px`
- **radius-lg**: `24px`
- **radius-xl**: `32px`
- **radius-full**: `999px`

## Components

### button-primary
- backgroundColor: `{colors.primary}`
- textColor: white or `{colors.surface}` based on contrast
- rounded: `16px`
- padding: 12px 20px

### button-secondary
- backgroundColor: transparent
- textColor: `{colors.primary}`
- border: 1px solid `{colors.border}`

### card
- backgroundColor: `{colors.surface}`
- border: 1px solid `{colors.border}`
- rounded: `24px`
- shadow: `0 4px 24px rgba(26, 18, 48, 0.06)`

## Surfaces / Vlakken

Surface blocks ("vlakken") use a 1px primary border with a 0px accent-colored top border and a hard offset shadow (0 6px 12px in primary). Accent top colors rotate through: accentWarm, accent, secondary.

## Do's and Don'ts

### Logo
- DON'T: Niet uitrekken of vervormen
- DON'T: Niet plaatsen op drukke achtergronden zonder contrast
- DON'T: Niet combineren met willekeurige decoratieve effecten
### Voice – Do
- Gebruik rustige, duidelijke taal met inhoudelijke diepgang
- Nodig de lezer uit om te ontdekken in plaats van te zenden
- Behoud overzicht en structuur in opbouw en visuele hiërarchie
- Verbind verhalen met richting, begeleiding en voortgang
### Voice – Don't
- Vermijd schreeuwerige, drukke of hype-gedreven formuleringen
- Gebruik geen generieke corporate clichés
- Vermijd belerende of afstandelijke toon
- Maak het leerproces niet chaotisch of stuurloos

## Voice & Tone

Tone: Helder, onderzoekend, menselijk, professioneel en niet schreeuwerig.
Preferred words: verkennen, ontdekken, richting, diepgang, rust, begeleiding
Avoid words: disruptief, game-changer, snelle win, one-size-fits-all

## Imagery

Grote, open en gelaagde werelden met subtiele menselijke aanwezigheid; rustige composities; altijd een route/pad/koers als betekenislaag.
AI prompt: vast landscape, subtle human figure, calm atmosphere, layered depth, abstract route line or waypoint overlay, sunrise orange accents, deep blue tones, minimal yet meaningful composition
AI negative prompt: busy corporate office, cheesy stock photo, chaotic composition, childish game aesthetic, over-saturated, cluttered UI

## Motion

- duration-fast: 150ms
- duration-normal: 200ms
- duration-slow: 300ms
- easing-default: cubic-bezier(0.4, 0, 0.2, 1)
- easing-in: cubic-bezier(0.4, 0, 1, 1)
- easing-out: cubic-bezier(0, 0, 0.2, 1)
- easing-spring: cubic-bezier(0.34, 1.56, 0.64, 1)

## Projectregels (preludens-website)

- Kernpalette: `#E97C2C` (harvest-orange), `#011C42` (prussian-blue), `#123763` (regal-navy), `#37547E` (dusk-blue), `#FCA653` (sandy-brown).
- Gebruik in implementatie altijd bestaande CSS-tokens uit `assets/css/main.scss` (geen losse hex-waarden).
- Behoud de merktoon: speels, helder, rustig; vermijd drukke of generieke corporate stijl.
- Hero- en bannerbeelden volgen het principe: grote wereld, kleine mens, subtiele route/koerslaag.
- Oranje is accentkleur voor richting/energie; donkerblauw draagt rust/diepte; gebruik accenten spaarzaam.
- Houd layouts ruim, scanbaar en gelaagd; geen visuele overdaad.
- Minimaal toetsen op desktop en mobiel bij visuele wijzigingen.
