// ============================================
// app.js - KPSS MATEMATİK ANA UYGULAMA
// Versiyon: 6.0
// • config.js (12 Level, 0-11) ile tam uyumlu
// • Grafiksel & Tablolu soru render motoru
// • Grok API entegrasyonu (çözüm açıklaması)
// • Mobil uyumlu
// ============================================

console.log('🚀 app.js v6.0 yükleniyor...');

// ============================================
// STATE VERSİYONU
// ============================================
const STATE_VERSION = 6.0;

// ============================================
// GROK API AYARLARI
// ============================================
const GROK_API_URL = 'https://api.x.ai/v1/chat/completions';
const GROK_MODEL   = 'grok-3';

// ============================================
// STATE YÖNETİMİ
// ============================================
let ST = {
    version: STATE_VERSION,
    grokApiKey: '',
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
    t.textContent = msg;
    w.classList.remove('hidden');
    setTimeout(() => w.classList.add('hidden'), dur);
}

function randomInt(min, max) {
    min = Math.ceil(min); max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function todayStr() { return new Date().toISOString().split('T')[0]; }

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
            result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), vars[key]);
        }
    }
    return result;
}

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
    } catch(e) { console.warn('safeEval hatası:', expr, e); return null; }
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
    return LEVELS[String(levelId)] || LEVELS['0'];
}

