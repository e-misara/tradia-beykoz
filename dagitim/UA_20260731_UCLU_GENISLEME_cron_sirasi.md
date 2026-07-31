# ÜÇLÜ-GENİŞLEME + CRON SIRASI · Tic + Analiz + Pazarlama

**Tarih:** 2026-07-31
**Kaynak:** Üst Akıl
**Kanal:** Vezir (dağıtım + cron takvim koordinasyonu)
**Bağlam:** YAZMA-YOLU v3 uygulaması + hasat genişlemesi + DB-lock çakışma önleme
**Bağlam zinciri (13. dağıtım):** ... → YAZMA_YOLU_v3 → **BU DOSYA**
**Disiplin:** $0 · KVKK #31 v1.1 · SİLME-YOK · Standing #35+#36+#38

---

## 1. Kuralın Özü

> Tic + Analiz + Pazarlama: kendi alanınızda **DURMADAN genişleyin**.
> **Aranızda cron sırası kurun** (aynı anda değil, sırayla — disk / DB lock çakışması olmasın).
> Yeni **STAGING_YENI** yoluna yazın.

---

## 2. CC × Görev Tablosu

| CC | Görev | Hedef yol (YAZMA-YOLU v3) | Rapor sayacı |
|---|---|---|---|
| **CC-Tic** | RG İstanbul 39 ilçe TAM → **Türkiye geneli 81 il** (kamulaştırma / imar / 2B / SİT tarihsel). **Adaş-ayrımı zorunlu** (Tic S31 %67 dersi). TÜRKPATENT / MERSİS çözülürse dahil | `/Volumes/TT-HAFIZA/STAGING_YENI/cc_tic/rg_iller/<il>/<tarih>/` (+ turkpatent/, mersis/) | doküman, kayıt, temiz-adaş oranı |
| **CC-Analiz** | TÜİK (Playwright ile **tüm il/ilçe**) + Eurostat/OECD tam + üniversite **OAI-PMH (442K tez potansiyeli — tam hasat)** + akademik açık arşiv | `/Volumes/TT-HAFIZA/STAGING_YENI/cc_analiz/<kaynak>/<tarih>/` | tablo, tez, akademik-doküman |
| **CC-Pazarlama** | GitHub açık-lisans TR veri setleri (emlak / kamu / coğrafi / demografi / seçim) tam tara + klonla · Kaggle token gelince aç · Açık-veri portalları | `/Volumes/TT-HAFIZA/STAGING_YENI/cc_pazarlama/<kaynak>/<tarih>/` | repo, dataset, dosya-adet |

**Ortak zorunlu:** checkpoint + resume + `kunye.json` + `.sha256` (YAZMA-YOLU v3 §4)

---

## 3. Cron Sırası (DB Lock Çakışma Önleme)

**Amaç:** SORGU-01 SQLite'a aynı anda 3 CC ingest yapmasın → WAL var ama okuma-yazma yarışı riski. Zaman-dilimi bölümü:

### 3.a · Saatlik döngü (her CC saatte 1 kez)
```
:00-:19  →  CC-Tic       (hasat + ingest)
:20-:39  →  CC-Analiz    (hasat + ingest)
:40-:59  →  CC-Pazarlama (hasat + ingest)
```

**Vezir yorumu:** Direktifte "**Tic :00, Analiz :20, Analiz :40**" yazılmıştı — Vezir A04-not: **muhtemel yazım hatası**, ikinci "Analiz" → **Pazarlama** olmalı (3 CC × 3 dilim = uyumlu). Bu yorumla ilerledim.

### 3.b · launchd plist önerileri
Her CC için ayrı `.plist`:

**cc_tic:** `com.tradia.cctic.hasat_cron`
```xml
<StartCalendarInterval>
  <dict><key>Minute</key><integer>0</integer></dict>
</StartCalendarInterval>
```

**cc_analiz:** `com.tradia.ccanaliz.hasat_cron`
```xml
<key>Minute</key><integer>20</integer>
```

**cc_pazarlama:** `com.tradia.ccpazarlama.hasat_cron`
```xml
<key>Minute</key><integer>40</integer>
```

Böylece 3 CC saatte 1 kez, birbirlerinden 20 dk aralıklı çalışır.

### 3.c · Alternatif — daha sık (10 dk aralık)
Eğer her CC saatte 3 kez çalışması istenirse:
```
:00 Tic · :10 Analiz · :20 Pazarlama · :30 Tic · :40 Analiz · :50 Pazarlama
```
**Vezir görüşü:** İlk turda saatlik-döngü (§3.a) daha güvenli — WAL çakışma minimum. Yoğunluk gerekirse §3.c'ye geç.

---

## 4. YAZMA-YOLU v3 Uygulama Referansı

Bu direktif YAZMA-YOLU v3 (2026-07-31, `7ed8627`) standardını uyguluyor. Her CC:

1. **Yol sabitleri v3'ten:**
   ```python
   STAGING = "/Volumes/TT-HAFIZA/STAGING_YENI/"
   MY_YOL = f"{STAGING}cc_<name>/<kaynak>/<tarih>/"
   ```
2. **Mount kontrol worker başlangıcında** (v3 §5.3)
3. **Her batch → jsonl + .sha256 + kunye.json** (v3 §4.b/c)
4. **Hafıza launchd `com.tradia.hafiza.staging_yeni_ingest`** taşımayı otomatik yapar (v3 §6)

