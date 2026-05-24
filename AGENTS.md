# AGENTS.md

## Cursor Cloud specific instructions

This is a Jekyll static site (Ruby/Bundler). No database, no Node.js, no Docker required.

### Prerequisites

- Ruby 3.3 (compiled from source at `/usr/local/bin/ruby`)
- Bundler 4.0.12 (`gem install bundler -v 4.0.12`)

### Key commands

| Action | Command |
|--------|---------|
| Install dependencies | `bundle install` |
| Build site | `bundle exec jekyll build` |
| Dev server | `bundle exec jekyll serve --host 0.0.0.0` |
| Dev server URL | `http://localhost:4000/preludens-website/` |

### Notes

- The `baseurl` is `/preludens-website` in local dev (matches the GitHub Pages project path). All page URLs include this prefix.
- The gem install directory is `/usr/local/lib/ruby/gems/3.3.0` — ensure it's writable by the running user (ownership was set to `ubuntu` during setup). If `bundle install` fails with permission errors, run `sudo chown -R $(whoami) /usr/local/lib/ruby/gems/3.3.0`.
- There are no automated tests or lint scripts configured in this project. Validation is done via `bundle exec jekyll build` (exit code 0 = success).
- Live-reload is built-in: the dev server watches for file changes and rebuilds automatically.
