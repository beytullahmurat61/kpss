// ============================================
// app.js - KPSS & DGS MATEMATİK ANA UYGULAMA
// Versiyon: 5.0 - TAMAMEN YENİDEN YAZILDI
// ============================================

console.log('🚀 app.js v5.0 yükleniyor...');

// ============================================
// BÖLÜM 1: SÜRÜM BİLGİSİ (SADECE BİR KEZ)
// ============================================
const STATE_VERSION = 5.0;

// ============================================
// BÖLÜM 2: STATE YÖNETİMİ (SADECE BİR KEZ)
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
    summaries: {},
    testMode: false,
    lastView: 'vHome'
};

// ============================================
// BÖLÜM 3: GELİŞMİŞ GEOMETRİ ÇİZİM MOTORU
// ============================================

class GeometryDrawer {
    constructor(canvasId, width = 600, height = 400) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext('2d');
        this.setupResponsive();
        window.addEventListener('resize', () => this.setupResponsive());
    }

    setupResponsive() {
        const container = this.canvas.parentElement;
        const maxWidth = Math.min(container.clientWidth, 600);
        this.canvas.style.width = `${maxWidth}px`;
        this.canvas.style.height = 'auto';
    }

    clear(color = '#ffffff') {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    setStyle(strokeColor = '#6c63ff', fillColor = 'transparent', lineWidth = 3) {
        this.ctx.strokeStyle = strokeColor;
        this.ctx.fillStyle = fillColor;
        this.ctx.lineWidth = lineWidth;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
    }

    drawTriangle(a, b, c, labels = {}) {
        const w = this.canvas.width, h = this.canvas.height;
        const cx = w / 2, cy = h / 2;
        const scale = Math.min(w, h) * 0.35;
        
        const points = [
            { x: cx, y: cy - scale * 0.8 },
            { x: cx - scale, y: cy + scale * 0.5 },
            { x: cx + scale, y: cy + scale * 0.5 }
        ];
        
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        this.ctx.lineTo(points[1].x, points[1].y);
        this.ctx.lineTo(points[2].x, points[2].y);
        this.ctx.closePath();
        this.ctx.stroke();
        
        // Kenar uzunlukları
        if (labels.sides) {
            this.ctx.fillStyle = '#1a1a2e';
            this.ctx.font = 'bold 16px "Inter"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(labels.sides[0], (points[0].x + points[1].x) / 2 - 20, (points[0].y + points[1].y) / 2);
            this.ctx.fillText(labels.sides[1], (points[0].x + points[2].x) / 2 + 20, (points[0].y + points[2].y) / 2);
            this.ctx.fillText(labels.sides[2], (points[1].x + points[2].x) / 2, (points[1].y + points[2].y) / 2 + 20);
        }
        
        // Açılar
        if (labels.angles) {
            this.ctx.fillStyle = '#ff6584';
            this.ctx.font = 'bold 14px "Inter"';
            this.ctx.fillText(`${labels.angles[0]}°`, points[0].x, points[0].y - 15);
            this.ctx.fillText(`${labels.angles[1]}°`, points[1].x - 30, points[1].y + 10);
            this.ctx.fillText(`${labels.angles[2]}°`, points[2].x + 20, points[2].y + 10);
        }
    }

    drawRectangle(width, height, x = null, y = null, label = '') {
        const w = this.canvas.width, h = this.canvas.height;
        const startX = x !== null ? x : (w - width) / 2;
        const startY = y !== null ? y : (h - height) / 2;
        
        this.ctx.strokeRect(startX, startY, width, height);
        
        if (label) {
            this.ctx.fillStyle = '#1a1a2e';
            this.ctx.font = 'bold 16px "Inter"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(label, startX + width / 2, startY + height / 2);
        }
        
        // Kenar etiketleri
        this.ctx.fillStyle = '#6c63ff';
        this.ctx.font = '14px "Inter"';
        this.ctx.fillText(`${width} cm`, startX + width / 2, startY - 10);
        this.ctx.fillText(`${height} cm`, startX - 30, startY + height / 2);
    }

    drawSquare(side, label = '') {
        this.drawRectangle(side, side, null, null, label);
    }

    drawCircle(radius, cx = null, cy = null, label = '') {
        const w = this.canvas.width, h = this.canvas.height;
        const centerX = cx !== null ? cx : w / 2;
        const centerY = cy !== null ? cy : h / 2;
        const r = Math.min(radius, Math.min(w, h) / 2 - 20);
        
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, r, 0, 2 * Math.PI);
        this.ctx.stroke();
        
        if (label) {
            this.ctx.fillStyle = '#1a1a2e';
            this.ctx.font = 'bold 16px "Inter"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(label, centerX, centerY);
        }
        
        this.ctx.fillStyle = '#6c63ff';
        this.ctx.font = '14px "Inter"';
        this.ctx.fillText(`r = ${radius} cm`, centerX, centerY + r + 25);
    }

    drawRightTriangle(leg1, leg2, label = '') {
        const w = this.canvas.width, h = this.canvas.height;
        const startX = 80, startY = h - 80;
        
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(startX + leg1, startY);
        this.ctx.lineTo(startX, startY - leg2);
        this.ctx.closePath();
        this.ctx.stroke();
        
        // Dik açı işareti
        const squareSize = 15;
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY - squareSize);
        this.ctx.lineTo(startX + squareSize, startY - squareSize);
        this.ctx.lineTo(startX + squareSize, startY);
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#1a1a2e';
        this.ctx.font = 'bold 14px "Inter"';
        this.ctx.fillText(`${leg1} cm`, startX + leg1 / 2, startY - 10);
        this.ctx.fillText(`${leg2} cm`, startX - 30, startY - leg2 / 2);
        
        const hipotenus = Math.sqrt(leg1 * leg1 + leg2 * leg2).toFixed(1);
        this.ctx.fillStyle = '#ff6584';
        this.ctx.fillText(`c = ${hipotenus} cm`, startX + leg1 / 2 + 20, startY - leg2 / 2 - 10);
    }

    drawParallelLines(count = 2, spacing = 60, angle = 0) {
        const w = this.canvas.width, h = this.canvas.height;
        const centerX = w / 2, centerY = h / 2;
        const startY = centerY - (count - 1) * spacing / 2;
        
        for (let i = 0; i < count; i++) {
            const y = startY + i * spacing;
            this.ctx.beginPath();
            this.ctx.moveTo(centerX - 200, y);
            this.ctx.lineTo(centerX + 200, y);
            this.ctx.stroke();
        }
        
        // Kesen çizgi
        this.ctx.beginPath();
        this.ctx.moveTo(centerX - 180, startY - 20);
        this.ctx.lineTo(centerX + 180, startY + (count - 1) * spacing + 20);
        this.ctx.stroke();
        
        // Açı göstergeleri
        this.ctx.fillStyle = '#ff6584';
        this.ctx.font = 'bold 14px "Inter"';
        this.ctx.fillText('α', centerX - 160, startY + 15);
        this.ctx.fillText('β', centerX + 150, startY + (count - 1) * spacing - 15);
    }

    drawCoordinateSystem(xRange = [-5, 5], yRange = [-5, 5]) {
        const w = this.canvas.width, h = this.canvas.height;
        const cx = w / 2, cy = h / 2;
        const xScale = w / (xRange[1] - xRange[0]);
        const yScale = h / (yRange[1] - yRange[0]);
        
        // Eksenler
        this.ctx.beginPath();
        this.ctx.moveTo(0, cy);
        this.ctx.lineTo(w, cy);
        this.ctx.moveTo(cx, 0);
        this.ctx.lineTo(cx, h);
        this.ctx.stroke();
        
        // Oklar
        this.ctx.fillStyle = '#6c63ff';
        this.ctx.font = 'bold 12px "Inter"';
        this.ctx.fillText('x', w - 10, cy - 5);
        this.ctx.fillText('y', cx + 5, 15);
        this.ctx.fillText('O', cx - 12, cy + 8);
        
        // Noktalar
        this.ctx.fillStyle = '#43e97b';
        for (let x = Math.ceil(xRange[0]); x <= xRange[1]; x++) {
            const px = cx + x * xScale;
            this.ctx.beginPath();
            this.ctx.arc(px, cy, 3, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.fillStyle = '#9090aa';
            this.ctx.fillText(x, px - 5, cy + 15);
            this.ctx.fillStyle = '#43e97b';
        }
    }

    drawFunction(f, xRange = [-5, 5], color = '#ff6584') {
        const w = this.canvas.width, h = this.canvas.height;
        const cx = w / 2, cy = h / 2;
        const xScale = w / (xRange[1] - xRange[0]);
        const yScale = h / 10;
        
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 3;
        
        let first = true;
        for (let px = 0; px <= w; px++) {
            const x = xRange[0] + (px / w) * (xRange[1] - xRange[0]);
            const y = f(x);
            const py = cy - y * yScale;
            
            if (py >= 0 && py <= h) {
                if (first) {
                    this.ctx.moveTo(px, py);
                    first = false;
                } else {
                    this.ctx.lineTo(px, py);
                }
            } else {
                first = true;
            }
        }
        this.ctx.stroke();
    }
}

