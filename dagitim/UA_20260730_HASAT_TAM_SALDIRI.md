# HASAT-TAM-SALDIRI · Anahtar Geldi, Disk Takılıyor

**Tarih:** 2026-07-30
**Kaynak:** Üst Akıl
**Kanal:** Vezir (dağıtım + takip + sayaç köprüsü)
**Bağlam zinciri:**
- `UA_20260729_havuz4x_ilk_hamle.md` — plan
- `UA_20260730_acik_veri_hemen_al.md` — davranışsal disiplin (aday #37)
- `UA_20260730_HASAT_01_sifir_risk_hasadi.md` — 9 kalem × 4 CC
- `UA_20260730_finans_signals_kaynak_metadata.md` — 2 CC envanter boşluk
- `UA_20260730_HASAT_EMRI_kesif_bitti.md` — 12 kalem × 6 CC, sertleşme, günlük SLA
- `UA_20260730_HAFIZA_envanter_turu_kapaniyor.md` — Hafıza rol-değişim
- **BU DOSYA (HASAT-TAM-SALDIRI):** ölçek maksimum + spesifik teknik-mecburiyetler + ücretli-sınır + 7. CC (Tic) devrede
**Disiplin:** $0 · SESSİZ-0 YASAK · SPA-fallback · SİLME-YOK · KVKK #31 v1.1 · A04 · Standing #35+#36

---

## 1. Kuralın Özü

> **Anahtar geldi, disk takılıyor. HERKES İNDİRİYOR — sınır yok, seçme yok, HEPSİNİ AL.**
> **Öncelik: HAM VERİ HACMİ.**
>
> Her CC "indirildi · N · yol · SORGU-01:E" tek-satır bildirir.
> **Ücretli (Reidin/TTSG/Endeksa) DOKUNMA.**
> Hedef: **SORGU-01 165K → milyonlar**

---

## 2. Yeni-Farklılıklar (HASAT-EMRİ'ye göre delta)

| Alan | HASAT-EMRİ | HASAT-TAM-SALDIRI |
|---|---|---|
| Ölçek | 12 kalem × 6 CC | **12+ kalem × 7 CC** (+CC-Tic devrede) |
| EVDS | "token al" | **"anahtar TAK" — GELDİ** ✅ |
| Disk | Mac 27GB boş, TT-HAFIZA gelmiş miydi belirsiz | **Disk takılıyor** — 4GB bütçe **kalktı** |
| EVDS kapsam | "tam seri" | **~26.000 seri TAMAMI** (spesifik) |
| KAP kapsam | "19-aktör" | **611 firma × 2015-2026 TAM arşiv** (32×) |
| KAP teknik | — | **Mojibake-fix zorunlu** (encoding sorunu) |
| TÜİK | "tüm il/ilçe" | **Playwright ile SPA KIR** (statik curl dersi, mecburi teknik) |
| Basın | "S99 SÜZME + akış" | **27 hasat-uygun ilçe** TAM ARŞİV, **URL tavanı YOK** + SPA-fallback + **sessiz-0 bayrağı** |
| CC-Tic | listede yoktu | **Devrede:** KAP-Borsa koordinasyonu + RG Beykoz/kamulaştırma/2B + EKAP İstanbul |
| Ücretli kaynak | — | **DOKUNMA** kuralı net (Reidin · TTSG · Endeksa) |
| Sayaç baz | 414K | **165K** ⚠ (bkz. Vezir dürüst-not §6) |

---

## 3. CC × Görev Tablosu (7 CC — genişletilmiş TAM)

| # | CC | Görev | Somut hedef | Rapor sayacı |
|---|---|---|---|---|
| **A** | **CC-Borsa** | EVDS anahtar **TAK** → **~26.000 serinin TAMAMI** çek + **KAP 611 firma × 2015-2026 TAM arşiv** (tam metin, **mojibake-fix**) | 26K seri · 611×12yıl bildirim tam-metin | seri, bildirim, doküman-boyut |
| **B** | **CC-TT-MAP** | OSM POI **81 il TAMAMLA** + İBB CKAN **kalan resource'lar** (4GB bütçe kalktı, hepsi) + Sentinel Beykoz karo | 81 il POI · CKAN 557+ set tam · karo | POI, set, karo-adet |
| **C** | **CC-Analiz** | TÜİK SPA'yı **Playwright ile KIR** (statik curl dersi), tüm il/ilçe tablolar + ADNKS. AFAD/WB **tamamlandı** ✅ | Tüm il/ilçe TÜİK + ADNKS | tablo, hücre |
| **D** | **CC-Basın** | **27 hasat-uygun ilçe TAM ARŞİV**, tam-gövde metin, **URL tavanı YOK** + ulusal gazete açık arşivleri. SPA-fallback + sessiz-0 bayrağı | 27 ilçe × haber tam-metin + ulusal | haber, gövde-KB, ilçe |
| **E** | **CC-Tic** | KAP kendi kanalı Borsa'yla **koordine** (**çift-indirme YOK**) + RG Beykoz/kamulaştırma/2B tam metin + **EKAP İstanbul** | RG-doküman + EKAP-İhale | doküman, kayıt |
| **F** | **CC-Sosyal** | Whisper kuyruğu **tam açık**, açık-altyazı kanalları **hepsi** | Video + dakika transcript | video, transcript-dk |
| **G** | **CC-Hafıza** | Gelen HER şey SORGU-01 ingest, sayaç canlı, disk dolarsa **TT-HAFIZA staging rsync**. Her tur **"havuz = N kayıt"** bildir | Havuz toplam kayıt canlı | havuz_toplam (tek KPI) |

---

## 4. Teknik-Mecburiyetler (yeni-katı kurallar)

Bu direktif belirli teknik-borçları **kapatma emri** verir:

### 4.a · Mojibake-fix (KAP)
- KAP bildirim metinlerinde encoding sorunu (MEMORY.md: "KAP encoding mojibake Borsa'ya soru" — SORGU-01-EK)
- **Zorunlu:** Her indirilen KAP dokümanı UTF-8'e normalize + Türkçe karakter kontrolü
- Örnek onay: `Ãœretim` → `Üretim`, `Åžirket` → `Şirket`

### 4.b · Playwright SPA-kırma (TÜİK)
- **Ders:** Statik curl TÜİK SPA'yı çekemedi (JS render)
- **Zorunlu:** Playwright headless (Chromium/Firefox) ile render sonrası HTML/JSON çek
- Rate-limit friendly delay (1-2 sn/istek)

### 4.c · SPA-fallback (Basın)
- Bazı Basın kaynakları JS SPA
- **Zorunlu:** Önce statik dene, boş → Playwright fallback → yine boş → **sessiz-0 bayrağı** (raporlanır, gizli-hata değil)

### 4.d · Sessiz-0 yasağı
- Bir hasat 0 kayıt döndürürse **SUSMAK YASAK**
- Rapor: `indirildi · 0 kayıt · <yol> · SORGU-01:HAYIR · sebep:<x>`
- Vezir tabloya ⚠ ve sebep-not eklenir

### 4.e · Çift-indirme yasağı (KAP)
- CC-Borsa ve CC-Tic ikisi de KAP'a erişebilir
- **Koordinasyon:** Borsa öncü (611 firma × 12 yıl) → Tic Borsa'nın diskteki dosyalarını okur, kendi çıktısını üretir
- İki kez indirmek yasak (bant + hakem-yükü)

### 4.f · TT-HAFIZA staging rsync (disk-taşma önleme)
- Mac 27GB boş — SORGU-01 ingest sonrası disk şişecek
- **Zorunlu:** Hafıza her ~4-6 saat `rsync --update` ile TT-HAFIZA external'a taşır
- Ham veri Mac'ten silinmez ama **staging kopyası** dış disk

### 4.g · Ücretli kaynak sınırı
- **YASAK:** Reidin · TTSG · Endeksa (paywall)
- Bu kural KVKK dışı, ticari/hukuki
- Yanlış tıklamayı engelle: kaynak listesinde bu 3 isim varsa CC ⚠ ve atla

---

## 5. Vezir Takip Tablosu (canlı — 12+ kalem × 7 CC)

| # | CC | Kaynak / kalem | Rapor | N kayıt | Yol | SORGU-01 | Tarih | Commit |
|---|---|---|---|---|---|---|---|---|
| A1 | CC-Borsa | EVDS **~26.000 seri tamamı** | ⏳ | — | — | — | — | — |
| A2 | CC-Borsa | KAP **611 firma × 2015-2026** tam-metin + mojibake-fix | ⏳ | — | — | — | — | — |
| B1 | CC-TT-MAP | OSM POI **81 il tam** | ⏳ | — | — | — | — | — |
| B2 | CC-TT-MAP | İBB CKAN **557+ set tamamı** | ⏳ | — | — | — | — | — |
| B3 | CC-TT-MAP | Sentinel Beykoz karo | ⏳ | — | — | — | — | — |
| C1 | CC-Analiz | TÜİK **Playwright SPA-kır** + tüm il/ilçe + ADNKS | ⏳ | — | — | — | — | — |
| C2 | CC-Analiz | AFAD + WB (HASAT-01 devamı) | ✅ **tamamlandı** | ? | ? | ? | önceki | önceki |
| D1 | CC-Basın | **27 ilçe TAM ARŞİV** (URL tavansız) + SPA-fallback + sessiz-0 | ⏳ | — | — | — | — | — |
| D2 | CC-Basın | Ulusal gazete açık arşivleri | ⏳ | — | — | — | — | — |
| E1 | CC-Tic | RG Beykoz + kamulaştırma + 2B tam-metin | ⏳ | — | — | — | — | — |
| E2 | CC-Tic | EKAP İstanbul | ⏳ | — | — | — | — | — |
| E3 | CC-Tic | KAP okuma (Borsa disk üzerinden) | ⏳ | — | — | — | — | — |
| F1 | CC-Sosyal | Whisper kuyruğu **tam açık** | ⏳ | — | — | — | — | — |
| F2 | CC-Sosyal | Açık-altyazı kanalları **hepsi** | ⏳ | — | — | — | — | — |
| **G** | **CC-Hafıza** | **SORGU-01 havuz toplam** (tek KPI) | **⏳** | **165K (baz⚠)** | **~/tradia_sorgu/** | **N/A** | **—** | **—** |

**Havuz büyüme grafiği (Vezir canlı):**
- Baz (bu direktif): **165.000** ⚠ (bkz. §6)
- Bugün: ⏳
- Yarın: ⏳
- Hedef: **milyonlar** (≥1.65M = 10× baz, ≥7M = ~42× baz — hedef ucu belirsiz)

---

## 6. Vezir A04 Dürüst-Not (KRİTİK)

### 6.a · 🔴 **Sayaç uyumsuzluğu: HASAT-EMRİ 414K vs HASAT-TAM-SALDIRI 165K**

Bir önceki direktifte (`UA_20260730_HASAT_EMRI_kesif_bitti.md` §5/F) baz **414.000** yazmıştım — Üst Akıl kaynak referansıyla. Bu direktifte baz **165K**. İki olasılık:

- **(a) Ölçüm düzeltmesi:** 414K bir tahmin/beklentiydi, gerçek SORGU-01 sayımı 165K çıktı. Bu durum normal (envanter → uygulama farkı).
- **(b) Yazım hatası:** UA tarafında 165K → 4×15K? Ya da 414K → 4×100K yanılgı? Belirsiz.

**Vezir kararı:** **165K** güncel baz olarak kabul edilir (bu direktif otorite). HASAT-EMRİ tablosu (§5 sondaki "414K baz" satırı) **düzeltme notu düşüldü**: "baz 414K yanlış tahminmiş; gerçek 165K (HASAT-TAM-SALDIRI teyidi)". Bu düzeltme Vezir'in takibi için gerekli — havuz-4× hedefi de kaydı (4× 165K = 660K değil, "milyonlar" hedefi = **60×+**).

### 6.b · Ölçek şoku uyarısı

- **EVDS 26.000 seri × ortalama 20 yıl × aylık = ~6M kayıt** potansiyel (tek CC × tek kaynak)
- **KAP 611 firma × 12 yıl × yıllık ~20 bildirim = ~147K doküman** (tam metin → GB'lar)
- **OSM 81 il POI = 5-15M nokta** tahmini
- **Toplam potansiyel:** 20-50M+ kayıt · 100-500GB
- **Mac 27GB boş → SORGU-01 kısa sürede taşar.** TT-HAFIZA staging (§4.f) **gerçekten** aktif edilmiş olmalı — belge "gelmiş" diyor ama Vezir teyit görmedi (KURULUS_HAFIZA'da NAS bekleme durumu vardı, external disk farklı mı?).

### 6.c · Playwright kurulum yükü

Playwright zaten CC'de kurulu değilse: `pip install playwright && playwright install chromium` **~200MB** disk. TÜİK'e başlamadan önce kurulum saat-cinsi ekleyecek.

### 6.d · CC-Tic bu turda 3-kaynak birden

RG + EKAP + KAP-okuma. Ancak CC-Tic'in Beykoz turu bittiğinde uykuya alınmıştı (KURULUS_CC-Tic'te T122). Uyandırılma-devir maliyeti (Vezir §6 önceki-dağıtım tespiti) hasat süresine eklenmeli.

### 6.e · Sessiz-0 yasağı iyi düşünülmüş

Bu kural HASAT-01/EMRİ'de yoktu ama gerçek risk — bir hasat 0 kayıt döndürünce SUSMAK varsayılan-Python-davranışı. Rapor mecburiyeti (§4.d) sistemik bir güvenlik ekliyor. **Vezir bu kuralın Standing kanona geçmesini öneriyor** (Signals SIG7 21-sıfır denetimiyle uyumlu).

---

## 7. Vezir Devam Görevi

- Her CC'nin tek-satır raporu Desktop'a düşer düşmez §5 tablosu güncellenir
- Havuz sayacı (165K → ???) canlı tutulur
- **HASAT-EMRİ tablosunun 414K baz notu düzeltilecek** (bir sonraki push'ta)
- Push her rapor için (bir turda birden fazla rapor gelebilir → tek commit'te toplayabilirim)

---

## 8. Yayın Kanalı

- Bu direktif arşivde ✅ (`dagitim/`)
- Patron 7 CC session'ında ilgili satırları yapıştıracak
- Hafıza SORGU-01 sayacını canlı tutacak
- Vezir 165K → milyonlar skorunu güncelleyip push atacak

*HASAT-TAM-SALDIRI dağıtıldı. Anahtar cepte, disk takılı, sınır kaldırıldı. Sayaç 165K'dan sallanacak.*
