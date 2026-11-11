/* みんなで遊ぶ（友だち対戦・教室大会）。index.html の関数・変数（S, CARDS, byNo, fieldHTML, later など）を使う。
   データは Firebase（kissa-register）の events/ik-<合言葉>/state/room と …/ans に置く。 */
'use strict';
const fbConfig={
  apiKey:'AIzaSyCzxuZbLIhAKYIWGI5Q7vMscumtzwdxF0U',
  authDomain:'kissa-register.firebaseapp.com',
  projectId:'kissa-register',
  storageBucket:'kissa-register.firebasestorage.app',
  messagingSenderId:'39499958848',
  appId:'1:39499958848:web:1a8ba8004dc4611c1cada5'
};
let FB=null,UID=null,O=null,OH={kind:null,code:''};
const MAXP=4, PRE_MS=1500, SHOW_MS=3500;
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ODECKS=DECKS.filter(d=>d[0]!=='review');
if(!S.odeck)S.odeck='all';
if(S.nick==null)S.nick='';
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
async function loadFB(){
  if(FB)return FB;
  const [app_,auth,fs]=await Promise.all([
    import('https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js'),
    import('https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'),
    import('https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js')
  ]);
  const a=app_.initializeApp(fbConfig);
  const cred=await auth.signInAnonymously(auth.getAuth(a));
  UID=cred.user.uid;
  FB={...fs,db:fs.getFirestore(a)};
  return FB;
}
const roomRef=c=>FB.doc(FB.db,'events','ik-'+c,'state','room');
const ansRef=c=>FB.doc(FB.db,'events','ik-'+c,'state','ans');
const isHostView=()=>O&&O.kind==='class'&&O.host;
const kindName=k=>k==='class'?'教室大会':'友だち対戦';
function onlineLeave(){
  if(O){try{O.unsub&&O.unsub();O.unsubAns&&O.unsubAns();}catch(e){}O=null;}
  app.classList.remove('wide');
}
function onlineBoot(){
  const r=new URLSearchParams(location.search).get('r');
  if(r&&/^\d{6}$/.test(r)){onlineHome(null,r);return true;}
  return false;
}
function recordStat(no,clean){const st=store.stats[no]=stat(no);st.n++;if(clean){st.ok++;st.last='ok';}else{st.ng++;st.last='ng';}save();}
function wireVoice(){
  const vb=document.getElementById('voice');if(!vb)return;
  if(!canSpeak){vb.style.visibility='hidden';return;}
  const vl=()=>{vb.textContent=S.voice?'音声 あり':'音声 なし';};vl();
  vb.onclick=()=>{S.voice=!S.voice;save();vl();if(!S.voice)hush();};
}

