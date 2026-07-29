# TRADİA KURULUŞ DOSYASI — CC-TT-MAP
**Görsel-Coğrafi Veri Fabrikası** · Hazırlık: 2026-07-29 · Dizin: `~/tradia_ttmap/` · Disk: TT-HAFIZA/ttmap_ham (18 GB)

---

# (A) TEK SAYFA ÖZET — yönetici dili

**CC-TT-MAP, Tradia'nın "gözü"dür.** Türkiye mahallelerini uzaydan (Sentinel-2/Landsat/radar) ölçer; her mahalle için deterministik fiziksel-gerçek üretir: ne kadar yapılaştı, ne kadar yeşil, hangi yöne gidiyor, arazi-formu neye elveriyor. **Yorum yapmaz — ölçüm üretir.** Fiyat/yatırım-kararı diğer katmanların işidir; TT-MAP onlara sağlam **zemin-gerçeği** besler.

**Bugünkü varlık:** 4 il (İstanbul/İzmir/Ankara/Konya) · **3.660 mahalle** · **18.842 ölçüm-kaydı** (mahalle×yıl) · 18 GB ham-arşiv · %100 ücretsiz-kaynak ($0).

**En değerli katkı — dürüstlük altyapısı:** TT-MAP döneminde en çok hata yaptı ve en çok düzeltti. Bu, üç kalıcı doktrin doğurdu: **(1) Fizik-sınır** (NDVI 4,31 imkânsızdır — her sayı fiziksel-mümkünlük kapısından geçer), **(2) Üç-imza** ("gelişti" demek için optik+radar+bağımsız-doğrulama gerekir; tek-sensör yanıltır), **(3) Kırsal-N/A** ("ölçülecek-kentleşme-yok" ≠ "gelişmiyor"). Bu doktrinler bir yatırım-şirketinin en pahalı hatasını — **olmayan bir dönüşümü var-göstermeyi** — önler.

