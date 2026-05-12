// ============================================
// app.js - KPSS & DGS MATEMATİK ANA UYGULAMA
// Tek parça • Bölümlerle ayrılmış
// Versiyon: 2.2 | Kilit sistemi düzeltildi
// ============================================

console.log('🚀 app.js yükleniyor...');

// ============================================
// BÖLÜM 1: BAŞLANGIÇ & YARDIMCI FONKSİYONLAR
// ============================================

function normAns(s) {
    return String(s)
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/,/g, '.')
        .replace(/[×x]/g, '*')
        .replace(/%|tl|lira|gün|saat|km|kg|gr|lt|ml|cm|m/g, '')
        .trim();
}

function checkEqual(userAns, correctAns) {
    const u = normAns(userAns);
    const c = normAns(correctAns);
    if (u === c) return true;
    const un = parseFloat(u);
    const cn = parseFloat(c);
    if (!isNaN(un) && !isNaN(cn) && Math.abs(un - cn) < 0.05) return true;
    return false;
}

function esc(s) {
    return String(s).replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/\n/g, ' ');
}

function dots() {
    return '<div class="dots"><span></span><span></span><span></span></div>';
}

function celebrate(msg, duration = 1900) {
    const wrap = document.getElementById('celWrap');
    const txt = document.getElementById('celTxt');
    if (!wrap || !txt) return;
    txt.textContent = msg;
    wrap.classList.remove('hidden');
    setTimeout(() => wrap.classList.add('hidden'), duration);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function seededRandom(seed) {
    let s = seed;
    return function() {
        s = (s * 16807 + 0) % 2147483647;
        return (s - 1) / 2147483646;
    };
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

function todayStr() {
    return new Date().toISOString().split('T')[0];
}

function findGCD(a, b) {
    while (b) { [a, b] = [b, a % b]; }
    return a;
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function getPrimesInRange(min, max) {
    const primes = [];
    for (let i = Math.max(2, Math.ceil(min)); i <= max; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(36).substring(0, 6);
}

function safeEval(expr) {
    const sanitized = expr.replace(/[^0-9+\-*/().%\s]/g, '');
    if (!/^[0-9+\-*/().%\s]+$/.test(sanitized)) {
        throw new Error('Geçersiz ifade');
    }
    return new Function('return ' + sanitized)();
}

function resolveValue(val, vars) {
    if (typeof val === 'number') return val;
    if (typeof val === 'string') {
        const match = val.match(/\{(\w+)\}/);
        if (match && vars[match[1]] !== undefined) return Number(vars[match[1]]);
        try {
            let expr = val;
            for (const [key, value] of Object.entries(vars)) {
                expr = expr.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
            }
            return safeEval(expr);
        } catch (e) {
            return Number(val) || 0;
        }
    }
    return val || 0;
}

// ============================================
// BÖLÜM 2: STATE (DURUM) YÖNETİMİ
// ============================================

let ST = {
    version: STATE_VERSION,
    apiKey: '',
    topic: 1,
    currentLevel: 'KOLAY',
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
    pendingAdvance: false,
    summaries: {},
    testMode: false
};

function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem(CONSTANTS.STORAGE_KEY) || '{}');
        if (saved.version === STATE_VERSION) {
            Object.assign(ST, saved);
            console.log('✅ State yüklendi (v' + STATE_VERSION + ')');
        } else if (Object.keys(saved).length > 0) {
            console.warn('⚠️ Eski state versiyonu, taşınıyor...');
            migrateState(saved);
        }
    } catch (e) {
        console.error('❌ State yüklenemedi:', e);
    }
    ST.apiKey = localStorage.getItem(CONSTANTS.API_KEY_STORAGE) || '';
    initMissingFields();
    checkApiDate();
}

function migrateState(old) {
    if (old.apiKey) ST.apiKey = old.apiKey;
    if (old.topic) ST.topic = old.topic;
    if (old.currentLevel) ST.currentLevel = old.currentLevel;
    if (old.streak) ST.streak = old.streak;
    if (old.maxStreak) ST.maxStreak = old.maxStreak;
    if (old.totalCorrect) ST.totalCorrect = old.totalCorrect;
    if (old.totalQ) ST.totalQ = old.totalQ;
    if (old.completedTopics) ST.completedTopics = old.completedTopics;
    if (old.hist) ST.hist = old.hist;
    if (old.examHistory) ST.examHistory = old.examHistory;
    if (old.lastSession) ST.lastSession = old.lastSession;
    console.log('✅ Eski state taşındı');
    saveState();
}

function initMissingFields() {
    for (let i = 1; i <= CONSTANTS.TOTAL_TOPICS; i++) {
        if (!ST.hist[i]) ST.hist[i] = { levels: {}, currentLevel: 'KOLAY' };
    }
    if (!ST.questionBankProgress) ST.questionBankProgress = {};
    if (!ST.examSets) ST.examSets = {};
    if (!ST.examGeneration) ST.examGeneration = 1;
    if (!ST.apiCallCount) ST.apiCallCount = 0;
    if (!ST.apiCallDate) ST.apiCallDate = '';
    if (!ST.summaries) ST.summaries = {};
}

function checkApiDate() {
    const today = todayStr();
    if (ST.apiCallDate !== today) {
        ST.apiCallCount = 0;
        ST.apiCallDate = today;
    }
}

function saveState() {
    try {
        const { apiKey, cq, ...saveData } = ST;
        localStorage.setItem(CONSTANTS.STORAGE_KEY, JSON.stringify(saveData));
    } catch (e) {
        console.error('❌ State kaydedilemedi:', e);
    }
}

function getHist(topicId) {
    if (!ST.hist[topicId]) ST.hist[topicId] = { levels: {}, currentLevel: 'KOLAY' };
    return ST.hist[topicId];
}

function getQBProgress(topicId) {
    if (!ST.questionBankProgress[topicId]) {
        ST.questionBankProgress[topicId] = { solved: [], total: CONSTANTS.QUESTION_BANK_SIZE };
    }
    return ST.questionBankProgress[topicId];
}

// ============================================
// BÖLÜM 3: SAYFA GEÇİŞLERİ & HEADER
// ============================================

let currentView = 'vHome';
let viewStack = [];

function showView(id, addToStack = true) {
    const currentEl = document.getElementById(currentView);
    if (currentEl) currentEl.classList.remove('active');
    if (addToStack && currentView !== id) {
        viewStack.push(currentView);
        if (viewStack.length > 20) viewStack.shift();
    }
    const targetEl = document.getElementById(id);
    if (targetEl) {
        targetEl.classList.add('active');
        currentView = id;
    }
    updateHeader(id);
    window.scrollTo(0, 0);
}

function updateHeader(viewId) {
    const titleEl = document.getElementById('headerTitle');
    const backBtn = document.getElementById('btnBack');
    if (!titleEl || !backBtn) return;
    const titles = {
        'vHome': 'KPSS Matematik',
        'vTopics': '📚 Konular',
        'vLearn': 'Konu Çalış',
        'vQuestionBank': '📝 Soru Bankası',
        'vQBSolve': 'Soru Bankası',
        'vExamList': '📋 Denemeler',
        'vExam': 'Deneme Sınavı',
        'vStats': '📊 İstatistikler'
    };
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

window.goHome = function() {
    viewStack = [];
    showView('vHome', false);
    updateHomeStats();
};

window.goTopics = function() {
    showView('vTopics');
    const el = document.getElementById('topicsDoneLabel');
    if (el) el.textContent = `${ST.completedTopics.length}/${CONSTANTS.TOTAL_TOPICS}`;
    renderTopicsList();
};

window.goQuestionBank = function() {
    showView('vQuestionBank');
    renderQuestionBankList();
};

window.goExamList = function() {
    showView('vExamList');
    renderExamList();
};

window.goStats = function() {
    showView('vStats');
    renderStats();
};

window.toggleMenu = function() {
    const menu = document.getElementById('sideMenu');
    if (menu) menu.classList.toggle('hidden');
    const statusEl = document.getElementById('apiStatusMini');
    if (statusEl) statusEl.textContent = ST.apiKey ? '🟢' : '⚪';
};

function updateApiStatus() {
    const el = document.getElementById('apiStatusMini');
    if (el) el.textContent = ST.apiKey ? '🟢' : '⚪';
}

// ============================================
// BÖLÜM 4: ANA SAYFA
// ============================================

function updateHomeStats() {
    const done = ST.completedTopics.length;
    const totalQ = ST.totalQ;
    const accuracy = ST.totalQ > 0 ? Math.round((ST.totalCorrect / ST.totalQ) * 100) : 0;
    const maxStreak = ST.maxStreak;

    const el1 = document.getElementById('statTopics');
    const el2 = document.getElementById('statQuestions');
    const el3 = document.getElementById('statAccuracy');
    const el4 = document.getElementById('statStreak');
    if (el1) el1.textContent = done;
    if (el2) el2.textContent = totalQ;
    if (el3) el3.textContent = '%' + accuracy;
    if (el4) el4.textContent = maxStreak;

    // Sıradaki konu: tamamlanmamış ve kilidi açık ilk konu
    const nextTopic = TOPICS.find(t => {
        if (ST.completedTopics.includes(t.id)) return false;
        const prevTopic = TOPICS.find(pt => pt.order === t.order - 1);
        return !prevTopic || ST.completedTopics.includes(prevTopic.id);
    });

    const badge = document.getElementById('nextTopicBadge');
    if (badge) {
        badge.textContent = nextTopic ? `🎯 Sıradaki: ${nextTopic.e} ${nextTopic.n}` : '🏆 Tüm konular tamamlandı!';
        badge.style.display = '';
    }

    ST.lastSession = todayStr();
    saveState();
}

// ============================================
// BÖLÜM 5: KONU LİSTESİ (KİLİT SİSTEMİ DÜZELTİLDİ)
// ============================================

function renderTopicsList() {
    const el = document.getElementById('topicsList');
    if (!el) return;
    if (typeof TOPICS === 'undefined') {
        el.innerHTML = '<div class="err">Konular yüklenemedi.</div>';
        return;
    }

    let html = '';
    let lastPhase = '';

    TOPICS.forEach(t => {
        if (t.p !== lastPhase) {
            lastPhase = t.p;
            html += `<div class="phase-sep">${t.p}</div>`;
        }

        const isCompleted = ST.completedTopics.includes(t.id);
        const isCurrent = t.id === ST.topic;

        // ✅ KİLİT MANTIĞI DÜZELTİLDİ: Bir önceki konu tamamlandıysa kilidi aç
        const previousTopic = TOPICS.find(pt => pt.order === t.order - 1);
        const isLocked = previousTopic && !ST.completedTopics.includes(previousTopic.id);

        const hist = getHist(t.id);
        let totalCorrect = 0;
        let totalQuestions = 0;
        if (hist.levels) {
            Object.values(hist.levels).forEach(lv => {
                if (lv) { totalCorrect += lv.correct || 0; totalQuestions += lv.total || 0; }
            });
        }

        const acc = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : null;
        const progress = totalQuestions > 0 ? Math.min(100, Math.round((totalQuestions / CONSTANTS.QUESTIONS_PER_TOPIC) * 100)) : 0;

        let cls = 'topic-row';
        if (isCompleted) cls += ' t-done';
        else if (isCurrent) cls += ' t-current';
        else if (isLocked) cls += ' t-locked';

        let statusIcon = '⭕';
        if (isCompleted) statusIcon = '✅';
        else if (isCurrent) statusIcon = '▶️';
        else if (isLocked) statusIcon = '🔒';

        html += `
            <div class="${cls}" ${isLocked ? '' : `onclick="openTopic(${t.id})"`}>
                <span class="t-icon">${t.e}</span>
                <div class="t-info">
                    <div class="t-name">${t.n}</div>
                    <div class="t-meta">KPSS: ${t.kpss} | DGS: ${t.dgs || 'YOK'}${acc !== null ? ` · %${acc}` : ''}</div>
                    <div class="prog-bar-wrap">
                        <div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width: ${progress}%"></div></div>
                    </div>
                </div>
                <span style="font-size: 18px;">${statusIcon}</span>
            </div>
        `;
    });

    el.innerHTML = html;
}

// ============================================
// BÖLÜM 6: KONU ÇALIŞ (ÖZET & SORU & SEVİYE)
// ============================================

window.openTopic = function(topicId) {
    ST.topic = topicId;
    const hist = getHist(topicId);
    ST.currentLevel = hist.currentLevel || 'KOLAY';
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

    el.innerHTML = `
        <div class="card">
            <h3>📖 ${t.n} - Konu Özeti</h3>
            ${dots()}
            <p style="text-align: center; color: var(--text-muted); font-size: 13px;">Konu özeti hazırlanıyor...</p>
        </div>
    `;

    if (ST.summaries[ST.topic]) {
        showPreStudySummary(ST.summaries[ST.topic]);
        return;
    }

    if (ST.apiKey && ST.apiCallCount < CONSTANTS.API_DAILY_LIMIT) {
        fetchTopicSummary(t).then(summary => {
            ST.summaries[ST.topic] = summary;
            saveState();
            showPreStudySummary(summary);
        }).catch(() => {
            showPreStudySummary(null);
        });
    } else {
        setTimeout(() => showPreStudySummary(null), 500);
    }
}

function showPreStudySummary(summary) {
    const t = getTopicById(ST.topic);
    if (!t) return;
    const el = document.getElementById('learnContent');
    if (!el) return;

    let summaryHTML = '';
    if (summary) {
        summaryHTML = `
            <div class="card accent-top">
                <h3>📖 ${t.n} - Konu Özeti</h3>
                <div style="font-size: 14px; color: var(--text-secondary); line-height: 1.8; margin-top: 10px;">
                    ${summary.replace(/\n/g, '<br>')}
                </div>
                <div style="font-size: 10px; color: var(--text-muted); margin-top: 12px; text-align: right;">
                    🤖 Groq AI tarafından oluşturuldu
                </div>
            </div>
        `;
    }

    const formulas = FORMULAS[ST.topic] || [];
    let formulaHTML = '';
    if (formulas.length > 0) {
        formulaHTML = `
            <div class="formula-box">
                <div class="fb-label">📐 Formüller & Kurallar</div>
                <div class="fb-content">${formulas.map(f => `• ${f}`).join('<br>')}</div>
            </div>
        `;
    }

    const levelInfo = LEVELS[ST.currentLevel];
    const hist = getHist(ST.topic);
    const levelHist = hist.levels?.[ST.currentLevel] || { correct: 0, total: 0 };

    el.innerHTML = `
        ${summary ? summaryHTML : `
            <div class="card accent-top">
                <h3>📖 ${t.n}</h3>
                <p style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">
                    ${ST.apiKey ? 'Konu özeti yüklenemedi.' : 'API anahtarı ekleyerek yapay zeka özeti alabilirsiniz.'}
                </p>
            </div>
        `}
        ${formulaHTML}
        <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="margin: 0;">📊 ${levelInfo.name} Seviye</h3>
                <span class="badge badge-acc">${levelInfo.questionCount} soru</span>
            </div>
            <div class="prog-bar-wrap">
                <div class="prog-bar-label">
                    <span>Bu seviyede ilerleme</span>
                    <span>${levelHist.correct || 0}/${levelHist.total || 0} doğru</span>
                </div>
                <div class="prog-bar-bg">
                    <div class="prog-bar-fill fill-grn" style="width: ${((levelHist.total || 0) / levelInfo.questionCount) * 100}%"></div>
                </div>
            </div>
            <p style="font-size: 12px; color: var(--text-muted); margin-top: 8px;">
                🎯 ${levelInfo.minCorrect} doğru yapmalısın (%${Math.round((levelInfo.minCorrect / levelInfo.questionCount) * 100)})
            </p>
        </div>
        <div class="btn-row">
            <button class="btn btn-primary btn-full" onclick="beginStudy()">✍️ Çalışmaya Başla</button>
        </div>
    `;
}

window.beginStudy = function() {
    ST.phase = 'question';
    ST.cq = null;
    window.scrollTo(0, 0);
    renderNextQuestion();
};

function setLearnHeader() {
    const t = getTopicById(ST.topic);
    if (!t) return;
    const titleEl = document.getElementById('learnTitle');
    const kademeEl = document.getElementById('learnKademe');
    if (titleEl) titleEl.textContent = `${t.e} ${t.n}`;
    if (kademeEl) {
        kademeEl.textContent = LEVELS[ST.currentLevel].name;
        kademeEl.className = 'badge badge-acc';
    }
}

// ============================================
// SORU ÜRETİM MOTORU (ENTEGRE)
// ============================================

function generateQuestion(topicId, level, options = {}) {
    const templates = QUESTION_TEMPLATES[topicId];
    if (!templates || templates.length === 0) {
        console.warn(`⚠️ Konu ${topicId} için şablon bulunamadı`);
        return null;
    }

    const maxAttempts = ST.testMode ? 2 : 5;
    const solvedIds = getSolvedIds(topicId, level, options.mode);
    let eligible = filterTemplatesByLevel(templates, level);
    if (eligible.length === 0) eligible = templates;

    const recentTemplateIds = getRecentTemplateIds(topicId, 3);
    let freshTemplates = eligible.filter(t => !recentTemplateIds.includes(t.id));
    if (freshTemplates.length === 0) freshTemplates = eligible;

    const shuffled = shuffleArray(freshTemplates);

    for (const template of shuffled) {
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            const question = tryGenerateFromTemplate(template, level, solvedIds, topicId);
            if (question && !solvedIds.includes(question.id)) {
                addRecentTemplateId(topicId, template.id);
                return question;
            }
        }
    }

    return generateFallbackQuestion(topicId, level);
}

function tryGenerateFromTemplate(template, level, solvedIds, topicId) {
    const varRanges = getVarRangesForLevel(template, level);
    const vars = generateVariables(varRanges, template.kural);
    if (!vars) return null;

    const questionText = fillTemplate(template.s, vars);
    const cevapSonuc = calculateAnswer(template.c, vars);
    if (cevapSonuc === null || cevapSonuc === undefined) return null;

    const generatedId = generateQuestionId(template.id, vars);
    if (solvedIds.includes(generatedId)) return null;

    const inputType = determineInputType(template, cevapSonuc);

    let choices = null;
    let correctChoiceIndex = 0;
    if (inputType === 'choice') {
        if (template.choices) {
            choices = generateChoicesFromTemplate(template.choices, vars, cevapSonuc);
        } else {
            choices = autoGenerateChoices(cevapSonuc, template, vars);
        }
        correctChoiceIndex = choices.findIndex(c => c.isCorrect);
        if (correctChoiceIndex < 0) correctChoiceIndex = 0;
    }

    const cozum = generateSolution(template, vars, cevapSonuc);
    const zorluk = template.z || 'orta';

    return {
        id: generatedId,
        templateId: template.id,
        soru: questionText,
        cevap: formatAnswer(cevapSonuc, inputType),
        cevapRaw: cevapSonuc,
        zorluk: zorluk,
        inputType: inputType,
        choices: choices,
        correctChoiceIndex: correctChoiceIndex,
        cozum: cozum,
        vars: vars,
        topicId: topicId
    };
}

function getVarRangesForLevel(template, level) {
    const vars = template.v;
    if (vars.kolay || vars.orta || vars.zor) {
        if (level === 'KOLAY' && vars.kolay) return vars.kolay;
        if (level === 'ORTA' && vars.orta) return vars.orta;
        if (level === 'ZOR' && vars.zor) return vars.zor;
        if (level === 'KOLAY') return vars.kolay || vars.orta || vars.zor;
        if (level === 'ORTA') return vars.orta || vars.kolay || vars.zor;
        return vars.zor || vars.orta || vars.kolay;
    }
    return vars;
}

function generateVariables(ranges, kural) {
    const vars = {};
    let attempts = 0;
    const maxAttempts = 100;

    while (attempts < maxAttempts) {
        attempts++;
        for (const [key, range] of Object.entries(ranges)) {
            vars[key] = generateSingleVariable(key, range, vars);
        }
        if (kural && !checkRule(kural, vars)) continue;
        return vars;
    }
    return null;
}

function generateSingleVariable(key, range, currentVars) {
    if (!Array.isArray(range)) return range;

    let min = resolveValue(range[0], currentVars);
    let max = resolveValue(range[1], currentVars);
    if (min > max) [min, max] = [max, min];

    const specialRule = range[2];
    if (specialRule) return generateSpecialVariable(min, max, specialRule);

    if (Number.isInteger(min) && Number.isInteger(max)) {
        return randomInt(min, max);
    }
    return Math.round(randomFloat(min, max) * 100) / 100;
}

function generateSpecialVariable(min, max, rule) {
    switch (rule) {
        case 'cift': case 'çift': case 'even': {
            const adjMin = min % 2 === 0 ? min : min + 1;
            const adjMax = max % 2 === 0 ? max : max - 1;
            if (adjMin > adjMax) return min;
            return randomInt(adjMin / 2, adjMax / 2) * 2;
        }
        case 'tek': case 'odd': {
            const adjMin = min % 2 === 1 ? min : min + 1;
            const adjMax = max % 2 === 1 ? max : max - 1;
            if (adjMin > adjMax) return min;
            return randomInt((adjMin + 1) / 2, (adjMax + 1) / 2) * 2 - 1;
        }
        case '3kati': case '3katı': case 'multiple3': {
            const adjMin = Math.ceil(min / 3) * 3;
            const adjMax = Math.floor(max / 3) * 3;
            if (adjMin > adjMax) return min;
            return randomInt(adjMin / 3, adjMax / 3) * 3;
        }
        case '5kati': case '5katı': case 'multiple5': {
            const adjMin = Math.ceil(min / 5) * 5;
            const adjMax = Math.floor(max / 5) * 5;
            if (adjMin > adjMax) return min;
            return randomInt(adjMin / 5, adjMax / 5) * 5;
        }
        case 'asal': case 'prime': {
            const primes = getPrimesInRange(min, max);
            if (primes.length === 0) return min;
            return primes[Math.floor(Math.random() * primes.length)];
        }
        case 'negatif': case 'negative':
            return -randomInt(Math.abs(min), Math.abs(max));
        case 'pozitif': case 'positive':
            return randomInt(Math.max(1, min), Math.max(1, max));
        case 'kare': case 'square': {
            const sqrtMin = Math.ceil(Math.sqrt(Math.max(1, min)));
            const sqrtMax = Math.floor(Math.sqrt(max));
            if (sqrtMin > sqrtMax) return min * min;
            return randomInt(sqrtMin, sqrtMax) ** 2;
        }
        default: return randomInt(min, max);
    }
}

function calculateAnswer(formula, vars) {
    try {
        let expression = formula;
        for (const [key, value] of Object.entries(vars)) {
            expression = expression.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
        }
        // Özel fonksiyonları çalıştır
        if (expression.includes('ebob(') || expression.includes('asalCarpan') || 
            expression.includes('faktoriyel(') || expression.includes('permutasyon(') ||
            expression.includes('kombinasyon(') || expression.includes('sadelestir(') ||
            expression.includes('sirala(') || expression.includes('zarOlasilik(') ||
            expression.includes('isPrime(')) {
            return eval(expression);
        }
        
        expression = expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**')
            .replace(/√\(/g, 'Math.sqrt(').replace(/√/g, 'Math.sqrt');

        if (expression.includes('/')) {
            const parts = expression.split('/');
            if (parts.length === 2 && !expression.includes('(') && !expression.includes('+') && !expression.includes('-') && !expression.includes('*')) {
                const num = safeEval(parts[0]);
                const den = safeEval(parts[1]);
                if (den === 0) return null;
                if (num % den === 0) return num / den;
                const gcd = findGCD(Math.abs(num), Math.abs(den));
                return `${num / gcd}/${den / gcd}`;
            }
        }

        const result = safeEval(expression);
        if (!isFinite(result) || isNaN(result)) return null;
        return result;
    } catch (e) {
        return null;
    }
}

function determineInputType(template, answer) {
    if (template.inputType && template.inputType !== 'auto') return template.inputType;
    const answerStr = String(answer);
    if (answerStr.includes('√') || answerStr.includes('sqrt')) return 'choice';
    if (answerStr.includes('π') || answerStr.includes('pi')) return 'choice';
    if (answerStr.includes('∞') || answerStr.includes('[') || answerStr.includes(']')) return 'choice';
    if (answerStr.includes('{') || answerStr.includes('ve')) return 'choice';
    if (isNaN(Number(answerStr.replace(/[+\-*/]/g, ''))) &&
        !answerStr.match(/^-?\d+\.?\d*\/?-?\d*$/)) return 'choice';
    return 'keyboard';
}

function generateChoicesFromTemplate(choiceTemplates, vars, correctAnswer) {
    return choiceTemplates.map((ct, index) => {
        let choiceText = ct;
        for (const [key, value] of Object.entries(vars)) {
            choiceText = choiceText.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
        }
        return { label: String.fromCharCode(65 + index), text: choiceText, isCorrect: index === 0 };
    });
}

function autoGenerateChoices(correctAnswer, template, vars) {
    const correct = Number(correctAnswer);
    const choices = [];
    if (!isNaN(correct)) {
        const offsets = [correct, correct + randomInt(1, 5) * (Math.random() > 0.5 ? 1 : -1),
            correct + randomInt(2, 8) * (Math.random() > 0.5 ? 1 : -1), correct * randomInt(1, 3) - randomInt(1, 3)];
        const uniqueOffsets = [...new Set(offsets.map(o => Math.round(o * 100) / 100))];
        while (uniqueOffsets.length < 4) uniqueOffsets.push(Math.round((correct + randomInt(-10, 10)) * 100) / 100);
        const shuffled = shuffleArray(uniqueOffsets.slice(0, 4));
        shuffled.forEach((val, i) => {
            choices.push({ label: String.fromCharCode(65 + i), text: String(val), isCorrect: Math.abs(val - correct) < 0.001 });
        });
    } else {
        choices.push({ label: 'A', text: String(correctAnswer), isCorrect: true });
        choices.push({ label: 'B', text: 'Seçenek B', isCorrect: false });
        choices.push({ label: 'C', text: 'Seçenek C', isCorrect: false });
        choices.push({ label: 'D', text: 'Seçenek D', isCorrect: false });
    }
    if (!choices.some(c => c.isCorrect)) choices[0] = { label: 'A', text: String(correctAnswer), isCorrect: true };
    return choices;
}

function fillTemplate(text, vars) {
    let result = text;
    for (const [key, value] of Object.entries(vars)) {
        result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
    }
    return result;
}

function generateQuestionId(templateId, vars) {
    const varsStr = Object.entries(vars).sort((a, b) => a[0].localeCompare(b[0]))
        .map(([k, v]) => `${k}=${v}`).join('&');
    return `${templateId}_${simpleHash(varsStr)}`;
}

function getSolvedIds(topicId, level, mode) {
    if (mode === 'questionBank') {
        const progress = getQBProgress(topicId);
        return progress.solved || [];
    }
    const hist = getHist(topicId);
    if (!hist.levels || !hist.levels[level]) return [];
    return hist.levels[level].solvedIds || [];
}

const recentTemplatesCache = {};

function getRecentTemplateIds(topicId, count) {
    if (!recentTemplatesCache[topicId]) return [];
    return recentTemplatesCache[topicId].slice(-count);
}

function addRecentTemplateId(topicId, templateId) {
    if (!recentTemplatesCache[topicId]) recentTemplatesCache[topicId] = [];
    recentTemplatesCache[topicId].push(templateId);
    if (recentTemplatesCache[topicId].length > 20) recentTemplatesCache[topicId].shift();
}

function filterTemplatesByLevel(templates, level) {
    const levelMap = { 'KOLAY': ['kolay'], 'ORTA': ['kolay', 'orta'], 'ZOR': ['kolay', 'orta', 'zor'] };
    const allowed = levelMap[level] || ['kolay', 'orta', 'zor'];
    return templates.filter(t => allowed.includes(t.z));
}

function checkRule(kural, vars) {
    if (!kural) return true;
    try {
        const rules = kural.split(',').map(r => r.trim());
        for (const rule of rules) {
            let expr = rule;
            for (const [key, value] of Object.entries(vars)) {
                expr = expr.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
            }
            if (/[<>=!]+/.test(expr)) {
                const result = safeEval(expr.replace(/==/g, '===').replace(/!=/g, '!=='));
                if (!result) return false;
            }
        }
        return true;
    } catch (e) { return true; }
}

function generateSolution(template, vars, answer) {
    if (template.cozum) {
        let cozum = template.cozum;
        for (const [key, value] of Object.entries(vars)) {
            cozum = cozum.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
        }
        return cozum;
    }
    return `Cevap: ${answer}`;
}

function formatAnswer(answer, inputType) {
    if (inputType === 'choice') return String(answer);
    return String(answer);
}

function generateFallbackQuestion(topicId, level) {
    const templates = QUESTION_TEMPLATES[topicId];
    if (!templates || templates.length === 0) return null;
    const simple = templates.filter(t => t.z === 'kolaj')[0] || templates[0];
    const vars = {};
    for (const [key, range] of Object.entries(simple.v)) {
        if (Array.isArray(range)) vars[key] = randomInt(resolveValue(range[0], {}), resolveValue(range[1], {}));
        else vars[key] = range;
    }
    const id = generateQuestionId(simple.id, vars);
    const cevap = calculateAnswer(simple.c, vars);
    const inputType = determineInputType(simple, cevap);
    return {
        id, templateId: simple.id,
        soru: fillTemplate(simple.s, vars),
        cevap: formatAnswer(cevap, inputType),
        cevapRaw: cevap, zorluk: simple.z || 'kolay', inputType,
        choices: inputType === 'choice' ? autoGenerateChoices(cevap, simple, vars) : null,
        correctChoiceIndex: 0,
        cozum: generateSolution(simple, vars, cevap), vars, topicId
    };
}

// ============================================
// SORU GÖSTERİMİ
// ============================================

function renderNextQuestion() {
    if (typeof QUESTION_TEMPLATES === 'undefined') {
        document.getElementById('learnContent').innerHTML =
            '<div class="err">Soru şablonları yüklenemedi.</div>';
        return;
    }

    const t = getTopicById(ST.topic);
    if (!t) return;
    const level = ST.currentLevel;
    const levelInfo = LEVELS[level];

    setLearnHeader();
    const el = document.getElementById('learnContent');
    if (!el) return;
    el.innerHTML = `<div class="card">${dots()} Soru üretiliyor...</div>`;

    const qData = generateQuestion(ST.topic, level, { mode: 'study' });

    if (!qData) {
        el.innerHTML = `
            <div class="card accent-top" style="text-align: center;">
                <h3>📭 Soru Üretilemedi</h3>
                <p style="color: var(--text-muted); margin: 10px 0;">${level} seviyesinde yeni soru üretilemedi.</p>
                <button class="btn btn-primary btn-full" onclick="resetLevelQuestions()">🔄 Soruları Sıfırla ve Tekrar Başla</button>
            </div>`;
        return;
    }

    ST.cq = { ...qData, level: level };
    renderQuestionUI(qData, level, levelInfo);
}

function renderQuestionUI(q, level, levelInfo) {
    const hist = getHist(ST.topic);
    const levelHist = hist.levels?.[level] || { correct: 0, total: 0 };
    const zorlukClass = q.zorluk === 'kolay' ? 'badge-grn' : q.zorluk === 'zor' ? 'badge-red' : 'badge-warn';
    const questionLimit = ST.testMode ? 3 : levelInfo.questionCount;

    const el = document.getElementById('learnContent');
    if (!el) return;

    let answerHTML = '';
    if (q.inputType === 'choice' && q.choices) {
        answerHTML = `
            <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 16px;">
                ${q.choices.map((ch, i) => `
                    <button class="btn btn-secondary btn-full choice-btn" onclick="submitChoiceAnswer(${i})"
                        style="text-align: left; justify-content: flex-start; padding: 14px 16px;">
                        <span style="font-weight: 700; margin-right: 10px; color: var(--accent);">${ch.label})</span> ${ch.text}
                    </button>
                `).join('')}
            </div>`;
    } else {
        answerHTML = `
            <div class="ans-row">
                <input id="ansInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." autocomplete="off"
                    onkeydown="if(event.key==='Enter') checkAnswer()">
                <button class="btn btn-primary" onclick="checkAnswer()">✓</button>
            </div>
            <div class="ans-hint">Sayı, kesir (3/4) veya birim ile yaz → Enter veya ✓</div>`;
    }

    el.innerHTML = `
        <div class="prog-bar-wrap">
            <div class="prog-bar-label"><span>📊 ${levelInfo.name} Seviye</span><span>${levelHist.correct || 0}/${levelHist.total || 0} doğru</span></div>
            <div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width: ${((levelHist.total || 0) / questionLimit) * 100}%"></div></div>
        </div>
        <div class="card accent-top" id="qCard">
            <div class="q-header">
                <span class="q-counter">Soru ${(levelHist.total || 0) + 1}/${questionLimit}</span>
                <div class="q-tags"><span class="badge ${zorlukClass}">${q.zorluk}</span><span class="badge badge-acc">${levelInfo.name}</span></div>
            </div>
            <div class="q-text">${q.soru.replace(/\n/g, '<br>')}</div>
            ${answerHTML}
        </div>
        <div class="ask-section">
            <button class="ask-toggle" onclick="toggleAsk()">🤖 Anlamadım — Öğretmene sor</button>
            <div class="ask-form" id="askForm">
                <input id="askInp" class="ask-inp" type="text" placeholder="Ne anlamadın?" onkeydown="if(event.key==='Enter') sendAsk()">
                <button class="btn btn-primary" onclick="sendAsk()">Sor</button>
            </div>
            <div class="ask-result" id="askResult"></div>
        </div>`;

    if (q.inputType !== 'choice') {
        setTimeout(() => { const inp = document.getElementById('ansInp'); if (inp) inp.focus(); }, 100);
    }
}

// ============================================
// CEVAP KONTROL (KONU TAMAMLAMA DÜZELTİLDİ)
// ============================================

window.submitChoiceAnswer = function(choiceIndex) {
    const q = ST.cq;
    if (!q) return;

    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correctChoiceIndex) { btn.style.borderColor = 'var(--success)'; btn.style.background = 'var(--success-bg)'; }
        if (i === choiceIndex && i !== q.correctChoiceIndex) { btn.style.borderColor = 'var(--danger)'; btn.style.background = 'var(--danger-bg)'; }
    });

    processAnswer(choiceIndex === q.correctChoiceIndex, q);
};

