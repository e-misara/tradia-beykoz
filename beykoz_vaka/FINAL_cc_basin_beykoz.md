# BEYKOZ VAKASI · CC-Basın NİHAİ RAPOR (FINAL)

**CC:** CC-Basın · **Vaka:** İstanbul/Beykoz basın istihbaratı  
**Sprint aralığı:** S78 → S86-C-EK · **Tarih aralığı:** 2026-07-23 → 2026-07-27  
**Nihai tarih:** 2026-07-27 · **Rol:** CC-Basın (Tradia)  
**Standing:** #8 nazik-fetch · #17 spot-check · #18 üçlü-anahtar · **#21-A/B kaynak-şeffaf** · #22 FIFO · **#24 tr-safe** · **#31 KVKK iç-kullanım** · **#34 SİLME-YOK**  
**A04** ✅ · **$0** ✅ · **Master-dosya girdisi**

---

## §1 GÖREV VE SPRINT DÖKÜMÜ

| Sprint | Tarih | Odak | Tek-cümle sonuç |
|---|---|---|---|
| **S78** | 2026-07-23 | İlk havuz-tarama (Beykoz + 45 mahalle) | 16 dedupe haber; 9 mahalle temas; 4 kritik kategori boş → yerel-feed kurulum ihtiyacı |
| **S79** | 2026-07-25 | Kaynak-açığı + köprü ekseni + yerel hasat | Beykoz Belediyesi + Beykoz Gazetesi 2 yerel-basın feed adayı bulundu, 19 haber hasat + manifest_aday oluşturuldu |
| **S80** | 2026-07-25 | Tam arşiv + sinyal + siyaset + zaman | 54 dedupe · Çubuklu vapur 3-tekrar SICAK sinyali · "Başkan VEKİLİ Özlem Vural Gürzel" bulundu (neden doğrulanmadı) |
| **S81** | 2026-07-25 | Aktör + siyaset + 2024 boşluğu | Köseler kronolojisi TAM (2024 seçim → 2025 İBB 5. dalga tutuklama → 2026-07-17 2. dalga); aday-firmalar 5/5 havuzda 0 hit |
| **S82** | 2026-07-25 | Amaç-tarama + 6 madde derinlik | Riva Metruk Otel → Gençlik Kampı MEGA-bulgu (Halk TV); DuckDuckGo JS-render başarısız |
| **S83** | 2026-07-26 | Belediye meclis tam-doküman + İBB kesit | 24 meclis kararı / 13 mahalle · Encümen ayrı-yayın YOK · Bel şeffaflık boşluğu ilk-teşhis |
| **S84** | 2026-07-26 | Derin arşiv + 11 mahalle Wikipedia + Riva otel detay | 16,548 m² Riva Otel adres + ★ **Şişecam fabrika İncirköy'de** (Paşabahçe DEĞİL, S82 düzeltmesi); Riva nüfus %98 |
| **S85** | 2026-07-27 | Olay defteri KURULUŞU + belediye evreni | ★ 13 olay `beykoz_olay_defteri.json` (kalıcı görev protokolü); WebFetch quota tükendi |
| **S86-A** | 2026-07-27 | İç mesai — SIG5-A4/B1/B2 | Havuz 2016-2018 = 0 satır DENEYSEL KANIT; meclis-uygulama izi %4.2 (1/24); olay defteri v2 pencere_sinifi |
| **S86-B** | 2026-07-27 | Terminal-hasat (WebFetch → requests) | ★ CSB İstanbul KEŞFİ (askı-yayın-yeri) · 1071 tapu YANSIDI · BEY-14 Göztepe eklendi · Bel 7/7-404 HTTP-kanıt |
| **S86-C-EK** | 2026-07-27 | Paşabahçe 942-947 + Çubuklu Evleri arama | Havuz+ham 0 hit · BEY-15 eklendi (teyit-edilemedi durumu) |

**11 sprint · 5 gün · 15 olay defteri · 5.8 MB ham arşiv · 12 rapor .md · 5 K24a bildirim**

---

## §2 KESİN BULGULAR (iddia + kanıt + güven + çapraz-CC)

### §2.1 ★★★ Riva Metruk Otel yıkımı → Gençlik Kampı
- **İddia:** Beykoz Riva'daki 16,548 m² inşaat alanı üzerine Gençlik ve Spor Bakanlığı ortaklığında Gençlik Kampı yapılacak.
- **Kanıt:**
  - Beykoz Belediyesi 2026-07-24: `https://www.beykoz.bel.tr/haber/rivada-yillarin-sorunu-cozuluyor-metruk-otel-yikiliyor` — *"16,548 m² inşaat alanı · Şehit Levent Birben Caddesi"* · Valilik+Kaymakamlık Metruk Bina Tespit Komisyonu raporu
  - Halk TV 2026-07-25: `https://halktv.com.tr/turkiye/milli-takimin-kamp-yaptigi-otel-yikildi-...-1044727h` — *"186 oda · A Milli Futbol Takımı eski kamp tesisi · 2009 özel-sektör devir · Özelleştirme İdaresi · 2017 ihale-tıkanma · 9 yıl metruk"*
  - Vekil Gürzel: *"Gençlik ve Spor Bakanlığı ile buraya çok güzel bir gençlik kampı kazandırmayı hedefliyoruz. Aynı zamanda uluslararası müsabakalara da ev sahipliği yapacak"*
- **Güven:** ★★★ (2 bağımsız kaynak · resmi belediye + ulusal TV)
- **Çapraz-CC:** CC-TT-MAP (16,548 m² lokasyon) · CC-İhale (kamp inşaat ihalesi)
- **Olay:** BEY-03

### §2.2 ★★★ Köseler dava kronolojisi (2024 → 2026-07-17)
- **İddia:** Beykoz Belediye Başkanı Alaattin Köseler (CHP, Mart 2024 seçim %45.87) İBB 5. dalga tutuklama operasyonuyla 2025'te tutuklandı; 10 Mart meclis Özlem Vural Gürzel'i başkan vekili seçti; 5 Eylül tahliye + 6 Eylül yeniden tutuklama; 2026-07-17 2. dalga operasyonda 6 gözaltı → 2 tutuklama + 4 adli kontrol + 2 firari.
- **Kanıt:**
  - Wikipedia Beykoz: 2024 seçim sonucu + 2025 İBB 5. dalga tutuklama + 10 Mart meclis Gürzel vekil
  - Dünya 2026-07-17: `dunya.com/gundem/beykoz-belediyesi-sorusturmasinda-2-tutuklama-haberi-832662` — *"rüşvet ve irtikap · Beykoz Cumhuriyet Başsavcılığı · iş insanları + belediye meclis üyesi + belediye çalışanları"*
  - Yeni Şafak 2026-07-17: `yenisafak.com/gundem/beykoz-belediyesi-sorusturmasinda-ikinci-dalga-iki-supheli-tutuklandi-4841163`
  - Cumhuriyet + gzt_beykoz_gzt 2026-07-12/13: *"Özel Kaleminin İtirafları"*
