// ============================================================
// İDARE HUKUKU – SORU DOSYASI (sorular-idare.js)
// Tüm sorular tek havuzda, ünite bazlı gruplandırılmıştır.
// Soru alanları: id, unite, zorluk, soru, secenekler, cevap, aciklama
// Kartlar: { id, soru, cevap, aciklama }
// ============================================================
MK.ders({
  id: "idare",
  uniteler: ["İdare Hukukunun Genel Esasları ve İlkeleri", "Merkezi İdare Teşkilatı (Başkent ve Taşra – İl İdaresi)", "Yerinden Yönetim ve Mahalli İdareler", "İdari İşlemler", "İdarenin Sözleşmeleri", "Kamu Hizmetleri", "Kolluk Hizmetleri (İdari Kolluk)", "Kamu Görevlileri", "İdarenin Malları ve Kamulaştırma", "İdarenin Sorumluluğu ve İdari Yargı", "Üst Kademe Yöneticileri, Kurullar ve Bağımsız İdari Otoriteler"],
  sorular: [
    // ============================================================
    // ÜNİTE 1 – İDARE HUKUKUNUN GENEL ESASLARI VE İLKELERI
    // ============================================================
    {
      "id": "ID_U01_0001",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi idare hukukuna hâkim ilkelerden biri değildir?",
      "secenekler": ["Laik devlet ilkesi", "Sosyal devlet ilkesi", "Hukuk devleti ilkesi", "Eşitlik ilkesi", "Millî devlet ilkesi"],
      "cevap": "E",
      "aciklama": "İdare hukukuna hâkim ilkeler Anayasa m.2'deki cumhuriyetin nitelikleri (hukuk, sosyal, laik, demokratik devlet) ve eşitlik ilkesidir."
    },
    {
      "id": "ID_U01_0002",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi idari fonksiyonun özelliklerinden biri değildir?",
      "secenekler": ["Amacı kamu yararıdır ve bireylerle doğrudan ilgilidir.", "Konusu kamu hizmetleridir.", "İdari işlemlerle yürütülür ve kamu gücü kullanılarak yerine getirilir.", "Süreklidir ve kendiliğinden harekete geçer.", "Konusu kamu yararıdır."],
      "cevap": "E",
      "aciklama": "İdari fonksiyonun amacı kamu yararı, konusu kamu hizmetleridir."
    },
    {
      "id": "ID_U01_0003",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "İdarenin kuruluş ve görevleri hangi esaslara dayanır?",
      "secenekler": ["Yetki genişliği esası", "Hiyerarşi", "Yalnızca merkezden yönetim", "Yalnızca yerinden yönetim", "Merkezden ve yerinden yönetim"],
      "cevap": "E",
      "aciklama": "Anayasa m.123: İdarenin kuruluş ve görevleri merkezden yönetim ve yerinden yönetim esaslarına dayanır."
    },
    {
      "id": "ID_U01_0004",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi idare hukukunun özelliklerinden biri değildir?",
      "secenekler": ["İdare hukuku görece yeni ortaya çıkmış ve dinamik bir hukuk dalıdır.", "İdare hukuku içtihadi bir hukuk dalıdır.", "İdare hukuku dağınık, tedvin edilmemiş bir hukuk dalıdır.", "İdare hukukunun uygulanmasından doğan uyuşmazlıklar adli yargıda çözümlenir.", "İdare hukuku bağımsız ve özerk bir hukuk dalıdır."],
      "cevap": "D",
      "aciklama": "İdari uyuşmazlıklar idari yargıda (Danıştay, bölge idare ve idare/vergi mahkemeleri) çözümlenir."
    },
    {
      "id": "ID_U01_0005",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi idare hukukunun yardımcı kaynaklarından biridir?",
      "secenekler": ["Anayasa", "Yönerge", "Yönetmelik", "Doktrin", "Hukukun genel ilkeleri"],
      "cevap": "D",
      "aciklama": "Yargı kararları ve doktrin (bilimsel görüşler) yardımcı kaynaklardır; anayasa, kanun ve düzenleyici işlemler asli kaynaklardır."
    },
    {
      "id": "ID_U01_0006",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Yasama ve yürütme organlarının tüm işlemlerinin ortak amacı aşağıdakilerden hangisidir?",
      "secenekler": ["Kamu hizmeti", "Kamu yararı", "İdari işlemlerin yargısal denetimi", "Kamu hizmetlerinin yargısal denetimi", "Ortak amaç yoktur."],
      "cevap": "B",
      "aciklama": "Devlet organlarının tüm işlemlerinin nihai amacı kamu yararıdır."
    },
    {
      "id": "ID_U01_0007",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi hukuk devletinin gereklerinden biri değildir?",
      "secenekler": ["Temel hak ve hürriyetlerin güvence altına alınması", "Yasaların anayasaya uygun olması", "Yasaların genel olması", "Yargının bağımsız olması", "Özel yasaların olabilmesi"],
      "cevap": "E",
      "aciklama": "Hukuk devletinde yasalar genel, soyut ve nesnel olmalıdır; kişiye özel yasa hukuk devletine aykırıdır."
    },
    {
      "id": "ID_U01_0008",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi kamu tüzel kişiliği olan kurumlardan biri değildir?",
      "secenekler": ["Diyanet İşleri Başkanlığı", "Yükseköğretim Kurulu", "Üniversiteler", "Yüksek Teknoloji Enstitüleri", "Öğrenci Seçme ve Yerleştirme Merkezi"],
      "cevap": "A",
      "aciklama": "Diyanet İşleri Başkanlığı genel idare içinde yer alır, ayrı tüzel kişiliği yoktur."
    },
    {
      "id": "ID_U01_0009",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Vatandaşların hukuki güven içinde bulundukları, devletin eylem ve işlemlerinin hukuk kurallarına bağlı olduğu sisteme ne ad verilir?",
      "secenekler": ["Polis devleti", "Yargı devleti", "Hazine kuramı", "Hukuk devleti", "Mülk devlet"],
      "cevap": "D",
      "aciklama": "Hukuk devletinde devletin tüm eylem ve işlemleri hukuka bağlı ve yargı denetimine açıktır."
    },
    {
      "id": "ID_U01_0010",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Kanunla ya da kanunun açıkça verdiği bir yetkiye dayanarak kurulan, üstün ve ayrıcalıklı yetkilerle donatılmış, malları, gelirleri ve personeli ayrı bir statüye tabi tutulmuş kuruluşlara ne ad verilir?",
      "secenekler": ["Memur", "İşçi", "Kamu tüzel kişiliği", "Gerçek kişi", "Kamu çalışanı"],
      "cevap": "C",
      "aciklama": "Kamu tüzel kişileri kanunla veya kanunun açıkça verdiği yetkiyle kurulur (Anayasa m.123)."
    },
    {
      "id": "ID_U01_0011",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi genel bütçe kapsamındaki kamu idarelerinden değildir?",
      "secenekler": ["Yargıtay", "Sayıştay", "Hazine ve Maliye Bakanlığı", "Hâkimler ve Savcılar Kurulu", "ÖSYM"],
      "cevap": "E",
      "aciklama": "ÖSYM özel bütçeli bir idaredir."
    },
    {
      "id": "ID_U01_0012",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi devletin idari, özel denetim kuruluşlarından biri değildir?",
      "secenekler": ["Yüksek Denetleme Kurulu", "Devlet Denetleme Kurulu", "Sayıştay", "Yargıtay", "Kamu Denetçiliği"],
      "cevap": "D",
      "aciklama": "Yargıtay yargısal bir organdır; idari denetim kuruluşu değildir."
    },
    {
      "id": "ID_U01_0013",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi siyasi denetim mekanizması örneği değildir?",
      "secenekler": ["Meclis araştırması", "Yazılı soru", "Ombudsmanlık", "Meclis soruşturması", "Genel görüşme"],
      "cevap": "C",
      "aciklama": "Ombudsmanlık (Kamu Denetçiliği) idarenin işleyişini denetleyen bağımsız bir kurumdur; diğerleri TBMM'nin denetim yollarıdır."
    },
    {
      "id": "ID_U01_0014",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "I. Anayasa\nII. Yönetmelik\nIII. Örf ve adetler\nYukarıdakilerden hangisi veya hangileri idare hukukunun yazılı kaynaklarından biri değildir?",
      "secenekler": ["Yalnız II", "Yalnız II – III", "I – II", "Yalnız III", "I – II – III"],
      "cevap": "D",
      "aciklama": "İdare hukukunun yazılı kaynakları anayasa, kanun, CBK ve düzenleyici işlemlerdir; örf ve adet yazılı kaynak değildir."
    },
    {
      "id": "ID_U01_0015",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi Türkiye Cumhuriyeti idaresinin görevlerinden biri değildir?",
      "secenekler": ["Millî güvenliğin korunması", "Kolluk faaliyetlerinin yürütülmesi", "Kamu hizmetlerinin yürütülmesi", "Özendirme ve destekleme faaliyetleri", "Kamu hizmetlerinin hafifletilmesi"],
      "cevap": "E",
      "aciklama": "İdarenin görevleri kamu hizmeti, kolluk ve özendirme-destekleme faaliyetleridir."
    },
    {
      "id": "ID_U01_0016",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Kamu kurumu niteliğindeki meslek kuruluşlarının denetimini aşağıdakilerden hangisi yapar?",
      "secenekler": ["Devlet Denetleme Kurulu", "Sayıştay", "TBMM", "Bakanlar", "Milletvekilleri"],
      "cevap": "A",
      "aciklama": "Anayasa m.108: DDK kamu kurumu niteliğindeki meslek kuruluşlarını da denetler."
    },
    {
      "id": "ID_U01_0017",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Devlet Denetleme Kurulu kaç üyeden oluşur?",
      "secenekler": ["17", "12", "9", "7", "5"],
      "cevap": "C",
      "aciklama": "5 sayılı CBK: DDK, başkan dahil dokuz üyeden oluşur."
    },
    {
      "id": "ID_U01_0018",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Devlet Denetleme Kurulu Başkanını kim seçer?",
      "secenekler": ["İçişleri Bakanı", "Milletvekilleri", "Cumhurbaşkanı", "TBMM", "Kendi üyeleri kendi içinden seçer."],
      "cevap": "C",
      "aciklama": "Anayasa m.108: DDK başkanı ve üyeleri Cumhurbaşkanınca atanır."
    },
    {
      "id": "ID_U01_0019",
      "unite": 1,
      "zorluk": "orta",
      "soru": "I. Genç bir hukuk dalıdır.\nII. Tedvin edilmemiştir.\nIII. İçtihatlara dayanır.\nIV. Kamu yararı düşüncesi egemendir.\nV. Bağımsız bir hukuk dalıdır.\nYukarıdakilerden hangisi veya hangileri idare hukukunun özelliklerindendir?",
      "secenekler": ["I – II – III", "I – II – III – IV", "Yalnız II", "I – II – III – IV – V", "Yalnız III"],
      "cevap": "D",
      "aciklama": "Sayılanların tamamı idare hukukunun özelliğidir."
    },
    {
      "id": "ID_U01_0020",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Devletin yasama ve yargı organları dışında kalan (yürütme organının da Cumhurbaşkanı dışında kalan) merkezi idare, mahalli idareler ve diğer kamu tüzel kişiliklerinden oluşan idare türü aşağıdakilerden hangisidir?",
      "secenekler": ["Organik anlamda idare", "Fonksiyonel anlamda idare", "Maddi ölçüte göre idare", "Şekli ölçüte göre idare", "Manevi ölçüte göre idare"],
      "cevap": "A",
      "aciklama": "Organik (örgütsel) anlamda idare, idari faaliyeti yürüten kuruluşların bütünüdür."
    },
    {
      "id": "ID_U01_0021",
      "unite": 1,
      "zorluk": "orta",
      "soru": "İdari fonksiyonun konusu aşağıdakilerden hangisidir?",
      "secenekler": ["Kamu yararını gerçekleştirmek", "Günlük toplumsal ihtiyaçları karşılayacak faaliyetler", "Kamulaştırma kararlarını uygulamak", "İdari mahkemelerin görev yerlerini belirlemek", "Kamu yararını ölçmek"],
      "cevap": "B",
      "aciklama": "İdari fonksiyonun konusu günlük, sürekli toplumsal ihtiyaçları karşılayan kamu hizmetleridir; amacı kamu yararıdır."
    },
    {
      "id": "ID_U01_0022",
      "unite": 1,
      "zorluk": "orta",
      "soru": "I. İdari işlemler ve eylemler ile yerine getirilir.\nII. İdari fonksiyon üstün ve ayrıcalıklı yetkilerle yerine getirilir.\nIII. Sürekli bir devlet fonksiyonudur.\nIV. Talep üzerine harekete geçer.\nV. Bireylerle dolaylı olarak ilişki kurar.\nYukarıdakilerden hangisi veya hangileri idari fonksiyonun özelliklerinden biri değildir?",
      "secenekler": ["I – II – III", "Yalnız IV", "Yalnız V", "IV – V", "I – II – III – IV – V"],
      "cevap": "D",
      "aciklama": "İdari fonksiyon kendiliğinden (re'sen) harekete geçer ve bireylerle doğrudan ilişki kurar."
    },
    {
      "id": "ID_U01_0023",
      "unite": 1,
      "zorluk": "orta",
      "soru": "İdare hukuku hangi ülkede ortaya çıkmıştır?",
      "secenekler": ["İngiltere", "İsviçre", "İspanya", "Fransa", "Türkiye"],
      "cevap": "D",
      "aciklama": "Modern idare hukuku Fransız Danıştayı (Conseil d'État) içtihatlarıyla doğmuştur."
    },
    {
      "id": "ID_U01_0024",
      "unite": 1,
      "zorluk": "orta",
      "soru": "İktisadi Devlet Teşekkülleri aşağıdakilerden hangisinin kararı ile kurulur?",
      "secenekler": ["Cumhurbaşkanı", "İçişleri Bakanı", "Milletvekili", "Meclis Başkanı", "Vali"],
      "cevap": "A",
      "aciklama": "233 sayılı KHK: KİT'ler Cumhurbaşkanı kararıyla kurulur."
    },
    {
      "id": "ID_U01_0025",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Sermayesinin %50'sinden fazlası bir KİK veya İDT'ye ait işletme veya işletmeler topluluğundan oluşan anonim şirketlere ne ad verilir?",
      "secenekler": ["Bağlı ortaklık", "İştirak", "Müessese", "Limited şirket", "Adi ortaklık"],
      "cevap": "A",
      "aciklama": "233 sayılı KHK: Bağlı ortaklık tanımı."
    },
    {
      "id": "ID_U01_0026",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Yangın, yer sarsıntısı, yer kayması, su basması, kuraklık, don, zararlı hayvan ve haşarat istilası ve benzeri afetler yüzünden zarara maruz kalan, varlıklarının ve mahsullerinin en az üçte birini kaybedenler adına tahakkuk ettirilmiş ve afetlerin zarar verdiği gelir kaynakları ile ilgili kamu alacakları aşağıdakilerden hangisinin kararıyla kısmen veya tamamen terkin edilir?",
      "secenekler": ["Tarım ve Orman Bakanlığı", "Hazine ve Maliye Bakanlığı", "İçişleri Bakanlığı", "Cumhurbaşkanı", "Edilmez"],
      "cevap": "D",
      "aciklama": "6183 sayılı Kanun m.105: Terkine (2018 öncesi Bakanlar Kurulu) bugün Cumhurbaşkanı karar verir."
    },
    {
      "id": "ID_U01_0027",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Türkiye'nin ilk bölge kalkınma yönetimi aşağıdakilerden hangisidir?",
      "secenekler": ["Doğu Anadolu Projesi", "Doğu Karadeniz Projesi", "Konya Ovası Projesi", "Güneydoğu Anadolu Projesi", "Batı Anadolu Projesi"],
      "cevap": "D",
      "aciklama": "GAP Bölge Kalkınma İdaresi 1989'da kurulmuştur."
    },
    {
      "id": "ID_U01_0028",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Hukuk düzenimizde idari fonksiyon kural olarak hangi ölçüte göre belirlenir?",
      "secenekler": ["Maddi ölçüt", "Şekli ölçüt", "Organik ölçüt", "Zımni ölçüt", "İç ölçüt"],
      "cevap": "B",
      "aciklama": "Kitabın anahtarına göre Türk hukukunda kural olarak şekli (organik-şekli) ölçüt esas alınır: işlemi yapan organın niteliğine bakılır."
    },
    {
      "id": "ID_U01_0029",
      "unite": 1,
      "zorluk": "zor",
      "soru": "İdarenin bakanlık personelini yurt dışına dil eğitimine göndermesi idarenin hangi görevi içinde değerlendirilebilir?",
      "secenekler": ["Planlama faaliyeti", "İç düzen faaliyeti", "Özendirme faaliyeti", "Destekleme faaliyeti", "Kamu hizmetini yürütmesi"],
      "cevap": "B",
      "aciklama": "Personel eğitimi gibi idarenin kendi örgütüne yönelik faaliyetleri iç düzen faaliyetleridir."
    },
    {
      "id": "ID_U01_0030",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi anayasada açıkça düzenlenmemiştir?",
      "secenekler": ["Laiklik ilkesi", "Merkezden ve yerinden yönetim", "Eşitlik ilkesi", "İdarenin sürekliliği", "Sosyal devlet ilkesi"],
      "cevap": "D",
      "aciklama": "Süreklilik bir kamu hizmeti ilkesidir; anayasada açıkça sayılmaz."
    },
    {
      "id": "ID_U01_0031",
      "unite": 1,
      "zorluk": "zor",
      "soru": "KİT'lerin denetimi aşağıdakilerden hangisi tarafından yapılır?",
      "secenekler": ["Devlet Denetleme Kurulu", "Sayıştay", "TBMM", "Hazine ve Maliye Bakanlığı", "Danıştay"],
      "cevap": "B",
      "aciklama": "6085 sayılı Kanunla (2010) KİT'lerin denetimi Sayıştaya verilmiştir; TBMM KİT Komisyonu da Sayıştay raporları üzerinden görüşme yapar."
    },
    {
      "id": "ID_U01_0032",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi idare hukukuna hakim olan başlıca anayasal ilkelerden biri değildir?",
      "secenekler": ["Yetki ve usulde paralellik", "Hukuk devleti ilkesi", "Demokratik devlet ilkesi", "Sosyal devlet ilkesi", "Kamu tüzel kişiliği temel esası"],
      "cevap": "A",
      "aciklama": "Yetki ve usulde paralellik bir idare hukuku ilkesidir; anayasal bir ilke değildir."
    },
    {
      "id": "ID_U01_0033",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi idari fonksiyonun özellikleri arasında yer almaz?",
      "secenekler": ["Amacı kamu yararıdır ve bireylerle doğrudan ilgilidir.", "Konusu kamu hizmetleridir.", "Adli işlemlerle yürütülür.", "Kamu gücü kullanılarak yerine getirilir.", "Süreklidir ve kendiliğinden harekete geçer."],
      "cevap": "C",
      "aciklama": "İdari fonksiyon idari işlem ve eylemlerle yürütülür."
    },
    {
      "id": "ID_U01_0034",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi idare hukukunun özellikleri arasında yer almaz?",
      "secenekler": ["Genç ve bağımsız bir hukuk dalıdır (dinamik).", "Tedvin edilmemiştir (belirli bir kanunla düzenlenmemiştir).", "İçtihatlara dayanır ve yargı organları ayrıdır.", "Statüsel niteliktedir; belirli statü ve hukuki durumları vardır.", "İdare ve birey arası çift yanlı işlemleri baskındır, yani çift taraflıdır."],
      "cevap": "E",
      "aciklama": "İdare hukukunda tek yanlı idari işlemler baskındır."
    },
    {
      "id": "ID_U01_0035",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamu tüzel kişiliği olan kurumlardan değildir?",
      "secenekler": ["Cumhurbaşkanlığı", "Yükseköğretim Kurulu", "Üniversiteler", "ÖSYM", "Türk Tarih Kurumu Başkanlığı"],
      "cevap": "A",
      "aciklama": "Cumhurbaşkanlığı Devlet tüzel kişiliği içinde yer alır; ayrı tüzel kişiliği yoktur."
    },
    {
      "id": "ID_U01_0036",
      "unite": 1,
      "zorluk": "orta",
      "soru": "İdarenin hukuka uygunluğunun, düzenli ve verimli şekilde yürütülmesinin ve geliştirilmesinin sağlanması amacıyla Cumhurbaşkanlığına bağlı olarak kurulan kurum aşağıdakilerden hangisidir?",
      "secenekler": ["HSK", "Sayıştay", "YSK", "DDK", "Danıştay"],
      "cevap": "D",
      "aciklama": "Anayasa m.108: Devlet Denetleme Kurulu."
    },
    {
      "id": "ID_U01_0037",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi Devlet Denetleme Kurulunun özelliklerinden biri değildir?",
      "secenekler": ["Görevi doğrudan doğruya Cumhurbaşkanından alır; kendiliğinden kurum ve kuruluşlar üzerinde araştırma ve incelemede bulunamaz.", "Kurulun görev alanına giren kuruluşlar ve kişiler kurulca istenen her türlü bilgileri ve belgeleri vermekle yükümlüdür.", "Kurul adına hazırlanan ve Cumhurbaşkanına sunulacak olan raporlar Kurulda görüşülür ve karara bağlanır.", "Kurul kararları gizlidir; kurul tarafından hazırlanan raporlar yalnız Cumhurbaşkanına sunulur.", "Kurul İçişleri Bakanlığına bağlıdır."],
      "cevap": "E",
      "aciklama": "DDK Cumhurbaşkanlığına bağlıdır."
    },
    {
      "id": "ID_U01_0038",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "İdare hukuku kaçıncı yüzyılda ve nerede ortaya çıkmıştır?",
      "secenekler": ["15. yüzyıl İngiltere", "16. yüzyıl İsviçre", "17. yüzyıl Almanya", "18. yüzyıl ABD", "19. yüzyıl Fransa"],
      "cevap": "E",
      "aciklama": "İdare hukuku 19. yüzyılda Fransız Danıştayının içtihatlarıyla doğmuştur."
    },
    {
      "id": "ID_U01_0039",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Kamu tüzel kişiliği aşağıdakilerden hangisi ile kurulur?",
      "secenekler": ["Anayasa", "Kanun", "Yönetmelik", "Genelge", "İçişleri Bakanı"],
      "cevap": "B",
      "aciklama": "Anayasa m.123: Kamu tüzel kişiliği ancak kanunla veya Cumhurbaşkanlığı kararnamesiyle kurulur."
    },
    {
      "id": "ID_U01_0040",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi idare hukukunun bağlayıcı kaynaklarından biri değildir?",
      "secenekler": ["Anayasa", "Kanun", "Yönetmelik", "İçtihadı birleştirme kararı", "Danıştay kararları (genel olarak)"],
      "cevap": "E",
      "aciklama": "Kitabın anahtarına göre Danıştayın olağan kararları yardımcı kaynaktır; içtihadı birleştirme kararları ise bağlayıcıdır."
    },
    {
      "id": "ID_U01_0041",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi Güneydoğu Anadolu Projesi içerisinde yer alan illerden biri değildir?",
      "secenekler": ["Diyarbakır", "Gaziantep", "Bitlis", "Kilis", "Siirt"],
      "cevap": "C",
      "aciklama": "GAP illeri Adıyaman, Batman, Diyarbakır, Gaziantep, Kilis, Mardin, Siirt, Şanlıurfa ve Şırnak'tır."
    },
    {
      "id": "ID_U01_0042",
      "unite": 1,
      "zorluk": "orta",
      "soru": "I. İdare, kuruluş ve görevleriyle bir bütündür ve kanunla düzenlenir.\nII. İdarenin kuruluş ve görevleri merkezden yönetim ve yerinden yönetim esaslarına dayanır.\nIII. Kamu tüzel kişiliği kanunla veya Cumhurbaşkanlığı kararnamesiyle kurulur.\nİdarenin esasları ile ilgili yukarıdaki ifadelerden hangisi veya hangileri doğrudur?",
      "secenekler": ["Yalnız I", "Yalnız II", "Yalnız III", "I – II ve III", "I ve III"],
      "cevap": "D",
      "aciklama": "Anayasa m.123'ün güncel metni üç ifadeyi de içerir."
    },
    {
      "id": "ID_U01_0043",
      "unite": 1,
      "zorluk": "orta",
      "soru": "I. İdare hukuku genç bir hukuk dalıdır.\nII. İdare hukuku tedvin edilmemiş bir hukuk dalıdır.\nIII. İdare hukuku büyük ölçüde içtihadi bir hukuk dalıdır.\nIV. İdare hukuku bağımsız bir hukuk dalıdır.\nV. İdare hukuku ABD'de ortaya çıkan bir hukuk dalıdır.\nİdare hukukunun yukarıda verilen özellikleriyle ilgili hangisi veya hangileri yanlıştır?",
      "secenekler": ["I – II", "Yalnız II", "Yalnız V", "III – IV", "II – III"],
      "cevap": "C",
      "aciklama": "İdare hukuku Fransa'da doğmuştur."
    },
    {
      "id": "ID_U01_0044",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi idare hukukuna hakim olan anayasal ilkelerden değildir?",
      "secenekler": ["Kanuni idare ilkesi", "Hukuk devleti ilkesi", "Merkezi yönetim ilkesi", "Yerinden yönetim ilkesi", "Kuvvetler ayrılığı ilkesi"],
      "cevap": "E",
      "aciklama": "Kitabın anahtarına göre kuvvetler ayrılığı anayasa hukukuna ait bir ilkedir; idare hukukuna hakim ilkeler arasında sayılmaz."
    },
    {
      "id": "ID_U01_0045",
      "unite": 1,
      "zorluk": "orta",
      "soru": "İdarenin kuruluş ve görevleri aşağıdakilerden hangisi ile düzenlenir?",
      "secenekler": ["Cumhurbaşkanlığı Kararnamesi", "Kanun", "Yönetmelik", "Genelge", "İçtüzük"],
      "cevap": "B",
      "aciklama": "Anayasa m.123: İdare kuruluş ve görevleriyle bir bütündür ve kanunla düzenlenir (kamu tüzel kişiliği ayrıca CBK ile de kurulabilir)."
    },
    {
      "id": "ID_U01_0046",
      "unite": 1,
      "zorluk": "orta",
      "soru": "\"Belli bir toprak parçası üzerinde belli insanların egemenlik kurması ile oluşan, tüzel kişiliği bulunan varlığa ... denir.\" Yukarıdaki boşluğa aşağıdakilerden hangisi gelmelidir?",
      "secenekler": ["Devlet", "Ülke", "Halk", "Egemenlik", "Parlamento"],
      "cevap": "A",
      "aciklama": "Devlet; ülke, millet (insan topluluğu) ve egemenlik unsurlarından oluşan tüzel kişiliktir."
    },
    {
      "id": "ID_U01_0047",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisinde devletin unsurları tam ve doğru olarak verilmiştir?",
      "secenekler": ["Toprak – Demokrasi – Millet", "Ülke – Muhalefet – İktidar", "Millet – Ulus – Vatandaş", "Ülke – Millet – Egemenlik", "Egemenlik – Toprak – Muhalefet"],
      "cevap": "D",
      "aciklama": "Devletin üç unsuru ülke, millet (insan topluluğu) ve egemenliktir."
    },
    {
      "id": "ID_U01_0048",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi idare hukukunun özelliklerinden biri değildir?",
      "secenekler": ["İdare hukukundan kaynaklanan uyuşmazlıklar idari yargıda çözümlenir.", "İdare hukukunda idare ve kişiler arasında eşitlik vardır.", "İdare hukukunda kamu yararı düşüncesi hakimdir, kâr amacı güdülmez.", "İdare hukuku süreklilik arz eden bir devlet fonksiyonudur.", "İdare hukuku genç bir hukuk dalıdır."],
      "cevap": "B",
      "aciklama": "İdare hukukunda idare kamu gücüne sahip olduğundan kişilerle eşit konumda değildir."
    },
    {
      "id": "ID_U01_0049",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Kamu idareleri ile özel idarelerle ilgili aşağıdaki hükümlerden hangisi doğru değildir?",
      "secenekler": ["Kamu idaresinin amacı kamu yararı, özel idarelerin amacı ise özel yarar sağlamaktır.", "Kamu idaresinin kuruluşu ve çalışması kanunlarla düzenlenmiştir.", "Kamu idaresi alanında kanuna bağlılık ilkesi geçerlidir.", "Özel idarelerin kuruluşu ve faaliyetlerinde kural olarak serbestlik ilkesi geçerlidir.", "Özel idareler de kamu idareleri gibi kamu gücünden yararlanabilir."],
      "cevap": "E",
      "aciklama": "Kamu gücü yalnızca kamu idarelerine tanınmış bir ayrıcalıktır."
    },
    {
      "id": "ID_U01_0050",
      "unite": 1,
      "zorluk": "zor",
      "soru": "İdari fonksiyonun aşağıdaki özelliklerinden hangisi yanlış olarak verilmiştir?",
      "secenekler": ["İdari fonksiyonun amacı kamu yararını gerçekleştirmektir.", "İdari fonksiyonun konusu sadece özel sektör hizmetleridir.", "İdari fonksiyon idari işlem ve eylemlerle yürütülür.", "İdari fonksiyon kamu gücü kullanılarak yerine getirilir.", "İdari fonksiyon kendiliğinden harekete geçer."],
      "cevap": "B",
      "aciklama": "İdari fonksiyonun konusu kamu hizmetleridir."
    },
    {
      "id": "ID_U01_0051",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi çağımızda egemen bir devletten bahsedebilmek için gerekli değildir?",
      "secenekler": ["Halkın ortak bir millî tarihi", "Ülkede bağımsız yaşayan bir halk ve millet", "Halkın kullandığı ortak bir resmi dili", "Halkın üzerinde yaşadığı ortak bir toprağı", "Devleti oluşturan halkın tamamının aynı ırktan olması"],
      "cevap": "E",
      "aciklama": "Devletin unsurları için ırk birliği şartı yoktur."
    },
    {
      "id": "ID_U01_0052",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Ceza hukukundaki cezalarla ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Mahkemeler tarafından verilir.", "Ceza yargılama usulü uygulanarak verilir.", "Mutlaka kanunla konulur.", "İdari düzen ve disipline aykırılıktan dolayı verilir.", "Kişi hürriyetini kısıtlayabilirler."],
      "cevap": "D",
      "aciklama": "İdari düzen ve disipline aykırılık idari yaptırımların konusudur."
    },
    {
      "id": "ID_U01_0053",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Ülkemiz tarihinde idare hukuku ile ilgili olarak yazılan ilk eser olan \"Hukuk-u İdare\" kim tarafından kaleme alınmıştır?",
      "secenekler": ["II. Abdülhamit", "Fatih Sultan Mehmet", "Mahmut Şevket Paşa", "İbrahim Hakkı Paşa", "Mehmet Sait Paşa"],
      "cevap": "D",
      "aciklama": "İbrahim Hakkı Paşa'nın \"Hukuk-u İdare\" (1890'lar) eseri Türk idare hukukunun ilk sistematik eseridir."
    },
    {
      "id": "ID_U01_0054",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi Türklerin eski devletlerinde devletin unsurlarından biri değildir?",
      "secenekler": ["Siyasi teşkilat", "Halk", "Ülke", "Bağımsızlık", "Para"],
      "cevap": "E",
      "aciklama": "Eski Türk devletlerinde devletin unsurları halk (budun), ülke, siyasi teşkilat ve bağımsızlıktır."
    },
    {
      "id": "ID_U01_0055",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Doğu Anadolu Projesi Bölge Kalkınma İdaresi Başkanlığının merkezi aşağıdaki şehirlerden hangisidir?",
      "secenekler": ["Diyarbakır", "Mardin", "Hakkari", "Erzurum", "Şanlıurfa"],
      "cevap": "D",
      "aciklama": "DAP Bölge Kalkınma İdaresi Erzurum'dadır."
    },
    // ============================================================
    // ÜNİTE 2 – MERKEZI İDARE TEŞKILATI (BAŞKENT VE TAŞRA – İL İDARESI)
    // ============================================================
    {
      "id": "ID_U02_0001",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Cumhurbaşkanına ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
      "secenekler": ["Cumhurbaşkanı Devletin başıdır.", "Dolayısıyla yasama, yürütme ve yargının başıdır.", "Cumhurbaşkanı, Devlet başkanı sıfatıyla Türkiye Cumhuriyetini temsil eder.", "Anayasanın uygulanmasını temin eder.", "Ancak devrettiği yetkiyi gerek gördüğünde kendisi de doğrudan kullanabilir."],
      "cevap": "B",
      "aciklama": "Anayasa m.104: Cumhurbaşkanı Devletin başıdır ve yürütme yetkisi ona aittir; yasama TBMM'ye, yargı bağımsız mahkemelere aittir."
    },
    {
      "id": "ID_U02_0002",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "I. Cumhurbaşkanı makamına ilişkin hizmetleri yürütmek\nII. Cumhurbaşkanının resmi ve özel yazışmalarını yürütmek\nIII. Cumhurbaşkanının tören, yurt içi ve yurt dışı gezi işlerini düzenlemek ve yürütmek\nYukarıda görevlerinden bazıları belirtilen makam aşağıdakilerden hangisidir?",
      "secenekler": ["İdari İşler Başkanlığı", "Cumhurbaşkanı Özel Kalem Müdürlüğü", "Cumhurbaşkanı Yardımcılığı", "Bakanlıklar", "Cumhurbaşkanlığı Ofisleri"],
      "cevap": "B",
      "aciklama": "1 sayılı CBK: Bu görevler Cumhurbaşkanı Özel Kalem Müdürlüğüne aittir."
    },
    {
      "id": "ID_U02_0003",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Millete ve devlete hizmeti geçmiş, bilgi ve birikim sahibi kişilerin bu kazanımlarından istifade edilebilmesi amacıyla oluşturulmuş, üyeleri Cumhurbaşkanınca belirlenen merci aşağıdakilerden hangisidir?",
      "secenekler": ["Cumhurbaşkanlığı Yüksek İstişare Kurulu", "Cumhurbaşkanlığı Ofisleri", "Bilim, Teknoloji ve Yenilik Politikaları Kurulu", "Cumhurbaşkanı Başdanışmanı veya Danışmanı", "Özel temsilci"],
      "cevap": "A",
      "aciklama": "1 sayılı CBK: Yüksek İstişare Kurulu bu amaçla oluşturulmuştur."
    },
    {
      "id": "ID_U02_0004",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "En yüksek devlet memuru statüsüne aşağıdakilerden hangisi sahiptir?",
      "secenekler": ["Cumhurbaşkanı", "Cumhurbaşkanı Yardımcıları", "Bakanlıklar", "Cumhurbaşkanı Özel Kalem Müdürlüğü", "İdari İşler Başkanı"],
      "cevap": "E",
      "aciklama": "1 sayılı CBK: Cumhurbaşkanlığı İdari İşler Başkanı en yüksek devlet memurudur."
    },
    {
      "id": "ID_U02_0005",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Cumhurbaşkanının hastalık ve yurt dışına çıkma gibi sebeplerle geçici olarak görevinden ayrılması hallerinde aşağıdakilerden hangisi Cumhurbaşkanına vekâlet eder ve Cumhurbaşkanına ait yetkileri kullanır?",
      "secenekler": ["TBMM Başkanı", "En yaşlı Cumhurbaşkanı yardımcısı", "Cumhurbaşkanının görevlendirdiği yardımcısı", "En yaşlı bakan", "TBMM karar verir"],
      "cevap": "C",
      "aciklama": "Anayasa m.106: Geçici ayrılma hallerinde Cumhurbaşkanı yardımcısı vekâlet eder."
    },
    {
      "id": "ID_U02_0006",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Cumhurbaşkanlığı politika kurulları en az kaç üyeden oluşur?",
      "secenekler": ["1", "2", "3", "4", "5"],
      "cevap": "C",
      "aciklama": "1 sayılı CBK: Politika kurulları Cumhurbaşkanı başkanlığında en az üç üyeden oluşur."
    },
    {
      "id": "ID_U02_0007",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Cumhurbaşkanlığı bünyesinde kurulan Güvenlik ve Dış Politikalar Kurulu'nun başkanı aşağıdakilerden hangisidir?",
      "secenekler": ["Cumhurbaşkanı", "İçişleri Bakanı", "Dışişleri Bakanı", "Üyeler arasından seçilir", "TBMM tarafından seçilir"],
      "cevap": "A",
      "aciklama": "Politika kurullarına Cumhurbaşkanı başkanlık eder."
    },
    {
      "id": "ID_U02_0008",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Mevcut bakanlık sayımız aşağıdakilerden hangisinde doğru verilmiştir?",
      "secenekler": ["15", "16", "17", "23", "24"],
      "cevap": "C",
      "aciklama": "1 sayılı CBK'ya göre 17 bakanlık vardır."
    },
    {
      "id": "ID_U02_0009",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Bakanlık kuruluşunun en üst amiri aşağıdakilerden hangisidir?",
      "secenekler": ["Cumhurbaşkanı", "TBMM Başkanı", "İdari İşler Başkanı", "Bakan", "Özel Kalem Müdürü"],
      "cevap": "D",
      "aciklama": "Bakan, bakanlık teşkilatının en üst amiridir."
    },
    {
      "id": "ID_U02_0010",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Genelkurmay Başkanı hangi merci namına Silahlı Kuvvetlerin komutanıdır?",
      "secenekler": ["Türkiye Cumhuriyeti", "Cumhurbaşkanı", "Millî Savunma Bakanı", "TBMM", "Yürütme organı"],
      "cevap": "B",
      "aciklama": "Anayasa m.117: Genelkurmay Başkanı Silahlı Kuvvetlerin komutanıdır; savaşta Başkomutanlık görevlerini Cumhurbaşkanı adına yerine getirir."
    },
    {
      "id": "ID_U02_0011",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Hiyerarşik denetim ile ilgili aşağıdakilerden hangisi doğru değildir?",
      "secenekler": ["Hiyerarşik denetim, üste astının yetki ve görev alanındaki bir konuda astının yerine geçerek işlem yapıp karar alma hakkı verir.", "Üst, astın memuriyet durumuna ilişkin işlemler yapabilir.", "Üst, astını disiplin bakımından denetleyip gerekirse disiplin cezası verebilir.", "Üst, astları arasında görev bölüşümü yapabilir.", "Üst, astlarına emir ve talimat verebilir."],
      "cevap": "A",
      "aciklama": "Hiyerarşi üste astın işlemini onaylama, değiştirme veya kaldırma yetkisi verir; ancak kural olarak astın yerine geçerek işlem yapma (ikame) yetkisi vermez."
    },
    {
      "id": "ID_U02_0012",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "İl ve ilçe kurulması, kaldırılması, merkezlerinin belirtilmesi, adlarının değiştirilmesi, bir ilçenin başka bir ile bağlanması aşağıdakilerden hangisi ile mümkündür?",
      "secenekler": ["Kanun", "İçişleri Bakanı kararı", "Cumhurbaşkanı kararı", "Yönetmelik", "Anayasal hüküm"],
      "cevap": "A",
      "aciklama": "5442 m.2: Bu işlemler kanunla yapılır."
    },
    {
      "id": "ID_U02_0013",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "İl sınırları içinde bulunan genel ve özel bütün kolluk kuvvet ve teşkilatının amiri kimdir?",
      "secenekler": ["Savcı", "Kaymakam", "Vali", "Hâkim", "İl Emniyet Müdürü"],
      "cevap": "C",
      "aciklama": "5442 m.11: Vali, il sınırları içindeki genel ve özel kolluk kuvvetlerinin amiridir."
    },
    {
      "id": "ID_U02_0014",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi il idare kurulu üyesi değildir?",
      "secenekler": ["Vali", "Defterdar", "Hukuk İşleri Müdürü", "Millî Eğitim Müdürü", "İl Emniyet Müdürü"],
      "cevap": "E",
      "aciklama": "5442 m.7: İl idare kurulu valinin başkanlığında hukuk işleri müdürü, defterdar, millî eğitim, bayındırlık, sağlık, tarım ve veteriner müdürlerinden oluşur."
    },
    {
      "id": "ID_U02_0015",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "İlçede ilçe idare şube başkanları kime karşı sorumludur?",
      "secenekler": ["Belediye başkanı", "Kaymakam", "Vali", "Millî eğitim müdürü", "Bakan"],
      "cevap": "B",
      "aciklama": "5442 m.33: İlçe idare şube başkanları kaymakama karşı sorumludur."
    },
    {
      "id": "ID_U02_0016",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Aşağıdaki bakanlık isimlerinden hangisi yeni/tam adıyla verilmemiştir?",
      "secenekler": ["Millî Eğitim Bakanlığı", "Millî Savunma Bakanlığı", "Turizm Bakanlığı", "Sağlık Bakanlığı", "Sanayi ve Teknoloji Bakanlığı"],
      "cevap": "C",
      "aciklama": "Doğru adı Kültür ve Turizm Bakanlığıdır."
    },
    {
      "id": "ID_U02_0017",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Cumhurbaşkanı adayı gösterilebilmek için en az kaç bin seçmenin imzası gerekir?",
      "secenekler": ["50", "100", "150", "200", "250"],
      "cevap": "B",
      "aciklama": "Anayasa m.101: En az yüz bin seçmen de aday gösterebilir."
    },
    {
      "id": "ID_U02_0018",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Üst makam ve görevlilerinin ast dereceleri üzerinde sahip olduğu hukuksal güce ne ad verilir?",
      "secenekler": ["İdari vesayet", "Yetki genişliği", "İmza devri", "Yetki devri", "Hiyerarşi"],
      "cevap": "E",
      "aciklama": "Hiyerarşi, üstün astı üzerindeki emir verme ve denetleme yetkisidir."
    },
    {
      "id": "ID_U02_0019",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Yürütme erkinin yalnızca başkana ait olduğu sisteme ne ad verilir?",
      "secenekler": ["Parlamenter sistem", "Yarı başkanlık sistemi", "Başkanlık sistemi", "Meclis hükümeti sistemi", "Federal sistem"],
      "cevap": "C",
      "aciklama": "Başkanlık sisteminde yürütme tek başlıdır."
    },
    {
      "id": "ID_U02_0020",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Milletlerarası antlaşmaları onaylayan merci aşağıdakilerden hangisidir?",
      "secenekler": ["Dışişleri Bakanı", "TBMM", "Meclis Başkanı", "Cumhurbaşkanı", "Bakanlar"],
      "cevap": "D",
      "aciklama": "Anayasa m.104 ve 90: Antlaşmaları Cumhurbaşkanı onaylar; onaylamanın TBMM'ce bir kanunla uygun bulunması gerekir."
    },
    {
      "id": "ID_U02_0021",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Millî Güvenlik Kurulu'nun gündemini kim belirler?",
      "secenekler": ["Meclis Başkanı", "Cumhurbaşkanı", "İçişleri Bakanı", "Millî Savunma Bakanı", "Genel Sekreter"],
      "cevap": "B",
      "aciklama": "Anayasa m.118: MGK gündemi Cumhurbaşkanınca belirlenir."
    },
    {
      "id": "ID_U02_0022",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "2018 değişikliğinden önce Cumhurbaşkanının yakın güvenliğini sağlayan, diplomasi işlerini yürüten kuruluş aşağıdakilerden hangisiydi?",
      "secenekler": ["Bakanlık teşkilatı", "DDK", "Bakanlar", "Cumhurbaşkanlığı Genel Sekreterliği", "Meclis Başkanlığı"],
      "cevap": "D",
      "aciklama": "2018'den önce bu görevleri Cumhurbaşkanlığı Genel Sekreterliği yürütürdü; bugün İdari İşler Başkanlığı ve ilgili birimler yürütür."
    },
    {
      "id": "ID_U02_0023",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Cumhurbaşkanı seçilebilmek için kaç yaşını doldurmak gerekir?",
      "secenekler": ["25", "30", "40", "45", "50"],
      "cevap": "C",
      "aciklama": "Anayasa m.101: Kırk yaşını doldurmuş ve yükseköğrenim yapmış olmak gerekir."
    },
    {
      "id": "ID_U02_0024",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Bakanlar kime karşı sorumludur?",
      "secenekler": ["İçişleri Bakanı", "Danıştay", "Meclis Başkanı", "Cumhurbaşkanı", "Genelkurmay Başkanı"],
      "cevap": "D",
      "aciklama": "Anayasa m.106: Bakanlar Cumhurbaşkanına karşı sorumludur."
    },
    {
      "id": "ID_U02_0025",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Valiler aşağıdakilerden hangisinin kararıyla atanır?",
      "secenekler": ["Meclis Başkanı", "Cumhurbaşkanı", "Bakanlar", "İçişleri Bakanı", "Re'sen"],
      "cevap": "B",
      "aciklama": "3 sayılı CBK: Valiler Cumhurbaşkanı kararıyla atanır."
    },
    {
      "id": "ID_U02_0026",
      "unite": 2,
      "zorluk": "orta",
      "soru": "I. Olağanüstü haller\nII. Seferberlik ve savaş hali\nIII. Sıkıyönetim\nYukarıdakilerden hangisi veya hangileri güncel anayasaya göre olağanüstü yönetim usullerindendir?",
      "secenekler": ["Yalnız I", "Yalnız II", "Yalnız III", "I – II – III", "I – II"],
      "cevap": "E",
      "aciklama": "Sıkıyönetim 2017 Anayasa değişikliğiyle kaldırılmıştır."
    },
    {
      "id": "ID_U02_0027",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Ülkenin genel iç ve dış siyasetini saptayıp uygulanmasını sağlamak aşağıdakilerden hangisinin görevidir?",
      "secenekler": ["DDK", "Cumhurbaşkanı", "TBMM", "İçişleri Bakanı", "Meclis Başkanı"],
      "cevap": "B",
      "aciklama": "Anayasa m.104 (2017 sonrası) yürütme yetkisi ve devlet politikalarının belirlenmesi Cumhurbaşkanına aittir."
    },
    {
      "id": "ID_U02_0028",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Milletlerarası antlaşmalarda uygun bulma kanununu hangi merci çıkarır?",
      "secenekler": ["Bakanlar", "Cumhurbaşkanı", "TBMM", "Siyasi parti grupları", "Sayıştay"],
      "cevap": "C",
      "aciklama": "Anayasa m.87, 90: Antlaşmaların onaylanmasını uygun bulma TBMM'nin görevidir."
    },
    {
      "id": "ID_U02_0029",
      "unite": 2,
      "zorluk": "orta",
      "soru": "İller ile ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Kurulması, kaldırılması ve sınırlarının değiştirilmesi kanun ile olur.", "Ayrı bir tüzel kişiliği olmayan ve devlet tüzel kişiliği altında örgütlenen il genel yönetimi vali, il idare kurulu ve il müdürleri olmak üzere 3 birimden oluşur.", "İllerin idaresi yetki genişliği esasına dayanır.", "Anayasa taşra örgütü birimlerinden yalnızca illere yer vermektedir.", "Anayasa taşra örgütü birimlerinden illere ve ilçelere yer vermektedir."],
      "cevap": "E",
      "aciklama": "Anayasa m.126: Türkiye illere, iller de diğer kademeli bölümlere ayrılır; anayasa ilçeyi ayrıca saymaz."
    },
    {
      "id": "ID_U02_0030",
      "unite": 2,
      "zorluk": "orta",
      "soru": "I. Valiler genel emir çıkartabilir.\nII. Kaymakamın yetki genişliği vardır.\nIII. 2004 yılındaki bir değişiklikle valinin savcıdan dava açılmasını isteme yetkisi kaldırılmıştır.\nIV. Valilik mesleği güvenceli meslek memurluklarından biridir.\nYukarıdaki ifadelerden hangisi veya hangileri yanlıştır?",
      "secenekler": ["I – IV", "III – IV", "II – IV", "I – III", "Yalnız II"],
      "cevap": "C",
      "aciklama": "Anayasa m.126: Yetki genişliği illere aittir, ilçeye değil. Valiler güvenceli meslek memuru değildir; Cumhurbaşkanınca her zaman görevden alınabilir."
    },
    {
      "id": "ID_U02_0031",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi il idare kurulunun üyelerinden biridir?",
      "secenekler": ["Defterdar", "Mal müdürü", "Yazı işleri müdürü", "Fen işleri müdürü", "İl emniyet müdürü"],
      "cevap": "A",
      "aciklama": "5442 m.7: Defterdar il idare kurulu üyesidir."
    },
    {
      "id": "ID_U02_0032",
      "unite": 2,
      "zorluk": "orta",
      "soru": "I. Mal Müdürü\nII. Yazı İşleri Müdürü\nIII. Defterdar\nIV. Hukuk İşleri Müdürü\nYukarıdakilerden hangileri ilçe idare kurulunun üyelerindendir?",
      "secenekler": ["Yalnız III", "Yalnız IV", "III – IV", "II – III", "I – II"],
      "cevap": "E",
      "aciklama": "5442 m.33: İlçe idare kurulu kaymakamın başkanlığında mal müdürü, yazı işleri müdürü ve diğer ilçe müdürlerinden oluşur; defterdar ve hukuk işleri müdürü il düzeyindedir."
    },
    {
      "id": "ID_U02_0033",
      "unite": 2,
      "zorluk": "orta",
      "soru": "I. Adalet Bakanı\nII. İçişleri Bakanı\nIII. Ulaştırma ve Altyapı Bakanı\nIV. Hazine ve Maliye Bakanı\nV. Millî Savunma Bakanı\nGüncel anayasaya göre TBMM genel seçimlerinden önce yukarıdaki bakanlardan hangisi veya hangileri çekilir?",
      "secenekler": ["Yalnız I", "Yalnız II", "I – II – III", "Yalnız IV", "Hiçbiri"],
      "cevap": "E",
      "aciklama": "2017 değişikliği öncesinde Adalet, İçişleri ve Ulaştırma bakanları seçimden önce çekilirdi; bu kural kaldırılmıştır."
    },
    {
      "id": "ID_U02_0034",
      "unite": 2,
      "zorluk": "zor",
      "soru": "2017 Anayasa değişikliğinden önce, Cumhurbaşkanının tek başına yapabileceği işlemler dışındaki tüm işlemlerinde Başbakan ve ilgili bakanların imzasının bulunması ve bu işlemlerden onların sorumlu olmasına ne ad verilirdi?",
      "secenekler": ["Yetki devri", "İmza devri", "Yasama yorumu", "Tek imza kuralı", "Karşı imza kuralı"],
      "cevap": "E",
      "aciklama": "Karşı imza kuralı 2017 değişikliğiyle kaldırılmıştır; bugün Cumhurbaşkanı yürütme yetkisini tek başına kullanır."
    },
    {
      "id": "ID_U02_0035",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Cumhurbaşkanlığı Kararnamesi (CBK) hangi anayasamızla düzenlenmiştir?",
      "secenekler": ["1876 Kanun-i Esasi", "1921 Anayasası", "1924 Anayasası", "1961 Anayasası", "1982 Anayasası"],
      "cevap": "E",
      "aciklama": "CBK, 1982 Anayasasına 2017 değişikliğiyle (m.104) eklenmiştir; DDK da 1982 Anayasası m.108'de düzenlenmiştir."
    },
    {
      "id": "ID_U02_0036",
      "unite": 2,
      "zorluk": "zor",
      "soru": "1924 Anayasası döneminde yasalar hakkında yapılan meclis yorumlarına ne ad verilir?",
      "secenekler": ["Yargı yorumu", "Yargısal içtihat", "Yasama yorumu", "Yasama kısıntısı", "İçtüzük"],
      "cevap": "C",
      "aciklama": "TBMM'nin kanunları yorumlaması (teşrii tefsir) yasama yorumudur."
    },
    {
      "id": "ID_U02_0037",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi 1982 Anayasası'nda \"Yürütme\" bölümünde düzenlenmemiştir?",
      "secenekler": ["Anayasa Mahkemesi", "YÖK", "RTÜK", "Kanunsuz emir", "Yönetmelik"],
      "cevap": "A",
      "aciklama": "Anayasa Mahkemesi \"Yargı\" bölümünde düzenlenmiştir."
    },
    {
      "id": "ID_U02_0038",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Anayasa değişikliği yaparken iki tam gün ya da bir tam gün gibi sürelere anayasa hukukunda ne ad verilir?",
      "secenekler": ["Zımni kabul", "Serinleme süresi", "Rasyonelleştirilmiş parlamentarizm", "Kadük olma", "Zımni süre"],
      "cevap": "B",
      "aciklama": "Anayasa m.175 vd.: Görüşmeler arasında bırakılan bu sürelere serinleme süresi denir."
    },
    {
      "id": "ID_U02_0039",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Cumhurbaşkanına ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
      "secenekler": ["Cumhurbaşkanı devletin başıdır.", "Yürütme yetkisi Cumhurbaşkanına aittir.", "Devlet başkanı sıfatıyla Türk Milletinin birliğini temsil eder.", "Devlet organlarının düzenli ve uyumlu çalışmasını temin eder.", "Yetkilerinden bir kısmını gerektiğinde sınırsız şekilde yazılı olarak astlarına devredebilir."],
      "cevap": "E",
      "aciklama": "Yetki devri ancak kanunun veya CBK'nın izin verdiği ölçüde ve sınırları belirlenerek yapılabilir; sınırsız yetki devri olmaz."
    },
    {
      "id": "ID_U02_0040",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Cumhurbaşkanının özel bilgi ve uzmanlık gerektiren konularda, dış ülkelerde veya uluslararası kuruluşlar nezdinde özel bir görevi ifa etmek üzere görevlendirdiği makam aşağıdakilerden hangisidir?",
      "secenekler": ["Cumhurbaşkanlığı Yüksek İstişare Kurulu", "Cumhurbaşkanlığı Ofisleri", "Bilim, Teknoloji ve Yenilik Politikaları Kurulu", "Özel temsilci", "Cumhurbaşkanı Başdanışmanı veya Danışmanı"],
      "cevap": "D",
      "aciklama": "1 sayılı CBK: Özel temsilci tanımı."
    },
    {
      "id": "ID_U02_0041",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Cumhurbaşkanlığı bünyesinde kurulan Bilim, Teknoloji ve Yenilik Politikaları Kurulunun başkanı aşağıdakilerden hangisidir?",
      "secenekler": ["Cumhurbaşkanı", "Sanayi ve Teknoloji Bakanı", "İdari İşler Başkanı", "Üyeler arasından seçilir.", "TBMM tarafından seçilir."],
      "cevap": "A",
      "aciklama": "Cumhurbaşkanlığı politika kurullarına Cumhurbaşkanı başkanlık eder."
    },
    {
      "id": "ID_U02_0042",
      "unite": 2,
      "zorluk": "orta",
      "soru": "1- Ülkenin idari bölümlere ayrılması, il ve ilçelerin genel idarelerini düzenlemek\n2- Karayollarında trafik düzenini sağlamak ve denetlemek\n3- Sınır, kıyı ve karasularımızın muhafaza ve emniyetini sağlamak\nYukarıda verilen görevler aşağıdaki bakanlıklardan hangisine aittir?",
      "secenekler": ["Ulaştırma ve Altyapı Bakanlığı", "Millî Savunma Bakanlığı", "Tarım ve Orman Bakanlığı", "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı", "İçişleri Bakanlığı"],
      "cevap": "E",
      "aciklama": "1 sayılı CBK: Sayılan görevler İçişleri Bakanlığına aittir."
    },
    {
      "id": "ID_U02_0043",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi hiyerarşik ilişkiye örnektir?",
      "secenekler": ["Barolar Birliği – İzmir Barosu", "Ankara Büyükşehir Belediyesi – Çankaya Belediyesi", "Kaymakam – İlçe Emniyet Müdürü", "Ankara Valiliği – Ankara Büyükşehir Belediyesi", "Ulaştırma ve Altyapı Bakanlığı – TCDD"],
      "cevap": "C",
      "aciklama": "Aynı tüzel kişilik (Devlet) içindeki üst-ast ilişkisi hiyerarşidir."
    },
    {
      "id": "ID_U02_0044",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi hiyerarşik denetimin özelliklerinden değildir?",
      "secenekler": ["Üst, asta emir ve talimat verebilir.", "Kişiler üzerindeki denetim çok geniştir.", "Yalnızca hukuka uygunluk denetimi içerir.", "Astın memuriyet durumuna ilişkin işlem yapabilir.", "Genel, olağan ve sert bir yetkidir."],
      "cevap": "C",
      "aciklama": "Hiyerarşik denetim hem hukuka uygunluk hem yerindelik denetimini kapsar."
    },
    {
      "id": "ID_U02_0045",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Merkezden yönetimin yararları için aşağıdakilerden hangisi yanlış bilgidir?",
      "secenekler": ["Güçlü devlet yönetimi sağlar.", "Hizmetler daha az harcama ile rasyonel biçimde yürütülür.", "Mali denetimi zorlaştırır.", "Kısmen de olsa partizanlığı önler.", "Hizmetler yeknesak biçimde yürütülür."],
      "cevap": "C",
      "aciklama": "Merkezden yönetim mali denetimi kolaylaştırır."
    },
    {
      "id": "ID_U02_0046",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Merkezden yönetimin sakıncalarıyla ilgili aşağıdakilerden hangisi yanlış verilmiştir?",
      "secenekler": ["Bürokrasi ve kırtasiyeciliğe neden olur.", "Hizmetlerin yöresel ihtiyaçlara göre yürütülmesi güçtür.", "Demokrasiye pek uygun değildir.", "Hizmetler hızlı işler.", "Halkın kamu hizmetlerinin yürütülmesine katkısı azdır."],
      "cevap": "D",
      "aciklama": "Merkezden yönetimde hizmetler yavaş işler; bu bir sakıncadır."
    },
    {
      "id": "ID_U02_0047",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi başkent teşkilatı kuruluşu değildir?",
      "secenekler": ["Cumhurbaşkanlığı Politika Kurulları", "Cumhurbaşkanlığı Ofisleri", "İl İdare Kurulu", "Bakanlıklar", "Cumhurbaşkanı Yardımcıları"],
      "cevap": "C",
      "aciklama": "İl idare kurulu taşra teşkilatına aittir."
    },
    {
      "id": "ID_U02_0048",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Cumhurbaşkanının görev süresi kaç yıldır?",
      "secenekler": ["8", "7", "6", "5", "4"],
      "cevap": "D",
      "aciklama": "Anayasa m.101: Cumhurbaşkanının görev süresi beş yıldır; bir kişi en fazla iki defa seçilebilir."
    },
    {
      "id": "ID_U02_0049",
      "unite": 2,
      "zorluk": "orta",
      "soru": "İl İdare Kurulunun başkanı (valinin yokluğunda) aşağıdakilerden hangisi olabilir?",
      "secenekler": ["Vali yardımcısı", "Belediye başkanı", "Belediye başkan yardımcısı", "Belediye meclisi üyesi", "Belediye encümeni üyesi"],
      "cevap": "A",
      "aciklama": "5442 m.7: İl idare kuruluna vali, yokluğunda vali yardımcısı başkanlık eder."
    },
    {
      "id": "ID_U02_0050",
      "unite": 2,
      "zorluk": "orta",
      "soru": "MGK aşağıdakilerden hangisinin başkanlığında toplanır?",
      "secenekler": ["Cumhurbaşkanı", "İçişleri Bakanı", "TBMM Başkanı", "Genelkurmay Başkanı", "Millî Savunma Bakanı"],
      "cevap": "A",
      "aciklama": "Anayasa m.118: MGK Cumhurbaşkanının başkanlığında toplanır."
    },
    {
      "id": "ID_U02_0051",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi MGK'nın üyelerinden biri değildir?",
      "secenekler": ["Cumhurbaşkanı yardımcıları", "Adalet Bakanı", "Millî Savunma Bakanı", "İçişleri Bakanı", "Hazine ve Maliye Bakanı"],
      "cevap": "E",
      "aciklama": "Anayasa m.118: MGK; Cumhurbaşkanı yardımcıları, Adalet, Millî Savunma, İçişleri ve Dışişleri bakanları, Genelkurmay Başkanı ve kuvvet komutanlarından oluşur."
    },
    {
      "id": "ID_U02_0052",
      "unite": 2,
      "zorluk": "orta",
      "soru": "İlçe İdare Kurulunda aşağıdakilerden hangisi yer almaz?",
      "secenekler": ["Yazı işleri müdürü", "Mal müdürü", "Nüfus müdürü", "Millî eğitim müdürü", "Hükümet hekimi"],
      "cevap": "C",
      "aciklama": "5442 m.33'te ilçe idare kurulu üyeleri sayılır; nüfus müdürü bunlar arasında değildir."
    },
    {
      "id": "ID_U02_0053",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Anayasanın 9. maddesindeki \"yargı yetkisi Türk Milleti adına ... kullanılır\" ifadesindeki boşluğa aşağıdakilerden hangisi gelmelidir?",
      "secenekler": ["TBMM", "Milletvekilleri", "Cumhurbaşkanı", "Yüksek Hâkimler Kurulu", "Bağımsız ve tarafsız mahkemeler"],
      "cevap": "E",
      "aciklama": "Anayasa m.9 (2017): Yargı yetkisi Türk Milleti adına bağımsız ve tarafsız mahkemelerce kullanılır."
    },
    {
      "id": "ID_U02_0054",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "İlçede hükümetin temsilcisi aşağıdakilerden hangisidir?",
      "secenekler": ["Kaymakam", "Vali", "Belediye başkanı", "İlçe başkanı", "Muhtar"],
      "cevap": "A",
      "aciklama": "5442 m.31: Kaymakam ilçede devletin ve hükümetin temsilcisidir."
    },
    {
      "id": "ID_U02_0055",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi merkezden yönetimin sakıncalarından biri değildir?",
      "secenekler": ["Sivil yönetimin askeri güç üzerinde üstünlüğü sağlanabilir.", "Yerel gereksinimlere ve taleplere yeterince yanıt veremez.", "Yerel demokrasiyi zayıflatır.", "Kamu görevlilerinin merkezi yönetimin emirlerini ön plana çıkarmalarına yol açabilir.", "Halkın kamu hizmetlerinin yürütülmesine ilgi ve katkısını azaltarak yönetime yabancılaşmasını doğurur."],
      "cevap": "A",
      "aciklama": "Sivil yönetimin askeri güç üzerinde üstünlüğünün sağlanması merkezden yönetimin bir yararıdır."
    },
    {
      "id": "ID_U02_0056",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Genelkurmay Başkanı kim tarafından atanır?",
      "secenekler": ["Cumhurbaşkanı", "Cumhurbaşkanı Yardımcısı", "TBMM", "Millî Savunma Bakanı", "İçişleri Bakanı"],
      "cevap": "A",
      "aciklama": "Anayasa m.104: Genelkurmay Başkanını Cumhurbaşkanı atar."
    },
    {
      "id": "ID_U02_0057",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi merkezden yönetimin yararlarından biri değildir?",
      "secenekler": ["Yönetimin tarafsızlığı sağlanır.", "Mali denetimi kolaydır.", "Kamusal hizmetler daha ekonomik sunulabilir.", "Kamusal hizmetler yeknesak sunulur.", "Bürokrasi azalır."],
      "cevap": "E",
      "aciklama": "Merkezden yönetim bürokrasiyi artırır; bu onun sakıncasıdır."
    },
    {
      "id": "ID_U02_0058",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "24 Haziran 2018 tarihindeki 27. Dönem Milletvekili Genel Seçiminde kaç milletvekili için seçim yapılmıştır?",
      "secenekler": ["500", "550", "600", "650", "700"],
      "cevap": "C",
      "aciklama": "2017 Anayasa değişikliğiyle milletvekili sayısı 550'den 600'e çıkarılmıştır (Anayasa m.75)."
    },
    {
      "id": "ID_U02_0059",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "İl idaresi ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
      "secenekler": ["İllerin idaresi yetki genişliği esasına dayanır.", "İllerde genel idare teşkilatı il, ilçe ve bucak bölümlerine uygun olarak düzenlenir.", "Belli kamu hizmetlerinin görülmesi amacıyla birden çok ili içine alan çevrede bu hizmetler için yetki genişliğine sahip kuruluşlar meydana getirilebilir.", "İl genel idaresinin başı ve mercii validir.", "İl ve ilçe kurulması, kaldırılması, merkezlerinin belirtilmesi, adlarının değiştirilmesi, bir ilçenin başka bir ile bağlanması Cumhurbaşkanlığı kararnamesi ile olur."],
      "cevap": "E",
      "aciklama": "5442 m.2: Bu işlemler kanunla yapılır."
    },
    {
      "id": "ID_U02_0060",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Aşağıdaki sebeplerden hangisine bağlı olarak olağanüstü hal ilan edilemez?",
      "secenekler": ["Ayaklanma", "Ülkenin ve milletin bölünmezliğini içten veya dıştan tehlikeye düşüren şiddet hareketlerinin yaygınlaşması", "Anayasal düzeni veya temel hak ve hürriyetleri ortadan kaldırmaya yönelik yaygın şiddet hareketlerinin ortaya çıkması", "Şiddet olayları nedeniyle kamu düzeninin ciddi şekilde bozulması", "Uluslararası zirvelerin ülkemizde yapıldığı durum ve bölgelerde"],
      "cevap": "E",
      "aciklama": "Anayasa m.119 OHAL sebeplerini sınırlı sayar; uluslararası zirve bunlardan değildir."
    },
    {
      "id": "ID_U02_0061",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Silahlı Kuvvetlerin yurt savunmasına hazırlanmasından aşağıdakilerden hangisi sorumludur?",
      "secenekler": ["TBMM Genel Sekreteri", "Cumhurbaşkanı Yardımcısı", "TBMM", "Cumhurbaşkanı", "Meclis Başkanı"],
      "cevap": "D",
      "aciklama": "Anayasa m.117: Başkomutanlık Cumhurbaşkanınca temsil edilir; Cumhurbaşkanı Silahlı Kuvvetlerin milli güvenliğin sağlanmasından ve yurt savunmasına hazırlanmasından TBMM'ye karşı sorumludur."
    },
    {
      "id": "ID_U02_0062",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Yüksek Seçim Kurulunun oluşumunda kaç yedek üye bulunur?",
      "secenekler": ["3", "4", "5", "7", "11"],
      "cevap": "B",
      "aciklama": "Anayasa m.79: YSK 7 asıl ve 4 yedek üyeden oluşur."
    },
    {
      "id": "ID_U02_0063",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Cumhurbaşkanının görevleriyle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
      "secenekler": ["Ülkenin iç ve dış siyaseti hakkında meclise mesaj verir.", "Kanunları yayımlar.", "Kanunları tekrar görüşülmek üzere TBMM'ye geri gönderir.", "Cumhurbaşkanı yardımcılarını teklif eder.", "TBMM'de açılış konuşması yapar."],
      "cevap": "D",
      "aciklama": "Anayasa m.104: Cumhurbaşkanı, yardımcılarını ve bakanları doğrudan atar ve görevlerine son verir."
    },
    {
      "id": "ID_U02_0064",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "TBMM para basma işlemini aşağıdakilerden hangisi ile yapar?",
      "secenekler": ["Parlamento kararı", "Kanun", "İçtüzük", "Yönetmelik", "Cumhurbaşkanlığı Kararnamesi"],
      "cevap": "B",
      "aciklama": "Anayasa m.87: Para basılmasına karar vermek TBMM'nin görevidir ve kanunla yapılır."
    },
    {
      "id": "ID_U02_0065",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Bakandan sonra idari teşkilatın en yüksek hiyerarşik amiri aşağıdakilerden hangisidir?",
      "secenekler": ["Bakan yardımcısı", "Cumhurbaşkanlığı İdari İşler Başkanı", "Danıştay Başkanı", "Vali", "İçişleri Bakanı"],
      "cevap": "A",
      "aciklama": "1 sayılı CBK: Bakan yardımcıları bakandan sonra gelen en üst amirdir (müsteşarlık kaldırılmıştır)."
    },
    {
      "id": "ID_U02_0066",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Millî Güvenlik Kurulu ile ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Kurulun gündemi Cumhurbaşkanı tarafından belirlenir.", "Adalet Bakanı da kurulun üyesidir.", "MGK kararları Cumhurbaşkanı Yardımcısı tarafından değerlendirilir.", "Olağan olarak iki ayda bir toplanır.", "OHAL, seferberlik ve savaş hali için görüş belirtmek kurulun görevlerinden biridir."],
      "cevap": "C",
      "aciklama": "Anayasa m.118: MGK tavsiye kararları Cumhurbaşkanınca değerlendirilir."
    },
    {
      "id": "ID_U02_0067",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "İl genel yönetiminin en üst hiyerarşik amiri aşağıdakilerden hangisidir?",
      "secenekler": ["Vali", "Bakan", "İl encümeni", "Genel sekreter", "İçişleri Bakanı"],
      "cevap": "A",
      "aciklama": "5442 m.9: Vali ilde devletin, hükümetin ve bakanlıkların temsilcisi ve il genel idaresinin başıdır."
    },
    {
      "id": "ID_U02_0068",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "Kaymakamlık mesleği ile ilgili aşağıdakilerden hangisi doğrudur?",
      "secenekler": ["Yetki genişliği vardır.", "Meslek memurluğudur.", "Genel emir çıkartabilir.", "Hem devletin hem de hükümetin temsilcisidir.", "İstisnai memurluktur."],
      "cevap": "B",
      "aciklama": "Kaymakamlık Mülki İdare Amirliği Hizmetleri Sınıfında yer alan bir meslek memurluğudur; yetki genişliği illere aittir."
    },
    {
      "id": "ID_U02_0069",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Olağanüstü hal (ilk ilanda) kaç ayı geçmemek üzere ilan edilebilir?",
      "secenekler": ["3", "4", "5", "6", "12"],
      "cevap": "D",
      "aciklama": "Anayasa m.119: OHAL altı ayı geçmemek üzere ilan edilir; TBMM her defasında en çok üç ay uzatabilir."
    },
    {
      "id": "ID_U02_0070",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Millî İstihbarat Teşkilatı nereye bağlıdır?",
      "secenekler": ["TBMM", "İçişleri Bakanlığı", "Genelkurmay Başkanlığı", "Cumhurbaşkanlığı", "Millî Savunma Bakanlığı"],
      "cevap": "D",
      "aciklama": "2937 sayılı Kanun: MİT Cumhurbaşkanlığına bağlıdır."
    },
    {
      "id": "ID_U02_0071",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Dışarıdan bakan atanması ilk kez hangi anayasanın yeniliğidir?",
      "secenekler": ["1876 Kanun-i Esasi", "1921 Anayasası", "1924 Anayasası", "1961 Anayasası", "1982 Anayasası"],
      "cevap": "D",
      "aciklama": "1961 Anayasası milletvekili olmayanların bakan olabilmesine imkân tanımıştır. Güncel durumda (2017 sonrası) bakanlar TBMM dışından atanır; milletvekili bakan olursa üyeliği düşer."
    },
    {
      "id": "ID_U02_0072",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Genelkurmay Başkanının görev ve yetkileri ne ile düzenlenir?",
      "secenekler": ["Genelge", "Yönetmelik", "Kanun", "Sirküler", "Yönerge"],
      "cevap": "C",
      "aciklama": "Anayasa m.117: Genelkurmay Başkanının görev ve yetkileri kanunla düzenlenir."
    },
    {
      "id": "ID_U02_0073",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Bakan yardımcıları görevlerinin yerine getirilmesinden nereye karşı sorumludur?",
      "secenekler": ["Bakana", "Danıştaya", "Cumhurbaşkanına", "İçişleri Bakanına", "TBMM Başkanına"],
      "cevap": "A",
      "aciklama": "1 sayılı CBK: Bakan yardımcıları bakana karşı sorumludur."
    },
    {
      "id": "ID_U02_0074",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Yürütmenin en çok güçlendirildiği anayasa aşağıdakilerden hangisidir?",
      "secenekler": ["1921", "1924", "1961", "1982", "1876 Kanun-i Esasi"],
      "cevap": "D",
      "aciklama": "1982 Anayasası (özellikle 2017 değişikliğiyle) yürütmeyi en güçlü biçimde düzenlemiştir."
    },
    {
      "id": "ID_U02_0075",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi merkezden yönetimin yararlarından biri değildir?",
      "secenekler": ["Kalkınma ve gelir dağılımı dengeli olarak yürütülür.", "Kamu görevlileri yerel baskı ve etkilerde korunur.", "Yönetimin tarafsızlığı sağlanır.", "Sivil yönetimin askeri güç üzerindeki üstünlüğü azaltılabilir.", "Kamusal hizmetler daha az maliyetle üretilebilir."],
      "cevap": "D",
      "aciklama": "Merkezden yönetim sivil yönetimin askeri güç üzerindeki üstünlüğünü güçlendirir; azaltmaz."
    },
    {
      "id": "ID_U02_0076",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi merkezden yönetim ilkesinin özelliklerinden değildir?",
      "secenekler": ["Her idarenin kendine has gelir kaynaklarına ve bütçeye sahip olması gerekir.", "Merkezden yönetimde tek bir tüzel kişilik vardır; o da devlet tüzel kişiliğidir.", "Devlet, yani merkezi idare, kamu hizmetlerini konularına göre bölerek bakanlıklar şeklinde örgütlenmiştir.", "Kamu hizmetlerinin yürütülmesi için gerekli olan gelir ve giderler merkezi bütçede toplanır.", "Merkezi idare çeşitli bakanlıklara, bakanlıklar da başkent teşkilatı ve taşra teşkilatı olmak üzere değişik birimlere ayrılmış olsa da merkezi idare bir bütündür."],
      "cevap": "A",
      "aciklama": "Ayrı gelir ve bütçe yerinden yönetim kuruluşlarının özelliğidir."
    },
    {
      "id": "ID_U02_0077",
      "unite": 2,
      "zorluk": "orta",
      "soru": "I. Bakanlık kamu hizmetinin konusuna göre uzmanlaşıldığı en yüksek örgüttür.\nII. Bakanlıkların ayrı tüzel kişilikleri yoktur.\nIII. Bakanlıklar TBMM'ye kanun teklifi verebilir.\nYukarıdakilerden hangisi veya hangileri bakanlıklarla ilgili doğru bir ifadedir?",
      "secenekler": ["I – III", "I – II", "I – II – III", "Yalnız III", "Yalnız II"],
      "cevap": "B",
      "aciklama": "Anayasa m.88 (2017): Kanun teklif etmeye yalnızca milletvekilleri yetkilidir; bakanlıklar Devlet tüzel kişiliği içindedir."
    },
    {
      "id": "ID_U02_0078",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi il idare kurulunun üyelerinden biri değildir?",
      "secenekler": ["Hukuk işleri müdürü", "Mal müdürü", "Defterdar", "İl millî eğitim müdürü", "İl sağlık müdürü"],
      "cevap": "B",
      "aciklama": "Mal müdürü ilçe düzeyinde görev yapar ve ilçe idare kurulu üyesidir."
    },
    {
      "id": "ID_U02_0079",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi İçişleri Bakanlığına bağlı kuruluş değildir?",
      "secenekler": ["Kara Kuvvetleri Komutanlığı", "Jandarma Komutanlığı", "Sahil Güvenlik Komutanlığı", "Nüfus Müdürlüğü", "Emniyet Genel Müdürlüğü"],
      "cevap": "A",
      "aciklama": "Kara Kuvvetleri Komutanlığı Millî Savunma Bakanlığına bağlıdır."
    },
    {
      "id": "ID_U02_0080",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Kaymakam ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
      "secenekler": ["İlçe genel idaresinin başı ve mercii kaymakamdır.", "Kaymakam, ilçede Cumhurbaşkanının idari yürütme vasıtasıdır.", "Kaymakamlık istisnai bir memurluktur.", "İlçenin genel idaresinden kaymakam sorumludur.", "Kaymakam kanun, Cumhurbaşkanlığı kararnamesi ve diğer mevzuatın neşir ve ilanını, uygulanmasını sağlar ve bunların verdiği yetkileri kullanır ve ödevleri yerine getirir; valinin talimat ve emirlerini yürütmekle görevlidir."],
      "cevap": "C",
      "aciklama": "Kaymakamlık Mülki İdare Amirliği Hizmetleri Sınıfında bir meslek memurluğudur; istisnai memurluk değildir."
    },
    {
      "id": "ID_U02_0081",
      "unite": 2,
      "zorluk": "orta",
      "soru": "\"Siyasi merkeziyetçiliğe göre teşkilatlanan ve tek bir anayasası, yürütme ve yargısı olan merkeziyetçi devletlere ... devlet denmektedir.\" Yukarıdaki boşluğa aşağıdakilerden hangisi getirilmelidir?",
      "secenekler": ["Üniter", "Federal", "Federe", "Faşist", "Sosyalist"],
      "cevap": "A",
      "aciklama": "Üniter devlet tanımıdır."
    },
    {
      "id": "ID_U02_0082",
      "unite": 2,
      "zorluk": "orta",
      "soru": "\"Merkezi idarenin yetkilerinden bir kısmının merkezin dışında ama yine merkeze bağlı olarak çalışan taşradaki idari makamlara devredilmesidir. Bir başka deyişle merkezden yönetimin yumuşatılmış bir şeklidir. Valilere tanınmıştır.\" Yukarıdaki tanım aşağıdaki kavramlardan hangisine aittir?",
      "secenekler": ["Adem-i merkeziyet", "Merkeziyetçilik", "Yetki genişliği", "Mahalli idare", "Hizmet yönünden kuruluş"],
      "cevap": "C",
      "aciklama": "Anayasa m.126: İllerin idaresi yetki genişliği esasına dayanır."
    },
    {
      "id": "ID_U02_0083",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi merkezi teşkilat yapısı dışındadır?",
      "secenekler": ["MGK", "Cumhurbaşkanı", "Devlet Denetleme Kurulu", "İl özel idaresi", "İl idaresi"],
      "cevap": "D",
      "aciklama": "İl özel idaresi bir mahalli idaredir (yerinden yönetim)."
    },
    {
      "id": "ID_U02_0084",
      "unite": 2,
      "zorluk": "orta",
      "soru": "1982 Anayasası'na göre aşağıdakilerden hangisi Cumhurbaşkanının seçilme şartlarından biri değildir?",
      "secenekler": ["Milletvekili seçilme yeterliliğine sahip olmak", "Türk vatandaşı olmak", "40 yaşını doldurmuş olmak", "Yükseköğrenim yapmış olmak", "18 yaşını doldurmuş olmak"],
      "cevap": "E",
      "aciklama": "Anayasa m.101: Kırk yaşını doldurmuş olmak gerekir."
    },
    {
      "id": "ID_U02_0085",
      "unite": 2,
      "zorluk": "orta",
      "soru": "İl İdaresi Kanunu'na göre (m.9) \"il sınırları içerisinde ili yönetmek, kanunları ve hükümet emirlerini uygulamak, kamu düzenini ve güvenliği sağlamak, ilde suç işlenmesini önlemek, resmi merasimlere katılmak ve genel emirler çıkarmakla görevlidir.\" Bu görevler kime aittir?",
      "secenekler": ["Belediye başkanı", "İl genel meclis başkanı", "Kaymakam", "Vali", "İl özel idaresi genel sekreteri"],
      "cevap": "D",
      "aciklama": "5442 m.9–11: Bu görevler valiye aittir."
    },
    {
      "id": "ID_U02_0086",
      "unite": 2,
      "zorluk": "zor",
      "soru": "İl İdaresi Kanununa göre vali belli yerlerde veya saatlerde kişilerin dolaşmalarını, toplanmalarını, araçların seyirlerini düzenleyebilir veya kısıtlayabilir ve ruhsatlı da olsa her çeşit silah ve merminin taşınması ve naklini yasaklayabilir. Bu yasaklama en fazla kaç gün olabilir?",
      "secenekler": ["3", "7", "15", "30", "Sınır yoktur."],
      "cevap": "C",
      "aciklama": "5442 m.11/C: Bu tedbirler on beş günü geçmemek üzere alınabilir."
    },
    {
      "id": "ID_U02_0087",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi yetki genişliği ilkesinin özelliklerinden değildir?",
      "secenekler": ["Yetki genişliği merkeze ait olup merkez adına valilerce kullanılır.", "Vali bu yetkiyi kendi adına kullanır.", "Vali yetki genişliği ilkesini merkeze danışmadan kullanarak kamu hizmetlerini yürütür.", "Yetki genişliği, merkezden yönetimin sakıncalarını gidermek ve taşra teşkilatında hizmetlerin daha hızlı yürütülmesi için kullanılan bir yetkidir.", "Yetkinin kullanılmasıyla ilgili tüm gelir ve giderler merkeze aittir."],
      "cevap": "B",
      "aciklama": "Vali yetki genişliğini kendi adına değil, Devlet tüzel kişiliği adına kullanır."
    },
    {
      "id": "ID_U02_0088",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Valiler ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
      "secenekler": ["Vali sağlık, eğitim, güvenlik gibi millî kamu hizmetlerinin il düzeyinde yürütülmesine ilişkin olarak tek tek her bakana karşı sorumludur.", "Her bir bakan kendi bakanlığının hizmet alanında valiye emir ve talimat verebilir.", "Vali askerî makamlar ve yargı organları üzerinde de hiyerarşik yetkiye sahiptir.", "Valilerin en yaygın yetkileri kolluk yetkileridir.", "Vali ilde kamu düzenini sağlamakla görevlidir."],
      "cevap": "C",
      "aciklama": "5442 m.9: Adli ve askerî teşkilat valinin hiyerarşik yetkisi dışındadır."
    },
    {
      "id": "ID_U02_0089",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Coğrafya, ekonomi, güvenlik ve mahalli hizmet bakımlarından aralarında münasebet bulunan kasaba ve köylerden meydana gelen bir idare bölümüne ne ad verilir?",
      "secenekler": ["İl", "İlçe", "Şehir", "Bucak", "Mahalle"],
      "cevap": "D",
      "aciklama": "5442 m.1/C: Bucak tanımıdır (ilçe ise bucaklardan oluşur). Bucak teşkilatı bugün uygulamada kalmamıştır."
    },
    {
      "id": "ID_U02_0090",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü hangi bakanlığa bağlıdır?",
      "secenekler": ["Hazine ve Maliye Bakanlığı", "Aile ve Sosyal Hizmetler Bakanlığı", "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı", "İçişleri Bakanlığı", "Adalet Bakanlığı"],
      "cevap": "D",
      "aciklama": "Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü İçişleri Bakanlığına bağlıdır."
    },
    {
      "id": "ID_U02_0091",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Valiler ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
      "secenekler": ["Valilik bir istisnai memurluktur.", "Vali olarak atanan kişi istendiği zaman ve istenen herhangi bir sebeple, yani tamamıyla takdiri olarak görevden alınabilir.", "Vali her bir bakanın ildeki temsilcisidir.", "Vali atama işlemi tamamıyla TBMM'nin takdirine bağlı bir işlemdir.", "Valinin adli makamlar üzerinde hiyerarşi yetkisi yoktur."],
      "cevap": "D",
      "aciklama": "Valiler Cumhurbaşkanı kararıyla atanır."
    },
    {
      "id": "ID_U02_0092",
      "unite": 2,
      "zorluk": "orta",
      "soru": "İlçe idare kurulları kararları aleyhine nereye itiraz edilir?",
      "secenekler": ["İl idare kurulu", "Valilik", "Danıştay", "Bölge idare mahkemesi", "Vergi mahkemesi"],
      "cevap": "A",
      "aciklama": "Kitabın anahtarına göre ilçe idare kurulu kararlarına karşı il idare kuruluna itiraz edilir."
    },
    {
      "id": "ID_U02_0093",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Köy ve kasabaların aynı ilçe içinde bir bucaktan başka bir bucağa bağlanması, köy adlarının değiştirilmesi, köylerin birleştirilmesi ve ayrılması, bir köy, mahalle veya semtin o köyden ayrılıp başka bir köy ile birleştirilmesi aşağıdakilerden hangisinin tasvibiyle yapılır?",
      "secenekler": ["Dışişleri Bakanlığı", "İçişleri Bakanlığı", "Millî Savunma Bakanlığı", "Hazine ve Maliye Bakanlığı", "Tarım ve Orman Bakanlığı"],
      "cevap": "B",
      "aciklama": "5442 m.2: Bu işlemler İçişleri Bakanlığının onayıyla yapılır."
    },
    {
      "id": "ID_U02_0094",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Millî Güvenlik Kurulu ilk kez hangi anayasada düzenlenmiştir?",
      "secenekler": ["1876 Kanun-i Esasi", "1921 Anayasası", "1924 Anayasası", "1961 Anayasası", "1982 Anayasası"],
      "cevap": "D",
      "aciklama": "MGK ilk kez 1961 Anayasası m.111 ile anayasal kurum olmuştur."
    },
    {
      "id": "ID_U02_0095",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisinin seçim süresi diğerlerinden farklıdır?",
      "secenekler": ["Muhtar", "Belediye başkanı", "Cumhurbaşkanı", "İl genel meclisi", "YSK Başkanı"],
      "cevap": "E",
      "aciklama": "Muhtar, belediye başkanı, il genel meclisi ve Cumhurbaşkanı beş yıl için seçilir; YSK Başkanı ise YSK üyeleri arasından farklı bir süre için seçilir."
    },
    {
      "id": "ID_U02_0096",
      "unite": 2,
      "zorluk": "zor",
      "soru": "İçişleri Bakanına bağlı olarak görev yapmakta olup görev ve yetkileri mevzuatla düzenlenmiş olan görevleri arasında merkez birimlerinin, il ve ilçe mülki amirlerinin, belediyelerin seçilmiş ve atanmış kişilerinin iş ve işlemlerini denetlemek, bakanlığın amaçlarını daha etkin ve verimli olabilmesi için görüş bildirmek, soruşturma yapmak, rapor hazırlamak aşağıdakilerden hangisine aittir?",
      "secenekler": ["Emniyet Genel Müdürlüğü Teftiş Kurulu Başkanlığı", "Mülkiye Teftiş Kurulu Başkanlığı", "Devlet Denetleme Kurulu Başkanlığı", "Cumhurbaşkanı Yrd. Teftiş Kurulu Başkanlığı", "Sayıştay"],
      "cevap": "B",
      "aciklama": "Mülkiye Teftiş Kurulu İçişleri Bakanlığına bağlı denetim birimidir."
    },
    {
      "id": "ID_U02_0097",
      "unite": 2,
      "zorluk": "zor",
      "soru": "\"Türkiye idare teşkilatlanma bakımından merkezi idare ve yerinden idare olmak üzere örgütlenmiştir. Merkezi idare kendi içinde merkez teşkilatı, taşra teşkilatı ve yardımcı kuruluşlar olarak bölümlere ayrılırken yerinden idarede mahalli yönetim ve hizmet yönünden yerinden yönetim olarak bölümlere ayrılmakta ve bunlarında alt bölümleri bulunmaktadır.\" Verilen bilgiye göre aşağıdaki eşleşmelerden hangisi doğrudur?",
      "secenekler": ["Merkezi yönetim – Belediyeler", "Merkezi yönetim – Bakanlık", "Merkezi yönetim – İl özel idaresi", "Mahalli yönetim – Bakanlık", "Hizmet yönünden kuruluş – Valilik"],
      "cevap": "B",
      "aciklama": "Bakanlıklar merkezi yönetimin başkent teşkilatıdır."
    },
    {
      "id": "ID_U02_0098",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi merkezden idarenin sakıncaları arasında sayılmaz?",
      "secenekler": ["Merkezden idare kamu hizmetlerinde kırtasiyecilik ve bürokrasiyi artırdığından hem işleri yavaşlatmakta hem de kaynak ve zaman israfına yol açmaktadır.", "Merkezi idarenin bütün yetkileri elinde tutmasından dolayı kamu bürokrasisi iş yapamaz hale gelmektedir.", "Merkeziyet güçlendikçe mahalli idareler üzerindeki vesayet denetimi ağırlaşmakta ve zorlaşmaktadır.", "Bölgeler arasındaki kalkınmışlık ve gelişmişlik farklılıkları bir ölçüde giderilebilir.", "Tepeden inmeci, bürokratik ve dayatmacı bir yönetim olduğundan demokratik yönetim anlayışı ile bağdaşmamaktadır."],
      "cevap": "D",
      "aciklama": "Bölgeler arası dengesizliğin giderilmesi merkezden yönetimin bir yararıdır."
    },
    {
      "id": "ID_U02_0099",
      "unite": 2,
      "zorluk": "zor",
      "soru": "\"Millî Güvenlik Kurulu (MGK), askeri ve sivil otoritelerin önemli ülke sorunları üzerinde ortak görüş tespit etmek üzere bir araya geldikleri karma bir kuruldur. Cumhurbaşkanı başkanlığında iki ayda bir toplanır. Kararları tavsiye niteliğindedir.\" Verilen bilgilere göre MGK Türkiye'nin teşkilat yapısı içinde nasıl bir kuruluştur?",
      "secenekler": ["Hizmet yönünden idari kuruluş", "Mahalli idarenin yardımcı kuruluşu", "Merkezi idarenin yardımcı kuruluşu", "Denetleyici düzenleyici üst kurul", "Derin devlet"],
      "cevap": "C",
      "aciklama": "MGK merkezi idarenin danışma niteliğindeki yardımcı kuruluşudur."
    },
    {
      "id": "ID_U02_0100",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi merkezden idarenin yararları arasında sayılmaz?",
      "secenekler": ["Ülkenin idari birlik ve bütünlüğünün sağlanmasına katkıda bulunan önemli bir ilkedir.", "Bir başka deyişle güçlü bir devlet yönetimi sağlar.", "Merkezden idarede kamu hizmetleri tek bir bütçeden yapıldığı için mali denetimi daha kolay olur.", "Merkezden idarede siyasi gücü ve yetkiyi elinde bulunduran otoriteler kendi seçim bölgelerini kayırmakta ve idarenin tarafsızlığını kuvvetlendirir.", "Kamu hizmetlerini ülke düzeyinde her yere planlı, eşit ve dengeli bir şekilde götürebilir."],
      "cevap": "D",
      "aciklama": "Seçim bölgelerini kayırma bir sakıncadır ve tarafsızlığı zayıflatır."
    },
    {
      "id": "ID_U02_0101",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Cumhurbaşkanlığı kararnameleriyle ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Anayasada münhasıran kanunla düzenlenmesi öngörülen konularda Cumhurbaşkanlığı kararnamesi çıkarılabilir.", "Kanunda açıkça düzenlenen konularda Cumhurbaşkanlığı kararnamesi çıkarılamaz.", "Cumhurbaşkanlığı kararnamesi ile kanunlarda farklı hükümler bulunması halinde kanun hükümleri uygulanır.", "TBMM'nin aynı konuda kanun çıkarması durumunda Cumhurbaşkanlığı kararnamesi hükümsüz hale gelir.", "Hepsi"],
      "cevap": "A",
      "aciklama": "Anayasa m.104/17: Anayasada münhasıran kanunla düzenlenmesi öngörülen konularda CBK çıkarılamaz."
    },
    {
      "id": "ID_U02_0102",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Temel hak ve hürriyetlerin kullanılmasının durdurulmasıyla ilgili olarak; ..., milletlerarası hukuktan doğan yükümlülükler ihlal edilmemek kaydıyla durumun gerektirdiği ölçüde temel hak ve hürriyetlerin kullanılması kısmen veya tamamen durdurulabilir veya bunlar için anayasada öngörülen güvencelere aykırı tedbirler alınabilir. Boşluğu dolduracak şık aşağıdakilerden hangisi olabilir?",
      "secenekler": ["Seçim", "Uluslararası anlaşmazlık", "Olağanüstü hal", "2911 sayılı yasa kapsamında", "Suçun önlenmesi hali"],
      "cevap": "C",
      "aciklama": "Anayasa m.15: Savaş, seferberlik veya olağanüstü hallerde."
    },
    {
      "id": "ID_U02_0103",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Aşağıdaki haklardan hangisiyle ilgili Cumhurbaşkanlığı kararnamesi düzenlenebilir?",
      "secenekler": ["Tarih, kültür ve tabiat varlıklarının korunması", "Temel hak ve hürriyetlerin niteliği", "Temel hak ve hürriyetlerin sınırlanması", "Temel hak ve hürriyetlerin kötüye kullanılamaması", "Kişi hakları"],
      "cevap": "A",
      "aciklama": "Anayasa m.104/17: CBK sosyal ve ekonomik haklar alanında çıkarılabilir; temel haklar, kişi hakları ve siyasi haklar alanında çıkarılamaz."
    },
    {
      "id": "ID_U02_0104",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Aşağıdaki haklardan hangisiyle ilgili Cumhurbaşkanlığı kararnamesi düzenlenebilir?",
      "secenekler": ["Kişinin dokunulmazlığı, maddi ve manevi varlığı", "Zorla çalıştırma yasağı", "Kişi hürriyeti ve güvenliği", "Eğitim ve öğrenim hakkı ve ödevi", "Özel hayatın gizliliği"],
      "cevap": "D",
      "aciklama": "Eğitim ve öğrenim hakkı sosyal ve ekonomik haklardandır; CBK ile düzenlenebilir."
    },
    {
      "id": "ID_U02_0105",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Genelkurmay Başkanlığı aşağıdakilerden hangisine bağlıdır?",
      "secenekler": ["Millî Savunma Bakanlığı", "İçişleri Bakanlığı", "Cumhurbaşkanlığı", "TBMM", "Ticaret Bakanlığı"],
      "cevap": "A",
      "aciklama": "1 sayılı CBK (2018) ile Genelkurmay Başkanlığı Millî Savunma Bakanlığına bağlanmıştır."
    },
    {
      "id": "ID_U02_0106",
      "unite": 2,
      "zorluk": "zor",
      "soru": "I. Siyasi yetkiler\nII. Atama\nIII. Vesayet denetimi yapma\nBakanlar yukarıda sayılan yetki ve görevlerinden hangilerini devredebilir?",
      "secenekler": ["I – II – III", "I – II", "I – III", "Yalnız II", "II – III"],
      "cevap": "E",
      "aciklama": "Siyasi yetkiler devredilemez; atama ve vesayet yetkileri kanunun izin verdiği ölçüde devredilebilir."
    },
    {
      "id": "ID_U02_0107",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Bakan yardımcılığı uygulamasına hangi yıl başlanmıştır?",
      "secenekler": ["2009", "2010", "2011", "2013", "2014"],
      "cevap": "C",
      "aciklama": "643 sayılı KHK ile 2011'de getirilmiştir; 2018'de 1 sayılı CBK ile yeniden düzenlenerek müsteşarlığın yerini almıştır."
    },
    {
      "id": "ID_U02_0108",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Vali ilde aşağıdakilerden hangisinin temsilcisi ve idari yürütme vasıtasıdır?",
      "secenekler": ["İçişleri Bakanı", "Cumhurbaşkanı", "Milletvekilleri", "Millî Savunma Bakanı", "Hazine ve Maliye Bakanı"],
      "cevap": "B",
      "aciklama": "5442 m.9 (2018): Vali ilde Devletin ve Cumhurbaşkanının temsilcisi ve idari yürütme vasıtasıdır."
    },
    // ============================================================
    // ÜNİTE 3 – YERINDEN YÖNETIM VE MAHALLI İDARELER
    // ============================================================
    {
      "id": "ID_U03_0001",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi büyükşehir belediyesidir?",
      "secenekler": ["Rize", "Niğde", "Giresun", "Burdur", "Hatay"],
      "cevap": "E",
      "aciklama": "Hatay 2012'de 6360 sayılı Kanunla büyükşehir olmuştur; Türkiye'de 30 büyükşehir belediyesi vardır."
    },
    {
      "id": "ID_U03_0002",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi mahalli idare değildir?",
      "secenekler": ["İl özel idareleri", "Belediyeler", "Büyükşehir belediyeleri", "İlçe idaresi", "Köyler"],
      "cevap": "D",
      "aciklama": "İlçe idaresi merkezi idarenin taşra teşkilatıdır; mahalli idareler il özel idaresi, belediye (büyükşehir dahil) ve köydür."
    },
    {
      "id": "ID_U03_0003",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi özel bütçeli idaredir?",
      "secenekler": ["Sayıştay", "Türk Dil Kurumu Başkanlığı", "YSK", "TBMM", "Anayasa Mahkemesi"],
      "cevap": "B",
      "aciklama": "5018 sayılı Kanun cetvellerine göre TBMM, Sayıştay, YSK ve AYM genel bütçeli; Türk Dil Kurumu Başkanlığı özel bütçeli idaredir."
    },
    {
      "id": "ID_U03_0004",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi bilimsel, teknik ve kültürel hizmet yerinden yönetim kurumlarından değildir?",
      "secenekler": ["Üniversiteler", "TÜBİTAK", "Türkiye İş Kurumu", "TRT", "TSE"],
      "cevap": "C",
      "aciklama": "İŞKUR istihdam alanında hizmet veren sosyal nitelikli bir kamu kurumudur."
    },
    {
      "id": "ID_U03_0005",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi kamu kurumu niteliğindeki meslek kuruluşu değildir?",
      "secenekler": ["SGK", "Tabipler Odası", "Ziraat Odası", "Barolar", "Veterinerler Odası"],
      "cevap": "A",
      "aciklama": "SGK bir sosyal güvenlik kurumudur; meslek kuruluşu değildir (Anayasa m.135)."
    },
    {
      "id": "ID_U03_0006",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi büyükşehir değildir?",
      "secenekler": ["Erzurum", "Tekirdağ", "Ordu", "Aksaray", "Şanlıurfa"],
      "cevap": "D",
      "aciklama": "Aksaray büyükşehir değildir; diğerleri 2012'den sonra büyükşehir olmuştur."
    },
    {
      "id": "ID_U03_0007",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "I. İl Özel İdaresi\nII. Belediye\nIII. Köy\nYukarıdakilerden hangisi mahalli idareler arasında yer alır?",
      "secenekler": ["Yalnız I", "Yalnız II", "Yalnız III", "I – II – III", "I – III"],
      "cevap": "D",
      "aciklama": "Anayasa m.127: Mahalli idareler il özel idaresi, belediye ve köydür."
    },
    {
      "id": "ID_U03_0008",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi idari vesayet örneğidir?",
      "secenekler": ["İzmir Valiliği – İzmir Büyükşehir Belediyesi", "Bakan – Bakan Yardımcısı", "Vali – Kaymakam", "Bakan – Vali", "Kaymakam – İlçe Emniyet Müdürü"],
      "cevap": "A",
      "aciklama": "İdari vesayet merkezi idare ile yerinden yönetim kuruluşları arasındaki denetimdir; diğerleri hiyerarşi ilişkisidir."
    },
    {
      "id": "ID_U03_0009",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "Belediye adına kamu hizmeti imtiyazı hangi merciin kararıyla verilir?",
      "secenekler": ["Belediye encümeni", "Belediye meclisi", "Belediye başkanı", "Vali", "Kaymakam"],
      "cevap": "B",
      "aciklama": "5393 m.18: İmtiyaz verilmesine belediye meclisi karar verir (Danıştay görüşü ve Cumhurbaşkanı onayı gerekir)."
    },
    {
      "id": "ID_U03_0010",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "Belediyelerde taşınmaz mal satımına karar vermek hangi merciin görevidir?",
      "secenekler": ["Belediye encümeni", "Belediye meclisi", "Belediye başkanı", "Vali", "Kaymakam"],
      "cevap": "B",
      "aciklama": "5393 m.18: Taşınmaz mal satımına belediye meclisi karar verir."
    },
    {
      "id": "ID_U03_0011",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "İmar mevzuatı bakımından belediyelerin kontrol ve mesuliyeti altına verilmiş olan alanlara ne ad verilir?",
      "secenekler": ["Mücavir alan", "Sit alanı", "Kamu alanı", "Özel alan", "Harman"],
      "cevap": "A",
      "aciklama": "3194 sayılı İmar Kanunu m.4: Mücavir alan, imar bakımından belediyenin kontrol ve sorumluluğuna verilen alandır."
    },
    {
      "id": "ID_U03_0012",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi (5018 sayılı Kanun cetvellerinde) sosyal güvenlik kurumudur?",
      "secenekler": ["Türkiye İş Kurumu Genel Müdürlüğü", "Kişisel Verileri Koruma Kurumu", "Rekabet Kurumu", "Sermaye Piyasası Kurulu", "Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu"],
      "cevap": "A",
      "aciklama": "5018 sayılı Kanun (IV) sayılı cetvelinde sosyal güvenlik kurumları SGK ve İŞKUR'dur; diğerleri düzenleyici ve denetleyici kurumlardır."
    },
    {
      "id": "ID_U03_0013",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "İl encümeni aşağıdakilerden hangisinin başkanlığında toplanır?",
      "secenekler": ["Vali", "Genel sekreter", "Belediye başkanı", "Meclisteki en yaşlı üye", "Büyükşehir belediye başkanı"],
      "cevap": "A",
      "aciklama": "5302 m.25: İl encümeni valinin başkanlığında toplanır."
    },
    {
      "id": "ID_U03_0014",
      "unite": 3,
      "zorluk": "orta",
      "soru": "2014 yılı mahalli idareler seçimi sonunda büyükşehir bünyesindeki il özel idareleri kaldırıldı. Aşağıdaki illerimizden hangisi bu kapsamda değerlendirilecek illerimizden değildir?",
      "secenekler": ["Aydın", "Balıkesir", "Zonguldak", "Denizli", "Diyarbakır"],
      "cevap": "C",
      "aciklama": "Zonguldak büyükşehir değildir; il özel idaresi devam eder (6360 sayılı Kanun)."
    },
    {
      "id": "ID_U03_0015",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Belediye sınırları aşağıdakilerden hangisinin onayı ile kesinleşir?",
      "secenekler": ["Belediye başkanı", "Vali", "Belediye meclisinin kararı", "Kaymakam", "İl encümeni"],
      "cevap": "B",
      "aciklama": "5393 sayılı Kanun: Belediye sınırları, belediye meclisi kararı ve valinin onayıyla kesinleşir."
    },
    {
      "id": "ID_U03_0016",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Belediye sınırları içinde, ihtiyaç ve öncelikleri benzer özellikler gösteren ve sakinleri arasında komşuluk ilişkisi bulunan idari birimlere ne ad verilir?",
      "secenekler": ["Köy", "Mezra", "Oba", "Belediye", "Mahalle"],
      "cevap": "E",
      "aciklama": "5393 m.9: Mahalle tanımı."
    },
    {
      "id": "ID_U03_0017",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Mahalli idareler ile ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Kuruluş, görev ve yetkileri yerinden yönetim ilkesine uygun olarak kanunla düzenlenir.", "Seçimler 5 yılda bir yapılır.", "Yerel yönetimlerin seçilmiş organlarının organlık sıfatını kazanmalarına ilişkin itirazların çözümü YSK ve organlık sıfatını kaybetmelerinin denetimi yargısal denetim yolu ile olur.", "Merkezi yönetimin mahalli idareler üzerinde idari vesayet yetkisi vardır.", "İçişleri Bakanlığının kararı ile kendi aralarında birlik kurabilirler."],
      "cevap": "E",
      "aciklama": "Anayasa m.127: Mahalli idareler Cumhurbaşkanının izniyle kendi aralarında birlik kurabilir."
    },
    {
      "id": "ID_U03_0018",
      "unite": 3,
      "zorluk": "orta",
      "soru": "I. İl Genel Meclisi\nII. İl Encümeni\nIII. Vali\nYukarıdakilerden hangisi veya hangileri il özel idaresinin organlarındandır?",
      "secenekler": ["Yalnız I", "Yalnız II", "Yalnız III", "II – III", "I – II – III"],
      "cevap": "E",
      "aciklama": "5302 m.6: İl özel idaresinin organları il genel meclisi, il encümeni ve validir."
    },
    {
      "id": "ID_U03_0019",
      "unite": 3,
      "zorluk": "orta",
      "soru": "İl Genel Meclisinin görev ve yetkilerine ilişkin aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Yıllık çalışma programına alınan işlerle ilgili kamulaştırma kararı almak ve uygulamak", "Bütçe ve kesin hesabı kabul etmek", "Borçlanmaya karar vermek", "Şartlı bağışları kabul etmek", "Encümen üyeleri ile ihtisas komisyonları üyelerini seçmek"],
      "cevap": "A",
      "aciklama": "5302 m.26: Kamulaştırma kararı almak ve uygulamak il encümeninin görevidir."
    },
    {
      "id": "ID_U03_0020",
      "unite": 3,
      "zorluk": "orta",
      "soru": "İl özel idaresi adına imtiyaz verilmesine aşağıdakilerden hangisi karar verir?",
      "secenekler": ["İl encümeni", "İl genel meclisi", "Vali", "TBMM", "İçişleri Bakanı"],
      "cevap": "B",
      "aciklama": "5302 m.10: İmtiyaz verilmesine il genel meclisi karar verir."
    },
    {
      "id": "ID_U03_0021",
      "unite": 3,
      "zorluk": "orta",
      "soru": "İl genel meclisi tarafından alınan kararların tam metni en geç kaç gün içinde valiye gönderilir?",
      "secenekler": ["20", "15", "10", "5", "30"],
      "cevap": "D",
      "aciklama": "5302 m.15: Kararlar en geç beş gün içinde valiye gönderilir."
    },
    {
      "id": "ID_U03_0022",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Bir beldenin adı aşağıdakilerden hangisinin onayı ile değiştirilir?",
      "secenekler": ["Vali", "TBMM", "İçişleri Bakanı", "Kaymakam", "Muhtar"],
      "cevap": "C",
      "aciklama": "5393 sayılı Kanun: Belde adının değiştirilmesi belediye meclisi kararı ve İçişleri Bakanlığının onayıyla olur."
    },
    {
      "id": "ID_U03_0023",
      "unite": 3,
      "zorluk": "orta",
      "soru": "I. Belediye meclisi\nII. Belediye encümeni\nIII. Belediye başkanı\nYukarıdakilerden hangileri belediyenin organlarındandır?",
      "secenekler": ["I – II – III", "Yalnız I", "I – II", "I – III", "Yalnız II"],
      "cevap": "A",
      "aciklama": "5393 m.17: Belediyenin organları belediye meclisi, belediye encümeni ve belediye başkanıdır."
    },
    {
      "id": "ID_U03_0024",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Belediyenin karar organları kaç yıl için seçilir?",
      "secenekler": ["7", "5", "4", "3", "2"],
      "cevap": "B",
      "aciklama": "Anayasa m.127: Mahalli idarelerin seçimleri beş yılda bir yapılır."
    },
    {
      "id": "ID_U03_0025",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamu kurumu niteliğindeki meslek kuruluşlarından biri değildir?",
      "secenekler": ["Türkiye Barolar Birliği", "Türkiye Noterler Birliği", "Türk Tabipleri Birliği", "Kızılay", "TOBB"],
      "cevap": "D",
      "aciklama": "Kızılay kamu yararına çalışan bir dernektir; meslek kuruluşu değildir."
    },
    {
      "id": "ID_U03_0026",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi yerinden yönetim birimi değildir?",
      "secenekler": ["İl Genel Meclisi (il özel idaresi)", "Belediyeler", "Kamu kurumu niteliğindeki meslek kuruluşları", "Serbest bölgeler", "Üniversiteler"],
      "cevap": "D",
      "aciklama": "Serbest bölgeler ayrı tüzel kişiliği olmayan, merkezi idarece yönetilen alanlardır."
    },
    {
      "id": "ID_U03_0027",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Aşağıdaki idarelerden hangisi mahalli idare birimi değildir?",
      "secenekler": ["Saraylı Köyü", "Vezirköprü Belediyesi", "Mahzen Mahallesi", "Amasya İl Özel İdaresi", "İstanbul Büyükşehir Belediyesi"],
      "cevap": "C",
      "aciklama": "Mahalle belediyenin bir alt birimidir; ayrı mahalli idare değildir."
    },
    {
      "id": "ID_U03_0028",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi Türkiye'de yerel yönetimlerin organları arasında yer almaz?",
      "secenekler": ["Belediye meclisi", "Belediye encümeni", "İl encümeni", "İl idare kurulu", "Köy derneği"],
      "cevap": "D",
      "aciklama": "İl idare kurulu merkezi idarenin taşra teşkilatına aittir."
    },
    {
      "id": "ID_U03_0029",
      "unite": 3,
      "zorluk": "zor",
      "soru": "2014 mahalli idareler seçimiyle birlikte il özel idarelerinin tüzel kişilikleri kaldırılmıştır. Aşağıdaki illerimizden hangisi bu kapsamda değerlendirilir?",
      "secenekler": ["Çorum", "Samsun", "Kastamonu", "Sivas", "Amasya"],
      "cevap": "B",
      "aciklama": "Samsun büyükşehir olduğu için il özel idaresi kaldırılmıştır (6360 sayılı Kanun)."
    },
    {
      "id": "ID_U03_0030",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi idari vesayete örnektir?",
      "secenekler": ["Bakan – Bakan yardımcısı", "Vali – Kaymakam", "İl Emniyet Müdürü – İlçe Emniyet Müdürü", "Millî Savunma Bakanlığı – MKE", "Bakan – Vali"],
      "cevap": "D",
      "aciklama": "MKE ayrı tüzel kişiliği olan bir kuruluştur; bakanlık ile ilişkisi vesayet ilişkisidir."
    },
    {
      "id": "ID_U03_0031",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi idari vesayetin özelliklerinden değildir?",
      "secenekler": ["Farklı tüzel kişilik için uygulanır.", "İstisnai ve yumuşak bir yetkidir.", "Hem hukuka uygunluk hem yerindelik denetimi içerir.", "Emir talimat yoktur.", "İdari yargıya gidilebilir."],
      "cevap": "C",
      "aciklama": "İdari vesayet kural olarak kanunda gösterilen hallerde hukuka uygunluk denetimidir."
    },
    {
      "id": "ID_U03_0032",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi mahalli idare unsurlarından değildir?",
      "secenekler": ["İl özel idaresi", "Belediye", "Büyükşehir belediyesi", "Bölgesel kuruluşlar", "Köy idaresi"],
      "cevap": "D",
      "aciklama": "Bölgesel kuruluşlar merkezi idareye bağlıdır; mahalli idare değildir."
    },
    {
      "id": "ID_U03_0033",
      "unite": 3,
      "zorluk": "orta",
      "soru": "5393 sayılı Belediye Kanunu'na göre belediyenin taşınır ve taşınmaz mallarını sevk ve idare etme yetkisi kime aittir?",
      "secenekler": ["Kaymakam", "Vali", "Belediye başkanı", "İl genel meclisi", "İl encümeni"],
      "cevap": "C",
      "aciklama": "5393 m.38: Belediyenin mallarını idare etmek belediye başkanının görevidir."
    },
    {
      "id": "ID_U03_0034",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Büyükşehir belediye başkanına karşı soruşturma izni vermeye yetkili merci aşağıdakilerden hangisidir?",
      "secenekler": ["Vali", "Cumhurbaşkanı", "İl genel meclisi", "İçişleri Bakanı", "Danıştay"],
      "cevap": "D",
      "aciklama": "4483 m.3: Büyükşehir ve il belediye başkanları için soruşturma izni İçişleri Bakanınca verilir."
    },
    {
      "id": "ID_U03_0035",
      "unite": 3,
      "zorluk": "orta",
      "soru": "1- İl encümenine başkanlık etmek\n2- İl özel idaresinin taşınır ve taşınmaz mallarını idare etmek\n3- İl özel idaresinin gelir ve alacaklarını takip ve tahsil etmek\n4- Yetkili organların kararını almak şartıyla sözleşme yapmak\nYukarıdaki görevler aşağıdakilerden hangisine aittir?",
      "secenekler": ["Vali", "İl genel meclisi", "İl encümeni", "Belediye başkanı", "Genel sekreter"],
      "cevap": "A",
      "aciklama": "5302 m.30: Bu görevler il özel idaresinin başı olan valiye aittir."
    },
    {
      "id": "ID_U03_0036",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi muhtarın köye ait işlerindendir?",
      "secenekler": ["Hükümet emirlerini köyde duyurmak", "Kanun ve diğer mevzuatla kendine verilen görevleri yerine getirmek", "Köyde dirlik ve düzenliği korumak", "İhtiyar meclisi ile görüştükten sonra köylüyü işe çağırmak", "Köyde yaşayanların doğum, ölüm, evlenme ve boşanma işlemlerini nüfus idaresine bildirmek"],
      "cevap": "D",
      "aciklama": "442 sayılı Köy Kanunu m.36: Köylüyü işe çağırmak muhtarın köye ait (yerel) görevidir; diğerleri devlete ait işlerdir."
    },
    {
      "id": "ID_U03_0037",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi muhtarın devlete ait işlerindendir?",
      "secenekler": ["Köy Kanununda köylünün isteğine bırakılan işlerin yapılabilmesi için köylülere öğüt vermek", "İhtiyar meclisi kararı ile köy işlerine harcanacak parayı toplamak", "Köy işlerine harcanacak parayı topladıktan sonra harcanması için emir vermek", "Hükümet emirlerini köyde duyurmak", "İhtiyar meclisini toplantıya çağırmak"],
      "cevap": "D",
      "aciklama": "442 m.37: Hükümet emirlerini duyurmak muhtarın devlete ait görevidir."
    },
    {
      "id": "ID_U03_0038",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi kamu kurumu niteliğindeki meslek kuruluşlarının özelliklerinden biri değildir?",
      "secenekler": ["Kamu tüzel kişiliğine sahiptir.", "Kanun veya yönetmelikle kurulur.", "Mesleki faaliyetleri kolaylaştırır.", "Mesleğe mensup olanların müşterek ihtiyaçlarını karşılar.", "Meslek disiplini ve ahlakını korumak maksadı ile kurulmuştur."],
      "cevap": "B",
      "aciklama": "Anayasa m.135: Kamu kurumu niteliğindeki meslek kuruluşları yalnızca kanunla kurulur."
    },
    {
      "id": "ID_U03_0039",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi yerinden yönetimin yararlarından biri değildir?",
      "secenekler": ["Yerel ihtiyaç ve taleplere uygun ve daha duyarlı yanıtların üretilmesini sağlar.", "Mali denetimin yapılmasında zorluklar vardır.", "Yerel yöneticilerin daha duyarlı olmasını sağlar.", "Bürokrasi azalır.", "Kırtasiyecilik azalır."],
      "cevap": "B",
      "aciklama": "Mali denetimin zorlaşması yerinden yönetimin bir sakıncasıdır."
    },
    {
      "id": "ID_U03_0040",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Vesayet ile hiyerarşik denetimi ayıran ölçüt aşağıdakilerden hangisidir?",
      "secenekler": ["Gerçek kişilik", "Tüzel kişilik", "Yetkili bir merci olması", "Merkezi bir yapının olması", "Demokrasi"],
      "cevap": "B",
      "aciklama": "Hiyerarşi aynı tüzel kişilik içinde, idari vesayet farklı tüzel kişiler arasında uygulanır."
    },
    {
      "id": "ID_U03_0041",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Merkezi idarenin yerinden yönetim kuruluşları üzerindeki denetim yetkisine ne ad verilir?",
      "secenekler": ["Hiyerarşi", "Yerinden yönetim", "Yetki devri", "İdari vesayet", "İmza devri"],
      "cevap": "D",
      "aciklama": "Anayasa m.127: İdari vesayet."
    },
    {
      "id": "ID_U03_0042",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Yerel yönetim (local government) kavramı dünyada ilk kez hangi ülke tarafından kullanılmıştır?",
      "secenekler": ["Türkiye", "Fransa", "İtalya", "İngiltere", "ABD"],
      "cevap": "D",
      "aciklama": "\"Local government\" kavramı İngiltere'de ortaya çıkmıştır."
    },
    {
      "id": "ID_U03_0043",
      "unite": 3,
      "zorluk": "orta",
      "soru": "İhtiyar heyetine üye olabilmek için ilgili köyde en az kaç ay ikamet etme şartı vardır?",
      "secenekler": ["3 ay", "6 ay", "1 yıl", "5 yıl", "10 yıl"],
      "cevap": "B",
      "aciklama": "Köy muhtarı ve ihtiyar heyeti üyesi seçilebilmek için seçimden önce en az altı ay o köyde oturmak gerekir."
    },
    {
      "id": "ID_U03_0044",
      "unite": 3,
      "zorluk": "orta",
      "soru": "İl, belediye veya köy halkının mahalli müşterek ihtiyaçlarını karşılamak üzere kuruluş esasları kanunla belirtilen ve karar organları gene kanunda gösterilen seçmenler tarafından seçilerek oluşturulan kamu tüzel kişilerine ne ad verilir?",
      "secenekler": ["Merkezi idare", "Mahalli idare", "Bölgesel idare", "İl özel idaresi", "Belediye"],
      "cevap": "B",
      "aciklama": "Anayasa m.127'deki mahalli idare tanımıdır."
    },
    {
      "id": "ID_U03_0045",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Belediye başkanının görevden alınması hususunda son karar mercii aşağıdakilerden hangisidir?",
      "secenekler": ["Yargıtay", "Anayasa Mahkemesi", "Bölge idare mahkemesi", "Danıştay", "Uyuşmazlık Mahkemesi"],
      "cevap": "D",
      "aciklama": "Anayasa m.127: Mahalli idarelerin seçilmiş organlarının organlık sıfatını kaybetmesine ilişkin denetim Danıştay kararıyla olur."
    },
    {
      "id": "ID_U03_0046",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Bir yerleşim yerinin belediye olabilmesi için gereken nüfus sayısı aşağıdakilerden hangisidir?",
      "secenekler": ["1000", "3000", "5000", "7000", "9000"],
      "cevap": "C",
      "aciklama": "5393 m.4: Belediye kurulabilmesi için nüfusun 5.000 ve üzerinde olması gerekir."
    },
    {
      "id": "ID_U03_0047",
      "unite": 3,
      "zorluk": "orta",
      "soru": "I. Soru\nII. Genel görüşme\nIII. Faaliyet raporunu değerlendirme\nYukarıdakilerden hangileri il genel meclisinin bilgi edinme ve denetim yollarındandır?",
      "secenekler": ["Yalnız I", "Yalnız II", "Yalnız III", "I – II", "I – II – III"],
      "cevap": "E",
      "aciklama": "5302 m.17–18: İl genel meclisi soru, genel görüşme ve faaliyet raporu yoluyla denetim yapar."
    },
    {
      "id": "ID_U03_0048",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Kesinleşen belediye meclisi kararlarının özetleri en geç kaç gün içinde halka duyurulur?",
      "secenekler": ["7", "6", "5", "4", "3"],
      "cevap": "A",
      "aciklama": "5393 m.23: Kesinleşen meclis kararlarının özetleri yedi gün içinde halka duyurulur."
    },
    {
      "id": "ID_U03_0049",
      "unite": 3,
      "zorluk": "orta",
      "soru": "\"Özel teknik bilgi ve uzmanlık gerektiren teknik nitelikteki bazı kamu hizmetlerinin merkezi idare teşkilatı dışında oluşturulan tüzel kişiliğe sahip kuruluşlarca yürütülmesine ... denir.\" Yukarıda tanımı verilen ifade aşağıdakilerden hangisidir?",
      "secenekler": ["Mahalli yönetim", "Yer yönünden yerinden yönetim", "Hizmet yönünden yerinden yönetim", "Merkezi yönetim", "Mülki yönetim"],
      "cevap": "C",
      "aciklama": "Üniversiteler, TRT, KİT'ler gibi kuruluşlar hizmet yönünden yerinden yönetim örnekleridir."
    },
    {
      "id": "ID_U03_0050",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Kaç tane büyükşehir olan ilimiz vardır?",
      "secenekler": ["21", "25", "27", "30", "32"],
      "cevap": "D",
      "aciklama": "Türkiye'de 30 büyükşehir belediyesi vardır (6360 sayılı Kanun ve sonrası)."
    },
    {
      "id": "ID_U03_0051",
      "unite": 3,
      "zorluk": "orta",
      "soru": "\"Mahalli nitelikteki bazı kamu hizmetlerinin merkezi idareden alınarak mahalli tüzel kişiler tarafından yapılması ve merkeziyetçiliğin bertaraf edilmesine ... denir.\" Yukarıdaki tanım aşağıdakilerden hangisidir?",
      "secenekler": ["Yetki devri", "Merkeziyetçilik", "Hizmet yönünden kuruluş", "Cumhuriyetçilik", "Adem-i merkeziyet"],
      "cevap": "E",
      "aciklama": "Adem-i merkeziyet (yerinden yönetim) tanımıdır."
    },
    {
      "id": "ID_U03_0052",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi hizmet yönünden yerinden yönetim kuruluşlarından değildir?",
      "secenekler": ["KİT'ler", "Üniversiteler", "İl idaresi", "Bağımsız idari otoriteler", "Meslek kuruluşları"],
      "cevap": "C",
      "aciklama": "İl idaresi merkezi idarenin taşra teşkilatıdır."
    },
    {
      "id": "ID_U03_0053",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Büyükşehir Belediyesi Kanunu'na göre büyükşehir belediyelerinin sınırı neresidir?",
      "secenekler": ["İl özel idaresi sınırları", "İl sınırları", "İl mülki sınırları", "Belediye sınırları", "İlçe sınırları"],
      "cevap": "C",
      "aciklama": "6360 sayılı Kanunla büyükşehir belediyelerinin sınırları il mülki sınırları olmuştur."
    },
    {
      "id": "ID_U03_0054",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Büyükşehir belediyeleri aşağıdaki yasal düzenlemelerden hangisi ile kurulur ve kaldırılır?",
      "secenekler": ["İdari işler", "Kanun", "Yargı içtihatları", "Danıştay kararı", "Yönerge"],
      "cevap": "B",
      "aciklama": "5216 m.4: Büyükşehir belediyeleri kanunla kurulur."
    },
    {
      "id": "ID_U03_0055",
      "unite": 3,
      "zorluk": "orta",
      "soru": "İl özel idaresinin karar organı olan il genel meclisinin başkanı kimdir?",
      "secenekler": ["Vali", "İl genel meclisinin kendi üyeleri arasından seçtiği kişi", "Valinin seçtiği bir il genel meclisi üyesi", "İl özel idaresi genel sekreteri", "Valinin atadığı vali yardımcısı"],
      "cevap": "B",
      "aciklama": "5302 m.12: İl genel meclisi kendi üyeleri arasından başkanını seçer (eski kanunda vali başkanlık ederdi)."
    },
    {
      "id": "ID_U03_0056",
      "unite": 3,
      "zorluk": "orta",
      "soru": "\"Belediye tüzel kişiliğinin başı ve belediyenin yürütme organıdır. Belediye sınırları içinde yaşayan seçmenler tarafından beş yıllık bir süre için tek dereceli seçimle ve çoğunluk sistemi ile seçilmektedir. Bir siyasi partiden aday olabileceği gibi bağımsız da aday olabilir.\" Yukarıda tanımı yapılan kişi ya da kurul aşağıdakilerden hangisidir?",
      "secenekler": ["Belediye başkanı", "Belediye meclisi", "Belediye encümeni", "Kaymakam", "Vali"],
      "cevap": "A",
      "aciklama": "5393 m.37: Belediye başkanı tanımıdır."
    },
    {
      "id": "ID_U03_0057",
      "unite": 3,
      "zorluk": "zor",
      "soru": "Belediye başkanı hukuka aykırı gördüğü meclis kararlarını gerekçesini de belirterek yeniden görüşülmek üzere kaç gün içinde meclise iade edebilir?",
      "secenekler": ["1", "3", "5", "7", "15"],
      "cevap": "C",
      "aciklama": "5393 m.23: Belediye başkanı hukuka aykırı gördüğü kararları beş gün içinde meclise iade edebilir; yedi gün ise kesinleşen kararların halka duyurulma süresidir."
    },
    {
      "id": "ID_U03_0058",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Mahalli idareler aşağıdakilerden hangisinin izniyle kendi aralarında birlik kurabilir?",
      "secenekler": ["İçişleri Bakanı", "Cumhurbaşkanı", "Yargıtay Başkanı", "Büyükşehir Belediye Başkanı", "Millî Savunma Bakanı"],
      "cevap": "B",
      "aciklama": "Anayasa m.127: Mahalli idareler Cumhurbaşkanının izniyle birlik kurabilir."
    },
    {
      "id": "ID_U03_0059",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Köyün kurulması için nüfus sınırı aşağıdakilerden hangisinde doğru olarak verilmiştir?",
      "secenekler": ["150 – 1500", "150 – 2000", "200 – 1500", "200 – 2000", "250 – 2500"],
      "cevap": "B",
      "aciklama": "442 sayılı Köy Kanunu m.1: Nüfusu 2000'den aşağı yurtlar köy sayılır; yeni köy kurulması için en az 150 nüfus aranır."
    },
    {
      "id": "ID_U03_0060",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi yerinden idarenin özelliklerinden değildir?",
      "secenekler": ["Yerinden idare kuruluşları özerk bir statüye sahiptir; ancak özerklik bağımsızlık demek değildir.", "Yerinden idarenin kamu tüzel kişilikleri vardır.", "Yönetim organları atama ile işbaşına gelir.", "Yerinden idarenin ayrı mal varlığı ve özerk bir bütçesi vardır.", "Merkezi idarenin vesayet denetimine tabidirler."],
      "cevap": "C",
      "aciklama": "Yer yönünden yerinden yönetim kuruluşlarının organları seçimle işbaşına gelir."
    },
    {
      "id": "ID_U03_0061",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Belediyeler tarafından çeşitli hizmetler için verilecek olan imtiyazlar en fazla kaç yıl için verilebilir?",
      "secenekler": ["49", "20", "15", "51", "50"],
      "cevap": "A",
      "aciklama": "5393 m.15: Belediye imtiyazları en fazla 49 yıl süreyle verilebilir."
    },
    {
      "id": "ID_U03_0062",
      "unite": 3,
      "zorluk": "zor",
      "soru": "\"Merkezden ve yerinden idareler arasındaki siyasi, idari ve mali ilişkilerin sağlıklı ve tutarlı bir şekilde yürütülmesi gerekir. Ülkemizde merkezden ve yerinden idare birimleri arasındaki bütünlük ve koordinasyon ... yolu ile sağlanmaktadır. ..., merkezi idarenin yerinden idare kuruluşları üzerindeki kanunla öngörülen istisnai ve sınırlı bir denetim türüdür.\" Yukarıdaki boşluklara aşağıdakilerden hangisi gelmelidir?",
      "secenekler": ["Vesayet denetimi", "Yargı denetimi", "Cumhurbaşkanlığı denetimi", "Cumhurbaşkanı Yardımcılığı denetimi", "Hiyerarşik denetim"],
      "cevap": "A",
      "aciklama": "Anayasa m.123, 127: İdari vesayet."
    },
    {
      "id": "ID_U03_0063",
      "unite": 3,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi yer yönünden (mahalli) idare kuruluşlarından değildir?",
      "secenekler": ["İl özel idaresi", "Belediyeler", "Üniversiteler", "Köy idaresi", "İl genel meclisi"],
      "cevap": "C",
      "aciklama": "Üniversiteler hizmet yönünden yerinden yönetim kuruluşlarıdır."
    },
    {
      "id": "ID_U03_0064",
      "unite": 3,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi idari vesayetin özelliklerinden değildir?",
      "secenekler": ["İdari vesayet istisnai nitelikte bir yetkidir.", "Vesayet kanunla verilir.", "Vesayet kanun ve yönetmelikle verilir.", "Vesayet dar yoruma tabi tutulur.", "Vesayet, emir ve talimat verme yetkisi ile düzeltme yetkisini kural olarak içermez."],
      "cevap": "C",
      "aciklama": "Anayasa m.127: İdari vesayet yetkisi ancak kanunla verilir."
    },
    // ============================================================
    // ÜNİTE 4 – İDARI İŞLEMLER
    // ============================================================
    {
      "id": "ID_U04_0001",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "İdarenin yalnız idare hukukuna tabi olan, tek taraflı üstünlüğü ve kamu ayrıcalıklarına sahip devlet veya kamu tüzel kişisi olarak tesis ettiği işlem ve kararlara ne ad verilir?",
      "secenekler": ["İptal", "İdari işlem", "Masumiyet karinesi", "İdari ceza", "Yetki genişliği"],
      "cevap": "B",
      "aciklama": "İdari işlem, idarenin kamu gücüne dayanarak tek yanlı iradesiyle tesis ettiği, hukuki sonuç doğuran işlemdir."
    },
    {
      "id": "ID_U04_0002",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "Bireysel idari işlemler idarenin tek taraflı irade beyanıyla ortaya çıkar ve bu işlemlerin devreye girmesi için ayrıca bireyler tarafından onaylanmalarına ihtiyaç olmaması idari işlemlerin hangi özelliğidir?",
      "secenekler": ["İdari kurum ve kuruluşlar tarafından tesis edilme", "İdare hukukunun kural, usul ve esaslarına uygun olarak olma", "Tek yanlı olma", "Re'sen icra", "Yazılılık"],
      "cevap": "C",
      "aciklama": "İdari işlemler idarenin tek yanlı iradesiyle doğar; ilgilinin kabulü gerekmez."
    },
    {
      "id": "ID_U04_0003",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "İdarenin hukuk devletinin de vazgeçilmez şartı ve doğal sonucu olarak tüm işlem ve eylemlerinin, aksi yargı kararınca sabit oluncaya dek hukuka uygun olduğu varsayılır. Buna hukuk âleminde ne ad verilir?",
      "secenekler": ["Hukukilik karinesi", "Yerindelik karinesi", "Yerinden yönetim", "Merkezden yönetim", "Yasama kısıntısı"],
      "cevap": "A",
      "aciklama": "Hukuka uygunluk (hukukilik) karinesi gereği idari işlemler iptal edilinceye kadar geçerli sayılır."
    },
    {
      "id": "ID_U04_0004",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "Memur atama işlemi nasıl bir işlemdir?",
      "secenekler": ["Yükümlendirici işlem", "Şart işlem", "Bağlı işlem", "Karma işlem", "Geniş işlem"],
      "cevap": "B",
      "aciklama": "Şart işlem, kişiyi önceden belirlenmiş genel ve nesnel bir hukuki statüye sokan işlemdir (memur ataması gibi)."
    },
    {
      "id": "ID_U04_0005",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "Daha önceden doğmuş bir hukuki durumu tespit eden işleme ne ad verilir?",
      "secenekler": ["Yükümlendirici işlem", "Şart işlem", "Bağlı işlem", "Belirleyici işlem", "Belirsiz işlem"],
      "cevap": "D",
      "aciklama": "Belirleyici (tespit edici) işlem, var olan bir hukuki durumu saptar."
    },
    {
      "id": "ID_U04_0006",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi idari işlemlerin özelliklerinden biri değildir?",
      "secenekler": ["Çift yanlı olma", "İcrailik", "Re'sen icra", "Hukuka uygunluk karinesi", "Yargısal denetim"],
      "cevap": "A",
      "aciklama": "İdari işlemler tek yanlıdır; çift yanlı olanlar idari sözleşmelerdir."
    },
    {
      "id": "ID_U04_0007",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "İlgiliden belli bir davranışta bulunmayı, bulunmamayı veya belli bir davranışa göz yummayı isteyen işlemlere ne ad verilir?",
      "secenekler": ["Basit işlem", "Karma işlem", "Yükümlendirici işlem", "Kolektif işlem", "Şart işlem"],
      "cevap": "C",
      "aciklama": "Yükümlendirici işlemler kişiye yapma, yapmama veya katlanma yükümlülüğü getirir."
    },
    {
      "id": "ID_U04_0008",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "İdari işlemler kaç unsurdan meydana gelir?",
      "secenekler": ["9", "6", "5", "4", "3"],
      "cevap": "C",
      "aciklama": "İdari işlemin beş unsuru: yetki, şekil, sebep, konu ve amaçtır."
    },
    {
      "id": "ID_U04_0009",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "Memura verilen uyarma cezası nasıl bir işlemdir?",
      "secenekler": ["Karma işlem", "Zincirleme işlem", "Basit işlem", "Yapıcı işlem", "Şart işlem"],
      "cevap": "C",
      "aciklama": "Tek bir makamın iradesiyle oluşan işlem basit işlemdir."
    },
    {
      "id": "ID_U04_0010",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "İdarenin bir yetkisinin belli bir yönde kullanılmasının yasada açık ve emredici bir biçimde düzenlenmesi aşağıdakilerden hangisidir?",
      "secenekler": ["Bağlı yetki", "Yetki devri", "Yetkide paralellik", "Vekâlet", "İmza devri"],
      "cevap": "A",
      "aciklama": "Bağlı yetkide idarenin takdir serbestisi yoktur; kanunun öngördüğü işlemi yapmak zorundadır."
    },
    {
      "id": "ID_U04_0011",
      "unite": 4,
      "zorluk": "orta",
      "soru": "İşlemi yapmaya yetkili kamu görevlisinin işlemi yaptığı sırada sarhoş ya da hipnoz altında olması, yani temyiz kudretinden ve hukuki işlem yapma ehliyetinden yoksun olması idari işlemin hangi unsuru bakımından sakattır?",
      "secenekler": ["Şekil", "Sebep", "Konu", "Yetki (kişi yönünden)", "Amaç"],
      "cevap": "D",
      "aciklama": "Ehliyetsizlik, kişi bakımından yetki unsurunu sakatlar."
    },
    {
      "id": "ID_U04_0012",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Ambulans ekibinin ulaşmasının zaman alacağı gerekçesiyle olay yerinde yerde baygın halde bulunan kazazedeye kendi imkânlarıyla müdahale eden kişinin bu eyleminin idarenin eylemi olarak kabul edilmesi aşağıdakilerden hangisi ile açıklanabilir?",
      "secenekler": ["Vekâlet", "Fiili memur", "Cari işlerin yürütülmesi", "Yetkilerin paralelliği", "Yetki devri"],
      "cevap": "B",
      "aciklama": "Fiili memur (görünüşte memur) teorisi: Olağanüstü durumlarda yetkisiz kişinin kamu hizmeti gereği yaptığı işlem geçerli sayılabilir."
    },
    {
      "id": "ID_U04_0013",
      "unite": 4,
      "zorluk": "orta",
      "soru": "İçişleri Bakanlığında çalışan ve kadrosu aynı bakanlıkta bulunan bir memurun Sağlık Bakanlığı tarafından re'sen emekli edilmesi işleminde ne tür bir hukuki sakatlık vardır?",
      "secenekler": ["Fonksiyon gaspı", "Yetki tecavüzü", "Ağır ve bariz yetki gaspı", "Yetki gaspı", "Ağır ve bariz yetki tecavüzü"],
      "cevap": "E",
      "aciklama": "Başka bir idarenin görev alanına giren işlemi yapmak ağır ve bariz yetki tecavüzüdür (yoklukla sonuçlanabilir)."
    },
    {
      "id": "ID_U04_0014",
      "unite": 4,
      "zorluk": "zor",
      "soru": "İdari kararların idare hukuku esas ve ilkeleri çerçevesinde taşıması gereken bir takım özellikler vardır. Buna göre aşağıdakilerden hangisi idari işlemin özelliklerinden biri değildir?",
      "secenekler": ["İdari kurum ve kuruluşlar tarafından tesis edilme", "İcrailik", "Çift taraflı olma", "Yazılılık kuralı", "Gerekçe kuralı"],
      "cevap": "C",
      "aciklama": "İdari işlemler tek yanlıdır."
    },
    {
      "id": "ID_U04_0015",
      "unite": 4,
      "zorluk": "zor",
      "soru": "I. Re'sen icra\nII. Hukuka uygunluk karinesi\nIII. Yargısal muaflık\nYukarıdakilerden hangisi veya hangileri idari işlemlerin özelliklerindendir?",
      "secenekler": ["Yalnız I", "Yalnız II", "Yalnız III", "II – III", "I – II"],
      "cevap": "E",
      "aciklama": "Anayasa m.125: İdarenin her türlü eylem ve işlemine karşı yargı yolu açıktır; yargısal muaflık özellik değildir."
    },
    {
      "id": "ID_U04_0016",
      "unite": 4,
      "zorluk": "zor",
      "soru": "\"Bir işlemin maddi anlamda uygulanabilir, yürütülebilir, etkili bir işlem olması ve hukuk düzenini etkileyen sonuçlar doğurması, o işlem hakkında idari yargıda iptal davası açabilmenin ön koşulu olması.\" Bu bilgiler idari işlemin hangi özelliğine vurgu yapmaktadır?",
      "secenekler": ["Tek yanlı olma", "İcrailik", "Yazılılık kuralı", "Gerekçe kuralı", "Hukuka uygunluk karinesi"],
      "cevap": "B",
      "aciklama": "Yalnızca kesin ve yürütülmesi gereken (icrai) işlemler iptal davasına konu olabilir."
    },
    {
      "id": "ID_U04_0017",
      "unite": 4,
      "zorluk": "zor",
      "soru": "İlgili kişinin herhangi bir şeyi yapma veya yapmaması doğrultusunda olumlu (emir) ya da olumsuz (yasak) bir davranışta bulunmasını zorlayan işlemlere ne ad verilir?",
      "secenekler": ["Emredici işlem", "Basit işlem", "Karma işlem", "Kolektif işlem", "İsteğe bağlı işlem"],
      "cevap": "A",
      "aciklama": "Emredici (yükümlendirici) işlem tanımıdır."
    },
    {
      "id": "ID_U04_0018",
      "unite": 4,
      "zorluk": "zor",
      "soru": "I. Yetki\nII. Şekil\nIII. Sebep\nIV. Konu\nV. Kişi\nYukarıdakilerden hangisi veya hangileri idari işlemlerin unsurlarından birisi değildir?",
      "secenekler": ["Yalnız V", "Yalnız IV", "I – II", "I – II – III", "I – II – III – IV"],
      "cevap": "A",
      "aciklama": "İdari işlemin unsurları yetki, şekil, sebep, konu ve amaçtır."
    },
    {
      "id": "ID_U04_0019",
      "unite": 4,
      "zorluk": "zor",
      "soru": "Astın üst yerine karar alması aşağıdakilerden hangisinin örneğini meydana getirir?",
      "secenekler": ["Kişi bakımından yetkisizlik", "Amaç bakımından yetkisizlik", "Konu yönünden yetkisizlik", "Yetki gaspı", "Fonksiyon gaspı"],
      "cevap": "C",
      "aciklama": "Aynı idaredeki farklı makamların görev alanına giren konuda işlem yapmak konu bakımından yetkisizliktir."
    },
    {
      "id": "ID_U04_0020",
      "unite": 4,
      "zorluk": "zor",
      "soru": "İçişleri Bakanının yargı organının (YSK) görevi kapsamında olan belediye başkanının seçilme yeterliliğinin olmadığı gerekçesiyle görevine son verme işlemi ya da seçilip görev yapan bir belediye başkanını görevini kötüye kullandığı gerekçesiyle görevini sonlandırması aşağıdakilerden hangisinin güzel bir örneğini oluşturur?",
      "secenekler": ["Yetki gaspının", "Yetki saptırmasının", "Kişi yönünden yetkisizlik halinin", "Zaman yönünden yetkisizlik halinin", "Fonksiyon gaspının"],
      "cevap": "E",
      "aciklama": "İdarenin yargı veya yasama fonksiyonuna giren bir işlem yapması fonksiyon gaspıdır; işlem yok hükmündedir."
    },
    {
      "id": "ID_U04_0021",
      "unite": 4,
      "zorluk": "zor",
      "soru": "I. Yazılılık\nII. Savunma\nIII. Toplantı ve karar yeter sayıları\nIV. Hazırlayıcı işlemlerin yapılması\nYukarıdaki öncüllerden hangisi idari işlemlerle ilgili önemli şekil şartlarındandır?",
      "secenekler": ["Yalnız I – IV", "Yalnız II – III", "Yalnız IV", "I – II – III – IV", "Yalnız IV"],
      "cevap": "D",
      "aciklama": "Sayılanların tamamı idari işlemin şekil unsuruna ilişkin şartlardır."
    },
    {
      "id": "ID_U04_0022",
      "unite": 4,
      "zorluk": "zor",
      "soru": "İdarenin, hiçbir biçimde hukukla bağdaşmayan, asla yapamayacağı, yetkilerinin tamamıyla dışında tesis ettiği açık, bariz ve ağır biçimde hukuka aykırı sakat işlemlerinin yaptırımı aşağıdakilerden hangisidir?",
      "secenekler": ["Yokluk", "Mutlak butlan", "Nisbi butlan", "İptal", "Geri alma"],
      "cevap": "A",
      "aciklama": "Yok hükmündeki işlemler hiç doğmamış sayılır; iptal davası süresine bağlı değildir."
    },
    {
      "id": "ID_U04_0023",
      "unite": 4,
      "zorluk": "zor",
      "soru": "İdare, hukuka aykırı sakat işlemlerini (kural olarak) kaç gün içinde geri alabilir?",
      "secenekler": ["15", "30", "45", "60", "90"],
      "cevap": "D",
      "aciklama": "İdare, işlemlerini idari dava açma süresi olan 60 gün içinde geri alabilir (2577 m.7)."
    },
    {
      "id": "ID_U04_0024",
      "unite": 4,
      "zorluk": "zor",
      "soru": "Geri alma işleminin nitelik ve özellikleri ile ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Hukuka uygun kararlar hiçbir zaman geri alma işlemine konu olamazlar.", "Sakat bir idari işlemin iptali idari yargı yeri tarafından, geri alınması ise bizzat işlemi tesis eden idare tarafından yapılır.", "Geri alma işlemi hem geçmişe hem geleceğe etkili sonuçlar doğurur.", "Hiyerarşik olarak üstte olan makam astının işlemlerini geri alabilir.", "Geri alma işleminin sebep unsuru, idarenin önceden yapmış olduğu hukuka aykırı sakat işlemidir."],
      "cevap": "C",
      "aciklama": "Kitabın anahtarına göre geri alma işlemi geçmişe etkilidir; hukuka uygun işlemlerin ileriye etkili olarak ortadan kaldırılması \"kaldırma\"dır."
    },
    {
      "id": "ID_U04_0025",
      "unite": 4,
      "zorluk": "zor",
      "soru": "Bir kaymakamın başka bir ilçenin sınırlarına giren bir konuyla ilgili işlem yapması ya da belediye meclisinin belediyenin yetkili olduğu imar sınırları dışındaki bir yerle ilgili bir imar planı kabul etmesi idari işlem unsurları bakımından hangisine örnek oluşturur?",
      "secenekler": ["Fonksiyon gaspı", "Yer yönünden yetkisizlik", "Zaman yönünden yetkisizlik", "Kişi bakımından yetkisizlik", "Konu bakımından yetkisizlik"],
      "cevap": "B",
      "aciklama": "Makamın yetki alanı dışındaki bir yerde işlem yapması yer bakımından yetkisizliktir."
    },
    {
      "id": "ID_U04_0026",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Trafik polisinin görevi esnasındaki sözlü işlemi aşağıdakilerden hangisine örnektir?",
      "secenekler": ["Zımni (örtülü) işlem", "Sarih (açık) işlem", "Karma işlem", "Kolektif işlem", "Basit işlem"],
      "cevap": "B",
      "aciklama": "Sözlü veya işaretle yapılan ve iradenin açıkça ortaya konduğu işlemler sarih (açık) işlemdir. (Kitapta şık harfleri hatalı basılmıştır.)"
    },
    {
      "id": "ID_U04_0027",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Yönetmelik çıkarmak maddi bakımdan nasıl bir işlemdir?",
      "secenekler": ["Genel düzenleyici", "Birel", "Sarih", "Zımni", "Basit"],
      "cevap": "A",
      "aciklama": "Yönetmelikler genel, soyut ve sürekli kurallar koyan düzenleyici işlemlerdir."
    },
    {
      "id": "ID_U04_0028",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Belediye ve il genel meclisi kararları hangi işlem türüne örnektir?",
      "secenekler": ["Basit işlem", "Karma işlem", "Sarih işlem", "Yararlandırıcı işlem", "Kolektif işlem"],
      "cevap": "E",
      "aciklama": "Kurul halinde çalışan organların çoğunlukla aldıkları kararlar kolektif işlemdir."
    },
    {
      "id": "ID_U04_0029",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Belediyenin sokak isimlerini seçme konusunda nasıl bir yetkisi vardır?",
      "secenekler": ["Bağlı yetki", "Takdir yetkisi", "Sarih yetki", "Ağır yetki", "Bariz yetki"],
      "cevap": "B",
      "aciklama": "İdare, kanunun çizdiği sınırlar içinde birden fazla seçenek arasından tercih yapabiliyorsa takdir yetkisi vardır."
    },
    {
      "id": "ID_U04_0030",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Kanuna göre kumar oynanan iş yerleri kapatılır. Bir yerde kumar oynanması fiili nedeniyle iş yeri kapatılması idari işlemin hangi unsurunun gereğidir?",
      "secenekler": ["Yetki", "Konu", "Şekil", "Usul", "Sebep"],
      "cevap": "E",
      "aciklama": "İşlemi yapmaya iten hukuki ve fiili durum sebep unsurudur."
    },
    {
      "id": "ID_U04_0031",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi idari işlemin özelliklerinden değildir?",
      "secenekler": ["Sözlülük kuralı", "Yargısal denetim", "İdari kurum ve kuruluşlar tarafından tesis edilme", "Gerekçe kuralı", "İcrai olma"],
      "cevap": "A",
      "aciklama": "İdari işlemlerde kural yazılılıktır."
    },
    {
      "id": "ID_U04_0032",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Kaymakamın boşanma kararı vermesi ne tür bir sakatlık meydana getirir?",
      "secenekler": ["Ağır ve bariz yetki tecavüzü", "Yetki gaspı", "Fiili yol", "Yetki tecavüzü", "Fonksiyon gaspı"],
      "cevap": "E",
      "aciklama": "Boşanma kararı yargı fonksiyonuna girer; idari makamın bunu yapması fonksiyon gaspıdır."
    },
    {
      "id": "ID_U04_0033",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Fonksiyon gaspının yaptırımı aşağıdakilerden hangisidir?",
      "secenekler": ["İptal", "Yokluk", "Geri alma", "Değiştirme", "Butlan"],
      "cevap": "B",
      "aciklama": "Fonksiyon gaspıyla tesis edilen işlem yok hükmündedir."
    },
    {
      "id": "ID_U04_0034",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Bir belediyenin bir başka belediye sınırları içinde bulunan taşınmazı kamulaştırması durumunda ortaya çıkan sakatlık türü aşağıdakilerden hangisidir?",
      "secenekler": ["Fonksiyon gaspı", "Yetki gaspı", "Yetki tecavüzü", "Ağır ve bariz yetki tecavüzü", "Görev gaspı"],
      "cevap": "C",
      "aciklama": "İdarenin başka bir idarenin yer bakımından yetki alanına girmesi yetki tecavüzüdür."
    },
    {
      "id": "ID_U04_0035",
      "unite": 4,
      "zorluk": "orta",
      "soru": "İdari işbölümü esaslarına tamamıyla aykırı bir biçimde alınan kararlarda ağır ve bariz yetki tecavüzünün bulunduğu durumlarda ortaya çıkan sakatlık aşağıdakilerden hangisidir?",
      "secenekler": ["Fonksiyon gaspı", "Yetki gaspı", "Yetki tecavüzü", "Ağır ve bariz yetki tecavüzü", "Her yönden yetkisizlik"],
      "cevap": "D",
      "aciklama": "İşbölümünün ağır ve açık biçimde ihlal edildiği hallerde işlem yokluk derecesinde sakattır."
    },
    {
      "id": "ID_U04_0036",
      "unite": 4,
      "zorluk": "orta",
      "soru": "İdare belli bir yeri almak için kamulaştırma kararı yerine bedel düşürmek için yıkma kararı verirse ortaya çıkan hukuka aykırılık aşağıdakilerden hangisidir?",
      "secenekler": ["Ağır ve bariz yetki tecavüzü", "Fonksiyon gaspı", "Yetki saptırması", "Usul saptırması", "Yetki tecavüzü"],
      "cevap": "D",
      "aciklama": "Kanunun öngördüğü usul yerine başka bir usule başvurarak amaca ulaşmak usul saptırmasıdır."
    },
    {
      "id": "ID_U04_0037",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Belirli bir hukuki durumu doğrudan kaldıran ya da değiştiren işlemler ne tür işlemlerdir?",
      "secenekler": ["Belirleyici işlem", "Şart işlem", "Subjektif (öznel) işlem", "Yapıcı işlem", "Zımni işlem"],
      "cevap": "D",
      "aciklama": "Yapıcı (kurucu) işlemler hukuki durum yaratır, değiştirir veya kaldırır."
    },
    {
      "id": "ID_U04_0038",
      "unite": 4,
      "zorluk": "orta",
      "soru": "İstisnai olarak idarenin susmayla da irade açıklayabilmesi ne tür işlemlerdir?",
      "secenekler": ["Zımni işlem", "Yapıcı işlem", "Şart işlem", "Belirleyici işlem", "Subjektif (öznel) işlem"],
      "cevap": "A",
      "aciklama": "Zımni işlem (örtülü ret) idarenin sessiz kalmasıyla oluşur; İYUK m.10'a göre süre 30 gündür."
    },
    {
      "id": "ID_U04_0039",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi bir yetkisizlik türü değildir?",
      "secenekler": ["Konu yönünden yetkisizlik", "Kişi yönünden yetkisizlik", "Yer yönünden yetkisizlik", "Oran yönünden yetkisizlik", "Zaman yönünden yetkisizlik"],
      "cevap": "D",
      "aciklama": "Yetkisizlik konu, kişi, yer ve zaman bakımından olur."
    },
    {
      "id": "ID_U04_0040",
      "unite": 4,
      "zorluk": "orta",
      "soru": "İdareye tamamen yabancı veya idare adına irade açıklama yetkisi olmayan birinin yaptığı işlem hangi açıdan yetkisizlik olarak değerlendirilir?",
      "secenekler": ["Kişi yönünden yetkisizlik", "Konu yönünden yetkisizlik", "Yer yönünden yetkisizlik", "Zaman yönünden yetkisizlik", "Yetkisizlik yoktur."],
      "cevap": "A",
      "aciklama": "İdare adına işlem yapmaya yetkili olmayan kişinin işlemi kişi bakımından yetkisizliktir (ağır hallerde yokluk)."
    },
    {
      "id": "ID_U04_0041",
      "unite": 4,
      "zorluk": "orta",
      "soru": "- İdarenin yasama veya yargı görev alanına giren bir konuda işlem yapmasıdır.\n- Görev (fonksiyon) gaspı söz konusudur.\nYukarıda hangi tür yetkisizlikten söz edilebilir?",
      "secenekler": ["Kişi yönünden yetkisizlik", "Konu yönünden yetkisizlik", "Zaman yönünden yetkisizlik", "Yer yönünden yetkisizlik", "Ölçü yönünden yetkisizlik"],
      "cevap": "B",
      "aciklama": "Kitabın anahtarına göre fonksiyon gaspı konu bakımından yetkisizliğin en ağır biçimidir."
    },
    {
      "id": "ID_U04_0042",
      "unite": 4,
      "zorluk": "orta",
      "soru": "İdare işlemlerini başka bir makamın kararına ihtiyaç duymaksızın icra edilmesidir. İdari işlemin özelliklerinden hangisiyle ilgilidir?",
      "secenekler": ["Re'sen icra", "Hukuka uygunluk karinesi", "Yargısal denetim", "Yazılılık kuralı", "Gerekçe kuralı"],
      "cevap": "A",
      "aciklama": "Re'sen icra: İdare kararlarını yargı kararı almadan kendisi uygulayabilir."
    },
    {
      "id": "ID_U04_0043",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "Kanunla düzenlenmeyen bir konuda yönetmelik çıkarılması hangi açıdan hukuka aykırı bir işlemdir?",
      "secenekler": ["Yetki gaspı", "Yetki tecavüzü", "Yetki saptırması", "Ağır ve bariz yetki tecavüzü", "Fonksiyon gaspı"],
      "cevap": "E",
      "aciklama": "Yönetmelikler kanunlara dayanmalıdır; kanun olmadan asli düzenleme yapmak yasama alanına müdahaledir."
    },
    {
      "id": "ID_U04_0044",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "Covid-19 salgını döneminde İl Emniyet Müdürlüğünde polis memuru olarak görev yapmaktayken istifa eden A, il sınırları içinde ikamet eden vatandaş B'ye sokağa çıkma yasağına uymadığı gerekçesiyle Kabahatler Kanununa istinaden idari para cezası uygulamıştır. A'nın yaptığı bu işlem idare hukukunda sakatlık türleri açısından aşağıdakilerden hangisi ile ifade edilir?",
      "secenekler": ["Fonksiyon gaspı", "Yetki gaspı", "Yetki saptırması", "Usul saptırması", "Ağır ve bariz yetki tecavüzü"],
      "cevap": "B",
      "aciklama": "İdare adına işlem yapma yetkisi bulunmayan kişinin (görevden ayrılmış memur) işlemi yetki gaspıdır; işlem yok hükmündedir."
    },
    {
      "id": "ID_U04_0045",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Covid-19 salgını ile mücadele kapsamında kuaför salonlarının faaliyetleri geçici olarak durdurulmuştur. Uygulama esnasında Z kuaförünün yasağa uymadığı tespit edilmiş, ancak görevli A yaptırım uygulaması gerekirken durumu görmezden gelmiştir. Daha sonra A ile dükkân sahibinin yakın arkadaş olduğu ve aralarında kişisel çıkar bulunduğu anlaşılmıştır. Görevli A'nın bu durumu idari işlemin hangi unsuru bakımından hukuka aykırıdır?",
      "secenekler": ["Yetki", "Konu", "Sebep", "Amaç", "Şekil"],
      "cevap": "D",
      "aciklama": "Kamu yararı dışında kişisel çıkarla hareket etmek amaç unsurunda sakatlıktır (yetki saptırması)."
    },
    {
      "id": "ID_U04_0046",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Sokağa çıkma yasağı idari işleminin bölgede bozulan düzeni tesis etmesi aşağıdakilerden hangisi ile bağlantılıdır?",
      "secenekler": ["Amaç", "Konu", "Sebep", "Yetki", "Şekil"],
      "cevap": "A",
      "aciklama": "İşlemin ulaşmak istediği sonuç (kamu düzeninin sağlanması) amaç unsurudur."
    },
    {
      "id": "ID_U04_0047",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Rekabet Kurulunun Bahçelievler Odun Ekmek Fırını A.Ş.'ye para cezası vermesi ne tür bir idari işlemdir?",
      "secenekler": ["Karma işlem", "Kolektif işlem", "Basit işlem", "Müşterek işlem", "Zincir işlem"],
      "cevap": "B",
      "aciklama": "Kurul halinde çalışan organların aldığı kararlar kolektif işlemdir."
    },
    {
      "id": "ID_U04_0048",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Kemal Sunal'ın \"Deli Deli Küpeli\" filminde kaymakam olmadığı halde kaymakamlık yapması ve idari kararlar alması ... ın güzel bir örneğini oluşturur. Boşluğa aşağıdakilerden hangisi gelmelidir?",
      "secenekler": ["Fonksiyon gaspı", "Yetki gaspı", "Ağır ve bariz yetki tecavüzü", "Yetki tecavüzü", "Yetki saptırması"],
      "cevap": "B",
      "aciklama": "İdareyle ilgisi olmayan kişinin idare adına işlem yapması yetki gaspıdır."
    },
    {
      "id": "ID_U04_0049",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Ölmüş bir kişinin emekliye sevk edilmesi hangi açıdan hukuka aykırıdır?",
      "secenekler": ["Yetki", "Şekil", "Sebep", "Konu", "Amaç"],
      "cevap": "D",
      "aciklama": "İşlemin konusu hukuken ve fiilen imkânsız olduğundan konu unsuru sakattır."
    },
    {
      "id": "ID_U04_0050",
      "unite": 4,
      "zorluk": "orta",
      "soru": "\"Bir idari makamın yetkilerini kanunla belirlenen amaçları dışında siyasi, kişisel ve çıkar amaçlı başka bir amaçla kullanmasıdır.\" Diğer bir ifadeyle idari işlemin amaç unsuru bakımından hukuka aykırı olması aşağıdaki kavramlardan hangisinin açıklamasıdır?",
      "secenekler": ["Bağlı yetki", "Takdir yetkisi", "Yetki tecavüzü", "Yetki saptırması", "Usul saptırması"],
      "cevap": "D",
      "aciklama": "Yetki saptırması amaç unsurundaki sakatlıktır."
    },
    {
      "id": "ID_U04_0051",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Birden fazla makam ya da organın aynı yönde, aynı konuda ve aynı amaca yönelik olarak iradelerini belirli bir sıra takip ederek açıklamalarına dayanan işleme ne ad verilir?",
      "secenekler": ["Basit işlem", "Karma işlem", "Şart işlem", "Kolektif işlem", "İsteğe bağlı işlem"],
      "cevap": "B",
      "aciklama": "Karma (birleşik) işlemde farklı organların iradeleri belirli bir sırayla birleşir (ör. müşterek kararname)."
    },
    {
      "id": "ID_U04_0052",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi idari işlemlerin yazılılık kuralının istisnasını oluşturur?",
      "secenekler": ["Karma işlem", "Basit işlem", "Sarih işlem", "Zımni ret", "Yükümlendirici işlem"],
      "cevap": "D",
      "aciklama": "Zımni ret idarenin sessiz kalmasıyla oluşur; yazılı bir işlem yoktur."
    },
    {
      "id": "ID_U04_0053",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi idari işlemin unsurlarından biri değildir?",
      "secenekler": ["Yetki", "Şekil", "Sebep", "Konu", "İdari denetim"],
      "cevap": "E",
      "aciklama": "İdari işlemin unsurları yetki, şekil, sebep, konu ve amaçtır."
    },
    {
      "id": "ID_U04_0054",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Kamu görevlisi sıfatı taşımayan bir kişinin yaptığı işlemlerin üçüncü kişilerin mağdur olmaması için belli durum ve koşullarda, yetkili kamu görevlisinin yapmış olduğu işlemler gibi geçerli kabul edilmesine ne ad verilir?",
      "secenekler": ["Görünüşte memur", "Yetkili memur", "Hazine teorisi", "Fiili memur", "Fahri görevli memur"],
      "cevap": "D",
      "aciklama": "Fiili memur teorisi: Olağanüstü durumlarda kamu görevlisi olmayan kişinin hizmetin gereği yaptığı işlemler geçerli sayılabilir."
    },
    {
      "id": "ID_U04_0055",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Henüz atanmamış, görevden alındıktan sonra işlem yapmaya devam etmiş ya da hukuken sakat bir atamayla işbaşına gelmiş, dolayısıyla yasal olarak değil görünüşte memur olan kişinin yaptığı işlemler hangi teoriye göre geçerli kabul edilir?",
      "secenekler": ["Görünüşte memur teorisi", "Yetkili memur", "Hazine teorisi", "Fiili memur teorisi", "Mali teori"],
      "cevap": "A",
      "aciklama": "Görünüşte memur teorisi, iyi niyetli üçüncü kişileri korumak için bu işlemleri geçerli sayar."
    },
    {
      "id": "ID_U04_0056",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Aşağıdaki ifadelerden hangisi yanlıştır?",
      "secenekler": ["Yetki devri kanunun açıkça verdiği yetkiye dayanılarak yazılı olarak yapılır.", "İmza devri makama yapılır.", "İmza devri kısmidir; bütün imza yetkileri devredilemez.", "Yetki devrinde sorumluluk (kural olarak) yetkiyi devralana geçer.", "Yetki devrinde hiyerarşik asta devir yapılabilir."],
      "cevap": "B",
      "aciklama": "İmza devri kişiye (şahsa) yapılır; yetki devri ise makama yapılır."
    },
    {
      "id": "ID_U04_0057",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Kanun koyucu bazı durumlarda idari işlemin dayanacağı hukuki ya da fiili durumu açıkça tanımlayıp sınırlandırmıştır. Bu durumda idarenin kullanacağı yetkiye ne ad verilir?",
      "secenekler": ["Takdir yetkisi", "Sarih yetki", "Bağlı yetki", "Re'sen yetki", "İcrailik"],
      "cevap": "C",
      "aciklama": "Bağlı yetkide idarenin seçme serbestisi yoktur."
    },
    {
      "id": "ID_U04_0058",
      "unite": 4,
      "zorluk": "orta",
      "soru": "İdare adına irade beyanında bulunamayacak, idareye tamamen yabancı bir kişinin idare adına işlem tesis etmesine ne ad verilir ve yaptırımı nedir?",
      "secenekler": ["Fonksiyon gaspı / yokluk", "Yetki tecavüzü / iptal", "Yetki gaspı / yokluk", "Yetki saptırması / iptal", "Ağır ve bariz yetki tecavüzü / yokluk"],
      "cevap": "C",
      "aciklama": "İdareye yabancı kişinin işlemi yetki gaspıdır ve yok hükmündedir."
    },
    {
      "id": "ID_U04_0059",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Tek bir idari makamın ya da görevlinin irade açıklamasıyla sonuç doğuran işlem aşağıdakilerden hangisidir?",
      "secenekler": ["Basit işlem", "Karma işlem", "Kolektif işlem", "Yararlandırıcı işlem", "İsteğe bağlı işlem"],
      "cevap": "A",
      "aciklama": "Basit işlem tek bir iradeyle oluşur."
    },
    {
      "id": "ID_U04_0060",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Aşağıdaki ifadelerden hangisi yanlıştır?",
      "secenekler": ["Ceza hukukunda cezalar idari makamlar tarafından verilir.", "Ceza hukukunda cezalar toplum düzeninin ve kanun hükümlerinin ihlalinden dolayı verilir.", "İdari cezalar idari usul izlenerek verilir.", "Ceza hukukunda cezalar kişi hürriyetlerini kısıtlayabilir.", "İdari cezalar idari düzen ve disipline aykırılıktan dolayı verilir."],
      "cevap": "A",
      "aciklama": "Ceza hukukundaki cezalar mahkemelerce verilir; idari makamlar ancak idari yaptırım uygulayabilir."
    },
    {
      "id": "ID_U04_0061",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Sokağa çıkma yasağının bulunduğu yerde kamu güvenliğini tehdit eden bir durumun vuku bulması bu idari işlemin hangi unsurunu oluşturur?",
      "secenekler": ["Amaç", "Sebep", "Konu", "Yetki", "Şekil"],
      "cevap": "B",
      "aciklama": "İşlemin yapılmasını gerektiren hukuki ve fiili durum sebep unsurudur."
    },
    {
      "id": "ID_U04_0062",
      "unite": 4,
      "zorluk": "orta",
      "soru": "İdari işlemin muhatabı olan kişinin ölmesi idari işlemin hüküm ve sonuçlarını sona erdirmesi durumu aşağıdakilerden hangisinin açıklamasına girer?",
      "secenekler": ["İptal", "İnfisahi şartın gerçekleşmesi", "Sürenin dolması", "Maddi sebepler", "İlga"],
      "cevap": "D",
      "aciklama": "İşlemin konusunun veya muhatabının ortadan kalkması maddi sebeplerle sona ermedir."
    },
    {
      "id": "ID_U04_0063",
      "unite": 4,
      "zorluk": "zor",
      "soru": "Cumhurbaşkanlığı Kararnamesi ve Cumhurbaşkanının diğer re'sen yaptığı işlemler hangi işlem türüne örnektir?",
      "secenekler": ["Basit işlem", "Karma işlem", "Kolektif işlem", "Yararlandırıcı işlem", "İsteğe bağlı işlem"],
      "cevap": "A",
      "aciklama": "Tek bir makamın iradesiyle oluştukları için basit işlemdir (2017'den sonra karşı imza kuralı yoktur)."
    },
    {
      "id": "ID_U04_0064",
      "unite": 4,
      "zorluk": "zor",
      "soru": "İdare hukukunda yetkilerin ortak özellikleri aşağıdakilerden hangisinde yanlış verilmiştir?",
      "secenekler": ["İdare hukukunda yetkiler yönerge ve yönetmelikten kaynaklanır.", "İdare hukukunda yetkiler istisnai niteliktedir.", "İdare hukukunda yetkiler dar yoruma tabi tutulur.", "İdare hukukunda yetkiler kamu düzenine ilişkindir.", "İdare hukukunda yetki sakatlıkları sonradan düzeltilemez."],
      "cevap": "A",
      "aciklama": "İdarenin yetkileri anayasa ve kanundan kaynaklanır; yönerge ve yönetmelik yetki kaynağı değildir."
    },
    {
      "id": "ID_U04_0065",
      "unite": 4,
      "zorluk": "zor",
      "soru": "\"İdari makamı işgal eden kişi veya kişilerin kamu tüzel kişisi adına hukuki işlemler yapabilme ehliyetidir.\" İfadesi idari işlemin unsurlarından hangisinin açıklamasıdır?",
      "secenekler": ["Yetki", "Şekil", "Usul", "Sebep", "Konu"],
      "cevap": "A",
      "aciklama": "Yetki unsurunun tanımıdır."
    },
    {
      "id": "ID_U04_0066",
      "unite": 4,
      "zorluk": "zor",
      "soru": "Yetki devri ve imza devrinin hukuka uygun olarak yapılabilmesi için aşağıdaki şartlardan hangisi yanlış verilmiştir?",
      "secenekler": ["Yetki devri ve imza devri kanunla öngörülmüş olmalıdır.", "Yetki devri ve imza devri genel olmalıdır.", "Yetki devri ve imza devri yeterli açıklıkta yapılmalıdır.", "Yetki devri ve imza devri yazılı şekilde yapılmalıdır.", "Yetki devri ve imza devri ilgililerine duyurulmalıdır."],
      "cevap": "B",
      "aciklama": "Devir kısmi olmalıdır; makamın tüm yetkileri devredilemez."
    },
    {
      "id": "ID_U04_0067",
      "unite": 4,
      "zorluk": "zor",
      "soru": "Bir idari makam hangi konuda karar almaya yetkili ise sadece o konuda karar alabilmesi hangi yetkinin açıklamasıdır?",
      "secenekler": ["Kişi bakımından yetki", "Konu bakımından yetki", "Yer bakımından yetki", "Zaman bakımından yetki", "Şekil açısından yetki"],
      "cevap": "B",
      "aciklama": "Konu bakımından yetki tanımıdır."
    },
    {
      "id": "ID_U04_0068",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Birden çok makamın ya da görevlinin aynı amaca yönelik olarak aynı anda ve aynı yönde iradelerini açıklamasıyla oluşan işlem türü aşağıdakilerden hangisidir?",
      "secenekler": ["Basit işlem", "Karma işlem", "Şart işlem", "Kolektif işlem", "İsteğe bağlı işlem"],
      "cevap": "D",
      "aciklama": "Kurul halinde aynı anda açıklanan iradelerle oluşan işlem kolektif işlemdir; karma işlemde iradeler sırayla birleşir."
    },
    {
      "id": "ID_U04_0069",
      "unite": 4,
      "zorluk": "orta",
      "soru": "İdare hukukunda şekil unsuru ile ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Şekil, iradeyi açıklamak için kullanılan araca, kalıba denir.", "İdari işlemler kural olarak \"yazılı şekle\" tabidir.", "Kâğıt üzerine yazılı bir idari işlem metni daha sonra elektronik ortama aktarılabilir.", "Yazılı şekil kuralının bazı istisnaları yoktur.", "Yazılı şekil kuralının bazı istisnaları vardır."],
      "cevap": "D",
      "aciklama": "Zımni ret ve sözlü kolluk işlemleri gibi yazılılık kuralının istisnaları vardır."
    },
    {
      "id": "ID_U04_0070",
      "unite": 4,
      "zorluk": "orta",
      "soru": "İdare hukukunda aşağıdakilerden hangisi usul unsurunun yararlarından değildir?",
      "secenekler": ["Usul kurallarının idari kararların doğruluğunu sağlayıcı bir işlevi vardır.", "Usul kuralları idareyi objektif davranmaya iter.", "Usul kuralları bireylere hukuki güvenlik sağlar.", "Usul kurallarının idare edilenlerin haklarını koruyucu bir işlevi vardır.", "Usul kuralları idarenin serbest hareket etmesine olumlu bir şekilde katkıda bulunur."],
      "cevap": "E",
      "aciklama": "Usul kuralları idarenin serbestçe hareket etmesini sınırlar."
    },
    {
      "id": "ID_U04_0071",
      "unite": 4,
      "zorluk": "orta",
      "soru": "İdare belli bir konuda karar almak ile almamak arasında seçim yapabiliyorsa veya aynı konuda içerik bakımından değişik en az iki karar alabiliyorsa aşağıdakilerden hangisi var demektir?",
      "secenekler": ["Bağlı yetki", "Takdir yetkisi", "Yetki tecavüzü", "Yetki saptırması", "Bariz yetki"],
      "cevap": "B",
      "aciklama": "Takdir yetkisinin tanımıdır."
    },
    {
      "id": "ID_U04_0072",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Aşağıdaki idari işlemleri sona erdiren sebeplerden hangisi idarenin iradesine bağlıdır?",
      "secenekler": ["İptal", "Sürenin dolması", "Geri alma", "İnfisahi şart", "Maddi sebepler"],
      "cevap": "C",
      "aciklama": "Geri alma idarenin kendi iradesiyle işlemi ortadan kaldırmasıdır; iptal yargı kararıdır."
    },
    {
      "id": "ID_U04_0073",
      "unite": 4,
      "zorluk": "orta",
      "soru": "2017 Anayasa değişikliğinden önce kanun hükmünde kararname çıkarma yetkisi münhasıran Bakanlar Kuruluna aitti; ancak bunun için TBMM'nin bir yetki kanunuyla yetkilendirmesi gerekiyordu. Burada düzenleyici işlemlerin hangi unsurundan söz edilmektedir?",
      "secenekler": ["Yetki", "Konu", "Şekil", "Usul", "Denetim"],
      "cevap": "A",
      "aciklama": "Bir işlemi yapabilme ehliyeti yetki unsurudur. KHK ve Bakanlar Kurulu 2017 değişikliğiyle kaldırılmış, yerini Cumhurbaşkanlığı kararnamesi almıştır."
    },
    {
      "id": "ID_U04_0074",
      "unite": 4,
      "zorluk": "orta",
      "soru": "İmza devriyle ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Kişiye yapılır.", "Sorumluluk imzayı devredendir.", "Hiyerarşik asta devredilebilir.", "Sürekli değildir; kişi değişince sona erer.", "Bütün yetkiler devredilebilir, kısmi değildir."],
      "cevap": "E",
      "aciklama": "İmza devri kısmidir; makamın bütün imza yetkileri devredilemez."
    },
    {
      "id": "ID_U04_0075",
      "unite": 4,
      "zorluk": "orta",
      "soru": "I. Yokluk\nII. Mutlak butlan\nIII. Nispi butlan\nYukarıdakilerden hangisi özel hukuk işlemlerinde hukuka aykırılık hallerindendir?",
      "secenekler": ["Yalnız II", "II – III", "I – III", "I – II – III", "Yalnız I"],
      "cevap": "D",
      "aciklama": "Özel hukukta sakat işlemler yokluk, mutlak butlan ve nispi butlan olarak sınıflandırılır."
    },
    {
      "id": "ID_U04_0076",
      "unite": 4,
      "zorluk": "orta",
      "soru": "I. Yok hükmünde olan işlemler\nII. Hile, aldatma ve gerçek dışı beyan sonucu yapılan işlemler\nIII. Hukuka uygun işlemler\nYukarıdaki işlemlerden hangisi her zaman geri alınabilir?",
      "secenekler": ["Yalnız I", "Yalnız II", "Yalnız III", "I – II", "I – III"],
      "cevap": "D",
      "aciklama": "Yok hükmündeki ve hile ile elde edilen işlemlerde süre sınırı olmaksızın geri alma mümkündür."
    },
    {
      "id": "ID_U04_0077",
      "unite": 4,
      "zorluk": "orta",
      "soru": "I. Geri alma\nII. Kaldırma\nIII. Değiştirme\nIV. Fiili nedenlerle sona erme\nV. Sürenin dolması\nYukarıdaki idari işlemlerden hangisi idarenin iradesi ile sona erer?",
      "secenekler": ["IV – V", "I – II", "I – III", "I – II – III", "Yalnız II"],
      "cevap": "D",
      "aciklama": "Geri alma, kaldırma ve değiştirme idarenin iradesiyle; diğerleri iradesinden bağımsız sona erme halleridir."
    },
    {
      "id": "ID_U04_0078",
      "unite": 4,
      "zorluk": "zor",
      "soru": "\"Olağanüstü haller saklı kalmak üzere, Anayasanın ikinci kısmının birinci ve ikinci bölümlerinde yer alan temel haklar, kişi hakları ve ödevleri ile dördüncü bölümünde yer alan siyasi haklar ve ödevler Cumhurbaşkanlığı kararnamesi ile düzenlenemez.\" Şeklinde sınırlama getirilmiştir. Bu sınırlama düzenleyici işlemlerin hangi unsuruna aittir?",
      "secenekler": ["Yetki", "Konu", "Şekil", "Usul", "Denetim"],
      "cevap": "B",
      "aciklama": "Anayasa m.104/17: CBK'nın düzenleyebileceği konular sınırlandırılmıştır; bu konu unsuruna ilişkin bir sınırdır."
    },
    {
      "id": "ID_U04_0079",
      "unite": 4,
      "zorluk": "zor",
      "soru": "Ruhsat, izin, ehliyet verme hangi işlem türüne örnek teşkil eder?",
      "secenekler": ["Basit işlem", "Karma işlem", "Şart işlem", "Kolektif işlem", "İsteğe bağlı işlem"],
      "cevap": "C",
      "aciklama": "Kitabın anahtarına göre ruhsat ve ehliyet kişiyi önceden belirlenmiş genel bir statüye soktuğu için şart işlem örneğidir."
    },
    // ============================================================
    // ÜNİTE 5 – İDARENIN SÖZLEŞMELERI
    // ============================================================
    {
      "id": "ID_U05_0001",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi idari sözleşme türlerinden biri değildir?",
      "secenekler": ["Mali iltizam", "Kamu istikraz", "Orman işletme", "Maden işletme", "Ruhsat usulü"],
      "cevap": "E",
      "aciklama": "Ruhsat (izin) tek yanlı bir idari işlemdir, sözleşme değildir."
    },
    {
      "id": "ID_U05_0002",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "Devletin hazine bonosu veya tahvil karşılığı vatandaşına borçlanması hangi sözleşme türlerinden biridir?",
      "secenekler": ["Mali iltizam", "Kamu istikraz", "Orman işletme", "Maden işletme", "Ruhsat usulü"],
      "cevap": "B",
      "aciklama": "Kamu istikraz sözleşmesi, devletin borçlanmasına ilişkin idari sözleşmedir."
    },
    {
      "id": "ID_U05_0003",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "Sadece değerli madenlerin işletilmesini değil, kaplıca ve benzeri yerlerin de işletilmesini kapsayan sözleşme türü aşağıdakilerden hangisidir?",
      "secenekler": ["Mali iltizam", "Kamu istikraz", "Orman işletme", "Maden işletme", "Ruhsat usulü"],
      "cevap": "D",
      "aciklama": "Maden işletme sözleşmeleri kaplıca ve benzeri doğal kaynakların işletilmesini de kapsar."
    },
    {
      "id": "ID_U05_0004",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "İmtiyaz sözleşmeleri ile ilgili Danıştay ne kadar süre içinde görüş bildirir?",
      "secenekler": ["1 ay", "2 ay", "3 ay", "4 ay", "5 ay"],
      "cevap": "B",
      "aciklama": "Anayasa m.155: Danıştay imtiyaz şartlaşma ve sözleşmeleri hakkında iki ay içinde düşüncesini bildirir."
    },
    {
      "id": "ID_U05_0005",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "I. Fiyat belirleme\nII. Sözleşmeyi değiştirme\nIII. Fesih\nIV. Lehe kamulaştırma talep edebilme\nİmtiyaz sözleşmelerinde yukarıdakilerden hangisi veya hangileri idarenin yetkilerinden biri değildir?",
      "secenekler": ["I – II", "I – II – III", "Yalnız III", "I – III", "Yalnız IV"],
      "cevap": "E",
      "aciklama": "Lehe kamulaştırma talep edebilme imtiyaz sahibinin hakkıdır; fiyat belirleme, tek taraflı değiştirme ve fesih idarenin ayrıcalıklarıdır."
    },
    {
      "id": "ID_U05_0006",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "İdarenin özel hukuk kurallarına göre yaptığı sözleşmelere ne ad verilir?",
      "secenekler": ["İdari sözleşme", "Hizmet sözleşmeleri", "Özel hukuk sözleşmeleri", "Kamu hukuku sözleşmeleri", "Toplu sözleşme"],
      "cevap": "C",
      "aciklama": "Bu sözleşmelerden doğan uyuşmazlıklar adli yargıda görülür."
    },
    {
      "id": "ID_U05_0007",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi Devlet İhale Kanunu ihale usullerinden biri değildir?",
      "secenekler": ["Kapalı teklif usulü", "Belli istekliler arasında kapalı teklif usulü", "Açık teklif usulü", "Pazarlık usulü", "İmtiyaz usulü"],
      "cevap": "E",
      "aciklama": "2886 m.35: Kapalı teklif, belli istekliler arasında kapalı teklif, açık teklif, pazarlık ve yarışma usulleri vardır."
    },
    {
      "id": "ID_U05_0008",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi 4734 sayılı Kamu İhale Kanununda öngörülen ihale usullerinden biri değildir?",
      "secenekler": ["Kapalı teklif usulü", "Açık ihale usulü", "Belli istekliler arasında ihale usulü", "Pazarlık usulü", "Doğrudan temin"],
      "cevap": "A",
      "aciklama": "4734 m.18: Açık ihale, belli istekliler arasında ihale ve pazarlık usulü ile doğrudan temin ve tasarım yarışmasıdır."
    },
    {
      "id": "ID_U05_0009",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "Devlete gelir getiren işler ve eylemler hangi kanuna tabidir?",
      "secenekler": ["Kamu İhale Kanunu", "KİT", "DMK", "Devlet İhale Kanunu", "Toplu Sözleşme Kanunu"],
      "cevap": "D",
      "aciklama": "2886 sayılı Devlet İhale Kanunu satım, kiralama gibi gelir getirici işleri düzenler; 4734 ise mal-hizmet alımlarını düzenler."
    },
    {
      "id": "ID_U05_0010",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "Devlet İhale Kanununa göre aşağıdakilerin hangisi diğerlerine göre farklıdır?",
      "secenekler": ["Açık teklif usulü", "Kapalı teklif usulü", "Doğrudan temin", "Yarışma usulü", "İstekliler arasında kapalı teklif usulü"],
      "cevap": "C",
      "aciklama": "Doğrudan temin 2886'da değil, 4734 sayılı Kamu İhale Kanununda yer alan bir usuldür."
    },
    {
      "id": "ID_U05_0011",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "Aşağıdaki kavramlardan hangisi ihaleye ilişkin bir kavram değildir?",
      "secenekler": ["İlan", "Zafiyet", "Geçici teminat", "Yaklaşık maliyet", "Şartname"],
      "cevap": "B",
      "aciklama": "İlan, geçici teminat, yaklaşık maliyet ve şartname ihale kavramlarıdır."
    },
    {
      "id": "ID_U05_0012",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "Aşağıdaki kavramlardan hangisi ihaleye ilişkin bir kavram değildir?",
      "secenekler": ["Sözleşme", "Kabul", "Hak ediş", "Döner sermaye", "İş teslimi"],
      "cevap": "D",
      "aciklama": "Döner sermaye bir finansman yöntemidir; ihale süreciyle ilgili değildir."
    },
    {
      "id": "ID_U05_0013",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "İdarenin, imtiyaz sahibinin hiçbir kusuru olmasa dahi hizmet ve kamu yararının gerektirmesi nedeniyle sözleşmeyi tek yanlı feshettiğinde imtiyaz sahibinin zararını tamamen gidermek zorunda olmasına ne ad verilir?",
      "secenekler": ["Fesih", "Habilitasyon", "Rachat (geri satın alma)", "Fedakârlık", "Kusur"],
      "cevap": "C",
      "aciklama": "Rachat, idarenin imtiyazı tazminat karşılığında süresinden önce geri almasıdır."
    },
    {
      "id": "ID_U05_0014",
      "unite": 5,
      "zorluk": "zor",
      "soru": "Deniz kıyıları ile göllerde ve hazinenin dalyanlarından yararlanılması amacıyla yapılan sözleşme aşağıdakilerden hangisidir?",
      "secenekler": ["Mali iltizam sözleşmesi", "İstikraz sözleşmeleri", "İdari hizmet sözleşmesi", "Orman işletme sözleşmeleri", "Kıyılar sözleşmesi"],
      "cevap": "A",
      "aciklama": "Kitabın sınıflandırmasına göre dalyan ve benzeri devlet gelirlerinin işletilmesi mali iltizam sözleşmesiyle yapılır."
    },
    {
      "id": "ID_U05_0015",
      "unite": 5,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi Devlet İhale Kanunu ve Kamu İhale Kanunu'nda uygulanan ortak ilkelerden biri değildir?",
      "secenekler": ["Aleniyet", "Rekabet ilkesi", "Uygun bedel", "Sözleşmecide belli bir yeterliliğin aranması", "Pazarlık"],
      "cevap": "E",
      "aciklama": "Aleniyet, rekabet, uygun bedel ve yeterlilik temel ilkelerdir; pazarlık bir ihale usulüdür, ilke değildir."
    },
    {
      "id": "ID_U05_0016",
      "unite": 5,
      "zorluk": "zor",
      "soru": "Tekliflerin yazılı olarak hazırlanıp bir zarfa konulup kapatıldıktan sonra zarf üzerinde isteklinin adının, soyadının ve tebligata esas açık adresinin yazılması suretiyle yapılan ihale usulü aşağıdakilerden hangisidir?",
      "secenekler": ["Açık teklif usulü", "Doğrudan temin usulü", "Yarışma usulü", "Kapalı teklif usulü", "Tasarım yarışmaları"],
      "cevap": "D",
      "aciklama": "2886 m.37: Kapalı teklif usulü."
    },
    {
      "id": "ID_U05_0017",
      "unite": 5,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi Kamu İhale Kanunu'na tabi idarelerden biri değildir?",
      "secenekler": ["Fonlar", "Sosyal güvenlik kuruluşları", "İl özel idareleri", "Tasarruf Mevduatı Sigorta Fonu", "Belediyeler"],
      "cevap": "D",
      "aciklama": "Kitabın anahtarına göre TMSF, kendi mevzuatına tabi olarak 4734 kapsamı dışında tutulmuştur."
    },
    {
      "id": "ID_U05_0018",
      "unite": 5,
      "zorluk": "zor",
      "soru": "Kamu borçlanmaları ve özel borçlanmalara ilişkin aşağıdakilerden hangisi doğru bir ifade değildir?",
      "secenekler": ["Kamu borçları mutlaka kanunla ya da kanunun açıkça verdiği yetkiye dayanılarak yapılır.", "Kamu borçlanmaları kamu yararı gözetilerek ve kamu hizmetinin yürütülmesi için söz konusudur.", "Kamu borçlarında geri ödeme süreleri özel borçlara göre daha kısadır.", "Kamu borçlarında idareye kamu gücünden yararlanılarak üstün yetki ve ayrıcalıklar tanınmaktadır.", "Ülkemizde devlet adına iç borçlanma yetkisi Hazine'ye aittir."],
      "cevap": "C",
      "aciklama": "Kamu borçlarının vadeleri genellikle özel borçlardan daha uzundur."
    },
    {
      "id": "ID_U05_0019",
      "unite": 5,
      "zorluk": "zor",
      "soru": "X inşaat şirketi yaptığı başvuruda mali dengenin yeniden tesisini hangi ilkeye göre talep etmelidir?",
      "secenekler": ["Müktesep hak", "Emprovizyon", "Sebepsiz zenginleşme", "Fait du prince (hükümdarın fiili)", "Fiili yol"],
      "cevap": "D",
      "aciklama": "İdarenin sözleşme dışı genel işlemleriyle yüklenicinin mali dengesinin bozulması \"fait du prince\" teorisine göre tazmin edilir."
    },
    {
      "id": "ID_U05_0020",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi idari sözleşme türlerinden değildir?",
      "secenekler": ["Mali iltizam", "Kamu istikraz", "Orman işletme", "Teknik şartname", "Maden işletme"],
      "cevap": "D",
      "aciklama": "Teknik şartname bir sözleşme eki belgedir; sözleşme türü değildir."
    },
    {
      "id": "ID_U05_0021",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi imtiyaz alanın yetkisidir?",
      "secenekler": ["Fiyat belirleme", "Sözleşmeyi değiştirme", "Emprevizyon isteminde bulunma", "İmtiyazcının mali dengesini bozmama", "Müeyyideler uygulayabilme"],
      "cevap": "C",
      "aciklama": "Öngörülemeyen haller (emprevizyon) nedeniyle mali dengenin bozulması halinde imtiyaz sahibi tazminat isteyebilir; diğerleri idarenin yetki ve yükümlülükleridir."
    },
    {
      "id": "ID_U05_0022",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi alım satım (ihale) sözleşmelerindeki ortak ilkelerden değildir?",
      "secenekler": ["Aleniyet", "Sözleşmeyi değiştirme", "Serbest rekabet", "En uygun bedel", "Sözleşmecide yeterlilik aranma"],
      "cevap": "B",
      "aciklama": "İhale mevzuatının ortak ilkeleri aleniyet, serbest rekabet, uygun bedel ve yeterliliktir."
    },
    {
      "id": "ID_U05_0023",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Kural olarak herkes kamu ihalelerine katılabilir. Ancak ihale işlerinde görevli olanların kendileri, 3. dereceye kadar hısımları, iş ortakları, hileli müflisler, terör örgütü suçlardan mahkûm olanların ihalelere katılması yasaktır. Yukarıdaki açıklama ihale sözleşmelerindeki ortak ilkelerin hangisine aittir?",
      "secenekler": ["Aleniyet", "Sözleşmeyi değiştirme", "Serbest rekabet", "Sözleşmecide yeterlilik aranması", "En uygun bedel"],
      "cevap": "C",
      "aciklama": "Kitabın anahtarına göre ihaleye katılma yasakları serbest rekabet ilkesinin (herkesin eşit katılımı) istisnalarıdır."
    },
    {
      "id": "ID_U05_0024",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Kural olarak ihalelerin ilana çıkması, ihale sözleşmelerindeki ortak ilkelerin hangisinin gereğidir?",
      "secenekler": ["Aleniyet", "Sözleşmeyi değiştirme", "En uygun bedel", "Sözleşmecide yeterlilik aranma", "Serbest rekabet"],
      "cevap": "A",
      "aciklama": "İhalelerin ilan edilmesi aleniyet (saydamlık) ilkesinin gereğidir."
    },
    {
      "id": "ID_U05_0025",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Kamu ihalelerine katılmak isteyenlerin gerekli yeterliliğe sahip olup olmadıklarının tespiti amacıyla referans istenmesi veya ön yeterlilik aşaması getirilmesi mümkündür. Bunun yanı sıra mali yeterliliğin sağlanması için yüzde üç oranında geçici teminat istenmesi de mümkündür. Yukarıdaki açıklama ihale sözleşmelerindeki ortak ilkelerin hangisine aittir?",
      "secenekler": ["Sözleşmeyi değiştirme", "Aleniyet", "En uygun bedel", "Serbest rekabet", "Sözleşmecide yeterlilik aranması"],
      "cevap": "E",
      "aciklama": "Ön yeterlilik, referans ve teminat yeterlilik ilkesinin gereğidir."
    },
    {
      "id": "ID_U05_0026",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi idari sözleşme türlerinden değildir?",
      "secenekler": ["Kamu istikraz", "Orman işletme", "Tarım işletme", "Maden işletme", "Kamu hizmeti imtiyaz"],
      "cevap": "C",
      "aciklama": "\"Tarım işletme\" adlı bir idari sözleşme türü yoktur."
    },
    {
      "id": "ID_U05_0027",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Devlet adına imtiyaz verme yetkisi hangi merciye aittir?",
      "secenekler": ["Cumhurbaşkanı", "İdari İşler Başkanı", "TBMM", "Danıştay", "Sayıştay"],
      "cevap": "A",
      "aciklama": "Kamu hizmeti imtiyazları ilgili kanunlar çerçevesinde Cumhurbaşkanı (2018 öncesi Bakanlar Kurulu) tarafından verilir; Danıştay sözleşme hakkında görüş bildirir."
    },
    {
      "id": "ID_U05_0028",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Kamu hizmeti imtiyaz sözleşmelerinde geçerli olan öngörülemezlik (emprevizyon) kuramı kamu hizmetine egemen olan ilkelerden hangisinin bir sonucudur?",
      "secenekler": ["Tarafsızlık", "Uyarlanma", "Süreklilik", "Eşitlik", "Meccanilik"],
      "cevap": "C",
      "aciklama": "Öngörülemeyen durumlarda imtiyaz sahibine yardım edilmesi hizmetin kesintisiz sürmesini (süreklilik) sağlamak içindir."
    },
    {
      "id": "ID_U05_0029",
      "unite": 5,
      "zorluk": "orta",
      "soru": "İdari sözleşmelerde hangi hukuk kuralları uygulanır?",
      "secenekler": ["Borçlar hukuku", "Medeni hukuk", "İdare hukuku", "Ticaret hukuku", "Ceza hukuku"],
      "cevap": "C",
      "aciklama": "İdari sözleşmeler idare hukukuna tabidir; uyuşmazlıklar idari yargıda görülür."
    },
    {
      "id": "ID_U05_0030",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Ülkemizde devlet adına iç borçlanma yetkisi hangi kuruma aittir?",
      "secenekler": ["İçişleri Bakanlığı", "Dışişleri Bakanlığı", "Hazine ve Maliye Bakanlığı", "Ticaret Bakanlığı", "Gençlik ve Spor Bakanlığı"],
      "cevap": "C",
      "aciklama": "4749 sayılı Kanun: Devlet adına iç ve dış borçlanma yetkisi Hazine ve Maliye Bakanlığına aittir."
    },
    {
      "id": "ID_U05_0031",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi idari sözleşme türlerinden biri değildir?",
      "secenekler": ["Mali iltizam sözleşmesi", "İstikraz sözleşmeleri", "İdari hizmet sözleşmeleri", "Kamu hizmeti imtiyaz sözleşmeleri", "Planlama ve koordinasyon sözleşmeleri"],
      "cevap": "E",
      "aciklama": "\"Planlama ve koordinasyon sözleşmesi\" adlı bir idari sözleşme türü yoktur."
    },
    {
      "id": "ID_U05_0032",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Kamu Başdenetçisi seçiminde ilk iki oylamada aranan çoğunluk nedir?",
      "secenekler": ["Toplantıya katılanların salt çoğunluğu", "Üye tamsayısının salt çoğunluğu", "Üye tamsayısının 3/5'i", "Üye tamsayısının 2/3'ü", "Üye tamsayısının 3/4'ü"],
      "cevap": "D",
      "aciklama": "Anayasa m.74: İlk iki oylamada üye tamsayısının üçte iki çoğunluğu aranır."
    },
    {
      "id": "ID_U05_0033",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Kamu İhale Kanunu'nun 22. maddesinde belirtilen hallerde ihtiyaçların ilan yapılmaksızın ve teminat alınmaksızın hangi usule başvurularak karşılanabilir?",
      "secenekler": ["Doğrudan temin usulü", "Pazarlık usulü", "Yarışma usulü", "Açık teklif usulü", "Kapalı teklif usulü"],
      "cevap": "A",
      "aciklama": "4734 m.22: Doğrudan temin usulü."
    },
    {
      "id": "ID_U05_0034",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Karayolları Genel Müdürlüğü ile özel bir şirket arasında otoyol yapımı, bakımı ve işletilmesi konusunda görevlendirilmesine ilişkin olarak yapılan sözleşmeler de birer idari sözleşmedir. Bu sözleşme türü aşağıdakilerden hangi tipe girer?",
      "secenekler": ["İmtiyaz sözleşmesi", "İltizam sözleşmesi", "Görevlendirme sözleşmeleri", "Orman işletme sözleşmeleri", "İdari hizmet sözleşmeleri"],
      "cevap": "C",
      "aciklama": "3996 sayılı Kanun kapsamındaki yap-işlet-devret projeleri \"görevlendirme sözleşmesi\" ile yapılır."
    },
    {
      "id": "ID_U05_0035",
      "unite": 5,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi klasik tip idari sözleşme değildir?",
      "secenekler": ["İmtiyaz sözleşmesi", "İltizam sözleşmesi", "İstikraz sözleşmesi", "Görevlendirme sözleşmesi", "İdari hizmet sözleşmeleri"],
      "cevap": "D",
      "aciklama": "Görevlendirme (yap-işlet-devret) sözleşmeleri modern tip idari sözleşmelerdir."
    },
    {
      "id": "ID_U05_0036",
      "unite": 5,
      "zorluk": "orta",
      "soru": "İdari sözleşmelerin ölçütleri ile ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Sözleşme taraflarından biri idaredir.", "İdari sözleşme kamu hizmetinin yürütülmesi veya yürütülmesine katkıda bulunmak amacıyla yapılır.", "Sözleşme ile idareye bazı üstünlük ve ayrıcalıklar tanınır.", "İdareye özel hukuk sözleşmelerindekileri aşan bazı üstünlük ve ayrıcalıkların tanınmış olması da o sözleşmelerin idari sözleşme olmasını sağlar.", "Bu sözleşmelerde idarenin fesih yetkisi yoktur."],
      "cevap": "E",
      "aciklama": "İdari sözleşmelerde idarenin tek yanlı fesih yetkisi vardır."
    },
    {
      "id": "ID_U05_0037",
      "unite": 5,
      "zorluk": "orta",
      "soru": "İmtiyaz sözleşmelerinde aşağıdakilerden hangisi idarenin hak ve yükümlülüklerinden biri değildir?",
      "secenekler": ["İdare, tekel kaydı koymak gibi imtiyazcıya taahhüt ettiği avantajları sağlamalıdır.", "İdarenin tek taraflı olarak sözleşmeyi feshetme yetkisi yoktur.", "İdare, sunulan hizmetin değişen güncel sosyal ve ekonomik koşullara uyum sağlaması için sözleşmenin düzenleyici hükümlerinde tek taraflı değişiklik yapabilir.", "İdare, imtiyazcının hizmeti gereği gibi yürütmemesi durumunda para cezası veya geçici el koyma gibi müeyyideler uygulayabilir.", "İdare tek taraflı olarak sözleşmeyi feshedebilir."],
      "cevap": "B",
      "aciklama": "İdare kamu yararı gereği imtiyaz sözleşmesini tek yanlı feshedebilir."
    },
    {
      "id": "ID_U05_0038",
      "unite": 5,
      "zorluk": "orta",
      "soru": "I. Merkezi yönetim bütçesi kapsamındaki idareler\nII. Özel bütçeli idareler\nIII. İl özel idareleri\nIV. Belediyeler\nYukarıdakilerden hangileri 2886 sayılı Devlet İhale Kanunu kapsamına giren kurumlardandır?",
      "secenekler": ["III – IV", "I – II – III – IV", "I – II", "I – IV", "I – II – III"],
      "cevap": "B",
      "aciklama": "2886 m.1: Genel ve özel bütçeli idareler, il özel idareleri ve belediyeler kanun kapsamındadır."
    },
    {
      "id": "ID_U05_0039",
      "unite": 5,
      "zorluk": "orta",
      "soru": "... kapsamına giren idarelerin yaptığı ihaleler sadece satım, kiraya verme, trampa, mülkiyetten gayri ayni hak tesisi ve taşıma işleri gibi gelir getiren ihaleler ile sınırlı kalacaktır. Yukarıdaki boşluğa aşağıdakilerden hangisi gelmelidir?",
      "secenekler": ["Kamu İhale Kanunu", "İktisadi Devlet Teşekkülü", "Devlet İhale Kanunu", "Kamu İktisadi Teşekkülü", "Müesseseler"],
      "cevap": "C",
      "aciklama": "4734 yürürlüğe girdikten sonra 2886 sayılı Kanun gelir getirici ihalelerle sınırlı kalmıştır."
    },
    // ============================================================
    // ÜNİTE 6 – KAMU HIZMETLERI
    // ============================================================
    {
      "id": "ID_U06_0001",
      "unite": 6,
      "zorluk": "kolay",
      "soru": "Kâr ve zararı özel kişiye ait olmak üzere bir kamu hizmetinin kişilere gördürülmesi olan sözleşme türü hangisidir?",
      "secenekler": ["Mali iltizam", "Emanet", "İmtiyaz", "Kamu istikraz sözleşmesi", "Kamu hizmeti imtiyaz sözleşmesi"],
      "cevap": "E",
      "aciklama": "Kamu hizmeti imtiyazında hizmet, kâr ve zararı imtiyaz sahibine ait olmak üzere özel kişiye gördürülür."
    },
    {
      "id": "ID_U06_0002",
      "unite": 6,
      "zorluk": "kolay",
      "soru": "Kamu hizmetlerinin amacı nedir?",
      "secenekler": ["Kamu yararı", "Yalnız kültürel fayda", "Bireysel kârlılık", "Ulusal iktisadi fayda", "Bireysel ekonomik fayda"],
      "cevap": "A",
      "aciklama": "Kamu hizmetleri kamu yararı amacıyla yürütülür."
    },
    {
      "id": "ID_U06_0003",
      "unite": 6,
      "zorluk": "kolay",
      "soru": "Memurların greve gidememesi kamu hizmetine egemen olan hangi ilke gereğidir?",
      "secenekler": ["Süreklilik", "Değişebilirlik", "Eşitlik", "Tarafsızlık", "Laiklik"],
      "cevap": "A",
      "aciklama": "Süreklilik ilkesi gereği kamu hizmetleri kesintisiz yürütülmelidir; memurlara grev yasağı bu ilkenin sonucudur."
    },
    {
      "id": "ID_U06_0004",
      "unite": 6,
      "zorluk": "kolay",
      "soru": "... usulü için belirleyici nitelik, bir kamu hizmetinin doğrudan doğruya devlet veya öteki kamu tüzel kişilerince; kendi tüzel kişiliği bünyesinde ya da sadece hizmeti yürütmek amacıyla kurdukları ayrı bir tüzel kişilik tarafından görülmesidir.\nYukarıdaki boşluğa aşağıdakilerden hangisi gelmelidir?",
      "secenekler": ["Müşterek emanet yöntemi", "İltizam yöntemi", "Ruhsat yönetimi", "Emanet usulü", "Yap-işlet-devret yöntemi"],
      "cevap": "D",
      "aciklama": "Emanet usulünde kamu hizmeti doğrudan idarenin kendisince yürütülür. (Kitapta B ve E şıkları aynı basıldığından E değiştirildi.)"
    },
    {
      "id": "ID_U06_0005",
      "unite": 6,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi kamu hizmetlerinin görülme usullerinden biri değildir?",
      "secenekler": ["Emanet usulü", "Ruhsat usulü", "Müşterek emanet usulü", "İltizam usulü", "Yarışma usulü"],
      "cevap": "E",
      "aciklama": "Yarışma bir ihale usulüdür; kamu hizmeti görülme usulü değildir."
    },
    {
      "id": "ID_U06_0006",
      "unite": 6,
      "zorluk": "kolay",
      "soru": "Yap-işlet-devret modeli en fazla kaç yıl için yapılabilir?",
      "secenekler": ["20", "49", "10", "12", "51"],
      "cevap": "B",
      "aciklama": "3996 sayılı Kanun: Yap-işlet-devret sözleşmeleri en fazla 49 yıl için yapılabilir."
    },
    {
      "id": "ID_U06_0007",
      "unite": 6,
      "zorluk": "kolay",
      "soru": "Bir kamu hizmetinin hasar ve zararı yönetime ait olmak üzere, hizmeti yürütmekle görevli kılınan özel hukuk kişisine gelir üzerinden bir pay verilmek suretiyle kamu hizmetinin yürütülmesi aşağıdakilerden hangisinin tanımıdır?",
      "secenekler": ["Emanet usulü", "Ruhsat usulü", "Müşterek emanet usulü", "İltizam usulü", "Yarışma usulü"],
      "cevap": "C",
      "aciklama": "Müşterek emanette kâr-zarar idareye aittir; özel kişiye gelirden pay verilir."
    },
    {
      "id": "ID_U06_0008",
      "unite": 6,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi kamu hizmetlerinin özelliklerinden biri değildir?",
      "secenekler": ["Asli yetki yasama organına aittir.", "İdari işlem ile kurulur.", "Kamu hizmeti kamuya yönelik ve kamuya yararlı işlerdir.", "Kamu hizmeti ülkesel, bölgesel olabileceği gibi belli kesimlere yönelik de olabilir.", "Kamu hizmeti kural olarak kamu kuruluşlarınca sağlanır."],
      "cevap": "B",
      "aciklama": "Kamu hizmeti kanunla kurulur (yasama yetkisi); idari işlemle kurulamaz."
    },
    {
      "id": "ID_U06_0009",
      "unite": 6,
      "zorluk": "kolay",
      "soru": "Kamu hizmetlerinde amacın kâr olmaması, asıl amacın toplumsal gereksinimlerin karşılanması kamu hizmetine egemen ilkelerden hangisinin gereğidir?",
      "secenekler": ["Süreklilik", "Değişkenlik", "Nesnellik", "Bedelsizlik", "Tarafsızlık"],
      "cevap": "D",
      "aciklama": "Bedelsizlik (nimet-külfet dengesinin aranmaması) kamu hizmetinin kâr amacı gütmemesini ifade eder."
    },
    {
      "id": "ID_U06_0010",
      "unite": 6,
      "zorluk": "kolay",
      "soru": "Kamu hizmetlerinin hiçbir gruba etnik, dini, siyasi vb. ayrım gözetilmeksizin yerine getirilmesi kamu hizmetine egemen ilkelerden hangisinin gereğidir?",
      "secenekler": ["Süreklilik", "Değişkenlik", "Nesnellik", "Bedelsizlik", "Tarafsızlık"],
      "cevap": "E",
      "aciklama": "Tarafsızlık (eşitlik) ilkesi gereği hizmet ayrım gözetilmeksizin sunulur."
    },
    {
      "id": "ID_U06_0011",
      "unite": 6,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi kamu hizmetlerinin iletilmesi (görülmesi) usullerinden değildir?",
      "secenekler": ["İmtiyaz", "İltizam", "Kamulaştırma", "Ruhsat", "Yap-İşlet-Devret"],
      "cevap": "C",
      "aciklama": "Kamulaştırma özel mülkiyetteki taşınmazın kamuya geçirilmesidir; hizmet görülme usulü değildir."
    },
    {
      "id": "ID_U06_0012",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Belediyenin toplu taşıma hizmetini gördürmesi, masrafların bütününe özel hukuk kişisinin katlanması (ücreti yolculardan alması) şeklinde yürütülen hizmet türü aşağıdakilerden hangisidir?",
      "secenekler": ["Emanet usulü", "İmtiyaz usulü", "Ruhsat usulü", "Görevlendirme usulü", "İltizam usulü"],
      "cevap": "B",
      "aciklama": "Kâr ve zararı özel kişiye ait olmak üzere, hizmet karşılığı ücretin kullanıcılardan alındığı model imtiyaz usulüdür."
    },
    {
      "id": "ID_U06_0013",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Kamu hizmetinden önceden belirlenen kurallarına uygun olan herkesin yararlanabileceğini öngören ilke aşağıdakilerden hangisidir?",
      "secenekler": ["Bedelsizlik", "Eşitlik", "Süreklilik", "Kesintisizlik", "Düzenlilik"],
      "cevap": "B",
      "aciklama": "Eşitlik ilkesi gereği şartları taşıyan herkes hizmetten eşit yararlanır."
    },
    {
      "id": "ID_U06_0014",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Millî Eğitim Bakanlığının vatandaşlardan ilköğretim kamu hizmetinin karşılığı olarak bir ücret almaması kamu hizmetlerinin hangi özelliğidir?",
      "secenekler": ["Süreklilik", "Tarafsızlık", "Düzenlilik", "Değişkenlik", "Bedelsizlik"],
      "cevap": "E",
      "aciklama": "Anayasa m.42: İlköğretim devlet okullarında parasızdır."
    },
    {
      "id": "ID_U06_0015",
      "unite": 6,
      "zorluk": "orta",
      "soru": "\"Kamu hizmetlerinin ihtiyaç duyulduğu anda sunulması\" anlamına gelen ifade kamu hizmetine egemen olan ilkelerden hangisiyle ilişkilidir?",
      "secenekler": ["Süreklilik", "Değişkenlik", "Bedelsizlik", "Nesnellik", "Tarafsızlık"],
      "cevap": "A",
      "aciklama": "Süreklilik ilkesi gereği hizmet kesintisiz ve ihtiyaç duyulduğu anda sunulmalıdır."
    },
    {
      "id": "ID_U06_0016",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamu hizmetinin özelliği değildir?",
      "secenekler": ["Asli yetki yasama organına aittir.", "Kanunla kurulur.", "Kamuya dolaylı olarak yararlı olan hizmetler kamu hizmeti sayılırlar.", "Kamu hizmeti ülkesel, bölgesel olabileceği gibi belli kesimlere yönelik de olabilir.", "Kamu hizmeti kural olarak kamu kuruluşlarınca sağlanır."],
      "cevap": "C",
      "aciklama": "Kamu hizmeti kamuya doğrudan yararlı, sürekli ve düzenli faaliyetlerdir."
    },
    {
      "id": "ID_U06_0017",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Kamu hizmetleri, bu hizmetleri doğuran gereksinimlere paralel olarak sürekli olarak bir değişim içerisindedir. Bu değişim sadece sunulan hizmetin kendisinin değil, yöntemlerin ve araç gereçlerin de zamana uyum sağlamasını gerekli kılar. İfadesi kamu hizmetine egemen olan ilkelerden hangisiyle ilişkilidir?",
      "secenekler": ["Nesnellik", "Değişkenlik (uyum)", "Süreklilik", "Bedelsizlik", "Tarafsızlık"],
      "cevap": "B",
      "aciklama": "Değişkenlik ilkesi gereği idare hizmeti değişen ihtiyaçlara göre düzenleyebilir."
    },
    {
      "id": "ID_U06_0018",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Kamu hizmetlerinden her birey eşit bir biçimde yararlanır; ayrıca bu hizmetlerden yararlanmak bakımından belli koşulların arandığı durumlarda bu koşullar objektiftir ve kişiye göre değişiklik göstermez. İfadesi kamu hizmetine egemen olan ilkelerden hangisiyle ilgilidir?",
      "secenekler": ["Süreklilik", "Değişkenlik", "Nesnellik", "Tarafsızlık", "Bedelsizlik"],
      "cevap": "C",
      "aciklama": "Nesnellik ilkesi koşulların objektif ve herkes için aynı olmasını ifade eder."
    },
    {
      "id": "ID_U06_0019",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Kamu hizmetleri yerine getirilirken din ayrımı gözetilmez; o ülke sınırları içinde yaşayan tüm din mensuplarına kamu hizmeti sunulur. İfadesi kamu hizmetine egemen olan ilkelerden hangisiyle ilişkilidir?",
      "secenekler": ["Değişkenlik", "Süreklilik", "Nesnellik", "Bedelsizlik", "Laiklik"],
      "cevap": "E",
      "aciklama": "Laiklik ilkesi gereği kamu hizmetinde din ayrımı yapılmaz."
    },
    {
      "id": "ID_U06_0020",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Kamu hizmetinin önceden kararlaştırılan belli bir bedel karşılığı özel hukuk kişisi tarafından yürütülmesi olup Osmanlı döneminde özellikle de vergi toplama alanında kullanılan kamu hizmetlerinin işletilme usulü aşağıdakilerden hangisidir?",
      "secenekler": ["Müşterek emanet", "Emanet usulü", "İltizam yöntemi", "İmtiyaz yöntemi", "Ruhsat yöntemi"],
      "cevap": "C",
      "aciklama": "İltizam usulü Osmanlı'da vergi toplanmasında yaygın olarak kullanılmıştır."
    },
    {
      "id": "ID_U06_0021",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamu hizmetinin özelliği değildir?",
      "secenekler": ["Bir hizmetin kamuya yönelik olması kamu hizmeti sayılması için yeterlidir.", "Kamu hizmetleri kural olarak sürekli hizmetlerdir.", "Bir hizmetin kamu hizmeti olabilmesi için tekel konusu olması gerekmez.", "Kamu hizmeti paralı olabileceği gibi parasız da olabilir.", "Kamu hizmetlerinin kamu kuruluşlarınca yalnız kamu hukuku kurallarına göre yürütülmesi gerekli değildir."],
      "cevap": "A",
      "aciklama": "Kamu hizmeti olması için kamuya yönelik olmanın yanında kanunla kurulma ve kamu tüzel kişisince üstlenilme de gerekir."
    },
    {
      "id": "ID_U06_0022",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Özel kişinin idareyle yaptığı sözleşme uyarınca bir kamu hizmetini masrafları, kâr ve zararı kendisine olmak üzere kurması ve/veya işletmesidir. Aşağıdaki kamu hizmetlerinin işletilme usullerinden hangisinin açıklamasıdır?",
      "secenekler": ["İltizam yöntemi", "Müşterek emanet", "Emanet usulü", "Ruhsat yöntemi", "İmtiyaz yöntemi"],
      "cevap": "E",
      "aciklama": "Kamu hizmeti imtiyazının tanımıdır."
    },
    {
      "id": "ID_U06_0023",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi 1982 Anayasası'nda yer alan sosyal devletin hukuki araçlarından değildir?",
      "secenekler": ["Planlama", "Vergi adaleti", "Kamulaştırma", "Devletleştirme", "Özelleştirme"],
      "cevap": "E",
      "aciklama": "Özelleştirme kamu varlıklarının özel sektöre devridir; sosyal devletin müdahale aracı olarak sayılmaz."
    },
    {
      "id": "ID_U06_0024",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Kamu hizmetlerinin finansmanı (genel olarak) ne ile karşılanır?",
      "secenekler": ["Resim", "Vergi", "Harç", "Kredi", "Borç"],
      "cevap": "B",
      "aciklama": "Kamu hizmetleri esas olarak vergi gelirleriyle finanse edilir."
    },
    {
      "id": "ID_U06_0025",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamu hizmetlerine egemen olan ilkelerden biri değildir?",
      "secenekler": ["Süreklilik", "Uyarlanma", "Bedelsizlik", "Eşitlik ilkesi", "Provizyon ilkesi"],
      "cevap": "E",
      "aciklama": "Kamu hizmetine egemen ilkeler süreklilik, değişkenlik (uyarlanma), eşitlik ve bedelsizliktir; \"provizyon\" böyle bir ilke değildir."
    },
    {
      "id": "ID_U06_0026",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamu hizmetinin ilkelerinden değildir?",
      "secenekler": ["Tarafsızlık ilkesi", "Değişebilirlik ilkesi", "Eşitlik ilkesi", "Süreklilik ilkesi", "Statiklik"],
      "cevap": "E",
      "aciklama": "Kamu hizmetleri değişen ihtiyaçlara uyarlanır; \"statiklik\" bir ilke değildir."
    },
    {
      "id": "ID_U06_0027",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Kamu hizmetlerinin kolektif ihtiyaçlardaki ve kamu yararı gereklerindeki değişime uyum sağlaması gerekliliğine karşılık gelen ilke aşağıdakilerden hangisidir?",
      "secenekler": ["Tarafsızlık ilkesi", "Değişebilirlik ilkesi", "Eşitlik ilkesi", "Devamlılık ilkesi", "Laiklik ilkesi"],
      "cevap": "B",
      "aciklama": "Değişebilirlik (uyarlanma) ilkesi."
    },
    {
      "id": "ID_U06_0028",
      "unite": 6,
      "zorluk": "orta",
      "soru": "Özel hukuk kişisinin kamu idaresine ödeyeceği belirli bir ücret karşılığında, bir kamu hizmetini kendi kâr ve zararına işletmesi konusunda özel hukuk kişisi ile kamu idaresi arasında yapılan sözleşme hangisidir?",
      "secenekler": ["İmtiyaz sözleşmesi", "İltizam sözleşmesi", "İstikraz sözleşmesi", "Orman işletme sözleşmeleri", "İdari hizmet sözleşmeleri"],
      "cevap": "B",
      "aciklama": "İltizamda özel kişi idareye belirli bir bedel öder ve hizmetten elde ettiği geliri kendisi alır."
    },
    // ============================================================
    // ÜNİTE 7 – KOLLUK HIZMETLERI (İDARI KOLLUK)
    // ============================================================
    {
      "id": "ID_U07_0001",
      "unite": 7,
      "zorluk": "kolay",
      "soru": "Kolluk personelinin kamu düzenini bozan bir durumla karşılaştığı takdirde kendiliğinden harekete geçmesi aşağıdakilerden hangisinin gereğidir?",
      "secenekler": ["İzin usulü", "Genel yaptırımlar", "Re'sen icra yetkisi", "Zor kullanma yetkisi", "Bildirim usulü"],
      "cevap": "C",
      "aciklama": "İdari kolluk, kararlarını yargı kararına gerek olmadan re'sen uygulayabilir."
    },
    {
      "id": "ID_U07_0002",
      "unite": 7,
      "zorluk": "kolay",
      "soru": "Toplumsal düzenin sağlanmasında var olan açık kamu yararı nedeniyle kişilerin hak ve özgürlüklerinin yasama organının belirlediği sınırlar içerisinde sınırlanmasını içeren, kamu düzeninin sağlanması, sürdürülmesi ve bozulduğunda yeniden kurulması ve kamu düzenini olumsuz etkileyen faaliyetlerin gerektiğinde kuvvet de kullanılmak suretiyle engellenmesine odaklanmış faaliyet anlamına gelen kavram aşağıdakilerden hangisidir?",
      "secenekler": ["Dirlik", "Askeriye", "Esenlik", "Kolluk", "Sağlık"],
      "cevap": "D",
      "aciklama": "İdari kolluk faaliyetinin tanımıdır."
    },
    {
      "id": "ID_U07_0003",
      "unite": 7,
      "zorluk": "kolay",
      "soru": "Aşağıdaki kolluk görevlilerinden hangisi silahlı değildir?",
      "secenekler": ["Sahil güvenlik", "Orman muhafaza", "Gümrük muhafaza", "Jandarma", "Belediye zabıtası"],
      "cevap": "E",
      "aciklama": "Belediye zabıtası silahsız bir özel kolluktur."
    },
    {
      "id": "ID_U07_0004",
      "unite": 7,
      "zorluk": "kolay",
      "soru": "Suç işlenmeden önce ortaya çıkan kolluk aşağıdakilerden hangisidir?",
      "secenekler": ["Adli kolluk", "İdari kolluk", "Siyasi kolluk", "Özel kolluk", "Suç sonrası kolluk"],
      "cevap": "B",
      "aciklama": "İdari kolluk önleyicidir; adli kolluk suç işlendikten sonra harekete geçer."
    },
    {
      "id": "ID_U07_0005",
      "unite": 7,
      "zorluk": "kolay",
      "soru": "Ses kirliliği, toz kirliliği, huzursuzluk yaratan unsurlar, toplum halinde yaşamanın ihlaline yönelik hususlar kamu düzeni içerisinde yer alan unsurlardan hangisinin içinde yer alır?",
      "secenekler": ["Güvenlik", "Sağlık", "Dirlik ve esenlik", "Genel ahlak", "Savunma"],
      "cevap": "C",
      "aciklama": "Dirlik ve esenlik (huzur ve sükûn) kamu düzeninin unsurlarındandır."
    },
    {
      "id": "ID_U07_0006",
      "unite": 7,
      "zorluk": "kolay",
      "soru": "I. Belediye meclisi\nII. Belediye encümeni\nIII. Belediye başkanı\nYukarıdakilerden hangisi belediyelerin kolluk makamlarından biridir?",
      "secenekler": ["I – II – III", "Yalnız II", "Yalnız III", "I – II", "I – III"],
      "cevap": "A",
      "aciklama": "Belediye meclisi emir ve yasak koyar, encümen ceza verir, başkan uygular; üçü de belediye kolluk makamıdır (5393 m.15, 34)."
    },
    {
      "id": "ID_U07_0007",
      "unite": 7,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi kamu düzeninin unsurlarından biri değildir?",
      "secenekler": ["Güvenlik", "Sağlık", "Dirlik ve esenlik", "Genel ahlak", "Kararlılık"],
      "cevap": "E",
      "aciklama": "Kamu düzeninin unsurları güvenlik, sağlık, dirlik-esenlik ve genel ahlaktır."
    },
    {
      "id": "ID_U07_0008",
      "unite": 7,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi özel idari kolluklardan biri değildir?",
      "secenekler": ["Belediye zabıtası", "Sahil güvenlik", "Sınır kolluğu", "Çiftçi malları koruma kolluğu", "Köy korucuları"],
      "cevap": "B",
      "aciklama": "Sahil Güvenlik genel kolluk kuvvetidir."
    },
    {
      "id": "ID_U07_0009",
      "unite": 7,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi genel idari kolluk makamlarından biri değildir?",
      "secenekler": ["İçişleri Bakanı", "Valiler", "Milletvekili", "Cumhurbaşkanı", "Kaymakam"],
      "cevap": "C",
      "aciklama": "Milletvekilleri yasama organı üyesidir; kolluk makamı değildir."
    },
    {
      "id": "ID_U07_0010",
      "unite": 7,
      "zorluk": "kolay",
      "soru": "I. Serbestlik usulü\nII. Bildirim usulü\nIII. İzin (ruhsat) usulü\nYukarıdakilerden hangisi kolluk usullerinden biridir?",
      "secenekler": ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II", "I, II ve III"],
      "cevap": "E",
      "aciklama": "Kolluk usulleri serbestlik, bildirim, izin, yasaklama ve düzenleme usulleridir."
    },
    {
      "id": "ID_U07_0011",
      "unite": 7,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi idari kolluk için söylenemez?",
      "secenekler": ["Kendi üst makamlarının emrinde faaliyet gösterir.", "İdare hukukuna tabidir.", "Uyuşmazlıklar idari yargıda çözümlenir.", "Bastırıcı nitelikte faaliyet gösterir.", "Görebi suçu olmadan önce engellemeye yöneliktir."],
      "cevap": "D",
      "aciklama": "İdari kolluk önleyicidir; bastırıcı (suç sonrası) faaliyet adli kolluğa aittir."
    },
    {
      "id": "ID_U07_0012",
      "unite": 7,
      "zorluk": "kolay",
      "soru": "Emniyet Teşkilatı Kanunu'nun 1. maddesine göre ülkenin genel güvenlik ve asayişinden aşağıdakilerden hangisi sorumludur?",
      "secenekler": ["Bakanlar", "İçişleri Bakanı", "Millî Savunma Bakanı", "Milletvekilleri", "TBMM"],
      "cevap": "B",
      "aciklama": "3201 m.1: Memleketin umumi emniyet ve asayiş işlerinden İçişleri Bakanı sorumludur."
    },
    {
      "id": "ID_U07_0013",
      "unite": 7,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisinin bozulması kamu düzeninin ihlali anlamına gelmez?",
      "secenekler": ["Genel sağlık", "Genel ahlak", "Dini inanç", "Dirlik ve esenlik", "Güvenlik"],
      "cevap": "C",
      "aciklama": "Kamu düzeninin unsurları güvenlik, sağlık, dirlik-esenlik ve genel ahlaktır."
    },
    {
      "id": "ID_U07_0014",
      "unite": 7,
      "zorluk": "orta",
      "soru": "Kolluk makamları kolluk personeline emir verme yetkisini haiz üst düzey amirlerdir. Buna göre aşağıdakilerden hangisi genel kolluk makamı değildir?",
      "secenekler": ["Cumhurbaşkanı", "Millî Savunma Bakanı", "İçişleri Bakanı", "Vali", "Kaymakam"],
      "cevap": "B",
      "aciklama": "Genel kolluk makamları Cumhurbaşkanı, İçişleri Bakanı, vali ve kaymakamdır."
    },
    {
      "id": "ID_U07_0015",
      "unite": 7,
      "zorluk": "orta",
      "soru": "Bir idari makama tanınmış, kamu düzeninin sağlanması amacıyla icrai karar alma ve bunların uygulanması için gerekli maddi işlemleri yapma ayrıcalığına ne ad verilir?",
      "secenekler": ["Adli kolluk", "İdari kolluk", "İdari teşkilat", "Suç kolluğu", "Askeri kolluk"],
      "cevap": "B",
      "aciklama": "İdari kolluk yetkisinin tanımıdır."
    },
    {
      "id": "ID_U07_0016",
      "unite": 7,
      "zorluk": "orta",
      "soru": "Jandarma Genel Komutanlığı nereye bağlıdır?",
      "secenekler": ["Cumhurbaşkanlığı", "Genelkurmay Başkanlığı", "Millî Savunma Bakanlığı", "İçişleri Bakanlığı", "TBMM"],
      "cevap": "D",
      "aciklama": "668 sayılı KHK (2016) ile Jandarma Genel Komutanlığı İçişleri Bakanlığına bağlanmıştır."
    },
    {
      "id": "ID_U07_0017",
      "unite": 7,
      "zorluk": "orta",
      "soru": "Kolluk faaliyetlerinin amacı olan kamu düzeninin geleneksel anlamda dört unsurunun olduğunu söylemek mümkündür. Aşağıdakilerden hangisi bu unsurlardan biri değildir?",
      "secenekler": ["Dirlik ve esenlik", "Kamu güvenliği", "Kamu gücü", "Genel sağlık", "Genel ahlak"],
      "cevap": "C",
      "aciklama": "Kamu düzeninin unsurları güvenlik, sağlık, dirlik-esenlik ve genel ahlaktır; kamu gücü bir unsur değil araçtır."
    },
    {
      "id": "ID_U07_0018",
      "unite": 7,
      "zorluk": "orta",
      "soru": "Toplumun bir bütün olarak yaygın ve bulaşıcı hastalıklardan korunması amacıyla kolluk faaliyetlerinde bulunulması anlamına gelen kamu düzeni unsuru aşağıdakilerden hangisidir?",
      "secenekler": ["Genel ahlak", "Genel sağlık", "Dirlik ve esenlik", "Estetik", "Kamu güvenliği"],
      "cevap": "B",
      "aciklama": "Genel sağlık (kamu sağlığı) kamu düzeninin unsurlarındandır."
    },
    {
      "id": "ID_U07_0019",
      "unite": 7,
      "zorluk": "orta",
      "soru": "I. Orman muhafaza kolluğu\nII. Limanlar zabıtası\nIII. Sınır kolluğu\nIV. Polis\nV. Jandarma\nYukarıdakilerden hangisi veya hangileri özel idari kolluk arasında sayılabilir?",
      "secenekler": ["Yalnız II", "Yalnız III", "I – II – III", "IV – V", "Yalnız I"],
      "cevap": "C",
      "aciklama": "Polis ve jandarma genel kolluktur; orman muhafaza, liman ve sınır kolluğu özel kolluktur."
    },
    {
      "id": "ID_U07_0020",
      "unite": 7,
      "zorluk": "orta",
      "soru": "Kolluk yetkilerinin kamu düzeni dışında bir başka amacı gerçekleştirmek için kullanılması durumunda ortaya çıkan hukuka aykırılık aşağıdakilerden hangisidir?",
      "secenekler": ["Ağır ve bariz yetki tecavüzü", "Fonksiyon gaspı", "Yetki saptırması", "Görev gaspı", "Usul saptırması"],
      "cevap": "C",
      "aciklama": "Yetkinin kanunun öngördüğü amaç dışında kullanılması yetki saptırmasıdır."
    },
    {
      "id": "ID_U07_0021",
      "unite": 7,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi idari kolluk hizmetlerinin özelliklerinden değildir?",
      "secenekler": ["İdari kolluğun eylem ve işlemleri her zaman \"tek taraflı\"dır.", "Kolluk yetkisi devredilemez bir yetkidir.", "Kolluk yetkisi kullanılması zorunlu olan bir yetkidir.", "Kolluk eylem ve işlemleri hak yaratıcı eylem ve işlemler değildir.", "Kolluk işlemleri geri alınamaz."],
      "cevap": "E",
      "aciklama": "Kolluk işlemleri kişilere kazanılmış hak doğurmadığından her zaman geri alınabilir."
    },
    {
      "id": "ID_U07_0022",
      "unite": 7,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi idari kolluk hizmetlerinin özelliklerinden değildir?",
      "secenekler": ["Kolluk makamları iki yanlı işlemler (sözleşmeler) yapamazlar.", "Kolluk faaliyetlerinin yürütülmesi işini özel kişilere devredemez.", "İdarenin kolluk eylem ve işlemleri yapması idarenin kamu gücü ayrıcalıklarına dayanır.", "Kolluk işlemleri her zaman geri alınabilir.", "Kolluk eylem ve işlemleri nedeniyle ortaya çıkan zararlardan idare asla sorumlu olmaz."],
      "cevap": "E",
      "aciklama": "Kolluk faaliyetlerinden doğan zararlardan idare hizmet kusuru veya kusursuz sorumluluk esaslarına göre sorumludur."
    },
    // ============================================================
    // ÜNİTE 8 – KAMU GÖREVLILERI
    // ============================================================
    {
      "id": "ID_U08_0001",
      "unite": 8,
      "zorluk": "kolay",
      "soru": "İdarenin işçilerle yaptığı sözleşme hangi kanuna tabidir?",
      "secenekler": ["DMK", "İş Kanunu", "TCK", "Anayasa", "ETK"],
      "cevap": "B",
      "aciklama": "İşçiler 4857 sayılı İş Kanununa tabidir."
    },
    {
      "id": "ID_U08_0002",
      "unite": 8,
      "zorluk": "kolay",
      "soru": "657 sayılı DMK'ya göre aşağıdakilerden hangisi bugün bir istihdam şekli değildir?",
      "secenekler": ["Memur", "Geçici personel", "Sözleşmeli personel", "İşçi", "Hepsi istihdam biçimidir."],
      "cevap": "B",
      "aciklama": "657 m.4: Kamu hizmetleri memurlar (A), sözleşmeli personel (B) ve işçiler (D) eliyle görülür; geçici personel (C) statüsü kaldırılmıştır."
    },
    {
      "id": "ID_U08_0003",
      "unite": 8,
      "zorluk": "kolay",
      "soru": "İşçiler hangi hukuk dalının hükümlerine tabidir?",
      "secenekler": ["Anayasa hukuku", "Kamu hukuku", "Özel hukuk", "Ceza hukuku", "Ticaret hukuku"],
      "cevap": "C",
      "aciklama": "İşçiler İş Kanunu ve özel hukuk (iş sözleşmesi) hükümlerine tabidir."
    },
    {
      "id": "ID_U08_0004",
      "unite": 8,
      "zorluk": "kolay",
      "soru": "Devlet memurlarının yaptıkları hizmetler için gerekli bilgilere ve yetişme şartlarına uygun bir şekilde, sınıfları içinde en yüksek derecelere kadar ilerleme imkânına sahip olmalarını ifade eden kavram nedir?",
      "secenekler": ["Kariyer", "Liyakat", "Sınıflandırma", "Kıdem", "Kademe"],
      "cevap": "A",
      "aciklama": "657 m.3: Kariyer ilkesi."
    },
    {
      "id": "ID_U08_0005",
      "unite": 8,
      "zorluk": "kolay",
      "soru": "Memurluğa girmeyi, sınıflar içinde ilerleme ve yükselmeyi ve görevin sona erdirilmesini yetenek esasına dayandırmak ve böylece memurları güvenliğe sahip kılmaya ne ad verilir?",
      "secenekler": ["Kariyer", "Liyakat", "Sınıflandırma", "Kıdem", "Kademe"],
      "cevap": "B",
      "aciklama": "657 m.3: Liyakat ilkesi."
    },
    {
      "id": "ID_U08_0006",
      "unite": 8,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi 657 sayılı Kanun'da yer alan devlet memurluğu sınıflarından biri değildir?",
      "secenekler": ["Sosyal hizmetler sınıfı", "Sahil güvenlik sınıfı", "Yardımcı hizmetler sınıfı", "Teknik hizmetler sınıfı", "Avukatlık hizmetleri sınıfı"],
      "cevap": "A",
      "aciklama": "657 m.36'da \"sosyal hizmetler sınıfı\" yoktur; sahil güvenlik \"Jandarma ve Sahil Güvenlik Hizmetleri Sınıfı\" içinde yer alır."
    },
    {
      "id": "ID_U08_0007",
      "unite": 8,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi Türk kamu personel rejiminin özelliklerinden biri değildir?",
      "secenekler": ["Memurluk sürekli bir meslektir.", "Kapalı sistem geçerlidir.", "Hizmete giriş merkezi ve kurumsal sistemlerin beraber yer aldığı karma bir sistemle mümkündür.", "Memurluğa girişte lisans mezunu olmak esastır.", "Yükselmelerde kıdem belirleyicidir."],
      "cevap": "D",
      "aciklama": "657 m.48: Memurluğa girişte en az ortaöğretim (veya ilköğretim) mezuniyeti yeterlidir; lisans şartı yoktur."
    },
    {
      "id": "ID_U08_0008",
      "unite": 8,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi memurların hak ve ayrıcalıklarından değildir?",
      "secenekler": ["Güvenlik ve hizmet hakkı", "İzin hakkı", "Toplu sözleşme hakkı", "Sendika kurma hakkı", "Grev hakkı"],
      "cevap": "E",
      "aciklama": "Memurların grev hakkı yoktur (4688 sayılı Kanun ve Anayasa m.54)."
    },
    {
      "id": "ID_U08_0009",
      "unite": 8,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi memurların tabi oldukları yasaklar arasında değildir?",
      "secenekler": ["Sosyal yardım alma yasağı", "Başka görev yasağı", "Grev yasağı", "Ticaret ve kazanç getirici faaliyette bulunma yasağı", "Hediye alma ve menfaat sağlama yasağı"],
      "cevap": "A",
      "aciklama": "657 sayılı Kanun'da sosyal yardım alma yasağı yoktur; memurlar sosyal haklardan yararlanır."
    },
    {
      "id": "ID_U08_0010",
      "unite": 8,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi memurluğu sona erdirmez?",
      "secenekler": ["Müstafi sayılma", "Aylıksız izin", "Memurluktan çıkarma", "Bağdaşmazlık", "Emeklilik"],
      "cevap": "B",
      "aciklama": "Aylıksız izin memurluğu askıya alır; sona erdirmez (657 m.108)."
    },
    {
      "id": "ID_U08_0011",
      "unite": 8,
      "zorluk": "orta",
      "soru": "Özürsüz ve kesintisiz 3–9 gün arasında göreve gelmeyen memura hangi disiplin cezası verilir?",
      "secenekler": ["Kınama", "Uyarma", "Aylıktan kesme", "Memurluktan çıkarma", "Kademe ilerlemesinin durdurulması"],
      "cevap": "E",
      "aciklama": "657 m.125/D: Özürsüz ve kesintisiz 3–9 gün göreve gelmemek kademe ilerlemesinin durdurulmasını gerektirir."
    },
    {
      "id": "ID_U08_0012",
      "unite": 8,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi istisnai memurluk değildir?",
      "secenekler": ["Vali", "Kaymakam", "Büyükelçi", "Cumhurbaşkanı Yardımcısı Başmüşaviri", "TBMM memurlukları"],
      "cevap": "B",
      "aciklama": "657 m.59'da valilik ve büyükelçilik istisnai memurluk olarak sayılır; kaymakamlık meslek memurluğudur."
    },
    {
      "id": "ID_U08_0013",
      "unite": 8,
      "zorluk": "orta",
      "soru": "I. Sınıflandırma\nII. Kariyer\nIII. Liyakat\nYukarıdakilerden hangileri DMK'nın dayandığı temel ilkelerdendir?",
      "secenekler": ["Yalnız I", "Yalnız II", "Yalnız III", "I – II – III", "I – II"],
      "cevap": "D",
      "aciklama": "657 m.3: Sınıflandırma, kariyer ve liyakat temel ilkelerdir."
    },
    {
      "id": "ID_U08_0014",
      "unite": 8,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi devlet memuru olma şartlarından biri değildir?",
      "secenekler": ["En az lise mezunu olmak", "Türk vatandaşı olmak", "18 yaşını tamamlamak", "Askerlikle ilgisi bulunmamak", "Görevini devamlı yapmasına engel olabilecek vücut veya akıl hastalığının olmaması"],
      "cevap": "A",
      "aciklama": "657 m.48 genel şartları sayar; öğrenim şartı sınıfa göre özel şartlarda düzenlenir, \"en az lise\" genel şart değildir."
    },
    // ============================================================
    // ÜNİTE 9 – İDARENIN MALLARI VE KAMULAŞTIRMA
    // ============================================================
    {
      "id": "ID_U09_0001",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Belediyelerde kamulaştırma yapmak hangi merciin görevidir?",
      "secenekler": ["Belediye encümeni", "Belediye meclisi", "Belediye başkanı", "Vali", "Kaymakam"],
      "cevap": "A",
      "aciklama": "5393 m.34: Kamulaştırma kararlarını almak belediye encümeninin görevidir."
    },
    {
      "id": "ID_U09_0002",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Kamulaştırma bedeline itiraz davaları ... çözümlenir.\nBoşluğa aşağıdakilerden hangisi gelmelidir?",
      "secenekler": ["Anayasa yargısında", "İdari yargıda", "Adli yargıda", "Sayıştay'da", "Uyuşmazlık Mahkemesi'nde"],
      "cevap": "C",
      "aciklama": "2942 m.10, 14: Bedel tespiti ve bedele itiraz davaları asliye hukuk mahkemesinde (adli yargı) görülür; kamulaştırma işleminin iptali ise idari yargıdadır."
    },
    {
      "id": "ID_U09_0003",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Özel mülkiyetteki bir taşınmaz malın kamu gücü kullanılarak kamu mülkiyetine geçirilmesine ne ad verilir?",
      "secenekler": ["İstimval", "Devletleştirme", "Kamulaştırma", "İmtiyaz usulü", "Özelleştirme"],
      "cevap": "C",
      "aciklama": "Anayasa m.46 ve 2942 sayılı Kanun."
    },
    {
      "id": "ID_U09_0004",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Kamulaştırma kimler tarafından yapılır?",
      "secenekler": ["Gerçek kişiler", "Sadece tüzel kişiler", "Sadece devlet", "Devlet ve kamu tüzel kişileri", "Sadece gerçek kişiler"],
      "cevap": "D",
      "aciklama": "Anayasa m.46: Devlet ve kamu tüzel kişileri kamulaştırma yapabilir."
    },
    {
      "id": "ID_U09_0005",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Kamulaştırmada taksitlendirme yapıldığı takdirde bu taksitlendirme süresi en fazla kaç yıl olur?",
      "secenekler": ["1", "2", "3", "4", "5"],
      "cevap": "E",
      "aciklama": "Anayasa m.46: Taksitlendirme süresi beş yılı aşamaz."
    },
    {
      "id": "ID_U09_0006",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Kural olarak kamulaştırma bedeli nasıl ödenir?",
      "secenekler": ["Taksitle", "Nakit", "Senet", "Çek", "Kredi"],
      "cevap": "B",
      "aciklama": "Anayasa m.46: Kamulaştırma bedeli kural olarak nakden ve peşin ödenir."
    },
    {
      "id": "ID_U09_0007",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Bir il sınırları içindeki birden çok ilçeye bağlı köyler ve belediyeler yararına kamulaştırmalarda kamu yararı kararını hangi merci verir?",
      "secenekler": ["Vali", "Kaymakam", "İlçe İdare Kurulu", "İl İdare Kurulu", "Bakan"],
      "cevap": "D",
      "aciklama": "2942 m.5: Bu durumda kamu yararı kararını il idare kurulu verir."
    },
    {
      "id": "ID_U09_0008",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisinin kamu yararı kararı onay gerektirmez?",
      "secenekler": ["TBMM", "Bakan", "Vali", "Rektör", "YÖK Başkanı"],
      "cevap": "B",
      "aciklama": "2942 m.6: Bakanlıkların kamu yararı kararları onaya tabi değildir."
    },
    {
      "id": "ID_U09_0009",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "İnsan ihtiyaçlarını doğrudan ya da dolaylı olarak karşılayabilen fiziksel varlıklara ne ad verilir?",
      "secenekler": ["Mal", "Hizmet", "Fayda", "Emek", "Doğal kaynak"],
      "cevap": "A",
      "aciklama": "Hukuki anlamda mal, ihtiyaçları karşılayan ve üzerinde hak kurulabilen varlıklardır."
    },
    {
      "id": "ID_U09_0010",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "İdarenin özel malları hangi hukuka tabidir?",
      "secenekler": ["Anayasa hukuku", "İdare hukuku", "Özel hukuk", "Kamu hukuku", "Ceza hukuku"],
      "cevap": "C",
      "aciklama": "İdarenin özel malları (Hazinenin özel mülkleri) kural olarak özel hukuka tabidir."
    },
    {
      "id": "ID_U09_0011",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Kamu mallarında olan meralar hangi mal niteliğindedir?",
      "secenekler": ["Sahipsiz mallar", "Orta malı", "Kamu malı", "Özel mal", "Devlet malı"],
      "cevap": "B",
      "aciklama": "Meralar, yaylalar, harman yerleri gibi halkın ortak kullanımına özgülenmiş mallar orta mallarıdır."
    },
    {
      "id": "ID_U09_0012",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "İdare kamulaştırma bedelini belirlemek için nereye başvurabilir?",
      "secenekler": ["Yargıtay", "Asliye hukuk mahkemesi", "Danıştay", "Vergi mahkemesi", "Ceza mahkemesi"],
      "cevap": "B",
      "aciklama": "2942 m.10: Uzlaşma sağlanamazsa idare bedelin tespiti ve tescil için asliye hukuk mahkemesine başvurur."
    },
    {
      "id": "ID_U09_0013",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Kamu tüzel kişilerinin mülkiyetinde bulunan, kamunun ortak ve genel kullanımına ve yararlanmasına tahsis edilmiş olan taşınır ve taşınmaz mallara ne ad verilir?",
      "secenekler": ["Kamu malı", "Özel mal", "Maddi mal", "Serbest mal", "İkame mal"],
      "cevap": "A",
      "aciklama": "Kamu malları kamunun kullanımına veya kamu hizmetine özgülenmiş mallardır."
    },
    {
      "id": "ID_U09_0014",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Elle tutulamayan ve gözle görülemeyen mallara ne ad verilir?",
      "secenekler": ["Maddi mal", "Sahipsiz mal", "Orta malı", "Gayri maddi mal", "Kamu malı"],
      "cevap": "D",
      "aciklama": "Fikri haklar gibi soyut değerler gayri maddi mallardır."
    },
    {
      "id": "ID_U09_0015",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Pazarlar, meydanlar, yollar, mezarlar, meralar, harman yerleri gibi bütün yurttaşların veya bir kısım yurttaşların kullanımına ve yararlanmasına özgülenmiş mallara ne ad verilir?",
      "secenekler": ["Maddi mal", "Sahipsiz mal", "Orta malı", "Gayri maddi mal", "Kamu malı"],
      "cevap": "C",
      "aciklama": "TMK m.715 ve Kadastro Kanununda bu mallar \"orta malı\" olarak adlandırılır."
    },
    {
      "id": "ID_U09_0016",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi kamu mallarının özelliklerinden biri değildir?",
      "secenekler": ["Kamu malları satılamaz, devredilemez.", "Zaman aşımı yoluyla kazanılır.", "Vergi ve benzeri yükümlülükleri yoktur.", "Kamu malları üzerinde ipotek konulamaz.", "Kanunda açıkça düzenlenmediği sürece üzerinde özel kişilere ait ayni haklar kurulamaz."],
      "cevap": "B",
      "aciklama": "Kamu malları zamanaşımıyla kazanılamaz (kazandırıcı zamanaşımı işlemez)."
    },
    {
      "id": "ID_U09_0017",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi sahipsiz mal değildir?",
      "secenekler": ["Tepeler", "Petrol kaynakları", "Buzullar", "Meydanlar", "Tuzlu sular"],
      "cevap": "D",
      "aciklama": "Meydanlar orta malıdır; hükmen sahipsiz mallar kayalar, tepeler, dağlar, kaynaklar gibi yararlanmaya elverişli olmayan yerlerdir."
    },
    {
      "id": "ID_U09_0018",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi hizmet malı kategorisinde yer almaz?",
      "secenekler": ["Yollar", "Okullar", "Hastaneler", "Belediye araçları", "Üniversite kampüsü"],
      "cevap": "A",
      "aciklama": "Yollar herkesin kullanımına açık orta malıdır; hizmet malları bir kamu hizmetine özgülenmiş mallardır."
    },
    {
      "id": "ID_U09_0019",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Kamulaştırmanın konusu aşağıdakilerden hangisidir?",
      "secenekler": ["Taşınır mallar", "Taşınmaz mallar", "Kamu orta malları", "Kamu yararı", "Kişisel mallar"],
      "cevap": "B",
      "aciklama": "Anayasa m.46: Kamulaştırma özel mülkiyetteki taşınmazlar hakkında yapılır."
    },
    {
      "id": "ID_U09_0020",
      "unite": 9,
      "zorluk": "zor",
      "soru": "2942 sayılı Kamulaştırma Kanunu'na göre kamulaştırılan malın sahibinin geri alma hakkı, bu hakkın doğmasından itibaren en geç ne kadarlık bir süre içerisinde kullanılmadığı takdirde düşer?",
      "secenekler": ["1 yıl", "6 ay", "5 yıl", "3 ay", "1 ay"],
      "cevap": "A",
      "aciklama": "2942 m.23: Geri alma hakkı doğduğu tarihten itibaren bir yıl içinde kullanılmazsa düşer."
    },
    {
      "id": "ID_U09_0021",
      "unite": 9,
      "zorluk": "zor",
      "soru": "Kamulaştırma işlemi ile ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Kamu yararının gerektirdiği hallerde olur.", "Her halde bedeli sadece peşin olarak ödenir.", "Kamulaştırmayı devlet ve kamu tüzel kişileri yapabilir.", "Taşınmazın bir kısmı veya tamamı kamulaştırılabilir.", "Kamu yararının bulunmadığı hallerde kamulaştırma yapılamaz."],
      "cevap": "B",
      "aciklama": "Anayasa m.46: Bedel kural olarak peşin ödenir; ancak tarım reformu, büyük enerji ve sulama projeleri gibi hallerde taksitle ödenebilir."
    },
    {
      "id": "ID_U09_0022",
      "unite": 9,
      "zorluk": "zor",
      "soru": "Devletleştirmeyle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
      "secenekler": ["Devletleştirme ancak kanunla yapılır.", "Yargısal denetimini (kanunla yapıldığından) Anayasa Mahkemesi yapar.", "Karşılığında bedel ödenir.", "Kamu gücüne dayanan cebri bir işlemdir.", "Yalnızca özel mülkiyetteki taşınmazlar devletleştirme işlemine konu olabilir."],
      "cevap": "E",
      "aciklama": "Anayasa m.47: Devletleştirmenin konusu kamu hizmeti niteliği taşıyan özel teşebbüslerdir; yalnızca taşınmazlar değildir."
    },
    {
      "id": "ID_U09_0023",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Belediye yararına kamulaştırmalarda kamu yararı verme yetkisine sahip merci aşağıdakilerden hangisidir?",
      "secenekler": ["İçişleri Bakanı", "Vali", "Belediye encümeni", "İl Daimi Encümeni", "İl İdare Kurulu"],
      "cevap": "C",
      "aciklama": "2942 m.5: Belediyeler için kamu yararı kararını belediye encümeni verir."
    },
    {
      "id": "ID_U09_0024",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamulaştırma aşaması için yanlış bilgidir?",
      "secenekler": ["Yeterli ödenek sağlanmalı.", "Kamu yararı kararının alınması ve bu kararın onaylanması", "Kamulaştırılacak taşınmazın mirasçılarının belirlenmesi", "Kamulaştırma kararının alınması", "Kamulaştırma kararı alınan yerin önce görüşme yoluyla anlaşma ve satın alma usulü ile alınma yolu denenmesi"],
      "cevap": "C",
      "aciklama": "2942 sayılı Kanun'da mirasçıların belirlenmesi ayrı bir kamulaştırma aşaması değildir; malikler tapu kaydına göre belirlenir."
    },
    {
      "id": "ID_U09_0025",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamu yararı kararı veremez?",
      "secenekler": ["Cumhurbaşkanı", "Köy ihtiyar heyeti", "İlçe idare kurulu", "Belediye encümeni", "Danıştay"],
      "cevap": "E",
      "aciklama": "Danıştay yargı organıdır; kamu yararı kararı veremez (2942 m.5)."
    },
    {
      "id": "ID_U09_0026",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamulaştırmada kamu yararı kararını onamaya yetkili değildir?",
      "secenekler": ["Kaymakam", "Vali", "Rektör", "SPK başkanı", "YÖK başkanı"],
      "cevap": "D",
      "aciklama": "2942 m.6'da onama makamları sayılmıştır; SPK başkanı bunlar arasında değildir."
    },
    {
      "id": "ID_U09_0027",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Kamulaştırmada il idare kurulunun kamu yararı kararına hangi merci onayı gerekir?",
      "secenekler": ["Cumhurbaşkanı", "Vali", "Belediye başkanı", "Belediye encümeni", "Danıştay"],
      "cevap": "B",
      "aciklama": "2942 m.6: İl idare kurulu kararları valinin onayıyla kesinleşir."
    },
    {
      "id": "ID_U09_0028",
      "unite": 9,
      "zorluk": "orta",
      "soru": "İl özel idaresi yararına kamulaştırmalarda kamu yararı verme yetkisine sahip merci aşağıdakilerden hangisidir?",
      "secenekler": ["İçişleri Bakanı", "Vali", "Belediye encümeni", "İl encümeni", "İl idare kurulu"],
      "cevap": "D",
      "aciklama": "2942 m.5: İl özel idareleri için kamu yararı kararını il encümeni verir."
    },
    {
      "id": "ID_U09_0029",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamu mallarının özelliklerinden değildir?",
      "secenekler": ["Kanunda açıkça düzenlenmediği sürece üzerinde özel kişilere ait ayni haklar kurulamaz.", "Kiraya verilemezler; ancak istisnai olarak tahsis amacıyla çelişmiyorsa kiraya vermek mümkündür.", "Kamu malları haczedilemez.", "Vergi ve benzeri yükümlülükleri mevcuttur.", "Tapuya tescil zorunlulukları yoktur."],
      "cevap": "D",
      "aciklama": "Kamu mallarından vergi ve benzeri mali yükümlülükler alınmaz."
    },
    {
      "id": "ID_U09_0030",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi hizmet malıdır?",
      "secenekler": ["Yollar", "Adliye sarayı", "Meydanlar", "Mezarlar", "Meralar"],
      "cevap": "B",
      "aciklama": "Adliye sarayı yargı hizmetine özgülenmiş hizmet malıdır; diğerleri orta mallarıdır."
    },
    {
      "id": "ID_U09_0031",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi orta malıdır?",
      "secenekler": ["Üniversite binaları", "Adliye sarayları", "Pazarlar", "Hastaneler", "Belediyenin dozeri"],
      "cevap": "C",
      "aciklama": "Pazarlar halkın ortak kullanımına özgülenmiş orta mallarıdır."
    },
    {
      "id": "ID_U09_0032",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi sahipsiz mal değildir?",
      "secenekler": ["Buzullar", "Tuzlu sular", "Harman yerleri", "Yer altı suları", "Petrol kaynakları"],
      "cevap": "C",
      "aciklama": "Harman yerleri orta malıdır."
    },
    {
      "id": "ID_U09_0033",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "İdarenin olağanüstü durumlarda özel mülkiyette bulunan taşınır mallara bedeli karşılığında zorla el koymasına ne ad verilir?",
      "secenekler": ["Kamulaştırma", "İstimval", "Özelleştirme", "Devletleştirme", "İstikraz"],
      "cevap": "B",
      "aciklama": "İstimval, olağanüstü hallerde taşınırların geçici olarak kullanılmak üzere alınmasıdır."
    },
    {
      "id": "ID_U09_0034",
      "unite": 9,
      "zorluk": "kolay",
      "soru": "Kamulaştırma ile ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Devlet ve kamu tüzel kişileri kamu yararının gerektirdiği hallerde, gerçek karşılıklarını peşin ödemek şartıyla özel mülkiyette bulunan taşınmaz malların tamamını veya bir kısmını kamulaştırmaya ve bunlar üzerinde idari irtifaklar kurmaya yetkilidir.", "Kamulaştırılan topraktan, o toprağı doğrudan doğruya işleten küçük çiftçiye ait olanlarının bedeli her halde peşin ödenir.", "Taksitlendirmelerde ve herhangi bir sebeple ödenmemiş kamulaştırma bedellerinde kamu alacakları için öngörülen en yüksek faiz uygulanır.", "Kamulaştırma bedeli ile kesin hükme bağlanan artırım bedeli nakden ve peşin olarak ödenir.", "Kamulaştırma işleminin iptali için başvuru süresi 10 gündür."],
      "cevap": "E",
      "aciklama": "2942 m.14: Kamulaştırma işlemine karşı idari yargıda iptal davası tebliğden itibaren 30 gün içinde açılır."
    },
    {
      "id": "ID_U09_0035",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Kamulaştırma ilk defa hangi anayasamız ile statü kazanmıştır?",
      "secenekler": ["1876 Kanun-i Esasi", "1924 Anayasası 1937 değişikliği", "1961 Anayasası 1971 değişikliği", "1982 Anayasası", "1982 Anayasası 2001 değişikliği"],
      "cevap": "B",
      "aciklama": "Kamulaştırma anayasal düzeyde ilk kez 1924 Anayasasının 1937 değişikliğiyle düzenlenmiştir."
    },
    {
      "id": "ID_U09_0036",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamulaştırma türlerinden biri değildir?",
      "secenekler": ["Özel kişiler lehine kamulaştırma", "Kısmen kamulaştırma", "Acele kamulaştırma", "Trampa yolu ile kamulaştırma", "Şirketlerin kamulaştırması"],
      "cevap": "E",
      "aciklama": "2942'de özel kişiler lehine, kısmen, acele ve trampa yoluyla kamulaştırma düzenlenir; \"şirketlerin kamulaştırması\" devletleştirme konusudur."
    },
    {
      "id": "ID_U09_0037",
      "unite": 9,
      "zorluk": "orta",
      "soru": "I. Maden arama ruhsatına sahip olanlar\nII. Kamu hizmeti imtiyazcıları\nIII. Petrol arama ruhsatı sahipleri\nIV. Kamu yararına çalışan dernekler\nYukarıdakilerden hangilerinin lehine kamulaştırma yapılabilir?",
      "secenekler": ["I – II", "I – III", "I – II – III", "Yalnız IV", "I – IV"],
      "cevap": "C",
      "aciklama": "2942 m.3: Kanunla yetkili kılınan özel hukuk kişileri (maden, petrol ve imtiyaz sahipleri) lehine kamulaştırma yapılabilir."
    },
    {
      "id": "ID_U09_0038",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamulaştırma işleminin unsurlarından değildir?",
      "secenekler": ["Yetki", "Sebep ve amaç", "Amaç", "Şekil", "Usul"],
      "cevap": "E",
      "aciklama": "Kitabın anahtarına göre kamulaştırma bir idari işlem olarak yetki, şekil, sebep, konu ve amaç unsurlarından oluşur."
    },
    {
      "id": "ID_U09_0039",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamulaştırma sürecinin temel aşamalarından biri değildir?",
      "secenekler": ["Yeterli ödeneğin temin edilmesi", "Kamu yararı kararının alınması", "Kamu yararı kararının onaylanması", "Kamulaştırma kararının alınması", "Kamulaştırmanın idari yargı organlarınca denetlenmesi"],
      "cevap": "E",
      "aciklama": "Yargısal denetim kamulaştırma sürecinin bir aşaması değildir; ilgililer isterse dava açar."
    },
    {
      "id": "ID_U09_0040",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Köy yararına kamulaştırmalarda kamu yararı kararını aşağıdaki mercilerden hangisi verir?",
      "secenekler": ["Köy ihtiyar kurulu", "İl encümeni", "TBMM", "Muhtar", "Kaymakam"],
      "cevap": "A",
      "aciklama": "2942 m.5: Köyler için kamu yararı kararını köy ihtiyar kurulu verir; kaymakam onaylar."
    },
    {
      "id": "ID_U09_0041",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamulaştırma bedelinin peşin ödenmesinin istisnalarından biri değildir?",
      "secenekler": ["Tarım reformunun uygulanması", "Yeni ormanların yetiştirilmesi", "Turizm", "Kıyıların korunması", "Toprağı doğrudan doğruya işleten küçük çiftçilere"],
      "cevap": "E",
      "aciklama": "Anayasa m.46: Küçük çiftçiye ait toprakların bedeli her halde peşin ödenir; diğer sayılanlarda taksit mümkündür."
    },
    {
      "id": "ID_U09_0042",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Kamulaştırma işlemine karşı kaç gün içinde dava açılabilir?",
      "secenekler": ["60", "45", "30", "15", "10"],
      "cevap": "C",
      "aciklama": "2942 m.14: Kamulaştırma işlemine karşı 30 gün içinde idari yargıda dava açılabilir."
    },
    {
      "id": "ID_U09_0043",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Özelleştirme 1982 Anayasası'na hangi yıl yapılan değişiklik ile girmiştir?",
      "secenekler": ["1989", "1995", "1999", "2001", "2002"],
      "cevap": "C",
      "aciklama": "4446 sayılı Kanunla 1999'da Anayasa m.47'ye eklenmiştir."
    },
    {
      "id": "ID_U09_0044",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Özel mülkiyette bulunan taşınmazların mülkiyetinin idareye cebren geçirilmesini öngören bir usuldür. Yukarıdaki açıklama aşağıdaki kavramlardan hangisinin açıklamasıdır?",
      "secenekler": ["İstimval", "İstimlak", "Özelleştirme", "İmtiyaz", "İstilzam"],
      "cevap": "B",
      "aciklama": "İstimlak kamulaştırmanın eski adıdır."
    },
    {
      "id": "ID_U09_0045",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi bir tahsis işlemiyle kamu malı niteliği kazanır?",
      "secenekler": ["Yollar", "Kıyılar", "Madenler", "Göller", "Ormanlar"],
      "cevap": "A",
      "aciklama": "Yollar insan eliyle yapılıp tahsisle kamu malı olur (yapay kamu malı); kıyı, göl, maden ve ormanlar doğal kamu malıdır."
    },
    {
      "id": "ID_U09_0046",
      "unite": 9,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi kamulaştırmanın temel ilkelerinden değildir?",
      "secenekler": ["Devlet veya diğer kamu tüzel kişileri tarafından yapılabilir.", "Kamu zararı sebebiyle yapılır.", "Ancak özel mülkiyette bulunan mallar hakkında yapılabilir.", "Ancak taşınmaz mallar hakkında yapılabilir.", "Malın karşılığının ödenmesiyle yapılır."],
      "cevap": "B",
      "aciklama": "Kamulaştırma kamu yararı amacıyla yapılır."
    },
    {
      "id": "ID_U09_0047",
      "unite": 9,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi kamulaştırmanın temel ilkeleri arasında yer almaz?",
      "secenekler": ["Taşınır ve taşınmaz mallar hakkında yapılabilir.", "Malın karşılığının ödenmesiyle yapılır.", "Malın gerçek karşılığının ödenmesiyle yapılır.", "Malın gerçek karşılığının peşin olarak ödenmesiyle yapılır.", "Malın gerçek karşılığının nakden ödenmesiyle yapılır."],
      "cevap": "A",
      "aciklama": "Kamulaştırma yalnızca taşınmazlar hakkında yapılır."
    },
    // ============================================================
    // ÜNİTE 10 – İDARENIN SORUMLULUĞU VE İDARI YARGI
    // ============================================================
    {
      "id": "ID_U10_0001",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "İdari yargıda açılan davalara ne ad verilir?",
      "secenekler": ["Tam yargı davası", "İptal davası", "İdari dava", "Adli dava", "Temyiz"],
      "cevap": "C",
      "aciklama": "2577 m.2: İdari davalar iptal, tam yargı ve idari sözleşme davalarıdır; hepsinin üst kavramı \"idari dava\"dır."
    },
    {
      "id": "ID_U10_0002",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "I. İdarenin fiili\nII. Zarar\nIII. İlliyet (nedensellik) bağı\nYukarıdakilerden hangisi idarenin mali sorumluluğunu doğuran unsurlardandır?",
      "secenekler": ["Yalnız I", "Yalnız II", "Yalnız III", "I ve III", "I, II ve III"],
      "cevap": "E",
      "aciklama": "İdarenin sorumluluğu için idari faaliyet (fiil), zarar ve aralarında illiyet bağı gerekir."
    },
    {
      "id": "ID_U10_0003",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "İdarenin üzerine düşen görevi gereği gibi yerine getirmemesi nasıl tanımlanır?",
      "secenekler": ["Sorumluluk", "Yeknesaklık", "Hizmet kusuru", "Fiil", "Zarar"],
      "cevap": "C",
      "aciklama": "Hizmet kusuru, kamu hizmetinin kuruluşunda veya işleyişinde ortaya çıkan aksaklıktır."
    },
    {
      "id": "ID_U10_0004",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "Aşağıdakilerden hangisi hizmet kusurunun özelliklerinden biri değildir?",
      "secenekler": ["Hizmet kusuru anonimdir.", "Hizmet kusuru bağımsızdır.", "Hizmet kusuru asli ve birinci derecede sorumluluktur.", "Hizmet kusuru geneldir.", "Hizmet kusuru katıdır."],
      "cevap": "E",
      "aciklama": "Hizmet kusuru anonim, asli, bağımsız ve genel bir sorumluluk türüdür; \"katı\" olarak nitelenmez."
    },
    {
      "id": "ID_U10_0005",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "Sorumluluğun kalkmasında, sel felaketi gibi zorlayıcı nedenlerin varlığı halinde özel hukukta olduğu gibi idare hukukunda da nedensellik bağı kesilir. Bu durum aşağıdakilerden hangisinin açıklamasıdır?",
      "secenekler": ["Üçüncü kişinin kusuru", "Beklenmeyen durumlar", "Zorlayıcı nedenler", "Zarar görenin kusuru", "Sorumluluk kalkmaz"],
      "cevap": "C",
      "aciklama": "Mücbir sebep (zorlayıcı neden) illiyet bağını keserek sorumluluğu kaldırır."
    },
    {
      "id": "ID_U10_0006",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "Hizmet gereği gibi yapılmamışsa ya da başka bir deyişle beklenen özen, dikkat ve kalitede sunulmamışsa aşağıdakilerden hangisi söz konusudur?",
      "secenekler": ["Hizmetin geç işlemesi", "Hizmetin hiç işlememesi", "Hizmetin kötü işlemesi", "İhmal", "Sorumsuzluk"],
      "cevap": "C",
      "aciklama": "Hizmet kusurunun görünüş biçimleri: hizmetin kötü işlemesi, hiç işlememesi ve geç işlemesidir."
    },
    {
      "id": "ID_U10_0007",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "Cephaneliğin patlaması sonunda ölenlerin yakınlarına tazminat ödenmesi aşağıdakilerden hangisine örnektir?",
      "secenekler": ["Tehlike ilkesi", "Sosyal risk", "Fedakârlığın denkleştirilmesi ilkesi", "Mesleki risk", "Mesleki kabul"],
      "cevap": "A",
      "aciklama": "Tehlikeli faaliyet ve araçlardan doğan zararlar kusursuz sorumluluğun tehlike (risk) ilkesine göre karşılanır."
    },
    {
      "id": "ID_U10_0008",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "Terör eyleminden zarar görmüş kişinin zararının idarece karşılanması hangi ilkeye göre yapılır?",
      "secenekler": ["Tehlike ilkesi", "Sosyal risk", "Fedakârlığın denkleştirilmesi ilkesi", "Mesleki risk", "Dayanışma"],
      "cevap": "B",
      "aciklama": "Terör gibi toplumsal olaylardan doğan zararlar sosyal risk ilkesine göre karşılanır (5233 sayılı Kanun)."
    },
    {
      "id": "ID_U10_0009",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "Türk öğretisi ve yargı kararlarında \"hak ve nasafet ilkesi\" olarak nitelenen, bazı şahısların diğerlerine nazaran daha özel ve sıradışı bir zarara uğraması halinde uygulanan, en belirgin uygulama alanı kamulaştırma olan ilke hangisidir?",
      "secenekler": ["Tehlike ilkesi", "Sosyal risk", "Fedakârlığın denkleştirilmesi ilkesi", "Mesleki risk", "Kamulaştırma"],
      "cevap": "C",
      "aciklama": "Fedakârlığın denkleştirilmesi (kamu külfetleri karşısında eşitlik) ilkesidir."
    },
    {
      "id": "ID_U10_0010",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "Ameliyat edilmesi gereken bir hastanın ameliyatının ilgisizlik yüzünden gecikmesi veya bir memurun terfiinin gecikmesi nedeniyle oluşan zararlar aşağıdakilerden hangisine örnektir?",
      "secenekler": ["Hizmetin geç işlemesi", "Hizmetin hiç işlememesi", "Hizmetin kötü işlemesi", "İhmal", "Sorumsuzluk"],
      "cevap": "A",
      "aciklama": "Hizmetin geç işlemesi bir hizmet kusuru türüdür."
    },
    {
      "id": "ID_U10_0011",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "İdarenin tüm eylem, görev ve işlemlerini ifade etmek için kullanılan kavram aşağıdakilerden hangisidir?",
      "secenekler": ["Görev", "Kusur", "Hizmet", "İlliyet", "Sorumluluk"],
      "cevap": "C",
      "aciklama": "Hizmet kavramı idarenin tüm faaliyetlerini kapsar."
    },
    {
      "id": "ID_U10_0012",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "- Kamu görevlisinin suç niteliğindeki davranışları\n- Yargı kararlarına uymama\n- Kamu görevlisinin kötü niyetli davranışı\nYukarıda verilen fiiller aşağıdakilerden hangisiyle ilgilidir?",
      "secenekler": ["Hizmetin kötü işlemesi", "Kişisel kusur", "Hizmetin hiç işlememesi", "Hizmetin geç işlemesi", "Sosyal risk"],
      "cevap": "B",
      "aciklama": "Görevle ilgisi kopmuş, ağır ve kasıtlı davranışlar kişisel kusurdur."
    },
    {
      "id": "ID_U10_0013",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Askerî Yüksek İdare Mahkemesi (AYİM) ne zaman kaldırıldı?",
      "secenekler": ["2017", "2016", "2015", "2014", "2013"],
      "cevap": "A",
      "aciklama": "6771 sayılı Kanunla (2017 Anayasa değişikliği) AYİM ve Askerî Yargıtay kaldırılmıştır."
    },
    {
      "id": "ID_U10_0014",
      "unite": 10,
      "zorluk": "zor",
      "soru": "İdarenin yerine getirmesi gereken bir işlemi hareketsiz kalarak ... günde yerine getirmemesi ya da ... gün içinde vermesi gereken yanıtı vermemesi o isteği reddettiği anlamına gelir ve buna idare hukukunda \"zımni ret\" denir.\nYukarıdaki boşluğa güncel olarak aşağıdakilerden hangisi gelmelidir?",
      "secenekler": ["15", "30", "45", "60", "90"],
      "cevap": "B",
      "aciklama": "2577 m.10: Süre 2016'da 6745 sayılı Kanunla 60 günden 30 güne indirilmiştir (kitapta 60 gün yazar)."
    },
    {
      "id": "ID_U10_0015",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Şura-yı Devlet aşağıdakilerden hangisinin eski adıdır?",
      "secenekler": ["Bakanlar Kurulu", "Hükümet", "Danıştay", "Sayıştay", "Yargıtay"],
      "cevap": "C",
      "aciklama": "Danıştay 1868'de Şura-yı Devlet adıyla kurulmuştur."
    },
    {
      "id": "ID_U10_0016",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Hizmet kusurunun özellikleri için aşağıdakilerden hangisi söylenemez?",
      "secenekler": ["Hizmet kusuru anonimdir.", "Hizmet kusuru bağımsızdır.", "Hizmet kusuru asli ve birinci derecede sorumluluktur.", "Hizmet kusuru özeldir.", "Hizmet kusuru esnektir."],
      "cevap": "D",
      "aciklama": "Hizmet kusuru genel bir sorumluluk türüdür; \"özel\" olarak nitelenmez."
    },
    {
      "id": "ID_U10_0017",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "İdare mahkemelerinin kararlarına karşı temyiz mercii aşağıdakilerden hangisidir?",
      "secenekler": ["Yargıtay", "İdare mahkemesi", "Anayasa Mahkemesi", "Uyuşmazlık Mahkemesi", "Danıştay"],
      "cevap": "E",
      "aciklama": "2016'dan beri idare mahkemesi kararlarına karşı önce bölge idare mahkemesine istinaf, kanunda sayılan hallerde Danıştaya temyiz yoluna gidilir (2577 m.45–46)."
    },
    {
      "id": "ID_U10_0018",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "Genelkurmay Başkanı göreviyle ilgili suçtan dolayı nerede yargılanır?",
      "secenekler": ["Yargıtay", "Ankara Ağır Ceza Mahkemesi", "Danıştay", "Yüce Divan", "Bölge Adliye Mahkemesi"],
      "cevap": "D",
      "aciklama": "Anayasa m.148: Genelkurmay Başkanı ve kuvvet komutanları görevleriyle ilgili suçlardan Yüce Divanda yargılanır."
    },
    {
      "id": "ID_U10_0019",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "Yargıtay üyesi Yargıtay üyeliğine kaç defa seçilebilir?",
      "secenekler": ["1", "2", "3", "4", "Sınırlama yoktur."],
      "cevap": "A",
      "aciklama": "6723 sayılı Kanunla (2016) Yargıtay ve Danıştay üyeleri on iki yıl için seçilir ve bir kez seçilebilir."
    },
    {
      "id": "ID_U10_0020",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "Sayıştay üyelerinin tamamı ... tarafından gizli oyla seçilir. Yukarıdaki boşluğa aşağıdakilerden hangisi gelmelidir?",
      "secenekler": ["TBMM", "Danıştay", "Cumhurbaşkanı", "Adalet Bakanlığı", "Kalkınma Bakanlığı"],
      "cevap": "A",
      "aciklama": "Anayasa m.160 ve 6085 sayılı Kanun: Sayıştay Başkan ve üyeleri TBMM Genel Kurulunca gizli oyla seçilir."
    },
    {
      "id": "ID_U10_0021",
      "unite": 10,
      "zorluk": "kolay",
      "soru": "Sayıştay Başkanının görev süresi kaç yıldır?",
      "secenekler": ["12", "10", "7", "5", "4"],
      "cevap": "D",
      "aciklama": "6085 sayılı Sayıştay Kanunu: Sayıştay Başkanı TBMM tarafından beş yıl için seçilir."
    },
    {
      "id": "ID_U10_0022",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Vergi ve idare mahkemeleri kararlarına karşı yapılan istinaf başvurularını inceleyerek uyuşmazlık hakkında karar veren mahkeme aşağıdakilerden hangisidir?",
      "secenekler": ["Danıştay", "Yargıtay", "Bölge idare mahkemesi", "Uyuşmazlık Mahkemesi", "Anayasa Mahkemesi"],
      "cevap": "C",
      "aciklama": "2577 m.45: İstinaf başvurularını bölge idare mahkemeleri inceler."
    },
    {
      "id": "ID_U10_0023",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Yargıtay daire başkanları kaç yıllığına seçilirler?",
      "secenekler": ["1", "2", "4", "7", "12"],
      "cevap": "C",
      "aciklama": "2797 sayılı Yargıtay Kanunu: Daire başkanları dört yıl için seçilir."
    },
    {
      "id": "ID_U10_0024",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Türkiye Cumhuriyeti Anayasası ile görevlendirilmiş yüksek idare mahkemesi, danışma ve inceleme mercii olan kurum aşağıdakilerden hangisidir?",
      "secenekler": ["Anayasa Mahkemesi", "Yargıtay", "Uyuşmazlık Mahkemesi", "Danıştay", "Sayıştay"],
      "cevap": "D",
      "aciklama": "Anayasa m.155: Danıştay idari mahkemelerce verilen kararların son inceleme mercii ve danışma-inceleme merciidir."
    },
    {
      "id": "ID_U10_0025",
      "unite": 10,
      "zorluk": "orta",
      "soru": "İdarenin kişilerin temel hak ve özgürlüklerine ve özellikle mülkiyet hakkına hiçbir yasal dayanağı olmaksızın yaptığı ağır müdahaleye ne ad verilir?",
      "secenekler": ["Hizmet kusuru", "İstimval", "Fiili yol", "Kamulaştırma", "Fuzuli işgal"],
      "cevap": "C",
      "aciklama": "Fiili yol, idarenin hukuki dayanaktan tamamen yoksun ağır eylemidir; uyuşmazlık adli yargıda görülür."
    },
    {
      "id": "ID_U10_0026",
      "unite": 10,
      "zorluk": "orta",
      "soru": "1982 Anayasası'nda hangi yıl yapılan değişiklikle Genelkurmay Başkanı Anayasa Mahkemesi'nde Yüce Divan sıfatıyla yargılanabilir hale gelmiştir?",
      "secenekler": ["2001", "2003", "2004", "2007", "2010"],
      "cevap": "E",
      "aciklama": "2010 değişikliğiyle (5982 s.K.) Genelkurmay Başkanı ve kuvvet komutanları Yüce Divan kapsamına alınmıştır."
    },
    {
      "id": "ID_U10_0027",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Kanunların şekil bakımından denetimine ne kadar süre içinde Anayasa Mahkemesine iptal davası açılabilir?",
      "secenekler": ["7 gün", "10 gün", "15 gün", "30 gün", "60 gün"],
      "cevap": "B",
      "aciklama": "Anayasa m.148: Şekil bozukluğuna dayalı iptal davası kanunun yayımından itibaren on gün içinde açılabilir."
    },
    {
      "id": "ID_U10_0028",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Bir mahkemede görülmekte olan bir davanın karara bağlanmasının o davada uygulanacak hukuk normunun anayasaya uygun olup olmaması konusunda yapılan denetime ne ad verilir?",
      "secenekler": ["Soyut norm denetimi", "İptal davası", "Somut norm denetimi", "Def'i", "Yargılanmanın yenilenmesi"],
      "cevap": "C",
      "aciklama": "Anayasa m.152: İtiraz yolu (somut norm denetimi)."
    },
    {
      "id": "ID_U10_0029",
      "unite": 10,
      "zorluk": "orta",
      "soru": "1864 yılında \"Divan-ı Muhasebat\" ismiyle kurulan kuruluş aşağıdakilerden hangisidir?",
      "secenekler": ["Danıştay", "Yargıtay", "DDK", "Sayıştay", "MGK"],
      "cevap": "D",
      "aciklama": "Sayıştay 1862–1864'te Divan-ı Muhasebat adıyla kurulmuştur."
    },
    {
      "id": "ID_U10_0030",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi idarenin sorumlu tutulabilmesi için idarenin eyleminden kaynaklanan zararın taşıması gereken özelliklerden biri değildir?",
      "secenekler": ["Zararın gerçekten var olması ve belirgin olması", "Zararın özel nitelikte olması", "Zararın kesinlik taşıması", "Zararın hukuk kurallarınca korunan bir hakkı ihlal edici olması", "Zararın genel nitelikte olması"],
      "cevap": "E",
      "aciklama": "Tazmin edilebilir zarar gerçek, kesin, özel ve hukuken korunan bir hakkı ihlal eden nitelikte olmalıdır."
    },
    {
      "id": "ID_U10_0031",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Zımni retteki süre güncel olarak kaç gündür?",
      "secenekler": ["60", "45", "30", "15", "7"],
      "cevap": "C",
      "aciklama": "2577 m.10: 6745 sayılı Kanunla (2016) süre 60 günden 30 güne indirilmiştir (kitapta 60 gün yazar)."
    },
    {
      "id": "ID_U10_0032",
      "unite": 10,
      "zorluk": "orta",
      "soru": "İdare mahkemelerinde genel dava açma süresi kaç gündür?",
      "secenekler": ["60", "45", "30", "15", "7"],
      "cevap": "A",
      "aciklama": "2577 m.7: Dava açma süresi özel kanunlarda ayrı süre gösterilmeyen hallerde Danıştayda ve idare mahkemelerinde altmış, vergi mahkemelerinde otuz gündür."
    },
    {
      "id": "ID_U10_0033",
      "unite": 10,
      "zorluk": "orta",
      "soru": "İdari yargı kolunun en yüksek organı hangisidir?",
      "secenekler": ["Yargıtay", "Danıştay", "İdare mahkemeleri", "Vergi mahkemeleri", "Bölge idare mahkemeleri"],
      "cevap": "B",
      "aciklama": "Anayasa m.155: Danıştay idari yargının en yüksek mahkemesidir."
    },
    {
      "id": "ID_U10_0034",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Danıştay kaç yılında kurulmuştur?",
      "secenekler": ["1789", "1639", "1839", "1868", "1979"],
      "cevap": "D",
      "aciklama": "Danıştay 1868'de Şura-yı Devlet adıyla kurulmuştur."
    },
    {
      "id": "ID_U10_0035",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Sayıştay genel ve katma bütçeli (genel yönetim kapsamındaki) kuruluşları kim adına denetlemektedir?",
      "secenekler": ["Bağımsız ve tarafsız mahkemeler", "Cumhurbaşkanı", "Türk Milleti", "TBMM", "Anayasa"],
      "cevap": "D",
      "aciklama": "Anayasa m.160: Sayıştay bu denetimi TBMM adına yapar."
    },
    {
      "id": "ID_U10_0036",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Danıştay için verilen bilgilerden hangisi doğru değildir?",
      "secenekler": ["Anayasada sayılan yüksek mahkemelerdendir.", "Devletin bir danışma ve inceleme organıdır.", "Eski adı Şura-yı Devlet'tir.", "İdare ve vergi mahkemelerinin temyiz merciidir.", "1924 Anayasası ile kurulmuştur."],
      "cevap": "E",
      "aciklama": "Danıştay 1868'de Şura-yı Devlet adıyla kurulmuştur."
    },
    {
      "id": "ID_U10_0037",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Danıştay üyelerinin 3/4'lük kısmı HSK tarafından idare ve vergi mahkemeleri hâkim ve savcıları arasından seçilirken kalan 1/4'lük kısım kim tarafından seçilmektedir?",
      "secenekler": ["Adalet Bakanı", "Cumhurbaşkanı", "TBMM", "Yargıtay", "Meclis Başkanı"],
      "cevap": "B",
      "aciklama": "Anayasa m.155: Danıştay üyelerinin dörtte biri Cumhurbaşkanınca seçilir."
    },
    {
      "id": "ID_U10_0038",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Hâkimler ve Savcılar Kurulunun üye sayısı aşağıdakilerden hangisidir?",
      "secenekler": ["22", "15", "17", "13", "24"],
      "cevap": "D",
      "aciklama": "Anayasa m.159 (2017): HSK 13 üyeden oluşur; 4'ünü Cumhurbaşkanı, 7'sini TBMM seçer; Adalet Bakanı ve bakan yardımcısı tabii üyedir."
    },
    {
      "id": "ID_U10_0039",
      "unite": 10,
      "zorluk": "zor",
      "soru": "Millî Eğitim Bakanlığı ile ÖSYM tarafından yapılan merkezi ve ortak sınavlar, bu sınavlara ilişkin iş ve işlemler ile sınav sonuçları hakkında açılan davalara ilişkin yargılama usulünde dava açma süresi kaç gündür?",
      "secenekler": ["7", "10", "30", "45", "60"],
      "cevap": "B",
      "aciklama": "2577 m.20/A: İvedi yargılama usulüne tabi bu davalarda dava açma süresi on gündür."
    },
    {
      "id": "ID_U10_0040",
      "unite": 10,
      "zorluk": "orta",
      "soru": "I. Hizmetin kötü işlemesi\nII. Hizmetin geç işlemesi\nIII. Hizmetin hiç işlememesi\nYukarıdakilerden hangisi hizmet kusurunun somut görünümlerindendir?",
      "secenekler": ["Yalnız I", "Yalnız II", "Yalnız III", "I – II – III", "I – III"],
      "cevap": "D",
      "aciklama": "Hizmet kusurunun üç görünümü de sayılmıştır."
    },
    {
      "id": "ID_U10_0041",
      "unite": 10,
      "zorluk": "orta",
      "soru": "Kamyonla nakledilen fındık çuvallarının elektrik tellerine teması sonucu çıkan yangında davacının uğradığı zararın, yerden yüksekliği en az 6 metre olması gereken elektrik tellerini yerden 4 metre yüksekten geçiren idarenin tazmin sorumluluğu vardır. Bu örnek doğrultusunda idare hizmet kusurunun somut görünümlerinden hangisini yapmıştır?",
      "secenekler": ["Hizmetin hiç işlememesi", "Hizmetin kötü işlemesi", "Hizmetin geç işlemesi", "Kişisel kusur vardır.", "Burada idarenin mali sorumluluğu yoktur."],
      "cevap": "B",
      "aciklama": "Hizmetin kurallara aykırı ve özensiz yürütülmesi \"kötü işleme\"dir."
    },
    {
      "id": "ID_U10_0042",
      "unite": 10,
      "zorluk": "orta",
      "soru": "İdarenin eylemi ile uğranılan zarar arasında illiyet bağı olmadığı halde kusursuz sorumluluğun olduğu tek durum aşağıdakilerden hangisidir?",
      "secenekler": ["Mesleki risk", "Tehlike ilkesi", "Sosyal risk", "İdarenin tehlikeli faaliyetleri", "Kamu külfetleri karşısında eşitlik"],
      "cevap": "C",
      "aciklama": "Sosyal risk ilkesinde (terör, toplumsal olaylar) zarar idarenin eylemine bağlı olmasa da devlet zararı karşılar."
    },
    {
      "id": "ID_U10_0043",
      "unite": 10,
      "zorluk": "orta",
      "soru": "I. Mücbir sebepler\nII. Beklenmeyen haller\nIII. Zarar görenin kusuru\nIV. 3. kişinin kusuru\nV. Meşru müdafaa\nYukarıdakilerden hangisi veya hangileri idarenin sorumluluğunu azaltan ya da ortadan kaldıran durumlardan biri değildir?",
      "secenekler": ["I – II", "I – II – III", "I – II – III – IV", "Yalnız V", "Yalnız IV"],
      "cevap": "D",
      "aciklama": "İlliyet bağını kesen veya zayıflatan haller mücbir sebep, beklenmeyen hal, zarar görenin ve üçüncü kişinin kusurudur."
    },
    {
      "id": "ID_U10_0044",
      "unite": 10,
      "zorluk": "zor",
      "soru": "İdari Yargılama Usulü Kanunu'na göre dava açma süresi özel kanunlarında ayrı süre gösterilmeyen hallerde vergi mahkemelerinde kaç gündür?",
      "secenekler": ["7", "15", "30", "45", "60"],
      "cevap": "C",
      "aciklama": "2577 m.7: Vergi mahkemelerinde dava açma süresi 30 gündür (Danıştay ve idare mahkemelerinde 60 gün). Kitabın anahtarındaki E (60) hatalıdır."
    },
    {
      "id": "ID_U10_0045",
      "unite": 10,
      "zorluk": "zor",
      "soru": "İdari Yargılama Usulü Kanunu'na göre sürelerle ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Süreler tebliğ, yayın veya ilan tarihini izleyen günden itibaren işlemeye başlar.", "Tatil günleri sürelere dahildir.", "Sürenin son günü tatil gününe rastlarsa süre tatil gününü izleyen çalışma gününün bitimine kadar uzar.", "Bu Kanunda yazılı sürelerin bitmesi çalışmaya ara verme zamanına rastlarsa bu süreler ara vermenin sona erdiği günü izleyen tarihten itibaren 7 gün uzamış sayılır.", "Bu Kanunda yazılı sürelerin bitmesi çalışmaya ara verme zamanına rastlarsa bu süreler ara vermenin sona erdiği günü izleyen tarihten itibaren 15 gün uzamış sayılır."],
      "cevap": "E",
      "aciklama": "2577 m.8: Uzama süresi 7 gündür; diğer ifadeler doğrudur. Kitabın anahtarındaki C hatalıdır."
    },
    {
      "id": "ID_U10_0046",
      "unite": 10,
      "zorluk": "zor",
      "soru": "İdari eylem ve işlemlerden dolayı kişisel hakları doğrudan zarar görenler tarafından açılan davalara idari yargıda ne ad verilir?",
      "secenekler": ["İptal davaları", "Menfi tespit davası", "Tazminat davası", "Tam yargı davası", "Müspet tespit davası"],
      "cevap": "D",
      "aciklama": "2577 m.2: Kişisel hakları doğrudan muhtel olanlarca açılan davalar tam yargı davalarıdır."
    },
    // ============================================================
    // ÜNİTE 11 – ÜST KADEME YÖNETICILERI, KURULLAR VE BAĞIMSIZ İDARI OTORITELER
    // ============================================================
    {
      "id": "ID_U11_0001",
      "unite": 11,
      "zorluk": "kolay",
      "soru": "Bakan yardımcılarının görevlendirilmesi aşağıdakilerden hangisiyle olur?",
      "secenekler": ["Genel seçim", "Yerel seçim", "Cumhurbaşkanı ataması", "Cumhurbaşkanı onayı", "TBMM Genel Kurul seçimi"],
      "cevap": "C",
      "aciklama": "3 sayılı CBK: Bakan yardımcıları Cumhurbaşkanı kararıyla atanır."
    },
    {
      "id": "ID_U11_0002",
      "unite": 11,
      "zorluk": "kolay",
      "soru": "Sayıştay Başsavcısının görev süresi kaç yıldır?",
      "secenekler": ["1", "2", "3", "4", "5"],
      "cevap": "D",
      "aciklama": "3 sayılı CBK'ya göre Sayıştay Başsavcısı dört yıl için atanır."
    },
    {
      "id": "ID_U11_0003",
      "unite": 11,
      "zorluk": "kolay",
      "soru": "Türkiye Cumhuriyet Merkez Bankası Başkanının görev süresi kaç yıldır?",
      "secenekler": ["1", "2", "3", "4", "5"],
      "cevap": "D",
      "aciklama": "3 sayılı CBK'ya göre Merkez Bankası Başkanı dört yıl için atanır."
    },
    {
      "id": "ID_U11_0004",
      "unite": 11,
      "zorluk": "kolay",
      "soru": "Millî İstihbarat Teşkilatı Başkanının görevlendirilmesi aşağıdakilerden hangisiyle olur?",
      "secenekler": ["Genel seçim", "Yerel seçim", "Cumhurbaşkanı ataması", "Cumhurbaşkanı onayı", "TBMM Genel Kurul seçimi"],
      "cevap": "C",
      "aciklama": "MİT Başkanı Cumhurbaşkanınca atanır."
    },
    {
      "id": "ID_U11_0005",
      "unite": 11,
      "zorluk": "kolay",
      "soru": "Millî Güvenlik Kurulu Genel Sekreterinin görevlendirilmesi aşağıdakilerden hangisiyle olur?",
      "secenekler": ["Genel seçim", "Yerel seçim", "Cumhurbaşkanı ataması", "Cumhurbaşkanı onayı", "TBMM Genel Kurul seçimi"],
      "cevap": "C",
      "aciklama": "MGK Genel Sekreteri Cumhurbaşkanınca atanır."
    },
    {
      "id": "ID_U11_0006",
      "unite": 11,
      "zorluk": "kolay",
      "soru": "Polis Akademisi Başkanının görevlendirilmesi aşağıdakilerden hangisiyle olur?",
      "secenekler": ["Genel seçim", "Yerel seçim", "Cumhurbaşkanı ataması", "Cumhurbaşkanı onayı", "TBMM Genel Kurul seçimi"],
      "cevap": "D",
      "aciklama": "3 sayılı CBK'ya göre Polis Akademisi Başkanı (bakan önerisiyle) Cumhurbaşkanı onayıyla atanır."
    },
    {
      "id": "ID_U11_0007",
      "unite": 11,
      "zorluk": "kolay",
      "soru": "İl emniyet müdürlerinin görevlendirilmesi aşağıdakilerden hangisiyle olur?",
      "secenekler": ["Genel seçim", "Yerel seçim", "Cumhurbaşkanı ataması", "Cumhurbaşkanı onayı", "TBMM Genel Kurul seçimi"],
      "cevap": "D",
      "aciklama": "3 sayılı CBK'ya göre il emniyet müdürleri Cumhurbaşkanı onayıyla atanır."
    },
    {
      "id": "ID_U11_0008",
      "unite": 11,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi bağımsız düzenleyici ve denetleyici kurum değildir?",
      "secenekler": ["RTÜK", "SPK", "BDDK", "DDK", "Rekabet Kurumu"],
      "cevap": "D",
      "aciklama": "DDK Cumhurbaşkanlığına bağlı bir denetim organıdır; bağımsız idari otorite değildir."
    },
    {
      "id": "ID_U11_0009",
      "unite": 11,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi bağımsız idari otoritelerden (üst kurul) değildir?",
      "secenekler": ["EPDK", "RTÜK", "BDDK", "SPK", "TBMM"],
      "cevap": "E",
      "aciklama": "TBMM yasama organıdır."
    },
    {
      "id": "ID_U11_0010",
      "unite": 11,
      "zorluk": "zor",
      "soru": "\"Kamu hizmet kuruluşları; idari kamu kurumları, sosyal kamu kurumları, bilimsel, teknik ve kültürel kamu kurumları, kamu iktisadi teşebbüsleri (KİT), üst kurullar (düzenleme-denetleme) olarak bölümlere ayrılmaktadır.\" Aşağıdaki eşleşmelerden hangisi yanlıştır?",
      "secenekler": ["Sosyal kamu kurumları – SGK", "İdari kamu kurumları – RTÜK", "Bilimsel, teknik ve kültürel kamu kurumları – TÜBİTAK", "Kamu iktisadi teşebbüsleri – TC Ziraat Bankası", "Üst kurullar – Sermaye Piyasası Kurulu (SPK)"],
      "cevap": "B",
      "aciklama": "RTÜK bağımsız bir üst kuruldur (düzenleyici ve denetleyici kurum)."
    }
  ],
  kartlar: [
    {"id": "ID_K0001", "soru": "Millî bir kamu hizmetinin yürütülmesi amacıyla valinin merkez adına, ancak merkeze danışmadan karar almasına ne ad verilir?", "cevap": "Yetki genişliği", "aciklama": "Anayasa m.126."},
    {"id": "ID_K0002", "soru": "Yargıtay Cumhuriyet Başsavcısı kim tarafından seçilir?", "cevap": "Cumhurbaşkanı (Yargıtay Genel Kurulunun gösterdiği beş aday arasından)", "aciklama": "Anayasa m.154."},
    {"id": "ID_K0003", "soru": "İllerin idaresi hangi esasa dayanır?", "cevap": "Yetki genişliği", "aciklama": "Anayasa m.126."},
    {"id": "ID_K0004", "soru": "Tüm kamu kurum ve kuruluşları için en üst hukuki norm kaynağı hangisidir?", "cevap": "Anayasa"},
    {"id": "ID_K0005", "soru": "Belirli sınırlar çerçevesinde anayasa değiştirmesine izin verilen iktidara ne ad verilir?", "cevap": "Tali kurucu iktidar"},
    {"id": "ID_K0006", "soru": "Yerel yönetimlerin kendi aralarında birlik kurmaları hangi merciin iznine bağlıdır?", "cevap": "Cumhurbaşkanı", "aciklama": "Anayasa m.127."},
    {"id": "ID_K0007", "soru": "YÖK'ün üniversiteler üzerindeki denetimine ne ad verilir?", "cevap": "İdari vesayet denetimi"},
    {"id": "ID_K0008", "soru": "Kamu tüzel kişiliği nasıl kurulur?", "cevap": "Ancak kanunla veya Cumhurbaşkanlığı kararnamesiyle", "aciklama": "Anayasa m.123."},
    {"id": "ID_K0009", "soru": "İdari fonksiyonun konusu ve amacı nedir?", "cevap": "Konusu kamu hizmetleri, amacı kamu yararıdır."},
    {"id": "ID_K0010", "soru": "İdare hukukunun özelliklerinden üçünü yazınız.", "cevap": "Genç ve bağımsız bir hukuk dalıdır; tedvin edilmemiştir; içtihatlara dayanır."},
    {"id": "ID_K0011", "soru": "İdare hukukunun yardımcı kaynakları nelerdir?", "cevap": "İçtihat (yargı kararları) ve doktrin"},
    {"id": "ID_K0012", "soru": "Yönetimde bürokrasi ve kırtasiyeciliğe neden olması neyin sakıncasıdır?", "cevap": "Merkezden yönetim"},
    {"id": "ID_K0013", "soru": "İdarenin bütünlüğü ilkesini sağlayan iki araç nedir?", "cevap": "Hiyerarşik denetim ve idari vesayet denetimi", "aciklama": "Anayasa m.123."},
    {"id": "ID_K0014", "soru": "Emekliye sevk nasıl bir işlemdir?", "cevap": "Şart işlem"},
    {"id": "ID_K0015", "soru": "Belirli bir hukuki durumu doğuran, kaldıran ya da değiştiren işlemlere ne ad verilir?", "cevap": "Yapıcı (kurucu) işlem"},
    {"id": "ID_K0016", "soru": "Savunması alınmadan bir memura disiplin cezası verilmesi hangi açıdan hukuka aykırıdır?", "cevap": "Şekil", "aciklama": "Anayasa m.129: Savunma hakkı tanınmadan disiplin cezası verilemez."},
    {"id": "ID_K0017", "soru": "Önemli şekil şartlarından üçünü yazınız.", "cevap": "Yazılılık, gerekçe ve savunma (ayrıca toplantı-karar yeter sayısı, hazırlayıcı işlemler)"},
    {"id": "ID_K0018", "soru": "Sayıştay Başkanı kaç yıllığına seçilir?", "cevap": "5 yıl (TBMM tarafından)", "aciklama": "6085 sayılı Kanun."},
    {"id": "ID_K0019", "soru": "İdarenin işçilerle yaptığı sözleşme hangi kanuna tabidir?", "cevap": "İş Kanunu (4857)"},
    {"id": "ID_K0020", "soru": "Devletin hazine bonosu veya tahvil karşılığı vatandaşına borçlanması olan sözleşme türü hangisidir?", "cevap": "Kamu istikraz sözleşmesi"},
    {"id": "ID_K0021", "soru": "Kâr ve zararı özel kişiye ait olmak üzere bir kamu hizmetinin kişilere gördürülmesi olan sözleşme türü hangisidir?", "cevap": "Kamu hizmeti imtiyaz sözleşmesi"},
    {"id": "ID_K0022", "soru": "Devlete gelir getiren işler ve eylemler hangi kanuna tabidir?", "cevap": "2886 sayılı Devlet İhale Kanunu"},
    {"id": "ID_K0023", "soru": "Hem Kamu İhale Kanununda hem Devlet İhale Kanununda ortak olan ilkeler nelerdir?", "cevap": "Aleniyet, serbest rekabet, sözleşmecide belli yeterlilik aranması ve en uygun bedel"},
    {"id": "ID_K0024", "soru": "Kamulaştırma işlemine karşı ne kadar sürede dava açılabilir?", "cevap": "30 gün", "aciklama": "2942 m.14."},
    {"id": "ID_K0025", "soru": "Olağanüstü hallerde taşınır malların bedeli ödenerek mülkiyetinin veya kullanım hakkının kamuya geçirilmesine ne ad verilir?", "cevap": "İstimval"},
    {"id": "ID_K0026", "soru": "Kamu hizmeti taşıyan bir özel teşebbüsün kamu yararına zorunlu kılınması durumunda kanunla ve gerçek karşılığı ödenerek kamu mülkiyetine geçirilmesine ne ad verilir?", "cevap": "Devletleştirme", "aciklama": "Anayasa m.47."},
    {"id": "ID_K0027", "soru": "Memurların grev yasağı hangi ilke ile ilgilidir?", "cevap": "Süreklilik"},
    {"id": "ID_K0028", "soru": "Kamu mallarının özelliklerinden üçünü yazınız.", "cevap": "Satılamaz/devredilemez, haczedilemez, üzerinde ipotek kurulamaz (ayrıca zamanaşımıyla kazanılamaz)"},
    {"id": "ID_K0029", "soru": "Kamulaştırmanın amacı nedir?", "cevap": "Kamu yararı"},
    {"id": "ID_K0030", "soru": "Kamu hizmetlerinin görülme usulleri nelerdir?", "cevap": "Emanet, müşterek emanet, iltizam, imtiyaz, ruhsat, yap-işlet ve yap-işlet-devret usulleri"},
    {"id": "ID_K0031", "soru": "Yap-işlet-devret en fazla kaç yıl için yapılabilir?", "cevap": "49 yıl", "aciklama": "3996 sayılı Kanun."},
    {"id": "ID_K0032", "soru": "657 sayılı Kanun'a göre kamu hizmetleri hangi personel eliyle gördürülür?", "cevap": "Memurlar, sözleşmeli personel ve işçiler (geçici personel statüsü kaldırılmıştır)", "aciklama": "657 m.4."},
    {"id": "ID_K0033", "soru": "Devlet memurlarına yetişme şartlarına uygun şekilde sınıfları içinde en yüksek derecelere kadar ilerleme olanağı sağlanmasına ne ad verilir?", "cevap": "Kariyer ilkesi", "aciklama": "657 m.3."},
    {"id": "ID_K0034", "soru": "1–10 yıl görev yapmış memurun yıllık izin hakkı ne kadardır?", "cevap": "20 gün (10 yıldan fazla hizmeti olanlar için 30 gün)", "aciklama": "657 m.102."},
    {"id": "ID_K0035", "soru": "İlçede görevli memurlar ve diğer kamu görevlileri hakkında soruşturma izni verme yetkisine sahip merci kimdir?", "cevap": "Kaymakam", "aciklama": "4483 m.3."},
    {"id": "ID_K0036", "soru": "Soruşturma izni verilmesine veya verilmemesine karşı itiraz süresi kararın tebliğinden itibaren ne kadardır?", "cevap": "10 gün", "aciklama": "4483 m.9."},
    {"id": "ID_K0037", "soru": "657 sayılı Kanun'a göre memurlara verilecek disiplin cezaları nelerdir?", "cevap": "Uyarma, kınama, aylıktan kesme, kademe ilerlemesinin durdurulması ve devlet memurluğundan çıkarma", "aciklama": "657 m.125."},
    {"id": "ID_K0038", "soru": "Aylıktan kesme disiplin cezası ne kadar süre sonra sicilden silinir?", "cevap": "10 yıl (uyarma ve kınama 5 yıl)", "aciklama": "657 m.133."},
    {"id": "ID_K0039", "soru": "Memurlarda sicil (performans notu) uygulaması kaç yılında kaldırılmıştır?", "cevap": "2011 (6111 sayılı Kanun)", "aciklama": "Kitapta 2010 yazar."},
    {"id": "ID_K0040", "soru": "Kamu düzeninin unsurları nelerdir?", "cevap": "Güvenlik, dirlik ve esenlik, genel sağlık ve genel ahlak"},
    {"id": "ID_K0041", "soru": "Sayıştay Başkanını kim seçer?", "cevap": "TBMM Genel Kurulu", "aciklama": "Anayasa m.160."},
    {"id": "ID_K0042", "soru": "İdari kolluk ilde hangi merciye bağlıdır?", "cevap": "Valiye", "aciklama": "5442 m.11."},
    {"id": "ID_K0043", "soru": "Genel idari kolluk makamları hangileridir?", "cevap": "Cumhurbaşkanı, İçişleri Bakanı, vali ve kaymakam"},
    {"id": "ID_K0044", "soru": "Genel idari kolluk personeli kimlerden oluşur?", "cevap": "Polis, jandarma, sahil güvenlik (ve çarşı-mahalle bekçileri)"},
    {"id": "ID_K0045", "soru": "1982 Anayasası'na göre kimler yönetmelik çıkarabilir?", "cevap": "Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri", "aciklama": "Anayasa m.124 (kitap bakanlıkları saymaz)."},
    {"id": "ID_K0046", "soru": "Meydan, cadde, sokak vb. ad verme hangi merci tarafından yapılır?", "cevap": "Belediye meclisi", "aciklama": "5393 m.18."},
    {"id": "ID_K0047", "soru": "Cumhurbaşkanlığı Kararnamesi ilk kez hangi anayasa ile gelmiştir?", "cevap": "1982 Anayasası (2017 değişikliği)", "aciklama": "Anayasa m.104/17."},
    {"id": "ID_K0048", "soru": "Anayasada yürütme görev ve yetkisi hangi merciye aittir?", "cevap": "Cumhurbaşkanı", "aciklama": "Anayasa m.8."},
    {"id": "ID_K0049", "soru": "Mahalli idarelerin görev ve yetkileri ne ile belirlenir?", "cevap": "Kanun", "aciklama": "Anayasa m.127."},
    {"id": "ID_K0050", "soru": "Belediye adına kamu hizmeti imtiyazı hangi merciin kararıyla verilir?", "cevap": "Belediye meclisi", "aciklama": "5393 m.18."},
    {"id": "ID_K0051", "soru": "Köyde ikamet eden tüm seçmenlerden oluşan organ hangisidir?", "cevap": "Köy derneği", "aciklama": "442 sayılı Köy Kanunu."},
    {"id": "ID_K0052", "soru": "İlde genel emir çıkarma yetkisi münhasıran kime aittir?", "cevap": "Valiye", "aciklama": "5442 m.11."},
    {"id": "ID_K0053", "soru": "Nüfusu 20.000'den fazla olan yerleşim yerlerine ne ad verilir?", "cevap": "Şehir", "aciklama": "Kitaba göre; TÜİK de 20.000 üzeri nüfuslu yerleşimleri kent (şehir) sayar. Belediye kurulması için ise en az 5.000 nüfus aranır (5393)."},
    {"id": "ID_K0054", "soru": "Merkezi idarenin yerel yönetimler üzerindeki denetimine ne ad verilir?", "cevap": "İdari vesayet denetimi"},
    {"id": "ID_K0055", "soru": "Merkezi idarenin taşra kuruluşları hangileridir?", "cevap": "İl ve ilçe idaresi", "aciklama": "Anayasa m.126."},
    {"id": "ID_K0056", "soru": "1982 Anayasası'na göre mahalli idareler hangileridir?", "cevap": "İl özel idaresi, belediye ve köy", "aciklama": "Anayasa m.127."},
    {"id": "ID_K0057", "soru": "Türkiye Cumhuriyeti'ne yabancı devlet temsilcilerini kabul etme görevi kime aittir?", "cevap": "Cumhurbaşkanı", "aciklama": "Anayasa m.104."},
    {"id": "ID_K0058", "soru": "Milletlerarası antlaşmaları onaylamak ve yayımlamada hangi merciin görevidir?", "cevap": "Cumhurbaşkanı", "aciklama": "Anayasa m.104."},
    {"id": "ID_K0059", "soru": "Plan ve Bütçe Komisyonu toplam kaç üyeden oluşur?", "cevap": "40", "aciklama": "TBMM İçtüzüğü m.20."},
    {"id": "ID_K0060", "soru": "Milletlerarası antlaşmaları uygun bulmak hangi merciin görevidir?", "cevap": "TBMM", "aciklama": "Anayasa m.90."},
    {"id": "ID_K0061", "soru": "TBMM Başkanlık Divanı üyelerini yazınız.", "cevap": "TBMM Başkanı, başkanvekilleri, idare amirleri ve kâtip üyeler"},
    {"id": "ID_K0062", "soru": "Anayasa Mahkemesi anayasa değişikliklerinin iptal kararını üye sayısının kaçta kaçı çoğunluğuyla alır?", "cevap": "Üçte iki", "aciklama": "Anayasa m.149."},
    {"id": "ID_K0063", "soru": "DDK'nın tüm üyeleri hangi merci tarafından seçilir?", "cevap": "Cumhurbaşkanı", "aciklama": "Anayasa m.108."},
    {"id": "ID_K0064", "soru": "KİT'lerin sermayesinin tamamı kime aittir?", "cevap": "Devlete", "aciklama": "233 sayılı KHK."},
    {"id": "ID_K0065", "soru": "Vali hangi karar ile atanır?", "cevap": "Cumhurbaşkanı kararı ile", "aciklama": "3 sayılı CBK."},
    {"id": "ID_K0066", "soru": "Mahalli idarelerin seçilmiş organlarının üyeliklerinin düşmesine hangi merci karar verir?", "cevap": "Danıştay", "aciklama": "Anayasa m.127."},
    {"id": "ID_K0067", "soru": "İl idare kurulu kimin başkanlığında toplanır?", "cevap": "Vali", "aciklama": "5442 m.7."},
    {"id": "ID_K0068", "soru": "İl genel meclisi hangi merciin kararıyla feshedilebilir?", "cevap": "Danıştay (İçişleri Bakanlığının başvurusu üzerine)", "aciklama": "5302 sayılı Kanun."},
    {"id": "ID_K0069", "soru": "TRT Genel Müdürü hangi merci tarafından atanır?", "cevap": "Cumhurbaşkanı", "aciklama": "Kitaba göre."},
    {"id": "ID_K0070", "soru": "Büyükşehir belediyeleri ile kurulur?", "cevap": "Kanun", "aciklama": "5216 sayılı Kanun."},
    {"id": "ID_K0071", "soru": "İdarenin kusursuz sorumluluğu hangi ilkelere dayanır?", "cevap": "Tehlike (risk) ilkesi, fedakârlığın denkleştirilmesi (kamu külfetleri karşısında eşitlik) ve sosyal risk ilkesi"},
    {"id": "ID_K0072", "soru": "Belediyelerde kamulaştırma kararı alma yetkisi (kamu yararı kararı) hangi merciin görevidir?", "cevap": "Belediye encümeni", "aciklama": "2942 m.5."},
    {"id": "ID_K0073", "soru": "Belediyelerde taşınmaz mal satımına karar vermek hangi merciin görevidir?", "cevap": "Belediye meclisi", "aciklama": "5393 m.18."},
    {"id": "ID_K0074", "soru": "Büyükelçilik nasıl bir memurluktur?", "cevap": "İstisnai memurluk", "aciklama": "657 m.59."},
    {"id": "ID_K0075", "soru": "Resmî istatistikleri hangi kurum yapar?", "cevap": "TÜİK (Türkiye İstatistik Kurumu)"},
    {"id": "ID_K0076", "soru": "İl encümeni kimin başkanlığında toplanır?", "cevap": "Vali", "aciklama": "5302 m.25."},
    {"id": "ID_K0077", "soru": "Parlamenter sistemde sorumsuz konumdaki devlet başkanının yaptığı işlemlerle ilgili sorumluluğun, bu işlemlerde imzaları bulunan bakanlara ait olmasına ne ad verilir?", "cevap": "Karşı imza", "aciklama": "Türkiye'de 2017 Anayasa değişikliğiyle karşı imza kuralı kaldırılmıştır."},
    {"id": "ID_K0078", "soru": "Savaş ilanına karar vermek hangi merciin görevidir?", "cevap": "TBMM", "aciklama": "Anayasa m.92."},
    {"id": "ID_K0079", "soru": "RTÜK Başkanı kaç yıl için seçilir?", "cevap": "2 yıl (üyeler 6 yıl için seçilir)", "aciklama": "6112 sayılı Kanun."},
    {"id": "ID_K0080", "soru": "Bir kamu hizmetinin, o hizmeti üstlenen kamu tüzel kişisi tarafından bizzat yürütülmesine ne ad verilir?", "cevap": "Emanet usulü"},
    {"id": "ID_K0081", "soru": "Kamu hizmetinin kurulmasında asli yetki nereye aittir?", "cevap": "Yasama organına (TBMM)"},
    {"id": "ID_K0082", "soru": "Devlet adına kamu hizmeti imtiyazı verme yetkisi hangi mercie aittir?", "cevap": "Cumhurbaşkanı (Danıştay görüşü alınarak)", "aciklama": "Anayasa m.155."},
    {"id": "ID_K0083", "soru": "Türkiye İş Kurumu ve Sosyal Güvenlik Kurumu hangi tür kamu kurumlarıdır?", "cevap": "Sosyal kamu kurumları"},
    {"id": "ID_K0084", "soru": "Kamu hizmeti imtiyaz sözleşmelerinde geçerli olan emprovizyon (öngörülemezlik) kuramı, kamu hizmetine egemen hangi ilkenin sonucudur?", "cevap": "Süreklilik"},
    {"id": "ID_K0085", "soru": "Kamulaştırmada taksitlendirme yapıldığı takdirde taksitlendirme süresi en fazla kaç yıl olur?", "cevap": "5 yıl", "aciklama": "Anayasa m.46."},
    {"id": "ID_K0086", "soru": "Kamulaştırma bedeline itiraz davaları hangi yargıda çözümlenir?", "cevap": "Adli yargıda (asliye hukuk mahkemesi)", "aciklama": "2942."},
    {"id": "ID_K0087", "soru": "İdarenin özel malları hangi hukuka tabidir?", "cevap": "Özel hukuka"},
    {"id": "ID_K0088", "soru": "Kamu mallarında olan meralar hangi mal niteliğindedir?", "cevap": "Orta malı"},
    {"id": "ID_K0089", "soru": "İdare hukuku ilk olarak hangi ülkede ortaya çıkmıştır?", "cevap": "Fransa"},
    {"id": "ID_K0090", "soru": "Gelir İdaresi Başkanlığı gibi kuruluşlar, hizmet bakanlığına nasıl bağlıdır?", "cevap": "İlgili bakanlığa bağlı (ilgili) kuruluş olarak"},
    {"id": "ID_K0091", "soru": "Mahalli idare birlikleri hangi merciin izni ile kurulur?", "cevap": "Cumhurbaşkanı", "aciklama": "Anayasa m.127."},
    {"id": "ID_K0092", "soru": "Ülke düzeyinde kaç tane kalkınma ajansı faaliyet göstermektedir?", "cevap": "26", "aciklama": "5449 sayılı Kanun."},
    {"id": "ID_K0093", "soru": "Çukurova Kalkınma Ajansı hangi illeri kapsar?", "cevap": "Adana ve Mersin"},
    {"id": "ID_K0094", "soru": "İmar mevzuatı bakımından belediyelerin kontrol ve sorumluluğu altına verilmiş alanlara ne ad verilir?", "cevap": "Mücavir alan", "aciklama": "3194 sayılı İmar Kanunu."},
    {"id": "ID_K0095", "soru": "İdarenin sorumluluğunun şartları nelerdir?", "cevap": "Fiil (idari davranış), zarar ve illiyet (nedensellik) bağı"},
    {"id": "ID_K0096", "soru": "İdarenin sorumluluğunun kalkması veya azalmasını sağlayan nedenler nelerdir?", "cevap": "Mücbir sebep, beklenmeyen durumlar, zarar görenin kusuru ve üçüncü kişinin kusuru"},
    {"id": "ID_K0097", "soru": "İdare kanunda yazılı koşullar gerçekleştiği zaman mutlaka o şekilde işlem yapmak zorundaysa bu duruma ne ad verilir?", "cevap": "Bağlı yetki"},
    {"id": "ID_K0098", "soru": "Türkiye Cumhuriyeti idaresi hangi esaslara göre teşkilatlanmıştır?", "cevap": "Merkezden yönetim ve yerinden yönetim", "aciklama": "Anayasa m.123."},
    {"id": "ID_K0099", "soru": "Türk Silahlı Kuvvetlerini yurt savunmasına hazırlama hangi merciin görevidir?", "cevap": "Cumhurbaşkanı", "aciklama": "Anayasa m.117."},
    {"id": "ID_K0100", "soru": "İl genel idaresinin bölümleri nelerdir?", "cevap": "Vali, il idare şube başkanları ve il idare kurulu", "aciklama": "5442 sayılı Kanun."},
    {"id": "ID_K0101", "soru": "Defterdar hangi idare kurulunun içinde yer alır?", "cevap": "İl idare kurulu"},
    {"id": "ID_K0102", "soru": "İlçe idaresi neyle kurulur?", "cevap": "Kanunla", "aciklama": "5442."},
    {"id": "ID_K0103", "soru": "İlçe idaresinin ana unsurları nelerdir?", "cevap": "Kaymakam, ilçe idare şube başkanları ve ilçe idare kurulu", "aciklama": "5442 (kitapta üçüncü unsur \"İlçe İdare Kanunu\" diye basılmıştır, doğrusu ilçe idare kuruludur)."},
    {"id": "ID_K0104", "soru": "Yazı işleri müdürü hangi idare kurulunun üyesidir?", "cevap": "İlçe idare kurulunun", "aciklama": "5442."},
    {"id": "ID_K0105", "soru": "Belediyenin kolluk personeli kimdir?", "cevap": "Zabıta", "aciklama": "5393."},
    {"id": "ID_K0106", "soru": "İdari işlemin unsurları nelerdir?", "cevap": "Yetki, şekil, sebep, konu ve amaç", "aciklama": "Kitap sebep unsurunu yazmamıştır."},
    {"id": "ID_K0107", "soru": "Kolluk işleminin amacı nedir?", "cevap": "Kamu düzeni"},
    {"id": "ID_K0108", "soru": "Bir köyün nüfusu kaçı bulduğunda belediye kurulur?", "cevap": "5.000", "aciklama": "5393 m.4."},
    {"id": "ID_K0109", "soru": "Yetki gaspının yaptırımı nedir?", "cevap": "Yokluk"},
    {"id": "ID_K0110", "soru": "İşlemi geleceğe dönük olarak ortadan kaldırırken aynı zamanda yeni bir işlem tesis etmek anlamına gelen işleme ne ad verilir?", "cevap": "Değiştirme"},
    {"id": "ID_K0111", "soru": "Kamu kurumu niteliğindeki meslek kuruluşlarına iki örnek veriniz.", "cevap": "Türk Eczacıları Birliği ve Türkiye Noterler Birliği (ayrıca barolar, tabip odaları)", "aciklama": "Anayasa m.135."},
    {"id": "ID_K0112", "soru": "Hiç kimsenin kanunen tabi olduğu mahkemeden başka bir merci önüne çıkarılmamasına ne ad verilir?", "cevap": "Kanuni hâkim güvencesi", "aciklama": "Anayasa m.37."},
    {"id": "ID_K0113", "soru": "Kamulaştırmada ikinci aşama hangisidir?", "cevap": "Kamu yararı kararının alınması ve onaylanması", "aciklama": "2942 m.5–6."},
    {"id": "ID_K0114", "soru": "Kamu hizmetlerine egemen ilkeler nelerdir?", "cevap": "Süreklilik, değişebilirlik (uyarlanma), eşitlik, tarafsızlık ve bedelsizlik"},
    {"id": "ID_K0115", "soru": "Kamu İhale Kanununda öngörülen ihale usulleri nelerdir?", "cevap": "Açık ihale, belli istekliler arasında ihale ve pazarlık usulü (ayrıca doğrudan temin)", "aciklama": "4734 m.18–22."},
    {"id": "ID_K0116", "soru": "Henüz atanmamış, görevden alındıktan sonra işlem yapmaya devam etmiş ya da hukuken sakat bir atamayla işbaşına gelmiş memura ne ad verilir?", "cevap": "Görünüşte memur"},
    {"id": "ID_K0117", "soru": "Temel hak ve özgürlükler yönetmelikle sınırlandırılabilir mi?", "cevap": "Hayır; yalnızca kanunla sınırlandırılabilir.", "aciklama": "Anayasa m.13."},
    {"id": "ID_K0118", "soru": "Hiyerarşik denetimde üstün, astın yetki ve görev alanındaki bir konuda astın yerine geçerek işlem yapıp karar alma hakkını vermemesine ne ad verilir?", "cevap": "İkame yasağı"},
    {"id": "ID_K0119", "soru": "Pazar ve meydanların kamu malları arasındaki statüsü nedir?", "cevap": "Orta malı"},
    {"id": "ID_K0120", "soru": "İdari işlemin şekil unsuru ile ilgili olan ve bir idari işlem için belirlenmiş usulün başka bir amaçla farklı bir işlem için kullanılmasına ne ad verilir?", "cevap": "Usul saptırması"},
    {"id": "ID_K0121", "soru": "Merkezi yönetimin üst kademesindeki yöneticinin yetkilerinden bazılarını kendi adına kullanmak üzere astlarına aktarmasına ne ad verilir?", "cevap": "Yetki devri"},
    {"id": "ID_K0122", "soru": "Bakanlıklar ne ile kurulur?", "cevap": "Cumhurbaşkanlığı kararnamesi ile", "aciklama": "Anayasa m.106."},
    {"id": "ID_K0123", "soru": "Bir ilçenin bir ilden ayrılıp başka bir ile bağlanması ne ile olur?", "cevap": "Kanun", "aciklama": "5442 m.2."},
    {"id": "ID_K0124", "soru": "Bir ilin sınırları içinde bulunan genel ve özel kolluk kuvvetlerinin amiri kimdir?", "cevap": "Vali", "aciklama": "5442 m.11."},
    {"id": "ID_K0125", "soru": "İdare hukuku kaçıncı yüzyılda ortaya çıkmıştır?", "cevap": "19. yüzyıl"},
    {"id": "ID_K0126", "soru": "Bütün ülkeyi kapsayan idari teşkilat hangisidir?", "cevap": "Merkezi (genel) idare"},
    {"id": "ID_K0127", "soru": "Merkezi idare kaça ayrılır ve bunlar nelerdir?", "cevap": "İkiye: merkez (başkent) teşkilatı ve taşra teşkilatı"},
    {"id": "ID_K0128", "soru": "Emniyet Genel Müdürlüğü'nün hiyerarşik en üst makamı neresidir?", "cevap": "İçişleri Bakanlığı"},
    {"id": "ID_K0129", "soru": "Millî Güvenlik Kurulu kararlarının Cumhurbaşkanı üzerindeki etkisi nedir?", "cevap": "Bağlayıcı değildir; tavsiye niteliğindedir.", "aciklama": "Anayasa m.118."},
    {"id": "ID_K0130", "soru": "İl özel idaresinin genel karar organı hangisidir?", "cevap": "İl genel meclisi", "aciklama": "5302 m.6."},
    {"id": "ID_K0131", "soru": "İdari işlemlerin özellikleri nelerdir?", "cevap": "Tek yanlılık ve icrailik, hukuka uygunluk karinesi, yargısal denetime tabi olma"},
    {"id": "ID_K0132", "soru": "Türkiye'de merkezi idare sisteminin başında kim bulunur?", "cevap": "Cumhurbaşkanı", "aciklama": "Anayasa m.104."},
    {"id": "ID_K0133", "soru": "Cumhurbaşkanı seçilebilmek için kaç yaşını doldurmak gerekir?", "cevap": "40", "aciklama": "Anayasa m.101."},
    {"id": "ID_K0134", "soru": "Devlet ve diğer kamu hukuku kişilerinin kamu yararına dayanarak, karşılığını peşin olarak ödemek şartıyla özel mülkiyete bağlı bir gayrimenkulün tamamına veya bir kısmına el koymasına ne denir?", "cevap": "Kamulaştırma", "aciklama": "Anayasa m.46."},
    {"id": "ID_K0135", "soru": "İdare kamulaştırma bedelini belirlemek için nereye başvurabilir?", "cevap": "Asliye hukuk mahkemesine", "aciklama": "2942 m.10."},
    {"id": "ID_K0136", "soru": "Yeraltı sularının kamu malları arasındaki statüsü nedir?", "cevap": "Sahipsiz mal"},
    {"id": "ID_K0137", "soru": "İdarenin olağanüstü durumlarda kamu gücünü kullanarak menkul malları elde etme yetkisine ne denir?", "cevap": "İstimval"},
    {"id": "ID_K0138", "soru": "Bakanlar ilgili oldukları hizmetlerin görülmesiyle ilgili olarak kime karşı sorumludur?", "cevap": "Cumhurbaşkanı", "aciklama": "Anayasa m.106."},
    {"id": "ID_K0139", "soru": "Bir ilçe sınırları içinde bulunan genel ve özel kolluk kuvvetlerinin amiri kimdir?", "cevap": "Kaymakam", "aciklama": "5442 m.32."},
    {"id": "ID_K0140", "soru": "Kanuna aykırı bir emri alan memur hangi halde bu emri yapmak zorunda kalır?", "cevap": "Amir emri yazıyla yenilerse (suç teşkil eden emir hiçbir zaman yerine getirilemez)", "aciklama": "657 m.11."},
    {"id": "ID_K0141", "soru": "İdari hiyerarşi ve idari vesayet, idare hukukundaki hangi ilkenin yansımasıdır?", "cevap": "İdarenin bütünlüğü ilkesinin"},
    {"id": "ID_K0142", "soru": "Bir kamu hizmetinin kötü işlemesi veya geç işlemesi yahut hiç işlememesi hangi kavramla açıklanır?", "cevap": "Hizmet kusuru"},
    {"id": "ID_K0143", "soru": "Yeni bir ilçe kurulmasına kim karar verir?", "cevap": "TBMM (kanunla)", "aciklama": "5442 m.2."},
    {"id": "ID_K0144", "soru": "İdare mahkemesi kararlarına karşı istinaf ve temyiz mercileri hangileridir?", "cevap": "İstinaf: bölge idare mahkemesi; temyiz: Danıştay (kanunda sayılan hallerde)", "aciklama": "2577 m.45–46."},
    {"id": "ID_K0145", "soru": "İdari yargıda iptal davası ile tam yargı davası farkı nedir?", "cevap": "İptal davası idari işlemin hukuka aykırılığı nedeniyle iptalini, tam yargı davası kişisel hakları zarar görenlerin zararlarının giderilmesini amaçlar.", "aciklama": "2577 m.2."},
    {"id": "ID_K0146", "soru": "İdarenin kuruluş ve işleyişine uygulanan kamu hukuku kurallarının bütününe ne ad verilir?", "cevap": "İdare hukuku"},
    {"id": "ID_K0147", "soru": "İdare hukuku tek bir kanunda toplanmış mıdır?", "cevap": "Hayır; idare hukuku tedvin edilmemiştir (kanunlaştırılmamış, dağınık ve içtihadi bir hukuk dalıdır)."},
    {"id": "ID_K0148", "soru": "Yasama organı TBMM, yargı organı bağımsız mahkemelerdir. İdare, yürütme organının Cumhurbaşkanı dışında kalan kısmı ile devlet dışındaki kamu tüzel kişileridir. Burada idare kavramı hangisidir?", "cevap": "Organik (örgütsel) anlamda idare"},
    {"id": "ID_K0149", "soru": "İdari fonksiyonun amacı nedir?", "cevap": "Kamu yararı"},
    {"id": "ID_K0150", "soru": "İdarenin ihtiyacı olan bir binayı bir özel kişiden kira sözleşmesi ile kiralaması hangi hukuka tabidir?", "cevap": "Borçlar (özel) hukuku"},
    {"id": "ID_K0151", "soru": "İdare hukukunun uygulama alanını belirlemekte kullanılan temel ölçüt nedir?", "cevap": "Kamu gücü ölçütü"},
    {"id": "ID_K0152", "soru": "Merkezi idare, idarenin bütünlüğünün sağlanması amacıyla yerinden yönetim kuruluşları üzerinde hangi yetkiye sahiptir?", "cevap": "İdari vesayet"},
    {"id": "ID_K0153", "soru": "Ülke merkezi idare bakımından nasıl bölünür?", "cevap": "İllere, iller de diğer kademeli bölümlere ayrılır.", "aciklama": "Anayasa m.126."},
    {"id": "ID_K0154", "soru": "Mahalli idareler hangi ilkeye göre düzenlenir?", "cevap": "Yerinden yönetim ilkesine"},
    {"id": "ID_K0155", "soru": "Mahalli idarelerin karar organları nasıl oluşturulur?", "cevap": "Seçimle", "aciklama": "Anayasa m.127."},
    {"id": "ID_K0156", "soru": "Mahalli idarelerin seçilmiş organlarının organlık sıfatını kaybetmeleri konusundaki denetim hangi yolla olur?", "cevap": "Yargı yolu (Danıştay)", "aciklama": "Anayasa m.127."},
    {"id": "ID_K0157", "soru": "İdari işlemlere karşı açılacak davalarda dava açma süresi ne zaman başlar?", "cevap": "Yazılı bildirim (tebliğ) tarihinden", "aciklama": "2577 m.8."},
    {"id": "ID_K0158", "soru": "Yargı kararı idarenin takdir yetkisini kaldıracak biçimde verilebilir mi?", "cevap": "Hayır; yargı yetkisi hukuka uygunluk denetimiyle sınırlıdır, yerindelik denetimi niteliğinde karar verilemez.", "aciklama": "Anayasa m.125."},
    {"id": "ID_K0159", "soru": "Devletin kamu iktisadi teşebbüslerinin ve diğer kamu tüzel kişilerinin genel idare esaslarına göre yürütmekle yükümlü oldukları kamu hizmetlerinin gerektirdiği asli ve sürekli görevler kimler aracılığı ile görülür?", "cevap": "Memurlar ve diğer kamu görevlileri eliyle", "aciklama": "Anayasa m.128."},
    {"id": "ID_K0160", "soru": "Memurların ve diğer kamu görevlilerinin nitelikleri, atanmaları, görev ve yetkileri, hakları ve yükümlülükleri, aylık ve ödenekleri ve diğer özlük işleri nasıl düzenlenir?", "cevap": "Kanunla", "aciklama": "Anayasa m.128."},
    {"id": "ID_K0161", "soru": "Memurlara ve diğer kamu görevlilerine savunma hakkı tanınmadıkça hangi ceza verilemez?", "cevap": "Disiplin cezası", "aciklama": "Anayasa m.129."},
    {"id": "ID_K0162", "soru": "Kanuna aykırı emir, ancak üstün ısrarı ve bu emri yazı ile yenilemesi üzerine yerine getirilir; bu halde emri yerine getiren sorumlu olmaz. Bu duruma ne ad verilir?", "cevap": "Kanunsuz emir (kanuna aykırı emir)", "aciklama": "657 m.11; suç teşkil eden emir yerine getirilmez."},
    {"id": "ID_K0163", "soru": "Üniversiteler nasıl kurulur?", "cevap": "Kanunla", "aciklama": "Anayasa m.130."},
    {"id": "ID_K0164", "soru": "İdari işlemin uygulanması halinde telafisi güç veya imkânsız zararların doğması ve idari işlemin açıkça hukuka aykırı olması şartlarının birlikte gerçekleşmesi durumunda gerekçe gösterilerek hangi karar verilebilir?", "cevap": "Yürütmenin durdurulması kararı", "aciklama": "Anayasa m.125."},
    {"id": "ID_K0165", "soru": "Hangi yıl yapılan anayasa değişikliğiyle Genelkurmay Başkanlığının YÖK'teki temsilciliğine son verilmiştir?", "cevap": "2004"},
    {"id": "ID_K0166", "soru": "Belli bir mesleğe mensup olanların müşterek ihtiyaçlarını karşılamak amacıyla kanunla kurulan ve organları kendi üyeleri tarafından kanunda gösterilen usullere göre yargı gözetimi altında gizli oyla seçilen kamu tüzel kişilikleri hangisidir?", "cevap": "Kamu kurumu niteliğindeki meslek kuruluşları", "aciklama": "Anayasa m.135."},
    {"id": "ID_K0167", "soru": "Hukuk devleti ilkesinin göstergelerinden üçünü yazınız.", "cevap": "Devlet organlarının hukuka bağlı olması, temel hakların güvenceye alınması, mahkemelerin bağımsızlığı"},
    {"id": "ID_K0168", "soru": "Din ve vicdan hürriyeti, devlet işlerinin din esasına dayanmaması, vatandaşlara eşit muamele, din eğitim ve öğretiminin devletin gözetim ve denetimi altında yapılması, Diyanet İşleri Başkanlığının genel idare içinde yer alması hangi ilke ile ilgilidir?", "cevap": "Laiklik ilkesi"},
    {"id": "ID_K0169", "soru": "Merkezden yönetimin özelliklerinden üçünü yazınız.", "cevap": "Tüm idari hizmetler merkezde toplanmıştır; bir taşra teşkilatı vardır; tüm kaynaklar merkezde toplanmıştır."},
    {"id": "ID_K0170", "soru": "Merkezden yönetimin yararlarından üçünü yazınız.", "cevap": "Güçlü bir devlet yönetimi sağlar; hizmetler daha az harcama ile ve rasyonel biçimde yürütülür; hizmetler yeknesak biçimde yürütülür."},
    {"id": "ID_K0171", "soru": "Merkezden yönetimin sakıncalarından üçünü yazınız.", "cevap": "Bürokrasi ve kırtasiyeciliğe yol açar; hizmetlerin yöresel gereksinimlere göre yürütülmesi güçtür; demokratik ilkelere pek uygun değildir."},
    {"id": "ID_K0172", "soru": "İl idaresinin amiri kimdir?", "cevap": "Vali"},
    {"id": "ID_K0173", "soru": "Yerinden yönetimin yararları nelerdir?", "cevap": "Yerel yerinden yönetimin demokratik ilkelere uygunluğu; kırtasiyecilik ve bürokrasinin azalması; hizmetlerin gereksinimlere uygun yürütülmesi"},
    {"id": "ID_K0174", "soru": "Yerinden yönetimin sakıncaları nelerdir?", "cevap": "Ülke bütünlüğünün ve millî birliğin sarsılma tehlikesi, partizanca uygulamalara yol açması, hizmetlerin yeknesak biçimde yürütülmemesi ve mali denetimdeki güçlükler"},
    {"id": "ID_K0175", "soru": "Kanunla ya da kanunun açıkça verdiği bir yetkiye dayanarak kurulan, üstün ve ayrıcalıklı yetkilerle donatılmış, malları, gelirleri ve personeli ayrı bir statüye tabi tutulmuş kuruluşlara ne ad verilir?", "cevap": "Kamu tüzel kişiliği", "aciklama": "Anayasa m.123."},
    {"id": "ID_K0176", "soru": "Cumhurbaşkanının idari nitelikteki görev ve yetkilerinden iki tanesini yazınız.", "cevap": "Genelkurmay Başkanını atamak; MGK'yı toplantıya çağırmak ve başkanlık etmek", "aciklama": "Anayasa m.104, 118."},
    {"id": "ID_K0177", "soru": "Cumhurbaşkanının isteği üzerine harekete geçen, raporunu Cumhurbaşkanına sunan, raporları bağlayıcı güce sahip olmayan ve kamu kurum ve kuruluşları bakımından bir ihbar niteliğindeki mercii hangisidir?", "cevap": "Devlet Denetleme Kurulu", "aciklama": "Anayasa m.108."},
    {"id": "ID_K0178", "soru": "Başbakanlık ve Bakanlar Kurulu hangi yıl lağvedilmiştir?", "cevap": "2018 (24 Haziran 2018 seçimlerinden sonra, 9 Temmuz 2018'de)"},
    {"id": "ID_K0179", "soru": "Merkezi yönetim bütçesi kapsamındaki kamu idareleri ile sosyal güvenlik kuruluşlarının gelir ve giderleri ile mallarını TBMM adına denetlemek hangi merciin görevidir?", "cevap": "Sayıştay", "aciklama": "Anayasa m.160."},
    {"id": "ID_K0180", "soru": "Belediyenin en yüksek görüşme ve karar organı hangisidir?", "cevap": "Belediye meclisi", "aciklama": "5393 m.17."},
    {"id": "ID_K0181", "soru": "Belediyenin hangi organı borçlanmaya karar verir?", "cevap": "Belediye meclisi", "aciklama": "5393 m.18."},
    {"id": "ID_K0182", "soru": "Encümen kararlarını uygulamak görevi belediyenin hangi organına aittir?", "cevap": "Belediye başkanı"},
    {"id": "ID_K0183", "soru": "Köyde bulunan kadın erkek bütün seçmenlerden oluşan kurul hangisidir?", "cevap": "Köy derneği", "aciklama": "442 sayılı Köy Kanunu."},
    {"id": "ID_K0184", "soru": "İdarenin bir özel kişi ile yaptığı sözleşme uyarınca belli bir kamu hizmetinin masrafları, kâr ve zararı özel kişiye ait olmak üzere özel bir kişi tarafından kurulması ve/veya işletilmesi usulüne ne ad verilir?", "cevap": "İmtiyaz usulü"},
    {"id": "ID_K0185", "soru": "İdarenin, imtiyaz sahibinin hiçbir kusuru olmasa dahi, hizmet ve kamu yararının gerektirmesi nedeniyle sözleşmeyi tek yanlı feshettiğinde imtiyaz sahibinin zararını tamamen gidermek zorunda olmasına ne ad verilir?", "cevap": "Rachat (geri satın alma)"},
    {"id": "ID_K0186", "soru": "İdarenin kamu düzenini korumak ve sağlamak için giriştiği tüm faaliyetlere ne ad verilir?", "cevap": "Kolluk faaliyetleri"},
    {"id": "ID_K0187", "soru": "Suç işlendikten sonra ve adli kovuşturma amacıyla yürütülen kolluk faaliyetine ne ad verilir?", "cevap": "Adli kolluk"},
    {"id": "ID_K0188", "soru": "Suç işlenmeden önce ve kamu düzenini tehdit eden durumların ortaya çıkması halinde yürütülen kolluk faaliyetine ne ad verilir?", "cevap": "İdari kolluk"},
    {"id": "ID_K0189", "soru": "Adli kolluk ile idari kolluk arasındaki temel fark nedir?", "cevap": "Adli kolluk bastırıcı (suç sonrası), idari kolluk önleyici (suç öncesi) niteliktedir."},
    {"id": "ID_K0190", "soru": "Şehir ve kasabalarda kolluk görevini hangi kuvvet, kırsal yörelerde hangisi yürütür?", "cevap": "Şehir ve kasabalarda polis, kırsal yörelerde jandarma"},
    {"id": "ID_K0191", "soru": "Devletin millî güvenliğinin korunması için giriştiği gizli polis faaliyetlerine ne ad verilir?", "cevap": "Siyasi polis (siyasi kolluk)"},
    {"id": "ID_K0192", "soru": "Devlet ve diğer kamu tüzel kişilerince genel idare esaslarına göre yürütülen asli ve sürekli kamu hizmetlerini ifa ile görevlendirilen kişilere ne ad verilir?", "cevap": "Memur", "aciklama": "Anayasa m.128."},
    {"id": "ID_K0193", "soru": "İşçiler hangi hukuk dalının hükümlerine tabidir?", "cevap": "Özel hukuk (iş hukuku)"},
    {"id": "ID_K0194", "soru": "Devlet memurlarının görevlerinin gerektirdiği niteliklere ve mesleklere göre sınıflara ayrılmasına ne ad verilir?", "cevap": "Sınıflandırma", "aciklama": "657 m.3."},
    {"id": "ID_K0195", "soru": "Memurluğa girmeyi, sınıflar içinde ilerleme ve yükselmeyi ve görevin sona erdirilmesini yetenek esasına dayandırmak ve böylece memurları güvenliğe sahip kılmaya ne ad verilir?", "cevap": "Liyakat", "aciklama": "657 m.3."},
    {"id": "ID_K0196", "soru": "İstimval ne zaman söz konusu olabilir?", "cevap": "Yalnızca olağanüstü zamanlarda; kamulaştırma ise olağan bir yetkidir."},
    {"id": "ID_K0197", "soru": "Kamulaştırmanın konusu nedir?", "cevap": "Taşınmaz mallar", "aciklama": "Anayasa m.46."},
    {"id": "ID_K0198", "soru": "Bir hak veya malın başka bir hak veya mal ile değiştirilmesini amaçlayan sözleşmeye ne ad verilir?", "cevap": "Trampa"},
    {"id": "ID_K0199", "soru": "Özel kişiler lehine de kamulaştırma yapılması mümkün müdür?", "cevap": "Evet; kanunla yetkili kılınan özel hukuk kişileri lehine kamulaştırma yapılabilir.", "aciklama": "2942 m.3."},
    {"id": "ID_K0200", "soru": "İdarenin usulüne uygun olarak alınmış bir kamulaştırma kararı olmaksızın ve geçici işgal koşulları da bulunmadığı halde özel mülkiyette bulunan bir taşınmaza el atmasına ne ad verilir?", "cevap": "Kamulaştırmasız el atma"},
    {"id": "ID_K0201", "soru": "Bir bayındırlık hizmetinin görülmesi sırasında, hizmetin görülmesi için gereksinim duyulan maddeleri çıkarmak veya hazırlayabilmek için özel mülkiyetteki bir taşınmaza idarece geçici olarak el atılmasına ne ad verilir?", "cevap": "Geçici işgal"},
    {"id": "ID_K0202", "soru": "İdarenin yürüttüğü bir hizmetin kurulmasında, düzenlenmesinde ya da işleyişindeki bozukluk veya aksaklığa ne ad verilir?", "cevap": "Hizmet kusuru"},
    {"id": "ID_K0203", "soru": "Hizmet kusuru sayılan haller nelerdir?", "cevap": "Hizmetin kötü işlemesi, geç işlemesi ve hiç işlememesi"},
    {"id": "ID_K0204", "soru": "Tehlike ilkesinin meslek kazaları alanında uygulanması biçimine ne ad verilir?", "cevap": "Mesleki risk"},
    {"id": "ID_K0205", "soru": "Kamu düzenini bozmaya ve anayasal düzeni yıkmaya yönelik terör olayları sırasında zarar görenlerin zararlarının idarece tazmin edilmesini sağlamak amacıyla kusursuz sorumluluğun hangi ilkesi uygulanmaktadır?", "cevap": "Sosyal risk", "aciklama": "5233 sayılı Kanun."},
    {"id": "ID_K0206", "soru": "İdarenin kamu yararı düşüncesi ile giriştiği bir faaliyet belli bazı kişileri zarara uğratırsa, bu zararın herhangi bir kusuru olmasa dahi idarece karşılanmasına ne ad verilir?", "cevap": "Fedakârlığın denkleştirilmesi (kamu külfetleri karşısında eşitlik)"},
    {"id": "ID_K0207", "soru": "İdarenin iradesi dışında oluşan, öngörülmesi ve büyük bir dikkat ve özenle dahi önlenmesi mümkün olmayan bir kamu hizmetinin yürütülmesini imkânsızlaştıran olaylara ne ad verilir?", "cevap": "Mücbir sebep"},
    {"id": "ID_K0208", "soru": "Özel idarelerin amacı nedir?", "cevap": "Özel yarar (kamu idarelerinin amacı ise kamu yararıdır)"},
    {"id": "ID_K0209", "soru": "İdare, devletin hangi organının bir parçasıdır?", "cevap": "Yürütme organının"},
    {"id": "ID_K0210", "soru": "Geçici personel statüsü 657 sayılı Kanun'dan ne olmuştur?", "cevap": "Kaldırılmıştır; kamu istihdamı memur, sözleşmeli personel ve işçi olarak sürer."},
    {"id": "ID_K0211", "soru": "İdari fonksiyonun özelliklerinden iki tanesini yazınız.", "cevap": "Amacı kamu yararını gerçekleştirmektir; konusu kamu hizmetleridir."},
    {"id": "ID_K0212", "soru": "İdare hukuku sistemleri hangileridir?", "cevap": "Anglo-Sakson sistemi (adli idare sistemi) ve Kara Avrupası sistemi (idari rejim)"},
    {"id": "ID_K0213", "soru": "İdarenin aldığı bir karar, bir mahkeme tarafından iptal edilinceye kadar hukuka uygun olduğu varsayılır ve uygulanmaya devam edilir. Buna ne ad verilir?", "cevap": "Hukuka uygunluk karinesi"},
    {"id": "ID_K0214", "soru": "İdari işleme itiraz edilmesi veya dava açılması işlemin yürütülmesini durdurur mu?", "cevap": "Kural olarak durdurmaz; yürütmenin durdurulması için ayrıca mahkeme kararı gerekir.", "aciklama": "2577 m.27."},
    {"id": "ID_K0215", "soru": "İdare hukukunun bölümleri nelerdir?", "cevap": "Genel idare hukuku ve özel idare hukuku"},
    {"id": "ID_K0216", "soru": "Anayasa m.2'ye göre Türkiye Cumhuriyeti'nin nitelikleri nelerdir? (idare hukukuna hâkim ilkeler)", "cevap": "Cumhuriyet, demokratik, laik ve sosyal hukuk devleti; toplumun huzuru, millî dayanışma ve adalet anlayışı içinde insan haklarına saygılı; Atatürk milliyetçiliğine bağlı; başlangıçta belirtilen temel ilkelere dayalı", "aciklama": "Anayasa m.2."},
    {"id": "ID_K0217", "soru": "Üniversiteler arası kurul ve fakültelerin tüzel kişiliği var mıdır?", "cevap": "Yoktur; tüzel kişilik üniversitelerdedir.", "aciklama": "2547 sayılı Kanun."},
    {"id": "ID_K0218", "soru": "Valilikler ve kaymakamlıklar yönetmelik çıkarabilir mi?", "cevap": "Hayır; yönetmeliği Cumhurbaşkanı hariç bakanlıklar ve kamu tüzel kişileri çıkarır.", "aciklama": "Anayasa m.124."},
    {"id": "ID_K0219", "soru": "Başka makamın görevine giren konuda karar alınması durumuna ne ad verilir?", "cevap": "Yetki tecavüzü"},
    {"id": "ID_K0220", "soru": "Memura verilen uyarma cezası nasıl bir işlemdir?", "cevap": "Basit işlem"},
    {"id": "ID_K0221", "soru": "Yetki devri de imza devri de nasıl olmalıdır?", "cevap": "Kısmî", "aciklama": "3046 sayılı Kanun."},
    {"id": "ID_K0222", "soru": "Kamu borçlanma (istikraz) sözleşmeleri nasıl yapılır?", "cevap": "Kanunla (kanunun verdiği yetkiye dayanarak)", "aciklama": "Anayasa m.163, 4749 sayılı Kanun."},
    {"id": "ID_K0223", "soru": "Türkiye'de idari teşkilat esas olarak kaça ayrılır?", "cevap": "İkiye: merkezi idare ve yerinden idare (mahalli idareler ve hizmet yönünden yerinden yönetim)"},
    {"id": "ID_K0224", "soru": "İdari davaların da diğer davalar gibi genel mahkemelerde görüldüğü, ayrı bir idari yargı kolunun benimsenmediği sisteme ne ad verilir?", "cevap": "Adli idare düzeni (Anglo-Sakson sistemi)"},
    {"id": "ID_K0225", "soru": "Devletin yasama ve yargı fonksiyonu ile yürütme organının siyasi fonksiyonu dışında kalan fonksiyon ve devlet dışındaki diğer kamu tüzel kişilerin fonksiyonuna ne ad verilir?", "cevap": "İdari fonksiyon"},
    {"id": "ID_K0226", "soru": "Rektörler kim tarafından atanır?", "cevap": "Cumhurbaşkanı", "aciklama": "2016'dan beri; 2547 sayılı Kanun ve Anayasa m.130."},
    {"id": "ID_K0227", "soru": "RTÜK kaç üyeden oluşur?", "cevap": "9", "aciklama": "6112 sayılı Kanun."},
    {"id": "ID_K0228", "soru": "Aynı tüzel kişilik bünyesindeki birimler ile merkezi idarenin başkent ve taşra örgütleri arasında kurulan hukuki bağa ne ad verilir?", "cevap": "Hiyerarşi"},
    {"id": "ID_K0229", "soru": "Merkezden yönetimin sakıncalarını ortadan kaldırmak ve özellikle bu yönetim biçiminin yol açtığı kırtasiyeciliği bertaraf ederek hizmetlerin taşrada gecikmeden yürütülmesini sağlamak amacıyla hangi ilkenin uygulanması yoluna gidilmiştir?", "cevap": "Yetki genişliği", "aciklama": "Anayasa m.126."},
    {"id": "ID_K0230", "soru": "Yerinden yönetim ilkesinin diğer adı nedir?", "cevap": "Âdem-i merkeziyet"},
    {"id": "ID_K0231", "soru": "Ast, ne tür bir emir söz konusu olduğunda üstün emrini yerine getirmemek imkânına sahiptir?", "cevap": "Konusu suç teşkil eden emir", "aciklama": "657 m.11."},
    {"id": "ID_K0232", "soru": "Millî kamu hizmetleri hangi kişilik tarafından yürütülür?", "cevap": "Devlet tüzel kişiliği (merkezi idare)"},
    {"id": "ID_K0233", "soru": "Bakanlığın hizmet ve görev alanına giren ana hizmetleri yürütmek üzere, bakanlığa bağlı olarak özel kanunla kurulan, genel bütçe içinde ayrı bütçeli veya katma bütçeli veya özel bütçeli kuruluşlara ne ad verilir?", "cevap": "Bağlı kuruluşlar"},
    {"id": "ID_K0234", "soru": "Özel kanun veya statü ile kurulan, KİT'ler ve kamu iktisadi kuruluşları ile bunların müessese ortaklık ve iştirakleri veya özel hukuki, mali ve idari statüye tabi hizmet yerinden yönetim kuruluşlarına ne ad verilir?", "cevap": "İlgili kuruluşlar"},
    {"id": "ID_K0235", "soru": "Cumhurbaşkanlığı tarafından gönderilen işler hakkında görüş bildirmek hangi merciin görevidir?", "cevap": "Danıştay", "aciklama": "Anayasa m.155."},
    {"id": "ID_K0236", "soru": "İdare hangi hukuka tabidir?", "cevap": "Kamu hukukuna"},
    {"id": "ID_K0237", "soru": "Mahalli idareler nasıl kişiliklerdir?", "cevap": "Tüzel (kamu tüzel) kişiliklerdir."},
    {"id": "ID_K0238", "soru": "Barolar Birliğinin türü nedir?", "cevap": "Kamu kurumu niteliğindeki meslek kuruluşu"},
    {"id": "ID_K0239", "soru": "Bağımsız idari otoriteler yapıları itibariyle nasıl kuruluşlardır?", "cevap": "Özerk"},
    {"id": "ID_K0240", "soru": "İdari işlem ve eylemlerin yaptırımı hangi yol ile olur?", "cevap": "Yargı yolu ile", "aciklama": "Anayasa m.125."},
    {"id": "ID_K0241", "soru": "İdari işlev idarenin hangi kudretini kullanarak yerine getirilir?", "cevap": "Kamu gücü"},
    {"id": "ID_K0242", "soru": "Cumhurbaşkanı millî güvenliğin sağlanmasından ve Silahlı Kuvvetlerin yurt savunmasına hazırlanmasından nereye karşı sorumludur?", "cevap": "TBMM", "aciklama": "Anayasa m.117."},
    {"id": "ID_K0243", "soru": "Sahil Güvenlik Komutanlığı nereye bağlıdır?", "cevap": "İçişleri Bakanlığı"},
    {"id": "ID_K0244", "soru": "İdarenin doğrudan topluma yönelik olmayan faaliyeti nedir?", "cevap": "İç düzen faaliyeti"},
    {"id": "ID_K0245", "soru": "Devleti kurumsallaştıran hukuki metin hangisidir?", "cevap": "Anayasa"},
    {"id": "ID_K0246", "soru": "Anayasada idarenin yapı ve işleyişiyle ilgili özel ilkeler hangileridir?", "cevap": "Kanunilik (kanuni idare), merkezden ve yerinden yönetim, yetki genişliği ve idarenin bütünlüğü", "aciklama": "Anayasa m.123–126."},
    {"id": "ID_K0247", "soru": "Üst kademe kamu yöneticilerini kim atar?", "cevap": "Cumhurbaşkanı", "aciklama": "3 sayılı CBK."},
    {"id": "ID_K0248", "soru": "İdare, kuruluş ve görevleriyle bir bütündür ve neyle düzenlenir?", "cevap": "Kanunla", "aciklama": "Anayasa m.123."},
    {"id": "ID_K0249", "soru": "Yönetimin tarafsızlığının sağlanması hangi yönetim biçiminin yararıdır?", "cevap": "Merkezden yönetim"},
    {"id": "ID_K0250", "soru": "Yöneticilerin yetkilerinden bazılarını astlarına aktarmasına ne ad verilir?", "cevap": "Yetki devri"},
    {"id": "ID_K0251", "soru": "İmza devri kime yapılır?", "cevap": "Kişiye (makama değil, şahsa)"},
    {"id": "ID_K0252", "soru": "Yerel demokrasiyi zayıflatan yönetim hangi yönetim biçiminin zararıdır?", "cevap": "Merkezden yönetim"},
    {"id": "ID_K0253", "soru": "Yalnızca valilere tanınan ayrıcalık hangisidir?", "cevap": "Yetki genişliği", "aciklama": "Anayasa m.126."},
    {"id": "ID_K0254", "soru": "Tevsi-i mezuniyet kavramı nedir?", "cevap": "Valinin merkeze danışmadan karar alma ve uygulama gücü (yetki genişliği)"},
    {"id": "ID_K0255", "soru": "Âdem-i merkeziyet kavramının diğer adı nedir?", "cevap": "Yerinden yönetim"},
    {"id": "ID_K0256", "soru": "Yer yönünden yerinden yönetim kuruluşları belirli bir ... ile sınırlıdır. Boşluğa ne gelir?", "cevap": "Coğrafya (belirli bir coğrafi alan)"},
    {"id": "ID_K0257", "soru": "Mali denetimlerin yapılmasında zorluk olan yönetim türü hangisidir?", "cevap": "Yerinden yönetim"},
    {"id": "ID_K0258", "soru": "Hiyerarşik denetim hangi denetimlerle sınırlıdır?", "cevap": "Hukukilik ve yerindelik (her ikisini de kapsar)"},
    {"id": "ID_K0259", "soru": "Kaymakam kime karşı sorumludur?", "cevap": "Valiye", "aciklama": "5442 m.32."},
    {"id": "ID_K0260", "soru": "İl müdürü ile ilçe müdürü arasındaki ilişki nedir?", "cevap": "Hiyerarşi"},
    {"id": "ID_K0261", "soru": "İdari vesayet hangi denetimle sınırlıdır?", "cevap": "Yalnızca hukukilik (hukuka uygunluk) denetimiyle"},
    {"id": "ID_K0262", "soru": "İdari vesayet makamları yerinden yönetim organları üzerinde hangi işlemi yapamaz?", "cevap": "Onların işlemlerini değiştiremez ve onların yerine geçerek karar alamaz."},
    {"id": "ID_K0263", "soru": "Aynı tüzel kişilik içinde uygulanan denetim türü hangisidir?", "cevap": "Hiyerarşi"},
    {"id": "ID_K0264", "soru": "İdare hukuku bağımsız ve ... bir hukuk dalıdır. Boşluğa ne gelir?", "cevap": "Özerk"},
    {"id": "ID_K0265", "soru": "İdare hukukunun yazısız kaynakları nelerdir?", "cevap": "İdari teamül ve uygulamalar, örf ve adet ile hukukun genel ilkeleri"},
    {"id": "ID_K0266", "soru": "En çok ve en sık kullanılan düzenleyici işlem türü hangisidir?", "cevap": "Yönetmelik"},
    {"id": "ID_K0267", "soru": "Yeni sistemde Cumhurbaşkanı ne zaman göreve başlamıştır?", "cevap": "9 Temmuz 2018"},
    {"id": "ID_K0268", "soru": "Emniyet Genel Müdürlüğü adına hangi merci yönetmelik çıkarır?", "cevap": "İçişleri Bakanlığı"},
    {"id": "ID_K0269", "soru": "Cumhurbaşkanı tarafından çıkarılan yönetmeliklerin iptali için hangi mercie başvurulur?", "cevap": "Danıştay", "aciklama": "Anayasa m.124, 155."},
    {"id": "ID_K0270", "soru": "Millî Güvenlik Kurulu hangi tüzel kişilik içinde örgütlenmiştir?", "cevap": "Devlet tüzel kişiliği"},
    {"id": "ID_K0271", "soru": "Padişahın yetkilerini halk ile paylaştığı devlet rejimi hangisidir?", "cevap": "Meşruti monarşi"},
    {"id": "ID_K0272", "soru": "Cumhurbaşkanına kim vekâlet eder?", "cevap": "Cumhurbaşkanı yardımcısı", "aciklama": "Anayasa m.106."},
    {"id": "ID_K0273", "soru": "İlçe idaresinin hiyerarşik amiri kimdir?", "cevap": "Kaymakam", "aciklama": "5442 m.31."},
    {"id": "ID_K0274", "soru": "Belediye idaresinin idari vesayet makamı kimdir?", "cevap": "İçişleri Bakanı"},
    {"id": "ID_K0275", "soru": "KİT'lerin mali denetimi hangi merci tarafından yapılır?", "cevap": "Sayıştay", "aciklama": "6085 sayılı Kanun."},
    {"id": "ID_K0276", "soru": "Devlet Denetleme Kurulu hangi kurumları denetleyemez?", "cevap": "Yargı mercilerini ve Silahlı Kuvvetleri", "aciklama": "Anayasa m.108."},
    {"id": "ID_K0277", "soru": "İktisadi ve İdari Bilimler Fakültesinde okuyan bir öğrenci hakkında verilmiş olan okuldan uzaklaştırma işlemi için yetkili mahkeme hangisidir?", "cevap": "İdare mahkemesi"},
    {"id": "ID_K0278", "soru": "Vergi mahkemesi kararlarına karşı istinaf ve temyiz mercileri hangileridir?", "cevap": "İstinaf: bölge idare mahkemesi; temyiz: Danıştay (kanunda sayılan hallerde)", "aciklama": "2577 m.45–46."},
    {"id": "ID_K0279", "soru": "Bakanlıkların çıkarmış oldukları yönetmeliklerin iptali için nereye başvurulabilir?", "cevap": "Danıştay (ilk derece mahkemesi olarak)", "aciklama": "2575 sayılı Danıştay Kanunu m.24."},
    {"id": "ID_K0280", "soru": "Devletin millî güvenlik politikasıyla ilgili konularda Cumhurbaşkanına yardımcı olan kuruluş hangisidir?", "cevap": "Millî Güvenlik Kurulu", "aciklama": "Anayasa m.118."},
    {"id": "ID_K0281", "soru": "Mahalli idareler üzerinde merkezi idarenin vesayet denetimi hangi ilkeden kaynaklanmaktadır?", "cevap": "İdarenin bütünlüğü ilkesinden", "aciklama": "Anayasa m.127."},
    {"id": "ID_K0282", "soru": "Vesayet denetimi nasıl bir yetkidir?", "cevap": "İstisnai bir yetkidir (kanunla verilir, dar yorumlanır)."},
    {"id": "ID_K0283", "soru": "İdari fonksiyonun icrası sürecinde bireyler ile idare arasındaki konum nedir?", "cevap": "Eşit değildir; idare kamu gücüne sahiptir."},
    {"id": "ID_K0284", "soru": "Yönetimi hukuka bağlı devlete ne ad verilir?", "cevap": "Hukuk devleti", "aciklama": "Anayasa m.2."},
    {"id": "ID_K0285", "soru": "Tarım ve Orman Bakanlığı hangi ilkeye göre çalışır?", "cevap": "Merkezden yönetim"},
    {"id": "ID_K0286", "soru": "Bir memurun hakkında disiplin soruşturması ya da kovuşturması açıldığında, hizmet gerekleri açısından görevde kalmasında sakınca bulunan durumlarda öncelikle yapılan işleme ne ad verilir?", "cevap": "Görevden uzaklaştırma", "aciklama": "657 m.137."},
    {"id": "ID_K0287", "soru": "Temyiz, kanun yollarından hangisine girer?", "cevap": "Olağan kanun yoluna"},
    {"id": "ID_K0288", "soru": "Kanunun verdiği izinle idari bir işlemle kurulur, kamusal bütçesi vardır, kamu gücü kullanabilir, çalışanları TCK açısından memur sayılır. Bu özellikler hangi kişiliğe aittir?", "cevap": "Kamu tüzel kişiliği"},
    {"id": "ID_K0289", "soru": "Usulüne göre yürürlüğe konmuş uluslararası antlaşmaların hükmü nedir?", "cevap": "Kanun hükmündedir.", "aciklama": "Anayasa m.90."},
    {"id": "ID_K0290", "soru": "Cumhurbaşkanı yardımcılarını kim atar?", "cevap": "Cumhurbaşkanı", "aciklama": "Anayasa m.106."},
    {"id": "ID_K0291", "soru": "Millî Güvenlik Kurulunun üyelerinden iki tanesini yazınız.", "cevap": "Adalet Bakanı ve İçişleri Bakanı (ayrıca Dışişleri ve Millî Savunma bakanları, Cumhurbaşkanı yardımcıları, Genelkurmay Başkanı ve kuvvet komutanları)", "aciklama": "Anayasa m.118."},
    {"id": "ID_K0292", "soru": "Bir öğretmenin kasten yaralama fiili hakkında hangi yargı düzeni içerisinde dava açılır?", "cevap": "Adli yargı (kişisel kusur)"},
    {"id": "ID_K0293", "soru": "İdarenin sahip olduğu emretme, tek yanlı olarak hareket etme ve gerektiğinde zor kullanma suretiyle faaliyetlerini gerçekleştirebilme imkânına ne denir?", "cevap": "Kamu gücü"},
    {"id": "ID_K0294", "soru": "Vergi uyuşmazlıkları hangi yargı kolunda çözülür?", "cevap": "İdari yargıda (vergi mahkemeleri)"},
    {"id": "ID_K0295", "soru": "Temel hakların devlete karşı korunması hangi ilke gereği yapılır?", "cevap": "Hukuk devleti ilkesi"},
    {"id": "ID_K0296", "soru": "Köy nasıl bir birimdir?", "cevap": "Mahalli idare birimidir.", "aciklama": "Anayasa m.127."},
    {"id": "ID_K0297", "soru": "En yüksek devlet memuru kimdir?", "cevap": "Cumhurbaşkanlığı İdari İşler Başkanı", "aciklama": "1 sayılı CBK."},
    {"id": "ID_K0298", "soru": "İdari sözleşme türleri nelerdir?", "cevap": "Mali iltizam, kamu istikraz, kamu hizmeti imtiyazı, yeraltı ve yerüstü servetlerinin işletilmesine ilişkin sözleşmeler ve orman işletme sözleşmeleri"},
    {"id": "ID_K0299", "soru": "Bir polis memurunun görev yerinin, amirinin kişisel endişeleri dikkate alınarak değiştirilmesi biçimindeki bir işlem hangi yönden hukuka aykırı görülebilir?", "cevap": "Amaç unsuru yönünden (yetki saptırması)"},
    {"id": "ID_K0300", "soru": "İdare hangi anlamda kanun çıkarabilir?", "cevap": "Maddi anlamda (genel, soyut düzenleyici işlemlerle); şekli anlamda kanun yalnızca TBMM çıkarır."},
    {"id": "ID_K0301", "soru": "Belediyenin kolluk makamları kimlerden oluşur?", "cevap": "Belediye meclisi, encümeni, başkanı ve başkan yardımcıları", "aciklama": "5393."},
    {"id": "ID_K0302", "soru": "İdarenin vergi toplama benzeri mali nitelikteki bir hizmeti önceden belirlenen orantılı bir bedel üzerinden götürü olarak belirleyip özel kişilere gördürmesine ne ad verilir?", "cevap": "İltizam usulü"},
    {"id": "ID_K0303", "soru": "İdarenin hem kusursuz hem de kusurlu sorumluluğunu tam olarak ortadan kaldıran durum hangisidir?", "cevap": "Mücbir sebep"},
    {"id": "ID_K0304", "soru": "İdarenin bir hizmeti tek yanlı iradesi ile birlikte vereceği izinle özel kişilere gördürmesi usulüne ne ad verilir?", "cevap": "Ruhsat usulü"},
    {"id": "ID_K0305", "soru": "Doktorun ameliyat ettiği hastanın sakat kalmasına neden olması hangi biçimde görünen hizmet kusuruna örnektir?", "cevap": "Kamu hizmetinin kötü işlemesi"},
    {"id": "ID_K0306", "soru": "Öğretmenin siyasal nedenlerle öğrenciye kötü davranması hangi kusur türüne girer?", "cevap": "Kişisel kusur"},
    {"id": "ID_K0307", "soru": "Memurun sahte evrak düzenlemesi ve görev esnasında rüşvet alması hangi kusur türüne girer?", "cevap": "Kişisel kusur"},
    {"id": "ID_K0308", "soru": "Kamu hizmeti imtiyaz şartlaşma ve sözleşmeleri hakkında görüş bildirmek hangi merciin görevidir?", "cevap": "Danıştay", "aciklama": "Anayasa m.155."},
    {"id": "ID_K0309", "soru": "Bir yargı merci gibi hareket eden ama anayasada yüksek mahkeme sayılmayan merci hangisidir?", "cevap": "Sayıştay", "aciklama": "Anayasa m.160."},
    {"id": "ID_K0310", "soru": "Sayıştay denetimini hangi merci adına yapar?", "cevap": "TBMM", "aciklama": "Anayasa m.160."},
    {"id": "ID_K0311", "soru": "Millî Güvenlik Kurulu; devletin millî güvenlik siyasetinin tayini, tespiti ve uygulanması ile ilgili alınan tavsiye kararları ve koordinasyon konusundaki görüşlerini hangi mercie bildirir?", "cevap": "Cumhurbaşkanı", "aciklama": "Anayasa m.118."},
    {"id": "ID_K0312", "soru": "İl genel meclisi üyeleri, il sakinleri tarafından kaç yıl için seçilir?", "cevap": "5 yıl"},
    {"id": "ID_K0313", "soru": "RTÜK hangi ilkeye göre çalışan kuruluşlar arasında yer alır?", "cevap": "Hizmet yönünden yerinden yönetim (bağımsız idari otorite)"},
    {"id": "ID_K0314", "soru": "Bağımsız idari kurumların özellikleri nelerdir?", "cevap": "Yasama ve yürütme karşısında bağımsızdırlar; kendi yetki alanlarını düzenleme, izleme, denetleme ve gerektiğinde yaptırım uygulama yetkileri vardır; faaliyetleri yürütme organının hiyerarşisine ya da vesayet denetimine tabi değildir."},
    {"id": "ID_K0315", "soru": "65 yaşını doldurmuş olan bir yargıcın görevine hangi yöntemle son verilebilir?", "cevap": "Zorunlu emeklilik", "aciklama": "Anayasa m.139."},
    {"id": "ID_K0316", "soru": "Hâkimlik ve savcılık teminatı nedir?", "cevap": "Hâkimler ve savcılar azlolunamaz; kendileri istemedikçe 65 yaşından önce emekli edilemez; aylık, ödenek ve diğer özlük haklarından yoksun bırakılamaz.", "aciklama": "Anayasa m.139."},
    {"id": "ID_K0317", "soru": "Sadece idarenin eylem ve işlemlerine karşı açılan davalara bakmakla özel olarak görevli olan yargı düzeni sistemine ne denir?", "cevap": "İdari rejim (Kara Avrupası sistemi)"},
    {"id": "ID_K0318", "soru": "İdari yargı düzeni içerisinde bölge idare mahkemelerinin istinaf görevi, Danıştayın iş yükünü azaltmak için hangi sistemle getirilmiştir?", "cevap": "İstinaf sistemi"},
    {"id": "ID_K0319", "soru": "Ülkemizdeki idari yargı düzeninde genel görevli ilk derece mahkemesi hangisidir?", "cevap": "İdare mahkemesi", "aciklama": "2576 sayılı Kanun."},
    {"id": "ID_K0320", "soru": "İptal kararının gereği ne kadarlık bir süre içerisinde yerine getirilmelidir?", "cevap": "30 gün", "aciklama": "2577 m.28."},
    {"id": "ID_K0321", "soru": "İdarenin bir işlemi veya eylemi dolayısıyla uğranılan zarara karşı açılan davaya genel olarak ne ad verilir?", "cevap": "Tam yargı davası", "aciklama": "2577 m.2."},
    {"id": "ID_K0322", "soru": "İdari eyleme karşı dava ne zaman açılır?", "cevap": "Zarar gören önce idareye yazılı başvurur (bildirimden itibaren 1 yıl, her halde eylemden itibaren 5 yıl içinde); idarenin 30 gün içinde cevap vermemesi zımni reddir ve ret/cevap tarihinden itibaren 60 gün içinde dava açılabilir.", "aciklama": "2577 m.13."},
    {"id": "ID_K0323", "soru": "Aynı konuda aynı nedene bağlı olarak bir mahkemede dava açılması durumunda, bu konuda başka bir mahkemede dava açma imkânının bulunmamasına ne ad verilir?", "cevap": "Derdestlik"},
    {"id": "ID_K0324", "soru": "İdare kaça ayrılır? Bunlar nelerdir?", "cevap": "İkiye: organik (teşkilat) anlamda idare ve fonksiyonel (işlemler) anlamda idare"},
    {"id": "ID_K0325", "soru": "Geniş anlamda idare hukukunun tanımını yapınız.", "cevap": "İdarenin kuruluş ve işleyişine uygulanan hukuk kurallarının bütünüdür; bu kurallar kamu hukuku kuralları olabileceği gibi özel hukuk kuralları da olabilir."},
    {"id": "ID_K0326", "soru": "Türkiye Cumhuriyeti Devleti idaresinin görevleri nelerdir?", "cevap": "Millî güvenliği ve kolluk faaliyetlerini sağlamak, kamu hizmetlerini yürütmek, teşvik (özendirme ve destekleme) faaliyetleri, kendi personeline yönelik özyönetim (iç düzen), planlama ve ekonomik faaliyetler"},
    {"id": "ID_K0327", "soru": "Kamu tüzel kişiliği olan kurumlara beş örnek veriniz.", "cevap": "Yükseköğretim Kurulu, üniversiteler, yüksek teknoloji enstitüleri, ÖSYM ve Atatürk Kültür, Dil ve Tarih Yüksek Kurumu"},
    {"id": "ID_K0328", "soru": "Kamu tüzel kişiliği olmayan kurumlara dört örnek veriniz.", "cevap": "TBMM, Cumhurbaşkanlığı, yargı organları ve Yüksek Seçim Kurulu", "aciklama": "Bunlar Devlet tüzel kişiliği içinde yer alır."},
    {"id": "ID_K0329", "soru": "Hukuk devletinin gerekleri nelerdir?", "cevap": "Temel hak ve hürriyetlerin güvence altına alınması, yasaların anayasaya uygun ve genel olması, yargının bağımsızlığı, kanuni hâkim güvencesi, hâkimlik ve savcılık teminatı, yönetimin hukuka bağlılığı ve yargı denetimine tabi olması, idarenin mali denetimi, kanuniliği"},
    {"id": "ID_K0330", "soru": "Devlet organları olan yasama, yürütme ve yargı güçlerinin birbirinden ayrılmış oldukları bir devlet yönetim modeline ne ad verilir?", "cevap": "Kuvvetler ayrılığı"},
    {"id": "ID_K0331", "soru": "Cumhurbaşkanı seçilen milletvekilinin hangi üyeliği sona erer?", "cevap": "TBMM üyeliği", "aciklama": "Anayasa m.101."},
    {"id": "ID_K0332", "soru": "Türk Silahlı Kuvvetlerinin kullanılmasına kim karar verir?", "cevap": "Cumhurbaşkanı", "aciklama": "Anayasa m.117."},
    {"id": "ID_K0333", "soru": "Cumhurbaşkanı, yürütme yetkisine ilişkin konularda ne çıkarabilir?", "cevap": "Cumhurbaşkanlığı kararnamesi", "aciklama": "Anayasa m.104/17."},
    {"id": "ID_K0334", "soru": "Cumhurbaşkanı hakkında bir suç işlediği iddiasıyla soruşturma açılması için TBMM üye tamsayısının salt çoğunluğu önerge verir; Meclis önergeyi en geç kaç ay içinde görüşür?", "cevap": "1 ay", "aciklama": "Anayasa m.105."},
    {"id": "ID_K0335", "soru": "Cumhurbaşkanı, seçildikten sonra kaç Cumhurbaşkanı yardımcısı atayabilir?", "cevap": "Bir veya daha fazla", "aciklama": "Anayasa m.106."},
    {"id": "ID_K0336", "soru": "Devlet Denetleme Kurulunun işleyişi, üyelerinin görev süresi ve diğer özlük işleri neyle düzenlenir?", "cevap": "Cumhurbaşkanlığı kararnamesiyle", "aciklama": "Anayasa m.108."},
    {"id": "ID_K0337", "soru": "Devlet Denetleme Kurulunun özelliklerinden ikisini yazınız.", "cevap": "Cumhurbaşkanına bağlıdır, görevi doğrudan Cumhurbaşkanından alır; kurulun görev alanına giren kuruluşlar ve kişiler kurulca istenen her türlü bilgi ve belgeyi vermekle yükümlüdür.", "aciklama": "Anayasa m.108."},
    {"id": "ID_K0338", "soru": "MGK'ya katılanlardan hangisinin oy hakkı yoktur?", "cevap": "MGK Genel Sekreteri"},
    {"id": "ID_K0339", "soru": "Millî Güvenlik Kurulunun görevlerinden ikisini yazınız.", "cevap": "Devletin millî güvenlik siyasetinin tayini, tespiti ve uygulanması ile ilgili alınan kararlar ve koordinasyon konusunda görüş tespit etmek; millî hedeflerin gerçekleştirilmesine ilişkin tedbirleri belirlemek", "aciklama": "Anayasa m.118."},
    {"id": "ID_K0340", "soru": "1868'de \"Şûrâ-yı Devlet\" adıyla kurulan, 1925 ve 1982'de yeniden düzenlenen; hem yönetsel yargı sisteminin en üst düzey yüksek mahkemesi hem de merkezi yönetimin en yüksek danışma ve inceleme birimi olan kurum hangisidir?", "cevap": "Danıştay", "aciklama": "Anayasa m.155."},
    {"id": "ID_K0341", "soru": "İdari mahkemelerce verilen ve kanunun başka bir idari yargı merciine bırakmadığı karar ve hükümlerin son inceleme merci hangisidir?", "cevap": "Danıştay", "aciklama": "Anayasa m.155."},
    {"id": "ID_K0342", "soru": "1864'te \"Divan-ı Muhasebat\" ismiyle kurulan merci hangisidir?", "cevap": "Sayıştay"},
    {"id": "ID_K0343", "soru": "Sayıştay'ın görevlerinden ikisini yazınız.", "cevap": "Merkezi yönetim bütçesi kapsamındaki kamu idareleri ile sosyal güvenlik kurumlarının gelir-giderlerini ve mallarını TBMM adına denetlemek; sorumluların hesap ve işlemlerini kesin hükme bağlamak", "aciklama": "Anayasa m.160."},
    {"id": "ID_K0344", "soru": "5018 sayılı Kanun'un 1 sayılı cetvelinde (genel bütçeli idareler) yer alan kamu idarelerine iki örnek veriniz.", "cevap": "Yargıtay ve Danıştay (ayrıca bakanlıklar, TBMM, Sayıştay, AYM)"},
    {"id": "ID_K0345", "soru": "Merkezi yönetimin temel taşra birimi hangisidir?", "cevap": "İl", "aciklama": "Anayasa m.126."},
    {"id": "ID_K0346", "soru": "Mevcut bakanlık sayısı kaçtır?", "cevap": "17 (2023'ten itibaren)", "aciklama": "1 sayılı CBK; kitapta 16 yazar."},
    {"id": "ID_K0347", "soru": "İdari işlemler kaç unsurdan meydana gelir?", "cevap": "5 (yetki, şekil, sebep, konu, amaç)"},
    {"id": "ID_K0348", "soru": "İdari işlemlerde önemli şekil şartları nelerdir?", "cevap": "Yazılılık, gerekçe, savunma, ön işlemlerin yapılması, toplantı ve karar yeter sayısı, başvuru yolları ve süresinin gösterilmesi"},
    {"id": "ID_K0349", "soru": "Devlet memuru olmayan Ahmet'in sanki idarenin adamıymış gibi hareket edip, polis memuru Ali'nin yerine resmî evrağa imza atıp işlem tesis etmesine ne ad verilir?", "cevap": "Yetki gaspı"},
    {"id": "ID_K0350", "soru": "Sermayesinin %50'sinden fazlası bir KİK veya İDT'ye ait işletme veya işletmeler topluluğundan oluşan anonim şirketlere ne ad verilir?", "cevap": "Bağlı ortaklık", "aciklama": "233 sayılı KHK."},
    {"id": "ID_K0351", "soru": "Göreve geç gelen memura disiplin cezası verilmesi idari işlemin hangi unsurunu oluşturur?", "cevap": "Sebep"},
    {"id": "ID_K0352", "soru": "Yoklukla malul idari kararlara iki örnek veriniz.", "cevap": "İlgilinin talep ve rızasına bağlı idari kararlarda ilgilinin talep veya rızasının olmaması; yetki unsurundaki ağır sakatlık (fonksiyon gaspı, yetki gaspı, ağır ve bariz yetki tecavüzü)"},
    {"id": "ID_K0353", "soru": "İmtiyaz sözleşmelerinde idarenin yetkileri nelerdir?", "cevap": "Fiyat belirleme, sözleşmeyi tek yanlı değiştirme, fesih ve müeyyideler (para cezası, geçici el koyma) uygulayabilme"},
    {"id": "ID_K0354", "soru": "İmtiyaz sözleşmelerinde imtiyaz sahibinin hakları nelerdir?", "cevap": "Emprovizyon (öngörülemezlik) isteminde bulunma ve lehe kamulaştırma talep edebilme"},
    {"id": "ID_K0355", "soru": "Kamu hizmeti için zorunlu koşullar nelerdir?", "cevap": "Hizmetlerin kamuya yöneltilmiş ve kamuya yararlı olması; hizmetin ya kamu kuruluşlarınca ya da ilgili kamu kuruluşunun sıkı denetimi altında özel kişilerce yürütülmesi"},
    {"id": "ID_K0356", "soru": "Konularına göre kamu hizmeti türleri nelerdir?", "cevap": "İdari, iktisadi, sosyal ve bilimsel-teknik kamu hizmetleri"},
    {"id": "ID_K0357", "soru": "Devletin sanat, müzik araştırma ve bilim konularındaki faaliyetleri hangi hizmet türüne girer?", "cevap": "Bilimsel-teknik-kültürel kamu hizmetleri"},
    {"id": "ID_K0358", "soru": "Kamu hizmetleri kural olarak kim tarafından yürütülür?", "cevap": "Devlet ve diğer kamu tüzel kişileri"},
    {"id": "ID_K0359", "soru": "İdareler, kanunlarla yapmak yükümlülüğünde bulundukları kamu hizmetlerinin veya teşebbüslerinin yürütülmesi için gerekli olan hangi malları, kaynakları ve irtifak haklarını kamulaştırabilir?", "cevap": "Taşınmaz malları", "aciklama": "Anayasa m.46."},
    {"id": "ID_K0360", "soru": "Kamulaştırmanın ilk aşaması nedir?", "cevap": "Yeterli ödeneğin temini", "aciklama": "2942."},
    {"id": "ID_K0361", "soru": "Kamulaştırma işlemi hangi şekillerde sona erer?", "cevap": "30 gün içinde iptal davası açılarak; bedel kesinleşmeden önce idare masraflarını ödeyerek; bedel kesinleştikten sonra mal sahibinin rızası alınarak; geri alma hakkı kullanıldığında kamulaştırılmış mal iade edilerek"},
    {"id": "ID_K0362", "soru": "Mal sahibinin kabul etmesi halinde kamulaştırma bedeli yerine, idarenin kamu hizmetine tahsis edilmemiş olan taşınmaz mallarından verilmesi hangi kamulaştırma türünü anlatır?", "cevap": "Trampa yolu ile kamulaştırma", "aciklama": "2942."},
    {"id": "ID_K0363", "soru": "Özel mülkiyette bulunan boş arazilere idarenin geçici olarak el koymasına ne ad verilir?", "cevap": "Geçici işgal"},
    {"id": "ID_K0364", "soru": "Toplumsal düzenin sağlanmasında var olan açık kamu yararı nedeniyle kişilerin hak ve özgürlüklerinin yasama organının belirlediği sınırlar içerisinde sınırlanmasını içeren, kamu düzenini sağlamaya yönelik, gerektiğinde kuvvet kullanarak engelleyen faaliyete ne ad verilir?", "cevap": "Kolluk"},
    {"id": "ID_K0365", "soru": "Özel idari kolluk personelleri kimlerden oluşur?", "cevap": "Belediye zabıtası, köy korucuları, sınır kolluğu, çiftçi malları koruma kolluğu, orman kolluğu, gümrük kolluğu ve özel güvenlik"},
    {"id": "ID_K0366", "soru": "Yaşamın normal seyrini etkileyecek her türlü olumsuz durumun düzensizlik ve kargaşanın ortadan kaldırılması anlamına gelen kamu düzeni unsuru hangisidir?", "cevap": "Dirlik ve esenlik"},
    {"id": "ID_K0367", "soru": "Toplumun bulaşıcı ve salgın hastalıklardan korunarak sıhhatli bir biçimde gelişiminin sağlanması olarak ifade edilen kamu düzeni unsuru hangisidir?", "cevap": "Genel sağlık"},
    {"id": "ID_K0368", "soru": "Sigara içme yasağına aykırı davranan kişiye ceza kesilmesi hangi kolluk işlemine örnektir?", "cevap": "Bireysel kolluk işlemi"},
    {"id": "ID_K0369", "soru": "Cephaneliğin patlaması sonunda ölenlerin yakınlarına hangi ilke gereğince tazminat ödenmesine hükmedilir?", "cevap": "Tehlike ilkesi (kusursuz sorumluluk)"}
  ]
});
