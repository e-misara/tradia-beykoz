# HASAT-01 · UA → Vezir → CC'ler

**Tarih:** 2026-07-30
**Kaynak:** Üst Akıl
**Kanal:** Vezir (dağıtım + takip)
**Bağlam zinciri:**
- [`UA_20260729_havuz4x_ilk_hamle.md`](UA_20260729_havuz4x_ilk_hamle.md) → 6 kaynak × CC atama (plan)
- [`UA_20260730_acik_veri_hemen_al.md`](UA_20260730_acik_veri_hemen_al.md) → davranışsal disiplin (aday #37)
- **BU DOSYA (HASAT-01):** kaynak sahiplerine somut **hasat emri** (uygulama)
**Disiplin:** $0 · açık-kanal · KVKK #31 v1.1 · A04 · Standing #35+#36

---

## 1. Kuralın Özü

Pazarlama+Tic'in "sıfır-risk" kaynakları — **SAHİPLERİNE HASAT EMRİ.**

Her CC:
1. **İNDİR** (`--depth 1` klonlama, batch-limitli, timeout-bölmeli)
2. **KÜNYELE** (Kaynak Künye Kartı 6-blok — bkz. `UA_20260730_acik_veri_hemen_al.md` §4)
3. **KARANTİNA → KANON** (Hafıza B9 — lisans belirsizse ⚠ karantina)
4. **RAPORLA:** örnek çekim + kayıt sayısı + SHA256

---

## 2. Görev Atama Tablosu

| # | CC | Kaynak | Somut hedef | SLA öneri |
|---|---|---|---|---|
| **A** | **CC-Borsa** | **TCMB-EVDS** | Token al, **tam seri** çek (tarihsel makro/emtia serileri) | 3-5 gün |
| **B** | **CC-Borsa** | **KAP 19-aktör arşiv** | 19 aktörün tarihsel bildirim + finansal tablo arşivi | 5-7 gün |
| **C** | **CC-TT-MAP** | **İBB CKAN 557 set** | 557 açık veri setinin tamamı indirilir (kategori + boyut envanteri) | 7-10 gün |
| **D** | **CC-TT-MAP** | **OSM Overpass TR-geneli POI** | Türkiye POI çekimi; **way-timeout bölünür** (kare-grid batch) | 10-14 gün |
| **E** | **CC-TT-MAP** | **Sentinel Beykoz karo** | Beykoz özel karo indirilir (T-16 Sentinel-2 hattı ile uyumlu) | 3-5 gün |
| **F** | **CC-TT-AI** | **TÜİK Beykoz ilçe + ADNKS** | Beykoz ilçe istatistikleri + Adres Kayıt Sistemi demografi | 5-7 gün |
| **G** | **CC-Analiz** | Yukarısına Analiz katmanı | TÜİK-ADNKS × mahalle çapraz, Beykoz emsalinden ulusal genişletme | TT-AI sonrası |
| **H** | **CC-TT-AI** | **World Bank** | TR ilgili göstergeler (makro + kalkınma) | 3-5 gün |
| **I** | **CC-TT-AI** | **AFAD** | Deprem katalog + afet-metrik | 3-5 gün |

**Toplam: 9 hasat kalemi · 4 aktif CC (Borsa · TT-MAP · TT-AI · Analiz).**

---

## 3. Hasat Batch Kuralları (Vezir teknik-not)

Bu direktif "aç bir tarayıcı, tek klik" değil — **ölçek** var. Her hasat için:

### a) İndirme disiplini
- `curl -O` / `wget --continue` / `git clone --depth 1` — küçük tut
- **Rate-limit** kontrolü: her endpoint'in kendi limitini bul (TCMB-EVDS ~100 req/dk emsal), aşma
- **Timeout bölme:** OSM Overpass'ta TR-geneli tek sorgu 500s+ olabilir — **kare-grid batch** zorunlu (örn 50×50 km hücreler)
- **Checkpoint:** her batch bitince mahalline yaz (kesinti dostu), Vezir #35 disiplini uyarlaması

### b) Depolama
- **Mac disk-bütçesi** kontrolü — `df -h` ilk; büyükse **TT-HAFIZA** external'a yönlendir (T-16 dersi)
- **Ham + parse ayrı klasör:** `ham/<kaynak>/<tarih>/` (indirilmiş) vs `islenmis/<kaynak>/` (temiz)
- **SHA256** her batch için

### c) Künye kartı zorunlu
Her hasat kaleminden **1 künye kartı md** üretilir (bkz. `UA_20260730_acik_veri_hemen_al.md` §4).
Format:
```
kaynak_kunye_<slug>.md
- Kimlik · Kapsam · Erişim · Lisans+Kısıtlar · Sonraki-adım · SHA256
```

### d) Karantina refleksi
- Her hasadın lisansı **ilk kontrol** (README/LICENSE dosyaları)
- Belirsizse ⚠ karantina — kanona geçirmeden BEKLE
- Örnek: KAP bildirimleri BIST-yayınlı, ticari-kullanım için ayrı ToS okuması gerek → potansiyel ⚠

---

## 4. Ortak Rapor Formatı (CC → Vezir)

Her hasat kalemi bittiğinde CC şu şablonla teslim eder (Desktop'a bırakır, Vezir push):

```
hasat_raporu_<CC>_<kaynak>.md

## Kimlik
- Hasat kalemi: (A/B/C/…)
- CC · Kaynak · Başlangıç · Bitiş tarihleri

## Ne yapıldı
- Endpoint · yöntem · batch-sayısı
- Kayıt sayısı · toplam boyut · SHA256

## Örnek çekim
- Küçük ama gerçek bir sorgu → dönen veri (ilk 5 satır / ham JSON snippet)
- Ürete-bilirlik: aynı komut tekrar çalışırsa aynı sonuç?

## Karantina/Kanon durumu
- Lisans: TAM ✅ / BELİRSİZ ⚠
- Hafıza B9 bildirimi: gönderildi/beklemede

## Sonraki-adım
- Bu veri hangi ürüne/sinyale girecek?
- Yenileme protokolü (aylık/anlık/statik)?
```

---

## 5. Vezir Takip Tablosu (canlı — her hasat bittiğinde güncellenecek)

| # | CC | Kaynak | Kayıt sayısı | Boyut | SHA256 | Karantina | Kanon B9 | Tarih | Commit |
|---|---|---|---|---|---|---|---|---|---|
| A | CC-Borsa | TCMB-EVDS (tam seri) | ⏳ | — | — | — | — | — | — |
| B | CC-Borsa | KAP 19-aktör | ⏳ | — | — | — | — | — | — |
| C | CC-TT-MAP | İBB CKAN 557 | ⏳ | — | — | — | — | — | — |
| D | CC-TT-MAP | OSM Overpass TR | ⏳ | — | — | — | — | — | — |
| E | CC-TT-MAP | Sentinel Beykoz | ⏳ | — | — | — | — | — | — |
| F | CC-TT-AI | TÜİK Beykoz+ADNKS | ⏳ | — | — | — | — | — | — |
| G | CC-Analiz | (F üstüne katman) | ⏳ TT-AI sonrası | — | — | — | — | — | — |
| H | CC-TT-AI | World Bank TR | ⏳ | — | — | — | — | — | — |
| I | CC-TT-AI | AFAD | ⏳ | — | — | — | — | — | — |

**⏳ = bekleniyor · ✅ = tamam · ⚠ = karantina · 🔴 = engel**

---

## 6. Riskler (A04 dürüst-negatif)

| Risk | Etki | Karşı-tedbir |
|---|---|---|
| **OSM Overpass TR-geneli timeout** | Sorgu düşer, veri gelmez | Kare-grid batch (§3.a); server-friendly delay |
| **Sentinel indirme kotası** (Copernicus 200/gün) | Kotalanma | Batch küçük tut; T-16 hattı zaten kurulu |
| **KAP ToS ticari-kullanım** | Ürüne katılamaz | Karantina zorunlu, hukuk teyidi (T-16 Mapillary dersi) |
| **İBB CKAN 557 set** = ~10-100+ GB potansiyel | Mac disk taşma | TT-HAFIZA external, ilk `df -h` kontrol |
| **TÜİK PDF/HTML parse zorluğu** | Yapılandırılmamış | TT-AI PDF-parse (Beykoz İ65 dersi) |
| **TCMB-EVDS anahtar sızıntısı** | KVKK dışı ama itibar | `.env` gizli, ASLA commit (Standing #31) |
| **Paralel hasat = ağ boğulması** | Rate-limit çakışması | Şaşırtmalı zamanlama (Borsa gündüz, TT-MAP gece) |

---

## 7. Yayın + Takip

**Bu tur Vezir:**
- Direktifi arşivde ✅
- Takip tablosu §5'te ✅
- Her CC teslim ettikçe Vezir tabloyu güncelleyip push atacak

**Patron sorumluluğu:**
- İlgili CC session'larına (Borsa · TT-MAP · TT-AI · Analiz) bu dosyanın kendi satırlarını yapıştıracak
- CC deliverable'ları Desktop'a bırakınca Vezir devralır

**Hafıza sorumluluğu:**
- B9 kanon-kaydı bloğunu 9 hasat kalemine hazır tutacak
- Karantina alt-bloğu ayrı (KAP + lisans-belirsizler)

*Hasat-01 dağıtım tamam. Vezir masasında takip.*
