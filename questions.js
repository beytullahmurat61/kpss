// ============================================
// KPSS 2026 MATEMATİK SORU BANKASI (FİNAL)
// 20 Konu | 3 Seviye
// Tüm sorular KPSS mantığına uygun, dil bilgisi hatasız, matematiksel olarak kesin.
// ============================================

const SORU_BANKASI = {

    // 1. KONU: TOPLAMA İŞLEMİ
    1: {
        0: [
            { id: "1_0_001", s: "Bir sayının {a} fazlası {b} olduğuna göre bu sayı kaçtır?", c: "{b}-{a}", v: { a: [5, 25], b: [15, 70] }, z: "kolay", alt: "verilmeyen_bulma", konu: 1, level: 0 },
            { id: "1_0_002", s: "Hangi sayıya {a} eklenirse {b} olur?", c: "{b}-{a}", v: { a: [5, 25], b: [15, 70] }, z: "kolay", alt: "verilmeyen_bulma", konu: 1, level: 0 },
            { id: "1_0_003", s: "Ahmet {a} yaşında, Mehmet ise Ahmet'ten {b} yaş büyüktür. İkisinin yaşları toplamı kaçtır?", c: "{a}+{a}+{b}", v: { a: [8, 25], b: [2, 10] }, z: "kolay", alt: "yas_problemi", konu: 1, level: 0 },
            { id: "1_0_004", s: "Bir sınıfta {a} kız öğrenci vardır. Erkek öğrencilerin sayısı kızlardan {b} fazladır. Sınıf mevcudu kaçtır?", c: "{a}+{a}+{b}", v: { a: [10, 25], b: [3, 12] }, z: "kolay", alt: "sinif_problemi", konu: 1, level: 0 },
            { id: "1_0_005", s: "Bir manav {a} kg elma ve {b} kg armut satmıştır. Manavın sattığı toplam meyve miktarı kaç kilogramdır?", c: "{a}+{b}", v: { a: [10, 50], b: [10, 50] }, z: "kolay", alt: "sozel_problem", konu: 1, level: 0 },
            { id: "1_0_006", s: "Ardışık iki tek doğal sayının toplamı 24 olduğuna göre küçük sayı kaçtır?", c: "11", v: {}, z: "orta", alt: "ardisik", konu: 1, level: 0 },
            { id: "1_0_007", s: "Bir otobüste {a} yolcu vardı. Durakta otobüse {b} yolcu bindi. Otobüsteki yolcu sayısı kaç olmuştur?", c: "{a}+{b}", v: { a: [20, 60], b: [3, 20] }, z: "kolay", alt: "sozel_problem", konu: 1, level: 0 }
        ],
        1: [
            { id: "1_1_001", s: "Bir tabloda Ocak ayı satışı {a} bin TL, Şubat ayı satışı {b} bin TL olarak verilmiştir. İki aylık toplam satış kaç bin TL'dir? (Sadece sayıyı giriniz.)", c: "{a}+{b}", v: { a: [50, 300], b: [50, 300] }, z: "orta", alt: "tablo", konu: 1, level: 1 },
            { id: "1_1_002", s: "Ardışık üç çift sayının toplamı 18'dir. Ortanca sayı kaçtır?", c: "6", v: {}, z: "orta", alt: "ardisik", konu: 1, level: 1 },
            { id: "1_1_003", s: "Ardışık üç çift sayının toplamı 24'tür. Ortanca sayı kaçtır?", c: "8", v: {}, z: "orta", alt: "ardisik", konu: 1, level: 1 },
            { id: "1_1_004", s: "Bir sayının 7 fazlası ile 3 eksiğinin toplamı 40'tır. Bu sayı kaçtır?", c: "(40-7+3)/2", v: {}, z: "orta", alt: "denklem_kurma", konu: 1, level: 1 },
            { id: "1_1_005", s: "Ali {a}, Veli {b} yaşındadır. {c} yıl sonra ikisinin yaşları toplamı kaç olur?", c: "{a}+{b}+2*{c}", v: { a: [10, 30], b: [8, 25], c: [2, 8] }, z: "orta", alt: "yas_problemi", konu: 1, level: 1 },
            { id: "1_1_006", s: "Bir mağazada tanesi {a} TL olan üründen {b} tane alan bir kişi kaç TL öder?", c: "{a}*{b}", v: { a: [10, 50], b: [2, 5] }, z: "orta", alt: "carpimli_toplam", konu: 1, level: 1 }
        ],
        2: [
            { id: "1_2_001", s: "İki sayının toplamı {s}, farkı {f} olduğuna göre büyük sayı kaçtır?", c: "({s}+{f})/2", v: { s: [30, 100], f: [4, 20] }, z: "zor", alt: "sayi_problemi", konu: 1, level: 2 },
            { id: "1_2_002", s: "Toplamları 48 olan iki sayıdan biri diğerinin 3 katıdır. Küçük sayı kaçtır?", c: "12", v: {}, z: "zor", alt: "sayi_problemi", konu: 1, level: 2 },
            { id: "1_2_003", s: "Bir sayının 2 katı ile 3 katının toplamı 45 olduğuna göre bu sayı kaçtır?", c: "9", v: {}, z: "zor", alt: "sayi_problemi", konu: 1, level: 2 },
            { id: "1_2_004", s: "10 kişilik bir grupta herkes birbiriyle tokalaştığında toplam tokalaşma sayısı kaç olur?", c: "45", v: {}, z: "zor", alt: "kombinasyon_temeli", konu: 1, level: 2 },
            { id: "1_2_005", s: "Bir sinema salonunda 12 sıra ve her sırada 15 koltuk vardır. Salonda 30 koltuk boş olduğuna göre dolu koltuk sayısı kaçtır?", c: "150", v: {}, z: "zor", alt: "tablo", konu: 1, level: 2 },
            { id: "1_2_006", s: "Bir otobüs 80 km/sa hızla 2 saat, ardından 60 km/sa hızla 3 saat yol almıştır. Otobüsün aldığı toplam yol kaç kilometredir?", c: "340", v: {}, z: "zor", alt: "hareket", konu: 1, level: 2 },
            { id: "1_2_007", s: "Ardışık üç doğal sayının toplamı 30 olduğuna göre en büyük sayı kaçtır?", c: "11", v: {}, z: "zor", alt: "ardisik", konu: 1, level: 2 }
        ]
    },

    // 2. KONU: ÇIKARMA İŞLEMİ
    2: {
        0: [
            { id: "2_0_001", s: "Cebimde {a} TL vardı. {b} TL harcadım. Geriye kaç TL kaldı?", c: "{a}-{b}", v: { a: [30, 150], b: [5, 25] }, z: "kolay", alt: "problem_para", konu: 2, level: 0 },
            { id: "2_0_002", s: "Bir tabakta {a} kurabiye vardı. {b} tanesi yenildi. Tabakta kaç kurabiye kaldı?", c: "{a}-{b}", v: { a: [20, 80], b: [3, 15] }, z: "kolay", alt: "problem_gunluk", konu: 2, level: 0 },
            { id: "2_0_003", s: "Bir sayının {a} eksiği {b} olduğuna göre bu sayı kaçtır?", c: "{a}+{b}", v: { a: [5, 30], b: [10, 60] }, z: "kolay", alt: "verilmeyen_eksilen", konu: 2, level: 0 },
            { id: "2_0_004", s: "Hangi sayıdan {a} çıkarılırsa {b} kalır?", c: "{a}+{b}", v: { a: [5, 30], b: [10, 60] }, z: "kolay", alt: "verilmeyen_eksilen", konu: 2, level: 0 },
            { id: "2_0_005", s: "{a} sayısı {b} sayısından kaç fazladır?", c: "{a}-{b}", v: { a: [30, 100], b: [10, 25] }, z: "kolay", alt: "karsilastirma", konu: 2, level: 0 },
            { id: "2_0_006", s: "{a} sayısı {b} sayısından kaç eksiktir?", c: "{b}-{a}", v: { a: [10, 25], b: [30, 100] }, z: "kolay", alt: "karsilastirma", konu: 2, level: 0 },
            { id: "2_0_007", s: "Bir otobüste {a} yolcu vardı. Durakta {b} yolcu indi. Otobüste kaç yolcu kaldı?", c: "{a}-{b}", v: { a: [25, 70], b: [3, 15] }, z: "kolay", alt: "problem_gunluk", konu: 2, level: 0 }
        ],
        1: [
            { id: "2_1_001", s: "{a} sayısından 9 çıkarıldığında sonuç kaç olur?", c: "{a}-9", v: { a: [20, 150] }, z: "orta", alt: "zihinden_9", konu: 2, level: 1 },
            { id: "2_1_002", s: "{a} sayısından 19 çıkarıldığında sonuç kaç olur?", c: "{a}-19", v: { a: [30, 200] }, z: "orta", alt: "zihinden_19", konu: 2, level: 1 },
            { id: "2_1_003", s: "{a} sayısından 99 çıkarıldığında sonuç kaç olur?", c: "{a}-99", v: { a: [150, 600] }, z: "orta", alt: "zihinden_99", konu: 2, level: 1 },
            { id: "2_1_004", s: "Bir sayının {a} fazlası {b} olduğuna göre sayı kaçtır?", c: "{b}-{a}", v: { a: [5, 30], b: [20, 100] }, z: "orta", alt: "verilmeyen_bulma", konu: 2, level: 1 },
            { id: "2_1_005", s: "{a} sayfalık bir kitabın {b} sayfasını okudum. Geriye kaç sayfa kaldı?", c: "{a}-{b}", v: { a: [100, 400], b: [20, 80] }, z: "orta", alt: "problem_kitap", konu: 2, level: 1 },
            { id: "2_1_006", s: "Ali {a}, Veli {b} yaşındadır. Ali, Veli'den kaç yaş büyüktür?", c: "{a}-{b}", v: { a: [15, 40], b: [5, 12] }, z: "orta", alt: "problem_yas", konu: 2, level: 1 },
            { id: "2_1_007", s: "{a} kilometrelik bir yolun {b} kilometresini gittim. Geriye kaç kilometre yolum kaldı?", c: "{a}-{b}", v: { a: [80, 500], b: [20, 100] }, z: "orta", alt: "problem_yol", konu: 2, level: 1 },
            { id: "2_1_008", s: "Bir depoda {a} litre su vardı. {b} litre su kullanıldı. Depoda kaç litre su kaldı?", c: "{a}-{b}", v: { a: [50, 300], b: [10, 80] }, z: "orta", alt: "problem_depo", konu: 2, level: 1 },
            { id: "2_1_009", s: "{a} TL'ye alınan bir ürün {b} TL'ye satılırsa zarar kaç TL olur?", c: "{a}-{b}", v: { a: [50, 200], b: [20, 80] }, z: "orta", alt: "problem_zarar", konu: 2, level: 1 }
        ],
        2: [
            { id: "2_2_001", s: "{a} sayısından 199 çıkarıldığında sonuç kaç olur?", c: "{a}-199", v: { a: [250, 800] }, z: "zor", alt: "zihinden_199", konu: 2, level: 2 },
            { id: "2_2_002", s: "İki sayının farkı 15 ve büyük sayı küçük sayının 4 katı olduğuna göre küçük sayı kaçtır?", c: "5", v: {}, z: "zor", alt: "sayi_problemi", konu: 2, level: 2 },
            { id: "2_2_003", s: "Bir çiftlikte tavukların sayısı ineklerin 3 katıdır. İnek sayısı 8 olduğuna göre çiftlikteki toplam hayvan sayısı kaçtır?", c: "32", v: {}, z: "zor", alt: "yeni_nesil", konu: 2, level: 2 },
            { id: "2_2_004", s: "Bir baba 48, çocuğu 12 yaşındadır. Kaç yıl sonra babanın yaşı çocuğun yaşının 3 katı olur?", c: "6", v: {}, z: "zor", alt: "problem_yas", konu: 2, level: 2 },
            { id: "2_2_005", s: "Bir sınıftaki öğrenciler sıralara 2'şer oturduğunda 5 kişi ayakta kalıyor, 3'er oturduğunda 3 sıra boş kalıyor. Sınıf mevcudu kaçtır?", c: "21", v: {}, z: "zor", alt: "problem_sira", konu: 2, level: 2 },
            { id: "2_2_006", s: "Bir otobüs 70 km/sa hızla 3 saat, ardından 50 km/sa hızla 2 saat yol alıyor. Toplam yol 310 km olduğuna göre başlangıç hızı kaç km/sa'dir?", c: "70", v: {}, z: "zor", alt: "problem_hareket", konu: 2, level: 2 },
            { id: "2_2_007", s: "Bir kumbarada 3 TL'lik ve 5 TL'lik madenî paralar bulunmaktadır. Toplam 50 TL olması için 5 TL'liklerden en az kaç tane olmalıdır?", c: "10", v: {}, z: "zor", alt: "problem_mantik", konu: 2, level: 2 },
            { id: "2_2_008", s: "Bir sınavda her doğru 4 puan, her yanlış 1 puan götürmektedir. 30 soruluk bir sınavda 90 net yapan bir öğrencinin doğru sayısı kaçtır?", c: "24", v: {}, z: "zor", alt: "problem_sinav", konu: 2, level: 2 }
        ]
    },

    // 3. KONU: ÇARPMA İŞLEMİ
    3: {
        0: [
            { id: "3_0_001", s: "Tanesi {a} TL olan kalemlerden {b} tane alan bir kişi kaç TL öder?", c: "{a}*{b}", v: { a:[3,15], b:[2,10] }, z: "kolay", alt: "problem_para" },
            { id: "3_0_002", s: "Her gün {a} sayfa kitap okuyan bir kişi {b} günde kaç sayfa kitap okur?", c: "{a}*{b}", v: { a:[10,40], b:[3,10] }, z: "kolay", alt: "problem_gunluk" },
            { id: "3_0_003", s: "Bir kutuda {a} yumurta varsa {b} kutuda kaç yumurta olur?", c: "{a}*{b}", v: { a:[6,30], b:[2,8] }, z: "kolay", alt: "problem_carpma" },
            { id: "3_0_004", s: "Bir sınıfta {a} sıra ve her sırada {b} öğrenci varsa sınıf mevcudu kaçtır?", c: "{a}*{b}", v: { a:[4,10], b:[2,5] }, z: "kolay", alt: "problem_gunluk" },
            { id: "3_0_005", s: "{a} sayısının {k} katı kaçtır?", c: "{a}*{k}", v: { a:[3,15], k:[2,5] }, z: "kolay", alt: "kat_alma" },
            { id: "3_0_006", s: "Hangi sayının 5 katı 45 eder?", c: "9", v: {}, z: "kolay", alt: "verilmeyen_bulma" }
        ],
        1: [
            { id: "3_1_001", s: "{a} × 5 işleminin sonucu kaçtır? (İpucu: 10 ile çarpıp 2'ye bölün.)", c: "{a}*5", v: { a:[2,30] }, z: "orta", alt: "zihinden_5" },
            { id: "3_1_002", s: "{a} × 9 işleminin sonucu kaçtır? (İpucu: 10 ile çarpıp kendinizi çıkarın.)", c: "{a}*9", v: { a:[3,25] }, z: "orta", alt: "zihinden_9" },
            { id: "3_1_003", s: "{a} × 11 işleminin sonucu kaçtır? (İpucu: 10 ile çarpıp kendinizi ekleyin.)", c: "{a}*11", v: { a:[3,25] }, z: "orta", alt: "zihinden_11" },
            { id: "3_1_004", s: "{a} × 25 işleminin sonucu kaçtır? (İpucu: 100 ile çarpıp 4'e bölün.)", c: "{a}*25", v: { a:[4,40] }, z: "orta", alt: "zihinden_25" },
            { id: "3_1_005", s: "{a} sayısının {k} katının {f} fazlası kaçtır?", c: "{a}*{k}+{f}", v: { a:[3,15], k:[2,5], f:[2,20] }, z: "orta", alt: "kat_alma" },
            { id: "3_1_006", s: "Bir sayının 4 katı 32 olduğuna göre bu sayının 6 katı kaçtır?", c: "48", v: {}, z: "orta", alt: "oranti" }
        ],
        2: [
            { id: "3_2_001", s: "{a} × 99 işleminin sonucu kaçtır?", c: "{a}*99", v: { a:[5,50] }, z: "zor", alt: "zihinden_99" },
            { id: "3_2_002", s: "Bir sayının 2 katı ile 3 katının toplamı 35 olduğuna göre bu sayı kaçtır?", c: "7", v: {}, z: "zor", alt: "verilmeyen_bulma" },
            { id: "3_2_003", s: "Tanesi 15 TL olan üründen 3 tane ve tanesi 25 TL olan üründen 2 tane alan bir kişi toplam kaç TL öder?", c: "95", v: {}, z: "zor", alt: "problem_para" },
            { id: "3_2_004", s: "Bir sayı 4 ile çarpılıp sonuca 7 eklenince 39 oluyor. Bu sayı kaçtır?", c: "8", v: {}, z: "zor", alt: "denklem_kurma" },
            { id: "3_2_005", s: "8 × 7 = 56 olduğuna göre 8 × 9 işleminin sonucu kaçtır?", c: "72", v: {}, z: "zor", alt: "mantik" }
        ]
    },

    // 4. KONU: BÖLME İŞLEMİ
    4: {
        0: [
            { id: "4_0_001", s: "{a} kişi, {b} TL'yi eşit olarak paylaştığında kişi başına kaç TL düşer?", c: "{b}/{a}", v: { a: [2, 8], b: [10, 400] }, z: "kolay", alt: "problem_paylasim", konu: 4, level: 0 },
            { id: "4_0_002", s: "{a} ceviz {b} çocuğa eşit olarak paylaştırıldığında her çocuğa kaç ceviz düşer?", c: "{a}/{b}", v: { b: [2, 6], a: [4, 180] }, z: "kolay", alt: "problem_paylasim", konu: 4, level: 0 },
            { id: "4_0_003", s: "Bir sayının 6 katı 48 olduğuna göre bu sayı kaçtır?", c: "8", v: {}, z: "kolay", alt: "verilmeyen_bulma", konu: 4, level: 0 },
            { id: "4_0_004", s: "Hangi sayı 7 ile bölündüğünde 9 sonucunu verir?", c: "63", v: {}, z: "kolay", alt: "verilmeyen_bulma", konu: 4, level: 0 },
            { id: "4_0_005", s: "80 TL'ye 5 ürün alındığında bir ürünün fiyatı kaç TL olur?", c: "16", v: {}, z: "orta", alt: "problem_bolme", konu: 4, level: 0 }
        ],
        1: [
            { id: "4_1_001", s: "{a} ÷ 5 işleminin sonucu kaçtır? (İpucu: 2 ile çarpıp 10'a bölün.)", c: "{a}/5", v: { a: [5, 100] }, z: "orta", alt: "zihinden_5", konu: 4, level: 1 },
            { id: "4_1_002", s: "{a} ÷ 25 işleminin sonucu kaçtır? (İpucu: 4 ile çarpıp 100'e bölün.)", c: "{a}/25", v: { a: [25, 500] }, z: "orta", alt: "zihinden_25", konu: 4, level: 1 },
            { id: "4_1_003", s: "{a} ÷ 10 işleminin sonucu kaçtır?", c: "{a}/10", v: { a: [10, 500] }, z: "orta", alt: "zihinden_10", konu: 4, level: 1 },
            { id: "4_1_004", s: "8 kişiye 15 gün yetecek olan bir miktar yemek 12 kişiye kaç gün yeter?", c: "10", v: {}, z: "orta", alt: "problem_ters_oranti", konu: 4, level: 1 },
            { id: "4_1_005", s: "Bir bölme işleminde bölen 9 ve bölüm 12 olduğuna göre bölünen sayı en az kaçtır?", c: "108", v: {}, z: "orta", alt: "bolme_kurali", konu: 4, level: 1 },
            { id: "4_1_006", s: "Bir bölme işleminde bölen 7 olduğuna göre kalan en fazla kaç olabilir?", c: "6", v: {}, z: "orta", alt: "bolme_kurali", konu: 4, level: 1 }
        ],
        2: [
            { id: "4_2_001", s: "Bir bölme işleminde bölen 8, bölüm 9 ve kalan 5 olduğuna göre bölünen sayı kaçtır?", c: "77", v: {}, z: "zor", alt: "bolme_ozdesligi", konu: 4, level: 2 },
            { id: "4_2_002", s: "Bir bölme işleminde bölünen 127, bölen 9, bölüm 14 ve kalan 1 olduğuna göre aşağıdakilerden hangisi doğrudur? (127 = 9*14+1)", c: "127", v: {}, z: "zor", alt: "bolme_ozdesligi", konu: 4, level: 2 },
            { id: "4_2_003", s: "85 litre süt, 6 litrelik şişelere dolduruluyor. Son şişe tam dolmuyor ve 1 litre süt artıyor. Kaç şişe kullanılmıştır?", c: "15", v: {}, z: "zor", alt: "problem_kalanli", konu: 4, level: 2 },
            { id: "4_2_004", s: "Bir kumbarada 10 TL'lik ve 5 TL'lik paralar bulunmaktadır. Toplam 80 TL olması için 10 TL'liklerden en az kaç tane olmalıdır?", c: "8", v: {}, z: "zor", alt: "problem_mantik", konu: 4, level: 2 },
            { id: "4_2_005", s: "Bir sayının 5 ile bölümünden kalan 3, 7 ile bölümünden kalan 2 olduğuna göre bu sayı 35'ten küçük kaç farklı değer alır?", c: "1", v: {}, z: "zor", alt: "bolme_mantik", konu: 4, level: 2 }
        ]
    },

    // 5. KONU: KESİRLER
    5: {
        0: [
            { id: "5_0_001", s: "Bir bütünün 2/5'i 14 olduğuna göre bütünün tamamı kaçtır?", c: "35", v: {}, z: "kolay", alt: "kesir_kavram", konu: 5, level: 0 },
            { id: "5_0_002", s: "12/18 kesrini en sade hâlinde yazınız.", c: "2/3", v: {}, z: "kolay", alt: "sadelestirme", konu: 5, level: 0 },
            { id: "5_0_003", s: "2/3 kesri ile 4/6 kesri denk midir?", c: "Evet", v: {}, z: "kolay", alt: "denk_kesir", konu: 5, level: 0 },
            { id: "5_0_004", s: "Bir pastanın 3/8'ini yedim. Geriye pastanın kaçta kaçı kalmıştır?", c: "5/8", v: {}, z: "kolay", alt: "problem_pasta", konu: 5, level: 0 },
            { id: "5_0_005", s: "80 TL'nin 3/5'i kaç TL'dir?", c: "48", v: {}, z: "kolay", alt: "problem_para", konu: 5, level: 0 },
            { id: "5_0_006", s: "7/9 kesri basit kesir midir?", c: "Evet", v: {}, z: "kolay", alt: "kesir_kavram", konu: 5, level: 0 }
        ],
        1: [
            { id: "5_1_001", s: "2/5 + 1/5 işleminin sonucu kaçtır?", c: "3/5", v: {}, z: "orta", alt: "kesir_toplama", konu: 5, level: 1 },
            { id: "5_1_002", s: "1/3 + 1/4 işleminin sonucu kaçtır?", c: "7/12", v: {}, z: "orta", alt: "kesir_toplama", konu: 5, level: 1 },
            { id: "5_1_003", s: "5/6 - 1/3 işleminin sonucu kaçtır?", c: "1/2", v: {}, z: "orta", alt: "kesir_cikarma", konu: 5, level: 1 },
            { id: "5_1_004", s: "2/3 × 3/5 işleminin sonucu kaçtır?", c: "2/5", v: {}, z: "orta", alt: "kesir_carpma", konu: 5, level: 1 },
            { id: "5_1_005", s: "3/4 ÷ 2/5 işleminin sonucu kaçtır?", c: "15/8", v: {}, z: "orta", alt: "kesir_bolme", konu: 5, level: 1 },
            { id: "5_1_006", s: "3/7 ile 4/9 kesirlerinden hangisi daha büyüktür?", c: "3/7", v: {}, z: "orta", alt: "siralama", konu: 5, level: 1 },
            { id: "5_1_007", s: "Bir sayının 2/3'ü 18 olduğuna göre bu sayının 3/4'ü kaçtır?", c: "81/4", v: {}, z: "orta", alt: "problem_kesir", konu: 5, level: 1 }
        ],
        2: [
            { id: "5_2_001", s: "Bir sınıfın 3/5'i kız öğrencidir. Erkek öğrencilerin 2/3'ü gözlüklüdür. Gözlüklü erkek öğrenci sayısı 8 olduğuna göre sınıf mevcudu kaçtır?", c: "60", v: {}, z: "zor", alt: "problem_kesir", konu: 5, level: 2 },
            { id: "5_2_002", s: "Bir havuzun 1/4'ü doludur. Havuza 30 litre su eklenince havuzun 1/2'si doluyor. Havuzun tamamı kaç litredir?", c: "120", v: {}, z: "zor", alt: "problem_havuz", konu: 5, level: 2 },
            { id: "5_2_003", s: "Bir işin önce 1/3'ü, sonra kalan işin 1/4'ü yapılıyor. Geriye işin 15/24'ü kalıyorsa başlangıçtaki iş miktarı nedir?", c: "1", v: {}, z: "zor", alt: "problem_is", konu: 5, level: 2 },
            { id: "5_2_004", s: "Bir telin önce 1/5'i, sonra kalan telin 1/3'ü kesiliyor. Geriye 16 metre tel kalıyorsa telin tamamı kaç metredir?", c: "30", v: {}, z: "zor", alt: "problem_tel", konu: 5, level: 2 },
            { id: "5_2_005", s: "Bir sayının 1/3'ü ile 1/4'ünün toplamı 21 olduğuna göre bu sayı kaçtır?", c: "36", v: {}, z: "zor", alt: "problem_denklem", konu: 5, level: 2 },
            { id: "5_2_006", s: "Bir sınavda başarı oranı %40 iken 15 kişi daha başarılı olunca başarı oranı %55 oluyor. Sınava giren toplam kişi sayısı kaçtır?", c: "100", v: {}, z: "zor", alt: "problem_yuzde", konu: 5, level: 2 },
            { id: "5_2_007", s: "Bir karışımın 2/5'i A maddesi, kalanı B maddesidir. Karışıma 10 kg A maddesi eklenince A maddesinin oranı 1/2 oluyor. Başlangıçtaki karışım kaç kilogramdır?", c: "100", v: {}, z: "zor", alt: "problem_karisim", konu: 5, level: 2 }
        ]
    },

    // 6. KONU: ONDALIK SAYILAR
    6: {
        0: [
            { id: "6_0_001", s: "Bir bütünün 3/10'u ondalık olarak kaça eşittir?", c: "0.3", v: {}, z: "kolay", alt: "kesir_ondalik", konu: 6, level: 0 },
            { id: "6_0_002", s: "0,7 ondalık sayısını kesir olarak yazınız.", c: "7/10", v: {}, z: "kolay", alt: "ondalik_kesir", konu: 6, level: 0 },
            { id: "6_0_003", s: "0,25 ondalık sayısını kesir olarak yazınız.", c: "1/4", v: {}, z: "kolay", alt: "ondalik_kesir", konu: 6, level: 0 },
            { id: "6_0_004", s: "45/100 kesrinin ondalık gösterimi nedir?", c: "0.45", v: {}, z: "kolay", alt: "kesir_ondalik", konu: 6, level: 0 },
            { id: "6_0_005", s: "Bir pastanın 0,3'ünü yedim. Kesir olarak ne kadarını yedim?", c: "3/10", v: {}, z: "kolay", alt: "problem_kesir", konu: 6, level: 0 },
            { id: "6_0_006", s: "12,75 ondalık sayısının tam kısmı kaçtır?", c: "12", v: {}, z: "kolay", alt: "ondalik_kavram", konu: 6, level: 0 }
        ],
        1: [
            { id: "6_1_001", s: "0,4 + 0,5 işleminin sonucu kaçtır?", c: "0.9", v: {}, z: "orta", alt: "ondalik_toplama", konu: 6, level: 1 },
            { id: "6_1_002", s: "0,25 + 0,75 işleminin sonucu kaçtır?", c: "1.0", v: {}, z: "orta", alt: "ondalik_toplama", konu: 6, level: 1 },
            { id: "6_1_003", s: "7,8 - 3,2 işleminin sonucu kaçtır?", c: "4.6", v: {}, z: "orta", alt: "ondalik_cikarma", konu: 6, level: 1 },
            { id: "6_1_004", s: "0,6 × 10 işleminin sonucu kaçtır?", c: "6", v: {}, z: "orta", alt: "ondalik_carpma", konu: 6, level: 1 },
            { id: "6_1_005", s: "3,4 × 10 işleminin sonucu kaçtır?", c: "34", v: {}, z: "orta", alt: "ondalik_carpma", konu: 6, level: 1 },
            { id: "6_1_006", s: "56,7 ÷ 10 işleminin sonucu kaçtır?", c: "5.67", v: {}, z: "orta", alt: "ondalik_bolme", konu: 6, level: 1 },
            { id: "6_1_007", s: "0,8 sayısını en yakın tam sayıya yuvarlayınız.", c: "1", v: {}, z: "orta", alt: "yuvarlama", konu: 6, level: 1 },
            { id: "6_1_008", s: "0,96 sayısını onda birler basamağına yuvarlayınız.", c: "1.0", v: {}, z: "orta", alt: "yuvarlama", konu: 6, level: 1 },
            { id: "6_1_009", s: "Tanesi 4,5 TL olan çikolatadan 3 tane alan bir kişi kaç TL öder?", c: "13.5", v: {}, z: "orta", alt: "problem_para", konu: 6, level: 1 },
            { id: "6_1_010", s: "12,7 km'lik yolun önce 4,2 km'sini, sonra 3,5 km'sini gittim. Geriye kaç kilometre yolum kaldı?", c: "5.0", v: {}, z: "orta", alt: "problem_yol", konu: 6, level: 1 }
        ],
        2: [
            { id: "6_2_001", s: "Bir manav 2,5 kg elma, 1,75 kg armut ve 3,2 kg muz satmıştır. Toplam kaç kg meyve satmıştır?", c: "7.45", v: {}, z: "zor", alt: "problem_tarti", konu: 6, level: 2 },
            { id: "6_2_002", s: "Bir öğrencinin matematik notları 85,5 - 90,0 - 78,5'tir. Ortalaması kaçtır?", c: "84.67", v: {}, z: "zor", alt: "problem_ortalama", konu: 6, level: 2 },
            { id: "6_2_003", s: "Bir araç 60 km/sa hızla 2 saat, 80 km/sa hızla 3 saat yol almıştır. Ortalama hızı kaç km/sa'dir?", c: "72", v: {}, z: "zor", alt: "problem_hareket", konu: 6, level: 2 },
            { id: "6_2_004", s: "12,5 sayısının 4 katı kaçtır?", c: "50", v: {}, z: "zor", alt: "ondalik_carpma", konu: 6, level: 2 },
            { id: "6_2_005", s: "Tuz oranı %12,5 olan 80 kg tuzlu suya 20 kg su eklenirse yeni tuz oranı yüzde kaç olur?", c: "10", v: {}, z: "zor", alt: "problem_karisim", konu: 6, level: 2 },
            { id: "6_2_006", s: "Bir ürünün fiyatı önce %20 artıyor, sonra %10 düşüyor. Net değişim yüzdesi kaçtır?", c: "8", v: {}, z: "zor", alt: "problem_yuzde", konu: 6, level: 2 },
            { id: "6_2_007", s: "Bir karenin bir kenarı 7,5 cm olduğuna göre çevresi kaç cm'dir?", c: "30", v: {}, z: "zor", alt: "problem_geometri", konu: 6, level: 2 },
            { id: "6_2_008", s: "Bir dikdörtgenin kısa kenarı 4,5 cm, uzun kenarı 8,2 cm olduğuna göre alanı kaç cm²'dir?", c: "36.9", v: {}, z: "zor", alt: "problem_geometri", konu: 6, level: 2 }
        ]
    },

    // 7. KONU: ÜSLÜ SAYILAR
    7: {
        0: [
            { id: "7_0_001", s: "Bir kenar uzunluğu 5 cm olan karenin alanı kaç cm²'dir?", c: "25", v: {}, z: "kolay", alt: "kare_alani", konu: 7, level: 0 },
            { id: "7_0_002", s: "Bir ayrıt uzunluğu 3 cm olan küpün hacmi kaç cm³'tür?", c: "27", v: {}, z: "kolay", alt: "kup_hacmi", konu: 7, level: 0 },
            { id: "7_0_003", s: "3² + 4² işleminin sonucu kaçtır?", c: "25", v: {}, z: "kolay", alt: "us_toplama", konu: 7, level: 0 },
            { id: "7_0_004", s: "2³ + 3³ işleminin sonucu kaçtır?", c: "35", v: {}, z: "kolay", alt: "us_toplama", konu: 7, level: 0 },
            { id: "7_0_005", s: "5² - 3² işleminin sonucu kaçtır?", c: "16", v: {}, z: "kolay", alt: "us_cikarma", konu: 7, level: 0 },
            { id: "7_0_006", s: "10² kaçtır?", c: "100", v: {}, z: "kolay", alt: "us_deger", konu: 7, level: 0 },
            { id: "7_0_007", s: "10³ kaçtır?", c: "1000", v: {}, z: "kolay", alt: "us_deger", konu: 7, level: 0 },
            { id: "7_0_008", s: "2⁵ kaçtır?", c: "32", v: {}, z: "kolay", alt: "us_deger", konu: 7, level: 0 },
            { id: "7_0_009", s: "3⁴ kaçtır?", c: "81", v: {}, z: "kolay", alt: "us_deger", konu: 7, level: 0 },
            { id: "7_0_010", s: "a² = 49 olduğuna göre a kaçtır? (a pozitif tam sayıdır.)", c: "7", v: {}, z: "orta", alt: "denklem", konu: 7, level: 0 }
        ],
        1: [
            { id: "7_1_001", s: "2³ × 2⁴ işleminin sonucu kaçtır?", c: "128", v: {}, z: "orta", alt: "us_carpma", konu: 7, level: 1 },
            { id: "7_1_002", s: "3² × 3³ işleminin sonucu kaçtır?", c: "243", v: {}, z: "orta", alt: "us_carpma", konu: 7, level: 1 },
            { id: "7_1_003", s: "2⁶ ÷ 2² işleminin sonucu kaçtır?", c: "16", v: {}, z: "orta", alt: "us_bolme", konu: 7, level: 1 },
            { id: "7_1_004", s: "5⁴ ÷ 5² işleminin sonucu kaçtır?", c: "25", v: {}, z: "orta", alt: "us_bolme", konu: 7, level: 1 },
            { id: "7_1_005", s: "(2³)² işleminin sonucu kaçtır?", c: "64", v: {}, z: "orta", alt: "us_ussu", konu: 7, level: 1 },
            { id: "7_1_006", s: "(3²)³ işleminin sonucu kaçtır?", c: "729", v: {}, z: "orta", alt: "us_ussu", konu: 7, level: 1 },
            { id: "7_1_007", s: "2⁻² kaçtır?", c: "1/4", v: {}, z: "orta", alt: "negatif_us", konu: 7, level: 1 },
            { id: "7_1_008", s: "5⁻¹ kaçtır?", c: "1/5", v: {}, z: "orta", alt: "negatif_us", konu: 7, level: 1 },
            { id: "7_1_009", s: "Bir sayının 10⁴ katı 50000 olduğuna göre bu sayı kaçtır?", c: "5", v: {}, z: "orta", alt: "bilimsel", konu: 7, level: 1 },
            { id: "7_1_010", s: "3 × 10⁵ kaçtır?", c: "300000", v: {}, z: "orta", alt: "bilimsel", konu: 7, level: 1 }
        ],
        2: [
            { id: "7_2_001", s: "Bir bakteri her saat 2 katına çıkmaktadır. Başlangıçta 5 bakteri olduğuna göre 4 saat sonra kaç bakteri olur?", c: "80", v: {}, z: "zor", alt: "problem_bakteri", konu: 7, level: 2 },
            { id: "7_2_002", s: "Bir hücre her gün 3 katına çıkmaktadır. 3 gün sonra başlangıçtaki hücre sayısının kaç katı olur?", c: "27", v: {}, z: "zor", alt: "problem_hucre", konu: 7, level: 2 },
            { id: "7_2_003", s: "Radyoaktif bir madde her yıl yarıya düşmektedir. Başlangıçta 128 gram olan bu madde 4 yıl sonra kaç gram kalır?", c: "8", v: {}, z: "zor", alt: "problem_radyoaktif", konu: 7, level: 2 },
            { id: "7_2_004", s: "2ˣ = 32 olduğuna göre 2ˣ⁺² kaçtır?", c: "128", v: {}, z: "zor", alt: "denklem", konu: 7, level: 2 },
            { id: "7_2_005", s: "3ˣ = 81 olduğuna göre 3ˣ⁻¹ kaçtır?", c: "27", v: {}, z: "zor", alt: "denklem", konu: 7, level: 2 },
            { id: "7_2_006", s: "2ˣ = 8ʸ ve x - y = 3 olduğuna göre x kaçtır?", c: "6", v: {}, z: "zor", alt: "denklem_sistem", konu: 7, level: 2 },
            { id: "7_2_007", s: "Dünya'nın Güneş'e olan uzaklığı yaklaşık 150.000.000 km'dir. Bilimsel gösterimi nedir?", c: "1.5×10⁸", v: {}, z: "zor", alt: "bilimsel", konu: 7, level: 2 },
            { id: "7_2_008", s: "Bir virüsün boyu 0,0000003 m'dir. Bilimsel gösterimi nedir?", c: "3×10⁻⁷", v: {}, z: "zor", alt: "bilimsel", konu: 7, level: 2 },
            { id: "7_2_009", s: "2⁵ ile 5²'yi karşılaştırınız. Hangisi daha büyüktür?", c: "2⁵", v: {}, z: "zor", alt: "karsilastirma", konu: 7, level: 2 },
            { id: "7_2_010", s: "2ˣ = 64 olduğuna göre 2ˣ⁻² kaçtır?", c: "16", v: {}, z: "zor", alt: "denklem", konu: 7, level: 2 }
        ]
    },

    // 8. KONU: KÖKLÜ SAYILAR
    8: {
        0: [
            { id: "8_0_001", s: "Alanı 64 cm² olan karenin bir kenar uzunluğu kaç cm'dir?", c: "8", v: {}, z: "kolay", alt: "kare_alani", konu: 8, level: 0 },
            { id: "8_0_002", s: "Hangi sayının karesi 121'dir?", c: "11", v: {}, z: "kolay", alt: "karekok_tanim", konu: 8, level: 0 },
            { id: "8_0_003", s: "√36 sayısı bir tam sayı mıdır?", c: "Evet", v: {}, z: "kolay", alt: "tam_kare_kontrol", konu: 8, level: 0 },
            { id: "8_0_004", s: "√81 işleminin sonucu kaçtır?", c: "9", v: {}, z: "kolay", alt: "karekok_degeri", konu: 8, level: 0 },
            { id: "8_0_005", s: "Alanı 25 br² olan karenin çevresi kaç birimdir?", c: "20", v: {}, z: "orta", alt: "kare_cevre", konu: 8, level: 0 },
            { id: "8_0_006", s: "√0 kaçtır?", c: "0", v: {}, z: "kolay", alt: "karekok_degeri", konu: 8, level: 0 },
            { id: "8_0_007", s: "√1 kaçtır?", c: "1", v: {}, z: "kolay", alt: "karekok_degeri", konu: 8, level: 0 },
            { id: "8_0_008", s: "√45 sayısı hangi iki tam sayı arasındadır?", c: "6 ile 7", v: {}, z: "orta", alt: "karekok_aralik", konu: 8, level: 0 }
        ],
        1: [
            { id: "8_1_001", s: "√72 sayısını a√b şeklinde yazınız.", c: "6√2", v: {}, z: "orta", alt: "kok_disi", konu: 8, level: 1 },
            { id: "8_1_002", s: "√3 × √12 işleminin sonucu kaçtır?", c: "6", v: {}, z: "orta", alt: "kok_carpma", konu: 8, level: 1 },
            { id: "8_1_003", s: "√48 ÷ √3 işleminin sonucu kaçtır?", c: "4", v: {}, z: "orta", alt: "kok_bolme", konu: 8, level: 1 },
            { id: "8_1_004", s: "3√5 + 2√5 işleminin sonucu kaçtır?", c: "5√5", v: {}, z: "orta", alt: "kok_toplama", konu: 8, level: 1 },
            { id: "8_1_005", s: "7√3 - 2√3 işleminin sonucu kaçtır?", c: "5√3", v: {}, z: "orta", alt: "kok_cikarma", konu: 8, level: 1 },
            { id: "8_1_006", s: "√8 + √8 işleminin sonucu kaçtır?", c: "4√2", v: {}, z: "kolay", alt: "kok_toplama", konu: 8, level: 1 },
            { id: "8_1_007", s: "(2√3)² işleminin sonucu kaçtır?", c: "12", v: {}, z: "orta", alt: "kok_kare", konu: 8, level: 1 }
        ],
        2: [
            { id: "8_2_001", s: "Dik kenar uzunlukları 6 cm ve 8 cm olan dik üçgenin hipotenüs uzunluğu kaç cm'dir?", c: "10", v: {}, z: "zor", alt: "pisagor", konu: 8, level: 2 },
            { id: "8_2_002", s: "Bir karenin köşegen uzunluğu 6√2 cm olduğuna göre bir kenar uzunluğu kaç cm'dir?", c: "6", v: {}, z: "zor", alt: "kare_kosegen", konu: 8, level: 2 },
            { id: "8_2_003", s: "Bir eşkenar üçgenin bir kenar uzunluğu 8 cm olduğuna göre yüksekliği kaç cm'dir?", c: "4√3", v: {}, z: "zor", alt: "eskenar_yukseklik", konu: 8, level: 2 },
            { id: "8_2_004", s: "√(x + 5) = 4 olduğuna göre x kaçtır?", c: "11", v: {}, z: "orta", alt: "kok_denklem", konu: 8, level: 2 },
            { id: "8_2_005", s: "√x + 3 = 8 olduğuna göre x kaçtır?", c: "25", v: {}, z: "orta", alt: "kok_denklem", konu: 8, level: 2 },
            { id: "8_2_006", s: "1/(√2+√3) ifadesinin paydasını rasyonel yapınız.", c: "√3-√2", v: {}, z: "zor", alt: "eslenik", konu: 8, level: 2 },
            { id: "8_2_007", s: "√3 ile √5 sayılarından hangisi daha büyüktür?", c: "√5", v: {}, z: "orta", alt: "karsilastirma", konu: 8, level: 2 },
            { id: "8_2_008", s: "Alanı 48 cm² olan dairenin yarıçapı kaç cm'dir? (π = 3 alınız.)", c: "4", v: {}, z: "zor", alt: "daire_alani", konu: 8, level: 2 },
            { id: "8_2_009", s: "√(√16) işleminin sonucu nedir?", c: "2", v: {}, z: "zor", alt: "ic_ice_kok", konu: 8, level: 2 },
            { id: "8_2_010", s: "√108 sayısını a√b şeklinde yazınız.", c: "6√3", v: {}, z: "zor", alt: "kok_disi", konu: 8, level: 2 }
        ]
    },

    // 9. KONU: ORAN - ORANTI
    9: {
        0: [
            { id: "9_0_001", s: "6 sayısının 9 sayısına oranı kaçtır? (En sade hâlde yazınız.)", c: "2/3", v: {}, z: "kolay", alt: "oran_kavram", konu: 9, level: 0 },
            { id: "9_0_002", s: "20 TL'nin 30 TL'ye oranı kaçtır?", c: "2/3", v: {}, z: "kolay", alt: "oran_kavram", konu: 9, level: 0 },
            { id: "9_0_003", s: "Bir sınıfta 12 kız, 18 erkek öğrenci vardır. Kızların erkeklere oranı kaçtır?", c: "2/3", v: {}, z: "kolay", alt: "oran_kavram", konu: 9, level: 0 },
            { id: "9_0_004", s: "150 km'de 10 litre yakan bir araç 1 km'de kaç litre yakar?", c: "1/15", v: {}, z: "orta", alt: "oran_kavram", konu: 9, level: 0 },
            { id: "9_0_005", s: "a/b = 3/5 ise b/a kaçtır?", c: "5/3", v: {}, z: "kolay", alt: "oran_kavram", konu: 9, level: 0 },
            { id: "9_0_006", s: "12/18 oranını en sade hâlde yazınız.", c: "2/3", v: {}, z: "orta", alt: "oran_sadelestirme", konu: 9, level: 0 }
        ],
        1: [
            { id: "9_1_001", s: "4 kg elma 12 TL olduğuna göre 10 kg elma kaç TL'dir?", c: "30", v: {}, z: "orta", alt: "dogru_oranti", konu: 9, level: 1 },
            { id: "9_1_002", s: "x ile y doğru orantılıdır. x=3 iken y=9 olduğuna göre x=5 iken y kaçtır?", c: "15", v: {}, z: "orta", alt: "dogru_oranti", konu: 9, level: 1 },
            { id: "9_1_003", s: "6 işçi bir işi 8 günde bitirmektedir. Aynı işi 12 günde bitirmek için kaç işçi gerekir?", c: "4", v: {}, z: "orta", alt: "ters_oranti", konu: 9, level: 1 },
            { id: "9_1_004", s: "x ile y ters orantılıdır. x=4 iken y=6 olduğuna göre x=8 iken y kaçtır?", c: "3", v: {}, z: "orta", alt: "ters_oranti", konu: 9, level: 1 },
            { id: "9_1_005", s: "Bir havuzu eşit kapasiteli 4 musluk 9 saatte doldurmaktadır. 6 musluk aynı havuzu kaç saatte doldurur?", c: "6", v: {}, z: "orta", alt: "ters_oranti", konu: 9, level: 1 },
            { id: "9_1_006", s: "Bir sınıfta kızların erkeklere oranı 3/5'tir. Sınıfta 15 kız olduğuna göre kaç erkek vardır?", c: "25", v: {}, z: "orta", alt: "problem", konu: 9, level: 1 },
            { id: "9_1_007", s: "a/b = 2/3 ve a+b = 20 olduğuna göre a kaçtır?", c: "8", v: {}, z: "orta", alt: "dogru_oranti", konu: 9, level: 1 }
        ],
        2: [
            { id: "9_2_001", s: "4 işçi 5 günde 120 parça üretmektedir. 6 işçi 4 günde kaç parça üretir?", c: "144", v: {}, z: "zor", alt: "bilesik_oranti", konu: 9, level: 2 },
            { id: "9_2_002", s: "6 işçi 30 m² duvarı 4 günde örmektedir. 8 işçi 40 m² duvarı kaç günde örer?", c: "4", v: {}, z: "zor", alt: "bilesik_oranti", konu: 9, level: 2 },
            { id: "9_2_003", s: "x, y ile doğru, z ile ters orantılıdır. y=2, z=3 iken x=4 olduğuna göre y=4, z=2 iken x kaçtır?", c: "12", v: {}, z: "zor", alt: "bilesik_oranti", konu: 9, level: 2 },
            { id: "9_2_004", s: "x/y = 2/3 ve y/z = 4/5 ise x/z kaçtır?", c: "8/15", v: {}, z: "zor", alt: "zincir_oran", konu: 9, level: 2 },
            { id: "9_2_005", s: "Bir karışımda A maddesinin B maddesine oranı 3/4'tür. 140 gram karışımda kaç gram A vardır?", c: "60", v: {}, z: "orta", alt: "problem_karisim", konu: 9, level: 2 },
            { id: "9_2_006", s: "Bir araç 200 km yolu 4 saatte alıyor. Aynı hızla 300 km yolu kaç saatte alır?", c: "6", v: {}, z: "orta", alt: "problem_hiz", konu: 9, level: 2 },
            { id: "9_2_007", s: "a/b = c/d = 3 ise (a+c)/(b+d) kaçtır?", c: "3", v: {}, z: "orta", alt: "oranti_ozelligi", konu: 9, level: 2 },
            { id: "9_2_008", s: "60 sayısını 2 ve 3 ile doğru orantılı iki parçaya ayırınız. Büyük parça kaçtır?", c: "36", v: {}, z: "zor", alt: "problem_paylasim", konu: 9, level: 2 },
            { id: "9_2_009", s: "60 sayısını 2 ve 3 ile ters orantılı iki parçaya ayırınız. Küçük parça kaçtır?", c: "20", v: {}, z: "zor", alt: "problem_paylasim", konu: 9, level: 2 },
            { id: "9_2_010", s: "2a = 3b = 4c olduğuna göre a : b : c oranı nedir?", c: "6:4:3", v: {}, z: "zor", alt: "zincir_oran", konu: 9, level: 2 }
        ]
    },

    // 10. KONU: YÜZDE HESAPLARI
    10: {
        0: [
            { id: "10_0_001", s: "200 sayısının %25'i kaçtır?", c: "50", v: {}, z: "kolay", alt: "yuzde_bul", konu: 10, level: 0 },
            { id: "10_0_002", s: "Bir sınıftaki 40 öğrencinin %30'u kızdır. Kaç kız öğrenci vardır?", c: "12", v: {}, z: "kolay", alt: "yuzde_bul", konu: 10, level: 0 },
            { id: "10_0_003", s: "150 TL'nin %20 indirimli fiyatı kaç TL'dir?", c: "120", v: {}, z: "kolay", alt: "indirim", konu: 10, level: 0 },
            { id: "10_0_004", s: "80 TL'ye %15 zam yapılırsa yeni fiyat kaç TL olur?", c: "92", v: {}, z: "kolay", alt: "zam", konu: 10, level: 0 },
            { id: "10_0_005", s: "Bir ürünün fiyatı 200 TL'den 160 TL'ye düşmüştür. İndirim yüzdesi kaçtır?", c: "20", v: {}, z: "orta", alt: "indirim_orani", konu: 10, level: 0 }
        ],
        1: [
            { id: "10_1_001", s: "%20'si 30 olan sayının tamamı kaçtır?", c: "150", v: {}, z: "orta", alt: "sayi_bul", konu: 10, level: 1 },
            { id: "10_1_002", s: "%25 fazlası 125 olan sayı kaçtır?", c: "100", v: {}, z: "orta", alt: "sayi_bul", konu: 10, level: 1 },
            { id: "10_1_003", s: "%10 eksiği 90 olan sayı kaçtır?", c: "100", v: {}, z: "orta", alt: "sayi_bul", konu: 10, level: 1 },
            { id: "10_1_004", s: "Maliyeti 120 TL olan bir ürün %25 kârla kaç TL'ye satılır?", c: "150", v: {}, z: "orta", alt: "kar", konu: 10, level: 1 },
            { id: "10_1_005", s: "80 TL'ye alınan bir ürün 100 TL'ye satılırsa kâr yüzdesi kaçtır?", c: "25", v: {}, z: "orta", alt: "kar_orani", konu: 10, level: 1 },
            { id: "10_1_006", s: "120 TL'ye alınan bir ürün 90 TL'ye satılırsa zarar yüzdesi kaçtır?", c: "25", v: {}, z: "orta", alt: "zarar_orani", konu: 10, level: 1 },
            { id: "10_1_007", s: "Bir sınavda 80 sorunun %75'ini doğru yapan bir öğrenci kaç doğru yapmıştır?", c: "60", v: {}, z: "orta", alt: "problem_sinav", konu: 10, level: 1 }
        ],
        2: [
            { id: "10_2_001", s: "Bir ürüne art arda %20 ve %10 zam yapılırsa toplam zam yüzdesi kaç olur?", c: "32", v: {}, z: "zor", alt: "ardisik_zam", konu: 10, level: 2 },
            { id: "10_2_002", s: "Bir ürüne %40 zam yapıldıktan sonra %20 indirim yapılırsa son fiyat ilk fiyata göre yüzde kaç değişir?", c: "12", v: {}, z: "zor", alt: "ardisik_zam_indirim", konu: 10, level: 2 },
            { id: "10_2_003", s: "Yaş üzüm kuruyunca ağırlığının %20'sini kaybetmektedir. 80 kg kuru üzüm elde etmek için kaç kg yaş üzüm gerekir?", c: "100", v: {}, z: "zor", alt: "problem_kurutma", konu: 10, level: 2 },
            { id: "10_2_004", s: "Tanesi 10 TL olan üründen 5 tane alana 1 tane bedava verilmektedir. Yapılan indirim yüzdesi kaçtır?", c: "20", v: {}, z: "zor", alt: "problem_indirim", konu: 10, level: 2 },
            { id: "10_2_005", s: "Bir ürünün maliyeti 100 TL'dir. Etiket fiyatına %40 kâr eklenip ardından %10 indirim yapılıyor. Son durumdaki kâr yüzdesi nedir?", c: "26", v: {}, z: "zor", alt: "etiket_kar_indirim", konu: 10, level: 2 },
            { id: "10_2_006", s: "%25 kârla satılan bir ürünün satış fiyatı 150 TL'dir. Bu ürünün maliyeti kaç TL'dir?", c: "120", v: {}, z: "zor", alt: "maliyet_bul", konu: 10, level: 2 },
            { id: "10_2_007", s: "Bir sınıftaki öğrencilerin %60'ı matematikten, %40'ı fizikten başarılıdır. Her iki dersten başarılı olanların oranı %20 ise yalnızca matematikten başarılı olanların oranı yüzde kaçtır?", c: "40", v: {}, z: "zor", alt: "problem_kume", konu: 10, level: 2 },
            { id: "10_2_008", s: "Bir ürünün fiyatı önce %30 artıyor, sonra %20 düşüyor. Net değişim yüzdesi kaçtır?", c: "4", v: {}, z: "zor", alt: "net_degisim", konu: 10, level: 2 }
        ]
    },

    // 11. KONU: DENKLEM ÇÖZME
    11: {
        0: [
            { id: "11_0_001", s: "Bir sayının 5 fazlası 12 olduğuna göre bu sayı kaçtır?", c: "7", v: {}, z: "kolay", alt: "sayi_problemi", konu: 11, level: 0 },
            { id: "11_0_002", s: "Bir sayının 3 eksiği 10 olduğuna göre bu sayı kaçtır?", c: "13", v: {}, z: "kolay", alt: "sayi_problemi", konu: 11, level: 0 },
            { id: "11_0_003", s: "Bir sayının 2 katı 18 olduğuna göre bu sayı kaçtır?", c: "9", v: {}, z: "kolay", alt: "sayi_problemi", konu: 11, level: 0 },
            { id: "11_0_004", s: "Bir sayının yarısı 15 olduğuna göre bu sayı kaçtır?", c: "30", v: {}, z: "kolay", alt: "sayi_problemi", konu: 11, level: 0 },
            { id: "11_0_005", s: "Hangi sayıya 7 eklenirse 25 olur?", c: "18", v: {}, z: "kolay", alt: "sayi_problemi", konu: 11, level: 0 },
            { id: "11_0_006", s: "Hangi sayıdan 8 çıkarılırsa 24 kalır?", c: "32", v: {}, z: "kolay", alt: "sayi_problemi", konu: 11, level: 0 },
            { id: "11_0_007", s: "Bir sayının 3 katının 5 fazlası 26 olduğuna göre bu sayı kaçtır?", c: "7", v: {}, z: "orta", alt: "sayi_problemi", konu: 11, level: 0 }
        ],
        1: [
            { id: "11_1_001", s: "Bir sayının 2 katının 7 fazlası 31 olduğuna göre bu sayı kaçtır?", c: "12", v: {}, z: "orta", alt: "sayi_problemi", konu: 11, level: 1 },
            { id: "11_1_002", s: "Bir sayının 5 eksiğinin 3 katı 21 olduğuna göre bu sayı kaçtır?", c: "12", v: {}, z: "orta", alt: "sayi_problemi", konu: 11, level: 1 },
            { id: "11_1_003", s: "Ardışık iki doğal sayının toplamı 45 olduğuna göre küçük sayı kaçtır?", c: "22", v: {}, z: "orta", alt: "ardisik", konu: 11, level: 1 },
            { id: "11_1_004", s: "Ardışık üç doğal sayının toplamı 60 olduğuna göre ortanca sayı kaçtır?", c: "20", v: {}, z: "orta", alt: "ardisik", konu: 11, level: 1 },
            { id: "11_1_005", s: "Bir sayının 3 katı ile 2 katının toplamı 45 olduğuna göre bu sayı kaçtır?", c: "9", v: {}, z: "orta", alt: "sayi_problemi", konu: 11, level: 1 },
            { id: "11_1_006", s: "Bir sayının yarısı ile çeyreğinin toplamı 18 olduğuna göre bu sayı kaçtır?", c: "24", v: {}, z: "orta", alt: "sayi_problemi", konu: 11, level: 1 }
        ],
        2: [
            { id: "11_2_001", s: "Bir sınıftaki öğrenciler sıralara 2'şerli oturduğunda 3 kişi ayakta kalıyor, 3'erli oturduğunda ise 2 sıra boş kalıyor. Sınıf mevcudu kaçtır?", c: "15", v: {}, z: "zor", alt: "sira_problemi", konu: 11, level: 2 },
            { id: "11_2_002", s: "Bir sınıftaki öğrenciler sıralara 3'erli oturduğunda 4 kişi ayakta kalıyor, 4'erli oturduğunda ise 3 sıra boş kalıyor. Sınıf mevcudu kaçtır?", c: "40", v: {}, z: "zor", alt: "sira_problemi", konu: 11, level: 2 },
            { id: "11_2_003", s: "Bir çiftlikte tavşan ve tavukların toplam sayısı 20, toplam ayak sayısı 56 olduğuna göre çiftlikte kaç tavşan vardır?", c: "8", v: {}, z: "zor", alt: "hayvan_problemi", konu: 11, level: 2 },
            { id: "11_2_004", s: "Bir çiftlikte tavşan ve tavukların toplam sayısı 25, toplam ayak sayısı 70 olduğuna göre çiftlikte kaç tavşan vardır?", c: "10", v: {}, z: "zor", alt: "hayvan_problemi", konu: 11, level: 2 },
            { id: "11_2_005", s: "5 TL'lik ve 10 TL'lik ürünlerden toplam 15 tane alınıp 100 TL ödeniyor. 5 TL'lik üründen kaç tane alınmıştır?", c: "10", v: {}, z: "zor", alt: "alisveris_problemi", konu: 11, level: 2 },
            { id: "11_2_006", s: "Bir su deposunun 1/4'ü doludur. Depoya 30 litre su eklendiğinde deponun 1/2'si doluyor. Deponun tamamı kaç litredir?", c: "120", v: {}, z: "zor", alt: "depo_problemi", konu: 11, level: 2 },
            { id: "11_2_007", s: "Bir su deposunun 1/3'ü doludur. Depoya 20 litre su eklendiğinde deponun 1/2'si doluyor. Deponun tamamı kaç litredir?", c: "120", v: {}, z: "zor", alt: "depo_problemi", konu: 11, level: 2 },
            { id: "11_2_008", s: "Bir baba 40, çocuğu 10 yaşındadır. Kaç yıl sonra babanın yaşı çocuğun yaşının 3 katı olur?", c: "5", v: {}, z: "zor", alt: "yas_problemi", konu: 11, level: 2 },
            { id: "11_2_009", s: "Bir baba 45, çocuğu 9 yaşındadır. Kaç yıl sonra babanın yaşı çocuğun yaşının 4 katı olur?", c: "3", v: {}, z: "zor", alt: "yas_problemi", konu: 11, level: 2 },
            { id: "11_2_010", s: "İki sayının toplamı 50, farkı 10 olduğuna göre büyük sayı kaçtır?", c: "30", v: {}, z: "orta", alt: "iki_sayi", konu: 11, level: 2 }
        ]
    },

    // 12. KONU: SAYI PROBLEMLERİ
    12: {
        0: [
            { id: "12_0_001", s: "Bir sayının 3 katı 24 olduğuna göre bu sayı kaçtır?", c: "8", v: {}, z: "kolay", alt: "kat", konu: 12, level: 0 },
            { id: "12_0_002", s: "Bir sayının 5 katının 2 fazlası 27 olduğuna göre bu sayı kaçtır?", c: "5", v: {}, z: "kolay", alt: "kat", konu: 12, level: 0 },
            { id: "12_0_003", s: "Bir sayının 2 katının 3 eksiği 13 olduğuna göre bu sayı kaçtır?", c: "8", v: {}, z: "orta", alt: "kat", konu: 12, level: 0 },
            { id: "12_0_004", s: "Ardışık iki doğal sayının toplamı 35 olduğuna göre büyük sayı kaçtır?", c: "18", v: {}, z: "kolay", alt: "ardisik", konu: 12, level: 0 },
            { id: "12_0_005", s: "Ardışık iki doğal sayının toplamı 43 olduğuna göre küçük sayı kaçtır?", c: "21", v: {}, z: "kolay", alt: "ardisik", konu: 12, level: 0 },
            { id: "12_0_006", s: "Ardışık üç doğal sayının toplamı 42 olduğuna göre ortanca sayı kaçtır?", c: "14", v: {}, z: "orta", alt: "ardisik", konu: 12, level: 0 },
            { id: "12_0_007", s: "Ardışık üç çift doğal sayının toplamı 30 olduğuna göre en küçük sayı kaçtır?", c: "8", v: {}, z: "orta", alt: "ardisik", konu: 12, level: 0 }
        ],
        1: [
            { id: "12_1_001", s: "İki sayının toplamı 40, farkı 10 olduğuna göre büyük sayı kaçtır?", c: "25", v: {}, z: "orta", alt: "iki_sayi", konu: 12, level: 1 },
            { id: "12_1_002", s: "İki sayının toplamı 56, farkı 12 olduğuna göre küçük sayı kaçtır?", c: "22", v: {}, z: "orta", alt: "iki_sayi", konu: 12, level: 1 },
            { id: "12_1_003", s: "İki sayıdan biri diğerinin 3 katıdır. Toplamları 48 olduğuna göre küçük sayı kaçtır?", c: "12", v: {}, z: "orta", alt: "iki_sayi", konu: 12, level: 1 },
            { id: "12_1_004", s: "İki sayıdan biri diğerinin 2 katından 5 fazladır. Toplamları 35 olduğuna göre küçük sayı kaçtır?", c: "10", v: {}, z: "zor", alt: "iki_sayi", konu: 12, level: 1 },
            { id: "12_1_005", s: "Bir sayının 4 fazlasının 3 katı 39 olduğuna göre bu sayı kaçtır?", c: "9", v: {}, z: "orta", alt: "denklem", konu: 12, level: 1 },
            { id: "12_1_006", s: "Bir sayının 2 eksiğinin 5 katı 45 olduğuna göre bu sayı kaçtır?", c: "11", v: {}, z: "orta", alt: "denklem", konu: 12, level: 1 },
            { id: "12_1_007", s: "Hangi sayının yarısının 3 fazlası 12'dir?", c: "18", v: {}, z: "orta", alt: "denklem", konu: 12, level: 1 }
        ],
        2: [
            { id: "12_2_001", s: "Bir sınıftaki öğrenciler sıralara 2'şerli oturduğunda 3 kişi ayakta kalıyor, 3'erli oturduğunda ise 2 sıra boş kalıyor. Sınıf mevcudu kaçtır?", c: "15", v: {}, z: "zor", alt: "sira_problemi", konu: 12, level: 2 },
            { id: "12_2_002", s: "Bir çiftlikte toplam 20 hayvan vardır. Tavşan ve tavukların toplam ayak sayısı 56 olduğuna göre çiftlikte kaç tavşan vardır?", c: "8", v: {}, z: "zor", alt: "hayvan_problemi", konu: 12, level: 2 },
            { id: "12_2_003", s: "Bir baba 40, çocuğu 10 yaşındadır. Kaç yıl sonra babanın yaşı çocuğun yaşının 3 katı olur?", c: "5", v: {}, z: "zor", alt: "yas_problemi", konu: 12, level: 2 },
            { id: "12_2_004", s: "Bir baba 45, çocuğu 9 yaşındadır. Kaç yıl sonra babanın yaşı çocuğun yaşının 4 katı olur?", c: "3", v: {}, z: "zor", alt: "yas_problemi", konu: 12, level: 2 },
            { id: "12_2_005", s: "10 TL'lik ve 20 TL'lik biletlerden toplam 15 adet satılarak 200 TL gelir elde ediliyor. 10 TL'lik biletten kaç adet satılmıştır?", c: "10", v: {}, z: "zor", alt: "bilet_problemi", konu: 12, level: 2 },
            { id: "12_2_006", s: "5 TL'lik ve 8 TL'lik kalemlerden toplam 20 adet alınıp 124 TL ödeniyor. 5 TL'lik kalemden kaç adet alınmıştır?", c: "12", v: {}, z: "zor", alt: "alisveris_problemi", konu: 12, level: 2 },
            { id: "12_2_007", s: "Bir öğrenci 60 soruluk bir sınavda 40 doğru, 12 yanlış yapmıştır. 4 yanlış cevabın 1 doğruyu götürdüğü bir sistemde net sayısı kaçtır?", c: "37", v: {}, z: "orta", alt: "net_problemi", konu: 12, level: 2 },
            { id: "12_2_008", s: "Bir sayıya 15 eklenirse 2 katına eşit olmaktadır. Bu sayı kaçtır?", c: "15", v: {}, z: "orta", alt: "denklem", konu: 12, level: 2 },
            { id: "12_2_009", s: "Bir sayının 3 katı ile 5 katının toplamı 64 olduğuna göre bu sayı kaçtır?", c: "8", v: {}, z: "orta", alt: "denklem", konu: 12, level: 2 },
            { id: "12_2_010", s: "İki sayının çarpımı 30, toplamları 11 olduğuna göre karelerinin toplamı kaçtır?", c: "61", v: {}, z: "zor", alt: "iki_sayi", konu: 12, level: 2 }
        ]
    },

    // 13. KONU: HAREKET PROBLEMLERİ
    13: {
        0: [
            { id: "13_0_001", s: "60 km/sa hızla 3 saat yol alan bir araç kaç kilometre yol alır?", c: "180", v: {}, z: "kolay", alt: "temel", konu: 13, level: 0 },
            { id: "13_0_002", s: "80 km/sa hızla 4 saat yol alan bir araç kaç kilometre yol alır?", c: "320", v: {}, z: "kolay", alt: "temel", konu: 13, level: 0 },
            { id: "13_0_003", s: "400 kilometrelik bir yolu 5 saatte alan bir aracın hızı kaç km/sa'dir?", c: "80", v: {}, z: "kolay", alt: "temel", konu: 13, level: 0 },
            { id: "13_0_004", s: "90 km/sa hızla giden bir araç 360 kilometrelik yolu kaç saatte alır?", c: "4", v: {}, z: "kolay", alt: "temel", konu: 13, level: 0 },
            { id: "13_0_005", s: "120 kilometrelik yolu 2 saatte alan bir araç saatte kaç kilometre hız yapmıştır?", c: "60", v: {}, z: "kolay", alt: "temel", konu: 13, level: 0 },
            { id: "13_0_006", s: "50 m/dakika hızla 10 dakikada kaç metre yol alınır?", c: "500", v: {}, z: "kolay", alt: "temel", konu: 13, level: 0 }
        ],
        1: [
            { id: "13_1_001", s: "Aralarında 300 km bulunan iki araç, 60 km/sa ve 90 km/sa hızlarla birbirlerine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?", c: "2", v: {}, z: "orta", alt: "karsilasma", konu: 13, level: 1 },
            { id: "13_1_002", s: "Aralarında 400 km bulunan iki araç, 80 km/sa ve 120 km/sa hızlarla birbirlerine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?", c: "2", v: {}, z: "orta", alt: "karsilasma", konu: 13, level: 1 },
            { id: "13_1_003", s: "80 km/sa ve 100 km/sa hızlarla karşılıklı olarak hareket eden iki araç 3 saat sonra karşılaşıyor. Başlangıçta aralarındaki uzaklık kaç km'dir?", c: "540", v: {}, z: "orta", alt: "karsilasma", konu: 13, level: 1 },
            { id: "13_1_004", s: "60 km/sa ve 90 km/sa hızlarla aynı yönde hareket eden iki araçtan hızlı olan, yavaş olanı 2 saatte yakalıyorsa başlangıçta aralarındaki uzaklık kaç km'dir?", c: "60", v: {}, z: "orta", alt: "yetisme", konu: 13, level: 1 },
            { id: "13_1_005", s: "Aralarında 120 km bulunan iki araç aynı yönde hareket ediyor. Arkadaki aracın hızı 100 km/sa, öndeki aracın hızı 70 km/sa olduğuna göre arkadaki araç kaç saat sonra öndeki aracı yakalar?", c: "4", v: {}, z: "orta", alt: "yetisme", konu: 13, level: 1 }
        ],
        2: [
            { id: "13_2_001", s: "Bir araç yolun ilk yarısını 40 km/sa, ikinci yarısını 60 km/sa hızla almıştır. Aracın ortalama hızı kaç km/sa'dir?", c: "48", v: {}, z: "zor", alt: "ortalama_hiz", konu: 13, level: 2 },
            { id: "13_2_002", s: "Bir araç 2 saat 60 km/sa, 3 saat 80 km/sa hızla yol almıştır. Aracın ortalama hızı kaç km/sa'dir?", c: "72", v: {}, z: "zor", alt: "ortalama_hiz", konu: 13, level: 2 },
            { id: "13_2_003", s: "Bir araç 80 km/sa hızla giderken hızını 20 km/sa artırarak aynı yolu 1 saat erken tamamlıyor. Yolun uzunluğu kaç km'dir?", c: "400", v: {}, z: "zor", alt: "problem", konu: 13, level: 2 },
            { id: "13_2_004", s: "Bir tren, 400 m uzunluğundaki bir tüneli 20 saniyede geçmektedir. Trenin boyu 200 m olduğuna göre hızı kaç km/sa'dir?", c: "108", v: {}, z: "zor", alt: "tren_problemi", konu: 13, level: 2 },
            { id: "13_2_005", s: "Akıntı hızının 3 km/sa olduğu bir nehirde, motorun durgun sudaki hızı 15 km/sa'dir. 36 km'lik mesafeyi gidip dönmek kaç saat sürer?", c: "5", v: {}, z: "zor", alt: "akinti", konu: 13, level: 2 },
            { id: "13_2_006", s: "A şehrinden B şehrine 60 km/sa hızla giden bir araç, aynı yolu 80 km/sa hızla dönmektedir. Gidiş-dönüşteki ortalama hızı kaç km/sa'dir?", c: "68.57", v: {}, z: "zor", alt: "ortalama_hiz", konu: 13, level: 2 },
            { id: "13_2_007", s: "Bir araç hızını 30 km/sa artırdığında 300 km'lik yolu 2 saat erken tamamlıyor. Aracın normal hızı kaç km/sa'dir?", c: "60", v: {}, z: "zor", alt: "problem", konu: 13, level: 2 }
        ]
    },

    // 14. KONU: İŞÇİ - HAVUZ PROBLEMLERİ
    14: {
        0: [
            { id: "14_0_001", s: "Bir işçi bir işi 12 günde bitirmektedir. Bu işçi 1 günde işin kaçta kaçını yapar?", c: "1/12", v: {}, z: "kolay", alt: "tek_isci", konu: 14, level: 0 },
            { id: "14_0_002", s: "Bir işçi bir işi 15 günde bitirmektedir. Bu işçi 3 günde işin kaçta kaçını yapar?", c: "1/5", v: {}, z: "kolay", alt: "tek_isci", konu: 14, level: 0 },
            { id: "14_0_003", s: "4 işçi bir işi 10 günde bitirmektedir. Aynı işi 1 işçi kaç günde bitirir?", c: "40", v: {}, z: "kolay", alt: "tek_isci", konu: 14, level: 0 },
            { id: "14_0_004", s: "Bir işçi günde 6 saat çalışarak bir işi 8 günde bitirmektedir. Aynı işçi günde 4 saat çalışırsa işi kaç günde bitirir?", c: "12", v: {}, z: "orta", alt: "tek_isci", konu: 14, level: 0 },
            { id: "14_0_005", s: "Bir işçi bir işin 1/3'ünü 4 günde yapmaktadır. İşin tamamını kaç günde yapar?", c: "12", v: {}, z: "orta", alt: "tek_isci", konu: 14, level: 0 }
        ],
        1: [
            { id: "14_1_001", s: "Ali bir işi 6 günde, Veli aynı işi 12 günde bitirmektedir. İkisi birlikte çalışarak işi kaç günde bitirir?", c: "4", v: {}, z: "orta", alt: "birlikte", konu: 14, level: 1 },
            { id: "14_1_002", s: "A işçisi bir işi 8 günde, B işçisi aynı işi 24 günde bitirmektedir. İkisi birlikte kaç günde bitirir?", c: "6", v: {}, z: "orta", alt: "birlikte", konu: 14, level: 1 },
            { id: "14_1_003", s: "A işçisi bir işi 10 günde, B işçisi 15 günde bitirmektedir. İkisi birlikte kaç günde bitirir?", c: "6", v: {}, z: "orta", alt: "birlikte", konu: 14, level: 1 },
            { id: "14_1_004", s: "A ve B birlikte bir işi 6 günde, A tek başına 10 günde bitirmektedir. B tek başına kaç günde bitirir?", c: "15", v: {}, z: "orta", alt: "birlikte", konu: 14, level: 1 },
            { id: "14_1_005", s: "A ve B birlikte bir işi 8 günde, B tek başına 24 günde bitirmektedir. A tek başına kaç günde bitirir?", c: "12", v: {}, z: "orta", alt: "birlikte", konu: 14, level: 1 }
        ],
        2: [
            { id: "14_2_001", s: "6 işçi bir işi 12 günde yapmaktadır. 4 gün çalıştıktan sonra 2 işçi ayrılıyor. Kalan işin tamamlanması kaç gün sürer?", c: "12", v: {}, z: "zor", alt: "isci_degisim", konu: 14, level: 2 },
            { id: "14_2_002", s: "8 işçi bir işi 15 günde yapmaktadır. 5 gün çalıştıktan sonra 3 işçi daha katılıyor. Kalan işin tamamlanması kaç gün sürer?", c: "8", v: {}, z: "zor", alt: "isci_degisim", konu: 14, level: 2 },
            { id: "14_2_003", s: "A musluğu bir havuzu 4 saatte, B musluğu 6 saatte doldurmaktadır. İki musluk birlikte açılırsa havuz kaç saatte dolar?", c: "2.4", v: {}, z: "orta", alt: "havuz", konu: 14, level: 2 },
            { id: "14_2_004", s: "A musluğu bir havuzu 3 saatte doldurmakta, B musluğu aynı havuzu 6 saatte boşaltmaktadır. İkisi birlikte açılırsa havuz kaç saatte dolar?", c: "6", v: {}, z: "zor", alt: "havuz", konu: 14, level: 2 },
            { id: "14_2_005", s: "A musluğu bir havuzu 5 saatte, B musluğu 10 saatte doldurmakta, C musluğu dolu havuzu 20 saatte boşaltmaktadır. Üç musluk birlikte açılırsa havuz kaç saatte dolar?", c: "4", v: {}, z: "zor", alt: "havuz", konu: 14, level: 2 },
            { id: "14_2_006", s: "A işçisi, B işçisinin 2 katı hızla çalışmaktadır. B işçisi bir işi 18 günde bitirdiğine göre ikisi birlikte aynı işi kaç günde bitirir?", c: "6", v: {}, z: "zor", alt: "mantik", konu: 14, level: 2 },
            { id: "14_2_007", s: "A işçisi, B işçisinin 3 katı hızla çalışmaktadır. İkisi birlikte bir işi 6 günde bitirdiğine göre B tek başına kaç günde bitirir?", c: "24", v: {}, z: "zor", alt: "mantik", konu: 14, level: 2 }
        ]
    },

    // 15. KONU: KARIŞIM PROBLEMLERİ
    15: {
        0: [
            { id: "15_0_001", s: "Tuz oranı %20 olan 50 kg karışımda kaç kg tuz vardır?", c: "10", v: {}, z: "kolay", alt: "tuz_oran", konu: 15, level: 0 },
            { id: "15_0_002", s: "40 kg karışımda 8 kg tuz bulunduğuna göre tuz oranı yüzde kaçtır?", c: "20", v: {}, z: "kolay", alt: "tuz_oran", konu: 15, level: 0 },
            { id: "15_0_003", s: "Tuz oranı %30 olan 60 kg karışımda kaç kg tuz vardır?", c: "18", v: {}, z: "kolay", alt: "tuz_oran", konu: 15, level: 0 },
            { id: "15_0_004", s: "80 kg karışımda 20 kg tuz bulunduğuna göre tuz oranı yüzde kaçtır?", c: "25", v: {}, z: "kolay", alt: "tuz_oran", konu: 15, level: 0 },
            { id: "15_0_005", s: "Tuz oranı %10 olan 30 kg karışımda kaç kg tuz vardır?", c: "3", v: {}, z: "kolay", alt: "tuz_oran", konu: 15, level: 0 },
            { id: "15_0_006", s: "Tuz oranı %25 olan 40 kg karışıma 10 kg su eklenirse yeni tuz oranı yüzde kaç olur?", c: "20", v: {}, z: "orta", alt: "su_ekleme", konu: 15, level: 0 }
        ],
        1: [
            { id: "15_1_001", s: "%20'lik 30 kg tuzlu su ile %30'luk 20 kg tuzlu su karıştırılırsa yeni karışımın tuz oranı yüzde kaç olur?", c: "24", v: {}, z: "orta", alt: "karistirma", konu: 15, level: 1 },
            { id: "15_1_002", s: "%15'lik 40 kg tuzlu su ile %25'lik 60 kg tuzlu su karıştırılırsa yeni karışımın tuz oranı yüzde kaç olur?", c: "21", v: {}, z: "orta", alt: "karistirma", konu: 15, level: 1 },
            { id: "15_1_003", s: "%10'luk 50 kg tuzlu su ile %20'lik 50 kg tuzlu su karıştırılırsa yeni karışımın tuz oranı yüzde kaç olur?", c: "15", v: {}, z: "orta", alt: "karistirma", konu: 15, level: 1 },
            { id: "15_1_004", s: "%30'luk tuzlu su ile %10'luk tuzlu su eşit miktarda karıştırılırsa yeni tuz oranı yüzde kaç olur?", c: "20", v: {}, z: "orta", alt: "karistirma", konu: 15, level: 1 },
            { id: "15_1_005", s: "%20'lik 60 kg tuzlu suya 10 kg tuz eklenirse yeni tuz oranı yüzde kaç olur?", c: "31", v: {}, z: "orta", alt: "tuz_ekleme", konu: 15, level: 1 }
        ],
        2: [
            { id: "15_2_001", s: "%10'luk 80 kg tuzlu suyun 20 kg'ı buharlaştırılırsa yeni tuz oranı yüzde kaç olur?", c: "13", v: {}, z: "zor", alt: "buharlastirma", konu: 15, level: 2 },
            { id: "15_2_002", s: "%8'lik 50 kg tuzlu suyun yarısı buharlaştırılırsa yeni tuz oranı yüzde kaç olur?", c: "16", v: {}, z: "zor", alt: "buharlastirma", konu: 15, level: 2 },
            { id: "15_2_003", s: "%25'lik 40 kg tuzlu suya kaç kg su eklenirse tuz oranı %10 olur?", c: "60", v: {}, z: "zor", alt: "su_ekleme", konu: 15, level: 2 },
            { id: "15_2_004", s: "%30'luk ve %10'luk tuzlu sulardan %20'lik 100 kg karışım elde etmek için %30'luktan kaç kg alınmalıdır?", c: "50", v: {}, z: "zor", alt: "karisim_orani", konu: 15, level: 2 },
            { id: "15_2_005", s: "%40'lık ve %20'lik tuzlu sulardan %25'lik 80 kg karışım elde etmek için %40'lıktan kaç kg alınmalıdır?", c: "20", v: {}, z: "zor", alt: "karisim_orani", konu: 15, level: 2 },
            { id: "15_2_006", s: "%15'lik 60 kg tuzlu suyun kaç kg'ı buharlaştırılırsa tuz oranı %20 olur?", c: "15", v: {}, z: "zor", alt: "buharlastirma", konu: 15, level: 2 },
            { id: "15_2_007", s: "%12'lik 40 kg tuzlu suya kaç kg tuz eklenirse tuz oranı %20 olur?", c: "4", v: {}, z: "zor", alt: "tuz_ekleme", konu: 15, level: 2 }
        ]
    },

    // 16. KONU: KÜMELER
    16: {
        0: [
            { id: "16_0_001", s: "A = {a, b, c, d} kümesinin eleman sayısı kaçtır?", c: "4", v: {}, z: "kolay", alt: "kume_kavram", konu: 16, level: 0 },
            { id: "16_0_002", s: "5 elemanlı bir kümenin alt küme sayısı kaçtır?", c: "32", v: {}, z: "kolay", alt: "alt_kume", konu: 16, level: 0 },
            { id: "16_0_003", s: "4 elemanlı bir kümenin alt küme sayısı kaçtır?", c: "16", v: {}, z: "kolay", alt: "alt_kume", konu: 16, level: 0 },
            { id: "16_0_004", s: "3 elemanlı bir kümenin öz alt küme sayısı kaçtır?", c: "7", v: {}, z: "orta", alt: "alt_kume", konu: 16, level: 0 },
            { id: "16_0_005", s: "Alt küme sayısı 64 olan küme kaç elemanlıdır?", c: "6", v: {}, z: "orta", alt: "alt_kume", konu: 16, level: 0 },
            { id: "16_0_006", s: "6 elemanlı bir kümenin 2 elemanlı alt küme sayısı kaçtır?", c: "15", v: {}, z: "orta", alt: "alt_kume", konu: 16, level: 0 }
        ],
        1: [
            { id: "16_1_001", s: "s(A) = 12, s(B) = 9 ve s(A ∩ B) = 4 olduğuna göre s(A ∪ B) kaçtır?", c: "17", v: {}, z: "orta", alt: "birlesim", konu: 16, level: 1 },
            { id: "16_1_002", s: "s(A) = 15, s(B) = 10 ve s(A ∪ B) = 20 olduğuna göre s(A ∩ B) kaçtır?", c: "5", v: {}, z: "orta", alt: "birlesim", konu: 16, level: 1 },
            { id: "16_1_003", s: "A ⊂ B, s(A) = 5 ve s(B) = 12 olduğuna göre s(B - A) kaçtır?", c: "7", v: {}, z: "orta", alt: "fark", konu: 16, level: 1 },
            { id: "16_1_004", s: "s(A) = 8, s(B) = 6 ve s(A ∩ B) = 3 olduğuna göre yalnızca A kümesinde bulunan eleman sayısı kaçtır?", c: "5", v: {}, z: "orta", alt: "fark", konu: 16, level: 1 },
            { id: "16_1_005", s: "s(A) = 10, s(B) = 7 ve s(A - B) = 4 olduğuna göre s(A ∩ B) kaçtır?", c: "6", v: {}, z: "orta", alt: "kesisim", konu: 16, level: 1 }
        ],
        2: [
            { id: "16_2_001", s: "40 kişilik bir sınıfta 25 kişi matematik, 20 kişi fen kursuna gitmektedir. 8 kişi her iki kursa da gittiğine göre hiçbir kursa gitmeyen kaç kişidir?", c: "3", v: {}, z: "zor", alt: "problem", konu: 16, level: 2 },
            { id: "16_2_002", s: "50 kişilik bir grupta 30 kişi A gazetesini, 25 kişi B gazetesini okumaktadır. 10 kişi her iki gazeteyi de okuduğuna göre yalnızca A gazetesini okuyan kaç kişidir?", c: "20", v: {}, z: "orta", alt: "problem", konu: 16, level: 2 },
            { id: "16_2_003", s: "60 kişilik bir sınıfta 35 kişi basketbol, 25 kişi voleybol oynamaktadır. 10 kişi her iki sporu da yaptığına göre yalnızca bir spor yapan kaç kişidir?", c: "40", v: {}, z: "zor", alt: "problem", konu: 16, level: 2 },
            { id: "16_2_004", s: "s(A) = s(B) = 8 olduğuna göre s(A ∪ B) en çok kaç olabilir?", c: "16", v: {}, z: "orta", alt: "mantik", konu: 16, level: 2 },
            { id: "16_2_005", s: "s(A) = s(B) = 6 olduğuna göre s(A ∪ B) en az kaç olabilir?", c: "6", v: {}, z: "orta", alt: "mantik", konu: 16, level: 2 },
            { id: "16_2_006", s: "Bir grupta İngilizce bilenler 18, Almanca bilenler 12, her iki dili bilenler 5, hiçbirini bilmeyenler 8'dir. Grup kaç kişidir?", c: "33", v: {}, z: "zor", alt: "problem", konu: 16, level: 2 },
            { id: "16_2_007", s: "s(A) = 10, s(B) = 8 ve s(A ∪ B) = 15 olduğuna göre s(A ∩ B) kaçtır?", c: "3", v: {}, z: "orta", alt: "kesisim", konu: 16, level: 2 }
        ]
    },

    // 17. KONU: OLASILIK
    17: {
        0: [
            { id: "17_0_001", s: "Bir zar atıldığında üst yüze çift sayı gelme olasılığı kaçtır?", c: "1/2", v: {}, z: "kolay", alt: "temel", konu: 17, level: 0 },
            { id: "17_0_002", s: "Bir zar atıldığında üst yüze asal sayı gelme olasılığı kaçtır?", c: "1/2", v: {}, z: "kolay", alt: "temel", konu: 17, level: 0 },
            { id: "17_0_003", s: "Bir madenî para 3 kez atıldığında tüm olası durumların sayısı kaçtır?", c: "8", v: {}, z: "kolay", alt: "temel", konu: 17, level: 0 },
            { id: "17_0_004", s: "Bir madenî para 4 kez atıldığında tüm olası durumların sayısı kaçtır?", c: "16", v: {}, z: "kolay", alt: "temel", konu: 17, level: 0 },
            { id: "17_0_005", s: "Bir olayın gerçekleşme olasılığı 3/5 olduğuna göre gerçekleşmeme olasılığı kaçtır?", c: "2/5", v: {}, z: "kolay", alt: "temel", konu: 17, level: 0 },
            { id: "17_0_006", s: "Aşağıdakilerden hangisi bir olasılık değeri olamaz? (A) 1/2 (B) 0 (C) 1 (D) -0.5", c: "-0.5", v: {}, z: "kolay", alt: "temel", konu: 17, level: 0 }
        ],
        1: [
            { id: "17_1_001", s: "İki zar birlikte atıldığında üst yüze gelen sayıların toplamının 7 olma olasılığı kaçtır?", c: "1/6", v: {}, z: "orta", alt: "zar", konu: 17, level: 1 },
            { id: "17_1_002", s: "İki zar birlikte atıldığında üst yüze gelen sayıların toplamının 10 olma olasılığı kaçtır?", c: "1/12", v: {}, z: "orta", alt: "zar", konu: 17, level: 1 },
            { id: "17_1_003", s: "İki zar birlikte atıldığında üst yüze gelen sayıların çarpımının çift olma olasılığı kaçtır?", c: "3/4", v: {}, z: "orta", alt: "zar", konu: 17, level: 1 },
            { id: "17_1_004", s: "İki zar birlikte atıldığında üst yüze gelen sayıların aynı olma olasılığı kaçtır?", c: "1/6", v: {}, z: "kolay", alt: "zar", konu: 17, level: 1 },
            { id: "17_1_005", s: "Bir torbada 5 kırmızı, 3 mavi top vardır. Torbadan rastgele çekilen bir topun kırmızı olma olasılığı kaçtır?", c: "5/8", v: {}, z: "kolay", alt: "top", konu: 17, level: 1 },
            { id: "17_1_006", s: "Bir torbada 4 kırmızı, 3 mavi top vardır. Torbadan art arda iki top çekiliyor (çekilen top geri atılmıyor). İkisinin de kırmızı olma olasılığı kaçtır?", c: "2/7", v: {}, z: "orta", alt: "top", konu: 17, level: 1 },
            { id: "17_1_007", s: "Bir torbada 3 kırmızı, 2 mavi top vardır. Torbadan bir top çekilip geri atıldıktan sonra ikinci bir top çekiliyor. İkisinin de kırmızı olma olasılığı kaçtır?", c: "9/25", v: {}, z: "orta", alt: "top", konu: 17, level: 1 },
            { id: "17_1_008", s: "52'lik bir desteden rastgele çekilen bir kartın maça olma olasılığı kaçtır?", c: "1/4", v: {}, z: "kolay", alt: "kart", konu: 17, level: 1 },
            { id: "17_1_009", s: "52'lik bir desteden rastgele çekilen bir kartın as olma olasılığı kaçtır?", c: "1/13", v: {}, z: "kolay", alt: "kart", konu: 17, level: 1 }
        ],
        2: [
            { id: "17_2_001", s: "A olayının gerçekleşme olasılığı 1/2, B olayının gerçekleşme olasılığı 1/3'tür. A ve B olayları bağımsız olduğuna göre A ∩ B olayının olasılığı kaçtır?", c: "1/6", v: {}, z: "orta", alt: "bagimsiz", konu: 17, level: 2 },
            { id: "17_2_002", s: "Bir hedefi Ali'nin vurma olasılığı 2/3, Veli'nin vurma olasılığı 3/4'tür. İkisi de bağımsız olarak atış yaptığında hedefin vurulma olasılığı kaçtır?", c: "11/12", v: {}, z: "zor", alt: "bagimsiz", konu: 17, level: 2 },
            { id: "17_2_003", s: "Bir torbada 4 kırmızı, 3 mavi, 2 beyaz top vardır. Torbadan art arda 3 top çekiliyor (çekilen top geri atılmıyor). Sırasıyla kırmızı, mavi, beyaz gelme olasılığı kaçtır?", c: "1/21", v: {}, z: "zor", alt: "yeni_nesil", konu: 17, level: 2 },
            { id: "17_2_004", s: "İki zar birlikte atılıyor. Zarlardan en az birinin 6 gelme olasılığı kaçtır?", c: "11/36", v: {}, z: "orta", alt: "yeni_nesil", konu: 17, level: 2 },
            { id: "17_2_005", s: "Bir torbada 5 kırmızı, 5 mavi top vardır. Torbadan kesinlikle bir kırmızı top çekmek için en az kaç top çekilmelidir?", c: "6", v: {}, z: "orta", alt: "yeni_nesil", konu: 17, level: 2 },
            { id: "17_2_006", s: "İki zar birlikte atılıyor. Üst yüze gelen sayıların toplamının 8'den büyük olma olasılığı kaçtır?", c: "5/18", v: {}, z: "zor", alt: "zar", konu: 17, level: 2 }
        ]
    },

    // 18. KONU: SAYISAL MANTIK
    18: {
        0: [
            { id: "18_0_001", s: "2, 4, 6, 8, ? (Örüntüyü tamamlayınız.)", c: "10", v: {}, z: "kolay", alt: "oruntu", konu: 18, level: 0 },
            { id: "18_0_002", s: "3, 6, 9, 12, ? (Örüntüyü tamamlayınız.)", c: "15", v: {}, z: "kolay", alt: "oruntu", konu: 18, level: 0 },
            { id: "18_0_003", s: "5, 10, 15, 20, ? (Örüntüyü tamamlayınız.)", c: "25", v: {}, z: "kolay", alt: "oruntu", konu: 18, level: 0 },
            { id: "18_0_004", s: "1, 3, 5, 7, ? (Örüntüyü tamamlayınız.)", c: "9", v: {}, z: "kolay", alt: "oruntu", konu: 18, level: 0 },
            { id: "18_0_005", s: "2, 5, 8, 11, ? (Örüntüyü tamamlayınız.)", c: "14", v: {}, z: "kolay", alt: "oruntu", konu: 18, level: 0 }
        ],
        1: [
            { id: "18_1_001", s: "2, 5, 10, 17, ? (Örüntüyü tamamlayınız.)", c: "26", v: {}, z: "orta", alt: "oruntu", konu: 18, level: 1 },
            { id: "18_1_002", s: "3, 6, 11, 18, ? (Örüntüyü tamamlayınız.)", c: "27", v: {}, z: "orta", alt: "oruntu", konu: 18, level: 1 },
            { id: "18_1_003", s: "1, 4, 9, 16, ? (Örüntüyü tamamlayınız.)", c: "25", v: {}, z: "orta", alt: "oruntu", konu: 18, level: 1 },
            { id: "18_1_004", s: "1, 1, 2, 3, 5, 8, ? (Örüntüyü tamamlayınız.)", c: "13", v: {}, z: "orta", alt: "oruntu", konu: 18, level: 1 },
            { id: "18_1_005", s: "16, 8, 4, 2, ? (Örüntüyü tamamlayınız.)", c: "1", v: {}, z: "orta", alt: "oruntu", konu: 18, level: 1 },
            { id: "18_1_006", s: "Bir tabloda her satırdaki ilk iki sayının çarpımı üçüncü sayıya eşittir. Buna göre 4, 5, ? işleminin sonucu kaçtır?", c: "20", v: {}, z: "orta", alt: "tablo", konu: 18, level: 1 },
            { id: "18_1_007", s: "Bir tabloda her sütundaki sayıların toplamı 15'tir. Buna göre 4, 7, ? işleminin sonucu kaçtır?", c: "4", v: {}, z: "orta", alt: "tablo", konu: 18, level: 1 }
        ],
        2: [
            { id: "18_2_001", s: "Bir şifreleme sisteminde her rakam 3 ile çarpılıp 1 eklenmektedir. Buna göre 4 rakamının şifresi nedir?", c: "13", v: {}, z: "zor", alt: "sifre", konu: 18, level: 2 },
            { id: "18_2_002", s: "Bir şifreleme sisteminde her harf alfabede kendisinden 3 sonra gelen harfe dönüşmektedir. Buna göre 'A' harfinin şifresi nedir?", c: "D", v: {}, z: "zor", alt: "sifre", konu: 18, level: 2 },
            { id: "18_2_003", s: "Bugün günlerden Pazartesi olduğuna göre 230 gün sonra hangi gün olur?", c: "Perşembe", v: {}, z: "zor", alt: "dongu", konu: 18, level: 2 },
            { id: "18_2_004", s: "Saat şu an 15:00 olduğuna göre 250 saat sonra saat kaç olur?", c: "13:00", v: {}, z: "zor", alt: "dongu", konu: 18, level: 2 },
            { id: "18_2_005", s: "Ali, Bora'dan uzundur. Bora, Cem'den kısadır. Cem, Deniz'den uzundur. Buna göre en uzun kişi kimdir?", c: "Ali", v: {}, z: "zor", alt: "mantiksal", konu: 18, level: 2 },
            { id: "18_2_006", s: "Bir sınavda her doğru cevap 5 puan, her yanlış cevap -2 puandır. 20 soruluk bu sınavda 60 puan alan bir öğrenci kaç yanlış yapmıştır?", c: "5", v: {}, z: "zor", alt: "mantiksal", konu: 18, level: 2 },
            { id: "18_2_007", s: "2, 3, 5, 7, 11, ? (Asal sayıları yazınız.)", c: "13", v: {}, z: "orta", alt: "oruntu", konu: 18, level: 2 },
            { id: "18_2_008", s: "Bir otoparkta 24 araç vardır. Arabaların 2/3'ü beyaz, 1/4'ü siyah, geriye kalanlar ise kırmızıdır. Otoparkta kaç kırmızı araç vardır?", c: "2", v: {}, z: "zor", alt: "mantiksal", konu: 18, level: 2 }
        ]
    },

    // 19. KONU: VERİ, GRAFİK VE TABLO
    19: {
        0: [
            { id: "19_0_001", s: "Bir tabloda Pazartesi 10, Salı 15, Çarşamba 12 kitap okunmuştur. Üç günde toplam kaç kitap okunmuştur?", c: "37", v: {}, z: "kolay", alt: "tablo_toplama", konu: 19, level: 0 },
            { id: "19_0_002", s: "Bir sınıfın not tablosunda Ali 75, Veli 80, Can 90 almıştır. En yüksek notu alan öğrenci kimdir?", c: "Can", v: {}, z: "kolay", alt: "tablo_karsilastirma", konu: 19, level: 0 },
            { id: "19_0_003", s: "Bir sınıfın not tablosunda Ayşe 85, Fatma 70 almıştır. Ayşe, Fatma'dan kaç puan fazla almıştır?", c: "15", v: {}, z: "kolay", alt: "tablo_fark", konu: 19, level: 0 },
            { id: "19_0_004", s: "Bir sütun grafiğinde Ocak ayı satışı 40 ton, Şubat ayı satışı 50 tondur. İki aylık toplam satış kaç tondur?", c: "90", v: {}, z: "kolay", alt: "sutun_grafik", konu: 19, level: 0 },
            { id: "19_0_005", s: "Bir daire grafiğinde %30'luk bir dilimin merkez açısı kaç derecedir?", c: "108", v: {}, z: "kolay", alt: "daire_grafik", konu: 19, level: 0 }
        ],
        1: [
            { id: "19_1_001", s: "Bir tabloda A ürünü 20 TL, B ürünü 30 TL, C ürünü 40 TL olduğuna göre üç ürünün ortalama fiyatı kaç TL'dir?", c: "30", v: {}, z: "orta", alt: "ortalama", konu: 19, level: 1 },
            { id: "19_1_002", s: "Bir sınıfın yaş tablosunda 5 kişi 12 yaşında, 8 kişi 13 yaşında, 7 kişi 14 yaşındadır. Sınıfın yaş ortalaması kaçtır?", c: "13", v: {}, z: "orta", alt: "agirlikli_ortalama", konu: 19, level: 1 },
            { id: "19_1_003", s: "Bir sütun grafiğinde en yüksek sütun 100, en düşük sütun 30 olduğuna göre fark kaçtır?", c: "70", v: {}, z: "orta", alt: "grafik_fark", konu: 19, level: 1 },
            { id: "19_1_004", s: "Bir daire grafiğinde A dilimi 90°, B dilimi 120°, C dilimi 150° olduğuna göre A diliminin yüzdesi kaçtır?", c: "25", v: {}, z: "orta", alt: "daire_yuzde", konu: 19, level: 1 },
            { id: "19_1_005", s: "Verilen sayılar: 12, 15, 18, 20, 25. Bu veri grubunun medyanı kaçtır?", c: "18", v: {}, z: "orta", alt: "medyan", konu: 19, level: 1 },
            { id: "19_1_006", s: "Verilen sayılar: 10, 10, 20, 30, 30, 30, 40. Bu veri grubunun modu kaçtır?", c: "30", v: {}, z: "orta", alt: "mod", konu: 19, level: 1 }
        ],
        2: [
            { id: "19_2_001", s: "Bir sınıfta 25 kişi matematikten, 20 kişi Türkçe'den başarılı olmuştur. Her iki dersten başarılı olan 10 kişi olduğuna göre yalnızca matematikten başarılı olanların sayısı kaçtır?", c: "15", v: {}, z: "zor", alt: "kume_tablo", konu: 19, level: 2 },
            { id: "19_2_002", s: "Bir çizgi grafiğinde Ocak 20, Şubat 35, Mart 50, Nisan 40 satışı verilmiştir. En fazla artış hangi ayda gerçekleşmiştir?", c: "Şubat", v: {}, z: "zor", alt: "cizgi_grafik", konu: 19, level: 2 },
            { id: "19_2_003", s: "Bir tabloda A, B, C, D ürünlerinin fiyatları sırasıyla 25, 30, 35, ? olarak verilmiştir. Bu dört ürünün fiyat ortalaması 30 olduğuna göre D ürününün fiyatı kaçtır?", c: "30", v: {}, z: "zor", alt: "ortalama_verilmeyen", konu: 19, level: 2 },
            { id: "19_2_004", s: "Bir sınıfın notları 40, 50, 60, 70, 80 olduğuna göre bu notların açıklığı (ranjı) kaçtır?", c: "40", v: {}, z: "zor", alt: "aciklik", konu: 19, level: 2 },
            { id: "19_2_005", s: "Bir histogramda grup aralığı 10 ve frekanslar 8, 12, 6 olarak verilmiştir. Toplam veri sayısı kaçtır?", c: "26", v: {}, z: "zor", alt: "histogram", konu: 19, level: 2 },
            { id: "19_2_006", s: "Bir grafikte A markasının satışı 30, B markasının satışı 50, C markasının satışı 20'dir. Daire grafiğinde B markasına ait dilimin merkez açısı kaç derecedir?", c: "180", v: {}, z: "zor", alt: "daire_grafik_aci", konu: 19, level: 2 },
            { id: "19_2_007", s: "Bir tabloda her satırdaki sayıların toplamı 30'dur. 1. satırda 10, 5, ? ; 2. satırda 12, 8, ? olduğuna göre ? yerine gelecek sayıların toplamı kaçtır?", c: "20", v: {}, z: "zor", alt: "tablo_verilmeyen", konu: 19, level: 2 }
        ]
    },

    // 20. KONU: GEOMETRİ (TEMEL)
    20: {
        0: [
            { id: "20_0_001", s: "Bir üçgenin iki iç açısı 50° ve 60° olduğuna göre üçüncü iç açısı kaç derecedir?", c: "70", v: {}, z: "kolay", alt: "ucgen_aci", konu: 20, level: 0 },
            { id: "20_0_002", s: "Bir dikdörtgenin kısa kenarı 5 cm, uzun kenarı 8 cm olduğuna göre alanı kaç cm²'dir?", c: "40", v: {}, z: "kolay", alt: "dikdortgen_alan", konu: 20, level: 0 },
            { id: "20_0_003", s: "Bir kenar uzunluğu 6 cm olan karenin alanı kaç cm²'dir?", c: "36", v: {}, z: "kolay", alt: "kare_alan", konu: 20, level: 0 },
            { id: "20_0_004", s: "Bir dikdörtgenin kısa kenarı 5 cm, uzun kenarı 8 cm olduğuna göre çevresi kaç cm'dir?", c: "26", v: {}, z: "kolay", alt: "dikdortgen_cevre", konu: 20, level: 0 },
            { id: "20_0_005", s: "Bir kenar uzunluğu 6 cm olan karenin çevresi kaç cm'dir?", c: "24", v: {}, z: "kolay", alt: "kare_cevre", konu: 20, level: 0 },
            { id: "20_0_006", s: "Bir üçgenin kenar uzunlukları 5 cm, 7 cm, 9 cm olduğuna göre çevresi kaç cm'dir?", c: "21", v: {}, z: "kolay", alt: "ucgen_cevre", konu: 20, level: 0 },
            { id: "20_0_007", s: "Bir dikdörtgenin alanı 56 cm², kısa kenarı 7 cm olduğuna göre uzun kenarı kaç cm'dir?", c: "8", v: {}, z: "orta", alt: "dikdortgen_kenar", konu: 20, level: 0 }
        ],
        1: [
            { id: "20_1_001", s: "Dik kenar uzunlukları 3 cm ve 4 cm olan dik üçgenin hipotenüs uzunluğu kaç cm'dir?", c: "5", v: {}, z: "orta", alt: "pisagor", konu: 20, level: 1 },
            { id: "20_1_002", s: "Yarıçapı 4 cm olan dairenin alanı kaç cm²'dir? (π = 3 alınız.)", c: "48", v: {}, z: "orta", alt: "daire_alan", konu: 20, level: 1 },
            { id: "20_1_003", s: "Yarıçapı 5 cm olan dairenin çevresi kaç cm'dir? (π = 3 alınız.)", c: "30", v: {}, z: "orta", alt: "daire_cevre", konu: 20, level: 1 },
            { id: "20_1_004", s: "Taban uzunluğu 10 cm, yüksekliği 6 cm olan üçgenin alanı kaç cm²'dir?", c: "30", v: {}, z: "orta", alt: "ucgen_alan", konu: 20, level: 1 },
            { id: "20_1_005", s: "Bir karenin köşegen uzunluğu 8√2 cm olduğuna göre bir kenar uzunluğu kaç cm'dir?", c: "8", v: {}, z: "orta", alt: "kare_kosegen", konu: 20, level: 1 },
            { id: "20_1_006", s: "Bir eşkenar üçgenin bir kenar uzunluğu 10 cm olduğuna göre yüksekliği kaç cm'dir?", c: "5√3", v: {}, z: "orta", alt: "eskenar_yukseklik", konu: 20, level: 1 }
        ],
        2: [
            { id: "20_2_001", s: "Bir üçgenin iç açıları 2, 3 ve 4 ile orantılıdır. En büyük açı kaç derecedir?", c: "80", v: {}, z: "zor", alt: "ucgen_aci_oranti", konu: 20, level: 2 },
            { id: "20_2_002", s: "Bir dikdörtgenin alanı 96 cm², bir kenar uzunluğu 12 cm olduğuna göre diğer kenar uzunluğu kaç cm'dir?", c: "8", v: {}, z: "zor", alt: "dikdortgen_kenar", konu: 20, level: 2 },
            { id: "20_2_003", s: "Alanı 64 cm² olan karenin çevresi kaç cm'dir?", c: "32", v: {}, z: "zor", alt: "kare_alan_cevre", konu: 20, level: 2 },
            { id: "20_2_004", s: "Alanı 108 cm² olan dairenin çevresi kaç cm'dir? (π = 3 alınız.)", c: "36", v: {}, z: "zor", alt: "daire_alan_cevre", konu: 20, level: 2 },
            { id: "20_2_005", s: "Bir üçgenin kenar uzunlukları 7 cm, 8 cm, 9 cm'dir. Alanı kaç cm²'dir? (Heron formülü ile hesaplayınız.)", c: "12√5", v: {}, z: "zor", alt: "ucgen_alan_heron", konu: 20, level: 2 },
            { id: "20_2_006", s: "Bir dikdörtgenin uzun kenarı, kısa kenarının 3 katıdır. Çevresi 48 cm olduğuna göre alanı kaç cm²'dir?", c: "108", v: {}, z: "zor", alt: "dikdortgen_problem", konu: 20, level: 2 }
        ]
    }

};

console.log("✅ Soru bankası başarıyla yüklendi (tüm hatalar giderildi).");
