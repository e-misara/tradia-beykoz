# DURUM GÖZDEN GEÇİRME · 2026-10-18 akşam (Patron)

**Kural:** her satır dosyadan; "—" ölçülmedi. Kesit 2026-10-18 18:44. Bu tablo yarın sabah TRA-BASIN Vezir köşesini açar (`vezir_kose_<tarih>.json → acilis_tablosu`).

## 1. Vaka #13 — Basın arşiv kapsamı (gözden geçirmenin 1. maddesi)
Basın bildirimi 17.10 20:55 geldi: arşiv = **28 yerel alan adı / 22 İstanbul ilçesi**, `basin_html` 567.369 satır (URL'li 79.901), sayfa tarihi 2012-02..2026-08, **ulusal 0**; ulusal yalnız canlı akışta (15.10'dan, başlık düzeyi). Düzeltme: kapsam belgesi (UST_AKIL/basin/kapsam_gercegi), **ulusal günlük hasat 20.10'dan** (16 RSS, 2 saat), kitap_sorgu kapsam etiketi. Hasat dışı: İHA (403), T24, DHA/Milliyet/CNN Türk/Evrensel (RSS yok). Defter dolduruldu.

## 2. 15 birim × çalışan hat · oturuma bağlı iş · kapsam
| Birim | Çalışan hat (launchd) | Oturuma bağlı iş | İl | İlçe | Kaynak | Not |
|---|---|---|---|---|---|---|
| vezir | 11: vezir.ara_defter, vezir.beykoz_derle, vezir.gece_raporu, vezir.kaynak_ | launchd 11 · koşan gün ölçülmedi | 81 | 973 | — | KUYRUK basin_ulusal 973 ilçe · kaynak evreni birleştirici |
| hafiza | 18: dm02.dongu, gunluk-ozet, hafiza.ayna, hafiza.bellek, hafiza.foto_olcum | launchd 18 · koşan gün ölçülmedi | — | — | 23 | SORGU-01 havuz kaynak sayısı |
| basin | 15: ccbasin.canli_akis, ccbasin.derinlik, ccbasin.envanter, ccbasin.govde, | launchd 15 · koşan gün 4/30 | 8 | 22 | 14 |  |
| sosyal | 4: sosyal.gnd_retry, sosyal.hasat, sosyal.orkestra, sosyal.transkript | launchd 4 · koşan gün 9/30 | 2 | 6 | 168 |  |
| map | 6: ttmap.beykozgorsel, ttmap.eplan, ttmap.gazete_kare, ttmap.ilcehat, ttm | launchd 6 · koşan gün ölçülmedi | 11 | 12 | 11 |  |
| finans | 3: ccfinans.aylik, ccfinans.gunluk, ccfinans.telafi | launchd 3 · koşan gün ölçülmedi | 9 | 2 | 13 |  |
| analiz | 1: analiz.seo_haftalik | launchd 1 · koşan gün ölçülmedi | 2 | 0 | 0 |  |
| tic | 1: tic.rg_haftalik | launchd 1 · koşan gün ölçülmedi | 2 | 3 | 14 |  |
| ihale | 5: ccihale.arsiv, ccihale.csb, ccihale.dsi, ccihale.rg, ccihale.uyan | launchd 5 · koşan gün ölçülmedi | 2 | 3 | 6 |  |
| signals | 1: ccsignals.gelenkutusu | launchd 1 · koşan gün 4/30 | 1 | 2 | — | Beykoz tam dosya + Kartal kontrol (1/6 eksen) |
| pazarlama | 3: pazarlama.beykoz_ilan, pazarlama.harvest, pazarlama.yurtdisi | launchd 3 · koşan gün 24/30 | 81 | 0 | 7 |  |
| ai | 3: ttai.duyuru, ttai.fabrika, ttai.kesif | launchd 3 · koşan gün 28/30 | 10 | 12 | 4 |  |
| borsa | 3: ccborsa.evds_gunluk, ccborsa.ktb_yigm_aylik, evds.saglik | launchd 3 · koşan gün ölçülmedi | 34 | 40 | 12 |  |
| kitap | 1: kitap.nobet | launchd 1 · koşan gün 3/30 | — | — | — | coğrafi kapsam yok (kütüphane) |
| arsiv | 4: ttarsiv.d190, ttarsiv.kabul, ttarsiv.oturumarsiv, ttarsiv.uckopya | launchd 4 · koşan gün ölçülmedi | — | — | — | ölçülmedi |

