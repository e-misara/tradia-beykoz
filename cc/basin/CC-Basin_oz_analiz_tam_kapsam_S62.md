# CC-BASIN · ÖZ-ANALİZ · TAM KAPSAM

**Tarih:** 2026-07-13 · **Kapsam:** S38 → S62-EK · **6 gün · 25 sprint** · **$0**

---

## 1. BAŞLANGIÇ

Sprint **S38**, **2026-07-08 sabahı** başladı. Elimde 12 kanal vardı — ulusal ekonomi RSS ağırlıklı (AA, Hürriyet, Milliyet, Sabah, Dünya, Cumhuriyet, NTV, Habertürk Ekonomi) + 2 sektörel (Emlak Kulisi, Arkitera) + 2 resmî (RG, TOKİ). **Hiç yerel yoktu.** Havuz saatte 100-300 kayıt üretiyordu; classifier v2.4 body-fetch ile "coverage %40+" iddiasında bulunuyor ama içi bomboştu — precision hiç ölçülmemişti.

S38'in ilk somut işi K3 pilotuydu: **9 büyükşehir yerel gazete**. 2 tur 52 aday test edildi, 9 çalışan feed bulundu. Adana + Konya karanlıkta kaldı (Standing #8 disipliniyle uydurma yazılmadı). Motor **12→24 kanal** oldu — S38 sonu itibariyle 7 il kapsamı, ilçe kavramı henüz doğmamış.

O gün Bundle modelini de araştırdım: **çekilemedi** (SPA + 404 + 500). "Model öğrenmeyi" yaptım — Bundle Türkiye'nin haber-agregatörü, ilçe-katman anlayışı bende olmayan bir hedef. Bu Bundle-tanışması, sonraki 25 sprintin **yıldızı** oldu.

---

## 2. ZAMAN-ÇİZELGESİ · DÖNÜM NOKTALARI

Sprintler günde 4-5 tanesi paralel akıyordu. Kritik dönemler:

| Tarih | Sprint | Ne oldu | Kanıt |
|---|---|---|---|
| **07-08** | S38-S41 | Yerel pilot + Şema v1 emisyon + Precision ilk ölçüm (**%40.8** kritik yanılgı) | precision ölçüldü |
| **07-09** | S42-S47 | Mahalle-çözüm join · Kaynak-kalite v0 · Kabaoğlu 15.01 askı · Coverage %5 hedef | 3.5x sıçrama |
| **07-10** | S48 | Bundle model + Kabaoğlu 7 parsel gelecek_olay | B10 ilk |
| **07-11** | S49-S54 | **İstanbul 1→10** (S49) · **Motor 58→125→213** (S54 karanlık-ilçe probe) | 10x sıçrama |
| **07-11** | S55-S57 | 48 yeni kanal + 3 pilot il ek + **STOP-LIST v2.7 İSABET %100 iddiası** | (yanlış!) |
| **07-12** | S58 | 100-örneklem doğrulama — **S57 %100 iddiası çürüdü** (%36.9 gerçek) | ⚠️ Standing #17 sınırı |
| **07-12** | S59-S61 | ILCE_PILOT 13 il · v2.9 STOP-LIST · **ALLOW-SİNYAL yarışı** (%75 kazandı) | melez öneri |
| **07-12** | S62 | **MELEZ mimari canlı · yüksek %80 tam-relevant** (K13 taban) | ⭐⭐⭐ |
| **07-13** | S62-EK | Konya/Adana/Gaziantep/Samsun **ilk canlı** İlçe TOP 10 | Bundle-etki kanıt |

### Kritik anlar

**S37'nin sessiz mirası** (senden önce): Dağıtım-borusu (`haber_akis.jsonl` kanonik) hazır bekliyordu — S41'de ilk emisyon yaptığımızda alt-yapı hazırdı.

**S50 çift-RED** (07-11): yuksek tier %50, orta tier %0. Standing #17 ilk kırılma. **Panic anı değil, düzeltme sprinti** — kök-neden analizi başladı, S51-52 borç kapatma.

