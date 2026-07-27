# BEYKOZ VAKA RAPORU — CC-TT-MAP

**Üreten:** CC-TT-MAP · **Tarih:** 2026-07-20 · **Sprint:** MAP24 + MAP25 · **Yöntem:** mevcut ölçüm (yeni-indirme-YOK)
**Kaynak (#21-B, her sayı):** `ttmap_nokta.jsonl` (yapılaşma/yeşil) · `ttmap_degisim.jsonl` (net/güven/yıl) · `istanbul_arazi.jsonl` (WorldCover-etiket) · `istanbul_dem.jsonl` (rakım/eğim) · `geometri/istanbul_967_al8_geom.json` (konum)

> **Birim:** mahalle (bugünkü idari-sınır). **Yapılaşma** = NDBI>0 fraksiyonu (yüzey-oranı, bina-adedi DEĞİL). Etiket = Sentinel↔WorldCover çift-imza (#21-B).

## 1. ÖZET (45 Beykoz mahallesi)

| Metrik | Değer | Kaynak |
|---|---|---|
| Ölçülen mahalle | 45 | ttmap_nokta.jsonl |
| ⬜ kırsal-N/A (orman) | 28 (%62) — 28/28 ağaç | istanbul_arazi.jsonl |
| 🟢 çift-imza kentsel | 9 | kod/etiket.py |
| 🟡 asimetrik | 8 | kod/etiket.py |
| Yeşil% 2025 (ort/medyan) | 82.4 / 88.0 | ttmap_nokta.jsonl |
| Sel-proxy (<10m) | 0 (Boğaz-yamaç; ova yok) | istanbul_dem.jsonl |

## 2. KENTSEL/YARI-KENTSEL MAHALLELER — 2016→2025 (net-sıralı)

| Mahalle | 2016→2025 | Net (p) | Yeşil25 | Etiket | Güven | Yıl | Otoyol-km* |
|---|---|---|---|---|---|---|---|
| ortacesme | 43→53 | +10.0 | 65 | 🟢 | yuksek | 6 | 0.6 |
| yalikoy | 40→48 | +8.4 | 48 | 🟢 | yuksek | 6 | 0.9 |
| camlibahce | 52→56 | +4.0 | 57 | 🟢 | orta | 6 | 1.4 |
| pasabahce | 40→44 | +3.4 | 57 | 🟢 | dusuk | 4 | 1.7 |
| gumussuyu | 28→31 | +2.4 | 80 | 🟡 | dusuk | 6 | 2.0 |
| incirkoy | 43→45 | +1.7 | 71 | 🟢 | dusuk | 5 | 2.7 |
| cigdem | 58→58 | +0.6 | 59 | 🟢 | dusuk | 4 | 2.2 |
| cubuklu | 47→46 | -0.6 | 65 | 🟢 | dusuk | 5 | 2.1 |
| yeni | 42→40 | -1.5 | 74 | 🟡 | dusuk | 5 | 4.9 |
| soguksu | 49→47 | -1.8 | 65 | 🟢 | dusuk | 4 | 3.0 |
| acarlar | 10→7 | -2.6 | 87 | 🟡 | orta | 6 | 4.1 |
| goksu | 34→29 | -4.4 | 72 | 🟡 | orta | 5 | 3.2 |
| kavacik | 56→50 | -5.0 | 50 | 🟢 | yuksek | 5 | 2.7 |
| goztepe | 34→27 | -6.6 | 75 | 🟡 | orta | 5 | 3.9 |
| anadolu_hisari | 20→20 | +0.0 | 84 | 🟡 | dusuk | 5 | 2.3 |
| kanlica | 22→22 | +0.0 | 84 | 🟡 | dusuk | 5 | 1.4 |
| ruzgarlibahce | 22→22 | +0.0 | 81 | 🟡 | dusuk | 5 | 3.9 |

*Otoyol-km = YSS köprüsü/Kuzey Marmara koridoruna kuş-uçuşu (YAKLAŞIK kamu-koordinat, survey-değil).

## 3. ORMAN GERÇEĞİ (⬜ kırsal-N/A, 28 mahalle)

> ⬜ = **"ölçülecek kentleşme YOK"** (orman/imara-kapalı) — **"gelişmiyor" DEĞİL.** Yapılaşma-metriği tanım-gereği-uygulanamaz. Finansçı-okuması: kentleşme değil **koruma-statüsü** ekseni.

| Mahalle | Yeşil% 2025 | Otoyol-km | Mahalle | Yeşil% 2025 | Otoyol-km |
|---|---|---|---|---|---|
| akbaba | 95 | 0.9 | alibahadir | 81 | 1.6 |
| anadolu_kavagi | 96 | 2.8 | anadolufeneri | 92 | 3.7 |
| baklaci | 89 | 8.2 | bozhane | 94 | 4.3 |
| cavusbasi_ciftlik | 82 | 7.2 | cengeldere | 83 | 6.2 |
| cumhuriyetkoy | 91 | 6.5 | dereseki | 96 | 0.0 |
| elmali | 91 | 1.6 | fatih | 93 | 5.3 |
| gollu | 96 | 3.7 | gorele | 92 | 4.8 |
| ishakli | 92 | 7.8 | kaynarca | 98 | 1.5 |
| kilicli | 96 | 7.1 | mahmutsevketpasa | 94 | 1.9 |
| merkez | 63 | 1.4 | ogumce | 93 | 3.4 |
| ornekkoy | 91 | 1.5 | pasamandira | 93 | 1.3 |
| polonezkoy | 99 | 6.3 | poyrazkoy | 92 | 4.0 |
| riva | 77 | 3.1 | tokatkoy | 88 | 1.9 |
| yavuz_selim | 93 | 9.5 | zerzavatci | 94 | 2.9 |

## 4. KÖPRÜ ETKİSİ (MAP25) — 2016-SONRASI örüntü

> ⚠️ **Köprü/otoyol açılışı 2016 = serinin BAŞI.** Köprü-öncesi görülemez (tarihsel-eksen RAFTA); nedensellik kurulamaz. ⚠️ **Karışım:** otoyol-yakın ≈ Boğaz-kıyı/güney-gelişmiş band → köprü-etkisi ile kıyı-etkisi AYRIŞTIRILAMADI.

| Grup (🟢🟡, 17 mahalle) | Ort net (p) | Yıllık-eğim (p/yıl) |
|---|---|---|
| Koridor-YAKIN (<3km, 11) | +2.3 | +0.10 |
| Koridor-UZAK (≥3km, 6) | -2.8 | -0.72 |

Veri şunu gösteriyor: 6 en-büyük-büyüyen mahalle HEPSİ ≤2.7km (Ortaçeşme +10,0@0,6km · Yalıköy +8,4@0,9km). *Kaynak: ttmap_degisim.jsonl + geometri.*

## 5. KAVACIK KESİTİ — "doygun iş-merkezi" tezi (sayıyla)

| Yıl | Yapılaşma% | Yeşil% | NDVI |
|---|---|---|---|
| 2016 | 58.4 | 47.9 | 0.34 |
| 2020 | 52.6 | 48.8 | 0.346 |
| 2022 | 50.4 | 51.6 | 0.365 |
| 2024 | 48.6 | 52.2 | 0.371 |
| 2025 | 52.4 | 50.1 | 0.356 |

**Tez (sayısal):** yapılaşma 2016 %58,4 → 2025 %52,4 (**net −5,0, güven-YÜKSEK**); plato/hafif-düşüş = **yeni-inşaat-yok**. Yeşil %47,9→%50,1. Eğim 7.5° · rakım 96m. *Kaynak: ttmap_nokta.jsonl + ttmap_degisim.jsonl + istanbul_dem.jsonl.*

## 6. ⬜ KÖYLERİN AYRIŞMASI — dönüşüm-baskısı adayları (KONUM-sinyali)

> Kentleşme ölçülemez (orman) ama KONUM ölçülür. Orman-köyü + otoyol-yakını = gelecek dönüşüm-baskısı adayı.

| En-yakın 8 (aday) | km | En-uzak 5 (korunaklı) | km |
|---|---|---|---|
| dereseki | 0.0 |  |  |
| akbaba | 0.9 |  |  |
| pasamandira | 1.3 |  |  |
| merkez | 1.4 | kilicli | 7.1 |
| kaynarca | 1.5 | cavusbasi_ciftlik | 7.2 |
| ornekkoy | 1.5 | ishakli | 7.8 |
| alibahadir | 1.6 | baklaci | 8.2 |
| elmali | 1.6 | yavuz_selim | 9.5 |

**Düzeltme:** Talepte 'otoyol-yakın' sanılan Riva (3,1km) / Poyrazköy (4,0km) / Anadolu Feneri (3,7km) ölçümde ORTA-mesafe (kuzey-KIYI, koridor iç-hatta). En-yakın: Dereseki 0,0 / Akbaba 0,9km.

## CEVAPLAYAMADIKLARIM (ayrı başlık)

- Köprü-ÖNCESİ (2016-öncesi) değişim — seri 2016'da başlıyor, tarihsel-eksen rafta (MAP19). Köprünün 'yol açtığı' değişim kanıtlanamaz.
- Otoyol-hattının KESİN geometrisi — GIS-indirmedim; koridor yaklaşık. Kesin-mesafe için resmi-hat-verisi gerek.
- Köprü-etkisi vs kıyı/güney-gelişme AYRIMI — mekânsal-karışım, mevcut-veriyle çözülemez (kontrol-grubu/öncesi-sonrası tasarımı gerek).
- Kavacık'ta 'kaç ofis/kat/istihdam' — bina/yükseklik/fonksiyon yok (2B-optik).
- ⬜-köylerde imar-plan-değişikliği/proje var mı — idari-veri yok, sadece fiziksel-konum.
- **"Bu sokakta ne oldu"** — mahalle-altı çözünürlük yok (birim=mahalle).
- **"Kaç konut/bina var"** — bina-sayımı yok (NDBI oran ölçer, adet değil; ms-buildings ODbL-kapısı).
- **Fiyat/değer/getiri** — ölçmüyorum (TT-AI/gayrimenkul-zekâsı işi).

---
*CC-TT-MAP · $0 (yeni-indirme-yok) · A04 · #21-B (Sentinel↔WorldCover çift-imza) · kaynak-karıştırma-yasağı · kanon-dokunulmadı (yalnız-okuma). MAP14-İzmir-cephe-geçersizliği bu vakayı etkilemez (İstanbul verisi).*