// ============================================
// BÖLÜM 4: YARDIMCI FONKSİYONLAR (SADECE BİR KEZ)
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
        
        const uParts = u.split('/'), cParts = c.split('/');
        if (cParts.length === 2 || uParts.length === 2) {
            const uVal = uParts.length === 2 ? Number(uParts[0])/Number(uParts[1]) : parseFloat(u);
            const cVal = cParts.length === 2 ? Number(cParts[0])/Number(cParts[1]) : parseFloat(c);
            if (!isNaN(uVal) && !isNaN(cVal) && Math.abs(uVal - cVal) < 0.01) return true;
        }
        
        const un = parseFloat(u), cn = parseFloat(c);
        if (!isNaN(un) && !isNaN(cn) && Math.abs(un - cn) < 0.05) return true;
        return false;
    } catch(e) { return false; }
}

function dots() { return '<div class="dots"><span></span><span></span><span></span></div>'; }

function celebrate(msg, dur = 1900) {
    const w = document.getElementById('celWrap'), t = document.getElementById('celTxt');
    if (!w || !t) return;
    t.textContent = msg; w.classList.remove('hidden');
    setTimeout(() => w.classList.add('hidden'), dur);
}

function randomInt(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function todayStr() { return new Date().toISOString().split('T')[0]; }

function findGCD(a, b) { while (b) { [a, b] = [b, a % b]; } return a; }

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) if (n % i === 0 || n % (i+2) === 0) return false;
    return true;
}

function simpleHash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) { h = ((h << 5) - h) + str.charCodeAt(i); h = h & h; }
    return Math.abs(h).toString(36).substring(0, 8);
}

function fillTemplate(text, vars) {
    if (!text) return '';
    let result = String(text);
    const matches = result.match(/\{[^}]+\}/g) || [];
    for (let match of matches) {
        const key = match.slice(1, -1);
        if (vars && vars.hasOwnProperty(key)) {
            const val = vars[key];
            result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), val);
        } else {
            return text;
        }
    }
    return result;
}

// ============================================
// BÖLÜM 5: ÇİZİM YÖNETİCİSİ
// ============================================

function drawGeometry(canvasId, drawType, vars, params) {
    const drawer = new GeometryDrawer(canvasId);
    if (!drawer.ctx) return;
    
    drawer.clear();
    drawer.setStyle('#6c63ff', 'transparent', 3);
    
    try {
        switch(drawType) {
            case 'triangle':
                const a = parseFloat(fillTemplate(params.sides?.[0] || '0', vars));
                const b = parseFloat(fillTemplate(params.sides?.[1] || '0', vars));
                const c = parseFloat(fillTemplate(params.sides?.[2] || '0', vars));
                drawer.drawTriangle(null, null, null, { sides: [a, b, c], angles: params.angles });
                break;
            case 'rectangle':
                const w = parseFloat(fillTemplate(params.width, vars));
                const h = parseFloat(fillTemplate(params.height, vars));
                drawer.drawRectangle(w, h, null, null, params.label || '');
                break;
            case 'square':
                const s = parseFloat(fillTemplate(params.side, vars));
                drawer.drawSquare(s, params.label || '');
                break;
            case 'circle':
                const r = parseFloat(fillTemplate(params.radius, vars));
                drawer.drawCircle(r, null, null, params.label || '');
                break;
            case 'right_triangle':
                const l1 = parseFloat(fillTemplate(params.legs?.[0] || '0', vars));
                const l2 = parseFloat(fillTemplate(params.legs?.[1] || '0', vars));
                drawer.drawRightTriangle(l1, l2, params.label || '');
                break;
            case 'parallel_lines':
                drawer.drawParallelLines(params.count || 2, params.spacing || 60);
                break;
            case 'coordinate':
                drawer.drawCoordinateSystem(params.xRange || [-5, 5], params.yRange || [-5, 5]);
                if (params.function) {
                    const fn = new Function('x', `return ${params.function}`);
                    drawer.drawFunction(fn);
                }
                break;
            default:
                console.warn('Bilinmeyen çizim tipi:', drawType);
        }
    } catch(e) {
        console.warn('Çizim hatası:', e);
        drawer.ctx.fillStyle = '#ff6584';
        drawer.ctx.font = 'bold 20px Inter';
        drawer.ctx.textAlign = 'center';
        drawer.ctx.fillText('Şekil yüklenemedi', drawer.canvas.width/2, drawer.canvas.height/2);
    }
}