window.checkAnswer = function() {
    const inp = document.getElementById('ansInp');
    if (!inp || !inp.value.trim()) return;
    const userAns = inp.value.trim();
    inp.disabled = true;
    const q = ST.cq;
    if (!q) return;
    processAnswer(checkEqual(userAns, q.cevap), q);
};

function processAnswer(isCorrect, q) {
    const level = q.level || ST.currentLevel;
    const hist = getHist(ST.topic);
    if (!hist.levels) hist.levels = {};
    if (!hist.levels[level]) hist.levels[level] = { correct: 0, total: 0, solvedIds: [] };

    const levelData = hist.levels[level];
    levelData.total = (levelData.total || 0) + 1;
    if (isCorrect) levelData.correct = (levelData.correct || 0) + 1;
    if (!levelData.solvedIds) levelData.solvedIds = [];
    levelData.solvedIds.push(q.id);

    ST.totalQ++;
    if (isCorrect) {
        ST.totalCorrect++;
        ST.streak++;
        if (ST.streak > ST.maxStreak) ST.maxStreak = ST.streak;
        if (CONSTANTS.MAX_STREAK_CELEBRATE.includes(ST.streak)) celebrate(`🔥 ${ST.streak} Art Arda Doğru!`);
    } else {
        ST.streak = 0;
    }

    const questionLimit = ST.testMode ? 3 : LEVELS[level].questionCount;
    const minCorrect = ST.testMode ? 2 : LEVELS[level].minCorrect;

    let levelCompleted = false;
    let levelFailed = false;
    let nextLevel = null;
    let topicCompleted = false;

    if (levelData.total >= questionLimit) {
        if (levelData.correct >= minCorrect) {
            levelCompleted = true;
            levelData.completed = true;
            nextLevel = getNextLevel(level);
            if (nextLevel) {
                ST.currentLevel = nextLevel;
                hist.currentLevel = nextLevel;
            } else {
                // ✅ TÜM SEVİYELER BİTTİ - KONU TAMAMLANDI
                topicCompleted = true;
                if (!ST.completedTopics.includes(ST.topic)) {
                    ST.completedTopics.push(ST.topic);
                }
                celebrate('🏆 Konu Tamamlandı!');
            }
        } else {
            levelFailed = true;
            levelData.correct = 0;
            levelData.total = 0;
            levelData.solvedIds = [];
            levelData.completed = false;
        }
    }

    saveState();
    ST.phase = 'feedback';

    // ✅ SONRAKİ KONUYA GEÇİŞ MESAJI
    let nextMessage = '';
    if (levelCompleted) {
        if (nextLevel) {
            nextMessage = `
                <div style="margin-top: 12px; padding: 10px; background: var(--success-bg); border-radius: var(--radius-sm); text-align: center;">
                    🎉 <strong>${LEVELS[level].name} Seviyesini Geçtin!</strong><br>→ ${LEVELS[nextLevel].name} Seviyesine geçiyorsun.
                </div>`;
        } else if (topicCompleted) {
            const nextTopic = getNextTopic(ST.topic);
            if (nextTopic) {
                nextMessage = `
                    <div style="margin-top: 12px; padding: 12px; background: var(--success-bg); border-radius: var(--radius-sm); text-align: center;">
                        🏆 <strong>Konuyu Tamamladın!</strong><br>Sıradaki: ${nextTopic.e} ${nextTopic.n}
                        <br><button class="btn btn-primary btn-full" onclick="openTopic(${nextTopic.id})" style="margin-top: 8px;">
                            Sonraki Konuya Geç →
                        </button>
                    </div>`;
            } else {
                nextMessage = `
                    <div style="margin-top: 12px; padding: 10px; background: var(--success-bg); border-radius: var(--radius-sm); text-align: center;">
                        🏆 <strong>Tüm Konuları Tamamladın!</strong><br>Harikasın! Deneme sınavlarına geçebilirsin.
                        <br><button class="btn btn-accent btn-full" onclick="goExamList()" style="margin-top: 8px;">📋 Denemelere Git →</button>
                    </div>`;
            }
        }
    } else if (levelFailed) {
        nextMessage = `
            <div style="margin-top: 12px; padding: 10px; background: var(--danger-bg); border-radius: var(--radius-sm); text-align: center;">
                ⚠️ <strong>Başarısız!</strong> Seviye sıfırlandı, tekrar başla.
            </div>`;
    }

    const el = document.getElementById('learnContent');
    if (!el) return;

    el.innerHTML += `
        <div class="fb ${isCorrect ? 'fb-ok' : 'fb-fail'}">
            <div class="fb-head">
                <span class="fb-icon">${isCorrect ? '🎉' : '❌'}</span>
                <span class="fb-title">${isCorrect ? 'Doğru!' : 'Yanlış'}</span>
            </div>
            <div class="fb-body">
                ${isCorrect ? `Cevap: <strong>${q.cevap}</strong>` : `Doğru cevap: <strong>${q.cevap}</strong>${q.cozum ? `<br><br>📖 ${q.cozum}` : ''}`}
            </div>
            ${nextMessage}
            ${!topicCompleted ? '<div class="btn-row" style="margin-top: 12px;"><button class="btn btn-ghost btn-full" onclick="nextQuestion()">Sonraki Soru →</button></div>' : ''}
        </div>`;

    const fbEl = el.querySelector('.fb:last-child');
    if (fbEl) fbEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

window.nextQuestion = function() {
    ST.phase = 'question';
    ST.cq = null;
    window.scrollTo(0, 0);
    renderNextQuestion();
};

window.resetLevelQuestions = function() {
    const hist = getHist(ST.topic);
    const level = ST.currentLevel;
    if (hist.levels && hist.levels[level]) {
        hist.levels[level].solvedIds = [];
        hist.levels[level].correct = 0;
        hist.levels[level].total = 0;
        hist.levels[level].completed = false;
    }
    saveState();
    ST.phase = 'question';
    ST.cq = null;
    renderNextQuestion();
};

// ============================================
// BÖLÜM 7: GROQ API (ÖZET & ÖĞRETMENE SOR)
// ============================================

async function fetchTopicSummary(topic) {
    checkApiDate();
    if (ST.apiCallCount >= CONSTANTS.API_DAILY_LIMIT) throw new Error('Günlük limit doldu');
    ST.apiCallCount++;
    saveState();

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + ST.apiKey },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
                { role: 'system', content: `KPSS matematik öğretmenisin. "${topic.n}" konusunu en fazla 150 kelime, Türkçe, net özetle. Formülleri madde madde yaz.` },
                { role: 'user', content: `${topic.n} konusunu özetler misin? KPSS: ${topic.kpss}, DGS: ${topic.dgs || 'YOK'}` }
            ],
            temperature: 0.5, max_tokens: 500
        })
    });

    if (!response.ok) throw new Error('API yanıt vermedi');
    const data = await response.json();
    return data?.choices?.[0]?.message?.content?.trim() || null;
}

