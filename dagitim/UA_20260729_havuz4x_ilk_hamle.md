# ÜA DAĞITIMI — Havuz-4× Planının İlk Somut Hamlesi

**Tarih:** 2026-07-29
**Kaynak:** Üst Akıl
**Kanal:** Vezir (arşiv + görev-atama + kanon köprüsü)
**Bağlam:** CC-TT-Pazarlama'nın "sıfır-risk 5" analizi — 5 ücretsiz-açık kaynağın CC'lere dağıtımı
**Disiplin:** $0 · KVKK #31 v1.1 · A04 · Standing #35+#36

---

## 1. Direktifin Özü

Pazarlama'nın "sıfır-risk 5" kaynağı sahiplerine bağlanır:

| # | Kaynak | Tür | Hedef CC (öncelik) | Erişim | Ücret |
|---|---|---|---|---|---|
| 1 | **TCMB-EVDS** | Makro finans/emtia (API) | CC-Borsa · CC-Finans | API anahtarı (kayıt) | ÜCRETSİZ |
| 2 | **İBB CKAN** | Açık veri portalı (İstanbul) | CC-TT-MAP | HTTP GET / API | ÜCRETSİZ |
| 3 | **İETT GTFS** | Toplu ulaşım feed (durak/hat/sefer) | CC-TT-MAP | Static ZIP + Realtime | ÜCRETSİZ |
| 4 | **OSM Overpass** | POI + yol ağı sorgu | CC-TT-MAP | Overpass QL / API | ÜCRETSİZ |
| 5 | **TÜİK ADNKS** | Demografi (adres kayıt sistemi) | CC-TT-AI · CC-Analiz | HTML/PDF/CSV çekim | ÜCRETSİZ |
| 6 | **AFAD Deprem** | Afet-metrik (deprem katalog) | CC-TT-AI · CC-Analiz | REST API / RSS | ÜCRETSİZ |

**Not:** 5 kaynak dedik ama liste 6 kalemli (TCMB tek satır ama iki CC hedefi + AFAD ile TÜİK ayrı). Pazarlama listesinde "sıfır-risk 5" nasıl gruplandırıldı → Pazarlama kanonuna sor.

---

## 2. Görev Atama Tablosu

