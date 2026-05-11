// ============================================
// config.js - KPSS MATEMATİK
// Sabitler, Konular, Seviyeler, Formüller
// Versiyon: 2.0
// ============================================

// ==================== STATE VERSİYON ====================
const STATE_VERSION = 2;

// ==================== SEVİYELER ====================
const LEVELS = {
    'KOLAY': {
        name: 'Kolay',
        icon: '🟢',
        questionCount: 10,
        minCorrect: 8    // %80 başarı
    },
    'ORTA': {
        name: 'Orta',
        icon: '🟡',
        questionCount: 12,
        minCorrect: 10   // ~%83 başarı
    },
    'ZOR': {
        name: 'Zor',
        icon: '🔴',
        questionCount: 8,
        minCorrect: 6    // %75 başarı
    }
};

// Toplam soru: 10 + 12 + 8 = 30 ✅

// ==================== KONULAR (YENİ SIRALAMA) ====================
const TOPICS = [
    // ========== FAZ 1: TEMEL İŞLEMLER ==========
    { id: 1,  order: 1,  p: 'TEMEL İŞLEMLER', n: 'Toplama & Çıkarma',      e: '➕', kpss: '1-2 soru', icon: '➕' },
    { id: 2,  order: 2,  p: 'TEMEL İŞLEMLER', n: 'Çarpma & Bölme',         e: '✖️', kpss: '1-2 soru', icon: '✖️' },
    { id: 3,  order: 3,  p: 'TEMEL İŞLEMLER', n: 'Sayılar (Temel Kavram)', e: '🔢', kpss: '1 soru',   icon: '🔢' },
    
    // ========== FAZ 2: BÖLÜNEBİLME ==========
    { id: 4,  order: 4,  p: 'BÖLÜNEBİLME',    n: 'Bölünebilme Kuralları',  e: '➗', kpss: '1 soru',   icon: '➗' },
    { id: 5,  order: 5,  p: 'BÖLÜNEBİLME',    n: 'Asal Sayılar & Çarpan',  e: '🔐', kpss: '1 soru',   icon: '🔐' },
    { id: 6,  order: 6,  p: 'BÖLÜNEBİLME',    n: 'EKOK & EBOB',            e: '🔗', kpss: '1-2 soru', icon: '🔗' },
    
    // ========== FAZ 3: KESİRLER ==========
    { id: 7,  order: 7,  p: 'KESİRLER',        n: 'Kesirler',               e: '🍕', kpss: '1-2 soru', icon: '🍕' },
    { id: 8,  order: 8,  p: 'KESİRLER',        n: 'Ondalık Sayılar',       e: '🔢', kpss: '1 soru',   icon: '🔢' },
    { id: 9,  order: 9,  p: 'KESİRLER',        n: 'Rasyonel Sayılar',      e: '📐', kpss: '1 soru',   icon: '📐' },
    
    // ========== FAZ 4: ÜSLÜ & KÖKLÜ ==========
    { id: 10, order: 10, p: 'ÜSLÜ & KÖKLÜ',    n: 'Üslü Sayılar',          e: '⬆️', kpss: '1-2 soru', icon: '⬆️' },
    { id: 11, order: 11, p: 'ÜSLÜ & KÖKLÜ',    n: 'Köklü Sayılar',         e: '√',  kpss: '1 soru',   icon: '√' },
    
    // ========== FAZ 5: ÇARPANLARA AYIRMA ==========
    { id: 12, order: 12, p: 'ÇARPANLARA AYIRMA', n: 'Çarpanlara Ayırma',   e: '🧩', kpss: '1 soru',   icon: '🧩' },
    { id: 13, order: 13, p: 'ÇARPANLARA AYIRMA', n: 'Özdeşlikler',          e: '📏', kpss: '1 soru',   icon: '📏' },
    
    // ========== FAZ 6: DENKLEMLER ==========
    { id: 14, order: 14, p: 'DENKLEMLER',       n: '1. Derece Denklemler',  e: '⚖️', kpss: '1 soru',   icon: '⚖️' },
    { id: 15, order: 15, p: 'DENKLEMLER',       n: '2. Derece Denklemler',  e: '📉', kpss: '1 soru',   icon: '📉' },
    { id: 16, order: 16, p: 'DENKLEMLER',       n: 'Eşitsizlikler',         e: '📊', kpss: '1 soru',   icon: '📊' },
    
    // ========== FAZ 7: PROBLEMLER ==========
    { id: 17, order: 17, p: 'PROBLEMLER',       n: 'Sayı Problemleri',      e: '🔢', kpss: '2-3 soru', icon: '🔢' },
    { id: 18, order: 18, p: 'PROBLEMLER',       n: 'Yaş Problemleri',       e: '🎂', kpss: '1 soru',   icon: '🎂' },
    { id: 19, order: 19, p: 'PROBLEMLER',       n: 'Hız & Hareket',         e: '🚗', kpss: '1 soru',   icon: '🚗' },
    { id: 20, order: 20, p: 'PROBLEMLER',       n: 'İşçi & Havuz',          e: '🔧', kpss: '1 soru',   icon: '🔧' },
    { id: 21, order: 21, p: 'PROBLEMLER',       n: 'Yüzde & Kâr-Zarar',     e: '💯', kpss: '2 soru',   icon: '💯' },
    { id: 22, order: 22, p: 'PROBLEMLER',       n: 'Karışım Problemleri',   e: '🧪', kpss: '1 soru',   icon: '🧪' },
    { id: 23, order: 23, p: 'PROBLEMLER',       n: 'Faiz Problemleri',      e: '💰', kpss: '1 soru',   icon: '💰' },
    
    // ========== FAZ 8: ORAN-ORANTI ==========
    { id: 24, order: 24, p: 'ORAN-ORANTI',      n: 'Oran & Orantı',         e: '⚖️', kpss: '1-2 soru', icon: '⚖️' },
    
    // ========== FAZ 9: KÜMELER & MANTIK ==========
    { id: 25, order: 25, p: 'KÜMELER',          n: 'Kümeler',               e: '🔵', kpss: '1 soru',   icon: '🔵' },
    { id: 26, order: 26, p: 'KÜMELER',          n: 'Mantık',                e: '🧠', kpss: '1 soru',   icon: '🧠' },
    
    // ========== FAZ 10: VERİ & OLASILIK ==========
    { id: 27, order: 27, p: 'VERİ & OLASILIK',  n: 'Veri & Grafik',         e: '📊', kpss: '1 soru',   icon: '📊' },
    { id: 28, order: 28, p: 'VERİ & OLASILIK',  n: 'Permütasyon & Olasılık',e: '🎲', kpss: '1 soru',   icon: '🎲' }
];

