# BEYKOZ MASTER DOSYASI v1

**Üreten:** CC-Signals (3. katman — istihbarat + çapraz kontrol) · **Tarih:** 2026-07-27
**Kapsam:** 45 mahalle · 9 CC · 8 tur · **SIG1→SIG6 entegre**
**Durum:** ✅ **ÜST AKIL ONAYLADI (27.07.2026)** — r1 yaması uygulandı
**Disiplin:** $0 · A04 · V16 · #18 · #21-A/B/C · **#31 dış-sınır uyumlu — arşiv public (Patron kararı 27.07), dış-sunum maskeleme ayrı karar** · #34 · SİLME-YOK

---

## OKUMA ANAHTARI

| İşaret | Anlamı |
|---|---|
| 🟢 **GÜÇLÜ** | 2+ **bağımsız** kaynak (farklı CC ve/veya farklı kaynak tipi) — **dosyaya girer** |
| 🟡 **İZLENEN** | Tek kaynak · proxy · model çıktısı — **ayrı listede durur, karar dayanağı değil** |
| **K=n** | Bulguyu doğrulayan bağımsız kanal sayısı |
| ⏸️ | Beklemede — veri/erişim yok |

### Dil kuralı (kanon)

| ✅ Kurulur | ❌ Yasak |
|---|---|
| *"Süreç şu tarihte başladı, şu kadar süre işledi"* | *"patlar" · "değerlenecek" · "kaçırmayın"* |
| *"Şu ayak sıcak, ölçüm şurada"* | *"X kat kazandırır" · "garanti"* |
| *"Şu olursa güçlenir, şu olmazsa zincir kopar"* | kaynaksız/güvensiz sayı |

> **Bu dosya fiyat öngörüsü içermez.** Nerede, ne amaçla bir şeylerin olduğunu gösterir; ne edeceğini söylemez — **çünkü ölçmedik.**

---

# 1. YÖNETİCİ ÖZETİ

| | |
|---|---|
| **Mahalle** | 45 · **21'inde (%47) ölçülebilir hiçbir sinyal yok** |
| **Sıcak nokta** | **Riva 6/9** · Çubuklu · Kavacık · Tokatköy **5/9** · Gümüşsuyu · İncirköy · **Paşabahçe** · Yalıköy **4/9** |
| **Gelişim amacı** | Çubuklu **eğitim** · Gümüşsuyu **sağlık** · İncirköy + Polonezköy **sermaye** · Riva **karma** · Tokatköy **konut (tamamlandı)** |
| **Yapı stoku** | **51.201 bina** · %95,1'i 1–4 kat · 9–19 kat toplam **121**, bunun **87'si Kavacık'ta** |
| **Arz kısıtı** | **4 kısıt tipi** (Boğaziçi · orman-SİT · doğal-SİT · **NATO-POL**) · kırılma yolu **üç** (2B · TOKİ/dönüşüm · özel orman) · **+ yargı ayağı: Çavuşbaşı davası reddedildi (2024), 2B cephesi hukuken temizlendi** |
| **Kamu parası** | 144 ihale — **yalnız 64'ü yeni yatırım, 80'i bakım.** Gelişim iki kurumda |
| **Kurumsal konut arzı** | **3.011 birim / 17 aktör** · kamu (EKGYO) payı **~%23** — 2.303 birimi tek kanallı |
| **İl çıpası** | İstanbul değerleme **87.301 TL/m²** (2026-Q2, TCMB) · fiyat reel **−%5,16** · **kira reel +%0,99 — tek pozitif** |
| **Yönetişim** | Seçilmiş başkan tutuklu · rüşvet/irtikap davası **2. dalgada** · 3. dalga bekleniyor |
| **★ Ana bulgu** | **1/5000 askısındaki 7 mahallenin 4'ünde eşzamanlı sermaye girişi** (§6) |

## 1.1 Tek paragrafta Beykoz

> Beykoz her yeri değil. 45 mahallenin 21'inde ölçülebilir hiçbir sinyal yok; **beş yerde toplanıyor ve her biri farklı amaçla gelişiyor.** Üçte ikisi orman/kırsal ve koruma amaçlı imar rejiminde — bu kısıt fiyatı destekler, **aynı kısıt projeyi de sekiz yıl bekletir.** Sermaye 2026'da yeniden hareketlendi: Şişecam 117 bin m²'yi **171,5 milyon dolara** Çelikler Taahhüt'e devretti, Peker GYO Polonezköy'de 70 villaya başladı, Riva'da üç mega proje aynı anda ilan edildi. **Ve piyasa bunu okuyor** — İncirköy'de bir emlakçı, işlemin tutarını ve alıcısını birebir yazarak komşu arsayı pazarlıyor. Ama **imar kararlarını veren belediyenin seçilmiş başkanı tutuklu** ve dava bu ay ikinci dalgaya genişledi. Fiyatta ise hâlâ tek kenardayız: elimizdekiler **istenen** fiyat; gerçekleşen fiyat kanalı (tapu) sistemde yok.

---

# 2. ISI HARİTASI

📊 **Görsel:** [`cikti/beykoz_isi_haritasi.png`](cikti/beykoz_isi_haritasi.png)
🔧 **Kural:** [`kod/isi_haritasi_SIG3.py`](kod/isi_haritasi_SIG3.py) — eşikler kodda sabit, tartışmaya açık

> 🆕 **9. AYAK EKLENDİ — İMAR.** İ66/İ69 ile Beykoz'un imar süreci ölçülebilir hale geldi. **Eşik:** 6306 riskli alan **veya** 18. madde uygulaması **veya** 1/5000–1/1000 askı (2025-26).
> 🆕 **Paşabahçe SERMAYE + TİC kazandı** (Torunlar GYO, K=2) → **2/8'den 4/9'a.**

| Mahalle | Ayak | KAMU | SERM | UYDU | HABER | SÖYLEM | FİYAT | YAPI | TİC | **İMAR** |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **Riva** | **6** | ● | ● | · | ● | ● | ● | · | ● | · |
| **Çubuklu** ⬆ | **5** | ● | · | · | ● | · | · | ● | ● | **●** |
| **Kavacık** | **5** | ● | ● | · | · | ● | · | ● | ● | · |
| **Tokatköy** ⬆ | **5** | · | ● | ● | · | · | · | ● | ● | **●** |
| **Gümüşsuyu** ⬆ | **4** | ● | · | · | · | · | · | ● | ● | **●** |
| **İncirköy** ⬆ | **4** | · | ● | · | · | · | · | ● | ● | **●** |
| **Paşabahçe** ⬆⬆ | **4** | · | **●** | · | ● | ● | · | · | **●** | · |
| **Yalıköy** | **4** | ● | · | ● | · | · | · | ● | ● | · |
| Polonezköy ⬆ | 3 | · | ● | · | · | · | · | · | ● | ● |
| Çamlıbahçe ⚠️ · Kanlıca · Merkez · Soğuksu ⬆ · Acarlar ⬆ · Göztepe ⬆ · Rüzgarlıbahçe ⬆ | 2 | | | | | | | | | |
| **Ortaçeşme** ⚠️ · Çiğdem ⬆ · Yavuz Selim · Çengeldere · Göksu · Yeni Mahalle · İshaklı · Anadolu Kavağı | 1 | | | | | | | | | |
| **21 mahalle** | **0** | · | · | · | · | · | · | · | · | · |

**Dağılım:** 6→1 · 5→3 · 4→4 · 3→1 · 2→7 · 1→8 · **0→21 (%47)**

> ✅ **SIG8 (28.07) — E1 + ARSA 10. ayak UYGULANDI (ÜA onayı):** FİYAT kuralı *"CSV≥10 **VE** uzKS≥20"* → **"uzKS≥20 VEYA CSV≥10"**; **ARSA 10. ayak** eklendi (S53 emsal-v2, n≥8). **0 ayaklı 21 → 11 (%24).** Yeni sıralama: **Çubuklu 8/10** · Kavacık · Riva · Tokatköy **7** · Gümüşsuyu 6 · İncirköy · Yalıköy 5 · Paşabahçe 4. **SIG7 denetimi doğrulandı** — (a) sınıfının 6'sı da açıldı, kalan 11 = (b)5 + (c)6, tam örtüşme.
> 🔴 **Uyarı:** *Çubuklu, Riva'yı **yeni kanıtla değil, yeni ayakla** geçti* (İMAR + ARSA lehine çalıştı; Riva'nın UYDU'su hâlâ ölçülmüyor). **Sıralama ayak-setine duyarlıdır.** Detay: [`sig8_sinyal_kaniti_v2.md`](sig8_sinyal_kaniti_v2.md)

