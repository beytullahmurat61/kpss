// ============================================
// MİSYON KORUMA SINAVI - ANA UYGULAMA MOTORU V1
// Ders → Ünite → Konu Anlatımı + Ünite Soruları
// Soru Bankası: Ders ders + Karma
// Eşleştirme Tablosu modülü entegre
// Autofill engellendi | Groq entegrasyonu aktif
// ============================================

console.log('🚀 Misyon Koruma uygulaması başlıyor...');

// ========== STATE ==========
let ST = {
    version: 1.0,
    grokApiKey: '',
    currentCourse: 1,
    currentUnit: null,
    currentUnitTab: 'lesson',
    streak: 0,
    maxStreak: 0,
    totalCorrect: 0,
    totalSolved: 0,
    completedCourses: [],
    completedUnits: [],
    unitProgress: {},          // { 'anayasa-1': { correct, total, completed } }
    questionBankProgress: {},  // { courseId: { solved, correct } }
    mixedProgress: { solved: 0, correct: 0 },
    matchingProgress: {},      // { setId: { correct, total } }
    dailyGoal: { date: '', solved: 0, target: 20 },
    lastVisited: null,         // { courseId, unitId, tab }
    scratchpad: '',
    currentQuestion: null,
    currentView: 'vHome',
    examMode: false,           // artık kullanılmıyor ama uyumluluk için
    pendingCompletionUnit: null,
    pendingCompletionCourse: null
};

// ========== GROQ API ==========
const GROK_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROK_MODEL = 'llama-3.3-70b-versatile';

// ========== YARDIMCI FONKSİYONLAR ==========
function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function shuffleArray(arr) { const s = [...arr]; for (let i = s.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [s[i], s[j]] = [s[j], s[i]]; } return s; }
function todayStr() { return new Date().toISOString().split('T')[0]; }

function normAns(s) { 
    if (!s) return ''; 
    let cleaned = String(s).toLowerCase().trim(); 
    cleaned = cleaned.replace(/\s*(bin|tl|lira|gün|saat|km|kg|gr|lt|ml|cm|m)\b/gi, ''); 
    if (/^\d+000$/.test(cleaned)) cleaned = cleaned.replace(/000$/, '');
    cleaned = cleaned.replace(/[.,](\d{3})\b/g, '$1'); 
    cleaned = cleaned.replace(/,/g, '.'); 
    cleaned = cleaned.replace(/[×x]/g, '*'); 
    cleaned = cleaned.replace(/\s+/g, ''); 
    if (!isNaN(parseFloat(cleaned)) && isFinite(cleaned)) cleaned = parseFloat(cleaned).toString();
    return cleaned; 
}

function checkEqual(userAns, correctAns) { 
    try { 
        const u = normAns(userAns), c = normAns(correctAns); 
        if (u === c) return true; 
        const uNum = parseFloat(u), cNum = parseFloat(c); 
        if (!isNaN(uNum) && !isNaN(cNum) && Math.abs(uNum - cNum) < 0.001) return true; 
        const uParts = u.split('/'), cParts = c.split('/'); 
        if (cParts.length === 2 || uParts.length === 2) { 
            const uVal = uParts.length === 2 ? Number(uParts[0])/Number(uParts[1]) : uNum; 
            const cVal = cParts.length === 2 ? Number(cParts[0])/Number(cParts[1]) : cNum; 
            if (!isNaN(uVal) && !isNaN(cVal) && Math.abs(uVal - cVal) < 0.001) return true; 
        } 
        return false; 
    } catch(e) { return false; } 
}

// ========== SORU BANKASI YÜKLEME ==========
// questions.js yapısı: SORU_BANKASI = { units: {...}, mixed: [...] }
let UNIT_QUESTIONS = {};   // { unitId: [ {q, options, answer}, ... ] }
let MIXED_QUESTIONS = [];  // [ {q, options, answer}, ... ]

function loadQuestions() {
    UNIT_QUESTIONS = {};
    MIXED_QUESTIONS = [];

    if (typeof SORU_BANKASI === 'undefined') {
        console.warn('⚠️ SORU_BANKASI yüklenmedi');
        return;
    }

    // Ünite soruları
    if (SORU_BANKASI.units) {
        for (const [unitId, qs] of Object.entries(SORU_BANKASI.units)) {
            UNIT_QUESTIONS[unitId] = qs || [];
        }
    }

    // Karma sorular
    if (Array.isArray(SORU_BANKASI.mixed)) {
        MIXED_QUESTIONS = SORU_BANKASI.mixed;
    }

    console.log(`✅ Sorular yüklendi: ${Object.keys(UNIT_QUESTIONS).length} ünite, ${MIXED_QUESTIONS.length} karma soru`);
}

// Ünitenin soruları (varsa)
function getUnitQuestions(unitId) {
    return UNIT_QUESTIONS[unitId] || [];
}

// Dersin tüm ünitelerinden sorular
function getCourseQuestions(courseId) {
    const course = getCourseById(courseId);
    if (!course || !course.units) return [];
    let all = [];
    course.units.forEach(u => {
        all = all.concat(getUnitQuestions(u.id));
    });
    return all;
}

