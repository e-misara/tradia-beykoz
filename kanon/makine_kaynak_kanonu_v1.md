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
7. **Ölçüm:** `motor/SUREKLILIK.json → makine`. Her ölçümde bellek, swap, yük, oturum sayısı, launchd exit≠0 listesi ve M4 port testi alınır.

## "Neredeyiz" için tek satır (sunum)

> **MacBook Air 8 GB; 16 oturumda bellek %97, yük 12,6 (Vezir ölçümü 23:15: yük 13,7, swap 3,0/4 GB). 7/24 hat için ayrı makine şart.**

*Vezir · 2026-10-14*
