// ============================================
// KPSS MATEMATİK KONFİGÜRASYON DOSYASI
// 20 Konu | 3 Seviye | Konu Özetleri & Formüller
// Tüm yardımcı fonksiyonlar burada
// ============================================

// ========== KONU LİSTESİ ==========
const TOPICS = [
    { id: 1, order: 1, e: '➕', n: 'Toplama İşlemi', locked: false, levelCount: 3 },
    { id: 2, order: 2, e: '➖', n: 'Çıkarma İşlemi', locked: true, levelCount: 3 },
    { id: 3, order: 3, e: '✖️', n: 'Çarpma İşlemi', locked: true, levelCount: 3 },
    { id: 4, order: 4, e: '➗', n: 'Bölme İşlemi', locked: true, levelCount: 3 },
    { id: 5, order: 5, e: '½', n: 'Kesirler', locked: true, levelCount: 3 },
    { id: 6, order: 6, e: '🔟', n: 'Ondalık Sayılar', locked: true, levelCount: 3 },
    { id: 7, order: 7, e: '²', n: 'Üslü Sayılar', locked: true, levelCount: 3 },
    { id: 8, order: 8, e: '√', n: 'Köklü Sayılar', locked: true, levelCount: 3 },
    { id: 9, order: 9, e: '⚖️', n: 'Oran - Orantı', locked: true, levelCount: 3 },
    { id: 10, order: 10, e: '💯', n: 'Yüzde Hesapları', locked: true, levelCount: 3 },
    { id: 11, order: 11, e: '🟰', n: 'Denklem Çözme', locked: true, levelCount: 3 },
    { id: 12, order: 12, e: '🔢', n: 'Sayı Problemleri', locked: true, levelCount: 3 },
    { id: 13, order: 13, e: '🏃', n: 'Hareket Problemleri', locked: true, levelCount: 3 },
    { id: 14, order: 14, e: '👷', n: 'İşçi - Havuz Problemleri', locked: true, levelCount: 3 },
    { id: 15, order: 15, e: '🧪', n: 'Karışım - Kâr/Zarar', locked: true, levelCount: 3 },
    { id: 16, order: 16, e: '🔴', n: 'Kümeler', locked: true, levelCount: 3 },
    { id: 17, order: 17, e: '🎲', n: 'Olasılık', locked: true, levelCount: 3 },
    { id: 18, order: 18, e: '🧠', n: 'Sayısal Mantık', locked: true, levelCount: 3 },
    { id: 19, order: 19, e: '📊', n: 'Veri - Grafik - Tablo', locked: true, levelCount: 3 },
    { id: 20, order: 20, e: '📐', n: 'Geometri (Temel)', locked: true, levelCount: 3 }
];

// ========== LEVEL AYARLARI ==========
const LEVELS = {
    0: { name: '🌱 Başlangıç', questionCount: 8, minCorrect: 6, icon: '🌱' },
    1: { name: '📘 Orta', questionCount: 10, minCorrect: 8, icon: '📘' },
    2: { name: '🎯 İleri', questionCount: 12, minCorrect: 10, icon: '🎯' }
};

