// ============================================
// KPSS MATEMATİK ANA UYGULAMA
// 20 Konu | 3 Level | Grafiksel Soru Motoru | Groq API
// Düzenlenmiş: generateVariables bileşik kısıtları destekler
// ============================================

console.log('🚀 KPSS Matematik Uygulaması başlıyor...');

// ========== STATE ==========
let ST = {
    version: 7.3,
    grokApiKey: '',
    currentTopic: 1,
    currentLevel: 0,
    streak: 0,
    maxStreak: 0,
    totalCorrect: 0,
    totalSolved: 0,
    completedTopics: [],
    topicProgress: {},
    questionBankProgress: {},
    examHistory: [],
    scratchpad: '',
    phase: 'summary',
    currentQuestion: null,
    currentView: 'vHome',
    examMode: false,
    examQuestions: [],
    examCurrentIndex: 0,
    examAnswers: [],
    examTimeLeft: 0,
    examTimer: null,
    pendingExamSet: null,
    pendingCompletionTopic: null,
    lastQuestions: {}
};

// ========== GROQ API ==========
const GROK_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROK_MODEL = 'llama-3.3-70b-versatile';

// ========== YARDIMCI FONKSİYONLAR ==========
function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function shuffleArray(arr) { const s = [...arr]; for (let i = s.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [s[i], s[j]] = [s[j], s[i]]; } return s; }
function todayStr() { return new Date().toISOString().split('T')[0]; }
function normAns(s) { if (!s) return ''; let cleaned = String(s).toLowerCase().trim(); cleaned = cleaned.replace(/(\d+(?:\.\d+)?)\s*(?:tl|lira|gün|saat|km|kg|gr|lt|ml|cm|m)$/i, '$1'); cleaned = cleaned.replace(/,/g, '.').replace(/[×x]/g, '*').replace(/\s+/g, ''); return cleaned; }
function checkEqual(userAns, correctAns) { try { const u = normAns(userAns), c = normAns(correctAns); if (u === c) return true; const uNum = parseFloat(u), cNum = parseFloat(c); if (!isNaN(uNum) && !isNaN(cNum) && Math.abs(uNum - cNum) < 0.001) return true; const uParts = u.split('/'), cParts = c.split('/'); if (cParts.length === 2 || uParts.length === 2) { const uVal = uParts.length === 2 ? Number(uParts[0])/Number(uParts[1]) : uNum; const cVal = cParts.length === 2 ? Number(cParts[0])/Number(cParts[1]) : cNum; if (!isNaN(uVal) && !isNaN(cVal) && Math.abs(uVal - cVal) < 0.001) return true; } return false; } catch(e) { return false; } }

// ========== GRAFİK YARDIMCILARI ==========
function maxKisi(a, b, c) { if (a >= b && a >= c) return "Ali"; if (b >= a && b >= c) return "Veli"; return "Can"; }
function medyan(...sayilar) { const sorted = [...sayilar].sort((x, y) => x - y); const mid = Math.floor(sorted.length / 2); return sorted.length % 2 === 0 ? (sorted[mid-1] + sorted[mid]) / 2 : sorted[mid]; }
function mod(...sayilar) { const freq = {}; sayilar.forEach(s => freq[s] = (freq[s] || 0) + 1); let maxFreq = 0, modVal = sayilar[0]; for (let [val, f] of Object.entries(freq)) { if (f > maxFreq) { maxFreq = f; modVal = Number(val); } } return modVal; }
function maxArtisAyi(ocak, subat, mart, nisan) { const artis1 = subat - ocak; const artis2 = mart - subat; const artis3 = nisan - mart; const maxArtis = Math.max(artis1, artis2, artis3); if (maxArtis === artis1) return "Şubat"; if (maxArtis === artis2) return "Mart"; return "Nisan"; }
function katsayiCikar(sayi) { let disari = 1; for (let i = Math.floor(Math.sqrt(sayi)); i >= 2; i--) { if (sayi % (i*i) === 0) { disari = i; sayi = sayi / (i*i); break; } } return disari === 1 ? `√${sayi}` : `${disari}√${sayi}`; }
function eslenikYap(a, b) { return `(√${a} - √${b})/(${a} - ${b})`; }

// ========== SORU MOTORU ==========
let QUESTION_TEMPLATES = {};
function loadQuestions() { for (let topicId = 1; topicId <= 20; topicId++) { QUESTION_TEMPLATES[topicId] = {}; for (let level = 0; level <= 2; level++) { QUESTION_TEMPLATES[topicId][level] = []; } } for (let topicId in SORU_BANKASI) { const tId = parseInt(topicId); for (let level in SORU_BANKASI[topicId]) { const lvl = parseInt(level); if (QUESTION_TEMPLATES[tId] && QUESTION_TEMPLATES[tId][lvl]) { QUESTION_TEMPLATES[tId][lvl] = SORU_BANKASI[topicId][level]; } } } console.log('✅ Sorular yüklendi'); }

// ========== DÜZENLENMİŞ GENERATE VARIABLES (Bileşik kısıtları destekler) ==========
function generateVariables(varRanges) {
    if (!varRanges || Object.keys(varRanges).length === 0) return {};
    const vars = {};
    for (let [key, range] of Object.entries(varRanges)) {
        if (key === 'kosul') continue;
        if (Array.isArray(range)) {
            let [min, max, constraint] = range;
            min = Number(min);
            max = Number(max);
            let val = Math.floor(Math.random() * (max - min + 1)) + min;
            
            if (constraint) {
                // Kısıtları alt çizgiye göre ayır (örn: 'cift_3kati' → ['cift','3kati'])
                const constraints = String(constraint).split('_');
                for (let c of constraints) {
                    if (c === 'tek') {
                        if (val % 2 === 0) val = (val > min ? val - 1 : val + 1);
                    } else if (c === 'cift') {
                        if (val % 2 !== 0) val = (val > min ? val - 1 : val + 1);
                    } else if (c.endsWith('kati')) {
                        const k = parseInt(c);
                        if (!isNaN(k) && k > 0) {
                            val = Math.round(val / k) * k;
                            if (val < min) val += k;
                            if (val > max) val -= k;
                            if (val < min || val > max) val = min;
                        }
                    }
                }
            }
            vars[key] = val;
        } else if (typeof range === 'string') {
            vars[key] = range;
        } else {
            vars[key] = range;
        }
    }
    return vars;
}

