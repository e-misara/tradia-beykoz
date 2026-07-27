# TKGM + RESMİ MEKÂNSAL KATMAN KEŞFİ — Beykoz · CC-İhale (İ64)
**Tarih:** 2026-07-26 · **Tip:** KEŞİF/masabaşı (canlı-sorgu YOK) · **$0 · A04**
**Standing #8 uyumu:** Hiçbir portala scrape/otomatik-sorgu **yapılmadı**. Bu, kapıların *ne sunduğu + ToS + otomasyon-legalitesi* haritasıdır. Doğrulama: WebSearch/WebFetch (kamuya-açık sayfa/haber).

> **Amaç:** "Tapu kanalı YOK" açığının resmî kapılarını ölç — hangisi EKAP-modeliyle hasat-edilebilir, hangisi yasak/kurumsal.

---

## 🚦 OTOMASYON UYGUN/YASAK TABLOSU (baş-çıktı)

| # | Kanal | Ne sunar | Otomasyon | Hüküm |
|---|---|---|---|---|
| 1 | **Resmî Gazete kamulaştırma** | Beykoz acele/kamulaştırma kararları | ✅ **UYGUN** | #8 tam-uyum (EKAP-modeli: Patron-indir→CC-parse) |
| 2 | **Milli Emlak / VGM ilan** | Beykoz hazine/vakıf satış-kira-tahsis | ✅ **UYGUN** | public ilan HTML |
| 3 | TÜİK konut satış | İL-İstanbul aylık (**ilçe YOK**) | ⚠️ KISMİ | il-veri public, Beykoz-ilçe boşluk |
| 4 | ÇŞB e-plan | Beykoz onaylı/askı plan envanteri | ⚠️ KISMİ | görüntüleme public, toplu-indirme belirsiz |
| 5 | **TKGM parsel sorgu** | tek-parsel alan/nitelik/pafta | ❌ **YASAK** | ToS-bulk + rate-limit + CAPTCHA + #8-scrape-yasak |
| 6 | TKGM MEGSİS / HGM Atlas | kadastro toplu-katman WFS | ❌ **KURUMSAL-PROTOKOL** | kurum-özel; Tradia tüzel-değil |

**Keşif özeti:** Tapu toplu-veri açığı **KAPANMIYOR** (TKGM public-değil), ama **2 yeni EKAP-modeli kanal açıldı** (RG-kamulaştırma + Milli Emlak). Bir de **dürüst veri-boşluğu** var (Beykoz-ilçe konut-satış).

---

## S1 — TKGM PARSEL SORGU

**URL:** parselsorgu.tkgm.gov.tr · **Gayriresmî API:** `cbsservis.tkgm.gov.tr/megsiswebapi.v3/api/` (GeoJSON döner — **resmî açık-API değil**)
**Sunduğu öznitelik:** geometri · il/ilçe/mahalle · ada/parsel · **alan (m²)** · **nitelik (arsa/tarla/bağ)** · pafta · mevkii. Export: GeoJSON/KML/SHP/DXF (tek-parsel).

**⛔ Rate-limit & ToS (dürüst):** Uygulama **tekil-manuel sorgu** için tasarlı; toplu/otomatik hasat rate-limit + oturum-token + CAPTCHA ile engelli. **Standing #8 scrape-yasağıyla örtüşür → OTOMASYON YASAK.** Patron manuel tek-parsel sorgu yapabilir; toplu HAYIR.

