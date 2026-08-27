# ÇELİŞKİLER LİSTESİ v1 (Vezir BE-01/H · H4)

**Tarih:** 2026-08-27
**Kanal:** Vezir BE-01/H
**Kural:** Aynı konuda birbiriyle çelişen iki dosya varsa çelişki bayrağı; Üst Akıl karar verir.
**Vezir:** Kendi kararımı vermem, hakem çağırırım.

---

## Tespit Edilen Çelişkiler (7 vaka)

### 🔴 1. Beykoz Toplam Kayıt Sayısı

| Kaynak | Değer | Not |
|---|---|---|
| Basın etiketi (eski) | 363.582 | Etiket bozuk (38.396 mükerrer) |
| Basın v2r temiz | **325.186** | Kanonik olduğu belirtiliyor (pano ozet-w35) |

**Karar durumu:** ✅ Çözüldü — 325.186 kanonik (v2r temiz)
**Hakem:** Basın S89-S91 temizlik turu (kaynak: pano/ozet-w35.json)

---

### 🔴 2. Ulusal Alt Sınır (Basın kayıt sayısı)

| Kaynak | Değer | Not |
|---|---|---|
| Basın etiketi (eski) | 1.4M+ | Etiket bozuk |
| Basın v2r temiz | **1.383.177** | Kanonik olduğu belirtiliyor |

**Karar durumu:** ✅ Çözüldü — 1.383.177 kanonik
**Hakem:** Basın v2r (kaynak: pano/ozet-w35.json)

---

### 🟡 3. SORGU-01 Havuz Sayacı — Zaman-Farkı

| Kaynak | Değer | Tarih |
|---|---|---|
| HASAT-EMRİ (baz varsayım) | 414.000 | 2026-07-30 |
| HASAT-TAM-SALDIRI (baz düzeltmesi) | 165.000 | 2026-07-30 |
| CC-DURUM-TARAMA (canlı) | 869.225 | 2026-07-31 15:30 |
| GENEL-KONTROL (canlı) | 922.262 | 2026-07-31 17:00 |
| Ölçüm (2026-08-01) | 988.162 | 2026-08-01 |
| Bugünkü ölçüm | ??? | 2026-08-27 (26 gün eski) |

**Karar durumu:** 🟡 Kısmi çözüldü — 165K baz kabul edildi (Vezir SLUG_KANON öncesi düzeltme)
**Sorun:** 26 gün ölçüm boşluğu — güncel değer bilinmiyor
**Hakem gerek:** Bir sonraki `SELECT COUNT(*)` ile canlı ölçüm

---

### 🔴 4. STAGING_YENI Slug: CC-bazlı vs Kaynak-bazlı

| Kaynak | Öneri | Statü |
|---|---|---|
| Vezir YAZMA-YOLU v3 | `cc_basin/, cc_analiz/, cc_pazarlama/` | ❌ GEÇERSİZ |
| Hafıza kurulumu | `basin/, osm/, evds/, ihale/` | ✅ KANONİK |

**Karar durumu:** ✅ Çözüldü — SLUG_KANON kararı (2026-07-31, kaynak-bazlı)
**Hakem:** Üst Akıl (dagitim/UA_20260731_SLUG_KANON_kaynak_bazli.md)
**Vezir:** Kendi hatasını kabul etti (retro-düzeltme 3 dosya)

---

### 🟡 5. Depolama Katmanı — 3 Versiyon Çelişkisi

| Kaynak | Karar | Tarih |
|---|---|---|
| OTONOM-MOD v1 | TT-HAFIZA staging | 2026-07-30 |
| OTONOM-MOD v2 | Mac yerel staging | 2026-07-30 |
| YAZMA-YOLU v3 | TT-HAFIZA/STAGING_YENI/ | 2026-07-31 |

**Karar durumu:** ✅ Çözüldü — v3 otoritedir; v1/v2 SÜPERSEDE
**Hakem:** Üst Akıl (dış-koşul değişimi: bellek varsayımı → gerçek durum)
**Vezir:** İki dosyaya REVİZE NOTU eklendi

---

### 🟡 6. Tutanak Sayısı: Direktif vs Gerçek

| Kaynak | Değer | Not |
|---|---|---|
| Direktif (BE-01) | 27 tutanak | Beyanı |
| `misara-vezir/konusmalar/tam_tutanak/` | 8 dosya | Mayıs-Haziran (05-19 → 06-03) |
| `~/tradia_konusmalar/03_KONUSMA_GUNLUKLERI/` | 16 dosya | Mayıs sonu (03-19 → 05-30) |
| Ağustos tutanakları | 0 dosya | Ham `.jsonl` içinde (arşiv sonrası) |

**Karar durumu:** 🟡 Beklemede
**Vezir yorumu:** "27" muhtemel sayı — 8 misara-vezir + 16 tradia_konusmalar + 3 belirsiz. Ya da başka kaynak.
**Hakem gerek:** Üst Akıl "27" nereden çıktığını netleştirsin

---

### 🟡 7. "10 CC" mi "16 CC" mi?

| Kaynak | Değer | Not |
|---|---|---|
| Direktif (BE-01 katman C) | 16 CC | Bu turda |
| Önceki durum-tarama direktifi | 10 CC | 2026-08-01 |
| tradia-beykoz/cc/ klasör | 16 | Filesystem |
| kurulus/ dosya | 18 | (Hafıza + Vezir + 16 CC) |

**Karar durumu:** 🟢 Uyumlu — CC sayısı 16, artı Hafıza + Vezir kurum katmanı = 18 kuruluş belgesi. 10 CC sayısı önceki turdaki "üretici CC" tanımıydı (Signals + Finans + Site + Kitap + Kasa + ARŞİV hariç).

---

## Vezir A04 — Notlar

1. **6/7 çelişki çözülmüş** (mekanizma: Üst Akıl direktifi veya kanon)
2. **1/7 aktif hakem-beklenen** (tutanak sayısı 27)
3. **1/7 ölçüm-güncelliği eksik** (havuz 26 gün eski)
4. **Vezir kendi hatasını 1 kez kabul etti** (SLUG_KANON)
5. **SÜPERSEDE mekanizması çalışıyor** — eski dosyalar disk-üstünde, INDEKS'te statü değişimi

---

*Vezir BE-01/H · $0 · 2026-08-27*