// ============================================
// BÖLÜM 6: TEMEL MATEMATİK FONKSİYONLARI
// ============================================

function ebob(a, b) { while (b) { [a, b] = [b, a % b]; } return a; }
function ekok(a, b) { return Math.abs(a * b) / ebob(a, b); }
function faktoriyel(n) { if (n < 0) return null; if (n === 0) return 1; let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; }
function permutasyon(n, r) { if (r > n || r < 0) return 0; let res = 1; for (let i = 0; i < r; i++) res *= (n - i); return res; }
function kombinasyon(n, r) {
    if (r > n || r < 0) return 0;
    r = Math.min(r, n - r);
    let c = 1;
    for (let i = 0; i < r; i++) c = c * (n - i) / (i + 1);
    return Math.round(c);
}
function zarOlasilik(t) { const o = {2:"1/36",3:"2/36",4:"3/36",5:"4/36",6:"5/36",7:"6/36",8:"5/36",9:"4/36",10:"3/36",11:"2/36",12:"1/36"}; return o[t] || "0"; }
function rakamToplam(n) { let t = 0; while (n > 0) { t += n % 10; n = Math.floor(n / 10); } return t; }
function kokDisi(n) {
    let d = 1, i = n;
    for (let j = 2; j * j <= i; j++) while (i % (j * j) === 0) { d *= j; i /= (j * j); }
    if (d === 1) return '√' + n;
    if (i === 1) return String(d);
    return d + '√' + i;
}
function sifirSayisi(n) { let c = 0; while (n >= 5) { n = Math.floor(n / 5); c += n; } return c; }
function aralikAsalSay(bas, son) { let c = 0; for (let i = Math.max(2, Math.ceil(bas)); i <= son; i++) if (isPrime(i)) c++; return c; }

const SAFE_CONTEXT = {
    Math, ebob, ekok, faktoriyel, permutasyon, kombinasyon,
    zarOlasilik, rakamToplam, kokDisi, sifirSayisi, aralikAsalSay,
    isPrime, randomInt
};