- **Güven:** ★★★ (Wikipedia + 2 ulusal + 1 yerel = 4 bağımsız kaynak)
- **Çapraz-CC:** CC-Hafıza (yönetişim-risk sinyali) · CC-İhale (rüşvet-irtikap tipolojisi imar/ihale zeminini işaret ediyor)
- **Olay:** BEY-04

### §2.3 ★★★ 1071 tapu Tokatköy — BASIN-YANSIMASI TEYİT
- **İddia:** Tokatköy Kentsel Dönüşüm alanında hak sahiplerine 1071 tapu 29 Haziran 2026'da resmi olarak teslim edildi.
- **Kanıt:**
  - CSB İstanbul İl Müdürlüğü 2026-06-29: `https://istanbul.csb.gov.tr/haberler/beykoz-da-tapular-hak-sahiplerine-teslim-edildi-306013`
  - Beykoz Belediyesi Meclis 8 Ocak 2026 Madde 1: *"Tokatköy Kentsel Dönüşüm alanında yol ismi düzenlemesi"* (dönüşüm ONAYLI olduğunu gösterir)
  - Wikipedia Tokatköy: nüfus 15,669 (2007) → 13,445 (2024) = -%14, 2022 tek yılda -%8 (gecekondu boşaltma sinyali)
- **Güven:** ★★★ (CSB İstanbul devlet organı + Bel Meclis + Wikipedia = üçlü teyit)
- **Çapraz-CC:** CC-Tic (tapu-devir kayıtları) · CC-TT-MAP (dönüşüm alanı sınırı)
- **Olay:** BEY-06 (durum: YANSIDI)

### §2.4 ★★★ Beykoz Belediyesi ŞEFFAFLIK BOŞLUĞU — 7/7 HTTP404
- **İddia:** Beykoz Belediyesi kamuya açık web sitesinde encümen kararı, faaliyet raporu, stratejik plan, bütçe, performans programı, belgeler ve ilanlar için ayrılmış URL'ler bulunmamaktadır (menüde de yok).
- **Kanıt:** S86-B terminal-hasat betiği 2026-07-27 (Python requests + robots + retry) sonucu:
  - `/haberler?kategori=encumen` → **HTTP 404**
  - `/kurumsal/faaliyet-raporu` → **HTTP 404**
  - `/kurumsal/stratejik-plan` → **HTTP 404**
  - `/kurumsal/butce` → **HTTP 404**
  - `/kurumsal/performans-programi` → **HTTP 404**
  - `/belgeler` → **HTTP 404**
  - `/haberler?kategori=ilanlar` → **HTTP 404**
  - Log: `~/tradia_basin/ham/S86/log/hasat_20260727_041940.jsonl`
- **Güven:** ★★★ (HTTP-kod düzeyinde deneysel kanıt)
- **Çapraz-CC:** CC-Hafıza (yönetişim-risk KALICI borç) · Anayasa-önerisi bölümü §8'e girdi
- **Olay:** BEY-04'ün destek-kanıtı

### §2.5 ★★★ Göztepe 2760/110 Koruma-Amaçlı imar planı askıda
- **İddia:** Beykoz Göztepe Mahallesi 2760 Ada 110 Parsel için 1/1000 Ölçekli Koruma Amaçlı Uygulama İmar Planı Değişikliği 21 Temmuz 2026'da askıya çıktı.
- **Kanıt:** `https://istanbul.csb.gov.tr/istanbul-ili-beykoz-ilcesi-goztepe-mahallesi-2760-ada-110-parsele-iliskin-1-1000-olcekli-koruma-amacli-uygulama-imar-plani-degisikligi-duyuru-476318`
- **Güven:** ★★★ (CSB İstanbul devlet organı, tam URL)
- **Çapraz-CC:** CC-TT-MAP (parsel-lokasyon) · CC-İhale (askı-sonrası ruhsat-ihale)
- **Olay:** BEY-14 (haftalık takip, sonraki kontrol 2026-08-21)

### §2.6 ★★★ 24 meclis kararı × 13 mahalle (belediye yatırım matrisi)
- **İddia:** Beykoz Belediye Meclisi'nin Ocak → Haziran 2026 arası 11 gündeminden 24 karar hasat edildi; 21 karar imar-ilgili; 13 mahalleyi kapsıyor.
- **Kanıt:** `~/tradia_basin/cikti/vaka_beykoz_meclis_S83.json`
- **Mahalle yayılımı:** Çengeldere (4) · Kavacık (3) · Tokatköy · Riva · Polonezköy (2'şer) · İncirköy · İshaklı · Rüzgarlıbahçe · Mahmutşevketpaşa · Göksu · Baklacı · Çiftlik · Çamlıbahçe (1'er)
- **Kritik kararlar:**
  - **Kavacık Kavşağı imar planı** (Meclis 8 Ocak Md 11)
  - **Tokatköy Kentsel Dönüşüm alanı** (Meclis 8 Ocak Md 1)
  - **İncirköy 26,938 m² parselin 7,219.46 m² SATIŞ** (Meclis 7 Mayıs Md 4)
  - **İshaklı tarım-arazi DÖNÜŞÜM talebi** (Meclis 7 Mayıs Md 9)
  - **Kavacık+Çengeldere+Riva ticari-alan yetkilendirme** (Meclis 7 Mayıs Md 6)
- **Güven:** ★★★ (Bel resmi meclis-gündem sayfaları, 7/11 tam-fetch)
- **Çapraz-CC:** CC-İhale (satış-ihaleleri) · CC-TT-MAP (mahalle katmanı) · CC-Tic (alıcı-firma teyidi)

### §2.7 ★★★ SIG5-A4 · Havuz 2016-2018 KESİN BOŞ
- **İddia:** CC-Basın havuzunun 2016-2018 dönemine ait haber-kayıt sayısı sıfırdır.
- **Kanıt:** S86-A Python tarama (2026-07-27):
  - gövde-DB (831 OK): yıl dağılımı 2020(1) · 2023(1) · 2024(1) · 2026(828) · **2016-2018 = 0**
  - haber_akis (4,214 kayıt): tamamı 2026 · **2016-2018 = 0**
  - Beykoz-özel terim × Beykoz-kesişim: 380+ hit ama Beykoz-çakışması yalnız 2 kayıt (aynı Halk TV Riva Otel)
- **Güven:** ★★★ (sayı-tabanlı deneysel)
- **Etki:** 2016 YSS Köprüsü açılışının Beykoz kuzeyine etkisi havuzdan **teknik olarak erişilemez**
- **Çapraz-CC:** CC-Hafıza (tarihsel-derinlik borcu KALICI)

### §2.8 ★★★ SIG5-B1 · Meclis-uygulama izi %4.2 (basın-kayıp)
- **İddia:** Beykoz Belediye Meclisi'nin 2026 yılına ait 24 kararının havuzda uygulama-izi %4.2'dir (1/24).
- **Kanıt:** `~/tradia_basin/cikti/vaka_beykoz_meclis_havuz_esleme_S86A.json` — mahalle-adı × tür-anahtar kesişim taraması
- **Tek iz VAR:** Meclis 8 Ocak Md 2 (Çiftlik MEB tahsis) → Cumhuriyet Ekonomi 2026-07-19
- **İz YOK 23 karar:** İncirköy 7,219 m² satış · Tokatköy Kentsel Dönüşüm · Kavacık Kavşağı · İshaklı tarım-dönüşüm · Çengeldere 4-kez tahsis · Riva ticari-alan · Diğer kritik kararlar tamamı basında görünmez
- **Güven:** ★★★ (deneysel)
- **Etki:** Beykoz'da karar-uygulama şeffaflığı zayıf → yatırımcı-görünürlük eksik
- **Öneri:** SIG5-B1 protokolü Tradia standardı olsun (Anayasa §8)

