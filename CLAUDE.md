# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A [Slidev](https://sli.dev) presentation deck for the **WeAreDevelopers World Congress 2026** session "Evolving the Developer Experience in the Age of AI" (Berlin Mainstage, Friday July 10, 2026). The deck is published to GitHub Pages on every push to `main`.

There is no application backend — `slides.md` *is* the artifact. Everything else exists to render, theme, or deploy it.

## Commands

```bash
npm install            # install (see "min-release-age caveat" below)
npm run dev            # localhost:3030, hot reload, opens browser
npm run build          # static site → dist/
npm run export         # PDF export → slides-export.pdf
```

There are no tests, no linter, and no typecheck step. `vite.config.ts` is the only TypeScript file; everything else is markdown/Vue handled by Slidev.

### min-release-age caveat

The user's global npm config sets `min-release-age` to quarantine fresh packages. The SAP theme (`@jungsap/slidev-theme-sap`) is published frequently and a brand-new release may be inside the quarantine window. If `npm install` fails with `ENOVERSIONS`, use `npm install --min-release-age=0` for that install only. CI bypasses this with `npm ci --prefer-online` (see [deploy.yml](.github/workflows/deploy.yml#L28)).

## Architecture

### The three files that matter

1. **[slides.md](slides.md)** — the deck. Each slide is a markdown block separated by `---`, with YAML frontmatter selecting a layout (`cover`, `agenda`, `divider`, `title-text`, `q-and-a`, `thank-you`) and passing layout-specific props (e.g. `presenter`, `partnerLogo`, `items`). Speaker-notes go inside `<!-- ... -->` after slide content.
2. **[event.yaml](event.yaml)** — event-wide metadata (date, venue, hashtag, `defaultPresenter`, deck-wide `classification`). Layouts read this when a slide omits the field. Edit here, not in each slide.
3. **[vite.config.ts](vite.config.ts)** — wires `@rollup/plugin-yaml` (for `event.yaml` imports), `sapThemeAssets()` (theme's bundled `public/` — SAP logo, anvil decorations, presenter photos), and registers `ui5-*` as custom elements so the Vue compiler doesn't warn on embedded UI5 web components.

### The theme is the framework

`@jungsap/slidev-theme-sap` provides:
- ~45 layouts (selected via `layout:` frontmatter)
- Components like `<Bio presenter="..."/>` and `<Speaker :presenters="[...]"/>` that resolve against a curated presenter roster bundled in the theme
- SAP brand tokens and assets

When a layout, presenter, or component is unfamiliar, **look it up in `node_modules/@jungsap/slidev-theme-sap/`** rather than guessing — the theme owns those concerns, this repo just consumes them. The current pinned major is `^0.5.0`; the `classification:` field on `event.yaml` requires `>= 0.5.2`.

### Partner / per-event assets

This repo's [public/](public/) is intentionally minimal — it's *additive* to the theme's bundled assets. Currently it holds [public/partners/wad-logo.svg](public/partners/wad-logo.svg) (referenced as `partnerLogo: /partners/wad-logo.svg` on the cover slide). Put event-specific overrides here; never duplicate theme assets.

## Deployment

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds on push to `main` and publishes to GitHub Pages. Note the build step passes `--base /${{ github.event.repository.name }}/` so assets resolve under the project-pages subpath — locally `dev`/`build` don't need this and would break if you set it.