function safeEval(expr) {
    if (!expr) return null;
    if (/[;`'"\\]|__proto__|constructor|prototype|eval\(/i.test(expr)) throw new Error('Güvensiz ifade');
    let clean = String(expr).replace(/×/g,'*').replace(/÷/g,'/').replace(/\^/g,'**');
    clean = clean.replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)');
    clean = clean.replace(/√(\d+(?:\.\d+)?)/g, 'Math.sqrt($1)');
    try {
        const func = new Function(...Object.keys(SAFE_CONTEXT), `return (${clean})`);
        return func(...Object.values(SAFE_CONTEXT));
    } catch(e) { throw new Error('Hesaplama hatası: ' + e.message); }
}

function shuffleArray(arr) {
    const s = [...arr];
    for (let i = s.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i+1)); [s[i], s[j]] = [s[j], s[i]]; }
    return s;
}

// ============================================
// BÖLÜM 7: SORU BANKASI DÖNÜŞTÜRME
// ============================================

let QUESTION_TEMPLATES = {};

function convertQuestionBankToTemplates() {
    if (typeof SORU_BANKASI === 'undefined') {
        console.warn('SORU_BANKASI tanımlı değil!');
        return;
    }
    
    for (let topicId = 1; topicId <= CONSTANTS.TOTAL_TOPICS; topicId++) {
        QUESTION_TEMPLATES[topicId] = [];
    }
    
    for (let level in SORU_BANKASI) {
        const levelNum = parseInt(level);
        const startTopicId = levelNum * 10 + 1;
        const endTopicId = Math.min(startTopicId + 10, CONSTANTS.TOTAL_TOPICS);
        
        for (let template of SORU_BANKASI[level]) {
            for (let topicId = startTopicId; topicId <= endTopicId; topicId++) {
                if (QUESTION_TEMPLATES[topicId]) {
                    QUESTION_TEMPLATES[topicId].push({ ...template });
                }
            }
        }
    }
    
    console.log('✅ Soru şablonları dönüştürüldü.');
}

// ============================================
// BÖLÜM 8: TOPİK YARDIMCILARI (SADECE BİR KEZ)
// ============================================

function getTopicById(id) {
    if (typeof TOPICS === 'undefined') return null;
    return TOPICS.find(t => t.id === id);
}

function getNextLevel(levelName) {
    if (typeof LEVELS === 'undefined') return null;
    const levels = Object.keys(LEVELS);
    const idx = levels.indexOf(levelName);
    return idx < levels.length - 1 ? levels[idx + 1] : null;
}

function getNextTopic(currentId) {
    if (typeof TOPICS === 'undefined') return null;
    const current = getTopicById(currentId);
    return current ? TOPICS.find(t => t.order === current.order + 1) || null : null;
}

// ============================================
// BÖLÜM 9: SORU ÜRETME MOTORU
// ============================================

let GLOBAL_QUESTION_FINGERPRINTS = new Set();
let USER_SOLVED_FINGERPRINTS = new Map();

function getQuestionFingerprint(templateId, vars) {
    const sortedKeys = Object.keys(vars).sort();
    let canonical = templateId;
    for (let k of sortedKeys) canonical += `|${k}:${vars[k]}`;
    return simpleHash(canonical);
}

function isQuestionUsedGlobally(fingerprint) { return GLOBAL_QUESTION_FINGERPRINTS.has(fingerprint); }
function markQuestionUsedGlobally(fingerprint) { 
    GLOBAL_QUESTION_FINGERPRINTS.add(fingerprint); 
    if (GLOBAL_QUESTION_FINGERPRINTS.size > 5000) {
        const toDelete = [...GLOBAL_QUESTION_FINGERPRINTS].slice(0, 2000);
        toDelete.forEach(f => GLOBAL_QUESTION_FINGERPRINTS.delete(f));
    }
}

function getUserSolvedFingerprints(topicId, level) {
    const key = `${topicId}|${level}`;
    if (!USER_SOLVED_FINGERPRINTS.has(key)) USER_SOLVED_FINGERPRINTS.set(key, new Set());
    return USER_SOLVED_FINGERPRINTS.get(key);
}

function generateVariables(varRanges, rule) {
    if (!varRanges || Object.keys(varRanges).length === 0) return {};
    
    const keys = Object.keys(varRanges);
    const independent = keys.filter(k => Array.isArray(varRanges[k]));
    const dependent = keys.filter(k => !Array.isArray(varRanges[k]));

    for (let attempt = 0; attempt < 100; attempt++) {
        const vars = {};
        let valid = true;
        
        for (const key of independent) {
            const arr = varRanges[key];
            vars[key] = randomInt(arr[0], arr[1]);
        }
        
        for (const key of dependent) {
            let expr = varRanges[key];
            if (typeof expr === 'number') {
                vars[key] = expr;
            } else if (typeof expr === 'string') {
                let resolved = expr;
                for (const k of Object.keys(vars)) {
                    resolved = resolved.replace(new RegExp(`\\{${k}\\}`, 'g'), vars[k]);
                }
                if (/\{[^}]+\}/.test(resolved)) {
                    valid = false;
                    break;
                }
                try {
                    vars[key] = safeEval(resolved);
                    if (vars[key] === null || vars[key] === undefined || isNaN(vars[key])) {
                        valid = false;
                        break;
                    }
                } catch(e) {
                    valid = false;
                    break;
                }
            } else {
                valid = false;
                break;
            }
        }
        if (!valid) continue;
        
        if (rule) {
            try {
                let ruleExpr = rule;
                for (const k of Object.keys(vars)) {
                    ruleExpr = ruleExpr.replace(new RegExp(`\\{${k}\\}`, 'g'), vars[k]);
                }
                if (!safeEval(ruleExpr)) continue;
            } catch(e) { continue; }
        }
        return vars;
    }
    
    const fallback = {};
    for (const key of independent) {
        const arr = varRanges[key];
        fallback[key] = randomInt(arr[0], arr[1]);
    }
    return fallback;
}

function calculateAnswer(formula, vars) {
    try {
        if (!formula) return null;
        let expr = String(formula);
        for (const [k, v] of Object.entries(vars)) {
            expr = expr.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
        }
        const result = safeEval(expr);
        return (isFinite(result) && !isNaN(result)) ? result : null;
    } catch(e) { return null; }
}

function generateQuestion(topicId, level, options = {}) {
    if (!QUESTION_TEMPLATES[topicId] || !QUESTION_TEMPLATES[topicId].length) {
        return { id: 'fallback', soru: '1 + 1 = ?', cevap: '2', cevapRaw: 2, zorluk: 'kolay', inputType: 'keyboard', choices: null };
    }

    const templates = QUESTION_TEMPLATES[topicId];
    const template = templates[Math.floor(Math.random() * templates.length)];
    
    const vars = generateVariables(template.v, template.kural);
    if (!vars) return null;

    const questionText = fillTemplate(template.s, vars);
    const answer = calculateAnswer(template.c, vars);
    if (answer === null) return null;

    const fingerprint = getQuestionFingerprint(template.id, vars);
    if (isQuestionUsedGlobally(fingerprint)) return null;
    markQuestionUsedGlobally(fingerprint);

    return {
        id: `q_${template.id}_${fingerprint}`,
        fingerprint: fingerprint,
        templateId: template.id,
        soru: questionText,
        cevap: String(answer),
        cevapRaw: answer,
        zorluk: template.z || 'orta',
        inputType: 'keyboard',
        choices: null,
        cozum: `Cevap: ${answer}`,
        vars: vars,
        topicId: topicId,
        draw: template.draw,
        drawParams: template.drawParams
    };
}

// ============================================
// BÖLÜM 10: STATE YÖNETİM FONKSİYONLARI
// ============================================

function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem(CONSTANTS.STORAGE_KEY) || '{}');
        if (saved.version === STATE_VERSION) {
            Object.assign(ST, saved);
        }
    } catch (e) { console.warn('State yüklenemedi', e); }
    ST.apiKey = localStorage.getItem(CONSTANTS.API_KEY_STORAGE) || '';
    initMissingFields();
}

function initMissingFields() {
    for (let i = 1; i <= CONSTANTS.TOTAL_TOPICS; i++) if (!ST.hist[i]) ST.hist[i] = { levels: {}, currentLevel: 'KOLAY' };
    if (!ST.questionBankProgress) ST.questionBankProgress = {};
    if (!ST.examSets) ST.examSets = {};
    if (!ST.examGeneration) ST.examGeneration = 1;
    if (!ST.summaries) ST.summaries = {};
    if (!ST.lastView) ST.lastView = 'vHome';
}

function saveState() {
    try {
        const { apiKey, cq, ...d } = ST;
        localStorage.setItem(CONSTANTS.STORAGE_KEY, JSON.stringify(d));
    } catch (e) { console.warn('State kaydedilemedi', e); }
}

function getHist(topicId) {
    if (!ST.hist[topicId]) ST.hist[topicId] = { levels: {}, currentLevel: 'KOLAY' };
    return ST.hist[topicId];
}

// ============================================
// BÖLÜM 11: SAYFA GEÇİŞLERİ
// ============================================

let currentView = 'vHome';

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
    
    if (viewRenderers[id]) viewRenderers[id]();
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

// ============================================
// BÖLÜM 12: GÖRÜNÜM YÖNLENDİRİCİLERİ
// ============================================

const viewRenderers = {
    vHome: () => {
        document.getElementById('statTopics').textContent = ST.completedTopics.length;
        document.getElementById('statQuestions').textContent = ST.totalQ;
        document.getElementById('statAccuracy').textContent = '%' + (ST.totalQ > 0 ? Math.round((ST.totalCorrect / ST.totalQ) * 100) : 0);
        document.getElementById('statStreak').textContent = ST.maxStreak;
        const nt = TOPICS.find(t => !ST.completedTopics.includes(t.id));
        document.getElementById('nextTopicBadge').textContent = nt ? `🎯 Sıradaki: ${nt.e} ${nt.n}` : '🏆 Tüm konular tamamlandı!';
    },
    vTopics: () => {
        const el = document.getElementById('topicsList');
        if (!el || typeof TOPICS === 'undefined') return;
        let html = '', lp = '';
        TOPICS.forEach(t => {
            if (t.p !== lp) { lp = t.p; html += `<div class="phase-sep">${t.p}</div>`; }
            const done = ST.completedTopics.includes(t.id);
            const prev = TOPICS.find(pt => pt.order === t.order - 1);
            const locked = prev && !ST.completedTopics.includes(prev.id);
            const h = getHist(t.id);
            let tq = 0;
            if (h.levels) Object.values(h.levels).forEach(lv => { if (lv) tq += lv.total || 0; });
            const pct = tq > 0 ? Math.min(100, Math.round((tq / CONSTANTS.QUESTIONS_PER_TOPIC) * 100)) : 0;
            let cls = 'topic-row';
            if (done) cls += ' t-done';
            else if (t.id === ST.topic) cls += ' t-current';
            else if (locked) cls += ' t-locked';
            const icon = done ? '✅' : (t.id === ST.topic ? '▶️' : (locked ? '🔒' : '⭕'));
            html += `<div class="${cls}" ${locked ? '' : `onclick="openTopic(${t.id})"`}><span class="t-icon">${t.e}</span><div class="t-info"><div class="t-name">${t.n}</div><div class="t-meta">KPSS: ${t.kpss}</div><div class="prog-bar-wrap"><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${pct}%"></div></div></div></div><span>${icon}</span></div>`;
        });
        el.innerHTML = html;
    },
    vLearn: () => {
        if (ST.phase === 'question') renderNextQuestion();
        else renderPreStudySummary();
    },
    vQuestionBank: () => {
        const el = document.getElementById('qbTopicsList');
        if (!el) return;
        let html = '', lp = '';
        TOPICS.forEach(t => {
            if (t.p !== lp) { lp = t.p; html += `<div class="phase-sep">${t.p}</div>`; }
            const p = ST.questionBankProgress[t.id] || { solved: [] };
            const s = p.solved.length;
            const pct = Math.round((s / CONSTANTS.QUESTION_BANK_SIZE) * 100);
            const done = s >= CONSTANTS.QUESTION_BANK_SIZE;
            html += `<div class="topic-row ${done ? 't-done' : ''}" onclick="startQuestionBank(${t.id})"><span class="t-icon">${t.e}</span><div class="t-info"><div class="t-name">${t.n}</div><div class="t-meta">${done ? '✅ Tamamlandı' : `${s}/${CONSTANTS.QUESTION_BANK_SIZE}`}</div><div class="prog-bar-wrap"><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${pct}%"></div></div></div></div><span>${done ? '✅' : '📝'}</span></div>`;
        });
        el.innerHTML = html;
    },
    vQBSolve: () => {
        renderQBSolveHeader();
        renderNextQBQuestion();
    },
    vExamList: () => {
        const el = document.getElementById('examListContent');
        if (!el) return;
        let html = '';
        for (let i = 1; i <= CONSTANTS.EXAM_SETS; i++) {
            const sid = 'set_' + i;
            const sd = ST.examSets[sid] || {};
            html += `<div class="exam-set-card" onclick="startExamSet('${sid}')"><div class="exam-set-info"><h3>📋 Deneme ${i}</h3><span>20 soru · 20 dk</span></div><div class="exam-set-score">${sd.completed ? `<div class="net">${sd.net}</div><div class="date">${sd.date || ''}</div>` : '<span class="badge">Başla</span>'}</div></div>`;
        }
        el.innerHTML = html;
    },
    vStats: () => {
        const el = document.getElementById('statsContent');
        if (!el) return;
        const done = ST.completedTopics.length;
        const acc = ST.totalQ > 0 ? Math.round((ST.totalCorrect / ST.totalQ) * 100) : 0;
        const estNet = Math.min(30, Math.round(done * 0.55 + acc / 14));
        let qbs = 0, qba = 0;
        Object.keys(ST.questionBankProgress).forEach(tid => { qbs += ST.questionBankProgress[tid].solved.length; qba += CONSTANTS.QUESTION_BANK_SIZE; });
        el.innerHTML = `<div class="net-box"><div class="net-num">${estNet}</div><div class="net-lbl">Tahmini KPSS Netin</div></div><div class="stat-grid"><div class="stat-cell"><div class="stat-num" style="color:var(--accent)">${done}</div><div class="stat-lbl">Konu Bitti</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--danger)">${ST.totalQ}</div><div class="stat-lbl">Toplam Soru</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--success)">%${acc}</div><div class="stat-lbl">Doğruluk</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--warning)">${ST.maxStreak}</div><div class="stat-lbl">En İyi Seri</div></div></div><div class="card"><h3>Genel İlerleme</h3><div class="prog-bar-wrap"><div class="prog-bar-label"><span>Konular</span><span>${done}/${CONSTANTS.TOTAL_TOPICS}</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${Math.round((done / CONSTANTS.TOTAL_TOPICS) * 100)}%"></div></div></div><div class="prog-bar-wrap"><div class="prog-bar-label"><span>Soru Bankası</span><span>${qbs}/${qba}</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width:${qba > 0 ? Math.round((qbs / qba) * 100) : 0}%"></div></div></div></div>`;
    }
};