### 🧪 TEST: İncirköy 11 parsel (Şişecam–Çelikler işlemi)
Canlı-TKGM sorgusu **yapılmadı** (#8); kamuya-açık haber + TKGM-mantığıyla:

| Alan | Değer |
|---|---|
| Mahalle | İncirköy |
| Toplam alan | **117.018,95 m² (~117 dönüm, denize-sıfır)** |
| **Nitelik** | **ARSA** (tarla/bağ değil → kentsel/yapılaşmaya-açık) |
| Parseller (11) | 251/4 · 257/6 · 270/{2,16,34,42,43} · 271/{2,6,8} · 294/29 |
| Bedel | 171.500.000 USD |
| İşlem | Şişecam → **Çelikler Holding özel-devir**, kurul 19 Şubat 2026, 30-gün |

**🎯 Çift doğrulama:** Bu işlem **EKAP'ta görünmez** — çünkü **özel-özel devir**, kamu-ihalesi değil. Bu, İ60'ın "Şişecam kamu-ihale izi YOK" bulgusunu **kanıtlıyor**. Parsel-nitelik "arsa" → İncirköy Boğaz-bandı yapılaşma-baskısı (TT-MAP kıyı-büyüme tezine paralel).

---

## S2 — TKGM MEGSİS / atlas.harita.gov.tr / HGM

- **MEGSİS kadastro:** WMS/WFS/WMTS ile paylaşım **ancak talep-eden KURUM/belediye ile PROTOKOL** karşılığı. Toplu-kadastro **açık-veri değil**.
- **HGM Atlas** (atlas.harita.gov.tr): TopoVT (yol/köprü/tünel) WFS + raster/topo baz-katman WMS/WMTS. Baz-harita görüntüleme public; **kadastro-öznitelik toplu-indirme YOK**.
- **e-Devlet:** vatandaş tekil-görüntüleme.

**→ OTOMASYON: kurumsal-protokol gerekir.** Tradia tüzel-kurum-değil → şu an erişilemez. **Patron aksiyonu:** kurumsal-protokol başvurusu (stratejik karar); aksi halde public-WMS yalnız görsel-altlık.

---

## S3 — ÇŞB E-PLAN (imar planı envanteri)

**URL:** e-plan.gov.tr (eski: eplan.csb.gov.tr / mekansal.gov.tr) · onaylı planlar **PİN** ile.

**Beykoz durumu:**
- 1/25.000 **Koruma Amaçlı Nazım İmar Planı** VAR (İBB).
- Polonezköy: 1/5000 KANİP + 1/1000 KAUİP değişiklik — **2. askı itirazları** (istanbul.csb.gov.tr duyuru 453755).
- Genel: Beykoz ağırlıklı **KORUMA AMAÇLI** (Boğaziçi öngörünüm + doğal/tarihî SİT) → çoğu mahalle 1/1000 uygulama-planı **kısıtlı/koruma-rejimi**.

**🔑 Sinyal yorumu:** Plan-YOK veya koruma-rejimi = imar-belirsiz/kısıtlı → **düşük-kamu-yatırımı açıklaması.** İ63'teki "büyüme↔kamu kopukluğu" ile **tutarlı**: büyüme, koruma-boşluklarında / kıyı-bandında **piyasa-kaynaklı**.

**→ OTOMASYON KISMİ:** e-plan görüntüleme public; toplu-API belirsiz. Askı-duyuruları CSB-web (Patron-manuel). **Beykoz mahalle×plan-durumu (VAR/YOK/askıda) envanteri manuel çıkarılabilir.**

---

## S4 — RESMÎ GAZETE KAMULAŞTIRMA (2015→bugün)

**URL:** resmigazete.gov.tr (tam-arşiv aranabilir, Cumhurbaşkanı kararları).

**Bulgu:** Beykoz kamulaştırma **RG'de VAR** — ör. **Riva Deresi Batısı** doğal-sit "kesin korunacak hassas alan" + acele-kamulaştırma.
**🎯 EKAP farkı doğrulandı:** İ61'de EKAP'ta kamulaştırma **= 0**'dı. RG **AYRI EVREN** → kamulaştırma bülten-dışı, RG'de. Tez doğru.
**⚠️ Nitelik uyarısı:** Beykoz RG-kamulaştırmalarının çoğu **KORUMA-amaçlı** (doğal-sit), kalkınma-amaçlı-değil → yorumda ayrıştır.

**→ OTOMASYON UYGUN ✅ — EN UMUT-VERİCİ YENİ KANAL.** RG günlük PDF public + arşiv, **Standing #8 ile TAM-UYUMLU** (EKAP-pipeline'ıyla aynı: Patron-indir → CC-parse). NAS-dönüşünde RG-Beykoz taraması eklenebilir.

---

## S5 — MİLLİ EMLAK + VGM (bipolar strateji K24b Beykoz-kesiti)

**URL:** milliemlak.gov.tr/Sale/Sale · istanbul.csb.gov.tr milli-emlak-duyuruları · ilan.gov.tr/emlak · VGM vgm.gov.tr.
**Sunduğu:** Hazine/vakıf taşınmaz **satış-kira-tahsis** ilanları (Beykoz filtrelenebilir).
**Kesit:** Beykoz hazine-parseli elden-çıkarma = **kamu-zemini özel-yatırıma açma** sinyali.
**→ OTOMASYON UYGUN ✅** (public ilan). Patron-indir/RSS. VGM (vakıf) ayrı akış.

---

## S6 — TÜİK KONUT SATIŞ (ilk gerçekleşen-işlem serisi?)

**URL:** data.tuik.gov.tr — aylık Konut Satış İstatistikleri.
**Kapsam:** **İL bazında (İstanbul)** aylık; yabancıya-satış İL-bazlı.
**⚠️ Beykoz-ilçe:** Standart bültende **İLÇE-Beykoz aylık seri YOK** (il-bazlı yayın).

**Dürüst etiket:** İlk **gerçekleşen-işlem** serisi olarak **İL-İstanbul** çekilebilir (adet, **fiyatsız**); **Beykoz-ilçe payı TÜİK'ten türetilemez.** İlçe-devir sayısı TKGM-tapu'da var ama public-değil. → **Beykoz-ilçe gerçekleşen-işlem serisi ŞU AN veri-boşluğu** (kabul).

**→ OTOMASYON KISMİ:** il-İstanbul UYGUN; ilçe-Beykoz VERİ-YOK.

---

## ⚠️ CEVAPLAYAMADIKLARIM (A04)
1. **TKGM parsel-nitelik canlı-teyidi** — İncirköy parselleri haberden alındı, TKGM-sorgusu #8-gereği yapılmadı (nitelik "arsa" haber-kaynaklı).
2. **TKGM ToS tam-metni** — "öz nitelik kullanımı" node'u gövdesi render olmadı; rate-limit sayısal-değeri resmî-belgede doğrulanamadı (davranış-bilgisinden yazıldı).
3. **e-plan toplu-API** — plan-envanteri toplu-indirilebilir mi kesin-değil; görüntüleme-public teyitli.
4. **Beykoz-ilçe gerçekleşen konut-satış** — TÜİK il-bazlı, ilçe veri-boşluğu.
5. **MEGSİS kurumsal-protokol** koşulları/maliyeti — başvuru-gerektirir, ölçülmedi.

---

## 📌 SONUÇ + K24a önerisi
- **2 yeni EKAP-modeli kanal** hasada-hazır: **① Resmî Gazete kamulaştırma ② Milli Emlak/VGM ilan** — ikisi de #8-uyumlu, NAS-dönüşünde pipeline'a eklenebilir.
- **TKGM tapu** açığı **kapanmıyor** (parsel-tekil-manuel / MEGSİS-kurumsal). Kurumsal-protokol = Patron stratejik-kararı.
- **Koruma-statüsü** keşfi İ63 büyüme↔kamu-kopukluğunu **açıklıyor** — Beykoz koruma-ağırlıklı, büyüme koruma-boşluğu/kıyı piyasa-kaynaklı.
- **Dürüst boşluk:** Beykoz-ilçe gerçekleşen-işlem serisi yok.

**Çıktı:** `~/cc_ihale/cikti/beykoz_resmi_katman.json` + bu rapor. **$0 · scrape-YOK · A04.** CC-İhale duraklamaya döndü.