function fillTemplate(text, vars) { if (!text) return ''; let result = String(text); for (let [key, val] of Object.entries(vars)) { result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), val); } return result; }
function generateQuestion(topicId, level, preventRepeat = true) { const templates = QUESTION_TEMPLATES[topicId]?.[level]; if (!templates || templates.length === 0) return fallbackQuestion(); let availableTemplates = [...templates]; if (preventRepeat) { const key = `${topicId}_${level}`; const lastId = ST.lastQuestions[key]; if (lastId) { availableTemplates = templates.filter(t => t.id !== lastId); } if (availableTemplates.length === 0) { availableTemplates = [...templates]; ST.lastQuestions[key] = null; } } const template = availableTemplates[Math.floor(Math.random() * availableTemplates.length)]; const key = `${topicId}_${level}`; ST.lastQuestions[key] = template.id; const vars = generateVariables(template.v || {}); const questionText = fillTemplate(template.s, vars); let answer = fillTemplate(template.c, vars); try { if (answer.includes('Math.') || answer.includes('maxKisi') || answer.includes('medyan') || answer.includes('mod') || answer.includes('maxArtisAyi') || answer.includes('eslenikYap') || answer.includes('katsayiCikar')) { answer = eval(answer); } else if (/^[\d\s\+\-\*\/\(\)\.]+$/.test(answer)) { answer = eval(answer); } answer = Number.isInteger(answer) ? answer : Math.round(answer * 1000) / 1000; } catch(e) { answer = template.c; } return { id: template.id, soru: questionText, cevap: String(answer), cevapRaw: answer, zorluk: template.z || 'orta', alt: template.alt || '', vars: vars, template: template }; }
function fallbackQuestion() { return { id: 'fallback', soru: '1 + 1 = ?', cevap: '2', cevapRaw: 2, zorluk: 'kolay', alt: '' }; }

// ========== RENDER SORU ==========
function renderQuestionHTML(qData) { const text = qData.soru || ''; const alt = qData.alt || ''; if (alt === 'tablo_toplama' || alt === 'carpim_tablosu') return renderTableQuestion(qData); if (alt === 'sutun_grafik') return renderBarChart(qData); if (alt === 'daire_grafik') return renderPieChart(qData); if (alt === 'cizgi_grafik') return renderLineChart(qData); if (alt === 'sayi_dogrusu') return renderNumberLine(qData); return `<div class="q-text">${text.replace(/\n/g, '<br>')}</div>`; }
function renderTableQuestion(qData) { const vars = qData.vars || {}; const a = Math.min(vars.a || 3, 10); const b = Math.min(vars.b || 4, 10); return `<div class="q-text">Çarpım tablosuna göre ${a} × ${b} = ?</div><div class="q-visual"><table class="q-table"><thead><tr><th>×</th>${[1,2,3,4,5,6,7,8,9,10].map(i=>`<th>${i}</th>`).join('')}</tr></thead><tbody>${[...Array(a).keys()].map(ri => { const row = ri+1; return `<tr><th>${row}</th>${[1,2,3,4,5,6,7,8,9,10].map(ci => { const isTarget = (row === a && ci === b); return `<td class="${isTarget ? 'cell-target' : ''}">${isTarget ? '?' : row*ci}</td>`; }).join('')}</tr>`; }).join('')}</tbody></table></div>`; }
function renderBarChart(qData) { const vars = qData.vars || {}; const a = vars.a || 40, b = vars.b || 65; const maxVal = Math.max(a, b, 10); const W = 220, H = 120; return `<div class="q-text">Sütun grafiğine göre A ve B'nin toplamı kaçtır?</div><div class="q-visual"><svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:260px"><line x1="20" y1="0" x2="20" y2="${H-25}" stroke="var(--text-muted)" stroke-width="1.5"/><line x1="20" y1="${H-25}" x2="${W}" y2="${H-25}" stroke="var(--text-muted)" stroke-width="1.5"/><rect x="40" y="${H-25-(a/maxVal)*80}" width="50" height="${(a/maxVal)*80}" fill="var(--accent)" rx="3"/><text x="65" y="${H-25-(a/maxVal)*80-5}" text-anchor="middle" font-size="10">${a}</text><text x="65" y="${H-10}" text-anchor="middle" font-size="11">A</text><rect x="110" y="${H-25-(b/maxVal)*80}" width="50" height="${(b/maxVal)*80}" fill="var(--success)" rx="3"/><text x="135" y="${H-25-(b/maxVal)*80-5}" text-anchor="middle" font-size="10">${b}</text><text x="135" y="${H-10}" text-anchor="middle" font-size="11">B</text></svg></div>`; }
function renderPieChart(qData) { const vars = qData.vars || {}; const p = Math.min(vars.p || 30, 100); const angle = p * 3.6; const rad = angle * Math.PI / 180; const cx = 60, cy = 60, r = 50; const x1 = cx + r * Math.cos(-Math.PI/2); const y1 = cy + r * Math.sin(-Math.PI/2); const x2 = cx + r * Math.cos(-Math.PI/2 + rad); const y2 = cy + r * Math.sin(-Math.PI/2 + rad); const large = angle > 180 ? 1 : 0; return `<div class="q-text">Daire grafiğinde %${p}'lik dilimin değeri kaçtır?</div><div class="q-visual"><svg viewBox="0 0 120 120" width="120" height="120"><circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/><path d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} Z" fill="var(--accent)" opacity="0.85"/><text x="${cx}" y="${cy+5}" text-anchor="middle" font-size="11">%${p}</text></svg></div>`; }
function renderLineChart(qData) { const vars = qData.vars || {}; const a = vars.a || 20, b = vars.b || 45, c = vars.c || 35, d = vars.d || 60; const maxVal = Math.max(a, b, c, d, 10); const W = 280, H = 120; const xPoints = [40, 100, 160, 220]; const yPoints = [H-25-(a/maxVal)*80, H-25-(b/maxVal)*80, H-25-(c/maxVal)*80, H-25-(d/maxVal)*80]; const linePoints = yPoints.map((y,i) => `${xPoints[i]},${y}`).join(' '); return `<div class="q-text">Çizgi grafiğine göre en yüksek değer kaçtır?</div><div class="q-visual"><svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:300px"><line x1="20" y1="0" x2="20" y2="${H-25}" stroke="var(--text-muted)" stroke-width="1.5"/><line x1="20" y1="${H-25}" x2="${W-10}" y2="${H-25}" stroke="var(--text-muted)" stroke-width="1.5"/><polyline points="${linePoints}" fill="none" stroke="var(--accent)" stroke-width="2"/><circle cx="${xPoints[0]}" cy="${yPoints[0]}" r="4" fill="var(--accent)"/><text x="${xPoints[0]}" y="${yPoints[0]-5}" text-anchor="middle" font-size="9">${a}</text><circle cx="${xPoints[1]}" cy="${yPoints[1]}" r="4" fill="var(--accent)"/><text x="${xPoints[1]}" y="${yPoints[1]-5}" text-anchor="middle" font-size="9">${b}</text><circle cx="${xPoints[2]}" cy="${yPoints[2]}" r="4" fill="var(--accent)"/><text x="${xPoints[2]}" y="${yPoints[2]-5}" text-anchor="middle" font-size="9">${c}</text><circle cx="${xPoints[3]}" cy="${yPoints[3]}" r="4" fill="var(--accent)"/><text x="${xPoints[3]}" y="${yPoints[3]-5}" text-anchor="middle" font-size="9">${d}</text><text x="40" y="${H-8}" text-anchor="middle" font-size="9">Ocak</text><text x="100" y="${H-8}" text-anchor="middle" font-size="9">Şubat</text><text x="160" y="${H-8}" text-anchor="middle" font-size="9">Mart</text><text x="220" y="${H-8}" text-anchor="middle" font-size="9">Nisan</text></svg></div>`; }
function renderNumberLine(qData) { const vars = qData.vars || {}; const start = vars.start || 0, end = vars.end || 10, point = vars.point || 5; const W = 280, H = 50; const step = (end - start) / 10; const marks = []; for (let i = start; i <= end; i += step) marks.push(i); return `<div class="q-text">Sayı doğrusunda ${point} noktası işaretlenmiştir.</div><div class="q-visual"><svg viewBox="0 0 ${W} ${H}" width="100%"><line x1="10" y1="25" x2="${W-10}" y2="25" stroke="var(--text-muted)" stroke-width="2"/>${marks.map(m => { const x = 10 + (m-start)/(end-start)*(W-20); return `<line x1="${x}" y1="20" x2="${x}" y2="30" stroke="var(--text-muted)" stroke-width="1.5"/><text x="${x}" y="44" text-anchor="middle" font-size="9" fill="var(--text-muted)">${Math.round(m)}</text>`; }).join('')}<circle cx="${10 + (point-start)/(end-start)*(W-20)}" cy="25" r="5" fill="var(--accent)"/><text x="${10 + (point-start)/(end-start)*(W-20)}" y="15" text-anchor="middle" font-size="10" fill="var(--accent)">${point}</text></svg></div>`; }

