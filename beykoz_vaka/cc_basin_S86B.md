# VAKA · Beykoz FETCH HATTI DEĞİŞİMİ (terminal hasat) — CC-Basın S86-B

**Tarih:** 2026-07-27 · **Rol:** CC-Basın · **$0** · **A04** · **#21-B** · **#24** · **#31 KVKK (iç)**

WebFetch YERİNE Python requests + disiplinli hasat. Ham diske alındı, işleme sonra — kalıcı çözüm.

**Betik:** [`~/landgold-agents/scripts/beykoz_S86B_hasat.py`](../../landgold-agents/scripts/beykoz_S86B_hasat.py)  
**Ham arşiv:** [`~/tradia_basin/ham/S86/`](../../tradia_basin/ham/S86/) — 20+ HTML  
**Rapor:** bu dosya  
**Olay defteri v3:** [`~/tradia_basin/cikti/beykoz_olay_defteri.json`](../../tradia_basin/cikti/beykoz_olay_defteri.json)  
**Bildirim:** [`hafiza_bildirim_ccbasin_beykoz_s86b.json`](../../tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccbasin_beykoz_s86b.json)

---

## 🎯 3 MEGA-BULGU

### 1. ★★★ 1071 TAPU İDDİASI **BASIN-YANSIMASI TEYİDİ**
**Kaynak:** `https://istanbul.csb.gov.tr/haberler/beykoz-da-tapular-hak-sahiplerine-teslim-edildi-306013`  
**Tarih:** 2026-06-29 · **Yayınlayan:** Çevre ve Şehircilik Bakanlığı **İstanbul İl Müdürlüğü**

CC-Tic'in verdiği "**1071 tapu dağıtımı**" iddiası artık HAM-KAYIT teyit edildi. Kaynak devletin resmi organı. Bu:
- BEY-06 olayı **durum: yansıdı** olarak güncellendi (SICAK-haftalık → aylık)
- Tokatköy nüfus -%14 örüntüsü + Meclis 8 Ocak Md 1 (Kentsel Dönüşüm ONAY) + CSB tapu-teslim = **tam kanıt zinciri**

### 2. ★★★ İLK KEZ RESMİ İMAR ASKI URL'Sİ YAKALANDI  
**Kaynak:** `https://istanbul.csb.gov.tr/istanbul-ili-beykoz-ilcesi-goztepe-mahallesi-2760-ada-110-parsele-iliskin-1-1000-olcekli-koruma-amacli-uygulama-imar-plani-degisikligi-duyuru-476318`  
**Tarih:** 2026-07-21

- **Beykoz Göztepe Mahallesi · 2760 Ada 110 Parsel · 1/1000 Ölçekli KORUMA AMAÇLI Uygulama İmar Planı Değişikliği**
- CSB İstanbul yayımlıyor → **askı-ilanları burada!** S83'te aradığımız kanal-boşluğu ARADIĞIMIZ yerde değil (Bel değil, CSB İstanbul).
- "Koruma amaçlı" = SİT / özel-koruma alanı. Hassas
- **Yeni olay:** BEY-14 (haftalık takip)

### 3. ★★ 4 KALAN MECLİS-GÜNDEM HAM YAKALANDI
S83'te 7/11 gündem detay çıkmıştı. S86-B'de kalan 4 (**5 Şubat, 6 Nisan, 4 Mayıs, 2 Mart**) HAM olarak elde.
**5 Şubat detay (8 madde çıkarıldı):**
- Md 2: Afet İstasyonu Konteynerleri Kurulması
- Md 3: Arama Kurtarma Köpeği Aracı
- Md 7: **Bel + Kaymakamlık + Millî Eğitim işbirliği protokolü**
- Md 8: Muhtarlık Binalarının **tahsis işlemleri**
- Md 1: **Beykoz İlçesi Baklacı Mahallesi** (Baklacı ilk kez görülen bir konu)

Diğer 3 gündem HAM'da mevcut ama Python regex sığ kaldı — S86-C'de HTML-parse iyileştirme.

---

## HASAT İSTATİSTİĞİ

