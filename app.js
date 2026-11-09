
const candidatePortraits={
 'Marine Le Pen':{url:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Marine_Le_Pen_VIVA_24_(cropped).jpg',credit:'Vox España · Wikimedia Commons · CC0 1.0',source:'https://commons.wikimedia.org/wiki/File:Marine_Le_Pen_VIVA_24_(cropped).jpg'},
 'Jean-Luc Mélenchon':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_officiel_JLM_20-01-2026.jpg?width=560',credit:'jlm2017.fr · Wikimedia Commons · CC BY 4.0',source:'https://commons.wikimedia.org/wiki/File:Portrait_officiel_JLM_20-01-2026.jpg'},
 'Édouard Philippe':{url:'https://www.linfo.re/public/images/2026/8/3/edouard-philippe-65fe__193176_w-1200.webp',credit:'LINFO.re · portrait publié 3 August 2026',source:'https://www.linfo.re/la-reunion/societe/edouard-philippe-a-la-reunion-des-ce-dimanche-decouvrez-le-programme-de-sa-visite'},
 'Raphaël Glucksmann':{url:'https://allary-editions.fr/cdn/shop/collections/portrait_raphael_glucksmann_400x.jpg?v=1626701051',credit:'Julien Mignot · Allary Éditions',source:'https://allary-editions.fr/collections/raphael-glucksmann'},
 'Gabriel Attal':{url:'https://cloudfront-eu-central-1.images.arcpublishing.com/lexpress/Q2JBPWZLYVBBVD3NMH5QQ55NEQ.jpg',credit:'L’Express',source:'https://www.lexpress.fr/auteur/perou-olivier/'},
 'Bruno Retailleau':{url:'https://static.lejdd.fr/lmnr/var/jdd/public/media/image/2026/02/28/15/bruno-retailleau-cbruno-martin-0z3a7402-copie_master.jpeg',credit:'Bruno Martin · Le JDD',source:'https://www.lejdd.fr/politique/bruno-retailleau-la-dissuasion-nucleaire-francaise-ne-se-partage-pas-167502'},
 'Marine Tondelier':{url:'https://static.piaille.fr/accounts/avatars/109/293/203/690/165/330/original/a62842f82b58df96.jpg',credit:'Marine Tondelier · Piaille',source:'https://piaille.fr/@marinetondelier'},
 'David Lisnard':{url:'https://cloudfront-eu-central-1.images.arcpublishing.com/lepoint/K3ZQX3WOBRIXDFPUYIFO4JNGRA.jpg',credit:'Le Point',source:'https://www.lepoint.fr/politique/le-maire-lr-de-cannes-david-lisnard-lance-son-parti-nouvelle-energie-09-06-2021-2430313_20.php'},
 'Éric Zemmour':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89ric_Zemmour_2022.jpg?width=560',credit:'Wikimedia Commons',source:'https://commons.wikimedia.org/wiki/Category:%C3%89ric_Zemmour'},
 'François Ruffin':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois_Ruffin_2022.jpg?width=560',credit:'Wikimedia Commons',source:'https://commons.wikimedia.org/wiki/Category:Fran%C3%A7ois_Ruffin'},
 'Fabien Roussel':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Fabien_Roussel_2022.jpg?width=560',credit:'Wikimedia Commons',source:'https://commons.wikimedia.org/wiki/Category:Fabien_Roussel'},
 'Nicolas Dupont-Aignan':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Nicolas_Dupont-Aignan_2017.jpg?width=560',credit:'Wikimedia Commons',source:'https://commons.wikimedia.org/wiki/Category:Nicolas_Dupont-Aignan'},
 'Natacha Polony':{url:'https://media.marianne.net/assets/asPdYFXgHQdXLAzt3.jpg?h=462&r=fill&w=770',credit:'Marianne',source:'https://www.marianne.net/agora/les-signatures-de-marianne/natacha-polony-depuis-25-ans-marianne-tire-a-boulets-rouges-sur-la-pensee-unique'},
 'Xavier Bertrand':{url:'https://assets.nicematin.com/articles/70/20/90/ARTVIEW-702090-1200-800-1ac4a43_upload-from-url-1-k8xdsmpxwnwi-xavier-bertrand-tzeeohc2.jpg?crop=3%3A2%2Csmart&format=auto&optimize=medium&quality=85&width=560',credit:'Nice-Matin',source:'https://www.nicematin.com/societe/politique/xavier-bertrand-lance-son-nouveau-mouvement-nous-france-le-1er-octobre-a-saint-quentin-784307'},
 'Nathalie Arthaud':{url:'https://images.rtl.fr/~c/2000v2000/rtl/www/1801285-nathalie-arthaud.jpg',credit:'RTL',source:'https://www.rtl.fr/actu/politique/presidentielle-2027-qui-est-vraiment-nathalie-arthaud-la-porte-parole-de-lutte-ouvriere-7900575536'},
 'Bruno Le Maire':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Bruno_Le_Maire_2017.jpg?width=560',credit:'Wikimedia Commons',source:'https://commons.wikimedia.org/wiki/Category:Bruno_Le_Maire'},
 'Teddy Riner':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Teddy_Riner_JO_2012_(cropped).jpg?width=560',credit:'Nicolas Richoffer · Wikimedia Commons',source:'https://commons.wikimedia.org/wiki/File:Teddy_Riner_JO_2012_(cropped).jpg'},
 'Bernard Cazeneuve':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Cazeneuve_official_PM_portrait_(cropped).png?width=560',credit:'Service photographique de Matignon · Licence Ouverte 1.0',source:'https://commons.wikimedia.org/wiki/File:Cazeneuve_official_PM_portrait_(cropped).png'},
 'Dominique de Villepin':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/De_Villepin_PM_portrait.png?width=560',credit:'Service photographique de Matignon · Licence Ouverte 1.0',source:'https://commons.wikimedia.org/wiki/File:De_Villepin_PM_portrait.png'},
 'Jean Lassalle':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Jean_Lassalle.jpg?width=560',credit:'0x010C · Wikimedia Commons',source:'https://commons.wikimedia.org/wiki/File:Jean_Lassalle.jpg'},
 'François Asselineau':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois_Asselineau%2C_2015-01-10.jpg?width=560',credit:'Thomas Bresson · Wikimedia Commons',source:'https://commons.wikimedia.org/wiki/File:Fran%C3%A7ois_Asselineau%2C_2015-01-10.jpg'},
 'Delphine Batho':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Delphine_Batho_(cropped).png?width=560',credit:'Wikimedia Commons',source:'https://commons.wikimedia.org/wiki/Category:Delphine_Batho'},
 'Olivier Becht':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Olivier_Becht.jpg?width=560',credit:'Jean-Luc Hauser · Wikimedia Commons',source:'https://commons.wikimedia.org/wiki/File:Olivier_Becht.jpg'},
 'Karim Bouamrane':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Karim_Bouamrane_en_2026.jpg?width=560',credit:'Oumma · Wikimedia Commons · CC BY 4.0',source:'https://commons.wikimedia.org/wiki/File:Karim_Bouamrane_en_2026.jpg'},
 'Juan Branco':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Juan_Branco_portrait.png?width=560',credit:'Yale University · Wikimedia Commons · Public domain',source:'https://commons.wikimedia.org/wiki/File:Juan_Branco_portrait.png'},
 'Sylvain Durif':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Sylvain_Durif.jpg?width=560',credit:'ThimGui · Wikimedia Commons · CC0',source:'https://commons.wikimedia.org/wiki/File:Sylvain_Durif.jpg'},
 'Clara Egger':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Clara_Egger.jpg?width=560',credit:'Thomas Binet · Wikimedia Commons · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Clara_Egger.jpg'},
 'Anasse Kazib':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Anasse_Kazib%2C_d%C3%A9cembre_2021_(resser%C3%A9).jpg?width=560',credit:'PabloMorao27 · Wikimedia Commons · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Anasse_Kazib%2C_d%C3%A9cembre_2021_(resser%C3%A9).jpg'},
 'Francis Lalanne':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Francis_Lalanne_2017.jpg?width=560',credit:'Nicolas Richoffer · Wikimedia Commons · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Francis_Lalanne_2017.jpg'},
 'Manolo Mlekuz':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Photo_de_Manolo_Mlekuz.jpg?width=560',credit:'Wikimedia Commons · CC BY 4.0',source:'https://commons.wikimedia.org/wiki/File:Photo_de_Manolo_Mlekuz.jpg'},
 'Florian Philippot':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Florian_Philippot.jpg?width=560',credit:'Films et documentaires · Wikimedia Commons · CC BY 4.0',source:'https://commons.wikimedia.org/wiki/File:Florian_Philippot.jpg'},
 'Gilles Platret':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/GPlatret.jpg?width=560',credit:'Wikimedia Commons',source:'https://commons.wikimedia.org/wiki/File:GPlatret.jpg'},
 'Jean-François Legendre':{url:'https://assets.livemixr.com/datavisualisation/article_xl/xl_quiestqui_presidentielle/img/Legendre.jpg',credit:'Le Parisien',source:'https://www.leparisien.fr/politique/presidentielle-2027-qui-sont-les-candidats-qui-pourrait-se-lancer-dans-la-course-notre-suivi-en-temps-reel-12-09-2026-KQJ4A7QVERCNJCLGCJGJYY2O74.php'},
 'Mira Markovic':{url:'https://assets.livemixr.com/datavisualisation/article_xl/xl_quiestqui_presidentielle/img/Markovic.png',credit:'Le Parisien',source:'https://www.leparisien.fr/politique/presidentielle-2027-qui-sont-les-candidats-qui-pourrait-se-lancer-dans-la-course-notre-suivi-en-temps-reel-12-09-2026-KQJ4A7QVERCNJCLGCJGJYY2O74.php'},
 'Benoît Mathieu':{url:'https://assets.livemixr.com/datavisualisation/article_xl/xl_quiestqui_presidentielle/img/Mathieu.jpg',credit:'Le Parisien',source:'https://www.leparisien.fr/politique/presidentielle-2027-qui-sont-les-candidats-qui-pourrait-se-lancer-dans-la-course-notre-suivi-en-temps-reel-12-09-2026-KQJ4A7QVERCNJCLGCJGJYY2O74.php'},
 'Antoine Mikolajczak':{url:'https://assets.livemixr.com/datavisualisation/article_xl/xl_quiestqui_presidentielle/img/Miko.jpg',credit:'Le Parisien',source:'https://www.leparisien.fr/politique/presidentielle-2027-qui-sont-les-candidats-qui-pourrait-se-lancer-dans-la-course-notre-suivi-en-temps-reel-12-09-2026-KQJ4A7QVERCNJCLGCJGJYY2O74.php'},
 'Philippe Petit':{url:'https://assets.livemixr.com/datavisualisation/article_xl/xl_quiestqui_presidentielle/img/Petit.jpg',credit:'Le Parisien',source:'https://www.leparisien.fr/politique/presidentielle-2027-qui-sont-les-candidats-qui-pourrait-se-lancer-dans-la-course-notre-suivi-en-temps-reel-12-09-2026-KQJ4A7QVERCNJCLGCJGJYY2O74.php'},
 'Erwan Rohou':{url:'https://assets.livemixr.com/datavisualisation/article_xl/xl_quiestqui_presidentielle/img/Rohou.png',credit:'Le Parisien',source:'https://www.leparisien.fr/politique/presidentielle-2027-qui-sont-les-candidats-qui-pourrait-se-lancer-dans-la-course-notre-suivi-en-temps-reel-12-09-2026-KQJ4A7QVERCNJCLGCJGJYY2O74.php'},
 'Selma Labib':{url:'https://npa-revolutionnaires.org/wp-content/uploads/2026/09/selma_juma-1024x576.jpg',credit:'NPA Révolutionnaires',source:'https://www.npa-revolutionnaires.org/articles/intervention-de-selma-labib-a-la-fete-de-lhumanite-2026'}
};
function portraitMarkup(c,compact=false){const p=candidatePortraits[c.name];const initials=c.name.split(/\s+/).map(x=>x[0]).slice(0,2).join('');return `<div class="candidate-portrait ${compact?'compact':''}">${p?`<img src="${p.url}" alt="Portrait of ${safe(c.name)}" loading="lazy" onerror="this.classList.add('portrait-load-failed');this.replaceWith(Object.assign(document.createElement('span'),{className:'portrait-fallback',textContent:'${initials}'}))"><a href="${p.source}" class="portrait-source" target="_blank" rel="noopener noreferrer">Photo source ↗</a>`:`<span class="portrait-fallback">${initials}</span>`}</div>`}
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
 try{render();if(currentLanguage==='fr')translateVisibleText()}catch(e){
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
 $('#overview-latest').innerHTML=news.slice(0,3).map((n,i)=>`<article class="overview-story ${i===0?'featured':''}"><div class="eyebrow">${safe(n.publisher)} · ${safe(n.publication_date)} · ${safe(n.language)}</div><h3>${safe(n.title)}</h3><p>${safe(n.summary)}</p>${link(n.source)}</article>`).join('')||'<p class="muted">No news reports have been added yet.</p>';
 const top=trends.slice(0,6);
 renderOverviewPollChart();
 $('#overview-candidate-summary').innerHTML=`<span><b>${declared}</b> publicly declared / stated contenders</span><span><b>${potential}</b> potential or other tracked figures</span><span><b>${candidates.length}</b> tracked in total</span>`;
 const focus=top.slice(0,5).map(t=>candidates.find(c=>c.name===t.candidate)).filter(Boolean);
 const portraits=candidatePortraits;
 $('#overview-candidates').innerHTML=focus.map(c=>{const portrait=portraits[c.name];return `<article class="overview-person"><div class="overview-person-photo">${portrait?`<img src="${portrait.url}" alt="Portrait of ${safe(c.name)}" loading="lazy" onerror="const p=this.parentElement;p.classList.add('portrait-missing');const a=document.createElement('span');a.className='overview-avatar';a.textContent='${safe(c.name.split(/\s+/).map(x=>x[0]).slice(0,2).join(''))}';this.remove();p.prepend(a)"><a class="portrait-credit" href="${portrait.source}" target="_blank" rel="noopener noreferrer" title="${safe(portrait.credit)}">Photo credit ↗</a>`:`<span class="overview-avatar">${safe(c.name.split(/\s+/).map(x=>x[0]).slice(0,2).join(''))}</span>`}</div><div class="overview-person-copy"><b>${safe(c.name)}</b><small>${safe(c.party)}</small><span>${safe((c.campaign_status||'Status not established').split(';')[0])}</span><a class="person-open" href="#" data-open-candidate="${safe(c.id)}">View dossier →</a></div></article>`}).join('')||'<p class="muted">Candidate profiles are being compiled.</p>';
 const today=new Date().toISOString().slice(0,10);
 const upcoming=(DB.events||[]).filter(e=>(e.date||'').slice(0,10)>=today).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,3);
 $('#overview-events').innerHTML=upcoming.map(e=>`<article class="overview-event"><time>${safe(e.date_label||e.date)}</time><div><b>${safe(e.title)}</b><small>${safe(e.status||'')}</small></div></article>`).join('')||'<p class="muted">No upcoming milestones currently listed.</p>';
}
function renderCandidates(){
 const q=$('#candidate-search').value.toLowerCase();
 const list=DB.candidates.filter(c=>(c.name+' '+c.party+' '+c.orientation+' '+c.campaign_status).toLowerCase().includes(q));
 $('#candidate-list').innerHTML=list.map(c=>{
  const d=c.dossier||{};
  const themes=(d.themes||[]).map(x=>`<li>${safe(x)}</li>`).join('');
  const positions=(d.positions||[]).map(p=>`<div class="dossier-position"><strong>${safe(p.area)} · ${safe(p.date)}</strong><p>${safe(p.detail)}</p><span class="small muted">${safe(p.evidence)}</span></div>`).join('');
  const sources=(c.sources||[]).map(link).join(' · ');
  return `<article class="candidate candidate-with-portrait">${portraitMarkup(c)}<div class="candidate-card-body"><h3>${safe(c.name)}</h3><div class="party">${safe(c.party)} · ${safe(c.orientation)}</div><span class="status">${safe(c.campaign_stage||'Status under review')}</span><div class="ballot"><b>Official ballot status:</b> ${safe(c.ballot_status||'Not yet established')}<small>${safe(c.ballot_status_note||'The Constitutional Council determines the official list after checking statutory requirements.')} <a href="https://qpc360.conseil-constitutionnel.fr/2019-05-17/decision-2019-783-qpc-17-mai-2019" target="_blank" rel="noopener noreferrer">Official legal framework ↗</a></small></div><p><b>At a glance:</b> ${safe(currentLanguage==='fr'?(c.policy_summary_fr||c.policy_summary||c.profile):(c.policy_summary||c.profile))}</p><p class="small muted"><b>Programme:</b> ${safe(c.programme_status||'Not established')}</p><p class="programme-link">${c.programme_link?`<a href="${safe(c.programme_link)}" target="_blank" rel="noopener noreferrer">${safe(c.programme_link_label||'Read programme')} ↗</a>`:`<span class="coming-soon">${safe(c.programme_link_label||'Coming soon')}</span>`}<small>${safe(c.programme_link_note||'')}</small></p>
  <details><summary>OPEN FULL RESEARCH DOSSIER ↗</summary><div class="dossier-grid">
   <section class="dossier-block"><h4>Political biography</h4><p>${safe(currentLanguage==='fr'?(c.profile_fr||d.bio||c.profile):(d.bio||c.profile))}</p></section>
   <section class="dossier-block"><h4>Political record</h4><p>${safe(d.record||'Further record research pending.')}</p></section>
   <section class="dossier-block"><h4>Policy priorities</h4><ul>${themes}</ul></section>
   <section class="dossier-block"><h4>Programme status</h4><p>${safe(d.programme||c.programme_status||'Not established')}</p></section>
  </div><section class="dossier-block" style="margin-top:12px"><h4>Current attributable positions</h4>${positions||'<p>No specific dated positions coded yet.</p>'}</section>
  <div class="dossier-grid"><section class="dossier-block"><h4>Feasibility questions</h4><p>${safe(d.feasibility||'Independent costing pending.')}</p></section><section class="dossier-block"><h4>Open questions</h4><p>${safe(d.open||'Further verification pending.')}</p></section></div>
  <section class="dossier-block" style="margin-top:12px"><h4>Official website audit</h4><p><b>${safe(c.official_site_audit?.status||'Not yet systematically verified')}</b> · checked ${safe(c.official_site_audit?.checked_date||'Not recorded')}</p><p>${safe(c.official_site_audit?.note||'Direct official-site review pending.')}</p>${c.official_site_audit?.url?`<p><a href="${safe(c.official_site_audit.url)}" target="_blank" rel="noopener">Open official source ↗</a></p>`:''}</section><section class="dossier-block" style="margin-top:12px"><h4>Source trail</h4><p>${sources}</p></section></details></div></article>`;
 }).join('')||'<p>No matching candidate.</p>';
}
function renderPolicies(){const q=$('#policy-search').value.toLowerCase(),topic=$('#policy-topic').value;const rows=DB.policy_positions.filter(p=>(!topic||p.topic===topic)&&JSON.stringify(p).toLowerCase().includes(q));$('#policy-list').innerHTML=rows.length?`<table><thead><tr><th>Candidate</th><th>Policy area</th><th>Position / proposal</th><th>Evidence</th><th>Source</th></tr></thead><tbody>${rows.map(p=>`<tr><td>${safe(p.candidate_name)}</td><td>${safe(p.topic)}</td><td>${safe(p.position)}</td><td>${safe(p.evidence_type||'Not specified')}<br>${safe(p.statement_date||'')}</td><td>${link(p.source)||'Source pending'}</td></tr>`).join('')}</tbody></table>`:'<div class="notice">No sourced policy entries match this filter. Empty does not mean the candidate has no position.</div>'}
function eventCard(e){return `<div class="event"><time>${safe(e.date_label||e.date)}</time><b>${safe(e.title)}</b><small>${safe(e.detail)}</small></div>`}

