// ============================================
// config.js - KPSS MATEMATİK YAPILANDIRMA
// questions.js ile senkronize (12 Level, 2739 Soru)
// ============================================

// ============================================
// SEVİYELER (0-11) — questions.js'deki gerçek levellara göre
// ============================================
const LEVELS = {
    '0':  {
        name: 'Temel Aritmetik',
        icon: '🌱',
        questionCount: 15,   // 280 soru havuzu — daha fazla çekilebilir
        minCorrect: 10,
        description: 'Toplama, çıkarma, çarpma, bölme, basamak, örüntüler, bölünebilme',
        totalInBank: 280,
        difficultyHint: 'Ağırlıklı kolay-orta'
    },
    '1':  {
        name: 'Sayılar & Kesirler',
        icon: '📗',
        questionCount: 12,
        minCorrect: 8,
        description: 'Doğal sayılar, tam sayılar, rasyonel sayılar, kesir kavramı',
        totalInBank: 191,
        difficultyHint: 'Orta ağırlıklı'
    },
    '2':  {
        name: 'Kesir İşlemleri',
        icon: '📘',
        questionCount: 12,
        minCorrect: 8,
        description: 'Kesirlerle işlemler, ondalık sayılar, karşılaştırma, dönüşüm',
        totalInBank: 202,
        difficultyHint: 'Orta ağırlıklı'
    },
    '3':  {
        name: 'Kuvvet, Kök & Çarpanlar',
        icon: '📙',
        questionCount: 15,
        minCorrect: 10,
        description: 'Üslü sayılar, kök işlemleri, asal çarpanlar, EBOB, EKOK',
        totalInBank: 588,
        difficultyHint: 'En geniş havuz — karma zorluk'
    },
    '4':  {
        name: 'Yüzde & Oran',
        icon: '📒',
        questionCount: 12,
        minCorrect: 8,
        description: 'Yüzde hesapları, faiz, oran-orantı, kâr-zarar, karışım',
        totalInBank: 191,
        difficultyHint: 'Zor-çok zor ağırlıklı'
    },
    '5':  {
        name: 'Denklemler',
        icon: '📓',
        questionCount: 10,
        minCorrect: 7,
        description: 'Birinci ve ikinci derece denklemler, sistemler, problem kurma',
        totalInBank: 121,
        difficultyHint: 'Çok zor ağırlıklı'
    },
    '6':  {
        name: 'Eşitsizlikler & Fonksiyonlar',
        icon: '🔴',
        questionCount: 12,
        minCorrect: 8,
        description: 'Eşitsizlikler, mutlak değer, fonksiyon kavramı ve grafikleri',
        totalInBank: 203,
        difficultyHint: 'Çok zor ağırlıklı'
    },
    '7':  {
        name: 'Logaritma & Polinomlar',
        icon: '🔥',
        questionCount: 12,
        minCorrect: 8,
        description: 'Logaritma kuralları, polinom işlemleri, çarpanlara ayırma',
        totalInBank: 216,
        difficultyHint: 'Çok zor ağırlıklı'
    },
    '8':  {
        name: 'Trigonometri',
        icon: '⚡',
        questionCount: 10,
        minCorrect: 7,
        description: 'Sin, cos, tan, özdeşlikler, denklemler, grafikler',
        totalInBank: 120,
        difficultyHint: 'Orta-çok zor karma'
    },
    '9':  {
        name: 'Geometri & Katı Cisimler',
        icon: '💡',
        questionCount: 15,
        minCorrect: 10,
        description: 'Düzlem geometri, alan-çevre, hacim, analitik geometri temelleri',
        totalInBank: 286,
        difficultyHint: 'Çok zor ağırlıklı'
    },
    '10': {
        name: 'Veri, Olasılık & Diziler',
        icon: '🏅',
        questionCount: 12,
        minCorrect: 8,
        description: 'İstatistik, kombinatorik, olasılık, aritmetik ve geometrik diziler',
        totalInBank: 188,
        difficultyHint: 'Çok zor ağırlıklı'
    },
    '11': {
        name: 'Analiz & KPSS Özel',
        icon: '🥇',
        questionCount: 10,
        minCorrect: 8,
        description: 'Limit, türev, integral, KPSS karma problemler, hızlı çözüm teknikleri',
        totalInBank: 153,
        difficultyHint: 'Çok zor — finale hazırlık'
    },
};