| CC | Görev | Deliverable (Vezir'e kanıt) | SLA öneri |
|---|---|---|---|
| **CC-Borsa** | TCMB-EVDS API anahtarı al, hat kur | `entegrasyon_tcmb_evds.md` + ilk-çekim örneği (JSON çıktı) + kanon B9 bağlaması | 3-5 gün |
| **CC-Finans** | Aynı EVDS anahtarını **paylaş** (tek anahtar, iki tüketici) — makro seriler talep tarafına | `entegrasyon_tcmb_evds_finans.md` + ilk-çekim örneği + B9 | 3-5 gün |
| **CC-TT-MAP** | 3 kaynak: İBB CKAN + İETT GTFS + OSM Overpass — POI ve ulaşım katmanı | 3 ayrı `entegrasyon_*.md` + ilk-çekim örneği (nokta/hat sayısı) + B9 | 7-10 gün |
| **CC-TT-AI** | TÜİK ADNKS demografi + AFAD deprem katalog | `entegrasyon_tuik_adnks.md` + `entegrasyon_afad_deprem.md` + ilk-çekim + B9 | 5-7 gün |
| **CC-Analiz** | Yukarıdakilerin Analiz tarafı — TÜİK ile mahalle-nüfus çapraz, AFAD ile mahalle-deprem çapraz | Tek `entegrasyon_analiz_notlari.md` (TT-AI çıktısı üzerine) + B9 | TT-AI sonrası |

**Ortak deliverable formatı** (her CC için):
1. **Kaynak künyesi:** Ad · URL · lisans · versiyon · günceleme sıklığı
2. **Entegrasyon-notu:** Nasıl bağlanıldı (endpoint, auth, quota, rate-limit)
3. **İlk-çekim örneği:** Küçük ama gerçek bir sorgu → dönen veri (ham + parse edilmiş) → dosya kaydı
4. **Kanona bağlama (Hafıza B9):** "Bu kaynak Standing v1.11 B9 kanon-kaydı bloğuna işlensin" bildirim (CC → Hafıza K24a)
5. **Sonraki-adım:** Bu kaynak Tradia hangi ürünlere/sinyallere besleyecek?

---

## 3. Kanona Bağlama — Hafıza B9

Bu direktifin **her CC uygulaması**:
- Kanona iki farklı yerde kayıt edilecek:
  - **Hafıza tarafı:** Standing v1.11 → **B9 kanon-kaydı** (kaynak envanteri kısmı) genişletilmeli.
  - **Vezir tarafı:** Bu `UA_20260729_havuz4x_ilk_hamle.md` + her CC'nin entegrasyon-notu dosyası → repo'da arşiv.
- **CC → Hafıza bildirim protokolü (K24a):** Her CC entegrasyonu bitince `hafiza_bildirim_cc<X>_evds_entegre.json` benzeri bir bildirim dosyası bırakır — Hafıza bunu B9'a taşır.

---

## 4. "Havuz-4×" Planı — Bağlam

Bu direktif "havuz-4×" planının **ilk somut hamlesi**. Havuz-4×:
- Şu anki veri-havuzunu ~4× büyütme hedefi
- Ücretsiz-açık kaynaklarla, $0 yatırım-kırılganlığında
- Öncelik: yapısal-veri makasını kapatma (TT-AI CONFIRMED %9.12 tavan sorunu, Beykoz 45-mahalle vaka öğrenmesi)
- Pazarlama'nın "sıfır-risk 5" listesi bu planın taban seçimi

**Vezir denetim notu:** Havuz-4× planının kendisinin ayrı bir kanon-belgesi olmalı (Pazarlama tarafında ya da Hafıza'da). Bu dağıtım tek başına anlamlı değil — plan-belgesi olmadan ilk-hamle nereye bağlanacak? **Öneri:** Üst Akıl `havuz_4x_plan.md` yayınlasın (Vezir dağıtım-defterine referans).

---

## 5. Risk / Uyarı (A04 Dürüst-Negatif)

| Risk | Etki | Karşı-tedbir |
|---|---|---|
| **API rate-limit** (özellikle Overpass) | Toplu-çekim yavaş / bloke | Küçük-batch + arşiv (bir kez çek, tekrar okuma) |
| **Şema değişikliği** (İBB CKAN, İETT GTFS) | Parse kırılır | Şema-versiyon kaydı + değişiklik alarmı |
| **Anahtar sızıntısı** (TCMB-EVDS) | KVKK dışı ama itibar | Anahtar `.env` içinde, ASLA commit yasağı (Standing #31) |
| **TÜİK ADNKS PDF** | Yapılandırılmamış, OCR/parse zor | TT-AI'nın PDF-parse yeteneği (Beykoz'daki İ65 dersi) |
| **Duplicate iş** (Borsa + Finans aynı EVDS) | Anahtar iki-kez alınmasın | TEK anahtar, iki tüketici — Borsa öncü, Finans şerh |

---

## 6. Vezir Takip Kanalı

**Bu direktifin takibi:** `~/tradia-beykoz/dagitim/UA_20260729_havuz4x_ilk_hamle.md` (bu dosya).
**İlerleme:** Her CC entegrasyon-notunu Desktop'a bıraktığında, Vezir bu dosyayı **güncelleyecek** (ilerleme sütunu eklenecek):

| CC | Deliverable | Durum | Tarih | Commit |
|---|---|---|---|---|
| CC-Borsa | entegrasyon_tcmb_evds.md | ⏳ bekleniyor | — | — |
| CC-Finans | entegrasyon_tcmb_evds_finans.md | ⏳ bekleniyor | — | — |
| CC-TT-MAP (CKAN) | entegrasyon_ibb_ckan.md | ⏳ bekleniyor | — | — |
| CC-TT-MAP (GTFS) | entegrasyon_iett_gtfs.md | ⏳ bekleniyor | — | — |
| CC-TT-MAP (OSM) | entegrasyon_osm_overpass.md | ⏳ bekleniyor | — | — |
| CC-TT-AI (TÜİK) | entegrasyon_tuik_adnks.md | ⏳ bekleniyor | — | — |
| CC-TT-AI (AFAD) | entegrasyon_afad_deprem.md | ⏳ bekleniyor | — | — |
| CC-Analiz | entegrasyon_analiz_notlari.md | ⏳ TT-AI sonrası | — | — |

---

## 7. Patron'a Not (Vezir)

- Bu dağıtım-notu **repo'da arşive alındı**; artık kalıcı iz var.
- **Yayın kanalı Patron:** Vezir CC session'larına doğrudan mesaj gönderemez; her CC'nin session'ında Patron bu direktifin ilgili satırlarını (kendine denk gelen bölüm) yapıştırmalı.
- Kanona (Hafıza B9) bağlama da aynı yolla: Patron Hafıza session'ında "bu 5 kaynak B9'a" der.
- **Vezir'in devam eden görevi:** Her CC deliverable'ı Desktop'a bıraktığında bu tabloyu güncelle + push. Havuz-4× planının somut ilerleme kaydı Vezir'de tutulur.

*Dağıtım tamam — takip Vezir'de.*
