# GENEL-KONTROL · 2026-07-31 17:00 (Vezir Tam-Fotoğraf)

**Tarih:** 2026-07-31 ~17:00
**Kaynak:** Üst Akıl talebi → Vezir uygulama
**Kanal:** Vezir (filesystem + SQLite + launchd taraması · $0 · Standing #38)
**Yöntem:** find + du + df + sqlite3 + launchctl list — **CC session'ına mesaj YOK**

---

## 1. Ana Tablo (Tek-Fotoğraf)

### 1.a · SORGU-01 Sayaç
```
Şu an: 922.262   (baz 165K → 5.59×, hedef "milyonlar" — 1M için 78K uzak)
Δ bir önceki (869K, 15:30): +53.037 / ~1.5 saat = +35K/saat trend
```

### 1.b · Top-15 Kaynak Döküm
| # | Kaynak | Kayıt | Sahip CC |
|---|---|---|---|
| 1 | basin_html | **265.866** ↑ (+46K / 1.5sa) | Basın |
| 2 | osm_poi | 246.523 | TT-MAP |
| 3 | ilan_v24 | 163.560 | Analiz (Sahibinden) |
| 4 | tr_idari_birim | 75.762 | ortak |
| 5 | kap_firmalar | 64.562 | Borsa (geçmiş) |
| 6 | evds_seri_katalog | 52.595 | Borsa |
| 7 | afad_deprem | 33.937 | Analiz/TT-AI |
| 8 | evds_veri | **8.011** ↑ (+6K) | Borsa (bloke rağmen) |
| 9 | wb_indikator | 4.092 | Analiz/TT-AI |
| 10 | tr_posta_kodu | 2.771 | ortak |
| 11 | **sosyal_transkript** | **1.660 🆕 YENİ** | Sosyal (Whisper başladı) |
| 12 | yfinance_fiyat | 610 | Borsa |
| 13 | ibb_ckan | 557 | TT-MAP |
| 14 | rg_arsiv | 538 | Tic |
| 15 | ihale_rg | 499 | Tic |

### 1.c · 7 CC Durum
| CC | Topluyor/boşta/bloke | Cron mu elle mi | Son çıktı | Trend |
|---|---|---|---|---|
| **CC-Basın** | **🟢 Topluyor** | launchd (`ccbasin.saglik`, `ccbasin.govde` rc=0) | basin_html 265.866 (+46K/1.5sa) · Mac 34GB | Güçlü ↑ |
| **CC-Sosyal** | **🟢 Topluyor** (Whisper başladı) | launchd (`sosyal.gnd` rc=0) | sosyal_transkript 1.660 YENİ · Mac 122MB | Yeni ↑ |
| **CC-Pazarlama** | **🟡 İlk kurulum** | launchd (`pazarlama.harvest` rc=0) | Mac 56KB (dizin YENİ 16:50) | Kurulum |
| **CC-TT-MAP** | **🟢 Sabit** (osm bitti) | — | osm_poi 246.523 · Mac 35MB | Statik |
| **CC-Analiz** | **🟡 Belirsiz** | — | ilan_v24 163.560 · Mac 20MB (küçük) | Statik |
| **CC-Tic** | **🟢 Aktif** | launchd (adaş-temizle tamamlandı 12:12) | rg_arsiv 538 · Mac 14MB | Bugün +411 |
| **CC-Borsa** | **🟡 Kısmi bloke** | Patron'da (elle) + launchd | evds_veri 2K→8K (+6K), KAP 611 firma yavaş | EVDS token bloke |

### 1.d · Disk
| Birim | Toplam | Kullanılan | Boş | Dolu% | Δ önceki | Durum |
|---|---|---|---|---|---|---|
| **Mac /** | 228 GB | 12 GB | **26 GB** | **%32** | %48 → **%32** ↓ | 🟢 Retro-taşıma etkisi |
| **TT-HAFIZA** | 931 GB | 317 GB | **615 GB** | **%35** | %30 → %35 | 🟢 +42GB kabul |
| Bellek | — | — | — | — | — | 🟢 TAKILI |

### 1.e · Retro Taşıma (staging_S1)
| Kaynak | Boyut | Durum |
|---|---|---|
| basin_ham | **55GB** | ✅ TT-HAFIZA'ya taşınmış · ⚠ **Mac'te de 34GB var** (SHA-verify eksik, sil edilmemiş) |
| cc_borsa_firmalar_kap | 192MB | ✅ Bellek_yok raporundan teyit (Mac'ten silinmiş) |
| ibb_ckan_res | 4.1GB | ✅ TT-HAFIZA'da |
| osm_poi | 256K | ✅ Küçük |

**Retro-taşıma:** başlamış AMA **YARIM** — Basın 34GB Mac'te hâlâ (55GB TT-HAFIZA + 34GB Mac = çift-tutum, SHA-verify sonrası Mac-silme bekliyor)

### 1.f · Otonom (launchd)
```
Aktif tradia-launchd  : 21 servis
rc=0 (temiz)          : 16 servis
rc=1 (fail son çalışma): 3 servis
  - com.tradia.ccihale.rg
  - com.tradia.gunluk-ozet
  - com.tradia.ccihale.arsiv
rc=78 ⚠ (çok fail)   : 1 servis
  - com.tradia.haber-akis
rc=120 🔴 (kırık)    : 1 servis
  - com.tradia.primer-monitor
```

**Nefes / koordinatör:**
- `~/tradia_sorgu/logs/launchd_nefes.log` — mevcut ama son satırlar boş görünüyor
- `nefes_20260731.log` son satır (15:05): **`🟡 GÜVENLİ-DURUŞ AKTİF`** — rsync başlatılmıyor (flag: `guvenli_durus_aktif.flag`)
- Koordinatör (STAGING→ARŞİV) **AKTİF DEĞİL** — güvenli-duruş flag açık

### 1.g · STAGING_YENI Adopsiyon
```
/Volumes/TT-HAFIZA/STAGING_YENI/  (kurulum 16:17)
├── afad/          (0 dosya) 
├── basin/         (0 dosya) ⚠ v3-standart `cc_basin/` bekliyordu — slug sapması
├── evds/          (0 dosya)
├── finans_belge/  (0 dosya)
├── ihale/         (0 dosya)
├── ikili/         (0 dosya)
├── ilan/          (0 dosya)
├── kap/           (0 dosya)
├── meclis/        (0 dosya)
├── osm/           (0 dosya)
├── sosyal/        (0 dosya)
├── uydu/          (0 dosya)
├── vaka/          (0 dosya)
└── wb/            (0 dosya)
```
**Sonuç:** Klasörler kurulmuş (14 kaynak-bazlı) ama **HİÇ CC henüz yazmamış.** ÜÇLÜ-GENİŞLEME cron'ları (:00/:20/:40) çalıştıysa dosya olmalıydı — henüz görünmüyor.

---

## 2. Genel Sağlık Değerlendirmesi

### 🟢 İyi Giden 5 Şey
1. **Havuz büyümesi güçlü** — 922K, +35K/saat trend · hedef 1M'e 78K uzak (~2 saat)
2. **Basın motoru sürekli üretiyor** — 46K haber/1.5 saat (Basın öz-analiz'de "motor 7/24 otonom" doğrulanıyor)
3. **Whisper başladı** — sosyal_transkript 1.660 YENİ kayıt (Sosyal S195+ Kitap arşivi genişliyor)
4. **Mac boşaldı** — %48 → %32 (retro-taşıma etkisi)
5. **TT-HAFIZA kabul ediyor** — %30 → %35 (+42GB yeni veri kabul)

### 🟡 Dikkat Gereken 4 Şey
1. **STAGING_YENI kuruldu ama BOŞ** — 14 kaynak-klasörü var, 0 dosya. ÜÇLÜ-GENİŞLEME cron'ları henüz yazmadı VEYA yazımlar hâlâ Mac yerel'e gidiyor
2. **STAGING_YENI slug sapması** — v3 standardı `cc_basin/cc_analiz/cc_pazarlama` idi; kurulmuş yapı **kaynak-bazlı** (`basin/, osm/, evds/…`). İki mimari farklı — Hafıza'nın adopsiyonu belirsiz
3. **GÜVENLİ-DURUŞ flag aktif** — Nefes koordinatörü rsync başlatmıyor; retro-taşıma tamamlanana kadar duracak
4. **Basın çift-tutum** — Mac 34GB + TT-HAFIZA/staging_S1 55GB (SHA-verify sonra Mac-silme bekliyor)

### 🔴 Kritik 3 Şey
1. **`com.tradia.primer-monitor` rc=120** — bir servis 120 kez fail. Ne kırık, ne kadar süredir? Log incelemesi gerek
2. **CC-Analiz "yarım-iş belirsiz" durumu SÜRÜYOR** — bir önceki turdan bu tura değişim yok, hasat_kutuphane bittiyse SORGU-01'e ne zaman yansıyacak?
3. **Yeni-yol adopsiyonu yok** — YAZMA-YOLU v3 (07-31) + ÜÇLÜ-GENİŞLEME (aynı gün) uygulanmadı görünüyor. CC'ler hâlâ Mac yerel'e yazıyor (Basın'ın Mac 34GB artan mtime 15:29 kanıtı — yeni-yol olsaydı boyut sabitlenirdi)

---

## 3. Havuz Trend (72 Saat Perspektif)

| Zaman | Havuz | Fark |
|---|---|---|
| 2026-07-29 baz | 165.000 | — |
| 2026-07-30 (HASAT-EMRİ) | ~400-600K tahmin | +250-450K/gün |
| 2026-07-31 15:30 (CC-DURUM-TARAMA) | 869.225 | +200-450K/gün |
| **2026-07-31 17:00 (BU RAPOR)** | **922.262** | **+53K / 1.5sa (35K/sa)** |
| Projeksiyon: 1M | ~19:00-20:00 (bu akşam) | — |
| Projeksiyon: 2M | ~ağustos 2 civarı | — |

**Havuz-4× hedefi (~660K)** 07-30 civarı AŞILDI. "Milyonlar" hedef ucu belirsiz — Vezir §5 önerisi yeniden.

---

## 4. Vezir A04 Dürüst-Notlar

### 4.a 🔴 **YAZMA-YOLU v3 uygulanmadı — kritik boşluk**
- v3 direktifi (07-31, 7ed8627) net: **yeni ham → TT-HAFIZA/STAGING_YENI/**
- Ama STAGING_YENI klasörleri (kaynak-bazlı) **boş** — CC'lerin yeni-yola geçtiği kanıt yok
- Basın Mac dizini 34GB → 15:29 mtime = yeni-yol yerine hâlâ Mac'e yazıyor
- **Öneri:** Hafıza'nın STAGING_YENI kurulumu bittikten sonra CC session'larına uygulama tetiği yapıştırıldı mı? Yoksa CC'ler v3 direktifini görmedi mi?

### 4.b 🔴 **v3 slug tutarsızlığı**
- Vezir direktifi (v3): `STAGING_YENI/cc_basin/, cc_analiz/, cc_pazarlama/`
- Hafıza'nın kurulumu: `STAGING_YENI/basin/, osm/, evds/, finans_belge/`
- İki farklı sözlük — Hafıza kaynak-bazlı, Vezir CC-bazlı düşündü
- **Vezir yorumu:** Hafıza'nın kaynak-bazlı sözlüğü de meşru (çoklu-CC aynı kaynağa yazabilir), ama v3 direktifi CC-bazlı diyor. Netleştirme gerek

### 4.c 🟡 **primer-monitor rc=120 acil incelenmeli**
- 120 fail = ~saatte bir fail (24 saatte)
- Ne yapan servis? Log gerek
- **Öneri:** `plutil -p /Library/LaunchAgents/com.tradia.primer-monitor.plist` + `tail /var/log/system.log | grep primer`

### 4.d 🟢 **Standing #38 ölçüldü — çalışıyor**
- Bu tur %100 filesystem/SQLite/launchctl
- CC session'larına mesaj: 0
- Bu rapor süresi: ~7 dk (tarama + sentez)
- Bir önceki CC-DURUM-TARAMA (5 dk) + bu (7 dk) — Standing #38 disiplin adopsiyonu güçlü

### 4.e 🟢 **CC-Sosyal Whisper başladı — büyük ilerleme**
- Bir önceki turda "Whisper kuyruk durumu belirsiz" idi
- Şimdi sosyal_transkript 1.660 kayıt SORGU-01'de
- OTONOM-MOD Whisper "test edilmemiş" endişesi aşıldı (kısmi)

---

## 5. Vezir Öneriler (Patron/UA'ya)

1. **STAGING_YENI adopsiyon tetiği** — CC'lere "yeni-yol uyguladın mı?" tek-satır soru direktifi (bir sonraki UA tur adayı)
2. **v3 slug netleştirme** — Hafıza (kaynak-bazlı) vs Vezir direktif (cc-bazlı) hangisi kanon?
3. **primer-monitor 120-fail** — hemen kırık teşhis
4. **Retro-taşıma SHA-verify + Mac-silme** — Basın 34GB Mac'ten kalkması gerek (%32 → %20'e düşer, hasat için nefes alanı)
5. **Havuz hedef ucu güncelle** — 922K → 1M 2 saatte varılacak; sonrası ne, 5M mı 10M mı?

---

## 6. Patron İçin Tek-Satır Özet

> Havuz **922K** (+35K/sa, 1M için 2sa) · 5/7 CC 🟢 aktif (Basın · Sosyal · Pazarlama-kurulum · TT-MAP · Tic) · 2 🟡 (Analiz belirsiz · Borsa EVDS-bloke) · Mac %32 (retro etki) · TT-HAFIZA %35 (615GB boş) · **STAGING_YENI kuruldu ama BOŞ** (v3 adopsiyon bekliyor) · nefes güvenli-duruş · **primer-monitor rc=120 kırık** · Whisper 1.660 YENİ

*Tarama tamam. Süre ~7 dk. AI çağrısı yalnız sentez.*
