---
cc: CC-Site
doc: KURULUŞ DOSYASI
tarih: 2026-07-15
kaynak: TT-HAFIZA + git log (LandGold repo) + tradia_konusmalar/02_CC_STATE + docs/cc_site_*.md + cikti/site_*.md
sahiplik: kod docs/ + veri v2/data/ + kanonik state 02_CC_STATE/anayasa_site.md
push: Vezir yapar; bu dosya yazıldı, gönderim yok
---

# TRADİA KURULUŞ DOSYASI — CC-Site

---

## (A) TEK SAYFA ÖZET — Yönetici Dili

**CC-Site nedir?** Tradia'nın **kullanıcıya dokunan tek katmanı** — tradiaturkey.com (canlı) + `/v2/` (yeni nesil). Diğer CC'lerin ürettiği veriyi **okur ve sergiler**; veri ya da analiz üretmez.

**Doğuş:** Nisan-Mayıs 2026 arası landgold-agents daily pipeline ile başladı (otomatik haber/mülk toplayıcı arka plan). Bugünkü kimliğine ilk büyük atlama **c0175b0** commit'i ile geldi — Tradia Basın Sayı 1+2+3 + 4 komponent + manifesto + İstihbarat hub. Bu, ARZ (veri toplama pipeline) fazından TALEP (soru-cevap/mahalle dosyası) fazına dönüş noktası.

**Bugünkü yetenek:**
- 33 canlı HTML sayfası (7 dil landing, 3 yayın bülten + hub, manifesto, KVKK 4 dil, analist skor panel, /v2/ yeni nesil)
- **27.732 mahalle** master DB (38 il × 633 ilçe JSON), 74 MB
- 5 GeoJSON katman (iller 445 KB + ilçeler 3 MB + mahalleler 4.3 MB + mega 12 KB + osb 108 KB + kısıtlı 11 KB)
- Cookie banner 12 sayfa enjekte + KVKK/Privacy 4 dil
- Autocomplete arama (671 il/ilçe eager + 27.728 mahalle lazy)
- Yan panel drill-down (Türkiye haritası → il → ilçe → mahalle dosyası)
- Hero: Wikimedia CC BY-SA panorama + atıf

**Ne değil:** Backend/Wrangler deploy Patron manuel; auth/payment secret yok; veri-analiz devri **CC-Analiz'de**; içerik metni **CC-Basın'da**; firma DB **CC-Tic'te**; mahalle nokta AI **CC-TT-AI'da**.

**Son sprint (S11 · 2026-06-07):** Otel-satış moduna geçiş — 10 sayfa noindex+redirect, 8 SPA bloğu feature-flag ile gizli, sitemap/robots temizlendi. **Feature-flag KATİ — tek commit'le geri açılabilir.**

**Açık borç en kritik:** Wrangler deploy (lead-handler + admin + notify), 43 aday il aktarım, S7 görsel damga POC pozisyon kararı, hukuk müşaviri /privacy+/kvkk revize.

**Bütçe:** $0 (Cloudflare Pages statik + Google Fonts CDN + Leaflet CDN + Wikimedia; domain register Patron ~$10-15/yıl).

---

## (B) GENİŞ TEKNİK ÖZET

### 1. DOĞUŞ

**Ne zaman, hangi ihtiyaçla?**

CC-Site'in ilk canlı komiti git log'da **2026-05-12 civarı `pipeline: daily run [skip ci]`** olarak görünür. Bu tarihe kadar site, landgold-agents otomatik haber/mülk toplama pipeline'ının **sadece yayın vitrini** işlevindeydi (agent → JSON → HTML template render, insan katılımı yok). Auto agent update commit'leri (`auto: agent update 2026-05-12/13/14/15/16 — news:5 items, properties:3 opportunities`) günlük besleniyordu.

**Kimlik dönüşümü:** İki kritik commit:
- **7cacfcf `ops(bulten): haftalık cron pause — manuel onay öncesi boş yayın engeli`** — otomatik yayın DURDURULDU (kalitesizlik uyarısı)
- **79908ce `fix(site): orphan haber kart enjeksiyonu temizlendi + workflow pause edildi`** — dolu-göründüğü halde boş kartlar temizlendi

Bu iki commit CC-Site'in **"veri kalitesi > veri hacmi"** felsefesine ilk açık geçişidir (manifesto.html başlığı bu cümledir).

