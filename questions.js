// ============================================================
// MİSYON KORUMA – SORU BANKASI (questions.js)
// ------------------------------------------------------------
// Soruları bu dosyaya eklersin. Her ünitenin köşeli parantezi [ ]
// içine, aralarına VİRGÜL koyarak soru nesneleri yazılır.
//
// Soru biçimi:
//   {
//     "id": "ANAYASA_U01_0001",      // benzersiz olmalı, sonradan değiştirme
//     "courseId": "anayasa",
//     "unitId": "anayasa_u1",
//     "difficulty": "medium",        // easy | medium | hard
//     "question": "Soru metni",
//     "options": ["A şıkkı", "B şıkkı", "C şıkkı", "D şıkkı", "E şıkkı"],
//     "answer": 0,                   // 0=A 1=B 2=C 3=D 4=E
//     "explanation": "Kısa açıklama",
//     "reference": "Kaynak"
//   },
//
// Dikkat: Metin içinde çift tırnak (") kullanacaksan başına \ koy: \"
// Bir hata yaparsan uygulama açılışta hatanın satırını gösterir.
// Bu dosyayı uygulamadaki "Soru Yükle → questions.js indir" ile de üretebilirsin.
// ============================================================

const QUESTION_BANK = {

  // ==================== ANAYASA HUKUKU ====================
  anayasa: {
    // Ünite 1: Anayasa Hukukuna Giriş ve Türk Anayasal Gelişimi
    anayasa_u1: [],
    // Ünite 2: Temel İlkeler ve Temel Hak ve Hürriyetler
    anayasa_u2: [],
    // Ünite 3: Yasama
    anayasa_u3: [
      {
        "id": "ANAYASA_U03_0001",
        "courseId": "anayasa",
        "unitId": "anayasa_u3",
        "difficulty": "easy",
        "question": "ÖRNEK SORU – Türkiye Büyük Millet Meclisi kaç milletvekilinden oluşur?",
        "options": ["450", "500", "550", "600", "650"],
        "answer": 3,
        "explanation": "2017 Anayasa değişikliğiyle milletvekili sayısı 600'e çıkarılmıştır.",
        "reference": "Anayasa m.75"
      }
    ],
    // Ünite 4: Yürütme
    anayasa_u4: [],
    // Ünite 5: Yargı
    anayasa_u5: []
  },

  // ==================== CEZA HUKUKU ====================
  ceza: {
    // Ünite 1: Temel İlkeler ve Uygulama Alanı
    ceza_u1: [],
    // Ünite 2: Suçun Unsurları ve Hukuka Uygunluk Nedenleri
    ceza_u2: [],
    // Ünite 3: Kusurluluk, Teşebbüs, İştirak ve İçtima
    ceza_u3: [
      {
        "id": "CEZA_U03_0001",
        "courseId": "ceza",
        "unitId": "ceza_u3",
        "difficulty": "medium",
        "question": "ÖRNEK SORU – Fiili işlediği sırada 12 yaşını doldurmamış çocuğun ceza sorumluluğu ile ilgili hangisi doğrudur?",
        "options": ["Cezası yarı oranında indirilir.", "Ceza sorumluluğu yoktur; çocuklara özgü güvenlik tedbirleri uygulanabilir.", "Algılama yeteneğine bakılarak ceza verilir.", "Tam ceza verilir.", "Velisine ceza verilir."],
        "answer": 1,
        "explanation": "12 yaşını doldurmamış çocukların ceza sorumluluğu yoktur.",
        "reference": "TCK m.31"
      }
    ],
    // Ünite 4: Yaptırımlar, Zamanaşımı ve Şikâyet
    ceza_u4: [],
    // Ünite 5: Özel Hükümler
    ceza_u5: []
  },

  // ==================== İDARE HUKUKU ====================
  idare: {
    // Ünite 1: Temel Kavramlar ve İdari Teşkilat
    idare_u1: [],
    // Ünite 2: İdari İşlemler
    idare_u2: [],
    // Ünite 3: Kamu Hizmeti, Kolluk ve İdari Sözleşmeler
    idare_u3: [],
    // Ünite 4: Kamu Görevlileri ve Kamu Malları
    idare_u4: [],
    // Ünite 5: İdari Yargı ve İdarenin Sorumluluğu
    idare_u5: [
      {
        "id": "IDARE_U05_0001",
        "courseId": "idare",
        "unitId": "idare_u5",
        "difficulty": "easy",
        "question": "ÖRNEK SORU – Özel kanunlarında ayrı süre gösterilmeyen hallerde idare mahkemesinde dava açma süresi kaç gündür?",
        "options": ["15", "30", "45", "60", "90"],
        "answer": 3,
        "explanation": "Danıştay ve idare mahkemelerinde 60, vergi mahkemelerinde 30 gündür.",
        "reference": "İYUK m.7"
      }
    ]
  },

  // ==================== CEZA MUHAKEMESİ HUKUKU ====================
  cmk: {
    // Ünite 1: Temel Kavramlar, Görev ve Yetki
    cmk_u1: [],
    // Ünite 2: Yakalama, Gözaltı ve Tutuklama
    cmk_u2: [
      {
        "id": "CMK_U02_0001",
        "courseId": "cmk",
        "unitId": "cmk_u2",
        "difficulty": "medium",
        "question": "ÖRNEK SORU – Gözaltı süresi, yakalama yerine en yakın hâkime gönderilmesi için zorunlu süre hariç kaç saati geçemez?",
        "options": ["12", "24", "36", "48", "72"],
        "answer": 1,
        "explanation": "Gözaltı süresi 24 saati geçemez; yol süresi 12 saati aşamaz.",
        "reference": "CMK m.91"
      }
    ],
    // Ünite 3: Arama, Elkoyma ve İletişimin Denetlenmesi
    cmk_u3: [],
    // Ünite 4: Soruşturma ve Kovuşturma
    cmk_u4: [],
    // Ünite 5: Kanun Yolları
    cmk_u5: []
  },

  // ==================== ATATÜRK İLKELERİ VE İNKILAP TARİHİ ====================
  ataturk: {
    // Ünite 1: Osmanlı'nın Son Dönemi ve I. Dünya Savaşı
    ataturk_u1: [],
    // Ünite 2: Millî Mücadele Hazırlık Dönemi
    ataturk_u2: [],
    // Ünite 3: Kurtuluş Savaşı: Cepheler ve Antlaşmalar
    ataturk_u3: [
      {
        "id": "ATATURK_U03_0001",
        "courseId": "ataturk",
        "unitId": "ataturk_u3",
        "difficulty": "easy",
        "question": "ÖRNEK SORU – Türkiye Büyük Millet Meclisi hangi tarihte açılmıştır?",
        "options": ["19 Mayıs 1919", "23 Temmuz 1919", "4 Eylül 1919", "23 Nisan 1920", "29 Ekim 1923"],
        "answer": 3,
        "explanation": "TBMM 23 Nisan 1920'de Ankara'da açılmıştır.",
        "reference": "Millî Mücadele"
      }
    ],
    // Ünite 4: Atatürk İnkılapları
    ataturk_u4: [],
    // Ünite 5: Atatürk İlkeleri ve Dış Politika
    ataturk_u5: []
  },

  // ==================== İNSAN HAKLARI ====================
  insan: {
    // Ünite 1: Temel Kavramlar ve Tarihsel Gelişim
    insan_u1: [],
    // Ünite 2: Birleşmiş Milletler Sistemi
    insan_u2: [
      {
        "id": "INSAN_U02_0001",
        "courseId": "insan",
        "unitId": "insan_u2",
        "difficulty": "easy",
        "question": "ÖRNEK SORU – İnsan Hakları Evrensel Beyannamesi hangi tarihte BM Genel Kurulunca kabul edilmiştir?",
        "options": ["26 Haziran 1945", "10 Aralık 1948", "4 Kasım 1950", "16 Aralık 1966", "20 Kasım 1989"],
        "answer": 1,
        "explanation": "Beyanname 10 Aralık 1948'de kabul edilmiştir.",
        "reference": "İHEB"
      }
    ],
    // Ünite 3: Avrupa İnsan Hakları Sözleşmesi ve AİHM
    insan_u3: [],
    // Ünite 4: Ulusal Koruma Mekanizmaları
    insan_u4: []
  },

  // ==================== GENEL KÜLTÜR VE ANALİTİK DÜŞÜNME ====================
  genel: {
    // Ünite 1: Tarih ve Coğrafya
    genel_u1: [
      {
        "id": "GENEL_U01_0001",
        "courseId": "genel",
        "unitId": "genel_u1",
        "difficulty": "easy",
        "question": "ÖRNEK SORU – Türkiye'nin en yüksek dağı hangisidir?",
        "options": ["Erciyes Dağı", "Süphan Dağı", "Ağrı Dağı", "Kaçkar Dağı", "Uludağ"],
        "answer": 2,
        "explanation": "Ağrı Dağı yaklaşık 5137 m ile Türkiye'nin en yüksek dağıdır.",
        "reference": "Türkiye coğrafyası"
      }
    ],
    // Ünite 2: Kurumlar ve Güncel Bilgiler
    genel_u2: [],
    // Ünite 3: Sayısal Mantık ve Problemler
    genel_u3: [],
    // Ünite 4: Sözel Mantık: Sıralama ve Tablo
    genel_u4: [],
    // Ünite 5: Örüntü ve Çıkarım
    genel_u5: []
  },

  // ==================== PROTOKOL BİLGİSİ ====================
  protokol: {
    // Ünite 1: Temel Kavramlar ve Devlet Protokolü
    protokol_u1: [],
    // Ünite 2: Törenler, Bayrak ve İstiklal Marşı
    protokol_u2: [],
    // Ünite 3: Resmî Yazışma ve Görgü Kuralları
    protokol_u3: [
      {
        "id": "PROTOKOL_U03_0001",
        "courseId": "protokol",
        "unitId": "protokol_u3",
        "difficulty": "medium",
        "question": "ÖRNEK SORU – Resmî yazışmalarda üst makama yazılan yazılar hangi ifadeyle bitirilir?",
        "options": ["Rica ederim.", "Arz ederim.", "Bilgilerinize sunulur.", "Gereğini isterim.", "Saygılarımla bildiririm."],
        "answer": 1,
        "explanation": "Üst makama ‘arz ederim’, alt ve aynı düzeydeki makamlara ‘rica ederim’ yazılır.",
        "reference": "Resmî Yazışma Yönetmeliği"
      }
    ],
    // Ünite 4: Diplomatik Protokol ve Viyana Sözleşmeleri
    protokol_u4: []
  },

  // ==================== İNGİLİZCE ====================
  ingilizce: {
    // Ünite 1: Tenses
    ingilizce_u1: [
      {
        "id": "INGILIZCE_U01_0001",
        "courseId": "ingilizce",
        "unitId": "ingilizce_u1",
        "difficulty": "easy",
        "question": "ÖRNEK SORU – She ---- to work by bus every morning.",
        "options": ["go", "goes", "is going", "went", "has gone"],
        "answer": 1,
        "explanation": "‘every morning’ alışkanlık bildirir; üçüncü tekil şahısta Simple Present ‘goes’ kullanılır.",
        "reference": "Simple Present Tense"
      }
    ],
    // Ünite 2: Modals and Prepositions
    ingilizce_u2: [],
    // Ünite 3: Vocabulary
    ingilizce_u3: [],
    // Ünite 4: Sentence Completion and Reading
    ingilizce_u4: []
  },

  // ==================== SİLAH BİLGİSİ ====================
  silah: {
    // Ünite 1: Temel Kavramlar ve Sınıflandırma
    silah_u1: [],
    // Ünite 2: Parçalar ve Çalışma Prensipleri
    silah_u2: [],
    // Ünite 3: Mühimmat ve Balistik
    silah_u3: [
      {
        "id": "SILAH_U03_0001",
        "courseId": "silah",
        "unitId": "silah_u3",
        "difficulty": "easy",
        "question": "ÖRNEK SORU – Fişeğin parçalarından hangisi ateşleme iğnesinin darbesiyle barutu tutuşturan kısımdır?",
        "options": ["Çekirdek", "Kovan", "Kapsül", "Barut", "Tırnak yuvası"],
        "answer": 2,
        "explanation": "Kapsül, iğne darbesiyle ateş alarak barutu tutuşturur.",
        "reference": "Fişek yapısı"
      }
    ],
    // Ünite 4: Güvenlik Kuralları ve Bakım
    silah_u4: [],
    // Ünite 5: Silah Mevzuatı
    silah_u5: []
  },

  // ==================== POLİS MESLEK MEVZUATI ====================
  pmm: {
    // Ünite 1: Emniyet Teşkilatı (3201)
    pmm_u1: [
      {
        "id": "PMM_U01_0001",
        "courseId": "pmm",
        "unitId": "pmm_u1",
        "difficulty": "easy",
        "question": "ÖRNEK SORU – Emniyet Genel Müdürlüğü hangi bakanlığa bağlıdır?",
        "options": ["Adalet Bakanlığı", "Millî Savunma Bakanlığı", "İçişleri Bakanlığı", "Dışişleri Bakanlığı", "Cumhurbaşkanlığı"],
        "answer": 2,
        "explanation": "Emniyet Genel Müdürlüğü İçişleri Bakanlığına bağlıdır.",
        "reference": "3201 s. Emniyet Teşkilatı Kanunu"
      }
    ],
    // Ünite 2: Polis Vazife ve Selahiyet Kanunu (2559)
    pmm_u2: [],
    // Ünite 3: Zor ve Silah Kullanma
    pmm_u3: [],
    // Ünite 4: Disiplin Hükümleri (7068)
    pmm_u4: [],
    // Ünite 5: Personel ve İlgili Mevzuat
    pmm_u5: []
  }

};
