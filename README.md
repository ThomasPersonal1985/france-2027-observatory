# France 2027 Election Observatory

A portable, zero-monthly-cost static website starter.

## What is included
- Mobile-friendly dashboard with candidate directory, policy matrix, polling archive, news archive, official timeline and source register.
- Structured source data in `data/election-data.json`.
- JSON import validation and download tools.
- No API keys, paid services, database or build step required.
- No fabricated polling/news entries: empty datasets are clearly labelled.

## Publish free with Cloudflare Pages
1. Create a free GitHub account at https://github.com/ if you do not already have one.
2. Create a new **public** repository, e.g. `france-2027-observatory`.
3. Upload all files and folders from this project, preserving `data/election-data.json`.
4. Create a free Cloudflare account at https://dash.cloudflare.com/.
5. Go to **Workers & Pages → Create → Pages → Connect to Git**.
6. Select the GitHub repository.
7. Framework preset: **None**. Build command: leave blank. Build output directory: `/` (or `.` if required by the UI).
8. Deploy. Cloudflare gives you a permanent `*.pages.dev` URL at no monthly cost.
9. Whenever you update the research data, commit the changed `data/election-data.json` to GitHub. Cloudflare automatically rebuilds and publishes the update.

## Updating research from ChatGPT
1. Ask ChatGPT to prepare a revised `election-data.json` using this project's schema.
2. In the live website, use **Update research data → Choose updated JSON** to validate and download it.
3. Replace `data/election-data.json` in GitHub with the downloaded file.
4. Cloudflare deploys the updated site automatically.

This is a deliberate manual approval workflow. ChatGPT does not silently write to your GitHub repository. Every published change is visible in Git history.

## Data model
- `candidates`: public campaign status, formal candidacy and official ballot status kept separate.
- `policy_positions`: one candidate/topic/claim per record, with date, evidence type and source.
- `polls`: one poll per record, including pollster, fieldwork, sample, scenario, results and source.
- `news`: one article per record, with publication date, publisher, language, summary and source.
- `events`: official dates and campaign milestones.
- `sources`: source directory.
- `debates`: event and participant records.
- `updates`: data change log.

## Important
The initial calendar values reflect the government calendar shown in the research snapshot dated 8 November 2026. Re-check the official government page for updates. Candidate debate participation is not proof of official ballot qualification. The initial polling and news arrays are empty by design until poll/article-level source records are added.

Official calendar: https://www.info.gouv.fr/actualite/election-presidentielle-2027
