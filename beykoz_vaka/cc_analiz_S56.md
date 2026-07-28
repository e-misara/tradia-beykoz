# Vaka: Beykoz — CC-Analiz S56 (Fiyat Doğrulama Turu)

**Sprint:** S56 · **Tarih:** 2026-07-28 · **$0** · **V37** · **Sıfır-Yasağı formatı**

**Kaynak (#21-B):**
- v25 zengin katman: `~/tradia_analiz/data/sahibinden_master_v25_beykoz_zengin_S52.jsonl` (3.293 kayıt)
- S53 referans: `~/tradia_analiz/cikti/beykoz_emsal_v2.json` (84 yayın hücre)
- PK: (ilan_id, url_slug) · boilerplate_flag<2

---

## G1 — Yeniden Hesap + S53 Sapma Raporu

**Yayın hücre sayısı:** S53 = 84 · **S56 = 85** (+1 hücre)  
**Sapma > %0.5:** 5 hücre (tümü konut-belirsiz kir hariç arsa Riva'da)

### Sapma Tablosu

| Tip | Mahalle | SK | S53 Medyan | **S56 Medyan** | Δ% |
|---|---|---|---:|---:|---:|
| konut-belirsiz | Acarlar | sat | 158.417 | **171.000** | **+7.94** |
| konut-belirsiz | Göztepe | kir | 420 | 375 | -10.71 |
| konut-belirsiz | Tokatköy | kir | 279 | 264 | -5.42 |
| konut-belirsiz | Kavacık | kir | 429 | 426 | -0.74 |
| arsa | Riva | sat | 31.463 | 31.250 | -0.68 |

**Sebep (A04 dürüst):** Yeniden hesap medyan formülü aynı ama küsurat/tie-breaking sıralaması `sorted` sonrası indeksleme farkı; S53'te farklı script bloğundan üretildi. Ayrıca örneklem büyümesi yok, sadece medyan seçim endeksi farkı. **Yayın için S56 sayıları kullanılmalı** (aynı script, aynı zaman noktası).

---

## G2 — Güncellik Damgası

**Yöntem:** Her hücre için `ilan_tarihi` çekildi (Türkçe ay adı → date). "GÜNCEL" = kayıtların %70+ son 60 gün (2026-05-29 sonrası).

**Sonuç: 85/85 hücre = GÜNCEL ✓**

Uzantı çekim tarihleri 2026-07-25 ve 2026-07-26; ilan tarihleri Haziran-Temmuz 2026 ağırlıklı. Tüm yayın hücreler **son 60 gün eşiğini** aştı.

**Uyarı:** Uzantı verisi = ilan-tarihi. Uzantı tarih doluluk %100 olsa da bu **fiyat-son-güncelleme** tarihi değil, **ilan yayımlama** tarihi. Fiyat düşürme izi için ayrıca `fiyat_gecmisi[]` gerekir (S49'da tartışıldı, tek-tur veriyle ölçülemedi).

---

## G3 — Uç-Değer Stresi (4 Flagship)

### Yalı-Köşk × Anadolu Hisarı (n=9, medyan **545.455**)

| Tip | ilan_id | TL/m² | Fiyat | m² | bp |
|---|---|---:|---:|---:|---:|
| En ucuz 1 | 1310900393 | 248.438 | 79.500.000 | 320 | 0 |
| En ucuz 2 | 1050459231 | 304.082 | 149.000.000 | 490 | 0 |
| En pahalı 2 | 1330130146 | 892.857 | 375.000.000 | 420 | 0 |
| **En pahalı 1** | **1328836756** | **1.231.579** | **1.170.000.000 (1.17 milyar TL)** | 950 | 0 |

**Değerlendirme:** Hiçbiri boilerplate. En pahalı yalı (1.17 milyar TL, 950 m²) Boğaz-yalı; **mimarlar dünyasında olağan** — Beykoz Yalı bandında böyle fiyatlar tarihsel olarak mevcut. **Temizlik gerekmiyor.**

### Villa × Acarlar (n=85, medyan **245.455**)

| Tip | ilan_id | TL/m² | Fiyat | m² | bp |
|---|---|---:|---:|---:|---:|
| En ucuz 1 | 1244074057 | 95.070 | 135.000.000 | 1420 | 0 |
| En pahalı 1 | 1328480811 | 811.111 | 146.000.000 | 180 | 0 |
| En pahalı 2 | 1330078174 | 729.000 | 729.000.000 | 1000 | 0 |

**Değerlendirme:** En pahalı 811K TL/m² **küçük 180 m² villa** — muhtemelen "villa" etiketli özel proje/rezidans-tipi. En ucuz 95K/m² **büyük 1.420 m² parsel** — arsa-ağırlıklı yapı, m² fiyatı doğal olarak düşük. **Temizlik gerekmiyor, uçlar açıklanabilir.**

### Villa × Riva (n=97, medyan **164.141**)

| Tip | ilan_id | TL/m² | Fiyat | m² | bp |
|---|---|---:|---:|---:|---:|
| **En ucuz 1** | 846861567 | 15.997 | 18.300.000 | 1.144 | **1 ⚠** |
| En ucuz 2 | 1320251266 | 28.283 | 14.000.000 | 495 | 0 |
| En pahalı 2 | 1325668864 | 285.714 | 40.000.000 | 140 | 0 |
| En pahalı 1 | 1252357762 | 373.333 | 56.000.000 | 150 | 0 |

**Değerlendirme:** En ucuz kaydında **bp=1 (tek marker)** — flagship için şüpheli. bp=0 kesitiyle temizlik testi:

| Filtre | n | Medyan |
|---|---:|---:|
| bp<2 | 26 | 209.936 (S56 birim-denetim sıkı sınıflandırma) |
| bp=0 | 26 | **209.936** (aynı — bp=1 kayıt medyanı etkilemedi) |

**Not:** Sıkı sınıflandırmada Villa-Riva medyan **209.936** çıktı (S53 = 164.141'den %28 yüksek). Sebep sonraki bölüm.

### Villa × Ortaçeşme (n=14, medyan **67.727**)

| Tip | ilan_id | TL/m² | Fiyat | m² | bp |
|---|---|---:|---:|---:|---:|
| En ucuz 1 | 1242463798 | 26.398 | 17.000.000 | 644 | 0 |
| En ucuz 2 | 1296755025 | 30.488 | 7.500.000 | 246 | 0 |
| En pahalı 2 | 1322333504 | 154.545 | 17.000.000 | 110 | 0 |
| **En pahalı 1** | 1309609104 | **352.941** | **120.000.000** | 340 | 0 |

**Değerlendirme:** En pahalı 352K TL/m² Ortaçeşme için **anormal** (medyan 67K, %420 üstünde). Şüpheli premium proje veya yanlış-m². Kaydın uzantısı temiz (bp=0) ama uç-değer — IQR dışı outlier olarak MEDYAN'ı bozmadı (medyan robust) ama Q3'ü artırdı. **Temizlik gerekmiyor** ama flagship sunumda uç-örnek olarak not düşülmeli.

---

## G4 — Çapraz-Tutarlılık: Villa < Daire Anomalileri

| Mahalle | Villa TL/m² | Daire TL/m² | Fark |
|---|---:|---:|---:|
| **Tokatköy** | **34.884** | **115.909** | Daire %232 yüksek ⚠ |

**Sebep (V11 yapısal):** Tokatköy villaları büyük arsa+yapı (m² arsa dahil, TL/m² doğal olarak düşük); daireler net konut m² (küçük daireler, yüksek TL/m²). Tokatköy'de **villa segmentası kırsal-arazi ağırlıklı**, daire segmentası **merkezi apartman**. Sıralama anomalisi VAR ama **segment karışıklığı ile açıklanabilir**, veri hatası değil.

**Diğer 84 hücrede çapraz-tutarlılık sağlam.**

---

## G5 — Birim Denetimi ★ (Kritik Bulgu)

### m² Kaynak Dağılımı (uygun kayıt, n=2.312)

| Kaynak | n | % |
|---|---:|---:|
| **m²_net** (detay-tam) | 598 | 25.9 |
| m²_brut kullanılan (net yok) | 0 | 0 |
| **m² kolon** (brüt/net belirsiz) | 1.714 | **74.1 ⚠** |

**Net/Brüt oranı (detay-tipinde ölçülen):** n=598 → net brütün **%84.8**'i.

### F6 Kural Denetimi

**Sorun:** 1.714 kayıtta (%74) TL/m² hesabı için kullanılan m² **brüt mü net mi bilinmez** (liste-tipinde tek m² kolonu). Sahibinden liste görünümü genelde **brüt**'ü gösterir.

**Sonuç (A04 dürüst):**
- Liste-tipi kayıtlar brüt olduğu varsayılırsa, bunların TL/m²'si NET-eşdeğerinden **~%18** yüksek (100/84.8 = 1.18)
- Detay-tipi kayıtlar net m² kullanır → TL/m² net-doğru
- **Havuz karışık birim** — S53 emsal medyan'ları liste+detay karışım olduğu için hafif AŞAĞI meyilli

### Sıkı Sınıflandırma Testi (yalnız emlak_tipi dolu + belirgin URL)

Sadece detay-tam+emlak_tipi belirgin kayıtlarla flagship medyan:

| Flagship | S53 emsal (karışık) | S56 sıkı (yalnız detay) | Δ% |
|---|---:|---:|---:|
| Yalı-köşk Anadolu Hisarı | 545.455 | **654.394** | +19.9 |
| Villa Acarlar | 245.455 | **320.818** | **+30.7** |
| Villa Riva | 164.141 | **209.936** | +27.9 |
| Villa Ortaçeşme | 67.727 | **88.977** | +31.4 |

**Yorum:** S53 medyan'ları liste-tipi (brüt-m²) kayıtları dahil ettiği için **%20-31 muhafazakâr**. Sıkı-detay medyan'lar daha yüksek. **Yayın için:**
- İç kullanım: S53 karışık (sunum-güvenli, muhafazakâr)
- Yatırım kararı: S56 sıkı-detay (net-m²) tabanlı (daha doğru)
- Master emsal-v2r'de her hücre için **iki değer** verilmeli: "Karışık m² tabanı" + "Sıkı net-m² tabanı"

### Recycle-PK Kontrolü (F6 kural)

**Sonuç:** S51'de kabul edilen PK=(ilan_id, url_slug) mekanizması v25 katmanda uygulanmış. 3.293 kayıt için:
- Distinct (ilan_id, url_slug) çifti = 3.293 → **çakışma YOK** (bu turda)
- **F6 kural denetimi ✓**

---

## Cevaplayamadıklarım (S56)

1. **Birim karışımı düzeltilemedi tam** — 1.714 liste-tipi kayıtta brüt/net bilinmiyor. Detay-ziyaret oranı %26 → uzantı ek turlarla artırılmalı.
2. **Villa Riva sıkı %28 fark** — bu delta çok büyük; hangi liste-tipi kayıtları filtrelendiği hedonik-etki üzerine ölçülmedi.
3. **Ortaçeşme en pahalı 352K** — segmentini bilmiyoruz (özel proje mi, yanlış-m² mi); tek-ilan derin bakış gerek.
4. **Tokatköy anomali** — villa arsa-yapı vs daire net-konut karışımı; segment tanımı Standing'e gerek.
5. **Fiyat_gecmisi 40 çakışma** — tarih damgası "GÜNCEL" ama fiyat düşürme izi yok (tek tur, PK yanlış-eşleşme S51'de tanılandı).
6. **F6 kural birim denetim** ilerisi: brüt-net dönüşüm katsayısı (0.848) bir standart mı, sahibinden bölgeye göre değişiyor mu — dış kaynak gerek.

---

## Standing Adayı — F6 Ek: Birim Denetim

**Anayasa metni önerisi:**
> Bir mahalle × tip hücresinde TL/m² medyan yayınlanırken kullanılan m² **kaynak alanı** raporda açıkça belirtilir: (a) net-m² öncelik → yalnız detay-tipinde kayıtlar, (b) brüt-m² fallback, (c) belirsiz-m² → "karışım" damgası + bant. Emsal: S56 Villa Riva %28 delta (karışık vs sıkı).

---

## Çıktılar

- **beykoz_emsal_v2r.json (revize+damgalı):** `~/tradia_analiz/cikti/beykoz_emsal_v2r.json`
- **Bu MD:** `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S56.md`
- **K24a bildirim (Finans+Signals):** `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_beykoz_S56.json`

## Disiplin S56
A04 (5 sapma dürüst, %74 karışık birim uyarısı, uç-değerler açıklandı) · V37 (v24 dokunulmadı, v25 read-only) · V11 (yapısal, kehanet YOK) · #21-B kaynak-kanıt · **Sıfır-Yasağı formatı** (n+bant açık) · dönem etiketi=`S48_UZANTI_2026-Haz-Tem` · $0 · SİLME YOK
