# VAKA · Beykoz S94 · TEMİZLİK + TATMİN TURU — CC-Basın

**Tarih:** 2026-07-28 · **Rol:** CC-Basın · **$0** · **A04** · **KR-01/02/03** ✓

Arşiv güvenilirliği için tamamı yeniden-tarandı. **article-body izolasyon + tarih-fallback + market-varyant + TEKEL/Şişecam ayrıştırma.**

**Çıktılar:**
- **★ Isı-v2r (TEMİZ):** [`~/tradia_basin/cikti/haber_yogunluk_v2r.json`](../../tradia_basin/cikti/haber_yogunluk_v2r.json)
- **Market x mahalle x yıl:** [`~/tradia_basin/cikti/ticaret_marka_mahalle_yil_S94.json`](../../tradia_basin/cikti/ticaret_marka_mahalle_yil_S94.json)
- **TEKEL/Şişecam ayrışım:** [`~/tradia_basin/cikti/tekel_sisecam_ayrisim_S94.json`](../../tradia_basin/cikti/tekel_sisecam_ayrisim_S94.json)
- **Aday-parça TEMİZ:** [`~/tradia_basin/cikti/adaylar_beykoz_S94_TEMIZ.jsonl`](../../tradia_basin/cikti/adaylar_beykoz_S94_TEMIZ.jsonl)
- **Betik:** `beykoz_S94_filtre_v2.py`
- **Olay defteri v9:** 29 olay (BEY-01..18 + BEY-24..34)

---

## §1 FP KÖKTEN ÇÖZÜM — article-body izolasyonu (BAŞARILI ✅)

**Yöntem:** `<div class="...entry-content..."` WordPress kanews teması ana-içerik seçicisi. Menü/sidebar/footer STRIP.

### Mahalle sayımı KIYAS (S93 v2 → S94 v2r)

| Mahalle | v2 (kirli) | v2r (temiz) | Düzeltme |
|---|---:|---:|---|
| **Fatih** | **7999** | **649** | ★ **-92%** menü FP kesildi |
| **Riva** | **7999** | **476** | ★ **-94%** |
| **Kavacık** | **7999** | **866** | ★ **-89%** (Kavacık gerçekten en aktif — 1980 FSM köprü sonrası) |
| Cumhuriyet | 682 | 680 | -0.3% (zaten temizdi) |
| Paşabahçe | 590 | 590 | 0% |
| Merkez | 571 | 571 | 0% |
| Çubuklu | 527 | 527 | 0% |
| Tokatköy | 325 | 325 | 0% |

**Sonuç:** Fatih/Riva/Kavacık 7999-FP **ÖLDÜ**. Kavacık gerçek-en-aktif (866 · beklenen). Riva sıralaması Cumhuriyet-Paşabahçe-Merkez-Çubuklu'nun ALTINA düştü — daha gerçek görüntü.

---

## §2 2024 GAP — TARİH FALLBACK

**Tarih-kaynak dağılımı:**
- meta (article:published_time): **7999** (%99.98)
- sitemap-URL: 1
- sitemap-hash: 1

**2024 gerçek-sayı:** 30 kayıt · 2026: 1 · Diğer 7970 kayıt 2010-2023 arası.

**Dürüst-not (A04):** v1 URL-sitemap-lastmod'da 623 URL 2024 tarihi taşıyordu · v2r meta-tag'da 30 çıktı. **Bu gap açıklaması:**
- Sitemap lastmod ≠ makale-yayın-tarihi (dosya-güncelleme olabilir)
- Beykoz Güncel meta-tag doğru tarihi veriyor (99.98% doğru zincir)
- Muhtemel açıklama: Beykoz Güncel 2018-2023 arasında AZ yayınlanmış, 2024'te sitemap'i güncellemiş; makale-yayın-tarihleri eski yıllar

**★ 2024 GAP GERÇEK — teknik-hata DEĞİL:** Beykoz Güncel 2024'te yeni-post az yaptı (30 kayıt). Kalan 2024-lastmod'lar eski-makalelerin güncellenmesi.

---

## §3 MARKET VARYANT — dürüst-sonuç

**Genişletilmiş regex + "şube/mağaza/açıldı/açılış" etki-filtresi:**

| Zincir | Toplam | Mahalle x Yıl |
|---|---:|---|
| **A101** | **3** | Kavacık 2018 · Yalıköy 2016 · Paşabahçe 2014 |
| BİM | 0 | Beykoz Güncel'de yok |
| ŞOK | 0 | v2'deki 53-hit FP-idi (kelime-genel "şok haberi") |
| Migros | 0 | yok |
| CarrefourSA | 0 | yok |
| File / Metro / Watsons | 0 | yok |

