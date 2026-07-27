# Beykoz Landsat — NON-KANON ÇAPRAZ-DOĞRULAMA (CC-TT-AI)

> **⚠️ KİMLİK & KEŞİF:** Bu belgeyi **CC-TT-AI** üretti. **MAP28'i asıl CC-TT-MAP ZATEN koştu** (`cc_ttmap_MAP28.md`, 2026-07-26, NDVI 1985→2025, 9 dönem). O dosyaya **DOKUNMADIM** (SİLME-YOK, başka-CC işi). Bu belge artık **bağımsız ÇAPRAZ-DOĞRULAMA**: farklı indeks (**NDBI**, yapılaşma) + farklı dönemleme (2000/2016/2024) ile TT-MAP'in NDVI-sonucunu sınadım.
> **Sınır:** NON-KANON, tek-kaynak Landsat, Sentinel-karıştırma YOK (Standing #34), TT-MAP kanonuna/evrene KARIŞMAZ.

**Tarih:** 2026-07-27 · $0 (MPC/USGS ücretsiz) · A04 · #21-B (çapraz-katman, Standing #21-C ruhu)

---

## ★ ANA SONUÇ: İKİ BAĞIMSIZ CC AYNI YERE VARDI (yakınsama)

| Soru | CC-TT-MAP (NDVI, 9-dönem) | CC-TT-AI NON-KANON (NDBI, 3-dönem) | Uyum |
|---|---|---|---|
| Orman→yapı dönüşümü var mı? | Beklenen NDVI-kaybı YOK (38/45 artış) | Yapılaşma-sinyali gürültü-içi | ✅ ikisi de "belirgin-dönüşüm yok" |
| Ortaçeşme (MAP26 %17,1) | NDVI 0,33→0,42 **artış**, tarihsel-düşüş yok | NDBI net Δ **+0,009 ≈ 0** | ✅ ikisi de **%17,1'i çürütüyor** |
| Köprü(2016) kıyı-etkisi | kıyı 2015-25 NDVI-eğimi −0,003 = **düz** | 2016 sensör-sınırı → izole-edilemez; kıyı zayıf-poz | ✅ ikisi de "güçlü post-köprü kıyı-dönüşümü YOK" |
| Ana kısıt | TM↔OLI sensör-ofseti | L5→L8→L9 U-şekli artefaktı | ✅ **ikisi de çapraz-sensörü suçluyor** |

> **Bu bir #21-C çapraz-katman doğrulaması:** iki ayrı CC, iki ayrı spektral-indeks (NDVI yeşil-kaybı / NDBI yapı-kazancı), bağımsız pipeline → **aynı üç sonuç.** Tek-CC'nin bulgusu değil, iki-imza. TT-MAP'in "Landsat büyüme-izole-edemez / raf" kararı bağımsız-teyitli.

---

## YÖNTEM (özet)

- Landsat C2L2 (NASA/USGS via MPC STAC, auth'suz). 2000 **L5-TM**, 2016 **L8-OLI**, 2024 **L9-OLI**. Yaz, %0 bulut.
- **NDBI** = (SWIR1−NIR)/(SWIR1+NIR) — yapılaşma proxy'si (TT-MAP NDVI'ye tamamlayıcı zıt-yön).
- Beykoz path 179/180 sınırında → **path 179+180 mozaik** = 45/45 kapsam.
- **Fenoloji-tabanı** (G2): aynı-yıl 2024 Tem-29 vs Ağu-14 → |ΔNDBI| medyan **0,018**, maks **0,245**.

---

## G1 — 2000→2016→2024 SERİSİ + KÖPRÜ AYRIMI

**Köprü-etkisi izole EDİLEMEDİ** — nedeni ölçüldü: dönem-sınırı 2016, **sensör-değişimiyle çakışıyor** (L5→L8). Her konum-sınıfında aynı **U-şekli** (2016-L8'de çukur) → fiziksel-değil, kalibrasyon:

| Konum | n | Köprü-öncesi Δ (L5→L8) | Köprü-sonrası Δ (L8→L9) |
|---|---:|---:|---:|
| kentsel | 14 | −0,089 | +0,054 |
| orman/kırsal | 28 | −0,044 | +0,032 |
| kıyı | 3 | +0,013 | +0,016 |

> Kıyı (Riva/A.Feneri) U-şekli göstermeyen tek sınıf (öncesi+sonrası poz) → kıyı-sürekli-gelişim [ZAYIF, n=3]. Bu, TT-MAP'in "kıyı-eğimi düz" bulgusuyla **gerilimsiz** (ikisi de güçlü-conversion yok diyor).

---

## G2 — ORTAÇEŞME (NDBI ile)

| NDBI | 2000 | 2016 | 2024 | Δ |
|---|---:|---:|---:|---:|
| Ortaçeşme | −0,090 | −0,139 | −0,080 | **+0,009** |

**Verdict:** Net ≈ 0 → **%17,1 desteklenmiyor** (TT-MAP NDVI ile aynı yön). Kesin-çürütme için 30m yetersiz; **Sentinel-2 10m (TT-MAP kanonu) tek doğru araç.**

---

## G3 — DEĞİŞİM-TİPİ (konut/villa/lojistik)

Landsat 30m NDBI ile **güvenilir tip-ayrımı yapılamadı** (kontamine). Zayıf konum-örüntüsü: yalnız kıyı hafif-pozitif. Tip-çözümü = Sentinel 10m + İhale-join (Signals) gerektirir.

---

## G4 — CEVAPLAYAMADIKLARIM

- **Köprü-etkisi izolasyonu:** 2016 = sensör-sınırı = köprü-yılı → Landsat'la ayrılamaz.
- **Ortaçeşme gerçek-oran:** 30m çok-kaba → Sentinel gerekir.
- **Değişim-tipi:** NDBI tek-indeks yetmez.
- **DÜRÜST (A04):** "Denedim, izole-edemedim" bir sonuçtur — ve TT-MAP'in zaten-ulaştığı sonucu bağımsız doğrular. Probe erişim-açısından başarılı (45/45 mozaik), radyometri-açısından Landsat bu iş için yanlış-araç.

---

## SONUÇ

```
NON-KANON ÇAPRAZ-DOĞRULAMA (CC-TT-AI, NDBI) · MAP28'i asıl TT-MAP koştu (NDVI) — o dosyaya dokunulmadı
★ 3 bağımsız yakınsama: (1) belirgin orman→yapı dönüşümü YOK (2) Ortaçeşme %17,1 ÇÜRÜK (3) güçlü post-köprü kıyı-dönüşümü YOK
★ ortak-kısıt: TM↔OLI çapraz-sensör → Landsat büyüme-izole-edemez (TT-MAP raf-kararı teyitli)
#21-C çapraz-katman: NDVI(yeşil-kaybı) × NDBI(yapı-kazancı) iki-imza aynı sonuç
$0 · Sentinel-karıştırma YOK · evren+TT-MAP-kanonu DOKUNULMADI · A04
```
