// ============================================================
// CEZA HUKUKU – SORU DOSYASI
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
  id: "ceza",
  uniteler: ["Temel İlkeler ve Uygulama Alanı", "Suçun Unsurları, Kast-Taksir ve Hukuka Uygunluk", "Kusurluluk, Teşebbüs, İştirak ve İçtima", "Yaptırımlar, Zamanaşımı ve Şikâyet", "Özel Hükümler: Kişilere ve Kamu İdaresine Karşı Suçlar"],
  sorular: [
    {
      "id": "CEZA_U01_0001",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Suçta ve cezada kanunilik ilkesiyle ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Kanunun açıkça suç saymadığı fiil için ceza verilemez.", "Suç ve ceza içeren hükümler kıyas yoluyla uygulanamaz.", "Kanunda yazılı cezalardan başka ceza verilemez.", "Yönetmelikle suç ve ceza konulabilir.", "Suç ve ceza içeren hükümler kıyasa imkân verecek biçimde geniş yorumlanamaz."],
      "cevap": "D",
      "aciklama": "TCK m.2/2: idarenin düzenleyici işlemleriyle suç ve ceza konulamaz.",
      "kaynak": "TCK m.2"
    },
    {
      "id": "CEZA_U01_0002",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Bir fiil işlendiği tarihte 2–5 yıl hapisle cezalandırılıyordu. Yargılama sürerken yürürlüğe giren yeni kanun aynı fiil için 1–3 yıl hapis öngördü. Mahkeme hangi kanunu uygular?",
      "secenekler": ["Failin lehine olan sonraki kanunu", "Fiilin işlendiği tarihteki kanunu", "İki kanunun lehe hükümlerini birleştirerek", "Dava tarihindeki kanunu", "Aleyhe olan kanunu"],
      "cevap": "A",
      "aciklama": "TCK m.7/2: farklı hükümler varsa failin lehine olan kanun uygulanır; kanunlar birleştirilemez.",
      "kaynak": "TCK m.7"
    },
    {
      "id": "CEZA_U01_0003",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Kesinleşmiş mahkûmiyetten sonra fiili suç olmaktan çıkaran bir kanun yürürlüğe girerse ne olur?",
      "secenekler": ["Ceza aynen infaz edilir.", "Ceza yarı oranında indirilir.", "Hükümlü yeniden yargılanır.", "Cezanın infazı ve kanuni neticeleri kendiliğinden kalkar.", "Yalnızca adli sicil kaydı silinir."],
      "cevap": "D",
      "aciklama": "TCK m.7/1: mahkûmiyet varsa infaz ve kanuni neticeleri kendiliğinden kalkar.",
      "kaynak": "TCK m.7"
    },
    {
      "id": "CEZA_U01_0004",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "“Kimse başkasının fiilinden dolayı sorumlu tutulamaz.” hükmü hangi ilkeyi ifade eder?",
      "secenekler": ["Kanunilik", "Ceza sorumluluğunun şahsiliği", "Kıyas yasağı", "Ölçülülük", "Kusur ilkesi dışında objektif sorumluluk"],
      "cevap": "B",
      "aciklama": "TCK m.20/1: ceza sorumluluğu şahsidir.",
      "kaynak": "TCK m.20"
    },
    {
      "id": "CEZA_U01_0005",
      "unite": 1,
      "zorluk": "orta",
      "soru": "5237 sayılı TCK'ya göre tüzel kişiler hakkında aşağıdakilerden hangisi uygulanabilir?",
      "secenekler": ["Hapis cezası", "Kanunda öngörülen güvenlik tedbiri niteliğindeki yaptırımlar", "Adli para cezası", "Kısa süreli hapis cezası", "Ağırlaştırılmış müebbet hapis cezası"],
      "cevap": "B",
      "aciklama": "TCK m.20/2: tüzel kişilere ceza yaptırımı uygulanamaz; güvenlik tedbirleri saklıdır.",
      "kaynak": "TCK m.20"
    },
    {
      "id": "CEZA_U01_0006",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Açık denizde seyreden Türk bayraklı bir gemide yabancı uyruklu bir yolcu, başka bir yabancıyı yaralamıştır. Bu olay için hangisi doğrudur?",
      "secenekler": ["Yalnızca failin vatandaşı olduğu devletin kanunu uygulanır.", "Uluslararası sular olduğundan hiçbir kanun uygulanamaz.", "Adalet Bakanının talebi zorunludur.", "Suç Türkiye'de işlenmiş sayılır ve Türk kanunları uygulanır.", "Yalnızca mağdurun devletinin kanunu uygulanır."],
      "cevap": "D",
      "aciklama": "TCK m.8/2: açık denizde Türk deniz araçlarında işlenen suçlar Türkiye'de işlenmiş sayılır.",
      "kaynak": "TCK m.8"
    },
    {
      "id": "CEZA_U01_0007",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "TCK'ya göre ‘çocuk’ kavramı kimi ifade eder?",
      "secenekler": ["Henüz 18 yaşını doldurmamış kişiyi", "Henüz 15 yaşını doldurmamış kişiyi", "Henüz 12 yaşını doldurmamış kişiyi", "Henüz 21 yaşını doldurmamış kişiyi", "Ergin olmayan her kişiyi"],
      "cevap": "A",
      "aciklama": "TCK m.6/1-b: henüz 18 yaşını doldurmamış kişi çocuktur.",
      "kaynak": "TCK m.6"
    },
    {
      "id": "CEZA_U01_0008",
      "unite": 1,
      "zorluk": "orta",
      "soru": "TCK'ya göre kamusal faaliyetin yürütülmesine atama veya seçilme yoluyla ya da herhangi bir surette sürekli, süreli veya geçici olarak katılan kişi hangi kavramla ifade edilir?",
      "secenekler": ["Devlet memuru", "Kolluk görevlisi", "Yargı mensubu", "Kamu görevlisi", "Sözleşmeli personel"],
      "cevap": "D",
      "aciklama": "Bu tanım TCK m.6/1-c'deki kamu görevlisi tanımıdır.",
      "kaynak": "TCK m.6"
    },
    {
      "id": "CEZA_U01_0009",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "Suçun kanuni tanımındaki unsurların bilerek ve istenerek gerçekleştirilmesine ne ad verilir?",
      "secenekler": ["Kast", "Taksir", "Bilinçli taksir", "Hata", "Saik"],
      "cevap": "A",
      "aciklama": "TCK m.21/1'deki kast tanımıdır.",
      "kaynak": "TCK m.21"
    },
    {
      "id": "CEZA_U02_0001",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Kişinin, suçun kanuni tanımındaki unsurların gerçekleşebileceğini öngörmesine rağmen fiili işlemesi hangi kavramla ifade edilir?",
      "secenekler": ["Olası kast", "Doğrudan kast", "Bilinçli taksir", "Basit taksir", "Netice sebebiyle ağırlaşmış suç"],
      "cevap": "A",
      "aciklama": "TCK m.21/2: olası kast tanımıdır ve ceza indirimi sebebidir.",
      "kaynak": "TCK m.21"
    },
    {
      "id": "CEZA_U02_0002",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Sürücü A, yaya geçidindeki kalabalığı görünce “birine çarpabilirim ama olursa olsun” diyerek hızını düşürmeden geçmiş ve bir yayayı öldürmüştür. A'nın manevi unsuru nedir?",
      "secenekler": ["Bilinçli taksir", "Basit taksir", "Doğrudan kast", "Kusursuzluk", "Olası kast"],
      "cevap": "E",
      "aciklama": "Neticeyi öngörüp kabullenme olası kasttır; bilinçli taksirde fail neticeyi istemez ve önleyebileceğine güvenir.",
      "kaynak": "TCK m.21, m.22"
    },
    {
      "id": "CEZA_U02_0003",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Bilinçli taksir halinde taksirli suça ilişkin ceza nasıl belirlenir?",
      "secenekler": ["Yarı oranında indirilir.", "Dörtte bir oranında indirilir.", "Üçte birden yarısına kadar artırılır.", "İki katına çıkarılır.", "Ceza verilmez."],
      "cevap": "C",
      "aciklama": "TCK m.22/3: bilinçli taksirde ceza üçte birden yarısına kadar artırılır.",
      "kaynak": "TCK m.22"
    },
    {
      "id": "CEZA_U02_0004",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Meşru savunmanın şartlarıyla ilgili aşağıdakilerden hangisi yanlıştır?",
      "secenekler": ["Saldırı haksız olmalıdır.", "Saldırı gerçekleşmiş, gerçekleşmesi veya tekrarı muhakkak olmalıdır.", "Savunma, saldırıyla orantılı olmalıdır.", "Saldırı o anda başka suretle defetme olanağı bulunmamalıdır.", "Saldırı yalnızca savunanın kendisine yönelmiş olmalıdır."],
      "cevap": "E",
      "aciklama": "TCK m.25/1: başkasına ait bir hakka yönelik saldırıya karşı da meşru savunma mümkündür.",
      "kaynak": "TCK m.25"
    },
    {
      "id": "CEZA_U02_0005",
      "unite": 2,
      "zorluk": "orta",
      "soru": "A, arkadaşı B'nin açık izniyle B'ye ait eski bir masayı kırmıştır. A'nın ceza sorumluluğunu ortadan kaldıran neden hangisidir?",
      "secenekler": ["İlgilinin rızası", "Meşru savunma", "Zorunluluk hali", "Kanunun hükmünü yerine getirme", "Haksız tahrik"],
      "cevap": "A",
      "aciklama": "TCK m.26/2: kişinin mutlak tasarruf edebileceği hakka ilişkin rızası halinde ceza verilmez.",
      "kaynak": "TCK m.26"
    },
    {
      "id": "CEZA_U02_0006",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Kamu görevlisi, amirinden aldığı ve konusu suç teşkil eden emri yerine getirmiştir. TCK'ya göre kural olarak kim sorumludur?",
      "secenekler": ["Emri veren ile yerine getiren birlikte", "Yalnızca emri veren", "Yalnızca emri yerine getiren", "Hiçbiri", "Emri veren; yerine getirene zorunlu indirim uygulanır"],
      "cevap": "A",
      "aciklama": "TCK m.24/3: konusu suç olan emri yerine getiren ile emri veren sorumludur.",
      "kaynak": "TCK m.24"
    },
    {
      "id": "CEZA_U02_0007",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Meşru savunmada sınırın mazur görülebilecek heyecan, korku veya telaştan ileri gelerek aşılması halinde ne olur?",
      "secenekler": ["Ceza yarı oranında indirilir.", "Ceza üçte bir oranında indirilir.", "Tam ceza verilir.", "Yalnızca adli para cezası verilir.", "Faile ceza verilmez."],
      "cevap": "E",
      "aciklama": "TCK m.27/2: bu halde faile ceza verilmez.",
      "kaynak": "TCK m.27"
    },
    {
      "id": "CEZA_U02_0008",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi suçun maddi unsurlarından biri değildir?",
      "secenekler": ["Fail", "Fiil (hareket)", "Kast", "Netice", "Suçun konusu"],
      "cevap": "C",
      "aciklama": "Kast manevi unsurdur.",
      "kaynak": "Suç genel teorisi"
    },
    {
      "id": "CEZA_U02_0009",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi hukuka uygunluk nedenidir?",
      "secenekler": ["Meşru savunma", "Akıl hastalığı", "Karşı konulamaz cebir", "Hata", "İstem dışı sarhoşluk"],
      "cevap": "A",
      "aciklama": "Meşru savunma hukuka uygunluk; diğerleri kusurluluğu etkileyen nedenlerdir.",
      "kaynak": "TCK m.25, m.28–34"
    },
    {
      "id": "CEZA_U03_0001",
      "unite": 3,
      "zorluk": "orta",
      "soru": "11 yaşındaki bir çocuğun kasten işlediği bir suç için hangisi doğrudur?",
      "secenekler": ["Cezası yarı oranında indirilir.", "Algılama yeteneğine bakılarak ceza verilir.", "Tam ceza verilir.", "Velisine ceza verilir.", "Ceza sorumluluğu yoktur; çocuklara özgü güvenlik tedbirleri uygulanabilir."],
      "cevap": "E",
      "aciklama": "TCK m.31/1: 12 yaşını doldurmamış çocukların ceza sorumluluğu yoktur.",
      "kaynak": "TCK m.31"
    },
    {
      "id": "CEZA_U03_0002",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Fiili işlediği sırada 12 yaşını doldurmuş, ancak 15 yaşını doldurmamış olan çocuğun ceza sorumluluğu hangi ölçüte bağlıdır?",
      "secenekler": ["Yalnızca suçun ağırlığına", "Ailesinin talebine", "Fiilin hukuki anlam ve sonuçlarını algılama ve davranışlarını yönlendirme yeteneğine", "Mağdurun şikâyetine", "Okul durumuna"],
      "cevap": "C",
      "aciklama": "TCK m.31/2: algılama ve yönlendirme yeteneği gelişmemişse ceza sorumluluğu yoktur.",
      "kaynak": "TCK m.31"
    },
    {
      "id": "CEZA_U03_0003",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Kişinin işlemeyi kastettiği suçu elverişli hareketlerle doğrudan doğruya icraya başlayıp elinde olmayan nedenlerle tamamlayamaması hangi kavramdır?",
      "secenekler": ["Gönüllü vazgeçme", "Etkin pişmanlık", "Hazırlık hareketi", "Teşebbüs", "İştirak"],
      "cevap": "D",
      "aciklama": "TCK m.35'teki teşebbüs tanımıdır.",
      "kaynak": "TCK m.35"
    },
    {
      "id": "CEZA_U03_0004",
      "unite": 3,
      "zorluk": "zor",
      "soru": "Hırsızlık amacıyla bir eve giren A, kendi isteğiyle hiçbir şey almadan evden çıkmıştır. A'nın durumu için hangisi doğrudur?",
      "secenekler": ["Hırsızlığa teşebbüsten cezalandırılır.", "Tamamlanmış hırsızlıktan cezalandırılır.", "Hiçbir suçtan sorumlu olmaz.", "Hırsızlığa teşebbüsten cezalandırılmaz; konut dokunulmazlığının ihlalinden sorumlu olur.", "Yalnızca etkin pişmanlık indirimi alır."],
      "cevap": "D",
      "aciklama": "TCK m.36: gönüllü vazgeçmede teşebbüsten ceza verilmez; tamamlanan kısım ayrı suçsa ondan sorumlu olunur.",
      "kaynak": "TCK m.36"
    },
    {
      "id": "CEZA_U03_0005",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Başkasını suç işlemeye azmettiren kişi TCK'ya göre nasıl cezalandırılır?",
      "secenekler": ["İşlenen suçun cezası ile", "Suçun cezasının yarısı ile", "Suçun cezasının üçte biri ile", "Yalnızca adli para cezası ile", "Ceza verilmez"],
      "cevap": "A",
      "aciklama": "TCK m.38/1: azmettiren, işlenen suçun cezasıyla cezalandırılır.",
      "kaynak": "TCK m.38"
    },
    {
      "id": "CEZA_U03_0006",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Suç işleme kararını kuvvetlendiren veya suçun işlenmesinden sonra yardımda bulunacağını vaat eden kişi hangi iştirak şekliyle sorumludur?",
      "secenekler": ["Azmettirme", "Müşterek faillik", "Dolaylı faillik", "Yardım etme", "Suç üstlenme"],
      "cevap": "D",
      "aciklama": "TCK m.39/2-a: bu davranışlar yardım etmedir.",
      "kaynak": "TCK m.39"
    },
    {
      "id": "CEZA_U03_0007",
      "unite": 3,
      "zorluk": "zor",
      "soru": "A, hemşireye zehirli bir sıvıyı ‘vitamin’ diye verip hastaya enjekte ettirmiş ve hasta ölmüştür. Hemşire durumu bilmemektedir. A'nın sorumluluğu nedir?",
      "secenekler": ["Azmettiren olarak sorumludur.", "Yardım eden olarak sorumludur.", "Dolaylı fail olarak sorumludur.", "Hiç sorumlu değildir.", "Yalnızca taksirle sorumludur."],
      "cevap": "C",
      "aciklama": "TCK m.37/2: suçun işlenmesinde başkasını araç olarak kullanan dolaylı failtir.",
      "kaynak": "TCK m.37"
    },
    {
      "id": "CEZA_U03_0008",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Bir suç işleme kararının icrası kapsamında değişik zamanlarda aynı kişiye karşı aynı suçun birden fazla işlenmesi halinde hangi kurum uygulanır?",
      "secenekler": ["Fikri içtima", "Zincirleme suç", "Gerçek içtima", "Bileşik suç", "Temadi eden suç"],
      "cevap": "B",
      "aciklama": "TCK m.43: zincirleme suçta tek ceza verilir ve dörtte birden dörtte üçüne kadar artırılır.",
      "kaynak": "TCK m.43"
    },
    {
      "id": "CEZA_U03_0009",
      "unite": 3,
      "zorluk": "orta",
      "soru": "İşlediği bir fiil ile birden fazla farklı suçun oluşmasına sebebiyet veren kişi nasıl cezalandırılır?",
      "secenekler": ["En ağır cezayı gerektiren suçtan", "Her suçtan ayrı ayrı", "En hafif cezayı gerektiren suçtan", "Cezalar toplanarak yarısı indirilerek", "Zincirleme suç hükümlerine göre"],
      "cevap": "A",
      "aciklama": "TCK m.44: fikri içtimada en ağır cezayı gerektiren suçtan cezalandırılır.",
      "kaynak": "TCK m.44"
    },
    {
      "id": "CEZA_U03_0010",
      "unite": 3,
      "zorluk": "kolay",
      "soru": "Haksız bir fiilin meydana getirdiği hiddet veya şiddetli elemin etkisi altında suç işleyen kişi lehine uygulanan kurum hangisidir?",
      "secenekler": ["Meşru savunma", "Zorunluluk hali", "Gönüllü vazgeçme", "Haksız tahrik", "Etkin pişmanlık"],
      "cevap": "D",
      "aciklama": "TCK m.29'daki haksız tahrik indirimidir.",
      "kaynak": "TCK m.29"
    },
    {
      "id": "CEZA_U04_0001",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi 5237 sayılı TCK'da yer alan cezalar arasında değildir?",
      "secenekler": ["Hafif hapis cezası", "Ağırlaştırılmış müebbet hapis cezası", "Müebbet hapis cezası", "Süreli hapis cezası", "Adli para cezası"],
      "cevap": "A",
      "aciklama": "Hafif hapis 765 sayılı eski TCK'daydı; 5237 sayılı TCK'da yoktur.",
      "kaynak": "TCK m.45–52"
    },
    {
      "id": "CEZA_U04_0002",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Kanunda aksi belirtilmedikçe süreli hapis cezasının alt ve üst sınırı hangisidir?",
      "secenekler": ["1 gün – 20 yıl", "1 ay – 20 yıl", "1 ay – 30 yıl", "3 ay – 20 yıl", "1 ay – 15 yıl"],
      "cevap": "B",
      "aciklama": "TCK m.49/1.",
      "kaynak": "TCK m.49"
    },
    {
      "id": "CEZA_U04_0003",
      "unite": 4,
      "zorluk": "orta",
      "soru": "TCK'ya göre kısa süreli hapis cezası hangisidir?",
      "secenekler": ["6 ay veya daha az süreli hapis cezası", "2 yıl veya daha az süreli hapis cezası", "Hükmedilen 1 yıl veya daha az süreli hapis cezası", "3 ay veya daha az süreli hapis cezası", "Alt sınırı 1 yıl olan hapis cezası"],
      "cevap": "C",
      "aciklama": "TCK m.49/2: bir yıl veya daha az süreli hapis cezası kısa sürelidir.",
      "kaynak": "TCK m.49"
    },
    {
      "id": "CEZA_U04_0004",
      "unite": 4,
      "zorluk": "zor",
      "soru": "Kanunda aksi belirtilmedikçe adli para cezasının gün sayısı ve bir gün karşılığı miktarı için hangisi doğrudur?",
      "secenekler": ["10–365 gün; günlüğü 20–100 TL", "5–730 gün; günlüğü 10–50 TL", "1–1000 gün; günlüğü 20–100 TL", "5–730 gün; günlüğü 20–100 TL", "5–365 gün; günlüğü 50–200 TL"],
      "cevap": "D",
      "aciklama": "TCK m.52: 5 günden az, 730 günden fazla olamaz; günlüğü en az 20, en fazla 100 TL.",
      "kaynak": "TCK m.52"
    },
    {
      "id": "CEZA_U04_0005",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Müebbet hapis cezasını gerektiren suçlarda dava zamanaşımı süresi kaç yıldır?",
      "secenekler": ["20", "25", "30", "15", "8"],
      "cevap": "B",
      "aciklama": "TCK m.66: ağırlaştırılmış müebbette 30, müebbette 25 yıl.",
      "kaynak": "TCK m.66"
    },
    {
      "id": "CEZA_U04_0006",
      "unite": 4,
      "zorluk": "zor",
      "soru": "Kanunda 1 yıldan 4 yıla kadar hapis cezası öngörülen bir suçta dava zamanaşımı süresi kaç yıldır?",
      "secenekler": ["8", "5", "10", "15", "12"],
      "cevap": "A",
      "aciklama": "TCK m.66/1-e: beş yıldan fazla olmamak üzere hapis gerektiren suçlarda 8 yıldır.",
      "kaynak": "TCK m.66"
    },
    {
      "id": "CEZA_U04_0007",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Şikâyete bağlı suçlarda şikâyet süresi ne zaman başlar ve ne kadardır?",
      "secenekler": ["Fiil ve failin öğrenildiği günden itibaren 6 ay", "Suç tarihinden itibaren 6 ay", "Fiilin öğrenildiği günden itibaren 1 yıl", "Suç tarihinden itibaren 3 ay", "Failin öğrenildiği günden itibaren 30 gün"],
      "cevap": "A",
      "aciklama": "TCK m.73/1: fiil ve faili öğrenmeden itibaren altı ay.",
      "kaynak": "TCK m.73"
    },
    {
      "id": "CEZA_U04_0008",
      "unite": 4,
      "zorluk": "zor",
      "soru": "Kanunda aksi yazılmamışsa şikâyetten vazgeçme ile ilgili hangisi doğrudur?",
      "secenekler": ["Vazgeçme her durumda davayı düşürür.", "Vazgeçme, bunu kabul etmeyen sanığı etkilemez.", "Vazgeçme ancak soruşturma evresinde mümkündür.", "Vazgeçme yalnızca cezayı yarıya indirir.", "Vazgeçme hükümden sonra da infazı durdurur."],
      "cevap": "B",
      "aciklama": "TCK m.73: vazgeçme, kabul etmeyen sanığı etkilemez.",
      "kaynak": "TCK m.73"
    },
    {
      "id": "CEZA_U04_0009",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Kamu davasını düşüren ve hükmolunan cezayı bütün sonuçlarıyla ortadan kaldıran kurum hangisidir?",
      "secenekler": ["Özel af", "Hükmün açıklanmasının geri bırakılması", "Genel af", "Etkin pişmanlık", "Ceza zamanaşımı"],
      "cevap": "C",
      "aciklama": "TCK m.65/1: genel af halinde kamu davası düşer, cezalar bütün neticeleriyle kalkar.",
      "kaynak": "TCK m.65"
    },
    {
      "id": "CEZA_U04_0010",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Etkin pişmanlık ile gönüllü vazgeçme arasındaki temel fark nedir?",
      "secenekler": ["İkisi aynı kurumdur.", "Etkin pişmanlık suç tamamlandıktan sonra, gönüllü vazgeçme tamamlanmadan önce söz konusudur.", "Gönüllü vazgeçme yalnızca taksirli suçlarda uygulanır.", "Etkin pişmanlık yalnızca teşebbüste uygulanır.", "Gönüllü vazgeçme sadece mahkeme aşamasında mümkündür."],
      "cevap": "B",
      "aciklama": "Gönüllü vazgeçme icra hareketleri tamamlanmadan; etkin pişmanlık suç tamamlandıktan sonra gerçekleşir.",
      "kaynak": "TCK m.36"
    },
    {
      "id": "CEZA_U05_0001",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Kamu görevlisinin, görevi nedeniyle zilyedliği kendisine devredilmiş olan malı kendisinin veya başkasının zimmetine geçirmesi hangi suçtur?",
      "secenekler": ["İrtikap", "Rüşvet", "Zimmet", "Güveni kötüye kullanma", "Görevi kötüye kullanma"],
      "cevap": "C",
      "aciklama": "TCK m.247'deki zimmet suçudur.",
      "kaynak": "TCK m.247"
    },
    {
      "id": "CEZA_U05_0002",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Kamu görevlisinin görevinin sağladığı nüfuzu kötüye kullanarak bir kimseyi kendisine yarar sağlamaya icbar etmesi hangi suçtur?",
      "secenekler": ["İrtikap", "Rüşvet", "Zimmet", "Nitelikli dolandırıcılık", "Yağma"],
      "cevap": "A",
      "aciklama": "TCK m.250'deki icbar suretiyle irtikaptır.",
      "kaynak": "TCK m.250"
    },
    {
      "id": "CEZA_U05_0003",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Trafik denetiminde bir görevli, sürücüyle anlaşarak para karşılığında ceza yazmaktan vazgeçmiştir. Görevlinin işlediği suç hangisidir?",
      "secenekler": ["İrtikap", "Zimmet", "Görevi ihmal", "Rüşvet", "Nitelikli dolandırıcılık"],
      "cevap": "D",
      "aciklama": "Görevin gereklerine aykırı iş için karşılıklı anlaşmaya varılması rüşvettir.",
      "kaynak": "TCK m.252"
    },
    {
      "id": "CEZA_U05_0004",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Bir kişinin cebir veya tehdit kullanarak başkasının taşınır malını elinden alması hangi suçu oluşturur?",
      "secenekler": ["Hırsızlık", "Dolandırıcılık", "Yağma", "Güveni kötüye kullanma", "Şantaj"],
      "cevap": "C",
      "aciklama": "Cebir/tehdit ile mal alma yağmadır.",
      "kaynak": "TCK m.148"
    },
    {
      "id": "CEZA_U05_0005",
      "unite": 5,
      "zorluk": "zor",
      "soru": "Kiraladığı aracı süresi dolduğu halde sahibine iade etmeyip satan kişinin eylemi hangi suçu oluşturur?",
      "secenekler": ["Hırsızlık", "Yağma", "Dolandırıcılık", "Mala zarar verme", "Güveni kötüye kullanma"],
      "cevap": "E",
      "aciklama": "Zilyedliği devredilmiş mal üzerinde sahibi gibi tasarruf güveni kötüye kullanmadır.",
      "kaynak": "TCK m.155"
    },
    {
      "id": "CEZA_U05_0006",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Kamu görevlisine karşı, görevini yapmasını engellemek amacıyla cebir veya tehdit kullanılması hangi suçtur?",
      "secenekler": ["Kasten yaralama", "Tehdit", "Hakaret", "Görevi yaptırmamak için direnme", "Kişiyi hürriyetinden yoksun kılma"],
      "cevap": "D",
      "aciklama": "TCK m.265.",
      "kaynak": "TCK m.265"
    },
    {
      "id": "CEZA_U05_0007",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Yetkili makama ihbarda bulunarak, işlemediğini bildiği halde bir kimse hakkında soruşturma başlatılmasını sağlamak amacıyla ona hukuka aykırı bir fiil isnat etmek hangi suçtur?",
      "secenekler": ["Suç üstlenme", "Yalan tanıklık", "Hakaret", "İftira", "Suç uydurma"],
      "cevap": "D",
      "aciklama": "TCK m.267'deki iftira suçudur.",
      "kaynak": "TCK m.267"
    },
    {
      "id": "CEZA_U05_0008",
      "unite": 5,
      "zorluk": "zor",
      "soru": "“Bana bu işi yaptırmazsan hakkındaki özel bilgileri herkese açıklarım” diyerek bir kişiyi yükümlü olmadığı bir işi yapmaya zorlamak hangi suçu oluşturur?",
      "secenekler": ["Tehdit", "Yağma", "Cebir", "Hakaret", "Şantaj"],
      "cevap": "E",
      "aciklama": "Şeref veya saygınlığa zarar verecek hususları açıklama tehdidiyle zorlama şantajdır.",
      "kaynak": "TCK m.107"
    },
    {
      "id": "CEZA_U05_0009",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "Bir kişiyi hukuka aykırı olarak bir yere gitmek veya bir yerde kalmak hürriyetinden yoksun bırakmak hangi suçtur?",
      "secenekler": ["Kişiyi hürriyetinden yoksun kılma", "Tehdit", "Konut dokunulmazlığının ihlali", "Şantaj", "Eziyet"],
      "cevap": "A",
      "aciklama": "TCK m.109.",
      "kaynak": "TCK m.109"
    },
    {
      "id": "CEZA_U05_0010",
      "unite": 5,
      "zorluk": "zor",
      "soru": "Görevi kötüye kullanma suçunun (TCK m.257) niteliği ile ilgili aşağıdakilerden hangisi doğrudur?",
      "secenekler": ["Yalnızca rüşvetle birlikte işlenebilir.", "Kanunda ayrıca suç olarak tanımlanan haller dışında uygulanan tamamlayıcı bir suçtur.", "Kamu görevlisi olmayan kişiler tarafından da işlenebilir.", "Şikâyete bağlıdır.", "Taksirle de işlenebilir."],
      "cevap": "B",
      "aciklama": "m.257 ‘kanunda ayrıca suç olarak tanımlanan haller dışında’ uygulanır.",
      "kaynak": "TCK m.257"
    }
  ],
  kartlar: [
  ]
});
