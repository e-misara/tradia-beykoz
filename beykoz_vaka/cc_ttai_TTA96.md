# Beykoz Bina + POI Derinlik — CC-TT-AI TTA96

**Üretici:** CC-TT-AI · **Tarih:** 2026-07-26 · **Maliyet:** $0 · A04 · V37 (evren salt-okuma, YAZILMADI)
**Bu sprint iki duvarı aştı:** (1) "bina bayrağı → gerçek rakam" · (2) geometri-duvarı (POI→mahalle join, %0 poligon idi)

> **Kaynaklar (#21-B):**
> `İBB-2017` = İBB CKAN "2017 Yılı Mahalle Bazlı Bina Sayıları" (mahalle-bazli-bina-analiz-verisi, İBB Açık-Veri lisansı) — ⚠️ **2017 verisi, 8 yıl eski**
> `OSM-POI` = OSM admin_level=8 poligon (Overpass, ODbL) × landgold POI 139.989 (⚠️ Tradia-DIŞI, salt-okundu) nokta-poligon join — **retail/servis POI'si; ofisler OSM'de eksik-haritalı**
> **Kova:** [VERİ]=ölçüldü · [HİPOTEZ]=başka-CC doğrular · [ALGI]=AI-algısı

---

## 1. G1 — "BİNALARIN BİLGİSİ NEREDE?" → KAPANDI  *(kaynak: İBB-2017)*

| Beykoz geneli (2017) | Değer | Kova |
|---|---:|---|
| **Toplam bina** | **51.201** | [VERİ] |
| 1980-öncesi (40+ yaş) | 15.981 (%31,2) | [VERİ] |
| 1980–2000 arası | 18.352 (%35,8) | [VERİ] |
| 2000-sonrası | 16.868 (%32,9) | [VERİ] |
| **1–4 kat (az-katlı)** | **48.690 (%95,1)** | [VERİ] |
| 5–9 kat | 2.390 (%4,7) | [VERİ] |
| 9–19 kat (yüksek) | **121 (%0,2)** | [VERİ] |

**★ İki yapısal gerçek (veri):**
1. **Beykoz ezici çoğunlukla AZ-KATLI** — binaların %95'i 1-4 kat. Yüksek-yapı neredeyse yok (121 bina, %0,2). Boğaz/orman silüet-koruması + su-havzası imar-kısıtıyla tutarlı → **dikey-yoğunlaşma yok, yatay-müstakil doku.**
2. **Yaş dengeli ama %31 bina 40+ yaşında** (1980-öncesi 15.981) → kentsel-dönüşüm/deprem-riski tabanı burada (özellikle İncirköy 2043, Çubuklu 1414, Gümüşsuyu 1354 eski-stok).

---

## 2. G1 tablo — 45 MAHALLE BİNA (yaş+kat) + POI  *(İBB-2017 · OSM-POI)*

| Mahalle | Bina | 1980ö | 80-00 | 00+ | 1-4k | 5-9k | 9-19k | POI |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Yeni Mahalle | 3.444 | 1046 | 1750 | 648 | 3366 | 78 | 0 | 10 |
| Çubuklu | 3.335 | 1414 | 1493 | 428 | 3110 | 224 | 1 | 26 |
| İncirköy | 3.237 | 2043 | 775 | 419 | 3124 | 113 | 0 | 17 |
| Gümüşsuyu | 3.151 | 1354 | 1211 | 586 | 3087 | 64 | 0 | 26 |
| Tokatköy | 2.772 | 995 | 1366 | 411 | 2688 | 84 | 0 | 8 |
| Acarlar (Acarkent) | 2.240 | 3 | 1846 | 391 | 1977 | 262 | 1 | 4 |
| **Kavacık** | **1.989** | 959 | 667 | 363 | 1296 | **606** | **87** | **74** |
| Çiğdem | 1.891 | 962 | 752 | 177 | 1793 | 98 | 0 | 1 |
| Rüzgarlıbahçe | 1.704 | 536 | 826 | 342 | 1618 | 58 | **28** | 28 |
| Soğuksu | 1.562 | 378 | 925 | 259 | 1470 | 92 | 0 | 2 |
| Ortaçeşme | 1.548 | 594 | 705 | 249 | 1517 | 31 | 0 | 15 |
| Yavuz Selim | 1.411 | 30 | 18 | 1363 | 1392 | 19 | 0 | 1 |
| Riva | 1.377 | 8 | 64 | **1305** | 1367 | 9 | 1 | 0 |
| Yalıköy | 1.328 | 740 | 346 | 242 | 1295 | 33 | 0 | 20 |
| Beykoz Merkez | 1.212 | 712 | 291 | 209 | 1147 | 64 | 1 | 47 |
| Çengeldere | 1.190 | 26 | 3 | 1161 | 1159 | 31 | 0 | 2 |
| Çiftlik | 1.105 | 31 | 0 | 1074 | 1079 | 26 | 0 | 1 |
| Çamlıbahçe | 1.069 | 699 | 255 | 115 | 1042 | 27 | 0 | 2 |
| Örnekköy | 1.054 | 20 | 676 | 358 | 1044 | 10 | 0 | 0 |
| Baklacı | 1.045 | 21 | 0 | 1024 | 1034 | 11 | 0 | 2 |
| Göztepe | 1.040 | 189 | 294 | 557 | 904 | 135 | 1 | 4 |
| Elmalı | 903 | 92 | 501 | 310 | 880 | 23 | 0 | 0 |
| Kanlıca | 743 | 387 | 206 | 150 | 658 | 84 | 1 | 4 |
| Paşabahçe | 741 | 474 | 166 | 101 | 694 | 47 | 0 | 2 |
| Mahmutşevketpaşa | 734 | 213 | 254 | 267 | 727 | 7 | 0 | 0 |
| Dereseki | 722 | 130 | 222 | 370 | 718 | 4 | 0 | 0 |
| Akbaba | 696 | 298 | 210 | 188 | 682 | 14 | 0 | 0 |
| Cumhuriyet | 682 | 205 | 194 | 283 | 679 | 3 | 0 | 0 |
| Anadolu Hisarı | 663 | 362 | 163 | 138 | 619 | 44 | 0 | 3 |
| İshaklı | 656 | 64 | 213 | 379 | 655 | 1 | 0 | 0 |
| Görele | 655 | 30 | 412 | 213 | 650 | 5 | 0 | 0 |
| Fatih | 619 | 17 | 0 | 602 | 583 | 36 | 0 | 1 |
| Göksu | 605 | 354 | 126 | 125 | 580 | 25 | 0 | 16 |
| Paşamandıra | 559 | 50 | 269 | 240 | 559 | 0 | 0 | 0 |
| Polonezköy | 472 | 105 | 155 | 212 | 469 | 3 | 0 | 4 |
| Anadolu Feneri | 416 | 42 | 73 | 301 | 414 | 2 | 0 | 0 |
| Anadolu Kavağı | 409 | 93 | 163 | 153 | 402 | 7 | 0 | 12 |
| Öğümce | 352 | 81 | 161 | 110 | 352 | 0 | 0 | 0 |
| Kılıçlı | 332 | 0 | 39 | 293 | 331 | 1 | 0 | 0 |
| Poyrazköy | 306 | 89 | 12 | 205 | 300 | 6 | 0 | 3 |
| Alibahadır | 303 | 22 | 151 | 130 | 302 | 1 | 0 | 1 |
| Zerzavatçı | 286 | 43 | 157 | 86 | 284 | 2 | 0 | 1 |
| Bozhane | 278 | 47 | 82 | 149 | 278 | 0 | 0 | 0 |
| Kaynarca | 218 | 3 | 124 | 91 | 218 | 0 | 0 | 0 |
| Göllü | 147 | 20 | 36 | 91 | 147 | 0 | 0 | 0 |

---

## 3. G2 — KAVACIK: GEOMETRİ-DUVARI AŞILDI  *(kaynak: OSM-POI)*

**Yöntem:** OSM admin_level=8 ile 45 Beykoz mahalle poligonu çekildi (birleşik alan **310 km² = gerçek Beykoz**, doğrulandı) → 4.058 bbox-POI nokta-poligon join → **337 POI Beykoz'a atandı.** (TTA95'te poligon %0 idi; artık gerçek join var.)

