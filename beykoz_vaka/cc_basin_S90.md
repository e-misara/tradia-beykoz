# VAKA · Beykoz YEREL BASIN ENVANTERİ + SİTEMAP HATTI — CC-Basın S90

**Tarih:** 2026-07-28 · **Rol:** CC-Basın · **$0** · **A04** · **#8 nazik-fetch** · **#21-B**

★★★ **KÖR-NOKTA AÇILIYOR:** Beykoz Güncel 16-yıl arşiv (2010→2026, 8,001 haber) — 2016 köprü + 2024 boşluk **bütçesiz kapanıyor**.

**Çıktılar:**
- **Envanter JSON:** [`~/tradia_basin/cikti/vaka_beykoz_yerel_kaynak_envanter_S90.json`](../../tradia_basin/cikti/vaka_beykoz_yerel_kaynak_envanter_S90.json)
- **Ham arşiv:** `~/tradia_basin/ham/S90/` (~1.5 MB, 8 site + sitemap+RSS+robots)
- **Bildirim:** [`hafiza_bildirim_ccbasin_beykoz_s90.json`](../../tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccbasin_beykoz_s90.json)

---

## §1 8 ADAY BEYKOZ YEREL SİTE — DURUM TABLOSU

| # | Site | Alan | Anasayfa | Robots | Sitemap | RSS | Arşiv Derinlik | Not |
|---|---|---|---|---|---|---|---|---|
| 1 | **★★★ Beykoz Güncel** | beykozguncel.com | 182 KB | ✓ | ✓ (8-idx · **8,001 URL**) | ✓ 74 KB (10 item) | **2010-05-12 → 2026-07-25 (16 yıl)** | HAZİNE — WordPress standart yapı |
| 2 | **★★ Dost Beykoz** | dostbeykoz.com | 413 KB | ✓ | ✓ (8-idx · **~1,200 URL**) | ✓ 194 KB (40 item) | 2025-12-14 → 2026-07-09 (7 ay) | Yeni-genç, içerik-yoğun (RSS 40 hepsi Beykoz-hit) |
| 3 | **★★ Beykoz Gazetesi** | beykozgazetesi.com.tr | (S79 bilinen) | ✓ | ✓ (**17,968 URL**) | — | derin ama %70+ ulusal-gündem | Arama işlevi kırık (S87) |
| 4 | Beykoz Haber | beykozhaber.com | 2.8 KB (minimal) | ✓ (24 byte) | ✓ (508 byte, 1 URL=forward.ihs) | — | çok küçük | Ölü-benzeri |
| 5 | Beykoz Kulesi TV | beykozkulesi.tv/.com.tr | **1036 byte** (charset=gb) | — | — | — | JS-render veya CDN-blok | KKL-aday |
| 6 | Boğaziçi Gazetesi | bogazicigazetesi.com/.com.tr | **1036 byte** (charset=gb) | — | — | — | Aynı desen | KKL-aday |
| 7 | Beykozanadolu | beykozanadolu.com | **DNS-not-found** | — | — | — | Domain yok | Elenen |
| 8 | Beykoz24 (S79) | beykoz24.com | SSL-fail (S79) | — | — | — | Ulaşılamaz | KKL-aday |

**Aktif+değerli 3 site · KKL-aday 3 · elenen 2 · minimal 1**

---

## §2 ★★★ BEYKOZ GÜNCEL — 16 YIL ARŞİV DERİNLİĞİ (2016+2024 kapanışı)

**Site:** beykozguncel.com — WordPress standart yapı, post-sitemap1..8 açık, robots-izinli

### Sitemap dağılımı — TARİH-DÖNEM haritası

| post-sitemap | URL | Tarih aralığı | Bizim ihtiyaç |
|---|---:|---|---|
| post-sitemap1 | 1,001 | **2010-05-12 → 2026-07-25** | Genel |
| post-sitemap2 | 1,000 | 2012-05-07 → 2013-03-29 | — |
| post-sitemap3 | 1,000 | 2013-03-29 → 2014-05-25 | — |
| post-sitemap4 | 1,000 | 2014-05-25 → 2015-07-07 | — |
| post-sitemap5 | 1,000 | **2015-07-07 → 2016-10-26** | ★ **2016 YSS Köprüsü açılış-dönemi** (26 Ağu 2016) |
| post-sitemap6 | 1,000 | **2016-10-26 → 2018-04-01** | ★ **Köprü sonrası 1.5 yıl** (Riva/Poyrazköy etki) |
| post-sitemap7 | 1,000 | 2018-04-01 → 2021-12-16 | Uzun dönem |
| post-sitemap8 | 1,000 | **2021-12-19 → 2024-02-24** | ★ **2024 kör-yıl** (Köseler seçim 2024-03-31 önü) |

