# HAM VERİ DEPOLAMA KANONU v1

**Statü:** 🟢 KANON · Patron kararı 2026-10-14 (Vezir kaydı)
**Kapattığı çelişki:** KOS-6 ↔ v3-uygula (2026-08-07'den beri açıktı). KOS-6 "Mac-birincil / harici-ayna", v3-uygula kuralı (2026-07-31) "TT-HAFIZA-birincil" diyordu. Basın kartı (14 Eki) bu çelişkiyi "Patron kararı bekliyor" diye işaretlemişti.

---

## Kural

| Veri sınıfı | Birincil | Ayna / ikincil | Gerekçe |
|---|---|---|---|
| **Küçük veri** — kod, durum, DB, JSON çıktı, kart, özet, CC'nin kendi ürünü | **Mac** | TT-HAFIZA disk (ayna) | Disk takılı değilken iş durmasın |
| **Büyük ham — basın HTML ham** | **TT-HAFIZA disk** | — (NAS gelince **NAS** birincil) | Mac'e sığmaz (Basın kartı: Mac'te 18 GB boş, İstanbul ham tek başına ~29 GB) |
| **Büyük ham — uydu** (Sentinel/DEM/radar ham karoları) | **TT-HAFIZA disk** | — (NAS gelince **NAS** birincil) | Aynı (uydu-arşiv protokolü `TT-HAFIZA/uydu_arsiv/`) |

- **Sınır sayısı yok:** Patron "küçük/büyük" için bayt eşiği vermedi. Büyük ham **liste-bazlı**: yalnız basın HTML hamı + uydu hamı. Listeye ekleme Patron kararıdır; CC kendi verisini "büyük" ilan edip disk-birincil yapamaz.
- **Ayna best-effort'tur:** Disk yokken küçük-veri işi **çalışmaya devam eder**, yalnız ayna adımı atlanır ("[AYNA] TT-HAFIZA mount yok — Mac-local birincil sağlam, ayna atlandı" — Pazarlama V3.1 deseni = referans uygulama).
- **Büyük-ham işi disk yokken:** çalışmaz ama **"üretim yok"** olarak kaydedilir (süreklilik ölçüsünde yeşil sayılmaz · Patron 14 Eki). Mümkünse Mac'te küçük tampon tutup disk dönünce akıtır (Sosyal kartı seçenek A).
- **NAS geldiğinde:** Büyük ham NAS'a taşınır, TT-HAFIZA disk ikinci kopya olur (Standing #37 üç-kopya).

## CC'ler için uygulama listesi (14 Eki kartlarından)

| CC | Bugün | Kanona göre | İş |
|---|---|---|---|
| Pazarlama | Mac-birincil + disk ayna | ✅ uyumlu | — |
| Finans | Mac-birincil + disk ayna | ✅ uyumlu | — |
| TT-AI | Mac-local çekirdek, disk ham-ayna | ✅ uyumlu | — |
| Kitap | tam Mac-local | ✅ uyumlu | — |
| Tic | RG haftalık STAGING'e (disk) yazıyor | ❌ küçük veri disk-birincil | RG artımlı çıktı Mac'e (kart zaten öneriyor) |
| İhale | günlük toplama yalnız TT-HAFIZA'ya | ❌ küçük veri disk-birincil | lokal-birincil yazım (~100 MB/yıl, kart önerisi) |
| Sosyal | hasat + Whisper disk yokken durur | ❌ altyazı hamı küçük veri | Mac tampon + disk ayna (kart seçenek A) |
| Hafıza | builder basın-ingest STAGING'den | ⚠ basın ham = büyük (disk doğru); ama ingest disk yokken durur | kabul — büyük-ham bağımlılığı |
| Basın | ham disk-birincil | ✅ büyük ham | NAS bekleniyor |
| TT-MAP | ham arşiv diske kodlu | ✅ uydu = büyük ham | e-Plan delta (küçük) Mac'e |
| Arşiv | Kopya-2 diske bağlı | ✅ (kopya rolü) | NAS = kalıcı ikinci kopya |

*Vezir · Standing #37 + KOS v1.0 + uydu-arşiv protokolü · 2026-10-14*

## Ek kural · STAGING boşaltma ve durum dosyaları (Patron 15 Eki gün başı karar 2)

