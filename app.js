window.onerror = function(msg, url, line) { alert('HATA: ' + msg + ' Satır: ' + line); };
// ============================================
// app.js - KPSS & DGS MATEMATİK ANA UYGULAMA
// Versiyon: 4.0 Final | Tüm hatalar giderildi
// ============================================

console.log('🚀 app.js v4.0 yükleniyor...');

// ============================================
// BÖLÜM 1: YARDIMCI FONKSİYONLAR
// ============================================

function normAns(s) {
    return String(s).toLowerCase().replace(/\s+/g,'').replace(/,/g,'.')
        .replace(/[×x]/g,'*').replace(/%|tl|lira|gün|saat|km|kg|gr|lt|ml|cm|m/g,'').trim();
}

function checkEqual(userAns, correctAns) {
    const u = normAns(userAns), c = normAns(correctAns);
    if (u === c) return true;
    
    // Kesir karşılaştırması (örn: 11/5 vs 2.2)
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
    const s = expr.replace(/[^0-9+\-*/().%\s]/g, '');
    if (!/^[0-9+\-*/().%\s]+$/.test(s)) throw new Error('Geçersiz');
    return new Function('return ' + s)();
}

function resolveValue(val, vars) {
    if (typeof val === 'number') return val;
    if (typeof val === 'string') {
        const m = val.match(/\{(\w+)\}/);
        if (m && vars[m[1]] !== undefined) return Number(vars[m[1]]);
        try {
            let e = val;
            for (const [k, v] of Object.entries(vars)) e = e.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
            return safeEval(e);
        } catch (x) { return Number(val) || 0; }
    }
    return val || 0;
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
    phase: 'summary', cq: null, summaries: {}, testMode: false
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
// BÖLÜM 3: SAYFA GEÇİŞLERİ
// ============================================

let currentView = 'vHome', viewStack = [];

function showView(id, addToStack = true) {
    document.getElementById(currentView)?.classList.remove('active');
    if (addToStack && currentView !== id) { viewStack.push(currentView); if (viewStack.length > 20) viewStack.shift(); }
    document.getElementById(id)?.classList.add('active');
    currentView = id;
    updateHeader(id);
    window.scrollTo(0, 0);
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
// BÖLÜM 6: SORU ÜRETİM MOTORU (TAMİR EDİLDİ)
// ============================================

function calculateAnswer(formula, vars) {
    try {
        let expr = formula;
        for (const [k, v] of Object.entries(vars)) expr = expr.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
        
        // String ifade kontrolü (ternary, tırnak, backtick)
        if (expr.includes("'") || expr.includes('"') || expr.includes('`') || expr.includes('?')) {
            return eval(expr);
        }
        
        // Özel fonksiyon listesi
        const ozel = ['ebob(','asalCarpan','faktoriyel(','permutasyon(','kombinasyon(','sadelestir(','sirala(','zarOlasilik(','isPrime(','basamakDegerToplam(','rakamToplam(','kokDisi(','aralikToplam(','sinavMevcut(','dogrusalDeger(','sifirSayisi(','zarEnAz(','zarFark(','rakamSayisi(','enKucukAsalCarpan(','asalCarpanCarpim(','usToplam(','aralikAsalSay(','basamakDegistir(','enAzCarpim(','enKucukAsalToplam(','ondalikKesir(','kokToplamMin(','carpanBul(','tekCozumBul(','siraIleIs(','kumeBilesim(','kumeUcBilesim(','hizBul(','rakamToplamSayi(','oranliKok(','kokBul(','carpanKok(','faktoriyelTers(','tekrarliPermutasyon('];
        if (ozel.some(f => expr.includes(f))) return eval(expr);
        
        expr = expr.replace(/×/g,'*').replace(/÷/g,'/').replace(/\^/g,'**').replace(/√\(/g,'Math.sqrt(').replace(/√/g,'Math.sqrt');
        
        // Basit kesir
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
        return [
            { label: 'A', text: s, isCorrect: true },
            { label: 'B', text: verbalPairs[s], isCorrect: false }
        ];
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
        return { label: String.fromCharCode(65+i), text, isCorrect: i === 0 };
    });
}

// ============ TEMEL YARDIMCI FONKSİYONLAR ============

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

function generateVariables(varRanges, rule) {
    for (let attempt = 0; attempt < 20; attempt++) {
        const candidateVars = {};
        const keys = Object.keys(varRanges);
        let valid = true;
        
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const range = varRanges[key];
            
            if (Array.isArray(range)) {
                candidateVars[key] = randomInt(range[0], range[1]);
            } else if (typeof range === 'object' && range !== null) {
                candidateVars[key] = generateSpecialVariable(key, range);
            } else {
                candidateVars[key] = range;
            }
        }
        
        if (!rule || checkRule(rule, candidateVars)) {
            return candidateVars;
        }
    }
    return null;
}

function generateSpecialVariable(key, config) {
    if (config.values && Array.isArray(config.values)) {
        return config.values[Math.floor(Math.random() * config.values.length)];
    }
    if (config.min !== undefined && config.max !== undefined) {
        if (config.type === 'float') {
            return parseFloat(randomFloat(config.min, config.max).toFixed(config.decimals || 1));
        }
        return randomInt(config.min, config.max);
    }
    return config.default || 0;
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

function checkRule(rule, vars) {
    if (!rule) return true;
    try {
        let expr = String(rule);
        const keys = Object.keys(vars);
        for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            expr = expr.split('{' + k + '}').join(vars[k]);
        }
        return !!(eval(expr));
    } catch (e) {
        return true;
    }
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

// ============ SORU ÜRETİM ANA FONKSİYONLARI ============

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
        if (recentIds.indexOf(eligible[i].id) === -1) {
            fresh.push(eligible[i]);
        }
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
            if (tpl.choices && Array.isArray(tpl.choices)) {
                choices = generateChoicesFromTemplate(tpl.choices, vars, cevapSonuc);
            } else {
                choices = autoGenerateChoices(cevapSonuc, tpl, vars);
            }
            for (let j = 0; j < choices.length; j++) {
                if (choices[j].isCorrect) {
                    correctChoiceIndex = j;
                    break;
                }
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
        body:JSON.stringify({ model:'llama-3.3-70b-versatile', messages:[{role:'system',content:`"${topic.n}" konusunu max 150 kelime Türkçe özetle.`},{role:'user',content:`${topic.n} özeti?`}], temperature:0.5, max_tokens:500 })
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
            body:JSON.stringify({ model:'llama-3.3-70b-versatile', messages:[{role:'system',content:'KPSS matematik öğretmeni. Türkçe, net, max 120 kelime.'},{role:'user',content:`Konu: ${t?.n||'Matematik'}\nSoru: ${ST.cq?.soru||''}\nÖğrenci: ${q}`}], temperature:0.7, max_tokens:600 })
        });
        const d = await r.json();
        if (re) re.innerHTML = (d?.choices?.[0]?.message?.content?.trim()||'Cevap alınamadı').replace(/\n/g,'<br>');
    } catch(e) { if (re) re.innerHTML = '❌ Hata oluştu.'; }
    inp.disabled = false;
};

