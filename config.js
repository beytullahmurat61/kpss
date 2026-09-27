// ============================================================
// MİSYON KORUMA – YAPILANDIRMA
// Her dersin soruları kendi dosyasındadır: sorular-<ders>.js
// Yeni ders eklemek için bu listeye bir satır ve yeni bir soru dosyası ekleyin.
// Soru dosyasını güncelledikten sonra APP_VERSION'u artırın (tarayıcı önbelleği yenilensin).
// ============================================================
// Sürüm numarası index.html içindeki V değişkenindedir (tek yerden değiştirilir).
const APP_VERSION = (typeof V !== 'undefined') ? V : '4.0.0';

const APP_CONFIG = {
  storageKey: 'mk_v4',
  examSecondsPerQuestion: 75,   // süreli sınavda soru başına süre (saniye)
  weakThreshold: 60,            // bu yüzdenin altı "zayıf ünite"
  weakMinSolved: 5,             // zayıf sayılmak için en az çözülen soru
  cardSessionSize: 20,          // kart turu başına kart
  testHistoryLimit: 80,
  testDetailLimit: 20
};

const COURSES = [
  { id: 'anayasa',   code: 'ANAYASA',   name: 'Anayasa Hukuku',                     short: 'Anayasa',       icon: '⚖️' },
  { id: 'ceza',      code: 'CEZA',      name: 'Ceza Hukuku',                        short: 'Ceza',          icon: '🔒' },
  { id: 'idare',     code: 'IDARE',     name: 'İdare Hukuku',                       short: 'İdare',         icon: '🏛️' },
  { id: 'cmk',       code: 'CMK',       name: 'Ceza Muhakemesi Hukuku',             short: 'CMK',           icon: '📑' },
  { id: 'ataturk',   code: 'ATATURK',   name: 'Atatürk İlkeleri ve İnkılap Tarihi', short: 'Atatürk',       icon: '🇹🇷' },
  { id: 'insan',     code: 'INSAN',     name: 'İnsan Hakları',                      short: 'İnsan Hakları', icon: '🕊️' },
  { id: 'genel',     code: 'GENEL',     name: 'Genel Kültür ve Analitik Düşünme',   short: 'Genel Kültür',  icon: '🧠' },
  { id: 'protokol',  code: 'PROTOKOL',  name: 'Protokol Bilgisi',                   short: 'Protokol',      icon: '🎖️' },
  { id: 'ingilizce', code: 'INGILIZCE', name: 'İngilizce',                          short: 'İngilizce',     icon: '🇬🇧' },
  { id: 'silah',     code: 'SILAH',     name: 'Silah Bilgisi',                      short: 'Silah',         icon: '🎯' },
  { id: 'pmm',       code: 'PMM',       name: 'Polis Meslek Mevzuatı',              short: 'PMM',           icon: '👮' }
].map(c => ({ ...c, file: `sorular-${c.id}.js` }));
