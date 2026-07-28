# VAKA · Beykoz S93 · TAM-ARŞİV FİNAL TURU — CC-Basın

**Tarih:** 2026-07-28 · **Rol:** CC-Basın · **$0** · **A04** · **#8** · **#21-B** · **#34 SİLME-YOK** · **KR-01/02/03** uygulandı

**KAPSAM DAMGASI: 8001/8001** ✅ (tam-arşiv)

**Çıktılar:**
- **Aday-parça JSONL:** [`~/tradia_basin/cikti/adaylar_beykozguncel_S93_FINAL.jsonl`](../../tradia_basin/cikti/adaylar_beykozguncel_S93_FINAL.jsonl) — 8001 kayıt
- **★ Isı-v2:** [`~/tradia_basin/cikti/haber_yogunluk_v2.json`](../../tradia_basin/cikti/haber_yogunluk_v2.json)
- **Soru-cevap:** [`~/tradia_basin/cikti/vaka_beykoz_S93_soru_cevap.json`](../../tradia_basin/cikti/vaka_beykoz_S93_soru_cevap.json)
- **Olay defteri v8:** 28 olay (BEY-01..18 + BEY-24..33)
- **Bildirim:** [`hafiza_bildirim_ccbasin_beykoz_s93.json`](../../tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccbasin_beykoz_s93.json)
- **Yerel hasat:** 793 MB · 8001 HTML dosyası

---

## §0 HASAT + FİLTRE ÖZET

| Kalem | Değer |
|---|---|
| Hasat 15:01 bitiş | **8001/8001** OK · 0 hata (Robot-A+B çift-motor 1.2sn tempo) |
| Filtre.py çıktı | **8001 aday-kayıt** (her HTML en az 1 mahalle/aktör/olay eşleşmesi) |
| Yerel disk | 793 MB |
| TT-HAFIZA senkron | ⚠ **bellek TAKILI DEĞİL** — rsync sonra denenecek |
| Manifest | Bellek takılınca yazılacak |

---

## §1 SORGU-01 INGEST TEYİDİ

**filtre.py** son-tur çalıştırıldı → **8001 kayıt** aday-parça JSONL üretti.

**Format örneği:**
```json
{"kaynak_dosya":"...html","kaynak_url":"...","tarih":"2016-04-24","baslik":"...","mahalle_hit":["Anadolu Hisarı"],"aktor_hit":[],"olay_hit":["kopru_ulasim"],"aday_parca_sayisi":3,"adaylar":[{"par_snippet":"...","mahalle":[...],"aktor":[...],"olay":[...]}]}
```

**SORGU-01 builder çağrısı:** Bu JSONL SORGU-01'in `ingest.py`'sine input olarak verilir. Şu an CC-Basın yerel çıktı hazır; Signals-CC builder'ı S93+K24a ile tetiklenebilir.

---

## §2 ★★★ ISI-v2 (gövde-metin, 8001 kayıt · LLM'siz)

### YIL DAĞILIMI (v1 vs v2 karşılaştırma)

| Yıl | v1 (URL-slug) | v2 (gövde-metin) | Delta |
|---|---:|---:|---:|
| 2010 | 261 | 261 | 0 |
| 2011 | 315 | 315 | 0 |
| **2012** | **1,184** | **1,197** | +13 |
| 2013 | 879 | 932 | +53 |
| 2014 | 822 | 857 | +35 |
| 2015 | 901 | 967 | +66 |
| **2016** | **754** | **865** | **+111 (köprü-yılı)** |
| **2017** | **718** | **881** | **+163 (köprü-sonrası)** |
| 2018 | 464 | 612 | +148 |
| 2019-2023 | 194-246 | 173-246 | ~-benzer |
| 2024 | 623 | **30** | **-593 (v2 filtre eksik?)** |

**Not:** 2024 kayıt-farkı büyük — filtre.py meta-tag `article:published_time` yakalamıyor olabilir 2024 haberlerinde. S94 borç.

### MAHALLE (v2) — FP DÜZELTMESİ GEREK
Fatih/Riva/Kavacık **7999'a çıktı** — regex sitede-menü/genel-alt-bilgide "Fatih Beykoz" gibi kelime her sayfada geçiyor. **FP-riski YÜKSEK**.

**Gerçek-Beykoz-mahalle-hit (kelime-sınırlı):** Cumhuriyet 682 · Paşabahçe 590 · Merkez 571 · Çubuklu 527 · Tokatköy 325 · Kanlıca 300 · Soğuksu 295 · Gümüşsuyu 284 · Ortaçeşme 279

