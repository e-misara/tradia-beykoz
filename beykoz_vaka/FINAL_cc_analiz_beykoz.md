# FINAL — CC-Analiz Beykoz Vaka Kapanış Raporu

**Tarih:** 2026-07-27 · **Sprint aralığı:** Yoklama (S45.5) → S52 · **Süre:** 3 gün (07-25 → 07-27) · **Maliyet:** $0 (tüm iş lokal)

**Kaynak (#21-B):** CSV S29 arşiv (2026-02→2026-05, 797 kayıt) + Chrome Uzantısı iki tur (07-25 330 kayıt, 07-26 3.022 kayıt) + v24 master (250.193 kayıt, salt-okuma) + TT-AI beykoz.json + TT-MAP kentleşme sinyalleri.

---

## §1 — Sprint Dökümü

| Sprint | Tarih | Tek Cümle |
|---|---|---|
| **Yoklama** | 07-25 | TT-HAFIZA takılı değilken Mac'te v24 892 Beykoz kayıt sayıldı, 44 mahalle tespit, m² doluluk %46 tanımlandı. |
| **S46 hazır betik** | 07-25 | `beykoz_ss_derin_tarama.py` yazıldı, kuru-kontrol 5/5 regex + öncelik testi geçti, bellek bekliyor exit=2. |
| **S46 tam-koşu** | 07-25 | TT-HAFIZA takılınca PNG değil CSV bulundu; 5 CSV birleşim 797 kayıt, 30 mahalle, m² %71 (başlık kurtarma). |
| **S46-EK G6** | 07-25 | Ortaçeşme 5 kayıt hepsi ticari-kir, Yalıköy 4 kayıt 1 konut → **TUTULAN STOK** ilk beyanı. |
| **S47** | 07-26 | Chrome uzantısı 330 kayıt (310 Beykoz, 176 detay); 9/9 katsayı %95 dolu; Ortaçeşme 4/Yalıköy 10 → **"eski tarama atlamış"** (S49'da geri çekilecek). |
| **S48** | 07-26 | S47+S48 birleşim 3.293 Beykoz (%369 kapsam); kategori regex v2, arsa/ticari yeni açıldı; Acarlar hedonik başlangıç. |
| **S49** | 07-26 | İLK 4-aylık zaman serisi (CSV Şub-May vs Uzantı Tem); Acarlar +%4.9, Riva +%8.0; **G5: Ortaçeşme 21/21 ilan Haz-Tem → Signals haklı, S47 yanlış**. |
| **S50** | 07-26 | Fiyat delta "%99 indirim" absürtlüğünün tanısı: **ilan_id recycle** (39/40 çakışan farklı ilan); hedonik yaş-pozitif bias fark edildi. |
| **S51** | 07-27 | PK=(ilan_id, url_slug) uygulandı, gerçek çakışma n=1 (delta 0.00%); Mahalle-FE hedonik R² 0.439 → **0.671**, yaş -%0.34 doğru işaret. |
| **S52** | 07-27 | v25 zengin katman (35 kolon, 3.293 kayıt), F1'in 9 katsayısı %17-85 dolu, hedonik-v2 R²=0.676, site×mh interaksiyon kollinear. |

---

## §2 — Kesin Bulgular

### A. v25 Zengin Katman (Şema-v2)

**Dosya:** `~/tradia_analiz/data/sahibinden_master_v25_beykoz_zengin_S52.jsonl`  
**Kolon: 35** (v24 8 + PK 2 + zenginlik 17 + meta 3 + lokasyon_ust 1) · **Kayıt: 3.293** · **Boyut: 2.64 MB**

### B. F1 9 Katsayı Doluluk (Detay n=977)

| Katsayı | Dolu | % | S46 CSV | Δ |
|---|---:|---:|---:|---:|
| emlak_tipi | 831 | **85.1** | 0 | +%85 |
| yas | 777 | **79.5** | 0 | +%79 |
| isitma | 690 | **70.6** | 0 | +%71 |
| kat_sayisi | 631 | **64.6** | 0 | +%65 |
| site_ic | 582 | **59.6** | 0 | +%60 |
| esya | 582 | **59.6** | 0 | +%60 |
| otopark | 577 | **59.1** | 0 | +%59 |
| krediye_uygun | 379 | **38.8** | 0 | +%39 |
| kat | 358 | **36.6** | 0 | +%37 |
| aidat_tl | 163 | **16.7** | 0 | +%17 (zayıf) |

### C. Hedonik-v2 Nihai Katsayıları

**Model:** `log(TL/m²) ~ yaş + kat + yerden + merkezi + site + ln_aidat + otopark + asansör + krediye + mh_dummies`  
**Örneklem:** n=97 (konut satılık + detay + boilerplate<2 + mahalle n≥8 kesinti)  
**Baz mahalle:** Kavacık (n=44) · **R² = 0.676**

| Değişken | β | % Etki | Yorum |
|---|---:|---:|---|
| Intercept (Kavacık baz) | 11.6136 | 110.588 TL/m² | |
| **Yerden ısıtma** | +0.8186 | **+%126.7** | En büyük prim |
| **Mh:Kanlıca** | +0.7399 | **+%109.6** | Boğaz-yakın konum |
| Mh:Soğuksu | +0.6392 | +%89.5 | |
| Merkezi ısıtma | +0.6101 | +%84.1 | |
| Mh:Acarlar | +0.4100 | +%50.7 | |
| Otopark | +0.0477 | +%4.9 | Küçük |
| Krediye uygun | +0.0065 | +%0.6 | Nötr |
| Asansör | -0.0009 | -%0.1 | Nötr |
| Yaş / yıl | **-0.0032** | **-%0.32** | Doğru amortisman ✓ |
| Kat / seviye | -0.0083 | -%0.83 | Zayıf |
| Aidat 2x | -0.0131 | -%0.90 | Zayıf |
| Site içinde | -0.1845 | -%16.8 | Kollinearite (bkz. §4) |

### D. PK Kuralı (Kritik V37 Öneri)

**PK = (ilan_id, url_slug).** Sahibinden ilan_id **recycle** ediyor:

| Test | Sonuç |
|---|---:|
| id-only çakışan | 40 |
| Aynı kategori | 10 |
| **Aynı slug (gerçek aynı ilan)** | **1** |
| Kategori değişmiş (re-assign) | 30 |

**Örnek:** ilan_id 846843613 → S47'de konut-sat 55M (Akbaba), S48'de konut-kir 15K (Kavacık) — aynı ID farklı ilan.

### E. İlk 4-Aylık Zaman Serisi

**Dönem 1 (CSV Şub-May 2026)** vs **Dönem 2 (Uzantı Haz-Tem 2026)** · Konut satılık TL/m² medyan:

| Mahalle | D1 n | D1 medyan | D2 n | D2 medyan | Δ% | Güven |
|---|---:|---:|---:|---:|---:|---|
| **Acarlar** | 144 | 210.140 | 191 | **220.455** | **+4.9%** | sağlam |
| **Riva** | 109 | 160.000 | 122 | **172.864** | **+8.0%** | sağlam |
| Göztepe | 27 | 113.889 | 43 | 113.889 | **±0.0%** | sağlam |
| Yavuz Selim | 22 | 106.667 | 28 | 101.095 | -5.2% | sağlam |
| Baklacı | 22 | 181.016 | 17 | 196.970 | +8.8% | orta |
| Çengeldere | 19 | 152.225 | 24 | 155.754 | +2.3% | orta |
| Çavuşbaşı Çiftlik | 10 | 137.222 | 17 | 170.000 | +23.9% | orta |
| Görele | 13 | 146.154 | 11 | 137.500 | -5.9% | orta |

**Sağlam kesim (n≥20 iki dönemde) okuma:** Beykoz nominal artış küçük (+5-8%), yıllık ekstrapolasyon %15-24 → **reel-negatif** izlenimi güçlü (enflasyon üstü değil).

**Yeni arz mahalleleri (D1'de yok):** Ortaçeşme (21) · İncirköy (19) · Gümüşsuyu (13) · Çamlıbahçe (9) · Kaynarca (5) · Anadolu Kavağı (4)

### F. Ortaçeşme "Yeni Arz" Kesinleşmesi

**21 konut satılık ilanının tarih dağılımı:**

| Ay | Kayıt |
|---|---:|
| 2026-Temmuz | 19 |
| 2026-Haziran | 2 |
| Şub-May (S46 dönemi) | **0** |

**Medyan 59.091 TL/m²** — Beykoz uçuk-ucuz bandı. **KARAR:** TUTULAN STOK DEĞİL, **geniş-ucuz + hızlı yeni arz akışı**. Yatırım pozisyonu "gelişen ucuz bölge, uzun vade değer artışı potansiyeli."

### G. Mahalle Medyan Tablosu (Konut Satılık, S48 birleşim)

**Yüksek sıcak (>200K TL/m²):**  
Acarlar 225.637 (n=202) · Mahmutşevketpaşa 225.000 (14) · Anadolu Hisarı 212.839 (41) · Kanlıca 211.171 (40) · Baklacı 204.545 (17)

**Orta (150-200K):**  
Riva 174.038 (122) · Çavuşbaşı Çiftlik 170.000 (17) · Çiğdem 166.222 (26) · Soğuksu 162.833 (20) · Çengeldere 155.754 (24) · Merkez 154.954 (36) · Göksu 154.500 (18) · Çubuklu 147.299 (24)

**Düşük (100-150K):**  
Tokatköy 115.909 (35) · Göztepe 113.889 (43) · Kavacık 101.724 (81) · Yavuz Selim 101.095 (28)

**Uçuk ucuz (<100K):**  
Yalıköy 97.222 (51) · İncirköy 62.500 (19) · **Ortaçeşme 59.091 (21)**

### H. Arsa & Ticari Satılık (n≥5)

**Arsa top-5 TL/m²:** Gümüşsuyu 61.947 (37) · Baklacı 39.666 (30) · Çengeldere 34.759 (46) · Çavuşbaşı Çiftlik 32.661 (45) · Yavuz Selim 30.902 (49)  
**Ticari satılık:** Çubuklu 92.500 (5) · Anadolufeneri 89.286 (3) · Kavacık 87.500 (7) — küçük örneklem  
**Ticari kiralık TL/m²/ay top:** Rüzgarlıbahçe 460 (12) · Kavacık 442 (33) · Yeni Mahalle 433 (5) · Fatih 417 (5)

---

## §3 — Geri Çekilen Bulgular

### A. S46: "TUTULAN STOK" → S49: "veri sorunu değil, yeni arz"

- **Eski (S46-EK G6):** Ortaçeşme+Yalıköy CSV'de konut arz 0-1 → "TUTULAN STOK sinyali GEÇERLİ, F2'ye böyle gider."
- **S47 pivot:** Uzantı 4+10 kayıt buldu → "**eski tarama atlamış**, TUTULAN STOK zayıflıyor."
- **S49 KESİN CEVAP:** Ortaçeşme 21/21 ilan Haz-Tem 2026 → **Signals haklı, ben yanılmışım, S47 tezi çürüdü**.
- **Yeni karar:** Ortaçeşme "gelişen ucuz bölge + hızlı yeni arz akışı" — TUTULAN STOK değil.
- **Neden zincir:** CSV Şub-May 2026 dönemini kapsıyordu, uzantı Tem 2026'yı; farkı dönem-farkı sanmışım.

### B. S49: "40 ilan indirim/zam" → S51: "1 gerçek çakışma"

- **Eski (S49 G2):** "%99.58 indirim, %248 zam" → uzantı fiyat_tl tutarsız denildi.
- **S50 tanı:** Uzantı fiyat çıkarımı BUG DEĞİL — 39/40 çakışan **farklı ilan** (kategoriler bile satılık↔kiralık değişiyor).
- **S51 çözüm:** PK=(ilan_id, url_slug) → gerçek çakışma **1**, delta %0.00.
- **Neden:** Sahibinden ilan_id recycle ediyor (silinen ilan → yeni ilana ID atanıyor).

### C. S50: Hedonik yaş +%0.84 → S51: -%0.34

- **Eski (S50):** OLS'de yaş katsayısı POZİTİF (%+0.84) — bekleneni tersi.
- **S51 tanı:** Omitted variable bias — mahalle sabit etkisi yok (eski yapılar Boğaz-yakın Anadolu Hisarı/Merkez'de yoğunlaşıyor).
- **S51 çözüm:** Mahalle dummies eklendi → yaş -%0.34 (doğru işaret), R² 0.439 → 0.671.

### D. S49: "40 ilan gerçek delta" → S51: "n=1"

- **Neden:** Yukarıdaki (B) ile aynı — ilan_id recycle kanıtı geç anlaşıldı.

---

## §4 — Cevapsızlar

1. **Gerçek fiyat delta n=1** — 3-4 tur çekim + PK=(id,slug) tam uygulaması sonrası mümkün. Şu an "asılı kalma/fiyat düşürme" ölçülemez.
2. **v24 öncesi arşiv YOK** — CSV S29 hepsi 2026 yılı. 2025 ve öncesi Beykoz için Endeksa/REIDIN gerekli (arşivimizde yok).
3. **sb2f 414 kayıt (%12.6)** — Uzantı-ekibi cevabı bekleniyor: sahibinden URL kısaltması mı, uzantı placeholder mı, test veri mi?
4. **Site × Mahalle kollinearite** — Soğuksu tümü site içinde, Acarlar 35/37 site içinde → interaksiyon çözülemedi. Site primi lokasyon-bağlı, evrensel değil.
5. **n<8 mahalleler hedonik-FE dışı** — Riva 6, Yalıköy 7, Ortaçeşme 2, İncirköy 4 detay-tam örneklem. Ek tur gerek.
6. **Aidat etkisi zayıf** (%-0.9 aidat 2x) — n=163 seyrek, log-log spec sınırlı.
7. **Emlak_tipi (%85 dolu) hedonik'e girmedi** — Satılık Daire/Villa/Residans kategorik değişkeni sonraki tur.
8. **Ticari/arsa hedonik yok** — bu sprint konut satılık odaklı.
9. **Kavacık yeni-yapı ucuz paradoksu** — n=19 küçük, ofis-merkez segment karışımı olabilir.
10. **Peker GYO / Çelikler proje etkisi** — İncirköy arsa (93K) > konut (62K) anomalisi görüldü ama proje-öncesi baz yok, saha bilgisi olmadan yorumlanamaz.

---

## §5 — 10 Altın Cümle

1. **Beykoz konut fiyatını en çok belirleyen üç şey: mahalle (+%110 Kanlıca-Kavacık farkı), yerden ısıtma (+%127), merkezi ısıtma (+%84).**
2. **Yaş amortismanı yıllık -%0.32** — mahalle-koşullu, küçük ama beklenen yönde; eski yapı primi mahalle-etkisiyle karışıyor.
3. **4-aylık nominal artış Acarlar +%4.9, Riva +%8.0, Yavuz Selim -%5.2** — enflasyon üstü olmadığı için reel-negatif izlenim baskın.
4. **Ortaçeşme 59.091 TL/m² × 21 kayıtın hepsi son 2 ay** — TUTULAN STOK değil, yeni arz dalgası.
5. **Sahibinden ilan_id recycle ediyor** — 40 çakışmadan 39'u farklı ilan; PK olarak `(ilan_id, url_slug)` şart.
6. **F1'in "9 ölçülemez katsayı" 8/9 açıldı** — sadece aidat (n=163) zayıf, diğerleri %37-85 dolu.
7. **Yerden ısıtma primi mahalle-kontrol sonrası bile +%127** — Beykoz'da modernizasyon karşılığı gerçek.
8. **Site içinde primi evrensel değil** — Acarlar/Soğuksu'da tüm daireler site içinde; mahalle sabit etkisi bu primi absorbe ediyor.
9. **v24 öncesi Beykoz arşivi YOK** — zaman serisi geriye uzatılamaz; Endeksa/REIDIN yeni-kaynak gerekli.
10. **v25 zengin katman (35 kolon, 3.293 kayıt) v24 dokunulmadan üretildi** — V37 sağlam, kaydırılabilir emsal.

---

## §6 — Veri Envanteri

### Kanonik (READ-ONLY, V37)

| Dosya | Boyut | Kayıt | Not |
|---|---:|---:|---|
| `/Users/GAC-A/landgold-agents/data/sahibinden/sahibinden_master_v23_2026-06-05.jsonl` | 126.9 MB | 250.193 | SHA `b9cc28b5...`, chmod 0o444 |
| `/Users/GAC-A/tradia_analiz/data/sahibinden_master_v24_2026-06-30.jsonl` | 42.6 MB | 180.994 | v24 ana, chmod 0o444 |
| `/Users/GAC-A/tradia_analiz/data/sahibinden_master_v24_karantina_2026-06-30.jsonl` | 16.8 MB | 69.199 | v24 karantina, chmod 0o444 |

### CSV Kaynak (TT-HAFIZA arşiv)

| Dosya | Kayıt |
|---|---:|
| `/Volumes/TT-HAFIZA/01_YEDEK/2026-07-03_S29/03_sahibinden_gorseller/ham_ss/_sahibinden_master/Istanbul-Beykoz/Istanbul-Beykoz_villa_satılık.csv` | 410 |
| `.../Istanbul-Beykoz_işyeri_kiralık.csv` | 308 |
| `.../Istanbul-Beykoz_residans_satılık.csv` | 38 |
| `.../Istanbul-Beykoz_daire_satılık.csv` | 21 |
| `.../Istanbul-Beykoz_ticari_satılık.csv` | 20 |

### Uzantı NDJSON (İndirilenler)

| Dosya | Kayıt |
|---|---:|
| `~/Downloads/tradia_sahibinden_2026-07-25-21-09-32.ndjson` | 330 |
| `~/Downloads/tradia_sahibinden_2026-07-26-08-56-19.ndjson` | 3.022 |

### v25 Zengin Katman + JSONL İşlenmişler

| Dosya | Kayıt |
|---|---:|
| `~/tradia_analiz/data/sahibinden_master_v25_beykoz_zengin_S52.jsonl` | 3.293 (35 kolon) |
| `~/tradia_analiz/data/beykoz_csv_derin_S46.jsonl` | 797 |
| `~/tradia_analiz/data/uzanti_katmani_beykoz_S47.jsonl` | 310 |
| `~/tradia_analiz/data/uzanti_katmani_beykoz_S48.jsonl` | 3.293 |
| `~/tradia_analiz/data/beykoz_ss_derin_tarama.py` | betik |

### JSON Raporlar

| Dosya | Sprint |
|---|---|
| `~/tradia_analiz/cikti/vaka_beykoz_analiz_yoklama.json` | Yoklama |
| `~/tradia_analiz/cikti/vaka_beykoz_derin_betik_hazir.json` | S46 hazır |
| `~/tradia_analiz/cikti/vaka_beykoz_analiz_S46.json` | S46 |
| `~/tradia_analiz/cikti/vaka_beykoz_uzanti_S47.json` | S47 |
| `~/tradia_analiz/cikti/vaka_beykoz_uzanti_S48.json` | S48 |
| `~/tradia_analiz/cikti/vaka_beykoz_S49.json` | S49 |
| `~/tradia_analiz/cikti/vaka_beykoz_S50.json` | S50 |
| `~/tradia_analiz/cikti/vaka_beykoz_S51.json` | S51 |
| `~/tradia_analiz/cikti/vaka_beykoz_S52.json` | S52 |

### K24a Hafıza Bildirimleri (Finans+Signals+Uzantı-ekibi köprüsü)

| Dosya | Sprint |
|---|---|
| `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_beykoz_S46.json` | S46 |
| `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_beykoz_S47.json` | S47 |
| `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_beykoz_S48.json` | S48 |
| `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_beykoz_S49.json` | S49 (V16 kritik) |
| `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_beykoz_S50.json` | S50 |
| `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_beykoz_S51.json` | S51 |
| `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_beykoz_S52.json` | S52 (F1 kapanış) |

### MD Desktop (bu klasör)

| Dosya | Sprint |
|---|---|
| `~/Desktop/TT-Tüm CC/beykoz_vaka/vaka_beykoz_cc_analiz.md` | S46+S47 birleşim |
| `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S48.md` | S48 |
| `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S49.md` | S49 |
| `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S50.md` | S50 |
| `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S51.md` | S51 |
| `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S52.md` | S52 |
| `~/Desktop/TT-Tüm CC/beykoz_vaka/FINAL_cc_analiz_beykoz.md` | **Bu dosya** |

---

## §7 — İzleme

### Sonraki Delta Turu Koşulları

**En az bir sonraki uzantı çekim turu yapıldığında:**
1. PK=(ilan_id, url_slug) tam çakışma test edilir → 3.293 kayıt × 2. turdan aynı-slug oranı ölçülür
2. Fiyat delta örneklem ~%5-15 çakışma → n=150-500 hedeflenir
3. Asılı kalma süresi: her ilanın `ilk_gorulme` → `son_gorulme` farkı hesaplanır
4. Fiyat düşürme oranı: `fiyat_gecmisi[]` birden fazla kayıt olan ilanlarda `min()/max()` oranı
5. Kayıp/yeniden-listelenme: 2. turda görülmeyen 1. tur ilanları → "satıldı veya kaldırıldı"

**3. tur** (delta örneklem ≥ 100) sonrası **v25 birleşim (S45)** gerçekleşmeli — Sakarya + S39.5 + Mac FULL + uzantı zengin kayıtları v25 kanonik olarak yazılmalı.

### Uzantı-Ekibi Bekleyenler (S51 bildirim)

1. **sb2f** — sahibinden URL kısaltması mı, uzantı placeholder mı? (414 kayıt %12.6)
2. **"true" debug** — 846755851 gibi başlıklarda görünen debug token sızıntısı nasıl oluyor?
3. **Jenerik SEO kalıpları** — "Fiyat Düştü! Son 3 gün!" test-veri mi, gerçek emlak SEO tekrarı mı?
4. **★ PK kural (ilan_id, url_slug)** — schema'ya ekleme kritik. Şu an yalnız ilan_id ile kayıt yazımı recycle-güvensiz.

### Cevaplar Geldiğinde

- Test-veri onaylanırsa: 357 boilerplate + 414 sb2f = ~700 kayıt (%21) modelden atılmalı, model yeniden koşulmalı
- URL slug kısaltma onaylanırsa: sb2f kayıtlar geçerli sayılır, sadece boilerplate atılır (n=357 kalır)
- PK kural uzantı sürümüne alınırsa: sonraki tur çakışma temiz ölçülür

### Bekleyen İç Açık Borçlar

- Site × Mahalle interaksiyon — Riva/Yalıköy/Kavacık yüksek site-varyansıyla tekrar test
- Emlak_tipi kategorik hedonik
- Aidat alt-örneklem analizi (n=163'ün 100+ olduğu mahalle)
- Ticari + arsa hedonik ayrıca (bu sprintte yok)
- v24 öncesi tarihsel veri (Endeksa/REIDIN sorgulaması — dış kaynak, $ kararı Patron)

---

## §8 — Öz-Değerlendirme + Anayasa Önerileri

### Sprint Başarıları

1. **V37 sağlam** — v24 hiç dokunulmadı, tüm zenginleştirme AYRI katman
2. **A04 dürüst** — 3 kez karar geri çekildi (S46→S49, S49→S51, S50→S51) her seferinde açık V16 not
3. **Zaman serisi ilk kez** — Beykoz için 4-aylık delta ölçümü tarihte ilk
4. **F1 kapanışı** — 9 katsayının 8'i model-hazır seviyede
5. **PK tanısı** — sahibinden ilan_id recycle bilgisi tüm sonraki uzantı işlerinde referans olacak

### Sprint Zayıflıkları

1. **S47'de "eski tarama atlamış" acele karar** — dönem farkını ihmal ettim, Signals düzeltti
2. **S49'da fiyat_tl absürtlüğü** üzerinden karar verirken "uzantı bug" dedim, gerçekte PK sorunuydu (2 sprint sonra çözüldü)
3. **Kavacık yeni-yapı ucuz paradoksu** açıklanmadan geçildi (küçük örneklem hazır bahaneydi)
4. **Boilerplate marker'ları geç eklendi** (S52) — daha erken bayraklama daha iyi hedonik verirdi
5. **Site × Mahalle interaksiyonunu iki kez denedim, ikisinde de kollinearite** — daha büyük mahalle çeşitliliği toplamadan denemek boşa iş

### Anayasaya 3 Öneri

**Öneri #1 — Standing "Veri kaynağı PK zorunluluğu"**  
> Chrome uzantısı/scraper tarafından yazılan tüm kayıtlarda PK = (kaynak_id, url_slug) veya eşdeğer 2-katman birleşik anahtar OLMALI. Tek başına kaynak_id (sahibinden ilan_id, emlakjet_id vs) recycle-güvensiz; iki farklı ilan aynı ID alabilir. **Emsal:** Beykoz S51, 40 çakışmadan 39'u re-assign.

**Öneri #2 — Standing "Zaman-dönemi etiket zorunluluğu"**  
> Bir mahalle için iki farklı zaman noktasından veri karşılaştırılırken, her kayıtta `donem_etiketi` (ör. "CSV_S29_2026Q1", "UZANTI_S48_2026Tem") açıkça yazılmalı. "Eski taramamız atladı" gibi kararlardan ÖNCE dönem-farkı testi zorunlu. **Emsal:** Beykoz S47 hatası (Ortaçeşme yeni-arz'ı atlama sandım).

**Öneri #3 — Standing "Hedonik regresyon minimum kontrol paketi"**  
> Bir CC hedonik regresyon raporu yayınlarken minimum: (a) mahalle sabit etkisi, (b) boilerplate/spam filtre, (c) n≥8 grup kesinti, (d) kollinearite testi (varyansı sıfır olan interaksiyonlar bildirilmeli), (e) R² + n künye. Yaş/kat gibi klasik değişkenlerde beklenen işaret ters çıkarsa "omitted variable bias" ihtimali metin içinde açıkça yazılmalı. **Emsal:** Beykoz S50 (yaş +%0.84 pozitif → S51 mahalle-FE ile -%0.34 doğru işaret).

---

## Kapanış Disiplini

**A04** (aidat zayıf / interaksiyon çözülemedi / v24 öncesi arşiv yok / delta n=1 — dürüst not) · **V37** (v24 kanonik dokunulmadı, v25 zengin katman AYRI, tüm arşiv READ-ONLY) · **V11** (yapısal gözlem, kehanet YOK) · **#21-B** (her sayı için kaynak path'i verildi) · **SİLME YOK** (rm yasağı, sadece append) · **K24a** (Hafıza köprüsü 7 bildirim CC_STATE'de) · **$0** (tüm iş lokal Python + Vision OCR)

**Beykoz vaka açık kalıyor:** Delta 2. tur beklendiği, uzantı-ekibi cevabı geldiği, Endeksa/REIDIN kararı verildiği zaman devam.

---

*CC-Analiz · 2026-07-27 · sprint zinciri Yoklama → S52 · 8 sprint · 3 gün · $0*
