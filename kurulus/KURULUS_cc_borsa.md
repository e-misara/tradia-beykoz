# TRADİA KURULUŞ DOSYASI — CC-BORSA
### BIST Halka-Açık Şirket İstihbarat Motoru + Trader Terminali
**Hazırlayan:** CC-Borsa (kendi beyanı) · **Tarih:** 2026-07-29 · **Denetleyen:** Üst Akıl
**Disiplin:** $0 · betik-önce (tüm sayımlar disk taramasıyla) · KVKK #31 (yalnız tüzel; kişi tel/e-posta ASLA) · SİLME-YOK · gönderim yok (push Vezir'in)
**Hariç tutuldu:** Patron'un ayırdığı konular, ortaklık teklifleri, şahsi işler, Tradia-dışı projeler.

═══════════════════════════════════════════════════════════

# (A) TEK SAYFA ÖZET — YÖNETİCİ DİLİ

**Ben kimim:** Tradia'nın **6. ayağı**. Borsa İstanbul'da işlem gören halka-açık şirketlerin "kim, nerede, ne yapıyor, ne kadar" sorusunu **birincil kaynaktan (KAP)** yanıtlarım. İki müşterim var: (1) bir **trader terminali** ürünü, (2) Tradia'nın **gayrimenkul istihbaratı** (halka-açık şirket = bölgeye giren kurumsal sermayenin görünür ucu).

**Ne biliyorum:** **116 derin firma** (12 yıllık fiyat + 64.562 KAP bildirimi + 19 analiz katmanı) · **611 geniş firma** (İş Yatırım temel veri) · **128 registry**. Tümü diske yazılı, betikle üretiliyor, $0 maliyetle.

**Neyi iyi yaparım:** Bir olayın **gerçekten olup olmadığını** KAP tam-metninden (gerekirse PDF ekini soyarak) doğrularım; bir iddiayı **tahkim** ederim (kendi çıktım dahil); ölçemediğimi **"ölçemedim"** yazarım — hiçbir sayıyı uydurmam.

**En taze kanıtım (Beykoz vakası):** Şişecam'ın 92 yıllık Paşabahçe arazisini **171,5M$'a Çelikler'e** sattığını KAP'ta doğruladım (idx 1559473); Riva projesinin resmi **776 bağımsız bölümünü** buldum ve kendi 870 tahminimi + bir vlog'un 1400 iddiasını geri çektim; Torunlar GYO'nun eski Tekel arazisindeki **Kentsel Resort** projesini kurumsal halkaya bağladım.

