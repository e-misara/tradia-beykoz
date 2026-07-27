# Vaka: Beykoz — CC-Analiz S48

**Sprint:** S48 · **Tarih:** 2026-07-26 · **$0**

**Kaynak (#21-B):**
- S47: `~/Downloads/tradia_sahibinden_2026-07-25-21-09-32.ndjson` (330 kayıt)
- **S48 yeni:** `~/Downloads/tradia_sahibinden_2026-07-26-08-56-19.ndjson` (3.022 kayıt, 2,85 MB)
- Birleşim yöntemi: ilan_id unique, çakışan ise detay öncelikli + fiyat_geçmişi merge

---

## G1 — Birleşim + Kapsam

| Metrik | S47 | **S48 birleşim** | Δ |
|---|---:|---:|---:|
| Toplam kayıt | 330 | 3.312 | +2.982 |
| Çakışan ilan_id | — | 40 | (fiyat_geçmişi birleşti) |
| Beykoz kayıt | 307 | **3.293** | +2.986 |
| Tip: detay | 176 | **977** | +801 |
| Tip: liste | 154 | 2.316 | +2.162 |
| **v24 kapsam (Beykoz 892)** | %34 | **%369** | +%335 |

**Kapsam v24'ün ~3.7 katına çıktı** — Beykoz'da çok daha fazla arz görünüyor (v24 sabit-anlık, uzantı canlı+kalıcı satışta).

### Yeni Kategoriler (S47'de sadece konut_satilik vardı)

| Kategori | S47 | S48 | Δ |
|---|---:|---:|---:|
| **konut_satilik** | 307 | **1.034** | +727 |
| konut_kiralik | 0 | 978 | +978 |
| **arsa_satilik** | 0 | **705** | +705 (YENİ) |
| ticari_kiralik | 0 | 335 | +335 |
| ticari_satilik | 0 | 174 | +174 |
| diğer (regex zayıf) | 23 | 67 | +44 |

**Regex v2:** `emlak-(daire|villa|arsa|is-yeri|bina|residans|dukkan|ofis|depo|magaza|otel|tarla|zeytinlik|bahce|mustakil)-(satilik|kiralik)`. Diğer 67 kayıt kategori dışı (yalıcılar, kompleks vb.).

---

## G2 — Hedonik Deneme (kat/yaş/site etkisi)

### Kavacık (n=46 detay konut_satilik) — Genel medyan **97.024 TL/m²**

**Bina yaşı:**
| Yaş | n | Medyan TL/m² |
|---|---:|---:|
| 0 (yeni) | 19 | 88.652 |
| 10-15 | 6 | 99.969 |
| 20-25 | 18 | **100.000** |
| 30+ | 3 | 84.348 |

**Kat:**
| Kat | n | Medyan TL/m² |
|---|---:|---:|
| 1-3 | 16 | **112.224** |
| 4-6 | 12 | 102.785 |
| 7+ | 8 | 97.917 |
| giriş | 9 | 85.417 |

**Site içinde:** Evet %94.017 · Hayır %98.214 (fark küçük, n<5 Evet'te güvensiz)

**Kavacık okuma:** Kat yükseldikçe fiyat düşüyor (7+ → 1-3 arası ~%15 makas). Yeni bina beklenenin aksine daha ucuz (%88K vs eski %100K) — muhtemelen yeni-yapı m² şişirme veya bölgede küçük yeni-yapı stoku farklı segmentte.

### Acarlar (n=62 detay konut_satilik) — Genel medyan **263.485 TL/m²**

**Bina yaşı:**
| Yaş | n | Medyan TL/m² |
|---|---:|---:|
| 0 (yeni) | 23 | **312.000** |
| 1 | 3 | 245.098 |
| 2 | 11 | 245.161 |
| 3 | 6 | 291.054 |
| 5 | 8 | 228.182 |
| 10-15 | 7 | 300.000 |
| 20-25 | 3 | 99.000 |

**Kat:**
| Kat | n | Medyan TL/m² |
|---|---:|---:|
| 1-3 | 14 | **288.986** |
| 4-6 | 8 | 221.200 |
| 7+ | 15 | 250.000 |

**Site içinde:** Evet (n=60) 265K · Hayır (n=2) 235K — Acarlar zaten site-ağırlıklı, karşılaştırma anlamsız.

**Acarlar okuma:** Yeni bina yaş=0 %312K (klasik yaş primi %36 üstünde), 20-25 yaş ~%99K'ya çöküyor (%68 iskonto). Kat 1-3 en pahalı (giriş/orta kat premium).

### Riva (n=31 detay konut_satilik) — Genel medyan **206.452 TL/m²**

| Yaş | n | Medyan TL/m² |
|---|---:|---:|
| 0 | 15 | 208.333 |
| 1 | 2 | 265.671 |
| 2 | 4 | **240.967** |
| 10-15 | 9 | 181.667 |

Site: Evet (24) 209.936 · Hayır (7) 200.000 — küçük fark.

**Riva okuma:** Yaş 0-2 dip 208K → tepe 265K (%27 fark), 10-15 yaşta 181K'ya çöküş (%12 iskonto). Site içi/dışı fark küçük.

---

## G3 — ISI Ayağı (Mahalle × Yoğunluk × Fiyat)

Konut satılık (v2 kategori regex + m²/fiyat çıkarılabilen):

| Mahalle | İlan | m²+f n | Medyan TL/m² |
|---|---:|---:|---:|
| **Acarlar** | 202 | 174 | **225.637** |
| Mahmutşevketpaşa | 14 | 13 | 225.000 |
| Anadolu Hisarı | 41 | 38 | 212.839 |
| Kanlıca | 40 | 40 | 211.171 |
| Baklacı | 17 | 15 | 204.545 |
| Çavuşbaşı Çiftlik | 17 | 15 | 170.000 |
| Riva | 122 | 120 | 174.038 |
| Çiğdem | 26 | 25 | 166.222 |
| Soğuksu | 20 | 20 | 162.833 |
| Çengeldere | 24 | 24 | 155.754 |
| Merkez | 36 | 34 | 154.954 |
| Göksu | 18 | 18 | 154.500 |
| Çubuklu | 24 | 24 | 147.299 |
| Tokatköy | 35 | 35 | 115.909 |
| Göztepe | 43 | 43 | 113.889 |
| Kavacık | 81 | 81 | 101.724 |
| Yavuz Selim | 28 | 26 | 101.095 |
| **Yalıköy** | **51** | 49 | **97.222** |
| İncirköy | 19 | 19 | 62.500 |
| **Ortaçeşme** | **21** | 21 | **59.091** |

**Isı okuması:**
- **Yüksek sıcak (200K+):** Acarlar, Mahmutşevketpaşa, Anadolu Hisarı, Kanlıca, Baklacı — Boğaz-yakın premium bant
- **Orta (150-200K):** Riva, Çavuşbaşı, Çiğdem, Soğuksu, Çengeldere, Merkez, Göksu, Çubuklu
- **Düşük (100-150K):** Tokatköy, Göztepe, Kavacık, Yavuz Selim
- **Uçuk düşük (<100K):** Yalıköy 97K, İncirköy 62K, **Ortaçeşme 59K**

**S46→S47→S48 kesin cevap ilerlemesi:**

| Mahalle | S46 CSV konut | S47 uzantı | **S48 uzantı** | Medyan TL/m² |
|---|---:|---:|---:|---:|
| Ortaçeşme | 0 | 4 | **21** | **59.091** |
| Yalıköy | 1 | 10 | **51** | **97.222** |

S47'de "arz vardı ama küçük" idi. S48'de Ortaçeşme 21 konut kayıt + 59K TL/m² sabit → **düşük-fiyat bölge sinyali doğrulandı**, TUTULAN STOK değil, **geniş-ucuz arz**. Yatırım sunumunda "gelişen ucuz bölge, uzun vadeli değer artışı potansiyeli" olarak konuşulabilir.

---

## Cevaplayamadıklarım

1. **"diğer" 67 kayıt** — regex tanımlamadı (yalıcılar, kompleks, kısmi URL). Manuel snapshot lazım.
2. **Kavacık'ta yeni-yapı ucuz paradoksu** — Kavacık merkez ofis-ağırlıklı, yeni-yapı stok ne? Örneklem küçük (n=19).
3. **Acarlar yaş=20-25 → 99K çöküşü** — sadece 3 kayıt, out-of-sample olabilir.
4. **Isıtma/aidat hedonik** — regex sadeliği için kat/yaş/site ile sınırlandırıldı; sonraki turda aidat× TL/m² katsayısı.
5. **Fiyat düşürme** — 40 çakışan ilan_id'de fiyat_geçmişi merge oldu, ama S48 tek-tur; delta ölçmek için 3. tur gerek.
6. **Kategori "arsa_satilik" 705 kayıt** — Beykoz için büyük hacim, arsa medyan m² TL çıkarılmadı (ihtiyaç Patron zamanı).

---

## Çıktılar

- **Bu MD:** `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S48.md`
- **Uzantı katman JSON:** `/tmp/beykoz_s48_final.json` → Mac'e taşınacak
- **v24 dokunulmadı** (V37)

## Disiplin S48
A04 (bulunamayan → dışlandı, tahmin YOK) · V37 (v24 read-only, uzantı AYRI katman) · V11 (yapısal, kehanet yok) · #21-B kaynak-kanıt · $0 · SİLME YOK
