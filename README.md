# Evolving the Developer Experience in the Age of AI

Slides for the [WeAreDevelopers World Congress 2026](https://www.wearedevelopers.com/world-congress/agenda/sessions/evolving-the-developer-experience-in-the-age-of-ai-1239789) session — **Friday, July 10, 09:40–10:10 CET, Mainstage, Berlin**.

Speakers: [Thomas Jung](https://github.com/jung-thomas) & Shilpa Shankar (SAP Developer Advocacy).

## Run locally

```bash
npm install
npm run dev          # localhost:3030, hot reload
npm run build        # static site → dist/
npm run export       # PDF export → slides-export.pdf
```

> **First-time install on a machine with `min-release-age` configured?** If `npm install` fails with `ENOVERSIONS`, the SAP theme has been published more recently than your quarantine window allows. Override per-install: `npm install --min-release-age=0`. After 24 hours from a theme publish, no flag is needed.

## Stack

- [Slidev](https://sli.dev) — presentation framework
- [`@jungsap/slidev-theme-sap`](https://www.npmjs.com/package/@jungsap/slidev-theme-sap) — SAP-branded theme (curated presenter roster, brand tokens, 45 layouts)

## Deployment

Pushed to `main` → built and deployed to GitHub Pages via the workflow in `.github/workflows/deploy.yml`. Live URL appears in the repo settings under **Pages**.

## License

Slides content is © the authors. The SAP brand assets are SAP property; use per SAP brand guidelines.
