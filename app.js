// ============================================
// app.js - KPSS & DGS MATEMATİK ANA UYGULAMA
// Versiyon: 3.0 | Tüm hatalar düzeltildi
// ============================================

console.log('🚀 app.js v3.0 yükleniyor...');

// ============================================
// BÖLÜM 1: BAŞLANGIÇ & YARDIMCI FONKSİYONLAR
// ============================================

function normAns(s) {
    return String(s).toLowerCase().replace(/\s+/g, '').replace(/,/g, '.')
        .replace(/[×x]/g, '*').replace(/%|tl|lira|gün|saat|km|kg|gr|lt|ml|cm|m/g, '').trim();
}

function checkEqual(userAns, correctAns) {
    const u = normAns(userAns);
    const c = normAns(correctAns);
    if (u === c) return true;
    
    // Kesir karşılaştırması
    if (c.includes('/') || u.includes('/')) {
        const uParts = u.split('/').map(Number);
        const cParts = c.split('/').map(Number);
        if (uParts.length === 2 && cParts.length === 2) {
            if (!isNaN(uParts[0]) && !isNaN(uParts[1]) && !isNaN(cParts[0]) && !isNaN(cParts[1])) {
                if (uParts[1] !== 0 && cParts[1] !== 0) {
                    return uParts[0] * cParts[1] === cParts[0] * uParts[1];
                }
            }
        }
        // Kesir vs ondalık
        if (cParts.length === 2 && uParts.length === 1) {
            const cVal = cParts[0] / cParts[1];
            const uVal = parseFloat(u);
            if (!isNaN(uVal) && Math.abs(uVal - cVal) < 0.01) return true;
        }
        if (uParts.length === 2 && cParts.length === 1) {
            const uVal = uParts[0] / uParts[1];
            const cVal = parseFloat(c);
            if (!isNaN(cVal) && Math.abs(uVal - cVal) < 0.01) return true;
        }
    }
    
    const un = parseFloat(u);
    const cn = parseFloat(c);
    if (!isNaN(un) && !isNaN(cn) && Math.abs(un - cn) < 0.05) return true;
    return false;
}

function esc(s) { return String(s).replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/\n/g, ' '); }

function dots() { return '<div class="dots"><span></span><span></span><span></span></div>'; }

function celebrate(msg, duration = 1900) {
    const wrap = document.getElementById('celWrap');
    const txt = document.getElementById('celTxt');
    if (!wrap || !txt) return;
    txt.textContent = msg;
    wrap.classList.remove('hidden');
    setTimeout(() => wrap.classList.add('hidden'), duration);
}

function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function seededRandom(seed) {
    let s = seed;
    return function() { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646; };
}

function shuffleWithSeed(arr, seed) {
    const shuffled = [...arr];
    const rng = seededRandom(seed);
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function todayStr() { return new Date().toISOString().split('T')[0]; }

function findGCD(a, b) { while (b) { [a, b] = [b, a % b]; } return a; }

function randomFloat(min, max) { return Math.random() * (max - min) + min; }

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) if (n % i === 0 || n % (i + 2) === 0) return false;
    return true;
}

function getPrimesInRange(min, max) {
    const primes = [];
    for (let i = Math.max(2, Math.ceil(min)); i <= max; i++) if (isPrime(i)) primes.push(i);
    return primes;
}

function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) { hash = ((hash << 5) - hash) + str.charCodeAt(i); hash = hash & hash; }
    return Math.abs(hash).toString(36).substring(0, 6);
}

function safeEval(expr) {
    const sanitized = expr.replace(/[^0-9+\-*/().%\s]/g, '');
    if (!/^[0-9+\-*/().%\s]+$/.test(sanitized)) throw new Error('Geçersiz ifade');
    return new Function('return ' + sanitized)();
}

function resolveValue(val, vars) {
    if (typeof val === 'number') return val;
    if (typeof val === 'string') {
        const match = val.match(/\{(\w+)\}/);
        if (match && vars[match[1]] !== undefined) return Number(vars[match[1]]);
        try {
            let expr = val;
            for (const [key, value] of Object.entries(vars)) expr = expr.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
            return safeEval(expr);
        } catch (e) { return Number(val) || 0; }
    }
    return val || 0;
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
    phase: 'summary', cq: null, pendingAdvance: false, summaries: {}, testMode: false
};

function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem(CONSTANTS.STORAGE_KEY) || '{}');
        if (saved.version === STATE_VERSION) { Object.assign(ST, saved); }
        else if (Object.keys(saved).length > 0) { migrateState(saved); }
    } catch (e) { console.error('State yüklenemedi:', e); }
    ST.apiKey = localStorage.getItem(CONSTANTS.API_KEY_STORAGE) || '';
    initMissingFields();
    checkApiDate();
}

function migrateState(old) {
    const fields = ['topic','currentLevel','streak','maxStreak','totalCorrect','totalQ','completedTopics','hist','examHistory','lastSession'];
    fields.forEach(f => { if (old[f] !== undefined) ST[f] = old[f]; });
    saveState();
}

function initMissingFields() {
    for (let i = 1; i <= CONSTANTS.TOTAL_TOPICS; i++) if (!ST.hist[i]) ST.hist[i] = { levels: {}, currentLevel: 'KOLAY' };
    if (!ST.questionBankProgress) ST.questionBankProgress = {};
    if (!ST.examSets) ST.examSets = {};
    if (!ST.examGeneration) ST.examGeneration = 1;
    if (!ST.summaries) ST.summaries = {};
}

function checkApiDate() {
    const today = todayStr();
    if (ST.apiCallDate !== today) { ST.apiCallCount = 0; ST.apiCallDate = today; }
}