// ========== ÇİZİM PAD YARDIMCILARI (Silgi + Geri Al) ==========
let drawingStates = {}; // her canvas için { ctx, history, historyIndex, drawing, lastX, lastY, color, isErasing }

function setupDrawingPad(canvasId, loadImageData = null) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;
    const ctx = canvas.getContext('2d');
    
    // State
    if (!drawingStates[canvasId]) {
        drawingStates[canvasId] = {
            ctx: ctx,
            history: [],      // imageData geçmişi
            historyIndex: -1,
            drawing: false,
            lastX: 0, lastY: 0,
            color: '#1a1a2e',
            isErasing: false
        };
    }
    const state = drawingStates[canvasId];
    state.ctx = ctx;
    
    const resizeCanvas = () => {
        const rect = canvas.getBoundingClientRect();
        const oldData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        canvas.width = rect.width;
        canvas.height = rect.height;
        ctx.fillStyle = '#fefefe';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (loadImageData && loadImageData !== '') {
            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                saveHistoryState(canvasId);
            };
            img.src = loadImageData;
        } else if (oldData && oldData.width > 0 && oldData.height > 0) {
            ctx.putImageData(oldData, 0, 0);
        }
        saveHistoryState(canvasId);
        ctx.strokeStyle = state.color;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    };
    resizeCanvas();
    window.addEventListener('resize', () => resizeCanvas());
    
    const getCoords = (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        let clientX, clientY;
        if (e.touches) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        let x = (clientX - rect.left) * scaleX;
        let y = (clientY - rect.top) * scaleY;
        x = Math.min(Math.max(0, x), canvas.width);
        y = Math.min(Math.max(0, y), canvas.height);
        return { x, y };
    };
    
    const startDraw = (e) => {
        e.preventDefault();
        state.drawing = true;
        const { x, y } = getCoords(e);
        state.lastX = x;
        state.lastY = y;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y);
        ctx.stroke();
    };
    const draw = (e) => {
        if (!state.drawing) return;
        e.preventDefault();
        const { x, y } = getCoords(e);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
        state.lastX = x;
        state.lastY = y;
    };
    const endDraw = () => {
        if (!state.drawing) return;
        state.drawing = false;
        saveHistoryState(canvasId);
        saveDrawingToState(canvas);
    };
    
    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('touchstart', startDraw);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', endDraw);
    
    updateBrushColor(canvasId);
    return canvas;
}

function saveHistoryState(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const state = drawingStates[canvasId];
    if (!state) return;
    const imageData = canvas.toDataURL();
    if (state.historyIndex < state.history.length - 1) {
        state.history = state.history.slice(0, state.historyIndex + 1);
    }
    state.history.push(imageData);
    state.historyIndex = state.history.length - 1;
    if (state.history.length > 50) {
        state.history.shift();
        state.historyIndex--;
    }
}

function undoDrawing(canvasId) {
    const state = drawingStates[canvasId];
    if (!state || state.historyIndex <= 0) return;
    state.historyIndex--;
    const prevImage = state.history[state.historyIndex];
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        saveDrawingToState(canvas);
    };
    img.src = prevImage;
}

function clearDrawingPad(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fefefe';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const state = drawingStates[canvasId];
    if (state) {
        state.history = [];
        state.historyIndex = -1;
        saveHistoryState(canvasId);
    }
    ST.scratchpad = '';
    saveState();
}

function copyDrawingPad(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    canvas.toBlob(blob => {
        try {
            navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
            alert('📋 Çizim panoya kopyalandı!');
        } catch(e) {
            alert('Kopyalama başarısız, lütfen manuel ekran görüntüsü alın.');
        }
    });
}

function toggleEraser(canvasId, btnElement) {
    const state = drawingStates[canvasId];
    if (!state) return;
    state.isErasing = !state.isErasing;
    updateBrushColor(canvasId);
    if (btnElement) {
        if (state.isErasing) {
            btnElement.innerHTML = '✏️';
            btnElement.title = 'Kalem modu';
            btnElement.style.background = 'var(--accent-glow)';
        } else {
            btnElement.innerHTML = '🧽';
            btnElement.title = 'Silgi modu';
            btnElement.style.background = 'transparent';
        }
    }
}

function updateBrushColor(canvasId) {
    const state = drawingStates[canvasId];
    if (!state) return;
    const ctx = state.ctx;
    if (state.isErasing) {
        ctx.strokeStyle = '#fefefe';
    } else {
        ctx.strokeStyle = '#1a1a2e';
    }
    state.color = ctx.strokeStyle;
}

function saveDrawingToState(canvas) {
    try {
        ST.scratchpad = canvas.toDataURL('image/png');
        saveState();
    } catch(e) { console.warn(e); }
}

function toggleDrawingPadSize(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const currentHeight = canvas.style.height;
    if (!currentHeight || currentHeight === 'auto' || currentHeight === '150px') {
        canvas.style.height = '250px';
    } else {
        canvas.style.height = '150px';
    }
    const rect = canvas.getBoundingClientRect();
    const oldWidth = canvas.width;
    const oldHeight = canvas.height;
    canvas.width = rect.width;
    canvas.height = rect.height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fefefe';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (ST.scratchpad && ST.scratchpad !== '') {
        const img = new Image();
        img.onload = () => ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.src = ST.scratchpad;
    }
    updateBrushColor(canvasId);
}