// ========== ÜNİTE İÇERİĞİ ==========
function getUnitLessonContent(courseId, unitId) {
    const unit = getUnit(courseId, unitId);
    return unit ? unit.content : null;
}

// ========== STATE YÖNETİMİ ==========
function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem('misyon_koruma_v1') || '{}');
        if (saved.version === 1.0) {
            Object.assign(ST, saved);
        }
    } catch(e) { console.warn(e); }
    ST.grokApiKey = localStorage.getItem('misyon_grok_api_key') || '';
    if (!ST.unitProgress) ST.unitProgress = {};
    if (!ST.completedCourses) ST.completedCourses = [];
    if (!ST.completedUnits) ST.completedUnits = [];
    if (!ST.questionBankProgress) ST.questionBankProgress = {};
    if (!ST.mixedProgress) ST.mixedProgress = { solved: 0, correct: 0 };
    if (!ST.matchingProgress) ST.matchingProgress = {};
    if (!ST.dailyGoal) ST.dailyGoal = { date: todayStr(), solved: 0, target: 20 };
    if (ST.scratchpad && !ST.scratchpad.startsWith('data:image')) ST.scratchpad = '';
    saveState();
}

function saveState() {
    try {
        const toSave = {
            version: 1.0,
            currentCourse: ST.currentCourse,
            currentUnit: ST.currentUnit,
            streak: ST.streak,
            maxStreak: ST.maxStreak,
            totalCorrect: ST.totalCorrect,
            totalSolved: ST.totalSolved,
            completedCourses: ST.completedCourses,
            completedUnits: ST.completedUnits,
            unitProgress: ST.unitProgress,
            questionBankProgress: ST.questionBankProgress,
            mixedProgress: ST.mixedProgress,
            matchingProgress: ST.matchingProgress,
            dailyGoal: ST.dailyGoal,
            lastVisited: ST.lastVisited,
            scratchpad: ST.scratchpad
        };
        localStorage.setItem('misyon_koruma_v1', JSON.stringify(toSave));
    } catch(e) { console.warn(e); }
}

function getUnitProgress(unitId) {
    if (!ST.unitProgress[unitId]) {
        ST.unitProgress[unitId] = { correct: 0, total: 0, completed: false };
    }
    return ST.unitProgress[unitId];
}

// ========== GÜNLÜK HEDEF ==========
function updateDailyGoal() {
    const today = todayStr();
    if (ST.dailyGoal.date !== today) {
        ST.dailyGoal = { date: today, solved: 0, target: 20 };
    }
}

function bumpDailyGoal() {
    updateDailyGoal();
    ST.dailyGoal.solved++;
    saveState();
}

// ========== SAYFA GEÇİŞLERİ ==========
function showView(id, pushHistory = true) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(id)?.classList.add('active');
    ST.currentView = id;
    updateHeader(id);
    if (pushHistory) history.pushState({ view: id }, '', '#/' + id);
    if (id === 'vHome') updateHomeStats();
    else if (id === 'vCourses') renderCoursesList();
    else if (id === 'vUnits') renderUnitsList();
    else if (id === 'vUnitDetail') renderUnitDetail();
    else if (id === 'vQuestionBank') renderQuestionBankList();
    else if (id === 'vMatching') renderMatching();
    else if (id === 'vStats') renderStats();
    saveState();
}

function updateHeader(viewId) { 
    const titles = { 
        vHome: '🛡️ Misyon Koruma', 
        vCourses: '📚 Dersler', 
        vUnits: '📄 Üniteler', 
        vUnitDetail: '📖 Ünite', 
        vQuestionBank: '📝 Soru Bankası',
        vQBSolve: '📝 Soru Çöz',
        vMatching: '🎯 Eşleştirme',
        vStats: '📊 İstatistikler' 
    }; 
    document.getElementById('headerTitle').textContent = titles[viewId] || '🛡️ Misyon Koruma'; 
    document.getElementById('btnBack').style.visibility = viewId === 'vHome' ? 'hidden' : 'visible'; 
}

function goBack() { history.back(); }
function goHome() { showView('vHome'); }
function goCourses() { showView('vCourses'); }
function goQuestionBank() { showView('vQuestionBank'); }
function goMatching() { showView('vMatching'); }
function goStats() { showView('vStats'); }
function toggleMenu() { document.getElementById('sideMenu')?.classList.toggle('hidden'); }

