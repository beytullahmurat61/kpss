// ============================================================
// config.js - KPSS MATEMATİK YAPILANDIRMA
// ÖSYM müfredatına uygun, sadece KPSS'te çıkan konular
// 13 Level (0-12), 78 Konu
// ============================================================

// ============================================================
// SEVİYELER (0-12)
// Her level bir ana konu grubuna karşılık gelir
// ============================================================
const LEVELS = {
    '0':  { name: 'Temel Aritmetik',          icon: '🌱', questionCount: 10, minCorrect: 7 },
    '1':  { name: 'Sayılar',                  icon: '🔢', questionCount: 10, minCorrect: 7 },
    '2':  { name: 'Kesirler',                 icon: '½',  questionCount: 10, minCorrect: 7 },
    '3':  { name: 'Üslü & Köklü Sayılar',     icon: '√',  questionCount: 10, minCorrect: 7 },
    '4':  { name: 'Çarpanlara Ayırma',        icon: '🔑', questionCount: 10, minCorrect: 8 },
    '5':  { name: 'Denklemler',               icon: '🟰', questionCount: 10, minCorrect: 8 },
    '6':  { name: 'Oran-Orantı & Yüzde',      icon: '💯', questionCount: 10, minCorrect: 8 },
    '7':  { name: 'Sözel Problemler',         icon: '📝', questionCount: 10, minCorrect: 8 },
    '8':  { name: 'Kümeler',                  icon: '🔵', questionCount: 10, minCorrect: 8 },
    '9':  { name: 'Permütasyon & Kombinasyon',icon: '🎲', questionCount: 10, minCorrect: 8 },
    '10': { name: 'Olasılık',                 icon: '🎯', questionCount: 10, minCorrect: 9 },
    '11': { name: 'İstatistik',               icon: '📊', questionCount: 10, minCorrect: 9 },
    '12': { name: 'Geometri',                 icon: '📐', questionCount: 10, minCorrect: 9 },
};