// ========== STATE YÖNETİMİ ==========
function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem('kpss_mat_v7') || '{}');
        if (saved.version === 7.0 || saved.version === 7.1 || saved.version === 7.2 || saved.version === 7.3) {
            Object.assign(ST, saved);
        }
    } catch(e) { console.warn(e); }
    ST.grokApiKey = localStorage.getItem('kpss_grok_api_key') || '';
    if (!ST.topicProgress) ST.topicProgress = {};
    if (!ST.completedTopics) ST.completedTopics = [];
    if (!ST.questionBankProgress) ST.questionBankProgress = {};
    if (!ST.examHistory) ST.examHistory = [];
    if (ST.scratchpad && !ST.scratchpad.startsWith('data:image')) {
        ST.scratchpad = '';
    }
    saveState();
}
function saveState() {
    try {
        const toSave = {
            version: 7.3,
            currentTopic: ST.currentTopic,
            currentLevel: ST.currentLevel,
            streak: ST.streak,
            maxStreak: ST.maxStreak,
            totalCorrect: ST.totalCorrect,
            totalSolved: ST.totalSolved,
            completedTopics: ST.completedTopics,
            topicProgress: ST.topicProgress,
            questionBankProgress: ST.questionBankProgress,
            examHistory: ST.examHistory,
            phase: ST.phase,
            currentView: ST.currentView,
            examMode: ST.examMode,
            examQuestions: ST.examQuestions,
            examCurrentIndex: ST.examCurrentIndex,
            examAnswers: ST.examAnswers,
            examTimeLeft: ST.examTimeLeft,
            scratchpad: ST.scratchpad
        };
        localStorage.setItem('kpss_mat_v7', JSON.stringify(toSave));
    } catch(e) { console.warn(e); }
}
function getTopicProgress(topicId) {
    if (!ST.topicProgress[topicId]) {
        ST.topicProgress[topicId] = { level0: { correct: 0, total: 0 }, level1: { correct: 0, total: 0 }, level2: { correct: 0, total: 0 } };
    }
    return ST.topicProgress[topicId];
}

// ========== SAYFA GEÇİŞLERİ ==========
function showView(id, pushHistory = true) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(id)?.classList.add('active');
    ST.currentView = id;
    updateHeader(id);
    if (pushHistory) history.pushState({ view: id }, '', '#/' + id);
    if (id === 'vHome') updateHomeStats();
    else if (id === 'vTopics') renderTopicsList();
    else if (id === 'vLearn') renderPreStudySummary();
    else if (id === 'vQuestionBank') renderQuestionBankList();
    else if (id === 'vStats') renderStats();
    else if (id === 'vExamList') renderExamList();
    saveState();
}
function updateHeader(viewId) { const titles = { vHome: 'KPSS Matematik', vTopics: '📚 Konular', vLearn: 'Konu Çalış', vQuestionBank: '📝 Soru Bankası', vQBSolve: 'Soru Bankası', vExamList: '📋 Denemeler', vExam: 'Deneme Sınavı', vStats: '📊 İstatistikler' }; document.getElementById('headerTitle').textContent = titles[viewId] || 'KPSS Matematik'; document.getElementById('btnBack').style.visibility = viewId === 'vHome' ? 'hidden' : 'visible'; }
function goBack() { history.back(); }
function goHome() { showView('vHome'); }
function goTopics() { showView('vTopics'); }
function goQuestionBank() { showView('vQuestionBank'); }
function goExamList() { showView('vExamList'); }
function goStats() { showView('vStats'); }
function toggleMenu() { document.getElementById('sideMenu')?.classList.toggle('hidden'); }

// ========== ANA SAYFA ==========
function updateHomeStats() { const done = ST.completedTopics.length; const acc = ST.totalSolved > 0 ? Math.round((ST.totalCorrect / ST.totalSolved) * 100) : 0; document.getElementById('statTopics').textContent = done; document.getElementById('statQuestions').textContent = ST.totalSolved; document.getElementById('statAccuracy').textContent = '%' + acc; document.getElementById('statStreak').textContent = ST.maxStreak; }

// ========== KONU LİSTESİ ==========
function renderTopicsList() { const el = document.getElementById('topicsList'); if (!el) return; let html = ''; for (let topic of TOPICS) { const completed = ST.completedTopics.includes(topic.id); const prog = getTopicProgress(topic.id); const totalSolved = (prog.level0?.total || 0) + (prog.level1?.total || 0) + (prog.level2?.total || 0); const pct = Math.min(100, Math.round((totalSolved / 90) * 100)); const locked = topic.locked && !completed && ST.completedTopics.length < topic.order - 1; let cls = 'topic-row'; if (completed) cls += ' t-done'; else if (topic.id === ST.currentTopic && ST.phase !== 'summary') cls += ' t-current'; else if (locked) cls += ' t-locked'; html += `<div class="${cls}" ${locked ? '' : `onclick="openTopic(${topic.id})"`}><span class="t-icon">${topic.e}</span><div class="t-info"><div class="t-name">${topic.n}</div><div class="prog-bar-wrap"><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${pct}%"></div></div></div></div><span>${completed ? '✅' : (locked ? '🔒' : '📘')}</span></div>`; } el.innerHTML = html; document.getElementById('topicsDoneLabel').textContent = `${ST.completedTopics.length}/20`; }
function openTopic(topicId) { ST.currentTopic = topicId; ST.currentLevel = 0; ST.phase = 'summary'; showView('vLearn'); saveState(); }

// ========== KONU ÇALIŞ ==========
function renderPreStudySummary() { const topic = getTopicById(ST.currentTopic); if (!topic) return; document.getElementById('learnTitle').textContent = `${topic.e} ${topic.n}`; document.getElementById('learnKademe').textContent = LEVELS[ST.currentLevel].name; const prog = getTopicProgress(ST.currentTopic); const levelProg = prog[`level${ST.currentLevel}`] || { correct: 0, total: 0 }; const level = LEVELS[ST.currentLevel]; document.getElementById('learnContent').innerHTML = `<div class="card accent-top"><h3>📖 ${topic.n}</h3><p style="color:var(--text-muted)">${level.name} seviyesinde ${level.questionCount} soru çözeceksin. ${level.minCorrect} doğru yaparak seviyeyi geçebilirsin.</p></div><div class="card"><div class="prog-bar-wrap"><div class="prog-bar-label"><span>İlerleme</span><span>${levelProg.correct}/${levelProg.total} doğru</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width:${(levelProg.total/level.questionCount)*100}%"></div></div></div><p style="font-size:12px;color:var(--text-muted);margin-top:8px">🎯 Geçmek için ${level.minCorrect} doğru</p></div><button class="btn btn-primary btn-full" onclick="beginStudy()">✍️ Çalışmaya Başla</button>`; }
function beginStudy() { ST.phase = 'question'; ST.currentQuestion = null; renderNextQuestion(); }