window.toggleAsk = function() {
    const el = document.getElementById('askForm');
    if (el) el.classList.toggle('open');
    const inp = document.getElementById('askInp');
    if (inp) inp.focus();
};

window.sendAsk = async function() {
    const inp = document.getElementById('askInp');
    const question = inp?.value?.trim();
    if (!question) return;
    inp.value = ''; inp.disabled = true;

    const resultEl = document.getElementById('askResult');
    if (resultEl) { resultEl.classList.add('open'); resultEl.innerHTML = `${dots()} Öğretmen düşünüyor...`; }

    if (!ST.apiKey) {
        if (resultEl) resultEl.innerHTML = '⚠️ Lütfen API anahtarınızı girin.';
        inp.disabled = false; return;
    }
    checkApiDate();
    if (ST.apiCallCount >= CONSTANTS.API_DAILY_LIMIT) {
        if (resultEl) resultEl.innerHTML = '⚠️ Günlük limitiniz doldu.';
        inp.disabled = false; return;
    }

    ST.apiCallCount++; saveState();

    try {
        const t = getTopicById(ST.topic);
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + ST.apiKey },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: 'KPSS matematik öğretmenisin. Türkçe, net, kısa cevap ver. Max 120 kelime.' },
                    { role: 'user', content: `Konu: ${t?.n || 'Matematik'}\nSoru: ${ST.cq?.soru || ''}\nÖğrenci: ${question}` }
                ],
                temperature: 0.7, max_tokens: 600
            })
        });
        const data = await response.json();
        const answer = data?.choices?.[0]?.message?.content?.trim() || 'Cevap alınamadı.';
        if (resultEl) resultEl.innerHTML = answer.replace(/\n/g, '<br>');
    } catch (e) {
        if (resultEl) resultEl.innerHTML = '❌ Bir hata oluştu.';
    }
    inp.disabled = false;
};

