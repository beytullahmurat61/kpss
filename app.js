// ============================================
// app.js - KPSS/DGS Soru Üretici
// questions.js ile tam uyumlu - Eski mantık
// ============================================

// ============================================
// YARDIMCI FONKSİYONLAR
// ============================================

function random(min, max) {
    if (Array.isArray(min)) {
        return min[Math.floor(Math.random() * min.length)];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function placeVariables(template, vars) {
    let result = template;
    const matches = template.match(/\{[^}]+\}/g) || [];
    
    for (const match of matches) {
        const varName = match.slice(1, -1);
        if (vars[varName] !== undefined) {
            result = result.replace(match, vars[varName]);
        }
    }
    return result;
}

function evaluateExpression(expr, vars) {
    try {
        let processed = expr;
        for (const [key, val] of Object.entries(vars)) {
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
    const vars = {};
    const tempValues = {};
    
    for (const [key, range] of Object.entries(varDef)) {
        if (Array.isArray(range)) {
            if (range.length === 2) {
                vars[key] = random(range[0], range[1]);
            } else if (range.length === 3) {
                const step = range[2];
                const min = range[0];
                const max = range[1];
                vars[key] = random(Math.ceil(min/step), Math.floor(max/step)) * step;
            } else {
                vars[key] = randomChoice(range);
            }
        } else if (typeof range === 'string') {
            tempValues[key] = range;
        } else {
            vars[key] = range;
        }
    }
    
    for (const [key, expr] of Object.entries(tempValues)) {
        vars[key] = evaluateExpression(expr, vars);
    }
    
    return vars;
}

function checkCondition(condition, vars) {
    if (!condition) return true;
    
    let processed = condition;
    for (const [key, val] of Object.entries(vars)) {
        processed = processed.replace(new RegExp(`\\{${key}\\}`, 'g'), val);
    }
    
    try {
        return Function('"use strict";return (' + processed + ')')();
    } catch(e) {
        return true;
    }
}

function prepareQuestion(template) {
    let vars = generateVariables(template.v);
    
    let attempts = 0;
    while (!checkCondition(template.kosul, vars) && attempts < 50) {
        vars = generateVariables(template.v);
        attempts++;
    }
    
    const questionText = placeVariables(template.s, vars);
    
    let answer = template.c;
    if (typeof answer === 'string' && answer.includes('{')) {
        answer = placeVariables(answer, vars);
        if (/^[0-9+\-*/() ]+$/.test(answer)) {
            try {
                answer = Function('"use strict";return (' + answer + ')')();
            } catch(e) {}
        }
    }
    
    return {
        id: template.id,
        text: questionText,
        answer: answer,
        difficulty: template.z,
        topic: template.alt
    };
}

// ============================================
// SORU ÜRETİMİ
// ============================================

let currentQuestions = [];
let userAnswers = {};
let questionResults = {};

function getQuestionsByLevel(level, difficulty, topic = null) {
    if (!QUESTIONS[level]) return [];
    
    let filtered = [...QUESTIONS[level]];
    
    if (difficulty) {
        filtered = filtered.filter(q => q.z === difficulty);
    }
    
    if (topic) {
        filtered = filtered.filter(q => q.alt === topic);
    }
    
    return filtered;
}

function generateQuestions(count, level, difficulty, topic = null) {
    const pool = getQuestionsByLevel(level, difficulty, topic);
    
    if (pool.length === 0) return [];
    
    const questions = [];
    for (let i = 0; i < count; i++) {
        const template = randomChoice(pool);
        questions.push(prepareQuestion(template));
    }
    
    return questions;
}

function getTopics(level) {
    if (!QUESTIONS[level]) return [];
    const topics = new Set();
    QUESTIONS[level].forEach(q => {
        if (q.alt) topics.add(q.alt);
    });
    return Array.from(topics);
}

// ============================================
// UI İŞLEMLERİ
// ============================================

function renderQuestions() {
    const container = document.getElementById('questionsArea');
    if (!container) return;
    
    container.innerHTML = '';
    
    currentQuestions.forEach((q, index) => {
        const isAnswered = userAnswers[index] !== undefined;
        const isCorrect = questionResults[index];
        
        const difficultyClass = {
            'kolay': 'kolay',
            'orta': 'orta',
            'zor': 'zor',
            'cok_zor': 'cok_zor'
        }[q.difficulty] || 'orta';
        
        const card = document.createElement('div');
        card.className = 'question-card';
        card.innerHTML = `
            <div class="question-header">
                <span class="question-number">Soru ${index + 1}</span>
                <span class="question-difficulty ${difficultyClass}">${q.difficulty.toUpperCase()}</span>
            </div>
            <div class="question-text">${q.text}</div>
            <input type="number" class="question-input" id="input_${index}" 
                   placeholder="Cevabınızı girin..." 
                   ${isAnswered ? 'disabled' : ''}
                   value="${isAnswered ? userAnswers[index] : ''}">
            <button class="check-btn" data-index="${index}" ${isAnswered ? 'disabled' : ''}>
                ${isAnswered ? (isCorrect ? '✓ Doğru' : '✗ Yanlış') : 'Kontrol Et'}
            </button>
            ${isAnswered ? `
                <div class="result ${isCorrect ? 'correct' : 'wrong'}">
                    ${isCorrect ? '✓ Tebrikler! Doğru cevap.' : `✗ Üzgünüm! Doğru cevap: ${q.answer}`}
                </div>
            ` : ''}
        `;
        
        container.appendChild(card);
    });
    
    // Event listener ekle
    document.querySelectorAll('.check-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(btn.dataset.index);
            const input = document.getElementById(`input_${index}`);
            const userValue = parseFloat(input.value);
            
            if (isNaN(userValue)) {
                alert('Lütfen bir sayı girin!');
                return;
            }
            
            userAnswers[index] = userValue;
            questionResults[index] = Math.abs(userValue - currentQuestions[index].answer) < 0.01;
            
            updateStats();
            renderQuestions();
        });
    });
}