/* ---------- 入口 ---------- */
function onlineHome(kind,code){
  onlineLeave();clearTimers();hush();
  if(code!=null)OH.code=code;
  OH.kind=kind;
  SCREEN=()=>onlineHome(kind);
  const cls=kind==='class';
  app.innerHTML=`<div class="top"><button data-go="home">ホーム</button><h1>${kind?kindName(kind):'みんなで遊ぶ'}</h1></div><div class="pad">
   <label class="flab" for="nick">ニックネーム（本名は入れない・8文字まで）</label>
   <input class="inp" id="nick" maxlength="8" autocomplete="off" value="${esc(S.nick)}">
   <div class="box"><h2>${cls?'生徒：大会に入る':'部屋に入る'}</h2>
    <label class="flab" for="code">合言葉（6けたの数字）</label>
    <input class="inp code" id="code" inputmode="numeric" maxlength="6" autocomplete="off" value="${esc(OH.code)}">
    <button class="start" id="ojoin">入る</button></div>
   ${kind?`<div class="box"><h2>${cls?'先生：大会をひらく':'部屋をつくる'}</h2>
    <div class="group"><h2>札の束</h2>${seg('odeck',ODECKS.map(d=>[d[0],d[1],deckCards(d[0]).length+'枚']))}</div>
    <div class="group"><h2>場に並べる面</h2>${seg('face',[['name','名前','ふつう'],['face','肖像','むずかしい']])}</div>
    <div class="group"><h2>読む枚数</h2>${seg('count',[[10,'10枚'],[20,'20枚'],[0,'ぜんぶ']])}</div>
    <button class="start" id="ocreate" style="background:var(--ai)">${cls?'大会をひらく':'部屋をつくる'}</button>
    <p class="note">${cls?'ひらいた画面をスクリーンに映し、出てきた合言葉を生徒に伝えます。先生はニックネームなしで始められます。':'出てきた合言葉を友だちに伝えます（4人まで）。'}</p></div>`:''}
   <p class="err" id="oerr" role="alert"></p></div>`;
  const nick=document.getElementById('nick'),cd=document.getElementById('code');
  nick.oninput=()=>{S.nick=nick.value.trim().slice(0,8);save();};
  cd.oninput=()=>{cd.value=cd.value.replace(/\D/g,'').slice(0,6);OH.code=cd.value;};
  document.getElementById('ojoin').onclick=e=>busy(e.currentTarget,()=>joinRoom(OH.code));
  const cr=document.getElementById('ocreate');if(cr)cr.onclick=e=>busy(e.currentTarget,()=>createRoom(kind));
  window.scrollTo(0,0);
}
function oerr(m){const e=document.getElementById('oerr');if(e){e.textContent=m;e.scrollIntoView({block:'nearest'});}}
async function busy(btn,fn){
  const t=btn.textContent;btn.disabled=true;btn.textContent='つないでいます…';oerr('');
  try{await fn();}catch(e){console.warn(e);oerr(e&&e.userMsg?e.userMsg:'つながりませんでした。通信を確かめて、もう一度ためしてください。');}
  if(btn.isConnected){btn.disabled=false;btn.textContent=t;}
}
const fail=m=>{const e=new Error(m);e.userMsg=m;return e;};
async function createRoom(kind){
  if(kind==='friend'&&!S.nick)throw fail('ニックネームを入れてください。');
  await loadFB();
  let code='';
  for(let i=0;i<8;i++){code=String(Math.floor(100000+Math.random()*900000));const s=await FB.getDoc(roomRef(code));if(!s.exists())break;code='';}
  if(!code)throw fail('合言葉を作れませんでした。もう一度ためしてください。');
  const n=deckCards(S.odeck).length;
  const room={v:1,kind,host:UID,deck:S.odeck,face:S.face,N:Math.min(S.count||n,n),status:'lobby',
    players:kind==='friend'?{[UID]:{n:S.nick,c:0,o:0}}:{},createdAt:Date.now()};
  await FB.setDoc(roomRef(code),room);
  if(kind==='class')await FB.setDoc(ansRef(code),{p:{},a:{}});
  enterRoom(code,kind,true);
}
async function joinRoom(code){
  if(!/^\d{6}$/.test(code||''))throw fail('合言葉は6けたの数字です。');
  await loadFB();
  const snap=await FB.getDoc(roomRef(code));
  if(!snap.exists())throw fail('その合言葉の部屋が見つかりません。');
  const d=snap.data();
  if(d.host===UID){enterRoom(code,d.kind,true);return;}
  if(!S.nick)throw fail('ニックネームを入れてください。');
  if(d.kind==='class'){
    await FB.setDoc(ansRef(code),{p:{[UID]:{n:S.nick}}},{merge:true});
  }else{
    await FB.runTransaction(FB.db,async tx=>{
      const s=await tx.get(roomRef(code));if(!s.exists())throw fail('その合言葉の部屋が見つかりません。');
      const r=s.data(),ps={...r.players};
      if(!ps[UID]){
        if(r.status!=='lobby')throw fail('この部屋はもう対戦が始まっています。');
        if(Object.keys(ps).length>=MAXP)throw fail('この部屋は満員です（4人まで）。');
        ps[UID]={n:S.nick,c:0,o:Object.keys(ps).length};
      }else ps[UID]={...ps[UID],n:S.nick};
      tx.update(roomRef(code),{players:ps});
    });
  }
  enterRoom(code,d.kind,false);
}
function enterRoom(code,kind,host){
  onlineLeave();clearTimers();hush();SCREEN=null;
  O={code,kind,host,room:null,ans:{p:{},a:{}},rid:0,shown:0,r:null,my:0};
  O.unsub=FB.onSnapshot(roomRef(code),snap=>{
    if(!O||O.code!==code)return;
    if(!snap.exists()){home();setTimeout(()=>alert('部屋がとじられました。'),50);return;}
    O.room=snap.data();onRoom();
  },()=>{if(O&&O.code===code){home();setTimeout(()=>alert('通信が切れました。'),50);}});
  if(kind==='class'&&host)O.unsubAns=FB.onSnapshot(ansRef(code),snap=>{
    if(!O||O.code!==code)return;O.ans=snap.data()||{p:{},a:{}};if(!O.ans.p)O.ans.p={};if(!O.ans.a)O.ans.a={};onAns();
  });
}
async function leaveRoom(){
  const o=O;if(!o){home();return;}
  if(o.host){
    if(!confirm(o.kind==='class'?'大会をとじますか？（全員の画面が終わります）':'部屋をとじますか？（全員の画面が終わります）'))return;
    onlineLeave();
    try{await FB.deleteDoc(roomRef(o.code));if(o.kind==='class')await FB.deleteDoc(ansRef(o.code));}catch(e){}
  }else if(o.kind==='friend'&&o.room&&o.room.status==='lobby'){
    onlineLeave();
    try{await FB.runTransaction(FB.db,async tx=>{const s=await tx.get(roomRef(o.code));if(!s.exists())return;const ps={...s.data().players};delete ps[UID];tx.update(roomRef(o.code),{players:ps});});}catch(e){}
  }
  home();
}

