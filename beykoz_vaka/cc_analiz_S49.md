# Vaka: Beykoz — CC-Analiz S49 (4 Aylık Zaman Serisi + Tam Kapsam)

**Sprint:** S49 · **Tarih:** 2026-07-26 · **$0**

**Kaynak (#21-B):**
- **Şub-May 2026:** `~/tradia_analiz/data/beykoz_csv_derin_S46.jsonl` (797 CSV kayıt, S46 üretimi, ilan tarihi 2026-02→2026-05)
- **Tem 2026:** `~/tradia_analiz/data/uzanti_katmani_beykoz_S48.jsonl` (3.293 uzantı kayıt, S47+S48 birleşim, ilan tarihi 2026-06→2026-07)

**Sistemde İLK KEZ zaman serisi mümkün.**

---

## G1 — 4 AYLIK DEĞİŞİM (Mahalle × Dönem × Medyan)

Konut satılık, TL/m² medyan. Örneklem küçükse (n<10) güvensiz.

| Mahalle | Şub-May n | ŞM medyan | Tem n | Tem medyan | Δ% | Güven |
|---|---:|---:|---:|---:|---:|---|
| **Acarlar** | 144 | 210.140 | **191** | **220.455** | **+4.9%** | sağlam |
| **Riva** | 109 | 160.000 | **122** | **172.864** | **+8.0%** | sağlam |
| Göztepe | 27 | 113.889 | 43 | 113.889 | **±0.0%** | sağlam |
| Yavuz Selim | 22 | 106.667 | 28 | 101.095 | -5.2% | sağlam |
| Baklacı | 22 | 181.016 | 17 | 196.970 | +8.8% | orta |
| Çengeldere | 19 | 152.225 | 24 | 155.754 | +2.3% | orta |
| Çavuşbaşı Çiftlik | 10 | 137.222 | 17 | 170.000 | +23.9% | orta |
| Görele | 13 | 146.154 | 11 | 137.500 | -5.9% | orta |
| Kavacık | 6 | 84.722 | 81 | 101.724 | +20.1% | güvensiz-ŞM |
| Anadolu Hisarı | 2 | 373.284 | 38 | 212.839 | -43.0% | güvensiz-ŞM |
| Merkez | 2 | 291.827 | 34 | 154.954 | -46.9% | güvensiz-ŞM |
| Çubuklu | 4 | 223.077 | 24 | 147.299 | -34.0% | güvensiz-ŞM |
| Mahmutşevketpaşa | 4 | 259.361 | 14 | 223.750 | -13.7% | güvensiz-ŞM |
| Elmalı | 3 | 148.077 | 12 | 173.586 | +17.2% | güvensiz-ŞM |

**YENİ ARZ (Şub-May'da CSV'de yok, Tem'de var):**
Ortaçeşme (21 · 59.091) · İncirköy (19 · 62.500) · Gümüşsuyu (13 · 120.000) · Çamlıbahçe (9 · 72.414) · Kaynarca (5 · 129.783) · Anadolu Kavağı (4 · 94.602)

**Sağlam okuma (n≥20 iki dönemde):**
- Acarlar **+4.9%** — hafif tırmanış, %5 nominal yıllık ~%15
- Riva **+8.0%** — orta artış
- Göztepe **±0.0%** — donuk
- Yavuz Selim **-5.2%** — hafif düşüş
- Çengeldere **+2.3%** — nominal donuk

**F1/F2 için ilk defa zaman-boyutlu bulgu.** Beykoz genelinde nominal artış küçük (Acarlar +4.9, Riva +8.0), enflasyona göre reel-negatif olduğu izlenimi güçlü.

---

## G2 — 40 Çakışan İlan Fiyat Delta

| Kategori | Sayı |
|---|---:|
| Toplam çakışan ilan_id | 40 |
| Aynı-tip (güvenilir taban) | 39 |
| Farklı-tip (kontamine, atlandı) | 1 |
| Aynı-tip + aynı fiyat | 3 |
| Aynı-tip + değişen | 36 (21 indirim / 15 zam) |

**ANCAK — kritik gözlem (A04):**  
Uzantı fiyat çıkarımı **tutarsız**. Örnekler:

| ilan_id | Eski | Yeni | Δ% |
|---|---:|---:|---:|
| 846843613 | 55.000.000 | 15.000 | -100% |
| 846718521 | 54.000.000 | 25.000 | -100% |
| 846858316 | 25.600.000 | 14.000 | -99.9% |
| 846814078 | 22.000.000 | 29.000 | -100% |
| 846854570 | 112.000.000 | 180.000 | -99.8% |

Bu "indirimler" gerçek değil — uzantı **liste-tipinde iki farklı çekimde farklı fiyat alanını yakalıyor** (muhtemelen aidat/m² fiyatı/kredi fiyatı vs asıl fiyat karışıyor).

**İndirim medyan %99.58, zam medyan %248** → **fizik-dışı**. Delta ölçümü YAPILAMAZ, uzantı fiyat çıkarım logic'i düzeltilmeli.

**Sonuç:** Fiyat düşürme izi bu turdan çıkmıyor. Uzantı log'unu izleyip fiyat_tl kanaklarını sabit tutmadan sonraki tur da güvensiz.

---

## G3 — Arsa 705 + Ticari Satılık 174

### Arsa Satılık — Beykoz için kritik (imar kısıtı yüksek)

| Mahalle | n | Medyan TL/m² | Ortanca m² |
|---|---:|---:|---:|
| **Gümüşsuyu** | 37 | **61.947** | 538 |
| Baklacı | 30 | 39.666 | 1.490 |
| Çengeldere | 46 | 34.759 | 706 |
| Çavuşbaşı Çiftlik | 45 | 32.661 | 960 |
| Yavuz Selim | 49 | 30.902 | 1.063 |
| Riva | 82 | 30.284 | 752 |
| Örnekköy | 30 | 25.705 | 654 |
| Yeni Mahalle | 18 | 23.399 | 237 |
| Elmalı | 22 | 21.650 | 580 |
| Tokatköy | 19 | 21.053 | 380 |
| Mahmutşevketpaşa | 31 | 18.224 | 1.920 |
| Paşamandıra | 16 | 13.759 | 1.418 |
| Polonezköy | 16 | 11.887 | 13.673 |
| Anadolufeneri | 33 | 10.753 | 1.412 |
| Cumhuriyetköy | 22 | **10.162** | 2.382 |

**Arsa okuması:**  
- **En pahalı** Gümüşsuyu 61.947 TL/m² (küçük parseller, orta-Beykoz konumu)
- **En ucuz** Cumhuriyetköy 10.162 TL/m² (büyük parseller, kuzey kırsal)
- Konut satılık m² fiyatına oran: arsa/konut ≈ **%15-30** (Beykoz konut 100-220K TL/m², arsa 10-62K TL/m²)
- Bu makas normal (imar+inşaat maliyeti)

### Ticari Satılık — F2 son eksik

| Mahalle | n | Medyan TL/m² | Ortanca m² |
|---|---:|---:|---:|
| Çubuklu | 5 | **92.500** | 450 |
| Anadolufeneri | 3 | 89.286 | 140 |
| Kavacık | 7 | **87.500** | 420 |

**Küçük örneklem — büyük mahallelerde bile n<10.** Beykoz ticari satılık kısıtlı arz.

---

## G4 — Isıtma & Aidat Katsayısı

### Isıtma × Medyan TL/m² (konut satılık detay, n=369)

| Isıtma | n | Medyan TL/m² |
|---|---:|---:|
| **Yerden ısıtma** | 57 | **262.651** |
| Merkezi | 36 | 240.616 |
| Isıtma yok | 10 | 177.273 |
| Kombi doğalgaz | 247 | **134.783** |
| Diğer | 5 | 217.500 |
| Soba | 5 | 119.048 |

**Isıtma primi:** Yerden ısıtma **kombi doğalgaza göre %95 üstünde** (262K vs 135K). Bu Beykoz'da yerden-ısıtmalı yeni yapı = premium segment sinyali.

### Aidat × Medyan TL/m²

| Aidat kova | n | Medyan TL/m² |
|---|---:|---:|
| 0-aidatsız | 17 | 147.368 |
| 1-500 TL | 17 | 88.077 |
| 500-2k | 7 | 100.000 |
| 2k-5k | 15 | 110.741 |
| 5k-10k | 13 | 166.667 |
| **10k+** | 19 | **204.800** |

**Aidat okuması:** Yüksek aidat (10k+) yüksek fiyat işareti — site içi/premium tesis. Aidatsız kayıtlar orta seviye (site dışı bağımsız yapı).

---

## G5 — Ortaçeşme Signals İtirazına Kesin Cevap

**Signals dedi:** "Ortaçeşme yeni-arz olabilir, kesin atlanmış değil."

### Ortaçeşme 21 Konut Satılık İlan Tarihi

| İlan tarihi ay | Kayıt |
|---|---:|
| **2026-Temmuz** | **19** |
| 2026-Haziran | 2 |
| Şubat-Mayıs (S46 dönemi) | **0** |

**KESİN CEVAP: SIGNALS HAKLI · BEN (S47) YANILDIM.**

Ortaçeşme'nin 21 ilanının **21/21'i Haziran-Temmuz 2026** listelenmiş. **CSV döneminde (Şub-May) sıfır ilan vardı, çünkü bu ilanlar HENÜZ YOKTU.** "Eski tarama atlamış" tezi çürüdü — **yeni arz akışı** var.

**V16 Öz-Düzeltme (S47 → S49):**  
S47'de "Ortaçeşme uzantıda 4 → CSV atlamış" dediğimde ilan tarihlerine bakmamıştım. S49 tarih damgası incelemesi Signals'ın doğru olduğunu gösterdi. **Karar bakımı: Ortaçeşme YENİ ARZ akışı (Hazİ-Tem 2026), F2 için "gelişen ucuz bölge + hızlı arz büyümesi" olarak konumlanmalı.**

---

## G6 — Cevaplayamadıklarım

1. **Fiyat delta ölçümü YAPILAMADI** — uzantı fiyat_tl çıkarımı tutarsız (aidat/m²/kredi vs asıl fiyat karışıyor). Uzantı logic düzeltilmeli.
2. **CSV S46 mahalle örneklem küçük (n<10)** — 8 mahallede Δ hesaplandı ama güvensiz (Anadolu Hisarı, Merkez, Çubuklu, Mahmutşevketpaşa, Elmalı, Kavacık'ın CSV yanı 6-4-3-2 arasında). Bu iller **S49 rakamı doğru, CSV yanı zayıf**.
3. **Ticari satılık n<10** — 3 mahalle görünür seviyede, geri kalanı ölçülemedi.
4. **Yalıköy S49 Δ hesaplamadı** — CSV'de 1 vardı (n<10 güvensiz), Tem 51 → değişim güvensiz, ama Yalıköy da yeni-arz olabilir (S49 tarih taraması sonraki tur).
5. **Isıtma "kombi doğalgaz" alt-medyanı düşük** — muhtemelen eski-yapı ağırlıklı örneklem; kombiye özel yaş-kırılımı yapılmadı.
6. **Aidat orta-kovada (500-5k) düşük fiyat** — çokgen: küçük tesis + orta segment; hedonik regresyon gerek.

---

## Çıktılar

- **Bu MD:** `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S49.md`
- **JSON özet:** `~/tradia_analiz/cikti/vaka_beykoz_S49.json`
- **v24 dokunulmadı** (V37)

## Disiplin S49
A04 (fiyat delta absürd → **ölçülemedi** dürüst; S47 yanlışı V16 açık) · V37 (v24 read-only, uzantı AYRI katman) · V11 (yapısal, kehanet yok) · #21-B kaynak-kanıt · $0 · SİLME YOK
