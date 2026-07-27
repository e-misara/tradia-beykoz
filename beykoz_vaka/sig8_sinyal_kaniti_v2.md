# CC-Signals · SIG8 — SİNYAL KANITI v2
## *"Hangi bölgede, hangi olaydan sonra, m² fiyatı ve amortisman nasıl davrandı?"*

**Sprint:** SIG8 · **Tarih:** 2026-07-28 · **Üreten:** CC-Signals · **Denetleyen:** ☐ Üst Akıl
**Dönem etiketi:** tüm m²/kira/getiri rakamları **`S48_UZANTI_2026-Haz-Tem`** · etiketsiz alıntılanamaz
**Disiplin:** $0 · A04 · V16 · #21-B · #34 · SİLME-YOK

---

## 0. BU SAYFA NE ANLATIYOR — ve v1 neyi anlatamadı

**v1'in kusuru:** *"Riva'da sinyal 2017'de göründü, 9 yıl 2 ay önden"* diyordu ama **9 yıl önden neyi gördüğümüzü** söylemiyordu. Yatırımcı için "öndelik" tek başına bir şey ifade etmez.

**v2'nin sorusu tek:**

> **Bir bölgede tarihli bir olay olduktan sonra, o bölgenin m² fiyatı, kirası ve amortisman süresi ne oldu?**

Ve cevabı **tek tabloda** veriyor: **bölge × mülk tipi × olay × m² × kira × brüt getiri × ödenme yılı.**

### ⚠️ Sayfanın sınırı — önce bu

| Sınır | Sonucu |
|---|---|
| **Beykoz için 2026-02 öncesi fiyat serisi YOK** (Analiz S51 kesin) | *"Olaydan sonra fiyat şu kadar arttı"* **hiçbir vakada söylenemez** |
| Elimizdeki tek zaman farkı **4 ay** (Şub-May ↔ Haz-Tem 2026) | yalnız **iki dönem medyan farkı**, fiyat hareketi değil |
| Getiri rakamları **ilan** fiyatı üzerinden, **brüt** | boşluk, aidat, vergi düşülmemiş; **net bunun belirgin altında** |
| İlan bazlı fiyat takibi **n=1** (S51) | stokta kalma süresi, indirim izi **ölçülemiyor** |

> ✅ **O hâlde ne söylüyoruz:** *"Olay şu tarihte oldu. Bugün o bölgede, o tipte m² şu, kira şu, brüt getiri şu, ödenme süresi şu."* **Olay ile bugünkü seviye arasındaki nedenselliği kurmuyoruz** — yan yana koyuyoruz ve okuru uyarıyoruz.

---

# 1. ★ ANA TABLO — bölge × tip × olay × getiri

*(yalnız S53 **GÜÇLÜ** hücreler, n≥8 · sıralama: brüt getiri)*