// ========== ANA SAYFA ==========
function updateHomeStats() { 
    const doneCourses = ST.completedCourses.length; 
    const acc = ST.totalSolved > 0 ? Math.round((ST.totalCorrect / ST.totalSolved) * 100) : 0; 
    document.getElementById('statCourses').textContent = doneCourses; 
    document.getElementById('statQuestions').textContent = ST.totalSolved; 
    document.getElementById('statAccuracy').textContent = '%' + acc; 
    document.getElementById('statStreak').textContent = ST.maxStreak; 

    const totalCourses = TOPICS.length;
    const coursesProgress = document.getElementById('homeCoursesProgress');
    if (coursesProgress) coursesProgress.textContent = `${doneCourses}/${totalCourses} ders`;

    updateDailyGoal();
    const dg = ST.dailyGoal;
    const dgFill = document.getElementById('dailyGoalFill');
    const dgCount = document.getElementById('dailyGoalCounter');
    if (dgFill && dgCount) {
        const pct = Math.min(100, (dg.solved / dg.target) * 100);
        dgFill.style.width = pct + '%';
        dgCount.textContent = `${dg.solved}/${dg.target}`;
    }

    // Kaldığın yerden devam kartı
    const continueCard = document.getElementById('continueCard');
    const continueSub = document.getElementById('continueSub');
    if (continueCard && continueSub && ST.lastVisited) {
        const course = getCourseById(ST.lastVisited.courseId);
        const unit = getUnit(ST.lastVisited.courseId, ST.lastVisited.unitId);
        if (course && unit) {
            continueCard.classList.remove('hidden');
            continueSub.textContent = `${course.e} ${course.n} → ${unit.title}`;
        } else {
            continueCard.classList.add('hidden');
        }
    } else if (continueCard) {
        continueCard.classList.add('hidden');
    }
}

function continueLast() {
    if (!ST.lastVisited) return;
    ST.currentCourse = ST.lastVisited.courseId;
    ST.currentUnit = ST.lastVisited.unitId;
    ST.currentUnitTab = ST.lastVisited.tab || 'lesson';
    showView('vUnitDetail');
}

// ========== DERS LİSTESİ ==========
function renderCoursesList() {
    const el = document.getElementById('coursesList');
    if (!el) return;
    let html = '';
    for (const course of TOPICS) {
        const completed = ST.completedCourses.includes(course.id);
        const unitsTotal = course.units?.length || 0;
        const unitsDone = (course.units || []).filter(u => ST.completedUnits.includes(u.id)).length;
        const pct = unitsTotal > 0 ? Math.round((unitsDone / unitsTotal) * 100) : 0;

        let cls = 'topic-row';
        if (completed) cls += ' t-done';

        html += `<div class="${cls}" onclick="openCourse(${course.id})">
            <span class="t-icon">${course.e}</span>
            <div class="t-info">
                <div class="t-name">${course.n}</div>
                <div class="t-meta">${unitsDone}/${unitsTotal} ünite</div>
                <div class="prog-bar-wrap"><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${pct}%"></div></div></div>
            </div>
            <span>${completed ? '✅' : '📘'}</span>
        </div>`;
    }
    el.innerHTML = html;
    document.getElementById('coursesDoneLabel').textContent = `${ST.completedCourses.length}/${TOPICS.length}`;
}

function openCourse(courseId) {
    ST.currentCourse = courseId;
    showView('vUnits');
}

// ========== ÜNİTE LİSTESİ ==========
function renderUnitsList() {
    const course = getCourseById(ST.currentCourse);
    if (!course) return;
    document.getElementById('unitsCourseTitle').textContent = `${course.e} ${course.n}`;
    const el = document.getElementById('unitsList');
    if (!el) return;
    const units = course.units || [];
    const doneCount = units.filter(u => ST.completedUnits.includes(u.id)).length;
    document.getElementById('unitsProgress').textContent = `${doneCount}/${units.length}`;

    let html = '';
    units.forEach((unit, idx) => {
        const prog = ST.unitProgress[unit.id] || { correct: 0, total: 0, completed: false };
        const completed = ST.completedUnits.includes(unit.id);
        const qCount = getUnitQuestions(unit.id).length;
        let cls = 'topic-row';
        if (completed) cls += ' t-done';

        html += `<div class="${cls}" onclick="openUnit('${unit.id}')">
            <span class="t-icon">${idx + 1}️⃣</span>
            <div class="t-info">
                <div class="t-name">${unit.title}</div>
                <div class="t-meta">${qCount} soru</div>
            </div>
            <span>${completed ? '✅' : '📄'}</span>
        </div>`;
    });
    el.innerHTML = html;
}

function openUnit(unitId) {
    ST.currentUnit = unitId;
    ST.currentUnitTab = 'lesson';
    ST.lastVisited = { courseId: ST.currentCourse, unitId, tab: 'lesson' };
    saveState();
    showView('vUnitDetail');
}

// ========== ÜNİTE DETAY ==========
function renderUnitDetail() {
    const course = getCourseById(ST.currentCourse);
    const unit = getUnit(ST.currentCourse, ST.currentUnit);
    if (!course || !unit) return;

    document.getElementById('unitTitle').textContent = unit.title;
    document.getElementById('unitBadge').textContent = course.n;
    switchUnitTab(ST.currentUnitTab || 'lesson');
}

function switchUnitTab(tab) {
    ST.currentUnitTab = tab;
    ST.lastVisited = { courseId: ST.currentCourse, unitId: ST.currentUnit, tab };
    saveState();

    document.querySelectorAll('#unitTabBar .tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    if (tab === 'lesson') {
        document.getElementById('unitLessonTab').classList.add('active');
        renderUnitLesson();
    } else if (tab === 'quiz') {
        document.getElementById('unitQuizTab').classList.add('active');
        renderUnitQuiz();
    }
}

