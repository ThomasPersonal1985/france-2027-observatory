(function(){
  const gate=globalThis.EditorialWorkflow;
  if(!gate)throw new Error('Load editorial-workflow.js before these tests');
  let checks=0;
  function check(value,message){if(!value)throw new Error(message);checks++;}
  const sources=[{id:'src-0123456789abcdef',title:'Primary source',url:'https://example.org/source'}];
  const legacy={editorial:{status:'under_review',verification:{status:'unverified'},publication:{approved_by:null,approved_date:null},claims:[],legacy_public:true}};
  const pending={editorial:{status:'under_review',verification:{status:'unverified'},publication:{approved_by:null,approved_date:null},claims:[],legacy_public:false}};
  check(gate.isPubliclyVisible(legacy,sources),'existing legacy content must remain visible');
  check(!gate.isApprovedForPublication(legacy,sources),'legacy content must not be treated as approved');
  check(gate.publicLabel(legacy)==='Legacy public record · review pending','legacy content must carry a visible review label');
  check(!gate.isPubliclyVisible(pending,sources),'new under-review content must be hidden');
  for(const status of ['collected','under_review','verified','rejected','needs_updating']){
    const record={editorial:{...pending.editorial,status,legacy_public:false}};
    check(!gate.isPubliclyVisible(record,sources),`${status} content without legacy protection must be hidden`);
  }
  check(!gate.isPubliclyVisible({title:'Record with no editorial metadata'},sources),'records missing editorial status must fail closed');
  const claim={id:'claim-1',text:'The candidate stated this position.',classification:'candidate_statement',verification_status:'verified',evidence:[{source_id:sources[0].id,locator:'paragraph 2',supports:'The source directly records the statement',publication_date:'2026-11-01',checked_date:'2026-11-09'}],editorial_notes:''};
  const approved={editorial:{status:'approved_for_publication',verification:{status:'verified',last_verified_date:'2026-11-09',reviewer:'Fact checker'},publication:{approved_by:'Editor',approved_date:'2026-11-09'},claims:[claim],legacy_public:false}};
  check(gate.isApprovedForPublication(approved,sources),'fully verified and approved evidence-backed record should pass');
  check(gate.isPubliclyVisible(approved,sources),'approved record should be visible');
  check(gate.publicLabel(approved,sources)==='Verified · approved for publication','approved record must carry the approved label');
  const badSource={...approved,editorial:{...approved.editorial,claims:[{...claim,evidence:[{...claim.evidence[0],source_id:'src-ffffffffffffffff'}]}]}};
  check(!gate.isPubliclyVisible(badSource,sources),'approved record with unknown source must be hidden');
  const badClaim={...approved,editorial:{...approved.editorial,claims:[{...claim,verification_status:'disputed'}]}};
  check(!gate.isPubliclyVisible(badClaim,sources),'disputed claim must block publication');
  const noLocator={...approved,editorial:{...approved.editorial,claims:[{...claim,evidence:[{...claim.evidence[0],locator:''}]}]}};
  check(!gate.isPubliclyVisible(noLocator,sources),'evidence without a locator must block publication');
  const unsafeSource={id:'src-0123456789abcdef',title:'Unsafe source',url:'javascript:alert(1)'};
  check(!gate.isPubliclyVisible(approved,[unsafeSource]),'non-HTTP source URLs must block publication');
  const rejectedLegacy={editorial:{...legacy.editorial,status:'rejected'}};
  check(!gate.isPubliclyVisible(rejectedLegacy,sources),'rejected legacy content must be hidden');
  check(gate.filterPublicRecords([legacy,pending,approved,rejectedLegacy],sources).length===2,'public record filtering must retain legacy and valid approved records only');
  console.log(`Public editorial gate: ${checks} checks passed.`);
})();
