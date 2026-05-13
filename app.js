// ============================================
// app.js - KPSS & DGS MATEMATİK ANA UYGULAMA
// Sıfırdan düzenlendi: generateVariables + filtreler
// Gezinme ve yenileme düzeltmeleri eklendi
// ============================================

console.log('🚀 app.js KPSS/DGS sürümü yükleniyor...');

// ============================================
// BÖLÜM 1: YARDIMCI FONKSİYONLAR (TÜMÜ)
// ============================================

function normAns(s) {
    return String(s).toLowerCase().replace(/\s+/g,'').replace(/,/g,'.')
        .replace(/[×x]/g,'*').replace(/%|tl|lira|gün|saat|km|kg|gr|lt|ml|cm|m/g,'').trim();
}

function checkEqual(userAns, correctAns) {
    const u = normAns(userAns), c = normAns(correctAns);
    if (u === c) return true;
    const uParts = u.split('/'), cParts = c.split('/');
    if (cParts.length === 2 || uParts.length === 2) {
        const uVal = uParts.length === 2 ? Number(uParts[0])/Number(uParts[1]) : parseFloat(u);
        const cVal = cParts.length === 2 ? Number(cParts[0])/Number(cParts[1]) : parseFloat(c);
        if (!isNaN(uVal) && !isNaN(cVal) && Math.abs(uVal - cVal) < 0.01) return true;
    }
    const un = parseFloat(u), cn = parseFloat(c);
    if (!isNaN(un) && !isNaN(cn) && Math.abs(un - cn) < 0.05) return true;
    return false;
}

function dots() { return '<div class="dots"><span></span><span></span><span></span></div>'; }

function celebrate(msg, dur = 1900) {
    const w = document.getElementById('celWrap'), t = document.getElementById('celTxt');
    if (!w || !t) return;
    t.textContent = msg; w.classList.remove('hidden');
    setTimeout(() => w.classList.add('hidden'), dur);
}

function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function randomFloat(min, max) { return Math.random() * (max - min) + min; }
function todayStr() { return new Date().toISOString().split('T')[0]; }
function findGCD(a, b) { while (b) { [a, b] = [b, a % b]; } return a; }

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) if (n % i === 0 || n % (i+2) === 0) return false;
    return true;
}

function getPrimesInRange(min, max) {
    const p = [];
    for (let i = Math.max(2, Math.ceil(min)); i <= max; i++) if (isPrime(i)) p.push(i);
    return p;
}

function simpleHash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) { h = ((h << 5) - h) + str.charCodeAt(i); h = h & h; }
    return Math.abs(h).toString(36).substring(0, 6);
}

function safeEval(expr) {
    const cleaned = expr.replace(/[^0-9+\-*/().%\s]/g, '');
    if (!/^[0-9+\-*/().%\s]+$/.test(cleaned) && cleaned !== '') throw new Error('Geçersiz ifade');
    return new Function('return ' + expr)();
}

function shuffleArray(arr) {
    const s = [...arr];
    for (let i = s.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i+1)); [s[i], s[j]] = [s[j], s[i]]; }
    return s;
}

function seededRandom(seed) {
    let s = seed;
    return function() { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646; };
}

function shuffleWithSeed(arr, seed) {
    const s = [...arr], rng = seededRandom(seed);
    for (let i = s.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i+1)); [s[i], s[j]] = [s[j], s[i]]; }
    return s;
}