/* ---------- 部屋の変化を受ける ---------- */
function onRoom(){
  const d=O.room;
  app.classList.toggle('wide',isHostView());
  if(d.status==='lobby'){O.rid=0;O.shown=0;O.r=null;O.my=0;clearTimers();hush();renderLobby();return;}
  if(d.status==='done'){clearTimers();hush();O.r=null;renderDone();return;}
  if(O.rid!==d.rid){O.rid=d.rid;O.shown=0;startRound();}
  if(d.phase==='show'&&O.shown!==d.rid){O.shown=d.rid;showSettle();}
}
function onAns(){
  if(!O.room)return;
  if(O.room.status==='lobby'){renderLobby();return;}
  if(O.room.status==='done'){renderDone();return;}
  const hi=document.getElementById('hinfo');
  if(!O.r||O.room.phase!=='read')return;
  const n=Object.keys(O.ans.p).length,a=Object.keys((O.ans.a||{})[O.room.rid]||{}).length;
  if(hi)hi.textContent=`こたえた人 ${a} / ${n}人`;
  if(n>0&&a>=n&&!O.r.early&&(O.r.phase==='read'||O.r.phase==='wait')){O.r.early=true;later(hostSettle,700);}
}

/* ---------- 待合 ---------- */
function playerList(){
  if(O.kind==='friend')return Object.entries(O.room.players||{}).sort((a,b)=>(a[1].o||0)-(b[1].o||0)).map(([u,p])=>({u,n:p.n}));
  return Object.entries(O.ans.p||{}).map(([u,p])=>({u,n:p.n}));
}
function renderLobby(){
  const d=O.room,ps=playerList(),cls=O.kind==='class';
  const url=location.origin+location.pathname;
  const info=`${deckName(d.deck)}・${d.face==='name'?'名前の面':'肖像の面'}・${d.N}枚`;
  let body;
  if(cls&&!O.host){
    body=`<div class="big"><div class="v" style="font-size:28px">参加しました</div><p>${esc(S.nick)} さん<br>先生が始めるのを待っています。<br>${info}</p></div>`;
  }else{
    body=`<p class="flab" style="text-align:center">合言葉</p><div class="codebig">${O.code}</div>
     ${cls?`<p class="note" style="font-size:clamp(14px,2vw,22px)">${esc(url)} を開き、「教室大会」→ 合言葉とニックネームを入れて「入る」</p>`:`<div class="links"><button id="ocopy">招待リンクをコピー</button></div>`}
     <p class="flab">参加者 ${ps.length}人${cls?'':'（4人まで）'}</p>
     <div class="chips">${ps.map(p=>`<span class="${p.u===UID?'me':''}">${esc(p.n)}</span>`).join('')||'<span>まだいません</span>'}</div>
     <p class="note">${info}</p>
     ${O.host?`<button class="start" id="ostart" ${ps.length<(cls?1:2)?'disabled style="opacity:.45"':''}>はじめる</button>${ps.length<(cls?1:2)?`<p class="note">${cls?'生徒が入ると始められます。':'2人以上で始められます。'}</p>`:''}`:`<p class="note">部屋を作った人が始めるのを待っています。</p>`}`;
  }
  app.innerHTML=`<div class="top"><button id="oleave">${O.host?'とじる':'出る'}</button><h1>${kindName(O.kind)}</h1></div><div class="pad">${body}<p class="err" id="oerr" role="alert"></p></div>`;
  document.getElementById('oleave').onclick=leaveRoom;
  const cp=document.getElementById('ocopy');
  if(cp)cp.onclick=async()=>{try{await navigator.clipboard.writeText(url+'?r='+O.code);cp.textContent='コピーしました';}catch(e){cp.textContent=url+'?r='+O.code;}};
  const st=document.getElementById('ostart');if(st)st.onclick=e=>busy(e.currentTarget,startOnline);
}
async function startOnline(){
  const d=O.room,cards=shuffle(deckCards(d.deck).map(c=>c.no));
  const N=Math.min(d.N,cards.length),slots=Array(FIELD).fill(null);
  cards.slice(0,FIELD).forEach((no,i)=>slots[i]=no);
  const on=slots.filter(Boolean),ps={};
  Object.entries(d.players||{}).forEach(([u,p])=>ps[u]={...p,c:0});
  if(O.kind==='class')await FB.updateDoc(ansRef(O.code),{a:{}});
  await FB.updateDoc(roomRef(O.code),{status:'play',N,slots,pool:cards.slice(FIELD),round:0,cur:on[Math.floor(Math.random()*on.length)],
    rid:1,phase:'read',win:null,pct:0,miss:[],log:[],players:ps,sc:{},rk:{},top:[],got:0,total:0});
}

