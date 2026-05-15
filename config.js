// ============================================
// config.js - KPSS / TYT / DGS MATEMATİK
// questions.js (19 seviye) ile %100 UYUMLU
// Versiyon: 4.1
// ============================================

const STATE_VERSION = 4;

const LEVELS = {
    'KOLAY': { name: 'Kolay', icon: '🟢', questionCount: 10, minCorrect: 8 },
    'ORTA': { name: 'Orta', icon: '🟡', questionCount: 12, minCorrect: 10 },
    'ZOR': { name: 'Zor', icon: '🔴', questionCount: 8, minCorrect: 6 }
};

// ============================================
// KONU LİSTESİ - 19 SEVİYE (questions.js ile uyumlu)
// ============================================
const TOPICS = [
    // SEVİYE 0: DÖRT İŞLEM (EN GENİŞ)
    { id: 1, order: 1, p: '🔢 DÖRT İŞLEM', n: 'Toplama ve Çıkarma İşlemleri', e: '➕', kpss: '1-2', dgs: '1-2' },
    { id: 2, order: 2, p: '🔢 DÖRT İŞLEM', n: 'Çarpma ve Bölme İşlemleri', e: '✖️', kpss: '1-2', dgs: '1-2' },
    { id: 3, order: 3, p: '🔢 DÖRT İŞLEM', n: 'İşlem Önceliği ve Parantez', e: '📐', kpss: '1', dgs: '1' },
    { id: 4, order: 4, p: '🔢 DÖRT İŞLEM', n: 'Zihinden İşlem Stratejileri', e: '🧠', kpss: '1', dgs: '1' },
    { id: 5, order: 5, p: '🔢 DÖRT İŞLEM', n: 'Tahmin Stratejileri', e: '🎯', kpss: '1', dgs: '1' },
    { id: 6, order: 6, p: '🔢 DÖRT İŞLEM', n: 'Eşitlik Kavramı', e: '⚖️', kpss: '1', dgs: '1' },
    { id: 7, order: 7, p: '🔢 DÖRT İŞLEM', n: 'Kat Problemleri - Temel', e: '📊', kpss: '1', dgs: '1' },
    { id: 8, order: 8, p: '🔢 DÖRT İŞLEM', n: 'Basamak Değeri ve Sayı Okuma', e: '🔟', kpss: '1', dgs: '1' },
    { id: 9, order: 9, p: '🔢 DÖRT İŞLEM', n: 'Sayı Oluşturma ve Çözümleme', e: '📝', kpss: '1', dgs: '1' },
    { id: 10, order: 10, p: '🔢 DÖRT İŞLEM', n: 'Dört İşlem Problemleri - Sözel', e: '📖', kpss: '2', dgs: '2' },

    // SEVİYE 1: TEMEL KAVRAMLAR
    { id: 11, order: 11, p: '📊 TEMEL KAVRAMLAR', n: 'Tek ve Çift Sayılar', e: '🔢', kpss: '1', dgs: '1' },
    { id: 12, order: 12, p: '📊 TEMEL KAVRAMLAR', n: 'Pozitif ve Negatif Sayılar', e: '➕➖', kpss: '1', dgs: '1' },
    { id: 13, order: 13, p: '📊 TEMEL KAVRAMLAR', n: 'Ardışık Sayılar', e: '🔗', kpss: '1', dgs: '1' },
    { id: 14, order: 14, p: '📊 TEMEL KAVRAMLAR', n: 'Sayı Kümeleri', e: '🗂️', kpss: '1', dgs: '1' },

    // SEVİYE 2: BÖLÜNEBİLME - ASALLAR - OBEB-OKEK
    { id: 15, order: 15, p: '🔐 SAYI TEORİSİ', n: 'Bölünebilme Kuralları', e: '➗', kpss: '1-2', dgs: '1' },
    { id: 16, order: 16, p: '🔐 SAYI TEORİSİ', n: 'Asal Sayılar', e: '🔐', kpss: '1', dgs: '1' },
    { id: 17, order: 17, p: '🔐 SAYI TEORİSİ', n: 'Aralarında Asal Sayılar', e: '🤝', kpss: '1', dgs: '1' },
    { id: 18, order: 18, p: '🔐 SAYI TEORİSİ', n: 'Asal Çarpanlara Ayırma', e: '🔓', kpss: '1', dgs: '1' },
    { id: 19, order: 19, p: '🔐 SAYI TEORİSİ', n: 'EBOB (OBEB)', e: '🔗', kpss: '1-2', dgs: '2' },
    { id: 20, order: 20, p: '🔐 SAYI TEORİSİ', n: 'EKOK (OKEK)', e: '🔗', kpss: '1-2', dgs: '2' },
    { id: 21, order: 21, p: '🔐 SAYI TEORİSİ', n: 'Bölen Sayısı', e: '📊', kpss: '1', dgs: '1' },
    { id: 22, order: 22, p: '🔐 SAYI TEORİSİ', n: 'OBEB-OKEK Problemleri', e: '🎯', kpss: '2', dgs: '2' },

    // SEVİYE 3: KESİRLER VE RASYONEL SAYILAR
    { id: 23, order: 23, p: '🍕 KESİRLER', n: 'Kesir Türleri', e: '🍕', kpss: '1', dgs: '1' },
    { id: 24, order: 24, p: '🍕 KESİRLER', n: 'Sadeleştirme ve Genişletme', e: '🔄', kpss: '1', dgs: '1' },
    { id: 25, order: 25, p: '🍕 KESİRLER', n: 'Kesirlerde Sıralama', e: '📊', kpss: '1', dgs: '1' },
    { id: 26, order: 26, p: '🍕 KESİRLER', n: 'Kesirlerde Toplama-Çıkarma', e: '➕➖', kpss: '2', dgs: '2' },
    { id: 27, order: 27, p: '🍕 KESİRLER', n: 'Kesirlerde Çarpma', e: '✖️', kpss: '1', dgs: '1' },
    { id: 28, order: 28, p: '🍕 KESİRLER', n: 'Kesirlerde Bölme', e: '➗', kpss: '1', dgs: '1' },
    { id: 29, order: 29, p: '🍕 KESİRLER', n: 'Ondalık Sayılar', e: '🔟', kpss: '2', dgs: '2' },
    { id: 30, order: 30, p: '🍕 KESİRLER', n: 'Devirli Ondalık Sayılar', e: '🔄', kpss: '1', dgs: '1' },
    { id: 31, order: 31, p: '🍕 KESİRLER', n: 'Rasyonel Sayılarda İşlemler', e: '🧮', kpss: '2', dgs: '2' },
    { id: 32, order: 32, p: '🍕 KESİRLER', n: 'Rasyonel Sayı Problemleri', e: '📖', kpss: '2', dgs: '2' },
    { id: 33, order: 33, p: '🍕 KESİRLER', n: 'Kesir Problemleri - Sözel', e: '📝', kpss: '3', dgs: '3' },

    // SEVİYE 4: ÜSLÜ SAYILAR
    { id: 34, order: 34, p: '⬆️ ÜSLÜ SAYILAR', n: 'Üs Kavramı ve Tanımı', e: '⬆️', kpss: '1', dgs: '1' },
    { id: 35, order: 35, p: '⬆️ ÜSLÜ SAYILAR', n: 'Üslü Sayılarda Temel Kurallar', e: '📐', kpss: '1-2', dgs: '2' },
    { id: 36, order: 36, p: '⬆️ ÜSLÜ SAYILAR', n: 'Negatif Üs', e: '➖', kpss: '1', dgs: '1' },
    { id: 37, order: 37, p: '⬆️ ÜSLÜ SAYILAR', n: 'Üslü Sayılarda Toplama-Çıkarma', e: '➕➖', kpss: '1', dgs: '1' },
    { id: 38, order: 38, p: '⬆️ ÜSLÜ SAYILAR', n: 'Üslü Sayılarda Çarpma', e: '✖️', kpss: '1', dgs: '1' },
    { id: 39, order: 39, p: '⬆️ ÜSLÜ SAYILAR', n: 'Üslü Sayılarda Bölme', e: '➗', kpss: '1', dgs: '1' },
    { id: 40, order: 40, p: '⬆️ ÜSLÜ SAYILAR', n: 'Üssün Üssü', e: '🔁', kpss: '1', dgs: '1' },
    { id: 41, order: 41, p: '⬆️ ÜSLÜ SAYILAR', n: 'Üslü Denklemler', e: '⚖️', kpss: '2', dgs: '2' },
    { id: 42, order: 42, p: '⬆️ ÜSLÜ SAYILAR', n: 'Üslü Sayılarda Sıralama', e: '📊', kpss: '1', dgs: '1' },
    { id: 43, order: 43, p: '⬆️ ÜSLÜ SAYILAR', n: 'Bilimsel Gösterim', e: '🔬', kpss: '1', dgs: '1' },
    { id: 44, order: 44, p: '⬆️ ÜSLÜ SAYILAR', n: 'Üslü Sayı Problemleri', e: '📖', kpss: '2', dgs: '2' },
    { id: 45, order: 45, p: '⬆️ ÜSLÜ SAYILAR', n: 'Özel Üs Durumları (0,1,-1)', e: '🎯', kpss: '1', dgs: '1' },

    // SEVİYE 5: KÖKLÜ SAYILAR
    { id: 46, order: 46, p: '√ KÖKLÜ SAYILAR', n: 'Kök Kavramı ve Tanımı', e: '√', kpss: '1', dgs: '1' },
    { id: 47, order: 47, p: '√ KÖKLÜ SAYILAR', n: 'Karekök ve Küpkök', e: '√', kpss: '1', dgs: '1' },
    { id: 48, order: 48, p: '√ KÖKLÜ SAYILAR', n: 'Köklü Sayılarda Temel Kurallar', e: '📐', kpss: '1', dgs: '1' },
    { id: 49, order: 49, p: '√ KÖKLÜ SAYILAR', n: 'Kök Dışına Çıkarma', e: '🔓', kpss: '1-2', dgs: '2' },
    { id: 50, order: 50, p: '√ KÖKLÜ SAYILAR', n: 'Kök İçine Alma', e: '🔒', kpss: '1', dgs: '1' },
    { id: 51, order: 51, p: '√ KÖKLÜ SAYILAR', n: 'Köklü Sayılarda Toplama-Çıkarma', e: '➕➖', kpss: '1', dgs: '1' },
    { id: 52, order: 52, p: '√ KÖKLÜ SAYILAR', n: 'Köklü Sayılarda Çarpma', e: '✖️', kpss: '1', dgs: '1' },
    { id: 53, order: 53, p: '√ KÖKLÜ SAYILAR', n: 'Köklü Sayılarda Bölme', e: '➗', kpss: '1', dgs: '1' },
    { id: 54, order: 54, p: '√ KÖKLÜ SAYILAR', n: 'Paydayı Kökten Kurtarma (Eşlenik)', e: '🔄', kpss: '2', dgs: '2' },
    { id: 55, order: 55, p: '√ KÖKLÜ SAYILAR', n: 'Köklü Sayılarda Sıralama', e: '📊', kpss: '1', dgs: '1' },
    { id: 56, order: 56, p: '√ KÖKLÜ SAYILAR', n: 'Köklü Denklemler', e: '⚖️', kpss: '2', dgs: '2' },
    { id: 57, order: 57, p: '√ KÖKLÜ SAYILAR', n: 'Köklü Sayı Problemleri', e: '📖', kpss: '2', dgs: '2' },
    { id: 58, order: 58, p: '√ KÖKLÜ SAYILAR', n: 'İç İçe Kökler', e: '🔁', kpss: '2', dgs: '2' },
    { id: 59, order: 59, p: '√ KÖKLÜ SAYILAR', n: 'Sonsuz Kökler', e: '∞', kpss: '2', dgs: '2' },
    { id: 60, order: 60, p: '√ KÖKLÜ SAYILAR', n: 'Kök-Üs İlişkisi', e: '🔄', kpss: '1', dgs: '1' },

    // SEVİYE 6: ÇARPANLARA AYIRMA
    { id: 61, order: 61, p: '🧩 ÇARPANLARA AYIRMA', n: 'Ortak Çarpan Parantezi', e: '📦', kpss: '1', dgs: '1' },
    { id: 62, order: 62, p: '🧩 ÇARPANLARA AYIRMA', n: 'Gruplandırma Yöntemi', e: '👥', kpss: '1', dgs: '1' },
    { id: 63, order: 63, p: '🧩 ÇARPANLARA AYIRMA', n: 'İki Kare Farkı', e: '📐', kpss: '1', dgs: '1' },
    { id: 64, order: 64, p: '🧩 ÇARPANLARA AYIRMA', n: 'Tam Kare İfadeler', e: '🔲', kpss: '1', dgs: '1' },
    { id: 65, order: 65, p: '🧩 ÇARPANLARA AYIRMA', n: 'İki Küp Toplamı ve Farkı', e: '🧊', kpss: '1', dgs: '1' },
    { id: 66, order: 66, p: '🧩 ÇARPANLARA AYIRMA', n: 'Üç Terimli İfadeler', e: '📐', kpss: '2', dgs: '2' },
    { id: 67, order: 67, p: '🧩 ÇARPANLARA AYIRMA', n: 'Terim Ekleme-Çıkarma', e: '➕➖', kpss: '2', dgs: '2' },
    { id: 68, order: 68, p: '🧩 ÇARPANLARA AYIRMA', n: 'Değişken Değiştirme', e: '🔄', kpss: '2', dgs: '2' },
    { id: 69, order: 69, p: '🧩 ÇARPANLARA AYIRMA', n: 'Çarpanlara Ayırma Stratejileri', e: '🎯', kpss: '2', dgs: '2' },
    { id: 70, order: 70, p: '🧩 ÇARPANLARA AYIRMA', n: 'Polinom Bölmesi', e: '➗', kpss: '2', dgs: '2' },
    { id: 71, order: 71, p: '🧩 ÇARPANLARA AYIRMA', n: 'Özdeşlikler', e: '📐', kpss: '2', dgs: '2' },
    { id: 72, order: 72, p: '🧩 ÇARPANLARA AYIRMA', n: 'Rasyonel İfadelerde Sadeleştirme', e: '🔄', kpss: '2', dgs: '2' },

    // SEVİYE 7: DENKLEMLER
    { id: 73, order: 73, p: '⚖️ DENKLEMLER', n: '1. Derece 1 Bilinmeyenli Denklemler', e: '⚖️', kpss: '2', dgs: '2' },
    { id: 74, order: 74, p: '⚖️ DENKLEMLER', n: '1. Derece 2 Bilinmeyenli Denklemler', e: '📐', kpss: '1', dgs: '2' },
    { id: 75, order: 75, p: '⚖️ DENKLEMLER', n: 'Denklem Kurma Problemleri', e: '📝', kpss: '3', dgs: '3' },
    { id: 76, order: 76, p: '⚖️ DENKLEMLER', n: '2. Derece Denklemler - Tanım', e: '📉', kpss: 'YOK', dgs: '2' },
    { id: 77, order: 77, p: '⚖️ DENKLEMLER', n: 'Diskriminant ve Kök Bulma', e: 'Δ', kpss: 'YOK', dgs: '2' },
    { id: 78, order: 78, p: '⚖️ DENKLEMLER', n: 'Kök-Katsayı İlişkileri', e: '🔗', kpss: 'YOK', dgs: '2' },
    { id: 79, order: 79, p: '⚖️ DENKLEMLER', n: 'Köklerin İşaret İncelemesi', e: '➕➖', kpss: 'YOK', dgs: '2' },
    { id: 80, order: 80, p: '⚖️ DENKLEMLER', n: '2. Derece Denklemlerde Özel Durumlar', e: '🎯', kpss: 'YOK', dgs: '2' },
    { id: 81, order: 81, p: '⚖️ DENKLEMLER', n: '2. Derece Denklem Problemleri', e: '📖', kpss: 'YOK', dgs: '2' },
    { id: 82, order: 82, p: '⚖️ DENKLEMLER', n: 'Rasyonel Denklemler', e: '🔢', kpss: '1', dgs: '2' },
    { id: 83, order: 83, p: '⚖️ DENKLEMLER', n: 'Köklü Denklemler', e: '√', kpss: '1', dgs: '2' },
    { id: 84, order: 84, p: '⚖️ DENKLEMLER', n: 'Mutlak Değerli Denklemler', e: '|x|', kpss: '1', dgs: '2' },
    { id: 85, order: 85, p: '⚖️ DENKLEMLER', n: 'Denklem Sistemleri', e: '🔗', kpss: '2', dgs: '2' },

    // SEVİYE 8: EŞİTSİZLİKLER
    { id: 86, order: 86, p: '📊 EŞİTSİZLİKLER', n: 'Eşitsizlik Kavramı ve Semboller', e: '< >', kpss: '1', dgs: '1' },
    { id: 87, order: 87, p: '📊 EŞİTSİZLİKLER', n: '1. Derece Eşitsizlikler', e: '⚖️', kpss: '1', dgs: '2' },
    { id: 88, order: 88, p: '📊 EŞİTSİZLİKLER', n: 'Eşitsizliklerde Toplama-Çıkarma', e: '➕➖', kpss: '1', dgs: '1' },
    { id: 89, order: 89, p: '📊 EŞİTSİZLİKLER', n: 'Eşitsizliklerde Çarpma-Bölme', e: '✖️➗', kpss: '1', dgs: '1' },
    { id: 90, order: 90, p: '📊 EŞİTSİZLİKLER', n: 'Aralık Gösterimleri', e: '📏', kpss: '1', dgs: '1' },
    { id: 91, order: 91, p: '📊 EŞİTSİZLİKLER', n: '2. Derece Eşitsizlikler', e: '📉', kpss: 'YOK', dgs: '2' },
    { id: 92, order: 92, p: '📊 EŞİTSİZLİKLER', n: 'İşaret Tablosu Yöntemi', e: '📊', kpss: '2', dgs: '2' },
    { id: 93, order: 93, p: '📊 EŞİTSİZLİKLER', n: 'Eşitsizlik Sistemleri', e: '🔗', kpss: '1', dgs: '2' },
    { id: 94, order: 94, p: '📊 EŞİTSİZLİKLER', n: 'Rasyonel Eşitsizlikler', e: '🔢', kpss: '2', dgs: '2' },
    { id: 95, order: 95, p: '📊 EŞİTSİZLİKLER', n: 'Mutlak Değerli Eşitsizlikler', e: '|x|', kpss: '2', dgs: '2' },
    { id: 96, order: 96, p: '📊 EŞİTSİZLİKLER', n: 'Eşitsizlik Problemleri', e: '📖', kpss: '2', dgs: '2' },
    { id: 97, order: 97, p: '📊 EŞİTSİZLİKLER', n: 'Basit Eşitsizlikler (Özel Kurallar)', e: '🎯', kpss: '1', dgs: '2' },

    // SEVİYE 9: MUTLAK DEĞER
    { id: 98, order: 98, p: '|x| MUTLAK DEĞER', n: 'Mutlak Değer Tanımı ve Özellikler', e: '|x|', kpss: '1', dgs: '1' },
    { id: 99, order: 99, p: '|x| MUTLAK DEĞER', n: 'Mutlak Değerin Geometrik Yorumu', e: '📏', kpss: '1', dgs: '1' },
    { id: 100, order: 100, p: '|x| MUTLAK DEĞER', n: 'Mutlak Değerli Denklemler', e: '⚖️', kpss: '2', dgs: '2' },
    { id: 101, order: 101, p: '|x| MUTLAK DEĞER', n: 'Mutlak Değerli Eşitsizlikler', e: '📊', kpss: '2', dgs: '2' },
    { id: 102, order: 102, p: '|x| MUTLAK DEĞER', n: 'Parçalı Fonksiyon Olarak Mutlak Değer', e: '🔀', kpss: '1', dgs: '1' },
    { id: 103, order: 103, p: '|x| MUTLAK DEĞER', n: 'Mutlak Değer İşlem Özellikleri', e: '🧮', kpss: '1', dgs: '1' },
    { id: 104, order: 104, p: '|x| MUTLAK DEĞER', n: 'Mutlak Değerli Fonksiyon Grafikleri', e: '📈', kpss: '1', dgs: '1' },
    { id: 105, order: 105, p: '|x| MUTLAK DEĞER', n: 'Mutlak Değer Problemleri', e: '📖', kpss: '1', dgs: '1' },
    { id: 106, order: 106, p: '|x| MUTLAK DEĞER', n: 'Mutlak Değer ve Karekök', e: '√', kpss: '1', dgs: '1' },
    { id: 107, order: 107, p: '|x| MUTLAK DEĞER', n: 'İç İçe Mutlak Değer', e: '||x||', kpss: '2', dgs: '2' },

    // SEVİYE 10: ORAN-ORANTI
    { id: 108, order: 108, p: '📏 ORAN-ORANTI', n: 'Oran Kavramı', e: '📊', kpss: '1', dgs: '1' },
    { id: 109, order: 109, p: '📏 ORAN-ORANTI', n: 'Orantı Kavramı ve Çeşitleri', e: '⚖️', kpss: '1', dgs: '1' },
    { id: 110, order: 110, p: '📏 ORAN-ORANTI', n: 'Doğru Orantı', e: '⬆️⬆️', kpss: '2', dgs: '2' },
    { id: 111, order: 111, p: '📏 ORAN-ORANTI', n: 'Ters Orantı', e: '⬆️⬇️', kpss: '2', dgs: '2' },
    { id: 112, order: 112, p: '📏 ORAN-ORANTI', n: 'Bileşik Orantı', e: '🔗', kpss: '2', dgs: '2' },
    { id: 113, order: 113, p: '📏 ORAN-ORANTI', n: 'Orantı Özellikleri', e: '📐', kpss: '1', dgs: '1' },
    { id: 114, order: 114, p: '📏 ORAN-ORANTI', n: 'Orantı Problemleri - Sayı', e: '🔢', kpss: '2', dgs: '2' },
    { id: 115, order: 115, p: '📏 ORAN-ORANTI', n: 'Orantı Problemleri - İşçi-Havuz', e: '👷', kpss: '2', dgs: '2' },
    { id: 116, order: 116, p: '📏 ORAN-ORANTI', n: 'Orantı Problemleri - Hız-Yol', e: '🚗', kpss: '2', dgs: '2' },
    { id: 117, order: 117, p: '📏 ORAN-ORANTI', n: 'Orantı Problemleri - Karışım', e: '🧪', kpss: '2', dgs: '2' },
    { id: 118, order: 118, p: '📏 ORAN-ORANTI', n: 'Orantı Problemleri - Genel', e: '📖', kpss: '2', dgs: '2' },
    { id: 119, order: 119, p: '📏 ORAN-ORANTI', n: 'Aritmetik-Geometrik-Harmonik Ortalama', e: '📊', kpss: '1', dgs: '1' },

    // SEVİYE 11: PROBLEMLER
    { id: 120, order: 120, p: '📝 PROBLEMLER', n: 'Sayı Problemleri', e: '🔢', kpss: '3', dgs: '3' },
    { id: 121, order: 121, p: '📝 PROBLEMLER', n: 'Kesir Problemleri', e: '🍕', kpss: '2', dgs: '2' },
    { id: 122, order: 122, p: '📝 PROBLEMLER', n: 'Yaş Problemleri', e: '🎂', kpss: '2', dgs: '2' },
    { id: 123, order: 123, p: '📝 PROBLEMLER', n: 'Yüzde Problemleri', e: '%', kpss: '3', dgs: '3' },
    { id: 124, order: 124, p: '📝 PROBLEMLER', n: 'Kâr-Zarar Problemleri', e: '💰', kpss: '2', dgs: '2' },
    { id: 125, order: 125, p: '📝 PROBLEMLER', n: 'Faiz Problemleri', e: '🏦', kpss: '1', dgs: '1' },
    { id: 126, order: 126, p: '📝 PROBLEMLER', n: 'İşçi-Havuz Problemleri', e: '👷', kpss: '2', dgs: '2' },
    { id: 127, order: 127, p: '📝 PROBLEMLER', n: 'Hız-Hareket Problemleri', e: '🚗', kpss: '3', dgs: '3' },
    { id: 128, order: 128, p: '📝 PROBLEMLER', n: 'Karışım Problemleri', e: '🧪', kpss: '2', dgs: '2' },
    { id: 129, order: 129, p: '📝 PROBLEMLER', n: 'Saat Problemleri', e: '⏰', kpss: '1', dgs: '1' },
    { id: 130, order: 130, p: '📝 PROBLEMLER', n: 'Grafik Problemleri', e: '📊', kpss: '1', dgs: '2' },
    { id: 131, order: 131, p: '📝 PROBLEMLER', n: 'Rutin Olmayan Problemler', e: '🧩', kpss: '1', dgs: '2' },

    // SEVİYE 12: KÜMELER
    { id: 132, order: 132, p: '🗂️ KÜMELER', n: 'Küme Kavramı ve Gösterimler', e: '🗂️', kpss: '1', dgs: '1' },
    { id: 133, order: 133, p: '🗂️ KÜMELER', n: 'Alt Küme', e: '⊂', kpss: '1', dgs: '1' },
    { id: 134, order: 134, p: '🗂️ KÜMELER', n: 'Kümelerde Birleşim İşlemi', e: '∪', kpss: '1', dgs: '1' },
    { id: 135, order: 135, p: '🗂️ KÜMELER', n: 'Kümelerde Kesişim İşlemi', e: '∩', kpss: '1', dgs: '1' },
    { id: 136, order: 136, p: '🗂️ KÜMELER', n: 'Kümelerde Fark ve Tümleme', e: '\\', kpss: '1', dgs: '1' },
    { id: 137, order: 137, p: '🗂️ KÜMELER', n: 'Küme Problemleri - 2 Küme', e: '🔢', kpss: '2', dgs: '2' },
    { id: 138, order: 138, p: '🗂️ KÜMELER', n: 'Küme Problemleri - 3 Küme', e: '🔢', kpss: '2', dgs: '2' },
    { id: 139, order: 139, p: '🗂️ KÜMELER', n: 'Küme İşlemleri ve Özellikleri', e: '📐', kpss: '1', dgs: '1' },
    { id: 140, order: 140, p: '🗂️ KÜMELER', n: 'Venn Şeması', e: '🎯', kpss: '1', dgs: '1' },
    { id: 141, order: 141, p: '🗂️ KÜMELER', n: 'Kartezyen Çarpım', e: '×', kpss: '1', dgs: '1' },

    // SEVİYE 13: PERMÜTASYON
    { id: 142, order: 142, p: '🔄 PERMÜTASYON', n: 'Saymanın Temel İlkesi', e: '📐', kpss: '1', dgs: '1' },
    { id: 143, order: 143, p: '🔄 PERMÜTASYON', n: 'Faktöriyel', e: '!', kpss: '1', dgs: '1' },
    { id: 144, order: 144, p: '🔄 PERMÜTASYON', n: 'Permütasyon Tanımı ve Formülü', e: 'P(n,r)', kpss: '1', dgs: '2' },
    { id: 145, order: 145, p: '🔄 PERMÜTASYON', n: 'Tekrarlı Permütasyon', e: '🔁', kpss: '1', dgs: '1' },
    { id: 146, order: 146, p: '🔄 PERMÜTASYON', n: 'Dairesel Permütasyon', e: '⭕', kpss: '1', dgs: '1' },
    { id: 147, order: 147, p: '🔄 PERMÜTASYON', n: 'Koşullu Permütasyon - Yan Yana', e: '👥', kpss: '1', dgs: '2' },
    { id: 148, order: 148, p: '🔄 PERMÜTASYON', n: 'Koşullu Permütasyon - Aralıklı', e: '🔲', kpss: '1', dgs: '2' },
    { id: 149, order: 149, p: '🔄 PERMÜTASYON', n: 'Koşullu Permütasyon - Başta-Sonda', e: '🎯', kpss: '1', dgs: '1' },
    { id: 150, order: 150, p: '🔄 PERMÜTASYON', n: 'Harf ve Sayı Permütasyonları', e: '🔤', kpss: '2', dgs: '2' },
    { id: 151, order: 151, p: '🔄 PERMÜTASYON', n: 'Permütasyon Problemleri', e: '📖', kpss: '1', dgs: '2' },

    // SEVİYE 14: KOMBİNASYON
    { id: 152, order: 152, p: '🎲 KOMBİNASYON', n: 'Kombinasyon Tanımı ve Formülü', e: 'C(n,r)', kpss: '1', dgs: '2' },
    { id: 153, order: 153, p: '🎲 KOMBİNASYON', n: 'Kombinasyon Özellikleri', e: '📐', kpss: '1', dgs: '1' },
    { id: 154, order: 154, p: '🎲 KOMBİNASYON', n: 'Kombinasyon ve Permütasyon Farkı', e: '🔀', kpss: '1', dgs: '1' },
    { id: 155, order: 155, p: '🎲 KOMBİNASYON', n: 'Geometrik Kombinasyon - Nokta-Doğru', e: '📐', kpss: '1', dgs: '1' },
    { id: 156, order: 156, p: '🎲 KOMBİNASYON', n: 'Geometrik Kombinasyon - Çokgen-Çember', e: '⭕', kpss: '1', dgs: '1' },
    { id: 157, order: 157, p: '🎲 KOMBİNASYON', n: 'Seçme Problemleri - Belirli Eleman', e: '🎯', kpss: '2', dgs: '2' },
    { id: 158, order: 158, p: '🎲 KOMBİNASYON', n: 'Seçme Problemleri - En Az/En Çok', e: '📊', kpss: '2', dgs: '2' },
    { id: 159, order: 159, p: '🎲 KOMBİNASYON', n: 'Gruplandırma ve Dağıtma', e: '📦', kpss: '2', dgs: '2' },
    { id: 160, order: 160, p: '🎲 KOMBİNASYON', n: 'Kombinasyon Problemleri', e: '📖', kpss: '2', dgs: '2' },
    { id: 161, order: 161, p: '🎲 KOMBİNASYON', n: 'Pascal Üçgeni ve Binom Açılımı', e: '📐', kpss: '1', dgs: '1' },

    // SEVİYE 15: OLASILIK
    { id: 162, order: 162, p: '🎲 OLASILIK', n: 'Olasılık Temel Kavramlar', e: '📊', kpss: '1', dgs: '1' },
    { id: 163, order: 163, p: '🎲 OLASILIK', n: 'Olasılık Hesaplama', e: '🧮', kpss: '2', dgs: '2' },
    { id: 164, order: 164, p: '🎲 OLASILIK', n: 'Ayrık Olaylar', e: '🔀', kpss: '1', dgs: '1' },
    { id: 165, order: 165, p: '🎲 OLASILIK', n: 'Bağımsız Olaylar', e: '🔄', kpss: '2', dgs: '2' },
    { id: 166, order: 166, p: '🎲 OLASILIK', n: 'Bağımlı (Koşullu) Olaylar', e: '📐', kpss: '2', dgs: '2' },
    { id: 167, order: 167, p: '🎲 OLASILIK', n: 'Tümleyen Olay', e: '1-P(A)', kpss: '1', dgs: '1' },
    { id: 168, order: 168, p: '🎲 OLASILIK', n: 'Birleşim ve Kesişim Olasılığı', e: '∪∩', kpss: '2', dgs: '2' },
    { id: 169, order: 169, p: '🎲 OLASILIK', n: 'Zar Problemleri', e: '🎲', kpss: '2', dgs: '2' },
    { id: 170, order: 170, p: '🎲 OLASILIK', n: 'Para Problemleri', e: '🪙', kpss: '1', dgs: '1' },
    { id: 171, order: 171, p: '🎲 OLASILIK', n: 'Top Çekme Problemleri', e: '🔴🔵', kpss: '2', dgs: '2' },
    { id: 172, order: 172, p: '🎲 OLASILIK', n: 'Kart Çekme Problemleri', e: '🃏', kpss: '1', dgs: '1' },
    { id: 173, order: 173, p: '🎲 OLASILIK', n: 'Olasılık ve Sayma', e: '🔢', kpss: '2', dgs: '2' },
    { id: 174, order: 174, p: '🎲 OLASILIK', n: 'Deneysel ve Teorik Olasılık', e: '🧪', kpss: '1', dgs: '1' },

    // SEVİYE 16: İSTATİSTİK
    { id: 175, order: 175, p: '📊 İSTATİSTİK', n: 'Veri ve Veri Türleri', e: '📋', kpss: '1', dgs: '1' },
    { id: 176, order: 176, p: '📊 İSTATİSTİK', n: 'Merkezi Eğilim Ölçüleri - Ortalama', e: 'x̄', kpss: '2', dgs: '2' },
    { id: 177, order: 177, p: '📊 İSTATİSTİK', n: 'Merkezi Eğilim Ölçüleri - Medyan-Mod', e: '📊', kpss: '2', dgs: '2' },
    { id: 178, order: 178, p: '📊 İSTATİSTİK', n: 'Merkezi Yayılma Ölçüleri - Açıklık', e: '📏', kpss: '1', dgs: '1' },
    { id: 179, order: 179, p: '📊 İSTATİSTİK', n: 'Standart Sapma ve Varyans', e: 'σ', kpss: 'YOK', dgs: '2' },
    { id: 180, order: 180, p: '📊 İSTATİSTİK', n: 'Grafikler (Sütun-Çizgi-Daire)', e: '📊', kpss: '2', dgs: '2' },
    { id: 181, order: 181, p: '📊 İSTATİSTİK', n: 'Histogram', e: '📊', kpss: '1', dgs: '1' },
    { id: 182, order: 182, p: '📊 İSTATİSTİK', n: 'Tablo ve Grafik Yorumlama', e: '📋', kpss: '2', dgs: '2' },
    { id: 183, order: 183, p: '📊 İSTATİSTİK', n: 'Veri Analizi Problemleri', e: '📖', kpss: '2', dgs: '2' },
    { id: 184, order: 184, p: '📊 İSTATİSTİK', n: 'Merkezi Eğilim ve Yayılma Karma', e: '🔗', kpss: '2', dgs: '2' },

    // SEVİYE 17: MANTIK
    { id: 185, order: 185, p: '🧠 MANTIK', n: 'Önerme ve Doğruluk Değeri', e: 'p,q,r', kpss: '1', dgs: '1' },
    { id: 186, order: 186, p: '🧠 MANTIK', n: 'Temel Bağlaçlar - Ve, Veya', e: '∧∨', kpss: '1', dgs: '1' },
    { id: 187, order: 187, p: '🧠 MANTIK', n: 'Temel Bağlaçlar - İse, Ancak ve Ancak', e: '⇒⇔', kpss: '1', dgs: '1' },
    { id: 188, order: 188, p: '🧠 MANTIK', n: 'Bileşik Önermeler ve Doğruluk Tablosu', e: '📊', kpss: '1', dgs: '1' },
    { id: 189, order: 189, p: '🧠 MANTIK', n: 'Önerme Denkliği - Totoloji-Çelişki', e: '≡', kpss: '1', dgs: '1' },
    { id: 190, order: 190, p: '🧠 MANTIK', n: 'De Morgan Kuralları', e: '¬', kpss: '1', dgs: '1' },
    { id: 191, order: 191, p: '🧠 MANTIK', n: 'Niceleyiciler - Her, Bazı', e: '∀∃', kpss: '1', dgs: '1' },
    { id: 192, order: 192, p: '🧠 MANTIK', n: 'Açık Önerme ve Doğruluk Kümesi', e: 'p(x)', kpss: '1', dgs: '1' },
    { id: 193, order: 193, p: '🧠 MANTIK', n: 'Niceleyicilerin Değili', e: '¬∀¬∃', kpss: '1', dgs: '1' },
    { id: 194, order: 194, p: '🧠 MANTIK', n: 'Mantık ve Kümeler İlişkisi', e: '🔗', kpss: '1', dgs: '1' },
    { id: 195, order: 195, p: '🧠 MANTIK', n: 'Mantık Problemleri', e: '📖', kpss: '1', dgs: '1' },

    // SEVİYE 18: GEOMETRİ
    { id: 196, order: 196, p: '📐 GEOMETRİ', n: 'Açılar', e: '∠', kpss: '2', dgs: '2' },
    { id: 197, order: 197, p: '📐 GEOMETRİ', n: 'Üçgenler - Temel Kavramlar', e: '▲', kpss: '2', dgs: '2' },
    { id: 198, order: 198, p: '📐 GEOMETRİ', n: 'Üçgende Açılar', e: '∠', kpss: '2', dgs: '2' },
    { id: 199, order: 199, p: '📐 GEOMETRİ', n: 'Dik Üçgen ve Pisagor', e: '📐', kpss: '3', dgs: '3' },
    { id: 200, order: 200, p: '📐 GEOMETRİ', n: 'Özel Üçgenler', e: '🎯', kpss: '2', dgs: '2' },
    { id: 201, order: 201, p: '📐 GEOMETRİ', n: 'Üçgende Alan', e: '🧮', kpss: '2', dgs: '2' },
    { id: 202, order: 202, p: '📐 GEOMETRİ', n: 'Dörtgenler', e: '◼️', kpss: '2', dgs: '2' },
    { id: 203, order: 203, p: '📐 GEOMETRİ', n: 'Çember ve Daire', e: '⚪', kpss: '2', dgs: '2' },
    { id: 204, order: 204, p: '📐 GEOMETRİ', n: 'Katı Cisimler', e: '🧊', kpss: '1', dgs: '2' },
    { id: 205, order: 205, p: '📐 GEOMETRİ', n: 'Analitik Geometri', e: '📈', kpss: 'YOK', dgs: '3' }
];

