// ============================================
// app.js - KPSS/DGS Soru Üretici
// questions.js ile tam uyumlu
// ============================================

// ============================================
// YARDIMCI FONKSİYONLAR
// ============================================

function random(min, max) {
    if (Array.isArray(min)) {
        return min[Math.floor(Math.random() * min.length)];
    }
    if (typeof min === 'number' && typeof max === 'number') {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return min;
}

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function placeVariables(template, vObj) {
    let result = template;
    const matches = template.match(/\{[^}]+\}/g) || [];
    
    for (const match of matches) {
        const varName = match.slice(1, -1);
        if (vObj[varName] !== undefined) {
            result = result.replace(match, vObj[varName]);
        }
    }
    return result;
}

function evaluateExpression(expr, vObj) {
    try {
        let processed = expr;
        for (const [key, val] of Object.entries(vObj)) {
            processed = processed.replace(new RegExp(`\\{${key}\\}`, 'g'), val);
        }
        if (/^[0-9+\-*/() ]+$/.test(processed)) {
            return Function('"use strict";return (' + processed + ')')();
        }
        return processed;
    } catch(e) {
        return expr;
    }
}

function generateVariables(varDef) {
    const vObj = {};
    const tempValues = {};
    
    for (const [key, range] of Object.entries(varDef)) {
        if (Array.isArray(range)) {
            if (range.length === 2) {
                vObj[key] = random(range[0], range[1]);
            } else if (range.length === 3) {
                const step = range[2];
                const min = range[0];
                const max = range[1];
                const value = random(Math.ceil(min/step), Math.floor(max/step)) * step;
                vObj[key] = value;
            } else {
                vObj[key] = randomChoice(range);
            }
        } else if (typeof range === 'string') {
            tempValues[key] = range;
        } else {
            vObj[key] = range;
        }
    }
    
    for (const [key, expr] of Object.entries(tempValues)) {
        vObj[key] = evaluateExpression(expr, vObj);
    }
    
    return vObj;
}

function checkCondition(condition, vObj) {
    if (!condition) return true;
    
    let processed = condition;
    for (const [key, val] of Object.entries(vObj)) {
        processed = processed.replace(new RegExp(`\\{${key}\\}`, 'g'), val);
    }
    
    try {
        return Function('"use strict";return (' + processed + ')')();
    } catch(e) {
        return true;
    }
}

function prepareQuestion(qTemplate) {
    let vObj = generateVariables(qTemplate.v);
    
    let deneme = 0;
    while (!checkCondition(qTemplate.kosul, vObj) && deneme < 100) {
        vObj = generateVariables(qTemplate.v);
        deneme++;
    }
    
    const soru = placeVariables(qTemplate.s, vObj);
    
    let cevap = qTemplate.c;
    if (typeof cevap === 'string' && cevap.includes('{')) {
        cevap = placeVariables(cevap, vObj);
        if (/^[0-9+\-*/() ]+$/.test(cevap)) {
            try {
                cevap = Function('"use strict";return (' + cevap + ')')();
            } catch(e) {}
        }
    }
    
    return {
        id: qTemplate.id,
        soru: soru,
        cevap: cevap,
        zorluk: qTemplate.z,
        altDal: qTemplate.alt
    };
}

// ============================================
// SORU ÜRETİM FONKSİYONLARI
// ============================================

function getSorular(seviye, zorluk = null) {
    if (!QUESTIONS[seviye]) return [];
    
    let sorular = [...QUESTIONS[seviye]];
    
    if (zorluk) {
        sorular = sorular.filter(q => q.z === zorluk);
    }
    
    return sorular;
}

function generateQuestions(seviye, zorluk, soruSayisi, altDal = null) {
    let havuz = getSorular(seviye, zorluk);
    
    if (altDal) {
        havuz = havuz.filter(q => q.alt === altDal);
    }
    
    if (havuz.length === 0) return [];
    
    const sorular = [];
    for (let i = 0; i < soruSayisi; i++) {
        const template = randomChoice(havuz);
        sorular.push(prepareQuestion(template));
    }
    
    return sorular;
}

function getSeviyeBilgileri() {
    const bilgiler = {};
    for (const [seviye, sorular] of Object.entries(QUESTIONS)) {
        if (isNaN(parseInt(seviye))) continue;
        bilgiler[seviye] = {
            toplamSoru: sorular.length,
            altDallar: [...new Set(sorular.map(q => q.alt).filter(Boolean))]
        };
    }
    return bilgiler;
}

function getAltDallar(seviye) {
    if (!QUESTIONS[seviye]) return [];
    return [...new Set(QUESTIONS[seviye].map(q => q.alt).filter(Boolean))];
}

// ============================================
// UI İŞLEMLERİ
// ============================================

let currentQuestions = [];
let userAnswers = {};

