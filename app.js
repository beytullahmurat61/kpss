// ============================================
// app.js - KPSS MATEMATİK ANA UYGULAMA
// Tek parça • Bölümlerle ayrılmış
// Versiyon: 2.0
// ============================================

console.log('🚀 app.js yükleniyor...');

// ============================================
// BÖLÜM 1: BAŞLANGIÇ & YARDIMCI FONKSİYONLAR
// ============================================

/**
 * Cevabı normalize eder (karşılaştırma için)
 * - Küçük harfe çevirir
 * - Boşlukları siler
 * - Virgülü noktaya çevirir
 * - ×, x işaretlerini * yapar
 * - Gereksiz birimleri siler
 */
function normAns(s) {
    return String(s)
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/,/g, '.')
        .replace(/[×x]/g, '*')
        .replace(/%|tl|lira|gün|saat|km|kg|gr|lt|ml|cm|m/g, '')
        .trim();
}

/**
 * Kullanıcı cevabı ile doğru cevabı karşılaştırır
 * - Birebir eşleşme
 * - Sayısal eşleşme (tolerans: 0.05)
 */
function checkEqual(userAns, correctAns) {
    const u = normAns(userAns);
    const c = normAns(correctAns);
    
    // Birebir eşleşme
    if (u === c) return true;
    
    // Sayısal eşleşme
    const un = parseFloat(u);
    const cn = parseFloat(c);
    if (!isNaN(un) && !isNaN(cn) && Math.abs(un - cn) < 0.05) return true;
    
    return false;
}

/**
 * String'i güvenli hale getirir (HTML attribute için)
 */
function esc(s) {
    return String(s)
        .replace(/'/g, "\\'")
        .replace(/"/g, '&quot;')
        .replace(/\n/g, ' ');
}

/**
 * Loading dots HTML'i döndürür
 */
function dots() {
    return '<div class="dots"><span></span><span></span><span></span></div>';
}

/**
 * Kutlama animasyonu gösterir
 * @param {string} msg - Gösterilecek mesaj
 * @param {number} duration - ms cinsinden süre (varsayılan: 1900)
 */
function celebrate(msg, duration = 1900) {
    const wrap = document.getElementById('celWrap');
    const txt = document.getElementById('celTxt');
    if (!wrap || !txt) return;
    
    txt.textContent = msg;
    wrap.classList.remove('hidden');
    
    setTimeout(() => {
        wrap.classList.add('hidden');
    }, duration);
}

/**
 * Rastgele tam sayı üretir (min ve max dahil)
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Basit seed bazlı random (denemeler için)
 * Aynı seed her zaman aynı sayı dizisini üretir
 */
function seededRandom(seed) {
    let s = seed;
    return function() {
        s = (s * 16807 + 0) % 2147483647;
        return (s - 1) / 2147483646;
    };
}

/**
 * Diziyi seed kullanarak karıştırır (Fisher-Yates)
 */
function shuffleWithSeed(arr, seed) {
    const shuffled = [...arr];
    const rng = seededRandom(seed);
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
}

/**
 * Bugünün tarihini YYYY-AA-GG formatında döndürür
 */
function todayStr() {
    return new Date().toISOString().split('T')[0];
}

// ============================================
// BÖLÜM 2: STATE (DURUM) YÖNETİMİ
// ============================================

/**
 * Ana durum nesnesi
 * localStorage'da saklanır, uygulama başlarken yüklenir
 */
let ST = {
    version: STATE_VERSION,
    apiKey: '',
    topic: 1,                    // Aktif konu ID'si
    currentLevel: 'KOLAY',       // Aktif seviye
    streak: 0,                   // Güncel seri
    maxStreak: 0,                // En iyi seri
    totalCorrect: 0,             // Toplam doğru
    totalQ: 0,                   // Toplam soru
    completedTopics: [],         // Bitirilen konu ID'leri
    
    // Her konunun geçmişi: { levels: { KOLAY: {correct, total, completed}, ... }, currentLevel }
    hist: {},
    
    // Soru bankası ilerlemesi: { topicId: { solved: [id1, id2, ...] } }
    questionBankProgress: {},
    
    // Deneme setleri: { setId: { seed, answers, net, date, completed } }
    examSets: {},
    
    // Deneme setlerinin jenerasyon numarası (5 bitince artar)
    examGeneration: 1,
    
    // Sınav geçmişi (eski sistemle uyumlu)
    examHistory: [],
    
    // API kullanım sayacı (günlük)
    apiCallCount: 0,
    apiCallDate: '',
    
    // Son oturum tarihi
    lastSession: null,
    
    // Anlık çalışma durumu
    phase: 'summary',            // 'summary' | 'question' | 'feedback' | 'pre-study'
    cq: null,                    // Current question objesi
    pendingAdvance: false,
    
    // Konu özetleri cache'i
    summaries: {}
};

/**
 * localStorage'dan durumu yükler
 * Versiyon kontrolü yapar, eski versiyonu taşır
 */
function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem(CONSTANTS.STORAGE_KEY) || '{}');
        
        // Versiyon kontrolü
        if (saved.version === STATE_VERSION) {
            Object.assign(ST, saved);
            console.log('✅ State yüklendi (v' + STATE_VERSION + ')');
        } else if (Object.keys(saved).length > 0) {
            // Eski versiyon - taşıma yap
            console.warn('⚠️ Eski state versiyonu, taşınıyor...');
            migrateState(saved);
        } else {
            console.log('ℹ️ Yeni state oluşturuldu');
        }
    } catch (e) {
        console.error('❌ State yüklenemedi:', e);
    }
    
    // API anahtarını ayrı kaydet
    ST.apiKey = localStorage.getItem(CONSTANTS.API_KEY_STORAGE) || '';
    
    // Eksik alanları tamamla
    initMissingFields();
    
    // API sayaç tarihini kontrol et
    checkApiDate();
}

/**
 * Eski versiyondan yeni versiyona veri taşır
 */
