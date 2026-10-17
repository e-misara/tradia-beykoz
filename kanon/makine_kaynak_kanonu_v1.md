# MAKİNE KAYNAK KANONU v1

**Statü:** 🟢 KANON · Patron direktifi 2026-10-14 (makine denetimi 19:41)
**Bağlı:** Standing #38 (launchd), ham_veri_depolama_kanonu_v1, HEDEF_HAVUZU ortak hükmü ("darboğaz para değil: 7/24 makine + depolama + güç + tetik")

---

## Ölçülen durum

| Ölçüm | Patron 19:41 | Vezir 23:14 | Vezir 23:15 |
|---|---|---|---|
| Makine | MacBook Air · **8 GB RAM** | | |
| Bellek | **%97** dolu | boş 0,06 GB · sıkıştırıcı 3,40 GB | boş 0,09 GB · sıkıştırıcı 3,26 GB · memory_pressure "boş %37" |
| Swap | — | 2.791 / 4.096 MB | **2.967 / 4.096 MB** |
| Yük (1/5/15 dk) | **12,6** | 4,69 / 3,63 / 2,75 | **13,73** / 6,07 / 3,73 |
| Açık oturum | 16 CC + 3 arka plan | 44 claude süreci | 15 claude oturum süreci |
| launchd exit≠0 | 5 | — | **6** |

**Yan kanıt:** `.env` kopya taraması (yalnız metin dosyaları, 5 MB altı) **3 saat 20 dakika** sürdü, CPU kullanımı ~%0. Makine G/Ç ve bellekte tıkalı.

## Kural