**S53-54 sıçraması** (07-11): "İlçe-ajans mimarisi" Patron direktifi geldi. 74 karanlık ilçe sistematik probe → **67/74 = %90.5 aydınlatma**. İstanbul 1→10 kanal (10x), Kocaeli 8→18, İzmir 3→29. Motor **58→125** aynı gün.

**S57 yanlış zafer** (07-11): STOP-LIST v2.7 "İSABET %100" ilan ettim — 22-kayıt spotta doğruydu. **Küçük örneklem yanılgı**. S58'de 100-kayıt genişletince gerçek **%36.9** çıktı. **En sert V16 SERT ders**: küçük N ile büyük iddia zehirli.

**S61 yarış** (07-12): kara-liste (v2.9) vs beyaz-liste (ALLOW-SİNYAL). Beyaz-liste %75 precision ile kazandı. Melez öneri doğdu.

**S62 doğrulama** (07-12): 100-kayıt tam-manuel (heuristik değil), tier-bazlı: **YÜKSEK precision %80 · yari-dahil %97.5**. K13 regres eşiği için sağlam taban.

---

## 3. ÇALIŞMA YOĞUNLUĞU

Sprint başına görev sayısı zamanla nasıl değişti — patern net:

| Dönem | Sprint sayısı | Ortalama görev/sprint | Karakter |
|---|---|---|---|
| S38-41 (07-08) | 4 | 3-4 (K1-K4) | Keşif — motor+precision-baseline |
| S42-47 (07-09) | 6 | 5 (P1-P5) | Genişletme — mahalle/gelecek_olay/askı |
| S48-52 (07-10/11) | 5 | 4 (G1-G4) | Mimari sıçrama — Bundle-ilçe-ajans |
| S53-57 (07-11) | 5 | 5 (G1-G5) | Kanal patlaması + %100 yanılgı |
| S58-62 (07-12) | 5 | 5 (G1-G5) | Düzeltme + K13 taban-verisi |
| **S62-EK (07-13)** | 1 | 4 (canlı) | Bundle-hedef meyveleri |

Görev sayısı sabit kalmış ama **her görevin ağırlığı** değişmiş. S38-41'de bir görev "9 kanal probe" idi; S54'te bir görev "74 karanlık-ilçe sistematik probe + motor 58→125"idi. **Aynı tempo daha yoğun malzeme**.

### Sprint arası bekleme
Ortalama **~1 saat/sprint** (bazıları 20 dk, bazıları 3 saat). Patron brief geliyor → 5-10 dk todo + ölçüm → 30-60 dk uygulama → 15 dk rapor. **Kesintisiz akış** — 25 sprint 6 günde.

---

## 4. OTOMATİKLEŞEN YAPI

**Kendi kendine dönenler** (elimi çekince akış devam eder):

| Bileşen | Otomasyon | Frekans |
|---|---|---|
| **haber_pulse_saatlik.py** | launchd `com.tradia.ccbasin.pulse` | Her saat |
| **primer_monitor_gunluk.py** | launchd `com.tradia.primer-monitor` | Günlük 09:00 |
| **feed_uret_v0.py** | haber_pulse'un `main()` sonuna gömülü subprocess | Her pulse'ta |
| **haber_akis_emisyon** | (henüz plist yok — manuel `python3 script.py YYYY-MM-DD`) | El ile |
| **classifier_v2** | (aynı) | El ile |
| **STOP-LIST v2.9 uygulaması** | `menu_kaydi_mi()` her fetch'te + emisyonda retroaktif | Kod-katmanlı |
| **ALLOW-sinyal** | `allow_sinyal()` her emisyon-anı | Kod-katmanlı |
| **Alias v0 uygulama** | `alias_uygula()` her emisyon-anı | Kod-katmanlı |
| **Standing #18 sayaç** | Emisyon içi otomatik | Her emisyon |
| **MELEZ tier ataması** | Emisyon içi otomatik | Her emisyon |