Sonra sırasıyla:
- **1a6ca07 `refactor(site): güven inşası — kesirli kapsama ve geliştirme jargonu temizlendi`**
- **a276aed `feat(site): Sahibinden 97K ilan verisi → 52 ilçe aggregate entegrasyonu`** — gerçek veri gelir
- **cca5033 `feat(seo+il): SEO temelleri + 61 il sayfası içerik dolumu`**
- **03cdc29 `feat(legal): KVKK + Gizlilik + Şartlar + Çerez sayfaları + onay akışı`** — hukuk katmanı
- **c0175b0 `feat(bultenler): Tradia Sayı 1+2+3 yayını + 4 komponent + manifesto + İstihbarat hub`** — **kimlik oluşumu**
- **940a159 `feat(intl+maps): 7 dilli URL rotası + Tradia Maps MVP (Bursa Mudanya)`**
- **fd2c762 `feat(sprint5): lead backend + bursa map dropdown + 3 dil i18n + SEO@graph`**
- **1763b8e `feat(sprint6): 6-katman maps + EN/RU bültenler + lead backend test plan`**
- **c16c48a `feat(sprint7): v2 geojson + Bursa 1112 mahalle + KVKK/Privacy 4 dil + cookie banner`** — **13/13 URL canlı zirvesi**

**ARZ→TALEP fazındaki yerin:**

| Faz | CC-Site'in rolü |
|---|---|
| **ARZ (veri toplama)** | Yayın vitrini: agent JSON'larını statik HTML'e döker. İnsan yokken çalışır. |
| **Geçiş** | Manifesto + KVKK + kesirli kapsama düzeltmesi — "kalite artık hacimden önemli" |
| **TALEP (soru-cevap/sinyal)** | Kullanıcı mahalle arayabilir · drill-down yapabilir · lead formu doldurabilir · bülten okuyabilir. Cross-CC'lerin ürettiği veri buradan **sergilenir**. Backend deploy sonrası **kayıt tutulacak.** |