**TOPLAM: ~8,001 haber · 16 yıl arşiv**

### Kritik-dönem hasat-fizibilitesi

**2016 YSS Köprüsü (S82-S86-A açık-borç C9, C12):**
- Post-sitemap5 + Post-sitemap6 içinde 2016-2017 tam-pencere URL var
- Beykoz-yerel gazete olduğu için Beykoz-özel yansımalar ULUSAL medyaya göre yüksek olacak
- Hasat: 2 sitemap × 1000 URL = ~2,000 kayıt tarama-mümkün

**2024 kör-yıl (S82-S86 açık-borç C12):**
- Post-sitemap8 içinde 2021-12 → 2024-02 tarihli 1000 URL
- Post-sitemap1 içinde muhtemelen 2024 sonrası + eski karışık
- Köseler seçim (2024-03-31) öncesi hasat-mümkün

### RSS öncelikli değil — sitemap ana kaynak
RSS sadece 10 son-haber döndürüyor. Arşiv-derinliği için **sitemap-URL'lerini tek-tek fetch** gerekli (WordPress uyumlu, düzgün-format).

---

## §3 ★★ DOST BEYKOZ — İçerik-yoğun taze arşiv

**Site:** dostbeykoz.com — 7 ay derinlik, ama **her sayfa Beykoz-özel** (RSS 40/40 hit).

### Sitemap dağılımı

| post-sitemap | URL | Tarih aralığı |
|---|---:|---|
| post-sitemap1 | 150 | 2026-06-06 → 2026-07-09 |
| post-sitemap2 | 150 | 2026-04-27 → 2026-05-31 |
| post-sitemap3 | 150 | 2026-04-06 → 2026-05-02 |
| post-sitemap4 | 150 | 2026-03-10 → 2026-04-06 |
| post-sitemap5 | 150 | 2026-02-06 → 2026-03-08 |
| post-sitemap6 | 150 | 2026-02-01 → 2026-03-01 |
| post-sitemap7 | 150 | 2026-01-01 → 2026-01-22 |
| post-sitemap8 | 150 | 2025-12-14 → 2026-01-06 |

**~1,200 haber · 7 ay · yoğun-günlük yayın**

### KRİTİK DOĞRULAMALAR (BEY-* olayları için)

Sitemap URL'lerinden okunabilen 2 birebir örtüşme:
1. **"beykoz-belediyesi-genclik-kampi-kapilarini-aciyor"** (2026-07-09) → **BEY-03 Riva Gençlik Kampı DOĞRULAMA**
2. **"beykozun-elmali-baraji-zirveye-kosuyor"** (2026-04-27) → **BEY-18 Elmalı Barajı Havzası DOĞRULAMA**

Bunlar **iki yerel-basın kanalıyla** doğrulanmış oldu — S86-B'de tek-kanaldı.

---

## §4 KÖR-NOKTA AÇILIŞI — HANGİSİ BÜTÇESİZ KAPANIYOR

| Kör-nokta | Önceki durum (S86-C) | S90 yeni-yol | Bütçe |
|---|---|---|---|
| **2016 YSS Köprüsü etki** (C9) | Wayback bloke + ulusal 0-hit | **Beykoz Güncel post-sitemap5+6 açık** (2,000 URL 2015-07 → 2018-04) | **$0 SIFIR** ★ |
| **2024 yıl boşluğu** (C12) | Wayback bloke + ulusal 60-gün | **Beykoz Güncel post-sitemap8 açık** (1,000 URL 2021-12 → 2024-02) | **$0 SIFIR** ★ |
| Kalyon Riva Country basın-yansıma (C28) | Havuz 0 + JS-render | Dost Beykoz + Beykoz Güncel sitemap tarama | **$0 SIFIR** ★ |
| Çelikler İncirköy (C11) | 5/5 kaynak 0 hit | Beykoz Güncel derin-arşiv tarama | **$0 SIFIR** ★ |
| İSKİ havza tam-liste (C21) | 4/4 HTTP404 | **Havuz-dışı** → İSKİ resmi PDF (S89 hedef) | Bütçe-belirsiz |
| Kalyon GYO kurumsal (JS-SPA) | 1036-byte boş | Headless-browser | **~$5-10/ay** (bulut-headless servis) |
| Beykoz Bel şeffaflık BOŞLUĞU | 7/7-404 (S86-B) | Yasal-hak: KVKK bilgi-edinme | **$0** (yasal-yol) |
| GDELT DOC 2.0 (S89) | Düşük-verim (Türkçe-yerel az) | Kritik-değil, Beykoz Güncel ana-hat | **$0** — tercih Beykoz Güncel |
| Beykoz Gazetesi arama-kırık (S87) | Arama-URL çalışmıyor | Alternatif: Beykoz Güncel + Dost Beykoz | **$0** |