// ---------- Matematiksel Yardımcı Fonksiyonlar (question2.js ile uyumlu) ----------
function ebob(a, b) { while (b) { [a, b] = [b, a % b]; } return a; }
function ekok(a, b) { return (a * b) / ebob(a, b); }
function faktoriyel(n) { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; }
function permutasyon(n, r) { if (r > n) return 0; return faktoriyel(n) / faktoriyel(n - r); }
function kombinasyon(n, r) {
    if (r > n || r < 0) return 0;
    r = Math.min(r, n - r);
    let c = 1;
    for (let i = 0; i < r; i++) c = c * (n - i) / (i + 1);
    return Math.round(c);
}
function basamakDegerToplam(n) { let t = 0, c = 1; while (n > 0) { t += (n % 10) * c; c *= 10; n = Math.floor(n / 10); } return t; }
function rakamToplam(n) { let t = 0; while (n > 0) { t += n % 10; n = Math.floor(n / 10); } return t; }
function basamakDegistir(n) { const s = String(n).split(''); [s[0], s[s.length-1]] = [s[s.length-1], s[0]]; return parseInt(s.join('')) || n; }
function sadelestir(pay, payda) { const g = ebob(Math.abs(pay), Math.abs(payda)); return `${pay/g}/${payda/g}`; }
function kokDisi(n) {
    let d = 1, i = n;
    for (let j = 2; j * j <= i; j++) while (i % (j * j) === 0) { d *= j; i /= (j * j); }
    if (d === 1) return '√' + n;
    if (i === 1) return String(d);
    return d + '√' + i;
}
function sirala(...args) { return args.sort((a, b) => a - b); }
function aralikToplam(min, max) { if (min > max) return 0; return (min + max) * (max - min + 1) / 2; }
function sifirSayisi(n) { let c = 0; while (n >= 5) { n = Math.floor(n / 5); c += n; } return c; }
function dogrusalDeger(x1, y1, x2, y2, k) {
    const m = (y2 - y1) / (x2 - x1);
    const n = y1 - m * x1;
    return Math.round((m * k + n) * 100) / 100;
}
function sinavMevcut(a, b, c, d) { const x = (b + c * d) / (c - a); return a * x + b; }
function zarOlasilik(t) {
    const o = {2:"1/36",3:"2/36",4:"3/36",5:"4/36",6:"5/36",7:"6/36",8:"5/36",9:"4/36",10:"3/36",11:"2/36",12:"1/36"};
    return o[t] || "0";
}
function zarEnAz(t) {
    let c = 0;
    for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) if (i + j >= t) c++;
    const g = ebob(c, 36); return (c/g) + '/' + (36/g);
}
function zarFark(f) {
    let c = 0;
    for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) if (Math.abs(i - j) === f) c++;
    const g = ebob(c, 36); return (c/g) + '/' + (36/g);
}
function enKucukAsalCarpan(n) {
    if (n < 2) return 1;
    if (n % 2 === 0) return 2;
    for (let i = 3; i * i <= n; i += 2) if (n % i === 0 && isPrime(i)) return i;
    return n;
}
function asalCarpanToplam(n) {
    let s = 0, t = n;
    for (let i = 2; i <= t; i++) if (t % i === 0 && isPrime(i)) { s += i; while (t % i === 0) t /= i; }
    return s || n;
}
function asalCarpanSayisi(n) {
    let c = 0, t = n;
    for (let i = 2; i <= t; i++) if (t % i === 0 && isPrime(i)) { c++; while (t % i === 0) t /= i; }
    return c;
}
function asalCarpanCarpim(n) {
    let c = 1, t = n;
    for (let i = 2; i <= t; i++) if (t % i === 0 && isPrime(i)) { c *= i; while (t % i === 0) t /= i; }
    return c || 1;
}
function aralikAsalSay(bas, son) { let c = 0; for (let i = Math.max(2, Math.ceil(bas)); i <= son; i++) if (isPrime(i)) c++; return c; }
function usToplam(taban, maxUs) { let s = 0; for (let i = 0; i <= maxUs; i++) s += Math.pow(taban, i); return s; }
function enAzCarpim(s1, s2, hedef) { for (let i = 1; i <= 100; i++) if ((s1 * i) % s2 === 0 && (s1 * i) >= hedef) return i; return 1; }
function kumeBilesim(k1, k2) { return k1 + k2; }
function kumeUcBilesim(k1, k2, k3) { return k1 + k2 + k3; }
function hizBul(mesafe, zaman) { return zaman === 0 ? 0 : Math.round((mesafe / zaman) * 100) / 100; }
function oranliKok(deger, oran) { return Math.sqrt(deger * oran); }
function kokBul(sayi) { return Math.sqrt(Math.abs(sayi)); }
function carpanKok(sayi) { for (let i = Math.floor(Math.sqrt(Math.abs(sayi))); i >= 1; i--) if (sayi % (i * i) === 0) return i; return 1; }
function siraIleIs(a, b) {
    let gun = 1, is = 0;
    while (is < 1) {
        if (gun % 2 === 1) is += 1 / a;
        else is += 1 / b;
        if (is >= 1) break;
        gun++;
    }
    return gun;
}

// ============================================
// BÖLÜM 2: STATE YÖNETİMİ
// ============================================
let ST = {
    version: STATE_VERSION, apiKey: '', topic: 1, currentLevel: 'KOLAY',
    streak: 0, maxStreak: 0, totalCorrect: 0, totalQ: 0,
    completedTopics: [], hist: {}, questionBankProgress: {},
    examSets: {}, examGeneration: 1, examHistory: [],
    apiCallCount: 0, apiCallDate: '', lastSession: null,
    phase: 'summary', cq: null, summaries: {}, testMode: false,
    lastView: 'vHome' // ✅ Yenilemede son view'ı hatırlamak için
};

function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem(CONSTANTS.STORAGE_KEY) || '{}');
        if (saved.version === STATE_VERSION) Object.assign(ST, saved);
        else if (Object.keys(saved).length > 0) Object.assign(ST, saved);
    } catch (e) {}
    ST.apiKey = localStorage.getItem(CONSTANTS.API_KEY_STORAGE) || '';
    initMissingFields();
    checkApiDate();
}

function initMissingFields() {
    for (let i = 1; i <= CONSTANTS.TOTAL_TOPICS; i++) if (!ST.hist[i]) ST.hist[i] = { levels: {}, currentLevel: 'KOLAY' };
    if (!ST.questionBankProgress) ST.questionBankProgress = {};
    if (!ST.examSets) ST.examSets = {};
    if (!ST.examGeneration) ST.examGeneration = 1;
    if (!ST.summaries) ST.summaries = {};
    if (!ST.lastView) ST.lastView = 'vHome'; // ✅ Eksikse ekle
}

function checkApiDate() {
    const t = todayStr();
    if (ST.apiCallDate !== t) { ST.apiCallCount = 0; ST.apiCallDate = t; }
}

function saveState() {
    try {
        const { apiKey, cq, ...d } = ST;
        localStorage.setItem(CONSTANTS.STORAGE_KEY, JSON.stringify(d));
    } catch (e) {}
}

function getHist(topicId) {
    if (!ST.hist[topicId]) ST.hist[topicId] = { levels: {}, currentLevel: 'KOLAY' };
    return ST.hist[topicId];
}

function getQBProgress(topicId) {
    if (!ST.questionBankProgress[topicId]) ST.questionBankProgress[topicId] = { solved: [], total: CONSTANTS.QUESTION_BANK_SIZE };
    return ST.questionBankProgress[topicId];
}

// ============================================
// BÖLÜM 3: SAYFA GEÇİŞLERİ (Gezinme düzeltmeleri ile)
// ============================================

let currentView = 'vHome', viewStack = [];

function showView(id, addToStack = true) {
    document.getElementById(currentView)?.classList.remove('active');
    if (addToStack && currentView !== id) { viewStack.push(currentView); if (viewStack.length > 20) viewStack.shift(); }
    document.getElementById(id)?.classList.add('active');
    currentView = id;
    ST.lastView = id; // ✅ Son görünümü state'e kaydet
    updateHeader(id);
    window.scrollTo(0, 0);
    
    // ✅ Tarayıcı geçmişine yeni bir entry ekle
    history.pushState({ view: id }, '', '#/' + id);
}