// ============================================
// BÖLÜM 9: SORU BANKASI
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
    ST.topic = topicId; showView('vQBSolve'); renderQBSolveHeader(); renderNextQBQuestion();
};

function renderQBSolveHeader() {
    const t = getTopicById(ST.topic), p = getQBProgress(ST.topic);
    document.getElementById('qbSolveTitle').textContent = `📝 ${t?.n||''}`;
    document.getElementById('qbSolveProgress').textContent = `${p.solved.length}/${CONSTANTS.QUESTION_BANK_SIZE}`;
}

function renderNextQBQuestion() {
    const topicId = ST.topic, t = getTopicById(topicId);
    if (!t) return;
    const progress = getQBProgress(topicId), limit = ST.testMode ? 10 : CONSTANTS.QUESTION_BANK_SIZE;
    const el = document.getElementById('qbSolveContent');
    if (!el) return;
    if (progress.solved.length >= limit) { el.innerHTML = `<div class="card accent-top" style="text-align:center"><h3>🎉 Tamamlandı!</h3><p style="font-size:24px;font-weight:700;color:var(--accent)">${progress.solved.length}/${limit}</p><button class="btn btn-primary btn-full" onclick="goQuestionBank()">📝 Listeye Dön</button></div>`; return; }
    el.innerHTML = `<div class="card">${dots()}</div>`;
    const templates = QUESTION_TEMPLATES[topicId];
    if (!templates?.length) { el.innerHTML = '<div class="err">Şablon yok.</div>'; return; }
    let q = null;
    for (let a = 0; a < 15; a++) {
        const tpl = templates[Math.floor(Math.random()*templates.length)];
        const vars = generateVariables(tpl.v, tpl.kural);
        if (!vars) continue;
        const id = generateQuestionId(tpl.id, vars);
        if (progress.solved.includes(id)) continue;
        const cevap = calculateAnswer(tpl.c, vars);
        if (cevap === null) continue;
        const inputType = determineInputType(tpl, cevap);
        let choices = null, cci = 0;
        if (inputType === 'choice') {
            choices = tpl.choices ? generateChoicesFromTemplate(tpl.choices, vars, cevap) : autoGenerateChoices(cevap, tpl, vars);
            cci = choices.findIndex(c => c.isCorrect); if (cci < 0) cci = 0;
        }
        q = { id, templateId:tpl.id, soru:fillTemplate(tpl.s,vars), cevap:formatAnswer(cevap,inputType), cevapRaw:cevap, zorluk:tpl.z||'orta', inputType, choices, correctChoiceIndex:cci, cozum:generateSolution(tpl,vars,cevap), topicId };
        break;
    }
    if (!q) { el.innerHTML = '<div class="err">Üretilemedi.</div>'; return; }
    ST.cq = { ...q, mode:'questionBank' };
    const zc = q.zorluk === 'kolay' ? 'badge-grn' : q.zorluk === 'zor' ? 'badge-red' : 'badge-warn';
    const hasChoices = q.inputType === 'choice' && q.choices && q.choices.length >= 2;
    const ansHTML = hasChoices ? `<div style="display:flex;flex-direction:column;gap:10px;margin-top:16px">${q.choices.map((ch,i)=>`<button class="btn btn-secondary btn-full qb-choice-btn" onclick="submitQBChoiceAnswer(${i})" style="text-align:left;justify-content:flex-start;padding:14px 16px"><span style="font-weight:700;margin-right:10px;color:var(--accent)">${String.fromCharCode(65+i)})</span> ${ch.text}</button>`).join('')}</div>`
        : `<div class="ans-row"><input id="qbAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." onkeydown="if(event.key==='Enter')checkQBAnswer()"><button class="btn btn-primary" onclick="checkQBAnswer()">✓</button></div><button class="btn btn-ghost btn-full" style="margin-top:8px" onclick="skipQBQuestion()">Boş Bırak →</button>`;
    el.innerHTML = `<div class="prog-bar-wrap"><div class="prog-bar-label"><span>📝 ${t.n}</span><span>${progress.solved.length}/${limit}</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${(progress.solved.length/limit)*100}%"></div></div></div><div class="card accent-top"><div class="q-header"><span class="q-counter">Soru ${progress.solved.length+1}</span><div class="q-tags"><span class="badge ${zc}">${q.zorluk}</span><span class="badge badge-acc">${t.n}</span></div></div><div class="q-text">${q.soru.replace(/\n/g,'<br>')}</div>${ansHTML}</div>`;
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
    const p = getQBProgress(q.topicId||ST.topic); if (!p.solved.includes(q.id)) p.solved.push(q.id);
    ST.totalQ++; if(isCorrect){ST.totalCorrect++;ST.streak++;if(ST.streak>ST.maxStreak)ST.maxStreak=ST.streak}else ST.streak=0;
    saveState(); renderQBSolveHeader();
    const el = document.getElementById('qbSolveContent');
    if(el) el.innerHTML += `<div class="fb ${isCorrect?'fb-ok':'fb-fail'}"><div class="fb-head"><span class="fb-icon">${isCorrect?'🎉':'❌'}</span><span class="fb-title">${isCorrect?'Doğru!':'Yanlış'}</span></div><div class="fb-body">${isCorrect?`Cevap: <strong>${q.cevap}</strong>`:`Doğru: <strong>${q.cevap}</strong>${q.cozum?`<br>📖 ${q.cozum}`:''}`}</div><div class="btn-row" style="margin-top:12px"><button class="btn btn-ghost btn-full" onclick="nextQBQuestion()">Sonraki →</button></div></div>`;
}
window.skipQBQuestion = function() { const q = ST.cq; if(!q)return; const p=getQBProgress(q.topicId||ST.topic); if(!p.solved.includes(q.id))p.solved.push(q.id); saveState(); renderQBSolveHeader(); nextQBQuestion(); };
window.nextQBQuestion = function() { ST.cq=null; window.scrollTo(0,0); renderNextQBQuestion(); };

