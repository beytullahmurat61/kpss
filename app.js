// ============================================================
// MİSYON KORUMA – UYGULAMA MOTORU
// Ders → Ünite → Test → Sonuç → Yanlışlar → Tekrar
// Backend yok; tüm ilerleme localStorage'da tutulur.
// ============================================================
'use strict';

// ---------------- yardımcılar ----------------
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const L = QDB.LETTERS;
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
const shuffle = arr => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const fmtDate = ts => ts ? new Date(ts).toLocaleString('tr-TR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' }) : '—';
const fmtTime = s => { s = Math.max(0, Math.round(s)); const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60; return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(x).padStart(2, '0'); };
const DIFF = { easy: ['🟢', 'Kolay'], medium: ['🟡', 'Orta'], hard: ['🔴', 'Zor'] };
const tone = p => (p >= 75 ? 'ok' : p >= 50 ? 'mid' : 'bad');

// ---------------- kalıcı durum ----------------
const DEFAULT_STATE = () => ({
  v: 1,
  q: {},            // soruId → { a, c, w, b, h, l, t, p }  (deneme, doğru, yanlış, boş, geçmiş, son sonuç, son zaman, yanlış önceliği)
  fav: {}, later: {},
  tests: [],
  counters: { tests: 0, exams: 0 },
  daily: { target: 50, days: {} },
  session: null
});
let S = DEFAULT_STATE();

const Store = {
  load() {
    try {
      const raw = JSON.parse(localStorage.getItem(APP_CONFIG.storageKey) || 'null');
      if (raw && raw.v === 1) S = Object.assign(DEFAULT_STATE(), raw);
    } catch (e) { console.error('Kayıt okunamadı', e); }
  },
  save() {
    try { localStorage.setItem(APP_CONFIG.storageKey, JSON.stringify(S)); }
    catch (e) { toast('Kayıt yapılamadı: tarayıcı depolama alanı dolu olabilir.'); console.error(e); }
  }
};

// Bir cevabı istatistiğe işler ve yanlış önceliğini günceller
function record(qid, res) {
  const r = S.q[qid] || (S.q[qid] = { a: 0, c: 0, w: 0, b: 0, h: '', l: '', t: 0, p: 0 });
  r.a++; r[res]++; r.h = (r.h + res).slice(-10); r.t = Date.now();
  if (res !== 'b' || !r.l || r.l === 'b') r.l = res;   // boş bırakmak önceki doğru/yanlış bilgisini silmez
  if (res === 'w') r.p = Math.min((r.p || 0) + 3, 9);        // yanlış → öncelik yükselir
  else if (res === 'c' && r.p > 0) r.p = Math.max(r.p - 2, 0); // doğru → öncelik düşer
}
function bumpDaily(n = 1) {
  const k = dayKey(); S.daily.days[k] = (S.daily.days[k] || 0) + n;
  const keys = Object.keys(S.daily.days).sort(); while (keys.length > 60) delete S.daily.days[keys.shift()];
}
const todayCount = () => S.daily.days[dayKey()] || 0;

// ---------------- istatistik hesapları ----------------
function statsOf(questions) {
  let solved = 0, correct = 0, wrong = 0;
  for (const q of questions) { const r = S.q[q.id]; if (!r) continue; if (r.l === 'c') { solved++; correct++; } else if (r.l === 'w') { solved++; wrong++; } }
  return { total: questions.length, solved, correct, wrong, pct: pct(correct, solved) };
}
const unitStats = uid => statsOf(QDB.unitQs(uid));
const courseStats = cid => statsOf(QDB.courseQs(cid));
function weakUnits() {
  const out = [];
  COURSES.forEach(c => c.units.forEach(u => {
    const s = unitStats(u.id);
    if (s.solved >= APP_CONFIG.weakMinSolved && s.pct < APP_CONFIG.weakThreshold) out.push({ c, u, s });
  }));
  return out.sort((a, b) => a.s.pct - b.s.pct);
}
const wrongList = () => QDB.all.filter(q => S.q[q.id]?.w > 0);

// ---------------- akıllı soru seçimi ----------------
// sel: smart | unsolved | wrong | random ; diff: mixed | easy | medium | hard
function pickQuestions(pool, n, sel = 'smart', diff = 'mixed') {
  if (diff !== 'mixed') pool = pool.filter(q => q.difficulty === diff);
  if (sel === 'unsolved') pool = pool.filter(q => !S.q[q.id] || !S.q[q.id].l || S.q[q.id].l === 'b');
  if (sel === 'wrong') pool = pool.filter(q => S.q[q.id]?.w > 0);
  let ordered;
  if (sel === 'random') ordered = shuffle(pool);
  else if (sel === 'wrong') ordered = [...pool].sort((a, b) => (S.q[b.id].p - S.q[a.id].p) || Math.random() - 0.5);
  else {
    const weak = {};
    const score = q => {
      const r = S.q[q.id];
      if (!(q.unitId in weak)) { const s = unitStats(q.unitId); weak[q.unitId] = s.solved >= 3 ? 100 - s.pct : 30; }
      let v = Math.random() * 40 + weak[q.unitId] * 1.5;
      if (!r || !r.l) v += 1000;                 // 1. hiç çözülmemiş
      else v += (r.p || 0) * 60 + Math.max(0, 6 - r.a) * 10; // 2. yanlış önceliği, 4. az görülen
      return v;
    };
    ordered = pool.map(q => [score(q), q]).sort((a, b) => b[0] - a[0]).map(x => x[1]);
  }
  const chosen = n === 'all' ? ordered : ordered.slice(0, n);
  return shuffle(chosen).map(q => q.id);
}
// Denemede seçilen derslerden dengeli dağılım
function pickBalanced(courseIds, n) {
  const pools = courseIds.map(cid => shuffle(QDB.courseQs(cid))).filter(p => p.length);
  if (!pools.length) return [];
  const out = []; let i = 0, guard = 0;
  while (out.length < n && guard < n * pools.length + 10) {
    const p = pools[i % pools.length]; if (p.length) out.push(p.pop().id);
    i++; guard++; if (pools.every(x => !x.length)) break;
  }
  return shuffle(out);
}

// ---------------- UI temel ----------------
let toastTimer;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600); }

function confirmBox(title, text, okLabel = 'Evet', danger = false) {
  return new Promise(res => {
    const m = $('#modal');
    m.innerHTML = `<div class="modal-card" role="dialog" aria-modal="true"><h3>${esc(title)}</h3><p>${esc(text)}</p>
      <div class="row-btns"><button class="btn ghost" data-m="0">Vazgeç</button><button class="btn ${danger ? 'danger' : 'primary'}" data-m="1">${esc(okLabel)}</button></div></div>`;
    m.hidden = false;
    const close = v => { m.hidden = true; m.innerHTML = ''; m.onclick = null; res(v); };
    m.onclick = e => { const b = e.target.closest('[data-m]'); if (b) close(b.dataset.m === '1'); else if (e.target === m) close(false); };
    m.querySelector('[data-m="1"]').focus();
  });
}

const bar = (p, cls = '') => `<div class="bar ${cls}"><i style="width:${Math.min(100, Math.max(0, p))}%"></i></div>`;
const empty = (icon, text, action = '') => `<div class="empty"><div class="empty-ico">${icon}</div><p>${text}</p>${action}</div>`;
const chips = (name, items, checked, type = 'radio') => `<div class="chips">${items.map(([v, l]) =>
  `<label class="chip"><input type="${type}" name="${name}" value="${v}" ${(Array.isArray(checked) ? checked.map(String).includes(String(v)) : String(checked) === String(v)) ? 'checked' : ''}><span>${l}</span></label>`).join('')}</div>`;
