# BEYKOZ ZAMAN MAKİNESİ — Landsat NDVI 1985→2025 · CC-TT-MAP

**Üreten:** CC-TT-MAP · **Tarih:** 2026-07-26 · **Sprint:** MAP28 · **Hipotez:** Beykoz orman-baskın → tarihsel-sinyal NDBI-değil **NDVI-kaybı** (orman→yapı = yeşil-kaybı)
**Kaynak (#21-B):** Landsat C2L2 (MPC/USGS) · Ağu-Eyl medyan · **L5-TM≤2011 / L8-L9≥2013 (L7-2003+ YASAK, kanonik)** · tek-kaynak (Standing#34) · WC-2021 orman-referans
**Ham:** yerel-geçici (nasa/landsat penceresi); kanon CDSE'ye DOKUNULMADI (ayrı `landsat_deney/`).

## SONUÇ ÖZET — hipotez KISMEN, ama beklenen conversion YOK

- ✅ **Yöntem çalışıyor** (validasyon: Polonezköy korunan-orman NDVI 0,69→0,84 stabil-yüksek; yöntem ormanı doğru-izliyor).
- 🔴 **Beklenen orman→yapı NDVI-kaybı BULUNAMADI:** 45 mahallenin **38'i NDVI-ARTIŞ, 6 stabil, yalnız 1 düşüş** (tokatkoy −0,13).
- **Neden (asıl-bulgu):** (a) kentsel-çekirdek 1985-ÖNCESİ kurulmuş (Kavacık 1985'te zaten NDVI 0,31 = orman-değil); (b) Beykoz ormanları **korunmuş/bozulmamış** (havza/SİT); dönüşüm ya çok-eski ya hiç-olmamış.
- Bu MAP26/27'yi doğruluyor: Beykoz'un 'büyümesi' küçük, yeni ve orman-köyleri dönüşmemiş.

⚠️ **SENSÖR-UYARISI:** TM(≤2010)↔OLI(2015+) NDVI-ofseti (OLI daha-yüksek okur) → NDVI-artışların bir kısmı sensör-artefaktı olabilir. Tek-sensör-temiz pencere: 2015/2020/2025 (OLI). 2000-epoğu bulutlu (6/45, zayıf).

## S3 — HEDEF SORULAR

| Soru | Cevap (veri) |
|---|---|
| (a) Kavacık ne zaman ormandan çıktı? | **1985-ÖNCESİ** — 1985'te zaten NDVI 0,31 (orman-değil). Landsat-kaydı-öncesi, göremiyoruz. |
| (b) Riva kıyısı hangi 5-yıllıkta kırıldı? | **Net-kırılma YOK** — NDVI 0,59-0,61 arası orman-kalıyor; en-dip 1990-95 (−0,10) ama toparlıyor. Yeni-gelişim mahalle-medyanı altında. |
| (c) Ortaçeşme lojistikleşmesi ne zaman? | **Tarihsel-düşüş YOK** (NDVI 0,33→0,42 arttı). Yalnız 2020→2025 hafif-dip (−0,05) = olası-yeni-başlangıç; mahalle-medyanı için zayıf. |
| (d) Köprü (2016) öncesi/sonrası kıyı-eğimi | Kıyı-bandı (10 mahalle) 2015→2025 ort-NDVI eğimi **−0,003 = DÜZ**. Köprü-sonrası kıyıda hızlanan-yeşil-kaybı **YOK**. → MAP26'nın 'büyüme-kıyı-kaynaklı' tezinin tarihsel-testi: kıyıda bile güçlü-conversion-sinyali yok. |

## 45 MAHALLE × NDVI SERİSİ (özet — en-çok değişen + validasyon)

| Mahalle | 1985 | 1995 | 2005 | 2015 | 2025 | net | orman% | güven |
|---|---|---|---|---|---|---|---|---|
| tokatkoy | 0.605 | 0.599 | 0.725 | 0.651 | 0.471 | -0.134 | 82 | yuksek |
| soguksu | 0.402 | 0.365 | 0.333 | 0.417 | 0.42 | 0.018 | 38 | yuksek |
| riva | 0.593 | 0.59 | 0.495 | 0.612 | — | 0.019 | 63 | orta |
| yalikoy | 0.361 | 0.423 | 0.404 | 0.457 | 0.387 | 0.026 | 46 | yuksek |
| ornekkoy | 0.683 | 0.728 | 0.557 | 0.731 | 0.711 | 0.028 | 88 | yuksek |
| cigdem | 0.37 | 0.424 | 0.368 | 0.415 | 0.404 | 0.034 | 36 | yuksek |
| kavacik | 0.306 | 0.349 | 0.313 | 0.349 | 0.351 | 0.045 | 32 | yuksek |
| gorele | 0.704 | 0.792 | 0.693 | 0.778 | 0.764 | 0.06 | 92 | yuksek |
| polonezkoy | 0.686 | 0.828 | 0.81 | 0.84 | 0.843 | 0.157 | 98 | yuksek |
| kavacik | 0.306 | 0.349 | 0.313 | 0.349 | 0.351 | 0.045 | 32 | yuksek |
| ortacesme | 0.33 | 0.496 | 0.417 | 0.478 | 0.416 | 0.086 | 44 | yuksek |
| riva | 0.593 | 0.59 | 0.495 | 0.612 | — | 0.019 | 63 | orta |

*Tam 45×9 tablo + kayıp-pencere + güven: `02_NOKTA/beykoz_zaman_makinesi.json`.*

## S1/S2 — VERİ KALİTESİ
- Epok-sahne: {'1985': 4, '1990': 4, '1995': 4, '2000': 4, '2005': 4, '2010': 4, '2015': 4, '2020': 4, '2025': 4}. 2000 bulutlu (zayıf). Diğerleri 4-sahne-medyan.
- Metrik: mahalle NDVI-medyanı (Ağu-Eyl çok-sahne). NDBI destekleyici kullanılmadı (bu tur NDVI-odaklı; tek-karar-yasağı korundu).

## CEVAPLAYAMADIKLARIM / A04 DÜRÜST
- **1985-öncesi** (Kavacık/kıyı-çekirdek dönüşümü) — Landsat-arşivi 1984'te başlıyor, öncesi yok.
- **TM↔OLI kesin-kalibrasyon** — 2010-2015 penceresindeki NDVI-artışın ne-kadarı sensör ne-kadarı gerçek, ayıramadım.
- **Mahalle-altı conversion** — küçük villa/site NDVI-mahalle-medyanını kımıldatmıyor (Riva/Ortaçeşme yeni-gelişimi bu yüzden görünmez); piksel-düzeyi bu turda çıkarılmadı.
- **'Denedim, conversion-yok' bir sonuçtur (A04):** yöntem-başarısız değil; Beykoz'da izlenecek-tarihsel-conversion büyük-ölçüde yok (eski-yerleşik + korunan-orman).

---
*CC-TT-MAP · $0 · A04 · #21-B · Standing#34 (tek-kaynak Landsat) · L7-YASAK-kuralı · kanon-CDSE-dokunulmadı · V16.*