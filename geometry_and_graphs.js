// geometry_and_graphs.js - Geometri ve Grafik Şablonları
// Mevcut QUESTION_TEMPLATES'i kullan, yoksa oluştur
var QUESTION_TEMPLATES = (typeof QUESTION_TEMPLATES !== 'undefined') ? QUESTION_TEMPLATES : {};

// Konu 29: GEOMETRİ
if (!QUESTION_TEMPLATES[29]) QUESTION_TEMPLATES[29] = [];
QUESTION_TEMPLATES[29].push(
  {
    id: "geo_tri_001",
    z: "kolay",
    s: "Yandaki üçgende {a}° ve {b}° verilmiştir. Üçüncü açı kaç derecedir?",
    c: "180 - {a} - {b}",
    v: { a: [30, 80], b: [30, 80] },
    kural: "a + b < 180",
    draw: "triangle",
    drawParams: { angles: ["{a}", "{b}"] },
    cozum: "Üçgenin iç açıları toplamı 180°'dir. x = 180 - ({a}+{b}) = {cevap}°"
  },
  {
    id: "geo_tri_pythagoras",
    z: "orta",
    s: "Yandaki dik üçgende dik kenarlar {a} cm ve {b} cm ise hipotenüs kaç cm'dir?",
    c: "Math.sqrt({a}*{a} + {b}*{b})",
    v: { a: [3, 12], b: [4, 16] },
    draw: "right_triangle",
    drawParams: { legs: ["{a}", "{b}"] },
    cozum: "Pisagor teoremi: x² = {a}² + {b}² = {a*a} + {b*b} = {a*a+b*b} → x = √{a*a+b*b} = {cevap} cm"
  },
  {
    id: "geo_rect_area",
    z: "kolay",
    s: "Bir dikdörtgenin kısa kenarı {a} cm, uzun kenarı {b} cm ise alanı kaç cm²'dir?",
    c: "{a}*{b}",
    v: { a: [2, 15], b: [3, 20] },
    draw: "rectangle",
    drawParams: { width: "{a}", height: "{b}" },
    cozum: "Dikdörtgen alanı = kısa kenar × uzun kenar = {a} × {b} = {cevap} cm²"
  },
  {
    id: "geo_rect_perimeter",
    z: "kolay",
    s: "Bir dikdörtgenin kısa kenarı {a} cm, uzun kenarı {b} cm ise çevresi kaç cm'dir?",
    c: "2*({a}+{b})",
    v: { a: [2, 15], b: [3, 20] },
    draw: "rectangle",
    drawParams: { width: "{a}", height: "{b}" },
    cozum: "Dikdörtgen çevresi = 2×(kısa kenar + uzun kenar) = 2×({a}+{b}) = {cevap} cm"
  },
  {
    id: "geo_square_area",
    z: "kolay",
    s: "Bir kenar uzunluğu {a} cm olan karenin alanı kaç cm²'dir?",
    c: "{a}*{a}",
    v: { a: [1, 20] },
    draw: "square",
    drawParams: { side: "{a}" },
    cozum: "Karenin alanı = kenar × kenar = {a}×{a} = {cevap} cm²"
  },
  {
    id: "geo_square_perimeter",
    z: "kolay",
    s: "Bir kenar uzunluğu {a} cm olan karenin çevresi kaç cm'dir?",
    c: "4*{a}",
    v: { a: [1, 20] },
    draw: "square",
    drawParams: { side: "{a}" },
    cozum: "Karenin çevresi = 4 × kenar = 4×{a} = {cevap} cm"
  },
  {
    id: "geo_circle_area",
    z: "orta",
    s: "Yarıçapı {r} cm olan dairenin alanı kaç cm²'dir? (π = 3 alınız)",
    c: "3 * {r} * {r}",
    v: { r: [2, 10] },
    draw: "circle",
    drawParams: { radius: "{r}" },
    cozum: "Daire alanı = π×r² = 3×{r}² = {cevap} cm²"
  },
  {
    id: "geo_triangle_area",
    z: "orta",
    s: "Bir üçgenin taban uzunluğu {b} cm, yüksekliği {h} cm ise alanı kaç cm²'dir?",
    c: "({b}*{h})/2",
    v: { b: [4, 20], h: [3, 15] },
    draw: "triangle_with_height",
    drawParams: { base: "{b}", height: "{h}" },
    cozum: "Üçgen alanı = (taban × yükseklik)/2 = ({b}×{h})/2 = {cevap} cm²"
  }
);

// Konu 30: GRAFİK
if (!QUESTION_TEMPLATES[30]) QUESTION_TEMPLATES[30] = [];
QUESTION_TEMPLATES[30].push(
  {
    id: "graph_pie_001",
    z: "kolay",
    s: "Bir sınıfta {a} kişi matematik, {b} kişi Türkçe seçmiştir. Daire grafiğinde Türkçe seçenlerin merkez açısı {angle}° ise toplam öğrenci sayısı kaçtır?",
    c: "Math.round({b} * 360 / {angle})",
    v: { a: [10, 30], b: [10, 30], angle: [60, 150] },
    kural: "b * 360 % angle == 0 && angle < 360",
    cozum: "Merkez açı = (b/ t) × 360 → t = (b × 360) / angle = {cevap}"
  },
  {
    id: "graph_bar_001",
    z: "kolay",
    s: "Aşağıdaki sütun grafiğinde A: {a}, B: {b}, C: {c} değerleri verilmiştir. En büyük ve en küçük değer arasındaki fark kaçtır?",
    c: "Math.max({a},{b},{c}) - Math.min({a},{b},{c})",
    v: { a: [50, 200], b: [30, 180], c: [40, 220] },
    cozum: "En büyük - en küçük = {cevap}"
  },
  {
    id: "graph_mean_001",
    z: "kolay",
    s: "{a}, {b}, {c} sayılarının aritmetik ortalaması kaçtır?",
    c: "({a}+{b}+{c})/3",
    v: { a: [10, 50], b: [10, 50], c: [10, 50] },
    cozum: "Ortalama = toplam / 3 = ({a}+{b}+{c})/3 = {cevap}"
  },
  {
    id: "graph_median_001",
    z: "orta",
    s: "{a}, {b}, {c}, {d}, {e} sayılarının medyanı kaçtır?",
    c: "sirala({a},{b},{c},{d},{e})[2]",
    v: { a: [1, 20], b: [1, 20], c: [1, 20], d: [1, 20], e: [1, 20] },
    cozum: "Sıralı dizide ortadaki sayı medyandır. {cevap}"
  }
);

console.log('✅ geometry_and_graphs.js yüklendi (konu 29: ' + QUESTION_TEMPLATES[29].length + ' şablon, konu 30: ' + QUESTION_TEMPLATES[30].length + ' şablon)');
