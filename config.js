// ============================================
// config.js - KPSS / TYT / DGS MATEMATİK
// Yeni konu yapısı: 45 konu
// Versiyon: 4.0
// ============================================

const STATE_VERSION = 4;

const LEVELS = {
    'KOLAY': { name: 'Kolay', icon: '🟢', questionCount: 10, minCorrect: 8 },
    'ORTA': { name: 'Orta', icon: '🟡', questionCount: 12, minCorrect: 10 },
    'ZOR': { name: 'Zor', icon: '🔴', questionCount: 8, minCorrect: 6 }
};

const TOPICS = [
    // ========== BÖLÜM 1: SAYI MANTIĞI (1-7) ==========
    { id: 1, order: 1, p: '📊 SAYI MANTIĞI', n: 'Sayı Karşılaştırma & Sıralama', e: '🔢', kpss: '1-2', dgs: '1-2' },
    { id: 2, order: 2, p: '📊 SAYI MANTIĞI', n: 'Sayı Doğrusu & Mutlak Değer', e: '📏', kpss: '1', dgs: '1' },
    { id: 3, order: 3, p: '📊 SAYI MANTIĞI', n: 'Basamak & Rakam Değeri', e: '🔟', kpss: '1', dgs: '1' },
    { id: 4, order: 4, p: '📊 SAYI MANTIĞI', n: 'Ardışık & Tek/Çift Sayılar', e: '🔢', kpss: '1', dgs: '1' },
    { id: 5, order: 5, p: '📊 SAYI MANTIĞI', n: 'Bölünebilme Kuralları', e: '➗', kpss: '1-2', dgs: '1' },
    { id: 6, order: 6, p: '📊 SAYI MANTIĞI', n: 'Sayı Örüntüsü & Kural Bulma', e: '📊', kpss: '1', dgs: '1' },
    { id: 7, order: 7, p: '📊 SAYI MANTIĞI', n: 'Sayısal Mantık & Kodlama', e: '🧩', kpss: '1', dgs: '2' },

    // ========== BÖLÜM 2: DÖRT İŞLEM (8-12) ==========
    { id: 8, order: 8, p: '🧮 DÖRT İŞLEM', n: 'Temel İşlemler (+, -, ×, ÷)', e: '➕', kpss: '1-2', dgs: '1-2' },
    { id: 9, order: 9, p: '🧮 DÖRT İŞLEM', n: 'İşlem Önceliği & Parantez', e: '📐', kpss: '1', dgs: '1' },
    { id: 10, order: 10, p: '🧮 DÖRT İŞLEM', n: 'Eksik Sayı & Ters İşlem', e: '❓', kpss: '1', dgs: '1' },
    { id: 11, order: 11, p: '🧮 DÖRT İŞLEM', n: 'Negatif & Ondalık İşlemler', e: '➖', kpss: '1', dgs: '1' },
    { id: 12, order: 12, p: '🧮 DÖRT İŞLEM', n: 'Bölme Kalan & Tam Bölme', e: '➗', kpss: '1', dgs: '1' },

    // ========== BÖLÜM 3: SAYI TEORİSİ (13-17) ==========
    { id: 13, order: 13, p: '🔐 SAYI TEORİSİ', n: 'Asal Sayılar & Çarpanlar', e: '🔐', kpss: '1-2', dgs: '2' },
    { id: 14, order: 14, p: '🔐 SAYI TEORİSİ', n: 'EBOB & EKOK', e: '🔗', kpss: '1-2', dgs: '2' },
    { id: 15, order: 15, p: '🔐 SAYI TEORİSİ', n: 'Faktöriyel & Mod Alma', e: '!', kpss: '1', dgs: '1' },
    { id: 16, order: 16, p: '🔐 SAYI TEORİSİ', n: 'Kalan Problemleri', e: '🔄', kpss: '1', dgs: '1' },
    { id: 17, order: 17, p: '🔐 SAYI TEORİSİ', n: 'Üslü Sayılar', e: '⬆️', kpss: '1-2', dgs: '2' },

    // ========== BÖLÜM 4: KESİRLER & YÜZDE & ORAN (18-22) ==========
    { id: 18, order: 18, p: '🍕 KESİRLER', n: 'Kesir İşlemleri', e: '🍕', kpss: '2', dgs: '2' },
    { id: 19, order: 19, p: '🍕 KESİRLER', n: 'Kesir Karşılaştırma & Sıralama', e: '📊', kpss: '1', dgs: '1' },
    { id: 20, order: 20, p: '💰 YÜZDE', n: 'Yüzde Hesapları', e: '%', kpss: '2', dgs: '2' },
    { id: 21, order: 21, p: '💰 YÜZDE', n: 'Kar-Zarar & İndirim', e: '💰', kpss: '2', dgs: '2' },
    { id: 22, order: 22, p: '📏 ORAN', n: 'Oran & Orantı', e: '📏', kpss: '2', dgs: '2' },

    // ========== BÖLÜM 5: CEBİR (23-27) ==========
    { id: 23, order: 23, p: '⚖️ CEBİR', n: 'Denklem Çözme (1. Derece)', e: '⚖️', kpss: '2', dgs: '2' },
    { id: 24, order: 24, p: '⚖️ CEBİR', n: 'Eşitsizlikler', e: '📊', kpss: '1', dgs: '2' },
    { id: 25, order: 25, p: '⚖️ CEBİR', n: 'Çarpanlara Ayırma', e: '🧩', kpss: '1', dgs: '2' },
    { id: 26, order: 26, p: '⚖️ CEBİR', n: 'Fonksiyonlar', e: '𝑓', kpss: 'YOK', dgs: '3' },
    { id: 27, order: 27, p: '⚖️ CEBİR', n: '2. Derece Denklemler', e: '📉', kpss: 'YOK', dgs: '2' },

    // ========== BÖLÜM 6: PROBLEMLER (28-35) ==========
    { id: 28, order: 28, p: '📝 PROBLEMLER', n: 'Sayı & Kesir Problemleri', e: '🔢', kpss: '3', dgs: '3' },
    { id: 29, order: 29, p: '📝 PROBLEMLER', n: 'Yaş Problemleri', e: '🎂', kpss: '1', dgs: '1' },
    { id: 30, order: 30, p: '📝 PROBLEMLER', n: 'Hız & Hareket Problemleri', e: '🚗', kpss: '2', dgs: '2' },
    { id: 31, order: 31, p: '📝 PROBLEMLER', n: 'İşçi & Havuz Problemleri', e: '🔧', kpss: '1', dgs: '1' },
    { id: 32, order: 32, p: '📝 PROBLEMLER', n: 'Karışım Problemleri', e: '🧪', kpss: '1', dgs: '1' },
    { id: 33, order: 33, p: '📝 PROBLEMLER', n: 'Yüzde & Kâr-Zarar Problemleri', e: '💰', kpss: '2', dgs: '2' },
    { id: 34, order: 34, p: '📝 PROBLEMLER', n: 'Mantık & Tablo Problemleri', e: '🧠', kpss: '1', dgs: '2' },
    { id: 35, order: 35, p: '📝 PROBLEMLER', n: 'Optimizasyon & En Az/En Çok', e: '🎯', kpss: '1', dgs: '1' },

    // ========== BÖLÜM 7: GRAFİK & VERİ (36-37) ==========
    { id: 36, order: 36, p: '📊 GRAFİK', n: 'Grafik Okuma & Yorumlama', e: '📊', kpss: '1', dgs: '2' },
    { id: 37, order: 37, p: '📊 GRAFİK', n: 'Tablo & Veri Analizi', e: '📋', kpss: '1', dgs: '1' },

    // ========== BÖLÜM 8: TEMEL GEOMETRİ (38) ==========
    { id: 38, order: 38, p: '📐 GEOMETRİ', n: 'Nokta, Doğru, Açı', e: '📐', kpss: '1', dgs: '1' },

    // ========== BÖLÜM 9: ÜÇGENLER (39) ==========
    { id: 39, order: 39, p: '📐 GEOMETRİ', n: 'Üçgenler', e: '▲', kpss: '2-3', dgs: '2-3' },

    // ========== BÖLÜM 10: DÖRTGENLER (40) ==========
    { id: 40, order: 40, p: '📐 GEOMETRİ', n: 'Dörtgenler', e: '◼️', kpss: '2', dgs: '2' },

    // ========== BÖLÜM 11: ÇEMBER & DAİRE (41) ==========
    { id: 41, order: 41, p: '📐 GEOMETRİ', n: 'Çember & Daire', e: '⚪', kpss: '1-2', dgs: '1-2' },

    // ========== BÖLÜM 12: ANALİTİK GEOMETRİ (42) ==========
    { id: 42, order: 42, p: '📐 GEOMETRİ', n: 'Analitik Geometri', e: '📈', kpss: 'YOK', dgs: '2-3' },

    // ========== BÖLÜM 13: ALAN & HACİM (43) ==========
    { id: 43, order: 43, p: '📐 GEOMETRİ', n: 'Alan & Hacim Hesapları', e: '🧮', kpss: '1', dgs: '1-2' },

    // ========== BÖLÜM 14: GEOMETRİ PROBLEMLERİ (44) ==========
    { id: 44, order: 44, p: '📐 GEOMETRİ', n: 'Geometri Problemleri', e: '🎯', kpss: '1-2', dgs: '2' },

    // ========== BÖLÜM 15: OLASILIK & PERMÜTASYON (45) ==========
    { id: 45, order: 45, p: '🎲 OLASILIK', n: 'Olasılık & Permütasyon', e: '🎲', kpss: '1', dgs: '2' }
];

const CONSTANTS = {
    TOTAL_TOPICS: 45,
    QUESTIONS_PER_TOPIC: 30,
    QUESTION_BANK_SIZE: 300,
    EXAM_SETS: 5,
    EXAM_QUESTIONS: 20,
    EXAM_DURATION: 20,
    API_DAILY_LIMIT: 20,
    MAX_STREAK_CELEBRATE: [5, 10, 15, 20],
    STORAGE_KEY: 'kpss_mat_v4',
    API_KEY_STORAGE: 'kpss_mat_api_key'
};

const EXAM_SEEDS = [42, 71, 13, 88, 56];

function getTopicById(id) { return TOPICS.find(t => t.id === id); }
function getNextTopic(currentId) {
    const current = getTopicById(currentId);
    return current ? TOPICS.find(t => t.order === current.order + 1) || null : null;
}
function getNextLevel(levelName) {
    const levels = Object.keys(LEVELS);
    const idx = levels.indexOf(levelName);
    return idx < levels.length - 1 ? levels[idx + 1] : null;
}

console.log('✅ config.js (v4) yüklendi -', TOPICS.length, 'konu');
