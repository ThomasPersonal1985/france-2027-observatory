#!/usr/bin/env python3
"""Validate structural and cross-record integrity of the canonical site dataset."""
from __future__ import annotations
import json
import re
import sys
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_DATA = ROOT / "data/election-data.json"
REQUIRED_ROOT = ("meta", "candidates", "debates", "policy_positions", "polls", "news", "events", "sources", "updates", "poll_trends", "media_directory", "editorial_standards", "compass_questions", "compass_methodology")
errors: list[str] = []

def err(path: str, message: str) -> None:
    errors.append(f"{path}: {message}")

def obj(value, path):
    if not isinstance(value, dict): err(path, "must be an object"); return False
    return True

def text(value, path):
    if not isinstance(value, str) or not value.strip(): err(path, "must be a non-empty string"); return False
    return True

def iso_date(value, path, nullable=False):
    if nullable and value is None: return
    if not isinstance(value, str): err(path, "must be an ISO date (YYYY-MM-DD)" if not nullable else "must be an ISO date or null"); return
    try:
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", value): raise ValueError
        date.fromisoformat(value)
    except ValueError: err(path, f"invalid ISO calendar date {value!r}")

def url(value, path):
    if not isinstance(value, str) or urlparse(value).scheme not in ("http", "https") or not urlparse(value).netloc:
        err(path, "must be an absolute http(s) URL")

def citation(value, path):
    if not obj(value, path): return
    for key in ("title", "url", "type"):
        if key not in value: err(path, f"missing {key!r}")
    if "title" in value: text(value["title"], f"{path}.title")
    if "url" in value: url(value["url"], f"{path}.url")
    if "type" in value: text(value["type"], f"{path}.type")

def records(data, key):
    value = data.get(key)
    if not isinstance(value, list): err(key, "must be an array"); return []
    return value