| Bölge | Tip | **Tarihli olay** | m² satılık | kira TL/m²/ay | **Brüt getiri** | **Ödenme** | Aday sınıfı |
|---|---|---|---:|---:|---:|---:|---|
| **Yavuz Selim** | villa | ⚖️ **Çavuşbaşı plan davası REDDEDİLDİ** (2024-04, istinaf) — 6 mahallenin biri; planlar yürürlüğe döndü | 90.000 | 543 | **%7,24** | **13,8 yıl** | 🟢 **hızlı amortisman** |
| **Acarlar** | konut-belirsiz | 🌲 özel orman (316/4 · ~1,8 M m² kat irtifaklı) · **1/5000 askıda** | 158.417 | 873 | %6,62 | 15,1 yıl | 🟢 hızlı amortisman |
| **Göztepe** | villa | 🏛️ **2760 ada 110 parsel 1/1000 KAUİP askıya çıktı** (21.07.2026) | 119.118 | 546 | %5,50 | 18,2 yıl | 🟡 orta |
| **Kavacık** | daire | 🏗️ **Kavacık Kavşağı imar planı** (Meclis 08.01.2026) + Medistate protokolü | 94.925 | 428 | %5,41 | 18,5 yıl | 🟡 orta |
| **Acarlar** | daire | *(aynı olay — özel orman/askı)* | 227.600 | 1.000 | %5,27 | 19,0 yıl | 🟡 orta |
| **Soğuksu** | daire | 💰 **Sur Yapı kentsel dönüşüm** girişi · **1/5000 askıda** | 151.724 | 650 | %5,14 | 19,5 yıl | 🟡 orta |
| **Göztepe** | daire | *(aynı olay — 1/1000 askı)* | 110.000 | 450 | %4,91 | 20,4 yıl | 🟡 orta |
| **Acarlar** | villa | *(aynı olay)* | 245.455 | 1.000 | **%4,89** | 20,5 yıl | 🔴 **yavaş** |
| **Yalıköy** | daire | 🏫 Sait Taşçıoğlu İlkokulu **159,7 M TL** (2024) | 86.667 | 352 | %4,88 | 20,5 yıl | 🔴 yavaş |
| **Riva** | villa | 🏠 **EKGYO yer teslimi 2025-04** · Metruk Otel→**Gençlik Kampı** 2026-07 · 3 mega proje | 164.141 | 633 | %4,63 | 21,6 yıl | 🔴 yavaş |
| **Çiğdem** | daire | 🏘️ **Maritza Vadi 2. Etap satışta** (Tem 2026) · 1/5000 askıda | 183.333 | 627 | %4,10 | 24,4 yıl | 🔴 yavaş |
| **Çubuklu** | daire | 🎓 TAÜ kampüsü 19 ihale · 🏗️ **riskli alan 5,6 ha, 18. madde askıda** | 138.014 | 405 | %3,52 | 28,4 yıl | 🔴 **en yavaş** |
| **Tokatköy** | daire | 🏘️ **EKGYO 2 etap teslim** (2022) · **dönüşüm alanı onaylı** · 1.071 tapu (29.06.2026) | 115.909 | 330 | **%3,42** | **29,2 yıl** | 🔴 **en yavaş** |

**Referans çıpa:** İstanbul konut brüt getirisi **%6,09** (2026-Q2, TCMB, 34 çeyreklik seri) · dip 2022-Q2 %4,02.

---

# 2. İKİ ŞABLON VAKA — aynı madalyonun iki yüzü

## 2.1 🟢 YAVUZ SELİM — *hızlı amortisman adayı*

| | |
|---|---|
| **Olay** | ⚖️ **2024-04:** Mimarlar Odası'nın Çavuşbaşı planlarına açtığı iptal davası **reddedildi**; 6 mahallenin (Çengeldere · Fatih · **Yavuz Selim** · Baklacı · Çiftlik · Görele) planları **yürürlüğe döndü** |
| **Bugünkü tip-bazlı ölçüm** | villa satılık **90.000 TL/m²** · villa kira **543 TL/m²/ay** (n=12) |
| **Brüt getiri** | **%7,24** — Beykoz'un ölçülmüş en yükseği, İstanbul çıpasının (%6,09) **1,2 katı** |
| **Ödenme** | **13,8 yıl** |
| **Arsa katmanı** | arsa satılık **30.943 TL/m² · n=37** — ilçenin en derin ikinci arsa hücresi |
| **Isı** | 2/10 (FİYAT + ARSA) — kamu 0, sermaye 0, haber 0 |

**Neden "hızlı amortisman adayı":** getiri yüksek çünkü **satış fiyatı düşük**, kira değil. Villa kirası (543) Göztepe'nin (546) neredeyse aynısı; ama satış fiyatı **90.000 ↔ 119.118** — yani **%25 daha ucuz.**

