#!/usr/bin/env python3
"""Generate a deterministic, metadata-only editorial review queue."""
import argparse
import json
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data/election-data.json"
REPORT_PATH = ROOT / "EDITORIAL-REVIEW-QUEUE.md"
COLLECTIONS = (
    ("candidates", "Candidate profiles"),
    ("policy_positions", "Policy positions"),
    ("news", "News records"),
    ("polls", "Individual polls"),
    ("poll_trend_snapshots", "Polling snapshots"),
    ("events", "Election events"),
    ("debates", "Debates"),
)


def source_ids(record):
    refs = []
    if isinstance(record.get("sources"), list):
        refs.extend(record["sources"])
    for key in ("source", "evidence_source"):
        if isinstance(record.get(key), dict):
            refs.append(record[key])
    if record.get("source_id"):
        refs.append({"source_id": record["source_id"]})
    for claim in record.get("editorial", {}).get("claims", []):
        for evidence in claim.get("evidence", []):
            refs.append(evidence)
    return {item.get("source_id") for item in refs if isinstance(item, dict) and item.get("source_id")}


def label(record):
    editorial = record.get("editorial", {})
    return editorial.get("status", "missing status")


def candidate_name(record):
    return record.get("name") or record.get("candidate_name") or record.get("id") or "Untitled record"


def candidate_rows(data):
    rows = []
    for record in data.get("candidates", []):
        audit = record.get("official_site_audit") or {}
        rows.append((
            record.get("name", record.get("id", "Untitled")),
            record.get("campaign_status", "Not recorded"),
            audit.get("status", "No audit status"),
            len(source_ids(record)),
            ", ".join(sorted(source_ids(record))),
            label(record),
        ))
    return rows


def policy_rows(data):
    rows = []
    for record in data.get("policy_positions", []):
        source = record.get("source") if isinstance(record.get("source"), dict) else {}
        verification = record.get("verification") or {}
        rows.append((
            record.get("candidate_name", "Unknown candidate"),
            record.get("topic", "Unspecified topic"),
            verification.get("code", "No legacy verification code"),
            source.get("type", "Source type not recorded"),
            source.get("title", "Source title not recorded"),
            source.get("source_id", "No source ID"),
        ))
    return rows


