// ============================================================
// CEZA MUHAKEMESI HUKUKU – SORU DOSYASI
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
  id: "cmk",
  uniteler: ["Temel Kavramlar, Görev ve Yetki", "Yakalama, Gözaltı ve Tutuklama", "Arama, Elkoyma ve İletişimin Denetlenmesi", "Soruşturma ve Kovuşturma", "Kanun Yolları"],
  sorular: [
    {
      "id": "CMK_U01_0001",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "CMK'ya göre soruşturma evresinde suç şüphesi altında bulunan kişiye ne ad verilir?",
      "secenekler": ["Sanık", "Hükümlü", "Katılan", "Şüpheli", "Müşteki"],
      "cevap": "D",
      "aciklama": "Soruşturmada şüpheli, kovuşturmada sanık denir.",
      "kaynak": "CMK m.2"
    },
    {
      "id": "CMK_U01_0002",
      "unite": 1,
      "zorluk": "orta",
      "soru": "CMK'ya göre kovuşturma evresi hangi aşamadan itibaren başlar?",
      "secenekler": ["Suç şüphesinin öğrenilmesiyle", "Şüphelinin yakalanmasıyla", "İddianamenin kabulüyle", "İfadenin alınmasıyla", "Tutuklama kararıyla"],
      "cevap": "C",
      "aciklama": "Kovuşturma iddianamenin kabulünden hükmün kesinleşmesine kadar süren evredir.",
      "kaynak": "CMK m.2"
    },
    {
      "id": "CMK_U01_0003",
      "unite": 1,
      "zorluk": "orta",
      "soru": "5235 sayılı Kanun'a göre kanunda ağırlaştırılmış müebbet, müebbet ve kaç yıldan fazla hapis cezası öngörülen suçlar ağır ceza mahkemesinin görevine girer?",
      "secenekler": ["10 yıl", "5 yıl", "7 yıl", "12 yıl", "15 yıl"],
      "cevap": "A",
      "aciklama": "Üst sınırı 10 yıldan fazla hapis gerektiren suçlar ağır cezanın görevindedir.",
      "kaynak": "5235 s. Kanun m.12"
    },
    {
      "id": "CMK_U01_0004",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Soruşturma evresinde tutuklama, arama ve elkoyma gibi koruma tedbirlerine ilişkin kararları kural olarak hangi merci verir?",
      "secenekler": ["Asliye ceza mahkemesi", "Ağır ceza mahkemesi", "Bölge adliye mahkemesi", "Sulh ceza hâkimliği", "İcra ceza mahkemesi"],
      "cevap": "D",
      "aciklama": "Soruşturma işlemlerine ilişkin hâkim kararlarını sulh ceza hâkimliği verir.",
      "kaynak": "5235 s. Kanun m.10"
    },
    {
      "id": "CMK_U01_0005",
      "unite": 1,
      "zorluk": "kolay",
      "soru": "CMK'ya göre davaya bakmak yetkisi kural olarak hangi yer mahkemesine aittir?",
      "secenekler": ["Şüphelinin yerleşim yeri", "Mağdurun yerleşim yeri", "Şüphelinin yakalandığı yer", "Başkent", "Suçun işlendiği yer"],
      "cevap": "E",
      "aciklama": "CMK m.12/1.",
      "kaynak": "CMK m.12"
    },
    {
      "id": "CMK_U01_0006",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Şüpheli veya sanığın, soruşturma veya kovuşturma konusu olayla ilgili olarak hâkim veya mahkeme tarafından dinlenmesine ne ad verilir?",
      "secenekler": ["İfade alma", "Sorgu", "Tanık dinleme", "Yüzleştirme", "Keşif"],
      "cevap": "B",
      "aciklama": "Kolluk veya savcının dinlemesi ifade almadır.",
      "kaynak": "CMK m.2"
    },
    {
      "id": "CMK_U01_0007",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Şüpheli veya sanığın savunmasını yapan avukata CMK'da ne ad verilir?",
      "secenekler": ["Vekil", "Temsilci", "Müdafi", "Kayyım", "Katılan"],
      "cevap": "C",
      "aciklama": "Katılan, mağdur veya malen sorumlunun avukatı ise vekildir.",
      "kaynak": "CMK m.2"
    },
    {
      "id": "CMK_U01_0008",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Aşağıdaki şüphelilerden hangisine istemi aranmaksızın zorunlu olarak müdafi atanması gerekmez?",
      "secenekler": ["Suç tarihinde 16 yaşında olan şüpheli", "Sağır ve dilsiz olan şüpheli", "Kendisini savunamayacak derecede malul şüpheli", "Alt sınırı 6 yıl hapis gerektiren suçtan şüpheli", "Alt sınırı 3 yıl hapis cezası gerektiren suçtan şüpheli yetişkin"],
      "cevap": "E",
      "aciklama": "CMK m.150: çocuk, malul, sağır-dilsiz ve alt sınırı 5 yıldan fazla hapis gerektiren suçlarda zorunlu müdafi atanır.",
      "kaynak": "CMK m.150"
    },
    {
      "id": "CMK_U01_0009",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Aşağıdakilerden hangisi CMK'ya göre şüpheli aleyhine tanıklıktan çekinme hakkına sahip değildir?",
      "secenekler": ["Şüphelinin nişanlısı", "Evlilik bağı sona ermiş eski eşi", "Şüphelinin amcasının oğlu", "Şüphelinin kardeşinin çocuğu", "Şüphelinin annesi"],
      "cevap": "C",
      "aciklama": "Üçüncü derece dahil kan hısımları çekinebilir; amca oğlu dördüncü derecedir.",
      "kaynak": "CMK m.45"
    },
    {
      "id": "CMK_U01_0010",
      "unite": 1,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi CMK'ya göre ifade alma ve sorguda yasak usuller arasında yer almaz?",
      "secenekler": ["Yorma", "Aldatma", "Kanunun öngörmediği bir yarar vaat etme", "Şüpheliye susma hakkının hatırlatılması", "İlaç verme"],
      "cevap": "D",
      "aciklama": "Susma hakkının hatırlatılması zorunlu bir güvencedir; diğerleri CMK m.148'de yasaktır.",
      "kaynak": "CMK m.147–148"
    },
    {
      "id": "CMK_U01_0011",
      "unite": 1,
      "zorluk": "zor",
      "soru": "Müdafi bulunmaksızın kollukta alınan ifade için CMK'ya göre hangisi doğrudur?",
      "secenekler": ["Her durumda hükme esas alınabilir.", "Hâkim veya mahkeme huzurunda doğrulanmadıkça hükme esas alınamaz.", "Yalnızca savcı onaylarsa hükme esas alınır.", "Şüpheli imzaladıysa kesin delildir.", "Hiçbir koşulda kullanılamaz ve dosyadan çıkarılır."],
      "cevap": "B",
      "aciklama": "CMK m.148/4.",
      "kaynak": "CMK m.148"
    },
    {
      "id": "CMK_U02_0001",
      "unite": 2,
      "zorluk": "kolay",
      "soru": "CMK'ya göre suçüstü halinde kaçma şüphesi bulunan veya kimliği hemen belirlenemeyen kişiyi kim geçici olarak yakalayabilir?",
      "secenekler": ["Yalnızca polis", "Yalnızca Cumhuriyet savcısı", "Herkes", "Yalnızca hâkim", "Yalnızca jandarma"],
      "cevap": "C",
      "aciklama": "CMK m.90/1: herkes geçici yakalama yapabilir.",
      "kaynak": "CMK m.90"
    },
    {
      "id": "CMK_U02_0002",
      "unite": 2,
      "zorluk": "orta",
      "soru": "CMK'ya göre gözaltı süresi, yakalama yerine en yakın hâkime gönderilmesi için zorunlu süre hariç kaç saati geçemez?",
      "secenekler": ["12", "24", "36", "48", "72"],
      "cevap": "B",
      "aciklama": "CMK m.91/1.",
      "kaynak": "CMK m.91"
    },
    {
      "id": "CMK_U02_0003",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Yakalanan kişinin en yakın hâkime gönderilmesi için gerekli yol süresi en fazla kaç saat olabilir?",
      "secenekler": ["6", "12", "24", "36", "48"],
      "cevap": "B",
      "aciklama": "CMK m.91/1: bu süre on iki saati geçemez.",
      "kaynak": "CMK m.91"
    },
    {
      "id": "CMK_U02_0004",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Toplu olarak işlenen suçlarda Cumhuriyet savcısı gözaltı süresini nasıl uzatabilir?",
      "secenekler": ["Tek seferde yedi gün", "İki günlük süreler halinde, dört günü geçmemek üzere", "Hâkim kararı olmadan sınırsız", "Birer günlük süreler halinde, beş günü geçmemek üzere", "Her defasında birer günlük süreler halinde, üç günü geçmemek üzere"],
      "cevap": "E",
      "aciklama": "CMK m.91/3: yazılı emirle, birer günlük süreler halinde üç günü geçemez.",
      "kaynak": "CMK m.91"
    },
    {
      "id": "CMK_U02_0005",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Yakalanan veya gözaltı süresi uzatılan kişinin durumu yakınlarına kimin emriyle gecikmeksizin bildirilir?",
      "secenekler": ["Sulh ceza hâkimi", "Mülki amir", "Emniyet müdürü", "Cumhuriyet savcısı", "Baro başkanı"],
      "cevap": "D",
      "aciklama": "CMK m.95/1.",
      "kaynak": "CMK m.95"
    },
    {
      "id": "CMK_U02_0006",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi CMK'da sayılan tutuklama nedenlerinden biridir?",
      "secenekler": ["Şüphelinin kaçması veya delilleri karartma şüphesi", "Şüphelinin sabıkalı olması", "Kamuoyunun tepkisi", "Mağdurun talebi", "Şüphelinin ifade vermemesi"],
      "cevap": "A",
      "aciklama": "CMK m.100: kuvvetli suç şüphesi ile kaçma veya delil karartma şüphesi gibi tutuklama nedenleri aranır.",
      "kaynak": "CMK m.100"
    },
    {
      "id": "CMK_U02_0007",
      "unite": 2,
      "zorluk": "zor",
      "soru": "CMK'ya göre hangi suçlarda tutuklama kararı verilemez?",
      "secenekler": ["Üst sınırı 5 yılı aşmayan hapis gerektiren suçlarda", "Şikâyete bağlı tüm suçlarda", "Taksirli tüm suçlarda", "Sadece adli para cezası veya üst sınırı 2 yılı aşmayan hapis cezası öngörülen suçlarda", "Alt sınırı 1 yılın altındaki suçlarda"],
      "cevap": "D",
      "aciklama": "CMK m.100/4.",
      "kaynak": "CMK m.100"
    },
    {
      "id": "CMK_U02_0008",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Soruşturma evresinde şüphelinin tutuklanmasına kim karar verir?",
      "secenekler": ["Cumhuriyet savcısı", "Kolluk amiri", "Mülki amir", "Cumhuriyet savcısının istemiyle sulh ceza hâkimi", "Ağır ceza mahkemesi başkanı"],
      "cevap": "D",
      "aciklama": "CMK m.101/1.",
      "kaynak": "CMK m.101"
    },
    {
      "id": "CMK_U02_0009",
      "unite": 2,
      "zorluk": "zor",
      "soru": "Soruşturma evresinde tutukluluğun devamının gerekip gerekmediği en geç kaç günlük süreler içinde incelenir?",
      "secenekler": ["15", "45", "60", "90", "30"],
      "cevap": "E",
      "aciklama": "CMK m.108/1.",
      "kaynak": "CMK m.108"
    },
    {
      "id": "CMK_U02_0010",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Tutuklama yerine, şüphelinin yurt dışına çıkamamasına veya belirli yerlere düzenli başvurmasına karar verilmesi hangi koruma tedbiridir?",
      "secenekler": ["Adli kontrol", "Gözaltı", "Yakalama emri", "Zorlama hapsi", "Güvenlik tedbiri"],
      "cevap": "A",
      "aciklama": "CMK m.109.",
      "kaynak": "CMK m.109"
    },
    {
      "id": "CMK_U02_0011",
      "unite": 2,
      "zorluk": "orta",
      "soru": "Soruşturma evresinde, çağrı üzerine gelmeyen veya kaçan şüpheli hakkında Cumhuriyet savcısının istemiyle kim yakalama emri düzenleyebilir?",
      "secenekler": ["Kolluk amiri", "Sulh ceza hâkimi", "Vali", "Cumhuriyet savcısı tek başına", "Asliye ceza mahkemesi"],
      "cevap": "B",
      "aciklama": "CMK m.98/1.",
      "kaynak": "CMK m.98"
    },
    {
      "id": "CMK_U03_0001",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Adli aramada gecikmesinde sakınca bulunan hallerde ve Cumhuriyet savcısına ulaşılamadığında arama emrini kim verebilir?",
      "secenekler": ["Mülki amir", "Kolluk amiri (yazılı emirle)", "Herhangi bir polis memuru", "Muhtar", "Belediye başkanı"],
      "cevap": "B",
      "aciklama": "CMK m.119/1.",
      "kaynak": "CMK m.119"
    },
    {
      "id": "CMK_U03_0002",
      "unite": 3,
      "zorluk": "orta",
      "soru": "CMK'ya göre aşağıdaki yerlerden hangisinde kolluk amirinin yazılı emriyle arama yapılamaz?",
      "secenekler": ["Araç", "Kişinin üstü", "Konut", "Kamuya açık park", "Eşya"],
      "cevap": "C",
      "aciklama": "Konut, işyeri ve kamuya açık olmayan kapalı alanlarda kolluk amirinin emriyle arama yapılamaz.",
      "kaynak": "CMK m.119"
    },
    {
      "id": "CMK_U03_0003",
      "unite": 3,
      "zorluk": "zor",
      "soru": "Cumhuriyet savcısı veya kolluk amirinin emriyle yapılan elkoyma işlemi kaç saat içinde görevli hâkimin onayına sunulur?",
      "secenekler": ["24", "12", "48", "72", "36"],
      "cevap": "A",
      "aciklama": "CMK m.127/3: 24 saat içinde onaya sunulur, hâkim 48 saat içinde karar verir.",
      "kaynak": "CMK m.127"
    },
    {
      "id": "CMK_U03_0004",
      "unite": 3,
      "zorluk": "zor",
      "soru": "CMK m.135'e göre telekomünikasyon yoluyla iletişimin tespiti, dinlenmesi ve kayda alınması kararı genel kural olarak en çok ne kadar süre için verilir?",
      "secenekler": ["2 ay; 1 ay daha uzatılabilir", "1 ay; 1 ay uzatılabilir", "3 ay; uzatılamaz", "6 ay; 3 ay uzatılabilir", "15 gün; 15 gün uzatılabilir"],
      "cevap": "A",
      "aciklama": "Karar en çok iki ay için verilir, bir ay uzatılabilir (örgüt suçlarında ayrık hüküm vardır).",
      "kaynak": "CMK m.135"
    },
    {
      "id": "CMK_U03_0005",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Suç işlendikten sonra şüpheliyi yakalamak veya suç delillerini elde etmek amacıyla yapılan aramaya ne ad verilir?",
      "secenekler": ["Önleme araması", "İdari arama", "Kontrol araması", "Adli arama", "Güvenlik araması"],
      "cevap": "D",
      "aciklama": "Suç sonrası delil ve şüpheliye yönelik arama adli aramadır.",
      "kaynak": "CMK m.116–119"
    },
    {
      "id": "CMK_U03_0006",
      "unite": 3,
      "zorluk": "zor",
      "soru": "Cumhuriyet savcısı hazır bulunmaksızın bir konutta arama yapılırken kimlerin bulundurulması gerekir?",
      "secenekler": ["Yalnızca konut sahibi", "Bir avukat", "O yer ihtiyar heyetinden veya komşulardan iki kişi", "Bir hâkim", "Mülki amir"],
      "cevap": "C",
      "aciklama": "CMK m.119/4.",
      "kaynak": "CMK m.119"
    },
    {
      "id": "CMK_U03_0007",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Bir suçla ilgili arama sırasında başka bir suçun işlendiğine dair delil bulunursa ne yapılır?",
      "secenekler": ["Delil imha edilir.", "Delil kullanılmaz ve yerinde bırakılır.", "Arama derhal durdurulur ve delil sahibine teslim edilir.", "Delil yalnızca mahkeme izniyle görülebilir.", "Delil muhafaza altına alınır ve durum Cumhuriyet savcılığına bildirilir."],
      "cevap": "E",
      "aciklama": "Tesadüfen elde edilen deliller hakkında CMK m.138 uygulanır.",
      "kaynak": "CMK m.138"
    },
    {
      "id": "CMK_U03_0008",
      "unite": 3,
      "zorluk": "orta",
      "soru": "Adli aramada kural olarak arama kararı kim tarafından verilir?",
      "secenekler": ["Hâkim", "Kolluk amiri", "Cumhuriyet savcısı", "Vali", "Emniyet müdürü"],
      "cevap": "A",
      "aciklama": "Kural hâkim kararıdır; gecikmesinde sakınca halinde savcı, o da yoksa kolluk amiri.",
      "kaynak": "CMK m.119"
    },
    {
      "id": "CMK_U04_0001",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "Cumhuriyet savcısı bir suçun işlendiği izlenimini veren bir hali öğrendiğinde ne yapar?",
      "secenekler": ["Mağdurun şikâyetini bekler.", "Dosyayı mahkemeye gönderir.", "Valiliğe bildirir.", "Kolluğun raporunu bekler.", "Derhal işin gerçeğini araştırmaya başlar."],
      "cevap": "E",
      "aciklama": "CMK m.160/1.",
      "kaynak": "CMK m.160"
    },
    {
      "id": "CMK_U04_0002",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Cumhuriyet savcısının soruşturmada delil toplama yükümlülüğüyle ilgili hangisi doğrudur?",
      "secenekler": ["Yalnızca aleyhe delilleri toplar.", "Şüphelinin hem lehine hem aleyhine olan delilleri toplar.", "Yalnızca lehe delilleri toplar.", "Delil toplama görevi yalnızca müdafiye aittir.", "Yalnızca mağdurun gösterdiği delilleri toplar."],
      "cevap": "B",
      "aciklama": "CMK m.160/2.",
      "kaynak": "CMK m.160"
    },
    {
      "id": "CMK_U04_0003",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Kovuşturmaya yer olmadığına dair karara karşı suçtan zarar gören hangi süre içinde ve nereye itiraz edebilir?",
      "secenekler": ["7 gün – asliye ceza mahkemesi", "30 gün – ağır ceza mahkemesi", "15 gün – bölge adliye mahkemesi", "İki hafta – sulh ceza hâkimliği", "60 gün – Yargıtay"],
      "cevap": "D",
      "aciklama": "7499 sayılı Kanunla (8. Yargı Paketi) süre 15 günden iki haftaya çevrilmiştir; 1 Haziran 2024 ve sonrası kararlara uygulanır.",
      "kaynak": "CMK m.173"
    },
    {
      "id": "CMK_U04_0004",
      "unite": 4,
      "zorluk": "zor",
      "soru": "Mahkeme, aşağıdaki gerekçelerden hangisiyle iddianameyi Cumhuriyet savcılığına iade edemez?",
      "secenekler": ["CMK m.170'e aykırı düzenlenmiş olması", "Suçun hukukî nitelendirilmesi", "Suçun sübutuna etki edecek mutlak surette gerekli deliller toplanmadan düzenlenmesi", "Uzlaştırmaya tabi olduğu halde bu usul uygulanmadan düzenlenmesi", "Ön ödemeye tabi olduğu halde bu usul uygulanmadan düzenlenmesi"],
      "cevap": "B",
      "aciklama": "CMK m.174/2: suçun hukukî nitelendirilmesi sebebiyle iddianame iade edilemez.",
      "kaynak": "CMK m.174"
    },
    {
      "id": "CMK_U04_0005",
      "unite": 4,
      "zorluk": "zor",
      "soru": "CMK'ya göre kamu davasının açılmasının ertelenmesi hangi suçlarda ve ne kadar süreyle mümkündür?",
      "secenekler": ["Üst sınırı 2 yıl veya daha az hapis gerektiren suçlarda, 3 yıl", "Üst sınırı 3 yıl veya daha az hapis gerektiren suçlarda, 5 yıl", "Üst sınırı 5 yıl hapis gerektiren suçlarda, 5 yıl", "Tüm şikâyete bağlı suçlarda, 1 yıl", "Üst sınırı 1 yıl hapis gerektiren suçlarda, 2 yıl"],
      "cevap": "B",
      "aciklama": "CMK m.171/2.",
      "kaynak": "CMK m.171"
    },
    {
      "id": "CMK_U04_0006",
      "unite": 4,
      "zorluk": "zor",
      "soru": "CMK'ya göre hükmün açıklanmasının geri bırakılması için hükmolunan ceza ve denetim süresi hangisidir?",
      "secenekler": ["2 yıl veya daha az hapis ya da adli para cezası – 5 yıl", "3 yıl veya daha az hapis – 3 yıl", "1 yıl veya daha az hapis – 2 yıl", "2 yıl veya daha az hapis – 3 yıl", "5 yıl veya daha az hapis – 5 yıl"],
      "cevap": "A",
      "aciklama": "CMK m.231/5 ve m.231/8.",
      "kaynak": "CMK m.231"
    },
    {
      "id": "CMK_U04_0007",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Kural olarak aşağıdaki suçlardan hangileri uzlaşma kapsamındadır?",
      "secenekler": ["Tüm kasıtlı suçlar", "Soruşturulması ve kovuşturulması şikâyete bağlı suçlar", "Kamu görevlisine karşı işlenen tüm suçlar", "Ağır ceza mahkemesinin görevine giren tüm suçlar", "Örgüt faaliyeti çerçevesinde işlenen suçlar"],
      "cevap": "B",
      "aciklama": "CMK m.253/3-a.",
      "kaynak": "CMK m.253"
    },
    {
      "id": "CMK_U04_0008",
      "unite": 4,
      "zorluk": "orta",
      "soru": "Hüküm verilmeden önce son söz kime sorulur?",
      "secenekler": ["Cumhuriyet savcısına", "Katılana", "Sanığa", "Müdafiye", "Tanığa"],
      "cevap": "C",
      "aciklama": "CMK m.216/3.",
      "kaynak": "CMK m.216"
    },
    {
      "id": "CMK_U04_0009",
      "unite": 4,
      "zorluk": "kolay",
      "soru": "Adli kolluk görevlileri adli görevler bakımından kimin emir ve talimatlarını yerine getirir?",
      "secenekler": ["Cumhuriyet savcısının", "Mülki amirin", "Belediye başkanının", "Sulh ceza hâkiminin", "Emniyet genel müdürünün"],
      "cevap": "A",
      "aciklama": "CMK m.164/2.",
      "kaynak": "CMK m.164"
    },
    {
      "id": "CMK_U05_0001",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Aşağıdakilerden hangisi olağanüstü kanun yollarındandır?",
      "secenekler": ["İtiraz", "Kanun yararına bozma", "İstinaf", "Temyiz", "Uzlaşma"],
      "cevap": "B",
      "aciklama": "Olağanüstü kanun yolları: Yargıtay Cumhuriyet Başsavcısının itirazı, kanun yararına bozma, yargılamanın yenilenmesi.",
      "kaynak": "CMK m.308–311"
    },
    {
      "id": "CMK_U05_0002",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "İlk derece ceza mahkemesi hükümlerine karşı istinaf incelemesini hangi merci yapar?",
      "secenekler": ["Yargıtay", "Bölge adliye mahkemesi ceza dairesi", "Anayasa Mahkemesi", "Sulh ceza hâkimliği", "Ağır ceza mahkemesi"],
      "cevap": "B",
      "aciklama": "İstinaf mercii bölge adliye mahkemesidir.",
      "kaynak": "CMK m.272"
    },
    {
      "id": "CMK_U05_0003",
      "unite": 5,
      "zorluk": "kolay",
      "soru": "Bölge adliye mahkemesi ceza dairelerinin temyizi kabil hükümlerini inceleyen yüksek mahkeme hangisidir?",
      "secenekler": ["Danıştay", "Anayasa Mahkemesi", "Yargıtay", "Uyuşmazlık Mahkemesi", "Sayıştay"],
      "cevap": "C",
      "aciklama": "Temyiz mercii Yargıtay'dır.",
      "kaynak": "CMK m.286"
    },
    {
      "id": "CMK_U05_0004",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Hâkim kararlarına karşı başvurulan olağan kanun yolu hangisidir?",
      "secenekler": ["Temyiz", "İstinaf", "Yargılamanın yenilenmesi", "İtiraz", "Kanun yararına bozma"],
      "cevap": "D",
      "aciklama": "Hâkim kararlarına ve kanunun gösterdiği mahkeme kararlarına itiraz edilir.",
      "kaynak": "CMK m.267"
    },
    {
      "id": "CMK_U05_0005",
      "unite": 5,
      "zorluk": "zor",
      "soru": "Hüküm yalnızca sanık lehine kanun yoluna başvurulması üzerine bozulmuşsa, yeniden verilecek hükümle ilgili hangisi doğrudur?",
      "secenekler": ["Ceza mutlaka artırılır.", "Mahkeme yeniden yargılama yapamaz.", "Sanık yeni yargılamada savunma yapamaz.", "Önceki hükümle verilen cezadan daha ağır ceza verilemez.", "Önceki ceza aynen onanmış sayılır."],
      "cevap": "D",
      "aciklama": "Aleyhe bozma yasağı gereği lehe başvuruda ceza ağırlaştırılamaz.",
      "kaynak": "CMK m.307"
    },
    {
      "id": "CMK_U05_0006",
      "unite": 5,
      "zorluk": "orta",
      "soru": "Kesinleşmiş bir mahkûmiyet hükmüne karşı yeni delil ortaya çıkması gibi hallerde başvurulan kanun yolu hangisidir?",
      "secenekler": ["İstinaf", "İtiraz", "Temyiz", "Yargılamanın yenilenmesi", "Uzlaşma"],
      "cevap": "D",
      "aciklama": "Kesinleşmiş hükümlere karşı yargılamanın yenilenmesi yoluna gidilir.",
      "kaynak": "CMK m.311"
    },
    {
      "id": "CMK_U05_0007",
      "unite": 5,
      "zorluk": "zor",
      "soru": "Kanun yararına bozma yoluna hangi makamın istemiyle gidilir?",
      "secenekler": ["Sanığın doğrudan başvurusuyla", "Bölge adliye mahkemesinin talebiyle", "Adalet Bakanlığının istemi üzerine Yargıtay Cumhuriyet Başsavcılığı", "HSK kararıyla", "Anayasa Mahkemesinin talebiyle"],
      "cevap": "C",
      "aciklama": "CMK m.309/1.",
      "kaynak": "CMK m.309"
    },
    {
      "id": "CMK_U05_0008",
      "unite": 5,
      "zorluk": "zor",
      "soru": "Yargıtay ceza dairesi kararlarına karşı Yargıtay Cumhuriyet Başsavcısının itirazını inceleyen merci hangisidir?",
      "secenekler": ["Yargıtay Büyük Genel Kurulu", "Anayasa Mahkemesi", "Bölge adliye mahkemesi", "Uyuşmazlık Mahkemesi", "Yargıtay Ceza Genel Kurulu"],
      "cevap": "E",
      "aciklama": "CMK m.308.",
      "kaynak": "CMK m.308"
    }
  ],
  kartlar: [
  ]
});
