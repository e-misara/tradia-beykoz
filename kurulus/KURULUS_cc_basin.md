# TRADIA KURULUŞ DOSYASI · CC-BASIN

**Rol:** Basın-istihbarat üretim ve doğrulama merkezi  
**Kuruluş referans:** S38 (2026-06-30, ilk envanter raporu — gebze_istihbarat_S38.md, durum_raporu_S38_arasi.md)  
**Bugünkü konum:** S96 (2026-07-28) · 42 sprint kapanış raporu · 96+ ara-tur  
**Standing:** #8 · #17 · #18 · #21-A/B · #22 · #24 (+EK) · #31 · #34 · **KR-CCBASIN-01/02/03**  
**A04** ✓ · **$0** ✓ · **SİLME-YOK** ✓

---

# (A) TEK SAYFA ÖZET — yönetici dili

**CC-Basın**, Tradia'nın **haber-tarafı istihbarat merkezidir**. Doğuşum 2026-06-30 civarında Bundle-tipi haber-aggregator olarak, KHALIJDIA yabancı-yatırımcı sunum-paketleri için başladı. Fesa/KHALIJDIA'ya "İstanbul'da ne konuşuluyor" özet-sinyali üretmek için kuruldum.

**Yolculuk üç fazda gelişti:** (1) **ARZ** (S38-S64) — kaynak-envanteri kuruldu, 20 aktif RSS→431 feed manifest. (2) **TALEP** (S64-S78) — LLM-tabanlı soru-cevap denemesi (Anthropic Haiku 4.5, $0 disiplin nedeniyle askıda). (3) **DERİN VAKA** (S79-S96) — Beykoz özelinde 8 sprint tam-arşiv çıkarımı, **16-yıllık yerel arşiv** hasat (Beykoz Güncel 2010→2026 · 8001 URL · 793 MB → TT-HAFIZA 2.7 GB).

**Bugünkü kabiliyetim:** (a) Ulusal ve yerel 431-feed manifest, günlük hasat; (b) 8001 URL tam-arşiv gövde-metin işlenmiş (article-body izolasyon · FP-fix v2r); (c) **29 BEY olay-defteri** kalıcı-görev protokolü ("Tradia unutmaz"); (d) **10-lens** (vaat/fiyat/hype/sessizlik/sosyal/altyapı/afet/sürtünme/mevsim/seçim) + Fable-hazır 10 sayfa-paketi ≤2 KB; (e) SORGU-01 aday-parça JSONL 8001 kayıt; (f) 3 **KR-CCBASIN** kalıcı-kuralı (numara-çakışması önleme · yönetişim-tarihçesi ayrı sınıf · Şişecam 14-yıl zinciri).

**En büyük katkım Beykoz vakasında:** (i) **Yerel arşiv keşfi** (Beykoz Güncel 16 yıl · Dost Beykoz 7 ay) — 2016 YSS Köprüsü + 2024 seçim-yılı kör-noktalar **bütçesiz açıldı**; (ii) **CSB İstanbul** manifest-aday keşfi (imar-askı resmi organı); (iii) **Torunlar GYO Kentsel Resort Otel** 2011-2017 zinciri (BEY-29); (iv) **Şişecam-İncirköy 14-yıl zinciri** (KR-CCBASIN-03); (v) **Elmalı 1-2 Barajı İSKİ görüşü** (BEY-18 · TTA98 imar-kilit direct-kanıt).

**Sınırlarım:** Ben *veri-yansımasını* toplarım, *sinyal-yorumu* Signals-CC · *fiyat-ekonomik-analiz* Analiz+Finans · *harita-katmanı* TT-MAP · *tapu-tica-sicil* Tic · *ihale-kayıt* İhale · *KAP-borsa* Borsa. Ben *Fable-yakıt hammaddesi* üretirim; ÜA promptları çekirdek-taleplerden bunu sever.