**Toplam:** launchd tradia işi 79 · oturuma bağlı birim 0 · 81 il olan 2

*Vezir · motor/durum_tablosu.py*

**Okuma:** launchd'de 79 tradia işi; "oturuma bağlı birim 0" = her birimin en az bir launchd işi var, ama **koşan gün/30** yalnız 6 birimde ölçülü (Basın 4, Signals 4, Kitap 3, Sosyal 9, Pazarlama 24, Aİ 28 — 14 Eki kesiti); 9 birimde "ölçülmedi". 81 il: yalnız Pazarlama + Vezir kuyruğu. İlçe sayıları bölge dosyalarındaki tekil ilçe/anahtar sayımıdır (Borsa 40, Basın 22 — Beykoz/Kartal/Rize çoğunlukta).

## 3. Defter: Vaka #12–#15
- **#12** numara ayrılmış, tanım yok (hiçbir dosyada). · **#13** Basın arşiv kapsamı — dolduruldu. · **#14** uyuyan makinede launchd — sabah bekçisi 08:25/09:20 kuruldu, **bu sabah test edilemedi** (gece raporu/köşe/bekçi 18.10 logları 0 — pmset 08:10 uyanma kurulu; sonuç yarın). · **#15** numara ayrılmış; aday olgular deftere yazıldı (kaynak evreni v2 **geçerli 1 / geçersiz 56**; Sosyal pil %5 şarjsız), karar Patron'un.

## 4. Kanon push (bu commit)
- Sosyal 3 dosya: `sosyal_kanal_kanonu_v1_TASLAK.md` · `sosyal_orkestra_v1_TASLAK.md` · `sosyal_konu_agaci_v1_TASLAK.md` (TASLAK; Vezir kanonlaştırır — Sosyal'in PATRON_ACIK_SORULAR'ındaki 4 açık madde Patron'da) + `sosyal_talep_karti_v1.json` (Sosyal JSON Schema kopyası).
- **Bölge standardı v1.2** (Aİ, 17.10; "madde 9: 8 kalem denildi 9 var" şerhi Aİ'nin) · **kaynak_evreni_v2.md** (16 Eki birleştirme: 13 dosya, geçerli **1**, geçersiz **56** → lisans/zorunlu alan eksikliği; ACIK 0; Patron kovası 0 — birleştirme çalıştı, sonuç boş kaldı, 48 saat kimse bakmadı) · **tra_basin_uygulamasi_v1.md** (Hafıza MU-01) · **tra_basin_sablon_v1.1.html** (Basın) · **tra_basin_plan_v1.md** (Basın plan v1.2 kopyası; "gazete v1.1").
- gazete_kanonu v1.4 zaten repoda.

## 5. Anayasa B12 — "Liste tohumdur"
`00_KURUM_HAFIZASI/anayasa_b_blogu_v1.md` (yedek `.pre_B12_20261018`): ilk liste tam değildir, büyümek için yazılır; büyütme kuralı (sahip · künye · doğrulayan · kadans) yazılı; tohum liste **kapı değildir** (listede olmayan dışarıda: maskele / onay=false / ACIK sayma); silme yok; "tam" iddiası payda ile. İlk uygulamalar: görevli listesi 4+3, talep kartı 2/11, kaynak evreni, ayna borcu 15 (9 ölçülmemiş), tecrübe kaydı 10 TASLAK.

## 6. Açık / Patron
- Kaynak evreni v2 boş sonuç → CC'ler kaynak_tarama satırlarına lisans + zorunlu alanları yazmadı; yeniden birleştirme tarihi Patron'da.
- Sosyal açık soruları (PATRON_ACIK_SORULAR.md): günlük tavan 60→120?, konu ağacı kanonu, gece penceresi.
- Sabah zinciri gerçek testi yarın 08:10–09:20.

*Vezir · 2026-10-18 18:44*