1. **Aynı anda en fazla 8 CC oturumu açık.** Sessiz moddaki CC kapatılır, gerektiğinde `resume` ile açılır. Oturum açık tutmak "çalışıyor" demek değildir.
2. **Ağır toplu çekim aynı anda en fazla 1.** Ağır = EVDS tam çekim · KAP/külliyat · Basın ham indirme · uydu toplu indirme · tam SORGU-01 yeniden inşası. Başlatan CC `02_CC_STATE/agir_is_kilidi.json`'a yazar: kim, ne, başlangıç, tahmini bitiş. Kilit doluysa bekler.
3. **cron/launchd ağır işler 02:00–07:00 bandında.** Gündüz bandında yalnız hafif işler: sağlık, delta, küçük JSON.
4. **KeepAlive + çıkış ≠ 0 = döngü.** Ön koşulu (disk) yokken KeepAlive'lı iş exit ≠ 0 ile çıkarsa launchd onu sürekli yeniden başlatır. Emsal: `ccbasin.hasat_v4` **300 kez**. Ön koşul eksikse: `KeepAlive` → `PathState` (`/Volumes/TT-HAFIZA` var olunca) ya da exit 0 + log satırı.
5. **launchd stdout/stderr `~/Desktop` altına yazılmaz.** TCC korumalı dizin, iş başlatılamıyor (exit 78 EX_CONFIG). Log yolu `~/tradia_sorgu/logs/` gibi korumasız bir dizinde olur.
6. **iCloud dataless dosya okuma = indirme = disk işi → kilit gerektirir** (Patron 15 Eki · Vaka #09). `~/Desktop` altındaki boşaltılmış dosyaları toplu okuyan tarama/indeksleme (ör. Borsa arşiv içerik taraması) ağır iş sayılır; kilit sırasına girer, disk boş < 6 GiB ise başlamaz. Emsal: Borsa içerik taraması 01:05'te disk riski nedeniyle durduruldu.
7. **Ölçüm:** `motor/SUREKLILIK.json → makine`. Her ölçümde bellek, swap, yük, oturum sayısı, launchd exit≠0 listesi, M4 port testi, **TT-HAFIZA mount** ve **pil/adaptör** alınır; **`disk_bagli_dakika_gun`** (nabız 5 dk × mount=true) günlük satırdır.
8. **PİL BEKLEME** (Patron 15 Eki 04:50, eşik gün başı kararıyla tek: **başlangıç adaptör + pil ≥%50 · devam ≥%25**): ağır iş (külliyat, PDF taşıma, rsync, A0 taşıma, Basın hasat) eşik altında başlamaz; koşan iş %25 altına inince checkpoint alıp durur. **Tek ortak kapı:** `02_CC_STATE/pil_esigi.py baslangic|devam` (exit 11/12) — tüm bekleyiciler bunu çağırır (Borsa `agir_is_kilit.py pil/devam` aynı mantık, Borsa onayı verildi). `pmset -g batt` durum metni büyük/küçük harf karışık gelir (`AC attached; not charging`) — regex `[^;]+` (06:36 B11 dersi: eski regex yüzdeyi okuyamadı, kapı %9'da açıldı). Eşik altında kilitte yer tutucu `PİL BEKLEME` durur; kilit dosyasında yer tutucu `tutan.cc = "PİL BEKLEME"` durur, Vezir nabzı pil uygun olunca kaldırır. Emsal: 15 Eki disk USB'den düştü (pil %63→%36 adaptörsüz), rsync 0 dosya.
9. **Kilit canlılığı** (Patron 15 Eki): `tutan` kaydı **`pid` + `heartbeat`** taşır. Vezir nabzı (`motor/kilit_nabiz.py`, launchd 300 sn) **pid'i `kill -0` ile doğrular; ölü pid kilidi otomatik bırakır** (`dusme_kaydi`), heartbeat 30 dk'dan eskiyse de bırakır. Emsal: 15 Eki 01:26–04:35 Hafıza "kilit bende" derken rsync ölüydü; külliyat 3 saat boşa bekledi → **uyumsuzluk kaydı, vaka değil**.
10. **Disk bağlantısı:** TT-HAFIZA **doğrudan porta; şarj diğer porta; USB hub yok** (kök neden 15 Eki: hub'da disk + şarj çakışması, Hafıza ioreg teşhisi: USB Storage görünür, IOMedia yok). Ölçü: `disk_bagli_dakika_gun`.
11. **Kuyruk disk kuralı** (Patron 15 Eki 14:3x — Patron "kural 9" dedi; 9 canlılık olarak dolu olduğundan 11): **disk gerektiren iş (rsync, A0/A1 taşıma, PDF taşıma, Basın hasat) disk takılı değilken sırayı TUTMAZ** → kuyruk girdisi `disk_gerekir: true` + durum `DİSK BEKLİYOR`; sonraki disksiz iş (külliyat, builder) geçer; **disk gelince önceliğini geri alır** (durum `bekliyor — disk geldi`). Uygulayan: Borsa `agir_is_kilit.py` (`izin`/`al`), Vezir `kilit_nabiz.py` (mount geçişinde durum). **Emsal:** 15 Eki 07:18–14:03 kilit **7 saat boş** kaldı — sıra-1 rsync disk bekledi, külliyat arkasında bekledi.
12. **WAF taze-oturum kuralı** (TT-AI 15 Eki): bazı `.gov.tr` indirme-uçları (gözlenen: sanayi.gov.tr teşvik-belgesi) **aynı browser-session'da 2.+ art-arda indirmeyi reddeder** (ardışık `expect_download` timeout), ama **her indirme TAZE bir browser-context ile tek-tek yapılırsa** sorunsuz çalışır — ne gecikme-arttırma (4-20 sn cooldown denendi, işe yaramadı) ne de farklı-UA bunu çözer; tek-çözüm **context.close()+yeni-context** her dosya için. **Emsal:** 55-aylık teşvik-dosyası serisi; aynı-session'da 1/55 başarılı (ardından hepsi-timeout), cooldown'lu-tekrar 1/55, **taze-session-her-dosya 55/55**. Genel-kural: bir `.gov.tr` kaynağı "1.indirme-olur-2.si-takılır" deseni gösteriyorsa **önce rate-limit/cooldown deneme, doğrudan taze-session'a geç** (zaman-kaybı: cooldown-denemesi başarısız-ihtimali yüksek).
12. **Hafif iş bellek ölçüsü = RSS** (Patron 16 Eki ~01:3x, Map önerisi): hafif iş sınırı **< 1 GB en yüksek RSS** (`/usr/bin/time -l` → *maximum resident set size*); macOS *peak memory footprint* bilgi amaçlı yazılır, **sınır ölçüsü değildir**. Emsal: MAP foto v2 (16.10 01:19) 18 kare · 83 sn · RSS 0,78 GB · footprint 1,06 GB → KABUL.
13. **Duraklatma sonrası kaçırılan zamanlı işler** (Patron 16 Eki · U-09): launchd işleri duraklatılıp geri yüklendiğinde, geri yükleme anından önce saati geçmiş **StartCalendarInterval** işleri (olay alarmı 08:20, CDN teyidi 08:30, gece raporu 08:40, ara defter 12:30 …) **`launchctl kickstart -k`** ile hemen koşturulur; geri yükleme betiği bunu yapar. **Bekçi:** son koşusu (log mtime) **> 24 saat** olan zamanlı iş `SUREKLILIK.json → makine.zamanli_is_kirmizi` listesine düşer, gece raporunda KIRMIZI. Emsal: 16 Eki 08:20/08:30/08:40 kaçtı, rapor 16:06'da elle üretildi.
14. **Uyuyan makinede launchd (Vaka #14):** takvimli sabah zinciri **sabah bekçisi** (`com.tradia.vezir.sabah_bekci` 08:25 + 09:20) ile denetlenir; kaçan iş **sırası korunarak** kickstart edilir (gece raporu → köşe → gazete → app → ekran), her adım log güncellenene kadar ≤150 sn beklenir. Gazete, köşe dosyasını ≤3 dk bekler. Patron: `pmset` planlı uyanma 08:10. **Betik referanslı klasör taşınmaz** (U-12): launchd/derleme/SON_TARIH'in baktığı klasör yer değiştirmez; değişirse önce kanon + symlink.

## "Neredeyiz" için tek satır (sunum)

> **MacBook Air 8 GB; 16 oturumda bellek %97, yük 12,6 (Vezir ölçümü 23:15: yük 13,7, swap 3,0/4 GB). 7/24 hat için ayrı makine şart.**

*Vezir · 2026-10-14 · v1.5 17 Eki (kural 8–14)*
