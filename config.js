// ============================================
// MİSYON KORUMA SINAVI - KONFİGÜRASYON DOSYASI
// 12 Ders | Üniteler | Konu Anlatımları
// ============================================

const TOPICS = [
    {
        id: 1, order: 1, e: '⚖️', n: 'Anayasa Hukuku', locked: false,
        units: [
            {
                id: 'anayasa-1',
                title: 'Anayasa Kavramı ve Türleri',
                content: `
                    <h4>📌 Anayasa Nedir?</h4>
                    <p>Anayasa, bir devletin <b>temel kuruluşunu</b>, organlarını, bunların görev ve yetkilerini, kişilerin <b>temel hak ve özgürlüklerini</b> düzenleyen en üstün hukuk kurallarıdır.</p>
                    <h4>📌 Anayasa Türleri</h4>
                    <ul>
                        <li><b>Yazılı / Yazısız:</b> Türkiye yazılı anayasa geleneğine sahiptir.</li>
                        <li><b>Katı / Yumuşak:</b> Değiştirilmesi özel usullere bağlı olan <b>katı</b> anayasadır.</li>
                        <li><b>Çerçeve / Kazuistik:</b> Ayrıntılı düzenleyen <b>kazuistik</b> anayasadır.</li>
                    </ul>
                    <p class="tip">💡 <b>İpucu:</b> 1982 Anayasası katı, yazılı ve kazuistik bir anayasadır.</p>
                `
            },
            {
                id: 'anayasa-2',
                title: 'Temel Hak ve Özgürlükler',
                content: `
                    <h4>📌 Hak ve Özgürlüklerin Sınıflandırılması</h4>
                    <ul>
                        <li><b>Kişi hakları:</b> Yaşama, kişi dokunulmazlığı, özel hayatın gizliliği</li>
                        <li><b>Sosyal ve ekonomik haklar:</b> Eğitim, sağlık, çalışma hakkı</li>
                        <li><b>Siyasi haklar:</b> Seçme, seçilme, siyasi parti kurma</li>
                    </ul>
                    <h4>📌 Sınırlama Rejimi</h4>
                    <p>Hak ve özgürlükler <b>kanunla</b> ve <b>Anayasa'nın ilgili maddelerindeki sebeplere bağlı</b> olarak sınırlandırılabilir.</p>
                    <p class="tip">💡 <b>İpucu:</b> 2001 değişiklikleriyle "genel sınırlama" sebepleri kaldırılmıştır.</p>
                `
            },
            {
                id: 'anayasa-3',
                title: 'Yasama - Yürütme - Yargı',
                content: `
                    <h4>📌 Yasama</h4>
                    <p>TBMM 600 milletvekilinden oluşur. Görev süresi 5 yıldır. Kanun yapmak, bütçeyi kabul etmek temel görevleridir.</p>
                    <h4>📌 Yürütme</h4>
                    <p>Cumhurbaşkanı ve Bakanlar Kurulu (2018 sonrası sistem değişti). Cumhurbaşkanlığı Kararnamesi çıkarabilir.</p>
                    <h4>📌 Yargı</h4>
                    <p>Bağımsız mahkemelerce yürütülür. <b>Anayasa Mahkemesi, Yargıtay, Danıştay, Sayıştay</b> yüksek mahkemelerdir.</p>
                    <p class="tip">💡 <b>İpucu:</b> AYM 15 üyeden oluşur, üyeler 12 yıl için seçilir.</p>
                `
            }
        ]
    },
    {
        id: 2, order: 2, e: '🏛️', n: 'İdare Hukuku', locked: false,
        units: [
            {
                id: 'idare-1',
                title: 'İdare Hukukuna Giriş',
                content: `
                    <h4>📌 İdare Hukuku Nedir?</h4>
                    <p>İdarenin kuruluşunu, işleyişini, faaliyetlerini ve vatandaşla ilişkilerini düzenleyen kamu hukuku dalıdır.</p>
                    <h4>📌 Temel İlkeler</h4>
                    <ul>
                        <li><b>Kanunilik ilkesi:</b> İdare kanuna dayanmalıdır.</li>
                        <li><b>Kamu yararı:</b> Tüm idari işlemlerin amacı kamu yararıdır.</li>
                        <li><b>İdarenin bütünlüğü:</b> Merkezi idare + yerinden yönetim.</li>
                    </ul>
                `
            },
            {
                id: 'idare-2',
                title: 'İdari İşlemler',
                content: `
                    <h4>📌 İdari İşlem Türleri</h4>
                    <ul>
                        <li><b>Düzenleyici işlemler:</b> Yönetmelik, genelge, tebliğ</li>
                        <li><b>Bireysel işlemler:</b> Atama, izin, ruhsat</li>
                    </ul>
                    <h4>📌 İdari İşlemin Unsurları</h4>
                    <p><b>Yetki – Şekil – Sebep – Konu – Amaç</b>. Bu unsurlardan biri sakat ise işlem iptal edilebilir.</p>
                    <p class="tip">💡 <b>İpucu:</b> Yetki unsuru kamu düzenindendir, sonradan düzeltilemez.</p>
                `
            },
            {
                id: 'idare-3',
                title: 'İdari Yargı ve İptal Davası',
                content: `
                    <h4>📌 İptal Davası Şartları</h4>
                    <ul>
                        <li>İdari işlem olmalı</li>
                        <li>Menfaat ihlali bulunmalı</li>
                        <li>Süresi içinde açılmalı (genel 60 gün)</li>
                    </ul>
                    <p class="tip">💡 <b>İpucu:</b> Danıştay ilk derece mahkemesi olarak bazı davalara bakar.</p>
                `
            }
        ]
    },
    {
        id: 3, order: 3, e: '🕊️', n: 'İnsan Hakları', locked: false,
        units: [
            {
                id: 'ih-1',
                title: 'İnsan Hakları Kavramı',
                content: `
                    <h4>📌 Tanım</h4>
                    <p>İnsanın sırf insan olması nedeniyle doğuştan sahip olduğu, devredilemez ve vazgeçilemez haklardır.</p>
                    <h4>📌 Özellikleri</h4>
                    <ul>
                        <li>Evrenseldir</li>
                        <li>Doğuştandır</li>
                        <li>Devredilemez</li>
                        <li>Bölünemez</li>
                    </ul>
                `
            },
            {
                id: 'ih-2',
                title: 'AİHS ve AİHM',
                content: `
                    <h4>📌 Avrupa İnsan Hakları Sözleşmesi</h4>
                    <p>1950'de imzalanmış, 1953'te yürürlüğe girmiştir. Türkiye 1954'te onaylamıştır.</p>
                    <h4>📌 AİHM'e Başvuru</h4>
                    <ul>
                        <li>İç hukuk yolları tüketilmelidir</li>
                        <li>4 ay içinde başvurulmalıdır</li>
                        <li>Mağdur sıfatı olmalıdır</li>
                    </ul>
                    <p class="tip">💡 <b>İpucu:</b> AİHM kararları bağlayıcıdır; Türkiye kararlara uymak zorundadır.</p>
                `
            }
        ]
    },
    {
        id: 4, order: 4, e: '⚔️', n: 'Ceza Hukuku', locked: false,
        units: [
            {
                id: 'ceza-1',
                title: 'Suçun Unsurları',
                content: `
                    <h4>📌 Suçun Maddi Unsurları</h4>
                    <ul>
                        <li><b>Fail:</b> Suçu işleyen kişi</li>
                        <li><b>Mağdur:</b> Suçtan zarar gören</li>
                        <li><b>Fiil (hareket):</b> İcra veya ihmal</li>
                        <li><b>Netice:</b> Suçun doğurduğu sonuç</li>
                        <li><b>Nedensellik bağı:</b> Fiil ile netice arasındaki illiyet</li>
                    </ul>
                    <h4>📌 Manevi Unsur</h4>
                    <p><b>Kast</b> (bilerek ve isteyerek) veya <b>taksir</b> (dikkat ve özen yükümlülüğüne aykırılık).</p>
                `
            },
            {
                id: 'ceza-2',
                title: 'Suçun Özel Görünüş Biçimleri',
                content: `
                    <h4>📌 Teşebbüs</h4>
                    <p>Fail, suçu işlemeye <b>elverişli hareketlerle başlayıp</b> elinde olmayan sebeplerle tamamlayamazsa teşebbüs vardır.</p>
                    <h4>📌 İştirak</h4>
                    <ul>
                        <li><b>Faillik:</b> Birlikte / dolaylı / müşterek</li>
                        <li><b>Şeriklik:</b> Azmettiren, yardım eden</li>
                    </ul>
                    <h4>📌 İçtima</h4>
                    <p>Bileşik suç, zincirleme suç, fikri içtima.</p>
                `
            },
            {
                id: 'ceza-3',
                title: 'Yaptırımlar',
                content: `
                    <h4>📌 Ceza Türleri</h4>
                    <ul>
                        <li><b>Ağırlaştırılmış müebbet</b></li>
                        <li><b>Müebbet hapis</b></li>
                        <li><b>Süreli hapis</b></li>
                        <li><b>Adli para cezası</b></li>
                    </ul>
                    <h4>📌 Güvenlik Tedbirleri</h4>
                    <p>Belli hakları kullanmaktan yoksun bırakılma, müsadere, çocuklara özgü tedbirler.</p>
                `
            }
        ]
    },
    {
        id: 5, order: 5, e: '🚔', n: 'Ceza Muhakemesi ve Kolluk Uygulamaları', locked: false,
        units: [
            {
                id: 'cmk-1',
                title: 'Ceza Muhakemesine Giriş',
                content: `
                    <h4>📌 Amaç</h4>
                    <p>Maddi gerçeğe ulaşmak; hem toplumun hem de şüphelinin haklarını korumak.</p>
                    <h4>📌 Temel İlkeler</h4>
                    <ul>
                        <li>Adil yargılanma hakkı</li>
                        <li>Masumiyet karinesi</li>
                        <li>Şüpheden sanık yararlanır</li>
                        <li>Delil serbestisi (hukuka aykırı delil yasak)</li>
                    </ul>
                `
            },
            {
                id: 'cmk-2',
                title: 'Koruma Tedbirleri',
                content: `
                    <h4>📌 Başlıca Tedbirler</h4>
                    <ul>
                        <li><b>Yakalama:</b> Fiili durum, herkes yapabilir</li>
                        <li><b>Gözaltı:</b> Kolluk yapar, 24 saat (uzatılabilir)</li>
                        <li><b>Tutuklama:</b> Hâkim kararı, kuvvetli suç şüphesi</li>
                        <li><b>Arama:</b> Kural hâkim kararı, istisnalar var</li>
                        <li><b>El koyma:</b> Suç delili olan eşyaya</li>
                    </ul>
                    <p class="tip">💡 <b>İpucu:</b> Yakalama ve gözaltı süreleri KPSS/misyon sınavlarında sık çıkar.</p>
                `
            },
            {
                id: 'cmk-3',
                title: 'İfade ve Sorgu',
                content: `
                    <h4>📌 Şüphelinin Hakları</h4>
                    <ul>
                        <li>Susma hakkı (müdahil olamaz)</li>
                        <li>Müdafi talep hakkı</li>
                        <li>Tercüman hakkı</li>
                        <li>Yakınlarına haber verme hakkı</li>
                    </ul>
                    <p>İfade alınırken <b>yasal uyarılar</b> (aydınlatma) mutlaka yapılmalıdır.</p>
                `
            }
        ]
    },
    {
        id: 6, order: 6, e: '👮', n: 'Polisi İlgilendiren Kanunlar', locked: false,
        units: [
            {
                id: 'pik-1',
                title: 'Polis Vazife ve Salahiyet Kanunu (PVSK)',
                content: `
                    <h4>📌 Polisin Görevleri</h4>
                    <ul>
                        <li>Kamu düzenini ve güvenliğini sağlamak</li>
                        <li>Suç işlenmesini önlemek</li>
                        <li>Suçluları yakalamak</li>
                        <li>Trafik düzenini sağlamak</li>
                    </ul>
                    <h4>📌 Polisin Yetkileri</h4>
                    <p>Kimlik sorma, üst arama, yakalama, zor kullanma (ölçülü), silah kullanma (son çare).</p>
                    <p class="tip">💡 <b>İpucu:</b> 2559 sayılı PVSK, polisin temel kanunudur.</p>
                `
            },
            {
                id: 'pik-2',
                title: 'Yakalama, Gözaltı ve Zor Kullanma Yönetmeliği',
                content: `
                    <h4>📌 Zor Kullanma</h4>
                    <p>Polis, görevini yaparken <b>direnme</b> ile karşılaşırsa kademeli olarak zor kullanabilir:</p>
                    <ol>
                        <li>Maddi güç</li>
                        <li>Kelepçe, cop, jop</li>
                        <li>Biyolojik/kimyasal silah</li>
                        <li>Ateşli silah (son çare)</li>
                    </ol>
                `
            },
            {
                id: 'pik-3',
                title: 'Diğer İlgili Kanunlar',
                content: `
                    <h4>📌 Başlıca Kanunlar</h4>
                    <ul>
                        <li><b>4483:</b> Kaçakçılıkla Mücadele</li>
                        <li><b>5607:</b> Kaçakçılık ve Organize Suçlarla Mücadele</li>
                        <li><b>6136:</b> Ateşli Silahlar ve Bıçaklar</li>
                        <li><b>2911:</b> Toplantı ve Gösteri Yürüyüşleri</li>
                        <li><b>2935:</b> Olağanüstü Hal</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 7, order: 7, e: '📋', n: 'Disiplin Hukuku', locked: false,
        units: [
            {
                id: 'dis-1',
                title: 'Disiplin Hukukuna Giriş',
                content: `
                    <h4>📌 Amaç</h4>
                    <p>Kamu görevlilerinin görevlerini düzenli, uyumlu ve verimli yapmalarını sağlamak için konulan kurallara uymayanlara uygulanan yaptırımlardır.</p>
                    <h4>📌 Kaynaklar</h4>
                    <ul>
                        <li>657 sayılı DMK</li>
                        <li>Emniyet Teşkilatı Disiplin Tüzüğü</li>
                        <li>Disiplin Yönetmelikleri</li>
                    </ul>
                `
            },
            {
                id: 'dis-2',
                title: 'Disiplin Cezaları',
                content: `
                    <h4>📌 657 DMK'ya Göre Cezalar</h4>
                    <ol>
                        <li><b>Uyarma:</b> Görevde daha dikkatli olması gerektiğinin yazıyla bildirilmesi</li>
                        <li><b>Kınama:</b> Kusurlu görüldüğünün yazıyla bildirilmesi</li>
                        <li><b>Aylıktan kesme:</b> Brüt aylıktan 1/30 – 1/8 arası kesinti</li>
                        <li><b>Kademe ilerlemesinin durdurulması:</b> 1-3 yıl</li>
                        <li><b>Devlet memurluğundan çıkarma:</b> Bir daha atanmamak üzere</li>
                    </ol>
                    <p class="tip">💡 <b>İpucu:</b> Disiplin soruşturmasında savunma hakkı <b>esastır</b>.</p>
                `
            },
            {
                id: 'dis-3',
                title: 'Soruşturma ve Karar Süreci',
                content: `
                    <h4>📌 Aşamalar</h4>
                    <ol>
                        <li>Soruşturma açılması</li>
                        <li>Savunma alınması</li>
                        <li>Disiplin kuruluna sevk</li>
                        <li>Karar verilmesi</li>
                        <li>İtiraz yolları</li>
                    </ol>
                    <p class="tip">💡 <b>İpucu:</b> Savunma alınmadan disiplin cezası verilemez.</p>
                `
            }
        ]
    },
    {
        id: 8, order: 8, e: '🇹🇷', n: 'Atatürk İlke ve İnkılapları', locked: false,
        units: [
            {
                id: 'ata-1',
                title: 'Atatürk İlkeleri',
                content: `
                    <h4>📌 6 Temel İlke</h4>
                    <ol>
                        <li><b>Cumhuriyetçilik:</b> Egemenlik millete aittir</li>
                        <li><b>Milliyetçilik:</b> Türk milletinin birlik ve beraberliği</li>
                        <li><b>Halkçılık:</b> Toplumda ayrıcalık yok</li>
                        <li><b>Devletçilik:</b> Ekonomide devlet destekli kalkınma</li>
                        <li><b>Laiklik:</b> Din ve devlet işleri ayrılığı</li>
                        <li><b>İnkılapçılık:</b> Sürekli yenilik ve ilerleme</li>
                    </ol>
                `
            },
            {
                id: 'ata-2',
                title: 'Siyasi ve Hukuki İnkılaplar',
                content: `
                    <h4>📌 Siyasi İnkılaplar</h4>
                    <ul>
                        <li>Saltanatın kaldırılması (1922)</li>
                        <li>Cumhuriyetin ilanı (1923)</li>
                        <li>Halifeliğin kaldırılması (1924)</li>
                    </ul>
                    <h4>📌 Hukuki İnkılaplar</h4>
                    <ul>
                        <li>Şer'iye mahkemelerinin kapatılması</li>
                        <li>Medeni Kanun (1926, İsviçre'den)</li>
                        <li>Borçlar Kanunu, Ceza Kanunu</li>
                    </ul>
                `
            },
            {
                id: 'ata-3',
                title: 'Eğitim ve Kültür İnkılapları',
                content: `
                    <h4>📌 Başlıcaları</h4>
                    <ul>
                        <li>Tevhid-i Tedrisat Kanunu (1924)</li>
                        <li>Harf İnkılabı (1928)</li>
                        <li>Üniversite Reformu (1933)</li>
                        <li>Soyadı Kanunu (1934)</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 9, order: 9, e: '🌍', n: 'Genel Kültür', locked: false,
        units: [
            {
                id: 'gk-1',
                title: 'Türkiye Coğrafyası',
                content: `
                    <h4>📌 Genel Bilgiler</h4>
                    <ul>
                        <li><b>Yüzölçümü:</b> 783.562 km²</li>
                        <li><b>Komşular:</b> 8 ülke (Yunanistan, Bulgaristan, Gürcistan, Ermenistan, Nahçıvan, İran, Irak, Suriye)</li>
                        <li><b>Denizler:</b> Karadeniz, Marmara, Ege, Akdeniz</li>
                        <li><b>En yüksek nokta:</b> Ağrı Dağı (5.137 m)</li>
                        <li><b>En uzun nehir:</b> Kızılırmak (1.355 km)</li>
                    </ul>
                `
            },
            {
                id: 'gk-2',
                title: 'Türkiye Tarihi (Özet)',
                content: `
                    <h4>📌 Önemli Olaylar</h4>
                    <ul>
                        <li>1071 – Malazgirt Savaşı</li>
                        <li>1299 – Osmanlı Devleti'nin kuruluşu</li>
                        <li>1453 – İstanbul'un fethi</li>
                        <li>1920 – TBMM'nin açılışı</li>
                        <li>1923 – Cumhuriyetin ilanı</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 10, order: 10, e: '🔫', n: 'Silah Bilgisi', locked: false,
        units: [
            {
                id: 'silah-1',
                title: 'Silah Türleri ve Temel Bilgiler',
                content: `
                    <h4>📌 Silahların Sınıflandırılması</h4>
                    <ul>
                        <li><b>Ateşli silahlar:</b> Tabanca, tüfek, makineli</li>
                        <li><b>Kesici silahlar:</b> Bıçak, kılıç</li>
                        <li><b>Delici silahlar:</b> Hançer, mızrak</li>
                        <li><b>Ezici silahlar:</b> Sopası, cop, muşta</li>
                    </ul>
                `
            },
            {
                id: 'silah-2',
                title: '6136 Sayılı Kanun',
                content: `
                    <h4>📌 Ateşli Silahlar ve Bıçaklar Kanunu</h4>
                    <p>Ateşli silahların taşınması, bulundurulması ve kullanılmasına ilişkin esasları düzenler.</p>
                    <ul>
                        <li><b>Taşıma ruhsatı</b> olmadan silah taşınamaz</li>
                        <li><b>Bulundurma ruhsatı</b> ile ev veya iş yerinde tutulabilir</li>
                        <li>Ruhsatsız silah taşımak <b>suçtur</b></li>
                    </ul>
                `
            },
            {
                id: 'silah-3',
                title: 'Silah Kullanma Yetkisi ve Kuralları',
                content: `
                    <h4>📌 Zor ve Silah Kullanma</h4>
                    <p>Polis, <b>son çare</b> olarak ve <b>ölçülü</b> biçimde silah kullanabilir. Amaç etkisiz hale getirmektir, öldürmek değildir.</p>
                    <h4>📌 Silahın Kullanılabileceği Haller</h4>
                    <ul>
                        <li>Meşru savunma</li>
                        <li>Yakalanması gereken kişinin kaçması</li>
                        <li>Silahlı direniş</li>
                    </ul>
                    <p class="tip">💡 <b>İpucu:</b> Silah kullanan polis, olaydan sonra derhal amirine bildirmelidir.</p>
                `
            }
        ]
    },
    {
        id: 11, order: 11, e: '🤝', n: 'Protokol Bilgisi', locked: false,
        units: [
            {
                id: 'prot-1',
                title: 'Protokol Kavramı',
                content: `
                    <h4>📌 Protokol Nedir?</h4>
                    <p>Devlet ve toplum yaşamında, resmî ilişkilerde uyulması gereken <b>görgü kuralları</b> ve <b>saygı düzenidir</b>.</p>
                    <h4>📌 Amaç</h4>
                    <ul>
                        <li>Düzeni sağlamak</li>
                        <li>Karışıklığı önlemek</li>
                        <li>Saygı ifade etmek</li>
                    </ul>
                `
            },
            {
                id: 'prot-2',
                title: 'Devlet Protokolü ve Sıralama',
                content: `
                    <h4>📌 Protokol Sırası (Özet)</h4>
                    <ol>
                        <li>Cumhurbaşkanı</li>
                        <li>TBMM Başkanı</li>
                        <li>Cumhurbaşkanı Yardımcıları</li>
                        <li>Bakanlar</li>
                        <li>Milletvekilleri</li>
                        <li>Yüksek yargı organ başkanları</li>
                        <li>Valiler</li>
                        <li>Askeri erkân</li>
                    </ol>
                `
            },
            {
                id: 'prot-3',
                title: 'Bayrak, İstiklal Marşı ve Törenler',
                content: `
                    <h4>📌 Bayrak</h4>
                    <p>Türk Bayrağı Kanunu'na göre kullanılır. Bayrağa saygı <b>zorunludur</b>.</p>
                    <h4>📌 İstiklal Marşı</h4>
                    <p>Mehmet Akif Ersoy tarafından yazılmış, 12 Mart 1921'de kabul edilmiştir. Marş sırasında hazırolda durulur.</p>
                    <h4>📌 Törenlerde Dikkat Edilecekler</h4>
                    <ul>
                        <li>Kıyafet düzeni</li>
                        <li>Zamanlama</li>
                        <li>Sessizlik ve saygı</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 12, order: 12, e: '🇬🇧', n: 'İngilizce', locked: false,
        units: [
            {
                id: 'ing-1',
                title: 'Temel Gramer',
                content: `
                    <h4>📌 Tenses (Zamanlar)</h4>
                    <ul>
                        <li><b>Present Simple:</b> I work / He works</li>
                        <li><b>Present Continuous:</b> I am working</li>
                        <li><b>Past Simple:</b> I worked</li>
                        <li><b>Past Continuous:</b> I was working</li>
                        <li><b>Future:</b> I will work</li>
                    </ul>
                    <h4>📌 Articles (Tanımlıklar)</h4>
                    <p><b>a / an</b> (belirsiz), <b>the</b> (belirli).</p>
                `
            },
            {
                id: 'ing-2',
                title: 'Mesleki İngilizce',
                content: `
                    <h4>📌 Polislikle İlgili Terimler</h4>
                    <ul>
                        <li><b>Police officer:</b> Polis memuru</li>
                        <li><b>Suspect:</b> Şüpheli</li>
                        <li><b>Witness:</b> Tanık</li>
                        <li><b>Investigation:</b> Soruşturma</li>
                        <li><b>Arrest:</b> Tutuklama</li>
                        <li><b>Evidence:</b> Delil</li>
                        <li><b>Weapon:</b> Silah</li>
                    </ul>
                `
            },
            {
                id: 'ing-3',
                title: 'Okuma ve Anlama',
                content: `
                    <h4>📌 Paragraf Soruları Stratejisi</h4>
                    <ul>
                        <li>Önce soruyu oku, sonra paragrafı</li>
                        <li>Anahtar kelimeleri belirle</li>
                        <li>Bağlaçlara dikkat et (however, because, although)</li>
                        <li>Şıkları eleyerek git</li>
                    </ul>
                `
            }
        ]
    }
];

// ========== KADEME / LEVEL AYARLARI ==========
const LEVELS = {
    0: { name: '🌱 Başlangıç', questionCount: 8, minCorrect: 6, icon: '🌱' },
    1: { name: '📘 Orta', questionCount: 10, minCorrect: 8, icon: '📘' },
    2: { name: '🎯 İleri', questionCount: 12, minCorrect: 10, icon: '🎯' }
};

// ========== TEMEL YARDIMCI FONKSİYONLAR ==========
function getTopicById(id) {
    return TOPICS.find(t => t.id === id);
}

function getCourseById(id) {
    return getTopicById(id);
}

function getUnit(courseId, unitId) {
    const course = getTopicById(courseId);
    if (!course) return null;
    return course.units.find(u => u.id === unitId);
}

function getTotalUnits() {
    return TOPICS.reduce((sum, t) => sum + (t.units ? t.units.length : 0), 0);
}

function getLevelConfig(levelId) {
    return LEVELS[levelId];
}

function getNextLevel(levelId) {
    const levels = [0, 1, 2];
    const idx = levels.indexOf(levelId);
    return idx < levels.length - 1 ? levels[idx + 1] : null;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(arr) {
    const s = [...arr];
    for (let i = s.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
}

// ========== ÜNİTE ÖZETİ ALMA ==========
function getUnitContent(courseId, unitId) {
    const unit = getUnit(courseId, unitId);
    return unit ? unit.content : null;
}

// ========== EŞLEŞTİRME VERİLERİ ==========
const MATCHING_SETS = [
    {
        id: 'm-1',
        title: 'Kanun – Konu Eşleştirmesi',
        description: 'Kanun numaralarını konularıyla eşleştir.',
        pairs: [
            { left: '2709', right: 'Türkiye Cumhuriyeti Anayasası' },
            { left: '5237', right: 'Türk Ceza Kanunu' },
            { left: '5271', right: 'Ceza Muhakemesi Kanunu' },
            { left: '2559', right: 'Polis Vazife ve Salahiyet Kanunu' },
            { left: '657',  right: 'Devlet Memurları Kanunu' },
            { left: '6136', right: 'Ateşli Silahlar ve Bıçaklar Kanunu' }
        ]
    },
    {
        id: 'm-2',
        title: 'İlke – Açıklama Eşleştirmesi',
        description: 'Atatürk ilkelerini açıklamalarıyla eşleştir.',
        pairs: [
            { left: 'Cumhuriyetçilik', right: 'Egemenliğin millete ait olması' },
            { left: 'Milliyetçilik',   right: 'Türk milletinin birlik ve beraberliği' },
            { left: 'Halkçılık',       right: 'Toplumda ayrıcalık olmaması' },
            { left: 'Devletçilik',     right: 'Ekonomide devlet destekli kalkınma' },
            { left: 'Laiklik',         right: 'Din ve devlet işlerinin ayrılığı' },
            { left: 'İnkılapçılık',    right: 'Sürekli yenilik ve ilerleme' }
        ]
    },
    {
        id: 'm-3',
        title: 'Ceza – Süre Eşleştirmesi',
        description: 'Gözaltı ve tutuklama süreleriyle ilgili bilgileri eşleştir.',
        pairs: [
            { left: 'Gözaltı süresi (genel)', right: '24 saat' },
            { left: 'Gözaltı uzatma (toplu suç)', right: '4 güne kadar' },
            { left: 'Tutuklama kararı', right: 'Hâkim kararı' },
            { left: 'Yakalama', right: 'Herkes yapabilir' },
            { left: 'AİHM başvuru süresi', right: '4 ay' }
        ]
    }
];

// ========== KONSOL BİLGİ ==========
console.log('✅ Misyon Koruma config dosyası yüklendi.');
console.log(`📚 Toplam ders sayısı: ${TOPICS.length}`);
console.log(`📄 Toplam ünite sayısı: ${getTotalUnits()}`);
console.log(`🎯 Eşleştirme seti sayısı: ${MATCHING_SETS.length}`);
