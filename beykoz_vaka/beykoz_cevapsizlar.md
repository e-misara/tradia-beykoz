# Beykoz Cevapsızlar — CC-TT-AI TTA99 (soru bankası × 5-tur çakıştırma)

**Üretici:** CC-TT-AI · **Tarih:** 2026-07-27 · $0 · A04
**Amaç:** TTA98 soru-bankası × TTA93-98+MAP28 cevapları çakıştırıldı → **"hâlâ cevapsız" listesi** = **SIG4 §8 'Bilmediklerimiz'** girdisi.
**Kapsam:** Beykoz 45/45 mahalle.

> **Durum etiketi:** ✅ CEVAPLANDI (veri) · 🟡 KISMİ · 🔴 CEVAPSIZ · ⛔ AÇIK-KAPANMAZ (açık-veri/araç yok)

---

## 1. ÇAKIŞTIRMA ÖZETİ (ne kapandı, ne açık)

| Soru | Durum | Kapatan tur | Kapsam |
|---|---|---|---|
| Bina sayısı / kat / yaş | ✅ | TTA96 (İBB-2017) | 45/45 (51.201 bina) |
| Deprem ağır-hasar / barınma | ✅ | TTA97 (İBB-2023) | 45/45 (556 hasar) |
| Mahalle alanı (poligon) | ✅ | TTA98 (OSM) | 43/45 |
| POI / işlev yoğunluğu | 🟡 | TTA96/98 | 29/45 POI>0 (16 mahalle POI=0) |
| Ortaçeşme %17,1 (MAP26) | ✅ | MAP28+TT-MAP | **çürütüldü** (NDBI+NDVI net≈0) |
| Kamu tesis (okul/sağlık/cami/karakol) | 🟡 | TTA98 (OSM) | **13/45** (32 eksik) |
| Kimlik / tarihçe / ad-kökeni | 🟡 | TTA98 | **12/45** (33 eksik) |
| Baskın işlev (konut/ticaret/villa) | 🟡 | TTA98 [HİPOTEZ] | 45/45 ama doğrulanmadı |

---

## 2. 🔴 HÂLÂ CEVAPSIZ — SIG4 §8 'Bilmediklerimiz' girdisi

### 2A. Fiziksel / kısıt (en yüksek öncelik)

| # | Cevapsız soru | Durum | Hedef-CC/kaynak | Öncelik |
|---|---|---|---|---|
| 1 | **★ İSKİ havza-koruma SINIRI (parsel-düzeyi)** — 17 mahalle "havza" işaretli ama yalnız [HİPOTEZ-coğrafi]; kesin-sınır YOK | 🔴 **S85'te HÂLÂ AÇIK** | İSKİ / İmar | **kritik** |
| 2 | **Boğaziçi Kanunu (2960) öngörünüm/geri-görünüm imar-yasağı** — havzadan AYRI 2. kısıt, hiç haritalanmadı | 🔴 | İBB Boğaziçi imar | **kritik** |
| 3 | Rakım / eğim (DEM) | 🔴 | **TT-MAP DEM** (SRTM/Copernicus) | orta |
| 4 | Hangi mahalle ASLA gelişemez (tam-kilitli vs kısmi) | 🔴 | İSKİ + İmar | yüksek |

### 2B. Büyüme / değişim (araç-engelli)

| # | Cevapsız soru | Durum | Neden | Kim |
|---|---|---|---|---|
| 5 | **2017→2025 bina-artışı (mahalle)** | ⛔ | açık-veri İstanbul-geneli (TTA97) + Landsat çapraz-sensör başarısız (MAP28) | **TT-MAP Sentinel-2** |
| 6 | Köprü-etkisi izolasyonu (kıyı vs köprü) | ⛔ | 2016 sensör-sınırı=köprü-yılı çakışması (MAP28) | TT-MAP Sentinel |
| 7 | Değişim-tipi (konut/villa/lojistik/kamu) | 🔴 | 30m NDBI yetersiz | TT-MAP 10m + İhale-join |

### 2C. Ekonomi / mülkiyet (açık-veri yok)

| # | Cevapsız soru | Durum | Kim |
|---|---|---|---|
| 8 | **Kavacık ofis/plaza hacmi** | ⛔ | açık-veride mahalle-ofis yok; GSM sanayi-tipi Beykoz=2 (TTA97) → ticaret-odası/saha |
| 9 | Tapu/mülkiyet kamu-vakıf-özel dağılımı | 🔴 | TKGM / CİMER / **CC-İhale** |
| 10 | Askeri + KİT parsel-devri (Poyrazköy/Paşabahçe-cam/Beykoz-deri) | 🔴 | Milli Emlak / Özelleştirme / Basın |
| 11 | Emlak fiyat-gradyanı sahil↔tepe (TTA93 ALGI'yı ölçüme çevir) | 🔴 | emlak-veri / **CC-Finans** |
| 12 | Bina değeri / kira | 🔴 | emlak-veri |

### 2D. Sosyal / altyapı (hiç sorulmamıştı → serbest)

| # | Cevapsız soru | Kim |
|---|---|---|
| 13 | Nüfus yoğunluğu (kişi/km²) | TÜİK |
| 14 | Kamu-hizmet açığı (okul/hastane başına nüfus) | TÜİK+OSM |
| 15 | 6306 ilan-edilmiş riskli-alan var mı | Çevre-Şehircilik |
| 16 | Kıyı-kenar-çizgisi kısıtı | Çevre-Şehircilik |
| 17 | Raylı-sistem/metro gelecek-planı | İBB Ulaşım |
| 18 | Turizm yatak-kapasitesi (Polonezköy/A.Kavağı) | Kültür-Turizm |
| 19 | 2/B orman-vasfı-kaybetmiş araziler | OGM |
| 20 | Yeşil-alan/orman oranı (yapılaşabilir-net alan) | OSM landuse+OGM |

### 2E. Kimlik boşlukları (33 mahalle, düşük öncelik ama sayıca büyük)

Ad-kökeni/tarihçe eksik olan 33 mahalle → **Wikipedia / belediye-arşiv / CC-Sosyal**. Kamu-tesis eksik 32 mahalle → **OSM amenity ek-tara / belediye**.

---

## 3. ★ EN KRİTİK 3 (SIG4 §8'e öne-çıkan)

1. **İSKİ havza-sınırı (S85 açık)** — 17 mahallenin kaderi buna bağlı; hâlâ [HİPOTEZ], kesin-sınır yok. *Ters-değer tezi (kısıtlı-komşu → kısıtsız-prim) bu sınır olmadan test edilemez.*
2. **Boğaziçi Kanunu imar-yasağı** — havzadan bağımsız ikinci-kilit; **hiç haritalanmadı** (4 turda gözden kaçtı).
3. **2017→2025 bina-artışı** — açık-veri veremedi, Landsat başarısız → **yalnız TT-MAP Sentinel-2** çözebilir.

---

## SONUÇ

```
TTA99 çakıştırma · $0 · A04
CEVAPLANDI: bina 45/45 · deprem 45/45 · alan 43/45 · Ortaçeşme %17.1 çürütüldü
KISMİ: kamu-tesis 13/45 · kimlik 12/45 · POI 29/45
🔴 CEVAPSIZ (SIG4 §8): 20 sistemik + 33 kimlik-boşluğu
★ İSKİ havza-sınırı S85'TE HÂLÂ AÇIK (kritik) · Boğaziçi-Kanunu hiç-haritalanmadı · 2017→2025 büyüme yalnız Sentinel
→ Signals 'soruldu mu' × bu 'sorulmalı mıydı/cevaplandı mı' 5.tur çakışması hazır
```