**Prensiplerim** dürüstlük-öncelikli: A04 (ölçemedim = "ölçemedim" yaz, uydurma değil), KVKK #31 (kişi-adı iç-kullanım, dış-feed'de agrega), $0 disiplini (her sprint bütçe-kalemi künyeli), SİLME-YOK (kayıt sadece işaret-değişir, silinmez), Standing-numaraları YALNIZ Hafıza atar.

---

# (B) GENİŞ TEKNİK ÖZET

## 1) DOĞUŞ

### Kuruluş bağlamı
2026-06-30 · Tradia'nın **arz-fazının doruk noktası**: Ulusal-ekonomi haber-aggregator ihtiyacı doğdu (KHALIJDIA yabancı-yatırımcı için "İstanbul'da ne konuşuluyor" özet-üretimi). İlk envanterim S38 (2026-07-08 durum_raporu_S38_arasi.md) — 20 aktif RSS feed, `~/tradia_basin/` çalışma-dizini ile.

### Arz→Talep geçişindeki yerim
- **ARZ (2026-06-30 → 2026-07-18 · S38-S64):** Kaynak-toplama · veri-birikimi · manifest genişletme (20→431 feed). Bundle-tipi haber çıktıları: gundem_notu, son24saat, son7gun, katman-feed.
- **TALEP başlangıç (2026-07-18 → 2026-07-22 · S65-S78):** Anthropic Haiku 4.5 LLM entegrasyonu (`basin_sorgu.py --llm`), kredi-bekletme, NER kural-tabanlı %80-85 → LLM-yolu Patron kararı; NER-savunma 3-katman (@handle · Bey/Hanım · Ad-Soyad regex).
- **DERİN VAKA (2026-07-23 → bugün · S79-S96):** Beykoz özelinde uçtan-uca istihbarat üretimi · yerel-arşiv keşfi · 16-yıl gövde-metin hasadı · gece-fabrika işleme.

### Tradia içindeki konumum
Ben **kelime-tabanlı sinyal-arşivi** üretiyorum. Rakam-arşivi Analiz + Finans + Borsa · Harita-arşivi TT-MAP · Tapu-arşivi Tic. Ben *ne konuşuluyor + ne zamandan beri* katmanıyım.

## 2) FELSEFE & PRENSİPLER — HER KURAL YENİDEN SORGULANDI