function saveState() {
    try {
        const { apiKey, cq, ...saveData } = ST;
        localStorage.setItem(CONSTANTS.STORAGE_KEY, JSON.stringify(saveData));
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
    const currentEl = document.getElementById(currentView);
    if (currentEl) currentEl.classList.remove('active');
    if (addToStack && currentView !== id) { viewStack.push(currentView); if (viewStack.length > 20) viewStack.shift(); }
    const targetEl = document.getElementById(id);
    if (targetEl) { targetEl.classList.add('active'); currentView = id; }
    updateHeader(id);
    window.scrollTo(0, 0);
}

function updateHeader(viewId) {
    const titleEl = document.getElementById('headerTitle'), backBtn = document.getElementById('btnBack');
    if (!titleEl || !backBtn) return;
    const titles = { 'vHome':'KPSS Matematik','vTopics':'📚 Konular','vLearn':'Konu Çalış','vQuestionBank':'📝 Soru Bankası','vQBSolve':'Soru Bankası','vExamList':'📋 Denemeler','vExam':'Deneme Sınavı','vStats':'📊 İstatistikler' };
    titleEl.textContent = titles[viewId] || 'KPSS Matematik';
    backBtn.style.visibility = viewId === 'vHome' ? 'hidden' : 'visible';
}

window.goBack = function() {
    if (viewStack.length > 0) {
        const prevView = viewStack.pop();
        showView(prevView, false);
        if (prevView === 'vHome') updateHomeStats();
        else if (prevView === 'vTopics') renderTopicsList();
        else if (prevView === 'vStats') renderStats();
    }
};

window.goHome = function() { viewStack = []; showView('vHome', false); updateHomeStats(); };
window.goTopics = function() { showView('vTopics'); renderTopicsList(); };
window.goQuestionBank = function() { showView('vQuestionBank'); renderQuestionBankList(); };
window.goExamList = function() { showView('vExamList'); renderExamList(); };
window.goStats = function() { showView('vStats'); renderStats(); };

window.toggleMenu = function() {
    const menu = document.getElementById('sideMenu');
    if (menu) menu.classList.toggle('hidden');
};

// ============================================
// BÖLÜM 4: ANA SAYFA
// ============================================

function updateHomeStats() {
    document.getElementById('statTopics').textContent = ST.completedTopics.length;
    document.getElementById('statQuestions').textContent = ST.totalQ;
    document.getElementById('statAccuracy').textContent = '%' + (ST.totalQ > 0 ? Math.round((ST.totalCorrect / ST.totalQ) * 100) : 0);
    document.getElementById('statStreak').textContent = ST.maxStreak;
    
    const nextTopic = TOPICS.find(t => !ST.completedTopics.includes(t.id) && (!TOPICS.find(pt => pt.order === t.order - 1) || ST.completedTopics.includes(TOPICS.find(pt => pt.order === t.order - 1).id)));
    const badge = document.getElementById('nextTopicBadge');
    if (badge) badge.textContent = nextTopic ? `🎯 Sıradaki: ${nextTopic.e} ${nextTopic.n}` : '🏆 Tüm konular tamamlandı!';
    ST.lastSession = todayStr();
    saveState();
}

// ============================================
// BÖLÜM 5: KONU LİSTESİ
// ============================================

function renderTopicsList() {
    const el = document.getElementById('topicsList');
    if (!el || typeof TOPICS === 'undefined') return;
    let html = '', lastPhase = '';
    
    TOPICS.forEach(t => {
        if (t.p !== lastPhase) { lastPhase = t.p; html += `<div class="phase-sep">${t.p}</div>`; }
        const isCompleted = ST.completedTopics.includes(t.id);
        const prevTopic = TOPICS.find(pt => pt.order === t.order - 1);
        const isLocked = prevTopic && !ST.completedTopics.includes(prevTopic.id);
        const hist = getHist(t.id);
        let tc = 0, tq = 0;
        if (hist.levels) Object.values(hist.levels).forEach(lv => { if (lv) { tc += lv.correct || 0; tq += lv.total || 0; } });
        const acc = tq > 0 ? Math.round((tc / tq) * 100) : null;
        const progress = tq > 0 ? Math.min(100, Math.round((tq / CONSTANTS.QUESTIONS_PER_TOPIC) * 100)) : 0;
        
        let cls = 'topic-row';
        if (isCompleted) cls += ' t-done';
        else if (t.id === ST.topic) cls += ' t-current';
        else if (isLocked) cls += ' t-locked';
        
        let icon = isCompleted ? '✅' : (t.id === ST.topic ? '▶️' : (isLocked ? '🔒' : '⭕'));
        
        html += `<div class="${cls}" ${isLocked ? '' : `onclick="openTopic(${t.id})"`}>
            <span class="t-icon">${t.e}</span>
            <div class="t-info">
                <div class="t-name">${t.n}</div>
                <div class="t-meta">KPSS: ${t.kpss}${acc !== null ? ` · %${acc}` : ''}</div>
                <div class="prog-bar-wrap"><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${progress}%"></div></div></div>
            </div>
            <span style="font-size:18px">${icon}</span>
        </div>`;
    });
    el.innerHTML = html;
}

// ============================================
// BÖLÜM 6: KONU ÇALIŞ
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
    } else { setTimeout(() => showPreStudySummary(null), 500); }
}