function renderUnitLesson() {
    const content = getUnitLessonContent(ST.currentCourse, ST.currentUnit);
    const el = document.getElementById('unitLessonContent');
    if (!el) return;
    const alreadyRead = ST.completedUnits.includes(ST.currentUnit);
    el.innerHTML = `
        <div class="learn-content">${content || '<p>İçerik hazırlanıyor...</p>'}</div>
    `;
    const readBtn = document.querySelector('#unitLessonTab .btn-ghost');
    if (readBtn) {
        readBtn.textContent = alreadyRead ? '✅ Okundu' : '✅ Okudum, Anladım';
        readBtn.disabled = alreadyRead;
    }
}

function markUnitRead() {
    if (!ST.completedUnits.includes(ST.currentUnit)) {
        ST.completedUnits.push(ST.currentUnit);
        saveState();
    }
    alert('✅ Ünite okundu olarak işaretlendi. Şimdi soruları çözebilirsin!');
    switchUnitTab('quiz');
}

function renderUnitQuiz() {
    const questions = getUnitQuestions(ST.currentUnit);
    const el = document.getElementById('unitQuizContent');
    if (!el) return;

    if (questions.length === 0) {
        el.innerHTML = `
            <div class="card" style="text-align:center">
                <h3>📝 Bu ünitede henüz soru yok</h3>
                <p style="color:var(--text-muted); margin: 12px 0;">Sorular eklendiğinde buradan çözebileceksin.</p>
                <button class="btn btn-ghost btn-full" onclick="markUnitRead()">✅ Üniteyi Tamamla</button>
            </div>
        `;
        return;
    }

    const prog = getUnitProgress(ST.currentUnit);
    if (prog.total >= questions.length) {
        // Ünite tamamlandı ekranı
        const passed = prog.correct >= Math.ceil(questions.length * 0.6);
        el.innerHTML = `
            <div class="card" style="text-align:center">
                <div style="font-size:48px">${passed ? '🏆' : '💪'}</div>
                <h3>${passed ? 'Üniteyi Tamamladın!' : 'Tekrar Denemelisin'}</h3>
                <p style="margin:12px 0">Doğru: <b>${prog.correct}/${prog.total}</b></p>
                <div class="btn-row" style="flex-direction:column;gap:8px">
                    <button class="btn btn-ghost btn-full" onclick="resetUnitProgress()">🔄 Tekrar Çöz</button>
                    <button class="btn btn-primary btn-full" onclick="goToNextUnit()">➡️ Sonraki Ünite</button>
                </div>
            </div>
        `;
        return;
    }

    // Soru çözme
    const q = questions[prog.total];
    ST.currentQuestion = { ...q, mode: 'unit', unitId: ST.currentUnit };
    el.innerHTML = `
        <div class="prog-bar-wrap">
            <div class="prog-bar-label"><span>Soru ${prog.total + 1}/${questions.length}</span><span>${prog.correct} doğru</span></div>
            <div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width:${(prog.total / questions.length) * 100}%"></div></div>
        </div>
        <div class="card accent-top">
            <div class="q-header">
                <span class="q-counter">Soru ${prog.total + 1}</span>
            </div>
            <div class="q-text">${q.q}</div>
            <div class="options-list">
                ${q.options.map((opt, i) => `<button class="option-btn" onclick="answerUnitQuestion(${i})">${String.fromCharCode(65+i)}) ${opt}</button>`).join('')}
            </div>
        </div>
        <div id="unitFeedbackArea"></div>
    `;
}

function answerUnitQuestion(selectedIdx) {
    const q = ST.currentQuestion;
    if (!q || q.mode !== 'unit') return;
    const questions = getUnitQuestions(ST.currentUnit);
    const prog = getUnitProgress(ST.currentUnit);
    const isCorrect = selectedIdx === q.answer;

    prog.total++;
    if (isCorrect) prog.correct++;
    ST.totalSolved++;
    if (isCorrect) { ST.totalCorrect++; ST.streak++; if (ST.streak > ST.maxStreak) ST.maxStreak = ST.streak; }
    else ST.streak = 0;
    bumpDailyGoal();
    saveState();

    // Doğru cevabı göster
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.answer) btn.classList.add('opt-correct');
        if (i === selectedIdx && !isCorrect) btn.classList.add('opt-wrong');
    });

    const isLast = prog.total >= questions.length;
    const fbHtml = `
        <div class="fb ${isCorrect ? 'fb-ok' : 'fb-fail'}">
            <div class="fb-head">
                <span class="fb-icon">${isCorrect ? '🎉' : '❌'}</span>
                <span class="fb-title">${isCorrect ? 'Doğru!' : 'Yanlış'}</span>
            </div>
            <div class="fb-body">
                Doğru cevap: <b>${String.fromCharCode(65 + q.answer)}) ${q.options[q.answer]}</b>
                ${q.explain ? `<br><br>💡 <b>Açıklama:</b> ${q.explain}` : ''}
            </div>
            ${!isLast ? '<div class="btn-row"><button class="btn btn-primary btn-full" onclick="renderUnitQuiz()">Sonraki Soru →</button></div>' 
                     : '<div class="btn-row"><button class="btn btn-primary btn-full" onclick="finishUnit()">🏁 Üniteyi Bitir</button></div>'}
        </div>
    `;
    const fbArea = document.getElementById('unitFeedbackArea');
    if (fbArea) fbArea.innerHTML = fbHtml;

    if (!isCorrect) renderGrokBtn(fbArea.querySelector('.fb-fail'), q.q, q.options[q.answer], '');
}