// ============================================
// BÖLÜM 13: ÖĞRENME FONKSİYONLARI
// ============================================

function renderPreStudySummary() {
    const t = getTopicById(ST.topic);
    if (!t) return;
    document.getElementById('learnTitle').textContent = `${t.e} ${t.n}`;
    document.getElementById('learnKademe').textContent = LEVELS[ST.currentLevel].name;
    const el = document.getElementById('learnContent');
    if (!el) return;
    const li = LEVELS[ST.currentLevel];
    const lh = (getHist(ST.topic).levels || {})[ST.currentLevel] || { correct: 0, total: 0 };
    el.innerHTML = `<div class="card accent-top"><h3>📖 ${t.n}</h3><p style="color:var(--text-muted)">Bu konuda ${li.questionCount} soru çözeceksin. ${li.minCorrect} doğru yaparak seviyeyi geçebilirsin.</p></div><div class="card"><div style="display:flex;justify-content:space-between;margin-bottom:10px"><h3>📊 ${li.name} Seviye</h3><span class="badge badge-acc">${li.questionCount} soru</span></div><div class="prog-bar-wrap"><div class="prog-bar-label"><span>İlerleme</span><span>${lh.correct || 0}/${lh.total || 0} doğru</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width:${((lh.total || 0) / li.questionCount) * 100}%"></div></div></div><p style="font-size:12px;color:var(--text-muted);margin-top:8px">🎯 ${li.minCorrect} doğru yapmalısın</p></div><button class="btn btn-primary btn-full" onclick="beginStudy()">✍️ Çalışmaya Başla</button>`;
}

window.beginStudy = function() { ST.phase = 'question'; ST.cq = null; renderNextQuestion(); };