def render_report(data):
    generated = data.get("meta", {}).get("last_updated", "date not recorded")
    registry = {item.get("id"): item for item in data.get("source_registry", []) if item.get("id")}
    all_records = [(key, record) for key, _ in COLLECTIONS for record in data.get(key, [])]
    status_counts = Counter(label(record) for _, record in all_records)
    no_claims = sum(not record.get("editorial", {}).get("claims") for _, record in all_records)
    referenced_ids = set().union(*(source_ids(record) for _, record in all_records)) if all_records else set()
    referenced = [registry[source_id] for source_id in referenced_ids if source_id in registry]
    source_fields = ("publisher", "author", "publication_date", "checked_date", "verification_status")
    provenance = {field: sum(bool(source.get(field)) for source in referenced) for field in source_fields}
    missing_registry = len(referenced_ids - registry.keys())
    candidates = candidate_rows(data)
    policies = policy_rows(data)
    polls = data.get("polls", [])
    news = data.get("news", [])
    events = data.get("events", [])
    debates = data.get("debates", [])

    lines = [
        "# Editorial review queue",
        "",
        f"Dataset last updated: {generated}. This report is generated from the canonical `data/election-data.json`.",
        "",
        "> Metadata audit only: this report does not determine whether a candidate, policy, poll, or article claim is true. Do not treat an existing dossier label as independently verified.",
        "",
        "## Current queue",
        "",
        "| Content type | Records | Workflow status | No claim-level evidence | No linked source reference |",
        "| --- | ---: | --- | ---: | ---: |",
    ]
    for key, title in COLLECTIONS:
        records = data.get(key, [])
        statuses = Counter(label(record) for record in records)
        status_text = ", ".join(f"`{status}`: {count}" for status, count in sorted(statuses.items())) or "None"
        missing = sum(not record.get("editorial", {}).get("claims") for record in records)
        no_source = sum(not source_ids(record) for record in records)
        lines.append(f"| {title} | {len(records)} | {status_text} | {missing} | {no_source} |")
    lines.extend([
        f"| **All listed records** | **{len(all_records)}** | **{', '.join(f'{status}: {count}' for status, count in sorted(status_counts.items()))}** | **{no_claims}** | **{sum(not source_ids(record) for _, record in all_records)}** |",
        "",
        "## Candidate profiles",
        "",
        "Every candidate profile currently has no editorial claims. Review each profile claim separately; keep the established candidate universe unchanged. Candidate status below is the existing dossier label and still requires claim-level verification.",
        "",
        "| Candidate | Existing candidacy label | Official-site audit label | Source count | Source IDs | Editorial status |",
        "| --- | --- | --- | ---: | --- | --- |",
    ])
    for name, status, audit, ref_count, ids, editorial_status in candidates:
        lines.append(f"| {name.replace('|', '\\|')} | {status.replace('|', '\\|')} | {audit.replace('|', '\\|')} | {ref_count} | `{ids}` | `{editorial_status}` |")
    lines.extend([
        "",
        "## Policy positions",
        "",
        "All existing policy-position records currently have no editorial claims. The legacy verification codes and source descriptions are shown as recorded; none are upgraded here.",
        "",
        "| Candidate | Policy area | Existing verification code | Recorded source type | Source title | Source ID |",
        "| --- | --- | --- | --- | --- | --- |",
    ])
    for candidate, topic, code, source_type, title, source_id in policies:
        lines.append(f"| {candidate.replace('|', '\\|')} | {topic.replace('|', '\\|')} | `{code}` | {source_type.replace('|', '\\|')} | {title.replace('|', '\\|')} | `{source_id}` |")
    poll_codes = Counter((record.get("verification") or {}).get("code", "no legacy verification code") for record in polls)
    news_codes = Counter((record.get("verification") or {}).get("code", "no legacy verification code") for record in news)
    lines.extend([
        "",
        "## News and polling",
        "",
        f"- News: {len(news)} records; {sum(not item.get('editorial', {}).get('claims') for item in news)} have no editorial claims. Existing verification codes: {', '.join(f'{code} ({count})' for code, count in sorted(news_codes.items())) or 'none recorded' }.",
        f"- Individual polls: {len(polls)} records; {sum(not item.get('editorial', {}).get('claims') for item in polls)} have no editorial claims. Existing verification codes: {', '.join(f'{code} ({count})' for code, count in sorted(poll_codes.items())) or 'none recorded' }.",
        f"- Polling trend snapshots: {len(data.get('poll_trend_snapshots', []))}; no snapshot is treated as verified by this queue.",
        "- For polling, locate the original pollster notice and preserve fieldwork dates, sponsor, sample, method, question wording, and tested scenario as separate observations.",
        "",
        "## Other public records",
        "",
        f"Election events: {len(events)}; debates: {len(debates)}. Review their factual dates, descriptions, and source links before removing the legacy label.",
        "",
        "## Source-registry completeness",
        "",
        f"The records reference {len(referenced_ids)} distinct source IDs; {missing_registry} are missing from `source_registry`. A record without a reference may still contain an unlinked source URL, but it cannot participate in the approved claim-level source trail until linked.",
        "",
        "| Registry field | Referenced entries populated | Referenced entries |",
        "| --- | ---: | ---: |",
    ])
    for field in source_fields:
        lines.append(f"| `{field}` | {provenance[field]} | {len(referenced)} |")
    lines.extend([
        "",
        "### Referenced source records",
        "",
        "Open each URL and complete the metadata only when the source itself supports it; use `null` or leave optional fields empty when genuinely unknown.",
        "",
        "| Source ID | Title | Original URL | Publisher | Author | Publication date | Checked date | Verification status |",
        "| --- | --- | --- | --- | --- | --- | --- | --- |",
    ])
    for source_id in sorted(referenced_ids):
        source = registry.get(source_id, {})
        values = [source_id, source.get("title", "Missing registry entry"), source.get("url", ""), source.get("publisher", ""), source.get("author", ""), source.get("publication_date", ""), source.get("checked_date", ""), source.get("verification_status", "")]
        cells = [str(value or "").replace("|", "\\|").replace("\n", " ") for value in values]
        lines.append("| " + " | ".join(cells) + " |")
    lines.extend([
        "",
        "## Suggested review sequence",
        "",
        "1. Confirm the candidate's stated candidacy status from a first-party statement or clearly attributed reporting.",
        "2. Break each profile and policy entry into discrete claims; classify each as a confirmed fact, candidate/campaign statement, independent analysis, or unverified/disputed.",
        "3. Link the original source, record a locator and what it supports, and fill the publication and checked dates where available.",
        "4. Record reviewer and verification date. Keep publication approval as a separate editorial decision.",
        "5. Re-run the validator and review the public preview; do not remove legacy visibility until the human review decision is recorded.",
        "",
        "## Updating this queue",
        "",
        "Run `python3 scripts/build_editorial_review_queue.py` after changing the canonical dataset. CI runs the script with `--check` and fails if this committed report is stale.",
        "",
    ])
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="fail if the committed queue does not match the canonical dataset")
    args = parser.parse_args()
    data = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    report = render_report(data)
    if args.check:
        try:
            current = REPORT_PATH.read_text(encoding="utf-8")
        except OSError as exc:
            raise SystemExit(f"Editorial review queue is missing: {exc}")
        if current != report:
            raise SystemExit("Editorial review queue is stale. Run: python3 scripts/build_editorial_review_queue.py")
        print("Editorial review queue matches the canonical dataset")
    else:
        REPORT_PATH.write_text(report, encoding="utf-8")
        print(f"Updated editorial review queue: {REPORT_PATH}")


if __name__ == "__main__":
    main()
