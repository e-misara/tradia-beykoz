# Beykoz Güncel Bina + Kavacık Ofis + Deprem — CC-TT-AI TTA97

**Üretici:** CC-TT-AI · **Tarih:** 2026-07-26 · **Maliyet:** $0 · A04 · V37 (evren salt-okuma, YAZILMADI)
**Üç veri sorusu:** ikisi DÜRÜST-ÇIKMAZ (açık-veri yok/yanlış-tip), biri ALTIN (mahalle-düzeyi deprem).

> **Kaynaklar (#21-B):** `İBB-ruhsat` = İBB CKAN "Yapı Ruhsatına Göre Bina Sayısı" (güncelleme 2025-12, ⚠️İSTANBUL-geneli, Beykoz-kırılımı YOK) · `İBB-GSM` = "İlçe+Sektör 1.Sınıf Gayrisıhhi Müessese" (2020+2025, ⚠️sanayi-tipi, ofis-değil) · `İBB-deprem` = "Deprem Senaryosu Analiz Sonuçları" (2023, mahalle-düzeyi) · `İBB-2017` = TTA96 bina seti

---

## 1. G1 — 2025 BİNA/RUHSAT: DÜRÜST-ÇIKMAZ

**Aranan:** 2017→2025 Beykoz ruhsat-artışı. **Bulgu:** İBB'nin güncel yapı-ruhsatı seti (2025-12 güncelleme) **yalnız İSTANBUL-geneli, yıl-bazlı** — Beykoz/mahalle kırılımı **YOK.** Beykoz mahalle-düzeyi en-güncel bina verisi **hâlâ 2017** (TTA96).

**İstanbul geneli yapı-ruhsatı trendi** (yalnız bağlam, Beykoz-değil):

| Yıl | Toplam bina-ruhsatı | İkamet-dışı (ofis/ticari) |
|---|---:|---:|
| 2017 | 21.918 | 1.702 |
| 2018 | 9.279 | 962 |
| 2019 | 5.265 | 625 |
| 2020 | 7.745 | 753 |
| 2021 | 15.376 | 1.527 |
| 2022 | 15.354 | 1.299 |
| 2023 | 16.953 | 1.406 |
| 2024 | 12.473 | 1.186 |

> **Bağlam-okuması (Beykoz-değil):** İstanbul'da ruhsat 2018-2020 çöktü (kriz), 2021-2023 toparlandı (~15-17K), 2024 tekrar düştü. **Bu Beykoz'a inemez** — ilçe-kırılımı olmayan set. Beykoz 2017-sonrası büyümesi açık-veriden **ölçülemez** → MAP25 (Sentinel yapılaşma-değişim) tek yol.

---

## 2. G2 — KAVACIK OFİS: DÜRÜST-ÇIKMAZ

**Aranan:** OSM ofisleri eksik (TTA96: 74 retail). İBB işyeri/ticaret seti Kavacık ofis-hacmini verir mi? **Bulgu: HAYIR.**

| Denenen kaynak | Sonuç | Neden yetersiz |
|---|---|---|
| İBB GSM (1.sınıf gayrisıhhi müessese) | **Beykoz TOPLAM = 2** (2020 ve 2025 aynı) | GSM = **sanayi/petrokimya-tipi** kirletici tesis; ofis DEĞİL. Beykoz'da ağır-sanayi yok → 2 |
| İlçe+sektör kırılımı | ilçe-düzeyi | Kavacık-mahalle izole edilemez |
| Ticaret-sicili mahalle-yoğunluğu | İBB CKAN'da **YOK** | açık-veride yayınlanmıyor |

> **★ VERDICT (A04):** İBB açık-verisinde **mahalle-düzeyi ofis/işyeri seti YOK.** GSM yanlış-tip (sanayi, Beykoz=2), ilçe-düzeyi. **Kavacık ofis-hacmi açık-veriden ölçülemiyor.** En-iyi mevcut proxy **OSM POI 74 (retail/servis, TTA96)** olarak kalıyor — ki o da ofisleri eksik-gösteriyor. Gerçek ofis-sayısı ancak **ticaret-odası/işyeri-ruhsatı (ücretli/kurumsal)** veya saha-sayımı ile gelir.

---

## 3. G3 — DEPREM RİSK: ALTIN (mahalle-düzeyi)  *(kaynak: İBB-deprem 2023)*

İBB deprem-senaryosu **mahalle-düzeyinde** Beykoz 45 mahalle: hasarlı-bina + can-kaybı + geçici-barınma.

| Beykoz TOPLAM (senaryo) | Değer |
|---|---:|
| Çok-ağır + ağır hasarlı bina | **556** |
| Orta hasarlı bina | 2.756 |
| Can kaybı | 25 |
| Geçici barınma (kişi) | **5.937** |
| Ağır-hasar / toplam-bina (2017: 51.201) | **%1,1** |

### En riskli mahalleler — ağır-hasar bina sayısı

| Mahalle | Ağır-hasar | Orta | %ağır | Barınma | Eski-stok (1980ö) |
|---|---:|---:|---:|---:|---:|
| Yeni Mahalle | 68 | 290 | 2,0 | 656 | 1.046 |
| Çubuklu | 43 | 185 | 1,3 | 483 | 1.414 |
| Gümüşsuyu | 43 | 176 | 1,4 | 357 | 1.354 |
| Çamlıbahçe | 36 | 122 | **3,4** | 356 | 699 |
| Kavacık | 30 | 134 | 1,5 | 545 | 959 |
| Tokatköy | 30 | 137 | 1,1 | 324 | 995 |
| İncirköy | 25 | 149 | 0,8 | 368 | **2.043** |
| Yalıköy | 25 | 83 | 1,9 | 165 | 740 |
| Göksu | 20 | 80 | **3,3** | 140 | 354 |
| Göztepe | 19 | 90 | 1,8 | 295 | 189 |

### ★ DÖNÜŞÜM BASKISI SİNYALİ (eski-stok × deprem-hasar)

TTA96 bulgusu (%31 bina 40+ yaş) + deprem senaryosu birleşince **kentsel-dönüşüm baskısı** en yüksek mahalleler:

| Sıra | Mahalle | Eski-bina (1980ö) | Ağır-hasar | Yorum [HİPOTEZ] |
|---|---|---:|---:|---|
| 1 | **İncirköy** | 2.043 | 25 | en-eski stok — dönüşüm-adayı #1 |
| 2 | **Çubuklu** | 1.414 | 43 | eski+hasar birlikte yüksek |
| 3 | **Gümüşsuyu** | 1.354 | 43 | eski+hasar yüksek |
| 4 | **Yeni Mahalle** | 1.046 | 68 | en-çok ağır-hasar |
| 5 | Tokatköy | 995 | 30 | eski+hasar orta-üst |
| 6 | Kavacık | 959 | 30 | iş-merkezi + eski-stok (dönüşüm-değerli) |

> **Okuma:** Bunlar dönüşüm-baskısının **veri-sinyali** — İncirköy/Çubuklu/Gümüşsuyu eski-stok + deprem-hasar birlikte. Yatırım-diliyle: **dönüşüm-potansiyeli yüksek** ama bu bir [HİPOTEZ]; gerçek dönüşüm-kararı İhale/İmar/Basın (fiili proje) ile doğrulanır. **Deprem-senaryo ≠ kesin-yıkım**, olasılıksal model.

---

## 4. CEVAPLAYAMADIKLARIM (dürüstlük sınırı)

| Soru | Neden | Kim |
|---|---|---|
| Beykoz **2025 bina/ruhsat** (mahalle) | İBB ruhsat İstanbul-geneli, kırılım yok | MAP25 (Sentinel) |
| Kavacık **ofis/plaza sayısı** | Açık-veride mahalle-ofis seti yok; GSM sanayi-tipi | Ticaret-odası / saha |
| Bina **değeri / kira** | Sayı+hasar var, fiyat yok | Emlak-veri |
| Deprem-hasarın **kesinliği** | Senaryo=olasılıksal model, kesin-değil | — (model doğası) |
| Dönüşüm **fiilen başladı mı** | Baskı-sinyali [HİPOTEZ] | İhale + İmar + Basın |
| 2017→2025 Beykoz bina **artışı** | İki uçlu set yok (2017 tek-nokta) | MAP25 zaman-serisi |

---

## SONUÇ

```
TTA97 · $0 · evren DOKUNULMADI (V37) · 3 İBB-CKAN seti çekildi (ruhsat+GSM+deprem)
G1 DÜRÜST-ÇIKMAZ: güncel ruhsat İstanbul-geneli (Beykoz-yok) → 2017 en-güncel mahalle-bina kalıyor; Beykoz büyümesi = MAP25 işi
G2 DÜRÜST-ÇIKMAZ: İBB'de mahalle-ofis seti yok; GSM sanayi-tipi (Beykoz=2, ofis-değil) → Kavacık ofis açık-veriden ölçülemez; OSM POI 74 en-iyi proxy kalıyor
G3 ALTIN: deprem-senaryosu mahalle-düzeyi — Beykoz 556 ağır-hasar bina + 5.937 barınma; dönüşüm-baskısı #1 İncirköy(2043 eski), Çubuklu, Gümüşsuyu, Yeni Mahalle
A04: iki çıkmaz dürüstçe raporlandı (uydurulmadı); deprem senaryo=olasılıksal not düşüldü
```