function renderNextQuestion() {
    const t = getTopicById(ST.topic);
    if (!t) return;
    const level = ST.currentLevel;
    const levelInfo = LEVELS[level];
    document.getElementById('learnTitle').textContent = `${t.e} ${t.n}`;
    document.getElementById('learnKademe').textContent = levelInfo.name;
    
    const el = document.getElementById('learnContent');
    if (!el) return;
    el.innerHTML = `<div class="card">${dots()}</div>`;
    
    const qData = generateQuestion(ST.topic, level, { mode: 'study' });
    if (!qData) {
        el.innerHTML = `<div class="card accent-top" style="text-align:center"><h3>📭 Soru Üretilemedi</h3><button class="btn btn-primary btn-full" onclick="renderNextQuestion()">🔄 Tekrar Dene</button></div>`;
        return;
    }
    ST.cq = { ...qData, level };
    
    const hist = getHist(ST.topic);
    const lh = hist.levels?.[level] || { correct: 0, total: 0 };
    const limit = levelInfo.questionCount;
    const zc = qData.zorluk === 'kolay' ? 'badge-grn' : qData.zorluk === 'zor' ? 'badge-red' : 'badge-warn';
    
    let geometryHtml = '';
    if (qData.draw) {
        const canvasId = `geoCanvas_${Date.now()}_${Math.random()}`;
        geometryHtml = `<canvas id="${canvasId}" width="600" height="400" style="width:100%; max-width:600px; height:auto; background:#ffffff; border-radius:16px; margin:16px auto; display:block; border:2px solid #6c63ff;"></canvas>`;
        setTimeout(() => {
            if (typeof drawGeometry === 'function') {
                drawGeometry(canvasId, qData.draw, qData.vars, qData.drawParams);
            }
        }, 50);
    }
    
    el.innerHTML = `<div class="prog-bar-wrap"><div class="prog-bar-label"><span>📊 ${levelInfo.name}</span><span>${lh.correct || 0}/${lh.total || 0} doğru</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-grn" style="width:${((lh.total || 0) / limit) * 100}%"></div></div></div><div class="card accent-top"><div class="q-header"><span class="q-counter">Soru ${(lh.total || 0) + 1}/${limit}</span><div class="q-tags"><span class="badge ${zc}">${qData.zorluk}</span><span class="badge badge-acc">${levelInfo.name}</span></div></div>${geometryHtml}<div class="q-text">${qData.soru.replace(/\n/g, '<br>')}</div><div class="ans-row"><input id="ansInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." autocomplete="off" onkeydown="if(event.key==='Enter') checkAnswer()"><button class="btn btn-primary" onclick="checkAnswer()">✓</button></div><div class="ans-hint">Sayı, kesir (3/4) veya birim ile yaz</div></div>`;
    setTimeout(() => document.getElementById('ansInp')?.focus(), 100);
}

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
    if (!hist.levels[level]) hist.levels[level] = { correct: 0, total: 0 };
    const ld = hist.levels[level];
    ld.total++;
    if (isCorrect) ld.correct++;
    
    ST.totalQ++;
    if (isCorrect) { ST.totalCorrect++; ST.streak++; if (ST.streak > ST.maxStreak) ST.maxStreak = ST.streak; }
    else ST.streak = 0;
    
    const limit = LEVELS[level].questionCount;
    const minC = LEVELS[level].minCorrect;
    let levelCompleted = false, levelFailed = false, nextLevel = null, topicCompleted = false;
    
    if (ld.total >= limit) {
        if (ld.correct >= minC) {
            levelCompleted = true;
            nextLevel = getNextLevel(level);
            if (nextLevel) { ST.currentLevel = nextLevel; hist.currentLevel = nextLevel; }
            else { topicCompleted = true; if (!ST.completedTopics.includes(ST.topic)) ST.completedTopics.push(ST.topic); celebrate('🏆 Konu Tamamlandı!'); }
        } else { levelFailed = true; ld.correct = 0; ld.total = 0; }
    }
    saveState();
    ST.phase = 'feedback';
    
    let nextMsg = '';
    if (levelCompleted && nextLevel) nextMsg = `<div style="margin-top:12px;padding:10px;background:var(--success-bg);border-radius:8px;text-align:center">🎉 <strong>${LEVELS[level].name} Geçildi!</strong><br>→ ${LEVELS[nextLevel].name}</div>`;
    else if (topicCompleted) nextMsg = `<div style="margin-top:12px;padding:12px;background:var(--success-bg);border-radius:8px;text-align:center">🏆 <strong>Konu Tamamlandı!</strong></div>`;
    else if (levelFailed) nextMsg = `<div style="margin-top:12px;padding:10px;background:var(--danger-bg);border-radius:8px;text-align:center">⚠️ <strong>Başarısız!</strong> Tekrar başla.</div>`;
    
    const el = document.getElementById('learnContent');
    if (!el) return;
    el.innerHTML += `<div class="fb ${isCorrect ? 'fb-ok' : 'fb-fail'}"><div class="fb-head"><span class="fb-icon">${isCorrect ? '🎉' : '❌'}</span><span class="fb-title">${isCorrect ? 'Doğru!' : 'Yanlış'}</span></div><div class="fb-body">${isCorrect ? `Cevap: <strong>${q.cevap}</strong>` : `Doğru cevap: <strong>${q.cevap}</strong>${q.cozum ? `<br><br>📖 ${q.cozum}` : ''}`}</div>${nextMsg}${!topicCompleted ? '<div class="btn-row" style="margin-top:12px"><button class="btn btn-ghost btn-full" onclick="nextQuestion()">Sonraki Soru →</button></div>' : ''}</div>`;
}

window.nextQuestion = function() { ST.phase = 'question'; ST.cq = null; renderNextQuestion(); };

// ============================================
// BÖLÜM 14: SORU BANKASI FONKSİYONLARI
// ============================================

window.startQuestionBank = function(topicId) {
    ST.topic = topicId;
    ST.cq = null;
    showView('vQBSolve');
};

function renderQBSolveHeader() {
    const t = getTopicById(ST.topic);
    const p = ST.questionBankProgress[ST.topic] || { solved: [] };
    document.getElementById('qbSolveTitle').textContent = `📝 ${t?.n || ''}`;
    document.getElementById('qbSolveProgress').textContent = `${p.solved.length}/${CONSTANTS.QUESTION_BANK_SIZE}`;
}

