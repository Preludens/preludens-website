# Agent-instructies (Preludens website)

Centrale plek voor Cursor-agents die aan deze Jekyll-site werken.

## Projectregels

Zie `.cursor/rules/`:

| Regel | Wanneer |
|-------|---------|
| `preludens-visual-style.mdc` | Altijd — huisstijl, tokens, tone of voice (`design.MD`) |
| `github-pages-workflow.mdc` | Altijd — PR/merge naar `main`, live links in eindverslag |
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
