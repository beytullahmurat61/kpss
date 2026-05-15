// ============================================
// app.js içinde LEVELS kullanan yerde değişiklik
// ============================================

// ÖNCEKİ KOD:
function getNextLevel(levelName) {
    if (typeof LEVELS === 'undefined') return null;
    const levels = Object.keys(LEVELS);
    const idx = levels.indexOf(levelName);
    return idx < levels.length - 1 ? levels[idx + 1] : null;
}

// YENİ KOD (aynı çalışır çünkü artık '0','1','2'... kullanılıyor):
function getNextLevel(levelId) {
    if (typeof LEVELS === 'undefined') return null;
    const levels = Object.keys(LEVELS);
    const idx = levels.indexOf(levelId);
    return idx < levels.length - 1 ? levels[idx + 1] : null;
}
