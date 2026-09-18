# FAA Part 107 marketing site context

- Service: `GLB-0002` / FAA Part 107
- Website repo: `MCYJ/faa-part-107-web`
- Canonical production URL: `https://mcyj.github.io/faa-part-107-web/`
- Android package / iOS bundle: `app.mcyj.examprep.glb0002`
- Google Play: `https://play.google.com/store/apps/details?id=app.mcyj.examprep.glb0002`
- App Store: `https://apps.apple.com/us/app/faa-part-107/id6795569826`
- Store verification: both exact product pages returned public HTTP 200 on 2026-09-18.
- Language: English (`en-US`). The UAG knowledge test and FAA eligibility require English comprehension; no thin machine-localized pages are published.
- App/service source remains read-only. This repository owns only the static marketing website.
- Product claims are limited to the current listing: 500 independently authored questions, explanations, practice tests, progress, saved items, and optional Lock Quiz.
- Do not state an app subscription price. Store-displayed localized pricing controls.
- Official sources: FAA Become a Certificated Remote Pilot, Remote Pilot sUAS ACS, Airman Testing/Supplements, and FAA operations guidance.
- Current official facts checked 2026-09-18: initial test is UAG; applicant must be at least 16 to receive the certificate; certificate is permanent unless revoked; aeronautical knowledge recency requires online training within the previous 24 calendar months.
- The site is independent and must not imply FAA affiliation, endorsement, certification, or access to live exam questions.

## Work log

- 2026-09-18: Created the independent website workspace, verified both live Store URLs, and locked the official-source and claim boundaries before implementation.
- 2026-09-18: Published 14 original English study guides plus landing, FAQ, privacy, terms, support, contact, sitemap, robots and 404 pages. Local build/check passed for 23 HTML files and 21 indexable routes.
- 2026-09-18: GitHub repository created as Public and GitHub Pages deployment run `35349921037` passed. Production QA confirmed all 21 sitemap routes and required assets return HTTP 200, an unknown route returns HTTP 404, and the deployed desktop layout renders correctly.
- 2026-09-18 design refinement: applied `word-break: keep-all` with safe overflow handling across body text and controls so Korean/localized copy does not split awkwardly; URLs and contact strings retain emergency wrapping.
- 2026-09-18 Store badge refinement: normalized Google Play and App Store controls to a shared 194×75 frame while preserving official artwork ratios; local build and check passed.
