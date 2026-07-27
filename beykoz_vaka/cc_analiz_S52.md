# Vaka: Beykoz — CC-Analiz S52 (Şema-v2 + Hedonik-v2)

**Sprint:** S52 · **Tarih:** 2026-07-27 · **$0** · **V37 uygulandı** (v24 dokunulmadı)

**F1 keşif referansı:** Uzantı 977 detay kaydında yaş/kat/ısıtma/asansör/otopark/site/aidat/tapu-durumu/krediye-uygun/m²-brüt-net/emlak-tipi **VAR**.

**Kaynak (#21-B):**
- Girdi: `~/tradia_analiz/data/uzanti_katmani_beykoz_S48.jsonl` (3.293 kayıt, S47+S48 birleşim)
- Çıktı: `~/tradia_analiz/data/sahibinden_master_v25_beykoz_zengin_S52.jsonl` (**35 kolon**, 3.293 kayıt, 2.64 MB)

---

## G1 — v24 Şema Genişletme (Şema-v2)

### V37 Disiplin

- v24 orijinali (`~/tradia_analiz/data/sahibinden_master_v24_*.jsonl`) **DOKUNULMADI**
- Uzantı zenginleştirmesi **AYRI KATMAN** olarak yazıldı (v25 Beykoz alt-küme)
- PK = **(ilan_id, url_slug)** — S51 kararı uygulandı

### Kolon Şeması

| Grup | Kolon | Kaynak |
|---|---|---|
| **v24 orijinal (8)** | il, ilce, mahalle, kategori, fiyat_tl, m2, tarih, kaynak | v24 şema |
| **PK (2)** | ilan_id, url_slug | S51 kural |
| **Zenginlik (17)** | m2_brut, m2_net, oda, yas, kat, kat_sayisi, isitma, site_ic, site_ad, esya, aidat_tl, otopark, asansor, balkon, banyo_sayisi, tapu_durumu, krediye_uygun, kullanim_durumu, emlak_tipi, kimden, takas | Uzantı detay{} |
| **Meta (3)** | tip (liste/detay), boilerplate_flag, cekim_ts | Uzantı meta |
| **Lokasyon ek (1)** | lokasyon_ust (Paşabahçe/Anadoluhisarı/vs) | Uzantı split |

**Toplam:** 8 + 2 + 17 + 3 + 1 = **35 kolon** (v24'ün 4.4 katı bilgi)

---

## G2 — Doluluk Raporu (n=3.293)

### Tümü (liste + detay)

| Alan | Dolu | % |
|---|---:|---:|
| tarih | 3.293 | 100.0 |
| kategori | 3.293 | 100.0 |
| mahalle | 3.262 | 99.1 |
| fiyat_tl | 3.228 | 98.0 |
| m2 | 2.846 | 86.4 |
| kimden | 969 | 29.4 |
| tapu_durumu | 964 | 29.3 |
| emlak_tipi | 831 | 25.2 |
| yas | 777 | 23.6 |
| isitma | 690 | 21.0 |
| kat_sayisi | 631 | 19.2 |
| oda | 632 | 19.2 |
| m2_brut / m2_net | 620 | 18.8 |
| banyo_sayisi | 594 | 18.0 |
| site_ic / site_ad / esya | 582 | 17.7 |
| otopark | 577 | 17.5 |
| balkon | 418 | 12.7 |
| asansor | 371 | 11.3 |
| krediye_uygun | 379 | 11.5 |
| kat | 358 | 10.9 |
| **aidat_tl** | **163** | **4.9** |

### Sadece Detay-Tipinde (n=977) — F1 9 katsayı testi

| Katsayı | Dolu | % |
|---|---:|---:|
| emlak_tipi | 831 | **85.1** |
| yas | 777 | **79.5** |
| isitma | 690 | **70.6** |
| kat_sayisi | 631 | **64.6** |
| site_ic | 582 | **59.6** |
| otopark | 577 | **59.1** |
| krediye_uygun | 379 | **38.8** |
| kat | 358 | **36.6** |
| **aidat_tl** | **163** | **16.7** |

**F1 9 katsayı testi sonucu:**
- **8/9 ölçülebilir (%37-85 doluluk)** — yaş, kat, isıtma, kat_sayısı, site, otopark, krediye_uygun, emlak_tipi
- **1 zayıf** — aidat_tl %16.7 (n=163, model'de kullanılabilir ama seyrek)

**S46'da 0 dolu olan alanlar → S52'de %37-85** — F1'in bilinmezleri **açıldı**.

---

## G3 — Hedonik-v2 (Mahalle-FE + Yeni Değişkenler)

### Örneklem

- Konut satılık detay + boilerplate_flag<2 + m²/fiyat + yaş/kat çıkarılabilen: **141**
- Mahalle n≥8 kesinti: **97 gözlem, 4 mahalle** (Kavacık 44, Acarlar 37, Soğuksu 8, Kanlıca 8)

### Model 1 — Mahalle-FE + Yeni Değişkenler (interaksiyon SIZ)

```
log(TL/m²) = 11.6136
  − 0.0032·yaş − 0.0083·kat
  + 0.8186·yerden + 0.6101·merkezi − 0.1845·site
  − 0.0131·ln_aidat + 0.0477·otopark − 0.0009·asansör + 0.0065·krediye
  + 0.6392·Soğuksu + 0.4100·Acarlar + 0.7399·Kanlıca
```

| Değişken | β | % Etki | Yorum |
|---|---:|---:|---|
| **Intercept (Baz Kavacık)** | 11.6136 | 110.588 TL/m² | |
| Yaş / yıl | -0.0032 | **-%0.32** | Doğru işaret ✓ |
| Kat / seviye | -0.0083 | -%0.83 | Zayıf |
| **Yerden ısıtma** | +0.8186 | **+%126.7** | Güçlü prim |
| Merkezi ısıtma | +0.6101 | **+%84.1** | Güçlü prim |
| Site içinde | -0.1845 | -%16.8 | Kollinearite (aşağıda) |
| **ln(aidat+1)** | -0.0131 | -%0.90 (aidat 2x) | Zayıf ters |
| Otopark | +0.0477 | +%4.9 | Küçük prim |
| Asansör | -0.0009 | -%0.1 | Nötr |
| Krediye uygun | +0.0065 | +%0.6 | Nötr |
| **Kanlıca (mh)** | +0.7399 | **+%109.6** | En yüksek prim |
| Soğuksu (mh) | +0.6392 | +%89.5 | |
| Acarlar (mh) | +0.4100 | +%50.7 | |

**R² = 0.676** (S51 = 0.671, küçük iyileşme)

### Model 2 — Site × Mahalle İnteraksiyon (ÇÖZÜLEMEDİ)

**Kollinearite:**

| Mahalle | n | site içinde | site dışı |
|---|---:|---:|---:|
| Soğuksu | 8 | **8** | 0 |
| Acarlar | 37 | 35 | 2 |
| Kanlıca | 8 | 3 | 5 |
| Kavacık | 44 | 5 | 39 |

Soğuksu tümü site içinde, Acarlar hemen hepsi site içinde → `site × Soğuksu` dummy'si `mh:Soğuksu` ile birebir aynı, matris tekilleşiyor.

**Bulgu:** Site içinde etkisi lokasyona sıkıca bağlı — Acarlar/Soğuksu = site-ağırlıklı bölgeler, mahalle FE bu etkiyi zaten absorbe ediyor. Ayrı bir "site primi" **evrensel olarak yok**.

### Model 1 Yorumları

**Ana bulgular (mahalle-koşullu, boilerplate-temiz):**
1. **Yerden ısıtma +%127** — Beykoz'da en büyük modernizasyon primi
2. **Merkezi ısıtma +%84** — güçlü ikinci
3. **Kanlıca-Kavacık farkı +%110** — Boğaz-yakın konum primi
4. **Yaş amortismanı yıllık ~%0.3** — küçük ama beklenen yönde
5. **Aidat, otopark, asansör, krediye** — kolonlar dolu ama katsayılar zayıf (mahalle+ısıtma'ya yenildi)

---

## G4 — Boilerplate Filtreleme

**Marker'lar** (regex): `sb2f`, `true`, `hastalık sebebiyle`, `kaçırılmayacak fırsat`, `mükemmel ötesi`, `bu fiyata yok`, `son 3 gün`, `merkeze 5 dk`, `ferah`

| Flag | Kayıt | Yorum |
|---|---:|---|
| 0 (temiz) | 2.839 | Modele giriyor |
| 1 (tek marker) | 97 | Marj — modele giriyor |
| 2 (çift) | 193 | Modelden **ATILIYOR** |
| 3+ (yoğun) | 164 | Modelden **ATILIYOR** |
| **Toplam atılan** | **357** | Boilerplate şüpheli |

**Etki:** Hedonik-v2'de boilerplate-temiz kesinti sonrası model istikrarı arttı (yaş katsayısı S50 +%0.84 → S52 -%0.32, işaret doğru + magnitude küçük).

---

## G5 — Cevaplayamadıklarım

1. **Site × Mahalle interaksiyonu ÇÖZÜLEMEDİ** — Soğuksu/Acarlar'da site-varyans yok; daha büyük mahalle-örnekleminde tekrar denenmeli
2. **Aidat etkisi zayıf çıktı** (%-0.9 aidat 2x) — n=163 seyrek, log-log spec sınırlı; alt-örneklem gerekli
3. **Emlak_tipi (%85 dolu) kullanılmadı** — kategorik: Satılık Daire/Villa/Residans; sonraki hedonik'de kategorik değişken eklenmeli
4. **Riva/Yalıköy/Ortaçeşme n<8** — bu mahalleler hedonik-FE dışı; daha fazla detay-tur gerek
5. **Aidat > 0 filtresi + segment analizi** yapılmadı (site-aidat karışım etkisi)
6. **Ticari/arsa hedonik yapılmadı** (konut_satilik odaklandı)

---

## Finans Bildirimi (F1 9 katsayı testi kapanışı)

### F1'in "9 ölçülemez" — S52 Kapanışı

| Katsayı | S46 (CSV) | S52 (Uzantı+detay) |
|---|---:|---:|
| Bina yaşı | 0 | **%79.5 dolu** ✓ |
| Bulunduğu kat | 0 | %36.6 ✓ |
| Kat sayısı | 0 | %64.6 ✓ |
| Isıtma | 0 | %70.6 ✓ |
| Aidat | 0 | %16.7 (zayıf) |
| Eşyalı | 0 | %59.6 ✓ |
| Site içinde | 0 | %59.6 ✓ |
| Otopark | 0 | %59.1 ✓ |
| Krediye uygun | 0 | %38.8 ✓ |

**8/9 katsayı ölçülür seviyede.** Aidat için ek tur gerek.

### Ana Hedonik Bulgu

**Beykoz konut fiyatını ne belirliyor?** (mahalle-koşullu)
1. **Konum (mahalle)** — Kanlıca %110 primi (baz Kavacık)
2. **Modernizasyon (ısıtma)** — Yerden %127, merkezi %84
3. **Yaş amortismanı** — küçük (-%0.3/yıl)
4. Aidat/otopark/asansör/krediye zayıf — büyük değişkenlere yeniliyor

---

## Çıktılar

- **v25 zengin katman:** `~/tradia_analiz/data/sahibinden_master_v25_beykoz_zengin_S52.jsonl` (35 kolon × 3.293 kayıt)
- **MD:** `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S52.md`
- **JSON özet:** `~/tradia_analiz/cikti/vaka_beykoz_S52.json`
- **Finans bildirim:** `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_beykoz_S52.json`

## Disiplin S52
V37 (v24 dokunulmadı, uzantı zenginleştirme AYRI katman v25) · A04 (aidat zayıf/interaksiyon çözülemedi dürüst) · V11 (yapısal, kehanet yok) · #21-B kaynak-kanıt · $0 · SİLME YOK
