// ============================================
// app.js - KPSS & DGS MATEMATİK ANA UYGULAMA
// Geometri çizim desteği eklendi (konu 29)
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

// ---------- fillTemplate (drawGeometry'den ÖNCE tanımlanmalı) ----------
function fillTemplate(text, vars) {
    let result = String(text);
    const missing = [];
    const matches = result.match(/\{[^}]+\}/g) || [];
    for (let match of matches) {
        const key = match.slice(1, -1);
        if (vars.hasOwnProperty(key)) result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), vars[key]);
        else missing.push(key);
    }
    if (missing.length) throw new Error(`Eksik değişken: ${missing.join(', ')}`);
    return result;
}

// ========== GEOMETRİ ÇİZİM FONKSİYONU ==========
function drawGeometry(canvasId, drawType, vars, params) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = '#6c63ff';
  ctx.fillStyle = '#e8e8f0';
  ctx.lineWidth = 3;
  ctx.font = 'bold 18px Inter';
  ctx.fillStyle = '#e8e8f0';
  ctx.textAlign = 'center';

  try {
    if (drawType === 'triangle') {
      const a = parseFloat(fillTemplate(params.angles[0], vars));
      const b = parseFloat(fillTemplate(params.angles[1], vars));
      const A = { x: w/2, y: 40 };
      const B = { x: 60, y: h - 60 };
      const C = { x: w - 60, y: h - 60 };
      ctx.beginPath();
      ctx.moveTo(A.x, A.y);
      ctx.lineTo(B.x, B.y);
      ctx.lineTo(C.x, C.y);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = '#e8e8f0';
      ctx.fillText(`${a}°`, (A.x+B.x)/2 - 25, (A.y+B.y)/2);
      ctx.fillText(`${b}°`, (A.x+C.x)/2 + 20, (A.y+C.y)/2);
      ctx.fillStyle = '#ffb347';
      const xVal = 180 - a - b;
      ctx.fillText(`x = ${Math.round(xVal)}°`, (B.x+C.x)/2, (B.y+C.y)/2 - 15);
    }
    else if (drawType === 'rectangle') {
      const width = parseFloat(fillTemplate(params.width, vars));
      const height = parseFloat(fillTemplate(params.height, vars));
      const startX = (w - width) / 2;
      const startY = (h - height) / 2;
      ctx.strokeRect(startX, startY, width, height);
      ctx.fillStyle = '#e8e8f0';
      ctx.fillText(`${width} cm`, startX + width/2, startY - 10);
      ctx.fillText(`${height} cm`, startX - 25, startY + height/2);
    }
    else if (drawType === 'square') {
      const side = parseFloat(fillTemplate(params.side, vars));
      const startX = (w - side) / 2;
      const startY = (h - side) / 2;
      ctx.strokeRect(startX, startY, side, side);
      ctx.fillStyle = '#e8e8f0';
      ctx.fillText(`${side} cm`, startX + side/2, startY - 10);
    }
    else if (drawType === 'circle') {
      const r = parseFloat(fillTemplate(params.radius, vars));
      ctx.beginPath();
      ctx.arc(w/2, h/2, r, 0, 2*Math.PI);
      ctx.stroke();
      ctx.fillStyle = '#e8e8f0';
      ctx.fillText(`r = ${r}`, w/2, h/2 + 20);
    }
    else if (drawType === 'right_triangle') {
      const leg1 = parseFloat(fillTemplate(params.legs[0], vars));
      const leg2 = parseFloat(fillTemplate(params.legs[1], vars));
      ctx.beginPath();
      ctx.moveTo(60, h-60);
      ctx.lineTo(60+leg1, h-60);
      ctx.lineTo(60, h-60-leg2);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = '#e8e8f0';
      ctx.fillText(`${leg1} cm`, 60+leg1/2, h-35);
      ctx.fillText(`${leg2} cm`, 40, h-60-leg2/2);
    }
  } catch(e) {
    console.warn('Geometri çizim hatası:', e);
  }
}

// ---------- GELİŞMİŞ safeEval (tek tanım) ----------
function ebob(a, b) { while (b) { [a, b] = [b, a % b]; } return a; }
function ekok(a, b) { return Math.abs(a * b) / ebob(a, b); }
function asalCarpan(n) {
    let carpanlar = [], temp = Math.abs(n);
    for (let i = 2; i <= temp; i++) {
        while (temp % i === 0) { carpanlar.push(i); temp /= i; }
    }
    return carpanlar;
}
function faktoriyel(n) { if (n < 0) return null; if (n === 0) return 1; let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; }
function permutasyon(n, r) { if (r > n || r < 0) return 0; let res = 1; for (let i = 0; i < r; i++) res *= (n - i); return res; }
function kombinasyon(n, r) {
    if (r > n || r < 0) return 0;
    r = Math.min(r, n - r);
    let c = 1;
    for (let i = 0; i < r; i++) c = c * (n - i) / (i + 1);
    return Math.round(c);
}
function sadelestir(num, den) { const g = ebob(Math.abs(num), Math.abs(den)); return `${num/g}/${den/g}`; }
function sirala(...args) { return args.sort((a,b)=>a-b).join(','); }
function zarOlasilik(t) { const o = {2:"1/36",3:"2/36",4:"3/36",5:"4/36",6:"5/36",7:"6/36",8:"5/36",9:"4/36",10:"3/36",11:"2/36",12:"1/36"}; return o[t] || "0"; }
function basamakDegerToplam(n) { let t = 0, bas = 1; while (n > 0) { t += (n % 10) * bas; bas *= 10; n = Math.floor(n / 10); } return t; }
function rakamToplam(n) { let t = 0; while (n > 0) { t += n % 10; n = Math.floor(n / 10); } return t; }
function kokDisi(n) {
    let d = 1, i = n;
    for (let j = 2; j * j <= i; j++) while (i % (j * j) === 0) { d *= j; i /= (j * j); }
    if (d === 1) return '√' + n;
    if (i === 1) return String(d);
    return d + '√' + i;
}
function aralikToplam(min, max) { if (min > max) return 0; return (min + max) * (max - min + 1) / 2; }
function sinavMevcut(a, b, c, d) { const x = (b + c * d) / (c - a); return a * x + b; }
function dogrusalDeger(x1, y1, x2, y2, k) { const m = (y2 - y1) / (x2 - x1); const n = y1 - m * x1; return Math.round((m * k + n) * 100) / 100; }
function sifirSayisi(n) { let c = 0; while (n >= 5) { n = Math.floor(n / 5); c += n; } return c; }
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
function enKucukAsalCarpan(n) { if (n < 2) return 1; if (n % 2 === 0) return 2; for (let i = 3; i * i <= n; i += 2) if (n % i === 0 && isPrime(i)) return i; return n; }
function asalCarpanToplam(n) { let s = 0, t = n; for (let i = 2; i <= t; i++) if (t % i === 0 && isPrime(i)) { s += i; while (t % i === 0) t /= i; } return s || n; }
function asalCarpanSayisi(n) { let c = 0, t = n; for (let i = 2; i <= t; i++) if (t % i === 0 && isPrime(i)) { c++; while (t % i === 0) t /= i; } return c; }
function asalCarpanCarpim(n) { let c = 1, t = n; for (let i = 2; i <= t; i++) if (t % i === 0 && isPrime(i)) { c *= i; while (t % i === 0) t /= i; } return c || 1; }
function aralikAsalSay(bas, son) { let c = 0; for (let i = Math.max(2, Math.ceil(bas)); i <= son; i++) if (isPrime(i)) c++; return c; }
function usToplam(taban, maxUs) { let s = 0; for (let i = 0; i <= maxUs; i++) s += Math.pow(taban, i); return s; }
function enAzCarpim(s1, s2, hedef) { for (let i = 1; i <= 100; i++) if ((s1 * i) % s2 === 0 && (s1 * i) >= hedef) return i; return 1; }
function kumeBilesim(k1, k2) { return k1 + k2; }
function kumeUcBilesim(k1, k2, k3) { return k1 + k2 + k3; }
function hizBul(mesafe, zaman) { return zaman === 0 ? 0 : Math.round((mesafe / zaman) * 100) / 100; }
function oranliKok(deger, oran) { return Math.sqrt(deger * oran); }
function kokBul(sayi) { return Math.sqrt(Math.abs(sayi)); }
function carpanKok(sayi) { for (let i = Math.floor(Math.sqrt(Math.abs(sayi))); i >= 1; i--) if (sayi % (i * i) === 0) return i; return 1; }
function siraIleIs(a, b) { let gun = 1, is = 0; while (is < 1) { if (gun % 2 === 1) is += 1 / a; else is += 1 / b; if (is >= 1) break; gun++; } return gun; }