> 🔴 **Ve madalyonun öbür yüzü — bunu atlamak yanlış olur:** Yavuz Selim aynı zamanda **§F4'te reel −%35,5** ile ilçenin en geride kalanı (nominal −%14,8, n 22→28, "sağlam" örneklem).
> **İki okuma da aynı veriden çıkıyor:** *ucuz olduğu için getirisi yüksek* ↔ *ucuzluyor olduğu için riskli.* **SIG5'in "dip mi tuzak mı" sorusu tam burada ve hâlâ ayırt edilemedi.**
> **Ayırt edici veri:** stokta kalma süresi (Analiz'de **n=1**, ölçülemiyor) · 3. dönem fiyat serisi · kamu/sermaye ayağının ısınıp ısınmayacağı.

## 2.2 🔴 TOKATKÖY — *zincir tamamlandı, getiri en düşük*

| | |
|---|---|
| **Olaylar (tarihli)** | 🏘️ **2022-09/10:** EKGYO 1./2. Etap sözleşme **1,68 Mr TL** (yüklenici TURGUT) · **2026-01-08:** Meclis — dönüşüm alanı **onaylı ve yürürlükte** · **2026-06-29:** **1.071 tapu** hak sahiplerine teslim (CSB İstanbul) |
| **Fiziksel** | NDVI **−0,134** — Beykoz'un **tek ölçülebilir yeşil kaybı** ⚠️ *(kaybın çoğu 2015-20'de, sözleşmeden önce — zincir kurulmadı)* |
| **Piyasa** | **15 ilan** "Emlak Konut projesi"ne atıflı, 15/15'i Tokatköy |
| **Bugünkü ölçüm** | daire satılık **115.909 TL/m²** · kira **330 TL/m²/ay** |
| **Brüt getiri** | **%3,42** — Beykoz'un **en düşüğü** |
| **Ödenme** | **29,2 yıl** |
| **Isı** | **7/10** — ilçenin en çok ayaklı üçüncüsü |

> ★ **Sayfanın en öğretici satırı bu:** **Beykoz'da sinyali en çok yanan mahallelerden biri, getirisi en düşük olanıdır.**
> **Sinyal yoğunluğu ≠ getiri.** Tokatköy'de sermaye geldi, dönüşüm onaylandı, tapular dağıtıldı, uydu değişimi ölçüldü, piyasada ilan çıktı — **on ayağın yedisi yandı** — ve brüt getiri **%3,42**, ödenme **29,2 yıl.**
> **Muhtemel okuma (ölçüm değil, yorum):** olaylar **fiyata çoktan yansımış**; alıcı bugün *"olay olacak"* değil, *"olay oldu"* fiyatını ödüyor. **Bu bir hipotezdir** — doğrulaması, olay öncesi fiyat serisi gerektirir ve **o seri yok.**

---

# 3. ÜÇ ÖRÜNTÜ — tabloyu okuma anahtarı

## 3.1 Getiri ile sinyal yoğunluğu **ters** gidiyor

| Mahalle | Isı ayağı | Brüt getiri | Ödenme |
|---|:-:|---:|---:|
| Tokatköy | **7/10** | %3,42 | 29,2 yıl |
| Çubuklu | **8/10** | %3,52 | 28,4 yıl |
| Riva | **7/10** | %4,63 | 21,6 yıl |
| Kavacık | **7/10** | %5,41 | 18,5 yıl |
| **Yavuz Selim** | **2/10** | **%7,24** | **13,8 yıl** |
| **Acarlar** *(konut-belirsiz)* | 2/10 | %6,62 | 15,1 yıl |

> **Isı haritasının en yüksek dördü, getiri listesinin alt yarısında.** İki uçtaki mahalleler (Yavuz Selim, Acarlar) **2 ayaklı.**
> ⚠️ **Bu bir tavsiye değil, bir ölçüm:** yüksek getiri **düşük satış fiyatından** geliyor ve düşük fiyatın kendisi bir risk göstergesi olabilir (Yavuz Selim reel −%35,5). **İkisi aynı anda doğru.**

