# ÜA STANDING-ADAYI — "AÇIK VERİ = HEMEN AL"

**Tarih:** 2026-07-30
**Kaynak:** Üst Akıl
**Kanal:** Vezir (arşiv + görev-atama + kanon köprüsü)
**Tür:** Standing kural adayı (Hafıza'nın kanonize etmesi bekleniyor — Vezir öneri: **#37**)
**Bağlam:** Havuz-4× planının davranışsal disiplini (arz-tarafı toplama refleksi)
**Disiplin:** $0 · KVKK #31 v1.1 · yalnız açık-lisans/erişim · A04

---

## 1. Kuralın Özü (kanonize edilecek metin)

> **AÇIK VERİ = HEMEN AL.** Keşif/araştırma sırasında AÇIK ve serbestçe indirilebilir bir veri seti bulunursa, yalnız haritalanmaz — **İNDİRİLİR, künyelenir, kanona bağlanır** (Hafıza).
>
> **YETMEZ:** "buldum, rapora yazdım."
> **YETER:** açıksa al · künyele · teslim et.
>
> **SINIR:** yalnız açık-lisans + açık-erişim; paywall / ToS-ihlali / anti-bot **YASAK**. Lisansı belirsizse **"al ama karantina, lisans-teyidi bekle"** işareti.

---

## 2. Kapsam — 3 Ana Kanal

### 2.a · GitHub (açık lisanslı veri repo'ları)

| Ne aranır | Nasıl alınır | Künye zorunlu |
|---|---|---|
| MIT / CC / kamu lisanslı repo'lar | `git clone --depth 1` (küçük tut) | Repo URL · commit-SHA · lisans dosyası · klonlama tarihi |
| TR emlak / kamu / coğrafi / demografi datasetleri | Raw dosya indir (JSON/CSV/GeoJSON) | Repo · dosya-yol · sürüm · lisans · indirilme tarihi |
| Scraper-çıktısı hazır datasetler | Aynı — ama scraper-orijinal kaynağın lisansına da bak (**türev-yükümü kontrol**) | + orijinal kaynak künyesi |

**Vezir uyarısı:** Scraper-çıktısı dataset'lerde ShareAlike/CC-BY-SA türev-yükümü var mı? Mapillary vakasında (T-16) bu bize ürüne alınamayan bir kaynak kaybettirmişti. **Kural:** ShareAlike → karantina · asıl-kaynak-ToS'a bak.

### 2.b · YouTube Altyazı / Transcript

| Ne aranır | Nasıl alınır | Künye |
|---|---|---|
| Keşifte çıkan **resmî** kanal (kurum/uzman/basın) | Kanal adı · Video ID listesi · Açık VTT altyazı çekimi | Kanal URL · video ID · yayın-tarihi · altyazı türü (manuel/otomatik) · dil |
| Otomatik-altyazı (kanal izin veriyorsa) | `yt-dlp --write-auto-subs --skip-download` | Aynı + "AUTO-SUB" işareti |
| **Whisper hattı gerekiyorsa** (altyazısız içerik) | **DEVRET:** CC-Sosyal (32.Gün tam-metin arşivi emsali) | — |

**Sınır:** ToS-ihlali, indirme-koruma bypass, private/premium içerik YASAK. Yalnız halka açık + altyazı-izin-verilmiş içerik.

### 2.c · Açık API / Data Portal

| Ne aranır | Nasıl alınır | Künye |
|---|---|---|
| Anahtar-ücretsiz + rate-limit içinde | O an bağlan, örnek çekim al | Endpoint · auth türü · örnek-cevap · rate-limit · sürüm |
| Anahtar kayıt gerektiriyor ama ücretsiz | Kayıt ol, anahtar al, hat kur | Aynı + anahtar `.env`'de (**ASLA commit yok — Standing #31**) |
| Enterprise/paywall | **YASAK** | — |

---

## 3. CC × Alan Uygulama Tablosu

Her CC kendi domain'inde bu kuralı uygular. Örnek dağılım (net-yorum CC'de):

