#!/usr/bin/env python3
"""Validate structural and cross-record integrity of the canonical site dataset."""
from __future__ import annotations
import json
import re
import hashlib
import sys
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_DATA = ROOT / "data/election-data.json"
REQUIRED_ROOT = ("meta", "candidates", "debates", "policy_positions", "polls", "news", "events", "sources", "source_registry", "updates", "poll_trends", "poll_trend_snapshots", "media_directory", "editorial_standards", "compass_questions", "compass_methodology")
errors: list[str] = []
SOURCE_IDS: set[str] = set()

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
    sid=value.get("source_id")
    expected="src-"+hashlib.sha256(str(value.get("url", "")).encode("utf-8")).hexdigest()[:16]
    if sid != expected: err(f"{path}.source_id", f"must equal stable URL ID {expected}")
    if sid not in SOURCE_IDS: err(f"{path}.source_id", f"source ID {sid!r} is absent from source_registry")

def validate_verification(value, path):
    allowed={"unreviewed","secondary_only","primary_verified","disputed","superseded"}
    code=value.get("code")
    if code not in allowed: err(f"{path}.code",f"must be one of {', '.join(sorted(allowed))}")
    if "checked_date" not in value: err(path,"missing 'checked_date'")
    else: iso_date(value["checked_date"],f"{path}.checked_date",nullable=True)
    if "reviewer" not in value: err(path,"missing 'reviewer'")
    elif value["reviewer"] is not None: text(value["reviewer"],f"{path}.reviewer")
    if code=="primary_verified" and (not value.get("checked_date") or not value.get("reviewer")):
        err(path,"primary_verified requires checked_date and reviewer")

def records(data, key):
    value = data.get(key)
    if not isinstance(value, list): err(key, "must be an array"); return []
    return value