const SAFE_CONTEXT = {
    Math, ebob, ekok, asalCarpan, faktoriyel, permutasyon, kombinasyon,
    sadelestir, sirala, zarOlasilik, basamakDegerToplam, rakamToplam,
    kokDisi, aralikToplam, sinavMevcut, dogrusalDeger, sifirSayisi,
    zarEnAz, zarFark, enKucukAsalCarpan, asalCarpanCarpim,
    usToplam, aralikAsalSay, enAzCarpim, kumeBilesim,
    kumeUcBilesim, hizBul, oranliKok, kokBul, carpanKok, siraIleIs,
    isPrime
};

function safeEval(expr) {
    if (/[;`'"\\]|__proto__|constructor|prototype|eval\(/i.test(expr)) throw new Error('Güvensiz ifade');
    let clean = String(expr).replace(/×/g,'*').replace(/÷/g,'/').replace(/\^/g,'**').replace(/√\(/g,'Math.sqrt(').replace(/√/g,'Math.sqrt');
    try {
        const func = new Function(...Object.keys(SAFE_CONTEXT), `return (${clean})`);
        return func(...Object.values(SAFE_CONTEXT));
    } catch(e) { throw new Error('Hesaplama hatası'); }
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
    lastView: 'vHome'
};

function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem(CONSTANTS.STORAGE_KEY) || '{}');
        if (saved.version === STATE_VERSION) Object.assign(ST, saved);
        else if (Object.keys(saved).length > 0) Object.assign(ST, saved);
    } catch (e) {}
    ST.apiKey = localStorage.getItem(CONSTANTS.API_KEY_STORAGE) || '';
    if (!ST.lastView) ST.lastView = 'vHome';
    
    const hasActiveStudy = ST.topic && ST.phase && (ST.phase === 'question' || ST.phase === 'feedback') && getTopicById(ST.topic);
    if (ST.lastView === 'vLearn' && !hasActiveStudy) {
        ST.lastView = 'vHome';
        ST.phase = 'summary';
        ST.cq = null;
    }
    
    initMissingFields();
    checkApiDate();
}

function initMissingFields() {
    for (let i = 1; i <= CONSTANTS.TOTAL_TOPICS; i++) if (!ST.hist[i]) ST.hist[i] = { levels: {}, currentLevel: 'KOLAY' };
    if (!ST.questionBankProgress) ST.questionBankProgress = {};
    if (!ST.examSets) ST.examSets = {};
    if (!ST.examGeneration) ST.examGeneration = 1;
    if (!ST.summaries) ST.summaries = {};
    if (!ST.lastView) ST.lastView = 'vHome';
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
// BÖLÜM 3: SAYFA GEÇİŞLERİ (YENİLEME SORUNU ÇÖZÜLDÜ)
// ============================================

let currentView = 'vHome';

const viewRenderers = {
    vHome: updateHomeStats,
    vTopics: renderTopicsList,
    vLearn: function() {
        if (ST.phase === 'pre-study' || ST.phase === 'summary') renderPreStudySummary();
        else if (ST.phase === 'question') renderNextQuestion();
        else if (ST.phase === 'feedback' && ST.cq) {
            renderQuestionUI(ST.cq, ST.cq.level || ST.currentLevel, LEVELS[ST.cq.level || ST.currentLevel]);
        } else {
            renderPreStudySummary();
        }
    },
    vQuestionBank: renderQuestionBankList,
    vQBSolve: function() {
        renderQBSolveHeader();
        if (ST.phase === 'question' && ST.cq) {
            const el = document.getElementById('qbSolveContent');
            if (el && ST.cq) {
                const q = ST.cq;
                const zc = q.zorluk === 'kolay' ? 'badge-grn' : q.zorluk === 'zor' ? 'badge-red' : 'badge-warn';
                const hasChoices = q.inputType === 'choice' && q.choices && q.choices.length >= 2;
                const ansHTML = hasChoices ? `<div style="display:flex;flex-direction:column;gap:10px;margin-top:16px">${q.choices.map((ch,i)=>`<button class="btn btn-secondary btn-full qb-choice-btn" onclick="submitQBChoiceAnswer(${i})" style="text-align:left;justify-content:flex-start;padding:14px 16px"><span style="font-weight:700;margin-right:10px;color:var(--accent)">${String.fromCharCode(65+i)})</span> ${ch.text}</button>`).join('')}</div>`
                    : `<div class="ans-row"><input id="qbAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." onkeydown="if(event.key==='Enter')checkQBAnswer()"><button class="btn btn-primary" onclick="checkQBAnswer()">✓</button></div><button class="btn btn-ghost btn-full" style="margin-top:8px" onclick="skipQBQuestion()">Boş Bırak →</button>`;
                const t = getTopicById(ST.topic);
                el.innerHTML = `<div class="prog-bar-wrap"><div class="prog-bar-label"><span>📝 ${t?.n||''}</span><span>${getQBProgress(ST.topic).solved.length}/${CONSTANTS.QUESTION_BANK_SIZE}</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${(getQBProgress(ST.topic).solved.length/CONSTANTS.QUESTION_BANK_SIZE)*100}%"></div></div></div><div class="card accent-top"><div class="q-header"><span class="q-counter">Soru ${getQBProgress(ST.topic).solved.length+1}</span><div class="q-tags"><span class="badge ${zc}">${q.zorluk}</span><span class="badge badge-acc">${t?.n||''}</span></div></div><div class="q-text">${q.soru.replace(/\n/g,'<br>')}</div>${ansHTML}</div>`;
            }
        } else {
            renderNextQBQuestion();
        }
    },
    vExamList: renderExamList,
    vExam: function() {
        if (ST.currentExam) {
            updateExamTimer();
            if (!ST.currentExam.timer) startExamTimer();
            loadExamQuestion(ST.currentExam.currentIndex);
        } else {
            goExamList();
        }
    },
    vStats: renderStats
};

function showView(id, addToHistory = true) {
    document.getElementById(currentView)?.classList.remove('active');
    document.getElementById(id)?.classList.add('active');
    currentView = id;
    ST.lastView = id;
    updateHeader(id);
    window.scrollTo(0, 0);

    if (addToHistory) {
        history.pushState({ view: id }, '', '#/' + id);
    }
    
    if (viewRenderers[id]) {
        viewRenderers[id]();
    }
    
    saveState();
}

function updateHeader(viewId) {
    const t = document.getElementById('headerTitle'), b = document.getElementById('btnBack');
    if (!t || !b) return;
    const titles = { vHome:'KPSS Matematik', vTopics:'📚 Konular', vLearn:'Konu Çalış', vQuestionBank:'📝 Soru Bankası', vQBSolve:'Soru Bankası', vExamList:'📋 Denemeler', vExam:'Deneme Sınavı', vStats:'📊 İstatistikler' };
    t.textContent = titles[viewId] || 'KPSS Matematik';
    b.style.visibility = viewId === 'vHome' ? 'hidden' : 'visible';
}

window.goBack = function() { history.back(); };
window.goHome = function() { showView('vHome'); };
window.goTopics = function() { showView('vTopics'); };
window.goQuestionBank = function() { showView('vQuestionBank'); };
window.goExamList = function() { showView('vExamList'); };
window.goStats = function() { showView('vStats'); };
window.toggleMenu = function() { document.getElementById('sideMenu')?.classList.toggle('hidden'); };

window.addEventListener('popstate', function(event) {
    const state = event.state;
    if (state && state.view) showView(state.view, false);
    else showView('vHome', false);
});

// ============================================
// BÖLÜM 4: ANA SAYFA & KONU LİSTESİ
// ============================================

