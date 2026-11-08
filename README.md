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