function updateHeader(viewId) {
    const t = document.getElementById('headerTitle'), b = document.getElementById('btnBack');
    if (!t || !b) return;
    const titles = { vHome:'KPSS Matematik', vTopics:'📚 Konular', vLearn:'Konu Çalış', vQuestionBank:'📝 Soru Bankası', vQBSolve:'Soru Bankası', vExamList:'📋 Denemeler', vExam:'Deneme Sınavı', vStats:'📊 İstatistikler' };
    t.textContent = titles[viewId] || 'KPSS Matematik';
    b.style.visibility = viewId === 'vHome' ? 'hidden' : 'visible';
}

window.goBack = function() {
    if (viewStack.length > 0) {
        const p = viewStack.pop();
        showView(p, false);
        if (p === 'vHome') updateHomeStats();
        else if (p === 'vTopics') renderTopicsList();
    }
};

window.goHome = function() { viewStack = []; showView('vHome', false); updateHomeStats(); };
window.goTopics = function() { showView('vTopics'); renderTopicsList(); };
window.goQuestionBank = function() { showView('vQuestionBank'); renderQuestionBankList(); };
window.goExamList = function() { showView('vExamList'); renderExamList(); };
window.goStats = function() { showView('vStats'); renderStats(); };
window.toggleMenu = function() { document.getElementById('sideMenu')?.classList.toggle('hidden'); };

// ✅ Tarayıcı geri/ileri tuşları için popstate dinleyicisi
window.addEventListener('popstate', function(event) {
    const state = event.state;
    if (state && state.view) {
        showView(state.view, false);
        if (state.view === 'vHome') updateHomeStats();
        else if (state.view === 'vTopics') renderTopicsList();
    } else {
        // Geçmişte state yoksa ana sayfaya dön (ilk yükleme vb.)
        showView('vHome', false);
        updateHomeStats();
    }
});

// ============================================
// BÖLÜM 4: ANA SAYFA & KONU LİSTESİ
// ============================================

function updateHomeStats() {
    document.getElementById('statTopics').textContent = ST.completedTopics.length;
    document.getElementById('statQuestions').textContent = ST.totalQ;
    document.getElementById('statAccuracy').textContent = '%' + (ST.totalQ > 0 ? Math.round((ST.totalCorrect / ST.totalQ) * 100) : 0);
    document.getElementById('statStreak').textContent = ST.maxStreak;
    
    const nt = TOPICS.find(t => !ST.completedTopics.includes(t.id) && (!TOPICS.find(pt => pt.order === t.order-1) || ST.completedTopics.includes(TOPICS.find(pt => pt.order === t.order-1).id)));
    const b = document.getElementById('nextTopicBadge');
    if (b) b.textContent = nt ? `🎯 Sıradaki: ${nt.e} ${nt.n}` : '🏆 Tüm konular tamamlandı!';
    ST.lastSession = todayStr(); saveState();
}

function renderTopicsList() {
    const el = document.getElementById('topicsList');
    if (!el || typeof TOPICS === 'undefined') return;
    let html = '', lp = '';
    TOPICS.forEach(t => {
        if (t.p !== lp) { lp = t.p; html += `<div class="phase-sep">${t.p}</div>`; }
        const done = ST.completedTopics.includes(t.id);
        const prev = TOPICS.find(pt => pt.order === t.order - 1);
        const locked = prev && !ST.completedTopics.includes(prev.id);
        const h = getHist(t.id); let tc = 0, tq = 0;
        if (h.levels) Object.values(h.levels).forEach(lv => { if (lv) { tc += lv.correct || 0; tq += lv.total || 0; } });
        const pct = tq > 0 ? Math.min(100, Math.round((tq / CONSTANTS.QUESTIONS_PER_TOPIC) * 100)) : 0;
        let cls = 'topic-row'; if (done) cls += ' t-done'; else if (t.id === ST.topic) cls += ' t-current'; else if (locked) cls += ' t-locked';
        const icon = done ? '✅' : (t.id === ST.topic ? '▶️' : (locked ? '🔒' : '⭕'));
        html += `<div class="${cls}" ${locked ? '' : `onclick="openTopic(${t.id})"`}><span class="t-icon">${t.e}</span><div class="t-info"><div class="t-name">${t.n}</div><div class="t-meta">KPSS: ${t.kpss}</div><div class="prog-bar-wrap"><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${pct}%"></div></div></div></div><span style="font-size:18px">${icon}</span></div>`;
    });
    el.innerHTML = html;
}

// ============================================
// BÖLÜM 5: KONU ÇALIŞ
// ============================================

window.openTopic = function(topicId) {
    ST.topic = topicId;
    ST.currentLevel = getHist(topicId).currentLevel || 'KOLAY';
    ST.phase = 'pre-study';
    showView('vLearn');
    renderPreStudySummary();
    saveState();
};

function renderPreStudySummary() {
    const t = getTopicById(ST.topic);
    if (!t) return;
    setLearnHeader();
    const el = document.getElementById('learnContent');
    if (!el) return;
    el.innerHTML = `<div class="card"><h3>📖 ${t.n}</h3>${dots()}</div>`;
    if (ST.summaries[ST.topic]) { showPreStudySummary(ST.summaries[ST.topic]); return; }
    if (ST.apiKey && ST.apiCallCount < CONSTANTS.API_DAILY_LIMIT) {
        fetchTopicSummary(t).then(s => { ST.summaries[ST.topic] = s; saveState(); showPreStudySummary(s); }).catch(() => showPreStudySummary(null));
    } else setTimeout(() => showPreStudySummary(null), 500);
}