/* ---------- 1枚ごとの進行 ---------- */
function startRound(){
  clearTimers();hush();
  const d=O.room,c=byNo[d.cur],rid=d.rid;
  O.r={rid,phase:'pre',shown:0,len:c.q.join('').length,pen:0,missed:false,locked:false,sent:false,ok:false,pts:0};
  if(isHostView())renderHostRound();else renderPlayRound();
  const q=document.getElementById('q');
  q.innerHTML=c.q.map(ph=>`<span class="ph">${[...ph].map(ch=>`<i>${ch}</i>`).join('')}</span>`).join('');
  const els=q.querySelectorAll('i'),tm=document.getElementById('tm');
  later(()=>{
    if(!O||!O.r||O.r.rid!==rid)return;
    O.r.phase='read';
    if(S.voice&&canSpeak){try{const u=new SpeechSynthesisUtterance(c.q.join(''));u.lang='ja-JP';u.rate=1.05;speechSynthesis.speak(u);}catch(e){}}
    const tick=()=>{
      if(!O||!O.r||O.r.rid!==rid||O.r.phase!=='read')return;
      els[O.r.shown].classList.add('on');O.r.shown++;
      if(O.r.shown<O.r.len)later(tick,CHAR_MS);
      else{O.r.phase='wait';if(tm){tm.style.setProperty('--wait',WAIT_MS+'ms');tm.className='run';}later(onTimeout,WAIT_MS+(isHostView()?1500:0));}
    };tick();
  },PRE_MS);
}
function renderPlayRound(){
  const d=O.room;
  if(!document.getElementById('ofield')){
    app.innerHTML=`<div class="game"><div class="bar"><button id="quit">出る</button><div class="mid" id="mid"></div><button id="voice"></button></div>
     <div class="yomi"><div class="lab"><span>読み札</span><span id="cnt"></span></div><div class="q" id="q"></div><div class="time"><b id="tm"></b></div></div>
     <div class="fieldwrap"><div class="field" id="ofield"></div></div></div>`;
    document.getElementById('quit').onclick=leaveRoom;wireVoice();
    document.getElementById('ofield').addEventListener('click',oTap);
  }
  document.querySelectorAll('.sheet,.banner,.toast').forEach(e=>e.remove());
  document.getElementById('tm').className='';
  const f=document.getElementById('ofield');f.classList.remove('lock');f.innerHTML=fieldHTML(d.slots,d.face);
  oBar();
}
function oBar(){
  const d=O.room,mid=document.getElementById('mid'),cnt=document.getElementById('cnt');
  if(cnt)cnt.textContent=`${Math.min(d.round+1,d.N)} / ${d.N} 枚目`;
  if(!mid)return;
  if(O.kind==='friend'){
    const ps=d.players||{},me=ps[UID]||{c:0};
    const others=Object.entries(ps).filter(([u])=>u!==UID).sort((a,b)=>(a[1].o||0)-(b[1].o||0)).map(([,p])=>`${esc(p.n)} ${p.c||0}`).join('・');
    mid.innerHTML=`<b>あなた ${me.c||0}枚</b><span>${others}</span>`;
  }else{
    const rk=(d.rk||{})[UID];
    mid.innerHTML=`<b>${O.my} 点</b><span>教室大会${rk?`・いま ${rk}位`:''}</span>`;
  }
}
function banner(msg){document.querySelectorAll('.banner').forEach(e=>e.remove());const b=document.createElement('div');b.className='banner';b.textContent=msg;document.querySelector('.game').appendChild(b);}
function revealAll(){document.querySelectorAll('#q i').forEach(x=>x.classList.add('on'));const tm=document.getElementById('tm');if(tm)tm.className='';}
function oTap(e){
  const b=e.target.closest('.card');
  if(!b||!O||!O.r||(O.r.phase!=='read'&&O.r.phase!=='wait')||O.r.locked)return;
  const no=+b.dataset.no,d=O.room,f=document.getElementById('ofield');
  if(no===d.cur){
    const frac=O.r.phase==='wait'?1:O.r.shown/O.r.len;
    if(O.kind==='friend'){O.r.locked=true;txClaim(O.r.rid,Math.round(frac*100));return;}
    const pts=Math.round(100-70*frac)-O.r.pen;
    O.r.phase='done';O.r.ok=true;O.r.pts=pts;clearTimers();hush();revealAll();
    b.classList.add('hit');f.classList.add('lock');
    submitAns(pts,true);recordStat(d.cur,!O.r.missed);
    banner(`取った！ ${pts>=0?'＋':'−'}${Math.abs(pts)}点　みんなの結果を待っています`);
    return;
  }
  b.classList.add('wrong');O.r.missed=true;
  if(O.kind==='friend'){O.r.locked=true;f.classList.add('lock');toast('お手つき！ この札は休み');txMiss(O.r.rid);}
  else{O.r.pen+=OTE;toast(`お手つき −${OTE}点`);}
}
function onTimeout(){
  if(!O||!O.r)return;
  if(isHostView()){hostSettle();return;}
  if(O.kind==='friend'){txNone(O.r.rid);return;}
  if(O.r.phase==='done')return;
  O.r.phase='done';O.r.pts=-O.r.pen;
  const el=document.querySelector(`.card[data-no="${O.room.cur}"]`);if(el)el.classList.add('cpu');
  document.getElementById('ofield').classList.add('lock');
  submitAns(-O.r.pen,false);recordStat(O.room.cur,false);
  banner('時間切れ　みんなの結果を待っています');
}
function submitAns(p,ok){
  O.r.sent=true;
  FB.setDoc(ansRef(O.code),{a:{[O.r.rid]:{[UID]:{p,ok:ok?1:0}}}},{merge:true}).catch(()=>toast('送れませんでした。通信を確かめてください'));
}
const tx=fn=>FB.runTransaction(FB.db,fn).catch(e=>{console.warn(e);});
function txClaim(rid,pct){
  const ref=roomRef(O.code);
  return tx(async t=>{const s=await t.get(ref);if(!s.exists())return;const d=s.data();if(d.rid!==rid||d.phase!=='read'||d.status!=='play')return;
    const ps={...d.players};ps[UID]={...ps[UID],c:((ps[UID]||{}).c||0)+1};
    t.update(ref,{phase:'show',win:UID,pct,players:ps,log:[...(d.log||[]),{no:d.cur,w:UID}]});});
}
function txMiss(rid){
  const ref=roomRef(O.code);
  return tx(async t=>{const s=await t.get(ref);if(!s.exists())return;const d=s.data();if(d.rid!==rid||d.phase!=='read'||d.status!=='play')return;
    const miss=[...new Set([...(d.miss||[]),UID])];
    if(miss.length>=Object.keys(d.players||{}).length)t.update(ref,{phase:'show',win:'',miss,log:[...(d.log||[]),{no:d.cur,w:''}]});
    else t.update(ref,{miss});});
}
function txNone(rid){
  const ref=roomRef(O.code);
  return tx(async t=>{const s=await t.get(ref);if(!s.exists())return;const d=s.data();if(d.rid!==rid||d.phase!=='read'||d.status!=='play')return;
    t.update(ref,{phase:'show',win:'',log:[...(d.log||[]),{no:d.cur,w:''}]});});
}
function txAdvance(rid){
  const ref=roomRef(O.code);
  return tx(async t=>{const s=await t.get(ref);if(!s.exists())return;const d=s.data();if(d.rid!==rid||d.phase!=='show'||d.status!=='play')return;
    const slots=[...d.slots],pool=[...(d.pool||[])],i=slots.indexOf(d.cur);
    if(i>=0)slots[i]=pool.length?pool.shift():null;
    const round=d.round+1,on=slots.filter(Boolean);
    if(round>=d.N||!on.length)t.update(ref,{status:'done',slots,pool,round});
    else t.update(ref,{slots,pool,round,cur:on[Math.floor(Math.random()*on.length)],rid:d.rid+1,phase:'read',win:null,pct:0,miss:[]});});
}
const isLast=d=>d.round+1>=d.N||(d.slots.filter(Boolean).length<=1&&!(d.pool||[]).length);