// ============================================
// BÖLÜM 8: SORU BANKASI
// ============================================

function renderQuestionBankList() {
    const el = document.getElementById('qbTopicsList');
    if (!el) return;
    if (typeof TOPICS === 'undefined') { el.innerHTML = '<div class="err">Konular yüklenemedi.</div>'; return; }

    let html = '', lastPhase = '';
    TOPICS.forEach(t => {
        if (t.p !== lastPhase) { lastPhase = t.p; html += `<div class="phase-sep">${t.p}</div>`; }
        const progress = getQBProgress(t.id);
        const solved = progress.solved.length;
        const total = CONSTANTS.QUESTION_BANK_SIZE;
        const pct = Math.round((solved / total) * 100);
        const isComplete = solved >= total;

        html += `
            <div class="topic-row ${isComplete ? 't-done' : ''}" onclick="startQuestionBank(${t.id})">
                <span class="t-icon">${t.e}</span>
                <div class="t-info">
                    <div class="t-name">${t.n}</div>
                    <div class="t-meta">${isComplete ? '✅ Tamamlandı' : `${solved}/${total} çözüldü`}</div>
                    <div class="prog-bar-wrap"><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width: ${pct}%"></div></div></div>
                </div>
                <span style="font-size: 18px;">${isComplete ? '✅' : '📝'}</span>
            </div>`;
    });
    el.innerHTML = html;
}

