// ============================================
// KPSS MATEMATİK KONFIGÜRASYON DOSYASI
// 19 Konu | Her konuda 3 level
// ============================================

// ========== KONU LİSTESİ ==========
const TOPICS = [
    { id: 1,  order: 1,  e: '➕', n: 'Toplama İşlemi',              locked: false, levelCount: 3 },
    { id: 2,  order: 2,  e: '➖', n: 'Çıkarma İşlemi',             locked: true,  levelCount: 3 },
    { id: 3,  order: 3,  e: '✖️', n: 'Çarpma İşlemi',              locked: true,  levelCount: 3 },
    { id: 4,  order: 4,  e: '➗', n: 'Bölme İşlemi',               locked: true,  levelCount: 3 },
    { id: 5,  order: 5,  e: '½',  n: 'Kesirler',                  locked: true,  levelCount: 3 },
    { id: 6,  order: 6,  e: '🔟', n: 'Ondalık Sayılar',            locked: true,  levelCount: 3 },
    { id: 7,  order: 7,  e: '²',  n: 'Üslü Sayılar',              locked: true,  levelCount: 3 },
    { id: 8,  order: 8,  e: '√',  n: 'Köklü Sayılar',             locked: true,  levelCount: 3 },
    { id: 9,  order: 9,  e: '⚖️', n: 'Oran - Orantı',              locked: true,  levelCount: 3 },
    { id: 10, order: 10, e: '💯', n: 'Yüzde Hesapları',            locked: true,  levelCount: 3 },
    { id: 11, order: 11, e: '🟰', n: 'Denklem Çözme',              locked: true,  levelCount: 3 },
    { id: 12, order: 12, e: '🔢', n: 'Sayı Problemleri',           locked: true,  levelCount: 3 },
    { id: 13, order: 13, e: '🏃', n: 'Hareket Problemleri',        locked: true,  levelCount: 3 },
    { id: 14, order: 14, e: '👷', n: 'İşçi - Havuz Problemleri',   locked: true,  levelCount: 3 },
    { id: 15, order: 15, e: '🧪', n: 'Karışım - Kâr/Zarar',        locked: true,  levelCount: 3 },
    { id: 16, order: 16, e: '🔴', n: 'Kümeler',                    locked: true,  levelCount: 3 },
    { id: 17, order: 17, e: '🎲', n: 'Olasılık',                   locked: true,  levelCount: 3 },
    { id: 18, order: 18, e: '🧠', n: 'Sayısal Mantık',             locked: true,  levelCount: 3 },
    { id: 19, order: 19, e: '📐', n: 'Geometri (Temel)',           locked: true,  levelCount: 3 },
    { id: 20, order: 20, e: '📊', n: 'Veri - Grafik - Tablo',      locked: true,  levelCount: 3 }
];

// ========== LEVEL AYARLARI ==========
const LEVELS = {
    0: { name: '🌱 Başlangıç', questionCount: 8, minCorrect: 6, icon: '🌱' },
    1: { name: '📘 Orta',       questionCount: 10, minCorrect: 8, icon: '📘' },
    2: { name: '🎯 İleri',      questionCount: 12, minCorrect: 10, icon: '🎯' }
};

// ========== YARDIMCI FONKSİYONLAR ==========
function getTopicById(id) {
    return TOPICS.find(t => t.id === id);
}

function getLevelConfig(levelId) {
    return LEVELS[levelId];
}

function getNextLevel(levelId) {
    const levels = [0, 1, 2];
    const idx = levels.indexOf(levelId);
    return idx < levels.length - 1 ? levels[idx + 1] : null;
}