function migrateState(old) {
    // Temel alanları taşı
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

/**
 * Eksik alanları varsayılan değerlerle doldurur
 */
function initMissingFields() {
    // Hist başlatma
    for (let i = 1; i <= CONSTANTS.TOTAL_TOPICS; i++) {
        if (!ST.hist[i]) {
            ST.hist[i] = {
                levels: {},
                currentLevel: 'KOLAY'
            };
        }
    }
    
    // Soru bankası progress başlatma
    if (!ST.questionBankProgress) ST.questionBankProgress = {};
    
    // Deneme setleri başlatma
    if (!ST.examSets) ST.examSets = {};
    if (!ST.examGeneration) ST.examGeneration = 1;
    
    // API sayaç
    if (!ST.apiCallCount) ST.apiCallCount = 0;
    if (!ST.apiCallDate) ST.apiCallDate = '';
    
    // Özet cache
    if (!ST.summaries) ST.summaries = {};
}

/**
 * API günlük sayacını kontrol eder, yeni günse sıfırlar
 */
function checkApiDate() {
    const today = todayStr();
    if (ST.apiCallDate !== today) {
        ST.apiCallCount = 0;
        ST.apiCallDate = today;
    }
}

/**
 * Durumu localStorage'a kaydeder
 */
function saveState() {
    try {
        // Hassas/geçici verileri çıkar
        const { apiKey, cq, ...saveData } = ST;
        localStorage.setItem(CONSTANTS.STORAGE_KEY, JSON.stringify(saveData));
    } catch (e) {
        console.error('❌ State kaydedilemedi:', e);
    }
}

/**
 * Konu geçmişini döndürür (yoksa oluşturur)
 */
function getHist(topicId) {
    if (!ST.hist[topicId]) {
        ST.hist[topicId] = {
            levels: {},
            currentLevel: 'KOLAY'
        };
    }
    return ST.hist[topicId];
}

/**
 * Soru bankası ilerlemesini döndürür (yoksa oluşturur)
 */
function getQBProgress(topicId) {
    if (!ST.questionBankProgress[topicId]) {
        ST.questionBankProgress[topicId] = {
            solved: [],
            total: CONSTANTS.QUESTION_BANK_SIZE
        };
    }
    return ST.questionBankProgress[topicId];
}

// ============================================
// BÖLÜM 3: SAYFA GEÇİŞLERİ & HEADER
// ============================================

/** Aktif view'in ID'sini tutar */
let currentView = 'vHome';

/** Önceki view'lerin stack'i (geri butonu için) */
let viewStack = [];

/**
 * Belirtilen view'i gösterir
 * @param {string} id - Gösterilecek view'in ID'si
 * @param {boolean} addToStack - Geri stack'ine eklensin mi? (varsayılan: true)
 */
function showView(id, addToStack = true) {
    // Mevcut view'i gizle
    const currentEl = document.getElementById(currentView);
    if (currentEl) currentEl.classList.remove('active');
    
    // Stack'e ekle
    if (addToStack && currentView !== id) {
        viewStack.push(currentView);
        // Stack boyutunu sınırla (son 20)
        if (viewStack.length > 20) viewStack.shift();
    }
    
    // Yeni view'i göster
    const targetEl = document.getElementById(id);
    if (targetEl) {
        targetEl.classList.add('active');
        currentView = id;
    }
    
    // Header'ı güncelle
    updateHeader(id);
    
    // Sayfa başına kaydır
    window.scrollTo(0, 0);
}

/**
 * Header başlığını ve geri butonunu günceller
 */
function updateHeader(viewId) {
    const titleEl = document.getElementById('headerTitle');
    const backBtn = document.getElementById('btnBack');
    
    if (!titleEl || !backBtn) return;
    
    // View'e göre başlık
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
    
    // Ana sayfada geri butonu gizli
    if (viewId === 'vHome') {
        backBtn.style.visibility = 'hidden';
    } else {
        backBtn.style.visibility = 'visible';
    }
}

/**
 * Geri butonu işlevi
 */
window.goBack = function() {
    if (viewStack.length > 0) {
        const prevView = viewStack.pop();
        showView(prevView, false); // Stack'e tekrar ekleme
        
        // Özel durumlar
        if (prevView === 'vHome') {
            updateHomeStats();
        } else if (prevView === 'vTopics') {
            renderTopicsList();
        } else if (prevView === 'vStats') {
            renderStats();
        }
    }
};

/**
 * Ana sayfaya dön
 */
window.goHome = function() {
    viewStack = [];
    showView('vHome', false);
    updateHomeStats();
};

/**
 * Konu listesine git
 */
window.goTopics = function() {
    showView('vTopics');
    const done = ST.completedTopics.length;
    const el = document.getElementById('topicsDoneLabel');
    if (el) el.textContent = `${done}/${CONSTANTS.TOTAL_TOPICS}`;
    renderTopicsList();
};

/**
 * Soru bankası listesine git
 */
window.goQuestionBank = function() {
    showView('vQuestionBank');
    renderQuestionBankList();
};

/**
 * Deneme listesine git
 */
window.goExamList = function() {
    showView('vExamList');
    renderExamList();
};

/**
 * İstatistiklere git
 */
window.goStats = function() {
    showView('vStats');
    renderStats();
};

/**
 * Yan menüyü aç/kapat
 */
window.toggleMenu = function() {
    const menu = document.getElementById('sideMenu');
    if (menu) menu.classList.toggle('hidden');
    
    // API durumunu güncelle
    const statusEl = document.getElementById('apiStatusMini');
    if (statusEl) {
        statusEl.textContent = ST.apiKey ? '🟢' : '⚪';
    }
};

/**
 * API durumunu günceller (varsa)
 */
function updateApiStatus() {
    const el = document.getElementById('apiStatusMini');
    if (el) {
        el.textContent = ST.apiKey ? '🟢' : '⚪';
    }
}

// ============================================
// BÖLÜM 4: ANA SAYFA
// ============================================

/**
 * Ana sayfa istatistiklerini günceller
 */
function updateHomeStats() {
    const done = ST.completedTopics.length;
    const totalQ = ST.totalQ;
    const accuracy = ST.totalQ > 0 ? Math.round((ST.totalCorrect / ST.totalQ) * 100) : 0;
    const maxStreak = ST.maxStreak;
    
    // DOM elementlerini güncelle
    const el1 = document.getElementById('statTopics');
    const el2 = document.getElementById('statQuestions');
    const el3 = document.getElementById('statAccuracy');
    const el4 = document.getElementById('statStreak');
    
    if (el1) el1.textContent = done;
    if (el2) el2.textContent = totalQ;
    if (el3) el3.textContent = '%' + accuracy;
    if (el4) el4.textContent = maxStreak;
    
    // Sıradaki konu
    const nextTopic = TOPICS.find(t => !ST.completedTopics.includes(t.id));
    const badge = document.getElementById('nextTopicBadge');
    if (badge) {
        if (nextTopic) {
            badge.textContent = `🎯 Sıradaki: ${nextTopic.e} ${nextTopic.n}`;
            badge.style.display = '';
        } else {
            badge.textContent = '🏆 Tüm konular tamamlandı!';
            badge.style.display = '';
        }
    }
    
    // Yeni gün kontrolü
    const today = todayStr();
    if (ST.lastSession && ST.lastSession !== today) {
        // Yeni gün - opsiyonel bildirim
        console.log('📅 Yeni gün!');
    }
    ST.lastSession = today;
    saveState();
}

// ============================================
// BÖLÜM 5: KONU LİSTESİ
// ============================================

/**
 * Konu listesini render eder
 */
function renderTopicsList() {
    const el = document.getElementById('topicsList');
    if (!el) return;
    
    if (typeof TOPICS === 'undefined') {
        el.innerHTML = '<div class="err">Konular yüklenemedi. Sayfayı yenileyin.</div>';
        return;
    }
    
    let html = '';
    let lastPhase = '';
    
    TOPICS.forEach(t => {
        // Faz ayracı
        if (t.p !== lastPhase) {
            lastPhase = t.p;
            html += `<div class="phase-sep">${t.p}</div>`;
        }
        
        const isCompleted = ST.completedTopics.includes(t.id);
        const isCurrent = t.id === ST.topic;
        const currentTopic = getTopicById(ST.topic);
        const isLocked = t.order > (currentTopic?.order || 1) && !isCompleted;
        
        // İstatistik hesapla
        const hist = getHist(t.id);
        let totalCorrect = 0;
        let totalQuestions = 0;
        
        if (hist.levels) {
            Object.values(hist.levels).forEach(lv => {
                if (lv) {
                    totalCorrect += lv.correct || 0;
                    totalQuestions += lv.total || 0;
                }
            });
        }
        
        const acc = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : null;
        const progress = totalQuestions > 0 ? Math.min(100, Math.round((totalQuestions / CONSTANTS.QUESTIONS_PER_TOPIC) * 100)) : 0;
        
        // Sınıf belirle
        let cls = 'topic-row';
        if (isCompleted) cls += ' t-done';
        else if (isCurrent) cls += ' t-current';
        else if (isLocked) cls += ' t-locked';
        
        // İkon
        let statusIcon = '⭕';
        if (isCompleted) statusIcon = '✅';
        else if (isCurrent) statusIcon = '▶️';
        else if (isLocked) statusIcon = '🔒';
        
        html += `
            <div class="${cls}" ${isLocked ? '' : `onclick="openTopic(${t.id})"`}>
                <span class="t-icon">${t.e}</span>
                <div class="t-info">
                    <div class="t-name">${t.n}</div>
                    <div class="t-meta">KPSS: ${t.kpss}${acc !== null ? ` · %${acc} doğru` : ''}</div>
                    <div class="prog-bar-wrap">
                        <div class="prog-bar-bg">
                            <div class="prog-bar-fill fill-acc" style="width: ${progress}%"></div>
                        </div>
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

/**
 * Konuyu açar, özet sayfasını gösterir
 */
window.openTopic = function(topicId) {
    ST.topic = topicId;
    const hist = getHist(topicId);
    ST.currentLevel = hist.currentLevel || 'KOLAY';
    ST.phase = 'pre-study'; // Yeni: önce özet göster
    
    showView('vLearn');
    renderPreStudySummary();
    saveState();
};

/**
 * Konu başlamadan önce özet sayfası
 * API varsa Groq'dan özet çeker, yoksa formülleri gösterir
 */
function renderPreStudySummary() {
    const t = getTopicById(ST.topic);
    if (!t) return;
    
    setLearnHeader();
    
    const el = document.getElementById('learnContent');
    if (!el) return;
    
    // Önce loading göster
    el.innerHTML = `
        <div class="card">
            <h3>📖 ${t.n} - Konu Özeti</h3>
            ${dots()}
            <p style="text-align: center; color: var(--text-muted); font-size: 13px;">Konu özeti hazırlanıyor...</p>
        </div>
    `;
    
    // Cache'te varsa direkt göster
    if (ST.summaries[ST.topic]) {
        showPreStudySummary(ST.summaries[ST.topic]);
        return;
    }
    
    // API anahtarı varsa Groq'dan çek
    if (ST.apiKey && ST.apiCallCount < CONSTANTS.API_DAILY_LIMIT) {
        fetchTopicSummary(t).then(summary => {
            ST.summaries[ST.topic] = summary;
            saveState();
            showPreStudySummary(summary);
        }).catch(() => {
            // Hata durumunda formülleri göster
            showPreStudySummary(null);
        });
    } else {
        // API yoksa veya limit dolduysa formülleri göster
        setTimeout(() => showPreStudySummary(null), 500);
    }
}

/**
 * Özet sayfasını gösterir
 */
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
    
    // Her durumda formülleri göster
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
    
    // Seviye bilgisi
    const levelInfo = LEVELS[ST.currentLevel];
    const hist = getHist(ST.topic);
    const levelHist = hist.levels?.[ST.currentLevel] || { correct: 0, total: 0 };
    
    el.innerHTML = `
        ${summary ? summaryHTML : `
            <div class="card accent-top">
                <h3>📖 ${t.n}</h3>
                <p style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">
                    ${ST.apiKey ? 'Konu özeti yüklenemedi. Formülleri inceleyip başlayabilirsiniz.' : 'API anahtarı ekleyerek yapay zeka özeti alabilirsiniz.'}
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
                🎯 Geçmek için en az ${levelInfo.minCorrect} doğru yapmalısın (hedef %${Math.round((levelInfo.minCorrect / levelInfo.questionCount) * 100)})
            </p>
        </div>
        <div class="btn-row">
            <button class="btn btn-primary btn-full" onclick="beginStudy()">
                ✍️ Çalışmaya Başla
            </button>
        </div>
    `;
}

/**
 * Konu çalışmaya başla
 */
window.beginStudy = function() {
    ST.phase = 'question';
    ST.cq = null;
    window.scrollTo(0, 0);
    renderNextQuestion();
};

/**
 * Öğrenme header'ını günceller
 */
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

/**
 * Sıradaki soruyu render eder
 */
function renderNextQuestion() {
    if (typeof QUESTIONS === 'undefined') {
        document.getElementById('learnContent').innerHTML = 
            '<div class="err">Soru havuzu yüklenemedi. Lütfen sayfayı yenileyin.</div>';
        return;
    }
    
    const t = getTopicById(ST.topic);
    if (!t) return;
    
    const level = ST.currentLevel;
    const levelInfo = LEVELS[level];
    
    setLearnHeader();
    
    const el = document.getElementById('learnContent');
    if (!el) return;
    el.innerHTML = `<div class="card">${dots()} Soru hazırlanıyor...</div>`;
    
    // Soru havuzundan çek
    const qData = getStudyQuestion(ST.topic, level);
    
    if (!qData) {
        el.innerHTML = `
            <div class="card accent-top" style="text-align: center;">
                <h3>📭 Soru Kalmadı</h3>
                <p style="color: var(--text-muted); margin: 10px 0;">
                    ${level} seviyesinde çözülmemiş soru kalmadı.
                </p>
                <button class="btn btn-primary btn-full" onclick="resetLevelQuestions()">
                    🔄 Soruları Sıfırla ve Tekrar Başla
                </button>
            </div>
        `;
        return;
    }
    
    ST.cq = { ...qData, level: level };
    renderQuestionUI(qData, level, levelInfo);
}

/**
 * Konu çalış için soru getirir (daha önce çözülmemiş)
 */
function getStudyQuestion(topicId, level) {
    if (!QUESTIONS[topicId]) return null;
    if (!QUESTIONS[topicId].study) return null;
    
    const levelQuestions = QUESTIONS[topicId].study[level.toLowerCase()];
    if (!levelQuestions || levelQuestions.length === 0) return null;
    
    // Test modu: sadece 3 soru göster
    if (ST.testMode) {
        const hist = getHist(topicId);
        const levelHist = hist.levels?.[level] || { solvedIds: [] };
        const solved = levelHist.solvedIds || [];
        const available = levelQuestions.filter(q => !solved.includes(q.id));
        if (available.length === 0) return null;
        return available[Math.floor(Math.random() * available.length)];
    }
    
    // Normal mod: çözülmemiş sorulardan rastgele seç
    const hist = getHist(topicId);
    if (!hist.levels) hist.levels = {};
    if (!hist.levels[level]) hist.levels[level] = { correct: 0, total: 0, solvedIds: [] };
    
    const solved = hist.levels[level].solvedIds || [];
    const available = levelQuestions.filter(q => !solved.includes(q.id));
    
    if (available.length === 0) return null;
    
    return available[Math.floor(Math.random() * available.length)];
}

/**
 * Soru arayüzünü oluşturur
 */
function renderQuestionUI(q, level, levelInfo) {
    const hist = getHist(ST.topic);
    const levelHist = hist.levels?.[level] || { correct: 0, total: 0 };
    
    const zorlukClass = q.z === 'kolay' ? 'badge-grn' : q.z === 'zor' ? 'badge-red' : 'badge-warn';
    const zorlukText = q.z || 'orta';
    
    const el = document.getElementById('learnContent');
    if (!el) return;
    
    el.innerHTML = `
        <div class="prog-bar-wrap">
            <div class="prog-bar-label">
                <span>📊 ${levelInfo.name} Seviye</span>
                <span>${levelHist.correct || 0}/${levelHist.total || 0} doğru</span>
            </div>
            <div class="prog-bar-bg">
                <div class="prog-bar-fill fill-grn" style="width: ${((levelHist.total || 0) / levelInfo.questionCount) * 100}%"></div>
            </div>
        </div>
        
        <div class="card accent-top" id="qCard">
            <div class="q-header">
                <span class="q-counter">Soru ${(levelHist.total || 0) + 1}/${levelInfo.questionCount}</span>
                <div class="q-tags">
                    <span class="badge ${zorlukClass}">${zorlukText}</span>
                    <span class="badge badge-acc">${levelInfo.name}</span>
                </div>
            </div>
            <div class="q-text">${q.s.replace(/\n/g, '<br>')}</div>
            <div class="ans-row">
                <input id="ansInp" class="ans-inp" type="text" 
                    placeholder="Cevabını yaz..." autocomplete="off" 
                    onkeydown="if(event.key==='Enter') checkAnswer()">
                <button class="btn btn-primary" onclick="checkAnswer()">✓</button>
            </div>
            <div class="ans-hint">Sayı, kesir (3/4) veya birim ile yaz → Enter veya ✓</div>
        </div>
        
        <div class="ask-section">
            <button class="ask-toggle" onclick="toggleAsk()">
                🤖 Anlamadım — Öğretmene sor
            </button>
            <div class="ask-form" id="askForm">
                <input id="askInp" class="ask-inp" type="text" 
                    placeholder="Ne anlamadın?" 
                    onkeydown="if(event.key==='Enter') sendAsk()">
                <button class="btn btn-primary" onclick="sendAsk()">Sor</button>
            </div>
            <div class="ask-result" id="askResult"></div>
        </div>
    `;
    
    // Input'a odaklan
    setTimeout(() => {
        const inp = document.getElementById('ansInp');
        if (inp) inp.focus();
    }, 100);
}

/**
 * Cevabı kontrol eder
 */
window.checkAnswer = async function() {
    const inp = document.getElementById('ansInp');
    if (!inp || !inp.value.trim()) return;
    
    const userAns = inp.value.trim();
    inp.disabled = true;
    
    const q = ST.cq;
    if (!q) {
        alert('Hata: Soru yüklenemedi!');
        return;
    }
    
    const level = ST.currentLevel;
    const isCorrect = checkEqual(userAns, q.c);
    
    // Hist güncelle
    const hist = getHist(ST.topic);
    if (!hist.levels) hist.levels = {};
    if (!hist.levels[level]) hist.levels[level] = { correct: 0, total: 0, solvedIds: [] };
    
    const levelData = hist.levels[level];
    levelData.total = (levelData.total || 0) + 1;
    if (isCorrect) levelData.correct = (levelData.correct || 0) + 1;
    if (!levelData.solvedIds) levelData.solvedIds = [];
    levelData.solvedIds.push(q.id);
    
    // Genel istatistik güncelle
    ST.totalQ++;
    if (isCorrect) {
        ST.totalCorrect++;
        ST.streak++;
        if (ST.streak > ST.maxStreak) ST.maxStreak = ST.streak;
        
        // Seri kutlaması
        if (CONSTANTS.MAX_STREAK_CELEBRATE.includes(ST.streak)) {
            celebrate(`🔥 ${ST.streak} Art Arda Doğru!`);
        }
    } else {
        ST.streak = 0;
    }
    
    // Test modunda seviye kontrolünü basitleştir
    const questionLimit = ST.testMode ? 3 : LEVELS[level].questionCount;
    const minCorrect = ST.testMode ? 2 : LEVELS[level].minCorrect;
    
    let levelCompleted = false;
    let levelFailed = false;
    let nextLevel = null;
    
    if (levelData.total >= questionLimit) {
        if (levelData.correct >= minCorrect) {
            levelCompleted = true;
            levelData.completed = true;
            nextLevel = getNextLevel(level);
            
            if (nextLevel) {
                ST.currentLevel = nextLevel;
                hist.currentLevel = nextLevel;
            } else {
                // Tüm seviyeler bitti
                if (!ST.completedTopics.includes(ST.topic)) {
                    ST.completedTopics.push(ST.topic);
                }
                celebrate('🏆 Konu Tamamlandı!');
            }
        } else {
            levelFailed = true;
            // Seviyeyi sıfırla
            levelData.correct = 0;
            levelData.total = 0;
            levelData.solvedIds = [];
            levelData.completed = false;
        }
    }
    
    saveState();
    ST.phase = 'feedback';
    
    // Feedback mesajı
    let nextMessage = '';
    if (levelCompleted) {
        if (nextLevel) {
            nextMessage = `
                <div style="margin-top: 12px; padding: 10px; background: var(--success-bg); border-radius: var(--radius-sm); text-align: center;">
                    🎉 <strong>${LEVELS[level].name} Seviyesini Geçtin!</strong><br>
                    → ${LEVELS[nextLevel].name} Seviyesine geçiyorsun.
                </div>
            `;
        } else {
            nextMessage = `
                <div style="margin-top: 12px; padding: 10px; background: var(--success-bg); border-radius: var(--radius-sm); text-align: center;">
                    🏆 <strong>Konuyu Tamamladın!</strong><br>
                    Tüm seviyeleri geçtin. Tebrikler!
                </div>
            `;
        }
    } else if (levelFailed) {
        nextMessage = `
            <div style="margin-top: 12px; padding: 10px; background: var(--danger-bg); border-radius: var(--radius-sm); text-align: center;">
                ⚠️ <strong>Başarısız!</strong><br>
                ${LEVELS[level].name} seviyesini geçemedin. Seviye sıfırlandı, tekrar başla.
            </div>
        `;
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
                ${isCorrect 
                    ? `Cevap: <strong>${q.c}</strong>` 
                    : `Doğru cevap: <strong>${q.c}</strong>${q.cozum ? `<br><br>📖 ${q.cozum}` : ''}`
                }
            </div>
            ${nextMessage}
            <div class="btn-row" style="margin-top: 12px;">
                <button class="btn btn-ghost btn-full" onclick="nextQuestion()">
                    Sonraki Soru →
                </button>
            </div>
        </div>
    `;
    
    // Feedback'e kaydır
    const fbEl = el.querySelector('.fb:last-child');
    if (fbEl) fbEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

/**
 * Sonraki soruya geç
 */
window.nextQuestion = function() {
    ST.phase = 'question';
    ST.cq = null;
    window.scrollTo(0, 0);
    renderNextQuestion();
};

/**
 * Seviye sorularını sıfırla (tekrar başla)
 */
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

/**
 * Groq API'den konu özeti getirir
 */
async function fetchTopicSummary(topic) {
    checkApiDate();
    
    if (ST.apiCallCount >= CONSTANTS.API_DAILY_LIMIT) {
        throw new Error('Günlük API limiti doldu');
    }
    
    ST.apiCallCount++;
    saveState();
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + ST.apiKey
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
                {
                    role: 'system',
                    content: `Sen bir KPSS matematik öğretmenisin. 
                    Öğrenciye "${topic.n}" konusunun kısa bir özetini ver.
                    Kurallar:
                    - En fazla 150 kelime
                    - Türkçe, açık ve net
                    - Önemli formülleri madde madde yaz
                    - KPSS'de bu konudan kaç soru çıktığını belirt
                    - Sadece düz metin, markdown kullanma`
                },
                {
                    role: 'user',
                    content: `${topic.n} konusunu kısaca özetler misin? KPSS'de ${topic.kpss} çıkıyor.`
                }
            ],
            temperature: 0.5,
            max_tokens: 500
        })
    });
    
    if (!response.ok) {
        throw new Error('API yanıt vermedi: ' + response.status);
    }
    
    const data = await response.json();
    return data?.choices?.[0]?.message?.content?.trim() || null;
}