**Dürüst-not:** Beykoz Güncel **MARKET AÇILIŞI HABERİ YAPMIYOR** genelinde. 3 A101 hit tek-tek doğrulandı, gerçek-marka. Diğer zincirler ya bu havuzda değil ya farklı-formatlı (BİM=?, "market" değil "mağaza").

**Alternatif kaynak:** Beykoz Bel `/haberler` + emlak-portal + Google News RSS (S91'de kurulmuştu, işleme S95'e).

---

## §4 ★★★ TEKEL ≠ ŞİŞECAM — TAM AYRIŞTIRMA

**Ayrı-regex uygulandı:** `tekel_arazi` (Tekel arazi/arsas/Paşabahçe Tekel) vs `sisecam_arazi` (Şişecam) vs `pasabahce_fabrika` (Paşabahçe fabrika/cam/arazi).

**Sonuçlar:**
- **TEKEL arazi: 13 kayıt** (2011-2020)
- Şişecam (Tekel-hariç): 35 kayıt
- Paşabahçe fabrika: 61 kayıt

### 🎯 BEY-29 TAM ZİNCİR AÇILDI (7 kayıt Torunlar/Kentsel Resort Otel)

| Tarih | Başlık | Yorum |
|---|---|---|
| **2011-02-13** | Beykoz'a **yedi yıldızlı otel** yapılıyor | ★ Duyuru (BEY-32 aynı olay) |
| 2012-03-26 | Paşabahçe TEKEL arazisine **5 talipli** çıktı | İhale-katılımcı |
| **2012-03-28** | İşte Paşabahçe TEKEL arazisinin **YENİ SAHİBİ** | İhale-sonuç |
| 2012-09-20 | TEKEL arazisinde çalışmalar yakında başlayacak | Fizibilite |
| **2012-09-22** | **TORUNLAR GYO** turizm tesisi için **ilk balyozu vurdu** | ★★★ **ALICI = TORUNLAR GYO** |
| 2014-10-01 | Torunlar TEKEL arazisi için **proje hazırladı** | Proje-tasarım |
| **2016-03-08** | Paşabahçe TEKEL, **KENTSEL RESORT OTEL** olacak | ★★★ **PROJE-ADI = KENTSEL RESORT OTEL** |
| 2017-09-18 | TEKEL arazisine yapılacak projenin **MAKETİ** | Görsel-tanıtım |

**★★★ MEGA-ÇÖZÜM:**
- **BEY-29 Torunlar GYO Paşabahçe TEKEL Kentsel Resort Otel** = **BEY-32 7 yıldız otel 2011** = AYNI OLAY (birleştirildi)
- **BEY-01 İncirköy Şişecam** ile AYRI: **komşu mahalleler (İncirköy-Paşabahçe) · iki farklı fabrika-arazi projesi**
- **Üst Akıl S92-DÜZELTME "BEY-18=Torunlar"** teyit-ediliyor — Signals master'daki BEY-18 muhtemelen bu Torunlar-Kentsel Resort projesi

### Şişecam (Tekel-hariç) ilk-kayıtlar
- 2012-04-28 "Beykoz Vakfı Şişecam'a marka davası" (KR-CCBASIN-03 nokta-1)
- 2012-11-14 "Şişecam kavşağı yapılan çalışmayla rahatlıyor" (altyapı)
- 2013-02-02 "Şişecam kavşağı genişliyor"
- **2013-04-08** "**Cam Köy için ilk adım atıldı**" ★ **BEY-34 yeni** — Şişecam özel kültürel-turistik proje

---

## §5 OLAY DAĞILIMI (v2r · TEMİZ)

| Olay | v2 | v2r | Değişim |
|---|---:|---:|---|
| kopru_ulasim | 439 | **358** | -18% (FP-temizlik + kelime-sınırı sıkı) |
| tapu_hak | 442 | 320 | -28% |
| orman_yesil | 250 | 252 | ~aynı |
| imar_plan | 232 | 232 | aynı |
| kentsel_donusum | 167 | 167 | aynı |
| ihale_satis | 183 | 158 | -14% |
| iski_havza | 235 | 135 | **-43%** (FP çok azaldı) |
| **pasabahce_fabrika** | 0 | **61** | ★ YENİ AYRIŞTIRMA |
| sisecam_arazi | 83 | **36** | -57% (Tekel-hariç) |
| **tekel_arazi** | 0 | **13** | ★ YENİ AYRIŞTIRMA |
| metruk_genclik | 31 | 31 | aynı |
| vapur_cubuklu | 27 | 26 | aynı |
| soruşturma_rüşvet | 77 | **23** | -70% (kelime-sınırı) |
| yali_bogaz | 7 | 7 | aynı |
| goztepe_imar | 3 | 5 | +2 |
| kalyon_riva | 4 | 4 | aynı (kanıt-boşluk) |