// ========== KONU ÖZETLERİ VE FORMÜLLER ==========
const TOPIC_SUMMARIES = {
    1: {
        title: 'Toplama İşlemi',
        summary: 'Toplama, sayıları bir araya getirme işlemidir. Toplanan sayılara "terim", sonuca "toplam" denir.',
        formulas: [
            'Toplam = 1. Terim + 2. Terim + ...',
            'a + b = b + a (Değişme Özelliği)',
            '(a + b) + c = a + (b + c) (Birleşme Özelliği)',
            'Ardışık sayıların toplamı = n.(n+1)/2'
        ]
    },
    2: {
        title: 'Çıkarma İşlemi',
        summary: 'Çıkarma, bir sayıdan başka bir sayıyı eksiltme işlemidir. Eksilen - çıkan = fark.',
        formulas: [
            'Fark = Eksilen - Çıkan',
            'Eksilen = Çıkan + Fark',
            'Çıkan = Eksilen - Fark'
        ]
    },
    3: {
        title: 'Çarpma İşlemi',
        summary: 'Çarpma, tekrarlı toplamanın kısa yoludur. Çarpılan sayılara "çarpan", sonuca "çarpım" denir.',
        formulas: [
            'Çarpım = 1. Çarpan × 2. Çarpan',
            'a × b = b × a (Değişme Özelliği)',
            '(a × b) × c = a × (b × c) (Birleşme Özelliği)'
        ]
    },
    4: {
        title: 'Bölme İşlemi',
        summary: 'Bölme, bir bütünü eş parçalara ayırma işlemidir. Bölünen = Bölen × Bölüm + Kalan.',
        formulas: [
            'Bölünen = Bölen × Bölüm + Kalan',
            'Kalan < Bölen (her zaman)',
            'Kalan = 0 ise tam bölünür'
        ]
    },
    5: {
        title: 'Kesirler',
        summary: 'Kesir, bir bütünün eş parçalarını gösterir. a/b şeklinde yazılır, a=pay, b=payda.',
        formulas: [
            'a/b + c/b = (a+c)/b',
            'a/b × c/d = (a×c)/(b×d)',
            'a/b ÷ c/d = a/b × d/c',
            'Basit kesir: pay < payda'
        ]
    },
    6: {
        title: 'Ondalık Sayılar',
        summary: 'Ondalık sayılar, kesirlerin virgülle gösterilmiş halidir. Örn: 0,5 = 5/10.',
        formulas: [
            'Ondalık × 10 = virgül 1 basamak sağa',
            'Ondalık ÷ 10 = virgül 1 basamak sola',
            'Toplama/çıkarmada virgüller alt alta gelmeli'
        ]
    },
    7: {
        title: 'Üslü Sayılar',
        summary: 'Bir sayının kendisiyle tekrarlı çarpımını gösterir. aⁿ = a × a × ... (n tane).',
        formulas: [
            'aᵐ × aⁿ = aᵐ⁺ⁿ',
            'aᵐ ÷ aⁿ = aᵐ⁻ⁿ',
            '(aᵐ)ⁿ = aᵐˣⁿ',
            'a⁻ⁿ = 1/aⁿ',
            'a⁰ = 1 (a≠0)'
        ]
    },
    8: {
        title: 'Köklü Sayılar',
        summary: 'Karekök, bir sayının hangi sayının karesi olduğunu bulma işlemidir.',
        formulas: [
            '√a × √b = √(a×b)',
            '√a / √b = √(a/b)',
            'a√b + c√b = (a+c)√b',
            '(√a)² = a'
        ]
    },
    9: {
        title: 'Oran - Orantı',
        summary: 'İki çokluğun bölünerek karşılaştırılmasına oran denir. İki oranın eşitliğine orantı denir.',
        formulas: [
            'a/b = c/d → a×d = b×c',
            'Doğru orantı: a/b = sabit',
            'Ters orantı: a×b = sabit'
        ]
    },
    10: {
        title: 'Yüzde Hesapları',
        summary: 'Yüzde, bir bütünün 100 eşit parçasından kaçını aldığını gösterir. % sembolü ile gösterilir.',
        formulas: [
            'A sayısının %P\'si = A × P/100',
            'Zamlı fiyat = İlk fiyat × (100+Z)/100',
            'İndirimli fiyat = İlk fiyat × (100-İ)/100'
        ]
    },
    11: {
        title: 'Denklem Çözme',
        summary: 'Bilinmeyen içeren eşitliklere denklem denir. Amacımız bilinmeyeni yalnız bırakmaktır.',
        formulas: [
            'x + a = b → x = b - a',
            'x - a = b → x = b + a',
            'a × x = b → x = b / a',
            'x / a = b → x = a × b'
        ]
    },
    12: {
        title: 'Sayı Problemleri',
        summary: 'Günlük hayattaki durumları matematiksel denklemlere dönüştürerek çözeriz.',
        formulas: [
            'İki sayı problemi: a + b = T, a - b = F → a = (T+F)/2',
            'Ardışık sayılar: n, n+1, n+2, ...',
            'Yaş problemleri: geçen yıl herkese aynı eklenir/çıkarılır'
        ]
    },
    13: {
        title: 'Hareket Problemleri',
        summary: 'Yol, hız ve zaman arasındaki ilişkiyi inceler.',
        formulas: [
            'Yol = Hız × Zaman',
            'Hız = Yol / Zaman',
            'Zaman = Yol / Hız',
            'Ortalama Hız = Toplam Yol / Toplam Zaman'
        ]
    },
    14: {
        title: 'İşçi - Havuz Problemleri',
        summary: 'İşçi problemleri, bir işin kaç günde biteceğini; havuz problemleri, havuzun kaç saatte dolacağını hesaplar.',
        formulas: [
            '1/A + 1/B = 1/T (birlikte bitirme süresi)',
            'İş = İşçi sayısı × Gün sayısı × Güç',
            'Havuz: Dolduran (+), Boşaltan (-) alınır'
        ]
    },
    15: {
        title: 'Karışım Problemleri',
        summary: 'Farklı oranlardaki maddelerin karıştırılmasıyla oluşan yeni karışımın oranını hesaplar.',
        formulas: [
            'Karışım oranı = (Madde miktarı / Toplam miktar) × 100',
            'Tuz oranı = (Tuz / Toplam) × 100',
            'Karıştırma: M1×O1 + M2×O2 = (M1+M2)×Oson'
        ]
    },
    16: {
        title: 'Kümeler',
        summary: 'İyi tanımlanmış nesneler topluluğuna küme denir. Kümeler Venn şeması ile gösterilir.',
        formulas: [
            's(A∪B) = s(A) + s(B) - s(A∩B)',
            'Alt küme sayısı = 2ⁿ (n = eleman sayısı)',
            'Öz alt küme sayısı = 2ⁿ - 1'
        ]
    },
    17: {
        title: 'Olasılık',
        summary: 'Bir olayın olma şansının sayısal değerine olasılık denir. 0 ile 1 arasında değer alır.',
        formulas: [
            'Olasılık = İstenen durum / Tüm durumlar',
            'A ve B bağımsız: P(A∩B) = P(A) × P(B)',
            'P(A∪B) = P(A) + P(B) - P(A∩B)'
        ]
    },
    18: {
        title: 'Sayısal Mantık',
        summary: 'Sayısal mantık, verilen sayı dizilerindeki kuralı bulup devam ettirmeyi içerir.',
        formulas: [
            'Ardışık fark: her sayı bir öncekinden sabit farkla artar',
            'Fibonacci: her sayı kendinden önceki iki sayının toplamıdır',
            'Kare sayılar: 1, 4, 9, 16, 25, ...'
        ]
    },
    19: {
        title: 'Veri, Grafik ve Tablo',
        summary: 'Verilerin görsel olarak sunulmasıdır. Sütun, daire ve çizgi grafikleri en yaygın olanlarıdır.',
        formulas: [
            'Ortalama = Sayıların toplamı / Sayı adedi',
            'Açıklık (Ranj) = En büyük - En küçük',
            'Medyan: sıralı verinin ortasındaki değer',
            'Mod (Tepe değer): en çok tekrar eden değer'
        ]
    },
    20: {
        title: 'Geometri (Temel)',
        summary: 'Temel geometrik şekillerin alan, çevre ve açı hesaplamaları.',
        formulas: [
            'Üçgenin iç açıları toplamı = 180°',
            'Dikdörtgen alan = a × b',
            'Dikdörtgen çevre = 2(a+b)',
            'Karenin alanı = a²',
            'Karenin çevresi = 4a',
            'Dairenin alanı = πr²',
            'Dairenin çevresi = 2πr',
            'Pisagor: a² + b² = c²'
        ]
    }
};