const readForm = sel => { const f = $(sel); const d = new FormData(f); return { get: k => d.get(k), all: k => d.getAll(k) }; };
const noQuestionsNote = () => QDB.all.length ? '' : `<a class="notice" href="#/import">📥 Soru bankası henüz boş. Soru evrakını yüklemek için dokun.</a>`;

// ---------------- yönlendirme ----------------
const ROUTES = {};
let timerHandle = null;
function go(hash) { if (location.hash === hash) render(); else location.hash = hash; }
function render() {
  const parts = (location.hash.replace(/^#\/?/, '') || 'home').split('/');
  const name = parts[0], args = parts.slice(1).map(decodeURIComponent);
  const route = ROUTES[name] || ROUTES.home;
  if (name !== 'test') stopTimer();
  const out = route(...args);
  $('#topTitle').textContent = out.title || 'Misyon Koruma';
  document.body.dataset.view = name;
  $('#btnBack').style.visibility = name === 'home' ? 'hidden' : 'visible';
  $('#view').innerHTML = out.html;
  out.after?.();
  if (name !== 'test') window.scrollTo(0, 0);
}
window.addEventListener('hashchange', render);

// ---------------- ANA SAYFA ----------------
ROUTES.home = () => {
  const today = todayCount(), target = S.daily.target, segs = 10, filled = Math.min(segs, Math.floor((today / target) * segs));
  const sess = S.session, wrongActive = QDB.all.filter(q => S.q[q.id]?.p > 0).length;
  const favCount = Object.keys(S.fav).filter(QDB.has).length;
  const weak = weakUnits().length;
  const tile = (href, ico, label, meta = '', cls = '') => `<a class="tile ${cls}" href="${href}"><span class="tile-ico">${ico}</span><span class="tile-label">${label}</span>${meta ? `<span class="tile-meta">${meta}</span>` : ''}</a>`;
  return {
    title: 'Soru Bankası',
    html: `
    <section class="brand">
      <div class="badge" aria-hidden="true">🛡️</div>
      <div><h2>Misyon Koruma</h2><p>Soru çöz, yanlışlarını tekrar et, ilerle.</p></div>
    </section>
    ${noQuestionsNote()}
    ${sess ? `<a class="resume" href="#/test"><span>▶️</span><div><strong>Kaldığın yerden devam et</strong><small>${esc(sess.title)} · Soru ${sess.cur + 1} / ${sess.qids.length}</small></div></a>` : ''}
    <section class="goal" aria-label="Günlük soru hedefi">
      <div class="goal-head"><span>🎯 Günlük hedef</span><strong>${today} <em>/ ${target}</em></strong></div>
      <div class="segments">${Array.from({ length: segs }, (_, i) => `<i class="${i < filled ? 'on' : ''}"></i>`).join('')}</div>
      <div class="goal-foot">${today >= target ? '✅ Bugünün hedefi tamam.' : `Hedefe ${target - today} soru kaldı.`}
        <div class="goal-set">${[20, 30, 50, 100].map(n => `<button class="mini ${n === target ? 'on' : ''}" data-act="goal" data-n="${n}">${n}</button>`).join('')}</div></div>
    </section>
    <button class="btn primary big" data-act="quick" ${QDB.all.length ? '' : 'disabled'}>⚡ Hemen 20 soru çöz</button>
    <nav class="tiles">
      ${tile('#/courses', '📚', 'Dersler', `${COURSES.length} ders`, 'wide')}
      ${tile('#/bank', '📝', 'Soru Bankası', `${QDB.all.length} soru`)}
      ${tile('#/mixed', '🎲', 'Karma Test')}
      ${tile('#/exam', '📋', 'Deneme')}
      ${tile('#/wrongs', '❌', 'Yanlışlarım', wrongActive ? `${wrongActive} tekrar bekliyor` : '')}
      ${tile('#/favs', '⭐', 'Favoriler', favCount ? `${favCount} soru` : '')}
      ${tile('#/weak', '⚠️', 'Zayıf Üniteler', weak ? `${weak} ünite` : '')}
      ${tile('#/stats', '📊', 'İstatistikler')}
      ${tile('#/history', '📜', 'Çözüm Geçmişi')}
      ${tile('#/import', '📥', 'Soru Yükle', '', 'muted')}
    </nav>`
  };
};

// ---------------- DERSLER ----------------
ROUTES.courses = () => ({
  title: 'Dersler',
  html: noQuestionsNote() + `<div class="list">${COURSES.map(c => {
    const s = courseStats(c.id);
    return `<a class="card course" href="#/course/${c.id}">
      <span class="c-ico">${c.icon}</span>
      <div class="c-body"><strong>${esc(c.name)}</strong>
        <small>${s.total} soru · ${s.solved} çözüldü${s.solved ? ` · <b class="t-${tone(s.pct)}">%${s.pct}</b>` : ''}</small>
        ${bar(pct(s.solved, s.total))}</div></a>`;
  }).join('')}</div>`
});

ROUTES.course = cid => {
  const c = QDB.course(cid); if (!c) return ROUTES.courses();
  const cs = courseStats(cid);
  return {
    title: c.short,
    html: `<div class="page-head"><span class="c-ico lg">${c.icon}</span><div><h2>${esc(c.name)}</h2>
      <p>${cs.total} soru · ${cs.solved} çözüldü · başarı %${cs.pct}</p></div></div>
      <a class="btn secondary block" href="#/setup/course/${cid}">🔀 Tüm ünitelerden karışık test</a>
      <h3 class="sec">Üniteler</h3>
      <div class="list">${c.units.map(u => {
        const s = unitStats(u.id);
        return `<a class="card unit" href="#/unit/${u.id}">
          <span class="u-no">${u.no}</span>
          <div class="c-body"><strong>📘 Ünite ${u.no}</strong><span class="u-title">${esc(u.title)}</span>
          <small>${s.total} soru · ${s.solved} çözüldü${s.solved ? ` · <b class="t-${tone(s.pct)}">%${s.pct}</b>` : ''}</small>
          ${bar(pct(s.solved, s.total))}</div></a>`;
      }).join('')}</div>`
  };
};

// ---------------- ÜNİTE + TEST AYARLARI ----------------
function setupForm(scope, id, poolSize) {
  return `<form id="setupForm" class="panel" onsubmit="return false">
    <h3>Test ayarları</h3>
    <label class="lbl">Soru sayısı</label>
    ${chips('n', [[10, '10'], [20, '20'], [30, '30'], [50, '50'], [100, '100'], ['all', 'Tümü']], '20')}
    <label class="lbl">Zorluk</label>
    ${chips('diff', [['mixed', 'Karışık'], ['easy', '🟢 Kolay'], ['medium', '🟡 Orta'], ['hard', '🔴 Zor']], 'mixed')}
    <label class="lbl">Soru seçimi</label>
    ${chips('sel', [['smart', 'Akıllı'], ['unsolved', 'Çözülmemiş'], ['wrong', 'Yanlışlarım'], ['random', 'Tamamen rastgele']], 'smart')}
    <p class="hint">Akıllı seçim sırası: çözülmemiş → yanlış yapılan → zayıf ünite → az görülen.</p>
    <button class="btn primary big" data-act="startSetup" data-scope="${scope}" data-id="${id}" ${poolSize ? '' : 'disabled'}>TESTİ BAŞLAT</button>
  </form>`;
}
ROUTES.unit = uid => {
  const u = QDB.unit(uid); if (!u) return ROUTES.courses();
  const c = QDB.course(u.courseId), s = unitStats(uid), qs = QDB.unitQs(uid);
  const unsolved = qs.filter(q => !S.q[q.id]?.l || S.q[q.id].l === 'b').length;
  const wrongs = qs.filter(q => S.q[q.id]?.w > 0).length;
  return {
    title: `${c.short} · Ünite ${u.no}`,
    html: `<div class="page-head"><span class="u-no lg">${u.no}</span><div><h2>Ünite ${u.no}</h2><p>${esc(u.title)}</p></div></div>
      <div class="statgrid">
        <div><b>${s.total}</b><span>Toplam soru</span></div><div><b>${s.solved}</b><span>Çözülen</span></div>
        <div class="ok"><b>${s.correct}</b><span>Doğru</span></div><div class="bad"><b>${s.wrong}</b><span>Yanlış</span></div>
        <div class="wide t-${tone(s.pct)}"><b>%${s.pct}</b><span>Başarı</span>${bar(s.pct, tone(s.pct))}</div>
      </div>
      <div class="row-btns">
        <button class="btn secondary" data-act="quickUnit" data-id="${uid}" data-sel="unsolved" ${unsolved ? '' : 'disabled'}>Çözülmemiş (${unsolved})</button>
        <button class="btn secondary" data-act="quickUnit" data-id="${uid}" data-sel="wrong" ${wrongs ? '' : 'disabled'}>Yanlışlar (${wrongs})</button>
      </div>
      ${qs.length ? '' : `<p class="hint center">Bu ünitede henüz soru yok.</p>`}
      ${setupForm('unit', uid, qs.length)}`
  };
};
ROUTES.setup = (scope, id) => {
  const c = QDB.course(id); if (!c) return ROUTES.courses();
  const qs = QDB.courseQs(id);
  return { title: `${c.short} · Tüm üniteler`, html: `<div class="page-head"><span class="c-ico lg">${c.icon}</span><div><h2>${esc(c.name)}</h2><p>Tüm ünitelerden karışık · ${qs.length} soru</p></div></div>${setupForm('course', id, qs.length)}` };
};

// ---------------- KARMA TEST & DENEME ----------------
const courseChecks = () => `<div class="checks">${COURSES.map(c => `<label class="check"><input type="checkbox" name="c" value="${c.id}" checked><span>${c.icon} ${esc(c.short)}</span><em>${QDB.courseQs(c.id).length}</em></label>`).join('')}</div>
  <div class="row-btns small"><button type="button" class="mini" data-act="checkAll" data-v="1">Tümünü seç</button><button type="button" class="mini" data-act="checkAll" data-v="0">Temizle</button></div>`;
ROUTES.mixed = () => ({
  title: 'Karma Test',
  html: noQuestionsNote() + `<form id="mixForm" class="panel" onsubmit="return false"><h3>🎲 Ders seçimi</h3>${courseChecks()}
    <label class="lbl">Soru sayısı</label>${chips('n', [[10, '10'], [20, '20'], [30, '30'], [50, '50'], [100, '100']], '20')}
    <label class="lbl">Zorluk</label>${chips('diff', [['mixed', 'Karışık'], ['easy', '🟢 Kolay'], ['medium', '🟡 Orta'], ['hard', '🔴 Zor']], 'mixed')}
    <label class="lbl">Soru seçimi</label>${chips('sel', [['smart', 'Akıllı'], ['unsolved', 'Çözülmemiş'], ['random', 'Tamamen rastgele']], 'smart')}
    <button class="btn primary big" data-act="startMixed">KARMA TESTİ BAŞLAT</button></form>`
});
ROUTES.exam = () => {
  const exams = S.tests.filter(t => t.type === 'exam').slice(0, 5);
  return {
    title: 'Deneme Sınavı',
    html: noQuestionsNote() + `<form id="examForm" class="panel" onsubmit="return false"><h3>📋 Deneme ayarları</h3>
    <p class="hint">Sorular seçilen derslerden dengeli dağıtılır. Cevaplar sınav bitince gösterilir.</p>
    ${courseChecks()}
    <label class="lbl">Soru sayısı</label>${chips('n', [[10, '10'], [20, '20'], [30, '30'], [50, '50'], [100, '100']], '50')}
    <label class="lbl">Süre</label>${chips('timed', [['1', `⏱️ Süreli (soru başı ${APP_CONFIG.examSecondsPerQuestion} sn)`], ['0', 'Süresiz']], '1')}
    <button class="btn primary big" data-act="startExam">DENEMEYİ BAŞLAT</button></form>
    ${exams.length ? `<h3 class="sec">Son denemeler</h3><div class="list">${exams.map(testRow).join('')}</div>` : ''}`
  };
};
const testRow = t => `<a class="card row" href="#/result/${t.id}"><div class="c-body"><strong>${esc(t.title)}</strong><small>${fmtDate(t.date)} · ${t.total} soru · D ${t.c} · Y ${t.w} · B ${t.b} · Net ${t.net}</small></div><b class="score t-${tone(t.pct)}">%${t.pct}</b></a>`;

// ---------------- TEST OTURUMU ----------------
async function startTest({ type, title, qids, mode = 'practice', timed = false }) {
  if (!qids.length) { toast('Bu seçimlerle uygun soru bulunamadı.'); return; }
  if (S.session && !(await confirmBox('Devam eden test var', `"${S.session.title}" testi silinip yeni test başlatılsın mı?`, 'Yeni testi başlat'))) return;
  S.session = { id: Date.now(), type, title, qids, mode, ans: Array(qids.length).fill(null), cur: 0, elapsed: 0,
    limit: timed ? qids.length * APP_CONFIG.examSecondsPerQuestion : 0, started: Date.now() };
  Store.save();
  go('#/test');
}

function stopTimer() { if (timerHandle) { clearInterval(timerHandle); timerHandle = null; Store.save(); } }
function startTimer() {
  if (timerHandle) return;
  let tick = 0;
  timerHandle = setInterval(() => {
    const T = S.session; if (!T) return stopTimer();
    T.elapsed++; tick++;
    const el = $('#timer');
    if (el) {
      const rem = T.limit ? T.limit - T.elapsed : null;
      el.textContent = rem !== null ? '⏱️ ' + fmtTime(rem) : '⏱️ ' + fmtTime(T.elapsed);
      el.classList.toggle('warn', rem !== null && rem <= 60);
    }
    if (T.limit && T.elapsed >= T.limit) { toast('Süre doldu, sınav tamamlandı.'); finishTest(true); return; }
    if (tick % 5 === 0) Store.save();
  }, 1000);
}

let lastCur = '';
ROUTES.test = () => {
  const T = S.session;
  if (!T) { setTimeout(() => go('#/home'), 0); return { html: '' }; }
  const qid = T.qids[T.cur], q = QDB.get(qid), a = T.ans[T.cur], practice = T.mode === 'practice';
  const answered = a !== null && a !== -1, reveal = practice && answered;
  const n = T.qids.length, c = q && QDB.course(q.courseId), u = q && QDB.unit(q.unitId);
  const gridCls = i => {
    const x = T.ans[i], gq = QDB.get(T.qids[i]);
    let k = x === null ? '' : x === -1 ? 'blank' : !practice ? 'done' : (gq && x === gq.answer ? 'ok' : 'bad');
    return k + (i === T.cur ? ' cur' : '');
  };
  const optsHtml = q ? q.options.map((o, i) => {
    let cls = '';
    if (reveal) cls = i === q.answer ? 'correct' : i === a ? 'wrong' : 'dim';
    else if (!practice && a === i) cls = 'picked';
    return `<button class="opt ${cls}" data-act="answer" data-i="${i}" ${reveal ? 'disabled' : ''}><span class="opt-l">${L[i]}</span><span class="opt-t">${esc(o)}</span></button>`;
  }).join('') : '';
  const fb = reveal ? (a === q.answer
    ? `<div class="fb ok">✅ DOĞRU${q.explanation ? `<p>${esc(q.explanation)}</p>` : ''}</div>`
    : `<div class="fb bad">❌ YANLIŞ<div class="fb-ans">Doğru cevap: <b>${L[q.answer]}</b></div>${q.explanation ? `<p>${esc(q.explanation)}</p>` : ''}${q.reference ? `<small>Kaynak: ${esc(q.reference)}</small>` : ''}</div>`)
    : (a === -1 ? `<div class="fb blank">⚪ Boş bırakıldı. İstersen şimdi cevaplayabilirsin.</div>` : '');
  const isLast = T.cur === n - 1;
  return {
    title: T.mode === 'exam' ? 'Deneme' : 'Test',
    html: `<div class="qhead">
        <div class="qmeta"><strong>${c ? esc(c.name) : 'Soru bulunamadı'}</strong><span>${u ? `Ünite ${u.no}` : ''}${q ? ` · ${DIFF[q.difficulty][0]} ${DIFF[q.difficulty][1]}` : ''}</span></div>
        <div class="qcount"><b>Soru ${T.cur + 1}</b> / ${n}<span id="timer" class="timer">⏱️ ${fmtTime(T.limit ? T.limit - T.elapsed : T.elapsed)}</span></div>
      </div>
      <div class="qtools">
        <button class="tool ${S.fav[qid] ? 'on' : ''}" data-act="fav" data-id="${qid}">⭐ Favori</button>
        <button class="tool ${S.later[qid] ? 'on' : ''}" data-act="later" data-id="${qid}">🔖 Daha sonra çöz</button>
        <button class="tool end" data-act="finish">Bitir</button>
      </div>
      ${q ? `<article class="qtext">${esc(q.question)}</article><div class="opts">${optsHtml}</div>${fb}`
          : `<p class="hint">Bu soru veri dosyasından kaldırılmış. Sonraki soruya geçebilirsin.</p>`}
      <div class="qnav">
        <button class="btn ghost" data-act="prev" ${T.cur === 0 ? 'disabled' : ''}>← Önceki</button>
        <button class="btn ghost" data-act="blank" ${answered ? 'disabled' : ''}>Boş bırak</button>
        ${isLast ? `<button class="btn primary" data-act="finish">Testi bitir</button>` : `<button class="btn primary" data-act="next">Sonraki →</button>`}
      </div>
      <details class="qgrid-wrap" ${n <= 30 ? 'open' : ''}><summary>Soru haritası</summary>
        <div class="qgrid">${T.qids.map((_, i) => `<button class="${gridCls(i)}" data-act="goto" data-i="${i}">${i + 1}</button>`).join('')}</div>
        <p class="legend"><i class="ok"></i>Doğru <i class="bad"></i>Yanlış <i class="done"></i>İşaretli <i class="blank"></i>Boş <i></i>Cevapsız</p>
      </details>`,
    after: () => { startTimer(); if (lastCur !== T.id + ':' + T.cur) { lastCur = T.id + ':' + T.cur; window.scrollTo(0, 0); } }
  };
};

function answer(i) {
  const T = S.session; if (!T) return;
  const q = QDB.get(T.qids[T.cur]); if (!q) return;
  const prev = T.ans[T.cur];
  if (T.mode === 'practice') {
    if (prev !== null && prev !== -1) return;          // cevap kilitli
    T.ans[T.cur] = i;
    record(q.id, i === q.answer ? 'c' : 'w'); bumpDaily();
    if (navigator.vibrate) navigator.vibrate(i === q.answer ? 15 : [30, 40, 30]);
  } else {
    T.ans[T.cur] = prev === i ? null : i;              // denemede değiştirilebilir
    if (T.ans[T.cur] !== null && T.cur < T.qids.length - 1) { Store.save(); T.cur++; }
  }
  Store.save(); render();
}
function move(d) { const T = S.session; if (!T) return; T.cur = Math.min(T.qids.length - 1, Math.max(0, T.cur + d)); Store.save(); render(); }

async function finishTest(auto = false) {
  const T = S.session; if (!T) return;
  const unanswered = T.ans.filter(x => x === null || x === -1).length;
  if (!auto && !(await confirmBox('Testi bitir', unanswered ? `${unanswered} soru boş. Bitirilsin mi?` : 'Test bitirilsin mi?', 'Bitir'))) return;
  stopTimer();
  const res = { id: T.id, type: T.type, title: T.title, mode: T.mode, date: Date.now(), dur: T.elapsed, total: T.qids.length, c: 0, w: 0, b: 0, by: {}, qids: T.qids, ans: T.ans.map(x => (x === null ? -1 : x)) };
  let counted = 0;
  T.qids.forEach((qid, i) => {
    const q = QDB.get(qid); const x = T.ans[i];
    const k = !q || x === null || x === -1 ? 'b' : x === q.answer ? 'c' : 'w';
    res[k]++;
    if (q) {
      const bc = res.by[q.courseId] || (res.by[q.courseId] = { t: 0, c: 0, w: 0, b: 0 });
      bc.t++; bc[k]++;
      if (k === 'b') record(qid, 'b');
      else if (T.mode === 'exam') { record(qid, k); counted++; }
    }
  });
  if (counted) bumpDaily(counted);
  res.net = +(res.c - res.w / 4).toFixed(2);
  res.pct = pct(res.c, res.total);
  S.tests.unshift(res);
  S.tests = S.tests.slice(0, APP_CONFIG.testHistoryLimit);
  S.tests.forEach((t, i) => { if (i >= APP_CONFIG.testDetailLimit) { delete t.qids; delete t.ans; } });
  S.counters[T.type === 'exam' ? 'exams' : 'tests']++;
  S.session = null; Store.save();
  go('#/result/' + res.id);
}

// ---------------- SONUÇ ----------------
ROUTES.result = (id, filter = 'wrong') => {
  const t = S.tests.find(x => String(x.id) === String(id));
  if (!t) return { title: 'Sonuç', html: empty('📄', 'Sonuç bulunamadı.', `<a class="btn primary" href="#/home">Ana sayfa</a>`) };
  const by = Object.entries(t.by || {});
  const review = t.qids ? t.qids.map((qid, i) => ({ q: QDB.get(qid), a: t.ans[i] })).filter(x => x.q) : [];
  const kind = x => (x.a === -1 ? 'blank' : x.a === x.q.answer ? 'ok' : 'wrong');
  const shown = review.filter(x => filter === 'all' || kind(x) === filter);
  const retry = review.filter(x => kind(x) !== 'ok').length;
  return {
    title: 'Sonuç',
    html: `<section class="result-hero t-${tone(t.pct)}"><div class="ring" style="--p:${t.pct}"><b>%${t.pct}</b><span>başarı</span></div>
        <div><h2>${esc(t.title)}</h2><p>${fmtDate(t.date)} · ${fmtTime(t.dur)}</p></div></section>
      <div class="statgrid">
        <div><b>${t.total}</b><span>Toplam soru</span></div><div class="ok"><b>${t.c}</b><span>Doğru</span></div>
        <div class="bad"><b>${t.w}</b><span>Yanlış</span></div><div class="mut"><b>${t.b}</b><span>Boş</span></div>
        <div class="wide"><b>${t.net}</b><span>Net (4 yanlış 1 doğruyu götürür)</span></div>
      </div>
      ${by.length > 1 ? `<h3 class="sec">Ders bazlı sonuç</h3><div class="panel">${by.map(([cid, v]) => { const p = pct(v.c, v.t); return `<div class="brow"><span>${esc(QDB.course(cid)?.short || cid)}</span><small>${v.c}/${v.t}</small><b class="t-${tone(p)}">%${p}</b>${bar(p, tone(p))}</div>`; }).join('')}</div>` : ''}
      <div class="row-btns">
        ${retry ? `<button class="btn primary" data-act="retryResult" data-id="${t.id}">🔁 Yanlış ve boşları tekrar çöz (${retry})</button>` : ''}
        <a class="btn ghost" href="#/home">Ana sayfa</a>
      </div>
      ${review.length ? `<h3 class="sec">Soruları incele</h3>
      <div class="tabs">${[['wrong', `❌ Yanlış (${t.w})`], ['blank', `⚪ Boş (${t.b})`], ['ok', `✅ Doğru (${t.c})`], ['all', 'Tümü']].map(([k, l]) => `<a class="tab ${filter === k ? 'on' : ''}" href="#/result/${t.id}/${k}">${l}</a>`).join('')}</div>
      <div class="list">${shown.length ? shown.map(x => reviewCard(x.q, x.a)).join('') : empty('✔️', 'Bu filtrede soru yok.')}</div>` : `<p class="hint">Bu eski testin soru detayı saklanmıyor.</p>`}`
  };
};
function reviewCard(q, a) {
  const c = QDB.course(q.courseId), u = QDB.unit(q.unitId);
  return `<details class="card review"><summary><small>${esc(c.short)} · Ünite ${u.no}${a === undefined ? '' : a === -1 ? ' · ⚪ Boş' : a === q.answer ? ' · ✅' : ` · ❌ Cevabın: ${L[a]}`}</small><span class="clamp">${esc(q.question)}</span></summary>
    <ol class="ropts">${q.options.map((o, i) => `<li class="${i === q.answer ? 'correct' : i === a ? 'wrong' : ''}"><b>${L[i]})</b> ${esc(o)}</li>`).join('')}</ol>
    ${q.explanation ? `<p class="rexp">${esc(q.explanation)}</p>` : ''}${q.reference ? `<small class="rref">Kaynak: ${esc(q.reference)}</small>` : ''}
    <div class="row-btns small"><button class="mini ${S.fav[q.id] ? 'on' : ''}" data-act="favList" data-id="${q.id}">⭐ Favori</button></div></details>`;
}

// ---------------- YANLIŞLARIM ----------------
ROUTES.wrongs = (cid = 'all') => {
  let list = wrongList();
  if (cid !== 'all') list = list.filter(q => q.courseId === cid);
  list.sort((a, b) => (S.q[b.id].p - S.q[a.id].p) || (S.q[b.id].t - S.q[a.id].t));
  const active = list.filter(q => S.q[q.id].p > 0).length;
  const prio = p => (p >= 6 ? ['high', 'Yüksek öncelik'] : p >= 3 ? ['mid', 'Orta öncelik'] : p > 0 ? ['low', 'Düşük öncelik'] : ['done', 'Öğrenildi']);
  return {
    title: 'Yanlışlarım',
    html: `<div class="panel"><div class="split"><div><b class="big-n">${active}</b><span>tekrar bekleyen</span></div><div><b class="big-n mut">${list.length - active}</b><span>öğrenildi</span></div></div>
      <select class="select" data-act="nav" data-prefix="#/wrongs/"><option value="all">Tüm dersler</option>${COURSES.map(c => `<option value="${c.id}" ${c.id === cid ? 'selected' : ''}>${esc(c.short)}</option>`).join('')}</select>
      <div class="row-btns">
        <button class="btn primary" data-act="retryWrongs" data-c="${cid}" data-n="20" ${active ? '' : 'disabled'}>🔁 Yanlışları tekrar çöz (20)</button>
        <button class="btn secondary" data-act="retryWrongs" data-c="${cid}" data-n="all" ${list.length ? '' : 'disabled'}>Tümü (${list.length})</button>
      </div><p class="hint">Yanlış yaptıkça öncelik yükselir, doğru çözdükçe düşer.</p></div>
      <div class="list">${list.length ? list.slice(0, 200).map(q => {
        const r = S.q[q.id], [pc, pl] = prio(r.p);
        return `<div class="wrong-item"><div class="wi-head"><span class="prio ${pc}">${pl}</span><span class="hist">${[...r.h].map(x => `<i class="${x}"></i>`).join('')}</span></div>
          ${reviewCard(q)}<small class="wi-meta">✖ ${r.w} kez yanlış · son çözüm ${fmtDate(r.t)}</small></div>`;
      }).join('') : empty('🎉', 'Yanlış yaptığın soru yok.', `<a class="btn primary" href="#/courses">Soru çöz</a>`)}</div>`
  };
};

// ---------------- FAVORİLER ----------------
ROUTES.favs = (tab = 'fav') => {
  const src = tab === 'later' ? S.later : S.fav;
  const list = Object.keys(src).map(QDB.get).filter(Boolean).sort((a, b) => src[b.id] - src[a.id]);
  return {
    title: 'Favoriler',
    html: `<div class="tabs"><a class="tab ${tab === 'fav' ? 'on' : ''}" href="#/favs/fav">⭐ Favoriler (${Object.keys(S.fav).filter(QDB.has).length})</a><a class="tab ${tab === 'later' ? 'on' : ''}" href="#/favs/later">🔖 Daha sonra (${Object.keys(S.later).filter(QDB.has).length})</a></div>
      <div class="row-btns">
        <button class="btn primary" data-act="favStart" data-tab="${tab}" data-mode="all" ${list.length ? '' : 'disabled'}>Tümünü çöz</button>
        <button class="btn secondary" data-act="favStart" data-tab="${tab}" data-mode="rand" ${list.length ? '' : 'disabled'}>Rastgele 20</button>
        <button class="btn ghost" data-act="favClear" data-tab="${tab}" ${list.length ? '' : 'disabled'}>Temizle</button>
      </div>
      <div class="list">${list.length ? list.map(q => reviewCard(q)).join('') : empty(tab === 'later' ? '🔖' : '⭐', 'Test sırasında soruları işaretleyerek buraya ekleyebilirsin.')}</div>`
  };
};

// ---------------- ÇÖZÜM GEÇMİŞİ ----------------
let histLimit = 100;
ROUTES.history = (res = 'all', cid = 'all', uid = 'all') => {
  const lastOf = q => S.q[q.id].h.slice(-1);
  let list = QDB.all.filter(q => S.q[q.id]?.h);
  if (res !== 'all') list = list.filter(q => lastOf(q) === res);
  if (cid !== 'all') list = list.filter(q => q.courseId === cid);
  if (uid !== 'all') list = list.filter(q => q.unitId === uid);
  list.sort((a, b) => S.q[b.id].t - S.q[a.id].t);
  const c = QDB.course(cid), label = { c: '✅ Doğru', w: '❌ Yanlış', b: '⚪ Boş' };
  const h = (r, cc, uu) => `#/history/${r}/${cc}/${uu}`;
  return {
    title: 'Çözüm Geçmişi',
    html: `<div class="panel filters">
      <div class="tabs">${[['all', 'Tümü'], ['c', 'Doğru'], ['w', 'Yanlış'], ['b', 'Boş']].map(([k, l]) => `<a class="tab ${res === k ? 'on' : ''}" href="${h(k, cid, uid)}">${l}</a>`).join('')}</div>
      <select class="select" data-act="nav" data-prefix="#/history/${res}/" data-suffix="/all"><option value="all">Tüm dersler</option>${COURSES.map(x => `<option value="${x.id}" ${x.id === cid ? 'selected' : ''}>${esc(x.short)}</option>`).join('')}</select>
      ${c ? `<select class="select" data-act="nav" data-prefix="#/history/${res}/${cid}/"><option value="all">Tüm üniteler</option>${c.units.map(u => `<option value="${u.id}" ${u.id === uid ? 'selected' : ''}>Ünite ${u.no} – ${esc(u.title)}</option>`).join('')}</select>` : ''}
      <p class="hint">${list.length} soru</p></div>
      <div class="list">${list.length ? list.slice(0, histLimit).map(q => {
        const r = S.q[q.id];
        return `<div class="hist-item"><small>${label[lastOf(q)]} · ${fmtDate(r.t)} · ${r.a} kez çözüldü</small>${reviewCard(q)}</div>`;
      }).join('') + (list.length > histLimit ? `<button class="btn ghost block" data-act="more">Daha fazla göster</button>` : '') : empty('📜', 'Bu filtrede çözülmüş soru yok.')}</div>`
  };
};

// ---------------- İSTATİSTİK ----------------
ROUTES.stats = () => {
  let a = 0, c = 0, w = 0, b = 0, uniq = 0;
  const perC = {};
  QDB.all.forEach(q => {
    const r = S.q[q.id]; if (!r) return;
    a += r.a; c += r.c; w += r.w; b += r.b; if (r.l && r.l !== 'b') uniq++;
    const x = perC[q.courseId] || (perC[q.courseId] = { a: 0, w: 0 }); x.a += r.c + r.w; x.w += r.w;
  });
  const most = Object.entries(perC).sort((x, y) => y[1].a - x[1].a)[0];
  const mostW = Object.entries(perC).filter(x => x[1].w).sort((x, y) => y[1].w - x[1].w)[0];
  return {
    title: 'İstatistikler',
    html: `<div class="statgrid">
        <div><b>${c + w}</b><span>Toplam cevap</span></div><div><b>${uniq}</b><span>Farklı soru</span></div>
        <div class="ok"><b>${c}</b><span>Doğru</span></div><div class="bad"><b>${w}</b><span>Yanlış</span></div>
        <div class="mut"><b>${b}</b><span>Boş</span></div><div class="t-${tone(pct(c, c + w))}"><b>%${pct(c, c + w)}</b><span>Genel başarı</span></div>
        <div><b>${S.counters.tests}</b><span>Toplam test</span></div><div><b>${S.counters.exams}</b><span>Toplam deneme</span></div>
        <div class="wide"><b class="sm">${most ? esc(QDB.course(most[0]).short) : '—'}</b><span>En çok çözülen ders</span></div>
        <div class="wide"><b class="sm">${mostW ? esc(QDB.course(mostW[0]).short) : '—'}</b><span>En çok yanlış yapılan ders</span></div>
      </div>
      <h3 class="sec">Ders ve ünite bazında başarı</h3>
      <div class="list">${COURSES.map(co => {
        const s = courseStats(co.id);
        return `<details class="card stat-course"><summary><span>${co.icon} ${esc(co.short)}</span><small>${s.solved}/${s.total}</small><b class="t-${tone(s.pct)}">${s.solved ? '%' + s.pct : '—'}</b>${bar(s.pct, tone(s.pct))}</summary>
          ${co.units.map(u => { const us = unitStats(u.id); return `<a class="brow" href="#/unit/${u.id}"><span>Ünite ${u.no}</span><small>${us.solved}/${us.total}</small><b class="t-${tone(us.pct)}">${us.solved ? '%' + us.pct : '—'}</b>${bar(us.pct, tone(us.pct))}</a>`; }).join('')}</details>`;
      }).join('')}</div>
      ${S.tests.length ? `<h3 class="sec">Son testler</h3><div class="list">${S.tests.slice(0, 10).map(testRow).join('')}</div>` : ''}
      <h3 class="sec">Veri</h3>
      <div class="panel"><div class="row-btns">
        <button class="btn secondary" data-act="backup">💾 Yedek indir</button>
        <label class="btn secondary">📂 Yedek yükle<input type="file" accept=".json" data-act="restore" hidden></label>
        <button class="btn danger" data-act="reset">İlerlemeyi sıfırla</button></div>
        <p class="hint">İlerlemen bu tarayıcıda saklanır. Cihaz değiştirirken yedeği kullan.</p></div>`
  };
};

// ---------------- ZAYIF ÜNİTELER ----------------
ROUTES.weak = () => {
  const list = weakUnits();
  return {
    title: 'Zayıf Üniteler',
    html: `<p class="hint">En az ${APP_CONFIG.weakMinSolved} soru çözülmüş ve başarısı %${APP_CONFIG.weakThreshold} altında kalan üniteler.</p>
      <div class="list">${list.length ? list.map(({ c, u, s }) => `<div class="card weak"><div class="c-body"><strong>${esc(c.name)}</strong><span class="u-title">Ünite ${u.no} – ${esc(u.title)}</span>
        <small>${s.correct}/${s.solved} doğru</small>${bar(s.pct, 'bad')}</div><b class="score t-bad">%${s.pct}</b>
        <button class="btn primary block" data-act="quickUnit" data-id="${u.id}" data-sel="smart">BU ÜNİTEDEN TEST ÇÖZ</button></div>`).join('')
        : empty('💪', 'Şu an zayıf ünite yok. Daha çok soru çözdükçe burası güncellenir.', `<a class="btn primary" href="#/courses">Soru çöz</a>`)}</div>`
  };
};

// ---------------- TÜM SORU BANKASI ----------------
ROUTES.bank = () => ({
  title: 'Soru Bankası',
  html: noQuestionsNote() + `<form id="bankForm" class="panel" onsubmit="return false">
    <label class="lbl">Ders</label><select class="select" name="c" data-act="bankCourse"><option value="all">Tüm dersler</option>${COURSES.map(c => `<option value="${c.id}">${esc(c.short)}</option>`).join('')}</select>
    <label class="lbl">Ünite</label><select class="select" name="u" id="bankUnit" data-act="bankCount"><option value="all">Tüm üniteler</option></select>
    <label class="lbl">Zorluk</label>${chips('diff', [['mixed', 'Tümü'], ['easy', '🟢 Kolay'], ['medium', '🟡 Orta'], ['hard', '🔴 Zor']], 'mixed')}
    <label class="lbl">Durum</label>${chips('st', [['all', 'Tümü'], ['solved', 'Çözülmüş'], ['unsolved', 'Çözülmemiş'], ['wrong', 'Yanlış'], ['fav', 'Favori'], ['later', 'Daha sonra']], 'all')}
    <label class="lbl">Soru sayısı</label>${chips('n', [[10, '10'], [20, '20'], [50, '50'], [100, '100'], ['all', 'Tümü']], '20')}
    <p class="bank-count">Eşleşen soru: <b id="bankN">0</b></p>
    <button class="btn primary big" data-act="startBank">TESTİ BAŞLAT</button></form>`,
  after: bankCount
});
function bankFilter() {
  const f = readForm('#bankForm');
  const c = f.get('c'), u = f.get('u'), d = f.get('diff'), st = f.get('st');
  let list = c === 'all' ? QDB.all : QDB.courseQs(c);
  if (u && u !== 'all') list = list.filter(q => q.unitId === u);
  if (d !== 'mixed') list = list.filter(q => q.difficulty === d);
  const r = q => S.q[q.id];
  const fx = { solved: q => r(q)?.l === 'c' || r(q)?.l === 'w', unsolved: q => !r(q)?.l || r(q).l === 'b', wrong: q => r(q)?.w > 0, fav: q => S.fav[q.id], later: q => S.later[q.id] }[st];
  return fx ? list.filter(fx) : list;
}
function bankCount() { const el = $('#bankN'); if (el) el.textContent = bankFilter().length; }

// ---------------- SORU YÜKLEME ----------------
let pendingImport = null;
ROUTES.import = () => {
  const imported = QDB.loadImported().length, stat = QDB.all.filter(q => q.src === 'static').length;
  const p = pendingImport;
  return {
    title: 'Soru Yükle',
    html: `<div class="panel">
      <h3>📥 Soru evrakı yükle</h3>
      <p class="hint">Excel'den <b>CSV</b> olarak kaydettiğin dosyayı veya <b>JSON</b> dosyasını seç. Sütunlar: <code>id, ders, unite, zorluk, soru, A, B, C, D, E, cevap, aciklama, kaynak</code></p>
      <div class="row-btns small"><button class="mini" data-act="tpl" data-f="csv">CSV şablonu indir</button><button class="mini" data-act="tpl" data-f="json">JSON şablonu indir</button><button class="mini" data-act="tpl" data-f="units">Ders/ünite listesi</button></div>
      <label class="lbl">Yükleme şekli</label>
      ${chips('mode', [['merge', 'Ekle / güncelle'], ['replace', 'Yüklenenlerin yerine koy']], 'merge')}
      <label class="btn primary big file-btn">Dosya seç<input type="file" accept=".csv,.json,.txt,.js" data-act="importFile" hidden></label>
    </div>
    ${p ? `<div class="panel ${p.errors.length ? 'warnbox' : ''}"><h3>Kontrol sonucu: ${esc(p.name)}</h3>
      <p><b class="t-ok">${p.ok.length}</b> geçerli soru · <b class="t-bad">${p.errors.length}</b> hatalı satır</p>
      ${p.errors.length ? `<ul class="errs">${p.errors.slice(0, 30).map(e => `<li>Satır ${e.line}: ${esc(e.msg)}</li>`).join('')}${p.errors.length > 30 ? `<li>… ve ${p.errors.length - 30} hata daha</li>` : ''}</ul>` : ''}
      <div class="row-btns"><button class="btn primary" data-act="importSave" ${p.ok.length ? '' : 'disabled'}>${p.ok.length} soruyu kaydet</button><button class="btn ghost" data-act="importCancel">Vazgeç</button></div></div>` : ''}
    <div class="panel"><h3>Bankadaki sorular</h3>
      <p>Veri dosyalarından: <b>${stat}</b> · Uygulamadan yüklenen: <b>${imported}</b> · Toplam: <b>${QDB.all.length}</b></p>
      ${QDB.warnings.length ? `<details><summary class="t-bad">${QDB.warnings.length} veri uyarısı</summary><ul class="errs">${QDB.warnings.slice(0, 50).map(w => `<li>${esc(w)}</li>`).join('')}</ul></details>` : ''}
      <label class="lbl">GitHub için veri dosyası indir (data/&lt;ders&gt;.js)</label>
      <div class="dl-list">${COURSES.map(c => `<button class="mini" data-act="exportCourse" data-id="${c.id}" ${QDB.courseQs(c.id).length ? '' : 'disabled'}>${c.icon} ${esc(c.short)} (${QDB.courseQs(c.id).length})</button>`).join('')}</div>
      <p class="hint">İndirdiğin dosyayı depodaki <code>data/</code> klasörüne aynı adla koyduğunda sorular herkeste görünür. Sonra buradan “yüklenenleri sil” diyebilirsin.</p>
      ${imported ? `<button class="btn danger block" data-act="importClear">Uygulamadan yüklenen ${imported} soruyu sil</button>` : ''}
    </div>`
  };
};
function readFileText(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => {
      const t = r.result;
      if (t.includes('\uFFFD')) { const r2 = new FileReader(); r2.onload = () => res(r2.result); r2.onerror = rej; r2.readAsText(file, 'windows-1254'); }
      else res(t);
    };
    r.onerror = rej; r.readAsText(file, 'utf-8');
  });
}
function download(name, text, type = 'text/plain') {
  const blob = new Blob([text], { type: type + ';charset=utf-8' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
const TEMPLATES = {
  csv: () => '\uFEFF' + ['id;ders;unite;zorluk;soru;A;B;C;D;E;cevap;aciklama;kaynak',
    ';anayasa;1;orta;Soru metni buraya;A şıkkı;B şıkkı;C şıkkı;D şıkkı;E şıkkı;B;Kısa açıklama;Kaynak (madde vb.)',
    'CMK_U02_0001;Ceza Muhakemesi Hukuku;Ünite 2;zor;"Noktalı virgül veya satır sonu içeren metinleri tırnak içine al; böylece bozulmaz.";A;B;C;D;E;A;;'].join('\r\n'),
  json: () => JSON.stringify([{ id: 'ANAYASA_U01_0001', courseId: 'anayasa', unitId: 'anayasa_u1', difficulty: 'medium', question: 'Soru metni', options: ['A şıkkı', 'B şıkkı', 'C şıkkı', 'D şıkkı', 'E şıkkı'], answer: 1, explanation: 'Kısa açıklama', reference: 'Kaynak' }], null, 2),
  units: () => '\uFEFFders_id;ders;unite_no;unite_id;unite_basligi\r\n' + COURSES.flatMap(c => c.units.map(u => [c.id, c.name, u.no, u.id, u.title].join(';'))).join('\r\n')
};

// ---------------- EYLEMLER ----------------
const ACT = {
  back: () => (history.length > 1 ? history.back() : go('#/home')),
  home: () => go('#/home'),
  goal: d => { S.daily.target = +d.n; Store.save(); render(); },
  quick: () => startTest({ type: 'mixed', title: 'Hızlı test · 20 soru', qids: pickQuestions(QDB.all, 20, 'smart') }),
  quickUnit: d => { const u = QDB.unit(d.id); startTest({ type: 'unit', title: `${QDB.course(u.courseId).short} · Ünite ${u.no}`, qids: pickQuestions(QDB.unitQs(d.id), 20, d.sel) }); },
  startSetup: d => {
    const f = readForm('#setupForm'); const n = f.get('n') === 'all' ? 'all' : +f.get('n');
    const pool = d.scope === 'unit' ? QDB.unitQs(d.id) : QDB.courseQs(d.id);
    const u = d.scope === 'unit' ? QDB.unit(d.id) : null, c = QDB.course(u ? u.courseId : d.id);
    startTest({ type: d.scope, title: u ? `${c.short} · Ünite ${u.no}` : `${c.short} · Tüm üniteler`, qids: pickQuestions(pool, n, f.get('sel'), f.get('diff')) });
  },
  checkAll: (d, el) => el.closest('form').querySelectorAll('input[name=c]').forEach(i => { i.checked = d.v === '1'; }),
  startMixed: () => {
    const f = readForm('#mixForm'), cs = f.all('c');
    if (!cs.length) return toast('En az bir ders seç.');
    startTest({ type: 'mixed', title: `Karma test · ${cs.length} ders`, qids: pickQuestions(cs.flatMap(QDB.courseQs), +f.get('n'), f.get('sel'), f.get('diff')) });
  },
  startExam: () => {
    const f = readForm('#examForm'), cs = f.all('c');
    if (!cs.length) return toast('En az bir ders seç.');
    startTest({ type: 'exam', title: `Deneme · ${f.get('n')} soru`, qids: pickBalanced(cs, +f.get('n')), mode: 'exam', timed: f.get('timed') === '1' });
  },
  answer: d => answer(+d.i),
  prev: () => move(-1), next: () => move(1),
  goto: d => { S.session.cur = +d.i; Store.save(); render(); },
  blank: () => { const T = S.session; if (T.ans[T.cur] === null) T.ans[T.cur] = -1; if (T.cur < T.qids.length - 1) T.cur++; Store.save(); render(); },
  finish: () => finishTest(false),
  fav: d => { toggleMark('fav', d.id); render(); },
  later: d => { toggleMark('later', d.id); render(); },
  favList: (d, el) => { toggleMark('fav', d.id); el.classList.toggle('on', !!S.fav[d.id]); },
  favStart: d => {
    const ids = Object.keys(d.tab === 'later' ? S.later : S.fav).filter(QDB.has);
    startTest({ type: 'fav', title: d.tab === 'later' ? 'Daha sonra çöz' : 'Favoriler', qids: d.mode === 'rand' ? shuffle(ids).slice(0, 20) : shuffle(ids) });
  },
  favClear: async d => { if (await confirmBox('Listeyi temizle', 'Bu listedeki tüm işaretler kaldırılsın mı?', 'Temizle', true)) { S[d.tab === 'later' ? 'later' : 'fav'] = {}; Store.save(); render(); } },
  retryResult: d => {
    const t = S.tests.find(x => String(x.id) === d.id);
    const ids = t.qids.filter((qid, i) => { const q = QDB.get(qid); return q && t.ans[i] !== q.answer; });
    startTest({ type: 'wrongs', title: 'Tekrar: ' + t.title, qids: shuffle(ids) });
  },
  retryWrongs: d => {
    let list = wrongList(); if (d.c !== 'all') list = list.filter(q => q.courseId === d.c);
    const ids = d.n === 'all' ? shuffle(list.map(q => q.id)) : pickQuestions(list.filter(q => S.q[q.id].p > 0), +d.n, 'wrong');
    startTest({ type: 'wrongs', title: 'Yanlışları tekrar', qids: ids });
  },
  more: () => { histLimit += 100; render(); },
  startBank: () => {
    const f = readForm('#bankForm'), n = f.get('n') === 'all' ? 'all' : +f.get('n');
    startTest({ type: 'bank', title: 'Soru bankası testi', qids: pickQuestions(bankFilter(), n, 'random') });
  },
  backup: () => download(`misyon-koruma-yedek-${dayKey()}.json`, JSON.stringify(S), 'application/json'),
  reset: async () => {
    if (!(await confirmBox('İlerlemeyi sıfırla', 'Tüm çözüm geçmişi, yanlışlar, favoriler ve istatistikler silinecek. Yüklenen sorular silinmez.', 'Sıfırla', true))) return;
    S = DEFAULT_STATE(); Store.save(); toast('İlerleme sıfırlandı.'); go('#/home');
  },
  tpl: d => d.f === 'csv' ? download('soru-sablonu.csv', TEMPLATES.csv(), 'text/csv') : d.f === 'json' ? download('soru-sablonu.json', TEMPLATES.json(), 'application/json') : download('ders-unite-listesi.csv', TEMPLATES.units(), 'text/csv'),
  importSave: async () => {
    const mode = document.querySelector('input[name=mode]:checked')?.value || 'merge';
    const total = QDB.saveImport(pendingImport.ok, mode);
    toast(`${pendingImport.ok.length} soru kaydedildi. Yüklenen toplam: ${total}`);
    pendingImport = null; render();
  },
  importCancel: () => { pendingImport = null; render(); },
  importClear: async () => { if (await confirmBox('Yüklenen soruları sil', 'Uygulamadan yüklenen sorular silinsin mi? (Çözüm geçmişin korunur.)', 'Sil', true)) { QDB.clearImported(); render(); } },
  exportCourse: d => download(`${d.id}.js`, QDB.exportCourseFile(d.id), 'text/javascript')
};
function toggleMark(kind, id) {
  if (S[kind][id]) delete S[kind][id]; else S[kind][id] = Date.now();
  Store.save(); toast(S[kind][id] ? (kind === 'fav' ? '⭐ Favorilere eklendi' : '🔖 Daha sonra çöz listesine eklendi') : 'İşaret kaldırıldı');
}

document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if (!el || el.tagName === 'SELECT' || el.tagName === 'INPUT') return;
  const fn = ACT[el.dataset.act]; if (!fn) return;
  e.preventDefault(); if (el.disabled) return;
  fn(el.dataset, el);
});
document.addEventListener('change', async e => {
  const el = e.target, act = el.dataset.act || el.closest('form')?.id;
  if (act === 'nav') return go(el.dataset.prefix + el.value + (el.dataset.suffix || ''));
  if (act === 'bankCourse') {
    const c = QDB.course(el.value);
    $('#bankUnit').innerHTML = '<option value="all">Tüm üniteler</option>' + (c ? c.units.map(u => `<option value="${u.id}">Ünite ${u.no} – ${esc(u.title)}</option>`).join('') : '');
    return bankCount();
  }
  if (act === 'bankCount' || act === 'bankForm') return bankCount();
  if (act === 'importFile' && el.files[0]) {
    const file = el.files[0];
    try {
      const text = await readFileText(file);
      const mode = document.querySelector('input[name=mode]:checked')?.value || 'merge';
      pendingImport = { name: file.name, ...QDB.prepareImport(text, file.name, mode) };
    } catch (err) { pendingImport = { name: file.name, ok: [], errors: [{ line: '-', msg: 'Dosya okunamadı' }] }; }
    render();
  }
  if (act === 'restore' && el.files[0]) {
    try {
      const data = JSON.parse(await readFileText(el.files[0]));
      if (data.v !== 1 || typeof data.q !== 'object') throw new Error('biçim');
      if (!(await confirmBox('Yedeği yükle', 'Mevcut ilerleme yedektekiyle değiştirilecek.', 'Yükle'))) return;
      S = Object.assign(DEFAULT_STATE(), data); Store.save(); toast('Yedek yüklendi.'); go('#/home');
    } catch { toast('Yedek dosyası geçersiz.'); }
  }
});

// Klavye: test ekranında A–E / 1–5 ile cevap, ok tuşlarıyla gezinme
document.addEventListener('keydown', e => {
  if (document.body.dataset.view !== 'test' || !S.session || !$('#modal').hidden || e.ctrlKey || e.metaKey || e.altKey) return;
  const k = e.key.toUpperCase(), idx = L.indexOf(k) >= 0 ? L.indexOf(k) : '12345'.indexOf(e.key);
  if (idx >= 0) { const b = document.querySelectorAll('.opt')[idx]; if (b && !b.disabled) answer(idx); }
  else if (e.key === 'ArrowRight') move(1);
  else if (e.key === 'ArrowLeft') move(-1);
});
document.addEventListener('visibilitychange', () => { if (document.hidden) Store.save(); });
window.addEventListener('pagehide', () => Store.save());

// ---------------- başlat ----------------
Store.load();
QDB.build();
if (S.session) S.session.qids = S.session.qids.filter(Boolean);
render();