function showPreStudySummary(summary) {
    const t = getTopicById(ST.topic);
    if (!t) return;
    const el = document.getElementById('learnContent');
    if (!el) return;
    const formulas = FORMULAS[ST.topic] || [];
    const levelInfo = LEVELS[ST.currentLevel];
    const levelHist = (getHist(ST.topic).levels || {})[ST.currentLevel] || { correct: 0, total: 0 };
    
    el.innerHTML = `
        ${summary ? `<div class="card accent-top"><h3>📖 ${t.n}</h3><div style="font-size:14px;color:var(--text-secondary);line-height:1.8;margin-top:10px">${summary.replace(/\n/g,'<br>')}</div></div>` : ''}
        ${formulas.length ? `<div class="formula-box"><div class="fb-label">📐 Formüller</div><div class="fb-content">${formulas.map(f=>'• '+f).join('<br>')}</div></div>` : ''}
        <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><h3 style="margin:0">📊 ${levelInfo.name} Seviye</h3><span class="badge badge-acc">${levelInfo.questionCount} soru</span></div>
            <div class="prog-bar-wrap"><div class="prog-bar-label"><span>İlerleme</span><span>${levelHist.correct||0}/${levelHist.total||0} doğru</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width:${((levelHist.total||0)/levelInfo.questionCount)*100}%"></div></div></div>
            <p style="font-size:12px;color:var(--text-muted);margin-top:8px">🎯 ${levelInfo.minCorrect} doğru yapmalısın</p>
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
// SORU ÜRETİM MOTORU
// ============================================

function generateQuestion(topicId, level, options = {}) {
    const templates = QUESTION_TEMPLATES[topicId];
    if (!templates || !templates.length) return null;
    
    const solvedIds = getSolvedIds(topicId, level, options.mode);
    let eligible = filterTemplatesByLevel(templates, level);
    if (!eligible.length) eligible = templates;
    
    const recentIds = getRecentTemplateIds(topicId, 3);
    let fresh = eligible.filter(t => !recentIds.includes(t.id));
    if (!fresh.length) fresh = eligible;
    
    for (const template of shuffleArray(fresh)) {
        for (let a = 0; a < 5; a++) {
            const q = tryGenerateFromTemplate(template, level, solvedIds, topicId);
            if (q && !solvedIds.includes(q.id)) { addRecentTemplateId(topicId, template.id); return q; }
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
    if (solvedIds.includes(generatedId)) return null;
    
    const inputType = determineInputType(template, cevapSonuc);
    let choices = null, correctChoiceIndex = 0;
    
    if (inputType === 'choice') {
        if (template.choices && Array.isArray(template.choices)) {
            choices = generateChoicesFromTemplate(template.choices, vars, cevapSonuc);
        } else {
            choices = autoGenerateChoices(cevapSonuc, template, vars);
        }
        correctChoiceIndex = choices.findIndex(c => c.isCorrect);
        if (correctChoiceIndex < 0) correctChoiceIndex = 0;
    }
    
    return {
        id: generatedId, templateId: template.id,
        soru: questionText,
        cevap: formatAnswer(cevapSonuc, inputType),
        cevapRaw: cevapSonuc,
        zorluk: template.z || 'orta',
        inputType, choices, correctChoiceIndex,
        cozum: generateSolution(template, vars, cevapSonuc),
        vars, topicId
    };
}

function getVarRangesForLevel(template, level) {
    const v = template.v;
    if (v.kolay || v.orta || v.zor) {
        if (level === 'KOLAY') return v.kolay || v.orta || v.zor;
        if (level === 'ORTA') return v.orta || v.kolay || v.zor;
        return v.zor || v.orta || v.kolay;
    }
    return v;
}

function generateVariables(ranges, kural) {
    for (let a = 0; a < 100; a++) {
        const vars = {};
        for (const [key, range] of Object.entries(ranges)) vars[key] = generateSingleVariable(key, range, vars);
        if (!kural || checkRule(kural, vars)) return vars;
    }
    return null;
}

function generateSingleVariable(key, range, currentVars) {
    if (!Array.isArray(range)) return range;
    let min = resolveValue(range[0], currentVars), max = resolveValue(range[1], currentVars);
    if (min > max) [min, max] = [max, min];
    if (range[2]) return generateSpecialVariable(min, max, range[2]);
    return Number.isInteger(min) && Number.isInteger(max) ? randomInt(min, max) : Math.round(randomFloat(min, max) * 100) / 100;
}

function generateSpecialVariable(min, max, rule) {
    const adj = (r, even) => {
        if (even) { const a = r % 2 === 0 ? r : r + 1; const b = max % 2 === 0 ? max : max - 1; return [a, b]; }
        return [r % 2 === 1 ? r : r + 1, max % 2 === 1 ? max : max - 1];
    };
    switch (rule) {
        case 'cift': case 'çift': case 'even': { const [a, b] = adj(min, true); return a > b ? min : randomInt(a/2, b/2) * 2; }
        case 'tek': case 'odd': { const [a, b] = adj(min, false); return a > b ? min : randomInt((a+1)/2, (b+1)/2) * 2 - 1; }
        case '3kati': case '3katı': case 'multiple3': { const am = Math.ceil(min/3)*3, bm = Math.floor(max/3)*3; return am > bm ? min : randomInt(am/3, bm/3) * 3; }
        case '5kati': case '5katı': case 'multiple5': { const am = Math.ceil(min/5)*5, bm = Math.floor(max/5)*5; return am > bm ? min : randomInt(am/5, bm/5) * 5; }
        case 'asal': case 'prime': { const p = getPrimesInRange(min, max); return p.length ? p[Math.floor(Math.random()*p.length)] : min; }
        case 'negatif': case 'negative': return -randomInt(Math.abs(min), Math.abs(max));
        case 'pozitif': case 'positive': return randomInt(Math.max(1, min), Math.max(1, max));
        case 'kare': case 'square': { const s = Math.ceil(Math.sqrt(Math.max(1,min))), e = Math.floor(Math.sqrt(max)); return s > e ? min*min : randomInt(s, e) ** 2; }
        default: return randomInt(min, max);
    }
}

function calculateAnswer(formula, vars) {
    try {
        let expr = formula;
        for (const [k, v] of Object.entries(vars)) expr = expr.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
        
        // Özel fonksiyon kontrolü
        const ozelFonk = ['ebob(','asalCarpan','faktoriyel(','permutasyon(','kombinasyon(','sadelestir(','sirala(','zarOlasilik(','isPrime(','basamakDegerToplam(','rakamToplam(','kokDisi(','aralikToplam(','sinavMevcut(','dogrusalDeger(','sifirSayisi(','zarEnAz(','zarFark('];
        if (ozelFonk.some(f => expr.includes(f))) return eval(expr);
        
        expr = expr.replace(/×/g,'*').replace(/÷/g,'/').replace(/\^/g,'**').replace(/√\(/g,'Math.sqrt(').replace(/√/g,'Math.sqrt');
        
        if (expr.includes('/') && !expr.includes('(') && !expr.includes('+') && !expr.includes('-') && !expr.includes('*')) {
            const parts = expr.split('/');
            if (parts.length === 2) {
                const num = safeEval(parts[0]), den = safeEval(parts[1]);
                if (den === 0) return null;
                if (num % den === 0) return num / den;
                const gcd = findGCD(Math.abs(num), Math.abs(den));
                return `${num/gcd}/${den/gcd}`;
            }
        }
        const result = safeEval(expr);
        return isFinite(result) && !isNaN(result) ? result : null;
    } catch (e) { return null; }
}

function determineInputType(template, answer) {
    if (template.inputType && template.inputType !== 'auto') return template.inputType;
    const s = String(answer);
    if (s.includes('√') || s.includes('π') || s.includes('∞') || s.includes('[') || s.includes('{')) return 'choice';
    if (isNaN(Number(s.replace(/[+\-*/]/g,''))) && !s.match(/^-?\d+\.?\d*\/?-?\d*$/)) return 'choice';
    return 'keyboard';
}

function generateChoicesFromTemplate(choiceTemplates, vars, correctAnswer) {
    return choiceTemplates.map((ct, i) => {
        let text = String(ct);
        for (const [k, v] of Object.entries(vars)) text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
        return { label: String.fromCharCode(65+i), text, isCorrect: i === 0 };
    });
}

function autoGenerateChoices(correctAnswer, template, vars) {
    const s = String(correctAnswer);
    
    // Sözel cevap (Tek/Çift, Evet/Hayır, Artar/Azalır)
    if (isNaN(Number(s)) && !s.includes('/')) {
        const pairs = { 'Tek':'Çift', 'Çift':'Tek', 'Evet':'Hayır', 'Hayır':'Evet', 'Artar':'Azalır', 'Azalır':'Artar', 'Doğru':'Yanlış', 'Yanlış':'Doğru' };
        const wrong = pairs[s] || 'Diğer';
        return [
            { label: 'A', text: s, isCorrect: true },
            { label: 'B', text: wrong, isCorrect: false }
        ];
    }
    
    // Sayısal cevap
    const correct = Number(s.includes('/') ? s.split('/')[0]/s.split('/')[1] : s);
    if (!isNaN(correct)) {
        const offsets = [correct, correct + randomInt(1,5)*(Math.random()>0.5?1:-1), correct + randomInt(2,8)*(Math.random()>0.5?1:-1), Math.round(correct*randomInt(1,3)-randomInt(1,3))];
        const unique = [...new Set(offsets.map(o => Math.round(o*100)/100))];
        while (unique.length < 4) unique.push(Math.round((correct + randomInt(-10,10))*100)/100);
        const shuffled = shuffleArray(unique.slice(0,4));
        return shuffled.map((val, i) => ({ label: String.fromCharCode(65+i), text: String(val), isCorrect: Math.abs(val-correct) < 0.001 }));
    }
    
    return [{ label: 'A', text: s, isCorrect: true }, { label: 'B', text: '?', isCorrect: false }];
}

function fillTemplate(text, vars) {
    let r = text;
    for (const [k, v] of Object.entries(vars)) r = r.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    return r;
}

function generateQuestionId(templateId, vars) {
    const vs = Object.entries(vars).sort((a,b)=>a[0].localeCompare(b[0])).map(([k,v])=>`${k}=${v}`).join('&');
    return `${templateId}_${simpleHash(vs)}`;
}

function getSolvedIds(topicId, level, mode) {
    if (mode === 'questionBank') return (getQBProgress(topicId).solved || []);
    const h = getHist(topicId);
    return (h.levels && h.levels[level] && h.levels[level].solvedIds) || [];
}

const recentTemplatesCache = {};
function getRecentTemplateIds(topicId, count) { return (recentTemplatesCache[topicId] || []).slice(-count); }
function addRecentTemplateId(topicId, id) {
    if (!recentTemplatesCache[topicId]) recentTemplatesCache[topicId] = [];
    recentTemplatesCache[topicId].push(id);
    if (recentTemplatesCache[topicId].length > 20) recentTemplatesCache[topicId].shift();
}

function filterTemplatesByLevel(templates, level) {
    const map = { 'KOLAY':['kolay'], 'ORTA':['kolay','orta'], 'ZOR':['kolay','orta','zor'] };
    return templates.filter(t => (map[level]||['kolay','orta','zor']).includes(t.z));
}

function checkRule(kural, vars) {
    if (!kural) return true;
    try {
        for (const rule of kural.split(',').map(r=>r.trim())) {
            let expr = rule;
            for (const [k,v] of Object.entries(vars)) expr = expr.replace(new RegExp(`\\{${k}\\}`,'g'), v);
            if (/[<>=!]+/.test(expr) && !safeEval(expr.replace(/==/g,'===').replace(/!=/g,'!=='))) return false;
        }
        return true;
    } catch (e) { return true; }
}

function generateSolution(template, vars, answer) {
    if (template.cozum) {
        let c = template.cozum;
        for (const [k,v] of Object.entries(vars)) c = c.replace(new RegExp(`\\{${k}\\}`,'g'), v);
        return c;
    }
    return `Cevap: ${answer}`;
}

function formatAnswer(answer, inputType) { return String(answer); }

function generateFallbackQuestion(topicId, level) {
    const templates = QUESTION_TEMPLATES[topicId];
    if (!templates || !templates.length) return null;
    const t = templates.find(x => x.z === 'kolay') || templates[0]; // DÜZELTİLDİ: 'kolaj' → 'kolay'
    const vars = {};
    for (const [k, range] of Object.entries(t.v)) {
        vars[k] = Array.isArray(range) ? randomInt(resolveValue(range[0],{}), resolveValue(range[1],{})) : range;
    }
    const cevap = calculateAnswer(t.c, vars);
    const inputType = determineInputType(t, cevap);
    return {
        id: generateQuestionId(t.id, vars), templateId: t.id,
        soru: fillTemplate(t.s, vars),
        cevap: formatAnswer(cevap, inputType), cevapRaw: cevap,
        zorluk: t.z || 'kolay', inputType,
        choices: inputType === 'choice' ? autoGenerateChoices(cevap, t, vars) : null,
        correctChoiceIndex: 0, cozum: generateSolution(t, vars, cevap), vars, topicId
    };
}

// ============================================
// SORU GÖSTERİMİ// ============================================

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
    if (!qData) {
        el.innerHTML = `<div class="card accent-top" style="text-align:center"><h3>📭 Soru Üretilemedi</h3><button class="btn btn-primary btn-full" onclick="resetLevelQuestions()">🔄 Tekrar Dene</button></div>`;
        return;
    }
    ST.cq = { ...qData, level };
    renderQuestionUI(qData, level, levelInfo);
}

function renderQuestionUI(q, level, levelInfo) {
    const hist = getHist(ST.topic);
    const levelHist = hist.levels?.[level] || { correct: 0, total: 0 };
    const zorlukClass = q.zorluk === 'kolay' ? 'badge-grn' : q.zorluk === 'zor' ? 'badge-red' : 'badge-warn';
    const limit = ST.testMode ? 3 : levelInfo.questionCount;
    const el = document.getElementById('learnContent');
    if (!el) return;

    let answerHTML = '';
    const hasChoices = q.inputType === 'choice' && q.choices && Array.isArray(q.choices) && q.choices.length >= 2;
    
    if (hasChoices) {
        answerHTML = `<div style="display:flex;flex-direction:column;gap:10px;margin-top:16px">
            ${q.choices.map((ch, i) => `
                <button class="btn btn-secondary btn-full choice-btn" onclick="submitChoiceAnswer(${i})" style="text-align:left;justify-content:flex-start;padding:14px 16px">
                    <span style="font-weight:700;margin-right:10px;color:var(--accent)">${String.fromCharCode(65+i)})</span> ${ch.text}
                </button>
            `).join('')}
        </div>`;
    } else {
        answerHTML = `<div class="ans-row">
            <input id="ansInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." autocomplete="off" onkeydown="if(event.key==='Enter') checkAnswer()">
            <button class="btn btn-primary" onclick="checkAnswer()">✓</button>
        </div>
        <div class="ans-hint">Sayı, kesir (3/4) veya birim ile yaz</div>`;
    }

    el.innerHTML = `
        <div class="prog-bar-wrap"><div class="prog-bar-label"><span>📊 ${levelInfo.name}</span><span>${levelHist.correct||0}/${levelHist.total||0} doğru</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width:${((levelHist.total||0)/limit)*100}%"></div></div></div>
        <div class="card accent-top">
            <div class="q-header"><span class="q-counter">Soru ${(levelHist.total||0)+1}/${limit}</span><div class="q-tags"><span class="badge ${zorlukClass}">${q.zorluk}</span><span class="badge badge-acc">${levelInfo.name}</span></div></div>
            <div class="q-text">${q.soru.replace(/\n/g,'<br>')}</div>
            ${answerHTML}
        </div>
        <div class="ask-section">
            <button class="ask-toggle" onclick="toggleAsk()">🤖 Anlamadım — Öğretmene sor</button>
            <div class="ask-form" id="askForm"><input id="askInp" class="ask-inp" type="text" placeholder="Ne anlamadın?" onkeydown="if(event.key==='Enter') sendAsk()"><button class="btn btn-primary" onclick="sendAsk()">Sor</button></div>
            <div class="ask-result" id="askResult"></div>
        </div>`;

    if (!hasChoices) setTimeout(() => { const inp = document.getElementById('ansInp'); if (inp) inp.focus(); }, 100);
}

// ============================================
// CEVAP KONTROL
// ============================================

window.submitChoiceAnswer = function(idx) {
    const q = ST.cq;
    if (!q) return;
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
    if (!hist.levels[level]) hist.levels[level] = { correct: 0, total: 0, solvedIds: [] };
    
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
    el.innerHTML += `<div class="fb ${isCorrect?'fb-ok':'fb-fail'}">
        <div class="fb-head"><span class="fb-icon">${isCorrect?'🎉':'❌'}</span><span class="fb-title">${isCorrect?'Doğru!':'Yanlış'}</span></div>
        <div class="fb-body">${isCorrect ? `Cevap: <strong>${q.cevap}</strong>` : `Doğru cevap: <strong>${q.cevap}</strong>${q.cozum?`<br><br>📖 ${q.cozum}`:''}`}</div>
        ${nextMsg}
        ${!topicCompleted ? '<div class="btn-row" style="margin-top:12px"><button class="btn btn-ghost btn-full" onclick="nextQuestion()">Sonraki Soru →</button></div>' : ''}
    </div>`;
    el.querySelector('.fb:last-child')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

window.nextQuestion = function() { ST.phase = 'question'; ST.cq = null; window.scrollTo(0,0); renderNextQuestion(); };
window.resetLevelQuestions = function() {
    const h = getHist(ST.topic), lv = ST.currentLevel;
    if (h.levels?.[lv]) { h.levels[lv] = { correct:0, total:0, solvedIds:[], completed:false }; }
    saveState(); ST.phase = 'question'; ST.cq = null; renderNextQuestion();
};

// ============================================
// BÖLÜM 7: GROQ API
// ============================================

async function fetchTopicSummary(topic) {
    checkApiDate();
    if (ST.apiCallCount >= CONSTANTS.API_DAILY_LIMIT) throw new Error('Limit doldu');
    ST.apiCallCount++; saveState();
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+ST.apiKey},
        body:JSON.stringify({ model:'llama-3.3-70b-versatile', messages:[
            {role:'system',content:`KPSS matematik öğretmenisin. "${topic.n}" konusunu max 150 kelime Türkçe özetle.`},
            {role:'user',content:`${topic.n} konusunu özetler misin?`}], temperature:0.5, max_tokens:500 })
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
            body:JSON.stringify({ model:'llama-3.3-70b-versatile', messages:[
                {role:'system',content:'KPSS matematik öğretmeni. Türkçe, net, max 120 kelime.'},
                {role:'user',content:`Konu: ${t?.n||'Matematik'}\nSoru: ${ST.cq?.soru||''}\nÖğrenci: ${q}`}], temperature:0.7, max_tokens:600 })
        });
        const d = await r.json();
        if (re) re.innerHTML = (d?.choices?.[0]?.message?.content?.trim()||'Cevap alınamadı').replace(/\n/g,'<br>');
    } catch(e) { if (re) re.innerHTML = '❌ Hata oluştu.'; }
    inp.disabled = false;
};

// ============================================
// BÖLÜM 8: SORU BANKASI
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
    if (progress.solved.length >= limit) {
        el.innerHTML = `<div class="card accent-top" style="text-align:center"><h3>🎉 Tamamlandı!</h3><p style="font-size:24px;font-weight:700;color:var(--accent)">${progress.solved.length}/${limit}</p><button class="btn btn-primary btn-full" onclick="goQuestionBank()">📝 Listeye Dön</button></div>`;
        return;
    }
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
        : `<div class="ans-row"><input id="qbAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." onkeydown="if(event.key==='Enter') checkQBAnswer()"><button class="btn btn-primary" onclick="checkQBAnswer()">✓</button></div><button class="btn btn-ghost btn-full" style="margin-top:8px" onclick="skipQBQuestion()">Boş Bırak →</button>`;
    
    el.innerHTML = `<div class="prog-bar-wrap"><div class="prog-bar-label"><span>📝 ${t.n}</span><span>${progress.solved.length}/${limit}</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${(progress.solved.length/limit)*100}%"></div></div></div>
        <div class="card accent-top"><div class="q-header"><span class="q-counter">Soru ${progress.solved.length+1}</span><div class="q-tags"><span class="badge ${zc}">${q.zorluk}</span><span class="badge badge-acc">${t.n}</span></div></div><div class="q-text">${q.soru.replace(/\n/g,'<br>')}</div>${ansHTML}</div>`;
    if (!hasChoices) setTimeout(()=>{ document.getElementById('qbAnsInp')?.focus(); }, 100);
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
window.skipQBQuestion = function() {
    const q = ST.cq; if(!q) return;
    const p = getQBProgress(q.topicId||ST.topic); if(!p.solved.includes(q.id)) p.solved.push(q.id);
    saveState(); renderQBSolveHeader(); nextQBQuestion();
};
window.nextQBQuestion = function() { ST.cq = null; window.scrollTo(0,0); renderNextQBQuestion(); };

// ============================================
// BÖLÜM 9: DENEME SINAVI
// ============================================

function renderExamList() {
    const el = document.getElementById('examListContent');
    if (!el) return;
    if (!Object.keys(ST.examSets).length) initExamSets();
    let html = '';
    for (let i = 1; i <= CONSTANTS.EXAM_SETS; i++) {
        const sid = 'set_'+i, sd = ST.examSets[sid] || {};
        html += `<div class="exam-set-card" onclick="startExamSet('${sid}')"><div class="exam-set-info"><h3>📋 Deneme ${i}</h3><span>20 soru · 20 dk</span></div><div class="exam-set-score">${sd.completed?`<div class="net">${sd.net}</div><div class="date">${sd.date||''}</div>`:'<span class="badge">Başla</span>'}</div></div>`;
    }
    if (Object.values(ST.examSets).every(s=>s.completed)) html += `<div style="margin-top:16px;text-align:center"><p style="color:var(--success)">🎉 Tüm denemeler tamam!</p><button class="btn btn-primary btn-full" onclick="resetAllExams()">🔄 Yeni Sorularla Başla</button></div>`;
    el.innerHTML = html;
}

function initExamSets() {
    for (let i = 1; i <= CONSTANTS.EXAM_SETS; i++) {
        if (!ST.examSets['set_'+i]) ST.examSets['set_'+i] = { seed: EXAM_SEEDS[i-1]+(ST.examGeneration-1)*100, completed:false, answers:[], net:null, date:null };
    }
    saveState();
}

window.startExamSet = function(setId) {
    if (!ST.examSets[setId]) return;
    if (ST.examSets[setId].completed && !confirm('Tekrar başlat?')) return;
    
    const questions = generateExamQuestions(ST.examSets[setId].seed);
    ST.currentExam = { setId, questions, currentIndex:0, answers:[], timeLeft:CONSTANTS.EXAM_DURATION*60, timer:null };
    showView('vExam');
    document.getElementById('examTitle').textContent = `Deneme ${setId.replace('set_','')}`;
    updateExamTimer();
    startExamTimer();
    loadExamQuestion(0);
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
            if (it === 'choice') choices = tpl.choices ? generateChoicesFromTemplate(tpl.choices, vars, cevap) : autoGenerateChoices(cevap, tpl, vars);
            all.push({ id:generateQuestionId(tpl.id,vars), s:fillTemplate(tpl.s,vars), c:formatAnswer(cevap,it), cRaw:cevap, z:tpl.z||'orta', inputType:it, choices, correctChoiceIndex:choices?choices.findIndex(c=>c.isCorrect):0, topicId:t.id, topicName:t.n });
        }
    });
    return shuffleWithSeed(all, seed+999).slice(0, ST.testMode?5:CONSTANTS.EXAM_QUESTIONS);
}

function startExamTimer() {
    if (ST.currentExam.timer) clearInterval(ST.currentExam.timer);
    ST.currentExam.timer = setInterval(() => {
        ST.currentExam.timeLeft--;
        updateExamTimer();
        if (ST.currentExam.timeLeft <= 0) { clearInterval(ST.currentExam.timer); finishExam(); }
    }, 1000);
}

function updateExamTimer() {
    const el = document.getElementById('examTimer');
    if (!el) return;
    const m = Math.floor(ST.currentExam.timeLeft/60), s = ST.currentExam.timeLeft%60;
    el.textContent = `${m}:${String(s).padStart(2,'0')}`;
    if (ST.currentExam.timeLeft <= 60) el.style.color = 'var(--danger)';
}

function loadExamQuestion(idx) {
    if (idx >= ST.currentExam.questions.length) { finishExam(); return; }
    ST.currentExam.currentIndex = idx;
    const q = ST.currentExam.questions[idx], el = document.getElementById('examContent');
    if (!el) return;
    const zc = q.z === 'kolay'?'badge-grn':q.z==='zor'?'badge-red':'badge-warn';
    const hasChoices = q.inputType === 'choice' && q.choices && q.choices.length >= 2;
    const ansHTML = hasChoices ? `<div style="display:flex;flex-direction:column;gap:10px;margin-top:16px">${q.choices.map((ch,i)=>`<button class="btn btn-secondary btn-full exam-choice-btn" onclick="submitExamChoiceAnswer(${i})" style="text-align:left;justify-content:flex-start;padding:14px 16px"><span style="font-weight:700;margin-right:10px;color:var(--accent)">${String.fromCharCode(65+i)})</span> ${ch.text}</button>`).join('')}</div>`
        : `<div class="ans-row"><input id="examAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." onkeydown="if(event.key==='Enter') submitExamAnswer()"><button class="btn btn-primary" onclick="submitExamAnswer()">✓</button></div><button class="btn btn-ghost btn-full" style="margin-top:8px" onclick="skipExamAnswer()">Boş Bırak →</button>`;
    
    el.innerHTML = `<div class="card accent-top"><div class="q-header"><span class="q-counter">Soru ${idx+1}/${ST.currentExam.questions.length}</span><div class="q-tags"><span class="badge ${zc}">${q.z||'orta'}</span><span class="badge badge-acc">${q.topicName||''}</span></div></div><div class="q-text">${q.s.replace(/\n/g,'<br>')}</div>${ansHTML}</div>`;
    if (!hasChoices) setTimeout(()=>{ document.getElementById('examAnsInp')?.focus(); }, 100);
}

window.submitExamChoiceAnswer = function(idx) {
    const q = ST.currentExam.questions[ST.currentExam.currentIndex];
    ST.currentExam.answers.push({ questionId:q.id, topicName:q.topicName, correctAnswer:q.c, userAnswer:q.choices?.[idx]?.text||'', isCorrect:idx===(q.correctChoiceIndex||0), skipped:false });
    loadExamQuestion(ST.currentExam.currentIndex+1);
};
window.submitExamAnswer = function() {
    const inp = document.getElementById('examAnsInp'), ua = inp?.value?.trim()||'';
    const q = ST.currentExam.questions[ST.currentExam.currentIndex];
    ST.currentExam.answers.push({ questionId:q.id, topicName:q.topicName, correctAnswer:q.c, userAnswer:ua, isCorrect:checkEqual(ua,q.c), skipped:false });
    loadExamQuestion(ST.currentExam.currentIndex+1);
};
window.skipExamAnswer = function() {
    const q = ST.currentExam.questions[ST.currentExam.currentIndex];
    ST.currentExam.answers.push({ questionId:q.id, topicName:q.topicName, correctAnswer:q.c, userAnswer:'', isCorrect:false, skipped:true });
    loadExamQuestion(ST.currentExam.currentIndex+1);
};

function finishExam() {
    if (ST.currentExam.timer) clearInterval(ST.currentExam.timer);
    const ex = ST.currentExam, ans = ex.answers;
    const d = ans.filter(a=>a.isCorrect).length, y = ans.filter(a=>!a.isCorrect&&!a.skipped).length, b = ans.filter(a=>a.skipped).length;
    const net = (d - y*0.25).toFixed(2);
    
    const sd = ST.examSets[ex.setId];
    if (sd && !sd.completed) { sd.completed = true; sd.net = net; sd.date = todayStr(); }
    ST.examHistory.push({ type:`Deneme ${ex.setId.replace('set_','')}`, net, date:todayStr() });
    
    if (Object.values(ST.examSets).every(s=>s.completed)) {
        ST.examGeneration++;
        Object.keys(ST.examSets).forEach((sid,i)=>{ ST.examSets[sid] = { seed:EXAM_SEEDS[i]+(ST.examGeneration-1)*100, completed:false, answers:[], net:null, date:null }; });
    }
    saveState(); ST.currentExam = null;
    
    const wl = ans.filter(a=>!a.isCorrect&&!a.skipped).slice(0,3);
    document.getElementById('examContent').innerHTML = `<div style="text-align:center;padding:20px 0"><div style="font-size:13px;color:var(--text-muted)">Deneme ${ex.setId.replace('set_','')} Sonucu</div><div class="net-num">${net}</div><div class="net-lbl">Net</div><div class="stat-grid"><div class="stat-cell"><div class="stat-num" style="color:var(--success)">${d}</div><div class="stat-lbl">Doğru</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--danger)">${y}</div><div class="stat-lbl">Yanlış</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--text-muted)">${b}</div><div class="stat-lbl">Boş</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--warning)">${ex.questions.length}</div><div class="stat-lbl">Toplam</div></div></div>${wl.length?`<div class="card" style="text-align:left;margin-top:14px"><h3>Yanlışlar</h3>${wl.map(a=>`<div class="weak-row"><span>${a.topicName}</span><span class="badge badge-red">❌ ${a.userAnswer||'boş'} → ${a.correctAnswer}</span></div>`).join('')}</div>`:''}<div class="btn-row" style="margin-top:16px"><button class="btn btn-primary btn-full" onclick="startExamSet('${ex.setId}')">🔄 Tekrar</button><button class="btn btn-ghost btn-full" onclick="goExamList()">Listeye Dön</button></div></div>`;
}