function showPreStudySummary(summary) {
    const t = getTopicById(ST.topic);
    if (!t) return;
    const el = document.getElementById('learnContent');
    if (!el) return;
    const formulas = FORMULAS[ST.topic] || [];
    const li = LEVELS[ST.currentLevel];
    const lh = (getHist(ST.topic).levels || {})[ST.currentLevel] || { correct: 0, total: 0 };
    el.innerHTML = `
        ${summary ? `<div class="card accent-top"><h3>📖 ${t.n}</h3><div style="font-size:14px;color:var(--text-secondary);line-height:1.8;margin-top:10px">${summary.replace(/\n/g,'<br>')}</div></div>` : `<div class="card accent-top"><h3>📖 ${t.n}</h3><p style="color:var(--text-muted)">${ST.apiKey ? 'Özet yüklenemedi.' : 'API anahtarı ekleyerek yapay zeka özeti alabilirsiniz.'}</p></div>`}
        ${formulas.length ? `<div class="formula-box"><div class="fb-label">📐 Formüller</div><div class="fb-content">${formulas.map(f=>'• '+f).join('<br>')}</div></div>` : ''}
        <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><h3 style="margin:0">📊 ${li.name} Seviye</h3><span class="badge badge-acc">${li.questionCount} soru</span></div>
            <div class="prog-bar-wrap"><div class="prog-bar-label"><span>İlerleme</span><span>${lh.correct||0}/${lh.total||0} doğru</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width:${((lh.total||0)/li.questionCount)*100}%"></div></div></div>
            <p style="font-size:12px;color:var(--text-muted);margin-top:8px">🎯 ${li.minCorrect} doğru yapmalısın</p>
        </div>
        <button class="btn btn-primary btn-full" onclick="beginStudy()">✍️ Çalışmaya Başla</button>`;
}

window.beginStudy = function() { ST.phase = 'question'; ST.cq = null; window.scrollTo(0,0); renderNextQuestion(); };

function setLearnHeader() {
    const t = getTopicById(ST.topic);
    if (!t) return;
    document.getElementById('learnTitle').textContent = `${t.e} ${t.n}`;
    document.getElementById('learnKademe').textContent = LEVELS[ST.currentLevel].name;
}

// ============================================
// BÖLÜM 6: SORU ÜRETİM MOTORU (YENİLENDİ)
// ============================================

function valueMatchesFilter(val, filter) {
    if (!filter) return true;
    switch (filter) {
        case 'tek': return val % 2 !== 0;
        case 'cift': return val % 2 === 0;
        case '3kati': return val % 3 === 0;
        case '4kati': return val % 4 === 0;
        case '5kati': return val % 5 === 0;
        case 'asal': return isPrime(val);
        default: return true;
    }
}

