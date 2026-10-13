# HEDEF HAVUZU — CC hedef kartları (derleme v2)

**Kesit:** 2026-10-14 · **Derleyen:** Vezir · **Kaynak:** `02_CC_STATE/hedef_karti_<cc>.json` (13 kart, CC'lerin kendi yazdığı) + Vezir üretim ölçüsü `motor/SUREKLILIK.json`
**Kural:** Gerçek olmayan sayı yok · ölçülemeyen **ölçülmedi** · CC hedefi Patron onaylı değilse **ÖNERİ** damgalı.

## 0. Ortak hüküm

> **Darboğaz para değil: 7/24 makine + sürekli depolama + güç + tetik.**

13 kartın 13'ü de en az birini birinci engel sayıyor:
- **7/24 makine:** Finans, İhale, Basın, Map, Sosyal, Hafıza. Mac uyuyunca hat duruyor. Finans: 30 günde 3 başarılı gün; 7/24 ile ÇED detayı ~3 yıl yerine ~4 ay.
- **Sürekli depolama:** Basın, Map, Sosyal, İhale, Hafıza, Arşiv, Analiz. TT-HAFIZA son 30 günün ~21–28'inde takılı değil.
- **Güç:** Hafıza. Pil 10–13 Eki arası her gün %2'ye indi, "Check Battery" uyarısı var; dm02'nin 3 yarım koşusu pil kapanmasında öldü. Sistem geneli 30 günde 21 güvenli-duruş günü.
- **Tetik:** Signals (hiç launchd/cron yok), Arşiv (arsiv_cek.py cron'u yok), Kitap (oturum-bazlı + Bölüm 11 ton onayı), TT-AI (PROMOTE onayı), Pazarlama (EVDS3 anahtarı, ücretsiz başvuru).

**Paralı kalem** yalnız iki kartta var, ikisi de opsiyonel: TT-AI Adres-Harita aboneliği (77 il CKAN boşluğu için) ve Tic TTSG aboneliği (askıda karar).

## 1. Kartlar

**Üretim sütunları:** "Kart" = CC'nin kendi ölçtüğü üretken gün. "Vezir" = bağımsız alt-sınır ölçüsü: o gün CC veri dizininde log/state/kod dışı dosya yazıldı mı ya da SORGU-01'e kayıt girdi mi. exit 0 ve "disk yok, çıkıyorum" sayılmaz.

| CC | 12 ay hedef (statü) | Bugün (kart) | Kapatan eksik (kart) | Üretim · Kart | Üretim · Vezir | Diskten bağımsız mı (kart) |
|---|---|---|---|---|---|---|
| **Basın** | 973 ilçe aylık tam tur + ~100 ilçe haftalık bülten · ~2.000 host · 2–5M künyeli haber (künye ≥%80) · **ilçe hedefi Patron 14 Eki** | 566.478 kayıt · url/tarih %14 · bölge motoru 3 ilçe · kuyruk 22 | disk · 7/24 makine · künye | **4/30** (SORGU-01 kayıt günü) · 26 gün durdu | 🔴 **6/30** (dosya 3 g · ingest 4 g) | HAYIR (ham disk-birincil · artık kanon gereği doğru) |
| **Hafıza** | 973/973 idari-ad · SORGU-01 27→32 kaynak · kanonik sayım 27/27 · ritim %90 (ÖNERİ) | 1.456.099 ham kayıt · 27 kaynak · idari-ad 972/973 · ritim ~%50 | güç (pil) · depolama · kanonik sayım | builder kayıt günü **20/30** | 🟡 **21/30** (dosya 3 g · ingest 21 g) | KISMEN (basın ingest disk ister) |
| **Analiz** | 810 ilçe DFE · 5.000 mahalle · v25b 50K (ÖNERİ, örtük) | v24 250.193 · v25a 258.945 · DFE 2 bölge | disk (mount kopuyor) · ölçüm hattı | **7/30** (sprint-notlu) | 🔴 **1/30** (dosya 1 g · ingest 0 g) | KISMEN (3 bölge lokal mirror, 76 il disk) |
| **Sosyal** | 30 ilçe · 750 kanal · 25.000 video (ÖNERİ) | 5.120 video · 208 kanal · 3 ilçe | disk (21 gün durdu) | **9/30** | 🔴 **8/30** (dosya 2 g · ingest 8 g) | KISMEN (DB lokal, hasat disk) |
| **Tic** | 30 ilçe aktör envanteri · RG 52/52 hafta (ÖNERİ) | firma DB 527 (120 gün eski) · 3 ilçe | RG hattı disk + plist bağlantısı (Standing #38) | **7/30** (oturum) · otomatik **0** | 🔴 **3/30** (dosya 3 g · ingest 1 g) | EVET (14 Eki itibarıyla, RG ayna) |
| **İhale** | 973 ilçe K7 hücresi · 30 derin ilçe · 7 kaynak | EKAP 102.174 İKN (bülten 3 ay eski) · RG 6.133 başlık · 12 ilçe hücresi | Mac-birincil yazım · Patron haftalık EKAP bülteni | **1/30** (cron) + 5 elle oturum | 🔴 **1/30** (dosya 1 g · ingest 0 g) | KISMEN |
| **Finans** | ≥330 başarılı gün · ÇED detay 9 büyükşehir · 11 kaynak | ÇED 127.794 · detay 6.353 (yalnız İstanbul) · 7 kaynak | 7/24 çalıştırıcı | **3/30** tam başarılı (9 tur) | 🟡 **23/30** (dosya 16 g · ingest 21 g) | EVET (Mac'e bağımlı) |
| **TT-MAP** | 973 ilçe çeyreklik · e-Plan 365/365 · 51.655 mahalle | 12/973 ilçe · e-Plan 156.081 plan · S2 4 il | Mac-birincil hasat · kalıcı depolama | e-Plan **2/30** kanıtlı + manuel oturum | 🔴 **6/30** (dosya 6 g · ingest 0 g) | HAYIR (ham diske kodlu) |
| **TT-AI** | CONFIRMED 11→15 il · 3.003→4.000–4.500 (ÖNERİ, onaya bağlı) | evren 32.290 · CONFIRMED 3.003 (3 ay sabit) | PROMOTE onayı · 77 il kaynak (ücretli) | **28/30** (nöbet koşusu) | 🔴 **1/30** (dosya 1 g · ingest 0 g) | EVET |
| **Pazarlama** | 81/81 il · 25 rakip kaynak · ≥28/30 gün | 10/81 il · 17 rakip · 1.043 landing kaydı | EVDS3 anahtarı (ücretsiz) | **24/30** | 🟡 **21/30** (dosya 21 g · ingest 0 g) | EVET |
| **Signals** | 22 ilçe rozeti · 4 tam dosya (ÖNERİ, Üst Akıl onayında) | 1 tam ilçe (Beykoz) · 2 rozet | tetik (otomasyon yok) · denetçi yetkisi | **4/30** | 🔴 **3/30** (dosya 3 g · ingest 0 g) | BÜYÜK ÖLÇÜDE EVET (7 girdinin 6'sı lokal) |
| **Kitap** | Cilt II 13 bölüm + PDF · katalog 95→250 (ÖNERİ) | 1/13 bölüm · kapsama %75,4 | Bölüm 11 ton onayı (Patron) | **3/30** (oturum-bazlı) | 🔴 **3/30** (dosya 3 g · ingest 0 g) | EVET (tam lokal) |
| **Arşiv** | oturum arşivi %100 ≤7 gün · üç-kopya 5→16 kaynak · 6.820 ilan detay | arşiv %91,2 (son çekim 48 gün önce) · 3/3 kopya | arsiv_cek cron'u · kalıcı ikinci kopya | **6/30** | 🔴 **3/30** (dosya 3 g · ingest 0 g) | KISMEN (Kopya-2 diske bağlı) |
| **Borsa** | kart bulut hattında — **Patron getirecek** | — | — | — | 🔴 **3/30** (dosya 3 g · ingest 0 g) | — |
| Kasa · Site | kart yok (PARK) | — | — | — | ölçülmedi | — |

## 2. Sapmalar (Vezir)

| CC | Kart | Vezir | Fark | Okuma |
|---|---|---|---|---|
| Basın | 4 | 6 | +2 | uyumlu (mtime alt-sınır payı içinde) |
| Hafıza | 20 | 21 | +1 | Vezir sayısı builder ingest günü + özet dosyaları; kartın 20'si yalnız builder. Alarm dosyaları (30 günde 18.053) DIŞLANDI. |
| Analiz | 7 | 1 | -6 | Vezir düşük: CC çıktısının bir kısmı veri dizini dışına yazılıyor (02_CC_STATE, tradia-beykoz) ya da üzerine yazılıyor — alt-sınır |
| Sosyal | 9 | 8 | -1 | uyumlu (mtime alt-sınır payı içinde) |
| Tic | 7 | 3 | -4 | Vezir düşük: CC çıktısının bir kısmı veri dizini dışına yazılıyor (02_CC_STATE, tradia-beykoz) ya da üzerine yazılıyor — alt-sınır |
| İhale | 6 | 1 | -5 | Vezir düşük: CC çıktısının bir kısmı veri dizini dışına yazılıyor (02_CC_STATE, tradia-beykoz) ya da üzerine yazılıyor — alt-sınır |
| Finans | 3 | 23 | +20 | Vezir yüksek ama yanıltıcı: 21 ingest günü Hafıza builder'ının aldığı gün (gecikmeli alım), Finans'ın ürettiği gün değil. Dosya-günü 16; kart 3 tam başarılı / 9 tur. Gerçek üretim 9–16 arası. |
| TT-MAP | 2 | 6 | +4 | Vezir yüksek: kart muhafazakâr saymış (yalnız tam-başarılı gün) ya da dizinde başka yazım var |
| TT-AI | 28 | 1 | -27 | Kart KOŞU sayıyor (nöbet 28 gün). Üretim: yeni CONFIRMED yok (kart: 3 ay sabit). Patron'un 'exit 0 ≠ üretim' tanımına birebir örnek. |
| Pazarlama | 24 | 21 | -3 | Vezir düşük: CC çıktısının bir kısmı veri dizini dışına yazılıyor (02_CC_STATE, tradia-beykoz) ya da üzerine yazılıyor — alt-sınır |
| Signals | 4 | 3 | -1 | uyumlu (mtime alt-sınır payı içinde) |
| Kitap | 3 | 3 | +0 | uyumlu (mtime alt-sınır payı içinde) |
| Arşiv | 6 | 3 | -3 | Vezir düşük: CC çıktısının bir kısmı veri dizini dışına yazılıyor (02_CC_STATE, tradia-beykoz) ya da üzerine yazılıyor — alt-sınır |
| Borsa | kart yok (bulut) | 3 | — | Mac'teki cc_borsa dizini; bulut hattı ölçülemez |

## 3. Ölçü düzeltmesi kaydı (Patron 14 Eki)

İlk süreklilik ölçüsü (14 Eki ilk tur) **koşu** sayıyordu: launchd tetiklendi mi, log damgası var mı. Patron'un düzeltmesiyle birincil ölçü artık **üretim**: o gün yeni çıktı ya da kayıt var mı. Basın ilk ölçüde %93 çıkmıştı (govde heartbeat'i), kartında ise 26 gün durduğunu yazıyordu. Koşu ölçüsü SUREKLILIK.json'da `cc_ozet_KOSU_ikincil` adıyla tanı amaçlı duruyor.

## 4. Derleme zamanlaması notu

İlk HEDEF_HAVUZU (14 Eki ~01:4x) "diskte kart yok" diyordu. Kartlar 01:45–02:05 arasında düştü; tarama birkaç dakika erken kalmıştı. v2 bu kartlardan derlendi.

*Vezir · $0 · 2026-10-14*
