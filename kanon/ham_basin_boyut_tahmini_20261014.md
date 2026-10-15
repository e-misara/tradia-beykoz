# Ham basın boyut tahmini (Hafıza · 2026-10-14)

**Soru:** Basın tüm Türkiye ham haber arşivini indirecek; 1 TB disk kaç ili taşır, NAS'a ne zaman geçilir?
**Yöntem:** yalnız ölçülmüş girdiler; ölçülmeyen yerde bant verilir, tek sayı uydurulmaz.

## Ölçülmüş girdiler

| Girdi | Değer | Kaynak |
|---|---|---|
| İstanbul ham haber | **566.478** (39 ilçe → 14.525/ilçe) | SORGU-01 `basin_html` |
| Haber başına bayt | **53 KB** (Kartal) · **85 KB** (Basın S99 ortalaması) · **154 KB** (Beykoz) | Mac tampon ölçümü 2026-10-14 (5.045 dosya, 546 MB) + hedef_karti_basin |
| Basın hedefi | **2–5 milyon** haber / 973 ilçe (ort. 2.055–5.139/ilçe) | hedef_karti_basin §1 |
| İndirme hızı | **≈7 GB/gün** | Basın: ≈5 MB/dk (TASIMA_NOTU) |
| TT-HAFIZA dolu | ≈423 GB (YEDEK 90 + ARŞİV 59 + STAGING 97 + TRADIA_ARSIV 177) → boş **≈508 GB ≈ 473 GiB** | duzen/sağlık ölçümü 2026-09-27; **bugün disk takılı değil, yeniden ölçülmedi** |
| İlçe sayısı | 973 / 81 il | cografya.json |

## Sonuçlar

**1) Toplam ham:** Basın'ın kendi hedefi (2–5M haber) **99 – 717 GiB**; orta senaryo (3,5M × 85 KB) ≈ **277 GiB**.

**2) İl başına:** ölçülmüş tek il İstanbul — **28 / 45 / 81 GiB** (53/85/154 KB). Diğer 80 ilin ham haber sayısı **ÖLÇÜLMEDİ**; ilçe sayısıyla orantılı dağıtım denendi ve **reddedildi** (İstanbul'u 4–7× eksik veriyor: gerçek 14.525 haber/ilçe, hedef ortalaması 2.055–5.139). Bu yüzden il başına tek sayı yerine **bant**:

| İl | İlçe | Bant (GiB) |
|---|---:|---|
| 34 İstanbul | 39 | 4,0 – 81 (ölçülü: 28–81) |
| 42 Konya | 31 | 3,1 – 65 |
| 06 Ankara | 25 | 2,5 – 52 |
| 53 Rize | 12 | 1,2 – 25 |

(alt = 2.055 haber/ilçe × 53 KB; üst = 14.525 haber/ilçe × 154 KB — üst uç her ilçenin İstanbul kadar haber ürettiğini varsayar, tavandır)

**3) 1 TB ne taşır:** boş ≈ 473 GiB'e sığan haber: **9,6 M** (53 KB) · **6,0 M** (85 KB) · **3,3 M** (154 KB). Basın hedefinin **alt ucu sığar; üst ucu (5M) yalnız hafif haberlerde (≤ 94 KB) sığar**. Diskte Basın'dan başka CC'lerin payı da var (yukarıdaki 423 GB), bu yüzden gerçek pay daha küçük olabilir.

**4) NAS ne zaman:** 7 GB/gün hızla boş 473 GiB **≈ 68 günde** dolar. Hızlı indirmeyle zaman değil **disk** sınırlayıcıdır.

## Patron'a tek satır

> **1 TB disk Basın'ın hedefinin alt yarısını (≤ 3,3–6 M haber) taşır ama indirme hızıyla ≈ 68 günde dolar; ham arşiv ≈ 300 GiB'i aşmadan (≈ 40. günde) NAS'a geçmek gerekir ve Mac tampon 8 GB eşiğinde zaten bu yüzden durur.**

## Bilinmeyenler

- 80 ilin ham haber sayısı: Basın 973 ilçe keşfi tamamlayınca ölçülür (şu an 3 ilçe).
- 154 KB ile 53 KB arasındaki yayılım: siteye göre; il bazında KB/haber ölçülmedi.
- TT-HAFIZA boş payı bugün ölçülmedi (disk takılı değil).
- NAS'ın kapasitesi ve zamanı Patron kararıdır; Hafıza yalnız dolma eşiğini bildirir.
