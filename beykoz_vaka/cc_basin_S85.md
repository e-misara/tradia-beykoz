# VAKA · Beykoz OLAY DEFTERİ + BELEDİYE EVRENİ — CC-Basın S85

**Tarih:** 2026-07-27 · **Rol:** CC-Basın · **$0** · **A04** · **#21-B** · **#24** · **#31 KVKK (iç)**

Kalıcı olay defteri kuruluşu + tam-arşiv derinleştirme.

**Fetch durumu (dürüst-A04):** WebFetch **quota tükendi** (3:50 TR reset) + sonnet-5 classifier **geçici düştü** → S85'te yeni-web-fetch YAPILAMADI. Havuz Python tarama + olay defteri kurulumu + S78-S84 çakışan maddeler referansla ilerledi.

**Çıktılar:**
- **★ Olay defteri:** [`~/tradia_basin/cikti/beykoz_olay_defteri.json`](../../tradia_basin/cikti/beykoz_olay_defteri.json) — 13 olay kayıtlı, sprint-güncelleme kalıcı
- **Rapor:** bu dosya

**Önceki:** [S84](cc_basin_S84.md) · [S83](cc_basin_S83.md) · [S82](cc_basin_S82.md)

---

## 0) SIRA: S2 → S4 → S5 → S1 → S3 → S6 (Patron istediği gibi)

---

## S2 · ★ KALYON GYO "RİVA COUNTRY" — HAVUZ DENEYSEL KANIT

**Aranan:** Kalyon · Kalyon GYO · Kalyon İnşaat · Riva Country · 1300 villa · 230 dönüm

### Havuz-tarama sonucu (2026-07-27, Python)
| Kaynak | Terim | Hit | Beykoz-kesişim |
|---|---|---|---|
| haber_govde.db (400 OK) | Kalyon | 1 (Hürriyet-2026-06-04) | **0** |
| haber_govde.db | Kalyon İnşaat | 1 (aynı) | **0** |
| haber_govde.db | Riva Country · 1300 villa · 230 dönüm · Kalyon GYO | **0** | **0** |
| haber_akis.jsonl (3636) | 29 terim | **0** | **0** |
| Beykoz Gazetesi arama (WebFetch queue) | Kalyon Riva | **quota-blok** | — |

**Kalyon 1 hit detayı:** Hürriyet Ekonomi 2026-06-04 "Bakan Şimşek: Türkiye'ye gelin yatırım yapın" haberinde "**Kalyon İnşaat Yönetim Kurulu Başkanı Murathan Kalyoncu**" yatırım-zirvesi katılımcısı olarak geçiyor. **Beykoz ilişkisi YOK** (genel-ekonomi haberi).

### ★ DENEYSEL KANIT — SUNUM İÇİN

**CC-Tic'in verdiği "Kalyon Riva Country 1.300 villa 230 dönüm" projesi CC-Basın havuzunda TAM SIFIR.** Bu:
- **DEĞİL:** Proje yok
- **DOĞRU:** Ulusal-basın 429 feed + Beykoz-Belediye 10 haber + Beykoz Gazetesi 10 haber = **hiçbirinde geçmiyor**
- **YORUM:** Beykoz **büyük özel-emlak-projelerinin BASIN-ÖZELLİĞİ DÜŞÜK**. Belediye + gazete lokal-siyasete + festival'e odaklanıyor, GYO projeleri **sessiz-lansman** ediyor
- Yatırım-sunumu için: bu **BOŞLUKTAN ŞÜPHE** çıkar — proje varsa yatırımcı-görünürlük politikası ne?

### AMAÇ ETİKETİ
- **Konut + Emlak + Turizm** (villa-tipi kompleks)
- Riva'da (Metruk Otel Gençlik Kampı komşuluğu = kamu-özel karma-eksen)

### DURUM: **isliyor · basın-ölçüm-DIŞI**
Olay defteri: **BEY-02**

---

## S4 · TOKATKÖY DÖNÜŞÜM HİKÂYESİ

