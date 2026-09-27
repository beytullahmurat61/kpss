// ============================================================
// MİSYON KORUMA – UYGULAMA MOTORU
// Ders → Ünite → Test → Sonuç → Yanlışlar → Tekrar · Denemeler · Karma test · Kartlar
// Her dersin verisi kendi dosyasından (sorular-<ders>.js) istek üzerine yüklenir.
// ============================================================
'use strict';

// ---------------- yardımcılar ----------------
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const LETTERS = ['A', 'B', 'C', 'D', 'E'];
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
const shuffle = arr => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const fmtDate = ts => ts ? new Date(ts).toLocaleString('tr-TR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' }) : '—';
const fmtTime = s => { s = Math.max(0, Math.round(s)); const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60; return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(x).padStart(2, '0'); };
const DIFF = { easy: ['🟢', 'Kolay'], medium: ['🟡', 'Orta'], hard: ['🔴', 'Zor'] };
const tone = p => (p >= 75 ? 'ok' : p >= 50 ? 'mid' : 'bad');
const fold = s => String(s ?? '').toLocaleLowerCase('tr-TR').replace(/[çğıöşüâîû]/g, ch => ({ ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', â: 'a', î: 'i', û: 'u' }[ch])).trim();

// ============================================================
// VERİ: ders dosyaları (sorular-<ders>.js) → MK.ders({...})
// ============================================================
const DB = (() => {
  const courseMap = {}; COURSES.forEach(c => { courseMap[c.id] = c; });
  const loaded = {};      // dersId → { units, questions, cards, sets, errors }
  const status = {};      // dersId → 'loading' | 'ok' | 'error'
  const failures = {};    // dersId → hata mesajı
  const pending = {};     // dersId → Promise
  const byId = new Map(), cardById = new Map(), unitMap = {};

  const DIFF_MAP = { kolay: 'easy', easy: 'easy', orta: 'medium', medium: 'medium', zor: 'hard', hard: 'hard' };

  // Ders dosyası bu fonksiyonu çağırır
  function register(data) {
    const cid = data && data.id;
    const c = courseMap[cid];
    if (!c) { console.error('Bilinmeyen ders kimliği:', cid); return; }
    const errors = [];
    const units = (data.uniteler || []).map((t, i) => ({ id: `${cid}_u${i + 1}`, no: i + 1, title: String(t), courseId: cid }));
    units.forEach(u => { unitMap[u.id] = u; });
    const questions = [], seen = new Set();
    (data.sorular || []).forEach((r, i) => {
      const where = `${i + 1}. soru${r && r.id ? ' (' + r.id + ')' : ''}`;
      if (!r || typeof r !== 'object') return errors.push(`${where}: geçersiz kayıt`);
      const id = String(r.id || '').trim();
      const unitNo = parseInt(r.unite, 10);
      const opts = (r.secenekler || r.options || []).map(o => String(o ?? '').trim());
      const ansRaw = r.cevap ?? r.answer;
      const ans = typeof ansRaw === 'number' ? ansRaw : LETTERS.indexOf(String(ansRaw || '').trim().toUpperCase());
      if (!id) return errors.push(`${where}: id eksik`);
      if (seen.has(id) || byId.has(id)) return errors.push(`${where}: aynı id birden fazla kez kullanılmış`);
      if (!unitMap[`${cid}_u${unitNo}`]) return errors.push(`${where}: ünite numarası geçersiz (${r.unite})`);
      if (!String(r.soru || '').trim()) return errors.push(`${where}: soru metni boş`);
      if (opts.length < 2 || opts.length > 5 || opts.some(o => !o)) return errors.push(`${where}: şıklar hatalı (2–5 dolu şık olmalı)`);
      if (!(ans >= 0 && ans < opts.length)) return errors.push(`${where}: cevap harfi geçersiz (${ansRaw})`);
      seen.add(id);
      const q = {
        id, courseId: cid, unitId: `${cid}_u${unitNo}`, unitNo,
        difficulty: DIFF_MAP[fold(r.zorluk)] || 'medium',
        question: String(r.soru).trim(), options: opts, answer: ans,
        explanation: String(r.aciklama || '').trim(), source: String(r.kaynak || '').trim(),
        set: r.deneme ? String(r.deneme).trim() : '', setNo: parseInt(r.sira, 10) || 0
      };
      questions.push(q); byId.set(id, q);
    });
    const cards = [];
    (data.kartlar || []).forEach((k, i) => {
      if (!k || !k.id || !String(k.soru || '').trim() || !String(k.cevap || '').trim()) return errors.push(`${i + 1}. kart: id, soru veya cevap eksik`);
      if (cardById.has(k.id)) return errors.push(`${i + 1}. kart: aynı id (${k.id})`);
      const card = { id: String(k.id), courseId: cid, q: String(k.soru).trim(), a: String(k.cevap).trim(), note: String(k.aciklama || '').trim() };
      cards.push(card); cardById.set(card.id, card);
    });
    const setMap = new Map();
    questions.forEach(q => { if (!q.set) return; if (!setMap.has(q.set)) setMap.set(q.set, []); setMap.get(q.set).push(q); });
    const sets = [...setMap.entries()].map(([name, qs]) => ({ name, qs: qs.sort((a, b) => a.setNo - b.setNo) }))
      .sort((x, y) => (/deneme/i.test(y.name) - /deneme/i.test(x.name)) || x.name.localeCompare(y.name, 'tr', { numeric: true }));
    loaded[cid] = { units, questions, cards, sets, errors };
    status[cid] = 'ok';
    if (errors.length) console.warn(`${c.name}: ${errors.length} veri uyarısı`, errors);
  }

  function load(cid) {
    if (status[cid] === 'ok') return Promise.resolve(loaded[cid]);
    if (pending[cid]) return pending[cid];
    const c = courseMap[cid]; if (!c) return Promise.reject(new Error('Ders yok'));
    status[cid] = 'loading';
    pending[cid] = new Promise(resolve => {
      const s = document.createElement('script');
      s.src = `${c.file}?v=${APP_VERSION}`;
      const fail = msg => { status[cid] = 'error'; failures[cid] = msg; delete pending[cid]; resolve(null); };
      s.onload = () => {
        if (status[cid] === 'ok') { delete pending[cid]; return resolve(loaded[cid]); }
        const e = (window.__loadErrors || []).filter(x => x.file === c.file).pop();
        fail(e ? `${c.file} → ${e.msg}` : `${c.file} yüklendi ama içinde MK.ders({...}) bulunamadı.`);
      };
      s.onerror = () => fail(`${c.file} bulunamadı. Dosya adı ve konumu (index.html ile aynı klasör) doğru mu?`);
      document.head.appendChild(s);
    });
    return pending[cid];
  }
  const loadAll = () => Promise.all(COURSES.map(c => load(c.id)));
  const isLoaded = cid => status[cid] === 'ok';
  const allLoaded = () => COURSES.every(c => status[c.id] === 'ok' || status[c.id] === 'error');

  return {
    register, load, loadAll, isLoaded, allLoaded,
    status: cid => status[cid], failure: cid => failures[cid],
    course: id => courseMap[id], unit: id => unitMap[id],
    data: cid => loaded[cid],
    units: cid => loaded[cid]?.units || [],
    qs: cid => loaded[cid]?.questions || [],
    unitQs: uid => { const u = unitMap[uid]; return u ? DB.qs(u.courseId).filter(q => q.unitId === uid) : []; },
    sets: cid => loaded[cid]?.sets || [],
    setQs: (cid, name) => (loaded[cid]?.sets || []).find(s => s.name === name)?.qs || [],
    cards: cid => loaded[cid]?.cards || [],
    get: id => byId.get(id), card: id => cardById.get(id),
    all: () => COURSES.flatMap(c => DB.qs(c.id)),
    errors: cid => loaded[cid]?.errors || []
  };
})();
window.MK = { ders: DB.register };

// ============================================================
// KALICI DURUM (localStorage)
// ============================================================
const DEFAULT_STATE = () => ({
  v: 4,
  q: {},            // soruId → { a, c, w, b, h, l, t, p }
  fav: {}, later: {},
  tests: [], counters: { tests: 0, exams: 0 },
  daily: { target: 50, days: {} },
  session: null,
  cards: {}, cardPos: {}, cardSession: null,
  settings: { fs: 17, theme: 'dark', autoNext: false }
});
let S = DEFAULT_STATE();
const Store = {
  load() {
    try {
      const raw = JSON.parse(localStorage.getItem(APP_CONFIG.storageKey) || 'null');
      if (raw && raw.v === 4) { S = Object.assign(DEFAULT_STATE(), raw); S.settings = Object.assign(DEFAULT_STATE().settings, raw.settings || {}); }
    } catch (e) { console.error('Kayıt okunamadı', e); }
  },
  save() {
    try { localStorage.setItem(APP_CONFIG.storageKey, JSON.stringify(S)); }
    catch (e) { toast('Kayıt yapılamadı: depolama dolu olabilir.'); }
  }
};

function record(qid, res) {
  const r = S.q[qid] || (S.q[qid] = { a: 0, c: 0, w: 0, b: 0, h: '', l: '', t: 0, p: 0 });
  r.a++; r[res]++; r.h = (r.h + res).slice(-10); r.t = Date.now();
  if (res !== 'b' || !r.l || r.l === 'b') r.l = res;
  if (res === 'w') r.p = Math.min((r.p || 0) + 3, 9);
  else if (res === 'c' && r.p > 0) r.p = Math.max(r.p - 2, 0);
}
function bumpDaily(n = 1) {
  const k = dayKey(); S.daily.days[k] = (S.daily.days[k] || 0) + n;
  const keys = Object.keys(S.daily.days).sort(); while (keys.length > 60) delete S.daily.days[keys.shift()];
}
const todayCount = () => S.daily.days[dayKey()] || 0;
function streak() {
  let n = 0; const d = new Date();
  if (!S.daily.days[dayKey(d)]) d.setDate(d.getDate() - 1);
  while (S.daily.days[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

// ---------------- istatistik ----------------
function statsOf(questions) {
  let solved = 0, correct = 0, wrong = 0;
  for (const q of questions) { const r = S.q[q.id]; if (!r) continue; if (r.l === 'c') { solved++; correct++; } else if (r.l === 'w') { solved++; wrong++; } }
  return { total: questions.length, solved, correct, wrong, pct: pct(correct, solved) };
}
const unitStats = uid => statsOf(DB.unitQs(uid));
const courseStats = cid => statsOf(DB.qs(cid));
function weakUnits() {
  const out = [];
  COURSES.forEach(c => DB.units(c.id).forEach(u => {
    const s = unitStats(u.id);
    if (s.solved >= APP_CONFIG.weakMinSolved && s.pct < APP_CONFIG.weakThreshold) out.push({ c, u, s });
  }));
  return out.sort((a, b) => a.s.pct - b.s.pct);
}
const wrongList = () => DB.all().filter(q => S.q[q.id]?.w > 0);

// ---------------- akıllı soru seçimi ----------------
// sel: smart | unsolved | wrong | random ; diff: mixed | easy | medium | hard
function pickQuestions(pool, n, sel = 'smart', diff = 'mixed') {
  if (diff !== 'mixed') pool = pool.filter(q => q.difficulty === diff);
  if (sel === 'unsolved') pool = pool.filter(q => !S.q[q.id]?.l || S.q[q.id].l === 'b');
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
      if (!r || !r.l) v += 1000; else v += (r.p || 0) * 60 + Math.max(0, 6 - r.a) * 10;
      return v;
    };
    ordered = pool.map(q => [score(q), q]).sort((a, b) => b[0] - a[0]).map(x => x[1]);
  }
  const chosen = n === 'all' ? ordered : ordered.slice(0, n);
  return shuffle(chosen).map(q => q.id);
}
// Gruplar arasında dengeli dağıtım (ders veya ünite bazında)
function pickBalanced(groups, n, sel = 'smart') {
  const pools = groups.map(g => pickQuestions(g, 'all', sel)).filter(p => p.length);
  if (!pools.length) return [];
  const out = []; let i = 0;
  while (out.length < n && pools.some(p => p.length)) { const p = pools[i % pools.length]; if (p.length) out.push(p.shift()); i++; }
  return shuffle(out);
}

// ============================================================
// ARAYÜZ TEMELİ
// ============================================================
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
  });
}
const bar = (p, cls = '') => `<div class="bar ${cls}"><i style="width:${Math.min(100, Math.max(0, p))}%"></i></div>`;
const empty = (icon, text, action = '') => `<div class="empty"><div class="empty-ico">${icon}</div><p>${text}</p>${action}</div>`;
const chips = (name, items, checked) => `<div class="chips">${items.map(([v, l]) =>
  `<label class="chip"><input type="radio" name="${name}" value="${v}" ${String(checked) === String(v) ? 'checked' : ''}><span>${l}</span></label>`).join('')}</div>`;
const readForm = sel => { const d = new FormData($(sel)); return { get: k => d.get(k), all: k => d.getAll(k) }; };
const loading = (msg = 'Sorular yükleniyor…') => `<div class="loading"><div class="spinner"></div><p>${msg}</p></div>`;
const courseError = cid => `<div class="panel warnbox"><h3>⚠️ ${esc(DB.course(cid).name)} yüklenemedi</h3><p>${esc(DB.failure(cid) || '')}</p>
  <p class="hint">Genellikle eksik virgül, kapanmamış tırnak/parantez veya yanlış dosya adından olur. Diğer dersler etkilenmez.</p>
  <button class="btn secondary" data-act="reload">Sayfayı yenile</button></div>`;

function applySettings() {
  document.documentElement.style.setProperty('--fs', S.settings.fs + 'px');
  document.documentElement.dataset.theme = S.settings.theme;
  $('meta[name=theme-color]').setAttribute('content', S.settings.theme === 'light' ? '#f4f6fa' : '#0f1b2d');
}

// ---------------- yönlendirme ----------------
const ROUTES = {};
const TAB_OF = { home: 'home', dersler: 'dersler', ders: 'dersler', unite: 'dersler', karma: 'karma', yanlislar: 'yanlislar', istatistik: 'istatistik' };
const FOCUS_VIEWS = new Set(['test', 'kart']);
let timerHandle = null, renderToken = 0;
function go(hash) { if (location.hash === hash) render(); else location.hash = hash; }
function currentRoute() {
  const parts = (location.hash.replace(/^#\/?/, '') || 'home').split('/');
  return { name: parts[0], args: parts.slice(1).map(decodeURIComponent) };
}
function render() {
  const { name, args } = currentRoute();
  const route = ROUTES[name] || ROUTES.home;
  if (name !== 'test') stopTimer();
  const token = ++renderToken;
  const out = route(...args);
  // Rota veri bekliyorsa (ders dosyası yükleniyor) yüklenince yeniden çiz
  if (out.need) {
    Promise.all(out.need.map(DB.load)).then(() => { if (token === renderToken) render(); });
  }
  $('#topTitle').textContent = out.title || 'Misyon Koruma';
  document.body.dataset.view = name;
  document.body.classList.toggle('focus', FOCUS_VIEWS.has(name));
  $('#btnBack').style.visibility = (name === 'home' || TAB_OF[name] === name) ? 'hidden' : 'visible';
  document.querySelectorAll('#tabbar a').forEach(a => a.classList.toggle('on', a.dataset.tab === (TAB_OF[name] || '')));
  $('#view').innerHTML = out.html;
  out.after?.();
  if (!FOCUS_VIEWS.has(name) && !out.keepScroll) window.scrollTo(0, 0);
}
window.addEventListener('hashchange', render);
// Gerekli dersler yüklü değilse "yükleniyor" döndür
function needCourses(ids, title) {
  const missing = ids.filter(id => !DB.isLoaded(id) && DB.status(id) !== 'error');
  return missing.length ? { title, html: loading(), need: missing } : null;
}
const ALL_IDS = COURSES.map(c => c.id);

// ============================================================
// ANA SAYFA
// ============================================================
ROUTES.home = () => {
  const today = todayCount(), target = S.daily.target, segs = 10, filled = Math.min(segs, Math.floor((today / target) * segs));
  const sess = S.session, ks = S.cardSession && S.cardSession.cur < S.cardSession.ids.length ? S.cardSession : null;
  const ready = DB.allLoaded();
  const total = DB.all().length;
  const wrongActive = ready ? DB.all().filter(q => S.q[q.id]?.p > 0).length : 0;
  const weak = ready ? weakUnits() : [];
  const st = streak();
  return {
    title: 'Misyon Koruma',
    html: `
    <section class="brand">
      <div class="badge" aria-hidden="true">🛡️</div>
      <div><h2>Misyon Koruma</h2><p>Soru çöz · Yanlışını tekrar et · İlerle</p></div>
    </section>
    ${sess ? `<a class="resume" href="#/test"><span>▶️</span><div><strong>Kaldığın yerden devam et</strong><small>${esc(sess.title)} · Soru ${sess.cur + 1} / ${sess.qids.length}</small></div></a>` : ''}
    ${ks ? `<a class="resume alt" href="#/kart"><span>🗂️</span><div><strong>Kart turuna devam et</strong><small>${esc(ks.title)} · ${ks.cur + 1} / ${ks.ids.length}</small></div></a>` : ''}
    <section class="goal">
      <div class="goal-head"><span>🎯 Bugün</span><strong>${today} <em>/ ${target} soru</em></strong></div>
      <div class="segments">${Array.from({ length: segs }, (_, i) => `<i class="${i < filled ? 'on' : ''}"></i>`).join('')}</div>
      <div class="goal-foot"><span>${today >= target ? '✅ Günlük hedef tamam' : `Hedefe ${target - today} soru`}${st > 1 ? ` · 🔥 ${st} gün seri` : ''}</span>
        <div class="goal-set">${[20, 50, 100].map(n => `<button class="mini ${n === target ? 'on' : ''}" data-act="goal" data-n="${n}">${n}</button>`).join('')}</div></div>
    </section>
    <div class="quick">
      <button class="btn primary big" data-act="quickMix">⚡ Hızlı karma test · 20 soru</button>
      ${wrongActive ? `<button class="btn secondary block" data-act="retryWrongs" data-c="all" data-n="20">🔁 Yanlışlarımı tekrar et (${wrongActive})</button>` : ''}
    </div>
    <h3 class="sec">Dersler</h3>
    <div class="course-grid">${COURSES.map(c => courseTile(c)).join('')}</div>
    ${weak.length ? `<h3 class="sec">⚠️ Zayıf ünitelerin</h3><div class="list">${weak.slice(0, 3).map(weakRow).join('')}</div>
      ${weak.length > 3 ? `<a class="btn ghost block" href="#/zayif">Tümünü gör (${weak.length})</a>` : ''}` : ''}
    <h3 class="sec">Diğer</h3>
    <nav class="tiles">
      <a class="tile" href="#/kartlar"><span class="tile-ico">🗂️</span><span class="tile-label">Soru-Cevap Kartları</span></a>
      <a class="tile" href="#/favoriler"><span class="tile-ico">⭐</span><span class="tile-label">Favoriler</span></a>
      <a class="tile" href="#/gecmis"><span class="tile-ico">📜</span><span class="tile-label">Çözüm Geçmişi</span></a>
      <a class="tile" href="#/zayif"><span class="tile-ico">⚠️</span><span class="tile-label">Zayıf Üniteler</span></a>
    </nav>
    <p class="foot">${ready ? `Havuzda ${total} soru` : 'Sorular yükleniyor…'} · v${APP_VERSION}</p>`,
    need: ready ? null : ALL_IDS
  };
};
function courseTile(c) {
  const st = DB.status(c.id);
  if (st === 'error') return `<a class="ctile err" href="#/ders/${c.id}"><span class="ct-ico">${c.icon}</span><b>${esc(c.short)}</b><small>⚠️ Dosya hatası</small></a>`;
  if (st !== 'ok') return `<a class="ctile" href="#/ders/${c.id}"><span class="ct-ico">${c.icon}</span><b>${esc(c.short)}</b><small>…</small></a>`;
  const s = courseStats(c.id);
  if (!s.total) return `<a class="ctile dim" href="#/ders/${c.id}"><span class="ct-ico">${c.icon}</span><b>${esc(c.short)}</b><small>Soru bekleniyor</small></a>`;
  return `<a class="ctile" href="#/ders/${c.id}"><span class="ct-ico">${c.icon}</span><b>${esc(c.short)}</b>
    <small>${s.solved}/${s.total}${s.solved ? ` · <span class="t-${tone(s.pct)}">%${s.pct}</span>` : ''}</small>${bar(pct(s.solved, s.total))}</a>`;
}
const weakRow = ({ c, u, s }) => `<div class="card weak"><div class="c-body"><strong>${esc(c.short)} · Ünite ${u.no}</strong><span class="u-title">${esc(u.title)}</span>
  <small>${s.correct}/${s.solved} doğru</small>${bar(s.pct, 'bad')}</div><b class="score t-bad">%${s.pct}</b>
  <button class="btn primary block" data-act="quickUnit" data-id="${u.id}" data-sel="smart">Bu üniteden 20 soru çöz</button></div>`;

// ============================================================
// DERSLER
// ============================================================
ROUTES.dersler = () => ({
  title: 'Dersler',
  html: `<div class="list">${COURSES.map(c => {
    const st = DB.status(c.id);
    let meta = '…', progress = '';
    if (st === 'error') meta = '⚠️ Dosya yüklenemedi';
    else if (st === 'ok') {
      const s = courseStats(c.id), d = DB.sets(c.id).length, k = DB.cards(c.id).length;
      meta = s.total ? `${s.total} soru${d ? ` · ${d} deneme/test` : ''}${k ? ` · ${k} kart` : ''} · ${s.solved} çözüldü${s.solved ? ` · <b class="t-${tone(s.pct)}">%${s.pct}</b>` : ''}` : 'Soru bekleniyor';
      progress = s.total ? bar(pct(s.solved, s.total)) : '';
    }
    return `<a class="card course" href="#/ders/${c.id}"><span class="c-ico">${c.icon}</span>
      <div class="c-body"><strong>${esc(c.name)}</strong><small>${meta}</small>${progress}</div><span class="chev">›</span></a>`;
  }).join('')}</div>`,
  need: DB.allLoaded() ? null : ALL_IDS
});

// ---------------- ders sayfası (sekmeler) ----------------
ROUTES.ders = (cid, tab = 'uniteler') => {
  const c = DB.course(cid); if (!c) return ROUTES.dersler();
  const wait = needCourses([cid], c.short); if (wait) return wait;
  if (DB.status(cid) === 'error') return { title: c.short, html: courseError(cid) };
  const cs = courseStats(cid), sets = DB.sets(cid), cards = DB.cards(cid), errs = DB.errors(cid);
  if (!cs.total && !cards.length) return {
    title: c.short,
    html: `<div class="page-head"><span class="c-ico lg">${c.icon}</span><div><h2>${esc(c.name)}</h2></div></div>
      ${empty('📭', `Bu dersin soruları henüz eklenmedi.<br><small>Soru dosyası: <code>${esc(c.file)}</code></small>`)}`
  };
  const tabs = [['uniteler', `Üniteler`], ['denemeler', `Denemeler`], ...(cards.length ? [['kartlar', `Kartlar`]] : [])];
  let body = '';
  if (tab === 'denemeler') body = denemeTab(cid);
  else if (tab === 'kartlar') body = kartTab(cid);
  else body = `<a class="btn secondary block" href="#/ayar/ders/${cid}">🔀 Tüm ünitelerden karışık test</a>
    <div class="list">${DB.units(cid).map(u => {
      const s = unitStats(u.id);
      return `<a class="card unit" href="#/unite/${u.id}"><span class="u-no">${u.no}</span>
        <div class="c-body"><strong>${esc(u.title)}</strong>
        <small>${s.total} soru · ${s.solved} çözüldü${s.solved ? ` · <b class="t-${tone(s.pct)}">%${s.pct}</b>` : ''}</small>
        ${bar(pct(s.solved, s.total))}</div><span class="chev">›</span></a>`;
    }).join('')}</div>`;
  return {
    title: c.short,
    html: `<div class="page-head"><span class="c-ico lg">${c.icon}</span><div><h2>${esc(c.name)}</h2>
        <p>${cs.total} soru · ${cs.solved} çözüldü${cs.solved ? ` · başarı %${cs.pct}` : ''}</p></div></div>
      ${errs.length ? `<details class="panel warnbox"><summary>⚠️ Dosyada ${errs.length} hatalı kayıt atlandı</summary><ul class="errs">${errs.slice(0, 30).map(e => `<li>${esc(e)}</li>`).join('')}</ul></details>` : ''}
      <div class="seg">${tabs.map(([k, l]) => `<a class="${k === tab ? 'on' : ''}" href="#/ders/${cid}/${k}">${l}${k === 'denemeler' && sets.length ? ` <em>${sets.length}</em>` : ''}</a>`).join('')}</div>
      ${body}`
  };
};

function denemeTab(cid) {
  const sets = DB.sets(cid), c = DB.course(cid), total = DB.qs(cid).length;
  const past = S.tests.filter(t => t.courseId === cid && (t.type === 'exam' || t.type === 'book')).slice(0, 8);
  const lastOf = name => S.tests.find(t => t.setKey === cid + '|' + name);
  const counts = [20, 40, 60, 100].filter(n => n < total);
  return `${sets.length ? `<h3 class="sec">📖 Kitap deneme ve testleri</h3><p class="hint">Kitaptaki sırayla, kitaptaki sorularla.</p>
    <div class="list">${sets.map(s => {
      const l = lastOf(s.name), dk = Math.round(s.qs.length * APP_CONFIG.examSecondsPerQuestion / 60);
      return `<div class="card set"><div class="c-body"><strong>${/deneme/i.test(s.name) ? '📋 ' : '📝 '}${esc(s.name)}</strong>
        <small>${s.qs.length} soru · ${dk} dk${l ? ` · son: <b class="t-${tone(l.pct)}">%${l.pct}</b> (net ${l.net})` : ''}</small></div>
        <div class="set-btns"><button class="mini on" data-act="startSet" data-c="${cid}" data-s="${esc(s.name)}" data-m="exam">⏱️ Sınav</button>
        <button class="mini" data-act="startSet" data-c="${cid}" data-s="${esc(s.name)}" data-m="practice">Alıştırma</button></div></div>`;
    }).join('')}</div>` : ''}
    <h3 class="sec">🧪 Yeni deneme oluştur</h3>
    <form id="denemeForm" class="panel" onsubmit="return false">
      <p class="hint">Sorular ${esc(c.short)} havuzundan, ünitelere dengeli dağıtılarak seçilir; daha önce görmediklerin önceliklidir.</p>
      <label class="lbl">Soru sayısı</label>${chips('n', [...counts.map(n => [n, n]), ['all', `Tümü (${total})`]], counts.includes(40) ? 40 : counts[counts.length - 1] || 'all')}
      <label class="lbl">Süre</label>${chips('timed', [['1', `⏱️ Süreli (soru başı ${APP_CONFIG.examSecondsPerQuestion} sn)`], ['0', 'Süresiz']], '1')}
      <button class="btn primary big" data-act="startCourseExam" data-c="${cid}">DENEMEYİ BAŞLAT</button>
    </form>
    ${past.length ? `<h3 class="sec">Geçmiş denemeler</h3><div class="list">${past.map(testRow).join('')}</div>` : ''}`;
}
const testRow = t => `<a class="card row" href="#/sonuc/${t.id}"><div class="c-body"><strong>${esc(t.title)}</strong><small>${fmtDate(t.date)} · ${t.total} soru · D ${t.c} · Y ${t.w} · B ${t.b} · Net ${t.net}</small></div><b class="score t-${tone(t.pct)}">%${t.pct}</b></a>`;

// ============================================================
// SORU-CEVAP KARTLARI
// ============================================================
function cardStats(cid) {
  const list = DB.cards(cid); let seen = 0, known = 0, unknown = 0;
  list.forEach(c => { const r = S.cards[c.id]; if (!r) return; seen++; if (r.l === 'k') known++; else unknown++; });
  return { total: list.length, seen, known, unknown };
}
function kartTab(cid) {
  const st = cardStats(cid), list = DB.cards(cid), n = APP_CONFIG.cardSessionSize;
  const pos = (S.cardPos[cid] || 0) % Math.max(1, list.length);
  return `<div class="statgrid">
      <div><b>${st.total}</b><span>Toplam kart</span></div><div><b>${st.total - st.seen}</b><span>Görülmemiş</span></div>
      <div class="ok"><b>${st.known}</b><span>Bildim</span></div><div class="bad"><b>${st.unknown}</b><span>Bilemedim</span></div></div>
    <p class="hint">Soruyu oku, cevabı içinden söyle, sonra “Cevabı göster”e dokun ve dürüstçe işaretle.</p>
    <button class="btn primary big" data-act="cardStart" data-c="${cid}" data-m="next">▶️ Sıradaki ${n} kart<small class="btn-sub">${pos + 1}. karttan devam</small></button>
    <button class="btn secondary block" data-act="cardStart" data-c="${cid}" data-m="unknown" ${st.unknown ? '' : 'disabled'}>❌ Bilemediklerim (${st.unknown})</button>
    <button class="btn secondary block" data-act="cardStart" data-c="${cid}" data-m="unseen" ${st.total - st.seen ? '' : 'disabled'}>🆕 Görmediklerimden ${n}</button>
    <button class="btn ghost block" data-act="cardStart" data-c="${cid}" data-m="random">🎲 Rastgele ${n}</button>`;
}
ROUTES.kartlar = () => {
  const wait = needCourses(ALL_IDS, 'Kartlar'); if (wait) return wait;
  const withCards = COURSES.filter(c => DB.cards(c.id).length);
  return {
    title: 'Soru-Cevap Kartları',
    html: withCards.length ? `<p class="hint">Kitapların açık uçlu soru-cevap bölümleri. Hızlı tekrar için idealdir.</p><div class="list">${withCards.map(c => {
      const st = cardStats(c.id);
      return `<a class="card" href="#/ders/${c.id}/kartlar"><span class="c-ico">${c.icon}</span><div class="c-body"><strong>${esc(c.name)}</strong><small>${st.total} kart · ${st.known} bildim · ${st.unknown} bilemedim</small>${bar(pct(st.seen, st.total))}</div><span class="chev">›</span></a>`;
    }).join('')}</div>` : empty('🗂️', 'Henüz kart eklenmedi.')
  };
};
function startCards(cid, mode) {
  const list = DB.cards(cid), n = APP_CONFIG.cardSessionSize;
  let ids = [];
  if (mode === 'next') {
    const pos = (S.cardPos[cid] || 0) % Math.max(1, list.length);
    ids = list.slice(pos, pos + n).map(c => c.id);
    S.cardPos[cid] = pos + ids.length >= list.length ? 0 : pos + ids.length;
  } else if (mode === 'unknown') ids = shuffle(list.filter(c => S.cards[c.id]?.l === 'u')).map(c => c.id);
  else if (mode === 'unseen') ids = list.filter(c => !S.cards[c.id]).slice(0, n).map(c => c.id);
  else ids = shuffle(list).slice(0, n).map(c => c.id);
  if (!ids.length) return toast('Bu seçimde kart yok.');
  const titles = { next: 'Sıradaki kartlar', unknown: 'Bilemediklerim', unseen: 'Görmediklerim', random: 'Rastgele kartlar' };
  S.cardSession = { cid, title: `${DB.course(cid).short} · ${titles[mode]}`, ids, cur: 0, open: false, res: {} };
  Store.save(); go('#/kart');
}
ROUTES.kart = () => {
  const K = S.cardSession;
  if (!K) { setTimeout(() => go('#/kartlar'), 0); return { html: '' }; }
  const wait = needCourses([K.cid], 'Kartlar'); if (wait) return wait;
  if (K.cur >= K.ids.length) {
    const vals = Object.values(K.res), k = vals.filter(x => x === 'k').length, u = vals.length - k;
    return {
      title: 'Tur bitti',
      html: `<section class="result-hero t-${tone(pct(k, vals.length))}"><div class="ring" style="--p:${pct(k, vals.length)}"><b>%${pct(k, vals.length)}</b><span>bildim</span></div>
        <div><h2>${esc(K.title)}</h2><p>${k} bildim · ${u} bilemedim</p></div></section>
        ${u ? `<button class="btn primary big" data-act="cardRetry">❌ Bilemediklerimi tekrar et (${u})</button>` : ''}
        <button class="btn secondary block" data-act="cardStart" data-c="${K.cid}" data-m="next">▶️ Sıradaki kartlar</button>
        <button class="btn ghost block" data-act="cardClose">Kartlara dön</button>`
    };
  }
  const c = DB.card(K.ids[K.cur]);
  if (!c) { K.cur++; Store.save(); setTimeout(render, 0); return { html: '' }; }
  const r = S.cards[c.id];
  return {
    title: 'Kartlar',
    html: `<div class="qhead"><div class="qmeta"><strong>${esc(K.title)}</strong><span>${r ? (r.l === 'k' ? '✅ Daha önce bildin' : '❌ Daha önce bilemedin') : '🆕 İlk kez'}</span></div>
        <div class="qcount"><b>${K.cur + 1}</b> / ${K.ids.length}</div></div>
      <div class="progress-line">${bar(pct(K.cur, K.ids.length))}</div>
      <div class="flash ${K.open ? 'open' : ''}" data-act="${K.open ? '' : 'cardFlip'}">
        <div class="flash-q">${esc(c.q)}</div>
        ${K.open ? `<div class="flash-a"><span>Cevap</span>${esc(c.a).replace(/ • /g, '<br>• ')}</div>${c.note ? `<div class="note">ℹ️ ${esc(c.note)}</div>` : ''}` : '<div class="flash-hint">Cevabı görmek için dokun</div>'}
      </div>
      <div class="actionbar">${K.open
        ? `<button class="btn danger" data-act="cardMark" data-v="u">❌ Bilemedim</button><button class="btn ok" data-act="cardMark" data-v="k">✅ Bildim</button>`
        : `<button class="btn ghost" data-act="cardPrev" ${K.cur ? '' : 'disabled'}>← Önceki</button><button class="btn primary" data-act="cardFlip">Cevabı göster</button>`}</div>
      <button class="link-btn" data-act="cardEnd">Turu bitir</button>`
  };
};

// ============================================================
// ÜNİTE SAYFASI VE TEST AYARLARI
// ============================================================
function setupForm(scope, id, poolSize) {
  return `<form id="setupForm" class="panel" onsubmit="return false">
    <label class="lbl">Soru sayısı</label>
    ${chips('n', [[10, '10'], [20, '20'], [30, '30'], [50, '50'], ['all', 'Tümü']], poolSize >= 20 ? 20 : 'all')}
    <label class="lbl">Zorluk</label>
    ${chips('diff', [['mixed', 'Karışık'], ['easy', '🟢 Kolay'], ['medium', '🟡 Orta'], ['hard', '🔴 Zor']], 'mixed')}
    <label class="lbl">Soru seçimi</label>
    ${chips('sel', [['smart', 'Akıllı'], ['unsolved', 'Çözülmemiş'], ['wrong', 'Yanlışlarım'], ['random', 'Rastgele']], 'smart')}
    <p class="hint">Akıllı seçim: önce hiç görmediklerin, sonra yanlışların ve zayıf konuların gelir.</p>
    <button class="btn primary big" data-act="startSetup" data-scope="${scope}" data-id="${id}" ${poolSize ? '' : 'disabled'}>TESTİ BAŞLAT</button>
  </form>`;
}
ROUTES.unite = uid => {
  const cid = String(uid).replace(/_u\d+$/, '');
  const wait = needCourses([cid], 'Ünite'); if (wait) return wait;
  const u = DB.unit(uid); if (!u) return ROUTES.dersler();
  const c = DB.course(cid), s = unitStats(uid), qs = DB.unitQs(uid);
  const unsolved = qs.filter(q => !S.q[q.id]?.l || S.q[q.id].l === 'b').length;
  const wrongs = qs.filter(q => S.q[q.id]?.w > 0).length;
  return {
    title: `${c.short} · Ünite ${u.no}`,
    html: `<div class="page-head"><span class="u-no lg">${u.no}</span><div><h2>${esc(u.title)}</h2><p>${esc(c.name)}</p></div></div>
      <div class="statgrid">
        <div><b>${s.total}</b><span>Soru</span></div><div><b>${s.solved}</b><span>Çözülen</span></div>
        <div class="ok"><b>${s.correct}</b><span>Doğru</span></div><div class="bad"><b>${s.wrong}</b><span>Yanlış</span></div>
        <div class="wide t-${tone(s.pct)}"><b>%${s.pct}</b><span>Başarı</span>${bar(s.pct, tone(s.pct))}</div>
      </div>
      <div class="row-btns">
        <button class="btn secondary" data-act="quickUnit" data-id="${uid}" data-sel="unsolved" ${unsolved ? '' : 'disabled'}>🆕 Çözülmemiş (${unsolved})</button>
        <button class="btn secondary" data-act="quickUnit" data-id="${uid}" data-sel="wrong" ${wrongs ? '' : 'disabled'}>❌ Yanlışlar (${wrongs})</button>
      </div>
      ${setupForm('unit', uid, qs.length)}`
  };
};
ROUTES.ayar = (scope, cid) => {
  const wait = needCourses([cid], 'Test ayarları'); if (wait) return wait;
  const c = DB.course(cid); if (!c) return ROUTES.dersler();
  const qs = DB.qs(cid);
  return { title: `${c.short} · Karışık`, html: `<div class="page-head"><span class="c-ico lg">${c.icon}</span><div><h2>Tüm ünitelerden karışık</h2><p>${esc(c.name)} · ${qs.length} soru</p></div></div>${setupForm('course', cid, qs.length)}` };
};

// ============================================================
// KARMA TEST (tüm derslerden)
// ============================================================
ROUTES.karma = () => {
  const wait = needCourses(ALL_IDS, 'Karma Test'); if (wait) return wait;
  const avail = COURSES.filter(c => DB.qs(c.id).length);
  const total = avail.reduce((n, c) => n + DB.qs(c.id).length, 0);
  if (!avail.length) return { title: 'Karma Test', html: empty('📭', 'Havuzda henüz soru yok.') };
  const past = S.tests.filter(t => t.type === 'mixed').slice(0, 5);
  return {
    title: 'Karma Test',
    html: `<p class="hint">Seçtiğin derslerin havuzlarından karışık soru gelir; sorular derslere dengeli dağıtılır.</p>
    <form id="mixForm" class="panel" onsubmit="return false">
      <label class="lbl">Dersler <small>(${total} soru)</small></label>
      <div class="checks">${avail.map(c => `<label class="check"><input type="checkbox" name="c" value="${c.id}" checked><span>${c.icon} ${esc(c.short)}</span><em>${DB.qs(c.id).length}</em></label>`).join('')}</div>
      <div class="row-btns small"><button type="button" class="mini" data-act="checkAll" data-v="1">Tümünü seç</button><button type="button" class="mini" data-act="checkAll" data-v="0">Temizle</button></div>
      <label class="lbl">Soru sayısı</label>${chips('n', [[10, '10'], [20, '20'], [40, '40'], [60, '60'], [100, '100']], 20)}
      <label class="lbl">Mod</label>${chips('mode', [['practice', '✍️ Alıştırma (anında cevap)'], ['exam', '⏱️ Sınav (süreli, sonunda cevap)']], 'practice')}
      <label class="lbl">Soru seçimi</label>${chips('sel', [['smart', 'Akıllı'], ['unsolved', 'Çözülmemiş'], ['random', 'Rastgele']], 'smart')}
      <button class="btn primary big" data-act="startMixed">KARMA TESTİ BAŞLAT</button>
    </form>
    ${past.length ? `<h3 class="sec">Son karma testler</h3><div class="list">${past.map(testRow).join('')}</div>` : ''}`
  };
};

// ============================================================
// TEST OTURUMU
// ============================================================
async function startTest({ type, title, qids, mode = 'practice', timed = false, setKey = null, courseId = null, ordered = false }) {
  if (!qids.length) { toast('Bu seçimlerle uygun soru bulunamadı.'); return; }
  if (S.session && !(await confirmBox('Devam eden test var', `"${S.session.title}" silinip yeni test başlatılsın mı?`, 'Yeni testi başlat'))) return;
  const cids = [...new Set(qids.map(id => DB.get(id)?.courseId).filter(Boolean))];
  S.session = { id: Date.now(), type, title, qids, mode, setKey, courseId, cids, ans: Array(qids.length).fill(null), cur: 0, elapsed: 0,
    limit: timed ? qids.length * APP_CONFIG.examSecondsPerQuestion : 0, started: Date.now() };
  Store.save(); go('#/test');
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
      el.textContent = '⏱ ' + fmtTime(rem !== null ? rem : T.elapsed);
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
  const wait = needCourses(T.cids || ALL_IDS, 'Test'); if (wait) return wait;
  const qid = T.qids[T.cur], q = DB.get(qid), a = T.ans[T.cur], practice = T.mode === 'practice';
  const answered = a !== null && a !== -1, reveal = practice && answered;
  const n = T.qids.length, c = q && DB.course(q.courseId), u = q && DB.unit(q.unitId);
  const done = T.ans.filter(x => x !== null && x !== -1).length;
  const gridCls = i => {
    const x = T.ans[i], gq = DB.get(T.qids[i]);
    const k = x === null ? '' : x === -1 ? 'blank' : !practice ? 'done' : (gq && x === gq.answer ? 'ok' : 'bad');
    return k + (i === T.cur ? ' cur' : '');
  };
  const optsHtml = q ? q.options.map((o, i) => {
    let cls = '';
    if (reveal) cls = i === q.answer ? 'correct' : i === a ? 'wrong' : 'dim';
    else if (!practice && a === i) cls = 'picked';
    return `<button class="opt ${cls}" data-act="answer" data-i="${i}" ${reveal ? 'disabled' : ''}><span class="opt-l">${LETTERS[i]}</span><span class="opt-t">${esc(o)}</span></button>`;
  }).join('') : '';
  const info = q ? `${q.explanation ? `<p>${esc(q.explanation)}</p>` : ''}${q.source ? `<small>${esc(q.source)}</small>` : ''}` : '';
  const fb = reveal ? (a === q.answer
    ? `<div class="fb ok"><b>✅ DOĞRU</b>${info}</div>`
    : `<div class="fb bad"><b>❌ YANLIŞ</b><div class="fb-ans">Doğru cevap: <b>${LETTERS[q.answer]}</b> – ${esc(q.options[q.answer])}</div>${info}</div>`)
    : (a === -1 ? `<div class="fb blank">⚪ Boş bırakıldı. İstersen şimdi cevaplayabilirsin.</div>` : '');
  const isLast = T.cur === n - 1;
  return {
    title: T.mode === 'exam' ? 'Sınav' : 'Test',
    html: `<div class="qhead">
        <div class="qmeta"><strong>${c ? esc(c.short) : ''}${u ? ` · Ünite ${u.no}` : ''}</strong><span>${esc(T.title)}</span></div>
        <div class="qcount"><b>${T.cur + 1}</b>/${n}<span id="timer" class="timer">⏱ ${fmtTime(T.limit ? T.limit - T.elapsed : T.elapsed)}</span></div>
      </div>
      <div class="progress-line">${bar(pct(done, n))}</div>
      <div class="qtools">
        <button class="tool ${S.fav[qid] ? 'on' : ''}" data-act="fav" data-id="${qid}" aria-label="Favori">⭐</button>
        <button class="tool ${S.later[qid] ? 'on' : ''}" data-act="later" data-id="${qid}" aria-label="Daha sonra">🔖</button>
        <button class="tool" data-act="toggleGrid" aria-label="Soru haritası">▦ ${done}/${n}</button>
        ${q ? `<span class="diff">${DIFF[q.difficulty][0]}</span>` : ''}
        <button class="tool end" data-act="finish">Bitir</button>
      </div>
      <div class="qgrid-wrap" id="qgrid" hidden>
        <div class="qgrid">${T.qids.map((_, i) => `<button class="${gridCls(i)}" data-act="goto" data-i="${i}">${i + 1}</button>`).join('')}</div>
        <p class="legend">${practice ? '<i class="ok"></i>Doğru <i class="bad"></i>Yanlış' : '<i class="done"></i>İşaretli'} <i class="blank"></i>Boş <i></i>Cevapsız</p>
      </div>
      ${q ? `<article class="qtext">${esc(q.question)}</article><div class="opts">${optsHtml}</div>${fb}`
          : `<p class="hint">Bu soru havuzdan kaldırılmış. Sonrakine geçebilirsin.</p>`}
      <div class="actionbar">
        <button class="btn ghost" data-act="prev" ${T.cur === 0 ? 'disabled' : ''}>←</button>
        <button class="btn ghost" data-act="blank" ${answered ? 'disabled' : ''}>Boş bırak</button>
        ${isLast ? `<button class="btn primary" data-act="finish">Bitir ✓</button>` : `<button class="btn primary" data-act="next">Sonraki →</button>`}
      </div>`,
    after: () => { startTimer(); const key = T.id + ':' + T.cur; if (lastCur !== key) { lastCur = key; window.scrollTo(0, 0); } },
    keepScroll: true
  };
};
function answer(i) {
  const T = S.session; if (!T) return;
  const q = DB.get(T.qids[T.cur]); if (!q) return;
  const prev = T.ans[T.cur];
  if (T.mode === 'practice') {
    if (prev !== null && prev !== -1) return;
    T.ans[T.cur] = i; record(q.id, i === q.answer ? 'c' : 'w'); bumpDaily();
    if (navigator.vibrate) navigator.vibrate(i === q.answer ? 15 : [30, 40, 30]);
    Store.save(); render();
    if (S.settings.autoNext && i === q.answer && T.cur < T.qids.length - 1) setTimeout(() => { if (S.session === T && T.ans[T.cur] === i) move(1); }, 700);
    return;
  }
  T.ans[T.cur] = prev === i ? null : i;
  if (T.ans[T.cur] !== null && T.cur < T.qids.length - 1) T.cur++;
  Store.save(); render();
}
function move(d) { const T = S.session; if (!T) return; T.cur = Math.min(T.qids.length - 1, Math.max(0, T.cur + d)); Store.save(); render(); }

async function finishTest(auto = false) {
  const T = S.session; if (!T) return;
  const unanswered = T.ans.filter(x => x === null || x === -1).length;
  if (!auto && !(await confirmBox('Testi bitir', unanswered ? `${unanswered} soru boş. Bitirilsin mi?` : 'Test bitirilsin mi?', 'Bitir'))) return;
  stopTimer();
  const res = { id: T.id, type: T.type, setKey: T.setKey || null, courseId: T.courseId || null, title: T.title, mode: T.mode, date: Date.now(), dur: T.elapsed,
    total: T.qids.length, c: 0, w: 0, b: 0, by: {}, byUnit: {}, qids: T.qids, ans: T.ans.map(x => (x === null ? -1 : x)) };
  let counted = 0;
  T.qids.forEach((qid, i) => {
    const q = DB.get(qid), x = T.ans[i];
    const k = !q || x === null || x === -1 ? 'b' : x === q.answer ? 'c' : 'w';
    res[k]++;
    if (!q) return;
    const bc = res.by[q.courseId] || (res.by[q.courseId] = { t: 0, c: 0, w: 0, b: 0 }); bc.t++; bc[k]++;
    const bu = res.byUnit[q.unitId] || (res.byUnit[q.unitId] = { t: 0, c: 0, w: 0, b: 0 }); bu.t++; bu[k]++;
    if (k === 'b') record(qid, 'b');
    else if (T.mode === 'exam') { record(qid, k); counted++; }
  });
  if (counted) bumpDaily(counted);
  res.net = +(res.c - res.w / 4).toFixed(2);
  res.pct = pct(res.c, res.total);
  S.tests.unshift(res);
  S.tests = S.tests.slice(0, APP_CONFIG.testHistoryLimit);
  S.tests.forEach((t, i) => { if (i >= APP_CONFIG.testDetailLimit) { delete t.qids; delete t.ans; } });
  S.counters[T.mode === 'exam' ? 'exams' : 'tests']++;
  S.session = null; Store.save();
  go('#/sonuc/' + res.id);
}

// ---------------- SONUÇ ----------------
ROUTES.sonuc = (id, filter = 'wrong') => {
  const t = S.tests.find(x => String(x.id) === String(id));
  if (!t) return { title: 'Sonuç', html: empty('📄', 'Sonuç bulunamadı.', `<a class="btn primary" href="#/home">Ana sayfa</a>`) };
  const cids = Object.keys(t.by || {});
  const wait = needCourses(cids.length ? cids : ALL_IDS, 'Sonuç'); if (wait) return wait;
  const review = t.qids ? t.qids.map((qid, i) => ({ q: DB.get(qid), a: t.ans[i] })).filter(x => x.q) : [];
  const kind = x => (x.a === -1 ? 'blank' : x.a === x.q.answer ? 'ok' : 'wrong');
  const shown = review.filter(x => filter === 'all' || kind(x) === filter);
  const retry = review.filter(x => kind(x) !== 'ok').length;
  const by = Object.entries(t.by || {});
  const units = Object.entries(t.byUnit || {}).sort((a, b) => pct(a[1].c, a[1].t) - pct(b[1].c, b[1].t));
  const row = (label, v) => { const p = pct(v.c, v.t); return `<div class="brow"><span>${label}</span><small>${v.c}/${v.t}</small><b class="t-${tone(p)}">%${p}</b>${bar(p, tone(p))}</div>`; };
  return {
    title: 'Sonuç',
    html: `<section class="result-hero t-${tone(t.pct)}"><div class="ring" style="--p:${t.pct}"><b>%${t.pct}</b><span>başarı</span></div>
        <div><h2>${esc(t.title)}</h2><p>${fmtDate(t.date)} · ${fmtTime(t.dur)}</p></div></section>
      <div class="statgrid">
        <div class="ok"><b>${t.c}</b><span>Doğru</span></div><div class="bad"><b>${t.w}</b><span>Yanlış</span></div>
        <div class="mut"><b>${t.b}</b><span>Boş</span></div><div><b>${t.net}</b><span>Net (4Y = 1D)</span></div>
      </div>
      ${retry ? `<button class="btn primary big" data-act="retryResult" data-id="${t.id}">🔁 Yanlış ve boşları tekrar çöz (${retry})</button>` : ''}
      <a class="btn ghost block" href="#/home">Ana sayfa</a>
      ${by.length > 1 ? `<h3 class="sec">Ders bazında</h3><div class="panel">${by.map(([cid, v]) => row(esc(DB.course(cid)?.short || cid), v)).join('')}</div>` : ''}
      ${units.length > 1 ? `<h3 class="sec">Ünite bazında</h3><div class="panel">${units.map(([uid, v]) => { const u = DB.unit(uid); return row(u ? `${esc(DB.course(u.courseId).short)} · ${esc(u.title)}` : uid, v); }).join('')}</div>` : ''}
      ${review.length ? `<h3 class="sec">Soruları incele</h3>
      <div class="seg small">${[['wrong', `❌ ${t.w}`], ['blank', `⚪ ${t.b}`], ['ok', `✅ ${t.c}`], ['all', 'Tümü']].map(([k, l]) => `<a class="${filter === k ? 'on' : ''}" href="#/sonuc/${t.id}/${k}">${l}</a>`).join('')}</div>
      <div class="list">${shown.length ? shown.map(x => reviewCard(x.q, x.a)).join('') : empty('✔️', 'Bu filtrede soru yok.')}</div>` : ''}`
  };
};
function reviewCard(q, a) {
  const c = DB.course(q.courseId), u = DB.unit(q.unitId);
  return `<details class="card review"><summary><small>${esc(c.short)} · Ünite ${u.no}${a === undefined ? '' : a === -1 ? ' · ⚪ Boş' : a === q.answer ? ' · ✅' : ` · ❌ Cevabın: ${LETTERS[a]}`}</small><span class="clamp">${esc(q.question)}</span></summary>
    <ol class="ropts">${q.options.map((o, i) => `<li class="${i === q.answer ? 'correct' : i === a ? 'wrong' : ''}"><b>${LETTERS[i]})</b> ${esc(o)}</li>`).join('')}</ol>
    ${q.explanation ? `<p class="rexp">${esc(q.explanation)}</p>` : ''}${q.source ? `<small class="rref">${esc(q.source)}</small>` : ''}
    <div class="row-btns small"><button class="mini ${S.fav[q.id] ? 'on' : ''}" data-act="favList" data-id="${q.id}">⭐ Favori</button></div></details>`;
}

// ============================================================
// YANLIŞLARIM
// ============================================================
ROUTES.yanlislar = (cid = 'all') => {
  const wait = needCourses(ALL_IDS, 'Yanlışlarım'); if (wait) return wait;
  let list = wrongList();
  if (cid !== 'all') list = list.filter(q => q.courseId === cid);
  list.sort((a, b) => (S.q[b.id].p - S.q[a.id].p) || (S.q[b.id].t - S.q[a.id].t));
  const active = list.filter(q => S.q[q.id].p > 0).length;
  const prio = p => (p >= 6 ? ['high', 'Yüksek öncelik'] : p >= 3 ? ['mid', 'Orta öncelik'] : p > 0 ? ['low', 'Düşük öncelik'] : ['done', 'Öğrenildi']);
  const withWrongs = COURSES.filter(c => DB.qs(c.id).some(q => S.q[q.id]?.w > 0));
  return {
    title: 'Yanlışlarım',
    html: `<div class="panel"><div class="split"><div><b class="big-n">${active}</b><span>tekrar bekliyor</span></div><div><b class="big-n mut">${list.length - active}</b><span>öğrenildi</span></div></div>
      ${withWrongs.length > 1 ? `<select class="select" data-act="nav" data-prefix="#/yanlislar/"><option value="all">Tüm dersler</option>${withWrongs.map(c => `<option value="${c.id}" ${c.id === cid ? 'selected' : ''}>${esc(c.short)}</option>`).join('')}</select>` : ''}
      <button class="btn primary big" data-act="retryWrongs" data-c="${cid}" data-n="20" ${active ? '' : 'disabled'}>🔁 Yanlışlarımı tekrar çöz</button>
      <button class="btn ghost block" data-act="retryWrongs" data-c="${cid}" data-n="all" ${list.length ? '' : 'disabled'}>Tümünü çöz (${list.length})</button>
      <p class="hint">Yanlış yaptıkça öncelik yükselir, doğru çözdükçe düşer.</p></div>
      <div class="list">${list.length ? list.slice(0, 150).map(q => {
        const r = S.q[q.id], [pc, pl] = prio(r.p);
        return `<div class="wrong-item"><div class="wi-head"><span class="prio ${pc}">${pl}</span><span class="hist">${[...r.h].map(x => `<i class="${x}"></i>`).join('')}</span></div>
          ${reviewCard(q)}<small class="wi-meta">✖ ${r.w} kez yanlış · son ${fmtDate(r.t)}</small></div>`;
      }).join('') : empty('🎉', 'Yanlış yaptığın soru yok.', `<a class="btn primary" href="#/dersler">Soru çöz</a>`)}</div>`
  };
};

// ============================================================
// FAVORİLER / DAHA SONRA
// ============================================================
ROUTES.favoriler = (tab = 'fav') => {
  const wait = needCourses(ALL_IDS, 'Favoriler'); if (wait) return wait;
  const src = tab === 'later' ? S.later : S.fav;
  const list = Object.keys(src).map(DB.get).filter(Boolean).sort((a, b) => src[b.id] - src[a.id]);
  const cnt = o => Object.keys(o).filter(DB.get).length;
  return {
    title: 'Favoriler',
    html: `<div class="seg"><a class="${tab === 'fav' ? 'on' : ''}" href="#/favoriler/fav">⭐ Favoriler <em>${cnt(S.fav)}</em></a><a class="${tab === 'later' ? 'on' : ''}" href="#/favoriler/later">🔖 Daha sonra <em>${cnt(S.later)}</em></a></div>
      <div class="row-btns">
        <button class="btn primary" data-act="favStart" data-tab="${tab}" data-mode="all" ${list.length ? '' : 'disabled'}>Tümünü çöz</button>
        <button class="btn secondary" data-act="favStart" data-tab="${tab}" data-mode="rand" ${list.length ? '' : 'disabled'}>Rastgele 20</button>
        <button class="btn ghost" data-act="favClear" data-tab="${tab}" ${list.length ? '' : 'disabled'}>Temizle</button>
      </div>
      <div class="list">${list.length ? list.map(q => reviewCard(q)).join('') : empty(tab === 'later' ? '🔖' : '⭐', 'Test sırasında ⭐ veya 🔖 ile işaretlediğin sorular burada toplanır.')}</div>`
  };
};

// ============================================================
// ÇÖZÜM GEÇMİŞİ
// ============================================================
let histLimit = 100;
ROUTES.gecmis = (res = 'all', cid = 'all') => {
  const wait = needCourses(ALL_IDS, 'Çözüm Geçmişi'); if (wait) return wait;
  const lastOf = q => S.q[q.id].h.slice(-1);
  let list = DB.all().filter(q => S.q[q.id]?.h);
  if (res !== 'all') list = list.filter(q => lastOf(q) === res);
  if (cid !== 'all') list = list.filter(q => q.courseId === cid);
  list.sort((a, b) => S.q[b.id].t - S.q[a.id].t);
  const label = { c: '✅ Doğru', w: '❌ Yanlış', b: '⚪ Boş' };
  return {
    title: 'Çözüm Geçmişi',
    html: `<div class="seg small">${[['all', 'Tümü'], ['c', 'Doğru'], ['w', 'Yanlış'], ['b', 'Boş']].map(([k, l]) => `<a class="${res === k ? 'on' : ''}" href="#/gecmis/${k}/${cid}">${l}</a>`).join('')}</div>
      <select class="select" data-act="nav" data-prefix="#/gecmis/${res}/"><option value="all">Tüm dersler</option>${COURSES.filter(c => DB.qs(c.id).length).map(c => `<option value="${c.id}" ${c.id === cid ? 'selected' : ''}>${esc(c.short)}</option>`).join('')}</select>
      <p class="hint">${list.length} soru</p>
      <div class="list">${list.length ? list.slice(0, histLimit).map(q => `<div class="hist-item"><small>${label[lastOf(q)]} · ${fmtDate(S.q[q.id].t)} · ${S.q[q.id].a} kez</small>${reviewCard(q)}</div>`).join('')
        + (list.length > histLimit ? `<button class="btn ghost block" data-act="more">Daha fazla göster</button>` : '') : empty('📜', 'Bu filtrede çözülmüş soru yok.')}</div>`
  };
};

// ============================================================
// ZAYIF ÜNİTELER
// ============================================================
ROUTES.zayif = () => {
  const wait = needCourses(ALL_IDS, 'Zayıf Üniteler'); if (wait) return wait;
  const list = weakUnits();
  return {
    title: 'Zayıf Üniteler',
    html: `<p class="hint">En az ${APP_CONFIG.weakMinSolved} soru çözülmüş ve başarısı %${APP_CONFIG.weakThreshold} altında kalan üniteler.</p>
      <div class="list">${list.length ? list.map(weakRow).join('') : empty('💪', 'Şu an zayıf ünite yok. Soru çözdükçe burası güncellenir.', `<a class="btn primary" href="#/dersler">Soru çöz</a>`)}</div>`
  };
};

// ============================================================
// İSTATİSTİK
// ============================================================
ROUTES.istatistik = () => {
  const wait = needCourses(ALL_IDS, 'İstatistik'); if (wait) return wait;
  let c = 0, w = 0, b = 0, uniq = 0; const perC = {};
  DB.all().forEach(q => {
    const r = S.q[q.id]; if (!r) return;
    c += r.c; w += r.w; b += r.b; if (r.l && r.l !== 'b') uniq++;
    const x = perC[q.courseId] || (perC[q.courseId] = { a: 0, w: 0 }); x.a += r.c + r.w; x.w += r.w;
  });
  const most = Object.entries(perC).sort((x, y) => y[1].a - x[1].a)[0];
  const mostW = Object.entries(perC).filter(x => x[1].w).sort((x, y) => y[1].w - x[1].w)[0];
  const days = []; for (let i = 13; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); days.push([d, S.daily.days[dayKey(d)] || 0]); }
  const maxD = Math.max(10, ...days.map(x => x[1]));
  const withQs = COURSES.filter(co => DB.qs(co.id).length);
  return {
    title: 'İstatistik',
    html: `<div class="statgrid">
        <div class="wide t-${tone(pct(c, c + w))}"><b>%${pct(c, c + w)}</b><span>Genel başarı · ${c + w} cevap</span>${bar(pct(c, c + w), tone(pct(c, c + w)))}</div>
        <div class="ok"><b>${c}</b><span>Doğru</span></div><div class="bad"><b>${w}</b><span>Yanlış</span></div>
        <div class="mut"><b>${b}</b><span>Boş</span></div><div><b>${uniq}</b><span>Farklı soru</span></div>
        <div><b>${S.counters.tests}</b><span>Test</span></div><div><b>${S.counters.exams}</b><span>Deneme / sınav</span></div>
        <div><b class="sm">${most ? esc(DB.course(most[0]).short) : '—'}</b><span>En çok çözülen</span></div>
        <div><b class="sm">${mostW ? esc(DB.course(mostW[0]).short) : '—'}</b><span>En çok yanlış</span></div>
      </div>
      <h3 class="sec">Son 14 gün</h3>
      <div class="panel days">${days.map(([d, n]) => `<div class="day" title="${n} soru"><i style="height:${Math.round((n / maxD) * 100)}%"></i><span>${d.getDate()}</span></div>`).join('')}</div>
      <h3 class="sec">Ders ve ünite başarısı</h3>
      <div class="list">${withQs.map(co => {
        const s = courseStats(co.id);
        return `<details class="card stat-course"><summary><span>${co.icon} ${esc(co.short)}</span><small>${s.solved}/${s.total}</small><b class="t-${tone(s.pct)}">${s.solved ? '%' + s.pct : '—'}</b>${bar(s.pct, tone(s.pct))}</summary>
          ${DB.units(co.id).map(u => { const us = unitStats(u.id); return `<a class="brow" href="#/unite/${u.id}"><span>${u.no}. ${esc(u.title)}</span><small>${us.solved}/${us.total}</small><b class="t-${tone(us.pct)}">${us.solved ? '%' + us.pct : '—'}</b>${bar(us.pct, tone(us.pct))}</a>`; }).join('')}</details>`;
      }).join('')}</div>
      ${S.tests.length ? `<h3 class="sec">Son testler</h3><div class="list">${S.tests.slice(0, 10).map(testRow).join('')}</div>` : ''}`
  };
};

// ============================================================
// AYARLAR VE SİSTEM DURUMU
// ============================================================
ROUTES.ayarlar = () => {
  const wait = needCourses(ALL_IDS, 'Ayarlar'); if (wait) return wait;
  const st = S.settings;
  return {
    title: 'Ayarlar',
    html: `<div class="panel"><h3>Görünüm</h3>
        <label class="lbl">Yazı boyutu</label>
        <div class="row-btns small"><button class="mini" data-act="fs" data-d="-1">A−</button><span class="fs-val">${st.fs}px</span><button class="mini" data-act="fs" data-d="1">A+</button></div>
        <label class="lbl">Tema</label>
        <div class="row-btns small"><button class="mini ${st.theme === 'dark' ? 'on' : ''}" data-act="theme" data-v="dark">🌙 Koyu</button><button class="mini ${st.theme === 'light' ? 'on' : ''}" data-act="theme" data-v="light">☀️ Açık</button></div>
        <label class="check wide"><input type="checkbox" data-act="autoNext" ${st.autoNext ? 'checked' : ''}><span>Doğru cevaptan sonra otomatik sonraki soruya geç</span></label>
      </div>
      <div class="panel"><h3>Soru dosyaları</h3>
        <div class="files">${COURSES.map(c => {
          const s = DB.status(c.id), e = DB.errors(c.id);
          return `<div class="file-row"><span>${c.icon} ${esc(c.short)}</span><code>${esc(c.file)}</code>
            <b class="${s === 'ok' ? (e.length ? 't-mid' : 't-ok') : 't-bad'}">${s === 'ok' ? `${DB.qs(c.id).length} soru${DB.cards(c.id).length ? ` · ${DB.cards(c.id).length} kart` : ''}${e.length ? ` · ${e.length} hata` : ''}` : '⚠️ ' + esc(DB.failure(c.id) || 'yüklenemedi')}</b></div>`;
        }).join('')}</div>
        <p class="hint">Sürüm ${APP_VERSION}. Soru dosyası güncellenince index.html içindeki sürüm numarasını artırmak tarayıcı önbelleğini yeniler.</p>
      </div>
      <div class="panel"><h3>Veri</h3>
        <p class="hint">İlerlemen bu tarayıcıda saklanır. Telefon değiştirirken yedeği kullan.</p>
        <div class="row-btns">
          <button class="btn secondary" data-act="backup">💾 Yedek indir</button>
          <label class="btn secondary">📂 Yedek yükle<input type="file" accept=".json" data-act="restore" hidden></label>
        </div>
        <button class="btn danger block" data-act="reset">İlerlemeyi sıfırla</button>
      </div>`
  };
};

// ============================================================
// EYLEMLER
// ============================================================
function download(name, text, type = 'application/json') {
  const blob = new Blob([text], { type: type + ';charset=utf-8' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
function toggleMark(kind, id) {
  if (S[kind][id]) delete S[kind][id]; else S[kind][id] = Date.now();
  Store.save(); toast(S[kind][id] ? (kind === 'fav' ? '⭐ Favorilere eklendi' : '🔖 Daha sonra çöz listesine eklendi') : 'İşaret kaldırıldı');
}
const ACT = {
  back: () => (history.length > 1 ? history.back() : go('#/home')),
  goSettings: () => go('#/ayarlar'),
  reload: () => location.reload(),
  goal: d => { S.daily.target = +d.n; Store.save(); render(); },
  quickMix: () => {
    const groups = COURSES.map(c => DB.qs(c.id)).filter(g => g.length);
    startTest({ type: 'mixed', title: 'Hızlı karma · 20 soru', qids: pickBalanced(groups, 20, 'smart') });
  },
  quickUnit: d => { const u = DB.unit(d.id); startTest({ type: 'unit', courseId: u.courseId, title: `${DB.course(u.courseId).short} · ${u.title}`, qids: pickQuestions(DB.unitQs(d.id), 20, d.sel) }); },
  startSetup: d => {
    const f = readForm('#setupForm'), n = f.get('n') === 'all' ? 'all' : +f.get('n');
    const u = d.scope === 'unit' ? DB.unit(d.id) : null, cid = u ? u.courseId : d.id;
    const pool = u ? DB.unitQs(d.id) : DB.qs(cid);
    startTest({ type: d.scope, courseId: cid, title: u ? `${DB.course(cid).short} · ${u.title}` : `${DB.course(cid).short} · Karışık`, qids: pickQuestions(pool, n, f.get('sel'), f.get('diff')) });
  },
  startSet: d => {
    const qs = DB.setQs(d.c, d.s), exam = d.m === 'exam';
    startTest({ type: exam ? 'exam' : 'book', courseId: d.c, title: `${DB.course(d.c).short} · ${d.s}`, qids: qs.map(q => q.id), mode: exam ? 'exam' : 'practice', timed: exam, setKey: d.c + '|' + d.s });
  },
  startCourseExam: d => {
    const f = readForm('#denemeForm'), all = DB.qs(d.c);
    const n = f.get('n') === 'all' ? all.length : +f.get('n');
    const groups = DB.units(d.c).map(u => all.filter(q => q.unitId === u.id));
    const no = S.tests.filter(t => t.courseId === d.c && t.type === 'exam' && !t.setKey).length + 1;
    startTest({ type: 'exam', courseId: d.c, title: `${DB.course(d.c).short} · Deneme ${no}`, qids: pickBalanced(groups, n, 'smart'), mode: 'exam', timed: f.get('timed') === '1' });
  },
  checkAll: (d, el) => el.closest('form').querySelectorAll('input[name=c]').forEach(i => { i.checked = d.v === '1'; }),
  startMixed: () => {
    const f = readForm('#mixForm'), cs = f.all('c');
    if (!cs.length) return toast('En az bir ders seç.');
    const exam = f.get('mode') === 'exam';
    startTest({ type: 'mixed', title: `Karma ${exam ? 'sınav' : 'test'} · ${cs.length} ders`, qids: pickBalanced(cs.map(DB.qs), +f.get('n'), f.get('sel')), mode: exam ? 'exam' : 'practice', timed: exam });
  },
  answer: d => answer(+d.i),
  prev: () => move(-1), next: () => move(1),
  goto: d => { S.session.cur = +d.i; Store.save(); render(); },
  toggleGrid: () => { const g = $('#qgrid'); if (g) g.hidden = !g.hidden; },
  blank: () => { const T = S.session; if (T.ans[T.cur] === null) T.ans[T.cur] = -1; if (T.cur < T.qids.length - 1) T.cur++; Store.save(); render(); },
  finish: () => finishTest(false),
  fav: d => { toggleMark('fav', d.id); render(); },
  later: d => { toggleMark('later', d.id); render(); },
  favList: (d, el) => { toggleMark('fav', d.id); el.classList.toggle('on', !!S.fav[d.id]); },
  favStart: d => {
    const ids = Object.keys(d.tab === 'later' ? S.later : S.fav).filter(DB.get);
    startTest({ type: 'fav', title: d.tab === 'later' ? 'Daha sonra çöz' : 'Favoriler', qids: d.mode === 'rand' ? shuffle(ids).slice(0, 20) : shuffle(ids) });
  },
  favClear: async d => { if (await confirmBox('Listeyi temizle', 'Bu listedeki tüm işaretler kaldırılsın mı?', 'Temizle', true)) { S[d.tab === 'later' ? 'later' : 'fav'] = {}; Store.save(); render(); } },
  retryResult: d => {
    const t = S.tests.find(x => String(x.id) === d.id);
    const ids = t.qids.filter((qid, i) => { const q = DB.get(qid); return q && t.ans[i] !== q.answer; });
    startTest({ type: 'wrongs', title: 'Tekrar: ' + t.title, qids: shuffle(ids) });
  },
  retryWrongs: d => {
    let list = wrongList(); if (d.c && d.c !== 'all') list = list.filter(q => q.courseId === d.c);
    const ids = d.n === 'all' ? shuffle(list.map(q => q.id)) : pickQuestions(list.filter(q => S.q[q.id].p > 0), +d.n, 'wrong');
    startTest({ type: 'wrongs', title: 'Yanlışları tekrar', qids: ids });
  },
  more: () => { histLimit += 100; render(); },
  cardStart: d => startCards(d.c, d.m),
  cardFlip: () => { if (!S.cardSession || S.cardSession.open) return; S.cardSession.open = true; Store.save(); render(); },
  cardMark: d => {
    const K = S.cardSession, id = K.ids[K.cur];
    const r = S.cards[id] || (S.cards[id] = { k: 0, u: 0, l: '', t: 0 });
    if (!(id in K.res)) bumpDaily();
    r[d.v]++; r.l = d.v; r.t = Date.now(); K.res[id] = d.v;
    K.cur++; K.open = false; Store.save(); render();
  },
  cardPrev: () => { const K = S.cardSession; K.cur = Math.max(0, K.cur - 1); K.open = false; Store.save(); render(); },
  cardEnd: () => { S.cardSession.cur = S.cardSession.ids.length; Store.save(); render(); },
  cardRetry: () => {
    const K = S.cardSession, ids = K.ids.filter(id => K.res[id] === 'u');
    S.cardSession = { ...K, title: DB.course(K.cid).short + ' · Tekrar', ids: shuffle(ids), cur: 0, open: false, res: {} };
    Store.save(); render();
  },
  cardClose: () => { const cid = S.cardSession?.cid; S.cardSession = null; Store.save(); go(cid ? `#/ders/${cid}/kartlar` : '#/kartlar'); },
  fs: d => { S.settings.fs = Math.min(22, Math.max(14, S.settings.fs + +d.d)); Store.save(); applySettings(); render(); },
  theme: d => { S.settings.theme = d.v; Store.save(); applySettings(); render(); },
  backup: () => download(`misyon-koruma-yedek-${dayKey()}.json`, JSON.stringify(S)),
  reset: async () => {
    if (!(await confirmBox('İlerlemeyi sıfırla', 'Tüm çözüm geçmişi, yanlışlar, favoriler ve istatistikler silinecek.', 'Sıfırla', true))) return;
    const keep = S.settings; S = DEFAULT_STATE(); S.settings = keep; Store.save(); toast('İlerleme sıfırlandı.'); go('#/home');
  }
};

document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if (!el || el.tagName === 'SELECT' || el.tagName === 'INPUT' || !el.dataset.act) return;
  const fn = ACT[el.dataset.act]; if (!fn) return;
  e.preventDefault(); if (el.disabled) return;
  fn(el.dataset, el);
});
document.addEventListener('change', async e => {
  const el = e.target, act = el.dataset.act;
  if (act === 'nav') return go(el.dataset.prefix + el.value);
  if (act === 'autoNext') { S.settings.autoNext = el.checked; Store.save(); return; }
  if (act === 'restore' && el.files[0]) {
    try {
      const data = JSON.parse(await el.files[0].text());
      if (data.v !== 4 || typeof data.q !== 'object') throw new Error('biçim');
      if (!(await confirmBox('Yedeği yükle', 'Mevcut ilerleme yedektekiyle değiştirilecek.', 'Yükle'))) return;
      S = Object.assign(DEFAULT_STATE(), data); Store.save(); applySettings(); toast('Yedek yüklendi.'); go('#/home');
    } catch { toast('Yedek dosyası geçersiz.'); }
  }
});
document.addEventListener('keydown', e => {
  if (!$('#modal').hidden || e.ctrlKey || e.metaKey || e.altKey || /INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName)) return;
  const view = document.body.dataset.view;
  if (view === 'test' && S.session) {
    const k = e.key.toUpperCase(), idx = LETTERS.indexOf(k) >= 0 ? LETTERS.indexOf(k) : '12345'.indexOf(e.key);
    if (idx >= 0) { const b = document.querySelectorAll('.opt')[idx]; if (b && !b.disabled) answer(idx); }
    else if (e.key === 'ArrowRight') move(1);
    else if (e.key === 'ArrowLeft') move(-1);
  } else if (view === 'kart' && S.cardSession && S.cardSession.cur < S.cardSession.ids.length) {
    const K = S.cardSession;
    if (!K.open && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); ACT.cardFlip(); }
    else if (K.open && e.key === '1') ACT.cardMark({ v: 'u' });
    else if (K.open && (e.key === '2' || e.key === 'Enter')) ACT.cardMark({ v: 'k' });
  }
});
document.addEventListener('visibilitychange', () => { if (document.hidden) Store.save(); });
window.addEventListener('pagehide', () => Store.save());

// ---------------- başlat ----------------
Store.load();
applySettings();
render();
// Açılışta tüm ders dosyalarını arka planda yükle (ana sayfa sayıları, karma test ve istatistikler için)
setTimeout(() => DB.loadAll().then(() => { const n = currentRoute().name; if (['home', 'dersler'].includes(n)) render(); }), 50);