// ==================== FORMÜLLER ====================
const FORMULAS = {
    1: [ // Toplama & Çıkarma
        "Toplama: a + b = c",
        "Çıkarma: a - b = c",
        "Toplamada değişme özelliği: a + b = b + a",
        "Birleşme özelliği: (a + b) + c = a + (b + c)"
    ],
    2: [ // Çarpma & Bölme
        "Çarpma: a × b = c",
        "Bölme: a ÷ b = c (b ≠ 0)",
        "Çarpmada değişme: a × b = b × a",
        "Dağılma: a × (b + c) = a×b + a×c"
    ],
    3: [ // Sayılar
        "Rakam: 0-9 arası semboller",
        "Doğal sayılar: N = {0, 1, 2, ...}",
        "Tam sayılar: Z = {..., -2, -1, 0, 1, 2, ...}",
        "Basamak değeri: 234 = 2×100 + 3×10 + 4×1"
    ],
    4: [ // Bölünebilme
        "2 ile: Son rakam çift",
        "3 ile: Rakamlar toplamı 3'ün katı",
        "5 ile: Son rakam 0 veya 5",
        "9 ile: Rakamlar toplamı 9'un katı"
    ],
    5: [ // Asal Sayılar
        "Asal sayı: Sadece 1 ve kendisine bölünen sayı",
        "İlk asallar: 2, 3, 5, 7, 11, 13, 17, 19...",
        "Her sayı asal çarpanlarına ayrılabilir"
    ],
    6: [ // EKOK & EBOB
        "EBOB: En Büyük Ortak Bölen",
        "EKOK: En Küçük Ortak Kat",
        "a × b = EBOB(a,b) × EKOK(a,b)"
    ],
    7: [ // Kesirler
        "Kesir: pay / payda",
        "Toplama: a/b + c/d = (ad+bc)/bd",
        "Çarpma: a/b × c/d = ac/bd",
        "Bölme: a/b ÷ c/d = a/b × d/c"
    ],
    8: [ // Ondalık Sayılar
        "Ondalık = paydası 10'un kuvveti olan kesir",
        "Toplama/çıkarmada virgül alt alta"
    ],
    9: [ // Rasyonel Sayılar
        "a/b şeklinde yazılabilen sayılar (b≠0)",
        "Her tam sayı bir rasyonel sayıdır"
    ],
    10: [ // Üslü Sayılar
        "aⁿ × aᵐ = aⁿ⁺ᵐ",
        "aⁿ ÷ aᵐ = aⁿ⁻ᵐ",
        "(aⁿ)ᵐ = aⁿˣᵐ",
        "a⁰ = 1 (a≠0)"
    ],
    11: [ // Köklü Sayılar
        "√a × √b = √(a×b)",
        "√a ÷ √b = √(a/b)",
        "√(a²) = |a|"
    ],
    12: [ // Çarpanlara Ayırma
        "Ortak çarpan parantezi: ax+bx = x(a+b)",
        "İki kare farkı: a²-b² = (a-b)(a+b)",
        "Tam kare: (a+b)² = a²+2ab+b²"
    ],
    13: [ // Özdeşlikler
        "(a+b)² = a² + 2ab + b²",
        "(a-b)² = a² - 2ab + b²",
        "a² - b² = (a-b)(a+b)"
    ],
    14: [ // 1. Derece Denklemler
        "ax + b = 0 → x = -b/a",
        "ax + b = cx + d → (a-c)x = d-b"
    ],
    15: [ // 2. Derece Denklemler
        "ax² + bx + c = 0",
        "Diskriminant: Δ = b² - 4ac",
        "Kökler: x = (-b ± √Δ) / 2a"
    ],
    16: [ // Eşitsizlikler
        "a < b ise a + c < b + c",
        "Negatif ile çarpınca yön değişir"
    ],
    17: [ // Sayı Problemleri
        "Bilinmeyene x de, denklem kur",
        "x + (x+2) = 30 gibi"
    ],
    18: [ // Yaş Problemleri
        "Yaş farkı sabittir",
        "x yıl sonra: şimdiki yaş + x"
    ],
    19: [ // Hız & Hareket
        "Yol = Hız × Zaman",
        "Hız = Yol ÷ Zaman",
        "Ortalama hız = Toplam yol ÷ Toplam zaman"
    ],
    20: [ // İşçi & Havuz
        "1/a + 1/b = 1/t (birlikte iş)",
        "Havuz: Dolduran (+), Boşaltan (-)"
    ],
    21: [ // Yüzde
        "Yüzde = (Kısım / Bütün) × 100",
        "%A = A/100",
        "Kâr = Satış - Maliyet"
    ],
    22: [ // Karışım
        "Karışım oranı = Madde / Toplam",
        "Tuz oranı = Tuz / Su+Tuz"
    ],
    23: [ // Faiz
        "Basit faiz: F = A × n × t / 100",
        "Bileşik faiz: A × (1 + r/100)ⁿ"
    ],
    24: [ // Oran-Orantı
        "Doğru orantı: a/b = c/d",
        "Ters orantı: a × b = k (sabit)",
        "a/b = c/d = k ise a=c×k, b=d×k"
    ],
    25: [ // Kümeler
        "A ∪ B: Birleşim",
        "A ∩ B: Kesişim",
        "s(A∪B) = s(A) + s(B) - s(A∩B)"
    ],
    26: [ // Mantık
        "p ∧ q: ve (her ikisi doğru)",
        "p ∨ q: veya (en az biri doğru)",
        "p → q: ise"
    ],
    27: [ // Veri & Grafik
        "Aritmetik ortalama: toplam / adet",
        "Medyan: sıralı veride ortadaki değer",
        "Mod: en çok tekrar eden değer"
    ],
    28: [ // Permütasyon & Olasılık
        "n! = n × (n-1) × ... × 2 × 1",
        "P(n,r) = n! / (n-r)!",
        "Olasılık = İstenen / Tüm durumlar"
    ]
};

