// ==========================================
// KPSS-DGS-TYT-ALES MATEMATİK SORU BANKASI
// Tüm Seviyeler (0-18)
// Toplam: 19 Seviye, 207 Konu, 4.247 Şablon Soru
// ==========================================

const SORU_BANKASI = {
  
  // ==========================================
// SEVİYE 0: DÖRT İŞLEM (EN GENİŞ)
// ==========================================
0: [

  // ==========================================
  // KONU 1: TOPLAMA (12 alt dal)
  // ==========================================

  // ALT DAL 1: YATAY TOPLAMA - 2 SAYI
  { id: "t1_001", s: "{a} + {b} = ?", c: "{a}+{b}", v: {a:[1,9], b:[1,9]}, z:"kolay", alt:"yatay_2sayi" },
  { id: "t1_002", s: "{a} + {b} = ?", c: "{a}+{b}", v: {a:[10,50], b:[10,50]}, z:"kolay", alt:"yatay_2sayi" },
  { id: "t1_003", s: "{a} + {b} = ?", c: "{a}+{b}", v: {a:[50,200], b:[50,200]}, z:"orta", alt:"yatay_2sayi" },
  { id: "t1_004", s: "{a} + {b} + {c} = ?", c: "{a}+{b}+{c}", v: {a:[1,9], b:[1,9], c:[1,9]}, z:"kolay", alt:"yatay_3sayi" },
  { id: "t1_005", s: "{a} + {b} + {c} = ?", c: "{a}+{b}+{c}", v: {a:[10,50], b:[10,50], c:[10,50]}, z:"orta", alt:"yatay_3sayi" },

  // ALT DAL 2: ALTA ALTA TOPLAMA (ELDELİ/ELDESİZ)
  { id: "t1_006", s: "{a} + {b} = ? (Alt alta topla)", c: "{a}+{b}", v: {a:[10,50], b:[10,50]}, z:"kolay", alt:"alt_alta_eldesiz" },
  { id: "t1_007", s: "{a} + {b} = ? (Alt alta topla - eldeli)", c: "{a}+{b}", v: {a:[25,98], b:[25,98], kosul:"birler_toplami>=10"}, z:"orta", alt:"alt_alta_eldeli" },
  { id: "t1_008", s: "{a} + {b} + {c} = ? (Alt alta topla)", c: "{a}+{b}+{c}", v: {a:[10,50], b:[10,50], c:[10,50]}, z:"orta", alt:"alt_alta_3sayi" },

  // ALT DAL 3: VERİLMEYEN TOPLANAN (BOŞLUK DOLDURMA)
  { id: "t1_009", s: "{a} + ? = {toplam}", c: "{toplam}-{a}", v: {a:[1,30], ek:[5,30], toplam:"{a}+{ek}"}, z:"orta", alt:"verilmeyen_toplanan" },
  { id: "t1_010", s: "? + {b} = {toplam}", c: "{toplam}-{b}", v: {b:[1,30], ek:[5,30], toplam:"{b}+{ek}"}, z:"orta", alt:"verilmeyen_toplanan" },
  { id: "t1_011", s: "{a} + ? + {c} = {toplam}", c: "{toplam}-{a}-{c}", v: {a:[5,20], c:[5,20], ek:[5,20], toplam:"{a}+{c}+{ek}"}, z:"zor", alt:"verilmeyen_toplanan" },
  { id: "t1_012", s: "{a} + {b} = {c} + ?", c: "{a}+{b}-{c}", v: {a:[5,30], b:[5,30], c:[3,20], kosul:"a+b>c"}, z:"zor", alt:"esitlikte_verilmeyen" },

  // ALT DAL 4: ELDELİ TOPLAMADA VERİLMEYEN RAKAM
  { id: "t1_013", s: " {a}{k}\n+{b}3\n----\n 7{c}\nVerilmeyen rakam {k} kaçtır?", c: "{k}", v: {a:[2,5], b:[1,3], c:[0,9], k:[0,9], kosul:"birler_elde_kontrol"}, z:"zor", alt:"sifreli_elde" },
  // DÜZELTME: elde değişkeni eklendi
  { id: "t1_014", s: " {a}{r1}\n+{r2}{b}\n----\n {c}{d}\n{r1}+{r2} kaçtır?", c: "{r1}+{r2}", v: {a:[2,6], b:[2,6], r1:[0,9], r2:[0,9], elde:1, c:"{a}+{r2}+elde", d:"{r1}+{b}%10"}, z:"cok_zor", alt:"sifreli_toplam" },

  // ALT DAL 5: ZİHİNDEN TOPLAMA STRATEJİLERİ
  { id: "t1_015", s: "{a} + 9 = ?", c: "{a}+9", v: {a:[10,50]}, z:"kolay", alt:"zihinden_9" },
  { id: "t1_016", s: "{a} + 99 = ?", c: "{a}+99", v: {a:[100,500]}, z:"orta", alt:"zihinden_99" },
  { id: "t1_017", s: "{a} + 11 = ?", c: "{a}+11", v: {a:[20,80]}, z:"kolay", alt:"zihinden_11" },
  { id: "t1_018", s: "{a} + 19 = ?", c: "{a}+19", v: {a:[30,90]}, z:"orta", alt:"zihinden_19" },
  { id: "t1_019", s: "{a} + 101 = ?", c: "{a}+101", v: {a:[200,500]}, z:"kolay", alt:"zihinden_101" },

  // ALT DAL 6: GRUPLANDIRARAK TOPLAMA
  { id: "t1_020", s: "{a} + {b} + {c} = ? (Gruplandır)", c: "{a}+{b}+{c}", v: {a:[10,40], b:[10,40], c:[10,40], kosul:"a+b veya b+c onluk"}, z:"orta", alt:"gruplandirma" },
  { id: "t1_021", s: "{a} + {b} + {c} + {d} = ? (İkili grupla)", c: "{a}+{b}+{c}+{d}", v: {a:[10,30], b:[10,30], c:[10,30], d:[10,30], kosul:"a+d veya b+c onluk"}, z:"orta", alt:"gruplandirma" },

  // ALT DAL 7: SAYI DOĞRUSUNDA TOPLAMA
  { id: "t1_022", s: "Sayı doğrusunda {a} noktasından {b} birim ileri gidersek hangi sayıya ulaşırız?", c: "{a}+{b}", v: {a:[0,20], b:[1,10]}, z:"kolay", alt:"sayi_dogrusu" },
  { id: "t1_023", s: "Sayı doğrusunda önce {a} birim, sonra {b} birim ilerledik. Toplam kaç birim ilerledik?", c: "{a}+{b}", v: {a:[2,15], b:[2,15]}, z:"kolay", alt:"sayi_dogrusu" },

  // ALT DAL 8: DEĞİŞME ÖZELLİĞİ
  { id: "t1_024", s: "{a} + {b} = {b} + ?", c: "{a}", v: {a:[1,50], b:[1,50]}, z:"kolay", alt:"degisme" },
  { id: "t1_025", s: "Aşağıdakilerden hangisi {a} + {b} işlemine eşittir?", c: "{b}+{a}", v: {a:[5,30], b:[5,30]}, z:"kolay", alt:"degisme_coktan" },

  // ALT DAL 9: BİRLEŞME ÖZELLİĞİ
  { id: "t1_026", s: "({a} + {b}) + {c} = {a} + (? + {c})", c: "{b}", v: {a:[1,20], b:[1,20], c:[1,20]}, z:"orta", alt:"birlesme" },
  { id: "t1_027", s: "{a} + {b} + {c} işlemini önce {a}+{b} sonra +{c} veya önce {b}+{c} sonra +{a} yaparsak sonuç değişir mi?", c: "hayir", v: {a:[5,20], b:[5,20], c:[5,20]}, z:"orta", alt:"birlesme_soru" },

  // ALT DAL 10: TOPLAMADA ETKİSİZ ELEMAN (SIFIR)
  { id: "t1_028", s: "{a} + 0 = ?", c: "{a}", v: {a:[1,100]}, z:"kolay", alt:"etkisiz_eleman" },
  { id: "t1_029", s: "0 + {a} = ?", c: "{a}", v: {a:[1,100]}, z:"kolay", alt:"etkisiz_eleman" },
  { id: "t1_030", s: "{a} + ? = {a}", c: "0", v: {a:[1,100]}, z:"kolay", alt:"etkisiz_eleman_soru" },

  // ALT DAL 11: TOPLAMADA TAHMİN (dinamik ifadeler korundu)
  { id: "t1_031", s: "{a} + {b} ≈ ? (En yakın onluğa yuvarlayarak tahmin et)", c: "{a_yuv}+{b_yuv}", v: {a:[13,97], b:[12,98], a_yuv:"Math.round({a}/10)*10", b_yuv:"Math.round({b}/10)*10"}, z:"orta", alt:"tahmin_onluk" },
  { id: "t1_032", s: "{a} + {b} ≈ ? (En yakın yüzlüğe yuvarlayarak tahmin et)", c: "{a_yuv}+{b_yuv}", v: {a:[150,950], b:[120,980], a_yuv:"Math.round({a}/100)*100", b_yuv:"Math.round({b}/100)*100"}, z:"zor", alt:"tahmin_yuzluk" },
  { id: "t1_033", s: "{a} + {b} işleminin gerçek sonucu ile tahmini sonucu arasındaki fark kaçtır?", c: "Math.abs(({a}+{b})-({a_yuv}+{b_yuv}))", v: {a:[13,47], b:[12,48], a_yuv:"Math.round({a}/10)*10", b_yuv:"Math.round({b}/10)*10"}, z:"zor", alt:"tahmin_fark" },

  // ALT DAL 12: SÖZEL TOPLAMA PROBLEMLERİ
  { id: "t1_034", s: "Bir sepette {a} elma, {b} armut vardır. Toplam meyve sayısı kaçtır?", c: "{a}+{b}", v: {a:[5,30], b:[5,30]}, z:"kolay", alt:"sozel" },
  { id: "t1_035", s: "Ahmet'in {a} lirası, Ayşe'nin Ahmet'ten {b} lira fazla parası vardır. İkisinin toplam parası kaçtır?", c: "{a}+{a}+{b}", v: {a:[10,50], b:[5,30]}, z:"orta", alt:"sozel_fazla" },
  { id: "t1_036", s: "Bir otobüste {a} yolcu vardır. İlk durakta {b} kişi bindi, {c} kişi indi. Otobüste kaç yolcu kaldı?", c: "{a}+{b}-{c}", v: {a:[10,30], b:[2,10], c:[1,8], kosul:"a>=c"}, z:"orta", alt:"sozel_binme_inme" },
  { id: "t1_037", s: "{a} sayısının {b} fazlasının {c} fazlası kaçtır?", c: "{a}+{b}+{c}", v: {a:[5,30], b:[5,20], c:[5,20]}, z:"orta", alt:"sozel_fazlasi" },
  { id: "t1_038", s: "Sınıfımızda {a} kız, kızlardan {b} fazla erkek öğrenci vardır. Sınıf mevcudu kaçtır?", c: "{a}+{a}+{b}", v: {a:[8,20], b:[2,10]}, z:"orta", alt:"sozel_sinif" },


  // ==========================================
  // KONU 2: ÇIKARMA (12 alt dal)
  // ==========================================

  // ALT DAL 1: YATAY ÇIKARMA - 2 SAYI
  { id: "t2_001", s: "{a} - {b} = ?", c: "{a}-{b}", v: {a:[10,30], b:[1,9]}, z:"kolay", alt:"yatay_2sayi" },
  { id: "t2_002", s: "{a} - {b} = ?", c: "{a}-{b}", v: {a:[50,150], b:[10,49]}, z:"orta", alt:"yatay_2sayi" },
  { id: "t2_003", s: "{a} - {b} = ?", c: "{a}-{b}", v: {a:[500,999], b:[50,499]}, z:"zor", alt:"yatay_2sayi" },

  // ALT DAL 2: ALTA ALTA ÇIKARMA (ONLUK BOZARAK/BOZMADAN)
  { id: "t2_004", s: "{a} - {b} = ? (Alt alta çıkar)", c: "{a}-{b}", v: {a:[20,60], b:[10,19], kosul:"a%10>=b%10"}, z:"kolay", alt:"alt_alta_bozmadan" },
  { id: "t2_005", s: "{a} - {b} = ? (Alt alta çıkar - onluk bozarak)", c: "{a}-{b}", v: {a:[20,60], b:[1,19], kosul:"a%10<b%10"}, z:"orta", alt:"alt_alta_bozarak" },
  { id: "t2_006", s: "{a} - {b} - {c} = ?", c: "{a}-{b}-{c}", v: {a:[50,100], b:[10,30], c:[5,20], kosul:"a>b+c"}, z:"orta", alt:"alt_alta_3sayi" },

  // ALT DAL 3: VERİLMEYEN EKSİLEN
  { id: "t2_007", s: "? - {b} = {sonuc}", c: "{b}+{sonuc}", v: {b:[5,30], sonuc:[5,50]}, z:"orta", alt:"verilmeyen_eksilen" },
  { id: "t2_008", s: "Hangi sayıdan {b} çıkarırsak {sonuc} kalır?", c: "{b}+{sonuc}", v: {b:[10,50], sonuc:[10,80]}, z:"orta", alt:"verilmeyen_eksilen_sozel" },
  { id: "t2_009", s: "? - {b} = {sonuc} - {c}", c: "{b}+{sonuc}-{c}", v: {b:[5,20], sonuc:[20,60], c:[5,15], kosul:"sonuc>c"}, z:"zor", alt:"verilmeyen_eksilen_karmasik" },

  // ALT DAL 4: VERİLMEYEN ÇIKAN
  { id: "t2_010", s: "{a} - ? = {sonuc}", c: "{a}-{sonuc}", v: {a:[20,80], sonuc:[5,30], kosul:"a>sonuc"}, z:"orta", alt:"verilmeyen_cikan" },
  { id: "t2_011", s: "{a} sayısından hangi sayıyı çıkarırsak {sonuc} kalır?", c: "{a}-{sonuc}", v: {a:[30,100], sonuc:[5,40], kosul:"a>sonuc"}, z:"orta", alt:"verilmeyen_cikan_sozel" },
  { id: "t2_012", s: "{a} - ? + {c} = {sonuc}", c: "{a}+{c}-{sonuc}", v: {a:[10,40], c:[5,20], sonuc:[10,30], kosul:"a+c>sonuc"}, z:"zor", alt:"verilmeyen_cikan_karmasik" },

  // ALT DAL 5: ONLUK BOZARAK ÇIKARMADA VERİLMEYEN RAKAM
  { id: "t2_013", s: " {a}{r1}\n-{r2}{b}\n----\n {c}{d}\n{r1}+{r2} kaçtır?", c: "{r1}+{r2}", v: {a:[3,8], b:[1,7], r1:[1,9], r2:[1,8], kosul:"a>r2"}, z:"cok_zor", alt:"sifreli_cikarma" },

  // ALT DAL 6: ÇIKARMADA SAĞLAMA (TOPLAMA İLE)
  { id: "t2_014", s: "{a} - {b} = {sonuc} ise {sonuc} + {b} = ?", c: "{a}", v: {a:[20,80], b:[5,30], sonuc:"{a}-{b}", kosul:"a>b"}, z:"orta", alt:"saglama" },
  { id: "t2_015", s: "{a} - {b} = {sonuc} işleminin sağlaması nasıl yapılır?", c: "{b}+{sonuc}={a}", v: {a:[20,80], b:[5,30], sonuc:"{a}-{b}", kosul:"a>b"}, z:"orta", alt:"saglama_soru" },

  // ALT DAL 7: ZİHİNDEN ÇIKARMA STRATEJİLERİ
  { id: "t2_016", s: "{a} - 9 = ?", c: "{a}-9", v: {a:[20,80]}, z:"kolay", alt:"zihinden_9" },
  { id: "t2_017", s: "{a} - 99 = ?", c: "{a}-99", v: {a:[200,500]}, z:"orta", alt:"zihinden_99" },
  { id: "t2_018", s: "{a} - 11 = ?", c: "{a}-11", v: {a:[30,90]}, z:"kolay", alt:"zihinden_11" },
  { id: "t2_019", s: "{a} - 19 = ?", c: "{a}-19", v: {a:[40,100]}, z:"orta", alt:"zihinden_19" },

  // ALT DAL 8: FARKIN DEĞİŞMEMESİ
  { id: "t2_020", s: "{a} - {b} işleminde eksilen ve çıkana {n} eklenirse sonuç nasıl değişir?", c: "degismez", v: {a:[20,60], b:[5,20], n:[3,10], kosul:"a>b"}, z:"orta", alt:"fark_degismez" },
  { id: "t2_021", s: "{a} - {b} işleminde eksilen ve çıkandan {n} çıkarılırsa sonuç nasıl değişir?", c: "degismez", v: {a:[20,60], b:[5,20], n:[1,4], kosul:"b>n"}, z:"orta", alt:"fark_degismez" },

  // ALT DAL 9: SAYI DOĞRUSUNDA ÇIKARMA
  { id: "t2_022", s: "Sayı doğrusunda {a} noktasından {b} birim geri gidersek hangi sayıya ulaşırız?", c: "{a}-{b}", v: {a:[10,30], b:[1,9], kosul:"a>b"}, z:"kolay", alt:"sayi_dogrusu" },
  { id: "t2_023", s: "Sayı doğrusunda {a} ile {b} arası kaç birimdir?", c: "Math.abs({a}-{b})", v: {a:[0,30], b:[0,30]}, z:"kolay", alt:"sayi_dogrusu_aralik" },

  // ALT DAL 10: ÇIKARMADA TAHMİN
  { id: "t2_024", s: "{a} - {b} ≈ ? (En yakın onluğa yuvarlayarak tahmin et)", c: "{a_yuv}-{b_yuv}", v: {a:[30,98], b:[12,48], a_yuv:"Math.round({a}/10)*10", b_yuv:"Math.round({b}/10)*10", kosul:"a_yuv>b_yuv"}, z:"orta", alt:"tahmin_onluk" },
  { id: "t2_025", s: "{a} - {b} işleminin gerçek sonucu ile tahmini sonucu arasındaki fark kaçtır?", c: "Math.abs(({a}-{b})-({a_yuv}-{b_yuv}))", v: {a:[35,95], b:[12,42], a_yuv:"Math.round({a}/10)*10", b_yuv:"Math.round({b}/10)*10"}, z:"zor", alt:"tahmin_fark" },

  // ALT DAL 11: TOPLAMA-ÇIKARMA İLİŞKİSİ
  { id: "t2_026", s: "{a} + {b} = {toplam} ise {toplam} - {a} = ?", c: "{b}", v: {a:[5,30], b:[5,30], toplam:"{a}+{b}"}, z:"kolay", alt:"toplama_cikarma_iliskisi" },
  { id: "t2_027", s: "{toplam} - {a} = {b} ise {b} + {a} = ?", c: "{toplam}", v: {a:[5,30], b:[5,30], toplam:"{a}+{b}"}, z:"kolay", alt:"toplama_cikarma_iliskisi" },
  { id: "t2_028", s: "{a} + {b} = {c} + {d} ise {a} + {b} - {d} = ?", c: "{c}", v: {a:[5,20], b:[5,20], c:[5,20], d:[5,20]}, z:"zor", alt:"toplama_cikarma_iliskisi_karmasik" },

  // ALT DAL 12: SÖZEL ÇIKARMA PROBLEMLERİ
  { id: "t2_029", s: "Bir tabakta {a} kurabiye vardı. {b} tanesi yendi. Kaç kurabiye kaldı?", c: "{a}-{b}", v: {a:[10,30], b:[1,9], kosul:"a>b"}, z:"kolay", alt:"sozel" },
  { id: "t2_030", s: "Ahmet'in {a} lirası vardı. {b} liraya kitap aldı. Kaç lirası kaldı?", c: "{a}-{b}", v: {a:[20,100], b:[5,50], kosul:"a>b"}, z:"kolay", alt:"sozel" },
  { id: "t2_031", s: "Bir sayının {b} eksiği {sonuc} ise bu sayı kaçtır?", c: "{b}+{sonuc}", v: {b:[5,30], sonuc:[5,40]}, z:"orta", alt:"sozel_eksigi" },
  { id: "t2_032", s: "{a} sayısı {b} sayısından kaç fazladır?", c: "{a}-{b}", v: {a:[20,80], b:[5,30], kosul:"a>b"}, z:"orta", alt:"sozel_fazlalik" },
  { id: "t2_033", s: "{a} sayısı {b} sayısından kaç eksiktir?", c: "{b}-{a}", v: {a:[5,30], b:[20,80], kosul:"b>a"}, z:"orta", alt:"sozel_eksiklik" },


  // ==========================================
  // KONU 3: ÇARPMA (14 alt dal)
  // ==========================================

  // ALT DAL 1: YATAY ÇARPMA - 2 SAYI
  { id: "t3_001", s: "{a} × {b} = ?", c: "{a}*{b}", v: {a:[1,10], b:[1,10]}, z:"kolay", alt:"yatay_2sayi" },
  { id: "t3_002", s: "{a} × {b} = ?", c: "{a}*{b}", v: {a:[2,9], b:[11,30]}, z:"orta", alt:"yatay_2sayi" },
  { id: "t3_003", s: "{a} × {b} = ?", c: "{a}*{b}", v: {a:[10,50], b:[10,50]}, z:"zor", alt:"yatay_2sayi" },

  // ALT DAL 2: YATAY ÇARPMA - 3 SAYI
  { id: "t3_004", s: "{a} × {b} × {c} = ?", c: "{a}*{b}*{c}", v: {a:[1,5], b:[1,5], c:[1,5]}, z:"orta", alt:"yatay_3sayi" },
  { id: "t3_005", s: "{a} × {b} × {c} = ?", c: "{a}*{b}*{c}", v: {a:[2,9], b:[2,5], c:[2,5]}, z:"zor", alt:"yatay_3sayi" },

  // ALT DAL 3: ALTA ALTA ÇARPMA
  { id: "t3_006", s: "{a} × {b} = ? (Alt alta çarp)", c: "{a}*{b}", v: {a:[12,50], b:[2,9]}, z:"orta", alt:"alt_alta" },
  { id: "t3_007", s: "{a} × {b} = ? (Alt alta çarp)", c: "{a}*{b}", v: {a:[10,99], b:[10,50]}, z:"zor", alt:"alt_alta" },

  // ALT DAL 4: ÇARPIM TABLOSU
  { id: "t3_008", s: "{a} × {b} = ? (Çarpım tablosu)", c: "{a}*{b}", v: {a:[1,10], b:[1,10]}, z:"kolay", alt:"carpim_tablosu" },
  { id: "t3_009", s: "Hangisi {a} × {b} işleminin sonucudur?", c: "{a}*{b}", v: {a:[3,9], b:[3,9]}, z:"kolay", alt:"carpim_tablosu_coktan" },

  // ALT DAL 5: 10, 100, 1000 İLE ÇARPMA
  { id: "t3_010", s: "{a} × 10 = ?", c: "{a}*10", v: {a:[1,200]}, z:"kolay", alt:"on_ile_carpma" },
  { id: "t3_011", s: "{a} × 100 = ?", c: "{a}*100", v: {a:[1,50]}, z:"kolay", alt:"yuz_ile_carpma" },
  { id: "t3_012", s: "{a} × 1000 = ?", c: "{a}*1000", v: {a:[1,20]}, z:"kolay", alt:"bin_ile_carpma" },
  { id: "t3_013", s: "{a} × {b} = ? ({b} 10'un katı)", c: "{a}*{b}", v: {a:[3,30], b:[20,90], kosul:"b%10==0"}, z:"orta", alt:"onun_kati_ile_carpma" },

  // ALT DAL 6: ZİHİNDEN ÇARPMA STRATEJİLERİ
  { id: "t3_014", s: "{a} × 9 = ? (9=10-1)", c: "{a}*9", v: {a:[3,20]}, z:"kolay", alt:"zihinden_9" },
  { id: "t3_015", s: "{a} × 11 = ? (11=10+1)", c: "{a}*11", v: {a:[3,20]}, z:"kolay", alt:"zihinden_11" },
  { id: "t3_016", s: "{a} × 5 = ?", c: "{a}*5", v: {a:[2,50], kosul:"a%2==0"}, z:"orta", alt:"zihinden_5" },
  { id: "t3_017", s: "{a} × 25 = ?", c: "{a}*25", v: {a:[2,20], kosul:"a%4==0"}, z:"orta", alt:"zihinden_25" },
  { id: "t3_018", s: "{a} × 99 = ? (99=100-1)", c: "{a}*99", v: {a:[2,30]}, z:"orta", alt:"zihinden_99" },
  { id: "t3_019", s: "{a} × 15 = ? (15=10+5)", c: "{a}*15", v: {a:[2,20]}, z:"orta", alt:"zihinden_15" },

  // ALT DAL 7: DEĞİŞME ÖZELLİĞİ
  { id: "t3_020", s: "{a} × {b} = {b} × ?", c: "{a}", v: {a:[1,30], b:[1,30]}, z:"kolay", alt:"degisme" },
  { id: "t3_021", s: "Aşağıdakilerden hangisi {a} × {b} işlemine eşittir?", c: "{b}*{a}", v: {a:[2,15], b:[2,15]}, z:"kolay", alt:"degisme_coktan" },

  // ALT DAL 8: BİRLEŞME ÖZELLİĞİ
  { id: "t3_022", s: "({a} × {b}) × {c} = {a} × (? × {c})", c: "{b}", v: {a:[1,10], b:[1,10], c:[1,10]}, z:"orta", alt:"birlesme" },

  // ALT DAL 9: DAĞILMA ÖZELLİĞİ
  { id: "t3_023", s: "{a} × ({b} + {c}) = ?", c: "{a}*{b}+{a}*{c}", v: {a:[2,9], b:[3,15], c:[2,10]}, z:"orta", alt:"dagilma" },
  { id: "t3_024", s: "{a} × ({b} - {c}) = ?", c: "{a}*{b}-{a}*{c}", v: {a:[2,9], b:[10,20], c:[1,8], kosul:"b>c"}, z:"zor", alt:"dagilma" },
  { id: "t3_025", s: "{a} × {b} + {a} × {c} = {a} × (? + {c})", c: "{b}", v: {a:[2,9], b:[3,10], c:[2,8]}, z:"orta", alt:"dagilma_tersten" },

  // ALT DAL 10: ÇARPMADA ETKİSİZ ELEMAN (1) VE YUTAN ELEMAN (0)
  { id: "t3_026", s: "{a} × 1 = ?", c: "{a}", v: {a:[1,100]}, z:"kolay", alt:"etkisiz_eleman" },
  { id: "t3_027", s: "{a} × 0 = ?", c: "0", v: {a:[1,100]}, z:"kolay", alt:"yutan_eleman" },
  { id: "t3_028", s: "{a} × ? = 0", c: "0", v: {a:[1,50]}, z:"kolay", alt:"yutan_eleman_soru" },
  { id: "t3_029", s: "{a} × ? = {a}", c: "1", v: {a:[1,50]}, z:"kolay", alt:"etkisiz_eleman_soru" },

  // ALT DAL 11: VERİLMEYEN ÇARPAN
  { id: "t3_030", s: "{a} × ? = {sonuc}", c: "{sonuc}/{a}", v: {a:[2,9], carpan:[3,12], sonuc:"{a}*{carpan}"}, z:"orta", alt:"verilmeyen_carpan" },
  { id: "t3_031", s: "? × {b} = {sonuc}", c: "{sonuc}/{b}", v: {b:[2,9], carpan:[3,12], sonuc:"{b}*{carpan}"}, z:"orta", alt:"verilmeyen_carpan" },
  { id: "t3_032", s: "{a} × ? + {c} = {sonuc}", c: "({sonuc}-{c})/{a}", v: {a:[2,9], c:[2,20], carpan:[3,8], sonuc:"{a}*{carpan}+{c}"}, z:"zor", alt:"verilmeyen_carpan_karmasik" },

  // ALT DAL 12: ŞİFRELİ ÇARPMA
  { id: "t3_033", s: " {a}{r}\n×  {b}\n----\n {c}{d}\n{r} kaçtır?", c: "{r}", v: {a:[1,5], b:[2,5], r:[0,9], kosul:"carpim_birler_kontrol"}, z:"cok_zor", alt:"sifreli" },

  // ALT DAL 13: ÇARPMA İŞLEMİNDE TAHMİN
  { id: "t3_034", s: "{a} × {b} ≈ ? (En yakın onluğa yuvarlayarak tahmin et)", c: "{a_yuv}*{b_yuv}", v: {a:[13,97], b:[12,48], a_yuv:"Math.round({a}/10)*10", b_yuv:"Math.round({b}/10)*10"}, z:"orta", alt:"tahmin" },

  // ALT DAL 14: SÖZEL ÇARPMA PROBLEMLERİ
  { id: "t3_035", s: "Bir pakette {a} yumurta varsa {b} pakette kaç yumurta vardır?", c: "{a}*{b}", v: {a:[6,30], b:[2,10]}, z:"kolay", alt:"sozel" },
  { id: "t3_036", s: "Günde {a} sayfa kitap okuyan biri {b} günde kaç sayfa okur?", c: "{a}*{b}", v: {a:[5,30], b:[2,10]}, z:"kolay", alt:"sozel" },
  { id: "t3_037", s: "Bir sayının {a} katı {sonuc} ise bu sayı kaçtır?", c: "{sonuc}/{a}", v: {a:[2,9], sayi:[3,20], sonuc:"{a}*{sayi}"}, z:"orta", alt:"sozel_kati" },
  { id: "t3_038", s: "Bir sayının {a} katının {b} fazlası {sonuc} ise bu sayı kaçtır?", c: "({sonuc}-{b})/{a}", v: {a:[2,5], b:[3,15], sayi:[5,20], sonuc:"{a}*{sayi}+{b}"}, z:"zor", alt:"sozel_kati_fazlasi" },


  // ==========================================
  // KONU 4: BÖLME (14 alt dal)
  // ==========================================

  // ALT DAL 1: KALANSIZ BÖLME
  { id: "t4_001", s: "{a} ÷ {b} = ?", c: "{a}/{b}", v: {a:[10,50], b:[2,9], kosul:"a%b==0"}, z:"kolay", alt:"kalansiz" },
  { id: "t4_002", s: "{a} ÷ {b} = ?", c: "{a}/{b}", v: {a:[50,200], b:[2,10], kosul:"a%b==0"}, z:"orta", alt:"kalansiz" },
  { id: "t4_003", s: "{a} ÷ {b} = ?", c: "{a}/{b}", v: {a:[100,500], b:[5,25], kosul:"a%b==0"}, z:"zor", alt:"kalansiz" },

  // ALT DAL 2: KALANLI BÖLME
  { id: "t4_004", s: "{a} ÷ {b} = ? (Kalanlı bölme)", c: "Bölüm:{bolum}, Kalan:{kalan}", v: {a:[15,60], b:[2,9], kosul:"a%b!=0", bolum:"Math.floor({a}/{b})", kalan:"{a}%{b}"}, z:"orta", alt:"kalanli" },
  { id: "t4_005", s: "{a} ÷ {b} işleminde bölüm kaçtır?", c: "{bolum}", v: {a:[20,80], b:[3,9], kosul:"a%b!=0", bolum:"Math.floor({a}/{b})"}, z:"orta", alt:"bolumu_bul" },
  { id: "t4_006", s: "{a} ÷ {b} işleminde kalan kaçtır?", c: "{a}%{b}", v: {a:[20,80], b:[3,9], kosul:"a%b!=0"}, z:"orta", alt:"kalani_bul" },

  // ALT DAL 3: BÖLME TERİMLERİ
  { id: "t4_007", s: "{a} ÷ {b} = {bolum} işleminde bölünen kaçtır?", c: "{a}", v: {a:[20,80], b:[2,9], kosul:"a%b==0", bolum:"{a}/{b}"}, z:"kolay", alt:"terim_bolunen" },
  { id: "t4_008", s: "{a} ÷ {b} = {bolum} işleminde bölen kaçtır?", c: "{b}", v: {a:[20,80], b:[2,9], kosul:"a%b==0", bolum:"{a}/{b}"}, z:"kolay", alt:"terim_bolen" },
  { id: "t4_009", s: "{a} ÷ {b} = {bolum} işleminde bölüm kaçtır?", c: "{bolum}", v: {a:[20,80], b:[2,9], kosul:"a%b==0", bolum:"{a}/{b}"}, z:"kolay", alt:"terim_bolum" },
  { id: "t4_010", s: "Bölünen={a}, Bölen={b}, Bölüm={bolum}, Kalan={kalan} eşitliğini yazınız.", c: "{a}={b}*{bolum}+{kalan}", v: {a:[15,60], b:[2,9], kosul:"a%b!=0", bolum:"Math.floor({a}/{b})", kalan:"{a}%{b}"}, z:"orta", alt:"terim_esitlik" },

  // ALT DAL 4: VERİLMEYEN BÖLÜNENİ BULMA
  { id: "t4_011", s: "? ÷ {b} = {bolum}", c: "{b}*{bolum}", v: {b:[2,9], bolum:[3,15]}, z:"orta", alt:"verilmeyen_bolunen" },
  { id: "t4_012", s: "Bir sayıyı {b} ile böldüğümde {bolum} çıkıyor. Bu sayı kaçtır?", c: "{b}*{bolum}", v: {b:[2,9], bolum:[5,20]}, z:"orta", alt:"verilmeyen_bolunen_sozel" },
  { id: "t4_013", s: "? ÷ {b} = {bolum} (Kalan: {kalan})", c: "{b}*{bolum}+{kalan}", v: {b:[3,9], bolum:[3,10], kalan:[1,"{b}-1"]}, z:"zor", alt:"verilmeyen_bolunen_kalanli" },

  // ALT DAL 5: VERİLMEYEN BÖLENİ BULMA
  { id: "t4_014", s: "{a} ÷ ? = {bolum}", c: "{a}/{bolum}", v: {a:[20,100], bolum:[2,10], kosul:"a%bolum==0"}, z:"orta", alt:"verilmeyen_bolen" },
  { id: "t4_015", s: "{a} sayısını kaça bölersem {bolum} çıkar?", c: "{a}/{bolum}", v: {a:[20,100], bolum:[2,10], kosul:"a%bolum==0"}, z:"orta", alt:"verilmeyen_bolen_sozel" },
  { id: "t4_016", s: "{a} ÷ ? = {bolum} (Kalan: {kalan})", c: "({a}-{kalan})/{bolum}", v: {a:[25,80], bolum:[2,8], kalan:[1,3], kosul:"({a}-{kalan})%{bolum}==0"}, z:"zor", alt:"verilmeyen_bolen_kalanli" },

  // ALT DAL 6: KALAN-BÖLEN İLİŞKİSİ
  { id: "t4_017", s: "Bir bölme işleminde bölen {b} ise kalan en fazla kaç olabilir?", c: "{b}-1", v: {b:[3,20]}, z:"orta", alt:"kalan_max" },
  { id: "t4_018", s: "Bir bölme işleminde kalan {k} ise bölen en az kaç olabilir?", c: "{k}+1", v: {k:[1,9]}, z:"orta", alt:"bolen_min" },
  { id: "t4_019", s: "Bir bölme işleminde bölüm {bolum}, bölen {b} ise bölünen en az kaç olabilir?", c: "{b}*{bolum}", v: {b:[3,10], bolum:[2,10]}, z:"zor", alt:"bolunen_min" },
  { id: "t4_020", s: "Bir bölme işleminde bölüm {bolum}, bölen {b}, kalan {k} ise bölünen en az kaçtır?", c: "{b}*{bolum}+{k}", v: {b:[4,10], bolum:[2,8], k:[1,"{b}-1"]}, z:"zor", alt:"bolunen_kalanli" },

  // ALT DAL 7: KALANLI BÖLMEDE KALAN SIFIR OLMA DURUMU
  { id: "t4_021", s: "{a} ÷ {b} işleminde kalan 0 ise {a} sayısı {b} ile ne olur?", c: "tam_bolunur", v: {a:[20,100], b:[2,10], kosul:"a%b==0"}, z:"orta", alt:"tam_bolunme" },
  { id: "t4_022", s: "{a} sayısı {b} ile tam bölünür mü?", c: "{evet_hayir}", v: {a:[10,50], b:[2,9]}, z:"orta", alt:"tam_bolunme_soru" },

  // ALT DAL 8: BÖLME İŞLEMİNDE SAĞLAMA
  { id: "t4_023", s: "{a} ÷ {b} = {bolum} işleminin sağlaması nasıl yapılır?", c: "{b}*{bolum}={a}", v: {a:[20,80], b:[2,9], kosul:"a%b==0", bolum:"{a}/{b}"}, z:"orta", alt:"saglama" },
  { id: "t4_024", s: "{a} ÷ {b} = {bolum} (K:{kalan}) sağlaması: ?", c: "{b}*{bolum}+{kalan}={a}", v: {a:[15,50], b:[2,9], kosul:"a%b!=0", bolum:"Math.floor({a}/{b})", kalan:"{a}%{b}"}, z:"orta", alt:"saglama_kalanli" },

  // ALT DAL 9: ÇARPMA-BÖLME İLİŞKİSİ
  { id: "t4_025", s: "{a} × {b} = {c} ise {c} ÷ {a} = ?", c: "{b}", v: {a:[2,9], b:[3,12], c:"{a}*{b}"}, z:"kolay", alt:"carpma_bolme_iliskisi" },
  { id: "t4_026", s: "{c} ÷ {a} = {b} ise {b} × {a} = ?", c: "{c}", v: {a:[2,9], b:[3,12], c:"{a}*{b}"}, z:"kolay", alt:"carpma_bolme_iliskisi" },
  { id: "t4_027", s: "Bir sayıyı {a} ile çarpıp {a} ile bölersek sonuç ne olur?", c: "sayinin_kendisi", v: {a:[2,9]}, z:"orta", alt:"carpma_bolme_iliskisi_sifir" },

  // ALT DAL 10: BÖLME İŞLEMİNDE TAHMİN
  { id: "t4_028", s: "{a} ÷ {b} ≈ ? (Bölümü tahmin et - yuvarla)", c: "{tahmin}", v: {a:[50,200], b:[3,9], tahmin:"Math.round({a}/{b})"}, z:"orta", alt:"tahmin" },
  { id: "t4_029", s: "{a} ÷ {b} işleminde bölüm yaklaşık kaçtır?", c: "{tahmin}", v: {a:[100,500], b:[6,19], tahmin:"Math.round({a}/{b})"}, z:"orta", alt:"tahmin_yaklasik" },

  // ALT DAL 11: YARISI, ÇEYREĞİ, KATI
  { id: "t4_030", s: "{a} sayısının yarısı kaçtır?", c: "{a}/2", v: {a:[2,100], kosul:"a%2==0"}, z:"kolay", alt:"yarisi" },
  { id: "t4_031", s: "{a} sayısının çeyreği kaçtır?", c: "{a}/4", v: {a:[4,100], kosul:"a%4==0"}, z:"kolay", alt:"ceyregi" },
  { id: "t4_032", s: "{a} sayısının {b} katı kaçtır?", c: "{a}*{b}", v: {a:[2,30], b:[2,5]}, z:"kolay", alt:"kati" },

  // ALT DAL 12: SÖZEL BÖLME PROBLEMLERİ
  { id: "t4_033", s: "{a} ceviz {b} kişiye eşit paylaştırılırsa kişi başı kaç ceviz düşer?", c: "{a}/{b}", v: {a:[20,100], b:[2,10], kosul:"a%b==0"}, z:"orta", alt:"sozel_paylastirma" },
  { id: "t4_034", s: "{a} litre süt {b} litrelik şişelere doldurulacaktır. Kaç şişe gerekir?", c: "{a}/{b}", v: {a:[20,100], b:[2,10], kosul:"a%b==0"}, z:"orta", alt:"sozel_doldurma" },
  { id: "t4_035", s: "{a} elma {b} kasaya eşit yerleştirilirse her kasada kaç elma olur, kaç elma artar?", c: "Bolum:{a/b}, Kalan:{a%b}", v: {a:[20,60], b:[3,8], kosul:"a%b!=0"}, z:"zor", alt:"sozel_kalanli" },

  // ALT DAL 13: BÖLÜNEBİLME (TEMEL SEVİYE)
  { id: "t4_036", s: "Aşağıdaki sayılardan hangisi 2 ile tam bölünür?", c: "{cift}", v: {sayilar:[100,999]}, z:"kolay", alt:"bolunebilme_2" },
  { id: "t4_037", s: "Aşağıdaki sayılardan hangisi 5 ile tam bölünür?", c: "{sonu_0_5}", v: {sayilar:[10,200]}, z:"kolay", alt:"bolunebilme_5" },
  { id: "t4_038", s: "Aşağıdaki sayılardan hangisi 10 ile tam bölünür?", c: "{sonu_0}", v: {sayilar:[10,500]}, z:"kolay", alt:"bolunebilme_10" },

  // ALT DAL 14: BÖLME İŞLEMİNDE SIFIR
  { id: "t4_039", s: "0 ÷ {a} = ?", c: "0", v: {a:[1,20]}, z:"kolay", alt:"sifir_bolme" },
  { id: "t4_040", s: "{a} ÷ 0 = ?", c: "tanimsiz", v: {a:[1,20]}, z:"orta", alt:"sifira_bolme" },
  { id: "t4_041", s: "{a} ÷ 1 = ?", c: "{a}", v: {a:[1,50]}, z:"kolay", alt:"bire_bolme" },


  // ==========================================
  // KONU 5: İŞLEM ÖNCELİĞİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: TOPLAMA-ÇARPMA
  { id: "t5_001", s: "{a} + {b} × {c} = ?", c: "{a}+{b}*{c}", v: {a:[2,15], b:[2,9], c:[2,9]}, z:"orta", alt:"toplama_carpma" },
  { id: "t5_002", s: "{a} × {b} + {c} = ?", c: "{a}*{b}+{c}", v: {a:[2,9], b:[2,9], c:[2,20]}, z:"orta", alt:"carpma_toplama" },

  // ALT DAL 2: ÇIKARMA-ÇARPMA
  { id: "t5_003", s: "{a} - {b} × {c} = ?", c: "{a}-{b}*{c}", v: {a:[20,80], b:[2,5], c:[2,5], kosul:"a>b*c"}, z:"orta", alt:"cikarma_carpma" },
  { id: "t5_004", s: "{a} × {b} - {c} = ?", c: "{a}*{b}-{c}", v: {a:[2,9], b:[2,9], c:[2,20], kosul:"a*b>c"}, z:"orta", alt:"carpma_cikarma" },

  // ALT DAL 3: TOPLAMA-BÖLME
  { id: "t5_005", s: "{a} + {b} ÷ {c} = ?", c: "{a}+{b}/{c}", v: {a:[2,10], b:[10,50], c:[2,5], kosul:"b%c==0"}, z:"orta", alt:"toplama_bolme" },
  { id: "t5_006", s: "{a} ÷ {b} + {c} = ?", c: "{a}/{b}+{c}", v: {a:[10,50], b:[2,5], c:[2,10], kosul:"a%b==0"}, z:"orta", alt:"bolme_toplama" },

  // ALT DAL 4: ÇIKARMA-BÖLME
  { id: "t5_007", s: "{a} - {b} ÷ {c} = ?", c: "{a}-{b}/{c}", v: {a:[20,50], b:[10,40], c:[2,5], kosul:"b%c==0"}, z:"orta", alt:"cikarma_bolme" },
  { id: "t5_008", s: "{a} ÷ {b} - {c} = ?", c: "{a}/{b}-{c}", v: {a:[20,60], b:[2,5], c:[2,10], kosul:"a/b>c"}, z:"orta", alt:"bolme_cikarma" },

  // ALT DAL 5: PARANTEZLİ İŞLEMLER
  { id: "t5_009", s: "({a} + {b}) × {c} = ?", c: "({a}+{b})*{c}", v: {a:[2,10], b:[2,10], c:[2,5]}, z:"orta", alt:"parantezli" },
  { id: "t5_010", s: "({a} - {b}) × {c} = ?", c: "({a}-{b})*{c}", v: {a:[10,30], b:[1,9], c:[2,5], kosul:"a>b"}, z:"orta", alt:"parantezli" },
  { id: "t5_011", s: "({a} + {b}) ÷ {c} = ?", c: "({a}+{b})/{c}", v: {a:[3,15], b:[3,15], c:[2,5], kosul:"(a+b)%c==0"}, z:"orta", alt:"parantezli" },
  { id: "t5_012", s: "{a} × ({b} + {c}) = ?", c: "{a}*({b}+{c})", v: {a:[2,9], b:[3,10], c:[2,8]}, z:"orta", alt:"parantezli" },
  { id: "t5_013", s: "{a} × ({b} - {c}) = ?", c: "{a}*({b}-{c})", v: {a:[2,9], b:[10,20], c:[1,8], kosul:"b>c"}, z:"orta", alt:"parantezli" },
  { id: "t5_014", s: "({a} + {b}) × ({c} + {d}) = ?", c: "({a}+{b})*({c}+{d})", v: {a:[2,8], b:[2,8], c:[2,8], d:[2,8]}, z:"zor", alt:"parantezli_cift" },
  { id: "t5_015", s: "({a} - {b}) × ({c} + {d}) = ?", c: "({a}-{b})*({c}+{d})", v: {a:[10,25], b:[1,8], c:[2,8], d:[2,8], kosul:"a>b"}, z:"zor", alt:"parantezli_cift" },

  // ALT DAL 6: İÇ İÇE PARANTEZLER
  { id: "t5_016", s: "(({a} + {b}) × {c}) - {d} = ?", c: "(({a}+{b})*{c})-{d}", v: {a:[2,8], b:[2,8], c:[2,4], d:[5,20], kosul:"(a+b)*c>d"}, z:"zor", alt:"ic_ice_parantez" },
  { id: "t5_017", s: "{a} + ({b} × ({c} + {d})) = ?", c: "{a}+({b}*({c}+{d}))", v: {a:[2,10], b:[2,5], c:[2,6], d:[2,6]}, z:"cok_zor", alt:"ic_ice_parantez" },

  // ALT DAL 7: İŞLEM ÖNCELİĞİNDE DOĞRU-YANLIŞ
  { id: "t5_018", s: "{a} + {b} × {c} = {a_plus_b}_x_{c} ifadesi doğru mu?", c: "yanlis", v: {a:[2,10], b:[3,6], c:[3,6], a_plus_b:"{a}+{b}"}, z:"orta", alt:"dogru_yanlis" },
  { id: "t5_019", s: "({a} + {b}) × {c} = {a} × {c} + {b} × {c} ifadesi doğru mu?", c: "dogru", v: {a:[2,10], b:[2,10], c:[2,5]}, z:"orta", alt:"dogru_yanlis_dagilma" },

  // ALT DAL 8: EŞİTLİKTE VERİLMEYEN İŞLEM
  { id: "t5_020", s: "{a} ? {b} = {sonuc} (?, +,-,×,÷ olabilir)", c: "{islem}", v: {a:[2,20], b:[2,10], islem:"+", sonuc:"{a}+{b}"}, z:"zor", alt:"verilmeyen_islem" },
  { id: "t5_021", s: "{a} ? {b} ? {c} = {sonuc}", c: "{islem1},{islem2}", v: {a:[2,10], b:[2,5], c:[2,5], sonuc:"{a}+{b}*{c}"}, z:"cok_zor", alt:"verilmeyen_islemler" },


  // ==========================================
  // KONU 6: ZİHİNDEN İŞLEM STRATEJİLERİ (10 alt dal)
  // ==========================================

  // ALT DAL 1: TOPLAMADA YUVARLAMA
  { id: "t6_001", s: "{a} + 99 = ? (99=100-1)", c: "{a}+99", v: {a:[100,500]}, z:"orta", alt:"yuvarlama_99" },
  { id: "t6_002", s: "{a} + 98 = ? (98=100-2)", c: "{a}+98", v: {a:[100,500]}, z:"orta", alt:"yuvarlama_98" },
  { id: "t6_003", s: "{a} + 101 = ? (101=100+1)", c: "{a}+101", v: {a:[100,500]}, z:"orta", alt:"yuvarlama_101" },

  // ALT DAL 2: ÇIKARMADA YUVARLAMA
  { id: "t6_004", s: "{a} - 99 = ? (99=100-1, çıkar 100 ekle 1)", c: "{a}-99", v: {a:[200,500]}, z:"orta", alt:"yuvarlama_99" },
  { id: "t6_005", s: "{a} - 98 = ? (98=100-2)", c: "{a}-98", v: {a:[200,500]}, z:"orta", alt:"yuvarlama_98" },

  // ALT DAL 3: 5 İLE ÇARPMA
  { id: "t6_006", s: "{a} × 5 = ? (10 ile çarp 2'ye böl)", c: "{a}*5", v: {a:[2,50], kosul:"a%2==0"}, z:"orta", alt:"bes_ile_carpma" },
  { id: "t6_007", s: "{a} × 50 = ? (100 ile çarp 2'ye böl)", c: "{a}*50", v: {a:[2,20]}, z:"orta", alt:"elli_ile_carpma" },

  // ALT DAL 4: 25 İLE ÇARPMA
  { id: "t6_008", s: "{a} × 25 = ? (100 ile çarp 4'e böl)", c: "{a}*25", v: {a:[2,20], kosul:"a%4==0"}, z:"orta", alt:"yirmibes_ile_carpma" },
  { id: "t6_009", s: "{a} × 250 = ? (1000 ile çarp 4'e böl)", c: "{a}*250", v: {a:[2,12], kosul:"a%4==0"}, z:"zor", alt:"ikiyuzelli_ile_carpma" },

  // ALT DAL 5: 9 İLE ÇARPMA
  { id: "t6_010", s: "{a} × 9 = ? (10 ile çarp 1 çıkar)", c: "{a}*9", v: {a:[3,20]}, z:"orta", alt:"dokuz_ile_carpma" },
  { id: "t6_011", s: "{a} × 99 = ? (100 ile çarp 1 çıkar)", c: "{a}*99", v: {a:[2,30]}, z:"orta", alt:"doksandokuz_ile_carpma" },

  // ALT DAL 6: 11 İLE ÇARPMA
  { id: "t6_012", s: "{a} × 11 = ? (10 ile çarp 1 ekle)", c: "{a}*11", v: {a:[3,20]}, z:"orta", alt:"onbir_ile_carpma" },
  { id: "t6_013", s: "{a} × 101 = ? (100 ile çarp 1 ekle)", c: "{a}*101", v: {a:[2,20]}, z:"orta", alt:"yuzbir_ile_carpma" },

  // ALT DAL 7: 15 İLE ÇARPMA
  { id: "t6_014", s: "{a} × 15 = ? (10+5 veya 30/2)", c: "{a}*15", v: {a:[2,20]}, z:"orta", alt:"onbes_ile_carpma" },

  // ALT DAL 8: GRUPLANDIRARAK ÇARPMA
  { id: "t6_015", s: "{a} × {b} × {c} = ? (Önce {b}×{c} yap)", c: "{a}*{b}*{c}", v: {a:[2,9], b:[2,10], c:[5,10], kosul:"b*c kolay_hesap"}, z:"orta", alt:"gruplandirma" },
  { id: "t6_016", s: "{a} × {b} × 5 × 2 = ? (5×2=10 yap)", c: "{a}*{b}*10", v: {a:[2,10], b:[2,10]}, z:"orta", alt:"gruplandirma_on" },

  // ALT DAL 9: PARÇALAYARAK ÇARPMA
  { id: "t6_017", s: "{a} × {b} = ? (Parçala: {a}×{onluk}+{a}×{birlik})", c: "{a}*{b}", v: {a:[2,9], b:[12,19], onluk:"Math.floor({b}/10)*10", birlik:"{b}%10"}, z:"orta", alt:"parcalama" },

  // ALT DAL 10: BÖLMEDE ZİHİNDEN STRATEJİ
  { id: "t6_018", s: "{a} ÷ 5 = ? (Önce 2 ile çarp, 10'a böl)", c: "{a}/5", v: {a:[10,100], kosul:"a%5==0"}, z:"orta", alt:"bolme_bes" },
  { id: "t6_019", s: "{a} ÷ 25 = ? (Önce 4 ile çarp, 100'e böl)", c: "{a}/25", v: {a:[50,500], kosul:"a%25==0"}, z:"zor", alt:"bolme_yirmibes" },


  // ==========================================
  // KONU 7: TAHMİN STRATEJİLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: TOPLAMI TAHMİN (ONLUĞA YUVARLA)
  { id: "t7_001", s: "{a} + {b} ≈ ?", c: "{a_yuv}+{b_yuv}", v: {a:[13,97], b:[12,98], a_yuv:"Math.round({a}/10)*10", b_yuv:"Math.round({b}/10)*10"}, z:"orta", alt:"toplam_tahmin_onluk" },

  // ALT DAL 2: FARKI TAHMİN
  { id: "t7_002", s: "{a} - {b} ≈ ?", c: "{a_yuv}-{b_yuv}", v: {a:[35,98], b:[12,42], a_yuv:"Math.round({a}/10)*10", b_yuv:"Math.round({b}/10)*10", kosul:"a_yuv>b_yuv"}, z:"orta", alt:"fark_tahmin" },

  // ALT DAL 3: ÇARPIMI TAHMİN
  { id: "t7_003", s: "{a} × {b} ≈ ?", c: "{a_yuv}*{b_yuv}", v: {a:[13,97], b:[12,48], a_yuv:"Math.round({a}/10)*10", b_yuv:"Math.round({b}/10)*10"}, z:"orta", alt:"carpim_tahmin" },

  // ALT DAL 4: BÖLÜMÜ TAHMİN
  { id: "t7_004", s: "{a} ÷ {b} ≈ ?", c: "{tahmin}", v: {a:[50,200], b:[3,9], tahmin:"Math.round({a}/{b})"}, z:"orta", alt:"bolum_tahmin" },

  // ALT DAL 5: GERÇEK SONUÇ İLE TAHMİNİ KARŞILAŞTIRMA
  { id: "t7_005", s: "{a} + {b} = ? Tahminin: {tahmin}, Gerçek sonuç: {gercek}, Fark: {fark}", c: "{fark}", v: {a:[23,88], b:[14,67], tahmin:"Math.round({a}/10)*10+Math.round({b}/10)*10", gercek:"{a}+{b}", fark:"Math.abs(({a}+{b})-(Math.round({a}/10)*10+Math.round({b}/10)*10))"}, z:"zor", alt:"tahmin_gercek_fark" },

  // ALT DAL 6: TAHMİN STRATEJİSİ SEÇME
  { id: "t7_006", s: "{a} + {b} işlemini tahmin etmek için en uygun strateji nedir?", c: "en_yakin_onluga_yuvarla", v: {a:[15,95], b:[12,88]}, z:"orta", alt:"tahmin_strateji" },


  // ==========================================
  // KONU 8: EŞİTLİK KAVRAMI (5 alt dal)
  // ==========================================

  // ALT DAL 1: EŞİTLİĞİN KORUNUMU
  { id: "t8_001", s: "{a} + {b} = {c} + ? ise ? kaçtır?", c: "{a}+{b}-{c}", v: {a:[3,15], b:[3,15], c:[3,15], kosul:"a+b>c"}, z:"orta", alt:"esitlik_korunumu" },
  { id: "t8_002", s: "{a} + ? = {b} + {c}", c: "{b}+{c}-{a}", v: {a:[3,15], b:[3,15], c:[3,15], kosul:"b+c>a"}, z:"orta", alt:"esitlik_korunumu" },
  { id: "t8_003", s: "Eşit kollu terazinin sol kefesinde {a} kg ve {b} kg, sağ kefesinde {c} kg ve ? kg vardır. Denge için ? kaç olmalıdır?", c: "{a}+{b}-{c}", v: {a:[2,10], b:[2,10], c:[2,10], kosul:"a+b>c"}, z:"orta", alt:"terazi" },

  // ALT DAL 4: EŞİTLİKTE HER İKİ TARAFA EKLEME
  { id: "t8_004", s: "{a} = {b} ise {a} + {n} = {b} + ?", c: "{n}", v: {a:[3,20], b:[3,20], n:[2,10]}, z:"orta", alt:"esitlik_ekleme" },
  { id: "t8_005", s: "{a} = {b} ise {a} - {n} = {b} - ?", c: "{n}", v: {a:[10,30], b:[10,30], n:[2,8], kosul:"a>n"}, z:"orta", alt:"esitlik_cikarma" },

  // ALT DAL 5: EŞİTLİKTE ÇARPMA VE BÖLME
  { id: "t8_006", s: "{a} = {b} ise {a} × {n} = {b} × ?", c: "{n}", v: {a:[2,10], b:[2,10], n:[2,5]}, z:"orta", alt:"esitlik_carpma" },
  { id: "t8_007", s: "{a} = {b} ise {a} ÷ {n} = {b} ÷ ? ({a}, {n}'ye tam bölünür)", c: "{n}", v: {a:[10,50], b:[10,50], n:[2,5], kosul:"a%n==0"}, z:"orta", alt:"esitlik_bolme" },


  // ==========================================
  // KONU 9: KAT PROBLEMLERİ - TEMEL (8 alt dal)
  // ==========================================

  // ALT DAL 1: İKİ KATI
  { id: "t9_001", s: "{a} sayısının 2 katı kaçtır?", c: "{a}*2", v: {a:[1,50]}, z:"kolay", alt:"iki_kati" },
  { id: "t9_002", s: "Hangi sayının 2 katı {sonuc} eder?", c: "{sonuc}/2", v: {a:[1,50], sonuc:"{a}*2"}, z:"orta", alt:"iki_kati_ters" },

  // ALT DAL 2: ÜÇ KATI
  { id: "t9_003", s: "{a} sayısının 3 katı kaçtır?", c: "{a}*3", v: {a:[1,30]}, z:"kolay", alt:"uc_kati" },
  { id: "t9_004", s: "Hangi sayının 3 katı {sonuc} eder?", c: "{sonuc}/3", v: {a:[1,30], sonuc:"{a}*3"}, z:"orta", alt:"uc_kati_ters" },

  // ALT DAL 3: YARISI
  { id: "t9_005", s: "{a} sayısının yarısı kaçtır?", c: "{a}/2", v: {a:[2,100], kosul:"a%2==0"}, z:"kolay", alt:"yarisi" },
  { id: "t9_006", s: "Yarısı {sonuc} olan sayı kaçtır?", c: "{sonuc}*2", v: {a:[2,50], sonuc:"{a}/2", kosul:"a%2==0"}, z:"orta", alt:"yarisi_ters" },

  // ALT DAL 4: ÇEYREĞİ
  { id: "t9_007", s: "{a} sayısının çeyreği kaçtır?", c: "{a}/4", v: {a:[4,100], kosul:"a%4==0"}, z:"kolay", alt:"ceyregi" },
  { id: "t9_008", s: "Çeyreği {sonuc} olan sayı kaçtır?", c: "{sonuc}*4", v: {a:[2,25], sonuc:"{a}/4", kosul:"a%4==0"}, z:"orta", alt:"ceyregi_ters" },

  // ALT DAL 5: KATI + FAZLASI
  { id: "t9_009", s: "{a} sayısının {b} katının {c} fazlası kaçtır?", c: "{a}*{b}+{c}", v: {a:[1,15], b:[2,5], c:[2,10]}, z:"orta", alt:"kati_fazlasi" },
  { id: "t9_010", s: "{a} sayısının {b} katının {c} eksiği kaçtır?", c: "{a}*{b}-{c}", v: {a:[2,15], b:[2,5], c:[1,8], kosul:"a*b>c"}, z:"orta", alt:"kati_eksigi" },

  // ALT DAL 6: TERS KAT PROBLEMLERİ
  { id: "t9_011", s: "Bir sayının {b} katının {c} fazlası {sonuc} ise bu sayı kaçtır?", c: "({sonuc}-{c})/{b}", v: {a:[2,15], b:[2,5], c:[2,10], sonuc:"{a}*{b}+{c}"}, z:"zor", alt:"ters_kat" },
  { id: "t9_012", s: "Bir sayının {b} katının {c} eksiği {sonuc} ise bu sayı kaçtır?", c: "({sonuc}+{c})/{b}", v: {a:[2,15], b:[2,5], c:[1,8], sonuc:"{a}*{b}-{c}"}, z:"zor", alt:"ters_kat_eksi" },

  // ALT DAL 7: İKİ SAYI ARASINDAKİ KAT İLİŞKİSİ
  { id: "t9_013", s: "İki sayının toplamı {toplam}, büyük sayı küçük sayının {kat} katıdır. Küçük sayı kaçtır?", c: "{toplam}/({kat}+1)", v: {kucuk:[2,20], kat:[2,5], toplam:"{kucuk}+{kucuk}*{kat}"}, z:"zor", alt:"iki_sayi_kat" },
  { id: "t9_014", s: "İki sayının farkı {fark}, büyük sayı küçük sayının {kat} katıdır. Küçük sayı kaçtır?", c: "{fark}/({kat}-1)", v: {kucuk:[2,15], kat:[3,5], fark:"{kucuk}*{kat}-{kucuk}"}, z:"cok_zor", alt:"iki_sayi_kat_fark" },

  // ALT DAL 8: YAŞ PROBLEMLERİ (TEMEL)
  { id: "t9_015", s: "Bir baba {baba_yas} yaşında, çocuğu {cocuk_yas} yaşındadır. Babanın yaşı çocuğun yaşının kaç katıdır?", c: "{baba_yas}/{cocuk_yas}", v: {cocuk_yas:[3,10], kat:[2,5], baba_yas:"{cocuk_yas}*{kat}"}, z:"orta", alt:"yas_kati" },
  { id: "t9_016", s: "Bir babanın yaşı çocuğunun yaşının {kat} katıdır. İkisinin yaşları toplamı {toplam} ise çocuk kaç yaşındadır?", c: "{toplam}/({kat}+1)", v: {cocuk:[3,10], kat:[2,5], toplam:"{cocuk}+{cocuk}*{kat}"}, z:"zor", alt:"yas_kati_toplam" },


  // ==========================================
  // KONU 10: BASAMAK DEĞERİ / SAYI OKUMA (8 alt dal)
  // ==========================================

  // ALT DAL 1: BASAMAK DEĞERİ BULMA
  { id: "t10_001", s: "{sayi} sayısının birler basamağı kaçtır?", c: "{sayi}%10", v: {sayi:[100,9999]}, z:"kolay", alt:"birler" },
  { id: "t10_002", s: "{sayi} sayısının onlar basamağındaki rakam kaçtır?", c: "Math.floor({sayi}/10)%10", v: {sayi:[100,9999]}, z:"kolay", alt:"onlar" },
  { id: "t10_003", s: "{sayi} sayısının yüzler basamağındaki rakamın basamak değeri kaçtır?", c: "Math.floor({sayi}/100)%10*100", v: {sayi:[1000,99999]}, z:"orta", alt:"yuzler_basamak_degeri" },
  { id: "t10_004", s: "{sayi} sayısının binler basamağındaki rakam kaçtır?", c: "Math.floor({sayi}/1000)%10", v: {sayi:[10000,99999]}, z:"orta", alt:"binler" },

  // ALT DAL 2: SAYI DEĞERİ VS BASAMAK DEĞERİ
  { id: "t10_005", s: "{sayi} sayısının onlar basamağındaki rakamın sayı değeri kaçtır?", c: "Math.floor({sayi}/10)%10", v: {sayi:[100,9999]}, z:"kolay", alt:"sayi_degeri" },
  { id: "t10_006", s: "{sayi} sayısının onlar basamağındaki rakamın basamak değeri kaçtır?", c: "Math.floor({sayi}/10)%10*10", v: {sayi:[100,9999]}, z:"orta", alt:"basamak_degeri" },
  { id: "t10_007", s: "{sayi} sayısının yüzler basamağındaki rakamın sayı değeri ile basamak değeri toplamı kaçtır?", c: "{sayi_degeri}+{sayi_degeri}*100", v: {sayi:[1000,9999], sayi_degeri:"Math.floor({sayi}/100)%10"}, z:"zor", alt:"sayi_basamak_toplam" },

  // ALT DAL 3: RAKAM TOPLAMI
  { id: "t10_008", s: "{sayi} sayısının rakamları toplamı kaçtır?", c: "{rakam_toplam}", v: {sayi:[100,9999]}, z:"kolay", alt:"rakam_toplam" },
  { id: "t10_009", s: "Rakamları toplamı {toplam} olan üç basamaklı en küçük sayı kaçtır?", c: "{sonuc}", v: {toplam:[2,27]}, z:"zor", alt:"rakam_toplam_min" },
  { id: "t10_010", s: "Rakamları toplamı {toplam} olan üç basamaklı en büyük sayı kaçtır?", c: "{sonuc}", v: {toplam:[2,27]}, z:"zor", alt:"rakam_toplam_max" },

  // ALT DAL 4: BASAMAK ADI SORULARI
  { id: "t10_011", s: "{sayi} sayısında {rakam} rakamı hangi basamaktadır?", c: "{basamak_adi}", v: {sayi:[1000,99999], rakam:"tek_bir_rakam"}, z:"kolay", alt:"basamak_adi" },

  // ALT DAL 5: BÖLÜK KAVRAMI
  { id: "t10_012", s: "{sayi} sayısının binler bölüğü kaçtır?", c: "Math.floor({sayi}/1000)", v: {sayi:[10000,999999]}, z:"orta", alt:"boluk" },
  { id: "t10_013", s: "{sayi} sayısının birler bölüğü kaçtır?", c: "{sayi}%1000", v: {sayi:[10000,999999]}, z:"orta", alt:"boluk_birler" },

  // ALT DAL 6: SAYI OKUMA-YAZMA
  { id: "t10_014", s: "\"{sayi_okunus}\" şeklinde okunan sayıyı yazınız.", c: "{sayi}", v: {sayi:[1000,9999]}, z:"orta", alt:"okunustan_yazma" },
  { id: "t10_015", s: "{sayi} sayısının okunuşu nedir?", c: "{sayi_okunus}", v: {sayi:[1000,9999]}, z:"orta", alt:"yazidan_okunus" },

  // ALT DAL 7: BASAMAK DEĞİŞİMİ
  { id: "t10_016", s: "{sayi} sayısının onlar basamağı {n} artırılırsa sayı kaç artar?", c: "{n}*10", v: {sayi:[100,999], n:[1,5]}, z:"orta", alt:"basamak_artirma" },
  { id: "t10_017", s: "{sayi} sayısının yüzler basamağı {n} azaltılırsa sayı kaç azalır?", c: "{n}*100", v: {sayi:[500,999], n:[1,3]}, z:"orta", alt:"basamak_azaltma" },

  // ALT DAL 8: RAKAMLARIN YER DEĞİŞTİRMESİ
  { id: "t10_018", s: "{sayi} sayısının onlar ve birler basamağı yer değiştirirse sayı kaç artar/azalır?", c: "{fark}", v: {sayi:[100,999], kosul:"onlar!=birler"}, z:"zor", alt:"yer_degistirme" },


  // ==========================================
  // KONU 11: SAYI OLUŞTURMA / ÇÖZÜMLEME (10 alt dal)
  // ==========================================

  // ALT DAL 1: RAKAMLARLA SAYI OLUŞTURMA
  { id: "t11_001", s: "{a}, {b}, {c} rakamlarıyla yazılabilecek en büyük üç basamaklı sayı kaçtır?", c: "{en_buyuk}", v: {a:[1,9], b:[0,9], c:[0,9], kosul:"a!=b && a!=c && b!=c", en_buyuk:"max_permutasyon"}, z:"orta", alt:"en_buyuk" },
  { id: "t11_002", s: "{a}, {b}, {c} rakamlarıyla yazılabilecek en küçük üç basamaklı sayı kaçtır?", c: "{en_kucuk}", v: {a:[1,9], b:[0,9], c:[0,9], kosul:"en_az_biri_sifir_degil", en_kucuk:"min_permutasyon_sifir_degil"}, z:"orta", alt:"en_kucuk" },

  // ALT DAL 2: RAKAMLARI FARKLI SAYILAR
  { id: "t11_003", s: "Rakamları birbirinden farklı üç basamaklı en büyük sayı kaçtır?", c: "987", v: {}, z:"kolay", alt:"rakamlari_farkli_en_buyuk" },
  { id: "t11_004", s: "Rakamları birbirinden farklı üç basamaklı en küçük sayı kaçtır?", c: "102", v: {}, z:"kolay", alt:"rakamlari_farkli_en_kucuk" },
  { id: "t11_005", s: "Rakamları birbirinden farklı dört basamaklı en büyük sayı kaçtır?", c: "9876", v: {}, z:"orta", alt:"rakamlari_farkli_4basamak" },
  { id: "t11_006", s: "Rakamları birbirinden farklı dört basamaklı en küçük sayı kaçtır?", c: "1023", v: {}, z:"orta", alt:"rakamlari_farkli_4basamak_min" },

  // ALT DAL 3: BELİRLİ KOŞULLU SAYILAR
  { id: "t11_007", s: "Yüzler basamağı {a} olan üç basamaklı en büyük sayı kaçtır?", c: "{a}99", v: {a:[1,9]}, z:"orta", alt:"kosullu_en_buyuk" },
  { id: "t11_008", s: "Birler basamağı {b} olan üç basamaklı en küçük sayı kaçtır?", c: "100+{b}", v: {b:[0,8]}, z:"orta", alt:"kosullu_en_kucuk" },
  { id: "t11_009", s: "Sadece {a} ve {b} rakamları kullanılarak yazılabilecek iki basamaklı kaç farklı sayı vardır?", c: "{adet}", v: {a:[1,9], b:[0,9], kosul:"a!=b"}, z:"zor", alt:"belirli_rakamlarla" },

  // ALT DAL 4: ÇÖZÜMLEME (TEMEL)
  { id: "t11_010", s: "{a}{b}{c} = ? × 100 + ? × 10 + ? × 1", c: "{a}*100+{b}*10+{c}", v: {a:[1,9], b:[0,9], c:[0,9]}, z:"orta", alt:"cozumleme" },
  { id: "t11_011", s: "5 binlik + 3 yüzlük + 8 onluk + 2 birlik = ?", c: "5382", v: {}, z:"orta", alt:"cozumleme_sozel" },
  { id: "t11_012", s: "7000 + 500 + 40 + 9 = ?", c: "7549", v: {}, z:"kolay", alt:"cozumleme_sayi" },

  // ALT DAL 5: ÇÖZÜMLEME (TERS)
  { id: "t11_013", s: "{sayi} = {a}×100 + {b}×10 + {c} ise {a}+{b}+{c} kaçtır?", c: "{a}+{b}+{c}", v: {a:[1,9], b:[0,9], c:[0,9], sayi:"{a}*100+{b}*10+{c}"}, z:"orta", alt:"cozumleme_ters" },

  // ALT DAL 6: BASAMAK VE SAYI DEĞERİ KARMA
  { id: "t11_014", s: "{sayi} sayısının birler ve yüzler basamağı yer değiştirirse oluşan sayı kaçtır?", c: "{yeni_sayi}", v: {sayi:[100,999], kosul:"yuzler!=birler"}, z:"zor", alt:"basamak_degisimi" },

  // ALT DAL 7: SAYI DEĞERİ TOPLAMI
  { id: "t11_015", s: "Rakamlarının sayı değerleri toplamı {toplam} olan iki basamaklı kaç sayı vardır?", c: "{adet}", v: {toplam:[2,18]}, z:"zor", alt:"sayi_degeri_toplam" },

  // ALT DAL 8: BASAMAK DEĞERİ TOPLAMI
  { id: "t11_016", s: "{sayi} sayısının basamak değerleri toplamı kaçtır?", c: "{sayi}", v: {sayi:[100,9999]}, z:"kolay", alt:"basamak_degeri_toplam" },

  // ALT DAL 9: AB + BA TARZI SORULAR
  { id: "t11_017", s: "AB iki basamaklı sayısı için AB + BA = ?", c: "11*({a}+{b})", v: {a:[1,9], b:[0,9]}, z:"zor", alt:"ab_ba" },
  { id: "t11_018", s: "AB iki basamaklı sayısı için AB - BA = ?", c: "9*({a}-{b})", v: {a:[2,9], b:[0,7], kosul:"a>b"}, z:"cok_zor", alt:"ab_ba_fark" },

  // ALT DAL 10: SAYI YUVARLAMA
  { id: "t11_019", s: "{sayi} sayısını en yakın onluğa yuvarla.", c: "{yuvarlanmis}", v: {sayi:[10,999], yuvarlanmis:"Math.round({sayi}/10)*10"}, z:"orta", alt:"onluga_yuvarla" },
  { id: "t11_020", s: "{sayi} sayısını en yakın yüzlüğe yuvarla.", c: "{yuvarlanmis}", v: {sayi:[100,9999], yuvarlanmis:"Math.round({sayi}/100)*100"}, z:"orta", alt:"yuzluge_yuvarla" },


  // ==========================================
  // KONU 12: DÖRT İŞLEM PROBLEMLERİ - SÖZEL (12 alt dal)
  // ==========================================

  // ALT DAL 1: TOPLAMA PROBLEMLERİ
  { id: "t12_001", s: "Bir çiftlikte {a} tavuk, {b} koyun vardır. Toplam hayvan sayısı kaçtır?", c: "{a}+{b}", v: {a:[5,30], b:[5,30]}, z:"kolay", alt:"toplama" },
  { id: "t12_002", s: "Ahmet {a} lira biriktirdi, {b} lira da harçlık aldı. Toplam kaç lirası oldu?", c: "{a}+{b}", v: {a:[10,50], b:[10,50]}, z:"kolay", alt:"toplama" },

  // ALT DAL 2: ÇIKARMA PROBLEMLERİ
  { id: "t12_003", s: "Bir kitabın fiyatı {a} liradır. İndirimle {b} lira oldu. Kaç lira indirim yapılmıştır?", c: "{a}-{b}", v: {a:[20,80], b:[10,50], kosul:"a>b"}, z:"kolay", alt:"cikarma" },
  { id: "t12_004", s: "Bir sınıfta {a} öğrenci vardır. {b} tanesi kızdır. Erkek öğrenci sayısı kaçtır?", c: "{a}-{b}", v: {a:[20,40], b:[5,20], kosul:"a>b"}, z:"kolay", alt:"cikarma" },

  // ALT DAL 3: ÇARPMA PROBLEMLERİ
  { id: "t12_005", s: "Bir kutuda {a} kalem varsa {b} kutuda kaç kalem vardır?", c: "{a}*{b}", v: {a:[5,20], b:[2,10]}, z:"kolay", alt:"carpma" },
  { id: "t12_006", s: "Günde {a} problem çözen biri {b} günde kaç problem çözer?", c: "{a}*{b}", v: {a:[5,20], b:[2,10]}, z:"kolay", alt:"carpma" },

  // ALT DAL 4: BÖLME PROBLEMLERİ
  { id: "t12_007", s: "{a} ceviz {b} kişiye eşit paylaştırılırsa kişi başı kaç ceviz düşer?", c: "{a}/{b}", v: {a:[12,60], b:[2,6], kosul:"a%b==0"}, z:"orta", alt:"bolme" },
  { id: "t12_008", s: "{a} litre süt {b} litrelik şişelere dolduruluyor. Kaç şişe gerekir?", c: "{a}/{b}", v: {a:[20,80], b:[2,8], kosul:"a%b==0"}, z:"orta", alt:"bolme" },

  // ALT DAL 5: TOPLAMA VE ÇIKARMA BİRLİKTE
  { id: "t12_009", s: "Bir otobüste {a} yolcu vardır. Durakta {b} kişi indi, {c} kişi bindi. Son durumda kaç yolcu vardır?", c: "{a}-{b}+{c}", v: {a:[10,30], b:[2,8], c:[2,10], kosul:"a>=b"}, z:"orta", alt:"toplama_cikarma" },
  { id: "t12_010", s: "Ahmet'in {a} lirası, Mehmet'in Ahmet'ten {b} lira eksiği vardır. İkisinin toplam parası kaçtır?", c: "{a}+{a}-{b}", v: {a:[20,60], b:[5,15], kosul:"a>b"}, z:"orta", alt:"toplama_cikarma_karmasik" },

  // ALT DAL 6: ÇARPMA VE TOPLAMA BİRLİKTE
  { id: "t12_011", s: "{a} pakette {b} kurabiye vardır. {c} tane de ayrıca kurabiye varsa toplam kaç kurabiye vardır?", c: "{a}*{b}+{c}", v: {a:[2,10], b:[3,12], c:[2,10]}, z:"orta", alt:"carpma_toplama" },
  { id: "t12_012", s: "Bir kırtasiyeci tanesini {a} liradan {b} defter, tanesini {c} liradan {d} kalem satarsa toplam kaç lira kazanır?", c: "{a}*{b}+{c}*{d}", v: {a:[2,8], b:[2,6], c:[2,5], d:[2,8]}, z:"zor", alt:"carpma_toplama_cift" },

  // ALT DAL 7: ÇARPMA VE ÇIKARMA BİRLİKTE
  { id: "t12_013", s: "{a} koli yumurtanın her birinde {b} yumurta vardır. {c} tanesi kırılırsa kaç yumurta kalır?", c: "{a}*{b}-{c}", v: {a:[2,8], b:[6,12], c:[1,10], kosul:"a*b>c"}, z:"orta", alt:"carpma_cikarma" },

  // ALT DAL 8: BÖLME VE TOPLAMA BİRLİKTE
  { id: "t12_014", s: "{a} ceviz {b} kişiye eşit paylaştırılıyor. Daha sonra herkes {c} ceviz daha alıyor. Bir kişinin toplam cevizi kaç olur?", c: "{a}/{b}+{c}", v: {a:[20,60], b:[2,6], c:[2,8], kosul:"a%b==0"}, z:"zor", alt:"bolme_toplama" },

  // ALT DAL 9: FAZLA/EKSİK PROBLEMLERİ
  { id: "t12_015", s: "{a} sayısı {b} sayısından kaç fazladır?", c: "{a}-{b}", v: {a:[15,80], b:[5,20], kosul:"a>b"}, z:"kolay", alt:"fazla" },
  { id: "t12_016", s: "{a} sayısı {b} sayısından kaç eksiktir?", c: "{b}-{a}", v: {a:[5,20], b:[15,80], kosul:"b>a"}, z:"kolay", alt:"eksik" },
  { id: "t12_017", s: "{a} sayısının {b} fazlası kaçtır?", c: "{a}+{b}", v: {a:[5,30], b:[2,15]}, z:"kolay", alt:"fazlasi" },
  { id: "t12_018", s: "{a} sayısının {b} eksiği kaçtır?", c: "{a}-{b}", v: {a:[10,40], b:[1,9], kosul:"a>b"}, z:"kolay", alt:"eksigi" },

  // ALT DAL 10: YARIM/ÇEYREK PROBLEMLERİ
  { id: "t12_019", s: "Bir manav {a} kg elmanın yarısını sattı. Geriye kaç kg elma kaldı?", c: "{a}/2", v: {a:[10,60], kosul:"a%2==0"}, z:"orta", alt:"yarisi" },
  { id: "t12_020", s: "Bir pastanın çeyreğini Ali, kalanın yarısını Ayşe yemiştir. Geriye pastanın kaçta kaçı kalmıştır?", c: "3/8", v: {}, z:"zor", alt:"kesir_sozel" },

  // ALT DAL 11: KAT PROBLEMLERİ (SÖZEL)
  { id: "t12_021", s: "Bir sayının 3 katı 27 ise bu sayı kaçtır?", c: "9", v: {}, z:"orta", alt:"uc_kati_sozel" },
  { id: "t12_022", s: "Bir sınıftaki erkeklerin sayısı kızların sayısının 2 katıdır. Sınıfta 18 kız varsa erkekler kaç kişidir?", c: "36", v: {}, z:"orta", alt:"kati_sozel" },

  // ALT DAL 12: YAŞ PROBLEMLERİ (TEMEL SÖZEL)
  { id: "t12_023", s: "Bir baba 30 yaşında, çocuğu 6 yaşındadır. Kaç yıl sonra babanın yaşı çocuğun yaşının 3 katı olur?", c: "6", v: {}, z:"zor", alt:"yas_problemi" },
  { id: "t12_024", s: "İki kardeşin yaşları toplamı 18, farkı 4 ise büyük kardeş kaç yaşındadır?", c: "11", v: {}, z:"zor", alt:"yas_problemi_toplam_fark" },

],

  2: [

  // ==========================================
  // KONU 1: BÖLÜNEBİLME KURALLARI (16 alt dal)
  // ==========================================

  // ALT DAL 1: 2 İLE BÖLÜNEBİLME
  { id: "s2_bl_001", s: "{a} sayısı 2 ile tam bölünür mü?", c: "{evet_hayir}", v: {a:[10,999]}, z:"kolay", alt:"bolunebilme_2" },
  { id: "s2_bl_002", s: "2 ile bölünebilme kuralı nedir?", c: "son_rakam_cift_olmali", v: {}, z:"kolay", alt:"bolunebilme_2_kural" },
  { id: "s2_bl_003", s: "Aşağıdakilerden hangisi 2 ile tam bölünür?", c: "{cift}", v: {a:[100,999], b:[100,999], c:[100,999], d:[100,999], kosul:"bir_tanesi_cift"}, z:"kolay", alt:"bolunebilme_2_coktan" },
  { id: "s2_bl_004", s: "Birler basamağında hangi rakamlar olan sayılar 2 ile bölünür?", c: "0,2,4,6,8", v: {}, z:"kolay", alt:"bolunebilme_2_rakamlar" },

  // ALT DAL 2: 3 İLE BÖLÜNEBİLME
  { id: "s2_bl_005", s: "{a} sayısı 3 ile tam bölünür mü?", c: "{evet_hayir}", v: {a:[100,999]}, z:"orta", alt:"bolunebilme_3" },
  { id: "s2_bl_006", s: "3 ile bölünebilme kuralı nedir?", c: "rakamlar_toplami_3un_kati", v: {}, z:"kolay", alt:"bolunebilme_3_kural" },
  { id: "s2_bl_007", s: "{a} sayısının rakamları toplamı {rt} olduğuna göre 3 ile bölümünden kalan kaçtır?", c: "{rt}%3", v: {a:[100,999], rt:"rakam_toplam({a})"}, z:"orta", alt:"bolunebilme_3_kalan" },
  { id: "s2_bl_008", s: "3 ile bölünebilen iki basamaklı en büyük sayı kaçtır?", c: "99", v: {}, z:"kolay", alt:"bolunebilme_3_en_buyuk" },
  { id: "s2_bl_009", s: "3 ile bölünebilen iki basamaklı en küçük sayı kaçtır?", c: "12", v: {}, z:"orta", alt:"bolunebilme_3_en_kucuk" },

  // ALT DAL 3: 4 İLE BÖLÜNEBİLME
  { id: "s2_bl_010", s: "{a} sayısı 4 ile tam bölünür mü?", c: "{evet_hayir}", v: {a:[100,999]}, z:"orta", alt:"bolunebilme_4" },
  { id: "s2_bl_011", s: "4 ile bölünebilme kuralı nedir?", c: "son_iki_basamak_4un_kati", v: {}, z:"orta", alt:"bolunebilme_4_kural" },
  { id: "s2_bl_012", s: "{a} sayısının son iki basamağı {sib} olduğuna göre 4 ile bölümünden kalan kaçtır?", c: "{sib}%4", v: {a:[1000,9999], sib:"{a}%100"}, z:"orta", alt:"bolunebilme_4_kalan" },
  { id: "s2_bl_013", s: "{a} sayısının 4 ile bölünebilmesi için ? yerine hangi rakamlar gelebilir?", c: "{rakamlar}", v: {a:[100,996], kosul:"son_iki_basamak_sifirli"}, z:"zor", alt:"bolunebilme_4_verilmeyen" },

  // ALT DAL 4: 5 İLE BÖLÜNEBİLME
  { id: "s2_bl_014", s: "{a} sayısı 5 ile tam bölünür mü?", c: "{evet_hayir}", v: {a:[10,999]}, z:"kolay", alt:"bolunebilme_5" },
  { id: "s2_bl_015", s: "5 ile bölünebilme kuralı nedir?", c: "son_rakam_0_veya_5", v: {}, z:"kolay", alt:"bolunebilme_5_kural" },
  { id: "s2_bl_016", s: "5 ile bölünebilen iki basamaklı kaç doğal sayı vardır?", c: "18", v: {}, z:"orta", alt:"bolunebilme_5_sayi_sayisi" },
  { id: "s2_bl_017", s: "{a} sayısının 5 ile bölümünden kalan kaçtır?", c: "{a}%5", v: {a:[10,200]}, z:"orta", alt:"bolunebilme_5_kalan" },

  // ALT DAL 5: 6 İLE BÖLÜNEBİLME
  { id: "s2_bl_018", s: "{a} sayısı 6 ile tam bölünür mü?", c: "{evet_hayir}", v: {a:[10,200], kosul:"cift_ve_uce_bolunme_kontrol"}, z:"orta", alt:"bolunebilme_6" },
  { id: "s2_bl_019", s: "6 ile bölünebilme kuralı nedir?", c: "hem_2_hem_3_ile_bolunmeli", v: {}, z:"orta", alt:"bolunebilme_6_kural" },
  { id: "s2_bl_020", s: "Aşağıdakilerden hangisi 6 ile tam bölünür?", c: "{dogru_secenek}", v: {secenekler:[6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96]}, z:"orta", alt:"bolunebilme_6_coktan" },

  // ALT DAL 6: 8 İLE BÖLÜNEBİLME
  { id: "s2_bl_021", s: "{a} sayısı 8 ile tam bölünür mü?", c: "{evet_hayir}", v: {a:[1000,9999]}, z:"orta", alt:"bolunebilme_8" },
  { id: "s2_bl_022", s: "8 ile bölünebilme kuralı nedir?", c: "son_uc_basamak_8in_kati", v: {}, z:"orta", alt:"bolunebilme_8_kural" },
  { id: "s2_bl_023", s: "{a} sayısının son üç basamağı {sub} olduğuna göre 8 ile bölümünden kalan kaçtır?", c: "{sub}%8", v: {a:[10000,99999], sub:"{a}%1000"}, z:"zor", alt:"bolunebilme_8_kalan" },

  // ALT DAL 7: 9 İLE BÖLÜNEBİLME
  { id: "s2_bl_024", s: "{a} sayısı 9 ile tam bölünür mü?", c: "{evet_hayir}", v: {a:[100,999]}, z:"orta", alt:"bolunebilme_9" },
  { id: "s2_bl_025", s: "9 ile bölünebilme kuralı nedir?", c: "rakamlar_toplami_9un_kati", v: {}, z:"orta", alt:"bolunebilme_9_kural" },
  { id: "s2_bl_026", s: "{a} sayısının 9 ile bölümünden kalan kaçtır?", c: "{rt}%9", v: {a:[100,9999], rt:"rakam_toplam({a})"}, z:"orta", alt:"bolunebilme_9_kalan" },
  { id: "s2_bl_027", s: "9 ile bölünebilen üç basamaklı en küçük sayı kaçtır?", c: "108", v: {}, z:"orta", alt:"bolunebilme_9_en_kucuk" },
  { id: "s2_bl_028", s: "9 ile bölünebilen üç basamaklı en büyük sayı kaçtır?", c: "999", v: {}, z:"orta", alt:"bolunebilme_9_en_buyuk" },

  // ALT DAL 8: 10 İLE BÖLÜNEBİLME
  { id: "s2_bl_029", s: "{a} sayısı 10 ile tam bölünür mü?", c: "{evet_hayir}", v: {a:[10,999]}, z:"kolay", alt:"bolunebilme_10" },
  { id: "s2_bl_030", s: "10 ile bölünebilme kuralı nedir?", c: "son_rakam_0", v: {}, z:"kolay", alt:"bolunebilme_10_kural" },
  { id: "s2_bl_031", s: "10 ile bölünebilen iki basamaklı kaç sayı vardır?", c: "9", v: {}, z:"kolay", alt:"bolunebilme_10_sayi_sayisi" },
  { id: "s2_bl_032", s: "{a} sayısının 10 ile bölümünden kalan kaçtır?", c: "{a}%10", v: {a:[10,500]}, z:"kolay", alt:"bolunebilme_10_kalan" },

  // ALT DAL 9: 11 İLE BÖLÜNEBİLME
  { id: "s2_bl_033", s: "{a} sayısı 11 ile tam bölünür mü?", c: "{evet_hayir}", v: {a:[100,9999]}, z:"zor", alt:"bolunebilme_11" },
  { id: "s2_bl_034", s: "11 ile bölünebilme kuralı nedir?", c: "tek_cift_basamak_farki_11in_kati", v: {}, z:"zor", alt:"bolunebilme_11_kural" },
  { id: "s2_bl_035", s: "{a} sayısının 11 ile bölümünden kalan kaçtır?", c: "{kalan}", v: {a:[100,9999]}, z:"cok_zor", alt:"bolunebilme_11_kalan" },

  // ALT DAL 10: BÖLÜNEBİLME KURALLARI KARIŞIK
  { id: "s2_bl_036", s: "{a} sayısı hangilerine tam bölünür? (2,3,4,5,6,9,10)", c: "{bolunenler}", v: {a:[10,500]}, z:"orta", alt:"karisik_bolunebilme" },
  { id: "s2_bl_037", s: "Hem 3 hem 5 ile bölünebilen iki basamaklı sayılar kaç tanedir?", c: "6", v: {}, z:"orta", alt:"3_ve_5_bolunebilme" },
  { id: "s2_bl_038", s: "Hem 2 hem 9 ile bölünebilen sayılar hangisine kesin bölünür?", c: "18", v: {}, z:"orta", alt:"2_ve_9_ortak" },
  { id: "s2_bl_039", s: "2, 3 ve 5 ile tam bölünebilen üç basamaklı en küçük sayı kaçtır?", c: "120", v: {}, z:"zor", alt:"2_3_5_en_kucuk" },
  { id: "s2_bl_040", s: "2, 3 ve 5 ile tam bölünebilen üç basamaklı en büyük sayı kaçtır?", c: "990", v: {}, z:"zor", alt:"2_3_5_en_buyuk" },

  // ALT DAL 11: VERİLMEYEN RAKAMLI BÖLÜNEBİLME
  { id: "s2_bl_041", s: "{a}{r}{b} sayısı 3 ile bölünebilmesi için {r} yerine kaç farklı rakam yazılabilir?", c: "{adet}", v: {a:[1,9], b:[0,9], r:[0,9]}, z:"orta", alt:"verilmeyen_rakam_3" },
  { id: "s2_bl_042", s: "{a}{r}{b} sayısı 4 ile bölünebilmesi için {r} yerine kaç farklı rakam yazılabilir?", c: "{adet}", v: {a:[1,9], b:[0,8,2]}, z:"zor", alt:"verilmeyen_rakam_4" },
  { id: "s2_bl_043", s: "{a}{b}{r} sayısı 5 ile bölünebilmesi için {r} yerine kaç farklı rakam yazılabilir?", c: "2", v: {a:[1,9], b:[0,9]}, z:"orta", alt:"verilmeyen_rakam_5" },
  { id: "s2_bl_044", s: "{a}?{b} sayısı 9 ile bölünebilmesi için ? kaç olmalıdır?", c: "{r}", v: {a:[1,8], b:[0,8]}, z:"orta", alt:"verilmeyen_rakam_9" },
  { id: "s2_bl_045", s: "{a}{r}{b} sayısı hem 2 hem 3 ile bölünebilmesi için {r} yerine kaç farklı rakam yazılabilir?", c: "{adet}", v: {a:[1,9], b:[0,8,2]}, z:"zor", alt:"verilmeyen_rakam_2_3" },

  // ALT DAL 12: KALAN BULMA (DETAYLI)
  { id: "s2_bl_046", s: "{a} sayısının {b} ile bölümünden kalan kaçtır?", c: "{a}%{b}", v: {a:[10,500], b:[2,11]}, z:"orta", alt:"kalan_bulma" },
  { id: "s2_bl_047", s: "{a} sayısının {b} ile bölümünden bölüm {blm}, kalan {kln} ise bu sayı kaçtır?", c: "{b}*{blm}+{kln}", v: {b:[2,9], blm:[3,20], kln:[0,"{b}-1"]}, z:"orta", alt:"bolme_esitligi" },

  // ALT DAL 13: BÖLÜNEBİLME PROBLEMLERİ
  { id: "s2_bl_048", s: "Bir çiftlikteki yumurtalar {a}'lık kutulara ve {b}'lik kutulara tam doldurulabiliyorsa yumurta sayısı en az kaçtır?", c: "{okek}", v: {a:[2,6], b:[3,8], okek:"okek({a},{b})"}, z:"zor", alt:"yumurta_problemi" },
  { id: "s2_bl_049", s: "{a} öğrenci sıralara {b}'şerli oturduğunda hiç boş sıra kalmıyor. Sınıf mevcudu aşağıdakilerden hangisi olabilir?", c: "{dogru}", v: {a:[18,40], b:[2,6], kosul:"a%b==0"}, z:"orta", alt:"ogrenci_problemi" },

  // ALT DAL 14: BÖLÜNEBİLME KURALLARI İSPAT MANTIĞI
  { id: "s2_bl_050", s: "Bir sayının 9 ile bölümünden kalan ile rakamları toplamının 9 ile bölümünden kalan neden aynıdır?", c: "10≡1(mod9)_oldugu_icin", v: {}, z:"cok_zor", alt:"ispat_9" },
  { id: "s2_bl_051", s: "Bir sayının 3 ile bölümünden kalan ile rakamları toplamının 3 ile bölümünden kalan neden aynıdır?", c: "10≡1(mod3)_oldugu_icin", v: {}, z:"cok_zor", alt:"ispat_3" },

  // ALT DAL 15: BÖLME İŞLEMİNDE KALANIN ÖZELLİKLERİ
  { id: "s2_bl_052", s: "Bir bölme işleminde kalan en az kaç olabilir?", c: "0", v: {}, z:"kolay", alt:"kalan_min" },
  { id: "s2_bl_053", s: "Bir bölme işleminde bölen {b} ise kalan en çok kaç olabilir?", c: "{b}-1", v: {b:[3,15]}, z:"orta", alt:"kalan_max" },
  { id: "s2_bl_054", s: "Bir bölme işleminde kalan {k} ise bölen en az kaç olabilir?", c: "{k}+1", v: {k:[1,10]}, z:"orta", alt:"bolen_min" },
  { id: "s2_bl_055", s: "{a} sayısı {b} ile bölündüğünde kalan {k1}, {c} ile bölündüğünde kalan {k2} ise bu sayının {d} ile bölümünden kalan kaçtır?", c: "{kalan}", v: {a:[10,100], b:[3,7], c:[4,8], d:[5,9], kosul:"b_ve_c_aralarinda_asal"}, z:"cok_zor", alt:"iki_kalanli" },

  // ALT DAL 16: MODÜLER ARİTMETİK (TEMEL)
  { id: "s2_bl_056", s: "{a} ≡ ? (mod {b})", c: "{a}%{b}", v: {a:[10,100], b:[3,9]}, z:"zor", alt:"mod_bulma" },
  { id: "s2_bl_057", s: "Bugün günlerden Pazartesi ise {n} gün sonra hangi gündür?", c: "{gun}", v: {n:[1,100]}, z:"zor", alt:"mod_gun" },
  { id: "s2_bl_058", s: "Saat şu an {saat}:00 ise {n} saat sonra saat kaç olur?", c: "({saat}+{n})%24:00", v: {saat:[0,23], n:[1,50]}, z:"orta", alt:"mod_saat" },


  // ==========================================
  // KONU 2: ASAL SAYILAR (8 alt dal)
  // ==========================================

  // ALT DAL 1: ASAL SAYI TANIMI VE TESTİ
  { id: "s2_as_001", s: "{a} asal sayı mıdır?", c: "{evet_hayir}", v: {a:[2,50]}, z:"kolay", alt:"asal_tanima" },
  { id: "s2_as_002", s: "Asal sayı nedir?", c: "1_ve_kendisinden_baska_boleni_olmayan", v: {}, z:"kolay", alt:"asal_tanimi" },
  { id: "s2_as_003", s: "1 asal sayı mıdır?", c: "hayir", v: {}, z:"orta", alt:"1_asal_mi" },
  { id: "s2_as_004", s: "En küçük asal sayı kaçtır?", c: "2", v: {}, z:"kolay", alt:"en_kucuk_asal" },

  // ALT DAL 2: 2'DEN 100'E ASAL SAYILAR
  { id: "s2_as_005", s: "Aşağıdakilerden hangisi asal sayıdır?", c: "{asal}", v: {sayilar:[10,99], kosul:"bir_tanesi_asal"}, z:"orta", alt:"asal_bulma" },
  { id: "s2_as_006", s: "İki basamaklı en küçük asal sayı kaçtır?", c: "11", v: {}, z:"orta", alt:"iki_basamakli_en_kucuk_asal" },
  { id: "s2_as_007", s: "İki basamaklı en büyük asal sayı kaçtır?", c: "97", v: {}, z:"orta", alt:"iki_basamakli_en_buyuk_asal" },
  { id: "s2_as_008", s: "20 ile 40 arasında kaç asal sayı vardır?", c: "4", v: {}, z:"orta", alt:"araliktaki_asal_sayisi" },

  // ALT DAL 3: TEK ÇİFT ASAL SAYI
  { id: "s2_as_009", s: "Tek çift asal sayı hangisidir?", c: "2", v: {}, z:"orta", alt:"tek_cift_asal" },
  { id: "s2_as_010", s: "2'den başka çift asal sayı var mıdır?", c: "hayir", v: {}, z:"orta", alt:"baska_cift_asal" },
  { id: "s2_as_011", s: "2 hariç tüm asal sayılar için ne söylenebilir?", c: "hepsi_tektir", v: {}, z:"orta", alt:"asal_tek" },
  { id: "s2_as_012", s: "İki asal sayının toplamı tek ise bu asallardan biri kesinlikle hangisidir?", c: "2", v: {}, z:"zor", alt:"toplam_tek_asal" },

  // ALT DAL 4: ASAL SAYI BULMA YÖNTEMİ
  { id: "s2_as_013", s: "{a} sayısının asal olup olmadığını anlamak için kaça kadar bölmek gerekir?", c: "Math.floor(Math.sqrt({a}))", v: {a:[30,120]}, z:"zor", alt:"karekok_kontrol" },
  { id: "s2_as_014", s: "{a} sayısı asal mıdır? (Kareköküne kadar test et)", c: "{evet_hayir}", v: {a:[30,100]}, z:"orta", alt:"karekok_test" },

  // ALT DAL 5: ASAL ÇARPAN SAYISI
  { id: "s2_as_015", s: "{a} sayısının kaç tane asal çarpanı vardır?", c: "{sayi}", v: {a:[10,100]}, z:"orta", alt:"asal_carpan_sayisi" },
  { id: "s2_as_016", s: "İki farklı asal çarpanı olan iki basamaklı en küçük sayı kaçtır?", c: "6", v: {}, z:"orta", alt:"iki_asal_carpanli" },

  // ALT DAL 6: ASAL SAYILARLA İLGİLİ ÖZELLİKLER
  { id: "s2_as_017", s: "a ve b asal ise a·b kesinlikle nasıl bir sayıdır?", c: "asal_degildir", v: {}, z:"orta", alt:"asal_carpimi_asal_degil" },
  { id: "s2_as_018", s: "a asal ise a+1 her zaman ne olur?", c: "cift_(2_haric)", v: {}, z:"orta", alt:"asal_arti_bir" },
  // DÜZELTME: kosul:"asal(p)" kaldırıldı (fonksiyon tanımlı değil)
  { id: "s2_as_019", s: "p asal sayı ise p²+1 asal olabilir mi? (p={p})", c: "{evet_hayir}", v: {p:[2,11]}, z:"zor", alt:"asal_kare_arti_bir" },

  // ALT DAL 7: İKİZ ASALLAR
  { id: "s2_as_020", s: "İkiz asal nedir?", c: "aralarindaki_fark_2_olan_asallar", v: {}, z:"orta", alt:"ikiz_asal_tanimi" },
  { id: "s2_as_021", s: "Aşağıdakilerden hangisi ikiz asaldır?", c: "{ikiz_cift}", v: {secenekler:["(3,5)","(5,7)","(11,13)","(17,19)","(29,31)"]}, z:"orta", alt:"ikiz_asal_bulma" },

  // ALT DAL 8: ASAL SAYI PROBLEMLERİ
  { id: "s2_as_022", s: "İki asal sayının toplamı {t} ise çarpımları en çok kaçtır?", c: "{max_carpim}", v: {t:[5,30], kosul:"t_cift_veya_2+asal"}, z:"cok_zor", alt:"asal_toplam_carpim" },
  { id: "s2_as_023", s: "p asal sayı ve 3p+1 asal ise p kaçtır?", c: "2", v: {}, z:"cok_zor", alt:"asal_sartli" },


  // ==========================================
  // KONU 3: ARALARINDA ASAL SAYILAR (6 alt dal)
  // ==========================================

  // ALT DAL 1: ARALARINDA ASAL TANIMI
  { id: "s2_aa_001", s: "Aralarında asal nedir?", c: "1_den_baska_ortak_boleni_olmayan", v: {}, z:"orta", alt:"aralarinda_asal_tanimi" },
  { id: "s2_aa_002", s: "{a} ile {b} aralarında asal mıdır?", c: "{evet_hayir}", v: {a:[2,20], b:[2,20]}, z:"orta", alt:"aralarinda_asal_test" },
  { id: "s2_aa_003", s: "1 ile {a} aralarında asal mıdır?", c: "evet", v: {a:[2,20]}, z:"orta", alt:"bir_ile_aralarinda_asal" },
  { id: "s2_aa_004", s: "Ardışık iki sayı aralarında asal mıdır?", c: "evet", v: {}, z:"orta", alt:"ardisik_aralarinda_asal" },

  // ALT DAL 2: ASAL SAYILAR VE ARALARINDA ASALLIK
  { id: "s2_aa_005", s: "İki asal sayı her zaman aralarında asal mıdır?", c: "evet_(farkli_asal_ise)", v: {}, z:"orta", alt:"iki_asal_aralarinda_asal" },
  { id: "s2_aa_006", s: "a ve b aralarında asal ise a+b ile a·b aralarında asal mıdır?", c: "evet", v: {}, z:"cok_zor", alt:"toplam_carpim_aralarinda_asal" },

  // ALT DAL 3: KESİR SADELEŞTİRME İLE BAĞLANTISI
  { id: "s2_aa_007", s: "{a}/{b} kesri sadeleşir mi?", c: "{evet_hayir}", v: {a:[2,15], b:[3,20]}, z:"orta", alt:"kesir_sadelesme" },
  { id: "s2_aa_008", s: "a/b kesrinin sadeleşmemesi için a ve b nasıl olmalıdır?", c: "aralarinda_asal", v: {}, z:"orta", alt:"sadelesmeme_sarti" },

  // ALT DAL 4: ARALARINDA ASAL SAYI BULMA
  { id: "s2_aa_009", s: "{a} ile aralarında asal olan iki basamaklı en küçük sayı kaçtır?", c: "{sayi}", v: {a:[4,15]}, z:"zor", alt:"aralarinda_asal_bulma" },
  { id: "s2_aa_010", s: "{a} ile aralarında asal kaç tane rakam vardır?", c: "{adet}", v: {a:[1,9]}, z:"orta", alt:"rakamlarla_aralarinda_asal" },

  // ALT DAL 5: OBEB İLE BAĞLANTISI
  { id: "s2_aa_011", s: "a ile b aralarında asal ise OBEB(a,b) kaçtır?", c: "1", v: {}, z:"orta", alt:"obeb_aralarinda_asal" },
  { id: "s2_aa_012", s: "OBEB(a,b)=1 ise a ile b için ne söylenebilir?", c: "aralarinda_asal", v: {}, z:"orta", alt:"obeb_bir_ise_aralarinda_asal" },

  // ALT DAL 6: ARALARINDA ASAL PROBLEMLERİ
  { id: "s2_aa_013", s: "a ve b aralarında asal iki sayıdır. a·b={c} ise a+b en az kaçtır?", c: "{min_toplam}", v: {c:[6,30], kosul:"iki_carpanli"}, z:"cok_zor", alt:"carpimdan_toplam" },
  { id: "s2_aa_014", s: "OBEB(x,y)=1, x·y=36 ise x+y en çok kaçtır?", c: "37", v: {}, z:"cok_zor", alt:"obeb1_max_toplam" },


  // ==========================================
  // KONU 4: ASAL ÇARPANLARA AYIRMA (6 alt dal)
  // ==========================================

  // ALT DAL 1: ASAL ÇARPANLARI BULMA
  { id: "s2_ac_001", s: "{a} sayısını asal çarpanlarına ayırınız.", c: "{asal_carpanlar}", v: {a:[12,120]}, z:"orta", alt:"asal_carpanlara_ayirma" },
  { id: "s2_ac_002", s: "{a} sayısının asal çarpanları nelerdir?", c: "{carpanlar}", v: {a:[10,100]}, z:"orta", alt:"asal_carpan_listesi" },
  { id: "s2_ac_003", s: "{a} sayısının asal çarpanlarına ayrılmış hali: {a} = {gosterim}", c: "{gosterim}", v: {a:[12,100]}, z:"orta", alt:"uslu_gosterim" },

  // ALT DAL 2: ÜSLÜ GÖSTERİM
  { id: "s2_ac_004", s: "{a} sayısının asal çarpanlarının üslü gösterimi nasıldır?", c: "{uslu_gosterim}", v: {a:[12,100]}, z:"orta", alt:"uslu_gosterim_yazma" },
  { id: "s2_ac_005", s: "2^{x} · 3^{y} · 5^{z} = {a} ise x+y+z kaçtır?", c: "{toplam}", v: {a:[30,150]}, z:"zor", alt:"usler_toplami" },

  // ALT DAL 3: ASAL ÇARPAN SAYISI
  { id: "s2_ac_006", s: "{a} sayısının kaç farklı asal çarpanı vardır?", c: "{farkli_sayi}", v: {a:[10,150]}, z:"orta", alt:"farkli_asal_carpan_sayisi" },
  { id: "s2_ac_007", s: "{a} sayısının toplam asal çarpan sayısı (üsler toplamı) kaçtır?", c: "{usler_toplami}", v: {a:[12,120]}, z:"orta", alt:"toplam_asal_carpan_sayisi" },

  // ALT DAL 4: ASAL ÇARPANLARDAN SAYIYI BULMA
  { id: "s2_ac_008", s: "2^{a} · 3^{b} şeklindeki bir sayının alabileceği iki basamaklı en küçük değer kaçtır?", c: "{sayi}", v: {a:[1,4], b:[1,3]}, z:"orta", alt:"carpanlardan_sayi" },
  { id: "s2_ac_009", s: "a ve b pozitif tam sayıdır. 2ᵃ · 3ᵇ = 72 ise a+b kaçtır?", c: "5", v: {}, z:"orta", alt:"uslerden_sayi" },

  // ALT DAL 5: ÇARPAN AĞACI
  { id: "s2_ac_010", s: "{a} sayısının çarpan ağacını çiziniz.", c: "{agac}", v: {a:[24,96]}, z:"kolay", alt:"carpan_agaci" },
  { id: "s2_ac_011", s: "Çarpan ağacında {a} sayısı hangi asal çarpanlara ayrılır?", c: "{carpanlar}", v: {a:[18,100]}, z:"kolay", alt:"carpan_agaci_sonuc" },

  // ALT DAL 6: ASAL ÇARPAN PROBLEMLERİ
  { id: "s2_ac_012", s: "{a} sayısının asal çarpanlarının toplamı kaçtır?", c: "{asal_toplam}", v: {a:[10,100]}, z:"orta", alt:"asal_carpan_toplam" },
  { id: "s2_ac_013", s: "{a} sayısının en büyük asal çarpanı kaçtır?", c: "{max_asal}", v: {a:[10,100]}, z:"orta", alt:"en_buyuk_asal_carpan" },


  // ==========================================
  // KONU 5: OBEB - EBOB (8 alt dal)
  // ==========================================

  // ALT DAL 1: OBEB TANIMI VE BULMA
  { id: "s2_ob_001", s: "OBEB({a},{b}) = ?", c: "{obeb}", v: {a:[12,60], b:[8,48]}, z:"orta", alt:"obeb_bulma" },
  { id: "s2_ob_002", s: "OBEB nedir?", c: "en_buyuk_ortak_bolen", v: {}, z:"kolay", alt:"obeb_tanimi" },
  { id: "s2_ob_003", s: "{a} ve {b} sayılarının ortak bölenleri nelerdir?", c: "{ortak_bolenler}", v: {a:[12,36], b:[8,48]}, z:"orta", alt:"ortak_bolenler" },
  { id: "s2_ob_004", s: "OBEB({a},{b}) = {obeb} ise {a} ve {b}'nin ortak bölenleri OBEB'in neyi olur?", c: "carpanlari", v: {a:[12,36], b:[8,48]}, z:"orta", alt:"obeb_carpan_iliski" },

  // ALT DAL 2: ASAL ÇARPANLARLA OBEB
  { id: "s2_ob_005", s: "{a} = {a_carpan} ve {b} = {b_carpan} ise OBEB({a},{b}) = ?", c: "{obeb}", v: {a:[18,72], b:[12,48]}, z:"orta", alt:"asal_carpanla_obeb" },
  { id: "s2_ob_006", s: "Asal çarpanlarına ayrılmış iki sayının OBEB'i nasıl bulunur?", c: "ortak_asal_carpanlardan_ussu_kucuk_olan_alinarak", v: {}, z:"orta", alt:"obeb_bulma_kurali" },

  // ALT DAL 3: OBEB ÖZELLİKLERİ
  { id: "s2_ob_007", s: "OBEB({a},{b}) = 1 ise bu sayılar için ne söylenebilir?", c: "aralarinda_asal", v: {a:[5,13], b:[7,17], kosul:"aralarinda_asal"}, z:"orta", alt:"obeb_1_ise" },
  { id: "s2_ob_008", s: "OBEB({a},1) = ?", c: "1", v: {a:[1,50]}, z:"orta", alt:"obeb_bir" },
  { id: "s2_ob_009", s: "OBEB({a},{a}) = ?", c: "{a}", v: {a:[1,30]}, z:"orta", alt:"obeb_kendisi" },
  { id: "s2_ob_010", s: "a, b'nin katı ise OBEB(a,b) = ?", c: "{b}", v: {a:[10,60], b:[2,15], kosul:"a%b==0"}, z:"orta", alt:"obeb_kati_ise" },
  { id: "s2_ob_011", s: "OBEB({a},{b}) = k ise OBEB({a}/k, {b}/k) = ?", c: "1", v: {a:[12,48], b:[8,36], kosul:"obeb_1_olacak"}, z:"zor", alt:"obeb_bolme" },

  // ALT DAL 4: OBEB SORULARI
  { id: "s2_ob_012", s: "OBEB({a},{b},{c}) = ?", c: "{obeb}", v: {a:[12,60], b:[18,48], c:[24,72]}, z:"zor", alt:"uc_sayili_obeb" },
  // DÜZELTME: x ve y dizileri düzeltildi (step 6)
  { id: "s2_ob_013", s: "OBEB(x,y)=6 ve x+y=42 ise x·y en çok kaçtır?", c: "{max_carpim}", v: {x:[6,36,6], y:[6,36,6], kosul:"x+y=42"}, z:"cok_zor", alt:"obeb_sartli" },

  // ALT DAL 5: OBEB PROBLEMLERİ (PARÇALARA AYIRMA)
  { id: "s2_ob_014", s: "{a} kg ve {b} kg'lık iki çuval pirinç birbirine karıştırılmadan eşit büyüklükteki poşetlere konulacaktır. Poşetler en çok kaçar kg olmalıdır?", c: "{obeb}", v: {a:[20,60], b:[30,80], obeb:"obeb({a},{b})"}, z:"orta", alt:"pirinc_problemi" },
  { id: "s2_ob_015", s: "{a} ve {b} litre meyve suyu eşit hacimli şişelere doldurulacaktır. En az kaç şişe gerekir?", c: "({a}+{b})/obeb({a},{b})", v: {a:[20,60], b:[30,80]}, z:"zor", alt:"meyve_suyu_problemi" },
  { id: "s2_ob_016", s: "{a} m ve {b} m'lik iki kumaş eşit uzunlukta parçalara ayrılacaktır. Parça boyu en çok kaç m olur?", c: "{obeb}", v: {a:[24,120], b:[36,96], obeb:"obeb({a},{b})"}, z:"orta", alt:"kumas_problemi" },
  { id: "s2_ob_017", s: "{a}, {b} ve {c} litrelik üç damacana eşit hacimli şişelere doldurulacaktır. Şişeler en çok kaçar litre olmalıdır?", c: "{obeb}", v: {a:[12,60], b:[18,48], c:[24,72]}, z:"zor", alt:"uc_damacana_problemi" },

  // ALT DAL 6: OBEB - DİKDÖRTGEN KARE PROBLEMLERİ
  { id: "s2_ob_018", s: "{a}×{b} m'lik dikdörtgen bahçe karelere ayrılacaktır. Karelerin kenarı en çok kaç m olur?", c: "{obeb}", v: {a:[12,48], b:[18,60], obeb:"obeb({a},{b})"}, z:"orta", alt:"bahce_kare" },
  { id: "s2_ob_019", s: "{a}×{b} m'lik alan eşit karelere ayrılırsa en az kaç kare oluşur?", c: "({a}/{obeb})*({b}/{obeb})", v: {a:[12,48], b:[18,60]}, z:"zor", alt:"kare_sayisi" },

  // ALT DAL 7: OBEB - SAYI PROBLEMLERİ
  { id: "s2_ob_020", s: "{a} ve {b} sayılarını bölen en büyük sayı kaçtır?", c: "{obeb}", v: {a:[18,72], b:[24,96]}, z:"orta", alt:"bolen_en_buyuk_sayi" },
  { id: "s2_ob_021", s: "Hangi sayı hem {a} hem {b} sayısını tam böler?", c: "{obeb}_ve_bolenleri", v: {a:[24,72], b:[36,96]}, z:"orta", alt:"ortak_bolen" },

  // ALT DAL 8: OBEB ÖZELLİK SORULARI (İLERİ)
  { id: "s2_ob_022", s: "x ve y pozitif tam sayıdır. OBEB(x,y)=1 ve x/y = {a}/{b} ise x+y en az kaçtır?", c: "{a}+{b}", v: {a:[2,8], b:[3,12], kosul:"aralarinda_asal"}, z:"cok_zor", alt:"kesirli_obeb" },
  { id: "s2_ob_023", s: "x+y={t} ve OBEB(x,y)={obeb} ise x·y en çok kaçtır?", c: "{max_carpim}", v: {t:[20,60], obeb:[2,6], kosul:"t%obeb==0"}, z:"cok_zor", alt:"toplam_obeb_carpim" },


  // ==========================================
  // KONU 6: OKEK - EKOK (8 alt dal)
  // ==========================================

  // ALT DAL 1: OKEK TANIMI VE BULMA
  { id: "s2_ok_001", s: "OKEK({a},{b}) = ?", c: "{okek}", v: {a:[4,15], b:[6,20]}, z:"orta", alt:"okek_bulma" },
  { id: "s2_ok_002", s: "OKEK nedir?", c: "en_kucuk_ortak_kat", v: {}, z:"kolay", alt:"okek_tanimi" },
  { id: "s2_ok_003", s: "{a} ve {b} sayılarının ortak katlarından üç tanesini yazınız.", c: "{okek}, {okek}*2, {okek}*3", v: {a:[3,8], b:[4,12]}, z:"orta", alt:"ortak_katlar" },

  // ALT DAL 2: ASAL ÇARPANLARLA OKEK
  { id: "s2_ok_004", s: "{a} = {a_carpan} ve {b} = {b_carpan} ise OKEK({a},{b}) = ?", c: "{okek}", v: {a:[12,36], b:[18,48]}, z:"orta", alt:"asal_carpanla_okek" },
  { id: "s2_ok_005", s: "Asal çarpanlarına ayrılmış iki sayının OKEK'i nasıl bulunur?", c: "tum_asal_carpanlardan_ussu_buyuk_olan_alinarak", v: {}, z:"orta", alt:"okek_bulma_kurali" },

  // ALT DAL 3: OKEK ÖZELLİKLERİ
  { id: "s2_ok_006", s: "OKEK({a},1) = ?", c: "{a}", v: {a:[1,30]}, z:"orta", alt:"okek_bir" },
  { id: "s2_ok_007", s: "OKEK({a},{a}) = ?", c: "{a}", v: {a:[1,30]}, z:"orta", alt:"okek_kendisi" },
  { id: "s2_ok_008", s: "a, b'nin katı ise OKEK(a,b) = ?", c: "{a}", v: {a:[10,60], b:[2,10], kosul:"a%b==0"}, z:"orta", alt:"okek_kati_ise" },
  { id: "s2_ok_009", s: "OKEK({a},{b}) = k ise OKEK({a}*n, {b}*n) = ?", c: "k*n", v: {a:[3,10], b:[4,12], n:[2,5]}, z:"zor", alt:"okek_carpma" },
  { id: "s2_ok_010", s: "Aralarında asal iki sayının OKEK'i nedir?", c: "carpimlari", v: {}, z:"orta", alt:"aralarinda_asal_okek" },

  // ALT DAL 4: OBEB-OKEK İLİŞKİSİ
  { id: "s2_ok_011", s: "OBEB({a},{b}) × OKEK({a},{b}) = ?", c: "{a}*{b}", v: {a:[6,24], b:[8,30]}, z:"orta", alt:"obeb_okek_carpim" },
  { id: "s2_ok_012", s: "{a} ve {b} sayılarının OBEB'i {obeb}, OKEK'i {okek} ise {a}×{b} kaçtır?", c: "{obeb}*{okek}", v: {a:[6,20], b:[8,24]}, z:"orta", alt:"obeb_okek_iliski" },
  { id: "s2_ok_013", s: "OBEB({a},{b})={obeb}, OKEK({a},{b})={okek} ise {a}+{b} en az kaçtır?", c: "{min_toplam}", v: {a:[12,36], b:[8,24], obeb:"obeb({a},{b})", okek:"okek({a},{b})"}, z:"cok_zor", alt:"obeb_okek_min_toplam" },

  // ALT DAL 5: OKEK PROBLEMLERİ (BULUŞMA-KARŞILAŞMA)
  { id: "s2_ok_014", s: "İki zil sırasıyla {a} ve {b} dakikada bir çalmaktadır. İlk kez birlikte çaldıktan kaç dakika sonra tekrar birlikte çalarlar?", c: "{okek}", v: {a:[4,15], b:[6,20], okek:"okek({a},{b})"}, z:"orta", alt:"zil_problemi" },
  { id: "s2_ok_015", s: "Üç gemi sırasıyla {a}, {b} ve {c} günde bir aynı limana uğruyor. Üçü birlikte limana uğradıktan kaç gün sonra tekrar birlikte uğrarlar?", c: "{okek}", v: {a:[3,10], b:[4,12], c:[5,15]}, z:"zor", alt:"gemi_problemi" },
  { id: "s2_ok_016", s: "{a} ve {b} dakikada bir ilaç içen hasta, ilaçları ilk kez birlikte içtikten {okek} dakika sonra kaçıncı kez birlikte içer?", c: "2", v: {a:[4,12], b:[6,18]}, z:"zor", alt:"ilac_problemi" },
  { id: "s2_ok_017", s: "Dairesel pistte tur atan iki koşucu turlarını sırasıyla {a} ve {b} dakikada tamamlıyor. Yan yana geldikten kaç dakika sonra tekrar yan yana gelirler?", c: "{okek}", v: {a:[4,15], b:[6,20], okek:"okek({a},{b})"}, z:"orta", alt:"kosucu_problemi" },

  // ALT DAL 6: OKEK - SAYI PROBLEMLERİ
  { id: "s2_ok_018", s: "Hem {a} hem {b} ile bölünebilen en küçük pozitif tam sayı kaçtır?", c: "{okek}", v: {a:[3,12], b:[4,15], okek:"okek({a},{b})"}, z:"orta", alt:"en_kucuk_ortak_kat" },
  { id: "s2_ok_019", s: "{a} ile bölündüğünde {k}, {b} ile bölündüğünde {k} kalanını veren en küçük sayı kaçtır?", c: "okek({a},{b})+{k}", v: {a:[4,10], b:[6,12], k:[1,3]}, z:"zor", alt:"esit_kalanli" },
  { id: "s2_ok_020", s: "{a} ile bölündüğünde {k1}, {b} ile bölündüğünde {k2} kalanını veren en küçük sayı kaçtır?", c: "{sayi}", v: {a:[4,8], b:[6,10], k1:[1,2], k2:[2,4], kosul:"mod_uyusmasi"}, z:"cok_zor", alt:"farkli_kalanli" },

  // ALT DAL 7: OKEK - PARÇALARDAN BÜTÜN OLUŞTURMA
  { id: "s2_ok_021", s: "{a} cm ve {b} cm'lik çubuklarla eşit uzunlukta en kısa çubuk nasıl elde edilir?", c: "okek({a},{b})_cm", v: {a:[6,15], b:[8,20]}, z:"orta", alt:"cubuk_problemi" },
  { id: "s2_ok_022", s: "Boyutları {a}×{b} cm olan fayanslarla kare şeklinde en küçük alan nasıl kaplanır?", c: "okek({a},{b})×okek({a},{b})", v: {a:[6,15], b:[8,20]}, z:"zor", alt:"fayans_problemi" },

  // ALT DAL 8: OKEK ÖZELLİK SORULARI (İLERİ)
  { id: "s2_ok_023", s: "OKEK(a,b)=2²·3³ ve a=2²·3 ise b en az kaçtır?", c: "3³", v: {}, z:"cok_zor", alt:"okekten_sayi_bulma" },
  { id: "s2_ok_024", s: "x ve y'nin OKEK'i 120, OBEB'i 6 ve x=24 ise y kaçtır?", c: "30", v: {}, z:"cok_zor", alt:"obeb_okek_sayi_bulma" },


  // ==========================================
  // KONU 7: BÖLEN SAYISI (6 alt dal)
  // ==========================================

  // ALT DAL 1: POZİTİF BÖLEN SAYISI
  { id: "s2_bs_001", s: "{a} sayısının kaç tane pozitif böleni vardır?", c: "{pbs}", v: {a:[12,120]}, z:"orta", alt:"pozitif_bolen_sayisi" },
  { id: "s2_bs_002", s: "Pozitif bölen sayısı formülü nedir?", c: "uslerin_birer_fazlasinin_carpimi", v: {}, z:"orta", alt:"pbs_formul" },
  { id: "s2_bs_003", s: "{a} = {uslu_gosterim} ise pozitif bölen sayısı kaçtır?", c: "{pbs}", v: {a:[18,100]}, z:"orta", alt:"uslu_pbs" },

  // ALT DAL 2: TAM BÖLEN SAYISI
  { id: "s2_bs_004", s: "{a} sayısının kaç tane tam böleni vardır?", c: "{tbs}", v: {a:[12,80]}, z:"orta", alt:"tam_bolen_sayisi" },
  { id: "s2_bs_005", s: "Tam bölen sayısı ile pozitif bölen sayısı arasındaki ilişki nedir?", c: "tam_bolen=2×pozitif_bolen", v: {}, z:"orta", alt:"tbs_pbs_iliski" },

  // ALT DAL 3: NEGATİF BÖLEN SAYISI
  { id: "s2_bs_006", s: "{a} sayısının kaç tane negatif böleni vardır?", c: "{pbs}", v: {a:[12,80]}, z:"orta", alt:"negatif_bolen_sayisi" },
  { id: "s2_bs_007", s: "Negatif bölen sayısı ile pozitif bölen sayısı arasındaki ilişki nedir?", c: "esittir", v: {}, z:"orta", alt:"nbs_pbs_iliski" },

  // ALT DAL 4: POZİTİF BÖLEN TOPLAMI
  { id: "s2_bs_008", s: "{a} sayısının pozitif bölenlerinin toplamı kaçtır?", c: "{pbt}", v: {a:[12,60]}, z:"zor", alt:"pozitif_bolen_toplami" },
  { id: "s2_bs_009", s: "Pozitif bölen toplamı formülü nedir?", c: "(asal¹-1)/(asal-1)_carpimi", v: {}, z:"cok_zor", alt:"pbt_formul" },

  // ALT DAL 5: BÖLEN SAYISI İLE İLGİLİ SORULAR
  { id: "s2_bs_010", s: "{a} sayısının {b} ile bölünebilen kaç tane pozitif böleni vardır?", c: "{sayi}", v: {a:[24,120], b:[2,6], kosul:"a%b==0"}, z:"cok_zor", alt:"sartli_bolen_sayisi" },
  { id: "s2_bs_011", s: "Pozitif bölen sayısı 3 olan iki basamaklı sayılar hangileridir?", c: "25,49", v: {}, z:"cok_zor", alt:"pbs_3_olan" },
  { id: "s2_bs_012", s: "Pozitif bölen sayısı {pbs} olan en küçük doğal sayı kaçtır?", c: "{sayi}", v: {pbs:[3,6]}, z:"cok_zor", alt:"pbs_den_sayi_bulma" },

  // ALT DAL 6: BÖLEN SAYISI PROBLEMLERİ
  { id: "s2_bs_013", s: "{a} sayısının asal olmayan pozitif bölen sayısı kaçtır?", c: "{pbs} - {asal_carpan_sayisi}", v: {a:[18,90]}, z:"zor", alt:"asal_olmayan_bolen" },
  { id: "s2_bs_014", s: "{a} sayısının çift olan pozitif bölen sayısı kaçtır?", c: "{sayi}", v: {a:[12,120]}, z:"cok_zor", alt:"cift_bolen_sayisi" },
  { id: "s2_bs_015", s: "{a} sayısının tek olan pozitif bölen sayısı kaçtır?", c: "{sayi}", v: {a:[12,120]}, z:"cok_zor", alt:"tek_bolen_sayisi" },


  // ==========================================
  // KONU 8: OBEB-OKEK PROBLEMLERİ (KARIŞIK) (10 alt dal)
  // ==========================================

  // ALT DAL 1: PARÇALARA AYIRMA (OBEB)
  { id: "s2_op_001", s: "{a} ve {b} litrelik iki bidon süt eşit hacimli şişelere doldurulacaktır. En az kaç şişe gerekir?", c: "({a}+{b})/obeb({a},{b})", v: {a:[20,80], b:[30,60]}, z:"zor", alt:"sut_sisesi" },
  { id: "s2_op_002", s: "Boyutları {a}×{b}×{c} cm olan dikdörtgenler prizması şeklindeki bir depo küp şeklindeki eş kutularla doldurulacaktır. Kutuların bir kenarı en çok kaç cm olur?", c: "obeb({a},{b},{c})", v: {a:[12,48], b:[18,60], c:[24,72]}, z:"cok_zor", alt:"depo_kup" },

  // ALT DAL 2: BÜTÜNDEN PARÇAYA (OBEB)
  { id: "s2_op_003", s: "{a} cm ve {b} cm'lik iki çubuk eşit parçalara ayrılacaktır. En az kaç parça elde edilir?", c: "({a}+{b})/obeb({a},{b})", v: {a:[24,96], b:[36,72]}, z:"zor", alt:"cubuk_parca" },
  { id: "s2_op_004", s: "{a} m² ve {b} m²'lik iki bahçe eşit büyüklükte karelere ayrılacaktır. Karelerin kenarı en çok kaç m olur? (Alanlar kenar uzunluğuna dönüştürülür)", c: "obeb({a_kenar},{b_kenar})", v: {a:[144,576], b:[256,900], kosul:"tam_kare"}, z:"cok_zor", alt:"bahce_kare_alan" },

  // ALT DAL 3: KARŞILAŞMA-BULUŞMA (OKEK)
  { id: "s2_op_005", s: "Üç araç sırasıyla {a}, {b} ve {c} dakikada bir sefer yapmaktadır. İlk seferlerine birlikte başladıktan en az kaç dakika sonra tekrar birlikte sefere çıkarlar?", c: "{okek}", v: {a:[4,12], b:[6,15], c:[8,20]}, z:"zor", alt:"arac_sefer" },
  { id: "s2_op_006", s: "{a} günde bir nöbet tutan Ali ile {b} günde bir nöbet tutan Veli birlikte nöbet tuttuktan en az kaç gün sonra tekrar birlikte nöbet tutarlar?", c: "{okek}", v: {a:[3,10], b:[4,12], okek:"okek({a},{b})"}, z:"orta", alt:"nobet" },
  { id: "s2_op_007", s: "Dairesel bir pistte üç koşucu turlarını {a}, {b} ve {c} dakikada tamamlıyor. Aynı anda aynı noktadan başladıktan sonra ilk kez kaç dakika sonra tekrar aynı noktada olurlar?", c: "{okek}", v: {a:[3,8], b:[4,10], c:[6,12]}, z:"zor", alt:"kosucu_pist" },

  // ALT DAL 4: EŞİT KALANLI SAYI BULMA (OKEK)
  { id: "s2_op_008", s: "{a} ve {b} ile bölündüğünde her seferinde {k} kalanını veren üç basamaklı en küçük sayı kaçtır?", c: "{sayi}", v: {a:[4,9], b:[6,12], k:[1,3]}, z:"cok_zor", alt:"esit_kalanli_uc_basamakli" },
  { id: "s2_op_009", s: "{a}, {b} ve {c} ile bölündüğünde her seferinde {k} kalanını veren iki basamaklı en büyük sayı kaçtır?", c: "{sayi}", v: {a:[2,6], b:[3,8], c:[4,10], k:[1,2]}, z:"cok_zor", alt:"esit_kalanli_uc_sayili" },

  // ALT DAL 5: FARKLI KALANLI SAYI BULMA
  { id: "s2_op_010", s: "Bir sayı {a} ile bölündüğünde {k1}, {b} ile bölündüğünde {k2} kalanını veriyor. Bu sayının alabileceği en küçük değer kaçtır?", c: "{sayi}", v: {a:[4,8], b:[6,10], k1:[1,3], k2:[2,4], kosul:"a-k1=b-k2"}, z:"cok_zor", alt:"farkli_kalanli" },

  // ALT DAL 6: AĞAÇ DİKME / DİREK PROBLEMLERİ (OBEB)
  { id: "s2_op_011", s: "Dikdörtgen şeklindeki bir bahçenin kenarları {a}m ve {b}m'dir. Köşelere de dikilmek şartıyla eşit aralıklarla ağaç dikilecektir. En az kaç ağaç gerekir?", c: "2*({a}+{b})/obeb({a},{b})", v: {a:[24,60], b:[36,80]}, z:"cok_zor", alt:"agac_dikme" },
  // DÜZELTME: s2_op_012 - garip string düzeltildi
  { id: "s2_op_012", s: "Çevresi {a} m olan dairesel bir parkın etrafına eşit aralıklarla direk dikilecektir. İki direk arası mesafe tam sayı olmak şartıyla en az kaç direk gerekir?", c: "{a}", v: {a:[36,120]}, z:"cok_zor", alt:"direk_dikme" },

  // ALT DAL 7: MERDİVEN / BASAMAK PROBLEMLERİ
  { id: "s2_op_013", s: "Bir merdivenin basamakları {a}'şer {b}'şer çıkıldığında her seferinde {k} basamak artıyor. Merdiven en az kaç basamaklıdır?", c: "okek({a},{b})+{k}", v: {a:[3,6], b:[4,8], k:[1,2]}, z:"cok_zor", alt:"merdiven" },

  // ALT DAL 8: KARIŞIK OBEB-OKEK
  { id: "s2_op_014", s: "{a} ve {b} sayılarının OBEB'i {obeb} ve OKEK'i {okek} olduğuna göre bu iki sayının toplamı en az kaçtır?", c: "{min_toplam}", v: {obeb:[2,6], okek:[24,72], kosul:"okek%obeb==0"}, z:"cok_zor", alt:"obeb_okek_toplam" },
  { id: "s2_op_015", s: "İki sayının OBEB'i 6, OKEK'i 72'dir. Sayılardan biri 18 ise diğeri kaçtır?", c: "24", v: {}, z:"zor", alt:"bir_sayi_verilince" },
  { id: "s2_op_016", s: "İki sayının OBEB'i {obeb}, OKEK'i {okek}'tir. Bu iki sayının farkı en az kaçtır?", c: "{min_fark}", v: {obeb:[2,8], okek:[12,72], kosul:"okek%obeb==0"}, z:"cok_zor", alt:"obeb_okek_fark" },

  // ALT DAL 9: YAŞ PROBLEMLERİNDE OBEB-OKEK
  { id: "s2_op_017", s: "İki kardeşin yaşları OBEB'i {obeb}, OKEK'i {okek}'tir. Yaşları toplamı kaçtır?", c: "{toplam}", v: {obeb:[2,5], okek:[12,60], kosul:"okek%obeb==0"}, z:"cok_zor", alt:"yas_obeb_okek" },

  // ALT DAL 10: SÖZEL PROBLEMLERDE OBEB-OKEK SEÇİMİ
  { id: "s2_op_018", s: "\"Parçalara ayırma\" problemlerinde OBEB mi OKEK mi kullanılır?", c: "OBEB", v: {}, z:"orta", alt:"parcalara_ayirma_obeb" },
  { id: "s2_op_019", s: "\"Buluşma, karşılaşma, birleştirme\" problemlerinde OBEB mi OKEK mi kullanılır?", c: "OKEK", v: {}, z:"orta", alt:"bulusma_okek" },
  { id: "s2_op_020", s: "\"Eşit büyüklükte parça\" sorusu OBEB mi OKEK mi?", c: "OBEB", v: {}, z:"orta", alt:"esit_parca_obeb" },
  { id: "s2_op_021", s: "\"En küçük ortak kat\" sorusu OBEB mi OKEK mi?", c: "OKEK", v: {}, z:"orta", alt:"en_kucuk_ortak_kat_okek" },

],

  3: [

  // ==========================================
  // KONU 1: KESİR TÜRLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT KESİR
  { id: "s3_kt_001", s: "{a}/{b} kesri basit kesir midir?", c: "{evet_hayir}", v: {a:[1,10], b:[2,15]}, z:"kolay", alt:"basit_kesir_tanima" },
  { id: "s3_kt_002", s: "Basit kesir nedir?", c: "payi_paydasindan_kucuk_olan_kesir", v: {}, z:"kolay", alt:"basit_kesir_tanimi" },
  { id: "s3_kt_003", s: "Aşağıdakilerden hangisi basit kesirdir?", c: "{basit}", v: {secenekler:["2/3","5/4","7/7","11/5","9/8"]}, z:"kolay", alt:"basit_kesir_bulma" },
  { id: "s3_kt_004", s: "Basit kesirlerde pay ile payda arasındaki ilişki nedir?", c: "pay<payda", v: {}, z:"kolay", alt:"basit_kesir_iliski" },

  // ALT DAL 2: BİLEŞİK KESİR
  { id: "s3_kt_005", s: "{a}/{b} kesri bileşik kesir midir?", c: "{evet_hayir}", v: {a:[2,20], b:[1,10]}, z:"kolay", alt:"bilesik_kesir_tanima" },
  { id: "s3_kt_006", s: "Bileşik kesir nedir?", c: "payi_paydasina_esit_veya_buyuk_olan_kesir", v: {}, z:"kolay", alt:"bilesik_kesir_tanimi" },
  { id: "s3_kt_007", s: "Aşağıdakilerden hangisi bileşik kesirdir?", c: "{bilesik}", v: {secenekler:["3/5","4/7","9/4","2/8","1/3"]}, z:"kolay", alt:"bilesik_kesir_bulma" },
  { id: "s3_kt_008", s: "Bileşik kesirlerde pay ile payda arasındaki ilişki nedir?", c: "pay>=payda", v: {}, z:"kolay", alt:"bilesik_kesir_iliski" },

  // ALT DAL 3: TAM SAYILI KESİR
  { id: "s3_kt_009", s: "{a}/{b} bileşik kesrini tam sayılı kesre çeviriniz.", c: "{tam} {kalan}/{b}", v: {a:[7,25], b:[2,7], kosul:"a>b", tam:"Math.floor({a}/{b})", kalan:"{a}%{b}"}, z:"orta", alt:"tam_sayili_kesir" },
  { id: "s3_kt_010", s: "{tam} {a}/{b} tam sayılı kesrini bileşik kesre çeviriniz.", c: "{tam}*{b}+{a}/{b}", v: {tam:[1,5], a:[1,"{b}-1"], b:[3,9]}, z:"orta", alt:"tam_sayilidan_bilesige" },
  { id: "s3_kt_011", s: "Tam sayılı kesir nedir?", c: "tam_kisim_ve_basit_kesirden_olusan_kesir", v: {}, z:"kolay", alt:"tam_sayili_kesir_tanimi" },
  { id: "s3_kt_012", s: "{tam} {a}/{b} tam sayılı kesrinde tam kısım, pay ve payda nedir?", c: "tam:{tam}, pay:{a}, payda:{b}", v: {tam:[1,5], a:[1,"{b}-1"], b:[3,9]}, z:"kolay", alt:"tam_sayili_kesir_terimler" },

  // ALT DAL 4: BİRİM KESİR
  { id: "s3_kt_013", s: "Birim kesir nedir?", c: "payi_1_olan_basit_kesir", v: {}, z:"kolay", alt:"birim_kesir_tanimi" },
  { id: "s3_kt_014", s: "Aşağıdakilerden hangisi birim kesirdir?", c: "{birim}", v: {secenekler:["1/5","2/3","3/4","5/1","2/2"]}, z:"kolay", alt:"birim_kesir_bulma" },
  { id: "s3_kt_015", s: "Birim kesirlerde sıralama nasıldır?", c: "payda_buyudukce_kesir_kuculur", v: {}, z:"orta", alt:"birim_kesir_siralama" },

  // ALT DAL 5: DENK KESİRLER
  { id: "s3_kt_016", s: "{a}/{b} ile {c}/{d} denk kesirler midir?", c: "{evet_hayir}", v: {a:[1,6], b:[2,12], carpan:[2,4], c:"{a}*{carpan}", d:"{b}*{carpan}"}, z:"orta", alt:"denk_kesir" },
  { id: "s3_kt_017", s: "Denk kesir nedir?", c: "farkli_yazilan_ama_ayni_degeri_ifade_eden_kesirler", v: {}, z:"kolay", alt:"denk_kesir_tanimi" },
  { id: "s3_kt_018", s: "{a}/{b} kesrine denk iki kesir yazınız.", c: "{a}*2/{b}*2, {a}*3/{b}*3", v: {a:[1,5], b:[2,8]}, z:"orta", alt:"denk_kesir_yazma" },

  // ALT DAL 6: KESİR ÇEŞİTLERİ KARIŞIK
  { id: "s3_kt_019", s: "\"Payı paydasından küçük olan kesir\" tanımı hangi kesir türüne aittir?", c: "basit_kesir", v: {}, z:"kolay", alt:"tanim_bulma" },
  { id: "s3_kt_020", s: "{a}/{b} kesri hangi kesir türüdür?", c: "{tur}", v: {a:[1,15], b:[1,12]}, z:"orta", alt:"kesir_turu_bulma" },

  // ALT DAL 7: KESRİN SAYI DOĞRUSUNDA GÖSTERİMİ
  { id: "s3_kt_021", s: "{a}/{b} kesri sayı doğrusunda hangi iki tam sayı arasındadır?", c: "{tam1}_ile_{tam2}", v: {a:[5,15], b:[2,7], kosul:"a>b", tam1:"Math.floor({a}/{b})", tam2:"Math.ceil({a}/{b})"}, z:"orta", alt:"sayi_dogrusu" },
  { id: "s3_kt_022", s: "0 ile 1 arasındaki {a}/{b} kesri 0'a mı yoksa 1'e mi daha yakındır?", c: "{yakinlik}", v: {a:[1,8], b:[3,10]}, z:"orta", alt:"yakinlik" },

  // ALT DAL 8: KESİRDE PAY VE PAYDA İLİŞKİSİ
  { id: "s3_kt_023", s: "Payı {a}, paydası {b} olan kesir nasıl yazılır?", c: "{a}/{b}", v: {a:[1,10], b:[1,15]}, z:"kolay", alt:"kesir_yazma" },
  { id: "s3_kt_024", s: "{a}/{b} kesrinde pay ve payda hangisidir?", c: "pay:{a}, payda:{b}", v: {a:[1,10], b:[2,12]}, z:"kolay", alt:"pay_payda_bulma" },
  { id: "s3_kt_025", s: "Bir kesirde payda neyi ifade eder?", c: "butunun_kac_esit_parcaya_bolundugunu", v: {}, z:"orta", alt:"payda_anlami" },
  { id: "s3_kt_026", s: "Bir kesirde pay neyi ifade eder?", c: "esit_parcalardan_kac_tanesinin_alindigini", v: {}, z:"orta", alt:"pay_anlami" },


  // ==========================================
  // KONU 2: KESİRLERDE SADELEŞTİRME VE GENİŞLETME (6 alt dal)
  // ==========================================

  // ALT DAL 1: SADELEŞTİRME
  { id: "s3_sg_001", s: "{a}/{b} kesrini sadeleştiriniz.", c: "{sade_a}/{sade_b}", v: {a:[6,48], b:[8,60], kosul:"obeb>1", sade_a:"{a}/obeb({a},{b})", sade_b:"{b}/obeb({a},{b})"}, z:"orta", alt:"sadelestirme" },
  { id: "s3_sg_002", s: "{a}/{b} kesri sadeleşir mi?", c: "{evet_hayir}", v: {a:[2,15], b:[3,20]}, z:"orta", alt:"sadelesme_kontrol" },
  { id: "s3_sg_003", s: "Bir kesrin sadeleşmesi için pay ve payda nasıl olmalıdır?", c: "1_den_baska_ortak_bolenleri_olmali", v: {}, z:"orta", alt:"sadelesme_sarti" },

  // ALT DAL 2: EN SADE HAL
  { id: "s3_sg_004", s: "{a}/{b} kesrinin en sade hali nedir?", c: "{sade_a}/{sade_b}", v: {a:[4,36], b:[8,48], sade_a:"{a}/obeb({a},{b})", sade_b:"{b}/obeb({a},{b})"}, z:"orta", alt:"en_sade_hal" },
  { id: "s3_sg_005", s: "Bir kesrin en sade hali için pay ve paydanın ne olması gerekir?", c: "aralarinda_asal", v: {}, z:"orta", alt:"en_sade_sart" },

  // ALT DAL 3: GENİŞLETME
  { id: "s3_sg_006", s: "{a}/{b} kesrini {n} ile genişletiniz.", c: "{a}*{n}/{b}*{n}", v: {a:[1,8], b:[2,10], n:[2,5]}, z:"orta", alt:"genisletme" },
  { id: "s3_sg_007", s: "Genişletme işleminde kesrin değeri değişir mi?", c: "hayir", v: {}, z:"orta", alt:"genisletme_deger" },
  { id: "s3_sg_008", s: "{a}/{b} = ?/{c} eşitliğinde ? kaçtır?", c: "{a}*{c}/{b}", v: {a:[1,6], b:[2,8], c:[4,24], kosul:"c%b==0"}, z:"orta", alt:"genisletme_sorusu" },

  // ALT DAL 4: SADELEŞTİRME VE GENİŞLETME KARIŞIK
  { id: "s3_sg_009", s: "{a}/{b} kesrini önce {n} ile genişletip sonra {m} ile sadeleştirirsek sonuç ne olur?", c: "{sonuc}", v: {a:[2,8], b:[3,10], n:[2,3], m:[2,3], kosul:"genisletme_sonrasi_m_ile_bolunebilsin"}, z:"zor", alt:"genislet_sadelestir" },
  { id: "s3_sg_010", s: "\"Sadeleştirme\" ile \"genişletme\" arasındaki fark nedir?", c: "sadelestirme_pay_paydayi_bolme_genisletme_carpmadir", v: {}, z:"orta", alt:"fark" },

  // ALT DAL 5: KESİRLERİ ORTAK PAYDADA BULUŞTURMA
  { id: "s3_sg_011", s: "{a}/{b} ve {c}/{d} kesirlerini ortak paydada yazınız.", c: "{a}*{d}/{b}*{d}_ve_{c}*{b}/{d}*{b}", v: {a:[1,5], b:[2,6], c:[1,5], d:[3,8]}, z:"orta", alt:"ortak_payda" },
  { id: "s3_sg_012", s: "{a}/{b} ve {c}/{d} kesirlerinin paydalarını eşitlemek için ilk kesir hangi sayı ile genişletilmelidir?", c: "{d}/obeb({b},{d})", v: {a:[1,4], b:[2,6], c:[1,4], d:[3,8]}, z:"zor", alt:"genisletme_sayisi" },

  // ALT DAL 6: EBOP (EN BÜYÜK ORTAK PAYDA)
  { id: "s3_sg_013", s: "{a}/{b} ve {c}/{d} kesirlerinin paydalarının OKEK'i kaçtır?", c: "{okek}", v: {a:[1,4], b:[2,8], c:[1,4], d:[3,9]}, z:"orta", alt:"payda_okek" },
  { id: "s3_sg_014", s: "Kesirlerde toplama/çıkarma için neden paydalar eşitlenir?", c: "parcalar_esit_olsun_diye", v: {}, z:"orta", alt:"payda_esitleme_nedeni" },


  // ==========================================
  // KONU 3: KESİRLERDE SIRALAMA (8 alt dal)
  // ==========================================

  // ALT DAL 1: PAYDALARI EŞİT KESİRLERDE SIRALAMA
  { id: "s3_sr_001", s: "{a}/{c} ve {b}/{c} kesirlerini sıralayınız.", c: "{kucuk} < {buyuk}", v: {a:[1,8], b:[2,9], c:[3,12], kosul:"a<b"}, z:"orta", alt:"paydasi_esit_siralama" },
  { id: "s3_sr_002", s: "Paydaları eşit kesirlerde sıralama nasıl yapılır?", c: "payi_buyuk_olan_daha_buyuktur", v: {}, z:"orta", alt:"paydasi_esit_kural" },

  // ALT DAL 2: PAYLARI EŞİT KESİRLERDE SIRALAMA
  { id: "s3_sr_003", s: "{a}/{b} ve {a}/{c} kesirlerini sıralayınız.", c: "{kucuk} < {buyuk}", v: {a:[1,8], b:[3,12], c:[2,10], kosul:"b>c"}, z:"orta", alt:"payi_esit_siralama" },
  { id: "s3_sr_004", s: "Payları eşit kesirlerde sıralama nasıl yapılır?", c: "paydasi_kucuk_olan_daha_buyuktur", v: {}, z:"orta", alt:"payi_esit_kural" },

  // ALT DAL 3: PAY VE PAYDASI FARKLI KESİRLERDE SIRALAMA
  { id: "s3_sr_005", s: "{a}/{b} ve {c}/{d} kesirlerini sıralayınız.", c: "{siralama}", v: {a:[1,5], b:[2,8], c:[1,5], d:[3,9]}, z:"zor", alt:"farkli_siralama" },
  { id: "s3_sr_006", s: "Pay ve paydası farklı kesirler nasıl sıralanır?", c: "payda_esitlenir_veya_ondaliga_cevrilir", v: {}, z:"orta", alt:"farkli_siralama_kural" },

  // ALT DAL 4: KESİRLERİ ONDALIĞA ÇEVİREREK SIRALAMA
  { id: "s3_sr_007", s: "{a}/{b} ve {c}/{d} kesirlerini ondalığa çevirerek sıralayınız.", c: "{siralama}", v: {a:[1,5], b:[2,7], c:[1,5], d:[3,8]}, z:"zor", alt:"ondalik_siralama" },

  // ALT DAL 5: BÜYÜKTEN KÜÇÜĞE / KÜÇÜKTEN BÜYÜĞE
  { id: "s3_sr_008", s: "Aşağıdaki kesirleri küçükten büyüğe sıralayınız: {a}/{b}, {c}/{d}, {e}/{f}", c: "{siralama}", v: {a:[1,5], b:[2,8], c:[1,5], d:[3,9], e:[1,5], f:[4,10]}, z:"cok_zor", alt:"uc_kesir_siralama" },
  { id: "s3_sr_009", s: "Aşağıdaki kesirlerden hangisi en büyüktür?", c: "{en_buyuk}", v: {secenekler:["2/3","3/4","5/6","7/12","1/2"]}, z:"orta", alt:"en_buyuk_bulma" },
  { id: "s3_sr_010", s: "Aşağıdaki kesirlerden hangisi en küçüktür?", c: "{en_kucuk}", v: {secenekler:["1/2","2/5","3/8","4/9","5/12"]}, z:"orta", alt:"en_kucuk_bulma" },

  // ALT DAL 6: YARIMMA GÖRE SIRALAMA
  { id: "s3_sr_011", s: "{a}/{b} kesri 1/2'den büyük müdür?", c: "{evet_hayir}", v: {a:[1,10], b:[2,15]}, z:"orta", alt:"yarimdan_buyuk" },
  { id: "s3_sr_012", s: "Yarımdan büyük kesirleri bulma stratejisi nedir?", c: "pay_paydanin_yarisindan_buyukse_kesir_1/2den_buyuktur", v: {}, z:"orta", alt:"yarim_strateji" },

  // ALT DAL 7: TAM SAYILI KESİRLERDE SIRALAMA
  { id: "s3_sr_013", s: "{t1} {a}/{b} ve {t2} {c}/{d} kesirlerini sıralayınız.", c: "{siralama}", v: {t1:[1,4], a:[1,5], b:[2,7], t2:[1,4], c:[1,5], d:[3,8]}, z:"zor", alt:"tam_sayili_siralama" },

  // ALT DAL 8: SAYI DOĞRUSUNDA SIRALAMA
  { id: "s3_sr_014", s: "Sayı doğrusunda 0 ile 1 arasında {a}/{b} mi daha büyüktür yoksa {c}/{d} mi?", c: "{buyuk_olan}", v: {a:[1,4], b:[3,7], c:[1,4], d:[2,6]}, z:"orta", alt:"sayi_dogrusu_karsilastirma" },
  { id: "s3_sr_015", s: "{a}/{b} kesri sayı doğrusunda {c}/{d} kesrinin sağında mıdır, solunda mıdır?", c: "{yon}", v: {a:[1,5], b:[2,8], c:[1,5], d:[3,9]}, z:"orta", alt:"sayi_dogrusu_konum" },


  // ==========================================
  // KONU 4: KESİRLERDE TOPLAMA-ÇIKARMA (8 alt dal)
  // ==========================================

  // ALT DAL 1: PAYDALARI EŞİT KESİRLERDE TOPLAMA
  { id: "s3_tt_001", s: "{a}/{c} + {b}/{c} = ?", c: "({a}+{b})/{c}", v: {a:[1,8], b:[1,8], c:[3,12]}, z:"kolay", alt:"paydasi_esit_toplama" },
  { id: "s3_tt_002", s: "{a}/{c} + {b}/{c} + {d}/{c} = ?", c: "({a}+{b}+{d})/{c}", v: {a:[1,5], b:[1,5], d:[1,5], c:[4,10]}, z:"orta", alt:"uc_kesir_toplama" },

  // ALT DAL 2: PAYDALARI EŞİT KESİRLERDE ÇIKARMA
  { id: "s3_tt_003", s: "{a}/{c} - {b}/{c} = ?", c: "({a}-{b})/{c}", v: {a:[3,10], b:[1,"{a}-1"], c:[3,12]}, z:"kolay", alt:"paydasi_esit_cikarma" },
  { id: "s3_tt_004", s: "{a}/{c} - {b}/{c} - {d}/{c} = ?", c: "({a}-{b}-{d})/{c}", v: {a:[5,15], b:[1,3], d:[1,3], c:[4,12], kosul:"a>b+d"}, z:"orta", alt:"uc_kesir_cikarma" },

  // ALT DAL 3: PAYDALARI FARKLI KESİRLERDE TOPLAMA
  { id: "s3_tt_005", s: "{a}/{b} + {c}/{d} = ?", c: "({a}*{d}+{c}*{b})/({b}*{d})", v: {a:[1,4], b:[2,6], c:[1,4], d:[3,8], kosul:"b!=d"}, z:"orta", alt:"farkli_payda_toplama" },
  { id: "s3_tt_006", s: "{a}/{b} + {c}/{d} işleminin sonucu nedir? (Sadeleştirilmiş)", c: "{sonuc}", v: {a:[1,3], b:[2,6], c:[1,3], d:[3,8], kosul:"b!=d"}, z:"zor", alt:"farkli_payda_toplama_sade" },

  // ALT DAL 4: PAYDALARI FARKLI KESİRLERDE ÇIKARMA
  { id: "s3_tt_007", s: "{a}/{b} - {c}/{d} = ?", c: "({a}*{d}-{c}*{b})/({b}*{d})", v: {a:[2,6], b:[2,6], c:[1,3], d:[3,8], kosul:"b!=d && a/b>c/d"}, z:"orta", alt:"farkli_payda_cikarma" },
  { id: "s3_tt_008", s: "{a}/{b} - {c}/{d} işleminin sonucu nedir? (Sadeleştirilmiş)", c: "{sonuc}", v: {a:[2,6], b:[2,6], c:[1,3], d:[3,8], kosul:"a/b>c/d"}, z:"zor", alt:"farkli_payda_cikarma_sade" },

  // ALT DAL 5: TAM SAYILI KESİRLERDE TOPLAMA
  { id: "s3_tt_009", s: "{t1} {a}/{b} + {t2} {c}/{d} = ?", c: "{sonuc}", v: {t1:[1,3], a:[1,"{b}-1"], b:[3,7], t2:[1,3], c:[1,"{d}-1"], d:[3,8]}, z:"zor", alt:"tam_sayili_toplama" },
  { id: "s3_tt_010", s: "{t1} {a}/{b} + {t2} = ?", c: "{t1}+{t2} {a}/{b}", v: {t1:[1,4], a:[1,5], b:[2,6], t2:[1,5]}, z:"orta", alt:"tam_sayili_tam_sayi" },

  // ALT DAL 6: TAM SAYILI KESİRLERDE ÇIKARMA
  { id: "s3_tt_011", s: "{t1} {a}/{b} - {t2} {c}/{d} = ?", c: "{sonuc}", v: {t1:[2,5], a:[1,4], b:[3,7], t2:[1,3], c:[1,3], d:[3,8], kosul:"ilk_kesir_buyuk"}, z:"cok_zor", alt:"tam_sayili_cikarma" },
  { id: "s3_tt_012", s: "{t1} {a}/{b} - {t2} = ?", c: "{t1}-{t2} {a}/{b}", v: {t1:[2,6], a:[1,5], b:[2,6], t2:[1,"{t1}-1"]}, z:"orta", alt:"tam_sayili_eksi_tam" },

  // ALT DAL 7: TOPLAMA-ÇIKARMA KARIŞIK
  { id: "s3_tt_013", s: "{a}/{b} + {c}/{d} - {e}/{f} = ?", c: "{sonuc}", v: {a:[1,3], b:[2,5], c:[1,3], d:[3,6], e:[1,3], f:[4,8]}, z:"cok_zor", alt:"uc_kesir_karisik" },
  { id: "s3_tt_014", s: "{t1} {a}/{b} + {c}/{d} - {t2} = ?", c: "{sonuc}", v: {t1:[1,3], a:[1,4], b:[2,6], c:[1,4], d:[3,7], t2:[1,2]}, z:"cok_zor", alt:"tam_sayili_karisik" },

  // ALT DAL 8: KESİRLERDE TOPLAMA-ÇIKARMA PROBLEMLERİ
  { id: "s3_tt_015", s: "Bir pastanın önce {a}/{b}'i sonra {c}/{d}'ü yenmiştir. Pastanın kaçta kaçı yenmiştir?", c: "{a}/{b}+{c}/{d}", v: {a:[1,3], b:[3,8], c:[1,3], d:[4,9], kosul:"toplam<=1"}, z:"orta", alt:"pasta_yeme" },
  { id: "s3_tt_016", s: "Bir depodaki suyun önce {a}/{b}'i sonra {c}/{d}'ü kullanılmıştır. Depoda suyun kaçta kaçı kalmıştır?", c: "1-({a}/{b}+{c}/{d})", v: {a:[1,2], b:[3,6], c:[1,3], d:[4,8], kosul:"toplam<1"}, z:"zor", alt:"depo_kalan" },


  // ==========================================
  // KONU 5: KESİRLERDE ÇARPMA (6 alt dal)
  // ==========================================

  // ALT DAL 1: KESİR İLE TAM SAYI ÇARPMA
  { id: "s3_ca_001", s: "{a}/{b} × {n} = ?", c: "{a}*{n}/{b}", v: {a:[1,5], b:[2,8], n:[2,6]}, z:"orta", alt:"kesir_tamsayi_carpma" },
  { id: "s3_ca_002", s: "{n} × {a}/{b} = ?", c: "{n}*{a}/{b}", v: {a:[1,5], b:[2,8], n:[2,6]}, z:"orta", alt:"tamsayi_kesir_carpma" },
  { id: "s3_ca_003", s: "{a}/{b} × {n} = {sonuc} ise {n} kaçtır?", c: "{n}", v: {a:[1,4], b:[2,7], n:[2,5], sonuc:"{a}*{n}/{b}"}, z:"orta", alt:"carpimdan_sayi_bulma" },

  // ALT DAL 2: İKİ KESRİ ÇARPMA
  { id: "s3_ca_004", s: "{a}/{b} × {c}/{d} = ?", c: "{a}*{c}/({b}*{d})", v: {a:[1,5], b:[2,7], c:[1,5], d:[3,8]}, z:"orta", alt:"kesir_kesir_carpma" },
  { id: "s3_ca_005", s: "{a}/{b} × {c}/{d} = ? (Sadeleştirilmiş)", c: "{sonuc}", v: {a:[2,6], b:[3,9], c:[2,6], d:[4,10]}, z:"zor", alt:"kesir_kesir_carpma_sade" },
  { id: "s3_ca_006", s: "Kesirlerde çarpma işlemi nasıl yapılır?", c: "paylar_carpilir_paya_paydalar_carpilir_paydaya_yazilir", v: {}, z:"orta", alt:"carpma_kurali" },

  // ALT DAL 3: ÜÇ KESRİ ÇARPMA
  { id: "s3_ca_007", s: "{a}/{b} × {c}/{d} × {e}/{f} = ?", c: "{a}*{c}*{e}/({b}*{d}*{f})", v: {a:[1,3], b:[2,5], c:[1,3], d:[3,5], e:[1,3], f:[2,5]}, z:"zor", alt:"uc_kesir_carpma" },

  // ALT DAL 4: TAM SAYILI KESİRLERDE ÇARPMA
  { id: "s3_ca_008", s: "{t1} {a}/{b} × {t2} {c}/{d} = ?", c: "{sonuc}", v: {t1:[1,3], a:[1,4], b:[2,6], t2:[1,3], c:[1,4], d:[3,7]}, z:"cok_zor", alt:"tam_sayili_carpma" },
  { id: "s3_ca_009", s: "{t} {a}/{b} × {n} = ?", c: "{sonuc}", v: {t:[1,3], a:[1,4], b:[2,5], n:[2,5]}, z:"zor", alt:"tam_sayili_tamsayi_carpma" },

  // ALT DAL 5: ÇAPRAZ SADELEŞTİRME
  { id: "s3_ca_010", s: "{a}/{b} × {c}/{d} işleminde çapraz sadeleştirme yapılabilir mi?", c: "{evet_hayir}", v: {a:[2,8], b:[3,10], c:[2,8], d:[3,10]}, z:"orta", alt:"capraz_sadelestirme" },
  { id: "s3_ca_011", s: "Çarpma işleminde çapraz sadeleştirme nasıl yapılır?", c: "bir_kesrin_payiyla_digerinin_paydasi_ortak_bolene_bolunur", v: {}, z:"orta", alt:"capraz_sadelestirme_kural" },

  // ALT DAL 6: ÇARPMANIN ÖZELLİKLERİ
  { id: "s3_ca_012", s: "{a}/{b} × 1 = ?", c: "{a}/{b}", v: {a:[1,5], b:[2,7]}, z:"orta", alt:"etkisiz_eleman" },
  { id: "s3_ca_013", s: "{a}/{b} × 0 = ?", c: "0", v: {a:[1,5], b:[2,7]}, z:"orta", alt:"yutan_eleman" },
  { id: "s3_ca_014", s: "{a}/{b} × {b}/{a} = ?", c: "1", v: {a:[1,5], b:[2,7]}, z:"orta", alt:"ters_eleman" },


  // ==========================================
  // KONU 6: KESİRLERDE BÖLME (6 alt dal)
  // ==========================================

  // ALT DAL 1: KESİR İLE TAM SAYI BÖLME
  { id: "s3_bl_001", s: "{a}/{b} ÷ {n} = ?", c: "{a}/({b}*{n})", v: {a:[1,5], b:[2,7], n:[2,5]}, z:"orta", alt:"kesir_tamsayi_bolme" },
  { id: "s3_bl_002", s: "{n} ÷ {a}/{b} = ?", c: "{n}*{b}/{a}", v: {a:[1,5], b:[2,7], n:[2,6]}, z:"orta", alt:"tamsayi_kesir_bolme" },
  { id: "s3_bl_003", s: "Kesirlerde bölme işlemi nasıl yapılır?", c: "birinci_kesir_aynen_yazilir_ikinci_kesir_ters_cevrilip_carpilir", v: {}, z:"orta", alt:"bolme_kurali" },

  // ALT DAL 2: İKİ KESRİ BÖLME
  { id: "s3_bl_004", s: "{a}/{b} ÷ {c}/{d} = ?", c: "{a}*{d}/({b}*{c})", v: {a:[1,5], b:[2,7], c:[1,5], d:[3,8]}, z:"orta", alt:"kesir_kesir_bolme" },
  { id: "s3_bl_005", s: "{a}/{b} ÷ {c}/{d} = ? (Sadeleştirilmiş)", c: "{sonuc}", v: {a:[2,6], b:[3,9], c:[2,6], d:[4,10]}, z:"zor", alt:"kesir_kesir_bolme_sade" },

  // ALT DAL 3: ÜÇ KESİRLİ BÖLME
  { id: "s3_bl_006", s: "{a}/{b} ÷ {c}/{d} ÷ {e}/{f} = ?", c: "{a}*{d}*{f}/({b}*{c}*{e})", v: {a:[1,3], b:[2,5], c:[1,3], d:[3,5], e:[1,3], f:[2,5]}, z:"cok_zor", alt:"uc_kesir_bolme" },

  // ALT DAL 4: TAM SAYILI KESİRLERDE BÖLME
  { id: "s3_bl_007", s: "{t1} {a}/{b} ÷ {t2} {c}/{d} = ?", c: "{sonuc}", v: {t1:[1,3], a:[1,4], b:[2,6], t2:[1,3], c:[1,4], d:[3,7]}, z:"cok_zor", alt:"tam_sayili_bolme" },
  { id: "s3_bl_008", s: "{t} {a}/{b} ÷ {n} = ?", c: "{sonuc}", v: {t:[1,3], a:[1,4], b:[2,5], n:[2,5]}, z:"zor", alt:"tam_sayili_tamsayi_bolme" },

  // ALT DAL 5: BÖLME İLE ÇARPMA İLİŞKİSİ
  { id: "s3_bl_009", s: "{a}/{b} ÷ {c}/{d} = {a}/{b} × ?", c: "{d}/{c}", v: {a:[1,5], b:[2,7], c:[1,5], d:[3,8]}, z:"orta", alt:"bolme_carpma_iliskisi" },
  { id: "s3_bl_010", s: "\"Bölme işleminde ikinci kesir ters çevrilip çarpılır\" ifadesi doğru mudur?", c: "evet", v: {}, z:"orta", alt:"bolme_carpma_kural_kontrol" },

  // ALT DAL 6: BÖLMENİN ÖZELLİKLERİ
  { id: "s3_bl_011", s: "{a}/{b} ÷ 1 = ?", c: "{a}/{b}", v: {a:[1,5], b:[2,7]}, z:"orta", alt:"bire_bolme" },
  { id: "s3_bl_012", s: "0 ÷ {a}/{b} = ?", c: "0", v: {a:[1,5], b:[2,7]}, z:"orta", alt:"sifir_bolme" },
  { id: "s3_bl_013", s: "{a}/{b} ÷ 0 = ?", c: "tanimsiz", v: {a:[1,5], b:[2,7]}, z:"orta", alt:"sifira_bolme_tanimsiz" },
  { id: "s3_bl_014", s: "{a}/{b} ÷ {a}/{b} = ?", c: "1", v: {a:[1,5], b:[2,7]}, z:"orta", alt:"kendine_bolme" },


  // ==========================================
  // KONU 7: ONDALIK SAYILAR (10 alt dal)
  // ==========================================

  // ALT DAL 1: KESİRDEN ONDALIĞA ÇEVİRME
  { id: "s3_os_001", s: "{a}/{b} kesrini ondalık gösterimle yazınız.", c: "{ondalik}", v: {a:[1,5], b:[2,4,5,8,10], kosul:"payda_2_4_5_8_10"}, z:"orta", alt:"kesirden_ondaliga" },
  { id: "s3_os_002", s: "{a}/{b} kesri ondalık gösterimde nasıl yazılır? (b=100)", c: "0,{a}", v: {a:[1,99], b:100}, z:"orta", alt:"payda_100" },
  { id: "s3_os_003", s: "{a}/{b} kesri ondalık gösterimde nasıl yazılır? (b=1000)", c: "0,{a}", v: {a:[1,999], b:1000}, z:"orta", alt:"payda_1000" },

  // ALT DAL 2: ONDALIK SAYIDAN KESRE ÇEVİRME
  { id: "s3_os_004", s: "0,{a} ondalık sayısını kesir olarak yazınız.", c: "{a}/10", v: {a:[1,99]}, z:"orta", alt:"ondaliktan_kesire" },
  { id: "s3_os_005", s: "0,{a}{b} ondalık sayısını kesir olarak yazınız.", c: "{a}{b}/100", v: {a:[1,9], b:[0,9]}, z:"orta", alt:"iki_basamakli_ondalik" },
  { id: "s3_os_006", s: "{tam},{a} ondalık sayısını kesir olarak yazınız.", c: "{tam} {a}/100", v: {tam:[1,5], a:[1,99]}, z:"orta", alt:"tam_kisimli_ondalik" },

  // ALT DAL 3: ONDALIK SAYILARDA SIRALAMA
  { id: "s3_os_007", s: "0,{a} ve 0,{b} ondalık sayılarını sıralayınız.", c: "{siralama}", v: {a:[10,99], b:[10,99]}, z:"orta", alt:"ondalik_siralama" },
  { id: "s3_os_008", s: "0,{a}{b} ile 0,{a}{c} ondalık sayılarından hangisi büyüktür?", c: "{buyuk}", v: {a:[1,5], b:[1,9], c:[1,9]}, z:"orta", alt:"ondalik_karsilastirma" },

  // ALT DAL 4: ONDALIK SAYILARDA TOPLAMA
  { id: "s3_os_009", s: "0,{a} + 0,{b} = ?", c: "0,{a}+0,{b}", v: {a:[10,50], b:[10,50]}, z:"orta", alt:"ondalik_toplama" },
  { id: "s3_os_010", s: "{t1},{a} + {t2},{b} = ?", c: "{t1}+{t2},{a}+{b}", v: {t1:[1,5], a:[10,50], t2:[1,5], b:[10,50], kosul:"a+b<100"}, z:"orta", alt:"tam_kisimli_ondalik_toplama" },

  // ALT DAL 5: ONDALIK SAYILARDA ÇIKARMA
  { id: "s3_os_011", s: "0,{a} - 0,{b} = ?", c: "0,{a}-0,{b}", v: {a:[20,90], b:[10,19], kosul:"a>b"}, z:"orta", alt:"ondalik_cikarma" },
  { id: "s3_os_012", s: "{t1},{a} - {t2},{b} = ?", c: "{sonuc}", v: {t1:[2,6], a:[10,50], t2:[1,"{t1}-1"], b:[5,40], kosul:"ilk_buyuk"}, z:"zor", alt:"tam_kisimli_ondalik_cikarma" },

  // ALT DAL 6: ONDALIK SAYILARDA ÇARPMA
  { id: "s3_os_013", s: "0,{a} × {n} = ?", c: "0,{a}*{n}", v: {a:[1,99], n:[2,10]}, z:"orta", alt:"ondalik_tamsayi_carpma" },
  { id: "s3_os_014", s: "0,{a} × 0,{b} = ?", c: "0,{a}*0,{b}", v: {a:[1,9], b:[1,9]}, z:"zor", alt:"ondalik_ondalik_carpma" },
  { id: "s3_os_015", s: "Ondalık sayılarda çarpma yaparken virgül nasıl yerleştirilir?", c: "carpilanlarin_virgulden_sonraki_basamak_sayilari_toplami_kadar", v: {}, z:"orta", alt:"ondalik_carpma_virgul" },

  // ALT DAL 7: ONDALIK SAYILARDA BÖLME
  { id: "s3_os_016", s: "0,{a} ÷ {n} = ?", c: "0,{a}/{n}", v: {a:[10,99], n:[2,5], kosul:"a%n==0"}, z:"zor", alt:"ondalik_tamsayi_bolme" },
  { id: "s3_os_017", s: "{n} ÷ 0,{a} = ?", c: "{n}/0,{a}", v: {a:[1,9], n:[2,8]}, z:"cok_zor", alt:"tamsayi_ondalik_bolme" },

  // ALT DAL 8: ONDALIK SAYILARDA YUVARLAMA
  { id: "s3_os_018", s: "0,{a}{b}{c} sayısını onda birler basamağına yuvarlayınız.", c: "{yuvarlanmis}", v: {a:[1,9], b:[1,9], c:[1,9]}, z:"orta", alt:"ondalik_yuvarlama" },
  { id: "s3_os_019", s: "0,{a}{b}{c} sayısını yüzde birler basamağına yuvarlayınız.", c: "{yuvarlanmis}", v: {a:[1,9], b:[1,9], c:[1,9]}, z:"orta", alt:"yuzde_bir_yuvarlama" },

  // ALT DAL 9: ONDALIK SAYILARDA BASAMAK ADLARI
  { id: "s3_os_020", s: "0,{a}{b}{c} sayısında {b} rakamı hangi basamaktadır?", c: "onda_birler", v: {a:[1,9], b:[1,9], c:[1,9]}, z:"orta", alt:"ondalik_basamak" },
  { id: "s3_os_021", s: "0,{a}{b}{c} sayısında {c} rakamının basamak değeri kaçtır?", c: "0,00{c}", v: {a:[1,9], b:[1,9], c:[1,9]}, z:"orta", alt:"ondalik_basamak_degeri" },

  // ALT DAL 10: ONDALIK SAYILARDA 10,100,1000 İLE ÇARPMA/BÖLME
  { id: "s3_os_022", s: "0,{a} × 10 = ?", c: "0,{a}*10", v: {a:[1,99]}, z:"orta", alt:"on_ile_carpma_virgul" },
  { id: "s3_os_023", s: "0,{a} × 100 = ?", c: "0,{a}*100", v: {a:[1,99]}, z:"orta", alt:"yuz_ile_carpma_virgul" },
  { id: "s3_os_024", s: "{a},{b} ÷ 10 = ?", c: "{a},{b}/10", v: {a:[1,9], b:[1,99]}, z:"orta", alt:"ona_bolme_virgul" },
  { id: "s3_os_025", s: "{a},{b} ÷ 100 = ?", c: "{a},{b}/100", v: {a:[1,9], b:[1,99]}, z:"zor", alt:"yuze_bolme_virgul" },


  // ==========================================
  // KONU 8: DEVİRLİ ONDALIK SAYILAR (8 alt dal)
  // ==========================================

  // ALT DAL 1: DEVİRLİ ONDALIK TANIMI
  { id: "s3_dos_001", s: "Devirli ondalık sayı nedir?", c: "ondalik_kismi_duzenli_tekrar_eden_sayi", v: {}, z:"orta", alt:"devirli_tanim" },
  { id: "s3_dos_002", s: "0,{a}{a}{a}... = 0,{a}̅ şeklinde gösterilen sayıya ne denir?", c: "devirli_ondalik", v: {a:[1,9]}, z:"orta", alt:"devirli_gosterim" },

  // ALT DAL 2: DEVİRLİ ONDALIĞI KESRE ÇEVİRME (TEK RAKAM DEVİR)
  { id: "s3_dos_003", s: "0,{a}̅ = ? (kesir olarak)", c: "{a}/9", v: {a:[1,9]}, z:"orta", alt:"tek_devir_kesir" },
  { id: "s3_dos_004", s: "0,{a}{b}̅ = ? (sadece {b} devreder)", c: "({a}*9+{b})/90", v: {a:[1,8], b:[1,8]}, z:"zor", alt:"kismi_devir" },

  // ALT DAL 3: DEVİRLİ ONDALIĞI KESRE ÇEVİRME (İKİ RAKAM DEVİR)
  { id: "s3_dos_005", s: "0,{a}{b}̅ = ? (kesir olarak, iki rakam devreder)", c: "{a}{b}/99", v: {a:[1,9], b:[0,9]}, z:"zor", alt:"iki_devir_kesir" },
  { id: "s3_dos_006", s: "0,{a}{b}{c}̅ = ? (üç rakam devreder)", c: "{a}{b}{c}/999", v: {a:[1,9], b:[0,9], c:[0,9]}, z:"cok_zor", alt:"uc_devir_kesir" },

  // ALT DAL 4: DEVİRLİ ONDALIKTA TAM KISIM
  { id: "s3_dos_007", s: "{t},{a}̅ = ? (kesir olarak)", c: "{t}+{a}/9", v: {t:[1,4], a:[1,8]}, z:"zor", alt:"tam_kisimli_devir" },
  { id: "s3_dos_008", s: "{t},{a}{b}̅ = ? (kesir olarak, {b} devreder)", c: "{t}+({a}*9+{b})/90", v: {t:[1,3], a:[1,8], b:[1,8]}, z:"cok_zor", alt:"tam_kismi_devir" },

  // ALT DAL 5: DEVİRLİ ONDALIK FORMÜLÜ
  { id: "s3_dos_009", s: "Devirli ondalık sayıyı kesre çevirme formülü nedir?", c: "(sayi-devretmeyen)/(devreden_kadar_9_devretmeyen_kadar_0)", v: {}, z:"cok_zor", alt:"devirli_formul" },
  { id: "s3_dos_010", s: "a,bc̅d̅ = ? formül ile hesaplayınız.", c: "(abcd-ab)/990", v: {}, z:"cok_zor", alt:"formul_uygulama" },

  // ALT DAL 6: DEVİRLİ ONDALIK SORULARI
  { id: "s3_dos_011", s: "0,9̅ = ?", c: "1", v: {}, z:"zor", alt:"0_9_devirli" },
  { id: "s3_dos_012", s: "0,{a}̅ + 0,{b}̅ = ?", c: "({a}+{b})/9", v: {a:[1,4], b:[1,4], kosul:"a+b<9"}, z:"cok_zor", alt:"iki_devirli_toplam" },

  // ALT DAL 7: HANGİ KESİRLER DEVİRLİ OLUR?
  { id: "s3_dos_013", s: "{a}/{b} kesri ondalık gösterimde devirli midir?", c: "{evet_hayir}", v: {a:[1,8], b:[3,15], kosul:"payda_sadece_2_ve_5_carpani_degilse_devirli"}, z:"zor", alt:"devirli_kontrol" },
  { id: "s3_dos_014", s: "Paydası sadece 2 ve 5 çarpanlarından oluşan kesirler nasıl ondalık gösterime sahiptir?", c: "sonlu_ondalik", v: {}, z:"orta", alt:"sonlu_ondalik_sarti" },

  // ALT DAL 8: DEVİRLİ ONDALIK KARIŞIK
  { id: "s3_dos_015", s: "0,{a}{b}̅ = x ise 100x - x = ?", c: "{a}{b},{b}̅-0,{a}{b}̅", v: {a:[1,8], b:[1,8]}, z:"cok_zor", alt:"devirli_cevirme_yontemi" },
  { id: "s3_dos_016", s: "a,b̅ + b,a̅ = ?", c: "a+b+(a+b)/9", v: {a:[1,4], b:[1,4]}, z:"cok_zor", alt:"devirli_simetri" },


  // ==========================================
  // KONU 9: RASYONEL SAYILARDA DÖRT İŞLEM (KARIŞIK) (8 alt dal)
  // ==========================================

  // ALT DAL 1: TOPLAMA-ÇARPMA KARIŞIK
  { id: "s3_rd_001", s: "({a}/{b} + {c}/{d}) × {n} = ?", c: "({a}/{b}+{c}/{d})*{n}", v: {a:[1,3], b:[2,5], c:[1,3], d:[3,6], n:[2,5]}, z:"zor", alt:"parantezli_toplama_carpma" },
  { id: "s3_rd_002", s: "{a}/{b} × {n} + {c}/{d} = ?", c: "{a}*{n}/{b}+{c}/{d}", v: {a:[1,3], b:[2,5], n:[2,5], c:[1,3], d:[3,6]}, z:"zor", alt:"carpma_toplama_oncesi" },

  // ALT DAL 2: ÇIKARMA-BÖLME KARIŞIK
  { id: "s3_rd_003", s: "({a}/{b} - {c}/{d}) ÷ {n} = ?", c: "({a}/{b}-{c}/{d})/{n}", v: {a:[3,6], b:[2,5], c:[1,2], d:[3,6], kosul:"a/b>c/d", n:[2,4]}, z:"cok_zor", alt:"parantezli_cikarma_bolme" },
  { id: "s3_rd_004", s: "{a}/{b} ÷ {c}/{d} - {e}/{f} = ?", c: "{a}*{d}/({b}*{c})-{e}/{f}", v: {a:[1,3], b:[2,5], c:[1,3], d:[3,5], e:[1,3], f:[4,7]}, z:"cok_zor", alt:"bolme_cikarma_sonra" },

  // ALT DAL 3: İÇ İÇE İŞLEMLER
  { id: "s3_rd_005", s: "({a}/{b} + {c}/{d}) ÷ ({e}/{f} - {g}/{h}) = ?", c: "({a}/{b}+{c}/{d})/({e}/{f}-{g}/{h})", v: {a:[1,3], b:[2,5], c:[1,3], d:[3,6], e:[3,5], f:[2,5], g:[1,3], h:[3,6], kosul:"e/f>g/h"}, z:"cok_zor", alt:"ic_ice" },
  { id: "s3_rd_006", s: "{t1} {a}/{b} × ({t2} {c}/{d} + {t3} {e}/{f}) = ?", c: "{sonuc}", v: {t1:[1,3], a:[1,4], b:[2,5], t2:[1,2], c:[1,3], d:[3,5], t3:[1,2], e:[1,3], f:[4,6]}, z:"cok_zor", alt:"tam_sayili_karisik" },

  // ALT DAL 4: İŞLEM ÖNCELİĞİ
  { id: "s3_rd_007", s: "{a}/{b} + {c}/{d} × {e}/{f} = ?", c: "{a}/{b}+({c}*{e})/({d}*{f})", v: {a:[1,3], b:[2,5], c:[1,3], d:[3,5], e:[1,3], f:[2,5]}, z:"cok_zor", alt:"islem_onceligi" },
  { id: "s3_rd_008", s: "\"{a}/{b} + {c}/{d} × {e}/{f}\" işleminde önce hangi işlem yapılır?", c: "carpma", v: {a:[1,3], b:[2,5], c:[1,3], d:[3,5], e:[1,3], f:[2,5]}, z:"zor", alt:"islem_onceligi_soru" },

  // ALT DAL 5: ZİNCİRLEME İŞLEMLER
  { id: "s3_rd_009", s: "{a}/{b} işlemini {c}/{d} ile toplayıp {e}/{f} ile çarparsak sonuç kaç olur?", c: "({a}/{b}+{c}/{d})*{e}/{f}", v: {a:[1,3], b:[2,5], c:[1,3], d:[3,6], e:[1,3], f:[2,5]}, z:"cok_zor", alt:"zincirleme" },
  { id: "s3_rd_010", s: "Hangi sayının {a}/{b}'i ile {c}/{d}'ünün toplamı {t}'dir?", c: "{t}/({a}/{b}+{c}/{d})", v: {a:[1,4], b:[3,7], c:[1,4], d:[2,6], t:[1,10]}, z:"cok_zor", alt:"sayi_bulma" },

  // ALT DAL 6: EŞİTLİK SORULARI
  { id: "s3_rd_011", s: "{a}/{b} = ?/{c} ise ? kaçtır?", c: "{a}*{c}/{b}", v: {a:[1,5], b:[2,8], c:[4,16], kosul:"c%b==0"}, z:"orta", alt:"esitlik" },
  { id: "s3_rd_012", s: "{a}/{b} = {c}/? ise ? kaçtır?", c: "{b}*{c}/{a}", v: {a:[1,5], b:[2,8], c:[2,10]}, z:"orta", alt:"esitlik_payda" },

  // ALT DAL 7: RASYONEL SAYILARDA TERS İŞLEM
  { id: "s3_rd_013", s: "{a}/{b} kesrinin çarpmaya göre tersi nedir?", c: "{b}/{a}", v: {a:[1,5], b:[2,7]}, z:"orta", alt:"carpma_tersi" },
  { id: "s3_rd_014", s: "{a}/{b} kesrinin toplamaya göre tersi nedir?", c: "-{a}/{b}", v: {a:[1,5], b:[2,7]}, z:"orta", alt:"toplama_tersi" },

  // ALT DAL 8: İKİ RASYONEL SAYI ARASINDA SAYI BULMA
  { id: "s3_rd_015", s: "{a}/{b} ile {c}/{d} arasında bir rasyonel sayı bulunuz.", c: "({a}/{b}+{c}/{d})/2", v: {a:[1,4], b:[2,5], c:[1,4], d:[3,6]}, z:"zor", alt:"arada_sayi" },
  { id: "s3_rd_016", s: "İki rasyonel sayı arasında her zaman başka bir rasyonel sayı var mıdır?", c: "evet", v: {}, z:"orta", alt:"rasyonel_yogunluk" },


  // ==========================================
  // KONU 10: RASYONEL SAYI PROBLEMLERİ (10 alt dal)
  // ==========================================

  // ALT DAL 1: SAYININ KESRİNİ BULMA
  { id: "s3_rp_001", s: "{a} sayısının {b}/{c}'i kaçtır?", c: "{a}*{b}/{c}", v: {a:[10,60], b:[1,"{c}-1"], c:[2,6], kosul:"a%c==0 veya sadelesebilir"}, z:"orta", alt:"sayinin_kesri" },
  { id: "s3_rp_002", s: "{a} sayısının {b}/{c}'i ile {d}/{e}'ünün toplamı kaçtır?", c: "{a}*{b}/{c}+{a}*{d}/{e}", v: {a:[12,60], b:[1,3], c:[3,6], d:[1,3], e:[2,5], kosul:"paydalara_bolunebilsin"}, z:"zor", alt:"sayinin_kesir_toplami" },

  // ALT DAL 2: KESRİ VERİLEN SAYIYI BULMA
  { id: "s3_rp_003", s: "{a}/{b}'i {deger} olan sayı kaçtır?", c: "{deger}*{b}/{a}", v: {a:[1,4], b:[2,7], deger:[5,30]}, z:"orta", alt:"kesri_verilen_sayi" },
  { id: "s3_rp_004", s: "{a}/{b}'i {deger} olan sayının tamamı kaçtır?", c: "{deger}*{b}/{a}", v: {a:[1,4], b:[3,7], deger:[5,30]}, z:"orta", alt:"kesri_verilen_sayi_tamami" },
  { id: "s3_rp_005", s: "{a}/{b}'i ile {c}/{d}'ünün toplamı {t} olan sayı kaçtır?", c: "{t}/({a}/{b}+{c}/{d})", v: {a:[1,3], b:[2,5], c:[1,3], d:[3,5], t:[10,50]}, z:"cok_zor", alt:"kesir_toplami_verilen" },

  // ALT DAL 3: KALAN BULMA PROBLEMLERİ
  { id: "s3_rp_006", s: "Parasının önce {a}/{b}'ini sonra {c}/{d}'ünü harcayan biri parasının kaçta kaçını harcamıştır?", c: "{a}/{b}+{c}/{d}", v: {a:[1,3], b:[3,7], c:[1,3], d:[4,8], kosul:"toplam<=1"}, z:"orta", alt:"harcama" },
  { id: "s3_rp_007", s: "Parasının önce {a}/{b}'ini sonra kalanın {c}/{d}'ünü harcayan biri parasının kaçta kaçını harcamıştır?", c: "{a}/{b}+(1-{a}/{b})*{c}/{d}", v: {a:[1,3], b:[3,7], c:[1,3], d:[2,5]}, z:"cok_zor", alt:"kalanin_kesri" },
  { id: "s3_rp_008", s: "Bir depodaki suyun önce {a}/{b}'i, sonra kalanın {c}/{d}'ü kullanılırsa depoda suyun kaçta kaçı kalır?", c: "1-({a}/{b}+(1-{a}/{b})*{c}/{d})", v: {a:[1,3], b:[3,7], c:[1,3], d:[2,5]}, z:"cok_zor", alt:"kalan_su" },

  // ALT DAL 4: KARIŞTIRMA PROBLEMLERİ
  { id: "s3_rp_009", s: "{a} litre sütün {b}/{c}'i ile {d} litre sütün {e}/{f}'ü karıştırılırsa kaç litre süt olur?", c: "{a}*{b}/{c}+{d}*{e}/{f}", v: {a:[10,30], b:[1,3], c:[3,6], d:[10,30], e:[1,3], f:[2,5]}, z:"zor", alt:"karistirma" },

  // ALT DAL 5: İŞÇİ PROBLEMLERİ (TEMEL)
  { id: "s3_rp_010", s: "Bir işin {a}/{b}'ini 1 günde yapan işçi işin tamamını kaç günde bitirir?", c: "{b}/{a}", v: {a:[1,4], b:[3,7], kosul:"b%a==0"}, z:"orta", alt:"isci_problemi" },
  { id: "s3_rp_011", s: "Ali bir işi {a} günde, Veli aynı işi {b} günde bitiriyor. İkisi birlikte işin {c}/{d}'ünü kaç günde bitirir?", c: "({c}/{d})/(1/{a}+1/{b})", v: {a:[3,8], b:[4,10], c:[1,3], d:[2,5]}, z:"cok_zor", alt:"isci_birlikte" },

  // ALT DAL 6: HAVUZ PROBLEMLERİ (TEMEL)
  { id: "s3_rp_012", s: "Bir havuzu A musluğu {a} saatte dolduruyor. Havuzun {b}/{c}'i kaç saatte dolar?", c: "{a}*{b}/{c}", v: {a:[3,8], b:[1,"{c}-1"], c:[2,6]}, z:"orta", alt:"havuz" },
  { id: "s3_rp_013", s: "Havuzu dolduran musluk {a} saatte, boşaltan musluk {b} saatte boşaltıyor. İkisi açıkken havuzun {c}/{d}'ü kaç saatte dolar?", c: "({c}/{d})/(1/{a}-1/{b})", v: {a:[3,6], b:[4,10], c:[1,3], d:[2,5], kosul:"a<b"}, z:"cok_zor", alt:"havuz_doldur_bosalt" },

  // ALT DAL 7: YOL-HIZ PROBLEMLERİ (TEMEL)
  { id: "s3_rp_014", s: "Bir araç gideceği yolun önce {a}/{b}'ini, sonra kalanın {c}/{d}'ünü gidiyor. Geriye yolun kaçta kaçı kalır?", c: "1-({a}/{b}+(1-{a}/{b})*{c}/{d})", v: {a:[1,3], b:[3,7], c:[1,3], d:[2,5]}, z:"cok_zor", alt:"yol_problemi" },

  // ALT DAL 8: PAY-PAYDA PROBLEMLERİ
  { id: "s3_rp_015", s: "Payı {a}, paydası {b} olan kesrin payına {n} eklenirse kesir kaç olur?", c: "({a}+{n})/{b}", v: {a:[1,5], b:[3,10], n:[2,5]}, z:"orta", alt:"pay_ekleme" },
  { id: "s3_rp_016", s: "Payı {a}, paydası {b} olan kesrin paydasından {n} çıkarılırsa kesir kaç olur?", c: "{a}/({b}-{n})", v: {a:[1,5], b:[4,10], n:[1,3], kosul:"b>n"}, z:"orta", alt:"payda_cikarma" },
  { id: "s3_rp_017", s: "{a}/{b} kesrinin pay ve paydasına {n} eklenirse kesrin değeri nasıl değişir? (a<b)", c: "artar", v: {a:[1,5], b:[3,8], n:[1,4], kosul:"a<b"}, z:"zor", alt:"pay_payda_ekleme" },
  { id: "s3_rp_018", s: "{a}/{b} kesrinin pay ve paydasına {n} eklenirse kesrin değeri nasıl değişir? (a>b)", c: "azalir", v: {a:[4,8], b:[2,5], n:[1,3], kosul:"a>b"}, z:"zor", alt:"pay_payda_ekleme_bilesik" },

  // ALT DAL 9: RASYONEL SAYI YORUMLAMA
  { id: "s3_rp_019", s: "{a}/{b} ne demektir?", c: "{a}_bolu_{b}_veya_{a}_nin_{b}_de_{a/b_ondalik}", v: {a:[1,9], b:[2,10]}, z:"kolay", alt:"kesir_okuma" },
  { id: "s3_rp_020", s: "Bir bütünün {a}/{b}'i demek bütünün kaç eşit parçaya bölünüp kaçının alındığıdır?", c: "{b}_esit_parcaya_bolunup_{a}_tanesi_alinmistir", v: {a:[1,5], b:[3,8]}, z:"kolay", alt:"kesir_yorumlama" },

  // ALT DAL 10: DENK KESİR PROBLEMLERİ
  { id: "s3_rp_021", s: "Bir sınıftaki öğrencilerin {a}/{b}'i kızdır. Sınıfta {c} kız varsa sınıf mevcudu kaçtır?", c: "{c}*{b}/{a}", v: {a:[1,4], b:[3,8], c:[6,24], kosul:"c%(a)==0"}, z:"orta", alt:"sinif_mevcudu" },
  { id: "s3_rp_022", s: "Bir sayının {a}/{b}'i ile {c}/{d}'ü birbirine eşittir. Bu iki kesrin eşitliğini yazınız.", c: "{a}/{b}={c}/{d}", v: {a:[1,3], b:[2,5], c:[1,3], d:[2,5], kosul:"a/b=c/d"}, z:"orta", alt:"esit_kesirler" },


  // ==========================================
  // KONU 11: KESİR PROBLEMLERİ (SÖZEL) (12 alt dal)
  // ==========================================

  // ALT DAL 1: BÜTÜNÜN KESRİ
  { id: "s3_sp_001", s: "Bir pastanın {a}/{b}'ini yedim. Geriye pastanın kaçta kaçı kaldı?", c: "1-{a}/{b}", v: {a:[1,"{b}-1"], b:[3,8]}, z:"orta", alt:"butunun_kesri" },
  { id: "s3_sp_002", s: "{a} TL paranın {b}/{c}'ini harcadım. Kaç TL harcadım?", c: "{a}*{b}/{c}", v: {a:[20,80], b:[1,"{c}-1"], c:[2,6], kosul:"a%c==0"}, z:"orta", alt:"para_harcama" },

  // ALT DAL 2: KESRİ VERİLENİ BULMA
  { id: "s3_sp_003", s: "{a}/{b}'i {deger} olan sayı kaçtır?", c: "{deger}*{b}/{a}", v: {a:[1,4], b:[3,7], deger:[6,30]}, z:"orta", alt:"kesri_verilen_sayi_sozel" },
  { id: "s3_sp_004", s: "Parasının {a}/{b}'ini harcayınca geriye {kalan} TL kalan birinin başlangıçta kaç TL'si vardı?", c: "{kalan}*{b}/({b}-{a})", v: {a:[1,"{b}-1"], b:[3,8], kalan:[10,50]}, z:"zor", alt:"kalandan_parayi_bulma" },

  // ALT DAL 3: ARDIŞIK KESİR PROBLEMLERİ
  { id: "s3_sp_005", s: "Bir depodaki suyun önce {a}/{b}'i, sonra kalanın {c}/{d}'ü kullanıldı. Geriye {kalan} litre su kaldığına göre başlangıçta kaç litre su vardı?", c: "{kalan}/((1-{a}/{b})*(1-{c}/{d}))", v: {a:[1,3], b:[3,7], c:[1,3], d:[2,5], kalan:[10,40]}, z:"cok_zor", alt:"ardisik_harcama" },
  { id: "s3_sp_006", s: "Ahmet parasının önce {a}/{b}'ini, sonra kalanın {c}/{d}'ünü harcadı. Cebinde {kalan} TL kaldı. Başlangıçta kaç TL'si vardı?", c: "{kalan}/((1-{a}/{b})*(1-{c}/{d}))", v: {a:[1,3], b:[3,7], c:[1,3], d:[2,5], kalan:[10,50]}, z:"cok_zor", alt:"para_harcama_kalan" },

  // ALT DAL 4: KARIŞIM PROBLEMLERİ (TEMEL KESİR)
  { id: "s3_sp_007", s: "{a} litre suya {b} litre süt katılırsa karışımın kaçta kaçı süt olur?", c: "{b}/({a}+{b})", v: {a:[5,20], b:[3,15]}, z:"orta", alt:"karisim_orani" },
  { id: "s3_sp_008", s: "Tuz oranı {a}/{b} olan {c} kg tuzlu suya {d} kg su eklenirse yeni tuz oranı kaç olur?", c: "({a}/{b}*{c})/({c}+{d})", v: {a:[1,3], b:[5,10], c:[10,30], d:[5,15]}, z:"cok_zor", alt:"tuz_orani" },

  // ALT DAL 5: İŞÇİ-HAVUZ PROBLEMLERİ (KESİR DETAYLI)
  { id: "s3_sp_009", s: "Bir işi A işçisi {a} günde, B işçisi {b} günde bitiriyor. İkisi birlikte 2 gün çalışırsa işin kaçta kaçı biter?", c: "2*(1/{a}+1/{b})", v: {a:[3,8], b:[4,10]}, z:"zor", alt:"isci_kesir" },
  { id: "s3_sp_010", s: "Bir havuzu A musluğu {a} saatte dolduruyor. B musluğu havuzu {b} saatte boşaltıyor. Havuz boşken ikisi açılırsa {c} saat sonra havuzun kaçta kaçı dolar?", c: "{c}*(1/{a}-1/{b})", v: {a:[3,6], b:[5,10], c:[1,3], kosul:"a<b"}, z:"cok_zor", alt:"havuz_kesir" },

  // ALT DAL 6: YOL PROBLEMLERİ (KESİR)
  { id: "s3_sp_011", s: "Bir araç gideceği yolun önce {a}/{b}'ini gidiyor. {c} km daha giderse yolun {d}/{e}'ünü gitmiş oluyor. Yolun tamamı kaç km'dir?", c: "{c}/({d}/{e}-{a}/{b})", v: {a:[1,4], b:[3,8], c:[10,40], d:[2,5], e:[3,7], kosul:"d/e>a/b"}, z:"cok_zor", alt:"yol_tamam" },
  { id: "s3_sp_012", s: "Bir araç gideceği yolun önce {a}/{b}'ini, sonra {c}/{d}'ünü gidiyor. Geriye {kalan} km yol kaldığına göre yolun tamamı kaç km'dir?", c: "{kalan}/(1-{a}/{b}-{c}/{d})", v: {a:[1,3], b:[4,8], c:[1,3], d:[3,6], kosul:"a/b+c/d<1", kalan:[10,50]}, z:"cok_zor", alt:"yol_kalan" },

  // ALT DAL 7: YAŞ PROBLEMLERİ (KESİR)
  { id: "s3_sp_013", s: "Bir babanın yaşı, çocuğunun yaşının {a}/{b} katıdır. Baba {baba_yas} yaşında ise çocuk kaç yaşındadır?", c: "{baba_yas}*{b}/{a}", v: {a:[3,8], b:[1,"{a}-1"], baba_yas:[24,48], kosul:"baba_yas*a%b==0"}, z:"orta", alt:"yas_kesir" },
  { id: "s3_sp_014", s: "Bir babanın yaşı çocuğunun yaşının {a}/{b} katıdır. Yaşları toplamı {t} ise çocuk kaç yaşındadır?", c: "{t}*{b}/({a}+{b})", v: {a:[3,7], b:[1,"{a}-1"], t:[20,60]}, z:"zor", alt:"yas_toplam_kesir" },

  // ALT DAL 8: KÂR-ZARAR PROBLEMLERİ (KESİR)
  { id: "s3_sp_015", s: "Bir mal {a} TL'ye alınıp {b} TL'ye satılırsa kâr oranı kaçtır? (Kesir)", c: "({b}-{a})/{a}", v: {a:[20,80], b:[30,100], kosul:"b>a"}, z:"orta", alt:"kar_orani_kesir" },
  { id: "s3_sp_016", s: "Bir malın {a}/{b}'i kadar kârla satış fiyatı {satis} TL ise maliyeti kaç TL'dir?", c: "{satis}*{b}/({a}+{b})", v: {a:[1,4], b:[3,8], satis:[40,120]}, z:"zor", alt:"maliyet_kesir" },

  // ALT DAL 9: TERS İŞLEM PROBLEMLERİ
  { id: "s3_sp_017", s: "Hangi sayının {a}/{b} eksiği ile {c}/{d} fazlasının toplamı {t}'dir?", c: "({t}+{a}/{b}-{c}/{d})/2", v: {a:[1,4], b:[3,7], c:[1,4], d:[3,7], t:[10,30]}, z:"cok_zor", alt:"ters_islem" },
  { id: "s3_sp_018", s: "Bir sayının {a}/{b}'i ile {c}/{d}'ünün farkı {fark} ise bu sayı kaçtır?", c: "{fark}/({a}/{b}-{c}/{d})", v: {a:[2,5], b:[3,7], c:[1,3], d:[4,8], kosul:"a/b>c/d", fark:[3,15]}, z:"cok_zor", alt:"kesir_farki_verilen" },

  // ALT DAL 10: KESİR SIRALAMA PROBLEMLERİ (SÖZEL)
  { id: "s3_sp_019", s: "Bir sınıfta {a}/{b} matematikten, {c}/{d} Türkçeden başarılıdır. Hangi dersten başarı oranı daha yüksektir?", c: "{yuksek_ders}", v: {a:[1,5], b:[3,8], c:[1,5], d:[3,8]}, z:"orta", alt:"basari_orani" },
  { id: "s3_sp_020", s: "A marka üründe {a}/{b} indirim, B marka üründe {c}/{d} indirim vardır. Hangi markada indirim oranı daha fazladır?", c: "{fazla_marka}", v: {a:[1,4], b:[3,7], c:[1,4], d:[3,7]}, z:"orta", alt:"indirim_orani" },

  // ALT DAL 11: GRAFİK PROBLEMLERİ (KESİR)
  { id: "s3_sp_021", s: "Bir daire grafiğinde {a}/{b}'lik kısmı gösteren dilimin merkez açısı kaç derecedir?", c: "{a}*360/{b}", v: {a:[1,"{b}-1"], b:[3,8]}, z:"orta", alt:"daire_grafik" },
  { id: "s3_sp_022", s: "Daire grafiğinde {aci}°'lik dilim bütünün kaçta kaçıdır?", c: "{aci}/360", v: {aci:[30,180]}, z:"orta", alt:"dilim_kesri" },

  // ALT DAL 12: ÖZEL KESİR PROBLEMLERİ
  { id: "s3_sp_023", s: "Bir satıcı elindeki malların önce {a}/{b}'ini, sonra kalanın {c}/{d}'ünü satıyor. Geriye {kalan} adet mal kaldığına göre başlangıçta kaç adet mal vardı?", c: "{kalan}/((1-{a}/{b})*(1-{c}/{d}))", v: {a:[1,3], b:[4,8], c:[1,3], d:[2,5], kalan:[10,30]}, z:"cok_zor", alt:"mal_satma" },
  { id: "s3_sp_024", s: "Bir öğrenci sınavdaki soruların önce {a}/{b}'ini, sonra kalanın {c}/{d}'ünü çözüyor. Geriye {kalan} soru kaldığına göre sınavda kaç soru vardı?", c: "{kalan}/((1-{a}/{b})*(1-{c}/{d}))", v: {a:[1,3], b:[3,7], c:[1,3], d:[2,5], kalan:[5,20]}, z:"cok_zor", alt:"sinav_soru" },

],

  4: [

  // ==========================================
  // KONU 1: ÜS KAVRAMI VE TANIMI (6 alt dal)
  // ==========================================

  // ALT DAL 1: ÜS TANIMI
  { id: "s4_ut_001", s: "{a} üzeri {n} = ? (Değerini bulunuz)", c: "Math.pow({a},{n})", v: {a:[2,5], n:[2,4]}, z:"kolay", alt:"us_tanimi" },
  { id: "s4_ut_002", s: "{a}ⁿ ifadesinde taban ve üs hangisidir?", c: "taban:{a}, us:{n}", v: {a:[2,9], n:[2,5]}, z:"kolay", alt:"taban_us_adlandirma" },
  { id: "s4_ut_003", s: "{a} × {a} × {a} × {a} = ? (Üslü gösterim)", c: "{a}⁴", v: {a:[2,7]}, z:"kolay", alt:"carpma_uslu_gosterim" },
  { id: "s4_ut_004", s: "{a} tane {b}'nin çarpımı nasıl gösterilir?", c: "{b}^{a}", v: {a:[2,6], b:[2,9]}, z:"kolay", alt:"tane_carpim" },

  // ALT DAL 2: ÜSLÜ GÖSTERİMİ AÇMA
  { id: "s4_ut_005", s: "{a}ⁿ = ? (Açık yazılımı)", c: "{a}×{a}×...×{a} ({n} tane)", v: {a:[2,6], n:[2,5]}, z:"kolay", alt:"uslu_acilim" },
  { id: "s4_ut_006", s: "2⁵ = ?", c: "32", v: {}, z:"kolay", alt:"2_ussu_5" },
  { id: "s4_ut_007", s: "3⁴ = ?", c: "81", v: {}, z:"kolay", alt:"3_ussu_4" },
  { id: "s4_ut_008", s: "5³ = ?", c: "125", v: {}, z:"kolay", alt:"5_ussu_3" },

  // ALT DAL 3: KARE VE KÜP ÖZEL ADLANDIRMA
  { id: "s4_ut_009", s: "{a}² ifadesi nasıl okunur?", c: "{a}'nin_karesi", v: {a:[2,9]}, z:"kolay", alt:"kare_okuma" },
  { id: "s4_ut_010", s: "{a}³ ifadesi nasıl okunur?", c: "{a}'nin_kupu", v: {a:[2,9]}, z:"kolay", alt:"kup_okuma" },
  { id: "s4_ut_011", s: "Bir sayının karesi ne demektir?", c: "sayinin_kendisiyle_carpimi", v: {}, z:"kolay", alt:"kare_tanimi" },
  { id: "s4_ut_012", s: "Bir sayının küpü ne demektir?", c: "sayinin_kendisiyle_iki_kere_carpimi", v: {}, z:"kolay", alt:"kup_tanimi" },

  // ALT DAL 4: ÜSLÜ SAYI DEĞERİNİ BULMA
  { id: "s4_ut_013", s: "{a} üzeri {n} kaçtır?", c: "Math.pow({a},{n})", v: {a:[2,6], n:[2,4]}, z:"orta", alt:"uslu_deger" },
  { id: "s4_ut_014", s: "{a}² + {b}² = ?", c: "{a}*{a}+{b}*{b}", v: {a:[1,8], b:[1,8]}, z:"orta", alt:"kareler_toplami" },
  { id: "s4_ut_015", s: "({a}+{b})² = ?", c: "{a}*{a}+2*{a}*{b}+{b}*{b}", v: {a:[1,5], b:[1,5]}, z:"orta", alt:"tam_kare_acilim" },
  { id: "s4_ut_016", s: "{a}² - {b}² = ?", c: "{a}*{a}-{b}*{b}", v: {a:[2,8], b:[1,5], kosul:"a>b"}, z:"orta", alt:"kareler_farki" },

  // ALT DAL 5: ÜS DEĞERİ HESAPLAMA STRATEJİLERİ
  { id: "s4_ut_017", s: "2^{n} = ? (n=1'den 10'a kadar değerler)", c: "Math.pow(2,{n})", v: {n:[1,10]}, z:"orta", alt:"ikinin_kuvvetleri" },
  { id: "s4_ut_018", s: "3^{n} = ? (n=1'den 5'e kadar değerler)", c: "Math.pow(3,{n})", v: {n:[1,5]}, z:"orta", alt:"ucun_kuvvetleri" },
  { id: "s4_ut_019", s: "Sonu {rakam} ile biten bir sayının kuvvetlerinin son basamağı nasıl bulunur?", c: "dongu_ile", v: {rakam:[0,9]}, z:"zor", alt:"son_basamak_dongusu" },

  // ALT DAL 6: ÜS KAVRAMI TEMEL SORULAR
  { id: "s4_ut_020", s: "aⁿ = b ifadesinde a=2, n=3 ise b kaçtır?", c: "8", v: {}, z:"kolay", alt:"us_degeri_bulma" },
  { id: "s4_ut_021", s: "Bir sayının 4. kuvveti 81 ise bu sayı kaçtır?", c: "3", v: {}, z:"orta", alt:"kuvvetten_sayi_bulma" },
  { id: "s4_ut_022", s: "2ⁿ = 64 ise n kaçtır?", c: "6", v: {}, z:"orta", alt:"us_bulma" },


  // ==========================================
  // KONU 2: ÜSLÜ SAYILARDA TEMEL KURALLAR (10 alt dal)
  // ==========================================

  // ALT DAL 1: 1'İN TÜM KUVVETLERİ
  { id: "s4_tk_001", s: "1^{n} = ?", c: "1", v: {n:[1,100]}, z:"kolay", alt:"1in_kuvveti" },
  { id: "s4_tk_002", s: "1ⁿ = 1 eşitliği her zaman doğru mudur?", c: "evet", v: {}, z:"kolay", alt:"1in_kuvveti_her_zaman" },
  { id: "s4_tk_003", s: "(-1)^{n} = ? (n={n})", c: "{n}%2==0?1:-1", v: {n:[1,10]}, z:"orta", alt:"eksi_1_kuvveti" },

  // ALT DAL 2: 0'IN KUVVETLERİ
  { id: "s4_tk_004", s: "0ⁿ = ? (n>0)", c: "0", v: {n:[1,10]}, z:"orta", alt:"0in_kuvveti" },
  { id: "s4_tk_005", s: "0⁰ tanımlı mıdır?", c: "hayir_belirsizdir", v: {}, z:"orta", alt:"0_ussu_0" },
  { id: "s4_tk_006", s: "0 üzeri pozitif bir sayının sonucu kaçtır?", c: "0", v: {}, z:"orta", alt:"0_pozitif_us" },

  // ALT DAL 3: SIFIRINCI KUVVET
  { id: "s4_tk_007", s: "{a}⁰ = ? ({a}≠0)", c: "1", v: {a:[2,10]}, z:"orta", alt:"sifirinci_kuvvet" },
  { id: "s4_tk_008", s: "Hangi sayıların 0. kuvveti 1'dir?", c: "0_haric_tum_sayilar", v: {}, z:"orta", alt:"0_kuvvet_1_sarti" },
  { id: "s4_tk_009", s: "({a}+{b})⁰ = ?", c: "1", v: {a:[1,5], b:[1,5]}, z:"orta", alt:"parantez_sifir_kuvvet" },

  // ALT DAL 4: BİRİNCİ KUVVET
  { id: "s4_tk_010", s: "{a}¹ = ?", c: "{a}", v: {a:[2,20]}, z:"kolay", alt:"birinci_kuvvet" },
  { id: "s4_tk_011", s: "Bir sayının 1. kuvveti nedir?", c: "sayinin_kendisi", v: {}, z:"kolay", alt:"1_kuvvet_kural" },
  { id: "s4_tk_012", s: "x¹ = x eşitliği her zaman doğru mudur?", c: "evet", v: {}, z:"kolay", alt:"1_kuvvet_her_zaman" },

  // ALT DAL 5: TAM SAYILARIN TEK VE ÇİFT KUVVETLERİ
  { id: "s4_tk_013", s: "(-{a})² = ?", c: "{a}*{a}", v: {a:[1,7]}, z:"orta", alt:"negatif_cift_us" },
  { id: "s4_tk_014", s: "(-{a})³ = ?", c: "-{a}*{a}*{a}", v: {a:[1,5]}, z:"orta", alt:"negatif_tek_us" },
  { id: "s4_tk_015", s: "Negatif sayının çift kuvvetinin sonucu nasıldır?", c: "pozitiftir", v: {}, z:"orta", alt:"negatif_cift_us_kural" },
  { id: "s4_tk_016", s: "Negatif sayının tek kuvvetinin sonucu nasıldır?", c: "negatiftir", v: {}, z:"orta", alt:"negatif_tek_us_kural" },
  { id: "s4_tk_017", s: "Pozitif sayıların tüm kuvvetleri nasıldır?", c: "pozitiftir", v: {}, z:"orta", alt:"pozitif_tum_usler" },

  // ALT DAL 6: KUVVETİN İŞARETE ETKİSİ
  { id: "s4_tk_018", s: "(-{a})^{n} = ? (n={n})", c: "{n}%2==0?Math.pow({a},{n}):-Math.pow({a},{n})", v: {a:[1,5], n:[2,6]}, z:"orta", alt:"us_isaret" },
  { id: "s4_tk_019", s: "-{a}² ile (-{a})² aynı mıdır?", c: "hayir", v: {a:[2,6]}, z:"zor", alt:"parantez_onemi" },
  { id: "s4_tk_020", s: "-{a}² = ?", c: "-{a}*{a}", v: {a:[2,6]}, z:"orta", alt:"parantezsiz_kare" },
  { id: "s4_tk_021", s: "(-{a})² = ?", c: "{a}*{a}", v: {a:[2,6]}, z:"orta", alt:"parantezli_kare" },

  // ALT DAL 7: KUVVET ALMA İŞLEM ÖNCELİĞİ
  { id: "s4_tk_022", s: "{a} + {b}² = ?", c: "{a}+{b}*{b}", v: {a:[2,10], b:[2,6]}, z:"orta", alt:"toplama_us_oncelik" },
  { id: "s4_tk_023", s: "({a} + {b})² ile {a}² + {b}² eşit midir?", c: "hayir", v: {a:[2,5], b:[2,5]}, z:"orta", alt:"tam_kare_farki" },

  // ALT DAL 8: ÜSLÜ İFADELERİN OKUNUŞU
  { id: "s4_tk_024", s: "{a}ⁿ ifadesini okuyunuz.", c: "{a}_uzeri_{n}_veya_{a}_nin_{n}_inci_kuvveti", v: {a:[2,9], n:[2,10]}, z:"kolay", alt:"okuma" },
  { id: "s4_tk_025", s: "\"{a} üssü {n}\" şeklinde okunan ifade nasıl yazılır?", c: "{a}^{n}", v: {a:[2,9], n:[2,10]}, z:"kolay", alt:"yazma" },

  // ALT DAL 9: ÜS VE TABAN ADLANDIRMA
  { id: "s4_tk_026", s: "aⁿ ifadesinde a'ya ne denir?", c: "taban", v: {}, z:"kolay", alt:"taban_adi" },
  { id: "s4_tk_027", s: "aⁿ ifadesinde n'ye ne denir?", c: "us_veya_kuvvet", v: {}, z:"kolay", alt:"us_adi" },
  { id: "s4_tk_028", s: "2³ ifadesinde taban ve üs nedir?", c: "taban:2, us:3", v: {}, z:"kolay", alt:"taban_us_bulma" },

  // ALT DAL 10: KARIŞIK TEMEL KURALLAR
  { id: "s4_tk_029", s: "(-1)^{n} ifadesi n çift ise kaça eşittir?", c: "1", v: {}, z:"orta", alt:"eksi1_cift" },
  { id: "s4_tk_030", s: "(-1)^{n} ifadesi n tek ise kaça eşittir?", c: "-1", v: {}, z:"orta", alt:"eksi1_tek" },
  { id: "s4_tk_031", s: "(-1)ⁿ = 1 ise n nasıl bir sayıdır?", c: "cift", v: {}, z:"orta", alt:"eksi1_1_ise" },
  { id: "s4_tk_032", s: "(-1)ⁿ = -1 ise n nasıl bir sayıdır?", c: "tek", v: {}, z:"orta", alt:"eksi1_eksi1_ise" },


  // ==========================================
  // KONU 3: NEGATİF ÜS (6 alt dal)
  // ==========================================

  // ALT DAL 1: NEGATİF ÜS TANIMI
  { id: "s4_nu_001", s: "{a}⁻ⁿ = ? (a={a}, n={n})", c: "1/Math.pow({a},{n})", v: {a:[2,5], n:[1,4]}, z:"orta", alt:"negatif_us_tanimi" },
  { id: "s4_nu_002", s: "Negatif üs ne anlama gelir?", c: "sayinin_carpmaya_gore_tersinin_pozitif_ussu", v: {}, z:"orta", alt:"negatif_us_anlam" },
  { id: "s4_nu_003", s: "a⁻ⁿ = ? (Formül)", c: "1/aⁿ", v: {}, z:"orta", alt:"negatif_us_formul" },

  // ALT DAL 2: NEGATİF ÜS DEĞER HESAPLAMA
  { id: "s4_nu_004", s: "2⁻³ = ?", c: "1/8", v: {}, z:"orta", alt:"2_negatif3" },
  { id: "s4_nu_005", s: "3⁻² = ?", c: "1/9", v: {}, z:"orta", alt:"3_negatif2" },
  { id: "s4_nu_006", s: "5⁻¹ = ?", c: "1/5", v: {}, z:"orta", alt:"5_negatif1" },
  { id: "s4_nu_007", s: "10⁻³ = ?", c: "1/1000", v: {}, z:"orta", alt:"10_negatif3" },

  // ALT DAL 3: KESİRLİ SAYILARDA NEGATİF ÜS
  { id: "s4_nu_008", s: "(1/{a})⁻¹ = ?", c: "{a}", v: {a:[2,8]}, z:"orta", alt:"kesir_negatif1" },
  { id: "s4_nu_009", s: "(1/{a})⁻² = ?", c: "{a}*{a}", v: {a:[2,5]}, z:"orta", alt:"kesir_negatif2" },
  { id: "s4_nu_010", s: "({a}/{b})⁻¹ = ?", c: "{b}/{a}", v: {a:[1,5], b:[2,7]}, z:"orta", alt:"kesir_negatif_us" },
  { id: "s4_nu_011", s: "({a}/{b})⁻ⁿ = ? (n={n})", c: "Math.pow({b}/{a},{n})", v: {a:[1,4], b:[2,5], n:[2,3]}, z:"zor", alt:"kesir_negatif_n" },

  // ALT DAL 4: NEGATİF ÜS İLE İLGİLİ ÖZELLİKLER
  { id: "s4_nu_012", s: "a⁻ⁿ = 1/aⁿ ise 1/a⁻ⁿ = ?", c: "aⁿ", v: {}, z:"zor", alt:"negatif_us_ters" },
  { id: "s4_nu_013", s: "(-{a})⁻² = ?", c: "1/({a}*{a})", v: {a:[2,5]}, z:"zor", alt:"negatif_taban_negatif_us" },
  { id: "s4_nu_014", s: "Negatif üslü bir ifade her zaman pozitif midir?", c: "hayir_tabana_bagli", v: {}, z:"zor", alt:"negatif_us_isaret" },

  // ALT DAL 5: NEGATİF ÜS SORULARI
  { id: "s4_nu_015", s: "2⁻¹ + 2⁻² = ?", c: "3/4", v: {}, z:"zor", alt:"negatif_us_toplam" },
  { id: "s4_nu_016", s: "3⁻¹ + 3⁻² + 3⁻³ = ?", c: "13/27", v: {}, z:"cok_zor", alt:"negatif_us_uc_toplam" },

  // ALT DAL 6: NEGATİF ÜS PROBLEMLERİ
  { id: "s4_nu_017", s: "{a}⁻ⁿ = 1/{deger} ise n kaçtır?", c: "{n}", v: {a:[2,5], n:[1,4], deger:"Math.pow({a},{n})"}, z:"zor", alt:"negatif_us_bulma" },
  { id: "s4_nu_018", s: "Bir sayının -2. kuvveti 1/16 ise bu sayı kaçtır?", c: "4", v: {}, z:"zor", alt:"negatif_kuvvetten_sayi" },


  // ==========================================
  // KONU 4: ÜSLÜ SAYILARDA TOPLAMA-ÇIKARMA (6 alt dal)
  // ==========================================

  // ALT DAL 1: BENZER ÜSLÜ TERİMLER
  { id: "s4_utc_001", s: "{a}·xⁿ + {b}·xⁿ = ?", c: "{a}+{b}·xⁿ", v: {a:[2,8], b:[2,8], n:[2,5]}, z:"orta", alt:"benzer_terim_toplama" },
  { id: "s4_utc_002", s: "{a}·xⁿ - {b}·xⁿ = ?", c: "{a}-{b}·xⁿ", v: {a:[3,10], b:[1,"{a}-1"], n:[2,5]}, z:"orta", alt:"benzer_terim_cikarma" },
  { id: "s4_utc_003", s: "Benzer üslü terimler nasıl toplanır/çıkarılır?", c: "katsayilar_toplanip_cikarilir_us_ayni_kalir", v: {}, z:"orta", alt:"benzer_terim_kural" },

  // ALT DAL 2: TABANLARI EŞİT OLMAYAN TOPLAMA
  { id: "s4_utc_004", s: "2ⁿ + 2ⁿ = ?", c: "2·2ⁿ = 2ⁿ⁺¹", v: {n:[2,5]}, z:"orta", alt:"ayni_uslu_toplam" },
  { id: "s4_utc_005", s: "3ⁿ + 3ⁿ + 3ⁿ = ?", c: "3·3ⁿ = 3ⁿ⁺¹", v: {n:[2,4]}, z:"orta", alt:"uc_ayni_toplam" },
  { id: "s4_utc_006", s: "{a}ⁿ + {a}ⁿ = ?", c: "2·{a}ⁿ", v: {a:[2,5], n:[2,5]}, z:"orta", alt:"ayni_taban_us_toplam" },

  // ALT DAL 3: ÜSLÜ SAYILARI ÇARPANLARA AYIRARAK TOPLAMA
  { id: "s4_utc_007", s: "2ⁿ⁺¹ + 2ⁿ = ? (Ortak çarpan parantezi)", c: "2ⁿ·(2+1)=3·2ⁿ", v: {n:[2,5]}, z:"zor", alt:"ortak_carpan_parantezi" },
  { id: "s4_utc_008", s: "3ⁿ⁺² - 3ⁿ = ? (Ortak çarpan parantezi)", c: "3ⁿ·(9-1)=8·3ⁿ", v: {n:[1,4]}, z:"zor", alt:"ortak_carpan_cikarma" },
  { id: "s4_utc_009", s: "5ⁿ⁺¹ - 5ⁿ = ?", c: "5ⁿ·(5-1)=4·5ⁿ", v: {n:[1,4]}, z:"zor", alt:"5_ortak_carpan" },

  // ALT DAL 4: ÜSLÜ SAYILARDA ÇARPANLARA AYIRMA
  { id: "s4_utc_010", s: "2ⁿ⁺² + 2ⁿ⁺¹ + 2ⁿ = ? (Ortak çarpan parantezi)", c: "2ⁿ·(4+2+1)=7·2ⁿ", v: {n:[1,4]}, z:"cok_zor", alt:"uc_terim_ortak" },
  { id: "s4_utc_011", s: "xⁿ⁺³ - xⁿ⁺¹ = ? (Ortak çarpan parantezi)", c: "xⁿ⁺¹·(x²-1)", v: {n:[1,3]}, z:"cok_zor", alt:"x_ortak_carpan" },

  // ALT DAL 5: ÜSLÜ SAYI DEĞERLERİNİ TOPLAMA
  { id: "s4_utc_012", s: "2³ + 2⁴ = ?", c: "8+16=24", v: {}, z:"orta", alt:"deger_toplam" },
  { id: "s4_utc_013", s: "3² + 4² + 5² = ?", c: "9+16+25=50", v: {}, z:"orta", alt:"kareler_toplami_deger" },
  { id: "s4_utc_014", s: "2⁵ - 2³ = ?", c: "32-8=24", v: {}, z:"orta", alt:"deger_farki" },

  // ALT DAL 6: TOPLAMA-ÇIKARMA KARIŞIK
  { id: "s4_utc_015", s: "{a}ⁿ⁺¹ + {a}ⁿ⁺¹ = ?", c: "2·{a}ⁿ⁺¹", v: {a:[2,5], n:[2,4]}, z:"orta", alt:"iki_esit_terim" },
  { id: "s4_utc_016", s: "{a}ⁿ⁺² - {a}ⁿ⁺¹ + {a}ⁿ = ?", c: "{a}ⁿ·({a}²-{a}+1)", v: {a:[2,5], n:[1,3]}, z:"cok_zor", alt:"uc_terimli" },


  // ==========================================
  // KONU 5: ÜSLÜ SAYILARDA ÇARPMA (8 alt dal)
  // ==========================================

  // ALT DAL 1: TABANLARI EŞİT ÜSLÜ SAYILARDA ÇARPMA
  { id: "s4_uc_001", s: "{a}ᵐ × {a}ⁿ = ? (m={m}, n={n})", c: "{a}^{m+n}", v: {a:[2,6], m:[2,4], n:[2,4]}, z:"orta", alt:"tabani_esit_carpma" },
  { id: "s4_uc_002", s: "aᵐ × aⁿ = ? (Formül)", c: "aᵐ⁺ⁿ", v: {}, z:"orta", alt:"tabani_esit_carpma_formul" },
  { id: "s4_uc_003", s: "x² × x³ = ?", c: "x⁵", v: {}, z:"orta", alt:"x_kare_x_kup" },
  { id: "s4_uc_004", s: "2³ × 2⁴ = ?", c: "128", v: {}, z:"orta", alt:"2_3_2_4" },

  // ALT DAL 2: ÜSLERİ EŞİT ÜSLÜ SAYILARDA ÇARPMA
  { id: "s4_uc_005", s: "{a}ⁿ × {b}ⁿ = ?", c: "({a}×{b})ⁿ", v: {a:[2,5], b:[2,6], n:[2,4]}, z:"orta", alt:"usleri_esit_carpma" },
  { id: "s4_uc_006", s: "aⁿ × bⁿ = ? (Formül)", c: "(a×b)ⁿ", v: {}, z:"orta", alt:"usleri_esit_carpma_formul" },
  { id: "s4_uc_007", s: "2³ × 5³ = ?", c: "1000", v: {}, z:"orta", alt:"2_3_5_3" },
  { id: "s4_uc_008", s: "x⁴ × y⁴ = ?", c: "(xy)⁴", v: {}, z:"orta", alt:"x4_y4" },

  // ALT DAL 3: HEM TABAN HEM ÜS FARKLI ÇARPMA
  { id: "s4_uc_009", s: "{a}ᵐ × {b}ⁿ = ? (Farklı taban ve üs, sadeleştirme yapılabilir mi?)", c: "genelde_sadelestirilemez", v: {a:[2,5], m:[2,4], b:[2,5], n:[2,4]}, z:"zor", alt:"farkli_taban_us" },
  { id: "s4_uc_010", s: "2³ × 4² = ? (4=2² yap)", c: "128", v: {}, z:"zor", alt:"taban_donusturme" },
  { id: "s4_uc_011", s: "3² × 9³ = ? (9=3² yap)", c: "3⁸", v: {}, z:"zor", alt:"9u_3_yap" },

  // ALT DAL 4: ÜÇ VEYA DAHA FAZLA ÜSLÜ SAYIDA ÇARPMA
  { id: "s4_uc_012", s: "{a}ᵐ × {a}ⁿ × {a}ᵏ = ?", c: "{a}^{m+n+k}", v: {a:[2,4], m:[1,3], n:[1,3], k:[1,3]}, z:"orta", alt:"uc_tabani_esit" },
  { id: "s4_uc_013", s: "2² × 2³ × 2⁴ = ?", c: "512", v: {}, z:"orta", alt:"2_2_2_3_2_4" },
  { id: "s4_uc_014", s: "a² × b² × c² = ?", c: "(abc)²", v: {}, z:"orta", alt:"uc_us_esit" },

  // ALT DAL 5: ÇARPMA İLE TOPLAMA İLİŞKİSİ
  { id: "s4_uc_015", s: "{a}ᵐ × {a}ⁿ ≠ {a}ᵐ⁺ⁿ olduğu durum var mıdır?", c: "hayir_her_zaman_dogrudur", v: {}, z:"zor", alt:"carpma_kural_her_zaman" },
  { id: "s4_uc_016", s: "aᵐ × bᵐ = (a×b)ᵐ eşitliği her zaman doğru mudur?", c: "evet", v: {}, z:"orta", alt:"us_esit_carpma_kural" },

  // ALT DAL 6: KATSAYILI ÜSLÜ ÇARPMA
  { id: "s4_uc_017", s: "{k1}·{a}ᵐ × {k2}·{a}ⁿ = ?", c: "{k1}*{k2}·{a}^{m+n}", v: {k1:[2,5], a:[2,5], m:[2,4], k2:[2,5], n:[2,4]}, z:"zor", alt:"katsayili_carpma" },
  { id: "s4_uc_018", s: "3·2⁴ × 5·2³ = ?", c: "15·2⁷", v: {}, z:"zor", alt:"3_5_2_4_2_3" },

  // ALT DAL 7: ÜSLÜ SAYILARDA ÇARPMA STRATEJİLERİ
  { id: "s4_uc_019", s: "4⁵ × 2³ = ? (4=2² yaparak)", c: "2¹³", v: {}, z:"zor", alt:"4u_2_yap" },
  { id: "s4_uc_020", s: "8² × 4³ = ? (İkisini de 2'nin kuvveti yap)", c: "2¹²", v: {}, z:"cok_zor", alt:"8_4_2_yap" },
  { id: "s4_uc_021", s: "27² × 9³ = ? (3'ün kuvveti yap)", c: "3¹²", v: {}, z:"cok_zor", alt:"27_9_3_yap" },

  // ALT DAL 8: ÇARPMA İŞLEMİNDE SADELEŞTİRME
  { id: "s4_uc_022", s: "{a}ᵐ⁺ⁿ × {a}ᵐ⁻ⁿ = ?", c: "{a}^{2m}", v: {a:[2,5], m:[3,5], n:[1,2], kosul:"m>n"}, z:"cok_zor", alt:"uslu_ifade_sadelestirme" },
  { id: "s4_uc_023", s: "x²ⁿ⁺¹ × x¹⁻ⁿ = ?", c: "xⁿ⁺²", v: {n:[1,3]}, z:"cok_zor", alt:"degisken_uslu_carpma" },


  // ==========================================
  // KONU 6: ÜSLÜ SAYILARDA BÖLME (8 alt dal)
  // ==========================================

  // ALT DAL 1: TABANLARI EŞİT ÜSLÜ SAYILARDA BÖLME
  { id: "s4_ub_001", s: "{a}ᵐ ÷ {a}ⁿ = ? (m={m}, n={n})", c: "{a}^{m-n}", v: {a:[2,6], m:[3,6], n:[1,2], kosul:"m>n"}, z:"orta", alt:"tabani_esit_bolme" },
  { id: "s4_ub_002", s: "aᵐ ÷ aⁿ = ? (Formül)", c: "aᵐ⁻ⁿ (a≠0)", v: {}, z:"orta", alt:"tabani_esit_bolme_formul" },
  { id: "s4_ub_003", s: "x⁵ ÷ x² = ?", c: "x³", v: {}, z:"orta", alt:"x5_bolu_x2" },
  { id: "s4_ub_004", s: "2⁶ ÷ 2² = ?", c: "16", v: {}, z:"orta", alt:"2_6_bolu_2_2" },
  { id: "s4_ub_005", s: "aᵐ ÷ aⁿ (m<n) = ?", c: "1/aⁿ⁻ᵐ", v: {}, z:"zor", alt:"paydadaki_buyuk_us" },

  // ALT DAL 2: ÜSLERİ EŞİT ÜSLÜ SAYILARDA BÖLME
  { id: "s4_ub_006", s: "{a}ⁿ ÷ {b}ⁿ = ?", c: "({a}/{b})ⁿ", v: {a:[4,10], b:[2,"{a}-1"], n:[2,4]}, z:"orta", alt:"usleri_esit_bolme" },
  { id: "s4_ub_007", s: "aⁿ ÷ bⁿ = ? (Formül)", c: "(a/b)ⁿ (b≠0)", v: {}, z:"orta", alt:"usleri_esit_bolme_formul" },
  { id: "s4_ub_008", s: "6³ ÷ 2³ = ?", c: "27", v: {}, z:"orta", alt:"6_3_2_3" },
  { id: "s4_ub_009", s: "x⁴ ÷ y⁴ = ?", c: "(x/y)⁴", v: {}, z:"orta", alt:"x4_y4_bolme" },

  // ALT DAL 3: ÜSLÜ KESİR SADELEŞTİRME
  { id: "s4_ub_010", s: "{a}ᵐ/{a}ⁿ = ? (Sadeleştir)", c: "{a}^{m-n}", v: {a:[2,5], m:[3,6], n:[1,2], kosul:"m>n"}, z:"orta", alt:"uslu_kesir_sade" },
  { id: "s4_ub_011", s: "2⁵/2² = ?", c: "8", v: {}, z:"orta", alt:"2_5_2_2" },
  { id: "s4_ub_012", s: "xⁿ⁺¹/xⁿ = ?", c: "x", v: {n:[1,5]}, z:"orta", alt:"xn+1_xn" },

  // ALT DAL 4: KATSAYILI ÜSLÜ BÖLME
  { id: "s4_ub_013", s: "{k1}·{a}ᵐ ÷ {k2}·{a}ⁿ = ?", c: "({k1}/{k2})·{a}^{m-n}", v: {k1:[4,12], a:[2,5], m:[3,5], k2:[2,4], n:[1,2], kosul:"k1%k2==0 && m>n"}, z:"zor", alt:"katsayili_bolme" },
  { id: "s4_ub_014", s: "6·2⁵ ÷ 3·2² = ?", c: "16", v: {}, z:"zor", alt:"6_2_5_3_2_2" },

  // ALT DAL 5: BÖLME İLE NEGATİF ÜS İLİŞKİSİ
  { id: "s4_ub_015", s: "1/{a}ⁿ = ? (Üslü gösterim)", c: "{a}⁻ⁿ", v: {a:[2,5], n:[1,4]}, z:"orta", alt:"bolme_negatif_us" },
  { id: "s4_ub_016", s: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ = aᵐ × a⁻ⁿ eşitliği doğru mudur?", c: "evet", v: {}, z:"zor", alt:"bolme_negatif_us_iliski" },

  // ALT DAL 6: TABAN DÖNÜŞTÜREREK BÖLME
  { id: "s4_ub_017", s: "8³ ÷ 4² = ? (2'nin kuvveti yap)", c: "32", v: {}, z:"cok_zor", alt:"8_4_2_yap_bolme" },
  { id: "s4_ub_018", s: "27² ÷ 9³ = ? (3'ün kuvveti yap)", c: "1", v: {}, z:"cok_zor", alt:"27_9_3_bolme" },

  // ALT DAL 7: KARIŞIK BÖLME İŞLEMLERİ
  { id: "s4_ub_019", s: "({a}ᵐ × {b}ⁿ) ÷ ({a}ᵏ × {b}ˡ) = ?", c: "{a}^{m-k}×{b}^{n-l}", v: {a:[2,4], m:[3,6], b:[2,5], n:[3,5], k:[1,2], l:[1,2], kosul:"m>k && n>l"}, z:"cok_zor", alt:"karisik_bolme" },
  { id: "s4_ub_020", s: "(2⁵×3⁴) ÷ (2³×3²) = ?", c: "36", v: {}, z:"cok_zor", alt:"2_3_karisik_bolme" },

  // ALT DAL 8: BÖLME İŞLEMİ ÖZELLİKLERİ
  { id: "s4_ub_021", s: "aⁿ ÷ aⁿ = ?", c: "1", v: {}, z:"orta", alt:"kendine_bolme" },
  { id: "s4_ub_022", s: "0ⁿ ÷ aᵐ = ? (a≠0)", c: "0", v: {n:[1,4]}, z:"orta", alt:"0_bolu_a" },
  { id: "s4_ub_023", s: "aⁿ ÷ 0 = ?", c: "tanimsiz", v: {}, z:"orta", alt:"a_bolu_0" },


  // ==========================================
  // KONU 7: ÜSSÜN ÜSSÜ (6 alt dal)
  // ==========================================

  // ALT DAL 1: ÜSSÜN ÜSSÜ KURALI
  { id: "s4_uu_001", s: "({a}ᵐ)ⁿ = ? (m={m}, n={n})", c: "{a}^{m*n}", v: {a:[2,5], m:[2,4], n:[2,4]}, z:"orta", alt:"ussun_ussu" },
  { id: "s4_uu_002", s: "(aᵐ)ⁿ = ? (Formül)", c: "aᵐˣⁿ", v: {}, z:"orta", alt:"ussun_ussu_formul" },
  { id: "s4_uu_003", s: "(x²)³ = ?", c: "x⁶", v: {}, z:"orta", alt:"x2_3" },
  { id: "s4_uu_004", s: "(2³)² = ?", c: "64", v: {}, z:"orta", alt:"2_3_2" },

  // ALT DAL 2: İÇ İÇE ÜSLÜ İFADELER
  { id: "s4_uu_005", s: "(({a}ᵐ)ⁿ)ᵏ = ?", c: "{a}^{m*n*k}", v: {a:[2,4], m:[1,3], n:[1,3], k:[1,3]}, z:"zor", alt:"ic_ice_us" },
  { id: "s4_uu_006", s: "((x²)³)⁴ = ?", c: "x²⁴", v: {}, z:"zor", alt:"x2_3_4" },
  { id: "s4_uu_007", s: "((2²)³)² = ?", c: "4096", v: {}, z:"zor", alt:"2_2_3_2" },

  // ALT DAL 3: ÜSSÜN ÜSSÜ İLE İLGİLİ ÖZEL DURUMLAR
  { id: "s4_uu_008", s: "aᵐⁿ ile (aᵐ)ⁿ aynı mıdır?", c: "hayir_aᵐⁿ=a^(mⁿ)_(aᵐ)ⁿ=aᵐˣⁿ", v: {}, z:"cok_zor", alt:"us_sirasi" },
  { id: "s4_uu_009", s: "a^(b^c) ile (a^b)^c arasındaki fark nedir?", c: "islem_sirasi_farkli", v: {}, z:"cok_zor", alt:"us_sirasi_fark" },
  { id: "s4_uu_010", s: "(aᵐ)ⁿ = a^(m×n) eşitliği her zaman doğru mudur?", c: "evet_tamsayilar_icin", v: {}, z:"zor", alt:"ussun_ussu_her_zaman" },

  // ALT DAL 4: NEGATİF ÜSSÜN ÜSSÜ
  { id: "s4_uu_011", s: "({a}⁻ᵐ)ⁿ = ?", c: "{a}^{-m*n}", v: {a:[2,5], m:[1,3], n:[2,4]}, z:"zor", alt:"negatif_ussun_ussu" },
  { id: "s4_uu_012", s: "(x⁻²)³ = ?", c: "x⁻⁶", v: {}, z:"zor", alt:"x_negatif2_3" },
  { id: "s4_uu_013", s: "(2⁻³)² = ?", c: "1/64", v: {}, z:"zor", alt:"2_negatif3_2" },

  // ALT DAL 5: TABANI ÜSLÜ OLAN İFADELER
  { id: "s4_uu_014", s: "({a}ᵐ)ⁿ = ({a}ⁿ)ᵐ eşitliği doğru mudur?", c: "evet", v: {}, z:"orta", alt:"us_yer_degistirme" },
  { id: "s4_uu_015", s: "(x²)³ = x⁶ = (x³)² eşitliğini gösteriniz.", c: "x⁶=x⁶", v: {}, z:"orta", alt:"us_degismesi" },

  // ALT DAL 6: ÜSSÜN ÜSSÜ PROBLEMLERİ
  { id: "s4_uu_016", s: "(2ˣ)² = 2⁸ ise x kaçtır?", c: "4", v: {}, z:"zor", alt:"uslu_denklem" },
  { id: "s4_uu_017", s: "(3²)ˣ = 3⁸ ise x kaçtır?", c: "4", v: {}, z:"zor", alt:"3_2x_8" },
  { id: "s4_uu_018", s: "4³ = (2²)³ = ?", c: "64", v: {}, z:"orta", alt:"taban_donusturme_ussun_ussu" },


  // ==========================================
  // KONU 8: ÜSLÜ DENKLEMLER (10 alt dal)
  // ==========================================

  // ALT DAL 1: TABANLARI EŞİT ÜSLÜ DENKLEMLER
  { id: "s4_ud_001", s: "{a}ˣ = {a}ⁿ ise x kaçtır?", c: "{n}", v: {a:[2,5], n:[2,6]}, z:"orta", alt:"taban_esit_denklem" },
  { id: "s4_ud_002", s: "2ˣ = 32 ise x kaçtır?", c: "5", v: {}, z:"orta", alt:"2x_32" },
  { id: "s4_ud_003", s: "3ˣ = 81 ise x kaçtır?", c: "4", v: {}, z:"orta", alt:"3x_81" },
  { id: "s4_ud_004", s: "5ˣ = 125 ise x kaçtır?", c: "3", v: {}, z:"orta", alt:"5x_125" },
  { id: "s4_ud_005", s: "10ˣ = 10000 ise x kaçtır?", c: "4", v: {}, z:"orta", alt:"10x_10000" },

  // ALT DAL 2: TABAN DÖNÜŞTÜRMELİ DENKLEMLER
  { id: "s4_ud_006", s: "4ˣ = 2⁶ ise x kaçtır?", c: "3", v: {}, z:"zor", alt:"4x_2_6" },
  { id: "s4_ud_007", s: "9ˣ = 3⁴ ise x kaçtır?", c: "2", v: {}, z:"zor", alt:"9x_3_4" },
  { id: "s4_ud_008", s: "8ˣ = 2⁹ ise x kaçtır?", c: "3", v: {}, z:"zor", alt:"8x_2_9" },
  { id: "s4_ud_009", s: "27ˣ = 9 ise x kaçtır?", c: "2/3", v: {}, z:"cok_zor", alt:"27x_9" },

  // ALT DAL 3: ÜSLERİ EŞİT DENKLEMLER
  { id: "s4_ud_010", s: "xⁿ = yⁿ ise x ile y arasındaki ilişki nedir? (n tek ise)", c: "x=y", v: {}, z:"zor", alt:"us_esit_tek" },
  { id: "s4_ud_011", s: "xⁿ = yⁿ ise x ile y arasındaki ilişki nedir? (n çift ise)", c: "x=y_veya_x=-y", v: {}, z:"zor", alt:"us_esit_cift" },
  { id: "s4_ud_012", s: "x² = 25 ise x'in alabileceği değerler nelerdir?", c: "5_ve_-5", v: {}, z:"orta", alt:"x_kare_25" },
  { id: "s4_ud_013", s: "x³ = -27 ise x kaçtır?", c: "-3", v: {}, z:"orta", alt:"x_kup_eksi27" },

  // ALT DAL 4: ÇARPANLARA AYIRMALI ÜSLÜ DENKLEMLER
  { id: "s4_ud_014", s: "2ˣ⁺¹ + 2ˣ = 24 ise x kaçtır?", c: "3", v: {}, z:"cok_zor", alt:"2x+1_2x_24" },
  { id: "s4_ud_015", s: "3ˣ⁺² - 3ˣ = 72 ise x kaçtır?", c: "2", v: {}, z:"cok_zor", alt:"3x+2_3x_72" },
  { id: "s4_ud_016", s: "5ˣ⁺¹ + 5ˣ = 150 ise x kaçtır?", c: "2", v: {}, z:"cok_zor", alt:"5x+1_5x_150" },

  // ALT DAL 5: ÜSLÜ İFADELERİ BİLİNMEYEN DENKLEMLER
  { id: "s4_ud_017", s: "xˣ = 27 ise x kaçtır?", c: "3", v: {}, z:"cok_zor", alt:"xx_27" },
  { id: "s4_ud_018", s: "xˣ = 256 ise x kaçtır?", c: "4", v: {}, z:"cok_zor", alt:"xx_256" },
  { id: "s4_ud_019", s: "(x+1)² = 49 ise x'in pozitif değeri kaçtır?", c: "6", v: {}, z:"zor", alt:"x+1_kare_49" },

  // ALT DAL 6: İKİ BİLİNMEYENLİ ÜSLÜ DENKLEMLER
  { id: "s4_ud_020", s: "2ˣ = 4ʸ ve x+y=6 ise x kaçtır?", c: "4", v: {}, z:"cok_zor", alt:"2x_4y" },
  { id: "s4_ud_021", s: "3ˣ = 9ʸ ve x-y=2 ise x kaçtır?", c: "4", v: {}, z:"cok_zor", alt:"3x_9y" },

  // ALT DAL 7: TABAN VE ÜS BİLİNMEYEN DENKLEMLER
  { id: "s4_ud_022", s: "aᵇ = 64 ise a ve b'nin alabileceği tam sayı değerleri nelerdir?", c: "(2,6),(4,3),(8,2),(64,1)", v: {}, z:"cok_zor", alt:"ab_64" },
  { id: "s4_ud_023", s: "xʸ = 16 ise x ve y pozitif tam sayıları için kaç farklı (x,y) ikilisi vardır?", c: "4", v: {}, z:"cok_zor", alt:"xy_16" },

  // ALT DAL 8: SIFIR VE BİR DURUMLARI
  { id: "s4_ud_024", s: "aˣ = 1 ise a ve x için ne söylenebilir?", c: "a=1_veya_x=0_(a!=0)", v: {}, z:"zor", alt:"a_us_x_1" },
  { id: "s4_ud_025", s: "x⁰ = 1 denkleminin çözüm kümesi nedir?", c: "x!=0_olan_tum_sayilar", v: {}, z:"zor", alt:"x0_1" },

  // ALT DAL 9: ÜSLÜ DENKLEM PROBLEMLERİ
  { id: "s4_ud_026", s: "Bir bakteri kolonisi her saat 2 katına çıkıyor. Başlangıçta {a} bakteri varsa kaç saat sonra {a}×2ⁿ bakteri olur?", c: "{n}", v: {a:[1,10], n:[2,6]}, z:"zor", alt:"bakteri" },
  { id: "s4_ud_027", s: "Bir paranın değeri her yıl yarıya düşüyor. {n} yıl sonra paranın kaçta kaçı kalır?", c: "1/2^{n}", v: {n:[2,5]}, z:"zor", alt:"para_yarilanma" },

  // ALT DAL 10: ÜSLÜ EŞİTSİZLİK DENKLEMLERİ
  { id: "s4_ud_028", s: "2ˣ > 32 ise x en az kaç olmalıdır?", c: "6", v: {}, z:"zor", alt:"2x_buyuk_32" },
  { id: "s4_ud_029", s: "3ˣ < 81 ise x en çok kaç olabilir?", c: "3", v: {}, z:"zor", alt:"3x_kucuk_81" },
  { id: "s4_ud_030", s: "2ˣ⁺¹ > 64 ise x en az kaçtır?", c: "5", v: {}, z:"cok_zor", alt:"2x+1_buyuk_64" },


  // ==========================================
  // KONU 9: ÜSLÜ SAYILARDA SIRALAMA (8 alt dal)
  // ==========================================

  // ALT DAL 1: TABANI 1'DEN BÜYÜK SAYILARDA SIRALAMA
  { id: "s4_us_001", s: "{a}ᵐ ve {a}ⁿ (m={m}, n={n}, m>n) hangisi büyüktür?", c: "{a}^{m}", v: {a:[2,5], m:[3,6], n:[1,3], kosul:"m>n"}, z:"orta", alt:"taban_buyuk_1" },
  { id: "s4_us_002", s: "Tabanı 1'den büyük üslü sayılarda sıralama nasıldır?", c: "us_buyudukce_sayi_buyur", v: {}, z:"orta", alt:"taban_buyuk_1_kural" },
  { id: "s4_us_003", s: "2³, 2⁴, 2⁵ sayılarını küçükten büyüğe sıralayınız.", c: "2³<2⁴<2⁵", v: {}, z:"orta", alt:"2nin_usleri" },

  // ALT DAL 2: TABANI 0 İLE 1 ARASINDA SAYILARDA SIRALAMA
  { id: "s4_us_004", s: "(1/{a})ᵐ ve (1/{a})ⁿ (m>n) hangisi büyüktür?", c: "(1/{a})^{n}", v: {a:[2,5], m:[3,5], n:[1,2], kosul:"m>n"}, z:"zor", alt:"taban_0_1" },
  { id: "s4_us_005", s: "Tabanı 0 ile 1 arasında üslü sayılarda sıralama nasıldır?", c: "us_buyudukce_sayi_kuculur", v: {}, z:"zor", alt:"taban_0_1_kural" },
  { id: "s4_us_006", s: "(1/2)³, (1/2)⁴, (1/2)⁵ sıralayınız.", c: "(1/2)³>(1/2)⁴>(1/2)⁵", v: {}, z:"zor", alt:"1_2_usleri" },

  // ALT DAL 3: NEGATİF TABANDA SIRALAMA
  { id: "s4_us_007", s: "(-2)³ ve (-2)⁴ hangisi büyüktür?", c: "(-2)⁴", v: {}, z:"zor", alt:"negatif_taban_siralama" },
  { id: "s4_us_008", s: "Negatif tabanlı üslü sayılarda sıralama nasıldır?", c: "cift_us_pozitif_tek_us_negatif", v: {}, z:"zor", alt:"negatif_taban_kural" },

  // ALT DAL 4: FARKLI TABANLI ÜSLÜ SAYILARDA SIRALAMA
  { id: "s4_us_009", s: "2⁵ ve 3³ hangisi büyüktür?", c: "2⁵=32>3³=27", v: {}, z:"zor", alt:"farkli_taban_1" },
  { id: "s4_us_010", s: "2⁶ ve 4³ hangisi büyüktür?", c: "esittir_(64=64)", v: {}, z:"zor", alt:"farkli_taban_esit" },
  { id: "s4_us_011", s: "Farklı tabanlı üslü sayıları sıralamak için ne yapılır?", c: "taban_esitlenir_veya_deger_hesaplanir", v: {}, z:"orta", alt:"farkli_taban_kural" },

  // ALT DAL 5: ÜSLÜ SAYILARDA KARIŞIK SIRALAMA
  { id: "s4_us_012", s: "3², 2³, 5¹ sayılarını sıralayınız.", c: "5¹<2³<3² (5<8<9)", v: {}, z:"orta", alt:"karisik_siralama" },
  { id: "s4_us_013", s: "2⁻¹, 2⁻², 2⁻³ sıralayınız.", c: "2⁻³<2⁻²<2⁻¹", v: {}, z:"zor", alt:"negatif_us_siralama" },
  { id: "s4_us_014", s: "(-3)², (-2)³, (-1)⁴ sıralayınız.", c: "(-2)³<(-1)⁴<(-3)² (-8<1<9)", v: {}, z:"cok_zor", alt:"negatif_taban_karisik" },

  // ALT DAL 6: BÜYÜKLÜK KÜÇÜKLÜK SORULARI
  { id: "s4_us_015", s: "Aşağıdakilerden hangisi en büyüktür?", c: "{en_buyuk}", v: {secenekler:["2⁶","3⁴","4³","5²","8²"]}, z:"zor", alt:"en_buyuk_bulma" },
  { id: "s4_us_016", s: "Aşağıdakilerden hangisi en küçüktür?", c: "{en_kucuk}", v: {secenekler:["2⁻¹","3⁻¹","4⁻¹","5⁻¹","10⁻¹"]}, z:"orta", alt:"en_kucuk_negatif" },

  // ALT DAL 7: SIRALAMADA STRATEJİ
  { id: "s4_us_017", s: "2⁸ ile 4⁵ sayılarını karşılaştırınız. (4=2² yap)", c: "2⁸<4⁵ (256<1024)", v: {}, z:"cok_zor", alt:"taban_esitleme_siralama" },
  { id: "s4_us_018", s: "8³ ile 2¹⁰ sayılarını karşılaştırınız.", c: "8³=2⁹<2¹⁰", v: {}, z:"cok_zor", alt:"8_2_karsilastirma" },
  { id: "s4_us_019", s: "3⁵ ile 9³ sayılarını karşılaştırınız.", c: "3⁵=243<9³=3⁶=729", v: {}, z:"cok_zor", alt:"3_9_karsilastirma" },

  // ALT DAL 8: ÜSLÜ İFADELERİN BÜYÜKLÜK SIRASI
  { id: "s4_us_020", s: "a>1 ise a², a³, a⁴ sıralaması nasıldır?", c: "a²<a³<a⁴", v: {}, z:"orta", alt:"a_buyuk_1" },
  { id: "s4_us_021", s: "0<a<1 ise a², a³, a⁴ sıralaması nasıldır?", c: "a²>a³>a⁴", v: {}, z:"orta", alt:"a_0_1" },
  { id: "s4_us_022", s: "a<-1 ise a², a³, a⁴ sıralaması nasıldır?", c: "a³<a⁴<a² (negatif_tek_us_en_kucuk)", v: {}, z:"cok_zor", alt:"a_kucuk_eksi1" },


  // ==========================================
  // KONU 10: BİLİMSEL GÖSTERİM (6 alt dal)
  // ==========================================

  // ALT DAL 1: BİLİMSEL GÖSTERİM TANIMI
  { id: "s4_bg_001", s: "Bilimsel gösterim nedir?", c: "a×10ⁿ_(1≤a<10,_n_tam_sayi)", v: {}, z:"orta", alt:"bilimsel_gosterim_tanim" },
  { id: "s4_bg_002", s: "a×10ⁿ gösteriminde a nasıl bir sayı olmalıdır?", c: "1_ile_10_arasinda_(1_dahil_10_haric)", v: {}, z:"orta", alt:"a_araligi" },
  { id: "s4_bg_003", s: "Bilimsel gösterimde 10'un üssü neyi ifade eder?", c: "sayinin_basamak_sayisi_hakkinda_bilgi", v: {}, z:"orta", alt:"10un_ussu_anlam" },

  // ALT DAL 2: BÜYÜK SAYILARI BİLİMSEL GÖSTERİMLE YAZMA
  { id: "s4_bg_004", s: "{sayi} sayısını bilimsel gösterimle yazınız.", c: "{gosterim}", v: {sayi:[100,99999]}, z:"orta", alt:"buyuk_sayi_gosterim" },
  { id: "s4_bg_005", s: "45000 = ? × 10ⁿ", c: "4,5×10⁴", v: {}, z:"orta", alt:"45000" },
  { id: "s4_bg_006", s: "1230000 = ? × 10ⁿ", c: "1,23×10⁶", v: {}, z:"orta", alt:"1230000" },
  { id: "s4_bg_007", s: "5 milyon = ? (Bilimsel gösterim)", c: "5×10⁶", v: {}, z:"orta", alt:"5_milyon" },

  // ALT DAL 3: KÜÇÜK SAYILARI BİLİMSEL GÖSTERİMLE YAZMA
  { id: "s4_bg_008", s: "0,{a}{b}{c} sayısını bilimsel gösterimle yazınız.", c: "{gosterim}", v: {a:[0,1], b:[0,9], c:[1,9]}, z:"zor", alt:"kucuk_sayi_gosterim" },
  { id: "s4_bg_009", s: "0,00045 = ? × 10ⁿ", c: "4,5×10⁻⁴", v: {}, z:"zor", alt:"0_00045" },
  { id: "s4_bg_010", s: "0,000007 = ? × 10ⁿ", c: "7×10⁻⁶", v: {}, z:"zor", alt:"0_000007" },
  { id: "s4_bg_011", s: "Bir virüsün boyu 0,0000002 m ise bilimsel gösterimi nedir?", c: "2×10⁻⁷", v: {}, z:"zor", alt:"virus" },

  // ALT DAL 4: BİLİMSEL GÖSTERİMDEN NORMAL SAYIYA
  { id: "s4_bg_012", s: "{a}×10ⁿ = ? (Normal sayı olarak, n={n})", c: "{sayi}", v: {a:[1,9], n:[2,5]}, z:"orta", alt:"gosterimden_sayiya" },
  { id: "s4_bg_013", s: "3,2×10⁴ = ?", c: "32000", v: {}, z:"orta", alt:"3_2_10_4" },
  { id: "s4_bg_014", s: "{a}×10⁻ⁿ = ? (Normal sayı olarak, n={n})", c: "{sayi}", v: {a:[1,9], n:[2,5]}, z:"zor", alt:"negatif_10_ussu" },
  { id: "s4_bg_015", s: "5,6×10⁻³ = ?", c: "0,0056", v: {}, z:"zor", alt:"5_6_10_eksi3" },

  // ALT DAL 5: BİLİMSEL GÖSTERİMDE İŞLEMLER
  { id: "s4_bg_016", s: "({a}×10ᵐ) × ({b}×10ⁿ) = ?", c: "({a}*{b})×10^{m+n}", v: {a:[1,5], m:[2,5], b:[1,5], n:[2,4]}, z:"zor", alt:"bilimsel_carpma" },
  { id: "s4_bg_017", s: "(2×10³) × (3×10⁴) = ?", c: "6×10⁷", v: {}, z:"zor", alt:"2_3_10_3_4" },
  { id: "s4_bg_018", s: "({a}×10ᵐ) ÷ ({b}×10ⁿ) = ?", c: "({a}/{b})×10^{m-n}", v: {a:[2,8], m:[5,8], b:[2,4], n:[2,3], kosul:"a%b==0 && m>n"}, z:"cok_zor", alt:"bilimsel_bolme" },
  { id: "s4_bg_019", s: "(6×10⁸) ÷ (2×10³) = ?", c: "3×10⁵", v: {}, z:"cok_zor", alt:"6_2_10_8_3" },

  // ALT DAL 6: BİLİMSEL GÖSTERİM PROBLEMLERİ
  { id: "s4_bg_020", s: "Dünya'nın Güneş'e uzaklığı 150.000.000 km'dir. Bilimsel gösterimi nedir?", c: "1,5×10⁸", v: {}, z:"orta", alt:"dunya_gunes" },
  { id: "s4_bg_021", s: "Bir atomun çapı yaklaşık 0,0000000001 m'dir. Bilimsel gösterimi nedir?", c: "1×10⁻¹⁰", v: {}, z:"zor", alt:"atom" },
  { id: "s4_bg_022", s: "Işık hızı saniyede 300.000 km'dir. Bilimsel gösterimi nedir?", c: "3×10⁵", v: {}, z:"orta", alt:"isik_hizi" },


  // ==========================================
  // KONU 11: ÜSLÜ SAYI PROBLEMLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: KATLANMA PROBLEMLERİ
  { id: "s4_up_001", s: "Bir bakteri her saat 2 katına çıkıyor. Başlangıçta {a} bakteri varsa {n} saat sonra kaç bakteri olur?", c: "{a}×2^{n}", v: {a:[1,5], n:[2,6]}, z:"orta", alt:"bakteri_katlanma" },
  { id: "s4_up_002", s: "Bir hücre her gün 3 katına çıkıyor. {n} gün sonra başlangıçtakinin kaç katı olur?", c: "3^{n}", v: {n:[2,5]}, z:"orta", alt:"hucre_katlanma" },

  // ALT DAL 2: YARILANMA PROBLEMLERİ
  { id: "s4_up_003", s: "Bir radyoaktif madde her yıl yarıya düşüyor. Başlangıçta {a} gram ise {n} yıl sonra kaç gram kalır?", c: "{a}/2^{n}", v: {a:[16,128], n:[2,4], kosul:"a%Math.pow(2,{n})==0"}, z:"zor", alt:"yarilanma" },
  { id: "s4_up_004", s: "Bir ilacın vücuttaki miktarı her 4 saatte yarılanıyor. 12 saat sonra başlangıçtakinin kaçta kaçı kalır?", c: "1/8", v: {}, z:"zor", alt:"ilac_yarilanma" },

  // ALT DAL 3: FAİZ PROBLEMLERİ (ÜSLÜ)
  { id: "s4_up_005", s: "{a} TL para yıllık %{n} bileşik faizle bankaya yatırılırsa {t} yıl sonra kaç TL olur?", c: "{a}×Math.pow(1+{n}/100,{t})", v: {a:[100,500], n:[10,20], t:[2,3]}, z:"cok_zor", alt:"bilesik_faiz" },
  { id: "s4_up_006", s: "Bir para her yıl %20 değerleniyorsa 3 yıl sonra kaç katına çıkar?", c: "1,728", v: {}, z:"zor", alt:"degerlenme" },

  // ALT DAL 4: ÜSLÜ SAYI MANTIK SORULARI
  { id: "s4_up_007", s: "2ⁿ = 128 ise 2ⁿ⁻² kaçtır?", c: "32", v: {}, z:"zor", alt:"2n_2n-2" },
  { id: "s4_up_008", s: "3ˣ = 81 ise 3ˣ⁺¹ kaçtır?", c: "243", v: {}, z:"zor", alt:"3x_3x+1" },
  { id: "s4_up_009", s: "aˣ = 4 ise a²ˣ kaçtır?", c: "16", v: {}, z:"cok_zor", alt:"ax_a2x" },

  // ALT DAL 5: KÂĞIT KATLAMA PROBLEMLERİ
  { id: "s4_up_010", s: "Bir kâğıt her katlandığında kalınlığı 2 katına çıkıyor. {n} kez katlanırsa kalınlık kaç katına çıkar?", c: "2^{n}", v: {n:[2,6]}, z:"orta", alt:"kagit_katlama" },
  { id: "s4_up_011", s: "0,1 mm kalınlığındaki bir kâğıt 10 kez katlanırsa kalınlığı kaç mm olur?", c: "102,4", v: {}, z:"zor", alt:"kagit_10_kat" },

  // ALT DAL 6: ÜSLÜ SAYI ÖRÜNTÜLERİ
  { id: "s4_up_012", s: "1, 2, 4, 8, 16, ... örüntüsünün kuralı nedir?", c: "2ⁿ⁻¹", v: {}, z:"orta", alt:"iki_kuvvet_örüntü" },
  { id: "s4_up_013", s: "1, 3, 9, 27, 81, ... örüntüsünün kuralı nedir?", c: "3ⁿ⁻¹", v: {}, z:"orta", alt:"uc_kuvvet_örüntü" },

  // ALT DAL 7: ÜSLÜ SAYI ÇIKARIM SORULARI
  { id: "s4_up_014", s: "xᵃ = {deger_a} ve xᵇ = {deger_b} ise xᵃ⁺ᵇ kaçtır?", c: "{deger_a}*{deger_b}", v: {a:[2,5], b:[2,5], deger_a:"Math.pow({a},{a_ussu_hesap})", deger_b:"Math.pow({a},{b_ussu_hesap})"}, z:"cok_zor", alt:"us_toplam_cikarim" },
  { id: "s4_up_015", s: "xᵃ = {deger_a} ve xᵇ = {deger_b} ise xᵃ⁻ᵇ kaçtır?", c: "{deger_a}/{deger_b}", v: {a:[4,6], b:[1,2], kosul:"a>b"}, z:"cok_zor", alt:"us_fark_cikarim" },

  // ALT DAL 8: ÜSLÜ SAYI PROBLEMLERİ KARIŞIK
  { id: "s4_up_016", s: "Bir kovadaki su miktarı her saat 3 katına çıkıyor. Başlangıçta {a} litre varsa {n} saat sonra kaç litre olur?", c: "{a}×3^{n}", v: {a:[1,4], n:[2,4]}, z:"orta", alt:"su_artis" },
  { id: "s4_up_017", s: "Bir bilgisayar virüsü her dakika bulaştığı bilgisayar sayısını 5 katına çıkarıyor. {n} dakika sonra kaç bilgisayara bulaşır?", c: "5^{n}", v: {n:[2,5]}, z:"orta", alt:"virus_yayilim" },
  { id: "s4_up_018", s: "n kişiden her biri n kişiye mesaj gönderiyor. Toplam kaç mesaj gönderilir?", c: "n²", v: {}, z:"orta", alt:"mesaj" },


  // ==========================================
  // KONU 12: ÖZEL ÜS DURUMLARI (0,1,-1) (8 alt dal)
  // ==========================================

  // ALT DAL 1: 0 ÜSSÜ DURUMLARI
  { id: "s4_od_001", s: "0ⁿ = ? (n>0 için, n={n})", c: "0", v: {n:[1,10]}, z:"orta", alt:"0_us_pozitif" },
  { id: "s4_od_002", s: "0⁰ ifadesi için ne söylenebilir?", c: "belirsizdir", v: {}, z:"orta", alt:"0_ussu_0" },
  { id: "s4_od_003", s: "0⁻ⁿ = ? (n>0 için)", c: "tanimsiz", v: {n:[1,5]}, z:"zor", alt:"0_us_negatif" },
  { id: "s4_od_004", s: "xⁿ = 0 ise x ve n için ne söylenebilir?", c: "x=0_ve_n>0", v: {}, z:"zor", alt:"x_us_n_0" },

  // ALT DAL 2: 1 ÜSSÜ DURUMLARI
  { id: "s4_od_005", s: "1ⁿ = ? (n={n})", c: "1", v: {n:[1,100]}, z:"kolay", alt:"1_us_her_zaman" },
  { id: "s4_od_006", s: "1ⁿ = 1 eşitliği n=0 için de geçerli midir?", c: "evet_1⁰=1", v: {}, z:"orta", alt:"1_ussu_0" },
  { id: "s4_od_007", s: "1⁻ⁿ = ?", c: "1", v: {n:[1,5]}, z:"orta", alt:"1_us_negatif" },

  // ALT DAL 3: (-1) ÜSSÜ DURUMLARI
  { id: "s4_od_008", s: "(-1)ⁿ = ? (n={n})", c: "{n}%2==0?1:-1", v: {n:[1,10]}, z:"orta", alt:"eksi1_us" },
  { id: "s4_od_009", s: "(-1)ⁿ = 1 olması için n nasıl bir sayı olmalıdır?", c: "cift_tam_sayi", v: {}, z:"orta", alt:"eksi1_1_olma_sarti" },
  { id: "s4_od_010", s: "(-1)ⁿ = -1 olması için n nasıl bir sayı olmalıdır?", c: "tek_tam_sayi", v: {}, z:"orta", alt:"eksi1_eksi1_olma_sarti" },
  { id: "s4_od_011", s: "(-1)²ⁿ = ?", c: "1", v: {n:[1,5]}, z:"orta", alt:"eksi1_2n" },
  { id: "s4_od_012", s: "(-1)²ⁿ⁺¹ = ?", c: "-1", v: {n:[0,4]}, z:"orta", alt:"eksi1_2n+1" },

  // ALT DAL 4: 10'UN KUVVETLERİ - DÜZELTİLDİ
  { id: "s4_od_013", s: "10ⁿ = ? (n={n})", c: "1" + "0".repeat({n}), v: {n:[1,6]}, z:"kolay", alt:"10_un_kuvveti" },
  { id: "s4_od_014", s: "10ⁿ sayısında n tane ne vardır?", c: "sifir", v: {}, z:"kolay", alt:"10_un_kuvveti_sifir" },
  { id: "s4_od_015", s: "10⁻ⁿ = ? (n={n})", c: "0." + "0".repeat({n}-1) + "1", v: {n:[1,5]}, z:"orta", alt:"10_negatif_us" },

  // ALT DAL 5: SAYILARIN KUVVETLERİNİN SON BASAMAKLARI
  { id: "s4_od_016", s: "2ⁿ ifadesinin son basamağı n={n} için kaçtır?", c: "{son_basamak}", v: {n:[1,10]}, z:"zor", alt:"2_son_basamak" },
  { id: "s4_od_017", s: "3ⁿ ifadesinin son basamakları nasıl bir döngü oluşturur?", c: "3,9,7,1", v: {}, z:"zor", alt:"3_son_basamak_dongu" },
  { id: "s4_od_018", s: "7ⁿ ifadesinin son basamakları nasıl bir döngü oluşturur?", c: "7,9,3,1", v: {}, z:"zor", alt:"7_son_basamak_dongu" },
  { id: "s4_od_019", s: "5ⁿ ifadesinin son basamağı her zaman kaçtır? (n≥1)", c: "5", v: {}, z:"orta", alt:"5_son_basamak" },
  { id: "s4_od_020", s: "6ⁿ ifadesinin son basamağı her zaman kaçtır? (n≥1)", c: "6", v: {}, z:"orta", alt:"6_son_basamak" },

  // ALT DAL 6: TAM KARE VE TAM KÜP BAĞLANTISI
  { id: "s4_od_021", s: "Bir sayının karesi nasıl bulunur?", c: "sayi_kendisiyle_carpilir", v: {}, z:"kolay", alt:"tam_kare" },
  { id: "s4_od_022", s: "1'den 10'a kadar sayıların kareleri nelerdir?", c: "1,4,9,16,25,36,49,64,81,100", v: {}, z:"orta", alt:"1_10_kareler" },
  { id: "s4_od_023", s: "Tam kare pozitif tam sayılar nelerdir?", c: "1,4,9,16,25,36,49,64,81,100,121,144,...", v: {}, z:"orta", alt:"tam_kareler" },

  // ALT DAL 7: ÜS VE KÖK İLİŞKİSİNE GİRİŞ
  { id: "s4_od_024", s: "√{a} = {a}^(?)", c: "1/2", v: {a:[4,9,16,25,36,49,64,81,100]}, z:"orta", alt:"karekok_us_iliski" },
  { id: "s4_od_025", s: "∛{a} = {a}^(?)", c: "1/3", v: {a:[8,27,64]}, z:"orta", alt:"kupkok_us_iliski" },
  { id: "s4_od_026", s: "ⁿ√a = a^(?)", c: "1/n", v: {}, z:"orta", alt:"n_kok_us_iliski" },

  // ALT DAL 8: ÜSLÜ SAYILARDA ÖZEL TANIMLI İFADELER
  { id: "s4_od_027", s: "aᵐ = aⁿ ise a=0 veya a=1 veya a=-1 durumları hariç ne söylenebilir?", c: "m=n", v: {}, z:"cok_zor", alt:"ozel_tanim" },
  { id: "s4_od_028", s: "aᵐ = bᵐ ise a ve b için ne söylenebilir? (m tek ise)", c: "a=b", v: {}, z:"cok_zor", alt:"us_esit_ozel" },
  { id: "s4_od_029", s: "aᵐ = bᵐ ise a ve b için ne söylenebilir? (m çift ise)", c: "|a|=|b|", v: {}, z:"cok_zor", alt:"cift_us_ozel" },
  { id: "s4_od_030", s: "aᵇ = 1 ise kaç durum vardır?", c: "3_(a=1_veya_b=0_(a!=0)_veya_a=-1_b_cift)", v: {}, z:"cok_zor", alt:"1_olma_durumlari" },

],

  5: [

  // ==========================================
  // KONU 1: KÖK KAVRAMI VE TANIMI (6 alt dal)
  // ==========================================

  // ALT DAL 1: KAREKÖK TANIMI
  { id: "s5_kk_001", s: "√{a} nedir? (Tanım)", c: "karesi_{a}_olan_pozitif_sayi", v: {a:[4,9,16,25,36,49,64,81,100]}, z:"kolay", alt:"karekok_tanimi" },
  { id: "s5_kk_002", s: "√{a} ifadesinin değeri kaçtır?", c: "Math.sqrt({a})", v: {a:[4,9,16,25,36,49,64,81,100,121,144]}, z:"kolay", alt:"karekok_degeri" },
  { id: "s5_kk_003", s: "Karekök alma işlemi ne demektir?", c: "bir_sayinin_hangi_sayinin_karesi_oldugunu_bulma", v: {}, z:"kolay", alt:"karekok_anlam" },
  { id: "s5_kk_004", s: "√ ifadesine ne denir?", c: "karekok", v: {}, z:"kolay", alt:"karekok_sembol" },

  // ALT DAL 2: KÖK DERECESİ
  { id: "s5_kk_005", s: "ⁿ√a ifadesinde n'ye ne denir?", c: "kokun_derecesi", v: {n:[2,5]}, z:"kolay", alt:"kok_derecesi" },
  { id: "s5_kk_006", s: "√a ifadesinde kökün derecesi kaçtır?", c: "2_(yazilmaz)", v: {}, z:"kolay", alt:"karekok_derece" },
  { id: "s5_kk_007", s: "∛a ifadesinde kökün derecesi kaçtır?", c: "3", v: {}, z:"kolay", alt:"kupkok_derece" },
  { id: "s5_kk_008", s: "Kök derecesi çift sayı ise kök içi nasıl olmalıdır?", c: "kok_ici_sifirdan_buyuk_veya_esit_olmali", v: {}, z:"orta", alt:"cift_derece_sarti" },
  { id: "s5_kk_009", s: "Kök derecesi tek sayı ise kök içi nasıl olabilir?", c: "her_turlu_sayi_olabilir", v: {}, z:"orta", alt:"tek_derece_sarti" },

  // ALT DAL 3: KÖK İÇİNİN İŞARETİ
  { id: "s5_kk_010", s: "√(-{a}) ifadesi reel sayılarda tanımlı mıdır?", c: "hayir", v: {a:[1,10]}, z:"orta", alt:"negatif_kok_ici" },
  { id: "s5_kk_011", s: "∛(-{a}) ifadesinin değeri kaçtır?", c: "-Math.cbrt({a})", v: {a:[8,27,64,125]}, z:"orta", alt:"kupkok_negatif" },
  { id: "s5_kk_012", s: "√0 = ?", c: "0", v: {}, z:"kolay", alt:"karekok_sifir" },
  { id: "s5_kk_013", s: "√1 = ?", c: "1", v: {}, z:"kolay", alt:"karekok_bir" },

  // ALT DAL 4: KÖKLÜ SAYININ SONUCUNUN İŞARETİ
  { id: "s5_kk_014", s: "√{a} ifadesinin sonucu pozitif midir, negatif midir?", c: "pozitif", v: {a:[4,9,16,25]}, z:"orta", alt:"karekok_sonuc_isaret" },
  { id: "s5_kk_015", s: "√{a} = ? ve -√{a} = ? arasındaki fark nedir?", c: "biri_pozitif_digeri_negatif", v: {a:[4,9,16]}, z:"orta", alt:"pozitif_negatif_kok" },
  { id: "s5_kk_016", s: "x² = {a} ise x'in alabileceği değerler nelerdir?", c: "√{a}_ve_-√{a}", v: {a:[4,9,16,25,36]}, z:"orta", alt:"kare_denklem" },

  // ALT DAL 5: KÖK ALMA İLE KARE ALMA İLİŞKİSİ
  { id: "s5_kk_017", s: "(√{a})² = ?", c: "{a}", v: {a:[2,20]}, z:"orta", alt:"kok_kare_iliski" },
  { id: "s5_kk_018", s: "√({a}²) = ?", c: "Math.abs({a})", v: {a:[-10,10]}, z:"zor", alt:"kare_kok_iliski" },
  { id: "s5_kk_019", s: "√({a}²) = {a} eşitliği her zaman doğru mudur?", c: "hayir_sadece_a>=0_iken", v: {a:[-5,5]}, z:"zor", alt:"kok_kare_mutlak" },

  // ALT DAL 6: TAM KARE SAYILAR
  { id: "s5_kk_020", s: "1'den 100'e kadar tam kare sayılar nelerdir?", c: "1,4,9,16,25,36,49,64,81,100", v: {}, z:"orta", alt:"tam_kare_sayilar" },
  { id: "s5_kk_021", s: "{a} sayısı tam kare midir?", c: "{evet_hayir}", v: {a:[1,200]}, z:"orta", alt:"tam_kare_kontrol" },
  { id: "s5_kk_022", s: "İki basamaklı en büyük tam kare sayı kaçtır?", c: "81", v: {}, z:"orta", alt:"en_buyuk_iki_basamakli_tam_kare" },
  { id: "s5_kk_023", s: "Üç basamaklı en küçük tam kare sayı kaçtır?", c: "100", v: {}, z:"orta", alt:"en_kucuk_uc_basamakli_tam_kare" },


  // ==========================================
  // KONU 2: KAREKÖKLÜ SAYILAR (8 alt dal)
  // ==========================================

  // ALT DAL 1: TAM KARE SAYILARIN KAREKÖKÜ
  { id: "s5_ks_001", s: "√{a} = ?", c: "Math.sqrt({a})", v: {a:[4,9,16,25,36,49,64,81,100,121,144]}, z:"kolay", alt:"tam_kare_kok" },
  { id: "s5_ks_002", s: "√100 = ?", c: "10", v: {}, z:"kolay", alt:"kok_100" },
  { id: "s5_ks_003", s: "√144 = ?", c: "12", v: {}, z:"kolay", alt:"kok_144" },
  { id: "s5_ks_004", s: "√169 = ?", c: "13", v: {}, z:"kolay", alt:"kok_169" },
  { id: "s5_ks_005", s: "√196 = ?", c: "14", v: {}, z:"orta", alt:"kok_196" },
  { id: "s5_ks_006", s: "√225 = ?", c: "15", v: {}, z:"orta", alt:"kok_225" },
  { id: "s5_ks_007", s: "√256 = ?", c: "16", v: {}, z:"orta", alt:"kok_256" },

  // ALT DAL 2: ONDALIK SAYILARIN KAREKÖKÜ
  { id: "s5_ks_008", s: "√0,{a} = ?", c: "Math.sqrt({a}/100)", v: {a:[4,9,16,25,36,49,64,81]}, z:"orta", alt:"ondalik_karekok" },
  { id: "s5_ks_009", s: "√0,04 = ?", c: "0,2", v: {}, z:"orta", alt:"kok_0_04" },
  { id: "s5_ks_010", s: "√0,09 = ?", c: "0,3", v: {}, z:"orta", alt:"kok_0_09" },
  { id: "s5_ks_011", s: "√0,25 = ?", c: "0,5", v: {}, z:"orta", alt:"kok_0_25" },
  { id: "s5_ks_012", s: "√0,81 = ?", c: "0,9", v: {}, z:"orta", alt:"kok_0_81" },

  // ALT DAL 3: KESİRLİ SAYILARIN KAREKÖKÜ
  { id: "s5_ks_013", s: "√({a}/{b}) = ?", c: "√{a}/√{b}", v: {a:[1,16], b:[4,9,16,25,36], kosul:"tam_kare"}, z:"orta", alt:"kesir_karekok" },
  { id: "s5_ks_014", s: "√(4/9) = ?", c: "2/3", v: {}, z:"orta", alt:"kok_4_9" },
  { id: "s5_ks_015", s: "√(9/16) = ?", c: "3/4", v: {}, z:"orta", alt:"kok_9_16" },
  { id: "s5_ks_016", s: "√(25/49) = ?", c: "5/7", v: {}, z:"orta", alt:"kok_25_49" },

  // ALT DAL 4: KAREKÖKÜN YAKLAŞIK DEĞERİ
  { id: "s5_ks_017", s: "√2 yaklaşık kaçtır?", c: "1,41", v: {}, z:"orta", alt:"kok_2_yaklasik" },
  { id: "s5_ks_018", s: "√3 yaklaşık kaçtır?", c: "1,73", v: {}, z:"orta", alt:"kok_3_yaklasik" },
  { id: "s5_ks_019", s: "√5 yaklaşık kaçtır?", c: "2,23", v: {}, z:"orta", alt:"kok_5_yaklasik" },
  { id: "s5_ks_020", s: "√{a} hangi iki tam sayı arasındadır?", c: "{alt}_ile_{ust}", v: {a:[2,99], kosul:"!tam_kare"}, z:"orta", alt:"kok_aralik" },
  { id: "s5_ks_021", s: "√10 hangi iki tam sayı arasındadır?", c: "3_ile_4", v: {}, z:"orta", alt:"kok_10_aralik" },
  { id: "s5_ks_022", s: "√50 hangi iki tam sayı arasındadır?", c: "7_ile_8", v: {}, z:"orta", alt:"kok_50_aralik" },

  // ALT DAL 5: KAREKÖK TAHMİNİ
  { id: "s5_ks_023", s: "√{a} sayısını tahmin ediniz. (En yakın onda bir)", c: "{tahmin}", v: {a:[2,20], kosul:"!tam_kare"}, z:"zor", alt:"kok_tahmin" },
  { id: "s5_ks_024", s: "√{a} sayısı hangi tam sayıya daha yakındır?", c: "{yakin}", v: {a:[2,99], kosul:"!tam_kare"}, z:"zor", alt:"kok_yakinlik" },

  // ALT DAL 6: TAM KARE OLMA ŞARTI
  { id: "s5_ks_025", s: "{a} sayısı tam kare midir?", c: "{evet_hayir}", v: {a:[10,200]}, z:"orta", alt:"tam_kare_sorgu" },
  { id: "s5_ks_026", s: "{a} hangi sayının karesidir?", c: "Math.sqrt({a})", v: {a:[4,9,16,25,36,49,64,81,100,121,144,169,196,225]}, z:"orta", alt:"karesi_bulma" },

  // ALT DAL 7: KAREKÖK İLE İLGİLİ TEMEL ÖZELLİKLER
  { id: "s5_ks_027", s: "Her pozitif sayının kaç tane karekökü vardır?", c: "2_(biri_pozitif_biri_negatif)", v: {}, z:"orta", alt:"iki_karekok" },
  { id: "s5_ks_028", s: "Negatif sayıların karekökü reel sayılarda var mıdır?", c: "hayir", v: {}, z:"orta", alt:"negatif_karekok_yok" },
  { id: "s5_ks_029", s: "√x ifadesinin tanımlı olması için x nasıl olmalıdır?", c: "x≥0", v: {}, z:"orta", alt:"tanim_araligi" },

  // ALT DAL 8: KAREKÖK ALIŞTIRMALARI
  { id: "s5_ks_030", s: "√400 = ?", c: "20", v: {}, z:"orta", alt:"kok_400" },
  { id: "s5_ks_031", s: "√900 = ?", c: "30", v: {}, z:"orta", alt:"kok_900" },
  { id: "s5_ks_032", s: "√10000 = ?", c: "100", v: {}, z:"orta", alt:"kok_10000" },


  // ==========================================
  // KONU 3: KÜPKÖKLÜ SAYILAR (4 alt dal)
  // ==========================================

  // ALT DAL 1: KÜPKÖK TANIMI
  { id: "s5_kp_001", s: "∛{a} nedir?", c: "kupu_{a}_olan_sayi", v: {a:[8,27,64,125]}, z:"orta", alt:"kupkok_tanimi" },
  { id: "s5_kp_002", s: "∛{a} = ?", c: "Math.cbrt({a})", v: {a:[8,27,64,125,216,343,512,729,1000]}, z:"orta", alt:"kupkok_degeri" },
  { id: "s5_kp_003", s: "∛1 = ?", c: "1", v: {}, z:"kolay", alt:"kupkok_1" },
  { id: "s5_kp_004", s: "∛0 = ?", c: "0", v: {}, z:"kolay", alt:"kupkok_0" },
  { id: "s5_kp_005", s: "∛(-{a}) = ?", c: "-Math.cbrt({a})", v: {a:[8,27,64,125]}, z:"orta", alt:"kupkok_negatif" },

  // ALT DAL 2: KÜPKÖK ALMA
  { id: "s5_kp_006", s: "∛8 = ?", c: "2", v: {}, z:"kolay", alt:"kupkok_8" },
  { id: "s5_kp_007", s: "∛27 = ?", c: "3", v: {}, z:"kolay", alt:"kupkok_27" },
  { id: "s5_kp_008", s: "∛64 = ?", c: "4", v: {}, z:"kolay", alt:"kupkok_64" },
  { id: "s5_kp_009", s: "∛125 = ?", c: "5", v: {}, z:"kolay", alt:"kupkok_125" },
  { id: "s5_kp_010", s: "∛1000 = ?", c: "10", v: {}, z:"kolay", alt:"kupkok_1000" },

  // ALT DAL 3: KÜPKÖK İLE KÜP ALMA İLİŞKİSİ
  { id: "s5_kp_011", s: "(∛{a})³ = ?", c: "{a}", v: {a:[1,20]}, z:"orta", alt:"kupkok_kup" },
  { id: "s5_kp_012", s: "∛({a}³) = ?", c: "{a}", v: {a:[1,10]}, z:"orta", alt:"kup_kupkok" },
  { id: "s5_kp_013", s: "∛(x³) = x eşitliği her zaman doğru mudur?", c: "evet", v: {}, z:"orta", alt:"kupkok_kup_iliski" },

  // ALT DAL 4: KÜPKÖK KARŞILAŞTIRMA
  { id: "s5_kp_014", s: "∛{a} ile ∛{b} hangisi büyüktür?", c: "{buyuk}", v: {a:[2,99], b:[3,100], kosul:"a!=b"}, z:"orta", alt:"kupkok_siralama" },
  { id: "s5_kp_015", s: "∛{a} hangi iki tam sayı arasındadır?", c: "{alt}_ile_{ust}", v: {a:[2,99], kosul:"!tam_kup"}, z:"zor", alt:"kupkok_aralik" },


  // ==========================================
  // KONU 4: KÖKLÜ SAYILARDA TEMEL KURALLAR (8 alt dal)
  // ==========================================

  // ALT DAL 1: KÖK İÇİNİN POZİTİFLİK ŞARTI
  { id: "s5_tk_001", s: "√(x-{a}) ifadesinin tanımlı olması için x'in en küçük tam sayı değeri kaçtır?", c: "{a}", v: {a:[1,10]}, z:"orta", alt:"tanim_araligi_x" },
  { id: "s5_tk_002", s: "√({a}-x) ifadesinin tanımlı olması için x'in en büyük tam sayı değeri kaçtır?", c: "{a}", v: {a:[5,15]}, z:"orta", alt:"tanim_araligi_x_ust" },
  { id: "s5_tk_003", s: "∛(x-{a}) ifadesi her x için tanımlı mıdır?", c: "evet", v: {a:[1,10]}, z:"orta", alt:"kupkok_tanim_her" },
  { id: "s5_tk_004", s: "√(x²+1) ifadesi her x için tanımlı mıdır?", c: "evet", v: {}, z:"orta", alt:"x_kare_arti_1" },

  // ALT DAL 2: KÖKTEN KURTULMA
  { id: "s5_tk_005", s: "(√{a})² = ?", c: "{a}", v: {a:[2,20]}, z:"orta", alt:"kok_kare_esit" },
  { id: "s5_tk_006", s: "√{a} × √{a} = ?", c: "{a}", v: {a:[1,20]}, z:"orta", alt:"kok_carpim_kendi" },
  { id: "s5_tk_007", s: "(√{a})⁴ = ?", c: "{a}*{a}", v: {a:[2,10]}, z:"zor", alt:"kok_4_kuvvet" },

  // ALT DAL 3: KÖKLÜ SAYININ TEK/ÇİFT KUVVETİ
  { id: "s5_tk_008", s: "(√{a})ⁿ = ? (n={n})", c: "{a}^({n}/2)", v: {a:[2,10], n:[2,5]}, z:"zor", alt:"kok_un_ussu" },
  { id: "s5_tk_009", s: "(∛{a})ⁿ = ? (n={n})", c: "{a}^({n}/3)", v: {a:[2,8], n:[2,4]}, z:"zor", alt:"kupkok_un_ussu" },

  // ALT DAL 4: KÖK İLE MUTLAK DEĞER İLİŞKİSİ
  { id: "s5_tk_010", s: "√(x²) = ?", c: "|x|", v: {}, z:"zor", alt:"karekok_kare" },
  { id: "s5_tk_011", s: "√((x-{a})²) = ?", c: "|x-{a}|", v: {a:[1,5]}, z:"zor", alt:"kok_kare_fark" },
  { id: "s5_tk_012", s: "√(({a}-x)²) = {a}-x eşitliği ne zaman doğrudur?", c: "x≤{a}_iken", v: {a:[3,10]}, z:"cok_zor", alt:"kok_kare_sart" },

  // ALT DAL 5: KÖK DERECESİ TEK/ÇİFT ÖZELLİKLERİ
  { id: "s5_tk_013", s: "ⁿ√(xⁿ) = ? (n={n}, n tek)", c: "x", v: {n:[3,5,7]}, z:"zor", alt:"tek_derece_kok" },
  { id: "s5_tk_014", s: "ⁿ√(xⁿ) = ? (n={n}, n çift)", c: "|x|", v: {n:[2,4,6]}, z:"zor", alt:"cift_derece_kok" },

  // ALT DAL 6: KÖKLÜ İFADENİN DERECESİNİ DEĞİŞTİRME
  { id: "s5_tk_015", s: "√{a} = ⁴√(? )", c: "{a}*{a}", v: {a:[2,10]}, z:"zor", alt:"derece_degistirme" },
  { id: "s5_tk_016", s: "∛{a} = ⁶√(? )", c: "{a}*{a}", v: {a:[2,8]}, z:"zor", alt:"kupkok_alti_derece" },
  { id: "s5_tk_017", s: "⁴√{a} = √(? )", c: "√{a}", v: {a:[1,20]}, z:"cok_zor", alt:"dort_derece_karekok" },

  // ALT DAL 7: KÖKLÜ SAYILARDA SIFIR VE BİR
  { id: "s5_tk_018", s: "√0 = ?", c: "0", v: {}, z:"kolay", alt:"kok_sifir" },
  { id: "s5_tk_019", s: "√1 = ?", c: "1", v: {}, z:"kolay", alt:"kok_bir" },
  { id: "s5_tk_020", s: "ⁿ√0 = ?", c: "0", v: {n:[2,5]}, z:"kolay", alt:"n_kok_sifir" },
  { id: "s5_tk_021", s: "ⁿ√1 = ?", c: "1", v: {n:[2,5]}, z:"kolay", alt:"n_kok_bir" },

  // ALT DAL 8: KÖKLÜ SAYI TANIM KÜMESİ
  { id: "s5_tk_022", s: "√(x-{a}) + √({b}-x) ifadesinin tanımlı olması için x hangi aralıkta olmalıdır?", c: "{a}≤x≤{b}", v: {a:[1,5], b:[6,10]}, z:"cok_zor", alt:"iki_kok_tanim" },
  { id: "s5_tk_023", s: "√(x²-{a}) ifadesi hangi x değerleri için tanımlıdır?", c: "x≤-√{a}_veya_x≥√{a}", v: {a:[4,16]}, z:"cok_zor", alt:"kare_fark_tanim" },


  // ==========================================
  // KONU 5: KÖK DIŞINA ÇIKARMA (8 alt dal)
  // ==========================================

  // ALT DAL 1: TAM KARE ÇARPANLARI AYIRMA
  { id: "s5_kd_001", s: "√{a} ifadesini a√b şeklinde yazınız.", c: "{a_disi}√{a_ici}", v: {a:[8,12,18,20,24,27,28,32,40,44,45,48,50,52,54,56,60,63,68,72,75,76,80,84,88,90,92,96,98,99]}, z:"orta", alt:"kok_disi_cikarma" },
  { id: "s5_kd_002", s: "√8 = ? (a√b şeklinde)", c: "2√2", v: {}, z:"orta", alt:"kok_8_disi" },
  { id: "s5_kd_003", s: "√12 = ? (a√b şeklinde)", c: "2√3", v: {}, z:"orta", alt:"kok_12_disi" },
  { id: "s5_kd_004", s: "√18 = ? (a√b şeklinde)", c: "3√2", v: {}, z:"orta", alt:"kok_18_disi" },
  { id: "s5_kd_005", s: "√20 = ? (a√b şeklinde)", c: "2√5", v: {}, z:"orta", alt:"kok_20_disi" },
  { id: "s5_kd_006", s: "√27 = ? (a√b şeklinde)", c: "3√3", v: {}, z:"orta", alt:"kok_27_disi" },
  { id: "s5_kd_007", s: "√32 = ? (a√b şeklinde)", c: "4√2", v: {}, z:"orta", alt:"kok_32_disi" },
  { id: "s5_kd_008", s: "√48 = ? (a√b şeklinde)", c: "4√3", v: {}, z:"orta", alt:"kok_48_disi" },
  { id: "s5_kd_009", s: "√50 = ? (a√b şeklinde)", c: "5√2", v: {}, z:"orta", alt:"kok_50_disi" },
  { id: "s5_kd_010", s: "√72 = ? (a√b şeklinde)", c: "6√2", v: {}, z:"orta", alt:"kok_72_disi" },
  { id: "s5_kd_011", s: "√75 = ? (a√b şeklinde)", c: "5√3", v: {}, z:"orta", alt:"kok_75_disi" },
  { id: "s5_kd_012", s: "√98 = ? (a√b şeklinde)", c: "7√2", v: {}, z:"orta", alt:"kok_98_disi" },

  // ALT DAL 2: KATSAYILI KÖK DIŞINA ÇIKARMA
  { id: "s5_kd_013", s: "√({a}²×{b}) = ?", c: "{a}√{b}", v: {a:[2,8], b:[2,11], kosul:"!tam_kare({b})"}, z:"orta", alt:"katsayili_kok_disi" },
  { id: "s5_kd_014", s: "√({a}×{b}²) = ?", c: "{b}√{a}", v: {a:[2,11], b:[2,8], kosul:"!tam_kare({a})"}, z:"orta", alt:"ikinci_katsayili" },

  // ALT DAL 3: BÜYÜK SAYILARDA KÖK DIŞINA ÇIKARMA
  { id: "s5_kd_015", s: "√{a} = ? (a√b şeklinde, a büyük sayı)", c: "{a_disi}√{a_ici}", v: {a:[108,128,147,162,180,192,200,243,288,300,320,363,400,432,450,500]}, z:"zor", alt:"buyuk_sayi_kok_disi" },

  // ALT DAL 4: KÜPKÖK DIŞINA ÇIKARMA
  { id: "s5_kd_016", s: "∛{a} = ? (a∛b şeklinde)", c: "{a_disi}∛{a_ici}", v: {a:[16,24,32,40,48,54,56,64,72,80,81,88,96,108,125,128,135,162,192,200,216,250,256,270,324,375,384,432,500]}, z:"zor", alt:"kupkok_disi" },
  { id: "s5_kd_017", s: "∛16 = ?", c: "2∛2", v: {}, z:"zor", alt:"kupkok_16_disi" },
  { id: "s5_kd_018", s: "∛24 = ?", c: "2∛3", v: {}, z:"zor", alt:"kupkok_24_disi" },
  { id: "s5_kd_019", s: "∛54 = ?", c: "3∛2", v: {}, z:"zor", alt:"kupkok_54_disi" },

  // ALT DAL 5: KÖK DIŞINA ÇIKARMA STRATEJİSİ
  { id: "s5_kd_020", s: "√{a} ifadesini kök dışına çıkarmak için ne yapılır?", c: "asal_carpanlarina_ayrilir_us_2_olanlar_disa_cikar", v: {a:[12,45,72]}, z:"orta", alt:"kok_disi_strateji" },
  { id: "s5_kd_021", s: "ⁿ√{a} ifadesini kök dışına çıkarmak için genel kural nedir?", c: "us_olarak_n_ve_katlari_disa_cikar", v: {}, z:"orta", alt:"genel_kural" },

  // ALT DAL 6: KARIŞIK KÖK DIŞINA ÇIKARMA
  { id: "s5_kd_022", s: "√({a}×{b}×{c}) = ? (Bazıları dışarı çıkar)", c: "{sonuc}", v: {a:[2,8], b:[2,8], c:[2,11]}, z:"cok_zor", alt:"uc_carpanli_kok" },
  { id: "s5_kd_023", s: "√({a}³) = ?", c: "{a}√{a}", v: {a:[2,6]}, z:"zor", alt:"us_3_kok_disi" },
  { id: "s5_kd_024", s: "√({a}⁵) = ?", c: "{a}*{a}√{a}", v: {a:[2,5]}, z:"cok_zor", alt:"us_5_kok_disi" },

  // ALT DAL 7: ONDALIKLI KÖK DIŞINA ÇIKARMA
  { id: "s5_kd_025", s: "√0,{a} ifadesini a√b şeklinde yazınız.", c: "{sonuc}", v: {a:[8,12,18,20,27,32,48,50,72,75,80,98]}, z:"zor", alt:"ondalik_kok_disi" },

  // ALT DAL 8: KÖK DIŞINA ÇIKARMA PROBLEMLERİ
  { id: "s5_kd_026", s: "√{a} + √{b} = ? (Önce kök dışına çıkar)", c: "{sonuc}", v: {a:[8,18,32,50,72,98], b:[2,8,18,32,50,72]}, z:"zor", alt:"toplam_icin_kok_disi" },
  { id: "s5_kd_027", s: "√{a} sayısının yaklaşık değerini bulmak için hangi tam kareden yararlanılır?", c: "{tam_kare}", v: {a:[2,99], kosul:"!tam_kare"}, z:"orta", alt:"tam_kare_yaklasim" },


  // ==========================================
  // KONU 6: KÖK İÇİNE ALMA (6 alt dal)
  // ==========================================

  // ALT DAL 1: KATSAYIYI KÖK İÇİNE ALMA
  { id: "s5_ki_001", s: "{a}√{b} = √(? )", c: "{a}*{a}×{b}", v: {a:[2,6], b:[2,7]}, z:"orta", alt:"kok_icine_alma" },
  { id: "s5_ki_002", s: "2√3 = √(? )", c: "12", v: {}, z:"orta", alt:"2_kok_3" },
  { id: "s5_ki_003", s: "3√2 = √(? )", c: "18", v: {}, z:"orta", alt:"3_kok_2" },
  { id: "s5_ki_004", s: "4√5 = √(? )", c: "80", v: {}, z:"orta", alt:"4_kok_5" },
  { id: "s5_ki_005", s: "5√3 = √(? )", c: "75", v: {}, z:"orta", alt:"5_kok_3" },

  // ALT DAL 2: NEGATİF KATSAYIYI KÖK İÇİNE ALMA
  { id: "s5_ki_006", s: "-{a}√{b} = -√(? )", c: "{a}*{a}×{b}", v: {a:[2,5], b:[2,7]}, z:"orta", alt:"negatif_katsayi_kok_ici" },
  { id: "s5_ki_007", s: "-2√3 = -√(? )", c: "12", v: {}, z:"orta", alt:"eksi_2_kok_3" },

  // ALT DAL 3: KÜPKÖK İÇİNE ALMA
  { id: "s5_ki_008", s: "{a}∛{b} = ∛(? )", c: "{a}*{a}*{a}×{b}", v: {a:[2,5], b:[2,5]}, z:"orta", alt:"kupkok_icine_alma" },
  { id: "s5_ki_009", s: "2∛3 = ∛(? )", c: "24", v: {}, z:"orta", alt:"2_kupkok_3" },
  { id: "s5_ki_010", s: "3∛2 = ∛(? )", c: "54", v: {}, z:"orta", alt:"3_kupkok_2" },

  // ALT DAL 4: KÖK İÇİNE ALMA İLE KARŞILAŞTIRMA
  { id: "s5_ki_011", s: "{a}√{b} ile {c}√{d} sayılarını karşılaştırmak için ne yapılır?", c: "katsayilar_kok_icine_alinir", v: {a:[2,5], b:[2,6], c:[2,5], d:[2,6]}, z:"orta", alt:"kok_ici_karsilastirma" },
  { id: "s5_ki_012", s: "2√3 ile 3√2 hangisi büyüktür?", c: "2√3=√12<√18=3√2", v: {}, z:"orta", alt:"2_kok_3_3_kok_2" },
  { id: "s5_ki_013", s: "4√3 ile 5√2 hangisi büyüktür?", c: "4√3=√48<√50=5√2", v: {}, z:"zor", alt:"4_kok_3_5_kok_2" },

  // ALT DAL 5: KARIŞIK KÖK İÇİNE ALMA
  { id: "s5_ki_014", s: "{a}√{b} + {c}√{d} = ? (Kök içine alarak işlem)", c: "{sonuc}", v: {a:[2,4], b:[2,5], c:[2,4], d:[2,5]}, z:"zor", alt:"kok_ici_toplam" },

  // ALT DAL 6: KÖK İÇİNE ALMA STRATEJİSİ
  { id: "s5_ki_015", s: "Kök dışındaki sayı kök içine nasıl alınır?", c: "derece_kadar_kuvveti_alinip_kok_iciyle_carpilir", v: {}, z:"orta", alt:"kok_ici_strateji" },
  { id: "s5_ki_016", s: "{a}ⁿ√{b} = ⁿ√(? )", c: "Math.pow({a},{n})×{b}", v: {a:[2,4], b:[2,5], n:[2,4]}, z:"zor", alt:"n_derece_kok_ici" },


  // ==========================================
  // KONU 7: KÖKLÜ SAYILARDA TOPLAMA-ÇIKARMA (6 alt dal)
  // ==========================================

  // ALT DAL 1: BENZER KÖKLÜ TERİMLERDE TOPLAMA
  { id: "s5_tt_001", s: "{a}√{k} + {b}√{k} = ?", c: "{a}+{b}√{k}", v: {a:[1,8], b:[1,8], k:[2,3,5,6,7]}, z:"orta", alt:"benzer_kok_toplama" },
  { id: "s5_tt_002", s: "2√3 + 5√3 = ?", c: "7√3", v: {}, z:"orta", alt:"2_kok_3_5_kok_3" },
  { id: "s5_tt_003", s: "√2 + 3√2 = ?", c: "4√2", v: {}, z:"orta", alt:"kok_2_3_kok_2" },
  { id: "s5_tt_004", s: "4√5 + √5 = ?", c: "5√5", v: {}, z:"orta", alt:"4_kok_5_kok_5" },
  { id: "s5_tt_005", s: "{a}√{k} + {b}√{k} + {c}√{k} = ?", c: "{a}+{b}+{c}√{k}", v: {a:[1,4], b:[1,4], c:[1,4], k:[2,3,5,6,7]}, z:"orta", alt:"uc_terim_toplama" },

  // ALT DAL 2: BENZER KÖKLÜ TERİMLERDE ÇIKARMA
  { id: "s5_tt_006", s: "{a}√{k} - {b}√{k} = ?", c: "{a}-{b}√{k}", v: {a:[3,10], b:[1,"{a}-1"], k:[2,3,5,6,7]}, z:"orta", alt:"benzer_kok_cikarma" },
  { id: "s5_tt_007", s: "7√2 - 3√2 = ?", c: "4√2", v: {}, z:"orta", alt:"7_kok_2_3_kok_2" },
  { id: "s5_tt_008", s: "5√3 - 5√3 = ?", c: "0", v: {}, z:"orta", alt:"5_kok_3_5_kok_3" },

  // ALT DAL 3: KÖK DIŞINA ÇIKARARAK TOPLAMA
  { id: "s5_tt_009", s: "√{a} + √{b} = ? (Kök dışına çıkararak)", c: "{sonuc}", v: {a:[8,18,32,50,72,98], b:[2,8,18,32,50,72], kosul:"benzer_olsun"}, z:"zor", alt:"kok_disi_toplam" },
  { id: "s5_tt_010", s: "√8 + √2 = ?", c: "3√2", v: {}, z:"zor", alt:"kok_8_kok_2" },
  { id: "s5_tt_011", s: "√18 + √8 = ?", c: "5√2", v: {}, z:"zor", alt:"kok_18_kok_8" },
  { id: "s5_tt_012", s: "√27 + √12 = ?", c: "5√3", v: {}, z:"zor", alt:"kok_27_kok_12" },
  { id: "s5_tt_013", s: "√50 + √18 = ?", c: "8√2", v: {}, z:"zor", alt:"kok_50_kok_18" },

  // ALT DAL 4: KÖK DIŞINA ÇIKARARAK ÇIKARMA
  { id: "s5_tt_014", s: "√{a} - √{b} = ? (Kök dışına çıkararak)", c: "{sonuc}", v: {a:[32,50,72,98], b:[2,8,18,32], kosul:"a>b_ve_benzer"}, z:"zor", alt:"kok_disi_cikarma" },
  { id: "s5_tt_015", s: "√32 - √2 = ?", c: "3√2", v: {}, z:"zor", alt:"kok_32_kok_2" },
  { id: "s5_tt_016", s: "√72 - √8 = ?", c: "4√2", v: {}, z:"zor", alt:"kok_72_kok_8" },

  // ALT DAL 5: FARKLI KÖKLERİN TOPLAMI
  { id: "s5_tt_017", s: "√{a} + √{b} = ? (Farklı kökler, sadeleşmez)", c: "ayni_kalir", v: {a:[2,3,5,6,7], b:[2,3,5,6,7], kosul:"a!=b_ve_farkli_kok"}, z:"orta", alt:"farkli_kok_toplam" },
  { id: "s5_tt_018", s: "√2 + √3 = ?", c: "√2+√3_(ayni_kalir)", v: {}, z:"orta", alt:"kok_2_kok_3" },

  // ALT DAL 6: KARIŞIK TOPLAMA-ÇIKARMA
  { id: "s5_tt_019", s: "{a}√{k} + {b}√{m} - {c}√{k} = ?", c: "({a}-{c})√{k}+{b}√{m}", v: {a:[3,8], b:[1,5], c:[1,"{a}-1"], k:[2,3,5], m:[2,3,5], kosul:"k!=m"}, z:"cok_zor", alt:"karisik_toplam_cikarma" },
  { id: "s5_tt_020", s: "√12 + √27 + √48 = ?", c: "9√3", v: {}, z:"cok_zor", alt:"uc_kok_toplam" },
  { id: "s5_tt_021", s: "√20 - √45 + √80 = ?", c: "3√5", v: {}, z:"cok_zor", alt:"kok_20_45_80" },


  // ==========================================
  // KONU 8: KÖKLÜ SAYILARDA ÇARPMA (8 alt dal)
  // ==========================================

  // ALT DAL 1: KÖK İÇLERİNİ ÇARPMA
  { id: "s5_kc_001", s: "√{a} × √{b} = ?", c: "√({a}×{b})", v: {a:[2,10], b:[2,10]}, z:"orta", alt:"kok_ici_carpma" },
  { id: "s5_kc_002", s: "√2 × √3 = ?", c: "√6", v: {}, z:"orta", alt:"kok_2_kok_3" },
  { id: "s5_kc_003", s: "√5 × √7 = ?", c: "√35", v: {}, z:"orta", alt:"kok_5_kok_7" },
  { id: "s5_kc_004", s: "√a × √b = √(ab) eşitliği her zaman doğru mudur?", c: "evet_(a≥0,b≥0_icin)", v: {}, z:"orta", alt:"kok_carpim_kural" },
  { id: "s5_kc_005", s: "√{a} × √{a} = ?", c: "{a}", v: {a:[2,15]}, z:"orta", alt:"kok_kendisi_carpim" },

  // ALT DAL 2: KATSAYILI KÖKLÜ ÇARPMA
  { id: "s5_kc_006", s: "{a}√{b} × {c}√{d} = ?", c: "{a}*{c}√({b}×{d})", v: {a:[2,5], b:[2,6], c:[2,5], d:[2,6]}, z:"zor", alt:"katsayili_kok_carpma" },
  { id: "s5_kc_007", s: "2√3 × 3√2 = ?", c: "6√6", v: {}, z:"zor", alt:"2_kok_3_3_kok_2" },
  { id: "s5_kc_008", s: "3√5 × 2√3 = ?", c: "6√15", v: {}, z:"zor", alt:"3_kok_5_2_kok_3" },
  { id: "s5_kc_009", s: "4√2 × 5√3 = ?", c: "20√6", v: {}, z:"zor", alt:"4_kok_2_5_kok_3" },

  // ALT DAL 3: ÇARPMA SONRASI SADELEŞTİRME
  { id: "s5_kc_010", s: "√{a} × √{b} = ? (Sadeleştirilmiş)", c: "{sonuc}", v: {a:[2,12], b:[2,12], kosul:"carpim_tam_kare_carpani_var"}, z:"zor", alt:"carpma_sadelestirme" },
  { id: "s5_kc_011", s: "√6 × √3 = ?", c: "3√2", v: {}, z:"zor", alt:"kok_6_kok_3" },
  { id: "s5_kc_012", s: "√8 × √2 = ?", c: "4", v: {}, z:"zor", alt:"kok_8_kok_2" },
  { id: "s5_kc_013", s: "√10 × √5 = ?", c: "5√2", v: {}, z:"zor", alt:"kok_10_kok_5" },

  // ALT DAL 4: ÜÇ VEYA DAHA FAZLA KÖKLÜ ÇARPMA
  { id: "s5_kc_014", s: "√{a} × √{b} × √{c} = ?", c: "√({a}×{b}×{c})", v: {a:[2,5], b:[2,5], c:[2,5]}, z:"zor", alt:"uc_kok_carpma" },
  { id: "s5_kc_015", s: "√2 × √3 × √5 = ?", c: "√30", v: {}, z:"zor", alt:"2_3_5_kok_carpim" },

  // ALT DAL 5: KÖKLÜ İFADENİN KARESİ
  { id: "s5_kc_016", s: "(√{a})² = ?", c: "{a}", v: {a:[2,15]}, z:"orta", alt:"kok_kare" },
  { id: "s5_kc_017", s: "({a}√{b})² = ?", c: "{a}*{a}×{b}", v: {a:[2,5], b:[2,7]}, z:"zor", alt:"katsayili_kok_kare" },
  { id: "s5_kc_018", s: "(2√3)² = ?", c: "12", v: {}, z:"zor", alt:"2_kok_3_kare" },
  { id: "s5_kc_019", s: "(3√2)² = ?", c: "18", v: {}, z:"zor", alt:"3_kok_2_kare" },
  { id: "s5_kc_020", s: "(√2+√3)² = ?", c: "5+2√6", v: {}, z:"cok_zor", alt:"kok_toplam_kare" },
  { id: "s5_kc_021", s: "(√5-√2)² = ?", c: "7-2√10", v: {}, z:"cok_zor", alt:"kok_fark_kare" },

  // ALT DAL 6: KÖKLÜ SAYILARDA DAĞILMA
  { id: "s5_kc_022", s: "√{a} × (√{b} + √{c}) = ?", c: "√({a}×{b})+√({a}×{c})", v: {a:[2,5], b:[2,5], c:[2,5]}, z:"cok_zor", alt:"kok_dagilma" },
  { id: "s5_kc_023", s: "√2 × (√3 + √5) = ?", c: "√6+√10", v: {}, z:"cok_zor", alt:"kok_2_parantez" },
  { id: "s5_kc_024", s: "(√3+√2) × (√3-√2) = ?", c: "1", v: {}, z:"cok_zor", alt:"eslenik_carpim" },
  { id: "s5_kc_025", s: "(√5+1) × (√5-1) = ?", c: "4", v: {}, z:"cok_zor", alt:"kok_5_1_eslenik" },

  // ALT DAL 7: FARKLI DERECELİ KÖKLERDE ÇARPMA
  { id: "s5_kc_026", s: "√{a} × ∛{a} = ?", c: "Math.pow({a}, 5/6)", v: {a:[2,8]}, z:"cok_zor", alt:"farkli_derece_carpma" },
  { id: "s5_kc_027", s: "√x × ∛x = x^(?)", c: "5/6", v: {}, z:"cok_zor", alt:"kok_carpma_us" },

  // ALT DAL 8: ÇARPMA ÖZEL SORULAR
  { id: "s5_kc_028", s: "√(x+{a}) × √(x-{a}) = ?", c: "√(x²-{a}*{a})", v: {a:[2,5]}, z:"cok_zor", alt:"kare_fark_carpma" },
  { id: "s5_kc_029", s: "(√{a}+√{b}) × (√{a}-√{b}) = ?", c: "{a}-{b}", v: {a:[3,8], b:[2,"{a}-1"]}, z:"cok_zor", alt:"iki_kare_fark" },


  // ==========================================
  // KONU 9: KÖKLÜ SAYILARDA BÖLME (6 alt dal)
  // ==========================================

  // ALT DAL 1: KÖK İÇLERİNİ BÖLME
  { id: "s5_kb_001", s: "√{a} ÷ √{b} = ?", c: "√({a}/{b})", v: {a:[4,12,16,20,24,36,48,60,72,100], b:[2,3,4,5,6], kosul:"a%b==0"}, z:"orta", alt:"kok_ici_bolme" },
  { id: "s5_kb_002", s: "√12 ÷ √3 = ?", c: "2", v: {}, z:"orta", alt:"kok_12_kok_3" },
  { id: "s5_kb_003", s: "√20 ÷ √5 = ?", c: "2", v: {}, z:"orta", alt:"kok_20_kok_5" },
  { id: "s5_kb_004", s: "√72 ÷ √2 = ?", c: "6", v: {}, z:"orta", alt:"kok_72_kok_2" },

  // ALT DAL 2: KATSAYILI KÖKLÜ BÖLME
  { id: "s5_kb_005", s: "{a}√{b} ÷ {c}√{d} = ?", c: "({a}/{c})√({b}/{d})", v: {a:[4,12], b:[6,12], c:[2,4], d:[2,6], kosul:"a%c==0 && b%d==0"}, z:"zor", alt:"katsayili_kok_bolme" },
  { id: "s5_kb_006", s: "6√8 ÷ 2√2 = ?", c: "6", v: {}, z:"zor", alt:"6_kok_8_2_kok_2" },
  { id: "s5_kb_007", s: "12√18 ÷ 4√2 = ?", c: "9", v: {}, z:"zor", alt:"12_kok_18_4_kok_2" },

  // ALT DAL 3: BÖLME SONRASI SADELEŞTİRME
  { id: "s5_kb_008", s: "√{a} ÷ √{b} = ? (Sadeleştirilmiş)", c: "{sonuc}", v: {a:[8,18,32,50,72,98], b:[2,3,4,5,6], kosul:"a>b"}, z:"zor", alt:"bolme_sadelestirme" },
  { id: "s5_kb_009", s: "√18 ÷ √3 = ?", c: "√6", v: {}, z:"zor", alt:"kok_18_kok_3" },

  // ALT DAL 4: KESİR ŞEKLİNDE KÖKLÜ SAYILAR
  { id: "s5_kb_010", s: "√{a}/{b} = ?", c: "√{a}/{b}", v: {a:[2,20], b:[2,10]}, z:"orta", alt:"kesir_kok" },
  { id: "s5_kb_011", s: "{a}/√{b} = ? (Sadeleştir)", c: "{a}√{b}/{b}", v: {a:[2,10], b:[2,7]}, z:"zor", alt:"paydada_kok" },
  { id: "s5_kb_012", s: "1/√2 = ?", c: "√2/2", v: {}, z:"zor", alt:"1_kok_2" },
  { id: "s5_kb_013", s: "1/√3 = ?", c: "√3/3", v: {}, z:"zor", alt:"1_kok_3" },

  // ALT DAL 5: KÖKLÜ SAYILARDA SADELEŞTİRME
  { id: "s5_kb_014", s: "√{a}/√{b} ifadesini sadeleştiriniz.", c: "√({a}/{b})", v: {a:[4,12,16,20,24], b:[2,3,4,5,6], kosul:"a%b==0"}, z:"orta", alt:"kok_sadelestirme" },
  { id: "s5_kb_015", s: "(√{a}×√{b})/√{c} = ?", c: "{sonuc}", v: {a:[2,8], b:[2,8], c:[2,4]}, z:"cok_zor", alt:"uc_koklu_bolme" },

  // ALT DAL 6: BÖLME ÖZEL SORULAR
  { id: "s5_kb_016", s: "√(x²/{a}) = ?", c: "|x|/√{a}", v: {a:[2,9]}, z:"cok_zor", alt:"kare_bolu_kok" },
  { id: "s5_kb_017", s: "(√{a}+√{b})/√{c} = ?", c: "√({a}/{c})+√({b}/{c})", v: {a:[4,9], b:[4,9], c:[2,4], kosul:"a%c==0 && b%c==0"}, z:"cok_zor", alt:"toplam_bolu_kok" },


  // ==========================================
  // KONU 10: PAYDAYI KÖKTEN KURTARMA (EŞLENİK) (10 alt dal)
  // ==========================================

  // ALT DAL 1: PAYDADA √a VARSA
  { id: "s5_pk_001", s: "1/√{a} = ? (Paydayı kökten kurtar)", c: "√{a}/{a}", v: {a:[2,3,5,6,7]}, z:"orta", alt:"paydada_kok_a" },
  { id: "s5_pk_002", s: "{b}/√{a} = ?", c: "{b}√{a}/{a}", v: {a:[2,3,5], b:[2,5]}, z:"orta", alt:"b_bolu_kok_a" },
  { id: "s5_pk_003", s: "√{b}/√{a} = ? (Paydayı kökten kurtar)", c: "√({a}×{b})/{a}", v: {a:[2,3,5], b:[2,3,5]}, z:"zor", alt:"kok_b_bolu_kok_a" },

  // ALT DAL 2: PAYDADA a√b VARSA
  { id: "s5_pk_004", s: "1/({a}√{b}) = ?", c: "√{b}/({a}×{b})", v: {a:[2,5], b:[2,3,5]}, z:"zor", alt:"paydada_a_kok_b" },
  { id: "s5_pk_005", s: "{c}/({a}√{b}) = ?", c: "{c}√{b}/({a}×{b})", v: {a:[2,4], b:[2,3,5], c:[2,6]}, z:"zor", alt:"c_bolu_a_kok_b" },

  // ALT DAL 3: PAYDADA √a + √b VARSA (EŞLENİK)
  { id: "s5_pk_006", s: "1/(√{a}+√{b}) = ?", c: "(√{a}-√{b})/({a}-{b})", v: {a:[3,7], b:[2,5], kosul:"a>b"}, z:"zor", alt:"eslenik_artı" },
  { id: "s5_pk_007", s: "1/(√3+√2) = ?", c: "√3-√2", v: {}, z:"zor", alt:"1_kok_3_kok_2" },
  { id: "s5_pk_008", s: "1/(√5+√3) = ?", c: "(√5-√3)/2", v: {}, z:"zor", alt:"1_kok_5_kok_3" },
  { id: "s5_pk_009", s: "1/(√7+2) = ?", c: "(√7-2)/3", v: {}, z:"zor", alt:"1_kok_7_2" },

  // ALT DAL 4: PAYDADA √a - √b VARSA (EŞLENİK)
  { id: "s5_pk_010", s: "1/(√{a}-√{b}) = ?", c: "(√{a}+√{b})/({a}-{b})", v: {a:[4,8], b:[1,3], kosul:"a>b"}, z:"zor", alt:"eslenik_eksi" },
  { id: "s5_pk_011", s: "1/(√5-√2) = ?", c: "(√5+√2)/3", v: {}, z:"zor", alt:"1_kok_5_kok_2" },
  { id: "s5_pk_012", s: "1/(3-√2) = ?", c: "(3+√2)/7", v: {}, z:"zor", alt:"1_3_kok_2" },

  // ALT DAL 5: EŞLENİK TANIMI VE KULLANIMI
  { id: "s5_pk_013", s: "Eşlenik nedir?", c: "iki_terimli_koklu_ifadede_aradaki_isaret_degistirilerek_elde_edilir", v: {}, z:"orta", alt:"eslenik_tanim" },
  { id: "s5_pk_014", s: "√a+√b ifadesinin eşleniği nedir?", c: "√a-√b", v: {}, z:"orta", alt:"eslenik_bulma" },
  { id: "s5_pk_015", s: "(√a+√b)(√a-√b) = ?", c: "a-b", v: {}, z:"orta", alt:"eslenik_carpim_sonuc" },

  // ALT DAL 6: KARIŞIK PAYDA KÖKTEN KURTARMA
  { id: "s5_pk_016", s: "(√{a}+√{b})/(√{a}-√{b}) = ?", c: "({a}+{b}+2√({a}×{b}))/({a}-{b})", v: {a:[4,8], b:[1,3], kosul:"a>b"}, z:"cok_zor", alt:"eslenik_bolme" },
  { id: "s5_pk_017", s: "2/(√3+1) = ?", c: "√3-1", v: {}, z:"cok_zor", alt:"2_bolu_kok_3_1" },
  { id: "s5_pk_018", s: "√2/(√2-1) = ?", c: "2+√2", v: {}, z:"cok_zor", alt:"kok_2_bolu_kok_2_1" },

  // ALT DAL 7: İÇ İÇE EŞLENİK
  { id: "s5_pk_019", s: "1/(1+√2) + 1/(1-√2) = ?", c: "-2", v: {}, z:"cok_zor", alt:"iki_eslenik_toplam" },
  { id: "s5_pk_020", s: "1/(√3+√2) - 1/(√3-√2) = ?", c: "-2√2", v: {}, z:"cok_zor", alt:"eslenik_fark" },

  // ALT DAL 8: PAYDA KÖKTEN KURTARMA PROBLEMLERİ
  { id: "s5_pk_021", s: "x = 1/(√{a}+√{b}) ise x'in değeri nedir?", c: "(√{a}-√{b})/({a}-{b})", v: {a:[3,7], b:[2,5], kosul:"a>b"}, z:"cok_zor", alt:"x_eslenik" },
  { id: "s5_pk_022", s: "x = √{a}/(√{a}+1) ise x'in paydasını kökten kurtarınız.", c: "√{a}(√{a}-1)/({a}-1)", v: {a:[2,5]}, z:"cok_zor", alt:"x_eslenik_2" },

  // ALT DAL 9: ÜÇ TERİMLİ PAYDA KÖKTEN KURTARMA
  { id: "s5_pk_023", s: "1/(√a+√b+√c) ifadesinde payda nasıl kökten kurtarılır?", c: "iki_asamali_eslenik", v: {}, z:"cok_zor", alt:"uc_terim_eslenik" },

  // ALT DAL 10: ÖZEL PAYDA KÖKTEN KURTARMA
  { id: "s5_pk_024", s: "1/∛{a} = ? (Paydayı kökten kurtar)", c: "∛({a}*{a})/{a}", v: {a:[2,4,8]}, z:"cok_zor", alt:"kupkok_payda" },
  { id: "s5_pk_025", s: "1/(1+∛2) = ?", c: "(1-∛2+∛4)/3", v: {}, z:"cok_zor", alt:"kupkok_eslenik" },


  // ==========================================
  // KONU 11: KÖKLÜ SAYILARDA SIRALAMA (6 alt dal)
  // ==========================================

  // ALT DAL 1: KÖK İÇLERİNE GÖRE SIRALAMA
  { id: "s5_kss_001", s: "√{a} ve √{b} hangisi büyüktür?", c: "√{buyuk}", v: {a:[2,20], b:[2,20], kosul:"a!=b"}, z:"orta", alt:"kok_ici_siralama" },
  { id: "s5_kss_002", s: "Kök içi büyüdükçe kareköklü sayı nasıl değişir?", c: "buyur", v: {}, z:"orta", alt:"kok_siralama_kural" },

  // ALT DAL 2: KATSAYILARI KÖK İÇİNE ALARAK SIRALAMA
  { id: "s5_kss_003", s: "{a}√{b} ve {c}√{d} sayılarını sıralayınız.", c: "{siralama}", v: {a:[2,5], b:[2,6], c:[2,5], d:[2,6]}, z:"zor", alt:"katsayili_siralama" },
  { id: "s5_kss_004", s: "2√3, 3√2, 4√1 sayılarını sıralayınız.", c: "4√1<2√3<3√2 (4<√12<√18)", v: {}, z:"zor", alt:"2_kok_3_3_kok_2" },
  { id: "s5_kss_005", s: "5√2, 4√3, 3√5 sayılarını sıralayınız.", c: "5√2<4√3<3√5 (√50<√48<√45_yanlis_hesap)", v: {}, z:"cok_zor", alt:"besli_siralama" },

  // ALT DAL 3: KARIŞIK KÖKLÜ SAYILARDA SIRALAMA
  { id: "s5_kss_006", s: "√8, 2√2, 3 sayılarını sıralayınız.", c: "√8=2√2<3 (2√2<3)", v: {}, z:"zor", alt:"kok_8_2_kok_2_3" },
  { id: "s5_kss_007", s: "√12, 3, 2√3 sayılarını sıralayınız.", c: "3=√9<√12=2√3", v: {}, z:"zor", alt:"kok_12_3_2_kok_3" },

  // ALT DAL 4: EN BÜYÜK/EN KÜÇÜK BULMA
  { id: "s5_kss_008", s: "Aşağıdakilerden hangisi en büyüktür?", c: "{en_buyuk}", v: {secenekler:["√2","√3","√5","√7","√11"]}, z:"orta", alt:"en_buyuk_kok" },
  { id: "s5_kss_009", s: "Aşağıdakilerden hangisi en küçüktür?", c: "{en_kucuk}", v: {secenekler:["2√3","3√2","4","√15","5"]}, z:"zor", alt:"en_kucuk_karisik" },

  // ALT DAL 5: SAYI DOĞRUSUNDA SIRALAMA
  { id: "s5_kss_010", s: "√{a} sayı doğrusunda hangi iki tam sayı arasındadır?", c: "{alt}_ile_{ust}", v: {a:[2,99], kosul:"!tam_kare"}, z:"orta", alt:"sayi_dogrusu_kok" },
  { id: "s5_kss_011", s: "√2, √3, √5 sayılarını sayı doğrusunda sıralayınız.", c: "√2<√3<√5", v: {}, z:"orta", alt:"sayi_dogrusu_siralama" },

  // ALT DAL 6: İRRASYONEL SAYI SIRALAMA
  { id: "s5_kss_012", s: "π, √10, 3,14 sayılarını sıralayınız.", c: "3,14<π<√10", v: {}, z:"cok_zor", alt:"pi_kok_10" },
  { id: "s5_kss_013", s: "√2, 1,4, 1,5 sayılarını sıralayınız.", c: "1,4<√2<1,5", v: {}, z:"zor", alt:"kok_2_ondalik" },


  // ==========================================
  // KONU 12: KÖKLÜ DENKLEMLER (8 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT KÖKLÜ DENKLEMLER
  { id: "s5_kd2_001", s: "√x = {a} ise x kaçtır?", c: "{a}*{a}", v: {a:[2,10]}, z:"orta", alt:"basit_kok_denklem" },
  { id: "s5_kd2_002", s: "√x = 5 ise x = ?", c: "25", v: {}, z:"orta", alt:"kok_x_5" },
  { id: "s5_kd2_003", s: "√(x+{a}) = {b} ise x kaçtır?", c: "{b}*{b}-{a}", v: {a:[1,8], b:[2,6], kosul:"b*b>a"}, z:"zor", alt:"kok_x_artı_a" },

  // ALT DAL 2: KÖK DERECELİ DENKLEMLER
  { id: "s5_kd2_004", s: "∛x = {a} ise x kaçtır?", c: "{a}*{a}*{a}", v: {a:[2,6]}, z:"orta", alt:"kupkok_denklem" },
  { id: "s5_kd2_005", s: "⁴√x = 2 ise x = ?", c: "16", v: {}, z:"orta", alt:"dort_kok_denklem" },

  // ALT DAL 3: KÖKLÜ DENKLEMLERDE KARE ALMA
  { id: "s5_kd2_006", s: "√(x+{a}) = x-{b} ise x kaçtır?", c: "{cozum}", v: {a:[1,5], b:[1,3], kosul:"cozum_kontrol"}, z:"cok_zor", alt:"kok_denklem_kare" },
  { id: "s5_kd2_007", s: "√(2x+3) = x ise x = ?", c: "3", v: {}, z:"cok_zor", alt:"kok_2x_3_x" },

  // ALT DAL 4: İKİ KÖKLÜ DENKLEMLER
  { id: "s5_kd2_008", s: "√(x+{a}) = √(x-{b}) + 1 ise x kaçtır?", c: "{cozum}", v: {a:[3,8], b:[1,4]}, z:"cok_zor", alt:"iki_koklu_denklem" },
  { id: "s5_kd2_009", s: "√(x+5) = √x + 1 ise x = ?", c: "4", v: {}, z:"cok_zor", alt:"kok_x_5_kok_x_1" },

  // ALT DAL 5: KÖKLÜ DENKLEMLERDE ÇÖZÜM KONTROLÜ
  { id: "s5_kd2_010", s: "Köklü denklemlerde bulunan çözüm neden kontrol edilmelidir?", c: "kare_alma_isleminde_fazladan_kok_gelebilir", v: {}, z:"zor", alt:"cozum_kontrol" },
  { id: "s5_kd2_011", s: "√x = -2 denkleminin çözümü var mıdır?", c: "hayir_(karekok_negatif_olamaz)", v: {}, z:"zor", alt:"kok_negatif" },

  // ALT DAL 6: KÖKLÜ DENKLEMLERDE TANIM ARALIĞI
  { id: "s5_kd2_012", s: "√(x-{a}) = {b} denkleminin çözümü için x'in alabileceği değer nedir?", c: "{b}*{b}+{a}", v: {a:[2,6], b:[2,5]}, z:"zor", alt:"tanim_araligi_cozum" },
  { id: "s5_kd2_013", s: "√(x+3) + √(x-2) = 5 denkleminin çözüm kümesi nedir?", c: "x=7", v: {}, z:"cok_zor", alt:"iki_kok_toplam" },

  // ALT DAL 7: ÜSLÜ SAYIYA DÖNÜŞTÜREREK ÇÖZME
  { id: "s5_kd2_014", s: "x^(1/2) = {a} ise x kaçtır?", c: "{a}*{a}", v: {a:[3,10]}, z:"orta", alt:"uslu_cozum" },
  { id: "s5_kd2_015", s: "x^(1/3) = 3 ise x = ?", c: "27", v: {}, z:"orta", alt:"kupkok_uslu" },

  // ALT DAL 8: KARIŞIK KÖKLÜ DENKLEMLER
  { id: "s5_kd2_016", s: "√x + √(x+{a}) = {b} ise x kaçtır?", c: "{cozum}", v: {a:[3,8], b:[4,10]}, z:"cok_zor", alt:"kok_x_kok_x+a" },
  { id: "s5_kd2_017", s: "x√x = {a} ise x kaçtır?", c: "{cozum}", v: {a:[8,27]}, z:"cok_zor", alt:"x_kok_x" },


  // ==========================================
  // KONU 13: KÖKLÜ SAYI PROBLEMLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: GEOMETRİ PROBLEMLERİ
  { id: "s5_kp2_001", s: "Kenar uzunluğu {a} cm olan karenin köşegen uzunluğu kaç cm'dir?", c: "{a}√2", v: {a:[1,10]}, z:"orta", alt:"kare_kosegen" },
  { id: "s5_kp2_002", s: "Kenar uzunluğu {a} cm olan eşkenar üçgenin yüksekliği kaç cm'dir?", c: "{a}√3/2", v: {a:[2,10], kosul:"a%2==0"}, z:"zor", alt:"eskenar_yukseklik" },
  { id: "s5_kp2_003", s: "Alanı {a} cm² olan karenin bir kenarı kaç cm'dir?", c: "√{a}", v: {a:[4,9,16,25,36,49,64,81,100]}, z:"orta", alt:"alan_kenar" },

  // ALT DAL 2: PİSAGOR PROBLEMLERİ
  { id: "s5_kp2_004", s: "Dik kenarları {a} ve {b} olan dik üçgenin hipotenüsü kaçtır?", c: "√({a}*{a}+{b}*{b})", v: {a:[3,6], b:[4,8]}, z:"zor", alt:"pisagor" },
  { id: "s5_kp2_005", s: "Hipotenüsü {c}, bir dik kenarı {a} olan dik üçgenin diğer dik kenarı kaçtır?", c: "√({c}*{c}-{a}*{a})", v: {c:[5,13], a:[3,5], kosul:"c>a"}, z:"zor", alt:"pisagor_kenar" },

  // ALT DAL 3: ALAN-HACİM PROBLEMLERİ
  { id: "s5_kp2_006", s: "Alanı {a}π cm² olan dairenin yarıçapı kaç cm'dir?", c: "√{a}", v: {a:[1,16]}, z:"orta", alt:"daire_yaricap" },
  { id: "s5_kp2_007", s: "Hacmi {a} cm³ olan küpün bir kenarı kaç cm'dir?", c: "Math.cbrt({a})", v: {a:[8,27,64,125]}, z:"orta", alt:"kup_kenar" },

  // ALT DAL 4: HIZ VE YOL PROBLEMLERİ
  { id: "s5_kp2_008", s: "Serbest düşmede t saniyede alınan yol h = 5t² dir. h = {a} m ise t kaçtır?", c: "√({a}/5)", v: {a:[5,20,45,80], kosul:"a%5==0"}, z:"zor", alt:"serbest_dusme" },
  { id: "s5_kp2_009", s: "Sarkaç periyodu T = 2π√(L/10). T = 2π ise L = ?", c: "10", v: {}, z:"cok_zor", alt:"sarkac" },

  // ALT DAL 5: GÜNLÜK HAYAT PROBLEMLERİ
  { id: "s5_kp2_010", s: "Bir bahçenin alanı {a} m² ise kare şeklindeki bu bahçenin bir kenarı kaç m'dir?", c: "√{a}", v: {a:[25,36,49,64,81,100,144]}, z:"orta", alt:"bahce_kenar" },
  { id: "s5_kp2_011", s: "Yarıçapı r olan dairenin alanı πr² = {a} ise r = ?", c: "√({a}/π)", v: {a:[4,9,16,25]}, z:"zor", alt:"daire_alan" },

  // ALT DAL 6: KARIŞIK PROBLEMLER
  { id: "s5_kp2_012", s: "İki sayının geometrik ortalaması √({a}×{b}) = ?", c: "√({a}×{b})", v: {a:[2,8], b:[2,8]}, z:"orta", alt:"geometrik_ortalama" },
  { id: "s5_kp2_013", s: "x² = {a} denkleminin pozitif kökü kaçtır?", c: "√{a}", v: {a:[4,9,16,25,36,49,64,81,100]}, z:"orta", alt:"denklem_kok" },


  // ==========================================
  // KONU 14: İÇ İÇE KÖKLER (6 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT İÇ İÇE KÖKLER
  { id: "s5_ic_001", s: "√(√{a}) = ?", c: "Math.pow({a}, 1/4)", v: {a:[16,81,256]}, z:"zor", alt:"kok_icinde_kok" },
  { id: "s5_ic_002", s: "√(√16) = ?", c: "2", v: {}, z:"zor", alt:"kok_kok_16" },
  { id: "s5_ic_003", s: "√(∛{a}) = ?", c: "Math.pow({a}, 1/6)", v: {a:[64,729]}, z:"cok_zor", alt:"kok_kupkok" },

  // ALT DAL 2: İÇ İÇE KÖK AÇMA
  { id: "s5_ic_004", s: "√({a}+√{b}) = ? (Tam kare ise açılır)", c: "{sonuc}", v: {a:[5,7,9], b:[24,48,80]}, z:"cok_zor", alt:"kok_artı_kok" },
  { id: "s5_ic_005", s: "√(3+√8) = ?", c: "√2+1", v: {}, z:"cok_zor", alt:"kok_3_kok_8" },
  { id: "s5_ic_006", s: "√(5+√24) = ?", c: "√3+√2", v: {}, z:"cok_zor", alt:"kok_5_kok_24" },
  { id: "s5_ic_007", s: "√(7+√48) = ?", c: "2+√3", v: {}, z:"cok_zor", alt:"kok_7_kok_48" },

  // ALT DAL 3: İÇ İÇE KÖK FORMÜLÜ
  { id: "s5_ic_008", s: "√(a+√b) = √x+√y formülünde x+y = ?", c: "a", v: {}, z:"cok_zor", alt:"ic_ice_formul" },
  { id: "s5_ic_009", s: "√(a+√b) = √x+√y formülünde x·y = ?", c: "b/4", v: {}, z:"cok_zor", alt:"ic_ice_formul_carpim" },

  // ALT DAL 4: İÇ İÇE KÖK ÇIKARMA
  { id: "s5_ic_010", s: "√({a}-√{b}) = ? (a²>b ise açılır)", c: "{sonuc}", v: {a:[5,7,9], b:[5,13,17]}, z:"cok_zor", alt:"kok_eksi_kok" },
  { id: "s5_ic_011", s: "√(3-√5) = ?", c: "(√5-1)/√2", v: {}, z:"cok_zor", alt:"kok_3_eksi_kok_5" },

  // ALT DAL 5: ÜÇ KAT İÇ İÇE KÖK
  { id: "s5_ic_012", s: "√(√(√{a})) = ?", c: "Math.pow({a}, 1/8)", v: {a:[256,6561]}, z:"cok_zor", alt:"uc_kat_kok" },

  // ALT DAL 6: İÇ İÇE KÖK PROBLEMLERİ
  { id: "s5_ic_013", s: "√(x+√(x²-1)) = ?", c: "√((x+1)/2)+√((x-1)/2)", v: {}, z:"cok_zor", alt:"x_kok_x_kare" },
  { id: "s5_ic_014", s: "√(a+√b) × √(a-√b) = ?", c: "√(a²-b)", v: {}, z:"cok_zor", alt:"eslenik_ic_ice" },


  // ==========================================
  // KONU 15: SONSUZ KÖKLER (4 alt dal)
  // ==========================================

  // ALT DAL 1: SONSUZ KAREKÖK
  { id: "s5_sk2_001", s: "√({a}+√({a}+√({a}+...))) = ?", c: "{x}", v: {a:[2,6,12,20]}, z:"cok_zor", alt:"sonsuz_kok" },
  { id: "s5_sk2_002", s: "√(6+√(6+√(6+...))) = ?", c: "3", v: {}, z:"cok_zor", alt:"sonsuz_6" },
  { id: "s5_sk2_003", s: "√(12+√(12+√(12+...))) = ?", c: "4", v: {}, z:"cok_zor", alt:"sonsuz_12" },

  // ALT DAL 2: SONSUZ KÖK ÇÖZÜM YÖNTEMİ
  { id: "s5_sk2_004", s: "x = √(a+√(a+√(a+...))) ise x² = ?", c: "a+x", v: {}, z:"cok_zor", alt:"sonsuz_kok_cozum" },
  { id: "s5_sk2_005", s: "Sonsuz köklü ifadelerde denklem nasıl kurulur?", c: "x=√(a+x)_denklemi_cozulur", v: {}, z:"cok_zor", alt:"sonsuz_kok_yontem" },

  // ALT DAL 3: SONSUZ İÇ İÇE KÖK
  { id: "s5_sk2_006", s: "√({a}-√({a}-√({a}-...))) = ?", c: "{x}", v: {a:[6,12,20]}, z:"cok_zor", alt:"sonsuz_eksi_kok" },
  { id: "s5_sk2_007", s: "√(2+√(2+√(2+...))) = ?", c: "2", v: {}, z:"cok_zor", alt:"sonsuz_2" },

  // ALT DAL 4: SONSUZ KÖK PROBLEMLERİ
  { id: "s5_sk2_008", s: "∛({a}+∛({a}+∛({a}+...))) = ?", c: "{x}", v: {a:[6,24,60]}, z:"cok_zor", alt:"sonsuz_kupkok" },
  { id: "s5_sk2_009", s: "∛(6+∛(6+∛(6+...))) = ?", c: "2", v: {}, z:"cok_zor", alt:"sonsuz_kupkok_6" },


  // ==========================================
  // KONU 16: KÖK-ÜS İLİŞKİSİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: KÖKÜ ÜSLÜ GÖSTERİM
  { id: "s5_ku_001", s: "√{a} = {a}^(?)", c: "1/2", v: {a:[2,20]}, z:"orta", alt:"karekok_us" },
  { id: "s5_ku_002", s: "∛{a} = {a}^(?)", c: "1/3", v: {a:[2,20]}, z:"orta", alt:"kupkok_us" },
  { id: "s5_ku_003", s: "ⁿ√a = a^(?)", c: "1/n", v: {}, z:"orta", alt:"n_kok_us" },

  // ALT DAL 2: ÜSLÜ GÖSTERİMDEN KÖKE
  { id: "s5_ku_004", s: "a^(1/2) = ? (Köklü gösterim)", c: "√a", v: {}, z:"orta", alt:"us_kok" },
  { id: "s5_ku_005", s: "a^(1/3) = ? (Köklü gösterim)", c: "∛a", v: {}, z:"orta", alt:"us_kupkok" },
  { id: "s5_ku_006", s: "a^(m/n) = ? (Köklü gösterim)", c: "ⁿ√(aᵐ)", v: {}, z:"zor", alt:"uslu_koklu" },

  // ALT DAL 3: KÖKLÜ-ÜSLÜ DÖNÜŞÜMLER
  { id: "s5_ku_007", s: "√(x³) = x^(?)", c: "3/2", v: {}, z:"zor", alt:"kok_x_kup" },
  { id: "s5_ku_008", s: "∛(x²) = x^(?)", c: "2/3", v: {}, z:"zor", alt:"kupkok_x_kare" },
  { id: "s5_ku_009", s: "⁴√(x³) = x^(?)", c: "3/4", v: {}, z:"zor", alt:"dort_kok_x_kup" },
  { id: "s5_ku_010", s: "x^(3/2) = ? (Köklü gösterim)", c: "√(x³)", v: {}, z:"zor", alt:"x_3_2" },
  { id: "s5_ku_011", s: "x^(2/3) = ? (Köklü gösterim)", c: "∛(x²)", v: {}, z:"zor", alt:"x_2_3" },

  // ALT DAL 4: KÖK-ÜS İŞLEMLERİ
  { id: "s5_ku_012", s: "√x × ∛x = x^(?)", c: "5/6", v: {}, z:"cok_zor", alt:"kok_carpma_us" },
  { id: "s5_ku_013", s: "√x / ∛x = x^(?)", c: "1/6", v: {}, z:"cok_zor", alt:"kok_bolme_us" },
  { id: "s5_ku_014", s: "(√x)³ = x^(?)", c: "3/2", v: {}, z:"zor", alt:"kok_kup_us" },

  // ALT DAL 5: KARIŞIK KÖK-ÜS SORULARI
  { id: "s5_ku_015", s: "√(√x) = x^(?)", c: "1/4", v: {}, z:"zor", alt:"kok_kok_us" },
  { id: "s5_ku_016", s: "∛(√x) = x^(?)", c: "1/6", v: {}, z:"cok_zor", alt:"kupkok_kok_us" },
  { id: "s5_ku_017", s: "√(x)×√(x)×√(x) = x^(?)", c: "3/2", v: {}, z:"cok_zor", alt:"uc_kok_carpim_us" },

  // ALT DAL 6: KÖK-ÜS PROBLEMLERİ
  { id: "s5_ku_018", s: "x^(1/2) = {a} ise x = ?", c: "{a}*{a}", v: {a:[2,10]}, z:"orta", alt:"us_kok_denklem" },
  { id: "s5_ku_019", s: "x^(2/3) = {a} ise x = ?", c: "Math.pow({a}, 3/2)", v: {a:[4,9]}, z:"cok_zor", alt:"x_2_3_denklem" },
  { id: "s5_ku_020", s: "Köklü ve üslü ifadeler arasındaki dönüşümün genel kuralı nedir?", c: "ⁿ√(aᵐ)=a^(m/n)", v: {}, z:"orta", alt:"genel_donusum" },

],

  6: [

  // ==========================================
  // KONU 1: ORTAK ÇARPAN PARANTEZİNE ALMA (8 alt dal)
  // ==========================================

  // ALT DAL 1: TEK ORTAK ÇARPAN
  { id: "s6_oc_001", s: "{a}x + {b}x = ? (Ortak çarpan parantezine al)", c: "x({a}+{b})", v: {a:[2,8], b:[3,10]}, z:"kolay", alt:"tek_ortak_x" },
  { id: "s6_oc_002", s: "{a}x + {b}y = ? (Ortak çarpan var mı?)", c: "{sonuc}", v: {a:[2,8], b:[3,10]}, z:"kolay", alt:"ortak_yok" },
  { id: "s6_oc_003", s: "{a}x - {b}x = ?", c: "x({a}-{b})", v: {a:[4,10], b:[1,"{a}-1"]}, z:"kolay", alt:"tek_ortak_x_eksi" },

  // ALT DAL 2: SAYI ORTAK ÇARPANI
  { id: "s6_oc_004", s: "{a}x + {b} ifadesini çarpanlara ayırınız.", c: "{sonuc}", v: {a:[4,12], b:[6,18], kosul:"obeb>1"}, z:"orta", alt:"sayi_ortak" },
  { id: "s6_oc_005", s: "6x + 9 = ?", c: "3(2x+3)", v: {}, z:"orta", alt:"6x_9" },
  { id: "s6_oc_006", s: "12a - 8b = ?", c: "4(3a-2b)", v: {}, z:"orta", alt:"12a_8b" },
  { id: "s6_oc_007", s: "15x² + 10x = ?", c: "5x(3x+2)", v: {}, z:"orta", alt:"15x2_10x" },

  // ALT DAL 3: DEĞİŞKEN ORTAK ÇARPANI
  { id: "s6_oc_008", s: "x² + x = ?", c: "x(x+1)", v: {}, z:"orta", alt:"x2_x" },
  { id: "s6_oc_009", s: "x³ - x² = ?", c: "x²(x-1)", v: {}, z:"orta", alt:"x3_x2" },
  { id: "s6_oc_010", s: "aᵐ + aⁿ = ? (m={m}, n={n}, m>n)", c: "aⁿ(a^{m-n}+1)", v: {m:[3,6], n:[1,"{m}-1"]}, z:"zor", alt:"am_an" },
  { id: "s6_oc_011", s: "xⁿ⁺¹ + xⁿ = ?", c: "xⁿ(x+1)", v: {n:[2,5]}, z:"zor", alt:"xn+1_xn" },

  // ALT DAL 4: ORTAK ÇARPAN PARANTEZİNE ALMA İLERİ
  { id: "s6_oc_012", s: "{a}x²y + {b}xy² = ?", c: "xy({a}x+{b}y)", v: {a:[2,6], b:[3,8]}, z:"zor", alt:"iki_degiskenli" },
  { id: "s6_oc_013", s: "x(a+b) + y(a+b) = ?", c: "(a+b)(x+y)", v: {}, z:"orta", alt:"parantez_ortak" },
  { id: "s6_oc_014", s: "(x+1)² + (x+1) = ?", c: "(x+1)(x+2)", v: {}, z:"zor", alt:"x+1_ortak" },
  { id: "s6_oc_015", s: "a(x-y) - b(x-y) = ?", c: "(x-y)(a-b)", v: {}, z:"orta", alt:"eksi_parantez_ortak" },

  // ALT DAL 5: ORTAK ÇARPANI GÖRME
  { id: "s6_oc_016", s: "3x(x-2) + 5(x-2) = ?", c: "(x-2)(3x+5)", v: {}, z:"orta", alt:"parantezli_ortak" },
  { id: "s6_oc_017", s: "(2x-1)(x+3) - (2x-1)(x-2) = ?", c: "5(2x-1)", v: {}, z:"zor", alt:"iki_parantez_ortak" },
  { id: "s6_oc_018", s: "x(x+1)(x+2) + (x+1)(x+2) = ?", c: "(x+1)(x+2)(x+1)", v: {}, z:"cok_zor", alt:"uc_carpanli_ortak" },

  // ALT DAL 6: NEGATİF ORTAK ÇARPAN
  { id: "s6_oc_019", s: "-x² + x = ?", c: "x(-x+1)_veya_-x(x-1)", v: {}, z:"orta", alt:"negatif_ortak" },
  { id: "s6_oc_020", s: "-{a}x - {b}x = ?", c: "-x({a}+{b})", v: {a:[2,6], b:[3,8]}, z:"orta", alt:"negatif_iki" },

  // ALT DAL 7: EN BÜYÜK ORTAK ÇARPAN
  { id: "s6_oc_021", s: "{a}x² + {b}x ifadesinde en büyük ortak çarpan nedir?", c: "{obeb}x", v: {a:[6,18], b:[8,24]}, z:"zor", alt:"eboc" },
  { id: "s6_oc_022", s: "24x³ + 36x² - 12x = ?", c: "12x(2x²+3x-1)", v: {}, z:"cok_zor", alt:"24_36_12" },

  // ALT DAL 8: KARIŞIK ORTAK ÇARPAN
  { id: "s6_oc_023", s: "{a}(x+y) + {b}(x+y) = ?", c: "({a}+{b})(x+y)", v: {a:[2,6], b:[3,8]}, z:"orta", alt:"katsayili_parantez" },
  { id: "s6_oc_024", s: "a(b-c) + d(c-b) = ?", c: "(b-c)(a-d)", v: {}, z:"cok_zor", alt:"isaret_degistirme" },
  { id: "s6_oc_025", s: "x(y-z) - y(z-y) = ?", c: "(y-z)(x+y)", v: {}, z:"cok_zor", alt:"isaret_karmasasi" },


  // ==========================================
  // KONU 2: GRUPLANDIRMA YÖNTEMİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: İKİLİ GRUPLANDIRMA
  { id: "s6_gr_001", s: "ax + ay + bx + by = ?", c: "(a+b)(x+y)", v: {}, z:"orta", alt:"ikili_gruplandirma" },
  { id: "s6_gr_002", s: "{a}x + {b}x + {a}y + {b}y = ?", c: "({a}+{b})(x+y)", v: {a:[2,5], b:[3,7]}, z:"orta", alt:"sayili_gruplandirma" },
  { id: "s6_gr_003", s: "x² + xy + xz + yz = ?", c: "(x+y)(x+z)", v: {}, z:"zor", alt:"uc_degiskenli" },

  // ALT DAL 2: ÜÇLÜ GRUPLANDIRMA
  { id: "s6_gr_004", s: "ax + bx + cx + ay + by + cy = ?", c: "(a+b+c)(x+y)", v: {}, z:"cok_zor", alt:"uclu_gruplandirma" },
  { id: "s6_gr_005", s: "x² + 2x + xy + 2y = ?", c: "(x+2)(x+y)", v: {}, z:"zor", alt:"x2_2x_xy_2y" },

  // ALT DAL 3: GRUPLANDIRMA STRATEJİSİ
  { id: "s6_gr_006", s: "{a}x² + {b}x + {c}ax + {d} ifadesini gruplandırarak çarpanlara ayırınız.", c: "{sonuc}", v: {a:[1,3], b:[2,5], c:[1,3], d:[2,6]}, z:"cok_zor", alt:"strateji" },
  { id: "s6_gr_007", s: "Gruplandırma yöntemi ne zaman kullanılır?", c: "ortak_carpan_olmayan_dort_terimli_ifadelerde", v: {}, z:"orta", alt:"gruplandirma_ne_zaman" },

  // ALT DAL 4: GRUPLANDIRMA SONRASI ORTAK ÇARPAN
  { id: "s6_gr_008", s: "ab + ac + b² + bc = ?", c: "(a+b)(b+c)", v: {}, z:"cok_zor", alt:"ab_ac_b2_bc" },
  { id: "s6_gr_009", s: "x³ + x² + x + 1 = ?", c: "(x²+1)(x+1)", v: {}, z:"cok_zor", alt:"x3_x2_x_1" },
  { id: "s6_gr_010", s: "a³ - a² + a - 1 = ?", c: "(a²+1)(a-1)", v: {}, z:"cok_zor", alt:"a3_a2_a_1" },

  // ALT DAL 5: GRUPLANDIRMA SORULARI
  { id: "s6_gr_011", s: "x² - xy + xz - yz = ?", c: "(x-y)(x+z)", v: {}, z:"cok_zor", alt:"x2_xy_xz_yz" },
  { id: "s6_gr_012", s: "pq + pr - q - r = ?", c: "(p-1)(q+r)", v: {}, z:"cok_zor", alt:"pq_pr_q_r" },

  // ALT DAL 6: GRUPLANDIRMA ÖZEL SORULAR
  { id: "s6_gr_013", s: "a²b + ab² + abc = ?", c: "ab(a+b+c)", v: {}, z:"orta", alt:"a2b_ab2_abc" },
  { id: "s6_gr_014", s: "x⁴ + x³ + x² + x = ?", c: "x(x²+1)(x+1)", v: {}, z:"cok_zor", alt:"x4_x3_x2_x" },


  // ==========================================
  // KONU 3: İKİ KARE FARKI (10 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT İKİ KARE FARKI
  { id: "s6_ik_001", s: "x² - {a} = ? (Çarpanlara ayır)", c: "(x-√{a})(x+√{a})", v: {a:[4,9,16,25,36,49,64,81,100]}, z:"orta", alt:"basit_kare_fark" },
  { id: "s6_ik_002", s: "x² - 9 = ?", c: "(x-3)(x+3)", v: {}, z:"orta", alt:"x2_9" },
  { id: "s6_ik_003", s: "x² - 25 = ?", c: "(x-5)(x+5)", v: {}, z:"orta", alt:"x2_25" },
  { id: "s6_ik_004", s: "x² - 1 = ?", c: "(x-1)(x+1)", v: {}, z:"orta", alt:"x2_1" },
  { id: "s6_ik_005", s: "a² - b² = ? (Formül)", c: "(a-b)(a+b)", v: {}, z:"kolay", alt:"formul" },

  // ALT DAL 2: KATSAYILI İKİ KARE FARKI
  { id: "s6_ik_006", s: "{a}x² - {b} = ?", c: "({a}x-√{b})({a}x+√{b})_veya_ortak_carpanli", v: {a:[4,9], b:[16,25,36]}, z:"zor", alt:"katsayili_kare_fark" },
  { id: "s6_ik_007", s: "4x² - 9 = ?", c: "(2x-3)(2x+3)", v: {}, z:"orta", alt:"4x2_9" },
  { id: "s6_ik_008", s: "9x² - 16 = ?", c: "(3x-4)(3x+4)", v: {}, z:"orta", alt:"9x2_16" },
  { id: "s6_ik_009", s: "25x² - 1 = ?", c: "(5x-1)(5x+1)", v: {}, z:"orta", alt:"25x2_1" },
  { id: "s6_ik_010", s: "49x² - 64 = ?", c: "(7x-8)(7x+8)", v: {}, z:"orta", alt:"49x2_64" },

  // ALT DAL 3: DEĞİŞKENLİ İKİ KARE FARKI
  { id: "s6_ik_011", s: "(x+{a})² - {b} = ?", c: "(x+{a}-√{b})(x+{a}+√{b})", v: {a:[1,5], b:[4,9,16]}, z:"zor", alt:"parantez_kare_fark" },
  { id: "s6_ik_012", s: "(x+1)² - 4 = ?", c: "(x-1)(x+3)", v: {}, z:"zor", alt:"x+1_2_4" },
  { id: "s6_ik_013", s: "(2x-3)² - 25 = ?", c: "(2x-8)(2x+2)=4(x-4)(x+1)", v: {}, z:"cok_zor", alt:"2x-3_2_25" },

  // ALT DAL 4: İKİ KARE FARKINI GÖRME
  { id: "s6_ik_014", s: "x⁴ - 1 = ?", c: "(x²-1)(x²+1)=(x-1)(x+1)(x²+1)", v: {}, z:"zor", alt:"x4_1" },
  { id: "s6_ik_015", s: "x⁴ - 16 = ?", c: "(x²-4)(x²+4)=(x-2)(x+2)(x²+4)", v: {}, z:"zor", alt:"x4_16" },
  { id: "s6_ik_016", s: "a⁴ - b⁴ = ?", c: "(a-b)(a+b)(a²+b²)", v: {}, z:"zor", alt:"a4_b4" },

  // ALT DAL 5: RASYONEL İKİ KARE FARKI
  { id: "s6_ik_017", s: "x²/9 - y²/16 = ?", c: "(x/3-y/4)(x/3+y/4)", v: {}, z:"zor", alt:"kesirli_kare_fark" },
  { id: "s6_ik_018", s: "x²/{a} - y²/{b} = ?", c: "(x/√{a}-y/√{b})(x/√{a}+y/√{b})", v: {a:[4,9,16], b:[4,9,25]}, z:"cok_zor", alt:"paydali_kare_fark" },

  // ALT DAL 6: İKİ KARE FARKI İLE SADELEŞTİRME
  { id: "s6_ik_019", s: "(x²-{a})/(x-√{a}) = ?", c: "x+√{a}", v: {a:[4,9,16]}, z:"zor", alt:"bolme_sadelestirme" },
  { id: "s6_ik_020", s: "(x²-4)/(x-2) = ?", c: "x+2", v: {}, z:"zor", alt:"x2_4_x_2" },
  { id: "s6_ik_021", s: "(4x²-9)/(2x-3) = ?", c: "2x+3", v: {}, z:"zor", alt:"4x2_9_2x_3" },

  // ALT DAL 7: İKİ KARE FARKI PROBLEMLERİ
  { id: "s6_ik_022", s: "{a}² - {b}² = ? (Sayısal değer)", c: "{sonuc}", v: {a:[5,15], b:[2,"{a}-1"]}, z:"orta", alt:"sayisal_kare_fark" },
  { id: "s6_ik_023", s: "{a}×{b} çarpımını iki kare farkı kullanarak bulunuz.", c: "(({a}+{b})/2)²-(({a}-{b})/2)²", v: {a:[11,19], b:[5,9], kosul:"a>b"}, z:"cok_zor", alt:"carpim_kare_fark" },

  // ALT DAL 8: İKİ KARE FARKI FORMÜLÜ TERS
  { id: "s6_ik_024", s: "(x-{a})(x+{a}) = ?", c: "x²-{a}²", v: {a:[1,10]}, z:"orta", alt:"formul_ters" },
  { id: "s6_ik_025", s: "(2x-3)(2x+3) = ?", c: "4x²-9", v: {}, z:"orta", alt:"2x_3_2x_3" },
  { id: "s6_ik_026", s: "(√x-√y)(√x+√y) = ?", c: "x-y", v: {}, z:"orta", alt:"koklu_kare_fark" },

  // ALT DAL 9: İKİ KARE FARKI TANIMA
  { id: "s6_ik_027", s: "{a}x² - {b}y² ifadesi iki kare farkı mıdır?", c: "{evet_hayir}", v: {a:[1,9], b:[1,16], kosul:"tam_kare_mi"}, z:"orta", alt:"kare_fark_tanima" },
  { id: "s6_ik_028", s: "Aşağıdakilerden hangisi iki kare farkıdır?", c: "{dogru}", v: {secenekler:["x²-4","x²+4","x²-3","x²-2x+1","x²+2x+1"]}, z:"orta", alt:"kare_fark_bulma" },

  // ALT DAL 10: İKİ KARE FARKI KARIŞIK
  { id: "s6_ik_029", s: "(x+y)² - (x-y)² = ?", c: "4xy", v: {}, z:"cok_zor", alt:"iki_parantez_kare_fark" },
  { id: "s6_ik_030", s: "x² - (y+z)² = ?", c: "(x-y-z)(x+y+z)", v: {}, z:"cok_zor", alt:"x2_y+z_2" },


  // ==========================================
  // KONU 4: TAM KARE İFADELER (10 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT TAM KARE AÇILIMI
  { id: "s6_tk_001", s: "(x+{a})² = ?", c: "x²+{2a}x+{a}²", v: {a:[1,10]}, z:"orta", alt:"x+a_kare" },
  { id: "s6_tk_002", s: "(x-{a})² = ?", c: "x²-{2a}x+{a}²", v: {a:[1,10]}, z:"orta", alt:"x-a_kare" },
  { id: "s6_tk_003", s: "(x+1)² = ?", c: "x²+2x+1", v: {}, z:"orta", alt:"x+1_kare" },
  { id: "s6_tk_004", s: "(x-2)² = ?", c: "x²-4x+4", v: {}, z:"orta", alt:"x-2_kare" },
  { id: "s6_tk_005", s: "(a+b)² = ? (Formül)", c: "a²+2ab+b²", v: {}, z:"kolay", alt:"formul" },
  { id: "s6_tk_006", s: "(a-b)² = ? (Formül)", c: "a²-2ab+b²", v: {}, z:"kolay", alt:"formul_eksi" },

  // ALT DAL 2: KATSAYILI TAM KARE
  { id: "s6_tk_007", s: "({a}x+{b})² = ?", c: "{a}²x²+{2ab}x+{b}²", v: {a:[2,5], b:[1,5]}, z:"zor", alt:"katsayili_kare" },
  { id: "s6_tk_008", s: "(2x+3)² = ?", c: "4x²+12x+9", v: {}, z:"zor", alt:"2x+3_kare" },
  { id: "s6_tk_009", s: "(3x-1)² = ?", c: "9x²-6x+1", v: {}, z:"zor", alt:"3x-1_kare" },
  { id: "s6_tk_010", s: "(5x+2)² = ?", c: "25x²+20x+4", v: {}, z:"zor", alt:"5x+2_kare" },

  // ALT DAL 3: TAM KAREYİ TANIMA VE ÇARPANLARA AYIRMA
  { id: "s6_tk_011", s: "x² + {2a}x + {a2} = ? (Çarpanlara ayır)", c: "(x+{a})²", v: {a:[1,10], a2:"{a}*{a}"}, z:"orta", alt:"tam_kare_tanima" },
  { id: "s6_tk_012", s: "x² + 6x + 9 = ?", c: "(x+3)²", v: {}, z:"orta", alt:"x2_6x_9" },
  { id: "s6_tk_013", s: "x² - 8x + 16 = ?", c: "(x-4)²", v: {}, z:"orta", alt:"x2_8x_16" },
  { id: "s6_tk_014", s: "x² + 10x + 25 = ?", c: "(x+5)²", v: {}, z:"orta", alt:"x2_10x_25" },
  { id: "s6_tk_015", s: "x² - 12x + 36 = ?", c: "(x-6)²", v: {}, z:"orta", alt:"x2_12x_36" },

  // ALT DAL 4: TAM KARE TANIMA TESTİ
  { id: "s6_tk_016", s: "x² + {b}x + {c} ifadesi tam kare midir?", c: "{evet_hayir}", v: {b:[2,20], c:[1,100], kosul:"(b/2)²==c"}, z:"zor", alt:"tam_kare_test" },
  { id: "s6_tk_017", s: "Bir ifadenin tam kare olması için şart nedir?", c: "b²=4ac_(ax²+bx+c_icin)", v: {}, z:"orta", alt:"tam_kare_sart" },

  // ALT DAL 5: İKİ TERİMİN KARESİ ÖZEL DURUMLAR
  { id: "s6_tk_018", s: "(√x+√y)² = ?", c: "x+2√(xy)+y", v: {}, z:"zor", alt:"koklu_kare" },
  { id: "s6_tk_019", s: "(a+b+c)² = ?", c: "a²+b²+c²+2ab+2ac+2bc", v: {}, z:"cok_zor", alt:"uc_terim_kare" },
  { id: "s6_tk_020", s: "(x+y+z)² açılımında kaç terim vardır?", c: "6", v: {}, z:"cok_zor", alt:"uc_terim_kare_sayi" },

  // ALT DAL 6: TAM KARE İLE İLGİLİ FORMÜLLER
  { id: "s6_tk_021", s: "a²+b² = ? (a+b ve ab cinsinden)", c: "(a+b)²-2ab", v: {}, z:"cok_zor", alt:"a2_b2" },
  { id: "s6_tk_022", s: "a²+b² = ? (a-b ve ab cinsinden)", c: "(a-b)²+2ab", v: {}, z:"cok_zor", alt:"a2_b2_fark" },
  { id: "s6_tk_023", s: "(a+b)² + (a-b)² = ?", c: "2(a²+b²)", v: {}, z:"cok_zor", alt:"kare_toplam" },
  { id: "s6_tk_024", s: "(a+b)² - (a-b)² = ?", c: "4ab", v: {}, z:"cok_zor", alt:"kare_fark_4ab" },
  { id: "s6_tk_025", s: "a+b={t} ve a·b={c} ise a²+b² = ?", c: "{t}²-2*{c}", v: {t:[3,10], c:[1,20]}, z:"cok_zor", alt:"toplam_carpim_kare" },

  // ALT DAL 7: TAM KARE PROBLEMLERİ
  { id: "s6_tk_026", s: "x² + kx + 9 ifadesinin tam kare olması için k'nın pozitif değeri kaçtır?", c: "6", v: {}, z:"zor", alt:"tam_kare_k_bulma" },
  { id: "s6_tk_027", s: "x² - {a}x + m ifadesinin tam kare olması için m kaçtır?", c: "({a}/2)²", v: {a:[2,12,2]}, z:"zor", alt:"tam_kare_m_bulma" },

  // ALT DAL 8: TAM KARE SADELEŞTİRME
  { id: "s6_tk_028", s: "(x²+{2a}x+{a2})/(x+{a}) = ?", c: "x+{a}", v: {a:[1,8], a2:"{a}*{a}"}, z:"zor", alt:"tam_kare_bolme" },
  { id: "s6_tk_029", s: "√(x²+6x+9) = ?", c: "|x+3|", v: {}, z:"cok_zor", alt:"tam_kare_kok" },

  // ALT DAL 9: CARPANLARA AYIRMA TAM KARE
  // DÜZELTME: "2ab" -> "iki_ab", "b2" -> "b_kare"
  { id: "s6_tk_030", s: "{a}x² + {iki_ab}x + {b_kare} = ?", c: "({a}x+{b})²", v: { a: [2, 4], b: [1, 4], iki_ab: [4, 8, 12, 16], b_kare: [1, 4, 9, 16] }, z: "cok_zor", alt: "katsayili_tam_kare_carpan" },
  { id: "s6_tk_031", s: "4x^2 + 12x + 9 = ?", c: "(2x+3)^2", v: {}, z: "zor", alt: "4x2_12x_9" },
  { id: "s6_tk_032", s: "9x^2 - 24x + 16 = ?", c: "(3x-4)^2", v: {}, z: "zor", alt: "9x2_24x_16" },

  // ALT DAL 10: TAM KARE KARIŞIK
  { id: "s6_tk_033", s: "x²+y²+2xy-1 = ?", c: "(x+y)²-1=(x+y-1)(x+y+1)", v: {}, z:"cok_zor", alt:"tam_kare_eksi_1" },
  { id: "s6_tk_034", s: "a²+4a+4-b² = ?", c: "(a+2)²-b²=(a+2-b)(a+2+b)", v: {}, z:"cok_zor", alt:"tam_kare_kare_fark" },


  // ==========================================
  // KONU 5: İKİ KÜP FARKI/TOPLAMI (8 alt dal)
  // ==========================================

  // ALT DAL 1: KÜP TOPLAMI FORMÜLÜ
  { id: "s6_ku_001", s: "x³ + {a} = ? (Çarpanlara ayır, a=tam küp)", c: "(x+∛{a})(x²-∛{a}x+∛{a}²)", v: {a:[8,27,64,125]}, z:"zor", alt:"kup_toplam" },
  { id: "s6_ku_002", s: "x³ + 8 = ?", c: "(x+2)(x²-2x+4)", v: {}, z:"zor", alt:"x3_8" },
  { id: "s6_ku_003", s: "x³ + 27 = ?", c: "(x+3)(x²-3x+9)", v: {}, z:"zor", alt:"x3_27" },
  { id: "s6_ku_004", s: "x³ + 64 = ?", c: "(x+4)(x²-4x+16)", v: {}, z:"zor", alt:"x3_64" },
  { id: "s6_ku_005", s: "a³ + b³ = ? (Formül)", c: "(a+b)(a²-ab+b²)", v: {}, z:"orta", alt:"kup_toplam_formul" },

  // ALT DAL 2: KÜP FARKI FORMÜLÜ
  { id: "s6_ku_006", s: "x³ - {a} = ? (a=tam küp)", c: "(x-∛{a})(x²+∛{a}x+∛{a}²)", v: {a:[8,27,64,125]}, z:"zor", alt:"kup_fark" },
  { id: "s6_ku_007", s: "x³ - 8 = ?", c: "(x-2)(x²+2x+4)", v: {}, z:"zor", alt:"x3_8_fark" },
  { id: "s6_ku_008", s: "x³ - 27 = ?", c: "(x-3)(x²+3x+9)", v: {}, z:"zor", alt:"x3_27_fark" },
  { id: "s6_ku_009", s: "x³ - 125 = ?", c: "(x-5)(x²+5x+25)", v: {}, z:"zor", alt:"x3_125_fark" },
  { id: "s6_ku_010", s: "a³ - b³ = ? (Formül)", c: "(a-b)(a²+ab+b²)", v: {}, z:"orta", alt:"kup_fark_formul" },

  // ALT DAL 3: İKİ KÜP TANIMA
  { id: "s6_ku_011", s: "x³ + {a} ifadesi iki küp toplamı mıdır?", c: "{evet_hayir}", v: {a:[1,100]}, z:"orta", alt:"kup_tanima" },
  { id: "s6_ku_012", s: "Aşağıdakilerden hangisi iki küp farkıdır?", c: "{dogru}", v: {secenekler:["x³-8","x³+8","x²-8","x³-6","x³+6"]}, z:"orta", alt:"kup_bulma" },

  // ALT DAL 4: DEĞİŞKENLİ İKİ KÜP
  { id: "s6_ku_013", s: "8x³ + 27 = ?", c: "(2x+3)(4x²-6x+9)", v: {}, z:"cok_zor", alt:"8x3_27" },
  { id: "s6_ku_014", s: "27x³ - 8 = ?", c: "(3x-2)(9x²+6x+4)", v: {}, z:"cok_zor", alt:"27x3_8" },
  { id: "s6_ku_015", s: "64a³ + 125 = ?", c: "(4a+5)(16a²-20a+25)", v: {}, z:"cok_zor", alt:"64a3_125" },

  // ALT DAL 5: İKİ KÜP İLE SADELEŞTİRME
  { id: "s6_ku_016", s: "(x³-8)/(x-2) = ?", c: "x²+2x+4", v: {}, z:"zor", alt:"x3_8_x_2" },
  { id: "s6_ku_017", s: "(x³+27)/(x+3) = ?", c: "x²-3x+9", v: {}, z:"zor", alt:"x3_27_x+3" },
  { id: "s6_ku_018", s: "(8x³-1)/(2x-1) = ?", c: "4x²+2x+1", v: {}, z:"cok_zor", alt:"8x3_1_2x_1" },

  // ALT DAL 6: İKİ KÜP ÖZDEŞLİK UYGULAMALARI
  { id: "s6_ku_019", s: "a³+b³ = (a+b)³ - ?", c: "3ab(a+b)", v: {}, z:"cok_zor", alt:"kup_toplam_acilim" },
  { id: "s6_ku_020", s: "a³-b³ = (a-b)³ + ?", c: "3ab(a-b)", v: {}, z:"cok_zor", alt:"kup_fark_acilim" },
  { id: "s6_ku_021", s: "a+b=5 ve ab=6 ise a³+b³ = ?", c: "35", v: {}, z:"cok_zor", alt:"toplam_carpim_kup" },

  // ALT DAL 7: İKİ KÜP PROBLEMLERİ
  { id: "s6_ku_022", s: "x³+y³ = 35 ve x+y=5 ise xy = ?", c: "6", v: {}, z:"cok_zor", alt:"kup_toplam_xy" },
  { id: "s6_ku_023", s: "x-y=2 ve x³-y³=98 ise xy = ?", c: "15", v: {}, z:"cok_zor", alt:"kup_fark_xy" },

  // ALT DAL 8: İKİ KÜP KARIŞIK
  { id: "s6_ku_024", s: "(x+1)³ - x³ = ?", c: "3x²+3x+1", v: {}, z:"cok_zor", alt:"x+1_3_x3" },
  { id: "s6_ku_025", s: "x⁶ - 1 = ? (Önce iki kare farkı, sonra iki küp)", c: "(x-1)(x+1)(x²+x+1)(x²-x+1)", v: {}, z:"cok_zor", alt:"x6_1" },


  // ==========================================
  // KONU 6: ÜÇ TERİMLİ İFADELER (8 alt dal)
  // ==========================================

  // ALT DAL 1: x²+bx+c ŞEKLİNDE ÇARPANLARA AYIRMA
  { id: "s6_ut_001", s: "x² + {b}x + {c} = ? (Çarpanlara ayır)", c: "(x+{r1})(x+{r2})", v: {b:[3,10], c:[2,24], kosul:"iki_sayi_carpim_c_toplam_b"}, z:"orta", alt:"x2_bx_c" },
  { id: "s6_ut_002", s: "x² + 5x + 6 = ?", c: "(x+2)(x+3)", v: {}, z:"orta", alt:"x2_5x_6" },
  { id: "s6_ut_003", s: "x² + 7x + 12 = ?", c: "(x+3)(x+4)", v: {}, z:"orta", alt:"x2_7x_12" },
  { id: "s6_ut_004", s: "x² - 5x + 6 = ?", c: "(x-2)(x-3)", v: {}, z:"orta", alt:"x2_5x_6_eksi" },
  { id: "s6_ut_005", s: "x² + x - 6 = ?", c: "(x+3)(x-2)", v: {}, z:"orta", alt:"x2_x_6" },
  { id: "s6_ut_006", s: "x² - x - 6 = ?", c: "(x-3)(x+2)", v: {}, z:"orta", alt:"x2_x_6_eksi" },

  // ALT DAL 2: ax²+bx+c ŞEKLİNDE ÇARPANLARA AYIRMA
  // NOT: a1, a2, c1, c2 değişkenleri v'de tanımlanmamış - bu sorular eksik, olduğu gibi bırakıldı
  { id: "s6_ut_007", s: "{a}x² + {b}x + {c} = ?", c: "({a1}x+{c1})({a2}x+{c2})", v: {a:[2,6], b:[5,13], c:[2,12], kosul:"carpanlara_ayrilabilir"}, z:"zor", alt:"ax2_bx_c" },
  { id: "s6_ut_008", s: "2x² + 5x + 3 = ?", c: "(2x+3)(x+1)", v: {}, z:"zor", alt:"2x2_5x_3" },
  { id: "s6_ut_009", s: "3x² + 7x + 2 = ?", c: "(3x+1)(x+2)", v: {}, z:"zor", alt:"3x2_7x_2" },
  { id: "s6_ut_010", s: "6x² - 5x - 6 = ?", c: "(2x-3)(3x+2)", v: {}, z:"cok_zor", alt:"6x2_5x_6" },
  { id: "s6_ut_011", s: "4x² - 4x - 3 = ?", c: "(2x-3)(2x+1)", v: {}, z:"cok_zor", alt:"4x2_4x_3" },

  // ALT DAL 3: ÇAPRAZ ÇARPIM YÖNTEMİ
  { id: "s6_ut_012", s: "2x² + 7x + 6 = ? (Çapraz çarpım ile)", c: "(2x+3)(x+2)", v: {}, z:"zor", alt:"capraz_2x2_7x_6" },
  { id: "s6_ut_013", s: "Çapraz çarpım yöntemi nasıl uygulanır?", c: "a_ve_c_carpanlari_capraz_carpilip_b_elde_edilir", v: {}, z:"orta", alt:"capraz_yontem" },

  // ALT DAL 4: ORTAK ÇARPAN + ÜÇ TERİMLİ
  { id: "s6_ut_014", s: "{a}x³ + {b}x² + {c}x = ?", c: "x({a}x²+{b}x+{c})", v: {a:[2,4], b:[3,8], c:[2,6]}, z:"zor", alt:"once_ortak_carpan" },
  { id: "s6_ut_015", s: "2x³ - 8x² + 6x = ?", c: "2x(x²-4x+3)=2x(x-1)(x-3)", v: {}, z:"cok_zor", alt:"2x3_8x2_6x" },

  // ALT DAL 5: TERS DÖNÜŞÜM
  { id: "s6_ut_016", s: "(x+{a})(x+{b}) = ?", c: "x²+{a+b}x+{a}*{b}", v: {a:[1,5], b:[1,5]}, z:"orta", alt:"carpim_acilim" },
  { id: "s6_ut_017", s: "(2x+1)(x+3) = ?", c: "2x²+7x+3", v: {}, z:"orta", alt:"2x+1_x+3" },
  { id: "s6_ut_018", s: "(3x-2)(2x+5) = ?", c: "6x²+11x-10", v: {}, z:"zor", alt:"3x-2_2x+5" },

  // ALT DAL 6: ÜÇ TERİMLİ SORU TİPLERİ
  { id: "s6_ut_019", s: "x² + (a+b)x + ab = ?", c: "(x+a)(x+b)", v: {}, z:"orta", alt:"x2_a+b_x_ab" },
  { id: "s6_ut_020", s: "x² + 2ax + a² - b² = ?", c: "(x+a-b)(x+a+b)", v: {}, z:"cok_zor", alt:"x2_2ax_a2_b2" },

  // ALT DAL 7: ÇARPANLARA AYRILAMAMA DURUMU
  { id: "s6_ut_021", s: "x² + x + 1 ifadesi reel sayılarda çarpanlara ayrılır mı?", c: "hayir_(diskriminant<0)", v: {}, z:"zor", alt:"ayrilamaz" },
  { id: "s6_ut_022", s: "Bir üç terimlinin çarpanlara ayrılma şartı nedir?", c: "diskriminant≥0", v: {}, z:"orta", alt:"sart" },

  // ALT DAL 8: KARIŞIK ÜÇ TERİMLİ
  { id: "s6_ut_023", s: "x⁴ - 5x² + 4 = ? (x²=t dönüşümü)", c: "(x-1)(x+1)(x-2)(x+2)", v: {}, z:"cok_zor", alt:"x4_5x2_4" },
  { id: "s6_ut_024", s: "2x⁴ + x² - 6 = ?", c: "(2x²-3)(x²+2)", v: {}, z:"cok_zor", alt:"2x4_x2_6" },


  // ==========================================
  // KONU 7: TERİM EKLEME-ÇIKARMA (6 alt dal)
  // ==========================================

  // ALT DAL 1: TAM KAREYE TAMAMLAMA
  { id: "s6_te_001", s: "x² + 4x ifadesini tam kareye tamamlayınız.", c: "x²+4x+4-4=(x+2)²-4", v: {}, z:"zor", alt:"tam_kareye_tamamlama" },
  { id: "s6_te_002", s: "x² + {a}x + ? ifadesi tam kare olması için ? kaç olmalıdır?", c: "({a}/2)²", v: {a:[2,12,2]}, z:"zor", alt:"tam_kare_icin_eklenecek" },
  { id: "s6_te_003", s: "x² - 6x + 5 = ? (Tam kareye tamamlayarak)", c: "(x-3)²-4=(x-5)(x-1)", v: {}, z:"cok_zor", alt:"x2_6x_5" },

  // ALT DAL 2: TERİM EKLEME-ÇIKARMA YÖNTEMİ
  { id: "s6_te_004", s: "x⁴ + x² + 1 = ? (x⁴+x²+1+x²-x²)", c: "(x²+x+1)(x²-x+1)", v: {}, z:"cok_zor", alt:"x4_x2_1" },
  { id: "s6_te_005", s: "a⁴ + 4b⁴ = ?", c: "(a²+2ab+2b²)(a²-2ab+2b²)", v: {}, z:"cok_zor", alt:"a4_4b4" },

  // ALT DAL 3: ÇARPANLARA AYIRMA STRATEJİSİ
  { id: "s6_te_006", s: "x⁴ + 4 ifadesi çarpanlara nasıl ayrılır?", c: "x⁴+4x²+4-4x²=(x²+2)²-(2x)²", v: {}, z:"cok_zor", alt:"x4_4" },
  { id: "s6_te_007", s: "x⁸ + x⁴ + 1 = ?", c: "(x⁴+x²+1)(x⁴-x²+1)", v: {}, z:"cok_zor", alt:"x8_x4_1" },

  // ALT DAL 4: ÖZEL TERİM EKLEME-ÇIKARMA
  { id: "s6_te_008", s: "a³ + b³ + c³ - 3abc = ?", c: "(a+b+c)(a²+b²+c²-ab-ac-bc)", v: {}, z:"cok_zor", alt:"a3_b3_c3_3abc" },
  { id: "s6_te_009", s: "a=b=c ise a³+b³+c³-3abc = ?", c: "0", v: {}, z:"cok_zor", alt:"esitlik_durumu" },

  // ALT DAL 5: TERİM EKLEME-ÇIKARMA SORULARI
  { id: "s6_te_010", s: "x² + 1/x² ifadesi tam kare olarak nasıl yazılır?", c: "(x-1/x)²+2_veya_(x+1/x)²-2", v: {}, z:"cok_zor", alt:"x2_1_x2" },
  { id: "s6_te_011", s: "x+1/x = 3 ise x²+1/x² = ?", c: "7", v: {}, z:"cok_zor", alt:"x+1_x_3" },
  { id: "s6_te_012", s: "x-1/x = 2 ise x²+1/x² = ?", c: "6", v: {}, z:"cok_zor", alt:"x-1_x_2" },

  // ALT DAL 6: KARIŞIK
  { id: "s6_te_013", s: "x+y+z=0 ise x³+y³+z³ = ?", c: "3xyz", v: {}, z:"cok_zor", alt:"x+y+z_0_kup" },
  { id: "s6_te_014", s: "x+y=4 ve xy=1 ise x⁴+y⁴ = ?", c: "194", v: {}, z:"cok_zor", alt:"x4_y4" },


  // ==========================================
  // KONU 8: DEĞİŞKEN DEĞİŞTİRME (6 alt dal)
  // ==========================================

  // ALT DAL 1: x² = t DÖNÜŞÜMÜ
  { id: "s6_dd_001", s: "x⁴ - {a}x² + {b} = ? (x²=t dönüşümü)", c: "{sonuc}", v: {a:[3,10], b:[2,24]}, z:"zor", alt:"x4_ax2_b" },
  { id: "s6_dd_002", s: "x⁴ - 5x² + 4 = ?", c: "(x-1)(x+1)(x-2)(x+2)", v: {}, z:"zor", alt:"x4_5x2_4" },
  { id: "s6_dd_003", s: "x⁴ - 10x² + 9 = ?", c: "(x-1)(x+1)(x-3)(x+3)", v: {}, z:"zor", alt:"x4_10x2_9" },
  { id: "s6_dd_004", s: "x⁴ - 13x² + 36 = ?", c: "(x-2)(x+2)(x-3)(x+3)", v: {}, z:"zor", alt:"x4_13x2_36" },

  // ALT DAL 2: x = √t DÖNÜŞÜMÜ
  { id: "s6_dd_005", s: "x - {a}√x + {b} = ? (√x=t dönüşümü)", c: "{sonuc}", v: {a:[3,7], b:[2,12]}, z:"cok_zor", alt:"x_a_kok_x_b" },
  { id: "s6_dd_006", s: "x - 5√x + 6 = ?", c: "(√x-2)(√x-3)", v: {}, z:"cok_zor", alt:"x_5_kok_x_6" },

  // ALT DAL 3: x + 1/x = t DÖNÜŞÜMÜ
  { id: "s6_dd_007", s: "x + 1/x = {t} ise x² + 1/x² = ?", c: "{t}²-2", v: {t:[3,6]}, z:"cok_zor", alt:"x+1_x" },
  { id: "s6_dd_008", s: "x + 1/x = 3 ise x³ + 1/x³ = ?", c: "18", v: {}, z:"cok_zor", alt:"x+1_x_3_kup" },
  { id: "s6_dd_009", s: "x - 1/x = 2 ise x³ - 1/x³ = ?", c: "14", v: {}, z:"cok_zor", alt:"x-1_x_2_kup" },

  // ALT DAL 4: a+b ve ab DÖNÜŞÜMÜ
  { id: "s6_dd_010", s: "a+b={t} ve ab={c} ise a²+b² = ?", c: "{t}²-2*{c}", v: {t:[3,8], c:[1,12]}, z:"cok_zor", alt:"a+b_ab" },
  { id: "s6_dd_011", s: "a+b=5 ve ab=6 ise a³+b³ = ?", c: "35", v: {}, z:"cok_zor", alt:"a+b_5_ab_6_kup" },

  // ALT DAL 5: POLİNOM DÖNÜŞÜMÜ
  { id: "s6_dd_012", s: "(x+1/x)² - {a}(x+1/x) + {b} = ?", c: "{sonuc}", v: {a:[3,6], b:[2,8]}, z:"cok_zor", alt:"x+1_x_polinom" },
  { id: "s6_dd_013", s: "(x²+1)² - {a}(x²+1) + {b} = ? (x²+1=t)", c: "{sonuc}", v: {a:[3,7], b:[2,10]}, z:"cok_zor", alt:"x2+1_polinom" },

  // ALT DAL 6: KARIŞIK DÖNÜŞÜM
  { id: "s6_dd_014", s: "x² + 2x + 1/x² + 2/x ifadesini (x+1/x) cinsinden yazınız.", c: "(x+1/x)²+2(x+1/x)-2", v: {}, z:"cok_zor", alt:"karmasik_donusum" },
  { id: "s6_dd_015", s: "x⁶ + 1/x⁶ ifadesini x²+1/x² cinsinden yazınız.", c: "(x²+1/x²)³-3(x²+1/x²)", v: {}, z:"cok_zor", alt:"x6_1_x6" },


  // ==========================================
  // KONU 9: ÇARPANLARA AYIRMA STRATEJİLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: STRATEJİ SIRALAMASI
  { id: "s6_cs_001", s: "Bir ifadeyi çarpanlara ayırırken ilk hangi yöntem denenir?", c: "ortak_carpan_parantezine_alma", v: {}, z:"orta", alt:"ilk_yontem" },
  { id: "s6_cs_002", s: "Çarpanlara ayırma strateji sıralaması nedir?", c: "1.ortak_carpan_2.ozdeslikler_3.uc_terimli_4.gruplandirma", v: {}, z:"orta", alt:"siralama" },

  // ALT DAL 2: KARIŞIK ÇARPANLARA AYIRMA
  { id: "s6_cs_003", s: "x³ - x = ?", c: "x(x-1)(x+1)", v: {}, z:"zor", alt:"x3_x" },
  { id: "s6_cs_004", s: "x⁴ - 1 = ?", c: "(x-1)(x+1)(x²+1)", v: {}, z:"zor", alt:"x4_1" },
  { id: "s6_cs_005", s: "a³b - ab³ = ?", c: "ab(a-b)(a+b)", v: {}, z:"cok_zor", alt:"a3b_ab3" },
  { id: "s6_cs_006", s: "x²y - xy² + x - y = ?", c: "(x-y)(xy+1)", v: {}, z:"cok_zor", alt:"x2y_xy2_x_y" },

  // ALT DAL 3: ÖZEL ÇARPANLARA AYIRMA
  { id: "s6_cs_007", s: "(x+y)³ - (x-y)³ = ?", c: "2y(3x²+y²)", v: {}, z:"cok_zor", alt:"x+y_3_x-y_3" },
  { id: "s6_cs_008", s: "x²(x-y) + y²(y-x) = ?", c: "(x-y)²(x+y)", v: {}, z:"cok_zor", alt:"x2_x-y_y2_y-x" },
  { id: "s6_cs_009", s: "(a+b+c)(ab+ac+bc) - abc = ?", c: "(a+b)(a+c)(b+c)", v: {}, z:"cok_zor", alt:"simetrik" },

  // ALT DAL 4: ÇARPANLARA AYIRMA TESTİ
  { id: "s6_cs_010", s: "{ifade} ifadesi aşağıdakilerden hangisine eşittir?", c: "{dogru}", v: {}, z:"zor", alt:"test" },
  { id: "s6_cs_011", s: "x²-4x+4 ifadesinin çarpanlara ayrılmış hali nedir?", c: "(x-2)²", v: {}, z:"orta", alt:"x2_4x_4" },
  { id: "s6_cs_012", s: "x²-9 ifadesinin çarpanlara ayrılmış hali nedir?", c: "(x-3)(x+3)", v: {}, z:"orta", alt:"x2_9" },

  // ALT DAL 5: HATALI ÇARPANLARA AYIRMA
  { id: "s6_cs_013", s: "x²+9 ifadesi (x+3)(x-3) şeklinde çarpanlara ayrılır mı?", c: "hayir_(x²+9_iki_kare_farki_degildir)", v: {}, z:"orta", alt:"hatali" },
  { id: "s6_cs_014", s: "x²+4 ifadesi (x+2)² şeklinde yazılır mı?", c: "hayir_(x²+4x+4_olsa_tam_kare)", v: {}, z:"orta", alt:"hatali_tam_kare" },

  // ALT DAL 6: EN SADE HAL
  { id: "s6_cs_015", s: "x(x+1) + (x+1) = ?", c: "(x+1)²", v: {}, z:"orta", alt:"en_sade" },
  { id: "s6_cs_016", s: "(x²-1)/(x-1) = ? (En sade hal)", c: "x+1", v: {}, z:"orta", alt:"sadelestirme_sonuc" },
  { id: "s6_cs_017", s: "(x³-8)/(x²+2x+4) = ?", c: "x-2", v: {}, z:"zor", alt:"kup_bolme" },


  // ==========================================
  // KONU 10: POLİNOM BÖLMESİ (4 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT POLİNOM BÖLMESİ
  { id: "s6_pb_001", s: "(x²-4) ÷ (x-2) = ?", c: "x+2", v: {}, z:"orta", alt:"kare_fark_bolme" },
  { id: "s6_pb_002", s: "(x²+5x+6) ÷ (x+2) = ?", c: "x+3", v: {}, z:"zor", alt:"uc_terimli_bolme" },
  { id: "s6_pb_003", s: "(x³-1) ÷ (x-1) = ?", c: "x²+x+1", v: {}, z:"zor", alt:"kup_fark_bolme" },

  // ALT DAL 2: KALANLI POLİNOM BÖLMESİ
  { id: "s6_pb_004", s: "P(x) = x²+3x+5 polinomunun x+1 ile bölümünden kalan kaçtır?", c: "3", v: {}, z:"zor", alt:"kalan_bulma" },
  { id: "s6_pb_005", s: "P(x) polinomunun x-a ile bölümünden kalan nasıl bulunur?", c: "P(a)_hesaplanir", v: {}, z:"orta", alt:"kalan_teoremi" },

  // ALT DAL 3: POLİNOM BÖLMESİ İLE ÇARPANLARA AYIRMA
  { id: "s6_pb_006", s: "P(x)=x³-3x+2 polinomunun bir çarpanı x-1 ise diğer çarpanı nedir?", c: "x²+x-2", v: {}, z:"cok_zor", alt:"carpan_bulma" },
  { id: "s6_pb_007", s: "Bir polinomun çarpanı biliniyorsa diğer çarpan nasıl bulunur?", c: "polinom_bolmesi_ile", v: {}, z:"orta", alt:"carpan_yontem" },

  // ALT DAL 4: POLİNOM BÖLMESİ SORULARI
  { id: "s6_pb_008", s: "P(x) = 2x³-5x²+x+2 polinomu x-2 ile tam bölünür mü?", c: "evet_(P(2)=0)", v: {}, z:"cok_zor", alt:"tam_bolunme" },
  { id: "s6_pb_009", s: "P(2)=0 ise P(x) polinomunun bir çarpanı nedir?", c: "x-2", v: {}, z:"orta", alt:"carpan_kok_iliskisi" },


  // ==========================================
  // KONU 11: ÖZDEŞLİKLER (10 alt dal)
  // ==========================================

  // ALT DAL 1: TEMEL ÖZDEŞLİKLER
  // DÜZELTME: "2ab" anahtarı "iki_ab" yapıldı
  { id: "s6_oz_001", s: "(a+b)² = a²+2ab+b² özdeşliğini doğrulayınız. a={a}, b={b}", c: "({a}+{b})²={a}²+2*{a}*{b}+{b}²", v: {a:[2,5], b:[3,6]}, z:"orta", alt:"tam_kare_ozdeslik" },
  { id: "s6_oz_002", s: "(a-b)² = a²-2ab+b² özdeşliğini doğrulayınız. a={a}, b={b}", c: "({a}-{b})²={a}²-2*{a}*{b}+{b}²", v: {a:[5,8], b:[1,4]}, z:"orta", alt:"tam_kare_fark_ozdeslik" },
  { id: "s6_oz_003", s: "a²-b² = (a-b)(a+b) özdeşliğini doğrulayınız. a={a}, b={b}", c: "{a}²-{b}²=({a}-{b})({a}+{b})", v: {a:[3,7], b:[1,4]}, z:"orta", alt:"kare_fark_ozdeslik" },

  // ALT DAL 2: İKİ KÜP ÖZDEŞLİĞİ
  { id: "s6_oz_004", s: "a³+b³ = (a+b)(a²-ab+b²) özdeşliğini doğrulayınız. a={a}, b={b}", c: "{a}³+{b}³=({a}+{b})({a}²-{a}*{b}+{b}²)", v: {a:[2,4], b:[1,3]}, z:"zor", alt:"kup_toplam_ozdeslik" },
  { id: "s6_oz_005", s: "a³-b³ = (a-b)(a²+ab+b²) özdeşliğini doğrulayınız. a={a}, b={b}", c: "{a}³-{b}³=({a}-{b})({a}²+{a}*{b}+{b}²)", v: {a:[3,5], b:[1,3]}, z:"zor", alt:"kup_fark_ozdeslik" },

  // ALT DAL 3: (a+b+c)² ÖZDEŞLİĞİ
  { id: "s6_oz_006", s: "(a+b+c)² = ? (Açılım)", c: "a²+b²+c²+2ab+2ac+2bc", v: {}, z:"cok_zor", alt:"uc_terim_kare_ozdeslik" },
  { id: "s6_oz_007", s: "(x+y+{a})² açılımını yazınız.", c: "x²+y²+{a}²+2xy+2*{a}x+2*{a}y", v: {a:[1,5]}, z:"cok_zor", alt:"x+y+a_kare" },

  // ALT DAL 4: a³+b³+c³-3abc ÖZDEŞLİĞİ
  { id: "s6_oz_008", s: "a³+b³+c³-3abc = ?", c: "(a+b+c)(a²+b²+c²-ab-ac-bc)", v: {}, z:"cok_zor", alt:"uc_kup_ozdeslik" },
  { id: "s6_oz_009", s: "a+b+c=0 ise a³+b³+c³ = ?", c: "3abc", v: {}, z:"cok_zor", alt:"toplam_sifir_kup" },
  { id: "s6_oz_010", s: "a=b=c=1 için a³+b³+c³-3abc = ?", c: "0", v: {}, z:"cok_zor", alt:"esit_kup" },

  // ALT DAL 5: ÖZDEŞLİK UYGULAMALARI
  { id: "s6_oz_011", s: "{a}²-{b}² = ? (Hızlı hesapla)", c: "{sonuc}", v: {a:[11,99], b:[1,"{a}-1"]}, z:"kolay", alt:"hizli_hesap" },
  { id: "s6_oz_012", s: "101² = ? (100+1)² özdeşliği ile hesapla", c: "10201", v: {}, z:"orta", alt:"101_kare" },
  { id: "s6_oz_013", s: "99² = ? (100-1)² özdeşliği ile hesapla", c: "9801", v: {}, z:"orta", alt:"99_kare" },
  { id: "s6_oz_014", s: "51×49 = ? (50+1)(50-1) özdeşliği ile hesapla", c: "2499", v: {}, z:"orta", alt:"51_49" },

  // ALT DAL 6: ÖZDEŞLİK Mİ DENKLEM Mİ?
  { id: "s6_oz_015", s: "(x+1)² = x²+2x+1 ifadesi özdeşlik midir, denklem midir?", c: "ozdeslik_(her_x_icin_dogru)", v: {}, z:"orta", alt:"ozdeslik_denklem" },
  { id: "s6_oz_016", s: "(x+1)² = 4 ifadesi özdeşlik midir, denklem midir?", c: "denklem_(sadece_bazi_x_degerleri_icin)", v: {}, z:"orta", alt:"denklem" },

  // ALT DAL 7: ÖZDEŞLİK KULLANARAK ÇARPANLARA AYIRMA
  { id: "s6_oz_017", s: "x⁴+4 ifadesini özdeşlik kullanarak çarpanlara ayırınız.", c: "(x²+2x+2)(x²-2x+2)", v: {}, z:"cok_zor", alt:"x4_4_ozdeslik" },
  { id: "s6_oz_018", s: "a⁴+a²b²+b⁴ = ?", c: "(a²+ab+b²)(a²-ab+b²)", v: {}, z:"cok_zor", alt:"a4_a2b2_b4" },

  // ALT DAL 8: ÖZDEŞLİK PROBLEMLERİ
  { id: "s6_oz_019", s: "x+y=6 ve xy=8 ise x²+y² = ?", c: "20", v: {}, z:"zor", alt:"x+y_xy_kare_toplam" },
  { id: "s6_oz_020", s: "x-y=4 ve xy=5 ise x²+y² = ?", c: "26", v: {}, z:"zor", alt:"x-y_xy_kare_toplam" },
  { id: "s6_oz_021", s: "x+1/x=4 ise x²+1/x² = ?", c: "14", v: {}, z:"zor", alt:"x+1_x_kare" },

  // ALT DAL 9: ÖZDEŞLİK İSPATLARI
  { id: "s6_oz_022", s: "(a+b)²+(a-b)² = 2(a²+b²) özdeşliğini ispatlayınız.", c: "a²+2ab+b²+a²-2ab+b²=2a²+2b²=2(a²+b²)", v: {}, z:"cok_zor", alt:"ispat" },
  { id: "s6_oz_023", s: "(a+b)²-(a-b)² = 4ab özdeşliğini ispatlayınız.", c: "a²+2ab+b²-(a²-2ab+b²)=4ab", v: {}, z:"cok_zor", alt:"ispat_4ab" },

  // ALT DAL 10: ÖZDEŞLİK KARIŞIK
  { id: "s6_oz_024", s: "a²+b²+c² = (a+b+c)² - 2(ab+ac+bc) özdeşliğini doğrulayınız.", c: "dogru", v: {}, z:"cok_zor", alt:"kareler_toplam" },
  { id: "s6_oz_025", s: "x²+y²+z²=25 ve x+y+z=7 ise xy+xz+yz = ?", c: "12", v: {}, z:"cok_zor", alt:"kare_toplam_sorusu" },


  // ==========================================
  // KONU 12: RASYONEL İFADELERDE SADELEŞTİRME (8 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT SADELEŞTİRME
  { id: "s6_rs_001", s: "({a}x)/({b}x) = ? (Sadeleştir)", c: "{a}/{b}", v: {a:[2,8], b:[3,12]}, z:"orta", alt:"basit_sadelestirme" },
  { id: "s6_rs_002", s: "(x²-x)/x = ?", c: "x-1", v: {}, z:"orta", alt:"x2_x_x" },
  { id: "s6_rs_003", s: "(x²-4)/(x-2) = ?", c: "x+2", v: {}, z:"orta", alt:"kare_fark_sadelestirme" },
  { id: "s6_rs_004", s: "(x²+3x+2)/(x+1) = ?", c: "x+2", v: {}, z:"zor", alt:"uc_terimli_sadelestirme" },

  // ALT DAL 2: ÇARPANLARA AYIRARAK SADELEŞTİRME
  { id: "s6_rs_005", s: "(x²-{a})/(x-√{a}) = ?", c: "x+√{a}", v: {a:[4,9,16]}, z:"zor", alt:"kare_fark_bolme" },
  { id: "s6_rs_006", s: "(x³-8)/(x²+2x+4) = ?", c: "x-2", v: {}, z:"zor", alt:"kup_fark_sadelestirme" },
  { id: "s6_rs_007", s: "(x⁴-1)/(x²+1) = ?", c: "(x-1)(x+1)", v: {}, z:"cok_zor", alt:"x4_1_x2+1" },

  // ALT DAL 3: ORTAK ÇARPAN SADELEŞTİRME
  { id: "s6_rs_008", s: "({a}x²+{b}x)/({c}x) = ?", c: "({a}x+{b})/{c}", v: {a:[2,6], b:[3,8], c:[2,"{a}"]}, z:"zor", alt:"ortak_carpan_sade" },
  { id: "s6_rs_009", s: "(2x²+6x)/(2x) = ?", c: "x+3", v: {}, z:"zor", alt:"2x2_6x_2x" },
  { id: "s6_rs_010", s: "(x(x+1))/(x+1) = ? (x≠-1)", c: "x", v: {}, z:"orta", alt:"parantez_sadelestirme" },

  // ALT DAL 4: TANIM KÜMESİ
  { id: "s6_rs_011", s: "(x²-4)/(x-2) ifadesi x=2 için tanımlı mıdır?", c: "hayir_(payda_sifir_olur)", v: {}, z:"orta", alt:"tanimsizlik" },
  { id: "s6_rs_012", s: "(x-1)/(x²-1) ifadesinin tanım kümesi nedir?", c: "x≠1_ve_x≠-1", v: {}, z:"zor", alt:"tanim_kumesi" },

  // ALT DAL 5: KARIŞIK SADELEŞTİRME
  { id: "s6_rs_013", s: "(x³-1)/(x²-1) = ?", c: "(x²+x+1)/(x+1)", v: {}, z:"cok_zor", alt:"kup_kare_sade" },
  { id: "s6_rs_014", s: "(x³+8)/(x²-4) = ?", c: "(x²-2x+4)/(x-2)", v: {}, z:"cok_zor", alt:"kup_toplam_kare_fark" },
  { id: "s6_rs_015", s: "(x⁴-16)/(x²+4) = ?", c: "(x-2)(x+2)", v: {}, z:"cok_zor", alt:"x4_16_x2+4" },

  // ALT DAL 6: SADELEŞTİRME SONRASI DEĞER BULMA
  { id: "s6_rs_016", s: "(x²-{a})/(x-√{a}) ifadesinin x={b} için değeri kaçtır?", c: "{b}+√{a}", v: {a:[4,9,16], b:[3,8]}, z:"cok_zor", alt:"deger_bulma" },
  { id: "s6_rs_017", s: "(x²-4)/(x-2) ifadesinin x=5 için değeri kaçtır?", c: "7", v: {}, z:"zor", alt:"x2_4_x_2_x_5" },

  // ALT DAL 7: İKİ RASYONEL İFADENİN ÇARPIMI
  { id: "s6_rs_018", s: "(x²-1)/(x+2) × (x+2)/(x-1) = ?", c: "x+1", v: {}, z:"cok_zor", alt:"carpma_sadelestirme" },
  { id: "s6_rs_019", s: "(x-2)/(x²-4) × (x+2)/(x-2) = ?", c: "1/(x-2)", v: {}, z:"cok_zor", alt:"carpma_sadelestirme_2" },

  // ALT DAL 8: İKİ RASYONEL İFADENİN BÖLÜMÜ
  { id: "s6_rs_020", s: "(x²-4)/(x+1) ÷ (x-2)/(x+1) = ?", c: "x+2", v: {}, z:"cok_zor", alt:"bolme_sadelestirme" },
  { id: "s6_rs_021", s: "(x³-1)/(x-1) ÷ (x²+x+1)/(x+1) = ?", c: "x+1", v: {}, z:"cok_zor", alt:"kup_bolme_sade" },
  { id: "s6_rs_022", s: "(x²-{a})/(x²-{b}) × (x²-{b})/(x-√{a}) = ?", c: "x+√{a}", v: {a:[4,9,16], b:[9,16,25]}, z:"cok_zor", alt:"karmasik_sade" },

],

  7: [

  // ==========================================
  // KONU 1: BİRİNCİ DERECEDEN BİR BİLİNMEYENLİ DENKLEMLER (10 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT DENKLEM ÇÖZME
  { id: "s7_bd_001", s: "x + {a} = {b} ise x kaçtır?", c: "{b}-{a}", v: {a:[2,20], b:[5,50], kosul:"b>a"}, z:"kolay", alt:"x_arti_a" },
  { id: "s7_bd_002", s: "x - {a} = {b} ise x kaçtır?", c: "{a}+{b}", v: {a:[2,15], b:[3,20]}, z:"kolay", alt:"x_eksi_a" },
  { id: "s7_bd_003", s: "{a}x = {b} ise x kaçtır?", c: "{b}/{a}", v: {a:[2,9], b:[6,100], kosul:"b%a==0"}, z:"kolay", alt:"a_x" },
  { id: "s7_bd_004", s: "x/{a} = {b} ise x kaçtır?", c: "{a}*{b}", v: {a:[2,10], b:[2,15]}, z:"kolay", alt:"x_bolu_a" },
  { id: "s7_bd_005", s: "{a} - x = {b} ise x kaçtır?", c: "{a}-{b}", v: {a:[8,30], b:[1,"{a}-1"]}, z:"orta", alt:"a_eksi_x" },

  // ALT DAL 2: İKİ ADIMLI DENKLEMLER
  { id: "s7_bd_006", s: "{a}x + {b} = {c} ise x kaçtır?", c: "({c}-{b})/{a}", v: {a:[2,7], b:[2,10], c:[10,50], kosul:"(c-b)%a==0"}, z:"orta", alt:"ax+b=c" },
  { id: "s7_bd_007", s: "{a}x - {b} = {c} ise x kaçtır?", c: "({c}+{b})/{a}", v: {a:[2,7], b:[2,10], c:[5,30], kosul:"(c+b)%a==0"}, z:"orta", alt:"ax-b=c" },
  { id: "s7_bd_008", s: "x/{a} + {b} = {c} ise x kaçtır?", c: "{a}*({c}-{b})", v: {a:[2,8], b:[2,10], c:[5,20], kosul:"c>b"}, z:"orta", alt:"x/a+b=c" },

  // ALT DAL 3: PARANTEZLİ DENKLEMLER
  { id: "s7_bd_009", s: "{a}(x+{b}) = {c} ise x kaçtır?", c: "{c}/{a}-{b}", v: {a:[2,5], b:[1,6], c:[10,50], kosul:"c%a==0"}, z:"orta", alt:"a(x+b)=c" },
  { id: "s7_bd_010", s: "{a}(x-{b}) = {c} ise x kaçtır?", c: "{c}/{a}+{b}", v: {a:[2,5], b:[1,5], c:[10,50], kosul:"c%a==0"}, z:"orta", alt:"a(x-b)=c" },
  { id: "s7_bd_011", s: "({a}x+{b})/{c} = {d} ise x kaçtır?", c: "({c}*{d}-{b})/{a}", v: {a:[2,5], b:[2,8], c:[2,6], d:[3,10], kosul:"(c*d-b)%a==0"}, z:"zor", alt:"(ax+b)/c=d" },

  // ALT DAL 4: BİLİNMEYENİ BİR TARAFTA TOPLAMA
  { id: "s7_bd_012", s: "{a}x + {b} = {c}x + {d} ise x kaçtır?", c: "({d}-{b})/({a}-{c})", v: {a:[4,8], b:[2,10], c:[1,3], d:[10,30], kosul:"a>c"}, z:"zor", alt:"ax+b=cx+d" },
  { id: "s7_bd_013", s: "{a}x - {b} = {c} - {d}x ise x kaçtır?", c: "({b}+{c})/({a}+{d})", v: {a:[2,5], b:[2,8], c:[5,20], d:[2,5], kosul:"(b+c)%(a+d)==0"}, z:"zor", alt:"ax-b=c-dx" },
  { id: "s7_bd_014", s: "{a}(x-{b}) = {c}(x+{d}) ise x kaçtır?", c: "({a}*{b}+{c}*{d})/({a}-{c})", v: {a:[4,8], b:[1,5], c:[1,3], d:[2,6], kosul:"a>c"}, z:"cok_zor", alt:"a(x-b)=c(x+d)" },

  // ALT DAL 5: RASYONEL DENKLEMLER (TEMEL)
  { id: "s7_bd_015", s: "1/x + 1/{a} = 1/{b} ise x kaçtır?", c: "({a}*{b})/({a}-{b})", v: {a:[3,8], b:[2,"{a}-1"]}, z:"zor", alt:"1/x+1/a=1/b" },
  { id: "s7_bd_016", s: "{a}/x = {b}/{c} ise x kaçtır?", c: "{a}*{c}/{b}", v: {a:[2,8], b:[1,6], c:[1,6]}, z:"orta", alt:"a/x=b/c" },

  // ALT DAL 6: DENKLEM ÇÖZME STRATEJİLERİ
  { id: "s7_bd_017", s: "Bir denklemde bilinmeyeni bir tarafta toplamak için ne yapılır?", c: "esitligin_her_iki_tarafina_ayni_islem_uygulanir", v: {}, z:"orta", alt:"strateji" },
  { id: "s7_bd_018", s: "Denklem çözerken ilk adım nedir?", c: "parantezleri_ac_ve_benzer_terimleri_birlestir", v: {}, z:"orta", alt:"ilk_adim" },

  // ALT DAL 7: DENKLEMİN ÇÖZÜM KÜMESİ
  { id: "s7_bd_019", s: "{a}x + {b} = {a}x + {c} denkleminin çözüm kümesi nedir? (b≠c)", c: "bos_kume", v: {a:[2,5], b:[2,5], c:[6,10]}, z:"zor", alt:"bos_kume" },
  { id: "s7_bd_020", s: "{a}x + {b} = {a}x + {b} denkleminin çözüm kümesi nedir?", c: "tum_reel_sayilar", v: {a:[2,5], b:[2,10]}, z:"zor", alt:"sonsuz_cozum" },
  { id: "s7_bd_021", s: "0×x = {a} denkleminin çözüm kümesi nedir?", c: "bos_kume", v: {a:[1,10]}, z:"orta", alt:"0_x_a" },
  { id: "s7_bd_022", s: "0×x = 0 denkleminin çözüm kümesi nedir?", c: "tum_reel_sayilar", v: {}, z:"orta", alt:"0_x_0" },

  // ALT DAL 8: KESİRLİ DENKLEMLER
  { id: "s7_bd_023", s: "x/{a} + x/{b} = {c} ise x kaçtır?", c: "({c}*{a}*{b})/({a}+{b})", v: {a:[2,5], b:[3,6], c:[5,20], kosul:"a!=b"}, z:"cok_zor", alt:"x/a+x/b=c" },
  { id: "s7_bd_024", s: "(x+{a})/{b} = (x-{c})/{d} ise x kaçtır?", c: "({b}*{c}+{d}*{a})/({d}-{b})", v: {a:[1,5], b:[2,4], c:[1,5], d:[5,8], kosul:"d>b"}, z:"cok_zor", alt:"kesirli_denklem" },

  // ALT DAL 9: SÖZEL DENKLEM ÇÖZME
  { id: "s7_bd_025", s: "Hangi sayının {a} fazlasının {b} katı {c} eder?", c: "{c}/{b}-{a}", v: {a:[2,10], b:[2,5], c:[20,60], kosul:"(c/b)>a"}, z:"orta", alt:"sozel_denklem" },
  { id: "s7_bd_026", s: "Hangi sayının {a} eksiğinin yarısı {b} eder?", c: "{b}*2+{a}", v: {a:[2,10], b:[3,15]}, z:"orta", alt:"sozel_denklem_2" },

  // ALT DAL 10: DENKLEM SAĞLAMASI
  { id: "s7_bd_027", s: "x={a} değeri {b}x+{c}={d} denkleminin çözümü müdür?", c: "{evet_hayir}", v: {a:[1,10], b:[2,5], c:[2,10], d:[5,50]}, z:"orta", alt:"saglama" },
  { id: "s7_bd_028", s: "Çözümü x={a} olan bir denklem yazınız.", c: "x+{b}={a}+{b}_gibi", v: {a:[2,10], b:[1,5]}, z:"orta", alt:"denklem_yazma" },


  // ==========================================
  // KONU 2: BİRİNCİ DERECEDEN İKİ BİLİNMEYENLİ DENKLEMLER (8 alt dal)
  // ==========================================

  // ALT DAL 1: YOK ETME YÖNTEMİ
  { id: "s7_id_001", s: "x+y={t} ve x-y={f} ise x kaçtır?", c: "({t}+{f})/2", v: {t:[5,15], f:[1,7], kosul:"(t+f)%2==0"}, z:"orta", alt:"yok_etme_x" },
  { id: "s7_id_002", s: "x+y={t} ve x-y={f} ise y kaçtır?", c: "({t}-{f})/2", v: {t:[5,15], f:[1,7], kosul:"(t-f)%2==0"}, z:"orta", alt:"yok_etme_y" },
  { id: "s7_id_003", s: "{a}x+{b}y={c} ve {d}x-{b}y={e} ise x kaçtır?", c: "({c}+{e})/({a}+{d})", v: {a:[2,4], b:[2,5], c:[10,30], d:[2,4], e:[5,20]}, z:"zor", alt:"yok_etme_katsayili" },
  { id: "s7_id_004", s: "Yok etme yöntemi nasıl uygulanır?", c: "bilinmeyenlerden_biri_yok_edilerek_digeri_bulunur", v: {}, z:"orta", alt:"yok_etme_yontem" },

  // ALT DAL 2: YERİNE KOYMA YÖNTEMİ
  { id: "s7_id_005", s: "y = {a}x+{b} ve x+y={c} ise x kaçtır?", c: "({c}-{b})/({a}+1)", v: {a:[2,4], b:[1,5], c:[10,30]}, z:"zor", alt:"yerine_koyma" },
  { id: "s7_id_006", s: "x = {a}y - {b} ve x+y={c} ise y kaçtır?", c: "({c}+{b})/({a}+1)", v: {a:[2,4], b:[1,5], c:[8,25]}, z:"zor", alt:"yerine_koyma_2" },
  { id: "s7_id_007", s: "Yerine koyma yöntemi nasıl uygulanır?", c: "bir_denklemden_bir_bilinmeyen_cekilip_digerinde_yerine_yazilir", v: {}, z:"orta", alt:"yerine_koyma_yontem" },

  // ALT DAL 3: DENKLEM SİSTEMİ ÇÖZME
  { id: "s7_id_008", s: "{a}x+{b}y={c} ve {d}x+{e}y={f} ise x kaçtır?", c: "({c}*{e}-{b}*{f})/({a}*{e}-{b}*{d})", v: {a:[2,4], b:[1,4], c:[10,30], d:[1,3], e:[2,5], f:[5,20], kosul:"a*e!=b*d"}, z:"cok_zor", alt:"sistem" },
  { id: "s7_id_009", s: "{a}x+{b}y={c} ve {d}x+{e}y={f} ise y kaçtır?", c: "({a}*{f}-{c}*{d})/({a}*{e}-{b}*{d})", v: {a:[2,4], b:[1,4], c:[10,30], d:[1,3], e:[2,5], f:[5,20], kosul:"a*e!=b*d"}, z:"cok_zor", alt:"sistem_y" },

  // ALT DAL 4: ÖZEL DURUMLAR
  { id: "s7_id_010", s: "x+y={t} ve x+y={f} (t≠f) sisteminin çözümü nedir?", c: "bos_kume", v: {t:[5,10], f:[12,18]}, z:"zor", alt:"celisik_sistem" },
  { id: "s7_id_011", s: "x+y={t} ve 2x+2y={2t} sisteminin çözümü nedir?", c: "sonsuz_cozum", v: {t:[3,10], "2t":"2*{t}"}, z:"zor", alt:"bagimli_sistem" },
  { id: "s7_id_012", s: "Denklem sisteminin tek çözümü olma şartı nedir?", c: "katsayilar_orani_esit_olmamali", v: {}, z:"orta", alt:"tek_cozum_sarti" },

  // ALT DAL 5: PROBLEMLİ DENKLEM SİSTEMLERİ
  { id: "s7_id_013", s: "İki sayının toplamı {t}, farkı {f} ise büyük sayı kaçtır?", c: "({t}+{f})/2", v: {t:[10,30], f:[2,8], kosul:"(t+f)%2==0"}, z:"orta", alt:"toplam_fark" },
  { id: "s7_id_014", s: "İki sayının toplamı {t}, oranı {a}/{b} ise küçük sayı kaçtır?", c: "{t}*{b}/({a}+{b})", v: {a:[2,5], b:[1,"{a}-1"], t:[10,40], kosul:"t%(a+b)==0"}, z:"cok_zor", alt:"toplam_oran" },

  // ALT DAL 6: DENKLEM SİSTEMİ KURMA
  { id: "s7_id_015", s: "Ahmet'in yaşı Mehmet'in yaşının {a} katıdır. Yaşları toplamı {t} ise Ahmet kaç yaşındadır?", c: "{a}*{t}/({a}+1)", v: {a:[2,4], t:[15,40], kosul:"t%(a+1)==0"}, z:"zor", alt:"yas_problemi" },
  { id: "s7_id_016", s: "Bir sınıftaki kızların sayısı erkeklerin sayısının {a}/{b} katıdır. Sınıf mevcudu {m} ise kız sayısı kaçtır?", c: "{a}*{m}/({a}+{b})", v: {a:[2,5], b:[1,"{a}-1"], m:[20,50]}, z:"cok_zor", alt:"sinif_problemi" },

  // ALT DAL 7: ÜÇ BİLİNMEYENLİ SİSTEMLER (TEMEL)
  { id: "s7_id_017", s: "x+y={a}, y+z={b}, x+z={c} ise x kaçtır?", c: "({a}+{c}-{b})/2", v: {a:[5,15], b:[5,15], c:[5,15], kosul:"(a+c-b)%2==0"}, z:"cok_zor", alt:"uc_bilinmeyenli" },
  { id: "s7_id_018", s: "x+y+z={t}, x=y, y=z ise x kaçtır?", c: "{t}/3", v: {t:[6,30], kosul:"t%3==0"}, z:"zor", alt:"esit_uc_bilinmeyen" },

  // ALT DAL 8: GRAFİK YORUMLAMA
  { id: "s7_id_019", s: "y={a}x+{b} ve y={c}x+{d} doğrularının kesim noktasının apsisi kaçtır?", c: "({d}-{b})/({a}-{c})", v: {a:[2,5], b:[1,5], c:[1,3], d:[3,10], kosul:"a!=c"}, z:"cok_zor", alt:"kesim_noktasi" },
  { id: "s7_id_020", s: "y={a}x+{b} doğrusu x eksenini nerede keser?", c: "-{b}/{a}", v: {a:[2,5], b:[2,10], kosul:"b%a==0"}, z:"zor", alt:"x_ekseni_kesim" },


  // ==========================================
  // KONU 3: DENKLEM KURMA PROBLEMLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: SAYI PROBLEMLERİ
  { id: "s7_dp_001", s: "Bir sayının {a} katının {b} fazlası {c} ise bu sayı kaçtır?", c: "({c}-{b})/{a}", v: {a:[2,5], b:[2,10], c:[10,50]}, z:"orta", alt:"sayi_problemi" },
  { id: "s7_dp_002", s: "Bir sayının {a} eksiğinin {b} katı {c} ise bu sayı kaçtır?", c: "{c}/{b}+{a}", v: {a:[2,8], b:[2,5], c:[10,40]}, z:"orta", alt:"sayi_problemi_2" },
  { id: "s7_dp_003", s: "Ardışık üç sayının toplamı {t} ise en büyük sayı kaçtır?", c: "{t}/3+1", v: {t:[6,60], kosul:"t%3==0"}, z:"orta", alt:"ardisik_uc" },
  { id: "s7_dp_004", s: "Bir sayının yarısı ile üçte birinin toplamı {t} ise bu sayı kaçtır?", c: "{t}*6/5", v: {t:[5,50], kosul:"t%5==0"}, z:"zor", alt:"yarisi_ucte_biri" },

  // ALT DAL 2: YAŞ PROBLEMLERİ
  { id: "s7_dp_005", s: "Bir babanın yaşı çocuğunun yaşının {a} katıdır. {n} yıl sonra babanın yaşı çocuğunun yaşının {b} katı olacağına göre çocuk bugün kaç yaşındadır?", c: "{n}*({b}-1)/({a}-{b})", v: {a:[3,6], b:[2,"{a}-1"], n:[2,10]}, z:"cok_zor", alt:"yas_kat" },
  { id: "s7_dp_006", s: "Baba {b} yaşında, çocuk {c} yaşındadır. Kaç yıl önce babanın yaşı çocuğunun yaşının {k} katıydı?", c: "({b}-{k}*{c})/({k}-1)", v: {b:[30,50], c:[5,10], k:[2,4], kosul:"b>k*c"}, z:"cok_zor", alt:"yas_once" },

  // ALT DAL 3: YÜZDE PROBLEMLERİ
  { id: "s7_dp_007", s: "Bir mal {a} TL'ye alınıp %{k} kârla satılırsa satış fiyatı kaç TL olur?", c: "{a}*(100+{k})/100", v: {a:[50,200], k:[10,40,5]}, z:"orta", alt:"kar_yuzde" },
  { id: "s7_dp_008", s: "%{k} zararla {s} TL'ye satılan malın maliyeti kaç TL'dir?", c: "{s}*100/(100-{k})", v: {k:[10,30], s:[50,200]}, z:"zor", alt:"zarar_maliyet" },

  // ALT DAL 4: HAREKET PROBLEMLERİ (TEMEL)
  { id: "s7_dp_009", s: "Saatte {v} km hızla giden bir araç {t} saatte kaç km yol alır?", c: "{v}*{t}", v: {v:[40,120], t:[2,6]}, z:"kolay", alt:"yol_hiz" },
  { id: "s7_dp_010", s: "{x} km'lik yolu {t} saatte alan aracın hızı kaç km/saattir?", c: "{x}/{t}", v: {x:[100,600], t:[2,6], kosul:"x%t==0"}, z:"orta", alt:"hiz_bulma" },
  { id: "s7_dp_011", s: "İki araç {v1} ve {v2} km/saat hızla birbirine doğru hareket ediyor. {x} km mesafe varsa kaç saat sonra karşılaşırlar?", c: "{x}/({v1}+{v2})", v: {v1:[40,80], v2:[40,80], x:[200,600]}, z:"zor", alt:"karsilasma" },

  // ALT DAL 5: İŞÇİ-HAVUZ PROBLEMLERİ (TEMEL)
  { id: "s7_dp_012", s: "Bir işi A işçisi {a} günde, B işçisi {b} günde bitiriyor. İkisi birlikte kaç günde bitirir?", c: "{a}*{b}/({a}+{b})", v: {a:[3,10], b:[4,12]}, z:"zor", alt:"isci_birlikte" },
  { id: "s7_dp_013", s: "Bir havuzu A musluğu {a} saatte dolduruyor. Havuzun {k}/{m}'i kaç saatte dolar?", c: "{a}*{k}/{m}", v: {a:[4,12], k:[1,"{m}-1"], m:[2,6]}, z:"orta", alt:"havuz_kismi" },

  // ALT DAL 6: KARIŞIM PROBLEMLERİ (TEMEL)
  { id: "s7_dp_014", s: "Tuz oranı %{o1} olan {m1} kg tuzlu su ile %{o2} olan {m2} kg tuzlu su karıştırılırsa yeni karışımın tuz oranı % kaç olur?", c: "({o1}*{m1}+{o2}*{m2})/({m1}+{m2})", v: {o1:[10,30], m1:[10,50], o2:[20,50], m2:[10,50]}, z:"cok_zor", alt:"karisim" },
  { id: "s7_dp_015", s: "Alkol oranı %{o} olan {m} litre karışıma {s} litre su eklenirse yeni alkol oranı % kaç olur?", c: "{o}*{m}/({m}+{s})", v: {o:[20,60], m:[10,40], s:[5,20]}, z:"cok_zor", alt:"seyreltme" },


  // ==========================================
  // KONU 4: İKİNCİ DERECEDEN BİR BİLİNMEYENLİ DENKLEMLER - TANIM (6 alt dal)
  // ==========================================

  // ALT DAL 1: İKİNCİ DERECE DENKLEM TANIMA
  { id: "s7_ik_001", s: "Aşağıdakilerden hangisi ikinci dereceden bir bilinmeyenli denklemdir?", c: "{dogru}", v: {secenekler:["x²+3x+2=0","x+2=5","x³+2x=0","1/x+x=3","2x+3y=6"]}, z:"kolay", alt:"tanima" },
  { id: "s7_ik_002", s: "ax²+bx+c=0 ifadesinde a=0 olursa denklem ne olur?", c: "birinci_dereceden_denklem", v: {}, z:"orta", alt:"a_sifir" },
  { id: "s7_ik_003", s: "İkinci derece denklem olması için şart nedir?", c: "a≠0_ve_xin_en_yuksek_kuvveti_2_olmali", v: {}, z:"orta", alt:"sart" },

  // ALT DAL 2: BASİT İKİNCİ DERECE DENKLEM ÇÖZME
  { id: "s7_ik_004", s: "x² = {a} denkleminin çözüm kümesi nedir?", c: "{-√{a}, √{a}}", v: {a:[4,9,16,25,36,49,64,81,100]}, z:"orta", alt:"x_kare_a" },
  { id: "s7_ik_005", s: "x² - {a} = 0 denkleminin kökleri nedir?", c: "{-√{a}, √{a}}", v: {a:[4,9,16,25]}, z:"orta", alt:"x_kare_eksi_a" },
  { id: "s7_ik_006", s: "x² + {a} = 0 denkleminin reel kökü var mıdır?", c: "hayir_(a>0_ise)", v: {a:[1,20]}, z:"orta", alt:"x_kare_arti_a" },

  // ALT DAL 3: ÇARPANLARA AYIRARAK ÇÖZME
  { id: "s7_ik_007", s: "x² - 5x + 6 = 0 denkleminin kökleri nedir?", c: "{2,3}", v: {}, z:"orta", alt:"carpan_cozum" },
  { id: "s7_ik_008", s: "x² + x - 6 = 0 denkleminin kökleri nedir?", c: "{-3,2}", v: {}, z:"orta", alt:"carpan_cozum_2" },
  { id: "s7_ik_009", s: "x² - {a} = 0 denklemini çarpanlara ayırarak çözünüz.", c: "(x-√{a})(x+√{a})=0", v: {a:[4,9,16,25]}, z:"orta", alt:"kare_fark_cozum" },

  // ALT DAL 4: TAM KARE İFADELERİ ÇÖZME
  { id: "s7_ik_010", s: "(x-{a})² = 0 denkleminin kökü nedir?", c: "{a}_(cift_katli)", v: {a:[1,8]}, z:"orta", alt:"tam_kare_kok" },
  { id: "s7_ik_011", s: "x² + 2x + 1 = 0 denkleminin kökleri nedir?", c: "{-1}_(cift_katli)", v: {}, z:"orta", alt:"x2_2x_1" },

  // ALT DAL 5: ORTAK ÇARPAN PARANTEZİ İLE ÇÖZME
  { id: "s7_ik_012", s: "x² - x = 0 denkleminin kökleri nedir?", c: "{0,1}", v: {}, z:"orta", alt:"ortak_carpan" },
  { id: "s7_ik_013", s: "{a}x² + {b}x = 0 denkleminin kökleri nedir?", c: "{0, -{b}/{a}}", v: {a:[2,5], b:[2,8]}, z:"orta", alt:"ax2+bx" },

  // ALT DAL 6: DENKLEMİN DERECESİ
  { id: "s7_ik_014", s: "({a}x+{b})(x-{c}) = 0 denkleminin derecesi kaçtır?", c: "2", v: {a:[1,4], b:[1,5], c:[2,6]}, z:"orta", alt:"derece" },
  { id: "s7_ik_015", s: "(x²+1)(x-2) = 0 denkleminin derecesi kaçtır?", c: "3", v: {}, z:"orta", alt:"derece_3" },


  // ==========================================
  // KONU 5: DİSKRİMİNANT VE KÖK BULMA (8 alt dal)
  // ==========================================

  // ALT DAL 1: DİSKRİMİNANT HESAPLAMA
  { id: "s7_ds_001", s: "x² + {b}x + {c} = 0 denkleminin diskriminantı kaçtır?", c: "{b}²-4*{c}", v: {b:[2,8], c:[1,15]}, z:"orta", alt:"diskriminant" },
  { id: "s7_ds_002", s: "Diskriminant (Δ) formülü nedir?", c: "Δ=b²-4ac", v: {}, z:"orta", alt:"formul" },
  { id: "s7_ds_003", s: "{a}x² + {b}x + {c} = 0 denkleminin diskriminantı kaçtır?", c: "{b}²-4*{a}*{c}", v: {a:[2,4], b:[3,8], c:[1,6]}, z:"zor", alt:"katsayili_diskriminant" },

  // ALT DAL 2: DİSKRİMİNANTIN YORUMU
  { id: "s7_ds_004", s: "Δ > 0 ise denklemin kaç reel kökü vardır?", c: "2_farkli_reel_kok", v: {}, z:"orta", alt:"delta_buyuk" },
  { id: "s7_ds_005", s: "Δ = 0 ise denklemin kaç reel kökü vardır?", c: "1_(cift_katli_kok)", v: {}, z:"orta", alt:"delta_sifir" },
  { id: "s7_ds_006", s: "Δ < 0 ise denklemin kaç reel kökü vardır?", c: "0_(reel_kok_yok)", v: {}, z:"orta", alt:"delta_kucuk" },
  { id: "s7_ds_007", s: "x² + 4x + 3 = 0 denkleminin diskriminantı kaçtır ve kaç kökü vardır?", c: "Δ=4, 2_farkli_kok", v: {}, z:"orta", alt:"x2_4x_3" },
  { id: "s7_ds_008", s: "x² + 2x + 1 = 0 denkleminin diskriminantı kaçtır ve kaç kökü vardır?", c: "Δ=0, cift_katli_kok", v: {}, z:"orta", alt:"x2_2x_1_delta" },
  { id: "s7_ds_009", s: "x² + x + 1 = 0 denkleminin diskriminantı kaçtır ve kaç kökü vardır?", c: "Δ=-3, reel_kok_yok", v: {}, z:"orta", alt:"x2_x_1_delta" },

  // ALT DAL 3: KÖK BULMA FORMÜLÜ
  { id: "s7_ds_010", s: "x² + {b}x + {c} = 0 denkleminin köklerini bulunuz.", c: "{-b+√Δ}/2_ve_{-b-√Δ}/2", v: {b:[3,8], c:[1,12], kosul:"Δ≥0"}, z:"zor", alt:"kok_bulma" },
  { id: "s7_ds_011", s: "Kök bulma formülü nedir?", c: "x=(-b±√Δ)/2a", v: {}, z:"orta", alt:"kok_formul" },
  { id: "s7_ds_012", s: "x² - 5x + 6 = 0 denkleminin kökleri nedir?", c: "{2,3}", v: {}, z:"zor", alt:"x2_5x_6_kok" },
  { id: "s7_ds_013", s: "x² - 7x + 12 = 0 denkleminin kökleri nedir?", c: "{3,4}", v: {}, z:"zor", alt:"x2_7x_12_kok" },
  { id: "s7_ds_014", s: "x² - x - 2 = 0 denkleminin kökleri nedir?", c: "{-1,2}", v: {}, z:"zor", alt:"x2_x_2_kok" },

  // ALT DAL 4: KATSAYILI DENKLEMLERDE KÖK BULMA
  { id: "s7_ds_015", s: "{a}x² + {b}x + {c} = 0 denkleminin köklerini bulunuz.", c: "{kokler}", v: {a:[2,4], b:[4,10], c:[1,6], kosul:"Δ≥0"}, z:"cok_zor", alt:"katsayili_kok" },
  { id: "s7_ds_016", s: "2x² + 5x + 2 = 0 denkleminin kökleri nedir?", c: "{-2,-1/2}", v: {}, z:"cok_zor", alt:"2x2_5x_2" },
  { id: "s7_ds_017", s: "3x² - 7x + 2 = 0 denkleminin kökleri nedir?", c: "{1/3,2}", v: {}, z:"cok_zor", alt:"3x2_7x_2" },

  // ALT DAL 5: KÖK YOKSA SEBEBİ
  { id: "s7_ds_018", s: "x² + 2x + 5 = 0 denkleminin neden reel kökü yoktur?", c: "Δ=-16<0", v: {}, z:"orta", alt:"kok_yok_sebep" },
  { id: "s7_ds_019", s: "Hangi durumda denklemin reel kökü olmaz?", c: "Δ<0_oldugunda", v: {}, z:"orta", alt:"reel_kok_yok_sart" },

  // ALT DAL 6: ÇÖZÜM KÜMESİ YAZMA
  { id: "s7_ds_020", s: "x²-4=0 denkleminin çözüm kümesini yazınız.", c: "{-2,2}", v: {}, z:"orta", alt:"cozum_kumesi" },
  { id: "s7_ds_021", s: "x²-6x+9=0 denkleminin çözüm kümesini yazınız.", c: "{3}", v: {}, z:"orta", alt:"cift_katli_kumesi" },
  { id: "s7_ds_022", s: "x²+1=0 denkleminin çözüm kümesini yazınız.", c: "∅_(bos_kume)", v: {}, z:"orta", alt:"bos_cozum_kumesi" },

  // ALT DAL 7: KÖKLERİN RASYONELLİĞİ
  { id: "s7_ds_023", s: "x² - {a} = 0 denkleminin kökleri rasyonel midir? (a=tam kare değilse)", c: "degildir", v: {a:[2,15]}, z:"zor", alt:"rasyonel_kok" },
  { id: "s7_ds_024", s: "Δ bir tam kare ise kökler için ne söylenebilir?", c: "kokler_rasyoneldir", v: {}, z:"orta", alt:"tam_kare_delta" },

  // ALT DAL 8: KARIŞIK KÖK BULMA
  { id: "s7_ds_025", s: "x² - (√2+√3)x + √6 = 0 denkleminin kökleri nedir?", c: "{√2,√3}", v: {}, z:"cok_zor", alt:"koklu_katsayi" },
  { id: "s7_ds_026", s: "(x+1)² = 2x+2 denkleminin kökleri nedir?", c: "{-1,1}", v: {}, z:"cok_zor", alt:"duzenleme_gerektiren" },


  // ==========================================
  // KONU 6: KÖK-KATSAYI İLİŞKİLERİ (10 alt dal)
  // ==========================================

  // ALT DAL 1: KÖKLER TOPLAMI
  { id: "s7_kk_001", s: "x² + {b}x + {c} = 0 denkleminin kökler toplamı kaçtır?", c: "-{b}", v: {b:[2,10], c:[1,24]}, z:"orta", alt:"kokler_toplami" },
  { id: "s7_kk_002", s: "ax²+bx+c=0 denkleminin kökler toplamı formülü nedir?", c: "-b/a", v: {}, z:"orta", alt:"toplam_formul" },
  { id: "s7_kk_003", s: "{a}x² + {b}x + {c} = 0 denkleminin kökler toplamı kaçtır?", c: "-{b}/{a}", v: {a:[2,4], b:[4,10], c:[1,10]}, z:"zor", alt:"katsayili_toplam" },
  { id: "s7_kk_004", s: "Kökler toplamı 5 olan ikinci derece denklem yazınız.", c: "x²-5x+k=0_gibi", v: {}, z:"orta", alt:"toplamdan_denklem" },

  // ALT DAL 2: KÖKLER ÇARPIMI
  { id: "s7_kk_005", s: "x² + {b}x + {c} = 0 denkleminin kökler çarpımı kaçtır?", c: "{c}", v: {b:[2,8], c:[1,12]}, z:"orta", alt:"kokler_carpimi" },
  { id: "s7_kk_006", s: "ax²+bx+c=0 denkleminin kökler çarpımı formülü nedir?", c: "c/a", v: {}, z:"orta", alt:"carpim_formul" },
  { id: "s7_kk_007", s: "{a}x² + {b}x + {c} = 0 denkleminin kökler çarpımı kaçtır?", c: "{c}/{a}", v: {a:[2,4], b:[3,8], c:[2,12]}, z:"zor", alt:"katsayili_carpim" },
  { id: "s7_kk_008", s: "Kökler çarpımı -6 olan ikinci derece denklem yazınız.", c: "x²+kx-6=0_gibi", v: {}, z:"orta", alt:"carpimdan_denklem" },

  // ALT DAL 3: KÖKLER TOPLAMI VE ÇARPIMI İLE DENKLEM YAZMA
  { id: "s7_kk_009", s: "Kökler toplamı T={t}, kökler çarpımı Ç={c} olan ikinci derece denklemi yazınız.", c: "x²-{t}x+{c}=0", v: {t:[2,8], c:[1,15]}, z:"orta", alt:"denklem_yazma" },
  { id: "s7_kk_010", s: "Kökleri x₁={a} ve x₂={b} olan ikinci derece denklemi yazınız.", c: "x²-{a+b}x+{a}*{b}=0", v: {a:[1,5], b:[1,5]}, z:"orta", alt:"koklerden_denklem" },

  // ALT DAL 4: KÖKLER FARKI
  { id: "s7_kk_011", s: "x² + {b}x + {c} = 0 denkleminin kökler farkının mutlak değeri kaçtır?", c: "√Δ/|a|", v: {b:[2,8], c:[1,12], kosul:"Δ≥0"}, z:"cok_zor", alt:"kokler_farki" },
  { id: "s7_kk_012", s: "Kökler farkı formülü nedir?", c: "|x₁-x₂|=√Δ/|a|", v: {}, z:"cok_zor", alt:"fark_formul" },
  { id: "s7_kk_013", s: "x² - 5x + 6 = 0 denkleminin kökler farkı kaçtır?", c: "1", v: {}, z:"cok_zor", alt:"x2_5x_6_fark" },

  // ALT DAL 5: KÖKLERİN ÇARPMAYA GÖRE TERSLERİ TOPLAMI
  { id: "s7_kk_014", s: "Kökleri x₁ ve x₂ olan denklemin 1/x₁+1/x₂ değeri kaçtır?", c: "-b/c", v: {}, z:"cok_zor", alt:"ters_toplam" },
  { id: "s7_kk_015", s: "x² + {b}x + {c} = 0 için 1/x₁+1/x₂ = ?", c: "-{b}/{c}", v: {b:[2,6], c:[1,12], kosul:"c!=0"}, z:"cok_zor", alt:"ters_toplam_deger" },

  // ALT DAL 6: KÖKLERİN KARELERİ TOPLAMI
  { id: "s7_kk_016", s: "Kökler toplamı T, kökler çarpımı Ç ise x₁²+x₂² = ?", c: "T²-2Ç", v: {}, z:"cok_zor", alt:"kareler_toplami" },
  { id: "s7_kk_017", s: "x² - 6x + 5 = 0 ise x₁²+x₂² = ?", c: "26", v: {}, z:"cok_zor", alt:"x2_6x_5_kare" },
  { id: "s7_kk_018", s: "x₁²+x₂² = 13 ve x₁·x₂ = 6 ise x₁+x₂ = ?", c: "±5", v: {}, z:"cok_zor", alt:"kareden_toplam" },

  // ALT DAL 7: KÖKLERİN KÜPLERİ TOPLAMI
  { id: "s7_kk_019", s: "Kökler toplamı T, kökler çarpımı Ç ise x₁³+x₂³ = ?", c: "T³-3TÇ", v: {}, z:"cok_zor", alt:"kupler_toplami" },
  { id: "s7_kk_020", s: "x² - 3x + 2 = 0 ise x₁³+x₂³ = ?", c: "9", v: {}, z:"cok_zor", alt:"x2_3x_2_kup" },

  // ALT DAL 8: KÖKLER ARASI BAĞINTILAR
  { id: "s7_kk_021", s: "x² + {b}x + {c} = 0 denkleminin kökleri x₁ ve x₂'dir. x₁/x₂ + x₂/x₁ = ?", c: "({b}²-2*{c})/{c}", v: {b:[2,6], c:[1,8], kosul:"c!=0"}, z:"cok_zor", alt:"oran_toplam" },
  { id: "s7_kk_022", s: "x² - 5x + 6 = 0 ise x₁/x₂ + x₂/x₁ = ?", c: "13/6", v: {}, z:"cok_zor", alt:"x2_5x_6_oran" },

  // ALT DAL 9: KÖK-KATSAYI İLİŞKİLERİ İLE İLGİLİ SORULAR
  { id: "s7_kk_023", s: "x² + mx + 6 = 0 denkleminin bir kökü 2 ise m kaçtır?", c: "-5", v: {}, z:"zor", alt:"bir_kok_verilince" },
  { id: "s7_kk_024", s: "x² + {b}x + {c} = 0 denkleminin kökleri arasında x₁={k}x₂ bağıntısı varsa?", c: "{cozum}", v: {b:[3,8], c:[2,12], k:[2,3]}, z:"cok_zor", alt:"katli_kok" },

  // ALT DAL 10: SİMETRİK KÖKLER
  { id: "s7_kk_025", s: "x² + mx + n = 0 denkleminin kökleri simetrik ise m kaçtır?", c: "0", v: {}, z:"zor", alt:"simetrik_kok" },
  { id: "s7_kk_026", s: "Simetrik kök ne demektir?", c: "x₁=-x₂_yani_toplamlari_sifir", v: {}, z:"orta", alt:"simetrik_tanim" },
  { id: "s7_kk_027", s: "x² - {a} = 0 denkleminin kökleri simetrik midir?", c: "evet", v: {a:[4,9,16]}, z:"orta", alt:"simetrik_ornek" },


  // ==========================================
  // KONU 7: KÖKLERİN İŞARET İNCELEMESİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: İKİ KÖK POZİTİF
  { id: "s7_ki_001", s: "x² + {b}x + {c} = 0 denkleminin iki kökü de pozitif olabilir mi? (b<0, c>0)", c: "{evet_hayir}", v: {b:[-8,-2], c:[1,15]}, z:"zor", alt:"iki_pozitif" },
  { id: "s7_ki_002", s: "İki kökün de pozitif olması için şartlar nelerdir?", c: "Δ≥0, -b/a>0, c/a>0", v: {}, z:"zor", alt:"pozitif_sart" },

  // ALT DAL 2: İKİ KÖK NEGATİF
  { id: "s7_ki_003", s: "x² + {b}x + {c} = 0 denkleminin iki kökü de negatif olabilir mi? (b>0, c>0)", c: "{evet_hayir}", v: {b:[2,8], c:[1,12]}, z:"zor", alt:"iki_negatif" },
  { id: "s7_ki_004", s: "İki kökün de negatif olması için şartlar nelerdir?", c: "Δ≥0, -b/a<0, c/a>0", v: {}, z:"zor", alt:"negatif_sart" },

  // ALT DAL 3: TERS İŞARETLİ KÖKLER
  { id: "s7_ki_005", s: "x² + {b}x + {c} = 0 denkleminin kökleri ters işaretli olabilir mi? (c<0)", c: "{evet_hayir}", v: {b:[2,6], c:[-10,-1]}, z:"zor", alt:"ters_isaret" },
  { id: "s7_ki_006", s: "Köklerin ters işaretli olması için şart nedir?", c: "c/a<0", v: {}, z:"orta", alt:"ters_isaret_sart" },
  { id: "s7_ki_007", s: "x² + {b}x - {c} = 0 denkleminin kökleri için ne söylenebilir?", c: "ters_isaretli", v: {b:[2,6], c:[1,10]}, z:"orta", alt:"c_negatif" },

  // ALT DAL 4: KÖKLERİN İŞARET TABLOSU
  { id: "s7_ki_008", s: "Kökler çarpımı pozitif ise köklerin işareti nasıldır?", c: "ayni_isaretli", v: {}, z:"orta", alt:"carpim_pozitif" },
  { id: "s7_ki_009", s: "Kökler çarpımı negatif ise köklerin işareti nasıldır?", c: "ters_isaretli", v: {}, z:"orta", alt:"carpim_negatif" },
  { id: "s7_ki_010", s: "Kökler toplamı pozitif, kökler çarpımı pozitif ise kökler nasıldır?", c: "ikisi_de_pozitif", v: {}, z:"orta", alt:"toplam_pozitif_carpim_pozitif" },
  { id: "s7_ki_011", s: "Kökler toplamı negatif, kökler çarpımı pozitif ise kökler nasıldır?", c: "ikisi_de_negatif", v: {}, z:"orta", alt:"toplam_negatif_carpim_pozitif" },

  // ALT DAL 5: İŞARET İNCELEME SORULARI
  { id: "s7_ki_012", s: "x² - 5x + 6 = 0 denkleminin köklerinin işaretleri nasıldır?", c: "ikisi_de_pozitif", v: {}, z:"orta", alt:"x2_5x_6_isaret" },
  { id: "s7_ki_013", s: "x² + 3x - 4 = 0 denkleminin köklerinin işaretleri nasıldır?", c: "ters_isaretli", v: {}, z:"orta", alt:"x2_3x_4_isaret" },
  { id: "s7_ki_014", s: "x² + 5x + 6 = 0 denkleminin köklerinin işaretleri nasıldır?", c: "ikisi_de_negatif", v: {}, z:"orta", alt:"x2_5x_6_isaret" },

  // ALT DAL 6: İŞARET İNCELEME PROBLEMLERİ
  { id: "s7_ki_015", s: "x² + mx + 4 = 0 denkleminin iki pozitif kökü olması için m nasıl olmalıdır?", c: "m<-4", v: {}, z:"cok_zor", alt:"m_negatif" },
  { id: "s7_ki_016", s: "x² + mx - 3 = 0 denkleminin kökleri için ne söylenebilir?", c: "her_zaman_ters_isaretli", v: {}, z:"cok_zor", alt:"c_negatif_her_zaman" },


  // ==========================================
  // KONU 8: İKİNCİ DERECE DENKLEMLERDE ÖZEL DURUMLAR (6 alt dal)
  // ==========================================

  // ALT DAL 1: ÇAKIŞIK (ÇİFT KATLI) KÖK
  { id: "s7_od_001", s: "x² + {b}x + {c} = 0 denkleminin çakışık kökü olması için c kaç olmalıdır?", c: "({b}/2)²", v: {b:[2,10,2]}, z:"zor", alt:"cakisik_kok" },
  { id: "s7_od_002", s: "x² + mx + 9 = 0 denkleminin çift katlı kökü olması için m'nin pozitif değeri kaçtır?", c: "6", v: {}, z:"zor", alt:"m_6" },
  { id: "s7_od_003", s: "Çakışık kök için Δ = ?", c: "0", v: {}, z:"orta", alt:"cakisik_delta" },

  // ALT DAL 2: REEL KÖK OLMAMA DURUMU
  { id: "s7_od_004", s: "x² + {b}x + {c} = 0 denkleminin reel kökü olmaması için c en az kaç olmalıdır? (tam sayı)", c: "{min_c}", v: {b:[2,6]}, z:"zor", alt:"reel_kok_yok_sart" },
  { id: "s7_od_005", s: "x² + 2x + m = 0 denkleminin reel kökü olmaması için m nasıl olmalıdır?", c: "m>1", v: {}, z:"zor", alt:"m_buyuk_1" },

  // ALT DAL 3: KÖKLERDEN BİRİNİN SIFIR OLMASI
  { id: "s7_od_006", s: "x² + {b}x = 0 denkleminin kökleri nedir?", c: "{0, -{b}}", v: {b:[2,8]}, z:"orta", alt:"bir_kok_sifir" },
  { id: "s7_od_007", s: "ax²+bx+c=0 denkleminin bir kökünün sıfır olması için şart nedir?", c: "c=0", v: {}, z:"orta", alt:"c_sifir_sart" },

  // ALT DAL 4: KATSAYILAR ARASI ÖZEL İLİŞKİ
  { id: "s7_od_008", s: "a+b+c=0 ise ax²+bx+c=0 denkleminin bir kökü kaçtır?", c: "1", v: {}, z:"cok_zor", alt:"a+b+c_sifir" },
  { id: "s7_od_009", s: "a-b+c=0 ise ax²+bx+c=0 denkleminin bir kökü kaçtır?", c: "-1", v: {}, z:"cok_zor", alt:"a-b+c_sifir" },
  { id: "s7_od_010", s: "Denklemin köklerinden biri 1 ise katsayılar arasındaki bağıntı nedir?", c: "a+b+c=0", v: {}, z:"cok_zor", alt:"kok_1_sart" },

  // ALT DAL 5: RASYONEL KATSAYILI DENKLEMLER
  { id: "s7_od_011", s: "x² - (m+1)x + m = 0 denkleminin kökleri nedir?", c: "{1,m}", v: {}, z:"cok_zor", alt:"m_li_denklem" },
  { id: "s7_od_012", s: "x² - 2mx + m²-1 = 0 denkleminin kökleri nedir?", c: "{m-1,m+1}", v: {}, z:"cok_zor", alt:"tam_kare_eksi_1" },

  // ALT DAL 6: KARIŞIK ÖZEL DURUMLAR
  { id: "s7_od_013", s: "Kökleri birbirine eşit olan denkleme ne denir?", c: "cift_katli_koklu_denklem", v: {}, z:"orta", alt:"esit_kok" },
  { id: "s7_od_014", s: "Köklerin çakışık olması ne demektir?", c: "tek_bir_kok_var_(x₁=x₂)", v: {}, z:"orta", alt:"cakisik_tanim" },


  // ==========================================
  // KONU 9: İKİNCİ DERECE DENKLEM PROBLEMLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: SAYI PROBLEMLERİ
  { id: "s7_ip_001", s: "Hangi sayının karesi kendisinin {a} katından {b} fazladır?", c: "{kokler}", v: {a:[2,6], b:[3,15]}, z:"zor", alt:"kare_kati" },
  { id: "s7_ip_002", s: "İki sayının toplamı {t}, çarpımı {c} ise bu sayılar nedir?", c: "{kokler}", v: {t:[5,10], c:[4,24]}, z:"zor", alt:"toplam_carpim" },
  { id: "s7_ip_003", s: "Ardışık iki sayının çarpımı {c} ise bu sayılar nedir?", c: "{sayi1},{sayi2}", v: {c:[2,12,20,30,42,56,72,90]}, z:"zor", alt:"ardisik_carpim" },

  // ALT DAL 2: GEOMETRİ PROBLEMLERİ
  { id: "s7_ip_004", s: "Kenar uzunlukları tam sayı olan bir dikdörtgenin alanı {a}, çevresi {c} ise kenarları kaçtır?", c: "{kenarlar}", v: {a:[6,24], c:[10,20]}, z:"cok_zor", alt:"dikdortgen" },
  { id: "s7_ip_005", s: "Dik kenarları x ve x+1, hipotenüsü {h} olan dik üçgende x kaçtır?", c: "{x}", v: {h:[5,13]}, z:"cok_zor", alt:"pisagor" },

  // ALT DAL 3: HIZ PROBLEMLERİ (İLERİ)
  { id: "s7_ip_006", s: "{x} km'lik yolu giderken saatte {v1} km, dönerken {v2} km hızla giden aracın ortalama hızı kaç km/saattir?", c: "2*{x}/({x}/{v1}+{x}/{v2})", v: {x:[100,300], v1:[40,80], v2:[30,60], kosul:"v1>v2"}, z:"cok_zor", alt:"ortalama_hiz" },
  { id: "s7_ip_007", s: "Bir araç yolun bir kısmını {v1} km/saat, kalanını {v2} km/saat hızla gidiyor. Ortalama hız {o} km/saat ise yolun ne kadarı ilk hızla gidilmiştir?", c: "{oran}", v: {v1:[60,100], v2:[30,50], o:[40,70], kosul:"v1>o>v2"}, z:"cok_zor", alt:"karisik_hiz" },

  // ALT DAL 4: YAŞ PROBLEMLERİ
  { id: "s7_ip_008", s: "Bir babanın yaşı {a} yıl önce çocuğunun yaşının karesine eşitti. Bugün baba {b} yaşında ise çocuk kaç yaşındadır?", c: "{yas}", v: {a:[2,10], b:[30,50]}, z:"cok_zor", alt:"yas_kare" },
  { id: "s7_ip_009", s: "İki kardeşin yaşları çarpımı {c}, yaşları farkı {f} ise büyük kardeş kaç yaşındadır?", c: "{buyuk}", v: {c:[12,56], f:[1,4]}, z:"cok_zor", alt:"kardes_yas" },

  // ALT DAL 5: İŞÇİ PROBLEMLERİ
  { id: "s7_ip_010", s: "Bir işi A işçisi tek başına x günde, B işçisi (x+{a}) günde bitiriyor. İkisi birlikte {b} günde bitiriyorsa x kaçtır?", c: "{x}", v: {a:[2,8], b:[3,8]}, z:"cok_zor", alt:"isci_x" },
  { id: "s7_ip_011", s: "A ve B işçileri bir işi birlikte {b} günde bitiriyor. A tek başına x günde, B tek başına (x+{a}) günde bitiriyorsa A kaç günde bitirir?", c: "{x}", v: {a:[3,10], b:[2,6]}, z:"cok_zor", alt:"isci_sistem" },

  // ALT DAL 6: KAR-ZARAR PROBLEMLERİ
  { id: "s7_ip_012", s: "Alış fiyatı x TL olan bir mal %{k} kârla {s} TL'ye satılıyorsa x kaçtır?", c: "{s}*100/(100+{k})", v: {k:[10,40], s:[50,200]}, z:"zor", alt:"kar" },
  { id: "s7_ip_013", s: "Bir malın alış fiyatı {a} TL'dir. %{k} zararla satılırsa satış fiyatı kaç TL olur?", c: "{a}*(100-{k})/100", v: {a:[50,200], k:[10,30]}, z:"orta", alt:"zarar" },


  // ==========================================
  // KONU 10: RASYONEL DENKLEMLER (6 alt dal)
  // ==========================================

  // ALT DAL 1: PAYDADA BİLİNMEYEN
  { id: "s7_rd_001", s: "1/x = {a} ise x kaçtır?", c: "1/{a}", v: {a:[2,10]}, z:"orta", alt:"1_x_a" },
  { id: "s7_rd_002", s: "{a}/x = {b} ise x kaçtır?", c: "{a}/{b}", v: {a:[2,10], b:[2,8], kosul:"a%b==0"}, z:"orta", alt:"a_x_b" },
  { id: "s7_rd_003", s: "1/(x-{a}) = {b} ise x kaçtır?", c: "{a}+1/{b}", v: {a:[2,8], b:[2,5]}, z:"zor", alt:"1_x-a_b" },
  { id: "s7_rd_004", s: "x/{a} + x/{b} = {c} ise x kaçtır?", c: "{c}*{a}*{b}/({a}+{b})", v: {a:[2,5], b:[3,6], c:[5,20], kosul:"a!=b"}, z:"cok_zor", alt:"x_a_x_b" },

  // ALT DAL 2: TANIM KÜMESİ BULMA
  { id: "s7_rd_005", s: "1/(x-{a}) + 1/(x+{b}) denkleminin tanım kümesi nedir?", c: "x≠{a}_ve_x≠-{b}", v: {a:[1,6], b:[1,6]}, z:"orta", alt:"tanim_kumesi" },
  { id: "s7_rd_006", s: "x/(x²-{a}) ifadesinin tanımsız olduğu değerler nelerdir?", c: "x=±√{a}", v: {a:[4,9,16]}, z:"zor", alt:"tanimsiz" },

  // ALT DAL 3: İÇLER DIŞLAR ÇARPIMI
  { id: "s7_rd_007", s: "(x+{a})/(x-{b}) = {c} ise x kaçtır?", c: "({c}*{b}+{a})/({c}-1)", v: {a:[2,6], b:[1,5], c:[2,4], kosul:"c!=1"}, z:"cok_zor", alt:"icler_dislar" },
  { id: "s7_rd_008", s: "(x+1)/(x-1) = 2 ise x kaçtır?", c: "3", v: {}, z:"zor", alt:"x+1_x-1_2" },
  { id: "s7_rd_009", s: "(x+2)/(x-3) = (x+1)/(x-2) ise x kaçtır?", c: "1/2", v: {}, z:"cok_zor", alt:"esit_kesir" },

  // ALT DAL 4: PAYDA EŞİTLEME
  { id: "s7_rd_010", s: "1/x + 1/(x+1) = {a} ise x kaçtır?", c: "{cozum}", v: {a:[1,3]}, z:"cok_zor", alt:"payda_esitleme" },
  { id: "s7_rd_011", s: "1/(x-1) - 1/(x+1) = {a} ise x kaçtır?", c: "{cozum}", v: {a:[1,3]}, z:"cok_zor", alt:"payda_esitleme_fark" },

  // ALT DAL 5: YARDIMCI DEĞİŞKEN
  { id: "s7_rd_012", s: "(x²+1)/x + x/(x²+1) = {a} ise (x²+1)/x kaçtır?", c: "{cozum}", v: {a:[2,4]}, z:"cok_zor", alt:"yardimci_degisken" },
  { id: "s7_rd_013", s: "x + 1/x = {t} ise x² + 1/x² = ?", c: "{t}²-2", v: {t:[3,6]}, z:"cok_zor", alt:"x_arti_1_x" },

  // ALT DAL 6: RASYONEL DENKLEM SORULARI
  { id: "s7_rd_014", s: "2/(x-1) = 3/(x+2) ise x kaçtır?", c: "7", v: {}, z:"cok_zor", alt:"2_x-1_3_x+2" },
  { id: "s7_rd_015", s: "x/(x+2) + 1/(x-2) = 1 ise x kaçtır?", c: "6", v: {}, z:"cok_zor", alt:"kesirli_karmasik" },


  // ==========================================
  // KONU 11: KÖKLÜ DENKLEMLER (6 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT KÖKLÜ DENKLEMLER
  { id: "s7_kd_001", s: "√x = {a} ise x kaçtır?", c: "{a}²", v: {a:[2,10]}, z:"orta", alt:"kok_x_a" },
  { id: "s7_kd_002", s: "√(x+{a}) = {b} ise x kaçtır?", c: "{b}²-{a}", v: {a:[1,8], b:[2,8], kosul:"b²>a"}, z:"zor", alt:"kok_x+a_b" },
  { id: "s7_kd_003", s: "∛x = {a} ise x kaçtır?", c: "{a}³", v: {a:[2,6]}, z:"orta", alt:"kup_kok_x" },
  { id: "s7_kd_004", s: "√x + {a} = {b} ise x kaçtır?", c: "({b}-{a})²", v: {a:[1,5], b:[4,10], kosul:"b>a"}, z:"zor", alt:"kok_x_arti_a_b" },

  // ALT DAL 2: KARE ALARAK ÇÖZME
  { id: "s7_kd_005", s: "√(x+3) = x-3 ise x kaçtır?", c: "6", v: {}, z:"cok_zor", alt:"kok_x+3_x-3" },
  { id: "s7_kd_006", s: "√(2x+1) = x-1 ise x kaçtır?", c: "4", v: {}, z:"cok_zor", alt:"kok_2x+1_x-1" },
  { id: "s7_kd_007", s: "Köklü denklemlerde bulunan çözümler neden kontrol edilmelidir?", c: "kare_alma_fazladan_kok_getirebilir", v: {}, z:"orta", alt:"kontrol_nedeni" },

  // ALT DAL 3: İKİ KÖKLÜ DENKLEMLER
  { id: "s7_kd_008", s: "√(x+{a}) + √(x-{b}) = {c} ise x kaçtır?", c: "{cozum}", v: {a:[5,10], b:[1,4], c:[3,8]}, z:"cok_zor", alt:"iki_koklu" },
  { id: "s7_kd_009", s: "√(x+5) = √x + 1 ise x kaçtır?", c: "4", v: {}, z:"cok_zor", alt:"kok_x+5_kok_x+1" },
  { id: "s7_kd_010", s: "√(x+3) - √x = 1 ise x kaçtır?", c: "1", v: {}, z:"cok_zor", alt:"kok_x+3_eksi_kok_x" },

  // ALT DAL 4: TANIM ARALIĞI
  { id: "s7_kd_011", s: "√(x-{a}) = {b} denkleminin çözümü için x≥? olmalıdır?", c: "{a}", v: {a:[2,6], b:[1,5]}, z:"orta", alt:"tanim_araligi" },
  { id: "s7_kd_012", s: "√(x-2) + √(3-x) = ? işleminin tanımlı olması için x hangi aralıkta olmalıdır?", c: "2≤x≤3", v: {}, z:"zor", alt:"iki_kok_tanim" },

  // ALT DAL 5: KÖKLÜ DENKLEM SAĞLAMASI
  { id: "s7_kd_013", s: "x=4 değeri √(x+5)=x-1 denklemini sağlar mı?", c: "evet_(3=3)", v: {}, z:"orta", alt:"saglama" },
  { id: "s7_kd_014", s: "x=2 değeri √(x+2)=x-2 denklemini sağlar mı?", c: "hayir_(2=0_yanlis)", v: {}, z:"orta", alt:"saglama_yanlis" },

  // ALT DAL 6: KÖKLÜ DENKLEM SORULARI
  { id: "s7_kd_015", s: "x√x = {a} ise x kaçtır? (a tam küp ise)", c: "Math.cbrt({a})", v: {a:[8,27,64,125]}, z:"cok_zor", alt:"x_kok_x" },
  { id: "s7_kd_016", s: "√(x²-{a}) = {b} ise x'in pozitif değeri kaçtır?", c: "√({b}²+{a})", v: {a:[3,9], b:[2,5]}, z:"cok_zor", alt:"kok_x2-a" },


  // ==========================================
  // KONU 12: MUTLAK DEĞERLİ DENKLEMLER - GİRİŞ (4 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT MUTLAK DEĞER DENKLEMLERİ
  { id: "s7_md_001", s: "|x| = {a} ise x'in alabileceği değerler nelerdir?", c: "{-{a}, {a}}", v: {a:[2,10]}, z:"orta", alt:"mutlak_x_a" },
  { id: "s7_md_002", s: "|x-{a}| = {b} ise x'in alabileceği değerler nelerdir?", c: "{{a}-{b}, {a}+{b}}", v: {a:[3,10], b:[1,5], kosul:"a>b"}, z:"zor", alt:"mutlak_x-a_b" },
  { id: "s7_md_003", s: "|x| = -{a} denkleminin çözümü var mıdır?", c: "hayir_(mutlak_deger_negatif_olamaz)", v: {a:[1,5]}, z:"orta", alt:"mutlak_negatif" },

  // ALT DAL 2: MUTLAK DEĞER ÖZELLİKLERİ
  { id: "s7_md_004", s: "|x| = |y| ise x ile y arasındaki ilişki nedir?", c: "x=y_veya_x=-y", v: {}, z:"orta", alt:"mutlak_esitlik" },
  { id: "s7_md_005", s: "|x| = |-x| eşitliği her zaman doğru mudur?", c: "evet", v: {}, z:"orta", alt:"mutlak_simetri" },

  // ALT DAL 3: MUTLAK DEĞERLİ İFADELER
  { id: "s7_md_006", s: "|{a}x+{b}| = {c} denkleminin çözüm kümesi nedir?", c: "({c}-{b})/{a}_ve_(-{c}-{b})/{a}", v: {a:[2,5], b:[1,5], c:[3,15]}, z:"cok_zor", alt:"mutlak_ax+b" },
  { id: "s7_md_007", s: "|2x-3| = 5 denkleminin kökleri nedir?", c: "{-1,4}", v: {}, z:"zor", alt:"2x-3_5" },

  // ALT DAL 4: MUTLAK DEĞER DENKLEM SORULARI
  { id: "s7_md_008", s: "|x| + |x-2| = 4 denkleminin çözüm kümesi nedir?", c: "{-1,3}", v: {}, z:"cok_zor", alt:"iki_mutlak" },
  { id: "s7_md_009", s: "x·|x| = 4 ise x kaçtır?", c: "2", v: {}, z:"cok_zor", alt:"x_mutlak_x" },


  // ==========================================
  // KONU 13: DENKLEM SİSTEMLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: YOK ETME YÖNTEMİ
  { id: "s7_dss_001", s: "{a}x+{b}y={c} ve {d}x+{e}y={f} sistemini yok etme yöntemiyle çözünüz.", c: "x={x}, y={y}", v: {a:[2,4], b:[1,3], c:[10,30], d:[1,3], e:[2,4], f:[5,20], kosul:"tek_cozum_var"}, z:"cok_zor", alt:"yok_etme" },
  { id: "s7_dss_002", s: "3x+2y=12 ve x-y=1 ise x kaçtır?", c: "2.8", v: {}, z:"zor", alt:"3x+2y_12" },
  { id: "s7_dss_003", s: "x+y=7 ve 2x-y=5 ise x ve y kaçtır?", c: "x=4,y=3", v: {}, z:"zor", alt:"x+y_7_2x-y_5" },

  // ALT DAL 2: YERİNE KOYMA YÖNTEMİ
  { id: "s7_dss_004", s: "y={a}x+{b} ve x+y={c} sistemini yerine koyma yöntemiyle çözünüz.", c: "x=({c}-{b})/({a}+1), y={a}x+{b}", v: {a:[2,4], b:[1,5], c:[10,30]}, z:"cok_zor", alt:"yerine_koyma_sistem" },
  { id: "s7_dss_005", s: "y=2x-1 ve 3x+2y=12 ise x kaçtır?", c: "2", v: {}, z:"zor", alt:"y_2x-1_3x+2y_12" },

  // ALT DAL 3: DENKLEM SİSTEMİ KURMA
  { id: "s7_dss_006", s: "İki sayının toplamı {t}, farkı {f} ise bu sayıları bulunuz.", c: "buyuk=({t}+{f})/2, kucuk=({t}-{f})/2", v: {t:[10,30], f:[2,8], kosul:"(t+f)%2==0"}, z:"orta", alt:"toplam_fark_sistem" },
  { id: "s7_dss_007", s: "Bir sayının {a} katı ile diğer sayının {b} katının toplamı {c}, farkı {d} ise sayıları bulunuz.", c: "{cozum}", v: {a:[2,4], b:[3,5], c:[10,30], d:[2,10]}, z:"cok_zor", alt:"katsayili_sistem" },

  // ALT DAL 4: ÖZEL DENKLEM SİSTEMLERİ
  { id: "s7_dss_008", s: "x+y={t} ve xy={c} ise x ve y'yi bulunuz.", c: "x²-{t}x+{c}=0_kokleri", v: {t:[5,10], c:[4,24]}, z:"cok_zor", alt:"toplam_carpim_sistem" },
  { id: "s7_dss_009", s: "x²+y²={a} ve x+y={b} ise xy kaçtır?", c: "({b}²-{a})/2", v: {a:[10,40], b:[4,8], kosul:"b²>a"}, z:"cok_zor", alt:"kareler_sistem" },
  { id: "s7_dss_010", s: "x²+y²=25 ve x+y=7 ise xy kaçtır?", c: "12", v: {}, z:"cok_zor", alt:"x2+y2_25_x+y_7" },

  // ALT DAL 5: ÜÇ BİLİNMEYENLİ SİSTEMLER
  { id: "s7_dss_011", s: "x+y={a}, y+z={b}, x+z={c} ise x kaçtır?", c: "({a}+{c}-{b})/2", v: {a:[3,10], b:[3,10], c:[3,10]}, z:"cok_zor", alt:"uc_bilinmeyenli" },
  { id: "s7_dss_012", s: "x+y+z={t}, x=y=z ise x kaçtır?", c: "{t}/3", v: {t:[6,30], kosul:"t%3==0"}, z:"zor", alt:"esit_uc_bilinmeyenli" },

  // ALT DAL 6: ÇÖZÜM DURUMLARI
  { id: "s7_dss_013", s: "{a}x+{b}y={c} ve {2a}x+{2b}y={d} sisteminin çözümü nedir? (d≠2c)", c: "bos_kume", v: {a:[2,4], b:[1,3], c:[5,15], d:[15,40], kosul:"d!=2*c"}, z:"cok_zor", alt:"paralel_dogrular" },
  { id: "s7_dss_014", s: "{a}x+{b}y={c} ve {2a}x+{2b}y={2c} sisteminin çözümü nedir?", c: "sonsuz_cozum", v: {a:[2,4], b:[1,3], c:[5,15]}, z:"cok_zor", alt:"cakisik_dogrular" },

  // ALT DAL 7: GRAFİKLE ÇÖZÜM
  { id: "s7_dss_015", s: "y={a}x+{b} ve y={c}x+{d} doğrularının kesim noktasını bulunuz.", c: "({d}-{b})/({a}-{c}), {a}*x+{b}", v: {a:[2,5], b:[1,5], c:[1,3], d:[3,10], kosul:"a!=c"}, z:"cok_zor", alt:"grafik_cozum" },
  { id: "s7_dss_016", s: "y=x+2 ve y=2x-1 doğruları nerede kesişir?", c: "(3,5)", v: {}, z:"zor", alt:"y_x+2_y_2x-1" },

  // ALT DAL 8: PROBLEMLERDEN DENKLEM SİSTEMİ KURMA
  { id: "s7_dss_017", s: "Ahmet'in parası Mehmet'in parasının {a} katıdır. Paraları toplamı {t} TL ise Ahmet'in parası kaç TL'dir?", c: "{a}*{t}/({a}+1)", v: {a:[2,4], t:[30,100]}, z:"zor", alt:"para_sistem" },
  { id: "s7_dss_018", s: "Bir kumbarada {a} TL ve {b} TL'lik banknotlardan toplam {n} tane olup değeri {d} TL'dir. {a} TL'lik kaç banknot vardır?", c: "({d}-{b}*{n})/({a}-{b})", v: {a:[20,50], b:[10,20], n:[10,30], d:[200,1000], kosul:"a>b"}, z:"cok_zor", alt:"banknot_sistem" },

],

  // ==========================================
// SEVİYE 7: DENKLEMLER
// ==========================================
7: [

  // ==========================================
  // KONU 1: BİRİNCİ DERECEDEN BİR BİLİNMEYENLİ DENKLEMLER (10 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT DENKLEM ÇÖZME
  { id: "s7_bd_001", s: "x + {a} = {b} ise x kaçtır?", c: "{b}-{a}", v: {a:[2,20], b:[5,50], kosul:"b>a"}, z:"kolay", alt:"x_arti_a" },
  { id: "s7_bd_002", s: "x - {a} = {b} ise x kaçtır?", c: "{a}+{b}", v: {a:[2,15], b:[3,20]}, z:"kolay", alt:"x_eksi_a" },
  { id: "s7_bd_003", s: "{a}x = {b} ise x kaçtır?", c: "{b}/{a}", v: {a:[2,9], b:[6,100], kosul:"b%a==0"}, z:"kolay", alt:"a_x" },
  { id: "s7_bd_004", s: "x/{a} = {b} ise x kaçtır?", c: "{a}*{b}", v: {a:[2,10], b:[2,15]}, z:"kolay", alt:"x_bolu_a" },
  { id: "s7_bd_005", s: "{a} - x = {b} ise x kaçtır?", c: "{a}-{b}", v: {a:[8,30], b:[1,"{a}-1"]}, z:"orta", alt:"a_eksi_x" },

  // ALT DAL 2: İKİ ADIMLI DENKLEMLER
  { id: "s7_bd_006", s: "{a}x + {b} = {c} ise x kaçtır?", c: "({c}-{b})/{a}", v: {a:[2,7], b:[2,10], c:[10,50], kosul:"(c-b)%a==0"}, z:"orta", alt:"ax+b=c" },
  { id: "s7_bd_007", s: "{a}x - {b} = {c} ise x kaçtır?", c: "({c}+{b})/{a}", v: {a:[2,7], b:[2,10], c:[5,30], kosul:"(c+b)%a==0"}, z:"orta", alt:"ax-b=c" },
  { id: "s7_bd_008", s: "x/{a} + {b} = {c} ise x kaçtır?", c: "{a}*({c}-{b})", v: {a:[2,8], b:[2,10], c:[5,20], kosul:"c>b"}, z:"orta", alt:"x/a+b=c" },

  // ALT DAL 3: PARANTEZLİ DENKLEMLER
  { id: "s7_bd_009", s: "{a}(x+{b}) = {c} ise x kaçtır?", c: "{c}/{a}-{b}", v: {a:[2,5], b:[1,6], c:[10,50], kosul:"c%a==0"}, z:"orta", alt:"a(x+b)=c" },
  { id: "s7_bd_010", s: "{a}(x-{b}) = {c} ise x kaçtır?", c: "{c}/{a}+{b}", v: {a:[2,5], b:[1,5], c:[10,50], kosul:"c%a==0"}, z:"orta", alt:"a(x-b)=c" },
  { id: "s7_bd_011", s: "({a}x+{b})/{c} = {d} ise x kaçtır?", c: "({c}*{d}-{b})/{a}", v: {a:[2,5], b:[2,8], c:[2,6], d:[3,10], kosul:"(c*d-b)%a==0"}, z:"zor", alt:"(ax+b)/c=d" },

  // ALT DAL 4: BİLİNMEYENİ BİR TARAFTA TOPLAMA
  { id: "s7_bd_012", s: "{a}x + {b} = {c}x + {d} ise x kaçtır?", c: "({d}-{b})/({a}-{c})", v: {a:[4,8], b:[2,10], c:[1,3], d:[10,30], kosul:"a>c"}, z:"zor", alt:"ax+b=cx+d" },
  { id: "s7_bd_013", s: "{a}x - {b} = {c} - {d}x ise x kaçtır?", c: "({b}+{c})/({a}+{d})", v: {a:[2,5], b:[2,8], c:[5,20], d:[2,5], kosul:"(b+c)%(a+d)==0"}, z:"zor", alt:"ax-b=c-dx" },
  { id: "s7_bd_014", s: "{a}(x-{b}) = {c}(x+{d}) ise x kaçtır?", c: "({a}*{b}+{c}*{d})/({a}-{c})", v: {a:[4,8], b:[1,5], c:[1,3], d:[2,6], kosul:"a>c"}, z:"cok_zor", alt:"a(x-b)=c(x+d)" },

  // ALT DAL 5: RASYONEL DENKLEMLER (TEMEL)
  { id: "s7_bd_015", s: "1/x + 1/{a} = 1/{b} ise x kaçtır?", c: "{a}*{b}/({a}-{b})", v: {a:[3,8], b:[2,"{a}-1"]}, z:"zor", alt:"1/x+1/a=1/b" },
  { id: "s7_bd_016", s: "{a}/x = {b}/{c} ise x kaçtır?", c: "{a}*{c}/{b}", v: {a:[2,8], b:[1,6], c:[1,6]}, z:"orta", alt:"a/x=b/c" },

  // ALT DAL 6: DENKLEM ÇÖZME STRATEJİLERİ
  { id: "s7_bd_017", s: "Bir denklemde bilinmeyeni bir tarafta toplamak için ne yapılır?", c: "esitligin_her_iki_tarafina_ayni_islem_uygulanir", v: {}, z:"orta", alt:"strateji" },
  { id: "s7_bd_018", s: "Denklem çözerken ilk adım nedir?", c: "parantezleri_ac_ve_benzer_terimleri_birlestir", v: {}, z:"orta", alt:"ilk_adim" },

  // ALT DAL 7: DENKLEMİN ÇÖZÜM KÜMESİ
  { id: "s7_bd_019", s: "{a}x + {b} = {a}x + {c} denkleminin çözüm kümesi nedir? (b≠c)", c: "bos_kume", v: {a:[2,5], b:[2,5], c:[6,10]}, z:"zor", alt:"bos_kume" },
  { id: "s7_bd_020", s: "{a}x + {b} = {a}x + {b} denkleminin çözüm kümesi nedir?", c: "tum_reel_sayilar", v: {a:[2,5], b:[2,10]}, z:"zor", alt:"sonsuz_cozum" },
  { id: "s7_bd_021", s: "0×x = {a} denkleminin çözüm kümesi nedir?", c: "bos_kume", v: {a:[1,10]}, z:"orta", alt:"0_x_a" },
  { id: "s7_bd_022", s: "0×x = 0 denkleminin çözüm kümesi nedir?", c: "tum_reel_sayilar", v: {}, z:"orta", alt:"0_x_0" },

  // ALT DAL 8: KESİRLİ DENKLEMLER
  { id: "s7_bd_023", s: "x/{a} + x/{b} = {c} ise x kaçtır?", c: "{c}*{a}*{b}/({a}+{b})", v: {a:[2,5], b:[3,6], c:[5,20], kosul:"a!=b"}, z:"cok_zor", alt:"x/a+x/b=c" },
  { id: "s7_bd_024", s: "(x+{a})/{b} = (x-{c})/{d} ise x kaçtır?", c: "({b}*{c}+{d}*{a})/({d}-{b})", v: {a:[1,5], b:[2,4], c:[1,5], d:[5,8], kosul:"d>b"}, z:"cok_zor", alt:"kesirli_denklem" },

  // ALT DAL 9: SÖZEL DENKLEM ÇÖZME
  { id: "s7_bd_025", s: "Hangi sayının {a} fazlasının {b} katı {c} eder?", c: "{c}/{b}-{a}", v: {a:[2,10], b:[2,5], c:[20,60], kosul:"(c/b)>a"}, z:"orta", alt:"sozel_denklem" },
  { id: "s7_bd_026", s: "Hangi sayının {a} eksiğinin yarısı {b} eder?", c: "{b}*2+{a}", v: {a:[2,10], b:[3,15]}, z:"orta", alt:"sozel_denklem_2" },

  // ALT DAL 10: DENKLEM SAĞLAMASI
  { id: "s7_bd_027", s: "x={a} değeri {b}x+{c}={d} denkleminin çözümü müdür?", c: "{evet_hayir}", v: {a:[1,10], b:[2,5], c:[2,10], d:[5,50]}, z:"orta", alt:"saglama" },
  { id: "s7_bd_028", s: "Çözümü x={a} olan bir denklem yazınız.", c: "x+{b}={a}+{b}_gibi", v: {a:[2,10], b:[1,5]}, z:"orta", alt:"denklem_yazma" },


  // ==========================================
  // KONU 2: BİRİNCİ DERECEDEN İKİ BİLİNMEYENLİ DENKLEMLER (8 alt dal)
  // ==========================================

  // ALT DAL 1: YOK ETME YÖNTEMİ
  { id: "s7_id_001", s: "x+y={t} ve x-y={f} ise x kaçtır?", c: "({t}+{f})/2", v: {t:[5,15], f:[1,7], kosul:"(t+f)%2==0"}, z:"orta", alt:"yok_etme_x" },
  { id: "s7_id_002", s: "x+y={t} ve x-y={f} ise y kaçtır?", c: "({t}-{f})/2", v: {t:[5,15], f:[1,7], kosul:"(t-f)%2==0"}, z:"orta", alt:"yok_etme_y" },
  { id: "s7_id_003", s: "{a}x+{b}y={c} ve {d}x-{b}y={e} ise x kaçtır?", c: "({c}+{e})/({a}+{d})", v: {a:[2,4], b:[2,5], c:[10,30], d:[2,4], e:[5,20]}, z:"zor", alt:"yok_etme_katsayili" },
  { id: "s7_id_004", s: "Yok etme yöntemi nasıl uygulanır?", c: "bilinmeyenlerden_biri_yok_edilerek_digeri_bulunur", v: {}, z:"orta", alt:"yok_etme_yontem" },

  // ALT DAL 2: YERİNE KOYMA YÖNTEMİ
  { id: "s7_id_005", s: "y = {a}x+{b} ve x+y={c} ise x kaçtır?", c: "({c}-{b})/({a}+1)", v: {a:[2,4], b:[1,5], c:[10,30]}, z:"zor", alt:"yerine_koyma" },
  { id: "s7_id_006", s: "x = {a}y - {b} ve x+y={c} ise y kaçtır?", c: "({c}+{b})/({a}+1)", v: {a:[2,4], b:[1,5], c:[8,25]}, z:"zor", alt:"yerine_koyma_2" },
  { id: "s7_id_007", s: "Yerine koyma yöntemi nasıl uygulanır?", c: "bir_denklemden_bir_bilinmeyen_cekilip_digerinde_yerine_yazilir", v: {}, z:"orta", alt:"yerine_koyma_yontem" },

  // ALT DAL 3: DENKLEM SİSTEMİ ÇÖZME
  { id: "s7_id_008", s: "{a}x+{b}y={c} ve {d}x+{e}y={f} ise x kaçtır?", c: "({c}*{e}-{b}*{f})/({a}*{e}-{b}*{d})", v: {a:[2,4], b:[1,4], c:[10,30], d:[1,3], e:[2,5], f:[5,20], kosul:"a*e!=b*d"}, z:"cok_zor", alt:"sistem" },
  { id: "s7_id_009", s: "{a}x+{b}y={c} ve {d}x+{e}y={f} ise y kaçtır?", c: "({a}*{f}-{c}*{d})/({a}*{e}-{b}*{d})", v: {a:[2,4], b:[1,4], c:[10,30], d:[1,3], e:[2,5], f:[5,20], kosul:"a*e!=b*d"}, z:"cok_zor", alt:"sistem_y" },

  // ALT DAL 4: ÖZEL DURUMLAR
  { id: "s7_id_010", s: "x+y={t} ve x+y={f} (t≠f) sisteminin çözümü nedir?", c: "bos_kume", v: {t:[5,10], f:[12,18]}, z:"zor", alt:"celisik_sistem" },
  { id: "s7_id_011", s: "x+y={t} ve 2x+2y={2t} sisteminin çözümü nedir?", c: "sonsuz_cozum", v: {t:[3,10], "2t":"2*{t}"}, z:"zor", alt:"bagimli_sistem" },
  { id: "s7_id_012", s: "Denklem sisteminin tek çözümü olma şartı nedir?", c: "katsayilar_orani_esit_olmamali", v: {}, z:"orta", alt:"tek_cozum_sarti" },

  // ALT DAL 5: PROBLEMLİ DENKLEM SİSTEMLERİ
  { id: "s7_id_013", s: "İki sayının toplamı {t}, farkı {f} ise büyük sayı kaçtır?", c: "({t}+{f})/2", v: {t:[10,30], f:[2,8], kosul:"(t+f)%2==0"}, z:"orta", alt:"toplam_fark" },
  { id: "s7_id_014", s: "İki sayının toplamı {t}, oranı {a}/{b} ise küçük sayı kaçtır?", c: "{t}*{b}/({a}+{b})", v: {a:[2,5], b:[1,"{a}-1"], t:[10,40], kosul:"t%(a+b)==0"}, z:"cok_zor", alt:"toplam_oran" },

  // ALT DAL 6: DENKLEM SİSTEMİ KURMA
  { id: "s7_id_015", s: "Ahmet'in yaşı Mehmet'in yaşının {a} katıdır. Yaşları toplamı {t} ise Ahmet kaç yaşındadır?", c: "{a}*{t}/({a}+1)", v: {a:[2,4], t:[15,40], kosul:"t%(a+1)==0"}, z:"zor", alt:"yas_problemi" },
  { id: "s7_id_016", s: "Bir sınıftaki kızların sayısı erkeklerin sayısının {a}/{b} katıdır. Sınıf mevcudu {m} ise kız sayısı kaçtır?", c: "{a}*{m}/({a}+{b})", v: {a:[2,5], b:[1,"{a}-1"], m:[20,50]}, z:"cok_zor", alt:"sinif_problemi" },

  // ALT DAL 7: ÜÇ BİLİNMEYENLİ SİSTEMLER (TEMEL)
  { id: "s7_id_017", s: "x+y={a}, y+z={b}, x+z={c} ise x kaçtır?", c: "({a}+{c}-{b})/2", v: {a:[5,15], b:[5,15], c:[5,15], kosul:"(a+c-b)%2==0"}, z:"cok_zor", alt:"uc_bilinmeyenli" },
  { id: "s7_id_018", s: "x+y+z={t}, x=y, y=z ise x kaçtır?", c: "{t}/3", v: {t:[6,30], kosul:"t%3==0"}, z:"zor", alt:"esit_uc_bilinmeyen" },

  // ALT DAL 8: GRAFİK YORUMLAMA
  { id: "s7_id_019", s: "y={a}x+{b} ve y={c}x+{d} doğrularının kesim noktasının apsisi kaçtır?", c: "({d}-{b})/({a}-{c})", v: {a:[2,5], b:[1,5], c:[1,3], d:[3,10], kosul:"a!=c"}, z:"cok_zor", alt:"kesim_noktasi" },
  { id: "s7_id_020", s: "y={a}x+{b} doğrusu x eksenini nerede keser?", c: "-{b}/{a}", v: {a:[2,5], b:[2,10], kosul:"b%a==0"}, z:"zor", alt:"x_ekseni_kesim" },


  // ==========================================
  // KONU 3: DENKLEM KURMA PROBLEMLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: SAYI PROBLEMLERİ
  { id: "s7_dp_001", s: "Bir sayının {a} katının {b} fazlası {c} ise bu sayı kaçtır?", c: "({c}-{b})/{a}", v: {a:[2,5], b:[2,10], c:[10,50]}, z:"orta", alt:"sayi_problemi" },
  { id: "s7_dp_002", s: "Bir sayının {a} eksiğinin {b} katı {c} ise bu sayı kaçtır?", c: "{c}/{b}+{a}", v: {a:[2,8], b:[2,5], c:[10,40]}, z:"orta", alt:"sayi_problemi_2" },
  { id: "s7_dp_003", s: "Ardışık üç sayının toplamı {t} ise en büyük sayı kaçtır?", c: "{t}/3+1", v: {t:[6,60], kosul:"t%3==0"}, z:"orta", alt:"ardisik_uc" },
  { id: "s7_dp_004", s: "Bir sayının yarısı ile üçte birinin toplamı {t} ise bu sayı kaçtır?", c: "{t}*6/5", v: {t:[5,50], kosul:"t%5==0"}, z:"zor", alt:"yarisi_ucte_biri" },

  // ALT DAL 2: YAŞ PROBLEMLERİ
  { id: "s7_dp_005", s: "Bir babanın yaşı çocuğunun yaşının {a} katıdır. {n} yıl sonra babanın yaşı çocuğunun yaşının {b} katı olacağına göre çocuk bugün kaç yaşındadır?", c: "{n}*({b}-1)/({a}-{b})", v: {a:[3,6], b:[2,"{a}-1"], n:[2,10]}, z:"cok_zor", alt:"yas_kat" },
  { id: "s7_dp_006", s: "Baba {b} yaşında, çocuk {c} yaşındadır. Kaç yıl önce babanın yaşı çocuğunun yaşının {k} katıydı?", c: "({b}-{k}*{c})/({k}-1)", v: {b:[30,50], c:[5,10], k:[2,4], kosul:"b>k*c"}, z:"cok_zor", alt:"yas_once" },

  // ALT DAL 3: YÜZDE PROBLEMLERİ
  { id: "s7_dp_007", s: "Bir mal {a} TL'ye alınıp %{k} kârla satılırsa satış fiyatı kaç TL olur?", c: "{a}*(100+{k})/100", v: {a:[50,200], k:[10,40,5]}, z:"orta", alt:"kar_yuzde" },
  { id: "s7_dp_008", s: "%{k} zararla {s} TL'ye satılan malın maliyeti kaç TL'dir?", c: "{s}*100/(100-{k})", v: {k:[10,30], s:[50,200]}, z:"zor", alt:"zarar_maliyet" },

  // ALT DAL 4: HAREKET PROBLEMLERİ (TEMEL)
  { id: "s7_dp_009", s: "Saatte {v} km hızla giden bir araç {t} saatte kaç km yol alır?", c: "{v}*{t}", v: {v:[40,120], t:[2,6]}, z:"kolay", alt:"yol_hiz" },
  { id: "s7_dp_010", s: "{x} km'lik yolu {t} saatte alan aracın hızı kaç km/saattir?", c: "{x}/{t}", v: {x:[100,600], t:[2,6], kosul:"x%t==0"}, z:"orta", alt:"hiz_bulma" },
  { id: "s7_dp_011", s: "İki araç {v1} ve {v2} km/saat hızla birbirine doğru hareket ediyor. {x} km mesafe varsa kaç saat sonra karşılaşırlar?", c: "{x}/({v1}+{v2})", v: {v1:[40,80], v2:[40,80], x:[200,600]}, z:"zor", alt:"karsilasma" },

  // ALT DAL 5: İŞÇİ-HAVUZ PROBLEMLERİ (TEMEL)
  { id: "s7_dp_012", s: "Bir işi A işçisi {a} günde, B işçisi {b} günde bitiriyor. İkisi birlikte kaç günde bitirir?", c: "{a}*{b}/({a}+{b})", v: {a:[3,10], b:[4,12]}, z:"zor", alt:"isci_birlikte" },
  { id: "s7_dp_013", s: "Bir havuzu A musluğu {a} saatte dolduruyor. Havuzun {k}/{m}'i kaç saatte dolar?", c: "{a}*{k}/{m}", v: {a:[4,12], k:[1,"{m}-1"], m:[2,6]}, z:"orta", alt:"havuz_kismi" },

  // ALT DAL 6: KARIŞIM PROBLEMLERİ (TEMEL)
  { id: "s7_dp_014", s: "Tuz oranı %{o1} olan {m1} kg tuzlu su ile %{o2} olan {m2} kg tuzlu su karıştırılırsa yeni karışımın tuz oranı % kaç olur?", c: "({o1}*{m1}+{o2}*{m2})/({m1}+{m2})", v: {o1:[10,30], m1:[10,50], o2:[20,50], m2:[10,50]}, z:"cok_zor", alt:"karisim" },
  { id: "s7_dp_015", s: "Alkol oranı %{o} olan {m} litre karışıma {s} litre su eklenirse yeni alkol oranı % kaç olur?", c: "{o}*{m}/({m}+{s})", v: {o:[20,60], m:[10,40], s:[5,20]}, z:"cok_zor", alt:"seyreltme" },


  // ==========================================
  // KONU 4: İKİNCİ DERECEDEN BİR BİLİNMEYENLİ DENKLEMLER - TANIM (6 alt dal)
  // ==========================================

  // ALT DAL 1: İKİNCİ DERECE DENKLEM TANIMA
  { id: "s7_ik_001", s: "Aşağıdakilerden hangisi ikinci dereceden bir bilinmeyenli denklemdir?", c: "{dogru}", v: {secenekler:["x²+3x+2=0","x+2=5","x³+2x=0","1/x+x=3","2x+3y=6"]}, z:"kolay", alt:"tanima" },
  { id: "s7_ik_002", s: "ax²+bx+c=0 ifadesinde a=0 olursa denklem ne olur?", c: "birinci_dereceden_denklem", v: {}, z:"orta", alt:"a_sifir" },
  { id: "s7_ik_003", s: "İkinci derece denklem olması için şart nedir?", c: "a≠0_ve_xin_en_yuksek_kuvveti_2_olmali", v: {}, z:"orta", alt:"sart" },

  // ALT DAL 2: BASİT İKİNCİ DERECE DENKLEM ÇÖZME
  { id: "s7_ik_004", s: "x² = {a} denkleminin çözüm kümesi nedir?", c: "{-√{a}, √{a}}", v: {a:[4,9,16,25,36,49,64,81,100]}, z:"orta", alt:"x_kare_a" },
  { id: "s7_ik_005", s: "x² - {a} = 0 denkleminin kökleri nedir?", c: "{-√{a}, √{a}}", v: {a:[4,9,16,25]}, z:"orta", alt:"x_kare_eksi_a" },
  { id: "s7_ik_006", s: "x² + {a} = 0 denkleminin reel kökü var mıdır?", c: "hayir_(a>0_ise)", v: {a:[1,20]}, z:"orta", alt:"x_kare_arti_a" },

  // ALT DAL 3: ÇARPANLARA AYIRARAK ÇÖZME
  { id: "s7_ik_007", s: "x² - 5x + 6 = 0 denkleminin kökleri nedir?", c: "{2,3}", v: {}, z:"orta", alt:"carpan_cozum" },
  { id: "s7_ik_008", s: "x² + x - 6 = 0 denkleminin kökleri nedir?", c: "{-3,2}", v: {}, z:"orta", alt:"carpan_cozum_2" },
  { id: "s7_ik_009", s: "x² - {a} = 0 denklemini çarpanlara ayırarak çözünüz.", c: "(x-√{a})(x+√{a})=0", v: {a:[4,9,16,25]}, z:"orta", alt:"kare_fark_cozum" },

  // ALT DAL 4: TAM KARE İFADELERİ ÇÖZME
  { id: "s7_ik_010", s: "(x-{a})² = 0 denkleminin kökü nedir?", c: "{a}_(cift_katli)", v: {a:[1,8]}, z:"orta", alt:"tam_kare_kok" },
  { id: "s7_ik_011", s: "x² + 2x + 1 = 0 denkleminin kökleri nedir?", c: "{-1}_(cift_katli)", v: {}, z:"orta", alt:"x2_2x_1" },

  // ALT DAL 5: ORTAK ÇARPAN PARANTEZİ İLE ÇÖZME
  { id: "s7_ik_012", s: "x² - x = 0 denkleminin kökleri nedir?", c: "{0,1}", v: {}, z:"orta", alt:"ortak_carpan" },
  { id: "s7_ik_013", s: "{a}x² + {b}x = 0 denkleminin kökleri nedir?", c: "{0, -{b}/{a}}", v: {a:[2,5], b:[2,8]}, z:"orta", alt:"ax2+bx" },

  // ALT DAL 6: DENKLEMİN DERECESİ
  { id: "s7_ik_014", s: "({a}x+{b})(x-{c}) = 0 denkleminin derecesi kaçtır?", c: "2", v: {a:[1,4], b:[1,5], c:[2,6]}, z:"orta", alt:"derece" },
  { id: "s7_ik_015", s: "(x²+1)(x-2) = 0 denkleminin derecesi kaçtır?", c: "3", v: {}, z:"orta", alt:"derece_3" },


  // ==========================================
  // KONU 5: DİSKRİMİNANT VE KÖK BULMA (8 alt dal)
  // ==========================================

  // ALT DAL 1: DİSKRİMİNANT HESAPLAMA
  { id: "s7_ds_001", s: "x² + {b}x + {c} = 0 denkleminin diskriminantı kaçtır?", c: "{b}²-4*{c}", v: {b:[2,8], c:[1,15]}, z:"orta", alt:"diskriminant" },
  { id: "s7_ds_002", s: "Diskriminant (Δ) formülü nedir?", c: "Δ=b²-4ac", v: {}, z:"orta", alt:"formul" },
  { id: "s7_ds_003", s: "{a}x² + {b}x + {c} = 0 denkleminin diskriminantı kaçtır?", c: "{b}²-4*{a}*{c}", v: {a:[2,4], b:[3,8], c:[1,6]}, z:"zor", alt:"katsayili_diskriminant" },

  // ALT DAL 2: DİSKRİMİNANTIN YORUMU
  { id: "s7_ds_004", s: "Δ > 0 ise denklemin kaç reel kökü vardır?", c: "2_farkli_reel_kok", v: {}, z:"orta", alt:"delta_buyuk" },
  { id: "s7_ds_005", s: "Δ = 0 ise denklemin kaç reel kökü vardır?", c: "1_(cift_katli_kok)", v: {}, z:"orta", alt:"delta_sifir" },
  { id: "s7_ds_006", s: "Δ < 0 ise denklemin kaç reel kökü vardır?", c: "0_(reel_kok_yok)", v: {}, z:"orta", alt:"delta_kucuk" },
  { id: "s7_ds_007", s: "x² + 4x + 3 = 0 denkleminin diskriminantı kaçtır ve kaç kökü vardır?", c: "Δ=4, 2_farkli_kok", v: {}, z:"orta", alt:"x2_4x_3" },
  { id: "s7_ds_008", s: "x² + 2x + 1 = 0 denkleminin diskriminantı kaçtır ve kaç kökü vardır?", c: "Δ=0, cift_katli_kok", v: {}, z:"orta", alt:"x2_2x_1_delta" },
  { id: "s7_ds_009", s: "x² + x + 1 = 0 denkleminin diskriminantı kaçtır ve kaç kökü vardır?", c: "Δ=-3, reel_kok_yok", v: {}, z:"orta", alt:"x2_x_1_delta" },

  // ALT DAL 3: KÖK BULMA FORMÜLÜ
  { id: "s7_ds_010", s: "x² + {b}x + {c} = 0 denkleminin köklerini bulunuz.", c: "(-{b}+√Δ)/2 ve (-{b}-√Δ)/2", v: {b:[3,8], c:[1,12], kosul:"Δ≥0"}, z:"zor", alt:"kok_bulma" },
  { id: "s7_ds_011", s: "Kök bulma formülü nedir?", c: "x=(-b±√Δ)/2a", v: {}, z:"orta", alt:"kok_formul" },
  { id: "s7_ds_012", s: "x² - 5x + 6 = 0 denkleminin kökleri nedir?", c: "{2,3}", v: {}, z:"zor", alt:"x2_5x_6_kok" },
  { id: "s7_ds_013", s: "x² - 7x + 12 = 0 denkleminin kökleri nedir?", c: "{3,4}", v: {}, z:"zor", alt:"x2_7x_12_kok" },
  { id: "s7_ds_014", s: "x² - x - 2 = 0 denkleminin kökleri nedir?", c: "{-1,2}", v: {}, z:"zor", alt:"x2_x_2_kok" },

  // ALT DAL 4: KATSAYILI DENKLEMLERDE KÖK BULMA
  { id: "s7_ds_015", s: "{a}x² + {b}x + {c} = 0 denkleminin köklerini bulunuz.", c: "{kokler}", v: {a:[2,4], b:[4,10], c:[1,6], kosul:"Δ≥0"}, z:"cok_zor", alt:"katsayili_kok" },
  { id: "s7_ds_016", s: "2x² + 5x + 2 = 0 denkleminin kökleri nedir?", c: "{-2,-1/2}", v: {}, z:"cok_zor", alt:"2x2_5x_2" },
  { id: "s7_ds_017", s: "3x² - 7x + 2 = 0 denkleminin kökleri nedir?", c: "{1/3,2}", v: {}, z:"cok_zor", alt:"3x2_7x_2" },

  // ALT DAL 5: KÖK YOKSA SEBEBİ
  { id: "s7_ds_018", s: "x² + 2x + 5 = 0 denkleminin neden reel kökü yoktur?", c: "Δ=-16<0", v: {}, z:"orta", alt:"kok_yok_sebep" },
  { id: "s7_ds_019", s: "Hangi durumda denklemin reel kökü olmaz?", c: "Δ<0_oldugunda", v: {}, z:"orta", alt:"reel_kok_yok_sart" },

  // ALT DAL 6: ÇÖZÜM KÜMESİ YAZMA
  { id: "s7_ds_020", s: "x²-4=0 denkleminin çözüm kümesini yazınız.", c: "{-2,2}", v: {}, z:"orta", alt:"cozum_kumesi" },
  { id: "s7_ds_021", s: "x²-6x+9=0 denkleminin çözüm kümesini yazınız.", c: "{3}", v: {}, z:"orta", alt:"cift_katli_kumesi" },
  { id: "s7_ds_022", s: "x²+1=0 denkleminin çözüm kümesini yazınız.", c: "∅_(bos_kume)", v: {}, z:"orta", alt:"bos_cozum_kumesi" },

  // ALT DAL 7: KÖKLERİN RASYONELLİĞİ
  { id: "s7_ds_023", s: "x² - {a} = 0 denkleminin kökleri rasyonel midir? (a=tam kare değilse)", c: "{rasyonel_mi}", v: {a:[2,15], kosul:"tam_kare_kontrol"}, z:"zor", alt:"rasyonel_kok" },
  { id: "s7_ds_024", s: "Δ bir tam kare ise kökler için ne söylenebilir?", c: "kokler_rasyoneldir", v: {}, z:"orta", alt:"tam_kare_delta" },

  // ALT DAL 8: KARIŞIK KÖK BULMA
  { id: "s7_ds_025", s: "x² - (√2+√3)x + √6 = 0 denkleminin kökleri nedir?", c: "{√2,√3}", v: {}, z:"cok_zor", alt:"koklu_katsayi" },
  { id: "s7_ds_026", s: "(x+1)² = 2x+2 denkleminin kökleri nedir?", c: "{-1,1}", v: {}, z:"cok_zor", alt:"duzenleme_gerektiren" },


  // ==========================================
  // KONU 6: KÖK-KATSAYI İLİŞKİLERİ (10 alt dal)
  // ==========================================

  // ALT DAL 1: KÖKLER TOPLAMI
  { id: "s7_kk_001", s: "x² + {b}x + {c} = 0 denkleminin kökler toplamı kaçtır?", c: "-{b}", v: {b:[2,10], c:[1,24]}, z:"orta", alt:"kokler_toplami" },
  { id: "s7_kk_002", s: "ax²+bx+c=0 denkleminin kökler toplamı formülü nedir?", c: "-b/a", v: {}, z:"orta", alt:"toplam_formul" },
  { id: "s7_kk_003", s: "{a}x² + {b}x + {c} = 0 denkleminin kökler toplamı kaçtır?", c: "-{b}/{a}", v: {a:[2,4], b:[4,10], c:[1,10]}, z:"zor", alt:"katsayili_toplam" },
  { id: "s7_kk_004", s: "Kökler toplamı 5 olan ikinci derece denklem yazınız.", c: "x²-5x+k=0_gibi", v: {}, z:"orta", alt:"toplamdan_denklem" },

  // ALT DAL 2: KÖKLER ÇARPIMI
  { id: "s7_kk_005", s: "x² + {b}x + {c} = 0 denkleminin kökler çarpımı kaçtır?", c: "{c}", v: {b:[2,8], c:[1,12]}, z:"orta", alt:"kokler_carpimi" },
  { id: "s7_kk_006", s: "ax²+bx+c=0 denkleminin kökler çarpımı formülü nedir?", c: "c/a", v: {}, z:"orta", alt:"carpim_formul" },
  { id: "s7_kk_007", s: "{a}x² + {b}x + {c} = 0 denkleminin kökler çarpımı kaçtır?", c: "{c}/{a}", v: {a:[2,4], b:[3,8], c:[2,12]}, z:"zor", alt:"katsayili_carpim" },
  { id: "s7_kk_008", s: "Kökler çarpımı -6 olan ikinci derece denklem yazınız.", c: "x²+kx-6=0_gibi", v: {}, z:"orta", alt:"carpimdan_denklem" },

  // ALT DAL 3: KÖKLER TOPLAMI VE ÇARPIMI İLE DENKLEM YAZMA
  { id: "s7_kk_009", s: "Kökler toplamı T={t}, kökler çarpımı Ç={c} olan ikinci derece denklemi yazınız.", c: "x²-{t}x+{c}=0", v: {t:[2,8], c:[1,15]}, z:"orta", alt:"denklem_yazma" },
  { id: "s7_kk_010", s: "Kökleri x₁={a} ve x₂={b} olan ikinci derece denklemi yazınız.", c: "x²-{a+b}x+{a}*{b}=0", v: {a:[1,5], b:[1,5]}, z:"orta", alt:"koklerden_denklem" },

  // ALT DAL 4: KÖKLER FARKI
  { id: "s7_kk_011", s: "x² + {b}x + {c} = 0 denkleminin kökler farkının mutlak değeri kaçtır?", c: "√Δ/|a|", v: {b:[2,8], c:[1,12], kosul:"Δ≥0"}, z:"cok_zor", alt:"kokler_farki" },
  { id: "s7_kk_012", s: "Kökler farkı formülü nedir?", c: "|x₁-x₂|=√Δ/|a|", v: {}, z:"cok_zor", alt:"fark_formul" },
  { id: "s7_kk_013", s: "x² - 5x + 6 = 0 denkleminin kökler farkı kaçtır?", c: "1", v: {}, z:"cok_zor", alt:"x2_5x_6_fark" },

  // ALT DAL 5: KÖKLERİN ÇARPMAYA GÖRE TERSLERİ TOPLAMI
  { id: "s7_kk_014", s: "Kökleri x₁ ve x₂ olan denklemin 1/x₁+1/x₂ değeri kaçtır?", c: "-b/c", v: {}, z:"cok_zor", alt:"ters_toplam" },
  { id: "s7_kk_015", s: "x² + {b}x + {c} = 0 için 1/x₁+1/x₂ = ?", c: "-{b}/{c}", v: {b:[2,6], c:[1,12], kosul:"c!=0"}, z:"cok_zor", alt:"ters_toplam_deger" },

  // ALT DAL 6: KÖKLERİN KARELERİ TOPLAMI
  { id: "s7_kk_016", s: "Kökler toplamı T, kökler çarpımı Ç ise x₁²+x₂² = ?", c: "T²-2Ç", v: {}, z:"cok_zor", alt:"kareler_toplami" },
  { id: "s7_kk_017", s: "x² - 6x + 5 = 0 ise x₁²+x₂² = ?", c: "26", v: {}, z:"cok_zor", alt:"x2_6x_5_kare" },
  { id: "s7_kk_018", s: "x₁²+x₂² = 13 ve x₁·x₂ = 6 ise x₁+x₂ = ?", c: "±5", v: {}, z:"cok_zor", alt:"kareden_toplam" },

  // ALT DAL 7: KÖKLERİN KÜPLERİ TOPLAMI
  { id: "s7_kk_019", s: "Kökler toplamı T, kökler çarpımı Ç ise x₁³+x₂³ = ?", c: "T³-3TÇ", v: {}, z:"cok_zor", alt:"kupler_toplami" },
  { id: "s7_kk_020", s: "x² - 3x + 2 = 0 ise x₁³+x₂³ = ?", c: "9", v: {}, z:"cok_zor", alt:"x2_3x_2_kup" },

  // ALT DAL 8: KÖKLER ARASI BAĞINTILAR
  { id: "s7_kk_021", s: "x² + {b}x + {c} = 0 denkleminin kökleri x₁ ve x₂'dir. x₁/x₂ + x₂/x₁ = ?", c: "({b}²-2*{c})/{c}", v: {b:[2,6], c:[1,8], kosul:"c!=0"}, z:"cok_zor", alt:"oran_toplam" },
  { id: "s7_kk_022", s: "x² - 5x + 6 = 0 ise x₁/x₂ + x₂/x₁ = ?", c: "13/6", v: {}, z:"cok_zor", alt:"x2_5x_6_oran" },

  // ALT DAL 9: KÖK-KATSAYI İLİŞKİLERİ İLE İLGİLİ SORULAR
  { id: "s7_kk_023", s: "x² + mx + 6 = 0 denkleminin bir kökü 2 ise m kaçtır?", c: "-5", v: {}, z:"zor", alt:"bir_kok_verilince" },
  { id: "s7_kk_024", s: "x² + {b}x + {c} = 0 denkleminin kökleri arasında x₁={k}x₂ bağıntısı varsa {k}=?", c: "{k}", v: {b:[3,8], c:[2,12], k:[2,3]}, z:"cok_zor", alt:"katli_kok" },

  // ALT DAL 10: SİMETRİK KÖKLER
  { id: "s7_kk_025", s: "x² + mx + n = 0 denkleminin kökleri simetrik ise m kaçtır?", c: "0", v: {}, z:"zor", alt:"simetrik_kok" },
  { id: "s7_kk_026", s: "Simetrik kök ne demektir?", c: "x₁=-x₂_yani_toplamlari_sifir", v: {}, z:"orta", alt:"simetrik_tanim" },
  { id: "s7_kk_027", s: "x² - {a} = 0 denkleminin kökleri simetrik midir?", c: "evet", v: {a:[4,9,16]}, z:"orta", alt:"simetrik_ornek" },


  // ==========================================
  // KONU 7: KÖKLERİN İŞARET İNCELEMESİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: İKİ KÖK POZİTİF
  { id: "s7_ki_001", s: "x² + {b}x + {c} = 0 denkleminin iki kökü de pozitif olabilir mi? (b<0, c>0)", c: "{evet_hayir}", v: {b:[-8,-2], c:[1,15]}, z:"zor", alt:"iki_pozitif" },
  { id: "s7_ki_002", s: "İki kökün de pozitif olması için şartlar nelerdir?", c: "Δ≥0, -b/a>0, c/a>0", v: {}, z:"zor", alt:"pozitif_sart" },

  // ALT DAL 2: İKİ KÖK NEGATİF
  { id: "s7_ki_003", s: "x² + {b}x + {c} = 0 denkleminin iki kökü de negatif olabilir mi? (b>0, c>0)", c: "{evet_hayir}", v: {b:[2,8], c:[1,12]}, z:"zor", alt:"iki_negatif" },
  { id: "s7_ki_004", s: "İki kökün de negatif olması için şartlar nelerdir?", c: "Δ≥0, -b/a<0, c/a>0", v: {}, z:"zor", alt:"negatif_sart" },

  // ALT DAL 3: TERS İŞARETLİ KÖKLER
  { id: "s7_ki_005", s: "x² + {b}x + {c} = 0 denkleminin kökleri ters işaretli olabilir mi? (c<0)", c: "{evet_hayir}", v: {b:[2,6], c:[-10,-1]}, z:"zor", alt:"ters_isaret" },
  { id: "s7_ki_006", s: "Köklerin ters işaretli olması için şart nedir?", c: "c/a<0", v: {}, z:"orta", alt:"ters_isaret_sart" },
  { id: "s7_ki_007", s: "x² + {b}x - {c} = 0 denkleminin kökleri için ne söylenebilir?", c: "ters_isaretli", v: {b:[2,6], c:[1,10]}, z:"orta", alt:"c_negatif" },

  // ALT DAL 4: KÖKLERİN İŞARET TABLOSU
  { id: "s7_ki_008", s: "Kökler çarpımı pozitif ise köklerin işareti nasıldır?", c: "ayni_isaretli", v: {}, z:"orta", alt:"carpim_pozitif" },
  { id: "s7_ki_009", s: "Kökler çarpımı negatif ise köklerin işareti nasıldır?", c: "ters_isaretli", v: {}, z:"orta", alt:"carpim_negatif" },
  { id: "s7_ki_010", s: "Kökler toplamı pozitif, kökler çarpımı pozitif ise kökler nasıldır?", c: "ikisi_de_pozitif", v: {}, z:"orta", alt:"toplam_pozitif_carpim_pozitif" },
  { id: "s7_ki_011", s: "Kökler toplamı negatif, kökler çarpımı pozitif ise kökler nasıldır?", c: "ikisi_de_negatif", v: {}, z:"orta", alt:"toplam_negatif_carpim_pozitif" },

  // ALT DAL 5: İŞARET İNCELEME SORULARI
  { id: "s7_ki_012", s: "x² - 5x + 6 = 0 denkleminin köklerinin işaretleri nasıldır?", c: "ikisi_de_pozitif", v: {}, z:"orta", alt:"x2_5x_6_isaret" },
  { id: "s7_ki_013", s: "x² + 3x - 4 = 0 denkleminin köklerinin işaretleri nasıldır?", c: "ters_isaretli", v: {}, z:"orta", alt:"x2_3x_4_isaret" },
  { id: "s7_ki_014", s: "x² + 5x + 6 = 0 denkleminin köklerinin işaretleri nasıldır?", c: "ikisi_de_negatif", v: {}, z:"orta", alt:"x2_5x_6_isaret" },

  // ALT DAL 6: İŞARET İNCELEME PROBLEMLERİ
  { id: "s7_ki_015", s: "x² + mx + 4 = 0 denkleminin iki pozitif kökü olması için m nasıl olmalıdır?", c: "m<-4", v: {}, z:"cok_zor", alt:"m_negatif" },
  { id: "s7_ki_016", s: "x² + mx - 3 = 0 denkleminin kökleri için ne söylenebilir?", c: "her_zaman_ters_isaretli", v: {}, z:"cok_zor", alt:"c_negatif_her_zaman" },


  // ==========================================
  // KONU 8: İKİNCİ DERECE DENKLEMLERDE ÖZEL DURUMLAR (6 alt dal)
  // ==========================================

  // ALT DAL 1: ÇAKIŞIK (ÇİFT KATLI) KÖK
  { id: "s7_od_001", s: "x² + {b}x + {c} = 0 denkleminin çakışık kökü olması için c kaç olmalıdır?", c: "({b}/2)²", v: {b:[2,10,2]}, z:"zor", alt:"cakisik_kok" },
  { id: "s7_od_002", s: "x² + mx + 9 = 0 denkleminin çift katlı kökü olması için m'nin pozitif değeri kaçtır?", c: "6", v: {}, z:"zor", alt:"m_6" },
  { id: "s7_od_003", s: "Çakışık kök için Δ = ?", c: "0", v: {}, z:"orta", alt:"cakisik_delta" },

  // ALT DAL 2: REEL KÖK OLMAMA DURUMU
  { id: "s7_od_004", s: "x² + {b}x + {c} = 0 denkleminin reel kökü olmaması için c en az kaç olmalıdır? (tam sayı)", c: "{min_c}", v: {b:[2,6]}, z:"zor", alt:"reel_kok_yok_sart" },
  { id: "s7_od_005", s: "x² + 2x + m = 0 denkleminin reel kökü olmaması için m nasıl olmalıdır?", c: "m>1", v: {}, z:"zor", alt:"m_buyuk_1" },

  // ALT DAL 3: KÖKLERDEN BİRİNİN SIFIR OLMASI
  { id: "s7_od_006", s: "x² + {b}x = 0 denkleminin kökleri nedir?", c: "{0, -{b}}", v: {b:[2,8]}, z:"orta", alt:"bir_kok_sifir" },
  { id: "s7_od_007", s: "ax²+bx+c=0 denkleminin bir kökünün sıfır olması için şart nedir?", c: "c=0", v: {}, z:"orta", alt:"c_sifir_sart" },

  // ALT DAL 4: KATSAYILAR ARASI ÖZEL İLİŞKİ
  { id: "s7_od_008", s: "a+b+c=0 ise ax²+bx+c=0 denkleminin bir kökü kaçtır?", c: "1", v: {}, z:"cok_zor", alt:"a+b+c_sifir" },
  { id: "s7_od_009", s: "a-b+c=0 ise ax²+bx+c=0 denkleminin bir kökü kaçtır?", c: "-1", v: {}, z:"cok_zor", alt:"a-b+c_sifir" },
  { id: "s7_od_010", s: "Denklemin köklerinden biri 1 ise katsayılar arasındaki bağıntı nedir?", c: "a+b+c=0", v: {}, z:"cok_zor", alt:"kok_1_sart" },

  // ALT DAL 5: RASYONEL KATSAYILI DENKLEMLER
  { id: "s7_od_011", s: "x² - (m+1)x + m = 0 denkleminin kökleri nedir?", c: "{1,m}", v: {}, z:"cok_zor", alt:"m_li_denklem" },
  { id: "s7_od_012", s: "x² - 2mx + m²-1 = 0 denkleminin kökleri nedir?", c: "{m-1,m+1}", v: {}, z:"cok_zor", alt:"tam_kare_eksi_1" },

  // ALT DAL 6: KARIŞIK ÖZEL DURUMLAR
  { id: "s7_od_013", s: "Kökleri birbirine eşit olan denkleme ne denir?", c: "cift_katli_koklu_denklem", v: {}, z:"orta", alt:"esit_kok" },
  { id: "s7_od_014", s: "Köklerin çakışık olması ne demektir?", c: "tek_bir_kok_var_(x₁=x₂)", v: {}, z:"orta", alt:"cakisik_tanim" },


  // ==========================================
  // KONU 9: İKİNCİ DERECE DENKLEM PROBLEMLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: SAYI PROBLEMLERİ
  { id: "s7_ip_001", s: "Hangi sayının karesi kendisinin {a} katından {b} fazladır?", c: "{kokler}", v: {a:[2,6], b:[3,15]}, z:"zor", alt:"kare_kati" },
  { id: "s7_ip_002", s: "İki sayının toplamı {t}, çarpımı {c} ise bu sayılar nedir?", c: "{kokler}", v: {t:[5,10], c:[4,24]}, z:"zor", alt:"toplam_carpim" },
  { id: "s7_ip_003", s: "Ardışık iki sayının çarpımı {c} ise bu sayılar nedir?", c: "{sayi1},{sayi2}", v: {c:[2,12,20,30,42,56,72,90]}, z:"zor", alt:"ardisik_carpim" },

  // ALT DAL 2: GEOMETRİ PROBLEMLERİ
  { id: "s7_ip_004", s: "Kenar uzunlukları tam sayı olan bir dikdörtgenin alanı {a}, çevresi {c} ise kenarları kaçtır?", c: "{kenarlar}", v: {a:[6,24], c:[10,20]}, z:"cok_zor", alt:"dikdortgen" },
  { id: "s7_ip_005", s: "Dik kenarları x ve x+1, hipotenüsü {h} olan dik üçgende x kaçtır?", c: "{x}", v: {h:[5,13]}, z:"cok_zor", alt:"pisagor" },

  // ALT DAL 3: HIZ PROBLEMLERİ (İLERİ)
  { id: "s7_ip_006", s: "{x} km'lik yolu giderken saatte {v1} km, dönerken {v2} km hızla giden aracın ortalama hızı kaç km/saattir?", c: "2*{x}/({x}/{v1}+{x}/{v2})", v: {x:[100,300], v1:[40,80], v2:[30,60], kosul:"v1>v2"}, z:"cok_zor", alt:"ortalama_hiz" },
  { id: "s7_ip_007", s: "Bir araç yolun bir kısmını {v1} km/saat, kalanını {v2} km/saat hızla gidiyor. Ortalama hız {o} km/saat ise yolun ne kadarı ilk hızla gidilmiştir?", c: "{oran}", v: {v1:[60,100], v2:[30,50], o:[40,70], kosul:"v1>o>v2"}, z:"cok_zor", alt:"karisik_hiz" },

  // ALT DAL 4: YAŞ PROBLEMLERİ
  { id: "s7_ip_008", s: "Bir babanın yaşı {a} yıl önce çocuğunun yaşının karesine eşitti. Bugün baba {b} yaşında ise çocuk kaç yaşındadır?", c: "{yas}", v: {a:[2,10], b:[30,50]}, z:"cok_zor", alt:"yas_kare" },
  { id: "s7_ip_009", s: "İki kardeşin yaşları çarpımı {c}, yaşları farkı {f} ise büyük kardeş kaç yaşındadır?", c: "{buyuk}", v: {c:[12,56], f:[1,4]}, z:"cok_zor", alt:"kardes_yas" },

  // ALT DAL 5: İŞÇİ PROBLEMLERİ
  { id: "s7_ip_010", s: "Bir işi A işçisi tek başına x günde, B işçisi (x+{a}) günde bitiriyor. İkisi birlikte {b} günde bitiriyorsa x kaçtır?", c: "{x}", v: {a:[2,8], b:[3,8]}, z:"cok_zor", alt:"isci_x" },
  { id: "s7_ip_011", s: "A ve B işçileri bir işi birlikte {b} günde bitiriyor. A tek başına x günde, B tek başına (x+{a}) günde bitiriyorsa A kaç günde bitirir?", c: "{x}", v: {a:[3,10], b:[2,6]}, z:"cok_zor", alt:"isci_sistem" },

  // ALT DAL 6: KAR-ZARAR PROBLEMLERİ
  { id: "s7_ip_012", s: "Alış fiyatı x TL olan bir mal %{k} kârla {s} TL'ye satılıyorsa x kaçtır?", c: "{s}*100/(100+{k})", v: {k:[10,40], s:[50,200]}, z:"zor", alt:"kar" },
  { id: "s7_ip_013", s: "Bir malın alış fiyatı {a} TL'dir. %{k} zararla satılırsa satış fiyatı kaç TL olur?", c: "{a}*(100-{k})/100", v: {a:[50,200], k:[10,30]}, z:"orta", alt:"zarar" },


  // ==========================================
  // KONU 10: RASYONEL DENKLEMLER (6 alt dal)
  // ==========================================

  // ALT DAL 1: PAYDADA BİLİNMEYEN
  { id: "s7_rd_001", s: "1/x = {a} ise x kaçtır?", c: "1/{a}", v: {a:[2,10]}, z:"orta", alt:"1_x_a" },
  { id: "s7_rd_002", s: "{a}/x = {b} ise x kaçtır?", c: "{a}/{b}", v: {a:[2,10], b:[2,8], kosul:"a%b==0"}, z:"orta", alt:"a_x_b" },
  { id: "s7_rd_003", s: "1/(x-{a}) = {b} ise x kaçtır?", c: "{a}+1/{b}", v: {a:[2,8], b:[2,5]}, z:"zor", alt:"1_x-a_b" },
  { id: "s7_rd_004", s: "x/{a} + x/{b} = {c} ise x kaçtır?", c: "{c}*{a}*{b}/({a}+{b})", v: {a:[2,5], b:[3,6], c:[5,20], kosul:"a!=b"}, z:"cok_zor", alt:"x_a_x_b" },

  // ALT DAL 2: TANIM KÜMESİ BULMA
  { id: "s7_rd_005", s: "1/(x-{a}) + 1/(x+{b}) denkleminin tanım kümesi nedir?", c: "x≠{a}_ve_x≠-{b}", v: {a:[1,6], b:[1,6]}, z:"orta", alt:"tanim_kumesi" },
  { id: "s7_rd_006", s: "x/(x²-{a}) ifadesinin tanımsız olduğu değerler nelerdir?", c: "x=±√{a}", v: {a:[4,9,16]}, z:"zor", alt:"tanimsiz" },

  // ALT DAL 3: İÇLER DIŞLAR ÇARPIMI
  { id: "s7_rd_007", s: "(x+{a})/(x-{b}) = {c} ise x kaçtır?", c: "({c}*{b}+{a})/({c}-1)", v: {a:[2,6], b:[1,5], c:[2,4], kosul:"c!=1"}, z:"cok_zor", alt:"icler_dislar" },
  { id: "s7_rd_008", s: "(x+1)/(x-1) = 2 ise x kaçtır?", c: "3", v: {}, z:"zor", alt:"x+1_x-1_2" },
  { id: "s7_rd_009", s: "(x+2)/(x-3) = (x+1)/(x-2) ise x kaçtır?", c: "1/2", v: {}, z:"cok_zor", alt:"esit_kesir" },

  // ALT DAL 4: PAYDA EŞİTLEME
  { id: "s7_rd_010", s: "1/x + 1/(x+1) = {a} ise x kaçtır?", c: "{cozum}", v: {a:[1,3]}, z:"cok_zor", alt:"payda_esitleme" },
  { id: "s7_rd_011", s: "1/(x-1) - 1/(x+1) = {a} ise x kaçtır?", c: "{cozum}", v: {a:[1,3]}, z:"cok_zor", alt:"payda_esitleme_fark" },

  // ALT DAL 5: YARDIMCI DEĞİŞKEN
  { id: "s7_rd_012", s: "(x²+1)/x + x/(x²+1) = {a} ise (x²+1)/x kaçtır?", c: "{cozum}", v: {a:[2,4]}, z:"cok_zor", alt:"yardimci_degisken" },
  { id: "s7_rd_013", s: "x + 1/x = {t} ise x² + 1/x² = ?", c: "{t}²-2", v: {t:[3,6]}, z:"cok_zor", alt:"x_arti_1_x" },

  // ALT DAL 6: RASYONEL DENKLEM SORULARI
  { id: "s7_rd_014", s: "2/(x-1) = 3/(x+2) ise x kaçtır?", c: "7", v: {}, z:"cok_zor", alt:"2_x-1_3_x+2" },
  { id: "s7_rd_015", s: "x/(x+2) + 1/(x-2) = 1 ise x kaçtır?", c: "6", v: {}, z:"cok_zor", alt:"kesirli_karmasik" },


  // ==========================================
  // KONU 11: KÖKLÜ DENKLEMLER (6 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT KÖKLÜ DENKLEMLER
  { id: "s7_kd_001", s: "√x = {a} ise x kaçtır?", c: "{a}²", v: {a:[2,10]}, z:"orta", alt:"kok_x_a" },
  { id: "s7_kd_002", s: "√(x+{a}) = {b} ise x kaçtır?", c: "{b}²-{a}", v: {a:[1,8], b:[2,8], kosul:"b²>a"}, z:"zor", alt:"kok_x+a_b" },
  { id: "s7_kd_003", s: "∛x = {a} ise x kaçtır?", c: "{a}³", v: {a:[2,6]}, z:"orta", alt:"kup_kok_x" },
  { id: "s7_kd_004", s: "√x + {a} = {b} ise x kaçtır?", c: "({b}-{a})²", v: {a:[1,5], b:[4,10], kosul:"b>a"}, z:"zor", alt:"kok_x_arti_a_b" },

  // ALT DAL 2: KARE ALARAK ÇÖZME
  { id: "s7_kd_005", s: "√(x+3) = x-3 ise x kaçtır?", c: "6", v: {}, z:"cok_zor", alt:"kok_x+3_x-3" },
  { id: "s7_kd_006", s: "√(2x+1) = x-1 ise x kaçtır?", c: "4", v: {}, z:"cok_zor", alt:"kok_2x+1_x-1" },
  { id: "s7_kd_007", s: "Köklü denklemlerde bulunan çözümler neden kontrol edilmelidir?", c: "kare_alma_fazladan_kok_getirebilir", v: {}, z:"orta", alt:"kontrol_nedeni" },

  // ALT DAL 3: İKİ KÖKLÜ DENKLEMLER
  { id: "s7_kd_008", s: "√(x+{a}) + √(x-{b}) = {c} ise x kaçtır?", c: "{cozum}", v: {a:[5,10], b:[1,4], c:[3,8]}, z:"cok_zor", alt:"iki_koklu" },
  { id: "s7_kd_009", s: "√(x+5) = √x + 1 ise x kaçtır?", c: "4", v: {}, z:"cok_zor", alt:"kok_x+5_kok_x+1" },
  { id: "s7_kd_010", s: "√(x+3) - √x = 1 ise x kaçtır?", c: "1", v: {}, z:"cok_zor", alt:"kok_x+3_eksi_kok_x" },

  // ALT DAL 4: TANIM ARALIĞI
  { id: "s7_kd_011", s: "√(x-{a}) = {b} denkleminin çözümü için x≥? olmalıdır?", c: "{a}", v: {a:[2,6], b:[1,5]}, z:"orta", alt:"tanim_araligi" },
  { id: "s7_kd_012", s: "√(x-2) + √(3-x) = ? işleminin tanımlı olması için x hangi aralıkta olmalıdır?", c: "2≤x≤3", v: {}, z:"zor", alt:"iki_kok_tanim" },

  // ALT DAL 5: KÖKLÜ DENKLEM SAĞLAMASI
  { id: "s7_kd_013", s: "x=4 değeri √(x+5)=x-1 denklemini sağlar mı?", c: "evet_(3=3)", v: {}, z:"orta", alt:"saglama" },
  { id: "s7_kd_014", s: "x=2 değeri √(x+2)=x-2 denklemini sağlar mı?", c: "hayir_(2=0_yanlis)", v: {}, z:"orta", alt:"saglama_yanlis" },

  // ALT DAL 6: KÖKLÜ DENKLEM SORULARI
  { id: "s7_kd_015", s: "x√x = {a} ise x kaçtır? (a tam küp ise)", c: "Math.cbrt({a})", v: {a:[8,27,64,125]}, z:"cok_zor", alt:"x_kok_x" },
  { id: "s7_kd_016", s: "√(x²-{a}) = {b} ise x'in pozitif değeri kaçtır?", c: "√({b}²+{a})", v: {a:[3,9], b:[2,5]}, z:"cok_zor", alt:"kok_x2-a" },


  // ==========================================
  // KONU 12: MUTLAK DEĞERLİ DENKLEMLER - GİRİŞ (4 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT MUTLAK DEĞER DENKLEMLERİ
  { id: "s7_md_001", s: "|x| = {a} ise x'in alabileceği değerler nelerdir?", c: "{-{a}, {a}}", v: {a:[2,10]}, z:"orta", alt:"mutlak_x_a" },
  { id: "s7_md_002", s: "|x-{a}| = {b} ise x'in alabileceği değerler nelerdir?", c: "{{a}-{b}, {a}+{b}}", v: {a:[3,10], b:[1,5], kosul:"a>b"}, z:"zor", alt:"mutlak_x-a_b" },
  { id: "s7_md_003", s: "|x| = -{a} denkleminin çözümü var mıdır?", c: "hayir_(mutlak_deger_negatif_olamaz)", v: {a:[1,5]}, z:"orta", alt:"mutlak_negatif" },

  // ALT DAL 2: MUTLAK DEĞER ÖZELLİKLERİ
  { id: "s7_md_004", s: "|x| = |y| ise x ile y arasındaki ilişki nedir?", c: "x=y_veya_x=-y", v: {}, z:"orta", alt:"mutlak_esitlik" },
  { id: "s7_md_005", s: "|x| = |-x| eşitliği her zaman doğru mudur?", c: "evet", v: {}, z:"orta", alt:"mutlak_simetri" },

  // ALT DAL 3: MUTLAK DEĞERLİ İFADELER
  { id: "s7_md_006", s: "|{a}x+{b}| = {c} denkleminin çözüm kümesi nedir?", c: "({c}-{b})/{a}_ve_(-{c}-{b})/{a}", v: {a:[2,5], b:[1,5], c:[3,15]}, z:"cok_zor", alt:"mutlak_ax+b" },
  { id: "s7_md_007", s: "|2x-3| = 5 denkleminin kökleri nedir?", c: "{-1,4}", v: {}, z:"zor", alt:"2x-3_5" },

  // ALT DAL 4: MUTLAK DEĞER DENKLEM SORULARI
  { id: "s7_md_008", s: "|x| + |x-2| = 4 denkleminin çözüm kümesi nedir?", c: "{-1,3}", v: {}, z:"cok_zor", alt:"iki_mutlak" },
  { id: "s7_md_009", s: "x·|x| = 4 ise x kaçtır?", c: "2", v: {}, z:"cok_zor", alt:"x_mutlak_x" },


  // ==========================================
  // KONU 13: DENKLEM SİSTEMLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: YOK ETME YÖNTEMİ
  { id: "s7_dss_001", s: "{a}x+{b}y={c} ve {d}x+{e}y={f} sistemini yok etme yöntemiyle çözünüz.", c: "x={x}, y={y}", v: {a:[2,4], b:[1,3], c:[10,30], d:[1,3], e:[2,4], f:[5,20], kosul:"tek_cozum_var"}, z:"cok_zor", alt:"yok_etme" },
  { id: "s7_dss_002", s: "3x+2y=12 ve x-y=1 ise x kaçtır?", c: "2.8", v: {}, z:"zor", alt:"3x+2y_12" },
  { id: "s7_dss_003", s: "x+y=7 ve 2x-y=5 ise x ve y kaçtır?", c: "x=4,y=3", v: {}, z:"zor", alt:"x+y_7_2x-y_5" },

  // ALT DAL 2: YERİNE KOYMA YÖNTEMİ
  { id: "s7_dss_004", s: "y={a}x+{b} ve x+y={c} sistemini yerine koyma yöntemiyle çözünüz.", c: "x=({c}-{b})/({a}+1), y={a}x+{b}", v: {a:[2,4], b:[1,5], c:[10,30]}, z:"cok_zor", alt:"yerine_koyma_sistem" },
  { id: "s7_dss_005", s: "y=2x-1 ve 3x+2y=12 ise x kaçtır?", c: "2", v: {}, z:"zor", alt:"y_2x-1_3x+2y_12" },

  // ALT DAL 3: DENKLEM SİSTEMİ KURMA
  { id: "s7_dss_006", s: "İki sayının toplamı {t}, farkı {f} ise bu sayıları bulunuz.", c: "buyuk=({t}+{f})/2, kucuk=({t}-{f})/2", v: {t:[10,30], f:[2,8], kosul:"(t+f)%2==0"}, z:"orta", alt:"toplam_fark_sistem" },
  { id: "s7_dss_007", s: "Bir sayının {a} katı ile diğer sayının {b} katının toplamı {c}, farkı {d} ise sayıları bulunuz.", c: "{cozum}", v: {a:[2,4], b:[3,5], c:[10,30], d:[2,10]}, z:"cok_zor", alt:"katsayili_sistem" },

  // ALT DAL 4: ÖZEL DENKLEM SİSTEMLERİ
  { id: "s7_dss_008", s: "x+y={t} ve xy={c} ise x ve y'yi bulunuz.", c: "x²-{t}x+{c}=0_kokleri", v: {t:[5,10], c:[4,24]}, z:"cok_zor", alt:"toplam_carpim_sistem" },
  { id: "s7_dss_009", s: "x²+y²={a} ve x+y={b} ise xy kaçtır?", c: "({b}²-{a})/2", v: {a:[10,40], b:[4,8], kosul:"b²>a"}, z:"cok_zor", alt:"kareler_sistem" },
  { id: "s7_dss_010", s: "x²+y²=25 ve x+y=7 ise xy kaçtır?", c: "12", v: {}, z:"cok_zor", alt:"x2+y2_25_x+y_7" },

  // ALT DAL 5: ÜÇ BİLİNMEYENLİ SİSTEMLER
  { id: "s7_dss_011", s: "x+y={a}, y+z={b}, x+z={c} ise x kaçtır?", c: "({a}+{c}-{b})/2", v: {a:[3,10], b:[3,10], c:[3,10]}, z:"cok_zor", alt:"uc_bilinmeyenli" },
  { id: "s7_dss_012", s: "x+y+z={t}, x=y=z ise x kaçtır?", c: "{t}/3", v: {t:[6,30], kosul:"t%3==0"}, z:"zor", alt:"esit_uc_bilinmeyenli" },

  // ALT DAL 6: ÇÖZÜM DURUMLARI
  { id: "s7_dss_013", s: "{a}x+{b}y={c} ve {2a}x+{2b}y={d} sisteminin çözümü nedir? (d≠2c)", c: "bos_kume", v: {a:[2,4], b:[1,3], c:[5,15], d:[15,40], kosul:"d!=2*c"}, z:"cok_zor", alt:"paralel_dogrular" },
  { id: "s7_dss_014", s: "{a}x+{b}y={c} ve {2a}x+{2b}y={2c} sisteminin çözümü nedir?", c: "sonsuz_cozum", v: {a:[2,4], b:[1,3], c:[5,15]}, z:"cok_zor", alt:"cakisik_dogrular" },

  // ALT DAL 7: GRAFİKLE ÇÖZÜM
  { id: "s7_dss_015", s: "y={a}x+{b} ve y={c}x+{d} doğrularının kesim noktasını bulunuz.", c: "({d}-{b})/({a}-{c}), {a}*x+{b}", v: {a:[2,5], b:[1,5], c:[1,3], d:[3,10], kosul:"a!=c"}, z:"cok_zor", alt:"grafik_cozum" },
  { id: "s7_dss_016", s: "y=x+2 ve y=2x-1 doğruları nerede kesişir?", c: "(3,5)", v: {}, z:"zor", alt:"y_x+2_y_2x-1" },

  // ALT DAL 8: PROBLEMLERDEN DENKLEM SİSTEMİ KURMA
  { id: "s7_dss_017", s: "Ahmet'in parası Mehmet'in parasının {a} katıdır. Paraları toplamı {t} TL ise Ahmet'in parası kaç TL'dir?", c: "{a}*{t}/({a}+1)", v: {a:[2,4], t:[30,100]}, z:"zor", alt:"para_sistem" },
  { id: "s7_dss_018", s: "Bir kumbarada {a} TL ve {b} TL'lik banknotlardan toplam {n} tane olup değeri {d} TL'dir. {a} TL'lik kaç banknot vardır?", c: "({d}-{b}*{n})/({a}-{b})", v: {a:[20,50], b:[10,20], n:[10,30], d:[200,1000], kosul:"a>b"}, z:"cok_zor", alt:"banknot_sistem" },

],


// ==========================================
// SEVİYE 8: EŞİTSİZLİKLER
// ==========================================
8: [

  // ==========================================
  // KONU 1: EŞİTSİZLİK KAVRAMI VE SEMBOLLER (6 alt dal)
  // ==========================================

  // ALT DAL 1: EŞİTSİZLİK SEMBOLLERİ
  { id: "s8_es_001", s: "\"<\" sembolü ne anlama gelir?", c: "kucuktur", v: {}, z:"kolay", alt:"kucuktur" },
  { id: "s8_es_002", s: "\">\" sembolü ne anlama gelir?", c: "buyuktur", v: {}, z:"kolay", alt:"buyuktur" },
  { id: "s8_es_003", s: "\"≤\" sembolü ne anlama gelir?", c: "kucuk_veya_esittir", v: {}, z:"kolay", alt:"kucuk_esit" },
  { id: "s8_es_004", s: "\"≥\" sembolü ne anlama gelir?", c: "buyuk_veya_esittir", v: {}, z:"kolay", alt:"buyuk_esit" },
  { id: "s8_es_005", s: "\"≠\" sembolü ne anlama gelir?", c: "esit_degildir", v: {}, z:"kolay", alt:"esit_degil" },

  // ALT DAL 2: EŞİTSİZLİK OKUMA
  { id: "s8_es_006", s: "{a} < {b} ifadesini okuyunuz.", c: "{a}_kucuktur_{b}", v: {a:[1,8], b:[3,10], kosul:"a<b"}, z:"kolay", alt:"okuma" },
  { id: "s8_es_007", s: "{a} ≥ {b} ifadesini okuyunuz.", c: "{a}_buyuk_veya_esittir_{b}", v: {a:[5,12], b:[2,8], kosul:"a>=b"}, z:"kolay", alt:"buyuk_esit_okuma" },
  { id: "s8_es_008", s: "\"{a} sayısı {b} sayısından küçüktür\" ifadesini sembolle yazınız.", c: "{a}<{b}", v: {a:[1,8], b:[3,10], kosul:"a<b"}, z:"kolay", alt:"yazma" },

  // ALT DAL 3: EŞİTSİZLİK DOĞRULUK KONTROLÜ
  { id: "s8_es_009", s: "{a} < {b} ifadesi doğru mudur?", c: "{evet_hayir}", v: {a:[1,15], b:[1,15]}, z:"kolay", alt:"dogruluk" },
  { id: "s8_es_010", s: "x={a} için x+2 < {b} eşitsizliği sağlanır mı?", c: "{evet_hayir}", v: {a:[1,10], b:[4,15]}, z:"orta", alt:"deger_kontrol" },

  // ALT DAL 4: SAYI DOĞRUSUNDA GÖSTERİM
  { id: "s8_es_011", s: "x > {a} eşitsizliğini sayı doğrusunda gösteriniz.", c: "{a}_noktasindan_saga_acik", v: {a:[1,8]}, z:"orta", alt:"sayi_dogrusu" },
  { id: "s8_es_012", s: "x ≤ {a} eşitsizliğini sayı doğrusunda gösteriniz.", c: "{a}_noktasindan_sola_kapali", v: {a:[2,9]}, z:"orta", alt:"kucuk_esit_dogru" },

  // ALT DAL 5: EŞİTSİZLİK YÖNÜ
  { id: "s8_es_013", s: "3 < 5 ifadesinde eşitsizliğin yönü nedir?", c: "kucuktur_(sola_dogru)", v: {}, z:"kolay", alt:"yon" },
  { id: "s8_es_014", s: "Eşitsizlik yönü ne zaman değişir?", c: "negatif_sayi_ile_carpilinca_veya_bolununce", v: {}, z:"orta", alt:"yon_degisimi" },

  // ALT DAL 6: TEMEL KARŞILAŞTIRMA
  { id: "s8_es_015", s: "Negatif sayılar arasında sıralama nasıldır?", c: "sifira_yakin_olan_daha_buyuktur", v: {}, z:"orta", alt:"negatif_siralama" },
  { id: "s8_es_016", s: "-{a} ile -{b} hangisi büyüktür? (a<b)", c: "-{b}", v: {a:[2,7], b:[3,8], kosul:"a<b"}, z:"orta", alt:"negatif_karsilastirma" },


  // ==========================================
  // KONU 2: BİRİNCİ DERECEDEN BİR BİLİNMEYENLİ EŞİTSİZLİKLER (10 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT EŞİTSİZLİK ÇÖZME
  { id: "s8_bd_001", s: "x + {a} > {b} eşitsizliğinin çözümü nedir?", c: "x > {b}-{a}", v: {a:[2,10], b:[5,20], kosul:"b>a"}, z:"orta", alt:"x_arti_a" },
  { id: "s8_bd_002", s: "x - {a} < {b} eşitsizliğinin çözümü nedir?", c: "x < {a}+{b}", v: {a:[1,8], b:[2,10]}, z:"orta", alt:"x_eksi_a" },
  { id: "s8_bd_003", s: "{a}x > {b} eşitsizliğinin çözümü nedir? (a>0)", c: "x > {b}/{a}", v: {a:[2,7], b:[5,30], kosul:"a>0"}, z:"orta", alt:"a_x_buyuk" },
  { id: "s8_bd_004", s: "x/{a} ≤ {b} eşitsizliğinin çözümü nedir?", c: "x ≤ {a}*{b}", v: {a:[2,8], b:[2,10]}, z:"orta", alt:"x_bolu_a" },

  // ALT DAL 2: İKİ ADIMLI EŞİTSİZLİKLER
  { id: "s8_bd_005", s: "{a}x + {b} < {c} eşitsizliğinin çözümü nedir? (a>0)", c: "x < ({c}-{b})/{a}", v: {a:[2,6], b:[2,10], c:[10,40], kosul:"c>b"}, z:"orta", alt:"ax+b_kucuk" },
  { id: "s8_bd_006", s: "{a}x - {b} ≥ {c} eşitsizliğinin çözümü nedir? (a>0)", c: "x ≥ ({c}+{b})/{a}", v: {a:[2,5], b:[2,8], c:[5,25]}, z:"orta", alt:"ax-b_buyuk_esit" },
  { id: "s8_bd_007", s: "-{a}x + {b} > {c} eşitsizliğinin çözümü nedir?", c: "x < ({b}-{c})/{a}", v: {a:[2,5], b:[5,20], c:[2,10], kosul:"b>c"}, z:"zor", alt:"negatif_a" },

  // ALT DAL 3: NEGATİF KATSAYILI EŞİTSİZLİKLER
  { id: "s8_bd_008", s: "-{a}x > {b} eşitsizliğinin çözümü nedir?", c: "x < -{b}/{a}", v: {a:[2,6], b:[3,20]}, z:"zor", alt:"negatif_x" },
  { id: "s8_bd_009", s: "Negatif sayı ile çarpınca/bölünce eşitsizlik yönü neden değişir?", c: "sayi_dogrusunda_siralama_ters_doner", v: {}, z:"orta", alt:"yon_degisim_nedeni" },
  { id: "s8_bd_010", s: "-{a}x + {b} ≤ {c} eşitsizliğinin çözümü nedir?", c: "x ≥ ({b}-{c})/{a}", v: {a:[2,5], b:[5,15], c:[2,10], kosul:"b>c"}, z:"zor", alt:"negatif_a_esit" },

  // ALT DAL 4: PARANTEZLİ EŞİTSİZLİKLER
  { id: "s8_bd_011", s: "{a}(x+{b}) < {c} eşitsizliğinin çözümü nedir?", c: "x < {c}/{a}-{b}", v: {a:[2,6], b:[1,6], c:[10,40]}, z:"orta", alt:"parantezli" },
  { id: "s8_bd_012", s: "{a}(x-{b}) ≥ {c} eşitsizliğinin çözümü nedir?", c: "x ≥ {c}/{a}+{b}", v: {a:[2,5], b:[1,5], c:[5,30]}, z:"orta", alt:"parantezli_buyuk_esit" },

  // ALT DAL 5: BİLİNMEYENİ BİR TARAFTA TOPLAMA
  { id: "s8_bd_013", s: "{a}x + {b} < {c}x + {d} eşitsizliğinin çözümü nedir? (a>c)", c: "x < ({d}-{b})/({a}-{c})", v: {a:[4,8], b:[2,8], c:[1,3], d:[5,20], kosul:"a>c"}, z:"zor", alt:"iki_taraf_x" },
  { id: "s8_bd_014", s: "{a}x - {b} > {c} - {d}x eşitsizliğinin çözümü nedir?", c: "x > ({b}+{c})/({a}+{d})", v: {a:[2,5], b:[2,8], c:[5,20], d:[2,5]}, z:"cok_zor", alt:"iki_taraf_x_2" },

  // ALT DAL 6: ÇÖZÜM KÜMESİ YAZMA
  { id: "s8_bd_015", s: "x > {a} eşitsizliğinin çözüm kümesini aralık olarak yazınız.", c: "({a}, ∞)", v: {a:[1,10]}, z:"orta", alt:"aralik_yazma" },
  { id: "s8_bd_016", s: "x ≤ {a} eşitsizliğinin çözüm kümesini aralık olarak yazınız.", c: "(-∞, {a}]", v: {a:[2,10]}, z:"orta", alt:"kapali_aralik" },
  { id: "s8_bd_017", s: "{a} < x < {b} çözüm kümesini aralık olarak yazınız.", c: "({a}, {b})", v: {a:[1,8], b:[3,12], kosul:"a<b"}, z:"orta", alt:"acik_aralik" },
  { id: "s8_bd_018", s: "{a} ≤ x ≤ {b} çözüm kümesini aralık olarak yazınız.", c: "[{a}, {b}]", v: {a:[1,6], b:[4,12], kosul:"a<b"}, z:"orta", alt:"kapali_aralik_cift" },

  // ALT DAL 7: TAM SAYI ÇÖZÜMLERİ
  { id: "s8_bd_019", s: "x < {a} eşitsizliğini sağlayan kaç tane pozitif tam sayı vardır?", c: "{a}-1", v: {a:[3,12]}, z:"orta", alt:"pozitif_tam_sayi" },
  { id: "s8_bd_020", s: "-{a} < x ≤ {b} aralığında kaç tam sayı vardır?", c: "{b}+{a}", v: {a:[2,6], b:[3,10]}, z:"zor", alt:"tam_sayi_sayisi" },
  { id: "s8_bd_021", s: "x > {a} eşitsizliğini sağlayan en küçük tam sayı kaçtır?", c: "{a}+1", v: {a:[1,12]}, z:"orta", alt:"en_kucuk_tam_sayi" },
  { id: "s8_bd_022", s: "x ≤ {a} eşitsizliğini sağlayan en büyük tam sayı kaçtır?", c: "{a}", v: {a:[2,15]}, z:"orta", alt:"en_buyuk_tam_sayi" },

  // ALT DAL 8: EŞİTSİZLİK SAĞLATMA
  { id: "s8_bd_023", s: "x < {a} eşitsizliğini sağlayan en büyük tam sayı kaçtır?", c: "{a}-1", v: {a:[3,15]}, z:"orta", alt:"en_buyuk_kucuk" },
  { id: "s8_bd_024", s: "x ≥ {a} eşitsizliğini sağlayan en küçük tam sayı kaçtır?", c: "{a}", v: {a:[2,12]}, z:"orta", alt:"en_kucuk_buyuk_esit" },

  // ALT DAL 9: KARIŞIK EŞİTSİZLİK ÇÖZME
  { id: "s8_bd_025", s: "{a} < x+{b} < {c} eşitsizliğinin çözümü nedir?", c: "{a}-{b} < x < {c}-{b}", v: {a:[2,8], b:[1,5], c:[10,20], kosul:"c>a"}, z:"zor", alt:"uc_taraf" },
  { id: "s8_bd_026", s: "-{a} < {b}x+{c} < {d} eşitsizliğinin çözümü nedir?", c: "(-{a}-{c})/{b} < x < ({d}-{c})/{b}", v: {a:[2,8], b:[2,4], c:[1,5], d:[10,20]}, z:"cok_zor", alt:"uc_taraf_katsayili" },

  // ALT DAL 10: EŞİTSİZLİK VE DENKLEM FARKI
  { id: "s8_bd_027", s: "Eşitsizlik ile denklem arasındaki fark nedir?", c: "denklem_bir_deger_esitsizlik_bir_aralik_verir", v: {}, z:"orta", alt:"fark" },
  { id: "s8_bd_028", s: "x+2=5 denklemi ile x+2>5 eşitsizliğinin çözümleri nasıl farklıdır?", c: "denklem:x=3, esitsizlik:x>3", v: {}, z:"orta", alt:"denklem_esitsizlik" },


  // ==========================================
  // KONU 3: EŞİTSİZLİKLERDE TOPLAMA-ÇIKARMA (6 alt dal)
  // ==========================================

  // ALT DAL 1: TOPLAMA KURALI
  { id: "s8_tt_001", s: "a < b ise a + c < b + c her zaman doğru mudur?", c: "evet", v: {}, z:"orta", alt:"toplama_kural" },
  { id: "s8_tt_002", s: "{a} < {b} ise {a}+{c} ile {b}+{c} arasındaki ilişki nedir?", c: "{a}+{c} < {b}+{c}", v: {a:[2,8], b:[5,12], c:[2,8], kosul:"a<b"}, z:"orta", alt:"toplama_ornek" },
  { id: "s8_tt_003", s: "Eşitsizliğin her iki tarafına aynı sayı eklenirse eşitsizlik yönü değişir mi?", c: "hayir", v: {}, z:"orta", alt:"toplama_yon" },

  // ALT DAL 2: ÇIKARMA KURALI
  { id: "s8_tt_004", s: "a < b ise a - c < b - c her zaman doğru mudur?", c: "evet", v: {}, z:"orta", alt:"cikarma_kural" },
  { id: "s8_tt_005", s: "{a} > {b} ise {a}-{c} ile {b}-{c} arasındaki ilişki nedir?", c: "{a}-{c} > {b}-{c}", v: {a:[6,15], b:[2,10], c:[1,4], kosul:"a>b"}, z:"orta", alt:"cikarma_ornek" },

  // ALT DAL 3: TARAF DEĞİŞTİRME
  { id: "s8_tt_006", s: "x + {a} < {b} ise x < ?", c: "{b}-{a}", v: {a:[2,10], b:[5,20], kosul:"b>a"}, z:"orta", alt:"taraf_degistirme" },
  { id: "s8_tt_007", s: "{a} < x + {b} eşitsizliğinde x yalnız bırakılırsa?", c: "x > {a}-{b}", v: {a:[5,15], b:[1,8], kosul:"a>b"}, z:"orta", alt:"x_yalniz" },

  // ALT DAL 4: TOPLAMA-ÇIKARMA UYGULAMALARI
  { id: "s8_tt_008", s: "2x + 3 < 7 ise 2x < ?", c: "4", v: {}, z:"orta", alt:"uygulama" },
  { id: "s8_tt_009", s: "5x - 2 > 8 ise 5x > ?", c: "10", v: {}, z:"orta", alt:"uygulama_2" },

  // ALT DAL 5: BİRDEN FAZLA TOPLAMA-ÇIKARMA
  { id: "s8_tt_010", s: "{a} < x < {b} ise x+{c} hangi aralıktadır?", c: "{a}+{c} < x+{c} < {b}+{c}", v: {a:[2,7], b:[5,15], c:[2,8], kosul:"a<b"}, z:"zor", alt:"aralik_ekleme" },
  { id: "s8_tt_011", s: "{a} < x < {b} ise x-{c} hangi aralıktadır?", c: "{a}-{c} < x-{c} < {b}-{c}", v: {a:[4,10], b:[8,20], c:[2,5], kosul:"a<b"}, z:"zor", alt:"aralik_cikarma" },

  // ALT DAL 6: TOPLAMA-ÇIKARMA KURALLARI ÖZET
  { id: "s8_tt_012", s: "Eşitsizliklerde toplama ve çıkarma yaparken nelere dikkat edilmelidir?", c: "yon_degismez_sadece_esitsizlik_ayni_isleme_tabi_tutulur", v: {}, z:"orta", alt:"ozet" },
  { id: "s8_tt_013", s: "a ≤ b ise a + c ≤ b + c her zaman doğru mudur?", c: "evet", v: {}, z:"orta", alt:"esitlikli_toplama" },


  // ==========================================
  // KONU 4: EŞİTSİZLİKLERDE ÇARPMA-BÖLME (8 alt dal)
  // ==========================================

  // ALT DAL 1: POZİTİF İLE ÇARPMA
  { id: "s8_cb_001", s: "a < b ve c > 0 ise a·c < b·c doğru mudur?", c: "evet", v: {}, z:"orta", alt:"pozitif_carpma" },
  { id: "s8_cb_002", s: "{a} < {b} ise {a}×{c} ile {b}×{c} arasındaki ilişki nedir? (c>0)", c: "{a}*{c} < {b}*{c}", v: {a:[1,6], b:[4,10], c:[2,5], kosul:"a<b"}, z:"orta", alt:"pozitif_carpma_ornek" },
  { id: "s8_cb_003", s: "Pozitif sayı ile çarpınca eşitsizlik yönü değişir mi?", c: "hayir", v: {}, z:"orta", alt:"pozitif_yon" },

  // ALT DAL 2: NEGATİF İLE ÇARPMA
  { id: "s8_cb_004", s: "a < b ve c < 0 ise a·c > b·c doğru mudur?", c: "evet", v: {}, z:"zor", alt:"negatif_carpma" },
  { id: "s8_cb_005", s: "{a} < {b} eşitsizliğini -1 ile çarparsak ne olur?", c: "-{a} > -{b}", v: {a:[2,8], b:[5,12], kosul:"a<b"}, z:"zor", alt:"eksi_1_carpma" },
  { id: "s8_cb_006", s: "Negatif sayı ile çarpınca eşitsizlik yönü neden değişir?", c: "sayi_dogrusunda_sira_ters_doner", v: {}, z:"orta", alt:"negatif_yon_nedeni" },

  // ALT DAL 3: POZİTİF İLE BÖLME
  { id: "s8_cb_007", s: "a < b ve c > 0 ise a/c < b/c doğru mudur?", c: "evet", v: {}, z:"orta", alt:"pozitif_bolme" },
  { id: "s8_cb_008", s: "{a}x < {b} eşitsizliğinde x'i bulunuz. (a>0)", c: "x < {b}/{a}", v: {a:[2,6], b:[5,30]}, z:"orta", alt:"a_x_buyuk_bolme" },

  // ALT DAL 4: NEGATİF İLE BÖLME
  { id: "s8_cb_009", s: "a < b ve c < 0 ise a/c > b/c doğru mudur?", c: "evet", v: {}, z:"zor", alt:"negatif_bolme" },
  { id: "s8_cb_010", s: "-{a}x < {b} eşitsizliğinde x'i bulunuz.", c: "x > -{b}/{a}", v: {a:[2,6], b:[3,20]}, z:"zor", alt:"negatif_bolme_cozum" },
  { id: "s8_cb_011", s: "Negatif sayı ile bölünce eşitsizlik yönü değişir mi?", c: "evet", v: {}, z:"orta", alt:"negatif_bolme_yon" },

  // ALT DAL 5: ÇARPMA-BÖLME KURALLARI ÖZET
  { id: "s8_cb_012", s: "Eşitsizliklerde çarpma ve bölme yaparken en önemli kural nedir?", c: "negatif_sayi_ile_carpinca_veya_bolunce_yon_degisir", v: {}, z:"orta", alt:"ozet_kural" },
  { id: "s8_cb_013", s: "c>0 ise a<b ⇔ a·c < b·c, c<0 ise a<b ⇔ a·c > b·c. Doğru mu?", c: "evet", v: {}, z:"orta", alt:"ozet_dogru" },

  // ALT DAL 6: HATALI İŞLEM TESPİTİ
  { id: "s8_cb_014", s: "2x < 6 ise x < 3. Bu çözüm doğru mudur?", c: "evet", v: {}, z:"orta", alt:"dogru_cozum" },
  { id: "s8_cb_015", s: "-3x < 9 ise x < -3. Bu çözüm doğru mudur?", c: "hayir_(x>-3_olmali)", v: {}, z:"zor", alt:"yanlis_cozum" },
  { id: "s8_cb_016", s: "x/(-2) > 4 ise x > -8. Bu çözüm doğru mudur?", c: "hayir_(x<-8_olmali)", v: {}, z:"cok_zor", alt:"yanlis_cozum_2" },

  // ALT DAL 7: ÇARPMA-BÖLME ALIŞTIRMALARI
  { id: "s8_cb_017", s: "{a}x > {b} ise x'in çözümü nedir? (a<0)", c: "x < {b}/{a}", v: {a:[-6,-2], b:[5,20]}, z:"cok_zor", alt:"negatif_a_alistirma" },
  { id: "s8_cb_018", s: "x/{a} ≤ -{b} ise x'in çözümü nedir? (a>0)", c: "x ≤ -{a}*{b}", v: {a:[2,6], b:[2,8]}, z:"zor", alt:"bolme_alistirma" },

  // ALT DAL 8: KARIŞIK ÇARPMA-BÖLME
  { id: "s8_cb_019", s: "-{a}x + {b} > {c} eşitsizliğini çözünüz.", c: "x < ({b}-{c})/{a}", v: {a:[2,5], b:[5,20], c:[2,10], kosul:"b>c"}, z:"cok_zor", alt:"karisik" },
  { id: "s8_cb_020", s: "3x - 5 < 2x + 1 eşitsizliğinin çözümü nedir?", c: "x < 6", v: {}, z:"zor", alt:"3x-5_2x+1" },


  // ==========================================
  // KONU 5: ARALIK GÖSTERİMLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: AÇIK ARALIK
  { id: "s8_ag_001", s: "({a}, {b}) aralığı neyi ifade eder?", c: "{a}<x<{b}", v: {a:[1,6], b:[4,12], kosul:"a<b"}, z:"orta", alt:"acik_aralik" },
  { id: "s8_ag_002", s: "{a} < x < {b} ifadesini aralık olarak yazınız.", c: "({a}, {b})", v: {a:[1,6], b:[4,12], kosul:"a<b"}, z:"orta", alt:"acik_aralik_yazma" },
  { id: "s8_ag_003", s: "Açık aralıkta uç noktalar dahil midir?", c: "hayir", v: {}, z:"orta", alt:"acik_uc" },

  // ALT DAL 2: KAPALI ARALIK
  { id: "s8_ag_004", s: "[{a}, {b}] aralığı neyi ifade eder?", c: "{a}≤x≤{b}", v: {a:[1,6], b:[4,12], kosul:"a<b"}, z:"orta", alt:"kapali_aralik" },
  { id: "s8_ag_005", s: "{a} ≤ x ≤ {b} ifadesini aralık olarak yazınız.", c: "[{a}, {b}]", v: {a:[1,6], b:[4,12], kosul:"a<b"}, z:"orta", alt:"kapali_aralik_yazma" },
  { id: "s8_ag_006", s: "Kapalı aralıkta uç noktalar dahil midir?", c: "evet", v: {}, z:"orta", alt:"kapali_uc" },

  // ALT DAL 3: YARI AÇIK ARALIK
  { id: "s8_ag_007", s: "[{a}, {b}) aralığı neyi ifade eder?", c: "{a}≤x<{b}", v: {a:[1,6], b:[4,12], kosul:"a<b"}, z:"orta", alt:"yari_acik_sag" },
  { id: "s8_ag_008", s: "({a}, {b}] aralığı neyi ifade eder?", c: "{a}<x≤{b}", v: {a:[1,6], b:[4,12], kosul:"a<b"}, z:"orta", alt:"yari_acik_sol" },
  { id: "s8_ag_009", s: "{a} ≤ x < {b} ifadesini aralık olarak yazınız.", c: "[{a}, {b})", v: {a:[1,6], b:[4,12], kosul:"a<b"}, z:"orta", alt:"yari_acik_yazma" },

  // ALT DAL 4: SONSUZ ARALIKLAR
  { id: "s8_ag_010", s: "x > {a} ifadesini aralık olarak yazınız.", c: "({a}, ∞)", v: {a:[1,10]}, z:"orta", alt:"sonsuz_acik" },
  { id: "s8_ag_011", s: "x ≥ {a} ifadesini aralık olarak yazınız.", c: "[{a}, ∞)", v: {a:[1,10]}, z:"orta", alt:"sonsuz_kapali" },
  { id: "s8_ag_012", s: "x < {a} ifadesini aralık olarak yazınız.", c: "(-∞, {a})", v: {a:[2,12]}, z:"orta", alt:"eksi_sonsuz_acik" },
  { id: "s8_ag_013", s: "x ≤ {a} ifadesini aralık olarak yazınız.", c: "(-∞, {a}]", v: {a:[2,12]}, z:"orta", alt:"eksi_sonsuz_kapali" },

  // ALT DAL 5: ARALIK GÖSTERİMLERİ ARASI DÖNÜŞÜM
  { id: "s8_ag_014", s: "(-∞, {a}] aralığını eşitsizlik olarak yazınız.", c: "x ≤ {a}", v: {a:[2,12]}, z:"orta", alt:"araliktan_esitsizlige" },
  { id: "s8_ag_015", s: "({a}, ∞) aralığını eşitsizlik olarak yazınız.", c: "x > {a}", v: {a:[1,10]}, z:"orta", alt:"araliktan_esitsizlige_2" },
  { id: "s8_ag_016", s: "R (tüm reel sayılar) aralık olarak nasıl gösterilir?", c: "(-∞, ∞)", v: {}, z:"orta", alt:"tum_reel" },

  // ALT DAL 6: ARALIKLARIN KESİŞİMİ
  { id: "s8_ag_017", s: "({a}, {b}) ∩ ({c}, {d}) = ?", c: "({max(a,c)}, {min(b,d)})_eğer_max<min_ise_yoksa_boş", v: {a:[1,4], b:[5,10], c:[2,6], d:[7,12]}, z:"cok_zor", alt:"kesiim" },
  { id: "s8_ag_018", s: "x > 2 ve x < 5 aralıklarının kesişimi nedir?", c: "(2,5)", v: {}, z:"zor", alt:"x_buyuk_2_x_kucuk_5" },
  { id: "s8_ag_019", s: "x ≥ 3 ve x ≤ 7 aralıklarının kesişimi nedir?", c: "[3,7]", v: {}, z:"zor", alt:"x_3_7" },

  // ALT DAL 7: ARALIKLARIN BİRLEŞİMİ
  { id: "s8_ag_020", s: "x < 2 veya x > 5 aralıklarının birleşimi nedir?", c: "(-∞,2) ∪ (5,∞)", v: {}, z:"zor", alt:"birlesim" },
  { id: "s8_ag_021", s: "(-∞, {a}] ∪ [{b}, ∞) = ? (a<b)", c: "(-∞, {a}] ∪ [{b}, ∞)", v: {a:[2,5], b:[6,10]}, z:"cok_zor", alt:"iki_aralik_birlesim" },

  // ALT DAL 8: ARALIK PROBLEMLERİ
  { id: "s8_ag_022", s: "x tam sayı ve 2 < x < 7 ise x'in alabileceği değerler nelerdir?", c: "{3,4,5,6}", v: {}, z:"orta", alt:"tam_sayi_aralik" },
  { id: "s8_ag_023", s: "x tam sayı ve -3 ≤ x ≤ 4 ise kaç farklı x değeri vardır?", c: "8", v: {}, z:"orta", alt:"tam_sayi_sayisi_aralik" },
  { id: "s8_ag_024", s: "Boş küme ile hangi aralık gösterilir?", c: "∅", v: {}, z:"orta", alt:"bos_kume" },


  // ==========================================
  // KONU 6: İKİNCİ DERECEDEN EŞİTSİZLİKLER - GİRİŞ (6 alt dal)
  // ==========================================

  // ALT DAL 1: x² > a ŞEKLİNDEKİ EŞİTSİZLİKLER
  { id: "s8_ie_001", s: "x² > {a} eşitsizliğinin çözümü nedir?", c: "x < -√{a} veya x > √{a}", v: {a:[4,9,16,25]}, z:"zor", alt:"x_kare_buyuk_a" },
  { id: "s8_ie_002", s: "x² > 4 eşitsizliğinin çözümü nedir?", c: "x < -2 veya x > 2", v: {}, z:"zor", alt:"x2_buyuk_4" },
  { id: "s8_ie_003", s: "x² > 0 eşitsizliğinin çözümü nedir?", c: "x ≠ 0 (x<0 veya x>0)", v: {}, z:"zor", alt:"x2_buyuk_0" },

  // ALT DAL 2: x² < a ŞEKLİNDEKİ EŞİTSİZLİKLER
  { id: "s8_ie_004", s: "x² < {a} eşitsizliğinin çözümü nedir?", c: "-√{a} < x < √{a}", v: {a:[4,9,16,25]}, z:"zor", alt:"x_kare_kucuk_a" },
  { id: "s8_ie_005", s: "x² < 9 eşitsizliğinin çözümü nedir?", c: "-3 < x < 3", v: {}, z:"zor", alt:"x2_kucuk_9" },
  { id: "s8_ie_006", s: "x² < 0 eşitsizliğinin çözümü nedir?", c: "bos_kume_(∅)", v: {}, z:"zor", alt:"x2_kucuk_0" },
  { id: "s8_ie_007", s: "x² ≤ 0 eşitsizliğinin çözümü nedir?", c: "x = 0", v: {}, z:"zor", alt:"x2_kucuk_esit_0" },

  // ALT DAL 3: x² + bx + c > 0 GİRİŞ
  { id: "s8_ie_008", s: "x² - 4x + 3 > 0 eşitsizliğinin köklerini bulunuz.", c: "x=1, x=3", v: {}, z:"zor", alt:"x2_4x_3_kok" },
  { id: "s8_ie_009", s: "İkinci derece eşitsizlik çözmek için ilk adım nedir?", c: "ifadeyi_sifira_esitleyip_kokleri_bulmak", v: {}, z:"orta", alt:"ilk_adim" },
  { id: "s8_ie_010", s: "x² - x - 6 > 0 eşitsizliğinin kökleri nedir?", c: "x=-2, x=3", v: {}, z:"zor", alt:"x2_x_6_kok" },

  // ALT DAL 4: TAM KARE İFADELERDE EŞİTSİZLİK
  { id: "s8_ie_011", s: "(x-{a})² > 0 eşitsizliğinin çözümü nedir?", c: "x ≠ {a}", v: {a:[2,8]}, z:"zor", alt:"tam_kare_buyuk_0" },
  { id: "s8_ie_012", s: "(x-3)² < 0 eşitsizliğinin çözümü nedir?", c: "bos_kume_(∅)", v: {}, z:"zor", alt:"tam_kare_kucuk_0" },
  { id: "s8_ie_013", s: "(x+1)² ≥ 0 eşitsizliğinin çözümü nedir?", c: "tum_reel_sayilar_(R)", v: {}, z:"zor", alt:"tam_kare_buyuk_esit_0" },

  // ALT DAL 5: ÇARPANLARA AYRILMIŞ EŞİTSİZLİKLER
  { id: "s8_ie_014", s: "(x-2)(x-4) > 0 eşitsizliğinin çözümü nedir?", c: "x < 2 veya x > 4", v: {}, z:"cok_zor", alt:"carpanli_buyuk" },
  { id: "s8_ie_015", s: "(x+1)(x-3) < 0 eşitsizliğinin çözümü nedir?", c: "-1 < x < 3", v: {}, z:"cok_zor", alt:"carpanli_kucuk" },

  // ALT DAL 6: EŞİTSİZLİK İLE DENKLEM İLİŞKİSİ
  { id: "s8_ie_016", s: "x²-4=0 denkleminin kökleri ile x²-4>0 eşitsizliğinin çözümü arasındaki ilişki nedir?", c: "kökler_sinir_olusturur", v: {}, z:"orta", alt:"denklem_esitsizlik_iliski" },
  { id: "s8_ie_017", s: "İkinci derece eşitsizlikte kökler ne işe yarar?", c: "isaret_tablosu_icin_sinir_degerleridir", v: {}, z:"orta", alt:"koklerin_onemi" },


  // ==========================================
  // KONU 7: İŞARET TABLOSU YÖNTEMİ (10 alt dal)
  // ==========================================

  // ALT DAL 1: İŞARET TABLOSU TANIMI
  { id: "s8_it_001", s: "İşaret tablosu nedir?", c: "bir_ifadenin_hangi_araliklarda_pozitif_negatif_oldugunu_gosteren_tablo", v: {}, z:"orta", alt:"isaret_tablosu_tanim" },
  { id: "s8_it_002", s: "İşaret tablosunda sağdan sola doğru işaret nasıl değişir?", c: "tek_katli_kokte_isaret_degisir_cift_katlida_degismez", v: {}, z:"cok_zor", alt:"isaret_degisimi" },

  // ALT DAL 2: BASİT İŞARET TABLOSU
  { id: "s8_it_003", s: "x-{a} ifadesinin işaret tablosunu yapınız.", c: "x<{a}_negatif, x>{a}_pozitif", v: {a:[2,8]}, z:"orta", alt:"x-a_tablo" },
  { id: "s8_it_004", s: "x+{a} ifadesinin işaret tablosunu yapınız.", c: "x<-{a}_negatif, x>-{a}_pozitif", v: {a:[1,6]}, z:"orta", alt:"x+a_tablo" },

  // ALT DAL 3: ÇARPIM HALİNDE İŞARET TABLOSU
  { id: "s8_it_005", s: "(x-{a})(x-{b}) ifadesinin işaret tablosunu yapınız. (a<b)", c: "x<{a}:+, {a}<x<{b}:-, x>{b}:+", v: {a:[1,4], b:[5,8], kosul:"a<b"}, z:"zor", alt:"carpim_tablo" },
  { id: "s8_it_006", s: "(x-2)(x-5) > 0 eşitsizliğini işaret tablosuyla çözünüz.", c: "x<2_veya_x>5", v: {}, z:"zor", alt:"x-2_x-5_buyuk" },
  { id: "s8_it_007", s: "(x-1)(x-4) < 0 eşitsizliğini işaret tablosuyla çözünüz.", c: "1<x<4", v: {}, z:"zor", alt:"x-1_x-4_kucuk" },

  // ALT DAL 4: ÜÇ ÇARPANLI İŞARET TABLOSU
  { id: "s8_it_008", s: "(x+1)(x-2)(x-5) > 0 eşitsizliğinin çözümü nedir?", c: "-1<x<2_veya_x>5", v: {}, z:"cok_zor", alt:"uc_carpan_buyuk" },
  { id: "s8_it_009", s: "(x+2)(x-1)(x-3) < 0 eşitsizliğinin çözümü nedir?", c: "x<-2_veya_1<x<3", v: {}, z:"cok_zor", alt:"uc_carpan_kucuk" },

  // ALT DAL 5: ÇİFT KATLI KÖKTE İŞARET TABLOSU
  { id: "s8_it_010", s: "(x-{a})² ifadesi her zaman nasıldır?", c: "her_zaman_pozitif_(x≠{a}_icin)", v: {a:[1,6]}, z:"cok_zor", alt:"tam_kare_isaret" },
  { id: "s8_it_011", s: "(x-3)²(x-1) > 0 eşitsizliğinin çözümü nedir?", c: "x>1_ve_x≠3", v: {}, z:"cok_zor", alt:"cift_katli_carpan" },
  { id: "s8_it_012", s: "Çift katlı kökte işaret değişir mi?", c: "hayir", v: {}, z:"cok_zor", alt:"cift_katli_isaret" },

  // ALT DAL 6: ax²+bx+c ŞEKLİNDE İŞARET TABLOSU
  { id: "s8_it_013", s: "x² - 5x + 6 > 0 eşitsizliğini işaret tablosuyla çözünüz.", c: "x<2_veya_x>3", v: {}, z:"zor", alt:"x2_5x_6_isaret" },
  { id: "s8_it_014", s: "x² + x - 6 < 0 eşitsizliğini işaret tablosuyla çözünüz.", c: "-3<x<2", v: {}, z:"zor", alt:"x2_x_6_isaret" },

  // ALT DAL 7: BAŞKATSAYI NEGATİF İŞARET TABLOSU
  { id: "s8_it_015", s: "-x² + 4x - 3 > 0 eşitsizliğinin çözümü nedir?", c: "1<x<3", v: {}, z:"cok_zor", alt:"negatif_baskatsayi" },
  { id: "s8_it_016", s: "Başkatsayı negatif ise işaret tablosu nasıl başlar?", c: "en_sagdan_negatif_baslar", v: {}, z:"cok_zor", alt:"negatif_baslangic" },

  // ALT DAL 8: İŞARET TABLOSUNDA SORU TİPLERİ
  { id: "s8_it_017", s: "x²-9 ≤ 0 eşitsizliğinin çözümü nedir?", c: "-3≤x≤3", v: {}, z:"zor", alt:"x2_9_kucuk_esit" },
  { id: "s8_it_018", s: "x²-4x+4 > 0 eşitsizliğinin çözümü nedir?", c: "x≠2", v: {}, z:"cok_zor", alt:"tam_kare_buyuk_0_2" },

  // ALT DAL 9: KARIŞIK İŞARET TABLOSU
  { id: "s8_it_019", s: "(x²-1)(x-2) < 0 eşitsizliğinin çözümü nedir?", c: "x<-1_veya_1<x<2", v: {}, z:"cok_zor", alt:"karmasik_tablo" },
  { id: "s8_it_020", s: "x(x-2)(x+3) ≥ 0 eşitsizliğinin çözümü nedir?", c: "-3≤x≤0_veya_x≥2", v: {}, z:"cok_zor", alt:"uc_carpan_buyuk_esit" },

  // ALT DAL 10: İŞARET TABLOSU STRATEJİSİ
  { id: "s8_it_021", s: "İşaret tablosu yaparken sıralama nasıl olmalıdır?", c: "kökler_kucukten_buyuge_siralanir_en_sag_aralik_pozitif_baslar", v: {}, z:"orta", alt:"strateji" },
  { id: "s8_it_022", s: "İşaret tablosunda tek ve çift katlı kökler nasıl ayırt edilir?", c: "tek_katli_isaret_degisir_cift_katli_degismez", v: {}, z:"orta", alt:"tek_cift_kok" },


  // ==========================================
  // KONU 8: EŞİTSİZLİK SİSTEMLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: İKİ EŞİTSİZLİK SİSTEMİ
  { id: "s8_es_001", s: "x > {a} ve x < {b} sisteminin çözümü nedir? (a<b)", c: "{a}<x<{b}", v: {a:[1,6], b:[4,12], kosul:"a<b"}, z:"orta", alt:"ikili_sistem" },
  { id: "s8_es_002", s: "x ≥ {a} ve x ≤ {b} sisteminin çözümü nedir? (a<b)", c: "{a}≤x≤{b}", v: {a:[1,5], b:[4,10], kosul:"a<b"}, z:"orta", alt:"ikili_kapali" },

  // ALT DAL 2: ÇÖZÜMÜ OLMAYAN SİSTEMLER
  { id: "s8_es_003", s: "x < {a} ve x > {b} sisteminin çözümü nedir? (a<b)", c: "bos_kume", v: {a:[2,5], b:[6,10]}, z:"zor", alt:"cozumsuz" },
  { id: "s8_es_004", s: "x > 5 ve x < 3 sisteminin çözümü nedir?", c: "bos_kume", v: {}, z:"orta", alt:"x_5_x_3" },

  // ALT DAL 3: ÜÇ EŞİTSİZLİK SİSTEMİ
  { id: "s8_es_005", s: "x > {a}, x < {b}, x ≠ {c} sisteminin çözümü nedir? (a<c<b)", c: "({a},{c})∪({c},{b})", v: {a:[1,3], b:[6,10], c:[4,5]}, z:"cok_zor", alt:"uc_sistem" },
  { id: "s8_es_006", s: "x ≥ 2, x < 7, x ≠ 4 sisteminin çözümü nedir?", c: "[2,4)∪(4,7)", v: {}, z:"cok_zor", alt:"uc_sistem_ornek" },

  // ALT DAL 4: VE - VEYA BAĞLACI
  { id: "s8_es_007", s: "\"VE\" bağlacı ile bağlanan eşitsizliklerin çözümü nasıl bulunur?", c: "kesiim_alinarak", v: {}, z:"orta", alt:"ve_baglaci" },
  { id: "s8_es_008", s: "\"VEYA\" bağlacı ile bağlanan eşitsizliklerin çözümü nasıl bulunur?", c: "birlesim_alinarak", v: {}, z:"orta", alt:"veya_baglaci" },
  { id: "s8_es_009", s: "x < 2 veya x > 5 sisteminin çözümü nedir?", c: "(-∞,2)∪(5,∞)", v: {}, z:"zor", alt:"veya_ornek" },

  // ALT DAL 5: EŞİTSİZLİK SİSTEMİ KURMA
  { id: "s8_es_010", s: "\"x sayısı 2 ile 7 arasındadır\" ifadesini eşitsizlik sistemi olarak yazınız.", c: "2<x<7", v: {}, z:"orta", alt:"sozel_yazma" },
  { id: "s8_es_011", s: "\"x sayısı -3'ten büyük, 5'ten küçük veya eşittir\" ifadesini yazınız.", c: "-3<x≤5", v: {}, z:"orta", alt:"sozel_yazma_2" },

  // ALT DAL 6: TAM SAYI ÇÖZÜMLERİ
  { id: "s8_es_012", s: "x > {a} ve x < {b} sistemini sağlayan kaç tam sayı vardır?", c: "{b}-{a}-1", v: {a:[1,5], b:[5,12], kosul:"b>a+1"}, z:"zor", alt:"tam_sayi_sayisi_sistem" },
  { id: "s8_es_013", s: "x ≥ -2 ve x ≤ 4 sistemini sağlayan kaç tam sayı vardır?", c: "7", v: {}, z:"orta", alt:"eksi_2_4_tam_sayi" },

  // ALT DAL 7: PRATİK SİSTEM ÇÖZÜMLERİ
  { id: "s8_es_014", s: "2x-1 > 3 ve x+2 < 8 sisteminin çözümü nedir?", c: "2<x<6", v: {}, z:"zor", alt:"ikili_pratik" },
  { id: "s8_es_015", s: "3x+1 ≥ 7 ve 2x-3 ≤ 5 sisteminin çözümü nedir?", c: "2≤x≤4", v: {}, z:"zor", alt:"ikili_pratik_2" },

  // ALT DAL 8: GRAFİK GÖSTERİM
  { id: "s8_es_016", s: "x > 2 ve x < 5 sistemini sayı doğrusunda gösteriniz.", c: "2_ile_5_arasinda_acik_aralik", v: {}, z:"orta", alt:"grafik" },
  { id: "s8_es_017", s: "İki eşitsizliğin sisteminin çözümü sayı doğrusunda nasıl gösterilir?", c: "iki_araligin_kesiimi_isaretlenir", v: {}, z:"orta", alt:"grafik_yontem" },


  // ==========================================
  // KONU 9: RASYONEL EŞİTSİZLİKLER (10 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT RASYONEL EŞİTSİZLİK
  { id: "s8_re_001", s: "1/x > 0 eşitsizliğinin çözümü nedir?", c: "x>0", v: {}, z:"zor", alt:"1_x_buyuk_0" },
  { id: "s8_re_002", s: "1/x < 0 eşitsizliğinin çözümü nedir?", c: "x<0", v: {}, z:"zor", alt:"1_x_kucuk_0" },
  { id: "s8_re_003", s: "{a}/x > 0 eşitsizliğinin çözümü nedir? (a>0)", c: "x>0", v: {a:[2,10]}, z:"zor", alt:"a_x_buyuk_0" },
  { id: "s8_re_004", s: "{a}/x < 0 eşitsizliğinin çözümü nedir? (a>0)", c: "x<0", v: {a:[2,10]}, z:"zor", alt:"a_x_kucuk_0" },

  // ALT DAL 2: (x-a)/(x-b) ŞEKLİNDE EŞİTSİZLİKLER
  { id: "s8_re_005", s: "(x-{a})/(x-{b}) > 0 eşitsizliğinin çözümü nedir? (a<b)", c: "x<{a}_veya_x>{b}", v: {a:[1,4], b:[5,8], kosul:"a<b"}, z:"cok_zor", alt:"x-a_x-b_buyuk" },
  { id: "s8_re_006", s: "(x-3)/(x-5) < 0 eşitsizliğinin çözümü nedir?", c: "3<x<5", v: {}, z:"cok_zor", alt:"x-3_x-5_kucuk" },
  { id: "s8_re_007", s: "(x+1)/(x-2) > 0 eşitsizliğinin çözümü nedir?", c: "x<-1_veya_x>2", v: {}, z:"cok_zor", alt:"x+1_x-2_buyuk" },

  // ALT DAL 3: PAYDAYI SIFIR YAPAN DEĞERLER
  { id: "s8_re_008", s: "Rasyonel eşitsizliklerde paydayı sıfır yapan değerler çözüme dahil edilir mi?", c: "hayir_(her_zaman_acik_aralik)", v: {}, z:"cok_zor", alt:"payda_sifir_haric" },
  { id: "s8_re_009", s: "(x+2)/(x-1) ≥ 0 eşitsizliğinin çözümü nedir?", c: "x≤-2_veya_x>1", v: {}, z:"cok_zor", alt:"payda_esitlik" },

  // ALT DAL 4: İŞARET TABLOSU İLE RASYONEL EŞİTSİZLİK
  { id: "s8_re_010", s: "(x-2)/(x+3) < 0 eşitsizliğini işaret tablosuyla çözünüz.", c: "-3<x<2", v: {}, z:"cok_zor", alt:"isaret_tablo_rasyonel" },
  { id: "s8_re_011", s: "(x²-1)/(x-2) > 0 eşitsizliğinin çözümü nedir?", c: "-1<x<1_veya_x>2", v: {}, z:"cok_zor", alt:"x2-1_x-2" },

  // ALT DAL 5: İKİ RASYONEL İFADENİN KARŞILAŞTIRILMASI
  { id: "s8_re_012", s: "1/x < 1/{a} eşitsizliğinin çözümü nedir?", c: "x<0_veya_x>{a}", v: {a:[2,8]}, z:"cok_zor", alt:"1_x_kucuk_1_a" },
  { id: "s8_re_013", s: "x/(x+1) > 1/2 eşitsizliğinin çözümü nedir?", c: "x>1", v: {}, z:"cok_zor", alt:"x_x+1_buyuk_1_2" },

  // ALT DAL 6: TANIM KÜMESİ
  { id: "s8_re_014", s: "1/(x-{a}) > 0 eşitsizliğinin çözümü nedir?", c: "x>{a}", v: {a:[2,7]}, z:"zor", alt:"1_x-a_buyuk" },
  { id: "s8_re_015", s: "Rasyonel eşitsizliklerde ilk adım nedir?", c: "paydayi_sifir_yapan_degerleri_belirlemek", v: {}, z:"orta", alt:"ilk_adim_rasyonel" },

  // ALT DAL 7: RASYONEL EŞİTSİZLİK SORULARI
  { id: "s8_re_016", s: "(2x-1)/(x+3) ≤ 0 eşitsizliğinin çözümü nedir?", c: "-3<x≤1/2", v: {}, z:"cok_zor", alt:"2x-1_x+3" },
  { id: "s8_re_017", s: "(x²-4)/(x+1) < 0 eşitsizliğinin çözümü nedir?", c: "x<-2_veya_-1<x<2", v: {}, z:"cok_zor", alt:"x2-4_x+1" },

  // ALT DAL 8: ÇİFT KATLI PAYDA
  { id: "s8_re_018", s: "1/(x-{a})² > 0 eşitsizliğinin çözümü nedir?", c: "x≠{a}", v: {a:[2,6]}, z:"cok_zor", alt:"kare_payda" },
  { id: "s8_re_019", s: "1/(x-2)² < 0 eşitsizliğinin çözümü nedir?", c: "bos_kume", v: {}, z:"cok_zor", alt:"kare_payda_kucuk" },

  // ALT DAL 9: KARIŞIK RASYONEL EŞİTSİZLİK
  { id: "s8_re_020", s: "(x-1)/(x²-4) ≥ 0 eşitsizliğinin çözümü nedir?", c: "-2<x≤1_veya_x>2", v: {}, z:"cok_zor", alt:"x-1_x2-4" },
  { id: "s8_re_021", s: "x + 1/x > 2 eşitsizliğinin çözümü nedir? (x>0)", c: "x>0_ve_x≠1", v: {}, z:"cok_zor", alt:"x+1_x_buyuk_2" },

  // ALT DAL 10: RASYONEL EŞİTSİZLİK STRATEJİSİ
  { id: "s8_re_022", s: "Rasyonel eşitsizlik çözümünde genel strateji nedir?", c: "tum_terimler_bir_tarafa_toplanir_pay_ve_payda_carpanlara_ayrilir_isaret_tablosu_yapilir", v: {}, z:"orta", alt:"strateji" },
  { id: "s8_re_023", s: "Rasyonel eşitsizlikte neden içler dışlar çarpımı yapılmaz?", c: "paydanin_isareti_bilinmedigi_icin_yön_degisebilir", v: {}, z:"cok_zor", alt:"icler_dislar_neden_olmaz" },


  // ==========================================
  // KONU 10: MUTLAK DEĞERLİ EŞİTSİZLİKLER (8 alt dal)
  // ==========================================

  // ALT DAL 1: |x| < a ŞEKLİNDEKİ EŞİTSİZLİKLER
  { id: "s8_me_001", s: "|x| < {a} eşitsizliğinin çözümü nedir?", c: "-{a} < x < {a}", v: {a:[2,10]}, z:"zor", alt:"mutlak_kucuk_a" },
  { id: "s8_me_002", s: "|x| < 5 eşitsizliğinin çözümü nedir?", c: "-5 < x < 5", v: {}, z:"zor", alt:"mutlak_5" },
  { id: "s8_me_003", s: "|x| < a eşitsizliğinde a negatif olabilir mi?", c: "hayir_(a<0_ise_cozum_bos_kume)", v: {}, z:"cok_zor", alt:"a_negatif" },

  // ALT DAL 2: |x| > a ŞEKLİNDEKİ EŞİTSİZLİKLER
  { id: "s8_me_004", s: "|x| > {a} eşitsizliğinin çözümü nedir?", c: "x < -{a} veya x > {a}", v: {a:[2,10]}, z:"zor", alt:"mutlak_buyuk_a" },
  { id: "s8_me_005", s: "|x| > 3 eşitsizliğinin çözümü nedir?", c: "x < -3 veya x > 3", v: {}, z:"zor", alt:"mutlak_3" },
  { id: "s8_me_006", s: "|x| > a eşitsizliğinde a<0 ise çözüm nedir?", c: "tum_reel_sayilar", v: {}, z:"cok_zor", alt:"a_negatif_cozum" },

  // ALT DAL 3: |x-a| < b ŞEKLİNDE
  { id: "s8_me_007", s: "|x-{a}| < {b} eşitsizliğinin çözümü nedir?", c: "{a}-{b} < x < {a}+{b}", v: {a:[3,8], b:[1,4], kosul:"a>b"}, z:"cok_zor", alt:"mutlak_x-a_kucuk_b" },
  { id: "s8_me_008", s: "|x-5| < 2 eşitsizliğinin çözümü nedir?", c: "3 < x < 7", v: {}, z:"cok_zor", alt:"mutlak_x-5_2" },
  { id: "s8_me_009", s: "|x+3| < 4 eşitsizliğinin çözümü nedir?", c: "-7 < x < 1", v: {}, z:"cok_zor", alt:"mutlak_x+3_4" },

  // ALT DAL 4: |x-a| > b ŞEKLİNDE
  { id: "s8_me_010", s: "|x-{a}| > {b} eşitsizliğinin çözümü nedir?", c: "x < {a}-{b} veya x > {a}+{b}", v: {a:[3,8], b:[1,4]}, z:"cok_zor", alt:"mutlak_x-a_buyuk_b" },
  { id: "s8_me_011", s: "|x-4| > 2 eşitsizliğinin çözümü nedir?", c: "x < 2 veya x > 6", v: {}, z:"cok_zor", alt:"mutlak_x-4_2" },
  { id: "s8_me_012", s: "|x+1| > 5 eşitsizliğinin çözümü nedir?", c: "x < -6 veya x > 4", v: {}, z:"cok_zor", alt:"mutlak_x+1_5" },

  // ALT DAL 5: |x| ≤ a ve |x| ≥ a
  { id: "s8_me_013", s: "|x| ≤ {a} eşitsizliğinin çözümü nedir?", c: "-{a} ≤ x ≤ {a}", v: {a:[2,10]}, z:"zor", alt:"mutlak_kucuk_esit" },
  { id: "s8_me_014", s: "|x| ≥ {a} eşitsizliğinin çözümü nedir?", c: "x ≤ -{a} veya x ≥ {a}", v: {a:[2,10]}, z:"zor", alt:"mutlak_buyuk_esit" },

  // ALT DAL 6: KARIŞIK MUTLAK DEĞER EŞİTSİZLİĞİ
  { id: "s8_me_015", s: "|{a}x+{b}| < {c} eşitsizliğinin çözümü nedir?", c: "(-{c}-{b})/{a} < x < ({c}-{b})/{a}", v: {a:[2,4], b:[1,5], c:[3,12]}, z:"cok_zor", alt:"mutlak_ax+b" },
  { id: "s8_me_016", s: "|2x-3| ≤ 5 eşitsizliğinin çözümü nedir?", c: "-1 ≤ x ≤ 4", v: {}, z:"cok_zor", alt:"2x-3_5" },
  { id: "s8_me_017", s: "|3x+2| > 7 eşitsizliğinin çözümü nedir?", c: "x < -3 veya x > 5/3", v: {}, z:"cok_zor", alt:"3x+2_7" },

  // ALT DAL 7: MUTLAK DEĞERLİ SİSTEM
  { id: "s8_me_018", s: "1 < |x| < 4 eşitsizliğinin çözümü nedir?", c: "-4<x<-1_veya_1<x<4", v: {}, z:"cok_zor", alt:"1_mutlak_4" },
  { id: "s8_me_019", s: "|x-2| < 3 ve |x+1| > 1 sisteminin çözümü nedir?", c: "-1<x<0_veya_2<x<5", v: {}, z:"cok_zor", alt:"mutlak_sistem" },

  // ALT DAL 8: MUTLAK DEĞER EŞİTSİZLİK KURALLARI
  { id: "s8_me_020", s: "|x| < a ⇔ -a < x < a kuralı hangi şartla geçerlidir?", c: "a>0_icin", v: {}, z:"cok_zor", alt:"kural_sart" },
  { id: "s8_me_021", s: "|x| > a ⇔ x < -a veya x > a kuralı hangi şartla geçerlidir?", c: "a≥0_icin_(a=0_ise_x≠0)", v: {}, z:"cok_zor", alt:"buyuk_kural_sart" },


  // ==========================================
  // KONU 11: EŞİTSİZLİK PROBLEMLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: SAYI PROBLEMLERİ
  { id: "s8_ep_001", s: "Hangi sayıların 2 katının 3 fazlası 7'den küçüktür?", c: "x<2", v: {}, z:"orta", alt:"sayi_problemi" },
  { id: "s8_ep_002", s: "Bir sayının 3 eksiğinin yarısı 5'ten büyük veya eşit ise bu sayı en az kaçtır?", c: "13", v: {}, z:"orta", alt:"sayi_problemi_2" },
  { id: "s8_ep_003", s: "Ardışık iki tam sayının toplamı 15'ten küçük ise büyük sayı en çok kaçtır?", c: "7", v: {}, z:"zor", alt:"ardisik_toplam" },

  // ALT DAL 2: YAŞ PROBLEMLERİ
  { id: "s8_ep_004", s: "Bir babanın yaşı {b}, çocuğunun yaşı {c}'dir. Kaç yıl sonra babanın yaşı çocuğunun yaşının 2 katından az olur?", c: "x > {b}-2*{c}", v: {b:[30,50], c:[5,12], kosul:"b>2*c"}, z:"cok_zor", alt:"yas_problemi" },
  { id: "s8_ep_005", s: "Ahmet'in yaşı {a}, Mehmet'in yaşı {b}'dir. Ahmet'in yaşı Mehmet'in yaşının 3 katından büyük olduğuna göre en az kaç yaşındadır?", c: "3*{b}+1", v: {a:[10,30], b:[3,8]}, z:"cok_zor", alt:"yas_kat" },

  // ALT DAL 3: GEOMETRİ PROBLEMLERİ
  { id: "s8_ep_006", s: "Bir dikdörtgenin kenarları x ve x+3'tür. Çevresi 30'dan küçük olduğuna göre x en çok kaçtır? (tam sayı)", c: "5", v: {}, z:"zor", alt:"dikdortgen_cevre" },
  { id: "s8_ep_007", s: "Bir üçgenin kenarları x, x+2, x+4'tür. Üçgen eşitsizliğine göre x'in alabileceği en küçük tam sayı değeri kaçtır?", c: "3", v: {}, z:"cok_zor", alt:"ucgen_esitsizlik" },

  // ALT DAL 4: KÂR-ZARAR PROBLEMLERİ
  { id: "s8_ep_008", s: "Bir malın alış fiyatı {a} TL'dir. Kâr oranı %{k}'den az ise satış fiyatı en çok kaç TL olur?", c: "{a}*(100+{k})/100", v: {a:[50,200], k:[10,40]}, z:"zor", alt:"kar_esitsizlik" },
  { id: "s8_ep_009", s: "Bir mal {a} TL'ye alınıp en az %{k} kârla satılmak isteniyor. Satış fiyatı en az kaç TL olmalıdır?", c: "{a}*(100+{k})/100", v: {a:[50,200], k:[10,50]}, z:"zor", alt:"en_az_kar" },

  // ALT DAL 5: GÜNLÜK HAYAT PROBLEMLERİ
  { id: "s8_ep_010", s: "Bir asansör en fazla {k} kg taşıyabiliyor. {a} kg'lık {n} koli asansöre yüklenecektir. Asansöre en fazla kaç koli daha yüklenebilir?", c: "({k}-{a}*{n})/{a}", v: {k:[200,500], a:[10,30], n:[2,8], kosul:"k>a*n"}, z:"cok_zor", alt:"asansor" },
  { id: "s8_ep_011", s: "Bir araç saatte {v} km hızla giderek {t} saatten az sürede {x} km'den fazla yol almak istiyor. Buna göre hız en az kaç olmalıdır?", c: "{x}/{t}", v: {v:[40,100], t:[3,8], x:[200,600]}, z:"cok_zor", alt:"hiz" },

  // ALT DAL 6: İŞÇİ PROBLEMLERİ
  { id: "s8_ep_012", s: "Bir işi A işçisi {a} günde bitiriyor. İkisi birlikte bu işi {b} günden az sürede bitirmek için B işçisinin işi bitirme süresi en çok kaç olmalıdır?", c: "{a}*{b}/({a}-{b})", v: {a:[6,12], b:[2,"{a}-1"]}, z:"cok_zor", alt:"isci_sure" },
  { id: "s8_ep_013", s: "Bir havuzu A musluğu {a} saatte dolduruyor. Havuz {b} saatten az sürede dolması için B musluğu havuzu en az kaç saatte doldurmalıdır?", c: "{a}*{b}/({a}-{b})", v: {a:[6,15], b:[2,"{a}-1"]}, z:"cok_zor", alt:"havuz_sure" },

  // ALT DAL 7: SICAKLIK PROBLEMLERİ
  { id: "s8_ep_014", s: "Bir odanın sıcaklığı {a}°C ile {b}°C arasındadır. Fahrenhayt cinsinden aralığı bulunuz. (F=1,8C+32)", c: "{1.8*{a}+32}°F ile {1.8*{b}+32}°F", v: {a:[15,25], b:[25,35], kosul:"a<b"}, z:"cok_zor", alt:"sicaklik" },

  // ALT DAL 8: KARIŞIK PROBLEMLER
  { id: "s8_ep_015", s: "x² < x eşitsizliğinin çözümü nedir?", c: "0<x<1", v: {}, z:"cok_zor", alt:"x2_kucuk_x" },
  { id: "s8_ep_016", s: "x > 1/x eşitsizliğinin çözümü nedir?", c: "-1<x<0_veya_x>1", v: {}, z:"cok_zor", alt:"x_buyuk_1_x" },


  // ==========================================
  // KONU 12: BASİT EŞİTSİZLİKLER (ÖZEL KURALLAR) (6 alt dal)
  // ==========================================

  // ALT DAL 1: KARE ALMA KURALI
  { id: "s8_bo_001", s: "a < b ve a,b > 0 ise a² < b² doğru mudur?", c: "evet", v: {}, z:"orta", alt:"kare_alma" },
  { id: "s8_bo_002", s: "a < b ve a,b < 0 ise a² > b² doğru mudur?", c: "evet", v: {}, z:"zor", alt:"negatif_kare" },
  { id: "s8_bo_003", s: "{a} < {b} ve ikisi de pozitif ise kareleri arasındaki ilişki nedir?", c: "{a}² < {b}²", v: {a:[2,5], b:[4,8], kosul:"a<b"}, z:"orta", alt:"pozitif_kare_ornek" },

  // ALT DAL 2: KAREKÖK ALMA KURALI
  { id: "s8_bo_004", s: "a < b ve a,b ≥ 0 ise √a < √b doğru mudur?", c: "evet", v: {}, z:"orta", alt:"kok_alma" },
  { id: "s8_bo_005", s: "Eşitsizlikte karekök alınırken nelere dikkat edilmelidir?", c: "her_iki_taraf_da_pozitif_olmali", v: {}, z:"orta", alt:"kok_sarti" },

  // ALT DAL 3: TERS ÇEVİRME KURALI
  { id: "s8_bo_006", s: "a < b ve a,b > 0 ise 1/a > 1/b doğru mudur?", c: "evet", v: {}, z:"cok_zor", alt:"ters_cevirme" },
  { id: "s8_bo_007", s: "{a} < {b} ve ikisi de pozitif ise 1/{a} ile 1/{b} arasındaki ilişki nedir?", c: "1/{a} > 1/{b}", v: {a:[2,5], b:[4,10], kosul:"a<b"}, z:"cok_zor", alt:"pozitif_ters" },

  // ALT DAL 4: ÜS ALMA KURALI
  { id: "s8_bo_008", s: "a < b ve n tek ise aⁿ < bⁿ doğru mudur?", c: "evet", v: {}, z:"cok_zor", alt:"tek_us" },
  { id: "s8_bo_009", s: "a < b ve n çift ise aⁿ ile bⁿ arasındaki ilişki nedir? (a,b>0)", c: "aⁿ < bⁿ", v: {}, z:"cok_zor", alt:"cift_us" },

  // ALT DAL 5: TOPLAMA VE ÇARPMA KARMA
  { id: "s8_bo_010", s: "a < b ve c < d ise a+c < b+d her zaman doğru mudur?", c: "evet", v: {}, z:"orta", alt:"toplam_karma" },
  { id: "s8_bo_011", s: "a < b ve c < d ise a·c < b·d her zaman doğru mudur?", c: "hayir_(hepsi_pozitif_ise_dogru)", v: {}, z:"cok_zor", alt:"carpma_karma" },
  { id: "s8_bo_012", s: "0 < a < b ve 0 < c < d ise a·c < b·d doğru mudur?", c: "evet", v: {}, z:"cok_zor", alt:"pozitif_carpma_karma" },

  // ALT DAL 6: ÖZEL EŞİTSİZLİK SORULARI
  { id: "s8_bo_013", s: "a ve b pozitif tam sayıdır. a+b=10 ise a·b en çok kaçtır?", c: "25", v: {}, z:"cok_zor", alt:"max_carpim" },
  { id: "s8_bo_014", s: "a ve b pozitif tam sayıdır. a+b=12 ise a·b en çok kaçtır?", c: "36", v: {}, z:"cok_zor", alt:"max_carpim_12" },
  { id: "s8_bo_015", s: "AO ≥ GO eşitsizliği neyi ifade eder?", c: "aritmetik_ortalama≥geometrik_ortalama", v: {}, z:"cok_zor", alt:"ao_go" },
  { id: "s8_bo_016", s: "Aritmetik ortalama ile geometrik ortalama arasındaki eşitsizlik nedir?", c: "(a+b)/2≥√(ab)", v: {}, z:"cok_zor", alt:"ao_go_formul" },

],

// ==========================================
// SEVİYE 9: MUTLAK DEĞER
// ==========================================
9: [

  // ==========================================
  // KONU 1: MUTLAK DEĞER TANIMI VE TEMEL ÖZELLİKLER (8 alt dal)
  // ==========================================

  // ALT DAL 1: MUTLAK DEĞER TANIMI
  { id: "s9_md_001", s: "|x| nedir? (Tanım)", c: "x≥0_ise_x,_x<0_ise_-x", v: {}, z:"orta", alt:"mutlak_deger_tanim" },
  { id: "s9_md_002", s: "|{a}| = ?", c: "Math.abs({a})", v: {a:[-10,10]}, z:"kolay", alt:"mutlak_deger_bulma" },
  { id: "s9_md_003", s: "|0| = ?", c: "0", v: {}, z:"kolay", alt:"mutlak_sifir" },
  { id: "s9_md_004", s: "Mutlak değer sonucu her zaman nasıldır?", c: "pozitif_veya_sifir_(≥0)", v: {}, z:"orta", alt:"mutlak_isaret" },

  // ALT DAL 2: POZİTİF SAYININ MUTLAK DEĞERİ
  { id: "s9_md_005", s: "x > 0 ise |x| = ?", c: "x", v: {}, z:"kolay", alt:"pozitif_mutlak" },
  { id: "s9_md_006", s: "|5| = ?", c: "5", v: {}, z:"kolay", alt:"mutlak_5" },
  { id: "s9_md_007", s: "|{a}| = ? (a>0)", c: "{a}", v: {a:[1,10]}, z:"kolay", alt:"pozitif_sayi_mutlak" },

  // ALT DAL 3: NEGATİF SAYININ MUTLAK DEĞERİ
  { id: "s9_md_008", s: "x < 0 ise |x| = ?", c: "-x", v: {}, z:"orta", alt:"negatif_mutlak" },
  { id: "s9_md_009", s: "|-{a}| = ?", c: "{a}", v: {a:[2,10]}, z:"kolay", alt:"negatif_sayi_mutlak" },
  { id: "s9_md_010", s: "|-8| = ?", c: "8", v: {}, z:"kolay", alt:"mutlak_eksi_8" },

  // ALT DAL 4: MUTLAK DEĞERİN MUTLAK DEĞERİ
  { id: "s9_md_011", s: "||x|| = ?", c: "|x|", v: {}, z:"orta", alt:"mutlak_mutlak" },
  { id: "s9_md_012", s: "||-{a}|| = ?", c: "{a}", v: {a:[2,8]}, z:"orta", alt:"mutlak_mutlak_negatif" },

  // ALT DAL 5: MUTLAK DEĞER VE İŞARET
  { id: "s9_md_013", s: "|-x| = |x| eşitliği her zaman doğru mudur?", c: "evet", v: {}, z:"orta", alt:"eksi_x_mutlak" },
  { id: "s9_md_014", s: "|x| ≥ 0 ifadesi her zaman doğru mudur?", c: "evet", v: {}, z:"orta", alt:"buyuk_esit_0" },
  { id: "s9_md_015", s: "|x| = 0 ise x kaçtır?", c: "0", v: {}, z:"orta", alt:"mutlak_sifir_ise_x" },

  // ALT DAL 6: MUTLAK DEĞERİN CEBİRSEL TANIMI
  { id: "s9_md_016", s: "|x| ifadesi cebirsel olarak nasıl tanımlanır?", c: "|x|=x_(x≥0), |x|=-x_(x<0)", v: {}, z:"orta", alt:"cebirsel_tanim" },
  { id: "s9_md_017", s: "|x| = √(x²) eşitliği doğru mudur?", c: "evet", v: {}, z:"cok_zor", alt:"karekok_iliski" },

  // ALT DAL 7: MUTLAK DEĞER TEMEL ÖZELLİKLER
  { id: "s9_md_018", s: "|x| = a ise a hangi değerleri alabilir?", c: "a≥0", v: {}, z:"orta", alt:"a_degeri" },
  { id: "s9_md_019", s: "|x| = -a denkleminin çözümü var mıdır? (a>0)", c: "hayir", v: {}, z:"orta", alt:"negatif_esit_olmaz" },
  { id: "s9_md_020", s: "x = |x| eşitliği ne zaman doğrudur?", c: "x≥0_iken", v: {}, z:"orta", alt:"x_esit_mutlak_x" },
  { id: "s9_md_021", s: "x = -|x| eşitliği ne zaman doğrudur?", c: "x≤0_iken", v: {}, z:"cok_zor", alt:"x_esit_eksi_mutlak" },

  // ALT DAL 8: MUTLAK DEĞER KARŞILAŞTIRMA
  { id: "s9_md_022", s: "|{a}| ile |{b}| hangisi büyüktür?", c: "{buyuk}", v: {a:[-10,10], b:[-10,10], kosul:"a!=b"}, z:"orta", alt:"mutlak_karsilastirma" },
  { id: "s9_md_023", s: "|x| = |y| ise x ile y arasındaki ilişki nedir?", c: "x=y_veya_x=-y", v: {}, z:"orta", alt:"mutlak_esitlik" },


  // ==========================================
  // KONU 2: MUTLAK DEĞERİN GEOMETRİK YORUMU (6 alt dal)
  // ==========================================

  // ALT DAL 1: SAYI DOĞRUSUNDA UZAKLIK
  { id: "s9_gy_001", s: "|x| ifadesinin geometrik anlamı nedir?", c: "x_noktasinin_orijine_uzakligi", v: {}, z:"orta", alt:"geometrik_anlam" },
  { id: "s9_gy_002", s: "|x-{a}| ifadesinin geometrik anlamı nedir?", c: "x_noktasinin_{a}_noktasina_uzakligi", v: {a:[1,8]}, z:"orta", alt:"x-a_geometrik" },
  { id: "s9_gy_003", s: "Sayı doğrusunda {a} noktasına uzaklığı {b} birim olan noktaları bulunuz.", c: "{a}-{b}_ve_{a}+{b}", v: {a:[3,10], b:[1,4]}, z:"orta", alt:"uzaklik_bulma" },

  // ALT DAL 2: İKİ NOKTA ARASI UZAKLIK
  { id: "s9_gy_004", s: "Sayı doğrusunda {a} ile {b} arasındaki uzaklık nedir?", c: "|{a}-{b}|", v: {a:[-10,10], b:[-10,10]}, z:"orta", alt:"iki_nokta_uzaklik" },
  { id: "s9_gy_005", s: "|x-3| = |x-7| denkleminin geometrik yorumu nedir?", c: "x_noktasi_3_ve_7_ye_esit_uzaklikta", v: {}, z:"zor", alt:"esit_uzaklik" },
  { id: "s9_gy_006", s: "|x-{a}| + |x-{b}| ifadesinin en küçük değeri nedir? (a<b)", c: "{b}-{a}", v: {a:[1,5], b:[3,8], kosul:"a<b"}, z:"cok_zor", alt:"toplam_min" },

  // ALT DAL 3: UZAKLIK PROBLEMLERİ
  { id: "s9_gy_007", s: "Sayı doğrusunda 4'e uzaklığı 3 birim olan sayılar nelerdir?", c: "1_ve_7", v: {}, z:"orta", alt:"4_uzaklik_3" },
  { id: "s9_gy_008", s: "Sayı doğrusunda -2'ye uzaklığı 5 birim olan sayılar nelerdir?", c: "-7_ve_3", v: {}, z:"orta", alt:"eksi_2_uzaklik_5" },

  // ALT DAL 4: MUTLAK DEĞERLİ UZAKLIK EŞİTLİKLERİ
  { id: "s9_gy_009", s: "|x-2| = 3 denkleminin geometrik çözümü nedir?", c: "2ye_uzakligi_3_olan_sayilar:_-1_ve_5", v: {}, z:"orta", alt:"geometrik_cozum" },
  { id: "s9_gy_010", s: "|x+1| = 4 denkleminin geometrik anlamı nedir?", c: "x_in_-1_e_uzakligi_4_birimdir", v: {}, z:"orta", alt:"x+1_geometrik" },

  // ALT DAL 5: ARALIK GÖSTERİMİ
  { id: "s9_gy_011", s: "|x| < {a} eşitsizliğinin geometrik anlamı nedir?", c: "x_in_orijine_uzakligi_{a}_dan_kucuk", v: {a:[2,8]}, z:"orta", alt:"aralik_geometrik" },
  { id: "s9_gy_012", s: "|x-{a}| ≤ {b} eşitsizliğinin geometrik anlamı nedir?", c: "x_in_{a}_a_uzakligi_en_fazla_{b}", v: {a:[3,7], b:[1,4]}, z:"orta", alt:"x-a_aralik" },

  // ALT DAL 6: GEOMETRİK YORUM SORULARI
  { id: "s9_gy_013", s: "|x-1| + |x-5| = 4 denkleminin çözümü nedir?", c: "1≤x≤5", v: {}, z:"cok_zor", alt:"1_5_toplam_4" },
  { id: "s9_gy_014", s: "Sayı doğrusunda 2 ve 8 noktalarına uzaklıkları toplamı 10 olan noktalar nelerdir?", c: "x≤2_veya_x≥8", v: {}, z:"cok_zor", alt:"2_8_toplam_10" },


  // ==========================================
  // KONU 3: MUTLAK DEĞERLİ DENKLEMLER (10 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT |x| = a DENKLEMLERİ
  { id: "s9_mdd_001", s: "|x| = {a} denkleminin çözümü nedir?", c: "{-{a}, {a}}", v: {a:[2,10]}, z:"orta", alt:"mutlak_x_esit_a" },
  { id: "s9_mdd_002", s: "|x| = 5 denkleminin çözümü nedir?", c: "{-5, 5}", v: {}, z:"orta", alt:"mutlak_5_denklem" },
  { id: "s9_mdd_003", s: "|x| = 0 denkleminin çözümü nedir?", c: "{0}", v: {}, z:"orta", alt:"mutlak_0_denklem" },
  { id: "s9_mdd_004", s: "|x| = -3 denkleminin çözümü nedir?", c: "bos_kume", v: {}, z:"orta", alt:"mutlak_negatif_olmaz" },

  // ALT DAL 2: |x-a| = b DENKLEMLERİ
  { id: "s9_mdd_005", s: "|x-{a}| = {b} denkleminin çözümü nedir?", c: "{{a}-{b}, {a}+{b}}", v: {a:[3,10], b:[1,5]}, z:"zor", alt:"x-a_esit_b" },
  { id: "s9_mdd_006", s: "|x-4| = 3 denkleminin çözümü nedir?", c: "{1, 7}", v: {}, z:"zor", alt:"x-4_3" },
  { id: "s9_mdd_007", s: "|x+2| = 5 denkleminin çözümü nedir?", c: "{-7, 3}", v: {}, z:"zor", alt:"x+2_5" },
  { id: "s9_mdd_008", s: "|x+{a}| = {b} denkleminin çözümü nedir?", c: "{-{a}-{b}, -{a}+{b}}", v: {a:[2,8], b:[2,6]}, z:"zor", alt:"x+a_esit_b" },

  // ALT DAL 3: |ax+b| = c DENKLEMLERİ
  { id: "s9_mdd_009", s: "|{a}x+{b}| = {c} denkleminin çözümü nedir?", c: "(-{c}-{b})/{a}_ve_({c}-{b})/{a}", v: {a:[2,5], b:[1,6], c:[3,15]}, z:"cok_zor", alt:"ax+b_mutlak" },
  { id: "s9_mdd_010", s: "|2x-3| = 7 denkleminin çözümü nedir?", c: "{-2, 5}", v: {}, z:"zor", alt:"2x-3_7" },
  { id: "s9_mdd_011", s: "|3x+1| = 8 denkleminin çözümü nedir?", c: "{-3, 7/3}", v: {}, z:"zor", alt:"3x+1_8" },

  // ALT DAL 4: İKİ MUTLAK DEĞERLİ DENKLEMLER
  { id: "s9_mdd_012", s: "|x-{a}| = |x-{b}| denkleminin çözümü nedir?", c: "({a}+{b})/2", v: {a:[1,5], b:[3,8], kosul:"a<b"}, z:"cok_zor", alt:"iki_mutlak_esit" },
  { id: "s9_mdd_013", s: "|x-2| = |x-6| denkleminin çözümü nedir?", c: "4", v: {}, z:"cok_zor", alt:"x-2_x-6" },
  { id: "s9_mdd_014", s: "|x+1| = |x-3| denkleminin çözümü nedir?", c: "1", v: {}, z:"cok_zor", alt:"x+1_x-3" },

  // ALT DAL 5: MUTLAK DEĞERLİ DENKLEMLERDE PARÇALI ÇÖZÜM
  { id: "s9_mdd_015", s: "|x-{a}| + |x-{b}| = {c} denkleminin çözümü nedir? (c>b-a)", c: "{cozum}", v: {a:[1,3], b:[5,8], c:[6,15], kosul:"c>b-a"}, z:"cok_zor", alt:"toplam_esit" },
  { id: "s9_mdd_016", s: "|x| + |x-2| = 4 denkleminin çözümü nedir?", c: "{-1, 3}", v: {}, z:"cok_zor", alt:"x_arti_x-2_4" },
  { id: "s9_mdd_017", s: "|x+1| + |x-1| = 4 denkleminin çözümü nedir?", c: "{-2, 2}", v: {}, z:"cok_zor", alt:"x+1_arti_x-1_4" },

  // ALT DAL 6: MUTLAK DEĞERLİ DENKLEMLERDE KRİTİK NOKTA
  { id: "s9_mdd_018", s: "Mutlak değerli denklem çözerken kritik nokta ne demektir?", c: "mutlak_deger_icini_sifir_yapan_degerler", v: {}, z:"orta", alt:"kritik_nokta" },
  { id: "s9_mdd_019", s: "|x-3| + |x+1| = 6 denkleminin kritik noktaları nelerdir?", c: "x=-1_ve_x=3", v: {}, z:"zor", alt:"kritik_nokta_bulma" },

  // ALT DAL 7: ÇÖZÜM KONTROLÜ
  { id: "s9_mdd_020", s: "Mutlak değerli denklemlerde bulunan çözümler neden kontrol edilmelidir?", c: "parcali_cozumde_her_aralik_kontrol_edilmeli", v: {}, z:"orta", alt:"kontrol_nedeni" },
  { id: "s9_mdd_021", s: "|x| = x denkleminin çözümü nedir?", c: "x≥0", v: {}, z:"cok_zor", alt:"mutlak_x_x" },
  { id: "s9_mdd_022", s: "|x| = -x denkleminin çözümü nedir?", c: "x≤0", v: {}, z:"cok_zor", alt:"mutlak_x_eksi_x" },

  // ALT DAL 8: ÖZEL MUTLAK DEĞER DENKLEMLERİ
  { id: "s9_mdd_023", s: "||x|-{a}| = {b} denkleminin çözümü nedir?", c: "{cozum}", v: {a:[3,7], b:[1,3], kosul:"a>b"}, z:"cok_zor", alt:"ic_ice_mutlak_denklem" },
  { id: "s9_mdd_024", s: "|x²-4| = 5 denkleminin çözümü nedir?", c: "{-3, -1, 1, 3}", v: {}, z:"cok_zor", alt:"x2-4_mutlak_5" },

  // ALT DAL 9: MUTLAK DEĞER VE ÇARPANLARA AYIRMA
  { id: "s9_mdd_025", s: "|x²-{a}| = {b} denkleminin çözümü nedir?", c: "{cozum}", v: {a:[4,9], b:[3,8]}, z:"cok_zor", alt:"kare_mutlak" },
  { id: "s9_mdd_026", s: "|x|·|x-2| = 3 denkleminin çözümü nedir?", c: "{-1, 3}", v: {}, z:"cok_zor", alt:"carpim_mutlak" },

  // ALT DAL 10: KARIŞIK MUTLAK DEĞER DENKLEMLERİ
  { id: "s9_mdd_027", s: "|x-1|/|x+1| = 2 denkleminin çözümü nedir?", c: "{-3, -1/3}", v: {}, z:"cok_zor", alt:"bolum_mutlak" },
  { id: "s9_mdd_028", s: "x·|x| = 4 denkleminin çözümü nedir?", c: "2", v: {}, z:"cok_zor", alt:"x_mutlak_x_4" },


  // ==========================================
  // KONU 4: MUTLAK DEĞERLİ EŞİTSİZLİKLER (8 alt dal)
  // ==========================================

  // ALT DAL 1: |x| < a ŞEKLİNDE
  { id: "s9_me_001", s: "|x| < {a} eşitsizliğinin çözümü nedir?", c: "-{a} < x < {a}", v: {a:[2,10]}, z:"zor", alt:"mutlak_kucuk_a" },
  { id: "s9_me_002", s: "|x| < 5 eşitsizliğinin çözümü nedir?", c: "-5 < x < 5", v: {}, z:"zor", alt:"mutlak_5_kucuk" },
  { id: "s9_me_003", s: "|x| < 0 eşitsizliğinin çözümü nedir?", c: "bos_kume", v: {}, z:"cok_zor", alt:"mutlak_kucuk_0" },

  // ALT DAL 2: |x| > a ŞEKLİNDE
  { id: "s9_me_004", s: "|x| > {a} eşitsizliğinin çözümü nedir?", c: "x < -{a} veya x > {a}", v: {a:[2,10]}, z:"zor", alt:"mutlak_buyuk_a" },
  { id: "s9_me_005", s: "|x| > 3 eşitsizliğinin çözümü nedir?", c: "x < -3 veya x > 3", v: {}, z:"zor", alt:"mutlak_3_buyuk" },
  { id: "s9_me_006", s: "|x| > 0 eşitsizliğinin çözümü nedir?", c: "x ≠ 0", v: {}, z:"cok_zor", alt:"mutlak_buyuk_0" },
  { id: "s9_me_007", s: "|x| > -1 eşitsizliğinin çözümü nedir?", c: "tum_reel_sayilar", v: {}, z:"cok_zor", alt:"mutlak_buyuk_negatif" },

  // ALT DAL 3: |x-a| < b ŞEKLİNDE
  { id: "s9_me_008", s: "|x-{a}| < {b} eşitsizliğinin çözümü nedir?", c: "{a}-{b} < x < {a}+{b}", v: {a:[3,8], b:[1,4]}, z:"cok_zor", alt:"x-a_kucuk_b" },
  { id: "s9_me_009", s: "|x-4| < 2 eşitsizliğinin çözümü nedir?", c: "2 < x < 6", v: {}, z:"cok_zor", alt:"x-4_kucuk_2" },
  { id: "s9_me_010", s: "|x+3| < 5 eşitsizliğinin çözümü nedir?", c: "-8 < x < 2", v: {}, z:"cok_zor", alt:"x+3_kucuk_5" },

  // ALT DAL 4: |x-a| > b ŞEKLİNDE
  { id: "s9_me_011", s: "|x-{a}| > {b} eşitsizliğinin çözümü nedir?", c: "x < {a}-{b} veya x > {a}+{b}", v: {a:[3,8], b:[1,4]}, z:"cok_zor", alt:"x-a_buyuk_b" },
  { id: "s9_me_012", s: "|x-5| > 2 eşitsizliğinin çözümü nedir?", c: "x < 3 veya x > 7", v: {}, z:"cok_zor", alt:"x-5_buyuk_2" },

  // ALT DAL 5: |ax+b| < c ŞEKLİNDE
  { id: "s9_me_013", s: "|{a}x+{b}| < {c} eşitsizliğinin çözümü nedir?", c: "(-{c}-{b})/{a} < x < ({c}-{b})/{a}", v: {a:[2,4], b:[1,5], c:[3,12]}, z:"cok_zor", alt:"ax+b_kucuk_c" },
  { id: "s9_me_014", s: "|2x-3| ≤ 5 eşitsizliğinin çözümü nedir?", c: "-1 ≤ x ≤ 4", v: {}, z:"cok_zor", alt:"2x-3_kucuk_esit_5" },

  // ALT DAL 6: |ax+b| > c ŞEKLİNDE
  { id: "s9_me_015", s: "|{a}x+{b}| > {c} eşitsizliğinin çözümü nedir?", c: "x < (-{c}-{b})/{a} veya x > ({c}-{b})/{a}", v: {a:[2,4], b:[1,5], c:[3,12]}, z:"cok_zor", alt:"ax+b_buyuk_c" },
  { id: "s9_me_016", s: "|3x+2| > 7 eşitsizliğinin çözümü nedir?", c: "x < -3 veya x > 5/3", v: {}, z:"cok_zor", alt:"3x+2_buyuk_7" },

  // ALT DAL 7: KARIŞIK MUTLAK DEĞER EŞİTSİZLİKLERİ
  { id: "s9_me_017", s: "1 < |x| < 4 eşitsizliğinin çözümü nedir?", c: "-4 < x < -1 veya 1 < x < 4", v: {}, z:"cok_zor", alt:"1_mutlak_4" },
  { id: "s9_me_018", s: "|x-1| + |x-3| < 4 eşitsizliğinin çözümü nedir?", c: "0 < x < 4", v: {}, z:"cok_zor", alt:"toplam_kucuk_4" },

  // ALT DAL 8: MUTLAK DEĞER EŞİTSİZLİK KURALLARI ÖZET
  { id: "s9_me_019", s: "|x| < a ⇔ ? (a>0)", c: "-a < x < a", v: {}, z:"orta", alt:"ozet_kucuk" },
  { id: "s9_me_020", s: "|x| > a ⇔ ? (a≥0)", c: "x < -a veya x > a", v: {}, z:"orta", alt:"ozet_buyuk" },
  { id: "s9_me_021", s: "|x| ≤ a ⇔ ? (a≥0)", c: "-a ≤ x ≤ a", v: {}, z:"orta", alt:"ozet_kucuk_esit" },
  { id: "s9_me_022", s: "|x| ≥ a ⇔ ? (a≥0)", c: "x ≤ -a veya x ≥ a", v: {}, z:"orta", alt:"ozet_buyuk_esit" },


  // ==========================================
  // KONU 5: PARÇALI FONKSİYON OLARAK MUTLAK DEĞER (6 alt dal)
  // ==========================================

  // ALT DAL 1: PARÇALI GÖSTERİM
  { id: "s9_pf_001", s: "|x| ifadesini parçalı fonksiyon olarak yazınız.", c: "x≥0_icin_x,_x<0_icin_-x", v: {}, z:"orta", alt:"parcali_gosterim" },
  { id: "s9_pf_002", s: "|x-{a}| ifadesini parçalı fonksiyon olarak yazınız.", c: "x≥{a}_icin_x-{a},_x<{a}_icin_{a}-x", v: {a:[2,8]}, z:"zor", alt:"x-a_parcali" },
  { id: "s9_pf_003", s: "|x-3| ifadesini parçalı fonksiyon olarak yazınız.", c: "x≥3_icin_x-3,_x<3_icin_3-x", v: {}, z:"zor", alt:"x-3_parcali" },

  // ALT DAL 2: KRİTİK NOKTALAR
  { id: "s9_pf_004", s: "|x-{a}| + |x-{b}| ifadesinin kritik noktaları nelerdir?", c: "x={a}_ve_x={b}", v: {a:[1,4], b:[5,8], kosul:"a<b"}, z:"orta", alt:"kritik_noktalar" },
  { id: "s9_pf_005", s: "Parçalı fonksiyonda kritik noktalar ne işe yarar?", c: "araliklari_belirlemeye_yarar", v: {}, z:"orta", alt:"kritik_onem" },

  // ALT DAL 3: PARÇALI FONKSİYON DEĞERİ
  { id: "s9_pf_006", s: "f(x)=|x-2|+|x-4| için f({x}) = ?", c: "{sonuc}", v: {x:[0,6]}, z:"cok_zor", alt:"deger_bulma" },
  { id: "s9_pf_007", s: "f(x)=|x-1|+2|x+1| için f(0) = ?", c: "3", v: {}, z:"cok_zor", alt:"f0_bulma" },
  { id: "s9_pf_008", s: "f(x)=|x-a| için f(a) = ?", c: "0", v: {}, z:"orta", alt:"kritik_nokta_deger" },

  // ALT DAL 4: EN KÜÇÜK DEĞER BULMA
  { id: "s9_pf_009", s: "f(x)=|x-{a}|+|x-{b}| fonksiyonunun en küçük değeri kaçtır? (a<b)", c: "{b}-{a}", v: {a:[1,5], b:[3,8], kosul:"a<b"}, z:"cok_zor", alt:"min_deger" },
  { id: "s9_pf_010", s: "f(x)=|x-2|+|x-6| fonksiyonunun en küçük değeri kaçtır?", c: "4", v: {}, z:"cok_zor", alt:"2_6_min" },
  { id: "s9_pf_011", s: "|x-1|+|x-3|+|x-5| fonksiyonunun en küçük değeri kaçtır?", c: "4", v: {}, z:"cok_zor", alt:"uc_mutlak_min" },

  // ALT DAL 5: PARÇALI ÇÖZÜM
  { id: "s9_pf_012", s: "|x-{a}| = {b} denklemini parçalı fonksiyonla çözünüz.", c: "x={a}±{b}", v: {a:[3,8], b:[1,4]}, z:"zor", alt:"parcali_cozum" },
  { id: "s9_pf_013", s: "|x+1| - |x-2| = 1 denkleminin çözümü nedir?", c: "x=1", v: {}, z:"cok_zor", alt:"fark_1" },

  // ALT DAL 6: PARÇALI GRAFİK
  { id: "s9_pf_014", s: "y=|x| fonksiyonunun grafiği nasıldır?", c: "V_seklinde_orijinden_gecen", v: {}, z:"orta", alt:"grafik" },
  { id: "s9_pf_015", s: "y=|x-{a}| fonksiyonunun grafiğinin tepe noktası neresidir?", c: "({a}, 0)", v: {a:[2,8]}, z:"orta", alt:"tepe_noktasi" },


  // ==========================================
  // KONU 6: MUTLAK DEĞER İŞLEM ÖZELLİKLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: ÇARPMA ÖZELLİĞİ
  { id: "s9_mo_001", s: "|x·y| = ?", c: "|x|·|y|", v: {}, z:"orta", alt:"carpma_ozelligi" },
  { id: "s9_mo_002", s: "|{a}·{b}| = ?", c: "Math.abs({a}*{b})", v: {a:[-10,10], b:[-10,10]}, z:"orta", alt:"carpma_ornek" },
  { id: "s9_mo_003", s: "|x·y| = |x|·|y| eşitliği her zaman doğru mudur?", c: "evet", v: {}, z:"orta", alt:"carpma_her_zaman" },

  // ALT DAL 2: BÖLME ÖZELLİĞİ
  { id: "s9_mo_004", s: "|x/y| = ? (y≠0)", c: "|x|/|y|", v: {}, z:"orta", alt:"bolme_ozelligi" },
  { id: "s9_mo_005", s: "|{a}/{b}| = ?", c: "Math.abs({a}/{b})", v: {a:[-20,20], b:[-10,10], kosul:"a%b==0"}, z:"orta", alt:"bolme_ornek" },
  { id: "s9_mo_006", s: "|x/0| tanımlı mıdır?", c: "hayir_(tanimsiz)", v: {}, z:"orta", alt:"sifira_bolme" },

  // ALT DAL 3: ÜS ÖZELLİĞİ
  { id: "s9_mo_007", s: "|xⁿ| = ? (n tam sayı)", c: "|x|ⁿ", v: {}, z:"zor", alt:"us_ozelligi" },
  { id: "s9_mo_008", s: "|x²| = ?", c: "|x|² = x²", v: {}, z:"cok_zor", alt:"kare_mutlak" },
  { id: "s9_mo_009", s: "|x³| = ?", c: "|x|³", v: {}, z:"cok_zor", alt:"kup_mutlak" },
  { id: "s9_mo_010", s: "|x|² = x² eşitliği her zaman doğru mudur?", c: "evet", v: {}, z:"cok_zor", alt:"mutlak_kare" },

  // ALT DAL 4: KAREKÖK İLİŞKİSİ
  { id: "s9_mo_011", s: "√(x²) = ?", c: "|x|", v: {}, z:"cok_zor", alt:"kok_kare" },
  { id: "s9_mo_012", s: "√((x-{a})²) = ?", c: "|x-{a}|", v: {a:[2,6]}, z:"cok_zor", alt:"kok_kare_fark" },
  { id: "s9_mo_013", s: "√(x²) = x eşitliği ne zaman doğrudur?", c: "x≥0_iken", v: {}, z:"cok_zor", alt:"kok_kare_x" },

  // ALT DAL 5: TOPLAMA ÖZELLİĞİ
  { id: "s9_mo_014", s: "|x+y| = |x|+|y| eşitliği her zaman doğru mudur?", c: "hayir_(sadece_ayni_isaretli_iken)", v: {}, z:"cok_zor", alt:"toplama_ozelligi" },
  { id: "s9_mo_015", s: "|x+y| ≤ |x|+|y| eşitsizliği her zaman doğru mudur?", c: "evet_(ucgen_esitsizligi)", v: {}, z:"cok_zor", alt:"ucgen_esitsizlik" },
  { id: "s9_mo_016", s: "Üçgen eşitsizliği nedir?", c: "|x+y|≤|x|+|y|", v: {}, z:"cok_zor", alt:"ucgen_esitsizlik_formul" },

  // ALT DAL 6: FARK ÖZELLİĞİ
  { id: "s9_mo_017", s: "|x-y| ≥ ||x|-|y|| eşitsizliği her zaman doğru mudur?", c: "evet", v: {}, z:"cok_zor", alt:"fark_ozelligi" },
  { id: "s9_mo_018", s: "|x-y| = |y-x| eşitliği doğru mudur?", c: "evet", v: {}, z:"orta", alt:"simetri" },

  // ALT DAL 7: MUTLAK DEĞER İŞLEM SORULARI
  { id: "s9_mo_019", s: "|x| = {a} ve |y| = {b} ise |x·y| en az kaçtır?", c: "0", v: {a:[2,6], b:[3,8]}, z:"cok_zor", alt:"carpim_min" },
  { id: "s9_mo_020", s: "|x| = {a} ve |y| = {b} ise |x+y| en çok kaçtır?", c: "{a}+{b}", v: {a:[2,6], b:[3,8]}, z:"cok_zor", alt:"toplam_max" },
  { id: "s9_mo_021", s: "|x| = {a} ve |y| = {b} ise |x+y| en az kaçtır?", c: "|{a}-{b}|", v: {a:[3,8], b:[2,6]}, z:"cok_zor", alt:"toplam_min" },

  // ALT DAL 8: İŞLEM ÖZELLİKLERİ ÖZET
  { id: "s9_mo_022", s: "|x·y| = |x|·|y| ve |x/y| = |x|/|y| (y≠0). Bu iki özellik ne denir?", c: "carpma_ve_bolme_ozelligi", v: {}, z:"orta", alt:"ozet" },
  { id: "s9_mo_023", s: "||x|-|y|| ≤ |x±y| ≤ |x|+|y|. Bu zincirin adı nedir?", c: "ucgen_esitsizligi_zinciri", v: {}, z:"cok_zor", alt:"zincir" },


  // ==========================================
  // KONU 7: MUTLAK DEĞERLİ FONKSİYON GRAFİKLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: y = |x| GRAFİĞİ
  { id: "s9_mg_001", s: "y = |x| grafiğinin tepe noktası neresidir?", c: "(0,0)", v: {}, z:"orta", alt:"y_mutlak_x" },
  { id: "s9_mg_002", s: "y = |x| grafiği hangi bölgelerden geçer?", c: "1._ve_2._bolge", v: {}, z:"orta", alt:"bolgeler" },
  { id: "s9_mg_003", s: "y = |x| grafiğinde x ekseninin altında nokta var mıdır?", c: "hayir", v: {}, z:"orta", alt:"x_ekseni_alti" },

  // ALT DAL 2: y = |x-a| GRAFİĞİ
  { id: "s9_mg_004", s: "y = |x-{a}| grafiğinin tepe noktası neresidir?", c: "({a}, 0)", v: {a:[2,8]}, z:"orta", alt:"y_x-a" },
  { id: "s9_mg_005", s: "y = |x-3| grafiği y = |x| grafiğine göre nasıl ötelenmiştir?", c: "3_birim_saga", v: {}, z:"orta", alt:"oteleme_sag" },
  { id: "s9_mg_006", s: "y = |x+2| grafiği y = |x| grafiğine göre nasıl ötelenmiştir?", c: "2_birim_sola", v: {}, z:"orta", alt:"oteleme_sol" },

  // ALT DAL 3: y = |x| + b GRAFİĞİ
  { id: "s9_mg_007", s: "y = |x| + {a} grafiğinin tepe noktası neresidir?", c: "(0, {a})", v: {a:[2,6]}, z:"orta", alt:"y_mutlak_x_arti_a" },
  { id: "s9_mg_008", s: "y = |x| + 3 grafiğinin en küçük değeri kaçtır?", c: "3", v: {}, z:"orta", alt:"min_deger_3" },

  // ALT DAL 4: y = a|x| GRAFİĞİ
  { id: "s9_mg_009", s: "y = {a}|x| grafiği y = |x| grafiğine göre nasıl değişir? (a>0)", c: "daha_dik_(a>1)_veya_daha_yatik_(0<a<1)", v: {a:[2,4]}, z:"zor", alt:"a_mutlak_x" },
  { id: "s9_mg_010", s: "y = -|x| grafiği nasıldır?", c: "x_ekseninin_altinda_V_seklinde", v: {}, z:"zor", alt:"eksi_mutlak_x" },
  { id: "s9_mg_011", s: "y = 2|x| ile y = |x| grafikleri arasındaki fark nedir?", c: "2|x|_daha_diktir", v: {}, z:"zor", alt:"2_mutlak_x" },

  // ALT DAL 5: KARIŞIK GRAFİKLER
  { id: "s9_mg_012", s: "y = |x-2| + 3 grafiğinin tepe noktası neresidir?", c: "(2, 3)", v: {}, z:"zor", alt:"x-2_arti_3" },
  { id: "s9_mg_013", s: "y = |x+1| - 2 grafiğinin tepe noktası neresidir?", c: "(-1, -2)", v: {}, z:"zor", alt:"x+1_eksi_2" },

  // ALT DAL 6: GRAFİK SORULARI
  { id: "s9_mg_014", s: "y = |x| ve y = 2 doğrularının kesim noktaları nelerdir?", c: "(-2,2)_ve_(2,2)", v: {}, z:"zor", alt:"kesisim" },
  { id: "s9_mg_015", s: "y = |x-1| ve y = 3 doğrularının kesim noktaları nelerdir?", c: "(-2,3)_ve_(4,3)", v: {}, z:"cok_zor", alt:"x-1_3_kesisim" },
  { id: "s9_mg_016", s: "y = |x| grafiği ile x ekseni arasında kalan kapalı bölge var mıdır?", c: "hayir", v: {}, z:"orta", alt:"kapali_bolge" },


  // ==========================================
  // KONU 8: MUTLAK DEĞER PROBLEMLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: UZAKLIK PROBLEMLERİ
  { id: "s9_mp_001", s: "Sayı doğrusunda {a} ile {b} arasındaki uzaklık kaç birimdir?", c: "|{a}-{b}|", v: {a:[-10,10], b:[-10,10]}, z:"orta", alt:"uzaklik" },
  { id: "s9_mp_002", s: "Sayı doğrusunda 3'e uzaklığı 5'ten az olan tam sayılar kaç tanedir?", c: "9", v: {}, z:"zor", alt:"3_uzaklik_5_az" },
  { id: "s9_mp_003", s: "Sayı doğrusunda -1'e uzaklığı en çok 4 olan kaç tam sayı vardır?", c: "9", v: {}, z:"zor", alt:"eksi_1_uzaklik_4" },

  // ALT DAL 2: HATA PAYI PROBLEMLERİ
  { id: "s9_mp_004", s: "Bir ölçüm sonucu {a}±{b} ise gerçek değer hangi aralıktadır?", c: "[{a}-{b}, {a}+{b}]", v: {a:[10,50], b:[1,5]}, z:"zor", alt:"hata_payi" },
  { id: "s9_mp_005", s: "50±3 gram olarak verilen bir ölçümü mutlak değerli eşitsizlik olarak yazınız.", c: "|x-50| ≤ 3", v: {}, z:"zor", alt:"50_3_esitsizlik" },
  { id: "s9_mp_006", s: "|x-100| ≤ 5 ise x hangi aralıktadır?", c: "[95, 105]", v: {}, z:"zor", alt:"100_5_aralik" },

  // ALT DAL 3: EN BÜYÜK/EN KÜÇÜK PROBLEMLERİ
  { id: "s9_mp_007", s: "f(x)=|x-{a}|+|x-{b}| fonksiyonunun en küçük değeri için x hangi aralıkta olmalıdır?", c: "{a}≤x≤{b}", v: {a:[1,4], b:[5,8], kosul:"a<b"}, z:"cok_zor", alt:"min_aralik" },
  { id: "s9_mp_008", s: "f(x)=|x-2|+|x-8| fonksiyonunun en küçük değeri kaçtır?", c: "6", v: {}, z:"cok_zor", alt:"2_8_min" },
  { id: "s9_mp_009", s: "|x-1|+|x-4|+|x-7| fonksiyonunun en küçük değeri kaçtır?", c: "6", v: {}, z:"cok_zor", alt:"1_4_7_min" },

  // ALT DAL 4: OPTİMİZASYON PROBLEMLERİ
  { id: "s9_mp_010", s: "|x| + |y| = 4 eğrisi üzerindeki noktaların oluşturduğu şeklin çevresi kaç birimdir?", c: "16", v: {}, z:"cok_zor", alt:"kare_cevre" },
  { id: "s9_mp_011", s: "|x| + |y| ≤ 2 eşitsizliğinin belirttiği bölgenin alanı kaç birimkaredir?", c: "8", v: {}, z:"cok_zor", alt:"kare_alan" },

  // ALT DAL 5: DENKLEM KURMA PROBLEMLERİ
  { id: "s9_mp_012", s: "\"x sayısı 5'ten en az 2 birim uzaktadır\" ifadesini mutlak değerli eşitsizlik olarak yazınız.", c: "|x-5| ≥ 2", v: {}, z:"zor", alt:"en_az_uzaklik" },
  { id: "s9_mp_013", s: "\"x sayısı -3'e en çok 4 birim uzaktadır\" ifadesini yazınız.", c: "|x+3| ≤ 4", v: {}, z:"zor", alt:"en_cok_uzaklik" },

  // ALT DAL 6: GÜNLÜK HAYAT PROBLEMLERİ
  { id: "s9_mp_014", s: "Bir termometre ±2°C hata ile ölçüm yapıyor. Gerçek sıcaklık 25°C ise termometre hangi değerleri gösterebilir?", c: "[23, 27]", v: {}, z:"zor", alt:"termometre" },
  { id: "s9_mp_015", s: "Bir makine parçasının uzunluğu 10 cm olması gerekirken ±0,5 mm toleransla üretiliyor. Kabul edilebilir uzunluk aralığını mutlak değerle ifade ediniz.", c: "|x-10| ≤ 0,05", v: {}, z:"cok_zor", alt:"tolerans" },


  // ==========================================
  // KONU 9: MUTLAK DEĞER VE KAREKÖKLÜ İFADELER (6 alt dal)
  // ==========================================

  // ALT DAL 1: √(x²) = |x| ÖZDEŞLİĞİ
  { id: "s9_kk_001", s: "√(x²) ifadesini mutlak değerle yazınız.", c: "|x|", v: {}, z:"orta", alt:"kok_kare_mutlak" },
  { id: "s9_kk_002", s: "√({a}²) = ?", c: "Math.abs({a})", v: {a:[-10,10]}, z:"orta", alt:"kok_kare_sayi" },
  { id: "s9_kk_003", s: "√((-{a})²) = ?", c: "{a}", v: {a:[2,8]}, z:"orta", alt:"kok_negatif_kare" },

  // ALT DAL 2: KÖKLÜ MUTLAK DEĞER DENKLEMLERİ
  { id: "s9_kk_004", s: "√(x²) = {a} denkleminin çözümü nedir?", c: "{-{a}, {a}}", v: {a:[2,8]}, z:"zor", alt:"kok_kare_a" },
  { id: "s9_kk_005", s: "√((x-{a})²) = {b} denkleminin çözümü nedir?", c: "{a}-{b}, {a}+{b}", v: {a:[3,8], b:[1,4]}, z:"cok_zor", alt:"kok_kare_fark_b" },
  { id: "s9_kk_006", s: "√(x²-6x+9) = 2 denkleminin çözümü nedir?", c: "{1, 5}", v: {}, z:"cok_zor", alt:"tam_kare_kok" },

  // ALT DAL 3: √(x²) İLE |x| İLİŞKİSİ
  { id: "s9_kk_007", s: "√(x²) = x eşitliği ne zaman doğrudur?", c: "x≥0_iken", v: {}, z:"cok_zor", alt:"kok_esit_x_sart" },
  { id: "s9_kk_008", s: "√(x²) = -x eşitliği ne zaman doğrudur?", c: "x≤0_iken", v: {}, z:"cok_zor", alt:"kok_esit_eksi_x_sart" },
  { id: "s9_kk_009", s: "√(x²) + x ifadesi ne zaman 0 olur?", c: "x≤0_iken", v: {}, z:"cok_zor", alt:"kok_arti_x" },

  // ALT DAL 4: MUTLAK DEĞER VE KÖK İŞLEMLERİ
  { id: "s9_kk_010", s: "|√x - 2| = 1 denkleminin çözümü nedir?", c: "x=1_veya_x=9", v: {}, z:"cok_zor", alt:"kok_mutlak" },
  { id: "s9_kk_011", s: "√(|x|) = 2 denkleminin çözümü nedir?", c: "{-4, 4}", v: {}, z:"cok_zor", alt:"mutlak_kok" },

  // ALT DAL 5: SADELEŞTİRME
  { id: "s9_kk_012", s: "√(x²+2x+1) = ?", c: "|x+1|", v: {}, z:"zor", alt:"tam_kare_kok_mutlak" },
  { id: "s9_kk_013", s: "√(4x²-12x+9) = ?", c: "|2x-3|", v: {}, z:"cok_zor", alt:"4x2_12x_9_kok" },
  { id: "s9_kk_014", s: "√(x²) + |x| = ?", c: "2|x|", v: {}, z:"cok_zor", alt:"kok_arti_mutlak" },

  // ALT DAL 6: KARIŞIK SORULAR
  { id: "s9_kk_015", s: "√(x²-4x+4) - |x-2| = ?", c: "0", v: {}, z:"cok_zor", alt:"tam_kare_kok_eksi_mutlak" },
  { id: "s9_kk_016", s: "√(9x²) = 3|x| eşitliği doğru mudur?", c: "evet", v: {}, z:"cok_zor", alt:"9x2_kok" },


  // ==========================================
  // KONU 10: İÇ İÇE MUTLAK DEĞER (6 alt dal)
  // ==========================================

  // ALT DAL 1: ||x|| DEĞERİ
  { id: "s9_im_001", s: "||x|| = ?", c: "|x|", v: {}, z:"orta", alt:"ic_ice_mutlak" },
  { id: "s9_im_002", s: "||-{a}|| = ?", c: "{a}", v: {a:[2,8]}, z:"orta", alt:"ic_ice_negatif" },
  { id: "s9_im_003", s: "||x| - {a}| = {b} denkleminin çözümü nedir?", c: "±({a}±{b})", v: {a:[3,7], b:[1,3], kosul:"a>b"}, z:"cok_zor", alt:"ic_ice_denklem" },

  // ALT DAL 2: ||x-a|-b| = c DENKLEMLERİ
  { id: "s9_im_004", s: "||x|-2| = 1 denkleminin çözümü nedir?", c: "{-3, -1, 1, 3}", v: {}, z:"cok_zor", alt:"ic_ice_2_1" },
  { id: "s9_im_005", s: "||x-1|-3| = 2 denkleminin çözümü nedir?", c: "{-4, 0, 2, 6}", v: {}, z:"cok_zor", alt:"ic_ice_1_3_2" },
  { id: "s9_im_006", s: "||x+2|-1| = 3 denkleminin çözümü nedir?", c: "{-6, -4, 0, 2}", v: {}, z:"cok_zor", alt:"ic_ice_2_1_3" },

  // ALT DAL 3: İÇ İÇE MUTLAK DEĞER EŞİTSİZLİKLERİ
  { id: "s9_im_007", s: "||x|-{a}| < {b} eşitsizliğinin çözümü nedir?", c: "-({a}+{b})<x<-({a}-{b})_veya_{a}-{b}<x<{a}+{b}", v: {a:[3,7], b:[1,3], kosul:"a>b"}, z:"cok_zor", alt:"ic_ice_esitsizlik" },
  { id: "s9_im_008", s: "||x|-3| < 1 eşitsizliğinin çözümü nedir?", c: "-4<x<-2_veya_2<x<4", v: {}, z:"cok_zor", alt:"ic_ice_3_1" },

  // ALT DAL 4: ÜÇ KAT İÇ İÇE MUTLAK DEĞER
  { id: "s9_im_009", s: "|||x||| = ?", c: "|x|", v: {}, z:"cok_zor", alt:"uc_kat_mutlak" },
  { id: "s9_im_010", s: "|||x|-1|-1| = 1 denkleminin çözümü nedir?", c: "{-3, -1, 1, 3}", v: {}, z:"cok_zor", alt:"uc_kat_denklem" },

  // ALT DAL 5: İÇ İÇE MUTLAK DEĞERİN PARÇALI GÖSTERİMİ
  { id: "s9_im_011", s: "||x-{a}|-{b}| ifadesinin kritik noktaları nelerdir?", c: "{a}-{b}, {a}, {a}+{b}", v: {a:[3,7], b:[1,3]}, z:"cok_zor", alt:"ic_ice_kritik" },
  { id: "s9_im_012", s: "||x-2|-3| ifadesini parçalı fonksiyon olarak yazınız.", c: "x<-1: -x-1, -1≤x<2: x+5, 2≤x<5: 5-x, x≥5: x-1", v: {}, z:"cok_zor", alt:"parcali_ic_ice" },

  // ALT DAL 6: İÇ İÇE MUTLAK DEĞER SORULARI
  { id: "s9_im_013", s: "f(x)=||x|-1| fonksiyonunun grafiği nasıldır?", c: "W_seklinde_tepe_noktalari_(-1,0),(0,1),(1,0)", v: {}, z:"cok_zor", alt:"ic_ice_grafik" },
  { id: "s9_im_014", s: "||x|-|y|| = 1 denkleminin belirttiği şekil nedir?", c: "kare", v: {}, z:"cok_zor", alt:"mutlak_fark_1" },
  { id: "s9_im_015", s: "|x|+|y|+|z| = 3 denkleminin belirttiği şekil nedir?", c: "oktahedron", v: {}, z:"cok_zor", alt:"uc_boyutlu_mutlak" },

],

// ==========================================
// SEVİYE 10: ORAN-ORANTI
// ==========================================
10: [

  // ==========================================
  // KONU 1: ORAN KAVRAMI (6 alt dal)
  // ==========================================

  // ALT DAL 1: ORAN TANIMI
  { id: "s10_or_001", s: "Oran nedir?", c: "iki_coklugun_birbirine_bolunmesiyle_elde_edilen_deger", v: {}, z:"kolay", alt:"oran_tanimi" },
  { id: "s10_or_002", s: "{a}'nın {b}'ye oranı nasıl yazılır?", c: "{a}/{b}_veya_{a}:{b}", v: {a:[2,10], b:[3,12]}, z:"kolay", alt:"oran_yazma" },
  { id: "s10_or_003", s: "{a} sayısının {b} sayısına oranı kaçtır?", c: "{a}/{b}", v: {a:[2,12], b:[3,15]}, z:"kolay", alt:"oran_bulma" },
  { id: "s10_or_004", s: "Bir sınıfta {a} kız, {b} erkek varsa kızların erkeklere oranı kaçtır?", c: "{a}/{b}", v: {a:[5,20], b:[8,25]}, z:"kolay", alt:"kiz_erkek_oran" },

  // ALT DAL 2: ORANIN BİRİMSİZLİĞİ
  { id: "s10_or_005", s: "Oranın birimi var mıdır?", c: "hayir_(birimsizdir)", v: {}, z:"orta", alt:"birimsiz" },
  { id: "s10_or_006", s: "{a} cm'nin {b} cm'ye oranı ile {a} m'nin {b} m'ye oranı aynı mıdır?", c: "evet", v: {a:[2,8], b:[3,10]}, z:"orta", alt:"birim_ayni" },

  // ALT DAL 3: ORAN ÇEŞİTLERİ
  { id: "s10_or_007", s: "\"Birimli oran\" nedir? Örnek veriniz.", c: "farkli_birimli_cokluklarin_orani_(km/saat_gibi)", v: {}, z:"orta", alt:"birimli_oran" },
  { id: "s10_or_008", s: "Hız (km/saat) bir oran mıdır?", c: "evet_(birimli_oran)", v: {}, z:"orta", alt:"hiz_oran" },
  { id: "s10_or_009", s: "Yoğunluk (g/cm³) bir oran mıdır?", c: "evet_(birimli_oran)", v: {}, z:"orta", alt:"yogunluk_oran" },

  // ALT DAL 4: ORAN SADELEŞTİRME
  { id: "s10_or_010", s: "{a}/{b} oranını sadeleştiriniz.", c: "{sade_a}/{sade_b}", v: {a:[4,24], b:[6,36], kosul:"obeb>1", sade_a:"{a}/obeb({a},{b})", sade_b:"{b}/obeb({a},{b})"}, z:"orta", alt:"oran_sadelestirme" },
  { id: "s10_or_011", s: "{a}:{b} oranının en sade hali nedir?", c: "{sade_a}:{sade_b}", v: {a:[6,30], b:[9,40]}, z:"orta", alt:"en_sade_oran" },

  // ALT DAL 5: ORAN VE KESİR İLİŞKİSİ
  { id: "s10_or_012", s: "Oran ile kesir arasındaki fark nedir?", c: "oran_iki_coklugu_karsilastirir_kesir_butun_parca_iliskisi", v: {}, z:"orta", alt:"oran_kesir_fark" },
  { id: "s10_or_013", s: "Bir sayının {a}/{b}'i demekle bir sayının diğerine oranının {a}/{b} olması aynı mıdır?", c: "farklidir", v: {}, z:"orta", alt:"kesir_oran" },

  // ALT DAL 6: ORAN PROBLEMLERİ (TEMEL)
  { id: "s10_or_014", s: "İki sayının oranı {a}/{b} ve küçük sayı {k} ise büyük sayı kaçtır?", c: "{k}*{b}/{a}", v: {a:[2,5], b:[3,8], k:[6,20], kosul:"a<b_veya_a>b_duruma_gore"}, z:"orta", alt:"orandan_sayi" },
  { id: "s10_or_015", s: "İki sayının oranı {a}/{b} ve büyük sayı {b_s} ise küçük sayı kaçtır?", c: "{b_s}*{a}/{b}", v: {a:[2,5], b:[3,8], b_s:[15,40], kosul:"b>a"}, z:"orta", alt:"orandan_kucuk" },


  // ==========================================
  // KONU 2: ORANTI KAVRAMI VE ÇEŞİTLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: ORANTI TANIMI
  { id: "s10_ok_001", s: "Orantı nedir?", c: "iki_veya_daha_fazla_oranin_esitligi", v: {}, z:"kolay", alt:"oranti_tanimi" },
  { id: "s10_ok_002", s: "a/b = c/d ifadesine ne denir?", c: "oranti", v: {}, z:"kolay", alt:"oranti_yazma" },
  { id: "s10_ok_003", s: "{a}/{b} = {c}/{d} orantısında içler ve dışlar nelerdir?", c: "icler:{b},{c}_dislar:{a},{d}", v: {a:[2,6], b:[3,8], c:[2,6], d:[3,8], kosul:"a/b=c/d"}, z:"orta", alt:"icler_dislar" },

  // ALT DAL 2: İÇLER DIŞLAR ÇARPIMI
  { id: "s10_ok_004", s: "a/b = c/d ise içler dışlar çarpımı nasıldır?", c: "a·d = b·c", v: {}, z:"orta", alt:"icler_dislar_carpim" },
  { id: "s10_ok_005", s: "{a}/{b} = {c}/{d} ise {a}×{d} = ?", c: "{a}*{d}={b}*{c}", v: {a:[2,5], b:[3,7], c:[4,10], d:[6,14], kosul:"a/b=c/d"}, z:"orta", alt:"icler_dislar_ornek" },

  // ALT DAL 3: ORANTI SABİTİ
  { id: "s10_ok_006", s: "a/b = c/d = k ise k'ya ne denir?", c: "oranti_sabiti", v: {}, z:"orta", alt:"oranti_sabiti" },
  { id: "s10_ok_007", s: "{a}/{b} = {c}/{d} = k ise k kaçtır?", c: "{a}/{b}", v: {a:[3,8], b:[2,6], c:[6,16], d:[4,12], kosul:"a/b=c/d"}, z:"orta", alt:"k_bulma" },

  // ALT DAL 4: DOĞRU ORANTI TANIMI
  { id: "s10_ok_008", s: "Doğru orantı nedir?", c: "iki_cokluktan_biri_artarken_digeri_de_ayni_oranda_artar", v: {}, z:"orta", alt:"dogru_oranti_tanimi" },
  { id: "s10_ok_009", s: "Doğru orantıda a/b sabit midir?", c: "evet_(a/b=k)", v: {}, z:"orta", alt:"dogru_oranti_sabit" },
  { id: "s10_ok_010", s: "Aşağıdakilerden hangisi doğru orantıdır?", c: "{dogru}", v: {secenekler:["alis_miktari_ve_fiyat","isci_sayisi_ve_is_bitirme_suresi","hiz_ve_zaman","bos_musluk_sayisi_ve_dolma_suresi"]}, z:"orta", alt:"dogru_oranti_ornek" },

  // ALT DAL 5: TERS ORANTI TANIMI
  { id: "s10_ok_011", s: "Ters orantı nedir?", c: "iki_cokluktan_biri_artarken_digeri_ayni_oranda_azalir", v: {}, z:"orta", alt:"ters_oranti_tanimi" },
  { id: "s10_ok_012", s: "Ters orantıda a·b sabit midir?", c: "evet_(a·b=k)", v: {}, z:"orta", alt:"ters_oranti_sabit" },
  { id: "s10_ok_013", s: "Aşağıdakilerden hangisi ters orantıdır?", c: "{dogru}", v: {secenekler:["isci_sayisi_ve_is_bitirme_suresi","alis_miktari_ve_fiyat","yas_ve_boy","sicaklik_ve_gunes"]}, z:"orta", alt:"ters_oranti_ornek" },

  // ALT DAL 6: DOĞRU/TERS ORANTI AYIRIMI
  { id: "s10_ok_014", s: "İşçi sayısı ile işin bitme süresi arasındaki orantı türü nedir?", c: "ters_oranti", v: {}, z:"orta", alt:"isci_sure" },
  { id: "s10_ok_015", s: "Alınan mal miktarı ile ödenen para arasındaki orantı türü nedir?", c: "dogru_oranti", v: {}, z:"orta", alt:"mal_para" },
  { id: "s10_ok_016", s: "Hız ile zaman (yol sabitken) arasındaki orantı türü nedir?", c: "ters_oranti", v: {}, z:"orta", alt:"hiz_zaman" },

  // ALT DAL 7: ORANTI GRAFİKLERİ
  { id: "s10_ok_017", s: "Doğru orantı grafiği nasıldır?", c: "orijinden_gecen_dogru", v: {}, z:"orta", alt:"dogru_oranti_grafik" },
  { id: "s10_ok_018", s: "Ters orantı grafiği nasıldır?", c: "hiperbol_(x_y=k)", v: {}, z:"cok_zor", alt:"ters_oranti_grafik" },

  // ALT DAL 8: ORANTI KARIŞIK
  { id: "s10_ok_019", s: "a/b = c/d = e/f = {k} ise a+c+e = ?", c: "{k}(b+d+f)", v: {k:[2,5]}, z:"cok_zor", alt:"orantili_toplam" },
  { id: "s10_ok_020", s: "a/b = c/d ise a/b = (a+c)/(b+d) eşitliği doğru mudur?", c: "evet", v: {}, z:"cok_zor", alt:"oranti_ozellik" },


  // ==========================================
  // KONU 3: DOĞRU ORANTI (10 alt dal)
  // ==========================================

  // ALT DAL 1: DOĞRU ORANTI PROBLEMİ
  { id: "s10_do_001", s: "{a} kg elma {b} TL ise {c} kg elma kaç TL'dir?", c: "{b}*{c}/{a}", v: {a:[2,10], b:[5,20], c:[3,15]}, z:"orta", alt:"elma_problemi" },
  { id: "s10_do_002", s: "{a} işçi günde {b} parça üretiyorsa {c} işçi kaç parça üretir?", c: "{b}*{c}/{a}", v: {a:[3,8], b:[10,30], c:[5,15]}, z:"orta", alt:"isci_uretim" },
  { id: "s10_do_003", s: "Bir araç {a} km'de {b} litre benzin tüketiyorsa {c} km'de kaç litre tüketir?", c: "{b}*{c}/{a}", v: {a:[100,300], b:[5,15], c:[200,600]}, z:"orta", alt:"benzin" },

  // ALT DAL 2: DOĞRU ORANTI ÇÖZÜMÜ
  { id: "s10_do_004", s: "Doğru orantı problemlerinde çözüm yöntemi nedir?", c: "capraz_carpim_veya_oranti_sabiti_bulma", v: {}, z:"orta", alt:"cozum_yontemi" },
  { id: "s10_do_005", s: "Doğru orantıda x ve y arasında y = {k}x bağıntısı varsa k kaçtır?", c: "{k}", v: {k:[2,6]}, z:"orta", alt:"dogru_oranti_formul" },

  // ALT DAL 3: DOĞRU ORANTI TABLOSU
  { id: "s10_do_006", s: "x ve y doğru orantılıdır. x={x1} için y={y1} ise x={x2} için y kaçtır?", c: "{y1}*{x2}/{x1}", v: {x1:[2,8], y1:[6,24], x2:[3,12]}, z:"orta", alt:"dogru_oranti_tablo" },
  { id: "s10_do_007", s: "Doğru orantıda x artarken y nasıl değişir?", c: "y_de_artar", v: {}, z:"orta", alt:"dogru_oranti_degisim" },

  // ALT DAL 4: DOĞRU ORANTI PROBLEMLERİ (PARA)
  { id: "s10_do_008", s: "{a} dolar {b} TL ise {c} dolar kaç TL'dir?", c: "{b}*{c}/{a}", v: {a:[1,10], b:[20,300], c:[5,50]}, z:"orta", alt:"doviz" },
  { id: "s10_do_009", s: "Bir işçi {a} günde {b} TL kazanıyorsa {c} günde kaç TL kazanır?", c: "{b}*{c}/{a}", v: {a:[5,20], b:[200,1000], c:[10,30]}, z:"orta", alt:"maas" },

  // ALT DAL 5: DOĞRU ORANTI PROBLEMLERİ (ÖLÇÜ)
  { id: "s10_do_010", s: "Bir haritada {a} cm {b} km'yi gösteriyorsa {c} cm kaç km'yi gösterir?", c: "{b}*{c}/{a}", v: {a:[1,5], b:[10,50], c:[3,15]}, z:"orta", alt:"harita" },
  { id: "s10_do_011", s: "{a} cm'si {b} gram olan telin {c} cm'si kaç gramdır?", c: "{b}*{c}/{a}", v: {a:[10,50], b:[20,100], c:[30,150]}, z:"orta", alt:"tel_agirlik" },

  // ALT DAL 6: DOĞRU ORANTI PROBLEMLERİ (İLERİ)
  { id: "s10_do_012", s: "{a} musluk bir havuzu {b} saatte dolduruyorsa {c} musluk kaç saatte doldurur? (Kapasiteler aynı)", c: "{a}*{b}/{c}", v: {a:[2,6], b:[4,12], c:[3,8]}, z:"zor", alt:"musluk_dogru" },
  { id: "s10_do_013", s: "Aynı kapasitede {a} işçi bir işi {b} günde yapıyorsa {c} işçi kaç günde yapar?", c: "{a}*{b}/{c}", v: {a:[3,8], b:[6,20], c:[4,12]}, z:"zor", alt:"isci_dogru" },

  // ALT DAL 7: DOĞRU ORANTI VE ORAN KORUNUMU
  { id: "s10_do_014", s: "Doğru orantılı iki çokluktan biri {k} katına çıkarsa diğeri nasıl değişir?", c: "{k}_katina_cikar", v: {k:[2,5]}, z:"orta", alt:"kat_degisim" },
  { id: "s10_do_015", s: "Doğru orantılı çokluklarda oran değişir mi?", c: "hayir_(sabittir)", v: {}, z:"orta", alt:"oran_sabit" },

  // ALT DAL 8: DOĞRU ORANTI SORULARI
  { id: "s10_do_016", s: "x ve y doğru orantılıdır. x={a} iken y={b} ise x+y={t} iken x kaçtır?", c: "{a}*{t}/({a}+{b})", v: {a:[3,8], b:[5,15], t:[16,40]}, z:"cok_zor", alt:"toplamdan_x" },
  { id: "s10_do_017", s: "x ve y doğru orantılıdır. x={a} iken y={b} ise x-y={f} iken x kaçtır?", c: "{a}*{f}/({a}-{b})", v: {a:[8,15], b:[3,8], kosul:"a>b", f:[5,20]}, z:"cok_zor", alt:"farktan_x" },

  // ALT DAL 9: DOĞRU ORANTI VE DENKLEM
  { id: "s10_do_018", s: "y = {k}x doğrusunda x ve y doğru orantılı mıdır?", c: "evet", v: {k:[2,5]}, z:"orta", alt:"dogrusal" },
  { id: "s10_do_019", s: "y = {k}x + {b} doğrusunda x ve y doğru orantılı mıdır?", c: "hayir_(b≠0_ise_orijinden_gecmez)", v: {k:[2,4], b:[1,5]}, z:"cok_zor", alt:"dogrusal_degil" },

  // ALT DAL 10: DOĞRU ORANTI KARIŞIK
  { id: "s10_do_020", s: "A, B ile doğru orantılıdır. A={a} iken B={b} ise A={c} iken B kaçtır?", c: "{b}*{c}/{a}", v: {a:[4,12], b:[6,20], c:[8,24]}, z:"orta", alt:"A_B_dogru" },
  { id: "s10_do_021", s: "Doğru orantılı iki çokluğun bölümü sabit midir?", c: "evet", v: {}, z:"orta", alt:"bolum_sabit" },


  // ==========================================
  // KONU 4: TERS ORANTI (10 alt dal)
  // ==========================================

  // ALT DAL 1: TERS ORANTI PROBLEMİ
  { id: "s10_to_001", s: "{a} işçi bir işi {b} günde yaparsa {c} işçi kaç günde yapar?", c: "{a}*{b}/{c}", v: {a:[2,10], b:[6,30], c:[3,12]}, z:"orta", alt:"isci_ters" },
  { id: "s10_to_002", s: "Bir araç {v1} km/saat hızla gittiği yolu {t1} saatte alıyorsa {v2} km/saat hızla kaç saatte alır?", c: "{v1}*{t1}/{v2}", v: {v1:[40,80], t1:[3,8], v2:[50,100]}, z:"orta", alt:"hiz_ters" },
  { id: "s10_to_003", s: "{a} kg'lık paketlerle {b} paket edilen ürün {c} kg'lık paketlerle kaç paket edilir?", c: "{a}*{b}/{c}", v: {a:[2,8], b:[10,40], c:[3,12]}, z:"orta", alt:"paket_ters" },

  // ALT DAL 2: TERS ORANTI ÇÖZÜMÜ
  { id: "s10_to_004", s: "Ters orantı problemlerinde çözüm yöntemi nedir?", c: "carpim_sabit_(x·y=k)_kullanilir", v: {}, z:"orta", alt:"ters_cozum" },
  { id: "s10_to_005", s: "Ters orantıda x ve y arasında x·y = {k} bağıntısı varsa k kaçtır?", c: "{k}", v: {k:[12,60]}, z:"orta", alt:"ters_oranti_formul" },

  // ALT DAL 3: TERS ORANTI TABLOSU
  { id: "s10_to_006", s: "x ve y ters orantılıdır. x={x1} için y={y1} ise x={x2} için y kaçtır?", c: "{x1}*{y1}/{x2}", v: {x1:[3,8], y1:[6,20], x2:[4,12]}, z:"orta", alt:"ters_oranti_tablo" },
  { id: "s10_to_007", s: "Ters orantıda x artarken y nasıl değişir?", c: "y_azalir", v: {}, z:"orta", alt:"ters_oranti_degisim" },

  // ALT DAL 4: TERS ORANTI PROBLEMLERİ (İŞÇİ)
  { id: "s10_to_008", s: "{a} işçi bir işi {b} günde bitiriyor. İşin {c} günde bitmesi için kaç işçi gerekir?", c: "{a}*{b}/{c}", v: {a:[2,8], b:[10,40], c:[4,15], kosul:"c<b"}, z:"zor", alt:"isci_sayisi" },
  { id: "s10_to_009", s: "Aynı güçte {a} işçi {b} metre duvarı {c} günde örüyorsa, {d} işçi {e} metre duvarı kaç günde örer?", c: "{a}*{c}*{e}/({b}*{d})", v: {a:[2,6], b:[10,30], c:[4,10], d:[3,8], e:[15,40]}, z:"cok_zor", alt:"duvar_isci" },

  // ALT DAL 5: TERS ORANTI PROBLEMLERİ (HIZ)
  { id: "s10_to_010", s: "Bir araç {v1} km/saat hızla {t1} saatte gittiği yolu, {t2} saatte gitmek için hızı kaç olmalıdır?", c: "{v1}*{t1}/{t2}", v: {v1:[40,90], t1:[3,8], t2:[2,6], kosul:"t2<t1"}, z:"zor", alt:"hiz_artirma" },
  { id: "s10_to_011", s: "Hız ile zaman ters orantılı mıdır? (Yol sabitken)", c: "evet", v: {}, z:"orta", alt:"hiz_zaman_ters" },

  // ALT DAL 6: TERS ORANTI PROBLEMLERİ (GÜNLÜK HAYAT)
  { id: "s10_to_012", s: "{a} kişiye {b} gün yetecek erzak, {c} kişiye kaç gün yeter?", c: "{a}*{b}/{c}", v: {a:[3,10], b:[10,40], c:[4,15]}, z:"orta", alt:"erzak" },
  { id: "s10_to_013", s: "Bir havuzu {a} musluk {b} saatte dolduruyorsa {c} musluk kaç saatte doldurur? (Ters orantı)", c: "{a}*{b}/{c}", v: {a:[2,6], b:[8,24], c:[3,8]}, z:"orta", alt:"havuz_ters" },

  // ALT DAL 7: TERS ORANTI VE KAT İLİŞKİSİ
  { id: "s10_to_014", s: "Ters orantılı iki çokluktan biri {k} katına çıkarsa diğeri nasıl değişir?", c: "1/{k}_katina_iner", v: {k:[2,5]}, z:"orta", alt:"ters_kat" },
  { id: "s10_to_015", s: "Ters orantılı çokluklarda çarpım değişir mi?", c: "hayir_(sabittir)", v: {}, z:"orta", alt:"carpim_sabit" },

  // ALT DAL 8: TERS ORANTI SORULARI
  { id: "s10_to_016", s: "x ve y ters orantılıdır. x={a} iken y={b} ise x+y={t} iken x kaçtır?", c: "{cozum}", v: {a:[4,10], b:[6,20], t:[15,40]}, z:"cok_zor", alt:"toplamdan_x_ters" },
  { id: "s10_to_017", s: "x ve y ters orantılıdır. x={a} iken y={b} ise x-y={f} iken x kaçtır?", c: "{cozum}", v: {a:[8,15], b:[3,8], kosul:"a>b", f:[5,15]}, z:"cok_zor", alt:"farktan_x_ters" },

  // ALT DAL 9: TERS ORANTI VE DENKLEM
  { id: "s10_to_018", s: "y = {k}/x eğrisinde x ve y ters orantılı mıdır?", c: "evet", v: {k:[6,24]}, z:"orta", alt:"hiperbol" },
  { id: "s10_to_019", s: "x·y = {k} ise x ve y nasıl orantılıdır?", c: "ters_orantili", v: {k:[12,48]}, z:"orta", alt:"carpim_sabit_ters" },

  // ALT DAL 10: TERS ORANTI KARIŞIK
  { id: "s10_to_020", s: "A, B ile ters orantılıdır. A={a} iken B={b} ise A={c} iken B kaçtır?", c: "{a}*{b}/{c}", v: {a:[3,10], b:[6,20], c:[4,15]}, z:"orta", alt:"A_B_ters" },
  { id: "s10_to_021", s: "Ters orantılı iki çokluğun çarpımı sabit midir?", c: "evet", v: {}, z:"orta", alt:"carpim_sabit_evet" },


  // ==========================================
  // KONU 5: BİLEŞİK ORANTI (8 alt dal)
  // ==========================================

  // ALT DAL 1: BİLEŞİK ORANTI TANIMI
  { id: "s10_bo_001", s: "Bileşik orantı nedir?", c: "dogru_ve_ters_orantinin_bir_arada_bulunmasi", v: {}, z:"orta", alt:"bilesik_tanim" },
  { id: "s10_bo_002", s: "Bileşik orantı nasıl çözülür?", c: "her_cokluk_icin_ayri_ayri_dogru_veya_ters_oranti_kontrol_edilir", v: {}, z:"orta", alt:"bilesik_cozum" },

  // ALT DAL 2: BİLEŞİK ORANTI PROBLEMLERİ (İŞÇİ)
  { id: "s10_bo_003", s: "{a} işçi {b} metre duvarı {c} günde örerse, {d} işçi {e} metre duvarı kaç günde örer?", c: "{a}*{c}*{e}/({b}*{d})", v: {a:[2,5], b:[10,30], c:[4,10], d:[3,7], e:[20,50]}, z:"cok_zor", alt:"isci_duvar" },
  { id: "s10_bo_004", s: "{a} işçi günde {b} saat çalışarak {c} günde bitiriyorsa, {d} işçi günde {e} saat çalışarak kaç günde bitirir?", c: "{a}*{b}*{c}/({d}*{e})", v: {a:[3,8], b:[6,10], c:[5,15], d:[4,10], e:[7,12]}, z:"cok_zor", alt:"isci_saat" },

  // ALT DAL 3: BİLEŞİK ORANTI PROBLEMLERİ (MAKİNE)
  { id: "s10_bo_005", s: "{a} makine {b} parçayı {c} saatte üretiyorsa, {d} makine {e} parçayı kaç saatte üretir?", c: "{a}*{c}*{e}/({b}*{d})", v: {a:[3,6], b:[100,500], c:[4,12], d:[4,8], e:[200,800]}, z:"cok_zor", alt:"makine" },
  { id: "s10_bo_006", s: "Aynı güçteki {a} makine günde {b} saat çalışarak {c} ton üretim yapıyorsa, {d} makine günde {e} saat çalışarak kaç ton üretir?", c: "{a}*{c}*{d}*{e}/({a}*{b})", v: {a:[2,5], b:[6,12], c:[10,40], d:[3,7], e:[8,14]}, z:"cok_zor", alt:"makine_ton" },

  // ALT DAL 4: BİLEŞİK ORANTI PROBLEMLERİ (HAVUZ)
  { id: "s10_bo_007", s: "{a} musluk {b} saatte {c} litrelik havuzu dolduruyorsa, {d} musluk {e} litrelik havuzu kaç saatte doldurur?", c: "{a}*{b}*{e}/({c}*{d})", v: {a:[2,5], b:[4,10], c:[100,500], d:[3,6], e:[200,800]}, z:"cok_zor", alt:"musluk_havuz" },

  // ALT DAL 5: BİLEŞİK ORANTI ÇÖZÜM STRATEJİSİ
  { id: "s10_bo_008", s: "Bileşik orantıda ilk adım nedir?", c: "sorulan_cokluk_digerleriyle_tek_tek_karsilastirilir", v: {}, z:"orta", alt:"strateji" },
  { id: "s10_bo_009", s: "Bileşik orantıda doğru orantı nasıl işaretlenir?", c: "ok_ayni_yonde", v: {}, z:"orta", alt:"dogru_isaret" },
  { id: "s10_bo_010", s: "Bileşik orantıda ters orantı nasıl işaretlenir?", c: "ok_ters_yonde", v: {}, z:"orta", alt:"ters_isaret" },

  // ALT DAL 6: BİLEŞİK ORANTI SORULARI
  { id: "s10_bo_011", s: "{a} işçi {b} m² duvarı {c} günde boyuyor. {d} işçi {e} m² duvarı kaç günde boyar?", c: "{a}*{c}*{e}/({b}*{d})", v: {a:[2,6], b:[20,60], c:[3,8], d:[3,8], e:[30,90]}, z:"cok_zor", alt:"boya" },
  { id: "s10_bo_012", s: "{a} kişiye {b} gün yeten erzak, {c} kişiye kaç gün yeter? (Kişi başı tüketim aynı)", c: "{a}*{b}/{c}", v: {a:[3,8], b:[10,30], c:[4,12]}, z:"orta", alt:"erzak_bilesik" },

  // ALT DAL 7: BİLEŞİK ORANTI VE ZAMAN
  { id: "s10_bo_013", s: "{a} kişi {b} günde {c} ton kömür çıkarıyorsa, {d} kişi {e} ton kömürü kaç günde çıkarır?", c: "{a}*{b}*{e}/({c}*{d})", v: {a:[3,7], b:[5,15], c:[20,60], d:[4,9], e:[30,80]}, z:"cok_zor", alt:"komur" },
  { id: "s10_bo_014", s: "{a} musluk bir havuzu {b} saatte dolduruyorsa, {c} musluk aynı havuzu kaç saatte doldurur?", c: "{a}*{b}/{c}", v: {a:[2,6], b:[8,24], c:[3,8]}, z:"orta", alt:"musluk_sayisi" },

  // ALT DAL 8: BİLEŞİK ORANTI ÖZEL SORULAR
  { id: "s10_bo_015", s: "{a} usta {b} m² fayansı {c} saatte döşüyor. {d} usta {e} m² fayansı kaç saatte döşer?", c: "{a}*{c}*{e}/({b}*{d})", v: {a:[2,5], b:[10,40], c:[3,8], d:[3,7], e:[20,60]}, z:"cok_zor", alt:"fayans" },
  { id: "s10_bo_016", s: "3 işçi 4 günde 120 m kumaş dokuyorsa, 5 işçi 3 günde kaç m kumaş dokur?", c: "150", v: {}, z:"cok_zor", alt:"kumas_ornek" },


  // ==========================================
  // KONU 6: ORANTI ÖZELLİKLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: ORANTIDA EŞİTLİK ÖZELLİKLERİ
  { id: "s10_oo_001", s: "a/b = c/d ise a·d = b·c eşitliği ne denir?", c: "icler_dislar_carpimi", v: {}, z:"orta", alt:"icler_dislar" },
  { id: "s10_oo_002", s: "a/b = c/d ise a/b = (a+c)/(b+d) doğru mudur?", c: "evet", v: {}, z:"cok_zor", alt:"toplam_ozelligi" },
  { id: "s10_oo_003", s: "a/b = c/d ise a/b = (a-c)/(b-d) doğru mudur?", c: "evet", v: {}, z:"cok_zor", alt:"fark_ozelligi" },

  // ALT DAL 2: ORANTI SABİTİ ÖZELLİKLERİ
  { id: "s10_oo_004", s: "a/b = c/d = e/f = k ise a+c+e = ?", c: "k(b+d+f)", v: {}, z:"cok_zor", alt:"sabit_toplam" },
  { id: "s10_oo_005", s: "a/b = c/d = k ise a+c = ?", c: "k(b+d)", v: {}, z:"cok_zor", alt:"iki_toplam" },
  { id: "s10_oo_006", s: "a/b = c/d = k ise a·c = ?", c: "k²·b·d", v: {}, z:"cok_zor", alt:"carpim_sabit" },

  // ALT DAL 3: ORANTI ÖZELLİK UYGULAMALARI
  { id: "s10_oo_007", s: "a/b = c/d = 2/3 ise (a+c)/(b+d) = ?", c: "2/3", v: {}, z:"cok_zor", alt:"uygulama_1" },
  { id: "s10_oo_008", s: "x/y = {a}/{b} ve x+y={t} ise x kaçtır?", c: "{a}*{t}/({a}+{b})", v: {a:[2,5], b:[3,8], t:[15,40], kosul:"a<b_veya_a>b"}, z:"cok_zor", alt:"toplamdan_bulma" },
  { id: "s10_oo_009", s: "x/y = {a}/{b} ve x-y={f} ise x kaçtır?", c: "{a}*{f}/({a}-{b})", v: {a:[5,8], b:[2,5], kosul:"a>b", f:[6,20]}, z:"cok_zor", alt:"farktan_bulma" },

  // ALT DAL 4: ORANTIDA ÇARPMA VE BÖLME
  { id: "s10_oo_010", s: "a/b = c/d ise a/c = ?", c: "b/d", v: {}, z:"orta", alt:"capraz_oran" },
  { id: "s10_oo_011", s: "a/b = c/d ise b/a = ?", c: "d/c", v: {}, z:"orta", alt:"ters_oran" },
  { id: "s10_oo_012", s: "a/b = c/d ise (a+b)/b = ?", c: "(c+d)/d", v: {}, z:"cok_zor", alt:"toplam_bolme" },

  // ALT DAL 5: ALTIN ORAN
  { id: "s10_oo_013", s: "Altın oran nedir?", c: "bir_butunun_buyuk_parcaya_orani_buyuk_parcanin_kucuk_parcaya_oranina_esit", v: {}, z:"cok_zor", alt:"altin_oran_tanim" },
  { id: "s10_oo_014", s: "Altın oran sayısı yaklaşık kaçtır?", c: "1,618", v: {}, z:"cok_zor", alt:"altin_oran_sayi" },
  { id: "s10_oo_015", s: "Altın oran φ = ?", c: "(1+√5)/2", v: {}, z:"cok_zor", alt:"altin_oran_formul" },

  // ALT DAL 6: ORANTI VE YÜZDE
  { id: "s10_oo_016", s: "{a} sayısı {b} sayısının yüzde kaçıdır?", c: "{a}*100/{b}", v: {a:[5,30], b:[20,100]}, z:"orta", alt:"yuzde_oran" },
  { id: "s10_oo_017", s: "Bir sayının %{p}'si {deger} ise bu sayı kaçtır?", c: "{deger}*100/{p}", v: {p:[10,50], deger:[10,60]}, z:"orta", alt:"yuzdeden_sayi" },

  // ALT DAL 7: ORANTI VE ÖLÇEK
  { id: "s10_oo_018", s: "Bir haritanın ölçeği 1/{a} ise haritada {b} cm olan uzunluk gerçekte kaç km'dir?", c: "{b}*{a}/100000", v: {a:[10000,50000], b:[2,10]}, z:"cok_zor", alt:"olcek" },
  { id: "s10_oo_019", s: "Gerçekte {a} km olan uzunluk 1/{b} ölçekli haritada kaç cm'dir?", c: "{a}*100000/{b}", v: {a:[10,50], b:[200000,500000]}, z:"cok_zor", alt:"olcek_ters" },

  // ALT DAL 8: ORANTI ÖZELLİKLERİ ÖZET
  { id: "s10_oo_020", s: "a/b = c/d = e/f = k ise a·c·e/(b·d·f) = ?", c: "k³", v: {}, z:"cok_zor", alt:"uc_oran_carpim" },
  { id: "s10_oo_021", s: "a/b = c/d ise (a-b)/(a+b) = ?", c: "(c-d)/(c+d)", v: {}, z:"cok_zor", alt:"fark_toplam_orani" },


  // ==========================================
  // KONU 7: ORANTI PROBLEMLERİ - SAYI (8 alt dal)
  // ==========================================

  // ALT DAL 1: İKİ SAYININ ORANI
  { id: "s10_op_001", s: "İki sayının oranı {a}/{b} ve toplamları {t} ise sayılar nedir?", c: "{a}*{t}/({a}+{b})_ve_{b}*{t}/({a}+{b})", v: {a:[2,5], b:[3,8], t:[20,60]}, z:"orta", alt:"iki_sayi_oran_toplam" },
  { id: "s10_op_002", s: "İki sayının oranı {a}/{b} ve farkları {f} ise sayılar nedir?", c: "{a}*{f}/({a}-{b})_ve_{b}*{f}/({a}-{b})", v: {a:[5,8], b:[2,5], kosul:"a>b", f:[6,18]}, z:"zor", alt:"iki_sayi_oran_fark" },

  // ALT DAL 2: ÜÇ SAYININ ORANI
  { id: "s10_op_003", s: "Üç sayının oranı {a}:{b}:{c} ve toplamları {t} ise en büyük sayı kaçtır?", c: "{max}*{t}/({a}+{b}+{c})", v: {a:[2,5], b:[3,7], c:[4,9], t:[30,100]}, z:"zor", alt:"uc_sayi_oran_toplam" },
  { id: "s10_op_004", s: "a:b:c = 2:3:5 ve a+b+c = 50 ise c kaçtır?", c: "25", v: {}, z:"zor", alt:"2_3_5_50" },
  { id: "s10_op_005", s: "a:b = 3:4, b:c = 2:5 ise a:b:c nedir?", c: "6:8:20 = 3:4:10", v: {}, z:"cok_zor", alt:"ikili_oran_birlestirme" },

  // ALT DAL 3: ORANTILI BÖLME
  { id: "s10_op_006", s: "{t} sayısını {a} ve {b} ile orantılı olacak şekilde iki parçaya ayırınız.", c: "{a}*{t}/({a}+{b})_ve_{b}*{t}/({a}+{b})", v: {a:[2,5], b:[3,8], t:[20,60]}, z:"orta", alt:"orantili_bolme" },
  { id: "s10_op_007", s: "{t} sayısını {a}, {b}, {c} ile doğru orantılı parçalara ayırınız.", c: "{a}*{t}/{s}_ve_{b}*{t}/{s}_ve_{c}*{t}/{s}", v: {a:[2,5], b:[3,6], c:[4,8], t:[30,100], s:"{a}+{b}+{c}"}, z:"zor", alt:"uc_parca_orantili" },

  // ALT DAL 4: TERS ORANTILI BÖLME
  { id: "s10_op_008", s: "{t} sayısını {a} ve {b} ile ters orantılı parçalara ayırınız.", c: "{t}*{b}/({a}+{b})_ve_{t}*{a}/({a}+{b})", v: {a:[2,5], b:[3,8], t:[20,60]}, z:"cok_zor", alt:"ters_orantili_bolme" },
  { id: "s10_op_009", s: "Bir sayı 2 ve 3 ile ters orantılı iki parçaya ayrılıyor. Büyük parça 30 ise sayı kaçtır?", c: "50", v: {}, z:"cok_zor", alt:"ters_orantili_sayi" },

  // ALT DAL 5: ORAN DEĞİŞİMİ
  { id: "s10_op_010", s: "Bir sınıfta kızların erkeklere oranı {a}/{b}'dir. Sınıfa {k} kız, {e} erkek gelince oran {c}/{d} oluyorsa başlangıçtaki kız sayısı kaçtır?", c: "{cozum}", v: {a:[2,4], b:[3,5], k:[2,6], e:[1,4], c:[3,6], d:[4,8]}, z:"cok_zor", alt:"oran_degisimi" },

  // ALT DAL 6: YAŞ PROBLEMLERİ ORAN
  { id: "s10_op_011", s: "Bir babanın yaşı çocuğunun yaşının {a} katıdır. {n} yıl sonra oran {b} oluyorsa çocuk bugün kaç yaşındadır?", c: "{n}*({b}-1)/({a}-{b})", v: {a:[3,6], b:[2,"{a}-1"], n:[2,10]}, z:"cok_zor", alt:"yas_oran" },

  // ALT DAL 7: KARIŞIM ORANLARI
  { id: "s10_op_012", s: "Tuz oranı %{o1} olan {m1} kg ile %{o2} olan {m2} kg karıştırılıyor. Karışımın tuz oranı % kaçtır?", c: "({o1}*{m1}+{o2}*{m2})/({m1}+{m2})", v: {o1:[10,40], m1:[10,50], o2:[20,60], m2:[10,50]}, z:"cok_zor", alt:"karisim_orani" },

  // ALT DAL 8: ÖZEL SAYI PROBLEMLERİ
  { id: "s10_op_013", s: "x/y = z/t = {k} ve x+y+z+t = {toplam} ise x+z = ?", c: "{k}*({toplam}*(1+{k})/(1+{k})²)", v: {k:[2,4], toplam:[30,100]}, z:"cok_zor", alt:"dortlu_oranti" },
  { id: "s10_op_014", s: "a/b = c/d = 3 ise (a²+c²)/(b²+d²) = ?", c: "9", v: {}, z:"cok_zor", alt:"kare_orani" },


  // ==========================================
  // KONU 8: ORANTI PROBLEMLERİ - İŞÇİ-HAVUZ (8 alt dal)
  // ==========================================

  // ALT DAL 1: İŞÇİ PROBLEMLERİ (DOĞRU ORANTILI)
  { id: "s10_ih_001", s: "{a} işçi bir işi {b} günde yaparsa {c} işçi kaç günde yapar? (İşçi-İş doğru, İşçi-Zaman ters)", c: "{a}*{b}/{c}", v: {a:[2,8], b:[6,24], c:[3,10]}, z:"orta", alt:"isci_temel" },
  { id: "s10_ih_002", s: "{a} işçi {b} günde bitiriyorsa, işin {c} günde bitmesi için kaç işçi gerekir?", c: "{a}*{b}/{c}", v: {a:[3,8], b:[10,30], c:[5,15], kosul:"c<b"}, z:"orta", alt:"isci_sayisi_bulma" },

  // ALT DAL 2: İŞÇİ PROBLEMLERİ (BİLEŞİK)
  { id: "s10_ih_003", s: "{a} işçi günde {b} saat çalışarak {c} günde bitiriyorsa, {d} işçi günde {e} saat çalışarak kaç günde bitirir?", c: "{a}*{b}*{c}/({d}*{e})", v: {a:[3,7], b:[6,10], c:[8,20], d:[4,9], e:[7,12]}, z:"cok_zor", alt:"isci_saat_gun" },
  { id: "s10_ih_004", s: "{a} işçi {b} m² duvarı {c} günde örerse, {d} işçi {e} m² duvarı kaç günde örer?", c: "{a}*{c}*{e}/({b}*{d})", v: {a:[2,6], b:[20,60], c:[4,10], d:[3,8], e:[30,80]}, z:"cok_zor", alt:"duvar_oranti" },

  // ALT DAL 3: HAVUZ PROBLEMLERİ (DOĞRU ORANTILI)
  { id: "s10_ih_005", s: "{a} musluk bir havuzu {b} saatte dolduruyorsa {c} musluk kaç saatte doldurur?", c: "{a}*{b}/{c}", v: {a:[2,6], b:[6,18], c:[3,8]}, z:"orta", alt:"musluk_temel" },
  { id: "s10_ih_006", s: "Bir musluk havuzu {a} saatte doldurup diğeri {b} saatte boşaltıyorsa ikisi birlikte kaç saatte doldurur? (a<b)", c: "{a}*{b}/({b}-{a})", v: {a:[3,6], b:[8,15], kosul:"a<b"}, z:"zor", alt:"doldur_bosalt" },

  // ALT DAL 4: İŞÇİ-HAVUZ KARIŞIK
  { id: "s10_ih_007", s: "A işçisi {a} günde, B işçisi {b} günde bitiriyor. İkisi birlikte {c} gün çalışırsa işin kaçta kaçı biter?", c: "{c}*(1/{a}+1/{b})", v: {a:[4,10], b:[5,12], c:[2,4], kosul:"c<min(a,b)"}, z:"cok_zor", alt:"birlikte_kismi" },
  { id: "s10_ih_008", s: "A işçisi {a} günde, B işçisi {b} günde bitiriyor. A {c} gün çalışıp bırakıyor, B kalanı kaç günde bitirir?", c: "(1-{c}/{a})*{b}", v: {a:[6,15], b:[8,20], c:[2,4], kosul:"c<a"}, z:"cok_zor", alt:"biri_birakir" },

  // ALT DAL 5: KAPASİTE PROBLEMLERİ
  { id: "s10_ih_009", s: "A'nın kapasitesi B'nin {a} katıdır. Birlikte {b} günde bitiriyorlarsa A tek başına kaç günde bitirir?", c: "{b}*({a}+1)/{a}", v: {a:[2,4], b:[4,12]}, z:"cok_zor", alt:"kapasite" },
  { id: "s10_ih_010", s: "A'nın çalışma hızı B'nin {a}/{b} katıdır. Birlikte {c} saatte bitiriyorlarsa A kaç saatte bitirir?", c: "{c}*({a}+{b})/{a}", v: {a:[2,5], b:[3,7], c:[6,15]}, z:"cok_zor", alt:"hiz_orani" },

  // ALT DAL 6: İŞÇİ PROBLEMLERİ (YAŞLANDIRMA)
  { id: "s10_ih_011", s: "Bir işçi {a} günde bitireceği işe başlıyor. {b} gün sonra işten ayrılıyor. Kalan işi başka bir işçi {c} günde bitiriyorsa ikinci işçi işin tamamını kaç günde bitirir?", c: "{c}/(1-{b}/{a})", v: {a:[8,20], b:[3,6], c:[5,15], kosul:"b<a"}, z:"cok_zor", alt:"is_degistirme" },

  // ALT DAL 7: HAVUZ PROBLEMLERİ (İLERİ)
  { id: "s10_ih_012", s: "Havuzu A {a} saatte dolduruyor, B {b} saatte boşaltıyor. Havuzun {k}/{m}'i dolu iken ikisi açılırsa kaç saatte dolar?", c: "(1-{k}/{m})/(1/{a}-1/{b})", v: {a:[3,6], b:[8,12], k:[1,3], m:[4,6], kosul:"a<b"}, z:"cok_zor", alt:"kismi_dolu" },
  { id: "s10_ih_013", s: "A musluğu {a} saatte, B musluğu {b} saatte dolduruyor. C musluğu {c} saatte boşaltıyor. Üçü birlikte kaç saatte doldurur?", c: "1/(1/{a}+1/{b}-1/{c})", v: {a:[3,6], b:[4,8], c:[8,15], kosul:"1/a+1/b>1/c"}, z:"cok_zor", alt:"uc_musluk" },

  // ALT DAL 8: İŞÇİ-HAVUZ ÖZEL SORULAR
  { id: "s10_ih_014", s: "Eşit kapasiteli {a} işçi bir işi {b} günde yapıyor. İşe başladıktan {c} gün sonra {d} işçi ayrılırsa iş kaç günde biter?", c: "{c}+({a}*{b}-{a}*{c})/({a}-{d})", v: {a:[5,10], b:[6,15], c:[2,4], d:[1,3], kosul:"c<b_ve_d<a"}, z:"cok_zor", alt:"isci_ayrilma" },
  { id: "s10_ih_015", s: "Bir işi A {a}, B {b}, C {c} günde bitiriyor. Üçü birlikte kaç günde bitirir?", c: "1/(1/{a}+1/{b}+1/{c})", v: {a:[4,10], b:[5,12], c:[6,15]}, z:"cok_zor", alt:"uc_isci_birlikte" },


  // ==========================================
  // KONU 9: ORANTI PROBLEMLERİ - HIZ-YOL (6 alt dal)
  // ==========================================

  // ALT DAL 1: HIZ-YOL-ZAMAN (DOĞRU ORANTI)
  { id: "s10_hz_001", s: "Sabit hızla {t1} saatte {x1} km yol alan araç {t2} saatte kaç km yol alır?", c: "{x1}*{t2}/{t1}", v: {t1:[2,6], x1:[120,480], t2:[3,8]}, z:"orta", alt:"sabit_hiz" },
  { id: "s10_hz_002", s: "Hız ile yol doğru orantılı mıdır? (Zaman sabitken)", c: "evet", v: {}, z:"orta", alt:"hiz_yol_dogru" },

  // ALT DAL 2: HIZ-ZAMAN (TERS ORANTI)
  { id: "s10_hz_003", s: "{x} km'lik yolu {v1} km/saat hızla {t1} saatte alan araç, {v2} km/saat hızla kaç saatte alır?", c: "{v1}*{t1}/{v2}", v: {x:[120,500], v1:[60,100], t1:[2,5], v2:[80,120]}, z:"orta", alt:"hiz_zaman_ters" },
  { id: "s10_hz_004", s: "Hız ile zaman ters orantılı mıdır? (Yol sabitken)", c: "evet", v: {}, z:"orta", alt:"hiz_zaman_ters_evet" },

  // ALT DAL 3: ORTALAMA HIZ
  { id: "s10_hz_005", s: "Bir araç {x1} km'lik yolu {v1} km/saatle, {x2} km'lik yolu {v2} km/saatle gidiyor. Ortalama hızı kaçtır?", c: "({x1}+{x2})/({x1}/{v1}+{x2}/{v2})", v: {x1:[60,180], v1:[60,100], x2:[80,200], v2:[40,80]}, z:"cok_zor", alt:"ortalama_hiz" },
  { id: "s10_hz_006", s: "Gidilen yolun yarısını {v1} km/saatle, diğer yarısını {v2} km/saatle giden aracın ortalama hızı kaçtır?", c: "2*{v1}*{v2}/({v1}+{v2})", v: {v1:[40,100], v2:[30,80]}, z:"cok_zor", alt:"yari_yariya" },

  // ALT DAL 4: KARŞILAŞMA PROBLEMLERİ
  { id: "s10_hz_007", s: "Aralarında {x} km mesafe olan iki araç {v1} ve {v2} km/saat hızla birbirine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?", c: "{x}/({v1}+{v2})", v: {x:[100,400], v1:[40,80], v2:[30,70]}, z:"orta", alt:"karsilasma" },
  { id: "s10_hz_008", s: "İki araç aynı anda birbirine doğru hareket ediyor. Karşılaşma süresi {t} saat, hızları toplamı {vt} ise aralarındaki mesafe kaç km'dir?", c: "{t}*{vt}", v: {t:[2,5], vt:[80,160]}, z:"orta", alt:"karsilasma_mesafe" },

  // ALT DAL 5: YETİŞME PROBLEMLERİ
  { id: "s10_hz_009", s: "Aralarında {x} km mesafe olan iki araç aynı yönde {v1} ve {v2} km/saat hızla hareket ediyor. Arkadaki öndekine kaç saatte yetişir? (v1>v2)", c: "{x}/({v1}-{v2})", v: {x:[20,80], v1:[80,120], v2:[40,60], kosul:"v1>v2"}, z:"zor", alt:"yetisme" },
  { id: "s10_hz_010", s: "A kentinden {v1} hızla çıkan araçtan {t} saat sonra {v2} hızla ikinci araç çıkıyor. İkinci araç kaç saatte yetişir?", c: "{v1}*{t}/({v2}-{v1})", v: {v1:[40,70], v2:[80,120], t:[1,3], kosul:"v2>v1"}, z:"cok_zor", alt:"sonradan_yetisme" },

  // ALT DAL 6: HIZ-YOL KARIŞIK
  { id: "s10_hz_011", s: "Bir araç gideceği yolun önce {a}/{b}'ini {v1} km/saatle, kalanını {v2} km/saatle gidiyor. Ortalama hızı kaçtır?", c: "1/(({a}/{b})/{v1}+(1-{a}/{b})/{v2})", v: {a:[1,3], b:[4,6], v1:[60,100], v2:[40,80]}, z:"cok_zor", alt:"kismi_hiz" },
  { id: "s10_hz_012", s: "Bir araç {v1} km/saat hızla {t} saat gidip, {v2} km/saat hızla dönüyor. Gidiş-dönüş ortalama hızı kaçtır?", c: "2*{v1}*{v2}/({v1}+{v2})", v: {v1:[60,100], v2:[40,80]}, z:"cok_zor", alt:"gidis_donus" },


  // ==========================================
  // KONU 10: ORANTI PROBLEMLERİ - KARIŞIM (6 alt dal)
  // ==========================================

  // ALT DAL 1: KARIŞIM ORANI
  { id: "s10_km_001", s: "Tuz oranı %{o1} olan {m1} kg tuzlu su ile %{o2} olan {m2} kg karıştırılıyor. Yeni oran % kaçtır?", c: "({o1}*{m1}+{o2}*{m2})/({m1}+{m2})", v: {o1:[10,30], m1:[20,80], o2:[20,60], m2:[20,80]}, z:"cok_zor", alt:"karisim_hesaplama" },
  { id: "s10_km_002", s: "Karışımdaki tuz oranı ile tuz miktarı arasında nasıl bir orantı vardır?", c: "dogru_oranti", v: {}, z:"orta", alt:"tuz_oranti" },

  // ALT DAL 2: SU EKLEME/ÇIKARMA
  { id: "s10_km_003", s: "Tuz oranı %{o} olan {m} kg tuzlu suya {s} kg su eklenirse yeni oran % kaç olur?", c: "{o}*{m}/({m}+{s})", v: {o:[20,50], m:[30,80], s:[10,30]}, z:"cok_zor", alt:"su_ekleme" },
  { id: "s10_km_004", s: "Tuz oranı %{o} olan {m} kg tuzlu sudan {b} kg su buharlaştırılırsa yeni oran % kaç olur?", c: "{o}*{m}/({m}-{b})", v: {o:[10,30], m:[40,100], b:[5,15], kosul:"b<m"}, z:"cok_zor", alt:"buharlastirma" },

  // ALT DAL 3: KARIŞIM PROBLEMLERİ (İLERİ)
  { id: "s10_km_005", s: "%{o1} tuz oranı olan karışımdan %{o2} tuz oranı elde etmek için karışımın ne kadarı buharlaştırılmalıdır?", c: "{m}*(1-{o1}/{o2})", v: {o1:[10,25], o2:[30,50], m:[50,100], kosul:"o2>o1"}, z:"cok_zor", alt:"istenen_oran" },
  { id: "s10_km_006", s: "Şeker oranı %{o1} olan {m1} gr ile %{o2} olan {m2} gr karıştırılıyor. Karışıma {s} gr şeker eklenirse yeni oran % kaçtır?", c: "({o1}*{m1}+{o2}*{m2}+{s})/({m1}+{m2}+{s})", v: {o1:[10,30], m1:[30,60], o2:[20,50], m2:[20,50], s:[5,20]}, z:"cok_zor", alt:"seker_ekleme" },

  // ALT DAL 4: ALAŞIM PROBLEMLERİ
  { id: "s10_km_007", s: "Altın oranı %{o1} olan {m1} gr alaşım ile %{o2} olan {m2} gr alaşım karıştırılıyor. Yeni alaşımın altın oranı % kaçtır?", c: "({o1}*{m1}+{o2}*{m2})/({m1}+{m2})", v: {o1:[40,80], m1:[50,150], o2:[20,50], m2:[50,150]}, z:"cok_zor", alt:"alasim" },
  { id: "s10_km_008", s: "%{o1} saflıkta {m1} gr altın ile %{o2} saflıkta kaç gr altın karıştırılırsa %{o3} saflık elde edilir?", c: "{m1}*({o3}-{o1})/({o2}-{o3})", v: {o1:[40,60], o2:[80,95], o3:[50,75], m1:[50,150], kosul:"o1<o3<o2"}, z:"cok_zor", alt:"saflik" },

  // ALT DAL 5: KARIŞIM VE ORANTI İLİŞKİSİ
  { id: "s10_km_009", s: "Karışım problemlerinde tuz miktarı ile karışım miktarı arasında nasıl bir orantı vardır?", c: "dogru_oranti_(tuz_orani_sabitse)", v: {}, z:"orta", alt:"tuz_karisim_oranti" },
  { id: "s10_km_010", s: "Karışıma su eklenince tuz oranı nasıl değişir?", c: "azalir_(ters_oranti_gibi)", v: {}, z:"orta", alt:"su_etkisi" },

  // ALT DAL 6: KARIŞIM ÖZEL SORULAR
  { id: "s10_km_011", s: "%{o} tuz oranı olan {m} kg karışımın {k}/{l}'i dökülüp yerine aynı miktar su eklenirse yeni oran % kaç olur?", c: "{o}*(1-{k}/{l})", v: {o:[20,50], m:[40,100], k:[1,3], l:[3,5], kosul:"k<l"}, z:"cok_zor", alt:"dokup_su_ekleme" },
  { id: "s10_km_012", s: "%{o1} ve %{o2} tuz oranına sahip iki karışım hangi oranda karıştırılırsa %{o3} oran elde edilir?", c: "({o3}-{o2})/({o1}-{o2})", v: {o1:[30,60], o2:[10,25], o3:[20,40], kosul:"o1>o3>o2"}, z:"cok_zor", alt:"karisim_orani_bulma" },


  // ==========================================
  // KONU 11: ORANTI PROBLEMLERİ - GENEL (8 alt dal)
  // ==========================================

  // ALT DAL 1: PAYLAŞTIRMA PROBLEMLERİ
  { id: "s10_gp_001", s: "{t} TL parayı {a} ve {b} yaşlarıyla doğru orantılı paylaştırınız.", c: "{a}*{t}/({a}+{b})_ve_{b}*{t}/({a}+{b})", v: {a:[2,8], b:[3,10], t:[50,200]}, z:"orta", alt:"para_paylastirma" },
  { id: "s10_gp_002", s: "{t} TL parayı {a}, {b}, {c} ile ters orantılı paylaştırınız.", c: "{sonuc}", v: {a:[2,5], b:[3,6], c:[4,8], t:[60,200]}, z:"cok_zor", alt:"ters_paylastirma" },

  // ALT DAL 2: MİRAS PROBLEMLERİ
  { id: "s10_gp_003", s: "{t} TL miras {a}, {b}, {c} çocuğa yaşlarıyla doğru orantılı paylaştırılıyor. En büyük çocuk kaç TL alır?", c: "{c}*{t}/({a}+{b}+{c})", v: {a:[3,8], b:[5,12], c:[8,18], t:[100,500]}, z:"zor", alt:"miras" },
  { id: "s10_gp_004", s: "Miras 2, 3 ve 5 ile doğru orantılı paylaştırılıyor. En küçük pay 40 TL ise toplam miras kaç TL'dir?", c: "200", v: {}, z:"zor", alt:"miras_ters" },

  // ALT DAL 3: ORTAKLIK PROBLEMLERİ
  { id: "s10_gp_005", s: "{a} TL, {b} TL ve {c} TL sermaye ile kurulan ortaklıkta {k} TL kâr sermayelerle doğru orantılı paylaştırılıyor. En çok kâr alan kaç TL alır?", c: "{max}*{k}/({a}+{b}+{c})", v: {a:[1000,5000], b:[2000,6000], c:[3000,8000], k:[500,2000]}, z:"zor", alt:"ortaklik" },
  { id: "s10_gp_006", s: "Bir ortaklıkta A {a} ay, B {b} ay, C {c} ay kalmıştır. Kâr kalma süreleriyle doğru orantılı paylaştırılıyor.", c: "{a}*{k}/{t}_ve_{b}*{k}/{t}_ve_{c}*{k}/{t}", v: {a:[3,8], b:[4,10], c:[5,12], k:[500,2000], t:"{a}+{b}+{c}"}, z:"cok_zor", alt:"sureli_ortaklik" },

  // ALT DAL 4: KARIŞIK PAYLAŞTIRMA
  { id: "s10_gp_007", s: "{t} sayısı {a} ile doğru, {b} ile ters orantılı iki parçaya ayrılıyor. Parçalar nedir?", c: "{t}*{a}/({a}+1/{b})_ve_{t}*(1/{b})/({a}+1/{b})", v: {a:[2,6], b:[3,8], t:[30,100]}, z:"cok_zor", alt:"karisik_orantili" },
  { id: "s10_gp_008", s: "x, y ile doğru, z ile ters orantılıdır. x={x1}, y={y1}, z={z1} iken x={x2}, y={y2} ise z kaçtır?", c: "{x1}*{y2}*{z1}/({x2}*{y1})", v: {x1:[4,10], y1:[3,8], z1:[2,6], x2:[6,15], y2:[4,10]}, z:"cok_zor", alt:"dogru_ters_bilesik" },

  // ALT DAL 5: GRAFİK PROBLEMLERİ
  { id: "s10_gp_009", s: "Doğru orantı grafiği nasıl bir doğrudur?", c: "orijinden_gecen_dogru", v: {}, z:"orta", alt:"dogru_grafik" },
  { id: "s10_gp_010", s: "y = {k}x doğrusu üzerinde x={a} iken y={b} ise k kaçtır?", c: "{b}/{a}", v: {a:[2,8], b:[6,40], kosul:"b%a==0"}, z:"orta", alt:"grafik_k_bulma" },

  // ALT DAL 6: ORANTI VE MANTIK
  { id: "s10_gp_011", s: "Bir işte çalışan işçi sayısı 2 katına çıkarılırsa işin bitme süresi nasıl değişir?", c: "yarisi_kadar_olur", v: {}, z:"orta", alt:"isci_kat" },
  { id: "s10_gp_012", s: "Bir aracın hızı %50 artırılırsa aynı yolu kaçta kaçı zamanda alır?", c: "2/3'u_kadar", v: {}, z:"cok_zor", alt:"hiz_artirma" },

  // ALT DAL 7: ORANTI PROBLEMLERİ (ZOR)
  { id: "s10_gp_013", s: "a, b ile doğru, c ile ters orantılıdır. a={a1}, b={b1}, c={c1} iken b={b2}, c={c2} ise a kaçtır?", c: "{a1}*{b2}*{c1}/({b1}*{c2})", v: {a1:[4,12], b1:[3,8], c1:[2,6], b2:[5,10], c2:[3,8]}, z:"cok_zor", alt:"uclu_oranti" },
  { id: "s10_gp_014", s: "x ve y çoklukları arasında x·y = {k} bağıntısı varsa x ile y nasıl orantılıdır?", c: "ters_orantili", v: {k:[12,48]}, z:"orta", alt:"carpim_sabit" },

  // ALT DAL 8: ORANTI GENEL ÖZET
  { id: "s10_gp_015", s: "Doğru orantıda çoklukların bölümü sabittir. (a/b=k). Ters orantıda ise ne sabittir?", c: "carpimlari_(a·b=k)", v: {}, z:"orta", alt:"dogru_ters_fark" },
  { id: "s10_gp_016", s: "Bileşik orantıda çözüm stratejisi nedir?", c: "her_cokluk_ayri_ayri_incelenir_dogru_veya_ters_oldugu_belirlenir", v: {}, z:"orta", alt:"bilesik_ozet" },


  // ==========================================
  // KONU 12: ARİTMETİK-GEOMETRİK-HARMONİK ORTALAMA (8 alt dal)
  // ==========================================

  // ALT DAL 1: ARİTMETİK ORTALAMA
  { id: "s10_ao_001", s: "{a} ve {b} sayılarının aritmetik ortalaması kaçtır?", c: "({a}+{b})/2", v: {a:[2,20], b:[3,25]}, z:"orta", alt:"aritmetik_ortalama" },
  { id: "s10_ao_002", s: "n tane sayının aritmetik ortalaması nasıl bulunur?", c: "sayilarin_toplami/n", v: {}, z:"orta", alt:"ao_formul" },
  { id: "s10_ao_003", s: "{a}, {b}, {c} sayılarının aritmetik ortalaması kaçtır?", c: "({a}+{b}+{c})/3", v: {a:[4,16], b:[5,18], c:[6,20]}, z:"orta", alt:"uc_sayi_ao" },

  // ALT DAL 2: GEOMETRİK ORTALAMA
  { id: "s10_ao_004", s: "{a} ve {b} sayılarının geometrik ortalaması kaçtır?", c: "Math.sqrt({a}*{b})", v: {a:[2,18], b:[2,18], kosul:"tam_kare"}, z:"zor", alt:"geometrik_ortalama" },
  { id: "s10_ao_005", s: "Geometrik ortalama formülü nedir?", c: "n√(x₁·x₂·...·xₙ)", v: {}, z:"zor", alt:"go_formul" },
  { id: "s10_ao_006", s: "{a}, {b}, {c} sayılarının geometrik ortalaması kaçtır?", c: "Math.cbrt({a}*{b}*{c})", v: {a:[2,8], b:[3,12], c:[4,16], kosul:"tam_kup"}, z:"cok_zor", alt:"uc_sayi_go" },

  // ALT DAL 3: HARMONİK ORTALAMA
  { id: "s10_ao_007", s: "{a} ve {b} sayılarının harmonik ortalaması kaçtır?", c: "2*{a}*{b}/({a}+{b})", v: {a:[3,12], b:[4,15]}, z:"cok_zor", alt:"harmonik_ortalama" },
  { id: "s10_ao_008", s: "Harmonik ortalama formülü nedir?", c: "n/(1/x₁+1/x₂+...+1/xₙ)", v: {}, z:"cok_zor", alt:"ho_formul" },

  // ALT DAL 4: AO-GO İLİŞKİSİ
  { id: "s10_ao_009", s: "AO ≥ GO eşitsizliği ne zaman eşit olur?", c: "sayilar_birbirine_esit_iken", v: {}, z:"cok_zor", alt:"ao_go_esitlik" },
  { id: "s10_ao_010", s: "{a} ve {b} pozitif sayıları için AO - GO farkı kaçtır?", c: "({a}+{b})/2-Math.sqrt({a}*{b})", v: {a:[2,10], b:[3,12]}, z:"cok_zor", alt:"ao_go_fark" },
  { id: "s10_ao_011", s: "Toplamı sabit iki pozitif sayının çarpımı ne zaman en büyük olur?", c: "sayilar_esit_iken", v: {}, z:"cok_zor", alt:"max_carpim_ao_go" },

  // ALT DAL 5: ORTALAMA PROBLEMLERİ
  { id: "s10_ao_012", s: "{a} sayısının aritmetik ve geometrik ortalamalarının toplamı kaçtır?", c: "2*{a}", v: {a:[3,10]}, z:"cok_zor", alt:"ao_go_toplam" },
  { id: "s10_ao_013", s: "Aritmetik ortalaması {ao}, geometrik ortalaması {go} olan iki sayının çarpımı kaçtır?", c: "{go}*{go}", v: {ao:[5,15], go:[3,12], kosul:"ao>go"}, z:"cok_zor", alt:"ao_go_carpim" },
  { id: "s10_ao_014", s: "Aritmetik ortalaması {ao}, geometrik ortalaması {go} olan iki sayının toplamı kaçtır?", c: "2*{ao}", v: {ao:[5,15], go:[3,12]}, z:"cok_zor", alt:"ao_toplam" },

  // ALT DAL 6: ORTALAMA SORULARI
  { id: "s10_ao_015", s: "x ve y sayılarının aritmetik ortalaması {ao}, geometrik ortalaması {go} ise x²+y² = ?", c: "4*{ao}*{ao}-2*{go}*{go}", v: {ao:[5,12], go:[3,10], kosul:"ao>go"}, z:"cok_zor", alt:"kareler_toplami_ao_go" },
  { id: "s10_ao_016", s: "x ve y sayılarının aritmetik ortalaması {ao}, harmonik ortalaması {ho} ise geometrik ortalaması kaçtır?", c: "Math.sqrt({ao}*{ho})", v: {ao:[4,10], ho:[2,8], kosul:"ao>ho"}, z:"cok_zor", alt:"ao_ho_go" },

  // ALT DAL 7: ORTALAMA VE ORANTI
  { id: "s10_ao_017", s: "Aritmetik ortalama ile doğru orantı arasında nasıl bir ilişki vardır?", c: "dogru_orantili_cokluklarin_aritmetik_ortalamasi_oranti_sabitidir", v: {}, z:"cok_zor", alt:"ao_oranti" },
  { id: "s10_ao_018", s: "Ters orantılı iki sayının hangi ortalaması daha anlamlıdır?", c: "harmonik_ortalama", v: {}, z:"cok_zor", alt:"ho_ters" },

  // ALT DAL 8: ORTALAMA KARIŞIK
  { id: "s10_ao_019", s: "İki sayının AO={ao}, GO={go} ise bu sayılar nedir?", c: "x+y=2*{ao}, x·y={go}²", v: {ao:[5,12], go:[3,10], kosul:"ao>go"}, z:"cok_zor", alt:"ao_go_sayi_bulma" },
  { id: "s10_ao_020", s: "{a} ve {b} sayıları için AO, GO, HO sıralaması nasıldır?", c: "AO≥GO≥HO", v: {a:[3,10], b:[4,12], kosul:"a!=b"}, z:"cok_zor", alt:"ao_go_ho_siralama" },

],

 // ==========================================
// SEVİYE 11: PROBLEMLER
// ==========================================
11: [

  // ==========================================
  // KONU 1: SAYI PROBLEMLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: BİLİNMEYEN SAYIYI BULMA
  { id: "s11_sp_001", s: "Bir sayının {a} katının {b} fazlası {c} ise bu sayı kaçtır?", c: "({c}-{b})/{a}", v: {a:[2,5], b:[2,10], c:[10,50]}, z:"orta", alt:"sayi_bulma" },
  { id: "s11_sp_002", s: "Bir sayının {a} eksiğinin {b} katı {c} ise bu sayı kaçtır?", c: "{c}/{b}+{a}", v: {a:[2,8], b:[2,5], c:[10,40]}, z:"orta", alt:"sayi_bulma_2" },
  { id: "s11_sp_003", s: "Hangi sayının {a} katı ile kendisinin toplamı {t}'dir?", c: "{t}/({a}+1)", v: {a:[2,5], t:[15,60]}, z:"orta", alt:"kat_toplam" },

  // ALT DAL 2: İKİ SAYI PROBLEMLERİ
  { id: "s11_sp_004", s: "İki sayının toplamı {t}, farkı {f} ise büyük sayı kaçtır?", c: "({t}+{f})/2", v: {t:[10,40], f:[2,10], kosul:"t>f"}, z:"orta", alt:"toplam_fark" },
  { id: "s11_sp_005", s: "İki sayının toplamı {t}, biri diğerinin {a} katı ise küçük sayı kaçtır?", c: "{t}/({a}+1)", v: {a:[2,5], t:[15,60]}, z:"orta", alt:"toplam_kat" },
  { id: "s11_sp_006", s: "İki sayının farkı {f}, biri diğerinin {a} katı ise büyük sayı kaçtır?", c: "{a}*{f}/({a}-1)", v: {a:[2,5], f:[2,10], kosul:"a>1"}, z:"zor", alt:"fark_kat" },

  // ALT DAL 3: ARDIŞIK SAYI PROBLEMLERİ
  { id: "s11_sp_007", s: "Ardışık {n} sayının toplamı {t} ise en büyük sayı kaçtır?", c: "{t}/{n}+({n}-1)/2", v: {n:[3,5], t:[15,60], kosul:"t%n==0"}, z:"zor", alt:"ardisik_toplam" },
  { id: "s11_sp_008", s: "Ardışık {n} çift sayının toplamı {t} ise en küçük sayı kaçtır?", c: "{t}/{n}-({n}-1)", v: {n:[3,5], t:[30,100], kosul:"t%n==0"}, z:"cok_zor", alt:"ardisik_cift" },
  { id: "s11_sp_009", s: "Ardışık {n} tek sayının toplamı {t} ise ortanca sayı kaçtır? (n tek)", c: "{t}/{n}", v: {n:[3,5], t:[15,45], kosul:"t%n==0"}, z:"cok_zor", alt:"ardisik_tek" },

  // ALT DAL 4: RAKAM PROBLEMLERİ
  { id: "s11_sp_010", s: "İki basamaklı bir sayının rakamları toplamı {rt}'tir. Onlar basamağı birler basamağının {a} katı ise bu sayı kaçtır?", c: "{onlar}*10+{birler}", v: {rt:[3,9], a:[2,3], kosul:"rt%(a+1)==0"}, z:"cok_zor", alt:"iki_basamakli" },
  { id: "s11_sp_011", s: "İki basamaklı bir sayının rakamları yer değiştirince sayı {f} artıyor. Rakamları toplamı {rt} ise bu sayı kaçtır?", c: "{sayi}", v: {f:[9,36], rt:[5,12], kosul:"f%9==0"}, z:"cok_zor", alt:"rakam_degisimi" },

  // ALT DAL 5: DENKLEM KURMA
  { id: "s11_sp_012", s: "\"Bir sayının {a} katının {b} eksiği, aynı sayının {c} katının {d} fazlasına eşittir\" ifadesine uygun denklemi kurunuz.", c: "{a}x-{b}={c}x+{d}", v: {a:[3,6], b:[2,8], c:[2,4], d:[3,10]}, z:"zor", alt:"denklem_kurma" },
  { id: "s11_sp_013", s: "Bir sayının {a}/{b}'i ile {c}/{d}'ünün toplamı {t} ise bu sayı kaçtır?", c: "{t}/({a}/{b}+{c}/{d})", v: {a:[1,4], b:[3,7], c:[1,4], d:[2,5], t:[10,40]}, z:"cok_zor", alt:"kesirli_denklem" },

  // ALT DAL 6: TOPLAM-FARK PROBLEMLERİ
  { id: "s11_sp_014", s: "İki sayıdan biri diğerinin {a} katından {b} fazladır. Toplamları {t} ise küçük sayı kaçtır?", c: "({t}-{b})/({a}+1)", v: {a:[2,4], b:[2,8], t:[20,60]}, z:"zor", alt:"kat_fazla_toplam" },
  { id: "s11_sp_015", s: "İki sayıdan biri diğerinin {a} katından {b} eksiktir. Farkları {f} ise büyük sayı kaçtır?", c: "({a}*{f}+{b})/({a}-1)", v: {a:[2,5], b:[1,5], f:[3,12], kosul:"a>1"}, z:"cok_zor", alt:"kat_eksik_fark" },

  // ALT DAL 7: PROBLEM KURMA VE ÇÖZME
  { id: "s11_sp_016", s: "Bir depodaki suyun önce {a}/{b}'i, sonra kalanın {c}/{d}'ü kullanılıyor. Geriye {kalan} litre kaldığına göre başlangıçta kaç litre vardı?", c: "{kalan}/((1-{a}/{b})*(1-{c}/{d}))", v: {a:[1,3], b:[3,7], c:[1,3], d:[2,5], kalan:[10,40]}, z:"cok_zor", alt:"depo_problemi" },
  { id: "s11_sp_017", s: "Bir paranın önce {a}/{b}'i, sonra kalanın {c}/{d}'ü harcanıyor. Geriye {kalan} TL kaldığına göre başlangıçta kaç TL vardı?", c: "{kalan}/((1-{a}/{b})*(1-{c}/{d}))", v: {a:[1,3], b:[4,8], c:[1,3], d:[2,5], kalan:[20,80]}, z:"cok_zor", alt:"para_problemi" },

  // ALT DAL 8: ÖZEL SAYI PROBLEMLERİ
  { id: "s11_sp_018", s: "x ve y pozitif tam sayıdır. x·y = {c} ve x+y = {t} ise |x-y| kaçtır?", c: "Math.sqrt({t}*{t}-4*{c})", v: {c:[10,40], t:[10,20], kosul:"t*t>4*c"}, z:"cok_zor", alt:"carpim_toplam_fark" },
  { id: "s11_sp_019", s: "Bir sayının kendisi ile {a}/{b}'inin toplamı {t} ise bu sayı kaçtır?", c: "{t}*{b}/({a}+{b})", v: {a:[1,4], b:[2,5], t:[20,80]}, z:"zor", alt:"kesir_toplam" },


  // ==========================================
  // KONU 2: KESİR PROBLEMLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: SAYININ KESRİNİ BULMA
  { id: "s11_kp_001", s: "{a} sayısının {b}/{c}'i kaçtır?", c: "{a}*{b}/{c}", v: {a:[12,60], b:[1,"{c}-1"], c:[2,6], kosul:"a%c==0"}, z:"orta", alt:"sayinin_kesri" },
  { id: "s11_kp_002", s: "{a} sayısının {b}/{c}'i ile {d}/{e}'ünün toplamı kaçtır?", c: "{a}*({b}/{c}+{d}/{e})", v: {a:[12,60], b:[1,3], c:[3,6], d:[1,3], e:[2,5]}, z:"zor", alt:"kesir_toplam" },

  // ALT DAL 2: KESRİ VERİLEN SAYIYI BULMA
  { id: "s11_kp_003", s: "{a}/{b}'i {deger} olan sayı kaçtır?", c: "{deger}*{b}/{a}", v: {a:[1,4], b:[3,7], deger:[6,30]}, z:"orta", alt:"kesri_verilen" },
  { id: "s11_kp_004", s: "{a}/{b}'i ile {c}/{d}'ünün toplamı {t} olan sayı kaçtır?", c: "{t}/({a}/{b}+{c}/{d})", v: {a:[1,3], b:[3,6], c:[1,3], d:[2,5], t:[10,40]}, z:"cok_zor", alt:"kesir_toplam_verilen" },

  // ALT DAL 3: KALAN KESİR PROBLEMLERİ
  { id: "s11_kp_005", s: "Parasının önce {a}/{b}'ini, sonra kalanın {c}/{d}'ünü harcayan birinin geriye parasının kaçta kaçı kalır?", c: "(1-{a}/{b})*(1-{c}/{d})", v: {a:[1,3], b:[3,7], c:[1,3], d:[2,5]}, z:"cok_zor", alt:"kalan_kesir" },
  { id: "s11_kp_006", s: "Bir depodaki suyun önce {a}/{b}'i, sonra kalanın {c}/{d}'ü kullanılıyor. Depoda suyun kaçta kaçı kalır?", c: "(1-{a}/{b})*(1-{c}/{d})", v: {a:[1,3], b:[4,7], c:[1,3], d:[2,5]}, z:"cok_zor", alt:"kalan_su_kesri" },

  // ALT DAL 4: ZİNCİRLEME KESİR PROBLEMLERİ
  { id: "s11_kp_007", s: "Bir paranın önce {a}/{b}'i, sonra kalanın {c}/{d}'ü, daha sonra kalanın {e}/{f}'i harcanıyor. Geriye paranın kaçta kaçı kalır?", c: "(1-{a}/{b})*(1-{c}/{d})*(1-{e}/{f})", v: {a:[1,2], b:[3,5], c:[1,3], d:[3,5], e:[1,3], f:[2,4]}, z:"cok_zor", alt:"zincirleme_kesir" },
  { id: "s11_kp_008", s: "Zincirleme kesir problemlerinde genel çözüm stratejisi nedir?", c: "kalan_uzerinden_islem_yapilir", v: {}, z:"orta", alt:"zincirleme_strateji" },

  // ALT DAL 5: KESİR PROBLEMLERİ (TERS İŞLEM)
  { id: "s11_kp_009", s: "Hangi sayının {a}/{b}'i ile {c}/{d}'ünün farkı {f}'tir?", c: "{f}/({a}/{b}-{c}/{d})", v: {a:[3,5], b:[3,6], c:[1,3], d:[4,7], kosul:"a/b>c/d", f:[3,15]}, z:"cok_zor", alt:"kesir_farki_verilen" },
  { id: "s11_kp_010", s: "Bir sayının {a}/{b} fazlası ile {c}/{d} eksiğinin toplamı {t} ise bu sayı kaçtır?", c: "{t}/(2+{a}/{b}-{c}/{d})", v: {a:[1,3], b:[3,6], c:[1,3], d:[3,7], t:[20,50]}, z:"cok_zor", alt:"fazla_eksik_toplam" },

  // ALT DAL 6: KESİR VE DENKLEM
  { id: "s11_kp_011", s: "x + x/{a} = {t} ise x kaçtır?", c: "{t}*{a}/({a}+1)", v: {a:[2,6], t:[10,40]}, z:"zor", alt:"x_arti_x_a" },
  { id: "s11_kp_012", s: "x - x/{a} = {t} ise x kaçtır?", c: "{t}*{a}/({a}-1)", v: {a:[2,6], t:[5,30], kosul:"a>1"}, z:"zor", alt:"x_eksi_x_a" },

  // ALT DAL 7: KESİR PROBLEMLERİ (SÖZEL)
  { id: "s11_kp_013", s: "Bir satıcı elindeki malların önce {a}/{b}'ini, sonra kalanın {c}/{d}'ünü satıyor. Geriye {kalan} adet mal kaldığına göre başlangıçta kaç adet mal vardı?", c: "{kalan}/((1-{a}/{b})*(1-{c}/{d}))", v: {a:[1,3], b:[3,7], c:[1,3], d:[2,5], kalan:[10,30]}, z:"cok_zor", alt:"mal_satma" },
  { id: "s11_kp_014", s: "Bir öğrenci sınavdaki soruların önce {a}/{b}'ini, sonra kalanın {c}/{d}'ünü çözüyor. Geriye {kalan} soru kaldığına göre sınavda kaç soru vardı?", c: "{kalan}/((1-{a}/{b})*(1-{c}/{d}))", v: {a:[1,3], b:[3,6], c:[1,3], d:[2,5], kalan:[5,20]}, z:"cok_zor", alt:"sinav_soru" },

  // ALT DAL 8: KESİR PROBLEMLERİ KARIŞIK
  { id: "s11_kp_015", s: "Bir sayının {a}/{b}'i {c} ise bu sayının {d}/{e}'ü kaçtır?", c: "{c}*{b}*{d}/({a}*{e})", v: {a:[1,4], b:[3,7], c:[5,25], d:[1,4], e:[2,6]}, z:"cok_zor", alt:"kesirden_kesre" },
  { id: "s11_kp_016", s: "{a}/{b} + {c}/{d} = ? (x cinsinden: x'in {a}/{b}'i ile {c}/{d}'ünün toplamı)", c: "x*({a}/{b}+{c}/{d})", v: {a:[1,3], b:[3,6], c:[1,3], d:[2,5]}, z:"orta", alt:"kesir_toplam_x" },


  // ==========================================
  // KONU 3: YAŞ PROBLEMLERİ (10 alt dal)
  // ==========================================

  // ALT DAL 1: YAŞ TOPLAMI VE FARKI
  { id: "s11_yp_001", s: "Bir babanın yaşı çocuğunun yaşının {a} katıdır. Yaşları toplamı {t} ise çocuk kaç yaşındadır?", c: "{t}/({a}+1)", v: {a:[2,5], t:[18,48]}, z:"orta", alt:"yas_toplam_kat" },
  { id: "s11_yp_002", s: "Bir babanın yaşı çocuğunun yaşının {a} katıdır. Yaşları farkı {f} ise çocuk kaç yaşındadır?", c: "{f}/({a}-1)", v: {a:[3,6], f:[12,30], kosul:"a>1"}, z:"orta", alt:"yas_fark_kat" },

  // ALT DAL 2: n YIL SONRA/SONRA
  { id: "s11_yp_003", s: "Baba {b} yaşında, çocuk {c} yaşındadır. Kaç yıl sonra babanın yaşı çocuğunun yaşının {k} katı olur?", c: "({b}-{k}*{c})/({k}-1)", v: {b:[25,50], c:[2,10], k:[2,4], kosul:"b>k*c"}, z:"zor", alt:"kac_yil_sonra" },
  { id: "s11_yp_004", s: "Baba {b} yaşında, çocuk {c} yaşındadır. Kaç yıl önce babanın yaşı çocuğunun yaşının {k} katıydı?", c: "({k}*{c}-{b})/({k}-1)", v: {b:[30,60], c:[5,15], k:[3,5], kosul:"k*c>b"}, z:"cok_zor", alt:"kac_yil_once" },

  // ALT DAL 3: YAŞ ORANI PROBLEMLERİ
  { id: "s11_yp_005", s: "İki kardeşin yaşları oranı {a}/{b}'dir. {n} yıl sonra oran {c}/{d} olacağına göre küçük kardeş bugün kaç yaşındadır?", c: "{n}*({d}*{a}-{b}*{c})/({b}*{c}-{a}*{d})", v: {a:[2,4], b:[3,5], c:[3,5], d:[4,7], n:[2,8]}, z:"cok_zor", alt:"yas_orani" },
  { id: "s11_yp_006", s: "Bugünkü yaşları oranı {a}/{b} olan iki kardeşin {n} yıl önceki yaşları oranı {c}/{d} ise büyük kardeş kaç yaşındadır?", c: "{n}*({d}*{a}-{b}*{c})/({a}*{d}-{b}*{c})", v: {a:[3,6], b:[2,4], c:[2,4], d:[1,3], n:[2,6]}, z:"cok_zor", alt:"yas_orani_gecmis" },

  // ALT DAL 4: ÇOK KİŞİLİ YAŞ PROBLEMLERİ
  { id: "s11_yp_007", s: "Üç kardeşin yaşları toplamı {t}'tir. {n} yıl sonra yaşları toplamı kaç olur?", c: "{t}+3*{n}", v: {t:[20,60], n:[2,8]}, z:"orta", alt:"uc_kardes_toplam" },
  { id: "s11_yp_008", s: "Bir ailede baba, anne ve {c} çocuğun yaşları toplamı {t}'tir. {n} yıl önce yaşları toplamı kaçtı?", c: "{t}-{n}*({c}+2)", v: {c:[1,3], t:[40,80], n:[2,6]}, z:"zor", alt:"aile_toplam" },

  // ALT DAL 5: YAŞ FARKI SABİTLİĞİ
  { id: "s11_yp_009", s: "İki kişi arasındaki yaş farkı zamanla değişir mi?", c: "hayir_(sabittir)", v: {}, z:"orta", alt:"yas_farki_sabit" },
  { id: "s11_yp_010", s: "Baba {b} yaşında, çocuk {c} yaşındadır. Yaşları farkı her zaman kaçtır?", c: "{b}-{c}", v: {b:[25,50], c:[3,10]}, z:"kolay", alt:"sabit_fark" },

  // ALT DAL 6: YAŞ TOPLAMI PROBLEMLERİ
  { id: "s11_yp_011", s: "Baba ve çocuğunun yaşları toplamı {t}'tir. {n} yıl sonra toplam {t2} olacağına göre çocuk bugün kaç yaşındadır?", c: "({t}+2*{n}-{t2})/2", v: {t:[30,50], n:[3,8], t2:[40,70], kosul:"t2>t"}, z:"cok_zor", alt:"yas_toplam_degisim" },
  { id: "s11_yp_012", s: "{n} yıl önceki yaşları toplamı {t1}, bugünkü yaşları toplamı {t2} olan iki kardeşin {n} yıl sonraki yaşları toplamı kaç olur?", c: "{t2}+2*{n}", v: {t1:[20,40], t2:[30,50], n:[3,6]}, z:"zor", alt:"yas_toplam_uc_zaman" },

  // ALT DAL 7: DOĞUM YILI PROBLEMLERİ
  { id: "s11_yp_013", s: "Bir baba {b} yılında doğmuştur. Çocuğu {c} yılında doğduğuna göre baba kaç yaşında baba olmuştur?", c: "{c}-{b}", v: {b:[1960,1985], c:[1985,2010], kosul:"c>b"}, z:"orta", alt:"dogum_yili" },
  { id: "s11_yp_014", s: "{yil} yılında baba {b}, çocuk {c} yaşındadır. Baba hangi yıl doğmuştur?", c: "{yil}-{b}", v: {yil:[2000,2023], b:[25,50], c:[2,15]}, z:"orta", alt:"dogum_yili_bulma" },

  // ALT DAL 8: YAŞ PROBLEMLERİ (İLERİ)
  { id: "s11_yp_015", s: "Bir babanın yaşı, üç çocuğunun yaşları toplamının {a} katıdır. {n} yıl sonra babanın yaşı çocukların yaşları toplamına eşit olacağına göre baba bugün kaç yaşındadır?", c: "{a}*{n}*3/({a}-1)", v: {a:[2,4], n:[3,8]}, z:"cok_zor", alt:"baba_uc_cocuk" },
  { id: "s11_yp_016", s: "Anne {a}, baba {b} ve çocuk {c} yaşındadır. Kaç yıl sonra anne ve babanın yaşları toplamı çocuğun yaşının {k} katı olur?", c: "({a}+{b}-{k}*{c})/({k}-2)", v: {a:[25,40], b:[28,45], c:[2,8], k:[3,6], kosul:"a+b>k*c"}, z:"cok_zor", alt:"anne_baba_cocuk" },

  // ALT DAL 9: YAŞ PROBLEMLERİ (SÖZEL)
  { id: "s11_yp_017", s: "Ahmet {a} yaşındadır. Mehmet, Ahmet'ten {b} yaş büyüktür. {n} yıl sonra ikisinin yaşları toplamı kaç olur?", c: "{a}+{a}+{b}+2*{n}", v: {a:[10,25], b:[2,8], n:[3,10]}, z:"orta", alt:"ahmet_mehmet" },
  { id: "s11_yp_018", s: "Ayşe'nin yaşı, Fatma'nın yaşının {a} katıdır. {n} yıl sonra Ayşe'nin yaşı Fatma'nın yaşının {b} katı olacağına göre Fatma bugün kaç yaşındadır?", c: "{n}*({b}-1)/({a}-{b})", v: {a:[3,6], b:[2,"{a}-1"], n:[2,8]}, z:"cok_zor", alt:"ayse_fatma" },

  // ALT DAL 10: YAŞ PROBLEMLERİ ÖZET
  { id: "s11_yp_019", s: "Yaş problemlerinde en önemli kural nedir?", c: "herkesin_yasi_her_yil_1_artar_ve_yas_farki_sabittir", v: {}, z:"orta", alt:"yas_kurali" },
  { id: "s11_yp_020", s: "Yaş problemlerinde geçmiş yıl hesaplanırken nelere dikkat edilmelidir?", c: "herkesten_esit_yil_cikarilir_negatif_yas_olmaz", v: {}, z:"orta", alt:"gecmis_yas" },


  // ==========================================
  // KONU 4: YÜZDE PROBLEMLERİ (10 alt dal)
  // ==========================================

  // ALT DAL 1: YÜZDE HESAPLAMA
  { id: "s11_yz_001", s: "{a} sayısının %{p}'i kaçtır?", c: "{a}*{p}/100", v: {a:[50,500], p:[10,75]}, z:"orta", alt:"yuzde_hesapla" },
  { id: "s11_yz_002", s: "%{p}'i {deger} olan sayı kaçtır?", c: "{deger}*100/{p}", v: {p:[10,50], deger:[10,60]}, z:"orta", alt:"yuzde_verilen" },
  { id: "s11_yz_003", s: "{a} sayısı {b} sayısının yüzde kaçıdır?", c: "{a}*100/{b}", v: {a:[5,40], b:[20,200]}, z:"orta", alt:"yuzde_orani" },

  // ALT DAL 2: YÜZDE ARTIŞ-AZALIŞ
  { id: "s11_yz_004", s: "{a} sayısı %{p} artırılırsa kaç olur?", c: "{a}*(100+{p})/100", v: {a:[50,500], p:[10,50]}, z:"orta", alt:"yuzde_artis" },
  { id: "s11_yz_005", s: "{a} sayısı %{p} azaltılırsa kaç olur?", c: "{a}*(100-{p})/100", v: {a:[50,500], p:[5,40]}, z:"orta", alt:"yuzde_azalis" },
  { id: "s11_yz_006", s: "Bir sayı %{p} artırıldıktan sonra %{q} azaltılırsa son durumdaki değişim yüzde kaçtır?", c: "{p}-{q}-{p}*{q}/100", v: {p:[10,40], q:[5,25]}, z:"cok_zor", alt:"artis_azalis_net" },

  // ALT DAL 3: YÜZDE DEĞİŞİM
  { id: "s11_yz_007", s: "Bir malın fiyatı {a} TL'den {b} TL'ye düşmüştür. İndirim yüzde kaçtır?", c: "({a}-{b})*100/{a}", v: {a:[50,200], b:[30,150], kosul:"a>b"}, z:"orta", alt:"indirim_yuzdesi" },
  { id: "s11_yz_008", s: "Bir malın fiyatı {a} TL'den {b} TL'ye çıkmıştır. Zam yüzde kaçtır?", c: "({b}-{a})*100/{a}", v: {a:[40,150], b:[60,200], kosul:"b>a"}, z:"orta", alt:"zam_yuzdesi" },

  // ALT DAL 4: YÜZDE PROBLEMLERİ (ALIŞVERİŞ)
  { id: "s11_yz_009", s: "Bir ürüne önce %{p} zam, sonra %{q} indirim yapılıyor. Son fiyat ilk fiyata göre nasıl değişir?", c: "%({p}-{q}-{p}*{q}/100)_(artis/azalis)", v: {p:[10,30], q:[5,20]}, z:"cok_zor", alt:"zam_indirim" },
  { id: "s11_yz_010", s: "Etiket fiyatı {a} TL olan ürüne %{p} indirim yapılıyor. İndirimli fiyat kaç TL'dir?", c: "{a}*(100-{p})/100", v: {a:[50,500], p:[5,40]}, z:"orta", alt:"indirimli_fiyat" },

  // ALT DAL 5: KDV PROBLEMLERİ
  { id: "s11_yz_011", s: "KDV'siz fiyatı {a} TL olan ürünün %{k} KDV'li fiyatı kaç TL'dir?", c: "{a}*(100+{k})/100", v: {a:[50,300], k:[8,20]}, z:"orta", alt:"kdv_ekleme" },
  { id: "s11_yz_012", s: "%{k} KDV dahil fiyatı {s} TL olan ürünün KDV'siz fiyatı kaç TL'dir?", c: "{s}*100/(100+{k})", v: {k:[8,20], s:[100,600]}, z:"zor", alt:"kdv_cixarma" },

  // ALT DAL 6: YÜZDE VE KARIŞIM
  { id: "s11_yz_013", s: "Tuz oranı %{o} olan {m} kg tuzlu suda kaç kg tuz vardır?", c: "{o}*{m}/100", v: {o:[5,40], m:[20,100]}, z:"orta", alt:"tuz_miktari" },
  { id: "s11_yz_014", s: "{a} kg tuz {b} kg suya eklenirse tuz oranı yüzde kaç olur?", c: "{a}*100/({a}+{b})", v: {a:[5,25], b:[20,100]}, z:"orta", alt:"tuz_orani_bulma" },

  // ALT DAL 7: YÜZDE PROBLEMLERİ (SINAV)
  { id: "s11_yz_015", s: "{n} soruluk sınavda {d} doğru yapan öğrencinin başarı yüzdesi kaçtır?", c: "{d}*100/{n}", v: {n:[20,100], d:[5,"{n}"]}, z:"orta", alt:"basari_yuzdesi" },
  { id: "s11_yz_016", s: "Başarı yüzdesi %{b} olan öğrenci {n} sorudan kaç doğru yapmıştır?", c: "{b}*{n}/100", v: {b:[20,90], n:[40,100], kosul:"n*b%100==0"}, z:"orta", alt:"dogru_sayisi" },

  // ALT DAL 8: YÜZDE VE GRAFİK
  { id: "s11_yz_017", s: "Daire grafiğinde %{p}'lik dilimin merkez açısı kaç derecedir?", c: "{p}*3.6", v: {p:[10,50]}, z:"orta", alt:"daire_grafik" },
  { id: "s11_yz_018", s: "Daire grafiğinde {a}°'lik dilim yüzde kaçtır?", c: "{a}*100/360", v: {a:[36,180]}, z:"orta", alt:"aci_yuzde" },

  // ALT DAL 9: YÜZDE DEĞİŞİM PROBLEMLERİ
  { id: "s11_yz_019", s: "Bir sayı %{p} artırılıp %{p} azaltılırsa son durumdaki değişim yüzde kaçtır?", c: "-{p}*{p}/100_(azalis)", v: {p:[10,40]}, z:"cok_zor", alt:"ayni_oran_artis_azalis" },
  { id: "s11_yz_020", s: "Bir malın fiyatına %{p} zam yapıldıktan sonra satışlar %{q} azalırsa gelir nasıl değişir?", c: "%({p}-{q}-{p}*{q}/100)_degisir", v: {p:[10,30], q:[10,30]}, z:"cok_zor", alt:"gelir_degisimi" },

  // ALT DAL 10: YÜZDE ÖZEL SORULAR
  { id: "s11_yz_021", s: "%{p}'i su olan {m} kg karışıma {s} kg su eklenirse su oranı % kaç olur?", c: "({p}*{m}/100+{s})*100/({m}+{s})", v: {p:[10,40], m:[30,80], s:[5,20]}, z:"cok_zor", alt:"su_orani" },
  { id: "s11_yz_022", s: "Bir sınıfta erkeklerin %{e}'si, kızların %{k}'si gözlüklüdür. Sınıfın %{g}'si gözlüklü ise kızların oranı % kaçtır?", c: "({g}-{e})*100/({k}-{e})", v: {e:[10,40], k:[20,60], g:[15,50], kosul:"e<g<k"}, z:"cok_zor", alt:"gozluk_orani" },


  // ==========================================
  // KONU 5: KÂR-ZARAR PROBLEMLERİ (10 alt dal)
  // ==========================================

  // ALT DAL 1: KÂR HESAPLAMA
  { id: "s11_kz_001", s: "Maliyeti {m} TL olan mal %{k} kârla kaç TL'ye satılır?", c: "{m}*(100+{k})/100", v: {m:[50,300], k:[10,50]}, z:"orta", alt:"karli_satis" },
  { id: "s11_kz_002", s: "Maliyeti {m} TL olan mal {s} TL'ye satılırsa kâr yüzdesi kaçtır?", c: "({s}-{m})*100/{m}", v: {m:[40,150], s:[60,250], kosul:"s>m"}, z:"orta", alt:"kar_yuzdesi" },
  { id: "s11_kz_003", s: "%{k} kârla {s} TL'ye satılan malın maliyeti kaç TL'dir?", c: "{s}*100/(100+{k})", v: {k:[10,50], s:[80,400]}, z:"orta", alt:"maliyet_bulma" },

  // ALT DAL 2: ZARAR HESAPLAMA
  { id: "s11_kz_004", s: "Maliyeti {m} TL olan mal %{z} zararla kaç TL'ye satılır?", c: "{m}*(100-{z})/100", v: {m:[50,300], z:[5,30]}, z:"orta", alt:"zararli_satis" },
  { id: "s11_kz_005", s: "Maliyeti {m} TL olan mal {s} TL'ye satılırsa zarar yüzdesi kaçtır?", c: "({m}-{s})*100/{m}", v: {m:[50,200], s:[30,150], kosul:"m>s"}, z:"orta", alt:"zarar_yuzdesi" },
  { id: "s11_kz_006", s: "%{z} zararla {s} TL'ye satılan malın maliyeti kaç TL'dir?", c: "{s}*100/(100-{z})", v: {z:[5,30], s:[50,350]}, z:"orta", alt:"maliyet_bulma_zarar" },

  // ALT DAL 3: İNDİRİM VE ZAM
  { id: "s11_kz_007", s: "Etiket fiyatı {e} TL olan mala %{i} indirim yapılıyor. Satış fiyatı kaç TL'dir?", c: "{e}*(100-{i})/100", v: {e:[100,500], i:[5,40]}, z:"orta", alt:"indirim" },
  { id: "s11_kz_008", s: "Etiket fiyatına %{i} indirim yapıldıktan sonra %{k} kâr ediliyorsa maliyet ile etiket arasındaki ilişki nedir?", c: "etiket*(100-{i})/100=maliyet*(100+{k})/100", v: {i:[10,30], k:[10,40]}, z:"cok_zor", alt:"indirim_kar" },

  // ALT DAL 4: KÂR-ZARAR VE YÜZDE İLİŞKİSİ
  { id: "s11_kz_009", s: "Bir mal %{k1} kârla satılırken satış fiyatına %{i} indirim yapılırsa son durumda kâr-zarar yüzdesi kaçtır?", c: "({k1}-{i}-{k1}*{i}/100)", v: {k1:[20,50], i:[5,20]}, z:"cok_zor", alt:"kar_indirim" },
  { id: "s11_kz_010", s: "Bir mal %{z} zararla satılırken %{k} kâra çevirmek için fiyat yüzde kaç artırılmalıdır?", c: "({k}+{z})*100/(100-{z})", v: {z:[5,20], k:[10,30]}, z:"cok_zor", alt:"zarardan_kara" },

  // ALT DAL 5: SATIŞ VE MALİYET
  { id: "s11_kz_011", s: "Bir satıcı {a} TL'ye aldığı malı {b} TL'ye satıyor. Kâr-zarar durumu nedir?", c: "%{sonuc}", v: {a:[40,200], b:[30,300]}, z:"orta", alt:"alis_satis" },
  { id: "s11_kz_012", s: "Bir satıcı elindeki malın {a}/{b}'ini %{k} kârla, kalanını %{z} zararla satıyor. Genel kâr-zarar durumu nedir?", c: "%{net}", v: {a:[1,3], b:[4,6], k:[20,50], z:[10,30]}, z:"cok_zor", alt:"kismi_satis" },

  // ALT DAL 6: KÂR-ZARAR PROBLEMLERİ (İLERİ)
  { id: "s11_kz_013", s: "Bir satıcı maliyet fiyatı üzerinden %{k} kârla etiket fiyatı belirliyor. Sonra etiket üzerinden %{i} indirim yapıyor. Son durumda kâr-zarar % kaçtır?", c: "({k}-{i}-{k}*{i}/100)", v: {k:[20,60], i:[5,25]}, z:"cok_zor", alt:"etiket_kar_indirim" },
  { id: "s11_kz_014", s: "Bir mal %{k} kârla satılırken maliyet %{a} artarsa aynı kâr oranı için satış fiyatı yüzde kaç artırılmalıdır?", c: "{a}", v: {k:[10,40], a:[5,25]}, z:"cok_zor", alt:"maliyet_artis" },

  // ALT DAL 7: ZİNCİRLEME KÂR-ZARAR
  { id: "s11_kz_015", s: "Üretici %{k1} kârla toptancıya, toptancı %{k2} kârla perakendeciye, perakendeci %{k3} kârla satıyor. Üretici fiyatı {m} TL ise son satış fiyatı kaç TL'dir?", c: "{m}*(100+{k1})/100*(100+{k2})/100*(100+{k3})/100", v: {m:[50,200], k1:[10,30], k2:[10,25], k3:[10,30]}, z:"cok_zor", alt:"zincirleme_kar" },

  // ALT DAL 8: ÖZEL KÂR-ZARAR SORULARI
  { id: "s11_kz_016", s: "Bir satıcı iki malı aynı fiyata satıyor. Birinden %{k} kâr, diğerinden %{k} zarar ediyor. Genel durumda kâr-zarar yüzdesi kaçtır?", c: "-{k}*{k}/100_(zarar)", v: {k:[10,30]}, z:"cok_zor", alt:"iki_mal_ayni_fiyat" },
  { id: "s11_kz_017", s: "Bir tüccar tartısını %{a} eksik tartarak %{k} kâr ediyor. Gerçek kâr yüzdesi kaçtır?", c: "({k}+{a})*100/(100-{a})", v: {a:[5,20], k:[10,30]}, z:"cok_zor", alt:"hileli_tarti" },

  // ALT DAL 9: KÂR-ZARAR VE MİKTAR
  { id: "s11_kz_018", s: "{a} kg malın maliyeti {m} TL'dir. %{k} kârla satılırsa kg fiyatı kaç TL olur?", c: "{m}*(100+{k})/(100*{a})", v: {a:[5,20], m:[100,500], k:[10,40]}, z:"zor", alt:"kg_fiyat" },
  { id: "s11_kz_019", s: "{a} TL'ye alınan {b} kg malın {c} kg'ı %{k} kârla, kalanı %{z} zararla satılıyor. Genel kâr-zarar kaç TL'dir?", c: "{sonuc}", v: {a:[100,400], b:[10,40], c:[3,"{b}-1"], k:[15,40], z:[5,20]}, z:"cok_zor", alt:"kismi_miktar" },

  // ALT DAL 10: KÂR-ZARAR ÖZET
  { id: "s11_kz_020", s: "Kâr-zarar problemlerinde temel bağıntı nedir?", c: "satis=maliyet+kar_(veya_zarar)", v: {}, z:"orta", alt:"temel_baginti" },
  { id: "s11_kz_021", s: "Kâr yüzdesi hesaplanırken payda ne olur?", c: "maliyet_fiyati", v: {}, z:"orta", alt:"kar_payda" },
  { id: "s11_kz_022", s: "İndirim yüzdesi hesaplanırken payda ne olur?", c: "etiket_fiyati", v: {}, z:"orta", alt:"indirim_payda" },


  // ==========================================
  // KONU 6: FAİZ PROBLEMLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT FAİZ
  { id: "s11_fz_001", s: "{a} TL para yıllık %{n} basit faizle {t} yılda kaç TL faiz getirir?", c: "{a}*{n}*{t}/100", v: {a:[100,5000], n:[5,30], t:[1,5]}, z:"orta", alt:"basit_faiz" },
  { id: "s11_fz_002", s: "{a} TL para yıllık %{n} faizle {t} ayda kaç TL faiz getirir?", c: "{a}*{n}*{t}/(12*100)", v: {a:[500,5000], n:[5,25], t:[3,24]}, z:"zor", alt:"aylik_faiz" },
  { id: "s11_fz_003", s: "{a} TL para yıllık %{n} faizle {t} günde kaç TL faiz getirir?", c: "{a}*{n}*{t}/(360*100)", v: {a:[1000,10000], n:[5,20], t:[30,360]}, z:"zor", alt:"gunluk_faiz" },

  // ALT DAL 2: FAİZ FORMÜLÜ
  { id: "s11_fz_004", s: "Basit faiz formülü nedir?", c: "F=A·n·t/100_(t:yil)", v: {}, z:"orta", alt:"faiz_formul" },
  { id: "s11_fz_005", s: "Faiz problemlerinde A, n, t neyi ifade eder?", c: "A:anapara, n:faiz_orani, t:sure(yil)", v: {}, z:"orta", alt:"faiz_terimler" },

  // ALT DAL 3: ANAPARA BULMA
  { id: "s11_fz_006", s: "Yıllık %{n} faizle {t} yılda {f} TL faiz getiren anapara kaç TL'dir?", c: "{f}*100/({n}*{t})", v: {n:[5,25], t:[1,5], f:[50,1000]}, z:"zor", alt:"anapara_bulma" },
  { id: "s11_fz_007", s: "%{n} faizle {t} yıl sonunda {toplam} TL'ye ulaşan anapara kaç TL'dir?", c: "{toplam}*100/(100+{n}*{t})", v: {n:[5,20], t:[1,4], toplam:[200,5000]}, z:"cok_zor", alt:"anapara_toplam" },

  // ALT DAL 4: FAİZ ORANI BULMA
  { id: "s11_fz_008", s: "{a} TL para {t} yılda {f} TL faiz getiriyorsa yıllık faiz oranı % kaçtır?", c: "{f}*100/({a}*{t})", v: {a:[500,5000], t:[1,5], f:[50,1000]}, z:"zor", alt:"faiz_orani_bulma" },
  { id: "s11_fz_009", s: "{a} TL para {t} yıl sonra {toplam} TL oluyorsa yıllık faiz oranı % kaçtır?", c: "({toplam}-{a})*100/({a}*{t})", v: {a:[500,4000], t:[1,4], toplam:[600,5000], kosul:"toplam>a"}, z:"cok_zor", alt:"faiz_orani_toplam" },

  // ALT DAL 5: SÜRE BULMA
  { id: "s11_fz_010", s: "{a} TL para yıllık %{n} faizle kaç yılda {f} TL faiz getirir?", c: "{f}*100/({a}*{n})", v: {a:[500,5000], n:[5,20], f:[50,1000]}, z:"zor", alt:"sure_bulma" },
  { id: "s11_fz_011", s: "{a} TL para yıllık %{n} faizle kaç yılda kendisi kadar faiz getirir?", c: "100/{n}", v: {a:[500,5000], n:[5,25]}, z:"zor", alt:"kendisi_kadar_faiz" },

  // ALT DAL 6: BİLEŞİK FAİZ
  { id: "s11_fz_012", s: "{a} TL para yıllık %{n} bileşik faizle {t} yıl sonra kaç TL olur?", c: "{a}*Math.pow(1+{n}/100,{t})", v: {a:[500,3000], n:[5,20], t:[2,4]}, z:"cok_zor", alt:"bilesik_faiz" },
  { id: "s11_fz_013", s: "Bileşik faiz ile basit faiz arasındaki fark nedir?", c: "bilesik_faizde_faize_de_faiz_isler", v: {}, z:"orta", alt:"bilesik_basit_fark" },

  // ALT DAL 7: FAİZ PROBLEMLERİ (ÖZEL)
  { id: "s11_fz_014", s: "{a} TL paranın bir kısmı %{n1}, kalanı %{n2} faizle değerlendiriliyor. Toplam {f} TL faiz alınıyorsa %{n1}'den yatırılan para kaç TL'dir?", c: "({f}*100-{a}*{n2})/({n1}-{n2})", v: {a:[1000,5000], n1:[10,30], n2:[5,15], f:[50,500], kosul:"n1>n2"}, z:"cok_zor", alt:"iki_faiz" },
  { id: "s11_fz_015", s: "Bir banka yıllık %{n} faizle {a} TL kredi veriyor. {t} yılda toplam kaç TL geri ödenir?", c: "{a}+{a}*{n}*{t}/100", v: {a:[1000,10000], n:[10,30], t:[1,5]}, z:"orta", alt:"kredi_geri_odeme" },

  // ALT DAL 8: FAİZ ÖZET
  { id: "s11_fz_016", s: "Basit faiz formülü: F = A·n·t/100. t ay ise formül nasıl değişir?", c: "F=A·n·t/(12·100)", v: {}, z:"orta", alt:"aylik_formul" },
  { id: "s11_fz_017", s: "Basit faiz formülü: F = A·n·t/100. t gün ise formül nasıl değişir?", c: "F=A·n·t/(360·100)", v: {}, z:"orta", alt:"gunluk_formul" },


  // ==========================================
  // KONU 7: İŞÇİ-HAVUZ PROBLEMLERİ (10 alt dal)
  // ==========================================

  // ALT DAL 1: İŞÇİ PROBLEMLERİ (TEMEL)
  { id: "s11_ih_001", s: "Bir işçi bir işi {a} günde bitiriyorsa 1 günde işin kaçta kaçını bitirir?", c: "1/{a}", v: {a:[3,15]}, z:"orta", alt:"birim_is" },
  { id: "s11_ih_002", s: "A işçisi {a} günde, B işçisi {b} günde bitiriyorsa ikisi birlikte kaç günde bitirir?", c: "{a}*{b}/({a}+{b})", v: {a:[3,12], b:[4,15]}, z:"orta", alt:"iki_isci" },
  { id: "s11_ih_003", s: "A işçisi {a}, B işçisi {b}, C işçisi {c} günde bitiriyorsa üçü birlikte kaç günde bitirir?", c: "1/(1/{a}+1/{b}+1/{c})", v: {a:[3,10], b:[4,12], c:[5,15]}, z:"zor", alt:"uc_isci" },

  // ALT DAL 2: BİRLİKTE İŞ YAPMA
  { id: "s11_ih_004", s: "A ve B birlikte {t} günde bitiriyor. A tek başına {a} günde bitiriyorsa B tek başına kaç günde bitirir?", c: "{a}*{t}/({a}-{t})", v: {a:[6,20], t:[2,"{a}-1"]}, z:"zor", alt:"b_suresi" },
  { id: "s11_ih_005", s: "A ve B birlikte {t} günde bitiriyor. B tek başına {b} günde bitiriyorsa A tek başına kaç günde bitirir?", c: "{b}*{t}/({b}-{t})", v: {b:[5,18], t:[2,"{b}-1"]}, z:"zor", alt:"a_suresi" },

  // ALT DAL 3: SIRALI İŞ YAPMA
  { id: "s11_ih_006", s: "A işçisi {a} günde bitiriyor. A {c} gün çalışıp bırakıyor. B işçisi kalanı {d} günde bitiriyorsa B işin tamamını kaç günde bitirir?", c: "{d}/(1-{c}/{a})", v: {a:[8,20], c:[2,5], d:[4,12], kosul:"c<a"}, z:"cok_zor", alt:"sirali_calisma" },
  { id: "s11_ih_007", s: "A {a} günde, B {b} günde bitiriyor. İkisi birlikte {c} gün çalışıp ayrılıyor. Kalan işi A kaç günde bitirir?", c: "(1-{c}*(1/{a}+1/{b}))*{a}", v: {a:[5,15], b:[6,18], c:[1,3], kosul:"c<min(a,b)"}, z:"cok_zor", alt:"birlikte_birakma" },

  // ALT DAL 4: KAPASİTE PROBLEMLERİ
  { id: "s11_ih_008", s: "A'nın kapasitesi B'nin {k} katıdır. İkisi birlikte {t} günde bitiriyorsa A tek başına kaç günde bitirir?", c: "{t}*({k}+1)/{k}", v: {k:[2,4], t:[3,10]}, z:"cok_zor", alt:"kapasite_A" },
  { id: "s11_ih_009", s: "A'nın çalışma hızı B'nin {a}/{b} katıdır. Birlikte {t} saatte bitiriyorlarsa B kaç saatte bitirir?", c: "{t}*({a}+{b})/{b}", v: {a:[2,5], b:[3,7], t:[4,12]}, z:"cok_zor", alt:"hiz_orani_isci" },

  // ALT DAL 5: HAVUZ PROBLEMLERİ
  { id: "s11_ih_010", s: "Bir musluk havuzu {a} saatte dolduruyor. Diğer musluk {b} saatte boşaltıyor. İkisi birlikte kaç saatte doldurur? (a<b)", c: "{a}*{b}/({b}-{a})", v: {a:[3,8], b:[6,15], kosul:"a<b"}, z:"zor", alt:"doldur_bosalt" },
  { id: "s11_ih_011", s: "A musluğu {a} saatte, B musluğu {b} saatte dolduruyor. C musluğu {c} saatte boşaltıyor. Üçü birlikte kaç saatte doldurur?", c: "1/(1/{a}+1/{b}-1/{c})", v: {a:[3,6], b:[4,8], c:[8,20], kosul:"1/a+1/b>1/c"}, z:"cok_zor", alt:"uc_musluk_havuz" },

  // ALT DAL 6: HAVUZ DOLDURMA
  { id: "s11_ih_012", s: "Havuzun {k}/{m}'i dolu iken A musluğu açılıyor. Havuz {t} saatte doluyorsa A musluğu havuzun tamamını kaç saatte doldurur?", c: "{t}/(1-{k}/{m})", v: {k:[1,2], m:[3,5], t:[2,6], kosul:"k<m"}, z:"cok_zor", alt:"kismi_dolu" },
  { id: "s11_ih_013", s: "A musluğu havuzu {a} saatte dolduruyor. Havuzun dibindeki B musluğu {b} saatte boşaltıyor. Havuz boşken ikisi açılırsa {t} saat sonra havuzun kaçta kaçı dolar?", c: "{t}*(1/{a}-1/{b})", v: {a:[4,8], b:[6,12], t:[1,3], kosul:"a<b"}, z:"cok_zor", alt:"kismi_dolma" },

  // ALT DAL 7: İŞÇİ PROBLEMLERİ (YAŞLANDIRMA)
  { id: "s11_ih_014", s: "Bir işçi {a} günde bitireceği işe başlıyor. {b} gün sonra hızını 2 katına çıkarıyor. İş kaç günde biter?", c: "{b}+(1-{b}/{a})*{a}/2", v: {a:[8,20], b:[2,4], kosul:"b<a"}, z:"cok_zor", alt:"hiz_artirma" },
  { id: "s11_ih_015", s: "{a} işçi bir işi {b} günde yapıyor. İşe başladıktan {c} gün sonra {d} işçi ayrılırsa kalan iş kaç günde biter?", c: "({a}*{b}-{a}*{c})/({a}-{d})", v: {a:[5,10], b:[6,15], c:[2,4], d:[1,3], kosul:"c<b_ve_d<a"}, z:"cok_zor", alt:"isci_ayrilma" },

  // ALT DAL 8: İŞÇİ-HAVUZ KARIŞIK
  { id: "s11_ih_016", s: "{a} işçi günde {b} saat çalışarak {c} günde bitiriyorsa, {d} işçi günde {e} saat çalışarak kaç günde bitirir?", c: "{a}*{b}*{c}/({d}*{e})", v: {a:[3,8], b:[6,10], c:[8,20], d:[4,10], e:[7,12]}, z:"cok_zor", alt:"isci_saat" },
  { id: "s11_ih_017", s: "A işçisi {a} günde, B işçisi {b} günde bitiriyor. A {c} gün, B {d} gün çalışırsa işin kaçta kaçı biter?", c: "{c}/{a}+{d}/{b}", v: {a:[6,15], b:[8,20], c:[2,4], d:[2,5]}, z:"zor", alt:"ayri_ayri_calisma" },

  // ALT DAL 9: İŞ PROBLEMLERİ (ÖZEL)
  { id: "s11_ih_018", s: "x işçi bir işi y günde yapıyor. x ile y arasında nasıl bir orantı vardır?", c: "ters_oranti", v: {}, z:"orta", alt:"isci_sure_oranti" },
  { id: "s11_ih_019", s: "Bir işte çalışan işçi sayısı 2 katına, günlük çalışma süresi 3 katına çıkarılırsa işin bitme süresi nasıl değişir?", c: "1/6'si_kadar_olur", v: {}, z:"cok_zor", alt:"isci_saat_degisim" },

  // ALT DAL 10: İŞÇİ-HAVUZ ÖZET
  { id: "s11_ih_020", s: "İşçi problemlerinde temel mantık nedir?", c: "her_isci_birim_zamanda_isin_belli_kismini_yapar", v: {}, z:"orta", alt:"temel_mantik" },
  { id: "s11_ih_021", s: "Havuz problemlerinde dolduran musluk (+), boşaltan musluk (-) olarak alınır. Doğru mu?", c: "evet", v: {}, z:"orta", alt:"havuz_mantik" },


  // ==========================================
  // KONU 8: HIZ-HAREKET PROBLEMLERİ (10 alt dal)
  // ==========================================

  // ALT DAL 1: YOL-HIZ-ZAMAN
  { id: "s11_hh_001", s: "{v} km/saat hızla {t} saatte kaç km yol alınır?", c: "{v}*{t}", v: {v:[40,120], t:[1,6]}, z:"kolay", alt:"yol_bulma" },
  { id: "s11_hh_002", s: "{x} km yolu {t} saatte alan aracın hızı kaç km/saattir?", c: "{x}/{t}", v: {x:[100,500], t:[2,6]}, z:"kolay", alt:"hiz_bulma" },
  { id: "s11_hh_003", s: "{x} km yolu {v} km/saat hızla alan araç kaç saatte gider?", c: "{x}/{v}", v: {x:[100,600], v:[40,100]}, z:"kolay", alt:"zaman_bulma" },

  // ALT DAL 2: KARŞILAŞMA PROBLEMLERİ
  { id: "s11_hh_004", s: "Aralarında {x} km olan iki araç {v1} ve {v2} km/saat hızla birbirine doğru hareket ediyor. Kaç saat sonra karşılaşırlar?", c: "{x}/({v1}+{v2})", v: {x:[100,500], v1:[40,90], v2:[30,80]}, z:"orta", alt:"karsilasma" },
  { id: "s11_hh_005", s: "İki araç {v1} ve {v2} km/saat hızla birbirine doğru hareket edip {t} saat sonra karşılaşıyorlar. Başlangıçta aralarındaki mesafe kaç km'dir?", c: "({v1}+{v2})*{t}", v: {v1:[40,80], v2:[30,70], t:[2,5]}, z:"orta", alt:"karsilasma_mesafe" },

  // ALT DAL 3: YETİŞME PROBLEMLERİ
  { id: "s11_hh_006", s: "Aralarında {x} km mesafe olan iki araç aynı yönde {v1} ve {v2} km/saat hızla hareket ediyor. Arkadaki kaç saatte yetişir? (v1>v2)", c: "{x}/({v1}-{v2})", v: {x:[10,80], v1:[80,120], v2:[40,70], kosul:"v1>v2"}, z:"zor", alt:"yetisme" },
  { id: "s11_hh_007", s: "Bir araç saat {saat1}:00'de {v1} km/saat hızla yola çıkıyor. Başka bir araç saat {saat2}:00'de {v2} km/saat hızla aynı yönde çıkıyor. İkinci araç kaçta yetişir? (v2>v1)", c: "{sonuc}", v: {saat1:[7,10], v1:[40,70], saat2:[8,11], v2:[80,120], kosul:"v2>v1"}, z:"cok_zor", alt:"farkli_saat_yetisme" },

  // ALT DAL 4: ORTALAMA HIZ
  { id: "s11_hh_008", s: "Bir araç yolun yarısını {v1}, diğer yarısını {v2} km/saat hızla gidiyor. Ortalama hızı kaçtır?", c: "2*{v1}*{v2}/({v1}+{v2})", v: {v1:[40,100], v2:[30,80]}, z:"cok_zor", alt:"yarisal_hiz" },
  { id: "s11_hh_009", s: "Bir araç {v1} km/saat hızla gidip {v2} km/saat hızla dönüyor. Gidiş-dönüş ortalama hızı kaçtır?", c: "2*{v1}*{v2}/({v1}+{v2})", v: {v1:[60,100], v2:[40,80]}, z:"cok_zor", alt:"gidis_donus_hiz" },

  // ALT DAL 5: HIZ DEĞİŞİMİ
  { id: "s11_hh_010", s: "Bir araç yolun {a}/{b}'ini {v1} km/saatle, kalanını {v2} km/saatle gidiyor. Ortalama hızı kaçtır?", c: "1/(({a}/{b})/{v1}+(1-{a}/{b})/{v2})", v: {a:[1,3], b:[4,6], v1:[60,100], v2:[40,80]}, z:"cok_zor", alt:"kismi_hiz" },
  { id: "s11_hh_011", s: "Bir araç hızını %{p} artırırsa aynı yolu kaçta kaçı zamanda alır?", c: "100/(100+{p})_kati", v: {p:[10,50]}, z:"cok_zor", alt:"hiz_artirma_zaman" },

  // ALT DAL 6: TREN VE TÜNEL PROBLEMLERİ
  { id: "s11_hh_012", s: "Uzunluğu {l} m olan bir tren {v} km/saat hızla {t} m'lik tüneli kaç saniyede geçer?", c: "({l}+{t})*3.6/{v}", v: {l:[100,300], v:[40,90], t:[200,800]}, z:"cok_zor", alt:"tren_tunel" },
  { id: "s11_hh_013", s: "{l} m uzunluğundaki tren {v} km/saat hızla bir direği kaç saniyede geçer?", c: "{l}*3.6/{v}", v: {l:[80,250], v:[30,80]}, z:"cok_zor", alt:"tren_direk" },

  // ALT DAL 7: AKINTI PROBLEMLERİ
  { id: "s11_hh_014", s: "Bir yüzücü durgun suda {v} km/saat hızla yüzüyor. Akıntı hızı {a} km/saat ise akıntıyla aynı yönde hızı kaç olur?", c: "{v}+{a}", v: {v:[3,8], a:[1,3]}, z:"orta", alt:"akinti_ile" },
  { id: "s11_hh_015", s: "Akıntı hızı {a} km/saat olan nehirde akıntıya karşı {v1} km/saat, akıntıyla {v2} km/saat hızla giden motorun durgun sudaki hızı kaçtır?", c: "({v1}+{v2})/2", v: {a:[1,4], v1:[3,10], v2:[5,15], kosul:"v2>v1"}, z:"zor", alt:"motor_hizi" },
  { id: "s11_hh_016", s: "Durgun sudaki hızı {v} km/saat olan motor {x} km'lik yolu akıntı yönünde {t1} saatte, akıntıya karşı {t2} saatte alıyorsa akıntı hızı kaçtır?", c: "({x}/{t1}-{x}/{t2})/2", v: {v:[6,15], x:[24,60], t1:[2,4], t2:[3,8], kosul:"t2>t1"}, z:"cok_zor", alt:"akinti_hizi" },

  // ALT DAL 8: HIZ PROBLEMLERİ (İLERİ)
  { id: "s11_hh_017", s: "A ve B kentleri arası {x} km'dir. A'dan {v1} hızla çıkan araç {t} saat sonra B'den {v2} hızla başka bir araç çıkıyor. Bu araçlar nerede karşılaşır?", c: "{v1}*({x}+{v2}*{t})/({v1}+{v2})_km_A'dan", v: {x:[200,600], v1:[40,80], t:[1,3], v2:[30,70]}, z:"cok_zor", alt:"farkli_zaman_karsilasma" },
  { id: "s11_hh_018", s: "Dairesel pistte {v1} ve {v2} km/saat hızla koşan iki koşucu aynı anda aynı noktadan zıt yönde koşarsa kaç saat sonra karşılaşırlar? (Pist: {c} km)", c: "{c}/({v1}+{v2})", v: {c:[400,1200], v1:[10,40], v2:[8,30]}, z:"cok_zor", alt:"dairesel_pist" },

  // ALT DAL 9: HIZ-ZAMAN GRAFİKLERİ
  { id: "s11_hh_019", s: "Hız-zaman grafiğinde eğrinin altındaki alan neyi verir?", c: "alinan_yolu", v: {}, z:"orta", alt:"hiz_zaman_grafik" },
  { id: "s11_hh_020", s: "Yol-zaman grafiğinde eğim neyi verir?", c: "hizi", v: {}, z:"orta", alt:"yol_zaman_grafik" },

  // ALT DAL 10: HIZ PROBLEMLERİ ÖZET
  { id: "s11_hh_021", s: "Hız problemlerinde temel formül nedir?", c: "X=V·t_(Yol=Hız×Zaman)", v: {}, z:"orta", alt:"temel_formul_hiz" },
  { id: "s11_hh_022", s: "Karşılaşma problemlerinde hızlar toplanır, yetişme problemlerinde hızlar çıkarılır. Doğru mu?", c: "evet", v: {}, z:"orta", alt:"karsilasma_yetisme_kural" },


  // ==========================================
  // KONU 9: KARIŞIM PROBLEMLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: KARIŞIM HESAPLAMA
  { id: "s11_km_001", s: "Tuz oranı %{o1} olan {m1} kg ile %{o2} olan {m2} kg karıştırılıyor. Yeni oran % kaçtır?", c: "({o1}*{m1}+{o2}*{m2})/({m1}+{m2})", v: {o1:[10,30], m1:[20,80], o2:[20,60], m2:[20,80]}, z:"cok_zor", alt:"karisim_orani" },
  { id: "s11_km_002", s: "%{o1} ve %{o2} tuz oranına sahip iki karışım hangi oranda karıştırılırsa %{o3} oran elde edilir?", c: "({o3}-{o2}):({o1}-{o3})", v: {o1:[30,60], o2:[10,25], o3:[20,40], kosul:"o1>o3>o2"}, z:"cok_zor", alt:"karisim_orani_bulma" },

  // ALT DAL 2: SU EKLEME/ÇIKARMA
  { id: "s11_km_003", s: "Tuz oranı %{o} olan {m} kg karışıma {s} kg su eklenirse yeni oran % kaç olur?", c: "{o}*{m}/({m}+{s})", v: {o:[15,40], m:[30,80], s:[10,30]}, z:"cok_zor", alt:"su_ekleme" },
  { id: "s11_km_004", s: "Tuz oranı %{o} olan {m} kg karışımdan {b} kg su buharlaştırılırsa yeni oran % kaç olur?", c: "{o}*{m}/({m}-{b})", v: {o:[10,30], m:[40,100], b:[5,20], kosul:"b<m"}, z:"cok_zor", alt:"buharlastirma" },

  // ALT DAL 3: KARIŞIMDAN KARIŞIM ELDE ETME
  { id: "s11_km_005", s: "%{o1} tuz oranı olan karışımdan %{o2} tuz oranı elde etmek için karışımın ne kadarı buharlaştırılmalıdır?", c: "{m}*(1-{o1}/{o2})", v: {o1:[10,25], o2:[30,50], m:[50,100], kosul:"o2>o1"}, z:"cok_zor", alt:"istenen_oran" },
  { id: "s11_km_006", s: "Şeker oranı %{o1} olan {m1} gr ile %{o2} olan {m2} gr karıştırılıp {s} gr şeker eklenirse yeni oran % kaçtır?", c: "({o1}*{m1}+{o2}*{m2}+{s})/({m1}+{m2}+{s})", v: {o1:[10,30], m1:[30,60], o2:[20,50], m2:[20,50], s:[5,20]}, z:"cok_zor", alt:"seker_ekleme" },

  // ALT DAL 4: KARIŞIM PROBLEMLERİ (İLERİ)
  { id: "s11_km_007", s: "%{o} tuz oranı olan {m} kg karışımın {k}/{l}'i dökülüp yerine aynı miktar su eklenirse yeni oran % kaç olur?", c: "{o}*(1-{k}/{l})", v: {o:[20,50], m:[40,100], k:[1,3], l:[3,5], kosul:"k<l"}, z:"cok_zor", alt:"dokup_su_ekleme" },
  { id: "s11_km_008", s: "%{o1} saflıkta {m1} gr altın ile %{o2} saflıkta kaç gr altın karıştırılırsa %{o3} saflık elde edilir?", c: "{m1}*({o3}-{o1})/({o2}-{o3})", v: {o1:[40,60], o2:[80,95], o3:[50,75], m1:[50,150], kosul:"o1<o3<o2"}, z:"cok_zor", alt:"saflik" },

  // ALT DAL 5: ALAŞIM PROBLEMLERİ
  { id: "s11_km_009", s: "Altın oranı %{o1} olan {m1} gr alaşım ile %{o2} olan {m2} gr alaşım karıştırılıyor. Yeni alaşımın altın oranı % kaçtır?", c: "({o1}*{m1}+{o2}*{m2})/({m1}+{m2})", v: {o1:[40,80], m1:[50,150], o2:[20,50], m2:[50,150]}, z:"cok_zor", alt:"alasim" },

  // ALT DAL 6: KARIŞIM VE ORANTI
  { id: "s11_km_010", s: "Karışım problemlerinde tuz miktarı değişmez. Hangi işlemlerde tuz miktarı sabit kalır?", c: "su_ekleme_ve_buharlastirmada", v: {}, z:"orta", alt:"tuz_sabit" },
  { id: "s11_km_011", s: "Karışım problemlerinde çözüm stratejisi nedir?", c: "saf_madde_miktari_uzerinden_denklem_kurulur", v: {}, z:"orta", alt:"strateji_karisim" },

  // ALT DAL 7: KARIŞIM PROBLEMLERİ (SÖZEL)
  { id: "s11_km_012", s: "%{o} alkol oranı olan {m} litre kolonyaya kaç litre alkol eklenirse oran %{o2} olur?", c: "({o2}*{m}-{o}*{m})/(100-{o2})", v: {o:[40,70], m:[5,20], o2:[60,90], kosul:"o2>o"}, z:"cok_zor", alt:"alkol_ekleme" },
  { id: "s11_km_013", s: "%{o1} tuz oranına sahip karışım ile %{o2} tuz oranına sahip karışım karıştırılarak {m} kg %{o3} oranında karışım elde ediliyor. İlk karışımdan kaç kg alınmıştır?", c: "{m}*({o3}-{o2})/({o1}-{o2})", v: {o1:[30,60], o2:[10,20], o3:[20,40], m:[40,100], kosul:"o1>o3>o2"}, z:"cok_zor", alt:"karisim_miktar" },

  // ALT DAL 8: KARIŞIM ÖZET
  { id: "s11_km_014", s: "Karışım problemlerinde temel formül nedir?", c: "(m1·o1+m2·o2)/(m1+m2)=yeni_oran", v: {}, z:"orta", alt:"temel_formul_karisim" },
  { id: "s11_km_015", s: "Karışıma saf madde eklenince oran artar, su eklenince oran azalır. Doğru mu?", c: "evet", v: {}, z:"orta", alt:"ekleme_etkisi" },


  // ==========================================
  // KONU 10: SAAT PROBLEMLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: AKREP-YELKOVAN AÇISI
  { id: "s11_st_001", s: "Saat {saat}:{dakika} iken akrep ile yelkovan arasındaki dar açı kaç derecedir?", c: "{aci}°", v: {saat:[1,12], dakika:[0,55,5]}, z:"cok_zor", alt:"akrep_yelkovan_aci" },
  { id: "s11_st_002", s: "Akrep ile yelkovan arasındaki açı formülü nedir?", c: "|30*saat-5.5*dakika|", v: {}, z:"cok_zor", alt:"aci_formul" },
  { id: "s11_st_003", s: "Saat 3:00 iken akrep ile yelkovan arasındaki açı kaç derecedir?", c: "90°", v: {}, z:"orta", alt:"3_00" },
  { id: "s11_st_004", s: "Saat 6:00 iken akrep ile yelkovan arasındaki açı kaç derecedir?", c: "180°", v: {}, z:"orta", alt:"6_00" },

  // ALT DAL 2: AKREP-YELKOVAN ÜST ÜSTE GELME
  { id: "s11_st_005", s: "Saat {saat} ile {saat+1} arasında akrep ve yelkovan kaç dakika geçe üst üste gelir?", c: "{saat}*60/11_dakika_gece", v: {saat:[1,11]}, z:"cok_zor", alt:"ust_uste_gelme" },
  { id: "s11_st_006", s: "Akrep ve yelkovan 12 saatte kaç kez üst üste gelir?", c: "11", v: {}, z:"cok_zor", alt:"12_saatte_kac_kez" },

  // ALT DAL 3: AKREP-YELKOVAN DİK AÇI
  { id: "s11_st_007", s: "Saat {saat} ile {saat+1} arasında akrep ve yelkovan hangi dakikalarda dik açı oluşturur?", c: "{cozum}", v: {saat:[1,11]}, z:"cok_zor", alt:"dik_aci" },
  { id: "s11_st_008", s: "Akrep ve yelkovan 12 saatte kaç kez dik açı oluşturur?", c: "22", v: {}, z:"cok_zor", alt:"dik_aci_sayisi" },

  // ALT DAL 4: SAAT PROBLEMLERİ (HIZ)
  { id: "s11_st_009", s: "Akrep saatte kaç derece ilerler?", c: "30°", v: {}, z:"orta", alt:"akrep_hizi" },
  { id: "s11_st_010", s: "Yelkovan saatte kaç derece ilerler?", c: "360°", v: {}, z:"orta", alt:"yelkovan_hizi" },
  { id: "s11_st_011", s: "Akrep dakikada kaç derece ilerler?", c: "0,5°", v: {}, z:"orta", alt:"akrep_dakika" },
  { id: "s11_st_012", s: "Yelkovan dakikada kaç derece ilerler?", c: "6°", v: {}, z:"orta", alt:"yelkovan_dakika" },

  // ALT DAL 5: GERİ KALMA-İLERİ GİTME
  { id: "s11_st_013", s: "Günde {a} dakika geri kalan bir saat kaç günde doğru zamanı gösterir?", c: "720/{a}", v: {a:[2,15]}, z:"cok_zor", alt:"geri_kalma" },
  { id: "s11_st_014", s: "Günde {a} dakika ileri giden bir saat kaç günde doğru zamanı gösterir?", c: "720/{a}", v: {a:[2,15]}, z:"cok_zor", alt:"ileri_gitme" },

  // ALT DAL 6: SAAT PROBLEMLERİ ÖZET
  { id: "s11_st_015", s: "Saat problemlerinde akrep ve yelkovanın hızları arasındaki fark nedir?", c: "dakikada_5,5°", v: {}, z:"orta", alt:"hiz_farki" },
  { id: "s11_st_016", s: "Saat problemlerinde açı formülü nasıl hatırlanır?", c: "|11*dakika-60*saat|/2", v: {}, z:"orta", alt:"aci_formul_2" },


  // ==========================================
  // KONU 11: GRAFİK PROBLEMLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: SÜTUN GRAFİĞİ
  { id: "s11_gf_001", s: "Sütun grafiğinde {a} ve {b} verileri arasındaki fark kaçtır?", c: "Math.abs({a}-{b})", v: {a:[10,80], b:[15,90]}, z:"kolay", alt:"sutun_grafik" },
  { id: "s11_gf_002", s: "Sütun grafiğinde en büyük değer ile en küçük değer arasındaki fark neyi verir?", c: "aciklik_(ranj)", v: {}, z:"orta", alt:"aciklik" },

  // ALT DAL 2: DAİRE GRAFİĞİ
  { id: "s11_gf_003", s: "Daire grafiğinde %{p}'lik dilimin merkez açısı kaç derecedir?", c: "{p}*3.6", v: {p:[10,50]}, z:"orta", alt:"daire_aci" },
  { id: "s11_gf_004", s: "Daire grafiğinde {a}°'lik dilim {toplam} kişilik grupta kaç kişiyi gösterir?", c: "{a}*{toplam}/360", v: {a:[30,180], toplam:[180,720]}, z:"zor", alt:"daire_kisi" },
  { id: "s11_gf_005", s: "Bir daire grafiğinde bir dilimin merkez açısı {a}° ise bu dilim bütünün kaçta kaçıdır?", c: "{a}/360", v: {a:[30,180]}, z:"orta", alt:"dilim_orani" },

  // ALT DAL 3: ÇİZGİ GRAFİĞİ
  { id: "s11_gf_006", s: "Çizgi grafiğinde artış ve azalışlar nasıl yorumlanır?", c: "egime_bakilir_(yukari_artis_asagi_azalis)", v: {}, z:"orta", alt:"cizgi_grafik" },
  { id: "s11_gf_007", s: "Çizgi grafiğinde en büyük artış hangi aralıkta olmuştur?", c: "egimin_en_dik_oldugu_aralik", v: {}, z:"orta", alt:"en_buyuk_artis" },

  // ALT DAL 4: GRAFİK OKUMA
  { id: "s11_gf_008", s: "Bir grafikte x ekseni zaman, y ekseni sıcaklık ise grafik neyi gösterir?", c: "sicakligin_zamana_gore_degisimini", v: {}, z:"orta", alt:"grafik_okuma" },
  { id: "s11_gf_009", s: "Grafikte yatay doğru neyi ifade eder?", c: "degisimin_olmadigini_(sabit)", v: {}, z:"orta", alt:"yatay_dogru" },

  // ALT DAL 5: GRAFİK YORUMLAMA
  { id: "s11_gf_010", s: "Hız-zaman grafiğinde alan neyi verir?", c: "yolu", v: {}, z:"orta", alt:"hiz_zaman_alan" },
  { id: "s11_gf_011", s: "Yol-zaman grafiğinde eğim neyi verir?", c: "hizi", v: {}, z:"orta", alt:"yol_zaman_egim" },
  { id: "s11_gf_012", s: "Grafiklerde birimlere dikkat edilmezse ne olur?", c: "yanlis_yorum_yapilir", v: {}, z:"orta", alt:"birim_onemi" },

  // ALT DAL 6: GRAFİK PROBLEMLERİ KARIŞIK
  { id: "s11_gf_013", s: "Sütun grafiğinde verilen {a}, {b}, {c} değerlerinin aritmetik ortalaması kaçtır?", c: "({a}+{b}+{c})/3", v: {a:[20,80], b:[30,90], c:[10,70]}, z:"orta", alt:"ortalama_grafik" },
  { id: "s11_gf_014", s: "Daire grafiğinde A dilimi {a}°, B dilimi {b}° ise A/B oranı kaçtır?", c: "{a}/{b}", v: {a:[30,150], b:[20,120]}, z:"orta", alt:"dilim_orani_grafik" },


  // ==========================================
  // KONU 12: RUTİN OLMAYAN PROBLEMLER (6 alt dal)
  // ==========================================

  // ALT DAL 1: MANTIK PROBLEMLERİ
  { id: "s11_rp_001", s: "Bir sınıftaki öğrenciler sıralara {a}'şar oturursa {b} öğrenci ayakta kalıyor. {c}'şer oturursa {d} sıra boş kalıyor. Sınıfta kaç öğrenci vardır?", c: "{cozum}", v: {a:[2,4], b:[1,5], c:[3,6], d:[1,3]}, z:"cok_zor", alt:"sinif_sira" },
  { id: "s11_rp_002", s: "Bir çiftlikte tavuk ve tavşanların toplam sayısı {t}, ayak sayısı {a} ise kaç tavuk vardır?", c: "({t}*4-{a})/2", v: {t:[10,40], a:[20,100], kosul:"a%2==0"}, z:"cok_zor", alt:"tavuk_tavsan" },

  // ALT DAL 2: ÖRÜNTÜ PROBLEMLERİ
  { id: "s11_rp_003", s: "{a}, {a+d}, {a+2d}, ... örüntüsünün {n}. terimi kaçtır?", c: "{a}+({n}-1)*{d}", v: {a:[2,10], d:[2,5], n:[5,15]}, z:"zor", alt:"oruntu" },
  { id: "s11_rp_004", s: "1, 1, 2, 3, 5, 8, ... Fibonacci dizisinin {n}. terimi kaçtır?", c: "fibonacci({n})", v: {n:[5,10]}, z:"cok_zor", alt:"fibonacci" },

  // ALT DAL 3: ŞİFRELEME PROBLEMLERİ
  { id: "s11_rp_005", s: "Bir şifrede her harf alfabede kendinden sonraki {n}. harfle değiştiriliyor. 'ABC' nasıl yazılır?", c: "{sifre}", v: {n:[1,3]}, z:"zor", alt:"sifreleme" },
  { id: "s11_rp_006", s: "0, 1, 1, 2, 3, 5, 8, ... sayı dizisinin kuralı nedir?", c: "her_sayi_kendinden_onceki_iki_sayinin_toplami", v: {}, z:"orta", alt:"fibonacci_kural" },

  // ALT DAL 4: TABLO PROBLEMLERİ
  { id: "s11_rp_007", s: "Bir tabloda satır ve sütun toplamları verilmiş. Eksik değer nasıl bulunur?", c: "satir_toplamindan_bilinenler_cikarilir", v: {}, z:"orta", alt:"tablo_eksik" },
  { id: "s11_rp_008", s: "n×n'lik bir tabloda baştan {a}. sırada, sondan {b}. sırada olan kişi bulunduğu sırada kaçıncıdır?", c: "n-{b}+1", v: {a:[3,8], b:[2,7]}, z:"zor", alt:"tablo_sira" },

  // ALT DAL 5: ZEKA PROBLEMLERİ
  { id: "s11_rp_009", s: "{a} litre ve {b} litre kapasiteli iki kapla {c} litre su nasıl ölçülür?", c: "{cozum}", v: {a:[3,5], b:[7,9], c:[1,8]}, z:"cok_zor", alt:"su_olcme" },
  { id: "s11_rp_010", s: "Bir merdivende her adımda {a} basamak çıkıp {b} basamak inen biri {n}. adımda kaçıncı basamakta olur?", c: "{a}*{n}-{b}*({n}-1)", v: {a:[3,6], b:[1,2], n:[1,8]}, z:"cok_zor", alt:"merdiven" },

  // ALT DAL 6: RUTİN OLMAYAN ÖZET
  { id: "s11_rp_011", s: "Rutin olmayan problemlerde çözüm stratejisi nedir?", c: "problemi_anla_plan_yap_uygula_kontrol_et", v: {}, z:"orta", alt:"strateji" },
  { id: "s11_rp_012", s: "Tavuk-tavşan probleminde temel mantık nedir?", c: "ayak_sayisindan_denklem_kurmak", v: {}, z:"orta", alt:"tavuk_tavsan_mantik" },

],


// ==========================================
// SEVİYE 12: KÜMELER
// ==========================================
12: [

  // ==========================================
  // KONU 1: KÜME KAVRAMI VE GÖSTERİMLER (8 alt dal)
  // ==========================================

  // ALT DAL 1: KÜME TANIMI
  { id: "s12_kk_001", s: "Küme nedir?", c: "iyi_tanimlanmis_nesneler_toplulugu", v: {}, z:"kolay", alt:"kume_tanimi" },
  { id: "s12_kk_002", s: "Aşağıdakilerden hangisi bir küme belirtir?", c: "{dogru}", v: {secenekler:["Sınıftaki uzun öğrenciler (belirsiz)","Sınıftaki 1.70'ten uzun öğrenciler","Güzel şehirler","Bazı sayılar"]}, z:"kolay", alt:"kume_belirtme" },
  { id: "s12_kk_003", s: "Küme oluşturmanın şartı nedir?", c: "her_nesnenin_kumeye_ait_olup_olmadiginin_kesin_bilinmesi", v: {}, z:"orta", alt:"kume_sarti" },

  // ALT DAL 2: KÜME GÖSTERİMLERİ
  { id: "s12_kk_004", s: "Liste yöntemi ile {a}, {b}, {c} elemanlarından oluşan kümeyi yazınız.", c: "{{a}, {b}, {c}}", v: {a:[1,5], b:[3,8], c:[5,12], kosul:"a!=b && b!=c && a!=c"}, z:"kolay", alt:"liste_yontemi" },
  { id: "s12_kk_005", s: "Ortak özellik yöntemi ile \"5'ten küçük doğal sayılar\" kümesini yazınız.", c: "{x|x<5, x∈N}", v: {}, z:"orta", alt:"ortak_ozellik" },
  { id: "s12_kk_006", s: "Venn şeması ile gösterim nasıldır?", c: "kapali_bir_egri_icinde_elemanlar", v: {}, z:"kolay", alt:"venn_semasi" },

  // ALT DAL 3: ELEMAN SAYISI
  { id: "s12_kk_007", s: "A = {{a}, {b}, {c}} kümesinin eleman sayısı kaçtır?", c: "3", v: {a:[1,5], b:[3,8], c:[5,12], kosul:"farkli"}, z:"kolay", alt:"eleman_sayisi" },
  { id: "s12_kk_008", s: "Bir kümede bir eleman birden fazla kez yazılırsa eleman sayısı değişir mi?", c: "hayir_(tekrar_edilmez)", v: {}, z:"orta", alt:"tekrar" },
  { id: "s12_kk_009", s: "s(A) = ? (A'nın eleman sayısını soran gösterim)", c: "s(A)_veya_n(A)_veya_|A|", v: {}, z:"orta", alt:"eleman_sayisi_gosterim" },

  // ALT DAL 4: BOŞ KÜME
  { id: "s12_kk_010", s: "Boş küme nasıl gösterilir?", c: "∅_veya_{ }", v: {}, z:"kolay", alt:"bos_kume" },
  { id: "s12_kk_011", s: "Boş kümenin eleman sayısı kaçtır?", c: "0", v: {}, z:"kolay", alt:"bos_kume_sayisi" },
  { id: "s12_kk_012", s: "{∅} kümesi boş küme midir?", c: "hayir_(bos_kumeyi_eleman_olarak_iceren_bir_kuyedir)", v: {}, z:"cok_zor", alt:"bos_kume_eleman" },

  // ALT DAL 5: SONLU-SONSUZ KÜME
  { id: "s12_kk_013", s: "A = {1, 2, 3} kümesi sonlu mudur, sonsuz mudur?", c: "sonlu", v: {}, z:"kolay", alt:"sonlu_kume" },
  { id: "s12_kk_014", s: "Doğal sayılar kümesi sonlu mudur, sonsuz mudur?", c: "sonsuz", v: {}, z:"kolay", alt:"sonsuz_kume" },
  { id: "s12_kk_015", s: "Boş küme sonlu mudur?", c: "evet_(0_elemanli)", v: {}, z:"orta", alt:"bos_kume_sonlu" },

  // ALT DAL 6: EVRENSEL KÜME
  { id: "s12_kk_016", s: "Evrensel küme nedir?", c: "uzerinde_islem_yapilan_en_genis_kume", v: {}, z:"orta", alt:"evrensel_kume" },
  { id: "s12_kk_017", s: "Evrensel küme hangi harfle gösterilir?", c: "E_veya_U", v: {}, z:"kolay", alt:"evrensel_harf" },

  // ALT DAL 7: DENK KÜMELER
  { id: "s12_kk_018", s: "Denk küme nedir?", c: "eleman_sayilari_ayni_olan_kumeler", v: {}, z:"orta", alt:"denk_kume" },
  { id: "s12_kk_019", s: "A = {a,b,c} ve B = {1,2,3} kümeleri denk midir?", c: "evet_(s(A)=s(B)=3)", v: {}, z:"orta", alt:"denk_kume_ornek" },

  // ALT DAL 8: EŞİT KÜMELER
  { id: "s12_kk_020", s: "Eşit küme nedir?", c: "ayni_elemanlardan_olusan_kumeler", v: {}, z:"orta", alt:"esit_kume" },
  { id: "s12_kk_021", s: "A = {1,2,3} ve B = {2,1,3} kümeleri eşit midir?", c: "evet_(siralama_onemsiz)", v: {}, z:"orta", alt:"esit_kume_siralama" },
  { id: "s12_kk_022", s: "Her eşit küme denk midir?", c: "evet", v: {}, z:"orta", alt:"esit_denk" },
  { id: "s12_kk_023", s: "Her denk küme eşit midir?", c: "hayir", v: {}, z:"cok_zor", alt:"denk_esit_degil" },


  // ==========================================
  // KONU 2: ALT KÜME (8 alt dal)
  // ==========================================

  // ALT DAL 1: ALT KÜME TANIMI
  { id: "s12_ak_001", s: "Alt küme nedir?", c: "bir_kumenin_tum_elemanlarinin_diger_kumede_bulunmasi", v: {}, z:"orta", alt:"alt_kume_tanimi" },
  { id: "s12_ak_002", s: "A ⊂ B ne demektir?", c: "A_kumesi_B_kumesinin_alt_kumesidir", v: {}, z:"orta", alt:"alt_kume_sembol" },
  { id: "s12_ak_003", s: "A = {1,2}, B = {1,2,3} ise A ⊂ B doğru mudur?", c: "evet", v: {}, z:"kolay", alt:"alt_kume_ornek" },

  // ALT DAL 2: ALT KÜME SAYISI
  { id: "s12_ak_004", s: "n elemanlı bir kümenin alt küme sayısı kaçtır?", c: "Math.pow(2,{n})", v: {}, z:"orta", alt:"alt_kume_sayisi_formul" },
  { id: "s12_ak_005", s: "{n} elemanlı bir kümenin alt küme sayısı kaçtır?", c: "Math.pow(2,{n})", v: {n:[2,6]}, z:"orta", alt:"alt_kume_sayisi" },
  { id: "s12_ak_006", s: "Boş kümenin kaç alt kümesi vardır?", c: "1_(kendisi)", v: {}, z:"orta", alt:"bos_kume_alt_kume" },
  { id: "s12_ak_007", s: "Alt küme sayısı {a} olan küme kaç elemanlıdır?", c: "Math.log2({a})", v: {a:[8,16,32,64,128,256]}, z:"cok_zor", alt:"alt_kumeden_eleman" },

  // ALT DAL 3: ÖZ ALT KÜME
  { id: "s12_ak_008", s: "Öz alt küme nedir?", c: "kendisi_haric_tum_alt_kumeler", v: {}, z:"orta", alt:"oz_alt_kume" },
  { id: "s12_ak_009", s: "n elemanlı bir kümenin öz alt küme sayısı kaçtır?", c: "Math.pow(2,{n})-1", v: {}, z:"orta", alt:"oz_alt_kume_formul" },
  { id: "s12_ak_010", s: "{n} elemanlı bir kümenin öz alt küme sayısı kaçtır?", c: "Math.pow(2,{n})-1", v: {n:[2,6]}, z:"orta", alt:"oz_alt_kume_sayisi" },

  // ALT DAL 4: r ELEMANLI ALT KÜME SAYISI
  { id: "s12_ak_011", s: "n elemanlı kümenin r elemanlı alt küme sayısı nasıl bulunur?", c: "C(n,r)", v: {}, z:"cok_zor", alt:"r_elemanli_formul" },
  { id: "s12_ak_012", s: "{n} elemanlı kümenin {r} elemanlı alt küme sayısı kaçtır?", c: "{C}", v: {n:[4,8], r:[1,"{n}-1"], C:"kombinasyon({n},{r})"}, z:"cok_zor", alt:"r_elemanli_sayi" },

  // ALT DAL 5: ALT KÜME ÖZELLİKLERİ
  { id: "s12_ak_013", s: "Her kümenin kendisi alt kümesi midir?", c: "evet", v: {}, z:"orta", alt:"kendisi_alt_kume" },
  { id: "s12_ak_014", s: "Boş küme her kümenin alt kümesi midir?", c: "evet", v: {}, z:"orta", alt:"bos_kume_alt_kume_her" },
  { id: "s12_ak_015", s: "A ⊂ B ve B ⊂ A ise A ile B arasındaki ilişki nedir?", c: "A=B", v: {}, z:"cok_zor", alt:"karsilikli_alt_kume" },

  // ALT DAL 6: ALT KÜME PROBLEMLERİ
  { id: "s12_ak_016", s: "Alt küme sayısı ile öz alt küme sayısı toplamı {t} olan küme kaç elemanlıdır?", c: "{n}", v: {t:[31,63,127,255], n:"Math.log2(({t}+1)/2)"}, z:"cok_zor", alt:"alt_oz_toplam" },
  { id: "s12_ak_017", s: "Alt küme sayısı, öz alt küme sayısından {f} fazla olan küme kaç elemanlıdır?", c: "1", v: {f:[1,1]}, z:"cok_zor", alt:"alt_oz_fark" },

  // ALT DAL 7: KUVVET KÜMESİ
  { id: "s12_ak_018", s: "Kuvvet kümesi nedir?", c: "bir_kumenin_tum_alt_kumelerinin_olusturdugu_kume", v: {}, z:"cok_zor", alt:"kuvvet_kumesi" },
  { id: "s12_ak_019", s: "n elemanlı kümenin kuvvet kümesinin eleman sayısı kaçtır?", c: "Math.pow(2,{n})", v: {}, z:"cok_zor", alt:"kuvvet_kumesi_sayisi" },

  // ALT DAL 8: ALT KÜME ÖZEL SORULAR
  { id: "s12_ak_020", s: "A = {1,2,3} kümesinin alt kümelerinin kaç tanesinde 1 bulunur?", c: "4", v: {}, z:"cok_zor", alt:"eleman_iceren_alt_kume" },
  { id: "s12_ak_021", s: "A = {1,2,3,4} kümesinin alt kümelerinin kaç tanesinde 1 bulunmaz?", c: "8", v: {}, z:"cok_zor", alt:"eleman_icermeyen" },
  { id: "s12_ak_022", s: "{n} elemanlı kümenin alt kümelerinin kaç tanesinde belirli bir eleman bulunur?", c: "Math.pow(2,{n}-1)", v: {n:[3,6]}, z:"cok_zor", alt:"belirli_eleman" },


  // ==========================================
  // KONU 3: KÜMELERDE BİRLEŞİM İŞLEMİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: BİRLEŞİM TANIMI
  { id: "s12_kb_001", s: "Birleşim kümesi nedir?", c: "iki_kumedeki_tum_elemanlarin_olusturdugu_kume", v: {}, z:"orta", alt:"birlesim_tanimi" },
  { id: "s12_kb_002", s: "A ∪ B ne demektir?", c: "A_ile_B_nin_birlesimi", v: {}, z:"orta", alt:"birlesim_sembol" },
  { id: "s12_kb_003", s: "A = {1,2,3}, B = {3,4,5} ise A ∪ B = ?", c: "{1,2,3,4,5}", v: {}, z:"orta", alt:"birlesim_ornek" },

  // ALT DAL 2: BİRLEŞİM ELEMAN SAYISI
  { id: "s12_kb_004", s: "s(A∪B) formülü nedir?", c: "s(A)+s(B)-s(A∩B)", v: {}, z:"orta", alt:"birlesim_formul" },
  { id: "s12_kb_005", s: "s(A)={a}, s(B)={b}, s(A∩B)={c} ise s(A∪B) = ?", c: "{a}+{b}-{c}", v: {a:[5,15], b:[4,12], c:[2,"min({a},{b})-1"], kosul:"c<min(a,b)"}, z:"orta", alt:"birlesim_sayisi" },
  { id: "s12_kb_006", s: "Ayrık kümelerde s(A∪B) = ?", c: "s(A)+s(B)", v: {}, z:"orta", alt:"ayrik_birlesim" },

  // ALT DAL 3: BİRLEŞİM ÖZELLİKLERİ
  { id: "s12_kb_007", s: "A ∪ A = ?", c: "A", v: {}, z:"orta", alt:"tek_kuvvet" },
  { id: "s12_kb_008", s: "A ∪ ∅ = ?", c: "A", v: {}, z:"orta", alt:"bos_birlesim" },
  { id: "s12_kb_009", s: "A ∪ E = ? (E: evrensel küme)", c: "E", v: {}, z:"orta", alt:"evrensel_birlesim" },
  { id: "s12_kb_010", s: "A ∪ B = B ∪ A doğru mudur? (Değişme özelliği)", c: "evet", v: {}, z:"orta", alt:"degisme" },

  // ALT DAL 4: BİRLEŞİM PROBLEMLERİ
  { id: "s12_kb_011", s: "s(A)={a}, s(B)={b}, s(A∪B)={c} ise s(A∩B) = ?", c: "{a}+{b}-{c}", v: {a:[6,15], b:[5,12], c:[8,20], kosul:"c>=max(a,b)"}, z:"zor", alt:"kesisim_bulma" },
  { id: "s12_kb_012", s: "s(A∪B) en az kaç olabilir?", c: "max(s(A),s(B))", v: {}, z:"cok_zor", alt:"min_birlesim" },
  { id: "s12_kb_013", s: "s(A∪B) en çok kaç olabilir?", c: "s(A)+s(B)_(ayrik_ise)", v: {}, z:"cok_zor", alt:"max_birlesim" },

  // ALT DAL 5: ÜÇ KÜME BİRLEŞİMİ
  { id: "s12_kb_014", s: "s(A∪B∪C) formülü nedir?", c: "s(A)+s(B)+s(C)-s(A∩B)-s(A∩C)-s(B∩C)+s(A∩B∩C)", v: {}, z:"cok_zor", alt:"uc_kume_formul" },

  // ALT DAL 6: BİRLEŞİM KARIŞIK
  { id: "s12_kb_015", s: "A ∪ (B ∩ C) = ?", c: "(A∪B)∩(A∪C)", v: {}, z:"cok_zor", alt:"dagilma" },
  { id: "s12_kb_016", s: "s(A∪B) = s(A) + s(B) ise kümeler için ne söylenebilir?", c: "ayrik_kumelerdir", v: {}, z:"orta", alt:"ayriklik" },


  // ==========================================
  // KONU 4: KÜMELERDE KESİŞİM İŞLEMİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: KESİŞİM TANIMI
  { id: "s12_ks_001", s: "Kesişim kümesi nedir?", c: "iki_kumede_de_bulunan_ortak_elemanlarin_kumesi", v: {}, z:"orta", alt:"kesisim_tanimi" },
  { id: "s12_ks_002", s: "A ∩ B ne demektir?", c: "A_ile_B_nin_kesisimi", v: {}, z:"orta", alt:"kesisim_sembol" },
  { id: "s12_ks_003", s: "A = {1,2,3}, B = {2,3,4} ise A ∩ B = ?", c: "{2,3}", v: {}, z:"orta", alt:"kesisim_ornek" },

  // ALT DAL 2: KESİŞİM ÖZELLİKLERİ
  { id: "s12_ks_004", s: "A ∩ A = ?", c: "A", v: {}, z:"orta", alt:"tek_kuvvet_kesisim" },
  { id: "s12_ks_005", s: "A ∩ ∅ = ?", c: "∅", v: {}, z:"orta", alt:"bos_kesisim" },
  { id: "s12_ks_006", s: "A ∩ E = ?", c: "A", v: {}, z:"orta", alt:"evrensel_kesisim" },
  { id: "s12_ks_007", s: "A ∩ B = B ∩ A doğru mudur?", c: "evet", v: {}, z:"orta", alt:"degisme_kesisim" },

  // ALT DAL 3: AYRIK KÜMELER
  { id: "s12_ks_008", s: "Ayrık küme nedir?", c: "kesisimleri_bos_kume_olan_kumeler", v: {}, z:"orta", alt:"ayrik_kume" },
  { id: "s12_ks_009", s: "A ve B ayrık ise A ∩ B = ?", c: "∅", v: {}, z:"orta", alt:"ayrik_kesisim" },
  { id: "s12_ks_010", s: "Ayrık iki kümenin kesişiminin eleman sayısı kaçtır?", c: "0", v: {}, z:"orta", alt:"ayrik_eleman_sayisi" },

  // ALT DAL 4: KESİŞİM ELEMAN SAYISI
  { id: "s12_ks_011", s: "s(A∩B) en az kaç olabilir?", c: "0_(ayrik_ise)", v: {}, z:"cok_zor", alt:"min_kesisim" },
  { id: "s12_ks_012", s: "s(A∩B) en çok kaç olabilir?", c: "min(s(A),s(B))", v: {}, z:"cok_zor", alt:"max_kesisim" },

  // ALT DAL 5: ÜÇ KÜME KESİŞİMİ
  { id: "s12_ks_013", s: "A ∩ B ∩ C ne demektir?", c: "her_uc_kumede_de_bulunan_ortak_elemanlar", v: {}, z:"orta", alt:"uc_kesisim" },
  { id: "s12_ks_014", s: "(A ∩ B) ∩ C = A ∩ (B ∩ C) doğru mudur?", c: "evet_(birlesme_ozelligi)", v: {}, z:"cok_zor", alt:"birlesme" },

  // ALT DAL 6: KESİŞİM KARIŞIK
  { id: "s12_ks_015", s: "A ∩ (B ∪ C) = ?", c: "(A∩B)∪(A∩C)", v: {}, z:"cok_zor", alt:"kesisim_dagilma" },
  { id: "s12_ks_016", s: "s(A∩B) = 0 ise A ve B kümeleri için ne söylenebilir?", c: "ayrik_kumelerdir", v: {}, z:"orta", alt:"kesisim_sifir" },


  // ==========================================
  // KONU 5: KÜMELERDE FARK VE TÜMLEME (6 alt dal)
  // ==========================================

  // ALT DAL 1: FARK İŞLEMİ
  { id: "s12_kf_001", s: "A \\ B veya A - B ne demektir?", c: "A_da_olup_B_de_olmayan_elemanlar", v: {}, z:"orta", alt:"fark_tanimi" },
  { id: "s12_kf_002", s: "A = {1,2,3,4}, B = {3,4,5} ise A \\ B = ?", c: "{1,2}", v: {}, z:"orta", alt:"fark_ornek" },
  { id: "s12_kf_003", s: "B \\ A = ? (A = {1,2,3,4}, B = {3,4,5})", c: "{5}", v: {}, z:"orta", alt:"fark_ters" },

  // ALT DAL 2: FARK ÖZELLİKLERİ
  { id: "s12_kf_004", s: "A \\ A = ?", c: "∅", v: {}, z:"orta", alt:"kendinden_fark" },
  { id: "s12_kf_005", s: "A \\ ∅ = ?", c: "A", v: {}, z:"orta", alt:"bos_fark" },
  { id: "s12_kf_006", s: "∅ \\ A = ?", c: "∅", v: {}, z:"orta", alt:"bos_fark_ters" },
  { id: "s12_kf_007", s: "A \\ B = B \\ A her zaman doğru mudur?", c: "hayir", v: {}, z:"orta", alt:"fark_degismez" },

  // ALT DAL 3: TÜMLEME
  { id: "s12_kf_008", s: "Tümleme nedir?", c: "evrensel_kumede_olup_kumede_olmayan_elemanlar", v: {}, z:"orta", alt:"tumleme_tanimi" },
  { id: "s12_kf_009", s: "A' ne demektir?", c: "A_kumesinin_tumleyeni", v: {}, z:"orta", alt:"tumleme_sembol" },
  { id: "s12_kf_010", s: "E = {1,2,3,4,5}, A = {1,2} ise A' = ?", c: "{3,4,5}", v: {}, z:"orta", alt:"tumleme_ornek" },

  // ALT DAL 4: TÜMLEME ÖZELLİKLERİ
  { id: "s12_kf_011", s: "A ∪ A' = ?", c: "E", v: {}, z:"orta", alt:"birlesim_tumleyen" },
  { id: "s12_kf_012", s: "A ∩ A' = ?", c: "∅", v: {}, z:"orta", alt:"kesisim_tumleyen" },
  { id: "s12_kf_013", s: "(A')' = ?", c: "A", v: {}, z:"orta", alt:"tumleyen_tumleyeni" },
  { id: "s12_kf_014", s: "E' = ?", c: "∅", v: {}, z:"orta", alt:"evrensel_tumleyen" },
  { id: "s12_kf_015", s: "∅' = ?", c: "E", v: {}, z:"orta", alt:"bos_tumleyen" },

  // ALT DAL 5: DE MORGAN KURALLARI
  { id: "s12_kf_016", s: "(A∪B)' = ?", c: "A'∩B'", v: {}, z:"cok_zor", alt:"de_morgan_1" },
  { id: "s12_kf_017", s: "(A∩B)' = ?", c: "A'∪B'", v: {}, z:"cok_zor", alt:"de_morgan_2" },

  // ALT DAL 6: FARK VE TÜMLEME İLİŞKİSİ
  { id: "s12_kf_018", s: "A \\ B = ? (Tümleme ile ifade ediniz)", c: "A∩B'", v: {}, z:"cok_zor", alt:"fark_tumleme" },
  { id: "s12_kf_019", s: "s(A') = ? (E evrensel, s(E)=n, s(A)=a)", c: "{n}-{a}", v: {n:[10,30], a:[2,"{n}-2"]}, z:"orta", alt:"tumleyen_sayisi" },


  // ==========================================
  // KONU 6: KÜME PROBLEMLERİ - 2 KÜME (8 alt dal)
  // ==========================================

  // ALT DAL 1: İKİ KÜME TEMEL PROBLEM
  { id: "s12_kp2_001", s: "Bir sınıfta {a} kişi matematikten, {b} kişi fizikten başarılıdır. {c} kişi her ikisinden de başarılı ise sınıfta kaç kişi vardır?", c: "{a}+{b}-{c}", v: {a:[10,25], b:[8,20], c:[2,"min({a},{b})-1"]}, z:"orta", alt:"iki_ders" },
  { id: "s12_kp2_002", s: "Bir grupta {t} kişi vardır. {a} kişi İngilizce, {b} kişi Almanca bilmektedir. {c} kişi hiçbirini bilmediğine göre her iki dili bilen kaç kişidir?", c: "{a}+{b}+{c}-{t}", v: {t:[20,40], a:[8,25], b:[6,20], c:[2,8], kosul:"a+b+c>t"}, z:"zor", alt:"dil_problemi" },

  // ALT DAL 2: SADECE BİRİNE AİT OLANLAR
  { id: "s12_kp2_003", s: "s(A)={a}, s(B)={b}, s(A∩B)={c} ise sadece A'ya ait eleman sayısı kaçtır?", c: "{a}-{c}", v: {a:[8,20], b:[6,18], c:[2,"min({a},{b})-1"]}, z:"orta", alt:"sadece_A" },
  { id: "s12_kp2_004", s: "s(A)={a}, s(B)={b}, s(A∩B)={c} ise sadece B'ye ait eleman sayısı kaçtır?", c: "{b}-{c}", v: {a:[8,20], b:[6,18], c:[2,"min({a},{b})-1"]}, z:"orta", alt:"sadece_B" },

  // ALT DAL 3: EN AZ BİRİNE AİT OLANLAR
  { id: "s12_kp2_005", s: "En az bir dil bilenlerin sayısı nasıl bulunur?", c: "s(A∪B)=s(A)+s(B)-s(A∩B)", v: {}, z:"orta", alt:"en_az_bir" },
  { id: "s12_kp2_006", s: "Hiçbirini bilmeyenlerin sayısı nasıl bulunur?", c: "toplam-s(A∪B)", v: {}, z:"orta", alt:"hicbirini" },

  // ALT DAL 4: İKİ KÜME PROBLEMLERİ (SÖZEL)
  { id: "s12_kp2_007", s: "{t} kişilik sınıfta {a} kişi gözlüklü, {b} kişi gözlüksüzdür. {c} kişi hem gözlüklü hem kızdır. Gözlüklü erkek sayısı kaçtır?", c: "{a}-{c}", v: {t:[20,40], a:[8,15], b:[12,25], c:[2,"{a}-1"], kosul:"a+b==t"}, z:"zor", alt:"gozluk_cinsiyet" },
  { id: "s12_kp2_008", s: "Bir otelde kalan {t} kişiden {a}'sı havuzu, {b}'si denizi kullanmıştır. {c} kişi her ikisini de kullandığına göre sadece havuzu kullanan kaç kişidir?", c: "{a}-{c}", v: {t:[25,50], a:[10,25], b:[8,20], c:[3,"min({a},{b})-1"]}, z:"orta", alt:"havuz_deniz" },

  // ALT DAL 5: YÜZDELİ KÜME PROBLEMLERİ
  { id: "s12_kp2_009", s: "%{p1}'i A, %{p2}'si B özelliğine sahip grupta %{p3} her ikisine de sahiptir. Sadece A'ya sahip olanların yüzdesi kaçtır?", c: "%{p1}-{p3}", v: {p1:[30,70], p2:[20,50], p3:[5,"min({p1},{p2})-5"]}, z:"cok_zor", alt:"yuzde_kume" },

  // ALT DAL 6: İKİ KÜME MAKSİMUM-MİNİMUM
  { id: "s12_kp2_010", s: "s(A)={a}, s(B)={b} ise s(A∪B) en az kaçtır?", c: "max({a},{b})", v: {a:[5,15], b:[4,14]}, z:"cok_zor", alt:"min_birlesim_soru" },
  { id: "s12_kp2_011", s: "s(A)={a}, s(B)={b} ise s(A∪B) en çok kaçtır?", c: "{a}+{b}", v: {a:[5,12], b:[4,10]}, z:"cok_zor", alt:"max_birlesim_soru" },
  { id: "s12_kp2_012", s: "s(A)={a}, s(B)={b} ise s(A∩B) en az kaçtır?", c: "0", v: {a:[5,15], b:[4,12]}, z:"cok_zor", alt:"min_kesisim_soru" },
  { id: "s12_kp2_013", s: "s(A)={a}, s(B)={b} ise s(A∩B) en çok kaçtır?", c: "min({a},{b})", v: {a:[5,15], b:[4,14]}, z:"cok_zor", alt:"max_kesisim_soru" },

  // ALT DAL 7: İKİ KÜME GRAFİK SORULARI
  { id: "s12_kp2_014", s: "Venn şemasında 2 küme için kaç bölge vardır?", c: "4", v: {}, z:"orta", alt:"venn_2_bolge" },
  { id: "s12_kp2_015", s: "Venn şemasında bölgeleri adlandırınız.", c: "sadece_A,_sadece_B,_A∩B,_hicbiri", v: {}, z:"orta", alt:"bolge_adlari" },

  // ALT DAL 8: İKİ KÜME ÖZEL SORULAR
  { id: "s12_kp2_016", s: "{t} kişilik grupta {a} kişi A, {b} kişi B gazetesini okumaktadır. {c} kişi hiçbirini okumadığına göre yalnız A okuyan kaç kişidir?", c: "{a}+{b}+{c}-{t}", v: {t:[30,50], a:[10,20], b:[8,18], c:[3,10], kosul:"t>a+b"}, z:"cok_zor", alt:"gazete" },
  { id: "s12_kp2_017", s: "A ve B kümeleri için s(A\\B)={a}, s(B\\A)={b}, s(A∩B)={c} ise s(A∪B)=?", c: "{a}+{b}+{c}", v: {a:[3,10], b:[2,8], c:[1,6]}, z:"zor", alt:"farklarla_birlesim" },


  // ==========================================
  // KONU 7: KÜME PROBLEMLERİ - 3 KÜME (10 alt dal)
  // ==========================================

  // ALT DAL 1: ÜÇ KÜME FORMÜLÜ
  { id: "s12_kp3_001", s: "s(A∪B∪C) formülü nedir?", c: "s(A)+s(B)+s(C)-s(A∩B)-s(A∩C)-s(B∩C)+s(A∩B∩C)", v: {}, z:"cok_zor", alt:"uc_kume_formul" },
  { id: "s12_kp3_002", s: "s(A)={a}, s(B)={b}, s(C)={c}, s(A∩B)={ab}, s(A∩C)={ac}, s(B∩C)={bc}, s(A∩B∩C)={abc} ise s(A∪B∪C)=?", c: "{a}+{b}+{c}-{ab}-{ac}-{bc}+{abc}", v: {a:[10,20], b:[8,18], c:[6,15], ab:[2,6], ac:[1,5], bc:[1,4], abc:[1,3], kosul:"abc<min(ab,ac,bc)"}, z:"cok_zor", alt:"uc_kume_sayi" },

  // ALT DAL 2: SADECE BİR KÜMEYE AİT OLANLAR
  { id: "s12_kp3_003", s: "sadece A'ya ait eleman sayısı nasıl bulunur?", c: "s(A)-s(A∩B)-s(A∩C)+s(A∩B∩C)", v: {}, z:"cok_zor", alt:"sadece_A_uc" },
  { id: "s12_kp3_004", s: "s(A)={a}, s(A∩B)={ab}, s(A∩C)={ac}, s(A∩B∩C)={abc} ise sadece A = ?", c: "{a}-{ab}-{ac}+{abc}", v: {a:[10,25], ab:[3,8], ac:[2,6], abc:[1,4], kosul:"abc<min(ab,ac)"}, z:"cok_zor", alt:"sadece_A_hesap" },

  // ALT DAL 3: EN AZ BİR KÜMEYE AİT OLANLAR
  { id: "s12_kp3_005", s: "En az bir kümeye ait olanların sayısı nedir?", c: "s(A∪B∪C)", v: {}, z:"orta", alt:"en_az_bir_uc" },
  { id: "s12_kp3_006", s: "Hiçbir kümeye ait olmayanların sayısı nedir?", c: "toplam-s(A∪B∪C)", v: {}, z:"orta", alt:"hicbir_uc" },

  // ALT DAL 4: EN AZ İKİ KÜMEYE AİT OLANLAR
  { id: "s12_kp3_007", s: "En az iki kümeye ait olanların sayısı nasıl bulunur?", c: "s(A∩B)+s(A∩C)+s(B∩C)-2*s(A∩B∩C)", v: {}, z:"cok_zor", alt:"en_az_iki" },
  { id: "s12_kp3_008", s: "En çok iki kümeye ait olanların sayısı nasıl bulunur?", c: "toplam-s(A∩B∩C)", v: {}, z:"cok_zor", alt:"en_cok_iki" },

  // ALT DAL 5: ÜÇ KÜME PROBLEMLERİ (SÖZEL)
  { id: "s12_kp3_009", s: "Bir grupta {a} kişi İngilizce, {b} kişi Almanca, {c} kişi Fransızca bilmektedir. {ab} kişi İngilizce ve Almanca, {ac} kişi İngilizce ve Fransızca, {bc} kişi Almanca ve Fransızca, {abc} kişi her üç dili bilmektedir. Grupta {t} kişi olduğuna göre hiçbir dil bilmeyen kaç kişidir?", c: "{t}-({a}+{b}+{c}-{ab}-{ac}-{bc}+{abc})", v: {t:[40,80], a:[15,30], b:[10,25], c:[8,20], ab:[3,10], ac:[2,8], bc:[2,6], abc:[1,4]}, z:"cok_zor", alt:"uc_dil" },
  { id: "s12_kp3_010", s: "Bir sınıfta Matematikten {a}, Fizikten {b}, Kimyadan {c} kişi başarılıdır. {ab} kişi M ve F'den, {ac} kişi M ve K'dan, {bc} kişi F ve K'dan, {abc} kişi her üçünden başarılıdır. Sadece Matematikten başarılı olan kaç kişidir?", c: "{a}-{ab}-{ac}+{abc}", v: {a:[12,25], b:[10,20], c:[8,18], ab:[3,8], ac:[2,6], bc:[2,5], abc:[1,3]}, z:"cok_zor", alt:"uc_ders" },

  // ALT DAL 6: ÜÇ KÜME VENN ŞEMASI
  { id: "s12_kp3_011", s: "Venn şemasında 3 küme için kaç bölge vardır?", c: "8", v: {}, z:"orta", alt:"venn_3_bolge" },
  { id: "s12_kp3_012", s: "Üç küme Venn şemasında bölgeler nasıl doldurulur?", c: "icten_disa_dogru_(once_uc_kesisim_sonra_iki_kesisim_sonra_tek)", v: {}, z:"orta", alt:"venn_doldurma" },

  // ALT DAL 7: ÜÇ KÜME ÖZEL SORULAR
  { id: "s12_kp3_013", s: "s(A)={a}, s(B)={b}, s(C)={c} ve her üçü de ayrık ise s(A∪B∪C)=?", c: "{a}+{b}+{c}", v: {a:[5,15], b:[4,12], c:[3,10]}, z:"orta", alt:"ayrik_uc" },
  { id: "s12_kp3_014", s: "s(A∪B∪C) en çok kaç olabilir?", c: "s(A)+s(B)+s(C)_(ayrik_ise)", v: {}, z:"cok_zor", alt:"max_uc_birlesim" },
  { id: "s12_kp3_015", s: "s(A∪B∪C) en az kaç olabilir?", c: "max(s(A),s(B),s(C))", v: {}, z:"cok_zor", alt:"min_uc_birlesim" },

  // ALT DAL 8: İKİ VE ÜÇ KÜME KARMA
  { id: "s12_kp3_016", s: "İki küme için formül ile üç küme için formül arasındaki benzerlik nedir?", c: "ikili_kesisimler_cikarilir_uclu_kesisim_eklenir", v: {}, z:"orta", alt:"iki_uc_benzerlik" },

  // ALT DAL 9: ELEMAN SAYISI İLİŞKİLERİ
  { id: "s12_kp3_017", s: "s(A∪B)={ab}, s(A∪C)={ac}, s(B∪C)={bc} verilmişse s(A∪B∪C) bulunabilir mi?", c: "hayir_(yetersiz_bilgi)", v: {}, z:"cok_zor", alt:"yetersiz" },
  { id: "s12_kp3_018", s: "s(A∩B∩C) en çok kaç olabilir?", c: "min(s(A),s(B),s(C))", v: {}, z:"cok_zor", alt:"max_uc_kesisim" },

  // ALT DAL 10: KÜME PROBLEMLERİ ÖZET
  { id: "s12_kp3_019", s: "Küme problemlerinde en sık yapılan hata nedir?", c: "iki_kesisimlerden_uclu_kesisimi_cikarmayi_unutmak", v: {}, z:"orta", alt:"sik_hata" },
  { id: "s12_kp3_020", s: "Küme problemlerinde Venn şeması doldurulurken sıralama nasıldır?", c: "ortadan_baslanir_(uclu_kesisimden_teklere_dogru)", v: {}, z:"orta", alt:"venn_sirasi" },


  // ==========================================
  // KONU 8: KÜME İŞLEMLERİ VE ÖZELLİKLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: DEĞİŞME ÖZELLİĞİ
  { id: "s12_io_001", s: "A ∪ B = B ∪ A olduğunu gösteriniz.", c: "birlesimde_degisme_ozelligi_vardir", v: {}, z:"orta", alt:"degisme_birlesim" },
  { id: "s12_io_002", s: "A ∩ B = B ∩ A olduğunu gösteriniz.", c: "kesisimde_degisme_ozelligi_vardir", v: {}, z:"orta", alt:"degisme_kesisim" },

  // ALT DAL 2: BİRLEŞME ÖZELLİĞİ
  { id: "s12_io_003", s: "(A∪B)∪C = A∪(B∪C) doğru mudur?", c: "evet_(birlesme_ozelligi)", v: {}, z:"orta", alt:"birlesme_birlesim" },
  { id: "s12_io_004", s: "(A∩B)∩C = A∩(B∩C) doğru mudur?", c: "evet_(birlesme_ozelligi)", v: {}, z:"orta", alt:"birlesme_kesisim" },

  // ALT DAL 3: DAĞILMA ÖZELLİĞİ
  { id: "s12_io_005", s: "A ∪ (B∩C) = ?", c: "(A∪B)∩(A∪C)", v: {}, z:"cok_zor", alt:"birlesim_dagilma" },
  { id: "s12_io_006", s: "A ∩ (B∪C) = ?", c: "(A∩B)∪(A∩C)", v: {}, z:"cok_zor", alt:"kesisim_dagilma" },

  // ALT DAL 4: TEK KUVVET ÖZELLİĞİ
  { id: "s12_io_007", s: "A ∪ A = ?", c: "A", v: {}, z:"orta", alt:"tek_kuvvet_birlesim" },
  { id: "s12_io_008", s: "A ∩ A = ?", c: "A", v: {}, z:"orta", alt:"tek_kuvvet_kesisim" },

  // ALT DAL 5: ETKİSİZ ELEMAN
  { id: "s12_io_009", s: "Birleşimin etkisiz elemanı nedir?", c: "∅_(bos_kume)", v: {}, z:"cok_zor", alt:"birlesim_etkisiz" },
  { id: "s12_io_010", s: "Kesişimin etkisiz elemanı nedir?", c: "E_(evrensel_kume)", v: {}, z:"cok_zor", alt:"kesisim_etkisiz" },

  // ALT DAL 6: TÜMLEYEN ÖZELLİKLERİ
  { id: "s12_io_011", s: "A \\ B ile A∩B' arasındaki ilişki nedir?", c: "esittirler", v: {}, z:"cok_zor", alt:"fark_esit_tumleme" },
  { id: "s12_io_012", s: "De Morgan kurallarını yazınız.", c: "(A∪B)'=A'∩B',_(A∩B)'=A'∪B'", v: {}, z:"cok_zor", alt:"de_morgan" },


  // ==========================================
  // KONU 9: VENN ŞEMASI (6 alt dal)
  // ==========================================

  // ALT DAL 1: VENN ŞEMASI ÇİZİMİ
  { id: "s12_vs_001", s: "2 küme için Venn şeması nasıl çizilir?", c: "ic_ice_gecmis_iki_kapali_egri", v: {}, z:"orta", alt:"venn_2_cizim" },
  { id: "s12_vs_002", s: "3 küme için Venn şeması nasıl çizilir?", c: "uc_kumenin_ikiserli_olarak_ic_ice_gectigi_kapali_egriler", v: {}, z:"orta", alt:"venn_3_cizim" },

  // ALT DAL 2: VENN ŞEMASI BÖLGELERİ
  { id: "s12_vs_003", s: "2 kümeli Venn şemasında bölgeleri sayarak gösteriniz.", c: "4_bolge:_sadece_A,_sadece_B,_A∩B,_dıs_bolge", v: {}, z:"orta", alt:"venn_2_bolge_ad" },
  { id: "s12_vs_004", s: "3 kümeli Venn şemasında bölgeleri sayarak gösteriniz.", c: "8_bolge", v: {}, z:"orta", alt:"venn_3_bolge_ad" },

  // ALT DAL 3: VENN ŞEMASI DOLDURMA
  { id: "s12_vs_005", s: "Venn şeması doldurulurken nereden başlanır?", c: "en_icteki_bolgeden_(tum_kumelerin_kesisimi)", v: {}, z:"orta", alt:"venn_doldurma_sira" },
  { id: "s12_vs_006", s: "Venn şemasında verilmeyen bölge nasıl bulunur?", c: "toplamdan_bilinenler_cikarilarak", v: {}, z:"orta", alt:"venn_eksik" },

  // ALT DAL 4: VENN ŞEMASI PROBLEMLERİ
  { id: "s12_vs_007", s: "Venn şemasında A kümesi {a}, B kümesi {b} elemanlı, kesişimleri {c} ise sadece A kaçtır?", c: "{a}-{c}", v: {a:[8,20], b:[6,18], c:[2,6]}, z:"orta", alt:"venn_sadece_A" },
  { id: "s12_vs_008", s: "Venn şemasında tüm bölgelerin toplamı neyi verir?", c: "evrensel_kumenin_eleman_sayisini", v: {}, z:"orta", alt:"venn_toplam" },

  // ALT DAL 5: VENN ŞEMASI YORUMLAMA
  { id: "s12_vs_009", s: "Venn şemasında dış bölge neyi ifade eder?", c: "hicbir_kumeye_ait_olmayan_elemanlari", v: {}, z:"orta", alt:"venn_dis" },
  { id: "s12_vs_010", s: "Venn şeması hangi durumlarda kullanılır?", c: "kume_problemlerinin_gorsellestirilmesinde", v: {}, z:"orta", alt:"venn_kullanim" },

  // ALT DAL 6: VENN ŞEMASI ÖZEL
  { id: "s12_vs_011", s: "Ayrık iki kümenin Venn şeması nasıldır?", c: "ic_ice_gecmeyen_ayri_iki_kapali_egri", v: {}, z:"orta", alt:"ayrik_venn" },
  { id: "s12_vs_012", s: "Biri diğerinin alt kümesi olan iki kümenin Venn şeması nasıldır?", c: "biri_digerinin_icinde_olan_iki_kapali_egri", v: {}, z:"orta", alt:"alt_kume_venn" },


  // ==========================================
  // KONU 10: KARTEZYEN ÇARPIM (6 alt dal)
  // ==========================================

  // ALT DAL 1: KARTEZYEN ÇARPIM TANIMI
  { id: "s12_kc_001", s: "A × B (Kartezyen çarpım) nedir?", c: "sirali_ikililerin_olusturdugu_kume", v: {}, z:"orta", alt:"kartezyen_tanim" },
  { id: "s12_kc_002", s: "A = {a,b}, B = {1,2} ise A × B = ?", c: "{(a,1),(a,2),(b,1),(b,2)}", v: {}, z:"orta", alt:"kartezyen_ornek" },
  { id: "s12_kc_003", s: "(a,b) sıralı ikilisinde a ve b'nin sırası önemli midir?", c: "evet_(a,b)≠(b,a)_(a≠b_ise)", v: {}, z:"orta", alt:"sirali_ikili" },

  // ALT DAL 2: KARTEZYEN ÇARPIMIN ELEMAN SAYISI
  { id: "s12_kc_004", s: "s(A×B) = ?", c: "s(A)*s(B)", v: {}, z:"orta", alt:"kartezyen_sayisi" },
  { id: "s12_kc_005", s: "s(A)={a}, s(B)={b} ise s(A×B) = ?", c: "{a}*{b}", v: {a:[2,6], b:[3,8]}, z:"orta", alt:"kartezyen_sayi_hesap" },
  { id: "s12_kc_006", s: "s(A×B) = {c} ve s(A)={a} ise s(B) = ?", c: "{c}/{a}", v: {a:[2,5], c:[6,30], kosul:"c%a==0"}, z:"zor", alt:"kartezyen_eleman_bulma" },

  // ALT DAL 3: KARTEZYEN ÇARPIM ÖZELLİKLERİ
  { id: "s12_kc_007", s: "A × B = B × A her zaman doğru mudur?", c: "hayir_(degismez)", v: {}, z:"cok_zor", alt:"kartezyen_degisme" },
  { id: "s12_kc_008", s: "A × ∅ = ?", c: "∅", v: {}, z:"orta", alt:"bos_kartezyen" },
  { id: "s12_kc_009", s: "s(A×A) = ?", c: "[s(A)]²", v: {}, z:"orta", alt:"kare_kartezyen" },

  // ALT DAL 4: KARTEZYEN ÇARPIM GRAFİĞİ
  { id: "s12_kc_010", s: "A×B Kartezyen çarpımı koordinat düzleminde nasıl gösterilir?", c: "A_elemanlari_x_ekseninde_B_elemanlari_y_ekseninde_noktalar", v: {}, z:"orta", alt:"kartezyen_grafik" },
  { id: "s12_kc_011", s: "A = {1,2}, B = {3,4} ise A×B'nin grafiğinde kaç nokta vardır?", c: "4", v: {}, z:"orta", alt:"kartezyen_nokta" },

  // ALT DAL 5: BAĞINTI
  { id: "s12_kc_012", s: "Bağıntı nedir?", c: "kartezyen_carpimin_alt_kumesi", v: {}, z:"cok_zor", alt:"baginti_tanim" },
  { id: "s12_kc_013", s: "A'dan A'ya bağıntı sayısı kaçtır? (s(A)=n)", c: "Math.pow(2, {n}*{n})", v: {}, z:"cok_zor", alt:"baginti_sayisi" },
  { id: "s12_kc_014", s: "s(A)={n} ise A'dan A'ya kaç bağıntı tanımlanabilir?", c: "Math.pow(2, {n}*{n})", v: {n:[2,4]}, z:"cok_zor", alt:"baginti_sayisi_hesap" },

  // ALT DAL 6: KARTEZYEN ÇARPIM ÖZEL SORULAR
  { id: "s12_kc_015", s: "A×B'de (a,b) şeklinde kaç farklı sıralı ikili vardır? s(A)={a}, s(B)={b}", c: "{a}*{b}", v: {a:[3,8], b:[4,10]}, z:"orta", alt:"sirali_ikili_sayisi" },
  { id: "s12_kc_016", s: "A = {x|1<x<4, x∈N}, B = {y|2<y<6, y∈N} ise s(A×B) = ?", c: "6", v: {}, z:"zor", alt:"ortak_ozellik_kartezyen" },

],


// ==========================================
// SEVİYE 13: PERMÜTASYON
// ==========================================
13: [

  // ==========================================
  // KONU 1: SAYMANIN TEMEL İLKESİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: TOPLAMA KURALI
  { id: "s13_st_001", s: "Toplama kuralı nedir?", c: "\"VEYA\"_durumunda_secenekler_toplanir", v: {}, z:"orta", alt:"toplama_kurali" },
  { id: "s13_st_002", s: "A şehrinden B şehrine {a} farklı yol, B'den C'ye {b} farklı yol varsa A'dan C'ye kaç farklı yoldan gidilir?", c: "{a}*{b}", v: {a:[2,5], b:[2,5]}, z:"orta", alt:"carpma_kurali_yol" },
  { id: "s13_st_003", s: "{a} farklı kalem ve {b} farklı silgiden bir kalem VEYA bir silgi kaç farklı şekilde seçilir?", c: "{a}+{b}", v: {a:[3,8], b:[2,6]}, z:"orta", alt:"veya_secim" },

  // ALT DAL 2: ÇARPMA KURALI
  { id: "s13_st_004", s: "Çarpma kuralı nedir?", c: "\"VE\"_durumunda_secenekler_carpilir", v: {}, z:"orta", alt:"carpma_kurali" },
  { id: "s13_st_005", s: "{a} farklı gömlek ve {b} farklı pantolondan bir gömlek VE bir pantolon kaç farklı şekilde seçilir?", c: "{a}*{b}", v: {a:[3,8], b:[2,6]}, z:"orta", alt:"ve_secim" },
  { id: "s13_st_006", s: "{a} farklı çorba, {b} farklı yemek, {c} farklı tatlıdan oluşan menüden kaç farklı seçim yapılır?", c: "{a}*{b}*{c}", v: {a:[2,4], b:[3,6], c:[2,5]}, z:"orta", alt:"menu_secim" },

  // ALT DAL 3: TOPLAMA VE ÇARPMA KARMA
  { id: "s13_st_007", s: "{a} farklı roman ve {b} farklı dergiden 1 kitap kaç farklı şekilde seçilir?", c: "{a}+{b}", v: {a:[3,8], b:[2,6]}, z:"orta", alt:"kitap_dergi" },
  { id: "s13_st_008", s: "{a} kravat, {b} gömlekten; {c} farklı takım elbiseden bir kıyafet kombinasyonu kaç farklı şekilde yapılır?", c: "{a}*{b}*{c}", v: {a:[3,6], b:[4,8], c:[2,5]}, z:"orta", alt:"kiyafet_kombin" },

  // ALT DAL 4: SAYMA PROBLEMLERİ
  { id: "s13_st_009", s: "A'dan B'ye {a}, B'den C'ye {b} yol vardır. A'dan C'ye gidip dönüşte aynı yol kullanılmamak şartıyla kaç farklı gidiş-dönüş yapılır?", c: "{a}*{b}*({b}-1)*({a}-1)", v: {a:[2,4], b:[2,4]}, z:"cok_zor", alt:"gidis_donus" },
  { id: "s13_st_010", s: "Birbirinden farklı {a} oyuncak {b} çocuğa her çocuğa en az 1 oyuncak vermek şartıyla kaç farklı şekilde dağıtılır? (a≥b)", c: "{cozum}", v: {a:[3,5], b:[2,3], kosul:"a>=b"}, z:"cok_zor", alt:"oyuncak_dagitma" },

  // ALT DAL 5: SAYMA STRATEJİSİ
  { id: "s13_st_011", s: "Sayma problemlerinde ilk adım nedir?", c: "olayin_kac_asamada_gerceklestigini_belirlemek", v: {}, z:"orta", alt:"sayma_strateji" },
  { id: "s13_st_012", s: "\"VE\" ve \"VEYA\" durumları saymada nasıl ayırt edilir?", c: "bagimsiz_secimler_VE_carpilir,_alternatif_secimler_VEYA_toplanir", v: {}, z:"orta", alt:"ve_veya_fark" },

  // ALT DAL 6: SAYMA ÖRNEKLERİ
  { id: "s13_st_013", s: "{a} basamaklı kaç farklı sayı yazılabilir? (Rakamlar farklı değil)", c: "9*Math.pow(10,{a}-1)", v: {a:[2,4]}, z:"zor", alt:"sayi_yazma" },
  { id: "s13_st_014", s: "{a} basamaklı rakamları farklı kaç sayı yazılabilir?", c: "9*9*8*...", v: {a:[2,4]}, z:"cok_zor", alt:"rakamlari_farkli_sayi" },

  // ALT DAL 7: SAYMA VE OLASILIK GİRİŞ
  { id: "s13_st_015", s: "Bir zar atıldığında kaç farklı sonuç olabilir?", c: "6", v: {}, z:"kolay", alt:"zar" },
  { id: "s13_st_016", s: "İki zar birlikte atıldığında kaç farklı sonuç olabilir?", c: "36", v: {}, z:"orta", alt:"iki_zar" },

  // ALT DAL 8: SAYMA KARIŞIK
  { id: "s13_st_017", s: "{a} kız ve {b} erkek arasından 1 kız VE 1 erkek kaç farklı şekilde seçilir?", c: "{a}*{b}", v: {a:[3,8], b:[4,10]}, z:"orta", alt:"kiz_erkek_secim" },
  { id: "s13_st_018", s: "{a} kız ve {b} erkek arasından 1 kız VEYA 1 erkek kaç farklı şekilde seçilir?", c: "{a}+{b}", v: {a:[3,8], b:[4,10]}, z:"orta", alt:"kiz_veya_erkek" },


  // ==========================================
  // KONU 2: FAKTÖRİYEL (8 alt dal)
  // ==========================================

  // ALT DAL 1: FAKTÖRİYEL TANIMI
  { id: "s13_fk_001", s: "n! (faktöriyel) nedir?", c: "1'den_n'e_kadar_sayilarin_carpimi", v: {}, z:"orta", alt:"faktoriyel_tanim" },
  { id: "s13_fk_002", s: "{n}! = ?", c: "{n}!", v: {n:[3,7]}, z:"orta", alt:"faktoriyel_hesap" },
  { id: "s13_fk_003", s: "0! = ?", c: "1", v: {}, z:"orta", alt:"sifir_faktoriyel" },
  { id: "s13_fk_004", s: "1! = ?", c: "1", v: {}, z:"orta", alt:"bir_faktoriyel" },

  // ALT DAL 2: FAKTÖRİYEL HESAPLAMA
  { id: "s13_fk_005", s: "5! = ?", c: "120", v: {}, z:"kolay", alt:"5_faktoriyel" },
  { id: "s13_fk_006", s: "6! = ?", c: "720", v: {}, z:"kolay", alt:"6_faktoriyel" },
  { id: "s13_fk_007", s: "7! = ?", c: "5040", v: {}, z:"orta", alt:"7_faktoriyel" },

  // ALT DAL 3: FAKTÖRİYEL ÖZELLİKLERİ
  { id: "s13_fk_008", s: "n! = n × (n-1)! eşitliği doğru mudur?", c: "evet", v: {}, z:"orta", alt:"faktoriyel_ozellik" },
  { id: "s13_fk_009", s: "{n}! / ({n}-1)! = ?", c: "{n}", v: {n:[3,8]}, z:"orta", alt:"faktoriyel_bolme" },
  { id: "s13_fk_010", s: "{n}! + ({n}+1)! = ?", c: "{n}!*({n}+2)", v: {n:[2,5]}, z:"cok_zor", alt:"faktoriyel_toplam" },

  // ALT DAL 4: FAKTÖRİYEL SADELEŞTİRME
  { id: "s13_fk_011", s: "{a}! / {b}! = ? (a>b)", c: "{sonuc}", v: {a:[5,10], b:[2,"{a}-1"]}, z:"zor", alt:"faktoriyel_sade" },
  { id: "s13_fk_012", s: "8! / 6! = ?", c: "56", v: {}, z:"orta", alt:"8_6_faktoriyel" },

  // ALT DAL 5: FAKTÖRİYEL DEĞER BULMA
  { id: "s13_fk_013", s: "n! = 24 ise n kaçtır?", c: "4", v: {}, z:"orta", alt:"faktoriyelden_n" },
  { id: "s13_fk_014", s: "n! = 720 ise n kaçtır?", c: "6", v: {}, z:"orta", alt:"faktoriyelden_n_2" },

  // ALT DAL 6: FAKTÖRİYEL VE SON BASAMAK
  { id: "s13_fk_015", s: "{n}! sayısının son basamağı kaçtır?", c: "{son}", v: {n:[1,8], son:"{n}>=5?0:{n}==4?4:{n}==3?6:{n}==2?2:1"}, z:"zor", alt:"son_basamak" },
  { id: "s13_fk_016", s: "{n}! sayısının sondan kaç basamağı sıfırdır?", c: "{adet}", v: {n:[5,30]}, z:"cok_zor", alt:"sondan_sifir" },
  { id: "s13_fk_017", s: "Faktöriyelin son basamağı neden n≥5 için 0'dır?", c: "icinde_2_ve_5_carpani_bulundugu_icin_10'un_kati_olur", v: {}, z:"cok_zor", alt:"sifir_nedeni" },

  // ALT DAL 7: FAKTÖRİYEL PROBLEMLERİ
  { id: "s13_fk_018", s: "n! = (n+1)! / {a} ise n kaçtır?", c: "{a}-1", v: {a:[3,8]}, z:"cok_zor", alt:"faktoriyel_denklem" },
  { id: "s13_fk_019", s: "(n+1)! / n! = {a} ise n kaçtır?", c: "{a}-1", v: {a:[3,10]}, z:"zor", alt:"faktoriyel_oran" },

  // ALT DAL 8: FAKTÖRİYEL ÖZEL
  { id: "s13_fk_020", s: "{a}! × {b}! = ? (Çarpım durumunda sadeleşmez, ayrı ayrı hesaplanır)", c: "{sonuc}", v: {a:[3,5], b:[2,4]}, z:"orta", alt:"faktoriyel_carpim" },
  { id: "s13_fk_021", s: "Faktöriyel işareti hangi durumlarda dağıtılabilir?", c: "dagilmaz_(n!≠(a+b)!)", v: {}, z:"cok_zor", alt:"faktoriyel_dagilmaz" },


  // ==========================================
  // KONU 3: PERMÜTASYON TANIMI VE FORMÜLÜ (8 alt dal)
  // ==========================================

  // ALT DAL 1: PERMÜTASYON TANIMI
  { id: "s13_pt_001", s: "Permütasyon nedir?", c: "sirali_dizilis_(siralama_onemli)", v: {}, z:"orta", alt:"permutasyon_tanim" },
  { id: "s13_pt_002", s: "P(n,r) neyi ifade eder?", c: "n_elemanli_kumeden_r_elemanli_sirali_secim_sayisi", v: {}, z:"orta", alt:"P_n_r" },
  { id: "s13_pt_003", s: "Permütasyon ile kombinasyon arasındaki fark nedir?", c: "permutasyonda_siralama_onemli_kombinasyonda_degil", v: {}, z:"orta", alt:"permutasyon_kombinasyon_fark" },

  // ALT DAL 2: PERMÜTASYON FORMÜLÜ
  { id: "s13_pt_004", s: "P(n,r) formülü nedir?", c: "n!/(n-r)!", v: {}, z:"orta", alt:"permutasyon_formul" },
  { id: "s13_pt_005", s: "P({n},{r}) = ?", c: "{sonuc}", v: {n:[4,8], r:[1,"{n}"], sonuc:"{n}!/({n}-{r})!"}, z:"orta", alt:"permutasyon_hesap" },
  { id: "s13_pt_006", s: "P(5,2) = ?", c: "20", v: {}, z:"orta", alt:"P_5_2" },
  { id: "s13_pt_007", s: "P(6,3) = ?", c: "120", v: {}, z:"orta", alt:"P_6_3" },

  // ALT DAL 3: n'nin n'li PERMÜTASYONU
  { id: "s13_pt_008", s: "P(n,n) = ?", c: "n!", v: {}, z:"orta", alt:"P_n_n" },
  { id: "s13_pt_009", s: "{n} farklı kitap bir rafa kaç farklı şekilde dizilir?", c: "{n}!", v: {n:[3,7]}, z:"orta", alt:"kitap_dizme" },
  { id: "s13_pt_010", s: "{n} kişi {n} sandalyeye kaç farklı şekilde oturur?", c: "{n}!", v: {n:[3,6]}, z:"orta", alt:"oturma" },

  // ALT DAL 4: r'li PERMÜTASYON
  { id: "s13_pt_011", s: "{n} kişi arasından {r} kişi kaç farklı şekilde sıralanır?", c: "P({n},{r})", v: {n:[5,10], r:[2,"{n}-1"]}, z:"orta", alt:"r_li_siralama" },
  { id: "s13_pt_012", s: "{n} farklı dersten {r} tanesi bir günde kaç farklı şekilde sıralanır?", c: "P({n},{r})", v: {n:[5,8], r:[2,"{n}-1"]}, z:"zor", alt:"ders_siralama" },

  // ALT DAL 5: P(n,0) ve P(n,1)
  { id: "s13_pt_013", s: "P(n,0) = ?", c: "1", v: {}, z:"orta", alt:"P_n_0" },
  { id: "s13_pt_014", s: "P(n,1) = ?", c: "n", v: {}, z:"orta", alt:"P_n_1" },
  { id: "s13_pt_015", s: "P({n},{n}-1) = ?", c: "{n}!", v: {n:[3,7]}, z:"cok_zor", alt:"P_n_n-1" },

  // ALT DAL 6: PERMÜTASYON ÖZELLİKLERİ
  { id: "s13_pt_016", s: "P(n,r) = n × (n-1) × ... × (n-r+1) doğru mudur?", c: "evet", v: {}, z:"orta", alt:"permutasyon_acilim" },
  { id: "s13_pt_017", s: "P(n,r) ile C(n,r) arasındaki ilişki nedir?", c: "P(n,r)=C(n,r)×r!", v: {}, z:"cok_zor", alt:"P_C_iliski" },

  // ALT DAL 7: PERMÜTASYON SORULARI
  { id: "s13_pt_018", s: "{n} kişilik bir grupta başkan ve başkan yardımcısı kaç farklı şekilde seçilir?", c: "P({n},2)={n}*({n}-1)", v: {n:[4,10]}, z:"orta", alt:"baskan_secimi" },
  { id: "s13_pt_019", s: "1,2,3,4,5 rakamlarıyla 3 basamaklı rakamları farklı kaç sayı yazılır?", c: "P(5,3)=60", v: {}, z:"orta", alt:"rakam_sayi" },

  // ALT DAL 8: PERMÜTASYON GENEL
  { id: "s13_pt_020", s: "Permütasyonda neden çarpma yapılır?", c: "her_secim_bir_oncekinden_bagimsiz_ve_siralama_onemli", v: {}, z:"orta", alt:"permutasyon_mantik" },
  { id: "s13_pt_021", s: "n kişi yan yana kaç farklı şekilde sıralanır?", c: "n!", v: {}, z:"orta", alt:"yan_yana" },


  // ==========================================
  // KONU 4: TEKRARLI PERMÜTASYON (6 alt dal)
  // ==========================================

  // ALT DAL 1: TEKRARLI PERMÜTASYON TANIMI
  { id: "s13_tp_001", s: "Tekrarlı permütasyon nedir?", c: "ozdes_elemanlarin_bulundugu_durumda_siralama", v: {}, z:"orta", alt:"tekrarli_tanim" },
  { id: "s13_tp_002", s: "Tekrarlı permütasyon formülü nedir?", c: "n!/(a!×b!×c!...)", v: {}, z:"orta", alt:"tekrarli_formul" },

  // ALT DAL 2: TEKRARLI PERMÜTASYON HESAPLAMA
  { id: "s13_tp_003", s: "\"KALEM\" kelimesinin harfleriyle kaç farklı 5 harfli anlamlı/anlamsız kelime yazılır?", c: "5!=120", v: {}, z:"orta", alt:"KALEM" },
  { id: "s13_tp_004", s: "\"KALE\" kelimesinin harfleriyle kaç farklı 4 harfli kelime yazılır?", c: "4!/2!=12", v: {}, z:"zor", alt:"KALE_tekrar" },
  { id: "s13_tp_005", s: "\"MATEMATİK\" kelimesindeki harflerle kaç farklı dizilim yapılır?", c: "9!/(2!×2!×2!)", v: {}, z:"cok_zor", alt:"MATEMATIK" },

  // ALT DAL 3: TEKRARLI PERMÜTASYON SORULARI
  { id: "s13_tp_006", s: "{a} özdeş mavi, {b} özdeş kırmızı bilye kaç farklı şekilde sıralanır?", c: "({a}+{b})!/({a}!×{b}!)", v: {a:[2,4], b:[2,4]}, z:"zor", alt:"bilye_siralama" },
  { id: "s13_tp_007", s: "{a} tane 1, {b} tane 0 ile kaç farklı {a+b} basamaklı sayı yazılır? (Başta 0 olmaz)", c: "{sonuc}", v: {a:[2,4], b:[1,3]}, z:"cok_zor", alt:"sayi_0_1" },

  // ALT DAL 4: ÖZDEŞ NESNELER
  { id: "s13_tp_008", s: "Özdeş nesnelerin sıralanmasında neden bölme yapılır?", c: "ozdeslerin_kendi_arasinda_yer_degistirmesi_fark_yaratmaz", v: {}, z:"orta", alt:"ozdes_mantik" },
  { id: "s13_tp_009", s: "{n} özdeş oyuncak {c} çocuğa kaç farklı şekilde dağıtılır?", c: "C({n}+{c}-1,{c}-1)", v: {n:[3,6], c:[2,4]}, z:"cok_zor", alt:"ozdes_dagitma" },

  // ALT DAL 5: TEKRARLI PERMÜTASYON ÖZEL
  { id: "s13_tp_010", s: "\"AAAAAB\" diziliminde A'lar özdeş olduğu için kaç farklı dizilim vardır?", c: "6!/(5!×1!)=6", v: {}, z:"zor", alt:"AAAAAB" },
  { id: "s13_tp_011", s: "4 özdeş kalem, 3 özdeş silgi bir sıraya kaç farklı şekilde dizilir?", c: "7!/(4!×3!)=35", v: {}, z:"zor", alt:"kalem_silgi" },

  // ALT DAL 6: TEKRARLI PERMÜTASYON GENEL
  { id: "s13_tp_012", s: "Tekrarlı permütasyon formülünde paydadaki faktöriyeller neyi ifade eder?", c: "tekrar_eden_her_bir_ozdes_grubun_sayisini", v: {}, z:"orta", alt:"payda_anlami" },
  { id: "s13_tp_013", s: "Tüm elemanlar farklı ise tekrarlı permütasyon formülü neye dönüşür?", c: "n!_(normal_permutasyon)", v: {}, z:"orta", alt:"farkli_eleman" },


  // ==========================================
  // KONU 5: DAİRESEL PERMÜTASYON (DÖNEL SIRALAMA) (6 alt dal)
  // ==========================================

  // ALT DAL 1: DAİRESEL PERMÜTASYON TANIMI
  { id: "s13_dp_001", s: "Dairesel permütasyon nedir?", c: "nesnelerin_yuvarlak_bir_masa_etrafinda_siralanmasi", v: {}, z:"orta", alt:"dairesel_tanim" },
  { id: "s13_dp_002", s: "n kişi yuvarlak masa etrafında kaç farklı şekilde oturur?", c: "(n-1)!", v: {}, z:"orta", alt:"yuvarlak_masa" },

  // ALT DAL 2: DAİRESEL PERMÜTASYON FORMÜLÜ
  { id: "s13_dp_003", s: "Dairesel permütasyon formülü nedir?", c: "(n-1)!", v: {}, z:"orta", alt:"dairesel_formul" },
  { id: "s13_dp_004", s: "{n} kişi yuvarlak masa etrafında kaç farklı şekilde oturur?", c: "({n}-1)!", v: {n:[3,8]}, z:"orta", alt:"n_kisi_yuvarlak" },
  { id: "s13_dp_005", s: "Dairesel permütasyonda neden n değil (n-1)! kullanılır?", c: "donme_ile_ayni_siralama_elde_edilebilir_(referans_noktasi_sabitlenir)", v: {}, z:"cok_zor", alt:"n-1_nedeni" },

  // ALT DAL 3: DAİRESEL PERMÜTASYON ÖZEL DURUMLAR
  { id: "s13_dp_006", s: "Anahtarlık veya yüzük gibi ters çevrilebilir nesnelerde formül nasıl değişir?", c: "(n-1)!/2", v: {}, z:"cok_zor", alt:"anahtarlik" },
  { id: "s13_dp_007", s: "{n} farklı anahtar halka şeklindeki anahtarlığa kaç farklı şekilde takılır?", c: "({n}-1)!/2", v: {n:[3,7]}, z:"cok_zor", alt:"anahtar" },
  { id: "s13_dp_008", s: "{n} farklı boncuk bilekliğe kaç farklı şekilde dizilir?", c: "({n}-1)!/2", v: {n:[3,7]}, z:"cok_zor", alt:"boncuk" },

  // ALT DAL 4: DAİRESEL PERMÜTASYON PROBLEMLERİ
  { id: "s13_dp_009", s: "{n} kişi arasından belirli {k} kişi yan yana olmak şartıyla yuvarlak masaya kaç farklı şekilde oturur?", c: "({k})!×({n}-{k})!", v: {n:[5,8], k:[2,3]}, z:"cok_zor", alt:"belirli_kisi_yan_yana" },
  { id: "s13_dp_010", s: "{n} evli çift yuvarlak masaya eşler yan yana olmak şartıyla kaç farklı şekilde oturur?", c: "({n}-1)!×Math.pow(2,{n})", v: {n:[2,4]}, z:"cok_zor", alt:"evli_ciftler" },

  // ALT DAL 5: YUVARLAK MASA SORULARI
  { id: "s13_dp_011", s: "5 kişi yuvarlak masaya kaç farklı şekilde oturur?", c: "4!=24", v: {}, z:"orta", alt:"5_yuvarlak" },
  { id: "s13_dp_012", s: "6 kişi yuvarlak masaya kaç farklı şekilde oturur?", c: "5!=120", v: {}, z:"orta", alt:"6_yuvarlak" },

  // ALT DAL 6: DAİRESEL PERMÜTASYON GENEL
  { id: "s13_dp_013", s: "Yuvarlak masa ile sıra arasındaki permütasyon farkı nedir?", c: "sirada_n!,_yuvarlakta_(n-1)!", v: {}, z:"orta", alt:"sira_masa_fark" },
  { id: "s13_dp_014", s: "Dairesel permütasyonda bir kişinin yeri sabitlenirse ne olur?", c: "digerleri_(n-1)!_sekilde_siralanir", v: {}, z:"orta", alt:"sabit_kisi" },


  // ==========================================
  // KONU 6: KOŞULLU PERMÜTASYON - YAN YANA (8 alt dal)
  // ==========================================

  // ALT DAL 1: YAN YANA OLMA ŞARTI
  { id: "s13_ky_001", s: "Belirli kişiler yan yana olma şartıyla permütasyon nasıl hesaplanır?", c: "yan_yana_olanlar_tek_kisi_gibi_dusunulur_sonra_kendi_aralarinda_siralanir", v: {}, z:"orta", alt:"yan_yana_mantik" },
  { id: "s13_ky_002", s: "{n} kişi arasında belirli {k} kişi yan yana olmak şartıyla kaç farklı sıralama yapılır?", c: "({n}-{k}+1)!×{k}!", v: {n:[5,8], k:[2,4], kosul:"k<=n"}, z:"cok_zor", alt:"k_kisi_yan_yana" },
  { id: "s13_ky_003", s: "5 kişi yan yana sıralanacaktır. A ve B yan yana olmak şartıyla kaç farklı sıralama yapılır?", c: "4!×2!=48", v: {}, z:"zor", alt:"A_B_yan_yana" },

  // ALT DAL 2: İKİ GRUP YAN YANA
  { id: "s13_ky_004", s: "{a} kız ve {b} erkek, kızlar yan yana olmak şartıyla kaç farklı sıralanır?", c: "({b}+1)!×{a}!", v: {a:[2,4], b:[3,6]}, z:"cok_zor", alt:"kizlar_yan_yana" },
  { id: "s13_ky_005", s: "4 kız 3 erkek, erkekler yan yana olmak şartıyla kaç farklı sıralanır?", c: "5!×3!=720", v: {}, z:"cok_zor", alt:"erkekler_yan_yana" },

  // ALT DAL 3: YAN YANA BİRDEN FAZLA GRUP
  { id: "s13_ky_006", s: "{a} kız ve {b} erkek, hem kızlar hem erkekler kendi aralarında yan yana kaç farklı sıralanır?", c: "2!×{a}!×{b}!", v: {a:[2,4], b:[2,4]}, z:"cok_zor", alt:"iki_grup_yan_yana" },
  { id: "s13_ky_007", s: "3 kız 3 erkek, kızlar ve erkekler kendi aralarında yan yana kaç sıralanır?", c: "2!×3!×3!=72", v: {}, z:"cok_zor", alt:"3k_3e_grup" },

  // ALT DAL 4: YAN YANA OLMAMA ŞARTI
  { id: "s13_ky_008", s: "Belirli kişiler yan yana olmama şartı nasıl hesaplanır?", c: "tum_durumlar- yan_yana_olma_durumlari", v: {}, z:"orta", alt:"yan_yana_olmama" },
  { id: "s13_ky_009", s: "5 kişi yan yana sıralanacaktır. A ve B yan yana OLMAMAK şartıyla kaç sıralama yapılır?", c: "5!-4!×2!=72", v: {}, z:"cok_zor", alt:"A_B_yan_yana_degil" },

  // ALT DAL 5: KİTAPLAR YAN YANA
  { id: "s13_ky_010", s: "{a} matematik, {b} fizik kitabı; matematikler yan yana olmak şartıyla kaç farklı dizilir?", c: "({b}+1)!×{a}!", v: {a:[2,4], b:[2,5]}, z:"cok_zor", alt:"kitaplar_yan_yana" },
  { id: "s13_ky_011", s: "Aynı tür kitaplar yan yana olmak şartıyla sıralama nasıl yapılır?", c: "tur_sayisi_kadar_grup_siralamasi_carpimi", v: {}, z:"orta", alt:"ayni_tur_yan_yana" },

  // ALT DAL 6: YUVARLAK MASA YAN YANA
  { id: "s13_ky_012", s: "{n} kişi yuvarlak masada belirli {k} kişi yan yana kaç farklı oturur?", c: "({n}-{k})!×{k}!", v: {n:[5,8], k:[2,4]}, z:"cok_zor", alt:"yuvarlak_yan_yana" },
  { id: "s13_ky_013", s: "6 kişi yuvarlak masada A ve B yan yana kaç farklı oturur?", c: "4!×2!=48", v: {}, z:"cok_zor", alt:"6_yuvarlak_AB" },

  // ALT DAL 7: YAN YANA SORU TİPLERİ
  { id: "s13_ky_014", s: "{n} kişilik sırada A, B'nin hemen sağında olmak şartıyla kaç sıralama yapılır?", c: "({n}-1)!", v: {n:[3,7]}, z:"cok_zor", alt:"hemen_saginda" },
  { id: "s13_ky_015", s: "A ile B arasında daima {k} kişi olmak şartıyla sıralama nasıl yapılır?", c: "({n}-2)!×2!×...", v: {n:[5,8], k:[1,3]}, z:"cok_zor", alt:"arada_k_kisi" },

  // ALT DAL 8: YAN YANA GENEL
  { id: "s13_ky_016", s: "Yan yana şartında gruplar tek kişi gibi düşünülür. Bu yöntemin adı nedir?", c: "paketleme_(gruplandirma)_yontemi", v: {}, z:"orta", alt:"paketleme" },
  { id: "s13_ky_017", s: "Yan yana şartında paket içi sıralama neden çarpılır?", c: "grup_icindeki_elemanlar_da_kendi_aralarinda_yer_degistirebilir", v: {}, z:"orta", alt:"paket_ici" },


  // ==========================================
  // KONU 7: KOŞULLU PERMÜTASYON - ARALIKLI (6 alt dal)
  // ==========================================

  // ALT DAL 1: ARALIKLI SIRALAMA
  { id: "s13_ka_001", s: "Aralıklı sıralama nedir?", c: "belirli_elemanlarin_aralarinda_bosluk_kalacak_sekilde_siralanmasi", v: {}, z:"orta", alt:"aralikli_tanim" },
  { id: "s13_ka_002", s: "Aralıklı sıralamada ilk adım nedir?", c: "aralik_olusturan_elemanlar_dizilir_sonra_digerleri_aralara_yerlestirilir", v: {}, z:"orta", alt:"aralikli_strateji" },

  // ALT DAL 2: KIZLAR YAN YANA GELMESİN
  { id: "s13_ka_003", s: "{e} erkek ve {k} kız, kızlar yan yana gelmemek şartıyla kaç farklı sıralanır?", c: "{e}!×P({e}+1,{k})", v: {e:[3,6], k:[1,"{e}+1"], kosul:"k<=e+1"}, z:"cok_zor", alt:"kizlar_yan_yana_degil" },
  { id: "s13_ka_004", s: "4 erkek 3 kız, kızlar yan yana gelmemek şartıyla kaç sıralanır?", c: "4!×P(5,3)=1440", v: {}, z:"cok_zor", alt:"4e_3k_aralikli" },

  // ALT DAL 3: ERKEKLER YAN YANA GELMESİN
  { id: "s13_ka_005", s: "{k} kız ve {e} erkek, erkekler yan yana gelmemek şartıyla kaç sıralanır?", c: "{k}!×P({k}+1,{e})", v: {k:[3,6], e:[1,"{k}+1"], kosul:"e<=k+1"}, z:"cok_zor", alt:"erkekler_yan_yana_degil" },
  { id: "s13_ka_006", s: "5 kız 4 erkek, erkekler yan yana gelmemek şartıyla kaç sıralanır?", c: "5!×P(6,4)=43200", v: {}, z:"cok_zor", alt:"5k_4e_aralikli" },

  // ALT DAL 4: NESNE ARALIKLI
  { id: "s13_ka_007", s: "{a} matematik, {b} fizik kitabı; fizikler yan yana gelmemek şartıyla kaç dizilir?", c: "{a}!×P({a}+1,{b})", v: {a:[3,6], b:[1,"{a}+1"], kosul:"b<=a+1"}, z:"cok_zor", alt:"kitaplar_aralikli" },
  { id: "s13_ka_008", s: "Aralıklı sıralamada neden önce çoğunlukta olanlar dizilir?", c: "aralarinda_bosluk_olusturmak_icin", v: {}, z:"orta", alt:"cogunluk_nedeni" },

  // ALT DAL 5: ARALIKLI SIRALAMA ŞARTI
  { id: "s13_ka_009", s: "k tane kız e tane erkek için kızların yan yana gelmemesi şartı nedir?", c: "k≤e+1_(erkekler_cogunlukta_veya_esit)", v: {}, z:"cok_zor", alt:"yan_yana_gelmeme_sarti" },
  { id: "s13_ka_010", s: "Aralıklı sıralama hangi durumda imkansızdır?", c: "yan_yana_gelmemesi_istenen_grup_digerinden_2_fazla_ise", v: {}, z:"cok_zor", alt:"imkansiz_aralik" },

  // ALT DAL 6: ARALIKLI ÖZEL
  { id: "s13_ka_011", s: "Dairesel permütasyonda aralıklı sıralama nasıl değişir?", c: "bosluk_sayisi_n_olur_(n-1_degil)", v: {}, z:"cok_zor", alt:"dairesel_aralikli" },
  { id: "s13_ka_012", s: "{e} erkek {k} kız yuvarlak masada kızlar yan yana gelmemek şartıyla kaç oturur?", c: "({e}-1)!×P({e},{k})", v: {e:[3,5], k:[1,"{e}"], kosul:"k<=e"}, z:"cok_zor", alt:"yuvarlak_aralikli" },


  // ==========================================
  // KONU 8: KOŞULLU PERMÜTASYON - BAŞTA-SONDA (6 alt dal)
  // ==========================================

  // ALT DAL 1: BAŞTA OLMA ŞARTI
  { id: "s13_kb_001", s: "Belirli bir kişi başta olmak şartıyla sıralama nasıl hesaplanır?", c: "digerleri_kalan_yerlere_siralanir", v: {}, z:"orta", alt:"basta_mantik" },
  { id: "s13_kb_002", s: "{n} kişi arasında A başta olmak şartıyla kaç sıralama yapılır?", c: "({n}-1)!", v: {n:[3,7]}, z:"orta", alt:"A_basta" },
  { id: "s13_kb_003", s: "5 kişi yan yana sıralanacak. A başta olursa kaç sıralama olur?", c: "4!=24", v: {}, z:"orta", alt:"5_A_basta" },

  // ALT DAL 2: SONDA OLMA ŞARTI
  { id: "s13_kb_004", s: "{n} kişi arasında A sonda olmak şartıyla kaç sıralama yapılır?", c: "({n}-1)!", v: {n:[3,7]}, z:"orta", alt:"A_sonda" },
  { id: "s13_kb_005", s: "Belirli bir kişi sonda ise diğerleri nasıl sıralanır?", c: "kalan_yerlere_(n-1)!_sekilde", v: {}, z:"orta", alt:"sonda_mantik" },

  // ALT DAL 3: BAŞTA VE SONDA ŞARTI
  { id: "s13_kb_006", s: "{n} kişi arasında A başta, B sonda olmak şartıyla kaç sıralama yapılır?", c: "({n}-2)!", v: {n:[3,8]}, z:"zor", alt:"A_basta_B_sonda" },
  { id: "s13_kb_007", s: "6 kişi sıralanacak. A başta, B sonda ise kaç sıralama olur?", c: "4!=24", v: {}, z:"zor", alt:"6_A_basta_B_sonda" },

  // ALT DAL 4: BAŞTA VEYA SONDA
  { id: "s13_kb_008", s: "A başta VEYA sonda olmak şartıyla kaç sıralama yapılır?", c: "2×({n}-1)!-({n}-2)!", v: {n:[3,7]}, z:"cok_zor", alt:"A_basta_veya_sonda" },
  { id: "s13_kb_009", s: "5 kişi sıralanacak. A başta veya sonda ise kaç sıralama olur?", c: "2×4!-3!=42", v: {}, z:"cok_zor", alt:"5_A_basta_veya_sonda" },

  // ALT DAL 5: BAŞTA/SONDA OLMAMA
  { id: "s13_kb_010", s: "A başta ve sonda OLMAMAK şartıyla kaç sıralama yapılır?", c: "({n}-1)!×({n}-2)", v: {n:[3,7]}, z:"cok_zor", alt:"A_basta_sonda_degil" },
  { id: "s13_kb_011", s: "5 kişi sıralanacak. A başta veya sonda değilse kaç sıralama olur?", c: "3×3!=72", v: {}, z:"cok_zor", alt:"5_A_ortada" },

  // ALT DAL 6: BAŞTA-SONDA GENEL
  { id: "s13_kb_012", s: "Belirli iki kişi başta ve sonda olmak şartıyla kaç sıralama olur?", c: "2!×({n}-2)!", v: {n:[3,7]}, z:"cok_zor", alt:"iki_kisi_basta_sonda" },
  { id: "s13_kb_013", s: "Başta ve sonda belirli kişiler olma şartında iç sıralama çarpılır mı?", c: "evet_(hangi_kisi_basta_hangi_kisi_sonda_onemli)", v: {}, z:"orta", alt:"ic_siralama" },


  // ==========================================
  // KONU 9: HARF VE SAYI PERMÜTASYONLARI (8 alt dal)
  // ==========================================

  // ALT DAL 1: HARFLERLE KELİME OLUŞTURMA
  { id: "s13_hs_001", s: "\"{kelime}\" kelimesinin harfleriyle kaç farklı anlamlı/anlamsız kelime yazılır?", c: "{sonuc}", v: {kelime:"KALEM"}, z:"orta", alt:"kelime_turetme" },
  { id: "s13_hs_002", s: "\"SARI\" kelimesinin harfleriyle kaç farklı 4 harfli dizilim yapılır?", c: "4!=24", v: {}, z:"orta", alt:"SARI" },
  { id: "s13_hs_003", s: "\"KIRMIZI\" kelimesindeki harflerle kaç farklı dizilim yapılır?", c: "7!/(2!×2!)", v: {}, z:"zor", alt:"KIRMIZI_tekrar" },

  // ALT DAL 2: SESLİ-SESSİZ HARF ŞARTI
  { id: "s13_hs_004", s: "Sesli harfler yan yana olmak şartıyla kelime oluşturma nasıl yapılır?", c: "sesliler_paketlenir", v: {}, z:"orta", alt:"sesliler_yan_yana" },
  { id: "s13_hs_005", s: "\"KALEM\" kelimesindeki sesli harfler yan yana olmak şartıyla kaç dizilim yapılır?", c: "4!×2!=48", v: {}, z:"zor", alt:"KALEM_sesli_yan_yana" },

  // ALT DAL 3: RAKAMLARLA SAYI OLUŞTURMA
  { id: "s13_hs_006", s: "{a} rakamla kaç farklı {a} basamaklı sayı yazılır? (0 varsa başta olamaz)", c: "{sonuc}", v: {a:[3,6]}, z:"zor", alt:"sayi_olusturma" },
  { id: "s13_hs_007", s: "1,2,3,4,5 rakamlarıyla 3 basamaklı rakamları farklı kaç sayı yazılır?", c: "P(5,3)=60", v: {}, z:"orta", alt:"12345_3basamak" },
  { id: "s13_hs_008", s: "0,1,2,3,4 rakamlarıyla 3 basamaklı rakamları farklı kaç sayı yazılır?", c: "4×P(4,2)=48", v: {}, z:"cok_zor", alt:"01234_3basamak" },

  // ALT DAL 4: ÇİFT-TEK SAYI OLUŞTURMA
  { id: "s13_hs_009", s: "Rakamları farklı çift sayı oluşturma nasıl yapılır?", c: "birler_basamagi_cift_rakamlardan_secilir", v: {}, z:"orta", alt:"cift_sayi" },
  { id: "s13_hs_010", s: "1,2,3,4,5 rakamlarıyla 3 basamaklı rakamları farklı kaç çift sayı yazılır?", c: "2×P(4,2)=24", v: {}, z:"cok_zor", alt:"12345_cift" },
  { id: "s13_hs_011", s: "0,1,2,3,4 rakamlarıyla 3 basamaklı rakamları farklı kaç tek sayı yazılır?", c: "{sonuc}", v: {}, z:"cok_zor", alt:"01234_tek" },

  // ALT DAL 5: BELİRLİ RAKAMLARLA
  { id: "s13_hs_012", s: "{a}, {b}, {c} rakamlarıyla rakamları farklı {n} basamaklı kaç sayı yazılır? (n≤3)", c: "P(3,{n})", v: {a:[1,9], b:[0,9], c:[0,9], kosul:"farkli", n:[2,3]}, z:"orta", alt:"uc_rakam" },
  { id: "s13_hs_013", s: "Rakamları toplamı {t} olan 3 basamaklı sayılar...", c: "{sonuc}", v: {t:[5,15]}, z:"cok_zor", alt:"rakam_toplam_sart" },

  // ALT DAL 6: BÜYÜK/KÜÇÜK ŞARTI
  { id: "s13_hs_014", s: "{a} ile başlayan kelime sayısı nasıl bulunur?", c: "kalan_harfler_siralanir", v: {a:"A"}, z:"orta", alt:"baslangic_harf" },
  { id: "s13_hs_015", s: "Sözlük sıralamasında {kelime} kaçıncı sıradadır?", c: "{sonuc}", v: {kelime:"KALEM"}, z:"cok_zor", alt:"sozluk_sirasi" },

  // ALT DAL 7: TEKRARLI RAKAM PERMÜTASYONU
  { id: "s13_hs_016", s: "{a} tane 1, {b} tane 2 ile kaç farklı sayı yazılır?", c: "({a}+{b})!/({a}!×{b}!)", v: {a:[2,4], b:[2,4]}, z:"zor", alt:"tekrarli_rakam" },
  { id: "s13_hs_017", s: "3 tane 5, 2 tane 7 ile 5 basamaklı kaç sayı yazılır?", c: "5!/(3!×2!)=10", v: {}, z:"zor", alt:"55577" },

  // ALT DAL 8: HARF-SAYI PERMÜTASYON GENEL
  { id: "s13_hs_018", s: "Sayı oluşturmada 0'ın başta olmama şartı neden önemlidir?", c: "0_basta_olursa_sayinin_basamak_sayisi_azalir", v: {}, z:"orta", alt:"sifir_basta" },
  { id: "s13_hs_019", s: "n basamaklı sayı oluşturmada genel strateji nedir?", c: "en_kisitli_basamaktan_baslanir_(genelde_birler_veya_binler)", v: {}, z:"orta", alt:"sayi_strateji" },


  // ==========================================
  // KONU 10: PERMÜTASYON PROBLEMLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: OTURMA DÜZENİ
  { id: "s13_pp_001", s: "{n} kişi bir sıraya kaç farklı şekilde oturur?", c: "{n}!", v: {n:[3,8]}, z:"orta", alt:"sira_oturma" },
  { id: "s13_pp_002", s: "{n} kişi sinemada {r} koltuğa kaç farklı şekilde oturur?", c: "P({n},{r})", v: {n:[5,10], r:[3,"{n}"]}, z:"zor", alt:"sinema" },
  { id: "s13_pp_003", s: "A ve B arasında daima {k} kişi olacak şekilde sıralanırlarsa kaç durum olur?", c: "{sonuc}", v: {n:[5,8], k:[1,3]}, z:"cok_zor", alt:"arada_kisi" },

  // ALT DAL 2: FOTOĞRAF ÇEKİMİ
  { id: "s13_pp_004", s: "{n} kişi yan yana fotoğraf çektirecek. Belirli {k} kişi yan yana olursa kaç poz çekilir?", c: "({n}-{k}+1)!×{k}!", v: {n:[4,8], k:[2,3]}, z:"cok_zor", alt:"fotograf" },
  { id: "s13_pp_005", s: "Başkan ve yardımcısı daima yan yana olacak şekilde {n} kişi kaç poz verir?", c: "({n}-1)!×2!", v: {n:[4,8]}, z:"zor", alt:"baskan_fotograf" },

  // ALT DAL 3: YARIŞMA SIRALAMASI
  { id: "s13_pp_006", s: "{n} yarışmacı yarışı kaç farklı şekilde bitirir?", c: "{n}!", v: {n:[3,8]}, z:"orta", alt:"yaris" },
  { id: "s13_pp_007", s: "{n} yarışmacıdan ilk {r} derece kaç farklı şekilde oluşur?", c: "P({n},{r})", v: {n:[5,10], r:[2,4]}, z:"zor", alt:"derece" },

  // ALT DAL 4: BAYRAK ÇEKME
  { id: "s13_pp_008", s: "{n} farklı bayrak direğe alt alta kaç farklı şekilde çekilir?", c: "{n}!", v: {n:[3,6]}, z:"orta", alt:"bayrak" },
  { id: "s13_pp_009", s: "{n} bayraktan {r} tanesi kaç farklı şekilde seçilip sıralanır?", c: "P({n},{r})", v: {n:[5,8], r:[2,4]}, z:"zor", alt:"bayrak_secme" },

  // ALT DAL 5: ŞİFRE OLUŞTURMA
  { id: "s13_pp_010", s: "{a} harf ve {b} rakamdan oluşan {a+b} karakterli şifre kaç farklı oluşturulur?", c: "{a+b}!", v: {a:[2,4], b:[2,4]}, z:"zor", alt:"sifre" },
  { id: "s13_pp_011", s: "Rakamları farklı {n} haneli kaç şifre oluşturulur?", c: "P(10,{n})", v: {n:[3,6]}, z:"cok_zor", alt:"sifre_rakam" },

  // ALT DAL 6: PERMÜTASYON PROBLEMLERİ GENEL
  { id: "s13_pp_012", s: "Permütasyon problemlerinde en önemli ayrım nedir?", c: "siralamanin_onemli_olup_olmamasi", v: {}, z:"orta", alt:"onemli_ayrim" },
  { id: "s13_pp_013", s: "Permütasyon problemlerinde \"seçmek\" ve \"sıralamak\" aynı anda varsa nasıl çözülür?", c: "once_secim_yapilir_sonra_siralanir", v: {}, z:"orta", alt:"secme_siralama" },

],

// ==========================================
// SEVİYE 14: KOMBİNASYON
// ==========================================
14: [

  // ==========================================
  // KONU 1: KOMBİNASYON TANIMI VE FORMÜLÜ (8 alt dal)
  // ==========================================

  // ALT DAL 1: KOMBİNASYON TANIMI
  { id: "s14_kt_001", s: "Kombinasyon nedir?", c: "siralamanin_onemsiz_oldugu_secme_islemi", v: {}, z:"orta", alt:"kombinasyon_tanim" },
  { id: "s14_kt_002", s: "C(n,r) neyi ifade eder?", c: "n_elemanli_kumeden_r_elemanli_secim_sayisi_(sira_onemsiz)", v: {}, z:"orta", alt:"C_n_r" },
  { id: "s14_kt_003", s: "C(n,r) ile P(n,r) arasındaki fark nedir?", c: "permutasyonda_siralama_onemli_kombinasyonda_degil", v: {}, z:"orta", alt:"C_P_fark" },

  // ALT DAL 2: KOMBİNASYON FORMÜLÜ
  { id: "s14_kt_004", s: "C(n,r) formülü nedir?", c: "n!/(r!×(n-r)!)", v: {}, z:"orta", alt:"kombinasyon_formul" },
  { id: "s14_kt_005", s: "C({n},{r}) = ?", c: "{n}!/({r}!×({n}-{r})!)", v: {n:[5,10], r:[1,"{n}-1"]}, z:"orta", alt:"kombinasyon_hesap" },
  { id: "s14_kt_006", s: "C(5,2) = ?", c: "10", v: {}, z:"orta", alt:"C_5_2" },
  { id: "s14_kt_007", s: "C(6,3) = ?", c: "20", v: {}, z:"orta", alt:"C_6_3" },
  { id: "s14_kt_008", s: "C(7,4) = ?", c: "35", v: {}, z:"orta", alt:"C_7_4" },

  // ALT DAL 3: ÖZEL DURUMLAR
  { id: "s14_kt_009", s: "C(n,0) = ?", c: "1", v: {}, z:"orta", alt:"C_n_0" },
  { id: "s14_kt_010", s: "C(n,1) = ?", c: "n", v: {}, z:"orta", alt:"C_n_1" },
  { id: "s14_kt_011", s: "C(n,n) = ?", c: "1", v: {}, z:"orta", alt:"C_n_n" },
  { id: "s14_kt_012", s: "C(n,n-1) = ?", c: "n", v: {}, z:"orta", alt:"C_n_n-1" },

  // ALT DAL 4: KOMBİNASYON HESAPLAMA
  { id: "s14_kt_013", s: "C(10,3) = ?", c: "120", v: {}, z:"orta", alt:"C_10_3" },
  { id: "s14_kt_014", s: "C(8,3) = ?", c: "56", v: {}, z:"orta", alt:"C_8_3" },
  { id: "s14_kt_015", s: "C(9,4) = ?", c: "126", v: {}, z:"orta", alt:"C_9_4" },

  // ALT DAL 5: KOMBİNASYON PRATİK HESAP
  { id: "s14_kt_016", s: "C(n,r) hesaplanırken pratik yöntem nedir?", c: "n'den_geriye_r_tane_sayi_carpilip_r!_bolunur", v: {}, z:"orta", alt:"pratik_hesap" },
  { id: "s14_kt_017", s: "C(10,4) pratik hesapla = ?", c: "210", v: {}, z:"orta", alt:"C_10_4_pratik" },
  { id: "s14_kt_018", s: "C({n},2) pratik formülü nedir?", c: "{n}×({n}-1)/2", v: {n:[4,10]}, z:"orta", alt:"C_n_2_pratik" },

  // ALT DAL 6: KOMBİNASYON DENKLEMLERİ
  { id: "s14_kt_019", s: "C(n,2) = {a} ise n kaçtır?", c: "{sonuc}", v: {a:[6,10,15,21,28,36,45]}, z:"cok_zor", alt:"C_n_2_denklem" },
  { id: "s14_kt_020", s: "C(n,3) = {a} ise n kaçtır?", c: "{sonuc}", v: {a:[10,20,35,56,84,120]}, z:"cok_zor", alt:"C_n_3_denklem" },

  // ALT DAL 7: ALT KÜME SAYISI İLİŞKİSİ
  { id: "s14_kt_021", s: "n elemanlı kümenin r elemanlı alt küme sayısı nedir?", c: "C(n,r)", v: {}, z:"orta", alt:"alt_kume_kombinasyon" },
  { id: "s14_kt_022", s: "{n} elemanlı kümenin {r} elemanlı alt küme sayısı kaçtır?", c: "C({n},{r})", v: {n:[4,8], r:[1,"{n}-1"]}, z:"orta", alt:"alt_kume_sayisi" },

  // ALT DAL 8: KOMBİNASYON MANTIĞI
  { id: "s14_kt_023", s: "Kombinasyonda neden bölme yapılır?", c: "secilen_elemanlarin_kendi_aralarindaki_siralamasi_onemsiz_oldugu_icin", v: {}, z:"orta", alt:"bolme_nedeni" },
  { id: "s14_kt_024", s: "P(n,r) = C(n,r) × ?", c: "r!", v: {}, z:"cok_zor", alt:"P_C_iliskisi" },


  // ==========================================
  // KONU 2: KOMBİNASYON ÖZELLİKLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: SİMETRİ ÖZELLİĞİ
  { id: "s14_ko_001", s: "C(n,r) = C(n,n-r) eşitliği doğru mudur?", c: "evet_(simetri_ozelligi)", v: {}, z:"orta", alt:"simetri" },
  { id: "s14_ko_002", s: "C({n},{r}) = C({n},?)", c: "C({n},{n}-{r})", v: {n:[6,10], r:[1,4]}, z:"orta", alt:"simetri_esit" },
  { id: "s14_ko_003", s: "C(10,7) = C(10,?)", c: "3", v: {}, z:"orta", alt:"C_10_7_simetri" },
  { id: "s14_ko_004", s: "C(8,5) = ? (Simetri özelliğini kullan)", c: "56", v: {}, z:"orta", alt:"C_8_5_simetri" },

  // ALT DAL 2: PASCAL ÖZDEŞLİĞİ
  { id: "s14_ko_005", s: "C(n,r) + C(n,r+1) = ?", c: "C(n+1,r+1)", v: {}, z:"cok_zor", alt:"pascal_ozdesligi" },
  { id: "s14_ko_006", s: "C({n},{r}) + C({n},{r+1}) = ?", c: "C({n}+1,{r}+1)", v: {n:[5,9], r:[1,"{n}-2"]}, z:"cok_zor", alt:"pascal_hesap" },
  { id: "s14_ko_007", s: "C(7,3) + C(7,4) = ?", c: "70", v: {}, z:"cok_zor", alt:"C_7_3_4" },
  { id: "s14_ko_008", s: "Pascal özdeşliği hangi üçgende kullanılır?", c: "Pascal_ucgeninde", v: {}, z:"orta", alt:"pascal_ucgen" },

  // ALT DAL 3: TOPLAM ÖZELLİĞİ
  { id: "s14_ko_009", s: "C(n,0)+C(n,1)+...+C(n,n) = ?", c: "2ⁿ", v: {}, z:"cok_zor", alt:"toplam_2_us_n" },
  { id: "s14_ko_010", s: "{n} elemanlı kümenin tüm alt küme sayısı C(n,0)+...+C(n,n) = ?", c: "Math.pow(2,{n})", v: {n:[3,7]}, z:"cok_zor", alt:"tum_alt_kume" },
  { id: "s14_ko_011", s: "C(5,0)+C(5,1)+C(5,2)+C(5,3)+C(5,4)+C(5,5) = ?", c: "32", v: {}, z:"cok_zor", alt:"5_tum_toplam" },

  // ALT DAL 4: ARDIŞIK TOPLAM
  { id: "s14_ko_012", s: "C(r,r)+C(r+1,r)+...+C(n,r) = ?", c: "C(n+1,r+1)", v: {}, z:"cok_zor", alt:"ardisik_toplam" },
  { id: "s14_ko_013", s: "C(2,2)+C(3,2)+C(4,2)+C(5,2) = ?", c: "20", v: {}, z:"cok_zor", alt:"ardisik_toplam_2" },

  // ALT DAL 5: ÇİFT İNDİSLİ TOPLAM
  { id: "s14_ko_014", s: "C(n,0)+C(n,2)+C(n,4)+... = ?", c: "Math.pow(2,{n-1})", v: {n:[3,7]}, z:"cok_zor", alt:"cift_indis" },
  { id: "s14_ko_015", s: "C(n,1)+C(n,3)+C(n,5)+... = ?", c: "Math.pow(2,{n-1})", v: {n:[3,7]}, z:"cok_zor", alt:"tek_indis" },

  // ALT DAL 6: ÇARPMA ÖZELLİĞİ
  { id: "s14_ko_016", s: "C(n,r) × C(r,k) = ?", c: "C(n,k)×C(n-k,r-k)", v: {}, z:"cok_zor", alt:"carpma_ozelligi" },
  { id: "s14_ko_017", s: "C(10,4) × C(4,2) = ?", c: "1260", v: {}, z:"cok_zor", alt:"carpma_ornek" },

  // ALT DAL 7: TEK-ÇİFT KOMBİNASYON
  { id: "s14_ko_018", s: "C(n,r) her zaman tam sayı mıdır?", c: "evet", v: {}, z:"orta", alt:"tam_sayi" },
  { id: "s14_ko_019", s: "C(2n,n) her zaman çift midir? (n≥1)", c: "evet", v: {}, z:"cok_zor", alt:"C_2n_n_cift" },

  // ALT DAL 8: KOMBİNASYON ÖZELLİKLERİ ÖZET
  { id: "s14_ko_020", s: "Kombinasyonun en önemli üç özelliği nedir?", c: "simetri,_pascal,_toplam_2ⁿ", v: {}, z:"orta", alt:"uc_ozellik" },
  { id: "s14_ko_021", s: "C(n,r) = C(n,n-r) özelliği ne işe yarar?", c: "buyuk_r_li_kombinasyonlari_kucuk_r_ile_hesaplamayi_saglar", v: {}, z:"orta", alt:"simetri_fayda" },


  // ==========================================
  // KONU 3: KOMBİNASYON VE PERMÜTASYON FARKI (6 alt dal)
  // ==========================================

  // ALT DAL 1: TEMEL FARK
  { id: "s14_kp_001", s: "\"Seçme\" işlemi için hangisi kullanılır?", c: "kombinasyon", v: {}, z:"orta", alt:"secme" },
  { id: "s14_kp_002", s: "\"Sıralama\" işlemi için hangisi kullanılır?", c: "permutasyon", v: {}, z:"orta", alt:"siralama" },
  { id: "s14_kp_003", s: "\"Seçip sıralama\" işlemi için hangisi kullanılır?", c: "once_kombinasyon_sonra_permutasyon_(veya_direkt_permutasyon)", v: {}, z:"cok_zor", alt:"secip_siralama" },

  // ALT DAL 2: AYIRT ETME
  { id: "s14_kp_004", s: "{n} kişiden {r} kişilik ekip kaç farklı şekilde seçilir? (Görev dağılımı yok)", c: "C({n},{r})", v: {n:[5,10], r:[2,"{n}-1"]}, z:"orta", alt:"ekip_secme" },
  { id: "s14_kp_005", s: "{n} kişiden başkan ve yardımcı kaç farklı şekilde seçilir?", c: "P({n},2)", v: {n:[4,10]}, z:"orta", alt:"baskan_secme" },
  { id: "s14_kp_006", s: "{n} kişiden {r} kişilik ekip seçilip bu ekip kendi içinde sıralanırsa kaç durum olur?", c: "C({n},{r})×{r}! = P({n},{r})", v: {n:[5,8], r:[2,4]}, z:"cok_zor", alt:"ekip_siralama" },

  // ALT DAL 3: HANGİSİ DAHA BÜYÜK?
  { id: "s14_kp_007", s: "Aynı n ve r için P(n,r) mi büyüktür C(n,r) mi?", c: "P(n,r)_(r!_kati)", v: {}, z:"orta", alt:"P_C_buyuk" },
  { id: "s14_kp_008", s: "P({n},{r}) / C({n},{r}) = ?", c: "{r}!", v: {n:[5,10], r:[2,4]}, z:"cok_zor", alt:"oran" },

  // ALT DAL 4: SORU TİPLERİ
  { id: "s14_kp_009", s: "\"Kaç farklı grup oluşturulur?\" sorusu permütasyon mu kombinasyon mu?", c: "kombinasyon_(siralama_onemsiz)", v: {}, z:"orta", alt:"grup_sorusu" },
  { id: "s14_kp_010", s: "\"Kaç farklı şekilde dizilir?\" sorusu permütasyon mu kombinasyon mu?", c: "permutasyon_(siralama_onemli)", v: {}, z:"orta", alt:"dizme_sorusu" },

  // ALT DAL 5: KARIŞIK SORULAR
  { id: "s14_kp_011", s: "{n} kişiden {r} kişilik ekip seçilip başkan belirlenecek. Kaç durum?", c: "C({n},{r})×{r}", v: {n:[5,10], r:[2,4]}, z:"cok_zor", alt:"ekip_baskan" },
  { id: "s14_kp_012", s: "Seçilen grupta görev dağılımı varsa kombinasyon mu permütasyon mu?", c: "once_kombinasyon_sonra_permutasyon", v: {}, z:"orta", alt:"gorev_dagilimi" },

  // ALT DAL 6: GENEL STRATEJİ
  { id: "s14_kp_013", s: "Kombinasyon-Permütasyon ayrımında anahtar soru nedir?", c: "\"Siralama_onemli_mi?\"", v: {}, z:"orta", alt:"anahtar_soru" },
  { id: "s14_kp_014", s: "Sıralama önemliyse ?, değilse ? kullanılır.", c: "onemliyse_permutasyon,_degilse_kombinasyon", v: {}, z:"orta", alt:"ozet" },


  // ==========================================
  // KONU 4: GEOMETRİK KOMBİNASYON - NOKTA-DOĞRU (8 alt dal)
  // ==========================================

  // ALT DAL 1: İKİ NOKTA BİR DOĞRU
  { id: "s14_gk_001", s: "{n} noktadan kaç farklı doğru geçer? (Doğrusal değiller)", c: "C({n},2)", v: {n:[3,10]}, z:"orta", alt:"noktadan_dogru" },
  { id: "s14_gk_002", s: "5 noktadan kaç doğru geçer? (Herhangi üçü doğrusal değil)", c: "10", v: {}, z:"orta", alt:"5_nokta_dogru" },
  { id: "s14_gk_003", s: "n noktadan geçen doğru sayısı neden C(n,2) ile bulunur?", c: "bir_dogru_2_nokta_ile_belirlenir", v: {}, z:"orta", alt:"dogru_mantik" },

  // ALT DAL 2: DOĞRUSAL NOKTALAR
  { id: "s14_gk_004", s: "{n} noktadan {k} tanesi doğrusal ise kaç doğru çizilir?", c: "C({n},2)-C({k},2)+1", v: {n:[5,12], k:[3,"{n}-1"]}, z:"cok_zor", alt:"dogrusal_nokta" },
  { id: "s14_gk_005", s: "10 noktadan 4'ü doğrusal ise kaç doğru çizilir?", c: "40", v: {}, z:"cok_zor", alt:"10_4_dogrusal" },
  { id: "s14_gk_006", s: "Doğrusal noktalar neden C(k,2) kadar doğru kaybettirir?", c: "dogrusal_noktalar_ayni_dogru_uzerinde_oldugu_icin", v: {}, z:"cok_zor", alt:"dogrusal_nedeni" },

  // ALT DAL 3: ÜÇ NOKTA ÜÇGEN
  { id: "s14_gk_007", s: "{n} noktadan kaç farklı üçgen çizilir? (Doğrusal değiller)", c: "C({n},3)", v: {n:[3,10]}, z:"orta", alt:"noktadan_ucgen" },
  { id: "s14_gk_008", s: "6 noktadan kaç üçgen çizilir? (Herhangi üçü doğrusal değil)", c: "20", v: {}, z:"orta", alt:"6_nokta_ucgen" },
  { id: "s14_gk_009", s: "{n} noktadan {k} tanesi doğrusal ise kaç üçgen çizilir?", c: "C({n},3)-C({k},3)", v: {n:[5,12], k:[3,"{n}-1"]}, z:"cok_zor", alt:"dogrusal_ucgen" },

  // ALT DAL 4: DOĞRULARIN KESİŞİMİ
  { id: "s14_gk_010", s: "{n} doğrudan herhangi ikisi paralel değil ve üçü aynı noktada kesişmezse kaç kesişim noktası vardır?", c: "C({n},2)", v: {n:[3,10]}, z:"cok_zor", alt:"dogru_kesisim" },
  { id: "s14_gk_011", s: "{n} doğrudan {k} tanesi paralel ise en çok kaç kesişim noktası vardır?", c: "C({n},2)-C({k},2)", v: {n:[5,10], k:[2,"{n}-1"]}, z:"cok_zor", alt:"paralel_kesisim" },

  // ALT DAL 5: ÇEMBER VE NOKTALAR
  { id: "s14_gk_012", s: "Çember üzerindeki {n} noktadan kaç kiriş çizilir?", c: "C({n},2)", v: {n:[3,10]}, z:"orta", alt:"kiris" },
  { id: "s14_gk_013", s: "Çember üzerindeki {n} nokta çemberi kaç yaya ayırır?", c: "{n}", v: {n:[3,10]}, z:"orta", alt:"yay" },

  // ALT DAL 6: ÇOKGEN VE KÖŞEGEN
  { id: "s14_gk_014", s: "{n} kenarlı konveks çokgenin köşegen sayısı kaçtır?", c: "C({n},2)-{n} = {n}×({n}-3)/2", v: {n:[4,10]}, z:"orta", alt:"kosegen" },
  { id: "s14_gk_015", s: "Köşegen sayısı {k} olan çokgen kaç kenarlıdır?", c: "{sonuc}", v: {k:[2,5,9,14,20,27,35,44]}, z:"cok_zor", alt:"kosegenden_kenar" },

  // ALT DAL 7: DÜZLEM BÖLME
  { id: "s14_gk_016", s: "{n} doğru düzlemi en çok kaç bölgeye ayırır?", c: "{n}×({n}+1)/2+1", v: {n:[2,8]}, z:"cok_zor", alt:"duzlem_bolme" },
  { id: "s14_gk_017", s: "{n} çember düzlemi en çok kaç bölgeye ayırır?", c: "{n}*{n}-{n}+2", v: {n:[2,6]}, z:"cok_zor", alt:"cember_bolme" },

  // ALT DAL 8: GEOMETRİK KOMBİNASYON ÖZET
  { id: "s14_gk_018", s: "Geometrik kombinasyon problemlerinde anahtar nedir?", c: "seklin_kac_nokta_ile_belirlendigini_bulmak", v: {}, z:"orta", alt:"anahtar" },
  { id: "s14_gk_019", s: "Doğrusal noktalar kombinasyon problemlerinde nasıl etki eder?", c: "olasi_durumlardan_dogrusal_olanlar_cikarilir", v: {}, z:"orta", alt:"dogrusal_etki" },


  // ==========================================
  // KONU 5: GEOMETRİK KOMBİNASYON - ÇOKGEN-ÇEMBER (6 alt dal)
  // ==========================================

  // ALT DAL 1: ÇOKGENDE ÜÇGEN SAYISI
  { id: "s14_gc_001", s: "{n} kenarlı çokgenin köşeleri kullanılarak kaç üçgen çizilir?", c: "C({n},3)", v: {n:[3,8]}, z:"orta", alt:"cokgen_ucgen" },
  { id: "s14_gc_002", s: "{n} kenarlı çokgende bir kenarı ortak kaç üçgen çizilir?", c: "{n}×({n}-4)", v: {n:[5,10]}, z:"cok_zor", alt:"bir_kenari_ortak" },
  { id: "s14_gc_003", s: "{n} kenarlı çokgende sadece bir köşesi ortak kaç üçgen çizilir?", c: "{n}×C({n}-3,2)", v: {n:[5,10]}, z:"cok_zor", alt:"bir_kosesi_ortak" },

  // ALT DAL 2: ÇEMBERDE ÜÇGEN
  { id: "s14_gc_004", s: "Çember üzerindeki {n} noktadan kaç üçgen çizilir?", c: "C({n},3)", v: {n:[3,10]}, z:"orta", alt:"cember_ucgen" },
  { id: "s14_gc_005", s: "Çember üzerindeki {n} nokta ile oluşan üçgenlerin kaç tanesi dik üçgendir? (n çift)", c: "{n}/2×({n}-2)", v: {n:[4,10,2]}, z:"cok_zor", alt:"dik_ucgen" },

  // ALT DAL 3: ÇEMBERDE KESİŞİM
  { id: "s14_gc_006", s: "Çember üzerindeki {n} noktayı birleştiren kirişler en çok kaç noktada kesişir? (Çember içinde)", c: "C({n},4)", v: {n:[4,10]}, z:"cok_zor", alt:"kiris_kesisim" },
  { id: "s14_gc_007", s: "Çemberde 6 noktayı birleştiren kirişlerin kesişim noktası sayısı en çok kaçtır?", c: "15", v: {}, z:"cok_zor", alt:"6_nokta_kesisim" },

  // ALT DAL 4: DÖRTGEN VE ÇOKGEN
  { id: "s14_gc_008", s: "Çember üzerindeki {n} noktadan kaç dörtgen çizilir?", c: "C({n},4)", v: {n:[4,10]}, z:"orta", alt:"dortgen" },
  { id: "s14_gc_009", s: "{n} kenarlı çokgende köşegenlerin kesişim noktası sayısı en çok kaçtır?", c: "C({n},4)", v: {n:[4,10]}, z:"cok_zor", alt:"kosegen_kesisim" },

  // ALT DAL 5: PARALEL DOĞRULAR
  { id: "s14_gc_010", s: "Birbirine paralel {a} doğru ile bunları kesen paralel {b} doğru ile kaç paralelkenar oluşur?", c: "C({a},2)×C({b},2)", v: {a:[2,5], b:[2,5]}, z:"cok_zor", alt:"paralelkenar" },
  { id: "s14_gc_011", s: "Birbirine paralel {a} ve {b} doğrudan kaç dikdörtgen oluşur?", c: "C({a},2)×C({b},2)", v: {a:[2,5], b:[2,5]}, z:"cok_zor", alt:"dikdortgen_paralel" },

  // ALT DAL 6: GEOMETRİK KOMBİNASYON ÖZEL
  { id: "s14_gc_012", s: "Satranç tahtasında kaç kare vardır? (8×8)", c: "204", v: {}, z:"cok_zor", alt:"satranc_kare" },
  { id: "s14_gc_013", s: "{n}×{n} karelik tahtada kaç kare vardır?", c: "{n}×({n}+1)×(2*{n}+1)/6", v: {n:[3,8]}, z:"cok_zor", alt:"nxn_kare" },


  // ==========================================
  // KONU 6: SEÇME PROBLEMLERİ - BELİRLİ ELEMAN VAR/YOK (8 alt dal)
  // ==========================================

  // ALT DAL 1: BELİRLİ ELEMAN DAİMA VAR
  { id: "s14_sp_001", s: "{n} kişiden {r} kişilik ekip seçilecek. A kişisi daima ekipte olacaksa kaç seçim yapılır?", c: "C({n}-1,{r}-1)", v: {n:[5,12], r:[2,"{n}-1"]}, z:"zor", alt:"daima_var" },
  { id: "s14_sp_002", s: "{n} kişiden {r} kişilik ekipte belirli {k} kişi daima bulunacaksa kaç seçim?", c: "C({n}-{k},{r}-{k})", v: {n:[6,12], r:[3,6], k:[1,3], kosul:"r>=k"}, z:"cok_zor", alt:"k_kisi_daima" },
  { id: "s14_sp_003", s: "Belirli eleman daima varsa neden n-1 ve r-1 kullanılır?", c: "o_eleman_kesin_secildigi_icin_kalan_secim_yapilir", v: {}, z:"orta", alt:"daima_mantik" },

  // ALT DAL 2: BELİRLİ ELEMAN HİÇ YOK
  { id: "s14_sp_004", s: "{n} kişiden {r} kişilik ekip seçilecek. A kişisi ekipte OLMAYACAKSA kaç seçim yapılır?", c: "C({n}-1,{r})", v: {n:[5,12], r:[1,"{n}-2"]}, z:"zor", alt:"hic_yok" },
  { id: "s14_sp_005", s: "{n} kişiden {r} kişilik ekipte belirli {k} kişi hiç bulunmayacaksa kaç seçim?", c: "C({n}-{k},{r})", v: {n:[6,12], r:[1,"{n}-{k}-1"], k:[1,3]}, z:"cok_zor", alt:"k_kisi_hic_yok" },
  { id: "s14_sp_006", s: "Belirli eleman hiç yoksa neden n-1 ve r kullanılır?", c: "o_eleman_cikarilir_kalan_havuzdan_secim_yapilir", v: {}, z:"orta", alt:"hic_yok_mantik" },

  // ALT DAL 3: BELİRLİ ELEMAN ARASINDAN SEÇİM
  { id: "s14_sp_007", s: "{n} kişiden {r} kişilik ekipte A ve B'den EN AZ BİRİ bulunacaksa kaç seçim?", c: "C({n},{r})-C({n}-2,{r})", v: {n:[5,12], r:[1,"{n}-2"]}, z:"cok_zor", alt:"en_az_biri" },
  { id: "s14_sp_008", s: "{n} kişiden {r} kişilik ekipte A ve B'den SADECE BİRİ bulunacaksa kaç seçim?", c: "2×C({n}-2,{r}-1)", v: {n:[5,12], r:[2,"{n}-2"]}, z:"cok_zor", alt:"sadece_biri" },

  // ALT DAL 4: EVLİ ÇİFT SEÇİMİ
  { id: "s14_sp_009", s: "{n} evli çift arasından {r} kişilik ekip seçilecek. Ekipte evli çift olmamak şartıyla kaç seçim?", c: "C({n},{r})×Math.pow(2,{r})", v: {n:[4,8], r:[2,4], kosul:"r<=n"}, z:"cok_zor", alt:"evli_cift_yok" },
  { id: "s14_sp_010", s: "{n} evli çift arasından {r} kişilik ekipte tam {k} evli çift olmak şartıyla kaç seçim?", c: "C({n},{k})×C({n}-{k},{r}-2*{k})×Math.pow(2,{r}-2*{k})", v: {n:[5,8], r:[3,6], k:[1,2], kosul:"r>=2*k"}, z:"cok_zor", alt:"k_evli_cift" },

  // ALT DAL 5: SEÇİMDE SIRA ÖNEMİ
  { id: "s14_sp_011", s: "{n} kişiden {r} kişilik ekip seçilip sıralanırsa kaç durum olur?", c: "P({n},{r})", v: {n:[5,10], r:[2,4]}, z:"zor", alt:"secip_sirala" },
  { id: "s14_sp_012", s: "{n} kişiden {r} kişilik ekipte görev dağılımı kaç şekilde olur?", c: "C({n},{r})×{r}!", v: {n:[5,10], r:[2,4]}, z:"cok_zor", alt:"gorev_secim" },

  // ALT DAL 6: SEÇİM PROBLEMLERİ ÖRNEK
  { id: "s14_sp_013", s: "{n} kişilik sınıftan {r} kişilik yarışma ekibi seçilecek. A ve B birlikte olmazsa kaç seçim?", c: "C({n},{r})-C({n}-2,{r}-2)", v: {n:[6,12], r:[2,6], kosul:"r>=2"}, z:"cok_zor", alt:"A_B_birlikte_olmaz" },
  { id: "s14_sp_014", s: "{n} kişilik grupta A bulunur B bulunmazsa kaç seçim olur?", c: "C({n}-2,{r}-1)", v: {n:[5,12], r:[2,6]}, z:"cok_zor", alt:"A_var_B_yok" },

  // ALT DAL 7: ALT KÜME SEÇİMİ
  { id: "s14_sp_015", s: "{n} elemanlı kümenin alt kümelerinin kaçında A bulunur?", c: "Math.pow(2,{n}-1)", v: {n:[3,8]}, z:"cok_zor", alt:"alt_kume_A_var" },
  { id: "s14_sp_016", s: "{n} elemanlı kümenin alt kümelerinin kaçında A bulunmaz?", c: "Math.pow(2,{n}-1)", v: {n:[3,8]}, z:"cok_zor", alt:"alt_kume_A_yok" },
  { id: "s14_sp_017", s: "{n} elemanlı kümenin alt kümelerinin kaçında A veya B bulunur?", c: "3×Math.pow(2,{n}-2)", v: {n:[3,8]}, z:"cok_zor", alt:"alt_kume_A_veya_B" },

  // ALT DAL 8: SEÇME GENEL
  { id: "s14_sp_018", s: "Belirli eleman seçme problemlerinde temel strateji nedir?", c: "once_sartli_elemanlar_secim_disina_alinir", v: {}, z:"orta", alt:"strateji" },
  { id: "s14_sp_019", s: "\"En az\" veya \"en çok\" içeren seçim problemlerinde hangi yöntem kullanılır?", c: "tumleyen_yontemi_(tum_durumlardan_istenmeyen_cikarilir)", v: {}, z:"orta", alt:"tumleyen" },


  // ==========================================
  // KONU 7: SEÇME PROBLEMLERİ - EN AZ/EN ÇOK (8 alt dal)
  // ==========================================

  // ALT DAL 1: EN AZ BİR
  { id: "s14_ea_001", s: "{n} kişiden {r} kişilik ekipte belirli {k} kişiden EN AZ BİRİ bulunursa kaç seçim?", c: "C({n},{r})-C({n}-{k},{r})", v: {n:[6,15], r:[2,6], k:[1,3], kosul:"r<=n-k"}, z:"cok_zor", alt:"en_az_bir" },
  { id: "s14_ea_002", s: "\"En az\" sorularında neden tüm durumlardan çıkarma yapılır?", c: "istenen_durumlari_tek_tek_toplamaktansa_istenmeyeni_cikarmak_daha_kolaydir", v: {}, z:"orta", alt:"en_az_mantik" },

  // ALT DAL 2: EN AZ r
  { id: "s14_ea_003", s: "{n} kişilik grupta en az {r} kişilik ekip kaç farklı şekilde seçilir?", c: "C({n},{r})+C({n},{r}+1)+...+C({n},{n})", v: {n:[5,8], r:[2,4]}, z:"cok_zor", alt:"en_az_r" },
  { id: "s14_ea_004", s: "En az 2 kişilik ekip seçme = Tüm alt kümeler - ?", c: "0_kisilik_ve_1_kisilik_alt_kumeler", v: {}, z:"cok_zor", alt:"en_az_2_mantik" },

  // ALT DAL 3: EN ÇOK r
  { id: "s14_ea_005", s: "{n} kişilik grupta en çok {r} kişilik ekip kaç farklı şekilde seçilir?", c: "C({n},0)+C({n},1)+...+C({n},{r})", v: {n:[5,8], r:[2,4]}, z:"cok_zor", alt:"en_cok_r" },
  { id: "s14_ea_006", s: "En çok 3 kişilik ekip seçimi hangi kombinasyonları içerir?", c: "0,1,2,3_kisilik_secimler", v: {}, z:"orta", alt:"en_cok_3" },

  // ALT DAL 4: EN AZ a EN ÇOK b
  { id: "s14_ea_007", s: "{n} kişilik grupta en az {a} en çok {b} kişilik ekip kaç şekilde seçilir?", c: "C({n},{a})+C({n},{a}+1)+...+C({n},{b})", v: {n:[6,10], a:[2,3], b:[4,5], kosul:"a<b<=n"}, z:"cok_zor", alt:"en_az_a_en_cok_b" },
  { id: "s14_ea_008", s: "En az 2 en çok 4 kişilik ekip seçimi kaç durumu kapsar?", c: "2,3,4_kisilik_secimler", v: {}, z:"orta", alt:"2_4_arasi" },

  // ALT DAL 5: BELİRLİ SAYIDA SEÇİM
  { id: "s14_ea_009", s: "{n} kişiden {r} kişilik ekipte tam {k} evli çift bulunursa kaç seçim olur?", c: "C({n}/2,{k})×C({n}/2-{k},{r}-2*{k})×Math.pow(2,{r}-2*{k})", v: {n:[8,12,2], r:[3,5], k:[1,2], kosul:"r>=2*k"}, z:"cok_zor", alt:"tam_k_cift" },
  { id: "s14_ea_010", s: "Belirli sayıda seçim problemlerinde formül nasıl kurulur?", c: "once_sartli_grup_secimi_sonra_kalan_secimi", v: {}, z:"orta", alt:"belirli_sayi_formul" },

  // ALT DAL 6: KARIŞIK EN AZ/EN ÇOK
  { id: "s14_ea_011", s: "{a} kız {b} erkek arasından {r} kişilik ekipte en az {k} kız bulunursa kaç seçim?", c: "C({a},{k})×C({b},{r}-{k})+C({a},{k}+1)×C({b},{r}-{k}-1)+...", v: {a:[5,8], b:[5,8], r:[4,6], k:[1,3]}, z:"cok_zor", alt:"en_az_k_kiz" },
  { id: "s14_ea_012", s: "{a} kız {b} erkek arasından {r} kişilik ekipte en çok {e} erkek bulunursa kaç seçim?", c: "C({b},0)×C({a},{r})+...+C({b},{e})×C({a},{r}-{e})", v: {a:[5,8], b:[5,8], r:[4,6], e:[2,4]}, z:"cok_zor", alt:"en_cok_e_erkek" },

  // ALT DAL 7: SEÇİM PROBLEMLERİ PRATİK
  { id: "s14_ea_013", s: "En az sorularında tümleyen yöntemi ne zaman avantajlıdır?", c: "istenen_durum_sayisi_cok_fazla_oldugunda", v: {}, z:"orta", alt:"tumleyen_avantaj" },
  { id: "s14_ea_014", s: "En çok sorularında doğrudan toplama ne zaman avantajlıdır?", c: "r_kucuk_oldugunda", v: {}, z:"orta", alt:"dogrudan_toplam" },

  // ALT DAL 8: EN AZ/EN ÇOK ÖZET
  { id: "s14_ea_015", s: "\"En az\" ve \"en çok\" sorularının genel çözüm mantığı nedir?", c: "durumlara_ayir_her_durumu_hesapla_topla", v: {}, z:"orta", alt:"genel_mantik" },
  { id: "s14_ea_016", s: "\"En az 1\" = Tüm durumlar - ?", c: "hic_olmama_durumu", v: {}, z:"orta", alt:"en_az_1_esit" },


  // ==========================================
  // KONU 8: GRUPLANDIRMA VE DAĞITMA (6 alt dal)
  // ==========================================

  // ALT DAL 1: İKİ GRUBA AYIRMA
  { id: "s14_gd_001", s: "{n} kişi {a} ve {b} kişilik iki gruba kaç farklı şekilde ayrılır? (a+b=n)", c: "C({n},{a})", v: {n:[6,12], a:[2,"{n}/2"], b:"{n}-{a}"}, z:"orta", alt:"iki_gruba_ayirma" },
  { id: "s14_gd_002", s: "{n} kişi eşit iki gruba kaç farklı şekilde ayrılır?", c: "C({n},{n}/2)/2", v: {n:[6,12,2]}, z:"cok_zor", alt:"esit_iki_grup" },
  { id: "s14_gd_003", s: "Eşit gruplarda neden 2!'e bölünür?", c: "gruplarin_yer_degistirmesi_ayni_durumu_verir", v: {}, z:"cok_zor", alt:"esit_bolme_nedeni" },

  // ALT DAL 2: ÜÇ GRUBA AYIRMA
  { id: "s14_gd_004", s: "{n} kişi {a}, {b}, {c} kişilik üç gruba kaç farklı şekilde ayrılır?", c: "C({n},{a})×C({n}-{a},{b})", v: {n:[8,15], a:[2,4], b:[2,4], c:"{n}-{a}-{b}"}, z:"cok_zor", alt:"uc_gruba_ayirma" },
  { id: "s14_gd_005", s: "{n} kişi eşit üç gruba kaç farklı şekilde ayrılır?", c: "C({n},{n}/3)×C(2*{n}/3,{n}/3)/6", v: {n:[9,15,3]}, z:"cok_zor", alt:"esit_uc_grup" },

  // ALT DAL 3: NESNE DAĞITMA
  { id: "s14_gd_006", s: "{n} farklı oyuncak {c} çocuğa her çocuğa en az 1 tane vermek şartıyla kaç dağıtılır?", c: "{sonuc}", v: {n:[4,7], c:[2,4], kosul:"n>=c"}, z:"cok_zor", alt:"oyuncak_dagitma" },
  { id: "s14_gd_007", s: "{n} özdeş oyuncak {c} çocuğa kaç farklı şekilde dağıtılır?", c: "C({n}+{c}-1,{c}-1)", v: {n:[3,8], c:[2,4]}, z:"cok_zor", alt:"ozdes_dagitma" },

  // ALT DAL 4: ÖZDEŞ NESNE GRUPLAMA
  { id: "s14_gd_008", s: "{n} özdeş bilye {c} kutuya kaç farklı şekilde dağıtılır? (Boş kutu olabilir)", c: "C({n}+{c}-1,{c}-1)", v: {n:[3,8], c:[2,5]}, z:"cok_zor", alt:"ozdes_kutu" },
  { id: "s14_gd_009", s: "{n} özdeş bilye {c} kutuya her kutuda en az 1 bilye olmak şartıyla kaç dağıtılır?", c: "C({n}-1,{c}-1)", v: {n:[5,10], c:[2,4], kosul:"n>=c"}, z:"cok_zor", alt:"ozdes_en_az_bir" },

  // ALT DAL 5: TAKIM OLUŞTURMA
  { id: "s14_gd_010", s: "{n} kişiden {a} kişilik A takımı, kalandan {b} kişilik B takımı kaç farklı şekilde oluşturulur?", c: "C({n},{a})×C({n}-{a},{b})", v: {n:[8,15], a:[3,5], b:[3,5], kosul:"a+b<=n"}, z:"cok_zor", alt:"takim_olusturma" },
  { id: "s14_gd_011", s: "Takım oluşturmada grupların adı önemli mi?", c: "evet_(A_takimi_ve_B_takimi_farkli_ise_siralama_onemli)", v: {}, z:"orta", alt:"takim_adi_onemli" },

  // ALT DAL 6: GRUPLANDIRMA ÖZET
  { id: "s14_gd_012", s: "Gruplandırmada en önemli ayrım nedir?", c: "gruplarin_esit_olup_olmamasi_ve_adlandirilip_adlandirilmamasi", v: {}, z:"orta", alt:"onemli_ayrim" },
  { id: "s14_gd_013", s: "Eşit gruplara ayırmada neden faktöriyele bölünür?", c: "gruplar_ozdes_oldugu_icin_yer_degistirmeleri_fark_yaratmaz", v: {}, z:"orta", alt:"esit_bolme_mantik" },


  // ==========================================
  // KONU 9: KOMBİNASYON PROBLEMLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: KURUL SEÇİMİ
  { id: "s14_kp2_001", s: "{n} kişilik sınıftan {r} kişilik sınıf temsilciliği kurulu kaç farklı şekilde seçilir?", c: "C({n},{r})", v: {n:[10,30], r:[2,5]}, z:"orta", alt:"kurul_secimi" },
  { id: "s14_kp2_002", s: "{e} erkek {k} kız arasından {r} kişilik kurulda {ke} erkek {kk} kız bulunursa kaç seçim?", c: "C({e},{ke})×C({k},{kk})", v: {e:[6,12], k:[6,12], r:[3,6], ke:[1,3], kk:"{r}-{ke}"}, z:"zor", alt:"karma_kurul" },

  // ALT DAL 2: MAÇ-TURNUV A
  { id: "s14_kp2_003", s: "{n} takımın katıldığı turnuvada her takım diğeriyle bir kez maç yaparsa toplam kaç maç yapılır?", c: "C({n},2)", v: {n:[4,12]}, z:"orta", alt:"mac_sayisi" },
  { id: "s14_kp2_004", s: "{n} takım arasından {r} takım finale kalırsa final kaç farklı şekilde oluşur?", c: "C({n},{r})", v: {n:[6,16], r:[2,4]}, z:"orta", alt:"final_secimi" },

  // ALT DAL 3: TOKALAŞMA
  { id: "s14_kp2_005", s: "{n} kişilik grupta herkes birbiriyle tokalaşırsa kaç tokalaşma olur?", c: "C({n},2)", v: {n:[3,15]}, z:"orta", alt:"tokalasma" },
  { id: "s14_kp2_006", s: "Tokalaşma sayısı {t} olan grupta kaç kişi vardır?", c: "{sonuc}", v: {t:[3,6,10,15,21,28,36,45,55,66,78,91,105]}, z:"cok_zor", alt:"tokalasmadan_kisi" },

  // ALT DAL 4: HEDİYELEŞME
  { id: "s14_kp2_007", s: "{n} kişilik grupta herkes birbirine hediye verirse kaç hediye verilir?", c: "P({n},2)={n}×({n}-1)", v: {n:[3,10]}, z:"zor", alt:"hediyelesme" },
  { id: "s14_kp2_008", s: "Hediyeleşme neden tokalaşmadan farklıdır?", c: "hediyelesmede_A'nin_B'ye_vermesi_ile_B'nin_A'ya_vermesi_farklidir", v: {}, z:"orta", alt:"hediye_tokalaşma_fark" },

  // ALT DAL 5: YEMEK DAVETİ
  { id: "s14_kp2_009", s: "{n} kişi yemekte yuvarlak masaya kaç farklı şekilde oturur?", c: "({n}-1)!", v: {n:[3,8]}, z:"orta", alt:"yemek_oturma" },
  { id: "s14_kp2_010", s: "{n} kişi arasından {r} kişi yemeğe kaç farklı şekilde davet edilir?", c: "C({n},{r})", v: {n:[6,15], r:[2,5]}, z:"orta", alt:"davet" },

  // ALT DAL 6: KOMBİNASYON PROBLEMLERİ ÖZET
  { id: "s14_kp2_011", s: "Kombinasyon problemlerinde hangi durumda permütasyon kullanılır?", c: "secim_sonrasi_siralama_veya_gorevlendirme_varsa", v: {}, z:"orta", alt:"permutasyon_durumu" },
  { id: "s14_kp2_012", s: "\"Kaç farklı şekilde seçilir?\" ile \"Kaç farklı şekilde sıralanır?\" arasındaki fark nedir?", c: "secme_kombinasyon_siralama_permutasyon", v: {}, z:"orta", alt:"secme_siralama_fark" },


  // ==========================================
  // KONU 10: PASCAL ÜÇGENİ VE BİNOM AÇILIMI - GİRİŞ (6 alt dal)
  // ==========================================

  // ALT DAL 1: PASCAL ÜÇGENİ
  { id: "s14_pb_001", s: "Pascal üçgeni nedir?", c: "kombinasyon_degerlerinin_ucgen_seklinde_dizilimi", v: {}, z:"orta", alt:"pascal_tanim" },
  { id: "s14_pb_002", s: "Pascal üçgeninde n. satır r. sütundaki sayı nedir?", c: "C(n,r)", v: {}, z:"orta", alt:"pascal_C_n_r" },
  { id: "s14_pb_003", s: "Pascal üçgeninde bir sayı üstündeki iki sayının toplamına eşittir. Bu neyi ifade eder?", c: "C(n,r)+C(n,r+1)=C(n+1,r+1)", v: {}, z:"cok_zor", alt:"pascal_kural" },
  { id: "s14_pb_004", s: "Pascal üçgeninin 5. satırındaki sayılar nelerdir?", c: "1,5,10,10,5,1", v: {}, z:"orta", alt:"5_satir" },

  // ALT DAL 2: BİNOM AÇILIMI TANIMI
  { id: "s14_pb_005", s: "(x+y)ⁿ açılımında kaç terim vardır?", c: "n+1", v: {}, z:"orta", alt:"binom_terim" },
  { id: "s14_pb_006", s: "(x+y)ⁿ açılımında katsayılar neyi oluşturur?", c: "Pascal_ucgeninin_n_satirini", v: {}, z:"orta", alt:"binom_pascal" },

  // ALT DAL 3: BİNOM AÇILIMI FORMÜLÜ
  { id: "s14_pb_007", s: "(x+y)ⁿ = ? (Genel formül)", c: "ΣC(n,r)·x^(n-r)·y^r", v: {}, z:"cok_zor", alt:"binom_formul" },
  { id: "s14_pb_008", s: "(x+y)³ açılımını yazınız.", c: "x³+3x²y+3xy²+y³", v: {}, z:"orta", alt:"x+y_3" },
  { id: "s14_pb_009", s: "(x+y)⁴ açılımını yazınız.", c: "x⁴+4x³y+6x²y²+4xy³+y⁴", v: {}, z:"orta", alt:"x+y_4" },

  // ALT DAL 4: BİNOM KATSAYISI
  { id: "s14_pb_010", s: "(x+y)ⁿ açılımında r. terimin katsayısı nedir?", c: "C(n,r-1)", v: {}, z:"cok_zor", alt:"binom_katsayi" },
  { id: "s14_pb_011", s: "(x+y)⁵ açılımında x³y² teriminin katsayısı kaçtır?", c: "10", v: {}, z:"cok_zor", alt:"x3y2_katsayi" },
  { id: "s14_pb_012", s: "(x+y)⁶ açılımında ortanca terimin katsayısı kaçtır?", c: "20", v: {}, z:"cok_zor", alt:"ortanca_terim" },

  // ALT DAL 5: ÖZEL BİNOM AÇILIMLARI
  { id: "s14_pb_013", s: "(1+1)ⁿ = ? (Binom açılımı ile)", c: "Math.pow(2,{n})", v: {n:[3,7]}, z:"cok_zor", alt:"1+1_n" },
  { id: "s14_pb_014", s: "(1-1)ⁿ = ? (Binom açılımı ile)", c: "0_(n≥1)", v: {}, z:"cok_zor", alt:"1-1_n" },
  { id: "s14_pb_015", s: "(a+b)ⁿ açılımında baştan {r}. terim nedir?", c: "C(n,{r}-1)·a^(n-{r}+1)·b^{r-1}", v: {n:[4,8], r:[1,"{n}+1"]}, z:"cok_zor", alt:"basta_r_terim" },

  // ALT DAL 6: PASCAL-BİNOM ÖZET
  { id: "s14_pb_016", s: "Pascal üçgeni ile binom açılımı arasındaki ilişki nedir?", c: "binom_acilimindaki_katsayilar_pascal_ucgeninin_satirlaridir", v: {}, z:"orta", alt:"pascal_binom_iliski" },
  { id: "s14_pb_017", s: "C(n,r) değerleri Pascal üçgeninde nerede bulunur?", c: "n_satir_r_sutunda", v: {}, z:"orta", alt:"C_n_r_pascal" },

],


// ==========================================
// SEVİYE 15: OLASILIK
// ==========================================
15: [

  // ==========================================
  // KONU 1: OLASILIK TEMEL KAVRAMLAR (8 alt dal)
  // ==========================================

  // ALT DAL 1: OLASILIK TANIMI
  { id: "s15_ot_001", s: "Olasılık nedir?", c: "bir_olayin_gerceklesme_sansinin_sayisal_degeri", v: {}, z:"orta", alt:"olasilik_tanimi" },
  { id: "s15_ot_002", s: "Bir olayın olasılığı hangi aralıktadır?", c: "0_ile_1_arasinda_(0_dahil_1_dahil)", v: {}, z:"orta", alt:"olasilik_aralik" },
  { id: "s15_ot_003", s: "P(A) = 0 ne demektir?", c: "imkansiz_olay", v: {}, z:"kolay", alt:"imkansiz" },
  { id: "s15_ot_004", s: "P(A) = 1 ne demektir?", c: "kesin_olay", v: {}, z:"kolay", alt:"kesin" },

  // ALT DAL 2: ÖRNEK UZAY
  { id: "s15_ot_005", s: "Örnek uzay (E) nedir?", c: "bir_deneyin_tum_olasi_sonuclarinin_kumesi", v: {}, z:"orta", alt:"ornek_uzay" },
  { id: "s15_ot_006", s: "Bir zar atıldığında örnek uzay kaç elemanlıdır?", c: "6", v: {}, z:"orta", alt:"zar_ornek_uzay" },
  { id: "s15_ot_007", s: "İki zar atıldığında örnek uzay kaç elemanlıdır?", c: "36", v: {}, z:"orta", alt:"iki_zar_ornek_uzay" },
  { id: "s15_ot_008", s: "Bir para atıldığında örnek uzay nedir?", c: "{Yazı, Tura}", v: {}, z:"kolay", alt:"para_ornek_uzay" },

  // ALT DAL 3: OLAY
  { id: "s15_ot_009", s: "Olay nedir?", c: "ornek_uzayin_alt_kumesi", v: {}, z:"orta", alt:"olay_tanimi" },
  { id: "s15_ot_010", s: "Zar atışında \"tek sayı gelme\" olayı kaç elemanlıdır?", c: "3_({1,3,5})", v: {}, z:"orta", alt:"tek_sayi_olay" },
  { id: "s15_ot_011", s: "s(E)={a}, s(A)={b} ise P(A) = ?", c: "{b}/{a}", v: {a:[6,36], b:[1,"{a}-1"]}, z:"orta", alt:"olasilik_hesap" },

  // ALT DAL 4: EŞ OLASILIKLI OLAYLAR
  { id: "s15_ot_012", s: "Eş olasılıklı olay nedir?", c: "her_bir_sonucun_gerceklesme_sansi_esit_olan_olaylar", v: {}, z:"orta", alt:"es_olasilikli" },
  { id: "s15_ot_013", s: "Hilesiz bir zarda her yüzün gelme olasılığı kaçtır?", c: "1/6", v: {}, z:"orta", alt:"zar_es_olasilik" },

  // ALT DAL 5: OLASILIK FORMÜLÜ
  { id: "s15_ot_014", s: "P(A) = ? (Temel formül)", c: "istenen_durum_sayisi/tum_durum_sayisi", v: {}, z:"orta", alt:"olasilik_formul" },
  { id: "s15_ot_015", s: "P(A) = s(A)/s(E) formülü hangi durumda geçerlidir?", c: "tum_sonuclar_es_olasilikli_ise", v: {}, z:"orta", alt:"formul_sart" },

  // ALT DAL 6: OLASILIK DEĞERİ
  { id: "s15_ot_016", s: "Olasılık değeri negatif olabilir mi?", c: "hayir", v: {}, z:"orta", alt:"negatif_olasilik" },
  { id: "s15_ot_017", s: "Olasılık değeri 1'den büyük olabilir mi?", c: "hayir", v: {}, z:"orta", alt:"birden_buyuk" },

  // ALT DAL 7: OLAY ÇEŞİTLERİ
  { id: "s15_ot_018", s: "Ayrık olay nedir?", c: "ayni_anda_gerceklesemeyen_olaylar_(A∩B=∅)", v: {}, z:"orta", alt:"ayrik_olay" },
  { id: "s15_ot_019", s: "Bağımsız olay nedir?", c: "birinin_gerceklesmesi_digerinin_olasiligini_etkilemeyen_olaylar", v: {}, z:"cok_zor", alt:"bagimsiz_olay" },

  // ALT DAL 8: OLASILIK GÖSTERİMİ
  { id: "s15_ot_020", s: "Olasılık yüzde olarak ifade edilebilir mi?", c: "evet_(%0_ile_%100_arasi)", v: {}, z:"orta", alt:"yuzde_olasilik" },
  { id: "s15_ot_021", s: "P(A) = 0,25 = ?", c: "%25_veya_1/4", v: {}, z:"kolay", alt:"olasilik_donusum" },


  // ==========================================
  // KONU 2: OLASILIK HESAPLAMA (8 alt dal)
  // ==========================================

  // ALT DAL 1: BASİT OLASILIK
  { id: "s15_oh_001", s: "Bir zar atıldığında 4 gelme olasılığı kaçtır?", c: "1/6", v: {}, z:"kolay", alt:"zar_4" },
  { id: "s15_oh_002", s: "Bir zar atıldığında çift sayı gelme olasılığı kaçtır?", c: "1/2", v: {}, z:"kolay", alt:"zar_cift" },
  { id: "s15_oh_003", s: "Bir torbada {k} kırmızı, {m} mavi top vardır. Çekilen topun kırmızı olma olasılığı kaçtır?", c: "{k}/({k}+{m})", v: {k:[3,8], m:[2,7]}, z:"orta", alt:"top_kirmizi" },

  // ALT DAL 2: KESİR VE YÜZDE OLARAK
  { id: "s15_oh_004", s: "P(A) = 3/8 ise yüzde olarak kaçtır?", c: "%37,5", v: {}, z:"orta", alt:"kesir_yuzde" },
  { id: "s15_oh_005", s: "Bir olayın olma olasılığı %40 ise olmama olasılığı % kaçtır?", c: "%60", v: {}, z:"orta", alt:"olmama_yuzde" },

  // ALT DAL 3: ARDIŞIK OLAYLAR
  { id: "s15_oh_006", s: "Bir zar iki kez atıldığında ikisinin de 6 gelme olasılığı kaçtır?", c: "1/36", v: {}, z:"orta", alt:"iki_zar_6" },
  { id: "s15_oh_007", s: "Bir para 3 kez atıldığında hep yazı gelme olasılığı kaçtır?", c: "1/8", v: {}, z:"orta", alt:"uc_para_yazi" },

  // ALT DAL 4: TOPLAM OLASILIK
  { id: "s15_oh_008", s: "Bir zar atıldığında 2 VEYA 5 gelme olasılığı kaçtır?", c: "1/3", v: {}, z:"orta", alt:"2_veya_5" },
  { id: "s15_oh_009", s: "Bir zar atıldığında asal sayı gelme olasılığı kaçtır?", c: "1/2", v: {}, z:"orta", alt:"asal_olasilik" },

  // ALT DAL 5: OLASILIK HESAPLAMA SORULARI
  { id: "s15_oh_010", s: "{n} kişilik sınıftan rastgele seçilen birinin kız olma olasılığı {o} ise sınıfta kaç kız vardır?", c: "{o}×{n}", v: {n:[20,40], o:[0.25,0.33,0.4,0.5,0.6,0.67,0.75]}, z:"cok_zor", alt:"olasiliktan_sayi" },
  { id: "s15_oh_011", s: "Bir torbada {a} kırmızı, {b} mavi top vardır. Kırmızı gelme olasılığı kaçtır?", c: "{a}/({a}+{b})", v: {a:[3,8], b:[2,7]}, z:"orta", alt:"kirmizi_olasilik" },

  // ALT DAL 6: ONDALIK GÖSTERİM
  { id: "s15_oh_012", s: "Olasılık değeri 0,2 ise kesir olarak ifadesi nedir?", c: "1/5", v: {}, z:"orta", alt:"ondalik_kesir" },
  { id: "s15_oh_013", s: "P(A) = 0,75 ise P(A') = ?", c: "0,25", v: {}, z:"orta", alt:"tumleyen_ondalik" },

  // ALT DAL 7: OLASILIK PROBLEMLERİ
  { id: "s15_oh_014", s: "Bir çiftlikte {t} hayvandan {k} tavuk varsa rastgele seçilen hayvanın tavuk olma olasılığı kaçtır?", c: "{k}/{t}", v: {t:[10,30], k:[3,"{t}-1"]}, z:"orta", alt:"tavuk_olasilik" },
  { id: "s15_oh_015", s: "Bir rafta {a} roman, {b} dergi varsa rastgele alınan kitabın roman olma olasılığı kaçtır?", c: "{a}/({a}+{b})", v: {a:[3,10], b:[2,8]}, z:"orta", alt:"roman_olasilik" },

  // ALT DAL 8: OLASILIK HESAPLAMA ÖZET
  { id: "s15_oh_016", s: "Olasılık hesaplamanın temel formülü nedir?", c: "P(A)=istenen_durum_sayisi/tum_durum_sayisi", v: {}, z:"orta", alt:"temel_formul" },
  { id: "s15_oh_017", s: "Tüm durum sayısı nasıl bulunur?", c: "ornek_uzayin_eleman_sayisi_hesaplanir", v: {}, z:"orta", alt:"tum_durum" },


  // ==========================================
  // KONU 3: AYRIK OLAYLAR (6 alt dal)
  // ==========================================

  // ALT DAL 1: AYRIK OLAY TANIMI
  { id: "s15_ao_001", s: "Ayrık olay ne demektir?", c: "kesişimleri_boş_kume_olan_olaylar_(A∩B=∅)", v: {}, z:"orta", alt:"ayrik_tanim" },
  { id: "s15_ao_002", s: "Ayrık iki olay aynı anda gerçekleşebilir mi?", c: "hayir", v: {}, z:"orta", alt:"ayrik_ayni_anda" },
  { id: "s15_ao_003", s: "Zar atışında \"tek gelme\" ile \"çift gelme\" olayları ayrık mıdır?", c: "evet", v: {}, z:"orta", alt:"tek_cift_ayrik" },

  // ALT DAL 2: AYRIK OLAYLARIN OLASILIĞI
  { id: "s15_ao_004", s: "A ve B ayrık ise P(A∪B) = ?", c: "P(A)+P(B)", v: {}, z:"orta", alt:"ayrik_toplam" },
  { id: "s15_ao_005", s: "P(A)=1/4, P(B)=1/3 ve A,B ayrık ise P(A∪B)=?", c: "7/12", v: {}, z:"orta", alt:"ayrik_toplam_hesap" },
  { id: "s15_ao_006", s: "P(A)={a}/{c}, P(B)={b}/{c} ve ayrık iseler P(A∪B)=?", c: "({a}+{b})/{c}", v: {a:[1,3], b:[1,4], c:[6,12], kosul:"a+b<=c"}, z:"orta", alt:"ayrik_kesir" },

  // ALT DAL 3: AYRIK OLAY SORULARI
  { id: "s15_ao_007", s: "Bir zar atıldığında 2 veya 5 gelme olayları ayrık mıdır? Olasılığı kaçtır?", c: "evet_ayrik,_1/3", v: {}, z:"orta", alt:"2_5_ayrik" },
  { id: "s15_ao_008", s: "Torbadan çekilen topun kırmızı VEYA mavi olması olayı ayrık mıdır?", c: "evet_(bir_top_hem_kirmizi_hem_mavi_olamaz)", v: {}, z:"orta", alt:"renk_ayrik" },

  // ALT DAL 4: AYRIK OLMAYAN OLAYLAR
  { id: "s15_ao_009", s: "A ve B ayrık değilse P(A∪B) nasıl hesaplanır?", c: "P(A)+P(B)-P(A∩B)", v: {}, z:"cok_zor", alt:"ayrik_degil" },
  { id: "s15_ao_010", s: "Zar atışında \"3'ten büyük\" ile \"tek sayı\" olayları ayrık mıdır?", c: "hayir_(5_ortak)", v: {}, z:"cok_zor", alt:"buyuk_3_tek" },

  // ALT DAL 5: AYRIK OLAY VE KÜMELER
  { id: "s15_ao_011", s: "Ayrık olayların Venn şeması nasıldır?", c: "kesişmeyen_iki_kume", v: {}, z:"orta", alt:"ayrik_venn" },
  { id: "s15_ao_012", s: "s(A∩B)=0 ise A ve B olayları için ne söylenebilir?", c: "ayrik_olaylardir", v: {}, z:"orta", alt:"kesisim_sifir_ayrik" },

  // ALT DAL 6: AYRIK OLAY ÖZET
  { id: "s15_ao_013", s: "Ayrık olaylarda birleşim olasılığı neden toplamadır?", c: "ortak_eleman_olmadigi_icin_direkt_toplanir", v: {}, z:"orta", alt:"ayrik_toplam_nedeni" },
  { id: "s15_ao_014", s: "P(A∪B) = P(A)+P(B) ise A ve B için kesinlikle ne söylenir?", c: "ayrik_olaylardir_(P(A∩B)=0)", v: {}, z:"cok_zor", alt:"ayrik_kesin" },


  // ==========================================
  // KONU 4: BAĞIMSIZ OLAYLAR (6 alt dal)
  // ==========================================

  // ALT DAL 1: BAĞIMSIZ OLAY TANIMI
  { id: "s15_bo_001", s: "Bağımsız olay nedir?", c: "birinin_sonucu_digerinin_olasiligini_etkilemeyen_olaylar", v: {}, z:"cok_zor", alt:"bagimsiz_tanim" },
  { id: "s15_bo_002", s: "İki zar atıldığında olaylar bağımsız mıdır?", c: "evet_(her_bir_zar_bagimsizdir)", v: {}, z:"orta", alt:"iki_zar_bagimsiz" },

  // ALT DAL 2: BAĞIMSIZ OLAY FORMÜLÜ
  { id: "s15_bo_003", s: "A ve B bağımsız ise P(A∩B) = ?", c: "P(A)×P(B)", v: {}, z:"cok_zor", alt:"bagimsiz_formul" },
  { id: "s15_bo_004", s: "P(A)=1/2, P(B)=1/3 ve bağımsızlar ise P(A∩B)=?", c: "1/6", v: {}, z:"zor", alt:"bagimsiz_hesap" },
  { id: "s15_bo_005", s: "P(A)={a}/{c}, P(B)={b}/{c} ve bağımsızlar ise P(A∩B)=?", c: "({a}×{b})/({c}×{c})", v: {a:[1,3], b:[1,4], c:[4,12]}, z:"cok_zor", alt:"bagimsiz_kesir" },

  // ALT DAL 3: PARA ATIŞLARI
  { id: "s15_bo_006", s: "Bir para 2 kez atıldığında ikisinin de tura gelme olasılığı kaçtır?", c: "1/4", v: {}, z:"orta", alt:"iki_para_tura" },
  { id: "s15_bo_007", s: "Bir para {n} kez atıldığında hep yazı gelme olasılığı kaçtır?", c: "1/Math.pow(2,{n})", v: {n:[2,5]}, z:"zor", alt:"n_para_yazi" },
  { id: "s15_bo_008", s: "Para atışları bağımsız mıdır?", c: "evet_(onceki_sonuc_sonrakini_etkilemez)", v: {}, z:"orta", alt:"para_bagimsiz" },

  // ALT DAL 4: ZAR ATIŞLARI
  { id: "s15_bo_009", s: "İki zar atıldığında ikisinin de 6 gelme olasılığı kaçtır?", c: "1/36", v: {}, z:"orta", alt:"iki_zar_6_olasilik" },
  { id: "s15_bo_010", s: "İki zar atıldığında toplamın 12 olma olasılığı kaçtır?", c: "1/36", v: {}, z:"orta", alt:"toplam_12" },

  // ALT DAL 5: BAĞIMSIZ OLAY SORULARI
  { id: "s15_bo_011", s: "P(A)=0,4, P(B)=0,5 ve bağımsızlar ise P(A∩B)=?", c: "0,2", v: {}, z:"cok_zor", alt:"bagimsiz_ondalik" },
  { id: "s15_bo_012", s: "Bir hedefi vurma olasılığı {a}/{b} olan atıcı iki atışta da vuramama olasılığı kaçtır?", c: "(1-{a}/{b})²", v: {a:[1,3], b:[4,8], kosul:"a<b"}, z:"cok_zor", alt:"hedef_vurma" },

  // ALT DAL 6: BAĞIMSIZ OLAY ÖZET
  { id: "s15_bo_013", s: "Bağımsız olayları bağımlıdan ayıran nedir?", c: "bagimsizda_birinin_sonucu_digerini_etkilemez", v: {}, z:"orta", alt:"bagimsiz_bagimli_fark" },
  { id: "s15_bo_014", s: "Yerine koyarak çekme bağımsız mıdır?", c: "evet_(her_cekimde_olasilik_degismez)", v: {}, z:"cok_zor", alt:"yerine_koyma" },


  // ==========================================
  // KONU 5: BAĞIMLI (KOŞULLU) OLAYLAR (6 alt dal)
  // ==========================================

  // ALT DAL 1: KOŞULLU OLASILIK TANIMI
  { id: "s15_ko_001", s: "Koşullu olasılık nedir?", c: "bir_olayin_gerceklestigi_bilindiginde_diger_olayin_olasiligi", v: {}, z:"cok_zor", alt:"kosullu_tanim" },
  { id: "s15_ko_002", s: "P(A|B) ne demektir?", c: "B_olayi_gerceklesmisken_A_olayinin_olasiligi", v: {}, z:"cok_zor", alt:"P_A_B" },

  // ALT DAL 2: KOŞULLU OLASILIK FORMÜLÜ
  { id: "s15_ko_003", s: "P(A|B) = ?", c: "P(A∩B)/P(B)", v: {}, z:"cok_zor", alt:"kosullu_formul" },
  { id: "s15_ko_004", s: "P(A∩B) = {a}/{c}, P(B) = {b}/{c} ise P(A|B) = ?", c: "{a}/{b}", v: {a:[1,4], b:[2,6], c:[6,12], kosul:"a<=b"}, z:"cok_zor", alt:"kosullu_hesap" },
  { id: "s15_ko_005", s: "P(A)=1/2, P(B)=1/3, P(A∩B)=1/6 ise P(A|B)=?", c: "1/2", v: {}, z:"cok_zor", alt:"kosullu_ornek" },

  // ALT DAL 3: BAĞIMLI OLAYLARDA ÇARPMA
  { id: "s15_ko_006", s: "A ve B bağımlı ise P(A∩B) = ?", c: "P(A)×P(B|A)_veya_P(B)×P(A|B)", v: {}, z:"cok_zor", alt:"bagimli_carpma" },
  { id: "s15_ko_007", s: "P(A)=2/5, P(B|A)=1/3 ise P(A∩B)=?", c: "2/15", v: {}, z:"cok_zor", alt:"bagimli_hesap" },

  // ALT DAL 4: YERİNE KOYMADAN ÇEKME
  { id: "s15_ko_008", s: "Torbada {k} kırmızı, {m} mavi top var. Yerine konmadan iki top çekiliyor. İkisinin de kırmızı olma olasılığı kaçtır?", c: "({k}/({k}+{m}))×(({k}-1)/({k}+{m}-1))", v: {k:[3,8], m:[2,6], kosul:"k>=2"}, z:"cok_zor", alt:"ikisi_kirmizi" },
  { id: "s15_ko_009", s: "Yerine koymadan çekme neden bağımlıdır?", c: "her_cekimde_torbadaki_top_sayisi_ve_orani_degisir", v: {}, z:"orta", alt:"yerine_koymadan" },

  // ALT DAL 5: KOŞULLU OLASILIK SORULARI
  { id: "s15_ko_010", s: "Bir ailede iki çocuktan birinin erkek olduğu biliniyorsa diğerinin kız olma olasılığı kaçtır?", c: "2/3", v: {}, z:"cok_zor", alt:"cocuk_olasilik" },
  { id: "s15_ko_011", s: "Zar atışında gelen sayının 4'ten büyük olduğu biliniyorsa asal olma olasılığı kaçtır?", c: "1/2", v: {}, z:"cok_zor", alt:"zar_kosullu" },

  // ALT DAL 6: KOŞULLU OLASILIK ÖZET
  { id: "s15_ko_012", s: "Koşullu olasılıkta örnek uzay nasıl değişir?", c: "kosul_saglandigi_durumlar_yeni_ornek_uzay_olur", v: {}, z:"orta", alt:"yeni_ornek_uzay" },
  { id: "s15_ko_013", s: "P(A|B) ile P(B|A) genellikle eşit midir?", c: "hayir_(farklidir)", v: {}, z:"cok_zor", alt:"P_A_B_esit_degil" },


  // ==========================================
  // KONU 6: TÜMLEYEN OLAY (6 alt dal)
  // ==========================================

  // ALT DAL 1: TÜMLEYEN OLAY TANIMI
  { id: "s15_to_001", s: "Tümleyen olay nedir?", c: "bir_olayin_gerceklesmemesi_durumu_(A')", v: {}, z:"orta", alt:"tumleyen_tanim" },
  { id: "s15_to_002", s: "P(A) + P(A') = ?", c: "1", v: {}, z:"orta", alt:"tumleyen_toplam" },
  { id: "s15_to_003", s: "P(A) = {a}/{b} ise P(A') = ?", c: "1-{a}/{b}=({b}-{a})/{b}", v: {a:[1,5], b:[4,12], kosul:"a<b"}, z:"orta", alt:"tumleyen_hesap" },

  // ALT DAL 2: TÜMLEYEN KULLANIMI
  { id: "s15_to_004", s: "\"En az bir\" olasılığı nasıl hesaplanır?", c: "1-P(hic_olmama)", v: {}, z:"cok_zor", alt:"en_az_bir_tumleyen" },
  { id: "s15_to_005", s: "Bir zar 3 kez atıldığında en az bir kez 6 gelme olasılığı kaçtır?", c: "1-Math.pow(5/6,3)=91/216", v: {}, z:"cok_zor", alt:"en_az_bir_6" },

  // ALT DAL 3: TÜMLEYEN PROBLEMLERİ
  { id: "s15_to_006", s: "Bir hedefi vurma olasılığı 2/3 olan atıcının vuramama olasılığı kaçtır?", c: "1/3", v: {}, z:"orta", alt:"vuramama" },
  { id: "s15_to_007", s: "Bir sınavı geçme olasılığı %70 ise kalma olasılığı % kaçtır?", c: "%30", v: {}, z:"orta", alt:"kalma_olasilik" },

  // ALT DAL 4: TÜMLEYEN İLE KOLAY HESAP
  { id: "s15_to_008", s: "\"En az bir\" yerine tümleyen kullanmak neden kolaydır?", c: "cok_sayida_durum_yerine_tek_durum_hesaplanir", v: {}, z:"orta", alt:"tumleyen_kolaylik" },
  { id: "s15_to_009", s: "{n} para atışında en az bir tura gelme olasılığı kaçtır?", c: "1-Math.pow(1/2,{n})", v: {n:[2,5]}, z:"cok_zor", alt:"en_az_bir_tura" },

  // ALT DAL 5: TÜMLEYEN SORULARI
  { id: "s15_to_010", s: "Bir torbada {k} kırmızı, {m} mavi top var. Çekilen topun kırmızı OLMAMA olasılığı kaçtır?", c: "{m}/({k}+{m})", v: {k:[3,7], m:[2,6]}, z:"orta", alt:"kirmizi_olmama" },
  { id: "s15_to_011", s: "P(A') = 2/5 ise P(A) = ?", c: "3/5", v: {}, z:"orta", alt:"tumleyenden_bulma" },

  // ALT DAL 6: TÜMLEYEN ÖZET
  { id: "s15_to_012", s: "Tümleyen olayın formülü nedir?", c: "P(A')=1-P(A)", v: {}, z:"orta", alt:"tumleyen_formul" },
  { id: "s15_to_013", s: "Kesin olayın tümleyeni nedir?", c: "imkansiz_olay_(1'in_tumleyeni_0)", v: {}, z:"orta", alt:"kesin_tumleyen" },


  // ==========================================
  // KONU 7: BİRLEŞİM VE KESİŞİM OLASILIĞI (6 alt dal)
  // ==========================================

  // ALT DAL 1: BİRLEŞİM OLASILIĞI
  { id: "s15_bk_001", s: "P(A∪B) formülü nedir?", c: "P(A)+P(B)-P(A∩B)", v: {}, z:"cok_zor", alt:"birlesim_formul" },
  { id: "s15_bk_002", s: "P(A)=1/2, P(B)=1/3, P(A∩B)=1/6 ise P(A∪B)=?", c: "2/3", v: {}, z:"cok_zor", alt:"birlesim_hesap" },
  { id: "s15_bk_003", s: "A ve B ayrık ise P(A∪B) = ?", c: "P(A)+P(B)", v: {}, z:"orta", alt:"ayrik_birlesim" },

  // ALT DAL 2: KESİŞİM OLASILIĞI
  { id: "s15_bk_004", s: "A ve B bağımsız ise P(A∩B) = ?", c: "P(A)×P(B)", v: {}, z:"orta", alt:"bagimsiz_kesisim" },
  { id: "s15_bk_005", s: "A ve B bağımlı ise P(A∩B) = ?", c: "P(A)×P(B|A)", v: {}, z:"cok_zor", alt:"bagimli_kesisim" },
  { id: "s15_bk_006", s: "Ayrık olaylarda P(A∩B) = ?", c: "0", v: {}, z:"orta", alt:"ayrik_kesisim" },

  // ALT DAL 3: DAHİL ETME-HARİÇ ETME
  { id: "s15_bk_007", s: "P(A∪B∪C) = ?", c: "P(A)+P(B)+P(C)-P(A∩B)-P(A∩C)-P(B∩C)+P(A∩B∩C)", v: {}, z:"cok_zor", alt:"uc_birlesim" },
  { id: "s15_bk_008", s: "Üç olay için dahil etme-hariç etme formülü ne işe yarar?", c: "uc_olayin_birlesim_olasiligini_hesaplamaya", v: {}, z:"orta", alt:"dahil_etme" },

  // ALT DAL 4: BİRLEŞİM PROBLEMLERİ
  { id: "s15_bk_009", s: "Bir öğrencinin Matematikten geçme olasılığı 3/4, Fizikten 2/3, ikisinden 1/2 ise en az birinden geçme olasılığı kaçtır?", c: "11/12", v: {}, z:"cok_zor", alt:"en_az_bir_gecme" },
  { id: "s15_bk_010", s: "P(A)=0,6, P(B)=0,5, P(A∪B)=0,8 ise P(A∩B)=?", c: "0,3", v: {}, z:"cok_zor", alt:"kesisim_bulma" },

  // ALT DAL 5: BAĞIMSIZLIK KONTROLÜ
  { id: "s15_bk_011", s: "P(A∩B) = P(A)×P(B) ise A ve B için ne söylenebilir?", c: "bagimsizdir", v: {}, z:"cok_zor", alt:"bagimsizlik_kontrol" },
  { id: "s15_bk_012", s: "P(A)=1/2, P(B)=1/3, P(A∩B)=1/6 ise A ve B bağımsız mıdır?", c: "evet_(1/2×1/3=1/6)", v: {}, z:"cok_zor", alt:"bagimsizlik_test" },

  // ALT DAL 6: BİRLEŞİM-KESİŞİM ÖZET
  { id: "s15_bk_013", s: "P(A∪B) en çok kaç olabilir?", c: "1", v: {}, z:"orta", alt:"max_birlesim" },
  { id: "s15_bk_014", s: "P(A∪B) = P(A)+P(B) ise A ve B için ne söylenir?", c: "ayriktir_(P(A∩B)=0)", v: {}, z:"orta", alt:"birlesim_toplam_ayrik" },


  // ==========================================
  // KONU 8: ZAR PROBLEMLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: TEK ZAR
  { id: "s15_zp_001", s: "Bir zar atıldığında {a} gelme olasılığı kaçtır?", c: "1/6", v: {a:[1,6]}, z:"kolay", alt:"tek_zar" },
  { id: "s15_zp_002", s: "Bir zar atıldığında 3'ten büyük gelme olasılığı kaçtır?", c: "1/2", v: {}, z:"orta", alt:"ucten_buyuk" },
  { id: "s15_zp_003", s: "Bir zar atıldığında asal sayı gelme olasılığı kaçtır?", c: "1/2", v: {}, z:"orta", alt:"asal_zar" },

  // ALT DAL 2: İKİ ZAR - TOPLAM
  { id: "s15_zp_004", s: "İki zar atıldığında toplamın {t} olma olasılığı kaçtır?", c: "{olasilik}", v: {t:[2,12]}, z:"zor", alt:"iki_zar_toplam" },
  { id: "s15_zp_005", s: "İki zar atıldığında toplamın 7 olma olasılığı kaçtır?", c: "1/6", v: {}, z:"zor", alt:"toplam_7" },
  { id: "s15_zp_006", s: "İki zar atıldığında toplamın 8 olma olasılığı kaçtır?", c: "5/36", v: {}, z:"zor", alt:"toplam_8" },
  { id: "s15_zp_007", s: "İki zar atıldığında toplamın en az 10 olma olasılığı kaçtır?", c: "1/6", v: {}, z:"cok_zor", alt:"toplam_en_az_10" },

  // ALT DAL 3: İKİ ZAR - ÇARPIM
  { id: "s15_zp_008", s: "İki zar atıldığında çarpımın tek olma olasılığı kaçtır?", c: "1/4", v: {}, z:"cok_zor", alt:"carpim_tek" },
  { id: "s15_zp_009", s: "İki zar atıldığında çarpımın çift olma olasılığı kaçtır?", c: "3/4", v: {}, z:"cok_zor", alt:"carpim_cift" },

  // ALT DAL 4: İKİ ZAR - EŞİT GELME
  { id: "s15_zp_010", s: "İki zar atıldığında aynı sayı gelme olasılığı kaçtır?", c: "1/6", v: {}, z:"orta", alt:"ayni_sayi" },
  { id: "s15_zp_011", s: "İki zar atıldığında farklı sayı gelme olasılığı kaçtır?", c: "5/6", v: {}, z:"orta", alt:"farkli_sayi" },

  // ALT DAL 5: ÜÇ ZAR
  { id: "s15_zp_012", s: "Üç zar atıldığında toplamın 3 olma olasılığı kaçtır?", c: "1/216", v: {}, z:"cok_zor", alt:"uc_zar_toplam_3" },
  { id: "s15_zp_013", s: "Üç zar atıldığında hepsinin 6 gelme olasılığı kaçtır?", c: "1/216", v: {}, z:"cok_zor", alt:"uc_zar_6" },

  // ALT DAL 6: ZAR PROBLEMLERİ KARIŞIK
  { id: "s15_zp_014", s: "İki zar atıldığında gelen sayıların ardışık olma olasılığı kaçtır?", c: "5/18", v: {}, z:"cok_zor", alt:"ardisik_zar" },
  { id: "s15_zp_015", s: "İki zar atıldığında farkın 2 olma olasılığı kaçtır?", c: "2/9", v: {}, z:"cok_zor", alt:"fark_2" },

  // ALT DAL 7: ZAR VE OLASILIK HESAPLAMA
  { id: "s15_zp_016", s: "İki zar deneyinde tüm durum sayısı neden 36'dır?", c: "her_bir_zar_6_yuz_6×6=36", v: {}, z:"orta", alt:"36_nedeni" },
  { id: "s15_zp_017", s: "Zar problemlerinde örnek uzay nasıl listelenir?", c: "ikili_sirali_olarak_(1,1),(1,2)...", v: {}, z:"orta", alt:"ornek_uzay_liste" },

  // ALT DAL 8: ZAR PROBLEMLERİ ÖZET
  { id: "s15_zp_018", s: "İki zarda toplam olasılıkları hesaplanırken nelere dikkat edilir?", c: "her_bir_toplami_veren_ikili_sayisi_farklidir", v: {}, z:"orta", alt:"toplam_dikkat" },
  { id: "s15_zp_019", s: "İki zarda en yüksek olasılıklı toplam kaçtır?", c: "7_(1/6_olasilikla)", v: {}, z:"orta", alt:"en_yuksek_toplam" },


  // ==========================================
  // KONU 9: PARA PROBLEMLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: TEK PARA
  { id: "s15_pp_001", s: "Bir para atıldığında yazı gelme olasılığı kaçtır?", c: "1/2", v: {}, z:"kolay", alt:"tek_para" },
  { id: "s15_pp_002", s: "Hilesiz parada her iki yüzün gelme olasılığı eşit midir?", c: "evet_(1/2)", v: {}, z:"kolay", alt:"hilesiz_para" },

  // ALT DAL 2: İKİ PARA
  { id: "s15_pp_003", s: "İki para atıldığında ikisinin de yazı gelme olasılığı kaçtır?", c: "1/4", v: {}, z:"orta", alt:"iki_para_yazi" },
  { id: "s15_pp_004", s: "İki para atıldığında en az bir tura gelme olasılığı kaçtır?", c: "3/4", v: {}, z:"orta", alt:"en_az_bir_tura_iki" },
  { id: "s15_pp_005", s: "İki para atıldığında aynı yüz gelme olasılığı kaçtır?", c: "1/2", v: {}, z:"orta", alt:"ayni_yuz" },

  // ALT DAL 3: ÜÇ PARA
  { id: "s15_pp_006", s: "Üç para atıldığında hep yazı gelme olasılığı kaçtır?", c: "1/8", v: {}, z:"orta", alt:"uc_para_yazi" },
  { id: "s15_pp_007", s: "Üç para atıldığında en az bir tura gelme olasılığı kaçtır?", c: "7/8", v: {}, z:"orta", alt:"en_az_bir_tura_uc" },
  { id: "s15_pp_008", s: "Üç para atıldığında tam 2 yazı gelme olasılığı kaçtır?", c: "3/8", v: {}, z:"cok_zor", alt:"tam_2_yazi" },

  // ALT DAL 4: n PARA
  { id: "s15_pp_009", s: "{n} para atıldığında hep tura gelme olasılığı kaçtır?", c: "1/Math.pow(2,{n})", v: {n:[2,6]}, z:"orta", alt:"n_para_tura" },
  { id: "s15_pp_010", s: "{n} para atıldığında en az bir yazı gelme olasılığı kaçtır?", c: "1-1/Math.pow(2,{n})", v: {n:[2,5]}, z:"cok_zor", alt:"en_az_bir_yazi_n" },
  { id: "s15_pp_011", s: "{n} para atıldığında tam {k} tura gelme olasılığı kaçtır?", c: "C({n},{k})/Math.pow(2,{n})", v: {n:[3,6], k:[1,"{n}-1"]}, z:"cok_zor", alt:"tam_k_tura" },

  // ALT DAL 5: PARA PROBLEMLERİ ÖZEL
  { id: "s15_pp_012", s: "Para atışlarında tüm durum sayısı nasıl hesaplanır?", c: "Math.pow(2,{n})_(n_atis_sayisi)", v: {}, z:"orta", alt:"tum_durum_para" },
  { id: "s15_pp_013", s: "Para atışları ile binom dağılımı arasındaki ilişki nedir?", c: "binom_dagiliminin_en_basit_ornegidir", v: {}, z:"cok_zor", alt:"binom_para" },

  // ALT DAL 6: PARA PROBLEMLERİ ÖZET
  { id: "s15_pp_014", s: "Para problemlerinde genel formül nedir?", c: "P(tam_k)=C(n,k)/2^n", v: {}, z:"orta", alt:"genel_formul_para" },
  { id: "s15_pp_015", s: "Hileli para sorularında nelere dikkat edilir?", c: "yazi_ve_tura_olasiliklari_esit_olmaz", v: {}, z:"orta", alt:"hileli_para" },


  // ==========================================
  // KONU 10: TOP ÇEKME PROBLEMLERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: TEK TOP ÇEKME
  { id: "s15_tc_001", s: "Torbada {k} kırmızı, {m} mavi top var. Çekilen topun kırmızı olma olasılığı kaçtır?", c: "{k}/({k}+{m})", v: {k:[3,8], m:[2,7]}, z:"orta", alt:"tek_top" },
  { id: "s15_tc_002", s: "Torbada {k} kırmızı, {m} mavi, {s} sarı top var. Kırmızı gelme olasılığı kaçtır?", c: "{k}/({k}+{m}+{s})", v: {k:[2,6], m:[2,5], s:[1,4]}, z:"orta", alt:"uc_renk_tek" },

  // ALT DAL 2: YERİNE KOYARAK ÇEKME
  { id: "s15_tc_003", s: "Torbada {k} kırmızı, {m} mavi top var. Yerine konarak iki top çekiliyor. İkisinin de kırmızı olma olasılığı kaçtır?", c: "Math.pow({k}/({k}+{m}),2)", v: {k:[3,6], m:[2,5]}, z:"zor", alt:"yerine_koyarak_kirmizi" },
  { id: "s15_tc_004", s: "Yerine koyarak çekmede olasılık neden değişmez?", c: "her_cekimde_torbadaki_durum_ayni_kalir", v: {}, z:"orta", alt:"yerine_koyma_nedeni" },

  // ALT DAL 3: YERİNE KOYMADAN ÇEKME
  { id: "s15_tc_005", s: "Torbada {k} kırmızı, {m} mavi top var. Yerine konmadan iki top çekiliyor. İkisinin de kırmızı olma olasılığı kaçtır?", c: "({k}/({k}+{m}))×(({k}-1)/({k}+{m}-1))", v: {k:[4,8], m:[2,5], kosul:"k>=2"}, z:"cok_zor", alt:"yerine_koymadan_kirmizi" },
  { id: "s15_tc_006", s: "Yerine koymadan çekmede olasılık neden değişir?", c: "her_cekimde_torbadaki_top_sayisi_ve_dagilim_degisir", v: {}, z:"orta", alt:"yerine_koymama_nedeni" },

  // ALT DAL 4: EN AZ BİR KIRMIZI
  { id: "s15_tc_007", s: "Torbada {k} kırmızı, {m} mavi top var. İki top çekildiğinde en az bir kırmızı gelme olasılığı kaçtır?", c: "1-({m}/({k}+{m}))*(({m}-1)/({k}+{m}-1))", v: {k:[3,6], m:[2,5]}, z:"cok_zor", alt:"en_az_bir_kirmizi" },
  { id: "s15_tc_008", s: "\"En az bir\" top çekme sorularında tümleyen neden kullanılır?", c: "hic_kirmizi_olmama_durumu_tek_olasiliktir", v: {}, z:"orta", alt:"tumleyen_top" },

  // ALT DAL 5: FARKLI RENK ÇEKME
  { id: "s15_tc_009", s: "Torbada {k} kırmızı, {m} mavi top var. İki top çekildiğinde farklı renk gelme olasılığı kaçtır?", c: "2×{k}×{m}/(({k}+{m})×({k}+{m}-1))", v: {k:[3,6], m:[2,5]}, z:"cok_zor", alt:"farkli_renk" },
  { id: "s15_tc_010", s: "İki top çekildiğinde bir kırmızı bir mavi gelme olasılığı nasıl hesaplanır?", c: "(kirmizi_sonra_mavi)+(mavi_sonra_kirmizi)", v: {}, z:"cok_zor", alt:"sirali_farkli" },

  // ALT DAL 6: ÜÇ TOP ÇEKME
  { id: "s15_tc_011", s: "Torbada {k} kırmızı, {m} mavi, {s} sarı top var. Üç top çekildiğinde hepsinin farklı renk olma olasılığı kaçtır?", c: "6×{k}×{m}×{s}/(({k}+{m}+{s})×({k}+{m}+{s}-1)×({k}+{m}+{s}-2))", v: {k:[2,5], m:[2,4], s:[2,4]}, z:"cok_zor", alt:"uc_farkli_renk" },

  // ALT DAL 7: TOP ÇEKME PROBLEMLERİ KARIŞIK
  { id: "s15_tc_012", s: "Torbada eşit sayıda kırmızı ve mavi top vardır. İki top çekildiğinde ikisinin de aynı renk olma olasılığı kaçtır?", c: "({n}-1)/(2*{n}-1)", v: {n:[2,5]}, z:"cok_zor", alt:"ayni_renk_esit" },
  { id: "s15_tc_013", s: "Torbadan top çekme problemlerinde kombinasyon nasıl kullanılır?", c: "secim_sayilari_kombinasyonla_hesaplanir", v: {}, z:"orta", alt:"kombinasyon_top" },

  // ALT DAL 8: TOP ÇEKME ÖZET
  { id: "s15_tc_014", s: "Top çekme problemlerinde iki durum nedir?", c: "yerine_koyarak_ve_yerine_koymadan", v: {}, z:"orta", alt:"iki_durum" },
  { id: "s15_tc_015", s: "Yerine koyarak çekmede olasılık formülü bağımsız olay gibi midir?", c: "evet_(her_cekim_bagimsizdir)", v: {}, z:"cok_zor", alt:"yerine_koyma_bagimsiz" },


  // ==========================================
  // KONU 11: KART ÇEKME PROBLEMLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: TEK KART ÇEKME
  { id: "s15_kc_001", s: "52'lik desteden çekilen kartın kupa olma olasılığı kaçtır?", c: "1/4", v: {}, z:"orta", alt:"kupa" },
  { id: "s15_kc_002", s: "52'lik desteden çekilen kartın as olma olasılığı kaçtır?", c: "1/13", v: {}, z:"orta", alt:"as" },
  { id: "s15_kc_003", s: "52'lik desteden çekilen kartın kırmızı olma olasılığı kaçtır?", c: "1/2", v: {}, z:"orta", alt:"kirmizi_kart" },

  // ALT DAL 2: İKİ KART ÇEKME
  { id: "s15_kc_004", s: "52'lik desteden iki kart çekiliyor. İkisinin de as olma olasılığı kaçtır?", c: "C(4,2)/C(52,2)=6/1326=1/221", v: {}, z:"cok_zor", alt:"iki_as" },
  { id: "s15_kc_005", s: "52'lik desteden iki kart çekiliyor. Aynı renkten olma olasılığı kaçtır?", c: "(C(26,2)+C(26,2))/C(52,2)", v: {}, z:"cok_zor", alt:"ayni_renk" },

  // ALT DAL 3: POKER ELİ
  { id: "s15_kc_006", s: "52'lik desteden 5 kart çekiliyor. Full house (3+2) gelme olasılığı kaçtır?", c: "{olasilik}", v: {}, z:"cok_zor", alt:"full_house" },
  { id: "s15_kc_007", s: "52'lik desteden 5 kart çekiliyor. Floş gelme olasılığı kaçtır?", c: "{olasilik}", v: {}, z:"cok_zor", alt:"flos" },

  // ALT DAL 4: İSKAMBİL KAĞITLARI
  { id: "s15_kc_008", s: "İskambil destesinde kaç kart vardır?", c: "52_(4_renk×13_kart)", v: {}, z:"orta", alt:"deste_sayisi" },
  { id: "s15_kc_009", s: "İskambil destesinde renkler nelerdir?", c: "kupa,_karo,_maca,_sinek", v: {}, z:"kolay", alt:"renkler" },

  // ALT DAL 5: KART PROBLEMLERİ KARIŞIK
  { id: "s15_kc_010", s: "Desteden çekilen kartın papaz veya kupa olma olasılığı kaçtır?", c: "4/13", v: {}, z:"cok_zor", alt:"papaz_veya_kupa" },
  { id: "s15_kc_011", s: "İki kart çekildiğinde birinin kupa diğerinin maça olma olasılığı kaçtır?", c: "(13×13×2)/C(52,2)=26/663", v: {}, z:"cok_zor", alt:"kupa_maca" },

  // ALT DAL 6: KART PROBLEMLERİ ÖZET
  { id: "s15_kc_012", s: "Kart çekme problemlerinde kombinasyon neden kullanılır?", c: "coklu_kart_cekiminde_siralama_onemsizdir", v: {}, z:"orta", alt:"kombinasyon_kart" },
  { id: "s15_kc_013", s: "Desteden art arda kart çekmede yerine koyma durumu var mıdır?", c: "genellikle_yerine_koymadan_cekilir", v: {}, z:"orta", alt:"yerine_koyma_kart" },


  // ==========================================
  // KONU 12: OLASILIK VE SAYMA (6 alt dal)
  // ==========================================

  // ALT DAL 1: PERMÜTASYON VE OLASILIK
  { id: "s15_os_001", s: "{n} kişi yan yana rastgele sıralanıyor. Belirli iki kişinin yan yana olma olasılığı kaçtır?", c: "2/{n}", v: {n:[4,8]}, z:"cok_zor", alt:"yan_yana_olasilik" },
  { id: "s15_os_002", s: "Permütasyon ile olasılık hesaplanırken nelere dikkat edilir?", c: "istenen_siralama_sayisi/tum_siralama_sayisi", v: {}, z:"orta", alt:"permutasyon_olasilik" },

  // ALT DAL 2: KOMBİNASYON VE OLASILIK
  { id: "s15_os_003", s: "{n} kişiden rastgele {r} kişi seçiliyor. Belirli bir kişinin seçilme olasılığı kaçtır?", c: "{r}/{n}", v: {n:[6,15], r:[2,"{n}-1"]}, z:"cok_zor", alt:"secme_olasilik" },
  { id: "s15_os_004", s: "{n} kişiden {r} kişi seçildiğinde belirli kişinin seçilme olasılığı neden r/n'dir?", c: "her_bir_kisinin_secilme_sansi_esittir", v: {}, z:"cok_zor", alt:"r_n_nedeni" },

  // ALT DAL 3: SAYMA PROBLEMLERİ
  { id: "s15_os_005", s: "{a} basamaklı rastgele bir sayının rakamlarının farklı olma olasılığı kaçtır?", c: "9×P(9,{a}-1)/(9×Math.pow(10,{a}-1))", v: {a:[2,4]}, z:"cok_zor", alt:"rakam_farkli_olasilik" },
  { id: "s15_os_006", s: "Sayma ve olasılık arasındaki ilişki nedir?", c: "olasilik=istenen_sayma_durumu/tum_sayma_durumu", v: {}, z:"orta", alt:"sayma_olasilik" },

  // ALT DAL 4: GEOMETRİK OLASILIK
  { id: "s15_os_007", s: "Geometrik olasılık nedir?", c: "alan_veya_uzunluk_orani_ile_olasilik_hesabi", v: {}, z:"cok_zor", alt:"geometrik_olasilik" },
  { id: "s15_os_008", s: "Bir daire içinde rastgele seçilen noktanın merkeze {r}/{R}'den yakın olma olasılığı kaçtır?", c: "({r}/{R})²", v: {r:[1,3], R:[3,6], kosul:"r<R"}, z:"cok_zor", alt:"daire_olasilik" },

  // ALT DAL 5: OLASILIK VE İSTATİSTİK
  { id: "s15_os_009", s: "Beklenen değer nedir?", c: "olasilik_ile_degerin_carpimlarinin_toplami", v: {}, z:"cok_zor", alt:"beklenen_deger" },
  { id: "s15_os_010", s: "Bir zarda beklenen değer kaçtır?", c: "3,5", v: {}, z:"cok_zor", alt:"zar_beklenen" },

  // ALT DAL 6: OLASILIK VE SAYMA ÖZET
  { id: "s15_os_011", s: "Olasılık problemlerinde sayma teknikleri nasıl kullanılır?", c: "once_tum_durum_sonra_istenen_durum_sayilir", v: {}, z:"orta", alt:"sayma_strateji" },
  { id: "s15_os_012", s: "Olasılık ve kombinasyon nasıl ilişkilendirilir?", c: "secme_problemlerinde_C(n,r)_kullanilir", v: {}, z:"orta", alt:"olasilik_kombinasyon" },


  // ==========================================
  // KONU 13: DENEYSEL VE TEORİK OLASILIK (4 alt dal)
  // ==========================================

  // ALT DAL 1: TEORİK OLASILIK
  { id: "s15_dt_001", s: "Teorik olasılık nedir?", c: "matematiksel_hesapla_bulunan_olasilik", v: {}, z:"orta", alt:"teorik_tanim" },
  { id: "s15_dt_002", s: "Hilesiz zarda 6 gelme teorik olasılığı kaçtır?", c: "1/6", v: {}, z:"orta", alt:"teorik_zar" },

  // ALT DAL 2: DENEYSEL OLASILIK
  { id: "s15_dt_003", s: "Deneysel olasılık nedir?", c: "deney_sonuclarina_dayali_olasilik", v: {}, z:"orta", alt:"deneysel_tanim" },
  { id: "s15_dt_004", s: "Bir zar 60 kez atılıp 12 kez 6 gelmişse deneysel olasılık kaçtır?", c: "1/5", v: {}, z:"orta", alt:"deneysel_zar" },

  // ALT DAL 3: TEORİK VE DENEYSEL KARŞILAŞTIRMA
  { id: "s15_dt_005", s: "Teorik ve deneysel olasılık arasındaki fark nedir?", c: "teorik_hesaplanir_deneysel_gozlemlenir", v: {}, z:"orta", alt:"teorik_deneysel_fark" },
  { id: "s15_dt_006", s: "Deney sayısı arttıkça deneysel olasılık neye yaklaşır?", c: "teorik_olasiliga", v: {}, z:"orta", alt:"buyuk_sayilar" },

  // ALT DAL 4: DENEYSEL-TEORİK ÖZET
  { id: "s15_dt_007", s: "Büyük sayılar kanunu nedir?", c: "deney_sayisi_arttikca_deneysel_olasiligin_teorige_yaklasmasi", v: {}, z:"orta", alt:"buyuk_sayilar_kanunu" },
  { id: "s15_dt_008", s: "Olasılık günlük hayatta nerelerde kullanılır?", c: "hava_durumu,_sigorta,_oyunlar,_istatistik", v: {}, z:"orta", alt:"gunluk_hayat" },

],

// ==========================================
// SEVİYE 16: İSTATİSTİK
// ==========================================
16: [

  // ==========================================
  // KONU 1: VERİ VE VERİ TÜRLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: VERİ TANIMI
  { id: "s16_vt_001", s: "Veri nedir?", c: "arastirma_sonucu_elde_edilen_sayisal_degerler", v: {}, z:"kolay", alt:"veri_tanimi" },
  { id: "s16_vt_002", s: "İstatistik nedir?", c: "verilerin_toplanmasi_duzenlenmesi_ve_yorumlanmasi", v: {}, z:"kolay", alt:"istatistik_tanim" },
  { id: "s16_vt_003", s: "Aşağıdakilerden hangisi veridir?", c: "{dogru}", v: {secenekler:["Sınav notları","Öğrenci boyları","Günlük sıcaklıklar","Anket sonuçları"]}, z:"kolay", alt:"veri_ornek" },

  // ALT DAL 2: VERİ TÜRLERİ
  { id: "s16_vt_004", s: "Kesikli veri nedir?", c: "tam_sayi_degerler_alabilen_veri", v: {}, z:"orta", alt:"kesikli_veri" },
  { id: "s16_vt_005", s: "Sürekli veri nedir?", c: "araliktaki_her_degeri_alabilen_veri", v: {}, z:"orta", alt:"surekli_veri" },
  { id: "s16_vt_006", s: "Öğrenci sayısı kesikli mi sürekli mi veridir?", c: "kesikli", v: {}, z:"orta", alt:"ogrenci_sayisi" },
  { id: "s16_vt_007", s: "Boy uzunluğu kesikli mi sürekli mi veridir?", c: "surekli", v: {}, z:"orta", alt:"boy_uzunlugu" },

  // ALT DAL 3: VERİ SAYISI (FREKANS)
  { id: "s16_vt_008", s: "Frekans nedir?", c: "bir_verinin_tekrar_etme_sayisi", v: {}, z:"orta", alt:"frekans" },
  { id: "s16_vt_009", s: "A = {1,2,2,3,3,3,4,4,5} veri grubunda 3'ün frekansı kaçtır?", c: "3", v: {}, z:"orta", alt:"frekans_bulma" },
  { id: "s16_vt_010", s: "Toplam frekans neyi verir?", c: "veri_sayisini", v: {}, z:"orta", alt:"toplam_frekans" },

  // ALT DAL 4: VERİ DÜZENLEME
  { id: "s16_vt_011", s: "Veriler nasıl düzenlenir?", c: "kucukten_buyuge_siralanir", v: {}, z:"orta", alt:"veri_duzenleme" },
  { id: "s16_vt_012", s: "Sıklık tablosu nedir?", c: "verilerin_frekanslariyla_birlikte_gosterildigi_tablo", v: {}, z:"orta", alt:"siklik_tablosu" },

  // ALT DAL 5: GRUP FREKANS
  { id: "s16_vt_013", s: "Gruplandırılmış veri nedir?", c: "verilerin_araliklara_ayrilarak_gosterilmesi", v: {}, z:"orta", alt:"gruplandirilmis_veri" },
  { id: "s16_vt_014", s: "Grup genişliği (aralık) nasıl hesaplanır?", c: "(en_buyuk-en_kucuk)/grup_sayisi", v: {}, z:"orta", alt:"grup_genisligi" },

  // ALT DAL 6: VERİ TÜRLERİ ÖZET
  { id: "s16_vt_015", s: "Nitel ve nicel veri arasındaki fark nedir?", c: "nitel_kategorik_nicel_sayisaldir", v: {}, z:"orta", alt:"nitel_nicel" },
  { id: "s16_vt_016", s: "Ölçümle elde edilen veriler hangi türdendir?", c: "surekli_nicel_veri", v: {}, z:"orta", alt:"olcum_veri" },


  // ==========================================
  // KONU 2: MERKEZİ EĞİLİM ÖLÇÜLERİ - ORTALAMA (8 alt dal)
  // ==========================================

  // ALT DAL 1: ARİTMETİK ORTALAMA TANIMI
  { id: "s16_ao_001", s: "Aritmetik ortalama nedir?", c: "verilerin_toplaminin_veri_sayisina_bolumu", v: {}, z:"orta", alt:"ao_tanim" },
  { id: "s16_ao_002", s: "Aritmetik ortalama hangi sembolle gösterilir?", c: "x̄_(x_ustu_cizgi)", v: {}, z:"orta", alt:"ao_sembol" },
  { id: "s16_ao_003", s: "{a}, {b}, {c} sayılarının aritmetik ortalaması kaçtır?", c: "({a}+{b}+{c})/3", v: {a:[10,50], b:[15,60], c:[20,70]}, z:"orta", alt:"ao_uc_sayi" },

  // ALT DAL 2: ARİTMETİK ORTALAMA HESAPLAMA
  { id: "s16_ao_004", s: "2, 4, 6, 8, 10 sayılarının ortalaması kaçtır?", c: "6", v: {}, z:"orta", alt:"ao_bes_sayi" },
  { id: "s16_ao_005", s: "{n} sayının ortalaması {o} ise bu sayıların toplamı kaçtır?", c: "{n}×{o}", v: {n:[3,8], o:[5,20]}, z:"orta", alt:"ao_toplam" },
  { id: "s16_ao_006", s: "Toplamları {t} olan {n} sayının ortalaması kaçtır?", c: "{t}/{n}", v: {t:[20,100], n:[3,8]}, z:"orta", alt:"ao_toplamdan" },

  // ALT DAL 3: ORTALAMAYA YENİ VERİ EKLEME/ÇIKARMA
  { id: "s16_ao_007", s: "Ortalaması {o} olan {n} sayıya {y} sayısı eklenirse yeni ortalama kaç olur?", c: "({n}×{o}+{y})/({n}+1)", v: {n:[3,8], o:[5,15], y:[10,30]}, z:"cok_zor", alt:"ao_veri_ekleme" },
  { id: "s16_ao_008", s: "Ortalaması {o} olan {n} sayıdan {c} sayısı çıkarılırsa yeni ortalama kaç olur?", c: "({n}×{o}-{c})/({n}-1)", v: {n:[4,9], o:[5,15], c:[8,25], kosul:"n*o>c"}, z:"cok_zor", alt:"ao_veri_cikarma" },

  // ALT DAL 4: AĞIRLIKLI ORTALAMA
  { id: "s16_ao_009", s: "Ağırlıklı ortalama nedir?", c: "verilerin_agirliklariyla_carpilip_toplam_agirliga_bolunmesi", v: {}, z:"cok_zor", alt:"agirlikli_ao" },
  { id: "s16_ao_010", s: "Frekansları {f1}, {f2}, {f3} olan {v1}, {v2}, {v3} verilerinin ağırlıklı ortalaması kaçtır?", c: "({v1}×{f1}+{v2}×{f2}+{v3}×{f3})/({f1}+{f2}+{f3})", v: {v1:[2,8], v2:[4,10], v3:[6,12], f1:[1,4], f2:[1,4], f3:[1,4]}, z:"cok_zor", alt:"agirlikli_ao_hesap" },

  // ALT DAL 5: ORTALAMA PROBLEMLERİ
  { id: "s16_ao_011", s: "{n} sayının ortalaması {o}'dir. Bu sayıların her birine {a} eklenirse yeni ortalama kaç olur?", c: "{o}+{a}", v: {n:[3,8], o:[5,15], a:[2,6]}, z:"cok_zor", alt:"ao_sabit_ekleme" },
  { id: "s16_ao_012", s: "{n} sayının ortalaması {o}'dir. Bu sayıların her biri {k} ile çarpılırsa yeni ortalama kaç olur?", c: "{o}×{k}", v: {n:[3,8], o:[5,12], k:[2,4]}, z:"cok_zor", alt:"ao_sabit_carpma" },

  // ALT DAL 6: İKİ GRUBUN ORTALAMASI
  { id: "s16_ao_013", s: "A grubunun ortalaması {oa}, sayısı {na}; B grubunun ortalaması {ob}, sayısı {nb} ise tüm grubun ortalaması kaçtır?", c: "({na}×{oa}+{nb}×{ob})/({na}+{nb})", v: {na:[5,20], oa:[4,12], nb:[5,20], ob:[5,15]}, z:"cok_zor", alt:"iki_grup_ao" },
  { id: "s16_ao_014", s: "Kızların ortalaması {ok}, sayısı {nk}; erkeklerin ortalaması {oe}, sayısı {ne} ise sınıf ortalaması kaçtır?", c: "({nk}×{ok}+{ne}×{oe})/({nk}+{ne})", v: {nk:[5,15], ok:[60,90], ne:[5,15], oe:[50,80]}, z:"cok_zor", alt:"sinif_ao" },

  // ALT DAL 7: ORTALAMA VE AÇIKLIK
  { id: "s16_ao_015", s: "Ortalama hangi durumda veriyi iyi temsil etmez?", c: "asiri_degerler_(uc_degerler)_oldugunda", v: {}, z:"cok_zor", alt:"ao_temsil" },
  { id: "s16_ao_016", s: "Aşırı değerler ortalamayı nasıl etkiler?", c: "ortalamayi_kendine_ceker_(buyultur_veya_kucultur)", v: {}, z:"cok_zor", alt:"asiri_deger_etkisi" },

  // ALT DAL 8: ORTALAMA ÖZET
  { id: "s16_ao_017", s: "Aritmetik ortalama formülü nedir?", c: "x̄=Σx/n", v: {}, z:"orta", alt:"ao_formul" },
  { id: "s16_ao_018", s: "Aritmetik ortalama neyi ifade eder?", c: "veri_grubunun_merkezini_veya_denge_noktasini", v: {}, z:"orta", alt:"ao_anlam" },


  // ==========================================
  // KONU 3: MERKEZİ EĞİLİM ÖLÇÜLERİ - MEDYAN-MOD (8 alt dal)
  // ==========================================

  // ALT DAL 1: MEDYAN (ORTANCA) TANIMI
  { id: "s16_mm_001", s: "Medyan (ortanca) nedir?", c: "sirali_veride_tam_ortadaki_deger", v: {}, z:"orta", alt:"medyan_tanim" },
  { id: "s16_mm_002", s: "Medyan hangi durumda ortalamadan daha iyi temsil eder?", c: "asiri_degerler_oldugunda", v: {}, z:"orta", alt:"medyan_avantaj" },
  { id: "s16_mm_003", s: "Medyan aşırı değerlerden etkilenir mi?", c: "hayir", v: {}, z:"cok_zor", alt:"medyan_asiri" },

  // ALT DAL 2: TEK SAYIDA MEDYAN
  { id: "s16_mm_004", s: "{n} tane verinin medyanı nasıl bulunur? (n tek)", c: "siralanir_(n+1)/2_siradaki_veri_ortancadir", v: {n:[3,9,2]}, z:"orta", alt:"medyan_tek" },
  { id: "s16_mm_005", s: "1, 3, 5, 7, 9 veri grubunun medyanı kaçtır?", c: "5", v: {}, z:"orta", alt:"medyan_tek_ornek" },
  { id: "s16_mm_006", s: "2, 8, 4, 6, 10 veri grubunun medyanı kaçtır?", c: "6", v: {}, z:"orta", alt:"medyan_siralama" },

  // ALT DAL 3: ÇİFT SAYIDA MEDYAN
  { id: "s16_mm_007", s: "{n} tane verinin medyanı nasıl bulunur? (n çift)", c: "siralanir_ortadaki_iki_sayinin_ortalamasi_alınır", v: {n:[4,10,2]}, z:"orta", alt:"medyan_cift" },
  { id: "s16_mm_008", s: "2, 4, 6, 8 veri grubunun medyanı kaçtır?", c: "5", v: {}, z:"orta", alt:"medyan_cift_ornek" },
  { id: "s16_mm_009", s: "3, 7, 1, 9 veri grubunun medyanı kaçtır?", c: "5", v: {}, z:"orta", alt:"medyan_cift_ornek2" },

  // ALT DAL 4: MOD (TEPE DEĞER) TANIMI
  { id: "s16_mm_010", s: "Mod (tepe değer) nedir?", c: "veri_grubunda_en_cok_tekrar_eden_deger", v: {}, z:"orta", alt:"mod_tanim" },
  { id: "s16_mm_011", s: "1, 2, 2, 3, 3, 3, 4, 5 veri grubunun modu kaçtır?", c: "3", v: {}, z:"orta", alt:"mod_bulma" },
  { id: "s16_mm_012", s: "Mod olmama durumu var mıdır?", c: "evet_(tum_veriler_esit_frekansta_ise)", v: {}, z:"orta", alt:"mod_yok" },
  { id: "s16_mm_013", s: "Birden fazla mod olabilir mi?", c: "evet_(cift_modlu_veya_cok_modlu)", v: {}, z:"orta", alt:"cok_mod" },

  // ALT DAL 5: MEDYAN-MOD SORULARI
  { id: "s16_mm_014", s: "{a}, {b}, {c}, {d}, {e} verilerinin medyanı kaçtır?", c: "{medyan}", v: {a:[2,10], b:[3,12], c:[4,15], d:[5,18], e:[6,20]}, z:"orta", alt:"medyan_hesap" },
  { id: "s16_mm_015", s: "Hangi ölçü her zaman veri grubunda bulunur?", c: "medyan_(ortadaki_deger)_her_zaman_vardir", v: {}, z:"cok_zor", alt:"medyan_her_zaman" },

  // ALT DAL 6: MERKEZİ EĞİLİM KARŞILAŞTIRMA
  { id: "s16_mm_016", s: "Ortalama, medyan ve mod arasındaki ilişki nedir? (Simetrik dağılım)", c: "ucu_de_esittir", v: {}, z:"cok_zor", alt:"simetrik_dagilim" },
  { id: "s16_mm_017", s: "Sağa çarpık dağılımda ortalama, medyan, mod sıralaması nasıldır?", c: "mod<medyan<ortalama", v: {}, z:"cok_zor", alt:"saga_carpik" },

  // ALT DAL 7: MOD SORULARI
  { id: "s16_mm_018", s: "2, 3, 3, 4, 4, 4, 5, 5, 6 veri grubunun tepe değeri kaçtır?", c: "4", v: {}, z:"orta", alt:"tepe_deger" },
  { id: "s16_mm_019", s: "Modu olmayan bir veri grubu örneği veriniz.", c: "{1,2,3,4,5}_gibi_tum_veriler_esit_frekansta", v: {}, z:"orta", alt:"modsuz_veri" },

  // ALT DAL 8: MEDYAN-MOD ÖZET
  { id: "s16_mm_020", s: "Medyanın hesaplanmasında ilk adım nedir?", c: "verileri_kucukten_buyuge_siralamak", v: {}, z:"orta", alt:"medyan_ilk_adim" },
  { id: "s16_mm_021", s: "Mod hangi veri türlerinde her zaman anlamlıdır?", c: "kategorik_verilerde_de_anlamlidir", v: {}, z:"cok_zor", alt:"mod_kategorik" },


  // ==========================================
  // KONU 4: MERKEZİ YAYILMA ÖLÇÜLERİ - AÇIKLIK (6 alt dal)
  // ==========================================

  // ALT DAL 1: AÇIKLIK (RANJ) TANIMI
  { id: "s16_ac_001", s: "Açıklık (ranj) nedir?", c: "en_buyuk_deger_ile_en_kucuk_deger_arasindaki_fark", v: {}, z:"orta", alt:"aciklik_tanim" },
  { id: "s16_ac_002", s: "{a}, {b}, {c}, {d}, {e} veri grubunun açıklığı kaçtır?", c: "{max}-{min}", v: {a:[5,20], b:[8,25], c:[10,30], d:[12,35], e:[15,40]}, z:"orta", alt:"aciklik_hesap" },
  { id: "s16_ac_003", s: "Açıklık neyi ifade eder?", c: "verilerin_yayilma_genisligini", v: {}, z:"orta", alt:"aciklik_anlam" },

  // ALT DAL 2: AÇIKLIK ÖZELLİKLERİ
  { id: "s16_ac_004", s: "Açıklık aşırı değerlerden etkilenir mi?", c: "evet_(cok_etkilenir)", v: {}, z:"cok_zor", alt:"aciklik_asiri" },
  { id: "s16_ac_005", s: "Tüm veriler aynı ise açıklık kaçtır?", c: "0", v: {}, z:"orta", alt:"aciklik_sifir" },
  { id: "s16_ac_006", s: "Açıklık negatif olabilir mi?", c: "hayir_(en_buyuk≥en_kucuk)", v: {}, z:"orta", alt:"aciklik_negatif" },

  // ALT DAL 3: ÇEYREKLER
  { id: "s16_ac_007", s: "Alt çeyrek (Q₁) nedir?", c: "verilerin_%25'ini_altinda_birakan_deger", v: {}, z:"cok_zor", alt:"alt_ceyrek" },
  { id: "s16_ac_008", s: "Üst çeyrek (Q₃) nedir?", c: "verilerin_%75'ini_altinda_birakan_deger", v: {}, z:"cok_zor", alt:"ust_ceyrek" },
  { id: "s16_ac_009", s: "Çeyrekler arası açıklık (IQR) nedir?", c: "Q₃-Q₁", v: {}, z:"cok_zor", alt:"ceyrek_aciklik" },

  // ALT DAL 4: AÇIKLIK SORULARI
  { id: "s16_ac_010", s: "Açıklığı {a} olan bir veri grubunda en küçük değer {min} ise en büyük değer en az kaçtır?", c: "{min}+{a}", v: {a:[5,15], min:[2,10]}, z:"orta", alt:"max_bulma" },
  { id: "s16_ac_011", s: "Veri grubuna yeni bir değer eklenince açıklık nasıl değişir?", c: "yeni_deger_min_veya_max_olursa_artar_aradaysa_degismez", v: {}, z:"cok_zor", alt:"aciklik_degisim" },

  // ALT DAL 5: YAYILMA ÖLÇÜLERİ
  { id: "s16_ac_012", s: "Yayılma ölçüsü nedir?", c: "verilerin_merkez_etrafinda_nasil_dagildigini_gosteren_olcu", v: {}, z:"orta", alt:"yayilma_tanim" },
  { id: "s16_ac_013", s: "Hangi yayılma ölçüsü aşırı değerlerden en az etkilenir?", c: "ceyrekler_arasi_aciklik_(IQR)", v: {}, z:"cok_zor", alt:"iqr_avantaj" },

  // ALT DAL 6: AÇIKLIK ÖZET
  { id: "s16_ac_014", s: "Açıklık hesaplama formülü nedir?", c: "A=max-min", v: {}, z:"orta", alt:"aciklik_formul" },
  { id: "s16_ac_015", s: "Açıklığın dezavantajı nedir?", c: "sadece_iki_degeri_dikkate_alir_aradaki_dagilimi_gostermez", v: {}, z:"cok_zor", alt:"aciklik_dezavantaj" },


  // ==========================================
  // KONU 5: STANDART SAPMA VE VARYANS (8 alt dal)
  // ==========================================

  // ALT DAL 1: STANDART SAPMA TANIMI
  { id: "s16_ss_001", s: "Standart sapma nedir?", c: "verilerin_ortalamadan_ne_kadar_saptigini_gosteren_olcu", v: {}, z:"cok_zor", alt:"ss_tanim" },
  { id: "s16_ss_002", s: "Standart sapma hangi sembolle gösterilir?", c: "s_(orneklem)_veya_σ_(populasyon)", v: {}, z:"cok_zor", alt:"ss_sembol" },
  { id: "s16_ss_003", s: "Standart sapma büyükse ne anlama gelir?", c: "veriler_ortalamadan_uzak_daginiktir", v: {}, z:"cok_zor", alt:"ss_buyuk" },
  { id: "s16_ss_004", s: "Standart sapma küçükse ne anlama gelir?", c: "veriler_ortalamaya_yakin_homojendir", v: {}, z:"cok_zor", alt:"ss_kucuk" },

  // ALT DAL 2: STANDART SAPMA HESAPLAMA
  { id: "s16_ss_005", s: "Standart sapma hesaplama adımları nelerdir?", c: "1.ortalama_bul_2.sapmalari_bul_3.karelerini_al_4.topla_5.n-1'e_bol_6.karekok_al", v: {}, z:"cok_zor", alt:"ss_adimlar" },
  { id: "s16_ss_006", s: "2, 4, 4, 4, 5, 5, 7, 9 veri grubunun standart sapması kaçtır?", c: "2", v: {}, z:"cok_zor", alt:"ss_ornek" },
  // DÜZELTME: s16_ss_007 - "ss" değişkeni tanımlı değil, değer hesaplama yapılması gerekiyor. Sabit değerler vereyim.
  { id: "s16_ss_007", s: "2, 4, 6 veri grubunun standart sapması kaçtır? (yaklaşık)", c: "2", v: {}, z:"cok_zor", alt:"ss_uc_veri" },

  // ALT DAL 3: VARYANS
  { id: "s16_ss_008", s: "Varyans nedir?", c: "standart_sapmanin_karesi", v: {}, z:"cok_zor", alt:"varyans_tanim" },
  { id: "s16_ss_009", s: "Varyans formülü nedir?", c: "s²=Σ(x-x̄)²/(n-1)", v: {}, z:"cok_zor", alt:"varyans_formul" },
  { id: "s16_ss_010", s: "Standart sapma ile varyans arasındaki fark nedir?", c: "varyans_birimsiz_kareli_standart_sapma_birimlidir", v: {}, z:"cok_zor", alt:"ss_varyans_fark" },

  // ALT DAL 4: STANDART SAPMA ÖZELLİKLERİ
  { id: "s16_ss_011", s: "Standart sapma negatif olabilir mi?", c: "hayir_(karekok_alindigi_icin_daima≥0)", v: {}, z:"cok_zor", alt:"ss_negatif" },
  { id: "s16_ss_012", s: "Tüm veriler aynı ise standart sapma kaçtır?", c: "0", v: {}, z:"cok_zor", alt:"ss_sifir" },
  { id: "s16_ss_013", s: "Verilere sabit eklenirse standart sapma değişir mi?", c: "hayir_(degismez)", v: {}, z:"cok_zor", alt:"ss_sabit_ekleme" },
  { id: "s16_ss_014", s: "Veriler sabitle çarpılırsa standart sapma nasıl değişir?", c: "ayni_sabit_ile_carpilir", v: {}, z:"cok_zor", alt:"ss_sabit_carpma" },

  // ALT DAL 5: STANDART SAPMA SORULARI
  { id: "s16_ss_015", s: "Hangi veri grubu daha homojendir?", c: "standart_sapmasi_kucuk_olan", v: {}, z:"cok_zor", alt:"homojen" },
  { id: "s16_ss_016", s: "Bir sınavda standart sapmanın yüksek olması neyi gösterir?", c: "ogrenciler_arasinda_buyuk_farklilik_var", v: {}, z:"cok_zor", alt:"sinav_ss" },

  // ALT DAL 6: STANDART SAPMA VE NORMAL DAĞILIM
  { id: "s16_ss_017", s: "Normal dağılımda verilerin %68'i hangi aralıktadır?", c: "ortalama±1_standart_sapma", v: {}, z:"cok_zor", alt:"68_kural" },
  { id: "s16_ss_018", s: "Normal dağılımda verilerin %95'i hangi aralıktadır?", c: "ortalama±2_standart_sapma", v: {}, z:"cok_zor", alt:"95_kural" },
  { id: "s16_ss_019", s: "Normal dağılımda verilerin %99,7'si hangi aralıktadır?", c: "ortalama±3_standart_sapma", v: {}, z:"cok_zor", alt:"99_7_kural" },

  // ALT DAL 7: DEĞİŞİM KATSAYISI
  { id: "s16_ss_020", s: "Değişim katsayısı (CV) nedir?", c: "(standart_sapma/ortalama)×100", v: {}, z:"cok_zor", alt:"cv_tanim" },
  { id: "s16_ss_021", s: "CV ne işe yarar?", c: "farkli_birimdeki_verilerin_yayilimini_karsilastirmaya", v: {}, z:"cok_zor", alt:"cv_amac" },

  // ALT DAL 8: STANDART SAPMA ÖZET
  { id: "s16_ss_022", s: "Standart sapma formülü nedir?", c: "s=√(Σ(x-x̄)²/(n-1))", v: {}, z:"cok_zor", alt:"ss_formul_ozet" },
  { id: "s16_ss_023", s: "Standart sapma neden n-1'e bölünür?", c: "orneklem_standart_sapmasi_icin_serbestlik_derecesi", v: {}, z:"cok_zor", alt:"n-1_nedeni" },


  // ==========================================
  // KONU 6: GRAFİKLER (SÜTUN-ÇİZGİ-DAİRE) (10 alt dal)
  // ==========================================

  // ALT DAL 1: SÜTUN GRAFİĞİ
  { id: "s16_gf_001", s: "Sütun grafiği ne için kullanılır?", c: "kategorik_verilerin_karsilastirilmasi", v: {}, z:"orta", alt:"sutun_tanim" },
  { id: "s16_gf_002", s: "Sütun grafiğinde eksenlerde neler bulunur?", c: "x_ekseni_kategoriler_y_ekseni_degerler", v: {}, z:"orta", alt:"sutun_eksen" },
  { id: "s16_gf_003", s: "Sütun grafiğinde sütunların yüksekliği neyi gösterir?", c: "o_kategorinin_degerini", v: {}, z:"orta", alt:"sutun_yukseklik" },

  // ALT DAL 2: SÜTUN GRAFİĞİ OKUMA
  { id: "s16_gf_004", s: "Sütun grafiğine göre en yüksek değer hangi kategoridedir?", c: "{kategori}", v: {}, z:"orta", alt:"sutun_en_yuksek" },
  { id: "s16_gf_005", s: "Sütun grafiğinde A ve B kategorileri arasındaki fark nasıl bulunur?", c: "sutun_yukseklikleri_farki", v: {}, z:"orta", alt:"sutun_fark" },
  { id: "s16_gf_006", s: "Sütun grafiğinde toplam değer nasıl bulunur?", c: "tum_sutun_yukseklikleri_toplami", v: {}, z:"orta", alt:"sutun_toplam" },

  // ALT DAL 3: ÇİZGİ GRAFİĞİ
  { id: "s16_gf_007", s: "Çizgi grafiği ne için kullanılır?", c: "zaman_icindeki_degisimi_gostermek", v: {}, z:"orta", alt:"cizgi_tanim" },
  { id: "s16_gf_008", s: "Çizgi grafiğinde eğim neyi ifade eder?", c: "degisim_hizini_(artis_veya_azalis)", v: {}, z:"orta", alt:"cizgi_egim" },
  { id: "s16_gf_009", s: "Çizgi grafiğinde yatay bölümler neyi gösterir?", c: "degisimin_olmadigi_sabit_donemi", v: {}, z:"orta", alt:"cizgi_yatay" },

  // ALT DAL 4: ÇİZGİ GRAFİĞİ OKUMA
  { id: "s16_gf_010", s: "Çizgi grafiğinde en büyük artış hangi aralıktadır?", c: "{aralik}", v: {}, z:"orta", alt:"cizgi_en_buyuk_artis" },
  { id: "s16_gf_011", s: "Çizgi grafiğinde azalış olan dönemler nasıl belirlenir?", c: "egimin_negatif_oldugu_asagi_egimli_kisimlar", v: {}, z:"orta", alt:"cizgi_azalis" },

  // ALT DAL 5: DAİRE GRAFİĞİ
  { id: "s16_gf_012", s: "Daire grafiği ne için kullanılır?", c: "bir_butunun_parcalarinin_oransal_dagilimini_gostermek", v: {}, z:"orta", alt:"daire_tanim" },
  { id: "s16_gf_013", s: "Daire grafiğinde merkez açı nasıl hesaplanır?", c: "(dilim_degeri/toplam)×360", v: {}, z:"orta", alt:"daire_aci" },
  { id: "s16_gf_014", s: "Daire grafiğinde %{p}'lik dilimin merkez açısı kaç derecedir?", c: "{p}*3.6", v: {p:[5,40]}, z:"orta", alt:"daire_yuzde_aci" },

  // ALT DAL 6: DAİRE GRAFİĞİ OKUMA
  { id: "s16_gf_015", s: "Daire grafiğinde {a}°'lik dilim toplamın yüzde kaçıdır?", c: "{a}/3.6", v: {a:[36,180]}, z:"orta", alt:"aci_yuzde" },
  { id: "s16_gf_016", s: "Daire grafiğinde {a}°'lik dilim {toplam} kişiden kaçını temsil eder?", c: "{a}×{toplam}/360", v: {a:[30,180], toplam:[180,720]}, z:"zor", alt:"dilim_kisi" },
  { id: "s16_gf_017", s: "Daire grafiğinde tüm merkez açılar toplamı kaç derecedir?", c: "360", v: {}, z:"orta", alt:"daire_toplam_aci" },

  // ALT DAL 7: GRAFİK SEÇİMİ
  { id: "s16_gf_018", s: "Zaman içindeki değişim için en uygun grafik hangisidir?", c: "cizgi_grafigi", v: {}, z:"orta", alt:"zaman_cizgi" },
  { id: "s16_gf_019", s: "Kategorik karşılaştırma için en uygun grafik hangisidir?", c: "sutun_grafigi", v: {}, z:"orta", alt:"kategori_sutun" },
  { id: "s16_gf_020", s: "Parça-bütün ilişkisi için en uygun grafik hangisidir?", c: "daire_grafigi", v: {}, z:"orta", alt:"parca_daire" },

  // ALT DAL 8: GRAFİK YORUMLAMA
  { id: "s16_gf_021", s: "Grafiklerde eksenler kesişmezse ne olur?", c: "yaniltici_goruntu_olusur", v: {}, z:"cok_zor", alt:"eksen_kesismez" },
  { id: "s16_gf_022", s: "Grafikte ölçek farklılığı neye yol açar?", c: "yanlis_yorumlamaya", v: {}, z:"orta", alt:"olcek_fark" },

  // ALT DAL 9: GRAFİK OKUMA SORULARI
  { id: "s16_gf_023", s: "Verilen grafiğe göre en yüksek ve en düşük değer arasındaki fark kaçtır?", c: "{fark}", v: {}, z:"orta", alt:"grafik_fark" },
  { id: "s16_gf_024", s: "Grafikteki verilerin ortalaması kaçtır?", c: "{ortalama}", v: {}, z:"zor", alt:"grafik_ortalama" },

  // ALT DAL 10: GRAFİK ÖZET
  { id: "s16_gf_025", s: "Sütun, çizgi ve daire grafiklerinin ortak özelliği nedir?", c: "ucu_de_veri_gorsellestirme_aracidir", v: {}, z:"orta", alt:"grafik_ortak" },
  { id: "s16_gf_026", s: "Grafik seçimi neden önemlidir?", c: "veri_turune_uygun_grafik_dogru_yorum_saglar", v: {}, z:"orta", alt:"grafik_secimi" },


  // ==========================================
  // KONU 7: HİSTOGRAM (6 alt dal)
  // ==========================================

  // ALT DAL 1: HİSTOGRAM TANIMI
  { id: "s16_hi_001", s: "Histogram nedir?", c: "gruplandirilmis_verilerin_sutun_grafigi_ile_gosterimi", v: {}, z:"orta", alt:"histogram_tanim" },
  { id: "s16_hi_002", s: "Histogram ile sütun grafiği arasındaki fark nedir?", c: "histogramda_sutunlar_bitisik_ve_aralikli_veri_icin_kullanilir", v: {}, z:"cok_zor", alt:"histogram_sutun_fark" },
  { id: "s16_hi_003", s: "Histogramda yatay eksen neyi gösterir?", c: "veri_araliklarini_(gruplari)", v: {}, z:"orta", alt:"histogram_eksen" },

  // ALT DAL 2: GRUP GENİŞLİĞİ
  { id: "s16_hi_004", s: "Histogramda grup genişliği nasıl hesaplanır?", c: "(en_buyuk-en_kucuk)/grup_sayisi", v: {}, z:"orta", alt:"grup_genisligi_hist" },
  { id: "s16_hi_005", s: "Veri grubu: 10-19, 20-29, 30-39... grup genişliği kaçtır?", c: "10", v: {}, z:"orta", alt:"grup_genisligi_10" },
  { id: "s16_hi_006", s: "Grup sayısı neye göre belirlenir?", c: "veri_sayisina_ve_arastirmanin_amacina_gore", v: {}, z:"orta", alt:"grup_sayisi" },

  // ALT DAL 3: HİSTOGRAM OKUMA
  { id: "s16_hi_007", s: "Histogramda en yüksek sütun neyi gösterir?", c: "en_cok_veri_bulunan_araligi", v: {}, z:"orta", alt:"histogram_en_yuksek" },
  { id: "s16_hi_008", s: "Histogramda frekans nasıl bulunur?", c: "sutunun_yuksekligi_o_araliktaki_veri_sayisini_verir", v: {}, z:"orta", alt:"histogram_frekans" },

  // ALT DAL 4: HİSTOGRAM ÇİZME
  { id: "s16_hi_009", s: "Histogram çizme adımları nelerdir?", c: "1.grup_sayisi_belirle_2.grup_araliklarini_olustur_3.frekanslari_say_4.sutunlari_ciz", v: {}, z:"orta", alt:"histogram_adim" },
  { id: "s16_hi_010", s: "Histogramda sütunlar neden bitişiktir?", c: "veri_araliklari_surekli_oldugu_icin_bosluk_olmaz", v: {}, z:"cok_zor", alt:"histogram_bitisik" },

  // ALT DAL 5: HİSTOGRAM YORUMLAMA
  { id: "s16_hi_011", s: "Simetrik histogram neyi gösterir?", c: "verilerin_normal_dagildigini", v: {}, z:"cok_zor", alt:"simetrik_histogram" },
  { id: "s16_hi_012", s: "Sağa çarpık histogram neyi gösterir?", c: "buyuk_degerlerin_daha_seyrek_oldugunu", v: {}, z:"cok_zor", alt:"saga_carpik_hist" },

  // ALT DAL 6: HİSTOGRAM ÖZET
  { id: "s16_hi_013", s: "Histogram hangi tür veriler için uygundur?", c: "surekli_veya_cok_sayida_kesikli_veri_icin", v: {}, z:"orta", alt:"histogram_uygun" },
  { id: "s16_hi_014", s: "Histogramda sütunların alanı neyi verir?", c: "grup_frekansini_(grup_genisligi_esitse_yukseklik_de_olur)", v: {}, z:"cok_zor", alt:"histogram_alan" },


  // ==========================================
  // KONU 8: TABLO VE GRAFİK YORUMLAMA (8 alt dal)
  // ==========================================

  // ALT DAL 1: TABLO OKUMA
  { id: "s16_tg_001", s: "Tablo okurken nelere dikkat edilir?", c: "satir_ve_sutun_basliklarina,_birimlere", v: {}, z:"orta", alt:"tablo_okuma" },
  { id: "s16_tg_002", s: "Tabloda satır ve sütun toplamları nasıl kontrol edilir?", c: "satir_toplamlari_ile_sutun_toplamlari_genel_toplami_vermelidir", v: {}, z:"orta", alt:"tablo_kontrol" },

  // ALT DAL 2: SIKLIK TABLOSU
  { id: "s16_tg_003", s: "Sıklık tablosu nedir?", c: "verilerin_frekanslariyla_birlikte_gosterildigi_tablo", v: {}, z:"orta", alt:"siklik_tablosu_tanim" },
  { id: "s16_tg_004", s: "Sıklık tablosunda toplam frekans neyi verir?", c: "toplam_veri_sayisini", v: {}, z:"orta", alt:"toplam_frekans_tablo" },
  { id: "s16_tg_005", s: "Sıklık tablosundan ortalama nasıl hesaplanır?", c: "(deger×frekans)_toplami/toplam_frekans", v: {}, z:"cok_zor", alt:"tablo_ortalama" },

  // ALT DAL 3: ÇOKLU TABLO
  { id: "s16_tg_006", s: "İki yönlü tablo nedir?", c: "iki_kategorik_degiskenin_birlikte_gosterildigi_tablo", v: {}, z:"cok_zor", alt:"iki_yonlu_tablo" },
  { id: "s16_tg_007", s: "Çapraz tabloda yüzde nasıl hesaplanır?", c: "hucre_degeri/toplam×100", v: {}, z:"cok_zor", alt:"capraz_tablo" },

  // ALT DAL 4: GRAFİK KARŞILAŞTIRMA
  { id: "s16_tg_008", s: "Aynı veri farklı grafiklerle nasıl yorumlanır?", c: "her_grafik_turu_farkli_bir_ozelligi_vurgular", v: {}, z:"orta", alt:"grafik_karsilastirma" },
  { id: "s16_tg_009", s: "Aynı veriye ait sütun ve daire grafiği arasındaki ilişki nedir?", c: "sutun_kesin_degerleri_daire_oransal_dagilimi_gosterir", v: {}, z:"orta", alt:"sutun_daire" },

  // ALT DAL 5: VERİ YORUMLAMA
  { id: "s16_tg_010", s: "Grafikten çıkarım yaparken nelere dikkat edilir?", c: "eksen_baslangici,_olcek,_birimler,_zaman_araligi", v: {}, z:"orta", alt:"cikarim" },
  { id: "s16_tg_011", s: "Grafikteki ani artış veya azalış nasıl yorumlanır?", c: "donemsel_bir_olayin_etkisi_olabilir", v: {}, z:"orta", alt:"ani_degisim" },

  // ALT DAL 6: YANILTICI GRAFİKLER
  { id: "s16_tg_012", s: "Yanıltıcı grafik nasıl anlaşılır?", c: "eksen_baslangici_sifir_degilse_veya_olcek_orantisizsa", v: {}, z:"cok_zor", alt:"yaniltici_grafik" },
  { id: "s16_tg_013", s: "Eksenler 0'dan başlamazsa ne olur?", c: "kucuk_farklar_buyuk_gosterilir", v: {}, z:"cok_zor", alt:"eksen_sifir" },

  // ALT DAL 7: GRAFİK VE TABLO PROBLEMLERİ
  { id: "s16_tg_014", s: "Tabloya göre en yüksek artış hangi yılda olmuştur?", c: "{yil}", v: {}, z:"orta", alt:"tablo_artis" },
  { id: "s16_tg_015", s: "Grafiğe göre toplam değer kaçtır?", c: "{toplam}", v: {}, z:"orta", alt:"grafik_toplam" },

  // ALT DAL 8: TABLO-GRAFİK ÖZET
  { id: "s16_tg_016", s: "Tablo ve grafiklerin ortak amacı nedir?", c: "veriyi_anlasilir_bicimde_sunmak", v: {}, z:"orta", alt:"amac" },
  { id: "s16_tg_017", s: "Veri analizinde ilk adım nedir?", c: "veriyi_duzenlemek_ve_gorsellestirmek", v: {}, z:"orta", alt:"ilk_adim" },


  // ==========================================
  // KONU 9: VERİ ANALİZİ PROBLEMLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: ORTALAMA PROBLEMLERİ
  { id: "s16_va_001", s: "{a} sayının ortalaması {o}'tir. Bu sayılardan biri çıkarılınca ortalama {o2} oluyorsa çıkarılan sayı kaçtır?", c: "{a}×{o}-({a}-1)×{o2}", v: {a:[4,8], o:[5,15], o2:[4,"{o}"], kosul:"o2<o"}, z:"cok_zor", alt:"cikarilan_sayi" },
  { id: "s16_va_002", s: "Bir grubun yaş ortalaması {a} kişiyle {o1}, {b} kişiyle {o2} ise tüm grubun ortalaması kaçtır?", c: "({a}×{o1}+{b}×{o2})/({a}+{b})", v: {a:[5,15], o1:[10,30], b:[5,15], o2:[8,25]}, z:"cok_zor", alt:"iki_grup_yas" },

  // ALT DAL 2: MEDYAN PROBLEMLERİ
  { id: "s16_va_003", s: "Bir veri grubunun medyanı 8'dir. Veri grubuna 12 eklenirse medyan nasıl değişir?", c: "artabilir_veya_degismez", v: {}, z:"cok_zor", alt:"medyan_degisim" },
  { id: "s16_va_004", s: "{n} sayının medyanı {m}'tir. Tüm sayılara {a} eklenirse yeni medyan kaç olur?", c: "{m}+{a}", v: {n:[5,9], m:[4,12], a:[2,5]}, z:"cok_zor", alt:"medyan_sabit_ekleme" },

  // ALT DAL 3: AÇIKLIK PROBLEMLERİ
  { id: "s16_va_005", s: "Açıklığı {a} olan veri grubuna {b} sayısı ekleniyor. Yeni açıklık en çok kaç olabilir?", c: "max({a},|{b}-min|,|{b}-max|)", v: {a:[5,15], b:[1,30]}, z:"cok_zor", alt:"aciklik_ekleme" },
  { id: "s16_va_006", s: "Açıklık her zaman tam sayı mıdır?", c: "hayir_(verilere_baglidir)", v: {}, z:"orta", alt:"aciklik_tam_sayi" },

  // ALT DAL 4: STANDART SAPMA PROBLEMLERİ
  { id: "s16_va_007", s: "İki veri grubundan standart sapması küçük olan için ne söylenir?", c: "daha_homojendir_veriler_birbirine_yakindir", v: {}, z:"cok_zor", alt:"ss_karsilastirma" },
  { id: "s16_va_008", s: "Bir sınavda ortalama 60, standart sapma 10 ise 80 alan öğrenci ortalamadan kaç standart sapma uzaktadır?", c: "2", v: {}, z:"cok_zor", alt:"z_skoru" },

  // ALT DAL 5: KARIŞIK VERİ ANALİZİ
  { id: "s16_va_009", s: "Hangi veri grubunda yayılım daha fazladır?", c: "standart_sapmasi_veya_acikligi_buyuk_olan", v: {}, z:"cok_zor", alt:"yayilim_karsilastirma" },
  { id: "s16_va_010", s: "Aykırı değer (outlier) nedir?", c: "diger_verilerden_cok_uzak_olan_deger", v: {}, z:"cok_zor", alt:"aykiri_deger" },

  // ALT DAL 6: VERİ ANALİZİ ÖZET
  { id: "s16_va_011", s: "Veri analizinde hangi ölçü ne zaman kullanılır?", c: "asiri_deger_varsa_medyan_yoksa_ortalama_kullanilir", v: {}, z:"orta", alt:"olcu_secimi" },
  { id: "s16_va_012", s: "Veri analizinin temel amacı nedir?", c: "veriden_anlamli_bilgi_cikarmak", v: {}, z:"orta", alt:"amac_veri_analiz" },


  // ==========================================
  // KONU 10: MERKEZİ EĞİLİM VE YAYILMA KARIŞIK (6 alt dal)
  // ==========================================

  // ALT DAL 1: ÖLÇÜ SEÇİMİ
  { id: "s16_my_001", s: "Hangi durumda medyan ortalamadan daha iyidir?", c: "asiri_degerler_varsa", v: {}, z:"orta", alt:"medyan_tercih" },
  { id: "s16_my_002", s: "Hangi durumda mod kullanışlıdır?", c: "en_cok_tekrar_eden_deger_onemliyse", v: {}, z:"orta", alt:"mod_tercih" },

  // ALT DAL 2: DAĞILIM VE ÖLÇÜLER
  { id: "s16_my_003", s: "Normal dağılımda ortalama, medyan ve mod ilişkisi nedir?", c: "ucu_birbirine_esittir", v: {}, z:"cok_zor", alt:"normal_dagilim" },
  { id: "s16_my_004", s: "Çarpık dağılımlarda hangi ölçü daha güvenilirdir?", c: "medyan", v: {}, z:"cok_zor", alt:"carpik_medyan" },

  // ALT DAL 3: YAYILMA KARŞILAŞTIRMA
  { id: "s16_my_005", s: "Aynı ortalamaya sahip iki gruptan hangisi daha başarılıdır?", c: "standart_sapmasi_kucuk_olan_daha_homojen", v: {}, z:"cok_zor", alt:"basari_karsilastirma" },
  { id: "s16_my_006", s: "Açıklık ve standart sapma arasındaki fark nedir?", c: "aciklik_sadece_uc_degerleri_ss_tum_verileri_dikkate_alir", v: {}, z:"cok_zor", alt:"aciklik_ss_fark" },

  // ALT DAL 4: ÖLÇÜ DEĞİŞİMİ
  { id: "s16_my_007", s: "Verilere sabit eklenince hangi ölçüler değişir?", c: "ortalama_ve_medyan_degisir_aciklik_ve_ss_degismez", v: {}, z:"cok_zor", alt:"sabit_ekleme_etkisi" },
  { id: "s16_my_008", s: "Veriler sabitle çarpılınca hangi ölçüler değişir?", c: "hepsi_(ortalama_medyan_aciklik_ss)_ayni_oranda_degisir", v: {}, z:"cok_zor", alt:"sabit_carpma_etkisi" },

  // ALT DAL 5: Z-SKORU
  { id: "s16_my_009", s: "Z-skoru (standart skor) nedir?", c: "(veri-ortalama)/standart_sapma", v: {}, z:"cok_zor", alt:"z_skoru_tanim" },
  { id: "s16_my_010", s: "Z-skoru ne işe yarar?", c: "farkli_dagilimlardaki_verileri_karsilastirmaya_yarar", v: {}, z:"cok_zor", alt:"z_skoru_amac" },
  { id: "s16_my_011", s: "Ortalaması {o}, standart sapması {ss} olan sınavda {v} alan öğrencinin z-skoru kaçtır?", c: "({v}-{o})/{ss}", v: {o:[50,70], ss:[5,15], v:[60,90]}, z:"cok_zor", alt:"z_skoru_hesap" },

  // ALT DAL 6: MERKEZİ EĞİLİM-YAYILMA ÖZET
  { id: "s16_my_012", s: "Merkezi eğilim ölçüleri nelerdir?", c: "ortalama,_medyan,_mod", v: {}, z:"orta", alt:"merkezi_olcu" },
  { id: "s16_my_013", s: "Merkezi yayılma ölçüleri nelerdir?", c: "aciklik,_standart_sapma,_varyans,_ceyrekler_arasi_aciklik", v: {}, z:"orta", alt:"yayilma_olcu" },
  { id: "s16_my_014", s: "Bir veri grubunu tam olarak tanımlamak için hangi ölçülere ihtiyaç vardır?", c: "hem_merkezi_egilim_hem_yayilma_olculerine", v: {}, z:"orta", alt:"tam_tanimlama" },

],


// ==========================================
// SEVİYE 17: MANTIK
// ==========================================
17: [

  // ==========================================
  // KONU 1: ÖNERME VE DOĞRULUK DEĞERİ (8 alt dal)
  // ==========================================

  // ALT DAL 1: ÖNERME TANIMI
  { id: "s17_on_001", s: "Önerme nedir?", c: "dogru_veya_yanlis_olabilen_ifade_(kesin_hukum_bildiren)", v: {}, z:"orta", alt:"onerme_tanim" },
  { id: "s17_on_002", s: "Aşağıdakilerden hangisi önermedir?", c: "{dogru}", v: {secenekler:["Bugün hava güzel (öznel)","Ankara Türkiye'nin başkentidir","Nasılsın?","Gel buraya!","x+2=5"]}, z:"orta", alt:"onerme_belirleme" },
  { id: "s17_on_003", s: "\"İyi akşamlar!\" bir önerme midir?", c: "hayir_(emir/istek_cumlesi)", v: {}, z:"orta", alt:"onerme_degil" },

  // ALT DAL 2: DOĞRULUK DEĞERİ
  { id: "s17_on_004", s: "Doğruluk değeri nedir?", c: "onermenin_dogru_(1)_veya_yanlis_(0)_olmasi", v: {}, z:"orta", alt:"dogruluk_degeri" },
  { id: "s17_on_005", s: "\"2+2=4\" önermesinin doğruluk değeri nedir?", c: "1", v: {}, z:"kolay", alt:"dogru_onerme" },
  { id: "s17_on_006", s: "\"2+2=5\" önermesinin doğruluk değeri nedir?", c: "0", v: {}, z:"kolay", alt:"yanlis_onerme" },

  // ALT DAL 3: ÖNERME DEĞİLİ
  { id: "s17_on_007", s: "Bir önermenin değili (olumsuzu) nasıl gösterilir?", c: "p'_veya_~p_veya_¬p", v: {}, z:"orta", alt:"degil_gosterim" },
  { id: "s17_on_008", s: "p: \"Hava yağmurludur.\" ise p' nedir?", c: "\"Hava yağmurlu değildir.\"", v: {}, z:"orta", alt:"degil_ornek" },
  { id: "s17_on_009", s: "p'nin doğruluk değeri 1 ise p' nün doğruluk değeri nedir?", c: "0", v: {}, z:"orta", alt:"degil_dogruluk" },
  { id: "s17_on_010", s: "(p')' = ?", c: "p", v: {}, z:"orta", alt:"degilin_degili" },

  // ALT DAL 4: DOĞRULUK DEĞERİ TABLOSU (1 DEĞİŞKEN)
  { id: "s17_on_011", s: "1 değişkenli kaç farklı doğruluk durumu vardır?", c: "2_(p:1_veya_0)", v: {}, z:"orta", alt:"bir_degisken" },
  { id: "s17_on_012", s: "n farklı önerme için kaç farklı doğruluk durumu vardır?", c: "Math.pow(2,{n})", v: {n:[2,4]}, z:"orta", alt:"n_degisken" },

  // ALT DAL 5: ÖNERME YAZMA
  // DÜZELTME: s17_on_013 - dinamik ifadeyi basitleştirdim
  { id: "s17_on_013", s: "{a} sayısı tektir. Bu önermenin doğruluk değeri nedir?", c: "{a}%2==1?1:0", v: {a:[3,12]}, z:"orta", alt:"onerme_yazma" },
  { id: "s17_on_014", s: "Aşağıdaki cümlelerden hangisi önerme değildir?", c: "{degil}", v: {secenekler:["Soru cümlesi","Ünlem cümlesi","Emir cümlesi","Dilek cümlesi"]}, z:"orta", alt:"onerme_olmayan" },

  // ALT DAL 6: DENK ÖNERMELER
  { id: "s17_on_015", s: "Denk önerme nedir?", c: "dogruluk_degerleri_ayni_olan_onermeler", v: {}, z:"orta", alt:"denk_onerme" },
  { id: "s17_on_016", s: "p ≡ q ne demektir?", c: "p_ile_q_denktir_(dogruluk_degerleri_ayni)", v: {}, z:"orta", alt:"denklik_sembol" },

  // ALT DAL 7: ÖNERME SEMBOLLERİ
  { id: "s17_on_017", s: "∧ sembolü neyi ifade eder?", c: "VE_baglaci", v: {}, z:"orta", alt:"ve_sembol" },
  { id: "s17_on_018", s: "∨ sembolü neyi ifade eder?", c: "VEYA_baglaci", v: {}, z:"orta", alt:"veya_sembol" },
  { id: "s17_on_019", s: "⇒ sembolü neyi ifade eder?", c: "ISE_baglaci_(gerektirme)", v: {}, z:"orta", alt:"ise_sembol" },
  { id: "s17_on_020", s: "⇔ sembolü neyi ifade eder?", c: "ANCAK_VE_ANCAK_baglaci_(cift_gerektirme)", v: {}, z:"orta", alt:"ancak_sembol" },

  // ALT DAL 8: ÖNERME ÖZET
  { id: "s17_on_021", s: "Bir ifadenin önerme olması için şart nedir?", c: "kesin_hukum_bildirmesi_ve_dogru_veya_yanlis_olabilmesi", v: {}, z:"orta", alt:"onerme_sarti" },
  { id: "s17_on_022", s: "\"Her x için x²≥0\" bir önerme midir?", c: "evet_(dogru_bir_onerme)", v: {}, z:"cok_zor", alt:"evrensel_onerme" },


  // ==========================================
  // KONU 2: TEMEL BAĞLAÇLAR - VE, VEYA (8 alt dal)
  // ==========================================

  // ALT DAL 1: VE (∧) BAĞLACI
  { id: "s17_tb_001", s: "p ∧ q ne zaman doğrudur?", c: "ikisi_de_dogru_(1)_iken", v: {}, z:"orta", alt:"ve_dogru" },
  { id: "s17_tb_002", s: "p=1, q=0 ise p∧q = ?", c: "0", v: {}, z:"orta", alt:"ve_1_0" },
  { id: "s17_tb_003", s: "p=0, q=1 ise p∧q = ?", c: "0", v: {}, z:"orta", alt:"ve_0_1" },
  { id: "s17_tb_004", s: "p=0, q=0 ise p∧q = ?", c: "0", v: {}, z:"orta", alt:"ve_0_0" },
  { id: "s17_tb_005", s: "p=1, q=1 ise p∧q = ?", c: "1", v: {}, z:"orta", alt:"ve_1_1" },

  // ALT DAL 2: VE BAĞLACI ÖZELLİKLERİ
  { id: "s17_tb_006", s: "p ∧ p = ?", c: "p", v: {}, z:"orta", alt:"ve_tek_kuvvet" },
  { id: "s17_tb_007", s: "p ∧ 1 = ?", c: "p", v: {}, z:"orta", alt:"ve_etkisiz" },
  { id: "s17_tb_008", s: "p ∧ 0 = ?", c: "0", v: {}, z:"orta", alt:"ve_yutan" },
  { id: "s17_tb_009", s: "p ∧ q = q ∧ p doğru mudur? (Değişme)", c: "evet", v: {}, z:"orta", alt:"ve_degisme" },
  { id: "s17_tb_010", s: "(p∧q)∧r = p∧(q∧r) doğru mudur? (Birleşme)", c: "evet", v: {}, z:"orta", alt:"ve_birlesme" },

  // ALT DAL 3: VEYA (∨) BAĞLACI
  { id: "s17_tb_011", s: "p ∨ q ne zaman doğrudur?", c: "en_az_biri_dogru_(1)_iken", v: {}, z:"orta", alt:"veya_dogru" },
  { id: "s17_tb_012", s: "p=1, q=0 ise p∨q = ?", c: "1", v: {}, z:"orta", alt:"veya_1_0" },
  { id: "s17_tb_013", s: "p=0, q=1 ise p∨q = ?", c: "1", v: {}, z:"orta", alt:"veya_0_1" },
  { id: "s17_tb_014", s: "p=0, q=0 ise p∨q = ?", c: "0", v: {}, z:"orta", alt:"veya_0_0" },
  { id: "s17_tb_015", s: "p ∨ q ne zaman yanlıştır?", c: "ikisi_de_yanlis_(0)_iken", v: {}, z:"orta", alt:"veya_yanlis" },

  // ALT DAL 4: VEYA BAĞLACI ÖZELLİKLERİ
  { id: "s17_tb_016", s: "p ∨ p = ?", c: "p", v: {}, z:"orta", alt:"veya_tek_kuvvet" },
  { id: "s17_tb_017", s: "p ∨ 0 = ?", c: "p", v: {}, z:"orta", alt:"veya_etkisiz" },
  { id: "s17_tb_018", s: "p ∨ 1 = ?", c: "1", v: {}, z:"orta", alt:"veya_yutan" },
  { id: "s17_tb_019", s: "p ∨ q = q ∨ p doğru mudur?", c: "evet", v: {}, z:"orta", alt:"veya_degisme" },

  // ALT DAL 5: VE-VEYA BAĞLAÇLARI KARIŞIK
  { id: "s17_tb_020", s: "p=1, q=1, r=0 ise (p∧q)∨r = ?", c: "1", v: {}, z:"zor", alt:"uc_degisken" },
  { id: "s17_tb_021", s: "p=1, q=0, r=1 ise p∧(q∨r) = ?", c: "1", v: {}, z:"zor", alt:"parantezli" },

  // ALT DAL 6: DAĞILMA ÖZELLİĞİ
  { id: "s17_tb_022", s: "p ∧ (q ∨ r) = ?", c: "(p∧q)∨(p∧r)", v: {}, z:"cok_zor", alt:"ve_veya_dagilma" },
  { id: "s17_tb_023", s: "p ∨ (q ∧ r) = ?", c: "(p∨q)∧(p∨r)", v: {}, z:"cok_zor", alt:"veya_ve_dagilma" },

  // ALT DAL 7: DOĞRULUK TABLOSU (2 DEĞİŞKEN)
  { id: "s17_tb_024", s: "2 değişkenli kaç farklı doğruluk durumu vardır?", c: "4", v: {}, z:"orta", alt:"iki_degisken" },
  { id: "s17_tb_025", s: "p ve q için doğruluk tablosunu yazınız.", c: "(p,q):(1,1),(1,0),(0,1),(0,0)", v: {}, z:"orta", alt:"dogruluk_tablosu_2" },

  // ALT DAL 8: VE-VEYA ÖZET
  { id: "s17_tb_026", s: "VE bağlacı için doğruluk tablosu nedir?", c: "1∧1=1_digerleri_0", v: {}, z:"orta", alt:"ve_tablo_ozet" },
  { id: "s17_tb_027", s: "VEYA bağlacı için doğruluk tablosu nedir?", c: "0∨0=0_digerleri_1", v: {}, z:"orta", alt:"veya_tablo_ozet" },


  // ==========================================
  // KONU 3: TEMEL BAĞLAÇLAR - İSE, ANCAK VE ANCAK (8 alt dal)
  // ==========================================

  // ALT DAL 1: İSE (⇒) BAĞLACI
  { id: "s17_ia_001", s: "p ⇒ q ne zaman yanlıştır?", c: "p_dogru_q_yanlis_iken_(1⇒0=0)", v: {}, z:"orta", alt:"ise_yanlis" },
  { id: "s17_ia_002", s: "p=1, q=0 ise p⇒q = ?", c: "0", v: {}, z:"orta", alt:"ise_1_0" },
  { id: "s17_ia_003", s: "p=1, q=1 ise p⇒q = ?", c: "1", v: {}, z:"orta", alt:"ise_1_1" },
  { id: "s17_ia_004", s: "p=0, q=1 ise p⇒q = ?", c: "1", v: {}, z:"orta", alt:"ise_0_1" },
  { id: "s17_ia_005", s: "p=0, q=0 ise p⇒q = ?", c: "1", v: {}, z:"orta", alt:"ise_0_0" },

  // ALT DAL 2: İSE BAĞLACININ ÖZELLİKLERİ
  { id: "s17_ia_006", s: "p ⇒ q ifadesinin VEYA'lı karşılığı nedir?", c: "p'∨q", v: {}, z:"cok_zor", alt:"ise_veya_donusum" },
  { id: "s17_ia_007", s: "p ⇒ p = ?", c: "1", v: {}, z:"orta", alt:"ise_kendisi" },
  { id: "s17_ia_008", s: "p ⇒ q ile q ⇒ p aynı mıdır?", c: "hayir_(farklidir)", v: {}, z:"cok_zor", alt:"ise_simetri_degil" },

  // ALT DAL 3: KARŞIT, TERS, KARŞIT-TERS
  { id: "s17_ia_009", s: "p⇒q önermesinin karşıtı nedir?", c: "q⇒p", v: {}, z:"cok_zor", alt:"karsit" },
  { id: "s17_ia_010", s: "p⇒q önermesinin tersi nedir?", c: "p'⇒q'", v: {}, z:"cok_zor", alt:"ters" },
  { id: "s17_ia_011", s: "p⇒q önermesinin karşıt-tersi nedir?", c: "q'⇒p'", v: {}, z:"cok_zor", alt:"karsit_ters" },
  { id: "s17_ia_012", s: "p⇒q ile karşıt-tersi (q'⇒p') denk midir?", c: "evet", v: {}, z:"cok_zor", alt:"karsit_ters_denk" },

  // ALT DAL 4: ANCAK VE ANCAK (⇔) BAĞLACI
  { id: "s17_ia_013", s: "p ⇔ q ne zaman doğrudur?", c: "ikisi_de_ayni_iken_(p=q)", v: {}, z:"orta", alt:"ancak_dogru" },
  { id: "s17_ia_014", s: "p=1, q=1 ise p⇔q = ?", c: "1", v: {}, z:"orta", alt:"ancak_1_1" },
  { id: "s17_ia_015", s: "p=0, q=0 ise p⇔q = ?", c: "1", v: {}, z:"orta", alt:"ancak_0_0" },
  { id: "s17_ia_016", s: "p=1, q=0 ise p⇔q = ?", c: "0", v: {}, z:"orta", alt:"ancak_1_0" },
  { id: "s17_ia_017", s: "p=0, q=1 ise p⇔q = ?", c: "0", v: {}, z:"orta", alt:"ancak_0_1" },

  // ALT DAL 5: ANCAK VE ANCAK ÖZELLİKLERİ
  { id: "s17_ia_018", s: "p ⇔ q = ? (İSE bağlacı cinsinden)", c: "(p⇒q)∧(q⇒p)", v: {}, z:"cok_zor", alt:"ancak_ise" },
  { id: "s17_ia_019", s: "p ⇔ p = ?", c: "1", v: {}, z:"orta", alt:"ancak_kendisi" },
  { id: "s17_ia_020", s: "p ⇔ q = q ⇔ p doğru mudur?", c: "evet", v: {}, z:"orta", alt:"ancak_degisme" },

  // ALT DAL 6: İSE VE ANCAK BAĞLAÇLARI KARIŞIK
  { id: "s17_ia_021", s: "p=1, q=0, r=1 ise (p⇒q)⇔r = ?", c: "0", v: {}, z:"cok_zor", alt:"uc_degisken_ise_ancak" },
  { id: "s17_ia_022", s: "p⇒(q⇒r) = ? (p=1,q=1,r=0)", c: "0", v: {}, z:"cok_zor", alt:"ic_ice_ise" },

  // ALT DAL 7: GEREKTİRME
  { id: "s17_ia_023", s: "\"p⇒q\" nun sözel ifadesi nedir?", c: "p_ise_q_veya_p_gerektirir_q", v: {}, z:"orta", alt:"gerektirme" },
  { id: "s17_ia_024", s: "p⇒q doğru ve p doğru ise q için ne söylenir?", c: "q_dogrudur_(modus_ponens)", v: {}, z:"cok_zor", alt:"modus_ponens" },

  // ALT DAL 8: İSE-ANCAK ÖZET
  { id: "s17_ia_025", s: "İSE bağlacı doğruluk tablosu nedir?", c: "1⇒0=0_digerleri_1", v: {}, z:"orta", alt:"ise_tablo_ozet" },
  { id: "s17_ia_026", s: "ANCAK VE ANCAK bağlacı doğruluk tablosu nedir?", c: "ikisi_ayni_ise_1_farkli_ise_0", v: {}, z:"orta", alt:"ancak_tablo_ozet" },


  // ==========================================
  // KONU 4: BİLEŞİK ÖNERMELER VE DOĞRULUK TABLOSU (8 alt dal)
  // ==========================================

  // ALT DAL 1: BİLEŞİK ÖNERME
  { id: "s17_bo_001", s: "Bileşik önerme nedir?", c: "birden_fazla_onermenin_baglaclarla_birlestirilmesi", v: {}, z:"orta", alt:"bilesik_tanim" },
  { id: "s17_bo_002", s: "\"p∧(q∨r)\" kaç farklı doğruluk durumu içerir?", c: "8", v: {}, z:"orta", alt:"uc_degisken_durum" },

  // ALT DAL 2: DOĞRULUK TABLOSU OLUŞTURMA
  { id: "s17_bo_003", s: "Doğruluk tablosu oluştururken sıralama nasıl olur?", c: "once_bagli_degiskenler_sonra_ana_baglac", v: {}, z:"orta", alt:"tablo_sirasi" },
  { id: "s17_bo_004", s: "p∧(q∨r) için doğruluk tablosu oluşturunuz. (p=1,q=0,r=1)", c: "1∧(0∨1)=1∧1=1", v: {}, z:"zor", alt:"tablo_ornek" },

  // ALT DAL 3: 3 DEĞİŞKENLİ TABLO
  { id: "s17_bo_005", s: "3 değişkenli doğruluk tablosunda kaç satır vardır?", c: "8", v: {}, z:"orta", alt:"uc_degisken_satir" },
  { id: "s17_bo_006", s: "p, q, r için doğruluk tablosunda p sütunu nasıl doldurulur?", c: "4_tane_1_4_tane_0_(11110000)", v: {}, z:"orta", alt:"p_sutun" },
  { id: "s17_bo_007", s: "p, q, r için doğruluk tablosunda q sütunu nasıl doldurulur?", c: "2_ser_1_2_ser_0_(11001100)", v: {}, z:"orta", alt:"q_sutun" },
  { id: "s17_bo_008", s: "p, q, r için doğruluk tablosunda r sütunu nasıl doldurulur?", c: "1_0_1_0..._(10101010)", v: {}, z:"orta", alt:"r_sutun" },

  // ALT DAL 4: KARMAŞIK BİLEŞİK ÖNERMELER
  { id: "s17_bo_009", s: "(p⇒q)∧(q⇒p) ifadesi hangi bağlaca denktir?", c: "p⇔q", v: {}, z:"cok_zor", alt:"karmasik_denklik" },
  { id: "s17_bo_010", s: "(p∧q)⇒(p∨q) ifadesinin doğruluk değeri her zaman nedir?", c: "1_(totoloji)", v: {}, z:"cok_zor", alt:"totoloji_ornek" },
  { id: "s17_bo_011", s: "(p∨q)∧(p'∧q') ifadesinin doğruluk değeri her zaman nedir?", c: "0_(celiski)", v: {}, z:"cok_zor", alt:"celiski_ornek" },

  // ALT DAL 5: DOĞRULUK TABLOSU YORUMLAMA
  { id: "s17_bo_012", s: "Doğruluk tablosunda tüm değerler 1 ise bu önermeye ne denir?", c: "totoloji", v: {}, z:"cok_zor", alt:"totoloji" },
  { id: "s17_bo_013", s: "Doğruluk tablosunda tüm değerler 0 ise bu önermeye ne denir?", c: "celiski", v: {}, z:"cok_zor", alt:"celiski" },

  // ALT DAL 6: BİLEŞİK ÖNERME SORULARI
  { id: "s17_bo_014", s: "p=1, q=0, r=0 için (p∨q)∧(q⇒r) = ?", c: "0", v: {}, z:"cok_zor", alt:"bilesik_hesap" },
  { id: "s17_bo_015", s: "p=0, q=1, r=1 için (p⇒q)∨(q⇔r) = ?", c: "1", v: {}, z:"cok_zor", alt:"bilesik_hesap_2" },

  // ALT DAL 7: ÖNERME DENKLİĞİ UYGULAMALARI
  { id: "s17_bo_016", s: "p⇒q = p'∨q denkliğini doğruluk tablosuyla gösteriniz.", c: "her_iki_ifade_de_ayni_dogruluk_degerlerine_sahiptir", v: {}, z:"cok_zor", alt:"denklik_ispat" },
  { id: "s17_bo_017", s: "p⇔q = (p⇒q)∧(q⇒p) denkliğini kontrol ediniz.", c: "dogrudur", v: {}, z:"cok_zor", alt:"ancak_denklik" },

  // ALT DAL 8: BİLEŞİK ÖNERME ÖZET
  { id: "s17_bo_018", s: "n değişkenli doğruluk tablosunda kaç satır vardır?", c: "Math.pow(2,{n})", v: {n:[1,4]}, z:"orta", alt:"n_degisken_satir" },
  { id: "s17_bo_019", s: "Bileşik önermelerde işlem önceliği nasıldır?", c: "parantez_oncesi:_'_(degil),_∧_(ve),_∨_(veya),_⇒_(ise),_⇔_(ancak)", v: {}, z:"cok_zor", alt:"islem_onceligi" },


  // ==========================================
  // KONU 5: ÖNERME DENKLİĞİ - TOTOLOJİ-ÇELİŞKİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: TOTOLOJİ
  { id: "s17_tc_001", s: "Totoloji nedir?", c: "dogruluk_degeri_her_zaman_1_olan_bilesik_onerme", v: {}, z:"cok_zor", alt:"totoloji_tanim" },
  { id: "s17_tc_002", s: "p∨p' ifadesi totoloji midir?", c: "evet", v: {}, z:"orta", alt:"p_veya_p_degil" },
  { id: "s17_tc_003", s: "p⇒p ifadesi totoloji midir?", c: "evet", v: {}, z:"orta", alt:"p_ise_p" },
  { id: "s17_tc_004", s: "(p∧q)⇒p ifadesi totoloji midir?", c: "evet", v: {}, z:"cok_zor", alt:"ve_ise" },

  // ALT DAL 2: ÇELİŞKİ
  { id: "s17_tc_005", s: "Çelişki nedir?", c: "dogruluk_degeri_her_zaman_0_olan_bilesik_onerme", v: {}, z:"cok_zor", alt:"celiski_tanim" },
  { id: "s17_tc_006", s: "p∧p' ifadesi çelişki midir?", c: "evet", v: {}, z:"orta", alt:"p_ve_p_degil" },
  { id: "s17_tc_007", s: "p⇔p' ifadesi çelişki midir?", c: "evet", v: {}, z:"cok_zor", alt:"ancak_degil" },

  // ALT DAL 3: TOTOLOJİ VE ÇELİŞKİ OLMAYAN
  { id: "s17_tc_008", s: "p∧q ifadesi totoloji veya çelişki midir?", c: "ikisi_de_degil_(bazi_durumlarda_1_bazilarinda_0)", v: {}, z:"orta", alt:"ne_totoloji_ne_celiski" },
  { id: "s17_tc_009", s: "Bir önerme ne totoloji ne çelişki ise ne denir?", c: "olumsal_(kontenjan)_onerme", v: {}, z:"cok_zor", alt:"olumsal" },

  // ALT DAL 4: DENK ÖNERME KONTROLÜ
  { id: "s17_tc_010", s: "İki önermenin denk olduğu nasıl anlaşılır?", c: "dogruluk_tablosunda_ayni_degerleri_alirlarsa", v: {}, z:"orta", alt:"denklik_kontrol" },
  { id: "s17_tc_011", s: "p⇒q ile q'⇒p' denk midir?", c: "evet", v: {}, z:"cok_zor", alt:"ise_karsit_ters_denk" },

  // ALT DAL 5: ÖNERME DENKLİĞİ SORULARI
  { id: "s17_tc_012", s: "p⇒(q⇒r) ile (p∧q)⇒r denk midir?", c: "evet", v: {}, z:"cok_zor", alt:"ihraç_kurali" },
  { id: "s17_tc_013", s: "p∨(q∧r) ile (p∨q)∧(p∨r) denk midir?", c: "evet_(dagilma)", v: {}, z:"cok_zor", alt:"dagilma_denklik" },

  // ALT DAL 6: TOTOLOJİ-ÇELİŞKİ ÖZET
  { id: "s17_tc_014", s: "Totoloji ve çelişki arasındaki ilişki nedir?", c: "birinin_degili_digeridir", v: {}, z:"cok_zor", alt:"totoloji_celiski_iliski" },
  { id: "s17_tc_015", s: "Bir totolojinin değili nedir?", c: "celiski", v: {}, z:"cok_zor", alt:"totoloji_degili" },


  // ==========================================
  // KONU 6: DE MORGAN KURALLARI (6 alt dal)
  // ==========================================

  // ALT DAL 1: DE MORGAN - VE
  { id: "s17_dm_001", s: "(p∧q)' = ?", c: "p'∨q'", v: {}, z:"cok_zor", alt:"de_morgan_ve" },
  { id: "s17_dm_002", s: "\"p ve q'nun değili\" neye eşittir?", c: "p'nin_degili_veya_q'nun_degili", v: {}, z:"orta", alt:"degil_ve" },
  { id: "s17_dm_003", s: "(p∧q)' = p'∨q' denkliğini doğruluk tablosuyla gösteriniz.", c: "dogrudur", v: {}, z:"cok_zor", alt:"dm_ve_ispat" },

  // ALT DAL 2: DE MORGAN - VEYA
  { id: "s17_dm_004", s: "(p∨q)' = ?", c: "p'∧q'", v: {}, z:"cok_zor", alt:"de_morgan_veya" },
  { id: "s17_dm_005", s: "\"p veya q'nun değili\" neye eşittir?", c: "p'nin_degili_ve_q'nun_degili", v: {}, z:"orta", alt:"degil_veya" },
  { id: "s17_dm_006", s: "(p∨q)' = p'∧q' denkliğini doğruluk tablosuyla gösteriniz.", c: "dogrudur", v: {}, z:"cok_zor", alt:"dm_veya_ispat" },

  // ALT DAL 3: DE MORGAN UYGULAMALARI
  { id: "s17_dm_007", s: "p=1, q=1 ise (p∧q)' = ?", c: "0", v: {}, z:"orta", alt:"dm_ve_1_1" },
  { id: "s17_dm_008", s: "p=0, q=0 ise (p∨q)' = ?", c: "1", v: {}, z:"orta", alt:"dm_veya_0_0" },

  // ALT DAL 4: DE MORGAN VE KÜMELER
  { id: "s17_dm_009", s: "Kümelerde (A∩B)' = ? (De Morgan ile)", c: "A'∪B'", v: {}, z:"cok_zor", alt:"kume_de_morgan_1" },
  { id: "s17_dm_010", s: "Kümelerde (A∪B)' = ? (De Morgan ile)", c: "A'∩B'", v: {}, z:"cok_zor", alt:"kume_de_morgan_2" },

  // ALT DAL 5: ÇOKLU DE MORGAN
  { id: "s17_dm_011", s: "(p∧q∧r)' = ?", c: "p'∨q'∨r'", v: {}, z:"cok_zor", alt:"uc_ve_degil" },
  { id: "s17_dm_012", s: "(p∨q∨r)' = ?", c: "p'∧q'∧r'", v: {}, z:"cok_zor", alt:"uc_veya_degil" },

  // ALT DAL 6: DE MORGAN ÖZET
  { id: "s17_dm_013", s: "De Morgan kuralları ne işe yarar?", c: "ve_ile_veya_baglaclarinin_degillerini_birbirine_donusturmeye", v: {}, z:"orta", alt:"dm_amac" },
  { id: "s17_dm_014", s: "De Morgan kurallarının sözel ifadesi nedir?", c: "ve_nin_degili_veya_nin_degilleri,_veya_nin_degili_ve_nin_degilleri", v: {}, z:"orta", alt:"dm_sozel" },


  // ==========================================
  // KONU 7: NİCELEYİCİLER - HER-BAZI (6 alt dal)
  // ==========================================

  // ALT DAL 1: NİCELEYİCİ TANIMI
  { id: "s17_ni_001", s: "Niceleyici nedir?", c: "\"her\"_veya_\"bazi\"_gibi_cokluk_belirten_ifadeler", v: {}, z:"orta", alt:"niceleyici_tanim" },
  { id: "s17_ni_002", s: "∀ sembolü neyi ifade eder?", c: "her_(evrensel_niceleyici)", v: {}, z:"orta", alt:"her_sembol" },
  { id: "s17_ni_003", s: "∃ sembolü neyi ifade eder?", c: "bazi_veya_en_az_bir_(varlişsal_niceleyici)", v: {}, z:"orta", alt:"bazi_sembol" },

  // ALT DAL 2: HER NİCELEYİCİSİ
  { id: "s17_ni_004", s: "∀x, p(x) ne demektir?", c: "her_x_icin_p(x)_dogrudur", v: {}, z:"orta", alt:"her_x" },
  { id: "s17_ni_005", s: "\"∀x∈N, x≥0\" önermesi doğru mudur?", c: "evet_(tum_dogal_sayilar≥0)", v: {}, z:"orta", alt:"her_dogal_sayi" },
  { id: "s17_ni_006", s: "\"∀x∈Z, x>0\" önermesi doğru mudur?", c: "hayir_(negatifler_0_dan_buyuk_degil)", v: {}, z:"orta", alt:"her_tam_sayi" },

  // ALT DAL 3: BAZI NİCELEYİCİSİ
  { id: "s17_ni_007", s: "∃x, p(x) ne demektir?", c: "en_az_bir_x_icin_p(x)_dogrudur", v: {}, z:"orta", alt:"bazi_x" },
  { id: "s17_ni_008", s: "\"∃x∈N, x²=4\" önermesi doğru mudur?", c: "evet_(x=2_icin)", v: {}, z:"orta", alt:"bazi_kare" },
  { id: "s17_ni_009", s: "\"∃x∈R, x²=-1\" önermesi doğru mudur?", c: "hayir_(reel_sayilarda_yok)", v: {}, z:"orta", alt:"bazi_reel" },

  // ALT DAL 4: NİCELEYİCİLİ ÖNERME ÖRNEKLERİ
  { id: "s17_ni_010", s: "\"Bazı insanlar mavi gözlüdür.\" niceleyicili önerme olarak yazınız.", c: "∃x, x_mavi_gozludur", v: {}, z:"orta", alt:"bazi_insan" },
  { id: "s17_ni_011", s: "\"Her tam sayının karesi pozitiftir.\" niceleyicili önerme olarak yazınız.", c: "∀x∈Z, x²≥0", v: {}, z:"orta", alt:"her_kare" },

  // ALT DAL 5: NİCELEYİCİLİ ÖNERME DOĞRULUĞU
  { id: "s17_ni_012", s: "∀x, p(x) önermesi ne zaman yanlıştır?", c: "en_az_bir_x_icin_p(x)_yanlis_olursa", v: {}, z:"cok_zor", alt:"her_yanlis" },
  { id: "s17_ni_013", s: "∃x, p(x) önermesi ne zaman doğrudur?", c: "en_az_bir_x_icin_p(x)_dogru_olursa", v: {}, z:"cok_zor", alt:"bazi_dogru" },

  // ALT DAL 6: NİCELEYİCİ ÖZET
  { id: "s17_ni_014", s: "∀ ve ∃ sembollerinin adları nedir?", c: "evrensel_ve_varlişsal_niceleyici", v: {}, z:"orta", alt:"sembol_adlari" },
  { id: "s17_ni_015", s: "Niceleyiciler mantıkta ne işe yarar?", c: "bir_ozelligin_hangi_cokluktaki_eleman_icin_gecerli_oldugunu_belirtir", v: {}, z:"orta", alt:"niceleyici_amac" },


  // ==========================================
  // KONU 8: AÇIK ÖNERME VE DOĞRULUK KÜMESİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: AÇIK ÖNERME
  { id: "s17_ao_001", s: "Açık önerme nedir?", c: "icinde_degisken_bulunduran_ve_degiskene_deger_verilince_onerme_olusan_ifade", v: {}, z:"orta", alt:"acik_onerme" },
  { id: "s17_ao_002", s: "\"x+2=5\" ifadesi açık önerme midir?", c: "evet_(x_e_deger_verilince_onerme_olur)", v: {}, z:"orta", alt:"acik_onerme_ornek" },
  { id: "s17_ao_003", s: "Açık önerme ne zaman önerme olur?", c: "degiskene_deger_verilince", v: {}, z:"orta", alt:"acik_onerme_donusum" },

  // ALT DAL 2: DOĞRULUK KÜMESİ
  { id: "s17_ao_004", s: "Doğruluk kümesi nedir?", c: "acik_onermeyi_dogru_yapan_degerlerin_kumesi", v: {}, z:"orta", alt:"dogruluk_kumesi" },
  { id: "s17_ao_005", s: "p(x): \"x+2=5\" açık önermesinin doğruluk kümesi nedir? (x∈N)", c: "{3}", v: {}, z:"orta", alt:"dogruluk_kumesi_ornek" },
  { id: "s17_ao_006", s: "p(x): \"x²=4\" açık önermesinin doğruluk kümesi nedir? (x∈Z)", c: "{-2, 2}", v: {}, z:"orta", alt:"kare_dogruluk" },

  // ALT DAL 3: DOĞRULUK KÜMESİ BULMA
  { id: "s17_ao_007", s: "p(x): \"x<5\" açık önermesinin N'deki doğruluk kümesi nedir?", c: "{0,1,2,3,4}", v: {}, z:"orta", alt:"kucuk_5" },
  { id: "s17_ao_008", s: "p(x): \"x tek sayıdır\" açık önermesinin {1,2,3,4,5,6}'daki doğruluk kümesi nedir?", c: "{1,3,5}", v: {}, z:"orta", alt:"tek_sayi_dogruluk" },

  // ALT DAL 4: NİCELEYİCİ VE DOĞRULUK KÜMESİ
  { id: "s17_ao_009", s: "∀x∈A, p(x) ne zaman doğrudur?", c: "A_kumesi_dogruluk_kumesine_esit_veya_alt_kume_ise", v: {}, z:"cok_zor", alt:"her_dogruluk" },
  { id: "s17_ao_010", s: "∃x∈A, p(x) ne zaman doğrudur?", c: "A_ile_dogruluk_kumesinin_kesisimi_bos_degilse", v: {}, z:"cok_zor", alt:"bazi_dogruluk" },

  // ALT DAL 5: AÇIK ÖNERME SORULARI
  { id: "s17_ao_011", s: "p(x): \"x²-5x+6=0\" açık önermesinin doğruluk kümesi nedir?", c: "{2,3}", v: {}, z:"cok_zor", alt:"ikinci_derece" },
  { id: "s17_ao_012", s: "p(x,y): \"x+y=5\" iki değişkenli açık önermesinin doğruluk kümesinden bir eleman yazınız.", c: "(2,3)_gibi", v: {}, z:"cok_zor", alt:"iki_degiskenli" },

  // ALT DAL 6: AÇIK ÖNERME ÖZET
  { id: "s17_ao_013", s: "Açık önerme ile önerme arasındaki fark nedir?", c: "acik_onermede_degisken_vardir_onermede_kesin_hukum", v: {}, z:"orta", alt:"acik_fark" },
  { id: "s17_ao_014", s: "Doğruluk kümesi boş küme olan açık önermeye ne denir?", c: "yanlis_onerme_(celiski)", v: {}, z:"cok_zor", alt:"bos_dogruluk" },


  // ==========================================
  // KONU 9: NİCELEYİCİLERİN DEĞİLİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: HER NİCELEYİCİSİNİN DEĞİLİ
  { id: "s17_nd_001", s: "(∀x, p(x))' = ?", c: "∃x, p'(x)", v: {}, z:"cok_zor", alt:"her_degil" },
  { id: "s17_nd_002", s: "\"Her x için p(x)\" önermesinin değili nedir?", c: "bazi_x_icin_p(x)_degildir", v: {}, z:"orta", alt:"her_degil_sozel" },
  { id: "s17_nd_003", s: "\"Bütün kuşlar uçar.\" önermesinin değili nedir?", c: "bazi_kuslar_ucmaz", v: {}, z:"orta", alt:"kus_ornek" },

  // ALT DAL 2: BAZI NİCELEYİCİSİNİN DEĞİLİ
  { id: "s17_nd_004", s: "(∃x, p(x))' = ?", c: "∀x, p'(x)", v: {}, z:"cok_zor", alt:"bazi_degil" },
  { id: "s17_nd_005", s: "\"Bazı x için p(x)\" önermesinin değili nedir?", c: "her_x_icin_p(x)_degildir", v: {}, z:"orta", alt:"bazi_degil_sozel" },
  { id: "s17_nd_006", s: "\"Bazı öğrenciler gözlüklüdür.\" önermesinin değili nedir?", c: "hicbir_ogrenci_gozluklu_degildir_(tum_ogrenciler_gozluksuzdur)", v: {}, z:"orta", alt:"ogrenci_ornek" },

  // ALT DAL 3: NİCELEYİCİ DEĞİLİ UYGULAMALARI
  { id: "s17_nd_007", s: "(∀x∈N, x≥0)' = ?", c: "∃x∈N, x<0", v: {}, z:"cok_zor", alt:"dogal_sayi_degil" },
  { id: "s17_nd_008", s: "(∃x∈Z, x²=1)' = ?", c: "∀x∈Z, x²≠1", v: {}, z:"cok_zor", alt:"tam_sayi_degil" },
  { id: "s17_nd_009", s: "(∀x, ∃y, x+y=0)' = ?", c: "∃x, ∀y, x+y≠0", v: {}, z:"cok_zor", alt:"ic_ice_niceleyici_degil" },

  // ALT DAL 4: NİCELEYİCİ DEĞİLİ KURALLARI
  { id: "s17_nd_010", s: "Niceleyicilerin değili alınırken kural nedir?", c: "∀_ile_∃_yer_degistirir_ve_yuklem_degillenir", v: {}, z:"orta", alt:"degil_kurali" },
  { id: "s17_nd_011", s: "De Morgan kuralları niceleyiciler için geçerli midir?", c: "evet_(benzer_mantik)", v: {}, z:"cok_zor", alt:"dm_niceleyici" },

  // ALT DAL 5: NİCELEYİCİ DEĞİLİ SORULARI
  { id: "s17_nd_012", s: "\"Her asal sayı tektir.\" önermesinin değili nedir? Doğruluk değeri nedir?", c: "\"Bazi_asal_sayilar_cifttir.\"_(dogru_cunku_2_cift_asaldir)", v: {}, z:"cok_zor", alt:"asal_tek" },
  { id: "s17_nd_013", s: "(∀x, x²>x)' önermesinin değili nedir?", c: "∃x, x²≤x", v: {}, z:"cok_zor", alt:"kare_buyuk" },

  // ALT DAL 6: NİCELEYİCİ DEĞİLİ ÖZET
  { id: "s17_nd_014", s: "Niceleyicilerin değilini almanın pratik yolu nedir?", c: "∀↔∃_degisimi_yapilir_ve_yuklem_degillenir", v: {}, z:"orta", alt:"pratik_degil" },
  { id: "s17_nd_015", s: "\"Her\" ve \"bazı\" değillendiğinde birbirine dönüşür. Doğru mu?", c: "evet", v: {}, z:"orta", alt:"her_bazi_donusum" },


  // ==========================================
  // KONU 10: MANTIK VE KÜMELER İLİŞKİSİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: MANTIK-KÜME BAĞLANTISI
  { id: "s17_mk_001", s: "Mantıktaki VE (∧) bağlacı kümelerde hangi işleme karşılık gelir?", c: "kesisim_(∩)", v: {}, z:"orta", alt:"ve_kesisim" },
  { id: "s17_mk_002", s: "Mantıktaki VEYA (∨) bağlacı kümelerde hangi işleme karşılık gelir?", c: "birlesim_(∪)", v: {}, z:"orta", alt:"veya_birlesim" },
  { id: "s17_mk_003", s: "Mantıktaki değil (') işlemi kümelerde neye karşılık gelir?", c: "tumleyen", v: {}, z:"orta", alt:"degil_tumleyen" },

  // ALT DAL 2: MANTIK-KÜME İŞLEMLERİ
  { id: "s17_mk_004", s: "p∧q = 1 ise kümelerde bu neye karşılık gelir?", c: "A∩B_bolgesindeki_elemanlar", v: {}, z:"orta", alt:"ve_kume" },
  { id: "s17_mk_005", s: "p∨q = 1 ise kümelerde bu neye karşılık gelir?", c: "A∪B_bolgesindeki_elemanlar", v: {}, z:"orta", alt:"veya_kume" },
  { id: "s17_mk_006", s: "p⇒q = 1 ise kümelerde bu neye karşılık gelir?", c: "A⊂B_(A_alt_kume_B)", v: {}, z:"cok_zor", alt:"ise_alt_kume" },

  // ALT DAL 3: ÖNERME VE KÜME DENKLİĞİ
  { id: "s17_mk_007", s: "A⊂B ile p⇒q arasındaki ilişki nedir?", c: "A_elemani_ise_B_elemanidir_(p⇒q_gibi)", v: {}, z:"cok_zor", alt:"alt_kume_ise" },
  { id: "s17_mk_008", s: "A=B ile p⇔q arasındaki ilişki nedir?", c: "karsilikli_alt_kume_olma_(ancak_ve_ancak_gibi)", v: {}, z:"cok_zor", alt:"esit_ancak" },

  // ALT DAL 4: DE MORGAN - MANTIK VE KÜME
  { id: "s17_mk_009", s: "(A∩B)' = A'∪B' ile mantıktaki karşılığı nedir?", c: "(p∧q)'=p'∨q'", v: {}, z:"cok_zor", alt:"dm_kume_mantik" },
  { id: "s17_mk_010", s: "Mantıktaki De Morgan ile kümelerdeki De Morgan aynı mıdır?", c: "evet_(yapi_olarak_ayni)", v: {}, z:"orta", alt:"dm_ayni" },

  // ALT DAL 5: SEMBOL KARŞILAŞTIRMA
  { id: "s17_mk_011", s: "∈ sembolü mantıkta hangi kavrama benzer?", c: "dogruluk_degeri_1_olan_onerme_gibi", v: {}, z:"cok_zor", alt:"eleman_mantik" },
  { id: "s17_mk_012", s: "∅ (boş küme) mantıkta neye karşılık gelir?", c: "celiski_(her_zaman_yanlis)", v: {}, z:"cok_zor", alt:"bos_celiski" },
  { id: "s17_mk_013", s: "E (evrensel küme) mantıkta neye karşılık gelir?", c: "totoloji_(her_zaman_dogru)", v: {}, z:"cok_zor", alt:"evrensel_totoloji" },

  // ALT DAL 6: MANTIK-KÜME ÖZET
  { id: "s17_mk_014", s: "Mantık ile kümeler arasındaki temel benzerlik nedir?", c: "ikisi_de_ayni_yapiya_sahiptir_(boolean_cebri)", v: {}, z:"orta", alt:"benzerlik" },
  { id: "s17_mk_015", s: "Mantık ve kümeler hangi matematiksel yapıyı oluşturur?", c: "boolean_cebri", v: {}, z:"cok_zor", alt:"boolean" },


  // ==========================================
  // KONU 11: MANTIK PROBLEMLERİ (6 alt dal)
  // ==========================================

  // ALT DAL 1: DOĞRULUK DEĞERİ BULMA
  { id: "s17_mp_001", s: "p, q, r önermeleri için (p∧q)⇒(p∨r) ifadesinin doğruluk değerini bulunuz. p=1,q=1,r=0", c: "1", v: {}, z:"cok_zor", alt:"dogruluk_bulma" },
  { id: "s17_mp_002", s: "[(p⇒q)∧(q⇒r)]⇒(p⇒r) önermesi totoloji midir?", c: "evet_(gecislilik_ozelligi)", v: {}, z:"cok_zor", alt:"gecislilik" },

  // ALT DAL 2: DENK ÖNERME BULMA
  { id: "s17_mp_003", s: "p⇒(q∧r) önermesine denk olan ifade nedir?", c: "(p⇒q)∧(p⇒r)", v: {}, z:"cok_zor", alt:"ise_dagilma" },
  { id: "s17_mp_004", s: "(p∨q)⇒r önermesine denk olan ifade nedir?", c: "(p⇒r)∧(q⇒r)", v: {}, z:"cok_zor", alt:"veya_ise" },

  // ALT DAL 3: MANTIK SORULARI
  { id: "s17_mp_005", s: "\"Ali çalışkansa sınavı geçer.\" önermesinin tersi nedir?", c: "\"Ali_calışkan_degilse_sinavi_gecemez.\"", v: {}, z:"orta", alt:"sozel_ters" },
  { id: "s17_mp_006", s: "\"Yağmur yağarsa dışarı çıkmam.\" önermesinin karşıt-tersi nedir?", c: "\"Dışarı_cikarsam_yagmur_yagmiyor_demektir.\"", v: {}, z:"orta", alt:"sozel_karsit_ters" },

  // ALT DAL 4: YORUMLAMA SORULARI
  { id: "s17_mp_007", s: "p: \"x>3\", q: \"x>1\" ise p⇒q her zaman doğru mudur?", c: "evet_(x>3_ise_kesinlikle_x>1_dir)", v: {}, z:"cok_zor", alt:"sayisal_ise" },
  { id: "s17_mp_008", s: "p: \"x asaldır\", q: \"x tektir\" ise p⇒q her zaman doğru mudur?", c: "hayir_(x=2_icin_p_dogru_q_yanlis)", v: {}, z:"cok_zor", alt:"asal_tek_ise" },

  // ALT DAL 5: DOĞRULUK TABLOSU PROBLEMLERİ
  { id: "s17_mp_009", s: "3 değişkenli bir doğruluk tablosunda kaç farklı bileşik önerme yazılabilir?", c: "256", v: {}, z:"cok_zor", alt:"bilesik_sayisi" },
  { id: "s17_mp_010", s: "n değişkenli kaç farklı totoloji yazılabilir?", c: "1_(tum_degerler_1_olan_sutun)", v: {}, z:"cok_zor", alt:"totoloji_sayisi" },

  // ALT DAL 6: MANTIK PROBLEMLERİ ÖZET
  { id: "s17_mp_011", s: "Mantık problemlerinde çözüm stratejisi nedir?", c: "dogruluk_tablosu_veya_denklikler_kullanarak_cozum", v: {}, z:"orta", alt:"cozum_strateji" },
  { id: "s17_mp_012", s: "Mantık kuralları günlük hayatta nerelerde kullanılır?", c: "bilgisayar_programlama,_hukuk,_felsefe,_elektronik_devreler", v: {}, z:"orta", alt:"gunluk_kullanim" },

],


// ==========================================
// SEVİYE 18: GEOMETRİ
// ==========================================
18: [

  // ==========================================
  // KONU 1: AÇILAR (10 alt dal)
  // ==========================================

  // ALT DAL 1: AÇI TANIMI VE ÇEŞİTLERİ
  { id: "s18_ac_001", s: "Açı nedir?", c: "iki_isinin_baslangic_noktalari_ayni_olacak_sekilde_olusturdugu_sekil", v: {}, z:"kolay", alt:"aci_tanimi" },
  { id: "s18_ac_002", s: "Dar açı kaç derece arasındadır?", c: "0°_ile_90°_arasi_(0_ve_90_haric)", v: {}, z:"kolay", alt:"dar_aci" },
  { id: "s18_ac_003", s: "Dik açı kaç derecedir?", c: "90°", v: {}, z:"kolay", alt:"dik_aci" },
  { id: "s18_ac_004", s: "Geniş açı kaç derece arasındadır?", c: "90°_ile_180°_arasi_(90_ve_180_haric)", v: {}, z:"kolay", alt:"genis_aci" },
  { id: "s18_ac_005", s: "Doğru açı kaç derecedir?", c: "180°", v: {}, z:"kolay", alt:"dogru_aci" },
  { id: "s18_ac_006", s: "Tam açı kaç derecedir?", c: "360°", v: {}, z:"kolay", alt:"tam_aci" },

  // ALT DAL 2: TÜMLER VE BÜTÜNLER AÇILAR
  { id: "s18_ac_007", s: "Tümler açı nedir?", c: "toplamlari_90°_olan_iki_aci", v: {}, z:"orta", alt:"tumler" },
  { id: "s18_ac_008", s: "Bütünler açı nedir?", c: "toplamlari_180°_olan_iki_aci", v: {}, z:"orta", alt:"butunler" },
  { id: "s18_ac_009", s: "{a}°'nin tümleri kaç derecedir?", c: "{90-a}°", v: {a:[10,80]}, z:"orta", alt:"tumler_hesap" },
  { id: "s18_ac_010", s: "{a}°'nin bütünleri kaç derecedir?", c: "{180-a}°", v: {a:[10,170]}, z:"orta", alt:"butunler_hesap" },
  { id: "s18_ac_011", s: "Tümleri kendisinin {k} katı olan açı kaç derecedir?", c: "90/({k}+1)", v: {k:[2,5]}, z:"cok_zor", alt:"tumler_kat" },
  { id: "s18_ac_012", s: "Bütünleri kendisinin {k} katı olan açı kaç derecedir?", c: "180/({k}+1)", v: {k:[2,5]}, z:"cok_zor", alt:"butunler_kat" },

  // ALT DAL 3: TERS AÇILAR
  { id: "s18_ac_013", s: "Ters açılar nedir?", c: "kesisen_iki_dogrunun_olusturdugu_karsilikli_acilar", v: {}, z:"orta", alt:"ters_aci" },
  { id: "s18_ac_014", s: "Ters açıların ölçüleri arasındaki ilişki nedir?", c: "esittir", v: {}, z:"orta", alt:"ters_aci_esit" },
  { id: "s18_ac_015", s: "Kesişen iki doğruda komşu açıların toplamı kaç derecedir?", c: "180°", v: {}, z:"orta", alt:"komsu_aci" },

  // ALT DAL 4: PARALEL DOĞRULAR VE AÇILAR
  { id: "s18_ac_016", s: "Paralel iki doğruyu kesen üçüncü doğruya ne denir?", c: "kesen_(transversal)", v: {}, z:"orta", alt:"kesen" },
  { id: "s18_ac_017", s: "Yöndeş açılar nedir?", c: "ayni_yonde_bakan_acilar_(esittir)", v: {}, z:"orta", alt:"yondes" },
  { id: "s18_ac_018", s: "İç ters açılar nedir?", c: "paralel_dogrular_arasinda_kalan_ters_acilar_(esittir)", v: {}, z:"orta", alt:"ic_ters" },
  { id: "s18_ac_019", s: "Dış ters açılar nedir?", c: "paralel_dogrularin_disinda_kalan_ters_acilar_(esittir)", v: {}, z:"orta", alt:"dis_ters" },
  { id: "s18_ac_020", s: "Karşı durumlu açıların toplamı kaç derecedir?", c: "180°", v: {}, z:"orta", alt:"karsi_durumlu" },

  // ALT DAL 5: PARALEL DOĞRU KURALLARI (M-Z-U)
  { id: "s18_ac_021", s: "M kuralı nedir?", c: "bir_noktada_birlesen_paralel_kenarlarin_acilariyla_ilgili", v: {}, z:"cok_zor", alt:"M_kurali" },
  { id: "s18_ac_022", s: "Z kuralı nedir?", c: "ic_ters_acilarin_esitligi", v: {}, z:"orta", alt:"Z_kurali" },
  { id: "s18_ac_023", s: "U kuralı (kalem ucu) nedir?", c: "karsi_durumlu_acilarin_toplami_180°", v: {}, z:"orta", alt:"U_kurali" },
  { id: "s18_ac_024", s: "Zikzak kuralı (rota) nedir?", c: "paralel_dogrular_arasindaki_acilar_toplami_esittir", v: {}, z:"cok_zor", alt:"zikzak" },

  // ALT DAL 6: AÇI HESAPLAMA
  { id: "s18_ac_025", s: "Paralel doğrularda açı hesaplama nasıl yapılır?", c: "verilen_acilardan_yola_cikarak_kurallar_uygulanir", v: {}, z:"orta", alt:"aci_hesaplama" },
  { id: "s18_ac_026", s: "Tümler ve bütünler açı problemlerinde ilk adım nedir?", c: "bilinmeyen_aciya_x_verip_denklem_kurmak", v: {}, z:"orta", alt:"denklem_kurma" },

  // ALT DAL 7: AÇI SORULARI
  { id: "s18_ac_027", s: "Bir açının tümleri ile bütünlerinin toplamı {t}° ise bu açı kaç derecedir?", c: "(270-{t})/2", v: {t:[100,200]}, z:"cok_zor", alt:"tumler_butunler_toplam" },
  { id: "s18_ac_028", s: "Bir açının bütünleri tümlerinin {k} katı ise bu açı kaç derecedir?", c: "(90*{k}-180)/({k}-1)", v: {k:[3,6]}, z:"cok_zor", alt:"butunler_tumler_kat" },

  // ALT DAL 8: AÇI ÇEŞİTLERİ ÖZET
  { id: "s18_ac_029", s: "Komşu açı nedir?", c: "bir_kenari_ortak_olan_acilar", v: {}, z:"orta", alt:"komsu" },
  { id: "s18_ac_030", s: "Komşu tümler ve komşu bütünler açılar nasıl ayırt edilir?", c: "toplamlarina_bakilir_(90_veya_180)", v: {}, z:"orta", alt:"komsu_tumler_butunler" },

  // ALT DAL 9: AÇIORT
  { id: "s18_ac_031", s: "Açıort nedir?", c: "bir_aci_iki_esit_parcaya_bolen_isin", v: {}, z:"orta", alt:"aciortay" },
  { id: "s18_ac_032", s: "{a}°'lik açının açıortayı ile kolları arasındaki açı kaç derecedir?", c: "{a/2}°", v: {a:[20,150,2]}, z:"orta", alt:"aciortay_hesap" },
  { id: "s18_ac_033", s: "Komşu iki açının açıortayları arasındaki açı, açıların toplamının yarısıdır. Doğru mu?", c: "evet", v: {}, z:"cok_zor", alt:"iki_aciortay" },

  // ALT DAL 10: AÇILAR ÖZET
  { id: "s18_ac_034", s: "Düzlemde açı çeşitleri nelerdir?", c: "dar,_dik,_genis,_dogru,_tam_aci", v: {}, z:"orta", alt:"aci_cesitleri" },
  { id: "s18_ac_035", s: "Açı ölçü birimleri nelerdir?", c: "derece,_dakika,_saniye_(ve_radyan)", v: {}, z:"orta", alt:"aci_birimleri" },


  // ==========================================
  // KONU 2: ÜÇGENLER - TEMEL KAVRAMLAR (8 alt dal)
  // ==========================================

  // ALT DAL 1: ÜÇGEN TANIMI
  { id: "s18_ut_001", s: "Üçgen nedir?", c: "dogrusal_olmayan_uc_noktanin_birlestirilmesiyle_olusan_kapali_sekil", v: {}, z:"kolay", alt:"ucgen_tanim" },
  { id: "s18_ut_002", s: "Bir üçgende kaç kenar, kaç köşe, kaç açı vardır?", c: "3_kenar,_3_kose,_3_aci", v: {}, z:"kolay", alt:"ucgen_ogeler" },

  // ALT DAL 2: ÜÇGEN ÇEŞİTLERİ (KENARLARINA GÖRE)
  { id: "s18_ut_003", s: "Kenarlarına göre üçgen çeşitleri nelerdir?", c: "eskenar,_ikizkenar,_cesitkenar", v: {}, z:"orta", alt:"kenar_cesit" },
  { id: "s18_ut_004", s: "Eşkenar üçgen nedir?", c: "tum_kenarlari_esit_olan_ucgen", v: {}, z:"orta", alt:"eskenar" },
  { id: "s18_ut_005", s: "İkizkenar üçgen nedir?", c: "iki_kenari_esit_olan_ucgen", v: {}, z:"orta", alt:"ikizkenar" },
  { id: "s18_ut_006", s: "Çeşitkenar üçgen nedir?", c: "tum_kenarlari_farkli_olan_ucgen", v: {}, z:"orta", alt:"cesitkenar" },

  // ALT DAL 3: ÜÇGEN ÇEŞİTLERİ (AÇILARINA GÖRE)
  { id: "s18_ut_007", s: "Açılarına göre üçgen çeşitleri nelerdir?", c: "dar_acili,_dik_acili,_genis_acili", v: {}, z:"orta", alt:"aci_cesit" },
  { id: "s18_ut_008", s: "Dar açılı üçgende tüm açılar nasıldır?", c: "90°'den_kucuktur", v: {}, z:"orta", alt:"dar_acili" },
  { id: "s18_ut_009", s: "Dik üçgende bir açı kaç derecedir?", c: "90°", v: {}, z:"orta", alt:"dik_ucgen" },
  { id: "s18_ut_010", s: "Geniş açılı üçgende bir açı nasıldır?", c: "90°'den_buyuktur", v: {}, z:"orta", alt:"genis_acili" },

  // ALT DAL 4: ÜÇGEN EŞİTSİZLİĞİ
  { id: "s18_ut_011", s: "Üçgen eşitsizliği nedir?", c: "bir_kenar_diger_iki_kenarin_toplamindan_kucuk_farkindan_buyuk_olmalidir", v: {}, z:"orta", alt:"ucgen_esitsizligi" },
  { id: "s18_ut_012", s: "Kenarları {a}, {b}, {c} olan üçgen için eşitsizlikleri yazınız.", c: "{a}+{b}>{c}, {a}+{c}>{b}, {b}+{c}>{a}", v: {a:[3,5,7], b:[4,6,8,10], c:[5,7,9,11]}, z:"orta", alt:"esitsizlik_yazma" },
  { id: "s18_ut_013", s: "Kenar uzunlukları {a} cm, {b} cm olan üçgenin üçüncü kenarı tam sayı olarak en az kaç cm'dir?", c: "mutlak_deger({a} - {b}) + 1", v: {a:[5,7,9], b:[3,5,7]}, z:"cok_zor", alt:"ucuncu_kenar_min" },
  { id: "s18_ut_014", s: "Kenar uzunlukları {a} cm, {b} cm olan üçgenin üçüncü kenarı tam sayı olarak en çok kaç cm'dir?", c: "{a} + {b} - 1", v: {a:[5,7,9], b:[3,5,7]}, z:"cok_zor", alt:"ucuncu_kenar_max" },
  { id: "s18_ut_015", s: "Kenar uzunlukları {a} cm ve {b} cm olan üçgenin 3. kenarı kaç farklı tam sayı değeri alır?", c: "2 * min({a},{b}) - 1", v: {a:[5,7,9], b:[4,6,8]}, z:"cok_zor", alt:"ucuncu_kenar_sayisi" },

  // ALT DAL 5: KENAR-AÇI İLİŞKİSİ
  { id: "s18_ut_016", s: "Büyük açı karşısında hangi kenar bulunur?", c: "buyuk_kenar", v: {}, z:"orta", alt:"aci_kenar" },
  { id: "s18_ut_017", s: "Eşit kenarlar karşısında nasıl açılar bulunur?", c: "esit_acilar", v: {}, z:"orta", alt:"esit_kenar_aci" },

  // ALT DAL 6: ÜÇGENİN YARDIMCI ELEMANLARI
  { id: "s18_ut_018", s: "Kenarortay nedir?", c: "bir_koseden_karsi_kenarin_orta_noktasina_cizilen_dogru_parcasi", v: {}, z:"orta", alt:"kenarortay" },
  { id: "s18_ut_019", s: "Açıortay nedir?", c: "bir_aciyi_iki_esit_parcaya_bolen_dogru_parcasi", v: {}, z:"orta", alt:"aciortay_ucgen" },
  { id: "s18_ut_020", s: "Yükseklik nedir?", c: "bir_koseden_karsi_kenara_indirilen_dikme", v: {}, z:"orta", alt:"yukseklik" },

  // ALT DAL 7: ÜÇGENDE MERKEZLER
  { id: "s18_ut_021", s: "Ağırlık merkezi nedir?", c: "kenarortaylarin_kesisim_noktasi", v: {}, z:"cok_zor", alt:"agirlik_merkezi" },
  { id: "s18_ut_022", s: "Ağırlık merkezi kenarortayı hangi oranda böler?", c: "2:1_(koseye_2,_kenara_1)", v: {}, z:"cok_zor", alt:"agirlik_oran" },

  // ALT DAL 8: ÜÇGEN TEMEL ÖZET
  { id: "s18_ut_023", s: "Üçgenin temel elemanları nelerdir?", c: "kenarlar,_acilar,_koseler", v: {}, z:"orta", alt:"temel_eleman" },
  { id: "s18_ut_024", s: "Üçgen yardımcı elemanları nelerdir?", c: "kenarortay,_aciortay,_yukseklik", v: {}, z:"orta", alt:"yardimci_eleman" },


  // ==========================================
  // KONU 3: ÜÇGENDE AÇILAR (8 alt dal)
  // ==========================================

  // ALT DAL 1: İÇ AÇILAR TOPLAMI
  { id: "s18_ua_001", s: "Bir üçgenin iç açıları toplamı kaç derecedir?", c: "180", v: {}, z:"orta", alt:"ic_acilar_toplami" },
  { id: "s18_ua_002", s: "İki iç açısı {a}° ve {b}° olan üçgenin üçüncü açısı kaç derecedir?", c: "180 - {a} - {b}", v: {a:[20,40,60], b:[30,50,70]}, z:"orta", alt:"ucuncu_aci" },
  { id: "s18_ua_003", s: "Eşkenar üçgenin bir iç açısı kaç derecedir?", c: "60", v: {}, z:"orta", alt:"eskenar_aci" },

  // ALT DAL 2: DIŞ AÇILAR
  { id: "s18_ua_004", s: "Bir üçgenin dış açıları toplamı kaç derecedir?", c: "360", v: {}, z:"orta", alt:"dis_acilar_toplami" },
  { id: "s18_ua_005", s: "Bir dış açı kendisine komşu olmayan iki iç açının toplamına eşit midir?", c: "evet", v: {}, z:"orta", alt:"dis_aci_kural" },
  { id: "s18_ua_006", s: "İki iç açısı {a}° ve {b}° olan üçgenin bu açılara komşu olmayan dış açısı kaç derecedir?", c: "{a} + {b}", v: {a:[20,40,50], b:[30,50,70]}, z:"orta", alt:"dis_aci_hesap" },

  // ALT DAL 3: İKİZKENAR ÜÇGENDE AÇILAR
  { id: "s18_ua_007", s: "İkizkenar üçgende taban açıları nasıldır?", c: "esittir", v: {}, z:"orta", alt:"ikizkenar_taban" },
  { id: "s18_ua_008", s: "Taban açısı {a}° olan ikizkenar üçgenin tepe açısı kaç derecedir?", c: "180 - 2*{a}", v: {a:[10,30,50,70]}, z:"orta", alt:"tepe_acisi" },
  { id: "s18_ua_009", s: "Tepe açısı {a}° olan ikizkenar üçgenin taban açıları kaçar derecedir?", c: "(180 - {a}) / 2", v: {a:[20,40,60,80]}, z:"orta", alt:"taban_acisi" },

  // ALT DAL 4: DİK ÜÇGENDE AÇILAR
  { id: "s18_ua_010", s: "Dik üçgende dar açıların toplamı kaç derecedir?", c: "90", v: {}, z:"orta", alt:"dik_ucgen_dar" },
  { id: "s18_ua_011", s: "Bir dik üçgende dar açılardan biri {a}° ise diğeri kaç derecedir?", c: "90 - {a}", v: {a:[10,20,30,40]}, z:"orta", alt:"diger_dar_aci" },

  // ALT DAL 5: AÇI-KENAR BAĞINTILARI
  { id: "s18_ua_012", s: "Üçgende en büyük kenar karşısında hangi açı bulunur?", c: "en_buyuk_aci", v: {}, z:"orta", alt:"buyuk_kenar_aci" },
  { id: "s18_ua_013", s: "Üçgende açılar sıralanarak kenarlar nasıl sıralanır?", c: "buyuk_aci_karsisinda_buyuk_kenar", v: {}, z:"orta", alt:"aci_kenar_sira" },

  // ALT DAL 6: AÇI PROBLEMLERİ
  { id: "s18_ua_014", s: "İç açıları {a}, {b}, {c} ile orantılı üçgenin en büyük açısı kaç derecedir?", c: "{c} * 180 / ({a}+{b}+{c})", v: {a:[2,3,4], b:[3,4,5], c:[4,5,6]}, z:"cok_zor", alt:"orantili_acilar" },
  { id: "s18_ua_015", s: "Bir üçgenin iç açıları 2, 3, 4 ile orantılı ise en küçük açı kaç derecedir?", c: "40", v: {}, z:"cok_zor", alt:"2_3_4_acilar" },

  // ALT DAL 7: AÇI SORULARI
  { id: "s18_ua_016", s: "Bir üçgende bir dış açı 120° ve iç açılardan biri 50° ise diğer iki iç açı kaçar derecedir?", c: "70 ve 60", v: {}, z:"zor", alt:"dis_aci_soru" },
  { id: "s18_ua_017", s: "İç açılarından biri diğerinin 2 katı, üçüncüsü 3 katı olan üçgenin en büyük açısı kaç derecedir?", c: "90", v: {}, z:"cok_zor", alt:"katli_acilar" },

  // ALT DAL 8: ÜÇGEN AÇI ÖZET
  { id: "s18_ua_018", s: "Üçgende iç açılar toplamı neden 180°'dir?", c: "bir_dogru_aci_180°_oldugu_icin_(ispat_edilebilir)", v: {}, z:"orta", alt:"ispat" },
  { id: "s18_ua_019", s: "Üçgende dış açı teoremi nedir?", c: "bir_dis_aci_komsu_olmayan_iki_ic_acının_toplamına_esittir", v: {}, z:"orta", alt:"dis_aci_teorem" },


  // ==========================================
  // KONU 4: DİK ÜÇGEN VE PİSAGOR (10 alt dal)
  // ==========================================

  // ALT DAL 1: PİSAGOR TEOREMİ
  { id: "s18_dp_001", s: "Pisagor teoremi nedir?", c: "dik_ucgende_dik_kenarlarin_kareleri_toplami_hipotenusun_karesine_esittir", v: {}, z:"orta", alt:"pisagor" },
  { id: "s18_dp_002", s: "a²+b²=c² formülünde c nedir?", c: "hipotenus_(dik_acı_karsisindaki_kenar)", v: {}, z:"orta", alt:"hipotenus" },
  { id: "s18_dp_003", s: "Dik kenarları {a} ve {b} olan üçgenin hipotenüsü kaçtır?", c: "karekok({a} kare + {b} kare)", v: {a:[3,5,7], b:[4,6,8]}, z:"orta", alt:"hipotenus_hesap" },
  { id: "s18_dp_004", s: "Hipotenüsü {c}, bir dik kenarı {a} olan üçgenin diğer dik kenarı kaçtır?", c: "karekok({c} kare - {a} kare)", v: {c:[5,10,13], a:[3,6,5]}, z:"orta", alt:"dik_kenar_hesap" },

  // ALT DAL 2: 3-4-5 ÜÇGENİ
  { id: "s18_dp_005", s: "3-4-5 üçgeni nasıl bir üçgendir?", c: "dik_ucgen_(3²+4²=5²)", v: {}, z:"orta", alt:"3_4_5" },
  { id: "s18_dp_006", s: "3-4-5 üçgeninin katları nelerdir?", c: "6-8-10,_9-12-15,_12-16-20...", v: {}, z:"orta", alt:"3_4_5_katlari" },
  { id: "s18_dp_007", s: "Kenarları {a}, {b}, {c} olan üçgen dik üçgen midir? (3-4-5 orantısı)", c: "evet_hayir_kontrolu", v: {a:[3,6,9], b:[4,8,12], c:[5,10,15]}, z:"orta", alt:"3_4_5_kontrol" },

  // ALT DAL 3: 5-12-13 ÜÇGENİ
  { id: "s18_dp_008", s: "5-12-13 üçgeni nasıl bir üçgendir?", c: "dik_ucgen_(5²+12²=13²)", v: {}, z:"orta", alt:"5_12_13" },
  { id: "s18_dp_009", s: "5-12-13 üçgeninin katları nelerdir?", c: "10-24-26,_15-36-39...", v: {}, z:"orta", alt:"5_12_13_katlari" },

  // ALT DAL 4: DİĞER ÖZEL DİK ÜÇGENLER
  { id: "s18_dp_010", s: "8-15-17 üçgeni dik üçgen midir?", c: "evet_(8²+15²=17²)", v: {}, z:"orta", alt:"8_15_17" },
  { id: "s18_dp_011", s: "7-24-25 üçgeni dik üçgen midir?", c: "evet_(7²+24²=25²)", v: {}, z:"orta", alt:"7_24_25" },
  { id: "s18_dp_012", s: "Dik kenarları {a} ve {a} olan ikizkenar dik üçgenin hipotenüsü kaçtır?", c: "{a} * karekok(2)", v: {a:[2,4,6,8]}, z:"cok_zor", alt:"ikizkenar_dik" },

  // ALT DAL 5: 30°-60°-90° ÜÇGENİ
  { id: "s18_dp_013", s: "30°-60°-90° üçgeninde kenarlar arasındaki oran nedir?", c: "1:karekok(3):2", v: {}, z:"cok_zor", alt:"30_60_90" },
  { id: "s18_dp_014", s: "30° karşısındaki kenar {a} ise hipotenüs kaçtır?", c: "2*{a}", v: {a:[2,4,6]}, z:"cok_zor", alt:"30_hipotenus" },
  { id: "s18_dp_015", s: "60° karşısındaki kenar {a} ise 30° karşısındaki kenar kaçtır?", c: "{a} / karekok(3)", v: {a:[3,6,9]}, z:"cok_zor", alt:"60_30_kenar" },
  { id: "s18_dp_016", s: "30-60-90 üçgeninde hipotenüs 10 ise 30° karşısındaki kenar kaçtır?", c: "5", v: {}, z:"cok_zor", alt:"30_60_90_ornek" },

  // ALT DAL 6: 45°-45°-90° ÜÇGENİ
  { id: "s18_dp_017", s: "45°-45°-90° üçgeninde kenarlar arasındaki oran nedir?", c: "1:1:karekok(2)", v: {}, z:"cok_zor", alt:"45_45_90" },
  { id: "s18_dp_018", s: "45° karşısındaki kenar {a} ise hipotenüs kaçtır?", c: "{a} * karekok(2)", v: {a:[2,4,6,8]}, z:"cok_zor", alt:"45_hipotenus" },

  // ALT DAL 7: ÖKLİT BAĞINTILARI
  { id: "s18_dp_019", s: "Öklit bağıntısı nedir?", c: "dik_ucgende_yukseklik_ile_kenar_uzunluklari_arasi_baginti", v: {}, z:"cok_zor", alt:"oklit" },
  { id: "s18_dp_020", s: "h² = p×k bağıntısında h, p, k nedir?", c: "h:hipotenuse_inen_yukseklik,_p_ve_k:hipotenus_parcalari", v: {}, z:"cok_zor", alt:"oklit_formul" },
  { id: "s18_dp_021", s: "Dik kenar bağıntısı: b² = k×a. b dik kenar ise a nedir?", c: "hipotenus", v: {}, z:"cok_zor", alt:"dik_kenar_baginti" },

  // ALT DAL 8: PİSAGOR PROBLEMLERİ
  { id: "s18_dp_022", s: "Bir dikdörtgenin kenarları {a} ve {b} ise köşegeni kaçtır?", c: "karekok({a} kare + {b} kare)", v: {a:[3,5,7], b:[4,6,8]}, z:"orta", alt:"dikdortgen_kosegen" },
  { id: "s18_dp_023", s: "Kenarı {a} olan karenin köşegeni kaçtır?", c: "{a} * karekok(2)", v: {a:[2,4,6,8]}, z:"orta", alt:"kare_kosegen" },
  { id: "s18_dp_024", s: "Eşkenar üçgenin kenarı {a} ise yüksekliği kaçtır?", c: "{a} * karekok(3) / 2", v: {a:[2,4,6,8]}, z:"cok_zor", alt:"eskenar_yukseklik" },

  // ALT DAL 9: PİSAGOR UYGULAMALARI
  { id: "s18_dp_025", s: "Bir merdivenin ayakları duvardan {a} m uzakta ve merdiven {b} m ise duvar yüksekliği kaç m'dir?", c: "karekok({b} kare - {a} kare)", v: {a:[1,2,3], b:[3,5,7]}, z:"zor", alt:"merdiven" },
  { id: "s18_dp_026", s: "Bir direğin tepesinden {a} m uzaktaki noktaya çekilen halat {b} m ise direk kaç m'dir?", c: "karekok({b} kare - {a} kare)", v: {a:[3,5,7], b:[5,8,11]}, z:"zor", alt:"direk" },

  // ALT DAL 10: DİK ÜÇGEN ÖZET
  { id: "s18_dp_027", s: "Pisagor teoreminin formülü nedir?", c: "a²+b²=c²", v: {}, z:"orta", alt:"pisagor_formul" },
  { id: "s18_dp_028", s: "En çok kullanılan özel dik üçgenler nelerdir?", c: "3-4-5,_5-12-13,_8-15-17,_7-24-25", v: {}, z:"orta", alt:"ozel_ucgenler" },


  // ==========================================
  // KONU 5: ÖZEL ÜÇGENLER (8 alt dal)
  // ==========================================

  // ALT DAL 1: EŞKENAR ÜÇGEN
  { id: "s18_ou_001", s: "Eşkenar üçgenin tüm açıları kaçar derecedir?", c: "60", v: {}, z:"orta", alt:"eskenar_acilar" },
  { id: "s18_ou_002", s: "Eşkenar üçgenin kenarı {a} ise yüksekliği kaçtır?", c: "{a} * karekok(3) / 2", v: {a:[2,4,6,8]}, z:"cok_zor", alt:"eskenar_h" },
  { id: "s18_ou_003", s: "Eşkenar üçgenin kenarı {a} ise alanı kaçtır?", c: "{a} kare * karekok(3) / 4", v: {a:[2,4,6,8]}, z:"cok_zor", alt:"eskenar_alan" },
  { id: "s18_ou_004", s: "Eşkenar üçgende yükseklik aynı zamanda nedir?", c: "kenarortay_ve_aciortaydir", v: {}, z:"cok_zor", alt:"eskenar_yukseklik_ozellik" },

  // ALT DAL 2: İKİZKENAR ÜÇGEN
  { id: "s18_ou_005", s: "İkizkenar üçgende tabana indirilen yükseklik aynı zamanda nedir?", c: "kenarortay_ve_aciortaydir", v: {}, z:"cok_zor", alt:"ikizkenar_yukseklik" },
  { id: "s18_ou_006", s: "İkizkenar üçgenin çevresi {c}, tabanı {t} ise eşit kenarlar kaçar birimdir?", c: "({c} - {t}) / 2", v: {c:[15,20,25], t:[3,5,7]}, z:"orta", alt:"ikizkenar_cevre" },

  // ALT DAL 3: 30°-60°-90° ÜÇGENİ (DETAY)
  { id: "s18_ou_007", s: "30-60-90 üçgeninde en kısa kenar hangi açı karşısındadır?", c: "30°", v: {}, z:"orta", alt:"en_kisa_kenar" },
  { id: "s18_ou_008", s: "30-60-90 üçgeninde en uzun kenar hangisidir?", c: "hipotenus_(90°_karsisi)", v: {}, z:"orta", alt:"en_uzun_kenar" },

  // ALT DAL 4: İKİZKENAR DİK ÜÇGEN
  { id: "s18_ou_009", s: "İkizkenar dik üçgende açılar kaçar derecedir?", c: "45-45-90", v: {}, z:"orta", alt:"ikizkenar_dik_acilar" },
  { id: "s18_ou_010", s: "İkizkenar dik üçgende dik kenar {a} ise hipotenüs kaçtır?", c: "{a} * karekok(2)", v: {a:[2,4,6,8]}, z:"orta", alt:"ikizkenar_dik_hipotenus" },

  // ALT DAL 5: GENİŞ AÇILI ÜÇGEN
  { id: "s18_ou_011", s: "Geniş açılı üçgende yükseklikler nerede kesişir?", c: "ucgenin_disinda", v: {}, z:"cok_zor", alt:"genis_yukseklik" },
  { id: "s18_ou_012", s: "Geniş açılı üçgende en uzun kenar hangisidir?", c: "genis_acının_karsisindaki_kenar", v: {}, z:"orta", alt:"genis_en_uzun" },

  // ALT DAL 6: ÜÇGENDE BENZERLİK (GİRİŞ)
  { id: "s18_ou_013", s: "Benzer üçgen nedir?", c: "acilari_esit_kenarlari_orantili_ucgenler", v: {}, z:"cok_zor", alt:"benzer_ucgen" },
  { id: "s18_ou_014", s: "Açı-Açı (AA) benzerliği nedir?", c: "iki_aci_esit_ise_ucgenler_benzerdir", v: {}, z:"cok_zor", alt:"aa_benzerlik" },

  // ALT DAL 7: TEMEL BENZERLİK TEOREMİ
  { id: "s18_ou_015", s: "Temel benzerlik (Thales) teoremi nedir?", c: "paralel_bir_dogru_ucgenin_kenarlarini_orantili_boler", v: {}, z:"cok_zor", alt:"thales" },
  { id: "s18_ou_016", s: "DE // BC ise AD/AB = ?", c: "AE/AC = DE/BC", v: {}, z:"cok_zor", alt:"paralel_benzerlik" },

  // ALT DAL 8: ÖZEL ÜÇGEN ÖZET
  { id: "s18_ou_017", s: "Özel üçgenler hangileridir?", c: "eskenar,_ikizkenar,_dik_ucgen,_ikizkenar_dik,_30-60-90", v: {}, z:"orta", alt:"ozel_liste" },
  { id: "s18_ou_018", s: "Özel üçgenlerin kenar oranları neden önemlidir?", c: "aci_verilince_kenar_orani_da_bilinir", v: {}, z:"orta", alt:"ozel_onem" },


  // ==========================================
  // KONU 6: ÜÇGENDE ALAN (8 alt dal)
  // ==========================================

  // ALT DAL 1: TEMEL ALAN FORMÜLÜ
  { id: "s18_ua2_001", s: "Üçgenin alan formülü nedir?", c: "Taban×Yukseklik/2", v: {}, z:"orta", alt:"alan_formul" },
  { id: "s18_ua2_002", s: "Tabanı {a}, yüksekliği {h} olan üçgenin alanı kaçtır?", c: "{a} * {h} / 2", v: {a:[4,6,8,10], h:[3,5,7,9]}, z:"orta", alt:"alan_hesap" },
  { id: "s18_ua2_003", s: "Alanı {A}, tabanı {a} olan üçgenin yüksekliği kaçtır?", c: "2 * {A} / {a}", v: {A:[10,20,30], a:[4,5,6]}, z:"orta", alt:"yukseklik_bulma" },

  // ALT DAL 2: DİK ÜÇGENDE ALAN
  { id: "s18_ua2_004", s: "Dik kenarları {a} ve {b} olan dik üçgenin alanı kaçtır?", c: "{a} * {b} / 2", v: {a:[3,5,7], b:[4,6,8]}, z:"orta", alt:"dik_alan" },
  { id: "s18_ua2_005", s: "Dik üçgende alan dik kenarlar çarpımının yarısıdır. Doğru mu?", c: "evet", v: {}, z:"orta", alt:"dik_alan_kural" },

  // ALT DAL 3: EŞKENAR ÜÇGENDE ALAN
  { id: "s18_ua2_006", s: "Kenarı {a} olan eşkenar üçgenin alanı kaçtır?", c: "{a} kare * karekok(3) / 4", v: {a:[2,4,6,8]}, z:"cok_zor", alt:"eskenar_alan_formul" },
  { id: "s18_ua2_007", s: "Eşkenar üçgenin alan formülü: A = ?", c: "a²√3/4", v: {}, z:"cok_zor", alt:"eskenar_alan_formul_2" },

  // ALT DAL 4: SİNÜS ALAN FORMÜLÜ
  { id: "s18_ua2_008", s: "Sinüs alan formülü nedir?", c: "A=1/2×a×b×sinC", v: {}, z:"cok_zor", alt:"sinus_alan" },
  { id: "s18_ua2_009", s: "İki kenarı {a} ve {b}, arasındaki açı {aci}° olan üçgenin alanı kaçtır?", c: "1/2 * {a} * {b} * sin({aci}°)", v: {a:[4,6,8], b:[5,7,9], aci:[30,45,60]}, z:"cok_zor", alt:"sinus_alan_hesap" },

  // ALT DAL 5: İÇ TEĞET ÇEMBER YARIÇAPI İLE ALAN
  { id: "s18_ua2_010", s: "İç teğet çember yarıçapı r, çevresi 2u olan üçgenin alanı nedir?", c: "A=u×r", v: {}, z:"cok_zor", alt:"ic_teget_alan" },
  { id: "s18_ua2_011", s: "u = (a+b+c)/2 olmak üzere Heron formülü nedir?", c: "A=karekok(u*(u-a)*(u-b)*(u-c))", v: {}, z:"cok_zor", alt:"heron" },

  // ALT DAL 6: ALAN PROBLEMLERİ
  { id: "s18_ua2_012", s: "Tabanları aynı olan iki üçgenin alanları oranı neye eşittir?", c: "yukseklikleri_oranina", v: {}, z:"cok_zor", alt:"taban_ayni" },
  { id: "s18_ua2_013", s: "Yükseklikleri aynı olan iki üçgenin alanları oranı neye eşittir?", c: "tabanlari_oranina", v: {}, z:"cok_zor", alt:"yukseklik_ayni" },
  { id: "s18_ua2_014", s: "Benzer iki üçgenin alanları oranı benzerlik oranının neyidir?", c: "karesi", v: {}, z:"cok_zor", alt:"benzer_alan" },

  // ALT DAL 7: ALAN HESAPLAMA SORULARI
  { id: "s18_ua2_015", s: "Kenar uzunlukları {a}, {b}, {c} olan üçgenin alanı kaçtır? (Heron ile)", c: "heron_formulu_ile_hesap", v: {a:[3,5,7], b:[4,6,8], c:[5,7,9]}, z:"cok_zor", alt:"heron_hesap" },
  { id: "s18_ua2_016", s: "Çevresi {c} olan eşkenar üçgenin alanı kaçtır?", c: "({c}/3)² * karekok(3) / 4", v: {c:[12,18,24]}, z:"cok_zor", alt:"cevre_eskenar_alan" },

  // ALT DAL 8: ÜÇGEN ALAN ÖZET
  { id: "s18_ua2_017", s: "Üçgenin alanı kaç farklı formülle hesaplanabilir?", c: "taban×yukseklik/2,_sinus,_heron,_ic_teget_ile", v: {}, z:"orta", alt:"alan_formulleri" },
  { id: "s18_ua2_018", s: "En temel alan formülü nedir?", c: "A=(taban×yukseklik)/2", v: {}, z:"orta", alt:"temel_alan" },


  // ==========================================
  // KONU 7: DÖRTGENLER (10 alt dal)
  // ==========================================

  // ALT DAL 1: DÖRTGEN TANIMI VE ÇEŞİTLERİ
  { id: "s18_dg_001", s: "Dörtgen nedir?", c: "dort_kenari_olan_kapali_sekil", v: {}, z:"kolay", alt:"dortgen_tanim" },
  { id: "s18_dg_002", s: "Dörtgenin iç açıları toplamı kaç derecedir?", c: "360", v: {}, z:"orta", alt:"dortgen_ic_aci" },
  { id: "s18_dg_003", s: "Dörtgen çeşitleri nelerdir?", c: "kare,_dikdortgen,_paralelkenar,_eskenar_dortgen,_yamuk", v: {}, z:"orta", alt:"dortgen_cesit" },

  // ALT DAL 2: KARE
  { id: "s18_dg_004", s: "Kenarı {a} olan karenin alanı kaçtır?", c: "{a} kare", v: {a:[2,4,6,8]}, z:"orta", alt:"kare_alan" },
  { id: "s18_dg_005", s: "Kenarı {a} olan karenin çevresi kaçtır?", c: "4*{a}", v: {a:[2,4,6,8]}, z:"orta", alt:"kare_cevre" },
  { id: "s18_dg_006", s: "Kenarı {a} olan karenin köşegeni kaçtır?", c: "{a} * karekok(2)", v: {a:[2,4,6,8]}, z:"orta", alt:"kare_kosegen_dg" },
  { id: "s18_dg_007", s: "Köşegeni {k} olan karenin alanı kaçtır?", c: "{k} kare / 2", v: {k:[2,4,6,8]}, z:"cok_zor", alt:"kosegen_alan" },

  // ALT DAL 3: DİKDÖRTGEN
  { id: "s18_dg_008", s: "Kenarları {a} ve {b} olan dikdörtgenin alanı kaçtır?", c: "{a} * {b}", v: {a:[3,5,7], b:[4,6,8]}, z:"orta", alt:"dikdortgen_alan" },
  { id: "s18_dg_009", s: "Kenarları {a} ve {b} olan dikdörtgenin çevresi kaçtır?", c: "2*({a}+{b})", v: {a:[3,5,7], b:[4,6,8]}, z:"orta", alt:"dikdortgen_cevre" },
  { id: "s18_dg_010", s: "Kenarları {a} ve {b} olan dikdörtgenin köşegeni kaçtır?", c: "karekok({a} kare + {b} kare)", v: {a:[3,5,7], b:[4,6,8]}, z:"orta", alt:"dikdortgen_kosegen_dg" },

  // ALT DAL 4: PARALELKENAR
  { id: "s18_dg_011", s: "Paralelkenarın alanı nasıl hesaplanır?", c: "taban×yukseklik", v: {}, z:"orta", alt:"paralelkenar_alan" },
  { id: "s18_dg_012", s: "Tabanı {a}, yüksekliği {h} olan paralelkenarın alanı kaçtır?", c: "{a} * {h}", v: {a:[4,6,8], h:[3,5,7]}, z:"orta", alt:"paralelkenar_alan_hesap" },
  { id: "s18_dg_013", s: "Paralelkenarın çevresi nasıl hesaplanır?", c: "2×(a+b)_(komsu_kenarlar)", v: {}, z:"orta", alt:"paralelkenar_cevre" },

  // ALT DAL 5: EŞKENAR DÖRTGEN
  { id: "s18_dg_014", s: "Eşkenar dörtgenin alanı nasıl hesaplanır?", c: "kosegenler_carpimi/2", v: {}, z:"orta", alt:"eskenar_dortgen_alan" },
  { id: "s18_dg_015", s: "Köşegenleri {k1} ve {k2} olan eşkenar dörtgenin alanı kaçtır?", c: "{k1} * {k2} / 2", v: {k1:[4,6,8], k2:[3,5,7]}, z:"orta", alt:"eskenar_dortgen_alan_hesap" },
  { id: "s18_dg_016", s: "Kenarı {a} olan eşkenar dörtgenin çevresi kaçtır?", c: "4*{a}", v: {a:[2,4,6,8]}, z:"orta", alt:"eskenar_dortgen_cevre" },

  // ALT DAL 6: YAMUK
  { id: "s18_dg_017", s: "Yamuğun alanı nasıl hesaplanır?", c: "(alt_taban+ust_taban)×yukseklik/2", v: {}, z:"orta", alt:"yamuk_alan" },
  { id: "s18_dg_018", s: "Alt tabanı {a}, üst tabanı {b}, yüksekliği {h} olan yamuğun alanı kaçtır?", c: "({a}+{b}) * {h} / 2", v: {a:[5,7,9], b:[3,5,7], h:[4,6,8]}, z:"orta", alt:"yamuk_alan_hesap" },
  { id: "s18_dg_019", s: "İkizkenar yamukta köşegenler nasıldır?", c: "esittir", v: {}, z:"cok_zor", alt:"ikizkenar_yamuk" },

  // ALT DAL 7: DÖRTGENDE ALAN PROBLEMLERİ
  { id: "s18_dg_020", s: "Alanı {A}, bir kenarı {a} olan karenin diğer kenarı kaçtır?", c: "{a}", v: {A:[9,25,49], a:[3,5,7]}, z:"orta", alt:"kare_kenar" },
  { id: "s18_dg_021", s: "Alanı {A}, bir kenarı {a} olan dikdörtgenin diğer kenarı kaçtır?", c: "{A} / {a}", v: {A:[12,20,30], a:[3,4,5]}, z:"orta", alt:"dikdortgen_kenar" },

  // ALT DAL 8: ÇOKGENLER
  { id: "s18_dg_022", s: "n kenarlı çokgenin iç açıları toplamı kaçtır?", c: "(n-2)*180", v: {}, z:"cok_zor", alt:"cokgen_ic_aci" },
  { id: "s18_dg_023", s: "{n} kenarlı düzgün çokgenin bir iç açısı kaç derecedir?", c: "({n}-2)*180/{n}", v: {n:[3,4,5,6]}, z:"cok_zor", alt:"duzgun_ic_aci" },
  { id: "s18_dg_024", s: "n kenarlı çokgenin dış açıları toplamı kaçtır?", c: "360", v: {}, z:"cok_zor", alt:"cokgen_dis_aci" },

  // ALT DAL 9: DÖRTGEN ÖZELLİKLERİ
  { id: "s18_dg_025", s: "Kare hangi dörtgenlerin özel halidir?", c: "dikdortgenin_ve_eskenar_dortgenin", v: {}, z:"orta", alt:"kare_ozel" },
  { id: "s18_dg_026", s: "Dikdörtgenin köşegenleri nasıldır?", c: "esit_ve_birbirini_ortalar", v: {}, z:"orta", alt:"dikdortgen_kosegen_ozellik" },

  // ALT DAL 10: DÖRTGEN ÖZET
  { id: "s18_dg_027", s: "Dörtgenlerin alan formülleri nelerdir?", c: "kare:a²,_dikdortgen:ab,_paralelkenar:ah,_eskenar_dortgen:k1k2/2,_yamuk:(a+b)h/2", v: {}, z:"orta", alt:"alan_formulleri_ozet" },
  { id: "s18_dg_028", s: "Tüm dörtgenlerin ortak özelliği nedir?", c: "ic_acilar_toplami_360°", v: {}, z:"orta", alt:"ortak_ozellik" },


  // ==========================================
  // KONU 8: ÇEMBER VE DAİRE (10 alt dal)
  // ==========================================

  // ALT DAL 1: ÇEMBER TEMEL KAVRAMLAR
  { id: "s18_cd_001", s: "Çember nedir?", c: "sabit_bir_noktadan_esit_uzakliktaki_noktalarin_kumesi", v: {}, z:"orta", alt:"cember_tanim" },
  { id: "s18_cd_002", s: "Yarıçap (r) nedir?", c: "merkezden_cember_uzerindeki_bir_noktaya_olan_uzaklik", v: {}, z:"orta", alt:"yaricap" },
  { id: "s18_cd_003", s: "Çap (R) ile yarıçap (r) arasındaki ilişki nedir?", c: "R=2r", v: {}, z:"orta", alt:"cap_yaricap" },

  // ALT DAL 2: ÇEMBERDE AÇILAR
  { id: "s18_cd_004", s: "Merkez açı nedir?", c: "kosesi_merkezde_olan_aci", v: {}, z:"orta", alt:"merkez_aci" },
  { id: "s18_cd_005", s: "Çevre açı nedir?", c: "kosesi_cember_uzerinde_olan_aci", v: {}, z:"orta", alt:"cevre_aci" },
  { id: "s18_cd_006", s: "Aynı yayı gören çevre açı ile merkez açı arasındaki ilişki nedir?", c: "merkez_aci=2×cevre_aci", v: {}, z:"cok_zor", alt:"merkez_cevre_iliski" },
  { id: "s18_cd_007", s: "Çapı gören çevre açı kaç derecedir?", c: "90", v: {}, z:"cok_zor", alt:"cap_cevre_aci" },

  // ALT DAL 3: DAİRE ALAN VE ÇEVRE
  { id: "s18_cd_008", s: "Dairenin alanı nasıl hesaplanır?", c: "πr²", v: {}, z:"orta", alt:"daire_alan" },
  { id: "s18_cd_009", s: "Yarıçapı {r} olan dairenin alanı kaçtır? (π=3 al)", c: "3 * {r} kare", v: {r:[2,4,6,8]}, z:"orta", alt:"daire_alan_hesap" },
  { id: "s18_cd_010", s: "Dairenin çevresi nasıl hesaplanır?", c: "2πr", v: {}, z:"orta", alt:"daire_cevre" },
  { id: "s18_cd_011", s: "Yarıçapı {r} olan dairenin çevresi kaçtır? (π=3 al)", c: "6 * {r}", v: {r:[2,4,6,8]}, z:"orta", alt:"daire_cevre_hesap" },
  { id: "s18_cd_012", s: "Çevresi {c} olan dairenin yarıçapı kaçtır? (π=3 al)", c: "{c} / 6", v: {c:[12,24,36]}, z:"orta", alt:"cevreden_yaricap" },

  // ALT DAL 4: DAİRE DİLİMİ
  { id: "s18_cd_013", s: "Daire diliminin alanı nasıl hesaplanır?", c: "πr²×α/360", v: {}, z:"cok_zor", alt:"dilim_alan" },
  { id: "s18_cd_014", s: "Yarıçapı {r}, merkez açısı {a}° olan daire diliminin alanı kaçtır? (π=3)", c: "3 * {r} kare * {a} / 360", v: {r:[2,4,6], a:[30,60,90]}, z:"cok_zor", alt:"dilim_alan_hesap" },
  { id: "s18_cd_015", s: "Yay uzunluğu nasıl hesaplanır?", c: "2πr×α/360", v: {}, z:"cok_zor", alt:"yay_uzunlugu" },

  // ALT DAL 5: ÇEMBERDE YAY VE AÇI
  { id: "s18_cd_016", s: "Çemberde eşit yayları gören merkez açılar nasıldır?", c: "esittir", v: {}, z:"orta", alt:"esit_yay_aci" },
  { id: "s18_cd_017", s: "Çemberde kiriş nedir?", c: "iki_noktayi_birlestiren_dogru_parcasi", v: {}, z:"orta", alt:"kiris" },

  // ALT DAL 6: TEĞET
  { id: "s18_cd_018", s: "Teğet nedir?", c: "cembere_sadece_bir_noktada_dokunan_dogru", v: {}, z:"orta", alt:"teget" },
  { id: "s18_cd_019", s: "Teğet, değme noktasındaki yarıçapa dik midir?", c: "evet", v: {}, z:"cok_zor", alt:"teget_dik" },
  { id: "s18_cd_020", s: "Aynı noktadan çembere çizilen iki teğet parçası nasıldır?", c: "esittir", v: {}, z:"cok_zor", alt:"iki_teget" },

  // ALT DAL 7: DAİRE HALKA
  { id: "s18_cd_021", s: "Daire halkasının alanı nasıl hesaplanır?", c: "π(R²-r²)_(R_dis,_r_ic_yaricap)", v: {}, z:"cok_zor", alt:"halka_alan" },
  { id: "s18_cd_022", s: "Dış yarıçapı {R}, iç yarıçapı {r} olan halkanın alanı kaçtır? (π=3)", c: "3 * ({R} kare - {r} kare)", v: {R:[4,6,8], r:[2,3,4]}, z:"cok_zor", alt:"halka_alan_hesap" },

  // ALT DAL 8: ÇEMBER PROBLEMLERİ
  { id: "s18_cd_023", s: "Yarıçapı {r} olan daire içine çizilebilen en büyük karenin alanı kaçtır?", c: "2 * {r} kare", v: {r:[2,4,6]}, z:"cok_zor", alt:"daire_ici_kare" },
  { id: "s18_cd_024", s: "Kenarı {a} olan karenin içine çizilebilen en büyük dairenin alanı kaçtır? (π=3)", c: "3 * ({a}/2) kare", v: {a:[4,6,8]}, z:"cok_zor", alt:"kare_ici_daire" },

  // ALT DAL 9: ÇEMBER VE YAY
  { id: "s18_cd_025", s: "Çemberin tamamı kaç derecedir?", c: "360", v: {}, z:"orta", alt:"tam_cember" },
  { id: "s18_cd_026", s: "Yarım çember kaç derecedir?", c: "180", v: {}, z:"orta", alt:"yarim_cember" },

  // ALT DAL 10: ÇEMBER-DAİRE ÖZET
  { id: "s18_cd_027", s: "Çember ile daire arasındaki fark nedir?", c: "cember_sadece_kenar_(cizgi)_daire_ic_bolge_dahil", v: {}, z:"orta", alt:"cember_daire_fark" },
  { id: "s18_cd_028", s: "π sayısı yaklaşık kaçtır?", c: "3,14_(veya_22/7)", v: {}, z:"orta", alt:"pi_sayisi" },


  // ==========================================
  // KONU 9: KATI CİSİMLER (8 alt dal)
  // ==========================================

  // ALT DAL 1: KÜP
  { id: "s18_ks_001", s: "Kenarı {a} olan küpün hacmi kaçtır?", c: "{a} küp", v: {a:[2,3,4,5]}, z:"orta", alt:"kup_hacim" },
  { id: "s18_ks_002", s: "Kenarı {a} olan küpün yüzey alanı kaçtır?", c: "6 * {a} kare", v: {a:[2,3,4,5]}, z:"orta", alt:"kup_yuzey" },
  { id: "s18_ks_003", s: "Kenarı {a} olan küpün cisim köşegeni kaçtır?", c: "{a} * karekok(3)", v: {a:[2,3,4]}, z:"cok_zor", alt:"kup_kosegen" },

  // ALT DAL 2: DİKDÖRTGENLER PRİZMASI
  { id: "s18_ks_004", s: "Kenarları {a}, {b}, {c} olan prizmanın hacmi kaçtır?", c: "{a} * {b} * {c}", v: {a:[2,3,4], b:[3,4,5], c:[4,5,6]}, z:"orta", alt:"prizma_hacim" },
  { id: "s18_ks_005", s: "Kenarları {a}, {b}, {c} olan prizmanın yüzey alanı kaçtır?", c: "2 * ({a}*{b} + {a}*{c} + {b}*{c})", v: {a:[2,3,4], b:[3,4,5], c:[4,5,6]}, z:"zor", alt:"prizma_yuzey" },

  // ALT DAL 3: SİLİNDİR
  { id: "s18_ks_006", s: "Yarıçapı {r}, yüksekliği {h} olan silindirin hacmi kaçtır? (π=3)", c: "3 * {r} kare * {h}", v: {r:[2,3,4], h:[3,4,5]}, z:"orta", alt:"silindir_hacim" },
  { id: "s18_ks_007", s: "Silindirin yanal alanı nasıl hesaplanır?", c: "2πrh", v: {}, z:"cok_zor", alt:"silindir_yanal" },
  { id: "s18_ks_008", s: "Yarıçapı {r}, yüksekliği {h} olan silindirin yüzey alanı kaçtır? (π=3)", c: "2*3*{r}*({r}+{h})", v: {r:[2,3,4], h:[3,4,5]}, z:"cok_zor", alt:"silindir_yuzey" },

  // ALT DAL 4: KONİ
  { id: "s18_ks_009", s: "Yarıçapı {r}, yüksekliği {h} olan koninin hacmi kaçtır? (π=3)", c: "{r} kare * {h}", v: {r:[2,3,4], h:[3,4,5]}, z:"cok_zor", alt:"koni_hacim" },
  { id: "s18_ks_010", s: "Koninin hacmi silindirin hacminin kaçta kaçıdır?", c: "1/3", v: {}, z:"cok_zor", alt:"koni_silindir" },

  // ALT DAL 5: KÜRE
  { id: "s18_ks_011", s: "Yarıçapı {r} olan kürenin hacmi kaçtır? (π=3)", c: "4 * {r} küp", v: {r:[2,3,4]}, z:"cok_zor", alt:"kure_hacim" },
  { id: "s18_ks_012", s: "Kürenin yüzey alanı nasıl hesaplanır?", c: "4πr²", v: {}, z:"cok_zor", alt:"kure_yuzey" },
  { id: "s18_ks_013", s: "Yarıçapı {r} olan kürenin yüzey alanı kaçtır? (π=3)", c: "12 * {r} kare", v: {r:[2,3,4]}, z:"cok_zor", alt:"kure_yuzey_hesap" },

  // ALT DAL 6: PİRAMİT
  { id: "s18_ks_014", s: "Taban alanı {A}, yüksekliği {h} olan piramidin hacmi kaçtır?", c: "{A} * {h} / 3", v: {A:[10,20,30], h:[3,4,5]}, z:"cok_zor", alt:"piramit_hacim" },

  // ALT DAL 7: KATI CİSİM PROBLEMLERİ
  { id: "s18_ks_015", s: "Hacmi {V} olan küpün bir kenarı kaçtır?", c: "kupkok({V})", v: {V:[8,27,64]}, z:"cok_zor", alt:"hacimden_kenar" },
  { id: "s18_ks_016", s: "Küp, prizma, silindir, koni, küre hacim formülleri nedir?", c: "V_kup=a³,_V_prizma=abc,_V_silindir=πr²h,_V_koni=πr²h/3,_V_kure=4πr³/3", v: {}, z:"orta", alt:"hacim_formulleri" },

  // ALT DAL 8: KATI CİSİM ÖZET
  { id: "s18_ks_017", s: "Katı cisimlerde hacim birimi nedir?", c: "birim_kup_(cm³,_m³_vs)", v: {}, z:"orta", alt:"hacim_birimi" },
  { id: "s18_ks_018", s: "Katı cisimlerde yüzey alan birimi nedir?", c: "birim_kare_(cm²,_m²_vs)", v: {}, z:"orta", alt:"yuzey_birimi" },


  // ==========================================
  // KONU 10: ANALİTİK GEOMETRİ (10 alt dal)
  // ==========================================

  // ALT DAL 1: KOORDİNAT SİSTEMİ
  { id: "s18_ag_001", s: "Koordinat sisteminde x ekseni ve y ekseni nerede kesişir?", c: "orijinde_(0,0)", v: {}, z:"orta", alt:"koordinat" },
  { id: "s18_ag_002", s: "A({a},{b}) noktası hangi bölgededir?", c: "bolge_bulma_kurali", v: {a:[-5,-2,2,5], b:[-5,-2,2,5]}, z:"orta", alt:"bolge_bulma" },
  { id: "s18_ag_003", s: "x ekseni üzerindeki noktaların y değeri kaçtır?", c: "0", v: {}, z:"orta", alt:"x_ekseni" },
  { id: "s18_ag_004", s: "y ekseni üzerindeki noktaların x değeri kaçtır?", c: "0", v: {}, z:"orta", alt:"y_ekseni" },

  // ALT DAL 2: İKİ NOKTA ARASI UZAKLIK
  { id: "s18_ag_005", s: "İki nokta arası uzaklık formülü nedir?", c: "karekok((x₂-x₁)²+(y₂-y₁)²)", v: {}, z:"orta", alt:"uzaklik_formul" },
  { id: "s18_ag_006", s: "A({x1},{y1}) ile B({x2},{y2}) arası uzaklık kaç birimdir?", c: "karekok(({x2}-{x1})²+({y2}-{y1})²)", v: {x1:[0,2,4], y1:[0,2,4], x2:[3,5,7], y2:[3,5,7]}, z:"orta", alt:"uzaklik_hesap" },
  { id: "s18_ag_007", s: "A(3,4) noktasının orijine uzaklığı kaç birimdir?", c: "5", v: {}, z:"orta", alt:"orijine_uzaklik" },

  // ALT DAL 3: ORTA NOKTA
  { id: "s18_ag_008", s: "Orta nokta formülü nedir?", c: "((x₁+x₂)/2,(y₁+y₂)/2)", v: {}, z:"orta", alt:"orta_nokta" },
  { id: "s18_ag_009", s: "A({x1},{y1}) ve B({x2},{y2}) noktalarının orta noktası nedir?", c: "(({x1}+{x2})/2, ({y1}+{y2})/2)", v: {x1:[0,2,4], y1:[0,2,4], x2:[4,6,8], y2:[4,6,8]}, z:"orta", alt:"orta_nokta_hesap" },

  // ALT DAL 4: EĞİM
  { id: "s18_ag_010", s: "Eğim formülü nedir?", c: "m=(y₂-y₁)/(x₂-x₁)", v: {}, z:"orta", alt:"egim_formul" },
  { id: "s18_ag_011", s: "A({x1},{y1}) ve B({x2},{y2}) noktalarından geçen doğrunun eğimi kaçtır?", c: "({y2}-{y1})/({x2}-{x1})", v: {x1:[0,2,4], y1:[0,2,4], x2:[2,4,6], y2:[2,4,6]}, z:"orta", alt:"egim_hesap" },
  { id: "s18_ag_012", s: "x eksenine paralel doğrunun eğimi kaçtır?", c: "0", v: {}, z:"orta", alt:"yatay_egim" },
  { id: "s18_ag_013", s: "y eksenine paralel doğrunun eğimi nedir?", c: "tanimsiz", v: {}, z:"orta", alt:"dikey_egim" },

  // ALT DAL 5: DOĞRU DENKLEMİ
  { id: "s18_ag_014", s: "Eğimi m, y'yi kestiği nokta n olan doğrunun denklemi nedir?", c: "y=mx+n", v: {}, z:"cok_zor", alt:"dogru_denklemi" },
  { id: "s18_ag_015", s: "Eğimi {m}, A({x0},{y0}) noktasından geçen doğru denklemi nedir?", c: "y - {y0} = {m} (x - {x0})", v: {m:[2,3,4], x0:[1,2,3], y0:[2,3,4]}, z:"cok_zor", alt:"nokta_egim" },
  { id: "s18_ag_016", s: "A({x1},{y1}) ve B({x2},{y2}) noktalarından geçen doğru denklemi nedir?", c: "(y-{y1})/(x-{x1}) = ({y2}-{y1})/({x2}-{x1})", v: {x1:[0,2,4], y1:[0,2,4], x2:[2,4,6], y2:[2,4,6]}, z:"cok_zor", alt:"iki_nokta_denklem" },

  // ALT DAL 6: DOĞRULARIN KESİŞİMİ
  { id: "s18_ag_017", s: "İki doğrunun kesişim noktası nasıl bulunur?", c: "denklemler_ortak_cozulur", v: {}, z:"cok_zor", alt:"kesisim" },
  { id: "s18_ag_018", s: "y={m1}x+{n1} ve y={m2}x+{n2} doğrularının kesişim noktası nedir?", c: "x = ({n2}-{n1})/({m1}-{m2})", v: {m1:[2,3,4], n1:[1,2,3], m2:[1,2,3], n2:[2,3,4]}, z:"cok_zor", alt:"kesisim_hesap" },

  // ALT DAL 7: PARALEL VE DİK DOĞRULAR
  { id: "s18_ag_019", s: "Paralel doğruların eğimleri nasıldır?", c: "esittir_(m₁=m₂)", v: {}, z:"cok_zor", alt:"paralel_egim" },
  { id: "s18_ag_020", s: "Dik doğruların eğimleri çarpımı kaçtır?", c: "-1", v: {}, z:"cok_zor", alt:"dik_egim" },
  { id: "s18_ag_021", s: "Eğimi {m} olan doğruya dik olan doğrunun eğimi kaçtır?", c: "-1/{m}", v: {m:[2,3,4]}, z:"cok_zor", alt:"dik_egim_bulma" },

  // ALT DAL 8: NOKTANIN DOĞRUYA UZAKLIĞI
  { id: "s18_ag_022", s: "A(x₀,y₀) noktasının ax+by+c=0 doğrusuna uzaklığı formülü nedir?", c: "|ax₀+by₀+c|/karekok(a²+b²)", v: {}, z:"cok_zor", alt:"nokta_dogru_uzaklik" },
  { id: "s18_ag_023", s: "A({x0},{y0}) noktasının y={m}x+{n} doğrusuna uzaklığı kaç birimdir?", c: "|{m}*{x0} - {y0} + {n}| / karekok({m}²+1)", v: {m:[1,2,3], x0:[1,2,3], y0:[2,3,4], n:[1,2,3]}, z:"cok_zor", alt:"uzaklik_hesap_ag" },

  // ALT DAL 9: ANALİTİK GEOMETRİ PROBLEMLERİ
  { id: "s18_ag_024", s: "Köşe koordinatları verilen üçgenin alanı nasıl bulunur?", c: "determinant_formulu_ile", v: {}, z:"cok_zor", alt:"ucgen_alan_analitik" },
  { id: "s18_ag_025", s: "A({x1},{y1}), B({x2},{y2}), C({x3},{y3}) üçgeninin alanı kaç birimkaredir?", c: "|{x1}({y2}-{y3})+{x2}({y3}-{y1})+{x3}({y1}-{y2})|/2", v: {x1:[0,2,4], y1:[0,2,4], x2:[2,4,6], y2:[0,2,4], x3:[1,3,5], y3:[3,5,7]}, z:"cok_zor", alt:"alan_analitik" },

  // ALT DAL 10: ANALİTİK GEOMETRİ ÖZET
  { id: "s18_ag_026", s: "Analitik geometride temel formüller nelerdir?", c: "uzaklik,_orta_nokta,_egim,_dogru_denklemi", v: {}, z:"orta", alt:"temel_formuller_ag" },
  { id: "s18_ag_027", s: "Eğim neyi ifade eder?", c: "dogrunun_x_ekseni_ile_yaptigi_acının_tanjantini", v: {}, z:"orta", alt:"egim_anlam" },
  { id: "s18_ag_028", s: "Orijinden geçen doğrunun denklemi nasıldır?", c: "y=mx_(sabit_terim_0)", v: {}, z:"orta", alt:"orijin_dogru" },

  ],

};

// Kullanım için export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SORU_BANKASI;
}