function updateHomeStats() {
    const elTopics = document.getElementById('statTopics');
    const elQuestions = document.getElementById('statQuestions');
    const elAccuracy = document.getElementById('statAccuracy');
    const elStreak = document.getElementById('statStreak');
    if (elTopics) elTopics.textContent = ST.completedTopics.length;
    if (elQuestions) elQuestions.textContent = ST.totalQ;
    if (elAccuracy) elAccuracy.textContent = '%' + (ST.totalQ > 0 ? Math.round((ST.totalCorrect / ST.totalQ) * 100) : 0);
    if (elStreak) elStreak.textContent = ST.maxStreak;
    
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

// ===============================
//  PROFESYONEL SORU ÜRETİM MOTORU
// ===============================

let GLOBAL_QUESTION_FINGERPRINTS = new Set();
let USER_SOLVED_FINGERPRINTS = new Map();

function getQuestionFingerprint(templateId, vars) {
    const sortedKeys = Object.keys(vars).sort();
    let canonical = templateId;
    for (let k of sortedKeys) canonical += `|${k}:${vars[k]}`;
    return simpleHash(canonical);
}

function isQuestionUsedGlobally(fingerprint) { return GLOBAL_QUESTION_FINGERPRINTS.has(fingerprint); }
function markQuestionUsedGlobally(fingerprint) { GLOBAL_QUESTION_FINGERPRINTS.add(fingerprint); if (GLOBAL_QUESTION_FINGERPRINTS.size > 10000) { const toDelete = [...GLOBAL_QUESTION_FINGERPRINTS].slice(0, 5000); toDelete.forEach(f => GLOBAL_QUESTION_FINGERPRINTS.delete(f)); } }

function getUserSolvedFingerprints(topicId, level) {
    const key = `${topicId}|${level}`;
    if (!USER_SOLVED_FINGERPRINTS.has(key)) USER_SOLVED_FINGERPRINTS.set(key, new Set());
    return USER_SOLVED_FINGERPRINTS.get(key);
}

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

    for (let attempt = 0; attempt < 80; attempt++) {
        const vars = {};
        for (const key of independent) {
            const arr = varRanges[key];
            const min = arr[0], max = arr[1], filter = arr[2];
            let val, tries = 0;
            do { val = randomInt(min, max); tries++; if (tries > 200) break; } while (!valueMatchesFilter(val, filter));
            if (tries > 200) vars[key] = randomInt(min,max);
            else vars[key] = val;
        }
        let depOk = true;
        for (const key of dependent) {
            let expr = varRanges[key];
            if (typeof expr === 'number') vars[key] = expr;
            else if (typeof expr === 'string') {
                let resolved = expr;
                for (const k of Object.keys(vars)) resolved = resolved.replace(new RegExp(`\\{${k}\\}`, 'g'), vars[k]);
                if (/\{[^}]+\}/.test(resolved)) { depOk = false; break; }
                try { vars[key] = safeEval(resolved); } catch(e) { depOk = false; break; }
            } else { depOk = false; break; }
        }
        if (!depOk) continue;
        if (rule) {
            try {
                let ruleExpr = rule;
                for (const k of Object.keys(vars)) ruleExpr = ruleExpr.replace(new RegExp(`\\{${k}\\}`, 'g'), vars[k]);
                if (!safeEval(ruleExpr)) continue;
            } catch(e) { continue; }
        }
        return vars;
    }
    const fallback = {};
    for (const key of independent) fallback[key] = randomInt(varRanges[key][0], varRanges[key][1]);
    for (const key of dependent) fallback[key] = 0;
    return fallback;
}

function generatePlausibleDistractors(correctAnswer) {
    const correctNum = typeof correctAnswer === 'number' ? correctAnswer : parseFloat(correctAnswer);
    if (isNaN(correctNum)) {
        const verbal = String(correctAnswer);
        const opposites = { 'Tek':'Çift', 'Çift':'Tek', 'Evet':'Hayır', 'Hayır':'Evet', 'Artar':'Azalır', 'Azalır':'Artar', 'Doğru':'Yanlış', 'Yanlış':'Doğru' };
        if (opposites[verbal]) return [opposites[verbal]];
        return [];
    }
    let dists = new Set();
    dists.add(correctNum + (correctNum * 0.1));
    dists.add(correctNum - (correctNum * 0.1));
    dists.add(correctNum + 1);
    dists.add(correctNum - 1);
    dists.add(correctNum * 2);
    dists.add(correctNum / 2);
    let arr = [...dists].map(v => Math.round(v * 100) / 100).filter(v => Math.abs(v - correctNum) > 0.01 && v > 0);
    arr = arr.slice(0, 3);
    while (arr.length < 3) arr.push(correctNum + randomInt(1,10));
    return arr;
}

function autoGenerateChoices(correctAnswer) {
    const s = String(correctAnswer);
    const verbalPairs = { 'Tek':'Çift', 'Çift':'Tek', 'Evet':'Hayır', 'Hayır':'Evet', 'Artar':'Azalır', 'Azalır':'Artar', 'Doğru':'Yanlış', 'Yanlış':'Doğru' };
    if (verbalPairs[s]) return [{ label: 'A', text: s, isCorrect: true }, { label: 'B', text: verbalPairs[s], isCorrect: false }];
    if (s.includes('/')) {
        const parts = s.split('/');
        if (parts.length === 2) {
            const pay = parseInt(parts[0]), payda = parseInt(parts[1]);
            const dists = [`${pay+1}/${payda}`, `${pay-1}/${payda}`, `${pay}/${payda+1}`, `${pay*2}/${payda}`];
            const unique = [...new Set([s, ...dists])].slice(0,4);
            return shuffleArray(unique).map((val, i) => ({ label: String.fromCharCode(65+i), text: val, isCorrect: val === s }));
        }
    }
    const correctNum = Number(s);
    if (!isNaN(correctNum)) {
        const dists = generatePlausibleDistractors(correctNum);
        let options = [correctNum, ...dists];
        options = [...new Set(options.map(o => Math.round(o*100)/100))];
        while (options.length < 4) options.push(Math.round((correctNum + randomInt(-10,10))*100)/100);
        return shuffleArray(options.slice(0,4)).map((val, i) => ({ label: String.fromCharCode(65+i), text: String(val), isCorrect: Math.abs(val-correctNum) < 0.001 }));
    }
    return [{ label: 'A', text: s, isCorrect: true }, { label: 'B', text: 'Diğer', isCorrect: false }];
}

function calculateAnswer(formula, vars) {
    try {
        let expr = String(formula);
        for (const [k, v] of Object.entries(vars)) expr = expr.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
        const parts = expr.split('/');
        if (parts.length === 2 && !/[+\-*()]/.test(expr)) {
            const num = safeEval(parts[0]);
            const den = safeEval(parts[1]);
            if (den === 0) return null;
            if (num % den === 0) return num / den;
            const g = ebob(Math.abs(num), Math.abs(den));
            return `${num/g}/${den/g}`;
        }
        const result = safeEval(expr);
        return (isFinite(result) && !isNaN(result)) ? result : null;
    } catch(e) { return null; }
}

let recentTemplatesCache = {};
function getRecentTemplateIds(topicId, count) { if (!recentTemplatesCache[topicId]) recentTemplatesCache[topicId] = []; return recentTemplatesCache[topicId].slice(-count); }
function addRecentTemplateId(topicId, templateId) { if (!recentTemplatesCache[topicId]) recentTemplatesCache[topicId] = []; recentTemplatesCache[topicId].push(templateId); if (recentTemplatesCache[topicId].length > 20) recentTemplatesCache[topicId].shift(); }

function filterTemplatesByLevel(templates, level) {
    const zMap = { 'KOLAY': 'kolay', 'ORTA': 'orta', 'ZOR': 'zor' };
    const targetZ = zMap[level] || 'orta';
    const matching = templates.filter(t => (t.z || 'orta') === targetZ);
    if (matching.length >= 3) return matching;
    return templates;
}

function getVarRangesForLevel(template, level) { return template.v || {}; }

function generateSolution(template, vars, answer) {
    if (template.cozum) {
        let sol = String(template.cozum);
        for (const [k, v] of Object.entries(vars)) sol = sol.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
        sol = sol.replace('{cevap}', String(answer));
        return sol;
    }
    return `Cevap: ${String(answer)}`;
}

function formatAnswer(answer, inputType) {
    const s = String(answer);
    if (inputType === 'choice') return s;
    if (!isNaN(Number(s))) { const n = Number(s); if (Number.isInteger(n)) return String(n); return parseFloat(n.toFixed(3)).toString(); }
    return s;
}