/* ---------- 1枚の結果 ---------- */
function cardInfo(c){return `<div class="row"><div class="pic">${faceHTML(c)}</div><div class="inf"><div class="era">${eraName(c)}</div><div class="name">${nameHTML(c)}</div><div class="yo">${c.yomi}</div><div class="full">${c.q.join('')}</div></div></div>`;}
function showSettle(){
  clearTimers();hush();revealAll();
  const d=O.room,c=byNo[d.cur],rid=d.rid;
  if(isHostView()){showHostSettle();return;}
  document.querySelectorAll('.banner,.toast,.sheet').forEach(e=>e.remove());
  const f=document.getElementById('ofield');if(f)f.classList.add('lock');
  const el=document.querySelector(`.card[data-no="${d.cur}"]`);
  let head,cls,extra='',wait;
  if(O.kind==='friend'){
    const mine=d.win===UID;
    if(el)el.classList.add(mine?'hit':'cpu');
    head=mine?`あなたが取った！<small>読み札の${d.pct}％で</small>`:d.win?`${esc((d.players[d.win]||{}).n||'?')} さんが取った<small>読み札の${d.pct}％で</small>`:'だれも取れませんでした';
    cls=mine?'ok':'ng';
    recordStat(d.cur,mine&&!(O.r&&O.r.missed));
    wait=isLast(d)?'まもなく結果が出ます…':'まもなく次の札…';
    later(()=>txAdvance(rid),O.host?SHOW_MS:9000+Math.random()*3000);
    oBar();
  }else{
    const r=O.r||{};
    if(el)el.classList.add(r.ok?'hit':'cpu');
    head=r.ok?`取った！ ${r.pts>=0?'＋':'−'}${Math.abs(r.pts)}点`:r.sent?'時間切れ':'この札はお休み';
    cls=r.ok?'ok':'ng';
    if(d.sc&&d.sc[UID]!=null)O.my=d.sc[UID];
    const rk=(d.rk||{})[UID];
    extra=`<div class="cls">クラスで取れた人 ${d.got} / ${d.total}人${rk?`　あなたは ${rk}位（${O.my}点）`:''}</div>`;
    wait=isLast(d)?'先生が結果発表に進めます':'先生が次の札に進めます';
    oBar();
  }
  const sh=document.createElement('div');sh.className='sheet';
  sh.innerHTML=`<div class="res ${cls}">${head}</div>${cardInfo(c)}${extra}<p class="wait">${wait}</p>`;
  document.querySelector('.game').appendChild(sh);
}