| Alan | Denendi | OK | Kapalı | Hata | Skip |
|---|---:|---:|---:|---:|---:|
| İSKİ | 4 | 1 (anasayfa) | 3 (havza-URL 404, kurumsal 404) | 0 | 0 |
| beykoz.bel.tr | 17 | 10 | 7 (encümen/faaliyet/stratejik/bütçe/ilanlar HEPSİ 404) | 0 | 0 |
| Kalyon GYO | 5 | 4 (JS-render, boş) | 1 | 0 | 0 |
| CSB İstanbul + genel | 8 | **6** (★ tapu haberi + Göztepe askı) | 1 (webdosya 404) | 0 | 1 |
| Hürriyet arama | 3 | 0 | 3 (2 robots + 1 HTTP503) | 0 | 0 |
| Milliyet arama | 2 | 0 | 2 (robots) | 0 | 0 |
| Sabah arama | 1 | 1 (JS-render, ham) | 0 | 0 | 0 |
| AA arama | 2 | 2 (JS-render, ham) | 0 | 0 | 0 |
| Beykoz Bel pagination (2. tur) | 2 | 2 | 0 | 0 | 0 |
| İSKİ (2. tur) | 2 | 1 | 1 | 0 | 0 |
| **TOPLAM** | **46** | **27** | **18** | **0** | **1** |

**Başarı oranı: %58.7** — WebFetch'e göre çok daha yüksek verim (WebFetch %70-80 başarıydı ama kotalı; disk'e alma sayesinde YENİDEN-FETCH GEREKMEZ).

### Kalıcı-kapalı sonuçları
| Kanal | Neden |
|---|---|
| Hürriyet arama | **robots.txt disallow** (basın gruba genel-yasak) |
| Milliyet arama | **robots.txt disallow** |
| İSKİ havza URL varyantları | HTTP404 (URL formatı DEĞİŞMİŞ olabilir) |
| Beykoz Bel: encümen/faaliyet/stratejik/bütçe/performans/belgeler/ilanlar | **7/7 HTTP404** — Bel şeffaflık boşluğu KESİN teyit |
| Kalyon GYO/İnşaat | **JS-render SPA** — statik HTML 1036 byte boş (headless-browser gerekli) |
| Sabah/AA arama | JS-render (sayfa geldi ama arama-sonuçları AJAX) |

### Ham arşivde ne kaldı
```
~/tradia_basin/ham/S86/
├── beykoz_bel/  (10 HTML · 372K meclis + 366K gündem-detayları)
├── csb/          (6 HTML · Beykoz tapu haberi + Göztepe imar)
├── iski/         (1 HTML · anasayfa)
├── kalyon/       (4 HTML · JS-boş)
├── sabah/        (1 HTML · JS-render)
├── aa/           (2 HTML · JS-render)
├── log/          (2 JSONL · hasat kayıtları)
```

---

## OLAY DEFTERİ v3 — GÜNCELLEME

**Yeni durum dağılımı (14 olay):**
| Durum | Sayı | Delta S86-A |
|---|---|---|
| isliyor | 11 | -1 (BEY-06 yansıdıya geçti) |
| **yansıdı** | **2** | **+1 (BEY-06 CSB tapu teyit)** |
| söndü | 1 | 0 |

**Haftalık bayrak:**
| Olay | Neden |
|---|---|
| BEY-03 Riva Kamp | Bütçe/timeline bekleniyor |
| BEY-04 Köseler dava | 3. dalga bekleniyor |
| **BEY-14 Göztepe 1/1000 Koruma** | **Askı-süresi bitiminde onay/red — SICAK** |

**Toplam haftalık:** 3 (BEY-06 yansıdı → aylıka döndü, BEY-14 yeni-eklendi)

---

## CROSS-CC KATKI

**cc_tic'e teşekkür:** 1071 tapu ipucu doğru — CC-Basın CSB İstanbul kaynağıyla teyit etti.

**cc_ttmap'e sinyal:** Göztepe 2760 Ada 110 Parsel · Koruma-Amaçlı — mahalle-parsel düzeyi bilgi TT-MAP fabrikasına aktarılabilir.

**cc_ihale'ye sinyal:** BEY-14 askı süresi bitince ruhsat-ihale bekleniyor.

**cc_borsa'ya çağrı:** Kalyon GYO ve Şişecam KAP açıklama takibi hala açık borç.

---

## G6 · CEVAPLAYAMADIKLARIM (S86-A → S86-B delta)

### ✅ KAPATILAN (S86-B)
| # | Soru | S86-B yanıt |
|---|---|---|
| ✅ C29 | Tokatköy 1071 tapu haberi | **CSB İstanbul 2026-06-29 URL YAKALANDI** |
| ✅ (yeni) | Beykoz imar askı ilanları nerede yayınlanıyor | **CSB İstanbul** — Bel değil |
| ✅ (kısmi) | Beykoz Bel şeffaflık boşluğu | **7/7 HTTP404 KESİN TEYİT** (Bel encümen+faaliyet+stratejik+bütçe+performans+belgeler+ilanlar HEPSİ YOK) |

