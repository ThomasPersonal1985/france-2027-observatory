# Clean deployment package

This archive is arranged for direct deployment at the repository root.

## Required structure

After extracting, the repository root must contain:

- `index.html`
- `app.js`
- `styles.css`
- `data/election-data.json`
- `profiles/` (candidate dossier files)
- `VOTING-COMPASS-METHODOLOGY.md`
- `README.md`

Do **not** upload the containing folder itself, and do not leave the website files inside `v3work/`.

## GitHub replacement

1. Download and extract this ZIP on your computer.
2. Open the existing GitHub repository.
3. Back up the current repository contents first (download the current repository ZIP).
4. Replace the old site files with the extracted contents, preserving the structure above.
5. Commit the changes.
6. Wait for Cloudflare Pages to finish deploying, then hard-refresh the site.

Do not delete the GitHub repository or disconnect Cloudflare Pages.

## Troubleshooting

If the page still fails, check the deployed `app.js` and `data/election-data.json` are from the same package. The browser must be able to load `data/election-data.json` relative to the deployed site root. A stale deployment or mixed old/new files can cause errors even when the local package is correct.

## Cloudflare Workers Builds

This repository is a static site served from the repository root. `wrangler.jsonc` declares the root as the static asset directory and includes the required empty `previews` block for branch previews.

In the Cloudflare Worker build settings, use:

- Build command: leave blank (there is no compilation step).
- Deploy command: `npx wrangler deploy`.
- Preview command: `npx wrangler preview`.
- Root directory: `/` (repository root).

Keep the production deploy command and branch preview command in their separate fields. The preview command must not be used as the production deploy command.