function finishUnit() {
    const prog = getUnitProgress(ST.currentUnit);
    const questions = getUnitQuestions(ST.currentUnit);
    const passed = prog.correct >= Math.ceil(questions.length * 0.6);
    prog.completed = true;

    if (passed && !ST.completedUnits.includes(ST.currentUnit)) {
        ST.completedUnits.push(ST.currentUnit);
    }

    // Ders tamamlandı mı?
    const course = getCourseById(ST.currentCourse);
    const allUnitsDone = (course.units || []).every(u => ST.completedUnits.includes(u.id));
    if (allUnitsDone && !ST.completedCourses.includes(ST.currentCourse)) {
        ST.completedCourses.push(ST.currentCourse);
    }

    saveState();
    renderUnitQuiz();
    showUnitCompletionPopup(passed);
}

function resetUnitProgress() {
    ST.unitProgress[ST.currentUnit] = { correct: 0, total: 0, completed: false };
    ST.completedUnits = ST.completedUnits.filter(id => id !== ST.currentUnit);
    saveState();
    renderUnitQuiz();
}

function goToNextUnit() {
    const course = getCourseById(ST.currentCourse);
    if (!course) return;
    const units = course.units || [];
    const idx = units.findIndex(u => u.id === ST.currentUnit);
    if (idx >= 0 && idx < units.length - 1) {
        openUnit(units[idx + 1].id);
    } else {
        // Ders bitti, sonraki derse
        const nextCourse = TOPICS.find(c => c.order === course.order + 1);
        if (nextCourse) openCourse(nextCourse.id);
        else { alert('🎉 Tüm dersleri bitirdin!'); goCourses(); }
    }
}

function showUnitCompletionPopup(passed) {
    const popup = document.getElementById('completionPopup');
    const title = document.getElementById('completionUnitTitle');
    const msg = document.getElementById('completionMessage');
    const unit = getUnit(ST.currentCourse, ST.currentUnit);
    if (!popup || !title || !msg) return;

    ST.pendingCompletionUnit = ST.currentUnit;
    ST.pendingCompletionCourse = ST.currentCourse;

    const prog = getUnitProgress(ST.currentUnit);
    if (passed) {
        title.textContent = `🏆 ${unit?.title} Tamamlandı!`;
        msg.innerHTML = `Doğru: <b>${prog.correct}/${prog.total}</b> — Harika!`;
    } else {
        title.textContent = `💪 ${unit?.title}`;
        msg.innerHTML = `Doğru: <b>${prog.correct}/${prog.total}</b> — Tekrar denemelisin.`;
    }
    popup.classList.remove('hidden');
}

function closeCompletionPopup() {
    document.getElementById('completionPopup')?.classList.add('hidden');
    ST.pendingCompletionUnit = null;
    ST.pendingCompletionCourse = null;
}

function goToQuestionBankFromPopup() {
    closeCompletionPopup();
    ST.currentCourse = ST.pendingCompletionCourse;
    showView('vQuestionBank');
}

function goToNextUnitFromPopup() {
    const courseId = ST.pendingCompletionCourse;
    closeCompletionPopup();
    if (courseId) ST.currentCourse = courseId;
    goToNextUnit();
}

// ========== SORU BANKASI ==========
function renderQuestionBankList() {
    const el = document.getElementById('qbCoursesList');
    if (!el) return;
    let html = '';
    for (const course of TOPICS) {
        const questions = getCourseQuestions(course.id);
        const prog = ST.questionBankProgress[course.id] || { solved: 0, correct: 0 };
        const total = questions.length;
        const pct = total > 0 ? Math.round((prog.solved / total) * 100) : 0;
        const acc = prog.solved > 0 ? Math.round((prog.correct / prog.solved) * 100) : 0;

        html += `<div class="topic-row" onclick="startCourseQuestions(${course.id})">
            <span class="t-icon">${course.e}</span>
            <div class="t-info">
                <div class="t-name">${course.n}</div>
                <div class="t-meta">${prog.solved}/${total} çözüldü • %${acc} doğruluk</div>
                <div class="prog-bar-wrap"><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${pct}%"></div></div></div>
            </div>
            <span>📝</span>
        </div>`;
    }
    el.innerHTML = html;
}

function startCourseQuestions(courseId) {
    ST.currentCourse = courseId;
    const questions = getCourseQuestions(courseId);
    if (questions.length === 0) {
        alert('Bu derste henüz soru yok.');
        return;
    }
    startQBSession(questions, `📝 ${getCourseById(courseId).n}`);
}

function startMixedQuestions() {
    if (MIXED_QUESTIONS.length === 0) {
        alert('Henüz karma soru eklenmemiş.');
        return;
    }
    startQBSession(shuffleArray([...MIXED_QUESTIONS]), '🎲 Karma Sorular', true);
}

function startQBSession(questions, title, isMixed = false) {
    ST.qbSession = {
        questions: shuffleArray(questions).slice(0, 100),
        index: 0,
        correct: 0,
        isMixed
    };
    showView('vQBSolve');
    document.getElementById('qbSolveTitle').textContent = title;
    renderQBQuestion();
}