function renderNextQBQuestion() {
    const topicId = ST.topic;
    const progress = ST.questionBankProgress[topicId] || { solved: [] };
    const limit = CONSTANTS.QUESTION_BANK_SIZE;
    const el = document.getElementById('qbSolveContent');
    if (!el) return;
    
    if (progress.solved.length >= limit) {
        el.innerHTML = `<div class="card accent-top" style="text-align:center"><h3>🎉 Tamamlandı!</h3><button class="btn btn-primary btn-full" onclick="goQuestionBank()">📝 Listeye Dön</button></div>`;
        return;
    }
    
    el.innerHTML = `<div class="card">${dots()}</div>`;
    const levels = ['KOLAY', 'ORTA', 'ZOR'];
    const randomLevel = levels[Math.floor(Math.random() * levels.length)];
    const qData = generateQuestion(topicId, randomLevel, { mode: 'questionBank' });
    if (!qData) {
        el.innerHTML = '<div class="err">Soru üretilemedi. Lütfen tekrar deneyin.</div>';
        return;
    }
    ST.cq = { ...qData, mode: 'questionBank' };
    
    const t = getTopicById(topicId);
    const zc = qData.zorluk === 'kolay' ? 'badge-grn' : qData.zorluk === 'zor' ? 'badge-red' : 'badge-warn';
    
    let geometryHtml = '';
    if (qData.draw) {
        const canvasId = `geoCanvas_${Date.now()}_${Math.random()}`;
        geometryHtml = `<canvas id="${canvasId}" width="600" height="400" style="width:100%; max-width:600px; height:auto; background:#ffffff; border-radius:16px; margin:16px auto; display:block; border:2px solid #6c63ff;"></canvas>`;
        setTimeout(() => {
            if (typeof drawGeometry === 'function') {
                drawGeometry(canvasId, qData.draw, qData.vars, qData.drawParams);
            }
        }, 50);
    }
    
    el.innerHTML = `<div class="prog-bar-wrap"><div class="prog-bar-label"><span>📝 ${t?.n || ''}</span><span>${progress.solved.length}/${limit}</span></div><div class="prog-bar-bg"><div class="prog-bar-fill fill-acc" style="width:${(progress.solved.length / limit) * 100}%"></div></div></div><div class="card accent-top"><div class="q-header"><span class="q-counter">Soru ${progress.solved.length + 1}</span><div class="q-tags"><span class="badge ${zc}">${qData.zorluk}</span><span class="badge badge-acc">${t?.n || ''}</span></div></div>${geometryHtml}<div class="q-text">${qData.soru.replace(/\n/g, '<br>')}</div><div class="ans-row"><input id="qbAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." onkeydown="if(event.key==='Enter') checkQBAnswer()"><button class="btn btn-primary" onclick="checkQBAnswer()">✓</button></div><button class="btn btn-ghost btn-full" style="margin-top:8px" onclick="skipQBQuestion()">Boş Bırak →</button></div>`;
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
    if (isCorrect) { ST.totalCorrect++; ST.streak++; if (ST.streak > ST.maxStreak) ST.maxStreak = ST.streak; }
    else ST.streak = 0;
    saveState();
    renderQBSolveHeader();
    
    const el = document.getElementById('qbSolveContent');
    if (el) el.innerHTML += `<div class="fb ${isCorrect ? 'fb-ok' : 'fb-fail'}"><div class="fb-head"><span class="fb-icon">${isCorrect ? '🎉' : '❌'}</span><span class="fb-title">${isCorrect ? 'Doğru!' : 'Yanlış'}</span></div><div class="fb-body">${isCorrect ? `Cevap: <strong>${ST.cq.cevap}</strong>` : `Doğru: <strong>${ST.cq.cevap}</strong>${ST.cq.cozum ? `<br>📖 ${ST.cq.cozum}` : ''}`}</div><div class="btn-row" style="margin-top:12px"><button class="btn btn-ghost btn-full" onclick="nextQBQuestion()">Sonraki →</button></div></div>`;
};

window.skipQBQuestion = function() {
    const progress = ST.questionBankProgress[ST.topic] || { solved: [] };
    if (!progress.solved.includes(ST.cq?.id)) progress.solved.push(ST.cq?.id);
    ST.questionBankProgress[ST.topic] = progress;
    saveState();
    renderQBSolveHeader();
    nextQBQuestion();
};

window.nextQBQuestion = function() { ST.cq = null; renderNextQBQuestion(); };

// ============================================
// BÖLÜM 15: DENEME FONKSİYONLARI
// ============================================

function generateExamQuestions(seed) {
    const all = [];
    TOPICS.forEach(t => {
        const tpls = QUESTION_TEMPLATES[t.id];
        if (!tpls) return;
        for (const tpl of tpls.slice(0, 3)) {
            const vars = generateVariables(tpl.v, tpl.kural);
            if (!vars) continue;
            const answer = calculateAnswer(tpl.c, vars);
            if (answer === null) continue;
            all.push({
                id: `exam_${t.id}_${simpleHash(JSON.stringify(vars))}`,
                soru: fillTemplate(tpl.s, vars),
                cevap: String(answer),
                cevapRaw: answer,
                zorluk: tpl.z || 'orta',
                topicId: t.id,
                topicName: t.n,
                draw: tpl.draw,
                drawParams: tpl.drawParams
            });
        }
    });
    return shuffleArray(all).slice(0, CONSTANTS.EXAM_QUESTIONS);
}

let currentExam = null;
let examTimerInterval = null;

window.startExamSet = function(setId) {
    const seed = (EXAM_SEEDS[parseInt(setId.split('_')[1]) - 1] || 42) + (ST.examGeneration - 1) * 100;
    const questions = generateExamQuestions(seed);
    currentExam = { setId, questions, currentIndex: 0, answers: [], timeLeft: CONSTANTS.EXAM_DURATION * 60 };
    showView('vExam');
    document.getElementById('examTitle').textContent = `Deneme ${setId.replace('set_', '')}`;
    updateExamTimerDisplay();
    startExamTimer();
    loadExamQuestion(0);
};

function startExamTimer() {
    if (examTimerInterval) clearInterval(examTimerInterval);
    examTimerInterval = setInterval(() => {
        if (currentExam && currentExam.timeLeft > 0) {
            currentExam.timeLeft--;
            updateExamTimerDisplay();
            if (currentExam.timeLeft <= 0) finishExam();
        }
    }, 1000);
}

function updateExamTimerDisplay() {
    const el = document.getElementById('examTimer');
    if (!el || !currentExam) return;
    const m = Math.floor(currentExam.timeLeft / 60);
    const s = currentExam.timeLeft % 60;
    el.textContent = `${m}:${String(s).padStart(2, '0')}`;
    if (currentExam.timeLeft <= 60) el.style.color = 'var(--danger)';
}

function loadExamQuestion(idx) {
    if (idx >= currentExam.questions.length) { finishExam(); return; }
    currentExam.currentIndex = idx;
    const q = currentExam.questions[idx];
    const el = document.getElementById('examContent');
    if (!el) return;
    const zc = q.zorluk === 'kolay' ? 'badge-grn' : q.zorluk === 'zor' ? 'badge-red' : 'badge-warn';
    
    let geometryHtml = '';
    if (q.draw) {
        const canvasId = `examCanvas_${Date.now()}_${Math.random()}`;
        geometryHtml = `<canvas id="${canvasId}" width="600" height="400" style="width:100%; max-width:600px; height:auto; background:#ffffff; border-radius:16px; margin:16px auto; display:block; border:2px solid #6c63ff;"></canvas>`;
        setTimeout(() => {
            if (typeof drawGeometry === 'function') {
                drawGeometry(canvasId, q.draw, q.vars, q.drawParams);
            }
        }, 50);
    }
    
    el.innerHTML = `<div class="card accent-top"><div class="q-header"><span class="q-counter">Soru ${idx + 1}/${currentExam.questions.length}</span><div class="q-tags"><span class="badge ${zc}">${q.zorluk}</span><span class="badge badge-acc">${q.topicName || ''}</span></div></div>${geometryHtml}<div class="q-text">${q.soru.replace(/\n/g, '<br>')}</div><div class="ans-row"><input id="examAnsInp" class="ans-inp" type="text" placeholder="Cevabını yaz..." onkeydown="if(event.key==='Enter') submitExamAnswer()"><button class="btn btn-primary" onclick="submitExamAnswer()">✓</button></div><button class="btn btn-ghost btn-full" style="margin-top:8px" onclick="skipExamAnswer()">Boş Bırak →</button></div>`;
    setTimeout(() => document.getElementById('examAnsInp')?.focus(), 100);
}