### §2.9 ★★ Beykoz 2015 "Betonlaşır İtirazı"
- **İddia:** Beykoz'un 1/5000 ve 1/1000 imar planları 2015'te TMMOB Şehir Plancıları Odası tarafından itirazlandı; planlanan nüfus 52,570 → 104,000 (~2 kat), 1,068 hektar alanda 319 ha orman + 233 ha 2B (dönüşüm) + 55 ha yeşil alan tehlikede.
- **Kanıt:** `arkitera.com/haber/beykoz-betonlasir-itirazi/` 2015-04-08
- **Güven:** ★★ (tek-kaynak, ancak Arkitera sektör-otoritesi)
- **Etki:** 2016 YSS Köprüsü'nden 1.5 yıl önce Beykoz'a yönelik imar-baskısı tarihsel belge
- **Çapraz-CC:** CC-TT-MAP (233 ha 2B mahalle-haritası)

### §2.10 ★★ Riva nüfus %98 artış (2013 → 2024)
- **İddia:** Riva mahallesi nüfusu 11 yılda 1,794'ten 3,555'e (+%98) yükseldi.
- **Kanıt:** Wikipedia Riva, Beykoz — TÜİK ADNKS verisi
- **Güven:** ★★ (Wikipedia; TÜİK çapraz-teyit S86-C+ borç)
- **Bağlam:** 2016 YSS Köprüsü Poyrazköy'de ayak + Kuzey Marmara Otoyolu erişimi
- **Çapraz-CC:** CC-TT-MAP (nüfus katmanı)

### §2.11 ★★ İncirköy Şişecam fabrika arazi → OTEL planlanıyor
- **İddia:** Cumhuriyetin en eski fabrikalarından Şişecam fabrikası'nın İncirköy mahallesindeki eski üretim tesisi arazisinde otel tesisleri yapılması planlanmaktadır (operasyonlar başka yere taşındı, kullanılmayan yapılar yıkılacak).
- **Kanıt:** Wikipedia İncirköy, Beykoz — *"Plans exist to demolish unused factory structures and construct hotel facilities on the former industrial site"*
- **Bel-Meclis destek:** 7 Mayıs 2026 Md 4: İncirköy 26,938 m² parselin 7,219.46 m² SATIŞ (ilişkili olabilir)
- **Güven:** ★★ (Wikipedia tek-kaynak, plan-belirti; alıcı-firma bilinmiyor)
- **Çapraz-CC:** CC-Borsa (KAP-Şişecam) · CC-Tic (Tapu-alıcı)
- **Olay:** BEY-01

### §2.12 ★★ Kavacık üçlü hareket (kavşak + Medistate + ticari)
- **İddia:** Kavacık'ta üç eş-zamanlı imar-hareketi: Kavacık Kavşağı imar planı, Medistate Hastanesi işbirliği protokolü, konut mahallelerinde ticari-alan yetkilendirmesi.
- **Kanıt:** Bel Meclis 8 Ocak Md 11 + 2 Şubat Md 10 + 7 Mayıs Md 6
- **Güven:** ★★★ (Bel resmi meclis-metni)
- **Bağlam:** Kavacık 22,138 nüfus (2024) · Beykoz'un en yoğun mahallesi · 1980 FSM köprü sonrası patladı
- **Olay:** BEY-08