function renderQBQuestion() {
    const s = ST.qbSession;
    if (!s) { goQuestionBank(); return; }
    if (s.index >= s.questions.length) {
        document.getElementById('qbSolveContent').innerHTML = `
            <div class="card" style="text-align:center">
                <div style="font-size:48px">🎉</div>
                <h3>Oturum Tamamlandı!</h3>
                <p style="margin:12px 0">Doğru: <b>${s.correct}/${s.questions.length}</b> (%${Math.round((s.correct / s.questions.length) * 100)})</p>
                <button class="btn btn-primary btn-full" onclick="goQuestionBank()">Listeye Dön</button>
            </div>
        `;
        return;
    }
    const q = s.questions[s.index];
    ST.currentQuestion = { ...q, mode: 'qb' };
    document.getElementById('qbSolveProgress').textContent = `${s.index + 1}/${s.questions.length}`;

    document.getElementById('qbSolveContent').innerHTML = `
        <div class="prog-bar-wrap">
            <div class="prog-bar-label"><span>Soru ${s.index + 1}/${s.questions.length}</span><span>${s.correct} doğru</span></div>
            <div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${(s.index / s.questions.length) * 100}%"></div></div>
        </div>
        <div class="card accent-top">
            <div class="q-text">${q.q}</div>
            <div class="options-list">
                ${q.options.map((opt, i) => `<button class="option-btn" onclick="answerQBQuestion(${i})">${String.fromCharCode(65+i)}) ${opt}</button>`).join('')}
            </div>
        </div>
        <div id="qbFeedbackArea"></div>
    `;
}

function answerQBQuestion(selectedIdx) {
    const s = ST.qbSession;
    const q = ST.currentQuestion;
    if (!s || !q) return;
    const isCorrect = selectedIdx === q.answer;
    s.index++;
    if (isCorrect) s.correct++;

    ST.totalSolved++;
    if (isCorrect) { ST.totalCorrect++; ST.streak++; if (ST.streak > ST.maxStreak) ST.maxStreak = ST.streak; }
    else ST.streak = 0;

    // İlerleme kaydı
    if (s.isMixed) {
        ST.mixedProgress.solved++;
        if (isCorrect) ST.mixedProgress.correct++;
    } else {
        const courseId = ST.currentCourse;
        if (!ST.questionBankProgress[courseId]) ST.questionBankProgress[courseId] = { solved: 0, correct: 0 };
        ST.questionBankProgress[courseId].solved++;
        if (isCorrect) ST.questionBankProgress[courseId].correct++;
    }
    bumpDailyGoal();
    saveState();

    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.answer) btn.classList.add('opt-correct');
        if (i === selectedIdx && !isCorrect) btn.classList.add('opt-wrong');
    });

    const fbHtml = `
        <div class="fb ${isCorrect ? 'fb-ok' : 'fb-fail'}">
            <div class="fb-head">
                <span class="fb-icon">${isCorrect ? '🎉' : '❌'}</span>
                <span class="fb-title">${isCorrect ? 'Doğru!' : 'Yanlış'}</span>
            </div>
            <div class="fb-body">
                Doğru cevap: <b>${String.fromCharCode(65 + q.answer)}) ${q.options[q.answer]}</b>
                ${q.explain ? `<br><br>💡 <b>Açıklama:</b> ${q.explain}` : ''}
            </div>
            <div class="btn-row"><button class="btn btn-primary btn-full" onclick="nextQBQuestion()">Sonraki Soru →</button></div>
        </div>
    `;
    const fbArea = document.getElementById('qbFeedbackArea');
    if (fbArea) fbArea.innerHTML = fbHtml;
    if (!isCorrect) renderGrokBtn(fbArea.querySelector('.fb-fail'), q.q, q.options[q.answer], '');
}

function nextQBQuestion() {
    ST.qbSession.index++;
    renderQBQuestion();
}

// ========== EŞLEŞTİRME ==========
let matchingState = {};

function renderMatching() {
    const el = document.getElementById('matchingContent');
    if (!el) return;
    if (typeof MATCHING_SETS === 'undefined' || MATCHING_SETS.length === 0) {
        el.innerHTML = '<div class="card" style="text-align:center">Eşleştirme seti bulunamadı.</div>';
        return;
    }

    let html = '';
    for (const set of MATCHING_SETS) {
        const prog = ST.matchingProgress[set.id] || { correct: 0, total: 0 };
        html += `<div class="topic-row" onclick="startMatching('${set.id}')">
            <span class="t-icon">🎯</span>
            <div class="t-info">
                <div class="t-name">${set.title}</div>
                <div class="t-meta">${set.pairs.length} çift • ${set.description || ''}</div>
            </div>
            <span>${prog.correct > 0 ? `%${Math.round((prog.correct/prog.total)*100)}` : '→'}</span>
        </div>`;
    }
    el.innerHTML = html;
}

function startMatching(setId) {
    const set = MATCHING_SETS.find(s => s.id === setId);
    if (!set) return;

    const leftItems = set.pairs.map((p, i) => ({ id: i, text: p.left }));
    const rightItems = shuffleArray(set.pairs.map((p, i) => ({ id: i, text: p.right })));

    matchingState = {
        setId,
        set,
        leftItems,
        rightItems,
        selectedLeft: null,
        matches: {},           // { leftId: rightId }
        correctCount: 0,
        finished: false
    };

    renderMatchingBoard();
}