// ==================== SABİTLER ====================
const CONSTANTS = {
    TOTAL_TOPICS: 28,
    QUESTIONS_PER_TOPIC: 30,        // Konu çalış: 10+12+8
    QUESTION_BANK_SIZE: 300,        // Soru bankası: konu başına 300
    TOTAL_QUESTIONS_NEEDED: 8400,   // 28 × 300
    EXAM_SETS: 5,                   // Deneme seti sayısı
    EXAM_QUESTIONS: 20,             // Deneme başına soru
    EXAM_DURATION: 20,              // Dakika
    API_DAILY_LIMIT: 20,            // Günlük Groq istek limiti
    MAX_STREAK_CELEBRATE: [5, 10, 15, 20], // Kutlama serileri
    STORAGE_KEY: 'kpss_mat_v2',
    API_KEY_STORAGE: 'kpss_mat_api_key'
};

// ==================== DENEME SET SEED'LERİ (Başlangıç) ====================
const EXAM_SEEDS = [42, 71, 13, 88, 56];

// ==================== SORU ZORLUK DAĞILIMI ====================
const DIFFICULTY_WEIGHTS = {
    'KOLAY': { kolay: 0.6, orta: 0.3, zor: 0.1 },
    'ORTA':  { kolay: 0.2, orta: 0.5, zor: 0.3 },
    'ZOR':   { kolay: 0.1, orta: 0.3, zor: 0.6 }
};

// ==================== YARDIMCI: KONU BULMA ====================
function getTopicById(id) {
    return TOPICS.find(t => t.id === id);
}

function getNextTopic(currentId) {
    const current = getTopicById(currentId);
    if (!current) return null;
    return TOPICS.find(t => t.order === current.order + 1) || null;
}

function getLevelIndex(levelName) {
    const levels = Object.keys(LEVELS);
    return levels.indexOf(levelName);
}

function getNextLevel(levelName) {
    const levels = Object.keys(LEVELS);
    const idx = levels.indexOf(levelName);
    return idx < levels.length - 1 ? levels[idx + 1] : null;
}

console.log('✅ config.js yüklendi -', TOPICS.length, 'konu,', 
    Object.keys(LEVELS).length, 'seviye,',
    Object.keys(FORMULAS).length, 'formül seti');