// ========== TEMEL YARDIMCI FONKSİYONLAR ==========
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

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(arr) {
    const s = [...arr];
    for (let i = s.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
}

// ========== MATEMATİKSEL FONKSİYONLAR ==========
function ebob(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function ekok(a, b) {
    return Math.abs(a * b) / ebob(a, b);
}

function sadelestir(pay, payda) {
    if (pay === 0) return '0';
    const ebobDegeri = ebob(Math.abs(pay), Math.abs(payda));
    const sadePay = pay / ebobDegeri;
    const sadePayda = payda / ebobDegeri;
    if (sadePayda === 1) return `${sadePay}`;
    return `${sadePay}/${sadePayda}`;
}

function katsayiCikar(sayi) {
    let disari = 1;
    let iceride = sayi;
    for (let i = 2; i * i <= sayi; i++) {
        while (iceride % (i * i) === 0) {
            disari *= i;
            iceride /= (i * i);
        }
    }
    if (disari === 1 && iceride === 1) return '1';
    if (disari === 1) return `√${iceride}`;
    if (iceride === 1) return `${disari}`;
    return `${disari}√${iceride}`;
}

function eslenikYap(a, b) {
    return `(√${a}-√${b})/(${a}-${b})`;
}

function medyan(...sayilar) {
    const siralanmis = [...sayilar].sort((a, b) => a - b);
    const orta = Math.floor(siralanmis.length / 2);
    if (siralanmis.length % 2 === 0) {
        return (siralanmis[orta - 1] + siralanmis[orta]) / 2;
    }
    return siralanmis[orta];
}

function mod(...sayilar) {
    const frekans = {};
    sayilar.forEach(s => frekans[s] = (frekans[s] || 0) + 1);
    let maxFrekans = 0;
    let modDegeri = null;
    for (const [deger, tekrar] of Object.entries(frekans)) {
        if (tekrar > maxFrekans) {
            maxFrekans = tekrar;
            modDegeri = Number(deger);
        }
    }
    if (maxFrekans === 1) return Math.min(...sayilar);
    return modDegeri;
}

function maxArtisAyi(ocak, subat, mart, nisan) {
    const artis1 = subat - ocak;
    const artis2 = mart - subat;
    const artis3 = nisan - mart;
    const maxArtis = Math.max(artis1, artis2, artis3);
    if (maxArtis === artis1) return "Şubat";
    if (maxArtis === artis2) return "Mart";
    return "Nisan";
}

function maxKisi(a, b, c) {
    if (a >= b && a >= c) return "Ali";
    if (b >= a && b >= c) return "Veli";
    return "Can";
}

// ========== SORU DEĞİŞKEN ÜRETME ==========
function generateVariables(varRanges) {
    if (!varRanges || Object.keys(varRanges).length === 0) return {};
    const vars = {};
    for (let [key, range] of Object.entries(varRanges)) {
        if (key === 'kosul') continue;
        if (Array.isArray(range)) {
            if (range.length === 2 && typeof range[0] === 'number' && typeof range[1] === 'number') {
                vars[key] = randomInt(range[0], range[1]);
            } else {
                vars[key] = range[Math.floor(Math.random() * range.length)];
            }
        } else if (typeof range === 'string') {
            vars[key] = range;
        } else {
            vars[key] = range;
        }
    }
    return vars;
}

function fillTemplate(text, vars) {
    if (!text) return '';
    let result = String(text);
    for (let [key, val] of Object.entries(vars)) {
        result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), val);
    }
    return result;
}

// ========== KONU ÖZETİ ALMA ==========
function getTopicSummary(topicId) {
    return TOPIC_SUMMARIES[topicId] || null;
}

console.log('✅ Config dosyası başarıyla yüklendi.');
console.log(`📊 Toplam konu sayısı: ${TOPICS.length}`);
console.log('📝 Konu özetleri ve formüller hazır.');
