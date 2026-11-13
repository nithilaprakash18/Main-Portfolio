const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,HOVER=matchMedia('(hover:hover)').matches;
const main=$('#main'),tr=$('#tr'),SOC='<a href="https://www.instagram.com/nitzframez/" target="_blank" rel="noopener">Instagram ↗</a><a href="https://www.linkedin.com/in/nithilaprakash/" target="_blank" rel="noopener">LinkedIn ↗</a><button type="button" data-cv>CV ↗</button><a href="mailto:nithilaprakash1811@gmail.com?subject=Hello%20Nithila">Email ↗</a>';
const homeRows=()=>`<div class="lst">${PR.map((p,i)=>`<a class="rw v3" href="#/projects/${i+1}"><span class="n">0${i+1}</span><span class="tx"><span class="tt">${p.t}</span><span class="ds">${p.d}</span></span><span class="i2">${p.tag}</span><span class="th"><img src="${IMG[p.im[0]]}" alt=""></span></a>`).join('')}</div>`;
const projRows=()=>`<div class="lst">${PR.map((p,i)=>`<a class="rw pj" href="#/projects/${i+1}"><span class="n">0${i+1}</span><span class="tx"><span class="tt">${p.t}</span><span class="ds">${p.d}</span></span><span class="gal" aria-hidden="true"><span class="gin">${p.im.filter(k=>IMG[k]).slice(0,3).map(k=>`<span class="gi" style="--a:${AR[k]}"><img src="${IMG[k]}" alt=""></span>`).join('')}</span></span></a>`).join('')}</div>`;