window.startQuestionBank = function(topicId) {
    if (typeof QUESTION_TEMPLATES === 'undefined' || !QUESTION_TEMPLATES[topicId]) {
        alert('Bu konu için soru şablonu henüz eklenmedi.'); return;
    }
    const progress = getQBProgress(topicId);
    if (progress.solved.length >= CONSTANTS.QUESTION_BANK_SIZE) {
        alert('🎉 Bu konunun soru bankasındaki tüm soruları çözdün!'); return;
    }
    ST.topic = topicId;
    ST.qbIndex = 0;
    ST.qbTotal = CONSTANTS.QUESTION_BANK_SIZE;
    showView('vQBSolve');
    renderQBSolveHeader();
    renderNextQBQuestion();
};

function renderQBSolveHeader() {
    const t = getTopicById(ST.topic);
    const progress = getQBProgress(ST.topic);
    const titleEl = document.getElementById('qbSolveTitle');
    const progressEl = document.getElementById('qbSolveProgress');
    if (titleEl) titleEl.textContent = `📝 ${t?.n || 'Soru Bankası'}`;
    if (progressEl) progressEl.textContent = `${progress.solved.length}/${CONSTANTS.QUESTION_BANK_SIZE}`;
}

function renderNextQBQuestion() {
    const topicId = ST.topic;
    const t = getTopicById(topicId);
    if (!t) return;
    const progress = getQBProgress(topicId);
    const limit = ST.testMode ? 10 : CONSTANTS.QUESTION_BANK_SIZE;
    const el = document.getElementById('qbSolveContent');
    if (!el) return;

    if (progress.solved.length >= limit) {
        el.innerHTML = `
            <div class="card accent-top" style="text-align: center;">
                <h3>🎉 Soru Bankası Tamamlandı!</h3>
                <p style="font-size: 24px; font-weight: 700; color: var(--accent);">${progress.solved.length}/${limit}</p>
                <button class="btn btn-primary btn-full" onclick="goQuestionBank()">📝 Konu Listesine Dön</button>
            </div>`;
        return;
    }

    el.innerHTML = `<div class="card">${dots()} Soru üretiliyor...</div>`;

    const templates = QUESTION_TEMPLATES[topicId];
    if (!templates || templates.length === 0) {
        el.innerHTML = '<div class="err">Bu konu için henüz şablon eklenmedi.</div>'; return;
    }

    let q = null;
    for (let attempt = 0; attempt < 10; attempt++) {
        const template = templates[Math.floor(Math.random() * templates.length)];
        const vars = generateVariables(template.v, template.kural);
        if (!vars) continue;
        const id = generateQuestionId(template.id, vars);
        if (progress.solved.includes(id)) continue;
        const cevap = calculateAnswer(template.c, vars);
        if (cevap === null) continue;
        const inputType = determineInputType(template, cevap);
        let choices = null, correctChoiceIndex = 0;
        if (inputType === 'choice') {
            choices = template.choices ? generateChoicesFromTemplate(template.choices, vars, cevap) : autoGenerateChoices(cevap, template, vars);
            correctChoiceIndex = choices.findIndex(c => c.isCorrect);
            if (correctChoiceIndex < 0) correctChoiceIndex = 0;
        }
        q = {
            id, templateId: template.id,
            soru: fillTemplate(template.s, vars),
            cevap: formatAnswer(cevap, inputType), cevapRaw: cevap,
            zorluk: template.z || 'orta', inputType, choices, correctChoiceIndex,
            cozum: generateSolution(template, vars, cevap), topicId
        };
        break;
    }

    if (!q) { el.innerHTML = '<div class="err">Yeni soru üretilemedi.</div>'; return; }
    ST.cq = { ...q, mode: 'questionBank' };

    const zorlukClass = q.zorluk === 'kolay' ? 'badge-grn' : q.zorluk === 'zor' ? 'badge-red' : 'badge-warn';
    let answerHTML = '';
    if (q.inputType === 'choice' && q.choices) {
        answerHTML = `
            <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 16px;">
                ${q.choices.map((ch, i) => `
                    <button class="btn btn-secondary btn-full qb-choice-btn" onclick="submitQBChoiceAnswer(${i})"
                        style="text-align: left; justify-content: flex-start; padding: 14px 16px;">
                        <span style="font-weight: 700; margin-right: 10px; color: var(--accent);">${ch.label})</span> ${ch.text}
                    </button>
                `).join('')}
            </div>`;
    } else {
        answerHTML = `
            <div class="ans-row">
                <input id="qbAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." autocomplete="off"
                    onkeydown="if(event.key==='Enter') checkQBAnswer()">
                <button class="btn btn-primary" onclick="checkQBAnswer()">✓</button>
            </div>
            <button class="btn btn-ghost btn-full" style="margin-top: 8px;" onclick="skipQBQuestion()">Boş Bırak →</button>`;
    }

    el.innerHTML = `
        <div class="prog-bar-wrap">
            <div class="prog-bar-label"><span>📝 ${t.n} Soru Bankası</span><span>${progress.solved.length}/${limit}</span></div>
            <div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width: ${(progress.solved.length / limit) * 100}%"></div></div>
        </div>
        <div class="card accent-top">
            <div class="q-header">
                <span class="q-counter">Soru ${progress.solved.length + 1}</span>
                <div class="q-tags"><span class="badge ${zorlukClass}">${q.zorluk}</span><span class="badge badge-acc">${t.n}</span></div>
            </div>
            <div class="q-text">${q.soru.replace(/\n/g, '<br>')}</div>
            ${answerHTML}
        </div>`;

    if (q.inputType !== 'choice') {
        setTimeout(() => { const inp = document.getElementById('qbAnsInp'); if (inp) inp.focus(); }, 100);
    }
}