const pollChartPalette=['#174f83','#d33f50','#3e83c5','#9a4b9c','#5c963f','#b276c9','#68a9d6','#a9b8c8'];
let pollChartRange='all';
let pollChartSolo=null;
let pollChartScenario='all';
let pollChartPollster='all';
function renderOverviewPollChart(){
 const host=$('#overview-poll-chart'); if(!host)return;
 const allPolls=[...(DB.polls||[])].filter(p=>p.results&&p.fieldwork_end&&p.scenario_id).sort((a,b)=>a.fieldwork_end.localeCompare(b.fieldwork_end)||a.publication_date.localeCompare(b.publication_date));
 const latest=[...allPolls].sort((a,b)=>b.fieldwork_end.localeCompare(a.fieldwork_end)||b.publication_date.localeCompare(a.publication_date))[0];
 const groups=new Map();
 allPolls.forEach(p=>{if(!groups.has(p.scenario_id))groups.set(p.scenario_id,[]);groups.get(p.scenario_id).push(p)});
 const scenarioEntries=[...groups.entries()].sort((a,b)=>b[1].length-a[1].length||a[0].localeCompare(b[0]));
 const scenarioLabels=new Map();
 scenarioEntries.forEach(([id,rows],i)=>{const count=new Set(rows.flatMap(p=>Object.values(p.candidate_ids||{}))).size;scenarioLabels.set(id,`Line-up ${String.fromCharCode(65+i)} · ${rows.length} polls · ${count} candidates`)});
 const scenarioSelect=$('#poll-scenario-filter');
 if(scenarioSelect){
  scenarioSelect.innerHTML='<option value="all">All line-ups</option>'+scenarioEntries.map(([id])=>`<option value="${safe(id)}">${safe(scenarioLabels.get(id))}</option>`).join('');
  if(pollChartScenario!=='all'&&!groups.has(pollChartScenario))pollChartScenario='all';
  scenarioSelect.value=pollChartScenario;
  if(!scenarioSelect.dataset.bound){scenarioSelect.dataset.bound='1';scenarioSelect.addEventListener('change',()=>{pollChartScenario=scenarioSelect.value;renderOverviewPollChart()})}
 }
 const pollsters=[...new Set(allPolls.map(p=>p.pollster).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
 const pollsterSelect=$('#poll-pollster-filter');
 if(pollsterSelect){
  pollsterSelect.innerHTML='<option value="all">All pollsters</option>'+pollsters.map(n=>`<option value="${safe(n)}">${safe(n)}</option>`).join('');
  if(pollChartPollster!=='all'&&!pollsters.includes(pollChartPollster))pollChartPollster='all';
  pollsterSelect.value=pollChartPollster;
  if(!pollsterSelect.dataset.bound){pollsterSelect.dataset.bound='1';pollsterSelect.addEventListener('change',()=>{pollChartPollster=pollsterSelect.value;renderOverviewPollChart()})}
 }
 const bySelection=allPolls.filter(p=>(pollChartScenario==='all'||p.scenario_id===pollChartScenario)&&(pollChartPollster==='all'||p.pollster===pollChartPollster));
 const rangeDays=pollChartRange==='all'?null:Number(pollChartRange);
 const latestSelected=bySelection[bySelection.length-1];
 const anchor=latestSelected?Date.parse(latestSelected.fieldwork_end+'T12:00:00Z'):Date.now();
 const cutoff=rangeDays?anchor-rangeDays*86400000:null;
 const shown=bySelection.filter(p=>!cutoff||Date.parse(p.fieldwork_end+'T12:00:00Z')>=cutoff);
 const candidates=DB.candidates||[];
 const names=candidates.map(c=>c.name);
 const observedNames=names.filter(n=>shown.some(p=>Object.prototype.hasOwnProperty.call(p.results,n)));
 const noDataNames=names.filter(n=>!observedNames.includes(n));
 const selectedLineup=groups.get(pollChartScenario)||[];
 const lineupIds=new Set(selectedLineup.flatMap(p=>Object.values(p.candidate_ids||{})));
 const lineupNames=candidates.filter(c=>lineupIds.has(c.id)).map(c=>c.name);
 const context=$('#poll-chart-selection-context');
 if(context){
  const filterText=[pollChartScenario==='all'?'Showing every tested line-up':scenarioLabels.get(pollChartScenario),pollChartPollster==='all'?'all pollsters':pollChartPollster].filter(Boolean).join(' · ');
  context.textContent=`${filterText}. A line-up means the exact set of candidates tested. ${pollChartScenario==='all'?'Choose one line-up to see its candidates.':'Candidates tested: '+lineupNames.join(', ')+'.'}`;
 }
 const W=1000,H=390,L=58,R=22,T=20,B=52,plotW=W-L-R,plotH=H-T-B;
 const timeOf=p=>Date.parse(p.fieldwork_end+'T12:00:00Z');
 const times=shown.map(timeOf);
 const minX=times.length?Math.min(...times):anchor,maxX=times.length?Math.max(...times):anchor;
 const x=t=>L+(maxX===minX?plotW/2:(t-minX)/(maxX-minX)*plotW);
 const y=v=>T+plotH-(Number(v)/40)*plotH;
 const dateLabel=value=>{const d=new Date(typeof value==='string'?Date.parse(value+'T12:00:00Z'):value);return d.toLocaleDateString('en-GB',{day:'numeric',month:'short',timeZone:'UTC'})};
 let svg=`<svg class="poll-trend-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${safe(`First-round poll results by fieldwork end date; ${shown.length} polls shown${pollChartScenario==='all'?' across multiple tested line-ups':''}`)}">`;
 [0,5,10,15,20,25,30,35,40].forEach(v=>{svg+=`<line x1="${L}" y1="${y(v)}" x2="${W-R}" y2="${y(v)}" class="poll-gridline"/><text x="${L-12}" y="${y(v)+5}" text-anchor="end" class="poll-axis-label">${v}%</text>`});
 const ticks=maxX===minX?(shown.length?1:0):Math.min(6,Math.max(2,shown.length));
 for(let i=0;i<ticks;i++){const t=ticks===1?minX:minX+(maxX-minX)*(i/(ticks-1));svg+=`<text x="${x(t)}" y="${H-17}" text-anchor="middle" class="poll-axis-label">${dateLabel(t)}</text>`}
 observedNames.forEach((name,idx)=>{
  if(pollChartSolo&&pollChartSolo!==name)return;
  const points=shown.filter(p=>Object.prototype.hasOwnProperty.call(p.results,name)).map(p=>({p,t:timeOf(p),v:Number(p.results[name])})).filter(o=>Number.isFinite(o.v)).sort((a,b)=>a.t-b.t||a.p.pollster.localeCompare(b.p.pollster));
  if(!points.length)return;
  const byScenario=new Map();points.forEach(o=>{if(!byScenario.has(o.p.scenario_id))byScenario.set(o.p.scenario_id,[]);byScenario.get(o.p.scenario_id).push(o)});
  const color=pollChartPalette[idx%pollChartPalette.length];
  byScenario.forEach(pts=>{
   let previousDate=null;
   const d=pts.map(o=>{const move=previousDate===null||o.p.fieldwork_end===previousDate;previousDate=o.p.fieldwork_end;return (move?'M':'L')+x(o.t).toFixed(1)+','+y(o.v).toFixed(1)}).join(' ');
   svg+=`<path d="${d}" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="poll-series"/>`;
  });
  const sameDay=new Map();points.forEach(o=>{if(!sameDay.has(o.p.fieldwork_end))sameDay.set(o.p.fieldwork_end,[]);sameDay.get(o.p.fieldwork_end).push(o)});
  points.forEach(o=>{
   const dayPoints=sameDay.get(o.p.fieldwork_end),position=dayPoints.indexOf(o),offset=(position-(dayPoints.length-1)/2)*7;
   const scenarioName=scenarioLabels.get(o.p.scenario_id)||'candidate line-up not labelled';
   const tip=`${name}: ${o.v}% · ${o.p.pollster} · fieldwork ${o.p.fieldwork_start} to ${o.p.fieldwork_end} · published ${o.p.publication_date} · sample ${o.p.sample_size} · ${scenarioName} · source: ${o.p.source?.title||'not stated'}`;
   svg+=`<circle class="poll-point-hit" cx="${(x(o.t)+offset).toFixed(1)}" cy="${y(o.v)}" r="13" fill="transparent" tabindex="0" role="img" aria-label="${safe(tip)}" data-tip="${safe(tip)}"><title>${safe(tip)}</title></circle><circle class="poll-point-visible" cx="${(x(o.t)+offset).toFixed(1)}" cy="${y(o.v)}" r="5.2" fill="${color}" stroke="#fff" stroke-width="2" pointer-events="none"/>`;
  });
 });
 svg+='</svg><div class="poll-hover-tip" role="status" aria-live="polite"></div>';
 host.innerHTML=shown.length?svg:'<p class="muted">No polling observations match these filters and fieldwork date range.</p>';
 $('#poll-chart-count').textContent=`${shown.length} polls · ${shown.length?dateLabel(minX)+' to '+dateLabel(maxX)+' fieldwork end':'no observations'}`;
 const legend=$('#overview-poll-legend');
 if(legend){
  const withData=observedNames.map(name=>{const i=names.indexOf(name),vals=shown.filter(p=>Object.prototype.hasOwnProperty.call(p.results,name)).sort((a,b)=>a.fieldwork_end.localeCompare(b.fieldwork_end)),v=vals.length?Number(vals[vals.length-1].results[name]):null;return `<button class="poll-legend-item ${pollChartSolo&&pollChartSolo!==name?'is-muted':''} ${pollChartSolo===name?'is-selected':''}" data-poll-name="${safe(name)}" aria-pressed="${pollChartSolo===name?'true':'false'}"><i style="--poll-color:${pollChartPalette[i%pollChartPalette.length]}"></i><span>${safe(name)}</span><b>${v===null?'—':v.toFixed(1)+'%'}</b></button>`}).join('');
  const noData=noDataNames.map(name=>{const c=candidates.find(x=>x.name===name);const reason=pollChartScenario!=='all'&&c&&!lineupIds.has(c.id)?'not tested in this line-up':'no reported result in selected dates';return `<span class="poll-legend-no-data"><i></i><span>${safe(name)}<small>${safe(reason)}</small></span></span>`}).join('');
  const noDataHeading=pollChartScenario==='all'?'No reported result in selected polls':'No result for these candidates in the selected line-up and date range';
  legend.innerHTML=`<div class="poll-legend-observed"><div class="poll-legend-heading">With poll observations (${observedNames.length}) <span>Click a name to isolate it · click again to show all</span></div><div class="poll-legend-grid">${withData}</div></div>${noDataNames.length?`<div class="poll-legend-unavailable"><div class="poll-legend-heading">${safe(noDataHeading)} (${noDataNames.length})</div><div class="poll-legend-grid poll-legend-grid-muted">${noData}</div></div>`:''}`;
 }
 if(latest){
  const namesInPoll=Object.entries(latest.results).sort((a,b)=>b[1]-a[1]).slice(0,5);
  $('#overview-latest-poll').innerHTML=`<div class="latest-poll-heading"><div><span class="eyebrow">LATEST FIELDWORK IN THE ARCHIVE</span><h3>${safe(latest.pollster)} · ${safe(latest.sponsor||'Sponsor not specified')}</h3></div><strong>${safe(latest.fieldwork_start)} to ${safe(latest.fieldwork_end)}</strong></div><div class="latest-poll-meta"><span>Sample: ${safe(latest.sample_size||'Not stated')}</span><span>Published: ${safe(latest.publication_date)}</span></div><div class="latest-poll-leaders">${namesInPoll.map((o,i)=>`<div><span>${i+1}. ${safe(o[0])}</span><b>${safe(o[1])}%</b></div>`).join('')}</div><div class="latest-poll-source">${link(latest.source)}</div>`;
 }
 document.querySelectorAll('[data-poll-range]').forEach(b=>b.classList.toggle('active',b.dataset.pollRange===pollChartRange));
 document.querySelectorAll('[data-poll-range]').forEach(b=>{if(!b.dataset.bound){b.dataset.bound='1';b.addEventListener('click',()=>{pollChartRange=b.dataset.pollRange;renderOverviewPollChart()})}});
 document.querySelectorAll('[data-poll-name]').forEach(b=>{b.addEventListener('click',()=>{const n=b.dataset.pollName;pollChartSolo=pollChartSolo===n?null:n;renderOverviewPollChart()})});
 const tip=host.querySelector('.poll-hover-tip');
 host.querySelectorAll('.poll-point-hit').forEach(point=>{
  const show=()=>{if(!tip)return;tip.textContent=point.dataset.tip;tip.classList.add('is-visible');const r=point.getBoundingClientRect(),hr=host.getBoundingClientRect();tip.style.left=Math.max(8,Math.min(hr.width-290,r.left-hr.left+10))+'px';tip.style.top=Math.max(4,r.top-hr.top-58)+'px'};
  point.addEventListener('pointerenter',show);point.addEventListener('focus',show);point.addEventListener('pointerleave',()=>tip?.classList.remove('is-visible'));point.addEventListener('blur',()=>tip?.classList.remove('is-visible'));
 });
}
function renderPolls(){const trend=DB.poll_trends||[],snapshot=(DB.poll_trend_snapshots||[]).slice().sort((a,b)=>b.snapshot_date.localeCompare(a.snapshot_date))[0],source=snapshot?(DB.source_registry||[]).find(s=>s.id===snapshot.source_id):null;const snapshotNote=snapshot?`<div class="trend-note"><b>External polling snapshot · ${safe(snapshot.snapshot_date)}</b><span>${safe(snapshot.provider)} method: ${safe(snapshot.method)}. This site republishes the provider's average; it does not calculate it. Algorithm version: ${snapshot.algorithm_version?safe(snapshot.algorithm_version):'not published'}. Input poll IDs: ${snapshot.input_poll_ids?.length?snapshot.input_poll_ids.length+' linked':'not provided'}. ${snapshot.scenario_id?'Scenario '+safe(snapshot.scenario_id):safe(snapshot.scenario_note||'Scenario not specified.')}</span>${source?link(source):''}</div>`:'<div class="trend-note"><b>Rolling-average snapshot</b><span>Snapshot provenance not recorded.</span></div>';$('#poll-trend').innerHTML=trend.length?snapshotNote+`<div class="trend-grid">${trend.map(t=>`<div class="trend-row"><div class="trend-label"><b>${safe(t.candidate)}</b><strong>${Number(t.average).toFixed(1)}%</strong></div><div class="track"><span style="width:${Math.max(0,Math.min(100,Number(t.average)/40*100))}%"></span></div><small>Observed range ${safe(t.observed_min)}–${safe(t.observed_max)}% · ${safe(t.polls_count)} polls/institutes${t.change_30d==null?'':` · ${t.change_30d>0?'+':''}${safe(t.change_30d)} pts / 30d`}</small></div>`).join('')}</div>`:'<div class="notice">No rolling-average snapshot loaded.</div>';const rows=[...(DB.polls||[])].sort((a,b)=>b.fieldwork_end.localeCompare(a.fieldwork_end)||b.publication_date.localeCompare(a.publication_date));$('#poll-list').innerHTML=rows.length?`<table><thead><tr><th>Fieldwork end</th><th>Published</th><th>Pollster / sponsor</th><th>Fieldwork</th><th>Sample</th><th>Results (%)</th><th>Source / note</th></tr></thead><tbody>${rows.map(p=>`<tr><td>${safe(p.fieldwork_end)}</td><td>${safe(p.publication_date)}</td><td><b>${safe(p.pollster)}</b><br>${safe(p.sponsor)}</td><td>${safe(p.fieldwork_label||p.fieldwork_start+' to '+p.fieldwork_end)}</td><td>${safe(p.sample_size)}</td><td>${Object.entries(p.results||{}).map(([n,v])=>`${safe(n)} ${safe(v)}%`).join('<br>')}</td><td>${link(p.source)}<br><small>${safe(p.data_note||'')}</small></td></tr>`).join('')}</tbody></table>`:'<div class="notice">No poll-level records loaded.</div>'}
function renderNews(){const q=$('#news-search').value.toLowerCase(),lang=$('#news-language').value;const rows=[...(DB.news||[])].sort((a,b)=>b.publication_date.localeCompare(a.publication_date)).filter(n=>(!lang||n.language===lang)&&JSON.stringify(n).toLowerCase().includes(q));$('#news-list').innerHTML=rows.length?rows.map(n=>`<article class="source"><div class="eyebrow">${safe(n.language)} · ${safe(n.publication_date)} · ${safe(n.topic||'Campaign')}</div><h3>${safe(n.title)}</h3><p><b>${safe(n.publisher)}</b></p><p>${safe(n.summary)}</p>${link(n.source)}${n.verification?`<p class="small muted"><b>Editorial check:</b> ${safe(n.verification.status)} · checked ${safe(n.verification.checked_date)}${n.verification.note?' · '+safe(n.verification.note):''}</p>`:''}</article>`).join(''):'<div class="notice">No articles match this search.</div>'}
function renderTimeline(){$('#timeline-list').innerHTML=DB.events.map(e=>`<div class="timeline-item"><time>${safe(e.date_label||e.date)}</time><h3>${safe(e.title)}</h3><p>${safe(e.detail)} ${safe(e.status||'')}</p></div>`).join('')}
function renderSources(){const primary=DB.sources.filter(s=>!String(s.type).includes('monitored outlet directory'));const directory=DB.media_directory||[];const e=DB.editorial_standards||{};$('#source-list').innerHTML=`<h3 class="full-row">Core institutional, research and reference sources</h3>${primary.map(s=>`<article class="source"><h3>${link(s)}</h3><p>${safe(s.publisher)} · ${safe(s.language)} · ${safe(s.type)}</p></article>`).join('')}<h3 class="full-row">Media monitoring directory · ${directory.length} outlets</h3><p class="full-row muted small">This is a monitoring list, not a claim that every outlet has published a relevant article or that all coverage carries equal evidential weight.</p>${directory.map(s=>`<article class="source"><h3><a href="${safe(s.url)}" target="_blank" rel="noopener noreferrer">${safe(s.publisher)} ↗</a></h3><p>${safe(s.language)} · ${safe(s.type)}</p></article>`).join('')}`;const box=document.querySelector('#editorial-standards');if(box&&e.version){box.innerHTML=`<h3>Editorial standards & verification policy</h3><p><b>Version ${safe(e.version)} · adopted ${safe(e.adopted_date)}</b> · Editorial responsibility: ${safe(e.editor_in_charge)}.</p><p>${safe(e.current_audit_limit)}</p><h4>Source hierarchy</h4><ol>${e.source_hierarchy.map(x=>`<li>${safe(x)}</li>`).join('')}</ol><h4>Verification labels</h4><ul>${e.verification_statuses.map(x=>`<li><b>${safe(x.label)}:</b> ${safe(x.meaning)}</li>`).join('')}</ul><h4>Claim-level rules</h4><ul>${e.claim_rules.map(x=>`<li>${safe(x)}</li>`).join('')}</ul><h4>Corrections policy</h4><p>${safe(e.corrections_policy)}</p><h4>Voting compass policy</h4><p>${safe(e.compass_policy)}</p>`}}
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.nav [data-tab]').forEach(x=>x.classList.toggle('active',x.dataset.tab===b.dataset.tab));document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id===b.dataset.tab));window.scrollTo({top:0,behavior:'smooth'})}));
$('#candidate-search').addEventListener('input',renderCandidates);$('#policy-search').addEventListener('input',renderPolicies);$('#policy-topic').addEventListener('change',renderPolicies);$('#news-search').addEventListener('input',renderNews);$('#news-language').addEventListener('change',renderNews);
// Voting compass questionnaire remains available while candidate rankings are paused.
let compassExtended=false;
const compassAnswers={};
function activeCompassQuestions(){const questions=DB?.compass_questions||[];return questions.filter(q=>compassExtended||q.stage!=='extended');}
function getEligibleCompassPositions({allQuestions,positions,sourceRegistry,configuration}){
 const sourceIds=new Set((sourceRegistry||[]).map(s=>s.id));
 const questionById=new Map((allQuestions||[]).map(q=>[q.id,q]));
 const ordinalScale=q=>{
  if(q?.scoring?.type!=='ordinal'||q.scoring.rubric_id!==(configuration?.eligible_question_rubric_id||'ordinal-distance-v1')||!q.scoring.reviewed_date||!q.scoring.reviewer||!Array.isArray(q.options)||q.options.length<2)return null;
  const values=q.options.map(o=>Number(o[1]));
  if(values.some((v,i)=>!Number.isInteger(v)||v!==i+1))return null;
  return values.length;
 };
 const eligible=(positions||[]).filter(position=>{
  const q=questionById.get(position.question_id),v=position.verification||{};
  return position.candidate_id&&q&&ordinalScale(q)&&Number.isInteger(position.position_value)&&position.position_value>=1&&position.position_value<=q.options.length&&
   v.code===(configuration?.eligible_position_status||'primary_verified')&&Boolean(position.statement_date)&&Boolean(v.checked_date)&&Boolean(v.reviewer?.trim?.())&&
   Array.isArray(position.evidence)&&position.evidence.length>0&&position.evidence.every(e=>sourceIds.has(e.source_id)&&Boolean(e.locator?.trim?.())&&Boolean(e.evidence_summary?.trim?.()));
 });
 return {questionById,ordinalScale,positions:eligible};
}
function getCompassReleaseStatus(){
 const config=DB?.compass_methodology?.scoring_configuration||{};
 const eligible=getEligibleCompassPositions({allQuestions:DB?.compass_questions||[],positions:DB?.compass_candidate_positions||[],sourceRegistry:DB?.source_registry||[],configuration:config});
 const byCandidate=new Map();
 for(const position of eligible.positions){if(!byCandidate.has(position.candidate_id))byCandidate.set(position.candidate_id,new Map());byCandidate.get(position.candidate_id).set(position.question_id,position)}
 const minimumQuestions=config.minimum_verified_questions??12,minimumAreas=config.minimum_verified_areas??6,minimumCandidates=config.minimum_candidates_for_rankings??2;
 const coverage=(DB?.candidates||[]).map(candidate=>{
  const candidatePositions=byCandidate.get(candidate.id)||new Map();
  const areas=new Set([...candidatePositions.keys()].map(id=>eligible.questionById.get(id)?.topic).filter(Boolean));
  return {candidate,questions:candidatePositions.size,areas:areas.size,eligible:candidatePositions.size>=minimumQuestions&&areas.size>=minimumAreas};
 });
 const eligibleCandidates=coverage.filter(x=>x.eligible);
 return {ready:eligibleCandidates.length>=minimumCandidates,eligibleCandidates,coverage,minimumQuestions,minimumAreas,minimumCandidates};
}
function renderCompassStatus(release=getCompassReleaseStatus()){
 const button=$('#compass-results'),fr=currentLanguage==='fr';
 if(button){button.disabled=!release.ready;button.textContent=release.ready?(fr?'Afficher mes correspondances':'Show my matches'):(fr?'Classements suspendus':'Candidate rankings paused');button.setAttribute('aria-describedby','compass-pause-note')}
 const out=$('#compass-output');
 if(out){
  const title=release.ready?(fr?'Classements disponibles.':'Candidate rankings are available.'):(fr?'Classements suspendus.':'Candidate rankings are paused.');
  const body=release.ready?(fr?`${release.eligibleCandidates.length} candidats satisfont au seuil de preuves. Les autres seront indiqués comme insuffisamment documentés.`:`${release.eligibleCandidates.length} candidates meet the evidence threshold. Candidates below it will be marked insufficient evidence.`):(fr?`${release.eligibleCandidates.length} candidat(s) sur ${release.minimumCandidates} requis satisfont actuellement au seuil : au moins ${release.minimumQuestions} positions vérifiées dans ${release.minimumAreas} thèmes.`:`${release.eligibleCandidates.length} of ${release.minimumCandidates} required candidates currently meet the gate: at least ${release.minimumQuestions} verified positions across ${release.minimumAreas} policy areas.`);
  const privateNote=fr?'Vos réponses restent dans cet onglet et ne sont pas transmises.':'Your answers stay in this browser tab and are not submitted.';
  const audit=!release.ready?`<details class="compass-coverage-audit"><summary>${fr?'Consulter la couverture actuelle des preuves':'View current candidate evidence coverage'}</summary><ul>${release.coverage.map(item=>`<li><b>${safe(item.candidate.name)}</b> — ${fr?'preuves vérifiées':'verified evidence'} ${item.questions}/${release.minimumQuestions} ${fr?'questions dans':'questions across'} ${item.areas}/${release.minimumAreas} ${fr?'thèmes':'areas'}${item.eligible?' · '+(fr?'seuil atteint':'threshold met'):''}</li>`).join('')}</ul></details>`:'';
  out.innerHTML=`<div class="notice compass-pause-note" id="compass-pause-note" role="status"><b>${title}</b> ${safe(body)} ${safe(privateNote)}${audit}</div>`;
 }
}
function calculateCompassScores({allQuestions,activeQuestions,candidates,positions,answers,sourceRegistry,configuration}){
 const minWeight=configuration?.importance_minimum??1,maxWeight=configuration?.importance_maximum??3;
 const missingImportance=activeQuestions.filter(q=>{const weight=Number(answers?.[q.id]?.weight);return !Number.isInteger(weight)||weight<minWeight||weight>maxWeight});
 if(missingImportance.length)return {status:'importance_required',results:[],missingImportance:missingImportance.map(q=>q.id)};
 const {questionById,ordinalScale,positions:verifiedPositions}=getEligibleCompassPositions({allQuestions,positions,sourceRegistry,configuration});
 const sourceById=new Map((sourceRegistry||[]).map(source=>[source.id,source]));
 const byCandidate=new Map();
 for(const position of verifiedPositions){if(!byCandidate.has(position.candidate_id))byCandidate.set(position.candidate_id,new Map());byCandidate.get(position.candidate_id).set(position.question_id,position)}
 const minEvidenceQuestions=configuration?.minimum_verified_questions??12,minEvidenceAreas=configuration?.minimum_verified_areas??6;
 const minComparableQuestions=configuration?.minimum_comparable_questions??12,minComparableAreas=configuration?.minimum_comparable_areas??6;
 const minCandidates=configuration?.minimum_candidates_for_rankings??2;
 const results=(candidates||[]).map(candidate=>{
  const positionsByQuestion=byCandidate.get(candidate.id)||new Map();
  const evidenceAreas=new Set([...positionsByQuestion.keys()].map(id=>questionById.get(id)?.topic).filter(Boolean));
  const base={candidate,score:null,rank:null,coverage:{verifiedQuestions:positionsByQuestion.size,verifiedAreas:evidenceAreas.size,comparableQuestions:0,comparableAreas:0,areas:[]}};
  if(positionsByQuestion.size<minEvidenceQuestions||evidenceAreas.size<minEvidenceAreas)return {...base,status:'insufficient_evidence'};
  const byArea=new Map();
  for(const q of activeQuestions){
   const answer=answers?.[q.id],position=positionsByQuestion.get(q.id),n=ordinalScale(q);
   if(!position||!n||!answer||!Number.isInteger(Number(answer.answer))||Number(answer.answer)<1||Number(answer.answer)>n)continue;
   const weight=Number(answer.weight),alignment=1-Math.abs(Number(answer.answer)-position.position_value)/(n-1);
   if(!Number.isFinite(alignment)||weight<minWeight||weight>maxWeight)continue;
   if(!byArea.has(q.topic))byArea.set(q.topic,{weightedTotal:0,totalWeight:0,questions:0,details:[]});
   const detail={questionId:q.id,title:q.title,alignment,weight,respondentValue:Number(answer.answer),respondentLabel:q.options.find(o=>Number(o[1])===Number(answer.answer))?.[0]||'',candidateValue:position.position_value,candidateLabel:q.options.find(o=>Number(o[1])===position.position_value)?.[0]||'',statementDate:position.statement_date,checkedDate:position.verification.checked_date,reviewer:position.verification.reviewer,evidence:position.evidence.map(e=>({...e,source:sourceById.get(e.source_id)}))};
   const area=byArea.get(q.topic);area.weightedTotal+=alignment*weight;area.totalWeight+=weight;area.questions++;area.details.push(detail);
  }
  const comparedQuestions=[...byArea.values()].reduce((sum,area)=>sum+area.questions,0);
  const areaScores=[...byArea.entries()].map(([area,v])=>({area,score:v.weightedTotal/v.totalWeight,questions:v.questions,details:v.details}));
  base.coverage.comparableQuestions=comparedQuestions;base.coverage.comparableAreas=areaScores.length;base.coverage.areas=areaScores.map(x=>x.area);
  if(comparedQuestions<minComparableQuestions||areaScores.length<minComparableAreas)return {...base,status:'insufficient_comparison'};
  const score=areaScores.reduce((sum,area)=>sum+area.score,0)/areaScores.length;
  return {...base,status:'ranked',score:score*100,areaScores};
 }).sort((a,b)=>{
  if(a.status==='ranked'&&b.status!=='ranked')return -1;if(a.status!=='ranked'&&b.status==='ranked')return 1;
  if(a.status==='ranked'&&b.status==='ranked'&&Math.abs(a.score-b.score)>1e-9)return b.score-a.score;
  return a.candidate.name.localeCompare(b.candidate.name);
 });
 const rankable=results.filter(r=>r.status==='ranked');
 if(rankable.length<minCandidates)return {status:'insufficient_comparison_set',results:results.map(r=>r.status==='ranked'?{...r,status:'insufficient_comparison_set',score:null,rank:null}:r)};
 let rank=0,previousScore=null;
 rankable.forEach((r,index)=>{if(previousScore===null||Math.abs(r.score-previousScore)>1e-9)rank=index+1;r.rank=rank;previousScore=r.score});
 return {status:'ranked',results};
}
function renderCompass(){
 const host=$('#compass-questions');
 const release=getCompassReleaseStatus();
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
 host.innerHTML=active.map((q,i)=>`<article class="card compass-question" data-question-id="${q.id}"><div class="eyebrow">${safe(q.topic)} · QUESTION ${i+1} OF ${active.length}</div><h3>${safe(q.title)}</h3><p>${safe(q.help)}</p><div class="compass-options">${q.options.map(o=>`<label><input type="radio" name="${q.id}" value="${o[1]}" ${compassAnswers[q.id]?.answer===String(o[1])?'checked':''}><span>${safe(o[0])}</span></label>`).join('')}</div><label class="importance">How important is this to you? <select id="weight-${q.id}" ${release.ready?'required':''}><option value="" ${!compassAnswers[q.id]?.weight?'selected':''}>${release.ready?'Choose importance (required)':'Choose importance (optional)'}</option><option value="1" ${compassAnswers[q.id]?.weight==='1'?'selected':''}>Somewhat important</option><option value="2" ${compassAnswers[q.id]?.weight==='2'?'selected':''}>Very important</option><option value="3" ${compassAnswers[q.id]?.weight==='3'?'selected':''}>One of my top priorities</option></select><small class="importance-required">${release.ready?'Required for every question shown':'Optional while rankings are paused'}</small></label></article>`).join('');
 const expand=$('#compass-continue');
 if(expand) expand.hidden=compassExtended;
 const stage=$('#compass-stage-note');
 if(stage) stage.textContent=compassExtended?'Extended compass: all 36 questions across 12 policy areas.':'Standard compass: 24 questions across all 12 policy areas. You can continue to the full 36-question version when you finish.';
 renderCompassStatus(release);if(currentLanguage==='fr')translateVisibleText();
}
function showCompassMatches(){
 const release=getCompassReleaseStatus();
 if(!release.ready){renderCompassStatus(release);return}
 const active=activeCompassQuestions(),answers={};
 for(const q of active){const selected=document.querySelector(`input[name="${q.id}"]:checked`),weight=$('#weight-'+q.id);answers[q.id]={answer:selected?Number(selected.value):null,weight:weight?.value?Number(weight.value):null}}
 const config=DB.compass_methodology.scoring_configuration;
 const result=calculateCompassScores({allQuestions:DB.compass_questions,activeQuestions:active,candidates:DB.candidates,positions:DB.compass_candidate_positions,answers,sourceRegistry:DB.source_registry,configuration:config});
 const out=$('#compass-output');
 if(result.status==='importance_required'){
  const q=active.find(item=>item.id===result.missingImportance[0]);const field=q&&$('#weight-'+q.id);field?.focus();field?.reportValidity();out.innerHTML=`<div class="notice">Please rate the importance of every question shown before viewing matches. ${result.missingImportance.length} importance rating${result.missingImportance.length===1?' is':'s are'} missing.</div>`;return;
 }
 const ranked=result.results.filter(r=>r.status==='ranked');
 if(!ranked.length){out.innerHTML='<div class="notice"><b>No rankings shown.</b> The scored answers did not produce enough comparable evidence for at least two candidates. Answer questions across more policy areas or check back after more candidate positions are verified.</div>';if(currentLanguage==='fr')translateVisibleText();return}
 const renderArea=area=>`<section class="compass-match-area"><h4>${safe(area.area)} · ${Math.round(area.score*1000)/10}% <small>${area.questions} question${area.questions===1?'':'s'}</small></h4><ul>${area.details.map(d=>`<li><b>${safe(d.title)}</b><p>Your answer: ${safe(d.respondentLabel)} · candidate position: ${safe(d.candidateLabel)} · alignment ${Math.round(d.alignment*100)}% · importance ${d.weight}</p><p class="small muted">Position stated ${safe(d.statementDate)} · verified ${safe(d.checkedDate)} by ${safe(d.reviewer)}</p><ul>${d.evidence.map(e=>`<li>${e.source?link(e.source):safe(e.source_id)}${e.locator?` · ${safe(e.locator)}`:''} — ${safe(e.evidence_summary)}</li>`).join('')}</ul></li>`).join('')}</ul></section>`;
 const rows=ranked.map(r=>`<article class="compass-match-row"><div class="match-head"><div><b>${r.rank}. ${safe(r.candidate.name)}</b><small>${safe(r.candidate.party)} · verified evidence ${r.coverage.verifiedQuestions}/${config.minimum_verified_questions} questions in ${r.coverage.verifiedAreas}/${config.minimum_verified_areas} areas · compared ${r.coverage.comparableQuestions} answers in ${r.coverage.comparableAreas} areas</small></div><strong>${r.score.toFixed(1)}%</strong></div><div class="match-track"><span style="width:${Math.max(0,Math.min(100,r.score))}%"></span></div><details><summary>See the sourced calculation</summary><p class="small muted">Importance-weighted question scores are averaged within each area. Area averages count equally. Alignment is directional, not a probability or voting recommendation.</p>${r.areaScores.map(renderArea).join('')}</details></article>`).join('');
 const insufficient=result.results.filter(r=>r.status!=='ranked');
 const insuffList=insufficient.map(r=>{const reason=r.status==='insufficient_evidence'?`Verified evidence: ${r.coverage.verifiedQuestions}/${config.minimum_verified_questions} questions across ${r.coverage.verifiedAreas}/${config.minimum_verified_areas} areas`:r.status==='insufficient_comparison_set'?`This result is withheld until at least ${config.minimum_candidates_for_rankings} candidates meet comparison coverage.`:`Comparable answers: ${r.coverage.comparableQuestions}/${config.minimum_comparable_questions} across ${r.coverage.comparableAreas}/${config.minimum_comparable_areas} areas`;return `<li><b>${safe(r.candidate.name)}</b> — insufficient ${r.status==='insufficient_evidence'?'candidate evidence':'comparison coverage'} (${safe(reason)})</li>`}).join('');
 out.innerHTML=`<section class="card compass-results"><div class="eyebrow">YOUR RESULTS · ${ranked.length} RANKED CANDIDATES</div><h2>Your closest evidence-backed matches</h2><p class="muted small">Scores compare only dated, primary-verified positions on reviewed ordinal questions. Equal scores receive equal ranks. Missing positions are never inferred.</p>${rows}${insufficient.length?`<details class="compass-insufficient"><summary>Insufficient evidence or comparison coverage (${insufficient.length})</summary><ul>${insuffList}</ul></details>`:''}</section>`;
 if(currentLanguage==='fr')translateVisibleText();out.scrollIntoView({behavior:'smooth',block:'start'});
}
$('#compass-results').addEventListener('click',showCompassMatches);
$('#compass-continue').addEventListener('click',()=>{compassExtended=true;renderCompass();});
$('#compass-reset').addEventListener('click',()=>{compassExtended=false;Object.keys(compassAnswers).forEach(k=>delete compassAnswers[k]);renderCompass();});
// Live countdown to the first round. The target is local Paris midnight on 18 April 2027.
function updateElectionCountdown(){
 const el=document.getElementById('election-countdown'); if(!el)return;
 const target=new Date('2027-04-18T00:00:00+02:00');
 const ms=Math.max(0,target.getTime()-Date.now());
 const days=Math.ceil(ms/86400000);
 const fr=(document.documentElement.lang||'en')==='fr';
 el.innerHTML=`<strong>${days.toLocaleString(fr?'fr-FR':'en-GB')}</strong><span>${fr?'JOURS AVANT LE PREMIER TOUR':'DAYS TO FIRST ROUND'}</span>`;
 el.setAttribute('aria-label',fr?`${days} jours avant le premier tour`:`${days} days until the first round`);
}
function startElectionCountdown(){updateElectionCountdown();if(!window.__france2027Countdown){window.__france2027Countdown=setInterval(updateElectionCountdown,60000);}}
startElectionCountdown();
document.addEventListener('click',e=>{if(e.target.closest('[data-lang]'))setTimeout(updateElectionCountdown,0)});

// Boot only after the document is ready. The compass is first rendered by render() after research data loads.
function bootObservatory(){ if(window.__france2027Booted) return; window.__france2027Booted=true; init(); }
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',bootObservatory,{once:true}); else bootObservatory();


const FR={
 'Overview':'Accueil','Elections for dummies':'Comprendre l’élection','Candidates':'Candidats','Your voting compass':'Votre boussole électorale','Policy matrix':'Comparateur de programmes','Polling':'Sondages','News':'Actualités','Timeline':'Calendrier','Sources & methods':'Sources et méthode',
 'INDEPENDENT / NON-PARTISAN':'INDÉPENDANT / NON PARTISAN','FRENCH PRESIDENTIAL ELECTION 2027':'ÉLECTION PRÉSIDENTIELLE 2027','The race for':'La course à','the Élysée.':'l’Élysée.','Independent analysis of the candidates, their policies, the polling picture and the decisions shaping France’s 2027 presidential election.':'Une analyse indépendante des candidats, de leurs politiques, des sondages et des décisions qui façonnent l’élection présidentielle française de 2027.',
 'Take the voting compass ↗':'Faire le test électoral ↗','Explore candidates':'Découvrir les candidats','ANALYSIS. CONTEXT. CLARITY.':'ANALYSE. CONTEXTE. CLARTÉ.','PARIS':'PARIS','THE ROAD TO THE ÉLYSÉE':'EN ROUTE VERS L’ÉLYSÉE','THE FIRST ROUND':'PREMIER TOUR','People tracked':'Personnalités suivies','Poll records':'Sondages archivés','News reports':'Articles suivis','Election rounds':'Tours de scrutin','Declared, potential and other monitored figures':'Candidats déclarés, potentiels et autres personnalités suivies','Individual survey observations in the archive':'Résultats de sondages individuels archivés','Linked French and English coverage':'Articles français et anglophones référencés','First and second rounds scheduled for April and May 2027':'Premier et second tours prévus en avril et mai 2027',
 'POLLING TRENDS':'TENDANCES DES SONDAGES','Who is leading?':'Qui est en tête ?','First-round voting intentions across published surveys. Each point is an actual poll result, not a modelled daily estimate.':'Intentions de vote au premier tour dans les enquêtes publiées. Chaque point correspond à un résultat réel, et non à une estimation quotidienne modélisée.','Full polling archive ↗':'Voir tous les sondages ↗','All data':'Toutes les données','60 days':'60 jours','30 days':'30 jours','LATEST COVERAGE':'À LA UNE','What is happening in the race?':'Que se passe-t-il dans la campagne ?','All coverage ↗':'Toute l’actualité ↗','THE CANDIDATES':'LES CANDIDATS','Who is in the race?':'Qui est dans la course ?','View all candidates ↗':'Voir tous les candidats ↗','publicly declared / stated contenders':'candidatures annoncées publiquement','potential or other tracked figures':'personnalités potentielles ou suivies','tracked in total':'au total','Being tracked does not mean a person has formally declared, secured the required sponsorships or been approved for the ballot. Portraits are credited to their respective sources.':'Le suivi d’une personnalité ne signifie pas qu’elle a officiellement déclaré sa candidature, obtenu les parrainages requis ou été admise sur le bulletin de vote. Les portraits sont crédités à leurs sources respectives.',
 'WHAT MATTERS':'LES ENJEUX','Issues shaping the campaign':'Les enjeux de la campagne','Compare policies ↗':'Comparer les programmes ↗','Purchasing power & the economy':'Pouvoir d’achat et économie','Wages, prices, taxation and public finances':'Salaires, prix, fiscalité et finances publiques','Pensions & employment':'Retraites et emploi','Retirement age, funding and the future of work':'Âge de départ, financement et avenir du travail','Immigration & security':'Immigration et sécurité','Border policy, integration, policing and justice':'Politique frontalière, intégration, police et justice','Climate & energy':'Climat et énergie','Nuclear power, renewables and the transition':'Nucléaire, énergies renouvelables et transition','Healthcare, education & housing':'Santé, éducation et logement','Public services and everyday living standards':'Services publics et niveau de vie','Europe & foreign policy':'Europe et politique étrangère','EU relations, defence, NATO and Ukraine':'Relations avec l’UE, défense, OTAN et Ukraine','WHAT HAPPENS NEXT?':'ET ENSUITE ?','Upcoming milestones':'Les prochaines échéances','Full timeline ↗':'Calendrier complet ↗','MAKE SENSE OF THE CHOICES':'COMPRENDRE LES CHOIX','Go beyond the headlines.':'Au-delà des titres.','Read the candidate dossiers, compare stated policies or map your own priorities against the evidence currently available.':'Consultez les dossiers des candidats, comparez leurs positions déclarées et confrontez vos priorités aux éléments disponibles.','Take the voting compass':'Faire le test électoral','How the election works':'Comprendre le scrutin','Our sources & standards':'Nos sources et nos règles',
 'THE SHORT VERSION':'L’ESSENTIEL','Elections for dummies':'Comprendre l’élection','A plain-English guide for first-time voters and anyone who wants the basics without political jargon.':'Un guide clair pour les primo-votants et toute personne souhaitant comprendre les bases sans jargon politique.','WHO IS RUNNING?':'QUI SE PRÉSENTE ?','Candidate directory':'Répertoire des candidats','Campaign announcements and official ballot qualification are separate. Every prospective candidate must meet the same statutory requirements; the Constitutional Council publishes the definitive list.':'L’annonce d’une candidature et la validation officielle pour le scrutin sont deux étapes distinctes. Chaque candidat doit satisfaire aux mêmes exigences légales ; le Conseil constitutionnel publie la liste définitive.','Search candidate, party or orientation…':'Rechercher un candidat, un parti ou une orientation…','YOUR PRIORITIES, MAPPED':'VOS PRIORITÉS, EN PERSPECTIVE','Answer a short set of policy questions to see which tracked candidates have publicly stated positions closest to yours. This is a research tool, not a voting recommendation.':'Répondez à quelques questions politiques pour voir quels candidats suivis ont exprimé des positions proches des vôtres. Cet outil d’information ne constitue pas une recommandation de vote.','Evidence-led · Non-partisan':'Fondé sur les sources · Non partisan','Use the questionnaire to record your policy views and how important each issue is to you. Candidate rankings are temporarily paused while scoring and evidence are rebuilt against the published methodology.':'Utilisez le questionnaire pour noter vos opinions et l’importance de chaque enjeu. Le classement des candidats est temporairement suspendu pendant la refonte du calcul et des preuves selon la méthode publiée.','Choose the position closest to your view on each issue and, if you wish, rate its importance. Your answers remain in this browser tab. Candidate rankings will return only after the scoring follows the published methodology and meets its minimum evidence threshold.':'Choisissez la position qui correspond le mieux à votre opinion sur chaque sujet et, si vous le souhaitez, indiquez son importance. Vos réponses restent dans cet onglet. Le classement ne sera rétabli que lorsque le calcul respectera la méthode publiée et son seuil minimal de preuves.','The published method requires evidence for at least 12 questions across 6 of 12 policy areas for a candidate to receive a rank. No candidate currently meets the audited evidence standard.':'La méthode publiée exige des preuves pour au moins 12 questions réparties dans 6 des 12 thèmes avant de classer un candidat. Aucun candidat ne satisfait actuellement au seuil de preuves vérifiées.','Candidate rankings paused':'Classement des candidats suspendu','Candidate rankings are paused.':'Le classement des candidats est suspendu.','The previous prototype used only a small legacy set of pension and public-finance questions and did not meet the published method’s evidence threshold. Rankings will return after the scoring and source-backed candidate positions meet that standard. Your selections stay in this browser tab and are not submitted.':'Le prototype précédent utilisait seulement quelques anciennes questions sur les retraites et les finances publiques et ne respectait pas le seuil de preuve publié. Le classement reviendra lorsque le calcul et les positions sourcées satisferont à cette règle. Vos choix restent dans cet onglet et ne sont pas transmis.','Choose importance (optional)':'Choisir l’importance (facultatif)','Optional while rankings are paused':'Facultatif pendant la suspension du classement','How important is this to you?':'Quelle importance accordez-vous à ce sujet ?','How it works':'Comment ça marche','Choose the position closest to your view on each issue, then set how important that issue is to you. Candidates are matched only where a relevant, attributable position has been recorded. Unknown positions are left out rather than guessed.':'Choisissez la position qui correspond le mieux à votre opinion sur chaque sujet, puis indiquez son importance à vos yeux. La comparaison ne porte que sur les positions documentées et attribuables. Les positions inconnues ne sont pas devinées.','WHAT DO THEY PROPOSE?':'QUE PROPOSENT-ILS ?','Policy comparison':'Comparaison des positions','Compare attributed, sourced positions across policy areas. Empty cells mean evidence has not yet been entered, not that a candidate has no position.':'Comparez les positions attribuées et sourcées dans différents domaines. Une cellule vide signifie qu’aucun élément n’a encore été intégré, et non que le candidat n’a pas de position.','FILTER BY POLICY AREA':'FILTRER PAR THÈME','All policy areas':'Tous les thèmes','SEARCH POSITIONS':'RECHERCHER UNE POSITION','Search a candidate, issue or proposal…':'Rechercher un candidat, un enjeu ou une proposition…','PUBLIC OPINION':'OPINION PUBLIQUE','Polling archive & trends':'Archives et tendances des sondages','Individual polls are kept separate from polling averages and unlike scenarios are never blended.':'Les sondages individuels restent distincts des moyennes ; des scénarios différents ne sont jamais mélangés.','Individual poll archive':'Archives des sondages individuels','Historical observations from the project research workbook. Each poll is a specific candidate scenario; blanks mean not tested or not reported, never zero.':'Données historiques du classeur de recherche. Chaque sondage correspond à un scénario précis ; une case vide signifie « non testé » ou « non communiqué », jamais zéro.','THE CAMPAIGN, IN CONTEXT':'LA CAMPAGNE EN CONTEXTE','News archive':'Archives de l’actualité','French and English coverage, with publication dates, summaries and links to the original articles.':'Articles en français et en anglais, avec dates de publication, résumés et liens vers les publications originales.','All languages':'Toutes les langues','French':'Français','English':'Anglais','OFFICIAL MILESTONES':'ÉCHÉANCES OFFICIELLES','Election timeline':'Calendrier électoral','Baseline from the French government’s published 2027 election calendar. Provisional dates are labelled.':'Référence : calendrier électoral 2027 publié par le gouvernement français. Les dates provisoires sont signalées.','Official government calendar ↗':'Calendrier officiel du gouvernement ↗','TRANSPARENCY':'TRANSPARENCE','Sources & methodology':'Sources et méthodologie','Every factual claim should be traceable to its source and date.':'Chaque affirmation factuelle doit pouvoir être reliée à une source et à une date.','Evidence labels':'Niveaux de preuve','Polling rules':'Règles relatives aux sondages','Website created by':'Site créé par','Independent research · Evidence over assertion':'Recherche indépendante · Les faits avant les affirmations',
 'View dossier →':'Voir le dossier →','Photo credit ↗':'Crédit photo ↗','OPEN FULL RESEARCH DOSSIER ↗':'OUVRIR LE DOSSIER COMPLET ↗','Political biography':'Biographie politique','Political record':'Parcours politique','Policy priorities':'Priorités politiques','Programme status':'État du programme','Current attributable positions':'Positions actuelles documentées','Feasibility questions':'Questions de faisabilité','Open questions':'Questions en suspens','Official website audit':'Vérification du site officiel','Source trail':'Sources','At a glance:':'En bref :','Programme:':'Programme :','Official ballot status:':'Statut sur le bulletin officiel :','Read programme':'Consulter le programme','Coming soon':'À venir','No matching candidate.':'Aucun candidat correspondant.','No articles match this search.':'Aucun article ne correspond à cette recherche.','No upcoming milestones currently listed.':'Aucune échéance à venir n’est actuellement répertoriée.','No poll-level records loaded.':'Aucun sondage individuel chargé.','No rolling-average snapshot loaded.':'Aucun instantané de moyenne mobile chargé.','LATEST POLL IN THE ARCHIVE':'DERNIER SONDAGE ARCHIVÉ','With poll observations':'Avec résultats de sondage','No comparable poll observations yet':'Aucun résultat comparable pour le moment','Click a name to isolate it · click again to show all':'Cliquez sur un nom pour l’isoler, puis à nouveau pour tout afficher','Sample:':'Échantillon :','Published:':'Publié le :','Method: observations are plotted on their fieldwork end date. Lines connect reported observations only. A candidate absent from a survey is not assigned zero. Candidate line-ups and question scenarios differ between pollsters, so this is a descriptive trend, not a like-for-like panel or forecast.':'Méthode : les résultats sont positionnés à la date de fin du terrain. Les lignes relient uniquement les résultats publiés. Un candidat absent d’un sondage n’est pas crédité de zéro. Les listes de candidats et les scénarios varient selon les instituts : il s’agit d’une tendance descriptive, pas d’un panel comparable ni d’une prévision.'
};
const originalTextNodes=new WeakMap();
function applyLanguage(lang){currentLanguage=lang==='fr'?'fr':'en';document.documentElement.lang=currentLanguage;document.querySelectorAll('[data-lang]').forEach(b=>{const on=b.dataset.lang===currentLanguage;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});localStorage.setItem('france2027-language',currentLanguage);translateVisibleText();}
function translateVisibleText(){const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while((n=walker.nextNode())){if(n.parentElement?.closest('script,style,svg,textarea,input,select,option'))continue;const raw=n.nodeValue;const original=originalTextNodes.get(n)||raw;const trimmed=original.trim();if(!trimmed)continue;if(currentLanguage==='fr'&&FR[trimmed]){if(!originalTextNodes.has(n))originalTextNodes.set(n,original);const next=original.replace(trimmed,FR[trimmed]);if(n.nodeValue!==next)n.nodeValue=next;}else if(currentLanguage==='en'&&originalTextNodes.has(n)){n.nodeValue=originalTextNodes.get(n);originalTextNodes.delete(n);}}document.querySelectorAll('[placeholder]').forEach(el=>{if(currentLanguage==='fr'&&FR[el.getAttribute('placeholder')]){if(!el.dataset.originalPlaceholder)el.dataset.originalPlaceholder=el.getAttribute('placeholder');el.setAttribute('placeholder',FR[el.dataset.originalPlaceholder])}else if(currentLanguage==='en'&&el.dataset.originalPlaceholder){el.setAttribute('placeholder',el.dataset.originalPlaceholder)}});document.querySelectorAll('option').forEach(el=>{if(currentLanguage==='fr'&&FR[el.textContent.trim()]){if(!el.dataset.originalText)el.dataset.originalText=el.textContent;el.textContent=FR[el.dataset.originalText]}else if(currentLanguage==='en'&&el.dataset.originalText){el.textContent=el.dataset.originalText}});}
let currentLanguage=localStorage.getItem('france2027-language')||'en';
document.addEventListener('click',e=>{const b=e.target.closest('[data-lang]');if(b){applyLanguage(b.dataset.lang);}});
const langObserver=new MutationObserver(()=>{if(currentLanguage==='fr')translateVisibleText()});langObserver.observe(document.body,{childList:true,subtree:true,characterData:true});


if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',()=>applyLanguage(currentLanguage))}else{applyLanguage(currentLanguage)}