const frames=()=>{const c=(p,i)=>`<a class="fr" href="#/projects/${i+1}" style="--a:${AR[p.im[0]]}"><span class="fl"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M4.2 1.5L3.4 10.5M8.6 1.5L7.8 10.5M1.5 4.3h9M1.5 7.7h9"/></svg>${p.tag}</span><span class="fi"><span class="fim"><img src="${IMG[p.im[0]]}" alt=""></span><i class="hd" style="left:-5px;top:-5px"></i><i class="hd" style="right:-5px;top:-5px"></i><i class="hd" style="left:-5px;bottom:-5px"></i><i class="hd" style="right:-5px;bottom:-5px"></i><b class="sz">View project ↗</b></span><span class="fc"><span class="n2">0${i+1}</span><b>${p.t}</b></span></a>`,more=`<div class="fr more" style="--a:1.7778"><span class="fl">&nbsp;</span><span class="fim"><span class="l">More soon</span></span></div>`;return `<div class="fr-c"><div class="fr-r">${c(PR[0],0)}${c(PR[1],1)}</div><div class="fr-r">${c(PR[2],2)}${c(PR[3],3)}</div><div class="fr-r">${c(PR[4],4)}${more}</div></div>`};
const foot=(p,extra='')=>`<footer class="ft">${extra}<div class="sl"><span>${SOC}</span><span>© 2026 Nithila Prakash</span></div></footer>`;
const V={
home:()=>`<div class="home"><section class="hero pd"><div class="l" style="position:relative;color:#EAF6FF">Multidisciplinary designer</div><h1 id="hn" class="D sp">Nithila Prakash</h1></section>
<section class="pd g3" style="grid-template-columns:repeat(2,minmax(0,1fr))"><div class="rv"><div class="l">Contact</div><a href="mailto:nithilaprakash1811@gmail.com?subject=Hello%20Nithila" style="text-decoration:underline;text-underline-offset:4px">nithilaprakash1811@gmail.com</a></div><div class="rv"><div class="l">Role</div>Multidisciplinary designer</div></section>
<section class="pd intro"><div class="rv"><img class="me" src="${IMG.me}" alt="Nithila Prakash"></div><div><p class="rv">I am a design student focused on creating thoughtful, <span class="em">research-driven</span> experiences that balance <span class="em">usability</span>, <span class="em">systems thinking</span>, and <span class="em">visual clarity</span>. <a class="em" href="#/about" style="display:block;margin-top:14px;font-size:14px;letter-spacing:2px;text-transform:uppercase">More about me →</a></p></div></section>
<section class="pd mvb"><div class="l" style="margin-bottom:12px">What I do</div><div class="D" data-mv="-.2">UX + Product</div><div class="D em" data-mv=".2">Research</div><div class="D" data-mv="-.2">Service design</div><div class="D em" data-mv=".2">Creative technology</div></section>
<section><div class="pd l" style="padding-bottom:12px">Selected work (0${PR.length})</div>${frames()}<div class="pd" style="padding:18px clamp(16px,3vw,36px) 60px"><a class="em l" href="#/projects" style="color:var(--ac)">All projects →</a></div></section>${foot('home')}</div>`,
projects:()=>`<section class="pd" style="padding-top:34px;padding-bottom:26px"><div class="l">Projects (0${PR.length})</div><h1 class="D big sp" style="margin-top:8px">Selected work</h1></section>${projRows()}<div style="height:70px"></div>${foot('projects')}`,
case:i=>{const p=PR[i],a=(i+PR.length-1)%PR.length,b=(i+1)%PR.length;
const L=x=>`<ul>${x.map(t=>`<li>${t}</li>`).join('')}</ul>`,blk=r=>r.items?L(r.items):`<p>${r.p}</p>`;
const S=[{n:'01',l:'Context',h:'The problem',b:p.ctx.map(x=>`<p>${x}</p>`).join('')+(p.role?`<p><b>My contribution</b><br>${p.role}</p>`:'')+`<p class="iq"><span class="l">Central inquiry</span><br>${p.inq}</p>`},
{n:'02',l:'Research and process',h:p.res[0].h,b:blk(p.res[0])},
{n:'02',l:'Research and process',h:p.res[1].h,b:blk(p.res[1])},
{n:'03',l:'Status of the work',h:'The response',b:`<span class="tg">Proposed</span>${p.st.pl?L(p.st.pl):`<p>${p.st.p}</p>`}`},
{n:'03',l:'Status of the work',h:'Where it stands',b:(p.st.t?`<span class="tg">Testing</span><p>${p.st.t}</p>`:'')+`<span class="tg">Outcome</span><p>${p.st.o}</p>`}];
const vis=p.im.map((k,j)=>k==='vid'?`<video src="assets/video/desk.mp4" muted loop playsinline preload="auto" data-j="${j}" data-ar="${AR.vid}" data-cap="${p.cap[j]}" aria-label="${p.cap[j]}"></video>`:`<img src="${IMG[k]}" alt="${p.cap[j]}" data-j="${j}" data-ar="${AR[k]}" data-cap="${p.cap[j]}"${j?'':' class="on"'}>`).join('');
return `<div class="sg pd"><div class="sv"><div class="sf" style="--ar:${AR[p.im[0]]}">${vis}</div><div class="l sc" id="scap">${p.cap[0]}</div></div>
<div class="stx"><div class="sin"><a class="l" href="#/projects" style="color:var(--ac)">← Projects</a><div class="l" style="margin-top:20px">0${i+1} / 0${PR.length}</div><h1 class="D sp" style="font-size:clamp(40px,6.4vw,100px);margin:8px 0 22px">${p.t}</h1>
<div class="meta"><div><span class="l">Focus</span><b>${p.focus}</b></div><div><span class="l">Team</span><b>${p.team}</b></div></div><div class="l" style="margin-top:26px">Scroll ↓ the picture follows the story</div></div>
${S.map((s,k)=>{const v=[].concat(p.sv[k]);return `<section class="stp" data-j="${v[0]}"><div class="l">${s.n} ${s.l}</div><h2 class="D">${s.h}</h2>${s.b}</section>`+v.slice(1).map(j=>`<div class="stz" data-j="${j}" aria-hidden="true"></div>`).join('')}).join('')}</div></div>
<section class="cs pd lrn"><div class="l">04 What I learnt</div><div class="b rv" style="max-width:none">${p.learn.map(x=>`<p>${x}</p>`).join('')}</div></section>
${foot('projects',`<div class="pn"><a href="#/projects/${a+1}"><small>← Previous</small><b>${PR[a].t}</b></a><a href="#/projects/${b+1}"><small>Next project →</small><b>${PR[b].t}</b></a></div>`)}`},
experiments:()=>`<section class="pd" style="padding-top:34px;padding-bottom:22px"><div class="l">Experiments</div><h1 class="D big sp" style="margin-top:8px">Play, test, break</h1><p style="max-width:60ch;color:var(--mu);margin:14px 0 0">Made in TouchDesigner, rebuilt to run in your browser. Move your pointer over each one, then watch my original recording below it. On a device with a camera, switch it on to see yourself in it.</p></section>
<div class="mq"><div class="D">${('Finger Filter · Pixelate · ').repeat(6)}</div></div>
<section class="pd lab"><div><span class="l">01</span><h3>Finger Filter</h3><p>Your pointer clears the filter and leaves a trail behind it.</p><div class="ctl"><button type="button" class="btn2" data-cam="m1">Use my camera</button></div><div class="msg l" id="m1" role="status"></div></div><div><canvas id="c1" width="960" height="600" aria-label="Finger filter experiment. Move the pointer to reveal."></canvas><div class="rec-w"><div class="l rec-h">My original recording in TouchDesigner</div><video class="rec" src="assets/video/hand.mp4" muted loop playsinline controls preload="metadata" aria-label="My original recording in TouchDesigner"></video></div></div></section>
<section class="pd lab"><div><span class="l">02</span><h3>Pixelate</h3><p>Move your pointer from left to right. Far left is 0% pixelation and far right is 100%.</p><div class="ctl"><button type="button" class="btn2" data-cam="m2">Use my camera</button></div><div class="msg l" id="m2" role="status"></div></div><div><canvas id="c2" width="960" height="600" aria-label="Pixelate experiment. Move the pointer left and right."></canvas><div class="rul"><span>0%</span><span id="pxv" class="rul2">Pixelation 0%</span><span>100%</span><i id="pxm" style="left:0"></i></div><div class="rec-w"><div class="l rec-h">My original recording in TouchDesigner</div><video class="rec" src="assets/video/pixel.mp4" muted loop playsinline controls preload="metadata" aria-label="My original recording in TouchDesigner"></video></div></div></section>
${foot('experiments')}`,
about:()=>`<section class="pd" style="padding-top:34px;padding-bottom:30px"><h1 class="l" style="margin:0">About</h1></section>
<section class="pd ab"><div class="ab-p rv"><img src="${IMG.me2}" alt="Nithila Prakash"></div><p class="D wl ab-t">I'm a designer, maker, photographer, and cat lover obsessed with the world of digital and product design.</p></section>
<section class="pd stk"><div class="stk-h l">tools I work with</div><div class="stk-g">${[['Framer','Fr','web design'],['Canva','Ca','graphic design'],['Figma','Fg','product design'],['Maya','Ma','3D modelling'],['DaVinci Resolve','Dv','video editing'],['TouchDesigner','TD','interactive visuals']].map(t=>`<div class="tk" tabindex="0"><span class="tk-t"><b>${t[1]}</b></span><span class="tk-n">${t[0]}</span><span class="tk-c">${t[2]}</span></div>`).join('')}</div></section>${foot('about')}`,
contact:()=>`<section class="pd" style="padding-top:34px;padding-bottom:50px"><div class="l">Contact</div><h1 class="D big sp" style="margin:8px 0 24px">Say hello</h1><div class="D rv" style="font-size:clamp(24px,5vw,64px);text-transform:none"><a href="mailto:nithilaprakash1811@gmail.com?subject=Hello%20Nithila">nithilaprakash1811@gmail.com</a></div>
<div class="rv" style="display:flex;gap:12px;flex-wrap:wrap;margin-top:30px"><a href="https://www.instagram.com/nitzframez/" target="_blank" rel="noopener" style="border:2px solid currentColor;padding:10px 18px;letter-spacing:2px;text-transform:uppercase;font-size:14px">Instagram ↗</a><a href="https://www.linkedin.com/in/nithilaprakash/" target="_blank" rel="noopener" style="border:2px solid currentColor;padding:10px 18px;letter-spacing:2px;text-transform:uppercase;font-size:14px">LinkedIn ↗</a><button type="button" data-cv style="background:#0C1433;color:#A8E6FB;padding:12px 18px;letter-spacing:2px;text-transform:uppercase;font-size:14px;font-weight:600">CV ↗</button></div></section>${foot('contact')}`};

