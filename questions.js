// ============================================
// questions.js - SORU ŞABLONLARI
// Format: { id, s, c, v, z, inputType?, cozum?, kural? }
// ============================================

const QUESTION_TEMPLATES = {

  // ==========================================
  // KONU 1: TOPLAMA & ÇIKARMA
  // ==========================================
  1: [
    // --- KOLAY ---
    { id: "t1_001", s: "{a} + {b} = ?", c: "{a}+{b}", v: {a:[1,20], b:[1,20]}, z:"kolay", cozum:"{a} + {b} = {a}+{b}" },
    { id: "t1_002", s: "{a} - {b} = ?", c: "{a}-{b}", v: {a:[10,30], b:[1,"{a}"]}, z:"kolay", cozum:"{a} - {b} = {a}-{b}", kural:"b < a" },
    { id: "t1_003", s: "{a} + {b} + {c} = ?", c: "{a}+{b}+{c}", v: {a:[1,15], b:[1,15], c:[1,15]}, z:"kolay" },
    
    // --- ORTA ---
    { id: "t1_004", s: "{a} + ? = {s}", c: "{s}-{a}", v: {a:[5,50], s:["{a}+5","{a}+40"]}, z:"orta", cozum:"? = {s} - {a} = {s}-{a}" },
    { id: "t1_005", s: "? - {a} = {b}", c: "{a}+{b}", v: {a:[5,30], b:[5,30]}, z:"orta", cozum:"? = {a} + {b} = {a}+{b}" },
    { id: "t1_006", s: "{a} - ? = {b}", c: "{a}-{b}", v: {a:[20,80], b:[1,"{a}"]}, z:"orta", cozum:"? = {a} - {b} = {a}-{b}", kural:"b < a" },
    { id: "t1_007", s: "{a} + {b} - {c} = ?", c: "{a}+{b}-{c}", v: {a:[10,40], b:[10,40], c:[1,20]}, z:"orta" },
    { id: "t1_008", s: "Ardışık iki sayının toplamı {s} ise büyük sayı kaçtır?", c: "({s}+1)/2", v: {s:[5,99,"tek"]}, z:"orta", cozum:"n + (n+1) = {s} → 2n+1 = {s} → n = ({s}-1)/2 → Büyük: n+1 = ({s}+1)/2" },
    
    // --- ZOR ---
    { id: "t1_009", s: "{a} + {b} - {c} + {d} - {e} = ?", c: "{a}+{b}-{c}+{d}-{e}", v: {a:[20,100], b:[20,100], c:[10,50], d:[10,50], e:[5,30]}, z:"zor" },
    { id: "t1_010", s: "Ardışık üç sayının toplamı {s} ise en küçük sayı kaçtır?", c: "({s}-3)/3", v: {s:[6,99,"3kati"]}, z:"zor", cozum:"n + (n+1) + (n+2) = {s} → 3n+3 = {s} → n = ({s}-3)/3" },
    { id: "t1_011", s: "{a} sayısının {b} eksiğinin {c} fazlası kaçtır?", c: "{a}-{b}+{c}", v: {a:[30,200], b:[5,30], c:[5,30]}, z:"zor", cozum:"{a} - {b} + {c} = {a}-{b}+{c}" },
    { id: "t1_012", s: "İki sayının toplamı {s}, farkı {f} ise büyük sayı kaçtır?", c: "({s}+{f})/2", v: {s:[20,100], f:[2,20,"cift"]}, z:"zor", cozum:"x+y={s}, x-y={f} → 2x={s}+{f} → x=({s}+{f})/2" },
  ],

  // ==========================================
  // KONU 2: ÇARPMA & BÖLME
  // ==========================================
  2: [
    // --- KOLAY ---
    { id: "t2_001", s: "{a} × {b} = ?", c: "{a}*{b}", v: {a:[1,10], b:[1,10]}, z:"kolay" },
    { id: "t2_002", s: "{a} ÷ {b} = ?", c: "{a}/{b}", v: {a:[2,12], b:[2,6]}, z:"kolay" },
    { id: "t2_003", s: "{a} × {b} × {c} = ?", c: "{a}*{b}*{c}", v: {a:[1,5], b:[1,5], c:[1,5]}, z:"kolay" },
    
    // --- ORTA ---
    { id: "t2_004", s: "{a} sayısının {k} katı kaçtır?", c: "{a}*{k}", v: {a:[10,50], k:[3,7]}, z:"orta" },
    { id: "t2_005", s: "{a} sayısının {k} katının {f} fazlası kaçtır?", c: "{a}*{k}+{f}", v: {a:[3,15], k:[2,6], f:[3,20]}, z:"orta" },
    { id: "t2_006", s: "Hangi sayının {k} katı {s} eder?", c: "{s}/{k}", v: {k:[2,9], s:["{k}*2","{k}*50"]}, z:"orta", cozum:"x × {k} = {s} → x = {s} ÷ {k}" },
    { id: "t2_007", s: "{a} × ? = {s}", c: "{s}/{a}", v: {a:[2,10], s:["{a}*2","{a}*20"]}, z:"orta", cozum:"? = {s} ÷ {a}" },
    { id: "t2_008", s: "{a} sayısının yarısının {k} katı kaçtır?", c: "({a}/2)*{k}", v: {a:[4,40,"cift"], k:[2,5]}, z:"orta" },
    
    // --- ZOR ---
    { id: "t2_009", s: "Bir sayının {k1} katı ile {k2} katının toplamı {s} ise bu sayı kaçtır?", c: "{s}/({k1}+{k2})", v: {k1:[2,5], k2:[3,8], s:["({k1}+{k2})*1","({k1}+{k2})*30"]}, z:"zor", kural:"k1 != k2" },
    { id: "t2_010", s: "{a} sayısı {b} sayısının kaç katıdır?", c: "{a}/{b}", v: {b:[2,9], a:["{b}*2","{b}*10"]}, z:"zor", cozum:"{a} ÷ {b} = {a}/{b} katı" },
  ],

  // ==========================================
  // KONU 3: SAYILAR (TEMEL KAVRAMLAR)
  // ==========================================
  3: [
    // --- KOLAY ---
    { id: "t3_001", s: "{a} sayısı tek mi çift mi?", c: "{a}%2==0 ? 'Çift' : 'Tek'", v: {a:[1,99]}, z:"kolay", inputType:"choice", choices:["Çift","Tek","Hiçbiri","Bilinemez"] },
    { id: "t3_002", s: "{a} sayısının basamak değerleri toplamı kaçtır?", c: "Math.floor({a}/10)+({a}%10)", v: {a:[10,99]}, z:"kolay", cozum:"Onlar: {a/10}, Birler: {a%10}" },
    { id: "t3_003", s: "En büyük {b} basamaklı sayı kaçtır?", c: "Math.pow(10,{b})-1", v: {b:[2,4]}, z:"kolay", cozum:"{b} basamaklı en büyük sayı: 10^{b} - 1" },
    
    // --- ORTA ---
    { id: "t3_004", s: "Rakamları farklı en büyük {b} basamaklı sayı kaçtır?", c: "{b}==2 ? 98 : {b}==3 ? 987 : 9876", v: {b:[2,4]}, z:"orta", inputType:"choice", choices:["98 / 987 / 9876","99 / 999 / 9999","89 / 978 / 9867","97 / 986 / 9875"] },
    { id: "t3_005", s: "{b} basamaklı en küçük sayı kaçtır?", c: "Math.pow(10,{b}-1)", v: {b:[2,5]}, z:"orta", cozum:"{b} basamaklı en küçük: 10^{b-1}" },
    { id: "t3_006", s: "{a} sayısının birler ve onlar basamağı yer değiştirirse sayı kaç olur?", c: "({a}%10)*10+Math.floor({a}/10)", v: {a:[12,98]}, z:"orta", kural:"a%10 != 0" },
    { id: "t3_007", s: "İki basamaklı {a} sayısının rakamları toplamı kaçtır?", c: "Math.floor({a}/10)+({a}%10)", v: {a:[10,99]}, z:"orta" },
    { id: "t3_008", s: "Rakamları toplamı {t} olan iki basamaklı en büyük sayı kaçtır?", c: "{t}<=9 ? {t}*10+0 : ({t}-9)*10+9", v: {t:[2,18]}, z:"orta", inputType:"choice", cozum:"Onlar basamağı en büyük olsun diye {t}'dan 9 çıkar" },
    
    // --- ZOR ---
    { id: "t3_009", s: "{a} sayısının onlar basamağı {x} artırılıp birler basamağı {y} azaltılırsa sayı kaç artar?", c: "{x}*10-{y}", v: {a:[20,80], x:[1,4], y:[1,"{a}%10"]}, z:"zor", cozum:"Artış = {x}×10 - {y}×1 = {x}*10-{y}" },
    { id: "t3_010", s: "AB iki basamaklı sayısında A+B={t} ise AB'nin alabileceği en büyük değer kaçtır?", c: "{t}<=9 ? {t}*10+0 : 9*10+({t}-9)", v: {t:[3,15]}, z:"zor", cozum:"A en büyük olmalı: A={t} (max 9), B={t}-A" },
  ],

  // ==========================================
  // KONU 4: BÖLÜNEBİLME KURALLARI
  // ==========================================
  4: [
    { id: "t4_001", s: "{a} sayısı 3 ile bölünebilir mi?", c: "{a}%3==0 ? 'Evet' : 'Hayır'", v: {a:[10,999]}, z:"kolay", inputType:"choice", choices:["Evet","Hayır"], cozum:"Rakamlar toplamı 3'ün katı mı?" },
    { id: "t4_002", s: "{a} sayısının 5 ile bölümünden kalan kaçtır?", c: "{a}%5", v: {a:[10,999]}, z:"kolay", cozum:"Son rakam {a%10}, 5'e bölümünden kalan {a}%5" },
    { id: "t4_003", s: "Rakamları farklı {b} basamaklı 5 ile bölünebilen en büyük sayı kaçtır?", c: "{b}==2 ? 95 : {b}==3 ? 985 : 9875", v: {b:[2,4]}, z:"orta", inputType:"choice", choices:["95 / 985 / 9875","90 / 980 / 9870","95 / 975 / 9865","85 / 975 / 9765"] },
    { id: "t4_004", s: "{a} sayısı 9 ile bölündüğünde kalan kaçtır?", c: "{a}%9", v: {a:[10,999]}, z:"orta" },
    { id: "t4_005", s: "4A3B sayısı 5 ile bölünebildiğine göre B kaçtır?", c: "0", v: {}, z:"zor", inputType:"choice", choices:["0 veya 5","Sadece 0","Sadece 5","2"], cozum:"5 ile bölünme: Son rakam 0 veya 5" },
  ],

  // ==========================================
  // KONU 5: ASAL SAYILAR & ÇARPANLAR
  // ==========================================
  5: [
    { id: "t5_001", s: "{a} asal sayı mıdır?", c: "isPrime({a}) ? 'Evet' : 'Hayır'", v: {a:[2,30]}, z:"kolay", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t5_002", s: "En küçük asal sayı kaçtır?", c: "2", v: {}, z:"kolay", inputType:"choice", choices:["2","1","3","0"] },
    { id: "t5_003", s: "{a} sayısının asal çarpanlarının toplamı kaçtır?", c: "asalCarpanToplam({a})", v: {a:[12,60]}, z:"orta", cozum:"{a}'ı asal çarpanlara ayır ve topla" },
    { id: "t5_004", s: "İki basamaklı en büyük asal sayı kaçtır?", c: "97", v: {}, z:"orta", inputType:"choice", choices:["97","99","91","89"] },
    { id: "t5_005", s: "{a} sayısının kaç tane asal çarpanı vardır?", c: "asalCarpanSayisi({a})", v: {a:[12,100]}, z:"zor" },
  ],

  // ==========================================
  // KONU 6: EKOK & EBOB
  // ==========================================
  6: [
    { id: "t6_001", s: "{a} ve {b} sayılarının EBOB'u kaçtır?", c: "ebob({a},{b})", v: {a:[12,48], b:[18,72]}, z:"kolay" },
    { id: "t6_002", s: "{a} ve {b} sayılarının EKOK'u kaçtır?", c: "({a}*{b})/ebob({a},{b})", v: {a:[4,15], b:[6,20]}, z:"orta" },
    { id: "t6_003", s: "EBOB'u {e}, EKOK'u {k} olan iki sayının çarpımı kaçtır?", c: "{e}*{k}", v: {e:[2,6], k:[12,60]}, z:"orta" },
    { id: "t6_004", s: "{a} ve {b} sayılarını bölen en büyük sayı kaçtır?", c: "ebob({a},{b})", v: {a:[24,72], b:[36,96]}, z:"zor" },
  ],

  // ==========================================
  // KONU 7: KESİRLER & RASYONEL SAYILAR
  // ==========================================
  7: [
    { id: "t7_001", s: "{pay}/{payda} + {a}/{b} = ?", c: "({pay}*{b}+{a}*{payda})/({payda}*{b})", v: {pay:[1,5], payda:[2,8], a:[1,5], b:[2,8]}, z:"kolay", kural:"payda != b" },
    { id: "t7_002", s: "{pay}/{payda} × {a}/{b} = ?", c: "({pay}*{a})/({payda}*{b})", v: {pay:[1,5], payda:[2,6], a:[1,4], b:[2,6]}, z:"kolay" },
    { id: "t7_003", s: "{pay}/{payda} kesrini sadeleştiriniz", c: "sadelestir({pay},{payda})", v: {pay:[2,8], payda:[4,16]}, z:"orta", kural:"ebob(pay,payda) > 1" },
    { id: "t7_004", s: "{a}/{b} + {c}/{d} işleminin sonucu kaçtır?", c: "({a}*{d}+{c}*{b})/({b}*{d})", v: {a:[1,7], b:[2,8], c:[1,7], d:[2,8]}, z:"orta", kural:"b != d" },
    { id: "t7_005", s: "{a} tam {pay}/{payda} + {c} tam {p2}/{d} = ?", c: "{a}+{c}+({pay}*{d}+{p2}*{payda})/({payda}*{d})", v: {a:[1,5], pay:[1,3], payda:[2,6], c:[1,5], p2:[1,3], d:[2,6]}, z:"zor" },
  ],

  // ==========================================
  // KONU 8: ONDALIK SAYILAR
  // ==========================================
  8: [
    { id: "t8_001", s: "{a} + {b} = ?", c: "{a}+{b}", v: {a:["1.0","9.9"], b:["0.1","5.0"]}, z:"kolay", kural:"a ve b bir ondalık basamaklı" },
    { id: "t8_002", s: "{a} × 10 = ?", c: "{a}*10", v: {a:["0.1","9.9"]}, z:"kolay" },
    { id: "t8_003", s: "{a} ondalık sayısı {b} ile çarpılırsa sonuç kaç olur?", c: "({a}*{b}).toFixed(2)", v: {a:["1.5","8.5"], b:[2,5]}, z:"orta" },
  ],

  // ==========================================
  // KONU 9: ÜSLÜ SAYILAR
  // ==========================================
  9: [
    { id: "t9_001", s: "{a}² = ?", c: "{a}*{a}", v: {a:[1,12]}, z:"kolay" },
    { id: "t9_002", s: "{a}³ = ?", c: "{a}*{a}*{a}", v: {a:[1,5]}, z:"kolay" },
    { id: "t9_003", s: "{a}ⁿ × {a}ᵐ = ? (n={n}, m={m})", c: "Math.pow({a},{n}+{m})", v: {a:[2,5], n:[1,4], m:[1,4]}, z:"orta" },
    { id: "t9_004", s: "({a}²)³ = ?", c: "Math.pow({a},6)", v: {a:[2,5]}, z:"orta" },
  ],

  // ==========================================
  // KONU 10: KÖKLÜ SAYILAR
  // ==========================================
  10: [
    { id: "t10_001", s: "√{a} = ? (tam sayı ise)", c: "Math.sqrt({a})", v: {a:[4,9,16,25,36,49,64,81,100]}, z:"kolay" },
    { id: "t10_002", s: "√{a} + √{b} = ?", c: "Math.sqrt({a})+Math.sqrt({b})", v: {a:[4,9,16], b:[4,9,16]}, z:"kolay" },
    { id: "t10_003", s: "√{a} sayısı hangi iki tam sayı arasındadır?", c: "'Yaklaşık '+Math.sqrt({a}).toFixed(1)", v: {a:[2,99,"kare degil"]}, z:"orta", inputType:"choice" },
  ],

  // ==========================================
  // KONU 11: ÇARPANLARA AYIRMA & ÖZDEŞLİKLER
  // ==========================================
  11: [
    { id: "t11_001", s: "(x+{a})(x+{b}) = ? (x²'li terimin katsayısı?)", c: "x²+({a}+{b})x+({a}*{b})", v: {a:[1,8], b:[1,8]}, z:"orta", inputType:"choice" },
    { id: "t11_002", s: "{a}² - {b}² = ?", c: "({a}-{b})*({a}+{b})", v: {a:[5,15], b:[2,"{a}-1"]}, z:"kolay" },
    { id: "t11_003", s: "x² - {a} ifadesini çarpanlarına ayırın", c: "(x-√{a})(x+√{a})", v: {a:[4,9,16,25,36]}, z:"orta", inputType:"choice" },
  ],

  // ==========================================
  // KONU 12: 1. DERECEDEN DENKLEMLER
  // ==========================================
  12: [
    { id: "t12_001", s: "x + {a} = {b} ise x = ?", c: "{b}-{a}", v: {a:[3,20], b:[10,50]}, z:"kolay", kural:"b > a" },
    { id: "t12_002", s: "{a}x + {b} = {c} ise x = ?", c: "({c}-{b})/{a}", v: {a:[2,5], b:[3,20], c:["{a}*2+{b}","{a}*20+{b}"]}, z:"orta" },
    { id: "t12_003", s: "{a}x - {b} = {c}x + {d} ise x = ?", c: "({d}+{b})/({a}-{c})", v: {a:[3,9], c:[1,"{a}-2"], b:[2,10], d:[2,10]}, z:"zor", kural:"a > c" },
  ],

  // ==========================================
  // KONU 13: EŞİTSİZLİKLER
  // ==========================================
  13: [
    { id: "t13_001", s: "x + {a} < {b} ise x'in en büyük tam sayı değeri kaçtır?", c: "{b}-{a}-1", v: {a:[3,15], b:[10,40]}, z:"orta", kural:"b > a" },
    { id: "t13_002", s: "{a}x ≤ {b} ise x en fazla kaçtır? (tam sayı)", c: "Math.floor({b}/{a})", v: {a:[2,6], b:[12,60]}, z:"orta" },
  ],

  // ==========================================
  // KONU 14: ORAN & ORANTI
  // ==========================================
  14: [
    { id: "t14_001", s: "a/b = {a}/{b} ve a+b={t} ise a kaçtır?", c: "{t}*{a}/({a}+{b})", v: {a:[1,5], b:[2,7], t:["({a}+{b})*1","({a}+{b})*20"]}, z:"orta", kural:"a != b" },
    { id: "t14_002", s: "{a} işçi {b} günde bitirirse, {c} işçi kaç günde bitirir? (ters orantı)", c: "({a}*{b})/{c}", v: {a:[3,10], b:[6,20], c:[2,"{a}*2"]}, z:"orta" },
  ],

  // ==========================================
  // KONU 15: SAYI PROBLEMLERİ
  // ==========================================
  15: [
    { id: "t15_001", s: "Bir sayının {k} katının {f} fazlası {s} ise bu sayı kaçtır?", c: "({s}-{f})/{k}", v: {k:[2,5], f:[3,15], s:["{k}*3+{f}","{k}*20+{f}"]}, z:"kolay" },
    { id: "t15_002", s: "Bir sayının {k1} katı ile {k2} katının farkı {s} ise bu sayı kaçtır?", c: "{s}/({k1}-{k2})", v: {k1:[3,8], k2:[1,"{k1}-1"], s:["({k1}-{k2})*2","({k1}-{k2})*15"]}, z:"orta", kural:"k1 > k2" },
    { id: "t15_003", s: "Toplamları {t} olan ardışık {n} sayının en büyüğü kaçtır?", c: "({t}/{n})+Math.floor({n}/2)", v: {n:[3,5], t:["{n}*5","{n}*30"]}, z:"zor", kural:"n tek" },
  ],

  // ==========================================
  // KONU 16: YAŞ PROBLEMLERİ
  // ==========================================
  16: [
    { id: "t16_001", s: "{yıl} yıl önce yaşları toplamı {t} olan iki kardeşin bugünkü yaşları toplamı kaçtır?", c: "{t}+2*{yil}", v: {yil:[3,10], t:[10,40]}, z:"kolay" },
    { id: "t16_002", s: "Baba {b} yaşında, çocuk {c} yaşında. Kaç yıl sonra baba çocuğunun {k} katı olur?", c: "({b}-{k}*{c})/({k}-1)", v: {b:[30,50], c:[5,15], k:[2,4]}, z:"orta", kural:"b > k*c" },
  ],

  // ==========================================
  // KONU 17: HIZ & HAREKET
  // ==========================================
  17: [
    { id: "t17_001", s: "{v} km/sa hızla {t} saatte kaç km yol gidilir?", c: "{v}*{t}", v: {v:[40,100], t:[2,5]}, z:"kolay" },
    { id: "t17_002", s: "Aralarında {x} km olan iki araç {v1} ve {v2} hızla karşılıklı hareket ederse kaç saat sonra karşılaşır?", c: "{x}/({v1}+{v2})", v: {x:[100,600], v1:[50,90], v2:[50,90]}, z:"orta" },
  ],

  // ==========================================
  // KONU 18: İŞÇİ & HAVUZ
  // ==========================================
  18: [
    { id: "t18_001", s: "{a} işçi bir işi {b} günde bitirirse, 1 işçi kaç günde bitirir?", c: "{a}*{b}", v: {a:[2,8], b:[4,15]}, z:"kolay" },
    { id: "t18_002", s: "A işçisi {a}, B işçisi {b} günde bitiriyor. İkisi birlikte kaç günde bitirir?", c: "({a}*{b})/({a}+{b})", v: {a:[3,12], b:[4,15]}, z:"orta" },
  ],

  // ==========================================
  // KONU 19: YÜZDE, KÂR & ZARAR
  // ==========================================
  19: [
    { id: "t19_001", s: "{a} sayısının %{p}'i kaçtır?", c: "{a}*{p}/100", v: {a:[50,500], p:[10,75]}, z:"kolay" },
    { id: "t19_002", s: "%{p}'i {d} olan sayının tamamı kaçtır?", c: "{d}*100/{p}", v: {p:[10,50], d:["{p}*1","{p}*20"]}, z:"orta" },
    { id: "t19_003", s: "Maliyeti {m} TL olan ürüne %{k} kârla satılırsa satış fiyatı kaç TL olur?", c: "{m}+{m}*{k}/100", v: {m:[50,500], k:[10,40]}, z:"orta" },
    { id: "t19_004", s: "Bir ürüne %{z} zam yapıldıktan sonra %{i} indirim yapılırsa son fiyat ilk fiyata göre nasıl değişir?", c: "{z}>{i} ? 'Artar' : 'Azalır'", v: {z:[10,40], i:[10,40]}, z:"zor", inputType:"choice", choices:["Artar","Azalır","Değişmez","Bilinemez"] },
  ],

  // ==========================================
  // KONU 20: KARIŞIM PROBLEMLERİ
  // ==========================================
  20: [
    { id: "t20_001", s: "Tuz oranı %{o} olan {m} kg karışımda kaç kg tuz vardır?", c: "{m}*{o}/100", v: {m:[10,100], o:[10,50]}, z:"kolay" },
    { id: "t20_002", s: "%{o1} ve %{o2} tuz oranlı iki karışım karıştırılıyor. Eşit miktarda karıştırılırsa yeni oran % kaçtır?", c: "({o1}+{o2})/2", v: {o1:[10,40], o2:[15,45]}, z:"orta" },
  ],

  // ==========================================
  // KONU 21: FAİZ PROBLEMLERİ
  // ==========================================
  21: [
    { id: "t21_001", s: "{a} TL'ye %{f} basit faizle {y} yılda kaç TL faiz gelir?", c: "{a}*{f}*{y}/100", v: {a:[1000,5000], f:[5,20], y:[1,4]}, z:"kolay" },
    { id: "t21_002", s: "{a} TL %{f} faizle {y} yıl sonra kaç TL olur? (basit faiz)", c: "{a}+{a}*{f}*{y}/100", v: {a:[1000,5000], f:[10,30], y:[2,5]}, z:"orta" },
  ],

  // ==========================================
  // KONU 22: KÜMELER
  // ==========================================
  22: [
    { id: "t22_001", s: "{a} elemanlı bir kümenin alt küme sayısı kaçtır?", c: "Math.pow(2,{a})", v: {a:[1,6]}, z:"kolay" },
    { id: "t22_002", s: "s(A)={a}, s(B)={b}, s(A∩B)={k} ise s(A∪B) = ?", c: "{a}+{b}-{k}", v: {a:[5,15], b:[5,15], k:[1,"Math.min({a},{b})-1"]}, z:"orta", kural:"k < a && k < b" },
  ],

  // ==========================================
  // KONU 23: MANTIK
  // ==========================================
  23: [
    { id: "t23_001", s: "p: '2+2=4' önermesinin doğruluk değeri nedir?", c: "1", v: {}, z:"kolay", inputType:"choice", choices:["1 (Doğru)","0 (Yanlış)"] },
    { id: "t23_002", s: "p doğru, q yanlış ise (p ∧ q) önermesi nedir?", c: "Yanlış", v: {}, z:"kolay", inputType:"choice", choices:["Yanlış","Doğru"] },
    { id: "t23_003", s: "p doğru, q yanlış ise (p → q) önermesi nedir?", c: "Yanlış", v: {}, z:"orta", inputType:"choice", choices:["Yanlış","Doğru"] },
  ],

  // ==========================================
  // KONU 24: VERİ, GRAFİK & İSTATİSTİK
  // ==========================================
  24: [
    { id: "t24_001", s: "{a}, {b}, {c} sayılarının aritmetik ortalaması kaçtır?", c: "({a}+{b}+{c})/3", v: {a:[5,20], b:[5,20], c:[5,20]}, z:"kolay" },
    { id: "t24_002", s: "{a}, {b}, {c}, {d}, {e} sayılarının medyanı kaçtır?", c: "sirala({a},{b},{c},{d},{e})[2]", v: {a:[1,20], b:[1,20], c:[1,20], d:[1,20], e:[1,20]}, z:"orta" },
    { id: "t24_003", s: "Modu {m} olan {n} sayıdan oluşan grubun en az kaç elemanı {m}'dir?", c: "2", v: {m:[3,9], n:[5,10]}, z:"orta", inputType:"choice", choices:["2","1","3","n/2"] },
  ],

  // ==========================================
  // KONU 25: 2. DERECEDEN DENKLEMLER (DGS)
  // ==========================================
  25: [
    { id: "t25_001", s: "x² - {s}x + {c} = 0 denkleminin kökler toplamı kaçtır?", c: "{s}", v: {s:[3,10], c:[2,24]}, z:"kolay" },
    { id: "t25_002", s: "x² - {s}x + {c} = 0 denkleminin kökler çarpımı kaçtır?", c: "{c}", v: {s:[3,10], c:[2,24]}, z:"orta" },
  ],

  // ==========================================
  // KONU 26: FONKSİYONLAR (DGS)
  // ==========================================
  26: [
    { id: "t26_001", s: "f(x) = {a}x + {b} ise f({c}) = ?", c: "{a}*{c}+{b}", v: {a:[2,5], b:[1,10], c:[1,10]}, z:"kolay" },
    { id: "t26_002", s: "f(x) = {a}x + {b} ise f⁻¹({c}) = ?", c: "({c}-{b})/{a}", v: {a:[2,4], b:[1,8], c:["{a}*2+{b}","{a}*8+{b}"]}, z:"orta" },
  ],

  // ==========================================
  // KONU 27: PERMÜTASYON & KOMBİNASYON (DGS)
  // ==========================================
  27: [
    { id: "t27_001", s: "{n}! = ?", c: "faktoriyel({n})", v: {n:[3,6]}, z:"kolay" },
    { id: "t27_002", s: "P({n},{r}) = ?", c: "permutasyon({n},{r})", v: {n:[5,8], r:[2,"{n}-1"]}, z:"orta", kural:"r <= n" },
    { id: "t27_003", s: "{n} kişiden {r} kişilik ekip kaç farklı şekilde seçilir? C({n},{r})=?", c: "kombinasyon({n},{r})", v: {n:[5,10], r:[2,"{n}-2"]}, z:"orta" },
  ],

  // ==========================================
  // KONU 28: OLASILIK
  // ==========================================
  28: [
    { id: "t28_001", s: "Bir zar atıldığında çift sayı gelme olasılığı kaçtır?", c: "1/2", v: {}, z:"kolay", inputType:"choice", choices:["1/2","1/3","1/6","2/3"] },
    { id: "t28_002", s: "Bir torbada {k} kırmızı, {m} mavi top var. Çekilen topun kırmızı olma olasılığı kaçtır?", c: "{k}/({k}+{m})", v: {k:[3,8], m:[2,8]}, z:"orta" },
    { id: "t28_003", s: "İki zar atıldığında toplamın {t} olma olasılığı kaçtır?", c: "zarOlasilik({t})", v: {t:[2,12]}, z:"zor" },
  ],

};

// ==================== YARDIMCI FONKSİYONLAR ====================

// Faktöriyel
function faktoriyel(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

// Permütasyon
function permutasyon(n, r) {
    return faktoriyel(n) / faktoriyel(n - r);
}

// Kombinasyon
function kombinasyon(n, r) {
    return faktoriyel(n) / (faktoriyel(r) * faktoriyel(n - r));
}

// EBOB
function ebob(a, b) {
    while (b) { [a, b] = [b, a % b]; }
    return a;
}

// Asal çarpan toplamı
function asalCarpanToplam(n) {
    let toplam = 0;
    let temp = n;
    for (let i = 2; i <= temp; i++) {
        if (temp % i === 0 && isPrime(i)) {
            toplam += i;
            while (temp % i === 0) temp /= i;
        }
    }
    return toplam || n;
}

// Asal çarpan sayısı
function asalCarpanSayisi(n) {
    let count = 0;
    let temp = n;
    for (let i = 2; i <= temp; i++) {
        if (temp % i === 0 && isPrime(i)) {
            count++;
            while (temp % i === 0) temp /= i;
        }
    }
    return count;
}

// Kesir sadeleştirme
function sadelestir(pay, payda) {
    const gcd = ebob(Math.abs(pay), Math.abs(payda));
    return `${pay/gcd}/${payda/gcd}`;
}

// Sırala (medyan için)
function sirala(...args) {
    return args.sort((a, b) => a - b);
}

// Zar olasılığı
function zarOlasilik(t) {
    const olasiliklar = {
        2: "1/36", 3: "2/36", 4: "3/36", 5: "4/36", 6: "5/36",
        7: "6/36", 8: "5/36", 9: "4/36", 10: "3/36", 11: "2/36", 12: "1/36"
    };
    return olasiliklar[t] || "0";
}

console.log('✅ questions.js yüklendi - 28 konu, ' + 
    Object.values(QUESTION_TEMPLATES).reduce((sum, arr) => sum + arr.length, 0) + ' şablon');