def validate(data):
    global SOURCE_IDS
    if not obj(data, "$"): return
    for key in REQUIRED_ROOT:
        if key not in data: err("$", f"missing required section {key!r}")
    registry=records(data, "source_registry")
    SOURCE_IDS=set()
    registry_urls=set()
    for i, source in enumerate(registry):
        p=f"source_registry[{i}]"
        if not obj(source,p): continue
        for key in ("id","title","url","type"):
            if key not in source: err(p,f"missing {key!r}")
        if "title" in source: text(source["title"],f"{p}.title")
        if "url" in source: url(source["url"],f"{p}.url")
        if "type" in source: text(source["type"],f"{p}.type")
        sid=source.get("id"); src_url=source.get("url")
        expected="src-"+hashlib.sha256(str(src_url or "").encode("utf-8")).hexdigest()[:16]
        if sid != expected: err(f"{p}.id",f"must equal stable URL ID {expected}")
        if sid in SOURCE_IDS: err(f"{p}.id",f"duplicate source ID {sid!r}")
        SOURCE_IDS.add(sid)
        if src_url in registry_urls: err(f"{p}.url",f"duplicate source URL {src_url!r}")
        registry_urls.add(src_url)
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
        verify=p_item.get("verification")
        if obj(verify,f"{p}.verification"): validate_verification(verify,f"{p}.verification")

    poll_ids=set()
    for i,poll in enumerate(records(data,"polls")):
        p=f"polls[{i}]"
        if not obj(poll,p): continue
        poll_id=poll.get("id")
        if not isinstance(poll_id,str) or not re.fullmatch(r"poll-[a-f0-9]{16}",poll_id): err(f"{p}.id","must be a stable poll- ID")
        elif poll_id in poll_ids: err(f"{p}.id",f"duplicate poll ID {poll_id!r}")
        else: poll_ids.add(poll_id)
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
        prov=poll.get("source_provenance")
        if obj(prov,f"{p}.source_provenance"):
            cited_type=prov.get("cited_source_type")
            if cited_type not in ("primary_pollster_notice","secondary_archive"): err(f"{p}.source_provenance.cited_source_type","must identify a primary pollster notice or secondary archive")
            archive_id=prov.get("secondary_archive_source_id")
            if archive_id is not None and archive_id not in SOURCE_IDS: err(f"{p}.source_provenance.secondary_archive_source_id","must reference a source_registry ID or be null")
            notice_id=prov.get("original_poll_notice_source_id")
            if notice_id is not None and notice_id not in SOURCE_IDS: err(f"{p}.source_provenance.original_poll_notice_source_id","must reference a source_registry ID or be null")
            attached_id=poll.get("source",{}).get("source_id") if isinstance(poll.get("source"),dict) else None
            expected_attached=archive_id if cited_type=="secondary_archive" else notice_id
            if expected_attached is None or attached_id!=expected_attached: err(f"{p}.source_provenance","cited source type must agree with the linked poll source")
        verification=poll.get("verification")
        if obj(verification,f"{p}.verification"): validate_verification(verification,f"{p}.verification")
        methodology=poll.get("survey_methodology")
        if obj(methodology,f"{p}.survey_methodology"):
            for key in ("question_wording","collection_mode","margin_of_error","sampling_frame"):
                if key not in methodology: err(f"{p}.survey_methodology",f"missing {key!r}")
                elif methodology[key] is not None and (not isinstance(methodology[key],(str,int,float)) or isinstance(methodology[key],bool) or (isinstance(methodology[key],str) and not methodology[key].strip())): err(f"{p}.survey_methodology.{key}","must be a non-empty value or null")
        result_names=poll.get("results",{})
        candidate_map=poll.get("candidate_ids")
        if not isinstance(candidate_map,dict): err(f"{p}.candidate_ids","must map every result label to a candidate ID")
        else:
            expected_map={}
            for result_name in result_names if isinstance(result_names,dict) else []:
                cid=next((c.get("id") for c in candidates if isinstance(c,dict) and isinstance(c.get("name"),str) and c["name"].casefold()==str(result_name).casefold()),None)
                if cid is None: err(f"{p}.results",f"candidate label {result_name!r} does not match a candidate")
                else: expected_map[result_name]=cid
            if candidate_map != expected_map: err(f"{p}.candidate_ids","must contain exactly the result labels mapped to their canonical candidate IDs")
            lineup=sorted(set(candidate_map.values()))
            expected_scenario="first-round-lineup-"+hashlib.sha256("\n".join(lineup).encode("utf-8")).hexdigest()[:12]
            if poll.get("scenario_id") != expected_scenario: err(f"{p}.scenario_id",f"must describe the tested lineup as {expected_scenario}")
        if poll.get("scenario_type") != "first_round": err(f"{p}.scenario_type","current archived records are first-round scenarios")

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
            validate_verification(verification,f"{p}.verification")

    for key in ("sources",):
        for i,source in enumerate(records(data,key)): citation(source,f"{key}[{i}]")
    snapshots=records(data,"poll_trend_snapshots")
    snapshot_by_id={}; snapshot_ids=set()
    for i,snapshot in enumerate(snapshots):
        p=f"poll_trend_snapshots[{i}]"
        if not obj(snapshot,p): continue
        for key in ("id","provider","method","scenario_note"): text(snapshot.get(key),f"{p}.{key}")
        iso_date(snapshot.get("snapshot_date"),f"{p}.snapshot_date")
        sid=snapshot.get("id")
        if sid in snapshot_ids: err(f"{p}.id",f"duplicate snapshot ID {sid!r}")
        snapshot_ids.add(sid); snapshot_by_id[sid]=snapshot
        source_id=snapshot.get("source_id")
        if source_id not in SOURCE_IDS: err(f"{p}.source_id","must reference source_registry")
        kind=snapshot.get("calculation_type")
        if kind not in ("external_provider","site_calculated"): err(f"{p}.calculation_type","must be external_provider or site_calculated")
        version=snapshot.get("algorithm_version")
        version_status=snapshot.get("algorithm_version_status")
        inputs=snapshot.get("input_poll_ids")
        input_status=snapshot.get("input_status")
        if not isinstance(inputs,list): err(f"{p}.input_poll_ids","must be an array")
        else:
            for poll_id in inputs:
                if poll_id not in poll_ids: err(f"{p}.input_poll_ids",f"unknown poll ID {poll_id!r}")
        scenario=snapshot.get("scenario_id")
        if scenario is not None and scenario not in {poll.get("scenario_id") for poll in records(data,"polls") if isinstance(poll,dict)}: err(f"{p}.scenario_id",f"unknown scenario ID {scenario!r}")
        if kind=="site_calculated":
            if not isinstance(version,str) or not version.strip(): err(f"{p}.algorithm_version","site-calculated snapshots require a version")
            if version_status!="published": err(f"{p}.algorithm_version_status","site-calculated snapshots require published version metadata")
            if not isinstance(inputs,list) or not inputs: err(f"{p}.input_poll_ids","site-calculated snapshots require linked input polls")
            if not scenario: err(f"{p}.scenario_id","site-calculated snapshots require a comparable scenario")
            if input_status!="linked": err(f"{p}.input_status","site-calculated snapshots require linked input status")
        elif kind=="external_provider":
            if not isinstance(inputs,list): pass
            elif input_status=="not_provided" and inputs: err(f"{p}.input_poll_ids","must be empty when provider inputs were not supplied")
            elif input_status=="linked" and not inputs: err(f"{p}.input_poll_ids","must contain IDs when inputs are marked linked")
            if version is None and version_status!="not_published": err(f"{p}.algorithm_version_status","a missing provider algorithm version must be marked not_published")
            if scenario is None and not snapshot.get("scenario_note"): err(f"{p}.scenario_note","describe why provider scenario data is unavailable")
        observation_ids=snapshot.get("observation_ids")
        if not isinstance(observation_ids,list) or len(observation_ids)!=len(set(observation_ids)): err(f"{p}.observation_ids","must be a list of unique trend observation IDs")

    trend_ids=set(); trend_ids_by_snapshot={}
    for i,trend in enumerate(records(data,"poll_trends")):
        p=f"poll_trends[{i}]"
        if not obj(trend,p): continue
        for k in ("candidate","method","id","snapshot_id"): text(trend.get(k),f"{p}.{k}")
        tid=trend.get("id")
        if tid in trend_ids: err(f"{p}.id",f"duplicate trend observation ID {tid!r}")
        trend_ids.add(tid)
        snapshot_id=trend.get("snapshot_id")
        if snapshot_id not in snapshot_by_id: err(f"{p}.snapshot_id",f"unknown snapshot ID {snapshot_id!r}")
        trend_ids_by_snapshot.setdefault(snapshot_id,[]).append(tid)
        candidate_id=trend.get("candidate_id")
        candidate=next((c for c in candidates if isinstance(c,dict) and c.get("id")==candidate_id),None)
        if candidate is None: err(f"{p}.candidate_id",f"unknown candidate ID {candidate_id!r}")
        elif candidate.get("name")!=trend.get("candidate"): err(f"{p}.candidate_id","must match the candidate label")
        snapshot=snapshot_by_id.get(snapshot_id)
        if snapshot:
            if trend.get("snapshot_date")!=snapshot.get("snapshot_date"): err(f"{p}.snapshot_date","must match its snapshot date")
            if trend.get("source_id")!=snapshot.get("source_id"): err(f"{p}.source_id","must match its snapshot source")
            if trend.get("method")!=snapshot.get("method"): err(f"{p}.method","must match its snapshot method")
        for k in ("average","observed_min","observed_max"):
            if k in trend:
                v=trend[k]
                if not isinstance(v,(int,float)) or isinstance(v,bool) or not 0<=v<=100: err(f"{p}.{k}","must be a percentage from 0 to 100")
        count=trend.get("polls_count")
        if not isinstance(count,int) or isinstance(count,bool) or count<1: err(f"{p}.polls_count","must be a positive integer")
        if trend.get("change_30d") is not None and (not isinstance(trend["change_30d"],(int,float)) or isinstance(trend["change_30d"],bool) or not -100<=trend["change_30d"]<=100): err(f"{p}.change_30d","must be a percentage-point change or null")
    for sid,snapshot in snapshot_by_id.items():
        declared=snapshot.get("observation_ids")
        actual=trend_ids_by_snapshot.get(sid,[])
        if isinstance(declared,list) and set(declared)!=set(actual): err(f"poll_trend_snapshots[{sid}].observation_ids","must list exactly the linked trend observation IDs")

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
