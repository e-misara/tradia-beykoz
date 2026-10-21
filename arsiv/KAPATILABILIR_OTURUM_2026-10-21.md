# KAPATILABİLİR OTURUM LİSTESİ · 2026-10-21 17:54 (Patron karar 21.10 #4 · hedef ≤8)

**Şimdi:** 14–15 claude oturumu. **Kapatılabilir 12** (üretimi launchd'de olan 6 birim + 3 Vezir kopyası + 2 sahipsiz + 1 ölü) → **kalan 4** + açılacak **Borsa, Signals** (+Aİ, Tic istenirse) = **6–8 ✓**.

## Kapatılabilir
| Oturum | Birim | Neden |
|---|---|---|
| 995b2110 | Hafıza | launchd 17 iş; bellek turu bellek takılınca; app plist düzeltmesi oturumsuz yapılamazsa açılır |
| 5f87f5cf | Basın | launchd 15 iş (gazete 08:50, canlı akış, ulusal hasat) |
| a3dad6c0 | Sosyal | orkestra launchd 7 iş |
| dc2c3284 | İhale | rg/uyan/arsiv günlük launchd |
| c4d69456 | Pazarlama | beykoz_ilan/harvest launchd (2 geçmiş iş için kısa açılış sonra kapat) |
| a4bb1551 | Map | ttmap.surekli launchd; gazete_kare girdi bekliyor |
| 0e1f3f8a | Vezir kopyası | Vezir'in asıl oturumu 6dcf9417; bu ve 85f8e1b4, 7eff74df fazladan |
| 85f8e1b4 | Vezir kopyası |  |
| 7eff74df | Vezir kopyası/devir |  |
| 9eccb170 | ? (CC adı yok, 116 MB) | sahipsiz |
| b846f782 | ? (CC adı yok, 73 MB) | sahipsiz |
| 9437a777 | Map (12.10, ölü) | 9 gündür yazmıyor |

## Açık kalsın
| Oturum | Birim |
|---|---|
| 6dcf9417 | Vezir (bu oturum) |
| e38debff | Kitap — oturuma bağlı üretim |
| 23a2a357 | Finans — oturuma bağlı (launchd 3/3 ölü) |
| 6bb6aa84 | Analiz — oturuma bağlı |

**Kural (kanon makine_kaynak 1):** üretimi launchd'de olan birimin oturumu kapalı olabilir; iş gelince `resume` ile açılır. Oturum eşlemesi transkript başındaki CC adlarından **tahminî**; kapatmadan önce VS Code sekme başlığıyla teyit.

## Borsa ve Signals için prompt (Patron satırları altına eklenir)
**Borsa:** CC-Borsa, Vezir sistem denetimi 21.10: (1) `com.tradia.ccborsa.evds_gunluk` 14.10'dan beri exit 78 EX_CONFIG — plist log yolu Desktop'ta; `~/tradia_sorgu/logs/` yoluna al, Standing #38 Python.app tam yol, bootout+bootstrap, ilk koşum kanıtı. (2) Günlük TL gram altın serisi (Finans talebi `ccfinans_bildirim_borsa_altin_gunluk_20261015.json`). (3) EVDS 63 HTTP-400 seri hükmü (tablo.json ozet.seri_400_kodlar). (4) `donus_borsa_2026-10-21.md` v1.1 tablo + GAZETEYE GİREN SATIR. (5) U-14: EVDS/KAP istemci kodunda kanon kuralları (anahtar .env tek dosya, tarih ISO) kod denetimiyle.

**Signals:** CC-Signals, Vezir denetimi: `com.tradia.ccsignals.gelenkutusu` runs=0 (Pzt 19.10 nöbet koşmadı) — plist/yol/exit incele, kickstart, kanıt. Öngörü kontrolü §4: 13 geçmiş kontrol tarihine KAPANDI/GEÇTİ satırı (`beykoz_ongoru_kontrolu_2026-10.md`). K00 44↔45↔47 mahalle kararı. Gelen kutusu süpürme (U-07). Sosyal talep kartın (sinyal.json) enum düzeltmesi sonrası onay. donus v1.1 + gazete satırı.

*Vezir · 2026-10-21 17:54*