function renderNextQuestion() {
    const topic = getTopicById(ST.currentTopic);
    const level = ST.currentLevel;
    const levelConfig = LEVELS[level];
    const prog = getTopicProgress(ST.currentTopic);
    const levelProg = prog[`level${level}`] || { correct: 0, total: 0 };
    if (levelProg.total >= levelConfig.questionCount) { renderPreStudySummary(); return; }
    document.getElementById('learnTitle').textContent = `${topic.e} ${topic.n}`;
    document.getElementById('learnKademe').textContent = levelConfig.name;
    const qData = generateQuestion(ST.currentTopic, level, true);
    ST.currentQuestion = { ...qData, level };
    const zc = qData.zorluk === 'kolay' ? 'badge-grn' : (qData.zorluk === 'zor' ? 'badge-red' : 'badge-warn');
    
    document.getElementById('learnContent').innerHTML = `
        <div class="prog-bar-wrap"><div class="prog-bar-label"><span>${levelConfig.icon} ${levelConfig.name}</span><span>${levelProg.correct}/${levelProg.total} doğru</span></div>
        <div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width:${((levelProg.total)/levelConfig.questionCount)*100}%"></div></div></div>
        <div class="card accent-top">
            <div class="q-header"><span class="q-counter">Soru ${levelProg.total+1}/${levelConfig.questionCount}</span>
            <div class="q-tags"><span class="badge ${zc}">${qData.zorluk}</span><span class="badge badge-acc">${levelConfig.name}</span></div></div>
            ${renderQuestionHTML(qData)}
            <div class="ans-row"><input id="ansInp" class="ans-inp" type="text" inputmode="decimal" placeholder="Cevabını yaz..." onkeydown="if(event.key==='Enter') checkAnswer()">
            <button class="btn btn-primary" onclick="checkAnswer()">✓</button></div>
            <div class="ans-hint">Sayı veya kesir (ör: 3/4) olarak yaz</div>
        </div>
        <div class="scratchpad-area">
            <div class="scratchpad-header">
                <span>✍️ Müsvedde (Parmak/Kalem ile çiz)</span>
                <div>
                    <button class="btn-icon-small" onclick="undoDrawing('scratchpadCanvas')" title="Geri Al">↩️</button>
                    <button class="btn-icon-small" id="eraserBtn_scratchpadCanvas" onclick="toggleEraser('scratchpadCanvas', this)" title="Silgi/Kalem">🧽</button>
                    <button class="btn-icon-small" onclick="toggleDrawingPadSize('scratchpadCanvas')">[+]</button>
                    <button class="btn-icon-small" onclick="clearDrawingPad('scratchpadCanvas')">🗑️</button>
                    <button class="btn-icon-small" onclick="copyDrawingPad('scratchpadCanvas')">📋</button>
                </div>
            </div>
            <canvas id="scratchpadCanvas" class="drawing-pad" style="width:100%; height:150px; background:#fefefe; border-radius:8px;"></canvas>
        </div>
    `;
    
    setTimeout(() => {
        setupDrawingPad('scratchpadCanvas', ST.scratchpad || null);
        document.getElementById('ansInp')?.focus();
    }, 50);
}

function checkAnswer() { const inp = document.getElementById('ansInp'); if (!inp?.value.trim()) { inp.style.borderColor = 'var(--danger)'; setTimeout(() => { if(inp) inp.style.borderColor = ''; }, 1000); return; } inp.disabled = true; if (!ST.currentQuestion) return; const userAnswer = inp.value.trim(); const isCorrect = checkEqual(userAnswer, ST.currentQuestion.cevap); const level = ST.currentQuestion.level; const prog = getTopicProgress(ST.currentTopic); if (!prog[`level${level}`]) prog[`level${level}`] = { correct: 0, total: 0 }; prog[`level${level}`].total++; if (isCorrect) prog[`level${level}`].correct++; ST.totalSolved++; if (isCorrect) { ST.totalCorrect++; ST.streak++; if (ST.streak > ST.maxStreak) ST.maxStreak = ST.streak; } else { ST.streak = 0; } const levelConfig = LEVELS[level]; const levelProg = prog[`level${level}`]; let nextLevel = null; let topicCompleted = false; if (levelProg.total >= levelConfig.questionCount) { if (levelProg.correct >= levelConfig.minCorrect) { if (level < 2) { nextLevel = level + 1; ST.currentLevel = nextLevel; } else { topicCompleted = true; if (!ST.completedTopics.includes(ST.currentTopic)) { ST.completedTopics.push(ST.currentTopic); } } } else { prog[`level${level}`] = { correct: 0, total: 0 }; } } saveState(); let nextMsg = ''; if (nextLevel !== null) { nextMsg = `<div class="level-complete-msg">🎉 ${levelConfig.name} Seviyesi Geçildi!<br>→ ${LEVELS[nextLevel].name} seviyesine başlıyorsun.</div>`; } else if (topicCompleted) { nextMsg = `<div class="topic-complete-msg">🏆 KONU TAMAMLANDI! 🏆<br>Soru Bankası'nda pekiştirebilirsin.</div>`; showTopicCompletionPopup(ST.currentTopic); } const fbHtml = `<div class="fb ${isCorrect ? 'fb-ok' : 'fb-fail'}"><div class="fb-head"><span class="fb-icon">${isCorrect ? '🎉' : '❌'}</span><span class="fb-title">${isCorrect ? 'Doğru!' : 'Yanlış'}</span></div><div class="fb-body">${isCorrect ? `Cevap: <strong>${ST.currentQuestion.cevap}</strong>` : `Doğru cevap: <strong>${ST.currentQuestion.cevap}</strong><br>Senin cevabın: <em>${userAnswer}</em>`}</div>${nextMsg}${!topicCompleted ? '<div class="btn-row"><button class="btn btn-ghost btn-full" onclick="nextQuestion()">Sonraki Soru →</button></div>' : ''}</div>`; document.getElementById('learnContent').insertAdjacentHTML('beforeend', fbHtml); if (!isCorrect) renderGrokBtn(document.querySelector('.fb-fail'), ST.currentQuestion.soru, ST.currentQuestion.cevap, userAnswer); }
function nextQuestion() { ST.phase = 'question'; ST.currentQuestion = null; renderNextQuestion(); }
function showTopicCompletionPopup(topicId) { const topic = getTopicById(topicId); const popup = document.getElementById('completionPopup'); document.getElementById('completionTopicTitle').textContent = `🏆 ${topic.e} ${topic.n} Tamamlandı!`; document.getElementById('completionMessage').innerHTML = `Harikasın! Şimdi Soru Bankası'nda bol bol soru çözerek konuyu pekiştirebilirsin.`; ST.pendingCompletionTopic = topicId; popup.classList.remove('hidden'); }
function closeCompletionPopup() { document.getElementById('completionPopup').classList.add('hidden'); ST.pendingCompletionTopic = null; }
function goToQuestionBankFromPopup() { closeCompletionPopup(); if (ST.pendingCompletionTopic) startQuestionBank(ST.pendingCompletionTopic); }
function goToNextTopicFromPopup() { closeCompletionPopup(); const currentTopic = getTopicById(ST.pendingCompletionTopic); const nextTopic = TOPICS.find(t => t.order === (currentTopic?.order || 0) + 1); if (nextTopic) openTopic(nextTopic.id); else alert('🎉 Tüm konuları tamamladın!'); }

