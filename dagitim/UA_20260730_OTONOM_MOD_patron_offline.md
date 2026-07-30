# OTONOM-MOD · Patron Offline · Tüm CC Kendi Ayağında

**Tarih:** 2026-07-30
**Kaynak:** Üst Akıl
**Kanal:** Vezir (dağıtım + dönüş-protokol köprüsü)
**Bağlam:** Patron uzun süre offline (bellek çıkacak). HASAT-TAM-SALDIRI devam ederken hasat kaybı olmasın.
**Bağlam zinciri (8. dağıtım):** havuz4x → acik_veri → HASAT_01 → finans_signals → HASAT_EMRI → HAFIZA_envanter_kapaniyor → HASAT_TAM_SALDIRI → **BU DOSYA**
**Disiplin:** $0 · SESSİZ-0 YASAK · SPA-fallback · SİLME-YOK · KVKK #31 v1.1 · A04 · Standing #35+#36

---

## 1. Kuralın Özü

> Patron uzun süre offline (bellek çıkacak). Tüm CC'ler **OTONOM moda** geçsin.
> **Kapanma = veri kaybı değil, duraklama.** Açılınca kaldığı yerden.

Beş standart:
1. Hasatlar `nohup + checkpoint + resume`
2. Yeni ham → **TT-HAFIZA staging** (Mac'e yığma yok)
3. builder ingest + rsync **launchd** ile periyodik
4. **Sessiz-0 · SPA-fallback · encoding-detect** standartları **AÇIK**
5. Her CC kendi checkpoint'ini yazsın — "kaldığım yer: X" tek satır

---

## 2. Otonom Mimari — 3 Katman

### Katman 1 — Hasat işçileri (CC-tarafı)
```
CC hasatları nohup ile background:
  nohup python hasat_worker.py > hasat_YYYYMMDD.log 2>&1 &
  echo $! > hasat.pid
```
Checkpoint yazımı ~1-5 dakikada bir:
```json
// checkpoint_<kaynak>.json
{
  "sprint": "hasat_20260730",
  "kalinan_yer": "OSM il 45/81, ilçe 12/47",
  "islenen_kayit": 284712,
  "sha256_batch_son": "...",
  "guncelleme": "2026-07-30T22:14:00Z"
}
```
Resume protokolü: her worker başlangıçta `checkpoint_*.json` okur, kaldığı ilden devam eder.

### Katman 2 — Depolama akışı
```
CC ham çıktı → /Users/GAC-A/tradia_*/ham/  →  rsync  →  TT-HAFIZA/staging/
                                              (launchd, ~4-6 saat)
Mac disk kısıtı → TT-HAFIZA staging her seferinde kopya (silme SONRA, Patron onayı)
```

### Katman 3 — Otomatik ingest (Hafıza)
```
launchd plist: com.tradia.hafiza.sorgu01_ingest
  arg: her ~30 dk çalış
  eylem: yeni-hasat-dosyalarını tara, SORGU-01 tabana ekle,
         havuz_toplam sayacı güncelle,
         hafiza_bildirim_havuz_toplam.json yaz
```

---

## 3. CC × Otonom-Kurulum Tablosu

| CC | Hasat worker (nohup) | Checkpoint dosyası | launchd (varsa) | Rapor dosyası (Vezir dönüş için) |
|---|---|---|---|---|
| CC-Borsa | evds_worker.py · kap_worker.py | `~/tradia_borsa/checkpoint_evds.json` · `checkpoint_kap.json` | opsiyonel (rate-limit friendly) | `~/tradia_borsa/durum_otonom.md` |
| CC-TT-MAP | osm_worker.py · ckan_worker.py | `~/tt_map/checkpoint_osm.json` · `checkpoint_ckan.json` | opsiyonel | `~/tt_map/durum_otonom.md` |
| CC-Analiz | tuik_worker.py (Playwright) | `~/tradia_analiz/checkpoint_tuik.json` | — | `~/tradia_analiz/durum_otonom.md` |
| CC-Basın | basin_worker.py (SPA-fallback) | `~/tradia_basin/checkpoint_basin.json` (ilçe-bazlı) | zaten var (motor 7/24) | `~/tradia_basin/durum_otonom.md` |
| CC-Tic | rg_worker.py · ekap_worker.py | `~/tradia_tic/checkpoint_rg.json` · `checkpoint_ekap.json` | — | `~/tradia_tic/durum_otonom.md` |
| CC-Sosyal | whisper_kuyruk_worker.py · altyazi_worker.py | `~/tradia_sosyal/checkpoint_whisper.json` · `checkpoint_altyazi.json` | zaten var (GNDT 03:45+13:00) | `~/tradia_sosyal/durum_otonom.md` |
| CC-Hafıza | ingest_worker.py + rsync_worker.py | `~/tradia_konusmalar/checkpoint_ingest.json` | **MECBURİ** — 30dk ingest + 4-6sa rsync | `~/tradia_konusmalar/durum_otonom.md` |

---

## 4. Vezir'in Otonom Karşılığı — Dürüst Sınır ⚠

**Vezir OTONOM DEĞİL.** Session-bağımlı role sahibim; Patron olmadan çalışmıyorum. **Bu bir yapısal boşluktur.**

**Offline döneminde neler olur:**
- ✅ CC hasat worker'ları (nohup) çalışır — Mac uyanık kaldığı sürece
- ✅ launchd cron'lar tetiklenir (pmset koşuluyla — bkz. §6 uyarı)
- ✅ Ham veri TT-HAFIZA staging'e akar
- ✅ Hafıza SORGU-01 sayacını canlı tutar
- 🔴 **Repo'ya push OLMAZ** — Vezir Patron'un tetiklemesini bekler
- 🔴 **HASAT-TAM-SALDIRI §5 takip tablosu güncellenmez** — Patron dönene kadar canlı skor bende yok

**Sonuç:** Ham veri Mac/TT-HAFIZA'da birikir, `tradia-beykoz` public repo'sunda offline dönemde ilerleme görünmez. Patron dönüp Vezir'i tetiklediği anda **toplu-push** ile skor güncellenir.

---

## 5. Patron Dönüş Protokolü (Vezir → Patron ilk-mesaj şablonu)

Patron bellek takıp Vezir'i tetiklediğinde, **Vezir tek-tur** şu adımları atar:

### Adım 1 — Envanter tara (~2 dk)
```
- Standing #35 fetch (uzakta bir şey oldu mu?)
- Desktop'a taranmış her `durum_otonom.md` topla
- `~/tradia_konusmalar/hafiza_bildirim_havuz_toplam.json` oku
- SORGU-01 canlı sayacı kaydet
```

### Adım 2 — Toplu-durum raporu (tek dosya)
```
dagitim/OTONOM_DONUS_<YYYYMMDD>.md üret:
  ## Sayaç
  - Baz (offline öncesi): 165K
  - Şimdi: <N>K
  - Δ: +<N>K (%)

  ## CC Durumu (7 satır)
  - CC-Borsa: kaldığım yer = <checkpoint özeti>
  - ...

  ## Anomaliler
  - Sessiz-0 vakaları
  - Checkpoint kırıkları (varsa)
  - Disk-taşma uyarıları

  ## Sonraki-Adım
  - Toplu-push tetiği (HASAT-TAM-SALDIRI §5 12+ satır update)
  - Yeni direktif bekleyen mi?
```

### Adım 3 — Toplu push
Tüm birikmiş hasat çıktıları + `OTONOM_DONUS_*.md` + HASAT-TAM-SALDIRI §5 tablosu güncelle → tek commit push.

### Adım 4 — Havuz-4× canlı KPI
Patron'a **tek-satır özet:**
```
Havuz: 165K → <N>K (%<x>) · Δ +<N>K · aktif hasat: <n>/12 · sessiz-0: <n> · disk: OK/UYARI
```

---

## 6. Vezir A04 Dürüst-Notlar (Kritik uyarılar)

### 6.a 🔴 **launchd Mac-uyku dersi (MEMORY.md tespiti)**
- TTA79'da (2026-07-13) `com.tradia.ttai.fabrika` cron **KOŞMADI** çünkü Mac uykuya girmişti
- **Zorunlu:** `pmset` ile keep-alive **veya** UPS/güç-kaynağı senaryosu
- Aksi otonom mod = illüzyon (cron kâğıt-üstünde çalışıyor, gerçekte uyuyor)

### 6.b 🔴 **TT-HAFIZA disk durumu belirsiz**
- KURULUS_HAFIZA'da "NAS bekleme" durumu vardı
- HASAT-TAM-SALDIRI'da "disk takılıyor" ifadesi — external SSD/HDD?
- **Teyit gerekli:** offline dönemde TT-HAFIZA hangi disk, kapasitesi ne, mount-point sabit mi?
- Yanlış varsayım = ham veri Mac'e yığılır → disk taşar → hasat durur

### 6.c 🟡 **CC-Tic uyandırma-devir**
- T122 uykuda idi, bu direktif "otonom" diyor ama önce **uyandırma** lazım
- Uyandırma = manuel (Patron tur), otonom değil
- CC-Tic bu direktifin ilk turunda dahil OLMAYABİLİR

### 6.d 🟡 **Sessiz-0 alarm mekanizması**
- "Sessiz-0 YASAK" kuralı iyi ama tespit mekanizması ne?
- Öneri: Hafıza ingest sırasında 0-satır dosya gördüğünde `hafiza_alarm_sessiz0_<CC>.json` yazar
- Vezir dönüşte bunları özet olarak Patron'a ilk-mesajda listeler

### 6.e 🟡 **Whisper otonom kuyruk yeni**
- CC-Sosyal'de yeni bir mekanizma
- **Test edilmemiş otonom** = kırık ihtimali yüksek
- Öneri: ilk 24 saat kısıtlı-kuyruk (10 video max), sonra tam-aç

### 6.f 🟢 **Signals + Finans bu direktifte YOK**
- İkisi de ham-hasat üretmiyor (Signals sentez, Finans karma)
- Otonom-mod hasat odaklı, doğal olarak dışarıda
- Ama offline dönemde eski çıktıları güncellenmez — Patron dönüşte Signals/Finans re-run manuel

### 6.g 🟢 **Vezir öz-eleştiri**
- Ben session-bağımlıyım, otonom değilim
- **Uzun vadede:** GitHub Actions cron ile Vezir'in bir "toplu-push scriptini" tetiklemesi düşünülebilir
- Ama bu Patron kararı, ayrı bir kurulum turu

---

## 7. Vezir Takip Tablosu (Offline sonrası doldurulacak)

| CC | Checkpoint | Havuz katkı | Sessiz-0 | Disk durumu | Anomali |
|---|---|---|---|---|---|
| CC-Borsa | ⏳ | — | — | — | — |
| CC-TT-MAP | ⏳ | — | — | — | — |
| CC-Analiz | ⏳ | — | — | — | — |
| CC-Basın | ⏳ | — | — | — | — |
| CC-Tic | ⏳ (uyanıksa) | — | — | — | — |
| CC-Sosyal | ⏳ | — | — | — | — |
| CC-Hafıza | ⏳ | havuz sayacı | — | rsync durumu | — |

---

## 8. Kısa-Yön Özeti

**Offline'a girmeden yapılması gereken (bu direktifin bugün getirdiği):**
1. Her CC otonom-worker'ı `nohup` başlatır (checkpoint ilk-yazım)
2. Hafıza launchd ingest + rsync **doğrular** (pmset uyanık-kalıcı)
3. TT-HAFIZA disk mount-point + kapasite teyit
4. `durum_otonom.md` her CC için başlangıç-satırı yazar

**Offline döneminde:**
- CC'ler otonom hasat (Mac uyanık + launchd + nohup)
- Vezir uykuda (session-bağımlı)
- Repo'da ilerleme görünmez

**Patron dönünce (Vezir tetiklendiği an):**
- §5 protokolü → `OTONOM_DONUS_<tarih>.md` + toplu-push + tek-satır özet

*Otonom-mod dağıtımı arşivde. Patron gitmeden §8 kısa-yön uygulanmalı — aksi checkpoint yazılmaz, resume başarısız olur.*
