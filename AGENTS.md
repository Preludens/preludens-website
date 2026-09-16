# Agent-instructies (Preludens website)

Centrale plek voor Cursor-agents die aan deze Jekyll-site werken.

## Werkafspraken (altijd)

- **Doorzoek nooit de harde schijf.** Blijf in deze repository. Zoek, scan of browse niet op `/`, `$HOME` of andere mappen op de machine. Gebruik alleen paden die de gebruiker of deze projectbestanden expliciet geven (zoals de image-generator hieronder).
- **Werk op `main`.** Maak geen losse feature branches en open geen PR's, tenzij de gebruiker daar expliciet om vraagt. Commit en push klaar werk naar `main`.
- **Pull eerst.** Voordat je begint: `git checkout main && git pull origin main`, zodat je de nieuwste versie hebt.
- **Check de lokale server.** Voordat je begint: controleer of Jekyll draait op http://localhost:4000/preludens-website/. Staat hij uit, start hem (`bundle exec jekyll serve`) voordat je verder werkt.

Live zetten naar `production` doe je **niet** uit jezelf — alleen als de gebruiker dat vraagt.

## Tekst verbeteren

Als de gebruiker vraagt om tekst te verbeteren, volg `.cursor/rules/tekst-verbeteren.mdc`:

- Goede **SEO- en AI-vindbaarheid** in structuur (koppen, eerste alinea, front matter) — niet in de toon.
- **Dikgedrukt** alleen op scanbare kernpunten, niet op hele zinnen of zoekwoorden.
- **Tone of voice** van Preludens aanhouden: helder, onderzoekend, menselijk, professioneel. De tekst mag niet klinken alsof hij voor SEO of AI is geschreven.

## Projectregels

Zie `.cursor/rules/`:

| Regel | Wanneer |
|-------|---------|
| `agent-werkafspraken.mdc` | Altijd — schijf niet doorzoeken, op `main` werken, eerst pullen, lokale server checken |
| `preludens-visual-style.mdc` | Altijd — huisstijl, tokens, tone of voice (`design.MD`) |
| `tekst-verbeteren.mdc` | Altijd — bij tekstverbetering: SEO/AI in de structuur, spaarzaam vet, Preludens-toon |
| `github-pages-workflow.mdc` | Altijd — werken op `main`, live deploy via `production`, live links in eindverslag |
| `post-task-design-review.mdc` | Alleen bij expliciete visuele QA of browser-review |

Verder: `design.MD` (visueel), `content-structuur-en-copy.md` (copy), `README.md` (lokaal draaien & deploy).

## Beelden genereren

Voor **nieuwe hero-afbeeldingen, banners of andere AI-gegenereerde assets** gebruik de lokale image-generator:

**Pad:** `/Users/jw/programming/creatievemaan/tools`

Volledige documentatie: `README.md` in die map.

### Snel starten

```bash
cd /Users/jw/programming/creatievemaan/tools
npm install && npm start
# UI: http://localhost:3467
```

`.env` met `REPLICATE_API_TOKEN` moet aanwezig zijn (zie `.env.example` in die map).

### Agent-API (server moet draaien)

```bash
curl -X POST http://localhost:3467/api/images/generate-to-file \
  -H 'Content-Type: application/json' \
  -d '{
    "prompt": "Ultrawide landscape hero for Preludens — open layered world, subtle human presence, path/route element, calm exploratory mood",
    "model": "google/nano-banana-pro",
    "aspectRatio": "21:9",
    "modelSettings": { "resolution": "2K", "output_format": "png" },
    "outputPath": "/Users/jw/programming/preludens/preludens-website/assets/images/hero/voorbeeld-hero.png"
  }'
```

Alternatief: `POST /api/images/generate` (base64 in response) of de web-UI op poort 3467.

### Richtlijnen voor Preludens-beelden

- Sluit aan bij `design.MD` en `preludens-visual-style.mdc`: avontuurlijk, rustig, gelaagd, mensgericht.
- Hero/banners: open wereld, subtiele menselijke aanwezigheid, route/pad-element.
- Sla gegenereerde bestanden op onder `assets/images/` (hero, team, clients, etc.).
- Gebruik bestaande CSS-tokens; voeg geen ad-hoc kleuren toe in prompts tenzij nodig voor het beeld zelf.
