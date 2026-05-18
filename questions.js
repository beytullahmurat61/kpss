// ============================================
// KPSS 2026 MATEMATİK SORU BANKASI (DÜZENLENMİŞ)
// 20 Konu | 3 Seviye (0: Başlangıç, 1: Orta, 2: İleri)
// Tüm sorular KPSS mantığına uygun hale getirilmiştir.
// ============================================

const SORU_BANKASI = {

    // ========== 1. KONU: TOPLAMA ==========
    1: {
        0: [
            { id: "1_0_001", s: "Bir sayının {a} fazlası {b} ise bu sayı kaçtır?", c: "{b}-{a}", v: { a: [5, 25], b: [15, 70] }, z: "kolay", alt: "verilmeyen_bulma", konu: 1, level: 0 },
            { id: "1_0_002", s: "Hangi sayıya {a} eklersek {b} olur?", c: "{b}-{a}", v: { a: [5, 25], b: [15, 70] }, z: "kolay", alt: "verilmeyen_bulma", konu: 1, level: 0 },
            { id: "1_0_003", s: "Ahmet {a} yaşında, Mehmet Ahmet'ten {b} yaş büyüktür. İkisinin yaşları toplamı kaçtır?", c: "{a}+{a}+{b}", v: { a: [8, 25], b: [2, 10] }, z: "kolay", alt: "yas_problemi", konu: 1, level: 0 },
            { id: "1_0_004", s: "Bir sınıfta {a} kız, erkekler kızlardan {b} fazladır. Sınıf mevcudu kaçtır?", c: "{a}+{a}+{b}", v: { a: [10, 25], b: [3, 12] }, z: "kolay", alt: "sinif_problemi", konu: 1, level: 0 },
            { id: "1_0_005", s: "Bir manav {a} kg elma, {b} kg armut satmıştır. Toplam kaç kg meyve satmıştır?", c: "{a}+{b}", v: { a: [10, 50], b: [10, 50] }, z: "kolay", alt: "sozel_problem", konu: 1, level: 0 },
            { id: "1_0_006", s: "Ardışık iki sayının toplamı {s} ise küçük sayı kaçtır?", c: "({s}-1)/2", v: { s: [5, 99, 'tek'] }, z: "orta", alt: "ardisik", konu: 1, level: 0 },
            { id: "1_0_007", s: "Bir otobüste {a} yolcu vardı. Durakta {b} kişi bindi. Otobüste kaç yolcu oldu?", c: "{a}+{b}", v: { a: [20, 60], b: [3, 20] }, z: "kolay", alt: "sozel_problem", konu: 1, level: 0 }
        ],
        1: [
            { id: "1_1_001", s: "Bir tabloda Ocak ayı satışı {a} bin TL, Şubat ayı satışı {b} bin TL'dir. İki aylık toplam satış kaç bin TL'dir? (Sadece sayıyı yazın)", c: "{a}+{b}", v: { a: [50, 300], b: [50, 300] }, z: "orta", alt: "tablo", konu: 1, level: 1 },
            { id: "1_1_002", s: "Ardışık üç çift sayının toplamı 18 ise ortanca sayı kaçtır?", c: "6", v: {}, z: "orta", alt: "ardisik", konu: 1, level: 1 },
            { id: "1_1_003", s: "Ardışık üç çift sayının toplamı 24 ise ortanca sayı kaçtır?", c: "8", v: {}, z: "orta", alt: "ardisik", konu: 1, level: 1 },
            { id: "1_1_004", s: "Bir sayının 7 fazlası ile 3 eksiğinin toplamı 40'tır. Bu sayı kaçtır?", c: "(40-7+3)/2", v: {}, z: "orta", alt: "denklem_kurma", konu: 1, level: 1 },
            { id: "1_1_005", s: "Ali {a}, Veli {b} yaşındadır. {c} yıl sonra yaşları toplamı kaç olur?", c: "{a}+{b}+2*{c}", v: { a: [10, 30], b: [8, 25], c: [2, 8] }, z: "orta", alt: "yas_problemi", konu: 1, level: 1 },
            { id: "1_1_006", s: "Bir mağazada tanesi {a} TL olan üründen {b} tane alınırsa kaç TL ödenir?", c: "{a}*{b}", v: { a: [10, 50], b: [2, 5] }, z: "orta", alt: "carpimli_toplam", konu: 1, level: 1 }
        ],
        2: [
            { id: "1_2_001", s: "İki sayının toplamı {s}, farkı {f} ise büyük sayı kaçtır?", c: "({s}+{f})/2", v: { s: [30, 100], f: [4, 20] }, z: "zor", alt: "sayi_problemi", konu: 1, level: 2 },
            { id: "1_2_002", s: "Toplamları {s} olan iki sayıdan biri diğerinin {k} katı ise küçük sayı kaçtır?", c: "{s}/({k}+1)", v: { k: [2, 5], s: [6, 60] }, z: "zor", alt: "sayi_problemi", konu: 1, level: 2 },
            { id: "1_2_003", s: "Bir sayının 2 katı ile 3 katının toplamı {t} ise bu sayı kaçtır? (t 5'in katıdır)", c: "{t}/5", v: { t: [15, 100, '5kati'] }, z: "zor", alt: "sayi_problemi", konu: 1, level: 2 },
            { id: "1_2_004", s: "{a} kişilik bir grupta herkes birbiriyle tokalaşırsa toplam tokalaşma sayısı kaç olur?", c: "{a}*({a}-1)/2", v: { a: [5, 15] }, z: "zor", alt: "kombinasyon_temeli", konu: 1, level: 2 },
            { id: "1_2_005", s: "Bir sinema salonunda {a} sıra ve her sırada {b} koltuk var. {c} koltuk boş ise dolu koltuk sayısı kaçtır?", c: "{a}*{b}-{c}", v: { a: [5, 15], b: [10, 25], c: [10, 80] }, z: "zor", alt: "tablo", konu: 1, level: 2 },
            { id: "1_2_006", s: "Bir otobüs {v1} km/sa hızla {t1} saat, {v2} km/sa hızla {t2} saat gidiyor. Toplam yol kaç km'dir?", c: "{v1}*{t1}+{v2}*{t2}", v: { v1: [60, 100], t1: [1, 3], v2: [40, 80], t2: [1, 3] }, z: "zor", alt: "hareket", konu: 1, level: 2 },
            { id: "1_2_007", s: "Ardışık üç sayının toplamı 30 ise en büyük sayı kaçtır?", c: "11", v: {}, z: "zor", alt: "ardisik", konu: 1, level: 2 }
        ]
    },

    // ========== 2. KONU: ÇIKARMA ==========
    2: {
        0: [
            { id: "2_0_001", s: "Cebimde {a} TL vardı. {b} TL harcadım. Geriye kaç TL kaldı?", c: "{a}-{b}", v: { a: [30, 150], b: [5, 25] }, z: "kolay", alt: "problem_para", konu: 2, level: 0 },
            { id: "2_0_002", s: "Bir tabakta {a} kurabiye vardı. {b} tanesi yenildi. Geriye kaç kurabiye kaldı?", c: "{a}-{b}", v: { a: [20, 80], b: [3, 15] }, z: "kolay", alt: "problem_gunluk", konu: 2, level: 0 },
            { id: "2_0_003", s: "Bir sayının {a} eksiği {b} ise bu sayı kaçtır?", c: "{a}+{b}", v: { a: [5, 30], b: [10, 60] }, z: "kolay", alt: "verilmeyen_eksilen", konu: 2, level: 0 },
            { id: "2_0_004", s: "Hangi sayıdan {a} çıkarırsak {b} kalır?", c: "{a}+{b}", v: { a: [5, 30], b: [10, 60] }, z: "kolay", alt: "verilmeyen_eksilen", konu: 2, level: 0 },
            { id: "2_0_005", s: "{a} sayısı {b} sayısından kaç fazladır?", c: "{a}-{b}", v: { a: [30, 100], b: [10, 25] }, z: "kolay", alt: "karsilastirma", konu: 2, level: 0 },
            { id: "2_0_006", s: "{a} sayısı {b} sayısından kaç eksiktir?", c: "{b}-{a}", v: { a: [10, 25], b: [30, 100] }, z: "kolay", alt: "karsilastirma", konu: 2, level: 0 },
            { id: "2_0_007", s: "Bir otobüste {a} yolcu vardı. Durakta {b} kişi indi. Otobüste kaç yolcu kaldı?", c: "{a}-{b}", v: { a: [25, 70], b: [3, 15] }, z: "kolay", alt: "problem_gunluk", konu: 2, level: 0 }
        ],
        1: [
            { id: "2_1_001", s: "{a} - 9 = ?", c: "{a}-9", v: { a: [20, 150] }, z: "orta", alt: "zihinden_9", konu: 2, level: 1 },
            { id: "2_1_002", s: "{a} - 19 = ?", c: "{a}-19", v: { a: [30, 200] }, z: "orta", alt: "zihinden_19", konu: 2, level: 1 },
            { id: "2_1_003", s: "{a} - 99 = ?", c: "{a}-99", v: { a: [150, 600] }, z: "orta", alt: "zihinden_99", konu: 2, level: 1 },
            { id: "2_1_004", s: "Bir sayının {a} fazlası {b} ise sayı kaçtır?", c: "{b}-{a}", v: { a: [5, 30], b: [20, 100] }, z: "orta", alt: "verilmeyen_bulma", konu: 2, level: 1 },
            { id: "2_1_005", s: "{a} sayfalık kitabın {b} sayfasını okudum. Geriye kaç sayfa kaldı?", c: "{a}-{b}", v: { a: [100, 400], b: [20, 80] }, z: "orta", alt: "problem_kitap", konu: 2, level: 1 },
            { id: "2_1_006", s: "Ali {a}, Veli {b} yaşındadır. Ali, Veli'den kaç yaş büyüktür?", c: "{a}-{b}", v: { a: [15, 40], b: [5, 12] }, z: "orta", alt: "problem_yas", konu: 2, level: 1 },
            { id: "2_1_007", s: "{a} km'lik yolun {b} km'sini gittim. Geriye kaç km kaldı?", c: "{a}-{b}", v: { a: [80, 500], b: [20, 100] }, z: "orta", alt: "problem_yol", konu: 2, level: 1 },
            { id: "2_1_008", s: "Bir depoda {a} litre su vardı. {b} litre kullanıldı. Geriye kaç litre kaldı?", c: "{a}-{b}", v: { a: [50, 300], b: [10, 80] }, z: "orta", alt: "problem_depo", konu: 2, level: 1 },
            { id: "2_1_009", s: "{a} TL'ye alınan ürün {b} TL'ye satılırsa zarar kaç TL'dir?", c: "{a}-{b}", v: { a: [50, 200], b: [20, 80] }, z: "orta", alt: "problem_zarar", konu: 2, level: 1 }
        ],
        2: [
            { id: "2_2_001", s: "{a} - 199 = ?", c: "{a}-199", v: { a: [250, 800] }, z: "zor", alt: "zihinden_199", konu: 2, level: 2 },
            { id: "2_2_002", s: "İki sayının farkı {f}, büyüğü küçüğünün {k} katı ise küçük sayı kaçtır?", c: "{f}/({k}-1)", v: { f: [6, 30], k: [2, 4] }, z: "zor", alt: "sayi_problemi", konu: 2, level: 2 },
            { id: "2_2_003", s: "Bir çiftlikte tavuk ve inek var. Tavukların sayısı ineklerin {k} katı kadar fazladır. İnek sayısı {b} ise toplam hayvan sayısı kaçtır?", c: "{b}*{k}+{b}", v: { b: [5, 20], k: [2, 4] }, z: "zor", alt: "yeni_nesil", konu: 2, level: 2 },
            { id: "2_2_004", s: "Bir baba {a}, çocuğu {b} yaşındadır. {k} yıl sonra babanın yaşı çocuğun yaşının {k} katı olur? (k pozitif tam sayı)", c: "({k}*{b}-{a})/(1-{k})", v: { a: [40, 60], b: [5, 15], k: [2, 3] }, z: "zor", alt: "problem_yas", konu: 2, level: 2 },
            { id: "2_2_005", s: "Bir sınıftaki öğrenciler sıralara {a} kişi oturursa {b} kişi ayakta kalıyor, {c} kişi oturursa {d} sıra boş kalıyor. Sınıf mevcudu kaçtır?", c: "({a}*{b}+{c}*{d})/({c}-{a})", v: { a: [2, 3], b: [1, 6], c: [4, 6], d: [1, 4] }, z: "zor", alt: "problem_sira", konu: 2, level: 2 },
            { id: "2_2_006", s: "Bir otobüs {v1} km/sa hızla {t1} saat gittikten sonra hızını {v2} km/sa düşürüp {t2} saat daha gidiyor. Toplam yol {y} km ise başlangıç hızı kaçtır?", c: "({y}-{v2}*{t2})/{t1}", v: { y: [300, 800], v2: [40, 70], t1: [2, 5], t2: [1, 3] }, z: "zor", alt: "problem_hareket", konu: 2, level: 2 },
            { id: "2_2_007", s: "Bir kumbarada {a} TL ve {b} TL'lik madeni paralar var. Toplam {t} TL olması için {b} TL'liklerden en az kaç tane olmalıdır?", c: "Math.ceil(({t}-{a}*Math.floor({t}/{a}))/{b})", v: { a: [1, 5], b: [5, 20], t: [50, 200] }, z: "zor", alt: "problem_mantik", konu: 2, level: 2 },
            { id: "2_2_008", s: "Bir sınavda her doğru {d} puan, her yanlış {y} puan götürüyor. {s} soruluk sınavda {n} net yapan bir öğrencinin doğru sayısı kaçtır?", c: "({n}+{s}*{y})/({d}+{y})", v: { d: [3, 5], y: [1, 2], s: [20, 50], n: [10, 40] }, z: "zor", alt: "problem_sinav", konu: 2, level: 2 }
        ]
    },

    // ========== 3. KONU: ÇARPMA ==========
    3: {
        0: [
            { id: "3_0_001", s: "Tanesi {a} TL olan kalemlerden {b} tane alan kaç TL öder?", c: "{a}*{b}", v: { a:[3,15], b:[2,10] }, z: "kolay", alt: "problem_para" },
            { id: "3_0_002", s: "Her gün {a} sayfa kitap okuyan biri {b} günde kaç sayfa okur?", c: "{a}*{b}", v: { a:[10,40], b:[3,10] }, z: "kolay", alt: "problem_gunluk" },
            { id: "3_0_003", s: "Bir kutuda {a} yumurta varsa {b} kutuda kaç yumurta olur?", c: "{a}*{b}", v: { a:[6,30], b:[2,8] }, z: "kolay", alt: "problem_carpma" },
            { id: "3_0_004", s: "Bir sınıfta {a} sıra ve her sırada {b} öğrenci varsa toplam öğrenci sayısı kaçtır?", c: "{a}*{b}", v: { a:[4,10], b:[2,5] }, z: "kolay", alt: "problem_gunluk" },
            { id: "3_0_005", s: "{a} sayısının {k} katı kaçtır?", c: "{a}*{k}", v: { a:[3,15], k:[2,5] }, z: "kolay", alt: "kat_alma" },
            { id: "3_0_006", s: "Hangi sayının {k} katı {s} eder?", c: "{s}/{k}", v: { k:[2,6], s:["{k}*2","{k}*20"] }, z: "kolay", alt: "verilmeyen_bulma" }
        ],
        1: [
            { id: "3_1_001", s: "{a} × 5 = ? (İpucu: 10 ile çarpıp 2'ye böl)", c: "{a}*5", v: { a:[2,30] }, z: "orta", alt: "zihinden_5" },
            { id: "3_1_002", s: "{a} × 9 = ? (İpucu: 10 ile çarpıp kendini çıkar)", c: "{a}*9", v: { a:[3,25] }, z: "orta", alt: "zihinden_9" },
            { id: "3_1_003", s: "{a} × 11 = ? (İpucu: 10 ile çarpıp kendini ekle)", c: "{a}*11", v: { a:[3,25] }, z: "orta", alt: "zihinden_11" },
            { id: "3_1_004", s: "{a} × 25 = ? (İpucu: 100 ile çarpıp 4'e böl)", c: "{a}*25", v: { a:[4,40] }, z: "orta", alt: "zihinden_25" },
            { id: "3_1_005", s: "{a} sayısının {k} katının {f} fazlası kaçtır?", c: "{a}*{k}+{f}", v: { a:[3,15], k:[2,5], f:[2,20] }, z: "orta", alt: "kat_alma" },
            { id: "3_1_006", s: "Bir sayının {k} katı {s} ise bu sayının {k2} katı kaçtır?", c: "({s}/{k})*{k2}", v: { k:[2,5], s:["{k}*3","{k}*30"], k2:[2,6] }, z: "orta", alt: "oranti" }
        ],
        2: [
            { id: "3_2_001", s: "{a} × 99 = ?", c: "{a}*99", v: { a:[5,50] }, z: "zor", alt: "zihinden_99" },
            { id: "3_2_002", s: "Bir sayının {k1} katı ile {k2} katının toplamı {s} ise bu sayı kaçtır?", c: "{s}/({k1}+{k2})", v: { k1:[2,4], k2:[3,5], s:["{k1}+{k2}*3"] }, z: "zor", alt: "verilmeyen_bulma" },
            { id: "3_2_003", s: "Tanesi {a} TL olan {b} ürün ve tanesi {c} TL olan {d} ürün alan toplam kaç TL öder?", c: "{a}*{b}+{c}*{d}", v: { a:[5,30], b:[1,5], c:[10,60], d:[1,5] }, z: "zor", alt: "problem_para" },
            { id: "3_2_004", s: "Bir sayıyı {a} ile çarpıp {b} ekleyince {c} oluyor. Bu sayı kaçtır?", c: "({c}-{b})/{a}", v: { a:[2,6], b:[3,15], c:["{a}*4+{b}","{a}*25+{b}"] }, z: "zor", alt: "denklem_kurma" },
            { id: "3_2_005", s: "{a} × {b} = {c} ise {a} × ({b}+2) kaçtır?", c: "{c}+2*{a}", v: { a:[3,12], b:[2,9], c:"{a}*{b}" }, z: "zor", alt: "mantik" }
        ]
    },

    // ========== 4. KONU: BÖLME ==========
    4: {
        0: [
            { id: "4_0_001", s: "{a} kişi, {b} TL'yi eşit paylaşırsa kişi başı kaç TL düşer?", c: "{b}/{a}", v: { a: [2, 8], b: [10, 400] }, z: "kolay", alt: "problem_paylasim", konu: 4, level: 0 },
            { id: "4_0_002", s: "{a} ceviz {b} çocuğa eşit paylaştırılırsa her çocuğa kaç ceviz düşer?", c: "{a}/{b}", v: { b: [2, 6], a: [4, 180] }, z: "kolay", alt: "problem_paylasim", konu: 4, level: 0 },
            { id: "4_0_003", s: "Bir sayının {k} katı {s} ise bu sayı kaçtır?", c: "{s}/{k}", v: { k: [2, 6], s: [6, 150] }, z: "kolay", alt: "verilmeyen_bulma", konu: 4, level: 0 },
            { id: "4_0_004", s: "Hangi sayıyı {a} ile bölersek {b} buluruz?", c: "{a}*{b}", v: { a: [2, 8], b: [3, 15] }, z: "kolay", alt: "verilmeyen_bulma", konu: 4, level: 0 },
            { id: "4_0_005", s: "{a} TL'ye alınan {b} ürünün tanesi kaç TL'dir?", c: "{a}/{b}", v: { b: [2, 8], a: [10, 800] }, z: "orta", alt: "problem_bolme", konu: 4, level: 0 }
        ],
        1: [
            { id: "4_1_001", s: "{a} ÷ 5 = ? (İpucu: 2 ile çarpıp 10'a böl)", c: "{a}/5", v: { a: [5, 100] }, z: "orta", alt: "zihinden_5", konu: 4, level: 1 },
            { id: "4_1_002", s: "{a} ÷ 25 = ? (İpucu: 4 ile çarpıp 100'e böl)", c: "{a}/25", v: { a: [25, 500] }, z: "orta", alt: "zihinden_25", konu: 4, level: 1 },
            { id: "4_1_003", s: "{a} ÷ 10 = ?", c: "{a}/10", v: { a: [10, 500] }, z: "orta", alt: "zihinden_10", konu: 4, level: 1 },
            { id: "4_1_004", s: "{a} kişiye {b} gün yetecek yemek, {c} kişiye kaç gün yeter?", c: "({a}*{b})/{c}", v: { a: [3, 10], b: [5, 20], c: [4, 15] }, z: "orta", alt: "problem_ters_oranti", konu: 4, level: 1 },
            { id: "4_1_005", s: "Bir bölme işleminde bölen {b}, bölüm {c} ise bölünen en az kaçtır?", c: "{b}*{c}", v: { b: [3, 9], c: [2, 15] }, z: "orta", alt: "bolme_kurali", konu: 4, level: 1 },
            { id: "4_1_006", s: "Bir bölme işleminde bölen {b} ise kalan en fazla kaç olabilir?", c: "{b}-1", v: { b: [3, 12] }, z: "orta", alt: "bolme_kurali", konu: 4, level: 1 }
        ],
        2: [
            { id: "4_2_001", s: "Bir bölme işleminde bölen {b}, bölüm {c}, kalan {k} ise bölünen kaçtır?", c: "{b}*{c}+{k}", v: { b: [5, 9], c: [4, 12], k: [1, 4] }, z: "zor", alt: "bolme_ozdesligi", konu: 4, level: 2 },
            { id: "4_2_002", s: "Bir bölme işleminde bölünen {a}, bölen {b}, bölüm {c}, kalan {k} ise aşağıdakilerden hangisi doğrudur?", c: "{b}*{c}+{k}", v: { b: [4, 10], c: [3, 12], k: [1, 9], a: [13, 129] }, z: "zor", alt: "bolme_ozdesligi", konu: 4, level: 2 },
            { id: "4_2_003", s: "{a} litre süt {b} litrelik şişelere dolduruluyor. Son şişe tam dolmuyor ve {k} litre artıyor. Kaç şişe kullanılmıştır? (k = a % b)", c: "Math.floor({a}/{b})+1", v: { b: [3, 8], a: [10, 100] }, z: "zor", alt: "problem_kalanli", konu: 4, level: 2 },
            { id: "4_2_004", s: "Bir kumbarada {a} TL ve {b} TL'lik paralar var. Toplam {t} TL olması için {a} TL'liklerden en az kaç tane olmalıdır?", c: "Math.ceil({t}/{a})", v: { a: [5, 20], b: [10, 50], t: [30, 200] }, z: "zor", alt: "problem_mantik", konu: 4, level: 2 },
            { id: "4_2_005", s: "Bir sayının 5 ile bölümünden kalan 3, 7 ile bölümünden kalan 2 ise bu sayı 35'ten küçük kaç farklı değer alır?", c: "1", v: {}, z: "zor", alt: "bolme_mantik", konu: 4, level: 2 }
        ]
    },

    // ========== 5. KONU: KESİRLER ==========
    5: {
        0: [
            { id: "5_0_001", s: "Bir bütünün {a}/{b}'i {c} ise bütün kaçtır?", c: "({c}*{b})/{a}", v: { a: [1, 4], b: [3, 8], c: [2, 40] }, z: "kolay", alt: "kesir_kavram", konu: 5, level: 0 },
            { id: "5_0_002", s: "{a}/{b} kesrini sadeleştiriniz.", c: "({a}/ebob({a},{b}))/({b}/ebob({a},{b}))", v: { a: [4, 16], b: [6, 24] }, z: "kolay", alt: "sadelestirme", konu: 5, level: 0 },
            { id: "5_0_003", s: "{a}/{b} kesri ile {c}/{d} kesri denk midir?", c: "{a}*{d}=={c}*{b}?'Evet':'Hayır'", v: { a: [1, 3], b: [2, 5], c: [2, 9], d: [4, 15] }, z: "kolay", alt: "denk_kesir", konu: 5, level: 0 },
            { id: "5_0_004", s: "Bir pastanın {a}/{b}'ini yedim. Geriye pastanın kaçta kaçı kaldı?", c: "1-{a}/{b}", v: { a: [1, 4], b: [5, 9] }, z: "kolay", alt: "problem_pasta", konu: 5, level: 0 },
            { id: "5_0_005", s: "{a} TL'nin {b}/{c}'si kaç TL'dir?", c: "({a}*{b})/{c}", v: { a: [20, 100], b: [1, 4], c: [3, 8] }, z: "kolay", alt: "problem_para", konu: 5, level: 0 },
            { id: "5_0_006", s: "{a}/{b} kesri basit kesir midir?", c: "{a}<{b}?'Evet':'Hayır'", v: { a: [2, 8], b: [3, 9] }, z: "kolay", alt: "kesir_kavram", konu: 5, level: 0 }
        ],
        1: [
            { id: "5_1_001", s: "{a}/{b} + {c}/{b} = ?", c: "({a}+{c})/{b}", v: { a: [1, 5], b: [4, 10], c: [1, 5] }, z: "orta", alt: "kesir_toplama", konu: 5, level: 1 },
            { id: "5_1_002", s: "{a}/{b} + {c}/{d} = ?", c: "({a}*{d}+{c}*{b})/({b}*{d})", v: { a: [1, 4], b: [2, 6], c: [1, 4], d: [3, 7] }, z: "orta", alt: "kesir_toplama", konu: 5, level: 1 },
            { id: "5_1_003", s: "{a}/{b} - {c}/{d} = ?", c: "({a}*{d}-{c}*{b})/({b}*{d})", v: { a: [3, 8], b: [3, 7], c: [1, 4], d: [3, 8] }, z: "orta", alt: "kesir_cikarma", konu: 5, level: 1 },
            { id: "5_1_004", s: "{a}/{b} × {c}/{d} = ?", c: "({a}*{c})/({b}*{d})", v: { a: [1, 5], b: [2, 6], c: [1, 5], d: [2, 6] }, z: "orta", alt: "kesir_carpma", konu: 5, level: 1 },
            { id: "5_1_005", s: "{a}/{b} ÷ {c}/{d} = ?", c: "({a}*{d})/({b}*{c})", v: { a: [1, 5], b: [2, 6], c: [1, 5], d: [2, 6] }, z: "orta", alt: "kesir_bolme", konu: 5, level: 1 },
            { id: "5_1_006", s: "{a}/{b} ile {c}/{d} kesirlerini karşılaştırınız. Hangisi büyüktür?", c: "{a}*{d}>{c}*{b}?'{a}/{b}':'{c}/{d}'", v: { a: [1, 5], b: [3, 8], c: [1, 5], d: [3, 8] }, z: "orta", alt: "siralama", konu: 5, level: 1 },
            { id: "5_1_007", s: "Bir sayının {a}/{b}'i {c} ise bu sayının {d}/{e}'si kaçtır?", c: "({c}*{b}*{d})/({a}*{e})", v: { a: [1, 4], b: [3, 7], c: [5, 20], d: [1, 3], e: [2, 6] }, z: "orta", alt: "problem_kesir", konu: 5, level: 1 }
        ],
        2: [
            { id: "5_2_001", s: "Bir sınıfın {a}/{b}'i kız, erkeklerin {c}/{d}'ü gözlüklüdür. Gözlüklü erkek sayısı {e} ise sınıf mevcudu kaçtır?", c: "({e}*{b}*{d})/(({b}-{a})*{c})", v: { a: [2, 4], b: [5, 9], c: [1, 3], d: [2, 5], e: [2, 12] }, z: "zor", alt: "problem_kesir", konu: 5, level: 2 },
            { id: "5_2_002", s: "Bir havuzun {a}/{b}'i dolu. {c} litre su eklenince havuzun {d}/{e}'si doluyor. Havuz kaç litredir?", c: "{c}/({d}/{e}-{a}/{b})", v: { a: [1, 3], b: [4, 7], c: [5, 30], d: [2, 4], e: [3, 8] }, z: "zor", alt: "problem_havuz", konu: 5, level: 2 },
            { id: "5_2_003", s: "Bir işin önce {a}/{b}'i, sonra kalanın {c}/{d}'ü yapılıyor. Geriye işin {e}/{f}'i kalıyorsa başlangıçtaki iş miktarı nedir?", c: "1/((1-{a}/{b})*(1-{c}/{d})-{e}/{f})", v: { a: [1, 3], b: [4, 6], c: [1, 3], d: [3, 5], e: [1, 4], f: [5, 9] }, z: "zor", alt: "problem_is", konu: 5, level: 2 },
            { id: "5_2_004", s: "Bir telin önce {a}/{b}'i, sonra kalanın {c}/{d}'ü kesiliyor. Geriye {e} metre tel kalıyorsa telin tamamı kaç metredir?", c: "{e}/((1-{a}/{b})*(1-{c}/{d}))", v: { a: [1, 3], b: [4, 7], c: [1, 3], d: [3, 6], e: [5, 25] }, z: "zor", alt: "problem_tel", konu: 5, level: 2 },
            { id: "5_2_005", s: "Bir sayının {a}/{b}'i ile {c}/{d}'ünün toplamı {t} ise bu sayı kaçtır?", c: "{t}/({a}/{b}+{c}/{d})", v: { a: [1, 4], b: [3, 7], c: [1, 4], d: [2, 6], t: [10, 50] }, z: "zor", alt: "problem_denklem", konu: 5, level: 2 },
            { id: "5_2_006", s: "Bir sınavda başarı oranı %{p} iken {n} kişi daha başarılı olunca oran %{q} oluyor. Sınava giren toplam kişi sayısı kaçtır?", c: "({n}*100)/({q}-{p})", v: { p: [30, 60], q: [50, 80], n: [10, 40] }, z: "zor", alt: "problem_yuzde", konu: 5, level: 2 },
            { id: "5_2_007", s: "Bir karışımın {a}/{b}'i A maddesi, kalanı B maddesidir. Karışıma {c} kg A eklenince oran {d}/{e} oluyor. Başlangıçtaki karışım kaç kg'dır?", c: "({c}*{b}*{e})/({d}*{b}-{a}*{e})", v: { a: [1, 3], b: [4, 7], c: [2, 15], d: [3, 5], e: [4, 8] }, z: "zor", alt: "problem_karisim", konu: 5, level: 2 }
        ]
    },

    // ========== 6. KONU: ONDALIK SAYILAR ==========
    6: {
        0: [
            { id: "6_0_001", s: "Bir bütünün {a}/10'u ondalık olarak kaça eşittir?", c: "{a}/10", v: { a: [1, 9] }, z: "kolay", alt: "kesir_ondalik", konu: 6, level: 0 },
            { id: "6_0_002", s: "0,{a} ondalık sayısını kesir olarak yazınız.", c: "{a}/10", v: { a: [1, 9] }, z: "kolay", alt: "ondalik_kesir", konu: 6, level: 0 },
            { id: "6_0_003", s: "0,{a}{b} ondalık sayısını kesir olarak yazınız.", c: "({a}*10+{b})/100", v: { a: [1, 9], b: [1, 9] }, z: "kolay", alt: "ondalik_kesir", konu: 6, level: 0 },
            { id: "6_0_004", s: "{a}/100 kesrinin ondalık gösterimi nedir?", c: "{a}/100", v: { a: [1, 99] }, z: "kolay", alt: "kesir_ondalik", konu: 6, level: 0 },
            { id: "6_0_005", s: "Bir pastanın 0,{a}'ini yedim. Kesir olarak ne kadarını yedim?", c: "{a}/10", v: { a: [1, 9] }, z: "kolay", alt: "problem_kesir", konu: 6, level: 0 },
            { id: "6_0_006", s: "{a},{b} ondalık sayısının tam kısmı kaçtır?", c: "{a}", v: { a: [1, 9], b: [1, 9] }, z: "kolay", alt: "ondalik_kavram", konu: 6, level: 0 }
        ],
        1: [
            { id: "6_1_001", s: "0,{a} + 0,{b} = ?", c: "(0.{a}+0.{b}).toFixed(1)", v: { a: [1, 8], b: [1, 8] }, z: "orta", alt: "ondalik_toplama", konu: 6, level: 1 },
            { id: "6_1_002", s: "0,{a}{b} + 0,{c}{d} = ?", c: "(0.{a}{b}+0.{c}{d}).toFixed(2)", v: { a: [1, 9], b: [0, 9], c: [1, 9], d: [0, 9] }, z: "orta", alt: "ondalik_toplama", konu: 6, level: 1 },
            { id: "6_1_003", s: "{a},{b} - {c},{d} = ?", c: "({a}.{b}-{c}.{d}).toFixed(1)", v: { a: [2, 9], b: [0, 9], c: [1, 8], d: [0, 9] }, z: "orta", alt: "ondalik_cikarma", konu: 6, level: 1 },
            { id: "6_1_004", s: "0,{a} × 10 = ?", c: "{a}", v: { a: [1, 9] }, z: "orta", alt: "ondalik_carpma", konu: 6, level: 1 },
            { id: "6_1_005", s: "{a},{b} × 10 = ?", c: "{a}{b}", v: { a: [1, 9], b: [1, 9] }, z: "orta", alt: "ondalik_carpma", konu: 6, level: 1 },
            { id: "6_1_006", s: "{a},{b} ÷ 10 = ?", c: "({a}.{b}/10).toFixed(2)", v: { a: [1, 9], b: [0, 9] }, z: "orta", alt: "ondalik_bolme", konu: 6, level: 1 },
            { id: "6_1_007", s: "0,{a} sayısını en yakın tam sayıya yuvarlayınız.", c: "{a}>=5?1:0", v: { a: [1, 9] }, z: "orta", alt: "yuvarlama", konu: 6, level: 1 },
            { id: "6_1_008", s: "0,{a}{b} sayısını onda birler basamağına yuvarlayınız.", c: "Math.round(0.{a}{b}*10)/10", v: { a: [1, 9], b: [1, 9] }, z: "orta", alt: "yuvarlama", konu: 6, level: 1 },
            { id: "6_1_009", s: "Tanesi {a},{b} TL olan çikolatadan {c} tane alan kaç TL öder?", c: "(({a}.{b})*{c}).toFixed(1)", v: { a: [1, 5], b: [0, 9], c: [2, 5] }, z: "orta", alt: "problem_para", konu: 6, level: 1 },
            { id: "6_1_010", s: "{a},{b} km'lik yolun önce {c},{d} km'sini, sonra {e},{f} km'sini gittim. Geriye kaç km kaldı?", c: "(({a}.{b})-({c}.{d})-({e}.{f})).toFixed(1)", v: { a: [5, 20], b: [0, 9], c: [1, 5], d: [0, 9], e: [1, 5], f: [0, 9] }, z: "orta", alt: "problem_yol", konu: 6, level: 1 }
        ],
        2: [
            { id: "6_2_001", s: "Bir manav {a},{b} kg elma, {c},{d} kg armut, {e},{f} kg muz satmıştır. Toplam kaç kg meyve satmıştır?", c: "(({a}.{b})+({c}.{d})+({e}.{f})).toFixed(1)", v: { a: [1, 10], b: [0, 9], c: [1, 10], d: [0, 9], e: [1, 5], f: [0, 9] }, z: "zor", alt: "problem_tarti", konu: 6, level: 2 },
            { id: "6_2_002", s: "Bir öğrencinin matematik notları {a},{b}, {c},{d}, {e},{f}'tir. Bu notların ortalaması kaçtır?", c: "((({a}.{b})+({c}.{d})+({e}.{f}))/3).toFixed(2)", v: { a: [1, 10], b: [0, 9], c: [1, 10], d: [0, 9], e: [1, 10], f: [0, 9] }, z: "zor", alt: "problem_ortalama", konu: 6, level: 2 },
            { id: "6_2_003", s: "Bir araç saatte {a},{b} km hızla {c} saat, saatte {d},{e} km hızla {f} saat gidiyor. Ortalama hızı kaç km/saattir?", c: "((({a}.{b})*{c}+({d}.{e})*{f})/({c}+{f})).toFixed(1)", v: { a: [40, 90], b: [0, 9], c: [1, 4], d: [50, 100], e: [0, 9], f: [1, 4] }, z: "zor", alt: "problem_hareket", konu: 6, level: 2 },
            { id: "6_2_004", s: "{a},{b} sayısının {c} katı kaçtır?", c: "(({a}.{b})*{c}).toFixed(1)", v: { a: [1, 20], b: [0, 9], c: [2, 6] }, z: "zor", alt: "ondalik_carpma", konu: 6, level: 2 },
            { id: "6_2_005", s: "Tuz oranı %{a},{b} olan {c} kg tuzlu suya {d} kg su eklenirse yeni tuz oranı yüzde kaç olur?", c: "(({a}.{b}*{c})/({c}+{d})).toFixed(2)", v: { a: [1, 20], b: [0, 9], c: [20, 100], d: [5, 30] }, z: "zor", alt: "problem_karisim", konu: 6, level: 2 },
            { id: "6_2_006", s: "Bir ürünün fiyatı önce %{a},{b} artıyor, sonra %{c},{d} düşüyor. Net değişim yüzdesi nedir?", c: "(({a}.{b}+{c}.{d}) - ({a}.{b}*{c}.{d}/100)).toFixed(2)", v: { a: [5, 25], b: [0, 9], c: [5, 20], d: [0, 9] }, z: "zor", alt: "problem_yuzde", konu: 6, level: 2 },
            { id: "6_2_007", s: "Bir karenin bir kenarı {a},{b} cm ise çevresi kaç cm'dir?", c: "(4*({a}.{b})).toFixed(1)", v: { a: [1, 15], b: [0, 9] }, z: "zor", alt: "problem_geometri", konu: 6, level: 2 },
            { id: "6_2_008", s: "Bir dikdörtgenin kısa kenarı {a},{b} cm, uzun kenarı {c},{d} cm ise alanı kaç cm²'dir?", c: "(({a}.{b})*({c}.{d})).toFixed(2)", v: { a: [1, 10], b: [0, 9], c: [2, 20], d: [0, 9] }, z: "zor", alt: "problem_geometri", konu: 6, level: 2 }
        ]
    },

    // ========== 7. KONU: ÜSLÜ SAYILAR ==========
    7: {
        0: [
            { id: "7_0_001", s: "Bir karenin bir kenarı {a} cm ise alanı kaç cm²'dir?", c: "{a}*{a}", v: { a: [2, 12] }, z: "kolay", alt: "kare_alani", konu: 7, level: 0 },
            { id: "7_0_002", s: "Bir küpün bir ayrıtı {a} cm ise hacmi kaç cm³'tür?", c: "{a}*{a}*{a}", v: { a: [2, 8] }, z: "kolay", alt: "kup_hacmi", konu: 7, level: 0 },
            { id: "7_0_003", s: "3² + 4² = ?", c: "25", v: {}, z: "kolay", alt: "us_toplama", konu: 7, level: 0 },
            { id: "7_0_004", s: "2³ + 3³ = ?", c: "35", v: {}, z: "kolay", alt: "us_toplama", konu: 7, level: 0 },
            { id: "7_0_005", s: "5² - 3² = ?", c: "16", v: {}, z: "kolay", alt: "us_cikarma", konu: 7, level: 0 },
            { id: "7_0_006", s: "10² kaçtır?", c: "100", v: {}, z: "kolay", alt: "us_deger", konu: 7, level: 0 },
            { id: "7_0_007", s: "10³ kaçtır?", c: "1000", v: {}, z: "kolay", alt: "us_deger", konu: 7, level: 0 },
            { id: "7_0_008", s: "2⁵ kaçtır?", c: "32", v: {}, z: "kolay", alt: "us_deger", konu: 7, level: 0 },
            { id: "7_0_009", s: "3⁴ kaçtır?", c: "81", v: {}, z: "kolay", alt: "us_deger", konu: 7, level: 0 },
            { id: "7_0_010", s: "{a}² = 49 ise a kaçtır? (pozitif)", c: "7", v: {}, z: "orta", alt: "denklem", konu: 7, level: 0 }
        ],
        1: [
            { id: "7_1_001", s: "2³ × 2⁴ = ?", c: "128", v: {}, z: "orta", alt: "us_carpma", konu: 7, level: 1 },
            { id: "7_1_002", s: "{a}² × {a}³ = ?", c: "{a}⁵", v: { a: [2, 6] }, z: "orta", alt: "us_carpma", konu: 7, level: 1 },
            { id: "7_1_003", s: "2⁶ ÷ 2² = ?", c: "16", v: {}, z: "orta", alt: "us_bolme", konu: 7, level: 1 },
            { id: "7_1_004", s: "{a}⁵ ÷ {a}² = ?", c: "{a}³", v: { a: [2, 6] }, z: "orta", alt: "us_bolme", konu: 7, level: 1 },
            { id: "7_1_005", s: "(2³)² = ?", c: "64", v: {}, z: "orta", alt: "us_ussu", konu: 7, level: 1 },
            { id: "7_1_006", s: "({a}²)³ = ?", c: "{a}⁶", v: { a: [2, 5] }, z: "orta", alt: "us_ussu", konu: 7, level: 1 },
            { id: "7_1_007", s: "2⁻² kaçtır?", c: "1/4", v: {}, z: "orta", alt: "negatif_us", konu: 7, level: 1 },
            { id: "7_1_008", s: "{a}⁻¹ kaçtır?", c: "1/{a}", v: { a: [2, 10] }, z: "orta", alt: "negatif_us", konu: 7, level: 1 },
            { id: "7_1_009", s: "Bir sayının 10⁴ katı 50000 ise bu sayı kaçtır?", c: "5", v: {}, z: "orta", alt: "bilimsel", konu: 7, level: 1 },
            { id: "7_1_010", s: "3 × 10⁵ kaçtır?", c: "300000", v: {}, z: "orta", alt: "bilimsel", konu: 7, level: 1 }
        ],
        2: [
            { id: "7_2_001", s: "Bir bakteri her saat 2 katına çıkıyor. Başlangıçta {a} bakteri varsa {n} saat sonra kaç bakteri olur?", c: "{a}*Math.pow(2,{n})", v: { a: [1, 10], n: [2, 6] }, z: "zor", alt: "problem_bakteri", konu: 7, level: 2 },
            { id: "7_2_002", s: "Bir hücre her gün 3 katına çıkıyor. {n} gün sonra başlangıçtaki hücre sayısının kaç katı olur?", c: "Math.pow(3,{n})", v: { n: [2, 5] }, z: "zor", alt: "problem_hucre", konu: 7, level: 2 },
            { id: "7_2_003", s: "Bir radyoaktif madde her yıl yarıya düşüyor. Başlangıçta {a} gram olan madde {n} yıl sonra kaç gram kalır?", c: "{a}/Math.pow(2,{n})", v: { a: [16, 32, 64, 128], n: [1, 4] }, z: "zor", alt: "problem_radyoaktif", konu: 7, level: 2 },
            { id: "7_2_004", s: "2ˣ = 32 ise 2ˣ⁺² kaçtır?", c: "128", v: {}, z: "zor", alt: "denklem", konu: 7, level: 2 },
            { id: "7_2_005", s: "3ˣ = 81 ise 3ˣ⁻¹ kaçtır?", c: "27", v: {}, z: "zor", alt: "denklem", konu: 7, level: 2 },
            { id: "7_2_006", s: "2ˣ = 8ʸ ve x-y = 3 ise x kaçtır?", c: "6", v: {}, z: "zor", alt: "denklem_sistem", konu: 7, level: 2 },
            { id: "7_2_007", s: "Dünya'nın Güneş'e uzaklığı yaklaşık 150.000.000 km'dir. Bu uzaklığı bilimsel gösterimle yazınız.", c: "1.5×10⁸", v: {}, z: "zor", alt: "bilimsel", konu: 7, level: 2 },
            { id: "7_2_008", s: "Bir virüsün boyu 0,0000003 m'dir. Bilimsel gösterimi nedir?", c: "3×10⁻⁷", v: {}, z: "zor", alt: "bilimsel", konu: 7, level: 2 },
            { id: "7_2_009", s: "2⁵ ile 5²'yi karşılaştırınız. Hangisi daha büyüktür?", c: "2⁵=32, 5²=25 → 2⁵ büyük", v: {}, z: "zor", alt: "karsilastirma", konu: 7, level: 2 },
            { id: "7_2_010", s: "2ˣ = {s} ise 2ˣ⁻² kaçtır?", c: "{s}/4", v: { s: [8, 128] }, z: "zor", alt: "denklem", konu: 7, level: 2 }
        ]
    },

    // ========== 8. KONU: KÖKLÜ SAYILAR ==========
    8: {
        0: [
            { id: "8_0_001", s: "Alanı {a} cm² olan karenin bir kenarı kaç cm'dir?", c: "Math.sqrt({a})", v: { a: [4, 100] }, z: "kolay", alt: "kare_alani", konu: 8, level: 0 },
            { id: "8_0_002", s: "Hangi sayının karesi {a}'tır?", c: "Math.sqrt({a})", v: { a: [4, 100] }, z: "kolay", alt: "karekok_tanim", konu: 8, level: 0 },
            { id: "8_0_003", s: "√{a} sayısı bir tam sayı mıdır?", c: "Number.isInteger(Math.sqrt({a}))?'Evet':'Hayır'", v: { a: [2, 50] }, z: "kolay", alt: "tam_kare_kontrol", konu: 8, level: 0 },
            { id: "8_0_004", s: "√{a} işleminin sonucu kaçtır?", c: "Math.sqrt({a})", v: { a: [4, 100] }, z: "kolay", alt: "karekok_degeri", konu: 8, level: 0 },
            { id: "8_0_005", s: "Bir karenin alanı {a} br² ise çevresi kaç br'dir?", c: "4*Math.sqrt({a})", v: { a: [4, 36] }, z: "orta", alt: "kare_cevre", konu: 8, level: 0 },
            { id: "8_0_006", s: "√0 = ?", c: "0", v: {}, z: "kolay", alt: "karekok_degeri", konu: 8, level: 0 },
            { id: "8_0_007", s: "√1 = ?", c: "1", v: {}, z: "kolay", alt: "karekok_degeri", konu: 8, level: 0 },
            { id: "8_0_008", s: "√{a} sayısı hangi iki tam sayı arasındadır?", c: "Math.floor(Math.sqrt({a})) + ' ile ' + Math.ceil(Math.sqrt({a}))", v: { a: [2, 99] }, z: "orta", alt: "karekok_aralik", konu: 8, level: 0 }
        ],
        1: [
            { id: "8_1_001", s: "√{a} sayısını a√b şeklinde yazınız.", c: "katsayiCikar({a})", v: { a: [8, 99] }, z: "orta", alt: "kok_disi", konu: 8, level: 1 },
            { id: "8_1_002", s: "√{a} × √{b} = ?", c: "Math.sqrt({a}*{b})", v: { a: [2, 10], b: [2, 10] }, z: "orta", alt: "kok_carpma", konu: 8, level: 1 },
            { id: "8_1_003", s: "√{a} ÷ √{b} = ?", c: "Math.sqrt({a}/{b})", v: { b: [2, 6], a: [8, 150] }, z: "orta", alt: "kok_bolme", konu: 8, level: 1 },
            { id: "8_1_004", s: "{a}√{b} + {c}√{b} = ?", c: "({a}+{c})*Math.sqrt({b})", v: { a: [2, 6], c: [3, 8], b: [2, 13] }, z: "orta", alt: "kok_toplama", konu: 8, level: 1 },
            { id: "8_1_005", s: "{a}√{b} - {c}√{b} = ?", c: "({a}-{c})*Math.sqrt({b})", v: { a: [5, 12], c: [1, 4], b: [2, 13] }, z: "orta", alt: "kok_cikarma", konu: 8, level: 1 },
            { id: "8_1_006", s: "√{a} + √{a} = ?", c: "2*Math.sqrt({a})", v: { a: [4, 36] }, z: "kolay", alt: "kok_toplama", konu: 8, level: 1 },
            { id: "8_1_007", s: "({a}√{b})² = ?", c: "{a}*{a}*{b}", v: { a: [2, 5], b: [2, 6] }, z: "orta", alt: "kok_kare", konu: 8, level: 1 }
        ],
        2: [
            { id: "8_2_001", s: "Dik kenarları {a} cm ve {b} cm olan dik üçgenin hipotenüsü kaç cm'dir?", c: "Math.sqrt({a}*{a}+{b}*{b})", v: { a: [3, 8], b: [4, 15] }, z: "zor", alt: "pisagor", konu: 8, level: 2 },
            { id: "8_2_002", s: "Bir karenin köşegeni {a} cm ise bir kenarı kaç cm'dir?", c: "{a}/Math.sqrt(2)", v: { a: [4, 12] }, z: "zor", alt: "kare_kosegen", konu: 8, level: 2 },
            { id: "8_2_003", s: "Bir eşkenar üçgenin bir kenarı {a} cm ise yüksekliği kaç cm'dir?", c: "{a}*Math.sqrt(3)/2", v: { a: [4, 10] }, z: "zor", alt: "eskenar_yukseklik", konu: 8, level: 2 },
            { id: "8_2_004", s: "√(x + {a}) = {b} ise x kaçtır?", c: "{b}*{b}-{a}", v: { a: [2, 15], b: [3, 8] }, z: "orta", alt: "kok_denklem", konu: 8, level: 2 },
            { id: "8_2_005", s: "√x + {a} = {b} ise x kaçtır?", c: "({b}-{a})*({b}-{a})", v: { a: [1, 5], b: [4, 10] }, z: "orta", alt: "kok_denklem", konu: 8, level: 2 },
            { id: "8_2_006", s: "1/(√{a}+√{b}) ifadesinin paydasını rasyonel yapınız.", c: "eslenikYap({a},{b})", v: { a: [3, 8], b: [2, 6] }, z: "zor", alt: "eslenik", konu: 8, level: 2 },
            { id: "8_2_007", s: "√{a} ile √{b} sayılarından hangisi daha büyüktür?", c: "{a}>{b}?'Birincisi':'İkincisi'", v: { a: [2, 15], b: [2, 15] }, z: "orta", alt: "karsilastirma", konu: 8, level: 2 },
            { id: "8_2_008", s: "Alanı {a} cm² olan dairenin yarıçapı kaç cm'dir? (π=3 alınız)", c: "Math.sqrt({a}/3)", v: { a: [12, 27, 48, 75, 108] }, z: "zor", alt: "daire_alani", konu: 8, level: 2 },
            { id: "8_2_009", s: "√(√{a}) işleminin sonucu nedir?", c: "Math.pow({a},1/4)", v: { a: [16, 625] }, z: "zor", alt: "ic_ice_kok", konu: 8, level: 2 },
            { id: "8_2_010", s: "√{a} sayısını a√b şeklinde yazınız.", c: "katsayiCikar({a})", v: { a: [108, 500] }, z: "zor", alt: "kok_disi", konu: 8, level: 2 }
        ]
    },

    // ========== 9. KONU: ORAN - ORANTI ==========
    9: {
        0: [
            { id: "9_0_001", s: "{a} sayısının {b} sayısına oranı kaçtır? (en sade halde)", c: "sadelestir({a},{b})", v: { a: [2, 20], b: [3, 15] }, z: "kolay", alt: "oran_kavram", konu: 9, level: 0 },
            { id: "9_0_002", s: "{a} TL'nin {b} TL'ye oranı kaçtır?", c: "sadelestir({a},{b})", v: { a: [5, 50], b: [10, 100] }, z: "kolay", alt: "oran_kavram", konu: 9, level: 0 },
            { id: "9_0_003", s: "Bir sınıfta {a} kız, {b} erkek varsa kızların erkeklere oranı kaçtır?", c: "sadelestir({a},{b})", v: { a: [8, 20], b: [10, 25] }, z: "kolay", alt: "oran_kavram", konu: 9, level: 0 },
            { id: "9_0_004", s: "{a} km'de {b} litre yakan bir araç 1 km'de kaç litre yakar?", c: "{b}/{a}", v: { a: [100, 500], b: [5, 20] }, z: "orta", alt: "oran_kavram", konu: 9, level: 0 },
            { id: "9_0_005", s: "a/b = {a}/{b} ise b/a kaçtır?", c: "{b}/{a}", v: { a: [2, 7], b: [3, 8] }, z: "kolay", alt: "oran_kavram", konu: 9, level: 0 },
            { id: "9_0_006", s: "{a}/{b} oranını sadeleştiriniz.", c: "sadelestir({a},{b})", v: { a: [4, 24], b: [6, 36] }, z: "orta", alt: "oran_sadelestirme", konu: 9, level: 0 }
        ],
        1: [
            { id: "9_1_001", s: "{a} kg elma {b} TL ise {c} kg elma kaç TL'dir?", c: "({b}*{c})/{a}", v: { a: [2, 8], b: [5, 20], c: [4, 32] }, z: "orta", alt: "dogru_oranti", konu: 9, level: 1 },
            { id: "9_1_002", s: "x ile y doğru orantılıdır. x={x1} iken y={y1} ise x={x2} iken y kaçtır?", c: "({y1}*{x2})/{x1}", v: { x1: [3, 8], y1: [6, 20], x2: [5, 13] }, z: "orta", alt: "dogru_oranti", konu: 9, level: 1 },
            { id: "9_1_003", s: "{a} işçi bir işi {b} günde bitiriyor. Aynı işi {c} günde bitirmek için kaç işçi gerekir?", c: "({a}*{b})/{c}", v: { a: [3, 8], b: [6, 15], c: [4, 12] }, z: "orta", alt: "ters_oranti", konu: 9, level: 1 },
            { id: "9_1_004", s: "x ile y ters orantılıdır. x={x1} iken y={y1} ise x={x2} iken y kaçtır?", c: "({x1}*{y1})/{x2}", v: { x1: [3, 8], y1: [6, 20], x2: [5, 13] }, z: "orta", alt: "ters_oranti", konu: 9, level: 1 },
            { id: "9_1_005", s: "Bir havuzu eşit kapasiteli {a} musluk {b} saatte dolduruyorsa {c} musluk kaç saatte doldurur?", c: "({a}*{b})/{c}", v: { a: [3, 6], b: [8, 15], c: [4, 9] }, z: "orta", alt: "ters_oranti", konu: 9, level: 1 },
            { id: "9_1_006", s: "Bir sınıfta kızların erkeklere oranı {a}/{b}'dir. Sınıfta {c} kız varsa kaç erkek vardır?", c: "({c}*{b})/{a}", v: { a: [2, 5], b: [3, 7], c: [4, 25] }, z: "orta", alt: "problem", konu: 9, level: 1 },
            { id: "9_1_007", s: "a/b = {a}/{b} ve a+b = {t} ise a kaçtır?", c: "{t}*{a}/({a}+{b})", v: { a: [1, 5], b: [2, 7], t: [3, 48] }, z: "orta", alt: "dogru_oranti", konu: 9, level: 1 }
        ],
        2: [
            { id: "9_2_001", s: "{a} işçi {b} günde {c} parça üretiyor. {d} işçi {e} günde kaç parça üretir?", c: "({c}*{d}*{e})/({a}*{b})", v: { a: [2, 5], b: [3, 8], c: [10, 30], d: [3, 8], e: [4, 10] }, z: "zor", alt: "bilesik_oranti", konu: 9, level: 2 },
            { id: "9_2_002", s: "{a} işçi {b} m² duvarı {c} günde örüyor. {d} işçi {e} m² duvarı kaç günde örer?", c: "({a}*{c}*{e})/({d}*{b})", v: { a: [2, 5], b: [20, 60], c: [3, 8], d: [3, 6], e: [30, 80] }, z: "zor", alt: "bilesik_oranti", konu: 9, level: 2 },
            { id: "9_2_003", s: "x, y ile doğru; z ile ters orantılıdır. y={y1}, z={z1} iken x={x1} ise y={y2}, z={z2} iken x kaçtır?", c: "({x1}*{y2}*{z1})/({y1}*{z2})", v: { x1: [4, 12], y1: [2, 8], z1: [3, 9], y2: [4, 16], z2: [1, 7] }, z: "zor", alt: "bilesik_oranti", konu: 9, level: 2 },
            { id: "9_2_004", s: "x/y = {a}/{b} ve y/z = {c}/{d} ise x/z kaçtır?", c: "({a}*{c})/({b}*{d})", v: { a: [1, 4], b: [2, 5], c: [2, 6], d: [3, 7] }, z: "zor", alt: "zincir_oran", konu: 9, level: 2 },
            { id: "9_2_005", s: "Bir karışımda A maddesinin B maddesine oranı {a}/{b}'dir. {c} gram karışımda kaç gram A vardır?", c: "({c}*{a})/({a}+{b})", v: { a: [1, 4], b: [2, 5], c: [3, 54] }, z: "orta", alt: "problem_karisim", konu: 9, level: 2 },
            { id: "9_2_006", s: "Bir araç {a} km yolu {b} saatte alıyor. Aynı hızla {c} km yolu kaç saatte alır?", c: "({b}*{c})/{a}", v: { a: [100, 400], b: [2, 6], c: [150, 600] }, z: "orta", alt: "problem_hiz", konu: 9, level: 2 },
            { id: "9_2_007", s: "a/b = c/d = {k} ise (a+c)/(b+d) = ?", c: "{k}", v: { k: [2, 5] }, z: "orta", alt: "oranti_ozelligi", konu: 9, level: 2 },
            { id: "9_2_008", s: "{a} sayısını {b} ve {c} ile doğru orantılı olacak şekilde iki parçaya ayırınız. Büyük parça kaçtır?", c: "{a}*Math.max({b},{c})/({b}+{c})", v: { a: [20, 100], b: [2, 5], c: [3, 8] }, z: "zor", alt: "problem_paylasim", konu: 9, level: 2 },
            { id: "9_2_009", s: "{a} sayısını {b} ve {c} ile ters orantılı olacak şekilde iki parçaya ayırınız. Küçük parça kaçtır?", c: "{a}*Math.min({b},{c})/({b}+{c})", v: { a: [20, 100], b: [2, 5], c: [3, 8] }, z: "zor", alt: "problem_paylasim", konu: 9, level: 2 },
            { id: "9_2_010", s: "2a = 3b = 4c ise a:b:c oranı nedir?", c: "6:4:3", v: {}, z: "zor", alt: "zincir_oran", konu: 9, level: 2 }
        ]
    },

    // ========== 10. KONU: YÜZDE ==========
    10: {
        0: [
            { id: "10_0_001", s: "{a} sayısının %{p}'i kaçtır?", c: "{a}*{p}/100", v: { a: [50, 500], p: [10, 75] }, z: "kolay", alt: "yuzde_bul", konu: 10, level: 0 },
            { id: "10_0_002", s: "Bir sınıftaki {a} öğrencinin %{p}'i kızdır. Kaç kız öğrenci vardır?", c: "{a}*{p}/100", v: { a: [20, 100], p: [25, 75] }, z: "kolay", alt: "yuzde_bul", konu: 10, level: 0 },
            { id: "10_0_003", s: "{a} TL'nin %{p} indirimli fiyatı kaç TL'dir?", c: "{a}*(100-{p})/100", v: { a: [50, 500], p: [10, 50] }, z: "kolay", alt: "indirim", konu: 10, level: 0 },
            { id: "10_0_004", s: "{a} TL'ye %{p} zam yapılırsa yeni fiyat kaç TL olur?", c: "{a}*(100+{p})/100", v: { a: [50, 500], p: [10, 50] }, z: "kolay", alt: "zam", konu: 10, level: 0 },
            { id: "10_0_005", s: "Bir ürünün fiyatı {a} TL'den {b} TL'ye düşmüştür. İndirim yüzdesi kaçtır?", c: "Math.round(({a}-{b})/{a}*100)", v: { a: [60, 300], b: [30, 250] }, z: "orta", alt: "indirim_orani", konu: 10, level: 0 }
        ],
        1: [
            { id: "10_1_001", s: "%{p}'i {d} olan sayının tamamı kaçtır?", c: "{d}*100/{p}", v: { p: [10, 50], d: [10, 300] }, z: "orta", alt: "sayi_bul", konu: 10, level: 1 },
            { id: "10_1_002", s: "%{p} fazlası {d} olan sayı kaçtır?", c: "{d}*100/(100+{p})", v: { p: [10, 40], d: [110, 700] }, z: "orta", alt: "sayi_bul", konu: 10, level: 1 },
            { id: "10_1_003", s: "%{p} eksiği {d} olan sayı kaçtır?", c: "{d}*100/(100-{p})", v: { p: [10, 40], d: [60, 450] }, z: "orta", alt: "sayi_bul", konu: 10, level: 1 },
            { id: "10_1_004", s: "Maliyeti {m} TL olan ürün %{k} kârla kaç TL'ye satılır?", c: "{m}*(100+{k})/100", v: { m: [50, 300], k: [10, 50] }, z: "orta", alt: "kar", konu: 10, level: 1 },
            { id: "10_1_005", s: "{a} TL'ye alınan ürün {b} TL'ye satılırsa kâr yüzdesi kaçtır?", c: "Math.round(({b}-{a})/{a}*100)", v: { a: [50, 150], b: [70, 210] }, z: "orta", alt: "kar_orani", konu: 10, level: 1 },
            { id: "10_1_006", s: "{a} TL'ye alınan ürün {b} TL'ye satılırsa zarar yüzdesi kaçtır?", c: "Math.round(({a}-{b})/{a}*100)", v: { a: [60, 200], b: [30, 150] }, z: "orta", alt: "zarar_orani", konu: 10, level: 1 },
            { id: "10_1_007", s: "Bir sınavda {a} sorunun %{p}'ini doğru yapan öğrenci kaç doğru yapmıştır?", c: "{a}*{p}/100", v: { a: [40, 100], p: [50, 90] }, z: "orta", alt: "problem_sinav", konu: 10, level: 1 }
        ],
        2: [
            { id: "10_2_001", s: "Bir ürüne art arda %{p} ve %{q} zam yapılırsa toplam zam yüzdesi kaç olur?", c: "Math.round(((100+{p})*(100+{q})/100)-100)", v: { p: [10, 30], q: [5, 25] }, z: "zor", alt: "ardisik_zam", konu: 10, level: 2 },
            { id: "10_2_002", s: "Bir ürüne %{z} zam yapıldıktan sonra %{i} indirim yapılırsa son fiyat ilk fiyata göre yüzde kaç değişir?", c: "Math.round(((100+{z})*(100-{i})/100)-100)", v: { z: [10, 40], i: [10, 30] }, z: "zor", alt: "ardisik_zam_indirim", konu: 10, level: 2 },
            { id: "10_2_003", s: "Yaş üzüm kuruyunca ağırlığının %{p}'ini kaybediyor. {a} kg kuru üzüm elde etmek için kaç kg yaş üzüm gerekir?", c: "{a}*100/(100-{p})", v: { p: [15, 40], a: [10, 50] }, z: "zor", alt: "problem_kurutma", konu: 10, level: 2 },
            { id: "10_2_004", s: "Tanesi {a} TL olan üründen {b} tane alana {c} tanesi bedava. Yapılan indirim yüzdesi kaçtır?", c: "Math.round(({c}/({b}+{c}))*100)", v: { a: [5, 20], b: [2, 5], c: [1, 3] }, z: "zor", alt: "problem_indirim", konu: 10, level: 2 },
            { id: "10_2_005", s: "Bir ürünün maliyeti {m} TL'dir. Ürün etiket fiyatına %{p} kâr eklenip ardından %{i} indirim yapılıyor. Son durumdaki kâr/zarar yüzdesi nedir?", c: "Math.round(((100+{p})*(100-{i})/100)-100)", v: { m: [50, 200], p: [20, 60], i: [10, 30] }, z: "zor", alt: "etiket_kar_indirim", konu: 10, level: 2 },
            { id: "10_2_006", s: "%{p} kârla satılan bir ürünün satış fiyatı {s} TL'dir. Bu ürünün maliyeti kaç TL'dir?", c: "{s}*100/(100+{p})", v: { p: [10, 50], s: [110, 600] }, z: "zor", alt: "maliyet_bul", konu: 10, level: 2 },
            { id: "10_2_007", s: "Bir sınıftaki öğrencilerin %{a}'sı matematikten, %{b}'si fizikten başarılıdır. Her iki dersten başarılı olanların oranı %{c} ise sadece matematikten başarılı olanların oranı yüzde kaçtır?", c: "{a}-{c}", v: { a: [50, 80], b: [40, 70], c: [20, 50] }, z: "zor", alt: "problem_kume", konu: 10, level: 2 },
            { id: "10_2_008", s: "Bir ürünün fiyatı önce %{z} artıyor, sonra %{i} düşüyor. Net değişim yüzdesi nedir?", c: "Math.round(((100+{z})*(100-{i})/100)-100)", v: { z: [10, 30], i: [10, 30] }, z: "zor", alt: "net_degisim", konu: 10, level: 2 }
        ]
    },

    // ========== 11. KONU: DENKLEM ÇÖZME ==========
    11: {
        0: [
            { id: "11_0_001", s: "Bir sayının 5 fazlası 12'dir. Bu sayı kaçtır?", c: "7", v: {}, z: "kolay", alt: "sayi_problemi", konu: 11, level: 0 },
            { id: "11_0_002", s: "Bir sayının 3 eksiği 10'dur. Bu sayı kaçtır?", c: "13", v: {}, z: "kolay", alt: "sayi_problemi", konu: 11, level: 0 },
            { id: "11_0_003", s: "Bir sayının 2 katı 18'dir. Bu sayı kaçtır?", c: "9", v: {}, z: "kolay", alt: "sayi_problemi", konu: 11, level: 0 },
            { id: "11_0_004", s: "Bir sayının yarısı 15'tir. Bu sayı kaçtır?", c: "30", v: {}, z: "kolay", alt: "sayi_problemi", konu: 11, level: 0 },
            { id: "11_0_005", s: "Hangi sayıya 7 eklersek 25 olur?", c: "18", v: {}, z: "kolay", alt: "sayi_problemi", konu: 11, level: 0 },
            { id: "11_0_006", s: "Hangi sayıdan 8 çıkarırsak 24 kalır?", c: "32", v: {}, z: "kolay", alt: "sayi_problemi", konu: 11, level: 0 },
            { id: "11_0_007", s: "Bir sayının 3 katının 5 fazlası 26'dır. Bu sayı kaçtır?", c: "7", v: {}, z: "orta", alt: "sayi_problemi", konu: 11, level: 0 }
        ],
        1: [
            { id: "11_1_001", s: "Bir sayının 2 katının 7 fazlası 31'dir. Bu sayı kaçtır?", c: "12", v: {}, z: "orta", alt: "sayi_problemi", konu: 11, level: 1 },
            { id: "11_1_002", s: "Bir sayının 5 eksiğinin 3 katı 21'dir. Bu sayı kaçtır?", c: "12", v: {}, z: "orta", alt: "sayi_problemi", konu: 11, level: 1 },
            { id: "11_1_003", s: "Ardışık iki sayının toplamı 45'tir. Küçük sayı kaçtır?", c: "22", v: {}, z: "orta", alt: "ardisik", konu: 11, level: 1 },
            { id: "11_1_004", s: "Ardışık üç sayının toplamı 60'tır. Ortanca sayı kaçtır?", c: "20", v: {}, z: "orta", alt: "ardisik", konu: 11, level: 1 },
            { id: "11_1_005", s: "Bir sayının 3 katı ile 2 katının toplamı 45'tir. Bu sayı kaçtır?", c: "9", v: {}, z: "orta", alt: "sayi_problemi", konu: 11, level: 1 },
            { id: "11_1_006", s: "Bir sayının yarısı ile çeyreğinin toplamı 18'dir. Bu sayı kaçtır?", c: "24", v: {}, z: "orta", alt: "sayi_problemi", konu: 11, level: 1 }
        ],
        2: [
            { id: "11_2_001", s: "Bir sınıftaki öğrenciler sıralara 2'şer oturursa 3 kişi ayakta kalıyor, 3'er oturursa 2 sıra boş kalıyor. Sınıf mevcudu kaçtır?", c: "15", v: {}, z: "zor", alt: "sira_problemi", konu: 11, level: 2 },
            { id: "11_2_002", s: "Bir sınıftaki öğrenciler sıralara 3'er oturursa 4 kişi ayakta kalıyor, 4'er oturursa 3 sıra boş kalıyor. Sınıf mevcudu kaçtır?", c: "40", v: {}, z: "zor", alt: "sira_problemi", konu: 11, level: 2 },
            { id: "11_2_003", s: "Bir çiftlikte tavşan ve tavukların toplam sayısı 20, toplam ayak sayısı 56 ise kaç tavşan vardır?", c: "8", v: {}, z: "zor", alt: "hayvan_problemi", konu: 11, level: 2 },
            { id: "11_2_004", s: "Bir çiftlikte tavşan ve tavukların toplam sayısı 25, toplam ayak sayısı 70 ise kaç tavşan vardır?", c: "10", v: {}, z: "zor", alt: "hayvan_problemi", konu: 11, level: 2 },
            { id: "11_2_005", s: "5 TL ve 10 TL'lik ürünlerden toplam 15 tane alınıp 100 TL ödeniyor. 5 TL'lik üründen kaç tane alınmıştır?", c: "10", v: {}, z: "zor", alt: "alisveris_problemi", konu: 11, level: 2 },
            { id: "11_2_006", s: "Bir su deposunun 1/4'ü doludur. 30 litre su eklenince deposunun 1/2'si doluyor. Depo kaç litredir?", c: "120", v: {}, z: "zor", alt: "depo_problemi", konu: 11, level: 2 },
            { id: "11_2_007", s: "Bir su deposunun 1/3'ü doludur. 20 litre su eklenince deposunun 1/2'si doluyor. Depo kaç litredir?", c: "120", v: {}, z: "zor", alt: "depo_problemi", konu: 11, level: 2 },
            { id: "11_2_008", s: "Bir baba 40, çocuğu 10 yaşındadır. Kaç yıl sonra babanın yaşı çocuğun yaşının 3 katı olur?", c: "5", v: {}, z: "zor", alt: "yas_problemi", konu: 11, level: 2 },
            { id: "11_2_009", s: "Bir baba 45, çocuğu 9 yaşındadır. Kaç yıl sonra babanın yaşı çocuğun yaşının 4 katı olur?", c: "3", v: {}, z: "zor", alt: "yas_problemi", konu: 11, level: 2 },
            { id: "11_2_010", s: "İki sayının toplamı 50, farkı 10 ise büyük sayı kaçtır?", c: "30", v: {}, z: "orta", alt: "iki_sayi", konu: 11, level: 2 }
        ]
    },

    // ========== 12. KONU: SAYI PROBLEMLERİ ==========
    12: {
        0: [
            { id: "12_0_001", s: "Bir sayının 3 katı 24'tür. Bu sayı kaçtır?", c: "8", v: {}, z: "kolay", alt: "kat", konu: 12, level: 0 },
            { id: "12_0_002", s: "Bir sayının 5 katının 2 fazlası 27'dir. Bu sayı kaçtır?", c: "5", v: {}, z: "kolay", alt: "kat", konu: 12, level: 0 },
            { id: "12_0_003", s: "Bir sayının 2 katının 3 eksiği 13'tür. Bu sayı kaçtır?", c: "8", v: {}, z: "orta", alt: "kat", konu: 12, level: 0 },
            { id: "12_0_004", s: "Ardışık iki sayının toplamı 35'tir. Büyük sayı kaçtır?", c: "18", v: {}, z: "kolay", alt: "ardisik", konu: 12, level: 0 },
            { id: "12_0_005", s: "Ardışık iki sayının toplamı 43'tür. Küçük sayı kaçtır?", c: "21", v: {}, z: "kolay", alt: "ardisik", konu: 12, level: 0 },
            { id: "12_0_006", s: "Ardışık üç sayının toplamı 42'dir. Ortanca sayı kaçtır?", c: "14", v: {}, z: "orta", alt: "ardisik", konu: 12, level: 0 },
            { id: "12_0_007", s: "Ardışık üç çift sayının toplamı 30'dur. En küçük sayı kaçtır?", c: "8", v: {}, z: "orta", alt: "ardisik", konu: 12, level: 0 }
        ],
        1: [
            { id: "12_1_001", s: "İki sayının toplamı 40, farkı 10 ise büyük sayı kaçtır?", c: "25", v: {}, z: "orta", alt: "iki_sayi", konu: 12, level: 1 },
            { id: "12_1_002", s: "İki sayının toplamı 56, farkı 12 ise küçük sayı kaçtır?", c: "22", v: {}, z: "orta", alt: "iki_sayi", konu: 12, level: 1 },
            { id: "12_1_003", s: "İki sayıdan biri diğerinin 3 katıdır. Toplamları 48 ise küçük sayı kaçtır?", c: "12", v: {}, z: "orta", alt: "iki_sayi", konu: 12, level: 1 },
            { id: "12_1_004", s: "İki sayıdan biri diğerinin 2 katından 5 fazladır. Toplamları 35 ise küçük sayı kaçtır?", c: "10", v: {}, z: "zor", alt: "iki_sayi", konu: 12, level: 1 },
            { id: "12_1_005", s: "Bir sayının 4 fazlasının 3 katı 39'dur. Bu sayı kaçtır?", c: "9", v: {}, z: "orta", alt: "denklem", konu: 12, level: 1 },
            { id: "12_1_006", s: "Bir sayının 2 eksiğinin 5 katı 45'tir. Bu sayı kaçtır?", c: "11", v: {}, z: "orta", alt: "denklem", konu: 12, level: 1 },
            { id: "12_1_007", s: "Hangi sayının yarısının 3 fazlası 12'dir?", c: "18", v: {}, z: "orta", alt: "denklem", konu: 12, level: 1 }
        ],
        2: [
            { id: "12_2_001", s: "Bir sınıftaki öğrenciler sıralara 2'şer oturursa 3 kişi ayakta kalıyor, 3'er oturursa 2 sıra boş kalıyor. Sınıf mevcudu kaçtır?", c: "15", v: {}, z: "zor", alt: "sira_problemi", konu: 12, level: 2 },
            { id: "12_2_002", s: "Bir çiftlikte toplam 20 hayvan vardır. Tavşan ve tavukların toplam ayak sayısı 56'dır. Kaç tavşan vardır?", c: "8", v: {}, z: "zor", alt: "hayvan_problemi", konu: 12, level: 2 },
            { id: "12_2_003", s: "Bir baba 40, çocuğu 10 yaşındadır. Kaç yıl sonra babanın yaşı çocuğun yaşının 3 katı olur?", c: "5", v: {}, z: "zor", alt: "yas_problemi", konu: 12, level: 2 },
            { id: "12_2_004", s: "Bir baba 45, çocuğu 9 yaşındadır. Kaç yıl sonra babanın yaşı çocuğun yaşının 4 katı olur?", c: "3", v: {}, z: "zor", alt: "yas_problemi", konu: 12, level: 2 },
            { id: "12_2_005", s: "10 TL ve 20 TL'lik biletlerden toplam 15 adet satılıp 200 TL gelir elde ediliyor. 10 TL'lik biletten kaç adet satılmıştır?", c: "10", v: {}, z: "zor", alt: "bilet_problemi", konu: 12, level: 2 },
            { id: "12_2_006", s: "5 TL ve 8 TL'lik kalemlerden toplam 20 adet alınıp 124 TL ödeniyor. 5 TL'lik kalemden kaç adet alınmıştır?", c: "12", v: {}, z: "zor", alt: "alisveris_problemi", konu: 12, level: 2 },
            { id: "12_2_007", s: "Bir öğrenci 60 soruluk sınavda 40 doğru, 12 yanlış yapıyor. 4 yanlış 1 doğruyu götürüyorsa neti kaçtır?", c: "37", v: {}, z: "orta", alt: "net_problemi", konu: 12, level: 2 },
            { id: "12_2_008", s: "Bir sayıya 15 eklenirse 2 katına eşit oluyor. Bu sayı kaçtır?", c: "15", v: {}, z: "orta", alt: "denklem", konu: 12, level: 2 },
            { id: "12_2_009", s: "Bir sayının 3 katı ile 5 katının toplamı 64'tür. Bu sayı kaçtır?", c: "8", v: {}, z: "orta", alt: "denklem", konu: 12, level: 2 },
            { id: "12_2_010", s: "İki sayının çarpımı 30, toplamları 11 ise kareleri toplamı kaçtır?", c: "61", v: {}, z: "zor", alt: "iki_sayi", konu: 12, level: 2 }
        ]
    },

    // ========== 13. KONU: HAREKET PROBLEMLERİ ==========
    13: {
        0: [
            { id: "13_0_001", s: "60 km/sa hızla 3 saat giden araç kaç km yol alır?", c: "180", v: {}, z: "kolay", alt: "temel", konu: 13, level: 0 },
            { id: "13_0_002", s: "80 km/sa hızla 4 saat giden araç kaç km yol alır?", c: "320", v: {}, z: "kolay", alt: "temel", konu: 13, level: 0 },
            { id: "13_0_003", s: "400 km'lik yolu 5 saatte alan aracın hızı kaç km/sa'dir?", c: "80", v: {}, z: "kolay", alt: "temel", konu: 13, level: 0 },
            { id: "13_0_004", s: "90 km/sa hızla giden araç 360 km'lik yolu kaç saatte alır?", c: "4", v: {}, z: "kolay", alt: "temel", konu: 13, level: 0 },
            { id: "13_0_005", s: "120 km'lik yolu 2 saatte alan araç kaç km/sa hızla gitmiştir?", c: "60", v: {}, z: "kolay", alt: "temel", konu: 13, level: 0 },
            { id: "13_0_006", s: "50 m/dk hızla 10 dakikada kaç metre yol alınır?", c: "500", v: {}, z: "kolay", alt: "temel", konu: 13, level: 0 }
        ],
        1: [
            { id: "13_1_001", s: "Aralarında 300 km olan iki araç 60 km/sa ve 90 km/sa hızla birbirine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?", c: "2", v: {}, z: "orta", alt: "karsilasma", konu: 13, level: 1 },
            { id: "13_1_002", s: "Aralarında 400 km olan iki araç 80 km/sa ve 120 km/sa hızla birbirine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?", c: "2", v: {}, z: "orta", alt: "karsilasma", konu: 13, level: 1 },
            { id: "13_1_003", s: "80 km/sa ve 100 km/sa hızla karşılıklı gelen iki araç 3 saat sonra karşılaşıyor. Başlangıçta aralarındaki mesafe kaç km'dir?", c: "540", v: {}, z: "orta", alt: "karsilasma", konu: 13, level: 1 },
            { id: "13_1_004", s: "60 km/sa ve 90 km/sa hızla aynı yönde hareket eden iki araçtan hızlı olan, yavaş olanı 2 saatte yakalıyorsa başlangıçta aralarındaki mesafe kaç km'dir?", c: "60", v: {}, z: "orta", alt: "yetisme", konu: 13, level: 1 },
            { id: "13_1_005", s: "Aralarında 120 km olan iki araç aynı yönde hareket ediyor. Arkadaki aracın hızı 100 km/sa, öndekinin hızı 70 km/sa ise arkadaki araç kaç saat sonra yakalar?", c: "4", v: {}, z: "orta", alt: "yetisme", konu: 13, level: 1 }
        ],
        2: [
            { id: "13_2_001", s: "Bir araç yolun ilk yarısını 40 km/sa, ikinci yarısını 60 km/sa hızla gidiyor. Ortalama hızı kaç km/sa'dir?", c: "48", v: {}, z: "zor", alt: "ortalama_hiz", konu: 13, level: 2 },
            { id: "13_2_002", s: "Bir araç 2 saat 60 km/sa, 3 saat 80 km/sa hızla gidiyor. Ortalama hızı kaç km/sa'dir?", c: "72", v: {}, z: "zor", alt: "ortalama_hiz", konu: 13, level: 2 },
            { id: "13_2_003", s: "Bir araç 80 km/sa hızla giderken hızını 20 km/sa artırıp aynı yolu 1 saat erken tamamlıyor. Yol kaç km'dir?", c: "400", v: {}, z: "zor", alt: "problem", konu: 13, level: 2 },
            { id: "13_2_004", s: "Bir tren 400 m uzunluğundaki tüneli 20 saniyede geçiyor. Trenin boyu 200 m ise hızı kaç km/sa'dir?", c: "108", v: {}, z: "zor", alt: "tren_problemi", konu: 13, level: 2 },
            { id: "13_2_005", s: "Akıntı hızı 3 km/sa olan nehirde, motorun durgun sudaki hızı 15 km/sa'dir. 36 km'lik yolu gidip dönmek kaç saat sürer?", c: "5", v: {}, z: "zor", alt: "akinti", konu: 13, level: 2 },
            { id: "13_2_006", s: "A şehrinden B şehrine 60 km/sa hızla giden bir araç, aynı yolu 80 km/sa hızla dönüyor. Gidiş-dönüş ortalama hızı kaç km/sa'dir?", c: "480/7", v: {}, z: "zor", alt: "ortalama_hiz", konu: 13, level: 2 },
            { id: "13_2_007", s: "Bir araç hızını 30 km/sa artırınca 300 km'lik yolu 2 saat erken tamamlıyor. Aracın normal hızı kaç km/sa'dir?", c: "60", v: {}, z: "zor", alt: "problem", konu: 13, level: 2 }
        ]
    },

    // ========== 14. KONU: İŞÇİ - HAVUZ ==========
    14: {
        0: [
            { id: "14_0_001", s: "Bir işçi bir işi 12 günde bitiriyor. 1 günde işin kaçta kaçını yapar?", c: "1/12", v: {}, z: "kolay", alt: "tek_isci", konu: 14, level: 0 },
            { id: "14_0_002", s: "Bir işçi bir işi 15 günde bitiriyor. 3 günde işin kaçta kaçını yapar?", c: "1/5", v: {}, z: "kolay", alt: "tek_isci", konu: 14, level: 0 },
            { id: "14_0_003", s: "4 işçi bir işi 10 günde bitiriyor. 1 işçi aynı işi kaç günde bitirir?", c: "40", v: {}, z: "kolay", alt: "tek_isci", konu: 14, level: 0 },
            { id: "14_0_004", s: "Bir işçi günde 6 saat çalışarak bir işi 8 günde bitiriyor. Günde 4 saat çalışırsa kaç günde bitirir?", c: "12", v: {}, z: "orta", alt: "tek_isci", konu: 14, level: 0 },
            { id: "14_0_005", s: "Bir işçi bir işin 1/3'ünü 4 günde yapıyorsa, işin tamamını kaç günde yapar?", c: "12", v: {}, z: "orta", alt: "tek_isci", konu: 14, level: 0 }
        ],
        1: [
            { id: "14_1_001", s: "Ali bir işi 6 günde, Veli aynı işi 12 günde bitiriyor. İkisi birlikte kaç günde bitirir?", c: "4", v: {}, z: "orta", alt: "birlikte", konu: 14, level: 1 },
            { id: "14_1_002", s: "A işçisi bir işi 8 günde, B işçisi aynı işi 24 günde bitiriyor. İkisi birlikte kaç günde bitirir?", c: "6", v: {}, z: "orta", alt: "birlikte", konu: 14, level: 1 },
            { id: "14_1_003", s: "A işçisi bir işi 10 günde, B işçisi 15 günde bitiriyor. İkisi birlikte kaç günde bitirir?", c: "6", v: {}, z: "orta", alt: "birlikte", konu: 14, level: 1 },
            { id: "14_1_004", s: "A ve B birlikte bir işi 6 günde, A tek başına 10 günde bitiriyor. B tek başına kaç günde bitirir?", c: "15", v: {}, z: "orta", alt: "birlikte", konu: 14, level: 1 },
            { id: "14_1_005", s: "A ve B birlikte bir işi 8 günde, B tek başına 24 günde bitiriyor. A tek başına kaç günde bitirir?", c: "12", v: {}, z: "orta", alt: "birlikte", konu: 14, level: 1 }
        ],
        2: [
            { id: "14_2_001", s: "6 işçi bir işi 12 günde yapıyor. 4 gün çalıştıktan sonra 2 işçi ayrılıyor. Kalan iş kaç günde biter?", c: "12", v: {}, z: "zor", alt: "isci_degisim", konu: 14, level: 2 },
            { id: "14_2_002", s: "8 işçi bir işi 15 günde yapıyor. 5 gün çalıştıktan sonra 3 işçi daha katılıyor. Kalan iş kaç günde biter?", c: "8", v: {}, z: "zor", alt: "isci_degisim", konu: 14, level: 2 },
            { id: "14_2_003", s: "A musluğu bir havuzu 4 saatte, B musluğu 6 saatte dolduruyor. İkisi birlikte kaç saatte doldurur?", c: "12/5", v: {}, z: "orta", alt: "havuz", konu: 14, level: 2 },
            { id: "14_2_004", s: "A musluğu havuzu 3 saatte dolduruyor, B musluğu aynı havuzu 6 saatte boşaltıyor. İkisi birlikte açılırsa havuz kaç saatte dolar?", c: "6", v: {}, z: "zor", alt: "havuz", konu: 14, level: 2 },
            { id: "14_2_005", s: "A musluğu havuzu 5 saatte, B musluğu 10 saatte dolduruyor. C musluğu dolu havuzu 20 saatte boşaltıyor. Üçü birlikte açılırsa havuz kaç saatte dolar?", c: "4", v: {}, z: "zor", alt: "havuz", konu: 14, level: 2 },
            { id: "14_2_006", s: "A işçisi B'nin 2 katı hızla çalışıyor. B işçisi bir işi 18 günde bitiriyorsa, ikisi birlikte kaç günde bitirir?", c: "6", v: {}, z: "zor", alt: "mantik", konu: 14, level: 2 },
            { id: "14_2_007", s: "A işçisi B'nin 3 katı hızla çalışıyor. İkisi birlikte bir işi 6 günde bitiriyorsa, B tek başına kaç günde bitirir?", c: "24", v: {}, z: "zor", alt: "mantik", konu: 14, level: 2 }
        ]
    },

    // ========== 15. KONU: KARIŞIM ==========
    15: {
        0: [
            { id: "15_0_001", s: "Tuz oranı %20 olan 50 kg karışımda kaç kg tuz vardır?", c: "10", v: {}, z: "kolay", alt: "tuz_oran", konu: 15, level: 0 },
            { id: "15_0_002", s: "40 kg karışımda 8 kg tuz varsa tuz oranı % kaçtır?", c: "20", v: {}, z: "kolay", alt: "tuz_oran", konu: 15, level: 0 },
            { id: "15_0_003", s: "Tuz oranı %30 olan 60 kg karışımda kaç kg tuz vardır?", c: "18", v: {}, z: "kolay", alt: "tuz_oran", konu: 15, level: 0 },
            { id: "15_0_004", s: "80 kg karışımda 20 kg tuz varsa tuz oranı % kaçtır?", c: "25", v: {}, z: "kolay", alt: "tuz_oran", konu: 15, level: 0 },
            { id: "15_0_005", s: "Tuz oranı %10 olan 30 kg karışımda kaç kg tuz vardır?", c: "3", v: {}, z: "kolay", alt: "tuz_oran", konu: 15, level: 0 },
            { id: "15_0_006", s: "Tuz oranı %25 olan 40 kg karışıma 10 kg su eklenirse yeni tuz oranı % kaç olur?", c: "20", v: {}, z: "orta", alt: "su_ekleme", konu: 15, level: 0 }
        ],
        1: [
            { id: "15_1_001", s: "%20'lik 30 kg tuzlu su ile %30'luk 20 kg tuzlu su karıştırılırsa yeni karışımın tuz oranı % kaç olur?", c: "24", v: {}, z: "orta", alt: "karistirma", konu: 15, level: 1 },
            { id: "15_1_002", s: "%15'lik 40 kg tuzlu su ile %25'lik 60 kg tuzlu su karıştırılırsa yeni karışımın tuz oranı % kaç olur?", c: "21", v: {}, z: "orta", alt: "karistirma", konu: 15, level: 1 },
            { id: "15_1_003", s: "%10'luk 50 kg tuzlu su ile %20'lik 50 kg tuzlu su karıştırılırsa yeni karışımın tuz oranı % kaç olur?", c: "15", v: {}, z: "orta", alt: "karistirma", konu: 15, level: 1 },
            { id: "15_1_004", s: "%30'luk tuzlu su ile %10'luk tuzlu su eşit miktarda karıştırılırsa yeni tuz oranı % kaç olur?", c: "20", v: {}, z: "orta", alt: "karistirma", konu: 15, level: 1 },
            { id: "15_1_005", s: "%20'lik 60 kg tuzlu suya 10 kg tuz eklenirse yeni tuz oranı % kaç olur?", c: "28.57", v: {}, z: "orta", alt: "tuz_ekleme", konu: 15, level: 1 }
        ],
        2: [
            { id: "15_2_001", s: "%10'luk 80 kg tuzlu suyun 20 kg'ı buharlaştırılırsa yeni tuz oranı % kaç olur?", c: "13.33", v: {}, z: "zor", alt: "buharlastirma", konu: 15, level: 2 },
            { id: "15_2_002", s: "%8'lik 50 kg tuzlu suyun yarısı buharlaştırılırsa yeni tuz oranı % kaç olur?", c: "16", v: {}, z: "zor", alt: "buharlastirma", konu: 15, level: 2 },
            { id: "15_2_003", s: "%25'lik 40 kg tuzlu suya kaç kg su eklenirse tuz oranı %10 olur?", c: "60", v: {}, z: "zor", alt: "su_ekleme", konu: 15, level: 2 },
            { id: "15_2_004", s: "%30'luk ve %10'luk tuzlu sulardan %20'lik 100 kg karışım elde etmek için %30'luktan kaç kg alınmalıdır?", c: "50", v: {}, z: "zor", alt: "karisim_orani", konu: 15, level: 2 },
            { id: "15_2_005", s: "%40'lık ve %20'lik tuzlu sulardan %25'lik 80 kg karışım elde etmek için %40'lıktan kaç kg alınmalıdır?", c: "20", v: {}, z: "zor", alt: "karisim_orani", konu: 15, level: 2 },
            { id: "15_2_006", s: "%15'lik 60 kg tuzlu suyun kaç kg'ı buharlaştırılırsa tuz oranı %20 olur?", c: "15", v: {}, z: "zor", alt: "buharlastirma", konu: 15, level: 2 },
            { id: "15_2_007", s: "%12'lik 40 kg tuzlu suya kaç kg tuz eklenirse tuz oranı %20 olur?", c: "4", v: {}, z: "zor", alt: "tuz_ekleme", konu: 15, level: 2 }
        ]
    },

    // ========== 16. KONU: KÜMELER ==========
    16: {
        0: [
            { id: "16_0_001", s: "A = {a, b, c, d} kümesinin eleman sayısı kaçtır?", c: "4", v: {}, z: "kolay", alt: "kume_kavram", konu: 16, level: 0 },
            { id: "16_0_002", s: "5 elemanlı bir kümenin kaç tane alt kümesi vardır?", c: "32", v: {}, z: "kolay", alt: "alt_kume", konu: 16, level: 0 },
            { id: "16_0_003", s: "4 elemanlı bir kümenin kaç tane alt kümesi vardır?", c: "16", v: {}, z: "kolay", alt: "alt_kume", konu: 16, level: 0 },
            { id: "16_0_004", s: "3 elemanlı bir kümenin kaç tane öz alt kümesi vardır?", c: "7", v: {}, z: "orta", alt: "alt_kume", konu: 16, level: 0 },
            { id: "16_0_005", s: "Alt küme sayısı 64 olan küme kaç elemanlıdır?", c: "6", v: {}, z: "orta", alt: "alt_kume", konu: 16, level: 0 },
            { id: "16_0_006", s: "6 elemanlı bir kümenin 2 elemanlı alt küme sayısı kaçtır?", c: "15", v: {}, z: "orta", alt: "alt_kume", konu: 16, level: 0 }
        ],
        1: [
            { id: "16_1_001", s: "s(A)=12, s(B)=9, s(A∩B)=4 ise s(A∪B) kaçtır?", c: "17", v: {}, z: "orta", alt: "birlesim", konu: 16, level: 1 },
            { id: "16_1_002", s: "s(A)=15, s(B)=10, s(A∪B)=20 ise s(A∩B) kaçtır?", c: "5", v: {}, z: "orta", alt: "birlesim", konu: 16, level: 1 },
            { id: "16_1_003", s: "A ⊂ B, s(A)=5, s(B)=12 ise s(B-A) kaçtır?", c: "7", v: {}, z: "orta", alt: "fark", konu: 16, level: 1 },
            { id: "16_1_004", s: "s(A)=8, s(B)=6, s(A∩B)=3 ise sadece A'da bulunan eleman sayısı kaçtır?", c: "5", v: {}, z: "orta", alt: "fark", konu: 16, level: 1 },
            { id: "16_1_005", s: "s(A)=10, s(B)=7, s(A-B)=4 ise s(A∩B) kaçtır?", c: "6", v: {}, z: "orta", alt: "kesisim", konu: 16, level: 1 }
        ],
        2: [
            { id: "16_2_001", s: "40 kişilik bir sınıfta 25 kişi matematik, 20 kişi fen kursuna gidiyor. 8 kişi her iki kursa da gidiyor. Kaç kişi hiçbir kursa gitmiyor?", c: "3", v: {}, z: "zor", alt: "problem", konu: 16, level: 2 },
            { id: "16_2_002", s: "50 kişilik bir grupta 30 kişi A gazetesini, 25 kişi B gazetesini okuyor. 10 kişi her iki gazeteyi de okuyorsa, sadece A gazetesini okuyan kaç kişidir?", c: "20", v: {}, z: "orta", alt: "problem", konu: 16, level: 2 },
            { id: "16_2_003", s: "60 kişilik bir sınıfta 35 kişi basketbol, 25 kişi voleybol oynuyor. 10 kişi her iki sporu da yapıyorsa, sadece bir spor yapan kaç kişidir?", c: "40", v: {}, z: "zor", alt: "problem", konu: 16, level: 2 },
            { id: "16_2_004", s: "s(A)=s(B)=8 ise s(A∪B) en çok kaç olabilir?", c: "16", v: {}, z: "orta", alt: "mantik", konu: 16, level: 2 },
            { id: "16_2_005", s: "s(A)=s(B)=6 ise s(A∪B) en az kaç olabilir?", c: "6", v: {}, z: "orta", alt: "mantik", konu: 16, level: 2 },
            { id: "16_2_006", s: "Bir grupta İngilizce bilenler 18, Almanca bilenler 12, her iki dili bilenler 5, hiçbirini bilmeyenler 8'dir. Grup kaç kişidir?", c: "33", v: {}, z: "zor", alt: "problem", konu: 16, level: 2 },
            { id: "16_2_007", s: "s(A)=10, s(B)=8, s(A∪B)=15 ise s(A∩B) kaçtır?", c: "3", v: {}, z: "orta", alt: "kesisim", konu: 16, level: 2 }
        ]
    },

    // ========== 17. KONU: OLASILIK ==========
    17: {
        0: [
            { id: "17_0_001", s: "Bir zar atıldığında çift sayı gelme olasılığı kaçtır?", c: "1/2", v: {}, z: "kolay", alt: "temel", konu: 17, level: 0 },
            { id: "17_0_002", s: "Bir zar atıldığında asal sayı gelme olasılığı kaçtır?", c: "1/2", v: {}, z: "kolay", alt: "temel", konu: 17, level: 0 },
            { id: "17_0_003", s: "Bir madeni para 3 kez atıldığında tüm durum sayısı kaçtır?", c: "8", v: {}, z: "kolay", alt: "temel", konu: 17, level: 0 },
            { id: "17_0_004", s: "Bir madeni para 4 kez atıldığında tüm durum sayısı kaçtır?", c: "16", v: {}, z: "kolay", alt: "temel", konu: 17, level: 0 },
            { id: "17_0_005", s: "Bir olayın olma olasılığı 3/5 ise olmama olasılığı kaçtır?", c: "2/5", v: {}, z: "kolay", alt: "temel", konu: 17, level: 0 },
            { id: "17_0_006", s: "Olasılık değeri aşağıdakilerden hangisi olamaz? (A) 1/2 (B) 0 (C) 1 (D) -0.5", c: "-0.5", v: {}, z: "kolay", alt: "temel", konu: 17, level: 0 }
        ],
        1: [
            { id: "17_1_001", s: "İki zar atıldığında toplamın 7 olma olasılığı kaçtır?", c: "1/6", v: {}, z: "orta", alt: "zar", konu: 17, level: 1 },
            { id: "17_1_002", s: "İki zar atıldığında toplamın 10 olma olasılığı kaçtır?", c: "1/12", v: {}, z: "orta", alt: "zar", konu: 17, level: 1 },
            { id: "17_1_003", s: "İki zar atıldığında çarpımın çift olma olasılığı kaçtır?", c: "3/4", v: {}, z: "orta", alt: "zar", konu: 17, level: 1 },
            { id: "17_1_004", s: "İki zar atıldığında gelen sayıların aynı olma olasılığı kaçtır?", c: "1/6", v: {}, z: "kolay", alt: "zar", konu: 17, level: 1 },
            { id: "17_1_005", s: "Bir torbada 5 kırmızı, 3 mavi top vardır. Çekilen topun kırmızı olma olasılığı kaçtır?", c: "5/8", v: {}, z: "kolay", alt: "top", konu: 17, level: 1 },
            { id: "17_1_006", s: "Bir torbada 4 kırmızı, 3 mavi top vardır. Art arda 2 top çekiliyor (geri atılmadan). İkisinin de kırmızı olma olasılığı kaçtır?", c: "2/7", v: {}, z: "orta", alt: "top", konu: 17, level: 1 },
            { id: "17_1_007", s: "Bir torbada 3 kırmızı, 2 mavi top vardır. Çekilen top geri atılıp 2 top çekiliyor. İkisinin de kırmızı olma olasılığı kaçtır?", c: "9/25", v: {}, z: "orta", alt: "top", konu: 17, level: 1 },
            { id: "17_1_008", s: "52'lik bir desteden çekilen bir kartın maça olma olasılığı kaçtır?", c: "1/4", v: {}, z: "kolay", alt: "kart", konu: 17, level: 1 },
            { id: "17_1_009", s: "52'lik bir desteden çekilen bir kartın as olma olasılığı kaçtır?", c: "1/13", v: {}, z: "kolay", alt: "kart", konu: 17, level: 1 }
        ],
        2: [
            { id: "17_2_001", s: "A olayının olasılığı 1/2, B olayının olasılığı 1/3'tür. A ve B bağımsız ise A∩B olasılığı kaçtır?", c: "1/6", v: {}, z: "orta", alt: "bagimsiz", konu: 17, level: 2 },
            { id: "17_2_002", s: "Bir hedefi Ali'nin vurma olasılığı 2/3, Veli'nin vurma olasılığı 3/4'tür. İkisi de bağımsız atış yaparsa hedefin vurulma olasılığı kaçtır?", c: "11/12", v: {}, z: "zor", alt: "bagimsiz", konu: 17, level: 2 },
            { id: "17_2_003", s: "Bir torbada 4 kırmızı, 3 mavi, 2 beyaz top vardır. Art arda 3 top çekiliyor (geri atılmadan). Sırayla kırmızı, mavi, beyaz gelme olasılığı kaçtır?", c: "1/21", v: {}, z: "zor", alt: "yeni_nesil", konu: 17, level: 2 },
            { id: "17_2_004", s: "İki zar birlikte atılıyor. Zarlardan en az birinin 6 gelme olasılığı kaçtır?", c: "11/36", v: {}, z: "orta", alt: "yeni_nesil", konu: 17, level: 2 },
            { id: "17_2_005", s: "Bir torbada 5 kırmızı, 5 mavi top vardır. En az kaç top çekilirse kesinlikle bir kırmızı top gelir?", c: "6", v: {}, z: "orta", alt: "yeni_nesil", konu: 17, level: 2 },
            { id: "17_2_006", s: "Bir çift zar atılıyor. Zarların toplamının 8'den büyük olma olasılığı kaçtır?", c: "5/18", v: {}, z: "zor", alt: "zar", konu: 17, level: 2 }
        ]
    },

    // ========== 18. KONU: SAYISAL MANTIK ==========
    18: {
        0: [
            { id: "18_0_001", s: "2, 4, 6, 8, ? (Örüntüyü tamamlayın)", c: "10", v: {}, z: "kolay", alt: "oruntu", konu: 18, level: 0 },
            { id: "18_0_002", s: "3, 6, 9, 12, ? (Örüntüyü tamamlayın)", c: "15", v: {}, z: "kolay", alt: "oruntu", konu: 18, level: 0 },
            { id: "18_0_003", s: "5, 10, 15, 20, ? (Örüntüyü tamamlayın)", c: "25", v: {}, z: "kolay", alt: "oruntu", konu: 18, level: 0 },
            { id: "18_0_004", s: "1, 3, 5, 7, ? (Örüntüyü tamamlayın)", c: "9", v: {}, z: "kolay", alt: "oruntu", konu: 18, level: 0 },
            { id: "18_0_005", s: "2, 5, 8, 11, ? (Örüntüyü tamamlayın)", c: "14", v: {}, z: "kolay", alt: "oruntu", konu: 18, level: 0 }
        ],
        1: [
            { id: "18_1_001", s: "2, 5, 10, 17, ? (Örüntüyü tamamlayın)", c: "26", v: {}, z: "orta", alt: "oruntu", konu: 18, level: 1 },
            { id: "18_1_002", s: "3, 6, 11, 18, ? (Örüntüyü tamamlayın)", c: "27", v: {}, z: "orta", alt: "oruntu", konu: 18, level: 1 },
            { id: "18_1_003", s: "1, 4, 9, 16, ? (Örüntüyü tamamlayın)", c: "25", v: {}, z: "orta", alt: "oruntu", konu: 18, level: 1 },
            { id: "18_1_004", s: "1, 1, 2, 3, 5, 8, ? (Örüntüyü tamamlayın)", c: "13", v: {}, z: "orta", alt: "oruntu", konu: 18, level: 1 },
            { id: "18_1_005", s: "16, 8, 4, 2, ? (Örüntüyü tamamlayın)", c: "1", v: {}, z: "orta", alt: "oruntu", konu: 18, level: 1 },
            { id: "18_1_006", s: "Bir tabloda her satırdaki ilk iki sayının çarpımı üçüncü sayıyı veriyor. 4, 5, ?", c: "20", v: {}, z: "orta", alt: "tablo", konu: 18, level: 1 },
            { id: "18_1_007", s: "Bir tabloda her sütundaki sayıların toplamı 15'tir. 4, 7, ?", c: "4", v: {}, z: "orta", alt: "tablo", konu: 18, level: 1 }
        ],
        2: [
            { id: "18_2_001", s: "Bir şifreleme sisteminde her rakam 3 ile çarpılıp 1 ekleniyor. 4'ün şifresi nedir?", c: "13", v: {}, z: "zor", alt: "sifre", konu: 18, level: 2 },
            { id: "18_2_002", s: "Bir şifreleme sisteminde her harf alfabede 3 sonraki harfe dönüşüyor. 'A' harfinin şifresi nedir?", c: "D", v: {}, z: "zor", alt: "sifre", konu: 18, level: 2 },
            { id: "18_2_003", s: "Bugün günlerden Pazartesi ise 230 gün sonra hangi gündür?", c: "Perşembe", v: {}, z: "zor", alt: "dongu", konu: 18, level: 2 },
            { id: "18_2_004", s: "Saat şu an 15:00 ise 250 saat sonra saat kaç olur?", c: "13:00", v: {}, z: "zor", alt: "dongu", konu: 18, level: 2 },
            { id: "18_2_005", s: "Ali, Bora'dan uzundur. Bora, Cem'den kısadır. Cem, Deniz'den uzundur. En uzun kimdir?", c: "Ali", v: {}, z: "zor", alt: "mantiksal", konu: 18, level: 2 },
            { id: "18_2_006", s: "Bir sınavda her doğru 5 puan, her yanlış -2 puandır. 20 soruluk sınavda 60 puan alan bir öğrenci kaç yanlış yapmıştır?", c: "5", v: {}, z: "zor", alt: "mantiksal", konu: 18, level: 2 },
            { id: "18_2_007", s: "2, 3, 5, 7, 11, ? (Asal sayılar)", c: "13", v: {}, z: "orta", alt: "oruntu", konu: 18, level: 2 },
            { id: "18_2_008", s: "Bir otoparkta 24 araç vardır. Arabaların 2/3'ü beyaz, 1/4'ü siyah, gerisi kırmızıdır. Kaç kırmızı araç vardır?", c: "2", v: {}, z: "zor", alt: "mantiksal", konu: 18, level: 2 }
        ]
    },

    // ========== 19. KONU: VERİ, GRAFİK VE TABLO ==========
    19: {
        0: [
            { id: "19_0_001", s: "Bir tabloda Pazartesi {a}, Salı {b}, Çarşamba {c} kitap okunmuştur. 3 günde toplam kaç kitap okunmuştur?", c: "{a}+{b}+{c}", v: { a: [10, 50], b: [10, 50], c: [10, 50] }, z: "kolay", alt: "tablo_toplama", konu: 19, level: 0 },
            { id: "19_0_002", s: "Bir sınıfın not tablosunda Ali {a}, Veli {b}, Can {c} almıştır. En yüksek notu kim almıştır?", c: "Math.max({a},{b},{c})=={a}?'Ali':Math.max({a},{b},{c})=={b}?'Veli':'Can'", v: { a: [50, 100], b: [50, 100], c: [50, 100] }, z: "kolay", alt: "tablo_karsilastirma", konu: 19, level: 0 },
            { id: "19_0_003", s: "Bir sınıfın not tablosunda Ayşe {a}, Fatma {b} almıştır. Ayşe, Fatma'dan kaç fazla almıştır?", c: "{a}-{b}", v: { a: [60, 100], b: [50, 80] }, z: "kolay", alt: "tablo_fark", konu: 19, level: 0 },
            { id: "19_0_004", s: "Bir sütun grafiğinde Ocak {a}, Şubat {b} ton satış yapılmıştır. İki aylık toplam satış kaç tondur?", c: "{a}+{b}", v: { a: [20, 80], b: [20, 80] }, z: "kolay", alt: "sutun_grafik", konu: 19, level: 0 },
            { id: "19_0_005", s: "Bir daire grafiğinde %{p}'lik dilimin merkez açısı kaç derecedir?", c: "{p}*3.6", v: { p: [10, 50] }, z: "kolay", alt: "daire_grafik", konu: 19, level: 0 }
        ],
        1: [
            { id: "19_1_001", s: "Bir tabloda A ürünü {a} TL, B ürünü {b} TL, C ürünü {c} TL ise üç ürünün ortalama fiyatı kaç TL'dir?", c: "Math.round(({a}+{b}+{c})/3)", v: { a: [20, 100], b: [20, 100], c: [20, 100] }, z: "orta", alt: "ortalama", konu: 19, level: 1 },
            { id: "19_1_002", s: "Bir sınıfın yaş tablosunda {a} kişi {x} yaşında, {b} kişi {y} yaşında, {c} kişi {z} yaşındadır. Sınıfın yaş ortalaması kaçtır?", c: "Math.round(({a}*{x}+{b}*{y}+{c}*{z})/({a}+{b}+{c}))", v: { a: [3, 8], x: [12, 15], b: [4, 10], y: [13, 16], c: [5, 12], z: [14, 17] }, z: "orta", alt: "agirlikli_ortalama", konu: 19, level: 1 },
            { id: "19_1_003", s: "Bir sütun grafiğinde en yüksek sütun {a}, en düşük sütun {b} ise fark kaçtır?", c: "{a}-{b}", v: { a: [40, 100], b: [10, 30] }, z: "orta", alt: "grafik_fark", konu: 19, level: 1 },
            { id: "19_1_004", s: "Bir daire grafiğinde A dilimi {a}°, B dilimi {b}°, C dilimi {c}° ise A diliminin yüzdesi kaçtır?", c: "Math.round({a}*100/360)", v: { a: [30, 180], b: [30, 180], c: [30, 180] }, z: "orta", alt: "daire_yuzde", konu: 19, level: 1 },
            { id: "19_1_005", s: "Bir tabloda verilen sayılar: {a}, {b}, {c}, {d}, {e}. Bu veri grubunun medyanı (ortancası) kaçtır?", c: "medyan({a},{b},{c},{d},{e})", v: { a: [10, 100], b: [10, 100], c: [10, 100], d: [10, 100], e: [10, 100] }, z: "orta", alt: "medyan", konu: 19, level: 1 },
            { id: "19_1_006", s: "Bir tabloda verilen sayılar: {a}, {b}, {c}, {d}, {e}. Bu veri grubunun modu (tepe değeri) kaçtır?", c: "mod({a},{b},{c},{d},{e})", v: { a: [10, 100], b: [10, 100], c: [10, 100], d: [10, 100], e: [10, 100] }, z: "orta", alt: "mod", konu: 19, level: 1 }
        ],
        2: [
            { id: "19_2_001", s: "Bir sınıfta {a} kişi matematikten, {b} kişi Türkçe'den başarılıdır. Tabloya göre sadece matematikten başarılı olanların sayısı kaçtır? (her ikisinden başarılı olan {c} kişi)", c: "{a}-{c}", v: { a: [15, 40], b: [15, 40], c: [5, 10] }, z: "zor", alt: "kume_tablo", konu: 19, level: 2 },
            { id: "19_2_002", s: "Bir çizgi grafiğinde Ocak {a}, Şubat {b}, Mart {c}, Nisan {d} satışı verilmiştir. En fazla artış hangi ayda olmuştur?", c: "maxArtisAyi({a},{b},{c},{d})", v: { a: [20, 60], b: [30, 80], c: [25, 70], d: [40, 90] }, z: "zor", alt: "cizgi_grafik", konu: 19, level: 2 },
            { id: "19_2_003", s: "Bir tabloda A, B, C, D ürünlerinin fiyatları verilmiştir: {a}, {b}, {c}, ?. Ortalamaları {o} ise D ürününün fiyatı kaçtır?", c: "4*{o}-({a}+{b}+{c})", v: { a: [20, 50], b: [30, 60], c: [25, 55], o: [30, 70] }, z: "zor", alt: "ortalama_verilmeyen", konu: 19, level: 2 },
            { id: "19_2_004", s: "Bir sınıfın notları: {a}, {b}, {c}, {d}, {e}. Bu notların açıklığı (ranjı) kaçtır?", c: "Math.max({a},{b},{c},{d},{e})-Math.min({a},{b},{c},{d},{e})", v: { a: [30, 90], b: [30, 90], c: [30, 90], d: [30, 90], e: [30, 90] }, z: "zor", alt: "aciklik", konu: 19, level: 2 },
            { id: "19_2_005", s: "Bir histogramda grup aralığı {g} ve frekanslar {f1},{f2},{f3} verilmiştir. Toplam veri sayısı kaçtır?", c: "{f1}+{f2}+{f3}", v: { g: [5, 10], f1: [5, 20], f2: [5, 20], f3: [5, 20] }, z: "zor", alt: "histogram", konu: 19, level: 2 },
            { id: "19_2_006", s: "Bir grafikte A markasının satışı {a}, B markasının satışı {b}, C markasının satışı {c}'dir. Daire grafiğinde B markasının merkez açısı kaç derecedir?", c: "Math.round({b}*360/({a}+{b}+{c}))", v: { a: [20, 100], b: [20, 100], c: [20, 100] }, z: "zor", alt: "daire_grafik_aci", konu: 19, level: 2 },
            { id: "19_2_007", s: "Bir tabloda her satırdaki sayıların toplamı {t}'dir. 1. satır: {a}, {b}, ?. 2. satır: {c}, {d}, ?. ? yerine gelecek sayıların toplamı kaçtır?", c: "2*{t}-({a}+{b}+{c}+{d})", v: { t: [30, 100], a: [5, 30], b: [5, 30], c: [5, 30], d: [5, 30] }, z: "zor", alt: "tablo_verilmeyen", konu: 19, level: 2 }
        ]
    },

    // ========== 20. KONU: GEOMETRİ (TEMEL) ==========
    20: {
        0: [
            { id: "20_0_001", s: "Bir üçgenin iki açısı {a}° ve {b}° ise üçüncü açı kaç derecedir?", c: "180-{a}-{b}", v: { a: [30, 70], b: [30, 70] }, z: "kolay", alt: "ucgen_aci", konu: 20, level: 0 },
            { id: "20_0_002", s: "Bir dikdörtgenin kısa kenarı {a} cm, uzun kenarı {b} cm ise alanı kaç cm²'dir?", c: "{a}*{b}", v: { a: [2, 15], b: [3, 20] }, z: "kolay", alt: "dikdortgen_alan", konu: 20, level: 0 },
            { id: "20_0_003", s: "Bir karenin bir kenarı {a} cm ise alanı kaç cm²'dir?", c: "{a}*{a}", v: { a: [2, 15] }, z: "kolay", alt: "kare_alan", konu: 20, level: 0 },
            { id: "20_0_004", s: "Bir dikdörtgenin kısa kenarı {a} cm, uzun kenarı {b} cm ise çevresi kaç cm'dir?", c: "2*({a}+{b})", v: { a: [2, 15], b: [3, 20] }, z: "kolay", alt: "dikdortgen_cevre", konu: 20, level: 0 },
            { id: "20_0_005", s: "Bir karenin bir kenarı {a} cm ise çevresi kaç cm'dir?", c: "4*{a}", v: { a: [2, 15] }, z: "kolay", alt: "kare_cevre", konu: 20, level: 0 },
            { id: "20_0_006", s: "Bir üçgenin kenar uzunlukları {a} cm, {b} cm, {c} cm ise çevresi kaç cm'dir?", c: "{a}+{b}+{c}", v: { a: [3, 12], b: [4, 15], c: [5, 18] }, z: "kolay", alt: "ucgen_cevre", konu: 20, level: 0 },
            { id: "20_0_007", s: "Bir dikdörtgenin alanı {a} cm², kısa kenarı {b} cm ise uzun kenarı kaç cm'dir?", c: "{a}/{b}", v: { a: [12, 80], b: [3, 8] }, z: "orta", alt: "dikdortgen_kenar", konu: 20, level: 0 }
        ],
        1: [
            { id: "20_1_001", s: "Dik kenarları {a} cm ve {b} cm olan dik üçgenin hipotenüsü kaç cm'dir?", c: "Math.sqrt({a}*{a}+{b}*{b})", v: { a: [3, 6], b: [4, 8] }, z: "orta", alt: "pisagor", konu: 20, level: 1 },
            { id: "20_1_002", s: "Yarıçapı {r} cm olan dairenin alanı kaç cm²'dir? (π=3 alınız)", c: "3*{r}*{r}", v: { r: [2, 10] }, z: "orta", alt: "daire_alan", konu: 20, level: 1 },
            { id: "20_1_003", s: "Yarıçapı {r} cm olan dairenin çevresi kaç cm'dir? (π=3 alınız)", c: "6*{r}", v: { r: [2, 10] }, z: "orta", alt: "daire_cevre", konu: 20, level: 1 },
            { id: "20_1_004", s: "Tabanı {a} cm, yüksekliği {h} cm olan üçgenin alanı kaç cm²'dir?", c: "({a}*{h})/2", v: { a: [4, 15], h: [3, 12] }, z: "orta", alt: "ucgen_alan", konu: 20, level: 1 },
            { id: "20_1_005", s: "Bir karenin köşegen uzunluğu {a} cm ise bir kenarı kaç cm'dir?", c: "{a}/Math.sqrt(2)", v: { a: [4, 10] }, z: "orta", alt: "kare_kosegen", konu: 20, level: 1 },
            { id: "20_1_006", s: "Bir eşkenar üçgenin bir kenarı {a} cm ise yüksekliği kaç cm'dir?", c: "{a}*Math.sqrt(3)/2", v: { a: [4, 10] }, z: "orta", alt: "eskenar_yukseklik", konu: 20, level: 1 }
        ],
        2: [
            { id: "20_2_001", s: "Bir üçgenin iç açıları 2, 3 ve 4 ile orantılıdır. En büyük açı kaç derecedir?", c: "80", v: {}, z: "zor", alt: "ucgen_aci_oranti", konu: 20, level: 2 },
            { id: "20_2_002", s: "Bir dikdörtgenin alanı {a} cm², bir kenarı {b} cm ise diğer kenarı kaç cm'dir?", c: "{a}/{b}", v: { a: [24, 100], b: [4, 10] }, z: "zor", alt: "dikdortgen_kenar", konu: 20, level: 2 },
            { id: "20_2_003", s: "Bir karenin alanı {a} cm² ise çevresi kaç cm'dir?", c: "4*Math.sqrt({a})", v: { a: [16, 100] }, z: "zor", alt: "kare_alan_cevre", konu: 20, level: 2 },
            { id: "20_2_004", s: "Bir dairenin alanı {a} cm² ise çevresi kaç cm'dir? (π=3 alınız)", c: "6*Math.sqrt({a}/3)", v: { a: [12, 108] }, z: "zor", alt: "daire_alan_cevre", konu: 20, level: 2 },
            { id: "20_2_005", s: "Bir üçgenin kenar uzunlukları {a}, {b}, {c} cm'dir. Çevresi {a}+{b}+{c} cm ise alanı kaç cm²'dir? (Heron)", c: "Math.sqrt((({a}+{b}+{c})/2)*(({a}+{b}+{c})/2-{a})*(({a}+{b}+{c})/2-{b})*(({a}+{b}+{c})/2-{c}))", v: { a: [5, 10], b: [6, 12], c: [7, 13] }, z: "zor", alt: "ucgen_alan_heron", konu: 20, level: 2 },
            { id: "20_2_006", s: "Bir dikdörtgenin uzun kenarı kısa kenarının {k} katıdır. Çevresi {c} cm ise alanı kaç cm²'dir?", c: "({c}/(2*({k}+1)))*({c}*{k}/(2*({k}+1)))", v: { k: [2, 4], c: [24, 60] }, z: "zor", alt: "dikdortgen_problem", konu: 20, level: 2 }
        ]
    }

};

console.log("✅ Soru bankası başarıyla yüklendi (düzenlenmiş).");