function generateVariables(varRanges, rule) {
    const keys = Object.keys(varRanges);
    const independent = keys.filter(k => Array.isArray(varRanges[k]));
    const dependent = keys.filter(k => !Array.isArray(varRanges[k]));

    for (let attempt = 0; attempt < 50; attempt++) {
        const vars = {};

        for (const key of independent) {
            const arr = varRanges[key];
            const min = arr[0], max = arr[1], filter = arr[2];
            let val, tries = 0;
            do {
                val = randomInt(min, max);
                tries++;
                if (tries > 100) break;
            } while (!valueMatchesFilter(val, filter));
            vars[key] = val;
        }

        let depOk = true;
        for (const key of dependent) {
            let expr = varRanges[key];
            if (typeof expr === 'number') {
                vars[key] = expr;
            } else {
                let resolved = String(expr);
                for (const k of Object.keys(vars)) {
                    resolved = resolved.split('{' + k + '}').join(vars[k]);
                }
                if (/\{/.test(resolved)) { depOk = false; break; }
                try {
                    vars[key] = safeEval(resolved);
                } catch (e) { depOk = false; break; }
            }
        }
        if (!depOk) continue;

        if (!rule || checkRule(rule, vars)) {
            return vars;
        }
    }
    return null;
}

function checkRule(rule, vars) {
    if (!rule) return true;
    try {
        let expr = String(rule);
        for (const k of Object.keys(vars)) {
            expr = expr.split('{' + k + '}').join(vars[k]);
        }
        const result = eval(expr);
        return !!result;
    } catch (e) {
        console.warn('Rule hatası:', rule, e);
        return false; // Hata durumunda false dön
    }
}

function calculateAnswer(formula, vars) {
    try {
        let expr = String(formula);
        for (const [k, v] of Object.entries(vars)) expr = expr.replace(new RegExp(`\\{${k}\\}`, 'g'), v);

        if (expr.includes("'") || expr.includes('"') || expr.includes('`') || expr.includes('?')) {
            return eval(expr);
        }

        const ozelFonksiyonlar = ['ebob(','asalCarpan','faktoriyel(','permutasyon(','kombinasyon(','sadelestir(','sirala(','zarOlasilik(','isPrime(','basamakDegerToplam(','rakamToplam(','kokDisi(','aralikToplam(','sinavMevcut(','dogrusalDeger(','sifirSayisi(','zarEnAz(','zarFark(','rakamSayisi(','enKucukAsalCarpan(','asalCarpanCarpim(','usToplam(','aralikAsalSay(','basamakDegistir(','enAzCarpim(','kumeBilesim(','kumeUcBilesim(','hizBul(','oranliKok(','kokBul(','carpanKok(','siraIleIs('];
        if (ozelFonksiyonlar.some(f => expr.includes(f))) return eval(expr);

        expr = expr.replace(/×/g,'*').replace(/÷/g,'/').replace(/\^/g,'**').replace(/√\(/g,'Math.sqrt(').replace(/√/g,'Math.sqrt');

        const parts = expr.split('/');
        if (parts.length === 2 && !/[+\-*()]/.test(expr)) {
            const num = safeEval(parts[0]), den = safeEval(parts[1]);
            if (den === 0) return null;
            if (num % den === 0) return num / den;
            const gcd = findGCD(Math.abs(num), Math.abs(den));
            return `${num/gcd}/${den/gcd}`;
        }

        const result = safeEval(expr);
        return (isFinite(result) && !isNaN(result)) ? result : null;
    } catch (e) { return null; }
}

function determineInputType(template, answer) {
    if (template.inputType && template.inputType !== 'auto') return template.inputType;
    const s = String(answer);
    if (['Tek','Çift','Evet','Hayır','Artar','Azalır','Doğru','Yanlış'].includes(s)) return 'choice';
    if (/[√π∞\[\{]/.test(s)) return 'choice';
    if (isNaN(Number(s.replace(/[+\-*/]/g,''))) && !/^-?\d+\.?\d*\/?-?\d*$/.test(s)) return 'choice';
    return 'keyboard';
}

function autoGenerateChoices(correctAnswer, template, vars) {
    const s = String(correctAnswer);
    const verbalPairs = { 'Tek':'Çift','Çift':'Tek','Evet':'Hayır','Hayır':'Evet','Artar':'Azalır','Azalır':'Artar','Doğru':'Yanlış','Yanlış':'Doğru' };
    if (verbalPairs[s]) {
        return [{ label: 'A', text: s, isCorrect: true }, { label: 'B', text: verbalPairs[s], isCorrect: false }];
    }
    const correct = Number(s.includes('/') ? eval(s) : s);
    if (!isNaN(correct)) {
        const offsets = [correct, correct + randomInt(1,5)*(Math.random()>0.5?1:-1), correct + randomInt(2,8)*(Math.random()>0.5?1:-1), Math.round(correct*randomInt(1,3)-randomInt(1,3))];
        const unique = [...new Set(offsets.map(o => Math.round(o*100)/100))];
        while (unique.length < 4) unique.push(Math.round((correct + randomInt(-10,10))*100)/100);
        return shuffleArray(unique.slice(0,4)).map((val, i) => ({ label: String.fromCharCode(65+i), text: String(val), isCorrect: Math.abs(val-correct) < 0.001 }));
    }
    return [{ label: 'A', text: s, isCorrect: true }, { label: 'B', text: 'Diğer', isCorrect: false }];
}

function generateChoicesFromTemplate(choiceTemplates, vars, correctAnswer) {
    return choiceTemplates.map((ct, i) => {
        let text = String(ct);
        for (const [k, v] of Object.entries(vars)) text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
        return { label: String.fromCharCode(65+i), text, isCorrect: String(text).trim() === String(correctAnswer).trim() };
    });
}

function getSolvedIds(topicId, level, mode) {
    if (mode === 'questionBank') {
        const p = getQBProgress(topicId);
        return p.solved || [];
    }
    const hist = getHist(topicId);
    const lh = hist.levels?.[level] || {};
    return lh.solvedIds || [];
}

let recentTemplatesCache = {};

function getRecentTemplateIds(topicId, count) {
    count = count || 3;
    if (!recentTemplatesCache[topicId]) recentTemplatesCache[topicId] = [];
    return recentTemplatesCache[topicId].slice(-count);
}

function addRecentTemplateId(topicId, templateId) {
    if (!recentTemplatesCache[topicId]) recentTemplatesCache[topicId] = [];
    recentTemplatesCache[topicId].push(templateId);
    if (recentTemplatesCache[topicId].length > 20) recentTemplatesCache[topicId].shift();
}

function filterTemplatesByLevel(templates, level) {
    const zMap = { 'KOLAY': 'kolay', 'ORTA': 'orta', 'ZOR': 'zor' };
    const targetZ = zMap[level] || 'orta';
    const matching = templates.filter(function(t) { return (t.z || 'orta') === targetZ; });
    if (matching.length >= 3) return matching;
    return templates;
}

function generateQuestionId(templateId, vars) {
    const keys = Object.keys(vars || {}).sort();
    let varsStr = '';
    for (let i = 0; i < keys.length; i++) {
        if (i > 0) varsStr += '|';
        varsStr += keys[i] + ':' + vars[keys[i]];
    }
    const hash = simpleHash(templateId + '_' + varsStr);
    return 'q_' + templateId + '_' + hash;
}

function getVarRangesForLevel(template, level) {
    if (!template) return {};
    if (template.v && typeof template.v === 'object') return template.v;
    return template.v || {};
}

function fillTemplate(text, vars) {
    let result = String(text);
    const keys = Object.keys(vars || {});
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = vars[key];
        result = result.split('{' + key + '}').join(value);
    }
    return result;
}

function generateSolution(template, vars, answer) {
    if (template.cozum) {
        let sol = String(template.cozum);
        const keys = Object.keys(vars || {});
        for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            sol = sol.split('{' + k + '}').join(vars[k]);
        }
        sol = sol.split('{cevap}').join(String(answer));
        return sol;
    }
    return 'Cevap: ' + String(answer);
}

function formatAnswer(answer, inputType) {
    const s = String(answer);
    if (inputType === 'choice') return s;
    if (!isNaN(Number(s))) {
        const n = Number(s);
        if (Number.isInteger(n)) return String(n);
        return parseFloat(n.toFixed(3)).toString();
    }
    return s;
}

function getTopicById(id) {
    if (typeof TOPICS === 'undefined') return null;
    for (let i = 0; i < TOPICS.length; i++) {
        if (TOPICS[i].id === id) return TOPICS[i];
    }
    return null;
}

function getNextLevel(currentLevel) {
    const order = ['KOLAY', 'ORTA', 'ZOR'];
    const idx = order.indexOf(currentLevel);
    if (idx >= 0 && idx < order.length - 1) return order[idx + 1];
    return null;
}

function getNextTopic(currentTopicId) {
    const current = getTopicById(currentTopicId);
    if (!current) return null;
    for (let i = 0; i < TOPICS.length; i++) {
        if (TOPICS[i].order === current.order + 1 && !ST.completedTopics.includes(TOPICS[i].id)) {
            return TOPICS[i];
        }
    }
    for (let i = 0; i < TOPICS.length; i++) {
        if (!ST.completedTopics.includes(TOPICS[i].id)) {
            return TOPICS[i];
        }
    }
    return null;
}

function generateQuestion(topicId, level, options) {
    if (!options) options = {};
    const templates = QUESTION_TEMPLATES[topicId];
    if (!templates || !templates.length) return null;

    const solvedIds = getSolvedIds(topicId, level, options.mode);
    let eligible = filterTemplatesByLevel(templates, level);
    if (!eligible.length) eligible = templates;

    const recentIds = getRecentTemplateIds(topicId, 3);
    let fresh = [];
    for (let i = 0; i < eligible.length; i++) {
        if (recentIds.indexOf(eligible[i].id) === -1) fresh.push(eligible[i]);
    }
    if (!fresh.length) fresh = eligible;

    const shuffled = shuffleArray(fresh);
    for (let i = 0; i < shuffled.length; i++) {
        const template = shuffled[i];
        for (let a = 0; a < 5; a++) {
            const q = tryGenerateFromTemplate(template, level, solvedIds, topicId);
            if (q && solvedIds.indexOf(q.id) === -1) {
                addRecentTemplateId(topicId, template.id);
                return q;
            }
        }
    }
    return generateFallbackQuestion(topicId, level);
}

function tryGenerateFromTemplate(template, level, solvedIds, topicId) {
    const vars = generateVariables(getVarRangesForLevel(template, level), template.kural);
    if (!vars) return null;

    const questionText = fillTemplate(template.s, vars);
    const cevapSonuc = calculateAnswer(template.c, vars);
    if (cevapSonuc === null || cevapSonuc === undefined) return null;

    const generatedId = generateQuestionId(template.id, vars);
    if (solvedIds.indexOf(generatedId) !== -1) return null;

    const inputType = determineInputType(template, cevapSonuc);
    let choices = null;
    let correctChoiceIndex = 0;

    if (inputType === 'choice') {
        if (template.choices && Array.isArray(template.choices)) {
            choices = generateChoicesFromTemplate(template.choices, vars, cevapSonuc);
        } else {
            choices = autoGenerateChoices(cevapSonuc, template, vars);
        }
        for (let i = 0; i < choices.length; i++) {
            if (choices[i].isCorrect) {
                correctChoiceIndex = i;
                break;
            }
        }
    }

    return {
        id: generatedId,
        templateId: template.id,
        soru: questionText,
        cevap: formatAnswer(cevapSonuc, inputType),
        cevapRaw: cevapSonuc,
        zorluk: template.z || 'orta',
        inputType: inputType,
        choices: choices,
        correctChoiceIndex: correctChoiceIndex,
        cozum: generateSolution(template, vars, cevapSonuc),
        vars: vars,
        topicId: topicId
    };
}

function generateFallbackQuestion(topicId, level) {
    const templates = QUESTION_TEMPLATES[topicId];
    if (!templates || !templates.length) return null;

    for (let i = 0; i < 10; i++) {
        const tpl = templates[Math.floor(Math.random() * templates.length)];
        const vars = generateVariables(tpl.v, tpl.kural);
        if (!vars) continue;
        const cevapSonuc = calculateAnswer(tpl.c, vars);
        if (cevapSonuc === null) continue;
        const generatedId = generateQuestionId(tpl.id, vars);
        const inputType = determineInputType(tpl, cevapSonuc);
        let choices = null;
        let correctChoiceIndex = 0;
        if (inputType === 'choice') {
            choices = tpl.choices ? generateChoicesFromTemplate(tpl.choices, vars, cevapSonuc) : autoGenerateChoices(cevapSonuc, tpl, vars);
            for (let j = 0; j < choices.length; j++) {
                if (choices[j].isCorrect) { correctChoiceIndex = j; break; }
            }
        }
        return {
            id: generatedId,
            templateId: tpl.id,
            soru: fillTemplate(tpl.s, vars),
            cevap: formatAnswer(cevapSonuc, inputType),
            cevapRaw: cevapSonuc,
            zorluk: tpl.z || 'orta',
            inputType: inputType,
            choices: choices,
            correctChoiceIndex: correctChoiceIndex,
            cozum: generateSolution(tpl, vars, cevapSonuc),
            vars: vars,
            topicId: topicId
        };
    }
    return null;
}

// ============================================
// BÖLÜM 7: SORU GÖSTERİM & CEVAP
// ============================================

function renderNextQuestion() {
    if (typeof QUESTION_TEMPLATES === 'undefined') {
        document.getElementById('learnContent').innerHTML = '<div class="err">Şablonlar yüklenemedi.</div>';
        return;
    }
    const t = getTopicById(ST.topic);
    if (!t) return;
    const level = ST.currentLevel, levelInfo = LEVELS[level];
    setLearnHeader();
    const el = document.getElementById('learnContent');
    if (!el) return;
    el.innerHTML = `<div class="card">${dots()}</div>`;
    const qData = generateQuestion(ST.topic, level, { mode: 'study' });
    if (!qData) { el.innerHTML = `<div class="card accent-top" style="text-align:center"><h3>📭 Soru Üretilemedi</h3><button class="btn btn-primary btn-full" onclick="resetLevelQuestions()">🔄 Tekrar Dene</button></div>`; return; }
    ST.cq = { ...qData, level };
    renderQuestionUI(qData, level, levelInfo);
}

function renderQuestionUI(q, level, levelInfo) {
    const hist = getHist(ST.topic);
    const lh = hist.levels?.[level] || { correct:0, total:0 };
    const zc = q.zorluk === 'kolay' ? 'badge-grn' : q.zorluk === 'zor' ? 'badge-red' : 'badge-warn';
    const limit = ST.testMode ? 3 : levelInfo.questionCount;
    const el = document.getElementById('learnContent');
    if (!el) return;

    const hasChoices = q.inputType === 'choice' && q.choices && q.choices.length >= 2;
    const ansHTML = hasChoices
        ? `<div style="display:flex;flex-direction:column;gap:10px;margin-top:16px">${q.choices.map((ch,i) => `<button class="btn btn-secondary btn-full choice-btn" onclick="submitChoiceAnswer(${i})" style="text-align:left;justify-content:flex-start;padding:14px 16px"><span style="font-weight:700;margin-right:10px;color:var(--accent)">${String.fromCharCode(65+i)})</span> ${ch.text}</button>`).join('')}</div>`
        : `<div class="ans-row"><input id="ansInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." autocomplete="off" onkeydown="if(event.key==='Enter') checkAnswer()"><button class="btn btn-primary" onclick="checkAnswer()">✓</button></div><div class="ans-hint">Sayı, kesir (3/4) veya birim ile yaz</div>`;

    el.innerHTML = `
        <div class="prog-bar-wrap"><div class="prog-bar-label"><span>📊 ${levelInfo.name}</span><span>${lh.correct||0}/${lh.total||0} doğru</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width:${((lh.total||0)/limit)*100}%"></div></div></div>
        <div class="card accent-top"><div class="q-header"><span class="q-counter">Soru ${(lh.total||0)+1}/${limit}</span><div class="q-tags"><span class="badge ${zc}">${q.zorluk}</span><span class="badge badge-acc">${levelInfo.name}</span></div></div><div class="q-text">${q.soru.replace(/\n/g,'<br>')}</div>${ansHTML}</div>
        <div class="ask-section"><button class="ask-toggle" onclick="toggleAsk()">🤖 Anlamadım — Öğretmene sor</button><div class="ask-form" id="askForm"><input id="askInp" class="ask-inp" type="text" placeholder="Ne anlamadın?" onkeydown="if(event.key==='Enter')sendAsk()"><button class="btn btn-primary" onclick="sendAsk()">Sor</button></div><div class="ask-result" id="askResult"></div></div>`;

    if (!hasChoices) setTimeout(() => document.getElementById('ansInp')?.focus(), 100);
}

window.submitChoiceAnswer = function(idx) {
    const q = ST.cq; if (!q) return;
    document.querySelectorAll('.choice-btn').forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correctChoiceIndex) { btn.style.borderColor = 'var(--success)'; btn.style.background = 'var(--success-bg)'; }
        else if (i === idx) { btn.style.borderColor = 'var(--danger)'; btn.style.background = 'var(--danger-bg)'; }
    });
    processAnswer(idx === q.correctChoiceIndex, q);
};

