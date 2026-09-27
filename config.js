// ============================================================
// MİSYON KORUMA – YAPILANDIRMA
// Ders ve ünite yapısı burada. Konu anlatımı YOKTUR.
// Ünite başlıklarını değiştirebilir, yeni ünite ekleyebilirsiniz.
// Ünite ID biçimi: <dersId>_u<no>  (örn. anayasa_u3)
// ============================================================
const APP_CONFIG = {
  storageKey: 'mk_progress_v1',      // ilerleme verileri
  importKey: 'mk_imported_v1',       // uygulama içinden yüklenen sorular
  examSecondsPerQuestion: 75,        // süreli denemede soru başına süre
  weakThreshold: 60,                 // bu yüzdenin altı "zayıf ünite"
  weakMinSolved: 5,                  // zayıf sayılmak için en az çözülen soru
  testHistoryLimit: 60,
  testDetailLimit: 15                // son kaç testin soru detayı saklansın
};

const COURSES = [
  { id: 'anayasa', code: 'ANAYASA', name: 'Anayasa Hukuku', short: 'Anayasa', icon: '⚖️', units: [
    'Anayasa Hukukuna Giriş ve Türk Anayasal Gelişimi', 'Temel İlkeler ve Temel Hak ve Hürriyetler', 'Yasama', 'Yürütme', 'Yargı'] },
  { id: 'ceza', code: 'CEZA', name: 'Ceza Hukuku', short: 'Ceza', icon: '⚖️', units: [
    'Temel İlkeler ve Uygulama Alanı', 'Suçun Unsurları ve Hukuka Uygunluk Nedenleri', 'Kusurluluk, Teşebbüs, İştirak ve İçtima', 'Yaptırımlar, Zamanaşımı ve Şikâyet', 'Özel Hükümler'] },
  { id: 'idare', code: 'IDARE', name: 'İdare Hukuku', short: 'İdare', icon: '⚖️', units: [
    'Temel Kavramlar ve İdari Teşkilat', 'İdari İşlemler', 'Kamu Hizmeti, Kolluk ve İdari Sözleşmeler', 'Kamu Görevlileri ve Kamu Malları', 'İdari Yargı ve İdarenin Sorumluluğu'] },
  { id: 'cmk', code: 'CMK', name: 'Ceza Muhakemesi Hukuku', short: 'CMK', icon: '⚖️', units: [
    'Temel Kavramlar, Görev ve Yetki', 'Yakalama, Gözaltı ve Tutuklama', 'Arama, Elkoyma ve İletişimin Denetlenmesi', 'Soruşturma ve Kovuşturma', 'Kanun Yolları'] },
  { id: 'ataturk', code: 'ATATURK', name: 'Atatürk İlkeleri ve İnkılap Tarihi', short: 'Atatürk', icon: '🇹🇷', units: [
    'Osmanlı\'nın Son Dönemi ve I. Dünya Savaşı', 'Millî Mücadele Hazırlık Dönemi', 'Kurtuluş Savaşı: Cepheler ve Antlaşmalar', 'Atatürk İnkılapları', 'Atatürk İlkeleri ve Dış Politika'] },
  { id: 'insan', code: 'INSAN', name: 'İnsan Hakları', short: 'İnsan Hakları', icon: '🕊️', units: [
    'Temel Kavramlar ve Tarihsel Gelişim', 'Birleşmiş Milletler Sistemi', 'Avrupa İnsan Hakları Sözleşmesi ve AİHM', 'Ulusal Koruma Mekanizmaları'] },
  { id: 'genel', code: 'GENEL', name: 'Genel Kültür ve Analitik Düşünme', short: 'Genel Kültür', icon: '🧠', units: [
    'Tarih ve Coğrafya', 'Kurumlar ve Güncel Bilgiler', 'Sayısal Mantık ve Problemler', 'Sözel Mantık: Sıralama ve Tablo', 'Örüntü ve Çıkarım'] },
  { id: 'protokol', code: 'PROTOKOL', name: 'Protokol Bilgisi', short: 'Protokol', icon: '🎖️', units: [
    'Temel Kavramlar ve Devlet Protokolü', 'Törenler, Bayrak ve İstiklal Marşı', 'Resmî Yazışma ve Görgü Kuralları', 'Diplomatik Protokol ve Viyana Sözleşmeleri'] },
  { id: 'ingilizce', code: 'INGILIZCE', name: 'İngilizce', short: 'İngilizce', icon: '🇬🇧', units: [
    'Tenses', 'Modals and Prepositions', 'Vocabulary', 'Sentence Completion and Reading'] },
  { id: 'silah', code: 'SILAH', name: 'Silah Bilgisi', short: 'Silah', icon: '🔫', units: [
    'Temel Kavramlar ve Sınıflandırma', 'Parçalar ve Çalışma Prensipleri', 'Mühimmat ve Balistik', 'Güvenlik Kuralları ve Bakım', 'Silah Mevzuatı'] },
  { id: 'pmm', code: 'PMM', name: 'Polis Meslek Mevzuatı', short: 'PMM', icon: '👮', units: [
    'Emniyet Teşkilatı (3201)', 'Polis Vazife ve Selahiyet Kanunu (2559)', 'Zor ve Silah Kullanma', 'Disiplin Hükümleri (7068)', 'Personel ve İlgili Mevzuat'] }
].map(c => ({ ...c, units: c.units.map((title, i) => ({ id: `${c.id}_u${i + 1}`, no: i + 1, title })) }));