window.submitQBChoiceAnswer = function(choiceIndex) {
    const q = ST.cq;
    if (!q) return;
    const buttons = document.querySelectorAll('.qb-choice-btn');
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correctChoiceIndex) { btn.style.borderColor = 'var(--success)'; btn.style.background = 'var(--success-bg)'; }
        if (i === choiceIndex && i !== q.correctChoiceIndex) { btn.style.borderColor = 'var(--danger)'; btn.style.background = 'var(--danger-bg)'; }
    });
    processQBAnswer(choiceIndex === q.correctChoiceIndex, q);
};

window.checkQBAnswer = function() {
    const inp = document.getElementById('qbAnsInp');
    if (!inp || !inp.value.trim()) return;
    const userAns = inp.value.trim();
    inp.disabled = true;
    const q = ST.cq;
    if (!q) return;
    processQBAnswer(checkEqual(userAns, q.cevap), q);
};

function processQBAnswer(isCorrect, q) {
    const progress = getQBProgress(q.topicId || ST.topic);
    if (!progress.solved.includes(q.id)) progress.solved.push(q.id);
    ST.totalQ++;
    if (isCorrect) { ST.totalCorrect++; ST.streak++; if (ST.streak > ST.maxStreak) ST.maxStreak = ST.streak; }
    else { ST.streak = 0; }
    saveState();
    renderQBSolveHeader();

    const el = document.getElementById('qbSolveContent');
    if (!el) return;
    el.innerHTML += `
        <div class="fb ${isCorrect ? 'fb-ok' : 'fb-fail'}">
            <div class="fb-head"><span class="fb-icon">${isCorrect ? '🎉' : '❌'}</span><span class="fb-title">${isCorrect ? 'Doğru!' : 'Yanlış'}</span></div>
            <div class="fb-body">${isCorrect ? `Cevap: <strong>${q.cevap}</strong>` : `Doğru cevap: <strong>${q.cevap}</strong>${q.cozum ? `<br><br>📖 ${q.cozum}` : ''}`}</div>
            <div class="btn-row" style="margin-top: 12px;"><button class="btn btn-ghost btn-full" onclick="nextQBQuestion()">Sonraki Soru →</button></div>
        </div>`;
    const fbEl = el.querySelector('.fb:last-child');
    if (fbEl) fbEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

window.skipQBQuestion = function() {
    const q = ST.cq;
    if (!q) return;
    const progress = getQBProgress(q.topicId || ST.topic);
    if (!progress.solved.includes(q.id)) progress.solved.push(q.id);
    saveState();
    renderQBSolveHeader();
    nextQBQuestion();
};

window.nextQBQuestion = function() {
    ST.cq = null;
    window.scrollTo(0, 0);
    renderNextQBQuestion();
};

// ============================================
// BÖLÜM 9: DENEME SINAVI
// ============================================

function renderExamList() {
    const el = document.getElementById('examListContent');
    if (!el) return;
    if (Object.keys(ST.examSets).length === 0) initExamSets();

    let html = '';
    for (let i = 1; i <= CONSTANTS.EXAM_SETS; i++) {
        const setId = 'set_' + i;
        const setData = ST.examSets[setId] || { completed: false, net: null, date: null };
        html += `
            <div class="exam-set-card" onclick="startExamSet('${setId}')">
                <div class="exam-set-info"><h3>📋 Deneme ${i}</h3><span>20 soru · 20 dakika</span></div>
                <div class="exam-set-score">${setData.completed ? `<div class="net">${setData.net}</div><div class="date">${setData.date || ''}</div>` : '<span class="badge">Başla</span>'}</div>
            </div>`;
    }

    const allCompleted = Object.values(ST.examSets).every(s => s.completed);
    if (allCompleted) {
        html += `
            <div style="margin-top: 16px; text-align: center;">
                <p style="color: var(--success); margin-bottom: 10px;">🎉 Tüm denemeleri tamamladın!</p>
                <button class="btn btn-primary btn-full" onclick="resetAllExams()">🔄 Tüm Denemeleri Sıfırla (Yeni Sorular)</button>
            </div>`;
    }
    el.innerHTML = html;
}

function initExamSets() {
    for (let i = 1; i <= CONSTANTS.EXAM_SETS; i++) {
        const setId = 'set_' + i;
        if (!ST.examSets[setId]) ST.examSets[setId] = {
            seed: EXAM_SEEDS[i - 1] + (ST.examGeneration - 1) * 100,
            completed: false, answers: [], net: null, date: null
        };
    }
    saveState();
}

window.startExamSet = function(setId) {
    const setData = ST.examSets[setId];
    if (!setData) return;
    if (setData.completed && !confirm('Bu denemeyi daha önce bitirdiniz. Tekrar başlatmak istiyor musunuz?')) return;

    const questions = generateExamQuestions(setData.seed);
    ST.currentExam = { setId, questions, currentIndex: 0, answers: [], timeLeft: CONSTANTS.EXAM_DURATION * 60, timer: null };
    showView('vExam');
    document.getElementById('examTitle').textContent = `Deneme ${setId.replace('set_', '')}`;
    updateExamTimer();
    startExamTimer();
    loadExamQuestion(0);
};

function generateExamQuestions(seed) {
    const allQuestions = [];
    TOPICS.forEach(t => {
        const templates = QUESTION_TEMPLATES[t.id];
        if (!templates) return;
        const shuffled = shuffleWithSeed(templates, seed + t.id);
        for (const template of shuffled.slice(0, 3)) {
            const vars = generateVariables(template.v, template.kural);
            if (!vars) continue;
            const id = generateQuestionId(template.id, vars);
            const cevap = calculateAnswer(template.c, vars);
            if (cevap === null) continue;
            const inputType = determineInputType(template, cevap);
            allQuestions.push({
                id, templateId: template.id,
                s: fillTemplate(template.s, vars),
                c: formatAnswer(cevap, inputType), cRaw: cevap,
                z: template.z || 'orta', inputType,
                choices: inputType === 'choice' ? (template.choices ? generateChoicesFromTemplate(template.choices, vars, cevap) : autoGenerateChoices(cevap, template, vars)) : null,
                correctChoiceIndex: 0,
                cozum: generateSolution(template, vars, cevap),
                topicId: t.id, topicName: t.n
            });
        }
    });
    const shuffled = shuffleWithSeed(allQuestions, seed + 999);
    const limit = ST.testMode ? 5 : CONSTANTS.EXAM_QUESTIONS;
    return shuffled.slice(0, limit);
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
    const m = Math.floor(ST.currentExam.timeLeft / 60);
    const s = ST.currentExam.timeLeft % 60;
    el.textContent = `${m}:${s.toString().padStart(2, '0')}`;
    if (ST.currentExam.timeLeft <= 60) el.style.color = 'var(--danger)';
}

function loadExamQuestion(index) {
    if (index >= ST.currentExam.questions.length) { finishExam(); return; }
    ST.currentExam.currentIndex = index;
    const q = ST.currentExam.questions[index];
    const el = document.getElementById('examContent');
    if (!el) return;

    const zorlukClass = q.z === 'kolay' ? 'badge-grn' : q.z === 'zor' ? 'badge-red' : 'badge-warn';
    let answerHTML = '';
    if (q.inputType === 'choice' && q.choices) {
        answerHTML = `
            <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 16px;">
                ${q.choices.map((ch, i) => `
                    <button class="btn btn-secondary btn-full exam-choice-btn" onclick="submitExamChoiceAnswer(${i})"
                        style="text-align: left; justify-content: flex-start; padding: 14px 16px;">
                        <span style="font-weight: 700; margin-right: 10px; color: var(--accent);">${ch.label})</span> ${ch.text}
                    </button>
                `).join('')}
            </div>`;
    } else {
        answerHTML = `
            <div class="ans-row">
                <input id="examAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." autocomplete="off"
                    onkeydown="if(event.key==='Enter') submitExamAnswer()">
                <button class="btn btn-primary" onclick="submitExamAnswer()">✓</button>
            </div>
            <button class="btn btn-ghost btn-full" style="margin-top: 8px;" onclick="skipExamAnswer()">Boş Bırak →</button>`;
    }

    el.innerHTML = `
        <div class="card accent-top">
            <div class="q-header">
                <span class="q-counter">Soru ${index + 1}/${ST.currentExam.questions.length}</span>
                <div class="q-tags"><span class="badge ${zorlukClass}">${q.z || 'orta'}</span><span class="badge badge-acc">${q.topicName || ''}</span></div>
            </div>
            <div class="q-text">${q.s.replace(/\n/g, '<br>')}</div>
            ${answerHTML}
        </div>`;

    if (q.inputType !== 'choice') {
        setTimeout(() => { const inp = document.getElementById('examAnsInp'); if (inp) inp.focus(); }, 100);
    }
}

