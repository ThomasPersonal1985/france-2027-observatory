# France 2027 Election Observatory

A portable, zero-monthly-cost static website for non-partisan tracking of the 2027 French presidential election.

## Included in this update
- 16 candidate records with campaign status distinguished from official ballot qualification, plus 16 candidate dossier folders under `profiles/`.
- Candidate directory and a sourced policy comparison, including the 2026 pensions debate positions.
- Restored archive of 19 individual first-round poll records plus a separate rolling-average snapshot. Different candidate line-ups are labelled and not blended.
- 20 linked French- and English-language news reports.
- Official election timeline and sources/methodology.
- New “Elections for dummies” guide written in plain English for first-time voters.
- The website now loads `data/election-data.json` as its source of truth instead of hard-coding the data into `app.js`.

## Deploying updates
The site is already deployed as a Cloudflare Worker connected to the GitHub repository `france-2027-observatory`. To publish this update, replace the repository files with the matching files in this package, preserving the `data/` folder. Commit the changes to the `main` branch. Cloudflare should build and deploy automatically through the existing GitHub connection. Do not create a second Worker or a new project.

Files to replace: `index.html`, `app.js`, `styles.css`, `README.md`, and `data/election-data.json`.

## Custom domain cost
The existing `*.workers.dev` address is free. Cloudflare does not provide free registration of a custom domain name. You can connect a domain you already own at no extra Cloudflare charge on the Free plan, but you still pay the domain registrar's annual renewal fee. Cloudflare Registrar sells domains at cost where supported. HTTPS is handled automatically after DNS/domain verification.

## Research and caveats
- Poll rows were transcribed from the project research workbook's Vote Public series. They include the candidate configuration used in that record; check the original poll notice before comparing across surveys. Missing candidates are not zero. The rolling-average snapshot is a separate measure and is not a poll.
- The news archive contains 20 linked articles. A link to a rolling live coverage page is labelled as such and is not represented as a single article.
- Candidate status can change. “Declared” is not the same as having 500 validated sponsorships or being on the final ballot.
- Official election dates shown here follow the government calendar as of 8 November 2026. The decree convening voters and any later official updates take precedence.

Official calendar: https://www.info.gouv.fr/actualite/election-presidentielle-2027