// ============================================
// SABİTLER
// ============================================
const CONSTANTS = {
    TOTAL_TOPICS: 205,  // Toplam konu sayısı (questions.js'deki 19 seviyeye göre ayrılmış 205 alt konu)
    QUESTIONS_PER_TOPIC: 30,
    QUESTION_BANK_SIZE: 300,
    EXAM_SETS: 5,
    EXAM_QUESTIONS: 20,
    EXAM_DURATION: 20,
    API_DAILY_LIMIT: 20,
    MAX_STREAK_CELEBRATE: [5, 10, 15, 20],
    STORAGE_KEY: 'kpss_mat_v4',
    API_KEY_STORAGE: 'kpss_mat_api_key'
};

const EXAM_SEEDS = [42, 71, 13, 88, 56];

// ============================================
// YARDIMCI FONKSİYONLAR
// ============================================
function getTopicById(id) { 
    return TOPICS.find(t => t.id === id); 
}

function getNextTopic(currentId) {
    const current = getTopicById(currentId);
    return current ? TOPICS.find(t => t.order === current.order + 1) || null : null;
}

function getNextLevel(levelName) {
    const levels = Object.keys(LEVELS);
    const idx = levels.indexOf(levelName);
    return idx < levels.length - 1 ? levels[idx + 1] : null;
}