function determineInputType(template, answer) {
    if (template.inputType && template.inputType !== 'auto') return template.inputType;
    const s = String(answer);
    if (['Tek','Çift','Evet','Hayır','Artar','Azalır','Doğru','Yanlış'].includes(s)) return 'choice';
    if (/[√π∞\[\{]/.test(s)) return 'choice';
    if (isNaN(Number(s.replace(/[+\-*/]/g,''))) && !/^-?\d+\.?\d*\/?-?\d*$/.test(s)) return 'choice';
    return 'keyboard';
}

function getSolvedIds(topicId, level, mode) {
    if (mode === 'questionBank') {
        const p = getQBProgress(topicId);
        return p.solved || [];
    }
    const fpSet = getUserSolvedFingerprints(topicId, level);
    return fpSet;
}

function generateQuestion(topicId, level, options = {}) {
    const templates = QUESTION_TEMPLATES[topicId];
    if (!templates || !templates.length) return null;

    const solvedFingerprints = getSolvedIds(topicId, level, options.mode);
    let eligible = filterTemplatesByLevel(templates, level);
    if (!eligible.length) eligible = templates;

    const recentIds = getRecentTemplateIds(topicId, 3);
    let fresh = eligible.filter(t => !recentIds.includes(t.id));
    if (!fresh.length) fresh = eligible;

    const shuffled = shuffleArray([...fresh]);
    for (let i = 0; i < shuffled.length; i++) {
        const template = shuffled[i];
        for (let a = 0; a < 8; a++) {
            const q = tryGenerateFromTemplate(template, level, solvedFingerprints, topicId, options);
            if (q) {
                addRecentTemplateId(topicId, template.id);
                return q;
            }
        }
    }
    return generateFallbackQuestion(topicId, level, options);
}

function tryGenerateFromTemplate(template, level, solvedFingerprints, topicId, options) {
    const varRanges = getVarRangesForLevel(template, level);
    const vars = generateVariables(varRanges, template.kural);
    if (!vars) return null;

    let questionText;
    try { questionText = fillTemplate(template.s, vars); } catch(e) { return null; }

    const cevapSonuc = calculateAnswer(template.c, vars);
    if (cevapSonuc === null || cevapSonuc === undefined) return null;

    const fingerprint = getQuestionFingerprint(template.id, vars);
    if (isQuestionUsedGlobally(fingerprint)) return null;
    
    if (solvedFingerprints.has && solvedFingerprints.has(fingerprint)) return null;
    if (Array.isArray(solvedFingerprints) && solvedFingerprints.includes(fingerprint)) return null;

    const inputType = determineInputType(template, cevapSonuc);
    let choices = null;
    let correctChoiceIndex = 0;

    if (inputType === 'choice') {
        if (template.choices && Array.isArray(template.choices)) {
            choices = template.choices.map((ct, i) => {
                let text = String(ct);
                for (const [k, v] of Object.entries(vars)) text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
                return { label: String.fromCharCode(65+i), text, isCorrect: String(text).trim() === String(cevapSonuc).trim() };
            });
        } else {
            choices = autoGenerateChoices(cevapSonuc);
        }
        correctChoiceIndex = choices.findIndex(ch => ch.isCorrect);
        if (correctChoiceIndex === -1) correctChoiceIndex = 0;
    }

    markQuestionUsedGlobally(fingerprint);
    const userSet = getUserSolvedFingerprints(topicId, level);
    userSet.add(fingerprint);
    if (userSet.size > 2000) { const toDel = [...userSet].slice(0, 500); toDel.forEach(f => userSet.delete(f)); }

    const generatedId = `q_${template.id}_${fingerprint}`;

    return {
        id: generatedId,
        fingerprint: fingerprint,
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
        topicId: topicId,
        draw: template.draw,
        drawParams: template.drawParams
    };
}

function generateFallbackQuestion(topicId, level, options) {
    const templates = QUESTION_TEMPLATES[topicId];
    if (!templates || !templates.length) return null;
    for (let i = 0; i < 15; i++) {
        const tpl = templates[Math.floor(Math.random() * templates.length)];
        const varRanges = getVarRangesForLevel(tpl, level);
        const vars = generateVariables(varRanges, tpl.kural);
        if (!vars) continue;
        const cevapSonuc = calculateAnswer(tpl.c, vars);
        if (cevapSonuc === null) continue;
        const fingerprint = getQuestionFingerprint(tpl.id, vars);
        if (isQuestionUsedGlobally(fingerprint)) continue;
        markQuestionUsedGlobally(fingerprint);
        const inputType = determineInputType(tpl, cevapSonuc);
        let choices = null;
        let correctChoiceIndex = 0;
        if (inputType === 'choice') {
            choices = tpl.choices ? tpl.choices.map((ct,i) => ({ label: String.fromCharCode(65+i), text: fillTemplate(ct, vars), isCorrect: false })) : autoGenerateChoices(cevapSonuc);
            const correctIdx = choices.findIndex(ch => String(ch.text).trim() === String(cevapSonuc).trim());
            if (correctIdx !== -1) { choices[correctIdx].isCorrect = true; correctChoiceIndex = correctIdx; }
            else if (choices.length > 0) { choices[0].isCorrect = true; correctChoiceIndex = 0; }
        }
        return {
            id: `q_${tpl.id}_${fingerprint}`,
            fingerprint,
            templateId: tpl.id,
            soru: fillTemplate(tpl.s, vars),
            cevap: formatAnswer(cevapSonuc, inputType),
            cevapRaw: cevapSonuc,
            zorluk: tpl.z || 'orta',
            inputType,
            choices,
            correctChoiceIndex,
            cozum: generateSolution(tpl, vars, cevapSonuc),
            vars,
            topicId,
            draw: tpl.draw,
            drawParams: tpl.drawParams
        };
    }
    return { id: 'joker_1', soru: '1 + 1 kaçtır?', cevap: '2', cevapRaw: 2, zorluk: 'kolay', inputType: 'keyboard', choices: null, cozum: '1+1=2', topicId };
}

const SoruUretimMotoru = { generateQuestion, resetGlobalFingerprints: () => GLOBAL_QUESTION_FINGERPRINTS.clear(), resetUserProgress: (topicId, level) => { USER_SOLVED_FINGERPRINTS.delete(`${topicId}|${level}`); } };

// ============================================
// BÖLÜM 6: SORU GÖSTERİM & CEVAP
// ============================================

function renderNextQuestion() {
    if (typeof QUESTION_TEMPLATES === 'undefined') { document.getElementById('learnContent').innerHTML = '<div class="err">Şablonlar yüklenemedi.</div>'; return; }
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

    // Geometri çizimi için canvas oluştur - BOYUTLAR BÜYÜTÜLDÜ
    let geometryHtml = '';
    if (q.draw) {
        const canvasId = `geoCanvas_${Date.now()}_${Math.random()}`;
        geometryHtml = `<canvas id="${canvasId}" width="500" height="350" style="width:100%; max-width:500px; height:auto; background:#ffffff; border-radius:12px; margin:16px auto; display:block; border:2px solid #6c63ff; box-shadow:0 4px 12px rgba(0,0,0,0.2);"></canvas>`;
        setTimeout(() => {
            if (typeof drawGeometry === 'function') {
                drawGeometry(canvasId, q.draw, q.vars, q.drawParams);
            }
        }, 50);
    }

    const hasChoices = q.inputType === 'choice' && q.choices && q.choices.length >= 2;
    const ansHTML = hasChoices
        ? `<div style="display:flex;flex-direction:column;gap:10px;margin-top:16px">${q.choices.map((ch,i) => `<button class="btn btn-secondary btn-full choice-btn" onclick="submitChoiceAnswer(${i})" style="text-align:left;justify-content:flex-start;padding:14px 16px"><span style="font-weight:700;margin-right:10px;color:var(--accent)">${String.fromCharCode(65+i)})</span> ${ch.text}</button>`).join('')}</div>`
        : `<div class="ans-row"><input id="ansInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." autocomplete="off" onkeydown="if(event.key==='Enter') checkAnswer()"><button class="btn btn-primary" onclick="checkAnswer()">✓</button></div><div class="ans-hint">Sayı, kesir (3/4) veya birim ile yaz</div>`;

    el.innerHTML = `
        <div class="prog-bar-wrap"><div class="prog-bar-label"><span>📊 ${levelInfo.name}</span><span>${lh.correct||0}/${lh.total||0} doğru</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width:${((lh.total||0)/limit)*100}%"></div></div></div>
        <div class="card accent-top"><div class="q-header"><span class="q-counter">Soru ${(lh.total||0)+1}/${limit}</span><div class="q-tags"><span class="badge ${zc}">${q.zorluk}</span><span class="badge badge-acc">${levelInfo.name}</span></div></div>
        ${geometryHtml}
        <div class="q-text">${q.soru.replace(/\n/g,'<br>')}</div>${ansHTML}</div>
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
    if (!hist.levels[level]) hist.levels[level] = { correct:0, total:0 };
    const ld = hist.levels[level];
    ld.total++; if (isCorrect) ld.correct++;

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
        } else { levelFailed = true; ld.correct = 0; ld.total = 0; ld.completed = false; }
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
    if (h.levels?.[lv]) h.levels[lv] = { correct:0, total:0, completed:false };
    USER_SOLVED_FINGERPRINTS.delete(`${ST.topic}|${lv}`);
    saveState(); ST.phase = 'question'; ST.cq = null; renderNextQuestion();
};

// ============================================
// BÖLÜM 7: API (Groq)
// ============================================

async function fetchTopicSummary(topic) {
    checkApiDate();
    if (ST.apiCallCount >= CONSTANTS.API_DAILY_LIMIT) throw new Error('Limit doldu');
    ST.apiCallCount++; saveState();
    
    const systemPrompt = `Sen deneyimli bir KPSS matematik öğretmenisin. Bir konuyu öğrenciye öğretirken şu sırayı takip et:
1. Konunun ne olduğunu 1 cümleyle tanımla
2. En önemli formülleri madde madde yaz
3. 1-2 tane çözümlü örnek ver
4. KPSS'de en çok çıkan soru tiplerini belirt
5. Öğrencinin dikkat etmesi gereken püf noktaları söyle

Yanıtın Türkçe, max 250 kelime olsun. Güncel MEB müfredatına uygun hareket et.`;
    
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+ST.apiKey},
        body:JSON.stringify({ model:'llama-3.3-70b-versatile', messages:[
            {role:'system', content: systemPrompt},
            {role:'user', content: `"${topic.n}" konusunu KPSS öğrencisine öğret. Formülleri, örnek soru çözümlerini ve püf noktaları mutlaka ekle.`}
        ], temperature:0.4, max_tokens:600 })
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
        const systemPrompt = `Sen bir KPSS matematik öğretmenisin. Öğrencinin sorduğu soruyu çözerken:
1. Dünyanın kabul ettiği en kısa ve pratik çözüm yöntemini kullan
2. Her adımı numaralandırarak açıkla
3. Mümkünse formülü göster ve formülün nereden geldiğini kısaca belirt
4. Cevabı net bir şekilde söyle
5. Öğrenciye "bu tarz sorularda şuna dikkat et" şeklinde bir not ekle

Kesinlikle uzun uzun düşünme, direkt en kısa yoldan çöz. Türkçe, max 150 kelime.`;
        
        const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+ST.apiKey},
            body:JSON.stringify({ model:'llama-3.3-70b-versatile', messages:[
                {role:'system', content: systemPrompt},
                {role:'user', content:`Konu: ${t?.n||'Matematik'}\nSoru: ${ST.cq?.soru||''}\nDoğru cevap: ${ST.cq?.cevap||''}\nÖğrencinin sorusu: ${q}`}
            ], temperature:0.5, max_tokens:500 })
        });
        const d = await r.json();
        if (re) re.innerHTML = (d?.choices?.[0]?.message?.content?.trim()||'Cevap alınamadı').replace(/\n/g,'<br>');
    } catch(e) { if (re) re.innerHTML = '❌ Hata oluştu.'; }
    inp.disabled = false;
};

// ============================================
// BÖLÜM 8: SORU BANKASI (generateQuestion kullanır)
// ============================================

function renderQuestionBankList() {
    const el = document.getElementById('qbTopicsList');
    if (!el) return;
    let html = '', lp = '';
    TOPICS.forEach(t => {
        if (t.p !== lp) { lp = t.p; html += `<div class="phase-sep">${t.p}</div>`; }
        const p = getQBProgress(t.id), s = p.solved.length, pct = Math.round((s/CONSTANTS.QUESTION_BANK_SIZE)*100), done = s >= CONSTANTS.QUESTION_BANK_SIZE;
        html += `<div class="topic-row ${done?'t-done':''}" onclick="startQuestionBank(${t.id})"><span class="t-icon">${t.e}</span><div class="t-info"><div class="t-name">${t.n}</div><div class="t-meta">${done?'✅ Tamamlandı':`${s}/${CONSTANTS.QUESTION_BANK_SIZE}`}</div><div class="prog-bar-wrap"><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${pct}%"></div></div></div></div><span>${done?'✅':'📝'}</span></div>`;
    });
    el.innerHTML = html;
}