window.cancelExam = function() { if(ST.currentExam?.timer)clearInterval(ST.currentExam.timer); if(confirm('İptal?')){ST.currentExam=null;goExamList();} };
window.resetAllExams = function() { if(!confirm('Sıfırlansın mı?'))return; ST.examGeneration++; Object.keys(ST.examSets).forEach((sid,i)=>{ST.examSets[sid]={seed:EXAM_SEEDS[i]+(ST.examGeneration-1)*100,completed:false,answers:[],net:null,date:null}}); saveState(); renderExamList(); alert('✅ Sıfırlandı!'); };

// ============================================
// BÖLÜM 10: İSTATİSTİKLER
// ============================================

function renderStats() {
    const el = document.getElementById('statsContent');
    if (!el) return;
    const done = ST.completedTopics.length;
    const acc = ST.totalQ > 0 ? Math.round((ST.totalCorrect/ST.totalQ)*100) : 0;
    const estNet = Math.min(30, Math.round(done*0.55 + acc/14));
    
    const weak = [];
    TOPICS.forEach(t => {
        const h = getHist(t.id); let tc=0,tq=0;
        if(h.levels) Object.values(h.levels).forEach(lv=>{if(lv){tc+=lv.correct||0;tq+=lv.total||0}});
        if(tq>=5){const p=Math.round((tc/tq)*100);if(p<70)weak.push({name:t.n,pct:p,total:tq,id:t.id})}
    });
    weak.sort((a,b)=>a.pct-b.pct);
    
    const exams = ST.examHistory.slice(-5).reverse();
    let qbs=0, qba=0;
    Object.keys(ST.questionBankProgress).forEach(tid=>{qbs+=ST.questionBankProgress[tid].solved.length;qba+=CONSTANTS.QUESTION_BANK_SIZE});
    
    el.innerHTML = `<div class="net-box"><div style="font-size:12px;color:var(--text-muted)">Tahmini KPSS Netin</div><div class="net-num">${estNet}</div><div class="net-lbl">${done===CONSTANTS.TOTAL_TOPICS?'Tüm konular bitti! 🏆':'Konuları tamamladıkça artacak'}</div></div>
        <div class="stat-grid"><div class="stat-cell"><div class="stat-num" style="color:var(--accent)">${done}</div><div class="stat-lbl">Konu Bitti</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--danger)">${ST.totalQ}</div><div class="stat-lbl">Toplam Soru</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--success)">%${acc}</div><div class="stat-lbl">Doğruluk</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--warning)">${ST.maxStreak}</div><div class="stat-lbl">En İyi Seri</div></div></div>
        <div class="card"><h3>Genel İlerleme</h3><div class="prog-bar-wrap"><div class="prog-bar-label"><span>Konular</span><span>${done}/${CONSTANTS.TOTAL_TOPICS}</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${Math.round((done/CONSTANTS.TOTAL_TOPICS)*100)}%"></div></div></div><div class="prog-bar-wrap" style="margin-top:12px"><div class="prog-bar-label"><span>Soru Bankası</span><span>${qbs}/${qba}</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width:${qba>0?Math.round((qbs/qba)*100):0}%"></div></div></div></div>
        ${weak.length?`<div class="card"><h3>⚠️ Zayıf Konular</h3>${weak.slice(0,5).map(w=>`<div class="weak-row" onclick="openTopic(${w.id})" style="cursor:pointer"><span class="weak-name">${w.name}</span><span class="weak-pct" style="color:var(--danger)">%${w.pct} (${w.total} soru)</span></div>`).join('')}</div>`:''}
        ${exams.length?`<div class="card"><h3>📝 Son Denemeler</h3>${exams.map(e=>`<div class="weak-row"><span>${e.type}</span><span style="color:var(--accent)">${e.net} net</span><span style="font-size:10px;color:var(--text-muted)">${e.date}</span></div>`).join('')}</div>`:''}
        <div class="card"><h3>⚙️ Yönetim</h3><div class="btn-group-vertical" style="margin-top:8px"><button class="btn btn-ghost btn-full" onclick="openModal('api')">🔑 API Anahtarı</button><button class="btn btn-ghost btn-full" onclick="resetQuestionBankProgress()">🔄 Soru Bankası Sıfırla</button><button class="btn btn-danger btn-full" onclick="openModal('reset')">🗑️ Verileri Sıfırla</button></div></div>`;
}

