# Vaka: Beykoz — CC-Analiz Bulguları

**Sprint:** S46 · **Tarih:** 2026-07-25 · **Durum:** TT-HAFIZA takılı · **$0**

**Kaynak (#21-B):** `/Volumes/TT-HAFIZA/01_YEDEK/2026-07-03_S29/03_sahibinden_gorseller/ham_ss/_sahibinden_master/Istanbul-Beykoz/*.csv` (5 dosya, 797 kayıt) · Snapshot: 2026-07-03 · İlan tarihleri: 2026-02 → 2026-05

---

## Özet

| Metrik | Değer | Kaynak |
|---|---:|---|
| CSV toplam kayıt | 797 | 5 CSV birleşim |
| Distinct alt-mahalle | 30 | `lokasyon` alanı (Mh. suffix temizlenmiş) |
| Konut satılık yeterli mahalle (n≥3) | 16 | konut_satilik + m² + fiyat |
| Ticari kiralık yeterli mahalle (n≥3) | 11 | ticari_kiralik + m² + fiyat |
| m² doluluk (başlıktan +139 kurtarma sonrası) | %71.0 | csv.m2 + regex `\d+\s*m²` başlıkta |
| Fiyat doluluk | %99.1 | CSV fiyat kolonu |
| Tarih doluluk | %100.0 | CSV tarih kolonu |

---

## G1 — Paşabahçe (Şişecam arazisi)

**Paşabahçe iki katmanda geçiyor:**
- Üst-bölge "Paşabahçe" = 213 kayıt (Acarlar dahil)
- Asıl mahalle "Paşabahçe Mh." = 14 kayıt, m²=1

**Acarlar (flagship — Paşabahçe alt-bölgesi):**

| Metrik | Değer | Kaynak |
|---|---:|---|
| Konut satılık n | **146** | `konut_satilik + m² + fiyat` |
| **Medyan TL/m²** | **210.000** | median(fiyat/m²) |
| Ortanca m² | 340 | median(m²) — büyük daireler |
| Oda top-3 | 6+2 (24) / 7+2 (22) / 2+1 (21) | Counter |

**Paşabahçe alt-bölge diğer:** Acarlar 186 · Paşabahçe Mh. 14 · Soğuksu 6 · İncirköy 5 · Çiğdem 2

**Şişecam arazisi vakası için:** Acarlar zemini 210.000 TL/m² sağlam veri; asıl Paşabahçe Mh. arzı çok kıt (14 kayıt, yalnız 1 m² dolu) — bkz. "cevaplayamadıklarım".

---

## G2 — Ticari Kiralık TL/m²/Ay (F1 ana bulgu)

**Kavacık ofis flagship:**

| Mahalle | n | Medyan TL/m²/ay | Aralık | Ortanca m² |
|---|---:|---:|---|---:|
| **Kavacık** | **33** | **442** | 167 ~ 1.998 | 300 |
| Rüzgarlıbahçe | 12 | 460 | 236 ~ 1.000 | 600 |
| Yeni Mahalle | 5 | 433 | 240 ~ 567 | 150 |
| Fatih | 5 | 417 | 356 ~ 629 | 120 |
| Çavuşbaşı Çiftlik | 8 | 344 | 195 ~ 1.000 | 298 |
| Tokatköy | 13 | 333 | 125 ~ 2.000 | 120 |
| Çubuklu | 3 | 320 | 167 ~ 509 | 100 |
| Göztepe | 4 | 304 | 103 ~ 529 | 950 |
| Çengeldere | 8 | 261 | 69 ~ 525 | 650 |
| Merkez | 3 | 230 | 210 ~ 400 | 100 |
| Ortaçeşme | 3 | 167 | 148 ~ 300 | 1350 |

**Kaynak:** ticari_kiralik + m² + fiyat_tl dolu 122/308 (v24'te 0 idi — CSV +122 kurtarma)

---

## G3 — Konut Satılık Tüm Mahalleler (n≥3)

| Mahalle | n | Medyan TL/m² | Ortanca m² | Oda top |
|---|---:|---:|---:|---|
| Acarlar | 146 | **210.000** | 340 | 6+2 / 7+2 / 2+1 |
| Riva | 109 | 160.000 | 220 | 5+1 / 3+1 / 4+1 |
| Mahmutşevketpaşa | 6 | **259.361** | 405 | 5.5+1 / 3+2 |
| Çubuklu | 4 | 223.077 | 245 | 6+2 / 7+2 / 4+1 |
| Baklacı | 22 | 181.016 | 300 | 7+1 / 4+1 / 4+2 |
| Riva | 109 | 160.000 | — | — |
| Çengeldere | 19 | 152.225 | — | — |
| Elmalı | 3 | 148.077 | — | — |
| Görele | 13 | 146.154 | — | — |
| Çavuşbaşı Çiftlik | 10 | 137.222 | — | — |
| Kanlıca | 4 | 122.500 | — | — |
| Göztepe | 27 | 113.889 | — | — |
| Polonezköy | 6 | 111.236 | — | — |
| Paşamandıra | 5 | 109.375 | — | — |
| Yavuz Selim | 24 | 106.667 | — | — |
| Öğümce | 5 | 99.800 | — | — |
| **Kavacık** | **6** | **84.722** | — | 3+1 / 2+1 |

**Kaynak:** konut_satilik + m² + fiyat_tl → median(fiyat/m²)

### 9 Eksik Mahalle Durumu

| Mahalle | CSV n | m² dolu | Konut-sat medyan | Ticari-kir TL/m²/ay | Karar |
|---|---:|---:|---:|---:|---|
| Çubuklu | 15 | 4 | 223.077 | 320 | ✅ Hazır |
| Elmalı | 8 | 3 | 148.077 | — | ✅ Kısmi |
| Tokatköy | 23 | 1 | — | 333 | ⚠ Ticari OK, konut yok |
| Rüzgarlıbahçe | 27 | 0 | — | 460 | ⚠ Ticari OK, konut yok |
| Paşabahçe Mh. | 14 | 1 | — | — | ❌ Arz kıt |
| Yeni Mahalle | 14 | 2 | — | 433 | ⚠ Ticari OK, konut yok |
| Soğuksu | 6 | 2 | — | — | ❌ Arz kıt |
| Çiğdem | 2 | 1 | — | — | ❌ Arz kıt |
| Zerzavatçı | 1 | 0 | — | — | ❌ Arz kıt |

---

## G4 — Asılı Kalma / Fiyat Düşürme

**Tek snapshot: 2026-07-03_S29 (797 kayıt) · S55 snapshot Beykoz klasörü BOŞ.**

**Sonuç:** "Ortalama kaç günde satıldı" ve "kaç indirimle" HESAPLANAMAZ — en az 2 tarih-farklı snapshot lazım. v25 birleşim sonrası dönüşte delta ölçülebilir.

**Kaynak:** find /Volumes/TT-HAFIZA -name "*[Bb]eykoz*" — S55 tam snapshot dizini var, içi boş.

---

## G5 — Köprü Kesiti (3. Köprü Ağustos 2016)

**İlan tarih dağılımı:**

| Ay | Kayıt |
|---|---:|
| 2026-02 | 110 |
| 2026-03 | 18 |
| 2026-04 | 387 |
| 2026-05 | 282 |

**En erken ilan:** 2026-02 · **En geç:** 2026-05

**Sonuç:** Arşivim 2026-02'den başlıyor. 2016 öncesi/sonrası kırılım için tarihsel arşiv YOK. Riva 115 kayıt tümü 2026-02 → 2026-05 aralığında. **A04: köprü kesiti ölçülemez.**

---

## G6 — Ortaçeşme + Yalıköy (F1 Makas Kontrolü)

**Ortaçeşme:** 5 CSV kayıt · **HEPSİ ticari_kiralik** · konut_satilik = 0

| Kategori | m² | Fiyat | Başlık |
|---|---:|---:|---|
| ticari_kiralik | ? | 30.000 | Beykoz çamlibahce |
| ticari_kiralik | 300 | 90.000 | Elagance depolar ortaçeşme de 300 m2 |
| ticari_kiralik | 1350 | 225.000 | BEYKOZ ORTAÇEŞME'DE KİRALIK 1350M2 OFİS VE DEPO |
| ticari_kiralik | 2200 | 325.000 | KOMPLE KİRALIK 2200 M2 İŞYERİ |
| ticari_kiralik | ? | 40.000 | ÇAMLIBAHÇE MEVKİİNDE İŞYERİ |

**Yalıköy:** 4 CSV kayıt · konut_satilik = 1 · ticari_kiralik = 3

| Kategori | m² | Fiyat | Oda | Başlık |
|---|---:|---:|---|---|
| konut_satilik | 85 | 8.150.000 | 2+1 | Yalıköyde Deniz Manzaralı 2+1 |
| ticari_kiralik | — | 20.000 | — | KİRALIK DÜKKAN/DEPO |
| ticari_kiralik | — | 76.500 | — | BOĞAZ MANZARALI OFİS |
| ticari_kiralik | — | — | — | ŞİRKETİNİ KUR MERKEZ ADRES |

**KARAR:** "Taramadım" DEĞİL — **"taradım-yok"**. CSV'de kayıtlar var, konut arz gerçekten sıfır/1.

**TUTULAN STOK SİNYALİ GEÇERLİ** — Mahalleler kentleşiyor (+10.0 / +8.4 TT-MAP), ticari kullanım büyük ölçekli (Ortaçeşme'de 1350 m² + 2200 m² kiralık depolar), ama konut arz kıt. Yatırımcı satışta değil. **F2'ye böyle gider.**

---

## Alan Doluluk (S46 sonrası)

| Alan | Dolu | Toplam | % | Kaynak |
|---|---:|---:|---:|---|
| fiyat_tl | 790 | 797 | 99.1 | CSV |
| tarih | 797 | 797 | 100.0 | CSV |
| lokasyon | 797 | 797 | 100.0 | CSV |
| oda | 469 | 797 | 58.8 | CSV |
| **m2 (kurtarma sonrası)** | **566** | 797 | **71.0** | CSV+başlık regex |
| bina_yas | 0 | 797 | 0 | ❌ CSV'de yok |
| kat | 0 | 797 | 0 | ❌ CSV'de yok |
| site | 0 | 797 | 0 | ❌ CSV'de yok |
| esya | 0 | 797 | 0 | ❌ CSV'de yok |

---

## Cevaplayamadıklarım

1. **Bina yaşı** — CSV'de yok. Beykoz için PNG SS YOK (sadece 90 sayfa ekran görüntüsü `_arsiv/Beykoz/ekranlar/`, tekil ilan sayfası değil). İlan HTML'i lazım.
2. **Bulunduğu kat** — CSV'de yok. Aynı sebep.
3. **Site adı / site içinde mi** — CSV'de yok.
4. **Eşyalı bilgisi** — CSV'de yok.
5. **Fiyat düşürme izi** — Tek snapshot (S29). S55 klasörü boş.
6. **Ortalama satılma süresi** — Tek snapshot. Ölçüm mümkün değil.
7. **Köprü öncesi/sonrası (2016)** — Arşiv 2026-02 → 2026-05. 10 yıl gerisi YOK.
8. **Rüzgarlıbahçe / Soğuksu / Çiğdem / Zerzavatçı konut m²** — Mahalle kayıtları var ama m² alanı boş; başlıktan da kurtaramadı. Arz gerçekten kıt.

---

## Finans'a Bildirim

**Hazır kartlar:**
- Acarlar konut-sat: **210.000 TL/m²** (n=146)
- Riva konut-sat: 160.000 TL/m² (n=109)
- **Kavacık ofis kir: 442 TL/m²/ay (n=33) — F1 ana bulgu**
- Baklacı konut-sat: 181.016 TL/m² (n=22)
- Mahmutşevketpaşa konut-sat: 259.361 TL/m² (n=6) — en yüksek

**G6 bulgusu:** Ortaçeşme + Yalıköy TUTULAN STOK doğrulandı — F2'ye yönlendir.

**Sınırlar:** Yaş / kat / site / eşya bulunmadı (SS yok); asılı kalma tek snapshot; köprü kırılımı arşiv-eksik.

---

## Disiplin

**S46:** A04 (bulunamayan → None, tahmin yok) · V37 (CSV read-only) · V11 (yapısal, kehanet yok) · #24 tr-safe · #21-B tüm sayıların kaynağı CSV path'i · $0 · SİLME YOK

**JSON rapor:** `/Users/GAC-A/tradia_analiz/cikti/vaka_beykoz_analiz_S46.json` (15.525 bayt)

---

# EK: S47 — Chrome Uzantısı Entegrasyonu (2026-07-26)

**Kaynak (#21-B):** `~/Downloads/tradia_sahibinden_2026-07-25-21-09-32.ndjson` (455 KB, 330 satır) — Chrome uzantısı çekimi 2026-07-25 21:09

## G1 — Uzantı Ne Getirdi?

| Metrik | Değer |
|---|---:|
| Uzantı toplam kayıt | 330 |
| Beykoz | 310 (%94) |
| Tip: liste | 134 |
| Tip: **detay (tam alan)** | **176** |
| Detay taraf çalıştı mı? | ✅ %100 m², %95.5 bina yaşı |

## G2 — MAKAS TESTİ **KESİN CEVAP: ESKİ TARAMA ATLAMIŞ**

| Mahalle | v24 konut-sat | CSV S46 | **Uzantı** | Detay | Medyan TL/m² |
|---|---:|---:|---:|---:|---:|
| **Ortaçeşme** | **0** | **0** | **4** | 2 | **49.167** |
| **Yalıköy** | **1** | **1** | **10** | 7 | **86.667** |

**KARAR:** TUTULAN STOK tezi **ZAYIFLIYOR** — arz VARDI, v24/CSV görmemişti. Uzantının sahibinden filtreleme/lokasyon eşleşme farkı ortaya çıkardı. F2 için: veri sorunu ağırlıkta.

## G3 — v24 Çakıştırma

v24 şeması **ilan_id kolonu tutmuyor** → çakıştırma yapılamadı. Uzantı katmanı `uzanti_katmani_beykoz_S47.jsonl` olarak ayrı tutuldu. v25 şeması için **öneri:** ilan_id kabul et (yeni kural).

## G4 — Finans "9 Katsayı" Çözüm Durumu

| Katsayı | Doluluk (176 detay) | Durum |
|---|---:|---|
| Bina Yaşı | 168/176 %95.5 | ✅ AÇILDI |
| Bulunduğu Kat | 176/176 %100 | ✅ AÇILDI |
| Kat Sayısı | 176/176 %100 | ✅ AÇILDI |
| Isıtma | 168/176 %95.5 | ✅ AÇILDI |
| Aidat (TL) | 168/176 %95.5 | ✅ AÇILDI |
| Eşyalı | 168/176 %95.5 | ✅ AÇILDI |
| Site İçerisinde | 168/176 %95.5 | ✅ AÇILDI |
| Otopark | 168/176 %95.5 | ✅ AÇILDI |
| Krediye Uygun | 168/176 %95.5 | ✅ AÇILDI |

**9/9 katsayı AÇILDI** — Finans'ın kapatılan bilinmezleri çözülüyor.

## G5 — Dürüst Durum

- Uzantı 310 Beykoz kayıt getirdi; **176 detay-tam** (%56.8 detay-kapsam)
- Kalan **134 liste-tipinde**, detay ziyaret edilmedi (oturum kesildi/rate-limit — ban belirtisi YOK)
- v24 (892) vs uzantı (310) → **kısmi %35 kapsam** — tam tarama için ek turlar lazım
- **Zengin mahalleler (detay ≥5):** Kavacık 45 · Acarlar 32 · Çiğdem 14 · Tokatköy 13 · Soğuksu 12 · Göztepe 10 · Kanlıca 8 · Yalıköy 7 · Çubuklu 5 · Riva 5
- **Hâlâ boş:** Rüzgarlıbahçe (1) · Zerzavatçı (0) · Yeni Mahalle (1) — sonraki tur gerekli

## Cevaplayamadıklarım (S47 sonrası)

1. **Kesin çakıştırma** — v24 ilan_id yok; hangi uzantı-kaydı hangi v24-kaydına denk ölçülemedi
2. **Fiyat düşürme izi** — Uzantı `fiyat_gecmisi[]` tutuyor ama bu turda hepsi tek-kayıt; birden fazla tur lazım
3. **Ban olmadığı kesin mi** — belirti yok ama 134 liste detay-ziyareti eksik; ikinci tur test edecek
4. **Rüzgarlıbahçe/Zerzavatçı** — hâlâ arz kıt (v24+CSV+uzantı hepsinde)

## Çıktılar

- **JSON:** [tradia_analiz/cikti/vaka_beykoz_uzanti_S47.json](tradia_analiz/cikti/vaka_beykoz_uzanti_S47.json) (9.424 bayt)
- **JSONL katman:** [tradia_analiz/data/uzanti_katmani_beykoz_S47.jsonl](tradia_analiz/data/uzanti_katmani_beykoz_S47.jsonl) (310 kayıt)

## Disiplin S47

A04 (bulunamayan → None) · V37 (v24 dokunulmadı, uzantı AYRI katman) · V11 (yapısal, kehanet yok) · #21-B kaynak-kanıt · $0 · SİLME YOK
