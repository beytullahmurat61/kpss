// ============================================
// question2.js - KPSS/DGS SORU ŞABLONLARI
// BAĞIMSIZ ÇALIŞMA İÇİN FONKSİYONLAR EKLENDİ
// ============================================

// ------------------- YARDIMCI FONKSİYONLAR -------------------
function ebob(a, b) {
    while (b) { [a, b] = [b, a % b]; }
    return a;
}

function ekok(a, b) {
    return (a * b) / ebob(a, b);
}

function faktoriyel(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

function permutasyon(n, r) {
    if (r > n) return 0;
    return faktoriyel(n) / faktoriyel(n - r);
}

function kombinasyon(n, r) {
    if (r > n || r < 0) return 0;
    r = Math.min(r, n - r);
    let c = 1;
    for (let i = 0; i < r; i++) {
        c = c * (n - i) / (i + 1);
    }
    return Math.round(c);
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

function enKucukAsalCarpan(n) {
    if (n < 2) return 1;
    if (n % 2 === 0) return 2;
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0 && isPrime(i)) return i;
    }
    return n;
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

function asalCarpanCarpim(n) {
    let carpim = 1, temp = n;
    for (let i = 2; i <= temp; i++) {
        if (temp % i === 0 && isPrime(i)) {
            carpim *= i;
            while (temp % i === 0) temp /= i;
        }
    }
    return carpim || 1;
}

function aralikAsalSay(bas, son) {
    let sayac = 0;
    for (let i = Math.max(2, Math.ceil(bas)); i <= son; i++) {
        if (isPrime(i)) sayac++;
    }
    return sayac;
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

function basamakDegistir(n) {
    const s = String(n).split('');
    [s[0], s[s.length - 1]] = [s[s.length - 1], s[0]];
    return parseInt(s.join('')) || n;
}

function sadelestir(pay, payda) {
    const gcd = ebob(Math.abs(pay), Math.abs(payda));
    return `${pay / gcd}/${payda / gcd}`;
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

function sirala(...args) {
    return args.sort((a, b) => a - b);
}

function aralikToplam(min, max) {
    if (min > max) return 0;
    return (min + max) * (max - min + 1) / 2;
}

function sifirSayisi(n) {
    let count = 0;
    while (n >= 5) { n = Math.floor(n / 5); count += n; }
    return count;
}

function dogrusalDeger(x1, y1, x2, y2, k) {
    const m = (y2 - y1) / (x2 - x1);
    const n = y1 - m * x1;
    return Math.round((m * k + n) * 100) / 100;
}

function sinavMevcut(a, b, c, d) {
    const x = (b + c * d) / (c - a);
    return a * x + b;
}

function zarOlasilik(t) {
    const olasiliklar = {
        2: "1/36", 3: "2/36", 4: "3/36", 5: "4/36", 6: "5/36",
        7: "6/36", 8: "5/36", 9: "4/36", 10: "3/36", 11: "2/36", 12: "1/36"
    };
    return olasiliklar[t] || "0";
}

function zarEnAz(t) {
    let count = 0;
    for (let i = 1; i <= 6; i++)
        for (let j = 1; j <= 6; j++)
            if (i + j >= t) count++;
    const gcd = ebob(count, 36);
    return (count / gcd) + '/' + (36 / gcd);
}

function zarFark(f) {
    let count = 0;
    for (let i = 1; i <= 6; i++)
        for (let j = 1; j <= 6; j++)
            if (Math.abs(i - j) === f) count++;
    const gcd = ebob(count, 36);
    return (count / gcd) + '/' + (36 / gcd);
}

function kokToplamMin(a, b) {
    return Math.floor(Math.sqrt(Math.abs(a))) + Math.floor(Math.sqrt(Math.abs(b)));
}

// ============================================
// question2.js - KPSS/DGS SORU ŞABLONLARI
// app.js ile uyumlu, yardımcı fonksiyon yok
// ============================================

const QUESTION_TEMPLATES = {

  // ==========================================
  // KONU 1: TOPLAMA & ÇIKARMA (17 alt dal)
  // ==========================================
  1: [

    // ALT DAL 1: DÜZ İŞLEM > 2 SAYI
    { id: "t1_001", s: "{a} + {b} = ?", c: "{a}+{b}", v: {a:[1,20], b:[1,20]}, z:"kolay", alt:"duz_islem" },
    { id: "t1_002", s: "{a} + {b} = ?", c: "{a}+{b}", v: {a:[10,50], b:[10,50]}, z:"orta", alt:"duz_islem" },
    { id: "t1_003", s: "{a} + {b} = ?", c: "{a}+{b}", v: {a:[50,200], b:[50,200]}, z:"zor", alt:"duz_islem" },
    
    { id: "t1_004", s: "{a} - {b} = ?", c: "{a}-{b}", v: {a:[10,30], b:[1,"{a}"]}, z:"kolay", alt:"duz_islem", kural:"b<a" },
    { id: "t1_005", s: "{a} - {b} = ?", c: "{a}-{b}", v: {a:[30,100], b:[5,"{a}"]}, z:"orta", alt:"duz_islem", kural:"b<a" },
    { id: "t1_006", s: "{a} - {b} = ?", c: "{a}-{b}", v: {a:[100,500], b:[10,"{a}"]}, z:"zor", alt:"duz_islem", kural:"b<a" },

    // ALT DAL 2: DÜZ İŞLEM > 3 SAYI
    { id: "t1_010", s: "{a} + {b} + {c} = ?", c: "{a}+{b}+{c}", v: {a:[1,15], b:[1,15], c:[1,15]}, z:"kolay", alt:"uc_sayi" },
    { id: "t1_011", s: "{a} + {b} + {c} = ?", c: "{a}+{b}+{c}", v: {a:[10,50], b:[10,50], c:[10,50]}, z:"orta", alt:"uc_sayi" },
    { id: "t1_012", s: "{a} + {b} + {c} = ?", c: "{a}+{b}+{c}", v: {a:[50,200], b:[50,200], c:[50,200]}, z:"zor", alt:"uc_sayi" },

    // ALT DAL 3: ZİNCİR
    { id: "t1_020", s: "{a} + {b} - {c} = ?", c: "{a}+{b}-{c}", v: {a:[10,30], b:[5,20], c:[1,15]}, z:"kolay", alt:"zincir" },
    { id: "t1_021", s: "{a} + {b} - {c} + {d} = ?", c: "{a}+{b}-{c}+{d}", v: {a:[10,40], b:[10,30], c:[5,20], d:[5,20]}, z:"orta", alt:"zincir" },
    { id: "t1_022", s: "{a} - {b} + {c} - {d} + {e} = ?", c: "{a}-{b}+{c}-{d}+{e}", v: {a:[50,150], b:[10,40], c:[10,50], d:[5,30], e:[5,30]}, z:"zor", alt:"zincir" },

    // ALT DAL 4-7: VERİLMEYEN
    { id: "t1_030", s: "? + {a} = {b} ise ? kaçtır?", c: "{b}-{a}", v: {a:[3,15], b:[10,40]}, z:"kolay", alt:"verilmeyen", kural:"b>a" },
    { id: "t1_031", s: "? + {a} = {b} ise ? kaçtır?", c: "{b}-{a}", v: {a:[15,50], b:[40,150]}, z:"orta", alt:"verilmeyen", kural:"b>a" },
    { id: "t1_032", s: "? + {a} = {b} ise ? kaçtır?", c: "{b}-{a}", v: {a:[50,200], b:[150,500]}, z:"zor", alt:"verilmeyen", kural:"b>a" },
    { id: "t1_033", s: "{a} + ? = {b} ise ? kaçtır?", c: "{b}-{a}", v: {a:[3,15], b:[10,40]}, z:"kolay", alt:"verilmeyen", kural:"b>a" },
    { id: "t1_034", s: "{a} + ? = {b} ise ? kaçtır?", c: "{b}-{a}", v: {a:[15,50], b:[40,150]}, z:"orta", alt:"verilmeyen", kural:"b>a" },
    { id: "t1_035", s: "? - {a} = {b} ise ? kaçtır?", c: "{a}+{b}", v: {a:[5,20], b:[5,20]}, z:"kolay", alt:"verilmeyen" },
    { id: "t1_036", s: "? - {a} = {b} ise ? kaçtır?", c: "{a}+{b}", v: {a:[10,50], b:[10,50]}, z:"orta", alt:"verilmeyen" },
    { id: "t1_037", s: "{a} - ? = {b} ise ? kaçtır?", c: "{a}-{b}", v: {a:[20,50], b:[1,"{a}"]}, z:"kolay", alt:"verilmeyen", kural:"b<a" },
    { id: "t1_038", s: "{a} - ? = {b} ise ? kaçtır?", c: "{a}-{b}", v: {a:[50,150], b:[5,"{a}"]}, z:"orta", alt:"verilmeyen", kural:"b<a" },

    // ALT DAL 8-9: ARDIŞIK SAYI
    { id: "t1_040", s: "Ardışık iki sayının toplamı {s} ise büyük sayı kaçtır?", c: "({s}+1)/2", v: {s:[5,99,"tek"]}, z:"kolay", alt:"ardisik" },
    { id: "t1_041", s: "Ardışık iki sayının toplamı {s} ise küçük sayı kaçtır?", c: "({s}-1)/2", v: {s:[5,99,"tek"]}, z:"kolay", alt:"ardisik" },
    { id: "t1_042", s: "Ardışık iki çift sayının toplamı {s} ise büyük sayı kaçtır?", c: "({s}+2)/2", v: {s:[6,198,"cift"]}, z:"orta", alt:"ardisik" },
    { id: "t1_043", s: "Ardışık üç sayının toplamı {s} ise ortanca sayı kaçtır?", c: "{s}/3", v: {s:[6,99,"3kati"]}, z:"kolay", alt:"ardisik" },
    { id: "t1_044", s: "Ardışık üç sayının toplamı {s} ise en küçük sayı kaçtır?", c: "({s}-3)/3", v: {s:[6,99,"3kati"]}, z:"orta", alt:"ardisik" },
    { id: "t1_045", s: "Ardışık üç sayının toplamı {s} ise en büyük sayı kaçtır?", c: "({s}+3)/3", v: {s:[6,99,"3kati"]}, z:"orta", alt:"ardisik" },
    { id: "t1_046", s: "Ardışık üç tek sayının toplamı {s} ise en küçük sayı kaçtır?", c: "({s}-6)/3", v: {s:[9,99,"3kati"]}, z:"zor", alt:"ardisik", kural:"s%2==1" },

    // ALT DAL 10-16: PROBLEMLER
    { id: "t1_050", s: "Bir kalem {a} TL, bir defter {b} TL. İkisini birden alan kaç TL öder?", c: "{a}+{b}", v: {a:[5,30], b:[10,50]}, z:"kolay", alt:"problem_para" },
    { id: "t1_051", s: "Cebimde {a} TL var. {b} TL harcarsam kaç TL kalır?", c: "{a}-{b}", v: {a:[50,200], b:[5,"{a}"]}, z:"kolay", alt:"problem_para", kural:"b<a" },
    { id: "t1_052", s: "{a} TL'ye alınan ürün {b} TL'ye satılırsa kaç TL kar edilir?", c: "{b}-{a}", v: {a:[20,80], b:["{a}+5","{a}+50"]}, z:"orta", alt:"problem_para", kural:"b>a" },
    { id: "t1_053", s: "3 ürün alana 1 ürün bedava. Tanesi {a} TL olan üründen 4 tane alan kişi aslında tanesini kaç TL'ye almış olur?", c: "({a}*3)/4", v: {a:[12,48,"4kati"]}, z:"zor", alt:"problem_para" },

    { id: "t1_054", s: "Bir sınıfta {a} kız, {b} erkek öğrenci var. Sınıf mevcudu kaçtır?", c: "{a}+{b}", v: {a:[10,25], b:[10,25]}, z:"kolay", alt:"problem_gunluk" },
    { id: "t1_055", s: "{a} sayfalık kitabın önce {b} sayfasını, sonra {c} sayfasını okudum. Geriye kaç sayfa kaldı?", c: "{a}-{b}-{c}", v: {a:[50,200], b:[10,40], c:[10,40]}, z:"orta", alt:"problem_gunluk", kural:"b+c<a" },
    { id: "t1_056", s: "Bir otobüste {a} yolcu var. İlk durakta {b} kişi inip {c} kişi biniyor. Son durumda kaç yolcu olur?", c: "{a}-{b}+{c}", v: {a:[20,50], b:[3,15], c:[3,20]}, z:"orta", alt:"problem_gunluk", kural:"b<a" },
    { id: "t1_057", s: "Merdivenin tam ortasındaki basamaktayım. {a} basamak çıkıp {b} basamak inersem başlangıca göre kaç basamak yer değiştirmiş olurum?", c: "{a}-{b}", v: {a:[3,10], b:[1,"{a}"]}, z:"zor", alt:"problem_gunluk" },

    { id: "t1_058", s: "Ahmet {a}, Mehmet {b} yaşındadır. İkisinin yaşları toplamı kaçtır?", c: "{a}+{b}", v: {a:[5,20], b:[5,20]}, z:"kolay", alt:"problem_yas" },
    { id: "t1_059", s: "Baba {a}, çocuk {b} yaşındadır. {c} yıl sonra yaşları toplamı kaç olur?", c: "{a}+{b}+2*{c}", v: {a:[30,50], b:[5,15], c:[2,10]}, z:"orta", alt:"problem_yas" },
    { id: "t1_060", s: "{a} yıl önce yaşları toplamı {t} olan iki kardeşin bugünkü yaşları toplamı kaçtır?", c: "{t}+2*{a}", v: {a:[2,8], t:[10,40]}, z:"orta", alt:"problem_yas" },

    { id: "t1_061", s: "{a} kg elma, {b} kg armut alan kişi toplam kaç kg meyve almıştır?", c: "{a}+{b}", v: {a:[1,10], b:[1,10]}, z:"kolay", alt:"problem_olcu" },
    { id: "t1_062", s: "{a} km'lik yolun önce {b} km'sini, sonra {c} km'sini gittim. Geriye kaç km kaldı?", c: "{a}-{b}-{c}", v: {a:[50,300], b:[10,80], c:[10,80]}, z:"orta", alt:"problem_olcu", kural:"b+c<a" },
    { id: "t1_063", s: "Bir depoda {a} litre su var. {b} litre eklenip {c} litre kullanılırsa kaç litre kalır?", c: "{a}+{b}-{c}", v: {a:[20,100], b:[10,50], c:[5,40]}, z:"orta", alt:"problem_olcu" },

    { id: "t1_070", s: "Pazartesi {a}, Salı {b}, Çarşamba {c} soru çözen bir öğrenci 3 günde toplam kaç soru çözmüştür?", c: "{a}+{b}+{c}", v: {a:[10,50], b:[10,50], c:[10,50]}, z:"kolay", alt:"tablo" },
    { id: "t1_071", s: "A ürünü {a} TL, B ürünü {b} TL, C ürünü {c} TL. Üçü birden alınırsa toplam kaç TL ödenir?", c: "{a}+{b}+{c}", v: {a:[10,100], b:[10,100], c:[10,100]}, z:"kolay", alt:"tablo" },
    { id: "t1_072", s: "Ocak: {a}, Şubat: {b}, Mart: {c} satış yapılmış. 3 aylık toplam satış kaçtır?", c: "{a}+{b}+{c}", v: {a:[100,500], b:[100,500], c:[100,500]}, z:"orta", alt:"tablo" },
    { id: "t1_073", s: "Gelir: {a} TL, Gider: {b} TL. Kar/zarar durumu nedir? (Kar +, zarar -)", c: "{a}-{b}", v: {a:[100,500], b:[50,450]}, z:"orta", alt:"tablo" },
    { id: "t1_074", s: "İlk ay {a}, ikinci ay {b} soru çözüldü. İkinci ay ilk aydan kaç fazla/eksik soru çözülmüştür?", c: "{b}-{a}", v: {a:[20,80], b:[20,100]}, z:"zor", alt:"tablo" },

    { id: "t1_080", s: "İki sayının toplamı {s}, farkı {f} ise büyük sayı kaçtır?", c: "({s}+{f})/2", v: {s:[20,100], f:[2,20,"cift"]}, z:"orta", alt:"mantik" },
    { id: "t1_081", s: "İki sayının toplamı {s}, farkı {f} ise küçük sayı kaçtır?", c: "({s}-{f})/2", v: {s:[20,100], f:[2,20,"cift"]}, z:"orta", alt:"mantik" },
    { id: "t1_082", s: "Toplamları {s} olan iki sayıdan biri diğerinden {f} fazla ise küçük sayı kaçtır?", c: "({s}-{f})/2", v: {s:[20,100], f:[2,20]}, z:"orta", alt:"mantik", kural:"s>f" },
    { id: "t1_083", s: "İki sayının toplamı {s}'dir. Büyük sayı küçük sayının {k} katı ise küçük sayı kaçtır?", c: "{s}/({k}+1)", v: {k:[2,5], s:["({k}+1)*2","({k}+1)*30"]}, z:"zor", alt:"mantik" },
    { id: "t1_084", s: "İki sayının farkı {f}'tir. Büyük sayı küçük sayının {k} katı ise büyük sayı kaçtır?", c: "({f}*{k})/({k}-1)", v: {f:[2,10], k:[2,4]}, z:"zor", alt:"mantik", kural:"k>1" },

    { id: "t1_090", s: "Bir mağazada tanesi {a} TL olan gömlekten {b} tane, tanesi {c} TL olan pantolondan {d} tane alan müşteri toplam kaç TL öder?", c: "{a}*{b}+{c}*{d}", v: {a:[30,100], b:[1,3], c:[50,150], d:[1,3]}, z:"orta", alt:"yeni_nesil" },
    { id: "t1_091", s: "Bir çiftlikte {a} tavuk ve {b} inek var. Toplam ayak sayısı kaçtır?", c: "{a}*2+{b}*4", v: {a:[5,20], b:[3,10]}, z:"orta", alt:"yeni_nesil" },
    { id: "t1_092", s: "{a} kişilik bir grupta herkes birbiriyle tokalaşırsa toplam kaç tokalaşma olur?", c: "{a}*({a}-1)/2", v: {a:[3,10]}, z:"zor", alt:"yeni_nesil" },
    { id: "t1_093", s: "Bir sinema salonunda {a} sıra ve her sırada {b} koltuk var. {c} koltuk boş ise kaç koltuk doludur?", c: "{a}*{b}-{c}", v: {a:[5,15], b:[8,20], c:[5,"{a}*{b}-5"]}, z:"zor", alt:"yeni_nesil", kural:"c<a*b" },
    { id: "t1_094", s: "Bir otobüs {a} km/sa hızla {b} saat, sonra {c} km/sa hızla {d} saat gidiyor. Toplam kaç km yol almıştır?", c: "{a}*{b}+{c}*{d}", v: {a:[60,90], b:[1,3], c:[40,80], d:[1,3]}, z:"zor", alt:"yeni_nesil" },

    { id: "t1_100", s: "{a} + 10 = ?", c: "{a}+10", v: {a:[5,90]}, z:"kolay", alt:"hizli" },
    { id: "t1_101", s: "{a} + 100 = ?", c: "{a}+100", v: {a:[50,500]}, z:"kolay", alt:"hizli" },
    { id: "t1_102", s: "100 - {a} = ?", c: "100-{a}", v: {a:[1,99]}, z:"kolay", alt:"hizli" },
    { id: "t1_103", s: "{a} + 9 = ?", c: "{a}+9", v: {a:[10,90]}, z:"kolay", alt:"hizli" },
  ],

  // ==========================================
  // KONU 2: ÇARPMA & BÖLME (8 alt dal)
  // ==========================================
  2: [

    // ALT DAL 1: TEK BASAMAKLI ÇARPMA
    { id: "t2_001", s: "{a} × {b} = ?", c: "{a}*{b}", v: {a:[1,10], b:[1,10]}, z:"kolay", alt:"duz_carpma" },
    { id: "t2_002", s: "{a} × {b} = ?", c: "{a}*{b}", v: {a:[2,9], b:[2,9]}, z:"kolay", alt:"duz_carpma" },
    { id: "t2_003", s: "{a} × {b} = ?", c: "{a}*{b}", v: {a:[3,9], b:[11,19]}, z:"orta", alt:"duz_carpma" },
    { id: "t2_004", s: "{a} × {b} = ?", c: "{a}*{b}", v: {a:[11,25], b:[2,9]}, z:"orta", alt:"duz_carpma" },
    { id: "t2_005", s: "{a} × {b} = ?", c: "{a}*{b}", v: {a:[10,50], b:[10,30]}, z:"zor", alt:"duz_carpma" },

    // ALT DAL 2: TAM BÖLME (Kalansız)
    { id: "t2_010", s: "{a} ÷ {b} = ?", c: "{a}/{b}", v: {b:[2,6], a:["{b}*1","{b}*8"]}, z:"kolay", alt:"tam_bolme" },
    { id: "t2_011", s: "{a} ÷ {b} = ?", c: "{a}/{b}", v: {b:[3,9], a:["{b}*2","{b}*12"]}, z:"kolay", alt:"tam_bolme" },
    { id: "t2_012", s: "{a} ÷ {b} = ?", c: "{a}/{b}", v: {b:[4,9], a:["{b}*5","{b}*20"]}, z:"orta", alt:"tam_bolme" },
    { id: "t2_013", s: "{a} ÷ {b} = ?", c: "{a}/{b}", v: {b:[6,12], a:["{b}*3","{b}*25"]}, z:"orta", alt:"tam_bolme" },
    { id: "t2_014", s: "{a} ÷ {b} = ?", c: "{a}/{b}", v: {b:[7,15], a:["{b}*4","{b}*30"]}, z:"zor", alt:"tam_bolme" },

    // ALT DAL 3: ÜÇ SAYI ÇARPMA
    { id: "t2_020", s: "{a} × {b} × {c} = ?", c: "{a}*{b}*{c}", v: {a:[1,5], b:[1,5], c:[1,5]}, z:"kolay", alt:"uc_carpma" },
    { id: "t2_021", s: "{a} × {b} × {c} = ?", c: "{a}*{b}*{c}", v: {a:[2,6], b:[2,6], c:[2,6]}, z:"orta", alt:"uc_carpma" },
    { id: "t2_022", s: "{a} × {b} × {c} = ?", c: "{a}*{b}*{c}", v: {a:[2,8], b:[3,7], c:[2,5]}, z:"zor", alt:"uc_carpma" },

    // ALT DAL 4: KAT ALMA
    { id: "t2_030", s: "{a} sayısının {k} katı kaçtır?", c: "{a}*{k}", v: {a:[3,15], k:[2,5]}, z:"kolay", alt:"kat_alma" },
    { id: "t2_031", s: "{a} sayısının {k} katı kaçtır?", c: "{a}*{k}", v: {a:[10,50], k:[3,7]}, z:"orta", alt:"kat_alma" },
    { id: "t2_032", s: "{a} sayısının {k} katının {f} fazlası kaçtır?", c: "{a}*{k}+{f}", v: {a:[3,12], k:[2,5], f:[2,15]}, z:"orta", alt:"kat_alma" },
    { id: "t2_033", s: "{a} sayısının {k} katının {f} eksiği kaçtır?", c: "{a}*{k}-{f}", v: {a:[5,15], k:[2,5], f:[1,"{a}*{k}-1"]}, z:"orta", alt:"kat_alma", kural:"f<a*k" },
    { id: "t2_034", s: "{a} sayısının yarısının {k} katı kaçtır?", c: "({a}/2)*{k}", v: {a:[4,40,"cift"], k:[2,5]}, z:"zor", alt:"kat_alma" },
    { id: "t2_035", s: "{a} sayısının {k1} katı ile {k2} katının toplamı kaçtır?", c: "{a}*{k1}+{a}*{k2}", v: {a:[2,10], k1:[2,4], k2:[3,5]}, z:"zor", alt:"kat_alma" },

    // ALT DAL 5: VERİLMEYEN
    { id: "t2_040", s: "Hangi sayının {k} katı {s} eder?", c: "{s}/{k}", v: {k:[2,6], s:["{k}*2","{k}*20"]}, z:"kolay", alt:"verilmeyen" },
    { id: "t2_041", s: "Hangi sayının {k} katı {s} eder?", c: "{s}/{k}", v: {k:[3,9], s:["{k}*3","{k}*30"]}, z:"orta", alt:"verilmeyen" },
    { id: "t2_042", s: "? × {a} = {s} ise ? kaçtır?", c: "{s}/{a}", v: {a:[2,10], s:["{a}*2","{a}*20"]}, z:"kolay", alt:"verilmeyen" },
    { id: "t2_043", s: "{a} × ? = {s} ise ? kaçtır?", c: "{s}/{a}", v: {a:[3,12], s:["{a}*2","{a}*25"]}, z:"orta", alt:"verilmeyen" },
    { id: "t2_044", s: "Hangi sayının {k1} katı ile {k2} katının toplamı {s} eder?", c: "{s}/({k1}+{k2})", v: {k1:[2,4], k2:[3,5], s:["({k1}+{k2})*2","({k1}+{k2})*20"]}, z:"zor", alt:"verilmeyen", kural:"k1!=k2" },
    { id: "t2_045", s: "Hangi sayının {k1} katı, {k2} katından {f} fazladır?", c: "{f}/({k1}-{k2})", v: {k1:[3,6], k2:[1,"{k1}-1"], f:["({k1}-{k2})*1","({k1}-{k2})*15"]}, z:"zor", alt:"verilmeyen", kural:"k1>k2" },

    // ALT DAL 6: PROBLEM
    { id: "t2_050", s: "Tanesi {a} TL olan kalemlerden {b} tane alan kaç TL öder?", c: "{a}*{b}", v: {a:[3,15], b:[2,10]}, z:"kolay", alt:"problem" },
    { id: "t2_051", s: "{a} kişi, {b} TL'yi eşit paylaşırsa kişi başı kaç TL düşer?", c: "{b}/{a}", v: {a:[2,8], b:["{a}*5","{a}*50"]}, z:"kolay", alt:"problem" },
    { id: "t2_052", s: "Bir sınıfta {a} sıra, her sırada {b} öğrenci var. {c} öğrenci gelmediğine göre sınıfta kaç öğrenci var?", c: "{a}*{b}-{c}", v: {a:[4,10], b:[2,4], c:[1,"{a}*{b}-1"]}, z:"orta", alt:"problem", kural:"c<a*b" },
    { id: "t2_053", s: "Her gün {a} sayfa kitap okuyan biri {b} günde kaç sayfa okur?", c: "{a}*{b}", v: {a:[10,40], b:[3,10]}, z:"kolay", alt:"problem" },
    { id: "t2_054", s: "{a} TL'ye alınan {b} ürünün tanesi kaç TL'dir?", c: "{a}/{b}", v: {b:[2,8], a:["{b}*5","{b}*100"]}, z:"orta", alt:"problem" },
    { id: "t2_055", s: "Bir çiftlikte {a} koyun ve {b} tavuk var. Toplam ayak sayısı kaçtır?", c: "{a}*4+{b}*2", v: {a:[3,15], b:[5,20]}, z:"orta", alt:"problem" },
    { id: "t2_056", s: "Tanesi {a} TL olan {b} ürün ve tanesi {c} TL olan {d} ürün alan toplam kaç TL öder?", c: "{a}*{b}+{c}*{d}", v: {a:[5,30], b:[1,5], c:[10,50], d:[1,5]}, z:"zor", alt:"problem" },

    // ALT DAL 7: MANTIK & YENİ NESİL
    { id: "t2_060", s: "{a} sayısı {b} sayısının kaç katıdır?", c: "{a}/{b}", v: {b:[2,9], a:["{b}*2","{b}*12"]}, z:"orta", alt:"mantik" },
    { id: "t2_061", s: "Bir sayının {k1} katı {a} ise, aynı sayının {k2} katı kaçtır?", c: "({a}/{k1})*{k2}", v: {k1:[2,5], a:["{k1}*2","{k1}*30"], k2:[2,6]}, z:"zor", alt:"mantik", kural:"k1!=k2" },
    { id: "t2_062", s: "{a} × {b} = {c} ise {a} × ({b}+2) kaçtır?", c: "{c}+2*{a}", v: {a:[3,10], b:[2,8], c:"{a}*{b}"}, z:"zor", alt:"mantik" },
    { id: "t2_063", s: "Bir sayıyı {a} ile çarpıp {b} ekleyince {c} oluyor. Bu sayı kaçtır?", c: "({c}-{b})/{a}", v: {a:[2,5], b:[3,15], c:["{a}*3+{b}","{a}*20+{b}"]}, z:"zor", alt:"mantik" },
    { id: "t2_064", s: "Bir terzi {a} metre kumaştan {b} gömlek dikiyor. {c} gömlek için kaç metre kumaş gerekir?", c: "({a}/{b})*{c}", v: {b:[2,6], a:["{b}*2","{b}*8"], c:[1,8]}, z:"zor", alt:"yeni_nesil" },

    // ALT DAL 8: HIZLI İŞLEM
    { id: "t2_070", s: "{a} × 10 = ?", c: "{a}*10", v: {a:[1,50]}, z:"kolay", alt:"hizli" },
    { id: "t2_071", s: "{a} × 100 = ?", c: "{a}*100", v: {a:[1,30]}, z:"kolay", alt:"hizli" },
    { id: "t2_072", s: "{a} ÷ 10 = ?", c: "{a}/10", v: {a:[10,500,"5kati"]}, z:"kolay", alt:"hizli" },
    { id: "t2_073", s: "{a} × 5 = ? (İpucu: 10 ile çarpıp 2'ye böl)", c: "{a}*5", v: {a:[2,20,"cift"]}, z:"kolay", alt:"hizli" },
    { id: "t2_074", s: "{a} × 9 = ? (İpucu: 10 ile çarpıp 1 çıkar)", c: "{a}*9", v: {a:[2,15]}, z:"orta", alt:"hizli" },
  ],

// ==========================================
// KONU 3: SAYILAR (TEMEL KAVRAMLAR)
// ==========================================
3: [

    // ALT DAL 1: TEK & ÇİFT > SORGULAMA
    { id: "t3_001", s: "{a} sayısı tek midir çift midir?", c: "{a}%2==0?'Çift':'Tek'", v: {a:[1,99]}, z:"kolay", alt:"tek_cift", inputType:"choice", choices:["Tek","Çift"] },
    { id: "t3_002", s: "{a} sayısı tek midir çift midir?", c: "{a}%2==0?'Çift':'Tek'", v: {a:[100,999]}, z:"kolay", alt:"tek_cift", inputType:"choice", choices:["Tek","Çift"] },
    { id: "t3_003", s: "Hangisi tektir?", c: "{a}%2==1?'{a}':'{b}'", v: {a:[1,20,"tek"], b:[2,20,"cift"]}, z:"kolay", alt:"tek_cift", inputType:"choice", choices:["{a}","{b}","İkisi de","Hiçbiri"] },

    // ALT DAL 2: TEK & ÇİFT > KURALLAR
    { id: "t3_004", s: "İki tek sayının toplamı nasıl bir sayıdır?", c: "Çift", v: {}, z:"kolay", alt:"tek_cift_kural", inputType:"choice", choices:["Çift","Tek","Bilinemez","Değişir"] },
    { id: "t3_005", s: "Bir tek ve bir çift sayının toplamı nasıldır?", c: "Tek", v: {}, z:"kolay", alt:"tek_cift_kural", inputType:"choice", choices:["Tek","Çift","Bilinemez","Değişir"] },
    { id: "t3_006", s: "İki çift sayının çarpımı nasıldır?", c: "Çift", v: {}, z:"kolay", alt:"tek_cift_kural", inputType:"choice", choices:["Çift","Tek","Bilinemez","Değişir"] },
    { id: "t3_007", s: "{a} tek, {b} çift ise {a}+{b} nasıldır?", c: "Tek", v: {a:[1,9,"tek"], b:[2,10,"cift"]}, z:"orta", alt:"tek_cift_kural", inputType:"choice", choices:["Tek","Çift"] },
    { id: "t3_008", s: "{a} ve {b} tek sayı ise {a}×{b} nasıldır?", c: "Tek", v: {a:[1,9,"tek"], b:[1,9,"tek"]}, z:"orta", alt:"tek_cift_kural", inputType:"choice", choices:["Tek","Çift"] },

    // ALT DAL 3: BASAMAK DEĞERİ
    { id: "t3_010", s: "{a} sayısının onlar basamağı kaçtır?", c: "Math.floor({a}/10)%10", v: {a:[10,999]}, z:"kolay", alt:"basamak" },
    { id: "t3_011", s: "{a} sayısının yüzler basamağı kaçtır?", c: "Math.floor({a}/100)", v: {a:[100,999]}, z:"kolay", alt:"basamak" },
    { id: "t3_012", s: "{a} sayısının birler basamağı kaçtır?", c: "{a}%10", v: {a:[10,999]}, z:"kolay", alt:"basamak" },
    { id: "t3_013", s: "{a} sayısının basamak değerleri toplamı kaçtır?", c: "basamakDegerToplam({a})", v: {a:[10,999]}, z:"orta", alt:"basamak" },
    { id: "t3_014", s: "{a} sayısının rakamları toplamı kaçtır?", c: "rakamToplam({a})", v: {a:[10,999]}, z:"kolay", alt:"basamak" },
    { id: "t3_015", s: "{a} sayısının onlar ve birler basamağı yer değiştirirse yeni sayı kaç olur?", c: "basamakDegistir({a})", v: {a:[12,98]}, z:"orta", alt:"basamak", kural:"a%10!=0" },

    // ALT DAL 4: SAYI TÜRLERİ
    { id: "t3_020", s: "En küçük doğal sayı kaçtır?", c: "0", v: {}, z:"kolay", alt:"sayi_turleri", inputType:"choice", choices:["0","1","-1","2"] },
    { id: "t3_021", s: "En küçük pozitif tam sayı kaçtır?", c: "1", v: {}, z:"kolay", alt:"sayi_turleri", inputType:"choice", choices:["1","0","-1","2"] },
    { id: "t3_022", s: "En büyük negatif tam sayı kaçtır?", c: "-1", v: {}, z:"kolay", alt:"sayi_turleri", inputType:"choice", choices:["-1","0","-2","-∞"] },
    { id: "t3_023", s: "İki basamaklı en küçük tam sayı kaçtır?", c: "-99", v: {}, z:"orta", alt:"sayi_turleri", inputType:"choice", choices:["-99","10","-10","-90"] },
    { id: "t3_024", s: "{a} hangi sayı kümesine aittir?", c: "{a}<0?'Negatif':({a}>0?'Pozitif':'Sıfır')", v: {a:[-20,20]}, z:"kolay", alt:"sayi_turleri", inputType:"choice", choices:["Pozitif","Negatif","Sıfır","Doğal"], kural:"a!=0" },

    // ALT DAL 5: SIRALAMA
    { id: "t3_030", s: "{a}, {b}, {c} sayılarından en küçüğü kaçtır?", c: "Math.min({a},{b},{c})", v: {a:[5,50], b:[5,50], c:[5,50]}, z:"kolay", alt:"siralama", kural:"a!=b&&b!=c&&a!=c" },
    { id: "t3_031", s: "{a}, {b}, {c} sayılarından en büyüğü kaçtır?", c: "Math.max({a},{b},{c})", v: {a:[10,100], b:[10,100], c:[10,100]}, z:"kolay", alt:"siralama" },
    { id: "t3_032", s: "İki basamaklı en büyük sayı kaçtır?", c: "99", v: {}, z:"kolay", alt:"siralama" },
    { id: "t3_033", s: "{b} basamaklı en büyük sayı kaçtır?", c: "Math.pow(10,{b})-1", v: {b:[2,5]}, z:"kolay", alt:"siralama" },
    { id: "t3_034", s: "{b} basamaklı en küçük sayı kaçtır?", c: "Math.pow(10,{b}-1)", v: {b:[2,5]}, z:"orta", alt:"siralama" },
    { id: "t3_035", s: "Rakamları farklı {b} basamaklı en büyük sayı kaçtır?", c: "{b}==2?98:{b}==3?987:{b}==4?9876:98765", v: {b:[2,5]}, z:"orta", alt:"siralama" },
    { id: "t3_036", s: "Rakamları farklı {b} basamaklı en küçük sayı kaçtır?", c: "{b}==2?10:{b}==3?102:{b}==4?1023:10234", v: {b:[2,5]}, z:"zor", alt:"siralama" },

    // ALT DAL 6: PROBLEM
    { id: "t3_040", s: "AB iki basamaklı sayısında A+B={t} ise AB en fazla kaçtır?", c: "{t}<=9?{t}*10:90+({t}-9)", v: {t:[3,15]}, z:"orta", alt:"problem" },
    { id: "t3_041", s: "AB iki basamaklı sayısında A={a} ve B={b} ise AB kaçtır?", c: "{a}*10+{b}", v: {a:[1,9], b:[0,9]}, z:"kolay", alt:"problem" },
    { id: "t3_042", s: "Rakamları toplamı {t} olan iki basamaklı kaç sayı vardır?", c: "{t}<=9?{t}:19-{t}", v: {t:[2,15]}, z:"zor", alt:"problem" },
    { id: "t3_043", s: "{a} sayısından bir önce ve bir sonra gelen sayıların toplamı kaçtır?", c: "2*{a}", v: {a:[5,50]}, z:"orta", alt:"problem" },
    { id: "t3_044", s: "İki sayıdan biri diğerinden {f} fazla ve toplamları {t} ise büyük sayı kaçtır?", c: "({t}+{f})/2", v: {f:[2,20,"cift"], t:["{f}+20","{f}+80","cift"]}, z:"orta", alt:"problem" },

    // ALT DAL 7: MANTIK & YENİ NESİL
    { id: "t3_050", s: "Ardışık {n} tam sayının toplamı {s} ise en küçük sayı kaçtır?", c: "({s}-({n}*({n}-1)/2))/{n}", v: {n:[3,5], s:["{n}*5","{n}*50"]}, z:"zor", alt:"mantik" },
    { id: "t3_051", s: "İki basamaklı bir sayının rakamları toplamı {t}'dir. Bu sayı en az kaçtır?", c: "{t}<=9?{t}+9:10*{t}-81", v: {t:[2,15]}, z:"orta", alt:"mantik" },
    { id: "t3_052", s: "{a} sayısının {b} katı bir tek sayı ise {a} nasıl bir sayıdır?", c: "{b}%2==0?'Bilinemez':'Tek'", v: {a:[1,19,"tek"], b:[3,7,"tek"]}, z:"zor", alt:"mantik", inputType:"choice", choices:["Tek","Çift","Bilinemez","Değişir"] },
    { id: "t3_053", s: "Bir ABC üç basamaklı sayısında A+B+C={t} ise bu sayı en az kaçtır?", c: "function(){var t={t};var A=Math.max(1,t-18);var r=t-A;var B=Math.max(0,r-9);var C=r-B;return 100*A+10*B+C}()", v: {t:[2,20]}, z:"zor", alt:"yeni_nesil" },
    { id: "t3_054", s: "{a} sayfalık bir kitabı numaralandırmak için kaç rakam kullanılır?", c: "function(){var a={a};if(a<10)return a;if(a<100)return 9+(a-9)*2;return 9+180+(a-99)*3}()", v: {a:[5,150]}, z:"zor", alt:"yeni_nesil" },
],

// ==========================================
// KONU 4: BÖLÜNEBİLME KURALLARI
// ==========================================
4: [

    // ALT DAL 1: 2 İLE BÖLÜNEBİLME
    { id: "t4_001", s: "{a} sayısı 2 ile bölünebilir mi?", c: "{a}%2==0?'Evet':'Hayır'", v: {a:[10,999]}, z:"kolay", alt:"iki_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t4_002", s: "{a} sayısı 2 ile bölündüğünde kalan kaçtır?", c: "{a}%2", v: {a:[10,999]}, z:"kolay", alt:"iki_bolunebilme" },
    { id: "t4_003", s: "Aşağıdakilerden hangisi 2 ile tam bölünür?", c: "{cift}", v: {cift:[2,100,"cift"], tek:[1,99,"tek"]}, z:"kolay", alt:"iki_bolunebilme", inputType:"choice", choices:["{cift}","{tek}","İkisi de","Hiçbiri"] },
    { id: "t4_004", s: "İki basamaklı en büyük çift sayı kaçtır?", c: "98", v: {}, z:"kolay", alt:"iki_bolunebilme" },

    // ALT DAL 2: 3 İLE BÖLÜNEBİLME
    { id: "t4_010", s: "{a} sayısı 3 ile bölünebilir mi?", c: "{a}%3==0?'Evet':'Hayır'", v: {a:[10,999]}, z:"kolay", alt:"uc_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t4_011", s: "{a} sayısının 3 ile bölümünden kalan kaçtır?", c: "{a}%3", v: {a:[10,999]}, z:"orta", alt:"uc_bolunebilme" },
    { id: "t4_012", s: "Rakamları toplamı {t} olan bir sayı 3 ile bölünebilir mi?", c: "{t}%3==0?'Evet':'Hayır'", v: {t:[3,30]}, z:"orta", alt:"uc_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t4_013", s: "İki basamaklı 3 ile bölünebilen en büyük sayı kaçtır?", c: "99", v: {}, z:"kolay", alt:"uc_bolunebilme" },
    { id: "t4_014", s: "İki basamaklı 3 ile bölünebilen en küçük sayı kaçtır?", c: "12", v: {}, z:"orta", alt:"uc_bolunebilme" },

    // ALT DAL 3: 5 İLE BÖLÜNEBİLME
    { id: "t4_020", s: "{a} sayısı 5 ile bölünebilir mi?", c: "{a}%5==0?'Evet':'Hayır'", v: {a:[10,999]}, z:"kolay", alt:"bes_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t4_021", s: "{a} sayısının 5 ile bölümünden kalan kaçtır?", c: "{a}%5", v: {a:[10,999]}, z:"kolay", alt:"bes_bolunebilme" },
    { id: "t4_022", s: "Son rakamı {r} olan bir sayı 5 ile bölünebilir mi?", c: "{r}==0||{r}==5?'Evet':'Hayır'", v: {r:[0,9]}, z:"kolay", alt:"bes_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t4_023", s: "İki basamaklı 5 ile bölünebilen kaç sayı vardır?", c: "18", v: {}, z:"orta", alt:"bes_bolunebilme", inputType:"choice", choices:["18","19","20","17"] },

    // ALT DAL 4: DİĞER BÖLÜNEBİLME (4, 6, 9, 10)
    { id: "t4_030", s: "{a} sayısı 4 ile bölünebilir mi?", c: "{a}%4==0?'Evet':'Hayır'", v: {a:[100,999]}, z:"orta", alt:"diger_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t4_031", s: "{a} sayısı 9 ile bölünebilir mi?", c: "{a}%9==0?'Evet':'Hayır'", v: {a:[100,999]}, z:"orta", alt:"diger_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t4_032", s: "{a} sayısının 9 ile bölümünden kalan kaçtır?", c: "{a}%9", v: {a:[100,999]}, z:"orta", alt:"diger_bolunebilme" },
    { id: "t4_033", s: "{a} sayısı 10 ile bölünebilir mi?", c: "{a}%10==0?'Evet':'Hayır'", v: {a:[10,999]}, z:"kolay", alt:"diger_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t4_034", s: "{a} sayısı 6 ile bölünebilir mi? (2 ve 3'e bölünmeli)", c: "({a}%2==0&&{a}%3==0)?'Evet':'Hayır'", v: {a:[10,200]}, z:"zor", alt:"diger_bolunebilme", inputType:"choice", choices:["Evet","Hayır"] },

    // ALT DAL 5: KALAN BULMA & PROBLEM
    { id: "t4_040", s: "{a} sayısının {b} ile bölümünden kalan kaçtır?", c: "{a}%{b}", v: {a:[10,500], b:[2,9]}, z:"orta", alt:"kalan" },
    { id: "t4_041", s: "{a} sayısının {b} ile bölümünden bölüm {c} ise kalan kaçtır?", c: "{a}-{b}*{c}", v: {b:[3,9], c:[2,10], a:["{b}*{c}+1","{b}*{c}+{b}-1"]}, z:"zor", alt:"kalan", kural:"a>b*c" },
    { id: "t4_042", s: "Bir sayının 3 ile bölümünden kalan {k} ise bu sayının 5 fazlasının 3 ile bölümünden kalan kaçtır?", c: "({k}+5)%3", v: {k:[0,2]}, z:"zor", alt:"kalan" },
    { id: "t4_043", s: "Bir çiftlikte {a} yumurta 6'şarlı paketlenirse kaç yumurta artar?", c: "{a}%6", v: {a:[20,200]}, z:"orta", alt:"kalan" },

    // ALT DAL 6: MANTIK & RAKAM YERLEŞTİRME
    { id: "t4_050", s: "4A3B dört basamaklı sayısı 5 ile bölünebildiğine göre B kaçtır?", c: "0 veya 5", v: {}, z:"orta", alt:"rakam_yerlestirme", inputType:"choice", choices:["0 veya 5","0","5","2"] },
    { id: "t4_051", s: "2A5 üç basamaklı sayısı 3 ile bölünebildiğine göre A kaç olabilir?", c: "2,5,8", v: {}, z:"orta", alt:"rakam_yerlestirme", inputType:"choice", choices:["2,5,8","1,4,7","3,6,9","0,3,6"] },
    { id: "t4_052", s: "5A2B sayısı 4 ile bölünebildiğine göre B kaçtır? (Son iki rakam 4'ün katı)", c: "0,4,8", v: {}, z:"zor", alt:"rakam_yerlestirme", inputType:"choice", choices:["0,4,8","0,2,6","2,4,8","0,5"] },
    { id: "t4_053", s: "{a} basamaklı rakamları farklı 5 ile bölünebilen en büyük sayı kaçtır?", c: "{a}==2?95:{a}==3?985:{a}==4?9875:98765", v: {a:[2,5]}, z:"zor", alt:"rakam_yerlestirme" },
    { id: "t4_054", s: "Hem 3 hem 5 ile bölünebilen iki basamaklı en büyük sayı kaçtır?", c: "90", v: {}, z:"orta", alt:"rakam_yerlestirme" },
    { id: "t4_055", s: "Hem 2 hem 9 ile bölünebilen üç basamaklı en küçük sayı kaçtır?", c: "108", v: {}, z:"zor", alt:"rakam_yerlestirme" },
],

// ==========================================
// KONU 5: ASAL SAYILAR & ÇARPANLAR
// ==========================================
5: [

    // ALT DAL 1: ASAL SAYI TANIMI & KONTROL
    { id: "t5_001", s: "{a} asal sayı mıdır?", c: "isPrime({a})?'Evet':'Hayır'", v: {a:[2,50]}, z:"kolay", alt:"asal_tanim", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t5_002", s: "{a} asal sayı mıdır?", c: "isPrime({a})?'Evet':'Hayır'", v: {a:[51,100]}, z:"orta", alt:"asal_tanim", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t5_003", s: "En küçük asal sayı kaçtır?", c: "2", v: {}, z:"kolay", alt:"asal_tanim", inputType:"choice", choices:["2","1","3","0"] },
    { id: "t5_004", s: "Aşağıdakilerden hangisi asal sayıdır?", c: "{asal}", v: {asal:[2,50,"asal"], yanlis:[4,51]}, z:"kolay", alt:"asal_tanim", inputType:"choice", choices:["{asal}","{yanlis}","İkisi de","Hiçbiri"], kural:"!isPrime(yanlis)" },
    { id: "t5_005", s: "1 asal sayı mıdır?", c: "Hayır", v: {}, z:"kolay", alt:"asal_tanim", inputType:"choice", choices:["Hayır","Evet"] },
    { id: "t5_006", s: "Çift olan tek asal sayı kaçtır?", c: "2", v: {}, z:"kolay", alt:"asal_tanim", inputType:"choice", choices:["2","4","6","Hiçbiri"] },
    { id: "t5_007", s: "İki basamaklı en büyük asal sayı kaçtır?", c: "97", v: {}, z:"orta", alt:"asal_tanim", inputType:"choice", choices:["97","99","91","89"] },
    { id: "t5_008", s: "İki basamaklı en küçük asal sayı kaçtır?", c: "11", v: {}, z:"orta", alt:"asal_tanim" },

    // ALT DAL 2: ASAL ÇARPANLARA AYIRMA
    { id: "t5_010", s: "{a} sayısını asal çarpanlarına ayırın (En küçük asal çarpan kaçtır?)", c: "enKucukAsalCarpan({a})", v: {a:[12,60]}, z:"orta", alt:"asal_carpan" },
    { id: "t5_011", s: "{a} sayısının asal çarpanlarının toplamı kaçtır?", c: "asalCarpanToplam({a})", v: {a:[12,72]}, z:"orta", alt:"asal_carpan" },
    { id: "t5_012", s: "{a} sayısının kaç tane asal çarpanı vardır?", c: "asalCarpanSayisi({a})", v: {a:[18,100]}, z:"orta", alt:"asal_carpan" },
    { id: "t5_013", s: "{a} sayısının asal çarpanlarının çarpımı kaçtır?", c: "asalCarpanCarpim({a})", v: {a:[12,60]}, z:"zor", alt:"asal_carpan" },
    { id: "t5_014", s: "{a} = 2^x * 3^y ise x+y kaçtır?", c: "function(){var n={a};var x=0;while(n%2==0){x++;n/=2}var y=0;while(n%3==0){y++;n/=3}return x+y}()", v: {a:[6,72]}, z:"zor", alt:"asal_carpan" },

    // ALT DAL 3: ARALARINDA ASAL
    { id: "t5_020", s: "{a} ile {b} aralarında asal mıdır?", c: "ebob({a},{b})==1?'Evet':'Hayır'", v: {a:[3,15], b:[4,16]}, z:"orta", alt:"aralarinda_asal", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t5_021", s: "{a} ile hangisi aralarında asaldır?", c: "{dogru}", v: {a:[5,12], dogru:["{a}+1","{a}+3"], yanlis:["{a}*2","{a}+2"]}, z:"orta", alt:"aralarinda_asal", inputType:"choice", choices:["{dogru}","{yanlis}","İkisi de","Hiçbiri"], kural:"ebob(a,dogru)==1&&ebob(a,yanlis)!=1" },
    { id: "t5_022", s: "1 ile {a} aralarında asal mıdır?", c: "Evet", v: {a:[2,20]}, z:"kolay", alt:"aralarinda_asal", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t5_023", s: "Aralarında asal iki sayının EBOB'u kaçtır?", c: "1", v: {}, z:"kolay", alt:"aralarinda_asal", inputType:"choice", choices:["1","0","Sayıların çarpımı","Bilinemez"] },

    // ALT DAL 4: ASAL SAYI PROBLEMLERİ
    { id: "t5_030", s: "{a} ile {b} arasında kaç asal sayı vardır?", c: "aralikAsalSay({a},{b})", v: {a:[1,10], b:[10,30]}, z:"orta", alt:"asal_problem", kural:"b>a" },
    { id: "t5_031", s: "İki asal sayının toplamı {s} ise çarpımları en az kaçtır?", c: "function(){var s={s};for(var a=2;a<=s/2;a++){if(isPrime(a)&&isPrime(s-a))return a*(s-a)}return 0}()", v: {s:[5,20]}, z:"zor", alt:"asal_problem" },
    { id: "t5_032", s: "x ve y asal sayı, x+y={s} ise x kaç olabilir? (En küçük)", c: "function(){var s={s};for(var a=2;a<=s/2;a++){if(isPrime(a)&&isPrime(s-a))return a}return 0}()", v: {s:[5,20]}, z:"zor", alt:"asal_problem" },

    // ALT DAL 5: MANTIK
    { id: "t5_040", s: "İki asal sayının çarpımı {c} ise toplamları kaçtır?", c: "asalCarpanToplam({c})", v: {c:[6,35]}, z:"zor", alt:"asal_mantik" },
    { id: "t5_041", s: "n bir doğal sayı, n^2+n+{a} ifadesi asal olabilir mi? (n={n} için)", c: "isPrime({n}*{n}+{n}+{a})?'Evet':'Hayır'", v: {a:[1,41], n:[1,5]}, z:"zor", alt:"asal_mantik", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t5_042", s: "Ardışık iki sayı her zaman aralarında asal mıdır?", c: "Evet", v: {}, z:"orta", alt:"asal_mantik", inputType:"choice", choices:["Evet","Hayır","Bazen","Bilinemez"] },
],

// ==========================================
// KONU 6: EKOK & EBOB
// ==========================================
6: [

    // ALT DAL 1: EBOB BULMA
    { id: "t6_001", s: "{a} ve {b} sayılarının EBOB'u kaçtır?", c: "ebob({a},{b})", v: {a:[12,48], b:[18,72]}, z:"kolay", alt:"ebob" },
    { id: "t6_002", s: "{a} ve {b} sayılarının EBOB'u kaçtır?", c: "ebob({a},{b})", v: {a:[24,96], b:[36,120]}, z:"orta", alt:"ebob" },
    { id: "t6_003", s: "{a}, {b} ve {c} sayılarının EBOB'u kaçtır?", c: "ebob(ebob({a},{b}),{c})", v: {a:[12,36], b:[18,48], c:[6,24]}, z:"orta", alt:"ebob" },
    { id: "t6_004", s: "Aralarında asal iki sayının EBOB'u kaçtır?", c: "1", v: {}, z:"kolay", alt:"ebob", inputType:"choice", choices:["1","0","Sayıların çarpımı","Bilinemez"] },

    // ALT DAL 2: EKOK BULMA
    { id: "t6_010", s: "{a} ve {b} sayılarının EKOK'u kaçtır?", c: "({a}*{b})/ebob({a},{b})", v: {a:[4,15], b:[6,20]}, z:"kolay", alt:"ekok" },
    { id: "t6_011", s: "{a} ve {b} sayılarının EKOK'u kaçtır?", c: "({a}*{b})/ebob({a},{b})", v: {a:[8,30], b:[12,45]}, z:"orta", alt:"ekok" },
    { id: "t6_012", s: "{a}, {b} ve {c} sayılarının EKOK'u kaçtır?", c: "function(){var a={a},b={b},c={c};var e1=(a*b)/ebob(a,b);return (e1*c)/ebob(e1,c)}()", v: {a:[4,12], b:[6,18], c:[8,24]}, z:"zor", alt:"ekok" },
    { id: "t6_013", s: "Biri diğerinin katı olan iki sayının EKOK'u hangisidir?", c: "Büyük sayı", v: {}, z:"kolay", alt:"ekok", inputType:"choice", choices:["Büyük sayı","Küçük sayı","Çarpımları","Toplamları"] },

    // ALT DAL 3: EBOB-EKOK İLİŞKİSİ
    { id: "t6_020", s: "EBOB'u {e}, EKOK'u {k} olan iki sayının çarpımı kaçtır?", c: "{e}*{k}", v: {e:[2,8], k:[12,72]}, z:"kolay", alt:"ebob_ekok" },
    { id: "t6_021", s: "Çarpımları {c}, EBOB'ları {e} olan iki sayının EKOK'u kaçtır?", c: "{c}/{e}", v: {e:[2,6], c:["{e}*10","{e}*50"]}, z:"orta", alt:"ebob_ekok" },
    { id: "t6_022", s: "İki sayının EBOB'u {e}, EKOK'u {k} ve sayılardan biri {a} ise diğeri kaçtır?", c: "({e}*{k})/{a}", v: {e:[2,6], k:[24,72], a:["{e}*2","{e}*6"]}, z:"zor", alt:"ebob_ekok", kural:"(e*k)%a==0" },

    // ALT DAL 4: EBOB-EKOK PROBLEMLERİ
    { id: "t6_030", s: "{a} ve {b} litrelik iki kova ile en büyük hacimli kaç litrelik kap tam doldurulur? (EBOB)", c: "ebob({a},{b})", v: {a:[12,60], b:[18,48]}, z:"orta", alt:"problem" },
    { id: "t6_031", s: "{a} kg ve {b} kg'lık çuvallar eşit büyüklükte paketlere konacak. En az kaç paket gerekir?", c: "({a}+{b})/ebob({a},{b})", v: {a:[12,60], b:[18,48]}, z:"zor", alt:"problem" },
    { id: "t6_032", s: "İki zil sırasıyla {a} ve {b} dakikada bir çalıyor. Birlikte çaldıktan kaç dakika sonra tekrar birlikte çalarlar? (EKOK)", c: "({a}*{b})/ebob({a},{b})", v: {a:[6,20], b:[8,30]}, z:"orta", alt:"problem" },
    { id: "t6_033", s: "Boyutları {a} ve {b} cm olan dikdörtgen zemine en az kaç kare fayans döşenir?", c: "({a}*{b})/(ebob({a},{b})*ebob({a},{b}))", v: {a:[40,120], b:[30,80]}, z:"zor", alt:"problem" },
    { id: "t6_034", s: "{a}, {b} ve {c} sayılarını bölen en büyük sayı kaçtır?", c: "ebob(ebob({a},{b}),{c})", v: {a:[24,72], b:[36,96], c:[12,60]}, z:"orta", alt:"problem" },

    // ALT DAL 5: MANTIK
    { id: "t6_040", s: "EBOB(a,b)={e} ve a+b={t} ise a*b en az kaçtır?", c: "{e}*({t}-{e})", v: {e:[2,6], t:[14,30]}, z:"zor", alt:"mantik", kural:"t>e" },
    { id: "t6_041", s: "a ve b doğal sayı, a/b = {pay}/{payda} (sadeleşmiş) ise EBOB(a,b) en az kaçtır?", c: "1", v: {pay:[2,5], payda:[3,7]}, z:"orta", alt:"mantik", kural:"ebob(pay,payda)==1" },
    { id: "t6_042", s: "İki sayının EBOB'u ile EKOK'unun toplamı {t} ise sayıların çarpımı en çok kaç olabilir?", c: "Math.floor(Math.pow({t}/2,2))", v: {t:[10,50]}, z:"zor", alt:"mantik" },
],

// ==========================================
// KONU 7: KESİRLER & RASYONEL SAYILAR
// ==========================================
7: [

    // ALT DAL 1: KESİR KAVRAMI
    { id: "t7_001", s: "{a}/{b} kesrinin payı kaçtır?", c: "{a}", v: {a:[1,9], b:[2,9]}, z:"kolay", alt:"kesir_kavram", kural:"a<b" },
    { id: "t7_002", s: "{a}/{b} kesrinin paydası kaçtır?", c: "{b}", v: {a:[1,9], b:[2,9]}, z:"kolay", alt:"kesir_kavram" },
    { id: "t7_003", s: "Bir bütünün {a}/{b}'i {c} ise bütün kaçtır?", c: "({c}*{b})/{a}", v: {a:[1,5], b:[2,8], c:["{a}*2","{a}*10"]}, z:"orta", alt:"kesir_kavram", kural:"a<b" },
    { id: "t7_004", s: "{a}/{b} kesri hangi tam sayıya eşittir?", c: "Math.floor({a}/{b})=={a}/{b}?{a}/{b}:'Tam sayı değil'", v: {b:[2,6], a:["{b}","{b}*5"]}, z:"kolay", alt:"kesir_kavram" },

    // ALT DAL 2: DENK KESİRLER
    { id: "t7_010", s: "{a}/{b} kesrine denk bir kesir yazın (payda {d} olacak)", c: "{a}*({d}/{b})/{d}", v: {a:[1,3], b:[2,5], d:["{b}*2","{b}*4"]}, z:"orta", alt:"denk_kesir" },
    { id: "t7_011", s: "{a}/{b} = ?/10 ise ? kaçtır?", c: "({a}*10)/{b}", v: {b:[2,5], a:[1,"{b}-1"]}, z:"orta", alt:"denk_kesir", kural:"10%b==0" },
    { id: "t7_012", s: "Hangisi {a}/{b} kesrine denktir?", c: "{a}*2/{b}*2", v: {a:[1,4], b:[2,6]}, z:"kolay", alt:"denk_kesir", inputType:"choice", choices:["{a}×2/{b}×2","{a}+1/{b}+1","{a}×{b}/{b}×{a}","{a}-1/{b}-1"] },

    // ALT DAL 3: SADELEŞTİRME & GENİŞLETME
    { id: "t7_020", s: "{a}/{b} kesrini sadeleştirin", c: "sadelestir({a},{b})", v: {a:[2,8], b:[4,16]}, z:"kolay", alt:"sadelestirme", kural:"ebob(a,b)>1" },
    { id: "t7_021", s: "{a}/{b} kesrini sadeleştirin", c: "sadelestir({a},{b})", v: {a:[6,18], b:[12,36]}, z:"orta", alt:"sadelestirme", kural:"ebob(a,b)>1" },
    { id: "t7_022", s: "{a}/{b} kesri sadeleşmiş midir?", c: "ebob({a},{b})==1?'Evet':'Hayır'", v: {a:[2,8], b:[3,9]}, z:"kolay", alt:"sadelestirme", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t7_023", s: "{a}/{b} kesrini {k} ile genişletin", c: "{a}*{k}/{b}*{k}", v: {a:[1,4], b:[2,6], k:[2,5]}, z:"kolay", alt:"sadelestirme" },

    // ALT DAL 4: KESİR İŞLEMLERİ > TOPLAMA & ÇIKARMA
    { id: "t7_030", s: "{a}/{b} + {c}/{b} = ?", c: "{a+c}/{b}", v: {a:[1,4], b:[3,8], c:[1,4]}, z:"kolay", alt:"kesir_toplama" },
    { id: "t7_031", s: "{a}/{b} + {c}/{d} = ?", c: "({a*d+c*b})/({b*d})", v: {a:[1,5], b:[2,6], c:[1,5], d:[3,7]}, z:"orta", alt:"kesir_toplama", kural:"b!=d" },
    { id: "t7_032", s: "{a}/{b} - {c}/{d} = ?", c: "({a*d-c*b})/({b*d})", v: {a:[2,6], b:[2,6], c:[1,4], d:[3,7]}, z:"orta", alt:"kesir_toplama", kural:"b!=d&&a*d>c*b" },
    { id: "t7_033", s: "1/{a} + 1/{b} = ?", c: "({a+b})/({a*b})", v: {a:[2,6], b:[3,8]}, z:"orta", alt:"kesir_toplama", kural:"a!=b" },

    // ALT DAL 5: KESİR İŞLEMLERİ > ÇARPMA & BÖLME
    { id: "t7_040", s: "{a}/{b} × {c}/{d} = ?", c: "({a*c})/({b*d})", v: {a:[1,4], b:[2,5], c:[1,4], d:[2,5]}, z:"kolay", alt:"kesir_carpma" },
    { id: "t7_041", s: "{a}/{b} ÷ {c}/{d} = ?", c: "({a*d})/({b*c})", v: {a:[1,4], b:[2,5], c:[1,4], d:[2,5]}, z:"orta", alt:"kesir_carpma" },
    { id: "t7_042", s: "{a} × 1/{b} = ?", c: "{a}/{b}", v: {a:[2,8], b:[2,6]}, z:"kolay", alt:"kesir_carpma" },
    { id: "t7_043", s: "{a} ÷ 1/{b} = ?", c: "{a}*{b}", v: {a:[2,8], b:[2,6]}, z:"orta", alt:"kesir_carpma" },

    // ALT DAL 6: SIRALAMA
    { id: "t7_050", s: "{a}/{b} mi büyük {c}/{d} mi?", c: "{a*d}>{c*b}?'{a}/{b}':'{c}/{d}'", v: {a:[1,5], b:[2,7], c:[1,5], d:[2,7]}, z:"orta", alt:"siralama", kural:"(a/b)!=(c/d)" },
    { id: "t7_051", s: "{a}/{b}, {c}/{d}, 1/2 kesirlerini büyükten küçüğe sırala (En büyük hangisi?)", c: "function(){var k1={a}/{b},k2={c}/{d},k3=1/2;var m=Math.max(k1,k2,k3);if(m==k1)return '{a}/{b}';if(m==k2)return '{c}/{d}';return '1/2'}()", v: {a:[1,5], b:[2,7], c:[1,5], d:[2,7]}, z:"zor", alt:"siralama" },

    // ALT DAL 7: PROBLEM
    { id: "t7_060", s: "Bir pastanın önce {a}/{b}'ini, sonra {c}/{d}'ünü yedim. Toplam ne kadarını yedim?", c: "({a*d+c*b})/({b*d})", v: {a:[1,3], b:[3,6], c:[1,3], d:[3,6]}, z:"orta", alt:"problem", kural:"a/b+c/d<1" },
    { id: "t7_061", s: "{a} TL paranın {b}/{c}'ini harcadım. Kaç TL kaldı?", c: "{a}-({a}*{b}/{c})", v: {a:[20,100], b:[1,"{c}-1"], c:[3,8]}, z:"orta", alt:"problem", kural:"b<c" },
    { id: "t7_062", s: "Bir sınıfın {a}/{b}'i kız, {c} kişi erkek ise sınıf mevcudu kaçtır?", c: "{c}*{b}/({b}-{a})", v: {a:[1,3], b:[3,8], c:["({b}-{a})*2","({b}-{a})*10"]}, z:"zor", alt:"problem", kural:"a<b" },
    { id: "t7_063", s: "Bir havuzun {a}/{b}'i dolu. {c} litre daha eklenince yarısı doluyor. Havuz kaç litredir?", c: "{c}/(1/2-{a}/{b})", v: {a:[1,3], b:[5,8], c:[5,20]}, z:"zor", alt:"problem", kural:"a/b<1/2" },
],

// ==========================================
// KONU 8: ONDALIK SAYILAR
// ==========================================
8: [

    // ALT DAL 1: ONDALIK KAVRAMI
    { id: "t8_001", s: "{a} ondalık sayısının tam kısmı kaçtır?", c: "Math.floor({a})", v: {a:["1.2","9.8"]}, z:"kolay", alt:"ondalik_kavram" },
    { id: "t8_002", s: "{a} ondalık sayısının ondalık kısmı kaçtır?", c: "Math.round(({a}%1)*100)/100", v: {a:["1.2","9.8"]}, z:"kolay", alt:"ondalik_kavram" },
    { id: "t8_003", s: "{a}/{b} kesrini ondalık olarak yazın", c: "Math.round(({a}/{b})*100)/100", v: {a:[1,5], b:[2,8]}, z:"orta", alt:"ondalik_kavram", kural:"a<b" },
    { id: "t8_004", s: "{a}.{b} ondalık sayısını kesir olarak yazın", c: "{a}{b}/10^({b}.toString().length)", v: {a:[1,9], b:[10,99]}, z:"orta", alt:"ondalik_kavram" },

    // ALT DAL 2: ONDALIK İŞLEMLERİ > TOPLAMA & ÇIKARMA
    { id: "t8_010", s: "{a} + {b} = ?", c: "Math.round(({a}+{b})*100)/100", v: {a:["1.5","8.5"], b:["0.5","5.5"]}, z:"kolay", alt:"ondalik_toplama" },
    { id: "t8_011", s: "{a} + {b} = ?", c: "Math.round(({a}+{b})*100)/100", v: {a:["10.25","50.75"], b:["5.50","25.25"]}, z:"orta", alt:"ondalik_toplama" },
    { id: "t8_012", s: "{a} - {b} = ?", c: "Math.round(({a}-{b})*100)/100", v: {a:["5.0","15.0"], b:["0.5","4.5"]}, z:"kolay", alt:"ondalik_toplama", kural:"a>b" },
    { id: "t8_013", s: "{a} - {b} = ?", c: "Math.round(({a}-{b})*100)/100", v: {a:["20.5","80.5"], b:["5.25","30.25"]}, z:"orta", alt:"ondalik_toplama", kural:"a>b" },

    // ALT DAL 3: ONDALIK İŞLEMLERİ > ÇARPMA
    { id: "t8_020", s: "{a} × 10 = ?", c: "Math.round({a}*10*100)/100", v: {a:["0.1","9.9"]}, z:"kolay", alt:"ondalik_carpma" },
    { id: "t8_021", s: "{a} × 100 = ?", c: "Math.round({a}*100*100)/100", v: {a:["0.1","5.0"]}, z:"kolay", alt:"ondalik_carpma" },
    { id: "t8_022", s: "{a} × {b} = ?", c: "Math.round({a}*{b}*100)/100", v: {a:["1.5","4.5"], b:[2,5]}, z:"orta", alt:"ondalik_carpma" },
    { id: "t8_023", s: "{a} × 0.5 = ? (Yarısı kaçtır?)", c: "Math.round({a}*0.5*100)/100", v: {a:["1.0","10.0"]}, z:"orta", alt:"ondalik_carpma" },

    // ALT DAL 4: SIRALAMA & YUVARLAMA
    { id: "t8_030", s: "{a} ve {b} ondalık sayılarından hangisi büyüktür?", c: "{a}>{b}?'{a}':'{b}'", v: {a:["1.2","8.5"], b:["1.8","8.2"]}, z:"kolay", alt:"ondalik_siralama", kural:"a!=b" },
    { id: "t8_031", s: "{a} sayısını birler basamağına yuvarlayın", c: "Math.round({a})", v: {a:["1.4","8.6"]}, z:"kolay", alt:"ondalik_siralama" },
    { id: "t8_032", s: "{a} sayısını onda birler basamağına yuvarlayın", c: "Math.round({a}*10)/10", v: {a:["1.24","5.67"]}, z:"orta", alt:"ondalik_siralama" },

    // ALT DAL 5: PROBLEM
    { id: "t8_040", s: "Tanesi {a} TL olan kalemlerden {b} tane alan kaç TL öder?", c: "Math.round({a}*{b}*100)/100", v: {a:["1.5","5.5"], b:[2,6]}, z:"kolay", alt:"ondalik_problem" },
    { id: "t8_041", s: "{a} TL paranın {b} TL'sini harcadım, kaç TL kaldı?", c: "Math.round(({a}-{b})*100)/100", v: {a:["10.0","50.0"], b:["2.5","20.5"]}, z:"kolay", alt:"ondalik_problem", kural:"a>b" },
    { id: "t8_042", s: "3 ayda sırasıyla {a}, {b}, {c} kg meyve yedim. Toplam kaç kg?", c: "Math.round(({a}+{b}+{c})*100)/100", v: {a:["1.5","5.5"], b:["2.0","6.0"], c:["0.5","4.5"]}, z:"orta", alt:"ondalik_problem" },
    { id: "t8_043", s: "{a} metrelik kumaşın {b} metresi kullanılırsa kaç metre kalır?", c: "Math.round(({a}-{b})*100)/100", v: {a:["5.0","20.0"], b:["1.5","8.5"]}, z:"orta", alt:"ondalik_problem", kural:"a>b" },
],

// ==========================================
// KONU 9: ÜSLÜ SAYILAR
// ==========================================
9: [
    { id: "t9_001", s: "{a}^2 = ?", c: "{a}*{a}", v: {a:[1,12]}, z:"kolay", alt:"us_kavram" },
    { id: "t9_002", s: "{a}^2 = ?", c: "{a}*{a}", v: {a:[13,25]}, z:"orta", alt:"us_kavram" },
    { id: "t9_003", s: "{a}^3 = ?", c: "{a}*{a}*{a}", v: {a:[1,6]}, z:"kolay", alt:"us_kavram" },
    { id: "t9_004", s: "{a}^3 = ?", c: "{a}*{a}*{a}", v: {a:[7,10]}, z:"orta", alt:"us_kavram" },
    { id: "t9_005", s: "{a}^4 = ?", c: "Math.pow({a},4)", v: {a:[1,5]}, z:"orta", alt:"us_kavram" },
    { id: "t9_006", s: "2^n = {s} ise n kaçtır?", c: "Math.round(Math.log({s})/Math.log(2))", v: {s:[2,4,8,16,32,64]}, z:"orta", alt:"us_kavram" },

    { id: "t9_010", s: "{a}^2 × {a}^3 = ?", c: "Math.pow({a},5)", v: {a:[2,5]}, z:"kolay", alt:"us_ozellik" },
    { id: "t9_011", s: "{a}^{n} × {a}^{m} = ?", c: "Math.pow({a},{n}+{m})", v: {a:[2,5], n:[1,4], m:[1,4]}, z:"orta", alt:"us_ozellik" },
    { id: "t9_012", s: "{a}^5 ÷ {a}^2 = ?", c: "Math.pow({a},3)", v: {a:[2,5]}, z:"orta", alt:"us_ozellik" },
    { id: "t9_013", s: "({a}^2)^3 = ?", c: "Math.pow({a},6)", v: {a:[2,5]}, z:"orta", alt:"us_ozellik" },
    { id: "t9_014", s: "{a}^0 = ?", c: "1", v: {a:[2,10]}, z:"kolay", alt:"us_ozellik" },
    { id: "t9_015", s: "2^{-1} = ?", c: "0.5", v: {}, z:"orta", alt:"negatif_us", inputType:"choice", choices:["0.5","-2","0","-0.5"] },
    { id: "t9_016", s: "{a}^{-2} = ?", c: "1/({a}*{a})", v: {a:[2,5]}, z:"orta", alt:"negatif_us" },

    { id: "t9_030", s: "{a} sayısını 10'un kuvveti olarak yazın (10^n şeklinde)", c: "{a}.toString().length-1", v: {a:[100,1000,10000,100000]}, z:"orta", alt:"bilimsel" },
    { id: "t9_031", s: "3×10^4 = ?", c: "30000", v: {}, z:"kolay", alt:"bilimsel" },

    { id: "t9_040", s: "Bir bakteri her saat 2'ye bölünüyor. {n} saat sonra kaç bakteri olur?", c: "Math.pow(2,{n})", v: {n:[2,6]}, z:"orta", alt:"problem" },
    { id: "t9_041", s: "2^n = {s} ise 2^{n+2} kaçtır?", c: "{s}*4", v: {s:[2,4,8,16,32]}, z:"zor", alt:"problem" },
],

// ==========================================
// KONU 10: KÖKLÜ SAYILAR
// ==========================================
10: [
    { id: "t10_001", s: "√{a} = ?", c: "Math.sqrt({a})", v: {a:[4,9,16,25,36,49,64,81,100]}, z:"kolay", alt:"kok_kavram" },
    { id: "t10_002", s: "Hangi sayının karesi {a}'tir?", c: "Math.sqrt({a})", v: {a:[4,9,16,25,36,49,64,81,100]}, z:"kolay", alt:"kok_kavram" },
    { id: "t10_003", s: "√{a} hangi iki tam sayı arasındadır?", c: "Math.floor(Math.sqrt({a})) + ' ile ' + Math.ceil(Math.sqrt({a}))", v: {a:[2,99]}, z:"orta", alt:"kok_kavram", kural:"!Number.isInteger(Math.sqrt(a))" },
    { id: "t10_004", s: "√{a} sayısı tam sayı mıdır?", c: "Number.isInteger(Math.sqrt({a}))?'Evet':'Hayır'", v: {a:[2,50]}, z:"kolay", alt:"kok_kavram", inputType:"choice", choices:["Evet","Hayır"] },
    { id: "t10_005", s: "Alanı {a} br^2 olan karenin bir kenar uzunluğu kaç br'dir?", c: "Math.sqrt({a})", v: {a:[4,9,16,25,36,49,64,81,100]}, z:"orta", alt:"kok_kavram" },

    { id: "t10_010", s: "√{a} × √{b} = ?", c: "Math.sqrt({a}*{b})", v: {a:[2,8], b:[2,8]}, z:"orta", alt:"kok_carpma" },
    { id: "t10_011", s: "√{a} × √{b} = ?", c: "Math.sqrt({a}*{b})", v: {a:[2,6], b:[3,12]}, z:"orta", alt:"kok_carpma" },
    { id: "t10_012", s: "√{a} ÷ √{b} = ?", c: "Math.sqrt({a}/{b})", v: {b:[2,6], a:["{b}*4","{b}*16"]}, z:"orta", alt:"kok_carpma" },
    { id: "t10_013", s: "√{a} × √{a} = ?", c: "{a}", v: {a:[2,10]}, z:"kolay", alt:"kok_carpma" },

    { id: "t10_020", s: "√{a} + √{a} = ?", c: "2*Math.sqrt({a})", v: {a:[4,9,16,25]}, z:"kolay", alt:"kok_toplama" },
    { id: "t10_021", s: "{a}√{b} + {c}√{b} = ?", c: "({a}+{c})*Math.sqrt({b})", v: {a:[2,5], c:[3,7], b:[2,3,5,6,7]}, z:"orta", alt:"kok_toplama" },
    { id: "t10_022", s: "{a}√{b} - {c}√{b} = ?", c: "({a}-{c})*Math.sqrt({b})", v: {a:[5,10], c:[1,"{a}-2"], b:[2,3,5,6,7]}, z:"orta", alt:"kok_toplama", kural:"a>c" },
    { id: "t10_023", s: "√{a} + √{b} = ? (Yaklaşık, virgülden sonra 1 basamak)", c: "Math.round((Math.sqrt({a})+Math.sqrt({b}))*10)/10", v: {a:[2,8], b:[3,12]}, z:"zor", alt:"kok_toplama" },

    { id: "t10_030", s: "√{a} sayısını a√b şeklinde yazın", c: "kokDisi({a})", v: {a:[8,12,18,20,27,32,45,48,50,72,75,80,98]}, z:"orta", alt:"kok_disi" },
    { id: "t10_031", s: "√{a} sayısını a√b şeklinde yazın", c: "kokDisi({a})", v: {a:[108,125,147,180,200,242,288,300]}, z:"zor", alt:"kok_disi" },
    { id: "t10_032", s: "{a}√{b} sayısını √x şeklinde yazın", c: "{a}*{a}*{b}", v: {a:[2,5], b:[2,6]}, z:"orta", alt:"kok_disi" },

    { id: "t10_040", s: "√{a} + √{b} toplamı tam sayı ise a+b en az kaçtır? (a≠b)", c: "kokToplamMin({a},{b})", v: {a:[2,8], b:[2,8]}, z:"zor", alt:"kok_mantik", kural:"a!=b" },
    { id: "t10_041", s: "x = √{a} ise x^2 = ?", c: "{a}", v: {a:[3,10]}, z:"kolay", alt:"kok_mantik" },
    { id: "t10_042", s: "(√{a} + √{b})^2 = ?", c: "Math.pow(Math.sqrt({a})+Math.sqrt({b}),2)", v: {a:[4,9,16], b:[4,9,16]}, z:"zor", alt:"kok_mantik" },
    { id: "t10_043", s: "Bir dikdörtgenin alanı √{a} br^2, kısa kenarı √{b} br ise uzun kenarı kaç br'dir?", c: "Math.sqrt({a}/{b})", v: {b:[2,5], a:["{b}*9","{b}*25"]}, z:"zor", alt:"kok_problem" },
    { id: "t10_044", s: "√(x+{a}) = {b} ise x kaçtır?", c: "{b}*{b}-{a}", v: {a:[2,10], b:[3,6]}, z:"orta", alt:"kok_problem" },
],

// ==========================================
// KONU 11: ÇARPANLARA AYIRMA & ÖZDEŞLİKLER
// ==========================================
11: [
    { id: "t11_001", s: "{a}x + {b}x = ?", c: "({a}+{b})x", v: {a:[2,7], b:[3,8]}, z:"kolay", alt:"ortak_carpan" },
    { id: "t11_002", s: "{a}x + {b}x + {c}x = ?", c: "({a}+{b}+{c})x", v: {a:[2,5], b:[3,6], c:[1,4]}, z:"kolay", alt:"ortak_carpan" },
    { id: "t11_003", s: "{a}x + {b} ifadesini çarpanlarına ayırın", c: "function(){var e=ebob({a},{b});return e+'('+({a}/e)+'x+'+({b}/e)+')'}()", v: {a:[4,12], b:[6,18]}, z:"orta", alt:"ortak_carpan", kural:"ebob(a,b)>1" },
    { id: "t11_004", s: "x^2 + {a}x ifadesini çarpanlarına ayırın", c: "x(x+{a})", v: {a:[2,10]}, z:"kolay", alt:"ortak_carpan" },

    { id: "t11_010", s: "x^2 - {a} = ? (çarpanlarına ayırın)", c: "function(){var s=Math.sqrt({a});return '(x-'+s+')(x+'+s+')'}()", v: {a:[4,9,16,25,36,49,64,81]}, z:"kolay", alt:"iki_kare" },
    { id: "t11_011", s: "{a}^2 - {b}^2 = ?", c: "({a}-{b})({a}+{b})", v: {a:[5,15], b:[2,"{a}-2"]}, z:"kolay", alt:"iki_kare", kural:"a>b" },
    { id: "t11_012", s: "{a}x^2 - {b} = ?", c: "function(){var sa=Math.sqrt({a}),sb=Math.sqrt({b});return '('+sa+'x-'+sb+')('+sa+'x+'+sb+')'}()", v: {a:[4,9,16], b:[9,16,25]}, z:"orta", alt:"iki_kare" },
    { id: "t11_013", s: "(x-{a})(x+{a}) = ?", c: "x^2-{a*a}", v: {a:[2,8]}, z:"kolay", alt:"iki_kare" },

    { id: "t11_020", s: "(x+{a})^2 = ?", c: "x^2+{2*a}x+{a*a}", v: {a:[2,8]}, z:"kolay", alt:"tam_kare" },
    { id: "t11_021", s: "(x-{a})^2 = ?", c: "x^2-{2*a}x+{a*a}", v: {a:[2,8]}, z:"kolay", alt:"tam_kare" },
    { id: "t11_022", s: "({a}x+{b})^2 = ?", c: "{a*a}x^2+{2*a*b}x+{b*b}", v: {a:[2,5], b:[1,5]}, z:"orta", alt:"tam_kare" },
    { id: "t11_023", s: "x^2 + {b}x + {c} = (x+?)^2 ise ? kaçtır?", c: "{b/2}", v: {b:[2,10,"cift"], c:["({b/2})^2"]}, z:"orta", alt:"tam_kare" },
    { id: "t11_024", s: "x^2 + {b}x ifadesine kaç eklenirse tam kare olur?", c: "Math.pow({b}/2,2)", v: {b:[2,10,"cift"]}, z:"zor", alt:"tam_kare" },

    { id: "t11_030", s: "ax+ay+bx+by ifadesini çarpanlara ayırın (a={a1}, b={b1})", c: "(x+y)({a1}+{b1})", v: {a1:[2,5], b1:[3,6]}, z:"orta", alt:"gruplandirma" },
    { id: "t11_031", s: "x^2 + {a}x + {b}x + {a*b} = ?", c: "(x+{a})(x+{b})", v: {a:[2,6], b:[3,7]}, z:"orta", alt:"gruplandirma" },

    { id: "t11_040", s: "x^2 - y^2 = {f} ve x+y = {t} ise x-y kaçtır?", c: "{f}/{t}", v: {t:[2,8], f:["{t}*2","{t}*10"]}, z:"orta", alt:"problem" },
    { id: "t11_041", s: "x^2 + 2xy + y^2 = {s} ise x+y kaçtır?", c: "Math.sqrt({s})", v: {s:[4,9,16,25,36,49,64,81,100]}, z:"orta", alt:"problem" },
    { id: "t11_042", s: "Dikdörtgenin alanı x^2-{a} ise kenar uzunlukları ne olabilir?", c: "function(){var s=Math.sqrt({a});return '(x-'+s+')(x+'+s+')'}()", v: {a:[4,9,16,25]}, z:"orta", alt:"problem" },

    { id: "t11_050", s: "x^2 - {a}x + {b} = 0 denkleminin çarpanlara ayrılmış hali (x-?)(x-?) = 0", c: "function(){var a={a},b={b};for(var i=1;i<=b;i++){if(b%i==0){var j=b/i;if(i+j==a)return'(x-'+i+')(x-'+j+')=0'}}return 'Çarpan bulunamadı'}()", v: {a:[5,10], b:[6,24]}, z:"zor", alt:"mantik" },
    { id: "t11_051", s: "(x+{c})(x+{d}) açılımında x'in katsayısı kaçtır?", c: "{c}+{d}", v: {c:[2,5], d:[3,6]}, z:"orta", alt:"mantik" },
],

// ==========================================
// KONU 12: 1. DERECEDEN DENKLEMLER
// ==========================================
12: [
    { id: "t12_001", s: "x + {a} = {b} ise x = ?", c: "{b}-{a}", v: {a:[3,20], b:[10,50]}, z:"kolay", alt:"tek_basit", kural:"b>a" },
    { id: "t12_002", s: "x + {a} = {b} ise x = ?", c: "{b}-{a}", v: {a:[15,50], b:[30,100]}, z:"orta", alt:"tek_basit", kural:"b>a" },
    { id: "t12_003", s: "x - {a} = {b} ise x = ?", c: "{a}+{b}", v: {a:[5,20], b:[5,20]}, z:"kolay", alt:"tek_basit" },
    { id: "t12_004", s: "{a} - x = {b} ise x = ?", c: "{a}-{b}", v: {a:[20,60], b:[1,"{a}-1"]}, z:"orta", alt:"tek_basit", kural:"a>b" },

    { id: "t12_010", s: "{a}x = {b} ise x = ?", c: "{b}/{a}", v: {a:[2,7], b:["{a}*2","{a}*15"]}, z:"kolay", alt:"katsayili" },
    { id: "t12_011", s: "{a}x = {b} ise x = ?", c: "{b}/{a}", v: {a:[3,9], b:["{a}*3","{a}*30"]}, z:"orta", alt:"katsayili" },
    { id: "t12_012", s: "{a}x + {b} = {c} ise x = ?", c: "({c}-{b})/{a}", v: {a:[2,5], b:[3,20], c:["{a}*2+{b}","{a}*20+{b}"]}, z:"orta", alt:"katsayili" },
    { id: "t12_013", s: "{a}x - {b} = {c} ise x = ?", c: "({c}+{b})/{a}", v: {a:[2,5], b:[3,15], c:["{a}*2-{b}","{a}*15-{b}"]}, z:"orta", alt:"katsayili", kural:"a*2>b" },

    { id: "t12_020", s: "{a}x + {b} = {c}x + {d} ise x = ?", c: "({d}-{b})/({a}-{c})", v: {a:[3,8], c:[1,"{a}-2"], b:[2,10], d:[2,10]}, z:"zor", alt:"iki_tarafli", kural:"a>c" },
    { id: "t12_021", s: "{a}(x+{b}) = {c} ise x = ?", c: "{c}/{a}-{b}", v: {a:[2,5], b:[1,5], c:["{a}*({b}+2)","{a}*({b}+10)"]}, z:"zor", alt:"iki_tarafli" },

    { id: "t12_030", s: "Bir sayının {k} katının {f} fazlası {s} ise sayı kaçtır?", c: "({s}-{f})/{k}", v: {k:[2,5], f:[3,15], s:["{k}*3+{f}","{k}*20+{f}"]}, z:"orta", alt:"denklem_kurma" },
    { id: "t12_031", s: "Bir sayının {k1} katı ile {k2} katının toplamı {s} ise sayı kaçtır?", c: "{s}/({k1}+{k2})", v: {k1:[2,5], k2:[3,6], s:["({k1}+{k2})*2","({k1}+{k2})*20"]}, z:"orta", alt:"denklem_kurma" },
    { id: "t12_032", s: "Ardışık iki sayının toplamı {s} ise küçük sayı kaçtır?", c: "({s}-1)/2", v: {s:[5,99,"tek"]}, z:"orta", alt:"denklem_kurma" },
    { id: "t12_033", s: "Hangi sayının {a} eksiğinin {b} katı {c} eder?", c: "({c}/{b})+{a}", v: {a:[2,10], b:[2,5], c:["{b}*3","{b}*15"]}, z:"orta", alt:"denklem_kurma" },

    { id: "t12_040", s: "Bir sınıfta öğrenciler {a}'ar oturunca {b} kişi ayakta kalıyor. {c}'er oturunca {d} sıra boş kalıyor. Sınıf mevcudu kaçtır?", c: "sinavMevcut({a},{b},{c},{d})", v: {a:[2,4], b:[1,5], c:[3,5], d:[1,3]}, z:"zor", alt:"problem", kural:"c>a" },
    { id: "t12_041", s: "Bir çiftlikte tavşan ve tavuklardan toplam {t} hayvan vardır. Ayak sayıları toplamı {c} ise kaç tavşan vardır?", c: "({c}-2*{t})/2", v: {t:[10,30]}, z:"orta", alt:"problem" },
    { id: "t12_042", s: "{a} TL ve {b} TL'lik ürünlerden toplam {c} tane alınıp {d} TL ödeniyor. {a} TL'lik üründen kaç tane alınmıştır?", c: "({d}-{b}*{c})/({a}-{b})", v: {a:[5,10], b:[2,"{a}-2"], c:[10,20], d:["{b}*{c}+5","{a}*{c}-5"]}, z:"zor", alt:"problem", kural:"a>b" },

    { id: "t12_050", s: "Bir su deposunun {a}/{b}'i doludur. {c} litre daha eklenince {d}/{e}'i doluyor. Depo kaç litredir?", c: "{c}/({d}/{e}-{a}/{b})", v: {a:[1,3], b:[4,8], d:[2,4], e:[4,8], c:[10,50]}, z:"zor", alt:"yeni_nesil", kural:"d/e>a/b" },
    { id: "t12_051", s: "Bir ipin ucundan {a} cm kesilince orta noktası {b} cm kayıyor. İpin ilk boyu kaç cm'dir?", c: "2*{a}+2*{b}", v: {a:[5,20], b:[2,10]}, z:"zor", alt:"yeni_nesil" },
],

// ==========================================
// KONU 13: EŞİTSİZLİKLER
// ==========================================
13: [
    { id: "t13_001", s: "x + {a} < {b} ise x'in en büyük tam sayı değeri kaçtır?", c: "{b}-{a}-1", v: {a:[3,15], b:[10,40]}, z:"orta", alt:"basit", kural:"b>a" },
    { id: "t13_002", s: "x + {a} <= {b} ise x'in en büyük tam sayı değeri kaçtır?", c: "{b}-{a}", v: {a:[3,15], b:[10,40]}, z:"orta", alt:"basit", kural:"b>a" },
    { id: "t13_003", s: "x - {a} > {b} ise x'in en küçük tam sayı değeri kaçtır?", c: "{a}+{b}+1", v: {a:[3,15], b:[2,15]}, z:"orta", alt:"basit" },
    { id: "t13_004", s: "x - {a} >= {b} ise x'in en küçük tam sayı değeri kaçtır?", c: "{a}+{b}", v: {a:[3,15], b:[2,15]}, z:"orta", alt:"basit" },

    { id: "t13_010", s: "{a}x < {b} ise x'in en büyük tam sayı değeri kaçtır?", c: "Math.floor(({b}-1)/{a})", v: {a:[2,6], b:[12,60]}, z:"orta", alt:"katsayili" },
    { id: "t13_011", s: "{a}x <= {b} ise x'in en büyük tam sayı değeri kaçtır?", c: "Math.floor({b}/{a})", v: {a:[2,6], b:[12,60]}, z:"orta", alt:"katsayili" },
    { id: "t13_012", s: "{a}x > {b} ise x'in en küçük tam sayı değeri kaçtır?", c: "Math.floor({b}/{a})+1", v: {a:[2,6], b:[12,60]}, z:"orta", alt:"katsayili" },
    { id: "t13_013", s: "{a}x >= {b} ise x'in en küçük tam sayı değeri kaçtır?", c: "Math.ceil({b}/{a})", v: {a:[2,6], b:[12,60]}, z:"orta", alt:"katsayili" },

    { id: "t13_020", s: "{a}x + {b} < {c} ise x'in en büyük tam sayı değeri kaçtır?", c: "Math.floor(({c}-{b}-1)/{a})", v: {a:[2,5], b:[3,15], c:[20,80]}, z:"zor", alt:"karmasik", kural:"c>b" },
    { id: "t13_021", s: "{a}x + {b} <= {c} ise x'in en büyük tam sayı değeri kaçtır?", c: "Math.floor(({c}-{b})/{a})", v: {a:[2,5], b:[3,15], c:[20,80]}, z:"zor", alt:"karmasik", kural:"c>b" },
    { id: "t13_022", s: "{a} < x < {b} ise x kaç farklı tam sayı değeri alır?", c: "{b}-{a}-1", v: {a:[2,10], b:["{a}+3","{a}+10"]}, z:"orta", alt:"karmasik", kural:"b>a+1" },
    { id: "t13_023", s: "{a} <= x <= {b} ise x kaç farklı tam sayı değeri alır?", c: "{b}-{a}+1", v: {a:[2,10], b:["{a}+2","{a}+8"]}, z:"orta", alt:"karmasik", kural:"b>=a" },

    { id: "t13_030", s: "x < {a} ve x > {b} ise x'in alabileceği tam sayı değerleri toplamı kaçtır?", c: "aralikToplam({b}+1,{a}-1)", v: {a:[6,15], b:[1,"{a}-3"]}, z:"zor", alt:"aralik", kural:"a>b+2" },
    { id: "t13_032", s: "|x - {a}| < {b} eşitsizliğini sağlayan kaç tam sayı vardır?", c: "2*{b}-1", v: {a:[5,15], b:[2,6]}, z:"zor", alt:"aralik" },

    { id: "t13_040", s: "Bir sınıftaki öğrenci sayısı {a}'ten fazla, {b}'den azdır. Sınıf mevcudu en az kaçtır?", c: "{a}+1", v: {a:[15,30], b:[25,45]}, z:"kolay", alt:"problem", kural:"b>a+1" },
    { id: "t13_041", s: "Bir sayının {k} katının {f} fazlası {s}'ten küçük ise sayı en çok kaçtır? (tam sayı)", c: "Math.floor(({s}-{f}-1)/{k})", v: {k:[2,5], f:[3,10], s:[30,100]}, z:"orta", alt:"problem", kural:"s>f" },
    { id: "t13_042", s: "Tanesi {a} TL olan kalemlerden {b} TL'lik alınıyor. En az kaç kalem alınmıştır?", c: "Math.ceil({b}/{a})", v: {a:[3,8], b:[20,50]}, z:"orta", alt:"problem" },
    { id: "t13_043", s: "Bir araç saatte en fazla {v} km hız yapabiliyor. {x} km'lik yolu en az kaç saatte alır?", c: "Math.ceil({x}/{v})", v: {v:[60,100], x:[150,500]}, z:"orta", alt:"problem" },
],

  // ==========================================
// KONU 14: ORAN & ORANTI
// ==========================================
14: [

    // ALT DAL 1: ORAN KAVRAMI
    { id: "t14_001", s: "{a} sayısının {b} sayısına oranı kaçtır?", c: "{a}/{b}", v: {a:[2,20], b:[3,15]}, z:"kolay", alt:"oran_kavram" },
    { id: "t14_002", s: "{a} TL'nin {b} TL'ye oranı kaçtır?", c: "{a}/{b}", v: {a:[5,50], b:[10,100]}, z:"kolay", alt:"oran_kavram" },
    { id: "t14_003", s: "Bir sınıfta {a} kız, {b} erkek var. Kızların erkeklere oranı kaçtır?", c: "{a}/{b}", v: {a:[8,20], b:[10,25]}, z:"kolay", alt:"oran_kavram" },
    { id: "t14_004", s: "{a} km'de {b} litre yakan araç 1 km'de kaç litre yakar?", c: "Math.round(({b}/{a})*1000)/1000", v: {a:[100,500], b:[5,20]}, z:"orta", alt:"oran_kavram" },

    // ALT DAL 2: DOĞRU ORANTI
    { id: "t14_010", s: "a/b = {a}/{b} ve a+b = {t} ise a kaçtır?", c: "{t}*{a}/({a}+{b})", v: {a:[1,5], b:[2,7], t:["({a}+{b})*2","({a}+{b})*15"]}, z:"orta", alt:"dogru_oranti", kural:"a!=b" },
    { id: "t14_011", s: "{a} kg elma {b} TL ise {c} kg elma kaç TL'dir?", c: "({b}*{c})/{a}", v: {a:[2,8], b:[5,20], c:["{a}+1","{a}*4"]}, z:"kolay", alt:"dogru_oranti" },
    { id: "t14_012", s: "{a} işçi bir işi {b} günde yaparsa, {c} işçi kaç günde yapar? (doğru orantı)", c: "({b}*{c})/{a}", v: {a:[2,5], b:[6,15], c:["{a}+2","{a}*3"]}, z:"orta", alt:"dogru_oranti" },
    { id: "t14_013", s: "x/{a} = y/{b} = z/{c} ve x+y+z = {t} ise x kaçtır?", c: "{t}*{a}/({a}+{b}+{c})", v: {a:[1,5], b:[2,6], c:[3,7], t:["({a}+{b}+{c})*2","({a}+{b}+{c})*10"]}, z:"zor", alt:"dogru_oranti" },
    { id: "t14_014", s: "a sayısı b ile doğru orantılı. b={b1} iken a={a1} ise b={b2} iken a kaçtır?", c: "({a1}*{b2})/{b1}", v: {a1:[2,10], b1:[3,8], b2:["{b1}+2","{b1}*3"]}, z:"orta", alt:"dogru_oranti" },

    // ALT DAL 3: TERS ORANTI
    { id: "t14_020", s: "{a} işçi bir işi {b} günde bitirirse, {c} işçi kaç günde bitirir?", c: "({a}*{b})/{c}", v: {a:[3,10], b:[6,20], c:[2,"{a}*2"]}, z:"orta", alt:"ters_oranti" },
    { id: "t14_021", s: "{a} işçi bir işi {b} günde bitirirse, aynı işi {c} günde bitirmek için kaç işçi gerekir?", c: "({a}*{b})/{c}", v: {a:[4,10], b:[8,20], c:[4,"{b}-2"]}, z:"orta", alt:"ters_oranti", kural:"c<b" },
    { id: "t14_022", s: "x ile y ters orantılı. x={x1} iken y={y1} ise x={x2} iken y kaçtır?", c: "({x1}*{y1})/{x2}", v: {x1:[3,8], y1:[4,12], x2:[2,"{x1}+3"]}, z:"orta", alt:"ters_oranti" },
    { id: "t14_023", s: "Bir havuzu eşit kapasiteli {a} musluk {b} saatte dolduruyor. {c} musluk kaç saatte doldurur?", c: "({a}*{b})/{c}", v: {a:[3,8], b:[6,15], c:[2,"{a}*2"]}, z:"orta", alt:"ters_oranti" },

    // ALT DAL 4: BİLEŞİK ORANTI
    { id: "t14_030", s: "{a} işçi {b} günde {c} parça üretiyor. {d} işçi {e} günde kaç parça üretir?", c: "{c}*{d}*{e}/({a}*{b})", v: {a:[2,5], b:[3,8], c:[10,30], d:[3,8], e:[4,10]}, z:"zor", alt:"bilesik" },
    { id: "t14_031", s: "{a} işçi {b} m² duvarı {c} günde örüyor. {d} işçi {e} m² duvarı kaç günde örer?", c: "({a}*{c}*{e})/({d}*{b})", v: {a:[2,5], b:[20,60], c:[3,8], d:[3,6], e:[30,80]}, z:"zor", alt:"bilesik" },
    { id: "t14_032", s: "x, y ile doğru; z ile ters orantılı. y={y1}, z={z1} iken x={x1} ise y={y2}, z={z2} iken x kaçtır?", c: "{x1}*({y2}/{y1})*({z1}/{z2})", v: {x1:[4,12], y1:[2,8], z1:[3,9], y2:["{y1}*2","{y1}*3"], z2:[1,"{z1}-2"]}, z:"zor", alt:"bilesik" },

    // ALT DAL 5: PROBLEM
    { id: "t14_040", s: "Bir sınıfta kızların erkeklere oranı {a}/{b}. Sınıfta {c} kız varsa kaç erkek vardır?", c: "({c}*{b})/{a}", v: {a:[2,5], b:[3,7], c:["{a}*2","{a}*10"]}, z:"orta", alt:"problem", kural:"a!=b" },
    { id: "t14_041", s: "Bir karışımda A maddesinin B maddesine oranı {a}/{b}. {c} gram karışımda kaç gram A vardır?", c: "({c}*{a})/({a}+{b})", v: {a:[1,4], b:[2,5], c:["({a}+{b})*5","({a}+{b})*30"]}, z:"orta", alt:"problem" },
    { id: "t14_042", s: "Bir araç {a} km yolu {b} saatte alıyor. Aynı hızla {c} km yolu kaç saatte alır?", c: "({b}*{c})/{a}", v: {a:[100,400], b:[2,6], c:[150,600]}, z:"kolay", alt:"problem" },

    // ALT DAL 6: MANTIK
    { id: "t14_050", s: "a/b = c/d = {k} ise (a+c)/(b+d) = ?", c: "{k}", v: {k:[2,5]}, z:"orta", alt:"mantik", inputType:"choice", choices:["{k}","{k*2}","1","{k/2}"] },
    { id: "t14_051", s: "a/b = {a}/{b} ve b/a = ?", c: "{b}/{a}", v: {a:[2,7], b:[3,8]}, z:"kolay", alt:"mantik" },
    { id: "t14_052", s: "2a = 3b ise a/b = ?", c: "3/2", v: {}, z:"orta", alt:"mantik", inputType:"choice", choices:["3/2","2/3","1","6"] },
],

// ==========================================
// KONU 15: SAYI PROBLEMLERİ
// ==========================================
15: [

    // ALT DAL 1: KAT
    { id: "t15_001", s: "Bir sayının {k} katı {s} ise bu sayı kaçtır?", c: "{s}/{k}", v: {k:[2,7], s:["{k}*3","{k}*25"]}, z:"kolay", alt:"kat" },
    { id: "t15_002", s: "Bir sayının {k} katının {f} fazlası {s} ise sayı kaçtır?", c: "({s}-{f})/{k}", v: {k:[2,5], f:[3,15], s:["{k}*3+{f}","{k}*20+{f}"]}, z:"kolay", alt:"kat" },
    { id: "t15_003", s: "Bir sayının {k} katının {f} eksiği {s} ise sayı kaçtır?", c: "({s}+{f})/{k}", v: {k:[2,5], f:[3,15], s:["{k}*3-{f}","{k}*20-{f}"]}, z:"orta", alt:"kat", kural:"k*3>f" },
    { id: "t15_004", s: "Bir sayının {k1} katı ile {k2} katının toplamı {s} ise sayı kaçtır?", c: "{s}/({k1}+{k2})", v: {k1:[2,5], k2:[3,6], s:["({k1}+{k2})*2","({k1}+{k2})*20"]}, z:"orta", alt:"kat" },
    { id: "t15_005", s: "Bir sayının {k1} katı, {k2} katından {f} fazla ise sayı kaçtır?", c: "{f}/({k1}-{k2})", v: {k1:[3,8], k2:[1,"{k1}-1"], f:["({k1}-{k2})*2","({k1}-{k2})*15"]}, z:"orta", alt:"kat", kural:"k1>k2" },

    // ALT DAL 2: ARDIŞIK
    { id: "t15_010", s: "Ardışık iki sayının toplamı {s} ise büyük sayı kaçtır?", c: "({s}+1)/2", v: {s:[5,99,"tek"]}, z:"kolay", alt:"ardisik" },
    { id: "t15_011", s: "Ardışık iki sayının toplamı {s} ise küçük sayı kaçtır?", c: "({s}-1)/2", v: {s:[5,99,"tek"]}, z:"kolay", alt:"ardisik" },
    { id: "t15_012", s: "Ardışık üç sayının toplamı {s} ise ortanca sayı kaçtır?", c: "{s}/3", v: {s:[6,99,"3kati"]}, z:"orta", alt:"ardisik" },
    { id: "t15_013", s: "Ardışık üç sayının toplamı {s} ise en büyük sayı kaçtır?", c: "({s}/3)+1", v: {s:[6,99,"3kati"]}, z:"orta", alt:"ardisik" },
    { id: "t15_014", s: "Ardışık üç çift sayının toplamı {s} ise en küçük sayı kaçtır?", c: "({s}/3)-2", v: {s:[12,198]}, z:"zor", alt:"ardisik", kural:"s%6==0" },
    { id: "t15_015", s: "Ardışık {n} sayının toplamı {s} ise en küçük sayı kaçtır?", c: "({s}-({n}*({n}-1)/2))/{n}", v: {n:[3,5], s:["{n}*3","{n}*30"]}, z:"zor", alt:"ardisik" },

    // ALT DAL 3: İKİ SAYI
    { id: "t15_020", s: "İki sayının toplamı {t}, farkı {f} ise büyük sayı kaçtır?", c: "({t}+{f})/2", v: {t:[20,100], f:[2,20,"cift"]}, z:"orta", alt:"iki_sayi" },
    { id: "t15_021", s: "İki sayının toplamı {t}, farkı {f} ise küçük sayı kaçtır?", c: "({t}-{f})/2", v: {t:[20,100], f:[2,20,"cift"]}, z:"orta", alt:"iki_sayi" },
    { id: "t15_022", s: "İki sayıdan biri diğerinin {k} katı. Toplamları {t} ise küçük sayı kaçtır?", c: "{t}/({k}+1)", v: {k:[2,5], t:["({k}+1)*2","({k}+1)*30"]}, z:"orta", alt:"iki_sayi" },
    { id: "t15_023", s: "İki sayıdan biri diğerinin {k} katından {f} fazla. Toplamları {t} ise küçük sayı kaçtır?", c: "({t}-{f})/({k}+1)", v: {k:[2,4], f:[1,10], t:["({k}+1)*2+{f}","({k}+1)*20+{f}"]}, z:"zor", alt:"iki_sayi" },
    { id: "t15_024", s: "İki sayının çarpımı {c}, toplamları {t} ise kareleri toplamı kaçtır?", c: "{t}*{t}-2*{c}", v: {t:[5,12], c:[6,35]}, z:"zor", alt:"iki_sayi" },

    // ALT DAL 4: DENKLEM KURMA
    { id: "t15_030", s: "Bir sayının {a} fazlasının {b} katı {c} ise sayı kaçtır?", c: "({c}/{b})-{a}", v: {a:[2,10], b:[2,5], c:["{b}*({a}+3)","{b}*({a}+20)"]}, z:"orta", alt:"denklem" },
    { id: "t15_031", s: "Bir sayının {a} eksiğinin {b} katı {c} ise sayı kaçtır?", c: "({c}/{b})+{a}", v: {a:[2,10], b:[2,5], c:["{b}*3","{b}*15"]}, z:"orta", alt:"denklem" },
    { id: "t15_032", s: "Hangi sayının {a} eksiğinin yarısı {b} eder?", c: "2*{b}+{a}", v: {a:[2,10], b:[3,15]}, z:"orta", alt:"denklem" },
    { id: "t15_033", s: "Bir sayının {k1} katının {a} fazlası, aynı sayının {k2} katının {b} eksiğine eşit ise sayı kaçtır?", c: "({a}+{b})/({k2}-{k1})", v: {k1:[1,3], k2:[3,6], a:[2,10], b:[2,10]}, z:"zor", alt:"denklem", kural:"k2>k1" },

    // ALT DAL 5: PROBLEM (HİKAYE)
    { id: "t15_040", s: "Bir sınıftaki öğrenciler sıralara {a}'ar oturursa {b} kişi ayakta kalıyor. {c}'er oturursa {d} sıra boş kalıyor. Sınıf mevcudu kaçtır?", c: "sinavMevcut({a},{b},{c},{d})", v: {a:[2,3], b:[1,5], c:[3,5], d:[1,3]}, z:"zor", alt:"problem", kural:"c>a" },
    { id: "t15_041", s: "Bir çiftlikte toplam {t} hayvan var. Tavşan ve tavuklardan toplam {a} ayak var. Kaç tavşan vardır?", c: "({a}-2*{t})/2", v: {t:[10,30], a:["2*{t}+4","2*{t}+20"]}, z:"orta", alt:"problem", kural:"a>2*t" },
    { id: "t15_042", s: "{a} TL ve {b} TL'lik biletlerden toplam {c} adet satılıp {d} TL gelir elde ediliyor. {a} TL'lik biletten kaç adet satılmıştır?", c: "({d}-{b}*{c})/({a}-{b})", v: {a:[8,15], b:[3,"{a}-3"], c:[20,50], d:["{a}*5+{b}*({c}-5)","{a}*{c}"]}, z:"zor", alt:"problem", kural:"a>b" },
    { id: "t15_043", s: "Bir baba {b} yaşında, çocuğu {c} yaşındadır. Kaç yıl sonra babanın yaşı çocuğunun yaşının {k} katı olur?", c: "({b}-{k}*{c})/({k}-1)", v: {b:[30,50], c:[3,12], k:[2,4]}, z:"orta", alt:"problem", kural:"b>k*c" },

    // ALT DAL 6: YENİ NESİL & MANTIK
    { id: "t15_050", s: "Bir sayının {a} ile bölümünden bölüm {b}, kalan {c} ise bu sayı kaçtır?", c: "{a}*{b}+{c}", v: {a:[3,9], b:[3,10], c:[1,"{a}-1"]}, z:"orta", alt:"yeni_nesil", kural:"c<a" },
    { id: "t15_051", s: "İki basamaklı bir sayının rakamları toplamı {t}'dir. Bu sayı rakamları toplamının {k} katından {f} fazla ise sayı kaçtır?", c: "function(){var t={t},k={k},f={f};for(var i=10;i<=99;i++){var rt=rakamToplam(i);if(rt==t&&i==k*rt+f)return i}return 0}()", v: {t:[5,12], k:[3,6], f:[1,10]}, z:"zor", alt:"yeni_nesil" },
    { id: "t15_052", s: "Bir öğrenci {a} soruluk sınavda {b} doğru, {c} yanlış yapıyor. {d} doğru 1 yanlışı götürüyor. Net kaçtır?", c: "{b}-({c}/{d})", v: {a:[40,80], b:[15,40], c:[3,15], d:[3,4]}, z:"orta", alt:"yeni_nesil", kural:"b+c<=a" },
],

// ==========================================
// KONU 16: YAŞ PROBLEMLERİ
// ==========================================
16: [

    // ---------- YAŞ TOPLAMI ----------
    { id: "t16_001", s: "{a} ve {b} yaşlarındaki iki kardeşin yaşları toplamı kaçtır?", c: "{a}+{b}", v: {a:[5,15], b:[3,12]}, z:"kolay", alt:"yas_toplam" },
    { id: "t16_002", s: "{y} yıl önce yaşları toplamı {t} olan iki kardeşin bugünkü yaşları toplamı kaçtır?", c: "{t}+2*{y}", v: {y:[3,10], t:[10,40]}, z:"kolay", alt:"yas_toplam" },
    { id: "t16_003", s: "{y} yıl sonra yaşları toplamı {t} olacak iki kardeşin bugünkü yaşları toplamı kaçtır?", c: "{t}-2*{y}", v: {y:[3,10], t:[20,70]}, z:"orta", alt:"yas_toplam", kural:"t>2*y" },
    { id: "t16_004", s: "Anne {a}, baba {b}, çocuk {c} yaşında. {y} yıl sonra yaşları toplamı kaç olur?", c: "{a}+{b}+{c}+3*{y}", v: {a:[30,45], b:[32,48], c:[5,12], y:[2,10]}, z:"orta", alt:"yas_toplam" },
    { id: "t16_005", s: "Üç kardeşin yaşları toplamı {t}'dir. {y} yıl önce yaşları toplamı kaçtı?", c: "{t}-3*{y}", v: {t:[20,60], y:[2,6]}, z:"orta", alt:"yas_toplam", kural:"t>3*y" },

    // ---------- YAŞ FARKI ----------
    { id: "t16_010", s: "Baba {b}, çocuk {c} yaşında. Baba doğduğunda çocuk kaç yıl sonra doğmuştur?", c: "{b}-{c}", v: {b:[30,50], c:[5,15]}, z:"kolay", alt:"yas_fark", kural:"b>c" },
    { id: "t16_011", s: "İki kardeşin yaşları farkı {f}'tir. {y} yıl sonra yaşları farkı kaç olur?", c: "{f}", v: {f:[2,8], y:[2,15]}, z:"kolay", alt:"yas_fark", inputType:"choice", choices:["{f}","{f+y}","{f-y}","{f*y}"] },
    { id: "t16_012", s: "Anne {a}, kızı {k} yaşında. Anne, kızının yaşındayken kızı kaç yaşındaydı?", c: "{k}-({a}-{k})", v: {a:[30,45], k:[8,18]}, z:"orta", alt:"yas_fark", kural:"a>k*2" },
    { id: "t16_013", s: "Bir babanın yaşı {c} çocuğunun yaşları toplamına eşittir. {y} yıl sonra baba {b} yaşında olursa çocukların yaşları toplamı kaç olur?", c: "{b}-{y}*({c}-1)", v: {c:[2,4], y:[3,8], b:[35,60]}, z:"zor", alt:"yas_fark" },

    // ---------- YAŞ KAT ----------
    { id: "t16_020", s: "Baba {b}, çocuk {c} yaşında. Kaç yıl sonra baba çocuğunun {k} katı olur?", c: "({b}-{k}*{c})/({k}-1)", v: {b:[30,50], c:[3,12], k:[2,4]}, z:"orta", alt:"yas_kat", kural:"b>k*c" },
    { id: "t16_021", s: "Baba {b}, çocuk {c} yaşında. Kaç yıl önce baba çocuğunun {k} katıydı?", c: "({k}*{c}-{b})/({k}-1)", v: {b:[35,55], c:[8,18], k:[2,5]}, z:"orta", alt:"yas_kat", kural:"k*c>b" },
    { id: "t16_022", s: "Anne {a} yaşında, kızı {k} yaşında. Anne kızının {kat} katı yaştayken kızı kaç yaşındaydı?", c: "({a}-{k})/({kat}-1)", v: {a:[35,50], k:[5,12], kat:[2,4]}, z:"zor", alt:"yas_kat", kural:"a>k*kat" },

    // ---------- PROBLEM ----------
    { id: "t16_030", s: "Bir baba {b} yaşında, {c} çocuğu var. Çocukların yaşları toplamı {t}. Kaç yıl sonra babanın yaşı çocukların yaşları toplamına eşit olur?", c: "({b}-{t})/({c}-1)", v: {b:[35,55], c:[2,4], t:[5,20]}, z:"zor", alt:"problem", kural:"b>t" },
    { id: "t16_031", s: "Ahmet {a}, Mehmet {m} yaşında. Ahmet, Mehmet'in yaşındayken Mehmet {x} yaşındaydı. Buna göre a+m kaçtır?", c: "2*{a}-{x}", v: {a:[20,35], m:[12,22], x:[3,10]}, z:"zor", alt:"problem", kural:"a>m&&m>x" },
    { id: "t16_032", s: "{n} kişilik bir ailede yaş ortalaması {o}'tir. {y} yıl sonra yaş ortalaması kaç olur?", c: "{o}+{y}", v: {n:[3,6], o:[15,35], y:[2,8]}, z:"orta", alt:"problem" },

    // ---------- MANTIK ----------
    { id: "t16_040", s: "İki kişinin bugünkü yaşları toplamı {t}, {y} yıl önceki yaşları toplamı {e} ise y kaçtır?", c: "({t}-{e})/2", v: {t:[30,60], e:[20,50]}, z:"orta", alt:"mantik", kural:"t>e" },
    { id: "t16_041", s: "{y1} yıl önce Ahmet {x} yaşında, {y2} yıl sonra Mehmet Ahmet'in bugünkü yaşının 2 katı olacak. Mehmet bugün kaç yaşındadır?", c: "2*({x}+{y1})-{y2}", v: {y1:[3,12], x:[10,30], y2:[2,10]}, z:"zor", alt:"mantik" },
],

// ==========================================
// KONU 17: HIZ & HAREKET
// ==========================================
17: [

    // ---------- TEMEL ----------
    { id: "t17_001", s: "{v} km/sa hızla {t} saatte kaç km yol gidilir?", c: "{v}*{t}", v: {v:[40,100], t:[2,6]}, z:"kolay", alt:"temel" },
    { id: "t17_002", s: "{x} km'lik yolu {t} saatte giden aracın hızı kaç km/sa'tir?", c: "{x}/{t}", v: {x:[100,500], t:[2,6]}, z:"kolay", alt:"temel" },
    { id: "t17_003", s: "{v} km/sa hızla giden araç {x} km'lik yolu kaç saatte alır?", c: "{x}/{v}", v: {v:[50,100], x:["{v}*2","{v}*8"]}, z:"kolay", alt:"temel" },
    { id: "t17_004", s: "{v} m/dk hızla {t} dakikada kaç metre yol gidilir?", c: "{v}*{t}", v: {v:[30,80], t:[5,15]}, z:"kolay", alt:"temel" },

    // ---------- KARŞILAŞMA ----------
    { id: "t17_010", s: "Aralarında {x} km olan iki araç {v1} ve {v2} hızla karşılıklı hareket ederse kaç saat sonra karşılaşır?", c: "{x}/({v1}+{v2})", v: {x:[100,600], v1:[50,90], v2:[50,90]}, z:"orta", alt:"karsilasma" },
    { id: "t17_011", s: "Aralarında {x} km olan iki araç {v1} ve {v2} hızla aynı yönde hareket ederse hızlı olan kaç saat sonra yakalar?", c: "{x}/({v1}-{v2})", v: {v1:[70,100], v2:[40,"{v1}-20"], x:[50,300]}, z:"orta", alt:"karsilasma", kural:"v1>v2" },
    { id: "t17_012", s: "{v1} ve {v2} hızla karşılıklı gelen iki araç {t} saat sonra karşılaşıyor. Başlangıçta aralarındaki mesafe kaç km'dir?", c: "({v1}+{v2})*{t}", v: {v1:[40,80], v2:[40,80], t:[2,5]}, z:"orta", alt:"karsilasma" },
    { id: "t17_013", s: "Bir araç {v1} hızla giderken {t} saat sonra ikinci araç {v2} hızla aynı yerden aynı yöne hareket ediyor. İkinci araç kaç saat sonra yetişir?", c: "({v1}*{t})/({v2}-{v1})", v: {v1:[40,60], v2:[60,90], t:[1,4]}, z:"zor", alt:"karsilasma", kural:"v2>v1" },

    // ---------- ORTALAMA ----------
    { id: "t17_020", s: "Bir araç yolun ilk yarısını {v1}, ikinci yarısını {v2} hızla gidiyor. Ortalama hızı kaç km/sa'tir?", c: "Math.round(2*{v1}*{v2}/({v1}+{v2}))", v: {v1:[40,80], v2:[60,100]}, z:"zor", alt:"ortalama" },
    { id: "t17_021", s: "Bir araç {t1} saat {v1} hızla, {t2} saat {v2} hızla gidiyor. Ortalama hızı kaçtır?", c: "Math.round(({v1}*{t1}+{v2}*{t2})/({t1}+{t2}))", v: {v1:[40,80], t1:[1,4], v2:[60,100], t2:[1,4]}, z:"orta", alt:"ortalama" },

    // ---------- PROBLEM ----------
    { id: "t17_030", s: "{v} km/sa hızla giden bir araç {t} saatte varacağı yere {g} saat geç varıyor. Normalde kaç saatte varmalıydı?", c: "{t}-{g}", v: {v:[50,90], t:[3,8], g:[1,"{t}-2"]}, z:"orta", alt:"problem", kural:"t>g" },
    { id: "t17_031", s: "Bir araç hızını {a} km/sa artırırsa {x} km'lik yolu {b} saat erken bitiriyor. Aracın normal hızı kaç km/sa'tir?", c: "function(){var x={x},a={a},b={b};var D=x*b;var v=(Math.sqrt(a*a+4*a*x/b)-a)/2;return Math.round(v*100)/100}()", v: {x:[200,600], a:[10,30], b:[1,3]}, z:"zor", alt:"problem" },
    { id: "t17_032", s: "Bir tren {u} metrelik tüneli {t} saniyede geçiyor. Trenin boyu {b} metre ise hızı kaç km/sa'tir?", c: "Math.round(({u}+{b})/{t}*3.6)", v: {u:[200,800], t:[10,30], b:[50,200]}, z:"zor", alt:"problem" },

    // ---------- YENİ NESİL ----------
    { id: "t17_040", s: "İki şehir arası {x} km. A'dan B'ye {v1}, B'den A'ya {v2} hızla iki araç aynı anda çıkıyor. Karşılaştıklarında hızlı olan kaç km yol almıştır?", c: "Math.round({x}*{v1}/({v1}+{v2}))", v: {x:[300,800], v1:[60,100], v2:[40,80]}, z:"zor", alt:"yeni_nesil", kural:"v1>v2" },
    { id: "t17_041", s: "Akıntı hızı {a} km/sa olan nehirde, motorun durgun sudaki hızı {v} km/sa. {x} km'lik yolu gidip dönmek kaç saat sürer?", c: "Math.round(({x}/({v}+{a})+{x}/({v}-{a}))*100)/100", v: {v:[15,30], a:[2,5], x:[20,60]}, z:"zor", alt:"yeni_nesil", kural:"v>a" },
],

// ==========================================
// KONU 18: İŞÇİ & HAVUZ
// ==========================================
18: [

    // ---------- TEK İŞÇİ ----------
    { id: "t18_001", s: "Bir işçi bir işi {a} günde bitiriyor. 1 günde işin kaçta kaçını yapar?", c: "1/{a}", v: {a:[3,15]}, z:"kolay", alt:"tek_isci", inputType:"choice", choices:["1/{a}","{a}","{a}/2","2/{a}"] },
    { id: "t18_002", s: "{a} işçi bir işi {b} günde bitirirse, 1 işçi kaç günde bitirir?", c: "{a}*{b}", v: {a:[2,8], b:[4,15]}, z:"kolay", alt:"tek_isci" },
    { id: "t18_003", s: "Bir işçi günde {a} saat çalışarak bir işi {b} günde bitiriyor. Günde {c} saat çalışırsa kaç günde bitirir?", c: "({a}*{b})/{c}", v: {a:[4,10], b:[6,20], c:[2,"{a}*2"]}, z:"orta", alt:"tek_isci" },
    { id: "t18_004", s: "Bir işçi bir işin {a}/{b}'ini {c} günde yaparsa tamamını kaç günde yapar?", c: "({b}*{c})/{a}", v: {a:[1,3], b:[3,8], c:[2,8]}, z:"orta", alt:"tek_isci", kural:"a<b" },

    // ---------- BİRLİKTE ----------
    { id: "t18_010", s: "A işçisi {a}, B işçisi {b} günde bitiriyor. İkisi birlikte kaç günde bitirir?", c: "Math.round(({a}*{b})/({a}+{b})*100)/100", v: {a:[3,12], b:[4,15]}, z:"orta", alt:"birlikte" },
    { id: "t18_011", s: "A {a}, B {b}, C {c} günde bitiriyor. Üçü birlikte kaç günde bitirir?", c: "Math.round(1/(1/{a}+1/{b}+1/{c})*100)/100", v: {a:[4,12], b:[6,15], c:[8,20]}, z:"zor", alt:"birlikte" },
    { id: "t18_012", s: "A ve B birlikte {t} günde, A tek başına {a} günde bitiriyor. B tek başına kaç günde bitirir?", c: "Math.round(({a}*{t})/({a}-{t})*100)/100", v: {a:[8,20], t:[3,"{a}-2"]}, z:"orta", alt:"birlikte", kural:"a>t" },

    // ---------- İŞÇİ DEĞİŞİMİ ----------
    { id: "t18_020", s: "{a} işçi bir işi {b} günde yapıyor. {c} gün çalıştıktan sonra {d} işçi ayrılırsa kalan iş kaç günde biter?", c: "Math.round(({a}*{b}-{a}*{c})/({a}-{d})*100)/100", v: {a:[6,12], b:[10,20], c:[2,"{b}-3"], d:[1,"{a}-2"]}, z:"zor", alt:"isci_degisim", kural:"c<b&&d<a" },

    // ---------- HAVUZ ----------
    { id: "t18_030", s: "A musluğu havuzu {a} saatte dolduruyor, B musluğu {b} saatte. İkisi birlikte kaç saatte doldurur?", c: "Math.round(({a}*{b})/({a}+{b})*100)/100", v: {a:[3,10], b:[4,12]}, z:"orta", alt:"havuz" },
    { id: "t18_031", s: "A musluğu {a}, B musluğu {b} saatte dolduruyor. C musluğu dolu havuzu {c} saatte boşaltıyor. Üçü açık kaç saatte dolar?", c: "Math.round(1/(1/{a}+1/{b}-1/{c})*100)/100", v: {a:[3,8], b:[4,10], c:[6,15]}, z:"zor", alt:"havuz", kural:"1/a+1/b>1/c" },

    // ---------- MANTIK ----------
    { id: "t18_040", s: "A işçisi B'nin {k} katı hızlı. Biri {b} günde bitiriyorsa, ikisi birlikte kaç günde bitirir?", c: "Math.round({b}/({k}+1)*100)/100", v: {b:[6,20], k:[2,4]}, z:"orta", alt:"mantik" },
],

// ==========================================
// KONU 19: YÜZDE, KÂR & ZARAR
// ==========================================
19: [

    // ---------- YÜZDE BUL ----------
    { id: "t19_001", s: "{a} sayısının %{p}'i kaçtır?", c: "{a}*{p}/100", v: {a:[50,500], p:[10,75]}, z:"kolay", alt:"yuzde_bul" },
    { id: "t19_002", s: "{a} TL'nin %{p} indirimli fiyatı kaç TL'dir?", c: "{a}-{a}*{p}/100", v: {a:[50,500], p:[10,50]}, z:"kolay", alt:"yuzde_bul" },
    { id: "t19_003", s: "{a} TL'ye %{p} zam yapılırsa yeni fiyat kaç TL olur?", c: "{a}+{a}*{p}/100", v: {a:[50,500], p:[10,50]}, z:"kolay", alt:"yuzde_bul" },

    // ---------- SAYI BUL ----------
    { id: "t19_010", s: "%{p}'i {d} olan sayının tamamı kaçtır?", c: "{d}*100/{p}", v: {p:[10,50], d:["{p}*2","{p}*15"]}, z:"orta", alt:"sayi_bul" },
    { id: "t19_011", s: "%{p} fazlası {d} olan sayı kaçtır?", c: "{d}*100/(100+{p})", v: {p:[10,40], d:[110,700]}, z:"orta", alt:"sayi_bul" },
    { id: "t19_012", s: "%{p} eksiği {d} olan sayı kaçtır?", c: "{d}*100/(100-{p})", v: {p:[10,40], d:[60,450]}, z:"orta", alt:"sayi_bul" },

    // ---------- KÂR ZARAR ----------
    { id: "t19_020", s: "Maliyeti {m} TL olan ürün %{k} kârla kaç TL'ye satılır?", c: "{m}+{m}*{k}/100", v: {m:[50,500], k:[10,50]}, z:"orta", alt:"kar_zarar" },
    { id: "t19_021", s: "{a} TL'ye alınan ürün {b} TL'ye satılırsa kâr % kaçtır?", c: "Math.round(({b}-{a})/{a}*100)", v: {a:[50,200], b:["{a}+10","{a}+120"]}, z:"orta", alt:"kar_zarar", kural:"b>a" },
    { id: "t19_022", s: "{a} TL'ye alınan ürün {b} TL'ye satılırsa zarar % kaçtır?", c: "Math.round(({a}-{b})/{a}*100)", v: {b:[30,150], a:["{b}+10","{b}+100"]}, z:"orta", alt:"kar_zarar", kural:"a>b" },

    // ---------- ARDIŞIK ZAM/İNDİRİM ----------
    { id: "t19_030", s: "Bir ürüne art arda %{p} ve %{q} zam yapılırsa toplam zam % kaç olur?", c: "Math.round((100+{p})*(100+{q})/100-100)", v: {p:[10,30], q:[5,25]}, z:"orta", alt:"ardisik" },
    { id: "t19_031", s: "%{z} zam yapılan ürüne %{i} indirim yapılırsa son fiyat ilk fiyata göre % kaç değişir? (Azalış -)", c: "Math.round(((100+{z})*(100-{i})/100-100)*100)/100", v: {z:[10,40], i:[10,40]}, z:"zor", alt:"ardisik" },

    // ---------- PROBLEM ----------
    { id: "t19_040", s: "Yaş üzüm kuruyunca ağırlığının %{p}'ini kaybediyor. {a} kg kuru üzüm için kaç kg yaş üzüm gerekir?", c: "Math.round({a}*100/(100-{p}))", v: {p:[15,40], a:[10,50]}, z:"orta", alt:"problem", kural:"p<100" },
    { id: "t19_041", s: "Tanesi {a} TL olan üründen {b} tane alana {c} tanesi bedava. Gerçek indirim % kaçtır?", c: "Math.round(({c}/({b}+{c}))*100)", v: {a:[5,20], b:[2,5], c:[1,3]}, z:"zor", alt:"problem" },
],

// ==========================================
// KONU 20: KARIŞIM PROBLEMLERİ
// ==========================================
20: [

    // ---------- TUZ ORAN ----------
    { id: "t20_001", s: "Tuz oranı %{o} olan {m} kg karışımda kaç kg tuz vardır?", c: "{m}*{o}/100", v: {m:[10,100], o:[10,50]}, z:"kolay", alt:"tuz_oran" },
    { id: "t20_002", s: "{m} kg karışımda {t} kg tuz varsa tuz oranı % kaçtır?", c: "Math.round({t}/{m}*100)", v: {m:[20,100], t:[2,"{m}*0.3"]}, z:"kolay", alt:"tuz_oran", kural:"t<m" },
    { id: "t20_003", s: "%{o} tuz oranlı {m} kg karışıma {s} kg su eklenirse yeni oran % kaç olur?", c: "Math.round({m}*{o}/({m}+{s})*100)", v: {m:[20,80], o:[15,40], s:[5,30]}, z:"orta", alt:"tuz_oran" },
    { id: "t20_004", s: "%{o} tuz oranlı {m} kg karışıma {t} kg tuz eklenirse yeni oran % kaç olur?", c: "Math.round(({m}*{o}/100+{t})/({m}+{t})*100)", v: {m:[20,60], o:[10,30], t:[2,10]}, z:"orta", alt:"tuz_oran" },

    // ---------- KARIŞTIRMA ----------
    { id: "t20_010", s: "%{o1}'lik {m1} kg ile %{o2}'lik {m2} kg karışırsa yeni oran % kaçtır?", c: "Math.round(({m1}*{o1}+{m2}*{o2})/({m1}+{m2}))", v: {m1:[20,60], o1:[10,40], m2:[20,60], o2:[15,45]}, z:"orta", alt:"karistirma" },
    { id: "t20_011", s: "%{o1} ve %{o2}'lik iki karışım karıştırılıp %{oh}'lik karışım elde ediliyor. İlk karışımın ikinciye oranı kaçtır?", c: "Math.round(({oh}-{o2})/({o1}-{oh})*100)/100", v: {o1:[30,60], o2:[10,25], oh:["{o2}+5","{o1}-5"]}, z:"zor", alt:"karistirma", kural:"o1>oh&&oh>o2" },
    { id: "t20_012", s: "%{o1} ve %{o2}'lik iki karışım eşit miktarda karıştırılırsa yeni oran % kaçtır?", c: "Math.round(({o1}+{o2})/2)", v: {o1:[10,40], o2:[15,45]}, z:"orta", alt:"karistirma" },

    // ---------- BUHARLAŞTIRMA ----------
    { id: "t20_020", s: "%{o} tuz oranlı {m} kg karışımın {b} kg'ı buharlaştırılırsa yeni oran % kaçtır?", c: "Math.round({m}*{o}/({m}-{b})*100)/100", v: {m:[30,80], o:[10,30], b:[5,"{m}*0.3"]}, z:"zor", alt:"buharlastirma", kural:"b<m" },
    { id: "t20_021", s: "%{o} tuz oranlı {m} kg karışımın yarısı buharlaştırılırsa yeni oran % kaçtır?", c: "Math.round({o}*2)", v: {m:[20,60], o:[5,20]}, z:"orta", alt:"buharlastirma" },

    // ---------- PROBLEM ----------
    { id: "t20_030", s: "%{o1} ve %{o2}'lik iki karışımdan %{oh}'lik {m} kg karışım elde etmek için ilkinden kaç kg alınmalı?", c: "Math.round({m}*({oh}-{o2})/({o1}-{o2}))", v: {o1:[40,70], o2:[10,30], oh:["{o2}+5","{o1}-5"], m:[50,150]}, z:"zor", alt:"problem", kural:"o1>oh&&oh>o2" },
],

// ==========================================
// KONU 21: FAİZ PROBLEMLERİ
// ==========================================
21: [

    // ---------- BASİT FAİZ ----------
    { id: "t21_001", s: "{a} TL %{f} basit faizle {y} yılda kaç TL faiz getirir?", c: "{a}*{f}*{y}/100", v: {a:[1000,5000], f:[5,20], y:[1,4]}, z:"kolay", alt:"basit_faiz" },
    { id: "t21_002", s: "{a} TL %{f} basit faizle {y} yıl sonra kaç TL olur?", c: "{a}+{a}*{f}*{y}/100", v: {a:[1000,5000], f:[10,30], y:[2,5]}, z:"orta", alt:"basit_faiz" },
    { id: "t21_003", s: "{a} TL %{f} faizle {y} ayda kaç TL faiz getirir?", c: "Math.round({a}*{f}*{y}/1200)", v: {a:[1000,5000], f:[12,36], y:[3,10]}, z:"orta", alt:"basit_faiz" },

    // ---------- ANAPARA & ORAN ----------
    { id: "t21_010", s: "%{f} faizle {y} yılda {g} TL faiz getiren anapara kaç TL'dir?", c: "({g}*100)/({f}*{y})", v: {f:[10,25], y:[2,5], g:[200,2000]}, z:"orta", alt:"anapara" },
    { id: "t21_011", s: "{a} TL {y} yılda {g} TL faiz getiriyorsa faiz oranı % kaçtır?", c: "Math.round({g}*100/({a}*{y}))", v: {a:[1000,5000], y:[2,5], g:[200,2000]}, z:"orta", alt:"anapara" },

    // ---------- BİLEŞİK FAİZ ----------
    { id: "t21_020", s: "{a} TL %{f} bileşik faizle 2 yıl sonra kaç TL olur?", c: "Math.round({a}*Math.pow(1+{f}/100,2))", v: {a:[1000,5000], f:[5,20]}, z:"zor", alt:"bilesik" },
    { id: "t21_021", s: "{a} TL %{f} bileşik faizle 2 yılda kaç TL faiz getirir?", c: "Math.round({a}*Math.pow(1+{f}/100,2)-{a})", v: {a:[1000,5000], f:[5,20]}, z:"zor", alt:"bilesik" },

    // ---------- PROBLEM ----------
    { id: "t21_030", s: "{a} TL'nin bir kısmı %{f1}, kalanı %{f2} faize yatırılıyor. {y} yılda toplam {g} TL faiz alınıyorsa %{f1}'e kaç TL yatırılmıştır?", c: "Math.round(({a}*{f2}*{y}/100-{g})/({f2}-{f1})*100*100)/100", v: {a:[3000,8000], f1:[8,15], f2:["{f1}+5","{f1}+25"], y:[1,3], g:["{a}*{f1}*{y}/100","{a}*{f2}*{y}/100"]}, z:"zor", alt:"problem", kural:"f2>f1" },
],

// ==========================================
// KONU 22: KÜMELER
// ==========================================
22: [

    // ---------- KÜME KAVRAMI ----------
    { id: "t22_001", s: "A = {a, b, c} kümesinin eleman sayısı kaçtır?", c: "3", v: {}, z:"kolay", alt:"kume_kavram", inputType:"choice", choices:["3","2","4","1"] },
    { id: "t22_002", s: "{a} elemanlı bir kümenin kaç tane alt kümesi vardır?", c: "Math.pow(2,{a})", v: {a:[1,6]}, z:"kolay", alt:"kume_kavram" },
    { id: "t22_003", s: "{a} elemanlı bir kümenin kaç tane öz alt kümesi vardır?", c: "Math.pow(2,{a})-1", v: {a:[1,6]}, z:"orta", alt:"kume_kavram" },
    { id: "t22_004", s: "Alt küme sayısı {s} olan küme kaç elemanlıdır?", c: "Math.round(Math.log({s})/Math.log(2))", v: {s:[4,8,16,32,64]}, z:"orta", alt:"kume_kavram" },
    { id: "t22_005", s: "{a} elemanlı bir kümenin {b} elemanlı alt küme sayısı kaçtır?", c: "kombinasyon({a},{b})", v: {a:[4,8], b:[1,"{a}-1"]}, z:"orta", alt:"kume_kavram", kural:"b<=a" },

    // ---------- BİRLEŞİM & KESİŞİM ----------
    { id: "t22_011", s: "s(A)={a}, s(B)={b}, s(A∩B)={k} ise s(A∪B) kaçtır?", c: "{a}+{b}-{k}", v: {a:[5,15], b:[5,15], k:[1,"Math.min({a},{b})-1"]}, z:"orta", alt:"birlesim", kural:"k<a&&k<b" },
    { id: "t22_012", s: "s(A∪B)={t}, s(A)={a}, s(B)={b} ise s(A∩B) kaçtır?", c: "{a}+{b}-{t}", v: {a:[5,12], b:[4,10], t:["Math.max({a},{b})","{a}+{b}-1"]}, z:"orta", alt:"birlesim", kural:"t>=Math.max(a,b)&&t<=a+b" },
    { id: "t22_020", s: "A⊂B ve s(A)={a}, s(B)={b} ise s(B-A) kaçtır?", c: "{b}-{a}", v: {a:[2,5], b:["{a}+1","{a}+8"]}, z:"orta", alt:"kesisim", kural:"b>a" },

    // ---------- PROBLEM ----------
    { id: "t22_030", s: "{n} kişilik sınıfta {m} kişi matematik, {t} kişi Türkçe kursuna gidiyor. {k} kişi ikisine de gidiyor. Kaç kişi hiçbirine gitmiyor?", c: "{n}-({m}+{t}-{k})", v: {n:[30,50], m:[12,25], t:[12,25], k:[3,10]}, z:"orta", alt:"problem", kural:"k<Math.min(m,t)&&m+t-k<=n" },
    { id: "t22_031", s: "{n} kişilik grupta {a} kişi A gazetesini, {b} kişi B gazetesini, {c} kişi her ikisini okuyor. Sadece A'yı okuyan kaç kişidir?", c: "{a}-{c}", v: {n:[40,80], a:[15,30], b:[15,30], c:[3,10]}, z:"orta", alt:"problem", kural:"a>=c" },
    { id: "t22_033", s: "{n} kişilik sınıfta {a} kişi basketbol, {b} kişi voleybol oynuyor. {c} kişi her ikisini de oynuyorsa sadece bir oyunu oynayan kaç kişidir?", c: "{a}+{b}-2*{c}", v: {n:[25,45], a:[10,25], b:[10,25], c:[2,8]}, z:"orta", alt:"problem", kural:"c<Math.min(a,b)" },

    // ---------- MANTIK ----------
    { id: "t22_040", s: "A ve B boş küme değil, s(A)=s(B)={a} ise s(A∪B) en çok kaçtır?", c: "2*{a}", v: {a:[3,8]}, z:"orta", alt:"mantik" },
    { id: "t22_041", s: "A ve B boş küme değil, s(A)=s(B)={a} ise s(A∪B) en az kaçtır?", c: "{a}", v: {a:[3,8]}, z:"orta", alt:"mantik" },
],

// ==========================================
// KONU 23: MANTIK
// ==========================================
23: [

    // ---------- ÖNERME ----------
    { id: "t23_001", s: "'2+2=4' önermesinin doğruluk değeri nedir?", c: "1", v: {}, z:"kolay", alt:"onerme", inputType:"choice", choices:["1 (Doğru)","0 (Yanlış)"] },
    { id: "t23_002", s: "'{a} > {b}' önermesinin doğruluk değeri nedir?", c: "{a}>{b}?'1':'0'", v: {a:[3,15], b:[3,15]}, z:"kolay", alt:"onerme", inputType:"choice", choices:["1 (Doğru)","0 (Yanlış)"], kural:"a!=b" },
    { id: "t23_003", s: "p: 'Ankara başkenttir' → p≡1 ise ~p nedir?", c: "0", v: {}, z:"kolay", alt:"onerme", inputType:"choice", choices:["0","1","p","Belirsiz"] },
    { id: "t23_005", s: "p≡{pv}, q≡{qv} ise p ile q'nun doğruluk değerleri için ne söylenir?", c: "{pv}=={qv}?'Denktir':'Denk değildir'", v: {pv:[0,1], qv:[0,1]}, z:"orta", alt:"onerme", inputType:"choice", choices:["Denktir","Denk değildir","Tersi","Çelişki"] },

    // ---------- VE BAĞLACI ----------
    { id: "t23_010", s: "p≡{pv}, q≡{qv} ise p∧q = ?", c: "({pv}==1&&{qv}==1)?'1':'0'", v: {pv:[0,1], qv:[0,1]}, z:"kolay", alt:"ve", inputType:"choice", choices:["1","0"] },
    { id: "t23_011", s: "p∧q≡1 ise p ve q için ne söylenir?", c: "İkisi de doğrudur", v: {}, z:"kolay", alt:"ve", inputType:"choice", choices:["İkisi de doğrudur","En az biri doğrudur","İkisi de yanlıştır","Biri doğru biri yanlıştır"] },
    { id: "t23_012", s: "p∧q≡0 ise aşağıdakilerden hangisi kesin doğrudur?", c: "En az biri yanlıştır", v: {}, z:"orta", alt:"ve", inputType:"choice", choices:["En az biri yanlıştır","İkisi de yanlıştır","p yanlıştır","q yanlıştır"] },

    // ---------- VEYA BAĞLACI ----------
    { id: "t23_020", s: "p≡{pv}, q≡{qv} ise p∨q = ?", c: "({pv}==1||{qv}==1)?'1':'0'", v: {pv:[0,1], qv:[0,1]}, z:"kolay", alt:"veya", inputType:"choice", choices:["1","0"] },
    { id: "t23_021", s: "p∨q≡0 ise p ve q için ne söylenir?", c: "İkisi de yanlıştır", v: {}, z:"kolay", alt:"veya", inputType:"choice", choices:["İkisi de yanlıştır","En az biri doğrudur","İkisi de doğrudur","Biri doğru biri yanlıştır"] },
    { id: "t23_023", s: "p∨q≡1 ve p≡0 ise q kesinlikle nedir?", c: "1", v: {}, z:"orta", alt:"veya", inputType:"choice", choices:["1","0","Belirsiz","p"] },

    // ---------- İSE BAĞLACI ----------
    { id: "t23_030", s: "p≡{pv}, q≡{qv} ise p→q = ?", c: "({pv}==1&&{qv}==0)?'0':'1'", v: {pv:[0,1], qv:[0,1]}, z:"orta", alt:"ise", inputType:"choice", choices:["1","0"] },
    { id: "t23_031", s: "p→q≡0 ise aşağıdakilerden hangisi doğrudur?", c: "p≡1 ve q≡0", v: {}, z:"orta", alt:"ise", inputType:"choice", choices:["p≡1 ve q≡0","p≡0 ve q≡1","p≡0 ve q≡0","p≡1 ve q≡1"] },

    // ---------- MANTIK PROBLEMLERİ ----------
    { id: "t23_040", s: "p: 'x asaldır', q: 'x çifttir'. x=2 için p∧q nedir?", c: "1", v: {}, z:"orta", alt:"problem", inputType:"choice", choices:["1","0","Belirsiz","Tanımsız"] },
    { id: "t23_041", s: "~(p∧q) ≡ ?", c: "~p∨~q", v: {}, z:"zor", alt:"problem", inputType:"choice", choices:["~p∨~q","~p∧~q","p∨q","~p→~q"] },
    { id: "t23_042", s: "~(p∨q) ≡ ?", c: "~p∧~q", v: {}, z:"zor", alt:"problem", inputType:"choice", choices:["~p∧~q","~p∨~q","p∧q","~p→~q"] },
    { id: "t23_043", s: "Aşağıdakilerden hangisi totolojidir?", c: "p∨~p", v: {}, z:"zor", alt:"problem", inputType:"choice", choices:["p∨~p","p∧~p","p→p","p↔~p"] },
    { id: "t23_044", s: "Aşağıdakilerden hangisi çelişkidir?", c: "p∧~p", v: {}, z:"zor", alt:"problem", inputType:"choice", choices:["p∧~p","p∨~p","p→p","p↔p"] },
],

// ==========================================
// KONU 24: VERİ, GRAFİK & İSTATİSTİK
// ==========================================
24: [

    // ---------- ORTALAMA ----------
    { id: "t24_001", s: "{a}, {b}, {c} sayılarının aritmetik ortalaması kaçtır?", c: "({a}+{b}+{c})/3", v: {a:[5,20], b:[5,20], c:[5,20]}, z:"kolay", alt:"ortalama" },
    { id: "t24_002", s: "{n} sayının aritmetik ortalaması {o} ise bu sayıların toplamı kaçtır?", c: "{n}*{o}", v: {n:[3,8], o:[10,40]}, z:"kolay", alt:"ortalama" },
    { id: "t24_003", s: "Yaş ortalaması {o} olan {n} kişilik gruba {y} yaşında biri katılırsa yeni ortalama kaç olur?", c: "Math.round(({n}*{o}+{y})/({n}+1)*100)/100", v: {n:[3,8], o:[15,35], y:[10,50]}, z:"orta", alt:"ortalama" },
    { id: "t24_005", s: "Kızların ortalaması {k}, erkeklerin ortalaması {e}. Kız sayısı {ks}, erkek sayısı {es} ise genel ortalama kaçtır?", c: "Math.round(({ks}*{k}+{es}*{e})/({ks}+{es})*100)/100", v: {k:[15,30], e:[12,28], ks:[8,20], es:[8,20]}, z:"orta", alt:"ortalama" },

    // ---------- MEDYAN ----------
    { id: "t24_010", s: "{a}, {b}, {c}, {d}, {e} sayılarının medyanı kaçtır?", c: "sirala({a},{b},{c},{d},{e})[2]", v: {a:[1,20], b:[1,20], c:[1,20], d:[1,20], e:[1,20]}, z:"orta", alt:"medyan" },
    { id: "t24_011", s: "{a}, {b}, {c}, {d} sayılarının medyanı kaçtır?", c: "(sirala({a},{b},{c},{d})[1]+sirala({a},{b},{c},{d})[2])/2", v: {a:[1,20], b:[1,20], c:[1,20], d:[1,20]}, z:"orta", alt:"medyan" },

    // ---------- MOD ----------
    { id: "t24_020", s: "{a},{a},{b},{c},{d} veri grubunun modu kaçtır?", c: "{a}", v: {a:[3,10], b:[1,15], c:[1,15], d:[1,15]}, z:"kolay", alt:"mod", kural:"a!=b&&a!=c&&a!=d" },
    { id: "t24_021", s: "{a},{a},{b},{b},{c} veri grubunun modu kaçtır?", c: "{a} ve {b}", v: {a:[3,10], b:[5,12], c:[1,15]}, z:"orta", alt:"mod", kural:"a!=b&&a!=c&&b!=c", inputType:"choice", choices:["{a} ve {b}","{a}","{b}","{c}"] },

    // ---------- AÇIKLIK ----------
    { id: "t24_030", s: "{a}, {b}, {c}, {d}, {e} veri grubunun açıklığı kaçtır?", c: "Math.max({a},{b},{c},{d},{e})-Math.min({a},{b},{c},{d},{e})", v: {a:[5,50], b:[5,50], c:[5,50], d:[5,50], e:[5,50]}, z:"kolay", alt:"aciklik" },
    { id: "t24_031", s: "Açıklığı {a} olan bir veri grubunda en küçük sayı {e} ise en büyük sayı en az kaçtır?", c: "{a}+{e}", v: {a:[5,20], e:[3,15]}, z:"orta", alt:"aciklik" },

    // ---------- GRAFİK ----------
    { id: "t24_040", s: "Bir sınıftaki öğrencilerin %{a}'i kız, %{b}'i erkek. Daire grafiğinde erkeklerin açısı kaç derecedir?", c: "Math.round({b}*3.6)", v: {a:[30,70], b:"100-{a}"}, z:"orta", alt:"grafik" },
    { id: "t24_041", s: "Sütun grafiğinde A: {a}, B: {b}, C: {c} birim. Toplam {t} ise A'nın oranı % kaçtır?", c: "Math.round({a}/{t}*100)", v: {a:[10,40], b:[15,35], c:[10,30], t:"{a}+{b}+{c}"}, z:"orta", alt:"grafik" },

    // ---------- YENİ NESİL ----------
    { id: "t24_052", s: "Bir öğrencinin {n} sınavının ortalaması {o}'dir. Son sınavdan kaç alırsa ortalama {h} olur?", c: "Math.round(({n}+1)*{h}-{n}*{o})", v: {n:[2,5], o:[50,70], h:["{o}+3","{o}+15"]}, z:"zor", alt:"yeni_nesil", kural:"h>o" },
],

// ==========================================
// KONU 25: 2. DERECEDEN DENKLEMLER (DGS)
// ==========================================
25: [

    // ---------- KÖK BULMA ----------
    { id: "t25_001", s: "x² - {a} = 0 denkleminin kökleri nedir?", c: "function(){var s=Math.sqrt({a});return '-'+s+' ve '+s}()", v: {a:[4,9,16,25,36]}, z:"kolay", alt:"kok_bulma" },
    { id: "t25_002", s: "x² - {b}x = 0 denkleminin kökleri nedir?", c: "'0 ve '+{b}", v: {b:[2,8]}, z:"kolay", alt:"kok_bulma" },
    { id: "t25_003", s: "x² - {s}x + {c} = 0 denkleminin köklerini bulun (tam sayı)", c: "function(){var s={s},c={c};for(var i=1;i<=c;i++){if(c%i==0){var j=c/i;if(i+j==s)return i+' ve '+j}}return 'Tam sayı kök yok'}()", v: {s:[5,10], c:[6,24]}, z:"orta", alt:"kok_bulma" },
    { id: "t25_004", s: "(x-{a})(x+{b}) = 0 denkleminin kökleri nedir?", c: "'{a} ve -{b}'", v: {a:[2,6], b:[2,6]}, z:"kolay", alt:"kok_bulma" },

    // ---------- DİSKRİMİNANT ----------
    { id: "t25_010", s: "x² - {b}x + {c} = 0 denkleminin diskriminantı (Δ) kaçtır?", c: "{b}*{b}-4*{c}", v: {b:[4,8], c:[3,15]}, z:"orta", alt:"diskriminant" },
    { id: "t25_011", s: "Δ = {d} ise denklemin kaç reel kökü vardır?", c: "{d}>0?'2 farklı':{d}==0?'1 (çakışık)':'Reel kök yok'", v: {d:[-4,10]}, z:"orta", alt:"diskriminant", inputType:"choice", choices:["2 farklı","1 (çakışık)","Reel kök yok"] },

    // ---------- KÖKLER TOPLAMI & ÇARPIMI ----------
    { id: "t25_020", s: "x² - {s}x + {c} = 0 denkleminin kökler toplamı kaçtır?", c: "{s}", v: {s:[3,10], c:[2,24]}, z:"kolay", alt:"kok_toplam" },
    { id: "t25_021", s: "x² - {s}x + {c} = 0 denkleminin kökler çarpımı kaçtır?", c: "{c}", v: {s:[3,10], c:[2,24]}, z:"orta", alt:"kok_toplam" },
    { id: "t25_023", s: "x² - {s}x + {c} = 0 denkleminin kökleri x₁ ve x₂ ise x₁² + x₂² kaçtır?", c: "{s}*{s}-2*{c}", v: {s:[4,10], c:[3,20]}, z:"zor", alt:"kok_toplam" },

    // ---------- ÇÖZÜM KÜMESİ ----------
    { id: "t25_031", s: "x² + 1 = 0 denkleminin reel sayılarda çözüm kümesi nedir?", c: "Boş küme", v: {}, z:"orta", alt:"cozum_kumesi", inputType:"choice", choices:["Boş küme","{1}","{-1, 1}","{0}"] },
    { id: "t25_032", s: "x² + {a}x + {b} = 0 denkleminin köklerinden biri {k} ise diğeri kaçtır?", c: "{b}/{k}", v: {a:[5,9], b:[4,16], k:[1,4]}, z:"zor", alt:"cozum_kumesi", kural:"b%k==0" },

    // ---------- PROBLEM ----------
    { id: "t25_040", s: "x² - {s}x + {c} = 0 denkleminin kökleri {oran} oranında ise kökler kaçtır?", c: "function(){var s={s},c={c},o={oran};var k1=s/(o+1);var k2=o*k1;if(k1*k2==c)return k1+' ve '+k2;return 'Uygun değil'}()", v: {s:[7,15], c:[10,50], oran:[2,3]}, z:"zor", alt:"problem" },
],

// ==========================================
// KONU 26: FONKSİYONLAR (DGS)
// ==========================================
26: [

    // ---------- DEĞER BULMA ----------
    { id: "t26_001", s: "f(x) = {a}x + {b} ise f({c}) kaçtır?", c: "{a}*{c}+{b}", v: {a:[2,5], b:[1,10], c:[1,10]}, z:"kolay", alt:"deger_bulma" },
    { id: "t26_003", s: "f(x) = x² + {a}x + {b} ise f({c}) kaçtır?", c: "{c}*{c}+{a}*{c}+{b}", v: {a:[1,5], b:[1,10], c:[1,6]}, z:"orta", alt:"deger_bulma" },
    { id: "t26_005", s: "f(x) = 2x + {a}, g(x) = x - {b} ise f(g({c})) kaçtır?", c: "2*({c}-{b})+{a}", v: {a:[1,8], b:[1,5], c:[3,10]}, z:"zor", alt:"deger_bulma", kural:"c>b" },

    // ---------- TERS FONKSİYON ----------
    { id: "t26_010", s: "f(x) = {a}x + {b} ise f⁻¹(x) nedir?", c: "'(x-{b})/{a}'", v: {a:[2,5], b:[1,8]}, z:"orta", alt:"ters" },
    { id: "t26_011", s: "f(x) = {a}x + {b} ise f⁻¹({c}) kaçtır?", c: "({c}-{b})/{a}", v: {a:[2,5], b:[1,8], c:["{a}+{b}","{a}*5+{b}"]}, z:"orta", alt:"ters" },

    // ---------- BİLEŞKE ----------
    { id: "t26_020", s: "f(x) = {a}x + {b}, g(x) = {c}x - {d} ise (f∘g)(x) nedir?", c: "'{a*c}x+'+({b-a*d})", v: {a:[2,4], b:[1,5], c:[2,4], d:[1,5]}, z:"zor", alt:"bileske" },
    { id: "t26_022", s: "f(x) = {a}x + {b}, g(x) = {c}x - {d} ise (f∘g)({k}) kaçtır?", c: "{a}*({c}*{k}-{d})+{b}", v: {a:[2,4], b:[1,5], c:[2,4], d:[1,5], k:[1,8]}, z:"zor", alt:"bileske" },

    // ---------- GRAFİK ----------
    { id: "t26_030", s: "f(x) = {a}x + {b} doğrusunun eğimi kaçtır?", c: "{a}", v: {a:[2,6], b:[1,8]}, z:"kolay", alt:"grafik" },
    { id: "t26_031", s: "f(x) = {a}x + {b} doğrusu y eksenini hangi noktada keser?", c: "'(0,{b})'", v: {a:[2,6], b:[1,8]}, z:"orta", alt:"grafik" },
    { id: "t26_033", s: "f(x) = {a}x + {b} fonksiyonu artan mı azalan mı?", c: "{a}>0?'Artan':'Azalan'", v: {a:[-5,5]}, z:"kolay", alt:"grafik", inputType:"choice", choices:["Artan","Azalan","Sabit","Bilinemez"], kural:"a!=0" },

    // ---------- PROBLEM ----------
    { id: "t26_040", s: "f(x) doğrusal fonksiyon, f({a})={b} ve f({c})={d} ise f({k}) kaçtır?", c: "dogrusalDeger({a},{b},{c},{d},{k})", v: {a:[1,4], b:[3,12], c:["{a}+2","{a}+5"], d:["{b}+4","{b}+12"], k:[2,10]}, z:"zor", alt:"problem" },
    { id: "t26_042", s: "f: R→R, f(x) = {a}x + {b} ise f(x+{k}) - f(x) kaçtır?", c: "{a}*{k}", v: {a:[2,6], b:[1,8], k:[1,5]}, z:"orta", alt:"problem" },
],

// ==========================================
// KONU 27: PERMÜTASYON & KOMBİNASYON (DGS)
// ==========================================
27: [

    // ---------- FAKTÖRİYEL ----------
    { id: "t27_001", s: "{n}! = ?", c: "faktoriyel({n})", v: {n:[3,7]}, z:"kolay", alt:"faktoriyel" },
    { id: "t27_003", s: "{n}! sayısının sonunda kaç sıfır vardır?", c: "sifirSayisi({n})", v: {n:[5,25]}, z:"orta", alt:"faktoriyel" },
    { id: "t27_004", s: "0! + 1! + 2! = ?", c: "4", v: {}, z:"kolay", alt:"faktoriyel" },

    // ---------- PERMÜTASYON ----------
    { id: "t27_010", s: "P({n},{r}) = ?", c: "permutasyon({n},{r})", v: {n:[5,8], r:[2,"{n}-2"]}, z:"orta", alt:"permutasyon", kural:"r<=n" },
    { id: "t27_011", s: "{n} kişi {r} sandalyeye kaç farklı şekilde oturabilir?", c: "permutasyon({n},{r})", v: {n:[4,8], r:[2,"{n}-1"]}, z:"orta", alt:"permutasyon", kural:"r<=n" },
    { id: "t27_014", s: "{a} kız, {b} erkek kızlar bir arada olmak şartıyla kaç farklı şekilde sıralanır?", c: "faktoriyel({a})*faktoriyel({b}+1)", v: {a:[2,4], b:[2,4]}, z:"zor", alt:"permutasyon" },

    // ---------- TEKRARLI PERMÜTASYON ----------
    { id: "t27_021", s: "{a} tane A, {b} tane B harfi kaç farklı şekilde sıralanır?", c: "faktoriyel({a}+{b})/(faktoriyel({a})*faktoriyel({b}))", v: {a:[2,4], b:[2,4]}, z:"orta", alt:"tekrarli" },

    // ---------- KOMBİNASYON ----------
    { id: "t27_030", s: "C({n},{r}) = ?", c: "kombinasyon({n},{r})", v: {n:[5,10], r:[2,"{n}-3"]}, z:"orta", alt:"kombinasyon", kural:"r<=n" },
    { id: "t27_031", s: "{n} kişiden {r} kişilik ekip kaç farklı şekilde seçilir?", c: "kombinasyon({n},{r})", v: {n:[5,10], r:[2,4]}, z:"orta", alt:"kombinasyon", kural:"r<=n" },
    { id: "t27_032", s: "{n} kişilik gruptan {r} kişi seçiliyor. Belli bir kişi kesin seçilecekse kaç farklı seçim olur?", c: "kombinasyon({n}-1,{r}-1)", v: {n:[6,10], r:[2,"{n}-3"]}, z:"zor", alt:"kombinasyon", kural:"r<=n" },
    { id: "t27_033", s: "{n} kişilik gruptan {r} kişi seçiliyor. Belli bir kişi kesin seçilmeyecekse kaç farklı seçim olur?", c: "kombinasyon({n}-1,{r})", v: {n:[6,10], r:[2,"{n}-3"]}, z:"zor", alt:"kombinasyon", kural:"r<=n-1" },
    { id: "t27_034", s: "C({n},{r}) = C({n},{k}) ise r+k = ?", c: "{n}", v: {n:[5,10], r:[1,4], k:"{n}-{r}"}, z:"orta", alt:"kombinasyon" },

    // ---------- PROBLEM ----------
    { id: "t27_040", s: "{n} noktadan kaç farklı doğru geçer? (Herhangi 3 nokta doğrusal değil)", c: "kombinasyon({n},2)", v: {n:[4,8]}, z:"orta", alt:"problem" },
    { id: "t27_041", s: "{n} köşeli çokgenin kaç köşegeni vardır?", c: "({n}*({n}-3))/2", v: {n:[4,8]}, z:"orta", alt:"problem" },
],

// ==========================================
// KONU 28: OLASILIK
// ==========================================
28: [

    // ---------- TEMEL ----------
    { id: "t28_001", s: "Bir zar atıldığında çift sayı gelme olasılığı kaçtır?", c: "1/2", v: {}, z:"kolay", alt:"temel", inputType:"choice", choices:["1/2","1/3","1/6","2/3"] },
    { id: "t28_002", s: "Bir zar atıldığında asal sayı gelme olasılığı kaçtır?", c: "1/2", v: {}, z:"kolay", alt:"temel", inputType:"choice", choices:["1/2","1/3","2/3","1/6"] },
    { id: "t28_003", s: "Bir madeni para {n} kez atılıyor. Tüm durum sayısı kaçtır?", c: "Math.pow(2,{n})", v: {n:[2,5]}, z:"kolay", alt:"temel" },
    { id: "t28_004", s: "Bir olayın olma olasılığı {pay}/{payda} ise olmama olasılığı kaçtır?", c: "{payda-pay}/{payda}", v: {pay:[1,4], payda:[5,8]}, z:"kolay", alt:"temel", kural:"pay<payda" },
    { id: "t28_005", s: "Olasılık değeri aşağıdakilerden hangisi olamaz?", c: "-0.5", v: {}, z:"kolay", alt:"temel", inputType:"choice", choices:["-0.5","0","0.5","1"] },

    // ---------- ZAR ----------
    { id: "t28_010", s: "İki zar atıldığında toplamın {t} olma olasılığı kaçtır?", c: "zarOlasilik({t})", v: {t:[2,12]}, z:"orta", alt:"zar" },
    { id: "t28_012", s: "İki zar atıldığında çarpımın çift olma olasılığı kaçtır?", c: "3/4", v: {}, z:"orta", alt:"zar", inputType:"choice", choices:["3/4","1/2","1/4","2/3"] },
    { id: "t28_013", s: "İki zar atıldığında gelen sayıların aynı olma olasılığı kaçtır?", c: "1/6", v: {}, z:"kolay", alt:"zar", inputType:"choice", choices:["1/6","1/36","1/3","1/2"] },
    { id: "t28_014", s: "İki zar atıldığında gelen sayıların farkının {f} olma olasılığı kaçtır?", c: "zarFark({f})", v: {f:[1,5]}, z:"zor", alt:"zar" },

    // ---------- TOP ----------
    { id: "t28_020", s: "Torbada {k} kırmızı, {m} mavi top var. Çekilen topun kırmızı olma olasılığı kaçtır?", c: "{k}/({k}+{m})", v: {k:[3,8], m:[2,8]}, z:"kolay", alt:"top" },
    { id: "t28_021", s: "Torbada {k} kırmızı, {m} mavi top var. Art arda 2 top çekiliyor. İkisinin de kırmızı olma olasılığı? (çekilen geri atılmıyor)", c: "({k}/({k}+{m}))*(({k}-1)/({k}+{m}-1))", v: {k:[4,8], m:[3,6]}, z:"orta", alt:"top", kural:"k>=2" },
    { id: "t28_022", s: "Torbada {k} kırmızı, {m} mavi top var. Çekilen top geri atılıp 2 top çekiliyor. İkisinin de kırmızı olma olasılığı?", c: "Math.pow({k}/({k}+{m}),2)", v: {k:[3,6], m:[2,6]}, z:"orta", alt:"top" },
    { id: "t28_024", s: "Torbada {a} beyaz, {b} siyah top var. En az kaç top çekilirse kesinlikle beyaz gelir?", c: "{b}+1", v: {a:[3,8], b:[2,6]}, z:"orta", alt:"top", inputType:"choice", choices:["{b+1}","{b}","{a}","{a+b}"] },

    // ---------- KART ----------
    { id: "t28_030", s: "52'lik desteden çekilen kartın maça olma olasılığı?", c: "1/4", v: {}, z:"kolay", alt:"kart", inputType:"choice", choices:["1/4","1/13","1/52","1/2"] },
    { id: "t28_031", s: "52'lik desteden çekilen kartın as olma olasılığı?", c: "1/13", v: {}, z:"kolay", alt:"kart", inputType:"choice", choices:["1/13","1/4","1/52","4/52"] },

    // ---------- BAĞIMSIZ OLAY ----------
    { id: "t28_040", s: "A olayının olasılığı {a}/{b}, B olayının olasılığı {c}/{d}. Bağımsız ise A∩B olasılığı?", c: "({a}*{c})/({b}*{d})", v: {a:[1,3], b:[3,8], c:[1,4], d:[3,8]}, z:"orta", alt:"bagimsiz", kural:"a<b&&c<d" },
    { id: "t28_042", s: "Bir hedefi A'nın vurma olasılığı {a}/{b}, B'nin {c}/{d}. Hedefin vurulma olasılığı?", c: "1-(1-{a}/{b})*(1-{c}/{d})", v: {a:[1,5], b:[3,8], c:[1,4], d:[3,8]}, z:"zor", alt:"bagimsiz", kural:"a<b&&c<d" },

    // ---------- YENİ NESİL ----------
    { id: "t28_050", s: "Bir torbada {k} kırmızı, {m} mavi bilye var. Art arda 3 bilye çekiliyor. Sırayla K,M,K gelme olasılığı? (geri atılmıyor)", c: "({k}/({k}+{m}))*({m}/({k}+{m}-1))*(({k}-1)/({k}+{m}-2))", v: {k:[5,8], m:[3,6]}, z:"zor", alt:"yeni_nesil", kural:"k>=2" },
    { id: "t28_052", s: "İki zar birlikte atılıyor. Zarlardan en az birinin {a} gelme olasılığı?", c: "11/36", v: {a:[1,6]}, z:"orta", alt:"yeni_nesil", inputType:"choice", choices:["11/36","1/6","1/3","5/36"] },
]
};