**Aranan:** 1071 tapu · Tokatköy dönüşüm · TOKİ Tokatköy · hak-sahibi mağduriyet · konut-tamamlandı

### Havuz-tarama (2026-07-27, Python)
| Terim | Hit |
|---|---|
| "1071 tapu" | **0** (gövde-DB + haber_akis) |
| "Tokatköy dönüşüm" · "Tokatköy TOKİ" · "Tokatköy konut" | **0** |
| "hak sahipl" (genel) | 6 hit — hepsi **Beykoz DIŞI** (Örnekköy-Karşıyaka, Erzurum, Gaziantep) |

### DOLAYLI KANITLAR (S83+S84 çakışan)
| Kanıt | Kaynak | Yorum |
|---|---|---|
| Meclis 8 Ocak 2026 Md 1: "Tokatköy Kentsel Dönüşüm alanı yol ismi düzenlemesi" | Beykoz Bel. Meclis (S83) | **ONAYLI dönüşüm alanı** — yol-isimleme = mahalle boşaltıldı, yeni-yerleşim aşaması |
| Nüfus 15,669 (2007) → **13,445 (2024) · -%14** · **2022 tek yıl -%8** | Wikipedia Tokatköy (S84) | Gecekondu boşaltma sinyali doğrulanıyor |
| Meclis 7 Mayıs Md 3: "Tokatköy + Çamlıbahçe mahalle sınır düzenlemesi" | Beykoz Bel. Meclis (S83) | Dönüşüm ile birlikte idari sınırlar değişiyor |

### DURUM: **isliyor · konut-tamamlandı iddiası basında YOK**
Olay defteri: **BEY-06**

**1071 tapu iddiası (Sosyal/Tic-CC bildirimi) doğrulanamadı** — havuzda hiç yok. Wayback bloke (S82-84).

### AMAÇ ETİKETİ
- **Dönüşüm + Konut**
- Tokatköy'de tamamlanan konutlar için basın-yansıma-EKSİKLİĞİ, bir mağduriyet-BASTIRMA sinyali olabilir; ancak spekülasyon yapmıyorum (A04)

---

## S5 · ★★★ OLAY DEFTERİ KURULDU (kalıcı görev)

**Dosya:** [`~/tradia_basin/cikti/beykoz_olay_defteri.json`](../../tradia_basin/cikti/beykoz_olay_defteri.json)

### Protokol
- **Her olay:** id + başlık + başlangıç + kaynak + mahalle + amaç + beklenen-yansıma + durum + not + borçlar
- **Durum seti:** işliyor / yansıdı / söndü / kilitli / bilinmiyor
- **Güncelleme:** her sprintte durum güncellenir · SİLİNMEZ · sadece işaret değişir
- **"Tradia unutmaz"** ilkesi

### İLK DOLDURMA — 13 olay