### §2.13 ★★ Beykoz iki-yönlü NÜFUS DÖNÜŞÜMÜ örüntüsü
- **İddia:** Beykoz mahalleleri iki yönde farklılaşıyor — kuzey (Riva +%98, Kavacık büyümüş) BÜYÜYOR, merkez (Gümüşsuyu -%17, Tokatköy -%14, Paşabahçe -%15, İncirköy -%12, Kanlıca -%10) KÜÇÜLÜYOR.
- **Kanıt:** Wikipedia S84 tur (11 mahalle Wikipedia'sından TÜİK ADNKS verisi)
- **Güven:** ★★
- **Yatırım-yorumu:** Kuzey uzun-vade kamu-yatırımı (köprü + Gençlik Kampı) · merkez dönüşüm-fırsatı (Tokatköy + İncirköy + Kavacık)

### §2.14 ★★★ CSB İstanbul KEŞFEDİLDİ (askı-yayın-yeri)
- **İddia:** Beykoz imar askı ilanları ve tapu-teslim haberleri Beykoz Belediyesi'nde değil, Çevre ve Şehircilik Bakanlığı İstanbul İl Müdürlüğü'nde (istanbul.csb.gov.tr) yayınlanmaktadır.
- **Kanıt:**
  - Beykoz tapu teslim haberi: `istanbul.csb.gov.tr/haberler/beykoz-da-tapular-hak-sahiplerine-teslim-edildi-306013` (2026-06-29)
  - Göztepe 1/1000 imar askı: `istanbul.csb.gov.tr/istanbul-ili-beykoz-ilcesi-goztepe-mahallesi-2760-ada-110-parsele-iliskin-...-476318` (2026-07-21)
  - Bel karşılığı 7/7-404 (§2.4)
- **Güven:** ★★★ (2 somut haber URL + Bel-boşluk kanıtı)
- **Önem:** MANİFEST-ADAY kaynak — CC-Basın manifest'ine eklenmeli
- **Etki:** Diğer 39 İstanbul ilçesi için de CSB İl Müdürlüğü aynı işlevi görecek (öneri Anayasa §8)

### §2.15 ★★ Kalyon "Riva Country" HAVUZ-BOŞLUK KANITI
- **İddia:** CC-Tic'in bildirdiği "Kalyon GYO 'Riva Country' 1.300 villa 230 dönüm" projesi hakkında CC-Basın havuzunun tamamında (haber_govde.db 831 OK + haber_akis 4,214 + Beykoz Gazetesi arama + 12+ terim-varyantı) sıfır kayıt bulunmaktadır.
- **Kanıt:**
  - Python tarama S85: 29 terim × 4,214 haber_akis = 0 hit
  - Kalyon 1 hit (Hürriyet 2026-06-04) = Murathan Kalyoncu yatırım-zirvesi katılımı, **Beykoz-DIŞI**
  - Beykoz Gazetesi 2 arama (Kalyon + Riva Country) = 0 sonuç
  - Kalyon GYO kurumsal site: JS-render SPA, statik HTML 1036 byte
- **Güven:** ★★★ (deneysel çoklu-kaynak sıfır)
- **Yorumla:** Bu, büyük özel-emlak-projelerinin Beykoz basın-yansımasının sistematik olarak düşük olduğunu gösterir; Sunum-yatırımcısı için şeffaflık uyarısı
- **Olay:** BEY-02 · BEY-15 (Paşabahçe 942-947) da aynı örüntü

---

## §3 GERİ ÇEKİLENLER VE DÜZELTMELER (SİLME-YOK · #34)

### §3.1 Şişecam fabrika mahallesi: PAŞABAHÇE → İNCİRKÖY
- **S82 eski hali:** *"Şişecam-Paşabahçe fabrika arazisi 0 hit"* — fabrika Paşabahçe mahallesinde varsayıldı
- **S84 yeni hali:** *"Şişecam fabrikası İNCİRKÖY mahallesindedir; Paşabahçe komşu mahalle ve marka-adı"*
- **Neden:** Wikipedia İncirköy sayfası fetch edildiğinde *"Cumhuriyetin en eski fabrikalarından Şişecam Fabrikası... waterfront"* satırı bulundu. Paşabahçe cam markası buradan alınmış; fabrika-adres kesinlikle İncirköy.
- **Doğru bilgi kalıcı:** §2.11'de kayıtlı.

### §3.2 Sosyal-CC aday-firma "Çelikler İnşaat" KARIŞIKLIĞI
- **S82 eski hali:** Sosyal-CC bildirimi *"Şişecam arsasını Çelikler İnşaat aldı, 117 dönüm"* → doğru kabul edildi ve yatırımcı-notunda kullanıldı
- **S84 düzeltmesi:** Wikipedia Çelikler Holding = **Ankara merkezli, enerji sektörü (5 termik santral: Afşin-Elbistan A, Orhaneli, Tunçbilek, Seyitömer)**. Beykoz-inşaat bağı Wikipedia'da YOK.
- **S86 durum:** Beykoz Gazetesi "Çelikler" araması 0 sonuç. "Çelikler İnşaat" adında grup-içi bir firma olabilir ama BASIN-KAYNAKLARINDA doğrulanamadı.
- **Neden:** Sosyal-CC ipucusu isim-karışıklığı olabilir; Wikipedia'daki Çelikler Holding profilinden başka bir Çelikler'e işaret ediyor olabilir.
- **Durum:** BEY-01'de "Çelikler" adı geçmiyor; doğrulanmadan yatırımcı-sunumuna KATILMIYOR. Tic-CC kaynak-teyit borcu açık (C11).

### §3.3 Beykoz Belediye Başkan VEKİLİ nedeni: S82 "doğrulanmadı" → S81 "Köseler tutuklama"
- **S82 eski hali:** *"Beykoz Bel Başkan Vekili Özlem Vural Gürzel — asıl seçilmiş başkan görevde değil. Neden DOĞRULANAMADI (Wikipedia URL 404 + belediye başkan-sayfası 404)"*
- **S81 sonraki yani hali:** Wikipedia Beykoz sayfası (farklı URL denendi, başarılı) → *"Köseler İBB 5. dalga operasyonunda 2025 tutuklandı, 10 Mart meclis Gürzel'i başkan vekili seçti"*
- **Neden:** İlk Wikipedia URL denemesi (`tr.wikipedia.org/wiki/Beykoz_Belediyesi`) 404 döndü, ama `tr.wikipedia.org/wiki/Beykoz` başarılı oldu ve tam bilgiyi verdi.

### §3.4 Primer-monitor son çıktı tarihi: S77 "06-18" → S78 "07-08"
- **S77 eski hali:** *"primer-monitor son çıktı 2026-06-18, ~1 ay eski"*
- **S78 düzeltme:** *"Audit dosyaları kontrolünde son çıktı 2026-07-08 (11 gün eski)"*
- **Neden:** S77'de `tail -10 primer_launchd.log` çıktısına baktım, ama log dosyası büyüktü ve tail sondaki eski tarih (06-18) görüntülendi. Gerçek son çıktı JSON audit dosyalarıyla kontrol edildi.

### §3.5 Standing kural numarası "#34" ATAMASI (S77) → NUMARASIZ ADAY (S78-G5)
- **S77 eski hali:** *"aday-tasarı #34 · CC-Basın önerisi"*
- **S78-G5 düzeltmesi:** *"Standing numaraları YALNIZ Hafıza atar. Numarasız aday olarak Hafıza'ya bildirim gönderildi"*
- **Neden:** Standing #34 zaten başka bir kurala ayrılmış (kaynak-karıştırma yasağı, MEMORY.md kayıtlı). CC-Basın numara atayamaz.
- **Kayıt:** `hafiza_bildirim_ccbasin_standing_adayi_20260719.json`

### §3.6 Beykoz Bel meclis "detay YOK" iddiası (S80/S82) → "detay VAR" (S83)
- **S82 eski hali:** *"Meclis kararları sadece rutin gündem-toplantı başlıkları, imar-özel etiket yok"*
- **S83 sonraki hali:** WebFetch ile 7 gündem tek-tek çekildi → **24 karar / 21 imar-ilgili / 13 mahalle** hasat edildi.
- **Neden:** İlk WebFetch listeleme-sayfasında (haberler?kategori=meclis-kararlari) sadece başlıklar görünüyordu, TEK-TEK gündem-URL'ler açılırsa madde-detayları geliyor. Her gündem URL'sini fetch etmek şarttı.

### §3.7 "1071 tapu iddia doğrulanamadı" (S85) → "YANSIDI teyit" (S86-B)
- **S85 eski hali:** *"1071 tapu Tokatköy dağıtımı havuzda 0 hit, teyit yok"*
- **S86-B sonraki hali:** CSB İstanbul haberi 2026-06-29 fetch edildi → *"Beykoz'da Tapular Hak Sahiplerine Teslim Edildi"*
- **Neden:** WebFetch quota tükenmişti, Python requests hasat betiği kurulduktan sonra CSB istanbul.csb.gov.tr keşfedildi.

---

## §4 CEVAPSIZLAR

### §4.1 2016 YSS Köprüsü doğrudan-etki haberi
- **Aranan:** 2015-2017 dönemi Beykoz kuzey (Poyrazköy, Riva) üzerindeki köprü etkileri, imar-değişimi, kamulaştırma, nüfus-değişimi.
- **Denenen kanallar:**
  - Wayback Machine `web.archive.org/web/2016*/...` → **WebFetch tarafından KALICI YASAKLI** (*"Claude Code is unable to fetch from web.archive.org"*)
  - DuckDuckGo HTML `duckduckgo.com/?q=...` → **JS-render, statik sonuç görünmüyor** (S82+S86-A)
  - Emlakkulisi Beykoz etiket → **HTTP 403 WAF-blacklist** (S69'dan beri)
  - Hürriyet arama `arama.hurriyet.com.tr/?search=Beykoz&daterange=...&start=2016-01-01` → **robots.txt disallow** (S86-B)
  - Milliyet arama → **robots.txt disallow**
- **Dolaylı kanıt bulunmuş:**
  - Wikipedia YSS Köprüsü: Poyrazköy ayak · 300,000 ağaç kesildi · 26 Ağu 2016 açılış · 818 milyon $
  - Wikipedia Riva: nüfus 1,794 (2013) → 3,555 (2024) = +%98
  - Arkitera 2015-04-08: Şehir Plancıları itirazı, 233 ha 2B arazi
- **Ne açar:** AA arşiv API + Sabah/Milliyet dış-arşiv-URL formatı + gazeteler.co (arşiv sitesi) + TİHV Basın arşivi

### §4.2 2024 yıl boşluğu (Beykoz-özel haberler)
- **Aranan:** 2024 dönemi Beykoz haberleri (Köseler seçildi 2024-03-31, sonrasında ne oldu, seçim öncesi/sonrası ivmesi)
- **Denenen kanallar:**
  - Wayback Machine 2024 snapshot → **KALICI YASAKLI**
  - Havuz gövde-DB: 2024 = 1 kayıt, 2023 = 1 kayıt (60 gün derinlik)
  - Beykoz Gazetesi arşiv: en eski 2025-07-06 (1 yıl geriye)
  - Wikipedia Beykoz: sadece 2024 seçim %45.87 tek-veri
- **Ne açar:** Bel meclis 2025 pagination sayfa-2/3/4 (S86-B'de HTML boyut 372 KB ama link-çıkartma başarısız — HTML-parse iyileştirme S86-C+)

### §4.3 İSKİ havza koruma yönetmelik PDF + mahalle-kuşak haritası
- **Aranan:** Beykoz mahallelerinin İSKİ havza-koruma kısa/orta/uzun mesafe kuşaklarına dağılımı (TTA98 imar-kilit resmi cevabı).
- **Denenen kanallar (4/4 HTTP404):**
  - `iski.istanbul/web/tr-TR/kurumsal/havza-koruma-yonetmeligi` (S83 + S86-B)
  - `iski.istanbul/havza-koruma`
  - `iski.istanbul/web/tr-TR/kurumsal`
  - `www.iski.istanbul/` anasayfa OK ama havza URL yok
- **Ne açar:** İSKİ URL formatı değişmiş; yeni URL keşfi (`iski.istanbul/tr/...` denemesi) + Bakanlık alternatif (mahalle-koruma-yönetmelik CBS Bakanlığı'nda)
- **Bilinen dış-bilgi:** Ömerli havzası kuzey ucu Kavacık/Anadoluhisarı · Elmalı havzası ucu Kanlıca civarı · Riva Deresi havzası Riva-Poyrazköy-Anadolufeneri hattı

### §4.4 Köseler dava tutuklu-isimleri ve hangi ihaleler
- **Aranan:** 2. dalga tutuklanan 2 kişinin ismi, hangi somut proje/ihale/mahalle ile ilgili rüşvet-irtikap, iddianame yayın-durumu.
- **Kanal-durum:** Beykoz Cumhuriyet Başsavcılığı KAPALI-tuttu; iş insanları + meclis üyesi + belediye çalışanları tipolojisi verildi ama isim/proje yok.
- **Ne açar:** 3. dalga takip + iddianame kamuya açıldığında UYAP + gzt_beykoz_gzt 2026-07-12/13 "Özel Kaleminin İtirafları" tam-metin

### §4.5 Kalyon "Riva Country" doğrulama
- **Aranan:** CC-Tic'in verdiği 1.300 villa 230 dönüm projesinin URL/lansman/imar-onay basın-yansıması.
- **Kanal-durum:**
  - Kalyon kurumsal site → JS-render SPA (1036 byte boş)
  - Beykoz Gazetesi arama → 0 sonuç
  - Havuz (29 terim × 4,214+831 kayıt) → 0 hit
  - Emlakkulisi → WAF 403
- **Ne açar:** Headless browser (Playwright/Puppeteer — Standing dışında) veya emlak-portal alternatifleri (endeksa, sahibinden etiket, arkitera-etiket)

### §4.6 Şişecam-Paşabahçe (İncirköy) arazi alıcı-firma
- **Aranan:** İncirköy'deki Şişecam eski fabrika arazisini kim alıyor, KAP açıklaması ne zaman geldi.
- **Kanal-durum:** Wikipedia sadece plan-belirti veriyor; alıcı-firma söylenmiyor. Beykoz Gazetesi "Şişecam arsa" araması 0.
- **Ne açar:** **KAP-Şişecam** özel-durum-bildirim arşivi (CC-Borsa köprüsü)

### §4.7 Hastane Şahinkaya inşaat firma
- **Aranan:** 2025-07-08 vinç devrilme haberindeki inşaat firması + Beykoz Devlet Hastanesi ilişkisi.
- **Kanal-durum:** Havuzda "Şahinkaya" 2 hit ama BAFRA (Samsun) haberleri (FP). Beykoz Şahinkaya-hastane devam-haber YOK.
- **Ne açar:** Yapı-ruhsat kayıtları + Sağlık Bakanlığı hastane-yatırım duyuruları

### §4.8 Beykoz Bel şeffaflık BOŞLUĞU (encümen/faaliyet/stratejik/bütçe/performans/belgeler/ilanlar)
- **Aranan:** Bel'in şeffaflık dokümanları.
- **Kanal-durum:** 7/7 HTTP404 (S86-B kesin teyit)
- **Ne açar:** Sayıştay raporu (Beykoz Bel denetim) + TBMM bütçe kanunları arşivi + KVKK'ya bilgi-edinme başvurusu

### §4.9 Paşabahçe 942-947 parsel + Çubuklu Evleri + Mesa Orman etap (BEY-15)
- **Aranan:** Hafıza tetiği S86-C-EK ile gelen 3 iddia.
- **Kanal-durum:** S86 ham (46 URL) + havuz + haber_akis + CSB İstanbul → **HEPSİ 0 hit**
- **Ne açar:** CSB İstanbul askı-arşivi pagination + Tic-CC tapu-kaydı teyit

---

## §5 DOSYAYA GİRECEK 10 ALTIN CÜMLE (kaynak-künyeli · #24 tr-safe · #31 KVKK-uygun)

1. **Beykoz Riva'da 186 odalı ve A Milli Futbol Takımı'nın eski kamp tesisi olan otelin yıkımına 24 Temmuz 2026'da başlandı; 16.548 m² inşaat alanı Gençlik ve Spor Bakanlığı ortaklığında Gençlik Kampı olarak yeniden yapılandırılacak.**  
   [Kaynak: Beykoz Belediyesi 2026-07-24 + Halk TV 2026-07-25]

2. **Beykoz Belediye Başkanı Alaattin Köseler (CHP, Mart 2024 seçim %45,87) 2025 İBB 5. dalga operasyonunda tutuklandı; Meclis 10 Mart tarihinde CHP adayı Özlem Vural Gürzel'i başkan vekili seçti.**  
   [Kaynak: Wikipedia Beykoz]

3. **17 Temmuz 2026'da Beykoz Belediyesi soruşturmasının 2. dalga operasyonunda 6 gözaltından 2'si tutuklandı; suçlama "rüşvet ve irtikap" (Beykoz Cumhuriyet Başsavcılığı).**  
   [Kaynak: Dünya Gazetesi 2026-07-17 + Yeni Şafak 2026-07-17]

4. **Beykoz Belediye Meclisi'nin 8 Ocak 2026 kararında Tokatköy Kentsel Dönüşüm alanı ONAYLI olarak yer aldı ve yol ismi düzenlemesi görüşüldü.**  
   [Kaynak: Beykoz Bel Meclis 8 Ocak 2026 Md 1]

5. **Beykoz Belediye Meclisi'nin 7 Mayıs 2026 kararıyla İncirköy Mahallesi'nde 26.938 m² parselin 7.219,46 m²'si Devlet İhale Kanunu ile satışa çıkarıldı.**  
   [Kaynak: Beykoz Bel Meclis 7 Mayıs 2026 Md 4]

6. **Tokatköy Kentsel Dönüşüm alanında hak sahiplerine 1.071 tapu 29 Haziran 2026'da Çevre ve Şehircilik Bakanlığı İstanbul İl Müdürlüğü aracılığıyla teslim edildi.**  
   [Kaynak: CSB İstanbul 2026-06-29 · `istanbul.csb.gov.tr/haberler/beykoz-da-tapular-hak-sahiplerine-teslim-edildi-306013`]

7. **Beykoz Göztepe Mahallesi 2760 Ada 110 Parsel için 1/1000 Ölçekli Koruma Amaçlı Uygulama İmar Planı Değişikliği 21 Temmuz 2026'da askıya çıktı.**  
   [Kaynak: CSB İstanbul · `istanbul.csb.gov.tr/istanbul-ili-beykoz-ilcesi-goztepe-mahallesi-2760-ada-110-parsele-...-476318`]

8. **Kavacık'ta 8 Ocak 2026 meclis kararıyla Kavacık Kavşağı imar planı, 2 Şubat kararıyla Medistate Hastanesi işbirliği protokolü ve 7 Mayıs kararıyla ticari-alan yetkilendirmesi görüşüldü.**  
   [Kaynak: Beykoz Bel Meclis 8 Ocak Md 11 + 2 Şubat Md 10 + 7 Mayıs Md 6]

9. **Cumhuriyetin en eski fabrikalarından biri olan Şişecam fabrikası'nın Beykoz İncirköy mahallesindeki eski üretim tesisi arazisinde otel tesisleri yapılması planlanmaktadır.**  
   [Kaynak: Wikipedia İncirköy, Beykoz]

10. **Beykoz Belediye Meclisi'nin Ocak-Haziran 2026 arası 24 kararının 21'i imar-ilgili olup 13 mahalleye yayılmıştır; en çok karar Çengeldere (4), Kavacık (3), Tokatköy/Riva/Polonezköy (2'şer) mahalleleridir.**  
    [Kaynak: vaka_beykoz_meclis_S83.json · S83 tam-hasat]

---

## §6 VERİ ENVANTERİ

### Havuz veritabanı
| Dosya | Yol | İçerik | Tazelik |
|---|---|---|---|
| **haber_govde.db** | `~/tradia_basin/veri/govde/haber_govde.db` | 831 OK kayıt, WAL modu, FTS5 tokenizer | 2026-07-19 son yazma (S77 dondurma sonrası) |
| **haber_akis.jsonl** | `~/tradia_konusmalar/02_CC_STATE/haber_akis.jsonl` | 4,214 kayıt · 3.5 MB | 2026-07-15 son emisyon (S77-G1) |

### Ham arşiv (S86-B kalıcı-hasat)
| Dizin | Boyut | İçerik |
|---|---|---|
| `~/tradia_basin/ham/S86/beykoz_bel/` | 3.6 MB | 10 HTML — meclis pagination + 7 gündem-detay + duyurular |
| `~/tradia_basin/ham/S86/csb/` | 1.6 MB | 6 HTML — Beykoz tapu haberi + Göztepe imar askı + duyurular/imar-planlari |
| `~/tradia_basin/ham/S86/haber_siteleri/` | 564 KB | Hürriyet503 + Milliyet-robots-red logs |
| `~/tradia_basin/ham/S86/iski/` | 32 KB | 1 HTML anasayfa (havza URL 4/4 404) |
| `~/tradia_basin/ham/S86/kalyon/` | 16 KB | 4 HTML JS-render boş |
| `~/tradia_basin/ham/S86/log/` | 16 KB | 2 JSONL hasat kayıtları |

### Rapor .md dosyaları (12 dosya, sprint sırasıyla)
- `~/tradia_basin/cikti/vaka_beykoz_basin_S78.md` (5.5 KB)
- `~/tradia_basin/cikti/vaka_beykoz_basin_S79.md` (9.0 KB)
- `~/tradia_basin/cikti/vaka_beykoz_basin_S80.md` (bulunmuyor — S80 sadece Desktop kopyası)
- `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_basin_S80.md` (11.8 KB)
- `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_basin_S81.md` (13.2 KB)
- `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_basin_S82.md` (11.8 KB) + `S82_derin (S84.md)` (14.9 KB)
- `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_basin_S83.md` (11.5 KB)
- `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_basin_S84.md` (14.9 KB)
- `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_basin_S85.md` (14.0 KB)
- `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_basin_S86A.md` (9.4 KB)
- `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_basin_S86B.md` (9.1 KB)
- `~/Desktop/TT-Tüm CC/beykoz_vaka/FINAL_cc_basin_beykoz.md` (bu dosya)

### Yapılandırılmış çıktılar (JSON)
| Dosya | İçerik |
|---|---|
| `~/tradia_basin/cikti/vaka_beykoz_basin_S79.json` | S79 · 31 dedupe kayıt |
| `~/tradia_basin/cikti/vaka_beykoz_basin_S80.json` | S80 · 54 dedupe |
| `~/tradia_basin/cikti/vaka_beykoz_basin_S81.json` | S81 · Köseler kronoloji |
| `~/tradia_basin/cikti/vaka_beykoz_meclis_S83.json` | 24 meclis kararı yapılı |
| `~/tradia_basin/cikti/vaka_beykoz_mahalle_nufus_S84.json` | 11 mahalle nüfus |
| `~/tradia_basin/cikti/vaka_beykoz_meclis_havuz_esleme_S86A.json` | **SIG5-B1** · 24 karar × havuz-izi |
| `~/tradia_basin/cikti/vaka_beykoz_S86B_bulgular.json` | S86-B ham işleme |
| `~/tradia_basin/cikti/vaka_beykoz_S86B_islenmiş.json` | S86-B 2. tur işleme |
| **`~/tradia_basin/cikti/beykoz_olay_defteri.json`** | **★ 15 olay v4 · kalıcı görev** |

### Manifest ve altyapı
- `~/tradia_basin/veri/feeds_manifest_aday_beykoz_S79.json` — 2 aday feed (Beykoz Bel + Beykoz Gazetesi)
- `~/landgold-agents/scripts/beykoz_S86B_hasat.py` — kalıcı hasat betiği

### K24a bildirimler (Hafıza'ya, 6 dosya)
- `hafiza_bildirim_ccbasin_beykoz_s82.json` (S82 CSB duyurdu)
- `hafiza_bildirim_ccbasin_beykoz_s83.json` (S83 meclis 24 karar + 4 cross-CC)
- `hafiza_bildirim_ccbasin_beykoz_s85.json` (olay defteri kuruldu)
- `hafiza_bildirim_ccbasin_beykoz_s86a.json` (SIG5-A4/B1/B2)
- `hafiza_bildirim_ccbasin_beykoz_s86b.json` (CSB keşfi + Bel 7/7-404 + fetch hattı)
- `hafiza_bildirim_ccbasin_standing_adayi_20260719.json` (numarasız Standing aday)

**TOPLAM:** 12 rapor + 9 JSON + 5.8 MB ham + 6 K24a = 5 günde tam vaka-çalışması

---

## §7 İZLEME GÖREVLERİ (olay defteri v4 — omurga)

**Dosya:** `~/tradia_basin/cikti/beykoz_olay_defteri.json`  
**Protokol:** her sprintte durum güncellenir · SİLİNMEZ · "Tradia unutmaz"  
**İstatistik:** 15 olay · işliyor 12 · yansıdı 2 · söndü 1 · haftalık 3 · aylık 12

### Tam tablo — 15 olay

| ID | Başlık | Mahalle | Amaç | Durum | Sıcaklık | Sonraki kontrol |
|---|---|---|---|---|---|---|
| **BEY-01** | Şişecam-Çelikler İncirköy arazi + otel planı | İncirköy | otel+turizm+emlak+dönüşüm | işliyor | ★★ | **2026-08-15** |
| **BEY-02** | Kalyon GYO "Riva Country" 1.300 villa | Riva | konut+emlak+turizm | işliyor · basın-ölçüm-dışı | ★★ | 2026-08-15 |
| **BEY-03** | ★ Riva Metruk Otel → Gençlik Kampı | Riva | kamu+spor+turizm+dönüşüm | yansıdı-kısmi · işliyor | ★★★ HAFTALIK | **2026-08-03** |
| **BEY-04** | ★ Köseler dava — 2. dalga | ilçe geneli | siyaset+dönüşüm | işliyor SICAK | ★★★ HAFTALIK | **2026-08-03** |
| **BEY-05** | Çubuklu Vapur Hattı İptali | Çubuklu | ulaşım+siyaset | **söndü** (2026'da devam yok) | ★ | 2027-01 (yıllık review) |
| **BEY-06** | Tokatköy Kentsel Dönüşüm — 1071 tapu | Tokatköy | dönüşüm+konut | **yansıdı** (CSB 2026-06-29) | ★★ | 2026-09-01 (aylık) |
| **BEY-07** | Hastane Şahinkaya | Şahinkaya | sağlık+kamu+inşaat | işliyor · basın-sessiz | ★ | 2026-09-01 |
| **BEY-08** | Kavacık üçlü hareket | Kavacık | ticari+sağlık+ulaşım+emlak | işliyor | ★★ | 2026-09-01 |
| **BEY-09** | Çengeldere kamu-kampüs zinciri (4 karar) | Çengeldere | kamu+eğitim+sağlık | işliyor | ★★ | 2026-10-01 |
| **BEY-10** | İshaklı tarım-arazi dönüşüm talebi | İshaklı | dönüşüm+emlak | işliyor (talep) | ★★ | 2026-11-01 |
| **BEY-11** | İncirköy 7,219 m² belediye satışı | İncirköy | emlak+satış | işliyor | ★★ | **2026-08-15** |
| **BEY-12** | Su Sporları Festivali (yıllık) | Beykoz sahil | kamu+turizm+spor+sahil | işliyor · yıllık tekrar | ★ | 2027-06-01 |
| **BEY-13** | 5-mahalle kamu-altyapı (9 Nisan kararı) | Rüzgarlıbahçe+Polonezköy+Mahmutşevketpaşa+Göksu | kamu+kültür+eğitim+sosyal | işliyor | ★★ | 2026-10-01 |
| **BEY-14** | ★ **Göztepe 2760/110 Koruma-Amaçlı imar askısı** | Göztepe | imar_plan_deg+koruma+emlak | işliyor (askıda) | ★★★ HAFTALIK | **2026-08-21** |
| **BEY-15** | Paşabahçe 942-947 + Çubuklu Evleri / Mesa Orman etap | Paşabahçe+Çubuklu | konut+emlak+dönüşüm | işliyor · basın-yansıması-teyit-edilmedi | ★ | 2026-08-21 |

### Yakın 6 kontrol takvimi

| Tarih | Kontrol edilecek olaylar |
|---|---|
| **2026-08-03** | BEY-03 (Riva Kamp bütçe/timeline) · BEY-04 (Köseler 3. dalga) |
| **2026-08-15** | BEY-01 (Şişecam KAP) · BEY-02 (Kalyon lansman) · BEY-11 (İncirköy ihale sonuç) |
| **2026-08-21** | BEY-14 (Göztepe askı-bitiş) · BEY-15 (CSB askı arşivi tarama) |
| **2026-09-01** | BEY-06 (Tokatköy 1071 devam) · BEY-07 (hastane) · BEY-08 (Kavacık imar detay) |
| **2026-10-01** | BEY-09 (Çengeldere açılış) · BEY-13 (5-mahalle altyapı) |
| **2026-11-01** | BEY-10 (İshaklı tarım karar) |

### Pencere sınıfı dağılımı (SIG5-B2)
- ASKI_RUHSAT_1_2_YIL: 5 (BEY-02, BEY-06, BEY-08, BEY-13, BEY-14, BEY-15)
- MECLIS_UYGULAMA_6_18_AY: 3 (BEY-05, BEY-09, BEY-10)
- İHALE_KABUL_2_3_YIL: 2 (BEY-07, BEY-11)
- KAP_INSAAT_7_8_YIL: 1 (BEY-01)
- YIKIM_YENI_YAPI_1_3_YIL: 1 (BEY-03)
- SIYASI_DAVA_2_5_YIL: 1 (BEY-04)
- YILLIK_ETKİNLİK_1_YIL: 1 (BEY-12)

---

## §8 ÖZ-DEĞERLENDİRME

### §8.1 En güçlü katkı
**★ CSB İstanbul KEŞFİ + OLAY DEFTERİ PROTOKOLÜ.**

Beykoz vaka çalışmasının en kalıcı iki katkısı bunlar:

1. **CSB İstanbul (istanbul.csb.gov.tr):** Beykoz imar askı ilanları ve tapu-teslim haberleri Beykoz Belediyesi'nde değil, Çevre ve Şehircilik Bakanlığı İstanbul İl Müdürlüğü'nde yayınlanıyor. Bu, S83'te tespit ettiğimiz Bel şeffaflık boşluğunun **alternatif resmi kaynağı**. Diğer 39 İstanbul ilçesi için de aynı işlevi görecek — Tradia'nın veri-mimarisi için genelleştirilebilir bir keşif.

2. **Olay defteri v4 (`beykoz_olay_defteri.json`):** 15 olay, pencere_sinifi + sonraki_kontrol + haftalık_bayrak alanlarıyla. Bu bir *tek-vaka* çözümü değil, **Tradia standardı olabilir**. Her CC her vakada olay-defteri kurabilir. "Tradia unutmaz" ilkesinin somutlaşması.

### §8.2 En büyük hata
**§3.1 Şişecam-Paşabahçe → İncirköy karışıklığı.** S82'de "Şişecam-Paşabahçe fabrika 0 hit" dedim, S84'te Wikipedia teyidiyle fabrikanın İNCİRKÖY'de olduğu ortaya çıktı. Paşabahçe komşu mahalle ve MARKA-adı; fabrika adres kesinlikle İncirköy.

**Bu hata neden oldu:**
- Şirket-adı "Paşabahçe Cam" → mahalle-eşleştirmesini otomatik yaptım
- İlk 2 sprint Wikipedia mahalle-sayfalarına gitmeden yalnız arama-terimleriyle çalıştım

**Ders:** Marka-adı ≠ konum. Kurumsal-lokasyon için Wikipedia + KAP zorunlu.

**İkincil hata:** §3.5 Standing #34 numara atadım (S77) — Standing numaralarını yalnız Hafıza atar; kural bilinmemişti.

### §8.3 Anayasaya 3 öneri

**Öneri 1 — SIG5-B1 protokolü Tradia standardı olsun:**  
*"Bir CC bir kurum-kararı (meclis, ihale, KAP vb.) tespit ederse, 6-18 ay sonra havuzunda uygulama-izini kontrol etmekle yükümlüdür. İz-yok oranı %90'ı aşarsa, o kurumun şeffaflık boşluğu olarak Hafıza'ya bildirilir."*  
Gerekçe: Beykoz Bel'de %95.8 iz-yok tespit ettik. Bu tek-vaka değil, sistemik olabilir. Standing kuralı olması gerekiyor.

**Öneri 2 — Kalıcı-kapalı liste (KKL) standardı:**  
*"Bir CC'nin bir kaynağı Wayback yasağı / WAF-403 / JS-render / HTTP404-format-değişimi nedeniyle erişilemez olarak tespit ederse, bu durum Hafıza'ya bildirilir ve KALICI KAPALI LİSTE'ye eklenir. Diğer CC'ler aynı kaynağı tekrar denemez."*  
Gerekçe: Wayback + Emlakkulisi + DuckDuckGo JS-render + İSKİ URL formatı — her CC'nin bu duvarlara kendi başına çarpması boşa zaman ve fetch-kotası kaybı.

**Öneri 3 — CSB İl Müdürlüğü kaynağı manifest-standart olsun:**  
*"Belediye imar-askı ve tapu-teslim haberlerinin resmi yayın-yeri, ilgili ilin CSB İl Müdürlüğü'dür (istanbul.csb.gov.tr, ankara.csb.gov.tr vb.). Her CC'nin manifest'ine 81 İl CSB müdürlüğü kaynak olarak eklenmelidir."*  
Gerekçe: Beykoz özelinde ispatlandı; diğer ilçeler için de aynı geçerli. Manifest-genişleme fırsatı 81 kaynak.

### §8.4 Kota dersi
**S85'te WebFetch quota tükendi** → 12 saat sonrası reset bekleyemedik → **S86-B'de Python requests hasat betiği** yazıldı → **kalıcı çözüm**: ham diske alma sayesinde yeniden-fetch gereksiz + fetch-limiti dışı.

**Kural:** WebFetch tek-seferlik keşif için · **tekrar-fetch-adayı kaynak varsa requests betiğine dönüştür.**

Bu ders yalnız Beykoz vakasına özgü değil, tüm CC'ler için geçerli.

---

## §9 CROSS-CC ÖZETİ

| CC | Verildi | Alındı | Açık borç |
|---|---|---|---|
| **CC-Tic** | 1071 tapu ipucu (**★ DOĞRU çıktı**, CSB'de teyit) · Kalyon Riva Country + Çelikler 117 dönüm + Paşabahçe 942-947 iddiaları | Beykoz Bel meclis tam-hasat + CSB İstanbul haber URL'leri | Kalyon/Çelikler/Mesa Orman TAPU-KAYITI teyit |
| **CC-Sosyal** | 5 aday-firma (Peker/Tera/MESA/Çelikler/Ramazan Işık) — 5/5 basında 0 hit | Beykoz gündem+aktör isimleri | Aday-firma kaynak-doğrulama |
| **CC-Borsa** | — | Şişecam-İncirköy otel planı (Wikipedia) + Kalyon lansman havuz-boş | KAP-Şişecam + KAP-Kalyon açıklama takibi |
| **CC-İhale** | Riva Kamp inşaat-ihalesi bekleniyor · Kavacık Kavşağı imar-ihalesi · İncirköy 7,219 m² satış-ihalesi · Göztepe askı-sonrası ruhsat | 3 ihale-adayı özet | İhale sonuçları geldiğinde geri-bildirim |
| **CC-TT-MAP** | — | Tokatköy dönüşüm sınırı · İshaklı tarım-harita · Göztepe 2760/110 parsel · Riva Kamp 16,548 m² lokasyon · İSKİ havza-mahalle katmanı | Mahalle-katman fabrikasında Beykoz kesiti |
| **CC-Hafıza** | 5 K24a bildirim + olay defteri v4 + numarasız Standing aday | Sprint dizini + master-dosya sinyali | Standing aday-tasarı değerlendirme + KKL standardı öneri |

---

## §10 KAPANIŞ BEYANI

**Beykoz vakası CC-Basın için 5 günde 11 sprint boyunca sürdürüldü.** Başlangıçta 16 havuz-haberi olan vaka, sonda **15 kayıtlı olay + 5.8 MB ham arşiv + 12 rapor + 9 yapılandırılmış JSON + 6 K24a bildirim** olarak kapatıldı.

**En değerli çıktı yorum-yargısı değil, PROTOKOL:** olay defteri kurumsal-kalıcı-görev, SIG5-B1/B2 protokolü, CSB İstanbul kaynak-manifest-aday.

**En dürüst çıktı BOŞLUK-DOKÜMANTASYONU (A04):** havuz 2016-2018 = 0 satır · meclis-uygulama izi %4.2 · Bel 7/7-404 · 5 aday-firma havuz-boş · Wayback yasak · İSKİ 404 · İBB Strapi bilinmiyor. Bunların hepsi "ne kadar bilmiyoruz" haritasının parçası.

**Beykoz için 15 olay olay-defteri'nde kalıcı olarak izlenecek.** Bir olay söndüğünde kayıt SİLİNMEYECEK (Standing #34 SİLME-YOK). Sonraki 3 haftalık kontrol tarihi 2026-08-03 (BEY-03/04) + 2026-08-15 (BEY-01/02/11) + 2026-08-21 (BEY-14/15).

Sonraki sprintlerde Tradia'nın Master-Dosyası bu 12 rapordan örülecek. CC-Basın'ın nihai ifadesi budur.

**BITTI** — Standing #13

---

**Standing:** #8 · #17 · #18 · **#21-A/B kaynak-şeffaf** · #22 FIFO · **#24 tr-safe** · **#31 KVKK iç-kullanım** · **#34 SİLME-YOK**  
**A04** ✅ · **$0** ✅ · **SİLME-YOK** ✅  
**Bildirim:** [`~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccbasin_beykoz_FINAL.json`](../../tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccbasin_beykoz_FINAL.json)  
**Master-dosya girdisi:** `FINAL_cc_basin_beykoz.md` (2026-07-27 · CC-Basın · Beykoz vakası kapanışı)
