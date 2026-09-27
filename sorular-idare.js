// ============================================================
// İDARE HUKUKU – SORU DOSYASI
// Bu dosya dersin ünitelerini, sorularını, deneme sınavlarını ve kartlarını içerir.
// Soru alanları:
//   id        benzersiz kimlik (değiştirme; ilerleme buna bağlıdır)
//   unite     ünite numarası (uniteler listesindeki sıra, 1'den başlar)
//   zorluk    kolay | orta | zor
//   soru, secenekler (5 şık), cevap (A–E), aciklama (isteğe bağlı), kaynak (isteğe bağlı)
//   deneme + sira : soru bir deneme/testin parçasıysa adı ve sırası
// Kartlar (açık uçlu): { id, soru, cevap, aciklama }
// Yazarken sorular arasına virgül koymayı unutma; hata olursa uygulama satırı gösterir.
// ============================================================
MK.ders({
  id: "idare",
  uniteler: ["Temel Kavramlar ve İdari Teşkilat", "İdari İşlemler", "Kamu Hizmeti, Kolluk ve İdari Sözleşmeler", "Kamu Görevlileri ve Kamu Malları", "İdari Yargı ve İdarenin Sorumluluğu"],
  sorular: [
    {
      "id": "IDARE_U01_0001",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi merkezi idarenin taşra teşkilatında yer almaz?",
      "secenekler": ["Valilik", "Kaymakamlık", "Belediye", "İl müdürlükleri", "İlçe müdürlükleri"],
      "cevap": "C",
      "aciklama": "Belediye mahalli idaredir.",
      "kaynak": "Anayasa m.126–127"
    },
    {
      "id": "IDARE_U01_0002",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Merkezi idarenin, yerinden yönetim kuruluşları üzerinde kanunda öngörülen hal ve şekillerde kullandığı sınırlı denetim yetkisine ne ad verilir?",
      "secenekler": ["Hiyerarşi", "Yetki genişliği", "İdari vesayet", "Yetki devri", "Yargısal denetim"],
      "cevap": "C",
      "aciklama": "Bu yetki idari vesayettir.",
      "kaynak": "Anayasa m.127"
    },
    {
      "id": "IDARE_U01_0003",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Hiyerarşi ve idari vesayet ile ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Hiyerarşi aynı tüzel kişilik içindeki ast-üst ilişkisidir.", "Hiyerarşik amir astın işlemlerini yerindelik yönünden de denetleyebilir.", "İdari vesayet farklı kamu tüzel kişileri arasında söz konusudur.", "İdari vesayet istisnai ve kanunla sınırlı bir yetkidir.", "İdari vesayet, kanunda öngörülmesine gerek olmaksızın genel bir yetki olarak var sayılır."],
      "cevap": "E",
      "aciklama": "Kanunda açıkça öngörülmeden var sayılan yetki hiyerarşidir; vesayet istisnaidir.",
      "kaynak": "İdari teşkilat"
    },
    {
      "id": "IDARE_U01_0004",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi mahalli idare değildir?",
      "secenekler": ["İl özel idaresi", "Belediye", "Köy", "Büyükşehir belediyesi", "Valilik"],
      "cevap": "E",
      "aciklama": "Valilik merkezi idarenin taşra teşkilatıdır.",
      "kaynak": "Anayasa m.127"
    },
    {
      "id": "IDARE_U01_0005",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi hizmet yerinden yönetim kuruluşuna örnektir?",
      "secenekler": ["Valilik", "Kaymakamlık", "Bakanlık", "İl özel idaresi", "Devlet üniversitesi"],
      "cevap": "E",
      "aciklama": "Üniversiteler hizmet bakımından yerinden yönetim kuruluşudur.",
      "kaynak": "İdari teşkilat"
    },
    {
      "id": "IDARE_U01_0006",
      "unite": 1,
      "zorluk": "zor",
      "soru": "1982 Anayasası'na göre kamu tüzel kişiliği nasıl kurulur?",
      "secenekler": ["Yalnızca kanunla", "Ancak kanunla veya Cumhurbaşkanlığı kararnamesiyle", "Bakanlık yönetmeliğiyle", "Valilik kararıyla", "Genelge ile"],
      "cevap": "B",
      "aciklama": "Anayasa m.123/3: kamu tüzel kişiliği ancak kanunla veya CBK ile kurulur.",
      "kaynak": "Anayasa m.123"
    },
    {
      "id": "IDARE_U01_0007",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Anayasa'ya göre il idaresi hangi esasa dayanır?",
      "secenekler": ["İdari vesayet", "Yetki devri", "Özerklik", "Kuvvetler birliği", "Yetki genişliği"],
      "cevap": "E",
      "aciklama": "Anayasa m.126: illerin idaresi yetki genişliği esasına dayanır.",
      "kaynak": "Anayasa m.126"
    },
    {
      "id": "IDARE_U01_0008",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "“İdare kuruluş ve görevleriyle bir bütündür ve kanunla düzenlenir.” hükmü hangi ilkeyi ifade eder?",
      "secenekler": ["İdarenin kanuniliği", "Yerinden yönetim", "İdarenin bütünlüğü", "Hiyerarşi", "Kamu yararı"],
      "cevap": "C",
      "aciklama": "Anayasa m.123/1.",
      "kaynak": "Anayasa m.123"
    },
    {
      "id": "IDARE_U01_0009",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi bağımsız idari otoritelere örnektir?",
      "secenekler": ["İl özel idaresi", "Valilik", "Radyo ve Televizyon Üst Kurulu", "Kaymakamlık", "Belediye"],
      "cevap": "C",
      "aciklama": "RTÜK düzenleyici ve denetleyici bağımsız idari otoritedir.",
      "kaynak": "İdari teşkilat"
    },
    {
      "id": "IDARE_U02_0001",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi idari işlemin unsurlarından biri değildir?",
      "secenekler": ["Yetki", "Şekil", "Sebep", "İrade uyuşması", "Maksat"],
      "cevap": "D",
      "aciklama": "İdari işlemin unsurları yetki, şekil, sebep, konu ve maksattır.",
      "kaynak": "İdari işlem teorisi"
    },
    {
      "id": "IDARE_U02_0002",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Bir idari makamın yasama veya yargı alanına giren bir konuda işlem yapması hangi sakatlıktır ve sonucu nedir?",
      "secenekler": ["Yetki tecavüzü – işlem iptal edilebilir", "Şekil eksikliği – işlem düzeltilebilir", "Yetki saptırması – işlem geçerlidir", "Fonksiyon gaspı – işlem yok hükmündedir", "Sebep sakatlığı – işlem geri alınamaz"],
      "cevap": "D",
      "aciklama": "Fonksiyon gaspı ağır yetki sakatlığıdır ve yokluk yaptırımına bağlanır.",
      "kaynak": "Yetki unsuru"
    },
    {
      "id": "IDARE_U02_0003",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Bir belediye başkanı, siyasi rakibini cezalandırmak amacıyla onun ruhsat başvurusunu reddetmiştir. İşlem hangi unsur yönünden sakattır?",
      "secenekler": ["Yetki", "Şekil", "Maksat (yetki saptırması)", "Konu", "Sebep"],
      "cevap": "C",
      "aciklama": "Kamu yararı dışında amaçla işlem yapmak maksat unsurunu sakatlar.",
      "kaynak": "Maksat unsuru"
    },
    {
      "id": "IDARE_U02_0004",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Hukuka aykırı bir idari işlemin, yapıldığı tarihten itibaren geçmişe etkili olarak idarece ortadan kaldırılmasına ne ad verilir?",
      "secenekler": ["Kaldırma", "İptal", "Değiştirme", "Yürütmeyi durdurma", "Geri alma"],
      "cevap": "E",
      "aciklama": "Kaldırma geleceğe, geri alma geçmişe etkilidir.",
      "kaynak": "İdari işlemin sona ermesi"
    },
    {
      "id": "IDARE_U02_0005",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi düzenleyici işlemdir?",
      "secenekler": ["Atama kararı", "İnşaat ruhsatı", "Yönetmelik", "Disiplin cezası", "İhale kararı"],
      "cevap": "C",
      "aciklama": "Yönetmelik genel, soyut ve objektif kural koyar.",
      "kaynak": "İdari işlem türleri"
    },
    {
      "id": "IDARE_U02_0006",
      "unite": 2,
      "zorluk": "orta",
      "soru": "İdari işlemlerin, yargı yerince aksi saptanıncaya kadar hukuka uygun kabul edilmesi hangi özelliği ifade eder?",
      "secenekler": ["Re'sen icra", "Tek yanlılık", "Kesinlik", "Geriye yürümezlik", "Hukuka uygunluk karinesi"],
      "cevap": "E",
      "aciklama": "İdari işlemler hukuka uygunluk karinesinden yararlanır.",
      "kaynak": "İdari işlemin özellikleri"
    },
    {
      "id": "IDARE_U02_0007",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Kişiyi önceden belirlenmiş genel ve objektif bir hukuki duruma sokan işleme (örneğin memur olarak atama) ne ad verilir?",
      "secenekler": ["Sübjektif işlem", "Düzenleyici işlem", "Karma işlem", "Hazırlık işlemi", "Şart işlem"],
      "cevap": "E",
      "aciklama": "Şart işlem kişiyi objektif statüye sokar.",
      "kaynak": "Duguit sınıflandırması"
    },
    {
      "id": "IDARE_U02_0008",
      "unite": 2,
      "zorluk": "orta",
      "soru": "İdarenin, işlemini yargı kararına gerek olmaksızın kendi gücüyle uygulayabilmesine ne ad verilir?",
      "secenekler": ["Hukuka uygunluk karinesi", "İdari vesayet", "Yetki genişliği", "Re'sen icra", "Tek yanlılık"],
      "cevap": "D",
      "aciklama": "İdari işlemler re'sen icra edilebilir.",
      "kaynak": "İdari işlemin özellikleri"
    },
    {
      "id": "IDARE_U02_0009",
      "unite": 2,
      "zorluk": "zor",
      "soru": "İdari işlemin sebep unsuru ile ilgili aşağıdakilerden hangisi doğrudur?",
      "secenekler": ["İşlemin doğurduğu hukuki sonuçtur.", "İşlemi yapmaya yetkili makamdır.", "İdareyi işlem yapmaya yönelten hukuki ve fiili durumlardır.", "İşlemin yazılı olma zorunluluğudur.", "İşlemle ulaşılmak istenen kamu yararıdır."],
      "cevap": "C",
      "aciklama": "Sebep; işlemden önce gelen ve idareyi harekete geçiren durumdur.",
      "kaynak": "Sebep unsuru"
    },
    {
      "id": "IDARE_U03_0001",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamu hizmetine egemen olan temel ilkelerden biri değildir?",
      "secenekler": ["Kârlılık", "Süreklilik", "Eşitlik", "Değişkenlik (uyum)", "Tarafsızlık"],
      "cevap": "A",
      "aciklama": "Kamu hizmetinde kâr amacı temel ilke değildir.",
      "kaynak": "Kamu hizmeti"
    },
    {
      "id": "IDARE_U03_0002",
      "unite": 3,
      "zorluk": "zor",
      "soru": "Kamu hizmetinin idarenin kendi personeli, malları ve bütçesiyle doğrudan yürütülmesi usulüne ne ad verilir?",
      "secenekler": ["İmtiyaz usulü", "İşletme hakkı devri", "Ruhsat usulü", "Emanet usulü", "Yap-işlet-devret"],
      "cevap": "D",
      "aciklama": "Emanet usulünde hizmeti idare bizzat yürütür.",
      "kaynak": "Kamu hizmeti yürütme usulleri"
    },
    {
      "id": "IDARE_U03_0003",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Kamu düzeninin bozulmasını önlemeye yönelik, suç işlenmeden önce yürütülen kolluk faaliyetine ne ad verilir?",
      "secenekler": ["Adli kolluk", "İdari kolluk", "Özel kolluk", "Yargısal denetim", "İdari vesayet"],
      "cevap": "B",
      "aciklama": "Önleyici faaliyet idari kolluktur; adli kolluk suç sonrasına ilişkindir.",
      "kaynak": "Kolluk"
    },
    {
      "id": "IDARE_U03_0004",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamu düzeninin klasik unsurları arasında yer almaz?",
      "secenekler": ["Ekonomik kalkınma", "Genel güvenlik", "Genel sağlık", "Genel huzur (kamu esenliği)", "Genel ahlak"],
      "cevap": "A",
      "aciklama": "Ekonomik kalkınma kamu düzeninin unsuru değildir.",
      "kaynak": "Kolluk"
    },
    {
      "id": "IDARE_U03_0005",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Kolluk tedbirlerinin uygulanmasında aşağıdakilerden hangisi temel sınırı oluşturur?",
      "secenekler": ["Tedbirin mutlaka yazılı emirle alınması", "Tedbirin ölçülü ve amaca elverişli olması", "Tedbirin yalnızca gece uygulanması", "Tedbirin kişinin rızasına bağlı olması", "Tedbirin sadece yabancılara uygulanması"],
      "cevap": "B",
      "aciklama": "Kolluk yetkisi ölçülülük ilkesiyle sınırlıdır.",
      "kaynak": "Kolluk"
    },
    {
      "id": "IDARE_U03_0006",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Bir sözleşmenin idari sözleşme sayılmasında belirleyici ölçüt aşağıdakilerden hangisidir?",
      "secenekler": ["Taraflardan birinin gerçek kişi olması", "Noterde düzenlenmesi", "Kamu hizmetiyle ilgili olması ve idareye üstün yetkiler tanıması", "Bedelinin yüksek olması", "Süresinin bir yılı aşması"],
      "cevap": "C",
      "aciklama": "İdari sözleşmede kamu hizmeti bağlantısı ve kamu gücü ayrıcalıkları öne çıkar.",
      "kaynak": "İdari sözleşmeler"
    },
    {
      "id": "IDARE_U03_0007",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "Devlet veya diğer kamu tüzel kişileri ya da bunların denetim ve gözetimi altında, genel ve ortak ihtiyaçları karşılamak amacıyla sürekli ve düzenli biçimde yürütülen faaliyete ne ad verilir?",
      "secenekler": ["Kamu hizmeti", "Kolluk", "İdari işlem", "İdari yargı", "Özel teşebbüs"],
      "cevap": "A",
      "aciklama": "Bu tanım kamu hizmetinin tanımıdır.",
      "kaynak": "Kamu hizmeti"
    },
    {
      "id": "IDARE_U03_0008",
      "unite": 3,
      "zorluk": "zor",
      "soru": "Kamu hizmetinin özel hukuk kişisine, masraf ve riski ona ait olmak üzere belirli süreyle ve kullanıcılardan ücret alarak yürütülmesi için verilmesine ne ad verilir?",
      "secenekler": ["Emanet", "Ruhsat", "İhale", "Vesayet", "İmtiyaz"],
      "cevap": "E",
      "aciklama": "İmtiyazda hizmet, ücret karşılığı ve imtiyaz sahibinin risk ve masrafıyla yürütülür.",
      "kaynak": "Kamu hizmeti yürütme usulleri"
    },
    {
      "id": "IDARE_U04_0001",
      "unite": 4,
      "zorluk": "orta",
      "soru": "657 sayılı Devlet Memurları Kanunu'na göre aşağıdakilerden hangisi kamu hizmetlerinin yürütülmesinde öngörülen istihdam şekillerinden biri değildir?",
      "secenekler": ["Memur", "Sözleşmeli personel", "Geçici personel", "İşçi", "Vekil personel"],
      "cevap": "E",
      "aciklama": "657 m.4: memur, sözleşmeli personel, geçici personel ve işçi.",
      "kaynak": "657 s. DMK m.4"
    },
    {
      "id": "IDARE_U04_0002",
      "unite": 4,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi 657 sayılı Kanun'da sayılan disiplin cezalarından biri değildir?",
      "secenekler": ["Uyarma", "Meslekten çıkarma", "Kınama", "Aylıktan kesme", "Kademe ilerlemesinin durdurulması"],
      "cevap": "B",
      "aciklama": "657 m.125'te devlet memurluğundan çıkarma vardır; ‘meslekten çıkarma’ kolluk disiplin mevzuatındadır.",
      "kaynak": "657 s. DMK m.125"
    },
    {
      "id": "IDARE_U04_0003",
      "unite": 4,
      "zorluk": "orta",
      "soru": "657 sayılı Kanun'a göre disiplin soruşturmasında memura verilecek savunma süresi en az kaç gündür?",
      "secenekler": ["3", "10", "7", "15", "30"],
      "cevap": "C",
      "aciklama": "Savunma için yedi günden az olmamak üzere süre verilir.",
      "kaynak": "657 s. DMK m.130"
    },
    {
      "id": "IDARE_U04_0004",
      "unite": 4,
      "zorluk": "zor",
      "soru": "657 sayılı Kanun'a göre devlet memurluğundan çıkarma cezasını gerektiren fiil, öğrenildiği tarihten itibaren ne kadar süre içinde soruşturmaya başlanmazsa ceza verme yetkisi zamanaşımına uğrar?",
      "secenekler": ["1 ay", "3 ay", "1 yıl", "2 yıl", "6 ay"],
      "cevap": "E",
      "aciklama": "Diğer cezalarda 1 ay, memurluktan çıkarmada 6 ay; her halde fiilden itibaren 2 yıl.",
      "kaynak": "657 s. DMK m.127"
    },
    {
      "id": "IDARE_U04_0005",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Kamu mallarıyla ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Kamu malları zamanaşımıyla kazanılabilir.", "Kamu malları haczedilemez.", "Kamu malları kural olarak devredilemez.", "Kamu mallarında özel mülkiyet kurulamaz.", "Kamu malları idare hukuku rejimine tabidir."],
      "cevap": "A",
      "aciklama": "Kamu malları kazandırıcı zamanaşımıyla edinilemez.",
      "kaynak": "Kamu malları"
    },
    {
      "id": "IDARE_U04_0006",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi orta malına örnektir?",
      "secenekler": ["Hükümet konağı", "Karayolu", "Hazineye ait boş arsa", "Mera", "Askeri kışla"],
      "cevap": "D",
      "aciklama": "Meralar, yaylalar ve kışlaklar orta mallarıdır.",
      "kaynak": "Kamu malları"
    },
    {
      "id": "IDARE_U04_0007",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Kamu görevlisinin görevini yaparken verdiği zarar nedeniyle açılacak tazminat davası Anayasa'ya göre kime karşı açılır?",
      "secenekler": ["Doğrudan kamu görevlisine", "Kamu görevlisi ve idareye birlikte", "İdareye", "Kamu görevlisinin amirine", "Sayıştay'a"],
      "cevap": "C",
      "aciklama": "Anayasa m.129: dava idare aleyhine açılır; idare kusurlu görevliye rücu eder.",
      "kaynak": "Anayasa m.129"
    },
    {
      "id": "IDARE_U04_0008",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Anayasa'ya göre kamu kurum ve kuruluşlarında çalışan memurlar için siyasi partilerle ilgili hangisi doğrudur?",
      "secenekler": ["Siyasi partilere üye olabilirler.", "Siyasi partilere üye olamazlar.", "Yalnızca il başkanlığına aday olabilirler.", "Amirlerinin izniyle üye olabilirler.", "Yalnızca seçim dönemlerinde üye olabilirler."],
      "cevap": "B",
      "aciklama": "Anayasa m.68: kamu kurum ve kuruluşlarındaki memurlar siyasi partilere üye olamaz.",
      "kaynak": "Anayasa m.68"
    },
    {
      "id": "IDARE_U04_0009",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi genel kullanıma (herkesin yararlanmasına) ayrılmış kamu malına örnektir?",
      "secenekler": ["Hastane binası", "Mera", "Hazine arazisi", "Şehir meydanı", "Kışla"],
      "cevap": "D",
      "aciklama": "Yollar, meydanlar, parklar genel kullanıma ayrılmış mallardır.",
      "kaynak": "Kamu malları"
    },
    {
      "id": "IDARE_U05_0001",
      "unite": 5,
      "zorluk": "orta",
      "soru": "2577 sayılı İYUK'a göre aşağıdakilerden hangisi idari dava türlerinden biri değildir?",
      "secenekler": ["İptal davası", "Tam yargı davası", "İdari sözleşmelerden doğan davalar", "Men-i müdahale davası", "İmtiyaz sözleşmelerinden doğan davalar"],
      "cevap": "D",
      "aciklama": "İYUK m.2: iptal, tam yargı ve idari sözleşmelerden doğan davalar.",
      "kaynak": "İYUK m.2"
    },
    {
      "id": "IDARE_U05_0002",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "Özel kanunlarında ayrı süre gösterilmeyen hallerde idare mahkemesinde dava açma süresi kaç gündür?",
      "secenekler": ["30", "60", "15", "45", "90"],
      "cevap": "B",
      "aciklama": "İYUK m.7: Danıştay ve idare mahkemelerinde 60 gün.",
      "kaynak": "İYUK m.7"
    },
    {
      "id": "IDARE_U05_0003",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Özel kanunlarında ayrı süre gösterilmeyen hallerde vergi mahkemesinde dava açma süresi kaç gündür?",
      "secenekler": ["60", "15", "45", "30", "90"],
      "cevap": "D",
      "aciklama": "İYUK m.7: vergi mahkemelerinde 30 gün.",
      "kaynak": "İYUK m.7"
    },
    {
      "id": "IDARE_U05_0004",
      "unite": 5,
      "zorluk": "orta",
      "soru": "İdari davaya konu olabilecek bir işlem için idareye yapılan başvuruya kaç gün içinde cevap verilmezse istek reddedilmiş sayılır?",
      "secenekler": ["30", "45", "90", "60", "15"],
      "cevap": "D",
      "aciklama": "İYUK m.10: 60 gün içinde cevap verilmezse zımni ret oluşur.",
      "kaynak": "İYUK m.10"
    },
    {
      "id": "IDARE_U05_0005",
      "unite": 5,
      "zorluk": "zor",
      "soru": "İYUK'a göre yürütmenin durdurulması kararı verilebilmesi için hangi şartların gerçekleşmesi gerekir?",
      "secenekler": ["Yalnızca işlemin açıkça hukuka aykırı olması", "Telafisi güç veya imkânsız zarar doğması ve işlemin açıkça hukuka aykırı olması birlikte", "Yalnızca telafisi güç zarar doğması", "Davacının teminat yatırması yeterlidir", "İdarenin onay vermesi"],
      "cevap": "B",
      "aciklama": "İYUK m.27/2: iki şart birlikte aranır.",
      "kaynak": "İYUK m.27"
    },
    {
      "id": "IDARE_U05_0006",
      "unite": 5,
      "zorluk": "zor",
      "soru": "İptal davası ile tam yargı davasında dava açma ehliyeti bakımından aranan koşullar sırasıyla hangisidir?",
      "secenekler": ["Menfaat ihlali – hak ihlali", "Hak ihlali – menfaat ihlali", "Menfaat ihlali – menfaat ihlali", "Hak ihlali – hak ihlali", "Vatandaşlık – hak ihlali"],
      "cevap": "A",
      "aciklama": "İptal davasında menfaat, tam yargıda hak ihlali aranır.",
      "kaynak": "İYUK m.2"
    },
    {
      "id": "IDARE_U05_0007",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi hizmet kusuru türlerinden biri değildir?",
      "secenekler": ["Hizmetin kötü işlemesi", "Hizmetin geç işlemesi", "Hizmetin hiç işlememesi", "Kişisel kusur", "Hizmetin gereği gibi işlememesi"],
      "cevap": "D",
      "aciklama": "Kişisel kusur hizmet kusurundan ayrı bir kavramdır.",
      "kaynak": "İdarenin sorumluluğu"
    },
    {
      "id": "IDARE_U05_0008",
      "unite": 5,
      "zorluk": "zor",
      "soru": "Terör olayları sonucu kişilerin uğradığı zararların, idarenin kusuru olmasa da toplumca paylaşılması gerektiği düşüncesiyle tazmin edilmesi hangi ilkeye dayanır?",
      "secenekler": ["Hizmet kusuru", "Kişisel kusur", "Yetki saptırması", "Sosyal risk (kusursuz sorumluluk)", "Kanuni idare"],
      "cevap": "D",
      "aciklama": "Sosyal risk ilkesi kusursuz sorumluluk türüdür.",
      "kaynak": "İdarenin sorumluluğu"
    },
    {
      "id": "IDARE_U05_0009",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Anayasa'ya göre idari yargı yetkisinin sınırı ile ilgili hangisi doğrudur?",
      "secenekler": ["Hukuka uygunluk denetimiyle sınırlıdır, yerindelik denetimi şeklinde kullanılamaz.", "Yerindelik denetimini de kapsar.", "Yalnızca düzenleyici işlemleri denetler.", "İdarenin eylemlerini kapsamaz.", "Yalnızca Danıştay tarafından kullanılabilir."],
      "cevap": "A",
      "aciklama": "Anayasa m.125/4: yargı yetkisi yerindelik denetimi şeklinde kullanılamaz.",
      "kaynak": "Anayasa m.125"
    }
  ],
  kartlar: [
  ]
});