// ========== SORU BANKASI ==========
function renderQuestionBankList() { const el = document.getElementById('qbTopicsList'); if (!el) return; let html = ''; for (let topic of TOPICS) { if (!ST.completedTopics.includes(topic.id)) continue; const prog = ST.questionBankProgress[topic.id] || { solved: 0, correct: 0 }; const pct = Math.min(100, Math.round((prog.solved / 100) * 100)); html += `<div class="topic-row" onclick="startQuestionBank(${topic.id})"><span class="t-icon">${topic.e}</span><div class="t-info"><div class="t-name">${topic.n}</div><div class="prog-bar-wrap"><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${pct}%"></div></div></div></div><span>📝</span></div>`; } el.innerHTML = html || '<div class="card" style="text-align:center">Henüz tamamladığınız konu yok. Önce konu çalışarak konuları tamamlayın!</div>'; }
function startQuestionBank(topicId) { ST.currentTopic = topicId; ST.currentQuestion = null; showView('vQBSolve'); renderQBSolveHeader(); renderNextQBQuestion(); }
function renderQBSolveHeader() { const topic = getTopicById(ST.currentTopic); const prog = ST.questionBankProgress[ST.currentTopic] || { solved: 0, correct: 0 }; document.getElementById('qbSolveTitle').textContent = `📝 ${topic?.n || ''}`; document.getElementById('qbSolveProgress').textContent = `${prog.solved}/100 soru`; }
function renderNextQBQuestion() { const prog = ST.questionBankProgress[ST.currentTopic] || { solved: 0, correct: 0 }; if (prog.solved >= 100) { document.getElementById('qbSolveContent').innerHTML = `<div class="card"><h3>🎉 Tebrikler! 100 soruyu tamamladın.</h3><button class="btn btn-primary btn-full" onclick="goQuestionBank()">Listeye Dön</button></div>`; return; } const qData = generateQuestion(ST.currentTopic, randomInt(0, 2), true); ST.currentQuestion = { ...qData, mode: 'questionBank' }; const topic = getTopicById(ST.currentTopic); const zc = qData.zorluk === 'kolay' ? 'badge-grn' : (qData.zorluk === 'zor' ? 'badge-red' : 'badge-warn'); document.getElementById('qbSolveContent').innerHTML = `<div class="prog-bar-wrap"><div class="prog-bar-label"><span>${topic?.n || ''}</span><span>${prog.solved}/100</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${(prog.solved/100)*100}%"></div></div></div><div class="card accent-top"><div class="q-header"><span class="q-counter">Soru ${prog.solved+1}</span><div class="q-tags"><span class="badge ${zc}">${qData.zorluk}</span></div></div>${renderQuestionHTML(qData)}<div class="ans-row"><input id="qbAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." onkeydown="if(event.key==='Enter') checkQBAnswer()"><button class="btn btn-primary" onclick="checkQBAnswer()">✓</button></div><button class="btn btn-ghost btn-full" onclick="skipQBQuestion()">Boş Bırak →</button></div><div class="scratchpad-area"><div class="scratchpad-header"><span>✍️ Müsvedde (Parmak/Kalem ile çiz)</span><div><button class="btn-icon-small" onclick="undoDrawing('qbScratchpadCanvas')" title="Geri Al">↩️</button><button class="btn-icon-small" id="eraserBtn_qbScratchpadCanvas" onclick="toggleEraser('qbScratchpadCanvas', this)" title="Silgi/Kalem">🧽</button><button class="btn-icon-small" onclick="toggleDrawingPadSize('qbScratchpadCanvas')">[+]</button><button class="btn-icon-small" onclick="clearDrawingPad('qbScratchpadCanvas')">🗑️</button><button class="btn-icon-small" onclick="copyDrawingPad('qbScratchpadCanvas')">📋</button></div></div><canvas id="qbScratchpadCanvas" class="drawing-pad" style="width:100%; height:150px; background:#fefefe; border-radius:8px;"></canvas></div>`; setTimeout(() => { setupDrawingPad('qbScratchpadCanvas', ST.scratchpad || null); document.getElementById('qbAnsInp')?.focus(); }, 50); }
function checkQBAnswer() { const inp = document.getElementById('qbAnsInp'); if (!inp?.value.trim()) return; inp.disabled = true; if (!ST.currentQuestion) return; const userAnswer = inp.value.trim(); const isCorrect = checkEqual(userAnswer, ST.currentQuestion.cevap); const prog = ST.questionBankProgress[ST.currentTopic] || { solved: 0, correct: 0 }; prog.solved++; if (isCorrect) prog.correct++; ST.questionBankProgress[ST.currentTopic] = prog; ST.totalSolved++; if (isCorrect) { ST.totalCorrect++; ST.streak++; if (ST.streak > ST.maxStreak) ST.maxStreak = ST.streak; } else { ST.streak = 0; } saveState(); renderQBSolveHeader(); const fbHtml = `<div class="fb ${isCorrect ? 'fb-ok' : 'fb-fail'}"><div class="fb-head"><span class="fb-icon">${isCorrect ? '🎉' : '❌'}</span><span class="fb-title">${isCorrect ? 'Doğru!' : 'Yanlış'}</span></div><div class="fb-body">${isCorrect ? `Cevap: <strong>${ST.currentQuestion.cevap}</strong>` : `Doğru: <strong>${ST.currentQuestion.cevap}</strong><br>Senin: <em>${userAnswer}</em>`}</div><div class="btn-row"><button class="btn btn-ghost btn-full" onclick="nextQBQuestion()">Sonraki →</button></div></div>`; document.getElementById('qbSolveContent').insertAdjacentHTML('beforeend', fbHtml); if (!isCorrect) renderGrokBtn(document.querySelector('.fb-fail'), ST.currentQuestion.soru, ST.currentQuestion.cevap, userAnswer); }
function skipQBQuestion() { const prog = ST.questionBankProgress[ST.currentTopic] || { solved: 0, correct: 0 }; prog.solved++; ST.questionBankProgress[ST.currentTopic] = prog; saveState(); renderQBSolveHeader(); nextQBQuestion(); }
function nextQBQuestion() { ST.currentQuestion = null; renderNextQBQuestion(); }

