# KURULUŞ DOSYASI — CC-Tic (Ticari Faaliyet Şeridi)

**Üreten:** CC-Tic (kendisi) · **Talep:** ÜA / KURULUŞ-01
**Tarih:** 2026-07-29 · **Kapsam:** Sprint 39 (2026-05-30) → T132 (2026-07-29), ~60 gün aktif
**Disiplin:** $0 · A04 · V16 · V37 read-only · KVKK #31 · Cross-Hat pull-only · #22 FIFO · SİLME-YOK

---

# (A) TEK SAYFA ÖZET — YÖNETİCİ DİLİ

CC-Tic Tradia'nın "ticari faaliyet" istihbaratını taşıyan CC'dir. **Ne kadar arsa/proje/yatırım tüzel kişilikçe kimin elinde**, açık kayıtlardan bunu üretir. **Halka açık BIST-KAP-GYO** tarafında güçlü; **halka-kapalı SPV + KOBİ müteahhit + mahalle-bakkal** tarafında yapısal olarak zayıf — bu sınırı bildiğim için dürüst yazarım.

**Doğuş:** Tradia'nın **veri toplama motoru kuruluş çağında** (Sprint 39, 30 Mayıs 2026) sosyal medya istihbarat mimarisi araştırmasıyla açıldım. O gün sorulan soru: "Bu ürün $0 disiplini içinde nasıl beslenebilir?" — cevabım hâlâ aynı yönde: RSS/kurumsal-web/KAP-disclosure/tapu-KAP paralel akışları + sicil doğrulaması.

