let DB;
const $=s=>document.querySelector(s);
const safe=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const link=s=>{if(!s||!s.url)return '';try{const u=new URL(s.url);if(!['https:','http:'].includes(u.protocol))return '';return `<a href="${safe(u.href)}" target="_blank" rel="noopener noreferrer">${safe(s.title||'Read source')} ↗</a>`}catch{return ''}};
async function init(){
 try{
  const response=await fetch('data/election-data.json',{cache:'no-store'});
  if(!response.ok)throw new Error('Could not load data/election-data.json (HTTP '+response.status+')');
  DB=await response.json();
 }catch(e){
  const main=document.querySelector('main');
  if(main)main.innerHTML=`<div class="notice">Research data could not be loaded. Check that data/election-data.json is in the repository root folder. ${safe(e.message)}</div>`;
  return;
 }
 try{render()}catch(e){
  console.error('Page rendering failed:',e);
  const main=document.querySelector('main');
  if(main)main.innerHTML=`<div class="notice">The research data loaded, but the page could not be rendered. ${safe(e.message)}</div>`;
 }
}
function setText(selector,value){const el=$(selector);if(el)el.textContent=value}
function setHTML(selector,value){const el=$(selector);if(el)el.innerHTML=value}
function render(){
 setText('#updated','RESEARCH UPDATED · '+DB.meta.last_updated);
 setText('#stat-candidates',DB.candidates.length);
 setText('#stat-polls',DB.polls.length);
 setText('#stat-news',DB.news.length);
 setText('#stat-events',DB.events.length);
 setText('#count-candidates',DB.candidates.length+' candidates tracked');
 setHTML('#next-events',DB.events.slice(0,4).map(eventCard).join(''));
 setHTML('#debate-participants',(DB.debates[0]?.participants||[]).map(n=>`<span class="chip">${safe(n)}</span>`).join(''));
 renderOverview();renderCandidates();renderPolicies();renderPolls();renderNews();renderTimeline();renderSources();renderCompass();
}
function renderOverview(){
 const candidates=DB.candidates||[], polls=DB.polls||[], news=[...(DB.news||[])].sort((a,b)=>b.publication_date.localeCompare(a.publication_date));
 setText('#overview-snapshot','RESEARCH SNAPSHOT · '+String(DB.meta.last_updated||'').replaceAll('-','/'));
 const trends=[...(DB.poll_trends||[])].sort((a,b)=>Number(b.average)-Number(a.average));
 const declared=candidates.filter(c=>/^Declared/.test(c.campaign_status||'')).length;
 const potential=candidates.length-declared;
 const kpis=[
  ['People tracked',candidates.length,'Declared, potential and other monitored figures'],
  ['Poll records',polls.length,'Individual survey observations in the archive'],
  ['News reports',news.length,'Linked French and English coverage'],
  ['Election rounds','2','First and second rounds scheduled for April and May 2027']
 ];
 $('#overview-kpis').innerHTML=kpis.map(k=>`<article class="overview-kpi"><span>${safe(k[0])}</span><strong>${safe(k[1])}</strong><small>${safe(k[2])}</small></article>`).join('');
 $('#overview-latest').innerHTML=news.slice(0,4).map((n,i)=>`<article class="overview-story ${i===0?'featured':''}"><div class="eyebrow">${safe(n.publisher)} · ${safe(n.publication_date)} · ${safe(n.language)}</div><h3>${safe(n.title)}</h3><p>${safe(n.summary)}</p>${link(n.source)}</article>`).join('')||'<p class="muted">No news reports have been added yet.</p>';
 const top=trends.slice(0,6);
 renderOverviewPollChart();
 $('#overview-candidate-summary').innerHTML=`<span><b>${declared}</b> publicly declared / stated contenders</span><span><b>${potential}</b> potential or other tracked figures</span><span><b>${candidates.length}</b> tracked in total</span>`;
 const focus=top.slice(0,5).map(t=>candidates.find(c=>c.name===t.candidate)).filter(Boolean);
 $('#overview-candidates').innerHTML=focus.map(c=>`<article class="overview-person"><div class="overview-avatar">${safe(c.name.split(/\s+/).map(x=>x[0]).slice(0,2).join(''))}</div><div><b>${safe(c.name)}</b><small>${safe(c.party)}</small><span>${safe((c.campaign_status||'Status not established').split(';')[0])}</span></div></article>`).join('')||'<p class="muted">Candidate profiles are being compiled.</p>';
 const today=new Date().toISOString().slice(0,10);
 const upcoming=(DB.events||[]).filter(e=>(e.date||'').slice(0,10)>=today).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,3);
 $('#overview-events').innerHTML=upcoming.map(e=>`<article class="overview-event"><time>${safe(e.date_label||e.date)}</time><div><b>${safe(e.title)}</b><small>${safe(e.status||'')}</small></div></article>`).join('')||'<p class="muted">No upcoming milestones currently listed.</p>';
}
function eventCard(e){return `<div class="event"><time>${safe(e.date_label||e.date)}</time><b>${safe(e.title)}</b><small>${safe(e.detail)}</small></div>`}

