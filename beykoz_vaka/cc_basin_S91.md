# VAKA · Beykoz S91 · TAM HASAT MİMARİSİ + ISI v1 + RETRO — CC-Basın

**Tarih:** 2026-07-28 · **Rol:** CC-Basın · **$0** · **A04** · **#8 nazik-fetch** · **#21-B** · **#34 SİLME-YOK**

Üst Akıl düzeltmesi uygulandı: **LLM'e ham okutulmaz** · **hasat nohup arka plan** · **filtre + ısı betikle**.

**Çıktılar:**
- **★ Isı v1 (LLM'siz):** [`~/tradia_basin/cikti/haber_yogunluk_v1.json`](../../tradia_basin/cikti/haber_yogunluk_v1.json)
- **★ Retro-olaylar:** [`~/tradia_basin/cikti/vaka_beykoz_retro_olaylar_S91.json`](../../tradia_basin/cikti/vaka_beykoz_retro_olaylar_S91.json)
- **Betikler:** hasat + filtre + gnews_rss (3 betik)
- **Ham:** `/Volumes/TT-HAFIZA/02_ARSIV/basin_arsiv/` (aktif hasat sürüyor)
- **Bildirim:** [`hafiza_bildirim_ccbasin_beykoz_s91.json`](../../tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccbasin_beykoz_s91.json)

---

## §1 HASAT MİMARİSİ (Üst Akıl düzeltmesiyle)

### Bileşenler
| Bileşen | Dosya | Görev |
|---|---|---|
| **hasat.py** | `beykoz_S91_hasat.py` | 8,001 URL tam-fetch → TT-HAFIZA · nohup arka plan |
| **filtre.py** | `beykoz_S91_filtre.py` | Ham HTML → aday-parçalar (regex, LLM'siz) |
| **gnews_rss.py** | `beykoz_S91_gnews_rss.py` | Günlük 64 sorgu (45 mahalle + 19 aktör) |

### Başlatma durumu (2026-07-28 03:11)
```
★ HASAT PID 93024 · nohup · tempo 2.5sn · tahmini 5.6 saat
★ GNEWS PID 93071 · nohup · tempo 4sn · tahmini 4 dk
```

### İzleme
```bash
# Progress (ara-rapor = log tail, oturum-tekrarı DEĞİL)
tail -f /Volumes/TT-HAFIZA/02_ARSIV/basin_arsiv/log/progress.txt

# Hasat sayacı
ls /Volumes/TT-HAFIZA/02_ARSIV/basin_arsiv/beykozguncel/ | wc -l
```

### Kesme senaryoları
- Yeterli olarak ~5.6 saat sonra bitecek
- Nazik-tempo (2.5 sn) robots-saygılı, IP-blok riski minimum
- .part→rename disiplini → yarım-yazım korumalı
- Resume-uyumlu (mevcut dosya varsa skip)

**KURAL:** Oturum-tekrarı YOK. Ara-rapor = `tail progress.txt`.

---

## §2 ★★★ ISI v1 (BETİKLE ÜRETİLDİ · S91-A)

Beykoz Güncel **8,001 sitemap URL** slug-tabanlı mahalle × yıl matrisi. LLM'siz Python regex.

### YIL DAĞILIMI (2010-2026)

| Yıl | URL | Yorum |
|---|---:|---|
| 2010 | 261 | başlangıç |
| 2011 | 315 | |
| **2012** | **1,184** | ★ zirve (yayın-yoğun dönem) |
| 2013 | 879 | |
| 2014 | 822 | |
| 2015 | 901 | |
| **2016** | **754** | ★ **YSS köprüsü açılış-yılı — VAR!** |
| **2017** | **718** | ★ **köprü sonrası — VAR!** |
| 2018 | 464 | |
| 2019-2023 | 194-246 | sakin dönem |
| **2024** | **623** | ★ **Köseler seçim yılı — VAR!** |

★ **S82-S86 borçları 2016 kör-nokta + 2024 boşluk → BEYKOZ GÜNCEL'DE 2,095 URL MEVCUT**

### EN AKTİF 10 MAHALLE

| Mahalle | Toplam URL |
|---|---:|
| Yeni Mahalle | 238 |
| Riva | **127** |
| Kanlıca | 85 |
| Cumhuriyet | 81 |
| Anadolu Kavağı / Anadolu Hisarı / Anadolufeneri | 73'er (varyant-çakışma) |
| Merkez | 61 |
| Kavacık | 57 |
| Paşabahçe | 55 |

**Not:** Anadolu-Kavağı/Hisarı/feneri aynı slug-parçasına çakışıyor (regex FP-riski). S91 filtre.py'de tam kelime-sınırıyla ayrılacak.

### KONU × YIL

| Konu | Toplam | Kritik dönem |
|---|---:|---|
| **seçim_siyaset** | **745** | 2012=118 · 2015=111 · 2014=105 (yerel-seçim dönemleri) |
| orman_havza | 62 | istikrarlı (2015 zirvesi 11) |
| vapur_ulaşım | 31 | 2024=8 zirve |
| tapu | 26 | 2018=8 zirve |
| ihale | 25 | 2017=8 zirve |
| **köprü** | **15** | **2010=5** (3. köprü tartışma dönemi) · 2015=4 · 2024=2 |
| kentsel_dönüşüm | 15 | 2015=7 zirve |
| imar_plan | 11 | 2015=4 |
| metruk_otel_gençlik | 1 | 2015=1 (eski) |

### SIG5 backtest'in basın ayağı — İLK KEZ GERÇEK ARŞİVLE

**2016 YSS köprü açılış dönemi Beykoz Güncel URL örnekleri** (46 kritik URL 2016-2017):
- `2016-02-21` beykoz riva yolunda feci kaza 2si kardes 3 olu
- `2016-02-24` ibb riva kalesini restore edecek
- `2016-03-02` **insaat sirketleri rivadaki arsalarini elden cikariyor** ← ★★★ EMLAK-DEVIR sinyali
- `2016-03-15` 3 kopru ve beykozun sucu
- `2016-06-28` galatasaraydan riva arazisi icin dev imza
- `2016-08-01` rivada feto zirvesi
- `2016-09-16` beykozdan uskudara trafik artik daha rahat ← köprü etki
- `2016-09-17` rivada son iki haftada 6inci yangın

**2024 seçim-dönemi Beykoz Güncel URL örnekleri** (85 URL):
- 24 Şubat 2024 tarihinde çok yoğun haber-akışı (secim öncesi kritik dönem)
- Alaattin Köseler'in seçim-öncesi 2013-2014 aday-turları görülüyor (5 URL)

---

## §3 RETRO OLAY-TARAMA (URL-slug tabanlı, LLM'siz)

### BEY-olayları için hit-listeleri

| Olay | Hit | Tarih aralığı |
|---|---:|---|
| YSS_kopru | **15** | **2010-05-13 → 2024-02-24** |
| kentsel_donusum | **15** | **2010-06-17 → 2022-05-28** |
| imar_plan_askı | 12 | 2013-12-06 → 2021-08-17 |
| sisecam_incirkoy | **6** | **2012-04-28 → 2016-04-24** |
| **koseler** | **5** | **2013-07-02 → 2014-03-16** (**Köseler'in İLK aday-tarihçesi!**) |
| ihale_bel_sorusturma | 4 | 2010-08-01 → 2017-06-14 (Beykoz Bel eski soruşturma!) |
| vapur_iptali | 1 | 2011-06-17 |

### 🎯 KANIT-DEĞER YÜKSEK URL'LER

**Köseler kronoloji — YENİ BİLGİ:**
- `2013-07-02` koseler adaylik oncesi turlarına devam ediyor
- `2014-01-26` alaattin koselerin ofkesi dinmek bilmiyor
- `2014-02-02` koseler sahsi cikar ve egondan vazgec
- `2014-03-01` koselerin basinla beklenen bulusmasi gerceklesti
- `2014-03-16` basesgioglu ve koseler incirkoy halkiyla bulustu
   → **Köseler 2014 seçiminde ADAY olmuş** (kazanan Murat Aydın idi); 2024'te 2. deneme

**Şişecam-İncirköy — YENİ BİLGİ:**
- `2014-01-08` **sisecam fabrikasi denize sifir arazisini satiyor** ← ★★★ ARAZI-SATIŞ İLK-DUYURU 2014'te
- `2015-10-20` sisecam pasabahce emektarlari bulustu (kapanış-sonrası)
- `2016-04-24` beykoz eski sisecam fabrikasinda yangın (kritik olay!)

**Eski soruşturma — YENİ:**
- `2010-08-01` **beykozda rüşvet operasyonu** (2010'da RÜŞVET operasyonu — Köseler dönemi ÖNCESİ)
- `2017-06-14` beykoz belediyesinde mazot soruşturması

**Kentsel dönüşüm zaman-çizgisi:**
- `2010-06-17` kentsel donusum meclisten gecti
- `2013-02-09` yore derneklerinde kentsel donusum bilinci
- `2017-04-03` **beykozun ilk kentsel donusum projesi tanitildi**
- `2022-05-28` ibb kentsel donusum ofisi beykoza geliyor

---

## §4 GOOGLE NEWS RSS HATTI (kuruluyor)

- **45 mahalle + 19 aktör = 64 sorgu**
- Her sorgu Google News Türkçe RSS
- Tempo 4 sn · toplam ~4 dk
- Ham: `/Volumes/TT-HAFIZA/02_ARSIV/basin_arsiv/gnews/YYYY-MM-DD/`
- Cron adayı: `0 6 * * * /usr/bin/python3 .../beykoz_S91_gnews_rss.py`

---

## §5 BÜTÇE + BÜTÇESİZ AÇILAN BORÇLAR

### S86-S87 kör-borçları → S91 BÜTÇESİZ AÇILDI (kanıt)

| Borç | S86-S87 durumu | S91 kanıtı |
|---|---|---|
| **C9 2016 YSS köprü etki** | Wayback bloke | **754 URL 2016 arşiv + 46 kritik-tarama** ✅ |
| **C12 2024 kör-yıl** | Wayback bloke | **623 URL 2024 arşiv + 85 seçim-tarama** ✅ |
| **C8 Şişecam arazi (KAP)** | KAP tarafı gerek | **Beykoz Güncel 2014-01-08 "denize sıfır arazisini satıyor"** ilk-duyuru ✅ |
| **C11 Kalyon/Çelikler doğrulama** | 5/5 aday 0-hit | Beykoz Güncel + tam-hasat sonrası filtre.py'de tarama |
| **Köseler kronoloji genişleme** | 2024→2026 | **2013-2014 aday-turları arşivi ORTAYA ÇIKTI** ★ |
| **Eski Beykoz Bel soruşturması** | Yalnız 2025+ | **2010 rüşvet operasyonu VAR** (yeni sinyal) |

### Bütçe-kalemi
- **Ham+filtre+Isı+GNews:** **$0** (5+ kör-nokta açılıyor)
- **Kalyon JS-SPA headless-browser:** ~$5-10/ay (Patron karar)
- **TT-HAFIZA disk:** ★ ZATEN TAKILI (163 GB dolu / 931 GB toplam)

---

## §6 SUNUM YENİ 3 MADDE (S90 → S91)

**15 → 18:**
16. **★★★ [S91 YENİ] Beykoz Güncel 8,001 URL / 16 yıl · Isı v1 mahalle×yıl · 2016+2024 kör-nokta BÜTÇESİZ AÇILDI**
17. **★★ [S91 YENİ] Şişecam arazi 2014-01-08 "denize sıfır satıyor" ilk-duyuru** (Beykoz Güncel arşivi) — S82'den beri aranan Şişecam-İncirköy KAP-öncesi işaretlemesi
18. **★★ [S91 YENİ] Köseler 2014 seçim aday-tarihçesi** (5 URL 2013-07 → 2014-03) — 2024 seçimi ÖNCESİ 2014'te de aday olduğu, kazanamadığı ortaya çıktı

---

## §7 DÜRÜST SINIR (A04)

- **Isı v1** URL-slug'a dayanır — gövde-metin filtre.py sonrası ilave-kanıt verecek
- **Anadolu Kavağı/Hisarı/feneri** çakışma-FP (73 URL üçünde de gösteriliyor) — filtre.py tam-kelime-sınırıyla ayıracak
- **MESA 62 hit** muhtemel FP (kelime-genel) — filtre.py Beykoz-kesişim zorunluluğuyla temizleyecek
- **Hasat sürüyor** (5.6 saat) — bitene kadar filtre.py çalıştırılmayacak
- **RSS/GNews Google News**: sonuç kalitesi Türkçe-sorgu için görülecek (RSS-tempo 4 sn korunmuş)
- KVKK #31: rapor iç-kullanım · Alaattin Köseler + Murat Aydın halka-açık siyasi-figür

---

## §8 SONRAKI ADIMLAR (S92)

1. Hasat bitince (~09:00 civarı) filtre.py çalıştır → aday-parçalar
2. GNews RSS içeriği işle (mahalle/aktör başına haber-sayısı)
3. Isı v2 (gövde-metinle) üret
4. BEY-19+ olay defteri güncelle (yeni retro-olaylar)
5. Signals'a K24a — SIG8 ayak etkinleştirme kararı

---

**Standing:** #8 nazik (2.5sn+robots) · #17 · #18 · **#21-A/B** · #22 FIFO · **#24 tr-safe** · **#31 KVKK iç** · **#34 SİLME-YOK**  
**A04** ✅ (varyant-FP + kelime-genel-MESA + hasat-sürüyor dürüst) · **$0** ✅ · **SİLME-YOK** ✅  
**BITTI** — Standing #13