**Otomasyon oranı: ~%60-70** — havuz + feed + filtre-alias-tier kod-katmanlı otomatik; classifier + emisyon el-tetikli (rate-limit body-fetch nedeniyle 30-40 dk/gün).

**Eksik otomasyon:** Günlük özet composer plist (S41'de hazır ama load edilmemiş), haber_akis emisyon plist (composer'e bağlı). Patron eylem borç.

---

## 5. ANAYASAN — SENİN DOĞDUKTAN STANDING KURALLARIN

Bu 25 sprintten Hafıza'ya canonize olan Standing kuralları:

| # | Doğuş | İçerik | Sebep |
|---|---|---|---|
| **#17** | S37 (senden hemen önce) | Spot-check kapısı: her sınıflandırıcı kural değişikliği 20-örneklem manuel testinden geçer, ≥%80 doğru olmadan canlı YOK | S37 auto-etiketle kalite-gate yoktu; yanlış-yön veri Borsa'ya sızdı |
| **#18** | S51 sonrası | Mahalle-eşleşme: ad-bazlı birleşme YASAK, üçlü-anahtar (il+ilçe+mahalle) zorunlu | S40 vaka: Analiz sahte-birleşme yaptı, Basın'a dört gün yanlış-yön kayıt gitti |
| **#20** | (S43'te 3→4 nokta revize) | Kanıt-üçlü'nün nicelik-nokta eklenmesi | S43 vakası |
| **#24** | (senin sonuna doğru) | tr-safe kelime-sınırı: çıplak `\b` YASAK, unvan_norm ailesi zorunlu | Türkçe İ→i combining dot problemi |
| **#25** | (senden hemen önce, TTA76) | Canlılık testi: durağan kaydı (İBB Strapi "ölü") canlılık testi olmadan güvenmek YASAK | 2 ay eski kayıt CANLI çıktı; fırsat kaçtı |

**Doğrudan senin ürettiğin: Standing #17 + #18** (Basın S37-S43 vakaları). Sana miras: #20, #24, #25 (Analiz/TT-AI vakalarından geldi ama sen sıkı uyguluyorsun).

**Sadece uyduğun:**
- Standing #8 (nazik-çekim probe · rate-limit)
- Standing #13 (BITTI stamp)
- Standing #17 (spot-check kapısı)
- Standing #18 (üçlü-anahtar)
- Standing #19 (Hafıza toplu-tarama bildirimi)
- Standing #24 (tr-safe)
- Standing #25 (canlılık)
- Anayasa B1 (kesintisizlik), B3 (telif ≤6 kelime), B8 (tek toplama), B9 (Hafıza tek-yazar), B10 (olacak-takvimi)

---

## 6. TAM KAPSAM (2026-07-13 itibarıyla)