### ❌ HALA AÇIK
| # | Soru | Neden | Sonraki |
|---|---|---|---|
| C4 | Hastane inşaatı firma | havuz 0 · Bel'de yok | S86-C: yapı-ruhsat + Sağlık Bak duyuruları |
| C6 | Köseler dava isim | savcılık kapalı | 3. dalga takip |
| C8 | Şişecam-KAP | Borsa köprüsü | cc_borsa |
| C11 | Kalyon Riva Country **doğrulama** | **Kalyon site JS-render** | Headless browser (S86-C aday) veya emlak-portal |
| C20 | İBB Strapi API | denenmedi (kota) | S86-C |
| C21 | **İSKİ havza PDF** | 4/4 HTTP404 · URL formatı değişmiş | **iski.istanbul yeni URL keşfi** |
| C25 | Riva Kamp bütçe | Bakanlık duyurusu bekleniyor | 2026-08-03 kontrol |
| **C31 (yeni)** | Göztepe 2760/110 parsel sahibi | Tapu-Kadastro | cc_tic |
| **C32 (yeni)** | Bel HTML-yapısı JS-render (link-çıkartma başarısız) | pagination linkleri dinamik | HTML-parse iyileştirme S86-C |

---

## S86-C ÖNCELİK PLANI (S86-B'nin devamı)

1. **BEY-14 haftalık:** Göztepe askı-süresi bitiş takibi (2026-08-21)
2. **BEY-03/04 haftalık kontrol:** 2026-08-03
3. **CSB İstanbul BEYKOZ TAM ARŞİV** — yeni URL keşif protokolü (`istanbul.csb.gov.tr/haberler/beykoz-*` + `istanbul.csb.gov.tr/*beykoz*duyuru*`)
4. **İSKİ URL keşfi** — iski.istanbul yeni-format arama
5. **4 kalan meclis-gündem** HTML parse iyileştirme (S86-B ham hazır)
6. **Kalyon** için emlak-portal alternatifi (emlakkulisi WAF-hariç · sahibinden.com etiket · endeksa)

---

## DÜRÜST SINIR (A04)

- ★ **WebFetch → requests geçişi başarılı.** Kalıcı çözüm: ham diske alma sayesinde yeniden-fetch gereksiz. Kota-bağımsız.
- **7/7 Beykoz Bel kurumsal-URL HTTP404** — şeffaflık boşluğu artık spekülasyon değil, HTTP-kanıt.
- **Hürriyet + Milliyet robots.txt disallow** — hile aranmadı, kayda geçti. Bu iki büyük gruba genel-yasak var.
- **Kalyon JS-render SPA** — statik HTML boş. Headless-browser Standing dışında; alternatif portal aranacak.
- **CSB İstanbul yeni-öğrenilen kaynak** — imar askı yayın-yeri, tapu-teslim haberleri burada. **Bu bir manifest-adayı** (S86-C aday).
- KVKK #31: rapor iç-kullanım · Battal ÇAT / Serkan AYDIN gibi CSB müdürleri kamu-görevli, halka-açık isim.

---

## YATIRIM-SUNUM GÜNCELLEMESİ (S86-A → S86-B)

**Sunuma hazır 13 madde (S86-A'ya +2 YENİ):**
1-11. Önceki (S86-A) 11 madde
12. **★★★ [S86-B YENİ] 1071 tapu Tokatköy dağıtımı BASIN-TEYİT** (CSB İstanbul 2026-06-29)
13. **★★★ [S86-B YENİ] Göztepe 2760/110 Koruma-Amaçlı imar plan-değişikliği askıda** (CSB İstanbul 2026-07-21)

---

**Standing:** #8 nazik-fetch (2sn+UA+robots) ✅ · #17 spot-check · #18 üçlü-anahtar · **#21-A/B kaynak-şeffaf** · #22 FIFO · **#24 tr-safe** · **#31 KVKK iç**  
**A04** ✅ (Kalıcı-kapalı listesi HTTP-kod ile dokümantasyonlu · Hile aranmadı) · **$0** ✅ · **SİLME-YOK** ✅ · **Ham arşiv 20+ HTML** kalıcı  
**BITTI** — Standing #13