window.startQuestionBank = function(topicId) {
    if (!QUESTION_TEMPLATES?.[topicId]) { alert('Bu konu için şablon yok.'); return; }
    if (getQBProgress(topicId).solved.length >= CONSTANTS.QUESTION_BANK_SIZE) { alert('🎉 Tamamlandı!'); return; }
    ST.topic = topicId;
    ST.cq = null;
    showView('vQBSolve');
};

function renderQBSolveHeader() {
    const t = getTopicById(ST.topic), p = getQBProgress(ST.topic);
    document.getElementById('qbSolveTitle').textContent = `📝 ${t?.n||''}`;
    document.getElementById('qbSolveProgress').textContent = `${p.solved.length}/${CONSTANTS.QUESTION_BANK_SIZE}`;
}

function renderNextQBQuestion() {
    const topicId = ST.topic;
    const progress = getQBProgress(topicId);
    const limit = CONSTANTS.QUESTION_BANK_SIZE;
    const el = document.getElementById('qbSolveContent');
    if (!el) return;
    
    if (progress.solved.length >= limit) {
        el.innerHTML = `<div class="card accent-top" style="text-align:center"><h3>🎉 Tamamlandı!</h3><p style="font-size:24px;font-weight:700;color:var(--accent)">${progress.solved.length}/${limit}</p><button class="btn btn-primary btn-full" onclick="goQuestionBank()">📝 Listeye Dön</button></div>`;
        return;
    }
    
    const levels = ['KOLAY', 'ORTA', 'ZOR'];
    const randomLevel = levels[Math.floor(Math.random() * levels.length)];
    
    el.innerHTML = `<div class="card">${dots()}</div>`;
    const qData = generateQuestion(topicId, randomLevel, { mode: 'questionBank' });
    if (!qData) {
        el.innerHTML = '<div class="err">Soru üretilemedi. Lütfen tekrar deneyin.</div>';
        return;
    }
    ST.cq = { ...qData, mode: 'questionBank', questionBankMode: true };
    const zc = qData.zorluk === 'kolay' ? 'badge-grn' : qData.zorluk === 'zor' ? 'badge-red' : 'badge-warn';
    const t = getTopicById(topicId);
    const hasChoices = qData.inputType === 'choice' && qData.choices && qData.choices.length >= 2;
    
    // Geometri çizimi için canvas oluştur (soru bankasında da) - BOYUTLAR BÜYÜTÜLDÜ
    let geometryHtml = '';
    if (qData.draw) {
        const canvasId = `geoCanvas_${Date.now()}_${Math.random()}`;
        geometryHtml = `<canvas id="${canvasId}" width="500" height="350" style="width:100%; max-width:500px; height:auto; background:#ffffff; border-radius:12px; margin:16px auto; display:block; border:2px solid #6c63ff; box-shadow:0 4px 12px rgba(0,0,0,0.2);"></canvas>`;
        setTimeout(() => {
            if (typeof drawGeometry === 'function') {
                drawGeometry(canvasId, qData.draw, qData.vars, qData.drawParams);
            }
        }, 50);
    }
    
    const ansHTML = hasChoices
        ? `<div style="display:flex;flex-direction:column;gap:10px;margin-top:16px">${qData.choices.map((ch,i)=>`<button class="btn btn-secondary btn-full qb-choice-btn" onclick="submitQBChoiceAnswer(${i})" style="text-align:left;justify-content:flex-start;padding:14px 16px"><span style="font-weight:700;margin-right:10px;color:var(--accent)">${String.fromCharCode(65+i)})</span> ${ch.text}</button>`).join('')}</div>`
        : `<div class="ans-row"><input id="qbAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." onkeydown="if(event.key==='Enter')checkQBAnswer()"><button class="btn btn-primary" onclick="checkQBAnswer()">✓</button></div><button class="btn btn-ghost btn-full" style="margin-top:8px" onclick="skipQBQuestion()">Boş Bırak →</button>`;
    
    el.innerHTML = `<div class="prog-bar-wrap"><div class="prog-bar-label"><span>📝 ${t?.n||''}</span><span>${progress.solved.length}/${limit}</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${(progress.solved.length/limit)*100}%"></div></div></div><div class="card accent-top"><div class="q-header"><span class="q-counter">Soru ${progress.solved.length+1}</span><div class="q-tags"><span class="badge ${zc}">${qData.zorluk}</span><span class="badge badge-acc">${t?.n||''}</span></div></div>${geometryHtml}<div class="q-text">${qData.soru.replace(/\n/g,'<br>')}</div>${ansHTML}</div>`;
    if (!hasChoices) setTimeout(()=>document.getElementById('qbAnsInp')?.focus(), 100);
}

window.submitQBChoiceAnswer = function(idx) {
    const q = ST.cq; if (!q) return;
    document.querySelectorAll('.qb-choice-btn').forEach((btn,i)=>{ btn.disabled=true; if(i===q.correctChoiceIndex){btn.style.borderColor='var(--success)';btn.style.background='var(--success-bg)'} else if(i===idx){btn.style.borderColor='var(--danger)';btn.style.background='var(--danger-bg)'} });
    processQBAnswer(idx === q.correctChoiceIndex, q);
};

window.checkQBAnswer = function() {
    const inp = document.getElementById('qbAnsInp'); if (!inp?.value.trim()) return;
    inp.disabled = true; if (!ST.cq) return;
    processQBAnswer(checkEqual(inp.value.trim(), ST.cq.cevap), ST.cq);
};

