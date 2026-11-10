"""Ensure public renderers use the shared editorial allowlist."""
import unittest
from pathlib import Path

APP = (Path(__file__).resolve().parents[1] / "app.js").read_text(encoding="utf-8")


class PublicRenderGateIntegrationTests(unittest.TestCase):
    def test_all_data_backed_public_sections_filter_records(self):
        required_paths = (
            "publicRecords(DB.candidates)",
            "publicRecords(DB.policy_positions)",
            "publicRecords(DB.polls)",
            "publicRecords(DB.news)",
            "publicRecords(DB.poll_trend_snapshots)",
            "publicRecords(DB.events)",
            "publicRecords(DB.debates)",
        )
        for path in required_paths:
            with self.subTest(path=path):
                self.assertIn(path, APP)

    def test_compass_requires_editorially_approved_candidates_and_positions(self):
        self.assertIn("EditorialWorkflow.isApprovedForPublication(position,sourceRegistry)", APP)
        self.assertIn("EditorialWorkflow.isApprovedForPublication(candidate,DB?.source_registry||[])", APP)

    def test_poll_trend_observations_follow_visible_snapshot(self):
        self.assertIn("t.snapshot_id===snapshot.id", APP)

    def test_overview_does_not_count_unapproved_records(self):
        self.assertIn("setText('#stat-candidates',publicRecords(DB.candidates).length)", APP)
        self.assertIn("setText('#stat-polls',publicRecords(DB.polls).length)", APP)
        self.assertIn("setText('#stat-news',publicRecords(DB.news).length)", APP)


if __name__ == "__main__":
    unittest.main()
