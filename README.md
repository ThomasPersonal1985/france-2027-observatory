# France 2027 Election Intelligence Observatory

Static website for Cloudflare Pages. Replace the repository contents with this package, preserving the `data/` and `profiles/` folders.

## Latest update
- Voting compass importance selectors start blank and are mandatory for all 15 questions before results can be shown. Policy answers themselves remain optional; only answered, evidence-supported questions are scored.
- Tax question wording is neutral and refers to the structure of the tax system, not the "tax burden".
- Pension questions clarify the difference between the legal minimum retirement age and full-rate pension eligibility. Funding terminology is explained in plain English, including pay-as-you-go (répartition), funded/capitalisation schemes and collective workplace pension funds.
- Candidate directory includes direct programme/manifesto links where a published text is currently indexed: Jean-Luc Mélenchon's official 2027 programme page and Bruno Le Maire's published manifesto archive. The latter is explicitly labelled a manifesto, not a formal campaign programme. Other candidates are marked "Coming soon" until a programme can be linked and verified.

## Files
- `index.html`: site shell and content sections
- `app.js`: rendering, candidate dossier display, compass questionnaire and matching
- `styles.css`: responsive styling
- `data/election-data.json`: research data
- `profiles/`: individual candidate dossiers

## Deployment
Upload the contents of this folder to the root of the GitHub repository connected to Cloudflare Pages. Keep the folder structure intact. Cloudflare Pages should deploy automatically after the commit.

This is a static snapshot. Candidate programmes, campaign status, polling and policy positions require periodic source verification and updates.

## Editorial standards and source coverage (8 November 2026)
- Added a public Editorial Standards & Verification Policy section, including a source hierarchy, claim-level checks, evidence labels, corrections policy and voting-compass rules.
- Added a 30-outlet monitoring directory spanning French national media, public broadcasters, wire services and international outlets. Directory membership is not an endorsement and does not imply a current article is in the archive.
- Expanded the article archive from 22 to 30 linked items, including RTL, Public Sénat, LCP, Associated Press and The Guardian alongside existing reporting. Each newly added item has an editorial check note.
- Candidate official-site review is explicitly tracked per profile. Direct 2027 programme/site checks have been completed for Jean-Luc Mélenchon and Édouard Philippe; Gabriel Attal's located programme is a 2024 legislative document and is not presented as a 2027 programme. The remaining candidate-site audits are still pending.
- Existing policy entries and legacy news summaries are not automatically certified by this release; they are labelled for claim-level review. Do not describe the entire historic dataset as fully fact-checked.

## Editorial limitations
This is a static research snapshot, not an automated live fact-checker. Links can change, campaign pages can be updated, and reputable sources can still make mistakes. The site therefore records dates, provenance and uncertainty, and should be refreshed through manual review before material claims are relied upon.