// ============================================
// BÖLÜM 10: DENEME SINAVI
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
            if (it==='choice') choices = tpl.choices ? generateChoicesFromTemplate(tpl.choices, vars, cevap) : autoGenerateChoices(cevap, tpl, vars);
            all.push({ id:generateQuestionId(tpl.id,vars), s:fillTemplate(tpl.s,vars), c:formatAnswer(cevap,it), cRaw:cevap, z:tpl.z||'orta', inputType:it, choices, correctChoiceIndex:choices?choices.findIndex(c=>c.isCorrect):0, topicId:t.id, topicName:t.n });
        }
    });
    return shuffleWithSeed(all, seed+999).slice(0, ST.testMode?5:CONSTANTS.EXAM_QUESTIONS);
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
    const ansHTML=hasChoices?`<div style="display:flex;flex-direction:column;gap:10px;margin-top:16px">${q.choices.map((ch,i)=>`<button class="btn btn-secondary btn-full exam-choice-btn" onclick="submitExamChoiceAnswer(${i})" style="text-align:left;justify-content:flex-start;padding:14px 16px"><span style="font-weight:700;margin-right:10px;color:var(--accent)">${String.fromCharCode(65+i)})</span> ${ch.text}</button>`).join('')}</div>`
        :`<div class="ans-row"><input id="examAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." onkeydown="if(event.key==='Enter')submitExamAnswer()"><button class="btn btn-primary" onclick="submitExamAnswer()">✓</button></div><button class="btn btn-ghost btn-full" style="margin-top:8px" onclick="skipExamAnswer()">Boş Bırak →</button>`;
    el.innerHTML=`<div class="card accent-top"><div class="q-header"><span class="q-counter">Soru ${idx+1}/${ST.currentExam.questions.length}</span><div class="q-tags"><span class="badge ${zc}">${q.z||'orta'}</span><span class="badge badge-acc">${q.topicName||''}</span></div></div><div class="q-text">${q.s.replace(/\n/g,'<br>')}</div>${ansHTML}</div>`;
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
// BÖLÜM 11: İSTATİSTİK
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
// BÖLÜM 12: MODAL & SIFIRLAMA
// ============================================