/**
 * Öğretmene sor bölümünü aç/kapat
 */
window.toggleAsk = function() {
    const el = document.getElementById('askForm');
    if (el) el.classList.toggle('open');
    
    const inp = document.getElementById('askInp');
    if (inp) inp.focus();
};

/**
 * Öğretmene soru sor
 */
window.sendAsk = async function() {
    const inp = document.getElementById('askInp');
    const question = inp?.value?.trim();
    if (!question) return;
    
    inp.value = '';
    inp.disabled = true;
    
    const resultEl = document.getElementById('askResult');
    if (resultEl) {
        resultEl.classList.add('open');
        resultEl.innerHTML = `${dots()} Öğretmen düşünüyor...`;
    }
    
    // API kontrolü
    if (!ST.apiKey) {
        if (resultEl) {
            resultEl.innerHTML = '⚠️ Lütfen önce API anahtarınızı girin. (Menü → API Anahtarı)';
        }
        inp.disabled = false;
        return;
    }
    
    checkApiDate();
    if (ST.apiCallCount >= CONSTANTS.API_DAILY_LIMIT) {
        if (resultEl) {
            resultEl.innerHTML = '⚠️ Günlük soru sorma limitiniz doldu. Yarın tekrar deneyin.';
        }
        inp.disabled = false;
        return;
    }
    
    ST.apiCallCount++;
    saveState();
    
    try {
        const t = getTopicById(ST.topic);
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + ST.apiKey
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    {
                        role: 'system',
                        content: `Sen bir KPSS matematik öğretmenisin. 
                        Türkçe, net ve kısa cevap ver. En fazla 120 kelime.
                        Öğrencinin seviyesine uygun anlat.`
                    },
                    {
                        role: 'user',
                        content: `Konu: ${t?.n || 'Matematik'}
                        Mevcut soru: ${ST.cq?.s || ''}
                        Öğrencinin sorusu: ${question}`
                    }
                ],
                temperature: 0.7,
                max_tokens: 600
            })
        });
        
        const data = await response.json();
        const answer = data?.choices?.[0]?.message?.content?.trim() || 'Cevap alınamadı.';
        
        if (resultEl) {
            resultEl.innerHTML = answer.replace(/\n/g, '<br>');
        }
    } catch (e) {
        if (resultEl) {
            resultEl.innerHTML = '❌ Bir hata oluştu. Lütfen internet bağlantınızı ve API anahtarınızı kontrol edin.';
        }
    }
    
    inp.disabled = false;
};

