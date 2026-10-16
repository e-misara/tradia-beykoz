# Disk taşıma · 2026-10-14 · Hafıza

**Durum: EKSİK — taşıma BAŞLAMADI (Adım 0 mount teyidi alınamadı). Mac'ten hiçbir dosya silinmedi, hiçbir dosya kopyalanmadı.**

## Mount kanıtı (Adım 0)

| Kontrol | Sonuç |
|---|---|
| `ls /Volumes/` | yalnız `Macintosh HD` |
| `diskutil list` | yalnız disk0 (iç) + disk3 (APFS); **external yok** |
| `diskutil mount TT-HAFIZA` | `Failed to find disk TT-HAFIZA` |
| `ioreg -c IOMedia` | yalnız iç disk; **TT-HAFIZA için medya düğümü yok** |
| `ioreg -p IOUSB` | `USB2.0 HUB` + **`USB Storage`** görünüyor |

**Teşhis:** USB denetleyicisi cihazı görüyor ama arkasında disk ortamı (IOMedia) oluşmamış. Yani macOS "bir şey takılı" diyor ama diske ulaşamıyor. Kablo/hub bağlantısı veya diskin güç alamaması muhtemel; hangisi olduğu **bu ölçümle ayırt edilemiyor (BİLİNMİYOR)**.

## Pil log

| Zaman (TR) | Durum |
|---|---|
| 2026-10-14 (taşıma denemesi) | %97 · **Battery Power · discharging** · 19:21 kalan |

Mac pilde çalışıyor, adaptör takılı değil. Notunuzdaki "dönüştürücü takılıyken şarj durur" ile uyumlu: disk ve adaptör aynı hub/dönüştürücüde ise **disk takılıyken Mac şarj olmuyor olabilir**. Taşıma sırasında %25 altı durdurma kuralı için pil izlemesi hazır; mount gelince başlar.

## Yapılmayanlar (disk gelince sırayla)