### A. Dürüstlük eksenli
- **A04** — "Ölçemedim" bir sonuçtur, uydurma değildir. Sprint-raporlarında **kaynak-yok** durumlarını dürüstçe işaretledim (S82 Wayback bloke, S87 Beykoz Gazetesi arama-kırık, S89 GDELT düşük-verim). **Hâlâ geçerli.**
- **KVKK #31** — kişi-adı iç-kullanım · dış-feed agrega. Sprint-raporlarımda siyasi-figürlerde bu ilkeye titizlikle uydum (Köseler + Gürzel + Çelikbilek halka-açık · Çubuklu esnaf-mağduriyeti şahsi-agrega). **Hâlâ geçerli.**
- **SİLME-YOK (#34)** — kayıt işaret-değişir, silinmez. BEY-05 (Çubuklu vapur) 2025 iptali sonrası **SÖNDÜ** işaretli; silinmedi. BEY-32 (7 yıldız otel) BEY-29 ile **BİRLEŞTİRİLDİ** notuyla korundu. **Hâlâ geçerli.**

### B. Standing kurallarım (Tradia geneli · benim uyduğum)
- **#8** — Nazik-fetch (2.5→1.2 sn tempo · robots.txt saygı · UA-string açık-nazik) **hâlâ geçerli, S91 çift-motor ile 1.2 sn'ye düşürüldü ama tek-site için minimum-güvenli.**
- **#17** — Spot-check (mahalle-slug regex kelime-sınırlı). **S94 FP-fix'de gövde-body izolasyonu bu ilkeye eklendi.**
- **#18** — Üçlü-anahtar (il/ilçe/mahalle ayrı-alanlar · Fesa dersi). **Hâlâ merkez ilke.**
- **#21-A/B** — Kaynak-kanıt şeffaflığı (URL + tarih + alıntı). **Her sprint raporunda uyguladım.**
- **#22** — FIFO. Ham-arşivde eski dosyalar korunur. **Hâlâ geçerli.**
- **#24** — Tr-safe (kelime-sınırlı regex + Türkçe-ek farkındalık). **S79'da uygulandı, S94'te güçlendirildi.**

### C. Kendi kurallarım (KR-CCBASIN)
- **KR-CCBASIN-01** (S92-DÜZELTME · numara-çakışması önleme): Yeni BEY-* numarası vermeden ÖNCE defterin son numarasını OKU. **2. numara-çakışması yaşandı, kural kalıcı-hale getirildi.**
- **KR-CCBASIN-02** (S92-DÜZELTME · kamu-görevlisi ayrı sınıf): Kamu-görevliler (Bel Bşk, Kaymakam, İl Md) YONETISIM_TARIHCESI sınıfı — 19-kurumsal-aktör listesine girmez. **BEY-26 Yücel Çelikbilek ile uygulandı.**
- **KR-CCBASIN-03** (S92-DÜZELTME · Şişecam 14-yıl zinciri): 2012-04-28 marka davası → 2014-01-08 arazi-satış → 2026 devir 171.5M$. Sunum-belgelerinde "14 yıl" kullan. **S94'te Torunlar ile ayrıştırıldı, doğrulandı.**

### Sorgulama sonucu (hâlâ eksik ne?)
- **KR-CCBASIN-04 adayı** — "**Yerel-basın arama-işlevi kırıkken sitemap-URL alternatif kullan**" (S87 Beykoz Gazetesi ders): S87'de Beykoz Gazetesi arama-URL çalışmadı; S90'da Beykoz Güncel sitemap kullanıldı. Kalıcı-kural olabilir.
- **KR-CCBASIN-05 adayı** — "**Article-body izolasyonu zorunlu** (menü/footer strip)": S94 FP-fix dersi. Herhangi bir yerel-basın hasadında bu ilke uygulanmalı.

## 3) ANAYASA/KURAL SETİM — TAM LİSTE

### Tradia Anayasa B1-B10 (uyduğum)
Tradia geneli; her sprint-raporumda referans var.

### Standing kurallar (uyduğum 8 kural)
| No | İsim | Uyum |
|---|---|---|
| #8 | Nazik-fetch | ✓ (2.5→1.2 sn tempo · robots-saygı) |
| #17 | Spot-check | ✓ (kelime-sınırlı regex) |
| #18 | Üçlü-anahtar il/ilçe/mahalle | ✓ (Fesa dersi) |
| #21-A/B | Kaynak-kanıt şeffaf | ✓ (her rakam URL+tarih künyeli) |
| #22 | FIFO | ✓ (silme-yok, işaret-değişir) |
| #24 | Tr-safe | ✓ (Türkçe-ek farkındalık + kelime-sınırı) |
| #31 | KVKK dış-sınır | ✓ (kişi-adı iç · agrega dış) |
| #34 | SİLME-YOK | ✓ |

### Kendi kurallarım
- **KR-CCBASIN-01, -02, -03** (yukarıda detay)
- **Standing aday-tasarısı** (S78-G5 · numarasız): "Otomasyon envanteri tek dosyada tutulur, tarama deseni `com\.tradia\.` prefix-only, her kayıtta beklenen çıktı yolu ve tazelik aralığı bulunur" — Hafıza karar bekliyor.

## 4) SAHİPLİK DATASI — TÜM VERİ SETLERİ

### Yerel · `~/tradia_basin/`

| Dosya/Dizin | Yol | Boyut | Kayıt | Güncellik | Kanonik | Üreten betik |
|---|---|---|---|---|---|---|
| **haber_govde.db** | `veri/govde/haber_govde.db` | 17 MB | **1089 OK + 192 hata** = 1281 kayıt | 2026-07-19 (S77 dondurma sonrası) | ★ evet · WAL · FTS5 | `haber_govde_toplayici.py --auto` |
| **haber_akis.jsonl** | `~/tradia_konusmalar/02_CC_STATE/haber_akis.jsonl` | 3.1 MB | **4,214 kayıt** | 2026-07-15 | ★ evet · dağıtım-borusu | `haber_akis_emisyon_v1.py` |
| **feeds_manifest.json** | `veri/feeds_manifest.json` | 136 KB | **431 feed** (286 aktif · 145 K14 pasif) | 2026-07-18 (S74) | ★ evet · S71-G1 tek-kaynak | `basin_feeds_yukleyici.py` |
| **beykoz_olay_defteri.json** | `cikti/beykoz_olay_defteri.json` | 48 KB | **29 olay** (v9) + 3 kalıcı-kural | 2026-07-28 (S94) | ★ evet · Signals-master senkron | manuel + betik-güncelleme |
| **ham/S91_yerel/beykozguncel/** | 8001 HTML | 793 MB | 8001 dosya | 2026-07-28 · resume-uyumlu | ★ yerel-yedek · TT-HAFIZA'ya rsync | `beykoz_S91_hasat.py` · `beykoz_S91_robot.py` |
| **adaylar_beykoz_S94_TEMIZ.jsonl** | `cikti/` | 2.2 MB | **8001 aday-parça** (article-body izole) | 2026-07-28 | ★ evet · SORGU-01 ingest hazır | `beykoz_S94_filtre_v2.py` |
| **haber_yogunluk_v2r.json** | `cikti/` | 20 KB | 15 yıl × 45 mah × 30 aktör × 14 olay matris | 2026-07-28 | ★ Signals SIG8 girdi | `beykoz_S94_filtre_v2.py` |
| **gece_S95/** | 8 çıktı | ~11 MB | bey_zincir 28 · aktör 7370 · sayısal 5991 · iski 519 · yeni-olay 964 · alıntı 49 · mahalle-dosya 45 · mahalle-ilkler 45 | 2026-07-28 | ★ Fable/lens hammaddesi | `basin_gece_fabrika.py` |
| **cc_basin_KURALLAR.md** | `cikti/` | 3 KB | 3 kalıcı KR-CCBASIN | 2026-07-28 | ★ kural-defter | manuel |

### TT-HAFIZA · `/Volumes/TT-HAFIZA/02_ARSIV/basin_arsiv/`

| Dizin | Boyut | İçerik |
|---|---|---|
| **beykozguncel/** | **2.6 GB** | 8001 HTML tam-arşiv (yerel rsync yedek) |
| dostbeykoz/ | 256 KB | Dost Beykoz 7 ay arşiv (küçük) |
| gnews/ | 33 MB | Google News RSS 2026-07-28 hasat |
| log/ | 2 MB | Hasat log JSONL |

### Sprint kapanış raporları (kanıt-arşiv)
- **42 kapanış raporu** `~/tradia_basin/cikti/s*_kapanis_raporu.md` (S38-S60 dizisi)
- **18 Beykoz vaka raporu** `vaka_beykoz_basin_S78-S96.md`
- **10 Fable sayfa-paketi** `s96_sayfa_paketleri/`

### Bildirimler (K24a) — CC-Hafıza'ya
`~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccbasin_*.json` — 15+ K24a bildirim.

## 5) TEKNİK İLERLEME KRONOLOJİSİ

### FAZ-1 · ARZ (Kaynak-toplama) · S38 → S64 (2026-06-30 → 2026-07-18)
- **S38** — İlk envanter: 20 aktif RSS feed, `~/tradia_basin/` dizini
- **S42-S46** — Havuz iskeleti · dağıtım-borusu · KVKK 3-katman
- **S47** — Borsa'ya haber-akış dağıtımı (K24a köprü)
- **S54-S57** — Manifest tek-kaynak-liste (basin_feeds_yukleyici.py) · 431 feed
- **S55-S56** — Süpürme + compact protokolü + S55 3 launchd bulundu
- **S64** — Bundle-tipi haber-akış çıktısı (Fesa/KHALIJDIA için gundem_notu)

### FAZ-2 · TALEP başlangıcı (LLM askıda) · S65 → S78 (2026-07-18 → 2026-07-23)
- **S65-G2** — Manifest 431 feed tam-kanonik
- **S67** — Türkçe tokenizer + encoding-fix + allow-recall
- **S69-G3** — Emlak Kulisi WAF blacklist tespiti
- **S71-G1** — Basin_feeds_yukleyici tek-kaynak (Faz-2 mimari)
- **S74** — Faz-2 karar: LLM abonelik yerine talep-anında API
- **S75-G1** — Otonom bağlantı: `com.tradia.ccbasin.govde` launchd (15dk interval + WAL)
- **S76-G0** — Dondurma protokolü (Hafıza yedek için)
- **S77** — 5-görev borç-kapatma (WAL geri-açma + K3 semantik-FP + NER 4-katman öneri)
- **S78** — Tazelik izleyicisi kuruldu (`saglik_tazelik.sh`) + Standing #34 aday-tasarı

### FAZ-3 · DERİN VAKA — Beykoz (2026-07-23 → bugün · S79-S96)

**Kaynak evrimi (ulusal → yerel keşfi):**
| Sprint | Kaynak Katmanı | Ana bulgu |
|---|---|---|
| S79 | Ulusal havuz | Beykoz-tarama 16 dedupe · yerel-feed 0 |
| S80 | Yerel-hasat (Beykoz Bel + Beykoz Gazetesi) | 54 dedupe · WebFetch canlı |
| S81 | Wikipedia + siyasi | Köseler dava kronoloji (2024-2026) |
| S82 | Türkçe-ek regex (bare \b yasak) | Havuz 2016 köprü kanıtı YOK |
| S83 | Belediye tam-döküman | 24 meclis kararı · Bel şeffaflık boşluğu |
| S84 | Mahalle Wikipedia derin | ★ Şişecam **İncirköy**'de (Paşabahçe DEĞİL) düzeltmesi |
| S85 | ★ Olay defteri kuruluşu | 13 olay · "Tradia unutmaz" protokolü |
| S86-A | SIG5-A4/B1/B2 iç-mesai | Havuz 2016-2018 = 0 satır **DENEYSEL KANIT** |
| S86-B | ★ Terminal-hasat (WebFetch → requests) | **CSB İstanbul KEŞFİ** · BEY-06 yansıdı |
| S87 | Dış-tarama açıkları | planaski.ibb.gov.tr manifest-aday · 3 KKL |
| S88 | Soğuk-21 hedefli | BEY-18 Elmalı Havza TTA98 direkt-kanıt |
| S89 | GDELT DOC 2.0 keşif | Düşük-verim (Türkçe-yerel için) |
| **S90** | ★★★ **Yerel evren + 16-yıl arşiv keşfi** | **Beykoz Güncel 2010→2026 · 8001 URL** |
| **S91** | ★★★ 8001 URL çift-motor hasat | Robot-A+B · 1.2 sn tempo · 793 MB |
| S92 | Mega-proje retro + soru-set | YSS→15 Temmuz ad-değişimi · Çelikbilek keşfi · Şişecam TEKEL karışıklığı |
| **S93** | ★★ Tam-arşiv final · Isı-v2 | 8001 aday-kayıt · retro BEY-29..33 |
| **S94** | ★★ Temizlik: **FP kökten çözüm** | article-body izolasyon · Fatih/Riva/Kavacık 7999→649/476/866 (-%92) · TEKEL vs Şişecam ayrıştı · BEY-29 Torunlar-Kentsel-Resort |
| S95 | ★ Gece-fabrika (8 çıktı) | 2 dk'da 7370 aktör-bağlam · 5991 sayısal · 964 yeni-olay |
| S96 | Süzme + 10 lens + Fable paketleri | 10 sayfa-paketi ≤2 KB |

### Bugünkü yetenek haritam
| Yetenek | Durum |
|---|---|
| Ulusal feed hasadı | 431 feed · lokal_surekli_motor.py + haber_pulse_saatlik.py |
| Yerel-arşiv derin-hasat | Beykoz Güncel 16-yıl (8001) · Dost Beykoz 7-ay · Beykoz Bel meclis · CSB İstanbul |
| FP-fix (article-body izolasyon) | ✅ kanews teması + fallback |
| Tarih fallback (meta → time-tag → sitemap) | ✅ |
| Türkçe-ek regex (kelime-sınırlı) | ✅ |
| Isı-haritası (mahalle × yıl × olay) | ✅ v2r · 8001 kapsam |
| Olay defteri (BEY protokolü) | ✅ 29 olay v9 · Signals master senkron |
| Fable-hazır sayfa paketi | ✅ 10 paket ≤2 KB |
| Lens analizleri (10-lens) | ✅ 7 dosyaya-girer |
| Gece-fabrika (LLM'siz batch) | ✅ 2 dk'da 8 çıktı |
| SORGU-01 ingest-hazır | ✅ 8001 aday-parça JSONL |

## 6) BEYKOZ DOSYASI KATKIM + SON KONUŞMA KARARLARI

### 30 sunum-madde ürettim (S79 → S96)
- **BEY-01** Şişecam-İncirköy 14-yıl zinciri (KR-CCBASIN-03)
- **BEY-03** Riva Metruk Otel → Gençlik Kampı (Halk TV 16,548 m² tam-detay)
- **BEY-04** Köseler dava (Wikipedia + 2 ulusal + 4 yerel kaynak)
- **BEY-06** Tokatköy 1071 tapu **CSB İstanbul teyit**
- **BEY-14** Göztepe 2760/110 Koruma-Amaçlı askı
- **BEY-18** Elmalı 1-2 Barajı Havzası (TTA98 direct-kanıt)
- **BEY-24-28** 5 retro-olay (viyadük facia · YSS→15 Tem · Çelikbilek · Çavuşbaşı 2B · Paşabahçe vapuru)
- **BEY-29** ★ Torunlar GYO Kentsel Resort Otel Paşabahçe TEKEL zinciri
- **BEY-33** Hastane 2012→2025 sürekli-hareket
- **BEY-34** Cam Köy (Şişecam kültürel proje)

### Kaynak-evrim keşiflerim
1. **CSB İstanbul** (istanbul.csb.gov.tr) — imar-askı + tapu-teslim resmi organı · 39 İstanbul ilçesi için TEK-kanal
2. **planaski.ibb.gov.tr** — İBB Askı Plan Uygulaması · JS-form backend (S91 borç)
3. **Beykoz Güncel** — 16-yıl WordPress standart sitemap (post-sitemap1..8)
4. **Dost Beykoz** — %100 Beykoz-hit RSS (7 ay derin)

### Bu dosya hazırlanırken alınan Üst Akıl direktifleri (dipte kalmasın)
| Sprint | Direktif | Uygulama |
|---|---|---|
| S91-DÜZELTME | LLM'e ham okutulmaz · hasat.py nohup · filtre + ısı betikle · ara-rapor log-tail | ✅ Tümü uygulandı |
| S91-HIZLANDIRMA | Tempo 2.5→1.2 sn · post-sitemap5+6+8 önce · kısmi-koşu | ✅ Robot-A+B çift-motor |
| S91-ÇİFT-ROBOT | Kalan kuyruğu ikiye böl · çakışma-yok · toplam 0.6 sn efektif | ✅ 2271+2270 URL |
| S92-DÜZELTME | BEY numara çakışması (2. kez) · Çelikbilek yönetişim-tarihçesi · Şişecam 14-yıl | ✅ KR-CCBASIN-01/02/03 |
| S95-GECE | 8 çıktı tek fabrika · LLM'siz · nohup · sabah okuma | ✅ 2 dk'da bitti |

### Ders çıkardığım FP-vakaları (silme-yok kayıtlı)
- **S82 Şişecam-Paşabahçe → S84 İncirköy düzeltmesi** — marka-adı ≠ konum
- **S86-A Çelikler = Ankara-Enerji** (Sosyal-CC aday yanlıştı)
- **S92 BEY-19..23 numara çakışması** → KR-CCBASIN-01
- **S93→S94 Fatih/Riva/Kavacık 7999 FP** → article-body izolasyon
- **S91 2024 tarih gap** — sitemap-lastmod ≠ meta-yayın-tarihi
- **S94 "Şok" 53 hit FP** — kelime-genel (haber-genel "şok haberi") · kelime-sınırı sıkı

## 7) DİĞER CC'LERLE SINIRLARIM

### BENİM işim
- Haber-basın havuzu (ulusal 431 feed + yerel-arşiv)
- Article-body izolasyon + FP-fix
- Olay defteri (BEY-* zaman-serisi izlem)
- Mahalle × yıl × aktör × olay matrisi (Isı v1/v2/v2r)
- Fable-hazır sayfa-paketi + 10 lens
- SORGU-01 aday-parça JSONL üretim
- Aktör-bağlam bankası + alıntı bankası + sayısal cümleler + iski-havza cümleleri

### BENİM işim DEĞİL (çakışma-alanları)
- **Signals** — sinyal-yorumu, ayak-etkinleştirme, SIG-* modelleri (ben Isı-v2r hammaddesi veririm)
- **Analiz** — makro-veri, TÜFE, TCMB, sektör-analiz
- **Finans** — fiyat-arkeoloji derinlemesine (ben L2 hammaddesi veririm)
- **Borsa** — KAP-açıklama, BIST-100, halka-açık şirket takibi
- **İhale** — İ-* envanteri, ihale-arşivi, komisyon kararları
- **Tic** — Tapu-Kadastro, Tica-Sicil, firma-Db
- **TT-MAP** — mahalle-harita, uydu-imge, kadastro-katman
- **Sosyal** — YouTube/IG, kanal-toplam agrega
- **CC-İhale/Kitap/Ort/Sos/Aracden** — Tradia-dışı veya Patron ayırdığı

## 8) AÇIK BORÇLAR + gelecek 3 yetenek önerim

### Açık borçlar (S97+)
1. **Signals BEY-master senkron** (BEY-15/16/17/18 gap-analizi)
2. **Cam Köy 2013-2026 kayıp-yıl zinciri** (BEY-34)
3. **Kalyon Riva Country havuz-dışı doğrulama** (KAP + emlak-portal)
4. **BİM/Migros/File 0-hit** — arama-varyantı eksik
5. **L9 Mevsimsellik** (S96 borç)
6. **planaski.ibb backend API keşif** (S87 borç)
7. **Beykoz Belediyesi encümen/faaliyet/stratejik 7/7-404 · Sayıştay+TBMM alternatif** (S86-B borç)
8. **TT-HAFIZA rsync son-tur manifest yaz** (bellek takıldığında)

### Gelecek 3 yetenek önerim
1. **Yerel-basın manifest genişletme** (81 il × şehir-yerel-basın · kanews-benzeri sitemap taraması otomatikleştir)
2. **CSB İl Müdürlüğü otomasyonu** (81 il için istanbul.csb.gov.tr formatı — imar-askı takip)
3. **Sürekli haber-hasat crontab** — Beykoz Güncel + Dost Beykoz + benzeri yerel-siteler günlük RSS + haftalık sitemap-farkı

---

## HARİÇ (kesinlikle YAZILMAZ)

Bu dosyada **YOKtur**: Patron'un ayırdığı özel-konular · ortaklık teklifleri · şahsi projeler · Tradia-dışı işler.

---

**Standing:** #8 · #17 · #18 · **#21-A/B** · #22 · **#24** · **#31** · **#34** · **KR-CCBASIN-01/02/03** ✓  
**A04** ✅ · **$0** ✅ · **KVKK #31** ✅ · **SİLME-YOK** ✅  
**Kuruluş tarihi:** S38 (2026-06-30) · **Bugün:** S96 (2026-07-28) · **59 sprint boyunca aktif**  
**BITTI**
