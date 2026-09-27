# Misyon Koruma – Soru Bankası (v4)

Telefon öncelikli, sunucusuz soru çözme uygulaması. GitHub Pages'te çalışır.

## Dosyalar (hepsi aynı klasörde, alt klasör yok)

| Dosya | Görevi |
|---|---|
| index.html | Açılış sayfası + sürüm numarası (`var V = '4.0.0'`) |
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

**Bir soru dosyasını güncelledikten sonra** `index.html` içindeki `var V = '4.0.0'` değerini artır
(ör. `4.0.1`). Böylece telefonlar eski dosyayı önbellekten kullanmaz.

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
