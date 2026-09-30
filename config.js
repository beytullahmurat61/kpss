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
  testDetailLimit: 20,
  simQuestions: 100,            // gerçek sınav simülatörü soru sayısı
  simPriority: 0.8,             // hiç çözülmemiş + tekrar bekleyen yanlışlara öncelik oranı
  simDifficulty: { easy: 0.2, medium: 0.6, hard: 0.2 },
  // Resmi kılavuz ders ağırlıkları (toplam 100). Anayasa/İdare %10'u paylaşır.
  simWeights: { pmm: 20, silah: 20, insan: 10, anayasa: 5, idare: 5, ataturk: 10, protokol: 10, genel: 10, ingilizce: 10 },
  leitnerDays: [0, 1, 3, 7, 14, 30]   // soru kutuları (1..5) için tekrar aralıkları (gün)
};

const COURSES = [
  { id: 'anayasa', color: '#F4D35E',   code: 'ANAYASA',   name: 'Anayasa Hukuku',                     short: 'Anayasa',       icon: '⚖️' },
  { id: 'ceza', color: '#FF7B7B',      code: 'CEZA',      name: 'Ceza Hukuku',                        short: 'Ceza',          icon: '🔒' },
  { id: 'idare', color: '#7FB5FF',     code: 'IDARE',     name: 'İdare Hukuku',                       short: 'İdare',         icon: '🏛️' },
  { id: 'cmk', color: '#C89BFF',       code: 'CMK',       name: 'Ceza Muhakemesi Hukuku',             short: 'CMK',           icon: '📑' },
  { id: 'ataturk', color: '#FF9A6B',   code: 'ATATURK',   name: 'Atatürk İlkeleri ve İnkılap Tarihi', short: 'Atatürk',       icon: '🇹🇷' },
  { id: 'insan', color: '#6FE0B0',     code: 'INSAN',     name: 'İnsan Hakları',                      short: 'İnsan Hakları', icon: '🕊️' },
  { id: 'genel', color: '#FFC857',     code: 'GENEL',     name: 'Genel Kültür ve Analitik Düşünme',   short: 'Genel Kültür',  icon: '🧠' },
  { id: 'protokol', color: '#E6B8FF',  code: 'PROTOKOL',  name: 'Protokol Bilgisi',                   short: 'Protokol',      icon: '🎖️' },
  { id: 'ingilizce', color: '#6FD3FF', code: 'INGILIZCE', name: 'İngilizce',                          short: 'İngilizce',     icon: '🇬🇧' },
  { id: 'silah', color: '#B8C46A',     code: 'SILAH',     name: 'Silah Bilgisi',                      short: 'Silah',         icon: '🎯' },
  { id: 'pmm', color: '#5EC8FF',       code: 'PMM',       name: 'Polis Meslek Mevzuatı',              short: 'PMM',           icon: '👮' }
].map(c => ({ ...c, file: `sorular-${c.id}.js` }));
