# CC-Signals · SIG7 — 21-SIFIR DENETİMİ
## "Eşik mi, yokluk mu?"

**Sprint:** SIG7 · **Tarih:** 2026-07-28 · **Üreten:** CC-Signals · **Denetleyen:** ☐ Üst Akıl
**Kod:** [`kod/sig7_denetim.py`](kod/sig7_denetim.py) — 21 mahalle × 9 ayak ham kaynak yeniden sorgusu
**Disiplin:** $0 · A04 · V16 · #21-B · #34 · SİLME-YOK

> **Soru:** *Isı haritasında 0 ayak gösteren 21 mahallede gerçekten sinyal yok mu, yoksa eşik mi yakmadı?*
> **Kısa cevap: ikisi de var — ve ayrımı ilk kez yaptım.** 21'in **6'sında veri vardı ama ayak yanmadı** (eşik/bağlantı hatası, benim hatam), **9'unda kanal yapısal olarak kör**, **6'sı gerçek sessiz.**

---

# 1. HAM KAYNAK YENİDEN SORGUSU — 21 mahalle × 9 ayak

`uzKS` = uzantı konut satılık · `uzTÜM` = uzantı tüm kategoriler · `CSV` = S46 arşivi · `S53` = emsal v2 GÜÇLÜ hücre (n≥8)

| Mahalle | kamu (gel/bak/çok) | uzKS | uzTÜM | CSV | POI | ağır hasar | firma | haber | **S53 GÜÇLÜ hücre** |
|---|:-:|---:|---:|---:|---:|---:|---:|---:|---|
| **Anadolu Hisarı** | 0/0/0 | **41** | **74** | 2 | 3 | 0 | 0 | 1 | **yalı-köşk sat n=9 (545.455)** · daire kir n=13 |
| **Baklacı** | 0/0/0 | 17 | 66 | **22** | 2 | 0 | 0 | 0 | **villa sat n=21 (151.429)** · arsa n=17 |
| **Çavuşbaşı Çiftlik** | 0/0/0 | 17 | **100** | 10 | 0 | 0 | 0 | 0 | arsa sat n=34 |
| **Görele** | 0/0/0 | 12 | 38 | 13 | 0 | 0 | 0 | 0 | arsa sat n=12 |
| **Örnekköy** | 0/0/0 | 10 | 60 | 0 | 0 | 0 | 0 | 0 | arsa sat n=20 |
| **Mahmutşevketpaşa** | 0/0/**3** | 14 | 50 | 6 | 0 | 0 | 1 | 0 | arsa sat n=20 |
| **Elmalı** | 0/0/0 | 12 | 50 | 3 | 0 | 0 | 0 | 0 | arsa sat n=17 |
| **Anadolufeneri** | 0/0/0 | 11 | 52 | 0 | 0 | 0 | 0 | 0 | arsa sat n=16 |
| Cumhuriyetköy | 0/0/0 | 1 | 25 | 0 | 0 | 0 | 0 | 1 | arsa sat n=9 |
| Zerzavatçı | 0/0/0 | 1 | 16 | 0 | 1 | 0 | 0 | 0 | arsa sat n=8 |
| Akbaba | 0/0/0 | 7 | 21 | 0 | 0 | 0 | 0 | 0 | — |
| Fatih | 0/0/0 | 4 | 27 | 0 | 1 | 0 | 0 | 1 | — |
| Paşamandıra | 0/0/0 | 5 | 28 | 5 | 0 | 0 | 0 | 0 | — |
| Dereseki | 0/0/0 | 2 | 20 | 0 | 0 | 0 | 0 | 0 | — |
| Alibahadır | 0/0/0 | 0 | 16 | 0 | 1 | 0 | 0 | 0 | — |
| Öğümce | 0/0/0 | 6 | 14 | 5 | 0 | 0 | 0 | 0 | — |
| Kaynarca | 0/0/0 | 5 | 13 | 0 | 0 | 0 | 0 | 0 | — |
| Göllü | 0/0/0 | 0 | 9 | 0 | 0 | 0 | 0 | 0 | — |
| Poyrazköy | **1**/0/0 | 2 | 8 | 0 | 3 | 0 | 1 | 0 | — |
| Bozhane | 0/0/0 | 2 | 6 | 0 | 0 | 0 | 0 | 0 | — |
| Kılıçlı | 0/0/0 | 1 | 5 | 0 | 0 | 0 | 0 | 0 | — |