// ============================================
// BÖLÜM 11: MODAL & SIFIRLAMA
// ============================================

window.openModal = function(id) { const el = document.getElementById(id+'Modal'); if(el) el.classList.remove('hidden'); if(id==='api'){ document.getElementById('apiInp').value = ST.apiKey; } };
window.closeModal = function(id) { document.getElementById(id+'Modal')?.classList.add('hidden'); };
window.saveKey = function() { const k = document.getElementById('apiInp')?.value?.trim(); if(!k)return; ST.apiKey = k; localStorage.setItem(CONSTANTS.API_KEY_STORAGE,k); closeModal('api'); alert('✅ Kaydedildi!'); };
window.doReset = function(type) { closeModal('reset'); if(type==='all'){ if(!confirm('Tüm veriler silinecek. Emin misin?'))return; const ak=ST.apiKey; ST={version:STATE_VERSION,apiKey:ak,topic:1,currentLevel:'KOLAY',streak:0,maxStreak:0,totalCorrect:0,totalQ:0,completedTopics:[],hist:{},questionBankProgress:{},examSets:{},examGeneration:1,examHistory:[],apiCallCount:0,apiCallDate:'',lastSession:null,phase:'summary',cq:null,pendingAdvance:false,summaries:{},testMode:false}; initMissingFields(); initExamSets(); saveState(); goHome(); updateHomeStats(); alert('✅ Sıfırlandı!'); } else if(type==='topic'){ const t=getTopicById(ST.topic); if(!confirm(`${t?.n} sıfırlansın mı?`))return; ST.hist[ST.topic]={levels:{},currentLevel:'KOLAY'}; ST.currentLevel='KOLAY'; ST.completedTopics=ST.completedTopics.filter(id=>id!==ST.topic); saveState(); renderPreStudySummary(); alert(`✅ ${t?.n} sıfırlandı!`); } };
window.resetQuestionBankProgress = function() { if(!confirm('Soru bankası ilerlemesi sıfırlansın mı?'))return; ST.questionBankProgress={}; saveState(); goStats(); alert('✅ Sıfırlandı!'); };

// ============================================
// BÖLÜM 12: TEST MODU
// ============================================

let tmc = 0, tmt = null;
document.addEventListener('DOMContentLoaded', () => {
    const ht = document.getElementById('headerTitle');
    if (ht) ht.addEventListener('click', () => { tmc++; if(tmc>=5){ ST.testMode=!ST.testMode; tmc=0; ST.testMode?celebrate('🧪 Test Modu Açık',1500):alert('🧪 Test Modu Kapalı'); saveState(); } if(tmt)clearTimeout(tmt); tmt=setTimeout(()=>{tmc=0},2000); });
});

// ============================================
// BÖLÜM 13: BAŞLAT
// ============================================

function initApp() {
    loadState();
    showView('vHome', false);
    updateHomeStats();
    initExamSets();
    ST.lastSession = todayStr();
    saveState();
    console.log('✅ app.js v3.0 hazır!');
}

document.addEventListener('DOMContentLoaded', initApp);