window.checkAnswer = function() {
    const inp = document.getElementById('ansInp');
    if (!inp || !inp.value.trim()) return;
    inp.disabled = true;
    if (!ST.cq) return;
    processAnswer(checkEqual(inp.value.trim(), ST.cq.cevap), ST.cq);
};

function processAnswer(isCorrect, q) {
    const level = q.level || ST.currentLevel;
    const hist = getHist(ST.topic);
    if (!hist.levels) hist.levels = {};
    if (!hist.levels[level]) hist.levels[level] = { correct:0, total:0, solvedIds:[] };
    const ld = hist.levels[level];
    ld.total++; if (isCorrect) ld.correct++;
    if (!ld.solvedIds) ld.solvedIds = [];
    ld.solvedIds.push(q.id);

    ST.totalQ++; if (isCorrect) { ST.totalCorrect++; ST.streak++; if (ST.streak > ST.maxStreak) ST.maxStreak = ST.streak; if (CONSTANTS.MAX_STREAK_CELEBRATE.includes(ST.streak)) celebrate(`🔥 ${ST.streak} Art Arda!`); }
    else ST.streak = 0;

    const limit = ST.testMode ? 3 : LEVELS[level].questionCount;
    const minC = ST.testMode ? 2 : LEVELS[level].minCorrect;
    let levelCompleted = false, levelFailed = false, nextLevel = null, topicCompleted = false;

    if (ld.total >= limit) {
        if (ld.correct >= minC) {
            levelCompleted = true; ld.completed = true;
            nextLevel = getNextLevel(level);
            if (nextLevel) { ST.currentLevel = nextLevel; hist.currentLevel = nextLevel; }
            else { topicCompleted = true; if (!ST.completedTopics.includes(ST.topic)) ST.completedTopics.push(ST.topic); celebrate('🏆 Konu Tamamlandı!'); }
        } else { levelFailed = true; ld.correct = 0; ld.total = 0; ld.solvedIds = []; ld.completed = false; }
    }
    saveState(); ST.phase = 'feedback';

    let nextMsg = '';
    if (levelCompleted && nextLevel) nextMsg = `<div style="margin-top:12px;padding:10px;background:var(--success-bg);border-radius:8px;text-align:center">🎉 <strong>${LEVELS[level].name} Geçildi!</strong><br>→ ${LEVELS[nextLevel].name}</div>`;
    else if (topicCompleted) {
        const nt = getNextTopic(ST.topic);
        nextMsg = nt ? `<div style="margin-top:12px;padding:12px;background:var(--success-bg);border-radius:8px;text-align:center">🏆 <strong>Konu Tamamlandı!</strong><br>Sıradaki: ${nt.e} ${nt.n}<br><button class="btn btn-primary btn-full" onclick="openTopic(${nt.id})" style="margin-top:8px">Sonraki Konu →</button></div>`
                     : `<div style="margin-top:12px;padding:12px;background:var(--success-bg);border-radius:8px;text-align:center">🏆 <strong>Tüm Konular Bitti!</strong><br><button class="btn btn-accent btn-full" onclick="goExamList()" style="margin-top:8px">📋 Denemelere Git →</button></div>`;
    } else if (levelFailed) nextMsg = `<div style="margin-top:12px;padding:10px;background:var(--danger-bg);border-radius:8px;text-align:center">⚠️ <strong>Başarısız!</strong> Tekrar başla.</div>`;

    const el = document.getElementById('learnContent');
    if (!el) return;
    el.innerHTML += `<div class="fb ${isCorrect?'fb-ok':'fb-fail'}"><div class="fb-head"><span class="fb-icon">${isCorrect?'🎉':'❌'}</span><span class="fb-title">${isCorrect?'Doğru!':'Yanlış'}</span></div><div class="fb-body">${isCorrect ? `Cevap: <strong>${q.cevap}</strong>` : `Doğru cevap: <strong>${q.cevap}</strong>${q.cozum?`<br><br>📖 ${q.cozum}`:''}`}</div>${nextMsg}${!topicCompleted ? '<div class="btn-row" style="margin-top:12px"><button class="btn btn-ghost btn-full" onclick="nextQuestion()">Sonraki Soru →</button></div>' : ''}</div>`;
    el.querySelector('.fb:last-child')?.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

window.nextQuestion = function() { ST.phase = 'question'; ST.cq = null; window.scrollTo(0,0); renderNextQuestion(); };
window.resetLevelQuestions = function() {
    const h = getHist(ST.topic), lv = ST.currentLevel;
    if (h.levels?.[lv]) h.levels[lv] = { correct:0, total:0, solvedIds:[], completed:false };
    saveState(); ST.phase = 'question'; ST.cq = null; renderNextQuestion();
};

// ============================================
// BÖLÜM 8: API (Groq)
// ============================================
async function fetchTopicSummary(topic) {
    checkApiDate();
    if (ST.apiCallCount >= CONSTANTS.API_DAILY_LIMIT) throw new Error('Limit doldu');
    ST.apiCallCount++; saveState();
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+ST.apiKey},
        body:JSON.stringify({ model:'llama-3.3-70b-versatile', messages:[{role:'system',content:'Sen bir KPSS matematik öğretmenisin. Güncel MEB müfredatına göre: Doğal sayılar 0\'dan başlar (0,1,2,3...). Sayma sayıları 1\'den başlar. En küçük doğal sayı 0, en küçük pozitif tam sayı 1\'dir. 1 asal sayı değildir. En küçük asal sayı 2\'dir. 0! = 1\'dir. Tüm cevaplarını bu güncel bilgilere göre ver.'},{role:'user',content:`"${topic.n}" konusunu max 150 kelime Türkçe özetle.`}], temperature:0.5, max_tokens:500 })
    });
    const d = await r.json();
    return d?.choices?.[0]?.message?.content?.trim() || null;
}