/* ---- labs ---- */
let CAM=null,CAMS=null,CAMG=0;
function stopCam(){CAMG++;if(CAMS)CAMS.getTracks().forEach(t=>t.stop());CAMS=null;if(CAM){try{CAM.pause()}catch(_){}CAM.srcObject=null;CAM.remove()}CAM=null;$$('[data-cam]').forEach(b=>{b.textContent='Use my camera';b.setAttribute('aria-pressed','false')})}
async function getCam(m){
 if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){m.textContent='Camera is not available in this browser or context. Try a recent Chrome, Safari or Firefox on the https site.';return false}
 let st=null;const g=++CAMG;
 try{
  try{st=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:1280},height:{ideal:720}},audio:false})}
  catch(e){if(e&&(e.name==='OverconstrainedError'||e.name==='NotReadableError'))st=await navigator.mediaDevices.getUserMedia({video:true,audio:false});else throw e}
  if(g!==CAMG){st.getTracks().forEach(t=>t.stop());return false}
  const v=document.createElement('video');v.setAttribute('playsinline','');v.setAttribute('muted','');v.muted=true;v.autoplay=true;
  v.style.cssText='position:fixed;left:0;top:0;width:2px;height:2px;opacity:.01;pointer-events:none';
  document.body.appendChild(v);v.srcObject=st;
  await new Promise((res,rej)=>{if(v.readyState>=1&&v.videoWidth)return res();v.onloadedmetadata=res;setTimeout(()=>rej(new Error('timeout')),6000)});
  await v.play();
  if(g!==CAMG){st.getTracks().forEach(t=>t.stop());v.srcObject=null;v.remove();return false}
  CAMS=st;CAM=v;
  st.getVideoTracks().forEach(t=>t.addEventListener('ended',()=>{if(CAMS===st){stopCam();m.textContent='The camera stopped.'}}));
  m.textContent='';return true
 }catch(e){
  if(st)st.getTracks().forEach(t=>t.stop());
  const n=e&&e.name;
  m.textContent=n==='NotAllowedError'||n==='SecurityError'?'Camera access was not allowed. Allow the camera in your browser settings to try this with yourself.':n==='NotFoundError'?'No camera was found on this device.':n==='NotReadableError'?'The camera is busy in another app. Close it there and try again.':'The camera could not be started.';
  return false}}