// ============================================
// KONULAR — fazlara göre gruplandırılmış
// id, order, e (emoji), n (konu adı), p (faz), level (questions.js level karşılığı)
// ============================================
const TOPICS = [
    // ---- FAZ 1: TEMEL ARİTMETİK (Level 0) ----
    { id: 1,   order: 1,   e: '➕', n: 'Toplama İşlemi',              p: '📐 Temel Aritmetik',        level: 0 },
    { id: 2,   order: 2,   e: '➖', n: 'Çıkarma İşlemi',              p: '📐 Temel Aritmetik',        level: 0 },
    { id: 3,   order: 3,   e: '✖️', n: 'Çarpma İşlemi',               p: '📐 Temel Aritmetik',        level: 0 },
    { id: 4,   order: 4,   e: '➗', n: 'Bölme İşlemi',                p: '📐 Temel Aritmetik',        level: 0 },
    { id: 5,   order: 5,   e: '🔢', n: 'Dört İşlem Karışık',          p: '📐 Temel Aritmetik',        level: 0 },
    { id: 6,   order: 6,   e: '🔣', n: 'İşlem Önceliği',              p: '📐 Temel Aritmetik',        level: 0 },
    { id: 7,   order: 7,   e: '🧮', n: 'Basamak Kavramı',             p: '📐 Temel Aritmetik',        level: 0 },
    { id: 8,   order: 8,   e: '📊', n: 'Sayı Örüntüleri',             p: '📐 Temel Aritmetik',        level: 0 },
    { id: 9,   order: 9,   e: '🔁', n: 'Bölünebilme Kuralları',       p: '📐 Temel Aritmetik',        level: 0 },
    { id: 10,  order: 10,  e: '🔍', n: 'Tek-Çift Sayılar',            p: '📐 Temel Aritmetik',        level: 0 },

    // ---- FAZ 2: SAYILAR (Level 1) ----
    { id: 11,  order: 11,  e: '🔵', n: 'Doğal Sayılar',               p: '🔢 Sayılar',               level: 1 },
    { id: 12,  order: 12,  e: '⚫', n: 'Tam Sayılar',                  p: '🔢 Sayılar',               level: 1 },
    { id: 13,  order: 13,  e: '🔶', n: 'Rasyonel Sayılar',            p: '🔢 Sayılar',               level: 1 },
    { id: 14,  order: 14,  e: '🔷', n: 'İrrasyonel Sayılar',          p: '🔢 Sayılar',               level: 1 },

    // ---- FAZ 3: KESİRLER (Level 1-2) ----
    { id: 15,  order: 15,  e: '½',  n: 'Kesir Kavramı',               p: '½ Kesirler',               level: 1 },
    { id: 16,  order: 16,  e: '🔀', n: 'Kesirlerle Toplama',          p: '½ Kesirler',               level: 2 },
    { id: 17,  order: 17,  e: '🔀', n: 'Kesirlerle Çıkarma',          p: '½ Kesirler',               level: 2 },
    { id: 18,  order: 18,  e: '🔀', n: 'Kesirlerle Çarpma',           p: '½ Kesirler',               level: 2 },
    { id: 19,  order: 19,  e: '🔀', n: 'Kesirlerle Bölme',            p: '½ Kesirler',               level: 2 },
    { id: 20,  order: 20,  e: '📏', n: 'Karışık Sayılar',             p: '½ Kesirler',               level: 2 },
    { id: 21,  order: 21,  e: '🔃', n: 'Kesirleri Karşılaştırma',     p: '½ Kesirler',               level: 2 },
    { id: 22,  order: 22,  e: '💯', n: 'Kesir-Ondalık Dönüşüm',      p: '½ Kesirler',               level: 2 },

    // ---- FAZ 4: KUVVET VE KÖK (Level 3) ----
    { id: 23,  order: 23,  e: '²',  n: 'Kuvvet (Üs) Kavramı',         p: '² Kuvvet ve Kök',          level: 3 },
    { id: 24,  order: 24,  e: '³',  n: 'Kuvvet Çarpma Kuralı',        p: '² Kuvvet ve Kök',          level: 3 },
    { id: 25,  order: 25,  e: '🔼', n: 'Kuvvet Bölme Kuralı',         p: '² Kuvvet ve Kök',          level: 3 },
    { id: 26,  order: 26,  e: '🔽', n: 'Negatif Üslü Sayılar',        p: '² Kuvvet ve Kök',          level: 3 },
    { id: 27,  order: 27,  e: '√',  n: 'Karekök Kavramı',             p: '² Kuvvet ve Kök',          level: 3 },
    { id: 28,  order: 28,  e: '∛',  n: 'Küp Kök',                     p: '² Kuvvet ve Kök',          level: 3 },
    { id: 29,  order: 29,  e: '🧮', n: 'Kök İşlemleri',               p: '² Kuvvet ve Kök',          level: 3 },
    { id: 30,  order: 30,  e: '📐', n: 'Üslü İfadeler',               p: '² Kuvvet ve Kök',          level: 3 },
    { id: 31,  order: 31,  e: '🔢', n: 'Bilimsel Gösterim',           p: '² Kuvvet ve Kök',          level: 3 },
    { id: 32,  order: 32,  e: '🧊', n: 'Kuvvet ve Kök Karışık',       p: '² Kuvvet ve Kök',          level: 3 },
    { id: 33,  order: 33,  e: '🏁', n: 'Üslü Denklemler (Temel)',     p: '² Kuvvet ve Kök',          level: 3 },

    // ---- FAZ 5: ÇARPANLAR VE KATLAR (Level 3) ----
    { id: 34,  order: 34,  e: '🔑', n: 'Asal Sayılar',                p: '🔑 Çarpanlar ve Katlar',   level: 3 },
    { id: 35,  order: 35,  e: '🧩', n: 'Asal Çarpanlara Ayırma',      p: '🔑 Çarpanlar ve Katlar',   level: 3 },
    { id: 36,  order: 36,  e: '📌', n: 'EBOB (En Büyük Ortak Bölen)', p: '🔑 Çarpanlar ve Katlar',   level: 3 },
    { id: 37,  order: 37,  e: '📍', n: 'EKOK (En Küçük Ortak Kat)',   p: '🔑 Çarpanlar ve Katlar',   level: 3 },
    { id: 38,  order: 38,  e: '🔗', n: 'EBOB-EKOK Problemleri',       p: '🔑 Çarpanlar ve Katlar',   level: 3 },
    { id: 39,  order: 39,  e: '🎯', n: 'Çarpan Sayısı Bulma',         p: '🔑 Çarpanlar ve Katlar',   level: 3 },
    { id: 40,  order: 40,  e: '🧮', n: 'Ortak Çarpanlar',             p: '🔑 Çarpanlar ve Katlar',   level: 3 },
    { id: 41,  order: 41,  e: '📊', n: 'Bölme ve Kalan',              p: '🔑 Çarpanlar ve Katlar',   level: 3 },
    { id: 42,  order: 42,  e: '🔄', n: 'Öklid Bölmesi',               p: '🔑 Çarpanlar ve Katlar',   level: 3 },
    { id: 43,  order: 43,  e: '💡', n: 'Sayı Teorisi Problemleri',    p: '🔑 Çarpanlar ve Katlar',   level: 3 },
    { id: 44,  order: 44,  e: '🎲', n: 'Basamaklı Sayı Problemleri',  p: '🔑 Çarpanlar ve Katlar',   level: 3 },
    { id: 45,  order: 45,  e: '🏆', n: 'Çarpanlar Karışık',           p: '🔑 Çarpanlar ve Katlar',   level: 3 },

    // ---- FAZ 6: YÜZDE VE ORAN (Level 4) ----
    { id: 46,  order: 46,  e: '💯', n: 'Yüzde Kavramı',               p: '💯 Yüzde ve Oran',         level: 4 },
    { id: 47,  order: 47,  e: '📈', n: 'Yüzde Artış',                 p: '💯 Yüzde ve Oran',         level: 4 },
    { id: 48,  order: 48,  e: '📉', n: 'Yüzde Azalış',                p: '💯 Yüzde ve Oran',         level: 4 },
    { id: 49,  order: 49,  e: '🛒', n: 'İndirim ve Zam Problemleri',  p: '💯 Yüzde ve Oran',         level: 4 },
    { id: 50,  order: 50,  e: '🏦', n: 'Basit Faiz',                  p: '💯 Yüzde ve Oran',         level: 4 },
    { id: 51,  order: 51,  e: '🏧', n: 'Bileşik Faiz',                p: '💯 Yüzde ve Oran',         level: 4 },
    { id: 52,  order: 52,  e: '⚖️', n: 'Oran Kavramı',                p: '💯 Yüzde ve Oran',         level: 4 },
    { id: 53,  order: 53,  e: '🔢', n: 'Orantı (Doğru Orantı)',       p: '💯 Yüzde ve Oran',         level: 4 },
    { id: 54,  order: 54,  e: '🔄', n: 'Ters Orantı',                 p: '💯 Yüzde ve Oran',         level: 4 },
    { id: 55,  order: 55,  e: '🧪', n: 'Karışım Problemleri',         p: '💯 Yüzde ve Oran',         level: 4 },
    { id: 56,  order: 56,  e: '💰', n: 'Kâr-Zarar Problemleri',       p: '💯 Yüzde ve Oran',         level: 4 },
    { id: 57,  order: 57,  e: '🏪', n: 'Alış-Satış Problemleri',      p: '💯 Yüzde ve Oran',         level: 4 },
    { id: 58,  order: 58,  e: '👥', n: 'Bölüşme Problemleri',         p: '💯 Yüzde ve Oran',         level: 4 },
    { id: 59,  order: 59,  e: '🎯', n: 'Yüzde Karışık Problemler',    p: '💯 Yüzde ve Oran',         level: 4 },
    { id: 60,  order: 60,  e: '📊', n: 'Oran Karışık Problemler',     p: '💯 Yüzde ve Oran',         level: 4 },

    // ---- FAZ 7: DENKLEMLER (Level 5) ----
    { id: 61,  order: 61,  e: '🟰', n: 'Denklem Kavramı',             p: '🟰 Denklemler',            level: 5 },
    { id: 62,  order: 62,  e: '1️⃣', n: 'Birinci Dereceden Denklem',  p: '🟰 Denklemler',            level: 5 },
    { id: 63,  order: 63,  e: '2️⃣', n: 'İkinci Dereceden Denklem',   p: '🟰 Denklemler',            level: 5 },
    { id: 64,  order: 64,  e: '🔀', n: 'Denklem Sistemleri',          p: '🟰 Denklemler',            level: 5 },
    { id: 65,  order: 65,  e: '📝', n: 'Denklem Kurma Problemleri',   p: '🟰 Denklemler',            level: 5 },
    { id: 66,  order: 66,  e: '🧑', n: 'Yaş Problemleri',             p: '🟰 Denklemler',            level: 5 },
    { id: 67,  order: 67,  e: '🚶', n: 'Hız-Zaman-Yol Problemleri',   p: '🟰 Denklemler',            level: 5 },
    { id: 68,  order: 68,  e: '⏱️', n: 'İş Problemleri',              p: '🟰 Denklemler',            level: 5 },
    { id: 69,  order: 69,  e: '🚿', n: 'Havuz Problemleri',           p: '🟰 Denklemler',            level: 5 },
    { id: 70,  order: 70,  e: '🏃', n: 'Buluşma-Yetişme Problemleri', p: '🟰 Denklemler',            level: 5 },
    { id: 71,  order: 71,  e: '🧮', n: 'Sayı Problemleri',            p: '🟰 Denklemler',            level: 5 },
    { id: 72,  order: 72,  e: '🏆', n: 'Denklem Karışık Problemler',  p: '🟰 Denklemler',            level: 5 },

    // ---- FAZ 8: EŞİTSİZLİKLER (Level 6) ----
    { id: 73,  order: 73,  e: '↔️', n: 'Eşitsizlik Kavramı',          p: '↔️ Eşitsizlikler',         level: 6 },
    { id: 74,  order: 74,  e: '📐', n: 'Eşitsizlik Çözme',            p: '↔️ Eşitsizlikler',         level: 6 },
    { id: 75,  order: 75,  e: '🔗', n: 'Eşitsizlik Sistemleri',       p: '↔️ Eşitsizlikler',         level: 6 },
    { id: 76,  order: 76,  e: '📊', n: 'Mutlak Değer',                p: '↔️ Eşitsizlikler',         level: 6 },
    { id: 77,  order: 77,  e: '🔢', n: 'Mutlak Değerli Denklemler',   p: '↔️ Eşitsizlikler',         level: 6 },
    { id: 78,  order: 78,  e: '🔣', n: 'Mutlak Değerli Eşitsizlikler',p: '↔️ Eşitsizlikler',         level: 6 },
    { id: 79,  order: 79,  e: '🎯', n: 'Eşitsizlik Problemleri',      p: '↔️ Eşitsizlikler',         level: 6 },
    { id: 80,  order: 80,  e: '📈', n: 'İkinci Derece Eşitsizlik',    p: '↔️ Eşitsizlikler',         level: 6 },
    { id: 81,  order: 81,  e: '🔵', n: 'Sayı Doğrusu',                p: '↔️ Eşitsizlikler',         level: 6 },
    { id: 82,  order: 82,  e: '🏆', n: 'Eşitsizlik Karışık',          p: '↔️ Eşitsizlikler',         level: 6 },
    { id: 83,  order: 83,  e: '🔍', n: 'Rasyonel Eşitsizlikler',      p: '↔️ Eşitsizlikler',         level: 6 },
    { id: 84,  order: 84,  e: '💡', n: 'Köklü Eşitsizlikler',         p: '↔️ Eşitsizlikler',         level: 6 },
    { id: 85,  order: 85,  e: '🎓', n: 'İleri Eşitsizlikler',         p: '↔️ Eşitsizlikler',         level: 6 },

    // ---- FAZ 9: FONKSİYONLAR (Level 6) ----
    { id: 86,  order: 86,  e: '🔧', n: 'Fonksiyon Kavramı',           p: '📈 Fonksiyonlar',          level: 6 },
    { id: 87,  order: 87,  e: '📉', n: 'Fonksiyon Tanım-Değer Kümesi',p: '📈 Fonksiyonlar',          level: 6 },
    { id: 88,  order: 88,  e: '📈', n: 'Fonksiyon Grafikleri',        p: '📈 Fonksiyonlar',          level: 6 },
    { id: 89,  order: 89,  e: '🔀', n: 'Bileşke Fonksiyon',           p: '📈 Fonksiyonlar',          level: 6 },
    { id: 90,  order: 90,  e: '🔄', n: 'Ters Fonksiyon',              p: '📈 Fonksiyonlar',          level: 6 },
    { id: 91,  order: 91,  e: '📐', n: 'Doğrusal Fonksiyon',          p: '📈 Fonksiyonlar',          level: 6 },
    { id: 92,  order: 92,  e: '🌊', n: 'İkinci Derece Fonksiyon',     p: '📈 Fonksiyonlar',          level: 6 },
    { id: 93,  order: 93,  e: '🔢', n: 'Üstel Fonksiyon',             p: '📈 Fonksiyonlar',          level: 7 },
    { id: 94,  order: 94,  e: '📊', n: 'Logaritma Fonksiyonu',        p: '📈 Fonksiyonlar',          level: 7 },
    { id: 95,  order: 95,  e: '🏆', n: 'Fonksiyon Karışık',           p: '📈 Fonksiyonlar',          level: 7 },
    { id: 96,  order: 96,  e: '🎯', n: 'Fonksiyon Problemleri',       p: '📈 Fonksiyonlar',          level: 7 },
    { id: 97,  order: 97,  e: '🎓', n: 'İleri Fonksiyonlar',          p: '📈 Fonksiyonlar',          level: 7 },

    // ---- FAZ 10: LOGARİTMA (Level 7) ----
    { id: 98,  order: 98,  e: 'log', n: 'Logaritma Kavramı',          p: 'log Logaritma',            level: 7 },
    { id: 99,  order: 99,  e: '📐', n: 'Logaritma Özellikleri',       p: 'log Logaritma',            level: 7 },
    { id: 100, order: 100, e: '🔢', n: 'Logaritma İşlemleri',         p: 'log Logaritma',            level: 7 },
    { id: 101, order: 101, e: '🔀', n: 'Logaritmik Denklemler',       p: 'log Logaritma',            level: 7 },
    { id: 102, order: 102, e: '📊', n: 'Logaritmik Eşitsizlikler',    p: 'log Logaritma',            level: 7 },
    { id: 103, order: 103, e: '🎯', n: 'Logaritma Problemleri',       p: 'log Logaritma',            level: 7 },
    { id: 104, order: 104, e: '🏆', n: 'Logaritma Karışık',           p: 'log Logaritma',            level: 7 },
    { id: 105, order: 105, e: '💡', n: 'Doğal Logaritma',             p: 'log Logaritma',            level: 7 },
    { id: 106, order: 106, e: '📈', n: 'Üstel-Log Denklemler',        p: 'log Logaritma',            level: 7 },
    { id: 107, order: 107, e: '🎓', n: 'İleri Logaritma',             p: 'log Logaritma',            level: 7 },

    // ---- FAZ 11: POLİNOMLAR (Level 7) ----
    { id: 108, order: 108, e: '📝', n: 'Polinom Kavramı',             p: '📝 Polinomlar',            level: 7 },
    { id: 109, order: 109, e: '➕', n: 'Polinom Toplama-Çıkarma',     p: '📝 Polinomlar',            level: 7 },
    { id: 110, order: 110, e: '✖️', n: 'Polinom Çarpma',              p: '📝 Polinomlar',            level: 7 },
    { id: 111, order: 111, e: '➗', n: 'Polinom Bölme',               p: '📝 Polinomlar',            level: 7 },
    { id: 112, order: 112, e: '🔀', n: 'Çarpanlara Ayırma',           p: '📝 Polinomlar',            level: 7 },
    { id: 113, order: 113, e: '🔍', n: 'Özel Çarpım Formülleri',      p: '📝 Polinomlar',            level: 7 },
    { id: 114, order: 114, e: '🎯', n: 'Polinom Denklemleri',         p: '📝 Polinomlar',            level: 7 },
    { id: 115, order: 115, e: '📊', n: 'Polinom Grafikleri',          p: '📝 Polinomlar',            level: 7 },
    { id: 116, order: 116, e: '💡', n: 'Kalan Teoremi',               p: '📝 Polinomlar',            level: 7 },
    { id: 117, order: 117, e: '🏆', n: 'Polinom Karışık',             p: '📝 Polinomlar',            level: 7 },
    { id: 118, order: 118, e: '🔢', n: 'Vieta Formülleri',            p: '📝 Polinomlar',            level: 7 },
    { id: 119, order: 119, e: '🎓', n: 'İleri Polinomlar',            p: '📝 Polinomlar',            level: 7 },

    // ---- FAZ 12: TRİGONOMETRİ (Level 8) ----
    { id: 120, order: 120, e: '📐', n: 'Trigonometri Temel Kavramlar',p: '📐 Trigonometri',          level: 8 },
    { id: 121, order: 121, e: '🔺', n: 'Sinüs ve Kosinüs',            p: '📐 Trigonometri',          level: 8 },
    { id: 122, order: 122, e: '📏', n: 'Tanjant ve Kotanjant',        p: '📐 Trigonometri',          level: 8 },
    { id: 123, order: 123, e: '⭕', n: 'Trigonometrik Özdeşlikler',   p: '📐 Trigonometri',          level: 8 },
    { id: 124, order: 124, e: '🔄', n: 'Trigonometrik Denklemler',    p: '📐 Trigonometri',          level: 8 },
    { id: 125, order: 125, e: '📊', n: 'Trigonometrik Fonksiyon Grafikleri', p: '📐 Trigonometri',   level: 8 },
    { id: 126, order: 126, e: '🔢', n: 'Toplam-Fark Formülleri',      p: '📐 Trigonometri',          level: 8 },
    { id: 127, order: 127, e: '2️⃣', n: 'İki Kat Formülleri',         p: '📐 Trigonometri',          level: 8 },
    { id: 128, order: 128, e: '🎯', n: 'Trigonometri Problemleri',    p: '📐 Trigonometri',          level: 8 },
    { id: 129, order: 129, e: '🏆', n: 'Trigonometri Karışık',        p: '📐 Trigonometri',          level: 8 },
    { id: 130, order: 130, e: '🔺', n: 'Sinüs-Kosinüs Teoremi',      p: '📐 Trigonometri',          level: 8 },
    { id: 131, order: 131, e: '🎓', n: 'İleri Trigonometri',          p: '📐 Trigonometri',          level: 8 },

    // ---- FAZ 13: GEOMETRİ (Level 9) ----
    { id: 132, order: 132, e: '📏', n: 'Temel Geometri Kavramları',   p: '📐 Geometri',              level: 9 },
    { id: 133, order: 133, e: '🔺', n: 'Üçgenler',                    p: '📐 Geometri',              level: 9 },
    { id: 134, order: 134, e: '🟥', n: 'Dörtgenler',                  p: '📐 Geometri',              level: 9 },
    { id: 135, order: 135, e: '⭕', n: 'Çember ve Daire',             p: '📐 Geometri',              level: 9 },
    { id: 136, order: 136, e: '🔷', n: 'Çokgenler',                   p: '📐 Geometri',              level: 9 },
    { id: 137, order: 137, e: '📐', n: 'Açılar',                      p: '📐 Geometri',              level: 9 },
    { id: 138, order: 138, e: '📏', n: 'Alan Hesaplama',              p: '📐 Geometri',              level: 9 },
    { id: 139, order: 139, e: '🧊', n: 'Çevre Hesaplama',             p: '📐 Geometri',              level: 9 },
    { id: 140, order: 140, e: '🎯', n: 'Geometri Problemleri',        p: '📐 Geometri',              level: 9 },
    { id: 141, order: 141, e: '🏆', n: 'Geometri Karışık',            p: '📐 Geometri',              level: 9 },

    // ---- FAZ 14: KATI CİSİMLER (Level 9) ----
    { id: 142, order: 142, e: '🧊', n: 'Küp',                         p: '🧊 Katı Cisimler',         level: 9 },
    { id: 143, order: 143, e: '📦', n: 'Dikdörtgenler Prizması',      p: '🧊 Katı Cisimler',         level: 9 },
    { id: 144, order: 144, e: '🔺', n: 'Prizmalar',                   p: '🧊 Katı Cisimler',         level: 9 },
    { id: 145, order: 145, e: '🔶', n: 'Piramit',                     p: '🧊 Katı Cisimler',         level: 9 },
    { id: 146, order: 146, e: '⚽', n: 'Küre',                        p: '🧊 Katı Cisimler',         level: 9 },
    { id: 147, order: 147, e: '🥫', n: 'Silindir',                    p: '🧊 Katı Cisimler',         level: 9 },
    { id: 148, order: 148, e: '🍦', n: 'Koni',                        p: '🧊 Katı Cisimler',         level: 9 },
    { id: 149, order: 149, e: '📊', n: 'Hacim Hesaplama',             p: '🧊 Katı Cisimler',         level: 9 },
    { id: 150, order: 150, e: '🎯', n: 'Katı Cisim Problemleri',      p: '🧊 Katı Cisimler',         level: 9 },
    { id: 151, order: 151, e: '🏆', n: 'Katı Cisim Karışık',          p: '🧊 Katı Cisimler',         level: 9 },

    // ---- FAZ 15: VERİ VE OLASILIK (Level 10) ----
    { id: 152, order: 152, e: '📊', n: 'Veri Okuma ve Yorumlama',     p: '📊 Veri ve Olasılık',      level: 10 },
    { id: 153, order: 153, e: '📈', n: 'Ortalama',                    p: '📊 Veri ve Olasılık',      level: 10 },
    { id: 154, order: 154, e: '📉', n: 'Medyan ve Mod',               p: '📊 Veri ve Olasılık',      level: 10 },
    { id: 155, order: 155, e: '🔢', n: 'Sayma Yöntemleri',            p: '📊 Veri ve Olasılık',      level: 10 },
    { id: 156, order: 156, e: '🔀', n: 'Permütasyon',                 p: '📊 Veri ve Olasılık',      level: 10 },
    { id: 157, order: 157, e: '🎲', n: 'Kombinasyon',                 p: '📊 Veri ve Olasılık',      level: 10 },
    { id: 158, order: 158, e: '🎯', n: 'Olasılık Kavramı',            p: '📊 Veri ve Olasılık',      level: 10 },
    { id: 159, order: 159, e: '🔁', n: 'Koşullu Olasılık',            p: '📊 Veri ve Olasılık',      level: 10 },
    { id: 160, order: 160, e: '📊', n: 'Bağımsız Olaylar',            p: '📊 Veri ve Olasılık',      level: 10 },
    { id: 161, order: 161, e: '🏆', n: 'Olasılık Karışık',            p: '📊 Veri ve Olasılık',      level: 10 },

    // ---- FAZ 16: DİZİLER (Level 10) ----
    { id: 162, order: 162, e: '🔢', n: 'Dizi Kavramı',                p: '🔢 Diziler',               level: 10 },
    { id: 163, order: 163, e: '➕', n: 'Aritmetik Dizi',              p: '🔢 Diziler',               level: 10 },
    { id: 164, order: 164, e: '✖️', n: 'Geometrik Dizi',              p: '🔢 Diziler',               level: 10 },
    { id: 165, order: 165, e: '📊', n: 'Dizi Toplamları',             p: '🔢 Diziler',               level: 10 },
    { id: 166, order: 166, e: '🔁', n: 'Özel Diziler',                p: '🔢 Diziler',               level: 10 },
    { id: 167, order: 167, e: '∞',  n: 'Sonsuz Seriler (Temel)',      p: '🔢 Diziler',               level: 10 },
    { id: 168, order: 168, e: '🎯', n: 'Dizi Problemleri',            p: '🔢 Diziler',               level: 10 },
    { id: 169, order: 169, e: '🏆', n: 'Dizi Karışık',                p: '🔢 Diziler',               level: 10 },
    { id: 170, order: 170, e: '💡', n: 'Faktoriyel ve Binom',         p: '🔢 Diziler',               level: 10 },
    { id: 171, order: 171, e: '🔷', n: 'Binom Açılımı',               p: '🔢 Diziler',               level: 10 },
    { id: 172, order: 172, e: '📐', n: 'Matematiksel Tümevarım',      p: '🔢 Diziler',               level: 10 },
    { id: 173, order: 173, e: '🎓', n: 'İleri Diziler',               p: '🔢 Diziler',               level: 10 },
    { id: 174, order: 174, e: '🏅', n: 'Dizi Uzmanlık',               p: '🔢 Diziler',               level: 10 },

    // ---- FAZ 17: ANALİZ (Level 11) ----
    { id: 175, order: 175, e: '🔬', n: 'Limit Kavramı',               p: '🔬 Analiz',                level: 11 },
    { id: 176, order: 176, e: '📐', n: 'Limit Hesaplama',             p: '🔬 Analiz',                level: 11 },
    { id: 177, order: 177, e: '📈', n: 'Türev Kavramı',               p: '🔬 Analiz',                level: 11 },
    { id: 178, order: 178, e: '🔢', n: 'Türev Kuralları',             p: '🔬 Analiz',                level: 11 },
    { id: 179, order: 179, e: '🏔️', n: 'Maksimum-Minimum Problemleri',p: '🔬 Analiz',                level: 11 },
    { id: 180, order: 180, e: '📊', n: 'Türev Grafik Uygulamaları',   p: '🔬 Analiz',                level: 11 },
    { id: 181, order: 181, e: '∫',  n: 'İntegral Kavramı',            p: '🔬 Analiz',                level: 11 },
    { id: 182, order: 182, e: '🔀', n: 'İntegral Hesaplama',          p: '🔬 Analiz',                level: 11 },
    { id: 183, order: 183, e: '📏', n: 'Alan-Hacim İntegrali',        p: '🔬 Analiz',                level: 11 },
    { id: 184, order: 184, e: '🏆', n: 'Analiz Karışık',              p: '🔬 Analiz',                level: 11 },

    // ---- FAZ 18: ANALİTİK GEOMETRİ (Level 11) ----
    { id: 185, order: 185, e: '📍', n: 'Koordinat Sistemi',           p: '📍 Analitik Geometri',     level: 11 },
    { id: 186, order: 186, e: '📏', n: 'İki Nokta Arası Uzaklık',     p: '📍 Analitik Geometri',     level: 11 },
    { id: 187, order: 187, e: '🎯', n: 'Orta Nokta',                  p: '📍 Analitik Geometri',     level: 11 },
    { id: 188, order: 188, e: '📈', n: 'Doğrunun Eğimi',              p: '📍 Analitik Geometri',     level: 11 },
    { id: 189, order: 189, e: '📐', n: 'Doğru Denklemi',              p: '📍 Analitik Geometri',     level: 11 },
    { id: 190, order: 190, e: '🔀', n: 'Doğruların Konumu',           p: '📍 Analitik Geometri',     level: 11 },
    { id: 191, order: 191, e: '⭕', n: 'Çemberin Denklemi',           p: '📍 Analitik Geometri',     level: 11 },
    { id: 192, order: 192, e: '🌀', n: 'Parabol',                     p: '📍 Analitik Geometri',     level: 11 },
    { id: 193, order: 193, e: '🥚', n: 'Elips (Temel)',               p: '📍 Analitik Geometri',     level: 11 },
    { id: 194, order: 194, e: '🔺', n: 'Üçgen Alan (Analitik)',       p: '📍 Analitik Geometri',     level: 11 },
    { id: 195, order: 195, e: '🏆', n: 'Analitik Geometri Karışık',   p: '📍 Analitik Geometri',     level: 11 },

    // ---- FAZ 19: KPSS ÖZEL (Level 11) ----
    { id: 196, order: 196, e: '📋', n: 'KPSS Soru Tipi Analizi',      p: '🏆 KPSS Özel',             level: 11 },
    { id: 197, order: 197, e: '⏱️', n: 'Hızlı Çözüm Teknikleri',      p: '🏆 KPSS Özel',             level: 11 },
    { id: 198, order: 198, e: '🎯', n: 'KPSS Karma Problemler 1',     p: '🏆 KPSS Özel',             level: 11 },
    { id: 199, order: 199, e: '🎯', n: 'KPSS Karma Problemler 2',     p: '🏆 KPSS Özel',             level: 11 },
    { id: 200, order: 200, e: '🎯', n: 'KPSS Karma Problemler 3',     p: '🏆 KPSS Özel',             level: 11 },
    { id: 201, order: 201, e: '📊', n: 'DGS Özel Konular',            p: '🏆 KPSS Özel',             level: 11 },
    { id: 202, order: 202, e: '📈', n: 'TYT Özel Konular',            p: '🏆 KPSS Özel',             level: 11 },
    { id: 203, order: 203, e: '🔢', n: 'ALES Sayısal Bölüm',          p: '🏆 KPSS Özel',             level: 11 },
    { id: 204, order: 204, e: '🏆', n: 'Genel Tekrar 1',              p: '🏆 KPSS Özel',             level: 11 },
    { id: 205, order: 205, e: '🎓', n: 'Genel Tekrar 2',              p: '🏆 KPSS Özel',             level: 11 },
];
