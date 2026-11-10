"""Tests for the generated metadata-only editorial review queue."""
import importlib.util
import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MODULE_PATH = ROOT / "scripts" / "build_editorial_review_queue.py"
SPEC = importlib.util.spec_from_file_location("editorial_review_queue", MODULE_PATH)
queue = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(queue)
DATA = json.loads((ROOT / "data/election-data.json").read_text(encoding="utf-8"))


class EditorialReviewQueueTests(unittest.TestCase):
    def test_committed_report_matches_canonical_data(self):
        report = queue.render_report(DATA)
        committed = (ROOT / "EDITORIAL-REVIEW-QUEUE.md").read_text(encoding="utf-8")
        self.assertEqual(report, committed)

    def test_report_is_explicitly_metadata_only_and_does_not_promote_claims(self):
        report = queue.render_report(DATA)
        self.assertIn("Metadata audit only", report)
        self.assertIn("keep the established candidate universe unchanged", report)
        self.assertIn("`secondary_only`", report)
        self.assertIn("All existing policy-position records currently have no editorial claims", report)

    def test_report_counts_records_without_source_links(self):
        fixture = {
            "meta": {"last_updated": "2026-11-09"},
            "source_registry": [],
            "events": [{"title": "Milestone", "editorial": {"status": "under_review", "claims": []}}],
        }
        report = queue.render_report(fixture)
        self.assertIn("| Election events | 1 | `under_review`: 1 | 1 | 1 |", report)
        self.assertIn("0 distinct source IDs; 0 are missing", report)


if __name__ == "__main__":
    unittest.main()