> 🔍 **SIG7 denetimi (28.07):** 21 sıfır mahalle tek tek yeniden sorgulandı → **6'sı eşik/bağlantı hatası** (veri var, ayak yanmadı — Anadolu Hisarı · Baklacı · Çavuşbaşı Çiftlik · Görele · Mahmutşevketpaşa · Elmalı) · **9'u kanal körlüğü** · **6'sı gerçek sessiz.** ★ **Beykoz'un ölçülmüş en pahalı hücresi (yalı-köşk 545.455 TL/m², n=9) 0 ayaklı bir mahallede duruyordu** — FİYAT ayağının *"CSV≥10 **VE** uzantı≥20"* kuralı zayıf kaynağı bağlayıcı yapıyor, ve **S53 emsal v2 ısıya hiç bağlı değil.** **Eşik bu turda DEĞİŞTİRİLMEDİ** (karar Üst Akıl'da); E1 onaylanırsa 0-ayak **21→17**. Detay: [`sig7_21_denetim.md`](sig7_21_denetim.md)

### İMAR ayağını taşıyan 10 mahalle

| Dayanak | Mahalle |
|---|---|
| **6306 riskli alan** | **Tokatköy** (onaylı+yürürlükte) · **Çubuklu-B** (09.04.2018 Bakanlar Kurulu, **5,6 ha**, 18. madde **askıda**) |
| **18. madde uygulaması** | **Gümüşsuyu** (1897 ada, Bakanlık onay 06.10.2023) · **Çubuklu-B** (askı 22.12.2025, PARSİD) |
| **1/5000 Boğaziçi KA askısı** (31.12.2025–29.01.2026) | İncirköy · Çiğdem · Soğuksu · Acarlar · Rüzgarlıbahçe · Gümüşsuyu · Çubuklu |
| **1/1000 KAUİP askısı** | **Göztepe** (2760 ada 110 parsel, 21.07.2026) |
| **KA planı 2. askı itirazı** | **Polonezköy** |

### Isı ayaklarının tanımı

| Ayak | Eşik | Kaynak |
|---|---|---|
| KAMU | ≥2 **gelişim** ihalesi ve ≥50 M TL, **veya** ≥100 M TL gelişim *(bakım/çok-ilçe ayıklanmış)* | İhale İ62-66 |
| SERMAYE | ≥1 kurumsal aktör | Borsa S54-61 + Tic T125-127 |
| UYDU | net ≥+2,0 p · güven ≥orta · **ölçüm gerçek** *(yer-tutucu satırlar dışlandı)* | TT-MAP MAP24-30 |
| HABER | ≥2 haber *(yanlış pozitif temizlenmiş)* | Basın S79-86 |
| SÖYLEM | ≥2 atıf | Sosyal S202-208 |
| FİYAT | **çift kanıt:** CSV n≥10 **ve** uzantı n≥20 | Analiz S46-52 |
| YAPI | POI ≥15 **veya** ağır hasar bina ≥25 | TT-AI TTA96-99 |
| TİC | ≥2 tekil müteahhit **veya** kurumsal proje izi | Tic + İhale yüklenici alanı |
| 🔵 **RADAR** | **HAKEM — ayak değil** | TT-MAP MAP30 |

> 🔵 **Radar neden ayak değil:** Sentinel-1 ACD Beykoz'un dik yamacında **±32-36 dB layover artefaktı** üretiyor; sıkı eşiği geçen **temiz aday 0 mahalle**. Ama **relatif ayırt ediciliği çalışıyor** — bilinen inşaatları yakaladı (Çubuklu %6,9 · Gümüşsuyu %11,9), bilinen fenolojiyi eledi (Ortaçeşme %3,5). **Bir mahalleyi sıcak yapmaz; bir optik bulguyu onaylar ya da düşürür.** İcraatı: **1 bulgu düşürdü, 2 bulgu doğruladı.**
> ⏸️ **OPERA DIST beklemede** — Earthdata token geçersiz (7 karakter, JWT değil).

---

# 3. GELİŞİM AMAÇLARI — "ne İÇİN gelişiyor"

**Yöntem:** her mahalle için dört ayak aynı satırda — uydu (ne değişti) × kamu ihalesi kategorisi (ne için para) × sermaye (ne yaptı) × firma (kim).
⚠️ *Amaç etiketi **kamu harcamasının kategorisinden** türetilir, bir niyet beyanından değil.*

| Mahalle | Uydu | Kamu ne için | Sermaye | **AMAÇ** |
|---|---|---|---|---|
| **Çubuklu** | yeşil kaybı **yok** | **8 gelişim / 266,3 M TL · 8/8'i EĞİTİM** (Türk-Alman Üniv., 5 yıl kesintisiz, 5 ilan açık) | — *(MESA 🟡)* | 🎓 **EĞİTİM (kıyı)** + 🏗️ **DÖNÜŞÜM (iç)** — **iki-yüzlü, aşağı bkz.** |
| **Gümüşsuyu** | yeşil kaybı **yok** | **3 gelişim / 4.194,8 M TL · 3/3'ü SAĞLIK** + bitişik Çırçır Deresi ıslahı | NEF Karlıtepe 🟡 | 🏥 **SAĞLIK** — tek mega tesis |
| **İncirköy** | **değişim SIFIR** | **0 gelişim ihalesi** | **Çelikler 171,5 M$** 🟢 + Envoy Vadi 🟡 | 💰 **SERMAYE/ARSA** — proje henüz yok |
| **Polonezköy** | orman %98, **korunuyor** | 2 gelişim / **yalnız 3,0 M TL**, ikisi de Tarım-Orman Bakanlığı | PEKGY 70 villa 🟢 | 🌲 **İKİ ZIT AMAÇ** — kamu korur, sermaye villa yapar |
| **Riva** | ⏸️ **4 turdur ölçülmüyor** | 2 gelişim / 120,9 M TL (kıyı + güvenlik) | **3 mega proje** | 🔀 **KARMA** — özel konut + kamu spor/turizm |
| **Tokatköy** | **NDVI −0,134** (tek yeşil kaybı) | 0 gelişim | EKGYO 2 etap 1,68 Mr TL 🟢 | 🏘️ **KONUT — tamamlandı** |

## 3.0 ★★ ÇUBUKLU İKİ-YÜZLÜ — tek mahalle adı, iki ayrı bölge

**Beykoz'un tek mahallesi iki farklı imza taşıyor** *(İ69, WebSearch-doğrulanmış)*:

| | **KIYI (Boğaz)** | **İÇ (Kavacık kavşağı kuzeyi)** |
|---|---|---|
| İmza | 🎓 **eğitim / kampüs** | 🏗️ **riskli alan / kentsel dönüşüm** |
| Dayanak | Türk-Alman Üniversitesi · 19 ihale · 8 gelişim / 266,3 M TL · 5 yıl kesintisiz | **09.04.2018 Bakanlar Kurulu riskli alan · 5,6 ha · adalar 823·833·834·835** |
| Durum | **5 ilan hâlâ açık** — sürüyor | **18. madde askıda** (22.12.2025, PARSİD) · 1/5000 KA NİP + 1/1000 KA UİP |
| Konum | Boğaz kıyı bandı | Anadolu Hisarı + **E-80 Bağlantı Yolu doğusu** |
| Kurumsal iz | kampüs kendi parselinde kapalı | **İBB Çubuklu İmar-Mülkiyet Çözüm Ofisi kuruldu** |

> ★ **Bu bir çelişki değil, coğrafi ayrımdır.** Isı tablosunda tek satır olarak görünen Çubuklu, aslında **birbirinden bağımsız iki süreç** yürütüyor. Mahalle bazlı analizin sınırı tam burası: **birim mahalle, olgu mahalle-altı.**
> ⚠️ **Sonuç:** Çubuklu'nun 5/9 skoru **iki bölgenin toplamıdır**; hiçbir alt-bölge tek başına 5 ayak taşımıyor. Yatırım okuması yapılırken **hangi Çubuklu** sorusu sorulmalıdır.
> 🔴 **Açık:** *"Çubuklu A Bölgesi"* — B doğrulandı; A ayrı riskli alan mı, aynı projenin etabı mı **belirsiz** (İ69). Basın S87 kanal aradı: **CSB filtre-URL çalışmıyor, planaski JS-form** → **basın kanalı YOK, resmî kanal takipte.**

## 3.1 ★ Örüntü: kamu parası ile fiziksel büyüme KOPUK

| | Kamu gelişim ihalesi | Uydu değişimi |
|---|---|---|
| Çubuklu (19 ihale, kampüs) | **en yoğun** | yeşil kaybı yok |
| Gümüşsuyu (4,19 Mr TL) | **en büyük** | yeşil kaybı yok |
| Kavacık | aktif | **−5,0 p (geriliyor)** |
| Ortaçeşme | tek park | *(büyüme de yok — §3.2)* |
| **Çamlıbahçe** | **SIFIR ihale** | büyüyor |
| Yalıköy | 1 okul | büyüyor (+8,4 p) |

> **Kamu, Beykoz'un büyüyen yerlerine gitmiyor; gittiği yerler büyümüyor.** Sebep İ64/İ66'nın keşfinde: ilçe **koruma amaçlı imar rejiminde** (1/25.000 KANİP + Boğaziçi öngörünüm + SİT) — kamu yatırımı kurum parsellerine sıkışıyor, büyüme koruma boşluklarında piyasa eliyle oluyor. **🟢 K=3**

## 3.2 ⚠️ Ortaçeşme — çelişki çözümü

| Bulgu | Ne ölçüyor | Sonuç |
|---|---|---|
| F2: *"kentleşme lojistik"* | **mevcut kullanım** (1.350 m² ofis+depo kiralık, m² kirası ilçenin en düşüğü) | depo stoğu **var ve kiralanıyor** |
| Üç imza 🟢K=3 | **yeni yapım** (NDVI + NDBI + radar) | 10 yılda **yeni bina yok** |

> ✅ **Sentez:** *"Ortaçeşme'de **mevcut stok hareketli, yeni fiziksel yatırım yok.** 21 satılık konut ilanı Haziran-Temmuz 2026'da çıktı (medyan **59.091 TL/m²**, ilçenin en ucuzu) ama üç bağımsız uydu ölçümü yeni yapım göstermiyor. **Mahalle işliyor, büyümüyor.**"*
> 🔴 MAP26'nın **%17,1 "yeni yapı" değeri ARTEFAKT** — fenoloji; üç imzayla kesinleşti.

---

# 4. SERMAYE HARİTASI — mahalle-atfı kesin çekirdek
*(tam liste: **17 aktör** — CC-Tic FINAL §2)*

| # | Aktör | Mahalle | Ölçek | Halka açık | Kanıt |
|---:|---|---|---|:-:|:-:|
| 1 | **EKGYO** | **Riva** | **708 konut + 68 dükkan** (KAP yapı ruhsatı idx 709039 + 887441) · ASKSTG 3,808 Mr TL | ✅ | 🟢 K=2 |
| 2 | **EKGYO** | **Tokatköy** | 2 etap · **789,7 + 889,9 M TL** · yüklenici **TURGUT Müteahhitlik** | ✅ | 🟢 K=2 |
| 3 | **SISE → Çelikler Taahhüt** | **İncirköy** | 117.018,95 m² · **171,5 M USD** · 11 parsel · 2026-02-20 | ❌ | 🟢 **K=3** |
| 4 | **PEKGY / SozInv → Tera Beykoz GYA** | Polonezköy | **3 proje** (Tera Orman + Garden + Aden) · Tera Orman ~25.000 m² / 70 villa · **SPV devri 03.03.2026, 341,2 M TL** | ✅ | 🟢 K=2 |
| 5 | **Kalyon GYO** | **Riva** | Riva Country **1.300 villa** / 230 dönüm | ❌ *(doğrulandı)* | 🟡 K=1 |
| 6 | **Ion / Kentsel GYO** | **Riva** | **933 birim** (830 satılık + 103 kiralık) · 84 ha · 2027 | ✅ *(Tic §5-6 · 2026 halka arz sürecinde)* | 🟡 K=1 |
| 7 | **NEF (Timur Holding)** *(+Akiş +HSN — Tic §5-2)* | **Gümüşsuyu** | Karlıtepe **~1.300 konut / 220.000 m²** · mahallede **3 mega aktör** | 🔒 grup *(2026 halka arz sürecinde)* | 🟡 K=1 |
| 8 | **MESA MESKEN** | Çubuklu *(ilanlarda Acarlar)* | Çubuklu 28 + Mesa Orman 2 | 🔒 | 🟢 **K=2** ⭑ |
| 9 | **Envoy Gayrimenkul** | **İncirköy** | Envoy Vadi **300 konut / 65.000 m²** | ❌ | 🟡 K=1 |
| 10 | **Sur Yapı** | **Soğuksu** | kentsel dönüşüm, ölçek yok | ❌ | 🟡 K=1 |
| 11 | AGYO · ANELE | Çayağzı · Kavacık | 1.313 m² arsa (2016) · showroom (2016) | ✅ | 🟡 K=1 |
| **12** | ★ **Torunlar GYO (TRGYO)** | **Paşabahçe** *(eski Tekel Fabrikası)* | 3 parsel **71.909 m²** · 129 odalı otel + 5 blok yalı + 5 blok rezidans · inşaat 62.859,56 m² · **otel 2028 başı** | ✅ | 🟢 **K=2** |

> **Aktör sayısı 11 → 17'ye çıktı** (CC-Tic FINAL, T128-EK). Yukarıdaki tablo **Beykoz'da mahalle-atfı kesin olan** aktörleri gösterir; tam 17'lik liste `FINAL_cc_tic_beykoz.md` §2'dedir.

⭑ **MESA K=2:** T126 (GYODER kaydı) + **19 gerçek sahibinden ilanı** ("Mesa Orman", "Mesa Çubuklu 28", "MESA 28") + Sosyal S208'de 9 doğrudan video.

## 4.1 🔴 Kamu payı: %95 → %50 → %36 → **%23**

| Proje | Mahalle | Birim |
|---|---|---:|
| EKGYO Düşler Vadisi | Riva | **708 konut** |
| Kalyon Riva Country | Riva | 1.300 |
| Ion Riva | Riva | 933 |
| PEKGY Tera Orman | Polonezköy | 70 |
| **TOPLAM** | | **3.011** |

**Kamu (EKGYO) payı = 708 / 3.011 = %23,5** *(yalnız Riva: %24,1)*

> ⚠️ **Pay üç turda dört kez düştü ve her düşüş paydaya yeni aktör girmesinden kaynaklandı.** Bu, **oranın kendisinin kırılgan olduğunu** gösteriyor — payda hâlâ tamamlanmamış olabilir.
> ⚠️ **Paydanın 2.303 birimi tek kanallı** (Kalyon + Ion, ikisi de halka kapalı; Basın havuzunda **0 hit**, KAP'ta yok). Yalnız doğrulanmış birimlerle hesap **%91** verir. **%23 ↔ %91 arası bu ayağın gerçek belirsizliğidir** ve ikisi de tek başına yayımlanamaz.
> 🔴 **Yasak:** ~~"%95 kamu"~~ · ~~"~%50"~~ · ~~"~%36"~~

## 4.2 Sermaye zaman ısısı

```
2016 ██        AGYO Riva arsa · ANELE Kavacık
2017 ███████ ◄ TEPE-1  EKGYO Riva ihale → kazanan sözleşmeye GELMEDİ → DAVA
2018 █         AKSGY imar
2019 █         AKSGY imar
2020 ·
2021 ·
2022 ███████ ◄ TEPE-2  EKGYO Tokatköy icra (TURGUT) + Riva STG artışı
2023 ·
2024 ·
2025 ██        EKGYO Riva ikmal inşaat + yer teslimi
2026 ███     ◄ YENİ DALGA  SISE→Çelikler 171,5 M$ · PEKGY Tera Orman
```

> ★ **Riva'nın 8 yıllık gecikmesinin sebebi bulundu:** 2017 ihalesini kazanan iş ortaklığı **sözleşmeye gelmedi**, teminat irat kaydedildi, iş 2. teklife yeniden ihale edildi, **tazminat davası istinafta** (KAP faaliyet raporu 2023, idx 1274021).
> 🔴 **Genelleme YASAK:** *"Beykoz'da döngü 8 yıl"* denemez — **n=1 ve vaka dava-kirli.**

---

# 5. ARZ KITLIĞI — ÜÇ MEKANİZMA

Arz kıtlığı iki yarı olarak yazılmıştı: **fiziksel** (%62 orman/kırsal, TT-MAP çift imza) + **hukuki** (Boğaziçi kuşakları + koruma planları, İ66). **Kilidin kırılma yolları üçtür.**

| # | Mekanizma | Ne yapar | Beykoz'daki kanıt | K |
|---|---|---|---|:-:|
| **1** | **2B** | orman rejiminden çıkarır | 2015 imar planında **233 hektar 2B arazi** dönüşüm için (TMMOB itirazı) | 🟡 1 |
| **2** | **TOKİ / kentsel dönüşüm** | yapılı dokuyu yeniden kurar | **Tokatköy dönüşüm alanı ONAYLI** (Meclis 2026-01-08) · EKGYO 1,68 Mr TL · nüfus −%14 · **Sur Yapı Soğuksu** | 🟢 3 |
| **3** | **★ ÖZEL ORMAN** | statü korunurken **sınırlı yapılaşma hakkı** doğar — kilit kırılmaz, **esner** | **Acarkent 316/4 · ~1.800.000 m² · kat irtifakı kurulmuş** · **Kundura 183 dönüm** | 🟢 3 |

## 5.0 🆕 KISIT TİPİ 3 → 4: NATO-POL boru hattı

| Alan | Bulgu |
|---|---|
| İşletmeci | MSB Akaryakıt İkmal ve **NATO POL Tesisleri** İşletme Başkanlığı (4636 s.) |
| Dayanak | İBB Meclis **18.03.2016 No. 546** · plan notları **refId 54022** |
| Kısıt | Güzergâh boyunca **yapılaşma kısıtlı koruma kuşağı**; **deplase = MSB onayı şart** |
| Etkilenen (tahmini) | **Kavacık · Anadolu Hisarı · Çubuklu (iç)** — E-80/TEM koridoru ekseni |

> **Beykoz'un kısıt tipi artık dört:** Boğaziçi Kanunu · orman-SİT · doğal-SİT · **NATO-POL koruma kuşağı.**
> 🔴 **Dürüst not (İ69):** tam mahalle güzergâhı **refId 54022 plan notları görüntülemesi** gerektiriyor (#8 scrape yok) → **etkilenen mahalleler TAHMİN**, kesin değil. Ve **NATO-POL koridoru ile Çubuklu riskli alanı bitişik** — birebir çakışma doğrulanmadı.

## 5.0-B ⚖️ ZİNCİRE YARGI KATMANI — Çavuşbaşı davası

| Katman | Bulgu | Güven |
|---|---|:-:|
| **Davacı** | **Mimarlar Odası** *(dernek)* | V |
| Konu | Çavuşbaşı 1/5000 KA Revizyon NİP + 1/1000 KA Revizyon UİP · **iptal talebi** |
| Kapsam | **Çengeldere · Fatih · Yavuz Selim · Baklacı · Çiftlik · Görele** (6 mahalle) | V |
| **Sonuç** | Mahkeme **hukuka aykırılık bulmadı → iptal REDDEDİLDİ** (istinaf) · **planlar yürürlüğe döndü (2024-04)** | V |

> 🔴 **Bir kaynak düzeltmesi (A04):** CC-Sosyal S208'de bu olay *"CHP İl Başkanlığı Beykoz planlarının iptalini istedi"* diye geçiyordu. **İddianın çekirdeği gerçek** (dava vardı) ama **çerçevelemesi taraflı**: hukuki fail **parti değil, Mimarlar Odası**; ve **sonuç iddianın ima ettiğinin tersi** — iptal reddedildi, planlar ayakta.
> ★ **Vaka bağlantısı:** Dava konusu Çavuşbaşı = İ67'nin **#1 2B mahallesi**. Yani Beykoz'un arz kıtlığı cephesi **mahkemede de çekişildi** — plan yapıldı, dava edildi, **ayakta kaldı** → **2B cephesinde hukuki belirsizlik ÇÖZÜLDÜ (2024).** Bu, §6'daki askı×sermaye eşzamanlılığının **yargı ayağıdır.**
> ⚠️ **İki ayrı plan cephesi var:** (a) **Çavuşbaşı / iç-kuzey** — dava edildi, reddedildi, 2B kuşağı · (b) **Boğaziçi kıyı** — İ66'nın 7 mahallelik 2026 askısı. **Litigation iç-kuzeyde yoğunlaşmış, askı kıyıda.**
> 🔴 **Sınır:** UYAP karar araması **public değil**; karar metni ve esas numarası **çekilemedi** — sonuç (ret) yalnız basın yansımasından.

> ⏸️ **T128 BEKLEMEDE.** §5'teki parsel/tapu kayıtları **Üst Akıl bildirimidir**; kaynağı Patron'un manuel TKGM sorgusu (İ64'ün izin verdiği tek yol). **Sistemde karşılık CC çıktısı YOK** — `~/tradia_tic`, `~/cc_ihale/cikti`, `~/tradia_basin/cikti`, `~/finans` tarandı, bulunamadı. T128 (TKGM 3 deste) geldiğinde bu bölüm **kaynak-tam** hale gelir; şu an **K=1 birincil-tekil + benim eklediğim ikinci kanal** ile duruyor.

## 5.1 ★ Mekanizma-3'ün fiziksel imzası — sistemin kendi verisinde görünüyor

| Ölçüm | Acarlar (Acarkent) | Kaynak |
|---|---:|---|
| Bina sayısı | **2.240** | İBB-2017 |
| — 1980-2000 arası | **1.846 (%82,4)** · 1980 öncesi: **3** | aynı |
| Uydu yapılaşma oranı 2025 | **%7,3** | TT-MAP |
| Orman oranı | **%72,0** | MAP28 |
| Konut ilanı (Tem 2026) | **n=191 — ilçenin en kalabalık hücresi** | Analiz S49 |
| Medyan | **220.455 TL/m² — en pahalı ikinci** | Analiz S49 |

> ★ **Anomali:** *2.240 bina barındıran bir mahallenin uydu yapılaşma oranı nasıl %7,3 olur?*
> **Cevap özel ormandır** — yapı, ormanın içine **dağınık villa** olarak serpiştirilmiş; NDBI mahalle ortalaması bunu göremez. F2'nin *"Acarlar bir daire mahallesi değil, villa stoku"* tespiti (ortanca 340 m², 6+2/7+2) **aynı olguyu piyasa tarafından** söylüyordu. **Üç bağımsız kanal: tapu · bina sayımı×uydu oranı · ilan profili. 🟢 K=3**

## 5.2 ★ "Cins tashihi yok" — İncirköy'e özgü DEĞİL

| Parsel | Fiili kullanım | Tapudaki cins | Süre |
|---|---|---|---|
| **Kundura** (183 dönüm) | film platosu / sanat merkezi (2005'ten) | **fabrika** | **~20 yıl** |
| **Paşabahçe Cam / İncirköy** (117.018,95 m²) | üretim 2002'de bitti, 2016'da yıkıldı, boş | fabrika | ~24 yıl |
| Tekel/Rakı (Paşabahçe) | yıkıldı, akıbet belirsiz | doğrulanmadı | — |

> ★ **Kalıp:** *Beykoz'un sanayi mirası parsellerinde tapu kaydı, fiili kullanımın 20+ yıl gerisinde.*
> **Üç sonucu var:** ① **nitelik bazlı analiz sistematik yanılır** — tapu niteliğinden fiili kullanım çıkarılamaz; ② **cins tashihi kendisi bir sinyaldir** — geliştirmenin hukuki ön hazırlığı, ve bugün üç parselin hiçbirinde yapılmamış; ③ **Çelikler'de cins tashihi başvurusu görünürse**, İZLEME-01'in T3 tetiğinden **önce gelen** erken işaret olur.
> 🔴 Cins tashihi durumu **yalnız Kundura için teyitli**; diğer ikisi çıkarım.

*(Merkez 355/17 — ikinci dalyan parseli kayda alındı. Yüzölçüm, mülkiyet, statü **bilinmiyor**; hiçbir ayağa girmedi. Kayda değer bulmamın tek sebebi Beykoz Merkez'in TT-AI evreninde **tek 0-eksenli mahalle** olması.)*

---

# 6. ★★ ANA BULGU: ASKI × SERMAYE EŞZAMANLILIĞI

**1/5000 Boğaziçi Koruma Amaçlı NİP revizyonu 31.12.2025–29.01.2026 arasında 7 mahallede askıya çıktı** (İ66, WebSearch-doğrulanmış public duyuru). **Aynı 7 mahallenin en az 4'ünde, aynı dönemde kurumsal sermaye girişi var** (T126).

| Askıdaki mahalle | Kuşak | Sermaye | Ölçek | K |
|---|---|---|---|:-:|
| **İncirköy** | öngörünüm | **Çelikler** + **Envoy** | 117.018,95 m² / 171,5 M$ · 300 konut / 65.000 m² | 🟢3 + 🟡1 |
| **Gümüşsuyu** | etkilenme | **NEF Karlıtepe** | ~1.300 konut / 220.000 m² | 🟡1 |
| **Soğuksu** | etkilenme | **Sur Yapı** | ölçek yok | 🟡1 |
| **Acarlar** | etkilenme | ★ **özel orman 316/4 · ~1,8 M m² · kat irtifaklı** *(firma değil, mülkiyet biçimi)* | ilçenin tek en büyük parseli | 🟢3 |
| Çubuklu | öngör+gerigör | MESA MESKEN | Çubuklu 28 + Orman 2 | 🟢2 |
| Çiğdem · Rüzgarlıbahçe | etkilenme | *(Çiğdem: Maritza Vadi — §9 BEY-15)* | | |
| *(ayrı süreç)* Polonezköy | kuzey orman | PEKGY | 70 villa · KA planı **2. askı itirazında** | 🟢1 |

> 🔴 **Ne demek DEĞİL:** *"sermaye askıyı biliyordu"* · *"içeriden bilgi"* · *"askı onaylanacak"* · *"bu mahalleler değerlenecek"*.
> **Nedensellik kurulmadı, sıralama üç mahallede ölçülmedi** — yalnız Çelikler'de tarih net (işlem 2026-02-20, askı 31.12.2025–29.01.2026 → **askı önce**).
> ✅ **Ne demek:** *Hukuki belirsizliğin ve sermaye hareketinin aynı takvim penceresinde bulunduğu dört mahalle var — ve **askının sonucu dördünde de doğrudan izlenebilir tek tetikleyicidir.***

### Ortak tetikleyiciler

| Tetik | Anlam |
|---|---|
| **T-A1** | Askı **onaylanır** → kısıt netleşir, geliştirme yolu açılır |
| **T-A2** | **İtiraz kabul / revizyon** → belirsizlik uzar, sermaye bekler |
| **T-A3** | Askı sonrası ilgili mahallede **ilk yapı ruhsatı** |
| **T-A4** | Askı sonrası **arsa ilan akışında sıçrama** |

> **Yanlışlanabilir öngörü:** *Askı 2026-01-29'da kapandı. **2027-01'e kadar** bu dört mahallenin hiçbirinde askı sonucu ilan edilmez veya ilk yapı ruhsatı çıkmazsa → eşzamanlılık **tesadüf** olarak kalır ve "sermaye plan sürecini izliyor" okuması **zayıflar**.*

---

# 7. FİNANS KATMANI

## 7.1 İl çıpası (TCMB EVDS, birincil API)

| Gösterge | Nominal | **Reel** |
|---|---:|---:|
| TÜFE | **+%32,11** | — |
| İstanbul konut fiyatı (KFE) | +%25,29 | **−%5,16** |
| **İstanbul kirası (YKKE)** | **+%33,42** | **+%0,99** ★ |
| Konut kredisi faizi (17-07-2026) | **%41,23** | TÜFE'nin **9 p üstünde** |

> ★ **İstanbul kirası, sistemdeki tek pozitif reel gösterge.** Brüt kira getirisi **2022-Q2 %4,02 → 2026-Q2 %6,09** (34 çeyrek, TL/m² seviyesinden).
> ⚠️ **Getiri dibine `değer_kesinliği: düşük` etiketi:** F5'in kredi bayrağı **2021-07 → 2025-07 arası 49 ay kesintisiz reel kredi daralması** buldu (dip −%41,6). KFE'nin kaynağı kredi başvurularındaki değerleme raporlarıdır → **daralma dönemlerinde endeks "kredi çekebileni" temsil eder.** 2026-Q2 çıpası temiz, **2022-Q2 dibi daralmanın içinde.**

## 7.2 ★ 87.301 çıpası — "ilan %17 ALTINDA"

| Ayak | Değer | n |
|---|---:|---:|
| **İlan** medyanı (İstanbul konut satılık) | **72.368 TL/m²** | 35.329 |
| **Değerleme** ortancası (TCMB) | **87.301 TL/m²** | — |
| Oran | **0,829** | |

**F1'in varsayımı — *"ilan yukarı yalan söyler"* — ölçümde yalnız büyüklüğünde değil YÖNÜNDE de çürüdü.**

### ⚠️ İKİ-POPÜLASYON ŞERHİ (bu şerh olmadan kullanılamaz)

| Eksen | F5 sonucu |
|---|---|
| **Coğrafi kompozisyon** | ❌ **ELENDİ** — ilçe-eşit ağırlıklı medyan 72.353, oran 0,829'da sabit |
| **SEÇİLİM** | ✅ **ÖNDE** — TCMB ortancası, ilan dağılımının **%60,9 persentiline** denk |
| m² brüt/net | makası **büyütür** |
| Değerleme yanlılığı | ölçülmedi |

> ✅ **Doğru dil:** *"İlan evreni, değerleme evreninin **ucuz kesimini** temsil ediyor."*
> 🔴 **Yasak:** *"ilan şişik"* · *"şişirme oranı"* · **bu oranı Beykoz'a taşımak** (ilçe kırılımı hiçbir resmi kaynakta yok).

## 7.3 "Beykoz'a mı, Beykoz'un hangi tarafına mı?"

| Grup | Mahalle | Yıllık | İst. farkı | **Reel** | Güven |
|---|---|---:|---:|---:|---|
| **1 · Başa baş** | **Riva** | **+%26,0** | **+0,7 p** | −%4,6 | sağlam (n 109→122) |
| | Baklacı | +%28,8 | +3,5 p | −%2,5 | orta |
| **2 · Yarı yolda** | Acarlar | +%15,4 | −9,9 p | −%12,6 | sağlam (n 144→191) |
| | Çengeldere | +%7,1 | −18,2 p | −%19,0 | orta |
| **3 · Geride** | Göztepe | ±%0,0 | −25,3 p | −%24,3 | sağlam |
| | **Yavuz Selim** | **−%14,8** | −40,1 p | **−%35,5** | sağlam |
| | Görele | −%16,7 | −42,0 p | −%36,9 | orta |
| **ÇIPA** | İstanbul fiyat / kira | +%25,29 / **+%33,42** | | −%5,16 / **+%0,99** | TCMB |

> **Soru "Beykoz'a girer miyim" değil, "Beykoz'un hangi tarafına".**
> ✅ **Riva "başa baş"** — İstanbul'u **geçmedi** (+0,7 puan, reel ikisi de negatif).
> 🔴 *Çavuşbaşı Çiftlik +%90,2* **kullanılmadı**: n=10→17, yıllıklandırma artefaktı. **Küçük örneklemde yıllıklandırma yasak.**
## 7.4 🆕 EMSAL v2 — tip bazlı (84 GÜÇLÜ hücre)

**Dönem etiketi: `S48_UZANTI_2026-Haz-Tem`** — her hücre bu dönemdendir, etiketsiz alıntılanamaz.

| Hücre durumu | Sayı | Dosyada |
|---|---:|---|
| **GÜÇLÜ (n≥8)** | **84** | ✅ **yayın** |
| Zayıf (3≤n<7) | **78** | 🔒 iç kullanım |
| Gizli (n<3) | **88** | ❌ rakam yok |

> **F6'nın 20 hücresi → S53'te 84 hücre (+4,2×).** Aşağıda **yalnız GÜÇLÜ hücreler** var; **78 hücre iç kullanımda, 88 hücre veri yetersizliğinden hiç yazılmadı.**

### Satılık · TL/m² *(GÜÇLÜ)*

| Tip | Mahalle | n | Medyan | [Q1 – Q3] |
|---|---|---:|---:|---|
| **yalı-köşk** | **Anadolu Hisarı** | 9 | **545.455** | 314K – 800K |
| rezidans | Acarlar | 10 | 247.636 | 194K – 263K |
| villa | Acarlar | 85 | 245.455 | 190K – 300K |
| daire | Acarlar | 53 | 227.600 | 164K – 267K |
| villa | Kanlıca | 11 | 200.000 | 158K – 235K |
| daire | Çiğdem | 17 | 183.333 | 166K – 227K |
| daire | Kanlıca | 15 | 168.750 | 101K – 575K |
| villa | Riva | 97 | 164.141 | 113K – 200K |
| villa | Baklacı | 21 | 151.429 | 50K – 240K |
| **villa** | **Ortaçeşme** | 14 | **67.727** | 48K – 96K |
| villa | Tokatköy | 15 | 34.884 | 24K – 109K |

> ★ **Makas tek cümlede:** *Anadolu Hisarı'nda bir yalı-köşkün m²'si **545.455 TL**, Ortaçeşme'de bir villanınki **67.727 TL** — aynı ilçede **8 kat fark**, ve ikisi de aynı dönemin (2026 Haz-Tem) ilan medyanı.*

### Kiralık · TL/m²/ay *(GÜÇLÜ, seçilmiş)*

| Tip | Mahalle | n | Medyan |
|---|---|---:|---:|
| daire / villa | **Acarlar** | 37 / 76 | **1.000 / 1.000** |
| daire | Soğuksu | 27 | 650 |
| villa | Riva | 36 | 633 |
| daire | Anadolu Hisarı | 13 | 564 |
| villa | Yavuz Selim | 12 | 543 |
| **daire** | **Kavacık** | **159** | 428 — *ilçenin en derin hücresi* |
| daire | Çubuklu | 42 | 405 |

### ★ Tip bazlı brüt getiri — watchlist diliyle

| Tip | Mahalle | Sat TL/m² | Kira TL/m²/ay | **Brüt** | Ödenme |
|---|---|---:|---:|---:|---:|
| **villa** | **Yavuz Selim** | 90.000 | 543 | **%7,24** | **13,8 yıl** |
| konut-belirsiz | Acarlar | 158.417 | 873 | %6,62 | 15,1 yıl |
| villa | Göztepe | 119.118 | 546 | %5,50 | 18,2 yıl |
| daire | Kavacık | 94.925 | 428 | %5,41 | 18,5 yıl |
| daire | Acarlar | 227.600 | 1.000 | %5,27 | 19,0 yıl |
| **villa** | **Acarlar** | 245.455 | 1.000 | **%4,89** | **20,5 yıl** |
| villa | Riva | 164.141 | 633 | %4,63 | 21,6 yıl |
| daire | Çubuklu | 138.014 | 405 | %3,52 | 28,4 yıl |
| daire | Tokatköy | 115.909 | 330 | %3,42 | 29,2 yıl |

> ★ **Watchlist okuması (fiyat öngörüsü değil, ölçüm):** *Beykoz'da **en yüksek ve en düşük brüt getiri aynı tipte** — villa. **Yavuz Selim %7,24** (ödenme 13,8 yıl) ile listenin başında, **Acarlar %4,89** (20,5 yıl) ile ortasında. Aradaki fark **kiradan değil satış fiyatından** geliyor: ikisinin kirası neredeyse aynı seviyede değil ama satış fiyatı **2,7 kat** farklı.*
> ⚠️ **Yavuz Selim'in ikinci yüzü:** aynı mahalle §7.3'te **reel −%35,5** ile ilçenin en geride kalanı. **Yüksek getiri + sert reel kayıp aynı mahallede** — bu, §8.5-T2'deki *"dip mi tuzak mı"* sorusunun tam merkezi ve **hâlâ ayırt edilemedi.**
> 🔴 **Hepsi brüt:** boşluk, aidat, vergi düşülmemiş; **ilan fiyatı** üzerinden, gerçekleşen değil.

> **Kavacık ticari ≈ %6,06** — güven %45, dört uyarıyla (n=7 · farklı sprintler · ilan fiyatı · brüt).

---

# 8. SİNYAL KANITI

## 8.1 Backtest — "Tradia o gün olsaydı"

### ⚠️ Dört sistematik şerh (bu bölüm bunlarsız okunamaz)
① **Tradia 2016-17'de yoktu** — "kanalda vardı" ≠ "bizde vardı". ② **Basın havuzu ~60 gün** — "basın kaç yıl sonra fark etti" ölçülemez. ③ **Fiyat serisi 2026-02'de başlıyor** — hiçbir vakada "fiyat şu kadar arttı" denemez. ④ **Seçilim yanlılığı** — dört vaka sonucu bilinerek seçildi; kontrol grubu yok.

| Vaka | Sinyal | Kanal | Doğrulama | **Öndelik** | Sonuç |
|---|---|---|---|---|---|
| **Riva** | 2016-11 / 2017-05 | KAP | 2026-07 | **≈9 yıl 2 ay** | ✅ süreç doğru okundu, **süresi okunamazdı** |
| **Tokatköy** | 2022-09 | KAP + nüfus −%8 | 2026-07 | **≈3 yıl 10 ay** | ✅ en hızlı zincir · ⚠️ **uydu sırası ters** |
| **İncirköy** | 2016-03 | Sosyal | 2026-02 | **≈9 yıl 11 ay** | ⚠️ iz vardı, **cümle farklıydı** |
| **Poyrazköy** | 2016 (vaat) | söylem | 2025-26 | **10 yıl** | ✅ **vaat ÇÜRÜTÜLDÜ** |

### ★ Riva dersi — sinyal "patlama" demez
> Tradia 2017'de **Riva'da bir süreç başladığını** görürdü. Ne göremezdi: **8 yıl süreceğini ve sebebinin dava olacağını.**
> **Doğru olay defteri kaydı (2017-09):** `durum: işliyor · evre: sözleşme · beklenen yansıma: bilinmiyor`
> **Yanlış kayıt olurdu:** `Riva değerlenecek`

### ★ Karşı-örnek — dosyanın dürüstlük şovu
2016 öncesi vaat: *"3. köprü... Poyrazköy ve Garipçe... fiyatlar 3'e katlayacak 5'e katlayacak."*
**10 yıl sonra Poyrazköy:** ısı **0/8** · uydu NDVI **+0,253 (yeşil arttı)** · kamu 1 ihale **6,0 M TL** · sermaye **yok** · konut ilanı **n=1** · basın **0 haber**.
Ve dört bağımsız ölçüm köprü etkisini destekleyemedi: kıyı bandı 2015→2025 NDVI eğimi **−0,003 = düz** (MAP28) · NDBI'de köprü etkisi **izole edilemedi** (TT-AI) · TT-MAP'in kendi karışım uyarısı (koridor ≈ kıyı) duruyor.

> ✅ **Tradia'nın kuracağı cümle:** *"Otoyol yakınlığı Beykoz'da tek başına sinyal üretmedi. Büyüme koridorda değil, kıyı bandında ve koruma boşluklarında oldu."*
> 🔴 **Söyleyemem:** *"fiyatlar 3-5x olmadı"* — fiyat serisi yok. Çürüttüğüm **fiziksel, kamusal ve sermaye ayağıdır.** 🟢 K=3

## 8.2 Ölçülmüş geçiş süreleri — **hepsi n=1**

| Geçiş | Süre | Vaka |
|---|---|---|
| KAP arsa/ihale → fiziksel inşaat | **7,6 – 8,4 yıl** | Riva *(sebebi dava)* |
| KAP sözleşme → piyasada ilan | **≈3 yıl 10 ay** | Tokatköy |
| Yapı ruhsatı → ek ruhsat | 2 yıl 2 ay | Riva |
| **Meclis kararı → ihale ilanı** | **≈3–4 ay** | sokak-cephe |
| Kurumsal işlem → piyasa fiyatlaması | **≈4,5 ay** | İncirköy |
| İhale sonucu → tamamlanma | **ÖLÇÜLEMEDİ** | — |

> 🔴 **Norm değil, tek gözlem.** "Beklenen pencere" tahminleri bunlardan türetilmiş **bekleme aralıklarıdır**, istatistik değil.

## 8.3 Askıda kalan kararlar — **oran YAYIMLANMADI**

24 meclis kararı (2026-01-08 → 2026-06-03) · **hiçbiri 6 aydan eski değil** · EKAP arşivi 2026-07-10'da bitiyor → **payda 4, oran hesaplanamaz.**

| Ölçülen tek zincir | |
|---|---|
| **M7 sokak-cephe rehabilitasyonu** (2026-03-06) → EKAP 2 ihale İLANI (`2026/773577`, `2026/789813`) | **≈3–4 ay**, ikisi de **sonuç yok** |

**Mahalle × meclis yoğunluğu:** Çengeldere **4** · Kavacık **3** · Tokatköy/Riva/Polonezköy 2'şer · 8 mahalle 1'er.
> ★ **Meclis kanalı ısı haritasına 8 yeni mahalle ekledi** — ve **Çengeldere ısı tablosunda 1/8 iken meclis kanalında #1.** Bu, meclis ayağının **9. ayak** olarak eklenmesi gerektiğini gösteriyor (SIG6 önerisi).

## 8.4 Watchlist (12–24 ay)

| # | Mahalle | Isı | Güven | Gerekçe | Tetikleyici | Yanlışlanabilir öngörü |
|---:|---|:-:|:-:|---|---|---|
| **1** | **İncirköy** | 3/8 | %70 | ★askı×sermaye · **iki mega proje** · **2.043 bina 1980-öncesi (ilçe #1)** · yakınlık #2 · fiziksel değişim **sıfır** | T-A1/A2 · Çelikler imar başvurusu · **cins tashihi** · KAP kancası T1-T5 | **2027-07'ye kadar** imar/ruhsat izi veya kote firma bildirimi gelmezse → *arsa bankası* senaryosu güçlenir |
| **2** | **Tokatköy** | 4/8 | %70 | zinciri kapanmış tek mahalle · dönüşüm alanı **onaylı** · 30 ağır hasar · nüfus −%14 | 1071 tapu gövdesi · 2. faz ihalesi · Çamlıbahçe sınır düzenlemesi | **2027 ölçümünde** NDVI daha fazla düşmezse → 1. faz bitti, 2. faz başlamadı |
| **3** | **Riva** | 6/8 | %65 | ★**üç mega proje** (708 + 1.300 + 933) · Gençlik Kampı · fiyat **başa baş** · **uydu 4 turdur ölçülmüyor** | Kalyon lansmanı · **Ion ilk ruhsat izi** · Gençlik Kampı ihalesi · ilk "Emlak Konut" atıflı ilan | **F2:** 2026-27 ölçümünde yapılaşma yükselmeli — **ön koşul Riva'nın ölçülmesi.** Ion 2027 diyorsa **2027'ye kadar** ruhsat izi görünmeli |
| **4** | ★ **BEY-15 Paşabahçe/Çubuklu 942-947 + 246** *(parsel düzeyi — mahalle skorlarıyla aynı birimde değil)* | — | **%50** ⬇ | **Arsa statüsü + çift bitişik proje** (biri bitmiş, biri 2. etap satışta) **+ plan-askı hattı**; **fiziksel hareket henüz ölçülmedi** · geliştirici doğrulanmamış · 246 ada MESA'ya ait değil | ruhsat/askı ilanı · lansman izi · DIST bozulma · ilan akışı | **2027-07'ye kadar** ruhsat/askı izi **veya** yeni etap ilanı çıkmazsa → *"arsa statüsü ≠ proje"* olarak kapanır |
| **5** | **Çengeldere** | 1/8 | %55 | ⚠️ ısıda görünmüyor ama **meclis kanalında #1** (4 karar) | tahsislerin yapım ihalesine dönmesi | **2028'e kadar** hiçbiri ihaleye dönmezse → **askıda karar** sınıfı |
| **6** | **Çubuklu** | 4/8 | %75 | 19 ihale / 5 yıl kesintisiz · 5 ilan açık · radar doğruladı · MESA 🟢K=2 | kampüs dışına taşan ilk altyapı · ilk kamulaştırma | **2028'e kadar** çevrede ayrı altyapı ihalesi çıkmazsa → *"kurum parseline kapalı"* tezi doğrulanır |
| **7** | **Gümüşsuyu** | 3/8 | %70 | ★askı×sermaye · **NEF ~1.300 konut** · yakınlık **#1** · 4,19 Mr TL hastane | T-A1/A2 · NEF ilk ruhsat izi · hastane kabul ilanı | **NEF testi:** 1.300 konutluk proje **2027'ye kadar** hiçbir kanalda iz bırakmazsa → tek kanal olarak kalır |
| **8** | **Soğuksu** | 1/8 | %50 | ★askı×sermaye · Sur Yapı · İncirköy'e 1,0 km | T-A1/A2 · Sur Yapı ölçeği | **2027-07'ye kadar** ölçek bilgisi bile çıkmazsa → aktör listesinden İZLENEN'e düşer |

## 8.5 ⚠️ TERS SİNYALLER

**T1 · Ortaçeşme** — *"mevcut stok hareketli, yeni fiziksel yatırım yok."* Ayırt edici test: ilan akışı 3. turda da sürer ama radar/optik hâlâ sıfır gösterirse → **stok çıkışı**, gelişim değil.

**T2 · Yavuz Selim (−%35,5 reel) ve Göztepe (−%24,3 reel)** — **dip mi tuzak mı AYIRT EDİLEMEDİ.**

| Ayırt edici veri | DİP işareti | TUZAK işareti | Kimden |
|---|---|---|---|
| Fiyat serisinin 3. dönemi | düşüş durur | düşüş sürer | Analiz, 3. tur |
| **Stokta kalma süresi** | kısalır | uzar | Analiz — **n=1, ölçülemiyor** |
| Kompozisyon | aynı segment ucuzluyor | pahalı segment listeden çıkmış | Analiz FE *(ikisi de model dışı, n<8)* |
| Kamu/sermaye ayağı | herhangi biri ısınır | dört tur sıfır kalır | İhale + Borsa |
| **1/5000 askı kapsamı** | — | **ikisi de askı listesinde YOK** | İ66 |

> 🔴 **Bugün ayıramıyorum ve ayırıyormuş gibi yapmıyorum.** İkisinde de fiyat dışında **hiçbir ayak sıcak değil** — bu, *"ucuzladı çünkü fırsat"*tan çok *"ucuzladı çünkü hiçbir şey olmuyor"*a yakın duruyor. **Bir yargı değil, bir uyarıdır.**

---

# 9. OLAY DEFTERİ — 17 olay (v5)

**Dosya:** `~/tradia_basin/cikti/beykoz_olay_defteri.json` · kalıcı, sprintte güncellenir, **silinmez** — *"Tradia unutmaz"*

| ID | Olay | Mahalle | Durum | K |
|---|---|---|---|:-:|
| **BEY-04** | Köseler davası — 2. dalga (2 tutuklama + 4 adli kontrol) | ilçe | 🔴 **SICAK** · 3. dalga bekleniyor | 🟢2 |
| **BEY-03** | Riva Metruk Otel → **Gençlik Kampı** (Bel. + Gençlik-Spor Bakanlığı) | Riva | 🔴 SICAK ⚠️ Bakanlık teyidi yok | 🟢2 |
| **BEY-01** | Şişecam–Çelikler İncirköy arazi | İncirköy | 🔴 SICAK | 🟢3 |
| **BEY-08** | Kavacık Kavşağı imar planı + Medistate | Kavacık | 🔴 SICAK | 🟡1 |
| **★ BEY-15** | **Paşabahçe/Çubuklu 942-947 + 246 parsel kümesi** | Çiğdem/Çubuklu | **ADAY** · uydu negatif · kontrol **08-10** | 🟢2 |
| **BEY-16** | **Çubuklu riskli alan A + B Bölgesi** (5,6 ha · 18. madde askıda) | Çubuklu (iç) | işliyor · ⚠️ **basın kanalı YOK, resmî kanal takipte** | 🟡1 |
| **BEY-17** | **ÇŞB Riva Deresi 6 mahalle askısı** | Riva + 5 | ⚠️ **kanal aranıyor — hangi 6 mahalle bilinmiyor** | 🟡1 |
| **★ BEY-18** | **Torunlar GYO — eski Tekel arsası** (71.909 m², otel 2028) | **Paşabahçe** | işliyor · **takvimli** | 🟢2 |

> 🔧 **ID düzeltmesi (SIG6):** Torunlar kaydı önceki turda BEY-16 numarasıyla açılmıştı; **doğrusu BEY-18'dir.** BEY-16 = Çubuklu riskli alan (Basın sahipli), BEY-17 = ÇŞB Riva Deresi. **Defter bu numaralarla senkronlandı.**
> ⚠️ **BEY-16 ve BEY-17'ye "basın kanalı yok" damgası:** Basın S87, 29 URL denedi — `planaski.ibb.gov.tr` **JS-form arka uçlu** (ada+parsel input, doğrudan hasat imkânsız), CSB İstanbul **Beykoz filtre-URL'i çalışmıyor**, Beykoz Gazetesi'nin **arama işlevi yok**, Emlakkulisi robots.txt kapalı. **Bu ikisi resmî kanaldan takip edilecek, basından değil.**
| BEY-02 | Kalyon "Riva Country" | Riva | işliyor · **basın-ölçüm dışı** | 🟡1 |
| BEY-06 | Tokatköy dönüşüm + 1071 tapu | Tokatköy | işliyor · basın yansıma yok | 🟡1 |
| BEY-09/10/11/13 | Çengeldere kampüs zinciri · İshaklı tarım dönüşüm talebi · İncirköy 7.219 m² satış · 5 mahalle altyapı | çeşitli | işliyor | 🟡1 |
| BEY-07 | Şahinkaya hastanesi | Şahinkaya | ⚫ basın sessiz | — |
| BEY-05 | Çubuklu vapur iptali | Çubuklu | ⬜ **SÖNDÜ** (12 ay devam haberi yok) | — |
| BEY-12 | Su Sporları Festivali | sahil | rutin/yıllık | — |

> ⚠️ **Defter bir kanıt katmanı değil, izleme listesidir** — 17 olayın 9'u tek kanallı.

## 9.1 ★ BEY-15 — İLK İNSAN GÖZLEM SİNYALİ

**Kaynak:** Patron TKGM manuel incelemesi, 2026-07-27 · **Etiket: [GÖZLEM + TAPU · geliştirici DOĞRULANMAMIŞ]**

**Gözlem:** 942/1 (**14.063 m² Arsa**) · 942/2 · 943/2 (**23.835 m² Arsa**) · 944/2 · 945/1-2 · 946/1 · 947/1 + 246/5-15-16 — **Yeni Riva Yolu kuzeyi**.
**Komşuluk:** MESA Çubuklu 28 + Mesa Orman 2 (**bitmiş**) · **Maritza Vadi 2. Etap (satışta)**.

### 🔴 Uydu doğrulaması istendi ve NEGATİF geldi

| Ölçüm | Şubat | Haziran | Sonuç |
|---|---:|---:|---|
| NDVI | 0,30 | **0,48** | yeşerdi |
| Çıplak zemin | %26 | **%14** | azaldı |

> **TT-MAP BEY-15 mini-penceresi (~500 m, son 12 ay aylık):** *"mevsimsel; **kalıcı hafriyat basamağı YOK.** Şubat çıplaklığı Haziran'da geri yeşerdi = fenoloji."* S1-ACD %6,9 zayıf pozitif. Hafriyat ya **12 aydan önce** ya **pencere altında.**
> ⚠️ **Beykoz'da aynı tuzağın üçüncü yakalanışı** — Ortaçeşme %17,1 · MAP28'in NDVI>1 defekti · şimdi bu. **Tek tarihli çıplak zemin görüntüsü, mevsimsel salınımdan ayrılmadan inşaat sayılamaz.**
> ✅ **Kayıt bu yüzden yeniden yazıldı:** ❌ *"hafriyat başlamış"* → ✅ **"arsa statüsü + iki bitişik proje + askı hattı; fiziksel hareket henüz ölçülmedi."**

### ★ SIG kontrolü — piyasa tarafından bağımsız doğrulama buldum

| Kanal | Bulgu |
|---|---|
| **Patron / TKGM** | 10+ parsel, arsa nitelikli, hafriyat görünümü |
| **Analiz S48 (piyasa)** | **26 Maritza Vadi ilanı** — 23'ü **Çiğdem**, 2'si Acarlar. **8'i "2. ETAP"**, 25,3–53,6 M TL, ilan tarihleri **13–21 Temmuz 2026** |
| — ilan metni (aynen) | *"Tamamlanan 1. etapta site yaşamı başlamış olup... **projenin devamında planlanan 2. etap**..."* · *"**Planlanan Yeni Etaplarla Değerlenen** Bir Yaşam"* |
| **T126 + Sosyal S208** | MESA MESKEN Çubuklu 28 + Orman 2 · **19 gerçek sahibinden ilanı** + 9 doğrudan video |
| **İ66** | **Çiğdem + Çubuklu, 1/5000 2026 askı listesinde** → §6 ana bulgusuyla aynı hat |
| **Tic T128-EK** | 🔴 **Çubuklu 246 ada MESA'ya ait DEĞİL — kesin.** Başka tüzel de bulunamadı |

> ✅ **K=2 (tapu ↔ piyasa ilanı).** Bitmiş 1. etap, satıştaki 2. etap, ve geliştiricinin kendi metninde **"planlanan yeni etaplar"** — komşuluk gerçek.
> 🔴 **Ne demek DEĞİL:** *"942-947'de MESA/Maritza yapacak"* · *"inşaat başlayacak"* · *"burası değerlenecek"*. **Geliştirici DOĞRULANMADI**; **246 ada MESA'ya ait değil** (T128-EK); **uydu son 12 ayda hafriyat görmüyor**.
> ✅ **Ne demek:** *Bitmiş ve satıştaki iki etabın bitişiğinde, arsa nitelikli bir parsel kümesi var ve mahalle 1/5000 askısında. **Fiziksel hareket henüz ölçülmedi.***

### ★ Aramanın yan ürünü: 17. aktör

BEY-15 sorgusu 942-947'nin sahibini **bulamadı** — ama aynı sorgu **Torunlar GYO'nun eski Tekel Fabrikası arsasını** ortaya çıkardı:

| Alan | Değer |
|---|---|
| Tüzel | **Torunlar GYO (TRGYO)** |
| Konum | **Paşabahçe** — eski Tekel/Rakı Fabrikası arsası |
| Ölçek | **3 parsel · 71.909 m²** (54.870 + 16.212 + 827) · inşaat **62.859,56 m²** |
| Proje | **129 odalı otel + 5 blok yalı + 5 blok rezidans** (karma) |
| Takvim | 2025 %30 · 2026 %40 · 2027 %30 · **otel 2028 başı** |
| Kanıt | **KAP (TRGYO) + kurumsal PDF** · Emlakkulisi · NTV · Arkitera | 🟢 **K=2** |

> ★ **Paşabahçe merkez sahilinde artık iki mega proje var:** **Torunlar (Tekel)** + **Çelikler (İncirköy sınırı)**. Ve bu, §5.2'deki *"cins tashihi yok"* kalıbının **üçüncü parselini canlı bir projeye bağlıyor** — Tekel arsası yıkıldı, akıbeti belirsizdi; şimdi takvimli.
> ⚠️ **Paşabahçe'nin ısı skoru (2/8) bu girdiyle yeniden değerlendirilmeli — SIG6.**

### Tetikleyiciler · sonraki kontrol **2026-08-10**

| # | Tetik | Kanal |
|---|---|---|
| 1 | Parselde **ruhsat / askı ilanı** | ÇŞB İstanbul · Beykoz Bel. |
| 2 | **MESA veya başka tüzelin** KAP / sicil / lansman izi | Borsa + Tic |
| 3 | **Radar / DIST bozulma artışı** *(⏸️ OPERA token bekliyor)* | TT-MAP |
| 4 | **İlan akışının başlaması** (yeni etap ilanları) | Analiz |

> **Yanlışlanabilir öngörü:** *Hafriyat görünümü gerçek bir inşaat hazırlığıysa, **2027-07'ye kadar** ya ruhsat izi ya da yeni etap ilanı çıkmalı. Çıkmazsa gözlem **zemin hareketi ≠ proje** olarak kapanır.*

---

# 10. ÇİFT-KANIT MATRİSİ

## 🟢 GÜÇLÜ — dosyada (16 bulgu)

| # | Bulgu | K |
|---|---|:-:|
| G1 | Şişecam → Çelikler, **171,5 M USD**, İncirköy, 117.018,95 m² | **3** |
| G2 | **Ortaçeşme'de fiziksel inşaat yok** — %17,1 artefakt | **3** |
| G3 | Çubuklu kamu gelişimi **%100 eğitim** | **4** |
| G4 | Gümüşsuyu **%100 sağlık**, 4,19 Mr TL tek tesis | **3** |
| G5 | EKGYO Tokatköy teslim edildi, piyasada işlem görüyor | **2** |
| G6 | Tokatköy Beykoz'un tek ölçülebilir yeşil kaybı | **3** |
| G7 | Kamu yatırımı ↔ fiziksel büyüme **kopuk** | **3** |
| G8 | Beykoz yatay; tek dikey çekirdek **Kavacık** (121 yüksek binanın 87'si) | **4** |
| G9 | Yönetişim riski: başkan tutuklu, dava 2. dalgada | **2** |
| G10 | Riva gecikmesinin sebebi **dava** | **2** |
| G11 | Ortaçeşme'de **yeni arz akışı** (21/21 ilan Haz-Tem 2026) | **2** |
| G12 | İstanbul kirası **enflasyonu yenen tek gösterge** | **2** |
| G13 | İlan, değerlemenin **%17 altında** *(iki-popülasyon şerhiyle)* | **2** |
| G14 | %62 orman + koruma amaçlı imar rejimi | **3** |
| **G15** | ★ **Acarkent özel-orman yapılaşması** (2.240 bina ↔ uydu %7,3) | **3** |
| **G16** | ★ **Sanayi mirasında cins tashihi yok** — tapu 20+ yıl geride | **2** |
| **G17** | ★ **Torunlar GYO — eski Tekel arsası, Paşabahçe** · 71.909 m² · karma proje · takvimli, otel 2028 | **2** |
| ~~G18~~ | ~~BEY-15'te zemin hareketi~~ → 🔴 **GERİ ÇEKİLDİ** — TT-MAP mini-penceresi *"kalıcı hafriyat basamağı yok, mevsimsel"* dedi. Ayakta kalan: **arsa statüsü + iki bitişik proje + askı hattı** (K=2), fiziksel hareket **değil**. | — |

## 10.1 🔍 İZLEME MANİFESTİ — 3 katmanlı askı sistemi

Beykoz'da imar askısı **tek yerde yayımlanmıyor**; üç ayrı katman var ve üçü de ayrı izlenmeli:

| Katman | Kanal | Kapsam | Erişim durumu | Kadans |
|---|---|---|---|---|
| **1 · İLÇE** | Beykoz Belediyesi meclis + duyuru | meclis kararları, mahalle ölçekli | ✅ WebFetch çalışıyor (S83: 24 karar) | **haftalık** |
| **2 · İL / CSB** | `istanbul.csb.gov.tr` duyurular-imar planları | 1/1000 KAUİP askıları (Göztepe 2760/110 emsali) | ⚠️ **Beykoz filtre-URL çalışmıyor** — genel liste dönüyor, elle taranmalı | **haftalık** |
| **3 · İBB** | `planaski.ibb.gov.tr` | 1/5000 NİP askıları, ada+parsel sorgusu | 🔴 **JS-form arka uçlu** — form-post JSON gerekiyor, düz hasat imkânsız | **haftalık** |

> **Bu üç katman ayrılmazsa askı kaçar:** Boğaziçi 1/5000 askısı İBB'de, Göztepe 1/1000 askısı CSB'de, Tokatköy dönüşüm kararı ilçe meclisinde çıktı. **Hiçbiri diğerinde görünmedi.**
> **Tetik bağlantısı:** §6'daki **T-A1/T-A2** (askı sonucu) yalnız bu üç katmandan okunabilir.

## 🟡 İZLENEN — dosyada değil

Kalyon 1.300 · Ion 933 · NEF ~1.300 · Envoy 300 · Sur Yapı · PEKGY (Basın 0 hit) · deprem-dönüşüm tezi (tek İBB modeli) · Kavacık ofis hacmi (OSM proxy) · **1071 tapu** (S85: havuzda 0 hit) · MAP28'in "38 artış"ı (7/45 seri kirli) · Riva nüfus +%98 (TÜİK teyidi yok) · 2015 "233 ha 2B" (tek yayın) · İncirköy "imar çıkarsa 5 kat" (satıcı iddiası) · Çamlıbahçe uydu büyümesi (radar ölçmedi) · olay defterinin 9 tek-kanallı olayı.

---

# 11. BİLMEDİKLERİMİZ

## ★ EN KRİTİK ÜÇ

| # | Cevapsız | Durum |
|---|---|---|
| **1** | **İSKİ havza-koruma sınırı (parsel düzeyi)** — 17 mahallenin kaderi buna bağlı; **ters-değer tezi bu sınır olmadan test edilemez** | 🔴 açık |
| **2** | **Boğaziçi Kanunu (2960) parsel-düzeyi kuşak sınırı** | 🟡 **İ66'dan kuşak düzeyinde işlendi**; parsel düzeyi yok |
| **3** | **2017 → 2025 bina artışı (mahalle)** | ⛔ açık veri ilçe kırılımsız, Landsat başarısız → **yalnız Sentinel-2** |

## Diğer açıklar

**Ölçüm:** rakım/eğim DEM · hangi mahalle **asla** gelişemez · köprü etkisi izolasyonu (⛔) · değişim tipi (konut/villa/lojistik) · **Riva'nın uydu ölçümü (4 turdur yok)** · Çamlıbahçe radar/NDBI · **radar yalnız 3 mahallede koşuldu**
**Ekonomi/mülkiyet:** gerçekleşen işlem fiyatı (TKGM toplu veri public değil) · **Beykoz ilçe değerleme çıpası hiçbir resmi kaynakta yok** · Kavacık ofis hacmi (⛔) · tapu kamu-vakıf-özel dağılımı · askeri + KİT parsel devri · **stokta kalma süresi (fiyat deltası n=1)**
**Kurumsal:** 1071 tapu gövdesi (**5 turdur açık**) · 2024 yılı (Wayback bloklu) · meclis vaat-gerçekleşme oranı (pencere ≤6 ay) · **ilçe kıyaslaması — hiçbir turda yapılmadı**
**Kimlik:** 33 mahallede ad kökeni · 32 mahallede kamu tesisi · 16 mahallede POI=0
⏸️ **Erişim bekleyen:** OPERA DIST (Earthdata token) · **T128 TKGM 3 deste** · RG kamulaştırma + Milli Emlak (kanal hazır, Patron-manuel)

## 11.1 🆕 AÇIK BORÇLAR — adı konmuş, sahibi belli

| # | Borç | Durum | Çözüm yolu | Sahip |
|---|---|---|---|---|
| **B1** | **Google Trends 429** (rate limit) | 🔴 otomatik çekim engelli | **manuel CSV indirme** + **48 sn aralıklı tekrar** planı | Sosyal / Basın |
| **B2** | **TUCBS kurumsal API** | ⏸️ **karar bekliyor** — kurumsal protokol başvurusu gerekiyor | Patron stratejik kararı | TT-MAP |
| **B3** | **OPERA DIST sunucu** | ⏸️ Earthdata token geçersiz (7 karakter, JWT değil) | urs.earthdata.nasa.gov → Generate Token → `~/ttmap/.env` | Patron → TT-MAP |
| **B4** | **Tip bazlı emsal derinleştirme (S53)** | 🟡 84 GÜÇLÜ / 78 zayıf / 88 gizli | ek çekim turu → zayıf hücreleri n≥8'e taşı | Analiz |
| **B5** | `planaski.ibb.gov.tr` **form-post JSON** | 🔴 JS-form, düz hasat imkânsız | form-post denemesi (S88) | Basın |
| **B6** | **CSB İstanbul Beykoz filtre-URL'i** | 🔴 çalışmıyor | filtre URL keşfi veya elle tarama | Basın |
| **B7** | **NATO-POL güzergâh mahalleleri** | 🟡 tahmin | İBB refId 54022 plan notları görüntüleme | İhale |
| **B8** | **Çubuklu A Bölgesi** | 🔴 belirsiz | CSB/PARSİD askı tutanağı | İhale + Basın |
| **B9** | **UYAP karar metni** (Çavuşbaşı davası esas no) | ⛔ **public değil** | — *(yapısal, kapanmaz)* | — |

---

# 11.2 ★ ÇAPRAZ KONTROL — 9 FINAL raporunun altın cümleleri × Master

**Yöntem:** 9 CC'nin kapanış raporundaki §5 "10 altın cümle" bölümleri (90 cümle) master'a karşı okundu.

## 11.2-A 🔴 ÇELİŞKİLER — 4 adet

| # | Çelişki | Master | FINAL raporu | Karar |
|---|---|---|---|---|
| **Ç1** | **1071 tapunun kapsamı — üçüncü versiyon** | *"25 mahalle geneli"* (SIG4-R2, Üst Akıl düzeltmesi) | **Basın §5-6: "Tokatköy Kentsel Dönüşüm alanında hak sahiplerine, 29 Haziran 2026, CSB İstanbul İl Müdürlüğü"** — **URL'li** | 🟢 **Basın'ın FINAL'i kazanır** — tek kaynak künyeli ve resmî. Kapsam **6 mahalle → 25 mahalle → Tokatköy dönüşüm hak sahipleri.** **Beş turdur açık olan kayıt böylece kapandı** ve **Tokatköy'ün dönüşüm zincirine bağlandı.** |
| **Ç2** | **EKGYO Riva birim sayısı** | **708 konut + 68 dükkan** (KAP yapı ruhsatı, S59) | **Sosyal §5-5 hâlâ "3 etap, 1400 villa" cümlesini OLGU olarak taşıyor** | 🟢 **Master doğru.** KAP yapı ruhsatı > vlog. **Sosyal'in FINAL'i düzeltilmeli** — S59 tahkimi o rapora işlenmemiş. |
| **Ç3** | **Ion Kentsel GYO'nun statüsü** | ❓ *(SPV, GYO tipi)* | **Tic §5-6: "halka-açık İon Kentsel GYO"** + §5-7: **NEF ve İon 2026'da eşzamanlı halka arz sürecinde** | 🟢 **Tic kazanır** — master'ın "❓"si düzeltildi (aşağı). Ve bu, **Beykoz sermayesinin halka-kapalı SPV'den BIST-şeffaf sermayeye geçiş dalgası** anlamına geliyor. |
| **Ç4** | **Gümüşsuyu/Karlıtepe aktör sayısı** | NEF (tek) | **Tic §5-2: "Gümüşsuyu/Karlıtepe 3 mega: NEF + Akiş + HSN"** | 🟡 **Tic'in listesi geniş**, master eksik. Akiş (AKSGY) ve HSN master'da Gümüşsuyu'na bağlı değildi. **Ayak değiştirmez** (SERMAYE zaten ●) ama **yoğunluk okuması değişir.** |

## 11.2-B ✅ Master'a alınan güçlü cümleler

| Kaynak | Cümle | Nereye girdi |
|---|---|---|
| **Tic §5-5** | **Peker GYO'nun Beykoz portföyü 3 proje** (Tera Orman + Garden + Aden); **SözInv Danışmanlık 03.03.2026'da Tera Beykoz GYA'ya dönüştü, 341,2 M TL'ye devralındı** — SPV katmanının somut örneği | §4 sermaye — *"70 villa"* **eksikti**, portföy üç projeymiş |
| **Tic §5-8** | Torunlar/Tekel, *"cins tashihi yok"* örüntüsüne **dördüncü paraleli** ekler — **Kundura · İncirköy · Beykoz Tekel · Acarkent aynı şablon** | §5.2 — kalıp **3 parselden 4'e** çıktı, artık K=2'den güçlü |
| **TT-AI §5-6** | **"İki-Beykoz":** güney **hizmet devleti** (MEB + Sağlık), kuzey **koruma + güvenlik** (Orman + MSB) | §3.1 kopukluk örüntüsünün **kurumsal açıklaması** |
| **İhale §5-7** | **Kuzey 9 mahalle hem imar kilitli hem 2B kuşağı** — *"kilit ve anahtar aynı yerde: arz buradan çözülür"* | §5 arz kıtlığı — mekanizma-1'in (2B) **coğrafi adresi** |
| **İhale §5-9** | **RG ≠ EKAP:** kamulaştırma bültende yok, Resmî Gazete'de var — *"tek kaynağa güvenen yarısını kaçırır"* | §11.1-B7 · kanal disiplini |
| **Borsa §5-10** | Halka kapalı alıcılar (Çelikler, Yıldırım, TURGUT, Yılmaz) Beykoz sermayesinin büyük kısmını **KAP-görünmez** kılıyor — *"gördüğüm, buzdağının halka açık ucu"* | §4.1 — **kamu payı %23'ün kırılganlığının en iyi ifadesi** |
| **Analiz §5-6** | **F1'in "9 ölçülemez katsayı"sının 8/9'u açıldı** — yalnız aidat (n=163) zayıf | §11 — kapanan borç |
| **TT-MAP §5-4** | *"Radar inşaatı bulamadığında da konuşur: **yokluk kanıtı da kanıttır**"* (hakem doktrini) | §2 radar tanımı |
| **TT-MAP §5-6** | *"**NDVI 4,31 imkânsızdır**; fizik sınır kontrolü doğruluğun ilk kapısıdır"* | §12 yöntem |
| **Finans §5-4** | Krediye uygun konutlar **%26,1 daha pahalı**; kat mülkiyetli **173.333** ↔ hisseli **74.783** — makas **popülasyon farkı** | §7.2 iki-popülasyon şerhi |

> ★ **Sonuç:** 90 altın cümlenin **4'ü master'la çelişti, 10'u master'a eklendi, kalanı zaten örtüşüyordu.** Çelişkilerin **üçünde FINAL raporu kazandı, birinde master** — ve dördü de **kaynağın hiyerarşisiyle** çözüldü (birincil > türev), tartışmayla değil.

---

# 12. YÖNTEM VE ÖZ-DENETİM

## 12.1 ★ "Etiket ≠ kapsam" — dosyanın güven damgası

Bu tur boyunca **aynı hata sınıfı altı kez** çıktı. Hepsi **kendi sistemimiz içinde** yakalandı ve hepsi kayıtta:

| # | Vaka | Kim buldu | Ne oldu |
|---|---|---|---|
| 1 | Basın'ın 1 numaralı mahallesi *"Cumhuriyet"* | **Signals SIG1** | 5 haberin 4'ü **"Cumhuriyet Başsavcılığı"** yanlış pozitifi |
| 2 | İhale'de `merkez` / `fatih` / `emniyet` | **İhale İ61** | *"Veri **Merkezi**"* · başka ilçe okulu · İller Bankası **Ankara** adresi |
| 3 | Basın S82: *"Çelikler Beykoz'da mı?"* | **Signals SIG3** | Yanlış tüzel kişilik arandı — **Holding ≠ Taahhüt A.Ş.**; cevap aynı gün Borsa S57'deydi |
| 4 | **1071 tapu "6 mahalle"** | **Üst Akıl** | Haberin **mahalle etiketi**, gövdesinin kapsamı sanılmıştı → doğrusu **25 mahalle** |
| 5 | İhale'de **idare adresi tuzağı** | **İhale İ65** | Beykoz Belediyesi HQ (Gümüşsuyu) iş yeri sanılırsa **sistematik yanlış pozitif** |
| 6 | **T127: "EKGYO Ortaçeşme 776"** | **Borsa S61** | Gerçek olay Tokatköy 1. Etap (TURGUT, 27.09.2022, **789,7 M TL+KDV**); üzerine **üç yanlış etiket** yapışmış — mahalle "Ortaçeşme", adet "776" (Riva'dan sızmış), bedel 2,1× sapmış |

> ★ **Bu bir zayıflık listesi değil, dosyanın güven damgasıdır.** Altı vakanın **beşini sistem kendi içinde buldu**; hiçbiri dışarıdan gelmedi. **Doğru olay + yanlış etiket** artık tekil hata değil, **tanımlı bir hata sınıfıdır** ve SIG6'da ayrı kural olacak.
> **İsim çakışması tuzağı:** EKGYO'nun *"Ortaçeşme"si* aslında **Maltepe'nin Ortaçeşme mahallesidir** — Beykoz'un Ortaçeşme'si değil. Adaş mahalle adları ilçe taramasında ayrı bir yanlış-pozitif kaynağıdır.

## 12.1-B 🔒 YAPISAL TAVAN — mahalle bağlama %51,4'te durdu

**CC-İhale, maksimal sözlükle (45 mahalle + eski köy adları + "köyü/mah." varyantları + tesis tablosu) yeniden taradı ve yalnız **+2** kayıt bağlayabildi.**

| Aşama | Mahalle-bağlı | Not |
|---|:-:|---|
| İ59 | 29 / 144 | ilk sözlük |
| İ61 | 72 / 144 | `Türk- Alman` parse düzeltmesi |
| **İ70** | **74 / 144 = %51,4** | **maksimal sözlük → +2. TAVAN.** |

**Bağlanamayan 70 kaydın dökümü:**

| Sınıf | Adet | Neden bağlanamaz |
|---|:-:|---|
| Meşru ilçe-geneli | 36 | *"Muhtelif Cadde/Sokak" · "İlçe Sınırları" · "1./2. Bölge"* — **iş zaten ilçe ölçekli** |
| Çok-ilçe MEM grubu | 28 | başka ilçelerin okul listeleri (Ataşehir/Avcılar/Bahçelievler) |
| **İdare-adresi tuzağı, reddedildi** | **6** | İller Bankası *(Ankara)* · İSKİ Hizmet Alanları · İGDAŞ — yer adı **yalnız idarenin adresinde** |

> 🔒 **`%51,4 = YAPISAL TAVAN` damgası.** Bu bir **sözlük açığı değil**; kaydın kendisi ilçe ölçekli veya çok ilçeli. **Daha zengin sözlük bunu açmaz** — İ70 maksimal denemeyle kanıtladı.
> ★ **Yöntem sonucu:** *Beykoz kamu ihalelerinin yarısı mahalle düzeyinde analiz edilemez ve bu kalıcıdır.* KAMU ayağının kapsamı **%51,4 ile sınırlıdır**; bir mahallede kamu ayağının sönük olması, o mahallede kamu işi olmadığını değil, **kaydın mahalleye bağlanamadığını** da anlatabilir.
> ✅ **6 idare-adresi reddi, İ65'in tuzak dersinin (#37) çalıştığının kanıtı** — İ61'de bunlar yanlış-pozitifti.

## 12.2 Şablon — diğer ilçelere taşınacak 20 kural

**SIG1-2:** ham JSON oku (rapor değil) · eşiği tablodan **önce** yaz · sayaç ≠ ham kayıt · jenerik ad guard'ı · **marka adı ≠ mahalle adı** (kanon kadastral olanı alır) · zaman penceresini hizala · aynı dosyanın iki kez okunması **çift kanıt değildir** · **piyasa ilanı metni bir doğrulama kanalıdır** · yer-tutucu sıfır ≠ ölçülmüş sıfır
**SIG3:** bir CC'nin *"doğrulanamadı"*sı başkasının cevabı olabilir · tüzel kişilik adı **tam** yazılır · **fizik aralık kontrolü zorunlu** · amaç etiketi bakım ayıklanmış ihaleden · **körlük de bulgudur** · kanal keşfi ayrı sprint tipidir
**SIG4-5:** ölçüm aracına **ROL etiketi** (detektör/hakem/bağlam) · **oranın paydası bilinen tüm aktörleri içermelidir** · dönem etiketi zorunlu + **küçük örneklemde yıllıklandırma yasak** · iki popülasyonun oranı **düzeltme katsayısı değildir** · **olay defteri kalıcıdır** (silinmez, işaret değişir) · **negatif sonuç kanıta çevrilir**

## 12.3 İlçe turu — sıra

```
0. ÖN KOŞUL   mahalle kanonu tek kaynaktan · her CC kanonik setini ilan eder
1. KANAL KEŞFİ hangi kapı ne sunar + ToS
2. SORU SETİ  ilçenin 2-3 büyük olayı önceden yazılır
3. KESİT DONDUR fiyat kesiti sürümlenir, boş olmadığı doğrulanır
4-5. TUR-1 / TUR-2  keşif → hedefli ikinci geçiş
6. ÇAPRAZ TUR sayaçlar yan yana + fizik aralık kontrolü
7. DÜZELTME   kaynak CC kendi defektini işler
8. AMAÇ TURU  uydu × kamu-amaç × sermaye × firma
9. ÇİFT-KANIT GÜÇLÜ / İZLENEN ayrımı
10. MASTER DOSYA yalnız GÜÇLÜ + risk aynı netlikte
11. DENETİM   üreten ≠ denetleyen
```

---

# 13. V16 — KENDİ İŞİME İTİRAZ

1. **✅ Kural 4 — altı turdan sonra KARŞILANDI (27.07.2026).** §2 ısı tablosu, §8.4 watchlist ve §1 özet benim ürettiğim yorumlardır ve **beş tur boyunca denetleyensizdi**; bu belge **Üst Akıl süzgecinden geçti ve r1 yamasıyla onaylandı.** ⚠️ *Dürüst sınır: denetim **bu belgeye** yapıldı — SIG1-SIG5'in ara çıktıları ve `ic_watchlist.md` hâlâ denetlenmemiş durumda.*
2. **Isı eşikleri benim kararım.** KAMU'da "≥2 gelişim ve ≥50 M TL" seçtim; 100 M seçseydim Kavacık ve Riva düşerdi. Kural kodda açıkta — **tartışılabilir olsun diye.**
3. **★ ASKI × SERMAYE'yi ana bulgu yaptım — en riskli kararım.** Eşzamanlılık gerçek (iki ayrı CC), **ama nedensellik yok ve sıralama üç mahallede ölçülmedi.** Okuyucu bunu kolayca *"sermaye içeriden biliyor"* diye okuyabilir; üç yasak cümle koydum ama **bu okumayı tamamen engelleyemem.**
4. **Sermaye payı dört kez düştü** (%95→%50→%36→%23), her seferinde paydaya yeni aktör girdiği için. **Payda hâlâ tamamlanmamış olabilir.**
5. **§5'in tapu kayıtları sistemde YOK** — Üst Akıl bildirimi; dört dizin tarandı, karşılık bulunamadı. **İkinci kanalı ben ekledim** (bina sayımı × uydu oranı anomalisi); o olmasaydı §5 dosyaya girmezdi. **T128 beklemede.**
6. **Acarkent'te kat irtifakının tarihi ölçülmedi.** Bina yaşı dağılımı (%82,4'ü 1980-2000) *"mevcut sitenin hukuki altyapısı"* okumasını destekliyor. *"Kat irtifakı var, demek ki yapılaşma gelecek"* cümlesini **kurmadım.**
7. **"Cins tashihi yok" kalıbını 1 teyitli + 2 çıkarımla genelledim.** Kalıp mantıklı ama **üç parselle genelleme yapıyorum.**
8. **BEY-15'te piyasa doğrulaması buldum ama geliştirici doğrulanmadı.** Maritza'nın "planlanan yeni etaplar" metni gerçek; **o etapların 942-947 parsellerinde olacağına dair hiçbir kanıt yok.** İkisini birleştiren benim ve bu bir **çıkarımdır.**
9. **Ortaçeşme'yi 2 ayaktan 1'e düşürdüm** — üç imzaya dayanıyor. Ama SIG1'de Ortaçeşme'yi *"ilçenin en hızlı büyüyeni"* diye yazan **bendim.** Sistem çalıştı; ilk okumam yanlıştı.
10. **F4/F5'in TCMB rakamlarını bağımsız doğrulamadım** — tek kanal + yöntem doğrulaması.
11. **Radar yalnız 3 mahallede koşuldu.** Kalan 42 mahalle için optik bulgular **tahkim edilmemiş** — Riva dahil.
12. **"Öndelik" metriği tek sayıya indirgenmemeli** — karşılaştırma noktası bir seçimdir; başka bitiş noktası çok daha kısa süreler verir.
13. **KVKK (#31) — Patron kararıyla çözüldü (27.07.2026):** kamu görevlisi/siyasetçi/kurumsal lider isimleri geçiyor. **Arşiv public'tir (Patron kararı); dış-sunum maskelemesi AYRI bir karardır ve verilmemiştir.** Önceki turlarda bu belgeyi *"iç kullanım"* diye etiketlemiştim — **etiket düzeltildi**, ama uyarının kendisi geçerliliğini koruyor: sunum paketine çıkarken maskeleme kararı ayrıca alınmalı.
14. **İlçe kıyaslaması hiçbir turda yapılmadı.** *"Beykoz diğer ilçelerden iyidir"* cümlesi **bu dosyada yoktur ve kurulamaz.**
15. **🔴 BEY-15'te bir tur önceki kendi çıkarımımı geri çektim.** *"Bitişikte zemin hareketi görünüyor"* diye yazmıştım; **TT-MAP mini-penceresi bunu çürüttü** — Şubat'taki çıplaklık Haziran'da geri yeşermiş, **mevsimsel.** Bu, Beykoz'da fenoloji tuzağına düşen **üçüncü bulgu** (Ortaçeşme %17,1 · MAP28 NDVI>1 · şimdi bu) — ve **ikisinde de düşen benim yorumumdu**, ölçüm değil. **Uydu görüntüsünden göz kararıyla "hafriyat" demek, bu dosyanın tekrar eden zaafıdır.**
16. **246 ada MESA'ya ait değil** (T128-EK) → *"MESA'nın sıradaki etabı"* çıkarımım **daraldı**: bitişiklik gerçek, **sahiplik bağı yok.** Geri çekmedim, sınırladım.
17. **Paşabahçe'nin ısı skoru (2/8) artık eksik.** Torunlar/Tekel bu turda girdi ve tabloya yansımadı; **skor yeniden hesaplanmalı (SIG6).** Bugünkü 2/8, Paşabahçe'yi **olduğundan soğuk gösteriyor.**
18. **🔒 Ayrı bir iç izleme katmanı var** (`ic_watchlist.md`, iç kullanım) ve bu dosyaya **bilerek yansıtılmadı.** Oradaki kayıtlar burada yalnız **sinyal diliyle** geçer; **sinyal skoruna, güven yüzdesine ve watchlist sırasına dokunulmadı.** Kuralın uygulaması bende olduğu için **denetimi Üst Akıl'a bırakıyorum** — bir sonraki turda o kayıtları farkında olmadan yukarı çekersem kural işlememiş olur.

---

## KARAR CÜMLESİ

> **Bu dosya nerede, ne amaçla bir şeylerin olduğunu gösterir.** Beykoz'un 45 mahallesinden 21'inde ölçülebilir hiçbir şey yok; beş yerde sinyal toplanıyor ve her biri farklı amaçla gelişiyor. Sermaye 2026'da yeniden hareketlendi ve **imar planının askıya çıktığı dört mahallede aynı anda pozisyon aldı.** Kısıt kalıcı, gecikme uzun, yönetişim riski açık, ve fiyatın gerçekleşen kenarı hâlâ ölçülemiyor.
>
> **Ne edeceğini söylemiyorum — çünkü ölçmedik. Karar Patron'un.**

---

**Kaynaklar (#21-B):** CC-İhale **İ59-69** · CC-Borsa **S54-61** · CC-TT-MAP **MAP24-33** · CC-Basın **S78-87** · CC-Sosyal **S201-209EK** · CC-TT-AI **TTA93-100** · CC-Analiz **S46-53** · CC-Tic **T1-128EK** · CC-Finans **F1-F6** · CC-Signals **SIG1-6**
**Görseller:** `cikti/beykoz_isi_haritasi.png` · `kod/isi_haritasi_SIG3.py` · `kod/isi_gorseli.py` · `kod/sig5_backtest_watchlist.py`
**Üreten:** CC-Signals · **Süzgeç:** ✅ Üst Akıl · **Denetleyen:** **ÜST AKIL ✓ (27.07.2026)** — onay + r1 yaması ile
**$0 · A04 · V16 · #18 · #21-A/B/C · #31 · #34 · SİLME-YOK**