**Vezir dürüst-not:** Direktifte "Analiz → `STAGING_YENI/ilan/`" ve "Pazarlama → `STAGING_YENI/finans_belge/`" yazmıştı — bunlar v3 standardı (`<cc>/<kaynak>/`) ile tutarsız. Vezir yorumu:
- `STAGING_YENI/ilan/` = **eski isimlendirme kalıntısı**; v3 standardı = `STAGING_YENI/cc_analiz/tuik/`, `cc_analiz/oai_pmh/`, ...
- `STAGING_YENI/finans_belge/` = Pazarlama için yanlış slug; v3 = `STAGING_YENI/cc_pazarlama/github_datasets/`, ...
- **Vezir §2 tablosunda v3-standardını uyguladım** (kaynak-bazlı slug'lar CC'ye göre). Farklı istek varsa netleştirme gerek.

---

## 5. Vezir A04 Dürüst-Notlar

### 5.a 🟡 **Direktifin yazım-hatası (Analiz iki kez)**
- "Tic :00, Analiz :20, Analiz :40" — 3 CC × 3 dilim = doğru mimari, ama isim tekrarı hata
- Vezir yorumu: 3. dilim (`:40`) **Pazarlama**
- Farklı niyet varsa netleştirme gerek

### 5.b 🟡 **Analiz iş yoğun — 3 farklı kaynak (TÜİK + Eurostat/OECD + OAI-PMH 442K tez)**
- Diğer 2 CC'nin (Tic + Pazarlama) 2-3 kaynağı var
- Analiz'e daha uzun-pencere veya paralel-alt-cron gerekebilir
- **Öneri:** Analiz'in 442K tez hasadı özerk-alt-cron olsun (`ccanaliz_oai_pmh` her 30 dk, ingest yalnız :20 dilimde)

### 5.c 🔴 **CC-Pazarlama daha önce cron-hasat yapmamıştı — kurulum yükü**
- KURULUS_CC-TT-Pazarlama'ya bakılırsa şu ana kadar keşif/planlama ağırlıklıydı
- İlk cron kurulumu + GitHub API rate-limit ayarları + Kaggle token bekleme = **saat-cinsi** hazırlık
- Bu direktif "durmadan genişleyin" der ama Pazarlama'nın ilk 12-24 saatte hazırlık modu olacağı kesin

### 5.d 🟡 **TÜRKPATENT/MERSİS "çözülürse"**
- Belirsiz koşul — Tic'in beklediği kaynak seti. Şimdi mi çözüldü henüz mü?
- Vezir: kaynak açık değilse **karantina** (Standing #37 aday) — bekle, açıldığında ekle

### 5.e 🟢 **DB-lock çakışma önleme kural iyi düşünülmüş**
- SQLite WAL modu okuma-yazma aynı anda kaldırır ama uzun-yazma sırasında yeni-yazma bloke olur
- 20 dk buffer = güvenli aralık (Vezir tahmini: ortalama batch-ingest ~2-5 dk)
- **Öneri:** Hafıza tarafında lock-timeout kontrolü (`PRAGMA busy_timeout=30000`) + alarm dosyası (5+ sn bekleme = ⚠)

### 5.f 🟢 **CC-Basın + TT-MAP + Sosyal aynı saat-döngüsünde yok**
- Bu direktif yalnız 3 üretici CC (Tic + Analiz + Pazarlama)
- Basın (S99 akış) ve TT-MAP (POI hasadı) zaten kendi tempolarında çalışıyor — muhtemelen bunlar da SORGU-01'e ingest bekleyecek
- **Öneri (aday):** Genişletilmiş cron: 6 üretici CC × 10 dk dilimler — bir sonraki tur karar (şu an ölçek yeterli değil)

### 5.g 🔴 **442K tez — devasa hasat**
- 442K × ~50KB tez PDF/metadata ≈ **22GB**
- TT-HAFIZA (656GB boş) taşır ✅
- Ama tek-tur hasat aylar sürer — checkpoint zorunluluğu kritik
- **Öneri:** OAI-PMH sadece **metadata** başlangıçta (küçük), tam-PDF hasadı 2. tur karar

---

## 6. Vezir Takip Tablosu (canlı)

| CC | Cron dilimi | STAGING_YENI yolu | Kunye+SHA | İlk-batch tarih | Havuz katkı |
|---|---|---|---|---|---|
| CC-Tic | :00 | `STAGING_YENI/cc_tic/rg_iller/` (+ turkpatent, mersis) | ⏳ | — | — |
| CC-Analiz | :20 | `STAGING_YENI/cc_analiz/tuik/, oai_pmh/, eurostat/, oecd/, akademik/` | ⏳ | — | — |
| CC-Pazarlama | :40 | `STAGING_YENI/cc_pazarlama/github_datasets/, kaggle/, veri_portallari/` | ⏳ | — | — |

---

## 7. Kısa-Yön (Bugün Kurulacaklar)

Her CC ilk 24 saatte:
1. `mkdir -p /Volumes/TT-HAFIZA/STAGING_YENI/cc_<name>/<kaynak>/` (kendi kaynakları için)
2. Hasat worker'ında yol-sabitini v3'e göre değiştir
3. `nohup` yerine artık **launchd plist** (§3.b)
4. İlk-batch: `batch_001.jsonl + .sha256 + kunye.json` — Hafıza launchd'nin görebileceği ilk deneme
5. Vezir'e (Desktop'a) tek-satır: `indirildi · N · STAGING:E`

---

## 8. Yayın Kanalı

- Direktif arşivde ✅
- Vezir alarm ayarlıyor: `/Volumes/TT-HAFIZA/STAGING_YENI/cc_tic|cc_analiz|cc_pazarlama/` altı 24 saat içinde **dolarsa** izle
- Uyarı: Hafıza launchd `staging_yeni_ingest` doğru CC-slug'larını taramalı (yeni CC-Pazarlama slug'u eklendi)

*Üçlü-genişleme dağıtımı arşivde. Cron sırası :00/:20/:40. YAZMA-YOLU v3 uygulanıyor. Analiz iş-yoğun (442K tez), dikkat.*
