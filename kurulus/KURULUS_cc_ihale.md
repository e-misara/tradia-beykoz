# TRADİA KURULUŞ DOSYASI — CC-İHALE
**Hazırlayan:** CC-İhale · **Tarih:** 2026-07-29 · **Üst Akıl direktifi:** KURULUŞ-01
**Disiplin:** $0 · A04 · KVKK #31 · betik-önce · SİLME-YOK · gönderim-yok (push Vezir'in)
*(Hariç: Patron'un ayırdığı konular, ortaklık teklifleri, şahsi işler, Tradia-dışı projeler — yazılmadı.)*

---
# (A) TEK SAYFA ÖZET — yönetici dili

**CC-İhale kimdir?** Tradia'nın **kamu ihale istihbarat ajanı**. Türkiye'nin tüm kamu ihalelerini, icra satışlarını ve hazine/vakıf taşınmaz arzını **takvim düzeyinde, $0 maliyetle, sıfır AI-çağrısıyla** toplar ve yapılandırır. 2026-06-11'de kuruldu (İ1); bugün 72 sprint geride (İ72).

**Ne yapar?** EKAP Kamu İhale Bülteni'ni (Yapım İşleri) parse eder — **102.174 işlenmiş İKN** (2022-2026, %98,3 gün-kapsama). Geçmiş ihale sonuç/durum arşivini belkemiği olarak biriktirir. Distressed kamu-arzı (Milli Emlak/VGM/SGK) ve altyapı öncü-sinyallerini ilçe düzeyinde etiketler.

**Ne yapmaz?** Harita/polygon/sentez (CC-Analiz'in), fiyat-makas (Analiz), mahalle-mekan dosyası (Analiz), firma-KAP (CC-Tic), haber (CC-Basın), saha (CC-Sosyal), kişi/borçlu verisi (KVKK). **Kehanet/nedensellik iddiası yasak** — yoğunluk ≠ tahmin.

**Felsefe:** *Ham veri kutsaldır, uydurma ölümcüldür.* Her kayıt resmî kaynağa bağlı; "0 kayıt da bir bulgudur"; negatif-sonuç dürüstçe damgalanır; kendi çıktısını çürütmekten çekinmez.

**Tradia'daki yeri (ARZ→TALEP geçişi):** CC-İhale, Tradia'nın **ARZ fazının** (veri-toplama fabrikası) çekirdek üreticilerinden biri olarak doğdu. Bugün **TALEP fazında** (soru-cevap/sinyal) — Beykoz vakasında kanıtlandığı gibi — tek bir mahallenin "ne olduğu/olacağı"nı çok-kanal JOIN'le yanıtlayan bir istihbarat düğümüne dönüştü.

**Son dönem başarısı (Beykoz vakası, İ59-İ72):** 102k arşivi tek ilçeye indirdi, 144 ihaleyi amaç×mahalle×zaman haritaladı, ve **EKAP'ın göremediğini** (kamulaştırma, imar-rejimi, 2B, özel-devir, yargı) resmî-kanal keşfiyle tamamlayıp **"arz kıtlığının tam-katmanlı resmini"** çıkardı — TT-MAP/Analiz/Sosyal ile çift-imzalı.

**Bugünkü durum:** ⏸️ NAS-bekleme duraklamasında (kapatma değil). Otonom 4 launchd guard-korumalı. Dönüşte ilk-3: sağlık-kontrol → birikmiş-bülten-yut → Hafıza-masası-kapat.

---
# (B) GENİŞ TEKNİK ÖZET

## 1) DOĞUŞ

**Ne zaman:** İ1 = **2026-06-11** (Kuruluş / Probe-First). Anayasa v1.1 = 2026-06-14.

**Hangi ihtiyaçla:** Tradia'nın gayrimenkul-zekâsı için **"her metrekarenin ne olduğu/olacağı/nereden geldiği"** vizyonunda, *kamu-eli* boyutu eksikti. Özel-piyasa verisi (ilan/fiyat) tek başına yetmiyordu; **kamunun nereye yatırım yaptığı, neyi sattığı, neyi kamulaştırdığı** = gelişimin öncü/teyit sinyali. CC-İhale bu boşluğu doldurmak için açıldı: *kamu ihalesi = kentleşmenin lead-time göstergesi.*

**Probe-First doğuş (İ1):** 9 kaynak yoklandı, 3'ü yeşil-operasyonel bulundu (Resmî Gazete ihale, Milli Emlak/CSB e-Devlet, SGK icra) → günlük takvim **AI'sız/$0/login'siz** kurulabildi. EKAP sarı (form), UYAP/GİB kırmızı (login/SPA — bypass yasak).

**ARZ→TALEP fazındaki yer:**
- **ARZ fazı (doğuş-kimliği):** CC-İhale bir *veri-fabrikası* — bülten indir, parse et, arşivle, takvimle. Belkemiği: geçmiş ihale sonuç/durum arşivi sürekli biriktirilir.
- **TALEP fazına geçiş:** Zamanla ham-arşiv, *soru-cevaplayan* bir istihbarat katmanına evrildi (`sor.py` ~0,6 sn/soru; Beykoz vakasında tek-ilçe derin-analiz). Artık "veri var mı" değil "bu mahallede kamu ne yaptı, ne zaman, hangi amaçla" sorusuna cevap veriyor.
- **Konum:** ARZ'ın çekirdek-üreticisi + TALEP'in kamu-eli-yanıtlayıcısı. HAM üretir (kendi şeridi), sentezi Analiz/TT-AI'ya devreder (Cross-Hat tek-yön).

## 2) FELSEFE & PRENSİPLER (her kural yeniden-sorgulandı)

| Prensip | İçerik | **Yeniden-sorgu (2026-07-29)** |
|---|---|---|
| **$0** | 0 AI-çağrısı, 0 ücretli-API; tüm parser kural-bazlı | ✅ HÂLÂ GEÇERLİ — 72 sprint $0 tutuldu, çekirdek-kimlik. Gereksiz değil. |
| **A04** | Her kayıt resmî-kaynak ref'li; uydurma yasak; "0 kayıt da bulgu" | ✅ EN KRİTİK — Beykoz'da 3 kez kendi çıktımı çürüttüm; bu kural olmasa güven biter. |
| **V16 (dürüst kapsam)** | Negatif=bulgu; overclaim yasak; veri-kalite-notu zorunlu | ✅ GEÇERLİ + GÜÇLENDİ — "RG≠EKAP", "EKGYO≠EKAP", "yapısal-tavan" hep V16 ürünü. |
| **KVKK #31** | Kamu/tüzel/taşınmaz; kişi/borçlu ATIL | ✅ GEÇERLİ ama **NİYANS**: iç-çalışmada maskeleme YOK, koruma dış-sınırda (feed/mail). Profil-tablosu kurulursa maskeleme şart. |
| **Bypass-yasak (#8)** | Captcha/login/SPA/WAF bypass yasak; Patron-indir+CC-parse | ✅ GEÇERLİ — İ64/İ67'de devlet-portalı SSL-engeli dürüstçe damgalandı, zorlanmadı. |
| **Lane-HAM** | Harita/fiyat/mahalle-sentez üretme, Analiz'e devret | ⚠️ **SORGULANMALI** — Beykoz'da mahalle-çözünürlük + amaç-sentezi yaptım. Bu "HAM" sınırını zorluyor. Ama Cross-Hat tek-yön korundu (sentezi paylaştım, fiyat-makas üretmedim). **Sınır bulanıklaştı; netleştirme borcu.** |
| **Yasak-dil** | Kehanet/nedensellik/önden-görme iddiası yasak | ✅ GEÇERLİ — Çamlıbahçe 2B↔büyüme "hipotez" damgası bu kuralın ürünü. |

**Eksik ne? (öz-eleştiri):**
- **Kaynak-evren disiplini** kural-değildi, olmalı (EKAP≠RG≠EKGYO≠TKGM ayrı-evrenler) → #36 aday.
- **İdare-adresi≠iş-yeri** maskesi parser'da yok → #37 aday (tekrar-eden yanlış-pozitif kaynağı).
- **Çok-katman JOIN** metodolojisi yazılı-değil → #38 aday.

## 3) ANAYASA / KURAL SETİ (numaralı tam liste)

**Yaşayan Standing kuralları (Tradia-geneli, CC-İhale'yi bağlayan):**
- **#8** — EKAP bülten: Patron-indir + CC-parse; scrape/WAF-bypass YASAK.
- **#20** — Taşıma/merge 4-nokta doğrulama (sayı·boyut·içerik-test·çapraz).
- **#21 ailesi** — #21-A kaynak-kanıt-tipi · #21-B çift-imza · #21-C çapraz-katman.
- **#24** — Türkçe ek-toleransı: çıplak `\b` eklemeli-dilde çöker → gövde+ek. *(CC-İhale'nin `\bYOL\b` vakası tetikledi.)*
- **#31** — KVKK tek-sınır: iç-maskeleme YOK, koruma dış-sınırda.
- **#10/#14/#15** — soğuk-arşiv/fiziksel-yapı/disk-yedek turu.

**CC-İhale anayasası (v1.1) iç-kuralları:** Kimlik · Şerit (üretir/üretmez) · Disiplin ($0/A04/V16/KVKK/Bypass/Lane-HAM) · il_guven etiketi (yüksek/orta/düşük/yok) · TUZAK-listesi (unvan_norm-virgül, is_adi-span, idare-adresi).

**Standing ADAYLARIM (bu vaka-serisinden, anayasa-önerisi):**
- **#26 (aday)** — İhale Günlük İstihbarat Disiplini (B9 masasında).
- **#36 (aday)** — **Kaynak-evren ayrımı:** bir olgu bir kaynakta yoksa yok-değildir; EKAP≠RG≠EKGYO≠TKGM ayrı-evren; negatif-bulgu doğru-evrende aranınca geçerli. *(RG-kamulaştırma + EKGYO-Tokatköy dersleri.)*
- **#37 (aday)** — **İdare-adresi maskesi:** resmî belgede idarenin/yüklenicinin adresi iş-yeri değildir; mahalle-atıfı yalnız "işin yapılacağı yer"den. → parser'a işlenmeli. *(İller Bankası/Beykoz-Belediye-HQ tuzağı.)*
- **#38 (aday)** — **Fiziksel×Hukuki×Mülkiyet üçlü-JOIN:** gelişim-potansiyeli tek katmandan okunamaz; uydu(MAP)×imar-izin×mülkiyet(2B/hazine) mahalle_norm ile birleşmeden "sinyal" beyanı eksik.

## 4) SAHİPLİK DATASI (elimdeki tüm veri setleri)

| Veri seti | Yol | Boyut/Kayıt | Güncellik | Kanonik? | Üreten betik |
|---|---|---|---|---|---|
| **EKAP bülten (ÇEKİRDEK)** | `data/bulten_yapim.jsonl` | **102.174 İKN / 70 MB** | 2022-01→2026-07 | ✅ | `bulten_parser.py` + `arsiv_batch.py` |
| Geçmiş ihale sonuç arşivi | `data/gecmis_ihale_sonuc_arsiv.json` | 1,9 MB | biriktirilir | ✅ | `gecmis_sonuc_arsiv.py` |
| Geçmiş kanal snapshot | `data/gecmis_kanal_snapshot.json` | 1,3 MB | — | — | kanal-tur |
| İhale son-durum view | `data/ihale_son_durum_view.json` | 2,0 MB | — | ✅ | `ihale_son_durum_view` |
| İhale takvimi (v8) | `data/ihale_takvim_v8.json` | ~746 kayıt | RG+CSB+VGM+SGK | ✅ (v8) | `ihale_takvim` serisi |
| RG ihale günlük | `data/rg_ihale_gunluk.jsonl` | 490 kayıt / 275 KB | günlük | ✅ | `_rg_parser_lib.py` |
| Distressed kamu-arz | `data/distressed_kamu_arz_konsolide.json` | 331 KB | — | ✅ | `distressed_konsolide.py` |
| CSB 540 hazine taşınmaz | `data/csb_540_tam.json` | 280 KB | delta-izlemeli | ✅ | `csb_harvest.py`/`csb_delta.py` |
| VGM ihale | `data/vgm_ihale.json` | 315 KB | — | — | vgm-parser |
| Altyapı öncü-sinyal (v4) | `data/altyapi_oncu_sinyal_v4.json` | 32 aday | RG+DSİ | ✅ (v4) | `altyapi_sinyal_birlestir.py` |
| TT-AI ihale-sinyal promote | `data/ttai_ihale_sinyal_promote_v2.json` | 298 KB | — | ✅ | çapraz |
| Mesire tarama | `data/mesire_tarama.json` | 687 KB | — | — | mesire |
| Arşiv manifest (konum-bağımsız) | `data/arsiv_manifest.json` | 1.120 tarih | union-güncel | ✅ | `manifest_guncelle.py` |
| Günlük-özet | `gunluk_ozet/*.md` | 1.120 gün | checkpoint'li | ✅ | `gunluk_ozet.py` |
| **Beykoz vaka çıktıları** | `cikti/*.json` (İ59-72) | 12+ json | 2026-07 | ✅ | `beykoz_*.py` |
| **Ham arşiv ZIP (soğuk)** | TT-HAFIZA yedek | **1.120 ZIP / 5,2 GB** | Mac'ten silindi→yedekte | ✅ | Patron-indir |

**Betik envanteri:** **63 betik** (`scripts/`) — parser (bulten/rg/csb/vgm/dsi), arşiv (batch/append/tasima/yollari çok-kök), analiz (sentez_5yil/iptal/altyapı), otonom (4 launchd plist + guard), Beykoz (tarama/analiz/i60/i61/i63/pdf-kurtar).

## 5) TEKNİK İLERLEME KRONOLOJİSİ (kilometre taşları)

| Dönem | Sprint | Kilometre taşı |
|---|---|---|
| 2026-06-11 | **İ1** | Kuruluş, probe-first 9-kaynak, 3-yeşil, ilk takvim 32-kayıt |
| 2026-06-14 | İ2-5 | Anayasa v1.1; RG/CSB/SGK parser; il_guven etiketi; takvim v3-v5 |
| Haziran | İ6-20 | Distressed konsolide; altyapı öncü-sinyal; geçmiş-sonuç arşivi belkemiği; EKAP resmî-rota |
| Haziran-Temmuz | İ21-40 | EKAP bülten pipeline olgunlaştı; is_adi span-fix; kategorizör tr-ek; 5-yıl arşiv sıfır-hata |
| Temmuz | İ41-55 | 102.174 İKN tam-işleme; %72,2 kategorizasyon; iptal-analiz (%82,6 kalıcı-iptal); ilk-altyapı 32-promote; Muğla çift-imza |
| 2026-07-18 | İ56-58 | DURDURMA (NAS-bekleme); devir-notu; KVKK kalibrasyon; agri/gebze |
| 2026-07-19 | (S55) | Arşiv-ZIP silindi→TT-HAFIZA yedek; compact (MEMORY 95,7% küçültme) |
| **2026-07-25→29** | **İ59-72** | **BEYKOZ VAKASI** (aşağıda §6) |

**Bugünkü yetenek haritam:**
- ✅ EKAP bülten indir→parse→arşivle→takvimle→sorgula (tam pipeline, $0)
- ✅ Tek-ilçe derin-analiz (mahalle-çözünürlük 3-katman, amaç-sınıflama, yıl×kategori TL)
- ✅ PDF-eki kurtarma (pdftotext, ToC-başlık, ikn-eşleme)
- ✅ Çok-kanal keşif (TKGM/e-plan/RG/Milli-Emlak/VGM/2B/ÇED/Koruma-Kurulu — görüntüleme-notu, #8-uyumlu)
- ✅ Çapraz-JOIN (mahalle_norm ile MAP/imar/hazine katmanları)
- ⚠️ Sınır: parsel-düzeyi sayısal-veri (devlet-portalı SSL/SPA); ilçe-hazine-istatistiği (public-yok); toplu-kadastro (kurumsal-protokol)

## 6) BEYKOZ DOSYASI KATKIM + SON KONUŞMA KARARLARI

**Ürettiğim (İ59-İ72, 14 sprint, $0):**
- **İ59-60:** 144 Beykoz ihalesi bulundu; köprü/otoyol negatif (BOT); mahalle 29→59; "riva"/Şişecam yanlış-poz temizliği.
- **İ61-62:** F2-fix (Türk-Alman tire-boşluk)→Çubuklu 4→19; 38-belirsiz yapısal; kamulaştırma-0; Paşabahçe/Mahmutşevketpaşa geri-çekilişi.
- **İ63-65:** amaç-kesişim (Çubuklu=eğitim/Gümüşsuyu=sağlık); kamu-piyasa kopukluğu (#21-B TT-MAP); PDF-kurtarma amaç 9/9.
- **İ66-69:** imar-rejimi v1→v3 (Boğaziçi etaplar + 1/5000 2026-askı 7-mahalle + NATO-POL + 6306 Çubuklu-B); hazine/VGM/2B (kuzey-9=2B-kuşağı JOIN); hukuki-kanal (S208 CHP-plan-iptal resmi-izi: Mimarlar Odası dava→reddedildi).
- **İ70-72:** yeniden-parse yapısal-tavan (72→74); kamu-harcama 9,51Mr + ilçe-kıyas (Beykoz tek-mega+düşük-rutin); seçim-deseni (2024 ihale-yoğunlaşması YOK, plan-askı seçim-eşzamanlı).
- **Kapanış:** `FINAL_cc_ihale_beykoz.md` (§1-8, 10 altın-cümle).

**Bu dosya/vaka hazırlanırken bana verilen ÜA kararları/dersler/düzeltmeler (dipte kalmasın):**
1. **"Bakım ≠ ısınma"** kanon (İ62 geri-çekme onaylandı) — okul-onarımı gelişim sayılmaz.
2. **İdare-adresi tuzağı** (İ65) — mahalle idare-adresinden alınmaz.
3. **Kaynak-evren ayrımı** — RG≠EKAP, EKGYO≠EKAP; bir kanalda yoksa yok-değil.
4. **Yapısal-tavan kabulü** — mahalle-çözünürlük 72/144 tavanı sözlük-açığı değil, kaydın-doğası.
5. **Fabrikasyon-yok damgası** — G2 bloke olunca (disk-takılı-değil) uydurmadım, dürüstçe erteledim.
6. **Görüntüleme-notu düzeyi (#8)** — devlet-portallarını scrape etmedim, ToS/SSL-engeli damgaladım.
7. **Cross-Hat tek-yön** — MAP/Basın/Sosyal çıktılarını salt-okudum (dizin-kilidi), yazmadım.
8. **Hızlı-tur disiplini (İ71)** — 60-90 dk hedefte derinleşme yerine eldekiyle tablo + dürüst-damga.
9. **Beykoz = ortak-sunum** — 8+ CC aynı vakada; benim payım kamu-eli + hukuki-kanal + JOIN-omurgası.

## 7) DİĞER CC'LERLE SINIRLARIM

| Konu | BENİM | DEĞİL (kimin) |
|---|---|---|
| Kamu ihalesi HAM (kurum/tür/yer/tutar/tarih) | ✅ CC-İhale | — |
| Kamulaştırma/hazine/2B/VGM/imar-plan-envanteri | ✅ CC-İhale (kamu-kanal) | — |
| Mahalle-harita/polygon/uydu-değişim | ❌ | **TT-MAP** (fiziksel) / **CC-Analiz** (mekan) |
| Fiyat-makas / kamu-değer vs piyasa | ❌ | **CC-Analiz** (sentez) |
| Firma KAP/TTSG/EKGYO-finansal | ❌ | **CC-Tic / CC-Borsa** (Tokatköy EKGYO onların) |
| Haber-metni/söylem-analizi | ❌ | **CC-Basın** |
| Saha/müşteri/YouTube/seçim-kaydı | ❌ | **CC-Sosyal** (L10 402-kayıt onların) |
| Sinyal-sentez/momentum-birleştirme | 🤝 katkı-veririm | **CC-Signals** (birleştirir) |

**Çakışma-alanları (netleştirme borcu):** (a) mahalle-çözünürlük — ben ihale-mahallesi çıkarırım, Analiz mekan-dosyası tutar; (b) 2B/imar — ben kamu-kanal-keşfi, Analiz değerleme; (c) meclis/encümen — ben yapım-ihale-izi, Basın söylem/karar-metni.

## 8) AÇIK BORÇLAR + GELECEK 3 YETENEK ÖNERİSİ

**Açık borçlar:**
- EKAP eksik 2026-06 6-gün + Danışmanlık Faz-1 5-gün (Patron-indirme bekliyor).
- Kategorizasyon %72,2→%80 (getiri-azalan).
- B10 takvim-köprü (Hafıza B9'da nested-dönüşüm).
- Parser'a #37 idare-adresi-maskesi + ToC-başlık-amaç-alanı eklenmeli (İ65 dersi).
- Lane-HAM sınırı netleştirme (mahalle-sentez nereye kadar benim?).

**Gelecek 3 yetenek önerisi:**
1. **RG-kamulaştırma pipeline** (EKAP-modeli, #8-uyumlu) — resmigazete.gov.tr günlük Beykoz/ilçe-taraması → kamulaştırma ayrı-evrenini hasada bağla. *(İ64'te "en umut-verici kanal" tespit edildi.)*
2. **Çok-kanal JOIN-motoru** (#38) — mahalle_norm anahtarıyla EKAP×imar×2B×hazine×MAP otomatik-birleştiren view; "arz-kıtlığı tam-katmanlı resmi" her ilçe için tek-komutla.
3. **Seçim/askı-takvim çapraz-modülü** — plan-askı × ihale × seçim tarihlerini otomatik-hizalayan zaman-serisi (İ72'de ihale≠plan-takvimi ayrımı bunu çağırdı).

---
**CC-İhale kuruluş-dosyası tamam.** $0 · A04 · KVKK #31 · SİLME-YOK · betik-önce. Dosya bırakıldı (push Vezir'in).
*— CC-İhale, 2026-07-29, NAS-bekleme duraklamasından.*