// ========== DENEME SINAVI ==========
function renderExamList() { const el = document.getElementById('examListContent'); if (!el) return; let html = '<div class="card"><h3>📋 Deneme Sınavları</h3>'; for (let i = 0; i < 3; i++) { const exam = ST.examHistory[i]; const examNum = i + 1; const status = exam ? `✅ ${exam.net} net (${exam.date})` : '⭕ Çözülmedi'; html += `<div class="exam-item" onclick="showExamOptions(${examNum})"><div><div class="exam-title">Deneme ${examNum}</div><div class="exam-desc">20-30 soru</div></div><div class="exam-status">${status}</div></div>`; } html += '</div>'; el.innerHTML = html; }
function showExamOptions(setId) { ST.pendingExamSet = setId; document.getElementById('examOptionsModal').classList.remove('hidden'); }
function closeExamOptions() { document.getElementById('examOptionsModal').classList.add('hidden'); }
function startExam(questionCount) { closeExamOptions(); const allQuestions = []; for (let topicId = 1; topicId <= 20; topicId++) { for (let level = 0; level <= 2; level++) { const templates = QUESTION_TEMPLATES[topicId]?.[level] || []; allQuestions.push(...templates); } } const shuffled = shuffleArray(allQuestions); const selected = shuffled.slice(0, questionCount).map(t => generateQuestionFromTemplate(t)); ST.examMode = true; ST.examQuestions = selected; ST.examCurrentIndex = 0; ST.examAnswers = []; ST.examTimeLeft = questionCount * 60; showView('vExam'); startExamTimer(); renderExamQuestion(); }
function generateQuestionFromTemplate(template) { const vars = generateVariables(template.v || {}); const questionText = fillTemplate(template.s, vars); let answer = fillTemplate(template.c, vars); try { if (answer.includes('Math.') || answer.includes('maxKisi') || answer.includes('medyan') || answer.includes('mod') || answer.includes('maxArtisAyi') || answer.includes('eslenikYap') || answer.includes('katsayiCikar')) { answer = eval(answer); } else if (/^[\d\s\+\-\*\/\(\)\.]+$/.test(answer)) { answer = eval(answer); } answer = Number.isInteger(answer) ? answer : Math.round(answer * 1000) / 1000; } catch(e) { answer = template.c; } return { ...template, soru: questionText, cevap: String(answer), vars: vars }; }
function startExamTimer() { if (ST.examTimer) clearInterval(ST.examTimer); ST.examTimer = setInterval(() => { if (ST.examTimeLeft > 0) { ST.examTimeLeft--; updateExamTimerDisplay(); if (ST.examTimeLeft === 0) finishExam(); } }, 1000); }
function updateExamTimerDisplay() { const m = Math.floor(ST.examTimeLeft / 60), s = ST.examTimeLeft % 60; document.getElementById('examTimer').textContent = `${m}:${s.toString().padStart(2, '0')}`; if (ST.examTimeLeft < 60) document.getElementById('examTimer').style.color = 'var(--danger)'; }
function renderExamQuestion() { const q = ST.examQuestions[ST.examCurrentIndex]; const zc = q.zorluk === 'kolay' ? 'badge-grn' : (q.zorluk === 'zor' ? 'badge-red' : 'badge-warn'); document.getElementById('examContent').innerHTML = `<div class="card accent-top"><div class="q-header"><span class="q-counter">Soru ${ST.examCurrentIndex+1}/${ST.examQuestions.length}</span><div class="q-tags"><span class="badge ${zc}">${q.zorluk}</span></div></div>${renderQuestionHTML(q)}<div class="ans-row"><input id="examAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." onkeydown="if(event.key==='Enter') submitExamAnswer()"><button class="btn btn-primary" onclick="submitExamAnswer()">✓</button></div><button class="btn btn-ghost btn-full" onclick="skipExamAnswer()">Boş Bırak →</button></div>`; setTimeout(() => document.getElementById('examAnsInp')?.focus(), 150); }
function submitExamAnswer() { const inp = document.getElementById('examAnsInp'); const userAnswer = inp?.value?.trim() || ''; const q = ST.examQuestions[ST.examCurrentIndex]; ST.examAnswers.push({ question: q.soru, correctAnswer: q.cevap, userAnswer, isCorrect: checkEqual(userAnswer, q.cevap), skipped: false }); if (ST.examCurrentIndex + 1 < ST.examQuestions.length) { ST.examCurrentIndex++; renderExamQuestion(); } else finishExam(); }
function skipExamAnswer() { const q = ST.examQuestions[ST.examCurrentIndex]; ST.examAnswers.push({ question: q.soru, correctAnswer: q.cevap, userAnswer: '(boş)', isCorrect: false, skipped: true }); if (ST.examCurrentIndex + 1 < ST.examQuestions.length) { ST.examCurrentIndex++; renderExamQuestion(); } else finishExam(); }
function finishExam() { if (ST.examTimer) clearInterval(ST.examTimer); const answers = ST.examAnswers; const correct = answers.filter(a => a.isCorrect).length; const wrong = answers.filter(a => !a.isCorrect && !a.skipped).length; const blank = answers.filter(a => a.skipped).length; const net = (correct - wrong * 0.25).toFixed(2); ST.examHistory.unshift({ id: Date.now(), date: todayStr(), questionCount: ST.examQuestions.length, correct, wrong, blank, net, answers }); if (ST.examHistory.length > 10) ST.examHistory.pop(); saveState(); let wrongList = answers.filter(a => !a.isCorrect).map((a, i) => `<div class="wrong-item" id="wrong_${i}"><div class="wrong-question">${a.question}</div><div>Doğru: <strong>${a.correctAnswer}</strong> — Senin: <em>${a.userAnswer}</em></div></div>`).join(''); document.getElementById('examContent').innerHTML = `<div style="text-align:center"><div class="net-num">${net}</div><div class="net-lbl">Net</div><div class="stat-grid"><div class="stat-cell"><div class="stat-num" style="color:var(--success)">${correct}</div><div class="stat-lbl">Doğru</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--danger)">${wrong}</div><div class="stat-lbl">Yanlış</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--warning)">${blank}</div><div class="stat-lbl">Boş</div></div></div><div class="btn-row"><button class="btn btn-primary btn-full" onclick="location.reload()">🔄 Tekrar Dene</button><button class="btn btn-ghost btn-full" onclick="goExamList()">Listeye Dön</button></div></div>${wrongList ? `<div class="card"><h3>❌ Yanlışlar</h3>${wrongList}</div>` : ''}`; answers.filter(a => !a.isCorrect).forEach((a, i) => { const t = document.getElementById(`wrong_${i}`); if (t) renderGrokBtn(t, a.question, a.correctAnswer, a.userAnswer); }); ST.examMode = false; }
function cancelExam() { if (confirm('Denemeyi iptal et?')) { if (ST.examTimer) clearInterval(ST.examTimer); ST.examMode = false; goExamList(); } }

