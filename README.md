# France 2027 | Election Intelligence Observatory

A zero-monthly-cost, static research website for the 2027 French presidential election.

## Visual identity: Election Intelligence Centre
- Deep navy / charcoal analytical interface
- Electric cyan for data and navigation
- Amber for deadlines and evidence flags
- Compact dashboard cards, polling bars, structured tables and expandable candidate dossiers
- Responsive desktop and mobile layout

## Project structure

```text
france-2027-observatory/
├── index.html
├── app.js
├── styles.css
├── README.md
├── data/
│   └── election-data.json
└── profiles/
    ├── marine-le-pen/profile.md
    ├── jean-luc-melenchon/profile.md
    └── ... (16 individual dossiers)
```

## Candidate research

All 16 tracked figures have expanded dossiers with:
- Biography and political career
- Political record and party context
- Main policy themes
- Dated, attributable policy positions
- Programme publication status
- Feasibility questions and open research gaps
- Candidate-specific source trails

The dossiers deliberately distinguish:
1. Declared candidacy
2. Public campaign activity
3. Party or primary status
4. Written programme publication
5. Sponsorship collection and validation
6. Official ballot qualification

A candidate taking part in a debate is not proof of official ballot qualification. The seven-way MEDEF debate covered in this edition took place on **27 August 2026**. It is not described as a June debate.

## Polling and news

- Individual polls are stored separately from polling averages.
- The archive includes the workbook's historical poll records plus the latest indexed Harris Interactive poll (fieldwork 3–5 November 2026; n=2,101).
- The rolling-average series remains a separately labelled Vote Public snapshot. It is not recalculated from mixed poll archives.
- Candidate configurations vary between polls. A missing candidate means not tested or not reported, never zero.
- News entries have a publisher, language, publication date, summary and source link. The archive is a dated research snapshot, not a live news feed.

## Official election calendar baseline

The French government's published calendar lists:
- Ordinary voter-registration deadline: 12 March 2027 (exceptions may apply)
- Sponsorship closure: 12 March 2027 at 18:00
- At least 500 valid sponsorships, from at least 30 departments or overseas territories; no more than 50 from any one territory
- Official candidate list: by 26 March 2027
- Official first-round campaign: 5 April 2027
- First round: 18 April 2027 (17 April in specified overseas territories)
- Second round: 2 May 2027 (1 May in specified overseas territories)

The decree convening voters and some procedural details remain provisional until formally published. Always re-check the government page.

## Sources and editorial method

Priority order:
1. Official institutions, Constitutional Council, government and candidate/party documents
2. Original polling institute releases and Commission des sondages notices
3. Parliamentary records, speeches and full debate transcripts
4. Established French and English reporting
5. Secondary trackers for discovery and cross-checking, clearly labelled as secondary

Do not turn historical party positions into new 2027 promises. Do not describe analyst interpretation as a candidate quotation. Programme presence is not independent validation of feasibility.

Key research sources:
- Government calendar: https://www.info.gouv.fr/actualite/election-presidentielle-2027
- Candidate tracker: https://www.observatoire2027.fr/candidats/
- Programme tracker: https://www.observatoire2027.fr/programmes/
- Poll archive: https://www.pollingforecast.com/fr/polls?lang=en&layout=table
- MEDEF debate summary: https://lcp.fr/actualites/presidentielle-2027-ce-qu-il-faut-retenir-du-premier-debat-entre-les-candidats-440670
- MEDEF proposals by candidate: https://selectra.info/finance/actualites/marche/debat-medef-2027-dette-propositions-candidats-consequences-epargne
- Open candidate-status dataset: https://www.data.gouv.fr/datasets/candidats-a-lelection-presidentielle-2027-liste-partis-et-sources

## Deploy for free with Cloudflare Pages

1. Upload the contents of this project to the root of your GitHub repository, preserving the `data/` and `profiles/` folders.
2. In Cloudflare, connect the repository under **Workers & Pages → Create → Pages → Connect to Git**.
3. Choose **None** as framework preset.
4. Leave the build command blank.
5. Set the build output directory to `/` or `.` if Cloudflare requires a value.
6. Deploy. Future commits to `main` will trigger deployment.

No API keys, paid database or build step are required.

## Updating research

Edit `data/election-data.json` and commit it to GitHub. The website reads this JSON file. Candidate dossiers are also maintained as individual Markdown files in `profiles/` for easier editorial review; the interactive candidate directory uses the dossier data embedded in `election-data.json`.

**Snapshot:** 8 November 2026. This site is a research aid, not an official government source and not voting advice.