function scene(c,w,h,t){c.globalCompositeOperation='source-over';c.fillStyle='#0C1433';c.fillRect(0,0,w,h);
 for(let k=0;k<7;k++){const x=w*(.5+.38*Math.sin(t*.0004*(k+1)+k*2)),y=h*(.5+.36*Math.cos(t*.0005*(k+2)+k)),r=h*(.12+.05*Math.sin(t*.001+k));c.fillStyle=['#58D4F9','#FF3B3B','#EAF6FF'][k%3];c.beginPath();c.arc(x,y,r,0,7);c.fill()}
 c.globalCompositeOperation='difference';c.fillStyle='#EAF6FF';c.font=`${h*.26}px Anton,Impact,sans-serif`;c.textAlign='center';c.fillText('PLAY',w/2,h*.6);c.globalCompositeOperation='source-over'}
function src(c,w,h,t){if(CAM&&CAM.readyState>=2&&CAM.videoWidth){c.save();c.translate(w,0);c.scale(-1,1);const r=Math.max(w/CAM.videoWidth,h/CAM.videoHeight),x=CAM.videoWidth*r,y=CAM.videoHeight*r;c.drawImage(CAM,(w-x)/2,(h-y)/2,x,y);c.restore()}else scene(c,w,h,t)}
function lab(id,fn){const cv=$('#'+id);if(!cv)return;const c=cv.getContext('2d'),W=cv.width,H=cv.height,bc=document.createElement('canvas');bc.width=W;bc.height=H;const bx=bc.getContext('2d');
 const P={x:W/2,y:H/2,tx:W/2,ty:H/2,seen:0,h:[]};
 cv.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();P.tx=(e.clientX-r.left)*W/r.width;P.ty=(e.clientY-r.top)*H/r.height;P.seen=1});
 cv.addEventListener('pointerdown',e=>{try{cv.setPointerCapture(e.pointerId)}catch(_){}});
 let vis=true;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(cv);
 (function f(t){if(!cv.isConnected)return;requestAnimationFrame(f);if(!vis)return;
  if(!P.seen){P.tx=W/2+Math.cos(t/900)*W*.3;P.ty=H/2+Math.sin(t/650)*H*.25}
  P.x+=(P.tx-P.x)*.2;P.y+=(P.ty-P.y)*.2;P.h.push([P.x,P.y]);if(P.h.length>14)P.h.shift();fn(c,W,H,t,P,bx,bc)})(0)}
