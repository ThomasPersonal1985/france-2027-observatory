# Editorial verification and publishing workflow

## Statuses

| Status | Meaning |
| --- | --- |
| `collected` | Captured for research. No public approval is implied. |
| `under_review` | An editor is checking the claims and evidence. |
| `verified` | The stated claims have been checked against the linked evidence. This does not authorize publication by itself. |
| `approved_for_publication` | A named editor has approved the verified claims for public use. |
| `rejected` | The material is unsupported, misleading, disputed beyond safe presentation, or otherwise unsuitable. |
| `needs_updating` | Previously reviewed material may no longer be current and must be checked again. |

Verification answers **“does the evidence support this claim?”** Publication approval answers **“should this verified claim appear on the public site?”** Approval is invalid without verification and claim-level source evidence.

## Record shape

Each candidate profile, policy position, news item, poll, and polling snapshot has an `editorial` object:

- `status`: one of the workflow states above.
- `verification`: `status`, `last_verified_date`, and `reviewer`.
- `publication`: `approved_by` and `approved_date`, empty until approved.
- `claims`: claim text, classification (`confirmed_fact`, `candidate_statement`, `independent_analysis`, or `unverified_or_disputed`), verification status, editorial notes, and source evidence.
- `legacy_public`: explicit migration flag only for existing records still under review or awaiting updates.

Claim evidence references a stable `source_registry` ID and records a locator, what the source supports, publication date (or `null` when unknown), and date checked. Registry entries can also record author, publication date, check date, verification status, and editorial notes. Unknown dates are explicit; they are not guessed.

## Review sequence

1. Add new material as `collected`, with the source in `source_registry` and claim-level source references.
2. Change to `under_review` while checking accuracy, attribution, context, and whether the source supports each claim.
3. Set claims and record verification to `verified` only after a reviewer and last-verified date are recorded.
4. A separate editor sets `approved_for_publication`, `approved_by`, and `approved_date` after deciding the verified material is suitable for publication.
5. Use `rejected` for material that should not be published. Use `needs_updating` when an existing claim may be stale; re-check it before restoring approval.

New records do not inherit legacy visibility. The public renderer gate is a subsequent implementation step; it will show only fully approved new records, while existing migrated records remain visible with an explicit review label until the audit is complete. Rejected legacy records are never eligible for legacy visibility.

## Safe migration and scope

The initial migration leaves all existing content and candidate-universe membership intact. It marks 39 candidate profiles, 19 policy positions, 31 news records, 20 individual polls, and the existing polling snapshot as `under_review`, `unverified`, with `legacy_public: true`. Claim lists remain empty until editors create evidence-backed claim records; no claim is fabricated or silently promoted. Existing verification fields (including `secondary_only` and `unreviewed`) remain unchanged. The current interface is unchanged in this first step.

Candidate selection is out of scope. Human review should focus on candidate status statements, individual profile claims and policy positions, especially entries supported only by secondary sources or with unclear attribution. Distinguish confirmed facts, attributed candidate/campaign statements, independent analysis, and disputed or unverified material in the claim classification and notes.

## Future approved-only assistant

A future chatbot knowledge export must select only records with `status: approved_for_publication`, `verification.status: verified`, and claim-level verified evidence. It should carry claim text, classification, source IDs and URLs, locator, publication and checked dates, reviewer, and publication approver. It must answer only from this approved export, say when the export has no supporting claim, and never fill gaps from general model knowledge or web search. The chatbot itself is not part of this phase.
