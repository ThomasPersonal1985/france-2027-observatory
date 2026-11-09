#!/usr/bin/env python3
"""Check or explicitly refresh the legacy root-level election-data.json mirror."""
import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data/election-data.json"
MIRROR = ROOT / "election-data.json"

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--write", action="store_true", help="replace the legacy root mirror with the canonical data file")
args = parser.parse_args()
canonical = json.loads(SOURCE.read_text(encoding="utf-8"))
if args.write:
    MIRROR.write_bytes(SOURCE.read_bytes())
    print(f"Updated compatibility mirror: {MIRROR}")
else:
    try:
        mirror = json.loads(MIRROR.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        raise SystemExit(f"Compatibility mirror is missing or invalid: {exc}\nRun: python3 scripts/sync_root_election_data.py --write")
    if mirror != canonical:
        raise SystemExit("Root election-data.json is out of sync with data/election-data.json.\nRun: python3 scripts/sync_root_election_data.py --write")
    print("Compatibility mirror matches data/election-data.json")
