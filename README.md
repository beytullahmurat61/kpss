# Misyon Koruma – Soru Bankası

Tarayıcıda çalışan soru çözme uygulaması. Sunucu gerekmez, GitHub Pages'te çalışır.

## Dosyalar (hepsi aynı klasörde, alt klasör yok)

| Dosya | Görevi |
|---|---|
| index.html | Uygulamanın açılış sayfası |
| style.css | Görünüm |
| config.js | Dersler ve ünite başlıkları |
| questions.js | **SORULAR** – soru eklediğin tek dosya |
| app.js | Uygulama motoru (dokunmana gerek yok) |

## GitHub'a yükleme

1. github.com → sağ üst **+** → **New repository** → ad ver (ör. `misyon-koruma`) → **Public** → **Create repository**.
2. Açılan sayfada **uploading an existing file** bağlantısına tıkla.
3. ZIP'i bilgisayarında aç; içindeki **dosyaları** (klasörü değil) sürükle bırak → **Commit changes**.
   Depo ana sayfasında `index.html` doğrudan görünmeli; bir klasörün içinde olmamalı.
4. **Settings → Pages** → Source: *Deploy from a branch* → Branch: **main** ve **/(root)** → **Save**.
5. 1–3 dakika bekle. Adres: `https://KULLANICIADIN.github.io/misyon-koruma/`

> Not: ZIP'ten çıkan `index.html`'i telefonda dosya olarak açmak çalışmaz (tarayıcı diğer dosyaları yüklemez).
> Uygulamayı her zaman GitHub Pages adresinden aç.

## Soru ekleme

### Yol 1 – Excel ile (önerilen)
1. Uygulamada **📥 Soru Yükle → CSV şablonu indir**.
2. Excel'de doldur, **CSV (noktalı virgülle ayrılmış)** olarak kaydet.
3. **Dosya seç** → kontrol sonucunu gör → **Kaydet**. Sorular hemen o cihazda çalışır.
4. Herkeste/her cihazda görünmesi için **⬇️ questions.js dosyasını indir** → GitHub'da
   `questions.js` dosyasına tıkla → çöp kutusu ile sil ya da **Add file → Upload files** ile yenisini yükle (aynı adla üzerine yazar).

CSV sütunları: `id ; ders ; unite ; zorluk ; soru ; A ; B ; C ; D ; E ; cevap ; aciklama ; kaynak`
- ders: `anayasa` veya `Anayasa Hukuku` · unite: `1` veya `Ünite 1` · zorluk: `kolay/orta/zor` · cevap: `A`–`E`
- id boş bırakılabilir, otomatik verilir. Ders/ünite listesi: Soru Yükle → *Ders/ünite listesi*.

### Yol 2 – GitHub'da doğrudan düzenleme
`questions.js` → kalem simgesi. İlgili ünitenin `[ ]` içine örnekteki gibi soru ekle, sorular arasına **virgül** koy.
`answer`: 0=A, 1=B, 2=C, 3=D, 4=E. Yanlış yazarsan uygulama açılışta **hatalı satırı** gösterir.

Her derste **"ÖRNEK SORU"** ile başlayan 1 soru var; kendi sorularını ekleyince silebilirsin.

## Ders kodları
anayasa · ceza · idare · cmk · ataturk · insan · genel · protokol · ingilizce · silah · pmm
Ünite kodu: `<ders>_u<no>` → `anayasa_u1`, `cmk_u3` …

## Veriler
İlerleme (doğru/yanlış, favoriler, geçmiş) tarayıcıda saklanır. Cihaz değiştirirken
**İstatistikler → Yedek indir / Yedek yükle** kullan.