function getNextLevel(levelId) {
    if (typeof LEVELS === 'undefined') return null;
    const levels = Object.keys(LEVELS);
    const idx = levels.indexOf(String(levelId));
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
// config.js'deki level → topic ID eşleştirmesi
// ============================================

let QUESTION_TEMPLATES = {};

// config.js LEVELS ile senkronize level→topicId aralıkları
const LEVEL_TOPIC_RANGES = {
    0:  { start: 1,   end: 10  },  // Temel Aritmetik
    1:  { start: 11,  end: 14  },  // Sayılar (Doğal, Tam, Rasyonel, İrrasyonel)
    2:  { start: 15,  end: 22  },  // Kesirler
    3:  { start: 23,  end: 45  },  // Kuvvet, Kök, Çarpanlar
    4:  { start: 46,  end: 60  },  // Yüzde & Oran
    5:  { start: 61,  end: 72  },  // Denklemler
    6:  { start: 73,  end: 92  },  // Eşitsizlikler & Fonksiyonlar (temel)
    7:  { start: 93,  end: 119 },  // Logaritma, Polinomlar, İleri Fonksiyonlar
    8:  { start: 120, end: 131 },  // Trigonometri
    9:  { start: 132, end: 151 },  // Geometri & Katı Cisimler
    10: { start: 152, end: 174 },  // Veri, Olasılık & Diziler
    11: { start: 175, end: 205 },  // Analiz & KPSS Özel
};

function convertQuestionBankToTemplates() {
    if (typeof SORU_BANKASI === 'undefined') {
        console.warn('SORU_BANKASI tanımlı değil!');
        return;
    }

    for (let topicId = 1; topicId <= 205; topicId++) {
        QUESTION_TEMPLATES[topicId] = [];
    }

    for (let level in SORU_BANKASI) {
        const levelNum = parseInt(level);

        // questions.js level 0-18 → config.js level 0-11 eşleştirmesi
        // (questions.js'de 19 seviye vardı, config.js 12 seviyeye indirdi)
        let configLevel = levelNum;
        if (levelNum > 11) configLevel = 11; // 12-18 arası hepsini level 11'e aktar

        const range = LEVEL_TOPIC_RANGES[configLevel];
        if (!range) continue;

        for (let template of SORU_BANKASI[level]) {
            for (let topicId = range.start; topicId <= range.end; topicId++) {
                if (QUESTION_TEMPLATES[topicId]) {
                    QUESTION_TEMPLATES[topicId].push({ ...template });
                }
            }
        }
    }

    console.log('✅ Soru şablonları dönüştürüldü (12 level sistemi).');
}

// ============================================
// GRAFİKSEL & TABLOLU SORU RENDER MOTORU
// ============================================

/**
 * alt (alternatif tip) alanına göre soruyu görsel olarak zenginleştirir.
 * Metin sorusunu HTML'e çevirir; gerçek SVG/Canvas/Tablo ekler.
 */
function renderQuestionHTML(qData, vars) {
    const rawText = qData.soru || '';
    const alt = qData.alt || '';

    // --- Tablo tipi sorular ---
    if (alt.includes('carpim_tablosu')) {
        return buildMultiplicationTableHTML(vars);
    }
    if (alt.includes('alt_alta') || alt.includes('sifreli')) {
        return buildStackedOpHTML(rawText, alt);
    }
    if (alt.includes('tablo') || alt.includes('oran_tablo') || alt.includes('oranti_tablo')) {
        return buildProportionTableHTML(rawText, vars);
    }
    if (alt.includes('sayi_dogrusu')) {
        return buildNumberLineHTML(rawText, vars);
    }
    if (alt.includes('sutun_grafik')) {
        return buildBarChartHTML(vars);
    }
    if (alt.includes('daire_grafik')) {
        return buildPieChartHTML(vars);
    }
    if (alt.includes('koordinat') || alt.includes('grafik_cozum') || alt.includes('dogru_grafik')) {
        return buildCoordinateHTML(rawText, vars);
    }

    // --- Varsayılan: düz metin ---
    return `<div class="q-text">${rawText.replace(/\n/g, '<br>')}</div>`;
}

function buildMultiplicationTableHTML(vars) {
    const a = vars?.a || 5, b = vars?.b || 6;
    return `
    <div class="q-text">Çarpım tablosuna göre <strong>${a} × ${b} = ?</strong></div>
    <div class="q-visual" style="overflow-x:auto;margin:10px 0">
      <table class="q-table carpim-table">
        <thead><tr><th>×</th>${[1,2,3,4,5,6,7,8,9,10].map(i=>`<th>${i}</th>`).join('')}</tr></thead>
        <tbody>
          ${[...Array(Math.min(a,10)).keys()].map(ri => {
            const row = ri+1;
            return `<tr><th>${row}</th>${[1,2,3,4,5,6,7,8,9,10].map(ci => {
              const col = ci;
              const isTarget = (row === a && col === b) || (row === b && col === a);
              return `<td class="${isTarget ? 'cell-target' : ''}">${isTarget ? '?' : row*col}</td>`;
            }).join('')}</tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
}

function buildStackedOpHTML(text, alt) {
    // alt_alta formatı: satırları \n ile ayrılmış
    const lines = text.split('\n');
    if (lines.length < 3) return `<div class="q-text">${text.replace(/\n/g,'<br>')}</div>`;

    const opLine = lines.find(l => l.trim().startsWith('+') || l.trim().startsWith('-')) || lines[1];
    const num1 = lines[0].trim();
    const num2 = opLine.trim();
    const sep = lines.find(l => /^[-]+$/.test(l.trim()));
    const result = lines[lines.length - 1].trim();

    return `
    <div class="q-text" style="margin-bottom:8px">${lines.slice(sep ? lines.indexOf(sep)+1 : -1).join(' ').replace(/\n/g,'<br>')}</div>
    <div class="q-visual stacked-op">
      <div class="stacked-row top">${num1}</div>
      <div class="stacked-row op">${num2}</div>
      <div class="stacked-line"></div>
      <div class="stacked-row result">${result.includes('?') ? '<span class="cell-target">?</span>' : result}</div>
    </div>`;
}

function buildProportionTableHTML(text, vars) {
    const x1 = vars?.x1 || 2, y1 = vars?.y1 || 6;
    const x2 = vars?.x2 || 4;
    return `
    <div class="q-text">${text.replace(/\n/g,'<br>')}</div>
    <div class="q-visual" style="overflow-x:auto;margin:10px 0">
      <table class="q-table">
        <thead><tr><th>x</th><th>y</th></tr></thead>
        <tbody>
          <tr><td>${x1}</td><td>${y1}</td></tr>
          <tr><td>${x2}</td><td class="cell-target">?</td></tr>
        </tbody>
      </table>
    </div>`;
}

function buildNumberLineHTML(text, vars) {
    const a = vars?.a ?? 5, b = vars?.b ?? 3;
    const start = Math.max(0, Math.min(a,a+b) - 3);
    const end   = Math.max(a, a+b) + 3;
    const points = [];
    for (let i = start; i <= end; i++) points.push(i);
    const W = 280, H = 50;
    const scale = W / (end - start);
    const px = v => ((v - start) * scale);

    const ticks = points.map(p => {
        const x = px(p);
        const isA = p === a, isTarget = p === (a + b);
        return `
          <line x1="${x}" y1="20" x2="${x}" y2="30" stroke="var(--text-muted)" stroke-width="1.5"/>
          <text x="${x}" y="44" text-anchor="middle" font-size="10" fill="${isA||isTarget?'var(--accent)':'var(--text-muted)'}">${p}</text>
          ${isA ? `<circle cx="${x}" cy="25" r="5" fill="var(--accent)"/>` : ''}
          ${isTarget ? `<circle cx="${x}" cy="25" r="5" fill="var(--danger)" stroke="white" stroke-width="1.5"/><text x="${x}" y="14" text-anchor="middle" font-size="10" fill="var(--danger)">?</text>` : ''}
        `;
    }).join('');

    // arrow for movement
    const ax = px(a), tx = px(a + b);
    const arrowColor = b >= 0 ? 'var(--success)' : 'var(--danger)';

    return `
    <div class="q-text">${text.replace(/\n/g,'<br>')}</div>
    <div class="q-visual" style="overflow-x:auto;margin:10px 0;text-align:center">
      <svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:340px">
        <line x1="0" y1="25" x2="${W}" y2="25" stroke="var(--text-muted)" stroke-width="2"/>
        <path d="M${W-6},22 L${W},25 L${W-6},28" fill="var(--text-muted)"/>
        ${ticks}
        <path d="M${ax},18 Q${(ax+tx)/2},6 ${tx},18"
              fill="none" stroke="${arrowColor}" stroke-width="2" marker-end="url(#arr)"/>
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="${arrowColor}"/>
          </marker>
        </defs>
      </svg>
    </div>`;
}

function buildBarChartHTML(vars) {
    const a = vars?.a || 40, b = vars?.b || 65;
    const bars = [
        { label: 'A', value: a, color: 'var(--accent)' },
        { label: 'B', value: b, color: 'var(--success)' },
        { label: 'C', value: Math.abs(a - b), color: 'var(--warning)' },
    ];
    const maxVal = Math.max(...bars.map(x => x.value), 10);
    const H = 120, W = 220;

    const rects = bars.map((bar, i) => {
        const bh = (bar.value / maxVal) * 80;
        const x = 30 + i * 60;
        return `
          <rect x="${x}" y="${H - 25 - bh}" width="40" height="${bh}" fill="${bar.color}" rx="3"/>
          <text x="${x+20}" y="${H - 25 - bh - 5}" text-anchor="middle" font-size="10" fill="var(--text)">${bar.value}</text>
          <text x="${x+20}" y="${H - 10}" text-anchor="middle" font-size="11" fill="var(--text-muted)">${bar.label}</text>
        `;
    }).join('');

    return `
    <div class="q-text">Sütun grafiğindeki veriler:</div>
    <div class="q-visual" style="text-align:center;margin:10px 0">
      <svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:280px">
        <line x1="20" y1="0" x2="20" y2="${H-25}" stroke="var(--text-muted)" stroke-width="1.5"/>
        <line x1="20" y1="${H-25}" x2="${W}" y2="${H-25}" stroke="var(--text-muted)" stroke-width="1.5"/>
        ${rects}
      </svg>
    </div>`;
}

function buildPieChartHTML(vars) {
    const p = vars?.p || 30;
    const angle = p * 3.6;
    const rad = angle * Math.PI / 180;
    const cx = 60, cy = 60, r = 50;
    const x1 = cx + r * Math.cos(-Math.PI/2);
    const y1 = cy + r * Math.sin(-Math.PI/2);
    const x2 = cx + r * Math.cos(-Math.PI/2 + rad);
    const y2 = cy + r * Math.sin(-Math.PI/2 + rad);
    const large = angle > 180 ? 1 : 0;

    return `
    <div class="q-text">Daire grafiğinde <strong>%${p}</strong>'lik dilim:</div>
    <div class="q-visual" style="text-align:center;margin:10px 0">
      <svg viewBox="0 0 120 120" width="120" height="120">
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--card-bg)" stroke="var(--border)" stroke-width="1"/>
        <path d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} Z"
              fill="var(--accent)" opacity="0.85"/>
        <text x="${cx}" y="${cy+5}" text-anchor="middle" font-size="11" fill="var(--text)">%${p}</text>
      </svg>
    </div>`;
}

function buildCoordinateHTML(text, vars) {
    const a = vars?.a || 2, b = vars?.b || 1;
    const W = 200, H = 200, O = 100;
    const scale = 18;
    // draw y=ax+b line
    const x0 = -O/scale, xn = O/scale;
    const y0 = a*x0+b, yn = a*xn+b;
    const toSVG = (xv, yv) => [O + xv*scale, O - yv*scale];
    const [sx0, sy0] = toSVG(x0, y0);
    const [sxn, syn] = toSVG(xn, yn);

    return `
    <div class="q-text">${text.replace(/\n/g,'<br>')}</div>
    <div class="q-visual" style="text-align:center;margin:10px 0">
      <svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:220px">
        <!-- grid -->
        ${[-4,-3,-2,-1,0,1,2,3,4].map(i => `
          <line x1="${O+i*scale}" y1="10" x2="${O+i*scale}" y2="${H-10}" stroke="var(--border)" stroke-width="0.5"/>
          <line x1="10" y1="${O+i*scale}" x2="${W-10}" y2="${O+i*scale}" stroke="var(--border)" stroke-width="0.5"/>
        `).join('')}
        <!-- axes -->
        <line x1="10" y1="${O}" x2="${W-10}" y2="${O}" stroke="var(--text-muted)" stroke-width="1.5"/>
        <line x1="${O}" y1="10" x2="${O}" y2="${H-10}" stroke="var(--text-muted)" stroke-width="1.5"/>
        <!-- line y=ax+b -->
        <line x1="${sx0}" y1="${sy0}" x2="${sxn}" y2="${syn}" stroke="var(--accent)" stroke-width="2"/>
        <!-- labels -->
        <text x="${W-8}" y="${O-4}" font-size="10" fill="var(--text-muted)">x</text>
        <text x="${O+4}" y="16" font-size="10" fill="var(--text-muted)">y</text>
        <text x="${O+5}" y="${O+12}" font-size="9" fill="var(--text-muted)">0</text>
      </svg>
      <div style="font-size:11px;color:var(--text-muted);margin-top:4px">y = ${a}x + ${b >= 0 ? '+' : ''}${b}</div>
    </div>`;
}

// ============================================
// SORU ÜRETME MOTORU
// ============================================

let GLOBAL_QUESTION_FINGERPRINTS = new Set();

function generateVariables(varRanges) {
    if (!varRanges || Object.keys(varRanges).length === 0) return {};
    const vars = {};

    for (const [key, range] of Object.entries(varRanges)) {
        if (key === 'kosul') continue;
        if (Array.isArray(range)) {
            vars[key] = randomInt(range[0], range[1]);
        } else if (typeof range === 'string') {
            let expr = range;
            for (const [k, v] of Object.entries(vars)) {
                expr = expr.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
            }
            const val = safeEval(expr);
            vars[key] = val !== null ? Math.round(val) : 0;
        } else {
            vars[key] = range;
        }
    }
    return vars;
}

function generateQuestion(topicId, levelId) {
    const templates = QUESTION_TEMPLATES[topicId];
    if (!templates || !templates.length) {
        return {
            id: 'fallback',
            soru: '1 + 1 = ?',
            cevap: '2',
            cevapRaw: 2,
            zorluk: 'kolay',
            alt: ''
        };
    }

    for (let attempt = 0; attempt < 10; attempt++) {
        const template = templates[Math.floor(Math.random() * templates.length)];
        const vars = generateVariables(template.v);
        if (!vars) continue;

        const questionText = fillTemplate(template.s, vars);
        const answerExpr = fillTemplate(template.c, vars);
        const answer = safeEval(answerExpr);

        if (answer === null || isNaN(answer)) continue;

        const fp = simpleHash(template.id + JSON.stringify(vars));
        if (GLOBAL_QUESTION_FINGERPRINTS.has(fp) && GLOBAL_QUESTION_FINGERPRINTS.size < templates.length * 2) continue;
        GLOBAL_QUESTION_FINGERPRINTS.add(fp);

        return {
            id: `q_${template.id}_${fp}`,
            soru: questionText,
            cevap: String(Number.isInteger(answer) ? answer : Math.round(answer * 1000) / 1000),
            cevapRaw: answer,
            zorluk: template.z || 'orta',
            inputType: 'keyboard',
            cozum: null,
            alt: template.alt || '',
            vars: vars,
            templateId: template.id,
            rawTemplate: template
        };
    }

    return { id: 'fallback', soru: '5 + 3 = ?', cevap: '8', cevapRaw: 8, zorluk: 'kolay', alt: '' };
}

// ============================================
// GROK API — SORU ÇÖZÜM AÇIKLAMASI
// ============================================

async function askGrokForSolution(question, correctAnswer, userAnswer) {
    if (!ST.grokApiKey) {
        return '⚠️ Grok API anahtarı girilmedi. Ayarlar\'dan ekleyin.';
    }

    const prompt = `Sen bir KPSS matematik öğretmenisin. Aşağıdaki soruyu Türkçe, adım adım ve anlaşılır biçimde açıkla.

Soru: ${question}
Doğru cevap: ${correctAnswer}
Öğrencinin cevabı: ${userAnswer || '(boş bıraktı)'}

Lütfen:
1. Soruyu kısa çöz (3-5 adım)
2. Hangi formül/kural kullanıldığını belirt
3. Öğrencinin hatasını varsa düzelt
4. Sonucu vurgula`;

    try {
        const res = await fetch(GROK_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ST.grokApiKey}`
            },
            body: JSON.stringify({
                model: GROK_MODEL,
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 600,
                temperature: 0.3
            })
        });

        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.error?.message || `HTTP ${res.status}`);
        }

        const data = await res.json();
        return data.choices?.[0]?.message?.content || 'Açıklama alınamadı.';
    } catch(e) {
        console.error('Grok API hatası:', e);
        return `❌ Grok API hatası: ${e.message}`;
    }
}

// Grok butonunu render et (yanlış cevap sonrası)
function renderGrokBtn(targetEl, question, correctAnswer, userAnswer) {
    const btn = document.createElement('button');
    btn.className = 'btn btn-grok btn-full';
    btn.innerHTML = '🤖 Grok ile Çözümü Gör';
    btn.style.marginTop = '10px';

    btn.onclick = async () => {
        btn.disabled = true;
        btn.innerHTML = dots() + ' Grok düşünüyor...';

        const explanation = await askGrokForSolution(question, correctAnswer, userAnswer);

        const box = document.createElement('div');
        box.className = 'grok-explanation';
        box.innerHTML = `
            <div class="grok-header">🤖 <strong>Grok Açıklıyor</strong></div>
            <div class="grok-body">${explanation.replace(/\n/g, '<br>')}</div>
        `;
        btn.replaceWith(box);
    };

    targetEl.appendChild(btn);
}

// ============================================
// STATE YÖNETİM FONKSİYONLARI
// ============================================

function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem('kpss_mat_v6') || '{}');
        if (saved.version === STATE_VERSION) {
            Object.assign(ST, saved);
        } else if (saved.version && saved.version < STATE_VERSION) {
            // Eski sürümden geçiş: önemli verileri koru
            if (saved.completedTopics) ST.completedTopics = saved.completedTopics;
            if (saved.totalCorrect)    ST.totalCorrect    = saved.totalCorrect;
            if (saved.totalQ)          ST.totalQ          = saved.totalQ;
            if (saved.maxStreak)       ST.maxStreak       = saved.maxStreak;
            if (saved.hist)            ST.hist            = saved.hist;
            console.log('⬆️ Eski state verisi aktarıldı.');
        }
    } catch (e) { console.warn(e); }

    ST.grokApiKey = localStorage.getItem('kpss_grok_api_key') || '';

    // Geçersiz level düzelt
    if (typeof LEVELS !== 'undefined' && ST.currentLevel && !LEVELS[ST.currentLevel]) {
        ST.currentLevel = '0';
    }

    for (let i = 1; i <= 205; i++) {
        if (!ST.hist[i]) ST.hist[i] = { levels: {}, currentLevel: '0' };
    }

    if (!ST.questionBankProgress) ST.questionBankProgress = {};
    if (!ST.examSets) ST.examSets = {};
}

function saveState() {
    try {
        const { grokApiKey, cq, ...d } = ST;
        localStorage.setItem('kpss_mat_v6', JSON.stringify(d));
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

function showView(id, pushHistory = true) {
    document.getElementById(currentView)?.classList.remove('active');
    document.getElementById(id)?.classList.add('active');
    currentView = id;
    ST.lastView = id;
    updateHeader(id);
    window.scrollTo(0, 0);

    if (pushHistory) history.pushState({ view: id }, '', '#/' + id);

    if      (id === 'vHome')         updateHomeStats();
    else if (id === 'vTopics')       renderTopicsList();
    else if (id === 'vLearn')        renderPreStudySummary();
    else if (id === 'vQuestionBank') renderQuestionBankList();
    else if (id === 'vStats')        renderStats();
    else if (id === 'vExamList')     renderExamList();

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

window.goBack      = () => history.back();
window.goHome      = () => showView('vHome');
window.goTopics    = () => showView('vTopics');
window.goQuestionBank = () => showView('vQuestionBank');
window.goExamList  = () => showView('vExamList');
window.goStats     = () => showView('vStats');
window.toggleMenu  = () => document.getElementById('sideMenu')?.classList.toggle('hidden');

// ============================================
// ANA SAYFA
// ============================================

function updateHomeStats() {
    const done = ST.completedTopics.length;
    const acc  = ST.totalQ > 0 ? Math.round((ST.totalCorrect / ST.totalQ) * 100) : 0;

    document.getElementById('statTopics').textContent    = done;
    document.getElementById('statQuestions').textContent = ST.totalQ;
    document.getElementById('statAccuracy').textContent  = '%' + acc;
    document.getElementById('statStreak').textContent    = ST.maxStreak;

    if (typeof TOPICS !== 'undefined' && TOPICS.length) {
        const nt = TOPICS.find(t => !ST.completedTopics.includes(t.id));
        document.getElementById('nextTopicBadge').textContent =
            nt ? `🎯 Sıradaki: ${nt.e} ${nt.n}` : '🏆 Tüm konular tamamlandı!';
    }
}

// ============================================
// KONU LİSTESİ
// ============================================

function renderTopicsList() {
    const el = document.getElementById('topicsList');
    if (!el || typeof TOPICS === 'undefined') return;

    let html = '', lp = '';

    TOPICS.forEach(t => {
        if (t.p !== lp) { lp = t.p; html += `<div class="phase-sep">${t.p}</div>`; }

        const done   = ST.completedTopics.includes(t.id);
        const prev   = TOPICS.find(pt => pt.order === t.order - 1);
        const locked = prev && !ST.completedTopics.includes(prev.id);

        let tq = 0;
        const h = getHist(t.id);
        if (h.levels) Object.values(h.levels).forEach(lv => { if (lv) tq += lv.total || 0; });
        const pct = Math.min(100, Math.round((tq / 30) * 100));

        let cls = 'topic-row';
        if (done)            cls += ' t-done';
        else if (t.id === ST.topic) cls += ' t-current';
        else if (locked)     cls += ' t-locked';

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

    document.getElementById('learnTitle').textContent  = `${t.e} ${t.n}`;
    const levelInfo = getLevelConfig(ST.currentLevel);
    document.getElementById('learnKademe').textContent = levelInfo ? levelInfo.name : 'Seviye ' + ST.currentLevel;

    const lh      = (getHist(ST.topic).levels || {})[ST.currentLevel] || { correct: 0, total: 0 };
    const limit   = levelInfo ? levelInfo.questionCount : 10;
    const minCorr = levelInfo ? levelInfo.minCorrect : 8;

    document.getElementById('learnContent').innerHTML = `
        <div class="card accent-top">
            <h3>📖 ${t.n}</h3>
            <p style="color:var(--text-muted)">${levelInfo?.description || ''}</p>
            <p style="color:var(--text-muted);font-size:13px;margin-top:6px">
                ${limit} soru çözeceksin. ${minCorr} doğru yaparak seviyeyi geçebilirsin.
            </p>
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
            <p style="font-size:12px;color:var(--text-muted);margin-top:8px">🎯 En az ${minCorr} doğru yapmalısın</p>
            <p style="font-size:11px;color:var(--warning);margin-top:4px">⚡ ${levelInfo?.difficultyHint || ''}</p>
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

    const level     = ST.currentLevel;
    const levelInfo = getLevelConfig(level);

    document.getElementById('learnTitle').textContent  = `${t.e} ${t.n}`;
    document.getElementById('learnKademe').textContent = levelInfo ? levelInfo.name : 'Seviye ' + level;

    const el = document.getElementById('learnContent');
    if (!el) return;

    el.innerHTML = `<div class="card">${dots()}</div>`;

    const qData = generateQuestion(ST.topic, level);
    if (!qData) { el.innerHTML = '<div class="err">Soru üretilemedi</div>'; return; }

    ST.cq = { ...qData, level };

    const hist  = getHist(ST.topic);
    const lh    = hist.levels?.[level] || { correct: 0, total: 0 };
    const limit = levelInfo ? levelInfo.questionCount : 10;
    const zc    = qData.zorluk === 'kolay' ? 'badge-grn' : (qData.zorluk === 'zor' ? 'badge-red' : 'badge-warn');

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
            ${renderQuestionHTML(qData, qData.vars)}
            <div class="ans-row" style="margin-top:12px">
                <input id="ansInp" class="ans-inp" type="text"
                       inputmode="decimal" placeholder="Cevabını yaz..."
                       autocomplete="off" onkeydown="if(event.key==='Enter') checkAnswer()">
                <button class="btn btn-primary" onclick="checkAnswer()">✓</button>
            </div>
            <div class="ans-hint">Sayı veya kesir (ör: 3/4) olarak yaz</div>
        </div>
    `;

    setTimeout(() => document.getElementById('ansInp')?.focus(), 150);
}

window.checkAnswer = function() {
    const inp = document.getElementById('ansInp');
    if (!inp || !inp.value.trim()) return;
    inp.disabled = true;
    if (!ST.cq) return;

    const userAnswer = inp.value.trim();
    const isCorrect  = checkEqual(userAnswer, ST.cq.cevap);
    const level      = ST.cq.level || ST.currentLevel;
    const hist       = getHist(ST.topic);

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
    const limit  = levelInfo ? levelInfo.questionCount : 10;
    const minC   = levelInfo ? levelInfo.minCorrect : 8;

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
                if (!ST.completedTopics.includes(ST.topic)) ST.completedTopics.push(ST.topic);
                celebrate('🏆 Konu Tamamlandı!');
            }
        } else {
            hist.levels[level].correct = 0;
            hist.levels[level].total   = 0;
        }
    }

    saveState();
    ST.phase = 'feedback';

    let nextMsg = '';
    if (levelCompleted && nextLevel) {
        const nli = getLevelConfig(nextLevel);
        nextMsg = `<div style="margin-top:12px;padding:10px;background:var(--success-bg);border-radius:8px;text-align:center">
                    🎉 <strong>${levelInfo ? levelInfo.name : level} Geçildi!</strong><br>
                    → ${nli ? nli.name : 'Yeni Seviye'}
                   </div>`;
    } else if (topicCompleted) {
        nextMsg = `<div style="margin-top:12px;padding:12px;background:var(--success-bg);border-radius:8px;text-align:center">
                    🏆 <strong>Konu Tamamlandı!</strong>
                   </div>`;
    }

    const feedbackEl = document.createElement('div');
    feedbackEl.className = `fb ${isCorrect ? 'fb-ok' : 'fb-fail'}`;
    feedbackEl.innerHTML = `
        <div class="fb-head">
            <span class="fb-icon">${isCorrect ? '🎉' : '❌'}</span>
            <span class="fb-title">${isCorrect ? 'Doğru!' : 'Yanlış'}</span>
        </div>
        <div class="fb-body">
            ${isCorrect
                ? `Cevap: <strong>${ST.cq.cevap}</strong>`
                : `Doğru cevap: <strong>${ST.cq.cevap}</strong> — Senin cevabın: <em>${userAnswer}</em>`
            }
        </div>
        ${nextMsg}
        ${!topicCompleted ? '<div class="btn-row" style="margin-top:12px"><button class="btn btn-ghost btn-full" onclick="nextQuestion()">Sonraki Soru →</button></div>' : ''}
    `;

    document.getElementById('learnContent').appendChild(feedbackEl);

    // Yanlışsa Grok butonu ekle
    if (!isCorrect) {
        renderGrokBtn(feedbackEl, ST.cq.soru, ST.cq.cevap, userAnswer);
    }
};

window.nextQuestion = function() {
    ST.phase = 'question';
    ST.cq    = null;
    renderNextQuestion();
};

// ============================================
// SORU BANKASI
// ============================================

function renderQuestionBankList() {
    const el = document.getElementById('qbTopicsList');
    if (!el || typeof TOPICS === 'undefined') return;

    let html = '', lp = '';

    TOPICS.forEach(t => {
        if (t.p !== lp) { lp = t.p; html += `<div class="phase-sep">${t.p}</div>`; }
        const p   = ST.questionBankProgress[t.id] || { solved: [] };
        const s   = p.solved.length;
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
    ST.cq    = null;
    showView('vQBSolve');
    renderQBSolveHeader();
    renderNextQBQuestion();
};

function renderQBSolveHeader() {
    const t = getTopicById(ST.topic);
    const p = ST.questionBankProgress[ST.topic] || { solved: [] };
    document.getElementById('qbSolveTitle').textContent    = `📝 ${t?.n || ''}`;
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

    const levels = Object.keys(LEVELS || {'0':1,'1':1,'2':1,'3':1,'4':1,'5':1,'6':1,'7':1,'8':1,'9':1,'10':1,'11':1});
    const randomLevel = levels[Math.floor(Math.random() * levels.length)];
    const qData = generateQuestion(ST.topic, randomLevel);

    if (!qData) { el.innerHTML = '<div class="err">Soru üretilemedi</div>'; return; }

    ST.cq = { ...qData, mode: 'questionBank' };
    const t  = getTopicById(ST.topic);
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
            ${renderQuestionHTML(qData, qData.vars)}
            <div class="ans-row" style="margin-top:12px">
                <input id="qbAnsInp" class="ans-inp" type="text"
                       inputmode="decimal" placeholder="Cevabını yaz..."
                       onkeydown="if(event.key==='Enter') checkQBAnswer()">
                <button class="btn btn-primary" onclick="checkQBAnswer()">✓</button>
            </div>
            <button class="btn btn-ghost btn-full" style="margin-top:8px" onclick="skipQBQuestion()">Boş Bırak →</button>
        </div>
    `;

    setTimeout(() => document.getElementById('qbAnsInp')?.focus(), 150);
}

window.checkQBAnswer = function() {
    const inp = document.getElementById('qbAnsInp');
    if (!inp?.value.trim()) return;
    inp.disabled = true;
    if (!ST.cq) return;

    const userAnswer = inp.value.trim();
    const isCorrect  = checkEqual(userAnswer, ST.cq.cevap);
    const progress   = ST.questionBankProgress[ST.topic] || { solved: [] };

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

    const feedbackEl = document.createElement('div');
    feedbackEl.className = `fb ${isCorrect ? 'fb-ok' : 'fb-fail'}`;
    feedbackEl.innerHTML = `
        <div class="fb-head">
            <span class="fb-icon">${isCorrect ? '🎉' : '❌'}</span>
            <span class="fb-title">${isCorrect ? 'Doğru!' : 'Yanlış'}</span>
        </div>
        <div class="fb-body">
            ${isCorrect
                ? `Cevap: <strong>${ST.cq.cevap}</strong>`
                : `Doğru: <strong>${ST.cq.cevap}</strong> — Senin: <em>${userAnswer}</em>`
            }
        </div>
        <div class="btn-row" style="margin-top:12px">
            <button class="btn btn-ghost btn-full" onclick="nextQBQuestion()">Sonraki →</button>
        </div>
    `;

    document.getElementById('qbSolveContent').appendChild(feedbackEl);

    if (!isCorrect) {
        renderGrokBtn(feedbackEl, ST.cq.soru, ST.cq.cevap, userAnswer);
    }
};

window.skipQBQuestion = function() {
    const progress = ST.questionBankProgress[ST.topic] || { solved: [] };
    if (ST.cq && !progress.solved.includes(ST.cq.id)) progress.solved.push(ST.cq.id);
    ST.questionBankProgress[ST.topic] = progress;
    saveState();
    renderQBSolveHeader();
    nextQBQuestion();
};

window.nextQBQuestion = function() { ST.cq = null; renderNextQBQuestion(); };

// ============================================
// DENEME SINAVI
// ============================================

const EXAM_QUESTIONS = 20;
const EXAM_DURATION  = 20;

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
        const setId  = 'set_' + i;
        const set    = ST.examSets[setId] || { completed: false, net: null, date: null };
        const status = set.completed ? `✅ ${set.net} net (${set.date})` : '⭕ Çözülmedi';
        html += `
            <div class="exam-item" onclick="startExamSet('${setId}')">
                <div class="exam-title">Deneme ${i}</div>
                <div class="exam-status">${status}</div>
                <div class="exam-desc">20 soru · 20 dakika</div>
            </div>`;
    }
    html += '</div>';
    el.innerHTML = html;
}