def validate(data):
    if not obj(data, "$"): return
    for key in REQUIRED_ROOT:
        if key not in data: err("$", f"missing required section {key!r}")
    meta = data.get("meta", {})
    if obj(meta, "meta"):
        text(meta.get("title"), "meta.title")
        version=meta.get("data_version")
        if not isinstance(version, (str, int)) or isinstance(version, bool) or not str(version).strip(): err("meta.data_version", "must be a non-empty string or integer")
        iso_date(meta.get("last_updated"), "meta.last_updated")

    candidates = records(data, "candidates")
    candidate_ids, candidate_names = set(), set()
    for i, c in enumerate(candidates):
        p=f"candidates[{i}]"
        if not obj(c,p): continue
        for key in ("id","name","party","campaign_status","ballot_status"):
            text(c.get(key),f"{p}.{key}")
        cid, name = c.get("id"), c.get("name")
        if isinstance(cid,str):
            if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*",cid): err(f"{p}.id","must be a lowercase kebab-case stable ID")
            if cid in candidate_ids: err(f"{p}.id",f"duplicate candidate ID {cid!r}")
            candidate_ids.add(cid)
        if isinstance(name,str):
            if name.casefold() in candidate_names: err(f"{p}.name",f"duplicate candidate name {name!r}")
            candidate_names.add(name.casefold())
        src=c.get("sources")
        if not isinstance(src,list) or not src: err(f"{p}.sources","must be a non-empty array of citations")
        else:
            for j,s in enumerate(src): citation(s,f"{p}.sources[{j}]")

    for i,p_item in enumerate(records(data,"policy_positions")):
        p=f"policy_positions[{i}]"
        if not obj(p_item,p): continue
        for k in ("candidate_name","topic","position","evidence_type","verification_status"): text(p_item.get(k),f"{p}.{k}")
        if isinstance(p_item.get("candidate_name"),str) and p_item["candidate_name"].casefold() not in candidate_names:
            err(f"{p}.candidate_name",f"does not match a candidate name: {p_item['candidate_name']!r}")
        if "source" not in p_item: err(p,"missing 'source'")
        else: citation(p_item["source"],f"{p}.source")
        if "checked_date" not in p_item: err(p,"missing 'checked_date'")
        else: iso_date(p_item["checked_date"],f"{p}.checked_date",nullable=True)

    for i,poll in enumerate(records(data,"polls")):
        p=f"polls[{i}]"
        if not obj(poll,p): continue
        for k in ("publication_date","fieldwork_start","fieldwork_end"): iso_date(poll.get(k),f"{p}.{k}")
        if all(isinstance(poll.get(k),str) for k in ("fieldwork_start","fieldwork_end")):
            try:
                if date.fromisoformat(poll["fieldwork_start"]) > date.fromisoformat(poll["fieldwork_end"]): err(p,"fieldwork_start must not be after fieldwork_end")
            except ValueError: pass
        for k in ("pollster","sponsor","scenario"): text(poll.get(k),f"{p}.{k}")
        size=poll.get("sample_size")
        if not isinstance(size,int) or isinstance(size,bool) or size < 1: err(f"{p}.sample_size","must be a positive integer")
        results=poll.get("results")
        if not obj(results,f"{p}.results"): pass
        elif not results: err(f"{p}.results","must contain at least one candidate result")
        else:
            for name,value in results.items():
                text(name,f"{p}.results candidate")
                if not isinstance(value,(int,float)) or isinstance(value,bool) or not 0 <= value <= 100: err(f"{p}.results[{name!r}]","must be a percentage from 0 to 100")
        if "source" not in poll: err(p,"missing 'source'")
        else: citation(poll["source"],f"{p}.source")

    for i,item in enumerate(records(data,"news")):
        p=f"news[{i}]"
        if not obj(item,p): continue
        for k in ("publication_date",): iso_date(item.get(k),f"{p}.{k}")
        for k in ("title","publisher","language","topic","summary"): text(item.get(k),f"{p}.{k}")
        if "source" not in item: err(p,"missing 'source'")
        else: citation(item["source"],f"{p}.source")
        verification=item.get("verification")
        if obj(verification,f"{p}.verification"):
            text(verification.get("status"),f"{p}.verification.status")
            if "checked_date" in verification: iso_date(verification["checked_date"],f"{p}.verification.checked_date",nullable=True)

    for key in ("sources",):
        for i,source in enumerate(records(data,key)): citation(source,f"{key}[{i}]")
    for i,trend in enumerate(records(data,"poll_trends")):
        p=f"poll_trends[{i}]"
        if not obj(trend,p): continue
        for k in ("candidate","method"): text(trend.get(k),f"{p}.{k}")
        if "candidate" in trend and isinstance(trend["candidate"],str) and trend["candidate"].casefold() not in candidate_names:
            err(f"{p}.candidate",f"does not match a candidate name: {trend['candidate']!r}")
        for k in ("average",):
            v=trend.get(k)
            if not isinstance(v,(int,float)) or isinstance(v,bool) or not 0 <= v <= 100: err(f"{p}.{k}","must be a percentage from 0 to 100")
        count=trend.get("polls_count")
        if not isinstance(count,int) or isinstance(count,bool) or count < 1: err(f"{p}.polls_count","must be a positive integer")
        iso_date(trend.get("snapshot_date"),f"{p}.snapshot_date")

    questions=records(data,"compass_questions")
    qids=set()
    for i,q in enumerate(questions):
        p=f"compass_questions[{i}]"
        if not obj(q,p): continue
        for k in ("id","topic","title","stage"): text(q.get(k),f"{p}.{k}")
        qid=q.get("id")
        if isinstance(qid,str):
            if qid in qids: err(f"{p}.id",f"duplicate question ID {qid!r}")
            qids.add(qid)
        if q.get("stage") not in ("standard","extended"): err(f"{p}.stage","must be standard or extended")
        options=q.get("options")
        if not isinstance(options,list) or len(options)<2: err(f"{p}.options","must contain at least two options")
        maximum=q.get("max")
        if not isinstance(maximum,(int,float)) or isinstance(maximum,bool) or maximum <= 0: err(f"{p}.max","must be positive")

if __name__ == "__main__":
    path=Path(sys.argv[1]) if len(sys.argv)>1 else DEFAULT_DATA
    try: data=json.loads(path.read_text(encoding="utf-8"))
    except (OSError,json.JSONDecodeError) as exc:
        print(f"Cannot read valid JSON from {path}: {exc}",file=sys.stderr); sys.exit(2)
    validate(data)
    if path.resolve() == DEFAULT_DATA.resolve():
        try:
            mirror = json.loads((ROOT / "election-data.json").read_text(encoding="utf-8"))
            if mirror != data: err("election-data.json", "legacy compatibility copy is out of sync; run python3 scripts/sync_root_election_data.py --write")
        except (OSError, json.JSONDecodeError) as exc:
            err("election-data.json", f"legacy compatibility copy is missing or invalid: {exc}")
    if errors:
        print(f"Election data validation failed ({len(errors)} error(s)):")
        print("\n".join(f"- {e}" for e in errors)); sys.exit(1)
    print(f"Election data validation passed: {path}")
