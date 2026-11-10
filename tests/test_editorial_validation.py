"""Unit tests for editorial status and publication approval validation."""
import importlib.util
import json
import unittest
from pathlib import Path

MODULE_PATH = Path(__file__).resolve().parents[1] / "scripts" / "validate_election_data.py"
SPEC = importlib.util.spec_from_file_location("election_data_validator", MODULE_PATH)
validator = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(validator)

SOURCE_ID = "src-0123456789abcdef"


def editorial(status="under_review", *, legacy=False, verification_status="unverified", claims=None):
    is_approved = status == "approved_for_publication"
    is_verified = status in {"verified", "approved_for_publication"}
    return {
        "status": status,
        "verification": {
            "status": verification_status,
            "last_verified_date": "2026-11-09" if is_verified else None,
            "reviewer": "Editorial reviewer" if is_verified else None,
        },
        "publication": {
            "approved_by": "Publishing editor" if is_approved else None,
            "approved_date": "2026-11-09" if is_approved else None,
        },
        "claims": claims if claims is not None else [],
        "editorial_notes": "Test record",
        "legacy_public": legacy,
    }


class EditorialValidationTests(unittest.TestCase):
    def setUp(self):
        validator.errors.clear()
        validator.SOURCE_IDS = {SOURCE_ID}

    def assert_valid(self, value):
        validator.errors.clear()
        validator.validate_editorial(value, "record.editorial")
        self.assertEqual([], validator.errors)

    def assert_invalid(self, value, expected_fragment):
        validator.errors.clear()
        validator.validate_editorial(value, "record.editorial")
        self.assertTrue(
            any(expected_fragment in error for error in validator.errors),
            f"Expected {expected_fragment!r} in errors: {validator.errors}",
        )

    def test_legacy_content_can_remain_public_under_review(self):
        self.assert_valid(editorial(legacy=True))

    def test_unapproved_new_content_is_valid_metadata(self):
        for status in ("collected", "under_review", "verified", "rejected", "needs_updating"):
            with self.subTest(status=status):
                value = editorial(status, verification_status="verified" if status == "verified" else "unverified")
                self.assert_valid(value)

    def test_approved_content_requires_completed_verification_and_approval(self):
        value = editorial("approved_for_publication", verification_status="verified")
        value["claims"] = [{
            "id": "claim-1",
            "text": "A supported statement",
            "classification": "candidate_statement",
            "verification_status": "verified",
            "evidence": [{
                "source_id": SOURCE_ID,
                "locator": "paragraph 4",
                "supports": "The source contains the statement",
                "publication_date": "2026-11-01",
                "checked_date": "2026-11-09",
            }],
            "editorial_notes": "Direct statement",
        }]
        self.assert_valid(value)

    def test_approval_is_rejected_without_verified_status(self):
        value = editorial("approved_for_publication", verification_status="unverified")
        self.assert_invalid(value, "approved content must first be verified")

    def test_approval_is_rejected_without_claim_evidence(self):
        value = editorial("approved_for_publication", verification_status="verified")
        self.assert_invalid(value, "approved content must contain at least one claim")

    def test_pending_record_cannot_carry_approval_metadata(self):
        value = editorial(legacy=True)
        value["publication"] = {"approved_by": "Someone", "approved_date": "2026-11-09"}
        self.assert_invalid(value, "approval fields must be empty")

    def test_legacy_flag_cannot_keep_rejected_content_visible(self):
        self.assert_invalid(editorial("rejected", legacy=True), "legacy visibility is only allowed")


if __name__ == "__main__":
    unittest.main()

class CloudflarePreviewConfigurationTests(unittest.TestCase):
    def test_worker_static_assets_config_has_preview_block(self):
        config_path = Path(__file__).resolve().parents[1] / "wrangler.jsonc"
        config = json.loads(config_path.read_text(encoding="utf-8"))
        self.assertEqual("france-2027-observatory", config["name"])
        self.assertEqual(".", config["assets"]["directory"])
        self.assertEqual({}, config["previews"])