## 1.1 Yapısal gözlem: iki ayak 21/21'de kör

| Ayak | Durum |
|---|---|
| **UYDU** | **21/21'inde ölçüm YOK.** Hiçbiri TT-MAP'in 14 gerçek ölçüm mahallesinde değil — hepsi flatten/⬜ sınıfında. Bu **soğuk değil, kör.** |
| **KAMU** | 21/21'inde **gelişim ihalesi = 0** (Poyrazköy'de 1 kalem / 6,0 M TL, eşiğin altında). Bu **gerçek yokluk** — İ62 arşivi bu mahalleleri tarıyor ve bulmuyor. |

---

# 2. ★ FİYAT AYAĞI × EMSAL-v2 ÇAPRAZI — iki ayrı hata bulundu

## 2.1 Anadolu Hisarı testi — **eşik hatası, benim hatam**

| Ölçüm | Değer | Eşik | Sonuç |
|---|---:|---:|:-:|
| uzantı konut satılık | **41** | ≥20 | ✅ **eşiğin iki katı** |
| uzantı tüm kategoriler | **74** | — | — |
| S53 yalı-köşk satılık | **n=9 · 545.455 TL/m²** | n≥8 | ✅ **GÜÇLÜ hücre** |
| S53 daire kiralık | **n=13 · 564 TL/m²/ay** | n≥8 | ✅ **GÜÇLÜ hücre** |
| **S46 CSV** | **2** | ≥10 | ❌ |

> 🔴 **Ayak yanmadı çünkü kural "CSV n≥10 **VE** uzantı n≥20" diyordu — ve tek bağlayıcı kısıt CSV oldu.**
> **Kuralın kendisi hatalı:** CSV (S46) **797 kayıtlık, 4 aylık, kapanmış** bir arşiv; uzantı (S48) **3.293 kayıtlık, canlı**. İkisini **simetrik** kabul edip "her ikisinde de eşik" demek, **zayıf kaynağı her yerde bağlayıcı kısıt yapıyor.**
> ★ **Somut sonuç:** *Beykoz'un ölçülmüş en pahalı hücresi (545.455 TL/m² yalı-köşk) ısı haritasında 0 ayaklı bir mahallede duruyordu.* Bu tek başına eşiğin yanlış olduğunun kanıtıdır.

## 2.2 Baklacı · Görele · Çavuşbaşı Çiftlik testi

| Mahalle | uzKS | CSV | S53 GÜÇLÜ | Neden yanmadı |
|---|---:|---:|---|---|
| **Baklacı** | 17 | **22** ✅ | **villa sat n=21 · 151.429** | uzKS 17 < 20 — **3 kayıt eksik** |
| **Görele** | 12 | **13** ✅ | arsa sat n=12 | uzKS 12 < 20 |
| **Çavuşbaşı Çiftlik** | 17 | **10** ✅ | arsa sat n=34 *(ilçenin 2. en derin arsa hücresi)* | uzKS 17 < 20 |

> **Üçünde de CSV eşiği geçiyor** ama uzantı eşiği geçmiyor → **yine "VE" kuralı kesiyor.**
> ⚠️ **Baklacı özellikle çarpıcı:** iki kaynakta da veri var (22 + 17), ayrıca S53'te **n=21 villa hücresi** — ve mahalle **0 ayak** görünüyor.

## 2.3 🔴 İkinci ve daha büyük hata: **S53 emsal ısıya hiç bağlı değil**

**FİYAT ayağı yalnız iki sayı okuyor:** CSV konut-satılık adedi + uzantı konut-satılık adedi.
**Okumadığı:** S53'ün **84 GÜÇLÜ hücresi** — tip bazlı (villa / yalı-köşk / arsa / daire / ticari), kiralık dahil.