const pollChartPalette=['#245c91','#c84b59','#477eae','#d47780','#173f68','#9b5367','#6d9fc4','#a9b8c8'];
let pollChartRange='all';
const pollChartHidden=new Set();
function renderOverviewPollChart(){
 const host=$('#overview-poll-chart'); if(!host)return;
 const polls=[...(DB.polls||[])].filter(p=>p.results&&p.publication_date).sort((a,b)=>a.publication_date.localeCompare(b.publication_date));
 const latest=polls[polls.length-1];
 const rangeDays=pollChartRange==='all'?null:Number(pollChartRange);
 const newest=latest?new Date(latest.publication_date+'T12:00:00'):new Date();
 const cutoff=rangeDays?new Date(newest.getTime()-rangeDays*86400000):null;
 const shown=polls.filter(p=>!cutoff||new Date(p.publication_date+'T12:00:00')>=cutoff);
 const names=['Marine Le Pen','Jean-Luc Mélenchon','Édouard Philippe','Raphaël Glucksmann','Bruno Retailleau','Éric Zemmour','Marine Tondelier'];
 const W=1000,H=430,L=58,R=28,T=22,B=58,plotW=W-L-R,plotH=H-T-B;
 const dates=shown.map(p=>new Date(p.publication_date+'T12:00:00').getTime());
 const minX=dates.length?Math.min(...dates):newest.getTime(),maxX=dates.length?Math.max(...dates):newest.getTime();
 const x=t=>L+(maxX===minX?plotW/2:(t-minX)/(maxX-minX)*plotW);
 const y=v=>T+plotH-(Number(v)/40)*plotH;
 const dateLabel=t=>new Date(t).toLocaleDateString('en-GB',{day:'numeric',month:'short'});
 let svg=`<svg class="poll-trend-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="First-round voting intentions across ${shown.length} published polls">`;
 [0,10,20,30,40].forEach(v=>{svg+=`<line x1="${L}" y1="${y(v)}" x2="${W-R}" y2="${y(v)}" class="poll-gridline"/><text x="${L-12}" y="${y(v)+5}" text-anchor="end" class="poll-axis-label">${v}%</text>`});
 const ticks=5;
 for(let i=0;i<ticks;i++){const t=minX+(maxX-minX)*(i/(ticks-1));svg+=`<text x="${x(t)}" y="${H-20}" text-anchor="middle" class="poll-axis-label">${dateLabel(t)}</text>`}
 names.forEach((name,idx)=>{
  if(pollChartHidden.has(name))return;
  const pts=shown.filter(p=>Object.prototype.hasOwnProperty.call(p.results,name)).map(p=>({p,t:new Date(p.publication_date+'T12:00:00').getTime(),v:Number(p.results[name])})).filter(o=>Number.isFinite(o.v));
  if(!pts.length)return;
  const d=pts.map((o,i)=>(i?'L':'M')+x(o.t).toFixed(1)+','+y(o.v).toFixed(1)).join(' ');
  const color=pollChartPalette[idx%pollChartPalette.length];
  svg+=`<path d="${d}" fill="none" stroke="${color}" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="poll-series"/>`;
  pts.forEach(o=>{svg+=`<circle cx="${x(o.t)}" cy="${y(o.v)}" r="3.2" fill="${color}" stroke="#fff" stroke-width="2"><title>${safe(name)}: ${o.v}% · ${safe(o.p.pollster)} · ${safe(o.p.publication_date)}</title></circle>`});
 });
 svg+='</svg>';
 host.innerHTML=shown.length?svg:'<p class="muted">No dated polling observations in this period.</p>';
 $('#poll-chart-count').textContent=`${shown.length} polls · ${shown.length?dateLabel(minX)+' to '+dateLabel(maxX):'no observations'}`;
 const legend=$('#overview-poll-legend');
 if(legend)legend.innerHTML=names.map((name,i)=>`<button class="poll-legend-item ${pollChartHidden.has(name)?'is-hidden':''}" data-poll-name="${safe(name)}"><i style="--poll-color:${pollChartPalette[i%pollChartPalette.length]}"></i>${safe(name)}</button>`).join('');
 if(latest){
  const namesInPoll=Object.entries(latest.results).sort((a,b)=>b[1]-a[1]).slice(0,5);
  $('#overview-latest-poll').innerHTML=`<div class="latest-poll-heading"><div><span class="eyebrow">LATEST POLL IN THE ARCHIVE</span><h3>${safe(latest.pollster)} · ${safe(latest.sponsor||'Sponsor not specified')}</h3></div><strong>${safe(latest.fieldwork_label||latest.publication_date)}</strong></div><div class="latest-poll-meta"><span>Sample: ${safe(latest.sample_size||'Not stated')}</span><span>Published: ${safe(latest.publication_date)}</span></div><div class="latest-poll-leaders">${namesInPoll.map((o,i)=>`<div><span>${i+1}. ${safe(o[0])}</span><b>${safe(o[1])}%</b></div>`).join('')}</div><div class="latest-poll-source">${link(latest.source)}</div>`;
 }
 document.querySelectorAll('[data-poll-range]').forEach(b=>b.classList.toggle('active',b.dataset.pollRange===pollChartRange));
 document.querySelectorAll('[data-poll-range]').forEach(b=>{if(!b.dataset.bound){b.dataset.bound='1';b.addEventListener('click',()=>{pollChartRange=b.dataset.pollRange;renderOverviewPollChart()})}});
 document.querySelectorAll('[data-poll-name]').forEach(b=>{if(!b.dataset.bound){b.dataset.bound='1';b.addEventListener('click',()=>{const n=b.dataset.pollName;pollChartHidden.has(n)?pollChartHidden.delete(n):pollChartHidden.add(n);renderOverviewPollChart()})}});
}
function renderCandidates(){
 const q=$('#candidate-search').value.toLowerCase();
 const list=DB.candidates.filter(c=>(c.name+' '+c.party+' '+c.orientation+' '+c.campaign_status).toLowerCase().includes(q));
 $('#candidate-list').innerHTML=list.map(c=>{
  const d=c.dossier||{};
  const themes=(d.themes||[]).map(x=>`<li>${safe(x)}</li>`).join('');
  const positions=(d.positions||[]).map(p=>`<div class="dossier-position"><strong>${safe(p.area)} · ${safe(p.date)}</strong><p>${safe(p.detail)}</p><span class="small muted">${safe(p.evidence)}</span></div>`).join('');
  const sources=(c.sources||[]).map(link).join(' · ');
  return `<article class="candidate"><h3>${safe(c.name)}</h3><div class="party">${safe(c.party)} · ${safe(c.orientation)}</div><span class="status">${safe(c.campaign_stage||'Status under review')}</span><div class="ballot"><b>Official ballot status:</b> ${safe(c.ballot_status||'Not yet established')}<small>${safe(c.ballot_status_note||'The Constitutional Council determines the official list after checking statutory requirements.')} <a href="https://qpc360.conseil-constitutionnel.fr/2019-05-17/decision-2019-783-qpc-17-mai-2019" target="_blank" rel="noopener noreferrer">Official legal framework ↗</a></small></div><p><b>At a glance:</b> ${safe(c.policy_summary||c.profile)}</p><p class="small muted"><b>Programme:</b> ${safe(c.programme_status||'Not established')}</p><p class="programme-link">${c.programme_link?`<a href="${safe(c.programme_link)}" target="_blank" rel="noopener noreferrer">${safe(c.programme_link_label||'Read programme')} ↗</a>`:`<span class="coming-soon">${safe(c.programme_link_label||'Coming soon')}</span>`}<small>${safe(c.programme_link_note||'')}</small></p>
  <details><summary>OPEN FULL RESEARCH DOSSIER ↗</summary><div class="dossier-grid">
   <section class="dossier-block"><h4>Political biography</h4><p>${safe(d.bio||c.profile)}</p></section>
   <section class="dossier-block"><h4>Political record</h4><p>${safe(d.record||'Further record research pending.')}</p></section>
   <section class="dossier-block"><h4>Policy priorities</h4><ul>${themes}</ul></section>
   <section class="dossier-block"><h4>Programme status</h4><p>${safe(d.programme||c.programme_status||'Not established')}</p></section>
  </div><section class="dossier-block" style="margin-top:12px"><h4>Current attributable positions</h4>${positions||'<p>No specific dated positions coded yet.</p>'}</section>
  <div class="dossier-grid"><section class="dossier-block"><h4>Feasibility questions</h4><p>${safe(d.feasibility||'Independent costing pending.')}</p></section><section class="dossier-block"><h4>Open questions</h4><p>${safe(d.open||'Further verification pending.')}</p></section></div>
  <section class="dossier-block" style="margin-top:12px"><h4>Official website audit</h4><p><b>${safe(c.official_site_audit?.status||'Not yet systematically verified')}</b> · checked ${safe(c.official_site_audit?.checked_date||'Not recorded')}</p><p>${safe(c.official_site_audit?.note||'Direct official-site review pending.')}</p>${c.official_site_audit?.url?`<p><a href="${safe(c.official_site_audit.url)}" target="_blank" rel="noopener">Open official source ↗</a></p>`:''}</section><section class="dossier-block" style="margin-top:12px"><h4>Source trail</h4><p>${sources}</p></section></details></article>`;
 }).join('')||'<p>No matching candidate.</p>';
}
function renderPolicies(){const q=$('#policy-search').value.toLowerCase(),topic=$('#policy-topic').value;const rows=DB.policy_positions.filter(p=>(!topic||p.topic===topic)&&JSON.stringify(p).toLowerCase().includes(q));$('#policy-list').innerHTML=rows.length?`<table><thead><tr><th>Candidate</th><th>Policy area</th><th>Position / proposal</th><th>Evidence</th><th>Source</th></tr></thead><tbody>${rows.map(p=>`<tr><td>${safe(p.candidate_name)}</td><td>${safe(p.topic)}</td><td>${safe(p.position)}</td><td>${safe(p.evidence_type||'Not specified')}<br>${safe(p.statement_date||'')}</td><td>${link(p.source)||'Source pending'}</td></tr>`).join('')}</tbody></table>`:'<div class="notice">No sourced policy entries match this filter. Empty does not mean the candidate has no position.</div>'}
function renderPolls(){const trend=DB.poll_trends||[];$('#poll-trend').innerHTML=trend.length?`<div class="trend-note"><b>Rolling-average snapshot</b><span>Research workbook snapshot · latest poll per institute in a 35-day window · not an individual poll or forecast.</span></div><div class="trend-grid">${trend.map(t=>`<div class="trend-row"><div class="trend-label"><b>${safe(t.candidate)}</b><strong>${Number(t.average).toFixed(1)}%</strong></div><div class="track"><span style="width:${Math.max(0,Math.min(100,Number(t.average)/40*100))}%"></span></div><small>Observed range ${safe(t.observed_min)}–${safe(t.observed_max)}% · ${safe(t.polls_count)} polls/institutes${t.change_30d==null?'':` · ${t.change_30d>0?'+':''}${safe(t.change_30d)} pts / 30d`}</small></div>`).join('')}</div>`:'<div class="notice">No rolling-average snapshot loaded.</div>';const rows=[...(DB.polls||[])].sort((a,b)=>b.publication_date.localeCompare(a.publication_date));$('#poll-list').innerHTML=rows.length?`<table><thead><tr><th>Poll date</th><th>Pollster / sponsor</th><th>Fieldwork</th><th>Sample</th><th>Results (%)</th><th>Source / note</th></tr></thead><tbody>${rows.map(p=>`<tr><td>${safe(p.publication_date)}</td><td><b>${safe(p.pollster)}</b><br>${safe(p.sponsor)}</td><td>${safe(p.fieldwork_label||p.fieldwork_start+' to '+p.fieldwork_end)}</td><td>${safe(p.sample_size)}</td><td>${Object.entries(p.results||{}).map(([n,v])=>`${safe(n)} ${safe(v)}%`).join('<br>')}</td><td>${link(p.source)}<br><small>${safe(p.data_note||'')}</small></td></tr>`).join('')}</tbody></table>`:'<div class="notice">No poll-level records loaded.</div>'}
function renderNews(){const q=$('#news-search').value.toLowerCase(),lang=$('#news-language').value;const rows=[...(DB.news||[])].sort((a,b)=>b.publication_date.localeCompare(a.publication_date)).filter(n=>(!lang||n.language===lang)&&JSON.stringify(n).toLowerCase().includes(q));$('#news-list').innerHTML=rows.length?rows.map(n=>`<article class="source"><div class="eyebrow">${safe(n.language)} · ${safe(n.publication_date)} · ${safe(n.topic||'Campaign')}</div><h3>${safe(n.title)}</h3><p><b>${safe(n.publisher)}</b></p><p>${safe(n.summary)}</p>${link(n.source)}${n.verification?`<p class="small muted"><b>Editorial check:</b> ${safe(n.verification.status)} · checked ${safe(n.verification.checked_date)}${n.verification.note?' · '+safe(n.verification.note):''}</p>`:''}</article>`).join(''):'<div class="notice">No articles match this search.</div>'}
function renderTimeline(){$('#timeline-list').innerHTML=DB.events.map(e=>`<div class="timeline-item"><time>${safe(e.date_label||e.date)}</time><h3>${safe(e.title)}</h3><p>${safe(e.detail)} ${safe(e.status||'')}</p></div>`).join('')}
function renderSources(){const primary=DB.sources.filter(s=>!String(s.type).includes('monitored outlet directory'));const directory=DB.media_directory||[];const e=DB.editorial_standards||{};$('#source-list').innerHTML=`<h3 class="full-row">Core institutional, research and reference sources</h3>${primary.map(s=>`<article class="source"><h3>${link(s)}</h3><p>${safe(s.publisher)} · ${safe(s.language)} · ${safe(s.type)}</p></article>`).join('')}<h3 class="full-row">Media monitoring directory · ${directory.length} outlets</h3><p class="full-row muted small">This is a monitoring list, not a claim that every outlet has published a relevant article or that all coverage carries equal evidential weight.</p>${directory.map(s=>`<article class="source"><h3><a href="${safe(s.url)}" target="_blank" rel="noopener noreferrer">${safe(s.publisher)} ↗</a></h3><p>${safe(s.language)} · ${safe(s.type)}</p></article>`).join('')}`;const box=document.querySelector('#editorial-standards');if(box&&e.version){box.innerHTML=`<h3>Editorial standards & verification policy</h3><p><b>Version ${safe(e.version)} · adopted ${safe(e.adopted_date)}</b> · Editorial responsibility: ${safe(e.editor_in_charge)}.</p><p>${safe(e.current_audit_limit)}</p><h4>Source hierarchy</h4><ol>${e.source_hierarchy.map(x=>`<li>${safe(x)}</li>`).join('')}</ol><h4>Verification labels</h4><ul>${e.verification_statuses.map(x=>`<li><b>${safe(x.label)}:</b> ${safe(x.meaning)}</li>`).join('')}</ul><h4>Claim-level rules</h4><ul>${e.claim_rules.map(x=>`<li>${safe(x)}</li>`).join('')}</ul><h4>Corrections policy</h4><p>${safe(e.corrections_policy)}</p><h4>Voting compass policy</h4><p>${safe(e.compass_policy)}</p>`}}
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.nav [data-tab]').forEach(x=>x.classList.toggle('active',x.dataset.tab===b.dataset.tab));document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id===b.dataset.tab));window.scrollTo({top:0,behavior:'smooth'})}));
$('#candidate-search').addEventListener('input',renderCandidates);$('#policy-search').addEventListener('input',renderPolicies);$('#policy-topic').addEventListener('change',renderPolicies);$('#news-search').addEventListener('input',renderNews);$('#news-language').addEventListener('change',renderNews);
// Voting compass: scores only candidates with coded, attributable positions.
let compassExtended=false;
const compassAnswers={};
function activeCompassQuestions(){const questions=DB?.compass_questions||[];return questions.filter(q=>compassExtended||q.stage!=='extended');}
// Only the first five questions currently have enough comparable, attributable candidate evidence.
// Other questions are collected to establish voter priorities, but are not scored until candidate positions are researched and coded.
const compassPositions={
 'Marine Le Pen':{retirement_age:2,reform:2,funding:null,public_finance:4,debt:4},
 'Jean-Luc Mélenchon':{retirement_age:1,reform:1,funding:1,public_finance:1,debt:1},
 'Édouard Philippe':{retirement_age:5,reform:5,funding:4,public_finance:5,debt:5},
 'Raphaël Glucksmann':{retirement_age:2,reform:1,funding:null,public_finance:2,debt:null},
 'David Lisnard':{retirement_age:null,reform:5,funding:4,public_finance:null,debt:null},
 'Bruno Retailleau':{retirement_age:3,reform:4,funding:4,public_finance:null,debt:null},
 'Gabriel Attal':{retirement_age:null,reform:3,funding:4,public_finance:null,debt:null},
 'Éric Zemmour':{retirement_age:5,reform:5,funding:null,public_finance:null,debt:null},
 'Marine Tondelier':{retirement_age:2,reform:1,funding:1,public_finance:2,debt:null},
 'Nicolas Dupont-Aignan':{retirement_age:2,reform:3,funding:5,public_finance:null,debt:null},
 'Fabien Roussel':{retirement_age:null,reform:null,funding:null,public_finance:null,debt:null},
 'Nathalie Arthaud':{retirement_age:null,reform:null,funding:null,public_finance:null,debt:null},
 'François Ruffin':{retirement_age:null,reform:null,funding:null,public_finance:null,debt:null},
 'Bruno Le Maire':{retirement_age:null,reform:null,funding:null,public_finance:null,debt:null},
 'Natacha Polony':{retirement_age:null,reform:null,funding:null,public_finance:null,debt:null},
 'Xavier Bertrand':{retirement_age:null,reform:null,funding:null,public_finance:null,debt:null}
};
function renderCompass(){
 const host=$('#compass-questions');
 // Preserve answers and importance ratings when the visitor expands from 24 to 36 questions.
 host.querySelectorAll('.compass-question').forEach(card=>{
  const qid=card.dataset.questionId;
  const selected=card.querySelector(`input[name="${qid}"]:checked`);
  const weight=card.querySelector(`#weight-${qid}`);
  if(selected) compassAnswers[qid]=compassAnswers[qid]||{};
  if(!compassAnswers[qid]) compassAnswers[qid]={};
  if(selected) compassAnswers[qid].answer=selected.value;
  if(weight&&weight.value) compassAnswers[qid].weight=weight.value;
 });
 const active=activeCompassQuestions();
 host.innerHTML=active.map((q,i)=>`<article class="card compass-question" data-question-id="${q.id}"><div class="eyebrow">${safe(q.topic)} · QUESTION ${i+1} OF ${active.length}</div><h3>${safe(q.title)}</h3><p>${safe(q.help)}</p><div class="compass-options">${q.options.map(o=>`<label><input type="radio" name="${q.id}" value="${o[1]}" ${compassAnswers[q.id]?.answer===String(o[1])?'checked':''}><span>${safe(o[0])}</span></label>`).join('')}</div><label class="importance">How important is this to you? <select id="weight-${q.id}" required><option value="" ${!compassAnswers[q.id]?.weight?'selected':''} disabled>Choose importance (required)</option><option value="1" ${compassAnswers[q.id]?.weight==='1'?'selected':''}>Somewhat important</option><option value="2" ${compassAnswers[q.id]?.weight==='2'?'selected':''}>Very important</option><option value="3" ${compassAnswers[q.id]?.weight==='3'?'selected':''}>One of my top priorities</option></select><small class="importance-required">Required for every question</small></label></article>`).join('');
 const expand=$('#compass-continue');
 if(expand) expand.hidden=compassExtended;
 const stage=$('#compass-stage-note');
 if(stage) stage.textContent=compassExtended?'Extended compass: all 36 questions across 12 policy areas.':'Standard compass: 24 questions across all 12 policy areas. You can continue to the full 36-question version when you finish.';
}
function calculateCompass(){
 const active=activeCompassQuestions();
 const missing=active.filter(q=>!$('#weight-'+q.id).value);
 if(missing.length){const first=$('#weight-'+missing[0].id);first.focus();first.reportValidity();$('#compass-output').innerHTML=`<div class="notice">Please select an importance level for every question shown. ${missing.length} question${missing.length===1?' is':'s are'} still missing an importance rating.</div>`;return}
 const answers={};
 for(const q of active){const selected=document.querySelector(`input[name="${q.id}"]:checked`);if(selected){answers[q.id]=Number(selected.value);answers['w_'+q.id]=Number($('#weight-'+q.id).value)}}
 const scoreable=active.filter(q=>['retirement_age','reform','funding','public_finance','debt'].includes(q.id)&&answers[q.id]!=null);
 if(!scoreable.length){$('#compass-output').innerHTML='<div class="notice">Your answers are recorded in this session, but candidate matching currently has comparable coded evidence for only a small number of pension and public-finance questions. Answer at least one of those questions to see a provisional comparison.</div>';return}
 const ranked=DB.candidates.map(c=>{const pos=compassPositions[c.name]||{};let total=0,possible=0,covered=0;const details=[];for(const q of scoreable){const stance=pos[q.id];if(stance==null)continue;const w=answers['w_'+q.id];const max=q.max||5;const distance=Math.abs(answers[q.id]-stance);const match=1-distance/(max-1);total+=match*w;possible+=w;covered++;details.push({title:q.title,match})}return {candidate:c,score:possible?Math.round(total/possible*100):null,coverage:covered,details}}).filter(x=>x.score!==null&&x.coverage>=1).sort((x,y)=>y.score-x.score||y.coverage-x.coverage);
 const out=$('#compass-output');
 if(!ranked.length){out.innerHTML='<div class="notice">There is not enough comparable candidate evidence for the questions you answered. Try answering the pension and public-finance questions for which candidate positions have been coded.</div>';return}
 out.innerHTML=`<section class="card compass-results"><div class="eyebrow">YOUR RESULTS</div><h2>Your closest provisional matches</h2><p class="muted small">This directional score uses ${scoreable.length} answered question${scoreable.length===1?'':'s'} for which this prototype currently has candidate-position coding. It is not a scientific probability or a voting recommendation. Coverage shows how many of those answers could be compared for each candidate.</p>${ranked.map((r,i)=>`<div class="match-row"><div class="match-head"><div><b>${i+1}. ${safe(r.candidate.name)}</b><small>${safe(r.candidate.party)} · evidence for ${r.coverage}/${scoreable.length} comparable answers</small></div><strong>${r.score}%</strong></div><div class="match-track"><span style="width:${r.score}%"></span></div><details><summary>Why this match?</summary>${r.details.map(d=>`<p><b>${safe(d.title)}:</b> ${Math.round(d.match*100)}% directional alignment</p>`).join('')}<p class="muted small">Positions are legacy prototype codings and still require claim-by-claim verification against dated primary sources.</p></details></div>`).join('')}<div class="notice">Important limitation: the 24/36-question framework covers 12 policy areas, but candidate matching is currently based only on a small legacy set of pension and public-finance positions. The remaining answers do not yet affect the ranking. Treat these results as an incomplete prototype, not a fully researched election recommendation.</div></section>`;
 out.scrollIntoView({behavior:'smooth',block:'start'});
}
$('#compass-results').addEventListener('click',calculateCompass);
$('#compass-continue').addEventListener('click',()=>{compassExtended=true;renderCompass();$('#compass-output').innerHTML='';});
$('#compass-reset').addEventListener('click',()=>{compassExtended=false;Object.keys(compassAnswers).forEach(k=>delete compassAnswers[k]);renderCompass();$('#compass-output').innerHTML='';});
renderCompass();
init();