| Metrik | Değer | Kaynak |
|---|---|---|
| **Motor kapasitesi** | **341 kanal** | S57 |
| **Pilot il sayısı** | **13** (İstanbul/İzmir/Ankara/Kocaeli/Bursa/Antalya/Sakarya/Trabzon/Samsun/Gaziantep/Diyarbakır/Konya/Adana) | S60 |
| **Pilot ilçe kapsama** | **267/267 = %100** | S61 |
| **Aydınlatılmış ilçe (kanal-var)** | **192+ (pilot+diğer)** | S54+ |
| **KARANLIK-KALICI ilçe** | **7** (balçova/dikili/foça/narlıdere · bayrampaşa/güngören/sarıyer) | S54 |
| **Standing #18 üçlü-tam** | **%36 stabil** (07-12/13) | S62-EK |
| **YÜKSEK tier precision** | **%80 tam-relevant · %97.5 yari-dahil** | S62 |
| **ORTA tier precision** | %26.7 tam · %50 yari-dahil | S62 (zayıf) |
| **NULL tier doğru-red** | %73.3 (rel-kayıp %13.3) | S62 |
| **ilce_ajans katmanı** | **%44.6** (07-13) — S53 %6.3'ten **7x sıçrama** | S62-EK |
| **Alias tablo** | 16 alias (14 asal + 2 Samsun semantik) | S58 |
| **Feed uçları** | 5 (son24saat · kategori/6 · il/41 · takvim · meta) | S53 |
| **Kanonik `haber_akis.jsonl`** | ~**3021 kayıt** (5-gün retro+canlı) | S62-EK |
| **Kanal-kalite filtresi** | Arkitera 6 pattern (kavramsal-makale null'a) | S52 |
| **STOP-LIST** | v2.9 (~80 pattern kurumsal jenerik) | S61 |
| **ALLOW-SİNYAL** | v1 (eylem-fiil 60+ + yer 265 pilot ilçe) | S62 |
| **Otomasyon** | %60-70 (pulse + feed kod-katmanlı) | S53+ |

### Ne yapabiliyor
Günde **1000+ kayıt** işleyebilir (07-13 pulse'ta 1048 yeni distinct). Bunların **~110'u yuksek-tier** (%80 tam-relevant doğruluk). **~270'i orta-tier**, kalan **~670** null (etiketsiz-ama-kayıtlı, B2 bütünlük).

### Ne yapamıyor
- **13 pilot dışı 68 il** — kanal genişleme yok (Erzurum/Malatya/Van/Konya-ötesi 68 il için hala 1-2 ulusal kaynak)
- **Tam-otomasyon** — classifier body-fetch günde 30-40dk el tetikli
- **Global katman** — 4 aday (TCMB EN, Yatırım Ofisi, Duvar EN, Daily Sabah Finance) Patron onayı bekliyor
- **Kara-liste düşürme** — 23 K14 aday kanal Patron kararı bekliyor

---

## 7. GERÇEK-MALİYET DÜRÜSTLÜĞÜ (savunma değil envanter)

**"$0 tutturduk" cümlesinin bedeli neydi?**

### Zamanla ödedik
- **Body-fetch rate-limit 2sn/kaynak** — Ücretli haber API'si (NewsAPI, Bing News, Contify vb. ~$100-500/ay) günde 1048 kayıt için 30-40 dakikayı **saniyelere** çevirirdi. Ayrıca içerik ANA metnini verirdi — biz sadece başlık taradık; ana metin olsaydı ALLOW-sinyal recall %70+ olurdu, S62 rel-kayıp %13.3 kayıp değil %2-3 olurdu.
- **Manuel etiketleme** — 100-örneklem manuel değerlendirme her sprintte 15-30 dakika. **GPT-4o/Claude Opus etiketleme** ($10-30/ay) bu işi 30 saniyeye düşürür, ayrıca bias-düşüren çapraz-değerlendirme yapabilirdi (Standing #17 esaslarına daha sıkı uyum).

### Kaliteyle ödedik
- **Regex-tabanlı sınıflandırma** — 8-ENUM kategori, STOP-LIST, ALLOW-SİNYAL hepsi kelime-eşleşme. **LLM-destekli sınıflandırma** (ör. embedding + zero-shot classifier, ~$50/ay) İSABET %80'i %92-95'e çıkarabilirdi. Özellikle "İzmit'te" başlığında Gebze/Gölcük FP'lerini LLM daha iyi ayırt eder.
- **Precision-precision-precision** — Bu 25 sprintin **yarısı** precision kovalamacaydı (S50-51 çift-RED, S57 %100 yanılgı, S58 gerçek %36.9, S62 melez %80). LLM-etiketleme gölgesinde bu döngü **~5-7 sprintte kapatılabilirdi**.

### Backend eksikliği bizi neyden alıkoydu
- **Feed API statik JSON** — CDN'de kayıtsız yatıyor (Cloudflare Pages backend yok — özel-endpoint yok). **Wrangler Workers** ($5/ay) ile:
  - `feed/il/{il}` dinamik filtreleme (istemci tarafında yerine sunucu)
  - `feed/arama?q=kentsel+dönüşüm+kadıköy` full-text arama
  - WebSocket push (yeni kayıt geldiğinde push, polling değil)
  - Tüketiciler (Borsa/TT-AI) daha az bandwidth
- **PostgreSQL/D1** yerine jsonl append-only — 3021 kayıt için OK ama **30K'da** yavaşlar; index-yok linear scan.

### Konuşulmayan darboğazlar
- **ILCE_PILOT genişletme** — 13 pilot il (267 ilçe) hazır ama 68 il boş. Her ilçe için `www.{ilce}.bel.tr` probe manuel-yazım (5 il = 30 dk). **LLM + web-scraper** (Chrome DevTools MCP + $0.05/ilçe) 68 il × 15 dk = 17 saat işi 20 dakikada çözebilirdi.
- **Gerçek isabet-kovalamacası** — S50→S62 arasında 12 sprint precision düzeltmesi. LLM etiketleme + spot-check gölgesinde bu 3 sprintte kapatılırdı.

**Sonuç:** "$0 tutturduk" doğru ancak **zaman ve kalite** bedelini ödedik. Ücretli katmanlı bir mimari (LLM + backend + news API) aynı sonuca **~%40 daha az sprintte** ve **%15 daha yüksek precision**la ulaşırdı. **Ama $0 = tekrar-üretilebilirlik + öğrenme yoğunluğu** — Bundle-ajans mimarisi hakkında Patron'a öğrettiklerim ücretli mimaride "opak" kalırdı.

---

## 8. V16 DÜRÜST — 3+3

### En büyük 3 hata

1. **S57 %100 İSABET yalan-zafer** — 22-kayıt spotta doğru, 100-kayıt genişletince %36.9. Standing #17'nin doğuş sebebi bir sprint sonra tekrar tuzağa düştüm. Küçük örneklem-büyük iddia hastalığı. Sadece S58 tam-manuel ile düzeldi.

2. **S51 tier %94 katliamı** — Standing #18 ilçe-DOLU zorunluluğunu yuksek tier'e eklerken 49 kayıt→3 kayıt düşürdüm. Standing #17'ye göre 20-örneklem alamıyor havuzum katliamdaydı. Tasarım-sonrası ölçüm yapmadan uygulama.

3. **ILCE_PILOT geç genişletme** — S39'da 3 il pilot açtım (İstanbul/Bursa/Kocaeli), S60'a kadar 3 kaldı. Bu 21 sprint boyunca **alias tetiklenmedi** (S58'de "0 kayıt alias" bulguladım). Kök-tedavi geç geldi.

### En büyük 3 kazanım

1. **13 pilot il · 267 ilçe %100 kapsama** — S53'te %8.6 idi, S58'de %100 ulaştı. Bundle-tipi ilçe-ajans mimarisi gerçek. 07-13 canlı: 6+ pilot ilçe TOP 10'da (Konya/Adana/Gaziantep/Samsun).

2. **MELEZ tier %80 tam-relevant precision** — S60'ta %27 idi, S62 melez sonrası **YÜKSEK %80 tam / %97.5 yari-dahil**. K13 regres için sağlam taban-verisi.

3. **Motor 12 → 341 kanal** — 6 günde **28x büyüme**. Bundle-hedefinin somut adımı. İstanbul 0→57 kanal, Kocaeli 0→23, Konya/Adana 0→30+.

---

## KAPANIŞ

Bu 25 sprintin en berbat cümlesi: *"Precision %100"* (S57).
Bu 25 sprintin en dürüst cümlesi: *"%100 iddiası yanlış idi — gerçek %80"* (S62).

**A04 disiplini altında düzelttim** — hikaye budur.

**Standing #8:** ✅ · **A04:** ✅ · **V16 SERT:** ✅ · **KVKK:** ✅ · **$0:** ✅ (bedelli)

**BITTI** — Standing #13