| Sonuç | Etki |
|---|---|
| **Arsa hücreleri hiç sayılmıyor** | Kuzey Beykoz'un **tek derin veri katmanı arsadır** (Çavuşbaşı n=34, Yavuz Selim n=37, Örnekköy n=20, Mahmutşevketpaşa n=20, Elmalı n=17, Anadolufeneri n=16) — **hepsi ısıda görünmez.** |
| **Villa/yalı-köşk hücreleri sayılmıyor** | Anadolu Hisarı 545.455 · Baklacı 151.429 — **görünmez.** |
| **Kiralık hücreler sayılmıyor** | Anadolu Hisarı daire kir n=13 · Yavuz Selim villa kir n=12 — **görünmez.** |

> ★ **Bu bir veri eksikliği değil, bir BAĞLANTI eksikliğidir.** S53 emsal v2 (07-27) ısı kuralından (SIG3, 07-26) **sonra** üretildi ve **kural hiç güncellenmedi.** 10 sıfır mahallenin **hepsinde** GÜÇLÜ emsal hücresi var.

---

# 3. EŞİK GEVŞETME SENARYOLARI — karar Üst Akıl'da

| # | Kural | Açılan | Hangi mahalleler | Yanlış-pozitif riski |
|---|---|:-:|---|---|
| **E0** | *(mevcut)* CSV≥10 **VE** uzKS≥20 | **0** | — | — |
| **E1** | uzKS≥20 **VEYA** CSV≥10 | **4** | Anadolu Hisarı · Baklacı · Çavuşbaşı Çiftlik · Görele | 🟢 **düşük** — dördünde de en az bir kaynak kendi eşiğini tam geçiyor |
| **E2** | uzKS≥12 *(tek kaynak, eşik düşürülmüş)* | **6** | +Elmalı · Mahmutşevketpaşa | 🟡 **orta** — n=12 bir mahalle medyanı için ince; Q1-Q3 aralığı kontrol edilmeli |
| **E3** | S53'te ≥1 GÜÇLÜ **satılık** hücre (n≥8) | **10** | +Anadolufeneri · Cumhuriyetköy · Örnekköy · Zerzavatçı | 🔴 **yüksek** — açılanların **8'i yalnız ARSA hücresiyle** geliyor; arsa fiyatı konut piyasası sinyali değildir, **ayrı bir varlık sınıfıdır (#34)** |
| **E4** | uzKS≥20 **VEYA** S53 konut-tipi GÜÇLÜ hücre *(arsa hariç)* | **2** | Anadolu Hisarı · Baklacı | 🟢 **en düşük** — yalnız villa/yalı/daire hücreleri sayılıyor |

## 3.1 SIG7 önerisi — **E1 + ayrı ARSA ayağı**

**İki adımlı öneri, ikisi de ayrı karar:**

**Adım 1 — FİYAT ayağını E1'e çevir** (uzKS≥20 **VEYA** CSV≥10).
*Gerekçe:* iki kaynak **simetrik değil**; "VE" zayıf kaynağı her yerde bağlayıcı yapıyor. **4 mahalle açılır, yanlış-pozitif riski düşük.**

**Adım 2 — ARSA'yı FİYAT'a KARIŞTIRMA, 10. ayak yap.**
*Gerekçe:* Kuzey Beykoz'un tek derin katmanı arsa; ama **arsa ≠ konut** (#34 kaynak-karıştırma yasağı). S53'te arsa satılık **15 mahallede n≥8**. Ayrı ayak olarak eklenirse kuzey kuşağı ilk kez ölçülebilir hale gelir — **ve konut sinyaliyle karışmaz.**

> 🔴 **E3'ü önermiyorum** ve sebebi tam olarak §2.3'ün kendisi: **arsa hücrelerini konut fiyat ayağına saymak, bulduğum hatanın simetriği olurdu.** Bağlantı eksikliğini, kaynak karıştırarak kapatmam.
> ⚠️ **Bu turda hiçbir eşik değiştirilmedi.** Aşağıdaki §5 ısı tablosu **mevcut E0 kuralıyla** duruyor; değişiklik Üst Akıl kararına bağlı.

---

# 4. ★ 21'İN ÜÇ SINIFA AYRILMASI

## (a) 🔧 ETİKET / EŞİK HATASI — **düzeltilecek · 6 mahalle**

| Mahalle | Elinde ne var | Hata tipi |
|---|---|---|
| **Anadolu Hisarı** | uzKS **41** · S53 yalı-köşk **545.455 (n=9)** · daire kir n=13 | **eşik ("VE" kuralı)** + **S53 bağlantısızlığı** |
| **Baklacı** | CSV **22** · uzKS 17 · S53 villa **151.429 (n=21)** | eşik + S53 bağlantısızlığı |
| **Çavuşbaşı Çiftlik** | CSV 10 · uzKS 17 · uzTÜM **100** · S53 arsa n=34 | eşik |
| **Görele** | CSV 13 · uzKS 12 · S53 arsa n=12 | eşik |
| **Mahmutşevketpaşa** | uzKS 14 · S53 arsa n=20 · **1 müteahhit** · 3 çok-ilçe ihale | eşik (sınırda) |
| **Elmalı** | uzKS 12 · uzTÜM 50 · S53 arsa n=17 | eşik (sınırda) |

> **Bu altısında "sinyal yok" demek yanlıştı.** Veri var; kuralım okumadı.

## (b) 🔭 KANAL KÖRLÜĞÜ — **gece taraması / erişim bekliyor · 9 mahalle**

Örnekköy · Anadolufeneri · Cumhuriyetköy · Zerzavatçı · Akbaba · Fatih · Paşamandıra · Dereseki · Alibahadır

| Kör kanal | Kapsam | Ne zaman açılır |
|---|---|---|
| **UYDU** | **9/9'unda ölçüm yok** — flatten/⬜ sınıfı | MAP33+ / **OPERA DIST (token bekliyor)** |
| **İMAR** | hiçbiri askı listesinde değil — ama **İSKİ havza sınırı haritalanmadı**; TTA99'un kritik-1'i | İSKİ haritası |
| **TİC** | Tic-DB bu segmente **yapısal kör** (527 kayıtta 0 Beykoz eşleşmesi) | TTSG aboneliği |
| **HABER** | Basın havuzu ~60 gün + yerel feed olgunlaşmamış; **35 mahalle temas-yok** | feed birikimi (aylar) |

> **Bunlarda "sinyal yok" değil, "bakan göz yok" demek doğru.** Örnekköy'ün uzTÜM=60, Anadolufeneri'nin 52, Cumhuriyetköy'ün 25 kaydı var — **piyasa tarafı canlı, ölçüm tarafı kapalı.**

## (c) ⬜ GERÇEK SESSİZ — **dürüst sıfır · 6 mahalle**

Öğümce · Kaynarca · Göllü · Poyrazköy · Bozhane · Kılıçlı

| Mahalle | uzTÜM | Kamu | Sermaye | Bina *(İBB-2017)* | Orman % |
|---|---:|---:|---:|---:|---:|
| Kılıçlı | 5 | 0 | — | 332 | 94,8 |
| Bozhane | 6 | 0 | — | 278 | 95,0 |
| Poyrazköy | 8 | 1 *(6,0 M TL barınak)* | — | 306 | 87,4 |
| Göllü | 9 | 0 | — | 147 | 88,6 |
| Kaynarca | 13 | 0 | — | 218 | 97,2 |
| Öğümce | 14 | 0 | — | 352 | 88,2 |

> **Altısında da dört bağımsız kanal aynı anda boş:** piyasa (uzTÜM ≤14), kamu (0 gelişim), sermaye (0), yapı (POI 0-3). Ve hepsi **%87+ orman.**
> ✅ **Bunlar için "sinyal yok" demek doğrudur** — ve **Poyrazköy'ün burada olması SIG5-A4'ün karşı-örneğini bağımsız olarak doğruluyor:** 2016'da *"fiyatlar 3-5x katlanacak"* denen mahalle, 10 yıl sonra ilçenin en sessiz altısından biri.

---

# 5. GÜNCEL ISI — **değişmedi (bilerek)**

| | Önce | Şimdi |
|---|:-:|:-:|
| 0 ayaklı | **21** | **21** |
| — (a) eşik hatası | — | **6** 🔧 |
| — (b) kanal körlüğü | — | **9** 🔭 |
| — (c) gerçek sessiz | — | **6** ⬜ |

> ⚠️ **Isı tablosu bu turda DEĞİŞTİRİLMEDİ.** Eşik değişikliği Üst Akıl kararı; ben hatayı **buldum ve sınıfladım**, tek taraflı düzeltmedim.
> **E1 onaylanırsa:** 0 ayaklı **21 → 17**, dört mahalle 1 ayak kazanır (Anadolu Hisarı · Baklacı · Çavuşbaşı Çiftlik · Görele).
> **Ek olarak ARSA 10. ayak yapılırsa:** kuzey kuşağında **15 mahalle** ilk kez ölçülebilir hale gelir.

---

# 6. CEVAPLAYAMADIKLARIM · V16

## Ölçemediklerim

1. **21/21'inde UYDU ölçümü yok** — hiçbiri TT-MAP'in 14 gerçek ölçüm mahallesinde değil. **"Soğuk" diyemem, "kör" diyebilirim.**
2. **İSKİ havza sınırı hâlâ yok** — (b) sınıfının 9 mahallesinin kaderi buna bağlı; TTA99'un kritik-1'i, altı turdur açık.
3. **Anadolu Hisarı'nın yalı-köşk hücresi n=9** — GÜÇLÜ eşiğini yeni geçiyor; Q1-Q3 aralığı **314K–800K**, yani **2,5 kat yayılım.** Medyan güvenilir ama dar.
4. **(c) sınıfının "gerçek sessiz"liği de kanal-koşulludur** — dört kanal boş ama dördü de aynı sistemin kanalları. Bağımsız bir beşinci kanal (tapu devir serisi) olsa değişebilirdi.

## V16 — kendi işime itiraz

1. **🔴 Bu turun bulduğu iki hata da benim.** FİYAT ayağının "VE" kuralını SIG2'de ben yazdım; S53'ü ısıya bağlamamak da benim ihmalim. **Beş turdur yayımladığım 0-ayak sayısı (22 → 21) bu yüzden şişkindi.**
2. **En çarpıcı bulgu utandırıcı:** Beykoz'un **ölçülmüş en pahalı hücresi** (545.455 TL/m²) haritada **0 ayaklı** bir mahallede duruyordu ve **beş tur boyunca kimse fark etmedi** — ben dahil. Üst Akıl'ın "Anadolu Hisarı testi" talebi olmasaydı bulunmayacaktı.
3. **Sınıflandırma sınırda kararlar içeriyor.** Mahmutşevketpaşa ve Elmalı'yı (a)'ya koydum (uzKS 14 ve 12); **(b)'ye de konabilirlerdi.** Sınırı uzKS≥12'de çektim — bu benim kararım, gerekçesi §3-E2.
4. **Eşiği tek taraflı değiştirmedim** ve bu bilinçliydi: kendi hatamı bulup aynı turda düzeltmek, **denetim döngüsünü kısa devre yapardı.** Karar Üst Akıl'da.
5. **E3'ü reddettim** çünkü arsa hücrelerini konut ayağına saymak **#34'ü ihlal ederdi** — ama bu, kuzey Beykoz'un ölçülebilir tek katmanını dışarıda bırakıyor. **Çözüm ayrı ayak; onu da öneri olarak bıraktım, uygulamadım.**
6. **(c) sınıfı için "dürüst sıfır" dedim ama %100 emin değilim** — dördü de aynı sistemin kanalları; sistem dışı bir kanal (tapu, saha) farklı söyleyebilir.

---

**Kaynaklar (#21-B):** CC-Analiz **S46 · S48 · S53** (`uzanti_katmani_beykoz_S48.jsonl` 3.293 kayıt · emsal v2 84 GÜÇLÜ hücre) · CC-İhale **İ62 · İ66 · İ69** · CC-TT-MAP **MAP24** (14 gerçek ölçüm) · CC-Basın **S80** · CC-TT-AI **TTA96-99** (İBB-2017 bina · POI · deprem) · CC-Tic **T125-128EK** · CC-Signals **SIG2-SIG6**
**Üreten:** CC-Signals SIG7 · **Denetleyen:** ☐ Üst Akıl · **Kod:** `kod/sig7_denetim.py`
**$0 · A04 · V16 · #21-B · #34 · SİLME-YOK**