| CC | Alan | Muhtemel akışlar |
|---|---|---|
| **CC-TT-MAP** | Coğrafi/uydu/POI | GitHub OSM türevleri · İBB CKAN (bir önceki dağıtım) · GeoJSON kamu portalları |
| **CC-TT-AI** | Semantik/adres/demografi | TÜİK ADNKS + AFAD (bir önceki dağıtım) · Wikidata sparql · YouTube kurum kanalları (kurum-tanıtım transcripts) |
| **CC-Analiz** | Emlak/istatistik | GitHub'ta TR emlak datasetleri (Sahibinden benzeri türev-çıktılar), TÜİK ekonomi tabloları |
| **CC-Basın** | Haber/kurumsal | GitHub'ta Türk basın-arşivi datasetleri · YouTube: TRT/Habertürk/NTV resmî · RG XML feed'leri |
| **CC-Sosyal** | Video/söylem | YouTube: 32.Gün emsali kurum/uzman kanallar · TR podcast RSS · **Whisper hattı sahibi** (diğer CC'lerin devri buraya gelir) |
| **CC-İhale** | Kamu ihalesi | GitHub'ta EKAP scraper-çıktı datasetleri (varsa lisans-kontrol!) · Açık ihale API'ları |
| **CC-Tic** | Firma/ticari | GitHub'ta TR firma datasetleri (mersis/ticari-sicil) · TTSG scraper-çıktı (lisans!) |
| **CC-Borsa** | Piyasa/BIST | GitHub'ta BIST tarihi veri repo'ları · Yahoo Finance TR sembol dumpleri |
| **CC-Finans** | Makro | TCMB EVDS (bir önceki dağıtım) · Dünya Bankası açık veri · IMF |

---

## 4. Ortak Deliverable Formatı — "Kaynak Künye Kartı"

Her indirilen kaynak için **tek md dosyası** üretilir (Hafıza kanona bağlar):

```
kaynak_kunye_<slug>.md

## Kimlik
- Ad · URL · sağlayıcı · lisans · sürüm/tarih
- İndirme tarihi · SHA256 · boyut · konum (Mac / TT-HAFIZA)

## Kapsam
- Ne içerir · alan · veri-tipi · kayıt sayısı · şema

## Erişim
- Nasıl bağlanıldı · rate-limit · anahtar-gerek-mi · yenileme protokolü

## Lisans + Kısıtlar
- Lisans tam-metin · ticari-kullanım OK/HAYIR · atıf-zorunlu-mu
- Türev-yükümü (ShareAlike/GPL) VAR/YOK
- **Karantina bayrağı:** lisans belirsizse ⚠

## Sonraki-Adım
- Hangi ürüne/sinyale girecek · beslediği CC · B9 kanon-kaydı ID
```

---

## 5. "Karantina" Rejimi (lisans belirsiz)

Vezir dijital-hijyen: lisans **tam** teyit edilmeden bir kaynak ürüne katılmaz.

| Aşama | Ne olur | Kim karar verir |
|---|---|---|
| İndirme | Kaynak alınır, mahalli tutulur | CC (özerk) |
| **Karantina işareti** | `⚠ lisans belirsiz` — künye kartına yazılır | CC (zorunlu) |
| Lisans teyidi | Kaynak sahibi ile iletişim / arşiv incele | CC |
| **Ürüne katma** | Yalnız lisans TAM ise | Patron / Üst Akıl (Hafıza kanona işler) |

**Vezir uyarısı (A04):** T-16'da Mapillary CC BY-SA "gri" olarak işaretlenmişti, TT-MAP ürüne almadı — doğru karar. Bu kural bunu genelleştirir.

---

## 6. Kanona Bağlanma — Hafıza B9 + "$845 Tablosu"

Her indirilen kaynak Hafıza'nın **B9 kanon-kaydı**na eklenir:
- **B9 blok:** Kaynak envanteri (mevcut Standing v1.11'de)
- **$845 tablosu:** Bu terim direktifte geçti — Vezir bunun tam-tanımını bilmiyor. **Öneri:** Üst Akıl/Pazarlama tarafından tanımı verilmeli. Muhtemel: **"her açık kaynak = kaç TL karşılığı kurumsal alım-tasarrufu"** hesabının kümülatif toplamı ($845 belki bir eşiğin adı: örn 25 kaynak × ~$30 ort = ~$845/ay tasarruf).
- **Karantina kaynakları** B9'da AYRI bir alt-blok (ürün-değil, saklama).

---

## 7. Yasaklar (net-çizgi — SINIR)

| Yasak | Neden | Emsal |
|---|---|---|
| Paywall / freemium premium | Ödemesi olan içerik açık-değil | — |
| ToS-ihlali | Hukuki + itibar riski | Mapillary ShareAlike (T-16, doğru karar) |
| Anti-bot bypass | Captcha/login/obfuscation ihlali | Standing (mevcut) v1.11 |
| Kişisel-veri (KVKK) | TC/mail/tel içeren datasetler | Standing #31 v1.1 (mutlak) |
| Lisans-belirsiz + acele ürüne katma | Sonradan geri-çekme maliyeti | Mapillary'nin tersi |

---

## 8. Vezir Takip Kanalı

Bu dosya (`UA_20260730_acik_veri_hemen_al.md`) kalıcı arşive alındı. **İlerleme tablosu bir sonraki tur açılacak** — her CC "aldığım N kaynak" bildirdikçe Vezir güncelleyecek:

| CC | Alınan | Karantina | B9 kaydı | Tarih |
|---|---|---|---|---|
| (henüz veri yok) | — | — | — | — |

---

## 9. Vezir A04 Dürüst-Not

- **"$845 tablosu"** terimi opaque — Üst Akıl'dan tanım gerek (öneri §6'da).
- **Whisper hattı devri** (§2.b) tek bir CC'ye (Sosyal) yoğunluk bindirir — kapasite kontrolü Patron kararı. Sosyal S195+ zaten yoğun.
- **GitHub scraper-çıktısı** kural gri: lisans hem repo hem asıl-kaynak için ayrı-ayrı bakılmalı. **Öneri:** ⚠ karantina otomatik-varsayılan, yeşil-onay hep açık iş.
- **YouTube ToS** çelişkili: yt-dlp bir gri araç, otomatik-altyazı çekimi de gri. **Öneri:** yalnız **VTT indirme-butonu** olan / **açık transcript API'ı** olan kanallar. Diğer her şey Sosyal Whisper devri.
- Bu kural mükemmel bir refleks eğitimi ama **kaynak-kaosu riski** de var (10 CC × N kaynak = binlerce dosya). Hafıza B9'un ölçeklenebilirliği test edilecek.

---

## 10. Yayın Kanalı

Vezir CC'lere doğrudan yazamaz. Bu direktif:
- Repo'da kalıcı arşivde ✅
- Her CC session'ında Patron ilgili bölümü yapıştıracak
- Hafıza kanona geçirdiğinde **Standing #37** olur (Vezir öneri)

*Standing-adayı arşivde. Kanonizasyon Hafıza kararı.*
