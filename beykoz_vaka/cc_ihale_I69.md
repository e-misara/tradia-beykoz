# BEYKOZ İMAR REJİMİ v3 — YENİ KISIT + DÖNÜŞÜM KATMANLARI · CC-İhale (İ69)
**Tarih:** 2026-07-27 · **$0 · A04 · #8** (scrape-YOK, public duyuru/İBB-meclis görüntüleme) · **#18** mahalle_norm JOIN
> İ66 v1 (Boğaziçi) + İ67 (2B/hazine) + İ68 (yargı) üzerine **üç yeni katman**.

---

## 1. KENTSEL DÖNÜŞÜM (6306) — v3

| Mahalle | Statü | Dayanak | [K] |
|---|---|---|---|
| **Tokatköy** | Kentsel-dönüşüm **ONAYLI + YÜRÜRLÜKTE** | 6306 riskli-alan; meclis (S83) | M |
| **Çubuklu (B Bölgesi)** | **RİSKLİ ALAN** — 18.madde uygulaması **ASKIDA** | **09.04.2018 Bakanlar Kurulu** riskli-alan; **5,6 ha** | V |

**Çubuklu riskli-alan detayı:** Konum = **Kavacık Kavşağı kuzeyi, Anadolu Hisarı + E-80 Bağlantı Yolu doğusu** (Boğaz-kıyı kampüsten AYRI iç-kesim). Adalar **823·833·834·835** + kadastral boşluk. 18.madde askı **22.12.2025** (PARSİD) + 1/5000 KA NİP & 1/1000 KA UİP. İBB **Çubuklu İmar-Mülkiyet Çözüm Ofisi** kuruldu.

> **★ Çubuklu iki-yüzlü:** Boğaz-**KIYI** = eğitim/kampüs (İ63 imzası) + **İÇ** (Kavacık-kavşağı) = riskli-alan/kentsel-dönüşüm. Tek mahalle-adı, iki farklı bölge/imza.

**v3 özet:** Beykoz'da **2 aktif kentsel-dönüşüm cephesi** — Tokatköy (onaylı) + Çubuklu-B (askıda).

---

## 2. NATO POL BORU HATTI — MAP32 KISIT KATMANINA YENİ SATIR

| Alan | Bulgu | [K] |
|---|---|---|
| İşletmeci | MSB Akaryakıt İkmal ve **NATO POL Tesisleri** İşletme Başkanlığı (4636 s. kanun) | V |
| İBB dayanak | Meclis **18.03.2016 No.546** — boru-hattı güzergâh-alanları konut/yeşil/yol ile planlandı; **refId 54022** plan-notları | V |
| Kısıt | Güzergâh boyunca **yapılaşma-kısıtı koruma-kuşağı**; **deplase = MSB onayı şart** | V |
| Beykoz güzergâh | Anadolu-yakası POL hattı Beykoz'dan geçer; **E-80/TEM koridoru** ekseni (Kavacık/Anadolu Hisarı) — Çubuklu riskli-alanının bitişik-koridoru | V/çıkarım |
| Kısıtlı mahalleler | **Kavacık · Anadolu Hisarı · Çubuklu(iç)** (tahmini) | çıkarım |

**MAP32 kısıt-katmanı yeni satırı:** `kısıt_tipi=NATO-POL-koruma-kuşağı · kaynak=MSB+İBB-546/2016 · etki=güzergâh-bandı yapılaşma-yasak · join=güzergah-mahalleleri`.
→ Beykoz'un **4. kısıt-tipi:** Boğaziçi + orman-SİT + doğal-SİT + **NATO-POL**.

**Dürüst not:** Tam mahalle-güzergâhı İBB refId 54022 **plan-notları görüntüleme** gerektirir (#8-scrape-yok) → kısıtlı-mahalleler **TAHMİN** (E-80 ekseni), kesin-değil.

---

## 3. 18.MADDE İMAR UYGULAMALARI — uygulama-imar hareketliliği

| Mahalle | Ada | Onay/Askı | Bağlam | [K] |
|---|---|---|---|---|
| **Gümüşsuyu** | **1897 Ada** (+1885/1-4·1893/3·1896/6·1897/1-47·1899/1,2,4,5,6) | Bakanlık **06.10.2023** onay, askı 18.10.2023 (1 ay) | hastane/belediye-HQ mahallesi → uygulama-imar aktif | V |
| **Çubuklu (B)** | 823·833·834·835 | askı **22.12.2025** (15 gün, PARSİD) | riskli-alan kentsel-dönüşüm parselasyonu | V |

**Yorum:** 18.madde = plan-sonrası **UYGULAMA** aşaması (parsel-düzenleme). **Gümüşsuyu (2023) + Çubuklu-B (2025)** = uygulama-imar fiilen-hareketli mahalleler. `Plan-onaylı → 18.madde → yapılaşma-hazır` zinciri işliyor.

---

## 4. SENTEZ (v3)

- **Kentsel dönüşüm:** Tokatköy onaylı + Çubuklu-B askıda = 2 aktif cephe.
- **Yeni kısıt-tipi:** NATO-POL koruma-kuşağı (E-80 ekseni) → MAP32'ye 4. kısıt-tipi.
- **Uygulama momentum:** 18.madde Gümüşsuyu+Çubuklu-B'de → plan-belirsizliği **uygulama-aşamasına** geçmiş = yatırım-hazır sinyal.
- **Çubuklu iki-imza:** kıyı-kampüs (eğitim) + iç-riskli-alan (dönüşüm).

**JOIN zinciri (tam-katmanlı):**
`MAP32(fiziksel) × imar-rejimi-v3(Boğaziçi+orman+NATO-POL+6306) × hazine-2B(mülkiyet) × hukuki-kanal(yargı) = arz-kıtlığı TAM-KATMANLI resmi.`

---

## 5. ⚠️ CEVAPSIZLAR (A04)
1. **NATO-POL tam güzergâh-mahalleleri** — refId 54022 plan-notları görüntüleme gerekir; kısıtlı-mahalleler tahmin (E-80 ekseni).
2. **Çubuklu A Bölgesi** — B-bölgesi doğrulandı; "A bölgesi" ayrı-riskli-alan mı, aynı-proje-etabı mı belirsiz.
3. **18.madde tam-liste** — Gümüşsuyu 1897 + Çubuklu-B doğrulandı; diğer Beykoz 18.madde uygulamaları taranmadı (PARSİD/il-müdürlüğü görüntüleme).
4. **NATO-POL güzergâh × 6306 çakışması** — Çubuklu riskli-alan (E-80 doğusu) ile POL-koridoru bitişik; birebir-çakışma plan-notu gerektirir.

---

**Çıktı:** bu rapor + `~/cc_ihale/cikti/beykoz_imar_rejimi_v3.json`. **$0 · scrape-YOK · #8 · #18.** CC-İhale duraklamaya döndü.