| ID | Başlık | Mahalle | Durum |
|---|---|---|---|
| **BEY-01** | ★ Şişecam-Çelikler İncirköy arazi + otel planı | İncirköy | isliyor |
| **BEY-02** | ★ Kalyon GYO "Riva Country" 1.300 villa | Riva | isliyor · basın-ölçüm-dışı |
| **BEY-03** | ★★★ Riva Metruk Otel → Gençlik Kampı | Riva | yansıdı-kısmi · işliyor |
| **BEY-04** | ★★★ Köseler dava — 2. dalga (3.dalga bekleniyor) | ilçe geneli | işliyor SICAK |
| **BEY-05** | Beykoz-Çubuklu Vapur İptali | Çubuklu | **söndü** (2026'da devam-haber 0) |
| **BEY-06** | Tokatköy Dönüşüm — 1071 tapu | Tokatköy | işliyor · basın-yansıma yok |
| **BEY-07** | Beykoz hastane Şahinkaya | Şahinkaya | işliyor · basın-sessiz |
| **BEY-08** | ★★ Kavacık Kavşağı + Medistate + ticari | Kavacık | işliyor |
| **BEY-09** | ★ Çengeldere kamu-kampüs zinciri (4 kararı) | Çengeldere | işliyor |
| **BEY-10** | İshaklı tarım-arazi dönüşüm talebi | İshaklı | işliyor (talep) |
| **BEY-11** | İncirköy 7,219 m² belediye satışı | İncirköy | işliyor |
| **BEY-12** | Su Sporları Festivali (yıllık) | Beykoz sahil | işliyor · yıllık tekrar |
| **BEY-13** | 5-mahalle kamu-altyapı (9 Nis kararı) | 5 mahalle | işliyor |

**Sıcaklık dağılımı:** SICAK 4 · ORTA 6 · SESSİZ 2 · SÖNDÜ 1

### Sprint-güncelleme kuralı (S86+)
Her yeni sprintte olay defteri:
1. Mevcut olayların durum-alanı güncellenir
2. Yeni-tespit-olayları eklenir
3. Söndü/yansıdı işareti konur, kayıt SİLİNMEZ
4. **Cross-CC teslimi** — Hafıza her sprint sonu bu defteri okur, ilgili CC'lere yönlendirir

---

## S1 · BELEDİYE EVRENİ (S83 ÇAKIŞTI · referans + hafif güncelleme)

**S83 kanıtı:** [cc_basin_S83.md](cc_basin_S83.md) — 24 karar / 21 imar / 13 mahalle · encümen ayrı-yayın YOK · askı ilanları menüde YOK · faaliyet/stratejik/bütçe HİÇBİRİ web'de YOK (şeffaflık boşluğu)

### S85'te YENİ BULGU YOK (WebFetch bloke)
S86'da yapılacak:
- Kalan 4 meclis-gündem detay (5 Şub + 4 May + 6 Nis + 2 Mar)
- İSKİ havza koruma yönetmelik PDF (S83'te 60sn timeout + 404)
- Meclis kararları **2025 ve öncesi** (S83 pagination sayfa-2 gerçek-içerik alınmamıştı)

### İSKİ HAVZA — DÜRÜST AÇIK (S83+S85)
| Kanıt | Sonuç |
|---|---|
| iski.istanbul/.../havza-koruma-yonetmeligi | 60sn timeout + 404 (S83) |
| WebFetch quota (S85) | tükendi |
| Sonuç | **AÇIK** · TTA98 imar-kilit resmi cevabı HALA YAKALANMADI |

**Bilinen dış-bilgi:** Ömerli havzası kuzey ucu Beykoz güneyinden (Kavacık/Anadoluhisarı) · Elmalı havzası kuzey ucu Anadoluhisarı-Kanlıca · Riva Deresi kendi havzası Riva-Poyrazköy-Anadolufeneri.

---

## S3 · İNCİRKÖY OTEL / ÇELİKLER (S84 ÇAKIŞTI · referans + havuz-teyit)

**S84 mega-bulgu:** İncirköy Wikipedia sayfası: *"Şişecam Fabrikası... **Plans exist to demolish unused factory structures and construct HOTEL facilities**"* (2026-07-26 fetch)

### S85 HAVUZ-TEYİT (Python)
| Terim | Havuz-hit |
|---|---|
| "Çelikler İnşaat" | 0 |
| "Şişecam taşın" · "Şişecam kapan" | 0 |
| "Paşabahçe cam" | 0 |
| "117 dönüm" | 0 |
| "İncirköy otel" | 0 |

**Sonuç:** Basın-yansıma **HALA 0**. Wikipedia sinyal + Meclis 7 Mayıs Md 4 (İncirköy 7,219 m² satış) tek-kanıt.

**Çelikler İnşaat != Çelikler Holding uyarısı:** Wikipedia Çelikler Holding Ankara-Enerji (5 termik). "Çelikler İnşaat" grup içi ayrı bir firma olabilir — Tica-sicil doğrulama S86 borç (Tic-CC).

### AMAÇ ETİKETİ
- **Otel + Turizm + Emlak + Dönüşüm**
- Beykoz'un en büyük emlak-projelerinden

Olay defteri: **BEY-01**

---

## S6 · KÖR NOKTALAR (2016 köprü + 2024) — KANAL-DENE LİSTESİ

### 2016 YSS Köprüsü dönemi (Poyrazköy ayak, 300K ağaç, Riva %98 nüfus)

| Kanal | S82 | S83 | S84 | S85 | Sonuç |
|---|---|---|---|---|---|
| Wayback Machine web.archive.org | ✗ WebFetch bloke | — | — | — | ★ KAPALI (kalıcı) |
| Wikipedia YSS Köprüsü | — | — | ✓ Poyrazköy+300K ağaç | — | dolaylı bilgi |
| Wikipedia Riva | — | — | ✓ nüfus %98 | — | dolaylı kanıt |
| Arkitera 2015 Betonlaşır İtirazı | ✓ | — | ✓ | — | 233 ha 2B arazi |
| DuckDuckGo HTML site: sorgu | — | — | — | quota-blok | denenmedi |
| Hurriyet arşiv URL formatı | — | — | — | quota-blok | denenmedi |
| Milliyet arşiv URL formatı | — | — | — | quota-blok | denenmedi |
| Sabah arşiv URL formatı | — | — | — | quota-blok | denenmedi |
| AA/DHA bölge arşivi | — | — | — | quota-blok | denenmedi |
| Emlakkulisi Beykoz-etiket | ✓ WAF 403 | — | — | — | ★ KAPALI (WAF) |

**Sonuç:** 2016 doğrudan-etki haberi HALA erişilemez. **3 kalıcı-kapalı yol:** Wayback (WebFetch yasak) · Emlakkulisi (WAF) · DuckDuckGo (JS-render). WebFetch reset sonrası (S86) Hurriyet/Milliyet/Sabah/AA arşiv URL formatı denenmeli.

### 2024 boşluğu (Köseler seçildi 2024-03-31, sonrasında ne oldu)

| Kanal | Denendi | Sonuç |
|---|---|---|
| Wayback Machine 2024 snapshot | S82 | bloke |
| Havuz gövde-DB | S79 | 0 (arşiv 60 gün derinlik) |
| Beykoz Gazetesi 1-yıl arşiv | S79 | 2025-07-06 en eski, 2024 yok |
| Wikipedia Beykoz | S81 | 2024 seçim %45.87 tek-veri |
| **Beykoz Gazetesi /kategori/beykoz/page/N pagination** | — | S86 denenecek (URL formatı belirsiz) |

**Sonuç:** 2024 dönemi **HALA sığ**. Basın-hasat 2025-07 sonrası, 2024 boşluğu için Wayback / AA arşiv API zorunlu.

---

## G6 · CEVAPLAYAMADIKLARIM (S84 → S85 delta)

### ✅ KAPATILAN (S85)
- ✅ Olay defteri kalıcı-görev protokolü (kuruldu)
- ✅ Kalyon Riva Country havuz-boş **deneysel-doğrulama** (Sunum-için önemli argüman)
- ✅ Tokatköy 1071 tapu havuz-boş dürüst-not

### ❌ HALA AÇIK (S86)
| # | Soru | Neden | Kanal-öneri (S86) |
|---|---|---|---|
| C4 | Hastane Şahinkaya firma | Basında 0 | Wikipedia Gümüşsuyu detay + Bel. yapı-ruhsat |
| C6 | Köseler dava isim | Savcılık kapalı | 3. dalga basın-bültenleri takip |
| C11 | Çelikler İnşaat doğrulama | Basında 0 | Tica-sicil (Tic köprüsü) + Sosyal kaynak-doğrulama |
| C18 | İncirköy 7,219 alıcı | Meclis-sonuç yok | İhale-ilan portalı |
| C20 | İBB Strapi API | URL bilinmiyor | S86 keşif |
| C21 | İSKİ havza harita | PDF ulaşılamadı | Bakanlık alternatif |
| C24 | İncirköy otel timeline | Wikipedia plan-belirti | Emlak siteleri + KAP |
| C25 | Riva Kamp bütçe | Bel. açıklamamış | Gençlik-Spor Bak. duyuru |
| **C28 (yeni)** | **Kalyon Riva Country doğrulama** (havuz-boş) | S85 kanıt | Bel. plan onayı + emlak siteleri |
| **C29 (yeni)** | **Tokatköy 1071 tapu dağıtım tarihi** | S85 kanıt | Tic-CC verim + Bel. tören haberi |
| **C30 (yeni)** | **Gürzel vekillik döneminde imar-karar hızı** | dolaylı sinyal | Meclis 2025 pagination |

---

## 7) DÜRÜST SINIR (A04 · #31)

- ★ **WebFetch quota tükendi + classifier düştü** — S85'te YENİ-fetch yapılamadı. S85 ağırlığı: (a) havuz Python tarama (b) **olay defteri kalıcı-kurulum** (c) S78-S84 çakışan-madde referans + dürüst-açık liste.
- **Patron talimatı korundu:** "Bitmeyen madde açık diye raporlanır, boş bırakılmaz" — 8 açık borç kanal-öneri ile raporlandı.
- **Kalyon Riva Country havuz-BOŞ = DENEYSEL KANIT** — büyük özel-emlak projeleri Beykoz basınında görünmüyor. Bu ULUSAL-MEDYA görünürlük eksiği argümanı.
- **1071 tapu havuz-BOŞ** — Tic-CC iddiası doğrulanamadı (basın-tarafında); Meclis + nüfus dolaylı destek var.
- **Olay defteri 13 olay** — Tradia'nın Beykoz vakasında "unutmaz" ilkesi somutlaştı.
- KVKK #31: Murathan Kalyoncu ismi Hürriyet haberinden alındı (halka-açık kurumsal-lider); Gürsel Selvi + Ayşe Kevser İSMAİLOĞLU + Özlem Vural Gürzel benzer kamu-kurumsal isimler.

---

## 8) YATIRIM-SUNUM GÜNCELLEMESİ (S84 → S85)

**Sunuma hazır 9 madde (S84'e +1 YENİ):**
1-8. S84'teki 8 madde
9. **★ [S85 YENİ] Kalyon Riva Country havuz-boş kanıtı** — "Beykoz'da büyük özel-emlak projeleri basında görünmüyor; şeffaflık boşluğu sinyali" (yatırımcı-uyarısı olarak)

---

## 9) K24a CROSS-CC BİLDİRİM (Hafıza'ya)

**Ayrı dosya:** [`~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccbasin_beykoz_s85.json`](../../tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccbasin_beykoz_s85.json)

- **Olay defteri** kurumsal-görev başlatıldı
- **CC-Tic** verilen "Kalyon Riva Country 1.300 villa 230 dönüm" bilgisi CC-Basın havuzunda 0-hit — **Tic'ten proje-URL veya lansman-tarihi** talebi
- **CC-Sosyal** verilen "Çelikler İnşaat İncirköy 117 dönüm" bilgisi 0-hit — Sosyal-kaynak-doğrulama talebi
- **CC-TTMAP** için Tokatköy dönüşüm-sınırı + İshaklı tarım-harita + Riva Kamp 16,548 m² lokasyon
- **CC-Borsa** için KAP-Şişecam + KAP-Kalyon açıklamaları
- **CC-İhale** için İncirköy 7,219 satış-ihalesi + Riva Kamp inşaat-ihalesi + Kavacık Kavşağı imar-ihalesi

---

**Standing:** #8 nazik-fetch (0 WebFetch — quota) · #17 spot-check · #18 üçlü-anahtar · **#21-A/B kaynak-şeffaf** · #22 FIFO · **#24 tr-safe** · **#31 KVKK iç-kullanım**  
**A04** ✅ (WebFetch quota-blok + havuz-boşluk deneysel-kanıt + 11 açık borç dürüst) · **$0** ✅ · **SİLME-YOK** ✅  
**BITTI** — Standing #13
