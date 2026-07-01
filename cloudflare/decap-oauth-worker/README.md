# Decap OAuth Worker

This worker provides the OAuth bridge for Decap CMS on a static GitHub Pages site.

## 1) Create the GitHub OAuth App

In GitHub Settings -> Developer settings -> OAuth Apps -> New OAuth App:

- Application name: `Preludens Decap CMS`
- Homepage URL: `https://preludens.nl`
- Authorization callback URL: `https://preludens-decap-oauth.preludens-decap-oauth.workers.dev/callback`

After creating the app, copy the Client ID and generate a Client Secret.

## 2) Install dependencies

```bash
cd /Users/jw/programming/preludens/preludens-website/cloudflare/decap-oauth-worker
npm install
```

## 3) Configure secrets

Set runtime secrets in Cloudflare:

```bash
npx wrangler secret put GITHUB_CLIENT_ID
npx wrangler secret put GITHUB_CLIENT_SECRET
```

Optional local dev file:

```bash
cp .dev.vars.example .dev.vars
```

## 4) Deploy the worker

```bash
npx wrangler deploy
```

If this is your first Worker deployment, first register a workers.dev subdomain in Cloudflare Workers onboarding.

## 5) Match Decap config

`admin/config.yml` must point to:

```yaml
backend:
  name: github
  base_url: https://preludens-decap-oauth.preludens-decap-oauth.workers.dev
  auth_endpoint: /auth
```
