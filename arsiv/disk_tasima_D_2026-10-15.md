# Disk taşıma · D kalemi (Mac görselleri) · 2026-10-15 · TT-ARŞİV

**Durum: BEKLİYOR — Patron'dan `SİL` onayı gelmedi. Mac'ten hiçbir dosya silinmedi, taşınmadı, değiştirilmedi. Doğrulama salt-okuma.**

> 🔒 Dosya yolları kişisel içerir → **PRIVATE**: `misara-arsiv/veri/haftalik/disk_D/SILINMEYE_HAZIR_D.md` (yol | boyut | disk yolu | SHA eşleşti). Bu PUBLIC rapor yalnız sayı taşır.

## Mount kanıtı

| Kontrol | Sonuç |
|---|---|
| `diskutil list external` | disk4 · TT-HAFIZA · 1,0 TB |
| `/Volumes/TT-HAFIZA` | bağlı · 360 GiB boş · yazılabilir · disk okuma hatası **0** (1.239 dosya okundu) |

## Sonuç

| Ölçüm | Dosya | GiB |
|---|---:|---:|
| Aday (Mac Desktop + Downloads, 08-27 envanteri, AppleDouble hariç) | 3.199 | 5,181 mantıksal |
| **✅ SİLİNMEYE HAZIR** (SHA256 birebir) | **632** | **1,015** |
| — kalıcı konumda ≥2 disk kopyası (`COKLU_KOPYA`) | 607 | 0,995 |
| — kalıcı konumda **1** disk kopyası (`TEK_KOPYA`) | 25 | 0,020 |
| ⛔ Hazır değil — TT-HAFIZA'da ad+boyut eşi **yok** (önce kopyalanmalı) | 190 | 0,276 |
| ⛔ Hazır değil — **iCloud dataless** (yalnız bulutta, Mac'te 0 bayt) | 2.377 | 3,889 mantıksal |

Mac'te gerçek kullanım (blok sayımı): 822 yerel dosya **1,293 GiB**, 2.377 dataless dosya **0,000 GiB**.

## 🔴 Düzeltme — plan v2'nin D kazancı yanlıştı

v2 "D = 4,84 GiB" diyordu; **doğrusu ≤ 1,015 GiB.** Önceki "3.199 dosya hâlâ yerinde, aynı boyut" ölçümüm `stat` boyutuna bakıyordu; iCloud-dataless dosya mantıksal boyutu gösterir ama diskte yer tutmaz. Plan v2 düzeltildi.

## Karar gerektiren üç nokta (Patron)

1. **Silince tek FİZİKSEL kopya kalır.** Eşleşen kopyaların hepsi TT-HAFIZA'da (`01_YEDEK/2026-07-03_S29` ve `2026-07-19_S55_tam` — Temmuz Mac yedekleri). "Çoklu kopya" = *aynı diskte* birden çok kopya; bağımsız ikinci cihaz **yok**. Disk 10-14'te kirli kapanıp yeniden taranmıştı. Hedef kartındaki NAS/ikinci disk ihtiyacı burada somutlaşıyor.
2. **iCloud'da bu 632 dosyanın kopyası var mı: BİLİNMİYOR.** Masaüstü iCloud'a senkronlu; 08-27'de kota hatasıyla takılıydı (`brctl`: `CKErrorDomain:25`), bugün `Network Unavailable` görünüyor. Senkron durumu ölçülmedi. Masaüstünden silmek iCloud'dan silmeyi de tetikler (30 gün "Son Silinenler").
3. **2.377 dataless dosyaya dokunmuyorum** — Mac'te alan açmaz, silme yalnız iCloud'u etkiler. Bu dosyaların TT-HAFIZA'da karşılığı olup olmadığı **ölçülmedi** (okumak iCloud indirmesini tetikler, ağ/kota gerekir).

## `SİL` gelirse

Her dosya silinmeden hemen önce SHA256'sı **yeniden** hesaplanır; değişen/uyuşmayan düşer. Önce küçük bir dosyayla deneme, sonra toplu; her adımın günlüğü tutulur.

*TT-ARŞİV · $0 · AI çağrısı YOK · SİLME YOK (onay bekleniyor) · betik: `~/arsiv_disk/disk_D/dogrula_D.py`*