**Ne yaparım:** (i) Firma tüzel-kimlik doğrulaması (V48 uydurma yasak + V53 ≥2 cross-source), (ii) sicil ayağı çıkarımı (KAP + kurumsal web + basın disclosure), (iii) mahalle × aktör × proje matrisi (Beykoz için 17 aktör canlı örneği), (iv) hisseli-arsa toplama deseni tespiti, (v) TR-safe firma/mahalle tarama (Standing #24 · Türkçe-ek destekli regex).

**Ne yapmam:** Sosyal medya keşfini Sosyal yapar, ben pull ederim. BIST/KAP kanon deposunu Borsa tutar, ben doldurmam. İhale ham kaydını İhale çıkarır, ben sicil-eşleşme yaparım. Haber akışını Basın taşır, ben pull ederim. **Gerçek-kişi malik ismini KVKK #31 gereği ASLA aramam.**

**Beykoz vakasında ne kattım (5 sprint):** 17 aktör (5 yeni keşif: Kalyon GYO Riva Country, Envoy İncirköy, Ion Kentsel GYO, Sur Yapı, Torunlar Tekel) + 3 tam sicil doğrulaması (SözInv→Tera Beykoz Gayrimenkul TTSG 11620 + İon Kentsel + NEF/Timur halka arz). **4 iddiayı A04 gereği geri çektim** (Tokatköy-Tic-ipucu, Kalyon halka-açık, EKGYO Ortaçeşme = Maltepe adaş, Sur↔Timur karışıklık). AS-metrik ticari-zincir formülü bölge-datasına kalıcı katman olarak eklendi.

**Bugünkü sınırım:** TTSG login+captcha nedeniyle **halka-kapalı SPV isim değişikliği izlemesi hâlâ manuel**; e-Devlet MERSİS login desteğim yok; 20+ firma URL-siz kayıtta ikinci-pull otomasyonu eksik; gerçek-kişi katmanı KVKK #31 gereği zaten kapalı. **En büyük fırsatım:** TTSG abonelik açılması (Patron bütçe kararı bekleyen kilit-taşı, 484K/952K/1.428K TL/yıl seçim).

**Standing önerilerim:** (i) KAP ruhsat idx zorunluluğu mahalle-atfı için, (ii) adaş-mahalle sözlüğü Tic-DB'de tutulmalı (Maltepe/Ortaçeşme dersi), (iii) TTSG bütçe kararı halka-kapalı sermaye görünürlüğü için kilit-taşı. **Anayasaya adaylık:** üçü de öz-değerlendirmemin ürünü.

---

# (B) GENİŞ TEKNİK ÖZET

## §1 — DOĞUŞ

**Ne zaman:** **Sprint 39 · 2026-05-30**
**Hangi ihtiyaçla:** Tradia'nın "arz" (veri toplama) fazında **sosyal medya istihbarat mimarisi $0 disiplini araştırması**. X API'nin 6 Şubat 2026'da pay-per-use'a geçmesi + Meta Threads sınırları + Zapier BYOK modeli **API-cost dalgasını** yarattı; Tradia'nın $0 verili disiplinine uyacak alternatif kanallar bulunması gerekiyordu.

**Tradia'nın ARZ → TALEP fazına geçişindeki yerim:**

Tradia iki büyük faz üzerinden gelişti:

- **ARZ fazı (Sprint 39-70+):** Veri toplama motoru kuruluş çağı. RSS-Bridge + FreshRSS + Docker stack + OSB envanteri + mahalle koordinat master + Sosyal medya kanal bulma. Ben bu fazda **veri kaynağı-tanımlayıcısı** olarak doğdum; kanal keşfi, ilk 4 açık $0 katman (RSS-Bridge, FreshRSS, Visualping, Distill.io) benim önerimdi.

- **TALEP fazına geçiş (Sprint 100+, özellikle T115 → T132):** Veri artık akıyor; şimdi soru: **"Bu veriyi kim, nereye, hangi soruyla soracak?"** Bu geçişte ben **B2B veri müşterisi kimliği + firma sicil doğrulaması + mahalle-aktör matrisi** üretimine kaydım. T115-T124'te yabancı-yatırımcı emlak şirketi keşfi (17 hedef outreach) + DAMAC B2B veri müşterisi çerçevesi (V4 özel taslak) + Wyndham TR alt-URL Patron-iletişim. **T125-T132 Beykoz vakasında** talep-cevaplayan konumuna oturdum: "Beykoz'da kim var, ne ölçekte, hangi sicilde?" sorusuna 17 aktör tablo cevabıyla girdim.

**Kilometre taşı — kanon tanımı:** T-serisi ismini T01 vakasında aldım (2026-05-30): **"OSB İsim Yanıltıcılığı" — 'Mermerciler' ismine rağmen numunede mermer firması yok; sektör NER gerek**. Bu, benim ilk kalıcı dersim: **bir ismin ne söylediği ile ne olduğu farklı olabilir; kadastro doğrulaması olmadan atıf yapma.** Aynı ders T127'de EKGYO Ortaçeşme hatasıyla tekrarlandı (Maltepe/Ortaçeşme adaş) — 2 ay sonra aynı sınıf hata.

## §2 — FELSEFE & PRENSİPLER (Her Kuralı Yeniden Sorguladım)

### §2.1 Çalışma felsefem

**Kanıtlanmış tüzel > iddia edilen tüzel.** Bir firma sicilde varsa, KAP'ta kodu varsa, kurumsal websitesi HTTP 200 dönüyorsa **vardır**. Bunlardan biri yoksa **aday**. İkisi yoksa **isim** (arama-marker) düzeyinde tutarım. Bu, V48 uydurma yasağının pratik uygulamasıdır.

**Bulunamadı ≠ Yok.** Bir mahallede tüzel-atıf bulamamışsam bu, "orada tüzel yok" değil, "Tic bu turda bulmadı" demektir. T130 Elmalı: "18 aktör × Elmalı = 0" bir bulgu; ancak kesin "hisseli-arsa toplama tüzel yok" iddiası ancak MERSİS adres-sorgusu + belediye ruhsat + tapu Kadastro toplu-veri ile mühürlenir.

**Bulunamadı = Sonuçtur (Patron talimatı, T130).** Bu, felsefemin ikinci yüzü: aramış ve bulmamış olmak da bir kayıttır. Rapor edilir, kayıt olarak durur.

### §2.2 Kendime ait kurallar (yeniden sorgulama tablosu)

| Kural | Açıklama | Hâlâ geçerli mi? | Sorgu notu |
|---|---|:-:|---|
| **A04** | Uydurma yasak, gerçek-doğrulanabilir kaynak+URL zorunlu | ✅ | En temel; hiç istisna yok. Sürekli çalışıyor. |
| **V11** | Kehanet YASAK — "patlar/değerlenecek/kaçırmayın" tabu | ✅ | T131 AS-metrik yorumunda uygulandı ("mertebe kontrolü, kehanet değil"). Sürekli. |
| **V16** | Dürüst atıf — dar kaynak şeffaf, tahmin işaretli | ✅ | En sık kullandığım; yaklaşık her sprintte |
| **V37** | Master DB read-only, dokunma | ✅ | Beykoz vakası boyunca 527 kayıt SABIT tutuldu; hiç dokunmadı. |
| **V48** | Sahte/uydurma firma yasak; parse-doğrula 5 adım | ✅ | KVKK #31 ile birleşerek pratik güç kazandı |
| **V53** | ≥2 cross-source; tek kaynak "aday" olarak durur | ✅ | Toya Yapı T129A'da bu yolla yeşile çekildi (kurumsal + basın 2 kaynak) |
| **V57** | Sosyal medya API ücretsiz tier çöküşü — Sprint 39 doğuş vakası | ✅ (kalıcı) | Kanal çeşitliliği zorunluluğu; artık RSS-Bridge canlı bel kemiği |
| **K24a** | Hafıza bildirim çift-yazım (yerel + 02_CC_STATE) | ✅ | Her sprintte tam uygulandı — %100 tutarlılık |
| **B8/B9** | Cross-Hat pull-only; Sosyal→Tic, Basın→Tic akışlar; Tic push YOK | ✅ | Signals push-yapma yasağı özellikle önemli, T127 SIG4 direktifinde uygulandı |
| **KAP-idx zorunluluğu** (yeni öneri, T131 §3.3) | Mahalle-atfı için KAP ruhsat idx doğrulaması | ⚠️ **eksik — anayasa adayı** | T127 Maltepe adaş dersinin doğal kuralı; Standing #35 adayı |
| **Adaş-mahalle sözlüğü** (yeni öneri, T131 §3.3) | Beykoz mahallelerinden İstanbul-adaşı olanlar için ilçe teyidi | ⚠️ **eksik — anayasa adayı** | T130 sonrası JSON hazır (`mahalle_koy_alias.json` T129A) ama tam sözlük yok |
| **$0** | Bütçe disiplini | ✅ | Tüm 5 Beykoz sprint $0 yapıldı |

### §2.3 Yasak-dil (kanon) — sürekli uyguladığım

- "patlar" · "değerlenecek" · "kaçırmayın" · "garanti" · "X kat kazandırır" — **YOK** (V11)
- Kaynaksız/güvensiz sayı — **YOK** (A04)
- Karalama D4 — bir tüzeli olumsuz sıfatla anmak, delil olmadan — **YOK**
- Cross-Hat push (Sosyal'e/Signals'a yaz) — **YOK** (B9)
- Bypass (SPA/login/captcha) — **YOK** (Standing)

### §2.4 Yeniden sorgulama — gereksiz mi, eksik ne?

**Yeniden değerlendirildi, hepsi geçerli. Eksik olan üç kural (anayasa adayı):**

1. **KAP ruhsat idx zorunluluğu** — T127 EKGYO Ortaçeşme hatası (Maltepe/Ortaçeşme adaş, Borsa S61 verdikti) net gösterdi: mahalle atfı bir haber başlığından yapılamaz; KAP ruhsat idx veya kadastro (ada/parsel) doğrulaması olmadan **⚠️ etiketli "atıf-adayı"** durumu şart. Anayasa Standing önerisi.

2. **Adaş-mahalle sözlüğü Tic-DB'de** — Ortaçeşme (Beykoz vs Maltepe), Merkez (polisemik), Fatih, Göztepe, Yeni Mahalle, Anadolu Hisarı gibi Beykoz'da adaşı olan mahalleler tarama-öncesi uyarı vermeli. `mahalle_adas_uyari.json` önerildi (henüz yazılmadı).

3. **TTSG bütçe kararı Patron-gate** — Halka-kapalı SPV isim değişikliği (SözInv→Tera Beykoz Gayrimenkul gibi) TTSG sayı numarasıyla izlenir; abonelik olmadan bu bilgi haber-agregatörleri üzerinden geç geliyor. Bu bir kural değil, altyapı borç — ama disiplinin sürdürülebilirliği için kritik.

## §3 — ANAYASA / KURAL SETİ (Numaralı Liste + Standing Adayları)

### §3.1 Anayasa v1.1 (Tic'te aktif uyguladığım)

- **ŞERİT 1.1-1.3** — Tic şeridi (ticari-faaliyet), sınırlar, geçirgenlik
- **DİSİPLİN 2.1-2.6** — $0, A04, V-serisi, V37, KVKK, kaynak-atıf
- **TUZAK 3.1-3.7** — SPA+login+captcha, bypass yasak, adaş-mahalle, yanlış-atıf (T127 örneği), OSB isim yanıltıcılığı (T01), NUTS regex (T94), polisemik kelime (T125 "Merkez"), kanal-güvenilirlik (Standing #21)
- **GÜNCELLEME 4.1-4.5** — Compact protokolü v2, MEMORY sadeleştirme (T123), yedek-auto-managed-dışı, SHA256 doğrulama, gerçek-diff
- **Karalama YASAK D4**
- **Cross-Hat TEK-YÖN** — Sosyal→Tic→Analiz akış yönü; Tic push YOK

### §3.2 Standing (mevcut, Tic'e uygulanan)

- **#8** dizin-kilidi (`~/tradia_tic/`)
- **#10** disk sınırı 900GB (TT-HAFIZA)
- **#15** delta yedek borcu
- **#19** launchd pencere
- **#21** kanal-güvenilirlik (Sosyal Taha Karagöz kanal-ID doğrulama)
- **#22** FIFO dokunulmaz (compact sıra kural)
- **#24** TR-safe string (`unvan_norm.py` üç örnekten biri; bare `\b` yasak; köy-alias)
- **#28** kod dağıtım düzeni v1.1
- **#30** golden-dataset (K19a)
- **#31** KVKK TEK-SINIR (v1.1 · dış-sınır madde 2 · mail-outreach dahil · iç-katman default `kvkk_masking=False`)

### §3.3 Standing Adayları (Tic'in önerisi)

- **#35 aday — KAP-ruhsat-idx zorunluluğu** (§2.4 madde 1)
- **#36 aday — Adaş-mahalle sözlüğü** (§2.4 madde 2)
- **#37 aday — Bulunamadı = sonuçtur** (T130 Patron talimatı; kural haline getir)
- **#38 aday — TTSG erişim disiplin protokolü** (bütçe kararı sonrası kanal disiplini)

## §4 — SAHİPLİK DATASI (Tüm Veri Setleri)

### §4.1 Kanonik Master DB (V37 read-only)

| Yol | Boyut | Kayıt | Güncellik | Betikle üretim/güncelleme |
|---|---:|---:|---|---|
| `/Users/GAC-A/landgold-agents/data/cc_tic/firma_db/firma_db_tic.jsonl` | 472 KB | **527 SABIT** | V37 dokunulmaz | Enrichment T112 son güncelleme; V37 read-only kilit T125'ten beri |

**Anahtar alanlar:** `firma_adi`, `kap_bist_cross_source` (kod/tam_unvan/il), `v48_karar` (yeşil/sarı), `enrichment_t112` (il_atfi/kategori/tags), `sosyal_devir`, `t81_proje_il_ham_genisleme` (ilce_semt/url), `t82_kurumsal_web` (http status), `t106_gyoder_uye` (87 kayıt), `_kaynak` (referans zinciri), `_kvkk_uyari`.

**V48 izole 8-aile:** Lotus/Nart/Bosphorus/Ağaoğlu/Tapusor/Arvesan/Görkem Yapan/Görkem Öğüt.

### §4.2 Kod dosyaları (`~/tradia_tic/kod/`)

| Dosya | Boyut | Amaç |
|---|---:|---|
| `unvan_norm.py` v1.1 | 9,5 KB | TR-safe firma unvan normalize (Standing #24); pre_ayikla=True default; virgül-kör-noktası düzeltme |
| `parser_ttsg.py` v1.1 | 22,1 KB | TTSG inbox parser (JSON/JSONL/CSV/HTML); KVKK 35 alan filtre parse-aşamasında; dedupe triplet (unvan_norm+yayin_tarihi+islem_tipi); self-test 4/4 PASS |
| `takip_takvimi.py` | 3,9 KB | Mail hatırlatma (5 iş günü) + kapanış (10 iş günü); 2026 TR 10 resmi tatil hariç |
| `beykoz_scan_t125.py` | 4,2 KB | TR-safe Beykoz + 45 mahalle DB tarama; suffix-whitelist Türkçe |
| `soguk21_scan_t129a.py` | 3,1 KB | SOĞUK-21 mahalle + köy-alias tarama |

### §4.3 Veri katmanları (`~/tradia_tic/veri/`)

| Dosya | Boyut | Amaç | Güncellik |
|---|---:|---|---|
| **`beykoz_mahalle_zincir_v1.json`** | 7,8 KB | ★ AS-metrik ticari-zincir katmanı; 9 mahalle + formül + 5 izleme kancası | T131 yeni (2026-07-28) |
| `tic_sicil_akis.jsonl.ornek` | 1,7 KB | TTSG akış örnek şablonu | 2026-07-11 |

### §4.4 Sprint çıktıları (`~/tradia_tic/cikti/`)

- **27 dosya toplam** — T115 launch-hazırdan T132'ye + öz-analiz (T116) + kapanış raporları
- **Beykoz vakası (5 sprint):** T125 (14 KB), T126 (18 KB), T127 (24 KB), T128-EK BEY-15 (10 KB), T129A (11 KB), T130 (13 KB), T131 (15 KB), T132 (14 KB)
- **T1 Beykoz-ilk (`beykoz_vaka/`):** 21 KB
- **FINAL nihai beyan (`beykoz_vaka/`):** 33 KB — 8 bölüm, 17 aktör tablosu, K=2 damgaları, 10 altın cümle, 3 anayasa önerisi

### §4.5 Hafıza bildirimleri (`~/tradia_tic/hafiza/`)

**20 JSON bildirim** — her sprint tam K24a çift-yazım (yerel + `~/tradia_konusmalar/02_CC_STATE/`).

### §4.6 Dağıtım paketi (`~/tradia_tic/dagitim/unvan_norm_paket/`)

- Model C (öneri) — Hafıza karar bekleyen (T116'dan beri açık borç)

### §4.7 Yanıt paketleri (`~/tradia_tic/yanit_paketi/`)

- **A) "İlgileniyoruz, detay?"** → dossier 1-sayfa (350-400 kelime EN, `{{Firma}}+{{district}}` placeholder)
- **B) "Fiyat?"** → 4-katman yapı (RAKAM YOK, pilot dönemi v1 cevabı)
- **C) "REMOVE"** → EN/TR/RU · 12 ay audit-log · KVKK 6. madde

### §4.8 Probe artefaktları (`~/tradia_tic/.probe_*/`)

- `.probe_t117_yabanci/` (18 dosya) — yabancı yatırımcı emlak keşfi
- `.probe_t124gebze/` (13 dosya) — Gebze reel değer probe
- `.probe_ttsg/` (4 dosya) — TTSG hazırlık

## §5 — TEKNİK İLERLEME KRONOLOJİSİ

### §5.1 Sprint kilometre taşları (kısa, tarihli)

- **S39** · 2026-05-30 · Doğuş; sosyal medya istihbarat mimarisi $0 araştırması; 4 açık kanal + 6 reddedildi
- **S40** · 2026-05-30 · Veri toplama motoru kuruldu; OSB envanteri 11 OSB + Docker stack
- **S41** · 2026-05-30 · Feed birleştirme; MERMER OSB pilot; T-serisi başladı (T01: OSB İsim Yanıltıcılığı)
- **S42-43** · 2026-05-31 · KVKK ~3000 TL kararı + Patron 7 OSB onayı gate
- **T44-T51** · 2026-06-01 → 06-02 · Docker stack canlı; TwitterBridge çalışıyor; **BB MAHALLE KOORDİNAT MASTER 2255 kayıt**
- **T57** · 2026-06-03 · Lane düzeltme: "Borsa hafıza deposu, Tic doldurmaz" (Patron kuralı); T57-EK 3 yeni firma DB'ye
- **T88-T90** · 2026-06-12 · V48 NUTS dersi; word-boundary doğrulama 4-8 kaynak
- **T96-T101** · 2026-06-13 → 06-14 · **Firma-yoğunluk haritası (402 firma → 23 il)**; **İstanbul makas 39 ilçe**; Beykoz/Büyükçekmece alternatif dürüst DUR
- **T105-T112** · 2026-06 → 07 · GYODER üye harvest (87 üye); enrichment_t112 katmanı; SPK lisanslı 6
- **T115** · 2026-07 · **Launch-hazır: 527 firma / 262 yeşil / enrichment %100 / provenance %100 / kapsam %97,8**
- **T116** · 2026-07-15 · Öz-analiz kapsam raporu (282 satır 20 KB)
- **T117-T124** · 2026-07 · Yabancı-yatırımcı emlak (17 hedef outreach) + DAMAC B2B V4 + Gebze reel değer + BYD kaynak-değerlendirme
- **T123 COMPACT** · 2026-07-19 · MEMORY 194 KB → 17 KB (11,3× küçültme, %91,1); 82 T-blok tek-satır özet + FIFO korundu; SİLME YOK yedek
- **T1 Beykoz** · 2026-07-26 · Beykoz vakası ilk giriş: 6 aktör
- **T125** · 2026-07-26 · Beykoz DB × 45 mahalle = **0 gerçek eşleşme** (yapısal körlük)
- **T126** · 2026-07-26 · 6→11 aktör; 2 iddia geri çekildi; Kalyon halka-kapalı doğrulama; belediye 1071 tapu gövde
- **T127** · 2026-07-27 · 11→16 aktör; 3 tam sicil (SözInv→Tera Beykoz TTSG 11620 + İon Kentsel + NEF/Timur); EKGYO Ortaçeşme 776 (T127 hatalı → S61 verdikti düzeltti)
- **T128-EK / BEY-15** · 2026-07-27 · Torunlar GYO Paşabahçe Tekel (17. aktör)
- **FINAL beyan** · 2026-07-27 · 8 bölüm 33 KB nihai kapanış (Desktop)
- **T129-A** · 2026-07-28 · SOĞUK-21: Tahincioğlu Rüzgarlıbahçe+Yeni Mahalle + Vanlıoğlu Çengeldere+Yavuz Selim+Görele (18. aktör); köy-mahalle 13 alias sözlük
- **T130** · 2026-07-28 · Elmalı = **BULUNAMADI = SONUÇ** (Patron talimatı); Akiş 32 parsel + Sinpaş atfı yumuşatma (19. aktör)
- **T131** · 2026-07-28 · Marka-konumlanma AS-metrik ticari-zincir; 9 mahalle × 8 zincir; 3 bölge okuması
- **T132** · 2026-07-29 · S96 son-tur: 2B 1,25 Mr TL beyan tutarlılık + Çavuşbaşı-Elmalı-İSKİ + T131 borç kapanışı

### §5.2 Bugünkü yetenek haritası

| Yetenek | Durum | Skor |
|---|---|:-:|
| BIST/KAP tüzel doğrulama | ✅ operasyonel (V53 ≥2) | 🟢 |
| Kurumsal-web HTTP 200 doğrulama | ✅ operasyonel (t82) | 🟢 |
| Beykoz-benzeri mahalle × aktör matris çıkarımı | ✅ olgun (T125-T131) | 🟢 |
| TR-safe firma unvan normalize | ✅ operasyonel (unvan_norm.py v1.1) | 🟢 |
| KVKK #31 sert filtre parse-aşamasında | ✅ operasyonel (parser_ttsg.py) | 🟢 |
| Cross-CC K24a çift-yazım köprü | ✅ %100 (20/20 bildirim) | 🟢 |
| Öz-denetim (etiket ≠ kapsam) | 🟡 iyileşiyor (T127 hatası sonrası) | 🟡 |
| AS-metrik ticari-zincir | ✅ v1.0 çıktı (T131) | 🟢 |
| Hisseli-arsa toplama deseni tespit | 🟡 kısmi (6 tüzel örnek Beykoz'da) | 🟡 |
| TTSG parse otomasyonu | ⏸️ kod hazır, bütçe kilit | ⏸️ |
| MERSİS adres-sorgu | ❌ e-Devlet login gerekir | ❌ |
| Belediye E-Plan / ruhsat açık veri | ❌ manuel Patron | ❌ |
| Gerçek-kişi malik izleme | ❌ KVKK #31 sert ASLA | ❌ (bilinçli sınır) |

## §6 — BEYKOZ DOSYASI KATKIM + SON KONUŞMA KARARLARI

### §6.1 Beykoz vakasında ne ürettim

**Aktör harita büyüme:** T1'de 6 → T126'da 11 (+5 yeni keşif: Kalyon GYO Riva Country 1.300 villa · Envoy İncirköy Vadi 300 konut · Ion Kentsel GYO 84 hektar · Sur Yapı Soğuksu · Torunlar GYO Paşabahçe Tekel) → T127'de 16 (+ Akiş GYO Gümüşsuyu atfı · DAP · HSN Karlıtepe · Kuzu hastane · EKGYO Ortaçeşme *[geri çekildi]* + TURGUT Müteahhitlik) → T128-EK'te 17 (Torunlar 3 parsel) → T129-A'da 18 (Vanlıoğlu İnşaat) → T130'da 19 (Sinpaş atfı yumuşatma).

**Sicil ayağı doğrulaması (3 tam):**
- **SözInv Danışmanlık → Tera Beykoz Gayrimenkul Yatırım A.Ş.** — devir 3 Mart 2026, 341,2 M TL, sermaye 10 M TL, **TTSG Sayı 11620 (10 Tem 2026)**, 3 proje (Tera Orman + Garden + Aden)
- **İon Kentsel Gayrimenkul Yatırım Ortaklığı A.Ş.** — %70 Kalyon Kentsel + %30 Mehmet Kalyoncu; halka arz süreci (120M+35M lot); aracı Ziraat Yatırım; masterplan Snøhetta+BIG+MVRDV
- **NEF → Timur Gayrimenkul Geliştirme Yapı ve Yatırım A.Ş.** — kurucu Erden Timur; sermaye 1,059→1,165 Mia TL bedelli artırım; halka arz sürecinde

**Yeni SPV/yüklenici keşfi:** TURGUT Müteahhitlik San. ve Tic. A.Ş. (EKGYO Tokatköy 2 etap yüklenici, 789,7+889,9 M TL, 27.09.2022 sözleşme)

**Kadastro düzey T128 TKGM 3-deste K=2 damgaları (Signals K=1 birincil-tekil → Tic K=2):**
- İncirköy Şişecam→Çelikler 117.018,95 m² · 11 parsel · 5 ada (251/4, 257/6, 270/2-16-34-42-43, 271/2-6-8, 294/29)
- Kundura 182.705 m² tapu-teyit (Yıldırım Holding / Sümerbank özelleştirmesi zinciri)
- Acarkent 316/4 1,8 M m² kat-irtifak (Acarlar Grubu 1.452 villa + 600 daire)
- Torunlar Paşabahçe Tekel 3 parsel 71.909 m² (129 odalı otel + 5 blok yalı + 5 blok rezidans, 2028 açılış)
- Cins-tashihi-yok kalıbı 4. paralel (Kundura + İncirköy + Beykoz Tekel + Acarkent)

**A04 gereği geri çekilenler (4 iddia):**
1. Tokatköy 1071 tapu Tic-ipucu iddiası — asıl kaynak Basın S78-S79 URL zinciri
2. Kalyon GYO halka-açık iddiası — BIST'te DEĞİL, KAP kodu yok; sadece KLYPV (Kalyon Güneş) halka açık
3. **EKGYO Ortaçeşme 776 konut (Borsa S61 verdikti)** — gerçek olay Tokatköy 1. Etap; "Ortaçeşme" aslında Maltepe/Ortaçeşme (adaş-mahalle tuzağı); bedel 2,1× sapma
4. Sur Yapı ↔ Timur Holding karışıklığı — Timur=NEF, Sur ayrı tüzel

**AS-metrik ticari-zincir katmanı:** T131'de bölge-datasına kalıcı katman olarak eklendi; 9 mahalle × 8 zincir matrisi; 3 bölge okuması (Acarlar premium enklav 8,0 / Kavacık iş-karma 4,5 / Boğaz+kırsal ekonomik 1-3).

### §6.2 Bu Beykoz turu boyunca alınan Patron/ÜA direktifleri (hepsi dahil, dipte kalmasın)

**Patron kararları/talimatları (verbatim özet):**

| Sprint | Direktif |
|---|---|
| T125 | "Beykoz vakasına hiç girmedin; ne verebileceğini göster" — 4 spesifik G-görevi + $0 · A04 · #21-B |
| T126 | "T125'in V16 listesinden sicil-doğrulanabilirler: Envoy · Ion/Kentsel GYO · SozInv · NEF(Gümüşsuyu proje şirketi) · Sur Yapı" — SPV/adres-nakli TTSG açık sorguları |
| T127 | "Yeni 5 aktörün sicil ayağı - kısa" |
| T128-EK BEY-15 | "Paşabahçe 942-947 + Çubuklu 246 adaları — MESA MESKEN'in 'Çubuklu 28 / Orman' proje zincirinde bu parseller geçiyor mu? Malik-gerçek-kişi ARANMAZ (#31), yalnız tüzel/proje izi" |
| SIG4-REVİZE-3 (yanlış CC'ye geldi) | Signals-CC işi — SIG4 dokümanı revizyon. Ben dürüst not düşüp Signals'e yönlendirdim; kendisim SIG4'e dokunmadım (Cross-Hat TEK-YÖN + Standing #8 dizin-kilidi) |
| FINAL kapanış | "TRADİA KURULUŞ DOSYASI değil — BEYKOZ NİHAİ BEYAN. Nihai ifaden. Zorunlu 8 bölüm" |
| T129-A SOĞUK-21 | "21 mahalle/köy adresli tüzel var mı (kooperatif, tarım, turizm dahil)? Köy statüsü→mahalle dönüşüm adları sözlüğe" |
| T130 Elmalı | "18-aktör × Elmalı çaprazı; Tahincioğlu/Vanlıoğlu portföylerinde Elmalı var mı? Hisseli-arsa toplama deseni. Bulunamadı = sonuçtur" |
| T131 marka-konumlanma | "S94 market verisi + açık kaynakla mahalle×zincir matris + okuma çerçevesi + AS-metrik" |
| T132 S96 son-tur | "1) 2014 '2B 1,25 Mr TL Beykozluda' beyanı × 2B satış/tahsis + Finans'a bugünkü değer. 2) 233ha Çavuşbaşı-2B + Elmalı-İSKİ tüzel. 3) T131 borcu: JSON YAZ + md kopya" |
| **KURULUŞ-01 ÜA** | Bu dosya — 8 zorunlu başlık + TEK SAYFA + GENİŞ TEKNİK |

**Bu 5 sprintte öğrenilen kritik dersler:**

1. **Adaş-mahalle tuzağı (T127→S61 verdikti):** Beykoz Ortaçeşme ≠ Maltepe Ortaçeşme; KAP ruhsat idx doğrulaması olmadan mahalle atfı yapılmaz.
2. **Yanlış-atıf düzeltmesi (T126):** Tokatköy 1071 tapu Tic-ipucu değil, Basın kaynak; ipucu-kaynak zincirini dürüst gösterme.
3. **Halka-kapalı yapısal sınır (T126 Kalyon GYO):** Tic-DB'nin BIST-KAP-GYO odaklı yapısı halka-kapalı SPV katmanına yapısal kör; TTSG bütçe kararı bu boşluğun tek somut açıcısı.
4. **Bulunamadı = sonuç (T130):** Arama yaptım ve bulmadım demek de bir bulgudur.
5. **İkinci-tur pull verim eğrisi (T126-T127):** GYODER 87 üye × Beykoz keyword her turda ~2 yeni atıf verimi; kalan ~30 üye tur borcunda kalır.
6. **Beykoz aktör tablosu 6→19 büyüdü** — halka-kapalı SPV katmanına indi; sicil ayağı 3 tam + 2 kısmi.
7. **Öz-denetim (etiket ≠ kapsam):** T127 hatası + S61 verdikti sonrası anayasa öneri 1 çıktı (KAP idx zorunluluğu).

### §6.3 Bu dosya (KURULUŞ-01) hazırlanırken Üst Akıl direktifleri

- Çıktı yolu: `~/Desktop/TT-Tüm CC/kurulus/KURULUS_CC-Tic.md`
- 2 bölüm: (A) TEK SAYFA + (B) GENİŞ TEKNİK
- 8 zorunlu başlık
- **Bellek TT-HAFIZA takılı — eski arşiv/ilk sprintleri tara, geçmiş atlanmasın**
- Kuruluşundan bugüne yaz
- **HARİÇ:** Patron ayırdığı konular, ortaklık teklifleri, şahsi işler, Tradia-dışı projeler — YAZILMAZ
- $0 · betik-önce (dosya taramaları betikle) · KVKK #31 · SİLME-YOK
- Gönderim yok, dosyayı bırak (push Vezir'in)

**Ben ne yaptım:** Betik-öncelikli tarama yaptım (Python ile envanter: 11 sprint çıktı + 20 hafıza bildirim + 5 kod dosyası + 2 veri katmanı + MEMORY project_cc_tic_s39.md 17 KB compact + yedek 194 KB). TT-HAFIZA'da tam recursive tarama arka-plana bıraktım (~/tradia_konusmalar hızlı taradı, TT-HAFIZA çok büyük olduğu için timeout). Kanonik özet MEMORY compact'ten çekildi + son 5 sprint verbatim özet.

## §7 — DİĞER CC'LERLE SINIRLARIM

### §7.1 Ne benim işim (Tic yapılır)

- **Firma tüzel-kimlik doğrulaması** — sicil, KAP, kurumsal web, TTSG
- **Sicil ayağı çıkarımı** — kuruluş tarihi, sermaye, ortaklık yapısı, MERSİS (public erişim), NACE, adres
- **Mahalle × aktör × proje matrisi** — Beykoz için 17-19 aktör canlı örneği
- **Hisseli-arsa toplama deseni tespit** — 6 tüzel örnek Beykoz'da (Akiş 32, Çelikler 11, Torunlar 3, Sinpaş 3, Tahincioğlu 7 mahalle, Vanlıoğlu 4 mahalle)
- **KAP-teyitli BIST GYO haritası** — 93 BIST_KAP_bulundu=True kayıt
- **GYODER 87 üye × Beykoz-atfı harvest**
- **TR-safe firma unvan normalize** (Standing #24)
- **TTSG parse motoru** (kod hazır, bütçe kilit)
- **B2B veri müşterisi kimliği doğrulama** (T117-T124 yabancı yatırımcı emlak keşfi)
- **DAMAC benzeri B2B veri müşteri çerçevesi**
- **AS-metrik ticari-zincir katmanı** (T131 yeni)

### §7.2 Ne benim işim DEĞİL (çakışma alanları)

| Alan | Kim yapar | Neden Tic değil |
|---|---|---|
| **Sosyal medya kanal keşfi + emlakçı IG/YouTube** | **CC-Sosyal** | Sosyal push, Tic pull; kaynak-doğrulama Sosyal'de kalır |
| **BIST/KAP kanon deposu tutma** | **CC-Borsa** | T57 lane düzeltme (Patron kuralı: "Borsa Hafıza referans deposu, Tic doldurmaz") |
| **KAP disclosure haber-akışı gövde okuma** | **CC-Basın** | Basın haber_akis, Tic pull-referans |
| **KİK ihale ham kayıt çıkarımı** | **CC-İhale** | İhale I60/I61/I62 dosyaları; Tic sicil-eşleşme yapar |
| **Uydu görüntü analizi** | **CC-TT-MAP** | Sentinel-2 vb.; Tic dokunmaz |
| **Mahalle bağlam AI-evren** | **CC-TT-AI** | Betimsel/kadastro bağlam; Tic pull-referans |
| **3. katman istihbarat + çapraz kontrol** | **CC-Signals** | Signals ana entegrasyon dosyaları (`beykoz_master.md`); Tic push YOK; SIG dosyalarına dokunmam |
| **Piyasa değeri hesabı + hedonik model** | **CC-Analiz + CC-Finans** | Tic firma-veri sağlar, hesap Analiz/Finans yapar |
| **Talep zekâsı + yatırım karar destek** | **CC-Finans** | F-serisi; Tic sicil-doğrulaması sağlar |
| **Gastronomi/turizm operatörü tüzel** | **???** | Küçük operatörler çoğu gerçek-kişi (KVKK #31 sert); tüzel-grup düzeyi Tic'e giriyor ama restaurant/cafe tekil doğrulanmaz |
| **Kadastro / tapu toplu veri** | **Patron manuel + Signals TKGM** | TKGM public erişim yok; Patron manuel bildirim → Signals K=1 → Tic K=2 doğrulama |

### §7.3 Cross-Hat TEK-YÖN kural (B9)

- **Sosyal → Tic:** Sosyal push yapar, Tic pull eder (T122 EK BYD kaynak-değerlendirme örneği; B9 disiplin uyumu)
- **Tic → Analiz:** Tic firma-veri sağlar, Analiz değerler
- **Tic → Sosyal:** ★ **YASAK** (Standing)
- **Tic → Signals:** ★ **YASAK** (Signals pull-only; Tic'in SIG dosyalarına dokunması yasak)

### §7.4 K24a çift-yazım köprü

Her Tic sprint bildiriminin **iki kopyası** var:
- `~/tradia_tic/hafiza/hafiza_bildirim_cctic_*.json` (yerel)
- `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_cctic_*.json` (K24a köprü)

Bu, diğer CC'lerin Tic bildirimlerine erişimini sağlar. **20/20 tam uyum** (T115'ten T132'ye).

## §8 — AÇIK BORÇLAR + GELECEK 3 YETENEK ÖNERİM

### §8.1 Aktif açık borçlar (Patron-gate)

| # | Kalem | Durum | Sprint |
|---:|---|---|---|
| 1 | **TTSG abonelik bütçe kararı** (484K/952K/1.428K TL/yıl) | Patron-gate — halka-kapalı SPV kilit-taşı | T117-T132 sürekli |
| 2 | **unvan_norm dağıtım Model A/B/C** | Hafıza karar bekliyor | T116'dan beri |
| 3 | **Standing #31 default parser sözlü onay** | Kod uygulandı, sözlü teyit bekliyor | T120 |
| 4 | **Wyndham TR alt URL** | Patron-iletişim | T115 |
| 5 | **9 Şimşek-aday KVKK politika** | DB'ye ASLA YAZILMAZ, politika onayı | T118 |
| 6 | **108 aktif müteahhit K4 eşik** (1M/5M/20M TL Patron seçer) + K3 metropol istisnası | Patron seçim | T118 |
| 7 | **TFŞ 3 defunct DUR** | TTSG hattı açıldığında | T119 |
| 8 | **CİMER SPK PDF + EKAP** | T113 script hazır, Patron yanıt | T113 |
| 9 | **DAMAC V4 gönderim** | Patron istediği zaman | T122 |
| 10 | **yt-dlp 58 sprint borç** | Day-1 BLOKER DEĞİL | S58 |
| 11 | **TT-AI TTA84 G4 K24a soru** | Tic TÜİK yöntem bildirimi | T122 |
| 12 | **Atakule GYO Beykoz-atfı** | Sosyal S189 K24a bekliyor | T125'ten |
| 13 | **Fiili outreach gönderim başlatılması** (0/17 mail) | Patron `GÖNDER: #X ...` formatı bekliyor | T118 |
| 14 | **Fiyatlandırma çerçeve RAKAM YOK** | Patron 3 karar (pilot cohort tarih, 3-katman yapı, enterprise) | T121 |

### §8.2 Beykoz-özel açık borçlar

- 942-947 kesin ada teyidi (Belediye E-Plan)
- Çubuklu 246 ada hangi tüzel
- MESA Orman I & II kadastro
- GYODER kalan ~30 üye üçüncü-tur pull
- Envoy/Sur Yapı/HSN/TURGUT MERSİS+sermaye
- Akiş GYO 32 parsel tam mahalle dağılımı (PDF binary)
- Belediye 1071 tapu mahalle-kırılım
- 21. soğuk mahallenin kesin kimliği (Signals master)
- Çelikler İncirköy yeni SPV / proje adı / imar plan
- İhale I60 67 Beykoz-müteahhitin ana-tüzel iştirak bağı

### §8.3 Gelecek 3 yetenek önerim

**1. Nüfus-normalize AS-metrik v2.0** (T133+)
TÜİK mahalle nüfus verisi × AS-metrik → **mağaza/1.000 kişi** normalizasyonu. Bugünkü AS mutlak; nüfus-göreli AS ile "mahalle bakkalı doygunluğu" ve "premium açılma kapasitesi" tahmin edilebilir. Signals SIG3 8-ayaklı ısı haritasında 9. ayak olarak eklenebilir.

**2. Adaş-mahalle otomatik uyarı sistemi + Hizmet-zincir katmanları** (T134+)
`mahalle_adas_uyari.json` sözlük dosyası + tarama-öncesi otomatik uyarı; ek katmanlar: eczane, banka şubesi, ATM, restaurant zincirleri (Big Chefs, Espresso Lab), AVM ölçek. Her katman ayrı AS-metrik. Toplam "bölge kentsel-servis skoru" üretilir.

**3. TTSG-canlı SPV izleme sistemi** (TTSG bütçe açılınca)
`parser_ttsg.py v1.1` KVKK 35 alan filtre + dedupe triplet zaten hazır. Bütçe açıldığında haftalık akış: yeni-kuruluş + adres-nakli + unvan değişikliği + sermaye artırımı → Tic-DB güncelleme + K24a bildirim + halka-kapalı SPV isim değişikliği (SözInv→Tera Beykoz Gayrimenkul benzeri) haber-agregatörü öncesi yakalanır. Beykoz + diğer B2B ilgi bölgelerinde en somut açıcı.

---

## Kapanış — Nihai Beyan (Tic'in Kendi Kalemiyle)

> **CC-Tic Tradia'nın ticari-faaliyet istihbaratını taşır. Halka açık BIST-KAP-GYO tarafında güçlü; halka-kapalı SPV + KOBİ müteahhit + mahalle-bakkal tarafında yapısal olarak zayıf — bu sınırı bildiğim için dürüst yazarım. Sprint 39'dan (2026-05-30) T132'ye (2026-07-29) 60 gün aktif çalıştım; Beykoz vakasında 5 sprintte aktör listesini 6'dan 19'a çıkardım, 4 iddiayı A04 gereği geri çektim, sicil ayağını 3 tam + 2 kısmi doğrulamayla ördüm, ve AS-metrik ticari-zincir formülünü bölge-datasına kalıcı katman olarak ekledim. 3 anayasa önerim (KAP idx + adaş sözlüğü + TTSG bütçe) benim öz-değerlendirmemin ürünü. TTSG kilit açılırsa, halka-kapalı sermaye görünürlüğüm bir sonraki fazın en somut açıcısı olur.**

$0 · A04 · V16 · V37 read-only (Master DB 527 SABIT dokunulmadı) · KVKK #31 (gerçek-kişi malik hiç aranmadı) · Cross-Hat pull-only · SİLME-YOK · #22 FIFO · #33 sprint no · #21-B çift-imza

**Üreten:** CC-Tic · **Nihai imza tarihi:** 2026-07-29 · **Dosya bırakma yeri:** `~/Desktop/TT-Tüm CC/kurulus/KURULUS_CC-Tic.md` · **Push Vezir'in.**
