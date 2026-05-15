// ============================================
// app.js - KPSS & DGS MATEMATİK ANA UYGULAMA
// Versiyon: 5.2 - questions.js (19 seviye) ile %100 Uyumlu
// ============================================

console.log('🚀 app.js yükleniyor...');

// ============================================
// STATE VERSİYONU
// ============================================
const STATE_VERSION = 5.2;

// ============================================
// STATE YÖNETİMİ
// ============================================
let ST = {
    version: STATE_VERSION,
    apiKey: '',
    topic: 1,
    currentLevel: '0',        // '0' ile '18' arasında (questions.js seviyeleri)
    streak: 0,
    maxStreak: 0,
    totalCorrect: 0,
    totalQ: 0,
    completedTopics: [],
    hist: {},
    questionBankProgress: {},
    examSets: {},
    examGeneration: 1,
    examHistory: [],
    apiCallCount: 0,
    apiCallDate: '',
    lastSession: null,
    phase: 'summary',
    cq: null,
    summaries: {},
    testMode: false,
    lastView: 'vHome'
};

// ============================================
// YARDIMCI FONKSİYONLAR
// ============================================

function normAns(s) {
    if (!s) return '';
    let cleaned = String(s).toLowerCase().trim();
    cleaned = cleaned.replace(/(\d+(?:\.\d+)?)\s*(?:tl|lira|gün|saat|km|kg|gr|lt|ml|cm|m)$/i, '$1');
    cleaned = cleaned.replace(/,/g, '.');
    cleaned = cleaned.replace(/[×x]/g, '*');
    cleaned = cleaned.replace(/\s+/g, '');
    return cleaned;
}

function checkEqual(userAns, correctAns) {
    try {
        const u = normAns(userAns), c = normAns(correctAns);
        if (u === c) return true;
        
        // Kesir kontrolü
        const uParts = u.split('/'), cParts = c.split('/');
        if (cParts.length === 2 || uParts.length === 2) {
            const uVal = uParts.length === 2 ? Number(uParts[0])/Number(uParts[1]) : parseFloat(u);
            const cVal = cParts.length === 2 ? Number(cParts[0])/Number(cParts[1]) : parseFloat(c);
            if (!isNaN(uVal) && !isNaN(cVal) && Math.abs(uVal - cVal) < 0.01) return true;
        }
        
        // Sayısal karşılaştırma
        const un = parseFloat(u), cn = parseFloat(c);
        if (!isNaN(un) && !isNaN(cn) && Math.abs(un - cn) < 0.05) return true;
        return false;
    } catch(e) { return false; }
}

function dots() { return '<div class="dots"><span></span><span></span><span></span></div>'; }

function celebrate(msg, dur = 1900) {
    const w = document.getElementById('celWrap'), t = document.getElementById('celTxt');
    if (!w || !t) return;
    t.textContent = msg; 
    w.classList.remove('hidden');
    setTimeout(() => w.classList.add('hidden'), dur);
}

function randomInt(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function todayStr() { return new Date().toISOString().split('T')[0]; }

function simpleHash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) { 
        h = ((h << 5) - h) + str.charCodeAt(i); 
        h = h & h; 
    }
    return Math.abs(h).toString(36).substring(0, 8);
}

function fillTemplate(text, vars) {
    if (!text) return '';
    let result = String(text);
    const matches = result.match(/\{[^}]+\}/g) || [];
    for (let match of matches) {
        const key = match.slice(1, -1);
        if (vars && vars.hasOwnProperty(key)) {
            result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), vars[key]);
        }
    }
    return result;
}

// ============================================
// TEMEL MATEMATİK FONKSİYONLARI
// ============================================

function ebob(a, b) { 
    a = Math.abs(a); b = Math.abs(b);
    while (b) { [a, b] = [b, a % b]; } 
    return a; 
}

function ekok(a, b) { return Math.abs(a * b) / ebob(a, b); }

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) 
        if (n % i === 0 || n % (i+2) === 0) return false;
    return true;
}

