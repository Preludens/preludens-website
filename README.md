# Preludens website

Jekyll-site voor [preludens.nl](https://preludens.nl), gebouwd voor deploy via **GitHub Pages**.

## Lokaal draaien

```bash
bundle install
bundle exec jekyll serve
```

Open [http://localhost:4000/preludens-website/](http://localhost:4000/preludens-website/).

De site staat op GitHub Pages onder **https://preludens.github.io/preludens-website/** (`baseurl: /preludens-website`). Bij een custom domain (`preludens.nl`) zet de deploy-workflow `baseurl` automatisch leeg.

## Deploy naar GitHub Pages

1. Push deze repository naar GitHub.
2. Ga naar **Settings → Pages**.
3. Kies **Source: GitHub Actions** (niet “Deploy from branch”).
4. Merge naar `main` — de workflow `.github/workflows/pages.yml` bouwt en publiceert automatisch.

### Custom domain

Het bestand `CNAME` wijst naar `preludens.nl`. Stel in GitHub Pages onder **Custom domain** hetzelfde domein in en configureer bij je DNS-provider:

| Type  | Naam | Waarde              |
|-------|------|---------------------|
| A     | @    | 185.199.108.153     |
| A     | @    | 185.199.109.153     |
| A     | @    | 185.199.110.153     |
| A     | @    | 185.199.111.153     |
| CNAME | www  | `<gebruiker>.github.io` |

(Vervang CNAME door je GitHub Pages-host als je alleen `www` gebruikt.)

## Structuur

- `index.md` — Home
- `play/`, `diensten/`, `team/`, `impact/`, `verhalen/`, `contact/` — overige pagina’s
- `_layouts/`, `_includes/` — templates
- `content-structuur-en-copy.md` — storytelling- en copyrichtlijnen voor alle pagina's
- `assets/css/main.scss` — styling (kleurenpalet in CSS-variabelen)

## Kleuren aanpassen

Het palet staat bovenaan `assets/css/main.scss` onder `:root`. Pas de HEX-waarden aan zodat ze exact overeenkomen met jullie Canva-huisstijl.
## Agent-workflow (Cursor)

Zie **`AGENTS.md`** voor agent-instructies (o.a. beeldgeneratie via `/Users/jw/programming/creatievemaan/tools`).

Projectregels in `.cursor/rules/`:

- **`github-pages-workflow.mdc`** — PR's na afronding **mergen naar `main`**; elk eindverslag bevat live links
- **`post-task-design-review.mdc`** — design/UX/UI-review bij expliciete visuele QA; verbeteringen binnen de Preludens-huisstijl (`assets/css/main.scss`)

## Online Markdown editor (Decap CMS)

De repository bevat nu een eenvoudige online editor op:

- `https://preludens.nl/admin/`
- `https://preludens.github.io/preludens-website/admin/`

Bestanden:

- `admin/index.html` - Decap CMS app shell
- `admin/config.yml` - collections, GitHub backend en media-instellingen
- `admin/preview.js` - basis preview templates
- `cloudflare/decap-oauth-worker/` - OAuth proxy voor GitHub login

### OAuth bridge deployen (Cloudflare)

```bash
cd /Users/jw/programming/preludens/preludens-website/cloudflare/decap-oauth-worker
npm install
wrangler login
wrangler secret put GITHUB_CLIENT_ID
wrangler secret put GITHUB_CLIENT_SECRET
wrangler deploy
```

Gebruik een workers.dev URL met dit patroon:

- Base URL: `https://preludens-decap-oauth.preludens-decap-oauth.workers.dev`
- Callback URL: `https://preludens-decap-oauth.preludens-decap-oauth.workers.dev/callback`

### GitHub toegang voor editors

Voeg een editor toe als collaborator op de repository:

```bash
gh auth login
gh api -X PUT /repos/preludens/preludens-website/collaborators/Daan-Groen -f permission=push
```

