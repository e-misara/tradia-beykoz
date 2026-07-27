# Vaka: Beykoz — CC-Analiz S53 (Emsal v2 · Vaka Kapanış Sprinti)

**Sprint:** S53 · **Tarih:** 2026-07-27 · **$0** · **V37 uygulandı** (v24 dokunulmadı) · **Dönem etiketi: `S48_UZANTI_2026-Haz-Tem`**

**Kaynak (#21-B):** v25 zengin katman `~/tradia_analiz/data/sahibinden_master_v25_beykoz_zengin_S52.jsonl` (3.293 kayıt, 35 kolon) · PK=(ilan_id, url_slug) · boilerplate<2 filtresi

---

## G1 — Kanonik Taksonomi (bkz. `tip_taksonomi.md`)

| Alt-Tip | Sat | Kir |
|---|---:|---:|
| villa | **646** | 230 |
| arsa | **611** | 18 |
| daire | 255 | **508** |
| ticari | 71 | 306 |
| konut-belirsiz | 183 | 233 |
| bina | 98 | 10 |
| yalı-köşk | 35 | 3 |
| rezidans | 14 | 5 |

**Sınıflanamayan: 67 (%2.0)** — dürüst not (bkz. tip_taksonomi.md).

---

## G2 — ★ EMSAL v2 (Tip × Mahalle × SK)

**Uygun kayıt:** 2.328/3.293 (boilerplate<2 + fiyat aralık makul + m² dolu)

| Hücre Durumu | Sayı |
|---|---:|
| **GÜÇLÜ (n≥8) — YAYIN** | **84** |
| Zayıf (3≤n<7) — iç kullanım | 78 |
| Gizli (n<3) — rakam yok | 88 |

**F6 20-hücre → S53 84 hücre → +4.2× artış.**

### Öne Çıkan Güçlü Hücreler (Satılık)

| Tip | Mahalle | n | Medyan TL/m² | [Q1 – Q3] |
|---|---|---:|---:|---|
| yalı-köşk | Anadolu Hisarı | 9 | **545.455** | 314K – 800K |
| rezidans | Acarlar | 10 | 247.636 | 194K – 263K |
| daire | Acarlar | 53 | **227.600** | 164K – 267K |
| daire | Kanlıca | 15 | 168.750 | 101K – 575K |
| villa | Acarlar | 85 | 245.455 | 190K – 300K |
| villa | Kanlıca | 11 | 200.000 | 158K – 235K |
| villa | Riva | 97 | 164.141 | 113K – 200K |
| daire | Çiğdem | 17 | 183.333 | 166K – 227K |
| villa | Baklacı | 21 | 151.429 | 50K – 240K |
| villa | Ortaçeşme | 14 | **67.727** | 48K – 96K |
| villa | Tokatköy | 15 | 34.884 | 24K – 109K |

### Kira Hücreleri (n≥8)

| Tip | Mahalle | n | Medyan TL/m²/ay |
|---|---|---:|---:|
| daire | Acarlar | 37 | **1.000** |
| villa | Acarlar | 76 | **1.000** |
| daire | Soğuksu | 27 | 650 |
| villa | Riva | 36 | 633 |
| daire | Çiğdem | 18 | 627 |
| daire | Anadolu Hisarı | 13 | 564 |
| villa | Göztepe | 20 | 546 |
| villa | Yavuz Selim | 12 | 543 |
| daire | Paşabahçe | 10 | 487 |
| daire | Göztepe | 31 | 450 |
| daire | Kavacık | **159** | 428 |
| daire | Çubuklu | 42 | 405 |
| daire | Merkez | 19 | 400 |

### Arsa Satılık (Güçlü, n≥8)

| Mahalle | n | Medyan TL/m² |
|---|---:|---:|
| Kavacık | 11 | **113.750** |
| Rüzgarlıbahçe | 14 | 106.046 |
| İncirköy | 12 | 93.129 |
| Gümüşsuyu | 31 | 67.059 |
| Çubuklu | 11 | 44.814 |
| Görele | 12 | 41.593 |
| Baklacı | 17 | 40.397 |
| Çengeldere | 30 | 33.676 |
| Çavuşbaşı Çiftlik | 34 | 32.971 |
| Riva | 67 | 31.463 |
| Yavuz Selim | 37 | 30.943 |
| Örnekköy | 20 | 25.864 |
| Elmalı | 17 | 24.583 |
| Zerzavatçı | 8 | 24.851 |
| Tokatköy | 13 | 23.936 |
| Yeni Mahalle | 15 | 21.429 |
| Mahmutşevketpaşa | 20 | 16.411 |
| Anadolufeneri | 16 | 15.216 |
| Cumhuriyetköy | 9 | 13.317 |
| İshaklı | 10 | 13.133 |

---

## G3 — Tip-Bazlı Hedonik

### G3a — Tip-Dummy Birleşik Model (baz: daire × Kavacık)

**Örneklem:** n=97 (detay konut satılık, mahalle n≥8, boilerplate<2)

| Değişken | β | Etki |
|---|---:|---:|
| Intercept | 11.608 | Baz TL/m² = 110.021 |
| Yerden ısıtma | +0.8365 | **+%130.8** |
| Merkezi ısıtma | +0.6066 | +%83.4 |
| Mh:Kanlıca | +0.7616 | **+%114.2** |
| Mh:Soğuksu | +0.6119 | +%84.4 |
| Mh:Acarlar | +0.4353 | +%54.5 |
| Site içinde | -0.1821 | -%16.7 |
| Tip:rezidans | +0.0648 | **+%6.7 (n=7 zayıf)** |
| Kat | -0.0078 | -%0.78 |
| Yaş | -0.0029 | -%0.29 |

**R² = 0.671**

**Rezidans primi %6.7** — dairenin üstünde küçük fark, ama n=7 çok zayıf. Villa/yalı-köşk detay-eksik olduğundan modele girmedi.

### G3b — Daire-Only FE

**Örneklem:** n=91 detay daire (Kavacık 45, Acarlar 30, Soğuksu 8, Kanlıca 8)

| Değişken | Etki (Daire-only) | Karşılaştırma (S52 Birleşik) |
|---|---:|---|
| **Yerden ısıtma** | **+%177.1** | +%126.7 |
| **Merkezi ısıtma** | **+%114.1** | +%84.1 |
| Mh:Kanlıca | +%104.2 | +%109.6 |
| Mh:Soğuksu | +%82.5 | +%89.5 |
| Mh:Acarlar | +%35.0 | +%50.7 |
| Kat | -%0.86 | -%0.83 |
| Yaş | -%0.12 | -%0.32 |
| Site | -%15.1 | -%16.8 |

**R² = 0.673**

**Bulgu:** Isıtma primi **daire içinde daha yüksek** — yerden %177 (birleşik %131), merkezi %114 (birleşik %84). Daire segmentinde modernizasyon primi villa/karışıktan güçlü. Klimalı/kombili küçük daireler ile yerden-ısıtmalı yeni-yapı arasındaki fark daire dünyasında keskinleşiyor.

### G3c — Villa-Only

**ATLANDI** — villa detay-tam örneklem n=0 (villa kayıtlarının çoğu liste-tipinde, detay ziyaret edilmemiş). Sonraki uzantı tur gerekli.

---

## G4 — Brüt Getiri Tablosu (Tip × Mahalle)

**Formül:** `brüt_getiri = (kira_medyan × 12) / satış_medyan × 100`  
**Kriter:** hem sat n≥8 hem kir n≥8

| Tip | Mahalle | Sat TL/m² | Kir TL/m²/ay | Brüt % | Ödenme |
|---|---|---:|---:|---:|---:|
| **villa** | **Yavuz Selim** | 90.000 | 543 | **7.24%** | **13.8 yıl** |
| konut-belirsiz | Acarlar | 158.417 | 873 | 6.62% | 15.1 yıl |
| villa | Göztepe | 119.118 | 546 | 5.50% | 18.2 yıl |
| daire | Kavacık | 94.925 | 428 | 5.41% | 18.5 yıl |
| daire | Acarlar | 227.600 | 1.000 | 5.27% | 19.0 yıl |
| daire | Soğuksu | 151.724 | 650 | 5.14% | 19.5 yıl |
| daire | Göztepe | 110.000 | 450 | 4.91% | 20.4 yıl |
| villa | Acarlar | 245.455 | 1.000 | 4.89% | 20.5 yıl |
| daire | Yalıköy | 86.667 | 352 | 4.88% | 20.5 yıl |
| villa | Riva | 164.141 | 633 | 4.63% | 21.6 yıl |
| daire | Çiğdem | 183.333 | 627 | 4.10% | 24.4 yıl |
| daire | Çubuklu | 138.014 | 405 | 3.52% | 28.4 yıl |
| daire | Tokatköy | 115.909 | 330 | 3.42% | 29.2 yıl |

**Yatırım okuması:** Yavuz Selim villa **%7.24 brüt** — Beykoz'un en yüksek getirili segmenti (nominal getiri, aidat/vergi dışı). Acarlar villa premium-segment (%4.89, prestij ağırlıklı). Kavacık daire %5.41 — orta-ölçek konut yatırım standardı.

---

## G5 — Arsa Hisseli İskonto

### Genel Medyan (mahalle-agnostik)

| Sınıf | n | Medyan TL/m² | Q1 | Q3 |
|---|---:|---:|---:|---:|
| **temiz** (Müstakil/Arsa/Kat) | 97 | **33.207** | 23.563 | 43.974 |
| **hisseli** (Hisseli/Kooperatif) | 29 | 29.993 | 13.317 | 55.357 |
| kayıt-yok | 6 | 9.722 | 7.503 | 32.680 |
| belirsiz-yok (dolmamış) | 409 | 29.091 | 18.438 | 45.939 |

**Genel iskonto:** temiz vs hisseli %9.7 — küçük ama hisseli spread çok geniş (Q1 13K vs Q3 55K → %320 içsel varyans).

### Mahalle-Koşullu İskonto (temiz≥3 & hisseli≥3)

| Mahalle | Temiz n | Temiz med | Hisseli n | Hisseli med | İskonto |
|---|---:|---:|---:|---:|---:|
| **Cumhuriyetköy** | 3 | 28.384 | 3 | 10.001 | **+%64.8** |
| Gümüşsuyu | 3 | 122.807 | 3 | 101.124 | +%17.7 |

**Bulgu:** Hisseli iskonto **mahalle-bağımlı**. Cumhuriyetköy'de hisseli %65 iskonto (yüksek), Gümüşsuyu'da %18 (küçük). Genel örneklem küçük (2 mahalle) — ek tur gerek. **F6 seçilim bulgusunun arsa ayağı:** hisseli arsalar genellikle çıkarım-zorluğu nedeniyle ucuz, ancak iskonto mahalle piyasa likiditesine göre değişiyor.

---

## G6 — Cevaplayamadıklarım

1. **Villa-only hedonik ATLANDI** — villa detay-tam örneklem n=0 (villa çoğu liste-tipinde). Sonraki uzantı tur şart.
2. **Rezidans primi n=7 zayıf** — %6.7 sayısı tek turda güvensiz.
3. **Hisseli iskonto sadece 2 mahalle** — Cumhuriyetköy/Gümüşsuyu; genel Beykoz iskontosu ölçmek için 5+ mahalle gerek.
4. **konut-belirsiz 416 kayıt** — alt-tip (daire/villa) bilinmiyor; sonraki tur detay ziyaretiyle çözülür.
5. **Ticari satılık taksonomisi eksik** — dükkan/ofis/depo alt-ayrımı yapılmadı (n<10 çoğunda).
6. **Yalı-köşk %545K/m²** — n=9 küçük, ama Beykoz Boğaz-yalı bandı için doğru mertebe; ek tur şart.
7. **Emlak_tipi liste-tipinde YOK** (%25 doluluk sınırı) — detay ziyareti artmadan tip belirsizliği %13-15 kalıyor.
8. **Brüt getiri "net" değil** — aidat, vergi, boş-kalma indirilmedi; net getiri sonraki tur.

---

## Sonuç — Master Emsal Bölümünün Nihai Hali

**Beykoz Master'ın EMSAL bölümü:** Bu MD + `beykoz_emsal_v2.json` + `tip_taksonomi.md` = **F6 pilotu için hazır teslim**.

- 84 yayınlanabilir hücre (F6'nın 4.2 katı)
- Kira/getiri tablosu 13 hücre
- Arsa temiz/hisseli iskonto 2 mahalle örnek
- Hedonik R² 0.671 (birleşik) · 0.673 (daire-only)

---

## Çıktılar

- **beykoz_emsal_v2.json (tam paket):** `~/tradia_analiz/cikti/beykoz_emsal_v2.json` (25.840 bayt)
- **tip_taksonomi.md:** `~/Desktop/TT-Tüm CC/beykoz_vaka/tip_taksonomi.md`
- **Bu MD:** `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S53.md`
- **K24a bildirim:** `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_beykoz_S53.json`

## Disiplin S53
A04 (sınıflanamayan/villa-only/rezidans n=7 dürüst not) · V37 (v24 dokunulmadı, v25 katman AYRI, taksonomi zenginleştirme) · V11 (yapısal, kehanet yok) · #21-B (her sayı v25 kayıt) · dönem etiketi=`S48_UZANTI_2026-Haz-Tem` · $0 · SİLME YOK
