# Misyon Koruma – Sınav Hazırlık Platformu (v5)

Telefon öncelikli, sunucusuz soru çözme uygulaması. GitHub Pages'te çalışır.

## Dosyalar (hepsi aynı klasörde, alt klasör yok)

| Dosya | Görevi |
|---|---|
| index.html | Açılış sayfası + sürüm numarası (`var V = '5.0.0'`) |
| style.css / app.js | Görünüm ve uygulama motoru (dokunmaya gerek yok) |
| config.js | Ders listesi |
| sorular-anayasa.js … sorular-pmm.js | **Her dersin kendi soru dosyası** (11 dosya) |

Bir derse tıklandığında o dersin dosyası yüklenir. Bir dosyada hata olursa yalnızca o ders etkilenir;
uygulama hatanın satırını gösterir (Ayarlar ⚙︎ → Soru dosyaları).

## İçerik

| Ders | İçerik |
|---|---|
| Anayasa Hukuku | 297 soru (10 ünite), kitabın 100 soruluk Deneme Sınavı + Test 1–5, 487 soru-cevap kartı |
| Ceza Hukuku | 48 soru (5 ünite) |
| İdare Hukuku | 44 soru (5 ünite) |
| CMK | 47 soru (5 ünite) |
| Diğer 7 ders | Ünite yapısı hazır, sorular bekleniyor |

Güncellik kontrolü yapıldı: eski düzenlemeye dayanan sorular güncellendi veya çıkarıldı
(ör. KYOK itirazı 7499 s. Kanunla "iki hafta"; 2017 sonrası meclis soruşturması 301 imza).

## v5 ile gelenler

- **100 soruluk gerçek sınav simülatörü (ana sayfa):** resmi ağırlıklar (PMM %20, Silah %20, İnsan Hakları %10, Anayasa/İdare %10, Atatürk %10, Protokol %10, Genel Kültür %10, İngilizce %10), soruların %80'i hiç çözülmemiş veya Leitner'e göre tekrar bekleyen yanlışlardan, zorluk %20 kolay / %60 orta / %20 zor. 125 dakika, süre bitince sınav kilitlenir, sonuçta 4 yanlış 1 doğruyu götürür neti ve ders bazlı karne. Ağırlıklar `config.js` → `simWeights`.
- **Ünite sekmesi:** "Kitap Alıştırmaları" ve "Soru Bankası Testleri" (20'şer soruluk testler, anında geri bildirim).
- **Denemeler sekmesi (yalnızca sınav modu):** ünite ara denemeleri, genel bitirme denemeleri ve zorluk seçmeli (Kolay/Orta/Zor/Karma) dinamik deneme üretici.
- **Leitner kartları:** Bilemedim (hemen) · Zorlandım (yarın) · Bildim (3 gün) · Çok kolay (10 gün). Akıllı tur, en az bilinen kartı öne alır. Klavye: 1–4.
- **Hafıza Eşleştirme oyunu:** kanun numarası ↔ kanun adı, rütbe ↔ tanım (Ana Sayfa → Diğer). Liste `app.js` içinde `GAME_PAIRS`.
- **İstatistik → Başarı trendi:** son 10 deneme/sınavın netlerine doğrusal regresyon.
- **Kalıcı veri:** `navigator.storage.persist()`, Ayarlar'da durum ve yedek tarihi, JSON yedek indir/yükle.
- **Tema:** emniyet laciverti/sarı, her dersin kendi vurgu rengi (`config.js` → `color`), Nöbet Modu (saf siyah OLED).

### Soru dosyasındaki yeni isteğe bağlı alanlar

```js
"isExercise": true,      // Kitap Alıştırması (yazılmazsa Soru Bankası sayılır)
"isBank": true,          // Soru Bankası
"guncel": true,          // (veya "isUpdated": true) ⚠️ GÜNCEL MEVZUAT DEĞİŞİKLİĞİ etiketi
"denemeTur": "genel"     // kitap denemesi için: "unite" | "genel"
```

## Uygulama bölümleri

- **Alt menü:** Ana Sayfa · Dersler · Karma Test · Yanlışlar · İstatistik
- **Ders sayfası:** Üniteler | Denemeler | Kartlar sekmeleri
- **Denemeler:** kitaptaki deneme ve testler (süreli sınav veya alıştırma) + istenen sayıda yeni deneme oluşturma
- **Karma Test:** seçilen tüm derslerin havuzundan, derslere dengeli dağıtılmış soru; alıştırma veya süreli sınav
- Yanlışlarım (öncelikli tekrar), Favoriler / Daha sonra, Zayıf üniteler, Çözüm geçmişi, Günlük hedef ve seri
- **Ayarlar ⚙︎:** yazı boyutu, açık/koyu tema, otomatik ilerleme, dosya durumu, yedek al/yükle

## GitHub'a yükleme

1. Depo → **Add file → Upload files** → ZIP'teki **tüm dosyaları** sürükle → Commit.
2. **Settings → Pages → Branch: main, /(root) → Save**.
3. Adres: `https://KULLANICIADIN.github.io/DEPO-ADI/`
4. Telefonda tarayıcı menüsünden **"Ana ekrana ekle"** ile uygulama gibi kullanabilirsin.

**Bir soru dosyasını güncelledikten sonra** `index.html` içindeki `var V = '5.0.0'` değerini artır
(ör. `5.0.1`). Böylece telefonlar eski dosyayı önbellekten kullanmaz.

## Soru ekleme (ders dosyasının içinde)

```js
{
  "id": "CEZA_U02_0011",          // benzersiz; sonradan değiştirme
  "unite": 2,                      // uniteler listesindeki sıra
  "zorluk": "orta",                // kolay | orta | zor
  "soru": "Soru metni",
  "secenekler": ["A", "B", "C", "D", "E"],
  "cevap": "C",
  "aciklama": "Kısa açıklama (isteğe bağlı)",
  "kaynak": "TCK m.21 (isteğe bağlı)",
  "deneme": "Deneme Sınavı", "sira": 12   // yalnızca kitap deneme/testindeki sorular için
}
```
Kart: `{"id": "ANAYASA_K0001", "soru": "...", "cevap": "...", "aciklama": "..."}`

Yeni kitap PDF'lerini gönderdiğinde aynı düzende ilgili `sorular-<ders>.js` dosyası hazırlanır.