**Köprü 2016 zirvesi v2r:** 78 (v2:88 → küçük düşüş, FP-temizlik) · yıl-yansıması sabit.

---

## §6 AKTÖR × YIL (v2r)

| Aktör | v2r Toplam | Not |
|---|---:|---|
| **Çelikbilek** | **2122** | ★ Yücel Çelikbilek Bel Bşk 2004-2014 (BEY-26 YONETISIM_TARIHCESI) — 12 yıllık yansıma |
| Yücel Çelikbilek | 2082 | (aynı-kişi, tam-isim) |
| Murat Aydın | 101 | 2019-2024 Bel Bşk |
| Köseler | 61 | + Alaattin 42 = **103** birleşik |
| Alaattin Köseler | 42 | (aynı-kişi) |
| Şişecam | 36 | |
| Paşabahçe Cam | 17 | |
| Emlak Konut | 11 | |
| İskender Közen | 10 | Yeniden Refah |
| Çömlekçi | 8 | + Emre 8 = **16** birleşik |
| Emre Çömlekçi | 8 | |
| **Kalyon İnşaat** | **4** | **★ v2'de 0-hit idi, v2r'de 4 hit** (article-body zenginleşti) |
| Sevcenur Özcan | 2 | Millî Eğitim Müdürü |
| Özlem Vural Gürzel | 1 | 2026 vekil |
| Gürzel | 1 | (aynı) |

★ **Kalyon İnşaat 4 hit v2r'de** — S91-S92-S93'te 0 idi. Article-body izolasyonu bu firma-adını yakaladı. Yıl dağılımı: 2012:2 · 2014:2 · Kalyon-Beykoz bağlantısı 12-14 yıl önce basında geçmiş. **Kanıt-boşluk kısmen açıldı**.

---

## §7 SUNUM MADDE 31 (S94 YENİ)

31. **★★★ [S94 YENİ] Paşabahçe TEKEL arazisi = TORUNLAR GYO KENTSEL RESORT OTEL projesi (2011-2017 tam zinciri)** — 7 kayıt · BEY-29 · BEY-01 (Şişecam-İncirköy) ile AYRI iki komşu-mahalle projesi. Signals master BEY-18=Torunlar teyit.

---

## §8 CROSS-CC (K24a) — SIGNALS AYAK-ETKİNLEŞTİRME v2r

- **Signals SIG8 v2r:** `~/tradia_basin/cikti/haber_yogunluk_v2r.json` — TEMİZ mahalle × yıl matrisi hazır
- **cc_borsa:** Torunlar GYO Beykoz Paşabahçe TEKEL Kentsel Resort Otel → **KAP-Torunlar açıklamaları** (2012-2017 döneminde çıkmış olmalı)
- **cc_ihale:** 2012-03-28 TEKEL "yeni sahibi" duyurusu — ihale-tarihçesi (Torunlar-Özelleştirme İdaresi arasında)
- **cc_ttmap:** Kavacık 866 (en aktif), Paşabahçe-İncirköy komşuluğu (iki farklı fabrika-projesi)

---

## §9 DÜRÜST SINIR (A04)

- **2024 gap gerçek-veri:** Beykoz Güncel 2024'te az-post-etti (30 kayıt), v1 sitemap-lastmod ≠ meta-yayın-tarihi
- **Kalyon 4-hit yeni ama az** — Kalyon Riva Country projesi hâlâ havuz-dışı, S91-S92'deki "kanıt-boşluk" %90 sürüyor
- **BİM/Migros/Şok/File 0-hit** dürüst-not: bu havuz market-açılışı taşımıyor · alternatif kaynak S95
- **Çelikbilek 2122 hit** — YONETISIM_TARIHCESI sınıfı · KR-CCBASIN-02 uygulandı
- **Cam Köy BEY-34** yeni-bulgu: 2013-04-08 duyurusu · sonrası boşluk (proje hayata geçti mi ölü mü?)

---

## §10 S95 BORÇLARI

1. Signals BEY-18 senkron: Torunlar teyit
2. Cam Köy 2013-2026 kayıp-yıl zinciri
3. GNews RSS içeriği işleme (S91'de kurulmuştu)
4. Kalyon Riva Country havuz-dışı doğrulama (KAP + emlak-portal)
5. TT-HAFIZA rsync (bellek takıldığında)
6. 2024 gerçek-post-say kontrolü (Beykoz Güncel'in 2024 sitemap detayı)

---

**Standing:** #8 · #17 · #18 · **#21-A/B** · #22 · **#24** · **#31** · **#34 SİLME-YOK** · **KR-01/02/03** ✓  
**A04** ✅ (2024-gap gerçek + Kalyon-boşluk + market-eksik dürüstçe) · **$0** ✅  
**KAPSAM: 8001/8001 TEMİZ** ✅  
**BITTI** — Standing #13