function updateStats() {
    let correct = 0;
    let wrong = 0;
    
    for (let i = 0; i < currentQuestions.length; i++) {
        if (userAnswers[i] !== undefined) {
            if (questionResults[i]) {
                correct++;
            } else {
                wrong++;
            }
        }
    }
    
    const total = correct + wrong;
    const rate = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    const correctSpan = document.getElementById('correctCount');
    const wrongSpan = document.getElementById('wrongCount');
    const rateSpan = document.getElementById('successRate');
    
    if (correctSpan) correctSpan.textContent = correct;
    if (wrongSpan) wrongSpan.textContent = wrong;
    if (rateSpan) rateSpan.textContent = `${rate}%`;
}

function loadTopics(level) {
    const topics = getTopics(level);
    const select = document.getElementById('topicSelect');
    if (!select) return;
    
    select.innerHTML = '<option value="">Tüm Konular</option>';
    topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic.replace(/_/g, ' ').toUpperCase();
        select.appendChild(option);
    });
}

// ============================================
// SAYFA YÜKLENİNCE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    let currentLevel = 0;
    let currentDifficulty = 'orta';
    let currentTopic = '';
    
    const levelSelect = document.getElementById('levelSelect');
    const topicSelect = document.getElementById('topicSelect');
    const newBtn = document.getElementById('newQuestionsBtn');
    
    if (levelSelect) {
        levelSelect.addEventListener('change', () => {
            currentLevel = parseInt(levelSelect.value);
            loadTopics(currentLevel);
        });
        currentLevel = parseInt(levelSelect.value);
        loadTopics(currentLevel);
    }
    
    if (topicSelect) {
        topicSelect.addEventListener('change', () => {
            currentTopic = topicSelect.value;
        });
    }
    
    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentDifficulty = btn.dataset.diff;
        });
    });
    
    if (newBtn) {
        newBtn.addEventListener('click', () => {
            currentQuestions = generateQuestions(10, currentLevel, currentDifficulty, currentTopic || null);
            userAnswers = {};
            questionResults = {};
            
            if (currentQuestions.length === 0) {
                alert('Bu kriterlere uygun soru bulunamadı!');
                return;
            }
            
            renderQuestions();
            updateStats();
        });
        
        // İlk yükleme
        newBtn.click();
    }
});