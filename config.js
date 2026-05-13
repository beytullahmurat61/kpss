// ============================================
// config.js - KPSS & DGS MATEMATİK
// Sabitler, Konular, Seviyeler, Formüller
// Versiyon: 3.1 (Geometri ve Grafik eklendi)
// ============================================

// ==================== STATE VERSİYON ====================
const STATE_VERSION = 3;

// ==================== SEVİYELER ====================
const LEVELS = {
    'KOLAY': {
        name: 'Kolay',
        icon: '🟢',
        questionCount: 10,
        minCorrect: 8
    },
    'ORTA': {
        name: 'Orta',
        icon: '🟡',
        questionCount: 12,
        minCorrect: 10
    },
    'ZOR': {
        name: 'Zor',
        icon: '🔴',
        questionCount: 8,
        minCorrect: 6
    }
};

// ==================== KONULAR (KPSS → DGS SIRALI) ====================
const TOPICS = [
    // ========== FAZ 1: TEMEL İŞLEMLER ==========
    { id: 1,  order: 1,  p: 'TEMEL İŞLEMLER',           n: 'Toplama & Çıkarma',              e: '➕', kpss: '1-2 soru', dgs: '1-2 soru' },
    { id: 2,  order: 2,  p: 'TEMEL İŞLEMLER',           n: 'Çarpma & Bölme',                 e: '✖️', kpss: '1-2 soru', dgs: '1-2 soru' },
    { id: 3,  order: 3,  p: 'TEMEL İŞLEMLER',           n: 'Sayılar (Temel Kavramlar)',      e: '🔢', kpss: '1 soru',   dgs: '1 soru' },

    // ========== FAZ 2: BÖLÜNEBİLME & ÇARPANLAR ==========
    { id: 4,  order: 4,  p: 'BÖLÜNEBİLME & ÇARPANLAR',  n: 'Bölünebilme Kuralları',          e: '➗', kpss: '1 soru',   dgs: '1 soru' },
    { id: 5,  order: 5,  p: 'BÖLÜNEBİLME & ÇARPANLAR',  n: 'Asal Sayılar & Çarpanlar',       e: '🔐', kpss: '1 soru',   dgs: '1-2 soru' },
    { id: 6,  order: 6,  p: 'BÖLÜNEBİLME & ÇARPANLAR',  n: 'EKOK & EBOB',                    e: '🔗', kpss: '1-2 soru', dgs: '1-2 soru' },

    // ========== FAZ 3: KESİRLER & RASYONEL SAYILAR ==========
    { id: 7,  order: 7,  p: 'KESİRLER & RASYONEL',      n: 'Kesirler & Rasyonel Sayılar',    e: '🍕', kpss: '2 soru',   dgs: '2 soru' },
    { id: 8,  order: 8,  p: 'KESİRLER & RASYONEL',      n: 'Ondalık Sayılar',                e: '💯', kpss: '1 soru',   dgs: '1 soru' },

    // ========== FAZ 4: ÜSLÜ & KÖKLÜ SAYILAR ==========
    { id: 9,  order: 9,  p: 'ÜSLÜ & KÖKLÜ SAYILAR',     n: 'Üslü Sayılar',                   e: '⬆️', kpss: '1-2 soru', dgs: '1-2 soru' },
    { id: 10, order: 10, p: 'ÜSLÜ & KÖKLÜ SAYILAR',     n: 'Köklü Sayılar',                  e: '√',  kpss: '1 soru',   dgs: '1 soru' },

    // ========== FAZ 5: CEBİR ==========
    { id: 11, order: 11, p: 'CEBİR',                    n: 'Çarpanlara Ayırma & Özdeşlikler', e: '🧩', kpss: '1-2 soru', dgs: '2 soru' },
    { id: 12, order: 12, p: 'CEBİR',                    n: '1. Dereceden Denklemler',         e: '⚖️', kpss: '1-2 soru', dgs: '2 soru' },
    { id: 13, order: 13, p: 'CEBİR',                    n: 'Eşitsizlikler',                   e: '📊', kpss: '1 soru',   dgs: '1-2 soru' },

    // ========== FAZ 6: ORAN-ORANTI ==========
    { id: 14, order: 14, p: 'ORAN & ORANTI',            n: 'Oran & Orantı',                   e: '📏', kpss: '1-2 soru', dgs: '1-2 soru' },

    // ========== FAZ 7: PROBLEMLER ==========
    { id: 15, order: 15, p: 'PROBLEMLER',               n: 'Sayı Problemleri',                e: '🔢', kpss: '2-3 soru', dgs: '2-3 soru' },
    { id: 16, order: 16, p: 'PROBLEMLER',               n: 'Yaş Problemleri',                 e: '🎂', kpss: '1 soru',   dgs: '1 soru' },
    { id: 17, order: 17, p: 'PROBLEMLER',               n: 'Hız & Hareket Problemleri',       e: '🚗', kpss: '1 soru',   dgs: '1-2 soru' },
    { id: 18, order: 18, p: 'PROBLEMLER',               n: 'İşçi & Havuz Problemleri',        e: '🔧', kpss: '1 soru',   dgs: '1 soru' },
    { id: 19, order: 19, p: 'PROBLEMLER',               n: 'Yüzde, Kâr & Zarar',              e: '💰', kpss: '2 soru',   dgs: '2 soru' },
    { id: 20, order: 20, p: 'PROBLEMLER',               n: 'Karışım Problemleri',             e: '🧪', kpss: '1 soru',   dgs: '1 soru' },
    { id: 21, order: 21, p: 'PROBLEMLER',               n: 'Faiz Problemleri',                e: '🏦', kpss: '1 soru',   dgs: '1 soru' },

    // ========== FAZ 8: KÜMELER & MANTIK ==========
    { id: 22, order: 22, p: 'KÜMELER & MANTIK',         n: 'Kümeler',                         e: '🔵', kpss: '1 soru',   dgs: '1-2 soru' },
    { id: 23, order: 23, p: 'KÜMELER & MANTIK',         n: 'Mantık',                          e: '🧠', kpss: '1 soru',   dgs: '1-2 soru' },

    // ========== FAZ 9: VERİ & GRAFİK ==========
    { id: 24, order: 24, p: 'VERİ & GRAFİK',            n: 'Veri, Grafik & İstatistik',       e: '📈', kpss: '1 soru',   dgs: '1-2 soru' },

    // ========== FAZ 10: İLERİ KONULAR (DGS AĞIRLIKLI) ==========
    { id: 25, order: 25, p: 'İLERİ KONULAR (DGS)',      n: '2. Dereceden Denklemler',         e: '📉', kpss: 'YOK',      dgs: '1-2 soru' },
    { id: 26, order: 26, p: 'İLERİ KONULAR (DGS)',      n: 'Fonksiyonlar',                    e: '𝑓',  kpss: 'YOK',      dgs: '2-3 soru' },
    { id: 27, order: 27, p: 'İLERİ KONULAR (DGS)',      n: 'Permütasyon & Kombinasyon',       e: '🎯', kpss: 'YOK',      dgs: '1-2 soru' },
    { id: 28, order: 28, p: 'İLERİ KONULAR (DGS)',      n: 'Olasılık',                        e: '🎲', kpss: '1 soru',   dgs: '1-2 soru' },

    // ========== YENİ EKLENEN KONULAR ==========
    { id: 29, order: 29, p: 'GEOMETRİ',                 n: 'Temel Geometri',                  e: '📐', kpss: '1-2 soru', dgs: '1-2 soru' },
    { id: 30, order: 30, p: 'VERİ & GRAFİK',            n: 'Grafik ve Veri Analizi',          e: '📊', kpss: '1-2 soru', dgs: '1-2 soru' }
];