// ============================================================
// KONULAR (78 Konu - Sadece KPSS'te çıkanlar)
// id: 1-78, e: emoji, n: konu adı, p: faz, order: sıra, level: ilgili level
// ============================================================
const TOPICS = [

    // ---- FAZ 1: TEMEL ARİTMETİK (Level 0) ----
    { id: 1,  order: 1,  e: '➕', n: 'Toplama İşlemi',             p: '🌱 Temel Aritmetik', level: 0 },
    { id: 2,  order: 2,  e: '➖', n: 'Çıkarma İşlemi',             p: '🌱 Temel Aritmetik', level: 0 },
    { id: 3,  order: 3,  e: '✖️', n: 'Çarpma İşlemi',              p: '🌱 Temel Aritmetik', level: 0 },
    { id: 4,  order: 4,  e: '➗', n: 'Bölme İşlemi',               p: '🌱 Temel Aritmetik', level: 0 },
    { id: 5,  order: 5,  e: '🔢', n: 'Dört İşlem & İşlem Önceliği',p: '🌱 Temel Aritmetik', level: 0 },
    { id: 6,  order: 6,  e: '🧮', n: 'Sayı Basamakları',           p: '🌱 Temel Aritmetik', level: 0 },
    { id: 7,  order: 7,  e: '🔁', n: 'Tek-Çift & Ardışık Sayılar', p: '🌱 Temel Aritmetik', level: 0 },
    { id: 8,  order: 8,  e: '📊', n: 'Sayı Örüntüleri',            p: '🌱 Temel Aritmetik', level: 0 },

    // ---- FAZ 2: SAYILAR (Level 1) ----
    { id: 9,  order: 9,  e: '🔵', n: 'Doğal & Tam Sayılar',        p: '🔢 Sayılar',          level: 1 },
    { id: 10, order: 10, e: '🔶', n: 'Rasyonel & İrrasyonel Sayılar',p: '🔢 Sayılar',         level: 1 },
    { id: 11, order: 11, e: '🔑', n: 'Asal Sayılar',                p: '🔢 Sayılar',          level: 1 },
    { id: 12, order: 12, e: '🔗', n: 'Bölünebilme Kuralları',       p: '🔢 Sayılar',          level: 1 },
    { id: 13, order: 13, e: '📌', n: 'EBOB (En Büyük Ortak Bölen)', p: '🔢 Sayılar',          level: 1 },
    { id: 14, order: 14, e: '📍', n: 'EKOK (En Küçük Ortak Kat)',   p: '🔢 Sayılar',          level: 1 },
    { id: 15, order: 15, e: '🧩', n: 'Asal Çarpanlara Ayırma',      p: '🔢 Sayılar',          level: 1 },
    { id: 16, order: 16, e: '🎯', n: 'Faktöriyel',                  p: '🔢 Sayılar',          level: 1 },
    { id: 17, order: 17, e: '🔢', n: 'EBOB-EKOK Problemleri',       p: '🔢 Sayılar',          level: 1 },

    // ---- FAZ 3: KESİRLER (Level 2) ----
    { id: 18, order: 18, e: '½',  n: 'Kesir Kavramı & Türleri',     p: '½ Kesirler',          level: 2 },
    { id: 19, order: 19, e: '🔀', n: 'Kesirlerle Dört İşlem',       p: '½ Kesirler',          level: 2 },
    { id: 20, order: 20, e: '📏', n: 'Karışık Sayılar',             p: '½ Kesirler',          level: 2 },
    { id: 21, order: 21, e: '🔃', n: 'Kesirleri Karşılaştırma',     p: '½ Kesirler',          level: 2 },
    { id: 22, order: 22, e: '💯', n: 'Kesir-Ondalık Dönüşüm',       p: '½ Kesirler',          level: 2 },
    { id: 23, order: 23, e: '📝', n: 'Kesir Problemleri',           p: '½ Kesirler',          level: 2 },

    // ---- FAZ 4: ÜSLÜ & KÖKLÜ SAYILAR (Level 3) ----
    { id: 24, order: 24, e: '²',  n: 'Üslü Sayılar (Kuvvet)',       p: '√ Üs & Kök',         level: 3 },
    { id: 25, order: 25, e: '³',  n: 'Üs Alma Kuralları',           p: '√ Üs & Kök',         level: 3 },
    { id: 26, order: 26, e: '🔽', n: 'Negatif & Sıfır Üs',         p: '√ Üs & Kök',         level: 3 },
    { id: 27, order: 27, e: '√',  n: 'Karekök Kavramı',             p: '√ Üs & Kök',         level: 3 },
    { id: 28, order: 28, e: '∛',  n: 'Küp Kök & n. Kök',           p: '√ Üs & Kök',         level: 3 },
    { id: 29, order: 29, e: '🧮', n: 'Köklü İfadelerle İşlemler',  p: '√ Üs & Kök',         level: 3 },
    { id: 30, order: 30, e: '🔢', n: 'Üslü-Köklü Karışık',         p: '√ Üs & Kök',         level: 3 },

    // ---- FAZ 5: ÇARPANLARA AYIRMA (Level 4) ----
    { id: 31, order: 31, e: '🔑', n: 'Ortak Çarpan',                p: '🔑 Çarpanlar',        level: 4 },
    { id: 32, order: 32, e: '🧩', n: 'Gruplama Yöntemi',            p: '🔑 Çarpanlar',        level: 4 },
    { id: 33, order: 33, e: '📐', n: 'İki Kare Farkı',              p: '🔑 Çarpanlar',        level: 4 },
    { id: 34, order: 34, e: '🟩', n: 'Tam Kare Üçlü',              p: '🔑 Çarpanlar',        level: 4 },
    { id: 35, order: 35, e: '📝', n: 'Özdeşlikler',                 p: '🔑 Çarpanlar',        level: 4 },
    { id: 36, order: 36, e: '🔀', n: 'Üçlü Çarpanlara Ayırma',     p: '🔑 Çarpanlar',        level: 4 },
    { id: 37, order: 37, e: '➗', n: 'Sadeleştirme',                p: '🔑 Çarpanlar',        level: 4 },

    // ---- FAZ 6: DENKLEMLER (Level 5) ----
    { id: 38, order: 38, e: '🟰', n: '1. Dereceden Denklem',        p: '🟰 Denklemler',       level: 5 },
    { id: 39, order: 39, e: '2️⃣', n: 'İki Bilinmeyenli Denklem',   p: '🟰 Denklemler',       level: 5 },
    { id: 40, order: 40, e: '🔗', n: 'Denklem Sistemleri',          p: '🟰 Denklemler',       level: 5 },
    { id: 41, order: 41, e: '📝', n: 'Denklem Kurma',               p: '🟰 Denklemler',       level: 5 },
    { id: 42, order: 42, e: '√',  n: 'Köklü Denklemler (√x=a)',     p: '🟰 Denklemler',       level: 5 },
    { id: 43, order: 43, e: '📊', n: 'Mutlak Değerli Denklemler',   p: '🟰 Denklemler',       level: 5 },

    // ---- FAZ 7: ORAN-ORANTILAR & YÜZDE (Level 6) ----
    { id: 44, order: 44, e: '⚖️', n: 'Oran Kavramı',                p: '💯 Oran & Yüzde',     level: 6 },
    { id: 45, order: 45, e: '🔢', n: 'Doğru Orantı',                p: '💯 Oran & Yüzde',     level: 6 },
    { id: 46, order: 46, e: '🔄', n: 'Ters Orantı',                 p: '💯 Oran & Yüzde',     level: 6 },
    { id: 47, order: 47, e: '💯', n: 'Yüzde Kavramı',               p: '💯 Oran & Yüzde',     level: 6 },
    { id: 48, order: 48, e: '📈', n: 'Yüzde Artış-Azalış',          p: '💯 Oran & Yüzde',     level: 6 },
    { id: 49, order: 49, e: '💰', n: 'Kâr-Zarar & Faiz',            p: '💯 Oran & Yüzde',     level: 6 },
    { id: 50, order: 50, e: '🧪', n: 'Karışım Problemleri',         p: '💯 Oran & Yüzde',     level: 6 },
    { id: 51, order: 51, e: '👥', n: 'Bölüşme & Orantı Problemleri',p: '💯 Oran & Yüzde',     level: 6 },

    // ---- FAZ 8: SÖZEL PROBLEMLER (Level 7) ----
    { id: 52, order: 52, e: '🔢', n: 'Sayı Problemleri',            p: '📝 Sözel Problemler', level: 7 },
    { id: 53, order: 53, e: '½',  n: 'Kesir Problemleri',           p: '📝 Sözel Problemler', level: 7 },
    { id: 54, order: 54, e: '🧑', n: 'Yaş Problemleri',             p: '📝 Sözel Problemler', level: 7 },
    { id: 55, order: 55, e: '🚶', n: 'Hız-Zaman-Yol Problemleri',   p: '📝 Sözel Problemler', level: 7 },
    { id: 56, order: 56, e: '⏱️', n: 'İşçi-Havuz Problemleri',      p: '📝 Sözel Problemler', level: 7 },
    { id: 57, order: 57, e: '🛒', n: 'Alış-Veriş Problemleri',      p: '📝 Sözel Problemler', level: 7 },
    { id: 58, order: 58, e: '📊', n: 'Grafik-Tablo Problemleri',    p: '📝 Sözel Problemler', level: 7 },

    // ---- FAZ 9: KÜMELER (Level 8) ----
    { id: 59, order: 59, e: '🔵', n: 'Küme Kavramı & Gösterimi',    p: '🔵 Kümeler',          level: 8 },
    { id: 60, order: 60, e: '🔗', n: 'Alt Küme & Eleman Sayısı',    p: '🔵 Kümeler',          level: 8 },
    { id: 61, order: 61, e: '🔀', n: 'Birleşim & Kesişim',          p: '🔵 Kümeler',          level: 8 },
    { id: 62, order: 62, e: '➖', n: 'Fark & Tümleme Kümesi',       p: '🔵 Kümeler',          level: 8 },
    { id: 63, order: 63, e: '🔵', n: 'Venn Şeması Problemleri',     p: '🔵 Kümeler',          level: 8 },

    // ---- FAZ 10: PERMÜTASYON & KOMBİNASYON (Level 9) ----
    { id: 64, order: 64, e: '🔢', n: 'Sayma Yöntemleri (Çarpma Kuralı)',p: '🎲 Perm & Komb', level: 9 },
    { id: 65, order: 65, e: '🔀', n: 'Permütasyon',                 p: '🎲 Perm & Komb',      level: 9 },
    { id: 66, order: 66, e: '🎲', n: 'Kombinasyon',                 p: '🎲 Perm & Komb',      level: 9 },
    { id: 67, order: 67, e: '📐', n: 'Geometrik Sayma (Nokta, Doğru)',p: '🎲 Perm & Komb',    level: 9 },
    { id: 68, order: 68, e: '👥', n: 'Gruplama & Seçme Problemleri',p: '🎲 Perm & Komb',      level: 9 },

    // ---- FAZ 11: OLASILIK (Level 10) ----
    { id: 69, order: 69, e: '🎯', n: 'Olasılık Kavramı',            p: '🎯 Olasılık',         level: 10 },
    { id: 70, order: 70, e: '🎲', n: 'Basit Olasılık Hesabı',       p: '🎯 Olasılık',         level: 10 },
    { id: 71, order: 71, e: '🔁', n: 'Koşullu Olasılık',            p: '🎯 Olasılık',         level: 10 },
    { id: 72, order: 72, e: '📊', n: 'Bağımsız & Bağımlı Olaylar',  p: '🎯 Olasılık',         level: 10 },
    { id: 73, order: 73, e: '🏆', n: 'Olasılık Problemleri',        p: '🎯 Olasılık',         level: 10 },

    // ---- FAZ 12: İSTATİSTİK (Level 11) ----
    { id: 74, order: 74, e: '📊', n: 'Veri Okuma (Tablo & Grafik)', p: '📊 İstatistik',       level: 11 },
    { id: 75, order: 75, e: '📈', n: 'Aritmetik Ortalama',          p: '📊 İstatistik',       level: 11 },
    { id: 76, order: 76, e: '📉', n: 'Medyan & Mod',                p: '📊 İstatistik',       level: 11 },
    { id: 77, order: 77, e: '🔢', n: 'Açıklık (Ranj)',              p: '📊 İstatistik',       level: 11 },

    // ---- FAZ 13: GEOMETRİ (Level 12) ----
    { id: 78, order: 78, e: '📐', n: 'Açılar & Temel Kavramlar',    p: '📐 Geometri',         level: 12 },
    { id: 79, order: 79, e: '🔺', n: 'Üçgenler (Alan, Çevre)',      p: '📐 Geometri',         level: 12 },
    { id: 80, order: 80, e: '🟥', n: 'Dörtgenler (Kare, Dikdörtgen, Paralelkenar)', p: '📐 Geometri', level: 12 },
    { id: 81, order: 81, e: '⭕', n: 'Çember & Daire',              p: '📐 Geometri',         level: 12 },
    { id: 82, order: 82, e: '📏', n: 'Pisagor Teoremi',             p: '📐 Geometri',         level: 12 },
    { id: 83, order: 83, e: '🏆', n: 'Geometri Problemleri',        p: '📐 Geometri',         level: 12 },
];