function safeEval(expr) {
    if (!expr) return null;
    if (/[;`'"\\]|__proto__|constructor|prototype|eval\(/i.test(expr)) 
        throw new Error('Güvensiz ifade');
    
    let clean = String(expr).replace(/×/g,'*').replace(/÷/g,'/').replace(/\^/g,'**');
    clean = clean.replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)');
    clean = clean.replace(/√(\d+(?:\.\d+)?)/g, 'Math.sqrt($1)');
    
    try {
        const func = new Function(`return (${clean})`);
        return func();
    } catch(e) { 
        console.warn('safeEval hatası:', expr, e);
        return null; 
    }
}

function shuffleArray(arr) {
    const s = [...arr];
    for (let i = s.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i+1)); 
        [s[i], s[j]] = [s[j], s[i]]; 
    }
    return s;
}

// ============================================
// KONU YARDIMCILARI (config.js'den gelir)
// ============================================

function getTopicById(id) {
    if (typeof TOPICS === 'undefined') return null;
    return TOPICS.find(t => t.id === id);
}

function getLevelConfig(levelId) {
    if (typeof LEVELS === 'undefined') return null;
    return LEVELS[levelId] || LEVELS['0'];
}

function getNextLevel(levelId) {
    if (typeof LEVELS === 'undefined') return null;
    const levels = Object.keys(LEVELS);
    const idx = levels.indexOf(levelId);
    return idx < levels.length - 1 ? levels[idx + 1] : null;
}

function getLevelDisplayName(levelId) {
    const level = getLevelConfig(levelId);
    return level ? level.name : 'Seviye ' + levelId;
}

function getLevelIcon(levelId) {
    const level = getLevelConfig(levelId);
    return level ? level.icon : '📚';
}

// ============================================
// SORU BANKASI DÖNÜŞTÜRME
// ============================================

let QUESTION_TEMPLATES = {};

function convertQuestionBankToTemplates() {
    if (typeof SORU_BANKASI === 'undefined') {
        console.warn('SORU_BANKASI tanımlı değil!');
        return;
    }
    
    // 205 konu için boş dizi oluştur
    for (let topicId = 1; topicId <= 205; topicId++) {
        QUESTION_TEMPLATES[topicId] = [];
    }
    
    // SORU_BANKASI'ndaki her seviye için
    for (let level in SORU_BANKASI) {
        const levelNum = parseInt(level);
        
        // Her seviye için konu ID aralığı belirleme (questions.js'deki düzene göre)
        // Seviye 0: Konu 1-10
        // Seviye 1: Konu 11-14
        // Seviye 2: Konu 15-22
        // ... devam ediyor
        let startId, endId;
        
        if (levelNum === 0) { startId = 1; endId = 10; }
        else if (levelNum === 1) { startId = 11; endId = 14; }
        else if (levelNum === 2) { startId = 15; endId = 22; }
        else if (levelNum === 3) { startId = 23; endId = 33; }
        else if (levelNum === 4) { startId = 34; endId = 45; }
        else if (levelNum === 5) { startId = 46; endId = 60; }
        else if (levelNum === 6) { startId = 61; endId = 72; }
        else if (levelNum === 7) { startId = 73; endId = 85; }
        else if (levelNum === 8) { startId = 86; endId = 97; }
        else if (levelNum === 9) { startId = 98; endId = 107; }
        else if (levelNum === 10) { startId = 108; endId = 119; }
        else if (levelNum === 11) { startId = 120; endId = 131; }
        else if (levelNum === 12) { startId = 132; endId = 141; }
        else if (levelNum === 13) { startId = 142; endId = 151; }
        else if (levelNum === 14) { startId = 152; endId = 161; }
        else if (levelNum === 15) { startId = 162; endId = 174; }
        else if (levelNum === 16) { startId = 175; endId = 184; }
        else if (levelNum === 17) { startId = 185; endId = 195; }
        else if (levelNum === 18) { startId = 196; endId = 205; }
        else { continue; }
        
        // Şablonları ilgili konulara ekle
        for (let template of SORU_BANKASI[level]) {
            for (let topicId = startId; topicId <= endId; topicId++) {
                if (QUESTION_TEMPLATES[topicId]) {
                    QUESTION_TEMPLATES[topicId].push({ ...template });
                }
            }
        }
    }
    
    console.log('✅ Soru şablonları dönüştürüldü.');
}

// ============================================
// SORU ÜRETME MOTORU
// ============================================

let GLOBAL_QUESTION_FINGERPRINTS = new Set();

function generateVariables(varRanges) {
    if (!varRanges || Object.keys(varRanges).length === 0) return {};
    const vars = {};
    
    for (const [key, range] of Object.entries(varRanges)) {
        if (Array.isArray(range)) {
            vars[key] = randomInt(range[0], range[1]);
        } else if (typeof range === 'string') {
            let expr = range;
            for (const [k, v] of Object.entries(vars)) {
                expr = expr.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
            }
            vars[key] = safeEval(expr);
        } else {
            vars[key] = range;
        }
    }
    return vars;
}

function generateQuestion(topicId, levelId) {
    if (!QUESTION_TEMPLATES[topicId] || !QUESTION_TEMPLATES[topicId].length) {
        return { 
            id: 'fallback', 
            soru: '1 + 1 = ?', 
            cevap: '2', 
            cevapRaw: 2, 
            zorluk: 'kolay' 
        };
    }
    
    const templates = QUESTION_TEMPLATES[topicId];
    const template = templates[Math.floor(Math.random() * templates.length)];
    const vars = generateVariables(template.v);
    
    if (!vars) return null;
    
    const questionText = fillTemplate(template.s, vars);
    const answer = safeEval(fillTemplate(template.c, vars));
    
    if (answer === null) return null;
    
    return {
        id: `q_${template.id}_${simpleHash(JSON.stringify(vars))}`,
        soru: questionText,
        cevap: String(answer),
        cevapRaw: answer,
        zorluk: template.z || 'orta',
        inputType: 'keyboard',
        cozum: `Cevap: ${answer}`,
        draw: template.draw,
        drawParams: template.drawParams
    };
}

// ============================================
// STATE YÖNETİM FONKSİYONLARI
// ============================================

function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem('kpss_mat_v5') || '{}');
        if (saved.version === STATE_VERSION) {
            Object.assign(ST, saved);
        }
    } catch (e) { console.warn(e); }
    
    ST.apiKey = localStorage.getItem('kpss_mat_api_key') || '';
    
    // Eski format uyumluluğu için: currentLevel string kontrolü
    if (ST.currentLevel && !LEVELS[ST.currentLevel]) {
        ST.currentLevel = '0';
    }
    
    // Her konu için hist oluştur
    for (let i = 1; i <= 205; i++) {
        if (!ST.hist[i]) ST.hist[i] = { levels: {}, currentLevel: '0' };
    }
    
    if (!ST.questionBankProgress) ST.questionBankProgress = {};
    if (!ST.examSets) ST.examSets = {};
}

function saveState() {
    try {
        const { apiKey, cq, ...d } = ST;
        localStorage.setItem('kpss_mat_v5', JSON.stringify(d));
    } catch (e) { console.warn(e); }
}

function getHist(topicId) {
    if (!ST.hist[topicId]) ST.hist[topicId] = { levels: {}, currentLevel: '0' };
    return ST.hist[topicId];
}

// ============================================
// SAYFA GEÇİŞLERİ
// ============================================

let currentView = 'vHome';

function showView(id) {
    document.getElementById(currentView)?.classList.remove('active');
    document.getElementById(id)?.classList.add('active');
    currentView = id;
    ST.lastView = id;
    updateHeader(id);
    window.scrollTo(0, 0);
    history.pushState({ view: id }, '', '#/' + id);
    
    if (id === 'vHome') updateHomeStats();
    else if (id === 'vTopics') renderTopicsList();
    else if (id === 'vLearn') renderPreStudySummary();
    else if (id === 'vQuestionBank') renderQuestionBankList();
    else if (id === 'vStats') renderStats();
    else if (id === 'vExamList') renderExamList();
    
    saveState();
}

function updateHeader(viewId) {
    const t = document.getElementById('headerTitle');
    const b = document.getElementById('btnBack');
    if (!t || !b) return;
    
    const titles = {
        vHome: 'KPSS Matematik', 
        vTopics: '📚 Konular', 
        vLearn: 'Konu Çalış', 
        vQuestionBank: '📝 Soru Bankası', 
        vQBSolve: 'Soru Bankası', 
        vExamList: '📋 Denemeler', 
        vExam: 'Deneme Sınavı', 
        vStats: '📊 İstatistikler'
    };
    
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

// ============================================
// ANA SAYFA
// ============================================

function updateHomeStats() {
    document.getElementById('statTopics').textContent = ST.completedTopics.length;
    document.getElementById('statQuestions').textContent = ST.totalQ;
    const acc = ST.totalQ > 0 ? Math.round((ST.totalCorrect / ST.totalQ) * 100) : 0;
    document.getElementById('statAccuracy').textContent = '%' + acc;
    document.getElementById('statStreak').textContent = ST.maxStreak;
    
    const nt = TOPICS.find(t => !ST.completedTopics.includes(t.id));
    document.getElementById('nextTopicBadge').textContent = nt ? `🎯 Sıradaki: ${nt.e} ${nt.n}` : '🏆 Tüm konular tamamlandı!';
}

// ============================================
// KONU LİSTESİ
// ============================================

function renderTopicsList() {
    const el = document.getElementById('topicsList');
    if (!el || typeof TOPICS === 'undefined') return;
    
    let html = '', lp = '';
    
    TOPICS.forEach(t => {
        if (t.p !== lp) { 
            lp = t.p; 
            html += `<div class="phase-sep">${t.p}</div>`; 
        }
        
        const done = ST.completedTopics.includes(t.id);
        const prev = TOPICS.find(pt => pt.order === t.order - 1);
        const locked = prev && !ST.completedTopics.includes(prev.id);
        
        let tq = 0;
        const h = getHist(t.id);
        if (h.levels) {
            Object.values(h.levels).forEach(lv => { if (lv) tq += lv.total || 0; });
        }
        const pct = Math.min(100, Math.round((tq / 30) * 100));
        
        let cls = 'topic-row';
        if (done) cls += ' t-done';
        else if (t.id === ST.topic) cls += ' t-current';
        else if (locked) cls += ' t-locked';
        
        const icon = done ? '✅' : (t.id === ST.topic ? '▶️' : (locked ? '🔒' : '⭕'));
        
        html += `<div class="${cls}" ${locked ? '' : `onclick="openTopic(${t.id})"`}>
                    <span class="t-icon">${t.e}</span>
                    <div class="t-info">
                        <div class="t-name">${t.n}</div>
                        <div class="prog-bar-wrap">
                            <div class="prog-bar-bg">
                                <div class="prog-bar-fill fill-acc" style="width:${pct}%"></div>
                            </div>
                        </div>
                    </div>
                    <span>${icon}</span>
                </div>`;
    });
    
    el.innerHTML = html;
}

// ============================================
// KONU ÇALIŞ
// ============================================

window.openTopic = function(topicId) {
    ST.topic = topicId;
    const hist = getHist(topicId);
    ST.currentLevel = hist.currentLevel || '0';
    ST.phase = 'pre-study';
    showView('vLearn');
    saveState();
};

function renderPreStudySummary() {
    const t = getTopicById(ST.topic);
    if (!t) return;
    
    document.getElementById('learnTitle').textContent = `${t.e} ${t.n}`;
    
    const levelInfo = getLevelConfig(ST.currentLevel);
    document.getElementById('learnKademe').textContent = levelInfo ? levelInfo.name : 'Seviye ' + ST.currentLevel;
    
    const lh = (getHist(ST.topic).levels || {})[ST.currentLevel] || { correct: 0, total: 0 };
    const limit = levelInfo ? levelInfo.questionCount : 10;
    const minCorrect = levelInfo ? levelInfo.minCorrect : 8;
    
    document.getElementById('learnContent').innerHTML = `
        <div class="card accent-top">
            <h3>📖 ${t.n}</h3>
            <p style="color:var(--text-muted)">Bu seviyede ${limit} soru çözeceksin. ${minCorrect} doğru yaparak seviyeyi geçebilirsin.</p>
        </div>
        <div class="card">
            <div style="display:flex;justify-content:space-between;margin-bottom:10px">
                <h3>${getLevelIcon(ST.currentLevel)} ${levelInfo ? levelInfo.name : 'Seviye ' + ST.currentLevel}</h3>
                <span class="badge badge-acc">${limit} soru</span>
            </div>
            <div class="prog-bar-wrap">
                <div class="prog-bar-label">
                    <span>İlerleme</span>
                    <span>${lh.correct || 0}/${lh.total || 0} doğru</span>
                </div>
                <div class="prog-bar-bg">
                    <div class="prog-bar-fill fill-grn" style="width:${((lh.total || 0) / limit) * 100}%"></div>
                </div>
            </div>
            <p style="font-size:12px;color:var(--text-muted);margin-top:8px">🎯 ${minCorrect} doğru yapmalısın</p>
        </div>
        <button class="btn btn-primary btn-full" onclick="beginStudy()">✍️ Çalışmaya Başla</button>
    `;
}

window.beginStudy = function() { 
    ST.phase = 'question'; 
    ST.cq = null; 
    renderNextQuestion(); 
};

function renderNextQuestion() {
    const t = getTopicById(ST.topic);
    if (!t) return;
    
    const level = ST.currentLevel;
    const levelInfo = getLevelConfig(level);
    
    document.getElementById('learnTitle').textContent = `${t.e} ${t.n}`;
    document.getElementById('learnKademe').textContent = levelInfo ? levelInfo.name : 'Seviye ' + level;
    
    const el = document.getElementById('learnContent');
    if (!el) return;
    
    el.innerHTML = `<div class="card">${dots()}</div>`;
    
    const qData = generateQuestion(ST.topic, level);
    if (!qData) { 
        el.innerHTML = '<div class="err">Soru üretilemedi</div>'; 
        return; 
    }
    
    ST.cq = { ...qData, level };
    
    const hist = getHist(ST.topic);
    const lh = hist.levels?.[level] || { correct: 0, total: 0 };
    const limit = levelInfo ? levelInfo.questionCount : 10;
    
    const zc = qData.zorluk === 'kolay' ? 'badge-grn' : (qData.zorluk === 'zor' ? 'badge-red' : 'badge-warn');
    
    el.innerHTML = `
        <div class="prog-bar-wrap">
            <div class="prog-bar-label">
                <span>${getLevelIcon(level)} ${levelInfo ? levelInfo.name : 'Seviye ' + level}</span>
                <span>${lh.correct || 0}/${lh.total || 0} doğru</span>
            </div>
            <div class="prog-bar-bg">
                <div class="prog-bar-fill fill-grn" style="width:${((lh.total || 0) / limit) * 100}%"></div>
            </div>
        </div>
        <div class="card accent-top">
            <div class="q-header">
                <span class="q-counter">Soru ${(lh.total || 0) + 1}/${limit}</span>
                <div class="q-tags">
                    <span class="badge ${zc}">${qData.zorluk}</span>
                    <span class="badge badge-acc">${levelInfo ? levelInfo.name : 'Seviye ' + level}</span>
                </div>
            </div>
            <div class="q-text">${qData.soru.replace(/\n/g, '<br>')}</div>
            <div class="ans-row">
                <input id="ansInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." autocomplete="off" onkeydown="if(event.key==='Enter') checkAnswer()">
                <button class="btn btn-primary" onclick="checkAnswer()">✓</button>
            </div>
            <div class="ans-hint">Sayı, kesir (3/4) veya birim ile yaz</div>
        </div>
    `;
    
    setTimeout(() => document.getElementById('ansInp')?.focus(), 100);
}

window.checkAnswer = function() {
    const inp = document.getElementById('ansInp');
    if (!inp || !inp.value.trim()) return;
    inp.disabled = true;
    if (!ST.cq) return;
    
    const isCorrect = checkEqual(inp.value.trim(), ST.cq.cevap);
    const level = ST.cq.level || ST.currentLevel;
    const hist = getHist(ST.topic);
    
    if (!hist.levels[level]) hist.levels[level] = { correct: 0, total: 0 };
    hist.levels[level].total++;
    if (isCorrect) hist.levels[level].correct++;
    
    ST.totalQ++;
    if (isCorrect) { 
        ST.totalCorrect++; 
        ST.streak++; 
        if (ST.streak > ST.maxStreak) ST.maxStreak = ST.streak; 
    } else { 
        ST.streak = 0; 
    }
    
    const levelInfo = getLevelConfig(level);
    const limit = levelInfo ? levelInfo.questionCount : 10;
    const minC = levelInfo ? levelInfo.minCorrect : 8;
    
    let levelCompleted = false, nextLevel = null, topicCompleted = false;
    
    if (hist.levels[level].total >= limit) {
        if (hist.levels[level].correct >= minC) {
            levelCompleted = true;
            nextLevel = getNextLevel(level);
            if (nextLevel) { 
                ST.currentLevel = nextLevel; 
                hist.currentLevel = nextLevel; 
            } else { 
                topicCompleted = true; 
                if (!ST.completedTopics.includes(ST.topic)) {
                    ST.completedTopics.push(ST.topic);
                }
                celebrate('🏆 Konu Tamamlandı!');
            }
        } else { 
            hist.levels[level].correct = 0; 
            hist.levels[level].total = 0; 
        }
    }
    
    saveState();
    ST.phase = 'feedback';
    
    let nextMsg = '';
    if (levelCompleted && nextLevel) {
        const nextLevelInfo = getLevelConfig(nextLevel);
        nextMsg = `<div style="margin-top:12px;padding:10px;background:var(--success-bg);border-radius:8px;text-align:center">
                    🎉 <strong>${levelInfo ? levelInfo.name : level} Geçildi!</strong><br>
                    → ${nextLevelInfo ? nextLevelInfo.name : 'Yeni Seviye'}
                   </div>`;
    } else if (topicCompleted) {
        nextMsg = `<div style="margin-top:12px;padding:12px;background:var(--success-bg);border-radius:8px;text-align:center">
                    🏆 <strong>Konu Tamamlandı!</strong>
                   </div>`;
    }
    
    const el = document.getElementById('learnContent');
    el.innerHTML += `
        <div class="fb ${isCorrect ? 'fb-ok' : 'fb-fail'}">
            <div class="fb-head">
                <span class="fb-icon">${isCorrect ? '🎉' : '❌'}</span>
                <span class="fb-title">${isCorrect ? 'Doğru!' : 'Yanlış'}</span>
            </div>
            <div class="fb-body">
                ${isCorrect ? `Cevap: <strong>${ST.cq.cevap}</strong>` : `Doğru cevap: <strong>${ST.cq.cevap}</strong>`}
            </div>
            ${nextMsg}
            ${!topicCompleted ? '<div class="btn-row" style="margin-top:12px"><button class="btn btn-ghost btn-full" onclick="nextQuestion()">Sonraki Soru →</button></div>' : ''}
        </div>
    `;
};

window.nextQuestion = function() { 
    ST.phase = 'question'; 
    ST.cq = null; 
    renderNextQuestion(); 
};

// ============================================
// SORU BANKASI
// ============================================

function renderQuestionBankList() {
    const el = document.getElementById('qbTopicsList');
    if (!el) return;
    
    let html = '', lp = '';
    
    TOPICS.forEach(t => {
        if (t.p !== lp) { 
            lp = t.p; 
            html += `<div class="phase-sep">${t.p}</div>`; 
        }
        
        const p = ST.questionBankProgress[t.id] || { solved: [] };
        const s = p.solved.length;
        const pct = Math.round((s / 300) * 100);
        const done = s >= 300;
        
        html += `<div class="topic-row ${done ? 't-done' : ''}" onclick="startQuestionBank(${t.id})">
                    <span class="t-icon">${t.e}</span>
                    <div class="t-info">
                        <div class="t-name">${t.n}</div>
                        <div class="t-meta">${done ? '✅ Tamamlandı' : `${s}/300`}</div>
                        <div class="prog-bar-wrap">
                            <div class="prog-bar-bg">
                                <div class="prog-bar-fill fill-acc" style="width:${pct}%"></div>
                            </div>
                        </div>
                    </div>
                    <span>${done ? '✅' : '📝'}</span>
                </div>`;
    });
    
    el.innerHTML = html;
}

window.startQuestionBank = function(topicId) {
    ST.topic = topicId;
    ST.cq = null;
    showView('vQBSolve');
    renderQBSolveHeader();
    renderNextQBQuestion();
};

function renderQBSolveHeader() {
    const t = getTopicById(ST.topic);
    const p = ST.questionBankProgress[ST.topic] || { solved: [] };
    document.getElementById('qbSolveTitle').textContent = `📝 ${t?.n || ''}`;
    document.getElementById('qbSolveProgress').textContent = `${p.solved.length}/300`;
}

function renderNextQBQuestion() {
    const progress = ST.questionBankProgress[ST.topic] || { solved: [] };
    const el = document.getElementById('qbSolveContent');
    if (!el) return;
    
    if (progress.solved.length >= 300) {
        el.innerHTML = `<div class="card accent-top" style="text-align:center">
                            <h3>🎉 Tamamlandı!</h3>
                            <button class="btn btn-primary btn-full" onclick="goQuestionBank()">📝 Listeye Dön</button>
                        </div>`;
        return;
    }
    
    el.innerHTML = `<div class="card">${dots()}</div>`;
    
    const levels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
    const randomLevel = levels[Math.floor(Math.random() * levels.length)];
    const qData = generateQuestion(ST.topic, randomLevel);
    
    if (!qData) { 
        el.innerHTML = '<div class="err">Soru üretilemedi</div>'; 
        return; 
    }
    
    ST.cq = { ...qData, mode: 'questionBank' };
    const t = getTopicById(ST.topic);
    const zc = qData.zorluk === 'kolay' ? 'badge-grn' : (qData.zorluk === 'zor' ? 'badge-red' : 'badge-warn');
    
    el.innerHTML = `
        <div class="prog-bar-wrap">
            <div class="prog-bar-label">
                <span>📝 ${t?.n || ''}</span>
                <span>${progress.solved.length}/300</span>
            </div>
            <div class="prog-bar-bg">
                <div class="prog-bar-fill fill-acc" style="width:${(progress.solved.length / 300) * 100}%"></div>
            </div>
        </div>
        <div class="card accent-top">
            <div class="q-header">
                <span class="q-counter">Soru ${progress.solved.length + 1}</span>
                <div class="q-tags">
                    <span class="badge ${zc}">${qData.zorluk}</span>
                    <span class="badge badge-acc">${t?.n || ''}</span>
                </div>
            </div>
            <div class="q-text">${qData.soru.replace(/\n/g, '<br>')}</div>
            <div class="ans-row">
                <input id="qbAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." onkeydown="if(event.key==='Enter') checkQBAnswer()">
                <button class="btn btn-primary" onclick="checkQBAnswer()">✓</button>
            </div>
            <button class="btn btn-ghost btn-full" style="margin-top:8px" onclick="skipQBQuestion()">Boş Bırak →</button>
        </div>
    `;
    
    setTimeout(() => document.getElementById('qbAnsInp')?.focus(), 100);
}

window.checkQBAnswer = function() {
    const inp = document.getElementById('qbAnsInp');
    if (!inp?.value.trim()) return;
    inp.disabled = true;
    if (!ST.cq) return;
    
    const isCorrect = checkEqual(inp.value.trim(), ST.cq.cevap);
    const progress = ST.questionBankProgress[ST.topic] || { solved: [] };
    
    if (!progress.solved.includes(ST.cq.id)) progress.solved.push(ST.cq.id);
    ST.questionBankProgress[ST.topic] = progress;
    
    ST.totalQ++;
    if (isCorrect) { 
        ST.totalCorrect++; 
        ST.streak++; 
        if (ST.streak > ST.maxStreak) ST.maxStreak = ST.streak; 
    } else { 
        ST.streak = 0; 
    }
    
    saveState();
    renderQBSolveHeader();
    
    const el = document.getElementById('qbSolveContent');
    el.innerHTML += `
        <div class="fb ${isCorrect ? 'fb-ok' : 'fb-fail'}">
            <div class="fb-head">
                <span class="fb-icon">${isCorrect ? '🎉' : '❌'}</span>
                <span class="fb-title">${isCorrect ? 'Doğru!' : 'Yanlış'}</span>
            </div>
            <div class="fb-body">
                ${isCorrect ? `Cevap: <strong>${ST.cq.cevap}</strong>` : `Doğru: <strong>${ST.cq.cevap}</strong>`}
            </div>
            <div class="btn-row" style="margin-top:12px">
                <button class="btn btn-ghost btn-full" onclick="nextQBQuestion()">Sonraki →</button>
            </div>
        </div>
    `;
};

window.skipQBQuestion = function() {
    const progress = ST.questionBankProgress[ST.topic] || { solved: [] };
    if (!progress.solved.includes(ST.cq?.id)) progress.solved.push(ST.cq?.id);
    ST.questionBankProgress[ST.topic] = progress;
    saveState();
    renderQBSolveHeader();
    nextQBQuestion();
};

window.nextQBQuestion = function() { 
    ST.cq = null; 
    renderNextQBQuestion(); 
};

// ============================================
// DENEME SINAVI
// ============================================

const EXAM_QUESTIONS = 20;
const EXAM_DURATION = 20;

function initExamSets() {
    for (let i = 1; i <= 5; i++) {
        if (!ST.examSets['set_' + i]) {
            ST.examSets['set_' + i] = { completed: false, net: null, date: null };
        }
    }
    saveState();
}

function renderExamList() {
    const el = document.getElementById('examListContent');
    if (!el) return;
    
    let html = '<div class="card"><h3>📋 Deneme Sınavları</h3>';
    
    for (let i = 1; i <= 5; i++) {
        const setId = 'set_' + i;
        const set = ST.examSets[setId] || { completed: false, net: null, date: null };
        const status = set.completed ? `✅ ${set.net} net (${set.date})` : '⭕ Çözülmedi';
        
        html += `
            <div class="exam-item" onclick="startExamSet('${setId}')">
                <div class="exam-title">Deneme ${i}</div>
                <div class="exam-status">${status}</div>
                <div class="exam-desc">20 soru, 20 dakika</div>
            </div>
        `;
    }
    
    html += '</div>';
    el.innerHTML = html;
}

window.startExamSet = function(setId) {
    const questions = [];
    const allTopics = [...TOPICS];
    const shuffledTopics = shuffleArray(allTopics);
    
    for (let i = 0; i < Math.min(EXAM_QUESTIONS, shuffledTopics.length); i++) {
        const t = shuffledTopics[i];
        const tpls = QUESTION_TEMPLATES[t.id];
        if (tpls && tpls.length) {
            const tpl = tpls[Math.floor(Math.random() * tpls.length)];
            const vars = generateVariables(tpl.v);
            if (vars) {
                const answer = safeEval(fillTemplate(tpl.c, vars));
                if (answer !== null) {
                    questions.push({
                        id: `exam_${t.id}_${Date.now()}_${i}`,
                        soru: fillTemplate(tpl.s, vars),
                        cevap: String(answer),
                        zorluk: tpl.z || 'orta',
                        topicName: t.n
                    });
                }
            }
        }
    }
    
    const examQuestions = shuffleArray(questions).slice(0, EXAM_QUESTIONS);
    ST.currentExam = { 
        setId, 
        questions: examQuestions, 
        currentIndex: 0, 
        answers: [], 
        timeLeft: EXAM_DURATION * 60 
    };
    
    showView('vExam');
    document.getElementById('examTitle').textContent = `Deneme ${setId.replace('set_', '')}`;
    updateExamTimer();
    startExamTimer();
    loadExamQuestion(0);
};

function startExamTimer() {
    if (ST.examTimer) clearInterval(ST.examTimer);
    ST.examTimer = setInterval(() => {
        if (ST.currentExam && ST.currentExam.timeLeft > 0) {
            ST.currentExam.timeLeft--;
            updateExamTimer();
            if (ST.currentExam.timeLeft <= 0) finishExam();
        }
    }, 1000);
}

function updateExamTimer() {
    const el = document.getElementById('examTimer');
    if (!el || !ST.currentExam) return;
    const m = Math.floor(ST.currentExam.timeLeft / 60);
    const s = ST.currentExam.timeLeft % 60;
    el.textContent = `${m}:${String(s).padStart(2, '0')}`;
}

function loadExamQuestion(idx) {
    if (idx >= ST.currentExam.questions.length) { 
        finishExam(); 
        return; 
    }
    
    ST.currentExam.currentIndex = idx;
    const q = ST.currentExam.questions[idx];
    const el = document.getElementById('examContent');
    if (!el) return;
    
    const zc = q.zorluk === 'kolay' ? 'badge-grn' : (q.zorluk === 'zor' ? 'badge-red' : 'badge-warn');
    
    el.innerHTML = `
        <div class="card accent-top">
            <div class="q-header">
                <span class="q-counter">Soru ${idx + 1}/${ST.currentExam.questions.length}</span>
                <div class="q-tags">
                    <span class="badge ${zc}">${q.zorluk}</span>
                    <span class="badge badge-acc">${q.topicName || ''}</span>
                </div>
            </div>
            <div class="q-text">${q.soru.replace(/\n/g, '<br>')}</div>
            <div class="ans-row">
                <input id="examAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." onkeydown="if(event.key==='Enter') submitExamAnswer()">
                <button class="btn btn-primary" onclick="submitExamAnswer()">✓</button>
            </div>
            <button class="btn btn-ghost btn-full" style="margin-top:8px" onclick="skipExamAnswer()">Boş Bırak →</button>
        </div>
    `;
    
    setTimeout(() => document.getElementById('examAnsInp')?.focus(), 100);
}

window.submitExamAnswer = function() {
    const inp = document.getElementById('examAnsInp');
    const userAnswer = inp?.value?.trim() || '';
    const q = ST.currentExam.questions[ST.currentExam.currentIndex];
    
    ST.currentExam.answers.push({
        correctAnswer: q.cevap,
        userAnswer: userAnswer,
        isCorrect: checkEqual(userAnswer, q.cevap),
        skipped: false
    });
    
    loadExamQuestion(ST.currentExam.currentIndex + 1);
};

window.skipExamAnswer = function() {
    const q = ST.currentExam.questions[ST.currentExam.currentIndex];
    ST.currentExam.answers.push({
        correctAnswer: q.cevap,
        userAnswer: '',
        isCorrect: false,
        skipped: true
    });
    loadExamQuestion(ST.currentExam.currentIndex + 1);
};

function finishExam() {
    if (ST.examTimer) clearInterval(ST.examTimer);
    if (!ST.currentExam) return;
    
    const answers = ST.currentExam.answers;
    const d = answers.filter(a => a.isCorrect).length;
    const y = answers.filter(a => !a.isCorrect && !a.skipped).length;
    const net = (d - y * 0.25).toFixed(2);
    
    const sd = ST.examSets[ST.currentExam.setId];
    if (sd && !sd.completed) { 
        sd.completed = true; 
        sd.net = net; 
        sd.date = todayStr(); 
    }
    
    saveState();
    
    const el = document.getElementById('examContent');
    el.innerHTML = `
        <div style="text-align:center;padding:20px 0">
            <div class="net-num">${net}</div>
            <div class="net-lbl">Net</div>
            <div class="stat-grid">
                <div class="stat-cell">
                    <div class="stat-num" style="color:var(--success)">${d}</div>
                    <div class="stat-lbl">Doğru</div>
                </div>
                <div class="stat-cell">
                    <div class="stat-num" style="color:var(--danger)">${y}</div>
                    <div class="stat-lbl">Yanlış</div>
                </div>
                <div class="stat-cell">
                    <div class="stat-num" style="color:var(--warning)">${answers.length}</div>
                    <div class="stat-lbl">Toplam</div>
                </div>
            </div>
            <div class="btn-row">
                <button class="btn btn-primary btn-full" onclick="startExamSet('${ST.currentExam.setId}')">🔄 Tekrar</button>
                <button class="btn btn-ghost btn-full" onclick="goExamList()">Listeye Dön</button>
            </div>
        </div>
    `;
    
    ST.currentExam = null;
}

window.cancelExam = function() {
    if (ST.examTimer) clearInterval(ST.examTimer);
    if (confirm('Denemeyi iptal et?')) { 
        ST.currentExam = null; 
        goExamList(); 
    }
};

// ============================================
// İSTATİSTİK
// ============================================

function renderStats() {
    const el = document.getElementById('statsContent');
    if (!el) return;
    
    const done = ST.completedTopics.length;
    const acc = ST.totalQ > 0 ? Math.round((ST.totalCorrect / ST.totalQ) * 100) : 0;
    
    let qbs = 0;
    Object.keys(ST.questionBankProgress).forEach(tid => { 
        qbs += ST.questionBankProgress[tid].solved.length; 
    });
    
    const estNet = Math.min(30, Math.round(done * 0.55 + acc / 14));
    
    el.innerHTML = `
        <div class="net-box">
            <div class="net-num">${estNet}</div>
            <div class="net-lbl">Tahmini KPSS Netin</div>
        </div>
        <div class="stat-grid">
            <div class="stat-cell">
                <div class="stat-num" style="color:var(--accent)">${done}</div>
                <div class="stat-lbl">Konu Bitti</div>
            </div>
            <div class="stat-cell">
                <div class="stat-num" style="color:var(--danger)">${ST.totalQ}</div>
                <div class="stat-lbl">Toplam Soru</div>
            </div>
            <div class="stat-cell">
                <div class="stat-num" style="color:var(--success)">%${acc}</div>
                <div class="stat-lbl">Doğruluk</div>
            </div>
            <div class="stat-cell">
                <div class="stat-num" style="color:var(--warning)">${ST.maxStreak}</div>
                <div class="stat-lbl">En İyi Seri</div>
            </div>
        </div>
        <div class="card">
            <h3>Genel İlerleme</h3>
            <div class="prog-bar-wrap">
                <div class="prog-bar-label">
                    <span>Konular</span>
                    <span>${done}/205</span>
                </div>
                <div class="prog-bar-bg">
                    <div class="prog-bar-fill fill-acc" style="width:${Math.round((done / 205) * 100)}%"></div>
                </div>
            </div>
            <div class="prog-bar-wrap">
                <div class="prog-bar-label">
                    <span>Soru Bankası</span>
                    <span>${qbs}/${205 * 300}</span>
                </div>
                <div class="prog-bar-bg">
                    <div class="prog-bar-fill fill-grn" style="width:${Math.round((qbs / (205 * 300)) * 100)}%"></div>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// MODAL VE SIFIRLAMA
// ============================================

window.openModal = function(id) {
    const el = document.getElementById(id + 'Modal');
    if (el) el.classList.remove('hidden');
    if (id === 'api') document.getElementById('apiInp').value = ST.apiKey;
};

window.closeModal = function(id) { 
    document.getElementById(id + 'Modal')?.classList.add('hidden'); 
};

window.saveKey = function() {
    const k = document.getElementById('apiInp')?.value?.trim();
    if (!k) return;
    ST.apiKey = k;
    localStorage.setItem('kpss_mat_api_key', k);
    closeModal('api');
    alert('✅ API anahtarı kaydedildi!');
};

window.doReset = function(type) {
    closeModal('reset');
    
    if (type === 'all') {
        if (!confirm('TÜM VERİLER SİLİNECEK! Emin misiniz?')) return;
        
        const ak = ST.apiKey;
        ST = {
            version: STATE_VERSION, 
            apiKey: ak, 
            topic: 1, 
            currentLevel: '0',
            streak: 0, 
            maxStreak: 0, 
            totalCorrect: 0, 
            totalQ: 0,
            completedTopics: [], 
            hist: {}, 
            questionBankProgress: {},
            examSets: {}, 
            examGeneration: 1, 
            examHistory: [],
            apiCallCount: 0, 
            apiCallDate: '', 
            lastSession: null,
            phase: 'summary', 
            cq: null, 
            summaries: {}, 
            testMode: false, 
            lastView: 'vHome'
        };
        
        for (let i = 1; i <= 205; i++) ST.hist[i] = { levels: {}, currentLevel: '0' };
        initExamSets();
        GLOBAL_QUESTION_FINGERPRINTS.clear();
        saveState();
        goHome();
        alert('✅ Tüm veriler sıfırlandı!');
        
    } else if (type === 'topic') {
        const t = getTopicById(ST.topic);
        if (!confirm(`${t?.n} konusu sıfırlansın mı?`)) return;
        
        ST.hist[ST.topic] = { levels: {}, currentLevel: '0' };
        ST.currentLevel = '0';
        ST.completedTopics = ST.completedTopics.filter(id => id !== ST.topic);
        if (ST.questionBankProgress[ST.topic]) delete ST.questionBankProgress[ST.topic];
        saveState();
        
        if (currentView === 'vLearn') {
            renderPreStudySummary();
        } else {
            renderTopicsList();
        }
        
        alert(`✅ ${t?.n} sıfırlandı!`);
    }
};

// ============================================
// BAŞLATMA
// ============================================

function initApp() {
    loadState();
    convertQuestionBankToTemplates();
    initExamSets();
    
    const targetView = ST.lastView || 'vHome';
    showView(targetView);
    saveState();
    
    history.replaceState({ view: targetView }, '', '#/' + targetView);
    console.log('✅ app.js (v5.2) hazır!');
}

window.addEventListener('popstate', function(event) {
    const state = event.state;
    if (state && state.view) showView(state.view);
    else showView('vHome');
});

document.addEventListener('DOMContentLoaded', initApp);