// ========== İSTATİSTİKLER ==========
function renderStats() { const acc = ST.totalSolved > 0 ? Math.round((ST.totalCorrect / ST.totalSolved) * 100) : 0; const net = (ST.totalCorrect - ((ST.totalSolved - ST.totalCorrect) * 0.25)).toFixed(2); let topicHtml = ''; for (let topic of TOPICS) { const prog = getTopicProgress(topic.id); const totalSolved = (prog.level0?.total || 0) + (prog.level1?.total || 0) + (prog.level2?.total || 0); const correct = (prog.level0?.correct || 0) + (prog.level1?.correct || 0) + (prog.level2?.correct || 0); const pct = totalSolved > 0 ? Math.round((correct / totalSolved) * 100) : 0; const completed = ST.completedTopics.includes(topic.id); topicHtml += `<div class="topic-row"><span class="t-icon">${topic.e}</span><div class="t-info"><div class="t-name">${topic.n}</div><div class="t-meta">${correct}/${totalSolved} doğru</div><div class="prog-bar-wrap"><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${pct}%"></div></div></div></div><span>${completed ? '✅' : '🔄'}</span></div>`; } let examHtml = '<div class="card"><h3>📋 Deneme Geçmişi</h3>'; for (let exam of ST.examHistory.slice(0, 5)) { examHtml += `<div class="exam-item" style="margin-bottom:8px"><div><div>${exam.date}</div><div class="exam-desc">${exam.questionCount} soru</div></div><div>${exam.net} net</div></div>`; } examHtml += '</div>'; document.getElementById('statsContent').innerHTML = `<div class="net-box"><div class="net-num">${net}</div><div class="net-lbl">Toplam Net</div></div><div class="stat-grid"><div class="stat-cell"><div class="stat-num">${ST.totalSolved}</div><div class="stat-lbl">Soru</div></div><div class="stat-cell"><div class="stat-num">%${acc}</div><div class="stat-lbl">Doğruluk</div></div><div class="stat-cell"><div class="stat-num">${ST.maxStreak}</div><div class="stat-lbl">Seri</div></div><div class="stat-cell"><div class="stat-num">${ST.completedTopics.length}</div><div class="stat-lbl">Konu</div></div></div><div class="card"><h3>📚 Konu Performansı</h3>${topicHtml}</div>${examHtml}`; }

// ========== GROQ API ==========
async function askGrokForSolution(question, correctAnswer, userAnswer) { if (!ST.grokApiKey) { return '⚠️ Groq API anahtarı girilmedi. Ayarlar\'dan ekleyin.\n\n🔗 console.groq.com adresinden ücretsiz API anahtarı (gsk_...) alabilirsiniz.'; } const prompt = `Sen bir KPSS matematik öğretmenisin. Aşağıdaki soruyu Türkçe, adım adım ve anlaşılır biçimde açıkla.\n\nSoru: ${question}\nDoğru cevap: ${correctAnswer}\nÖğrencinin cevabı: ${userAnswer || '(boş bıraktı)'}\n\nLütfen:\n1. Soruyu kısa çöz (3-5 adım)\n2. Hangi formül/kural kullanıldığını belirt\n3. Öğrencinin hatasını varsa düzelt\n4. Sonucu vurgula`; try { const response = await fetch(GROK_API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ST.grokApiKey}` }, body: JSON.stringify({ model: GROK_MODEL, messages: [ { role: 'system', content: 'Sen bir matematik öğretmenisin. Öğrencilere KPSS matematik sorularını açıklıyorsun. Kısa, net ve anlaşılır ol.' }, { role: 'user', content: prompt } ], max_tokens: 800, temperature: 0.3 }) }); if (!response.ok) { const errorText = await response.text(); console.error('Groq API Hatası:', response.status, errorText); if (response.status === 401) return '❌ API anahtarı geçersiz! Lütfen Ayarlar\'dan doğru anahtarı girin.\n\n🔑 console.groq.com adresinden yeni anahtar alabilirsiniz.'; if (response.status === 429) return '⚠️ API kullanım limiti aşıldı. Lütfen biraz bekleyip tekrar deneyin.'; return `❌ API hatası (${response.status}). Lütfen daha sonra tekrar deneyin.`; } const data = await response.json(); return data.choices?.[0]?.message?.content || 'Açıklama alınamadı. Lütfen tekrar deneyin.'; } catch(e) { console.error('Groq API bağlantı hatası:', e); if (e.message.includes('Failed to fetch') || e.message.includes('NetworkError')) return '❌ İnternet bağlantınızı kontrol edin. API sunucusuna bağlanılamıyor.'; return `❌ Bağlantı hatası: ${e.message}\n\nLütfen internet bağlantınızı kontrol edin ve tekrar deneyin.`; } }
function renderGrokBtn(targetEl, question, correctAnswer, userAnswer) { const btn = document.createElement('button'); btn.className = 'btn btn-grok'; btn.innerHTML = '🤖 Groq ile Çözümü Gör'; btn.style.marginTop = '12px'; btn.style.width = '100%'; btn.onclick = async () => { btn.disabled = true; btn.innerHTML = '🤖 Groq düşünüyor...'; btn.style.opacity = '0.7'; const explanation = await askGrokForSolution(question, correctAnswer, userAnswer); const box = document.createElement('div'); box.className = 'grok-explanation'; box.style.marginTop = '12px'; box.innerHTML = `<div class="grok-header">🤖 <strong>Groq Açıklıyor</strong></div><div class="grok-body">${explanation.replace(/\n/g, '<br>')}</div>`; btn.replaceWith(box); }; targetEl.appendChild(btn); }

// ========== MÜSVEDDE (ESKİ FONKSİYONLAR) ==========
function clearScratchpad() { const canvas = document.getElementById('scratchpadCanvas') || document.getElementById('qbScratchpadCanvas'); if (canvas) clearDrawingPad(canvas.id); else ST.scratchpad = ''; saveState(); }
function copyScratchpad() { const canvas = document.getElementById('scratchpadCanvas') || document.getElementById('qbScratchpadCanvas'); if (canvas) copyDrawingPad(canvas.id); else alert('Çizim alanı bulunamadı.'); }
function toggleScratchpadSize() { const canvas = document.getElementById('scratchpadCanvas') || document.getElementById('qbScratchpadCanvas'); if (canvas) toggleDrawingPadSize(canvas.id); }

// ========== MODALLAR ==========
function openModal(id) { document.getElementById(id + 'Modal')?.classList.remove('hidden'); if (id === 'api') document.getElementById('apiInp').value = ST.grokApiKey; }
function closeModal(id) { document.getElementById(id + 'Modal')?.classList.add('hidden'); }
function saveKey() { const k = document.getElementById('apiInp')?.value?.trim(); if (k) { ST.grokApiKey = k; localStorage.setItem('kpss_grok_api_key', k); closeModal('api'); alert('✅ Groq API anahtarı kaydedildi!'); } }
function doReset(type) { if (type === 'all' && confirm('TÜM VERİLER SİLİNECEK! Emin misiniz?')) { localStorage.clear(); location.reload(); } else if (type === 'topic' && confirm(`${getTopicById(ST.currentTopic)?.n} konusu sıfırlansın mı?`)) { ST.topicProgress[ST.currentTopic] = null; ST.completedTopics = ST.completedTopics.filter(id => id !== ST.currentTopic); saveState(); renderTopicsList(); alert(`✅ Konu sıfırlandı!`); } }

// ========== BAŞLANGIÇ ==========
function startApp() {
    loadState();
    loadQuestions();
    ST.currentView = 'vHome';
    history.replaceState({ view: 'vHome' }, '', '#/vHome');
    showView('vHome', false);
    console.log('✅ Uygulama hazır! (Çizim + Silgi + Geri Al + Düzenlenmiş soru motoru)');
}
window.addEventListener('popstate', (e) => showView(e.state?.view || 'vHome', false));