window.submitExamAnswer = function() {
    const inp = document.getElementById('examAnsInp');
    const userAnswer = inp?.value?.trim() || '';
    const q = currentExam.questions[currentExam.currentIndex];
    currentExam.answers.push({
        questionId: q.id,
        topicName: q.topicName,
        correctAnswer: q.cevap,
        userAnswer: userAnswer,
        isCorrect: checkEqual(userAnswer, q.cevap),
        skipped: false
    });
    loadExamQuestion(currentExam.currentIndex + 1);
};

window.skipExamAnswer = function() {
    const q = currentExam.questions[currentExam.currentIndex];
    currentExam.answers.push({
        questionId: q.id,
        topicName: q.topicName,
        correctAnswer: q.cevap,
        userAnswer: '',
        isCorrect: false,
        skipped: true
    });
    loadExamQuestion(currentExam.currentIndex + 1);
};

function finishExam() {
    if (examTimerInterval) clearInterval(examTimerInterval);
    if (!currentExam) return;
    
    const answers = currentExam.answers;
    const d = answers.filter(a => a.isCorrect).length;
    const y = answers.filter(a => !a.isCorrect && !a.skipped).length;
    const b = answers.filter(a => a.skipped).length;
    const net = (d - y * 0.25).toFixed(2);
    const setId = currentExam.setId;
    const sd = ST.examSets[setId];
    if (sd && !sd.completed) { sd.completed = true; sd.net = net; sd.date = todayStr(); }
    
    ST.examHistory.push({ type: `Deneme ${setId.replace('set_', '')}`, net, date: todayStr() });
    
    const allCompleted = Object.values(ST.examSets).every(s => s.completed);
    if (allCompleted) { ST.examGeneration++; }
    saveState();
    
    const el = document.getElementById('examContent');
    if (el) {
        el.innerHTML = `<div style="text-align:center;padding:20px 0"><div class="net-num">${net}</div><div class="net-lbl">Net</div><div class="stat-grid"><div class="stat-cell"><div class="stat-num" style="color:var(--success)">${d}</div><div class="stat-lbl">Doğru</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--danger)">${y}</div><div class="stat-lbl">Yanlış</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--text-muted)">${b}</div><div class="stat-lbl">Boş</div></div><div class="stat-cell"><div class="stat-num" style="color:var(--warning)">${currentExam.questions.length}</div><div class="stat-lbl">Toplam</div></div></div><div class="btn-row"><button class="btn btn-primary btn-full" onclick="startExamSet('${setId}')">🔄 Tekrar</button><button class="btn btn-ghost btn-full" onclick="goExamList()">Listeye Dön</button></div></div>`;
    }
    currentExam = null;
}

window.cancelExam = function() {
    if (examTimerInterval) clearInterval(examTimerInterval);
    if (confirm('Denemeyi iptal et?')) { currentExam = null; goExamList(); }
};

// ============================================
// BÖLÜM 16: MODAL VE SIFIRLAMA
// ============================================

window.openModal = function(id) {
    const el = document.getElementById(id + 'Modal');
    if (el) el.classList.remove('hidden');
    if (id === 'api') document.getElementById('apiInp').value = ST.apiKey;
};

window.closeModal = function(id) { document.getElementById(id + 'Modal')?.classList.add('hidden'); };

window.saveKey = function() {
    const k = document.getElementById('apiInp')?.value?.trim();
    if (!k) return;
    ST.apiKey = k;
    localStorage.setItem(CONSTANTS.API_KEY_STORAGE, k);
    closeModal('api');
    alert('✅ API anahtarı kaydedildi!');
};

window.doReset = function(type) {
    closeModal('reset');
    if (type === 'all') {
        if (!confirm('TÜM VERİLER SİLİNECEK! Emin misiniz?')) return;
        const ak = ST.apiKey;
        ST = {
            version: STATE_VERSION, apiKey: ak, topic: 1, currentLevel: 'KOLAY',
            streak: 0, maxStreak: 0, totalCorrect: 0, totalQ: 0,
            completedTopics: [], hist: {}, questionBankProgress: {},
            examSets: {}, examGeneration: 1, examHistory: [],
            apiCallCount: 0, apiCallDate: '', lastSession: null,
            phase: 'summary', cq: null, summaries: {}, testMode: false, lastView: 'vHome'
        };
        initMissingFields();
        GLOBAL_QUESTION_FINGERPRINTS.clear();
        USER_SOLVED_FINGERPRINTS.clear();
        saveState();
        goHome();
        alert('✅ Tüm veriler sıfırlandı!');
    } else if (type === 'topic') {
        const t = getTopicById(ST.topic);
        if (!confirm(`${t?.n} konusu sıfırlansın mı?`)) return;
        ST.hist[ST.topic] = { levels: {}, currentLevel: 'KOLAY' };
        ST.currentLevel = 'KOLAY';
        ST.completedTopics = ST.completedTopics.filter(id => id !== ST.topic);
        ['KOLAY', 'ORTA', 'ZOR'].forEach(level => USER_SOLVED_FINGERPRINTS.delete(`${ST.topic}|${level}`));
        if (ST.questionBankProgress[ST.topic]) delete ST.questionBankProgress[ST.topic];
        saveState();
        renderPreStudySummary();
        alert(`✅ ${t?.n} sıfırlandı!`);
    }
};

// ============================================
// BÖLÜM 17: UYGULAMA BAŞLATMA
// ============================================

window.openTopic = function(topicId) {
    ST.topic = topicId;
    ST.currentLevel = getHist(topicId).currentLevel || 'KOLAY';
    ST.phase = 'pre-study';
    showView('vLearn');
    saveState();
};

function initExamSets() {
    for (let i = 1; i <= CONSTANTS.EXAM_SETS; i++) {
        if (!ST.examSets['set_' + i]) {
            ST.examSets['set_' + i] = { completed: false, answers: [], net: null, date: null };
        }
    }
    saveState();
}

function initApp() {
    loadState();
    convertQuestionBankToTemplates();
    initExamSets();
    
    const targetView = ST.lastView || 'vHome';
    showView(targetView, false);
    saveState();
    history.replaceState({ view: targetView }, '', '#/' + targetView);
    console.log('✅ app.js hazır!');
}

window.addEventListener('popstate', function(event) {
    const state = event.state;
    if (state && state.view) showView(state.view, false);
    else showView('vHome', false);
});

document.addEventListener('DOMContentLoaded', initApp);
