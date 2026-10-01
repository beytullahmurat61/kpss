// ============================================================
// MİSYON KORUMA – UYGULAMA MOTORU
// Ders → Ünite → Test → Sonuç → Yanlışlar → Tekrar · Denemeler · Karma test · Kartlar
// Her dersin verisi kendi dosyasından (sorular-<ders>.js) istek üzerine yüklenir.
// ============================================================
'use strict';

// ---- KALICI DEPOLAMA KİLİDİ: tarayıcı temizliğinde ilerlemenin silinmesini engeller ----
if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});

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
      // Ünite içi kategori: isExercise = Kitap Alıştırması, isBank = Soru Bankası (ikisi de yoksa banka sayılır)
      const isEx = r.isExercise === true || r.alistirma === true;
      const isBk = r.isBank === true || r.banka === true || !isEx;
      const q = {
        id, courseId: cid, unitId: `${cid}_u${unitNo}`, unitNo,
        difficulty: DIFF_MAP[fold(r.zorluk)] || 'medium',
        question: String(r.soru).trim(), options: opts, answer: ans,
        explanation: String(r.aciklama || '').trim(), source: String(r.kaynak || '').trim(),
        set: r.deneme ? String(r.deneme).trim() : '', setNo: parseInt(r.sira, 10) || 0,
        setKind: fold(r.denemeTur || ''),            // 'unite' | 'genel' (isteğe bağlı; yoksa addan tahmin edilir)
        isExercise: isEx, isBank: isBk,
        isUpdated: r.isUpdated === true || r.guncel === true   // güncel mevzuat değişikliği etiketi
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
    const sets = [...setMap.entries()].map(([name, qs]) => ({
      name, qs: qs.sort((a, b) => a.setNo - b.setNo),
      kind: (qs[0].setKind === 'genel' || qs[0].setKind === 'unite') ? qs[0].setKind : (/genel|bitirme|deneme sinavi/.test(fold(name)) ? 'genel' : 'unite')
    }))
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

const DAY = 86400000;
function record(qid, res) {
  const r = S.q[qid] || (S.q[qid] = { a: 0, c: 0, w: 0, b: 0, h: '', l: '', t: 0, p: 0 });
  r.a++; r[res]++; r.h = (r.h + res).slice(-10); r.t = Date.now();
  if (res !== 'b' || !r.l || r.l === 'b') r.l = res;
  if (res === 'w') r.p = Math.min((r.p || 0) + 3, 9);
  else if (res === 'c' && r.p > 0) r.p = Math.max(r.p - 2, 0);
  // Leitner: yanlış → 1. kutu ve hemen tekrar; doğru → bir üst kutu, aralık uzar
  if (res === 'w') { r.bx = 1; r.due = Date.now(); }
  else if (res === 'c') { r.bx = Math.min(5, (r.bx || 1) + 1); r.due = Date.now() + (APP_CONFIG.leitnerDays[r.bx] || 0) * DAY; }
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

// ---- Leitner öncelik mantığı ----
// "Tekrar bekleyen yanlış": hâlâ aktif yanlış (p>0) ve Leitner zamanı gelmiş
const isDueWrong = q => { const r = S.q[q.id]; return !!r && r.w > 0 && r.p > 0 && (!r.due || r.due <= Date.now()); };
const isUnsolved = q => { const r = S.q[q.id]; return !r || !r.l || r.l === 'b'; };
const isPriority = q => isUnsolved(q) || isDueWrong(q);

// Zorluk oranına göre seçim: her zorluk kotasının %80'i öncelikli sorulardan (çözülmemiş + bekleyen yanlış) gelir.
// ratio örn. { easy: .2, medium: .6, hard: .2 } ya da { hard: 1 }. Kota dolmazsa diğer sorularla tamamlanır.
function pickWeighted(pool, n, ratio) {
  const res = [], used = new Set();
  const take = (list, k) => { let c = 0; for (const q of list) { if (c >= k) break; if (used.has(q.id)) continue; used.add(q.id); res.push(q); c++; } return c; };
  const prio = shuffle(pool.filter(isPriority)), rest = shuffle(pool.filter(q => !isPriority(q)));
  const entries = Object.entries(ratio);
  const ks = entries.map(([, r]) => Math.round(n * r));
  ks[Math.min(1, ks.length - 1)] += n - ks.reduce((a, b) => a + b, 0);
  entries.forEach(([d], i) => {
    const k = Math.max(0, ks[i]), pd = prio.filter(q => q.difficulty === d), rd = rest.filter(q => q.difficulty === d);
    const c1 = take(pd, Math.round(k * APP_CONFIG.simPriority));
    const c2 = take(rd, k - c1);
    take(pd, k - c1 - c2);
  });
  if (res.length < n) take(prio, n - res.length);
  if (res.length < n) take(rest, n - res.length);
  return res;
}
// 100 soruluk gerçek sınav: resmi ders ağırlıkları + %80 öncelik + %20/%60/%20 zorluk
function buildSim() {
  const W = APP_CONFIG.simWeights, N = APP_CONFIG.simQuestions, ids = Object.keys(W);
  const pools = {}, quota = {}; let short = 0;
  ids.forEach(cid => { pools[cid] = DB.qs(cid); quota[cid] = Math.round(N * W[cid] / 100); });
  ids.forEach(cid => { if (pools[cid].length < quota[cid]) { short += quota[cid] - pools[cid].length; quota[cid] = pools[cid].length; } });
  // Havuzu yetmeyen dersin açığı, soru kalan derslere ağırlık sırasıyla dağıtılır
  for (let guard = 0; short > 0 && guard < 500; guard++) {
    const open = ids.filter(cid => pools[cid].length > quota[cid]).sort((a, b) => W[b] - W[a]);
    if (!open.length) break;
    for (const cid of open) { if (short <= 0) break; quota[cid]++; short--; }
  }
  const chosen = [];
  ids.forEach(cid => { if (quota[cid]) pickWeighted(pools[cid], quota[cid], APP_CONFIG.simDifficulty).forEach(q => chosen.push(q.id)); });
  return { qids: shuffle(chosen), quota };
}

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
  $('meta[name=theme-color]').setAttribute('content', { light: '#f4f6fa', oled: '#000000' }[S.settings.theme] || '#0A1128');
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
  // Derse girildiğinde arayüz o dersin vurgu rengine bürünür
  let acc = null;
  if (name === 'ders') acc = args[0]; else if (name === 'unite') acc = String(args[0] || '').replace(/_u\d+$/, ''); else if (name === 'ayar') acc = args[1];
  else if (name === 'test' && S.session) acc = S.session.courseId || (S.session.cids && S.session.cids.length === 1 ? S.session.cids[0] : null);
  const ac = acc && DB.course(acc);
  if (ac && ac.color && S.settings.theme !== 'light') document.documentElement.style.setProperty('--accent', ac.color);
  else document.documentElement.style.removeProperty('--accent');
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
// ---------------- rütbe sistemi (toplam doğru sayısına göre) ----------------
const RANKS = [
  [0, 'Aday Memur', 0], [50, 'Polis Memuru', 1], [150, 'Kıdemli Polis Memuru', 1], [300, 'Başpolis Memuru', 2],
  [500, 'Komiser Yardımcısı', 2], [800, 'Komiser', 3], [1200, 'Başkomiser', 3], [1700, 'Emniyet Amiri', 4], [2500, 'Emniyet Müdürü', 5]
];
function rankOf(correct) {
  let i = 0; while (i + 1 < RANKS.length && correct >= RANKS[i + 1][0]) i++;
  const [from, name, stars] = RANKS[i], next = RANKS[i + 1];
  return { name, stars, next: next ? next[1] : null, need: next ? next[0] - correct : 0, p: next ? pct(correct - from, next[0] - from) : 100 };
}
const insignia = (stars, big = false) => `<span class="insignia${big ? ' big' : ''}" aria-hidden="true">${stars ? '★'.repeat(stars) : '◆'}</span>`;
// SVG ilerleme halkası
function ring(p, size = 64, sw = 7, label = `%${p}`) {
  const r = (size - sw) / 2, c = 2 * Math.PI * r, off = c * (1 - Math.min(100, Math.max(0, p)) / 100);
  return `<span class="ring" style="width:${size}px;height:${size}px"><svg viewBox="0 0 ${size} ${size}" aria-hidden="true">
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke-width="${sw}" class="ring-bg"/>
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke-width="${sw}" class="ring-fg" stroke-linecap="round"
      stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}" transform="rotate(-90 ${size / 2} ${size / 2})"/></svg>
    <b>${label}</b></span>`;
}
const hello = () => { const h = new Date().getHours(); return h < 6 ? 'İyi geceler' : h < 12 ? 'Günaydın' : h < 18 ? 'İyi günler' : 'İyi akşamlar'; };

ROUTES.home = () => {
  const today = todayCount(), target = S.daily.target;
  const sess = S.session, ks = S.cardSession && S.cardSession.cur < S.cardSession.ids.length ? S.cardSession : null;
  const ready = DB.allLoaded();
  const all = DB.all(), total = all.length;
  const ov = ready ? statsOf(all) : { solved: 0, correct: 0, pct: 0 };
  const wrongActive = ready ? all.filter(q => S.q[q.id]?.p > 0).length : 0;
  const weak = ready ? weakUnits() : [];
  const st = streak(), rk = rankOf(ov.correct);
  const lastSim = S.tests.find(t => t.type === 'sim');
  const simMin = Math.round(APP_CONFIG.simQuestions * APP_CONFIG.examSecondsPerQuestion / 60);
  return {
    title: 'Misyon Koruma',
    html: `
    <section class="hero">
      <div class="hero-txt"><p>${hello()}</p><h2>${esc(rk.name)}</h2>
        <small>${rk.next ? `${esc(rk.next)} rütbesine <b>${rk.need}</b> doğru` : 'En yüksek rütbedesin'}</small>
        <div class="rank-bar">${bar(rk.p)}</div></div>
      ${insignia(rk.stars, true)}
    </section>
    <section class="stats3">
      <div class="st"><span class="st-ico">🔥</span><b>${st}</b><small>gün seri</small>${bar(Math.min(100, st / 7 * 100))}</div>
      <button class="st" data-act="goalCycle" aria-label="Günlük hedefi değiştir"><span class="st-ico">🎯</span><b>${today}<em>/${target}</em></b><small>bugün · hedef ↻</small>${bar(pct(today, target))}</button>
      <div class="st"><span class="st-ico">📈</span><b>%${ov.pct}</b><small>başarı · ${ov.solved} soru</small>${bar(ov.pct, ov.solved ? tone(ov.pct) : '')}</div>
    </section>
    ${sess ? `<a class="resume" href="#/test"><span class="r-ico">▶</span><div><strong>Teste devam et</strong><small>${esc(sess.title)} · Soru ${sess.cur + 1} / ${sess.qids.length}</small></div><span class="chev">›</span></a>` : ''}
    ${ks ? `<a class="resume alt" href="#/kart"><span class="r-ico">🗂️</span><div><strong>Kart turuna devam et</strong><small>${esc(ks.title)} · ${ks.cur + 1} / ${ks.ids.length}</small></div><span class="chev">›</span></a>` : ''}
    <section class="actions">
      <button class="act a-mix" data-act="quickMix"><span class="act-ico">⚡</span><strong>Hızlı test</strong><small>Tüm derslerden 20 soru</small></button>
      <button class="act a-sim" data-act="startSim" ${ready ? '' : 'disabled'}><span class="act-ico">🎯</span><strong>Sınav simülatörü</strong><small>${APP_CONFIG.simQuestions} soru · ${simMin} dk</small></button>
    </section>
    ${lastSim ? `<a class="sim-last" href="#/sonuc/${lastSim.id}">Son simülasyon: net ${lastSim.net} · %${lastSim.pct} ›</a>` : ''}
    ${wrongActive ? `<button class="wrong-cta" data-act="retryWrongs" data-c="all" data-n="20"><span>🔁</span><div><strong>Yanlışlarını tekrar et</strong><small>${wrongActive} soru tekrar bekliyor</small></div><span class="chev">›</span></button>` : ''}
    <div class="sec-row"><h3 class="sec">Dersler</h3><a href="#/dersler">Tümü ›</a></div>
    <div class="course-grid">${COURSES.map(c => courseTile(c)).join('')}</div>
    ${weak.length ? `<h3 class="sec">Zayıf ünitelerin</h3><div class="list">${weak.slice(0, 3).map(weakRow).join('')}</div>
      ${weak.length > 3 ? `<a class="btn ghost block" href="#/zayif">Tümünü gör (${weak.length})</a>` : ''}` : ''}
    <h3 class="sec">Çalışma araçları</h3>
    <nav class="tiles">
      <a class="tile" href="#/kartlar"><span class="tile-ico">🗂️</span><span class="tile-label">Soru-cevap kartları</span></a>
      <a class="tile" href="#/oyun"><span class="tile-ico">🧩</span><span class="tile-label">Hafıza eşleştirme</span></a>
      <a class="tile" href="#/favoriler"><span class="tile-ico">⭐</span><span class="tile-label">Favoriler</span></a>
      <a class="tile" href="#/gecmis"><span class="tile-ico">📜</span><span class="tile-label">Çözüm geçmişi</span></a>
    </nav>
    <p class="foot">${ready ? `Havuzda ${total} soru` : 'Sorular yükleniyor…'} · v${APP_VERSION}</p>`,
    need: ready ? null : ALL_IDS
  };
};
function simPanel() { return ''; }
const tileStyle = c => `style="--c:${c.color || 'var(--brass)'}"`;
function courseTile(c) {
  const st = DB.status(c.id);
  const head = `<span class="ct-ico">${c.icon}</span><b>${esc(c.short)}</b>`;
  if (st === 'error') return `<a class="ctile err" ${tileStyle(c)} href="#/ders/${c.id}">${head}<small>⚠️ Dosya hatası</small></a>`;
  if (st !== 'ok') return `<a class="ctile" ${tileStyle(c)} href="#/ders/${c.id}">${head}<small>Yükleniyor…</small></a>`;
  const s = courseStats(c.id);
  if (!s.total) return `<a class="ctile dim" ${tileStyle(c)} href="#/ders/${c.id}">${head}<small>Soru bekleniyor</small></a>`;
  const done = pct(s.solved, s.total);
  return `<a class="ctile" ${tileStyle(c)} href="#/ders/${c.id}">${head}
    <small>${s.total} soru</small>
    <span class="ct-prog"><i style="width:${done}%"></i></span><span class="ct-pct">%${done} çözüldü</span>${s.solved ? `<span class="ct-score" title="Başarı">%${s.pct}</span>` : ''}</a>`;
}
const weakRow = ({ c, u, s }) => `<div class="card weak"><div class="c-body"><strong>${esc(c.short)} · Ünite ${u.no}</strong><span class="u-title">${esc(u.title)}</span>
  <small>${s.correct}/${s.solved} doğru</small>${bar(s.pct, 'bad')}</div><b class="score t-bad">%${s.pct}</b>
  <button class="btn primary block" data-act="quickUnit" data-id="${u.id}" data-sel="smart">Bu üniteden 20 soru çöz</button></div>`;

// ============================================================
// DERSLER
// ============================================================
ROUTES.dersler = () => ({
  title: 'Dersler',
  html: `<div class="course-grid big">${COURSES.map(c => courseTile(c)).join('')}</div>`,
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
      const s = unitStats(u.id), d = pct(s.solved, s.total);
      return `<a class="card unit" href="#/unite/${u.id}">${ring(d, 52, 6, `${u.no}`)}
        <div class="c-body"><strong>${esc(u.title)}</strong>
        <small>${s.total} soru · ${s.solved} çözüldü${s.solved ? ` · <b class="t-${tone(s.pct)}">%${s.pct} başarı</b>` : ''}</small></div><span class="chev">›</span></a>`;
    }).join('')}</div>`;
  return {
    title: c.short,
    html: `<section class="c-hero" ${tileStyle(c)}>
        <div class="c-hero-top"><span class="ct-ico">${c.icon}</span><h2>${esc(c.name)}</h2></div>
        <div class="c-hero-body">${ring(pct(cs.solved, cs.total), 92, 9)}
          <dl><div><dt>Soru</dt><dd>${cs.total}</dd></div><div><dt>Çözülen</dt><dd>${cs.solved}</dd></div>
          <div><dt>Başarı</dt><dd>${cs.solved ? '%' + cs.pct : '–'}</dd></div><div><dt>Deneme/test</dt><dd>${sets.length}</dd></div></dl></div>
      </section>
      ${errs.length ? `<details class="panel warnbox"><summary>⚠️ Dosyada ${errs.length} hatalı kayıt atlandı</summary><ul class="errs">${errs.slice(0, 30).map(e => `<li>${esc(e)}</li>`).join('')}</ul></details>` : ''}
      <div class="seg">${tabs.map(([k, l]) => `<a class="${k === tab ? 'on' : ''}" href="#/ders/${cid}/${k}">${l}${k === 'denemeler' && sets.length ? ` <em>${sets.length}</em>` : ''}</a>`).join('')}</div>
      ${body}`
  };
};

function denemeTab(cid) {
  const sets = DB.sets(cid), c = DB.course(cid), total = DB.qs(cid).length;
  const past = S.tests.filter(t => t.courseId === cid && t.mode === 'exam').slice(0, 8);
  const lastOf = name => S.tests.find(t => t.setKey === cid + '|' + name);
  const setRow = s => {
    const l = lastOf(s.name), dk = Math.round(s.qs.length * APP_CONFIG.examSecondsPerQuestion / 60);
    return `<div class="card set"><div class="c-body"><strong>${esc(s.name)}</strong>
      <small>${s.qs.length} soru · ${dk} dk${l ? ` · son: <b class="t-${tone(l.pct)}">%${l.pct}</b> (net ${l.net})` : ''}</small></div>
      <div class="set-btns"><button class="mini on" data-act="startSet" data-c="${cid}" data-s="${esc(s.name)}" data-m="exam">⏱️ Sınava başla</button></div></div>`;
  };
  const book = [['unite', '📝 Ünite ara denemeleri'], ['genel', '📋 Genel bitirme denemeleri']].map(([k, label]) => {
    const list = sets.filter(s => s.kind === k);
    return list.length ? `<h3 class="sec">${label}</h3><div class="list">${list.map(setRow).join('')}</div>` : '';
  }).join('');
  const counts = [10, 20, 40, 60, 100].filter(n => n < total);
  return `${sets.length ? `<h3 class="sec">📖 Alıntılanmış kitap denemeleri</h3><p class="hint">Sınav modu: süre geriye doğru işler, şıklar işaretlenir; sonuçlar sınav bitince gösterilir.</p>` : ''}${book}
    <h3 class="sec">🧪 Dinamik deneme üret</h3>
    <form id="denemeForm" class="panel" onsubmit="return false">
      <p class="hint">Sorular ${esc(c.short)} dersinin tüm ünitelerinden karışık seçilir; hiç çözmediklerin ve tekrar bekleyen yanlışların önceliklidir.</p>
      <label class="lbl">Soru sayısı</label>${chips('n', [...counts.map(n => [n, n]), ['all', `Tümü (${total})`]], counts.includes(20) ? 20 : counts[counts.length - 1] || 'all')}
      <label class="lbl">Zorluk derecesi</label>${chips('diff', [['mixed', '🎲 Karma'], ['easy', '🟢 Kolay'], ['medium', '🟡 Orta'], ['hard', '🔴 Zor']], 'mixed')}
      <p class="hint">Karma: %20 kolay · %60 orta · %20 zor. Süre: soru başı ${APP_CONFIG.examSecondsPerQuestion} sn.</p>
      <button class="btn primary big" data-act="startCourseExam" data-c="${cid}">DENEMEYİ BAŞLAT</button>
    </form>
    ${past.length ? `<h3 class="sec">Geçmiş denemeler</h3><div class="list">${past.map(testRow).join('')}</div>` : ''}`;
}
const testRow = t => `<a class="card row" href="#/sonuc/${t.id}"><div class="c-body"><strong>${esc(t.title)}</strong><small>${fmtDate(t.date)} · ${t.total} soru · D ${t.c} · Y ${t.w} · B ${t.b} · Net ${t.net}</small></div><b class="score t-${tone(t.pct)}">%${t.pct}</b></a>`;

// ============================================================
// SORU-CEVAP KARTLARI
// ============================================================
const cardDue = r => (r.due != null ? r.due : r.t + (r.l === 'k' ? 3 * DAY : 0));
function cardStats(cid) {
  const list = DB.cards(cid); let seen = 0, known = 0, unknown = 0, due = 0; const now = Date.now();
  list.forEach(c => { const r = S.cards[c.id]; if (!r) return; seen++; if (r.l === 'k') known++; else unknown++; if (cardDue(r) <= now) due++; });
  return { total: list.length, seen, known, unknown, due };
}
// Leitner öncelik puanı: vadesi geçmiş ve az bilinen kart en üstte, iyi bilinen kart arkaya itilir
function cardPriority(c) {
  const r = S.cards[c.id], now = Date.now();
  if (!r) return 500 + Math.random() * 50;
  const due = cardDue(r);
  if (due <= now) return 1000 + Math.min(60, (now - due) / DAY) * 8 + (6 - (r.bx || 1)) * 25 + Math.random() * 10;
  return -Math.min(90, (due - now) / DAY) + Math.random();
}
function kartTab(cid) {
  const st = cardStats(cid), n = APP_CONFIG.cardSessionSize;
  return `<div class="statgrid">
      <div><b>${st.total}</b><span>Toplam kart</span></div><div><b>${st.total - st.seen}</b><span>Görülmemiş</span></div>
      <div class="ok"><b>${st.known}</b><span>Bildim</span></div><div class="bad"><b>${st.unknown}</b><span>Bilemedim</span></div></div>
    <p class="hint">Soruyu oku, cevabı içinden söyle, “Cevabı göster”e dokun ve 4 seçenekten birini işaretle. Kart, seçimine göre hemen / yarın / 3 gün / 10 gün sonra yeniden sorulur.</p>
    <button class="btn primary big" data-act="cardStart" data-c="${cid}" data-m="next">🧠 Akıllı tur · ${n} kart<small class="btn-sub">${st.due} kart tekrar bekliyor · en az bilinen önce</small></button>
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
    ids = [...list].sort((a, b) => cardPriority(b) - cardPriority(a)).slice(0, n).map(c => c.id);
  } else if (mode === 'unknown') ids = shuffle(list.filter(c => S.cards[c.id]?.l === 'u')).map(c => c.id);
  else if (mode === 'unseen') ids = list.filter(c => !S.cards[c.id]).slice(0, n).map(c => c.id);
  else ids = shuffle(list).slice(0, n).map(c => c.id);
  if (!ids.length) return toast('Bu seçimde kart yok.');
  const titles = { next: 'Akıllı tur', unknown: 'Bilemediklerim', unseen: 'Görmediklerim', random: 'Rastgele kartlar' };
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
      <div class="actionbar ${K.open ? 'four' : ''}">${K.open
        ? `<button class="btn mk again" data-act="cardMark" data-v="again">Bilemedim<small>Hemen sor</small></button><button class="btn mk hard" data-act="cardMark" data-v="hard">Zorlandım<small>Yarın sor</small></button><button class="btn mk good" data-act="cardMark" data-v="good">Bildim<small>3 gün sonra</small></button><button class="btn mk easy" data-act="cardMark" data-v="easy">Çok kolay<small>10 gün sonra</small></button>`
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
function unitCats(uid, qs) {
  const cats = [['ex', '📖 Kitap Alıştırmaları', qs.filter(q => q.isExercise)], ['bank', '🗃️ Soru Bankası Testleri', qs.filter(q => q.isBank)]];
  return cats.map(([k, label, list]) => {
    if (!list.length) return `<h3 class="sec">${label}</h3><p class="hint">Bu bölümde henüz soru yok.</p>`;
    const size = 20, chunks = Math.ceil(list.length / size);
    return `<h3 class="sec">${label} <em class="cnt">${list.length}</em></h3><p class="hint">Alıştırma modu: şıkka dokununca doğru/yanlış ve açıklama anında görünür.</p><div class="list">${Array.from({ length: chunks }, (_, i) => {
      const part = list.slice(i * size, (i + 1) * size), st = statsOf(part);
      return `<button class="card row chunk" data-act="startChunk" data-id="${uid}" data-cat="${k}" data-k="${i}"><div class="c-body"><strong>${k === 'ex' ? 'Alıştırma' : 'Test'} ${i + 1}</strong><small>${part.length} soru${st.solved ? ` · ${st.correct}/${st.solved} doğru` : ' · henüz çözülmedi'}</small>${bar(pct(st.solved, part.length))}</div><span class="chev">›</span></button>`;
    }).join('')}</div>`;
  }).join('');
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
      ${unitCats(uid, qs)}
      <h3 class="sec">⚙️ Özel test oluştur</h3>
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
      ${q ? `${q.isUpdated ? '<div class="upd">⚠️ GÜNCEL MEVZUAT DEĞİŞİKLİĞİ</div>' : ''}<article class="qtext">${esc(q.question)}</article><div class="opts">${optsHtml}</div>${fb}`
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
  const row = (label, v, ex = '') => { const p = pct(v.c, v.t); return `<div class="brow"><span>${label}</span><small>${v.c}/${v.t}${ex}</small><b class="t-${tone(p)}">%${p}</b>${bar(p, tone(p))}</div>`; };
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
      ${by.length > 1 ? `<h3 class="sec">${t.type === 'sim' ? 'Ders bazlı karne' : 'Ders bazında'}</h3><div class="panel">${by.map(([cid, v]) => row(esc(DB.course(cid)?.short || cid), v, ` · net ${(v.c - v.w / 4).toFixed(1)}`)).join('')}</div>` : ''}
      ${units.length > 1 ? `<h3 class="sec">Ünite bazında</h3><div class="panel">${units.map(([uid, v]) => { const u = DB.unit(uid); return row(u ? `${esc(DB.course(u.courseId).short)} · ${esc(u.title)}` : uid, v); }).join('')}</div>` : ''}
      ${review.length ? `<h3 class="sec">Soruları incele</h3>
      <div class="seg small">${[['wrong', `❌ ${t.w}`], ['blank', `⚪ ${t.b}`], ['ok', `✅ ${t.c}`], ['all', 'Tümü']].map(([k, l]) => `<a class="${filter === k ? 'on' : ''}" href="#/sonuc/${t.id}/${k}">${l}</a>`).join('')}</div>
      <div class="list">${shown.length ? shown.map(x => reviewCard(x.q, x.a)).join('') : empty('✔️', 'Bu filtrede soru yok.')}</div>` : ''}`
  };
};
function reviewCard(q, a) {
  const c = DB.course(q.courseId), u = DB.unit(q.unitId);
  return `<details class="card review"><summary><small>${esc(c.short)} · Ünite ${u.no}${a === undefined ? '' : a === -1 ? ' · ⚪ Boş' : a === q.answer ? ' · ✅' : ` · ❌ Cevabın: ${LETTERS[a]}`}</small>${q.isUpdated ? '<span class="upd sm">⚠️ GÜNCEL MEVZUAT DEĞİŞİKLİĞİ</span>' : ''}<span class="clamp">${esc(q.question)}</span></summary>
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
function trendPanel() {
  const ex = S.tests.filter(t => t.mode === 'exam' && t.total).slice(0, 10).reverse();   // eskiden yeniye
  if (ex.length < 3) return `<h3 class="sec">Başarı trendi</h3><div class="panel"><p class="hint">Trend analizi için en az 3 deneme/sınav çözmelisin (şu an ${ex.length}).</p></div>`;
  const ys = ex.map(t => (t.net / t.total) * 100), n = ys.length;   // farklı uzunluktaki denemeler için net %'ye çevrilir
  const mx = (n - 1) / 2, my = ys.reduce((a, b) => a + b, 0) / n;
  let num = 0, den = 0; ys.forEach((y, i) => { num += (i - mx) * (y - my); den += (i - mx) ** 2; });
  const slope = den ? num / den : 0;                                 // en küçük kareler eğimi (puan / deneme)
  const avgNet = ex.reduce((a, t) => a + t.net, 0) / n;
  const [ico, label, cls] = slope > 1.5 ? ['📈', 'Başarı Oranın Düzenli Yükseliyor', 'ok'] : slope < -1.5 ? ['📉', 'Son Testlerde Performans Düşüşte', 'bad'] : ['➖', 'Grafik Stabil İlerliyor', 'mid'];
  return `<h3 class="sec">Başarı trendi</h3><div class="panel trend t-${cls}">
    <div class="trend-head"><span class="trend-ico">${ico}</span><div><b>${label}</b><small>Son ${n} deneme/sınav · ortalama net ${avgNet.toFixed(1)} · eğim ${slope >= 0 ? '+' : ''}${slope.toFixed(1)} puan/deneme</small></div></div>
    <div class="days trend-bars" style="grid-template-columns:repeat(${n},1fr)">${ex.map((t, i) => `<div class="day" title="${esc(t.title)}"><i style="height:${Math.max(2, Math.round(Math.max(0, ys[i])))}%"></i><span>${t.net}</span></div>`).join('')}</div>
    <p class="hint">Net = doğru − yanlış/4. Denemeler farklı uzunlukta olabildiği için netler yüzdeye çevrilip doğrusal regresyon eğimi hesaplanır (±1,5 puan eşiği).</p></div>`;
}
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
      ${trendPanel()}
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
        <div class="row-btns small"><button class="mini ${st.theme === 'dark' ? 'on' : ''}" data-act="theme" data-v="dark">🌙 Koyu</button><button class="mini ${st.theme === 'light' ? 'on' : ''}" data-act="theme" data-v="light">☀️ Açık</button><button class="mini ${st.theme === 'oled' ? 'on' : ''}" data-act="theme" data-v="oled">🖤 Nöbet Modu</button></div>
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
        <p class="hint">İlerlemen bu tarayıcıda saklanır; sen sıfırlamadıkça silinmez. Telefon değiştirirken yedeği kullan.</p>
        <p class="hint" id="persistState">Kalıcılık durumu denetleniyor…</p>
        <p class="hint">Son yedek: ${S.lastBackup ? fmtDate(S.lastBackup) : 'henüz alınmadı'}</p>
        <button class="btn ghost block" data-act="persist">🔒 Kalıcı depolama iste</button>
        <div class="row-btns">
          <button class="btn secondary" data-act="backup">💾 Yedek indir</button>
          <label class="btn secondary">📂 Yedek yükle<input type="file" accept=".json" data-act="restore" hidden></label>
        </div>
        <button class="btn danger block" data-act="reset">İlerlemeyi sıfırla</button>
      </div>`,
    after: () => {
      if (navigator.storage && navigator.storage.persisted) navigator.storage.persisted().then(ok => {
        const el = $('#persistState'); if (el) el.textContent = ok ? '✅ Kalıcı depolama etkin (tarayıcı temizliğinden korunur)' : '⚠️ Kalıcı depolama izni yok — düzenli yedek almanı öneririz';
      });
    }
  };
};

// ============================================================
// HAFIZA EŞLEŞTİRME OYUNU (kanun no ↔ kanun adı, rütbe ↔ tanım) — tamamen gömülü veri
// NOT: Rütbe sıralaması 3201 s. Kanun'a göredir; mevzuat değişirse aşağıdaki listeyi güncelle.
// ============================================================
const GAME_PAIRS = {
  kanun: [
    ['2559', 'Polis Vazife ve Salahiyet Kanunu (PVSK)'], ['3201', 'Emniyet Teşkilatı Kanunu (ETK)'], ['657', 'Devlet Memurları Kanunu'],
    ['5237', 'Türk Ceza Kanunu'], ['5271', 'Ceza Muhakemesi Kanunu'], ['2911', 'Toplantı ve Gösteri Yürüyüşleri Kanunu'],
    ['6136', 'Ateşli Silahlar ve Bıçaklar Kanunu'], ['5442', 'İl İdaresi Kanunu'], ['2577', 'İdari Yargılama Usulü Kanunu'],
    ['5326', 'Kabahatler Kanunu'], ['2918', 'Karayolları Trafik Kanunu'], ['3713', 'Terörle Mücadele Kanunu'],
    ['4483', 'Memurların Yargılanması Hakkında Kanun'], ['5188', 'Özel Güvenlik Hizmetleri Kanunu'], ['6458', 'Yabancılar ve Uluslararası Koruma Kanunu'],
    ['5682', 'Pasaport Kanunu'], ['6284', 'Kadına Karşı Şiddetin Önlenmesi Kanunu'], ['3628', 'Mal Bildirimi, Rüşvet ve Yolsuzluklarla Mücadele Kanunu'],
    ['2803', 'Jandarma Teşkilat, Görev ve Yetkileri Kanunu'], ['3005', 'Meşhut Suçlar Muhakeme Usulü Kanunu']
  ],
  rutbe: [
    ['Polis memurlarının en alt rütbesi', 'Polis Memuru'], ['Polis Memurundan sonraki rütbe', 'Başpolis Memuru'],
    ['Polis memurlarının en üst rütbesi', 'Kıdemli Başpolis Memuru'], ['Amir rütbelerinin en alt basamağı', 'Komiser Yardımcısı'],
    ['Komiser Yardımcısından sonraki rütbe', 'Komiser'], ['Komiserden sonraki rütbe', 'Başkomiser'],
    ['Başkomiserden sonraki rütbe', '4. Sınıf Emniyet Müdürü'], ['4. Sınıf Emniyet Müdüründen sonraki rütbe', '3. Sınıf Emniyet Müdürü']
  ]
};
let MG = null, mgTimer = null;
function buildGame(mode, n) {
  const src = mode === 'kanun' ? GAME_PAIRS.kanun : mode === 'rutbe' ? GAME_PAIRS.rutbe : [...GAME_PAIRS.kanun, ...GAME_PAIRS.rutbe];
  const pairs = shuffle(src).slice(0, n).map((p, i) => ({ id: i, l: p[0], r: p[1] }));
  return { mode, n: pairs.length, pairs, left: shuffle(pairs.map(p => p.id)), right: shuffle(pairs.map(p => p.id)), sel: null, done: 0, miss: 0, t0: Date.now(), end: 0, lock: false };
}
ROUTES.oyun = (mode = 'karisik', n = '7') => {
  n = Math.min(8, Math.max(6, +n || 7));
  if (mode !== 'kanun' && mode !== 'rutbe') mode = 'karisik';
  if (!MG || MG.mode !== mode || MG.req !== n) { MG = buildGame(mode, n); MG.req = n; }
  const item = (side, id) => `<button class="mg-item" data-act="mgPick" data-side="${side}" data-id="${id}">${esc(side === 'l' ? MG.pairs[id].l : MG.pairs[id].r)}</button>`;
  return {
    title: 'Hafıza Eşleştirme',
    html: `<div class="seg small">${[['karisik', 'Karışık'], ['kanun', 'Kanunlar'], ['rutbe', 'Rütbeler']].map(([k, l]) => `<a class="${mode === k ? 'on' : ''}" href="#/oyun/${k}/${n}">${l}</a>`).join('')}</div>
      <div class="mg-bar"><span>Kalan <b id="mgLeft">${MG.n - MG.done}</b></span><span>Hata <b id="mgMiss">${MG.miss}</b></span><span id="mgTime">⏱ 0:00</span>
        <span class="mg-n">${[6, 7, 8].map(x => `<a class="mini ${x === n ? 'on' : ''}" href="#/oyun/${mode}/${x}">${x}</a>`).join('')}</span><button class="mini" data-act="mgNew" aria-label="Yeni oyun">🔄</button></div>
      <div class="mg-wrap"><div class="mg-board" id="mgBoard"><div class="mg-col">${MG.left.map(id => item('l', id)).join('')}</div><div class="mg-col">${MG.right.map(id => item('r', id)).join('')}</div></div><div id="mgEnd"></div></div>`,
    after: () => {
      clearInterval(mgTimer);
      mgTimer = setInterval(() => { const el = $('#mgTime'); if (!el || !MG || MG.end) return clearInterval(mgTimer); el.textContent = '⏱ ' + fmtTime((Date.now() - MG.t0) / 1000); }, 1000);
    }
  };
};
function mgPick(d, el) {
  if (!MG || MG.lock || MG.end || el.classList.contains('gone')) return;
  const board = $('#mgBoard');
  if (!MG.sel || MG.sel.side === d.side) {                       // aynı sütunda seçim değiştirme
    board.querySelectorAll('.mg-item.sel').forEach(x => x.classList.remove('sel'));
    if (MG.sel && MG.sel.el === el) { MG.sel = null; return; }
    el.classList.add('sel'); MG.sel = { side: d.side, id: +d.id, el }; return;
  }
  const a = MG.sel, b = { side: d.side, id: +d.id, el };
  MG.sel = null; a.el.classList.remove('sel'); MG.lock = true;
  if (a.id === b.id) {                                            // doğru: yeşil yanıp yok olur
    [a.el, b.el].forEach(x => x.classList.add('ok'));
    if (navigator.vibrate) navigator.vibrate(15);
    setTimeout(() => {
      [a.el, b.el].forEach(x => x.classList.add('gone')); MG.lock = false; MG.done++;
      const l = $('#mgLeft'); if (l) l.textContent = MG.n - MG.done;
      if (MG.done === MG.n) mgFinish();
    }, 450);
  } else {                                                        // yanlış: kırmızı yanıp söner
    MG.miss++; const m = $('#mgMiss'); if (m) m.textContent = MG.miss;
    [a.el, b.el].forEach(x => x.classList.add('bad'));
    if (navigator.vibrate) navigator.vibrate([30, 40, 30]);
    setTimeout(() => { [a.el, b.el].forEach(x => x.classList.remove('bad')); MG.lock = false; }, 450);
  }
}
function mgFinish() {
  MG.end = Date.now();
  const e = $('#mgEnd'); if (!e) return;
  e.innerHTML = `<div class="mg-end"><div class="mg-end-ico">🎉</div><h3>Tamamlandı!</h3><p>${fmtTime((MG.end - MG.t0) / 1000)} · ${MG.miss} hata</p>
    <button class="btn primary" data-act="mgNew">Yeni oyun</button><a class="btn ghost" href="#/home">Ana sayfa</a></div>`;
}

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
  goalCycle: () => { const o = [20, 50, 100]; S.daily.target = o[(o.indexOf(S.daily.target) + 1) % o.length]; Store.save(); toast(`Günlük hedef: ${S.daily.target} soru`); render(); },
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
    const f = readForm('#denemeForm'), all = DB.qs(d.c), diff = f.get('diff') || 'mixed';
    const n = f.get('n') === 'all' ? all.length : Math.min(+f.get('n'), all.length);
    const ratio = diff === 'mixed' ? APP_CONFIG.simDifficulty : { [diff]: 1 };
    const picked = pickWeighted(all, n, ratio);
    if (diff !== 'mixed') { const fill = picked.filter(q => q.difficulty !== diff).length; if (fill) toast(`Bu zorlukta yeterli soru yok; ${fill} soru diğer seviyelerden tamamlandı.`); }
    const no = S.tests.filter(t => t.courseId === d.c && t.type === 'exam' && !t.setKey).length + 1;
    const dl = { mixed: 'Karma', easy: 'Kolay', medium: 'Orta', hard: 'Zor' }[diff];
    startTest({ type: 'exam', courseId: d.c, title: `${DB.course(d.c).short} · ${dl} Deneme ${no}`, qids: shuffle(picked.map(q => q.id)), mode: 'exam', timed: true });
  },
  startChunk: d => {
    const u = DB.unit(d.id), all = DB.unitQs(d.id).filter(q => (d.cat === 'ex' ? q.isExercise : q.isBank));
    const part = all.slice(+d.k * 20, (+d.k + 1) * 20);
    startTest({ type: 'unit', courseId: u.courseId, title: `${DB.course(u.courseId).short} · Ünite ${u.no} · ${d.cat === 'ex' ? 'Alıştırma' : 'Test'} ${+d.k + 1}`, qids: part.map(q => q.id), mode: 'practice' });
  },
  startSim: async () => {
    if (!DB.allLoaded()) return toast('Sorular yükleniyor, birkaç saniye bekle.');
    const { qids } = buildSim(), N = APP_CONFIG.simQuestions;
    if (!qids.length) return toast('Simülatör için havuzda soru yok.');
    if (qids.length < N && !(await confirmBox('Soru havuzu yetersiz', `Havuzda yalnızca ${qids.length} uygun soru var (hedef ${N}). Bu sayıyla sınav başlatılsın mı?`, 'Başlat'))) return;
    startTest({ type: 'sim', title: 'Gerçek Sınav Simülatörü', qids, mode: 'exam', timed: true });   // süre = soru × 75 sn = 125 dk
  },
  mgNew: () => { MG = null; render(); },
  mgPick: (d, el) => mgPick(d, el),
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
    const G = { again: ['u', 0, () => 1], hard: ['u', 1, b => Math.max(1, b)], good: ['k', 3, b => Math.min(5, b + 1)], easy: ['k', 10, b => Math.min(5, b + 2)] }[d.v];
    if (!G) return;
    const r = S.cards[id] || (S.cards[id] = { k: 0, u: 0, l: '', t: 0, bx: 1, due: 0 });
    if (!(id in K.res)) bumpDaily();
    r[G[0]]++; r.l = G[0]; r.t = Date.now(); r.g = d.v; r.bx = G[2](r.bx || 1); r.due = Date.now() + G[1] * DAY; K.res[id] = G[0];
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
  backup: () => { S.lastBackup = Date.now(); Store.save(); download(`misyon-koruma-yedek-${dayKey()}.json`, JSON.stringify(S)); toast('Yedek indirildi.'); },
  persist: async () => { const ok = navigator.storage && navigator.storage.persist ? await navigator.storage.persist() : false; toast(ok ? '✅ Kalıcı depolama etkin' : 'Tarayıcı izin vermedi; düzenli yedek al.'); render(); },
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
    else if (K.open && '1234'.includes(e.key) && e.key.length === 1) ACT.cardMark({ v: ['again', 'hard', 'good', 'easy'][+e.key - 1] });
    else if (K.open && e.key === 'Enter') ACT.cardMark({ v: 'good' });
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