function initLabs(){
 $$('.rec').forEach(v=>new IntersectionObserver(e=>{e[0].isIntersecting?v.play().catch(()=>{}):v.pause()}).observe(v));
 lab('c1',(c,W,H,t,P,bx,bc)=>{src(bx,W,H,t);c.globalCompositeOperation='source-over';c.drawImage(bc,0,0);c.globalCompositeOperation='saturation';c.fillStyle='#808080';c.fillRect(0,0,W,H);c.globalCompositeOperation='multiply';c.fillStyle='#58D4F9';c.fillRect(0,0,W,H);c.globalCompositeOperation='source-over';
  c.save();c.beginPath();P.h.forEach(([x,y],k)=>{const r=18+k*4;c.moveTo(x+r,y);c.arc(x,y,r,0,7)});c.clip();c.drawImage(bc,0,0);c.restore();c.strokeStyle='#FF3B3B';c.lineWidth=3;c.beginPath();c.arc(P.x,P.y,74,0,7);c.stroke()});
 const off=document.createElement('canvas'),ox=off.getContext('2d');
 lab('c2',(c,W,H,t,P,bx,bc)=>{src(bx,W,H,t);const p=Math.min(1,Math.max(0,P.x/W)),s=Math.max(1,Math.round(1+p*79));const pm=$('#pxm'),pv=$('#pxv');if(pm){pm.style.left=p*100+'%';pv.textContent='Pixelation '+Math.round(p*100)+'%'}off.width=Math.ceil(W/s);off.height=Math.ceil(H/s);ox.drawImage(bc,0,0,off.width,off.height);c.imageSmoothingEnabled=false;c.drawImage(off,0,0,off.width,off.height,0,0,off.width*s,off.height*s)});
 $$('[data-cam]').forEach(btn=>{btn.setAttribute('aria-pressed','false');btn.onclick=async()=>{const m=$('#'+btn.dataset.cam);$$('.msg').forEach(x=>x.textContent='');if(CAM){stopCam();return}btn.disabled=true;btn.textContent='Starting…';const ok=await getCam(m);btn.disabled=false;if(ok)$$('[data-cam]').forEach(b=>{b.textContent='Turn camera off';b.setAttribute('aria-pressed','true')});else btn.textContent='Use my camera'}});
 }
/* project open: story steps swap the pinned picture */
const so=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const j=+e.target.dataset.j,sf=$('.sf',main);if(!sf)return;let el=null;$$('.sf [data-j]',main).forEach(x=>{const on=+x.dataset.j===j;x.classList.toggle('on',on);if(on)el=x;if(x.tagName==='VIDEO'){on?x.play().catch(()=>{}):x.pause()}});if(el){sf.style.setProperty('--ar',el.dataset.ar);const c=$('#scap');if(c)c.textContent=el.dataset.cap||''}}),{rootMargin:'-45% 0px -45% 0px'});

/* ---- v3 interactions ---- */
function initSb(){const c=$('#sbc');if(!c)return;const N=$$('.note',c),P=$$('path',c),m=c.clientWidth<640;let Z=5;
 const pos=m?[[4,10],[28,170],[4,330]]:[[3,30],[34,150],[66,20]];
 N.forEach((n,i)=>{n.style.left=c.clientWidth*pos[i][0]/100+'px';n.style.top=pos[i][1]+'px';n.dataset.cur='Drag';
  n.onpointerdown=e=>{n.setPointerCapture(e.pointerId);const sx=e.clientX-n.offsetLeft,sy=e.clientY-n.offsetTop;n.classList.add('dr');n.style.zIndex=++Z;
   n.onpointermove=ev=>{n.style.left=Math.max(0,Math.min(c.clientWidth-n.offsetWidth,ev.clientX-sx))+'px';n.style.top=Math.max(0,Math.min(c.clientHeight-n.offsetHeight,ev.clientY-sy))+'px';line()};
   n.onpointerup=n.onpointercancel=()=>{n.classList.remove('dr');n.onpointermove=null}}});
 function line(){for(let k=0;k<2;k++){const a=N[k],b=N[k+1],ax=a.offsetLeft+a.offsetWidth/2,ay=a.offsetTop+a.offsetHeight/2,bx=b.offsetLeft+b.offsetWidth/2,by=b.offsetTop+b.offsetHeight/2,mx=(ax+bx)/2;P[k].setAttribute('d',`M${ax} ${ay}C${mx} ${ay} ${mx} ${by} ${bx} ${by}`)}}
 line()}
function tilt(e){const sf=$('.sf');if(!sf||RM)return;const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;sf.style.transform=`perspective(1100px) rotateY(${x*5}deg) rotateX(${-y*5}deg)`}
if(!RM&&HOVER){addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const R=document.documentElement.style;R.setProperty('--mx',(e.clientX/innerWidth-.5).toFixed(3));R.setProperty('--my',(e.clientY/innerHeight-.5).toFixed(3));tilt(e)},{passive:true})}
const sa=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('act');sa.unobserve(e.target)}}),{rootMargin:'0px 0px -12% 0px',threshold:.15});