1. Adım 1 envanter (Mac'te değişen/yeni dosyalar, sayı + GiB) — disk karşılaştırması gerektirir
2. Adım 2 rsync `--checksum` (nice -n 15, tek klasör, paralel yok) + redaksiyon (.env değerleri ve oturum kayıtları)
3. Adım 3 SHA256 tablosu
4. "Mac'ten silinmeye hazır" aday listesi

## Adım 4 (ham arşiv) — diskten bağımsız kısım HAZIR

- Dizin şeması: `tradia-beykoz/kanon/ham_basin_dizin_semasi_v1.md`
- Boyut tahmini: `tradia-beykoz/kanon/ham_basin_boyut_tahmini_20261014.md`
- Diskte `ham/basin/…` dizinleri henüz **oluşturulmadı** (disk yok)

**EKSİK — disk mount edilemedi; taşıma, envanter ve SHA tablosu bekliyor.**

## Güncelleme · 23:18 — disk fiziksel olarak algılandı, macOS bağlamıyor

| Kontrol | Sonuç |
|---|---|
| `ioreg -p IOUSB` | **Seagate "Expansion"** görünüyor (USB3 hızı, 896 mA güç tahsisi) |
| `ioreg -c IOMedia` | `disk4` / `disk4s1` ortam düğümleri **var** |
| `diskutil info disk4s1` (bir kez) | TT-HAFIZA · ExFAT · **UUID 683AC8A4-FE30-3860-94BE-A27F85FEC662 (aynı disk)** · 1,0 TB · Read-Only: Hayır · **Mounted: No** |
| `diskutil mount disk4s1` | `Failed to find disk disk4s1` |
| `diskutil list external` / `mount` tablosu | disk4 yok · `/Volumes/` yalnız Macintosh HD |

**Teşhis:** Disk donanım düzeyinde sağlam görünüyor (doğru UUID, okunabilir ortam). Takılan nokta macOS'un disk yöneticisi: çekirdek diski görüyor, diskutil/DiskArbitration kaydetmiyor. Önceki `diskutil` çağrıları da 40 sn'de yanıt vermedi.

**Yapılmayanlar (bilinçli):** `verifyVolume`/`fsck` çalıştırılmadı (S55 dersi); `force` yok; sistem servisi (diskarbitrationd) yeniden başlatılmadı.

**Sıradaki adım (Patron):** diski kabloyu çekip ~10 sn bekleyip **yeniden takın** (yeni takılış DiskArbitration'a yeniden kayıt ettirir). Olmazsa Mac'in yeniden başlatılması gerekebilir; bu karar sizin (açık işleri keser).

## Güncelleme 2 · 23:21 — DİSK BAĞLANDI (çözüldü)

**Sebep:** Disk bozuk değildi. Kirli kapanmış ExFAT'ı macOS bağlamadan önce taradı (disk4'ten ≈60 MB/sn okuma, yanıp sönen ışık bu). Tarama yaklaşık 10 dakika sürdü; bitince `/Volumes/TT-HAFIZA` kendiliğinden bağlandı. Önceki "kabloyu çıkarıp takın" önerim bu açıdan riskliydi (tarama sırasında çekmek hasar verir); bağlanmasını beklemek doğrusuydu.

**Bağlı disk (salt-okuma kontrol):** ExFAT · UUID 683AC8A4-FE30-3860-94BE-A27F85FEC662 (aynı disk) · 931 GiB · kullanılan 571 GiB · boş 360 GiB · yazılabilir.
**Dizinler:** 00_OFIS, 01_YEDEK, 02_ARSIV (11 girdi, mtime 10-13), 03_SAHSI, 04_GECICI, STAGING_YENI (27), TRADIA_ARSIV (34) hepsi mevcut; 3 örnek dosya SHA ile okundu.
**Not:** 09-27 sağlık ölçümünde kullanılan ≈423 GB idi, şimdi 571 GiB — son 3 haftada ≈150 GiB eklenmiş (Basın/Sosyal/Borsa aktarımları). Boş pay 473 GiB → **360 GiB**'a düştü; boyut tahmini belgesindeki "68 gün" hesabı buna göre kısalır (≈ 50 gün).
**Yazma testi yapılmadı** (kirli-kurtarma sonrası dikkat); taşıma başlamadan önce küçük bir yaz-oku-sil testi yapılacak.
**Adım 1–5 (envanter, rsync, SHA) henüz başlamadı** — Patron onayı bekleniyor.

## Güncelleme 3 · 10-15 04:30 — Aşama 1 durumu ve disk yeniden düştü

**Aşama 1'in gerçek kimliği:** Bu "taşıma" oturumda `nefes` rsync'iydi (Mac `~/tradia_basin/ham` → `TT-HAFIZA/staging_nefes/basin_ham`; ağır-iş kilidi bende, PID 91683). Genel envanter görevinin (10 dizin + ~/.claude/projects + redaksiyon) **hiçbir adımı başlamadı**; "3 paralel süreç" gözlenmedi.

| Ölçüm | Değer |
|---|---|
| Kaynak | 34,1 GiB · **560.343 dosya** (hepsi `S99_PARALEL/` altında tek ağaç; diğer 4 klasör toplam ≈ 400 dosya) |
| Hedef (du) | 43,7 GiB (eski geçişlerin kopyaları birikmiş; `rsync -a` silmez → kaynaktan büyük) |
| Bu geçiş | 22+ dk **dosya listesi çıkarmada takıldı**; gönderen süreç CPU süresi 0:14.35'te sabit; açık dosya yok; **0 dosya aktarıldı** |
| Geçmiş | 8 geçiş logu; hiçbirinde "bitti"/istatistik yok (biri `mkpath: Permission denied`, rc=11) |
| Canlı süreç | 0 (disk düştü, rsync kalmadı) |
| SHA256 kontrolü | **YAPILMADI** (disk yok) |

**Disk düşüş:** ≈ 00:50'de USB'den tamamen çıktı (hub + Seagate yok). Tetik büyük olasılıkla Mac'in şarj edilmesi (pil %63→**%36**, adaptörsüz, 25 dk). Çıkış anında `rsync`/`duzen` yazma durumunda olabilir → disk yine **kirli** sayılabilir; yeniden takılınca macOS taramayı tekrar yapar (~10 dk).

**Alınan önlem (geri alınabilir):** `com.tradia.sorgu.nefes` ve `com.tradia.sorgu.duzen` **bootout** edildi (plist'ler yerinde) — disk geri gelince otomatik yazmaya başlamasınlar. Geri açma: `launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.tradia.sorgu.{nefes,duzen}.plist`.

**Çözüm planı (disk + güç sağlam olunca, sırayla tek klasör):** `S99_PARALEL/ilce/<31 ilçe>` her biri ayrı rsync (≈18 bin dosya; 560 bin dosyalık tek liste ExFAT'ta kilitleniyor) → klasör başına SHA256 → pil <%25'te dur, kaldığı yeri yaz.

## İkinci taşıma (Vaka #09) — ETKİ LİSTESİ (Standing #48) · taşıma YAPILMADI

Koşul "rapor HAZIR olunca" idi; rapor HAZIR değil → `mv` yok. Salt-okuma tarama: **96.828 metin dosyası** tarandı.

| Etki | Sayı | Not |
|---|---:|---|
| launchd plist | **5** | `ccborsa.evds_gunluk`, `ccborsa.ktb_yigm_aylik` (aktif Borsa) + `gunluk-ozet`, `haber-akis`, `primer-monitor` (eski, exit 78) |
| crontab satırı | **5** | cc_borsa pipeline/backfill/catchup (şu an DONDU_ ön ekli) |
| Dış kod/belge (mutlak yol) | **466** | tradia_konusmalar 240 · landgold-agents 130 · tradia-beykoz 55 · misara-vezir 11 · finans 9 · tradia_sorgu 8 · cc_ihale 6 · tt_pazarlama 4 |
| Taşınan ağacın kendi içi | 231 | Desktop/tradia 186 · Desktop/TT-Tüm CC 45 |
| iCloud boşaltılmış (`.icloud`) | **0** | "BULUTTA KALDI" yok |
| iCloud Desktop senkronu | **AÇIK** | `~/Desktop` dışına taşımak iCloud'dan kaldırır (dosyalar yerelde kalır); Desktop'ta bırakılan symlink'in iCloud'a nasıl yansıyacağı **ölçülmedi** |
| Boyut | Desktop/tradia 9,0 GiB · TT-Tüm CC 1,2 GiB | |

**Risk:** aktif Borsa işleri (EVDS çekimi, KAP külliyat) `Desktop/tradia/cc_borsa` altında; taşıma onlar durmadan yapılmamalı. Symlink ile eski yol çalışır ama 466+5+5 dosya mutlak yol taşıyor (kırılmaz ama yeni yola güncellenmesi ayrı iş).

**HAZIR DEĞİL — EKSİK:** (1) disk düştü, kirli olabilir; (2) Mac pili %36 ve adaptörsüz; (3) Aşama 1 hiç tamamlanmadı, SHA yok; (4) geniş envanter başlamadı.
