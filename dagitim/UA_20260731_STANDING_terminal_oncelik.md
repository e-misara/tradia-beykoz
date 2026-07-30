# UA STANDING-ADAYI — "TERMİNAL-ÖNCELİK"

**Tarih:** 2026-07-31
**Kaynak:** Üst Akıl
**Kanal:** Vezir (arşiv + Standing-aday kaydı)
**Tür:** Standing kural adayı — Vezir öneri: **Standing #38**
**Bağlam:** OTONOM-MOD v2 devamında davranışsal ilke (limit-tasarrufu temeli)
**Bağlam zinciri (10. dağıtım):** havuz4x → acik_veri → HASAT_01 → finans_signals → HASAT_EMRI → HAFIZA_envanter → HASAT_TAM_SALDIRI → OTONOM_MOD_v1 → OTONOM_MOD_v2 → **BU DOSYA**
**Disiplin:** $0 · KVKK #31 v1.1 · A04 · Standing #35+#36

---

## 1. Kuralın Özü (kanonize edilecek metin)

> **TERMİNAL-ÖNCELİK.** Her toplama işi ÖNCE betik (terminal, `nohup`, otonom) — **Üst Akıl / model müdahalesi MİNİMUM.**
> CC'ler indirmeyi kendi başına yürütür, checkpoint'ler dolu, launchd döner.
> Üst Akıl **yalnız KARAR anında** devreye girer (ne indirilecek, bloke nasıl aşılır); rutin hasat / ingest'e karışmaz.
> **Model = akıl · terminal = kepçe.**
> Bu, **limit-tasarrufunun temel kuralıdır.**

---

## 2. "Ne Model · Ne Terminal" Matrisi

| İş türü | Model (UA / Vezir / Chat CC) | Terminal (nohup / launchd / betik) |
|---|---|---|
| **Ne indirilecek** (kaynak seçimi) | ✅ UA | — |
| **Bloke nasıl aşılır** (SPA-fallback, encoding, timeout) | ✅ UA/CC-akıl | — |
| **İndirme (curl/wget/git clone)** | — | ✅ terminal |
| **Batch/loop/parse** | — | ✅ terminal |
| **Checkpoint yazımı** | — | ✅ terminal |
| **Resume kaldığı yerden** | — | ✅ terminal |
| **rsync / staging** | — | ✅ terminal |
| **SORGU-01 ingest** | — | ✅ launchd |
| **Rapor formatı ("indirildi · N · yol · SORGU-01:E")** | — | ✅ terminal (script yazar) |
| **Anomali teşhisi (sessiz-0, hata patterns)** | ✅ UA/CC-akıl | ⚠ launchd alarm dosyası üretir, akıl okur |
| **Kural revizyonu (Standing kanona)** | ✅ UA + Hafıza | — |
| **Dağıtım-notu üretimi (dagitim/)** | ✅ Vezir | — |
| **Git commit + push** | — | ✅ terminal (Vezir tetikler) |

**Ana ilke:** Terminal-mekanik-olan-her-şey ↔ Model-yalnız-karar-anı.

---

## 3. Gerekçe — Neden "Limit-Tasarrufunun Temel Kuralı"?

Anthropic / Claude limit modeli:
- Model çağrısı = **token-bütçe** tüketir (input + output)
- Terminal / launchd çağrısı = **sıfır token**
- 500 satır bir indirme betiğini **model yazarken bir kez** akıl kullanır → sonra 100 gün terminal koşturur ~sıfır maliyetle

**Yanlış kullanım (yasak sonrası):**
- ❌ Model her batch için tetiklenir (10K batch × akıl = limit yakılır)
- ❌ CC-tur her sprint başı model'e "sıradaki ne" sorar (rutin kararı otomatiğe alınmalı)
- ❌ Vezir her hasat tek-satır raporunda push atmak için model çağrısı bekler

**Doğru kullanım:**
- ✅ Bir sefer model tasarlar `hasat_worker.py`, sonra terminal 30 gün koşturur
- ✅ Anomali dosyası (`hafiza_alarm_*.json`) birikir, model **anomali görünce** okur
- ✅ Vezir toplu-push protokolüne (OTONOM_MOD v2 §5) uyar — her tek-satır için model çağrısı YOK

---

## 4. Standing #37 (aday) ile İlişki

- **Standing #37 aday (AÇIK VERİ = HEMEN AL, 07-30):** *"Ne indirilecek"* — davranışsal disiplin
- **Standing #38 aday (TERMİNAL-ÖNCELİK, 07-31):** *"Nasıl indirilecek"* — teknik-mimari disiplini

İkisi **tamamlayıcıdır:**
- #37 CC-akıl anında karar verir (kaynak açık mı, lisans var mı, karantina mı)
- #38 karar verildikten sonra terminal-mekanik yürütür (indir, künyele, ingest, rsync)

---