const LI='https://www.linkedin.com/in/nithilaprakash/';
const R2=(a,b,n)=>`<div class="r2${n?' nm':''}"><span>${a}</span><span>${b}</span></div>`,UL=a=>`<ul>${a.map(x=>`<li>${x}</li>`).join('')}</ul>`;
const CV_HTML=`<h1>Nithila Prakash</h1><div class="ct">#241 2nd Main ISRO Layout, Bangalore 560078 · nithilaprakash1811@gmail.com · +91 9731908883 · <a href="${LI}" target="_blank" rel="noopener">LinkedIn ↗</a> · <a href="#/">Portfolio</a></div>
<h2>Education</h2>${R2('Srishti Manipal Institute of Art, Design &amp; Technology','Bangalore, India')}${R2('B.Des, Human Centered Design, into 3rd year','June 2028',1)}${R2('Deccan International School','Bangalore, India')}${R2('','March 2023',1)}
<h2>Projects</h2>${R2('Inshorts App Redesign | UI/UX | Figma','2026')}${UL(['Identified usability pain points across browsing, search, and sharing flows through heuristic evaluation and usability testing.','Redesigned navigation and interaction patterns to improve accessibility, visual hierarchy, and consistency for users with limited time or attention spans.','Delivered a high-fidelity prototype in Figma within a 2-week timeframe, with refinements based on concept testing and user feedback.'])}
${R2('Parcel Collection System | Service Design &amp; User Research','2025')}${UL(['Mapped the end-to-end parcel collection experience for a hostel handling 1,000–2,000 deliveries a day through surveys, interviews, observations, and journey mapping.','Identified key pain points: delayed notifications, OTP failures, overcrowding, and long wait times which was affecting both students and staff.','Proposed system-level improvements to streamline verification, reduce wait times, and improve communication across the service.'])}
<h2>Leadership &amp; Activities</h2>${R2('UXINDIA 2026','Bangalore, India')}${R2('Volunteer - Social Media Team','July 2026 – September 2026',1)}${UL(['Volunteered as part of the Media Team, supporting conference documentation and media-related activities.','Assisted in coordinating conference operations and ensuring the smooth functioning of events.','Collaborated with the organizing team to support on-ground requirements and overall conference execution.'])}
${R2('Srishti Alumni Collective','Bangalore, India')}${R2('Core Member &amp; Social Media Team','October 2025 – May 2026',1)}${UL(['Coordinated between alumni and current students to facilitate community-building events and activities.','Designed promotional posters and managed social media content to promote alumni engagement and events.'])}
${R2('ACM SIGCHI – Srishti Manipal Institute','Bangalore, India')}${R2('Events Team Member','August 2025 – March 2026',1)}${UL(['Supported smooth operations for a 50-member chapter, synchronizing workflows across Creatives, Web &amp; Tech, Collaborations, and Projects teams.','Coordinated end-to-end logistics for high-turnout events including Envision, Design Sabha, and Design Karkhana.','Managed event-related data and planning tasks using Excel to keep cross-team execution on track.'])}
${R2('VSO Mahe Bangalore (Volunteering Organization)','Bangalore, India')}${R2('Media Team - Photographer','Jan 2025 – Dec 2025',1)}${UL(['Volunteered as event photographer throughout the year, documenting club activities and community service initiatives.','Captured and curated visual content used for the club\'s social media and promotional materials'])}
<h2>Skills &amp; Interests</h2>${UL(['<b>Technical:</b> Figma, Framer, ESP32, Adobe Creative Suite (Illustrator, Lightroom), DaVinci Resolve, Autodesk Maya, Touchdesigner, Canva, Microsoft Excel','<b>Language:</b> English &amp; Tamil','<b>Interests:</b> Developing Photos Using Pinhole Cameras, Photography, Basketball, Badminton'])}
<h2>Awards</h2>${UL(['1st Place, Magnifier Film Making Competition — Bishop Cotton Boys School (November 2023)','3rd Place, Photography Competition — Srishti Manipal Institute (February 2026)'])}`;
const cvo=document.createElement('div');cvo.id='cvo';cvo.setAttribute('role','dialog');cvo.setAttribute('aria-modal','true');cvo.setAttribute('aria-label','Curriculum vitae');
cvo.innerHTML=`<button type="button" class="cx">Close</button><div class="ev2" aria-hidden="true"><i class="lbk"></i><i class="lp"></i><i class="lb"></i><i class="lf"></i></div><div class="sheet" tabindex="0">${CV_HTML}</div>`;document.body.appendChild(cvo);
let cvT=[],cvBack=null;
function openCV(){cvBack=document.activeElement;cvT.forEach(clearTimeout);document.body.classList.add('lock');cvo.classList.add('on');$('.sheet',cvo).scrollTop=0;
 if(RM){cvo.classList.add('o1','o2');$('.sheet',cvo).focus();return}
 cvT=[setTimeout(()=>cvo.classList.add('o1'),300),setTimeout(()=>cvo.classList.add('o2'),850),setTimeout(()=>$('.sheet',cvo).focus({preventScroll:true}),1500)]}