/* ---------- 教室大会・先生の画面 ---------- */
function renderHostRound(){
  const d=O.room;
  app.innerHTML=`<div class="game hostv"><div class="bar"><button id="quit">とじる</button><div class="mid"><b>教室大会　合言葉 ${O.code}</b><span id="cnt">${d.round+1} / ${d.N} 枚目</span></div><button id="voice"></button></div>
   <div class="hq" id="q"></div><div class="yomi" style="padding:0;border:0;height:6px;margin:0 12px"><div class="time" style="height:6px"><b id="tm"></b></div></div>
   <div class="hinfo" id="hinfo">こたえた人 0 / ${Object.keys(O.ans.p).length}人</div><div id="hres"></div></div>`;
  document.getElementById('quit').onclick=leaveRoom;wireVoice();
  window.scrollTo(0,0);
}
function hostSettle(){
  if(!O||!O.r||O.r.settled||!O.room||O.room.phase!=='read')return;
  O.r.settled=true;
  const A=O.ans.a||{},P=O.ans.p||{},d=O.room,tot={};
  Object.keys(P).forEach(u=>tot[u]=0);
  Object.values(A).forEach(r=>Object.entries(r).forEach(([u,v])=>{if(u in tot)tot[u]+=(v.p||0);}));
  Object.keys(tot).forEach(u=>tot[u]=Math.max(0,tot[u]));
  const got=Object.entries(A[d.rid]||{}).filter(([u,v])=>v.ok&&(u in tot)).length;
  const order=Object.keys(tot).sort((a,b)=>tot[b]-tot[a]),rk={};
  order.forEach((u,i)=>rk[u]=i>0&&tot[u]===tot[order[i-1]]?rk[order[i-1]]:i+1);
  const top=order.slice(0,5).map(u=>({n:P[u].n,s:tot[u],r:rk[u]}));
  FB.updateDoc(roomRef(O.code),{phase:'show',sc:tot,rk,top,got,total:order.length,log:[...(d.log||[]),{no:d.cur,got,total:order.length}]})
    .catch(()=>{O.r.settled=false;toast('送れませんでした。通信を確かめてください');});
}
const rankHTML=(list,me)=>`<ol class="rank">${list.map(p=>`<li class="${p.u&&p.u===me?'me':''}"><b>${p.r}位</b><span>${esc(p.n)}</span>${p.s}${p.unit||'点'}</li>`).join('')}</ol>`;
function showHostSettle(){
  const d=O.room,c=byNo[d.cur],rid=d.rid,hr=document.getElementById('hres');
  if(!hr){renderHostRound();document.getElementById('q').innerHTML=c.q.map(ph=>`<span class="ph">${[...ph].map(ch=>`<i class="on">${ch}</i>`).join('')}</span>`).join('');return showHostSettle();}
  document.getElementById('hinfo').textContent='';
  hr.className='hres';
  hr.innerHTML=`<div class="pic">${faceHTML(c)}</div><div class="inf"><div class="era">${eraName(c)}　${c.yomi}</div><div class="name">${nameHTML(c)}</div>
    <div class="got">取れた人 ${d.got} / ${d.total}人</div>
    <button class="start" id="onext">${isLast(d)?'結果発表へ':'次の札へ'}</button></div>
    <div class="inf"><div class="era">いまの上位</div>${rankHTML(d.top||[])}</div>`;
  document.getElementById('onext').onclick=e=>busy(e.currentTarget,()=>txAdvance(rid));
}