// ============================================
// FORMÜLLER (İsteğe bağlı, gösterim için)
// ============================================
const FORMULAS = {
    // Dört İşlem - her konu için geçerli genel formüller
    1: ['Toplama: a + b = c', 'Çıkarma: a - b = c'],
    2: ['Çarpma: a × b = c', 'Bölme: a ÷ b = c (b≠0)'],
    3: ['İşlem Önceliği: önce parantez, sonra çarpma/bölme, en son toplama/çıkarma'],
    11: ['Tek sayı: 2n+1', 'Çift sayı: 2n'],
    12: ['Negatif × Negatif = Pozitif', 'Pozitif × Negatif = Negatif'],
    13: ['Ardışık sayılar: n, n+1, n+2', 'Terim sayısı = (Son - İlk)/Artış + 1'],
    15: ['2 ile bölünebilme: son rakam çift', '3 ile bölünebilme: rakamlar toplamı 3\'ün katı', '5 ile bölünebilme: son rakam 0 veya 5'],
    16: ['Asal sayı: 1 ve kendisinden başka böleni yok', 'En küçük asal: 2'],
    19: ['EBOB(a,b) = en büyük ortak bölen', 'EBOB(a,b) × EKOK(a,b) = a×b'],
    20: ['EKOK(a,b) = en küçük ortak kat'],
    23: ['Basit kesir: pay < payda', 'Bileşik kesir: pay ≥ payda'],
    26: ['Kesirlerde toplama: paydalar eşitlenir', 'a/b + c/d = (ad+bc)/bd'],
    27: ['Kesirlerde çarpma: (a/b)×(c/d) = (ac)/(bd)'],
    28: ['Kesirlerde bölme: (a/b)÷(c/d) = (a/b)×(d/c) = (ad)/(bc)'],
    29: ['Ondalık sayılar: virgülün sağında kalan kısım'],
    34: ['aⁿ = a×a×...×a (n tane)', 'a¹ = a', 'a⁰ = 1 (a≠0)'],
    35: ['aᵐ × aⁿ = aᵐ⁺ⁿ', 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐⁿ'],
    36: ['a⁻ⁿ = 1/aⁿ'],
    46: ['√a: karesi a olan pozitif sayı', '√a × √a = a'],
    47: ['∛a: küpü a olan sayı'],
    49: ['√(a²b) = a√b (a≥0, b≥0)'],
    54: ['1/(√a+√b) = (√a-√b)/(a-b)'],
    61: ['Ortak çarpan parantezi: ab + ac = a(b+c)'],
    63: ['İki kare farkı: a² - b² = (a-b)(a+b)'],
    64: ['Tam kare: (a±b)² = a² ± 2ab + b²'],
    65: ['İki küp: a³ ± b³ = (a±b)(a² ∓ ab + b²)'],
    73: ['Birinci derece denklem: ax + b = 0 → x = -b/a (a≠0)'],
    86: ['Eşitsizlik yönü negatifle çarpınca/bölünce değişir'],
    98: ['|x| = x (x≥0), |x| = -x (x<0)'],
    108: ['Oran: a/b, Orantı: a/b = c/d'],
    110: ['Doğru orantı: a/b = k (sabit)'],
    111: ['Ters orantı: a·b = k (sabit)'],
    120: ['Sayı problemlerinde bilinmeyene x deyip denklem kurulur'],
    122: ['Yaş farkı sabittir'],
    123: ['Yüzde: %p = p/100', 'Bir sayının %p\'si: a×p/100'],
    124: ['Kâr = Satış - Maliyet', 'Kâr% = (Kâr/Maliyet)×100'],
    126: ['İşçi problemleri: 1/A + 1/B = 1/T (birlikte)'],
    127: ['Yol = Hız × Zaman'],
    132: ['Küme: iyi tanımlanmış nesneler topluluğu'],
    142: ['Sayma: Çarpma kuralı (VE), Toplama kuralı (VEYA)'],
    143: ['Faktöriyel: n! = n×(n-1)×...×1', '0! = 1'],
    144: ['Permütasyon: P(n,r) = n!/(n-r)!'],
    152: ['Kombinasyon: C(n,r) = n!/(r!(n-r)!)'],
    162: ['Olasılık: P(A) = istenen/toplam'],
    175: ['Ortalama = Verilerin toplamı / Veri sayısı'],
    185: ['Önerme: doğru veya yanlış kesin hüküm bildiren ifade'],
    196: ['Üçgenin iç açıları toplamı: 180°', 'Dörtgenin iç açıları toplamı: 360°'],
    199: ['Pisagor: a² + b² = c²'],
    205: ['İki nokta arası uzaklık: √((x₂-x₁)²+(y₂-y₁)²)']
};

console.log('✅ config.js (v4.1) yüklendi -', TOPICS.length, 'konu');