**Beykoz vakası (MAP24-38):** Beykoz'un fiziksel-gerçeği tam-ölçüldü — arz-kıtlığı **fiziksel** (yapılaşabilir-boş %3-8 bandı), büyüme **köprüde değil kıyıda**, ormanlar **korunuyor**, Riva'da inşaat **henüz-yok** (F2'nin 2026-27 öngörüsüne temiz t0). 14+ true-color karo ile "resim-çekmiyoruz" açığı kapandı.

**Tradia fazındaki yeri:** TT-MAP **ARZ (veri-toplama) fazının fiziksel-omurgasıdır**; TALEP (soru-cevap/sinyal) fazına geçişte, Signals/Finans/İhale'nin sorularına **uydu-kanıt-ayağı** sağlar (ör. radar-HAKEM, arazi-formu, afet-çaprazı).

---

# (B) GENİŞ TEKNİK ÖZET

## 1) DOĞUŞ

**Ne zaman:** 2026-07-18 (MAP01). Tradia-16 kapanışında "dönemin en büyük yeni CC" olarak açıldım.
**Hangi ihtiyaçla:** Tradia'nın elinde mahalle-bazlı **ilan/fiyat** verisi (ARZ tarafı) vardı ama **fiziksel-zemin gerçeği yoktu** — bir mahalle gerçekten yapılaşıyor mu, yeşil mi kaybediyor, arazi inşaata elverişli mi? Bu soruların cevabı uydudaydı ama kimse ölçmüyordu. Ben bu boşluğu doldurmak için açıldım: **mahalle-bazlı Sentinel-2'den deterministik nokta-çıkarım.**

**ARZ→TALEP geçişindeki yerim:** Tradia'nın ilk fazı **ARZ** = veri-toplama (Sahibinden ilanları, firma DB, ihale arşivi). Ben bu fazın **fiziksel-coğrafi omurgasıyım** — ilan-verisi "ne satılıyor" der, ben "zemin ne durumda" derim. İkinci faz **TALEP** = soru-cevap/sinyal (Signals/Finans yatırım-sorusu yanıtlar). Bu geçişte ben ARZ'da kalırım ama **çıktım TALEP'i besler**: Signals "bu mahalle gelişiyor mu" diye sorunca uydu-kanıtı ben veririm. Yani **ARZ-üreticisi ama TALEP-hizmetkârı**.

**İlk sprintler (kendi arşivimden):**
- MAP01 (07-18): altyapı-spec; Copernicus/Mapillary spec-doğrulandı, hesap-bekleme. Ölçülen: yerel-disk 21GB (ulusal-arşiv SIĞMAZ→NAS-şart); mahalle_evren 32.290 ama **geometri-yok** (poligon şart).
- MAP02 (07-18): **OSM admin_level=8 geometri hasadı** (Kadıköy 21-mahalle pilot, #18 join %100); rasterio kuruldu; band-math prototipi çalıştı.
- MAP02.5 (07-18): Copernicus hesabı açıldı (S3 pencereli-okuma, **12 TB/ay ücretsiz**).

## 2) FELSEFE & PRENSİPLER (her kural yeniden-sorgulandı)

**Çalışma felsefem:** *Ölçülmeyen şey yoktur; varsayılan şey yanlıştır.* Uydu yalan söylemez ama yorumlayan yanılır — o yüzden her sayıyı fiziğe, her iddiayı ikinci-imzaya sorarım.

| Prensip | Ne | Hâlâ geçerli mi? |
|---|---|---|
| **A04 — ölç, varsayma** | Her iddia ölçülen-gerçeğe dayanır; "veri-yok" bir **arama-sonucudur, ölçüm-değil** (Finans-dersi ödünç) | ✅ ÇEKİRDEK. Gereksiz-değil, eksik-değil. |
| **V16 — öz-eleştiri** | Her rapor 3+ hata itirafıyla biter | ✅ Geçerli; hatalarımın çoğunu bu yakaladı |
| **Fizik-sınır-bloğu** ★benden | NDVI∈[-1,1], oran∈[0,100], VV-dB-aralık, eğim∈[0,90] — her çıktıda zorunlu-blok | ✅ Göllü-4,31 dersi; **eksikti, eklendi** |
| **Üç-imza** ★benden | "gelişti" iddiası ≥2 bağımsız-fizik-imza + pozitif-kontrol | ✅ Ortaçeşme-dersi; tek-sensör-yasağı |
| **Kırsal-N/A-beyanı** ★benden | ⬜ = "ölçülecek-kentleşme-yok" ≠ "gelişmiyor"; net=0 ölçüm-gibi-sunulmaz | ✅ Signals-net=0-defekt-dersi |
| **#34 kaynak-karıştırma-yasağı** ★benden | Aynı-seride tek-kaynak (MPC↔CDSE ±1,4p sahte-basamak) | ✅ Standing-adayı |
| **NDBI-KISITI** ★benden | NDBI "yapılı"yı değil "kuru-yüzey"i ölçer; WorldCover-çapraz ZORUNLU | ✅ Kanon |
| **L7-kanon-kuralı** ★benden | Landsat-7 2003+ kullanılmaz (SLC-off %22 şerit, -48p sapma) | ✅ Kanon |
| **Radar-HAKEM-doktrini** ★benden | S1-ACD dik-arazide standalone-detektör-değil, hakem | ✅ MAP30-dersi |
| **$0** | Yalnız ücretsiz-kaynak (Copernicus/MPC/OSM/NASA-anonim) | ✅ ama Earthdata-token gibi Patron-kimlik-kapıları var (kabul) |
| **SİLME-YOK** | Düzeltme=overlay+yedek (ttmap_degisim_precorrection) | ✅ Geçerli |
| **#18 üçlü-anahtar** | mahalle_id="il/ilce/mahalle" join | ✅ Geçerli |
| **#31 KVKK** | Düşük-güven-veri dışarı-verilmez | ✅ Geçerli |
| **Betik-önce + LLM=yorum-only** (ÜA-S91) | İndirme/hesap=terminal-betik/nohup; model yalnız sayı-okur/karo-değerlendirir | ✅ Yeni; kabul |

**Yeniden-sorgulama sonucu — EKSİK olan (yeni-öneri):**
- **Çapraz-katman-doğrulama:** haber×fiziksel (MAP37) her-katman diğerinin kör-noktasını yakalar → tek-katman-yeter-değil ilkesi anayasaya girmeli.
- **Karo-seviyesi-bulut ≠ sahne-seviyesi-bulut** (MAP36): değişim-tespiti crop-bulut-kontrolü ister.
- **GEREKSİZ olan:** yok — kuralların tamamı bir gerçek-hatadan doğdu, hiçbiri süsleme-değil.

## 3) ANAYASA / KURAL SETİM (numaralı)

**Ödünç-alınan (Tradia-geneli):** #8 rate-limit-saygı · #18 üçlü-anahtar · #31 KVKK · A04 · V16 · $0 · SİLME-YOK.

**TT-MAP-özgü kanon (numaralı):**
1. **TM-01 Fizik-sınır-bloğu** — her sayısal-çıktı fiziksel-mümkünlük-kontrolüyle biter.
2. **TM-02 Üç-imza** — gelişim-iddiası ≥2 bağımsız-fizik + pozitif-kontrol.
3. **TM-03 Kırsal-N/A-beyanı** — ⬜ mahalle "ölçülecek-kentleşme-yok"; net=0 ölçüm-değil.
4. **TM-04 Kaynak-karıştırma-yasağı** (=Standing #34) — tek-birim tek-kaynak.
5. **TM-05 NDBI-KISITI** — WorldCover-çapraz-doğrulama zorunlu.
6. **TM-06 L7-yasağı** — Landsat-7 2003+ kullanılmaz.
7. **TM-07 Radar-HAKEM** — S1-ACD hakem, standalone-detektör-değil.
8. **TM-08 Çapraz-katman** (yeni-öneri) — tek-katman-yeter-değil; kesişim güveni+hatayı gösterir.

**Standing adayları (Üst Akıl'a):** #34 (kaynak-karıştırma) · TM-01 (fizik-sınır) · TM-02 (üç-imza) · TM-03 (kırsal-N/A/net=0) — bunlar TT-MAP-dışı tüm-CC'lere de uygulanabilir ölçüm-disiplinleridir.

## 4) SAHİPLİK DATASI (tüm veri setleri)

| Set | Yol | Kayıt/Boyut | Güncellik | Kanonik | Üreten betik |
|---|---|---|---|---|---|
| Nokta (ham NDBI) | `02_NOKTA/ttmap_nokta.jsonl` | 20.923 satır / 18.842 OLCULDU | 2016-2025 | ✅ | tt_map_fabrika.py |
| Nokta (WC-düzeltilmiş) | `02_NOKTA/ttmap_nokta_duz.jsonl` | 20.923 satır | " | ✅ | ndbi_duzelt.py |
| Değişim-metriği | `02_NOKTA/ttmap_degisim.jsonl` | 3.770 satır (netfark_gecerli overlay) | " | ✅ | degisim_metrik.py |
| — yedek (düzeltme-öncesi) | `..._precorrection_MAP27.jsonl` | 3.770 | dondu | arşiv | (SİLME-YOK) |
| Arazi-örtüsü (WorldCover) | `02_NOKTA/*_arazi.jsonl` | 4-il 3.784 | 2021 | ✅ | arazi_teyit.py |
| DEM (rakım/eğim) | `02_NOKTA/*_dem.jsonl` | 4-il 3.784 | statik-2021 | ✅ | dem_cikar.py |
| Geometri (OSM al8) | `02_NOKTA/geometri/*_al8_geom.json` | 4-il | statik | ✅ | osm_hasat.py |
| Ham S2 arşiv | `TT-HAFIZA/ttmap_ham/` | 528 dosya / **18 GB** | 2016-2025 | re-indirilebilir | fabrika-scratch |
| Beykoz-vaka | `02_NOKTA/vaka_beykoz_*` + `beykoz_arazi_formu.json` + `beykoz_zaman_makinesi.json` | MAP24-32 | 2026-07 | vaka | (MAP-serisi) |
| NASA/radar keşif | `nasa_kesif/` (47 dosya) | S1-ACD/OPERA/afet-cross | 2026-07 | **kanon-dışı** (#34) | opera_retry.py vb |
| Landsat-deney | `landsat_deney/` (9 dosya) | ARASTIRMA_RAFI | rafta | kanon-dışı | beykoz_zaman.py |
| Uydu-arşiv | `TT-HAFIZA/uydu_arsiv/` | protokol-kuruldu | canlı | — | uydu_arsiv.py |

**Kanonik-sayılar:** 3.660 mahalle (İst981/İzm1258/Ank1043/Kon378) · 18.842 ölçüm-kaydı · **değişim-kapsamı %47 (1708/3660)** (net=0-flatten-defekti-düzeltmesi sonrası; eski %99 şişirilmişti) · Etiket 🟢1562/🟡184/⬜1914.

## 5) TEKNİK İLERLEME KRONOLOJİSİ

| Sprint | Tarih | Kilometre taşı |
|---|---|---|
| MAP01-02.5 | 07-18 | Doğuş · OSM-geometri · rasterio · Copernicus-hesap (12TB/ay) |
| MAP03 | 07-18/19 | İlk gerçek-ölçüm · **offset çift-uygulama + kredensiyel-ters-etiket** hataları yakalandı |
| MAP04-05 | 07-19 | İstanbul-pilot→ulusal-fabrika · bant-hızı yanlış-teşhis (0,7→47 MB/s) |
| MAP10-12 | 07-19 | 2.dalga DEM+WorldCover · **NDBI-tarım-yanlış-pozitifi** + WC-düzeltici |
| MAP13 | 07-19 | ★**Çok-yıl fabrikası** + değişim-metriği · tam-arşiv-kararı |
| MAP14 | 07-19 | Harici-bellek-kopma-krizi · guard(TemizDur) · İzmir-cephe (sonra-geçersiz) |
| MAP16-17 | 07-19 | ★Öz-hata: per-yıl-NDBI sahte-trend→per-mahalle-fix · etiket-4-seviye-şema |
| MAP18-20 | 07-19/26 | MPC-fizibilite · NASA-katalog · **tarihsel-eksen deneme→raf** · io-lulc-red · L7-kural |
| MAP21-23 | 07-19/20 | İç-sunum · dergi-öz-analiz |
| MAP24-28 | 07-25/26 | ★**Beykoz vakası:** tablo · **köprü-tezi-çürütüldü** · net=0-defekt(%99→%47) · Landsat-NDVI-zaman-makinesi |
| MAP29-32 | 07-26/27 | NASA-keşif(token) · **S1-ACD radar-HAKEM** · **arazi-formu** (%3-8-yapılaşabilir) |
| MAP33 | 07-27 | TUCBS-keşif (anonim-erişim-yok) |
| MAP34-38 | 07-28/29 | ★**Görüntü-fabrikası** (true-color karo) · afet-çaprazı · sunum-net-standart · OPERA-retry-betikleşti |

**Bugünkü yetenek-haritam:** S2 optik-indeks (NDBI/NDVI/NDWI) · çok-yıl-değişim · DEM-eğim/bakı/taşkın · WorldCover-arazi · Landsat-tarihsel-NDVI(rafta) · Sentinel-1-radar-ACD(hakem) · OPERA-DIST(betik-bekliyor) · true-color-görsel-üretim · OSM-geometri/yol/kısıt · çok-CC-çapraz(afet).

## 6) BEYKOZ DOSYASI KATKIM + SON KONUŞMA KARARLARI

**Beykoz'da ürettiğim (MAP24-38):**
- 45-mahalle fiziksel-tablo · **köprü-etkisi-çürütme** (OSM-gerçek-O-7: büyüme kıyıda-değil) · net=0-defekt-yakalama(kapsam-düzeltme) · Landsat-NDVI-zaman-makinesi(conversion-yok) · **arazi-formu** (yapılaşabilir-boş %3-8, fiziksel-arz-kıtlığı) · **S1-radar-HAKEM** (Ortaçeşme-fenoloji-teyidi) · 14+ true-color-karo · afet×taşkın-çaprazı.

**Bu dosya hazırlanırken/son-turlarda bana verilen kararlar/dersler/ÜA-direktifleri (hiçbiri dipte-kalmasın):**
1. **Depolama-talimatı:** tüm uydu-indirmeleri TT-HAFIZA/uydu_arsiv/<mahalle>/<tarih>/; 5-kural (.part→rename · oturum-başı-disk-kontrolü · karolar'a-yalnız-PNG · sync+eject · manifest). Disk-yoksa-indirme-YOK. → `kod/uydu_arsiv.py`.
2. **Betik-önce-mimarisi (ÜA-S91):** indirme/hesap=tek-sefer-betik/nohup/oturum-bağımsız; **beklemem-başlat-çık**. OPERA-retry betikleşti (6h, PID-arka-plan). Yıllık-kadans cron-taslağı (KURULMADI, onay-bekliyor).
3. **LLM=yorum-only:** sayı-okuma/fizik-rapor/karo-göz-değerlendirme LLM'de; piksel-işine-model-sokulmaz.
4. **%8-doğrulama (MAP35):** "%8" ile ölçtüğüm "%3,3" **aynı-veri-farklı-tanım** → nokta-değil **bant %3-8** (muhafazakâr→gevşek); sunuma bantlı-girer.
5. **Karo-standartları (MAP34/36/38):** geniş-karo=kanonik-sunum (v2-3-panel-arşive); v3-net-standart (10m-tam-çöz/2-98-germe/kenarsız/koyu-zemin/kayıpsız) Patron-onayına.
6. **Riva-ölçüm-borcu** kapatıldı: 4-ölçüm-oybirliği inşaat-yok = F2-öngörü-t0.
7. **Bulut-artefaktı-dersi (MAP36):** Tokatköy %34→%2,7 (sahne-bulut≠karo-bulut); görsel-denetim artefaktı-yakaladı.
8. **Afet-çapraz-öz-denetimi (MAP37):** haber Riva-taşkın-boşluğumu yakaladı; ben Göksu-park-yanlış-alarmını gösterdim.

**Signals'a katkım (K24a köprüsü):** radar-HAKEM Ortaçeşme-fenoloji-teyidi (SIG4 uydu-ayağı) · arazi-formu arz-kıtlığı-fiziksel-yarısı · BEY-15-dürüst-negatif · afet-çaprazı.

## 7) DİĞER CC'LERLE SINIRLARIM

| SENİN işin (TT-MAP) | SENİN işin DEĞİL |
|---|---|
| Fiziksel-zemin: yapılaşma/yeşil/su/NDVI-ölçümü | **Fiyat/değer/getiri** → CC-Finans |
| Arazi-formu: eğim/kısıt/taşkın/yapılaşabilirlik | **İlan/emsal/piyasa** → CC-Analiz |
| Uydu-değişim: çok-yıl-trend, true-color-görsel | **Haber/söylem/afet-haber** → CC-Basın |
| Radar/OPERA inşaat-tespiti (fiziksel) | **İhale/proje/aktör** → CC-İhale |
| Mahalle-geometri/kısıt-katmanı | **Yorum/sinyal/skor** → CC-Signals/TT-AI |
| Fiziksel-kanıt-ayağı (çapraz için) | **KAP/borsa/şirket** → CC-Borsa |

**Çakışma-alanları (netleştirildi):** (a) TT-AI mahalle_evren'i READ-ONLY paylaşırım, **dokunmam** (#18+V37-RO). (b) Signals'a uydu-kanıt-ayağı veririm ama **skor/yorum onun** — ben "değişti" derim, "yatırımlık" demem. (c) Afet-çaprazında Basın-verisini **çapraz-amaçlı** kullanırım (#34 ayrı-kaynak-şerhiyle), Basın-işine girmem. (d) İhale-noktalarını pozitif-kontrol-olarak kullanırım, ihale-analizi yapmam.

## 8) AÇIK BORÇLAR + 3 GELECEK-YETENEK

**Açık borçlar:**
- 🔴 **OPERA-DIST server-500** — token-geçerli ama LP-DAAC-egress-arızalı; retry-betiği-bekliyor (düzelince üç-imza-3.-ayağı-tamamlanır).
- 🟡 **Taşkın-proxy-boşluğu** (MAP37): Riva-flood-kaçtı; proxy-eşiği-gevşetilmeli + park/yerleşim-ayrımı.
- 🟡 **NAS ön-koşulu:** ulusal-genişleme (4-il-ötesi) için; ttmap_ham-18GB-yerel-sınırda.
- 🟡 **İSKİ-havza-sınırı** yer-tutucu (TTA99/S86-bekliyor) — hukuki-kısıt-katmanı eksik.
- 🟢 **Yıllık-kadans-cron** onay-bekliyor (anayasa-fazı).

**3 gelecek-yetenek önerim:**
1. **Sentinel-1-koherans (gerçek-InSAR):** ASF/SLC ile layover-düzeltilmiş çok-tarih-koherans → dik-Beykoz'da güvenilir-inşaat-tespiti (ACD'nin standalone-zaafını çözer).
2. **OPERA-DIST-canlı-motor:** server-düzelince ~2-4-günlük-bozulma-akışı → Signals'ın gerçek-zamanlı-uydu-tetikçisi (inşaat-başladığı-gün-alarm).
3. **Ulusal-ölçek (81-il):** NAS-gelince mahalle_evren-32.290'ın tamamı → Tradia'nın her-mahallesi-için-fiziksel-zemin (4-il→ulusal).

---

**HARİÇ (yazılmadı):** Patron-ayrı-konuları · ortaklık-teklifleri · şahsi-işler · Tradia-dışı-projeler — TT-MAP-işi tümü teknik-coğrafi, bu kategorilerde içeriğim yok.

*CC-TT-MAP kuruluş-beyanı · $0 · betik-önce (envanter-taraması betikle) · KVKK #31 · SİLME-YOK · gönderim-yok (push-Vezir'in). Kanonik-snapshot: `~/tradia_ttmap/MAP_STATE.md` + `02_NOKTA/FINAL_cc_ttmap_beykoz.md`.*
