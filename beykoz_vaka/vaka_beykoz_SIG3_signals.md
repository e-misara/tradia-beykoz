# CC-Signals — BEYKOZ ÖRNEK DOSYA: NE AMAÇLA GELİŞİYOR?

**Sprint:** SIG3 (5. tur) · **Tarih:** 2026-07-26 · **Üreten:** CC-Signals · **Denetleyen:** CC-Signals (bkz. §V16-1)
**Girdi:** 5. tur — İhale İ63+İ64 · **CC-Tic T125 (ilk kez)** · TT-MAP MAP28 (Landsat 1985→2025) · Basın S82 · Sosyal S205 · TT-AI TTA98 — **+ ham JSON/JSONL**
**Disiplin:** $0 · A04 · V16 · #18 · #21-A/B · #31 KVKK · #34 · SİLME-YOK · salt-okuma

> **Sprint numarası notu (#33):** Talep bu turu da *"SIG2"* diye adlandırdı; SIG2 aynı gün tamamlandı (`vaka_beykoz_SIG2_ornek.md`). Bu, **5. turun çıktısı = SIG3**'tür. Dosya adı talep edildiği gibi bırakıldı.

---

# G1 — ★ NE AMAÇLA GELİŞTİ (kesişim)

## 1.0 Yöntem: dört ayağı üst üste koymak

Her gelişen mahalle için dört soruyu **aynı satırda** sordum:

| Soru | Kaynak | Ne verir |
|---|---|---|
| **Fiziksel olarak ne değişti?** | TT-MAP MAP24 (Sentinel 2016→2025) + **MAP28 (Landsat NDVI 1985→2025)** | değişim var/yok |
| **Kamu parası ne İÇİN geldi?** | İhale İ62/İ63 — **gelişim ihalelerinin kategorisi** | amaç etiketi |
| **Sermaye ne YAPTI?** | Borsa S56/S57 (KAP birincil) | işlem tipi |
| **Hangi firma?** | **Tic T125** + İhale yüklenici alanı + piyasa ilanı | aktör |

> ⚠️ **Amaç etiketi kamu ihalesinin *kategorisinden* gelir, bir niyet beyanından değil.** "Çubuklu eğitim amaçlı gelişti" cümlesi *"8 gelişim ihalesinin 8'i de eğitim kategorisinde"* demektir — daha fazlası değil.

## 1.1 ★ AMAÇ TABLOSU — altı gelişen mahalle

| Mahalle | Uydu ne diyor | Kamu ne için | Sermaye ne yaptı | Firma | **AMAÇ** |
|---|---|---|---|---|---|
| **Çubuklu** | MAP24 ölçülmedi · **MAP28 NDVI +0,112 → yeşil kaybı YOK** | **8 gelişim / 266,3 M TL · 8/8'i EĞİTİM** (Türk-Alman Üniversitesi, 5 yıl kesintisiz, 5 ilan hâlâ açık) | — | 5 tekil müteahhit | 🎓 **EĞİTİM — kamu, kurum içine kapalı** |
| **Gümüşsuyu** | MAP24 ölçülmedi · **MAP28 NDVI +0,233 → yeşil kaybı YOK** | **3 gelişim / 4.194,8 M TL · 3/3'ü SAĞLIK** (500 Yataklı Hastane 4,185 Mr) + bitişik Çırçır Deresi ıslahı | — | 3 müteahhit (Kuzu Toplu Konut) | 🏥 **SAĞLIK — tek mega tesis** |
| **İncirköy** | MAP28 NDVI **+0,231 → conversion YOK (henüz)** | **0 gelişim ihalesi** | **SISE → Çelikler Taahhüt · 117.018,95 m² · 171,5 M USD** (2026-02-20) | Tic-DB'de **YOK**; alıcı KAP'ta tüzel | 💰 **SERMAYE / ARSA — özel-özel devir, proje henüz yok** |
| **Polonezköy** | MAP28 NDVI +0,157 · orman %98 — **MAP28'in yöntem validasyonu bu mahalleden geldi** | 2 gelişim / **yalnız 3,0 M TL**, ikisi de **Tarım ve Orman Bakanlığı** (milli park/mesire) | **PEKGY/SozInv "Tera Orman"** · 25.000 m² · **70 villa** · hedef 2028 | 2 müteahhit + PEKGY | 🌲 **İKİ ZIT AMAÇ AYNI YERDE** — kamu parası **doğa koruma**, özel sermaye **villa** |
| **Riva** | MAP24 ⬜ (flatten) · **MAP28 net +0,019 → kırılma YOK**, 2020/2025 verisi eksik (güven **orta**) | 2 gelişim / 120,9 M TL — **kıyı (mahmuz) + güvenlik (polis merkezi)** | **EKGYO** 1.157.004 m² arsa / 173.904 m² inşaat / ASKSTG 3,808 Mr TL · **AGYO** 1.313 m² | 2 müteahhit + EKGYO (Tic-DB'nin **tek kesin Beykoz kaydı**) | 🔀 **KARMA** — özel konut + **kamu spor/turizm** + kıyı altyapısı |
| **Tokatköy** | ⭑ **MAP28 NDVI −0,134 — Beykoz'un TEK yeşil kaybı**, güven yüksek | 0 gelişim ihalesi | **EKGYO 2 etap · 789,7 + 889,9 M TL** (2022-09/10) | piyasada **15 "Emlak Konut" atıflı ilan** | 🏘️ **KONUT — tamamlandı, piyasaya çıktı** |

## 1.2 ★ Kesişimin üç bulgusu

### Bulgu 1 — **Kamu parası ile fiziksel büyüme Beykoz'da BİRBİRİNDEN KOPUK**

İ63 bunu bağımsız olarak ölçtü ve ben doğruluyorum:

| | Kamu gelişim ihalesi | Uydu değişimi |
|---|---|---|
| Çubuklu (19 ihale, kampüs) | **en yoğun** | yeşil kaybı **yok** |
| Gümüşsuyu (4,19 Mr TL, hastane) | **en büyük** | yeşil kaybı **yok** |
| Kavacık (3 gelişim, 201 M TL) | aktif | yapılaşma **−5,0 p (geriliyor)** |
| **Ortaçeşme** (Sentinel +10,0 p, ilçenin en hızlısı) | **tek park ihalesi** | büyüyor |
| **Çamlıbahçe** (Sentinel +4,0 p) | **SIFIR ihale** | büyüyor |
| **Yalıköy** (Sentinel +8,4 p) | 1 okul + 3 çok-ilçe | büyüyor |

> **Kamu, Beykoz'un büyüyen yerlerine gitmiyor; gittiği yerler büyümüyor.** İ64'ün keşfi bunu açıklıyor: Beykoz ağırlıklı **koruma amaçlı imar rejimi** (1/25.000 Koruma Amaçlı Nazım Plan + Boğaziçi öngörünüm + SİT) — kamu yatırımı zaten kurum parsellerine sıkışıyor, büyüme koruma boşluklarında piyasa eliyle oluyor. *(İ63 + İ64 + TT-MAP üç ayaklı, güven %75)*

### Bulgu 2 — ⭑ **Tokatköy: sermaye → fiziksel değişim → piyasa, üç halkası da görünen tek mahalle**

| Halka | Kanıt |
|---|---|
| **Sermaye** | EKGYO Tokatköy 1./2. Etap sözleşme, 789,7 + 889,9 M TL (KAP, 2022-09/10) |
| **Fizik** | Landsat NDVI 0,651 (2015) → **0,471** (2025), net **−0,134** — **45 mahallenin tek düşeni**, güven yüksek |
| **Piyasa** | sahibinden'de **15 ilan** "Emlak Konut projesi"ne atıflı, **15/15'i Tokatköy** |

> 🔴 **Ama zincir kurulmadı — zamanlama tutmuyor.** Kaybın büyük kısmı **2015→2020** penceresinde (−0,162); 2020→2025 yalnız −0,018. EKGYO sözleşmesi **2022-09**. Yani **uydu kaybı sözleşmeden önce başlamış.** Bu ya daha erken bir gelişimdir (TOKİ/dönüşüm), ya sensör penceresi kaymasıdır. **Nedensellik kurulmadı; korelasyon bile ters sıralı.**
> *Bunu yazmasaydım dosyanın en çarpıcı cümlesi olurdu — ve yanlış olurdu.*

### Bulgu 3 — **Polonezköy'de iki amaç birbirine zıt**

Aynı mahallede, aynı beş yılda: kamu parası **Tarım ve Orman Bakanlığı** üzerinden doğa koruma/mesire işlerine (2 kalem, 3,0 M TL); özel sermaye **PEKGY** üzerinden 25.000 m²'lik 70 villalık projeye (2026-06, hedef 2028). Ve arsa medyanı **118.966 TL/m² (n=6)** — Beykoz'un en pahalısı, Kavacık'ın (113.750) bile üstünde.

> Polonezköy %98 orman ve MAP28'in **yöntem validasyon mahallesi** ("korunan orman, NDVI stabil-yüksek 0,686→0,843"). Yani: **koruma çalışıyor, ama koruma sınırının hemen dibinde villa fiyatı ilçenin zirvesi.** Bu bir çelişki değil — **kısıtın fiyat ürettiğinin doğrudan gözlemi.**

## 1.3 Gelişmeyen ama sıcak görünenler — amaç yok

| Mahalle | Neden amaç yazılamadı |
|---|---|
| **Paşabahçe** | Kamu gelişim ihalesi **0** (3 kaydın 3'ü çok-ilçe bakım) · sermaye yok · MAP28 NDVI 1985 değeri **kirli** (0,040 — §V16-3) · fiyat bandı yok. Kalan: haber 2, söylem 3 → **konuşuluyor, ölçülmüyor** |
| **Ortaçeşme / Çamlıbahçe** | Uydu büyüme var, kamu ve sermaye **yok**, firma izi yok → **amacı bilinmiyor.** İ63: *"Ortaçeşme'nin büyümesinin 'ne'si — konut mu villa mı — özel yapı verisi bende yok"* |
| **Kavacık** | Gelişmiyor (−5,0 p). Kamu var ama dağınık (eğitim 1 + park 1 + yol 1). **Amacı gelişim değil, işlev**: 87/121 yüksek bina + 74 POI + 6 müteahhit |

---

# G2 — ISI HARİTASI: 8 ayak (Tic eklendi)

## 2.1 Kural — SIG2'den ne değişti

| Ayak | Değişiklik |
|---|---|
| **TİC** 🆕 | ≥2 tekil müteahhit (İhale yüklenici alanı) **veya** Tic-DB kesin kayıt **veya** piyasada ≥5 kurumsal proje atıflı ilan |
| **UYDU** | MAP24 kuralına **MAP28 eklendi**: `net NDVI ≤ −0,05 ve güven yüksek ve seri temiz` — **Tokatköy** bu yolla girdi |
| HABER | Riva +1 (S82 Halk TV tam-fetch) |
| SÖYLEM | Kavacık 2→4 (S205) |
| diğerleri | SIG2 ile aynı |

> **Tic ayağının dürüst hâli:** CC-Tic'in 527 firmalık DB'si Beykoz'a **neredeyse tamamen kör** — "Beykoz" ve 44 mahalle adı için **0 gerçek eşleşme** (tek "Merkez" tokeni 116 kez, hepsi *"TR merkezli"* polisemik yanlış-pozitifi). Tic'in tek kesin Beykoz kaydı **EKGYO/Riva**. Bu ayağın gerçek dolgusu Tic'in kendi işaret ettiği yerden geldi: **İhale'nin yüklenici alanı.**

## 2.2 ★ ISI TABLOSU — 45 mahalle × 8 ayak

| Mahalle | Ayak | KAMU | SERM | UYDU | HABER | SÖYLEM | FİYAT | YAPI | TİC |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **Riva** | **6** | ● | ● | · | ● | ● | ● | · | ● |
| **Kavacık** | **5** | ● | ● | · | · | ● | · | ● | ● |
| **Çubuklu** | **4** | ● | · | · | ● | · | · | ● | ● |
| **Tokatköy** | **4** ⬆ | · | ● | ● | · | · | · | ● | ● |
| **Yalıköy** | **4** | ● | · | ● | · | · | · | ● | ● |
| Gümüşsuyu | 3 | ● | · | · | · | · | · | ● | ● |
| İncirköy | 3 ⬆ | · | ● | · | · | · | · | ● | ● |
| Çamlıbahçe | 2 | · | · | ● | · | · | · | ● | · |
| Kanlıca | 2 | ● | · | · | · | · | · | · | ● |
| Merkez | 2 | · | · | · | ● | · | · | ● | · |
| Ortaçeşme | 2 | · | · | ● | · | · | · | ● | · |
| Paşabahçe | 2 | · | · | · | ● | ● | · | · | · |
| Polonezköy | 2 | · | ● | · | · | · | · | · | ● |
| Acarlar · Çengeldere · Göztepe · Yavuz Selim | 1 | · | · | · | · | · | ● | · | · |
| Göksu · Rüzgarlıbahçe · Yeni Mahalle | 1 | · | · | · | · | · | · | ● | · |
| İshaklı | 1 | ● | · | · | · | · | · | · | · |
| Anadolu Kavağı | 1 | · | · | · | · | · | · | · | ● |
| **23 mahalle** | **0** | · | · | · | · | · | · | · | · |

**Dağılım:** 6→1 · 5→1 · 4→3 · 3→2 · 2→6 · 1→9 · **0→23 (%51)**

```
                  KAMU SERM UYDU HABR SÖYL FİYT YAPI  TİC
  ┌────────────┬────────────────────────────────────────┬─────┐
  │ RİVA       │  ██   ██   ░░   ██   ██   ██   ░░   ██  │ 6/8 │ KARMA
  │ KAVACIK    │  ██   ██   ░░   ░░   ██   ░░   ██   ██  │ 5/8 │ İŞLEV
  ├────────────┼────────────────────────────────────────┼─────┤
  │ ÇUBUKLU    │  ██   ░░   ░░   ██   ░░   ░░   ██   ██  │ 4/8 │ EĞİTİM
  │ TOKATKÖY   │  ░░   ██   ██   ░░   ░░   ░░   ██   ██  │ 4/8 │ KONUT ✔tamam
  │ YALIKÖY    │  ██   ░░   ██   ░░   ░░   ░░   ██   ██  │ 4/8 │ amaç belirsiz
  ├────────────┼────────────────────────────────────────┼─────┤
  │ GÜMÜŞSUYU  │  ██   ░░   ░░   ░░   ░░   ░░   ██   ██  │ 3/8 │ SAĞLIK
  │ İNCİRKÖY   │  ░░   ██   ░░   ░░   ░░   ░░   ██   ██  │ 3/8 │ SERMAYE
  ├────────────┼────────────────────────────────────────┼─────┤
  │ 6 mahalle  │  2 ayak                                 │ 2/8 │
  │ 9 mahalle  │  1 ayak                                 │ 1/8 │
  │ 23 mahalle │  hiç ayak yok                           │ 0/8 │ %51
  └────────────┴────────────────────────────────────────┴─────┘
```

**SIG2 → SIG3 değişimi:** Tokatköy 2→**4** (MAP28 uydu + Tic) · İncirköy 2→**3** (Tic) · Riva 5→**6** · Kavacık 4→**5** · Gümüşsuyu 2→3. **Paşabahçe 2'de kaldı** — SIG2'de düşmüştü, bu turda da toparlanmadı.

---

# G3 — ÇİFT KANIT MATRİSİ

**Kural:** 🟢 GÜÇLÜ = 2+ **bağımsız** kaynak (farklı CC ve/veya farklı kaynak tipi) · 🟡 İZLENEN = tek kaynak / proxy / model / aynı dosyada iki hesap.

## 3.1 🟢 GÜÇLÜ — dosyaya girer

| # | Bulgu | Kanallar | K |
|---|---|---|:-:|
| **S1** | **Şişecam Paşabahçe arazisi → Çelikler Taahhüt, 171,5 M USD, İncirköy Mh., 117.018,95 m², 11 parsel** (2026-02-20) | Borsa S57 **KAP idx 1559473** (birincil) · Sosyal S204 YouTube `Ya_4fR7ojic` · Analiz S48 **sahibinden ilan `1315829024`** (08.07.2026 — tutarı ve alıcıyı birebir yazıyor) | **3** |
| **S2** | **Çubuklu'nun kamu gelişimi %100 eğitim amaçlı** | İhale İ61 (19 ihale, 5 yıl kesintisiz) · İ62 (bağımsız test: kampüs çevresinde yol/altyapı YOK, kamulaştırma 0) · SIG3 filtresi (8/8 gelişim ihalesi Eğitim kategorisinde) | **3** |
| **S3** | **Gümüşsuyu'nun kamu gelişimi %100 sağlık amaçlı; 4,19 Mr TL tek tesis** | İhale İ61/İ62 (9 ihale, bitişik Çırçır Deresi ıslahı aynı yıl) · SIG3 filtresi (3/3 Sağlık) | **2** |
| **S4** | **EKGYO Tokatköy projesi teslim edildi ve piyasada işlem görüyor** | Borsa S56 KAP (2 etap, 1,68 Mr TL) · Analiz S48 (**15 ilan**, 15/15'i Tokatköy) | **2** |
| **S5** | **Tokatköy Beykoz'un tek ölçülebilir yeşil kaybı** (NDVI −0,134, güven yüksek) | TT-MAP MAP28 (Landsat) · TT-AI TTA96 (995 bina 1980-öncesi, 30 ağır hasar — dönüşüm tabanı) ⚠️ *zincir kurulmadı, §1.2* | **2** |
| **S6** | **Beykoz'da kamu yatırımı ile fiziksel büyüme kopuk** | İhale İ63 (üçlü kesişim) · TT-MAP MAP26/28 (büyüme kıyı bandında) · İ64 (koruma amaçlı imar rejimi bunu açıklıyor) | **3** |
| **S7** | **Riva Metruk Otel → Gençlik Kampı** (Beykoz Bel. + Gençlik ve Spor Bakanlığı ortak) — özel GYO değil **kamu alanı** | Basın S82 Halk TV tam-fetch (2026-07-25) · Beykoz Belediyesi duyurusu (2026-07-24) — resmi kurum + ulusal medya | **2** ⚠️ |
| **S8** | **Yönetişim riski: seçilmiş başkan tutuklu, dava 2. dalgada** (2026-07-17: 2 tutuklama + 4 adli kontrol) | Basın S81/S82 (3 ulusal + Wikipedia) · Sosyal S204 (vekil başkanın kendi ifadesi `q11ZUc4Djg4`) | **2** |
| **S9** | **Beykoz yatay; tek dikey/ticari çekirdek Kavacık** — 121 yüksek binanın 87'si (%72) + POI 74 (#1) + 6 müteahhit | TTA96 İBB-2017 · TTA96 OSM poligon-join · İhale yüklenici alanı · Analiz ticari kira n=33 | **4** |
| **S10** | **Beykoz'un %62'si orman/kırsal — kalıcı arz kısıtı**, imar rejimi koruma ağırlıklı | TT-MAP (Sentinel↔WorldCover çift imza) · TTA96 (kuzey köylerinde 147–330 bina) · **İ64 (1/25.000 Koruma Amaçlı Nazım Plan + Boğaziçi öngörünüm)** | **3** |
| **S11** | **Kamulaştırma EKAP'ta değil, Resmî Gazete'de** — ve Beykoz RG-kamulaştırmaları **koruma amaçlı** (Riva Deresi Batısı doğal SİT) | İhale İ61 (EKAP'ta kamulaştırma = 0) · İ64 (RG'de VAR) | **2** |
| **S12** | **CC-Tic Beykoz'a yapısal olarak kör** — 527 kayıtta 0 gerçek eşleşme; İhale × Tic kesişim 0 | Tic T125 (kendi beyanı + 116 polisemik FP analizi) · SIG3 doğrulaması (müteahhit ayağı yalnız İhale'den doldu) | **2** |

⚠️ **S7 notu:** iki kaynak farklı tipte (resmi kurum + ulusal medya) ama **aynı CC havuzundan**; Basın'ın kendi uyarısı: *"Bakanlık teyidi henüz doğrulanmadı."* GÜÇLÜ sayıldı, **teyit borcu açık.**

## 3.2 🟡 İZLENEN — dosyaya girmez

| # | Bulgu | Tek kaynak | Neden |
|---|---|---|---|
| İ1 | **PEKGY "Tera Orman" Polonezköy** 25.000 m² / 70 villa | Borsa S57 (KAP idx 1618761) | Basın S82 hedefli aradı → "Peker GYO" 0 hit; Tic-DB'de 0; açık webde 404 |
| İ2 | Deprem-dönüşüm baskısı (İncirköy/Çubuklu/Gümüşsuyu) | TTA97 İBB deprem senaryosu 2023 | Tek model, olasılıksal. Basın S82: 6306/riskli alan havuzda **0 hit** |
| İ3 | Kavacık ofis/plaza hacmi | OSM POI 74 (retail proxy) | TTA97: İBB ruhsat ilçe kırılımsız, GSM sanayi tipi (Beykoz=2), ticaret sicili açık veride yok |
| İ4 | **MAP28'in "45 mahallenin 38'i NDVI artışı"** sonucu | TT-MAP MAP28 | **7/45 mahallenin serisi kirli (§V16-3)** + TM↔OLI sensör ofseti TT-MAP'in kendi uyarısı |
| İ5 | MAP27 piksel-flip haritası | TT-MAP MAP27 | TT-MAP'in kendi uyarısı: sealed yalnız %5-6, %78-86 doğrulanamaz |
| İ6 | **Riva nüfus +%98** (1.794→3.555, 2013→2024) | Basın S82 · Wikipedia | Basın'ın kendi borcu: TÜİK ADNKS çapraz teyidi yapılmadı |
| İ7 | **2015 "Betonlaşır İtirazı"**: nüfus planı 52.570→104.000 · 233 ha 2B arazi · 319 ha orman | Basın S82 · Arkitera 2015-04-08 | Tek yayın; plan haritası yok, hangi mahalleler bilinmiyor (Basın C17) |
| İ8 | 1071 hak sahibi tapu dağıtımı | Basın S79 (3 yayın) | **Gövde hâlâ okunmadı** — SIG1'den beri açık |
| İ9 | İncirköy parsellerinin niteliği "ARSA" | İ64 | TKGM canlı sorgusu **yapılmadı** (#8); nitelik haber kaynaklı |
| İ10 | "3. köprü sonrası fiyatlar 3-5x katlanacak" (2016 öncesi vaat) | Sosyal S205 `ZyIdHE3QvoM` | Vaat; MAP28 kıyı bandı testi **düz** (−0,003) → vaat gerçekleşmemiş görünüyor ama fiyat serisi yok |
| İ11 | Riva nehir evi 25 M TL / 7 dönüm | Sosyal S205 `C89kGwhGr80` | Tek vlog, piyasa doğrulaması yok |
| İ12 | "İmar çıkarsa değeri 5 katına çıkar" (İncirköy) | Analiz S48 ilan metni | **Satıcı iddiası** |

## 3.3 ★ Patron'un sorusuna cevap: *"Şişecam artık GÜÇLÜ (Sosyal+KAP+Tic?)"*

**GÜÇLÜ — evet. Ama Tic ile değil.**

| Kanal | Durum |
|---|---|
| **Borsa (KAP)** | ✅ birincil, idx 1559473 — tutar, alıcı, 11 parsel, m² |
| **Sosyal** | ✅ YouTube `Ya_4fR7ojic` |
| **Analiz (piyasa ilanı)** | ✅ sahibinden `1315829024` — tutarı ve alıcıyı birebir yazıyor |
| **CC-Tic** | ❌ **"Çelikler" 0 kayıt · "Şişecam" 0 kayıt · "İncirköy" 0 eşleşme** — Tic kendi raporunda yazıyor: *"Bu tabloya yazılabilir tüzel-kişi bilgisi Tic'in havuzunda yok"* |
| **Basın** | ❌ 0 hit (S79 + S81 + S82, üç kez) |

> **Üçüncü kanal Tic değil, piyasa ilanıdır.** Bu, SIG2'de açılan kanalın ikinci kez işe yaramasıdır.

## 3.4 🔴 Yeni çapraz-kontrol bulgusu: Basın, Borsa'nın cevabını görmedi

Basın S82, C16 diye **yeni bir açık soru** açtı: *"Çelikler Holding gerçekten Beykoz'da mı?"* ve Wikipedia'dan *"Ankara merkezli, ENERJİ sektörü"* bulup **"Sosyal aday doğrulanmadı"** sonucuna vardı.

**Ama cevap aynı turda, aynı klasörde duruyordu.** Borsa S57 (KAP birincil, 12:47) alıcıyı tam adıyla veriyor: **Çelikler Taahhüt İnşaat ve Sanayi A.Ş.** — Basın "Çelikler **Holding**"i arayıp bulamadı; **tüzel kişilik farklı.**

| Kim | Ne dedi | Doğru mu |
|---|---|---|
| Sosyal S204 | 171,5 M$ Çelikler — **tek kaynak, KAP şart** | ✅ doğru, ihtiyatlı |
| Borsa S57 | KAP idx 1559473 → **Çelikler Taahhüt İnşaat ve Sanayi A.Ş.** | ✅ **birincil, kesin** |
| Basın S82 | "Çelikler Holding = Ankara/enerji → **Beykoz bağı kanıt YOK**" | 🔴 **yanlış tüzel kişilik arandı** |
| Tic T125 | "Çelikler Holding, enerji holding, Tic-DB odak dışı" | 🟡 aynı isim hatasını taşıyor |

> **Ders (§G5-9):** *Bir CC'nin "doğrulanamadı" demesi, başka bir CC'nin aynı gün doğruladığı anlamına gelebilir.* Ortak klasör tek doğruluk kaynağı değilse, aynı turda üretilen cevap kaybolur.

---

# G4 — ÖRNEK DOSYA: BEYKOZ

> **Yalnız §3.1'deki 12 GÜÇLÜ bulgudan üretildi. Fiyat rakamı YOK — amaç ve kesişim var.**
> **Tez:** *Beykoz 3 noktada gelişiyor ve her biri farklı amaçla: Çubuklu eğitim, İncirköy/Polonezköy sermaye, Riva karma.*

## 4.1 Bir sayfada

| | |
|---|---|
| **Mahalle** | 45 · **23'ünde (%51) hiçbir ayak sıcak değil** |
| **Sıcak nokta** | 4+ ayak: **Riva 6 · Kavacık 5 · Çubuklu 4 · Tokatköy 4 · Yalıköy 4** |
| **Yapı stoku** | 51.201 bina · %95,1'i 1–4 kat · 9–19 kat toplam **121**, bunun **87'si Kavacık'ta** |
| **Arz kısıtı** | %62 orman/kırsal + 9 askeri ihalelik alan + **koruma amaçlı imar rejimi** (1/25.000 KANİP + Boğaziçi öngörünüm) |
| **Kamu parası** | 144 ihale — **yalnız 62'si yeni yatırım, 82'si bakım.** Gelişim iki kurumda: kampüs + hastane |
| **Sermaye** | 5 halka açık aktör · en büyüğü **171,5 M USD** (2026-02) |
| **Yönetişim** | Seçilmiş başkan tutuklu · rüşvet/irtikap davası **2. dalgada** (2026-07-17) |
| **Tapu kanalı** | ❌ TKGM toplu veri **public değil** · ✅ **2 yeni kanal açıldı**: Resmî Gazete kamulaştırma + Milli Emlak ilanları |

## 4.2 GELİŞİM AMACI KARTLARI

### 🎓 ÇUBUKLU — EĞİTİM · 4/8 ayak

**Ne için gelişiyor:** Türk-Alman Üniversitesi kampüsü. **8 gelişim ihalesinin 8'i de eğitim kategorisinde**, 266,3 M TL, 5 yıl kesintisiz (2022→2026), **5 ilan hâlâ açık** = sürüyor.
**Kim:** 5 tekil müteahhit (Ekip Teknik, Hayfa İnşaat, Techno Life…)
**Sermaye:** yok. **Uydu:** yeşil kaybı yok (NDVI +0,112).
**Yapı:** 3.335 bina · 1.414'ü 1980-öncesi (ilçe #2 eski stok) · 43 ağır hasar · POI 26
🔴 **Sınırı:** İ62 test etti — kampüs çevresinde **ayrı yol/altyapı yok, kamulaştırma 0**. Gelişim **kurum parseli içinde kalıyor**; mahalleye yayıldığına dair kanıt bulunamadı.

### 💰 İNCİRKÖY — SERMAYE / ARSA · 3/8 ayak

**Ne için gelişiyor:** Henüz gelişmiyor — **el değiştirdi.** Şişecam çıktı, **Çelikler Taahhüt İnşaat ve Sanayi A.Ş.** girdi: 117.018,95 m², 11 parsel, **171,5 M USD peşin**, 2026-02-20.
**Kim:** alıcı KAP'ta tüzel olarak kayıtlı; **Tic-DB'de yok** (yapısal körlük).
**Kamu:** 0 gelişim ihalesi. **Uydu:** NDVI +0,231 → **henüz hiçbir fiziksel değişim yok.**
**Yapı:** 3.237 bina · **2.043'ü 1980-öncesi = ilçenin en eski stoku (%63,1)** · 25 ağır hasar · POI 17
**Piyasa:** 6 ilan Şişecam'a atıflı; biri işlemin tutarını ve alıcısını birebir aktararak arsa pazarlıyor.
🔴 **Sınırı:** *Ne yapılacağı bilinmiyor.* İmar durumu, proje, izin — hiçbir CC'de belge yok. Parsel niteliğinin "arsa" olduğu bilgisi bile **haber kaynaklı** (TKGM sorgusu yapılmadı, #8).

### 🌲 POLONEZKÖY — SERMAYE / PREMİUM KONUT · 2/8 ayak · 🟡 tek kanal

**Ne için gelişiyor:** PEKGY'nin %100 bağlı ortaklığı SozInv, ~25.000 m² arazide **70 villa** geliştiriyor, hedef **2028 ortası** (KAP, 2026-06-18).
**Kamu:** 2 gelişim ihalesi ama **yalnız 3,0 M TL**, ikisi de **Tarım ve Orman Bakanlığı** — doğa koruma/mesire.
**Uydu:** %98 orman, NDVI **0,686→0,843 stabil-yüksek** — MAP28'in **yöntem validasyon mahallesi**: koruma çalışıyor.
> ★ **Kesişimin en keskin cümlesi:** *Aynı mahallede kamu parası ormanı korumaya, özel sermaye ormanın dibine villa yapmaya gidiyor.* Ve arsa medyanı **118.966 TL/m²** ile Beykoz'un zirvesi.
🟡 **Neden İZLENEN:** PEKGY projesi **tek kanal** (KAP). Basın 0 hit, Tic 0, açık web 404.

### 🔀 RİVA — KARMA · 6/8 ayak (ilçenin en sıcak yeri)

**Üç amaç aynı mahallede:**
| Amaç | Kanıt |
|---|---|
| **Özel konut** | EKGYO 1.157.004 m² arsa / 173.904 m² emsale esas inşaat / ASKSTG 3,808 Mr TL · inşaat 2025-04'te başladı · AGYO 1.313 m² (2016) |
| **Kamu spor/turizm** | 186 odalı Metruk Otel yıkıldı (2026-07-24) → **Gençlik Kampı**, Beykoz Bel. + **Gençlik ve Spor Bakanlığı ortak** |
| **Kıyı altyapısı + güvenlik** | 2 gelişim ihalesi / 120,9 M TL — Riva Mahmuz Yapımı + Polis Merkezi (2023) |

**Piyasa:** 122 satılık konut ilanı; **89'u Düşler Vadisi / Kidstown** (özel siteler). **"Emlak Konut" atfı 0** → EKGYO projesi henüz piyasada yok.
**Uydu:** MAP24 ⬜ (flatten) · MAP28 net +0,019, **kırılma yok** — ama 2020 ve 2025 verisi eksik, güven **orta**. **Riva hâlâ ölçülmüyor.**
🔴 **Sınırı:** Gençlik Kampı bilgisi Bakanlık tarafından teyit edilmedi (Basın'ın kendi notu). Riva'nın uydu ölçümü iki turdur açık.

### 🏘️ TOKATKÖY — KONUT · 4/8 ayak · **tamamlanmış tek örnek**

**Ne için gelişti:** EKGYO konut. Sözleşmeler 2022-09/10, iki etap **1,68 Mr TL**. Bugün piyasada **15 ilan** projeye atıfla satılıyor/kiralanıyor.
**Uydu:** NDVI −0,134 — **45 mahallenin tek düşeni**, güven yüksek.
🔴 **Zincir kurulmadı:** kaybın büyük kısmı **2015→2020** (−0,162), sözleşme **2022-09**. **Uydu kaybı sermayeden önce.** Nedensellik iddia edilmedi.

### 🏥 GÜMÜŞSUYU — SAĞLIK · 3/8 ayak

**Ne için gelişti:** 500 Yataklı Devlet Hastanesi — **4,185 Mr TL, Beykoz'un tek mega kalemi** (2024). 3 gelişim ihalesinin 3'ü de sağlık; bitişiğinde **Çırçır Deresi ıslahı** (aynı yıl, altyapı hazırlığı). 2025-26'da chiller/ısıtma/poliklinik ek işleri → **devreye alma sürüyor.**
**Uydu:** NDVI +0,233 → yeşil kaybı yok. **Sermaye:** yok. **Yapı:** 3.151 bina, 1.354'ü 1980-öncesi, 43 ağır hasar.

## 4.3 SERMAYE HARİTASI — 5 aktör, çift-kanıt etiketli

| Şirket | Mahalle | Ölçek | Amaç | Kanal |
|---|---|---|---|:-:|
| **SISE → Çelikler Taahhüt İnşaat ve San. A.Ş.** | **İncirköy** | 117.018,95 m² · **171,5 M USD** · 11 parsel | arsa devri (çıkış/giriş) | 🟢 **3** |
| **EKGYO** | **Tokatköy** | 2 etap · 1,68 Mr TL | konut — **teslim edildi** | 🟢 **2** |
| **EKGYO** | **Riva** | 1.157.004 m² · 173.904 m² inşaat · 3,808 Mr TL | konut — **inşaat sürüyor** | 🟢 **2** |
| **PEKGY** (SozInv) | Polonezköy | ~25.000 m² · **70 villa** · 2028 | premium konut | 🟡 **1** |
| **AGYO** | Çayağzı (Riva) | 1.313 m² | arsa (2016) | 🟡 **1** |
| **ANELE** | Kavacık | showroom | ticari (2016) | 🟡 **1** |

```
2016 ██        AGYO Riva arsa · ANELE Kavacık
2017 ███████ ◄ TEPE-1  EKGYO Riva ihale → sözleşme
2018 █         AKSGY imar
2019 █         AKSGY imar
2020 ·
2021 ·
2022 ███████ ◄ TEPE-2  EKGYO Tokatköy 2 etap · Riva STG artışı
2023 ·
2024 ·
2025 ██        EKGYO Riva ikmal inşaat + yer teslimi
2026 ███     ◄ YENİ    SISE→Çelikler 171,5M$ · PEKGY Tera Orman
```

## 4.4 RİSK — amaçla aynı netlikte

| # | Risk | Kanıt | K |
|---|---|---|:-:|
| **R1** | **Yönetişim.** Seçilmiş başkan tutuklu; rüşvet/irtikap davası 2026-07-17'de 2. dalgaya genişledi. Suçlama tipolojisi doğrudan **imar/ihale zemini**. İmar kararlarının geçtiği kurum bu kurumdur. | Basın S81/S82 + Sosyal S204 | 🟢 2 |
| **R2** | **Kısıt hem korur hem durdurur.** Beykoz koruma amaçlı imar rejiminde; AKSGY'nin imar süreci 2018'de başladı, **2026-07 itibarıyla inşaat bildirimi yok — 8 yıl.** | Borsa KAP + İ64 | 🟢 2 |
| **R3** | **Kamu, büyüyen yere gitmiyor.** Ortaçeşme tek park, Çamlıbahçe sıfır ihale. Kamu altyapısı büyümeyi takip etmiyor. | İ63 + TT-MAP | 🟢 3 |
| **R4** | **Amaç bilinmeyen büyüme.** Ortaçeşme/Çamlıbahçe/Yalıköy'de ne yapıldığı hiçbir CC'de yok — kamu görmüyor, sermaye görünmüyor, uydu tür ayıramıyor. | İ63 + MAP27 (spektral tür ayrılamıyor) | 🟢 2 |
| **R5** | **Gerçekleşen işlem serisi YOK.** TKGM toplu veri public değil; **TÜİK konut satışı ilçe kırılımı yayınlamıyor.** Beykoz için gerçekleşen fiyat/işlem kanalı **kapalı.** | İ64 (kanal keşfi) | 🟢 1+ ⚠️ |
| **R6** | **Eski stok + deprem.** %31 bina 40+ yaş; senaryoda 556 ağır hasarlı bina. En yüklü: İncirköy 2.043 · Çubuklu 1.414 · Gümüşsuyu 1.354. | TTA96 (sayım, GÜÇLÜ) + TTA97 (senaryo, **🟡**) | karma |

## 4.5 KAPANIŞ TEZİ

> **Beykoz her yeri değil; 45 mahallenin 23'ünde (%51) ölçülebilir hiçbir sinyal yok.** Sinyal beş yerde toplanıyor — ve **her biri farklı bir amaçla gelişiyor.**
>
> **Çubuklu eğitim için gelişiyor.** Sekiz yeni yatırım ihalesinin sekizi de eğitim; motor tek kurum, Türk-Alman Üniversitesi; beş yıldır kesintisiz ve hâlâ açık ilanları var. Ama gelişim kampüs parselinin dışına çıkmıyor: çevrede yol yok, altyapı yok, kamulaştırma sıfır.
>
> **Gümüşsuyu sağlık için gelişti.** Tek kalem: 4,185 milyar TL'lik 500 yataklı hastane, yanında dere ıslahı. Beykoz'un tüm kamu para zirvesi bu tek tesistir.
>
> **İncirköy ve Polonezköy sermaye için hareketleniyor.** İncirköy'de Şişecam 117 bin m²'yi 171,5 milyon dolara Çelikler Taahhüt'e devretti — **KAP, sosyal medya ve bir emlak ilanı, üçü birden aynı tutarı ve alıcıyı söylüyor.** Polonezköy'de Peker GYO 70 villalık projeye başladı. İkisinde de **fiziksel değişim henüz yok** — sermaye girdi, kazma vurulmadı.
>
> **Riva karma gelişiyor** ve ilçenin sekiz ayaktan altısını taşıyan tek mahallesi: özel konut (EKGYO 173.904 m² inşaat), **kamu spor-turizmi** (186 odalı otel yıkıldı, yerine Gençlik Kampı) ve kıyı altyapısı bir arada. Nüfusu 11 yılda ikiye katlandı.
>
> **Tokatköy ise tamamlanmış tek örnek:** sermaye 2022'de sözleşmeyi imzaladı, bugün piyasada 15 ilan o projeye atıfla satılıyor, ve uydu Beykoz'un tek yeşil kaybını orada ölçüyor. **Ama zamanlama tutmuyor** — kaybın çoğu 2015-2020'de, sözleşmeden önce. Zinciri kurmuyorum.
>
> **Ve bir örüntü var:** Beykoz'da **kamu parası ile fiziksel büyüme birbirinden kopuk.** Kamunun gittiği yerler büyümüyor (Çubuklu, Gümüşsuyu, Kavacık), büyüyen yerlere kamu gitmiyor (Ortaçeşme tek park, Çamlıbahçe sıfır). Sebebi İ64'ün keşfinde: ilçe koruma amaçlı imar rejiminde; büyüme koruma boşluklarında, piyasa eliyle oluyor.
>
> **Risk tarafı aynı netlikte:** imar kararlarını veren belediyenin seçilmiş başkanı tutuklu ve dava bu ay ikinci dalgaya genişledi. Bir imar süreci (AKSGY) sekiz yıldır sonuçlanmadı. En hızlı büyüyen üç mahallede **ne yapıldığını bilmiyoruz.** Ve Beykoz için **gerçekleşen işlem serisi yok** — TKGM toplu veriyi açmıyor, TÜİK ilçe kırılımı yayınlamıyor.
>
> **Fiyat söylemiyorum. Nerede, ne amaçla bir şeyler olduğunu söylüyorum. Karar Patron'un.**

---

# G5 — ŞABLON: diğer ilçelere

## Yeni (SIG3'te doğdu)

| # | Kural | Neden |
|---|---|---|
| **9** | **Bir CC'nin "doğrulanamadı"sı, başka CC'nin aynı gün doğruladığı olabilir. Tur kapanmadan çapraz okuma zorunlu.** | Basın S82 "Çelikler Beykoz'da mı?" diye sordu; cevap Borsa S57'de tam adıyla duruyordu (§3.4) |
| **10** | **Tüzel kişilik adı tam yazılır.** "Holding" ≠ "Taahhüt A.Ş." — yanlış tüzel kişilik aramak yanlış negatif üretir. | Çelikler Holding (Ankara/enerji) ↔ Çelikler Taahhüt İnşaat ve Sanayi A.Ş. (alıcı) |
| **11** | **Fizik ölçümlerinde aralık kontrolü zorunlu** (NDVI ∈ [−1,+1], oran ∈ [0,100]). | MAP28'de 4 mahallenin 2025 NDVI'si 2,4–4,3 çıktı (§V16-3) |
| **12** | **Amaç etiketi kamu ihalesinin kategorisinden türetilir**, niyet beyanından değil — ve **bakım ayıklanmış** gelişim ihalelerinden. | Beykoz'un 144 ihalesinin **82'si bakım**; ayıklanmadan "amaç" okuması yanlış çıkar |
| **13** | **Bir CC'nin körlüğü de bir bulgudur — ve nereye bakılacağını söyler.** | Tic 527 kayıtta 0 eşleşme verdi ama İhale'nin yüklenici alanını işaret etti; firma ayağı oradan doldu |
| **14** | **Kanal keşfi ayrı bir sprint tipidir.** "Veri yok" demeden önce hangi kapının ne sunduğu + ToS haritalanır. | İ64: TKGM kapalı ama **RG kamulaştırma + Milli Emlak** açıldı; TÜİK ilçe boşluğu dürüstçe kabul edildi |

## SIG1-SIG2'den devralınan

Rapor değil **ham JSON oku** · eşiği tablodan **önce** yaz · sayaç ≠ ham kayıt · jenerik mahalle adı guard'ı · **marka adı ≠ mahalle adı** (kanon kadastral olanı alır) · iki set kıyaslanmadan **zaman penceresi** hizalanır · aynı dosyanın iki kez okunması çift-kanıt değildir · **piyasa ilanı metni bir doğrulama kanalıdır** · yer-tutucu sıfır ≠ ölçülmüş sıfır.

## İlçe turu — güncel sıra

```
0. ÖN KOŞUL   mahalle kanonu tek kaynaktan · her CC kanonik setini ilan eder
1. KANAL KEŞFİ  hangi kapı ne sunar + ToS (yeni — İ64 modeli)
2. SORU SETİ  ilçenin 2-3 büyük olayı önceden yazılır
3. KESİT DONDUR fiyat kesiti sürümlenir, boş olmadığı doğrulanır
4. TUR-1      keşif · her CC "cevaplayamadıklarım" ile
5. TUR-2      hedefli ikinci geçiş
6. ÇAPRAZ TUR Signals: sayaçlar yan yana, çelişkiler + aralık kontrolü
7. DÜZELTME   kaynak CC kendi defektini işler
8. AMAÇ TURU  uydu × kamu-amaç × sermaye × firma kesişimi (yeni — bu tur)
9. ÇİFT-KANIT GÜÇLÜ / İZLENEN ayrımı
10. ÖRNEK DOSYA yalnız GÜÇLÜ + risk aynı netlikte
11. DENETİM   üreten ≠ denetleyen
```

---

# CEVAPLAYAMADIKLARIM · V16

## Ne ölçemedim

1. **Ortaçeşme / Çamlıbahçe / Yalıköy'ün amacı** — üçü de büyüyor, üçünde de kamu ve sermaye izi yok, uydu bina türünü ayıramıyor. **Beykoz'un en büyük cevapsız sorusu bu.**
2. **Riva'nın uydu ölçümü** — MAP24 flatten, MAP28'de 2020 ve 2025 epokları **boş**. İki turdur açık; SIG2'nin yanlışlanabilir öngörüsü hâlâ koşamıyor.
3. **Çubuklu / Gümüşsuyu'nun fiziksel büyümesi** — MAP26 yalnız iki büyüyeni piksel-çıkardı; kamu-yoğun iki mahalle çapraz doğrulanamadı (İ63'ün kendi açığı).
4. **Gerçekleşen işlem serisi** — TKGM toplu veri public değil, TÜİK ilçe kırılımı yok. Kapalı.
5. **İncirköy'de ne yapılacağı** — imar durumu, proje, izin: hiçbir kanalda yok.
6. **1071 tapu olayının içeriği** — SIG1'den beri işaret ediyorum, hâlâ okunmadı.
7. **2024 yılı** — Wayback Machine WebFetch tarafından bloklu (Basın iki turdur deniyor).
8. **İlçe kıyaslaması** — üç turdur yok. *"Beykoz diğer ilçelerden iyidir"* cümlesi hiçbir turda kurulmadı.

## 🔴 V16-3 — MAP28'de yeni bir defekt buldum

**Landsat NDVI serisinde 7/45 mahallenin verisi kullanılamaz:**

| Tip | Mahalle | Değer | Neden imkânsız |
|---|---|---|---|
| **Aralık dışı** | Göllü **4,310** · Bozhane **3,160** · Kılıçlı **2,494** · İshaklı **2,457** (hepsi 2025) | NDVI ∈ [−1,+1] | Ölçeklenmemiş yansıma değeri (C2L2 scale/offset uygulanmamış) olabilir |
| **Şüpheli düşük** | Anadolu Hisarı **−0,011** · Kanlıca **−0,011** · Paşabahçe **0,040** (hepsi 1985) | Bitkili Boğaz yamacında beklenmez | Su/gölge pikseli veya aynı ölçek sorunu |

**Etkisi:** MAP28'in başlık bulgusu *"45 mahallenin 38'i NDVI artışı"* — temiz 38 mahallede **33 artış**. Yön değişmiyor (orman→yapı dönüşümü gerçekten yok) **ama en büyük dört "artış" (Göllü +3,618 · Bozhane +2,496 · Kılıçlı +1,740 · İshaklı +1,724) tamamen artefakt**, üç tanesi de (Kanlıca +0,600 · A.Hisarı +0,561 · Paşabahçe +0,378) bozuk 1985 tabanından şişmiş.
**Tokatköy −0,134 bulgusu etkilenmiyor** — serisi tamamen aralık içinde, güven yüksek.
> **Sipariş MAP29:** C2L2 scale/offset kontrolü + aralık guard'ı (`assert -1 ≤ NDVI ≤ 1`) + 7 mahallenin yeniden hesabı. **SIG1'de net=0, burada NDVI>1 — aynı sınıf hata: fizik sınırının kontrol edilmemesi.**

## V16 — kendi işime itiraz

1. **Denetleyen olarak kendimi imzaladım; §G1-G3 için meşru, §G2 ısı tablosu ve §G4 dosya için değil.** Onları ben ürettim, denetleyeni yok. **Kural 4 üçüncü turdur karşılanmıyor** — bu artık bir eksik değil, **yapısal borç.**
2. **Amaç etiketleri kamu ihalesi kategorisine dayanıyor.** Bu, "ne için para harcandığı"dır — "mahalle ne için gelişiyor" değil. Çubuklu için güçlü (8/8 tek kategori), Riva için zayıf (2 ihale, ikisi farklı). **Sermaye ve piyasa ayağı olmayan mahallelerde amaç okuması yapmadım** — Ortaçeşme'yi boş bıraktım.
3. **Tic ayağını Tic'siz doldurdum.** TİC ayağının dolgusunun neredeyse tamamı İhale'nin yüklenici alanından geldi. Bunu "Tic ayağı" diye adlandırmak **yanıltıcı olabilir**; tabloda TİC = *"firma izi"* okunmalı. CC-Tic'in bu tabloya katkısı bir kesin kayıt (EKGYO/Riva) ve **bir dürüst körlük beyanıdır.**
4. **Riva'ya 6 ayak verdim ama uydu ayağı hâlâ yok.** İlçenin en sıcak mahallesini üç turdur ölçemiyoruz. Skor yüksek olduğu için bu eksik gözden kaçabilir.
5. **Tokatköy zincirini kurmadım ve bu bir kayıp olabilir.** Zamanlama ters olduğu için "sermaye→fizik" demedim. Eğer 2015-2020 kaybı EKGYO'nun ön hazırlığıysa zincir gerçekti ve ben fazla temkinli davrandım. **Test: EKGYO'nun Tokatköy'e ilk giriş tarihi (KAP öncesi TOKİ kaydı) — Borsa'ya sipariş.**
6. **Polonezköy'ün "iki zıt amaç" okuması bir sentezdir**, ölçüm değil. İki olgu doğru (kamu doğa koruma harcıyor, PEKGY villa yapıyor); aralarındaki gerilim benim yorumumdur.
7. **KVKK (#31):** §4.4-R1 kamu görevlisi/siyasetçi isimleri içerir. Belge **iç kullanım**; dış sunumda maskeleme Patron kararı.
8. **Sprint numarası:** bu belge SIG3'tür, dosya adı SIG2 olarak talep edildiği için korundu. Karışıklık riski var.

---

**Kaynaklar (#21-B):** CC-İhale İ61-62-63-**İ64** (`vaka_beykoz_ihale_I62.json` · `beykoz_resmi_katman.json`) · **CC-Tic T125** (`firma_db_tic.jsonl`, 527 kayıt) · CC-TT-MAP MAP26-27-**MAP28** (`beykoz_zaman_makinesi.json`, 45 mahalle × 9 epok) · CC-Borsa S56-57 (KAP idx 1559473 · 1618761 · 606949 · 1066143 · 1066890) · CC-Basın S80-81-**S82** (`vaka_beykoz_basin_S80.json`, 54 kayıt) · CC-Sosyal S204-**S205** (108 video / 35 kanal) · CC-TT-AI TTA96-97-**TTA98** (`beykoz_ansiklopedi_master_TTA98.json`, 45/45) · CC-Analiz S48-49 (`uzanti_katmani_beykoz_S48.jsonl`, 3.293 kayıt) · CC-Finans F2 · CC-Signals SIG1-SIG2

**Üreten:** CC-Signals SIG3 · **Denetleyen:** CC-Signals §G1-G3 ✅ · §G2 tablo + §G4 dosya ☐ (V16-1)
**Kod:** `~/signals/kod/isi_haritasi_SIG3.py` (8 ayak + gelişim/bakım filtresi + NDVI aralık guard'ı)
**$0 · A04 · V16 · #18 · #21-A/B · #31 · #34 · SİLME-YOK**