function closeCV(now){cvT.forEach(clearTimeout);cvo.classList.remove('o2');setTimeout(()=>{cvo.classList.remove('on','o1');document.body.classList.remove('lock');if(cvBack&&cvBack.focus)cvBack.focus({preventScroll:true})},now?0:380)}
document.addEventListener('click',e=>{const t=e.target;if(t.closest&&t.closest('[data-cv]'))openCV();else if(t.closest&&t.closest('.cx'))closeCV();else if(t.closest&&t.closest('.sheet a[href^="#/"]'))closeCV(true);else if(t===cvo)closeCV()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&cvo.classList.contains('on'))closeCV()});
addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||RM)return;const t=e.target.closest&&e.target.closest('.tk');$$('.tk').forEach(x=>{if(x!==t){x.style.removeProperty('--rx');x.style.removeProperty('--ry')}});if(!t)return;const r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;const g=t.querySelector('.tk-t');g.style.setProperty('--ry',(x*16).toFixed(1)+'deg');g.style.setProperty('--rx',(-y*16).toFixed(1)+'deg')},{passive:true});
let XP=null;
function expand(r){busy=true;const x=XP;XP=null;
 const cl=document.createElement('img');cl.id='cl';cl.src=x.src;Object.assign(cl.style,{left:x.b.left+'px',top:x.b.top+'px',width:x.b.width+'px',height:x.b.height+'px'});cl.style.objectPosition=x.pos||'50% 50%';cl.style.objectFit=x.fit||'cover';document.body.appendChild(cl);
 tr.textContent='';tr.style.background='#0C1433';tr.className='a';
 setTimeout(()=>{render(r);const fr=$('.sf',main);fr.classList.add('pre');const to=fr.getBoundingClientRect();tr.className='b';let done=0;
  const fin=()=>{if(done)return;done=1;fr.classList.remove('pre');cl.style.transition='opacity .5s';cl.style.opacity=0;setTimeout(()=>cl.remove(),520);tr.style.transition='none';tr.className='';void tr.offsetHeight;tr.style.transition='';busy=false;if(key(parse())!==cur)nav()};
  const an=cl.animate([{left:x.b.left+'px',top:x.b.top+'px',width:x.b.width+'px',height:x.b.height+'px'},{left:to.left+'px',top:to.top+'px',width:to.width+'px',height:to.height+'px'}],{duration:520,easing:'cubic-bezier(.7,0,.2,1)',fill:'forwards'});an.onfinish=fin;an.oncancel=fin;setTimeout(fin,1000)},360)}