// ============================================
// BÖLÜM 8: SORU BANKASI
// ============================================

/**
 * Soru bankası konu listesini render eder
 */
function renderQuestionBankList() {
    const el = document.getElementById('qbTopicsList');
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
                    <div class="t-meta">Soru Bankası · ${isComplete ? '✅ Tamamlandı' : `${solved}/${total} çözüldü`}</div>
                    <div class="prog-bar-wrap">
                        <div class="prog-bar-bg">
                            <div class="prog-bar-fill fill-acc" style="width: ${pct}%"></div>
                        </div>
                    </div>
                </div>
                <span style="font-size: 18px;">${isComplete ? '✅' : '📝'}</span>
            </div>
        `;
    });
    
    el.innerHTML = html;
}

/**
 * Soru bankasına başla
 */
window.startQuestionBank = function(topicId) {
    // Çözülmemiş soru var mı kontrol et
    if (typeof QUESTIONS === 'undefined' || !QUESTIONS[topicId]) {
        alert('Bu konu için soru havuzu henüz yüklenmedi.');
        return;
    }
    
    const progress = getQBProgress(topicId);
    const bankQuestions = QUESTIONS[topicId].bank || [];
    
    if (progress.solved.length >= bankQuestions.length) {
        // Hepsi çözüldü
        alert('🎉 Bu konunun soru bankasındaki tüm soruları çözdün! Sıfırlamak için istatistiklerden ilerlemeyi sıfırlayabilirsin.');
        return;
    }
    
    ST.topic = topicId;
    ST.qbIndex = 0;
    ST.qbTotal = CONSTANTS.QUESTION_BANK_SIZE;
    
    showView('vQBSolve');
    renderQBSolveHeader();
    renderNextQBQuestion();
};

/**
 * Soru bankası çözme header'ını günceller
 */
function renderQBSolveHeader() {
    const t = getTopicById(ST.topic);
    const progress = getQBProgress(ST.topic);
    
    const titleEl = document.getElementById('qbSolveTitle');
    const progressEl = document.getElementById('qbSolveProgress');
    
    if (titleEl) titleEl.textContent = `📝 ${t?.n || 'Soru Bankası'}`;
    if (progressEl) progressEl.textContent = `${progress.solved.length}/${CONSTANTS.QUESTION_BANK_SIZE}`;
}

/**
 * Sıradaki soru bankası sorusunu render eder
 */
function renderNextQBQuestion() {
    const topicId = ST.topic;
    const t = getTopicById(topicId);
    if (!t) return;
    
    const progress = getQBProgress(topicId);
    const bankQuestions = QUESTIONS[topicId]?.bank || [];
    
    const el = document.getElementById('qbSolveContent');
    if (!el) return;
    
    // Test modu: 10 soru
    const limit = ST.testMode ? 10 : CONSTANTS.QUESTION_BANK_SIZE;
    
    if (progress.solved.length >= Math.min(limit, bankQuestions.length)) {
        el.innerHTML = `
            <div class="card accent-top" style="text-align: center;">
                <h3>🎉 Soru Bankası Tamamlandı!</h3>
                <p style="color: var(--text-muted); margin: 10px 0;">
                    ${t.n} konusundaki tüm soruları çözdün.
                </p>
                <p style="font-size: 24px; font-weight: 700; color: var(--accent);">
                    ${progress.solved.length}/${limit}
                </p>
                <div class="btn-row" style="margin-top: 12px;">
                    <button class="btn btn-primary btn-full" onclick="goQuestionBank()">
                        📝 Konu Listesine Dön
                    </button>
                </div>
            </div>
        `;
        return;
    }
    
    // Çözülmemiş rastgele soru bul
    const available = bankQuestions.filter(q => !progress.solved.includes(q.id));
    if (available.length === 0) {
        el.innerHTML = '<div class="err">Çözülmemiş soru bulunamadı.</div>';
        return;
    }
    
    const q = available[Math.floor(Math.random() * available.length)];
    ST.cq = { ...q, topicId: topicId, mode: 'questionBank' };
    
    const zorlukClass = q.z === 'kolay' ? 'badge-grn' : q.z === 'zor' ? 'badge-red' : 'badge-warn';
    
    el.innerHTML = `
        <div class="prog-bar-wrap">
            <div class="prog-bar-label">
                <span>📝 ${t.n} Soru Bankası</span>
                <span>${progress.solved.length}/${limit}</span>
            </div>
            <div class="prog-bar-bg">
                <div class="prog-bar-fill fill-acc" style="width: ${(progress.solved.length / limit) * 100}%"></div>
            </div>
        </div>
        
        <div class="card accent-top">
            <div class="q-header">
                <span class="q-counter">Soru ${progress.solved.length + 1}</span>
                <div class="q-tags">
                    <span class="badge ${zorlukClass}">${q.z || 'orta'}</span>
                    <span class="badge badge-acc">${t.n}</span>
                </div>
            </div>
            <div class="q-text">${q.s.replace(/\n/g, '<br>')}</div>
            <div class="ans-row">
                <input id="qbAnsInp" class="ans-inp" type="text" 
                    placeholder="Cevabını yaz..." autocomplete="off"
                    onkeydown="if(event.key==='Enter') checkQBAnswer()">
                <button class="btn btn-primary" onclick="checkQBAnswer()">✓</button>
            </div>
            <button class="btn btn-ghost btn-full" style="margin-top: 8px;" 
                onclick="skipQBQuestion()">
                Boş Bırak →
            </button>
        </div>
    `;
    
    setTimeout(() => {
        const inp = document.getElementById('qbAnsInp');
        if (inp) inp.focus();
    }, 100);
}

/**
 * Soru bankası cevap kontrolü
 */
window.checkQBAnswer = function() {
    const inp = document.getElementById('qbAnsInp');
    if (!inp || !inp.value.trim()) return;
    
    const userAns = inp.value.trim();
    inp.disabled = true;
    
    const q = ST.cq;
    if (!q) return;
    
    const isCorrect = checkEqual(userAns, q.c);
    
    // Progress güncelle
    const progress = getQBProgress(q.topicId || ST.topic);
    if (!progress.solved.includes(q.id)) {
        progress.solved.push(q.id);
    }
    
    // Genel istatistik
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
    if (!el) return;
    
    el.innerHTML += `
        <div class="fb ${isCorrect ? 'fb-ok' : 'fb-fail'}">
            <div class="fb-head">
                <span class="fb-icon">${isCorrect ? '🎉' : '❌'}</span>
                <span class="fb-title">${isCorrect ? 'Doğru!' : 'Yanlış'}</span>
            </div>
            <div class="fb-body">
                ${isCorrect 
                    ? `Cevap: <strong>${q.c}</strong>` 
                    : `Doğru cevap: <strong>${q.c}</strong>${q.cozum ? `<br><br>📖 ${q.cozum}` : ''}`
                }
            </div>
            <div class="btn-row" style="margin-top: 12px;">
                <button class="btn btn-ghost btn-full" onclick="nextQBQuestion()">
                    Sonraki Soru →
                </button>
            </div>
        </div>
    `;
    
    const fbEl = el.querySelector('.fb:last-child');
    if (fbEl) fbEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

/**
 * Soru bankası sorusunu boş bırak
 */
window.skipQBQuestion = function() {
    const q = ST.cq;
    if (!q) return;
    
    const progress = getQBProgress(q.topicId || ST.topic);
    if (!progress.solved.includes(q.id)) {
        progress.solved.push(q.id);
    }
    
    saveState();
    renderQBSolveHeader();
    nextQBQuestion();
};

/**
 * Sonraki soru bankası sorusu
 */
window.nextQBQuestion = function() {
    ST.cq = null;
    window.scrollTo(0, 0);
    renderNextQBQuestion();
};

// ============================================
// BÖLÜM 9: DENEME SINAVI
// ============================================

/**
 * Deneme listesini render eder
 */
function renderExamList() {
    const el = document.getElementById('examListContent');
    if (!el) return;
    
    // Deneme setlerini başlat (yoksa)
    if (Object.keys(ST.examSets).length === 0) {
        initExamSets();
    }
    
    let html = '';
    
    for (let i = 1; i <= CONSTANTS.EXAM_SETS; i++) {
        const setId = 'set_' + i;
        const setData = ST.examSets[setId] || { completed: false, net: null, date: null };
        
        const isCompleted = setData.completed;
        const net = setData.net;
        const date = setData.date;
        
        html += `
            <div class="exam-set-card" onclick="startExamSet('${setId}')">
                <div class="exam-set-info">
                    <h3>📋 Deneme ${i}</h3>
                    <span>20 soru · 20 dakika</span>
                </div>
                <div class="exam-set-score">
                    ${isCompleted 
                        ? `<div class="net">${net}</div><div class="date">${date || ''}</div>` 
                        : '<span class="badge">Başla</span>'
                    }
                </div>
            </div>
        `;
    }
    
    // Tümü tamamlandıysa bilgi mesajı
    const allCompleted = Object.values(ST.examSets).every(s => s.completed);
    if (allCompleted) {
        html += `
            <div style="margin-top: 16px; text-align: center;">
                <p style="color: var(--success); margin-bottom: 10px;">
                    🎉 Tüm denemeleri tamamladın!
                </p>
                <button class="btn btn-primary btn-full" onclick="resetAllExams()">
                    🔄 Tüm Denemeleri Sıfırla (Yeni Sorular)
                </button>
            </div>
        `;
    }
    
    el.innerHTML = html;
}

/**
 * Deneme setlerini başlatır
 */
function initExamSets() {
    for (let i = 1; i <= CONSTANTS.EXAM_SETS; i++) {
        const setId = 'set_' + i;
        if (!ST.examSets[setId]) {
            ST.examSets[setId] = {
                seed: EXAM_SEEDS[i - 1] + (ST.examGeneration - 1) * 100,
                completed: false,
                answers: [],
                net: null,
                date: null
            };
        }
    }
    saveState();
}

/**
 * Deneme setini başlat
 */
window.startExamSet = function(setId) {
    const setData = ST.examSets[setId];
    if (!setData) return;
    
    // Eğer tamamlandıysa ve tekrar başlatılıyorsa onay al
    if (setData.completed) {
        if (!confirm('Bu denemeyi daha önce bitirdiniz. Tekrar başlatmak istiyor musunuz? Sonuç kaydedilmeyecek.')) {
            return;
        }
    }
    
    // Soruları seed ile oluştur
    const questions = generateExamQuestions(setData.seed);
    
    // Sınav state'ini başlat
    ST.currentExam = {
        setId: setId,
        questions: questions,
        currentIndex: 0,
        answers: [],
        timeLeft: CONSTANTS.EXAM_DURATION * 60,
        timer: null
    };
    
    showView('vExam');
    document.getElementById('examTitle').textContent = `Deneme ${setId.replace('set_', '')}`;
    updateExamTimer();
    startExamTimer();
    loadExamQuestion(0);
};

/**
 * Seed ile deneme sorularını oluşturur
 */
function generateExamQuestions(seed) {
    const allQuestions = [];
    
    // Tüm konulardan soruları topla
    TOPICS.forEach(t => {
        const qData = QUESTIONS[t.id];
        if (!qData) return;
        
        // Soru bankasından al
        const bank = qData.bank || [];
        bank.forEach(q => {
            allQuestions.push({ ...q, topicId: t.id, topicName: t.n });
        });
        
        // Study sorularından da al
        if (qData.study) {
            Object.values(qData.study).forEach(levelQs => {
                levelQs.forEach(q => {
                    allQuestions.push({ ...q, topicId: t.id, topicName: t.n });
                });
            });
        }
    });
    
    // Seed ile karıştır ve ilk 20'yi al
    const shuffled = shuffleWithSeed(allQuestions, seed);
    const testModeLimit = ST.testMode ? 5 : CONSTANTS.EXAM_QUESTIONS;
    return shuffled.slice(0, testModeLimit);
}

/**
 * Sınav sayacını başlatır
 */
function startExamTimer() {
    if (ST.currentExam.timer) clearInterval(ST.currentExam.timer);
    
    ST.currentExam.timer = setInterval(() => {
        ST.currentExam.timeLeft--;
        updateExamTimer();
        
        if (ST.currentExam.timeLeft <= 0) {
            clearInterval(ST.currentExam.timer);
            finishExam();
        }
    }, 1000);
}

/**
 * Sınav sayacını günceller
 */
function updateExamTimer() {
    const el = document.getElementById('examTimer');
    if (!el) return;
    
    const minutes = Math.floor(ST.currentExam.timeLeft / 60);
    const seconds = ST.currentExam.timeLeft % 60;
    
    el.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Son 1 dakika kırmızı
    if (ST.currentExam.timeLeft <= 60) {
        el.style.color = 'var(--danger)';
    }
}

/**
 * Deneme sorusu yükler
 */
function loadExamQuestion(index) {
    if (index >= ST.currentExam.questions.length) {
        finishExam();
        return;
    }
    
    ST.currentExam.currentIndex = index;
    const q = ST.currentExam.questions[index];
    
    const el = document.getElementById('examContent');
    if (!el) return;
    
    const zorlukClass = q.z === 'kolay' ? 'badge-grn' : q.z === 'zor' ? 'badge-red' : 'badge-warn';
    
    el.innerHTML = `
        <div class="card accent-top">
            <div class="q-header">
                <span class="q-counter">Soru ${index + 1}/${ST.currentExam.questions.length}</span>
                <div class="q-tags">
                    <span class="badge ${zorlukClass}">${q.z || 'orta'}</span>
                    <span class="badge badge-acc">${q.topicName || ''}</span>
                </div>
            </div>
            <div class="q-text">${q.s.replace(/\n/g, '<br>')}</div>
            <div class="ans-row">
                <input id="examAnsInp" class="ans-inp" type="text" 
                    placeholder="Cevabını yaz..." autocomplete="off"
                    onkeydown="if(event.key==='Enter') submitExamAnswer()">
                <button class="btn btn-primary" onclick="submitExamAnswer()">✓</button>
            </div>
            <button class="btn btn-ghost btn-full" style="margin-top: 8px;" 
                onclick="skipExamAnswer()">
                Boş Bırak →
            </button>
        </div>
    `;
    
    setTimeout(() => {
        const inp = document.getElementById('examAnsInp');
        if (inp) inp.focus();
    }, 100);
}

/**
 * Deneme cevabını gönder
 */
window.submitExamAnswer = function() {
    const inp = document.getElementById('examAnsInp');
    const userAns = inp?.value?.trim() || '';
    
    const q = ST.currentExam.questions[ST.currentExam.currentIndex];
    const isCorrect = checkEqual(userAns, q.c);
    
    ST.currentExam.answers.push({
        questionId: q.id,
        topicName: q.topicName,
        correctAnswer: q.c,
        userAnswer: userAns,
        isCorrect: isCorrect,
        skipped: false
    });
    
    loadExamQuestion(ST.currentExam.currentIndex + 1);
};

/**
 * Deneme sorusunu boş bırak
 */
window.skipExamAnswer = function() {
    const q = ST.currentExam.questions[ST.currentExam.currentIndex];
    
    ST.currentExam.answers.push({
        questionId: q.id,
        topicName: q.topicName,
        correctAnswer: q.c,
        userAnswer: '',
        isCorrect: false,
        skipped: true
    });
    
    loadExamQuestion(ST.currentExam.currentIndex + 1);
};

/**
 * Sınavı bitir
 */
function finishExam() {
    if (ST.currentExam.timer) {
        clearInterval(ST.currentExam.timer);
    }
    
    const exam = ST.currentExam;
    const answers = exam.answers;
    
    const dogru = answers.filter(a => a.isCorrect).length;
    const yanlis = answers.filter(a => !a.isCorrect && !a.skipped).length;
    const bos = answers.filter(a => a.skipped).length;
    const net = (dogru - yanlis * 0.25).toFixed(2);
    
    // Set verisini güncelle
    const setData = ST.examSets[exam.setId];
    if (setData && !setData.completed) {
        setData.completed = true;
        setData.answers = answers;
        setData.net = net;
        setData.date = todayStr();
    }
    
    // Sınav geçmişine ekle
    ST.examHistory.push({
        type: `Deneme ${exam.setId.replace('set_', '')}`,
        net: net,
        date: todayStr()
    });
    
    // Tüm denemeler bitti mi kontrol et
    const allCompleted = Object.values(ST.examSets).every(s => s.completed);
    if (allCompleted) {
        // Yeni jenerasyon
        ST.examGeneration++;
        Object.keys(ST.examSets).forEach((setId, index) => {
            ST.examSets[setId] = {
                seed: EXAM_SEEDS[index] + (ST.examGeneration - 1) * 100,
                completed: false,
                answers: [],
                net: null,
                date: null
            };
        });
    }
    
    saveState();
    ST.currentExam = null;
    
    // Yanlış listesi
    const wrongList = answers.filter(a => !a.isCorrect && !a.skipped).slice(0, 3);
    
    const el = document.getElementById('examContent');
    if (!el) return;
    
    el.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 6px;">
                Deneme ${exam.setId.replace('set_', '')} Sonucu
            </div>
            <div class="net-num">${net}</div>
            <div class="net-lbl">Net</div>
            
            <div class="stat-grid">
                <div class="stat-cell">
                    <div class="stat-num" style="color: var(--success);">${dogru}</div>
                    <div class="stat-lbl">Doğru</div>
                </div>
                <div class="stat-cell">
                    <div class="stat-num" style="color: var(--danger);">${yanlis}</div>
                    <div class="stat-lbl">Yanlış</div>
                </div>
                <div class="stat-cell">
                    <div class="stat-num" style="color: var(--text-muted);">${bos}</div>
                    <div class="stat-lbl">Boş</div>
                </div>
                <div class="stat-cell">
                    <div class="stat-num" style="color: var(--warning);">${exam.questions.length}</div>
                    <div class="stat-lbl">Toplam</div>
                </div>
            </div>
            
            ${wrongList.length > 0 ? `
                <div class="card" style="text-align: left; margin-top: 14px;">
                    <h3>Yanlış Yaptıkların</h3>
                    ${wrongList.map(a => `
                        <div class="weak-row">
                            <span class="weak-name">${a.topicName}</span>
                            <span class="badge badge-red">❌ ${a.userAnswer || 'boş'} → ${a.correctAnswer}</span>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            
            <div class="btn-row" style="margin-top: 16px;">
                <button class="btn btn-primary btn-full" onclick="startExamSet('${exam.setId}')">
                    🔄 Tekrar Dene
                </button>
                <button class="btn btn-ghost btn-full" onclick="goExamList()">
                    Deneme Listesine Dön
                </button>
            </div>
        </div>
    `;
}

/**
 * Sınavı iptal et
 */
window.cancelExam = function() {
    if (ST.currentExam?.timer) {
        clearInterval(ST.currentExam.timer);
    }
    
    if (confirm('Sınavı iptal etmek istediğinize emin misiniz? İlerlemeniz kaydedilmeyecek.')) {
        ST.currentExam = null;
        goExamList();
    }
};

/**
 * Tüm denemeleri sıfırla
 */
window.resetAllExams = function() {
    if (!confirm('Tüm deneme setleri sıfırlanacak. Yeni sorularla tekrar başlayacaksınız. Onaylıyor musunuz?')) return;
    
    ST.examGeneration++;
    Object.keys(ST.examSets).forEach((setId, index) => {
        ST.examSets[setId] = {
            seed: EXAM_SEEDS[index] + (ST.examGeneration - 1) * 100,
            completed: false,
            answers: [],
            net: null,
            date: null
        };
    });
    
    saveState();
    renderExamList();
    alert('✅ Denemeler sıfırlandı! Yeni sorular yüklendi.');
};

// ============================================
// BÖLÜM 10: İSTATİSTİKLER
// ============================================

/**
 * İstatistik sayfasını render eder
 */
function renderStats() {
    const el = document.getElementById('statsContent');
    if (!el) return;
    
    const done = ST.completedTopics.length;
    const totalQ = ST.totalQ;
    const accuracy = totalQ > 0 ? Math.round((ST.totalCorrect / totalQ) * 100) : 0;
    
    // Tahmini KPSS neti
    const estNet = Math.min(30, Math.round(done * 0.55 + accuracy / 14));
    
    // Zayıf konular
    const weakTopics = [];
    TOPICS.forEach(t => {
        const hist = getHist(t.id);
        let totalCorrect = 0;
        let totalQuestions = 0;
        
        if (hist.levels) {
            Object.values(hist.levels).forEach(lv => {
                if (lv) {
                    totalCorrect += lv.correct || 0;
                    totalQuestions += lv.total || 0;
                }
            });
        }
        
        if (totalQuestions >= 5) {
            const pct = Math.round((totalCorrect / totalQuestions) * 100);
            if (pct < 70) {
                weakTopics.push({ name: t.n, pct: pct, total: totalQuestions, id: t.id });
            }
        }
    });
    weakTopics.sort((a, b) => a.pct - b.pct);
    const topWeak = weakTopics.slice(0, 5);
    
    // Son sınavlar
    const recentExams = ST.examHistory.slice(-5).reverse();
    
    // Soru bankası ilerlemesi
    let totalQBSolved = 0;
    let totalQBAvailable = 0;
    Object.keys(ST.questionBankProgress).forEach(topicId => {
        const progress = ST.questionBankProgress[topicId];
        totalQBSolved += progress.solved.length;
        totalQBAvailable += CONSTANTS.QUESTION_BANK_SIZE;
    });
    
    el.innerHTML = `
        <div class="net-box">
            <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 6px;">Tahmini KPSS Netin</div>
            <div class="net-num">${estNet}</div>
            <div class="net-lbl">${done === CONSTANTS.TOTAL_TOPICS ? 'Tüm konular bitti! 🏆' : 'Konuları tamamladıkça artacak'}</div>
        </div>
        
        <div class="stat-grid">
            <div class="stat-cell">
                <div class="stat-num" style="color: var(--accent);">${done}</div>
                <div class="stat-lbl">Konu Bitti</div>
            </div>
            <div class="stat-cell">
                <div class="stat-num" style="color: var(--danger);">${totalQ}</div>
                <div class="stat-lbl">Toplam Soru</div>
            </div>
            <div class="stat-cell">
                <div class="stat-num" style="color: var(--success);">%${accuracy}</div>
                <div class="stat-lbl">Doğruluk</div>
            </div>
            <div class="stat-cell">
                <div class="stat-num" style="color: var(--warning);">${ST.maxStreak}</div>
                <div class="stat-lbl">En İyi Seri</div>
            </div>
        </div>
        
        <!-- Genel İlerleme -->
        <div class="card">
            <h3>Genel İlerleme</h3>
            <div class="prog-bar-wrap">
                <div class="prog-bar-label">
                    <span>Tamamlanan Konular</span>
                    <span>${done}/${CONSTANTS.TOTAL_TOPICS}</span>
                </div>
                <div class="prog-bar-bg">
                    <div class="prog-bar-fill fill-acc" style="width: ${Math.round((done / CONSTANTS.TOTAL_TOPICS) * 100)}%"></div>
                </div>
            </div>
            
            <div class="prog-bar-wrap" style="margin-top: 12px;">
                <div class="prog-bar-label">
                    <span>Soru Bankası</span>
                    <span>${totalQBSolved}/${totalQBAvailable}</span>
                </div>
                <div class="prog-bar-bg">
                    <div class="prog-bar-fill fill-grn" style="width: ${totalQBAvailable > 0 ? Math.round((totalQBSolved / totalQBAvailable) * 100) : 0}%"></div>
                </div>
            </div>
        </div>
        
        ${topWeak.length > 0 ? `
            <div class="card">
                <h3>⚠️ Zayıf Konular</h3>
                ${topWeak.map(w => `
                    <div class="weak-row" onclick="openTopic(${w.id})" style="cursor: pointer;">
                        <span class="weak-name">${w.name}</span>
                        <span class="weak-pct" style="color: var(--danger);">%${w.pct} (${w.total} soru)</span>
                    </div>
                `).join('')}
            </div>
        ` : `
            <div class="card">
                <h3>✅ Zayıf Konu Yok</h3>
                <p style="font-size: 13px; color: var(--text-muted);">Tüm konularda başarı oranın %70'in üzerinde!</p>
            </div>
        `}
        
        ${recentExams.length > 0 ? `
            <div class="card">
                <h3>📝 Son Denemeler</h3>
                ${recentExams.map(e => `
                    <div class="weak-row">
                        <span class="weak-name">${e.type}</span>
                        <span class="weak-pct" style="color: var(--accent);">${e.net} net</span>
                        <span style="font-size: 10px; color: var(--text-muted);">${e.date}</span>
                    </div>
                `).join('')}
            </div>
        ` : ''}
        
        <div class="card">
            <h3>⚙️ Yönetim</h3>
            <div class="btn-group-vertical" style="margin-top: 8px;">
                <button class="btn btn-ghost btn-full" onclick="openModal('api')">
                    🔑 API Anahtarını Güncelle
                </button>
                <button class="btn btn-ghost btn-full" onclick="resetQuestionBankProgress()">
                    🔄 Soru Bankası İlerlemesini Sıfırla
                </button>
                <button class="btn btn-danger btn-full" onclick="openModal('reset')">
                    🗑️ Verileri Sıfırla
                </button>
            </div>
        </div>
    `;
}

// ============================================
// BÖLÜM 11: SIFIRLAMA & MODAL
// ============================================

/**
 * Modal açar
 */
window.openModal = function(id) {
    const el = document.getElementById(id + 'Modal');
    if (el) el.classList.remove('hidden');
    
    if (id === 'api') {
        const inp = document.getElementById('apiInp');
        if (inp) inp.value = ST.apiKey;
    }
};

/**
 * Modal kapatır
 */
window.closeModal = function(id) {
    const el = document.getElementById(id + 'Modal');
    if (el) el.classList.add('hidden');
};

/**
 * API anahtarını kaydeder
 */
window.saveKey = function() {
    const inp = document.getElementById('apiInp');
    const key = inp?.value?.trim();
    
    if (!key) {
        alert('Lütfen bir API anahtarı giriniz.');
        return;
    }
    
    ST.apiKey = key;
    localStorage.setItem(CONSTANTS.API_KEY_STORAGE, key);
    closeModal('api');
    updateApiStatus();
    
    alert('✅ API anahtarı başarıyla kaydedildi!');
};

/**
 * Sıfırlama işlemleri
 */
window.doReset = function(type) {
    closeModal('reset');
    
    if (type === 'all') {
        if (!confirm('⚠️ Tüm ilerlemeniz, istatistikleriniz ve soru bankası ilerlemeniz silinecek. Bu işlem geri alınamaz. Emin misiniz?')) return;
        if (!confirm('Son bir kez daha soruyorum: TÜM VERİLER silinecek. Onaylıyor musunuz?')) return;
        
        // API anahtarını koru
        const apiKey = ST.apiKey;
        
        // Sıfırla
        ST = {
            version: STATE_VERSION,
            apiKey: apiKey,
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
        
        initMissingFields();
        initExamSets();
        saveState();
        
        goHome();
        updateHomeStats();
        alert('✅ Tüm veriler sıfırlandı.');
        
    } else if (type === 'topic') {
        const t = getTopicById(ST.topic);
        if (!confirm(`${t?.n || 'Bu konu'} için tüm ilerleme sıfırlanacak. Onaylıyor musunuz?`)) return;
        
        ST.hist[ST.topic] = {
            levels: {},
            currentLevel: 'KOLAY'
        };
        ST.currentLevel = 'KOLAY';
        
        if (ST.completedTopics.includes(ST.topic)) {
            ST.completedTopics = ST.completedTopics.filter(id => id !== ST.topic);
        }
        
        saveState();
        renderPreStudySummary();
        alert(`✅ ${t?.n || 'Konu'} sıfırlandı.`);
    }
};

/**
 * Soru bankası ilerlemesini sıfırla
 */
window.resetQuestionBankProgress = function() {
    if (!confirm('Tüm soru bankası ilerlemeniz sıfırlanacak. Konu çalışma ilerlemeniz korunacak. Onaylıyor musunuz?')) return;
    
    ST.questionBankProgress = {};
    saveState();
    goStats();
    alert('✅ Soru bankası ilerlemesi sıfırlandı.');
};

// ============================================
// BÖLÜM 12: TEST MODU
// ============================================

/**
 * Test modu - geliştirme sırasında soru sayılarını azaltır
 * Konu başlığına 5 kez tıklayarak açılır/kapanır
 */
let testModeClickCount = 0;
let testModeTimeout = null;

// Test modu dinleyicisi (header başlığına tıklama)
document.addEventListener('DOMContentLoaded', function() {
    const headerTitle = document.getElementById('headerTitle');
    if (headerTitle) {
        headerTitle.style.cursor = 'default';
        headerTitle.addEventListener('click', function() {
            testModeClickCount++;
            
            if (testModeClickCount >= 5) {
                ST.testMode = !ST.testMode;
                testModeClickCount = 0;
                
                if (ST.testMode) {
                    celebrate('🧪 Test Modu Açık', 1500);
                    console.log('🧪 TEST MODU: AÇIK');
                } else {
                    alert('🧪 Test Modu Kapatıldı');
                    console.log('🧪 TEST MODU: KAPALI');
                }
                
                saveState();
            }
            
            // 2 saniye içinde 5 tıklama yapılmazsa sayaç sıfırlanır
            if (testModeTimeout) clearTimeout(testModeTimeout);
            testModeTimeout = setTimeout(() => {
                testModeClickCount = 0;
            }, 2000);
        });
    }
});

// ============================================
// BÖLÜM 13: BAŞLAT
// ============================================

/**
 * Uygulamayı başlatır
 */
function initApp() {
    console.log('🚀 KPSS Matematik Uygulaması Başlatılıyor...');
    
    // State'i yükle
    loadState();
    
    // İlk görünümü göster
    showView('vHome', false);
    updateHomeStats();
    updateApiStatus();
    
    // Deneme setlerini başlat
    initExamSets();
    
    // Yeni gün kontrolü
    const today = todayStr();
    if (ST.lastSession && ST.lastSession !== today) {
        console.log('📅 Yeni gün! Hoş geldiniz.');
    }
    ST.lastSession = today;
    saveState();
    
    console.log('✅ Uygulama hazır!');
    console.log('   -', CONSTANTS.TOTAL_TOPICS, 'konu');
    console.log('   - Soru bankası:', CONSTANTS.QUESTION_BANK_SIZE, 'soru/konu');
    console.log('   - Deneme:', CONSTANTS.EXAM_SETS, 'set');
    console.log('   - Test modu:', ST.testMode ? 'AÇIK 🧪' : 'KAPALI');
}

// ========== BAŞLAT ==========
document.addEventListener('DOMContentLoaded', initApp);

console.log('✅ app.js yüklendi - Tüm modüller hazır');