## 3.2 Aynı mahallede tip farkı, getiriyi **1,4 kata** kadar değiştiriyor

| Mahalle | Tip | m² | Getiri |
|---|---|---:|---:|
| Acarlar | konut-belirsiz | 158.417 | **%6,62** |
| Acarlar | daire | 227.600 | %5,27 |
| Acarlar | villa | 245.455 | **%4,89** |
| Göztepe | villa | 119.118 | **%5,50** |
| Göztepe | daire | 110.000 | %4,91 |

> **Acarlar'da kira üç tipte de ~1.000 TL/m²/ay** — fark tamamen satış fiyatından. **"Acarlar'ın getirisi"** diye tek sayı yoktur; **tip sorulmadan getiri konuşulamaz.**

## 3.3 Olay tipi ile getiri arasında **görünür bir ilişki yok**

| Olay tipi | Örnek | Getiri aralığı |
|---|---|---|
| Yargı (plan onandı) | Yavuz Selim | **%7,24** |
| İmar askısı | Göztepe · Soğuksu · Çiğdem | %4,10 – %5,50 |
| Kamu mega yatırım | Çubuklu · Yalıköy | %3,52 – %4,88 |
| Kentsel dönüşüm tamamlandı | Tokatköy | **%3,42** |

> **Dört olay tipi, dört farklı getiri seviyesi — ama örneklem her hücrede 1-3 mahalle.** *"İmar askısı getiriyi şöyle etkiler"* denemez. **Bu tablo bir hipotez üreticisidir, bir kural değil.**

---

# 4. ISI v3 — E1 + ARSA uygulandı

📊 [`cikti/beykoz_isi_haritasi.png`](cikti/beykoz_isi_haritasi.png) · 🔧 [`kod/isi_haritasi_SIG8.py`](kod/isi_haritasi_SIG8.py)

| | SIG6 (9 ayak) | **SIG8 (10 ayak)** |
|---|:-:|:-:|
| **FİYAT kuralı** | CSV≥10 **VE** uzKS≥20 | **uzKS≥20 VEYA CSV≥10** *(E1)* |
| **ARSA** | — | **10. ayak** — S53 arsa satılık n≥8 |
| **0 ayaklı** | 21 | **11 (%24)** |
| **Lider** | Riva 6/9 | **Çubuklu 8/10** |

**Yeni sıralama:** Çubuklu **8** · Kavacık · Riva · Tokatköy **7** · Gümüşsuyu **6** · İncirköy · Yalıköy **5** · Paşabahçe **4**

> ✅ **SIG7 denetimi doğrulandı:** (a) sınıfının **6'sı da açıldı** (Anadolu Hisarı · Baklacı · Çavuşbaşı Çiftlik · Görele · Mahmutşevketpaşa · Elmalı). Kalan 11 = SIG7'nin **(b) 5 + (c) 6**'sı — tam örtüşme.
> 🔴 **Ama liderlik değişimi bir uyarıdır:** *Çubuklu, Riva'yı **yeni kanıtla değil, yeni ayakla** geçti.* İMAR ve ARSA eklenmesi Çubuklu'nun lehine çalıştı (riskli alan + arsa hücresi), Riva'nın ise UYDU'su hâlâ ölçülmüyor. **Sıralama ayak-setine duyarlıdır ve bu bir zayıflıktır.**

## 4.1 S54 düzeltmeleri işlendi