## 5. CC × Uygulama Notları

| CC | Model müdahalesi (KARAR anları) | Terminal işlem (RUTİN) |
|---|---|---|
| CC-Borsa | Yeni EVDS serisi eklendiğinde, KAP şeması değişince | 26K seri çekimi, mojibake-fix, rate-limit |
| CC-TT-MAP | OSM Overpass timeout stratejisi (ilçe-böl), yeni CKAN kaynağı | POI çekimi, karo indirme, GeoJSON parse |
| CC-Analiz | TÜİK SPA yeni yolu (Playwright hata → çözüm), tablo yorum | Playwright loop, tablo parse, ADNKS-mahalle çapraz |
| CC-Basın | S99 yeni bir ilçe süzülünce, SPA-fallback stratejisi | Motor 7/24 (zaten), tam-metin scrape |
| CC-Tic | RG yeni kategori, EKAP filtre değişimi | KAP disk-okuma, RG çekimi, dedup |
| CC-Sosyal | Whisper kalite tercihi, kanal seçimi | Whisper kuyruk, VTT indirme, transcript ingest |
| CC-Hafıza | Standing revizyon, karantina karar | SORGU-01 ingest, rsync launchd, sayaç, alarm dosyaları |
| **CC-Signals** | **Yalnız sentez** (kaynak üretmiyor) | ⚠ Signals model-yoğun CC — istisna adayı §6.a |
| **CC-Finans** | **Yalnız F-serisi sentez** | ⚠ Finans model-yoğun CC — istisna adayı §6.a |
| **Vezir** | Dağıtım-notu, denetim, çelişki tespit | git fetch/push, README auto-gen, KVKK tarama |

---

## 6. Vezir A04 Dürüst-Notlar

### 6.a 🟡 **İki CC yapısal-istisna: Signals + Finans**
- **CC-Signals:** ARZ→TALEP tezi, ham veri üretmiyor — çıktısı sentez, tamamı model-akıl
- **CC-Finans:** F-serisi sentez, karma girdi — büyük ölçüde model-akıl
- Bu iki CC'de "terminal-öncelik" **kısmen geçerli** (rutin veri-hasadı yok ki terminale atılsın)
- **Öneri:** Kural §5 tablosuna "yapısal-istisna" bloğu (bu iki CC için "her tur model-akıl beklenir")

### 6.b 🟡 **Vezir kendisi model-katmanı**
- Vezir'in üretim işi (bu dosya gibi dağıtım-notları) tamamen model
- Ama Vezir'in mekanik işi (git fetch/push, KVKK grep, README auto-gen) terminal
- **Vezir doğru uygulama:** dağıtım-notunu bir kez üret, sonra terminal push+teyit sürüklesin
- Bu kural Vezir turlarını **1 dağıtım = 1 model tur** disiplinine sokar (bir daha bir daha revize edilmez, karar bir kerede yapılır)

### 6.c 🟢 **Sessiz-0, SPA-fallback, encoding-detect standartları terminal-tarafta**
- Bu üç standart (HASAT-TAM-SALDIRI §4) tam olarak **model-müdahalesiz** çalışacak biçimde tasarlanmalı
- Alarm dosyaları model'e uyum verir; model 24 saat rutinini görmez, sadece anomali özetlerini okur
- Doğru mimari = model bir "denetçi", terminal bir "operatör"

### 6.d 🟢 **OTONOM-MOD v2 ile 100% uyum**
- OTONOM-MOD v2 (fbabe2e) Patron-offline döneminde CC'lerin **kendi başına** çalışmasını tanımlıyor
- Bu kural (#38 aday) o davranışı **kalıcı disiplin** olarak yazıyor — sadece offline değil, her zaman
- İkisi birbirini pekiştirir (v2 taktik, #38 stratejik)

### 6.e 🔴 **"Model = akıl · terminal = kepçe" formülü çok değerli — ders formatına dönüşmeli**
- Bu iki-cümle Standing kanona geçirilirken **öğretici** yapılmalı (yeni CC'ler kurulduğunda ilk-okumadan biri)
- Öneri: Standing v1.12'ye #38 metnini şu formda yaz:
  > **#38 TERMİNAL-ÖNCELİK.** Rutin toplama işi = terminal. Karar anı = model. Model = akıl, terminal = kepçe. Limit-tasarrufu için mekanik-olan-her-şey betikte.

---

## 7. Yayın Kanalı

- Standing-adayı arşivde ✅
- Hafıza kanonize ederse **Standing #38** olur (Vezir öneri)
- Standing #37 (AÇIK VERİ = HEMEN AL) ile birlikte davranışsal-teknik çift-kural oluşturur
- Patron CC session'larında paylaşacak (dağıtım kanalı Vezir → Patron)

*Standing-adayı arşivde. "Model = akıl, terminal = kepçe" — bu iki cümle limit-tasarrufu doktrininin tamamı.*