// ============================================================
// SORU BANKASI - LEVEL EŞLEŞME HARİTASI
// questions.js'deki her level hangi TOPICS id aralığına karşılık gelir
// ============================================================
const LEVEL_TOPIC_MAP = {
    0:  { ids: [1,2,3,4,5,6,7,8] },          // Temel Aritmetik
    1:  { ids: [9,10,11,12,13,14,15,16,17] }, // Sayılar
    2:  { ids: [18,19,20,21,22,23] },          // Kesirler
    3:  { ids: [24,25,26,27,28,29,30] },       // Üs & Kök
    4:  { ids: [31,32,33,34,35,36,37] },       // Çarpanlar
    5:  { ids: [38,39,40,41,42,43] },          // Denklemler
    6:  { ids: [44,45,46,47,48,49,50,51] },    // Oran & Yüzde
    7:  { ids: [52,53,54,55,56,57,58] },       // Sözel Problemler
    8:  { ids: [59,60,61,62,63] },             // Kümeler
    9:  { ids: [64,65,66,67,68] },             // Perm & Komb
    10: { ids: [69,70,71,72,73] },             // Olasılık
    11: { ids: [74,75,76,77] },                // İstatistik
    12: { ids: [78,79,80,81,82,83] },          // Geometri
};

// Browser global scope için (window objesi üzerinden erişim)
if (typeof window !== 'undefined') {
    window.LEVELS = LEVELS;
    window.TOPICS = TOPICS;
    window.LEVEL_TOPIC_MAP = LEVEL_TOPIC_MAP;
}

    // ---- FAZ 7: DENKLEMLER ----
    { id: 61,  order: 61,  e: '🟰', n: 'Denklem Kavramı',             p: '🟰 Denklemler' },
    { id: 62,  order: 62,  e: '1️⃣', n: 'Birinci Dereceden Denklem',  p: '🟰 Denklemler' },
    { id: 63,  order: 63,  e: '2️⃣', n: 'İkinci Dereceden Denklem',   p: '🟰 Denklemler' },
    { id: 64,  order: 64,  e: '🔀', n: 'Denklem Sistemleri',          p: '🟰 Denklemler' },
    { id: 65,  order: 65,  e: '📝', n: 'Denklem Kurma Problemleri',   p: '🟰 Denklemler' },
    { id: 66,  order: 66,  e: '🧑', n: 'Yaş Problemleri',             p: '🟰 Denklemler' },
    { id: 67,  order: 67,  e: '🚶', n: 'Hız-Zaman-Yol Problemleri',   p: '🟰 Denklemler' },
    { id: 68,  order: 68,  e: '⏱️', n: 'İş Problemleri',              p: '🟰 Denklemler' },
    { id: 69,  order: 69,  e: '🚿', n: 'Havuz Problemleri',           p: '🟰 Denklemler' },
    { id: 70,  order: 70,  e: '🏃', n: 'Buluşma-Yetişme Problemleri', p: '🟰 Denklemler' },
    { id: 71,  order: 71,  e: '🧮', n: 'Sayı Problemleri',            p: '🟰 Denklemler' },
    { id: 72,  order: 72,  e: '🏆', n: 'Denklem Karışık Problemler',  p: '🟰 Denklemler' },

    // ---- FAZ 8: EŞİTSİZLİKLER ----
    { id: 73,  order: 73,  e: '↔️', n: 'Eşitsizlik Kavramı',          p: '↔️ Eşitsizlikler' },
    { id: 74,  order: 74,  e: '📐', n: 'Eşitsizlik Çözme',            p: '↔️ Eşitsizlikler' },
    { id: 75,  order: 75,  e: '🔗', n: 'Eşitsizlik Sistemleri',       p: '↔️ Eşitsizlikler' },
    { id: 76,  order: 76,  e: '📊', n: 'Mutlak Değer',                p: '↔️ Eşitsizlikler' },
    { id: 77,  order: 77,  e: '🔢', n: 'Mutlak Değerli Denklemler',   p: '↔️ Eşitsizlikler' },
    { id: 78,  order: 78,  e: '🔣', n: 'Mutlak Değerli Eşitsizlikler',p: '↔️ Eşitsizlikler' },
    { id: 79,  order: 79,  e: '🎯', n: 'Eşitsizlik Problemleri',      p: '↔️ Eşitsizlikler' },
    { id: 80,  order: 80,  e: '📈', n: 'İkinci Derece Eşitsizlik',    p: '↔️ Eşitsizlikler' },
    { id: 81,  order: 81,  e: '🔵', n: 'Sayı Doğrusu',                p: '↔️ Eşitsizlikler' },
    { id: 82,  order: 82,  e: '🏆', n: 'Eşitsizlik Karışık',          p: '↔️ Eşitsizlikler' },
    { id: 83,  order: 83,  e: '🔍', n: 'Rasyonel Eşitsizlikler',      p: '↔️ Eşitsizlikler' },
    { id: 84,  order: 84,  e: '💡', n: 'Köklü Eşitsizlikler',         p: '↔️ Eşitsizlikler' },
    { id: 85,  order: 85,  e: '🎓', n: 'İleri Eşitsizlikler',         p: '↔️ Eşitsizlikler' },

    // ---- FAZ 9: FONKSİYONLAR ----
    { id: 86,  order: 86,  e: '🔧', n: 'Fonksiyon Kavramı',           p: '📈 Fonksiyonlar' },
    { id: 87,  order: 87,  e: '📉', n: 'Fonksiyon Tanım-Değer Kümesi',p: '📈 Fonksiyonlar' },
    { id: 88,  order: 88,  e: '📈', n: 'Fonksiyon Grafikleri',        p: '📈 Fonksiyonlar' },
    { id: 89,  order: 89,  e: '🔀', n: 'Bileşke Fonksiyon',           p: '📈 Fonksiyonlar' },
    { id: 90,  order: 90,  e: '🔄', n: 'Ters Fonksiyon',              p: '📈 Fonksiyonlar' },
    { id: 91,  order: 91,  e: '📐', n: 'Doğrusal Fonksiyon',          p: '📈 Fonksiyonlar' },
    { id: 92,  order: 92,  e: '🌊', n: 'İkinci Derece Fonksiyon',     p: '📈 Fonksiyonlar' },
    { id: 93,  order: 93,  e: '🔢', n: 'Üstel Fonksiyon',             p: '📈 Fonksiyonlar' },
    { id: 94,  order: 94,  e: '📊', n: 'Logaritma Fonksiyonu',        p: '📈 Fonksiyonlar' },
    { id: 95,  order: 95,  e: '🏆', n: 'Fonksiyon Karışık',           p: '📈 Fonksiyonlar' },
    { id: 96,  order: 96,  e: '🎯', n: 'Fonksiyon Problemleri',       p: '📈 Fonksiyonlar' },
    { id: 97,  order: 97,  e: '🎓', n: 'İleri Fonksiyonlar',          p: '📈 Fonksiyonlar' },

    // ---- FAZ 10: LOGARİTMA ----
    { id: 98,  order: 98,  e: 'log', n: 'Logaritma Kavramı',          p: 'log Logaritma' },
    { id: 99,  order: 99,  e: '📐', n: 'Logaritma Özellikleri',       p: 'log Logaritma' },
    { id: 100, order: 100, e: '🔢', n: 'Logaritma İşlemleri',         p: 'log Logaritma' },
    { id: 101, order: 101, e: '🔀', n: 'Logaritmik Denklemler',       p: 'log Logaritma' },
    { id: 102, order: 102, e: '📊', n: 'Logaritmik Eşitsizlikler',    p: 'log Logaritma' },
    { id: 103, order: 103, e: '🎯', n: 'Logaritma Problemleri',       p: 'log Logaritma' },
    { id: 104, order: 104, e: '🏆', n: 'Logaritma Karışık',           p: 'log Logaritma' },
    { id: 105, order: 105, e: '💡', n: 'Doğal Logaritma',             p: 'log Logaritma' },
    { id: 106, order: 106, e: '📈', n: 'Üstel-Log Denklemler',        p: 'log Logaritma' },
    { id: 107, order: 107, e: '🎓', n: 'İleri Logaritma',             p: 'log Logaritma' },

    // ---- FAZ 11: POLİNOMLAR ----
    { id: 108, order: 108, e: '📝', n: 'Polinom Kavramı',             p: '📝 Polinomlar' },
    { id: 109, order: 109, e: '➕', n: 'Polinom Toplama-Çıkarma',     p: '📝 Polinomlar' },
    { id: 110, order: 110, e: '✖️', n: 'Polinom Çarpma',              p: '📝 Polinomlar' },
    { id: 111, order: 111, e: '➗', n: 'Polinom Bölme',               p: '📝 Polinomlar' },
    { id: 112, order: 112, e: '🔀', n: 'Çarpanlara Ayırma',           p: '📝 Polinomlar' },
    { id: 113, order: 113, e: '🔍', n: 'Özel Çarpım Formülleri',      p: '📝 Polinomlar' },
    { id: 114, order: 114, e: '🎯', n: 'Polinom Denklemleri',         p: '📝 Polinomlar' },
    { id: 115, order: 115, e: '📊', n: 'Polinom Grafikleri',          p: '📝 Polinomlar' },
    { id: 116, order: 116, e: '💡', n: 'Kalan Teoremi',               p: '📝 Polinomlar' },
    { id: 117, order: 117, e: '🏆', n: 'Polinom Karışık',             p: '📝 Polinomlar' },
    { id: 118, order: 118, e: '🔢', n: 'Vieta Formülleri',            p: '📝 Polinomlar' },
    { id: 119, order: 119, e: '🎓', n: 'İleri Polinomlar',            p: '📝 Polinomlar' },

    // ---- FAZ 12: TRİGONOMETRİ ----
    { id: 120, order: 120, e: '📐', n: 'Trigonometri Temel Kavramlar',p: '📐 Trigonometri' },
    { id: 121, order: 121, e: '🔺', n: 'Sinüs ve Kosinüs',            p: '📐 Trigonometri' },
    { id: 122, order: 122, e: '📏', n: 'Tanjant ve Kotanjant',        p: '📐 Trigonometri' },
    { id: 123, order: 123, e: '⭕', n: 'Trigonometrik Özdeşlikler',   p: '📐 Trigonometri' },
    { id: 124, order: 124, e: '🔄', n: 'Trigonometrik Denklemler',    p: '📐 Trigonometri' },
    { id: 125, order: 125, e: '📊', n: 'Trigonometrik Fonksiyon Grafikleri', p: '📐 Trigonometri' },
    { id: 126, order: 126, e: '🔢', n: 'Toplam-Fark Formülleri',      p: '📐 Trigonometri' },
    { id: 127, order: 127, e: '2️⃣', n: 'İki Kat Formülleri',         p: '📐 Trigonometri' },
    { id: 128, order: 128, e: '🎯', n: 'Trigonometri Problemleri',    p: '📐 Trigonometri' },
    { id: 129, order: 129, e: '🏆', n: 'Trigonometri Karışık',        p: '📐 Trigonometri' },
    { id: 130, order: 130, e: '🔺', n: 'Sinüs-Kosinüs Teoremi',      p: '📐 Trigonometri' },
    { id: 131, order: 131, e: '🎓', n: 'İleri Trigonometri',          p: '📐 Trigonometri' },

    // ---- FAZ 13: GEOMETRİ ----
    { id: 132, order: 132, e: '📏', n: 'Temel Geometri Kavramları',   p: '📐 Geometri' },
    { id: 133, order: 133, e: '🔺', n: 'Üçgenler',                    p: '📐 Geometri' },
    { id: 134, order: 134, e: '🟥', n: 'Dörtgenler',                  p: '📐 Geometri' },
    { id: 135, order: 135, e: '⭕', n: 'Çember ve Daire',             p: '📐 Geometri' },
    { id: 136, order: 136, e: '🔷', n: 'Çokgenler',                   p: '📐 Geometri' },
    { id: 137, order: 137, e: '📐', n: 'Açılar',                      p: '📐 Geometri' },
    { id: 138, order: 138, e: '📏', n: 'Alan Hesaplama',              p: '📐 Geometri' },
    { id: 139, order: 139, e: '🧊', n: 'Çevre Hesaplama',             p: '📐 Geometri' },
    { id: 140, order: 140, e: '🎯', n: 'Geometri Problemleri',        p: '📐 Geometri' },
    { id: 141, order: 141, e: '🏆', n: 'Geometri Karışık',            p: '📐 Geometri' },

    // ---- FAZ 14: KATı CİSİMLER ----
    { id: 142, order: 142, e: '🧊', n: 'Küp',                         p: '🧊 Katı Cisimler' },
    { id: 143, order: 143, e: '📦', n: 'Dikdörtgenler Prizması',      p: '🧊 Katı Cisimler' },
    { id: 144, order: 144, e: '🔺', n: 'Prizmalar',                   p: '🧊 Katı Cisimler' },
    { id: 145, order: 145, e: '🔶', n: 'Piramit',                     p: '🧊 Katı Cisimler' },
    { id: 146, order: 146, e: '⚽', n: 'Küre',                        p: '🧊 Katı Cisimler' },
    { id: 147, order: 147, e: '🥫', n: 'Silindir',                    p: '🧊 Katı Cisimler' },
    { id: 148, order: 148, e: '🍦', n: 'Koni',                        p: '🧊 Katı Cisimler' },
    { id: 149, order: 149, e: '📊', n: 'Hacim Hesaplama',             p: '🧊 Katı Cisimler' },
    { id: 150, order: 150, e: '🎯', n: 'Katı Cisim Problemleri',      p: '🧊 Katı Cisimler' },
    { id: 151, order: 151, e: '🏆', n: 'Katı Cisim Karışık',          p: '🧊 Katı Cisimler' },

    // ---- FAZ 15: VERİ VE OLASILIK ----
    { id: 152, order: 152, e: '📊', n: 'Veri Okuma ve Yorumlama',     p: '📊 Veri ve Olasılık' },
    { id: 153, order: 153, e: '📈', n: 'Ortalama',                    p: '📊 Veri ve Olasılık' },
    { id: 154, order: 154, e: '📉', n: 'Medyan ve Mod',               p: '📊 Veri ve Olasılık' },
    { id: 155, order: 155, e: '🔢', n: 'Sayma Yöntemleri',            p: '📊 Veri ve Olasılık' },
    { id: 156, order: 156, e: '🔀', n: 'Permütasyon',                 p: '📊 Veri ve Olasılık' },
    { id: 157, order: 157, e: '🎲', n: 'Kombinasyon',                 p: '📊 Veri ve Olasılık' },
    { id: 158, order: 158, e: '🎯', n: 'Olasılık Kavramı',            p: '📊 Veri ve Olasılık' },
    { id: 159, order: 159, e: '🔁', n: 'Koşullu Olasılık',            p: '📊 Veri ve Olasılık' },
    { id: 160, order: 160, e: '📊', n: 'Bağımsız Olaylar',            p: '📊 Veri ve Olasılık' },
    { id: 161, order: 161, e: '🏆', n: 'Olasılık Karışık',            p: '📊 Veri ve Olasılık' },

    // ---- FAZ 16: DİZİLER ----
    { id: 162, order: 162, e: '🔢', n: 'Dizi Kavramı',                p: '🔢 Diziler' },
    { id: 163, order: 163, e: '➕', n: 'Aritmetik Dizi',              p: '🔢 Diziler' },
    { id: 164, order: 164, e: '✖️', n: 'Geometrik Dizi',              p: '🔢 Diziler' },
    { id: 165, order: 165, e: '📊', n: 'Dizi Toplamları',             p: '🔢 Diziler' },
    { id: 166, order: 166, e: '🔁', n: 'Özel Diziler',                p: '🔢 Diziler' },
    { id: 167, order: 167, e: '∞', n: 'Sonsuz Seriler (Temel)',       p: '🔢 Diziler' },
    { id: 168, order: 168, e: '🎯', n: 'Dizi Problemleri',            p: '🔢 Diziler' },
    { id: 169, order: 169, e: '🏆', n: 'Dizi Karışık',                p: '🔢 Diziler' },
    { id: 170, order: 170, e: '💡', n: 'Faktoriyel ve Binom',         p: '🔢 Diziler' },
    { id: 171, order: 171, e: '🔷', n: 'Binom Açılımı',               p: '🔢 Diziler' },
    { id: 172, order: 172, e: '📐', n: 'Matematiksel Tümevarım',      p: '🔢 Diziler' },
    { id: 173, order: 173, e: '🎓', n: 'İleri Diziler',               p: '🔢 Diziler' },
    { id: 174, order: 174, e: '🏅', n: 'Dizi Uzmanlık',               p: '🔢 Diziler' },

    // ---- FAZ 17: ANALİZ ----
    { id: 175, order: 175, e: '🔬', n: 'Limit Kavramı',               p: '🔬 Analiz' },
    { id: 176, order: 176, e: '📐', n: 'Limit Hesaplama',             p: '🔬 Analiz' },
    { id: 177, order: 177, e: '📈', n: 'Türev Kavramı',               p: '🔬 Analiz' },
    { id: 178, order: 178, e: '🔢', n: 'Türev Kuralları',             p: '🔬 Analiz' },
    { id: 179, order: 179, e: '🏔️', n: 'Maksimum-Minimum Problemleri',p: '🔬 Analiz' },
    { id: 180, order: 180, e: '📊', n: 'Türev Grafik Uygulamaları',   p: '🔬 Analiz' },
    { id: 181, order: 181, e: '∫', n: 'İntegral Kavramı',             p: '🔬 Analiz' },
    { id: 182, order: 182, e: '🔀', n: 'İntegral Hesaplama',          p: '🔬 Analiz' },
    { id: 183, order: 183, e: '📏', n: 'Alan-Hacim İntegrali',        p: '🔬 Analiz' },
    { id: 184, order: 184, e: '🏆', n: 'Analiz Karışık',              p: '🔬 Analiz' },

    // ---- FAZ 18: ANALİTİK GEOMETRİ ----
    { id: 185, order: 185, e: '📍', n: 'Koordinat Sistemi',           p: '📍 Analitik Geometri' },
    { id: 186, order: 186, e: '📏', n: 'İki Nokta Arası Uzaklık',     p: '📍 Analitik Geometri' },
    { id: 187, order: 187, e: '🎯', n: 'Orta Nokta',                  p: '📍 Analitik Geometri' },
    { id: 188, order: 188, e: '📈', n: 'Doğrunun Eğimi',              p: '📍 Analitik Geometri' },
    { id: 189, order: 189, e: '📐', n: 'Doğru Denklemi',              p: '📍 Analitik Geometri' },
    { id: 190, order: 190, e: '🔀', n: 'Doğruların Konumu',           p: '📍 Analitik Geometri' },
    { id: 191, order: 191, e: '⭕', n: 'Çemberin Denklemi',           p: '📍 Analitik Geometri' },
    { id: 192, order: 192, e: '🌀', n: 'Parabol',                     p: '📍 Analitik Geometri' },
    { id: 193, order: 193, e: '🥚', n: 'Elips (Temel)',               p: '📍 Analitik Geometri' },
    { id: 194, order: 194, e: '🔺', n: 'Üçgen Alan (Analitik)',       p: '📍 Analitik Geometri' },
    { id: 195, order: 195, e: '🏆', n: 'Analitik Geometri Karışık',   p: '📍 Analitik Geometri' },

    // ---- FAZ 19: KPSS ÖZEL ----
    { id: 196, order: 196, e: '📋', n: 'KPSS Soru Tipi Analizi',      p: '🏆 KPSS Özel' },
    { id: 197, order: 197, e: '⏱️', n: 'Hızlı Çözüm Teknikleri',      p: '🏆 KPSS Özel' },
    { id: 198, order: 198, e: '🎯', n: 'KPSS Karma Problemler 1',     p: '🏆 KPSS Özel' },
    { id: 199, order: 199, e: '🎯', n: 'KPSS Karma Problemler 2',     p: '🏆 KPSS Özel' },
    { id: 200, order: 200, e: '🎯', n: 'KPSS Karma Problemler 3',     p: '🏆 KPSS Özel' },
    { id: 201, order: 201, e: '📊', n: 'DGS Özel Konular',            p: '🏆 KPSS Özel' },
    { id: 202, order: 202, e: '📈', n: 'TYT Özel Konular',            p: '🏆 KPSS Özel' },
    { id: 203, order: 203, e: '🔢', n: 'ALES Sayısal Bölüm',          p: '🏆 KPSS Özel' },
    { id: 204, order: 204, e: '🏆', n: 'Genel Tekrar 1',              p: '🏆 KPSS Özel' },
    { id: 205, order: 205, e: '🎓', n: 'Genel Tekrar 2',              p: '🏆 KPSS Özel' },
];