function processQBAnswer(isCorrect, q) {
    const p = getQBProgress(q.topicId||ST.topic);
    if (!p.solved.includes(q.id)) p.solved.push(q.id);
    ['KOLAY','ORTA','ZOR'].forEach(lev => {
        const userSet = getUserSolvedFingerprints(q.topicId||ST.topic, lev);
        userSet.add(q.fingerprint);
    });
    
    ST.totalQ++; if(isCorrect){ST.totalCorrect++;ST.streak++;if(ST.streak>ST.maxStreak)ST.maxStreak=ST.streak}else ST.streak=0;
    saveState(); renderQBSolveHeader();
    const el = document.getElementById('qbSolveContent');
    if(el) el.innerHTML += `<div class="fb ${isCorrect?'fb-ok':'fb-fail'}"><div class="fb-head"><span class="fb-icon">${isCorrect?'🎉':'❌'}</span><span class="fb-title">${isCorrect?'Doğru!':'Yanlış'}</span></div><div class="fb-body">${isCorrect?`Cevap: <strong>${q.cevap}</strong>`:`Doğru: <strong>${q.cevap}</strong>${q.cozum?`<br>📖 ${q.cozum}`:''}`}</div><div class="btn-row" style="margin-top:12px"><button class="btn btn-ghost btn-full" onclick="nextQBQuestion()">Sonraki →</button></div></div>`;
}

window.skipQBQuestion = function() { const q = ST.cq; if(!q)return; const p=getQBProgress(q.topicId||ST.topic); if(!p.solved.includes(q.id))p.solved.push(q.id); saveState(); renderQBSolveHeader(); nextQBQuestion(); };
window.nextQBQuestion = function() { ST.cq=null; window.scrollTo(0,0); renderNextQBQuestion(); };

// ============================================
// BÖLÜM 9: DENEME SINAVI
// ============================================

function renderExamList() {
    const el = document.getElementById('examListContent');
    if (!el) return;
    if (!Object.keys(ST.examSets).length) initExamSets();
    let html = '';
    for (let i=1;i<=CONSTANTS.EXAM_SETS;i++) {
        const sid='set_'+i, sd=ST.examSets[sid]||{};
        html += `<div class="exam-set-card" onclick="startExamSet('${sid}')"><div class="exam-set-info"><h3>📋 Deneme ${i}</h3><span>20 soru · 20 dk</span></div><div class="exam-set-score">${sd.completed?`<div class="net">${sd.net}</div><div class="date">${sd.date||''}</div>`:'<span class="badge">Başla</span>'}</div></div>`;
    }
    if (Object.values(ST.examSets).every(s=>s.completed)) html += `<div style="margin-top:16px;text-align:center"><p style="color:var(--success)">🎉 Tüm denemeler tamam!</p><button class="btn btn-primary btn-full" onclick="resetAllExams()">🔄 Yeni Sorularla Başla</button></div>`;
    el.innerHTML = html;
}

function initExamSets() {
    for (let i=1;i<=CONSTANTS.EXAM_SETS;i++) if (!ST.examSets['set_'+i]) ST.examSets['set_'+i] = { seed:EXAM_SEEDS[i-1]+(ST.examGeneration-1)*100, completed:false, answers:[], net:null, date:null };
    saveState();
}

window.startExamSet = function(setId) {
    if (!ST.examSets[setId]) return;
    if (ST.examSets[setId].completed && !confirm('Tekrar başlat?')) return;
    const questions = generateExamQuestions(ST.examSets[setId].seed);
    ST.currentExam = { setId, questions, currentIndex:0, answers:[], timeLeft:CONSTANTS.EXAM_DURATION*60, timer:null };
    showView('vExam');
    document.getElementById('examTitle').textContent = `Deneme ${setId.replace('set_','')}`;
    updateExamTimer(); startExamTimer(); loadExamQuestion(0);
};

function generateExamQuestions(seed) {
    const all = [];
    TOPICS.forEach(t => {
        const tpls = QUESTION_TEMPLATES[t.id];
        if (!tpls) return;
        for (const tpl of shuffleWithSeed(tpls, seed+t.id).slice(0,3)) {
            const vars = generateVariables(tpl.v, tpl.kural);
            if (!vars) continue;
            const cevap = calculateAnswer(tpl.c, vars);
            if (cevap === null) continue;
            const it = determineInputType(tpl, cevap);
            let choices = null;
            if (it==='choice') choices = tpl.choices ? tpl.choices.map((ct,i) => ({ label: String.fromCharCode(65+i), text: fillTemplate(ct, vars), isCorrect: false })) : autoGenerateChoices(cevap);
            if (it==='choice' && choices) {
                const correctIdx = choices.findIndex(ch => String(ch.text).trim() === String(cevap).trim());
                if (correctIdx !== -1) choices[correctIdx].isCorrect = true;
                else if (choices.length > 0) choices[0].isCorrect = true;
            }
            all.push({ id: generateQuestionId(tpl.id,vars), s:fillTemplate(tpl.s,vars), c:formatAnswer(cevap,it), cRaw:cevap, z:tpl.z||'orta', inputType:it, choices, correctChoiceIndex:choices?choices.findIndex(c=>c.isCorrect):0, topicId:t.id, topicName:t.n, draw:tpl.draw, drawParams:tpl.drawParams });
        }
    });
    return shuffleWithSeed(all, seed+999).slice(0, ST.testMode?5:CONSTANTS.EXAM_QUESTIONS);
}

function generateQuestionId(tplId, vars) {
    let str = tplId;
    Object.keys(vars).sort().forEach(k => str += `|${k}:${vars[k]}`);
    return simpleHash(str);
}

function startExamTimer() { if(ST.currentExam.timer)clearInterval(ST.currentExam.timer); ST.currentExam.timer=setInterval(()=>{ST.currentExam.timeLeft--;updateExamTimer();if(ST.currentExam.timeLeft<=0){clearInterval(ST.currentExam.timer);finishExam();}},1000); }
function updateExamTimer() { const el=document.getElementById('examTimer');if(!el)return;const m=Math.floor(ST.currentExam.timeLeft/60),s=ST.currentExam.timeLeft%60;el.textContent=`${m}:${String(s).padStart(2,'0')}`;if(ST.currentExam.timeLeft<=60)el.style.color='var(--danger)'; }

function loadExamQuestion(idx) {
    if(idx>=ST.currentExam.questions.length){finishExam();return;}
    ST.currentExam.currentIndex=idx;
    const q=ST.currentExam.questions[idx], el=document.getElementById('examContent');
    if(!el)return;
    const zc=q.z==='kolay'?'badge-grn':q.z==='zor'?'badge-red':'badge-warn';
    const hasChoices=q.inputType==='choice'&&q.choices&&q.choices.length>=2;
    
    // Geometri çizimi için canvas oluştur (denemede de) - BOYUTLAR BÜYÜTÜLDÜ
    let geometryHtml = '';
    if (q.draw) {
        const canvasId = `geoCanvas_${Date.now()}_${Math.random()}`;
        geometryHtml = `<canvas id="${canvasId}" width="500" height="350" style="width:100%; max-width:500px; height:auto; background:#ffffff; border-radius:12px; margin:16px auto; display:block; border:2px solid #6c63ff; box-shadow:0 4px 12px rgba(0,0,0,0.2);"></canvas>`;
        setTimeout(() => {
            if (typeof drawGeometry === 'function') {
                drawGeometry(canvasId, q.draw, q.vars, q.drawParams);
            }
        }, 50);
    }
    
    const ansHTML=hasChoices?`<div style="display:flex;flex-direction:column;gap:10px;margin-top:16px">${q.choices.map((ch,i)=>`<button class="btn btn-secondary btn-full exam-choice-btn" onclick="submitExamChoiceAnswer(${i})" style="text-align:left;justify-content:flex-start;padding:14px 16px"><span style="font-weight:700;margin-right:10px;color:var(--accent)">${String.fromCharCode(65+i)})</span> ${ch.text}</button>`).join('')}</div>`
        :`<div class="ans-row"><input id="examAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." onkeydown="if(event.key==='Enter')submitExamAnswer()"><button class="btn btn-primary" onclick="submitExamAnswer()">✓</button></div><button class="btn btn-ghost btn-full" style="margin-top:8px" onclick="skipExamAnswer()">Boş Bırak →</button>`;
    el.innerHTML=`<div class="card accent-top"><div class="q-header"><span class="q-counter">Soru ${idx+1}/${ST.currentExam.questions.length}</span><div class="q-tags"><span class="badge ${zc}">${q.z||'orta'}</span><span class="badge badge-acc">${q.topicName||''}</span></div></div>${geometryHtml}<div class="q-text">${q.s.replace(/\n/g,'<br>')}</div>${ansHTML}</div>`;
    if(!hasChoices)setTimeout(()=>document.getElementById('examAnsInp')?.focus(),100);
}