| Bulgu | Karar |
|---|---|
| **Cumhuriyet(köy) +8 ek bulgu** = *"Cumhuriyet Cad."* sokak adı | 🔴 **yanlış pozitif — sayılmadı** *(SIG1'in "Cumhuriyet Başsavcılığı" hatasının üçüncü akrabası)* |
| **Çiftlik +6 ek** = *"çiftlik evi / çiftlik arazisi"* jenerik | 🔴 **yanlış pozitif — sayılmadı** |
| Bozhane +1 · Anadolu Kavağı +1 | 🟡 gerçek şüphe, tekil — ayak değiştirmiyor |
| **Diğer 17 mahallede ek bulgu = 0** | ✅ **"TARANDI-SIFIR" damgası** — arandı ve gerçekten yok |
| ★ **S54'ün kendi V16'sı** | *"İlk sayımda 26 mahalle n=0 sanılmıştı; sebep **unicode combining işareti** (`Ali̇bahadir` ↔ `Alibahadır`). Norm sonrası **yalnız 3'ü tamamen boş**."* |

> ★ **S54'ün bu düzeltmesi Signals'ın 21-sıfır iddiasını da bağımsız olarak sınadı** — ve ilan sayısı ekseninde 21 değil **5** soğuk mahalle buldu. **Fark meşru:** S54 yalnız **ilan adedini** sayıyor, ısı haritası **10 ayağı**. İkisi farklı soru soruyor; ama **S54'ün unicode bulgusu, benim mahalle_norm alias tablomun neden hâlâ elle yazıldığını** bir kez daha gösteriyor (#18 açık borcu).

## 4.2 Olay defteri senkron — **BEY-19 = Elmalı**

| ID | Olay | Değişiklik |
|---|---|---|
| **BEY-18** | ★ **Torunlar GYO — eski Tekel arsası** (Paşabahçe, 71.909 m², otel 2028) | ✅ numara **kesinleşti** |
| **BEY-19** | **Elmalı 1-2 Barajı Havzası Koruma Planı** — İSKİ görüşlü sağlık-işyeri talebi (Meclis 04.05) | ✅ **kaydırıldı** (Basın defterinde BEY-18'di) |

> ★ **BEY-19 önemli:** TTA99'un **kritik-1 borcu** olan İSKİ havza-koruma sisteminin **ilk fiilî uygulama örneği.** *"Elmalı 1-2 Barajı Havzası Koruma Planında Göl Koruma Alanında kalan kısımlarında... **İSKİ'nin görüşü alınmak kaydıyla**"* — havza koruması **aktif işlevde gözlemlendi.** Altı turdur aranan sistem, bir meclis gündem maddesinde göründü.
> **Beykoz'un artık iki bilinen havza planı var:** BEY-17 (ÇŞB Riva Deresi) + **BEY-19 (Elmalı Barajı)**.

---

# 5. 🆕 BASIN HABER-YOĞUNLUĞU ISI AYAĞI — tasarım taslağı

**Amaç:** HABER ayağı bugün ikili (≥2 haber = ●). Tic-ısı benzeri **yoğunluk** ölçüsüne çevirmek.

## 5.1 Önerilen tanım

```
haber_isi(mahalle) = Σ [ haber_i × tip_ağırlığı × zaman_ağırlığı ]

tip_ağırlığı:   imar/plan 3 · kamu yatırım 3 · sermaye/proje 2 ·
                yönetişim 2 · ulaşım 1 · etkinlik/asayiş 0
zaman_ağırlığı: son 3 ay 1,0 · 3-12 ay 0,6 · 12+ ay 0,3
eşik:           ● = skor ≥ 3,0
```

## 5.2 Mevcut arşivle taslak sonuç *(54 kayıt, S80)*

| Mahalle | Ham haber | Ağırlıklı skor *(taslak)* | Bugünkü HABER ayağı |
|---|---:|---:|:-:|
| **Riva** | 3+1 | ~**7,2** (Metruk Otel ×2 + Altınpark, hepsi son 3 ay) | ● |
| Çubuklu | 3 | ~4,1 | ● |
| Paşabahçe | 2 | ~3,6 (tapu töreni ×2) | ● |
| Merkez | 2 | ~2,4 | ● *(eşiğin altına düşerdi)* |
| Cumhuriyetköy | 1 | ~0,6 | · |

> 🔴 **Ve taslağın kendi itirafı:** bu skor **54 kayıtlık, ~60 günlük ulusal + ~1 yıllık yerel** bir havuzdan hesaplanıyor. **35 mahalle temas-yok.** Ağırlıklandırma, **derinliği olmayan bir arşivin gürültüsünü rafine etmekten** öteye gitmez.

## 5.3 💰 Arşiv derinliği — **bütçe kalemi notu**

| Engel | Durum | Çözüm | Maliyet |
|---|---|---|---|
| **Wayback Machine** | 🔴 WebFetch tarafından **bloklu** — 2024 boşluğu 3 turdur kapanmıyor | alternatif arşiv erişimi | ? |
| **Emlakkulisi** | 🔴 robots.txt disallow (kalıcı) | — | — |
| **Beykoz Gazetesi** | 🔴 **arama işlevi yok** (8 sorgu, hepsi anasayfa döndü) | tam arşiv indirme | düşük |
| **Ulusal havuz derinliği** | ~60 gün | **arşiv aboneliği** (AA / ajans) | 🔴 **bütçe kararı** |
| **planaski.ibb.gov.tr** | 🔴 JS-form arka uçlu | form-post JSON geliştirme | geliştirme saati |

> ★ **Dürüst değerlendirme:** **haber yoğunluğu ayağını bugünkü arşivle kurmayı ÖNERMİYORUM.** Ağırlıklandırma, sığ havuzu **derin gösterir** — ve bu, ölçüm katmanının yapabileceği en kötü şeydir. Ayak ancak **arşiv derinliği bütçelenirse** anlamlı olur.
> **Taslak kayıtta duruyor** (§5.1 formülü hazır); **etkinleştirme kararı arşiv bütçesine bağlı.**

---

# 5-EK. ★ SOĞUK KUZEY İKİ ALT-ZON — her mahalleye doğru izleme kanalı

**Girdi:** CC-İhale **İ70** — 21 soğuk mahalle × RG/Hazine/2B çaprazı (İ67 kayıtları × EKAP)

## 5-EK.1 Bulgu: 2B ile EKAP birbirini **dışlıyor**

| İz | Adet/21 | Anlamı |
|---|:-:|---|
| **2B (mülkiyet dönüşümü)** | **14** | orman vasfını yitirmiş → satılabilir hale gelen arazi |
| EKAP kamu ihalesi | 5 | kıyı/mahmuz/barınak işleri |
| **Örtüşme** | **yalnız 1** (Alibahadır, düşük güven) | — |

> ★ **Bu, kuzeyin tek bir "soğuk kuşak" olmadığını gösteriyor.** İki ayrı zon var ve **gelişim yolları da izleme kanalları da farklı** — birini diğerinin kanalıyla izlemek kör noktadır.

## 5-EK.2 Zon tanımları

| Zon | Gelişim yolu | **İzleme kanalı** | Kadans |
|---|---|---|---|
| **(a) İÇ-ORMAN 2B ZONU** | 🌲 **mülkiyet dönüşümü** — kamu parası gelmiyor, gelmeyecek; arazi orman rejiminden çıkarak satılabilir hale geliyor | **Milli Emlak / VGM ilanları** + **2B listeleri (OGM)** + **RG kamulaştırma** | aylık |
| **(b) KIYI SOĞUK ZONU** | 🌊 **kamu kıyı işi** — mahmuz, balıkçı barınağı, iskele; 2B izi yok | **EKAP** (mevcut hasat) | mevcut |
| **(c) İZ YOK** | ❓ ne mülkiyet dönüşümü ne kamu ihalesi izi | **kanal belirsiz** — önce hangi kanalın bakması gerektiği belirlenmeli | — |

## 5-EK.3 Mahalle × zon × izleme kanalı — **"tarandı-sıfır" 17 mahalle**

| Mahalle | Isı | **Zon** | **Doğru izleme kanalı** |
|---|:-:|---|---|
| **Akbaba** | 0 | 🌲 (a) iç-orman 2B | Milli Emlak · 2B listesi · RG |
| **Dereseki** | 0 | 🌲 (a) | Milli Emlak · 2B listesi · RG |
| **Kaynarca** | 0 | 🌲 (a) | Milli Emlak · 2B listesi · RG |
| **Öğümce** | 0 | 🌲 (a) | Milli Emlak · 2B listesi · RG |
| **Paşamandıra** | 0 | 🌲 (a) | Milli Emlak · 2B listesi · RG |
| **Örnekköy** | 1 *(ARSA)* | 🌲 (a) | Milli Emlak · 2B listesi · RG |
| **Anadolufeneri** | 1 *(ARSA)* | 🌲 (a) | Milli Emlak · 2B listesi · RG |
| **Elmalı** | 1 *(ARSA)* | 🌲 (a) | Milli Emlak · 2B + ★ **BEY-19 İSKİ havza görüşü** |
| **Mahmutşevketpaşa** | 1 *(ARSA)* | 🌲 (a) | Milli Emlak · 2B listesi · RG |
| **Alibahadır** | 0 | ⚖️ **(a)+(b) ÖRTÜŞEN** *(tek örtüşme, EKAP izi düşük güven)* | **her iki kanal** — 2B + EKAP |
| **Poyrazköy** | 0 | 🌊 (b) kıyı soğuk | **EKAP** *(balıkçı barınağı 6,0 M TL emsali)* |
| **Kılıçlı** | 0 | 🌊 (b) *(⚠️ Beykoz mi Şile mi — İ70 düşük güven)* | **EKAP** + ilçe aidiyeti doğrulaması |
| **Bozhane** | 0 | ❓ **(c) İZ YOK** | kanal belirsiz |
| **Fatih** | 0 | ❓ (c) | kanal belirsiz |
| **Göllü** | 0 | ❓ (c) | kanal belirsiz |
| **Zerzavatçı** | 1 *(ARSA)* | ❓ (c) | kanal belirsiz — ama **arsa ilanı var (n=8)** |
| **Görele** | 2 *(FİYAT+ARSA)* | ❓ (c) | kanal belirsiz — **piyasa tarafı canlı** (CSV 13 · arsa n=12) |

**Dağılım:** 🌲 (a) **9** · 🌊 (b) **2** · ⚖️ örtüşen **1** · ❓ (c) **5**

## 5-EK.4 Üç okuma

**① Isı haritasının kuzeydeki körlüğü artık adreslendi.**
(a) zonunun 9 mahallesinde **kamu ihalesi hiç olmayacak** — çünkü gelişim yolu kamu değil, **mülkiyet dönüşümü.** Bu mahalleleri EKAP'la izlemek, **yanlış kapıda beklemektir.** KAMU ayağının orada sıfır olması bir bulgu değil, **beklenen sonuç.**

**② (c) sınıfı en derin sessizlik.**
5 mahallede **ne 2B izi ne kamu ihalesi** var. Bunlardan **ikisinin piyasa tarafı canlı** (Görele: CSV 13 + arsa n=12 · Zerzavatçı: arsa n=8) — yani **satılıyor ama hiçbir resmî süreçte görünmüyor.** Bu, izlenecek kanalın henüz **belirlenmemiş** olduğu anlamına geliyor, olmadığı değil.

**③ SIG7'nin (c) "gerçek sessiz" sınıfı inceldi.**
SIG7'de Öğümce · Kaynarca · Göllü · Poyrazköy · Bozhane · Kılıçlı'yı *"dürüst sıfır"* diye işaretlemiştim. İ70 bunların **dördünün** aslında bir zona ait olduğunu gösterdi (Öğümce/Kaynarca → 2B · Poyrazköy/Kılıçlı → kıyı-EKAP). **Gerçekten hiçbir ize sahip olmayan yalnız Göllü ve Bozhane.**
> 🔴 **Yani SIG7'nin "6 gerçek sessiz" sayısı da fazlaydı — doğrusu 2.** *"Sessiz"* dediğim yerlerin çoğu **yanlış kanaldan bakıldığı için sessizdi.*

---

# 6. CEVAPLAYAMADIKLARIM · V16

## Ölçemediklerim

1. **Olay → fiyat nedenselliği hiçbir vakada kurulamadı** — 2026-02 öncesi Beykoz fiyat serisi yok. Bu sayfa **yan yana koyuyor**, bağlamıyor.
2. **Stokta kalma süresi / indirim izi** — S51: gerçek çakışma **n=1**. "Dip mi tuzak mı" sorusunun en kritik verisi.
3. **Net getiri** — hepsi brüt; boşluk, aidat, vergi düşülmedi.
4. **Yavuz Selim paradoksu çözülmedi** — %7,24 getiri ↔ reel −%35,5. İki okuma da aynı veriden.
5. **Olay tipi × getiri ilişkisi** — her hücrede 1-3 mahalle; kural çıkarılamaz.

## V16 — kendi işime itiraz

1. **🔴 Liderlik değişimi benim ayak seçimimden geldi.** Çubuklu, Riva'yı **yeni kanıtla değil, İMAR + ARSA ayaklarının eklenmesiyle** geçti. Ayak seti değişince sıralama değişiyor — **bu, ısı haritasının yapısal zayıflığı** ve gizlemiyorum.
2. **ARSA ayağını ben önerdim, ben uyguladım.** SIG7'de *"karar Üst Akıl'da"* demiştim, onay geldi — ama **eşiği (n≥8) yine ben seçtim.** n≥12 seçseydim 4 mahalle daha az açılırdı.
3. **§3.1'deki "getiri ile sinyal ters gidiyor" örüntüsü 6 gözleme dayanıyor.** Örüntü çarpıcı ama **istatistik değil**; ters yönde bir örnek (Kavacık 7 ayak / %5,41) zaten var.
4. **Tokatköy yorumunu ("olay fiyata çoktan yansımış") hipotez olarak etiketledim** — doğrulaması olay öncesi fiyat serisi gerektirir ve o seri yok. **Yine de bu, sayfanın en çekici cümlesi ve okuyucu onu olgu sanabilir.**
5. **Haber-yoğunluğu ayağını tasarladım ama etkinleştirmemeyi önerdim.** Bu tutarsız görünebilir; gerekçem §5.3'te: **sığ arşivi rafine etmek onu derin göstermektir.**
6. **S54 ilan ekseninde 5 soğuk mahalle buldu, ben 10 ayakta 11 buldum.** İkisi farklı soru soruyor ve ikisi de doğru — **ama dışarıdan bakan bunu çelişki sanabilir.** Bu yüzden §4.1'e açıkça yazdım.
7. **KVKK #31:** §1-§2'de kamu görevlisi/kurum adları geçiyor; arşiv public (Patron kararı 27.07), **dış-sunum maskelemesi ayrı karar.**

---

**Kaynaklar (#21-B):** CC-Analiz **S53 emsal-v2** (84 GÜÇLÜ hücre) · **S54** (21-mahalle ilan denetimi + unicode düzeltmesi) · S48/S51 · CC-İhale **İ62-70** · CC-Basın **S80-88** (olay defteri v6, 19 olay) · CC-Borsa S54-61 · CC-TT-MAP MAP24-33 · CC-TT-AI TTA96-100 · CC-Tic T1-128EK · CC-Finans F4-F6 · CC-Signals SIG5-SIG7
**Üreten:** CC-Signals SIG8 · **Denetleyen:** ☐ Üst Akıl
**$0 · A04 · V16 · #21-B · #34 · dönem etiketi zorunlu · SİLME-YOK**
