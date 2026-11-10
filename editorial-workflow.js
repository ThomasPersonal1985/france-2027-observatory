/* Fail-closed public publication policy shared by the UI and gate tests. */
(function(root){
  const WORKFLOW_STATUSES=new Set(['collected','under_review','verified','approved_for_publication','rejected','needs_updating']);
  const EVIDENCE_CLASSIFICATIONS=new Set(['confirmed_fact','candidate_statement','independent_analysis']);
  function validSourceEvidence(evidence,sourceById){
    if(!evidence||typeof evidence!=='object'||typeof evidence.locator!=='string'||!evidence.locator.trim()||typeof evidence.supports!=='string'||!evidence.supports.trim()||typeof evidence.checked_date!=='string'||!evidence.checked_date)return false;
    if(!Object.prototype.hasOwnProperty.call(evidence,'publication_date'))return false;
    if(evidence.publication_date!==null&&(typeof evidence.publication_date!=='string'||!evidence.publication_date))return false;
    const source=sourceById.get(evidence.source_id);
    if(!source||typeof source.url!=='string'||typeof source.title!=='string'||!source.title.trim())return false;
    try{const url=new URL(source.url);if(!['https:','http:'].includes(url.protocol))return false}catch{return false}
    return true;
  }
  function isApprovedForPublication(record,sourceRegistry=[]){
    const editorial=record&&record.editorial;
    if(!editorial||editorial.legacy_public===true||editorial.status!=='approved_for_publication')return false;
    const verification=editorial.verification||{},publication=editorial.publication||{},claims=editorial.claims;
    if(verification.status!=='verified'||!verification.last_verified_date||typeof verification.reviewer!=='string'||!verification.reviewer.trim())return false;
    if(!publication.approved_by||typeof publication.approved_by!=='string'||!publication.approved_by.trim()||!publication.approved_date)return false;
    if(!Array.isArray(claims)||claims.length===0)return false;
    const sourceById=new Map((Array.isArray(sourceRegistry)?sourceRegistry:[]).map(source=>[source.id,source]));
    return claims.every(claim=>claim&&typeof claim.text==='string'&&claim.text.trim()&&EVIDENCE_CLASSIFICATIONS.has(claim.classification)&&claim.verification_status==='verified'&&Array.isArray(claim.evidence)&&claim.evidence.length>0&&claim.evidence.every(item=>validSourceEvidence(item,sourceById)));
  }
  function isLegacyVisible(record){
    const editorial=record&&record.editorial;
    return Boolean(editorial&&editorial.legacy_public===true&&['under_review','needs_updating'].includes(editorial.status));
  }
  function isPubliclyVisible(record,sourceRegistry=[]){
    return isApprovedForPublication(record,sourceRegistry)||isLegacyVisible(record);
  }
  function filterPublicRecords(records,sourceRegistry=[]){
    return (Array.isArray(records)?records:[]).filter(record=>isPubliclyVisible(record,sourceRegistry));
  }
  function publicLabel(record,sourceRegistry=[],language='en'){
    const french=language==='fr';
    if(isApprovedForPublication(record,sourceRegistry))return french?'Vérifié · approuvé pour publication':'Verified · approved for publication';
    if(isLegacyVisible(record))return french?'Ancien contenu public · vérification en attente':'Legacy public record · review pending';
    return french?'Non approuvé pour publication':'Not approved for publication';
  }
  root.EditorialWorkflow={WORKFLOW_STATUSES,isApprovedForPublication,isLegacyVisible,isPubliclyVisible,filterPublicRecords,publicLabel};
  if(typeof module!=='undefined'&&module.exports)module.exports=root.EditorialWorkflow;
})(typeof globalThis!=='undefined'?globalThis:this);