window.submitExamChoiceAnswer = function(choiceIndex) {
    const q = ST.currentExam.questions[ST.currentExam.currentIndex];
    const isCorrect = choiceIndex === (q.correctChoiceIndex || 0);
    ST.currentExam.answers.push({
        questionId: q.id, topicName: q.topicName,
        correctAnswer: q.c, userAnswer: q.choices?.[choiceIndex]?.text || '',
        isCorrect, skipped: false
    });
    loadExamQuestion(ST.currentExam.currentIndex + 1);
};

window.submitExamAnswer = function() {
    const inp = document.getElementById('examAnsInp');
    const userAns = inp?.value?.trim() || '';
    const q = ST.currentExam.questions[ST.currentExam.currentIndex];
    ST.currentExam.answers.push({
        questionId: q.id, topicName: q.topicName,
        correctAnswer: q.c, userAnswer: userAns,
        isCorrect: checkEqual(userAns, q.c), skipped: false
    });
    loadExamQuestion(ST.currentExam.currentIndex + 1);
};

window.skipExamAnswer = function() {
    const q = ST.currentExam.questions[ST.currentExam.currentIndex];
    ST.currentExam.answers.push({
        questionId: q.id, topicName: q.topicName,
        correctAnswer: q.c, userAnswer: '',
        isCorrect: false, skipped: true
    });
    loadExamQuestion(ST.currentExam.currentIndex + 1);
};