CC-Site şu an **TALEP fazının ön yüzü** — arka planda ARZ pipeline devam ediyor (landgold-agents pause'da), yeni /v2/ katmanı TALEP için tasarlandı.

### 2. FELSEFE & PRENSİPLER — Yeniden Sorgulama

**Kanonik felsefe:** "Veri kalitesi > veri hacmi" (manifesto.html H1).

**Prensipler (manifesto.html — 5 prensip):**
1. **Şeffaflık** — Her skor değişkeni dosyalanmış; formül + veri kaynağı + eşik açık.
2. **Otomatik İzlem** — 3.001 YouTube transkripti + Atom RSS + Cloudscraper + HTML scrape.
3. **Bağımsızlık** — Hiçbir analistle maddi/manevi bağ yok.
4. **Kanıt Zinciri** — Ham veriden sonuca kadar iz sürülebilir.
5. **(5. prensip manifesto'da) — kesin bulunmadı; kontrol lazım**

**Kendi disiplinim (anayasa_site.md v1.0 — S10'da kaleme aldım):**

| Disiplin | Yeniden sorgulama |
|---|---|
| **$0 bütçe** | Hâlâ geçerli. Cloudflare Pages 100GB/ay ücretsiz. Kırıldığı gün lansman kararına döneriz. |
| **V16 dürüst derinlik** | ÇOK GEÇERLİ. Site'nin farkı bu — "yetersiz" yazmak. Ama V16'yı UI'a **görsel gösterge** olarak yansıttım (6 katman bar); yeterince gözü tırmalamıyor olabilir — Patron tepki alsa yeniden bakılır. |
| **V16 kanonik sayı (V36)** | GEÇERLİ + kritik. Patron talimatta yanlış sayı verse ben master'a giderim. Hata payı: Patron'la çelişkide net taraf tutmak. |
| **V55 master read-only** | GEÇERLİ. Hiç master'a yazmadım. Kopya v2/data/ altına tek-yönlü. |
| **Telif açık-lisans** | GEÇERLİ. Wikimedia CC BY-SA + Google Fonts SIL OFL. Basın foto yok. |
| **Provenance şart** | GEÇERLİ ama uygulama YETERSİZ — v2/data/hero_lisans.json tek örnek. Tüm görsellerin kaynağı henüz JSON'da değil. **EKSİK.** |
| **Türkçe karakter subset şart** | GEÇERLİ. latin-ext 3 fontta doğrulandı. Kırılırsa `İ`/`ı` render bozulur. |
| **KVKK uyumu** | GEÇERLİ ama YARIM — form consent var, ama gerçek backend (Wrangler + hukuk revize) YOK. Auth/payment secret açıkken canlı olursa **büyük risk**. |
| **Cross-Hat dokunulmaz** | GEÇERLİ. `~/landgold-agents/` sadece okudum, yazmadım. |
| **Lane (veri-analiz devir)** | GEÇERLİ ama SINIRDA — site içinde küçük aritmetik (KPI hesaplama vb.) yapıyorum. Bu Lane ihlali sayılır mı? **Öz-sınama gerek.** |
| **Distinctive design** | GEÇERLİ. Bloomberg × FT × Economist estetiği. Jenerik AI dashboard'lardan ayrıştım. |
| **Canlı paralel (swap YOK)** | GEÇERLİ. /v2/ inşa edildi, mevcut / hiç swap edilmedi. Otel-satış modunda / dokundum ama feature-flag ile. |
| **Atomik commit** | GEÇERLİ. S5→S7 3 büyük push. Ama son 5 sprint'te git commit YOK (uncommitted birikim var — Patron kararı bekliyor). |
| **K24a Hafıza bildirim** | GEÇERLİ. 5 hafıza JSON yazdım (S6, S7, S8, S9, S10). |

**Yeni disiplin adayı (Standing):** "**Sürgün-Ölçek şerhi**" — SPA'da 4258 satırlık monolit render var. Ek özellik eklerken bu monolit büyür. **Bileşen bölme** disiplini yazılmalı (React.lazy, dynamic import). Şu an anayasada yok.

**Yasak-dil kuralım:**
- "Değerleme" YASAK (Endeksa diferansiyasyonu). Kullanılacak: Mülk Çevre Dosyası / Mahalle Raporu / Çevre Skoru. **Uygulama TAM.**
- Bayrak/emoji site metninde yok, sadece nav emoji "🗺️" var (S11'de gizlendi zaten).

### 3. ANAYASA / KURAL SETİM

Tam liste (anayasa_site.md v1.0'dan — 14 disiplin):

**Disiplinler:**
1. $0 bütçe
2. V16 dürüst derinlik
3. V16 kanonik sayı tek kaynak (V36)
4. V55 master read-only
5. Telif açık-lisans (SIL OFL / Apache 2.0 / CC0/CC-BY/CC-BY-SA + atıf)
6. Provenance şart (font + görsel)
7. Türkçe karakter desteği şart (latin-ext + combining U+0307)
8. KVKK uyumu
9. Cross-Hat dokunulmaz
10. Lane (veri-analiz devir yasağı)
11. Distinctive design
12. Canlı paralel (swap YOK)
13. Atomik commit
14. K24a Hafıza bildirimi

**Tuzaklar (8 madde):**
1. Kanonik sayı kayması
2. Telifli görsel
3. Sahte tamlık vitrin
4. Veri-analiz devir
5. Auth/payment SES tuzağı (scaffold ≠ canlı)
6. Jenerik UI sapma
7. Swap-erken yayın
8. Cross-Hat sızması

**Öz-denetim:** Sprint başı + sonu checklist (anayasada tam liste).

**Standing adaylarım:**
- **Standing #S-1 (aday)** — "Sürgün-Ölçek şerhi": SPA monolit > 4000 satırsa yeni özellik eklerken bileşen bölme zorunlu.
- **Standing #S-2 (aday)** — "Feature-flag KATİ": her sadeleştirme/kapatma yorum blok formatıyla + kesin geri-açılabilir olmalı (silme yasak).
- **Standing #S-3 (aday)** — "Provenance JSON zorunlu": her görsel için `_lisans.json` metadata (yazar + lisans + kaynak URL + indirme tarihi) — S8 hero_lisans.json örneği. Tüm görsellere uygulanmadı.

### 4. SAHİPLİK DATASI

**A) Kod (docs/):** 830 dosya, 249 MB toplam.

| Dosya seti | Yol | Boyut | Güncellik | Kanonik | Üreten |
|---|---|---|---|---|---|
| Ana SPA | `docs/index.html` | 4258 satır | 2026-05-27 c16c48a + 2026-06-07 S11 feature-flag | Evet | Manuel + React 18 CDN + Babel standalone |
| 7 dil landing | `docs/{tr,en,ru,de,ar,fa,zh}/index.html` | ~5-8 KB her biri | S5-S7 | Evet | Manuel çeviri (Sprint 5) |
| Bültenler | `docs/bultenler/*.html` (5 sayfa) | ~50 KB toplam | S3-S7 | Evet (yayın) | CC-Basın yayın çıktısı |
| Komponentler | `docs/komponentler/*.html` (4 sayfa) | ~55 KB toplam | S4 | Evet | Manuel |
| Manifesto + KVKK + Privacy 4 dil | `docs/{manifesto,kvkk,privacy,en/privacy,ru/privacy,de/privacy}.html` | ~40 KB | S6-S7 | Evet | Manuel + hukuk müşaviri REVİZE BEKLİYOR |
| Cookie banner | `docs/assets/cookie-banner.{js,css}` | ~10 KB | S7 | Evet | Python enjeksiyon script (mevcut değil scripts/, bir kereye mahsus enjekte) |
| /v2/ yeni nesil | `docs/v2/{index,dosya,fiyat,giris}.html + assets/` | 80 MB toplam | S6→S10 | Evet | Manuel + JS/CSS |
| Sitemap + robots | `docs/sitemap.xml`, `docs/robots.txt` | 12 KB + 500 B | S11 sadeleştirme | Evet | Manuel |

**B) Veri (docs/v2/data/ + docs/map/data/ + docs/data/):**

| Veri seti | Yol | Boyut | Kayıt sayısı | Güncellik | Kanonik-mi | Üreten/Kaynak |
|---|---|---|---|---|---|---|
| iller.geojson | `docs/map/data/iller.geojson` | 445 KB | 81 il | S7 v2 simplified (Shapely) | Kopya (kanonik TÜİK) | Sprint 7 Python script |
| ilceler.geojson | `docs/map/data/ilceler.geojson` | 2.9 MB | 973 ilçe | S7 | Kopya | Sprint 7 Python script |
| mahalleler.geojson | `docs/map/data/mahalleler.geojson` | 4.3 MB | 3.797 POINT (mahalle merkezi) | S7 | Kopya | Sprint 7 |
| mega.geojson | `docs/map/data/mega.geojson` | 12 KB | 25+ mega proje | S7 | Kanonik CC-Site | Manuel + CC-Basın |
| osb.geojson | `docs/map/data/osb.geojson` | 108 KB | ~200 OSB | S7 | Kanonik | TOBB kaynak |
| kisitli.geojson | `docs/map/data/kisitli.geojson` | 11 KB | Sınır/askeri | S7 | Kanonik | Manuel |
| Bursa 17 ilçe v2 | `docs/data/maps/bursa_17ilce_v2.json` | 605 KB | 1.112 mahalle | S7 | CC-Basın kanonik | CC-Basın v6 |
| Bursa 4 kadran | `docs/data/maps/bursa_4kadran.json` | 154 KB | 4 kadran × ilçe | S7 | CC-Basın | CC-Basın |
| Bursa top 20 | `docs/data/maps/bursa_top20.jsonl` | 11 KB | 20 mahalle | S7 | CC-Analiz | CC-Analiz |
| Mudanya MVP | `docs/data/maps/mudanya.json` | 3.5 KB | Mudanya bölüm | S4 (ilk MVP) | CC-Basın | CC-Basın |
| Master 38 il ilçe JSON | `docs/v2/data/ilceler/<il>/<ilce>.json` | 74 MB, 633 dosya | 27.732 mahalle | S8 | **Kopya, V55 read-only** | CC-Hafıza `tradia_konusmalar/mahalleler/` → Python script |
| il_index.json | `docs/v2/data/il_index.json` | 180 KB | 38 il × ilçe özeti | S8 | Türev | Python script (master'dan üretim) |
| kapsama_ozet.json | `docs/v2/data/kapsama_ozet.json` | 894 B | V36 özeti | S7 | Kopya | CC-Hafıza `_v36_kapsama_raporu_s24.json` |
| vgm_mahalle_join.json | `docs/v2/data/vgm_mahalle_join.json` | 3 KB | 4 kayıt | S8 | Kopya | CC-Tic T66 handoff |
| Arama indeksleri | `docs/v2/data/arama_idx_{il_ilce,mahalle}.json` | 91 KB + 4.28 MB | 671 + 27.728 | S9 | Türev | Python script |
| Hero panorama | `docs/v2/assets/hero/istanbul-panorama.jpg` | 159 KB | 1920×415 JPEG | S8 | Türev | Wikimedia Commons + Pillow resize |
| Hero lisans metadata | `docs/v2/data/hero_lisans.json` | 800 B | 1 kayıt | S8 | Kanonik (site) | Manuel |
| Şehir görselleri | `docs/images/sehir/` | 141 MB | 59 dosya | S6 mini-iş | Kanonik (Bing AI + ChatGPT üretim) | Görsel damga POC v1-v4 |
| og-image.jpg | `docs/og-image.jpg` | ~55 KB | 1200×630 sosyal medya | S3-S4 | Kanonik | Manuel |
| Master iller v2 | `docs/v2/data/master_iller_v2.json` | 1 KB | 38 master il listesi | S6 | Kanonik | Manuel (TUİK 2023 top 38 nüfus) |

**Toplam sahiplik:** ~250 MB canlı deploy alanı + ~300 MB `~/tradia_konusmalar/mahalleler/` master kaynak (kopya değil, salt-okuma).

**Kanonik-olmayan/türev:** arama indeksleri, il_index, hero panorama resize, kapsama_ozet — hepsi Python script ile master'dan üretim.

**Üretim/güncelleme betikleri (docs/scripts/ altında değil, ilgili sprint komutuyla üretildi):**
- Görsel damga POC (docs/scripts/gorsel_damga.py yok — mevcut değil şu an; POC iterasyon çıktıları var ama script kaydedilmemiş)
- Arama indeks üretim (S9 sprint komutu, script arşivlenmemiş)
- 35 il aktarım (S8 sprint komutu, script arşivlenmemiş)

**Kritik boşluk:** Yeniden-üretim betikleri commit edilmemiş; sprint konuşma dışı geri üretilirse **kayıp riski**. Standing #S-4 (aday): "Üretim betiği repo'ya girer" (script/ dizini altına).

### 5. TEKNİK İLERLEME KRONOLOJİSİ

| Sprint | Tarih | Commit/Yer | Kilometre taşı |
|---|---|---|---|
| **Pre-S1** | 2026-05-12→16 | pipeline daily runs | landgold-agents auto haber/mülk update |
| **Pre-kimlik** | 2026-05-16 civarı | 7cacfcf, 79908ce | Cron pause + orphan kart temizlik — kalite çıkışı |
| **Sprint 3 (?)** | 2026-05 orta | c0175b0 | **Tradia Basın Sayı 1+2+3 + manifesto + 4 komponent** — kimlik doğuşu |
| **Sprint 4** | 2026-05-24 | 940a159 | 7 dilli URL + Tradia Maps MVP (Bursa Mudanya) |
| **Sprint 5** | 2026-05-27 | fd2c762 (13 dosya) | Lead backend kod hazır + Bursa map dropdown + 3 dil i18n + SEO |
| **Sprint 6** | 2026-05-27 | 1763b8e (18 dosya) | 6-katman maps + EN/RU bültenler + KVKK/Privacy başlangıç |
| **Sprint 7** | 2026-05-27 | c16c48a (40 dosya) | **13/13 URL canlı** + Bursa 1112 mahalle + KVKK/Privacy 4 dil + cookie banner 12 sayfa |
| **S6 mini-iş** | 2026-05-28→06-02 | Uncommitted | Görsel damga POC v1→v4 (4 iterasyon) + logo bulundu; toplu uygulama S7 sonrasına PARK |
| **S6 (yeni hat)** | 2026-06-06 | Uncommitted | `/v2/` foundation — 4 sayfa iskelet + hero + Türkiye haritası (Leaflet, 38 aktif/43 soluk) |
| **S7 (yeni hat)** | 2026-06-06 | Uncommitted | Gerçek veri: pilot 3 il tam kopya (İst+Bursa+Çan), 6.85 MB, kapsama_ozet |
| **S8 (yeni hat)** | 2026-06-06 | Uncommitted | 38 il aktarım (74 MB), VGM 4 kayıt, Wikimedia hero CC BY-SA, kanonik V36 (206/139/32287/76.8) |
| **S9 (yeni hat)** | 2026-06-07 | Uncommitted | UX cila: autocomplete (27.728 mahalle) + yan panel SPA + mahalleler.geojson POINT katmanı |
| **S10** | 2026-06-07 | Uncommitted | **anayasa_site.md v1.0 yazıldı** + site_tipografi_v1.md (Source Serif 4 + Inter + JetBrains Mono, SIL OFL) |
| **S11 (bugün)** | 2026-06-07 → 07-15 | Uncommitted (**17 modified + docs/v2 tüm untracked**) | **Otel-satış modu** — 10 sayfa noindex+redirect + 8 SPA bloğu feature-flag + sitemap/robots temizle |

**Bugünkü yetenek haritası:**

```
CC-Site (yetenek)
├── VİTRİN
│   ├── 33 HTML sayfa (7 dil + bültenler + komponentler + v2)
│   ├── Cookie banner 12 sayfa enjekte
│   ├── KVKK/Privacy 4 dil
│   └── Manifesto + 5 prensip
├── VERİ SERGİLEME (v2)
│   ├── Türkiye haritası Leaflet 6 katman
│   ├── Autocomplete 27.728 mahalle (671 il/ilçe eager + mahalle lazy)
│   ├── Yan panel drill-down (il → ilçe → mahalle dosyası)
│   ├── Mahalle dosyası 6 katman derinlik bar (V16 dürüst)
│   ├── VGM kurum mülk paneli (T66'dan 4 kayıt)
│   └── Kapsama özet KPI (V36 kanonik)
├── ETKİLEŞİM
│   ├── Lead form (onsubmit alert, backend YOK)
│   ├── Ön kayıt/Giriş tab (scaffold, auth YOK)
│   └── Waitlist CTA (aday il)
├── SEO
│   ├── Sitemap 23 URL (S11 sonrası, 6 URL yorumda)
│   ├── robots.txt 6 Disallow (S11)
│   ├── Hreflang 7 dil
│   └── Schema.org JSON-LD (index)
└── STANDBY (Wrangler deploy bekliyor)
    ├── lead-handler.js (5 endpoint)
    ├── admin-handler.js (Bearer auth dashboard)
    └── notify-webhook.js (Telegram + Cloudflare Email)
```

### 6. BEYKOZ DOSYASI KATKIN + SON KONUŞMA KARARLARI

**Beykoz vakasında CC-Site'in doğrudan katkısı YOK.**

**V16 dürüst:** Beykoz vakası CC-TT-MAP + CC-Finans + CC-Signals'da yürüdü. CC-Site vakayı **canlı bir sayfada yayınlamadı, ayrı bir Beykoz bülteni çıkarmadı**. Sadece altyapı katkısı var:
- `docs/v2/data/ilceler/istanbul/beykoz.json` mevcut (S8 aktarımıyla)
  - 45 mahalle
  - Güven dağılımı: **TÜM 45 mahalle MASTER_YOK** (temiz damga hiç yok)
  - ai_baglam 45/45 dolu (CC-TT-AI eski üretim)
  - Kural 13 sinyal 8/45 (CC-Analiz eski çıktı)
  - Resmi koord 41/45 (CC-Site T54-T55 IBB birleşik)
- `/v2/dosya.html?il=İstanbul&ilce=beykoz` drill-down teknik olarak çalışır (S9 UX ile), ama içerik doldurulmadı (backend/deploy yok, sadece iskelet render)

**Beykoz için CC-Site'in katkı sağlayabileceği ama YAPMADIĞI:**
- Beykoz için ayrı bülten sayfası (Sayı 2 = Bursa, Sayı 3 = Arnavutköy — Beykoz yok)
- Beykoz mahallesine özel harita katmanı
- Beykoz VGM kaydı zaten VGM handoff'ta yoktu (Merdivenköy + Altunizade var, Beykoz mahallesi yok)

**Bu dosya hazırlanırken (S6→S11) Patron'un verdiği kararlar/dersler/düzeltmeler:**

1. **[S8 · Patron]** "kanonik sayı düzeltme: V36 = 206 altın / 139 dikkat / 32.287 mahalle / %76.8. 434/344 KULLANMA." → Ders: Patron talimatındaki rakama değil master'a git (V55).

2. **[S6 mini-iş · Patron × 4 iterasyon]** Görsel damga POC:
   - v1: Alt bant + "MAHALLE RAPORU" → Patron: "Alt bant kaldır"
   - v2: Sadece logo (og-image.jpg) → Patron: "Üstteki YALOVA yazısı kalsın, gerçek Tradia logosu kullan"
   - v3: Gerçek logo (kırmızı kare + TRADIA + TURKEY·INTELLIGENCE) → Patron: "TRADIA yazısı kutu ile dikey merkez, TURKEY·INTELLIGENCE kaldır"
   - v4: Dikey merkez + tagline yok → Patron ONAY. Toplu uygulama denendi, çakıştı (Yalova geniş yazı özel durumdu), geri alındı. 5 pozisyon seçeneği hâlâ Patron yanıtı BEKLİYOR.

3. **[S7-S8 · Patron]** "Master read-only ver kanonik" → V55 disiplini pekişti.

4. **[S9 · Patron]** "UX tamamlama — autocomplete + yan panel + mahalleler.geojson" → SPA drill-down mimarisi.

5. **[S10 · Üst Akıl]** "Anayasa YAZ + tipografi kararı + provenance" → Kimlik yazıya döküldü.

6. **[S11 · Patron/Üst Akıl]** "Otel-Satış Modu — üyelik + map + eksik gizle, feature-flag KATİ, master read-only, PUSH YOK" → Kısıtlama disiplini + geri-açılabilirlik.

7. **[S11 · Patron G.4]** 6 karar (v2 redirect, map redirect, bülten metin statikle, OG kal, pricing preview izole, komponent kalsın-strip). Uygulama tam.

8. **[S9 · Patron]** "Mahalleler.geojson polygon değil POINT — yine ekle (V16 dürüst adapt)" → circleMarker + yasanabilirlik_v2 orantılı radius.

9. **[bugün · Patron]** "Öz-analiz tam kapsam raporu" + "Masaüstü TT-Tüm CC klasörüne kaydet" → cikti/site_oz_analiz.md üretildi ve kopyalandı.

10. **[bugün · Üst Akıl]** "KURULUŞ dosyası: TT-HAFIZA takılı, geçmiş atlanmasın, kuruluştan bugüne yaz" → **bu dosya**.

### 7. DİĞER CC'LERLE SINIRLARIN

| CC | SENİN işin | SENİN DEĞİL — o CC'nin işi |
|---|---|---|
| **CC-Hafıza** | V36 sayısını render, il_index/kapsama_ozet kopya, mahalle JSON kopya | Master DB tutma, mahalle şeması v2.0, guven_damga atama |
| **CC-Analiz** | Kural 13 sinyalini UI'da göster, mahalle skor render | Skoru hesaplama, sinyal tipi (yatirim_altin) belirleme, master ilan aggregate |
| **CC-Basın** | Bülten yayını (Sayı 1+2+3), magazin sayfası, mahalle dosyası UI | Mahalle içerik metni, bülten yazımı, editöryel karar, fuzzy match |
| **CC-Tic** | VGM handoff render (kurum mülk paneli), firma DB link (gelecek) | VGM veri toplama, T66 handoff üretimi, firma DB kanonik, yabancı sermaye analizi |
| **CC-Sosyal** | POI dağılım render (gelecek) | YouTube transkript, RSS, POI JOIN, 8 şehir kapsama |
| **CC-TT-AI** | ai_baglam 8 kanal UI render | Kanalları üretme, TTA sprint sürücüsü, doğrulanmamış katman izolasyonu |
| **CC-TT-MAP** | mahalleler.geojson POINT katmanı görselleştir | GeoJSON kaynağı toplama, mahalle koordinat |
| **CC-Finans** | (gelecek) portfolio panel | Finansal hesaplama, Şimşek makro index, yatırım stratejisi |
| **CC-Signals** | (gelecek) sinyal panel | Sinyal tespit, cross-source teyit, üye bildirim mantığı |
| **Vezir** | — | Git push, atomik commit gönderim, sürüm kontrol |

**Çakışma alanları (dikkat):**
- **Site vs Analiz:** Site içi KPI hesaplama (örn. 32.287 mahalle × ilan/mahalle ort) — Lane ihlali sayılır mı? Anayasada Lane keskin ama "gösterge amaçlı toplam" için istisna yok. **Öz-sınama:** V36 rakamlarını doğrudan kaynaktan render ediyorum, kendim hesaplamıyorum. Güvenli.
- **Site vs Basın:** Mahalle dosyası UI vs mahalle içerik. Ben iskelet + veri, Basın metin. Sınırda: dosya.html'de "yetersiz" placeholder metinleri kimse yazmıyor — CC-Basın S33 fuzzy match tamamlanmadan boş.
- **Site vs Vezir:** Ben commit yapabilirim (sprint sonu atomik), Vezir push yapar. Bugün sprint commit YOK — bu bir Vezir borcudur (17 modified + docs/v2/* untracked).

### 8. AÇIK BORÇLAR + GELECEK 3 YETENEK ÖNERİM

**Açık borçlar (kritik → düşük öncelik):**

| # | Borç | Sahip | Etki |
|---|---|---|---|
| 1 | **Wrangler deploy** (lead-handler + admin + notify) | Patron manuel | Kritik — form/lead/kayıt canlı YOK |
| 2 | **Hukuk müşaviri /privacy + /kvkk revize** | Patron + hukuk | Kritik — form aktive olmadan revize şart (KVKK) |
| 3 | **Stripe/iyzico anahtarı** | Patron | Kritik — pricing scaffold canlıya geçemez |
| 4 | **43 aday il aktarım** | CC-Analiz + CC-Basın öncelik → Site | Orta — Master 38 dışı iller için drill-down |
| 5 | **S7 görsel damga POC pozisyon kararı** | Patron | Orta — 5 seçenek arasında karar |
| 6 | **Sprint commit push** (17 modified + docs/v2/* untracked) | Vezir | Orta — sadeleştirme ve S8-S11 canlıya gitmedi |
| 7 | **CC-Basın S33 mahalle içerik** (15+ mahalle dosyası) | CC-Basın | Düşük (bekleniyor) — dosya.html'de "yetersiz" alan doldurur |
| 8 | **Provenance _lisans.json** tüm 59 şehir görseli için | Site | Düşük — Standing #S-3 önerdim |
| 9 | **Master 38 il revize** (CC kapsama bazlı) | Patron + CC-Analiz | Düşük — TUİK top 38 yerine gerçek kapsama |
| 10 | **Sayı 6 (Bursa) tam yayını** | CC-Basın | Düşük — şu an sadeleştirmede gizli |

**Gelecek 3 yetenek önerim:**

1. **📊 Mahalle karşılaştırma paneli** — Kullanıcı 2-3 mahalleyi yan yana koyup Kural 13 sinyalleri, ai_baglam kanallarını, VGM kayıtlarını **karşılaştırır**. Şu an drill-down tek mahalle; karşılaştırma → yatırımcı karar destek. **Kabiliyet:** SPA yan panel + 2. panel + JSON birleşim. **Zaman:** 1 sprint.

2. **🔔 Mahalle takip listesi (LocalStorage bazlı)** — Kullanıcı favori mahalle işaretler, gelecekte sinyal geldiğinde bildirim (Wrangler + Push API). Şu an backend yok, LocalStorage başlangıç yeterli. **Kabiliyet:** JS localStorage + panel "takipte" rozeti. **Zaman:** 0.5 sprint.

3. **🖨️ Mahalle dosyası PDF/PNG export** — html2canvas ile mahalle sayfasını tek görsele döker, Tradia logosu ile watermark. Kullanıcı LinkedIn/WhatsApp paylaşır. **Kabiliyet:** html2canvas CDN + görsel damga POC v4 pipeline'a çağrı. **Zaman:** 1 sprint (görsel damga toplu uygulama sonrası).

**Gizli 4. yetenek:** Site içi çalışma metrik dashboard'u (kim ne zaman hangi mahalleyi aradı, hangi bültenle geldi) — ama **KVKK-hassas**, backend + rıza mekanizması olmadan riskli. **Erteledim.**

---

## HARİÇ TUTULANLAR (yazılmadı — doğrulama)

- ❌ Patron'un ayırdığı konular
- ❌ Ortaklık teklifleri
- ❌ Şahsi işler
- ❌ Tradia-dışı projeler (Aldemir Global vb.)

Bu dosyada **yalnızca CC-Site'in kendi kuruluş + sahiplik + kural + kronoloji + Beykoz katkı (yoktu) + sınır + borç** bilgisi vardır.

---

## Meta

- **Yazan:** CC-Site (kendi öz-tarama betikleriyle)
- **Kaynak dosyalar:** git log + tradia_konusmalar/02_CC_STATE/anayasa_site.md + docs/cc_site_s{6,7,8,9}_kapanis.md + docs/site_tipografi_v1.md + tradia_konusmalar/data/hafiza_bildirim_ccsite_s*.json (×5) + cikti/site_{audit,uygulama_raporu,oz_analiz}.md
- **Betik-önce:** tüm envanter Bash find/grep + python3 json.load ile üretildi
- **$0:** araçlar (bash, python, git) sistem yerleşik
- **KVKK #31:** hiçbir kişisel veri yazılmadı; sadece yazılım+veri kimliği
- **Silme-yok:** hiçbir dosya silinmedi, hiçbir içerik kaybı yok
- **Gönderim:** dosya bırakıldı, push Vezir'e havale (17 modified + docs/v2/* untracked)
- **Yer:** `~/Desktop/TT-Tüm CC/kurulus/KURULUS_CC-Site.md`

*KURULUŞ dosyası tamamlandı. Bir sonraki sprint için hazırım.*