Hafıza STAGING'i (STAGING_YENI/<cc>/…) arşive boşaltırken **`_checkpoint.json`, `_seen_keys.json`, `*_checkpoint.*`, `*_seen*`, `son_tarih*`, `.state` gibi durum dosyaları YERİNDE KALIR** (taşınmaz, silinmez). Durum dosyası = toplayıcının "nerede kaldım" belleğidir; veri değil.
**Emsal (kök neden):** İhale RG kapsamasında 3 gerçek delik (18–30 Tem · 17–31 Ağu · 28 Eyl–13 Eki): STAGING_YENI/ihale tarihli klasörlere taşınıp boşaltılırken cron'un checkpoint'i de gitti → sonraki koşu "bugün−3 gün" penceresiyle başladı. İhale düzeltmesi: `rg_geriye_doldur.py auto` (Mac-birincil son tarihten ≤60 gün), +342 kayıt; `uyan_icra` hâlâ STAGING'e yazıyor → her boşaltmada `_seen_keys` kaybolur.
**Ölçü:** `motor/SUREKLILIK.json → kaynak_bosluk` — kaynak başına son kayıt tarihi, bugüne uzaklık (gün), günlük serilerde son 90 günün eksik gün sayısı ve en uzun boşluk (SORGU-01 `kayit` tablosu). Boşluk ≥ 3 gün = bayrak; sahibi CC açıklar.
*Vezir · 2026-10-15 14:09*

## Ek kural · Ayna disiplini (Finans emsali · Patron 15 Eki)

**"Aynalamadan sonra düzenlenen dosya BAYAT sayılır, yeniden aynalanır."** Mac-birincil dosya diske/NAS'a aynalandıktan sonra Mac kopyası değişirse (mtime > ayna mtime ya da SHA farkı) ayna **bayat**tır; bir sonraki ayna turunda yeniden kopyalanır ve manifest SHA'sı güncellenir. Bayat ayna "yedek var" sayılmaz. Ölçü: `havuz_gecikme` ile aynı mantık — kaynak mtime ↔ ayna mtime; Hafıza manifestinde `ayna_durumu: GÜNCEL|BAYAT`. Emsal: Finans EVDS3 yenileme (`evds_guard` + birleştirici) sonrası veri klasörü aynadan sonra değişti.
*Vezir · 2026-10-15 17:42*

## Ek kural · Diske yazım tekeli ve tampon eşiği (Patron 15 Eki 18:4x · DİSK ÇIKARILDI emsali)

1. **TT-HAFIZA'ya (ve ileride NAS'a) yalnız Hafıza, kilitli taşıma ile yazar.** Başka hiçbir CC doğrudan diske yazamaz; launchd/cron hedef yolları **Mac-geçici tampon**dur. Emsal: Sosyal hasadı doğrudan diske yazıyordu (U-06); disk 3 kez düştü, yarım dosya + alarm.
2. **Ayna borcu:** disk yokken (ya da yazım yasağında) CC, aynalanacak her kalemi `02_CC_STATE/ayna_borcu.json`'a kaydeder (CC · yol · dosya sayısı · GiB · varsa SHA listesi). Disk gelince Hafıza **tek kilitle, sırayla** aynalar ve kalemi `aynalandi` yapar. Vezir toplam borcu Mac boş alanıyla birlikte ölçer.
3. **Tampon eşiği (Vezir değeri):** CC başına tampon **2 GB**; toplam tampon **8 GB**; Mac boş alan **< 5 GiB** → tampon yazımı DURUR (hasat durur; kayıp değil gecikme). CC tamponu 2 GB'ı aşınca Hafıza taşıması kilit sırasında **öncelik** alır. Gerekçe: Mac boş 13 GiB (15 Eki), bilinen ayna borcu ~57 GiB zaten diske sığmayı bekliyor.
4. **Disk çıkarma protokolü:** (a) diske yazan tüm launchd işleri bootout (plist yerinde); (b) `lsof /Volumes/TT-HAFIZA` = 0 ve yazan süreç 0; (c) kilit tutan disk işi düşürülür, disk_gerekir girdiler `DİSK BEKLİYOR`; (d) Vezir "ÇIKARABİLİRSİN" yazar; (e) Patron `diskutil eject`. Geri takılınca Hafıza mount teyidi + ayna borcu sırası.
5. **Günlük sadeleştirme** (log kırpma, geçici dosya) kilit gerektirmez; Hafıza günlük yapar.
*Vezir · 2026-10-15 18:39*