function finishExam() {
    if (ST.currentExam.timer) clearInterval(ST.currentExam.timer);
    const exam = ST.currentExam;
    const answers = exam.answers;
    const dogru = answers.filter(a => a.isCorrect).length;
    const yanlis = answers.filter(a => !a.isCorrect && !a.skipped).length;
    const bos = answers.filter(a => a.skipped).length;
    const net = (dogru - yanlis * 0.25).toFixed(2);

    const setData = ST.examSets[exam.setId];
    if (setData && !setData.completed) {
        setData.completed = true; setData.net = net; setData.date = todayStr();
    }
    ST.examHistory.push({ type: `Deneme ${exam.setId.replace('set_', '')}`, net, date: todayStr() });

    const allCompleted = Object.values(ST.examSets).every(s => s.completed);
    if (allCompleted) {
        ST.examGeneration++;
        Object.keys(ST.examSets).forEach((setId, i) => {
            ST.examSets[setId] = {
                seed: EXAM_SEEDS[i] + (ST.examGeneration - 1) * 100,
                completed: false, answers: [], net: null, date: null
            };
        });
    }

    saveState();
    ST.currentExam = null;

    const wrongList = answers.filter(a => !a.isCorrect && !a.skipped).slice(0, 3);
    const el = document.getElementById('examContent');
    if (!el) return;

    el.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 6px;">Deneme ${exam.setId.replace('set_', '')} Sonucu</div>
            <div class="net-num">${net}</div><div class="net-lbl">Net</div>
            <div class="stat-grid">
                <div class="stat-cell"><div class="stat-num" style="color: var(--success);">${dogru}</div><div class="stat-lbl">Doğru</div></div>
                <div class="stat-cell"><div class="stat-num" style="color: var(--danger);">${yanlis}</div><div class="stat-lbl">Yanlış</div></div>
                <div class="stat-cell"><div class="stat-num" style="color: var(--text-muted);">${bos}</div><div class="stat-lbl">Boş</div></div>
                <div class="stat-cell"><div class="stat-num" style="color: var(--warning);">${exam.questions.length}</div><div class="stat-lbl">Toplam</div></div>
            </div>
            ${wrongList.length > 0 ? `
                <div class="card" style="text-align: left; margin-top: 14px;">
                    <h3>Yanlış Yaptıkların</h3>
                    ${wrongList.map(a => `<div class="weak-row"><span class="weak-name">${a.topicName}</span><span class="badge badge-red">❌ ${a.userAnswer || 'boş'} → ${a.correctAnswer}</span></div>`).join('')}
                </div>` : ''}
            <div class="btn-row" style="margin-top: 16px;">
                <button class="btn btn-primary btn-full" onclick="startExamSet('${exam.setId}')">🔄 Tekrar Dene</button>
                <button class="btn btn-ghost btn-full" onclick="goExamList()">Deneme Listesine Dön</button>
            </div>
        </div>`;
}

window.cancelExam = function() {
    if (ST.currentExam?.timer) clearInterval(ST.currentExam.timer);
    if (confirm('Sınavı iptal etmek istediğinize emin misiniz?')) { ST.currentExam = null; goExamList(); }
};

window.resetAllExams = function() {
    if (!confirm('Tüm deneme setleri sıfırlanacak. Yeni sorularla tekrar başlayacaksınız.')) return;
    ST.examGeneration++;
    Object.keys(ST.examSets).forEach((setId, i) => {
        ST.examSets[setId] = {
            seed: EXAM_SEEDS[i] + (ST.examGeneration - 1) * 100,
            completed: false, answers: [], net: null, date: null
        };
    });
    saveState();
    renderExamList();
    alert('✅ Denemeler sıfırlandı!');
};

// ============================================
// BÖLÜM 10: İSTATİSTİKLER
// ============================================

function renderStats() {
    const el = document.getElementById('statsContent');
    if (!el) return;

    const done = ST.completedTopics.length;
    const accuracy = ST.totalQ > 0 ? Math.round((ST.totalCorrect / ST.totalQ) * 100) : 0;
    const estNet = Math.min(30, Math.round(done * 0.55 + accuracy / 14));

    const weakTopics = [];
    TOPICS.forEach(t => {
        const hist = getHist(t.id);
        let tc = 0, tq = 0;
        if (hist.levels) Object.values(hist.levels).forEach(lv => { if (lv) { tc += lv.correct || 0; tq += lv.total || 0; } });
        if (tq >= 5) { const pct = Math.round((tc / tq) * 100); if (pct < 70) weakTopics.push({ name: t.n, pct, total: tq, id: t.id }); }
    });
    weakTopics.sort((a, b) => a.pct - b.pct);

    const recentExams = ST.examHistory.slice(-5).reverse();
    let totalQBSolved = 0, totalQBAvailable = 0;
    Object.keys(ST.questionBankProgress).forEach(tid => {
        totalQBSolved += ST.questionBankProgress[tid].solved.length;
        totalQBAvailable += CONSTANTS.QUESTION_BANK_SIZE;
    });

    el.innerHTML = `
        <div class="net-box">
            <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 6px;">Tahmini KPSS Netin</div>
            <div class="net-num">${estNet}</div>
            <div class="net-lbl">${done === CONSTANTS.TOTAL_TOPICS ? 'Tüm konular bitti! 🏆' : 'Konuları tamamladıkça artacak'}</div>
        </div>
        <div class="stat-grid">
            <div class="stat-cell"><div class="stat-num" style="color: var(--accent);">${done}</div><div class="stat-lbl">Konu Bitti</div></div>
            <div class="stat-cell"><div class="stat-num" style="color: var(--danger);">${ST.totalQ}</div><div class="stat-lbl">Toplam Soru</div></div>
            <div class="stat-cell"><div class="stat-num" style="color: var(--success);">%${accuracy}</div><div class="stat-lbl">Doğruluk</div></div>
            <div class="stat-cell"><div class="stat-num" style="color: var(--warning);">${ST.maxStreak}</div><div class="stat-lbl">En İyi Seri</div></div>
        </div>
        <div class="card">
            <h3>Genel İlerleme</h3>
            <div class="prog-bar-wrap">
                <div class="prog-bar-label"><span>Tamamlanan Konular</span><span>${done}/${CONSTANTS.TOTAL_TOPICS}</span></div>
                <div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width: ${Math.round((done / CONSTANTS.TOTAL_TOPICS) * 100)}%"></div></div>
            </div>
            <div class="prog-bar-wrap" style="margin-top: 12px;">
                <div class="prog-bar-label"><span>Soru Bankası</span><span>${totalQBSolved}/${totalQBAvailable}</span></div>
                <div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width: ${totalQBAvailable > 0 ? Math.round((totalQBSolved / totalQBAvailable) * 100) : 0}%"></div></div>
            </div>
        </div>
        ${weakTopics.length > 0 ? `
            <div class="card"><h3>⚠️ Zayıf Konular</h3>
                ${weakTopics.slice(0, 5).map(w => `
                    <div class="weak-row" onclick="openTopic(${w.id})" style="cursor: pointer;">
                        <span class="weak-name">${w.name}</span><span class="weak-pct" style="color: var(--danger);">%${w.pct} (${w.total} soru)</span>
                    </div>`).join('')}
            </div>` : ''}
        ${recentExams.length > 0 ? `
            <div class="card"><h3>📝 Son Denemeler</h3>
                ${recentExams.map(e => `<div class="weak-row"><span class="weak-name">${e.type}</span><span class="weak-pct" style="color: var(--accent);">${e.net} net</span><span style="font-size: 10px; color: var(--text-muted);">${e.date}</span></div>`).join('')}
            </div>` : ''}
        <div class="card">
            <h3>⚙️ Yönetim</h3>
            <div class="btn-group-vertical" style="margin-top: 8px;">
                <button class="btn btn-ghost btn-full" onclick="openModal('api')">🔑 API Anahtarı</button>
                <button class="btn btn-ghost btn-full" onclick="resetQuestionBankProgress()">🔄 Soru Bankası İlerlemesini Sıfırla</button>
                <button class="btn btn-danger btn-full" onclick="openModal('reset')">🗑️ Verileri Sıfırla</button>
            </div>
        </div>`;
}

// ============================================
// BÖLÜM 11: SIFIRLAMA & MODAL
// ============================================

window.openModal = function(id) {
    const el = document.getElementById(id + 'Modal');
    if (el) el.classList.remove('hidden');
    if (id === 'api') { const inp = document.getElementById('apiInp'); if (inp) inp.value = ST.apiKey; }
};

window.closeModal = function(id) {
    const el = document.getElementById(id + 'Modal');
    if (el) el.classList.add('hidden');
};

window.saveKey = function() {
    const inp = document.getElementById('apiInp');
    const key = inp?.value?.trim();
    if (!key) { alert('Lütfen bir API anahtarı giriniz.'); return; }
    ST.apiKey = key;
    localStorage.setItem(CONSTANTS.API_KEY_STORAGE, key);
    closeModal('api');
    updateApiStatus();
    alert('✅ API anahtarı başarıyla kaydedildi!');
};

window.doReset = function(type) {
    closeModal('reset');
    if (type === 'all') {
        if (!confirm('⚠️ Tüm ilerlemeniz silinecek. Emin misiniz?')) return;
        if (!confirm('Son kez soruyorum: TÜM VERİLER silinecek.')) return;
        const apiKey = ST.apiKey;
        ST = {
            version: STATE_VERSION, apiKey, topic: 1, currentLevel: 'KOLAY',
            streak: 0, maxStreak: 0, totalCorrect: 0, totalQ: 0,
            completedTopics: [], hist: {}, questionBankProgress: {},
            examSets: {}, examGeneration: 1, examHistory: [],
            apiCallCount: 0, apiCallDate: '', lastSession: null,
            phase: 'summary', cq: null, pendingAdvance: false,
            summaries: {}, testMode: false
        };
        initMissingFields(); initExamSets(); saveState();
        goHome(); updateHomeStats();
        alert('✅ Tüm veriler sıfırlandı.');
    } else if (type === 'topic') {
        const t = getTopicById(ST.topic);
        if (!confirm(`${t?.n || 'Bu konu'} sıfırlanacak. Onaylıyor musunuz?`)) return;
        ST.hist[ST.topic] = { levels: {}, currentLevel: 'KOLAY' };
        ST.currentLevel = 'KOLAY';
        if (ST.completedTopics.includes(ST.topic)) ST.completedTopics = ST.completedTopics.filter(id => id !== ST.topic);
        saveState();
        renderPreStudySummary();
        alert(`✅ ${t?.n || 'Konu'} sıfırlandı.`);
    }
};

window.resetQuestionBankProgress = function() {
    if (!confirm('Tüm soru bankası ilerlemeniz sıfırlanacak. Onaylıyor musunuz?')) return;
    ST.questionBankProgress = {};
    saveState(); goStats();
    alert('✅ Soru bankası ilerlemesi sıfırlandı.');
};

// ============================================
// BÖLÜM 12: TEST MODU
// ============================================

let testModeClickCount = 0;
let testModeTimeout = null;

document.addEventListener('DOMContentLoaded', function() {
    const headerTitle = document.getElementById('headerTitle');
    if (headerTitle) {
        headerTitle.style.cursor = 'default';
        headerTitle.addEventListener('click', function() {
            testModeClickCount++;
            if (testModeClickCount >= 5) {
                ST.testMode = !ST.testMode;
                testModeClickCount = 0;
                ST.testMode ? celebrate('🧪 Test Modu Açık', 1500) : alert('🧪 Test Modu Kapatıldı');
                saveState();
            }
            if (testModeTimeout) clearTimeout(testModeTimeout);
            testModeTimeout = setTimeout(() => { testModeClickCount = 0; }, 2000);
        });
    }
});

// ============================================
// BÖLÜM 13: BAŞLAT
// ============================================

function initApp() {
    console.log('🚀 KPSS Matematik Uygulaması Başlatılıyor...');
    loadState();
    showView('vHome', false);
    updateHomeStats();
    updateApiStatus();
    initExamSets();
    ST.lastSession = todayStr();
    saveState();
    console.log('✅ Uygulama hazır! Test modu:', ST.testMode ? 'AÇIK 🧪' : 'KAPALI');
}

document.addEventListener('DOMContentLoaded', initApp);
console.log('✅ app.js v2.2 yüklendi - Kilit sistemi düzeltildi');