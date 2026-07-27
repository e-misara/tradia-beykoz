# BEYKOZ ARAZİ-BİÇİMİ — EN DERİN ÖLÇÜM · CC-TT-MAP

**Üreten:** CC-TT-MAP · **Tarih:** 2026-07-26 · **Sprint:** MAP26 · **Yöntem:** Sentinel-2 + WorldCover(10m) + OSM(otoyol) — hepsi ücretsiz
**Kaynak (#21-B):** yapılaşma/yeşil `ttmap_nokta.jsonl` · değişim `ttmap_degisim.jsonl` · arazi-örtüsü **esa-worldcover 10m (MPC, 2021)** · otoyol **OpenStreetMap/Overpass** · piksel-değişim **Sentinel-2 L2A (MPC, 2016↔2025)**

> ⚠️ **MAP25 DÜZELTMESİ (bu turun baş-bulgusu):** MAP25'te otoyol-koridoru yaklaşıktı ve zayıf bir 'köprü-etkisi' göstermişti. Bu turda OSM'den **gerçek O-7/YSS geometrisi** çekildi → köprü-etkisi **ÇÜRÜDÜ** (aşağıda G4). Büyüme kıyı-kaynaklı, köprüyle ilgisiz.

## G1 — ARAZİ ÖRTÜSÜ DETAY (WorldCover 10m, her mahalle % kırılım)

> 'Orman' tek-etiket değil: **agac_koru** (TreeCover=sık-ağaç/koru) ile **maki_calilik** (Shrubland=maki/çalı) WorldCover'da ayrı sınıf. Beykoz'da baskın **agac_koru**; maki çok-az.

| Mahalle | yapılı | agac_koru | maki_çalı | çayır | tarım | su | Etiket |
|---|---|---|---|---|---|---|---|
| kavacik | 66.5 | 31.7 | 0 | 1.6 | 0.1 | 0 | 🟢 |
| soguksu | 61.4 | 38.3 | 0 | 0.3 | 0 | 0 | 🟢 |
| cigdem | 60.5 | 36.0 | 0 | 3.2 | 0.1 | 0 | 🟢 |
| camlibahce | 57.9 | 41.6 | 0 | 0.4 | 0 | 0 | 🟢 |
| yalikoy | 49.8 | 46.0 | 0 | 2.8 | 0 | 0.9 | 🟢 |
| ortacesme | 49.7 | 43.5 | 0 | 6.0 | 0.3 | 0 | 🟢 |
| cubuklu | 49.6 | 47.6 | 0.1 | 1.4 | 0 | 0.6 | 🟢 |
| incirkoy | 47.3 | 51.0 | 0 | 1.3 | 0 | 0.3 | 🟢 |
| pasabahce | 47.3 | 44.6 | 0 | 4.2 | 0 | 2.8 | 🟢 |
| yeni | 39.3 | 59.5 | 0 | 0.9 | 0.1 | 0 | 🟡 |
| goksu | 37.0 | 53.7 | 0 | 8.0 | 0 | 1.1 | 🟡 |
| gumussuyu | 34.6 | 63.9 | 0 | 1.2 | 0 | 0.1 | 🟡 |
| goztepe | 34.6 | 60.2 | 0.2 | 4.0 | 0.5 | 0.2 | 🟡 |
| acarlar | 26.5 | 72.0 | 0 | 0.8 | 0 | 0 | 🟡 |
| kanlica | 22.3 | 75.4 | 0 | 1.0 | 0 | 0.8 | 🟡 |
| ruzgarlibahce | 21.5 | 74.2 | 0.2 | 2.9 | 0.1 | 0.2 | 🟡 |
| anadolu_hisari | 20.5 | 75.6 | 0 | 2.9 | 0 | 0.8 | 🟡 |
| tokatkoy | 17.6 | 81.6 | 0 | 0.8 | 0 | 0 | ⬜ |
| merkez | 15.6 | 82.0 | 0.2 | 1.3 | 0.5 | 0 | ⬜ |
| cengeldere | 14.8 | 78.4 | 0.1 | 5.7 | 0.4 | 0 | ⬜ |
| cavusbasi_ciftlik | 14.2 | 76.4 | 0.3 | 7.9 | 0.4 | 0.3 | ⬜ |
| ornekkoy | 10.3 | 87.9 | 0 | 1.8 | 0 | 0 | ⬜ |
| elmali | 8.8 | 89.0 | 0 | 2.1 | 0 | 0 | ⬜ |
| gorele | 7.4 | 91.6 | 0 | 1.0 | 0 | 0 | ⬜ |
| baklaci | 7.1 | 85.4 | 0.3 | 6.1 | 0.5 | 0.3 | ⬜ |
| fatih | 6.9 | 92.7 | 0 | 0.2 | 0 | 0.2 | ⬜ |
| akbaba | 5.3 | 93.2 | 0 | 1.4 | 0 | 0 | ⬜ |
| yavuz_selim | 5.2 | 84.5 | 0.6 | 7.8 | 1.8 | 0 | ⬜ |
| zerzavatci | 4.9 | 91.3 | 0 | 3.0 | 0.7 | 0 | ⬜ |
| alibahadir | 4.7 | 65.5 | 0.1 | 20.5 | 6.8 | 0.5 | ⬜ |
| poyrazkoy | 4.5 | 87.4 | 0.3 | 5.7 | 0.5 | 1.2 | ⬜ |
| riva | 4.4 | 63.1 | 0.4 | 25.3 | 1.8 | 1.4 | ⬜ |
| anadolu_kavagi | 4.2 | 92.9 | 0 | 0.9 | 0.1 | 2.0 | ⬜ |
| cumhuriyetkoy | 3.2 | 80.9 | 0.1 | 10.4 | 4.0 | 0.9 | ⬜ |
| pasamandira | 2.8 | 86.5 | 0.2 | 9.4 | 0.1 | 0.8 | ⬜ |
| dereseki | 2.7 | 95.0 | 0 | 2.1 | 0.1 | 0 | ⬜ |
| ishakli | 2.6 | 84.2 | 0.2 | 11.7 | 0.4 | 0.4 | ⬜ |
| anadolufeneri | 2.0 | 85.1 | 0.6 | 10.3 | 0.8 | 0.6 | ⬜ |
| ogumce | 1.8 | 88.2 | 0 | 9.0 | 0.4 | 0 | ⬜ |
| mahmutsevketpasa | 1.7 | 91.2 | 0.1 | 6.3 | 0.3 | 0.3 | ⬜ |
| kaynarca | 1.5 | 97.2 | 0.1 | 1.2 | 0.1 | 0 | ⬜ |
| bozhane | 0.8 | 95.0 | 0.1 | 3.1 | 0.3 | 0.2 | ⬜ |
| kilicli | 0.7 | 94.8 | 0 | 4.2 | 0.2 | 0 | ⬜ |
| polonezkoy | 0.5 | 98.0 | 0 | 1.2 | 0.2 | 0 | ⬜ |
| gollu | 0.2 | 88.6 | 0.2 | 9.0 | 1.2 | 0.5 | ⬜ |

**SİT/imar-sınırı:** ⛔ **ölçemedim** — SİT ve imar-durumu HUKUKİ-idari sınırdır, uydudan türetilemez (resmi GIS gerek). WorldCover sadece fiziksel-örtü verir; %98 orman (Polonezköy) fiilî-durumdur, hukukî-koruma-statüsü değil.

## G2 — DEĞİŞİM KONUMU (mahalle-içi piksel, 2016↔2025)

> Yöntem: her piksel 2016-NDBI<0 (yapılı-değil) → 2025-NDBI>0 (yapılı) = **yeni-yapı pikseli**. Kaynak Sentinel-2 MPC, iki-uç AYNI-kaynak (karıştırma-yok).

| Mahalle | Yeni-yapı | Mahalle-içi konum |
|---|---|---|
| ortaçeşme | %17,1 (1389px) | güney-doğu ~(41,146; 29,094) |
| yalıköy | %10,5 (1074px) | güney-doğu ~(41,141; 29,085) |

İki büyüyen-mahallede de yeni-yapılaşma **güney-doğu** kesimde yoğunlaştı (Boğaz'a bakan alt-yamaç). *Kaynak: Sentinel-2 piksel-diff.* Diğer 43 mahalle bu turda piksel-düzeyi çıkarılmadı (yalnız en-net iki büyüyen).

## G3 — GELİŞİM-İVMESİ SKORU (ısı-haritası uydu-ayağı)

> Skor = yapılaşma-net − yeşil-net (yapılaşma↑ + yeşil↓ → yüksek-ivme). *Kaynak: ttmap_degisim.jsonl.*
> ⚠️ ⬜ mahallelerde yapılaşma WC-düzeltmeyle düz(~0) → skorları **yalnız yeşil-kaybını** yansıtır (yeni-yapı-değil); işaretlendi.

| Mahalle | İvme | yapı-net | yeşil-net | Etiket | Not |
|---|---|---|---|---|---|
| merkez | +19.1 | +0.0 | -19.1 | ⬜ | yeşil-kaybı(⬜ yapı-flatten) |
| ortacesme | +18.9 | +10.0 | -8.9 | 🟢 |  |
| yalikoy | +17.1 | +8.4 | -8.7 | 🟢 |  |
| camlibahce | +9.8 | +4.0 | -5.8 | 🟢 |  |
| pasabahce | +9.3 | +3.4 | -5.9 | 🟢 |  |
| cigdem | +5.2 | +0.6 | -4.6 | 🟢 |  |
| gumussuyu | +4.6 | +2.4 | -2.2 | 🟡 |  |
| tokatkoy | +3.5 | +0.0 | -3.5 | ⬜ | yeşil-kaybı(⬜ yapı-flatten) |
| cumhuriyetkoy | +2.0 | +0.0 | -2.0 | ⬜ | yeşil-kaybı(⬜ yapı-flatten) |
| zerzavatci | +1.9 | +0.0 | -1.9 | ⬜ | yeşil-kaybı(⬜ yapı-flatten) |
| ... | | | | | |
| goksu | -8.2 | -4.4 | +3.8 | 🟡 | doygun/gerileyen |
| acarlar | -9.1 | -2.6 | +6.5 | 🟡 | doygun/gerileyen |
| goztepe | -11.9 | -6.6 | +5.3 | 🟡 | doygun/gerileyen |

**Gerçek-yapılaşma-ivmesi lideri (🟢🟡, yapı-net-pozitif):** Ortaçeşme (+18,9) · Yalıköy (+17,1) · Çamlıbahçe (+9,8). Kavacık/Göztepe **negatif** (doygun-gerileyen).

## G4 — KÖPRÜ/OTOYOL GERÇEK GEOMETRİSİ (OSM) → MAP25 ÇÜRÜTÜLDÜ

OSM'den 2 mesafe hesaplandı: (a) **en-yakın-motorway** (O-1/O-2 eski-köprüler dahil), (b) **sadece O-7/YSS+Şile** (2016-sonrası yeni-kuzey sistemi).

| Grup (kentsel 🟢🟡) | Ort net-değişim |
|---|---|
| O-7/YSS'ye YAKIN (<3km) — 1 mahalle | **−1,5** |
| O-7/YSS'ye UZAK (≥3km) — 16 mahalle | **+0,6** |

**Büyüyenlerin gerçek O-7 mesafesi:** Ortaçeşme +10,0 @ **6,3km** · Yalıköy +8,4 @ **7,1km** · Çamlıbahçe +4,0 @ 6,4km.

**Bulgu:** Büyüyen mahalleler YSS-otoyoluna **6-7km uzak**, hepsi Boğaz-kıyı bandında. O-7-yakın kentsel-mahalle büyümüyor. → **'Köprü büyüme getirdi' tezi gerçek-geometriyle ÇÜRÜDÜ; büyüme kıyı/güney-Beykoz kaynaklı.** (MAP25 karışım-uyarısı doğrulandı.)

**⬜ orman-köyleri, O-7'ye GERÇEK mesafe (dönüşüm-baskısı adayı, KONUM-sinyali):**

| Köy | O-7 km | En-yakın-motorway km | Örtü |
|---|---|---|---|
| alibahadir | 0.3 | 0.0 | agac_koru %66 |
| anadolufeneri | 0.4 | 0.4 | agac_koru %85 |
| poyrazkoy | 0.6 | 0.6 | agac_koru %87 |
| pasamandira | 0.7 | 0.7 | agac_koru %86 |
| ogumce | 1.2 | 1.2 | agac_koru %88 |
| baklaci | 1.4 | 1.4 | agac_koru %85 |
| yavuz_selim | 1.9 | 1.9 | agac_koru %84 |

⬜ köylerin 7'i O-7'ye <2km ama hepsi hâlâ orman (dönüşüm henüz-YOK). 2016-köprüsünden 10 yıl sonra bile O-7-bitişik köyler yapılaşmadı — **baskı-adayı, değişim-değil.**

## CEVAPLAYAMADIKLARIM

- **SİT/imar-durumu/koruma-statüsü** — hukukî-idari veri, uydudan çıkmaz (resmi GIS gerek). ⛔
- **Piksel-değişimin "ne"si** — NDBI yeni-yapı-yüzeyi der ama 'konut mu/AVM mi/yol mu/hafriyat mı' ayıramaz (spektral-sınır).
- **43 mahallenin piksel-düzeyi** — bu turda yalnız 2 büyüyen çıkarıldı; tam-42 piksel-haritası ölçmedim.
- **maki vs koru saha-doğrulaması** — WorldCover-sınıfına güvendim; yer-doğrulaması yapmadım.
- **Köprü nedenselliği** — 2016-öncesi baseline yok (tarihsel-eksen rafta); korelasyon bile artık kıyı-lehine, nedensellik kurulamaz.
- **Kaç bina/kat/konut** — bina-sayımı yok (ms-buildings ODbL-kapalı); fiyat/değer ölçmüyorum (TT-AI işi).

---
*CC-TT-MAP · $0 (Sentinel/WorldCover/OSM ücretsiz) · A04 · #21-B · kaynak-karıştırma-yasağı (MPC-2016↔MPC-2025 tek-kaynak; canon CDSE'ye dokunulmadı) · V16.*