# Vaka: Beykoz — CC-Analiz S50 (Fiyat Bug + Hedonik Tam)

**Sprint:** S50 · **Tarih:** 2026-07-26 · **$0**

**Kaynak (#21-B):**
- S47 NDJSON: `~/Downloads/tradia_sahibinden_2026-07-25-21-09-32.ndjson`
- S48 NDJSON: `~/Downloads/tradia_sahibinden_2026-07-26-08-56-19.ndjson`
- Birleşim: `~/tradia_analiz/data/uzanti_katmani_beykoz_S48.jsonl` (3.293 kayıt)

---

## G1 ★ — Fiyat Bug Kesin Tanı

**S49'da "uzantı fiyat_tl tutarsız" dedim.** Şimdi kesin tanı:

**Fiyat çıkarımı BUG DEĞİL.** `fiyat_ham` her iki dosyada da doğru okundu ("55.000.000 TL" ve "15.000 TL" farklı ilanlar).

**Asıl sorun: 40 "çakışan" ilan_id'nin 39'u FARKLI ilana ait.**

### Kanıt Tablosu (ilan_id 846843613)

| Alan | S47 | S48 |
|---|---|---|
| tip | liste | liste |
| **kategori** | konut_satilik | **konut_KİRALIK** |
| konum | Akbaba Mh. | **Kavacık Mh.** |
| m² / oda | 190 / 3+1 | **250 / 5+1** |
| başlık | "Doğa Manzaralı" | **"Hastalık Sebebiyle"** |
| URL slug | `emlak-konut-satilik-...` | `emlak-konut-kiralik-...` |
| fiyat_ham | 55.000.000 TL | **15.000 TL** |

Aynı ilan_id, tamamen farklı 2 ilan. Sahibinden ilan_id **re-cycle** ediyor (silinen ilanların ID'si yeni ilanlara veriliyor).

### URL Slug Testine Göre

| Test | Sayı |
|---|---:|
| Toplam çakışan ilan_id | 40 |
| Aynı kategori (satılık↔satılık) | 10 |
| **Aynı URL slug (gerçekten aynı ilan)** | **1** |
| Kategori değişmiş (re-assign kesin) | 30 |

### GERÇEK DELTA (Aynı-Slug Filtreli)

| ilan_id | Eski | Yeni | Δ% | Konum |
|---|---:|---:|---:|---|
| 1316370381 | 52.000.000 | 52.000.000 | **±0.00%** | İstanbulBeykoz |

**Sadece 1 gerçek çakışma — o da fiyat değiştirmedi.**

### İlk Şişirme/İndirim Ölçümü

**YAPILAMADI.** Kanıtlı delta örneklem = 1 → ölçülemez. **Uzantıya kural önerisi (V37 önerisi):** ilan_id + URL_slug birlikte primary key olmalı; ilan_id tek başına recycle-güvensiz.

**Bonus bulgu — SB2F placeholder:** 3.293 kayıttan 417 (%12.7) başlıkta "sb2f" içeriyor (jenerik boilerplate). Sahibinden'in "SahiBinden Bilinmiyor Formu" gibi bir template mi, yoksa test verisi mi net değil — Uzantı ekibine sorulmalı.

---

## G2 — İncirköy (Çelikler) + Polonezköy (Peker GYO)

### İncirköy (Çelikler projesi) — Toplam 64 kayıt

| Kategori | n |
|---|---:|
| konut_satilik | 19 |
| konut_kiralik | 20 |
| ticari_satilik | 6 |
| ticari_kiralik | 6 |
| arsa_satilik | 13 |

| Kategori | m²+f n | Medyan TL/m² | Ortanca m² |
|---|---:|---:|---:|
| Konut satılık | 19 | **62.500** | 250 |
| Arsa satılık | 12 | **93.129** | 416 |

**İlan tarihi:** Temmuz 2026 (18 konut sat + 13 arsa) · Haziran 1  
**Anomali:** Arsa m² fiyatı (93K) konut m² fiyatından (62K) **yüksek** — mimarlar için ihalede küçük parsel primi. Bu **proje etkisi sinyali** olabilir (Çelikler yatırım öncesi arsa alımı canlı).

### Polonezköy (Peker GYO projesi) — Toplam 40 kayıt

| Kategori | n |
|---|---:|
| arsa_satilik | 18 |
| konut_satilik | 13 |
| konut_kiralik | 8 |

| Kategori | m²+f n | Medyan TL/m² | Ortanca m² |
|---|---:|---:|---:|
| Konut satılık | 11 | **120.122** | 400 |
| Arsa satılık | 16 | **11.887** | **13.673** (büyük parseller) |

**İlan tarihi:** Temmuz 27 · Haziran 4 → tümü son 2 ay.  
**Konut/Arsa oranı:** 120K / 11.9K = **%10** (Beykoz normali %15-30) — Polonezköy'de arsa aşırı ucuz (kırsal, büyük parsel), konut premium fiyata gidiyor.

### Proje Öncesi/Sonrası Fiyat Farkı

**ÖLÇÜLEMEDİ.** İki mahallenin **hiçbir ilanı Şubat-Mayıs döneminde CSV S46'da yok** (İncirköy 0, Polonezköy 6 kayıt fakat m² 0). Kurumsal proje **öncesi** referans yok, sadece **sonrası** (Haz-Tem 2026) fiyat sabit. Zaman ekseni oluşmuyor.

**Ancak** — arz akışı zamanlaması ilginç: her iki mahallede kayıtların **tümü** son 2 ayda listelendi. Proje etkisinin **arz cephesinde** görüldüğü söylenebilir (Signals'ın "yeni arz" tezine paralel).

---

## G3 — Yaş × Kat × Isıtma Hedonik Regresyon

### Örneklem
141 detay konut_satılık (Beykoz), aykırı filtreli (TL/m² 20K-800K arası).

### Tek Değişkenli Medyan Tabloları

**Yaş:**
| Kova | n | Medyan TL/m² |
|---|---:|---:|
| 1-5 | 30 | **245.130** |
| 6-15 | 23 | 132.143 |
| 16-25 | 39 | 95.833 |
| 26+ | 49 | 103.846 |

**Kat:**
| Kova | n | Medyan TL/m² |
|---|---:|---:|
| çatı/teras | 14 | **247.549** |
| 1-3 | 67 | 137.931 |
| 7+ | 10 | 116.000 |
| 4-6 | 33 | 110.714 |
| giriş/bahçe | 17 | 84.348 |

**Isıtma:**
| Tip | Var/Yok medyan | Fark |
|---|---|---:|
| Yerden | 262.651 / 117.570 | **+%123.4** |
| Merkezi | 242.771 / 104.532 | **+%132.2** |
| Site içinde | 200.000 / 97.024 | **+%106** |

### OLS Regresyon (log TL/m² ~ yaş + kat + ısıtma + site)

```
log(TL/m²) = 11.2548 + 0.0083·yaş + 0.0143·kat
           + 0.7302·yerden + 0.7243·merkezi + 0.2953·site
```

| Değişken | β | Etki | Yorum |
|---|---:|---:|---|
| **Intercept** | 11.2548 | Baz TL/m² ≈ **77.247** | Yaş=0, kat=giriş, ısıtma yok, site dışı |
| yaş | +0.0083 | +%0.84 / yıl | **BEKLENENIN TERSİ** ↓ |
| kat | +0.0143 | +%1.44 / kat | Yüksek kat premium |
| **Yerden ısıtma** | **+0.7302** | **+%107.5** | Yeni yapı premium sinyali |
| Merkezi ısıtma | +0.7243 | +%106.3 | Yerden'e yakın etki |
| Site içinde | +0.2953 | +%34.4 | Site primi |

**R² = 0.439** (n=141) — modelin açıklama gücü orta.

### Kritik Yorum (A04 dürüst)

**Yaş katsayısı POZİTİF** — beklenen negatif olmalıydı (eski yapı → düşük fiyat). Sebep muhtemelen **omitted variable bias**: eski yapıların çoğu Anadolu Hisarı/Merkez gibi Boğaz-yakın konumlarda; mahalle sabit etkisi modelde yok. Tek-değişkenli tablo doğru işareti veriyor (26+ yaş 103.846, 1-5 yaş 245.130). Regresyon **mahalle-kontrolsüz** için bakılmalı.

**Isıtma katsayısı gerçek**: Yerden **+%107**, merkezi **+%106** — nominal etki büyük ve tek-değişkenli tabloyla uyumlu. Bu, **modernizasyon primi** — hem lokasyon hem tesis kalitesi.

**Site içinde +%34** — orta prim, temiz sinyal.

---

## G4 — Cevaplayamadıklarım

1. **Gerçek fiyat delta** — 1 ölçülebilir çakışma yeterli değil. 3-4 tur çekim + URL_slug primary key sonrası mümkün.
2. **SB2F placeholder %12.7** — kayıtların ne kadarı sentetik/test veri belirsiz. Uzantı ekibine sor.
3. **Hedonik yaş katsayısı pozitif** — mahalle sabit etkisi eksik. Fixed-effects model sonraki tur.
4. **İncirköy arsa > konut anomalisi** — proje etkisi hipotezi ölçülmedi, saha bilgisi gerek.
5. **Polonezköy Peker GYO öncesi/sonrası** — CSV S46'da baz yok → t=0 karşılaştırma yapılamaz.
6. **Isıtma × yaş interaksiyonu** — "yeni yapı + yerden ısıtma" primi ölçülmedi (n<20 kesiti).

---

## Çıktılar

- **Bu MD:** `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S50.md`
- **JSON özet:** `~/tradia_analiz/cikti/vaka_beykoz_S50.json`
- **v24 dokunulmadı** (V37)

## Disiplin S50
A04 (fiyat delta 1 kayıt yeter değil dürüst; hedonik yaş pozitif dürüst not) · V37 (v24 read-only) · V11 (yapısal, kehanet yok) · #21-B kaynak-kanıt · $0 · SİLME YOK