window.openModal = function(id) { const el=document.getElementById(id+'Modal'); if(el)el.classList.remove('hidden'); if(id==='api')document.getElementById('apiInp').value=ST.apiKey; };
window.closeModal = function(id) { document.getElementById(id+'Modal')?.classList.add('hidden'); };
window.saveKey = function() { const k=document.getElementById('apiInp')?.value?.trim(); if(!k)return; ST.apiKey=k; localStorage.setItem(CONSTANTS.API_KEY_STORAGE,k); closeModal('api'); alert('✅ Kaydedildi!'); };
window.doReset = function(type) { closeModal('reset'); if(type==='all'){if(!confirm('Tüm veriler silinecek. Emin misin?'))return;const ak=ST.apiKey;ST={version:STATE_VERSION,apiKey:ak,topic:1,currentLevel:'KOLAY',streak:0,maxStreak:0,totalCorrect:0,totalQ:0,completedTopics:[],hist:{},questionBankProgress:{},examSets:{},examGeneration:1,examHistory:[],apiCallCount:0,apiCallDate:'',lastSession:null,phase:'summary',cq:null,summaries:{},testMode:false};initMissingFields();initExamSets();saveState();goHome();updateHomeStats();alert('✅ Sıfırlandı!');}else if(type==='topic'){const t=getTopicById(ST.topic);if(!confirm(`${t?.n} sıfırlansın mı?`))return;ST.hist[ST.topic]={levels:{},currentLevel:'KOLAY'};ST.currentLevel='KOLAY';ST.completedTopics=ST.completedTopics.filter(id=>id!==ST.topic);saveState();renderPreStudySummary();alert(`✅ ${t?.n} sıfırlandı!`);}};
window.resetQuestionBankProgress = function() { if(!confirm('Soru bankası ilerlemesi sıfırlansın mı?'))return; ST.questionBankProgress={}; saveState(); goStats(); alert('✅ Sıfırlandı!'); };

// ============================================
// BÖLÜM 13: TEST MODU & BAŞLATMA
// ============================================

let tmc=0,tmt=null;
document.addEventListener('DOMContentLoaded',()=>{
    const ht=document.getElementById('headerTitle');
    if(ht)ht.addEventListener('click',()=>{tmc++;if(tmc>=5){ST.testMode=!ST.testMode;tmc=0;ST.testMode?celebrate('🧪 Test Modu Açık',1500):alert('🧪 Test Modu Kapalı');saveState();}if(tmt)clearTimeout(tmt);tmt=setTimeout(()=>{tmc=0},2000);});
    initApp();
});

function initApp() { loadState(); showView('vHome',false); updateHomeStats(); initExamSets(); ST.lastSession=todayStr(); saveState(); console.log('✅ app.js v4.0 hazır!'); }