// ==================== FORMÜLLER ====================
const FORMULAS = {
    1: [ "➕ Toplama: a + b = c", "➖ Çıkarma: a - b = c" ],
    2: [ "✖️ Çarpma: a × b = c", "➗ Bölme: a ÷ b = c (b ≠ 0)" ],
    3: [ "🔤 Rakam: 0'dan 9'a kadar", "📗 Doğal sayı (N): 0,1,2,3,..." ],
    4: [ "✌️ 2 ile: Son rakam çift", "3️⃣ 3 ile: Rakamlar toplamı 3'ün katı" ],
    5: [ "🔐 Asal sayı: 1 ve kendisi hariç böleni olmayan", "📋 İlk asallar: 2,3,5,7,11,..." ],
    6: [ "📦 EBOB: En Büyük Ortak Bölen", "📋 EKOK: En Küçük Ortak Kat" ],
    7: [ "🍕 Kesir: a/b (pay/payda)", "➕ Toplama: a/b + c/d = (ad+bc)/bd" ],
    8: [ "💯 Ondalık: Paydası 10'un kuvveti olan kesir" ],
    9: [ "⬆️ aⁿ: a'nın n kere kendisiyle çarpımı", "📐 aⁿ × aᵐ = aⁿ⁺ᵐ" ],
    10: [ "√a: Karesi a olan sayı", "📐 √a × √b = √(a×b)" ],
    11: [ "🔍 Ortak çarpan: ax+bx = x(a+b)", "📐 İki kare farkı: a²-b² = (a-b)(a+b)" ],
    12: [ "⚖️ ax + b = 0 → x = -b/a" ],
    13: [ "📊 a < b (a küçüktür b)", "⚠️ c<0 ise a<b → ac>bc (yön değişir!)" ],
    14: [ "📏 Doğru orantı: a/b = c/d", "🔄 Ters orantı: a×b = k" ],
    15: [ "❓ Bilinmeyene x de, denklem kur" ],
    16: [ "🎂 Yaş farkı sabittir, değişmez!" ],
    17: [ "🚗 Yol = Hız × Zaman (x = v·t)" ],
    18: [ "🔧 1/a + 1/b = 1/t (işin bitme süresi)" ],
    19: [ "💯 %A = A/100", "💰 Kâr = Satış - Maliyet" ],
    20: [ "🧪 Karışım oranı = Madde miktarı / Toplam" ],
    21: [ "🏦 Basit faiz: F = A·n·t/100" ],
    22: [ "🔵 s(A∪B) = s(A) + s(B) - s(A∩B)" ],
    23: [ "✅ p ∧ q: ve (ikisi de doğruysa doğru)" ],
    24: [ "📊 Aritmetik ortalama: Toplam / Adet" ],
    25: [ "📐 ax² + bx + c = 0", "Δ = b² - 4ac" ],
    26: [ "𝑓(x): x'in fonksiyonu" ],
    27: [ "🔢 n! = n×(n-1)×...×2×1" ],
    28: [ "🎲 Olasılık = İstenen durum / Tüm durumlar" ],
    29: [ "📐 Üçgen iç açıları toplamı 180°", "📐 Pisagor: a² + b² = c²" ],
    30: [ "📊 Daire grafiğinde merkez açı = (parça/toplam)×360°" ]
};

// ==================== SABİTLER ====================
const CONSTANTS = {
    TOTAL_TOPICS: 30,  // 28'den 30'a çıkarıldı
    QUESTIONS_PER_TOPIC: 30,
    QUESTION_BANK_SIZE: 300,
    EXAM_SETS: 5,
    EXAM_QUESTIONS: 20,
    EXAM_DURATION: 20,
    API_DAILY_LIMIT: 20,
    MAX_STREAK_CELEBRATE: [5, 10, 15, 20],
    STORAGE_KEY: 'kpss_mat_v3',
    API_KEY_STORAGE: 'kpss_mat_api_key'
};

// ==================== DENEME SET SEED'LERİ ====================
const EXAM_SEEDS = [42, 71, 13, 88, 56];

// ==================== YARDIMCI FONKSİYONLAR ====================
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

console.log('✅ config.js (v3.1) yüklendi -', TOPICS.length, 'konu | KPSS → DGS sıralı');