window.submitExamChoiceAnswer = function(idx) { const q=ST.currentExam.questions[ST.currentExam.currentIndex]; ST.currentExam.answers.push({questionId:q.id,topicName:q.topicName,correctAnswer:q.c,userAnswer:q.choices?.[idx]?.text||'',isCorrect:idx===(q.correctChoiceIndex||0),skipped:false}); loadExamQuestion(ST.currentExam.currentIndex+1); };
window.submitExamAnswer = function() { const inp=document.getElementById('examAnsInp'),ua=inp?.value?.trim()||''; const q=ST.currentExam.questions[ST.currentExam.currentIndex]; ST.currentExam.answers.push({questionId:q.id,topicName:q.topicName,correctAnswer:q.c,userAnswer:ua,isCorrect:checkEqual(ua,q.c),skipped:false}); loadExamQuestion(ST.currentExam.currentIndex+1); };
window.skipExamAnswer = function() { const q=ST.currentExam.questions[ST.currentExam.currentIndex]; ST.currentExam.answers.push({questionId:q.id,topicName:q.topicName,correctAnswer:q.c,userAnswer:'',isCorrect:false,skipped:true}); loadExamQuestion(ST.currentExam.currentIndex+1); };

function finishExam() {
    if(ST.currentExam.timer)clearInterval(ST.currentExam.timer);
    const ex=ST.currentExam, ans=ex.answers;
    const d=ans.filter(a=>a.isCorrect).length, y=ans.filter(a=>!a.isCorrect&&!a.skipped).length, b=ans.filter(a=>a.skipped).length;
    const net=(d-y*0.25).toFixed(2);
    const sd=ST.examSets[ex.setId];
    if(sd&&!sd.completed){sd.completed=true;sd.net=net;sd.date=todayStr();}
    ST.examHistory.push({type:`Deneme ${ex.setId.replace('set_','')}`,net,date:todayStr()});
    if(Object.values(ST.examSets).every(s=>s.completed)){ST.examGeneration++;Object.keys(ST.examSets).forEach((sid,i)=>{ST.examSets[sid]={seed:EXAM_SEEDS[i]+(ST.examGeneration-1)*100,completed:false,answers:[],net:null,date:null}});}
    saveState();ST.currentExam=null;
    const wl=ans.filter(a=>!a.isCorrect&&!a.skipped).slice(0,3);
    document.getElementById('examContent').innerHTML=`<div style="text-align:center;padding:20px 0"><div style="font-size:13px;color:var(--text-muted)">Deneme ${ex.setId.replace('set_','')} Sonucu</div><div class="net-num">${net}</div><div class="net-lbl">Net</div><div class="stat-grid"><div class="stat-cell"><div class="stat-num" style="color:var(--success)">${d}</div><div class="stat-lbl">Doğru</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--danger)">${y}</div><div class="stat-lbl">Yanlış</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--text-muted)">${b}</div><div class="stat-lbl">Boş</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--warning)">${ex.questions.length}</div><div class="stat-lbl">Toplam</div></div></div>${wl.length?`<div class="card" style="text-align:left;margin-top:14px"><h3>Yanlışlar</h3>${wl.map(a=>`<div class="weak-row"><span>${a.topicName}</span><span class="badge badge-red">❌ ${a.userAnswer||'boş'} → ${a.correctAnswer}</span></div>`).join('')}</div>`:''}<div class="btn-row" style="margin-top:16px"><button class="btn btn-primary btn-full" onclick="startExamSet('${ex.setId}')">🔄 Tekrar</button><button class="btn btn-ghost btn-full" onclick="goExamList()">Listeye Dön</button></div></div>`;
}

window.cancelExam = function() { if(ST.currentExam?.timer)clearInterval(ST.currentExam.timer); if(confirm('İptal?')){ST.currentExam=null;goExamList();} };
window.resetAllExams = function() { if(!confirm('Sıfırlansın mı?'))return; ST.examGeneration++; Object.keys(ST.examSets).forEach((sid,i)=>{ST.examSets[sid]={seed:EXAM_SEEDS[i]+(ST.examGeneration-1)*100,completed:false,answers:[],net:null,date:null}}); saveState(); renderExamList(); alert('✅ Sıfırlandı!'); };

// ============================================
// BÖLÜM 10: İSTATİSTİK
// ============================================

function renderStats() {
    const el=document.getElementById('statsContent'); if(!el)return;
    const done=ST.completedTopics.length, acc=ST.totalQ>0?Math.round((ST.totalCorrect/ST.totalQ)*100):0;
    const estNet=Math.min(30,Math.round(done*0.55+acc/14));
    const weak=[]; TOPICS.forEach(t=>{const h=getHist(t.id);let tc=0,tq=0;if(h.levels)Object.values(h.levels).forEach(lv=>{if(lv){tc+=lv.correct||0;tq+=lv.total||0}});if(tq>=5){const p=Math.round((tc/tq)*100);if(p<70)weak.push({name:t.n,pct:p,total:tq,id:t.id})}});weak.sort((a,b)=>a.pct-b.pct);
    const exams=ST.examHistory.slice(-5).reverse(); let qbs=0,qba=0; Object.keys(ST.questionBankProgress).forEach(tid=>{qbs+=ST.questionBankProgress[tid].solved.length;qba+=CONSTANTS.QUESTION_BANK_SIZE});
    el.innerHTML=`<div class="net-box"><div style="font-size:12px;color:var(--text-muted)">Tahmini KPSS Netin</div><div class="net-num">${estNet}</div><div class="net-lbl">${done===CONSTANTS.TOTAL_TOPICS?'Tüm konular bitti! 🏆':'Konuları tamamladıkça artacak'}</div></div><div class="stat-grid"><div class="stat-cell"><div class="stat-num" style="color:var(--accent)">${done}</div><div class="stat-lbl">Konu Bitti</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--danger)">${ST.totalQ}</div><div class="stat-lbl">Toplam Soru</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--success)">%${acc}</div><div class="stat-lbl">Doğruluk</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--warning)">${ST.maxStreak}</div><div class="stat-lbl">En İyi Seri</div></div></div><div class="card"><h3>Genel İlerleme</h3><div class="prog-bar-wrap"><div class="prog-bar-label"><span>Konular</span><span>${done}/${CONSTANTS.TOTAL_TOPICS}</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${Math.round((done/CONSTANTS.TOTAL_TOPICS)*100)}%"></div></div></div><div class="prog-bar-wrap" style="margin-top:12px"><div class="prog-bar-label"><span>Soru Bankası</span><span>${qbs}/${qba}</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width:${qba>0?Math.round((qbs/qba)*100):0}%"></div></div></div></div>${weak.length?`<div class="card"><h3>⚠️ Zayıf Konular</h3>${weak.slice(0,5).map(w=>`<div class="weak-row" onclick="openTopic(${w.id})" style="cursor:pointer"><span class="weak-name">${w.name}</span><span class="weak-pct" style="color:var(--danger)">%${w.pct} (${w.total} soru)</span></div>`).join('')}</div>`:''}${exams.length?`<div class="card"><h3>📝 Son Denemeler</h3>${exams.map(e=>`<div class="weak-row"><span>${e.type}</span><span style="color:var(--accent)">${e.net} net</span><span style="font-size:10px;color:var(--text-muted)">${e.date}</span></div>`).join('')}</div>`:''}<div class="card"><h3>⚙️ Yönetim</h3><div class="btn-group-vertical" style="margin-top:8px"><button class="btn btn-ghost btn-full" onclick="openModal('api')">🔑 API Anahtarı</button><button class="btn btn-ghost btn-full" onclick="resetQuestionBankProgress()">🔄 Soru Bankası Sıfırla</button><button class="btn btn-danger btn-full" onclick="openModal('reset')">🗑️ Verileri Sıfırla</button></div></div>`;
}

// ============================================
// BÖLÜM 11: MODAL & SIFIRLAMA
// ============================================

window.openModal = function(id) { const el=document.getElementById(id+'Modal'); if(el)el.classList.remove('hidden'); if(id==='api')document.getElementById('apiInp').value=ST.apiKey; };
window.closeModal = function(id) { document.getElementById(id+'Modal')?.classList.add('hidden'); };
window.saveKey = function() { const k=document.getElementById('apiInp')?.value?.trim(); if(!k)return; ST.apiKey=k; localStorage.setItem(CONSTANTS.API_KEY_STORAGE,k); closeModal('api'); alert('✅ Kaydedildi!'); };
window.doReset = function(type) { 
    closeModal('reset'); 
    if(type==='all'){
        if(!confirm('Tüm veriler silinecek. Emin misin?'))return;
        const ak=ST.apiKey;
        ST={version:STATE_VERSION,apiKey:ak,topic:1,currentLevel:'KOLAY',streak:0,maxStreak:0,totalCorrect:0,totalQ:0,completedTopics:[],hist:{},questionBankProgress:{},examSets:{},examGeneration:1,examHistory:[],apiCallCount:0,apiCallDate:'',lastSession:null,phase:'summary',cq:null,summaries:{},testMode:false};
        initMissingFields(); initExamSets();
        GLOBAL_QUESTION_FINGERPRINTS.clear();
        USER_SOLVED_FINGERPRINTS.clear();
        saveState(); goHome(); updateHomeStats(); alert('✅ Sıfırlandı!');
    }else if(type==='topic'){
        const t=getTopicById(ST.topic);
        if(!confirm(`${t?.n} sıfırlansın mı?`))return;
        ST.hist[ST.topic]={levels:{},currentLevel:'KOLAY'};
        ST.currentLevel='KOLAY';
        ST.completedTopics=ST.completedTopics.filter(id=>id!==ST.topic);
        ['KOLAY','ORTA','ZOR'].forEach(level => {
            USER_SOLVED_FINGERPRINTS.delete(`${ST.topic}|${level}`);
        });
        if(ST.questionBankProgress[ST.topic]) delete ST.questionBankProgress[ST.topic];
        saveState(); renderPreStudySummary(); alert(`✅ ${t?.n} sıfırlandı!`);
    }
};