function renderMatchingBoard() {
    const el = document.getElementById('matchingContent');
    if (!el) return;
    const s = matchingState;

    let leftHtml = s.leftItems.map(item => {
        const matched = s.matches[item.id] !== undefined;
        const cls = matched ? 'match-item matched' : (s.selectedLeft === item.id ? 'match-item selected' : 'match-item');
        return `<button class="${cls}" onclick="selectLeft(${item.id})" ${matched ? 'disabled' : ''}>${item.text}</button>`;
    }).join('');

    let rightHtml = s.rightItems.map(item => {
        const matched = Object.values(s.matches).includes(item.id);
        const cls = matched ? 'match-item matched' : 'match-item';
        return `<button class="${cls}" onclick="selectRight(${item.id})" ${matched ? 'disabled' : ''}>${item.text}</button>`;
    }).join('');

    el.innerHTML = `
        <div class="card">
            <div style="display:flex;justify-content:space-between;margin-bottom:8px">
                <b>${s.set.title}</b>
                <span>${Object.keys(s.matches).length}/${s.set.pairs.length}</span>
            </div>
            <p style="color:var(--text-muted);font-size:13px;margin-bottom:12px">${s.set.description || ''}</p>
            <div class="matching-board">
                <div class="match-col">${leftHtml}</div>
                <div class="match-col">${rightHtml}</div>
            </div>
            <div id="matchingFeedback"></div>
            <button class="btn btn-ghost btn-full" style="margin-top:12px" onclick="goMatching()">← Listeye Dön</button>
        </div>
    `;
}

function selectLeft(id) {
    matchingState.selectedLeft = id;
    renderMatchingBoard();
}

function selectRight(id) {
    if (matchingState.selectedLeft === null) return;
    const leftId = matchingState.selectedLeft;
    matchingState.matches[leftId] = id;
    matchingState.selectedLeft = null;

    // Doğru mu?
    const isCorrect = leftId === id;  // pairs aynı index'te eşleşiyor
    if (isCorrect) matchingState.correctCount++;

    // İlerleme kaydı
    if (!ST.matchingProgress[matchingState.setId]) ST.matchingProgress[matchingState.setId] = { correct: 0, total: 0 };
    ST.matchingProgress[matchingState.setId].total++;
    if (isCorrect) ST.matchingProgress[matchingState.setId].correct++;

    ST.totalSolved++;
    if (isCorrect) { ST.totalCorrect++; ST.streak++; if (ST.streak > ST.maxStreak) ST.maxStreak = ST.streak; }
    else ST.streak = 0;
    bumpDailyGoal();
    saveState();

    renderMatchingBoard();
    const fb = document.getElementById('matchingFeedback');
    if (fb) {
        fb.innerHTML = `<div class="fb ${isCorrect ? 'fb-ok' : 'fb-fail'}" style="margin-top:8px">
            <div class="fb-head"><span>${isCorrect ? '🎉' : '❌'}</span><span>${isCorrect ? 'Doğru eşleştirme!' : 'Yanlış eşleştirme'}</span></div>
        </div>`;
    }

    if (Object.keys(matchingState.matches).length === matchingState.set.pairs.length) {
        setTimeout(() => {
            alert(`🎉 Eşleştirme tamamlandı!\nDoğru: ${matchingState.correctCount}/${matchingState.set.pairs.length}`);
        }, 400);
    }
}

// ========== İSTATİSTİKLER ==========
function renderStats() {
    const acc = ST.totalSolved > 0 ? Math.round((ST.totalCorrect / ST.totalSolved) * 100) : 0;
    let courseHtml = '';
    for (const course of TOPICS) {
        const unitsTotal = course.units?.length || 0;
        const unitsDone = (course.units || []).filter(u => ST.completedUnits.includes(u.id)).length;
        const pct = unitsTotal > 0 ? Math.round((unitsDone / unitsTotal) * 100) : 0;
        const completed = ST.completedCourses.includes(course.id);
        courseHtml += `<div class="topic-row">
            <span class="t-icon">${course.e}</span>
            <div class="t-info">
                <div class="t-name">${course.n}</div>
                <div class="t-meta">${unitsDone}/${unitsTotal} ünite</div>
                <div class="prog-bar-wrap"><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${pct}%"></div></div></div>
            </div>
            <span>${completed ? '✅' : '🔄'}</span>
        </div>`;
    }

    document.getElementById('statsContent').innerHTML = `
        <div class="stat-grid">
            <div class="stat-cell"><div class="stat-num">${ST.totalSolved}</div><div class="stat-lbl">Soru</div></div>
            <div class="stat-cell"><div class="stat-num">%${acc}</div><div class="stat-lbl">Doğruluk</div></div>
            <div class="stat-cell"><div class="stat-num">${ST.maxStreak}</div><div class="stat-lbl">Seri</div></div>
            <div class="stat-cell"><div class="stat-num">${ST.completedCourses.length}</div><div class="stat-lbl">Ders</div></div>
        </div>
        <div class="card"><h3>📚 Ders Performansı</h3>${courseHtml}</div>
    `;
}