window.toggleAsk = function() { document.getElementById('askForm')?.classList.toggle('open'); document.getElementById('askInp')?.focus(); };
window.sendAsk = async function() {
    const inp = document.getElementById('askInp'), q = inp?.value?.trim();
    if (!q) return;
    inp.value = ''; inp.disabled = true;
    const re = document.getElementById('askResult');
    if (re) { re.classList.add('open'); re.innerHTML = dots(); }
    if (!ST.apiKey) { if (re) re.innerHTML = '⚠️ API anahtarı gerekli.'; inp.disabled = false; return; }
    checkApiDate();
    if (ST.apiCallCount >= CONSTANTS.API_DAILY_LIMIT) { if (re) re.innerHTML = '⚠️ Günlük limit doldu.'; inp.disabled = false; return; }
    ST.apiCallCount++; saveState();
    try {
        const t = getTopicById(ST.topic);
        const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+ST.apiKey},
            body:JSON.stringify({ model:'llama-3.3-70b-versatile', messages:[{role:'system',content:'Sen bir KPSS matematik öğretmenisin...'},{role:'user',content:`Konu: ${t?.n||'Matematik'}\nSoru: ${ST.cq?.soru||''}\nDoğru cevap: ${ST.cq?.cevap||''}\nÖğrenci: ${q}`}], temperature:0.7, max_tokens:600 })
        });
        const d = await r.json();
        if (re) re.innerHTML = (d?.choices?.[0]?.message?.content?.trim()||'Cevap alınamadı').replace(/\n/g,'<br>');
    } catch(e) { if (re) re.innerHTML = '❌ Hata oluştu.'; }
    inp.disabled = false;
};

// ============================================
// BÖLÜM 9: SORU BANKASI
// ============================================
// ... (BÖLÜM 9, 10, 11, 12 kodları hiç değişmedi; öncekiyle aynı)

// ============================================
// BÖLÜM 13: TEST MODU & BAŞLATMA (initApp güncellendi)
// ============================================
let tmc=0,tmt=null;
document.addEventListener('DOMContentLoaded',()=>{
    const ht=document.getElementById('headerTitle');
    if(ht)ht.addEventListener('click',()=>{tmc++;if(tmc>=5){ST.testMode=!ST.testMode;tmc=0;ST.testMode?celebrate('🧪 Test Modu Açık',1500):alert('🧪 Test Modu Kapalı');saveState();}if(tmt)clearTimeout(tmt);tmt=setTimeout(()=>{tmc=0},2000);});
    initApp();
});

function initApp() {
    loadState();
    const targetView = ST.lastView || 'vHome'; // ✅ Son görünümü yükle
    showView(targetView, false);
    if (targetView === 'vHome') updateHomeStats();
    initExamSets();
    ST.lastSession = todayStr();
    saveState();
    history.replaceState({ view: targetView }, '', '#/' + targetView); // ✅ Geçmişi güncelle
    console.log('✅ app.js hazır!');
}