| Kavacık | Değer | Kova |
|---|---:|---|
| **Poligon-içi POI (gerçek)** | **74 — Beykoz #1** | [VERİ] |
| — kategori | restaurant 18, hairdresser 9, cafe 8, bank 8, fast_food 8, market 3, kuyum 3, eczane 3 | [VERİ] |
| **5-9 kat bina** | **606 (Beykoz'da açık ara #1)** | [VERİ] İBB-2017 |
| **9-19 kat bina** | **87 (Beykoz toplam 121'in %72'si!)** | [VERİ] İBB-2017 |

> **★ "Göz bebeği" iddiası artık ÇİFT-DATA-TEYİTLİ:** (1) POI yoğunluğu #1 (74) · (2) **dikey-yapı profili** — Beykoz'un neredeyse tüm yüksek/orta-kat binaları Kavacık'ta. Kavacık, yatay-Beykoz içinde **tek dikey/ticari çekirdek.** Bu artık [ALGI] değil, [VERİ].
> **DÜRÜST SINIR (A04):** 74 POI **retail/servis** (lokanta/kuaför/banka). Kavacık'ın asıl ünü **ofis/plaza** yoğunluğu — ofisler OSM'de POI olarak büyük ölçüde haritalanmamış. Yani 74, Kavacık'ın ticari-liderliğini KANITLAR ama ofis-hacmini **eksik-gösterir.** Gerçek ofis-sayısı bu değildir.

---

## 4. G3 — ISI-AYAĞI: POI YOĞUNLUĞU (ticari canlılık sıralaması)  *(OSM-POI)*

| # | Mahalle | POI | Karakter (kategori) |
|---|---|---:|---|
| 1 | **Kavacık** | 74 | iş/servis çekirdeği (lokanta+banka+kuaför) |
| 2 | Beykoz Merkez | 47 | eski-merkez çarşı (fast-food+kafe) |
| 3 | Rüzgarlıbahçe | 28 | Kavacık-uzantısı (28 bina 9-19kat!) |
| 4 | Gümüşsuyu | 26 | yerleşik-konut retail |
| 4 | Çubuklu | 26 | konut-retail (market+ATM+banka) |
| 6 | Yalıköy | 20 | çarşı (kuyum+bakkal) |
| 7 | İncirköy | 17 | mahalle-retail |
| 8 | Göksu | 16 | sahil-lokanta |
| 9 | Ortaçeşme | 15 | eczane+kafe |
| 10 | Anadolu Kavağı | 12 | **turizm** (7 balık-lokantası) |

**Isı-ayağı bulguları:** Ticari canlılık **Kavacık–Merkez–Rüzgarlıbahçe** üçgeninde toplanmış. Boğaz-yalı hattı (Kanlıca 4, Paşabahçe 2, Anadolu Hisarı 3) POI-seyrek → **prestij ≠ ticari-yoğunluk** (yalı-hattı sakin-konut, çarşı değil). Kuzey-köyler ~0 POI (kırsal). *Not: Bu ısı-ayağı OSM-POI; TT-MAP yapılaşma-ısısı + İhale/Basın ile birleşince tam ısı-haritası çıkar.*

**Bina-yaşı büyüme-sinyali (G3 köprü-bağı):** Riva (%95 post-2000), Yavuz Selim (%97), Çengeldere (%98), Çiftlik (%97), Baklacı (%98) = **neredeyse tüm binası 2000-sonrası** → kuzey/kıyı yeni-gelişim. **[HİPOTEZ] Riva köprü-ivmesi bina-yaşıyla tutarlı** — ama İBB-2017 kestiği için 2017-sonrası köprü-etkisini MAP25 (Sentinel) ölçmeli.

---

## 5. CEVAPLAYAMADIKLARIM (dürüstlük sınırı — AI/veri UYDURAMAZ)

| Soru | Neden | Kim |
|---|---|---|
| **2025 güncel** bina sayısı | Elimdeki İBB seti **2017** — 8 yıl eski; 2017-sonrası inşaat yok | İBB güncel-set / MAP25 |
| Kavacık'ta **kaç ofis/plaza** | OSM ofisleri POI-haritalamıyor; 74 retail/servis | Saha/İBB işyeri-ruhsatı |
| Bina **değeri / m²-fiyat** | Bina *sayısı* var, *fiyat* yok | Emlak-veri |
| Bina **sağlamlık/deprem-risk** puanı | Yalnız yaş-kohortu var (40+ %31), risk-skoru yok | İBB VDYM riskli-yapı seti |
| Sokak-düzeyi bina dağılımı | Veri **mahalle**-kırılımlı, sokak değil | Kadastro/UAVT |
| Köprü-etkisi **gerçekleşti mi** | Bina-yaşı sinyal veriyor ama [HİPOTEZ] | MAP25 Sentinel |

---

## SONUÇ

```
TTA96 · İKİ DUVAR AŞILDI · $0 · evren DOKUNULMADI (V37)
G1: Beykoz 51.201 bina (İBB-2017) — %95 az-katlı, %31 40+yaş; bayrak→GERÇEK-RAKAM oldu (45/45 mahalle)
G2: Geometri-duvarı aşıldı (OSM admin_level=8 poligon 310km²) → Kavacık 74 POI = Beykoz #1; +87 bina 9-19kat (=Beykoz'un %72'si) → göz-bebeği ÇİFT-DATA-TEYİTLİ
G3: Isı-ayağı Kavacık-Merkez-Rüzgarlıbahçe üçgeni; yalı-hattı prestijli AMA POI-seyrek (prestij≠çarşı); Riva %95 post-2000 (köprü-hipotez bina-yaşıyla destekli)
SINIR: bina 2017-eski · OSM ofisleri eksik · fiyat/risk yok → hepsi ilgili-CC'ye
```
