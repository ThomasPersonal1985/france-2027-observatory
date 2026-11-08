# France 2027 Election Observatory

A static, mobile-friendly, non-partisan research website about the 2027 French presidential election.

## Repository contents

- `index.html` — website structure and navigation.
- `styles.css` — responsive visual styling.
- `app.js` — rendering, filtering, navigation and research-data loading.
- `data/election-data.json` — structured research dataset used by the website.
- `profiles/` — 16 individual candidate dossier folders, each containing `profile.md`.

The site expects these paths exactly. In particular, the JSON file must be at `data/election-data.json`, not at the repository root and not inside an extra nested project folder.

## Deploy to the existing Cloudflare Worker

1. Download and extract the complete ZIP on your computer.
2. Open the existing GitHub repository `france-2027-observatory` on GitHub.
3. Upload the **contents** of the extracted `france-2027-observatory-complete` folder to the repository root. Do not upload the ZIP itself and do not create an extra enclosing folder.
4. Replace the existing `index.html`, `app.js`, `styles.css`, `README.md`, and `data/election-data.json`. Upload/replace the complete `profiles/` folder as well.
5. Commit the changes to the `main` branch. The existing Cloudflare GitHub integration should deploy automatically.

After upload, the repository root should look like this:

```text
france-2027-observatory/
├── index.html
├── app.js
├── styles.css
├── README.md
├── data/
│   └── election-data.json
└── profiles/
    ├── bruno-le-maire/profile.md
    ├── bruno-retailleau/profile.md
    ├── ...
    └── xavier-bertrand/profile.md
```

Do not leave the whole project nested one level down. `index.html` and `data/` must be directly in the repository root.

## Included research sections

- Overview and campaign milestones.
- Elections for Dummies, written in plain English for younger readers and first-time voters.
- 16 candidate profiles and dossier files.
- Policy comparison matrix.
- 19 individual poll records and 12 separately labelled rolling-average observations.
- 20 linked news records.
- Timeline, sources and methodology.

## Research cautions

Candidate campaign activity is not the same as official ballot qualification. Polls are snapshots, not predictions; different candidate line-ups should not be blended, and a candidate missing from a poll is not automatically at zero. News records link to their sources. Check original poll notices and official sources before treating any entry as definitive.

The research data snapshot is dated 8 November 2026.