// ========== GROQ API ==========
async function askGrokForSolution(question, correctAnswer, userAnswer) {
    if (!ST.grokApiKey) {
        return '⚠️ Groq API anahtarı girilmedi. Menü → 🔑 Groq API Anahtarı\'ndan ekleyin.\n\n🔗 console.groq.com/keys adresinden ücretsiz alabilirsiniz.';
    }
    const prompt = `Sen bir Misyon Koruma sınavı öğretmenisin. Aşağıdaki soruyu Türkçe, adım adım ve anlaşılır biçimde açıkla.\n\nSoru: ${question}\nDoğru cevap: ${correctAnswer}\nÖğrencinin cevabı: ${userAnswer || '(boş bıraktı)'}\n\nLütfen:\n1. Soruyu kısa çöz (3-5 adım)\n2. Hangi kanun/kural kullanıldığını belirt\n3. Öğrencinin hatasını varsa düzelt\n4. Sonucu vurgula`;

    try {
        const response = await fetch(GROK_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ST.grokApiKey}` },
            body: JSON.stringify({
                model: GROK_MODEL,
                messages: [
                    { role: 'system', content: 'Sen Misyon Koruma sınavına hazırlanan öğrencilere ders anlatan bir öğretmensin. Kısa, net ve anlaşılır ol.' },
                    { role: 'user', content: prompt }
                ],
                max_tokens: 800,
                temperature: 0.3
            })
        });
        if (!response.ok) {
            if (response.status === 401) return '❌ API anahtarı geçersiz!';
            if (response.status === 429) return '⚠️ API limiti aşıldı. Bekleyin.';
            return `❌ API hatası (${response.status}).`;
        }
        const data = await response.json();
        return data.choices?.[0]?.message?.content || 'Açıklama alınamadı.';
    } catch(e) {
        return '❌ Bağlantı hatası. İnternetinizi kontrol edin.';
    }
}

function renderGrokBtn(targetEl, question, correctAnswer, userAnswer) {
    if (!targetEl) return;
    const btn = document.createElement('button');
    btn.className = 'btn btn-grok';
    btn.innerHTML = '🤖 Groq ile Çözümü Gör';
    btn.style.marginTop = '12px';
    btn.style.width = '100%';
    btn.onclick = async () => {
        btn.disabled = true;
        btn.innerHTML = '🤖 Groq düşünüyor...';
        const explanation = await askGrokForSolution(question, correctAnswer, userAnswer);
        const box = document.createElement('div');
        box.className = 'grok-explanation';
        box.style.marginTop = '12px';
        box.innerHTML = `<div class="grok-header">🤖 <strong>Groq Açıklıyor</strong></div><div class="grok-body">${explanation.replace(/\n/g, '<br>')}</div>`;
        btn.replaceWith(box);
    };
    targetEl.appendChild(btn);
}

// ========== MODALLAR ==========
function openModal(id) {
    document.getElementById(id + 'Modal')?.classList.remove('hidden');
    if (id === 'api') document.getElementById('apiInp').value = ST.grokApiKey;
}
function closeModal(id) {
    document.getElementById(id + 'Modal')?.classList.add('hidden');
}
function saveKey() {
    const k = document.getElementById('apiInp')?.value?.trim();
    if (k) {
        ST.grokApiKey = k;
        localStorage.setItem('misyon_grok_api_key', k);
        closeModal('api');
        alert('✅ Groq API anahtarı kaydedildi!');
    }
}

function doReset(type) {
    if (type === 'all' && confirm('TÜM VERİLER SİLİNECEK! Emin misiniz?')) {
        const k = ST.grokApiKey;
        localStorage.clear();
        if (k) { localStorage.setItem('misyon_grok_api_key', k); ST.grokApiKey = k; }
        location.reload();
    } else if (type === 'course' && confirm(`${getCourseById(ST.currentCourse)?.n} dersi sıfırlansın mı?`)) {
        const course = getCourseById(ST.currentCourse);
        (course.units || []).forEach(u => { delete ST.unitProgress[u.id]; });
        ST.completedUnits = ST.completedUnits.filter(id => !(course.units || []).find(u => u.id === id));
        ST.completedCourses = ST.completedCourses.filter(id => id !== ST.currentCourse);
        saveState();
        renderCoursesList();
        alert('✅ Ders sıfırlandı!');
    } else if (type === 'unit' && confirm('Bu ünite sıfırlansın mı?')) {
        if (ST.currentUnit) {
            delete ST.unitProgress[ST.currentUnit];
            ST.completedUnits = ST.completedUnits.filter(id => id !== ST.currentUnit);
            saveState();
            renderUnitQuiz();
            alert('✅ Ünite sıfırlandı!');
        }
    }
}

// ========== BAŞLANGIÇ ==========
function startApp() {
    loadState();
    loadQuestions();
    updateDailyGoal();
    ST.currentView = 'vHome';
    history.replaceState({ view: 'vHome' }, '', '#/vHome');
    showView('vHome', false);
    console.log('✅ Misyon Koruma Motoru Aktif!');
}

window.addEventListener('popstate', (e) => showView(e.state?.view || 'vHome', false));