window.resetQuestionBankProgress = function() {
    if(!confirm('Tüm konuların soru bankası ilerlemesi sıfırlansın mı? Bu işlemle her konu için yepyeni 300 soru oluşacaktır.'))return;
    ST.questionBankProgress={};
    USER_SOLVED_FINGERPRINTS.clear();
    saveState(); 
    if(currentView === 'vStats') renderStats();
    if(currentView === 'vQuestionBank') renderQuestionBankList();
    alert('✅ Soru bankası ilerlemesi sıfırlandı. Artık bambaşka sorular gelecek!');
};

// ============================================
// BÖLÜM 12: TEST MODU & BAŞLATMA
// ============================================

let tmc=0,tmt=null;
document.addEventListener('DOMContentLoaded',()=>{
    const ht=document.getElementById('headerTitle');
    if(ht)ht.addEventListener('click',()=>{tmc++;if(tmc>=5){ST.testMode=!ST.testMode;tmc=0;ST.testMode?celebrate('🧪 Test Modu Açık',1500):alert('🧪 Test Modu Kapalı');saveState();}if(tmt)clearTimeout(tmt);tmt=setTimeout(()=>{tmc=0},2000);});
    initApp();
});

function initApp() {
    loadState();
    const targetView = ST.lastView || 'vHome';
    showView(targetView, false);
    initExamSets();
    ST.lastSession = todayStr();
    saveState();
    history.replaceState({ view: targetView }, '', '#/' + targetView);
    console.log('✅ app.js hazır!');
    initMusvedde();
}

// ============================================
// BÖLÜM 13: MÜSVEDDE (KARALAMA DEFTERİ)
// ============================================

let musveddeActive = false;
let musveddeCanvas = null;
let musveddeCtx = null;
let musveddeDrawing = false;
let musveddeMode = 'pen';
let musveddeLastX = 0, musveddeLastY = 0;

function initMusvedde() {
    const panel = document.createElement('div');
    panel.id = 'musveddePanel';
    panel.className = 'musvedde-area';
    panel.innerHTML = `
        <div class="musvedde-toolbar">
            <button id="musveddePenBtn" class="btn-sm" style="background:var(--accent);color:white">✏️ Kalem</button>
            <button id="musveddeEraserBtn" class="btn-sm">🧽 Silgi</button>
            <button id="musveddeClearBtn" class="btn-sm">🗑️ Temizle</button>
            <button id="musveddeCloseBtn" class="btn-sm">❌ Kapat</button>
        </div>
        <div class="musvedde-canvas-wrap">
            <canvas id="musveddeCanvas" width="600" height="400" style="width:100%;height:100%;background:#fff;border-radius:8px;touch-action:none"></canvas>
        </div>
    `;
    document.body.appendChild(panel);

    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'musveddeToggle';
    toggleBtn.innerHTML = '✏️';
    toggleBtn.style.cssText = 'position:fixed;bottom:20px;right:20px;width:56px;height:56px;border-radius:50%;background-color:var(--accent);color:white;border:none;font-size:28px;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.3);z-index:500;display:flex;align-items:center;justify-content:center;';
    toggleBtn.onclick = toggleMusvedde;
    document.body.appendChild(toggleBtn);

    musveddeCanvas = document.getElementById('musveddeCanvas');
    if (musveddeCanvas) {
        musveddeCtx = musveddeCanvas.getContext('2d');
        const resizeCanvas = () => {
            const wrap = musveddeCanvas.parentElement;
            const rect = wrap.getBoundingClientRect();
            musveddeCanvas.width = rect.width;
            musveddeCanvas.height = rect.height;
            musveddeCtx.fillStyle = '#fff';
            musveddeCtx.fillRect(0, 0, musveddeCanvas.width, musveddeCanvas.height);
            musveddeCtx.strokeStyle = '#000';
            musveddeCtx.lineWidth = 4;
            musveddeCtx.lineCap = 'round';
            musveddeCtx.lineJoin = 'round';
        };
        window.addEventListener('resize', resizeCanvas);
        setTimeout(resizeCanvas, 100);
        
        const getCoords = (e) => {
            const rect = musveddeCanvas.getBoundingClientRect();
            const scaleX = musveddeCanvas.width / rect.width;
            const scaleY = musveddeCanvas.height / rect.height;
            let clientX, clientY;
            if (e.touches) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
                e.preventDefault();
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }
            let x = (clientX - rect.left) * scaleX;
            let y = (clientY - rect.top) * scaleY;
            x = Math.max(0, Math.min(musveddeCanvas.width, x));
            y = Math.max(0, Math.min(musveddeCanvas.height, y));
            return { x, y };
        };
        
        const startDraw = (e) => {
            musveddeDrawing = true;
            const { x, y } = getCoords(e);
            musveddeLastX = x;
            musveddeLastY = y;
            musveddeCtx.beginPath();
            musveddeCtx.moveTo(x, y);
            musveddeCtx.lineTo(x, y);
            musveddeCtx.stroke();
        };
        
        const draw = (e) => {
            if (!musveddeDrawing) return;
            e.preventDefault();
            const { x, y } = getCoords(e);
            musveddeCtx.beginPath();
            musveddeCtx.moveTo(musveddeLastX, musveddeLastY);
            musveddeCtx.lineTo(x, y);
            musveddeCtx.stroke();
            musveddeLastX = x;
            musveddeLastY = y;
        };
        
        const endDraw = () => { musveddeDrawing = false; };
        
        musveddeCanvas.addEventListener('mousedown', startDraw);
        musveddeCanvas.addEventListener('mousemove', draw);
        musveddeCanvas.addEventListener('mouseup', endDraw);
        musveddeCanvas.addEventListener('touchstart', startDraw);
        musveddeCanvas.addEventListener('touchmove', draw);
        musveddeCanvas.addEventListener('touchend', endDraw);
        
        const penBtn = document.getElementById('musveddePenBtn');
        const eraserBtn = document.getElementById('musveddeEraserBtn');
        penBtn.onclick = () => {
            musveddeMode = 'pen';
            musveddeCtx.globalCompositeOperation = 'source-over';
            musveddeCtx.strokeStyle = '#000';
            musveddeCtx.lineWidth = 4;
            penBtn.style.background = 'var(--accent)';
            penBtn.style.color = 'white';
            eraserBtn.style.background = '';
            eraserBtn.style.color = '';
        };
        eraserBtn.onclick = () => {
            musveddeMode = 'eraser';
            musveddeCtx.globalCompositeOperation = 'destination-out';
            musveddeCtx.strokeStyle = 'rgba(0,0,0,1)';
            musveddeCtx.lineWidth = 20;
            eraserBtn.style.background = 'var(--accent)';
            eraserBtn.style.color = 'white';
            penBtn.style.background = '';
            penBtn.style.color = '';
        };
        document.getElementById('musveddeClearBtn').onclick = () => {
            musveddeCtx.clearRect(0, 0, musveddeCanvas.width, musveddeCanvas.height);
            musveddeCtx.fillStyle = '#fff';
            musveddeCtx.fillRect(0, 0, musveddeCanvas.width, musveddeCanvas.height);
        };
        document.getElementById('musveddeCloseBtn').onclick = () => {
            panel.classList.remove('open');
            musveddeActive = false;
        };
    }
}

function toggleMusvedde() {
    const panel = document.getElementById('musveddePanel');
    if (!panel) return;
    if (panel.classList.contains('open')) {
        panel.classList.remove('open');
        musveddeActive = false;
    } else {
        panel.classList.add('open');
        musveddeActive = true;
        if (musveddeCanvas) {
            const wrap = musveddeCanvas.parentElement;
            const rect = wrap.getBoundingClientRect();
            musveddeCanvas.width = rect.width;
            musveddeCanvas.height = rect.height;
            musveddeCtx.fillStyle = '#fff';
            musveddeCtx.fillRect(0, 0, musveddeCanvas.width, musveddeCanvas.height);
            musveddeCtx.strokeStyle = '#000';
            musveddeCtx.lineWidth = 4;
        }
    }
}