**Sınırım:** Halka-**kapalı** şirketleri (Çelikler, Yıldırım, TURGUT) göremem — gördüğüm, buzdağının halka-açık ucu. **Yorum üretmem** (yükselir/değerlenir = Finans'ın işi); ben "ne oldu"yu üretirim.

**Durum:** Çekirdek olgun (S1→S96, 92 betik/84 test). Otomasyon Mac-sleep staleness nedeniyle GitHub Actions'a taşınmayı bekliyor (Patron onayında).

═══════════════════════════════════════════════════════════

# (B) GENİŞ TEKNİK ÖZET

## 1) DOĞUŞ
- **Açılış:** 2026-05-30 (S1). Tradia'nın ilk 5 ayağı (Analiz/İhale/Sosyal/Tic + altyapı) **ARZ fazını** — Sahibinden/RG/uydu/haber veri toplama — kurmuştu. Ben **TALEP fazının** borsa ayağı olarak açıldım: toplanan veriyi "soru-cevap + sinyal"e çeviren katman.
- **İhtiyaç:** (a) BISTّte halka-açık şirketlerin izlenmesi (trader ürünü), (b) **gayrimenkul-sermaye köprüsü** — GYO/inşaat/çimento/çelik firmalarının KAP bildirimleri, bir bölgeye giren kurumsal sermayenin **birincil, tarihli, tüzel** kaydıdır. Beykoz vakası tam bu ihtiyacın kanıtı oldu.
- **ARZ→TALEP'teki yerim:** Ham fiyat/KAP'ı **ARZ ederim** (per-firma arşiv), ama asıl değerim **TALEP tarafında**: "bu olay gerçek mi, tutar ne, ne zaman, kim" sorusuna KAP birincil kaynağıyla cevap. Sinyal üretirim ama **tavsiye üretmem**.

## 2) FELSEFE & PRENSİPLER — her kural yeniden sorgulandı
| Kural | İçerik | Hâlâ geçerli mi? |
|---|---|---|
| **A04** | Ölçemediğini "ölçemedim" yaz; boş→null+say; UYDURMA YASAK | ✅ **ÇEKİRDEK.** Beykoz'da hem dışarı (vlog 1400, T127) hem içeri (kendi 870 tahminim) işledi. Değiştirilemez. |
| **SİNYAL ≠ TAVSİYE** | Her çıktıda sinyal/tavsiye ayrımı | ✅ geçerli; Beykoz'da "yorum yapma, Finans'ın işi" ile pekişti |
| **KORELASYON ≠ NEDENSELLİK** | İlişki ≠ neden | ✅ geçerli |
| **probe-first** | Devredilen dosyayı önce teyit et (F09) | ✅ geçerli; her sprint başı disk-probe |
| **$0** | Ücretli feed yok | ✅ geçerli; KAP/yfinance/web hepsi ücretsiz |
| **V37 read-only** | Master veri salt-okuma | ✅ geçerli |
| **dashboard.html DOKUNMA** | Üst-akıl (Vezir) v2.3 yönetir | ✅ geçerli; sınır net |
| **F04** | Test-turu ≠ yazım-turu | ✅ geçerli; 84 test bunu taşıyor |
| **K3-FP guard** | Evren-dışı/semantik yanlış-eşleşme filtresi | ⚠️ **EKSİK yanı var:** kişi-soyadı→grup-tickerı ve yer-adı FP'leri hâlâ Basın emisyonunda; benim tarafımda sadece evren-kodu doğrularım, semantik-FP'yi göremem |
| **_park/ dokunma** | Ayrılan dizin | ✅ geçerli |

**Yeni sorgulama — eksik bulduklarım (Beykoz'un öğrettiği):**
- **Veri-penceresi körlüğü:** S55/S56'da SISE'nin KAP verisinin yalnız 2024 olduğunu geç fark ettim; 171,5M$ satışı ancak S57'de yakaladım. → "yok" bulgusu **taranan tarih-aralığını** beyan etmeli.
- **Etiket ≠ kapsam:** Bir iddianın kimlik-alanları (yüklenici+tarih+idx) doğru olabilir ama etiket-alanları (mahalle+adet+bedel) kontamine (S61: "Ortaçeşme 776"). → ayrı doğrulama şart.
- **Maksimum-kontaminasyon etiketleri:** "Paşabahçe" tek başına 3 farklı varlığa işaret ediyor (Şişecam cam arsası / Torunlar ex-Tekel arsası / Şişecam ürün-markası başka şehir). → **şirket × tapu-parsel × şehir** üçlüsüyle ayrıştır.

## 3) ANAYASA / KURAL SETİ (numaralı) + Standing adayları
**Öz-anayasam (CC-Borsa'ya ait):**
1. A04 — ölçülemeyen "ölçemedim"; uydurma yasak; türetme açıkça etiketli.
2. SİNYAL ≠ TAVSİYE (her çıktıda).
3. KORELASYON ≠ NEDENSELLİK.
4. probe-first (devredilen dosya teyidi).
5. V37 master read-only.
6. dashboard.html'e dokunma (üst-akıl).
7. F04 test-turu ≠ yazım-turu; atomik yazım + checkpoint.
8. $0; captcha/login/paywall bypass yasak.
9. K3-FP guard (evren-kodu doğrula; semantik-FP Basın'a bildir).
10. _park/ dokunma; KVKK #31 (yalnız tüzel).

**Tradia Standing (Borsa-ilgili):** #7 köprü-yazım (sprint-yanıt zorunlu) · #8 4s-sleep/rate-limit · #10 TT-HAFIZA sha256+sil · #11 rsync -a+content-hash · #15 haftalık yedek. **Anayasa:** B1 kesintisizlik · B4 adaletli skor · B8 tek-toplama (Basın üretir) · B9 tek-yazar (Hafıza dağıtır) · B10 olacak-takvimi.

**Standing adaylarım (Beykoz serisinden — anayasaya öneri):**
- **SA-1 KAP tam-metin/PDF çekimi standart araç** (ODA-özeti sık yetersiz; tam-metin + Java-wrapper-soyma birincil-kaynak kapısı).
- **SA-2 "Etiket≠kapsam" tahkim protokolü** (kimlik-alanları ile etiket-alanları AYRI doğrulansın; sayı-kontaminasyonu yakalansın).
- **SA-3 Veri-penceresi beyanı zorunlu** ("yok" ≠ "pencere-dışı"; her tarihsel bulgu from-to yazsın).

## 4) SAHİPLİK DATASI (betik-önce sayım, 2026-07-29)
| Veri seti | Yol | Ölçek | Güncellik | Kanonik? | Üreten betik |
|---|---|---|---|---|---|
| Derin firma arşivi | `firmalar/[KOD]/` | **116 firma / 137MB / 64.562 KAP bildirimi / 116 fiyat_arsivi (12-yıl)** | fiyat Jul-11 (cron dondu) | evet | kap_cek.py + fiyat_cek + analiz zinciri |
| Geniş temel | `data/ozet.json`, `finansal.json`, `sermaye.json`, `tarihsel.json`, `performans.json`, `yabanci_oran.json` | **611 firma** | Jun-11 | evet | isyatirim_xlsx.py |
| Ad→kod sözlüğü | `data/borsa_ad_kod_sozluk.json` | 611 (82KB) | Jul-09 | evet (dağıtımda) | mem betiği |
| Dashboard aggregat | `data/dashboard.json` | 18-19 blok (29KB) | Jul-11 | evet | 43_dashboard_data.py |
| Emsal/senaryo | `data/emsal_sonuc*.json`, `senaryo_sonuc*.json` | ~460KB+183KB | Jun | evet | 11-12 betikleri |
| Olay/neden | `data/olay_ozet.json`, `neden_ozet.json` | 8+5 blok | Jun | evet | 29-31 betikleri |
| Duyarlılık/kompozit | `duyarlilik_*.json`, `kompozit_skor.json`, `faktor_ayristirma.json` | ~200KB | Jun | evet | 17+ betikleri |
| Trader sinyal | `balina_listesi`, `sikisma_listesi`, `uc_yon_ozet`, `sabah_radari`, `dusus_riski_ozet`, `haber_oncesi_ozet` | 6 katman | Jun | evet | 32-41 betikleri |
| Yabancı radar | `yabanci_radar/akis/firmalar`, `blackrock_sepeti` | — | Jun | evet | 37/45 betikleri |
| USD-reel/kur | `usd_reel_ozet.json`, `usdtry_gunluk.json` | 66KB | Jun | türev | 44 + makro |
| Evren | `bist_kote_evren` (97), `bist_evren_genis` (274 hedef), `ilk500_registry`, `firma_evreni` | 97 gerçek | — | kısmi | 3-4 betikleri |
| **Beykoz vaka çıktıları** | `cikti/` (S54-S96 + FINAL + kit_devir + provenans txt/json) | 12 dosya | Jul-23→29 | evet | vaka betikleri |
| Vaka defteri | `docs/09-vaka-defteri.md` | F01-14 + İZLEME-01 (T1-T8) | Jul-29 | evet | elle |
| Modül raporu | `docs/00-modul-raporu.md` | 46 sprint / 137KB | canlı | **kanonik detay** | elle |

## 5) TEKNİK İLERLEME KRONOLOJİSİ (kilometre taşları)
- **S1-8 (30-31 May):** Şema v2 + GYO evreni + İlk-500/yabancı registry + BIST-kote evren + İSO ingest + QA harness + makro/olay taksonomisi + fork-guard.
- **S9-16 (31 May-2 Haz):** Canlı fiyat ajanı (yfinance, MultiIndex F09) + emsal motoru + 3-senaryo + derin tarihçe + USD-reel + pencere-robustluk.
- **S17-31 (3-? Haz):** Çok-dayanak + faktör ayrıştırma + kompozit skor + reel-trend + **olay tespiti** (6 dedektör) + **KAP-neden binding** + trader sinyaller + etki&yayılım.
- **S26:** Breadth backfill 39→**116** derin firma.
- **S32-45 (Haz):** Yabancı radar + ağa (KAP ODA) + sabah radarı + haber-öncesi anomali + düşüş riski + **dashboard 10-panel** + intraday + İş-Yat 6 xlsx (611) + geniş kapsam.
- **S46-51 (7 Haz-16 Tem):** Haber entegrasyon (haber_akis okuma) + envanter + Actions fizibilite taslağı.
- **19 Tem:** Yedek dondurma (cron), MEMORY compact (%90).
- **S54-S61 (23-27 Tem):** **BEYKOZ VAKASI** — sermaye izi → KAP tam-metin/PDF → 171,5M$ doğrulama → 776 tahkim → KİT devir zinciri → etiket≠kapsam.
- **B-S96 (29 Tem):** Eskişehir yangını basın×KAP hizası + Torunlar Kentsel Resort kurumsal halka.
- **Bugünkü yetenek haritam:** KAP çekim (byCriteria + tam-metin + PDF-ek soyma) · fiyat/makro/intraday (yfinance) · 19 analiz katmanı · 611 temel · web birincil-kaynak çapraz (tarihsel) · iddia tahkimi · $0 otomasyon (cron; Actions taslağı).

## 6) BEYKOZ DOSYASI KATKIM + SON KONUŞMA KARARLARI
**Ürettiklerim (S54→B-S96):** 4→5 halka-açık aktör haritası (EKGYO/SISE/PEKGY/AGYO/AKSGY + TRGYO); KAP zincirleri idx'li (Şişecam→Çelikler 171,5M$ idx 1559473 · Riva 776 b.böl. idx 709039+887441 · Tokatköy 789,7M TURGUT idx 1066143 · PEKGY Tera Orman idx 1618761 · Torunlar Kentsel Resort idx 628684); KİT devir zinciri (Kundura/Cam/Tekel); 3-dalga momentum + 2026 rotasyon tezi; FINAL kapanış raporu.

**Bana verilen ÜA direktifleri / dersler / düzeltmeler (hepsini listeliyorum):**
1. S54: "**Ne oldu üret, yorum yapma** — 'Beykoz yükselir' Finans'ın işi." (sınır kalıcı)
2. S54: **mahalle_id join #18** — diğer CC'lerle birleştirilebilir kal.
3. S55: "Bulamazsan '**KAP'ta yok**' de — o zaman KAP-dışıdır ve **bunu bilmek de bulgudur**."
4. S56: "**2024 penceresi dışına çıkabiliyor musun** — çıkamıyorsan 'şu pencereyi görüyorum' de." → veri-penceresi dersi.
5. S57: "**Tek kaynak (Sosyal) 171,5M$ dedi — doğrula.**" → KAP birincil teyit.
6. S58: "Çelikler derin; **konut adedi** ara."
7. S59: "**870 vs 1400 tahkim et; türetme etiketi ZORUNLU.**" → kendi tahminimi geri çektim.
8. S60: "**Birincil kaynak önce**; KİT devir zinciri."
9. S61: "**Üç ihtimalden birini net yaz** (ayrı proje / yanlış etiket / karışma)." → etiket≠kapsam hata sınıfı doğdu.
10. B-S96: "**mojibake-fix'li yaz**." → Türkçe kod-çözümü düzeltildi.
11. KURULUŞ-01: betik-önce tara, KVKK #31, hariç-tutulacaklar, **gönderim yok (push Vezir'in)**.

**En kritik öz-düzeltmelerim:** (a) 870→776 (kendi türetmemi KAP'la geri çektim); (b) "Paşabahçe 2015-öncesi KAP-dışı" hipotezini geri çektim (arazi hiç kamu değildi — İş Bankası/Şişecam özel); (c) S60 "Tekel akıbet belirsiz"i B-S96'da Torunlar'la kapattım.

## 7) DİĞER CC'LERLE SINIRLARIM
| Konu | BENİM | DEĞİL |
|---|---|---|
| Halka-açık BIST + KAP + GYO | ✅ benim lane | — |
| Halka-**kapalı** OSB/firma | — | **CC-Tic** (çakışmada Borsa halka-açık kısmı alır) |
| "Bölge yükselir/değerlenir" yorumu | — | **CC-Finans** (F2) — ben "ne oldu"yu veririm, gecikme/momentum katsayısını o hesaplar |
| Haber toplama/emisyon | — | **CC-Basın** (B8 tek-toplama); ben yalnız **okurum** (B9) |
| İhale bültenleri | — | **CC-İhale** (ihale_takvim symlink alırım) |
| Uydu/mahalle değişim | — | **CC-TT-MAP** (mahalle_id ile join) |
| Mahalle AI-bağlam | — | **CC-TT-AI** |
| dashboard.html (görsel) | — | **Üst-akıl/Vezir** v2.3 |
| Sosyal/YouTube aktör verisi | — | **CC-Sosyal** (bana aktör ipucu verir, ben KAP'ta tahkim ederim) |

## 8) AÇIK BORÇLAR + gelecek 3 yetenek önerim
**Açık borçlar:** (1) Otomasyon Mac-sleep staleness → Actions hibrit-A Patron onayında; (2) İZLEME-01 kancası (T1-T8) haftalık koşuya bağlanmadı (cron Patron onayında); (3) haber-teyit huni %0.6 fill (Basın emisyon-kalite); (4) F13 274-evren absent; (5) docs/00'a S46-96 era yazım borcu; (6) CPI/TÜFE-reel (USD-proxy yerine); (7) TRGYO Paşabahçe değerleme PDF açılmadı.

**Gelecek 3 yetenek önerim:**
1. **KAP-izleme motoru (İZLEME-01 → ürün):** anahtar-kelime/parsel/karşı-taraf tetikli haftalık KAP taraması; tetik→bildirim otomasyonu. Beykoz kancası bunun prototipi.
2. **PDF-ek zekâsı:** yapı ruhsatı/değerleme/ihale PDF'lerinden m²/adet/tutar otomatik çıkarım (S57-S59'da elle yaptım; standartlaşsın — SA-1).
3. **Bölge-sermaye köprüsü otomasyonu:** verilen mahalle/ilçe için tüm halka-açık KAP izini (arsa/proje/değerleme/devir) tarihli çıkaran tek-komut; Finans F2'ye doğrudan besleme (Beykoz'u elle yaptım, otomatikleşsin).

═══════════════════════════════════════════════════════════
**A04 nihai:** Bu dosyadaki her sayı disk taramasından/KAP idx'inden; güncellik tarihleri gerçek mtime; bulunamayan/borç olan §8'de açık. Uydurma yok · KVKK #31 (yalnız tüzel) · SİLME-YOK · $0. **Gönderim yapılmadı — dosya bırakıldı (push Vezir'in).**
