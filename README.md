# max-ta.com

Personal portfolio of **Max Tahmasebi** — Tech Lead & Senior Full-Stack
Software Engineer in Munich. A single-page Angular app with smooth-scroll
sections (hero, about, experience, projects, skills, contact), dark mode by
default with a light toggle, hand-written SCSS on CSS custom properties, and
no CSS framework, fonts, or trackers. Built to WCAG 2.1 AA, with full SEO
metadata, schema.org Person markup, and an [`llms.txt`](public/llms.txt) so AI
crawlers get an accurate professional summary. The first version of this site
(Angular 12, also built by me) lives on in the git history.

**Live: [max-ta.com](https://max-ta.com)**

![The site hero section in dark mode](docs/screenshot.png)

## Tech stack

- [Angular 21](https://angular.dev) — standalone components, signals, zoneless
  change detection, `@if`/`@for` control flow
- SCSS with CSS custom properties for dark/light theming (no framework)
- Optimized WebP photography, system font stack, ~43 kB transferred JS
- Vitest for unit tests

## Local development

```bash
npm install
npm start        # dev server at http://localhost:4200
npm run build    # production build → dist/masoud-tahmasebi-spa/browser
npm test         # unit tests (vitest)
```

Deploys as a static site; point your host (e.g. Cloudflare Pages) at the
`dist/masoud-tahmasebi-spa/browser` output directory.

## Suggested GitHub repo settings

**Description:**

> Personal portfolio of Max Tahmasebi — Tech Lead & Senior Full-Stack Engineer.
> Angular 21, hand-written SCSS, WCAG 2.1 AA, AI-crawler friendly. Live at max-ta.com

**Topics:** `portfolio` `angular` `typescript` `scss` `accessibility` `wcag`
`seo` `cloudflare-pages` `personal-website`