function renderQuestions() {
    const container = document.getElementById('sorularContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    currentQuestions.forEach((q, index) => {
        const isAnswered = userAnswers[index] !== undefined;
        const isCorrect = isAnswered && Math.abs(userAnswers[index] - q.cevap) < 0.01;
        
        const soruCard = document.createElement('div');
        soruCard.className = `soru-card ${isAnswered ? 'cevaplanmis' : ''}`;
        
        const zorlukClass = {
            'kolay': 'kolay',
            'orta': 'orta',
            'zor': 'zor',
            'cok_zor': 'cok_zor'
        }[q.zorluk] || 'orta';
        
        soruCard.innerHTML = `
            <div class="soru-header">
                <span class="soru-numara">Soru ${index + 1}</span>
                <span class="soru-zorluk ${zorlukClass}">${q.zorluk.toUpperCase()}</span>
            </div>
            <div class="soru-metin">${q.soru}</div>
            <div class="soru-cevap-alani">
                <input type="number" class="soru-input" id="input_${index}" 
                       placeholder="Cevabınızı girin..." 
                       ${isAnswered ? 'disabled' : ''}
                       value="${isAnswered ? userAnswers[index] : ''}">
                <button class="soru-kontrol-btn" data-index="${index}" ${isAnswered ? 'disabled' : ''}>
                    ${isAnswered ? '✓ Cevaplandı' : 'Kontrol Et'}
                </button>
            </div>
            ${isAnswered ? `
                <div class="soru-sonuc ${isCorrect ? 'dogru' : 'yanlis'}">
                    ${isCorrect ? '✓ Doğru Cevap!' : `✗ Yanlış! Doğru cevap: ${q.cevap}`}
                </div>
            ` : ''}
        `;
        
        container.appendChild(soruCard);
    });
    
    // Kontrol butonlarına event listener ekle
    document.querySelectorAll('.soru-kontrol-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(btn.dataset.index);
            const input = document.getElementById(`input_${index}`);
            const userValue = parseFloat(input.value);
            
            if (isNaN(userValue)) {
                alert('Lütfen bir sayı girin!');
                return;
            }
            
            userAnswers[index] = userValue;
            updateStats();
            renderQuestions();
        });
    });
}

function updateStats() {
    let dogru = 0;
    let yanlis = 0;
    
    for (let i = 0; i < currentQuestions.length; i++) {
        if (userAnswers[i] !== undefined) {
            if (Math.abs(userAnswers[i] - currentQuestions[i].cevap) < 0.01) {
                dogru++;
            } else {
                yanlis++;
            }
        }
    }
    
    const toplamCevaplanan = dogru + yanlis;
    const basari = toplamCevaplanan > 0 ? (dogru / toplamCevaplanan * 100).toFixed(0) : 0;
    
    const statsDiv = document.getElementById('stats');
    if (statsDiv) {
        statsDiv.style.display = 'flex';
    }
    
    const dogruSpan = document.getElementById('dogruSayisi');
    const yanlisSpan = document.getElementById('yanlisSayisi');
    const basariSpan = document.getElementById('basariYuzdesi');
    
    if (dogruSpan) dogruSpan.textContent = dogru;
    if (yanlisSpan) yanlisSpan.textContent = yanlis;
    if (basariSpan) basariSpan.textContent = `${basari}%`;
}

function loadAltDallar(seviye) {
    const altDallar = getAltDallar(seviye);
    const select = document.getElementById('altDalSelect');
    if (!select) return;
    
    select.innerHTML = '<option value="">Tüm Konular</option>';
    altDallar.forEach(alt => {
        const option = document.createElement('option');
        option.value = alt;
        option.textContent = alt.replace(/_/g, ' ').toUpperCase();
        select.appendChild(option);
    });
}

// ============================================
// SAYFA YÜKLENİNCE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Seviye bilgilerini göster
    const bilgiler = getSeviyeBilgileri();
    let toplamSoru = 0;
    for (const [seviye, bilgi] of Object.entries(bilgiler)) {
        toplamSoru += bilgi.toplamSoru;
    }
    const toplamSpan = document.getElementById('toplamSoru');
    if (toplamSpan) toplamSpan.textContent = toplamSoru;
    
    // Seviye değişince alt dalları güncelle
    const seviyeSelect = document.getElementById('seviyeSelect');
    if (seviyeSelect) {
        seviyeSelect.addEventListener('change', () => {
            loadAltDallar(parseInt(seviyeSelect.value));
        });
        loadAltDallar(parseInt(seviyeSelect.value));
    }
    
    // Zorluk butonları
    let seciliZorluk = 'orta';
    document.querySelectorAll('.zorluk-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.zorluk-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            seciliZorluk = btn.dataset.zorluk;
        });
    });
    
    // Soru sayısı slider
    const soruSayisiSlider = document.getElementById('soruSayisi');
    const soruSayisiValue = document.getElementById('soruSayisiValue');
    if (soruSayisiSlider && soruSayisiValue) {
        soruSayisiSlider.addEventListener('input', () => {
            soruSayisiValue.textContent = `${soruSayisiSlider.value} soru`;
        });
    }
    
    // Soru üret butonu
    const soruUretBtn = document.getElementById('soruUretBtn');
    if (soruUretBtn) {
        soruUretBtn.addEventListener('click', () => {
            const seviye = parseInt(document.getElementById('seviyeSelect').value);
            const altDal = document.getElementById('altDalSelect').value;
            const soruSayisi = parseInt(document.getElementById('soruSayisi').value);
            
            currentQuestions = generateQuestions(seviye, seciliZorluk, soruSayisi, altDal || null);
            userAnswers = {};
            
            if (currentQuestions.length === 0) {
                alert('Bu kriterlere uygun soru bulunamadı!');
                return;
            }
            
            renderQuestions();
            updateStats();
        });
    }
    
    // İlk soruları yükle
    setTimeout(() => {
        soruUretBtn.click();
    }, 100);
});