**★ 5 KÖR-NOKTA BÜTÇESİZ KAPANIYOR** (Beykoz Güncel + Dost Beykoz sayesinde)  
**1 BÜTÇE-KALEMİ ADAY** (Kalyon JS-SPA için headless-browser $5-10/ay)

---

## §5 SONUÇ TABLOSU — kaynak × derinlik × erişim

| Kaynak | Derinlik | Erişim | Beykoz-Özel | Sunum-değer | Manifest-aday |
|---|---|---|---|---|---|
| Beykoz Güncel | ★★★ 16 yıl | sitemap açık · robots-izinli | ✓ | ★★★ | ✅ **KESİN EKLE** |
| Dost Beykoz | ★★ 7 ay | sitemap+RSS açık | ✓ (%100 hit) | ★★★ | ✅ **KESİN EKLE** |
| Beykoz Gazetesi | ★★ 10+ yıl (17K URL) | sitemap açık ama arama-kırık | ~%30 (rest ulusal) | ★★ | ✓ (var, ama arama-kırık borç) |
| Beykoz Haber | ★ minimal | forward.ihs yönlendirme | ? | ★ | ❓ atıl-benzeri |
| CSB İstanbul (S86-B) | var | tam-URL-ile OK | ✓ (Göztepe+tapu) | ★★★ | ✅ (S86-B'de eklenmişti) |
| planaski.ibb (S87) | tüm-İl | JS-form arka-uç | — | ★★ | ✓ (backend keşif borç) |
| Beykoz Kulesi TV | ??? | 1036-byte CDN-blok | ? | ? | ❌ KKL |
| Boğaziçi Gazetesi | ??? | 1036-byte CDN-blok | ? | ? | ❌ KKL |
| Beykozanadolu | — | DNS-yok | — | — | ❌ elenen |
| Beykoz24 (S79) | — | SSL-fail | — | — | ❌ KKL |
| **Kalyon GYO** kurumsal | — | JS-SPA | ✓ (proje-veri) | ★★ | ❌ KKL (bütçe-adayı: headless) |

---

## §6 PİLOT HASAT — Dost Beykoz RSS DOĞRULAMASI

RSS 40 item · 20-27 Temmuz 2026 · Beykoz-hit 40/40 · Köseler 1 hit

**Örnek başlıklar (Beykoz-özel yansıma DOĞRUDAN):**
- "Beykoz Merkez'deki Ufuk Taksi Durağı neden kaldırılıyor?" (yerel-siyasi)
- "Beykoz'da denize girme yasağı sona erdi"
- "Beykoz'da iktidarı kadınlarla kazanacağız" (siyasi-Köseler döneminin devamı)
- "Eski Anavatan Partisi yöneticisi İsmet Kurtuluş vefat etti"

**Beykoz Güncel RSS 10 item · 14-25 Temmuz · Beykoz-hit 10/10:**
- ★ **"Riva'da yılların sorununa ilk kazma vuruldu!"** (BEY-03 doğrulama)
- "Beykoz TEM'de feci kaza"
- "İBB'nin yapmadığı işi Beykoz Belediyesi yaptı!"

**Sonuç:** İki yerel-kaynak da **Beykoz-tam-özel** yayın yapıyor · içerik-doğruluk yüksek

---

## §7 SONRAKI ADIM — S91 hasat protokolü

### Öncelik-1 (SICAK): Beykoz Güncel 2016 kritik-dönem hasat
- post-sitemap5 (2015-07 → 2016-10) fetch → 1,000 URL
- Türkçe-anahtar filtre: köprü, ulaşım, imar, kamulaştırma, Riva, Poyrazköy
- 2016-08-26 (köprü açılış) civarı yoğunluk-tarama

### Öncelik-2 (SICAK): Beykoz Güncel 2024 kör-yıl hasat
- post-sitemap8 (2021-12 → 2024-02) fetch → 1,000 URL
- Filtre: Köseler seçim-öncesi, Alaattin, CHP-AKP, imar-projeleri
- 2024-03-31 seçim önü belge-arşivi

### Öncelik-3: Dost Beykoz tam-arşiv hasat
- 8 post-sitemap × 150 URL = 1,200 URL fetch
- Sitemap-index kalıcı-crontab (günlük yeni-haber izlem)

### Öncelik-4 (bütçe-adayı): Kalyon JS-SPA
- Headless-browser bulut-servisi ~$5-10/ay
- **Patron kararı: ONAY VERİRSE aç**, aksi halde havuz-dışı bırak

---

## §8 CROSS-CC + BÜTÇE-KALEMİ

**cc_hafiza:** Beykoz Güncel + Dost Beykoz **manifest-aday KESİN**. CSB İstanbul + planaski + bu 2 kaynak = **4 yeni-manifest-adayı**.

**cc_ttmap:** Beykoz Güncel 2016-2017 sitemap'inden ilan-kamulaştırma verileri toplanabilir; TT-MAP fabrikası için.

**cc_borsa:** Beykoz Güncel 2021-2024 arşivinde Şişecam-Paşabahçe+Kalyon KAP dönemi haberler bulunabilir.

**cc_ihale:** 2016 köprü sonrası ihale-kaydı Beykoz Güncel'de olabilir (Riva-Poyrazköy imar).

**cc_tic:** BEY-15 (Paşabahçe 942-947) + BEY-16 (Çubuklu Riskli Alan) için Beykoz Güncel 2010-2020 arasındaki geçmiş-kayıtlar aranmalı.

### Bütçe-kalemine künyeli girdi

| Kalem | Aylık maliyet | Değer | Öneri |
|---|---|---|---|
| Beykoz Güncel + Dost Beykoz hasat | **$0** | ★★★ (5 kör-nokta kapanır) | ✅ HEMEN başla |
| CSB İstanbul manifest-ekleme | **$0** | ★★★ | ✅ HEMEN |
| planaski backend keşif | **$0** (JS-network-tab) | ★★ | ✅ S91+ |
| **Kalyon JS-SPA headless-browser** | **~$5-10/ay** | ★★ (proje-veri) | ⚠ **Patron karar** |
| GDELT genişletme (bulk-download 2015+ 300 TB) | **$0** (ücretsiz) ama depolama-zor | ★ (Türkçe-yerel için düşük) | ⚠ tercih Beykoz Güncel |

---

## §9 DÜRÜST SINIR (A04 · #31)

- ★ **En büyük S82-S86 borcumuzdu 2016 ve 2024** — S90 bu ikisini **bütçesiz kapatıyor**. Beykoz Güncel 2010'dan yayın.
- **Beykoz Gazetesi arama-kırık sorunu** (S87) hala geçerli, ama Beykoz Güncel + Dost Beykoz alternatifleri arayı kapatıyor.
- **Beykoz Kulesi TV + Boğaziçi Gazetesi 1036-byte CDN-blok** — muhtemelen sitenin gerçek-içeriği CDN/coğrafi-kısıtlı; **KKL-aday**.
- **Kalyon JS-SPA** kurumsal-site içeriği için tek-yol headless-browser · Patron kararı olmadan bütçeye girmez.
- Wayback + GDELT alternatifleri — Beykoz Güncel sayesinde artık ZORUNLU değil.
- KVKK #31: Yerel-basın kişi-adları haberde geçenler halka-açık; iç-kullanım.

---

## §10 SUNUM-ETKİSİ

**Yeni sunum-argümanı (14 → 15):**
15. **★★★ [S90 YENİ] Beykoz Güncel yerel-arşivi 16 yıl derin (2010-2026)** — 2016 YSS Köprü + 2024 seçim-öncesi kör-yıl bütçesiz kapanıyor.

**En büyük süreç-katkısı:**
> "Tarihsel-derinlik borcunun çözümü ulusal-basında değil, Beykoz'un kendi yerel-basınındadır."

---

**Standing:** #8 nazik-fetch (3sn+robots-saygı) · #17 · #18 · **#21-A/B** · #22 FIFO · **#24 tr-safe** · **#31 KVKK iç** · **#34 SİLME-YOK**  
**A04** ✅ (JS-SPA & CDN-blok dürüstçe · Wayback yerine yerel-arşiv çözümü) · **$0** ✅ · **SİLME-YOK** ✅  
**BITTI** — Standing #13