window.startExamSet = function(setId) {
    const questions = [];
    const shuffledTopics = shuffleArray([...TOPICS]);

    for (let i = 0; i < Math.min(EXAM_QUESTIONS, shuffledTopics.length); i++) {
        const t    = shuffledTopics[i];
        const tpls = QUESTION_TEMPLATES[t.id];
        if (!tpls?.length) continue;

        const tpl  = tpls[Math.floor(Math.random() * tpls.length)];
        const vars = generateVariables(tpl.v);
        if (!vars) continue;

        const answer = safeEval(fillTemplate(tpl.c, vars));
        if (answer === null) continue;

        questions.push({
            id:        `exam_${t.id}_${Date.now()}_${i}`,
            soru:      fillTemplate(tpl.s, vars),
            cevap:     String(Number.isInteger(answer) ? answer : Math.round(answer * 1000) / 1000),
            zorluk:    tpl.z || 'orta',
            topicName: t.n,
            alt:       tpl.alt || '',
            vars:      vars
        });
    }

    const examQuestions = shuffleArray(questions).slice(0, EXAM_QUESTIONS);
    ST.currentExam = {
        setId,
        questions:    examQuestions,
        currentIndex: 0,
        answers:      [],
        timeLeft:     EXAM_DURATION * 60
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
    // Kırmızıya dön son 60 sn
    el.style.color = ST.currentExam.timeLeft < 60 ? 'var(--danger)' : '';
}

function loadExamQuestion(idx) {
    if (idx >= ST.currentExam.questions.length) { finishExam(); return; }

    ST.currentExam.currentIndex = idx;
    const q  = ST.currentExam.questions[idx];
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
            ${renderQuestionHTML(q, q.vars)}
            <div class="ans-row" style="margin-top:12px">
                <input id="examAnsInp" class="ans-inp" type="text"
                       inputmode="decimal" placeholder="Cevabını yaz..."
                       onkeydown="if(event.key==='Enter') submitExamAnswer()">
                <button class="btn btn-primary" onclick="submitExamAnswer()">✓</button>
            </div>
            <button class="btn btn-ghost btn-full" style="margin-top:8px" onclick="skipExamAnswer()">Boş Bırak →</button>
        </div>
    `;

    setTimeout(() => document.getElementById('examAnsInp')?.focus(), 150);
}

window.submitExamAnswer = function() {
    const inp = document.getElementById('examAnsInp');
    const userAnswer = inp?.value?.trim() || '';
    const q = ST.currentExam.questions[ST.currentExam.currentIndex];

    ST.currentExam.answers.push({
        correctAnswer: q.cevap,
        userAnswer,
        isCorrect: checkEqual(userAnswer, q.cevap),
        skipped: false,
        question: q.soru
    });

    loadExamQuestion(ST.currentExam.currentIndex + 1);
};

window.skipExamAnswer = function() {
    const q = ST.currentExam.questions[ST.currentExam.currentIndex];
    ST.currentExam.answers.push({
        correctAnswer: q.cevap,
        userAnswer: '',
        isCorrect: false,
        skipped: true,
        question: q.soru
    });
    loadExamQuestion(ST.currentExam.currentIndex + 1);
};

function finishExam() {
    if (ST.examTimer) clearInterval(ST.examTimer);
    if (!ST.currentExam) return;

    const answers = ST.currentExam.answers;
    const d   = answers.filter(a => a.isCorrect).length;
    const y   = answers.filter(a => !a.isCorrect && !a.skipped).length;
    const bos = answers.filter(a => a.skipped).length;
    const net = (d - y * 0.25).toFixed(2);

    const sd = ST.examSets[ST.currentExam.setId];
    if (sd && !sd.completed) { sd.completed = true; sd.net = net; sd.date = todayStr(); }

    saveState();

    // Yanlışlar listesi (Grok butonu ile)
    let wrongList = answers.filter(a => !a.isCorrect && !a.skipped).map((a, i) =>
        `<div class="wrong-item" id="wrong_${i}">
            <div style="font-size:12px;color:var(--text-muted)">${a.question}</div>
            <div>Doğru: <strong>${a.correctAnswer}</strong> — Senin: <em>${a.userAnswer}</em></div>
         </div>`
    ).join('');

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
                    <div class="stat-num" style="color:var(--warning)">${bos}</div>
                    <div class="stat-lbl">Boş</div>
                </div>
            </div>
            <div class="btn-row">
                <button class="btn btn-primary btn-full" onclick="startExamSet('${ST.currentExam?.setId || 'set_1'}')">🔄 Tekrar</button>
                <button class="btn btn-ghost btn-full" onclick="goExamList()">Listeye Dön</button>
            </div>
        </div>
        ${wrongList ? `<div class="card" style="margin-top:12px"><h3>❌ Yanlışlar</h3>${wrongList}</div>` : ''}
    `;

    // Her yanlış için Grok butonu
    answers.filter(a => !a.isCorrect && !a.skipped).forEach((a, i) => {
        const target = document.getElementById('wrong_' + i);
        if (target) renderGrokBtn(target, a.question, a.correctAnswer, a.userAnswer);
    });

    ST.currentExam = null;
}

window.cancelExam = function() {
    if (ST.examTimer) clearInterval(ST.examTimer);
    if (confirm('Denemeyi iptal et?')) { ST.currentExam = null; goExamList(); }
};

// ============================================
// İSTATİSTİK
// ============================================

function renderStats() {
    const el = document.getElementById('statsContent');
    if (!el) return;

    const done = ST.completedTopics.length;
    const acc  = ST.totalQ > 0 ? Math.round((ST.totalCorrect / ST.totalQ) * 100) : 0;

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
                    <div class="prog-bar-fill fill-acc" style="width:${Math.round((done/205)*100)}%"></div>
                </div>
            </div>
            <div class="prog-bar-wrap" style="margin-top:10px">
                <div class="prog-bar-label">
                    <span>Soru Bankası</span>
                    <span>${qbs}/${205*300}</span>
                </div>
                <div class="prog-bar-bg">
                    <div class="prog-bar-fill fill-grn" style="width:${Math.round((qbs/(205*300))*100)}%"></div>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// MODAL & AYARLAR
// ============================================

window.openModal = function(id) {
    const el = document.getElementById(id + 'Modal');
    if (el) el.classList.remove('hidden');
    if (id === 'api') {
        const inp = document.getElementById('apiInp');
        if (inp) inp.value = ST.grokApiKey;
    }
};

window.closeModal = function(id) {
    document.getElementById(id + 'Modal')?.classList.add('hidden');
};

window.saveKey = function() {
    const k = document.getElementById('apiInp')?.value?.trim();
    if (!k) return;
    ST.grokApiKey = k;
    localStorage.setItem('kpss_grok_api_key', k);
    closeModal('api');
    alert('✅ Grok API anahtarı kaydedildi!');
};

// ============================================
// SIFIRLAMA
// ============================================

window.doReset = function(type) {
    closeModal('reset');

    if (type === 'all') {
        if (!confirm('TÜM VERİLER SİLİNECEK! Emin misiniz?')) return;

        const ak = ST.grokApiKey;
        ST = {
            version: STATE_VERSION,
            grokApiKey: ak,
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
        ST.currentLevel   = '0';
        ST.completedTopics = ST.completedTopics.filter(id => id !== ST.topic);
        if (ST.questionBankProgress[ST.topic]) delete ST.questionBankProgress[ST.topic];
        saveState();

        if (currentView === 'vLearn') renderPreStudySummary();
        else renderTopicsList();

        alert(`✅ ${t?.n} sıfırlandı!`);
    }
};

// ============================================
// BAŞLATMA
// ============================================

(function waitForDeps() {
    if (typeof TOPICS      === 'undefined' ||
        typeof LEVELS      === 'undefined' ||
        typeof SORU_BANKASI === 'undefined') {
        console.log('⏳ Bağımlılıklar bekleniyor...', {
            TOPICS: typeof TOPICS,
            LEVELS: typeof LEVELS,
            SORU_BANKASI: typeof SORU_BANKASI
        });
        setTimeout(waitForDeps, 100);
        return;
    }
    console.log('✅ Tüm bağımlılıklar yüklendi!');
    startApp();
})();

function startApp() {
    loadState();
    convertQuestionBankToTemplates();
    initExamSets();
    const targetView = ST.lastView || 'vHome';
    history.replaceState({ view: targetView }, '', '#/' + targetView);
    showView(targetView, false);
    saveState();
    console.log('✅ app.js v6.0 hazır! (12 Level | Grok API | Görsel Motor)');
}

// Sayfa geçmişi
window.addEventListener('popstate', function(event) {
    if (event.state?.view) showView(event.state.view, false);
    else showView('vHome', false);
});

// ============================================
// EK CSS — Görsel motor & Grok için gerekli
// (HTML'de <style> yoksa dinamik ekle)
// ============================================

(function injectExtraStyles() {
    if (document.getElementById('app-extra-styles')) return;
    const style = document.createElement('style');
    style.id = 'app-extra-styles';
    style.textContent = `
        /* Görsel soru kutusu */
        .q-visual {
            margin: 10px 0;
            padding: 8px;
            background: var(--card-bg, #f8f9fa);
            border: 1px solid var(--border, #e0e0e0);
            border-radius: 10px;
        }

        /* Tablo stilleri */
        .q-table {
            border-collapse: collapse;
            width: 100%;
            font-size: 13px;
        }
        .q-table th, .q-table td {
            border: 1px solid var(--border, #ddd);
            padding: 5px 8px;
            text-align: center;
        }
        .q-table th {
            background: var(--accent, #4f8ef7);
            color: white;
            font-weight: 600;
        }
        .cell-target {
            background: var(--warning-bg, #fff3cd);
            color: var(--danger, #e53935);
            font-weight: 700;
            font-size: 15px;
        }
        .carpim-table { font-size: 11px; }
        .carpim-table th, .carpim-table td { padding: 3px 5px; }

        /* Alt alta işlem */
        .stacked-op {
            font-family: monospace;
            font-size: 18px;
            text-align: right;
            padding: 12px 16px;
            max-width: 200px;
        }
        .stacked-row { padding: 2px 0; }
        .stacked-row.op { color: var(--accent, #4f8ef7); }
        .stacked-line {
            border-top: 2px solid var(--text-muted, #888);
            margin: 4px 0;
        }
        .stacked-row.result { font-weight: 700; }

        /* Grok açıklama kutusu */
        .btn-grok {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: #e2e8f0;
            border: 1px solid #4a5568;
            font-size: 13px;
            padding: 10px;
        }
        .btn-grok:hover { opacity: 0.9; }
        .grok-explanation {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            border: 1px solid #4a5568;
            border-radius: 10px;
            padding: 12px;
            margin-top: 10px;
            color: #e2e8f0;
        }
        .grok-header {
            font-size: 13px;
            font-weight: 600;
            color: #90cdf4;
            margin-bottom: 8px;
            border-bottom: 1px solid #4a5568;
            padding-bottom: 6px;
        }
        .grok-body {
            font-size: 13px;
            line-height: 1.6;
        }

        /* Yanlış sorular listesi */
        .wrong-item {
            border-left: 3px solid var(--danger, #e53935);
            padding: 8px 10px;
            margin: 8px 0;
            background: var(--card-bg, #fff);
            border-radius: 0 8px 8px 0;
            font-size: 13px;
        }

        /* Mobil uyum */
        @media (max-width: 480px) {
            .q-visual { padding: 6px; }
            .q-table { font-size: 11px; }
            .carpim-table { font-size: 9px; }
            .carpim-table th, .carpim-table td { padding: 2px 3px; }
            .stacked-op { font-size: 16px; }
            .grok-body { font-size: 12px; }
        }
    `;
    document.head.appendChild(style);
})();
