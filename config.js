// ============================================
// config.js - KPSS & DGS MATEMATİK
// Sabitler, Konular, Seviyeler, Formüller
// Versiyon: 2.1
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
    { id: 28, order: 28, p: 'İLERİ KONULAR (DGS)',      n: 'Olasılık',                        e: '🎲', kpss: '1 soru',   dgs: '1-2 soru' }
];

// ==================== FORMÜLLER ====================
const FORMULAS = {
    1: [
        "➕ Toplama: a + b = c",
        "➖ Çıkarma: a - b = c",
        "🔄 Değişme özelliği: a + b = b + a",
        "🔗 Birleşme: (a + b) + c = a + (b + c)"
    ],
    2: [
        "✖️ Çarpma: a × b = c",
        "➗ Bölme: a ÷ b = c (b ≠ 0)",
        "🔄 Değişme: a × b = b × a",
        "📐 Dağılma: a × (b + c) = a×b + a×c"
    ],
    3: [
        "🔤 Rakam: 0'dan 9'a kadar semboller (10 tane)",
        "📗 Doğal sayı (N): 0, 1, 2, 3, ...",
        "📘 Tam sayı (Z): ..., -2, -1, 0, 1, 2, ...",
        "🏗️ Basamak değeri: 234 = 2×100 + 3×10 + 4×1",
        "🔢 Tek sayı: 2n+1 | Çift sayı: 2n",
        "📏 Ardışık sayılar: n, n+1, n+2, ..."
    ],
    4: [
        "✌️ 2 ile: Son rakam çift (0,2,4,6,8)",
        "3️⃣ 3 ile: Rakamlar toplamı 3'ün katı",
        "4️⃣ 4 ile: Son iki rakam 4'ün katı",
        "5️⃣ 5 ile: Son rakam 0 veya 5",
        "9️⃣ 9 ile: Rakamlar toplamı 9'un katı"
    ],
    5: [
        "🔐 Asal sayı: 1 ve kendisi hariç böleni olmayan sayı",
        "📋 İlk asallar: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...",
        "🧩 Her tam sayı asal çarpanların çarpımıdır",
        "⚠️ 1 asal değildir! En küçük asal 2'dir"
    ],
    6: [
        "📦 EBOB: En Büyük Ortak Bölen",
        "📋 EKOK: En Küçük Ortak Kat",
        "🔗 a × b = EBOB(a,b) × EKOK(a,b)",
        "📐 EBOB bulma: Asal çarpanlardan ortak olanların en küçük üslüleri"
    ],
    7: [
        "🍕 Kesir: a/b (pay/payda), b≠0",
        "➕ Toplama: a/b + c/d = (ad+bc)/bd",
        "✖️ Çarpma: a/b × c/d = ac/bd",
        "➗ Bölme: a/b ÷ c/d = a/b × d/c",
        "📏 Rasyonel sayı: a/b şeklinde yazılabilen (b≠0)"
    ],
    8: [
        "💯 Ondalık: Paydası 10'un kuvveti olan kesir",
        "➕➖ Toplama/çıkarma: Virgüller alt alta",
        "✖️ Çarpma: Virgül yok say, sonra virgül koy",
        "➗ Bölme: Payda 10'un katı yapılır"
    ],
    9: [
        "⬆️ aⁿ: a'nın n kere kendisiyle çarpımı",
        "📐 aⁿ × aᵐ = aⁿ⁺ᵐ",
        "📐 aⁿ ÷ aᵐ = aⁿ⁻ᵐ",
        "📐 (aⁿ)ᵐ = aⁿˣᵐ",
        "⚠️ a⁰ = 1 (a≠0), 0⁰ tanımsız"
    ],
    10: [
        "√a: Karesi a olan sayı",
        "📐 √a × √b = √(a×b)",
        "📐 √a ÷ √b = √(a/b)",
        "📐 √(a²) = |a|",
        "⚠️ Kök içi negatif olmaz (reel sayılarda)"
    ],
    11: [
        "🔍 Ortak çarpan: ax+bx = x(a+b)",
        "📐 İki kare farkı: a²-b² = (a-b)(a+b)",
        "📐 Tam kare: (a+b)² = a²+2ab+b²",
        "📐 Tam kare: (a-b)² = a²-2ab+b²",
        "🧩 Gruplandırma: ac+ad+bc+bd = (a+b)(c+d)"
    ],
    12: [
        "⚖️ ax + b = 0 → x = -b/a",
        "⚖️ ax + b = cx + d → x = (d-b)/(a-c)",
        "📐 Yok etme metodu",
        "📐 Yerine koyma metodu"
    ],
    13: [
        "📊 a < b (a küçüktür b)",
        "➕ a < b ise a+c < b+c",
        "✖️ c>0 ise a<b → ac<bc",
        "⚠️ c<0 ise a<b → ac>bc (yön değişir!)",
        "📐 Çözüm kümesi: Aralık veya eşitsizlik"
    ],
    14: [
        "📏 Doğru orantı: a/b = c/d (içler-dışlar çarpımı)",
        "🔄 Ters orantı: a×b = k (sabit)",
        "📐 Bileşik orantı",
        "📊 Orantı sabiti: k"
    ],
    15: [
        "❓ Bilinmeyene x de, denklem kur",
        "📐 Denklem çöz, sağlama yap",
        "🧩 Ardışık sayı: n, n+1, n+2...",
        "🔢 Sayı problemi = sözel → matematiksel"
    ],
    16: [
        "🎂 Yaş farkı sabittir, değişmez!",
        "📅 x yıl sonra: Bugünkü yaş + x",
        "📅 x yıl önce: Bugünkü yaş - x",
        "👥 İki kişi: (A+x) + (B+x) = toplam"
    ],
    17: [
        "🚗 Yol = Hız × Zaman (x = v·t)",
        "⏱️ Hız = Yol ÷ Zaman",
        "🛣️ Ortalama hız = Toplam yol ÷ Toplam zaman",
        "🔄 Karşılaşma: (v₁+v₂)t = aradaki mesafe"
    ],
    18: [
        "🔧 1/a + 1/b = 1/t (işin bitme süresi)",
        "💧 Havuz: Dolduran musluk (+), boşaltan (-)",
        "👥 Birlikte iş: 1/t₁ + 1/t₂ = 1/t_toplam",
        "📊 İş = Güç × Zaman"
    ],
    19: [
        "💯 %A = A/100",
        "📊 Kısım = Bütün × Yüzde / 100",
        "💰 Kâr = Satış - Maliyet",
        "📉 Zarar = Maliyet - Satış",
        "📈 Kâr yüzdesi = (Kâr/Maliyet)×100"
    ],
    20: [
        "🧪 Karışım oranı = Madde miktarı / Toplam",
        "📐 Tuz yüzdesi = Tuz/(Su+Tuz)",
        "➕ Karışıma ekleme: (m₁·%₁ + m₂·%₂)/(m₁+m₂)",
        "💧 Buharlaştırma: Su azalır, tuz kalır"
    ],
    21: [
        "🏦 Basit faiz: F = A·n·t/100",
        "📈 Bileşik faiz: A·(1+r/100)ⁿ",
        "💰 A: Anapara, n: Yıl, t: Faiz oranı",
        "📊 Faiz = Son tutar - Anapara"
    ],
    22: [
        "🔵 A ∪ B: Birleşim (A veya B'de olanlar)",
        "🔴 A ∩ B: Kesişim (Hem A hem B'de olanlar)",
        "📐 s(A∪B) = s(A) + s(B) - s(A∩B)",
        "📊 Alt küme: 2ⁿ (n elemanlı kümenin alt küme sayısı)"
    ],
    23: [
        "✅ p ∧ q: ve (ikisi de doğruysa doğru)",
        "✅ p ∨ q: veya (en az biri doğruysa doğru)",
        "➡️ p → q: p ise q",
        "🔄 p ↔ q: p ancak ve ancak q",
        "❌ Değili (~p): Doğruluk değeri tersi"
    ],
    24: [
        "📊 Aritmetik ortalama: Toplam / Adet",
        "📈 Medyan: Sıralı veride ortadaki",
        "🔝 Mod: En çok tekrar eden",
        "📉 Açıklık: En büyük - En küçük",
        "📊 Grafik: Sütun, çizgi, daire"
    ],
    25: [
        "📐 ax² + bx + c = 0",
        "Δ Delta = b² - 4ac",
        "Δ > 0: İki reel kök",
        "Δ = 0: Çakışık kök",
        "Δ < 0: Reel kök yok",
        "📝 Kökler: x = (-b ± √Δ)/2a"
    ],
    26: [
        "𝑓(x): x'in fonksiyonu",
        "📐 f(x) = ax + b (doğrusal)",
        "📐 f(x) = ax² + bx + c (parabol)",
        "🔢 Tanım kümesi, değer kümesi",
        "🔄 Bileşke fonksiyon: (f∘g)(x) = f(g(x))"
    ],
    27: [
        "🔢 n! = n×(n-1)×...×2×1",
        "📋 P(n,r) = n!/(n-r)! (sıralı)",
        "🎯 C(n,r) = n!/[r!(n-r)!] (seçme)",
        "⚠️ 0! = 1",
        "🧩 Kombinasyon: Sıra önemsiz"
    ],
    28: [
        "🎲 Olasılık = İstenen durum / Tüm durumlar",
        "📐 0 ≤ P(A) ≤ 1",
        "✅ P(A) + P(A') = 1 (tümleyen)",
        "🎯 Bağımsız olay: P(A∩B) = P(A)·P(B)",
        "🎯 Bağımlı olay: P(A∩B) = P(A)·P(B|A)"
    ]
};

// ==================== SABİTLER ====================
const CONSTANTS = {
    TOTAL_TOPICS: 28,
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

console.log('✅ config.js (v3) yüklendi -', TOPICS.length, 'konu | KPSS → DGS sıralı');