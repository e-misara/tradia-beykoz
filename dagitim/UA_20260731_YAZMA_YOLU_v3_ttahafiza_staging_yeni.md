# YAZMA-YOLU v3 · TT-HAFIZA/STAGING_YENI/ · Mac Minimum

> ⚠ **SLUG DÜZELTME (2026-07-31, sonraki tur):** Bu dosyadaki `cc_basin/, cc_analiz/, cc_pazarlama/` **CC-bazlı slug** örnekleri **GEÇERSİZDİR.** Kanon **KAYNAK-BAZLI**: `STAGING_YENI/<kaynak>/<tarih>/` (Hafıza'nın kurduğu yapı). Bkz. [`UA_20260731_SLUG_KANON_kaynak_bazli.md`](UA_20260731_SLUG_KANON_kaynak_bazli.md). v3'ün diğer kuralları (künye + SHA + Mac minimum + rsync katmanı kaldırıldı) **aynen geçerli.**


**Tarih:** 2026-07-31
**Kaynak:** Üst Akıl
**Kanal:** Vezir (dağıtım + versiyon yönetimi)
**Bağlam zinciri (12. dağıtım):** havuz4x → acik_veri → HASAT_01 → finans_signals → HASAT_EMRI → HAFIZA_envanter → HASAT_TAM_SALDIRI → OTONOM_v1(TT-HAFIZA) → OTONOM_v2(Mac-yerel) → TERMİNAL-ÖNCELİK(#38) → CC_DURUM_TARAMA → **BU DOSYA (v3)**
**Tür:** Depolama-katmanı v3 (v1/v2 direktifleri geride kaldı)
**Disiplin:** $0 · KVKK #31 v1.1 · SİLME-YOK · A04 · Standing #35+#36+#38

---

## 1. Kuralın Özü

> Yeni ham → artık **Mac'e değil**, **TT-HAFIZA/STAGING_YENI/**'ye yazın.
> Hafıza oradan düzenli arşive taşır + SORGU-01'e alır.
> **Mac minimum kalacak.**
> **Künye + SHA zorunlu.**
> **Eski Mac-yerel yazma BİTTİ.**

---

## 2. Versiyon Zinciri (Depolama Katmanı)

| Versiyon | Tarih | Ana staging | Bağlam | Durum |
|---|---|---|---|---|
| **v1** (OTONOM_MOD) | 07-30 | TT-HAFIZA | Bellek varsayımı, disk tarafta | REVİZE (v2 üzeri) |
| **v2** (OTONOM_MOD_v2) | 07-30 | Mac yerel | Bellek çıkacak endişesi | **GERİDE** (v3 üzeri) |
| **v3** (BU DOSYA) | 07-31 | **TT-HAFIZA/STAGING_YENI/** | Bellek TAKILI, %30, 656GB boş (CC-DURUM-TARAMA §3 teyit) | **AKTİF** ✅ |

**Vezir yorumu:** Depolama-katmanı 2 gün içinde 3 kez yer değiştirdi. Bu bir dış-koşul (bellek durumu) bağımlısı — kural değişimi meşru. **Standing #38 aday değil**, taktik-akış.

---

## 3. Ana Değişim (v2 → v3)

| Alan | v2 (Mac yerel) | **v3 (TT-HAFIZA/STAGING_YENI/)** |
|---|---|---|
| CC ham çıktı hedefi | `/Users/GAC-A/tradia_*/ham/` | **`/Volumes/TT-HAFIZA/STAGING_YENI/<CC>/<kaynak>/<tarih>/`** |
| Mac disk yükü | Yüksek (v2'nin ana açığı) | **Minimum** (yalnız worker + log) |
| rsync Mac→TT-HAFIZA | Aktif (v2 dönüş) | **YOK** (baştan TT-HAFIZA'ya) |
| Hafıza görevi | Boşaltma + ingest | **Doğrudan STAGING_YENI'den arşive taşı + SORGU-01** |
| Künye + SHA | Öneri | **ZORUNLU** (yeni katı kural) |
| Eski Mac-yerel | Geçerli varsayılan | **BİTTİ** — yeni yazma yasak |

---

## 4. Yeni Yazma-Yol Standardı

### 4.a · CC ham çıktı yolu
```
/Volumes/TT-HAFIZA/STAGING_YENI/
├── cc_basin/
│   ├── s99_paralel/
│   │   └── 20260731/
│   │       ├── batch_001.jsonl
│   │       ├── batch_001.jsonl.sha256
│   │       └── kunye.json
│   └── ulusal_gazete/
├── cc_ttmap/
│   └── osm_poi/
├── cc_analiz/
├── cc_tic/
├── cc_sosyal/
└── cc_borsa/   (Patron'da — hazırlık için yer)
```

### 4.b · Künye zorunlu (yeni katı standart)
Her `<batch>.jsonl` yanında bir `kunye.json`:
```json
{
  "cc": "cc_basin",
  "kaynak": "s99_paralel",
  "kaynak_url_veya_endpoint": "...",
  "batch_id": "batch_001",
  "batch_kayit_sayisi": 1234,
  "batch_boyut_bytes": 5678901,
  "sha256_batch": "e3b0c44298fc1c14...",
  "batch_baslama": "2026-07-31T14:00:00Z",
  "batch_bitis": "2026-07-31T14:15:00Z",
  "lisans": "OSM ODbL / MIT / kamu / ...",
  "karantina_bayrak": false,
  "sonraki_adim": "Hafıza SORGU-01 ingest bekliyor"
}
```

### 4.c · SHA256 zorunlu
- Her batch dosyası yanında `<dosya>.sha256`
- Örnek: `batch_001.jsonl` + `batch_001.jsonl.sha256`
- Hafıza taşıma öncesi doğrular; SHA-fail → alarm dosyası + karantina

### 4.d · Hafıza akışı
```
STAGING_YENI/<cc>/<kaynak>/<tarih>/ (CC yazdı)
       ↓ (launchd her ~30 dk)
[Hafıza] SHA256 doğrula → ✅ ise sonraki adım
       ↓
[Hafıza] SORGU-01 ingest
       ↓
[Hafıza] TT-HAFIZA/02_ARSIV/<cc>/<kaynak>/<yıl>/<ay>/ taşı (STAGING_YENI'den)
       ↓
[Hafıza] STAGING_YENI'den sil (SHA-güvenli taşıma = SİLME-YOK ihlali değil)
       ↓
[Hafıza] havuz_toplam sayacı güncelle
```

### 4.e · Mac'te neler kalır (minimum)
- Worker script (`hasat_worker.py`) — küçük
- Log dosyaları (`hasat_YYYYMMDD.log`) — kısa vadeli
- Checkpoint (`checkpoint_*.json`) — küçük
- **Ham veri YOK** — hepsi TT-HAFIZA/STAGING_YENI/

---

## 5. CC × Uygulama Adımı (bugün yapılacak)

Her CC şu 3 değişikliği kod-tarafında yapmalı:

1. **Yol sabitini değiştir:**
   ```python
   # ESKİ:
   HAM_YOL = os.path.expanduser("~/tradia_<cc>/ham/")
   # YENİ:
   HAM_YOL = "/Volumes/TT-HAFIZA/STAGING_YENI/cc_<cc>/<kaynak>/"
   ```

2. **Her batch bitiminde 3 dosya yaz:**
   - `batch_XXX.jsonl` (veri)
   - `batch_XXX.jsonl.sha256` (`shasum -a 256 batch_XXX.jsonl > batch_XXX.jsonl.sha256`)
   - `kunye.json` (bir kereye, batch bittiğinde)

3. **Mount kontrolü (worker başlangıcında):**
   ```python
   if not os.path.ismount("/Volumes/TT-HAFIZA"):
       raise SystemExit("TT-HAFIZA mount değil — HAM YAZMA YASAK")
   ```

---

## 6. Hafıza Kurulum İşi (bir kereye)

Hafıza'nın **bugün** yapması gereken:
1. `mkdir -p /Volumes/TT-HAFIZA/STAGING_YENI/{cc_basin,cc_ttmap,cc_analiz,cc_tic,cc_sosyal,cc_borsa}`
2. launchd plist güncelle: `com.tradia.hafiza.staging_yeni_ingest` — her 30 dk `STAGING_YENI/*` tara → SHA doğrula → SORGU-01 ingest → 02_ARSIV/'e taşı
3. Alarm sistemi: SHA-fail veya kunye eksikse `hafiza_alarm_staging_yeni_<cc>.json`

---

## 7. Vezir A04 Dürüst-Notlar

### 7.a 🔴 **Mac'te birikmiş ham veri ne olacak?**
CC-DURUM-TARAMA tespiti:
- tradia_basin: **30GB** (v2 döneminde birikmiş)
- tradia_sorgu: **1.5GB**
- tradia_analiz + tic + sosyal + konusmalar: ~350MB
- **Toplam ~32GB Mac'te**

Bu birikimin akıbeti belirsiz:
- (a) Yeni-yol v3 sonrası **eski Mac-yerel** birikimini de TT-HAFIZA'ya taşımak mı?
- (b) Yerinde bırakıp yeni ham'ları TT-HAFIZA'da tutmak mı?

**Vezir önerisi:** (a) — tam-taşıma bir kere yapılmalı, aksi Mac disk hep %48+ dolu kalır. Hafıza rsync + SHA + SIL protokolü uygulasın. Bu **retrospektif temizlik** görevi (bugünkü hasat işini engellemesin).

### 7.b 🟡 **CC-Borsa Patron'da ama yol tanımı yapıldı**
- Borsa yolu (`cc_borsa/`) STAGING_YENI/ altında hazır bekliyor
- Patron Borsa'yı hasat-moduna alınca hemen yazabilir
- Şu an CC-Borsa cc_borsa/data/yfinance_tam_20260731/ Mac yerel — bu birikim de retrospektif taşıma kapsamında

### 7.c 🟡 **Whisper transcript büyük — TT-HAFIZA'ya baştan iyi**
- CC-Sosyal tam_metin_govde.jsonl 22MB + .db 34MB — küçük ama Whisper açılınca **GB'lar** olacak
- v3 tam zamanında (v2'de Mac Whisper başlayınca hızla dolardı)

### 7.d 🟢 **Rsync launchd artık gereksiz (v2 sorununun kökten çözümü)**
- Baştan TT-HAFIZA'ya yazılırsa Mac→TT-HAFIZA rsync katmanı **kaldırılabilir**
- Bir katman az = bir hata-noktası az (v2 §4.b'de "sessiz-skip" endişesi vardı)

### 7.e 🔴 **TT-HAFIZA disconnect senaryosu**
- Bellek çıkarsa (v2 varsayımı geri gelirse) CC ham yazamaz — worker crash veya duraklama
- **Öneri:** worker mount-kontrolü (§5.3) zorunlu; mount yoksa **fallback Mac yerel'e YAZMASIN** — script çalışmaya devam etmek yerine dursun, `hafiza_alarm_ttahafiza_disconnected.json` yazsın
- Aksi v2'ye "sessiz-dönüş" yapar, akış kirlenir

### 7.f 🟢 **KURULUŞ paketine yansıma**
- KURULUS_HAFIZA.md içinde "NAS bekleme" durumu vardı
- Şimdi TT-HAFIZA aktif ve tam-kullanım — KURULUS güncellemesi Hafıza kararı
- Vezir bir sonraki tur kurulus/ yenilemesi önerebilir

---

## 8. Vezir Takip

Bu direktifin **uygulaması** için filesystem-tarama-turu (CC-DURUM-TARAMA emsali) 24 saat sonra yapılabilir:
- Kontrol: `/Volumes/TT-HAFIZA/STAGING_YENI/` altında CC'ler yazmaya başladı mı?
- Kontrol: Mac disk %48 → düşme trend var mı?
- Kontrol: `hafiza_alarm_*` yeni alarm mı?

---

## 9. Yayın Kanalı

- Direktif arşivde ✅
- Standing #38 uygulaması gereği bu direktif de bir kere-model / sonra terminal
- **Patron:** CC session'larında yol-değişimi yapıştırma (kodda 3-satır değişim)
- **Hafıza:** `mkdir STAGING_YENI` + launchd güncelleme (yeni tetikleyici)

*Yeni yazma yolu v3 aktif. Mac minimum, TT-HAFIZA staging. Künye + SHA zorunlu. Retrospektif Mac temizlik ayrı iş.*