/* ---------- 終わり ---------- */
function renderDone(){
  const d=O.room;let body;
  if(O.kind==='friend'){
    const ps=Object.entries(d.players||{}).map(([u,p])=>({u,n:p.n,s:p.c||0,unit:'枚'})).sort((a,b)=>b.s-a.s);
    ps.forEach((p,i)=>p.r=i>0&&p.s===ps[i-1].s?ps[i-1].r:i+1);
    const me=ps.find(p=>p.u===UID)||{r:'-',s:0};
    body=`<div class="big"><div class="v">${me.r}<small> 位</small></div><p>あなたは ${me.s}枚 取りました</p></div>${rankHTML(ps,UID)}`;
  }else if(O.host){
    const P=O.ans.p||{},sc=d.sc||{},rk=d.rk||{};
    const ps=Object.keys(sc).map(u=>({u,n:(P[u]||{}).n||'?',s:sc[u],r:rk[u]})).sort((a,b)=>a.r-b.r);
    body=`<div class="big"><div class="v" style="font-size:clamp(32px,6vw,64px)">結果発表</div><p>${ps.length}人・${d.N}枚</p></div>${rankHTML(ps)}`;
  }else{
    const rk=(d.rk||{})[UID],sc=(d.sc||{})[UID];
    body=`<div class="big"><div class="v">${rk||'-'}<small> 位 / ${d.total||0}人</small></div><p>${sc!=null?sc:O.my}点</p></div><p class="flab">上位</p>${rankHTML(d.top||[])}`;
  }
  app.innerHTML=`<div class="top"><button id="oleave">${O.host?'とじる':'ホーム'}</button><h1>${kindName(O.kind)}の結果</h1></div><div class="pad">${body}
    ${O.host?`<button class="start" id="oagain" style="margin-top:20px">同じメンバーでもう一度</button>`:`<p class="note">もう一度やるときは、このまま待ちます。</p>`}<p class="err" id="oerr" role="alert"></p></div>`;
  document.getElementById('oleave').onclick=leaveRoom;
  const ag=document.getElementById('oagain');if(ag)ag.onclick=e=>busy(e.currentTarget,()=>FB.updateDoc(roomRef(O.code),{status:'lobby'}));
  window.scrollTo(0,0);
}