function sp(el){const t=el.textContent;el.setAttribute('aria-label',t);el.innerHTML='';let k=0;t.split(' ').flatMap(w=>w.includes('-')?w.split(/(?<=-)/):[w]).forEach(w=>{const s=document.createElement('span');s.className='wd';s.setAttribute('aria-hidden','true');[...w].forEach(ch=>{const x=document.createElement('span');x.className='c';x.textContent=ch;x.style.transitionDelay=k++*28+'ms';s.appendChild(x)});el.appendChild(s);if(!w.endsWith('-'))el.appendChild(document.createTextNode(' '))})}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
let HASH=location.hash||'#/';function parse(){const[a,b]=HASH.replace(/^#\/?/,'').split('/');if(a==='projects'&&b&&PR[+b-1])return{p:'case',i:+b-1};return{p:ORDER.includes(a)?a:'home',i:0}}
const key=r=>r.p+r.i,label=r=>r.p==='case'?PR[r.i].t:NM[r.p];
function render(r){if(r.p!=='experiments')stopCam();const th=r.p==='case'?'home':r.p;document.body.dataset.t=th;main.innerHTML=V[r.p](r.i);document.title=label(r)+' — Nithila Prakash ';window.scrollTo(0,0);
$$('.nv a,.lg').forEach(a=>{const on=a.dataset.p===(r.p==='case'?'projects':r.p);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});
$$('.sp',main).forEach(sp);$$('.wl',main).forEach(el=>{el.innerHTML=el.textContent.split(' ').map(w=>`<span class="w">${w}</span>`).join(' ')});
$$('.sp,.rv',main).forEach(e=>RM?e.classList.add('in'):io.observe(e));
$$('.tile',main).forEach(t=>{t.onmousemove=e=>{if(RM||!HOVER)return;const b=t.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;t.style.transform=`rotateY(${x*12}deg) rotateX(${-y*12}deg)`};t.onmouseleave=()=>t.style.transform=''});
$$('.stz',main).forEach(e=>so.observe(e));$$('.stp',main).forEach(e=>{so.observe(e);RM?e.classList.add('act'):sa.observe(e)});initSb();if(r.p==='experiments')initLabs();lnk();cur=key(r);main.focus({preventScroll:true})}
let cur='',busy=false;
function nav(first){const r=parse();if(first||RM){XP=null;render(r);return}if(busy)return;if(XP&&r.p==='case'){expand(r);return}XP=null;busy=true;const toRed=r.p!=='contact';tr.textContent=label(r);tr.style.background=toRed?'#FF3B3B':'#A8E6FB';tr.style.color=toRed?'#050816':'#0C1433';tr.className='a';
setTimeout(()=>{render(r);tr.className='b';setTimeout(()=>{tr.style.transition='none';tr.className='';void tr.offsetHeight;tr.style.transition='';busy=false;if(key(parse())!==cur)nav()},350)},360)}
function go(h){if(h===HASH)return;HASH=h;try{history.pushState(null,'',h)}catch(e){}$('#mn').classList.remove('o');$('#mb').setAttribute('aria-expanded','false');nav()}
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a[href^="#/"]');if(!a||e.metaKey||e.ctrlKey||e.shiftKey)return;if(a.classList.contains('rw')||a.classList.contains('fr')){const im=a.querySelector('.th img,.gi img,.fim img');if(im){const q=im.getBoundingClientRect();if(q.width>20&&q.height>20)XP={src:im.src,b:q,pos:getComputedStyle(im).objectPosition,fit:getComputedStyle(im).objectFit}}}e.preventDefault();go(a.getAttribute('href'))});
addEventListener('popstate',()=>{HASH=location.hash||'#/';nav()});
addEventListener('hashchange',()=>{if((location.hash||'#/')!==HASH){HASH=location.hash||'#/';nav()}});
$('#sk').onclick=e=>{e.preventDefault();main.focus()};
$('#mb').onclick=()=>{const m=$('#mn'),o=m.classList.toggle('o');$('#mb').setAttribute('aria-expanded',o);$$('a',m).forEach((a,i)=>a.style.transitionDelay=o?i*70+150+'ms':'0ms')};
addEventListener('keydown',e=>{if(e.key==='Escape'){$('#mn').classList.remove('o');$('#mb').setAttribute('aria-expanded','false')}});
let ot;const setOpen=r=>{$$('.pj.open').forEach(x=>{if(x!==r)x.classList.remove('open')});if(r)r.classList.add('open')};
document.addEventListener('pointerover',e=>{if(e.pointerType!=='mouse')return;const r=e.target.closest&&e.target.closest('.pj');clearTimeout(ot);if(r)ot=setTimeout(()=>setOpen(r),60)});
document.addEventListener('mouseout',e=>{const l=e.target.closest&&e.target.closest('.lst');if(l&&!(e.relatedTarget&&l.contains(e.relatedTarget))){clearTimeout(ot);setOpen(null)}});
document.addEventListener('focusin',e=>{const r=e.target.closest&&e.target.closest('.pj');if(r)setOpen(r)});
document.addEventListener('focusout',e=>{const l=e.target.closest&&e.target.closest('.lst');if(l&&!(e.relatedTarget&&l.contains(e.relatedTarget)))setOpen(null)});
let tk=0;addEventListener('scroll',()=>{if(!tk){tk=1;requestAnimationFrame(()=>{tk=0;lnk()})}},{passive:true});
function lnk(){$('#hd').classList.toggle('sc',scrollY>30);if(RM)return;const y=scrollY,H=innerHeight,hn=$('#hn');
if(hn){hn.style.transform=`translateY(${y*.35}px)`;hn.style.letterSpacing=y*.04+'px';hn.style.opacity=Math.max(0,1-y/(H*.7))}
$$('[data-mv]').forEach(e=>e.style.transform=`translateX(${(e.getBoundingClientRect().top-H/2)*e.dataset.mv}px)`);
const cv=$('#cv');if(cv){const p=Math.min(1,Math.max(0,1-cv.getBoundingClientRect().top/H));cv.style.transform=`scale(${.8+.2*p})`}
$$('.fr').forEach(f=>{const r=f.getBoundingClientRect();f.style.setProperty('--p',((r.top+r.height/2)/H-.5).toFixed(3))});$$('.w').forEach(w=>w.classList.toggle('lit',w.getBoundingClientRect().top<H*.65))}
nav(true);

addEventListener('pagehide',()=>stopCam());addEventListener('beforeunload',()=>stopCam());document.addEventListener('visibilitychange',()=>{if(document.hidden&&CAM)stopCam()});

/* hide broken images (missing files) instead of showing the broken icon */
document.addEventListener('error',e=>{if(e.target&&e.target.tagName==='IMG')e.target.style.visibility='hidden'},true);