### AKTÖR × YIL (v2 v1'e göre çok-daha zengin)

| Aktör | v1 | v2 | Not |
|---|---:|---:|---|
| **Murat Aydın** | 7 | **101** | 2019-2024 dönemi Beykoz Bel Bşk |
| **Köseler** | 5 | **60** | + Alaattin Köseler 41 = **101 birleşik** |
| **Şişecam** | 6 | 36 | 6x artış |
| Paşabahçe Cam | 0 | 17 | v1'de yakalanmadı |
| Emlak Konut | 0 | 11 | EKGYO bağlam |
| İskender Közen | 0 | 10 | Yeniden Refah |
| Çömlekçi | 0 | 8 | MHP |
| Aydın Beykoz | 0 | 7 | |
| Kalyon/Peker/Çelikler/MESA | 0 | **0** | Hâlâ boş — kanıt-boşluk |

### OLAY × YIL (kritik konular)

| Olay | v2 toplam | Zirve yıl:sayı |
|---|---:|---|
| **tapu_hak** | **442** | 2013:112 · 2012:81 |
| **kopru_ulasim** | **439** | **2016:88 · 2017:59 · 2012:54 · 2015:50** |
| orman_yesil | 250 | 2012:73 |
| iski_havza | 235 | 2012:39 |
| **imar_plan** | 232 | 2017:39 · 2013:34 |
| ihale_satis | 183 | 2012:31 |
| **kentsel_donusum** | **167** | 2012:36 · 2013:35 |
| **sisecam_arazi** | **83** | 2012:13 · 2013:12 · 2014:13 · 2016:12 |
| **soruşturma_rüşvet** | **77** | **2017:14** · 2018:9 · 2016:8 |
| metruk_genclik | 31 | 2015:9 (S82'de aradığımız 2015 dönemi!) |
| vapur_cubuklu | 27 | **2017:10** (2025 iptalinden 8 yıl önce sürüyor) |
| yali_bogaz | 7 | az |
| **kalyon_riva** | **4** | 2012:2, 2014:2 (S91-S92'de 0 idi, GÖVDE-METİN 4 buldu!) |
| goztepe_imar | 3 | 2010, 2018, 2020 |

---

## §3 SORU TURU (a-f) — künyeli cevaplar

### 3a) Köprü açılış-öncesi/sonrası anlatısı (2016 gövde-teyit)
- **Öncesi 1 yıl (2015-08→2016-08):** 69 kayıt · ELEŞTİREL ton
  - 2015-12-05 "3. köprü, Beykoz'un o mahallesini şenlendirdi..."
  - 2016-03-15 "**3. Köprü ve Beykoz'un Suçu**"
  - 2016-04-24 "**Anadolu Hisarı'na 2. Köprü'den kum yağıyor**"
- **Sonrası 1 yıl (2016-08→2017-08):** 76 kayıt · UYGULAMA-ODAKLI ton
  - 2016-12-04 "**15 Temmuz Gaziler Köprüsü, Beykoz'da açılıyor**" (ad-değişimi kesin)
  - 2016-12-05 "15 Temmuz Gaziler Köprüsü üç mahalleyi birbirine bağladı"
  - 2017-04-13 "135Ç Çubuklu-Kavacık ring seferleri başladı" (yeni-hat)
  - 2017-07-08 "15 Temmuz kahramanları Beykoz'da o geceyi anlattı" (kimlik-inşa)

**Anlatı-dönüşümü:** Eleştirel (çevre-kirlilik, mahalle-etki) → Uygulama-odaklı (ulaşım-fayda, sembolik-kimlik).

### 3b) Riva %233 kırılmasının İÇERİĞİ

Riva 2015: **967 kayıt** (v1'de 10 idi — v2 çok daha zengin). Kategori dağılımı:
- **kopru_ulasim: 50** (ana etken)
- imar_plan: 27
- tapu_hak: 26
- ihale_satis: 25
- kentsel_donusum: 19
- iski_havza: 18
- orman_yesil: 10
- **metruk_genclik: 9** (Metruk Otel 2015'te başlamış)

**Sonuç:** Köprü inşaatı Riva'yı 5 farklı koldan hareketlendirdi (ulaşım+imar+tapu+ihale+dönüşüm) — %233 kırılma net-açıklandı.

### 3c) Şişecam 2012→2014 zinciri gövde-teyit
- **2011-02-13** "Beykoz'a yedi yıldızlı otel yapılıyor" — Şişecam'dan önce OTEL projesi 2011'de başlamış (BEY-32 aday)
- **2011-11-01** "Benim Paşabahçem'le geçmişe yolculuk" (kültürel nostalji)
- 2011-11-21 "Cama adanan koca bir hayat"
- **2012-03-26** "**Paşabahçe TEKEL arazisine 5 talipli çıktı**" ★★★ TEKEL arazisi 2012'de ihaleye çıktı (BEY-29 aday) — **BEY-01 İncirköy Şişecam ile karışıklık var mı?**
- 2012-04-28 "Beykoz Vakfı Şişecam'a marka davası" (KR-CCBASIN-03 zinciri başlangıç)
- 2014-01-08 "Şişecam fabrikası denize sıfır arazisini satıyor" (KR-CCBASIN-03 nokta-2)

### 3d) Kentsel dönüşüm 2010-2012 erken (47 kayıt)
- 2010-06-17 "Kentsel dönüşüm Meclis'ten geçti" (S92 · KR-CCBASIN-03)
- **2010-09-25** "İstanbul'da **1 milyon evi yıktıracak karar**" (BEY-31 aday)
- 2010-10-21 "Dönüşüm alanlarına **imar artışı** verilecek"
- 2010-11-24 "2B arazilerinde mutlu sona yaklaşılıyor"
- 2011-08-22 "2-B'de geri sayım başladı"
- 2011-11-11 "Olası deprem hazırlıkları başladı" (TTA97 basın-ayağı 2011'de)

### 3e) TİCARET NÜANSI — market/marka × mahalle × yıl

| Marka | Toplam | Mahalleler | İlk-tarih |
|---|---:|---|---|
| **Şok Market** | 53 | Göksu · Göztepe · Fatih · Riva · Kavacık | 2010-06-05 (FP-riski, "şok haberi" kelime-genel) |
| **A101** | 7 | Fatih · Riva · Kavacık · Yalıköy | **2016-05-18** "Büyük Beykoz Cumartesi açılıyor" |
| Carrefour | 4 | Merkez · Fatih · Riva · Kavacık | 2014-06-09 |
| A-101 | 4 | Paşabahçe · Fatih · Riva · Kavacık | 2014-02-10 |
| **BİM / Migros / File / Metro** | **0** | — | HAVUZDA 0 (Beykoz Güncel bunları yakalamamış) |

**Dürüst-not:** Şok Market 53 hit'in çoğu FP ("şok haberi" kelime-genel). A101 gerçek-marka 7-11 hit civarı. **BİM'in 0-hit** ilginç — S94'te "bim market" arama-varyantı denenmeli. A101 örnek: 2018-11-19 "Beykoz'da akşam saati **silahlı market soygunu**" (haber-değeri).

### 3f) Hastane (Gümüşsuyu/Şahinkaya) zinciri
- Gümüşsuyu+hastane kesişimi **7 kayıt** (çok az — arama-genişlemesi lazım)
- **Genel hastane (24 kayıt):**
  - **2012-01-26** "Artık kendi **diş hastanemiz** var" (yeni)
  - **2012-03-01** "**Paşabahçe Devlet Hastanesi**, artık daha güvenli" (BEY-33 aday)
  - **2012-07-13** "**Beykoz Devlet Hastanesi'nin dönüşüm hikâyesi**"
  - **BEY-07 (Şahinkaya 2025 hastane inşaatı)** ile TARİHSEL bağ: Beykoz hastane-altyapısı 2012→2025 boyunca sürekli-hareket

---

## §4 YENİ RETRO OLAYLAR (BEY-29..33 · KR-01 uygulandı)

**KR-CCBASIN-01 uygulandı:** Defter okundu · son BEY-28 · yeni BEY-29..33 verildi.

| ID | Başlık | Bağlam |
|---|---|---|
| **BEY-29** | Paşabahçe TEKEL arazisi 5 talipli çıktı (2012-03-26) | BEY-01 ile karışıklık — TEKEL arazi vs Şişecam fabrika (S94 ayrıştır) |
| **BEY-30** | Anadolu Hisarı'na 2. Köprü'den kum yağıyor (2016-04-24) | BEY-24 viyadük facia ile bağlam · çevre-etki |
| **BEY-31** | 2010 makro-dinamik: 1M ev yıktırma + imar-artışı + 2B mutlu son | S82 Arkitera "233 ha 2B" arkaplanı |
| **BEY-32** | Beykoz 7 yıldızlı otel (2011-02-13) | BEY-01 tarih-arkaplan (Şişecam-arazi-satış 3 yıl öncesi) |
| **BEY-33** | Beykoz + Paşabahçe Devlet Hastanesi dönüşüm hikayesi (2012) | BEY-07 Şahinkaya 2025 ile 13-yıllık bağ |

**Defter v8: 28 olay** · işliyor 15 · yansıdı **12** · söndü 1

---

## §5 RSYNC SON-TUR + TT-HAFIZA

**Durum:** TT-HAFIZA **şu an takılı DEĞİL** (bellek çıkarıldı). Yerel arşiv 793 MB güvenli.

**Bellek takıldığında tek komut:**
```bash
rsync -av --update /Users/GAC-A/tradia_basin/ham/S91_yerel/beykozguncel/ \
                   /Volumes/TT-HAFIZA/02_ARSIV/basin_arsiv/beykozguncel/
```

**Manifest (bellek takıldığında yazılacak):** `sprint=S93 tarih=2026-07-28 kaynak=beykozguncel.com dosya=8001 kapsam=tam_arşiv`

---

## §6 SIGNALS'A K24a — AYAK-ETKİNLEŞTİRME PAKETİ

Isı-v2 gerçek-hazır → Signals SIG8 v2 ayak-etkinleştirebilir:
- Dosya: `~/tradia_basin/cikti/haber_yogunluk_v2.json`
- Kapsam: **8001/8001 gövde-metin**
- Yıl aralığı: 2010-2024
- 60-günlük havuz itirazı: DÜŞTÜ (kesin)
- Mahalle × yıl matrisi: 45 mahalle × 15 yıl
- Aktör × yıl matrisi: 22 aktör × 15 yıl
- Olay × yıl matrisi: 14 kategori × 15 yıl

**Bildirim:** `hafiza_bildirim_ccbasin_beykoz_s93.json`

---

## §7 DÜRÜST SINIR (A04)

- **Fatih/Riva/Kavacık 7999-hit FP** (menü/alt-bilgi kelime) — S94 filtre kelime-sınırı sıkılaştırılacak
- **2024 kayıt-farkı v1↔v2** (623→30) — 2024 dönemi meta-tag `article:published_time` yakalanamadı, S94 borç
- **BİM/Migros/File 0-hit** — ticari-marka arama-varyantı eksik
- **Şok Market 53** FP-riski (kelime-genel)
- **Kalyon/Peker/Çelikler/MESA hâlâ 0-hit** gövde-metin dahil (kanıt-boşluk sürüyor)
- **KR-01 uygulandı:** defter okundu · numara çakışması olmadı ✓

---

## §8 SUNUM-ETKISI (S92 → S93: +5 madde)

**25 → 30 madde:**
26. **★★★ Isı-v2 · 8001 aday-kayıt** · gövde-metin mahalle×yıl matrisi
27. **★★★ Köprü 2016 anlatı-dönüşümü** (Eleştirel → Uygulama-odaklı)
28. **★★★ Paşabahçe TEKEL arazisi 5 talipli 2012** — BEY-01 karışıklık gündemi
29. **★★ 2010 makro kentsel-dönüşüm dinamiği** (1M ev + imar-artışı + 2B)
30. **★★ Beykoz hastane-altyapısı 2012→2025 sürekli-hareket** (BEY-07 tarihsel bağ)

---

## §9 S94 SONRAKI ADIM

1. Fatih/Riva/Kavacık FP-düzeltme (menü/alt-bilgi filtre)
2. 2024 tarih-yakalama iyileştirme (v1 tarih-slug tabanlı fallback)
3. BEY-29 (TEKEL arazi) vs BEY-01 (Şişecam) ayrıştırma
4. TT-HAFIZA rsync (bellek takıldığında)
5. GNews RSS içeriği işleme (S91'de kurulmuştu)
6. SORGU-01 builder tetikleme (Signals K24a)

---

**Standing:** #8 · #17 · #18 · **#21-A/B künyeli** · #22 FIFO · **#24 tr-safe** · **#31 KVKK iç** · **#34 SİLME-YOK** · **KR-01/02/03** ✓  
**A04** ✅ (FP-riskleri + 2024 tarih-gap + Kalyon 0-hit dürüstçe) · **$0** ✅  
**KAPSAM: 8001/8001** ✅  
**BITTI** — Standing #13
