// ============================================
// questions.js - SORU ŞABLONLARI (DÜZELTİLMİŞ)
// Bölme işlemleri tam sayı sonuç verir
// Kesirli sonuç sadece ilgili konularda
// ============================================

const QUESTION_TEMPLATES = {

 // ==========================================
// KONU 1: TOPLAMA & ÇIKARMA - TAM ŞABLON SETİ
// 7 alt dal × 2-3 zorluk = ~55 şablon
// ==========================================
1: [

    // ==========================================
    // ALT DAL 1: DÜZ İŞLEM > 2 SAYI
    // ==========================================
    { id: "t1_001", s: "{a} + {b} = ?", c: "{a}+{b}", v: {a:[1,20], b:[1,20]}, z:"kolay", alt:"duz_islem", cozum:"{a} + {b} = {a}+{b}" },
    { id: "t1_002", s: "{a} + {b} = ?", c: "{a}+{b}", v: {a:[10,50], b:[10,50]}, z:"orta", alt:"duz_islem" },
    { id: "t1_003", s: "{a} + {b} = ?", c: "{a}+{b}", v: {a:[50,200], b:[50,200]}, z:"zor", alt:"duz_islem" },
    
    { id: "t1_004", s: "{a} - {b} = ?", c: "{a}-{b}", v: {a:[10,30], b:[1,"{a}"]}, z:"kolay", alt:"duz_islem", kural:"b<a", cozum:"{a} - {b} = {a}-{b}" },
    { id: "t1_005", s: "{a} - {b} = ?", c: "{a}-{b}", v: {a:[30,100], b:[5,"{a}"]}, z:"orta", alt:"duz_islem", kural:"b<a" },
    { id: "t1_006", s: "{a} - {b} = ?", c: "{a}-{b}", v: {a:[100,500], b:[10,"{a}"]}, z:"zor", alt:"duz_islem", kural:"b<a" },

    // ==========================================
    // ALT DAL 2: DÜZ İŞLEM > 3 SAYI
    // ==========================================
    { id: "t1_010", s: "{a} + {b} + {c} = ?", c: "{a}+{b}+{c}", v: {a:[1,15], b:[1,15], c:[1,15]}, z:"kolay", alt:"uc_sayi" },
    { id: "t1_011", s: "{a} + {b} + {c} = ?", c: "{a}+{b}+{c}", v: {a:[10,50], b:[10,50], c:[10,50]}, z:"orta", alt:"uc_sayi" },
    { id: "t1_012", s: "{a} + {b} + {c} = ?", c: "{a}+{b}+{c}", v: {a:[50,200], b:[50,200], c:[50,200]}, z:"zor", alt:"uc_sayi" },

    // ==========================================
    // ALT DAL 3: DÜZ İŞLEM > ZİNCİR
    // ==========================================
    { id: "t1_020", s: "{a} + {b} - {c} = ?", c: "{a}+{b}-{c}", v: {a:[10,30], b:[5,20], c:[1,15]}, z:"kolay", alt:"zincir" },
    { id: "t1_021", s: "{a} + {b} - {c} + {d} = ?", c: "{a}+{b}-{c}+{d}", v: {a:[10,40], b:[10,30], c:[5,20], d:[5,20]}, z:"orta", alt:"zincir" },
    { id: "t1_022", s: "{a} - {b} + {c} - {d} + {e} = ?", c: "{a}-{b}+{c}-{d}+{e}", v: {a:[50,150], b:[10,40], c:[10,50], d:[5,30], e:[5,30]}, z:"zor", alt:"zincir" },

    // ==========================================
    // ALT DAL 4: VERİLMEYEN > ? + a = b
    // ==========================================
    { id: "t1_030", s: "? + {a} = {b} ise ? kaçtır?", c: "{b}-{a}", v: {a:[3,15], b:[10,40]}, z:"kolay", alt:"verilmeyen", kural:"b>a", cozum:"? = {b} - {a} = {b}-{a}" },
    { id: "t1_031", s: "? + {a} = {b} ise ? kaçtır?", c: "{b}-{a}", v: {a:[15,50], b:[40,150]}, z:"orta", alt:"verilmeyen", kural:"b>a" },
    { id: "t1_032", s: "? + {a} = {b} ise ? kaçtır?", c: "{b}-{a}", v: {a:[50,200], b:[150,500]}, z:"zor", alt:"verilmeyen", kural:"b>a" },

    // ==========================================
    // ALT DAL 5: VERİLMEYEN > a + ? = b
    // ==========================================
    { id: "t1_033", s: "{a} + ? = {b} ise ? kaçtır?", c: "{b}-{a}", v: {a:[3,15], b:[10,40]}, z:"kolay", alt:"verilmeyen", kural:"b>a" },
    { id: "t1_034", s: "{a} + ? = {b} ise ? kaçtır?", c: "{b}-{a}", v: {a:[15,50], b:[40,150]}, z:"orta", alt:"verilmeyen", kural:"b>a" },

    // ==========================================
    // ALT DAL 6: VERİLMEYEN > ? - a = b
    // ==========================================
    { id: "t1_035", s: "? - {a} = {b} ise ? kaçtır?", c: "{a}+{b}", v: {a:[5,20], b:[5,20]}, z:"kolay", alt:"verilmeyen", cozum:"? = {a} + {b} = {a}+{b}" },
    { id: "t1_036", s: "? - {a} = {b} ise ? kaçtır?", c: "{a}+{b}", v: {a:[10,50], b:[10,50]}, z:"orta", alt:"verilmeyen" },

    // ==========================================
    // ALT DAL 7: VERİLMEYEN > a - ? = b
    // ==========================================
    { id: "t1_037", s: "{a} - ? = {b} ise ? kaçtır?", c: "{a}-{b}", v: {a:[20,50], b:[1,"{a}"]}, z:"kolay", alt:"verilmeyen", kural:"b<a", cozum:"? = {a} - {b} = {a}-{b}" },
    { id: "t1_038", s: "{a} - ? = {b} ise ? kaçtır?", c: "{a}-{b}", v: {a:[50,150], b:[5,"{a}"]}, z:"orta", alt:"verilmeyen", kural:"b<a" },

    // ==========================================
    // ALT DAL 8: ARDIŞIK SAYI > 2 SAYI
    // ==========================================
    { id: "t1_040", s: "Ardışık iki sayının toplamı {s} ise büyük sayı kaçtır?", c: "({s}+1)/2", v: {s:[5,99,"tek"]}, z:"kolay", alt:"ardisik", cozum:"n+(n+1)={s} → 2n+1={s} → n=({s}-1)/2 → Büyük=n+1=({s}+1)/2" },
    { id: "t1_041", s: "Ardışık iki sayının toplamı {s} ise küçük sayı kaçtır?", c: "({s}-1)/2", v: {s:[5,99,"tek"]}, z:"kolay", alt:"ardisik" },
    { id: "t1_042", s: "Ardışık iki çift sayının toplamı {s} ise büyük sayı kaçtır?", c: "({s}+2)/2", v: {s:[6,198,"cift"]}, z:"orta", alt:"ardisik" },

    // ==========================================
    // ALT DAL 9: ARDIŞIK SAYI > 3 SAYI
    // ==========================================
    { id: "t1_043", s: "Ardışık üç sayının toplamı {s} ise ortanca sayı kaçtır?", c: "{s}/3", v: {s:[6,99,"3kati"]}, z:"kolay", alt:"ardisik", cozum:"(n-1)+n+(n+1)={s} → 3n={s} → n={s}/3" },
    { id: "t1_044", s: "Ardışık üç sayının toplamı {s} ise en küçük sayı kaçtır?", c: "({s}-3)/3", v: {s:[6,99,"3kati"]}, z:"orta", alt:"ardisik" },
    { id: "t1_045", s: "Ardışık üç sayının toplamı {s} ise en büyük sayı kaçtır?", c: "({s}+3)/3", v: {s:[6,99,"3kati"]}, z:"orta", alt:"ardisik" },
    { id: "t1_046", s: "Ardışık üç tek sayının toplamı {s} ise en küçük sayı kaçtır?", c: "({s}-6)/3", v: {s:[9,99,"3kati"]}, z:"zor", alt:"ardisik", kural:"s%2==1" },

    // ==========================================
    // ALT DAL 10: PROBLEM > PARA
    // ==========================================
    { id: "t1_050", s: "Bir kalem {a} TL, bir defter {b} TL. İkisini birden alan kaç TL öder?", c: "{a}+{b}", v: {a:[5,30], b:[10,50]}, z:"kolay", alt:"problem_para" },
    { id: "t1_051", s: "Cebimde {a} TL var. {b} TL harcarsam kaç TL kalır?", c: "{a}-{b}", v: {a:[50,200], b:[5,"{a}"]}, z:"kolay", alt:"problem_para", kural:"b<a" },
    { id: "t1_052", s: "{a} TL'ye alınan ürün {b} TL'ye satılırsa kaç TL kâr edilir?", c: "{b}-{a}", v: {a:[20,80], b:["{a}+5","{a}+50"]}, z:"orta", alt:"problem_para", kural:"b>a" },
    { id: "t1_053", s: "3 ürün alana 1 ürün bedava. Tanesi {a} TL olan üründen 4 tane alan kişi aslında tanesini kaç TL'ye almış olur?", c: "({a}*3)/4", v: {a:[10,40]}, z:"zor", alt:"problem_para" },

    // ==========================================
    // ALT DAL 11: PROBLEM > GÜNLÜK HAYAT
    // ==========================================
    { id: "t1_054", s: "Bir sınıfta {a} kız, {b} erkek öğrenci var. Sınıf mevcudu kaçtır?", c: "{a}+{b}", v: {a:[10,25], b:[10,25]}, z:"kolay", alt:"problem_gunluk" },
    { id: "t1_055", s: "{a} sayfalık kitabın önce {b} sayfasını, sonra {c} sayfasını okudum. Geriye kaç sayfa kaldı?", c: "{a}-{b}-{c}", v: {a:[50,200], b:[10,40], c:[10,40]}, z:"orta", alt:"problem_gunluk", kural:"b+c<a" },
    { id: "t1_056", s: "Bir otobüste {a} yolcu var. İlk durakta {b} kişi inip {c} kişi biniyor. Son durumda kaç yolcu olur?", c: "{a}-{b}+{c}", v: {a:[20,50], b:[3,15], c:[3,20]}, z:"orta", alt:"problem_gunluk", kural:"b<a" },
    { id: "t1_057", s: "Merdivenin tam ortasındaki basamaktayım. {a} basamak çıkıp {b} basamak inersem başlangıca göre kaç basamak yer değiştirmiş olurum?", c: "{a}-{b}", v: {a:[3,10], b:[1,"{a}"]}, z:"zor", alt:"problem_gunluk" },

    // ==========================================
    // ALT DAL 12: PROBLEM > YAŞ
    // ==========================================
    { id: "t1_058", s: "Ahmet {a}, Mehmet {b} yaşındadır. İkisinin yaşları toplamı kaçtır?", c: "{a}+{b}", v: {a:[5,20], b:[5,20]}, z:"kolay", alt:"problem_yas" },
    { id: "t1_059", s: "Baba {a}, çocuk {b} yaşındadır. {c} yıl sonra yaşları toplamı kaç olur?", c: "{a}+{b}+2*{c}", v: {a:[30,50], b:[5,15], c:[2,10]}, z:"orta", alt:"problem_yas" },
    { id: "t1_060", s: "{a} yıl önce yaşları toplamı {t} olan iki kardeşin bugünkü yaşları toplamı kaçtır?", c: "{t}+2*{a}", v: {a:[2,8], t:[10,40]}, z:"orta", alt:"problem_yas" },

    // ==========================================
    // ALT DAL 13: PROBLEM > ÖLÇÜ BİRİMİ
    // ==========================================
    { id: "t1_061", s: "{a} kg elma, {b} kg armut alan kişi toplam kaç kg meyve almıştır?", c: "{a}+{b}", v: {a:[1,10], b:[1,10]}, z:"kolay", alt:"problem_olcu" },
    { id: "t1_062", s: "{a} km'lik yolun önce {b} km'sini, sonra {c} km'sini gittim. Geriye kaç km kaldı?", c: "{a}-{b}-{c}", v: {a:[50,300], b:[10,80], c:[10,80]}, z:"orta", alt:"problem_olcu", kural:"b+c<a" },
    { id: "t1_063", s: "Bir depoda {a} litre su var. {b} litre eklenip {c} litre kullanılırsa kaç litre kalır?", c: "{a}+{b}-{c}", v: {a:[20,100], b:[10,50], c:[5,40]}, z:"orta", alt:"problem_olcu" },

    // ==========================================
    // ALT DAL 14: TABLO
    // ==========================================
    { id: "t1_070", s: "Pazartesi {a}, Salı {b}, Çarşamba {c} soru çözen bir öğrenci 3 günde toplam kaç soru çözmüştür?", c: "{a}+{b}+{c}", v: {a:[10,50], b:[10,50], c:[10,50]}, z:"kolay", alt:"tablo" },
    { id: "t1_071", s: "A ürünü {a} TL, B ürünü {b} TL, C ürünü {c} TL. Üçü birden alınırsa toplam kaç TL ödenir?", c: "{a}+{b}+{c}", v: {a:[10,100], b:[10,100], c:[10,100]}, z:"kolay", alt:"tablo" },
    { id: "t1_072", s: "Ocak: {a}, Şubat: {b}, Mart: {c} satış yapılmış. 3 aylık toplam satış kaçtır?", c: "{a}+{b}+{c}", v: {a:[100,500], b:[100,500], c:[100,500]}, z:"orta", alt:"tablo" },
    { id: "t1_073", s: "Gelir: {a} TL, Gider: {b} TL. Kâr/zarar durumu nedir? (Kâr ise +, zarar ise - yazın)", c: "{a}-{b}", v: {a:[100,500], b:[50,450]}, z:"orta", alt:"tablo" },
    { id: "t1_074", s: "İlk ay {a}, ikinci ay {b} soru çözüldü. İkinci ay ilk aydan kaç fazla/eksik soru çözülmüştür? (Farkı yazın, fazlaysa +)", c: "{b}-{a}", v: {a:[20,80], b:[20,100]}, z:"zor", alt:"tablo" },

    // ==========================================
    // ALT DAL 15: MANTIK
    // ==========================================
    { id: "t1_080", s: "İki sayının toplamı {s}, farkı {f} ise büyük sayı kaçtır?", c: "({s}+{f})/2", v: {s:[20,100], f:[2,20,"cift"]}, z:"orta", alt:"mantik", cozum:"x+y={s}, x-y={f} → 2x={s}+{f} → x=({s}+{f})/2" },
    { id: "t1_081", s: "İki sayının toplamı {s}, farkı {f} ise küçük sayı kaçtır?", c: "({s}-{f})/2", v: {s:[20,100], f:[2,20,"cift"]}, z:"orta", alt:"mantik" },
    { id: "t1_082", s: "Toplamları {s} olan iki sayıdan biri diğerinden {f} fazla ise küçük sayı kaçtır?", c: "({s}-{f})/2", v: {s:[20,100], f:[2,20]}, z:"orta", alt:"mantik", kural:"s>f" },
    { id: "t1_083", s: "İki sayının toplamı {s}'dir. Büyük sayı küçük sayının {k} katı ise küçük sayı kaçtır?", c: "{s}/({k}+1)", v: {s:["({k}+1)*2","({k}+1)*30"], k:[2,5]}, z:"zor", alt:"mantik" },
    { id: "t1_084", s: "İki sayının farkı {f}'tir. Büyük sayı küçük sayının {k} katı ise büyük sayı kaçtır?", c: "({f}*{k})/({k}-1)", v: {f:[2,10], k:[2,4]}, z:"zor", alt:"mantik", kural:"k>1" },

    // ==========================================
    // ALT DAL 16: YENİ NESİL (PARAGRAF)
    // ==========================================
    { id: "t1_090", s: "Bir mağazada tanesi {a} TL olan gömlekten {b} tane, tanesi {c} TL olan pantolondan {d} tane alan müşteri toplam kaç TL öder?", c: "{a}*{b}+{c}*{d}", v: {a:[30,100], b:[1,3], c:[50,150], d:[1,3]}, z:"orta", alt:"yeni_nesil" },
    { id: "t1_091", s: "Bir çiftlikte {a} tavuk ve {b} inek var. Toplam ayak sayısı kaçtır?", c: "{a}*2+{b}*4", v: {a:[5,20], b:[3,10]}, z:"orta", alt:"yeni_nesil" },
    { id: "t1_092", s: "{a} kişilik bir grupta herkes birbiriyle tokalaşırsa toplam kaç tokalaşma olur?", c: "{a}*({a}-1)/2", v: {a:[3,10]}, z:"zor", alt:"yeni_nesil" },
    { id: "t1_093", s: "Bir sinema salonunda {a} sıra ve her sırada {b} koltuk var. {c} koltuk boş ise kaç koltuk doludur?", c: "{a}*{b}-{c}", v: {a:[5,15], b:[8,20], c:[5,"{a}*{b}-5"]}, z:"zor", alt:"yeni_nesil", kural:"c<a*b" },
    { id: "t1_094", s: "Bir otobüs {a} km/sa hızla {b} saat, sonra {c} km/sa hızla {d} saat gidiyor. Toplam kaç km yol almıştır?", c: "{a}*{b}+{c}*{d}", v: {a:[60,90], b:[1,3], c:[40,80], d:[1,3]}, z:"zor", alt:"yeni_nesil" },

    // ==========================================
    // ALT DAL 17: HIZLI İŞLEM
    // ==========================================
    { id: "t1_100", s: "{a} + 10 = ?", c: "{a}+10", v: {a:[5,90]}, z:"kolay", alt:"hizli" },
    { id: "t1_101", s: "{a} + 100 = ?", c: "{a}+100", v: {a:[50,500]}, z:"kolay", alt:"hizli" },
    { id: "t1_102", s: "100 - {a} = ?", c: "100-{a}", v: {a:[1,99]}, z:"kolay", alt:"hizli" },
    { id: "t1_103", s: "{a} + 9 = ?", c: "{a}+9", v: {a:[10,90]}, z:"kolay", alt:"hizli", cozum:"Önce 10 ekle, 1 çıkar: {a}+10-1 = {a}+9" },

],

 // ==========================================
// KONU 2: ÇARPMA & BÖLME - TAM ŞABLON SETİ
// 7 alt dal × 2-4 zorluk = ~55 şablon
// Tüm bölme işlemleri tam sayı sonuçlu
// ==========================================
2: [

    // ==========================================
    // ALT DAL 1: DÜZ İŞLEM > TEK BASAMAKLI ÇARPMA
    // ==========================================
    { id: "t2_001", s: "{a} × {b} = ?", c: "{a}*{b}", v: {a:[1,10], b:[1,10]}, z:"kolay", alt:"duz_carpma", cozum:"{a} × {b} = {a}*{b}" },
    { id: "t2_002", s: "{a} × {b} = ?", c: "{a}*{b}", v: {a:[2,9], b:[2,9]}, z:"kolay", alt:"duz_carpma" },
    { id: "t2_003", s: "{a} × {b} = ?", c: "{a}*{b}", v: {a:[3,9], b:[11,19]}, z:"orta", alt:"duz_carpma" },
    { id: "t2_004", s: "{a} × {b} = ?", c: "{a}*{b}", v: {a:[11,25], b:[2,9]}, z:"orta", alt:"duz_carpma" },
    { id: "t2_005", s: "{a} × {b} = ?", c: "{a}*{b}", v: {a:[10,50], b:[10,30]}, z:"zor", alt:"duz_carpma" },

    // ==========================================
    // ALT DAL 2: DÜZ İŞLEM > TAM BÖLME (Kalansız)
    // ==========================================
    { id: "t2_010", s: "{a} ÷ {b} = ?", c: "{a}/{b}", v: {b:[2,6], a:["{b}*1","{b}*8"]}, z:"kolay", alt:"tam_bolme", cozum:"{a} ÷ {b} = {a}/{b}" },
    { id: "t2_011", s: "{a} ÷ {b} = ?", c: "{a}/{b}", v: {b:[3,9], a:["{b}*2","{b}*12"]}, z:"kolay", alt:"tam_bolme" },
    { id: "t2_012", s: "{a} ÷ {b} = ?", c: "{a}/{b}", v: {b:[4,9], a:["{b}*5","{b}*20"]}, z:"orta", alt:"tam_bolme" },
    { id: "t2_013", s: "{a} ÷ {b} = ?", c: "{a}/{b}", v: {b:[6,12], a:["{b}*3","{b}*25"]}, z:"orta", alt:"tam_bolme" },
    { id: "t2_014", s: "{a} ÷ {b} = ?", c: "{a}/{b}", v: {b:[7,15], a:["{b}*4","{b}*30"]}, z:"zor", alt:"tam_bolme" },

    // ==========================================
    // ALT DAL 3: DÜZ İŞLEM > ÜÇ SAYI ÇARPMA
    // ==========================================
    { id: "t2_020", s: "{a} × {b} × {c} = ?", c: "{a}*{b}*{c}", v: {a:[1,5], b:[1,5], c:[1,5]}, z:"kolay", alt:"uc_carpma" },
    { id: "t2_021", s: "{a} × {b} × {c} = ?", c: "{a}*{b}*{c}", v: {a:[2,6], b:[2,6], c:[2,6]}, z:"orta", alt:"uc_carpma" },
    { id: "t2_022", s: "{a} × {b} × {c} = ?", c: "{a}*{b}*{c}", v: {a:[2,8], b:[3,7], c:[2,5]}, z:"zor", alt:"uc_carpma" },

    // ==========================================
    // ALT DAL 4: KAT ALMA
    // ==========================================
    { id: "t2_030", s: "{a} sayısının {k} katı kaçtır?", c: "{a}*{k}", v: {a:[3,15], k:[2,5]}, z:"kolay", alt:"kat_alma", cozum:"{a} × {k} = {a}*{k}" },
    { id: "t2_031", s: "{a} sayısının {k} katı kaçtır?", c: "{a}*{k}", v: {a:[10,50], k:[3,7]}, z:"orta", alt:"kat_alma" },
    { id: "t2_032", s: "{a} sayısının {k} katının {f} fazlası kaçtır?", c: "{a}*{k}+{f}", v: {a:[3,12], k:[2,5], f:[2,15]}, z:"orta", alt:"kat_alma" },
    { id: "t2_033", s: "{a} sayısının {k} katının {f} eksiği kaçtır?", c: "{a}*{k}-{f}", v: {a:[5,15], k:[2,5], f:[1,"{a}*{k}-1"]}, z:"orta", alt:"kat_alma", kural:"f<a*k" },
    { id: "t2_034", s: "{a} sayısının yarısının {k} katı kaçtır?", c: "({a}/2)*{k}", v: {a:[4,40,"cift"], k:[2,5]}, z:"zor", alt:"kat_alma" },
    { id: "t2_035", s: "{a} sayısının {k1} katı ile {k2} katının toplamı kaçtır?", c: "{a}*{k1}+{a}*{k2}", v: {a:[2,10], k1:[2,4], k2:[3,5]}, z:"zor", alt:"kat_alma" },

    // ==========================================
    // ALT DAL 5: VERİLMEYEN
    // ==========================================
    { id: "t2_040", s: "Hangi sayının {k} katı {s} eder?", c: "{s}/{k}", v: {k:[2,6], s:["{k}*2","{k}*20"]}, z:"kolay", alt:"verilmeyen", cozum:"x × {k} = {s} → x = {s} ÷ {k} = {s}/{k}" },
    { id: "t2_041", s: "Hangi sayının {k} katı {s} eder?", c: "{s}/{k}", v: {k:[3,9], s:["{k}*3","{k}*30"]}, z:"orta", alt:"verilmeyen" },
    { id: "t2_042", s: "? × {a} = {s} ise ? kaçtır?", c: "{s}/{a}", v: {a:[2,10], s:["{a}*2","{a}*20"]}, z:"kolay", alt:"verilmeyen" },
    { id: "t2_043", s: "{a} × ? = {s} ise ? kaçtır?", c: "{s}/{a}", v: {a:[3,12], s:["{a}*2","{a}*25"]}, z:"orta", alt:"verilmeyen" },
    { id: "t2_044", s: "Hangi sayının {k1} katı ile {k2} katının toplamı {s} eder?", c: "{s}/({k1}+{k2})", v: {k1:[2,4], k2:[3,5], s:["({k1}+{k2})*2","({k1}+{k2})*20"]}, z:"zor", alt:"verilmeyen", kural:"k1!=k2" },
    { id: "t2_045", s: "Hangi sayının {k1} katı, {k2} katından {f} fazladır?", c: "{f}/({k1}-{k2})", v: {k1:[3,6], k2:[1,"{k1}-1"], f:["({k1}-{k2})*1","({k1}-{k2})*15"]}, z:"zor", alt:"verilmeyen", kural:"k1>k2" },

    // ==========================================
    // ALT DAL 6: PROBLEM
    // ==========================================
    { id: "t2_050", s: "Tanesi {a} TL olan kalemlerden {b} tane alan kaç TL öder?", c: "{a}*{b}", v: {a:[3,15], b:[2,10]}, z:"kolay", alt:"problem" },
    { id: "t2_051", s: "{a} kişi, {b} TL'yi eşit paylaşırsa kişi başı kaç TL düşer?", c: "{b}/{a}", v: {a:[2,8], b:["{a}*5","{a}*50"]}, z:"kolay", alt:"problem" },
    { id: "t2_052", s: "Bir sınıfta {a} sıra, her sırada {b} öğrenci var. {c} öğrenci gelmediğine göre sınıfta kaç öğrenci var?", c: "{a}*{b}-{c}", v: {a:[4,10], b:[2,4], c:[1,"{a}*{b}-1"]}, z:"orta", alt:"problem", kural:"c<a*b" },
    { id: "t2_053", s: "Her gün {a} sayfa kitap okuyan biri {b} günde kaç sayfa okur?", c: "{a}*{b}", v: {a:[10,40], b:[3,10]}, z:"kolay", alt:"problem" },
    { id: "t2_054", s: "{a} TL'ye alınan {b} ürünün tanesi kaç TL'dir?", c: "{a}/{b}", v: {b:[2,8], a:["{b}*5","{b}*100"]}, z:"orta", alt:"problem" },
    { id: "t2_055", s: "Bir çiftlikte {a} koyun ve {b} tavuk var. Toplam ayak sayısı kaçtır?", c: "{a}*4+{b}*2", v: {a:[3,15], b:[5,20]}, z:"orta", alt:"problem" },
    { id: "t2_056", s: "Tanesi {a} TL olan {b} ürün ve tanesi {c} TL olan {d} ürün alan toplam kaç TL öder?", c: "{a}*{b}+{c}*{d}", v: {a:[5,30], b:[1,5], c:[10,50], d:[1,5]}, z:"zor", alt:"problem" },

    // ==========================================
    // ALT DAL 7: MANTIK & YENİ NESİL
    // ==========================================
    { id: "t2_060", s: "{a} sayısı {b} sayısının kaç katıdır?", c: "{a}/{b}", v: {b:[2,9], a:["{b}*2","{b}*12"]}, z:"orta", alt:"mantik", cozum:"{a} ÷ {b} = {a}/{b} katı" },
    { id: "t2_061", s: "Bir sayının {k1} katı {a} ise, aynı sayının {k2} katı kaçtır?", c: "({a}/{k1})*{k2}", v: {k1:[2,5], a:["{k1}*2","{k1}*30"], k2:[2,6]}, z:"zor", alt:"mantik", kural:"k1!=k2" },
    { id: "t2_062", s: "{a} × {b} = {c} ise {a} × ({b}+2) kaçtır?", c: "{c}+2*{a}", v: {a:[3,10], b:[2,8], c:"{a}*{b}"}, z:"zor", alt:"mantik" },
    { id: "t2_063", s: "Bir sayıyı {a} ile çarpıp {b} ekleyince {c} oluyor. Bu sayı kaçtır?", c: "({c}-{b})/{a}", v: {a:[2,5], b:[3,15], c:["{a}*3+{b}","{a}*20+{b}"]}, z:"zor", alt:"mantik" },
    { id: "t2_064", s: "Bir terzi {a} metre kumaştan {b} gömlek dikiyor. {c} gömlek için kaç metre kumaş gerekir?", c: "({a}/{b})*{c}", v: {b:[2,6], a:["{b}*2","{b}*8"], c:[1,8]}, z:"zor", alt:"yeni_nesil" },

    // ==========================================
    // ALT DAL 8: HIZLI İŞLEM
    // ==========================================
    { id: "t2_070", s: "{a} × 10 = ?", c: "{a}*10", v: {a:[1,50]}, z:"kolay", alt:"hizli" },
    { id: "t2_071", s: "{a} × 100 = ?", c: "{a}*100", v: {a:[1,30]}, z:"kolay", alt:"hizli" },
    { id: "t2_072", s: "{a} ÷ 10 = ?", c: "{a}/10", v: {a:[10,500,"5kati"]}, z:"kolay", alt:"hizli" },
    { id: "t2_073", s: "{a} × 5 = ? (İpucu: 10 ile çarpıp 2'ye böl)", c: "{a}*5", v: {a:[2,20,"cift"]}, z:"kolay", alt:"hizli", cozum:"{a}×10÷2 = {a}*5" },
    { id: "t2_074", s: "{a} × 9 = ? (İpucu: 10 ile çarpıp 1 çıkar)", c: "{a}*9", v: {a:[2,15]}, z:"orta", alt:"hizli", cozum:"{a}×10-{a} = {a}*9" },

],

 // ==========================================
// KONU 3: SAYILAR (TEMEL KAVRAMLAR) - TAM ŞABLON SETİ
// 7 alt dal × 2-4 zorluk = ~50 şablon
// ==========================================
3: [

    // ==========================================
    // ALT DAL 1: TEK & ÇİFT > SORGULAMA
    // ==========================================
    { id: "t3_001", s: "{a} sayısı tek midir çift midir?", c: "{a}%2==0?'Çift':'Tek'", v: {a:[1,99]}, z:"kolay", alt:"tek_cift", inputType:"choice", choices:["Tek","Çift"], cozum:"{a} % 2 = {a}%2 → {a}%2==0?'Çift':'Tek'" },
    { id: "t3_002", s: "{a} sayısı tek midir çift midir?", c: "{a}%2==0?'Çift':'Tek'", v: {a:[100,999]}, z:"kolay", alt:"tek_cift", inputType:"choice", choices:["Tek","Çift"] },
    { id: "t3_003", s: "Hangisi tektir?", c: "{a}%2==1?'{a}':'{b}'", v: {a:[1,20,"tek"], b:[2,20,"cift"]}, z:"kolay", alt:"tek_cift", inputType:"choice", choices:["{a}","{b}","İkisi de","Hiçbiri"] },

    // ==========================================
    // ALT DAL 2: TEK & ÇİFT > KURALLAR
    // ==========================================
    { id: "t3_004", s: "İki tek sayının toplamı nasıl bir sayıdır?", c: "Çift", v: {}, z:"kolay", alt:"tek_cift_kural", inputType:"choice", choices:["Çift","Tek","Bilinemez","Değişir"] },
    { id: "t3_005", s: "Bir tek ve bir çift sayının toplamı nasıldır?", c: "Tek", v: {}, z:"kolay", alt:"tek_cift_kural", inputType:"choice", choices:["Tek","Çift","Bilinemez","Değişir"] },
    { id: "t3_006", s: "İki çift sayının çarpımı nasıldır?", c: "Çift", v: {}, z:"kolay", alt:"tek_cift_kural", inputType:"choice", choices:["Çift","Tek","Bilinemez","Değişir"] },
    { id: "t3_007", s: "{a} tek, {b} çift ise {a}+{b} nasıldır?", c: "Tek", v: {a:[1,9,"tek"], b:[2,10,"cift"]}, z:"orta", alt:"tek_cift_kural", inputType:"choice", choices:["Tek","Çift"] },
    { id: "t3_008", s: "{a} ve {b} tek sayı ise {a}×{b} nasıldır?", c: "Tek", v: {a:[1,9,"tek"], b:[1,9,"tek"]}, z:"orta", alt:"tek_cift_kural", inputType:"choice", choices:["Tek","Çift"] },

    // ==========================================
    // ALT DAL 3: BASAMAK DEĞERİ
    // ==========================================
    { id: "t3_010", s: "{a} sayısının onlar basamağı kaçtır?", c: "Math.floor({a}/10)%10", v: {a:[10,999]}, z:"kolay", alt:"basamak", cozum:"{a} ÷ 10 = {Math.floor(a/10)} → birler: {Math.floor(a/10)%10}" },
    { id: "t3_011", s: "{a} sayısının yüzler basamağı kaçtır?", c: "Math.floor({a}/100)", v: {a:[100,999]}, z:"kolay", alt:"basamak" },
    { id: "t3_012", s: "{a} sayısının birler basamağı kaçtır?", c: "{a}%10", v: {a:[10,999]}, z:"kolay", alt:"basamak" },
    { id: "t3_013", s: "{a} sayısının basamak değerleri toplamı kaçtır? (Örn: 23 = 20+3)", c: "basamakDegerToplam({a})", v: {a:[10,999]}, z:"orta", alt:"basamak" },
    { id: "t3_014", s: "{a} sayısının rakamları toplamı kaçtır?", c: "rakamToplam({a})", v: {a:[10,999]}, z:"kolay", alt:"basamak" },
    { id: "t3_015", s: "{a} sayısının onlar ve birler basamağı yer değiştirirse yeni sayı kaç olur?", c: "basamakDegistir({a})", v: {a:[12,98]}, z:"orta", alt:"basamak", kural:"a%10!=0" },

    // ==========================================
    // ALT DAL 4: SAYI TÜRLERİ
    // ==========================================
    { id: "t3_020", s: "En küçük doğal sayı kaçtır?", c: "0", v: {}, z:"kolay", alt:"sayi_turleri", inputType:"choice", choices:["0","1","-1","2"] },
    { id: "t3_021", s: "En küçük pozitif tam sayı kaçtır?", c: "1", v: {}, z:"kolay", alt:"sayi_turleri", inputType:"choice", choices:["1","0","-1","2"] },
    { id: "t3_022", s: "En büyük negatif tam sayı kaçtır?", c: "-1", v: {}, z:"kolay", alt:"sayi_turleri", inputType:"choice", choices:["-1","0","-2","-∞"] },
    { id: "t3_023", s: "İki basamaklı en küçük tam sayı kaçtır?", c: "-99", v: {}, z:"orta", alt:"sayi_turleri", inputType:"choice", choices:["-99","10","-10","-90"] },
    { id: "t3_024", s: "{a} hangi sayı kümesine aittir?", c: "{a}<0?'Negatif tam sayı':'Pozitif tam sayı'", v: {a:[-20,20]}, z:"kolay", alt:"sayi_turleri", inputType:"choice", choices:["Pozitif","Negatif","Sıfır","Doğal"] },

    // ==========================================
    // ALT DAL 5: SIRALAMA
    // ==========================================
    { id: "t3_030", s: "{a}, {b}, {c} sayılarını küçükten büyüğe sırala (En küçük hangisi?)", c: "Math.min({a},{b},{c})", v: {a:[5,50], b:[5,50], c:[5,50]}, z:"kolay", alt:"siralama", kural:"a!=b&&b!=c&&a!=c" },
    { id: "t3_031", s: "{a}, {b}, {c} sayılarından en büyüğü kaçtır?", c: "Math.max({a},{b},{c})", v: {a:[10,100], b:[10,100], c:[10,100]}, z:"kolay", alt:"siralama" },
    { id: "t3_032", s: "İki basamaklı en büyük sayı kaçtır?", c: "99", v: {}, z:"kolay", alt:"siralama" },
    { id: "t3_033", s: "{b} basamaklı en büyük sayı kaçtır?", c: "Math.pow(10,{b})-1", v: {b:[2,5]}, z:"kolay", alt:"siralama", cozum:"{b} basamaklı en büyük: 10^{b}-1" },
    { id: "t3_034", s: "{b} basamaklı en küçük sayı kaçtır?", c: "Math.pow(10,{b}-1)", v: {b:[2,5]}, z:"orta", alt:"siralama" },
    { id: "t3_035", s: "Rakamları farklı {b} basamaklı en büyük sayı kaçtır?", c: "{b}==2?98:{b}==3?987:{b}==4?9876:98765", v: {b:[2,5]}, z:"orta", alt:"siralama" },
    { id: "t3_036", s: "Rakamları farklı {b} basamaklı en küçük sayı kaçtır?", c: "{b}==2?10:{b}==3?102:{b}==4?1023:10234", v: {b:[2,5]}, z:"zor", alt:"siralama" },

    // ==========================================
    // ALT DAL 6: PROBLEM
    // ==========================================
    { id: "t3_040", s: "AB iki basamaklı sayısında A+B={t} ise AB en fazla kaçtır?", c: "{t}<=9?{t}*10:90+({t}-9)", v: {t:[3,15]}, z:"orta", alt:"problem", cozum:"Onlar basamağı en büyük: A={t} (max 9), B={t}-A" },
    { id: "t3_041", s: "AB iki basamaklı sayısında A={a} ve B={b} ise AB kaçtır?", c: "{a}*10+{b}", v: {a:[1,9], b:[0,9]}, z:"kolay", alt:"problem" },
    { id: "t3_042", s: "Rakamları toplamı {t} olan iki basamaklı kaç sayı vardır?", c: "{t}<=9?{t}+1:19-{t}", v: {t:[2,15]}, z:"zor", alt:"problem", inputType:"choice" },
    { id: "t3_043", s: "{a} sayısından bir önce ve bir sonra gelen sayıların toplamı kaçtır?", c: "2*{a}", v: {a:[5,50]}, z:"orta", alt:"problem", cozum:"({a}-1)+({a}+1) = 2×{a}" },
    { id: "t3_044", s: "İki sayıdan biri diğerinden {f} fazla ve toplamları {t} ise büyük sayı kaçtır?", c: "({t}+{f})/2", v: {t:[20,100], f:[2,20,"cift"]}, z:"orta", alt:"problem" },

    // ==========================================
    // ALT DAL 7: MANTIK & YENİ NESİL
    // ==========================================
    { id: "t3_050", s: "Ardışık {n} tam sayının toplamı {s} ise en küçük sayı kaçtır?", c: "({s}-({n}*({n}-1)/2))/{n}", v: {n:[3,5], s:["{n}*5","{n}*50"]}, z:"zor", alt:"mantik" },
    { id: "t3_051", s: "İki basamaklı bir sayının rakamları toplamı {t}'dir. Bu sayı en az kaçtır?", c: "{t}<=9?{t}:19", v: {t:[2,15]}, z:"orta", alt:"mantik" },
    { id: "t3_052", s: "{a} sayısının {b} katı bir tek sayı ise {a} nasıl bir sayıdır?", c: "{b}%2==0?'Bilinemez':'Tek'", v: {a:[3,15], b:[2,5]}, z:"zor", alt:"mantik", inputType:"choice", choices:["Tek","Çift","Bilinemez","Değişir"] },
    { id: "t3_053", s: "Bir ABC üç basamaklı sayısında A+B+C={t} ise bu sayı en az kaçtır?", c: "100+Math.max(0,{t}-9)*10+Math.max(0,{t}-18)", v: {t:[2,20]}, z:"zor", alt:"yeni_nesil" },
    { id: "t3_054", s: "{a} sayfalık bir kitabı numaralandırmak için kaç rakam kullanılır?", c: "rakamSayisi({a})", v: {a:[5,150]}, z:"zor", alt:"yeni_nesil" },

],

// ==========================================
// KONU 4: BÖLÜNEBİLME KURALLARI - TAM ŞABLON SETİ
// 6 alt dal × 2-4 zorluk = ~40 şablon
// ==========================================
4: [

    // ==========================================
    // ALT DAL 1: 2 İLE BÖLÜNEBİLME
    // ==========================================
    { id: "t4_001", s: "{a} sayısı 2 ile bölünebilir mi?", c: "{a}%2==0?'Evet':'Hayır'", v: {a:[10,999]}, z:"kolay", alt:"iki_bolunebilme", inputType:"choice", choices:["Evet","Hayır"], cozum:"Son rakam {a}%10 → {a}%2==0?'çift':'tek'" },
    { id: "t4_002", s: "{a} sayısı 2 ile bölündüğünde kalan kaçtır?", c: "{a}%2", v: {a:[10,999]}, z:"kolay", alt:"iki_bolunebilme" },
    { id: "t4_003", s: "Aşağıdakilerden hangisi 2 ile tam bölünür?", c: "{cift}", v: {cift:[2,100,"cift"], tek:[1,99,"tek"]}, z:"kolay", alt:"iki_bolunebilme", inputType:"choice", choices:["{cift}","{tek}","İkisi de","Hiçbiri"] },
    { id: "t4_004", s: "İki basamaklı en büyük çift sayı kaçtır?", c: "98", v: {}, z:"kolay", alt:"iki_bolunebilme" },

    // ==========================================
    // ALT DAL 2: 3 İLE BÖLÜNEBİLME
    // ==========================================
    { id: "t4_010", s: "{a} sayısı 3 ile bölünebilir mi?", c: "{a}%3==0?'Evet':'Hayır'", v: {a:[10,999]}, z:"kolay", alt:"uc_bolunebilme", inputType:"choice", choices:["Evet","Hayır"], cozum:"Rakamlar toplamı 3'ün katı mı?" },
    { id: "t4_011", s: "{a} sayısının 3 ile bölümünden kalan kaçtır?", c: "{a}%3", v: {a:[10,999]}, z:"orta", alt:"uc_bolunebilme" },
    { id: "t4_012", s: "Rakamları toplamı {t} olan bir sayı 3 ile bölünebilir mi?", c: "{t}%3==0?'Evet':'Hayır'", v: {t:[3,30]}, z:"orta", alt:"uc_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t4_013", s: "İki basamaklı 3 ile bölünebilen en büyük sayı kaçtır?", c: "99", v: {}, z:"kolay", alt:"uc_bolunebilme" },
    { id: "t4_014", s: "İki basamaklı 3 ile bölünebilen en küçük sayı kaçtır?", c: "12", v: {}, z:"orta", alt:"uc_bolunebilme" },

    // ==========================================
    // ALT DAL 3: 5 İLE BÖLÜNEBİLME
    // ==========================================
    { id: "t4_020", s: "{a} sayısı 5 ile bölünebilir mi?", c: "{a}%5==0?'Evet':'Hayır'", v: {a:[10,999]}, z:"kolay", alt:"bes_bolunebilme", inputType:"choice", choices:["Evet","Hayır"], cozum:"Son rakam 0 veya 5 mi?" },
    { id: "t4_021", s: "{a} sayısının 5 ile bölümünden kalan kaçtır?", c: "{a}%5", v: {a:[10,999]}, z:"kolay", alt:"bes_bolunebilme" },
    { id: "t4_022", s: "Son rakamı {r} olan bir sayı 5 ile bölünebilir mi?", c: "{r}==0||{r}==5?'Evet':'Hayır'", v: {r:[0,9]}, z:"kolay", alt:"bes_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t4_023", s: "İki basamaklı 5 ile bölünebilen kaç sayı vardır?", c: "18", v: {}, z:"orta", alt:"bes_bolunebilme", inputType:"choice", choices:["18","19","20","17"] },

    // ==========================================
    // ALT DAL 4: DİĞER BÖLÜNEBİLME (4, 6, 9, 10)
    // ==========================================
    { id: "t4_030", s: "{a} sayısı 4 ile bölünebilir mi? (İpucu: Son iki rakam)", c: "{a}%4==0?'Evet':'Hayır'", v: {a:[100,999]}, z:"orta", alt:"diger_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t4_031", s: "{a} sayısı 9 ile bölünebilir mi?", c: "{a}%9==0?'Evet':'Hayır'", v: {a:[100,999]}, z:"orta", alt:"diger_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t4_032", s: "{a} sayısının 9 ile bölümünden kalan kaçtır?", c: "{a}%9", v: {a:[100,999]}, z:"orta", alt:"diger_bolunebilme" },
    { id: "t4_033", s: "{a} sayısı 10 ile bölünebilir mi?", c: "{a}%10==0?'Evet':'Hayır'", v: {a:[10,999]}, z:"kolay", alt:"diger_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t4_034", s: "{a} sayısı 6 ile bölünebilir mi? (2 ve 3'e bölünmeli)", c: "({a}%2==0&&{a}%3==0)?'Evet':'Hayır'", v: {a:[10,200]}, z:"zor", alt:"diger_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },

    // ==========================================
    // ALT DAL 5: KALAN BULMA & PROBLEM
    // ==========================================
    { id: "t4_040", s: "{a} sayısının {b} ile bölümünden kalan kaçtır?", c: "{a}%{b}", v: {a:[10,500], b:[2,9]}, z:"orta", alt:"kalan" },
    { id: "t4_041", s: "{a} sayısının {b} ile bölümünden bölüm {c} ise kalan kaçtır?", c: "{a}-{b}*{c}", v: {b:[3,9], c:[2,10], a:["{b}*{c}+1","{b}*{c}+{b}-1"]}, z:"zor", alt:"kalan", kural:"a>b*c" },
    { id: "t4_042", s: "Bir sayının 3 ile bölümünden kalan {k} ise bu sayının 5 fazlasının 3 ile bölümünden kalan kaçtır?", c: "({k}+5)%3", v: {k:[0,2]}, z:"zor", alt:"kalan" },
    { id: "t4_043", s: "Bir çiftlikte {a} yumurta 6'şarlı paketlenirse kaç yumurta artar?", c: "{a}%6", v: {a:[20,200]}, z:"orta", alt:"kalan" },

    // ==========================================
    // ALT DAL 6: MANTIK & RAKAM YERLEŞTİRME
    // ==========================================
    { id: "t4_050", s: "4A3B dört basamaklı sayısı 5 ile bölünebildiğine göre B kaçtır?", c: "0 veya 5", v: {}, z:"orta", alt:"rakam_yerlestirme", inputType:"choice", choices:["0 veya 5","0","5","2"], cozum:"5 ile bölünme: Son rakam 0 veya 5" },
    { id: "t4_051", s: "2A5 üç basamaklı sayısı 3 ile bölünebildiğine göre A kaç olabilir?", c: "2,5,8'den biri", v: {}, z:"orta", alt:"rakam_yerlestirme", inputType:"choice", choices:["2,5,8","1,4,7","3,6,9","0,3,6"], cozum:"2+A+5=7+A, 3'ün katı olmalı" },
    { id: "t4_052", s: "5A2B sayısı 4 ile bölünebildiğine göre B kaçtır? (Son iki rakam 4'ün katı)", c: "0,4,8'den biri", v: {}, z:"zor", alt:"rakam_yerlestirme", inputType:"choice", choices:["0,4,8","0,2,6","2,4,8","0,5"] },
    { id: "t4_053", s: "{a} basamaklı rakamları farklı 5 ile bölünebilen en büyük sayı kaçtır?", c: "{a}==2?95:{a}==3?985:{a}==4?9875:98765", v: {a:[2,5]}, z:"zor", alt:"rakam_yerlestirme" },
    { id: "t4_054", s: "Hem 3 hem 5 ile bölünebilen iki basamaklı en büyük sayı kaçtır?", c: "90", v: {}, z:"orta", alt:"rakam_yerlestirme" },
    { id: "t4_055", s: "Hem 2 hem 9 ile bölünebilen üç basamaklı en küçük sayı kaçtır?", c: "108", v: {}, z:"zor", alt:"rakam_yerlestirme" },

],

 // ==========================================
// KONU 5: ASAL SAYILAR & ÇARPANLAR - TAM ŞABLON SETİ
// 5 alt dal × 2-4 zorluk = ~35 şablon
// ==========================================
5: [

    // ==========================================
    // ALT DAL 1: ASAL SAYI TANIMI & KONTROL
    // ==========================================
    { id: "t5_001", s: "{a} asal sayı mıdır?", c: "isPrime({a})?'Evet':'Hayır'", v: {a:[2,50]}, z:"kolay", alt:"asal_tanim", inputType:"choice", choices:["Evet","Hayır"], cozum:"Sadece 1 ve kendisine bölünüyor mu?" },
    { id: "t5_002", s: "{a} asal sayı mıdır?", c: "isPrime({a})?'Evet':'Hayır'", v: {a:[51,100]}, z:"orta", alt:"asal_tanim", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t5_003", s: "En küçük asal sayı kaçtır?", c: "2", v: {}, z:"kolay", alt:"asal_tanim", inputType:"choice", choices:["2","1","3","0"], cozum:"1 asal değildir. En küçük asal 2'dir." },
    { id: "t5_004", s: "Aşağıdakilerden hangisi asal sayıdır?", c: "{asal}", v: {asal:[2,50,"asal"], yanlis:[4,51]}, z:"kolay", alt:"asal_tanim", inputType:"choice", choices:["{asal}","{yanlis}","İkisi de","Hiçbiri"], kural:"!isPrime(yanlis)" },
    { id: "t5_005", s: "1 asal sayı mıdır?", c: "Hayır", v: {}, z:"kolay", alt:"asal_tanim", inputType:"choice", choices:["Hayır","Evet"], cozum:"1'in sadece 1 böleni vardır (kendisi). Asal sayı için 2 bölen gerekir." },
    { id: "t5_006", s: "Çift olan tek asal sayı kaçtır?", c: "2", v: {}, z:"kolay", alt:"asal_tanim", inputType:"choice", choices:["2","4","6","Hiçbiri"] },
    { id: "t5_007", s: "İki basamaklı en büyük asal sayı kaçtır?", c: "97", v: {}, z:"orta", alt:"asal_tanim", inputType:"choice", choices:["97","99","91","89"] },
    { id: "t5_008", s: "İki basamaklı en küçük asal sayı kaçtır?", c: "11", v: {}, z:"orta", alt:"asal_tanim" },

    // ==========================================
    // ALT DAL 2: ASAL ÇARPANLARA AYIRMA
    // ==========================================
    { id: "t5_010", s: "{a} sayısını asal çarpanlarına ayırın (En küçük asal çarpan kaçtır?)", c: "enKucukAsalCarpan({a})", v: {a:[12,60]}, z:"orta", alt:"asal_carpan", cozum:"{a}'ı sırayla asallara böl" },
    { id: "t5_011", s: "{a} sayısının asal çarpanlarının toplamı kaçtır?", c: "asalCarpanToplam({a})", v: {a:[12,72]}, z:"orta", alt:"asal_carpan" },
    { id: "t5_012", s: "{a} sayısının kaç tane asal çarpanı vardır?", c: "asalCarpanSayisi({a})", v: {a:[18,100]}, z:"orta", alt:"asal_carpan" },
    { id: "t5_013", s: "{a} sayısının asal çarpanlarının çarpımı kaçtır?", c: "asalCarpanCarpim({a})", v: {a:[12,60]}, z:"zor", alt:"asal_carpan" },
    { id: "t5_014", s: "{a} = 2ˣ × 3ʸ ise x+y kaçtır?", c: "usToplam({a})", v: {a:[6,72]}, z:"zor", alt:"asal_carpan", cozum:"6=2×3 → 1+1=2, 12=2²×3 → 2+1=3" },

    // ==========================================
    // ALT DAL 3: ARALARINDA ASAL
    // ==========================================
    { id: "t5_020", s: "{a} ile {b} aralarında asal mıdır?", c: "ebob({a},{b})==1?'Evet':'Hayır'", v: {a:[3,15], b:[4,16]}, z:"orta", alt:"aralarinda_asal", inputType:"choice", choices:["Evet","Hayır"], cozum:"EBOB({a},{b}) = {ebob(a,b)} → 1 ise aralarında asal" },
    { id: "t5_021", s: "{a} ile hangisi aralarında asaldır?", c: "{dogru}", v: {a:[5,12], dogru:["{a}+1","{a}+3"], yanlis:["{a}*2","{a}+2"]}, z:"orta", alt:"aralarinda_asal", inputType:"choice", choices:["{dogru}","{yanlis}","İkisi de","Hiçbiri"], kural:"ebob(a,dogru)==1&&ebob(a,yanlis)!=1" },
    { id: "t5_022", s: "1 ile {a} aralarında asal mıdır?", c: "Evet", v: {a:[2,20]}, z:"kolay", alt:"aralarinda_asal", inputType:"choice", choices:["Evet","Hayır"], cozum:"1 ile her sayı aralarında asaldır." },
    { id: "t5_023", s: "Aralarında asal iki sayının EBOB'u kaçtır?", c: "1", v: {}, z:"kolay", alt:"aralarinda_asal", inputType:"choice", choices:["1","0","Sayıların çarpımı","Bilinemez"] },

    // ==========================================
    // ALT DAL 4: ASAL SAYI PROBLEMLERİ
    // ==========================================
    { id: "t5_030", s: "{a} ile {b} arasında kaç asal sayı vardır?", c: "aralikAsalSay({a},{b})", v: {a:[1,10], b:[10,30]}, z:"orta", alt:"asal_problem", kural:"b>a" },
    { id: "t5_031", s: "İki asal sayının toplamı {s} ise çarpımları en az kaçtır?", c: "enAzCarpim({s})", v: {s:[5,20]}, z:"zor", alt:"asal_problem" },
    { id: "t5_032", s: "x ve y asal sayı, x+y={s} ise x kaç olabilir? (En küçük)", c: "enKucukAsalToplam({s})", v: {s:[5,20]}, z:"zor", alt:"asal_problem" },

    // ==========================================
    // ALT DAL 5: MANTIK
    // ==========================================
    { id: "t5_040", s: "İki asal sayının çarpımı {c} ise toplamları kaçtır?", c: "asalCarpanToplam({c})", v: {c:[6,35]}, z:"zor", alt:"asal_mantik", cozum:"{c}'ı asal çarpanlara ayır, topla" },
    { id: "t5_041", s: "n bir doğal sayı, n²+n+{a} ifadesi asal olabilir mi? (n={n} için)", c: "isPrime({n}*{n}+{n}+{a})?'Evet':'Hayır'", v: {a:[1,41], n:[1,5]}, z:"zor", alt:"asal_mantik", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t5_042", s: "Ardışık iki sayı her zaman aralarında asal mıdır?", c: "Evet", v: {}, z:"orta", alt:"asal_mantik", inputType:"choice", choices:["Evet","Hayır","Bazen","Bilinemez"], cozum:"Ardışık sayıların EBOB'u her zaman 1'dir." },

],

 // ==========================================
// KONU 6: EKOK & EBOB - TAM ŞABLON SETİ
// 5 alt dal × 2-4 zorluk = ~30 şablon
// ==========================================
6: [

    // ==========================================
    // ALT DAL 1: EBOB BULMA
    // ==========================================
    { id: "t6_001", s: "{a} ve {b} sayılarının EBOB'u kaçtır?", c: "ebob({a},{b})", v: {a:[12,48], b:[18,72]}, z:"kolay", alt:"ebob", cozum:"{a} ve {b}'nin ortak bölenlerinin en büyüğü" },
    { id: "t6_002", s: "{a} ve {b} sayılarının EBOB'u kaçtır?", c: "ebob({a},{b})", v: {a:[24,96], b:[36,120]}, z:"orta", alt:"ebob" },
    { id: "t6_003", s: "{a}, {b} ve {c} sayılarının EBOB'u kaçtır?", c: "ebob(ebob({a},{b}),{c})", v: {a:[12,36], b:[18,48], c:[6,24]}, z:"orta", alt:"ebob" },
    { id: "t6_004", s: "Aralarında asal iki sayının EBOB'u kaçtır?", c: "1", v: {}, z:"kolay", alt:"ebob", inputType:"choice", choices:["1","0","Sayıların çarpımı","Bilinemez"] },

    // ==========================================
    // ALT DAL 2: EKOK BULMA
    // ==========================================
    { id: "t6_010", s: "{a} ve {b} sayılarının EKOK'u kaçtır?", c: "({a}*{b})/ebob({a},{b})", v: {a:[4,15], b:[6,20]}, z:"kolay", alt:"ekok", cozum:"EKOK = a×b ÷ EBOB" },
    { id: "t6_011", s: "{a} ve {b} sayılarının EKOK'u kaçtır?", c: "({a}*{b})/ebob({a},{b})", v: {a:[8,30], b:[12,45]}, z:"orta", alt:"ekok" },
    { id: "t6_012", s: "{a}, {b} ve {c} sayılarının EKOK'u kaçtır?", c: "ekokUc({a},{b},{c})", v: {a:[4,12], b:[6,18], c:[8,24]}, z:"zor", alt:"ekok" },
    { id: "t6_013", s: "Biri diğerinin katı olan iki sayının EKOK'u hangisidir?", c: "Büyük sayı", v: {}, z:"kolay", alt:"ekok", inputType:"choice", choices:["Büyük sayı","Küçük sayı","Çarpımları","Toplamları"] },

    // ==========================================
    // ALT DAL 3: EBOB-EKOK İLİŞKİSİ
    // ==========================================
    { id: "t6_020", s: "EBOB'u {e}, EKOK'u {k} olan iki sayının çarpımı kaçtır?", c: "{e}*{k}", v: {e:[2,8], k:[12,72]}, z:"kolay", alt:"ebob_ekok", cozum:"a × b = EBOB × EKOK = {e} × {k}" },
    { id: "t6_021", s: "Çarpımları {c}, EBOB'ları {e} olan iki sayının EKOK'u kaçtır?", c: "{c}/{e}", v: {e:[2,6], c:["{e}*10","{e}*50"]}, z:"orta", alt:"ebob_ekok" },
    { id: "t6_022", s: "İki sayının EBOB'u {e}, EKOK'u {k} ve sayılardan biri {a} ise diğeri kaçtır?", c: "({e}*{k})/{a}", v: {e:[2,6], k:[24,72], a:["{e}*2","{e}*6"]}, z:"zor", alt:"ebob_ekok", kural:"(e*k)%a==0" },

    // ==========================================
    // ALT DAL 4: EBOB-EKOK PROBLEMLERİ
    // ==========================================
    { id: "t6_030", s: "{a} ve {b} litrelik iki kova ile en büyük hacimli kaç litrelik kap tam doldurulur? (EBOB)", c: "ebob({a},{b})", v: {a:[12,60], b:[18,48]}, z:"orta", alt:"problem" },
    { id: "t6_031", s: "{a} kg ve {b} kg'lık çuvallar eşit büyüklükte paketlere konacak. En az kaç paket gerekir?", c: "({a}+{b})/ebob({a},{b})", v: {a:[12,60], b:[18,48]}, z:"zor", alt:"problem" },
    { id: "t6_032", s: "İki zil sırasıyla {a} ve {b} dakikada bir çalıyor. Birlikte çaldıktan kaç dakika sonra tekrar birlikte çalarlar? (EKOK)", c: "({a}*{b})/ebob({a},{b})", v: {a:[6,20], b:[8,30]}, z:"orta", alt:"problem" },
    { id: "t6_033", s: "Boyutları {a} ve {b} cm olan dikdörtgen zemine en az kaç kare fayans döşenir?", c: "({a}*{b})/(ebob({a},{b})*ebob({a},{b}))", v: {a:[40,120], b:[30,80]}, z:"zor", alt:"problem" },
    { id: "t6_034", s: "{a}, {b} ve {c} sayılarını bölen en büyük sayı kaçtır?", c: "ebob(ebob({a},{b}),{c})", v: {a:[24,72], b:[36,96], c:[12,60]}, z:"orta", alt:"problem" },

    // ==========================================
    // ALT DAL 5: MANTIK
    // ==========================================
    { id: "t6_040", s: "EBOB(a,b)={e} ve a+b={t} ise a×b en az kaçtır?", c: "{e}*({t}-{e})", v: {e:[2,6], t:[14,30]}, z:"zor", alt:"mantik", kural:"t>e" },
    { id: "t6_041", s: "a ve b doğal sayı, a/b = {pay}/{payda} (sadeleşmiş) ise EBOB(a,b) en az kaçtır?", c: "1", v: {pay:[2,5], payda:[3,7]}, z:"orta", alt:"mantik", kural:"ebob(pay,payda)==1" },
    { id: "t6_042", s: "İki sayının EBOB'u ile EKOK'unun toplamı {t} ise sayıların çarpımı en çok kaç olabilir?", c: "Math.floor(Math.pow({t}/2,2))", v: {t:[10,50]}, z:"zor", alt:"mantik" },

],

 // ==========================================
// KONU 7: KESİRLER & RASYONEL SAYILAR - TAM ŞABLON SETİ
// 7 alt dal × 2-4 zorluk = ~45 şablon
// ==========================================
7: [

    // ==========================================
    // ALT DAL 1: KESİR KAVRAMI
    // ==========================================
    { id: "t7_001", s: "{a}/{b} kesrinin payı kaçtır?", c: "{a}", v: {a:[1,9], b:[2,9]}, z:"kolay", alt:"kesir_kavram", kural:"a<b" },
    { id: "t7_002", s: "{a}/{b} kesrinin paydası kaçtır?", c: "{b}", v: {a:[1,9], b:[2,9]}, z:"kolay", alt:"kesir_kavram" },
    { id: "t7_003", s: "Bir bütünün {a}/{b}'i {c} ise bütün kaçtır?", c: "({c}*{b})/{a}", v: {a:[1,5], b:[2,8], c:["{a}*2","{a}*10"]}, z:"orta", alt:"kesir_kavram", kural:"a<b" },
    { id: "t7_004", s: "{a}/{b} kesri hangi tam sayıya eşittir?", c: "Math.floor({a}/{b})=={a}/{b}?{a}/{b}:'Tam sayı değil'", v: {b:[2,6], a:["{b}","{b}*5"]}, z:"kolay", alt:"kesir_kavram" },

    // ==========================================
    // ALT DAL 2: DENK KESİRLER
    // ==========================================
    { id: "t7_010", s: "{a}/{b} kesrine denk bir kesir yazın (payda {d} olacak)", c: "{a}*({d}/{b})/{d}", v: {a:[1,3], b:[2,5], d:["{b}*2","{b}*4"]}, z:"orta", alt:"denk_kesir" },
    { id: "t7_011", s: "{a}/{b} = ?/10 ise ? kaçtır?", c: "({a}*10)/{b}", v: {b:[2,5], a:[1,"{b}-1"]}, z:"orta", alt:"denk_kesir", kural:"10%b==0" },
    { id: "t7_012", s: "Hangisi {a}/{b} kesrine denktir?", c: "{dogru}", v: {a:[1,4], b:[2,6], dogru:"{a}*2/{b}*2"}, z:"kolay", alt:"denk_kesir", inputType:"choice", choices:["{a}×2/{b}×2","{a}+1/{b}+1","{a}×{b}/{b}×{a}","{a}-1/{b}-1"] },

    // ==========================================
    // ALT DAL 3: SADELEŞTİRME & GENİŞLETME
    // ==========================================
    { id: "t7_020", s: "{a}/{b} kesrini sadeleştirin", c: "sadelestir({a},{b})", v: {a:[2,8], b:[4,16]}, z:"kolay", alt:"sadelestirme", kural:"ebob(a,b)>1", cozum:"EBOB({a},{b}) = {ebob(a,b)} ile böl" },
    { id: "t7_021", s: "{a}/{b} kesrini sadeleştirin", c: "sadelestir({a},{b})", v: {a:[6,18], b:[12,36]}, z:"orta", alt:"sadelestirme", kural:"ebob(a,b)>1" },
    { id: "t7_022", s: "{a}/{b} kesri sadeleşmiş midir?", c: "ebob({a},{b})==1?'Evet':'Hayır'", v: {a:[2,8], b:[3,9]}, z:"kolay", alt:"sadelestirme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t7_023", s: "{a}/{b} kesrini {k} ile genişletin", c: "{a}*{k}/{b}*{k}", v: {a:[1,4], b:[2,6], k:[2,5]}, z:"kolay", alt:"sadelestirme" },

    // ==========================================
    // ALT DAL 4: KESİR İŞLEMLERİ > TOPLAMA & ÇIKARMA
    // ==========================================
    { id: "t7_030", s: "{a}/{b} + {c}/{b} = ?", c: "{a}+{c}/{b}", v: {a:[1,4], b:[3,8], c:[1,4]}, z:"kolay", alt:"kesir_toplama", cozum:"Paydalar eşit: ({a}+{c})/{b}" },
    { id: "t7_031", s: "{a}/{b} + {c}/{d} = ?", c: "({a}*{d}+{c}*{b})/({b}*{d})", v: {a:[1,5], b:[2,6], c:[1,5], d:[3,7]}, z:"orta", alt:"kesir_toplama", kural:"b!=d" },
    { id: "t7_032", s: "{a}/{b} - {c}/{d} = ?", c: "({a}*{d}-{c}*{b})/({b}*{d})", v: {a:[2,6], b:[2,6], c:[1,4], d:[3,7]}, z:"orta", alt:"kesir_toplama", kural:"b!=d&&a*d>c*b" },
    { id: "t7_033", s: "1/{a} + 1/{b} = ?", c: "({a}+{b})/({a}*{b})", v: {a:[2,6], b:[3,8]}, z:"orta", alt:"kesir_toplama", kural:"a!=b" },

    // ==========================================
    // ALT DAL 5: KESİR İŞLEMLERİ > ÇARPMA & BÖLME
    // ==========================================
    { id: "t7_040", s: "{a}/{b} × {c}/{d} = ?", c: "({a}*{c})/({b}*{d})", v: {a:[1,4], b:[2,5], c:[1,4], d:[2,5]}, z:"kolay", alt:"kesir_carpma", cozum:"Pay×Pay / Payda×Payda" },
    { id: "t7_041", s: "{a}/{b} ÷ {c}/{d} = ?", c: "({a}*{d})/({b}*{c})", v: {a:[1,4], b:[2,5], c:[1,4], d:[2,5]}, z:"orta", alt:"kesir_carpma", cozum:"Ters çevir çarp: {a}/{b} × {d}/{c}" },
    { id: "t7_042", s: "{a} × 1/{b} = ?", c: "{a}/{b}", v: {a:[2,8], b:[2,6]}, z:"kolay", alt:"kesir_carpma" },
    { id: "t7_043", s: "{a} ÷ 1/{b} = ?", c: "{a}*{b}", v: {a:[2,8], b:[2,6]}, z:"orta", alt:"kesir_carpma" },

    // ==========================================
    // ALT DAL 6: SIRALAMA
    // ==========================================
    { id: "t7_050", s: "{a}/{b} mi büyük {c}/{d} mi?", c: "{a}*{d}>{c}*{b}?'{a}/{b}':'{c}/{d}'", v: {a:[1,5], b:[2,7], c:[1,5], d:[2,7]}, z:"orta", alt:"siralama", kural:"(a/b)!=(c/d)" },
    { id: "t7_051", s: "{a}/{b}, {c}/{d}, 1/2 kesirlerini büyükten küçüğe sırala (En büyük hangisi?)", c: "enBuyukKesir({a}/{b},{c}/{d},1/2)", v: {a:[1,5], b:[2,7], c:[1,5], d:[2,7]}, z:"zor", alt:"siralama" },

    // ==========================================
    // ALT DAL 7: PROBLEM
    // ==========================================
    { id: "t7_060", s: "Bir pastanın önce {a}/{b}'ini, sonra {c}/{d}'ünü yedim. Toplam ne kadarını yedim?", c: "({a}*{d}+{c}*{b})/({b}*{d})", v: {a:[1,3], b:[3,6], c:[1,3], d:[3,6]}, z:"orta", alt:"problem", kural:"a/b+c/d<1" },
    { id: "t7_061", s: "{a} TL paranın {b}/{c}'ini harcadım. Kaç TL kaldı?", c: "{a}-({a}*{b})/{c}", v: {a:[20,100], b:[1,"{c}-1"], c:[3,8]}, z:"orta", alt:"problem", kural:"b<c" },
    { id: "t7_062", s: "Bir sınıfın {a}/{b}'i kız, {c} kişi erkek ise sınıf mevcudu kaçtır?", c: "{c}*{b}/({b}-{a})", v: {a:[1,3], b:[3,8], c:["({b}-{a})*2","({b}-{a})*10"]}, z:"zor", alt:"problem", kural:"a<b" },
    { id: "t7_063", s: "Bir havuzun {a}/{b}'i dolu. {c} litre daha eklenince yarısı doluyor. Havuz kaç litredir?", c: "{c}/(1/2-{a}/{b})", v: {a:[1,3], b:[5,8], c:[5,20]}, z:"zor", alt:"problem", kural:"a/b<1/2" },

],

// ==========================================
// KONU 8: ONDALIK SAYILAR - TAM ŞABLON SETİ
// 5 alt dal × 2-4 zorluk = ~30 şablon
// ==========================================
8: [

    // ==========================================
    // ALT DAL 1: ONDALIK KAVRAMI
    // ==========================================
    { id: "t8_001", s: "{a} ondalık sayısının tam kısmı kaçtır?", c: "Math.floor({a})", v: {a:["1.2","9.8"]}, z:"kolay", alt:"ondalik_kavram" },
    { id: "t8_002", s: "{a} ondalık sayısının ondalık kısmı kaçtır?", c: "Math.round(({a}%1)*100)/100", v: {a:["1.2","9.8"]}, z:"kolay", alt:"ondalik_kavram" },
    { id: "t8_003", s: "{a}/{b} kesrini ondalık olarak yazın", c: "Math.round(({a}/{b})*100)/100", v: {a:[1,5], b:[2,8]}, z:"orta", alt:"ondalik_kavram", kural:"a<b" },
    { id: "t8_004", s: "{a} ondalık sayısını kesir olarak yazın", c: "ondalikKesir({a})", v: {a:["0.25","0.5","0.75","0.2","0.4","0.6","0.8","0.125"]}, z:"orta", alt:"ondalik_kavram" },

    // ==========================================
    // ALT DAL 2: ONDALIK İŞLEMLERİ > TOPLAMA & ÇIKARMA
    // ==========================================
    { id: "t8_010", s: "{a} + {b} = ?", c: "Math.round(({a}+{b})*100)/100", v: {a:["1.5","8.5"], b:["0.5","5.5"]}, z:"kolay", alt:"ondalik_toplama" },
    { id: "t8_011", s: "{a} + {b} = ?", c: "Math.round(({a}+{b})*100)/100", v: {a:["10.25","50.75"], b:["5.50","25.25"]}, z:"orta", alt:"ondalik_toplama" },
    { id: "t8_012", s: "{a} - {b} = ?", c: "Math.round(({a}-{b})*100)/100", v: {a:["5.0","15.0"], b:["0.5","4.5"]}, z:"kolay", alt:"ondalik_toplama", kural:"a>b" },
    { id: "t8_013", s: "{a} - {b} = ?", c: "Math.round(({a}-{b})*100)/100", v: {a:["20.5","80.5"], b:["5.25","30.25"]}, z:"orta", alt:"ondalik_toplama", kural:"a>b" },

    // ==========================================
    // ALT DAL 3: ONDALIK İŞLEMLERİ > ÇARPMA
    // ==========================================
    { id: "t8_020", s: "{a} × 10 = ?", c: "Math.round({a}*10*100)/100", v: {a:["0.1","9.9"]}, z:"kolay", alt:"ondalik_carpma", cozum:"Virgül 1 basamak sağa kayar" },
    { id: "t8_021", s: "{a} × 100 = ?", c: "Math.round({a}*100*100)/100", v: {a:["0.1","5.0"]}, z:"kolay", alt:"ondalik_carpma", cozum:"Virgül 2 basamak sağa kayar" },
    { id: "t8_022", s: "{a} × {b} = ?", c: "Math.round({a}*{b}*100)/100", v: {a:["1.5","4.5"], b:[2,5]}, z:"orta", alt:"ondalik_carpma" },
    { id: "t8_023", s: "{a} × 0.5 = ? (Yarısı kaçtır?)", c: "Math.round({a}*0.5*100)/100", v: {a:["1.0","10.0"]}, z:"orta", alt:"ondalik_carpma" },

    // ==========================================
    // ALT DAL 4: SIRALAMA & YUVARLAMA
    // ==========================================
    { id: "t8_030", s: "{a} ve {b} ondalık sayılarından hangisi büyüktür?", c: "{a}>{b}?'{a}':'{b}'", v: {a:["1.2","8.5"], b:["1.8","8.2"]}, z:"kolay", alt:"ondalik_siralama", kural:"a!=b" },
    { id: "t8_031", s: "{a} sayısını birler basamağına yuvarlayın", c: "Math.round({a})", v: {a:["1.4","8.6"]}, z:"kolay", alt:"ondalik_siralama" },
    { id: "t8_032", s: "{a} sayısını onda birler basamağına yuvarlayın", c: "Math.round({a}*10)/10", v: {a:["1.24","5.67"]}, z:"orta", alt:"ondalik_siralama" },

    // ==========================================
    // ALT DAL 5: PROBLEM
    // ==========================================
    { id: "t8_040", s: "Tanesi {a} TL olan kalemlerden {b} tane alan kaç TL öder?", c: "Math.round({a}*{b}*100)/100", v: {a:["1.5","5.5"], b:[2,6]}, z:"kolay", alt:"ondalik_problem" },
    { id: "t8_041", s: "{a} TL paranın {b} TL'sini harcadım, kaç TL kaldı?", c: "Math.round(({a}-{b})*100)/100", v: {a:["10.0","50.0"], b:["2.5","20.5"]}, z:"kolay", alt:"ondalik_problem", kural:"a>b" },
    { id: "t8_042", s: "3 ayda sırasıyla {a}, {b}, {c} kg meyve yedim. Toplam kaç kg?", c: "Math.round(({a}+{b}+{c})*100)/100", v: {a:["1.5","5.5"], b:["2.0","6.0"], c:["0.5","4.5"]}, z:"orta", alt:"ondalik_problem" },
    { id: "t8_043", s: "{a} metrelik kumaşın {b} metresi kullanılırsa kaç metre kalır?", c: "Math.round(({a}-{b})*100)/100", v: {a:["5.0","20.0"], b:["1.5","8.5"]}, z:"orta", alt:"ondalik_problem", kural:"a>b" },

],

// ==========================================
// KONU 9: ÜSLÜ SAYILAR - TAM ŞABLON SETİ
// ==========================================
9: [
    // ALT DAL 1: ÜS KAVRAMI
    { id: "t9_001", s: "{a}² = ?", c: "{a}*{a}", v: {a:[1,12]}, z:"kolay", alt:"us_kavram", cozum:"{a} × {a} = {a}*{a}" },
    { id: "t9_002", s: "{a}² = ?", c: "{a}*{a}", v: {a:[13,25]}, z:"orta", alt:"us_kavram" },
    { id: "t9_003", s: "{a}³ = ?", c: "{a}*{a}*{a}", v: {a:[1,6]}, z:"kolay", alt:"us_kavram" },
    { id: "t9_004", s: "{a}³ = ?", c: "{a}*{a}*{a}", v: {a:[7,10]}, z:"orta", alt:"us_kavram" },
    { id: "t9_005", s: "{a}⁴ = ?", c: "Math.pow({a},4)", v: {a:[1,5]}, z:"orta", alt:"us_kavram" },
    { id: "t9_006", s: "2ⁿ = {s} ise n kaçtır?", c: "Math.log2({s})", v: {s:[2,4,8,16,32,64]}, z:"orta", alt:"us_kavram" },

    // ALT DAL 2: ÜS ÖZELLİKLERİ
    { id: "t9_010", s: "{a}² × {a}³ = ? (tabanlar aynı)", c: "Math.pow({a},5)", v: {a:[2,5]}, z:"kolay", alt:"us_ozellik", cozum:"{a}²⁺³ = {a}⁵" },
    { id: "t9_011", s: "{a}ⁿ × {a}ᵐ = ? (n={n}, m={m})", c: "Math.pow({a},{n}+{m})", v: {a:[2,5], n:[1,4], m:[1,4]}, z:"orta", alt:"us_ozellik" },
    { id: "t9_012", s: "{a}⁵ ÷ {a}² = ?", c: "Math.pow({a},3)", v: {a:[2,5]}, z:"orta", alt:"us_ozellik", cozum:"{a}⁵⁻² = {a}³" },
    { id: "t9_013", s: "({a}²)³ = ?", c: "Math.pow({a},6)", v: {a:[2,5]}, z:"orta", alt:"us_ozellik", cozum:"{a}²ˣ³ = {a}⁶" },
    { id: "t9_014", s: "{a}⁰ = ?", c: "1", v: {a:[2,10]}, z:"kolay", alt:"us_ozellik", cozum:"Sıfır hariç her sayının 0. kuvveti 1'dir" },
    { id: "t9_015", s: "0⁰ = ?", c: "Tanımsız", v: {}, z:"orta", alt:"us_ozellik", inputType:"choice", choices:["Tanımsız","0","1","Sonsuz"] },

    // ALT DAL 3: NEGATİF ÜS
    { id: "t9_020", s: "2⁻¹ = ?", c: "1/2", v: {}, z:"orta", alt:"negatif_us", inputType:"choice", choices:["1/2","-2","0","-1/2"] },
    { id: "t9_021", s: "{a}⁻² = ?", c: "1/({a}*{a})", v: {a:[2,5]}, z:"orta", alt:"negatif_us" },
    { id: "t9_022", s: "10⁻³ = ?", c: "0.001", v: {}, z:"orta", alt:"negatif_us", inputType:"choice", choices:["0.001","-1000","0.01","-30"] },

    // ALT DAL 4: BİLİMSEL GÖSTERİM
    { id: "t9_030", s: "{a} sayısını 10'un kuvveti olarak yazın", c: "{a}.toString().length-1", v: {a:[100,1000,10000,100000]}, z:"orta", alt:"bilimsel" },
    { id: "t9_031", s: "3×10⁴ = ?", c: "30000", v: {}, z:"kolay", alt:"bilimsel" },

    // ALT DAL 5: PROBLEM
    { id: "t9_040", s: "Bir bakteri her saat 2'ye bölünüyor. {n} saat sonra kaç bakteri olur?", c: "Math.pow(2,{n})", v: {n:[2,6]}, z:"orta", alt:"problem" },
    { id: "t9_041", s: "2ⁿ = {s} ise 2ⁿ⁺² kaçtır?", c: "{s}*4", v: {s:[2,4,8,16,32]}, z:"zor", alt:"problem" },
],

 // ==========================================
// KONU 10: KÖKLÜ SAYILAR - TAM ŞABLON SETİ
// 5 alt dal × 2-4 zorluk = ~28 şablon
// ==========================================
10: [

    // ==========================================
    // ALT DAL 1: KAREKÖK KAVRAMI
    // ==========================================
    { id: "t10_001", s: "√{a} = ?", c: "Math.sqrt({a})", v: {a:[4,9,16,25,36,49,64,81,100]}, z:"kolay", alt:"kok_kavram", cozum:"{a} sayısının karekökü" },
    { id: "t10_002", s: "Hangi sayının karesi {a}'tir?", c: "Math.sqrt({a})", v: {a:[4,9,16,25,36,49,64,81,100]}, z:"kolay", alt:"kok_kavram" },
    { id: "t10_003", s: "√{a} hangi iki tam sayı arasındadır?", c: "Math.floor(Math.sqrt({a})) + ' ile ' + Math.ceil(Math.sqrt({a}))", v: {a:[2,99]}, z:"orta", alt:"kok_kavram", inputType:"choice", kural:"!Number.isInteger(Math.sqrt({a}))" },
    { id: "t10_004", s: "√{a} sayısı tam sayı mıdır?", c: "Number.isInteger(Math.sqrt({a}))?'Evet':'Hayır'", v: {a:[2,50]}, z:"kolay", alt:"kok_kavram", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t10_005", s: "Alanı {a} br² olan karenin bir kenar uzunluğu kaç br'dir?", c: "Math.sqrt({a})", v: {a:[4,9,16,25,36,49,64,81,100]}, z:"orta", alt:"kok_kavram" },

    // ==========================================
    // ALT DAL 2: KÖK İŞLEMLERİ > ÇARPMA & BÖLME
    // ==========================================
    { id: "t10_010", s: "√{a} × √{b} = ?", c: "Math.sqrt({a}*{b})", v: {a:[2,8], b:[2,8]}, z:"orta", alt:"kok_carpma", cozum:"√{a} × √{b} = √({a}×{b}) = √{a}*{b}" },
    { id: "t10_011", s: "√{a} × √{b} = ?", c: "Math.sqrt({a}*{b})", v: {a:[2,6], b:[3,12]}, z:"orta", alt:"kok_carpma" },
    { id: "t10_012", s: "√{a} ÷ √{b} = ?", c: "Math.sqrt({a}/{b})", v: {b:[2,6], a:["{b}*4","{b}*16"]}, z:"orta", alt:"kok_carpma", cozum:"√{a} ÷ √{b} = √({a}÷{b})" },
    { id: "t10_013", s: "√{a} × √{a} = ?", c: "{a}", v: {a:[2,10]}, z:"kolay", alt:"kok_carpma", cozum:"√{a} × √{a} = {a}" },

    // ==========================================
    // ALT DAL 3: KÖK İŞLEMLERİ > TOPLAMA & ÇIKARMA
    // ==========================================
    { id: "t10_020", s: "√{a} + √{a} = ?", c: "2*Math.sqrt({a})", v: {a:[4,9,16,25]}, z:"kolay", alt:"kok_toplama", cozum:"1√{a} + 1√{a} = 2√{a}" },
    { id: "t10_021", s: "{a}√{b} + {c}√{b} = ?", c: "({a}+{c})*Math.sqrt({b})", v: {a:[2,5], c:[3,7], b:[2,3,5,6,7]}, z:"orta", alt:"kok_toplama", cozum:"{a}√{b} + {c}√{b} = ({a}+{c})√{b}" },
    { id: "t10_022", s: "{a}√{b} - {c}√{b} = ?", c: "({a}-{c})*Math.sqrt({b})", v: {a:[5,10], c:[1,"{a}-2"], b:[2,3,5,6,7]}, z:"orta", alt:"kok_toplama", kural:"a>c" },
    { id: "t10_023", s: "√{a} + √{b} = ? (Yaklaşık değer, virgülden sonra 1 basamak)", c: "Math.round((Math.sqrt({a})+Math.sqrt({b}))*10)/10", v: {a:[2,8], b:[3,12]}, z:"zor", alt:"kok_toplama" },

    // ==========================================
    // ALT DAL 4: KÖK DIŞINA ÇIKARMA & İÇİNE ALMA
    // ==========================================
    { id: "t10_030", s: "√{a} sayısını a√b şeklinde yazın", c: "kokDisi({a})", v: {a:[8,12,18,20,27,32,45,48,50,72,75,80,98]}, z:"orta", alt:"kok_disi", cozum:"{a}'ı tam kare çarpanına ayır: {kokDisi(a)}" },
    { id: "t10_031", s: "√{a} sayısını a√b şeklinde yazın", c: "kokDisi({a})", v: {a:[108,125,147,180,200,242,288,300]}, z:"zor", alt:"kok_disi" },
    { id: "t10_032", s: "{a}√{b} sayısını √x şeklinde yazın (Kök içine alın)", c: "{a}*{a}*{b}", v: {a:[2,5], b:[2,6]}, z:"orta", alt:"kok_disi", cozum:"{a}√{b} = √({a}²×{b}) = √{a*a*b}" },
    { id: "t10_033", s: "Hangisi √{a} ifadesine eşittir?", c: "{dogru}", v: {a:[12,18,20,27,45,50,72,75]}, z:"orta", alt:"kok_disi", inputType:"choice", choices:["{dogru}","{yanlis1}","{yanlis2}","{yanlis3}"] },

    // ==========================================
    // ALT DAL 5: PROBLEM & MANTIK
    // ==========================================
    { id: "t10_040", s: "√{a} + √{b} toplamı tam sayı ise a+b en az kaçtır? (a≠b)", c: "kokToplamMin({a},{b})", v: {a:[2,8], b:[2,8]}, z:"zor", alt:"kok_mantik", kural:"a!=b" },
    { id: "t10_041", s: "x = √{a} ise x² = ?", c: "{a}", v: {a:[3,10]}, z:"kolay", alt:"kok_mantik" },
    { id: "t10_042", s: "√{a} + √{b} = √{c} ise c kaçtır? (a+b)", c: "Math.pow(Math.sqrt({a})+Math.sqrt({b}),2)", v: {a:[4,9,16], b:[4,9,16]}, z:"zor", alt:"kok_mantik" },
    { id: "t10_043", s: "Bir dikdörtgenin alanı √{a} br², kısa kenarı √{b} br ise uzun kenarı kaç br'dir?", c: "Math.sqrt({a}/{b})", v: {b:[2,5], a:["{b}*9","{b}*25"]}, z:"zor", alt:"kok_problem" },
    { id: "t10_044", s: "√(x+{a}) = {b} ise x kaçtır?", c: "{b}*{b}-{a}", v: {a:[2,10], b:[3,6]}, z:"orta", alt:"kok_problem" },

],

// ==========================================
// KONU 11: ÇARPANLARA AYIRMA & ÖZDEŞLİKLER - TAM ŞABLON SETİ
// 6 alt dal × 2-4 zorluk = ~35 şablon
// ==========================================
11: [

    // ==========================================
    // ALT DAL 1: ORTAK ÇARPAN PARANTEZİ
    // ==========================================
    { id: "t11_001", s: "{a}x + {b}x = ? (ortak çarpan)", c: "{a}+{b}x", v: {a:[2,7], b:[3,8]}, z:"kolay", alt:"ortak_carpan", cozum:"({a}+{b})x" },
    { id: "t11_002", s: "{a}x + {b}x + {c}x = ?", c: "{a}+{b}+{c}x", v: {a:[2,5], b:[3,6], c:[1,4]}, z:"kolay", alt:"ortak_carpan" },
    { id: "t11_003", s: "{a}x + {b} ifadesini çarpanlarına ayırın", c: "{ebob(a,b)}({a/ebob(a,b)}x+{b/ebob(a,b)})", v: {a:[4,12], b:[6,18]}, z:"orta", alt:"ortak_carpan", kural:"ebob(a,b)>1" },
    { id: "t11_004", s: "{a}ab + {b}ac = ?", c: "{a}a(b+{b/a}c)", v: {a:[2,6], b:["{a}*2","{a}*5"]}, z:"orta", alt:"ortak_carpan" },
    { id: "t11_005", s: "x² + {a}x ifadesini çarpanlarına ayırın", c: "x(x+{a})", v: {a:[2,10]}, z:"kolay", alt:"ortak_carpan" },
    { id: "t11_006", s: "{a}x²y + {b}xy² = ?", c: "{ebob(a,b)}xy({a/ebob(a,b)}x+{b/ebob(a,b)}y)", v: {a:[4,12], b:[6,18]}, z:"zor", alt:"ortak_carpan", kural:"ebob(a,b)>1" },

    // ==========================================
    // ALT DAL 2: İKİ KARE FARKI
    // ==========================================
    { id: "t11_010", s: "x² - {a} = ? (çarpanlarına ayırın)", c: "(x-{sqrt(a)})(x+{sqrt(a)})", v: {a:[4,9,16,25,36,49,64,81]}, z:"kolay", alt:"iki_kare", cozum:"x² - {a} = (x-√{a})(x+√{a})" },
    { id: "t11_011", s: "{a}² - {b}² = ?", c: "({a}-{b})({a}+{b})", v: {a:[5,15], b:[2,"{a}-2"]}, z:"kolay", alt:"iki_kare", kural:"a>b" },
    { id: "t11_012", s: "{a}x² - {b} = ?", c: "({sqrt(a)}x-{sqrt(b)})({sqrt(a)}x+{sqrt(b)})", v: {a:[4,9,16], b:[9,16,25]}, z:"orta", alt:"iki_kare" },
    { id: "t11_013", s: "(x-{a})(x+{a}) = ?", c: "x²-{a*a}", v: {a:[2,8]}, z:"kolay", alt:"iki_kare" },
    { id: "t11_014", s: "{a}² - {b}² = 55 ise a+b en az kaçtır? (a,b tam sayı)", c: "11", v: {}, z:"zor", alt:"iki_kare", inputType:"choice", choices:["11","5","55","10"], cozum:"(a-b)(a+b)=55, a-b ve a+b tam sayı, çarpımları 55" },

    // ==========================================
    // ALT DAL 3: TAM KARE ÖZDEŞLİKLER
    // ==========================================
    { id: "t11_020", s: "(x+{a})² = ?", c: "x²+{2*a}x+{a*a}", v: {a:[2,8]}, z:"kolay", alt:"tam_kare", cozum:"x² + 2·{a}·x + {a}²" },
    { id: "t11_021", s: "(x-{a})² = ?", c: "x²-{2*a}x+{a*a}", v: {a:[2,8]}, z:"kolay", alt:"tam_kare", cozum:"x² - 2·{a}·x + {a}²" },
    { id: "t11_022", s: "({a}x+{b})² = ?", c: "{a*a}x²+{2*a*b}x+{b*b}", v: {a:[2,5], b:[1,5]}, z:"orta", alt:"tam_kare" },
    { id: "t11_023", s: "x² + {b}x + {c} ifadesi tam kare ise x'in katsayısı kaçtır?", c: "{b/2}", v: {a:[2,6], b:"2*{a}", c:"{a}*{a}"}, z:"orta", alt:"tam_kare" },
    { id: "t11_024", s: "x² + {b}x + {c} = (x+?)² ise ? kaçtır?", c: "{b/2}", v: {a:[2,6], b:"2*{a}", c:"{a}*{a}"}, z:"orta", alt:"tam_kare" },
    { id: "t11_025", s: "x² + {b}x ifadesine kaç eklenirse tam kare olur?", c: "{b/2}*{b/2}", v: {b:[2,10,"cift"]}, z:"zor", alt:"tam_kare", cozum:"({b}/2)² = {b/2*b/2}" },

    // ==========================================
    // ALT DAL 4: GRUPLANDIRMA
    // ==========================================
    { id: "t11_030", s: "ax + ay + bx + by = ? (a={a1}, b={b1})", c: "(x+y)({a1}+{b1})", v: {a1:[2,5], b1:[3,6]}, z:"orta", alt:"gruplandirma", cozum:"a(x+y) + b(x+y) = (x+y)(a+b)" },
    { id: "t11_031", s: "x² + {a}x + {b}x + {a*b} = ?", c: "(x+{a})(x+{b})", v: {a:[2,6], b:[3,7]}, z:"orta", alt:"gruplandirma" },
    { id: "t11_032", s: "x³ + x² + x + 1 = ?", c: "(x+1)(x²+1)", v: {}, z:"zor", alt:"gruplandirma", inputType:"choice", choices:["(x+1)(x²+1)","(x-1)(x²+1)","(x+1)(x²-1)","(x-1)(x²-1)"] },
    { id: "t11_033", s: "xy + {a}x + {b}y + {a*b} = ?", c: "(x+{b})(y+{a})", v: {a:[2,5], b:[3,6]}, z:"zor", alt:"gruplandirma" },

    // ==========================================
    // ALT DAL 5: PROBLEM
    // ==========================================
    { id: "t11_040", s: "x² - y² = {f} ve x+y = {t} ise x-y kaçtır?", c: "{f}/{t}", v: {t:[2,8], f:["{t}*2","{t}*10"]}, z:"orta", alt:"problem", cozum:"(x-y)(x+y)={f} → (x-y)·{t}={f} → x-y={f}/{t}" },
    { id: "t11_041", s: "x² + 2xy + y² = {s} ise x+y kaçtır?", c: "Math.sqrt({s})", v: {s:[4,9,16,25,36,49,64,81,100]}, z:"orta", alt:"problem", cozum:"(x+y)² = {s} → x+y = √{s}" },
    { id: "t11_042", s: "Dikdörtgenin alanı x²-{a} ise kenar uzunlukları ne olabilir?", c: "(x-{sqrt(a)})(x+{sqrt(a)})", v: {a:[4,9,16,25]}, z:"orta", alt:"problem", inputType:"choice" },

    // ==========================================
    // ALT DAL 6: MANTIK
    // ==========================================
    { id: "t11_050", s: "x² - {a}x + {b} = 0 denkleminin çarpanlara ayrılmış hali (x-?)(x-?) = 0", c: "carpanBul({a},{b})", v: {a:[5,10], b:[6,24]}, z:"zor", alt:"mantik" },
    { id: "t11_051", s: "x² + {a}x + {b} = (x+{c})(x+{d}) ise c+d kaçtır?", c: "{c}+{d}", v: {c:[2,5], d:[3,6]}, z:"orta", alt:"mantik" },

],

// ==========================================
// KONU 12: 1. DERECEDEN DENKLEMLER - TAM ŞABLON SETİ
// 6 alt dal × 2-4 zorluk = ~40 şablon
// ==========================================
12: [

    // ==========================================
    // ALT DAL 1: TEK BİLİNMEYENLİ > x+a=b
    // ==========================================
    { id: "t12_001", s: "x + {a} = {b} ise x = ?", c: "{b}-{a}", v: {a:[3,20], b:[10,50]}, z:"kolay", alt:"tek_basit", kural:"b>a", cozum:"x = {b} - {a} = {b}-{a}" },
    { id: "t12_002", s: "x + {a} = {b} ise x = ?", c: "{b}-{a}", v: {a:[15,50], b:[30,100]}, z:"orta", alt:"tek_basit", kural:"b>a" },
    { id: "t12_003", s: "x - {a} = {b} ise x = ?", c: "{a}+{b}", v: {a:[5,20], b:[5,20]}, z:"kolay", alt:"tek_basit", cozum:"x = {a} + {b} = {a}+{b}" },
    { id: "t12_004", s: "{a} - x = {b} ise x = ?", c: "{a}-{b}", v: {a:[20,60], b:[1,"{a}-1"]}, z:"orta", alt:"tek_basit", kural:"a>b", cozum:"x = {a} - {b} = {a}-{b}" },

    // ==========================================
    // ALT DAL 2: KATSAYILI DENKLEM > ax=b
    // ==========================================
    { id: "t12_010", s: "{a}x = {b} ise x = ?", c: "{b}/{a}", v: {a:[2,7], b:["{a}*2","{a}*15"]}, z:"kolay", alt:"katsayili", cozum:"x = {b} ÷ {a} = {b/a}" },
    { id: "t12_011", s: "{a}x = {b} ise x = ?", c: "{b}/{a}", v: {a:[3,9], b:["{a}*3","{a}*30"]}, z:"orta", alt:"katsayili" },
    { id: "t12_012", s: "{a}x + {b} = {c} ise x = ?", c: "({c}-{b})/{a}", v: {a:[2,5], b:[3,20], c:["{a}*2+{b}","{a}*20+{b}"]}, z:"orta", alt:"katsayili", cozum:"{a}x = {c}-{b} = {c-b} → x = {c-b}/{a}" },
    { id: "t12_013", s: "{a}x - {b} = {c} ise x = ?", c: "({c}+{b})/{a}", v: {a:[2,5], b:[3,15], c:["{a}*2-{b}","{a}*15-{b}"]}, z:"orta", alt:"katsayili", kural:"a*2>b", cozum:"{a}x = {c}+{b} = {c+b} → x = {c+b}/{a}" },
    { id: "t12_014", s: "{a}x + {b} = {c} ise x = ?", c: "({c}-{b})/{a}", v: {a:[3,8], b:[5,30], c:["{a}*3+{b}","{a}*25+{b}"]}, z:"zor", alt:"katsayili" },

    // ==========================================
    // ALT DAL 3: İKİ TARAFLI DENKLEM
    // ==========================================
    { id: "t12_020", s: "{a}x + {b} = {c}x + {d} ise x = ?", c: "({d}-{b})/({a}-{c})", v: {a:[3,8], c:[1,"{a}-2"], b:[2,10], d:[2,10]}, z:"zor", alt:"iki_tarafli", kural:"a>c", cozum:"{a}x-{c}x = {d}-{b} → ({a-c})x = {d-b} → x = {d-b}/{a-c}" },
    { id: "t12_021", s: "{a}(x+{b}) = {c} ise x = ?", c: "{c}/{a}-{b}", v: {a:[2,5], b:[1,5], c:["{a}*({b}+2)","{a}*({b}+10)"]}, z:"zor", alt:"iki_tarafli", cozum:"x+{b} = {c}/{a} → x = {c/a}-{b}" },
    { id: "t12_022", s: "{a}(x-{b}) = {c}(x+{d}) ise x = ?", c: "({c}*{d}+{a}*{b})/({a}-{c})", v: {a:[3,7], c:[1,"{a}-2"], b:[2,5], d:[1,5]}, z:"zor", alt:"iki_tarafli", kural:"a>c" },
    { id: "t12_023", s: "x/{a} + x/{b} = {c} ise x = ?", c: "{c}*{a}*{b}/({a}+{b})", v: {a:[2,5], b:[2,6], c:[1,5]}, z:"zor", alt:"iki_tarafli", kural:"a!=b" },

    // ==========================================
    // ALT DAL 4: DENKLEM KURMA
    // ==========================================
    { id: "t12_030", s: "Bir sayının {k} katının {f} fazlası {s} ise sayı kaçtır?", c: "({s}-{f})/{k}", v: {k:[2,5], f:[3,15], s:["{k}*3+{f}","{k}*20+{f}"]}, z:"orta", alt:"denklem_kurma" },
    { id: "t12_031", s: "Bir sayının {k1} katı ile {k2} katının toplamı {s} ise sayı kaçtır?", c: "{s}/({k1}+{k2})", v: {k1:[2,5], k2:[3,6], s:["({k1}+{k2})*2","({k1}+{k2})*20"]}, z:"orta", alt:"denklem_kurma" },
    { id: "t12_032", s: "Ardışık iki sayının toplamı {s} ise küçük sayı kaçtır?", c: "({s}-1)/2", v: {s:[5,99,"tek"]}, z:"orta", alt:"denklem_kurma", cozum:"n+(n+1)={s} → 2n+1={s} → n=({s}-1)/2" },
    { id: "t12_033", s: "Bir sayının yarısı ile {k} katının toplamı {s} ise sayı kaçtır?", c: "{s}/({k}+0.5)", v: {k:[1,4], s:["({k}+0.5)*2","({k}+0.5)*20"]}, z:"zor", alt:"denklem_kurma" },
    { id: "t12_034", s: "Hangi sayının {a} eksiğinin {b} katı {c} eder?", c: "({c}/{b})+{a}", v: {a:[2,10], b:[2,5], c:["{b}*3","{b}*15"]}, z:"orta", alt:"denklem_kurma" },

    // ==========================================
    // ALT DAL 5: PROBLEM
    // ==========================================
    { id: "t12_040", s: "Bir sınıftaki öğrenciler {a}'ar oturunca {b} kişi ayakta kalıyor. {c}'er oturunca {d} sıra boş kalıyor. Sınıf mevcudu kaçtır?", c: "sinavMevcut({a},{b},{c},{d})", v: {a:[2,4], b:[1,5], c:[3,5], d:[1,3]}, z:"zor", alt:"problem", kural:"c>a" },
    { id: "t12_041", s: "Bir çiftlikte {a} tavşan ve {b} tavuk var. Toplam {c} ayak var. Tavşan sayısı kaçtır?", c: "({c}-2*{b})/2", v: {a:[5,15], b:[5,15], c:"{a}*4+{b}*2"}, z:"orta", alt:"problem" },
    { id: "t12_042", s: "{a} TL ve {b} TL'lik ürünlerden toplam {c} tane alınıp {d} TL ödeniyor. {a} TL'lik üründen kaç tane alınmıştır?", c: "({d}-{b}*{c})/({a}-{b})", v: {a:[5,10], b:[2,"{a}-2"], c:[10,20], d:["{b}*{c}+5","{a}*{c}-5"]}, z:"zor", alt:"problem", kural:"a>b" },

    // ==========================================
    // ALT DAL 6: YENİ NESİL
    // ==========================================
    { id: "t12_050", s: "Bir su deposunun {a}/{b}'i doludur. {c} litre daha eklenince {d}/{e}'i doluyor. Depo kaç litredir?", c: "{c}/({d}/{e}-{a}/{b})", v: {a:[1,3], b:[4,8], d:[2,4], e:[4,8], c:[10,50]}, z:"zor", alt:"yeni_nesil", kural:"d/e>a/b" },
    { id: "t12_051", s: "Bir ipin ucundan {a} cm kesilince orta noktası {b} cm kayıyor. İpin ilk boyu kaç cm'dir?", c: "2*{a}+2*{b}", v: {a:[5,20], b:[2,10]}, z:"zor", alt:"yeni_nesil" },

],

// ==========================================
// KONU 13: EŞİTSİZLİKLER - TAM ŞABLON SETİ
// 5 alt dal × 2-4 zorluk = ~28 şablon
// ==========================================
13: [

    // ==========================================
    // ALT DAL 1: BASİT EŞİTSİZLİK > x+a < b
    // ==========================================
    { id: "t13_001", s: "x + {a} < {b} ise x'in en büyük tam sayı değeri kaçtır?", c: "{b}-{a}-1", v: {a:[3,15], b:[10,40]}, z:"orta", alt:"basit", kural:"b>a", cozum:"x < {b}-{a} = {b-a} → En büyük tam sayı: {b-a-1}" },
    { id: "t13_002", s: "x + {a} ≤ {b} ise x'in en büyük tam sayı değeri kaçtır?", c: "{b}-{a}", v: {a:[3,15], b:[10,40]}, z:"orta", alt:"basit", kural:"b>a", cozum:"x ≤ {b}-{a} = {b-a} → En büyük tam sayı: {b-a}" },
    { id: "t13_003", s: "x - {a} > {b} ise x'in en küçük tam sayı değeri kaçtır?", c: "{a}+{b}+1", v: {a:[3,15], b:[2,15]}, z:"orta", alt:"basit", cozum:"x > {a}+{b} = {a+b} → En küçük tam sayı: {a+b+1}" },
    { id: "t13_004", s: "x - {a} ≥ {b} ise x'in en küçük tam sayı değeri kaçtır?", c: "{a}+{b}", v: {a:[3,15], b:[2,15]}, z:"orta", alt:"basit", cozum:"x ≥ {a}+{b} = {a+b} → En küçük tam sayı: {a+b}" },

    // ==========================================
    // ALT DAL 2: KATSAYILI EŞİTSİZLİK
    // ==========================================
    { id: "t13_010", s: "{a}x < {b} ise x'in en büyük tam sayı değeri kaçtır?", c: "Math.floor(({b}-1)/{a})", v: {a:[2,6], b:[12,60]}, z:"orta", alt:"katsayili" },
    { id: "t13_011", s: "{a}x ≤ {b} ise x'in en büyük tam sayı değeri kaçtır?", c: "Math.floor({b}/{a})", v: {a:[2,6], b:[12,60]}, z:"orta", alt:"katsayili" },
    { id: "t13_012", s: "{a}x > {b} ise x'in en küçük tam sayı değeri kaçtır?", c: "Math.floor({b}/{a})+1", v: {a:[2,6], b:[12,60]}, z:"orta", alt:"katsayili" },
    { id: "t13_013", s: "{a}x ≥ {b} ise x'in en küçük tam sayı değeri kaçtır?", c: "Math.ceil({b}/{a})", v: {a:[2,6], b:[12,60]}, z:"orta", alt:"katsayili" },
    { id: "t13_014", s: "-{a}x < {b} ise x'in en küçük tam sayı değeri kaçtır?", c: "Math.floor(-{b}/{a})+1", v: {a:[2,6], b:[10,40]}, z:"zor", alt:"katsayili", cozum:"Negatif ile bölünce yön değişir: x > -{b}/{a}" },

    // ==========================================
    // ALT DAL 3: KARMAŞIK EŞİTSİZLİK
    // ==========================================
    { id: "t13_020", s: "{a}x + {b} < {c} ise x'in en büyük tam sayı değeri kaçtır?", c: "Math.floor(({c}-{b}-1)/{a})", v: {a:[2,5], b:[3,15], c:[20,80]}, z:"zor", alt:"karmasik", kural:"c>b" },
    { id: "t13_021", s: "{a}x + {b} ≤ {c} ise x'in en büyük tam sayı değeri kaçtır?", c: "Math.floor(({c}-{b})/{a})", v: {a:[2,5], b:[3,15], c:[20,80]}, z:"zor", alt:"karmasik", kural:"c>b" },
    { id: "t13_022", s: "{a} < x < {b} ise x kaç farklı tam sayı değeri alır?", c: "{b}-{a}-1", v: {a:[2,10], b:["{a}+3","{a}+10"]}, z:"orta", alt:"karmasik", kural:"b>a+1" },
    { id: "t13_023", s: "{a} ≤ x ≤ {b} ise x kaç farklı tam sayı değeri alır?", c: "{b}-{a}+1", v: {a:[2,10], b:["{a}+2","{a}+8"]}, z:"orta", alt:"karmasik", kural:"b>=a" },

    // ==========================================
    // ALT DAL 4: ARALIK
    // ==========================================
    { id: "t13_030", s: "x < {a} ve x > {b} ise x'in alabileceği tam sayı değerleri toplamı kaçtır?", c: "aralikToplam({b}+1,{a}-1)", v: {a:[6,15], b:[1,"{a}-3"]}, z:"zor", alt:"aralik", kural:"a>b+2", cozum:"({b+1}) + ({b+2}) + ... + ({a-1})" },
    { id: "t13_031", s: "2x - 3 < x + {a} < 3x + {b} eşitsizliğini sağlayan x tam sayısı kaçtır?", c: "tekCozumBul({a},{b})", v: {a:[5,12], b:[1,5]}, z:"zor", alt:"aralik" },
    { id: "t13_032", s: "|x - {a}| < {b} eşitsizliğini sağlayan kaç tam sayı vardır?", c: "2*{b}-1", v: {a:[5,15], b:[2,6]}, z:"zor", alt:"aralik", cozum:"{a-b} < x < {a+b} → {a-b+1} ile {a+b-1} arası → {2*b-1} tane" },

    // ==========================================
    // ALT DAL 5: PROBLEM
    // ==========================================
    { id: "t13_040", s: "Bir sınıftaki öğrenci sayısı {a}'ten fazla, {b}'den azdır. Sınıf mevcudu en az kaçtır?", c: "{a}+1", v: {a:[15,30], b:[25,45]}, z:"kolay", alt:"problem", kural:"b>a+1" },
    { id: "t13_041", s: "Bir sayının {k} katının {f} fazlası {s}'ten küçük ise sayı en çok kaçtır? (tam sayı)", c: "Math.floor(({s}-{f}-1)/{k})", v: {k:[2,5], f:[3,10], s:[30,100]}, z:"orta", alt:"problem", kural:"s>f" },
    { id: "t13_042", s: "Tanesi {a} TL olan kalemlerden {b} TL'lik alınıyor. En az kaç kalem alınmıştır?", c: "Math.ceil({b}/{a})", v: {a:[3,8], b:[20,50]}, z:"orta", alt:"problem" },
    { id: "t13_043", s: "Bir araç saatte en fazla {v} km hız yapabiliyor. {x} km'lik yolu en az kaç saatte alır?", c: "Math.ceil({x}/{v})", v: {v:[60,100], x:[150,500]}, z:"orta", alt:"problem" },

],

  // ==========================================
// KONU 14: ORAN & ORANTI - TAM ŞABLON SETİ
// 6 alt dal × 2-4 zorluk = ~32 şablon
// ==========================================
14: [

    // ==========================================
    // ALT DAL 1: ORAN KAVRAMI
    // ==========================================
    { id: "t14_001", s: "{a} sayısının {b} sayısına oranı kaçtır?", c: "{a}/{b}", v: {a:[2,20], b:[3,15]}, z:"kolay", alt:"oran_kavram", cozum:"{a} / {b} = {a}/{b}" },
    { id: "t14_002", s: "{a} TL'nin {b} TL'ye oranı kaçtır?", c: "{a}/{b}", v: {a:[5,50], b:[10,100]}, z:"kolay", alt:"oran_kavram" },
    { id: "t14_003", s: "Bir sınıfta {a} kız, {b} erkek var. Kızların erkeklere oranı kaçtır?", c: "{a}/{b}", v: {a:[8,20], b:[10,25]}, z:"kolay", alt:"oran_kavram" },
    { id: "t14_004", s: "Birim oran: {a} km'de {b} litre yakan araç 1 km'de kaç litre yakar?", c: "Math.round(({b}/{a})*1000)/1000", v: {a:[100,500], b:[5,20]}, z:"orta", alt:"oran_kavram" },

    // ==========================================
    // ALT DAL 2: DOĞRU ORANTI
    // ==========================================
    { id: "t14_010", s: "a/b = {a}/{b} ve a+b = {t} ise a kaçtır?", c: "{t}*{a}/({a}+{b})", v: {a:[1,5], b:[2,7], t:["({a}+{b})*2","({a}+{b})*15"]}, z:"orta", alt:"dogru_oranti", kural:"a!=b", cozum:"a = {t} × {a}/({a}+{b})" },
    { id: "t14_011", s: "{a} kg elma {b} TL ise {c} kg elma kaç TL'dir?", c: "({b}*{c})/{a}", v: {a:[2,8], b:[5,20], c:["{a}+1","{a}*4"]}, z:"kolay", alt:"dogru_oranti" },
    { id: "t14_012", s: "{a} işçi bir işi {b} günde yaparsa, {c} işçi kaç günde yapar? (ters orantı değil, doğru orantı)", c: "({b}*{c})/{a}", v: {a:[2,5], b:[6,15], c:["{a}+2","{a}*3"]}, z:"orta", alt:"dogru_oranti" },
    { id: "t14_013", s: "x/{a} = y/{b} = z/{c} ve x+y+z = {t} ise x kaçtır?", c: "{t}*{a}/({a}+{b}+{c})", v: {a:[1,5], b:[2,6], c:[3,7], t:["({a}+{b}+{c})*2","({a}+{b}+{c})*10"]}, z:"zor", alt:"dogru_oranti" },
    { id: "t14_014", s: "a sayısı b ile doğru orantılı. b={b1} iken a={a1} ise b={b2} iken a kaçtır?", c: "({a1}*{b2})/{b1}", v: {a1:[2,10], b1:[3,8], b2:["{b1}+2","{b1}*3"]}, z:"orta", alt:"dogru_oranti" },

    // ==========================================
    // ALT DAL 3: TERS ORANTI
    // ==========================================
    { id: "t14_020", s: "{a} işçi bir işi {b} günde bitirirse, {c} işçi kaç günde bitirir?", c: "({a}*{b})/{c}", v: {a:[3,10], b:[6,20], c:[2,"{a}*2"]}, z:"orta", alt:"ters_oranti", cozum:"Ters orantı: {a}×{b} = {c}×x → x = {a}×{b}/{c}" },
    { id: "t14_021", s: "{a} işçi bir işi {b} günde bitirirse, aynı işi {c} günde bitirmek için kaç işçi gerekir?", c: "({a}*{b})/{c}", v: {a:[4,10], b:[8,20], c:[4,"{b}-2"]}, z:"orta", alt:"ters_oranti", kural:"c<b" },
    { id: "t14_022", s: "x ile y ters orantılı. x={x1} iken y={y1} ise x={x2} iken y kaçtır?", c: "({x1}*{y1})/{x2}", v: {x1:[3,8], y1:[4,12], x2:[2,"{x1}+3"]}, z:"orta", alt:"ters_oranti" },
    { id: "t14_023", s: "Bir havuzu eşit kapasiteli {a} musluk {b} saatte dolduruyor. {c} musluk kaç saatte doldurur?", c: "({a}*{b})/{c}", v: {a:[3,8], b:[6,15], c:[2,"{a}*2"]}, z:"orta", alt:"ters_oranti" },

    // ==========================================
    // ALT DAL 4: BİLEŞİK ORANTI
    // ==========================================
    { id: "t14_030", s: "{a} işçi {b} günde {c} parça üretiyor. {d} işçi {e} günde kaç parça üretir?", c: "({a}*{b}*{d}*{e})/({a}*{b}*{c})", v: {a:[2,5], b:[3,8], c:[10,30], d:[3,8], e:[4,10]}, z:"zor", alt:"bilesik" },
    { id: "t14_031", s: "{a} işçi {b} m² duvarı {c} günde örüyor. {d} işçi {e} m² duvarı kaç günde örer?", c: "({a}*{c}*{e})/({d}*{b})", v: {a:[2,5], b:[20,60], c:[3,8], d:[3,6], e:[30,80]}, z:"zor", alt:"bilesik" },
    { id: "t14_032", s: "x, y ile doğru; z ile ters orantılı. y={y1}, z={z1} iken x={x1} ise y={y2}, z={z2} iken x kaçtır?", c: "{x1}*({y2}/{y1})*({z1}/{z2})", v: {x1:[4,12], y1:[2,8], z1:[3,9], y2:["{y1}*2","{y1}*3"], z2:[1,"{z1}-2"]}, z:"zor", alt:"bilesik" },

    // ==========================================
    // ALT DAL 5: PROBLEM
    // ==========================================
    { id: "t14_040", s: "Bir sınıfta kızların erkeklere oranı {a}/{b}. Sınıfta {c} kız varsa kaç erkek vardır?", c: "({c}*{b})/{a}", v: {a:[2,5], b:[3,7], c:["{a}*2","{a}*10"]}, z:"orta", alt:"problem", kural:"a!=b" },
    { id: "t14_041", s: "Bir karışımda A maddesinin B maddesine oranı {a}/{b}. {c} gram karışımda kaç gram A vardır?", c: "({c}*{a})/({a}+{b})", v: {a:[1,4], b:[2,5], c:["({a}+{b})*5","({a}+{b})*30"]}, z:"orta", alt:"problem" },
    { id: "t14_042", s: "Bir araç {a} km yolu {b} saatte alıyor. Aynı hızla {c} km yolu kaç saatte alır?", c: "({b}*{c})/{a}", v: {a:[100,400], b:[2,6], c:[150,600]}, z:"kolay", alt:"problem" },

    // ==========================================
    // ALT DAL 6: MANTIK
    // ==========================================
    { id: "t14_050", s: "a/b = c/d = {k} ise (a+c)/(b+d) = ?", c: "{k}", v: {k:[2,5]}, z:"orta", alt:"mantik", inputType:"choice", choices:["{k}","{k*2}","1","{k/2}"], cozum:"Pay ve payda toplamı da aynı oranı verir" },
    { id: "t14_051", s: "a/b = {a}/{b} ve b/a = ?", c: "{b}/{a}", v: {a:[2,7], b:[3,8]}, z:"kolay", alt:"mantik", cozum:"Ters çevir: {b}/{a}" },
    { id: "t14_052", s: "2a = 3b ise a/b = ?", c: "3/2", v: {}, z:"orta", alt:"mantik", inputType:"choice", choices:["3/2","2/3","1","6"] },

],

// ==========================================
// KONU 15: SAYI PROBLEMLERİ - TAM ŞABLON SETİ
// 6 alt dal × 2-5 zorluk = ~38 şablon
// ==========================================
15: [

    // ==========================================
    // ALT DAL 1: KAT PROBLEMLERİ
    // ==========================================
    { id: "t15_001", s: "Bir sayının {k} katı {s} ise bu sayı kaçtır?", c: "{s}/{k}", v: {k:[2,7], s:["{k}*3","{k}*25"]}, z:"kolay", alt:"kat", cozum:"x × {k} = {s} → x = {s} ÷ {k} = {s/k}" },
    { id: "t15_002", s: "Bir sayının {k} katının {f} fazlası {s} ise sayı kaçtır?", c: "({s}-{f})/{k}", v: {k:[2,5], f:[3,15], s:["{k}*3+{f}","{k}*20+{f}"]}, z:"kolay", alt:"kat" },
    { id: "t15_003", s: "Bir sayının {k} katının {f} eksiği {s} ise sayı kaçtır?", c: "({s}+{f})/{k}", v: {k:[2,5], f:[3,15], s:["{k}*3-{f}","{k}*20-{f}"]}, z:"orta", alt:"kat", kural:"k*3>f" },
    { id: "t15_004", s: "Bir sayının {k1} katı ile {k2} katının toplamı {s} ise sayı kaçtır?", c: "{s}/({k1}+{k2})", v: {k1:[2,5], k2:[3,6], s:["({k1}+{k2})*2","({k1}+{k2})*20"]}, z:"orta", alt:"kat" },
    { id: "t15_005", s: "Bir sayının {k1} katı, {k2} katından {f} fazla ise sayı kaçtır?", c: "{f}/({k1}-{k2})", v: {k1:[3,8], k2:[1,"{k1}-1"], f:["({k1}-{k2})*2","({k1}-{k2})*15"]}, z:"orta", alt:"kat", kural:"k1>k2" },
    { id: "t15_006", s: "Bir sayının yarısının {k} fazlası, aynı sayının {k2} katına eşit ise sayı kaçtır?", c: "{k}/({k2}-0.5)", v: {k:[3,10], k2:[1,3]}, z:"zor", alt:"kat" },

    // ==========================================
    // ALT DAL 2: ARDIŞIK SAYILAR
    // ==========================================
    { id: "t15_010", s: "Ardışık iki sayının toplamı {s} ise büyük sayı kaçtır?", c: "({s}+1)/2", v: {s:[5,99,"tek"]}, z:"kolay", alt:"ardisik", cozum:"n+(n+1)={s} → 2n+1={s} → n=({s}-1)/2, büyük=({s}+1)/2" },
    { id: "t15_011", s: "Ardışık iki sayının toplamı {s} ise küçük sayı kaçtır?", c: "({s}-1)/2", v: {s:[5,99,"tek"]}, z:"kolay", alt:"ardisik" },
    { id: "t15_012", s: "Ardışık üç sayının toplamı {s} ise ortanca sayı kaçtır?", c: "{s}/3", v: {s:[6,99,"3kati"]}, z:"orta", alt:"ardisik", cozum:"(n-1)+n+(n+1)={s} → 3n={s} → n={s/3}" },
    { id: "t15_013", s: "Ardışık üç sayının toplamı {s} ise en büyük sayı kaçtır?", c: "({s}/3)+1", v: {s:[6,99,"3kati"]}, z:"orta", alt:"ardisik" },
    { id: "t15_014", s: "Ardışık üç çift sayının toplamı {s} ise en küçük sayı kaçtır?", c: "({s}/3)-2", v: {s:[12,198]}, z:"zor", alt:"ardisik", kural:"s%6==0" },
    { id: "t15_015", s: "Ardışık {n} sayının toplamı {s} ise en küçük sayı kaçtır?", c: "({s}-({n}*({n}-1)/2))/{n}", v: {n:[3,5], s:["{n}*3","{n}*30"]}, z:"zor", alt:"ardisik" },

    // ==========================================
    // ALT DAL 3: İKİ SAYI PROBLEMLERİ
    // ==========================================
    { id: "t15_020", s: "İki sayının toplamı {t}, farkı {f} ise büyük sayı kaçtır?", c: "({t}+{f})/2", v: {t:[20,100], f:[2,20,"cift"]}, z:"orta", alt:"iki_sayi", cozum:"x+y={t}, x-y={f} → 2x={t+f} → x=({t+f})/2" },
    { id: "t15_021", s: "İki sayının toplamı {t}, farkı {f} ise küçük sayı kaçtır?", c: "({t}-{f})/2", v: {t:[20,100], f:[2,20,"cift"]}, z:"orta", alt:"iki_sayi" },
    { id: "t15_022", s: "İki sayıdan biri diğerinin {k} katı. Toplamları {t} ise küçük sayı kaçtır?", c: "{t}/({k}+1)", v: {k:[2,5], t:["({k}+1)*2","({k}+1)*30"]}, z:"orta", alt:"iki_sayi" },
    { id: "t15_023", s: "İki sayıdan biri diğerinin {k} katından {f} fazla. Toplamları {t} ise küçük sayı kaçtır?", c: "({t}-{f})/({k}+1)", v: {k:[2,4], f:[1,10], t:["({k}+1)*2+{f}","({k}+1)*20+{f}"]}, z:"zor", alt:"iki_sayi" },
    { id: "t15_024", s: "İki sayının çarpımı {c}, toplamları {t} ise bu sayıların kareleri toplamı kaçtır?", c: "{t}*{t}-2*{c}", v: {t:[5,12], c:[6,35]}, z:"zor", alt:"iki_sayi", cozum:"x²+y² = (x+y)² - 2xy = {t}² - 2×{c}" },

    // ==========================================
    // ALT DAL 4: DENKLEM KURMA
    // ==========================================
    { id: "t15_030", s: "Bir sayının {a} fazlasının {b} katı {c} ise sayı kaçtır?", c: "({c}/{b})-{a}", v: {a:[2,10], b:[2,5], c:["{b}*({a}+3)","{b}*({a}+20)"]}, z:"orta", alt:"denklem" },
    { id: "t15_031", s: "Bir sayının {a} eksiğinin {b} katı {c} ise sayı kaçtır?", c: "({c}/{b})+{a}", v: {a:[2,10], b:[2,5], c:["{b}*3","{b}*15"]}, z:"orta", alt:"denklem" },
    { id: "t15_032", s: "Hangi sayının {a} eksiğinin yarısı {b} eder?", c: "2*{b}+{a}", v: {a:[2,10], b:[3,15]}, z:"orta", alt:"denklem" },
    { id: "t15_033", s: "Bir sayının {k1} katının {a} fazlası, aynı sayının {k2} katının {b} eksiğine eşit ise sayı kaçtır?", c: "({a}+{b})/({k2}-{k1})", v: {k1:[1,3], k2:[3,6], a:[2,10], b:[2,10]}, z:"zor", alt:"denklem", kural:"k2>k1" },

    // ==========================================
    // ALT DAL 5: PROBLEM (HİKAYE)
    // ==========================================
    { id: "t15_040", s: "Bir sınıftaki öğrenciler sıralara {a}'ar oturursa {b} kişi ayakta kalıyor. {c}'er oturursa {d} sıra boş kalıyor. Sınıf mevcudu kaçtır?", c: "sinavMevcut({a},{b},{c},{d})", v: {a:[2,3], b:[1,5], c:[3,5], d:[1,3]}, z:"zor", alt:"problem", kural:"c>a" },
    { id: "t15_041", s: "Bir çiftlikte toplam {t} hayvan var. Tavşan ve tavuklardan toplam {a} ayak var. Kaç tavşan vardır?", c: "({a}-2*{t})/2", v: {t:[10,30], a:["2*{t}+4","2*{t}+20"]}, z:"orta", alt:"problem", kural:"a>2*t" },
    { id: "t15_042", s: "{a} TL ve {b} TL'lik biletlerden toplam {c} adet satılıp {d} TL gelir elde ediliyor. {a} TL'lik biletten kaç adet satılmıştır?", c: "({d}-{b}*{c})/({a}-{b})", v: {a:[8,15], b:[3,"{a}-3"], c:[20,50], d:["{a}*5+{b}*({c}-5)","{a}*{c}"]}, z:"zor", alt:"problem", kural:"a>b" },
    { id: "t15_043", s: "Bir baba {b} yaşında, çocuğu {c} yaşındadır. Kaç yıl sonra babanın yaşı çocuğunun yaşının {k} katı olur?", c: "({b}-{k}*{c})/({k}-1)", v: {b:[30,50], c:[3,12], k:[2,4]}, z:"orta", alt:"problem", kural:"b>k*c" },

    // ==========================================
    // ALT DAL 6: YENİ NESİL & MANTIK
    // ==========================================
    { id: "t15_050", s: "Bir sayının {a} ile bölümünden bölüm {b}, kalan {c} ise bu sayı kaçtır?", c: "{a}*{b}+{c}", v: {a:[3,9], b:[3,10], c:[1,"{a}-1"]}, z:"orta", alt:"yeni_nesil", kural:"c<a" },
    { id: "t15_051", s: "İki basamaklı bir sayının rakamları toplamı {t}'dir. Bu sayı rakamları toplamının {k} katından {f} fazla ise sayı kaçtır?", c: "rakamToplamSayi({t},{k},{f})", v: {t:[5,12], k:[3,6], f:[1,10]}, z:"zor", alt:"yeni_nesil" },
    { id: "t15_052", s: "Bir öğrenci {a} soruluk sınavda {b} doğru, {c} yanlış yapıyor. {d} doğru 1 yanlışı götürüyor. Net kaçtır?", c: "{b}-({c}/{d})", v: {a:[40,80], b:[15,40], c:[3,15], d:[3,4]}, z:"orta", alt:"yeni_nesil", kural:"b+c<=a" },

],

 // ==========================================
// KONU 16: YAŞ PROBLEMLERİ - TAM ŞABLON SETİ
// 5 alt dal × 2-4 zorluk = ~24 şablon
// ==========================================
16: [

    // ==========================================
    // ALT DAL 1: YAŞ TOPLAMI
    // ==========================================
    { id: "t16_001", s: "{a} ve {b} yaşlarındaki iki kardeşin yaşları toplamı kaçtır?", c: "{a}+{b}", v: {a:[5,15], b:[3,12]}, z:"kolay", alt:"yas_toplam" },
    { id: "t16_002", s: "{y} yıl önce yaşları toplamı {t} olan iki kardeşin bugünkü yaşları toplamı kaçtır?", c: "{t}+2*{y}", v: {y:[3,10], t:[10,40]}, z:"kolay", alt:"yas_toplam", cozum:"Her biri {y} yıl büyüdü: {t} + 2×{y}" },
    { id: "t16_003", s: "{y} yıl sonra yaşları toplamı {t} olacak iki kardeşin bugünkü yaşları toplamı kaçtır?", c: "{t}-2*{y}", v: {y:[3,10], t:[20,70]}, z:"orta", alt:"yas_toplam", kural:"t>2*y", cozum:"Bugünkü toplam = {t} - 2×{y}" },
    { id: "t16_004", s: "Anne {a}, baba {b}, çocuk {c} yaşında. {y} yıl sonra yaşları toplamı kaç olur?", c: "{a}+{b}+{c}+3*{y}", v: {a:[30,45], b:[32,48], c:[5,12], y:[2,10]}, z:"orta", alt:"yas_toplam" },
    { id: "t16_005", s: "Üç kardeşin yaşları toplamı {t}'dir. {y} yıl önce yaşları toplamı kaçtı?", c: "{t}-3*{y}", v: {t:[20,60], y:[2,6]}, z:"orta", alt:"yas_toplam", kural:"t>3*y" },

    // ==========================================
    // ALT DAL 2: YAŞ FARKI
    // ==========================================
    { id: "t16_010", s: "Baba {b}, çocuk {c} yaşında. Baba doğduğunda çocuk kaç yıl sonra doğmuştur?", c: "{b}-{c}", v: {b:[30,50], c:[5,15]}, z:"kolay", alt:"yas_fark", kural:"b>c", cozum:"Yaş farkı = {b} - {c}" },
    { id: "t16_011", s: "İki kardeşin yaşları farkı {f}'tir. {y} yıl sonra yaşları farkı kaç olur?", c: "{f}", v: {f:[2,8], y:[2,15]}, z:"kolay", alt:"yas_fark", inputType:"choice", choices:["{f}","{f+y}","{f-y}","{f*y}"], cozum:"Yaş farkı hiçbir zaman değişmez!" },
    { id: "t16_012", s: "Anne {a}, kızı {k} yaşında. Anne, kızının yaşındayken kızı kaç yaşındaydı?", c: "{k}-({a}-{k})", v: {a:[30,45], k:[8,18]}, z:"orta", alt:"yas_fark", kural:"a>k*2", cozum:"Anne {a-k} yıl önce kızının yaşındaydı. Kızı o zaman {k-(a-k)} yaşındaydı." },
    { id: "t16_013", s: "Bir babanın yaşı {c} çocuğunun yaşları toplamına eşittir. {y} yıl sonra baba {b} yaşında olursa çocukların yaşları toplamı kaç olur?", c: "{b}-{y}*({c}-1)", v: {c:[2,4], y:[3,8], b:[35,60]}, z:"zor", alt:"yas_fark" },

    // ==========================================
    // ALT DAL 3: KAT PROBLEMLERİ
    // ==========================================
    { id: "t16_020", s: "Baba {b}, çocuk {c} yaşında. Kaç yıl sonra baba çocuğunun {k} katı olur?", c: "({b}-{k}*{c})/({k}-1)", v: {b:[30,50], c:[3,12], k:[2,4]}, z:"orta", alt:"yas_kat", kural:"b>k*c", cozum:"({b}+x) = {k}×({c}+x) → x = ({b}-{k}×{c})/({k}-1)" },
    { id: "t16_021", s: "Baba {b}, çocuk {c} yaşında. Kaç yıl önce baba çocuğunun {k} katıydı?", c: "({k}*{c}-{b})/({k}-1)", v: {b:[35,55], c:[8,18], k:[2,5]}, z:"orta", alt:"yas_kat", kural:"k*c>b" },
    { id: "t16_022", s: "Anne {a} yaşında, kızı {k} yaşında. Anne kızının {kat} katı yaştayken kızı kaç yaşındaydı?", c: "({a}-{k})/({kat}-1)", v: {a:[35,50], k:[5,12], kat:[2,4]}, z:"zor", alt:"yas_kat", kural:"a>k*kat" },
    { id: "t16_023", s: "Bir annenin yaşı, {c} çocuğunun yaşları toplamının {k} katıdır. {y} yıl sonra {k2} katı olacaksa anne kaç yaşındadır?", c: "{k}*({y}*({c}*{k2}-{k}))/({k}-{k2})", v: {c:[2,3], k:[3,5], y:[2,6], k2:[2,"{k}-1"]}, z:"zor", alt:"yas_kat", kural:"k>k2" },

    // ==========================================
    // ALT DAL 4: PROBLEM (HİKAYE)
    // ==========================================
    { id: "t16_030", s: "Bir baba {b} yaşında, {c} çocuğu var. Çocukların yaşları toplamı {t}. Kaç yıl sonra babanın yaşı çocukların yaşları toplamına eşit olur?", c: "({b}-{t})/({c}-1)", v: {b:[35,55], c:[2,4], t:[5,20]}, z:"zor", alt:"problem", kural:"b>t" },
    { id: "t16_031", s: "Ahmet {a}, Mehmet {m} yaşında. Ahmet, Mehmet'in yaşındayken Mehmet {x} yaşındaydı. Buna göre a+m kaçtır?", c: "2*{a}-{x}", v: {a:[20,35], m:[12,22], x:[3,10]}, z:"zor", alt:"problem", kural:"a>m&&m>x" },
    { id: "t16_032", s: "{n} kişilik bir ailede yaş ortalaması {o}'tir. {y} yıl sonra yaş ortalaması kaç olur?", c: "{o}+{y}", v: {n:[3,6], o:[15,35], y:[2,8]}, z:"orta", alt:"problem", cozum:"Herkes {y} yaş büyür, ortalama da {y} artar" },

    // ==========================================
    // ALT DAL 5: MANTIK
    // ==========================================
    { id: "t16_040", s: "İki kişinin bugünkü yaşları toplamı {t}, {y} yıl önceki yaşları toplamı {e} ise y kaçtır?", c: "({t}-{e})/2", v: {t:[30,60], e:[20,50]}, z:"orta", alt:"mantik", kural:"t>e" },
    { id: "t16_041", s: "Bir kişi {a} yıl önce {x} yaşında, {b} yıl sonra kaç yaşında olur?", c: "{x}+{a}+{b}", v: {a:[3,12], x:[10,30], b:[2,10]}, z:"orta", alt:"mantik", cozum:"Bugün: {x}+{a}, {b} yıl sonra: {x}+{a}+{b}" },
    { id: "t16_042", s: "K ve L'nin yaşları toplamı {t}'dir. K, L'nin yaşındayken L'nin doğmasına {y} yıl vardı. K kaç yaşındadır?", c: "({t}+{y})/2", v: {t:[25,50], y:[3,10]}, z:"zor", alt:"mantik", kural:"t>y" },

],

// ==========================================
// KONU 17: HIZ & HAREKET - TAM ŞABLON SETİ
// 5 alt dal × 2-4 zorluk = ~28 şablon
// ==========================================
17: [

    // ==========================================
    // ALT DAL 1: TEMEL FORMÜL > YOL = HIZ × ZAMAN
    // ==========================================
    { id: "t17_001", s: "{v} km/sa hızla {t} saatte kaç km yol gidilir?", c: "{v}*{t}", v: {v:[40,100], t:[2,6]}, z:"kolay", alt:"temel", cozum:"Yol = Hız × Zaman = {v} × {t} = {v*t} km" },
    { id: "t17_002", s: "{x} km'lik yolu {t} saatte giden aracın hızı kaç km/sa'tir?", c: "{x}/{t}", v: {x:[100,500], t:[2,6]}, z:"kolay", alt:"temel", cozum:"Hız = Yol ÷ Zaman = {x} ÷ {t}" },
    { id: "t17_003", s: "{v} km/sa hızla giden araç {x} km'lik yolu kaç saatte alır?", c: "{x}/{v}", v: {v:[50,100], x:["{v}*2","{v}*8"]}, z:"kolay", alt:"temel", cozum:"Zaman = Yol ÷ Hız = {x} ÷ {v}" },
    { id: "t17_004", s: "{v} m/dk hızla {t} dakikada kaç metre yol gidilir?", c: "{v}*{t}", v: {v:[30,80], t:[5,15]}, z:"kolay", alt:"temel" },
    { id: "t17_005", s: "{v} km/sa hızı m/sn cinsinden kaçtır?", c: "Math.round({v}*1000/3600*100)/100", v: {v:[36,108]}, z:"orta", alt:"temel", cozum:"{v} × 1000 ÷ 3600 = {v*1000/3600} m/sn" },

    // ==========================================
    // ALT DAL 2: KARŞILAŞMA
    // ==========================================
    { id: "t17_010", s: "Aralarında {x} km olan iki araç {v1} ve {v2} hızla karşılıklı hareket ederse kaç saat sonra karşılaşır?", c: "{x}/({v1}+{v2})", v: {x:[100,600], v1:[50,90], v2:[50,90]}, z:"orta", alt:"karsilasma", cozum:"t = {x} ÷ ({v1}+{v2})" },
    { id: "t17_011", s: "Aralarında {x} km olan iki araç {v1} ve {v2} hızla aynı yönde hareket ederse hızlı olan kaç saat sonra yakalar?", c: "{x}/({v1}-{v2})", v: {v1:[70,100], v2:[40,"{v1}-20"], x:[50,300]}, z:"orta", alt:"karsilasma", kural:"v1>v2", cozum:"t = {x} ÷ ({v1}-{v2})" },
    { id: "t17_012", s: "{v1} ve {v2} hızla karşılıklı gelen iki araç {t} saat sonra karşılaşıyor. Başlangıçta aralarındaki mesafe kaç km'dir?", c: "({v1}+{v2})*{t}", v: {v1:[40,80], v2:[40,80], t:[2,5]}, z:"orta", alt:"karsilasma" },
    { id: "t17_013", s: "Bir araç {v1} hızla giderken {t} saat sonra ikinci araç {v2} hızla aynı yerden aynı yöne hareket ediyor. İkinci araç kaç saat sonra yetişir?", c: "({v1}*{t})/({v2}-{v1})", v: {v1:[40,60], v2:[60,90], t:[1,4]}, z:"zor", alt:"karsilasma", kural:"v2>v1" },

    // ==========================================
    // ALT DAL 3: ORTALAMA HIZ
    // ==========================================
    { id: "t17_020", s: "Bir araç yolun ilk yarısını {v1}, ikinci yarısını {v2} hızla gidiyor. Ortalama hızı kaç km/sa'tir?", c: "Math.round(2*{v1}*{v2}/({v1}+{v2}))", v: {v1:[40,80], v2:[60,100]}, z:"zor", alt:"ortalama", cozum:"Ortalama = 2×{v1}×{v2}÷({v1}+{v2})" },
    { id: "t17_021", s: "Bir araç {t1} saat {v1} hızla, {t2} saat {v2} hızla gidiyor. Ortalama hızı kaçtır?", c: "Math.round(({v1}*{t1}+{v2}*{t2})/({t1}+{t2}))", v: {v1:[40,80], t1:[1,4], v2:[60,100], t2:[1,4]}, z:"orta", alt:"ortalama" },
    { id: "t17_022", s: "Gidişi {v1}, dönüşü {v2} hızla yapan aracın ortalama hızı kaçtır?", c: "Math.round(2*{v1}*{v2}/({v1}+{v2}))", v: {v1:[40,80], v2:[60,100]}, z:"orta", alt:"ortalama" },

    // ==========================================
    // ALT DAL 4: PROBLEM (HİKAYE)
    // ==========================================
    { id: "t17_030", s: "{v} km/sa hızla giden bir araç {t} saatte varacağı yere {g} saat geç varıyor. Normalde kaç saatte varmalıydı?", c: "{t}-{g}", v: {v:[50,90], t:[3,8], g:[1,"{t}-2"]}, z:"orta", alt:"problem", kural:"t>g" },
    { id: "t17_031", s: "Bir araç hızını {a} km/sa artırırsa {x} km'lik yolu {b} saat erken bitiriyor. İlk hızı kaç km/sa'tir?", c: "hizBul({x},{a},{b})", v: {x:[200,600], a:[10,30], b:[1,3]}, z:"zor", alt:"problem" },
    { id: "t17_032", s: "Bir tren {u} metrelik tüneli {t} saniyede geçiyor. Trenin boyu {b} metre ise hızı kaç km/sa'tir?", c: "Math.round(({u}+{b})/{t}*3.6)", v: {u:[200,800], t:[10,30], b:[50,200]}, z:"zor", alt:"problem" },
    { id: "t17_033", s: "{v} km/sa hızla giden bir araç, {x} km'lik yolda {d} dakika mola veriyor. Yolculuk toplam kaç saat sürer?", c: "Math.round(({x}/{v}+{d}/60)*100)/100", v: {v:[60,100], x:[200,500], d:[15,45]}, z:"orta", alt:"problem" },

    // ==========================================
    // ALT DAL 5: YENİ NESİL & MANTIK
    // ==========================================
    { id: "t17_040", s: "İki şehir arası {x} km. A'dan B'ye {v1}, B'den A'ya {v2} hızla iki araç aynı anda çıkıyor. Karşılaştıklarında hızlı olan kaç km yol almıştır?", c: "Math.round({x}*{v1}/({v1}+{v2}))", v: {x:[300,800], v1:[60,100], v2:[40,80]}, z:"zor", alt:"yeni_nesil", kural:"v1>v2" },
    { id: "t17_041", s: "Bir araç {x} km'lik yolda her {m} km'de bir {d} dakika mola veriyor. Yolculuk kaç saat sürer? (Hız={v} km/sa)", c: "Math.round(({x}/{v}+Math.floor({x}/{m})*{d}/60)*100)/100", v: {x:[300,600], m:[50,100], d:[10,20], v:[60,90]}, z:"zor", alt:"yeni_nesil" },
    { id: "t17_042", s: "Akıntı hızı {a} km/sa olan nehirde, motorun durgun sudaki hızı {v} km/sa. {x} km'lik yolu gidip dönmek kaç saat sürer?", c: "Math.round(({x}/({v}+{a})+{x}/({v}-{a}))*100)/100", v: {v:[15,30], a:[2,5], x:[20,60]}, z:"zor", alt:"yeni_nesil", kural:"v>a" },

],

  // ==========================================
// KONU 18: İŞÇİ & HAVUZ - TAM ŞABLON SETİ
// 5 alt dal × 2-4 zorluk = ~25 şablon
// ==========================================
18: [

    // ==========================================
    // ALT DAL 1: TEK İŞÇİ
    // ==========================================
    { id: "t18_001", s: "Bir işçi bir işi {a} günde bitiriyor. 1 günde işin kaçta kaçını yapar?", c: "1/{a}", v: {a:[3,15]}, z:"kolay", alt:"tek_isci", inputType:"choice", choices:["1/{a}","{a}","{a}/2","2/{a}"], cozum:"1 günde: 1/{a}" },
    { id: "t18_002", s: "{a} işçi bir işi {b} günde bitirirse, 1 işçi kaç günde bitirir?", c: "{a}*{b}", v: {a:[2,8], b:[4,15]}, z:"kolay", alt:"tek_isci", cozum:"1 işçi: {a}×{b} = {a*b} gün" },
    { id: "t18_003", s: "Bir işçi günde {a} saat çalışarak bir işi {b} günde bitiriyor. Günde {c} saat çalışırsa kaç günde bitirir?", c: "({a}*{b})/{c}", v: {a:[4,10], b:[6,20], c:[2,"{a}*2"]}, z:"orta", alt:"tek_isci", cozum:"Toplam: {a}×{b} = {a*b} saat. {c} saat/gün → {a*b}/{c} gün" },
    { id: "t18_004", s: "Bir işçi bir işin {a}/{b}'ini {c} günde yaparsa tamamını kaç günde yapar?", c: "({b}*{c})/{a}", v: {a:[1,3], b:[3,8], c:[2,8]}, z:"orta", alt:"tek_isci", kural:"a<b", cozum:"{c} günde {a}/{b} → x günde 1 → x = {c}×{b}/{a}" },

    // ==========================================
    // ALT DAL 2: BİRLİKTE İŞ
    // ==========================================
    { id: "t18_010", s: "A işçisi {a}, B işçisi {b} günde bitiriyor. İkisi birlikte kaç günde bitirir?", c: "Math.round(({a}*{b})/({a}+{b})*100)/100", v: {a:[3,12], b:[4,15]}, z:"orta", alt:"birlikte", cozum:"1/{a} + 1/{b} = 1/t → t = ({a}×{b})/({a}+{b})" },
    { id: "t18_011", s: "A {a}, B {b}, C {c} günde bitiriyor. Üçü birlikte kaç günde bitirir?", c: "Math.round(1/(1/{a}+1/{b}+1/{c})*100)/100", v: {a:[4,12], b:[6,15], c:[8,20]}, z:"zor", alt:"birlikte", cozum:"1/t = 1/{a} + 1/{b} + 1/{c}" },
    { id: "t18_012", s: "A ve B birlikte {t} günde, A tek başına {a} günde bitiriyor. B tek başına kaç günde bitirir?", c: "Math.round(({a}*{t})/({a}-{t})*100)/100", v: {a:[8,20], t:[3,"{a}-2"]}, z:"orta", alt:"birlikte", kural:"a>t", cozum:"1/B = 1/{t} - 1/{a} = ({a}-{t})/({a}×{t}) → B = ({a}×{t})/({a}-{t})" },
    { id: "t18_013", s: "A işçisi B'nin {k} katı hızlı. Biri {b} günde bitiriyorsa, ikisi birlikte kaç günde bitirir?", c: "Math.round({b}/({k}+1)*100)/100", v: {b:[6,20], k:[2,4]}, z:"orta", alt:"birlikte" },

    // ==========================================
    // ALT DAL 3: İŞÇİ SAYISI DEĞİŞİMİ
    // ==========================================
    { id: "t18_020", s: "{a} işçi bir işi {b} günde yapıyor. {c} gün çalıştıktan sonra {d} işçi ayrılırsa kalan iş kaç günde biter?", c: "Math.round(({a}*{b}-{a}*{c})/({a}-{d})*100)/100", v: {a:[6,12], b:[10,20], c:[2,"{b}-3"], d:[1,"{a}-2"]}, z:"zor", alt:"isci_degisim", kural:"c<b&&d<a" },
    { id: "t18_021", s: "Bir işi {a} işçi {b} günde yapıyor. İşe başladıktan {c} gün sonra {d} işçi daha katılırsa iş toplam kaç günde biter?", c: "Math.round({c}+({a}*{b}-{a}*{c})/({a}+{d})*100)/100", v: {a:[4,8], b:[10,18], c:[2,5], d:[2,4]}, z:"zor", alt:"isci_degisim", kural:"c<b" },
    { id: "t18_022", s: "Eşit kapasiteli {a} işçi bir işi {b} günde bitiriyor. İşin {c} günde bitmesi için kaç işçi daha gerekir?", c: "Math.ceil(({a}*{b})/{c})-{a}", v: {a:[3,8], b:[8,16], c:[3,"{b}-2"]}, z:"orta", alt:"isci_degisim", kural:"c<b" },

    // ==========================================
    // ALT DAL 4: HAVUZ PROBLEMLERİ
    // ==========================================
    { id: "t18_030", s: "A musluğu havuzu {a} saatte dolduruyor, B musluğu {b} saatte. İkisi birlikte kaç saatte doldurur?", c: "Math.round(({a}*{b})/({a}+{b})*100)/100", v: {a:[3,10], b:[4,12]}, z:"orta", alt:"havuz", cozum:"1/t = 1/{a} + 1/{b}" },
    { id: "t18_031", s: "A musluğu {a}, B musluğu {b} saatte dolduruyor. C musluğu dolu havuzu {c} saatte boşaltıyor. Üçü açık kaç saatte dolar?", c: "Math.round(1/(1/{a}+1/{b}-1/{c})*100)/100", v: {a:[3,8], b:[4,10], c:[6,15]}, z:"zor", alt:"havuz", kural:"1/a+1/b>1/c" },
    { id: "t18_032", s: "Havuzun {a}/{b}'i dolu. A musluğu boş havuzu {c} saatte dolduruyor. Havuz kaç saatte dolar?", c: "Math.round(({c}*({b}-{a}))/{b}*100)/100", v: {a:[1,3], b:[4,8], c:[3,10]}, z:"orta", alt:"havuz", kural:"a<b" },

    // ==========================================
    // ALT DAL 5: MANTIK & YENİ NESİL
    // ==========================================
    { id: "t18_040", s: "A işçisi B'nin {k} katı, B işçisi C'nin 2 katı hızlı. C tek başına {c} günde bitiriyorsa üçü birlikte kaç günde bitirir?", c: "Math.round(1/(1/{c}+1/({c}/2)+1/({c}/({k}*2)))*100)/100", v: {c:[8,24], k:[2,3]}, z:"zor", alt:"mantik" },
    { id: "t18_041", s: "Bir işi tek başına A {a}, B {b} günde yapıyor. Sırayla 1'er gün çalışırlarsa iş kaç günde biter?", c: "siraIleIs({a},{b})", v: {a:[3,8], b:[4,10]}, z:"zor", alt:"mantik" },

],

 // ==========================================
// KONU 19: YÜZDE, KÂR & ZARAR - TAM ŞABLON SETİ
// 6 alt dal × 2-4 zorluk = ~32 şablon
// ==========================================
19: [

    // ==========================================
    // ALT DAL 1: YÜZDE HESAPLAMA > SAYININ YÜZDESİ
    // ==========================================
    { id: "t19_001", s: "{a} sayısının %{p}'i kaçtır?", c: "{a}*{p}/100", v: {a:[50,500], p:[10,75]}, z:"kolay", alt:"yuzde_bul", cozum:"{a} × {p} ÷ 100 = {a*p/100}" },
    { id: "t19_002", s: "{a} sayısının %{p}'i kaçtır?", c: "{a}*{p}/100", v: {a:[100,1000], p:[5,90]}, z:"orta", alt:"yuzde_bul" },
    { id: "t19_003", s: "{a} TL'nin %{p} indirimli fiyatı kaç TL'dir?", c: "{a}-{a}*{p}/100", v: {a:[50,500], p:[10,50]}, z:"kolay", alt:"yuzde_bul", cozum:"İndirim: {a*p/100} TL, Son fiyat: {a-a*p/100} TL" },
    { id: "t19_004", s: "{a} TL'ye %{p} zam yapılırsa yeni fiyat kaç TL olur?", c: "{a}+{a}*{p}/100", v: {a:[50,500], p:[10,50]}, z:"kolay", alt:"yuzde_bul" },

    // ==========================================
    // ALT DAL 2: YÜZDESİ VERİLEN SAYIYI BULMA
    // ==========================================
    { id: "t19_010", s: "%{p}'i {d} olan sayının tamamı kaçtır?", c: "{d}*100/{p}", v: {p:[10,50], d:["{p}*2","{p}*15"]}, z:"orta", alt:"sayi_bul", cozum:"x × {p}/100 = {d} → x = {d} × 100/{p}" },
    { id: "t19_011", s: "%{p}'i {d} olan sayının %{p2}'i kaçtır?", c: "({d}*100/{p})*{p2}/100", v: {p:[10,40], d:["{p}*2","{p}*15"], p2:[15,50]}, z:"zor", alt:"sayi_bul" },
    { id: "t19_012", s: "%{p} fazlası {d} olan sayı kaçtır?", c: "{d}*100/(100+{p})", v: {p:[10,40], d:[110,700]}, z:"orta", alt:"sayi_bul", cozum:"x + x×{p}/100 = {d} → x(1+{p}/100) = {d}" },
    { id: "t19_013", s: "%{p} eksiği {d} olan sayı kaçtır?", c: "{d}*100/(100-{p})", v: {p:[10,40], d:[60,450]}, z:"orta", alt:"sayi_bul", cozum:"x - x×{p}/100 = {d} → x(1-{p}/100) = {d}" },

    // ==========================================
    // ALT DAL 3: KÂR & ZARAR
    // ==========================================
    { id: "t19_020", s: "Maliyeti {m} TL olan ürün %{k} kârla kaç TL'ye satılır?", c: "{m}+{m}*{k}/100", v: {m:[50,500], k:[10,50]}, z:"orta", alt:"kar_zarar", cozum:"Kâr: {m*k/100} TL, Satış: {m+m*k/100} TL" },
    { id: "t19_021", s: "{a} TL'ye alınan ürün {b} TL'ye satılırsa kâr % kaçtır?", c: "Math.round(({b}-{a})/{a}*100)", v: {a:[50,200], b:["{a}+10","{a}+120"]}, z:"orta", alt:"kar_zarar", kural:"b>a", cozum:"Kâr % = ({b}-{a})/{a} × 100" },
    { id: "t19_022", s: "{a} TL'ye alınan ürün {b} TL'ye satılırsa zarar % kaçtır?", c: "Math.round(({a}-{b})/{a}*100)", v: {b:[30,150], a:["{b}+10","{b}+100"]}, z:"orta", alt:"kar_zarar", kural:"a>b" },
    { id: "t19_023", s: " Maliyeti {m} TL, satış fiyatı {s} TL olan üründe kâr/zarar % kaçtır?", c: "{s}>{m}?'%'+Math.round(({s}-{m})/{m}*100)+' kâr':'%'+Math.round(({m}-{s})/{m}*100)+' zarar'", v: {m:[50,300], s:[40,400]}, z:"orta", alt:"kar_zarar" },
    { id: "t19_024", s: "Etiket fiyatı {e} TL olan ürüne %{i} indirim yapılırsa kâr %{k} oluyor. Maliyet kaç TL'dir?", c: "Math.round(({e}*(100-{i})/100)/(1+{k}/100))", v: {e:[100,500], i:[10,30], k:[10,30]}, z:"zor", alt:"kar_zarar" },

    // ==========================================
    // ALT DAL 4: ARDIŞIK ZAM & İNDİRİM
    // ==========================================
    { id: "t19_030", s: "%{z} zam yapılan ürüne %{i} indirim yapılırsa son fiyat ilk fiyata göre nasıl değişir?", c: "Math.round(((100+{z})*(100-{i})/100-100)*100)/100", v: {z:[10,40], i:[10,40]}, z:"orta", alt:"ardisik", inputType:"choice", cozum:"Net değişim = ((100+{z})×(100-{i})/100) - 100" },
    { id: "t19_031", s: "Bir ürünün fiyatına önce %{z} zam, sonra %{i} indirim yapılıyor. Son fiyat % kaç değişir? (Azalış ise - ile)", c: "Math.round(((100+{z})*(100-{i})/100-100)*100)/100", v: {z:[15,35], i:[10,30]}, z:"zor", alt:"ardisik" },
    { id: "t19_032", s: "Bir ürüne art arda %{p} ve %{q} zam yapılırsa toplam zam % kaç olur?", c: "Math.round((100+{p})*(100+{q})/100-100)", v: {p:[10,30], q:[5,25]}, z:"orta", alt:"ardisik", cozum:"(1+{p}/100)(1+{q}/100) - 1" },

    // ==========================================
    // ALT DAL 5: PROBLEM
    // ==========================================
    { id: "t19_040", s: "{a} TL'lik ürün %{k} kârla satılırken {b} TL indirim yapılıyor. Son kâr % kaçtır?", c: "Math.round((({a}*(1+{k}/100)-{b})-{a})/{a}*100)", v: {a:[80,300], k:[20,50], b:[10,40]}, z:"zor", alt:"problem" },
    { id: "t19_041", s: "Bir mağaza %{i} indirim yaptığında satışlar %{a} artıyor. Günlük ciro nasıl değişir?", c: "Math.round(((100-{i})*(100+{a})/100-100)*100)/100+'%'", v: {i:[10,30], a:[20,60]}, z:"zor", alt:"problem" },
    { id: "t19_042", s: "Yaş üzüm kuruyunca ağırlığının %{p}'ini kaybediyor. {a} kg kuru üzüm için kaç kg yaş üzüm gerekir?", c: "Math.round({a}*100/(100-{p}))", v: {p:[15,40], a:[10,50]}, z:"orta", alt:"problem", kural:"p<100" },

    // ==========================================
    // ALT DAL 6: YENİ NESİL
    // ==========================================
    { id: "t19_050", s: "Bir sınıfta öğrencilerin %{p}'i matematikten başarılı. Başarılıların %{q}'sü kız ise sınıftaki kızların en az yüzde kaçı matematikte başarılıdır?", c: "Math.max(0,{p}+{q}-100)", v: {p:[40,80], q:[30,70]}, z:"zor", alt:"yeni_nesil" },
    { id: "t19_051", s: "Tanesi {a} TL olan üründen {b} tane alana {c} tanesi bedava. Gerçek indirim % kaçtır?", c: "Math.round(({c}/({b}+{c}))*100)", v: {a:[5,20], b:[2,5], c:[1,3]}, z:"zor", alt:"yeni_nesil" },

],

// ==========================================
// KONU 20: KARIŞIM PROBLEMLERİ - TAM ŞABLON SETİ
// 5 alt dal × 2-4 zorluk = ~22 şablon
// ==========================================
20: [

    // ==========================================
    // ALT DAL 1: TUZ ORANI BULMA
    // ==========================================
    { id: "t20_001", s: "Tuz oranı %{o} olan {m} kg karışımda kaç kg tuz vardır?", c: "{m}*{o}/100", v: {m:[10,100], o:[10,50]}, z:"kolay", alt:"tuz_oran", cozum:"Tuz = {m} × {o}/100 = {m*o/100} kg" },
    { id: "t20_002", s: "{m} kg karışımda {t} kg tuz varsa tuz oranı % kaçtır?", c: "Math.round({t}/{m}*100)", v: {m:[20,100], t:[2,"{m}*0.3"]}, z:"kolay", alt:"tuz_oran", kural:"t<m", cozum:"Oran = {t}/{m} × 100" },
    { id: "t20_003", s: "%{o} tuz oranlı {m} kg karışıma {s} kg su eklenirse yeni oran % kaç olur?", c: "Math.round({m}*{o}/({m}+{s})*100)", v: {m:[20,80], o:[15,40], s:[5,30]}, z:"orta", alt:"tuz_oran", cozum:"Tuz değişmez: {m*o/100} kg, Toplam: {m+s} kg" },
    { id: "t20_004", s: "%{o} tuz oranlı {m} kg karışıma {t} kg tuz eklenirse yeni oran % kaç olur?", c: "Math.round(({m}*{o}/100+{t})/({m}+{t})*100)", v: {m:[20,60], o:[10,30], t:[2,10]}, z:"orta", alt:"tuz_oran" },

    // ==========================================
    // ALT DAL 2: KARIŞTIRMA
    // ==========================================
    { id: "t20_010", s: "%{o1}'lik {m1} kg ile %{o2}'lik {m2} kg karışırsa yeni oran % kaçtır?", c: "Math.round(({m1}*{o1}+{m2}*{o2})/({m1}+{m2}))", v: {m1:[20,60], o1:[10,40], m2:[20,60], o2:[15,45]}, z:"orta", alt:"karistirma", cozum:"({m1}×{o1} + {m2}×{o2})/({m1}+{m2})" },
    { id: "t20_011", s: "%{o1}'lik karışımla %{o2}'lik karışım karıştırılıp %{oh} elde ediliyor. Hangi oranda karıştırılmıştır? (İlkinin ikinciye oranı)", c: "Math.round(({oh}-{o2})/({o1}-{oh})*100)/100", v: {o1:[30,60], o2:[10,25], oh:["{o2}+5","{o1}-5"]}, z:"zor", alt:"karistirma", kural:"o1>oh&&oh>o2" },
    { id: "t20_012", s: "%{o1} ve %{o2}'lik iki karışım karıştırılıyor. Eşit miktarda karıştırılırsa yeni oran % kaçtır?", c: "Math.round(({o1}+{o2})/2)", v: {o1:[10,40], o2:[15,45]}, z:"orta", alt:"karistirma" },

    // ==========================================
    // ALT DAL 3: BUHARLAŞTIRMA
    // ==========================================
    { id: "t20_020", s: "%{o} tuz oranlı {m} kg karışımın {b} kg'ı buharlaştırılırsa yeni oran % kaçtır?", c: "Math.round({m}*{o}/({m}-{b})*100)/100", v: {m:[30,80], o:[10,30], b:[5,"{m}*0.3"]}, z:"zor", alt:"buharlastirma", kural:"b<m", cozum:"Tuz sabit: {m*o/100} kg, Kalan: {m-b} kg, Oran: ({m*o/100})/({m-b})×100" },
    { id: "t20_021", s: "%{o} tuz oranlı {m} kg karışımın yarısı buharlaştırılırsa yeni oran % kaçtır?", c: "Math.round({o}*2)", v: {m:[20,60], o:[5,20]}, z:"orta", alt:"buharlastirma", cozum:"Yarısı buharlaşırsa oran 2 katına çıkar: %{o*2}" },
    { id: "t20_022", s: "%{o} tuz oranlı karışım buharlaştırılıp oran %{o2} yapılmak isteniyor. Karışımın kaçta kaçı buharlaştırılmalı?", c: "Math.round((1-{o}/{o2})*100)", v: {o:[10,25], o2:["{o}+10","{o}+30"]}, z:"zor", alt:"buharlastirma", kural:"o2>o" },

    // ==========================================
    // ALT DAL 4: PROBLEM (HİKAYE)
    // ==========================================
    { id: "t20_030", s: "%{o} alkol oranlı {m} litre kolonyaya {s} litre saf alkol eklenirse yeni oran % kaçtır?", c: "Math.round(({m}*{o}/100+{s})/({m}+{s})*100)", v: {m:[10,50], o:[30,60], s:[2,8]}, z:"orta", alt:"problem" },
    { id: "t20_031", s: "Şeker oranı %{o} olan {m} gram şekerli suya {s} gram şeker eklenip {b} gram su buharlaştırılıyor. Son oran % kaçtır?", c: "Math.round(({m}*{o}/100+{s})/({m}+{s}-{b})*100)", v: {m:[50,150], o:[10,25], s:[5,15], b:[10,30]}, z:"zor", alt:"problem", kural:"m+s>b" },
    { id: "t20_032", s: "%{o1} ve %{o2}'lik iki karışımdan %{oh}'lik {m} kg karışım elde etmek için ilkinden kaç kg alınmalı?", c: "Math.round({m}*({oh}-{o2})/({o1}-{o2}))", v: {o1:[40,70], o2:[10,30], oh:["{o2}+5","{o1}-5"], m:[50,150]}, z:"zor", alt:"problem", kural:"o1>oh&&oh>o2" },

    // ==========================================
    // ALT DAL 5: MANTIK & YENİ NESİL
    // ==========================================
    { id: "t20_040", s: "Bir karışımdaki A maddesi oranı %{p}. Karışıma bir miktar daha A eklenince oran %{p2} oluyor. A miktarı % kaç artmıştır?", c: "Math.round(({p2}-{p})/{p}*100)", v: {p:[15,35], p2:["{p}+5","{p}+25"]}, z:"zor", alt:"mantik", kural:"p2>p" },
    { id: "t20_041", s: "%{o} tuz oranlı karışımın {a}/{b}'i dökülüp yerine saf su ekleniyor. Yeni oran % kaçtır?", c: "Math.round({o}*({b}-{a})/{b})", v: {o:[20,50], a:[1,3], b:[3,6]}, z:"zor", alt:"mantik", kural:"a<b" },

],

// ==========================================
// KONU 21: FAİZ PROBLEMLERİ - TAM ŞABLON SETİ
// 4 alt dal × 2-4 zorluk = ~18 şablon
// ==========================================
21: [

    // ==========================================
    // ALT DAL 1: BASİT FAİZ > FAİZ MİKTARI
    // ==========================================
    { id: "t21_001", s: "{a} TL %{f} basit faizle {y} yılda kaç TL faiz getirir?", c: "{a}*{f}*{y}/100", v: {a:[1000,5000], f:[5,20], y:[1,4]}, z:"kolay", alt:"basit_faiz", cozum:"F = {a} × {f}/100 × {y} = {a*f*y/100} TL" },
    { id: "t21_002", s: "{a} TL %{f} basit faizle {y} yıl sonra kaç TL olur?", c: "{a}+{a}*{f}*{y}/100", v: {a:[1000,5000], f:[10,30], y:[2,5]}, z:"orta", alt:"basit_faiz", cozum:"Toplam = {a} + {a*f*y/100}" },
    { id: "t21_003", s: "{a} TL %{f} faizle {y} ayda kaç TL faiz getirir?", c: "Math.round({a}*{f}*{y}/1200)", v: {a:[1000,5000], f:[12,36], y:[3,10]}, z:"orta", alt:"basit_faiz", cozum:"Aylık: F = {a} × {f}/100 × {y}/12" },
    { id: "t21_004", s: "{a} TL %{f} faizle kaç yılda {g} TL faiz getirir?", c: "Math.round({g}*100/({a}*{f})*100)/100", v: {a:[1000,5000], f:[10,25], g:[200,2000]}, z:"orta", alt:"basit_faiz", cozum:"y = {g} × 100 / ({a} × {f})" },

    // ==========================================
    // ALT DAL 2: BASİT FAİZ > ANAPARA & ORAN
    // ==========================================
    { id: "t21_010", s: "%{f} faizle {y} yılda {g} TL faiz getiren anapara kaç TL'dir?", c: "({g}*100)/({f}*{y})", v: {f:[10,25], y:[2,5], g:[200,2000]}, z:"orta", alt:"anapara", cozum:"A = {g} × 100 / ({f} × {y})" },
    { id: "t21_011", s: "{a} TL {y} yılda {g} TL faiz getiriyorsa faiz oranı % kaçtır?", c: "Math.round({g}*100/({a}*{y}))", v: {a:[1000,5000], y:[2,5], g:[200,2000]}, z:"orta", alt:"anapara", cozum:"f = {g} × 100 / ({a} × {y})" },
    { id: "t21_012", s: "{a} TL %{f1} faiz yerine %{f2} faize yatırılırsa {y} yılda kaç TL fazla faiz alınır?", c: "{a}*({f2}-{f1})*{y}/100", v: {a:[2000,8000], f1:[8,15], f2:["{f1}+3","{f1}+10"], y:[2,4]}, z:"orta", alt:"anapara", kural:"f2>f1" },

    // ==========================================
    // ALT DAL 3: BİLEŞİK FAİZ
    // ==========================================
    { id: "t21_020", s: "{a} TL %{f} bileşik faizle 2 yıl sonra kaç TL olur?", c: "Math.round({a}*Math.pow(1+{f}/100,2))", v: {a:[1000,5000], f:[5,20]}, z:"zor", alt:"bilesik", cozum:"A × (1+{f}/100)²" },
    { id: "t21_021", s: "{a} TL %{f} bileşik faizle 2 yılda kaç TL faiz getirir?", c: "Math.round({a}*Math.pow(1+{f}/100,2)-{a})", v: {a:[1000,5000], f:[5,20]}, z:"zor", alt:"bilesik" },
    { id: "t21_022", s: "Bileşik faizle 2 yılda %{f} oranla {a} TL olan para kaç TL idi?", c: "Math.round({a}/Math.pow(1+{f}/100,2))", v: {a:[1200,8000], f:[5,15]}, z:"zor", alt:"bilesik" },

    // ==========================================
    // ALT DAL 4: PROBLEM & MANTIK
    // ==========================================
    { id: "t21_030", s: "{a} TL'nin bir kısmı %{f1}, kalanı %{f2} faize yatırılıyor. {y} yılda toplam {g} TL faiz alınıyorsa %{f1}'e kaç TL yatırılmıştır?", c: "Math.round(({a}*{f2}*{y}/100-{g})/({f2}-{f1})*100*100)/100", v: {a:[3000,8000], f1:[8,15], f2:["{f1}+5","{f1}+25"], y:[1,3], g:["{a}*{f1}*{y}/100","{a}*{f2}*{y}/100"]}, z:"zor", alt:"problem", kural:"f2>f1" },
    { id: "t21_031", s: "Bir banka yıllık %{f} faiz veriyor. {y} yıl sonunda {a} TL çekmek için şimdi kaç TL yatırılmalı? (basit faiz)", c: "Math.round({a}/(1+{f}*{y}/100))", v: {a:[2000,10000], f:[10,30], y:[2,5]}, z:"orta", alt:"problem" },
    { id: "t21_032", s: "%{f1} faizle bankaya yatırılan para %{f2} enflasyon karşısında reel getiri % kaçtır? (yaklaşık)", c: "Math.round(({f1}-{f2})*100)/100", v: {f1:[15,40], f2:[10,30]}, z:"zor", alt:"problem", kural:"f1>f2" },

],

// ==========================================
// KONU 22: KÜMELER - TAM ŞABLON SETİ
// 6 alt dal × 2-4 zorluk = ~28 şablon
// ==========================================
22: [

    // ==========================================
    // ALT DAL 1: KÜME KAVRAMI & ELEMAN
    // ==========================================
    { id: "t22_001", s: "A = {a, b, c} kümesinin eleman sayısı kaçtır?", c: "3", v: {}, z:"kolay", alt:"kume_kavram", inputType:"choice", choices:["3","2","4","1"] },
    { id: "t22_002", s: "{a} elemanlı bir kümenin kaç tane alt kümesi vardır?", c: "Math.pow(2,{a})", v: {a:[1,6]}, z:"kolay", alt:"kume_kavram", cozum:"2^{a} = {2^a}" },
    { id: "t22_003", s: "{a} elemanlı bir kümenin kaç tane öz alt kümesi vardır?", c: "Math.pow(2,{a})-1", v: {a:[1,6]}, z:"orta", alt:"kume_kavram", cozum:"2^{a} - 1 = {2^a-1} (kendisi hariç)" },
    { id: "t22_004", s: "Alt küme sayısı {s} olan küme kaç elemanlıdır?", c: "Math.log2({s})", v: {s:[4,8,16,32,64]}, z:"orta", alt:"kume_kavram" },
    { id: "t22_005", s: "{a} elemanlı bir kümenin {b} elemanlı alt küme sayısı kaçtır?", c: "kombinasyon({a},{b})", v: {a:[4,8], b:[1,"{a}-1"]}, z:"orta", alt:"kume_kavram", kural:"b<=a", cozum:"C({a},{b})" },

    // ==========================================
    // ALT DAL 2: KÜME İŞLEMLERİ > BİRLEŞİM
    // ==========================================
    { id: "t22_010", s: "A = {1,2,3,{a}}, B = {3,{a},{b},{c}} ise A∪B kaç elemanlıdır?", c: "kumeBilesim([1,2,3,{a}],[3,{a},{b},{c}])", v: {a:[4,6], b:[5,7], c:[8,9]}, z:"orta", alt:"birlesim", kural:"a!=b&&b!=c&&a!=c" },
    { id: "t22_011", s: "s(A)={a}, s(B)={b}, s(A∩B)={k} ise s(A∪B) kaçtır?", c: "{a}+{b}-{k}", v: {a:[5,15], b:[5,15], k:[1,"Math.min({a},{b})-1"]}, z:"orta", alt:"birlesim", kural:"k<a&&k<b", cozum:"s(A∪B) = {a}+{b}-{k} = {a+b-k}" },
    { id: "t22_012", s: "A ve B kümeleri için s(A∪B)={t}, s(A)={a}, s(B)={b} ise s(A∩B) kaçtır?", c: "{a}+{b}-{t}", v: {a:[5,12], b:[4,10], t:["Math.max({a},{b})","{a}+{b}-1"]}, z:"orta", alt:"birlesim", kural:"t>=Math.max(a,b)&&t<=a+b" },

    // ==========================================
    // ALT DAL 3: KÜME İŞLEMLERİ > KESİŞİM & FARK
    // ==========================================
    { id: "t22_020", s: "A = {1,2,3,4,{a}} ve B = {3,{a},5,6} ise A∩B kaç elemanlıdır?", c: "2", v: {a:[5,9]}, z:"orta", alt:"kesisim", cozum:"Ortak elemanlar: 3 ve {a} → 2 eleman" },
    { id: "t22_021", s: "s(A)={a}, s(B)={b} ve A∩B boş küme değilse s(A-B) en az kaçtır?", c: "1", v: {a:[3,8], b:[3,8]}, z:"orta", alt:"kesisim", inputType:"choice", choices:["1","0","{a}","{b}"] },
    { id: "t22_022", s: "A⊂B ve s(A)={a}, s(B)={b} ise s(B-A) kaçtır?", c: "{b}-{a}", v: {a:[2,5], b:["{a}+1","{a}+8"]}, z:"orta", alt:"kesisim", kural:"b>a" },

    // ==========================================
    // ALT DAL 4: KÜME PROBLEMLERİ
    // ==========================================
    { id: "t22_030", s: "{n} kişilik sınıfta {m} kişi matematik, {t} kişi Türkçe kursuna gidiyor. {k} kişi ikisine de gidiyor. Kaç kişi hiçbirine gitmiyor?", c: "{n}-({m}+{t}-{k})", v: {n:[30,50], m:[12,25], t:[12,25], k:[3,10]}, z:"orta", alt:"problem", kural:"k<Math.min(m,t)&&m+t-k<=n" },
    { id: "t22_031", s: "{n} kişilik grupta {a} kişi A gazetesini, {b} kişi B gazetesini, {c} kişi her ikisini, {d} kişi hiçbirini okumuyor. Yalnız A'yı kaç kişi okur?", c: "{a}-{c}", v: {n:[40,80], a:[15,30], b:[15,30], c:[3,10], d:[3,10]}, z:"orta", alt:"problem", kural:"a+b-c+d<=n" },
    { id: "t22_032", s: "Bir grupta {a} kişi İngilizce, {b} kişi Almanca, {c} kişi Fransızca biliyor. Her üç dili bilen {k} kişi var. En az bir dil bilen kaç kişidir? (sadece bu üç dil var)", c: "kumeUcBilesim({a},{b},{c},{k})", v: {a:[10,25], b:[10,25], c:[8,20], k:[1,5]}, z:"zor", alt:"problem", kural:"k<Math.min(a,b,c)" },
    { id: "t22_033", s: "{n} kişilik sınıfta {a} kişi basketbol, {b} kişi voleybol oynuyor. {c} kişi her ikisini de oynuyorsa sadece bir oyunu oynayan kaç kişidir?", c: "{a}+{b}-2*{c}", v: {n:[25,45], a:[10,25], b:[10,25], c:[2,8]}, z:"orta", alt:"problem", kural:"c<Math.min(a,b)" },

    // ==========================================
    // ALT DAL 5: MANTIK
    // ==========================================
    { id: "t22_040", s: "A ve B boş küme değil, s(A)=s(B)={a} ise s(A∪B) en çok kaçtır?", c: "2*{a}", v: {a:[3,8]}, z:"orta", alt:"mantik", cozum:"A∩B boş ise: {a}+{a} = {2*a}" },
    { id: "t22_041", s: "A ve B boş küme değil, s(A)=s(B)={a} ise s(A∪B) en az kaçtır?", c: "{a}", v: {a:[3,8]}, z:"orta", alt:"mantik", cozum:"A=B ise: s(A∪B) = s(A) = {a}" },
    { id: "t22_042", s: "A kümesinin alt kümelerinin {p} tanesinde {x} elemanı bulunur. s(A) kaçtır? (İpucu: yarısı)", c: "Math.log2({p}*2)", v: {p:[4,8,16,32]}, z:"zor", alt:"mantik" },

    // ==========================================
    // ALT DAL 6: YENİ NESİL
    // ==========================================
    { id: "t22_050", s: "s(A)={a}, s(B)={b}, s(C)={c} ve A⊂B⊂C ise s(A∪B∪C) kaçtır?", c: "{c}", v: {a:[2,4], b:["{a}+1","{a}+5"], c:["{b}+1","{b}+5"]}, z:"orta", alt:"yeni_nesil", kural:"a<b&&b<c" },
    { id: "t22_051", s: "A={x | 1≤x≤{a}, x tam sayı} kümesinin elemanlarından kaç tanesi {b} ile tam bölünür?", c: "Math.floor({a}/{b})", v: {a:[10,50], b:[2,6]}, z:"orta", alt:"yeni_nesil", kural:"b<=a" },

],

// ==========================================
// KONU 23: MANTIK - TAM ŞABLON SETİ
// 5 alt dal × 2-4 zorluk = ~24 şablon
// ==========================================
23: [

    // ==========================================
    // ALT DAL 1: ÖNERMELER
    // ==========================================
    { id: "t23_001", s: "'2+2=4' önermesinin doğruluk değeri nedir?", c: "1", v: {}, z:"kolay", alt:"onerme", inputType:"choice", choices:["1 (Doğru)","0 (Yanlış)"] },
    { id: "t23_002", s: "'{a} > {b}' önermesinin doğruluk değeri nedir?", c: "{a}>{b}?'1':'0'", v: {a:[3,15], b:[3,15]}, z:"kolay", alt:"onerme", inputType:"choice", choices:["1 (Doğru)","0 (Yanlış)"], kural:"a!=b" },
    { id: "t23_003", s: "p: 'Ankara başkenttir' → p≡1 ise ~p nedir?", c: "0", v: {}, z:"kolay", alt:"onerme", inputType:"choice", choices:["0","1","p","Belirsiz"], cozum:"Doğrunun değili yanlıştır" },
    { id: "t23_004", s: "Aşağıdakilerden hangisi önerme değildir?", c: "Günaydın", v: {}, z:"kolay", alt:"onerme", inputType:"choice", choices:["Günaydın","2 asaldır","3<5","Türkiye Avrupa'dadır"], cozum:"Doğru veya yanlış değeri olmayan ifade önerme değildir" },
    { id: "t23_005", s: "p≡{pv}, q≡{qv} ise p ile q'nun doğruluk değerleri için ne söylenir?", c: "{pv}=={qv}?'Denktir':'Denk değildir'", v: {pv:[0,1], qv:[0,1]}, z:"orta", alt:"onerme", inputType:"choice", choices:["Denktir","Denk değildir","Tersi","Çelişki"] },

    // ==========================================
    // ALT DAL 2: VE (∧) BAĞLACI
    // ==========================================
    { id: "t23_010", s: "p≡{pv}, q≡{qv} ise p∧q = ?", c: "({pv}==1&&{qv}==1)?'1':'0'", v: {pv:[0,1], qv:[0,1]}, z:"kolay", alt:"ve", inputType:"choice", choices:["1","0"], cozum:"VE: İkisi de 1 ise 1, değilse 0" },
    { id: "t23_011", s: "p∧q≡1 ise p ve q için ne söylenir?", c: "İkisi de doğrudur", v: {}, z:"kolay", alt:"ve", inputType:"choice", choices:["İkisi de doğrudur","En az biri doğrudur","İkisi de yanlıştır","Biri doğru biri yanlıştır"] },
    { id: "t23_012", s: "p∧q≡0 ise aşağıdakilerden hangisi kesin doğrudur?", c: "En az biri yanlıştır", v: {}, z:"orta", alt:"ve", inputType:"choice", choices:["En az biri yanlıştır","İkisi de yanlıştır","p yanlıştır","q yanlıştır"] },
    { id: "t23_013", s: "(p∧p) ≡ ?", c: "p", v: {}, z:"orta", alt:"ve", inputType:"choice", choices:["p","1","0","~p"], cozum:"p∧p = p (tek kuvvet özelliği)" },

    // ==========================================
    // ALT DAL 3: VEYA (∨) BAĞLACI
    // ==========================================
    { id: "t23_020", s: "p≡{pv}, q≡{qv} ise p∨q = ?", c: "({pv}==1||{qv}==1)?'1':'0'", v: {pv:[0,1], qv:[0,1]}, z:"kolay", alt:"veya", inputType:"choice", choices:["1","0"], cozum:"VEYA: En az biri 1 ise 1" },
    { id: "t23_021", s: "p∨q≡0 ise p ve q için ne söylenir?", c: "İkisi de yanlıştır", v: {}, z:"kolay", alt:"veya", inputType:"choice", choices:["İkisi de yanlıştır","En az biri doğrudur","İkisi de doğrudur","Biri doğru biri yanlıştır"] },
    { id: "t23_022", s: "(p∨p) ≡ ?", c: "p", v: {}, z:"orta", alt:"veya", inputType:"choice", choices:["p","1","0","~p"], cozum:"p∨p = p" },
    { id: "t23_023", s: "p∨q≡1 ve p≡0 ise q kesinlikle nedir?", c: "1", v: {}, z:"orta", alt:"veya", inputType:"choice", choices:["1","0","Belirsiz","p"] },

    // ==========================================
    // ALT DAL 4: İSE (→) BAĞLACI
    // ==========================================
    { id: "t23_030", s: "p≡{pv}, q≡{qv} ise p→q = ?", c: "({pv}==1&&{qv}==0)?'0':'1'", v: {pv:[0,1], qv:[0,1]}, z:"orta", alt:"ise", inputType:"choice", choices:["1","0"], cozum:"İSE: p doğru q yanlış ise 0, diğer durumlarda 1" },
    { id: "t23_031", s: "p→q≡0 ise aşağıdakilerden hangisi doğrudur?", c: "p≡1 ve q≡0", v: {}, z:"orta", alt:"ise", inputType:"choice", choices:["p≡1 ve q≡0","p≡0 ve q≡1","p≡0 ve q≡0","p≡1 ve q≡1"] },
    { id: "t23_032", s: "(p→q) ∧ (q→p) ≡ ?", c: "p↔q", v: {}, z:"zor", alt:"ise", inputType:"choice", choices:["p↔q","p∧q","p∨q","1"], cozum:"Çift yönlü ok = ancak ve ancak" },

    // ==========================================
    // ALT DAL 5: MANTIK PROBLEMLERİ
    // ==========================================
    { id: "t23_040", s: "p: 'x asaldır', q: 'x çifttir'. x=2 için p∧q nedir?", c: "1", v: {}, z:"orta", alt:"problem", inputType:"choice", choices:["1","0","Belirsiz","Tanımsız"], cozum:"2 asaldır (p=1) ve çifttir (q=1) → p∧q=1" },
    { id: "t23_041", s: "~(p∧q) ≡ ?", c: "~p∨~q", v: {}, z:"zor", alt:"problem", inputType:"choice", choices:["~p∨~q","~p∧~q","p∨q","~p→~q"], cozum:"De Morgan: ~(p∧q) ≡ ~p ∨ ~q" },
    { id: "t23_042", s: "~(p∨q) ≡ ?", c: "~p∧~q", v: {}, z:"zor", alt:"problem", inputType:"choice", choices:["~p∧~q","~p∨~q","p∧q","~p→~q"], cozum:"De Morgan: ~(p∨q) ≡ ~p ∧ ~q" },
    { id: "t23_043", s: "Aşağıdakilerden hangisi totolojidir?", c: "p∨~p", v: {}, z:"zor", alt:"problem", inputType:"choice", choices:["p∨~p","p∧~p","p→p","p↔~p"], cozum:"p veya p'nin değili her zaman 1'dir" },
    { id: "t23_044", s: "Aşağıdakilerden hangisi çelişkidir?", c: "p∧~p", v: {}, z:"zor", alt:"problem", inputType:"choice", choices:["p∧~p","p∨~p","p→p","p↔p"], cozum:"p ve p'nin değili her zaman 0'dır" },

],

// ==========================================
// KONU 24: VERİ, GRAFİK & İSTATİSTİK - TAM ŞABLON SETİ
// 6 alt dal × 2-4 zorluk = ~28 şablon
// ==========================================
24: [

    // ==========================================
    // ALT DAL 1: ARİTMETİK ORTALAMA
    // ==========================================
    { id: "t24_001", s: "{a}, {b}, {c} sayılarının aritmetik ortalaması kaçtır?", c: "({a}+{b}+{c})/3", v: {a:[5,20], b:[5,20], c:[5,20]}, z:"kolay", alt:"ortalama", cozum:"({a}+{b}+{c}) ÷ 3 = {a+b+c)/3}" },
    { id: "t24_002", s: "{n} sayının aritmetik ortalaması {o} ise bu sayıların toplamı kaçtır?", c: "{n}*{o}", v: {n:[3,8], o:[10,40]}, z:"kolay", alt:"ortalama", cozum:"Toplam = {n} × {o} = {n*o}" },
    { id: "t24_003", s: "Yaş ortalaması {o} olan {n} kişilik gruba {y} yaşında biri katılırsa yeni ortalama kaç olur?", c: "Math.round(({n}*{o}+{y})/({n}+1)*100)/100", v: {n:[3,8], o:[15,35], y:[10,50]}, z:"orta", alt:"ortalama" },
    { id: "t24_004", s: "Yaş ortalaması {o} olan {n} kişilik gruptan {y} yaşında biri ayrılırsa yeni ortalama kaç olur?", c: "Math.round(({n}*{o}-{y})/({n}-1)*100)/100", v: {n:[4,10], o:[20,40], y:[10,50]}, z:"orta", alt:"ortalama", kural:"n*o>y" },
    { id: "t24_005", s: "Kızların ortalaması {k}, erkeklerin ortalaması {e}. Kız sayısı {ks}, erkek sayısı {es} ise genel ortalama kaçtır?", c: "Math.round(({ks}*{k}+{es}*{e})/({ks}+{es})*100)/100", v: {k:[15,30], e:[12,28], ks:[8,20], es:[8,20]}, z:"orta", alt:"ortalama" },

    // ==========================================
    // ALT DAL 2: MEDYAN (ORTANCA)
    // ==========================================
    { id: "t24_010", s: "{a}, {b}, {c}, {d}, {e} sayılarının medyanı kaçtır?", c: "sirala({a},{b},{c},{d},{e})[2]", v: {a:[1,20], b:[1,20], c:[1,20], d:[1,20], e:[1,20]}, z:"orta", alt:"medyan", cozum:"Sırala, ortadaki sayıyı al" },
    { id: "t24_011", s: "{a}, {b}, {c}, {d} sayılarının medyanı kaçtır?", c: "(sirala({a},{b},{c},{d})[1]+sirala({a},{b},{c},{d})[2])/2", v: {a:[1,20], b:[1,20], c:[1,20], d:[1,20]}, z:"orta", alt:"medyan", cozum:"4 sayıda: ortadaki iki sayının ortalaması" },
    { id: "t24_012", s: "Bir veri grubunda en büyük sayı {m} artırılırsa medyan nasıl değişir?", c: "Değişmez", v: {m:[2,10]}, z:"orta", alt:"medyan", inputType:"choice", choices:["Değişmez","Artar","Azalır","Bilinemez"], cozum:"En büyük sayının değişmesi medyanı etkilemez" },
    { id: "t24_013", s: "Yaşları {y1},{y2},{y3},{y4},{y5} olan grubun yaş medyanı kaçtır?", c: "sirala({y1},{y2},{y3},{y4},{y5})[2]", v: {y1:[10,30], y2:[10,30], y3:[10,30], y4:[10,30], y5:[10,30]}, z:"kolay", alt:"medyan" },

    // ==========================================
    // ALT DAL 3: MOD (TEPE DEĞER)
    // ==========================================
    { id: "t24_020", s: "{a},{a},{b},{c},{d} veri grubunun modu kaçtır?", c: "{a}", v: {a:[3,10], b:[1,15], c:[1,15], d:[1,15]}, z:"kolay", alt:"mod", kural:"a!=b&&a!=c&&a!=d", cozum:"En çok tekrar eden: {a}" },
    { id: "t24_021", s: "{a},{a},{b},{b},{c} veri grubunun modu kaçtır?", c: "{a} ve {b}", v: {a:[3,10], b:[5,12], c:[1,15]}, z:"orta", alt:"mod", kural:"a!=b&&a!=c&&b!=c", inputType:"choice", choices:["{a} ve {b}","{a}","{b}","{c}"] },
    { id: "t24_022", s: "Modu {m} olan {n} sayıdan oluşan grupta {m} en az kaç kez tekrar etmiştir?", c: "2", v: {m:[3,9], n:[5,10]}, z:"orta", alt:"mod", inputType:"choice", choices:["2","1","3","n/2"], cozum:"Mod olması için en az 2 kez tekrar etmeli" },

    // ==========================================
    // ALT DAL 4: AÇIKLIK (RANJ)
    // ==========================================
    { id: "t24_030", s: "{a}, {b}, {c}, {d}, {e} veri grubunun açıklığı kaçtır?", c: "Math.max({a},{b},{c},{d},{e})-Math.min({a},{b},{c},{d},{e})", v: {a:[5,50], b:[5,50], c:[5,50], d:[5,50], e:[5,50]}, z:"kolay", alt:"aciklik", cozum:"Açıklık = En büyük - En küçük" },
    { id: "t24_031", s: "Açıklığı {a} olan bir veri grubunda en küçük sayı {e} ise en büyük sayı en az kaçtır?", c: "{a}+{e}", v: {a:[5,20], e:[3,15]}, z:"orta", alt:"aciklik" },
    { id: "t24_032", s: "En büyük değeri {b}, en küçük değeri {k} olan veri grubunda veri sayısı {n} ise açıklık kaçtır?", c: "{b}-{k}", v: {b:[15,50], k:[2,10]}, z:"kolay", alt:"aciklik", kural:"b>k" },

    // ==========================================
    // ALT DAL 5: GRAFİK YORUMLAMA
    // ==========================================
    { id: "t24_040", s: "Bir sınıftaki öğrencilerin {a}%'i kız, {b}%'i erkek. Daire grafiğinde erkeklerin açısı kaç derecedir?", c: "Math.round({b}*3.6)", v: {a:[30,70], b:"100-{a}"}, z:"orta", alt:"grafik", cozum:"%{b} × 360° ÷ 100 = {b*3.6}°" },
    { id: "t24_041", s: "Sütun grafiğinde A: {a}, B: {b}, C: {c} birim. Toplam {t} ise A'nın oranı % kaçtır?", c: "Math.round({a}/{t}*100)", v: {a:[10,40], b:[15,35], c:[10,30], t:"{a}+{b}+{c}"}, z:"orta", alt:"grafik" },
    { id: "t24_042", s: "Bir grupta en yüksek not {b}, en düşük not {k} ise notların açıklığı kaçtır?", c: "{b}-{k}", v: {b:[70,100], k:[20,55]}, z:"kolay", alt:"grafik", kural:"b>k" },

    // ==========================================
    // ALT DAL 6: YENİ NESİL & PROBLEM
    // ==========================================
    { id: "t24_050", s: "Bir veri grubunun ortalaması {o}, açıklığı {a}. En küçük değer {k} ise en büyük değer kaçtır?", c: "{k}+{a}", v: {o:[20,50], a:[10,30], k:[5,20]}, z:"orta", alt:"yeni_nesil" },
    { id: "t24_051", s: "{n} sayının ortalaması {o}'dir. Sayılardan {a} çıkarılıp {b} eklenirse yeni ortalama kaç olur?", c: "Math.round(({n}*{o}-{a}+{b})/{n}*100)/100", v: {n:[4,8], o:[10,30], a:[5,15], b:[8,20]}, z:"zor", alt:"yeni_nesil" },
    { id: "t24_052", s: "Bir öğrencinin {n} sınavının ortalaması {o}'dir. Son sınavdan kaç alırsa ortalama {h} olur?", c: "Math.round(({n}+1)*{h}-{n}*{o})", v: {n:[2,5], o:[50,70], h:["{o}+3","{o}+15"]}, z:"zor", alt:"yeni_nesil", kural:"h>o" },

],

// ==========================================
// KONU 25: 2. DERECEDEN DENKLEMLER (DGS) - TAM ŞABLON SETİ
// 5 alt dal × 2-4 zorluk = ~22 şablon
// ==========================================
25: [

    // ==========================================
    // ALT DAL 1: KÖK BULMA
    // ==========================================
    { id: "t25_001", s: "x² - {a} = 0 denkleminin kökleri nedir?", c: "-√{a} ve √{a}", v: {a:[4,9,16,25,36]}, z:"kolay", alt:"kok_bulma", inputType:"choice", choices:["-{kok} ve {kok}","-{a} ve {a}","{a}","Kök yok"] },
    { id: "t25_002", s: "x² - {b}x = 0 denkleminin kökleri nedir?", c: "0 ve {b}", v: {b:[2,8]}, z:"kolay", alt:"kok_bulma", cozum:"x(x-{b})=0 → x=0 veya x={b}" },
    { id: "t25_003", s: "x² - {s}x + {c} = 0 denkleminin köklerini bulun (tam sayı)", c: "kökBul({s},{c})", v: {s:[5,10], c:[6,24]}, z:"orta", alt:"kok_bulma" },
    { id: "t25_004", s: "(x-{a})(x+{b}) = 0 denkleminin kökleri nedir?", c: "{a} ve -{b}", v: {a:[2,6], b:[2,6]}, z:"kolay", alt:"kok_bulma" },
    { id: "t25_005", s: "x² + {a}x + {b} = 0 denklemini çarpanlara ayırarak kökleri bulun", c: "carpanKok({a},{b})", v: {a:[5,9], b:[6,20]}, z:"orta", alt:"kok_bulma" },

    // ==========================================
    // ALT DAL 2: DİSKRİMİNANT (Δ)
    // ==========================================
    { id: "t25_010", s: "x² - {b}x + {c} = 0 denkleminin diskriminantı (Δ) kaçtır?", c: "{b}*{b}-4*{c}", v: {b:[4,8], c:[3,15]}, z:"orta", alt:"diskriminant", cozum:"Δ = b² - 4ac = {b}² - 4×1×{c} = {b*b - 4*c}" },
    { id: "t25_011", s: "Δ = {d} ise denklemin kaç reel kökü vardır?", c: "{d}>0?'2 farklı':{d}==0?'1 (çakışık)':'Reel kök yok'", v: {d:[-4,10]}, z:"orta", alt:"diskriminant", inputType:"choice", choices:["2 farklı","1 (çakışık)","Reel kök yok"] },
    { id: "t25_012", s: "x² + {a}x + {b} = 0 denkleminin çakışık kökü olması için a ve b arasında nasıl bir bağıntı olmalıdır?", c: "a² = 4b", v: {}, z:"zor", alt:"diskriminant", inputType:"choice", choices:["a² = 4b","a = 2b","a² = 2b","2a = b²"], cozum:"Δ=0 → a² - 4b = 0 → a² = 4b" },

    // ==========================================
    // ALT DAL 3: KÖKLER TOPLAMI & ÇARPIMI
    // ==========================================
    { id: "t25_020", s: "x² - {s}x + {c} = 0 denkleminin kökler toplamı kaçtır?", c: "{s}", v: {s:[3,10], c:[2,24]}, z:"kolay", alt:"kok_toplam", cozum:"Kökler toplamı = -b/a = {s}" },
    { id: "t25_021", s: "x² - {s}x + {c} = 0 denkleminin kökler çarpımı kaçtır?", c: "{c}", v: {s:[3,10], c:[2,24]}, z:"orta", alt:"kok_toplam", cozum:"Kökler çarpımı = c/a = {c}" },
    { id: "t25_022", s: "Kökleri {k1} ve {k2} olan 2. derece denklem nedir?", c: "x²-{k1+k2}x+{k1*k2}=0", v: {k1:[2,6], k2:[3,8]}, z:"orta", alt:"kok_toplam", cozum:"x² - (kökler toplamı)x + (kökler çarpımı) = 0" },
    { id: "t25_023", s: "x² - {s}x + {c} = 0 denkleminin kökleri x₁ ve x₂ ise x₁² + x₂² kaçtır?", c: "{s}*{s}-2*{c}", v: {s:[4,10], c:[3,20]}, z:"zor", alt:"kok_toplam", cozum:"x₁²+x₂² = (x₁+x₂)² - 2x₁x₂ = {s}² - 2×{c}" },
    { id: "t25_024", s: "Kökler toplamı {t}, kökler çarpımı {c} olan denklemde kökler farkı kaçtır? (mutlak)", c: "Math.sqrt(Math.abs({t}*{t}-4*{c}))", v: {t:[5,10], c:[4,20]}, z:"zor", alt:"kok_toplam", kural:"t*t>4*c" },

    // ==========================================
    // ALT DAL 4: ÇÖZÜM KÜMESİ
    // ==========================================
    { id: "t25_030", s: "x² - 4x + 4 = 0 denkleminin çözüm kümesi nedir?", c: "{2}", v: {}, z:"orta", alt:"cozum_kumesi", inputType:"choice", choices:["{2}","{2, -2}","{-2}","Boş küme"] },
    { id: "t25_031", s: "x² + 1 = 0 denkleminin reel sayılarda çözüm kümesi nedir?", c: "Boş küme", v: {}, z:"orta", alt:"cozum_kumesi", inputType:"choice", choices:["Boş küme","{1}","{-1, 1}","{0}"] },
    { id: "t25_032", s: "x² + {a}x + {b} = 0 denkleminin köklerinden biri {k} ise diğeri kaçtır?", c: "{b}/{k}", v: {a:[5,9], b:[4,16], k:[1,4]}, z:"zor", alt:"cozum_kumesi", kural:"b%k==0", cozum:"x₁×x₂ = {b} → x₂ = {b}/{k}" },

    // ==========================================
    // ALT DAL 5: PROBLEM
    // ==========================================
    { id: "t25_040", s: "x² - {s}x + {c} = 0 denkleminin kökleri {oran} oranında ise kökler kaçtır?", c: "oranliKok({s},{c},{oran})", v: {s:[7,15], c:[10,50], oran:[2,3]}, z:"zor", alt:"problem" },
    { id: "t25_041", s: "x² - (m+{a})x + {b}m = 0 denkleminin kökler toplamı {t} ise m kaçtır?", c: "{t}-{a}", v: {a:[2,6], b:[1,4], t:[5,12]}, z:"zor", alt:"problem", kural:"t>a" },

],

// ==========================================
// KONU 26: FONKSİYONLAR (DGS) - TAM ŞABLON SETİ
// 5 alt dal × 2-4 zorluk = ~24 şablon
// ==========================================
26: [

    // ==========================================
    // ALT DAL 1: FONKSİYON KAVRAMI & DEĞER BULMA
    // ==========================================
    { id: "t26_001", s: "f(x) = {a}x + {b} ise f({c}) kaçtır?", c: "{a}*{c}+{b}", v: {a:[2,5], b:[1,10], c:[1,10]}, z:"kolay", alt:"deger_bulma", cozum:"f({c}) = {a}×{c} + {b} = {a*c+b}" },
    { id: "t26_002", s: "f(x) = {a}x + {b} ise f({c}) kaçtır?", c: "{a}*{c}+{b}", v: {a:[2,7], b:[3,15], c:[1,15]}, z:"kolay", alt:"deger_bulma" },
    { id: "t26_003", s: "f(x) = x² + {a}x + {b} ise f({c}) kaçtır?", c: "{c}*{c}+{a}*{c}+{b}", v: {a:[1,5], b:[1,10], c:[1,6]}, z:"orta", alt:"deger_bulma" },
    { id: "t26_004", s: "f(x) = {a}x - {b} ve f({c}) = {d} ise a kaçtır?", c: "({d}+{b})/{c}", v: {b:[2,8], c:[2,8], d:["{c}+{b}","{c}*5+{b}"]}, z:"orta", alt:"deger_bulma" },
    { id: "t26_005", s: "f(x) = 2x + {a}, g(x) = x - {b} ise f(g({c})) kaçtır?", c: "2*({c}-{b})+{a}", v: {a:[1,8], b:[1,5], c:[3,10]}, z:"zor", alt:"deger_bulma", kural:"c>b", cozum:"g({c})={c-b}, f({c-b})=2({c-b})+{a}" },

    // ==========================================
    // ALT DAL 2: TERS FONKSİYON
    // ==========================================
    { id: "t26_010", s: "f(x) = {a}x + {b} ise f⁻¹(x) nedir?", c: "(x-{b})/{a}", v: {a:[2,5], b:[1,8]}, z:"orta", alt:"ters", cozum:"y = {a}x+{b} → x = (y-{b})/{a} → f⁻¹(x) = (x-{b})/{a}" },
    { id: "t26_011", s: "f(x) = {a}x + {b} ise f⁻¹({c}) kaçtır?", c: "({c}-{b})/{a}", v: {a:[2,5], b:[1,8], c:["{a}+{b}","{a}*5+{b}"]}, z:"orta", alt:"ters", cozum:"f⁻¹({c}) = ({c}-{b})/{a}" },
    { id: "t26_012", s: "f(x) = (x+{a})/{b} ise f⁻¹(x) nedir?", c: "{b}x-{a}", v: {a:[2,8], b:[2,5]}, z:"orta", alt:"ters", cozum:"y = (x+{a})/{b} → {b}y = x+{a} → x = {b}y-{a}" },
    { id: "t26_013", s: "f(x) = {a}x + {b}, f⁻¹({c}) = {d} ise a kaçtır?", c: "({c}-{b})/{d}", v: {b:[2,6], c:[10,30], d:[2,6]}, z:"zor", alt:"ters", cozum:"f⁻¹({c})={d} → f({d})={c} → {a}×{d}+{b}={c}" },

    // ==========================================
    // ALT DAL 3: BİLEŞKE FONKSİYON
    // ==========================================
    { id: "t26_020", s: "f(x) = {a}x + {b}, g(x) = {c}x - {d} ise (f∘g)(x) nedir?", c: "{a}*{c}x+{a}*(-{d})+{b}", v: {a:[2,4], b:[1,5], c:[2,4], d:[1,5]}, z:"zor", alt:"bileske", cozum:"f(g(x)) = {a}({c}x-{d})+{b} = {a*c}x + ({b-a*d})" },
    { id: "t26_021", s: "f(x) = {a}x + {b}, g(x) = {c}x - {d} ise (g∘f)(x) nedir?", c: "{c}*{a}x+{c}*{b}-{d}", v: {a:[2,4], b:[1,5], c:[2,4], d:[1,5]}, z:"zor", alt:"bileske" },
    { id: "t26_022", s: "f(x) = {a}x + {b}, g(x) = {c}x - {d} ise (f∘g)({k}) kaçtır?", c: "{a}*({c}*{k}-{d})+{b}", v: {a:[2,4], b:[1,5], c:[2,4], d:[1,5], k:[1,8]}, z:"zor", alt:"bileske" },
    { id: "t26_023", s: "(f∘g)(x) = {a}x + {b} ve g(x) = {c}x + {d} ise f(x) nedir?", c: "({a}/{c})x+({b}-{a}*{d}/{c})", v: {a:[4,12], b:[3,15], c:[2,4], d:[1,5]}, z:"zor", alt:"bileske" },

    // ==========================================
    // ALT DAL 4: FONKSİYON GRAFİĞİ
    // ==========================================
    { id: "t26_030", s: "f(x) = {a}x + {b} doğrusunun eğimi kaçtır?", c: "{a}", v: {a:[2,6], b:[1,8]}, z:"kolay", alt:"grafik", cozum:"y = mx + n → Eğim = m = {a}" },
    { id: "t26_031", s: "f(x) = {a}x + {b} doğrusu y eksenini hangi noktada keser?", c: "{b}", v: {a:[2,6], b:[1,8]}, z:"orta", alt:"grafik", cozum:"x=0 için y={b}, nokta: (0,{b})" },
    { id: "t26_032", s: "f(x) = {a}x + {b} doğrusu x eksenini hangi noktada keser?", c: "-{b}/{a}", v: {a:[2,5], b:[2,10]}, z:"orta", alt:"grafik", cozum:"y=0 → {a}x+{b}=0 → x=-{b}/{a}" },
    { id: "t26_033", s: "f(x) = {a}x + {b} fonksiyonu artan mı azalan mı?", c: "{a}>0?'Artan':'Azalan'", v: {a:[-5,5]}, z:"kolay", alt:"grafik", inputType:"choice", choices:["Artan","Azalan","Sabit","Bilinemez"], kural:"a!=0" },

    // ==========================================
    // ALT DAL 5: PROBLEM
    // ==========================================
    { id: "t26_040", s: "f(x) doğrusal fonksiyon, f({a})={b} ve f({c})={d} ise f({k}) kaçtır?", c: "dogrusalDeger({a},{b},{c},{d},{k})", v: {a:[1,4], b:[3,12], c:["{a}+2","{a}+5"], d:["{b}+4","{b}+12"], k:[2,10]}, z:"zor", alt:"problem" },
    { id: "t26_041", s: "f(x) = {a}x + {b} ve f(x) = {c} ise x kaçtır?", c: "({c}-{b})/{a}", v: {a:[2,5], b:[1,8], c:["{a}+{b}","{a}*6+{b}"]}, z:"orta", alt:"problem" },
    { id: "t26_042", s: "f: R→R, f(x) = {a}x + {b} ise f(x+{k}) - f(x) kaçtır?", c: "{a}*{k}", v: {a:[2,6], b:[1,8], k:[1,5]}, z:"orta", alt:"problem", cozum:"f(x+{k})-f(x) = {a}(x+{k})+{b} - ({a}x+{b}) = {a*k}" },

],

// ==========================================
// KONU 27: PERMÜTASYON & KOMBİNASYON (DGS) - TAM ŞABLON SETİ
// 5 alt dal × 2-4 zorluk = ~24 şablon
// ==========================================
27: [

    // ==========================================
    // ALT DAL 1: FAKTÖRİYEL
    // ==========================================
    { id: "t27_001", s: "{n}! = ?", c: "faktoriyel({n})", v: {n:[3,7]}, z:"kolay", alt:"faktoriyel", cozum:"{n}! = {n}×{n-1}×...×1" },
    { id: "t27_002", s: "{a}! / {b}! = ?", c: "faktoriyel({a})/faktoriyel({b})", v: {a:[5,8], b:[2,"{a}-1"]}, z:"orta", alt:"faktoriyel", kural:"a>b", cozum:"Sadeleştirme yap" },
    { id: "t27_003", s: "{n}! sayısının sonunda kaç sıfır vardır?", c: "sifirSayisi({n})", v: {n:[5,25]}, z:"orta", alt:"faktoriyel", cozum:"5'e böl, bölümleri topla" },
    { id: "t27_004", s: "0! + 1! + 2! = ?", c: "4", v: {}, z:"kolay", alt:"faktoriyel", cozum:"0!=1, 1!=1, 2!=2 → 1+1+2=4" },
    { id: "t27_005", s: "x! = {s} ise x kaçtır?", c: "faktoriyelTers({s})", v: {s:[2,6,24,120,720]}, z:"orta", alt:"faktoriyel" },

    // ==========================================
    // ALT DAL 2: PERMÜTASYON (SIRALAMA)
    // ==========================================
    { id: "t27_010", s: "P({n},{r}) = ?", c: "permutasyon({n},{r})", v: {n:[5,8], r:[2,"{n}-2"]}, z:"orta", alt:"permutasyon", kural:"r<=n", cozum:"P({n},{r}) = {n}!/({n}-{r})!" },
    { id: "t27_011", s: "{n} kişi {r} sandalyeye kaç farklı şekilde oturabilir?", c: "permutasyon({n},{r})", v: {n:[4,8], r:[2,"{n}-1"]}, z:"orta", alt:"permutasyon", kural:"r<=n" },
    { id: "t27_012", s: "{n} farklı kitap rafa kaç farklı şekilde dizilir?", c: "faktoriyel({n})", v: {n:[3,6]}, z:"kolay", alt:"permutasyon", cozum:"{n} kitap → {n}! = {faktoriyel(n)}" },
    { id: "t27_013", s: "{a} kız, {b} erkek yan yana kaç farklı şekilde sıralanır?", c: "faktoriyel({a}+{b})", v: {a:[2,5], b:[2,5]}, z:"orta", alt:"permutasyon", cozum:"({a}+{b})! = {faktoriyel(a+b)}" },
    { id: "t27_014", s: "{a} kız, {b} erkek kızlar bir arada olmak şartıyla kaç farklı şekilde sıralanır?", c: "faktoriyel({a})*faktoriyel({b}+1)", v: {a:[2,4], b:[2,4]}, z:"zor", alt:"permutasyon", cozum:"Kızlar tek grup → {a}!×({b}+1)!" },

    // ==========================================
    // ALT DAL 3: TEKRARLI PERMÜTASYON
    // ==========================================
    { id: "t27_020", s: "MATEMATİK kelimesinin harfleri kaç farklı şekilde sıralanır? (M:{m}, A:{a}, T:{t})", c: "tekrarliPermutasyon(9,[{m},{a},{t}])", v: {m:[2,2], a:[2,3], t:[2,2]}, z:"zor", alt:"tekrarli", cozum:"9!/(2!×2!×2!)" },
    { id: "t27_021", s: "{a} tane A, {b} tane B harfi kaç farklı şekilde sıralanır?", c: "faktoriyel({a}+{b})/(faktoriyel({a})*faktoriyel({b}))", v: {a:[2,4], b:[2,4]}, z:"orta", alt:"tekrarli", cozum:"({a}+{b})!/({a}!×{b}!)" },
    { id: "t27_022", s: "3 tane 1, 2 tane 2 rakamıyla kaç farklı 5 basamaklı sayı yazılır?", c: "faktoriyel(5)/(faktoriyel(3)*faktoriyel(2))", v: {}, z:"orta", alt:"tekrarli", inputType:"choice", choices:["10","60","120","20"] },

    // ==========================================
    // ALT DAL 4: KOMBİNASYON (SEÇME)
    // ==========================================
    { id: "t27_030", s: "C({n},{r}) = ?", c: "kombinasyon({n},{r})", v: {n:[5,10], r:[2,"{n}-3"]}, z:"orta", alt:"kombinasyon", kural:"r<=n", cozum:"C({n},{r}) = {n}!/({r}!×({n}-{r})!)" },
    { id: "t27_031", s: "{n} kişiden {r} kişilik ekip kaç farklı şekilde seçilir?", c: "kombinasyon({n},{r})", v: {n:[5,10], r:[2,4]}, z:"orta", alt:"kombinasyon", kural:"r<=n" },
    { id: "t27_032", s: "{n} kişilik gruptan {r} kişi seçiliyor. Belli bir kişi kesin seçilecekse kaç farklı seçim olur?", c: "kombinasyon({n}-1,{r}-1)", v: {n:[6,10], r:[2,"{n}-3"]}, z:"zor", alt:"kombinasyon", kural:"r<=n" },
    { id: "t27_033", s: "{n} kişilik gruptan {r} kişi seçiliyor. Belli bir kişi kesin seçilmeyecekse kaç farklı seçim olur?", c: "kombinasyon({n}-1,{r})", v: {n:[6,10], r:[2,"{n}-3"]}, z:"zor", alt:"kombinasyon", kural:"r<=n-1" },
    { id: "t27_034", s: "C({n},{r}) = C({n},{k}) ise r+k = ?", c: "{n}", v: {n:[5,10], r:[1,4], k:"{n}-{r}"}, z:"orta", alt:"kombinasyon", cozum:"C(n,r)=C(n,n-r) → k=n-r → r+k=n" },

    // ==========================================
    // ALT DAL 5: PROBLEM & GEOMETRİ
    // ==========================================
    { id: "t27_040", s: "{n} noktadan kaç farklı doğru geçer? (Herhangi 3 nokta doğrusal değil)", c: "kombinasyon({n},2)", v: {n:[4,8]}, z:"orta", alt:"problem", cozum:"2 nokta 1 doğru belirtir → C({n},2)" },
    { id: "t27_041", s: "{n} köşeli çokgenin kaç köşegeni vardır?", c: "({n}*({n}-3))/2", v: {n:[4,8]}, z:"orta", alt:"problem", cozum:"C({n},2) - {n} = {n*(n-3)/2}" },
    { id: "t27_042", s: "{n} kişilik gruptan {r} kişilik yönetim kurulu seçilip bir başkan belirlenecek. Kaç farklı şekilde olur?", c: "kombinasyon({n},{r})*{r}", v: {n:[5,8], r:[3,5]}, z:"zor", alt:"problem", kural:"r<=n" },

],

// ==========================================
// KONU 28: OLASILIK - TAM ŞABLON SETİ
// 6 alt dal × 2-4 zorluk = ~30 şablon
// ==========================================
28: [

    // ==========================================
    // ALT DAL 1: TEMEL OLASILIK
    // ==========================================
    { id: "t28_001", s: "Bir zar atıldığında çift sayı gelme olasılığı kaçtır?", c: "1/2", v: {}, z:"kolay", alt:"temel", inputType:"choice", choices:["1/2","1/3","1/6","2/3"], cozum:"3 çift/6 yüz = 1/2" },
    { id: "t28_002", s: "Bir zar atıldığında asal sayı gelme olasılığı kaçtır?", c: "1/2", v: {}, z:"kolay", alt:"temel", inputType:"choice", choices:["1/2","1/3","2/3","1/6"], cozum:"Asal: 2,3,5 → 3/6 = 1/2" },
    { id: "t28_003", s: "Bir madeni para {n} kez atılıyor. Tüm durum sayısı kaçtır?", c: "Math.pow(2,{n})", v: {n:[2,5]}, z:"kolay", alt:"temel" },
    { id: "t28_004", s: "Bir olayın olma olasılığı {pay}/{payda} ise olmama olasılığı kaçtır?", c: "{payda-pay}/{payda}", v: {pay:[1,4], payda:[5,8]}, z:"kolay", alt:"temel", kural:"pay<payda", cozum:"1 - {pay}/{payda} = {payda-pay}/{payda}" },
    { id: "t28_005", s: "Olasılık değeri aşağıdakilerden hangisi olamaz?", c: "-0.5", v: {}, z:"kolay", alt:"temel", inputType:"choice", choices:["-0.5","0","0.5","1"], cozum:"Olasılık 0 ile 1 arasındadır" },

    // ==========================================
    // ALT DAL 2: ZAR PROBLEMLERİ
    // ==========================================
    { id: "t28_010", s: "İki zar atıldığında toplamın {t} olma olasılığı kaçtır?", c: "zarOlasilik({t})", v: {t:[2,12]}, z:"orta", alt:"zar", cozum:"İstenen durumlar / 36" },
    { id: "t28_011", s: "İki zar atıldığında toplamın en az {t} olma olasılığı kaçtır?", c: "zarEnAz({t})", v: {t:[3,10]}, z:"orta", alt:"zar" },
    { id: "t28_012", s: "İki zar atıldığında çarpımın çift olma olasılığı kaçtır?", c: "3/4", v: {}, z:"orta", alt:"zar", inputType:"choice", choices:["3/4","1/2","1/4","2/3"], cozum:"Her ikisi tek değilse → 1 - (3/6)×(3/6) = 3/4" },
    { id: "t28_013", s: "İki zar atıldığında gelen sayıların aynı olma olasılığı kaçtır?", c: "1/6", v: {}, z:"kolay", alt:"zar", inputType:"choice", choices:["1/6","1/36","1/3","1/2"], cozum:"6 durum/36 = 1/6" },
    { id: "t28_014", s: "İki zar atıldığında gelen sayıların farkının {f} olma olasılığı kaçtır?", c: "zarFark({f})", v: {f:[1,5]}, z:"zor", alt:"zar" },

    // ==========================================
    // ALT DAL 3: TOP PROBLEMLERİ
    // ==========================================
    { id: "t28_020", s: "Torbada {k} kırmızı, {m} mavi top var. Çekilen topun kırmızı olma olasılığı kaçtır?", c: "{k}/({k}+{m})", v: {k:[3,8], m:[2,8]}, z:"kolay", alt:"top" },
    { id: "t28_021", s: "Torbada {k} kırmızı, {m} mavi top var. Art arda 2 top çekiliyor. İkisinin de kırmızı olma olasılığı? (çekilen geri atılmıyor)", c: "({k}/({k}+{m}))*(({k}-1)/({k}+{m}-1))", v: {k:[4,8], m:[3,6]}, z:"orta", alt:"top", kural:"k>=2" },
    { id: "t28_022", s: "Torbada {k} kırmızı, {m} mavi top var. Çekilen top geri atılıp 2 top çekiliyor. İkisinin de kırmızı olma olasılığı?", c: "Math.pow({k}/({k}+{m}),2)", v: {k:[3,6], m:[2,6]}, z:"orta", alt:"top" },
    { id: "t28_023", s: "Torbada {k} kırmızı, {m} mavi, {y} yeşil top var. Kırmızı veya mavi çekme olasılığı?", c: "({k}+{m})/({k}+{m}+{y})", v: {k:[2,6], m:[2,6], y:[2,6]}, z:"orta", alt:"top" },
    { id: "t28_024", s: "Torbada {a} beyaz, {b} siyah top var. En az {n} top çekince kesinlikle beyaz gelmesi için kaç top çekilmeli?", c: "{b}+1", v: {a:[3,8], b:[2,6], n:[1,3]}, z:"orta", alt:"top", inputType:"choice", choices:["{b+1}","{b}","{a}","{a+b}"], cozum:"En kötü durum: önce tüm siyahlar çekilir" },

    // ==========================================
    // ALT DAL 4: KART & DİĞER PROBLEMLER
    // ==========================================
    { id: "t28_030", s: "52'lik desteden çekilen kartın maça olma olasılığı?", c: "1/4", v: {}, z:"kolay", alt:"kart", inputType:"choice", choices:["1/4","1/13","1/52","1/2"] },
    { id: "t28_031", s: "52'lik desteden çekilen kartın as olma olasılığı?", c: "1/13", v: {}, z:"kolay", alt:"kart", inputType:"choice", choices:["1/13","1/4","1/52","4/52"] },
    { id: "t28_032", s: "{n} erkek, {m} kız arasından seçilen {k} kişiden en az birinin kız olma olasılığı?", c: "1-kombinasyon({n},{k})/kombinasyon({n}+{m},{k})", v: {n:[5,10], m:[4,8], k:[2,4]}, z:"zor", alt:"kart", kural:"k<=n+m" },

    // ==========================================
    // ALT DAL 5: BAĞIMSIZ & BAĞIMLI OLAY
    // ==========================================
    { id: "t28_040", s: "A olayının olasılığı {a}/{b}, B olayının olasılığı {c}/{d}. Bağımsız ise A∩B olasılığı?", c: "({a}*{c})/({b}*{d})", v: {a:[1,3], b:[3,8], c:[1,4], d:[3,8]}, z:"orta", alt:"bagimsiz", kural:"a<b&&c<d", cozum:"P(A∩B) = P(A)×P(B)" },
    { id: "t28_041", s: "P(A)={a}/{b}, P(B)={c}/{d}, P(A∩B)={e}/{f} ise A ve B bağımsız mı?", c: "({a}*{c})/({b}*{d})=={e}/{f}?'Evet':'Hayır'", v: {a:[1,3], b:[2,6], c:[1,3], d:[2,6], e:[1,4], f:[2,12]}, z:"zor", alt:"bagimsiz", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t28_042", s: "Bir hedefi A'nın vurma olasılığı {a}/{b}, B'nin {c}/{d}. Hedefin vurulma olasılığı?", c: "1-(1-{a}/{b})*(1-{c}/{d})", v: {a:[1,5], b:[3,8], c:[1,4], d:[3,8]}, z:"zor", alt:"bagimsiz", kural:"a<b&&c<d", cozum:"1 - ikisi de vuramaz" },

    // ==========================================
    // ALT DAL 6: YENİ NESİL
    // ==========================================
    { id: "t28_050", s: "Bir torbada {k} kırmızı, {m} mavi bilye var. Art arda 3 bilye çekiliyor. Sırayla K,M,K gelme olasılığı? (geri atılmıyor)", c: "({k}/({k}+{m}))*({m}/({k}+{m}-1))*(({k}-1)/({k}+{m}-2))", v: {k:[5,8], m:[3,6]}, z:"zor", alt:"yeni_nesil", kural:"k>=2" },
    { id: "t28_051", s: "{n} soruluk testte {d} doğru seçenek var. Rastgele işaretlenen {k} sorunun hepsinin doğru olma olasılığı?", c: "Math.pow({d}/{n},{k})", v: {n:[4,5], d:[1,1], k:[1,3]}, z:"orta", alt:"yeni_nesil", cozum:"Her soru için {d}/{n}, {k} soru için ({d}/{n})^{k}" },
    { id: "t28_052", s: "İki zar birlikte atılıyor. Zarlardan en az birinin {a} gelme olasılığı?", c: "11/36", v: {a:[1,6]}, z:"orta", alt:"yeni_nesil", inputType:"choice", choices:["11/36","1/6","1/3","5/36"], cozum:"1 - ikisi de {a} gelmez = 1 - 25/36 = 11/36" },

],

};

// ==================== YARDIMCI FONKSİYONLAR ====================

function faktoriyel(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

function permutasyon(n, r) {
    return faktoriyel(n) / faktoriyel(n - r);
}

function kombinasyon(n, r) {
    return faktoriyel(n) / (faktoriyel(r) * faktoriyel(n - r));
}

function ebob(a, b) {
    while (b) { [a, b] = [b, a % b]; }
    return a;
}

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function asalCarpanToplam(n) {
    let toplam = 0, temp = n;
    for (let i = 2; i <= temp; i++) {
        if (temp % i === 0 && isPrime(i)) {
            toplam += i;
            while (temp % i === 0) temp /= i;
        }
    }
    return toplam || n;
}

function asalCarpanSayisi(n) {
    let count = 0, temp = n;
    for (let i = 2; i <= temp; i++) {
        if (temp % i === 0 && isPrime(i)) {
            count++;
            while (temp % i === 0) temp /= i;
        }
    }
    return count;
}

function sadelestir(pay, payda) {
    const gcd = ebob(Math.abs(pay), Math.abs(payda));
    return `${pay/gcd}/${payda/gcd}`;
}

function sirala(...args) {
    return args.sort((a, b) => a - b);
}

function zarOlasilik(t) {
    const olasiliklar = {
        2: "1/36", 3: "2/36", 4: "3/36", 5: "4/36", 6: "5/36",
        7: "6/36", 8: "5/36", 9: "4/36", 10: "3/36", 11: "2/36", 12: "1/36"
    };
    return olasiliklar[t] || "0";
}

function basamakDegerToplam(n) {
    let toplam = 0, carpan = 1;
    while (n > 0) {
        toplam += (n % 10) * carpan;
        carpan *= 10;
        n = Math.floor(n / 10);
    }
    return toplam;
}

function rakamToplam(n) {
    let toplam = 0;
    while (n > 0) { toplam += n % 10; n = Math.floor(n / 10); }
    return toplam;
}

function kokDisi(n) {
    let disari = 1, iceri = n;
    for (let i = 2; i * i <= iceri; i++) {
        while (iceri % (i * i) === 0) {
            disari *= i;
            iceri /= (i * i);
        }
    }
    if (disari === 1) return '√' + n;
    if (iceri === 1) return String(disari);
    return disari + '√' + iceri;
}

function aralikToplam(min, max) {
    if (min > max) return 0;
    return (min + max) * (max - min + 1) / 2;
}

function sinavMevcut(a, b, c, d) {
    const x = (b + c * d) / (c - a);
    return a * x + b;
}

function dogrusalDeger(x1, y1, x2, y2, k) {
    const m = (y2 - y1) / (x2 - x1);
    const n = y1 - m * x1;
    return Math.round((m * k + n) * 100) / 100;
}

function sifirSayisi(n) {
    let count = 0;
    while (n >= 5) { n = Math.floor(n / 5); count += n; }
    return count;
}

function zarEnAz(t) {
    let count = 0;
    for (let i = 1; i <= 6; i++)
        for (let j = 1; j <= 6; j++)
            if (i + j >= t) count++;
    const gcd = ebob(count, 36);
    return (count/gcd) + '/' + (36/gcd);
}

function zarFark(f) {
    let count = 0;
    for (let i = 1; i <= 6; i++)
        for (let j = 1; j <= 6; j++)
            if (Math.abs(i - j) === f) count++;
    const gcd = ebob(count, 36);
    return (count/gcd) + '/' + (36/gcd);
}

console.log('✅ questions.js Final yüklendi');