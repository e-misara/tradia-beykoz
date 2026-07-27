# CC-Signals · SIG1 — BEYKOZ ISI HARİTASI

**Sprint:** SIG1 (kuruluş) · **Tarih:** 2026-07-26 · **Üreten:** CC-Signals (3. katman — İSTİHBARAT)
**Girdi:** 7 CC · rapor **+ ham çıktı dosyaları** (JSON/JSONL) — F2'den farkı: ham havuza inildi
**Disiplin:** $0 · A04 · V16 · #21-B (her sayıda kaynak dosya) · #34 kaynak-karıştırma yasağı · #18 üçlü-anahtar · #31 KVKK · SİLME-YOK
**Denetleyen:** ☐ boş — CC-Signals kendi çıktısını onaylayamaz

---

## 0. BU KATMAN NE YAPAR, NE YAPMAZ

| Yapar | Yapmaz |
|---|---|
| Ayakları **üst üste koyar**, kesişimi gösterir | Fiyat söylemez, "şu kadar eder" demez |
| "Burada bir şey oluyor" der | "Al / satma" demez |
| CC'lerin sayılarını **birbirine karşı** kontrol eder | Bir CC'nin ölçümünü yeniden ölçmez |
| Kesişimi gösterir, **kararı Patron'a bırakır** | Karar vermez |

> **Rol notu (F2-G3/D9 açığı):** F2 kendi tespitini yazdı — *"hiçbir CC bir diğerinin sayısını kontrol etmedi… çapraz kontrol katmanı sistemde yok."* SIG1 o katmandır. Bu yüzden §G4 bu raporun **en ağır bölümüdür** ve içinde **F2'nin kendi sonuçlarına yapılan 4 itiraz** vardır.

**Güven bantları (A04 — kalibre edilmiş yargı, olasılık hesabı değil):**

| Bant | Anlamı |
|---|---|
| %85–95 | 2+ bağımsız CC · tarihli birincil kayıt |
| %60–80 | Tek CC · birincil ölçüm · bilinen sistematik sınır |
| %35–55 | Tek CC · türev/proxy · karışım uyarısı var |
| <%35 | Hipotez / algı — sayı olarak kullanılamaz |

---

# G1 — ISI HARİTASI (45 mahalle × 7 ayak)

## 1.1 Sıcaklık kuralı — önce kural, sonra tablo

Bir ayağın "sıcak" sayılması **mekanik kurala** bağlandı; gözle seçim yapılmadı. Kurallar kodda sabittir (`kod/isi_haritasi_SIG1.py`).

| Ayak | CC | "Sıcak" eşiği | Kaynak dosya (#21-B) |
|---|---|---|---|
| **KAMU** | İhale | ≥3 ihale **veya** ≥100 M TL | `cc_ihale/cikti/vaka_beykoz_ihale_I60.json` → `mahalle_cozulmus_kayitlar[].mahalle_coz` |
| **SERMAYE** | Borsa | ≥1 KAP ODA bildirimi | `vaka_beykoz_cc_borsa.md` §1 (4 firma / 20 bildirim) |
| **UYDU** | TT-MAP | net ≥ **+2,0 puan** **ve** güven ≥ orta **ve** ölçüm gerçek (§G4-Ç1) | `tradia_ttmap/02_NOKTA/vaka_beykoz_ttmap_MAP24.json` |
| **HABER** | Basın | ≥2 haber (**yanlış-pozitif temizliğinden sonra**, §G4-Ç3) | `tradia_basin/cikti/vaka_beykoz_basin_S79.json` |
| **SÖYLEM** | Sosyal | ≥2 atıf | `vaka_beykoz_cc-sosyal.md` FTS5 sayaçları |
| **FİYAT** | Analiz | **iki bağımsız** kaynakta n≥5 ölçülebilir ilan | S46 CSV tablosu **+** `tradia_analiz/data/uzanti_katmani_beykoz_S47.jsonl` |
| **VERİ** | TT-AI | evren damgası CONFIRMED | `vaka_beykoz_cc_tt_ai.md` §2 |

> ⚠️ **VERİ ayağı bir piyasa sinyali değildir** — TT-AI'nın kendi uyarısı: *"kapsama ≠ rakam"*. Tabloda ayrı sütunda duruyor ama "sıcak mahalle" yorumunda **tek başına delil sayılmadı** (§1.3).

## 1.2 ★ ISI TABLOSU — kaç ayak aynı anda sıcak?

**● = sıcak · · = soğuk/ölçülemez**

| Mahalle | Ayak | KAMU | SERM | UYDU | HABER | SÖYLEM | FİYAT | VERİ |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **Riva** | **5** | ● | ● | · | ● | ● | ● | · |
| **Kavacık** | **4** | ● | ● | · | · | ● | ● | · |
| **Paşabahçe** | **4** | ● | · | · | ● | ● | · | ● |
| Yalıköy | 2 | ● | · | ● | · | · | · | · |
| Ortaçeşme | 2 | · | · | ● | · | · | · | ● |
| Tokatköy | 2 | · | ● | · | · | · | · | ● |
| Gümüşsuyu | 2 | ● | · | · | · | · | · | ● |
| Çubuklu | 2 | ● | · | · | · | · | · | ● |
| Kanlıca | 2 | ● | · | · | · | · | · | ● |
| Polonezköy | 2 | ● | · | · | · | · | · | ● |
| Anadolu Kavağı | 2 | ● | · | · | · | · | · | ● |
| Acarlar | 1 | · | · | · | · | · | ● | · |
| Göztepe | 1 | · | · | · | · | · | ● | · |
| Çamlıbahçe | 1 | · | · | ● | · | · | · | · |
| Merkez | 1 | · | · | · | ● | · | · | · |
| Akbaba · Alibahadır · Anadolu Hisarı · Baklacı · Çiğdem · Göksu · İshaklı · Kılıçlı · Mahmutşevketpaşa · Soğuksu | 1 | · | · | · | · | · | · | ● |
| **20 mahalle** *(Anadolufeneri, Bozhane, Çavuşbaşı Çiftlik, Çengeldere, Cumhuriyetköy, Dereseki, Elmalı, Fatih, Göllü, Görele, İncirköy, Kaynarca, Öğümce, Örnekköy, Paşamandıra, Poyrazköy, Rüzgarlıbahçe, Yavuz Selim, Yeni Mahalle, Zerzavatçı)* | **0** | · | · | · | · | · | · | · |

### Dağılım — asıl bulgu burada

| Kaç ayak sıcak | Mahalle sayısı | Pay |
|---|---:|---:|
| 5 ayak | 1 | %2,2 |
| 4 ayak | 2 | %4,4 |
| 2 ayak | 8 | %17,8 |
| 1 ayak | 14 | %31,1 |
| **0 ayak** | **20** | **%44,4** |

> **Beykoz'un 45 mahallesinin 20'sinde (%44) hiçbir ayak sıcak değil; 3 mahallede (%6,7) dört veya daha fazla ayak aynı anda sıcak.** Sinyal ilçeye yayılmıyor — **üç noktada toplanıyor.** *(Güven %75 — kural mekanik, girdiler 7 CC'nin kendi ölçümleri; eşikler SIG1 kararı, farklı eşik farklı sıralama verebilir.)*

## 1.3 Üç sıcak nokta — ayak ayak ne olduğu

### ★ RİVA — 5/7 ayak, üstelik uydu ayağı **yokken**

| Ayak | Ne diyor | Kaynak |
|---|---|---|
| SERMAYE | **11 KAP bildirimi** (AGYO arsa 2016-11 → EKGYO ihale/sözleşme 2017 → STG 2022 → **ikmal inşaat + yer teslimi 2025-04**) | Borsa, KAP ODA |
| KAMU | 2 ihale / **120,9 M TL** (2023, kıyı-deniz + 1 sınıflandırılmamış) | İ60 `mahalle_coz` |
| HABER | 3 haber, **hepsi son 2 hafta**: Riva Altınpark (07-13) · Metruk Otel yıkımı (07-24) · Milli Takım oteli yıkıldı (07-25) | S79 |
| SÖYLEM | 2 video — "Düşler Vadisi" tanıtımı + arsa pazarlığı | S202 |
| FİYAT | CSV n=109 → **160.000 TL/m²** · uzantı n=6 → **147.190 TL/m²** (iki bağımsız kaynak, %8 fark) | S46 + S47 |
| UYDU | ⬜ **ölçüm yok** — TT-MAP Riva'yı "kırsal-N/A" sınıfında tutuyor | MAP24 |
| VERİ | KISMI_THIN (2. bağımsız eksen yok) | TT-AI |

> **Riva, uydu ayağı yapısal olarak kör olduğu halde 5 ayakla ilçenin en sıcak mahallesi.** Kör olan ayak, kurumsal inşaatın tam olarak başladığı yer *(F2-D7 bunu "boşluk" diye işaretlemişti; SIG1 doğruluyor ve şunu ekliyor: **bu boşluk sıralamayı düşürüyor, yükseltmiyor** — Riva ölçülseydi 6 ayak olabilirdi).*

### ★ KAVACIK — 4/7 ayak, tek gerçek **derinlik**

| Ayak | Ne diyor | Kaynak |
|---|---|---|
| FİYAT | Beykoz'un **en derin hücresi**: 14 günde **76 satılık ilan** = ilçe akışının **%24,5**'i; ticari kira n=33 · 442 TL/m²/ay | S47 jsonl + S46 |
| KAMU | 7 ihale / 230,4 M TL (2022-2026 yayılı; okul, orman parkı, **532 Ada 481 Parsel hafriyat-iksa**) | İ60 |
| SERMAYE | 1 bildirim (ANELE showroom, 2016-05) | Borsa |
| SÖYLEM | 2 atıf ("FSM/YSS bağlantı avantajı") | S202 |
| UYDU | −5,0 puan (2016 %55,5 → 2025 %50,5), **güven yüksek** → fiziksel büyüme yok | MAP24 |
| HABER | **0** haber | S79 |

> **Kavacık'ta sıcak olan büyüme değil, işlem hacmi.** Uydu "büyümüyor" diyor (güven yüksek), ilan akışı "en kalabalık burası" diyor. İkisi çelişmiyor: **doymuş ama likit.**

### ★ PAŞABAHÇE — 4/7 ayak, ama **fiyat ayağı kapalı**

| Ayak | Ne diyor | Kaynak |
|---|---|---|
| HABER | 2 haber — ikisi de **tapu dağıtımı** (07-13) | S79 |
| SÖYLEM | 3 atıf — ilçenin en yüksek söylem yoğunluğu (fabrika/rant anlatısı) | S202 |
| KAMU | 1 ihale / 152,7 M TL (İSKİ atıksu, ilçe-listesi kaydı) | İ60 |
| VERİ | CONFIRMED (betimsel+bina+haber) | TT-AI |
| FİYAT | **bant üretilemiyor** — Paşabahçe Mh. CSV 14 kayıt / m² dolu **1**; uzantı 3 kayıt | S46 + S47 |
| UYDU | +3,4 puan ama **güven DÜŞÜK** (4 dolu yıl) | MAP24 |

> **Paşabahçe = en çok konuşulan, en az ölçülen mahalle.** Söylem ve haber sıcak, fiyat ve uydu ayağı boş. İstihbarat dilinde bu "fırsat" değil **belirsizlik** demektir — ve Şişecam dosyası hâlâ açık (F2-G2).

## 1.4 Fiyat ayağı — SIG1'in kendi hesabı (uzantı katmanı, 2026-07)

**Kaynak (#21-B):** `tradia_analiz/data/uzanti_katmani_beykoz_S47.jsonl` (310 kayıt) · SIG1 hesabı: `fiyat_tl ÷ m²`, detay kayıtta `m² (Brüt)`, liste kayıtta `nitelikler_ham[0]` (20–3000 m² aralığı filtresi) · **medyan**

| Mahalle | n | **Medyan TL/m²** | Min | Max | S46 CSV (Şub–May) | Fark |
|---|---:|---:|---:|---:|---:|---:|
| Acarlar | 62 | **190.111** | 32.353 | 414.815 | 210.000 (n=146) | **−%9,5** |
| Anadolu Hisarı | 13 | 158.824 | 124.771 | 333.333 | — | — |
| Çiğdem | 21 | 152.174 | 56.250 | 239.831 | — | — |
| **Riva** | 6 | **147.190** | 97.826 | 233.333 | 160.000 (n=109) | **−%8,0** |
| Soğuksu | 19 | 140.127 | 51.778 | 250.000 | — | — |
| Çubuklu | 14 | 136.654 | 37.705 | 481.651 | 223.077 (n=4) | −%38,7 |
| Kanlıca | 16 | 124.019 | 69.524 | 289.474 | 122.500 (n=4) | +%1,2 |
| Göztepe | 21 | 101.389 | 46.667 | 329.167 | 113.889 (n=27) | −%11,0 |
| Tokatköy | 24 | 100.569 | 36.000 | 747.727 | — | — |
| **Kavacık** | **76** | **90.995** | 39.941 | 1.317.647 | 84.722 (n=6) | +%7,4 |
| Paşabahçe | 3 | 89.583 | 55.825 | 131.206 | — | — |
| İncirköy | 4 | 85.399 | 41.667 | 477.273 | — | — |
| Yalıköy | 10 | 72.778 | 48.235 | 138.889 | — | — |
| Merkez | 3 | 68.824 | 67.000 | 88.000 | — | — |
| Rüzgarlıbahçe | 1 | 67.368 | — | — | — | — |
| Çamlıbahçe | 1 | 65.000 | — | — | — | — |
| Akbaba | 5 | 62.500 | 28.472 | 340.909 | — | — |
| Yavuz Selim | 2 | 56.839 | 54.983 | 58.696 | 106.667 (n=24) | −%46,7 |
| **Ortaçeşme** | 4 | **50.114** | 42.308 | 62.450 | **0 kayıt** | — |
| Yeni Mahalle | 1 | 37.765 | — | — | — | — |
| Gümüşsuyu | 1 | 34.158 | — | — | — | — |

> ⚠️ **#34 uyarısı:** Son iki sütun **kıyas değil, hizalamadır**. İki set **farklı zaman penceresi** ölçüyor (CSV 2026-02→05 · uzantı 2026-07-12→25) ve farklı kategori kapsıyor (CSV karma · uzantı **yalnız "Satılık Daire"**, 176/176 detay kaydının hepsi). Tek tabloda ortalaması **alınamaz**.
> **Bunlar ilan (istenen) fiyatlarıdır = bandın üst kenarı.** Tapu/gerçekleşen fiyat hiçbir CC'de yok; şişirme payı bu turda da **ölçülemedi**.

---

# G2 — GÜNLÜK / ZAMANSAL YOĞUNLUK (momentum ayağı)

## 2.1 Hangi ayak zamana yayılabiliyor?

| Ayak | Zaman çözünürlüğü | Aralık | Momentum'a girer mi |
|---|---|---|---|
| SERMAYE (KAP) | **gün** | 2016-05 → 2025-04 | ✅ tek uzun seri |
| KAMU (EKAP) | **yıl** (İKN yılı) | 2021 → 2026 | ✅ yıllık |
| HABER (Basın) | gün — **6 kaydın 4'ü bozuk** (§G4-Ç8) | 2025-07-27 → 2026-07-25 | ⚠️ kısmi |
| FİYAT (uzantı) | **gün** | 2026-07-12 → 07-25 (14 gün) | ⚠️ tek pencere, trend yok |
| UYDU (TT-MAP) | yıl, 6 nokta | 2016 → 2025 | ✅ ama 14/45 mahallede |
| SÖYLEM (Sosyal) | **yok** | — | ❌ Sosyal'in kendi kararı: *"Zaman-serisi: Yapılamaz"* |
| VERİ (TT-AI) | yok (durum damgası) | — | ❌ |

## 2.2 Uzun seri — sermaye ve kamu parası

| Yıl | Sermaye (KAP bildirimi) | Kamu ihalesi (adet / bedel) | Not |
|---|---:|---|---|
| 2016 | 2 (AGYO Riva arsa · ANELE Kavacık) | — | **giriş** |
| **2017** | **7** ← tepe-1 | — | EKGYO Riva ihale dalgası + sözleşme + yer teslimi |
| 2018–19 | 2 (AKSGY imar) | — | imar sürüncemesi |
| 2021 | 0 | 5 / 49,8 M TL | |
| 2022 | **7** ← tepe-2 | 35 / 788 M TL | EKGYO Tokatköy 1.+2. Etap; Riva STG |
| 2023 | 0 | 35 / 1,16 Mr TL | |
| **2024** | 0 | 20 / **5,33 Mr TL** | zirve **tek kaleme** bağlı: 500 Yataklı Hastane **4,185 Mr TL** → onsuz ≈1,15 Mr |
| **2025** | 2 | 28 / 1,83 Mr TL | **Riva 1. Etap ikmal inşaat + yer teslimi (04-11 / 04-18)** |
| 2026 | 0 | 21 / 352 M TL | yıl sürüyor |

**Okuma (güven %80, kaynak Borsa+İhale):** Sermayenin iki tepesi var (2017, 2022), kamu parasının bir tepesi (2024) ve o tepe **tek tesis**. **Sermaye tepesi ile kamu tepesi aynı yılda değil** — Beykoz'da kamu ve özel sermaye **eşzamanlı hareket etmiyor**.

## 2.3 ★ 2026 Temmuz — son 3 haftanın kümesi

Beykoz'da **19 gün içinde** birbirinden bağımsız 5 olay:

| Tarih | Olay | Mahalle | Kaynak (#21-B) |
|---|---|---|---|
| **2026-07-06** | *"Beykoz'da 1071 hak sahibi tapusuna kavuştu"* | (ilçe) | emlakkulisi · S79 `kayitlar` |
| **2026-07-13** | *"Bakan Kurum Beykoz'da Tapu Dağıttı"* + *"Tarihi Gün: 1071 Hak Sahibi"* | **Gümüşsuyu · Paşabahçe · Polonezköy · Tokatköy · Anadolu Hisarı · Soğuksu** | beykozgazetesi + Beykoz Bel. |
| **2026-07-13** | Riva Altınpark satış duyurusu | Riva | Emlak Kulisi |
| **2026-07-17** | Belediye **rüşvet/irtikap soruşturması — 2. dalga, 2 tutuklama**; eski başkan görevden uzaklaştırılmış | (ilçe) | 3 ulusal kaynak, gövde arşivi (gerçek tarihli) |
| **2026-07-24/25** | Riva'da **iki ayrı yıkım haberi** (Metruk Otel · Milli Takım kamp oteli) | Riva | Beykoz Bel. + Halk TV |

**Aynı pencerede fiyat tarafı:** 14 günde **310 satılık daire ilanı** (ort. 22/gün), en yoğun 07-23 (34) ve 07-16 (32).

### Mahalle bazlı 14 günlük ilan akışı *(kaynak: S47 jsonl, `ilan_tarihi`)*

| Mahalle | 14 gün toplam | Günlük ort. | Pay |
|---|---:|---:|---:|
| Kavacık | 76 | 5,4 | %24,5 |
| Acarlar | 62 | 4,4 | %20,0 |
| Tokatköy | 24 | 1,7 | %7,7 |
| Göztepe / Çiğdem | 21 / 21 | 1,5 | %6,8 |
| Soğuksu | 19 | 1,4 | %6,1 |
| Kanlıca | 16 | 1,1 | %5,2 |
| Çubuklu | 14 | 1,0 | %4,5 |
| Anadolu Hisarı | 13 | 0,9 | %4,2 |
| Yalıköy | 10 | 0,7 | %3,2 |
| Riva | 6 | 0,4 | %1,9 |
| Ortaçeşme | 4 | 0,3 | %1,3 |

> 🔴 **Bu bir trend değildir.** Tek tarama seansı (2026-07-25 20:57→21:09) ve 14 günlük tek pencere. **Payların** anlamı var (hangi mahalle akışın neresinde), **eğimin** yok. İkinci tarama turu geldiğinde bu tablo Beykoz'un ilk gerçek momentum ölçümü olur — **bugünkü değeri baz çizgisi olmasıdır.**

## 2.4 Momentum sonucu

| Mahalle | Sermaye | Kamu | Haber | İlan akışı | **Aynı anda kaç zamanlı ayak** |
|---|---|---|---|---|:-:|
| **Riva** | 2025-04 ✅ | 2023 | **2026-07 ×3** | %1,9 | **4** |
| Kavacık | 2016 | 2022–26 yayılı | — | **%24,5** | 3 |
| Gümüşsuyu | — | 2022–26 yayılı, 4,2 Mr | 2026-07 (tapu) | %0,3 | 3 |
| Paşabahçe | — | 2024 | 2026-07 (tapu) | %1,0 | 2 |
| Tokatköy | 2022 | — | 2026-07 (tapu) | %7,7 | 3 |

> **Riva, dört farklı zaman ekseninde aynı anda hareketli olan tek mahalle** — ve üçü **son 90 gün içinde**. *(Güven %70: sermaye ayağı KAP tarihli %85, haber ayağı 3 kayıt %65, ilan akışı tek pencere %50.)*

---

# G3 — ★ TERCİH SEBEBİ: BEYKOZ NEDEN?

## 3.0 Önce dürüst sınır — bu bir **kıyas değil**

Talep *"diğer ilçelere göre"* diyor. **Elimde başka ilçenin 7-ayak taraması YOK.** Beykoz'u Üsküdar'a, Sarıyer'e veya Çekmeköy'e karşı ölçemem; ölçtüğümü söylersem uydurmuş olurum. Aşağıdakiler **Beykoz'un kendi imzasıdır** — kıyas cümlesi değil, **yapı cümlesi**.

> **Kıyası açacak tek işlem ($0, §G6-1):** aynı 7-ayak taramasını **1-2 komşu ilçede** koştur. Veri zaten 7 CC'nin havuzunda; eksik olan sorudur.

## 3.1 Beykoz'un imzası — dört yapısal olgu

**1) Arz kısıtı kalıcı ve iki katmanlı.**
28/45 mahalle (%62) orman/kırsal statüde, 28'inin 28'i ağaç-baskın *(TT-MAP, Sentinel↔WorldCover **çift imza**, %90)*. Üstüne kamu ihale arşivi **9 askeri ihale** gösteriyor (Sualtı/SAT Komutanlığı, kışla, lojman) *(İhale, %85)* — özel yatırıma kapalı ikinci katman. **Beykoz'da arz kısıtı bir konjonktür değil, bir coğrafya + mülkiyet rejimi.**

**2) Sinyal ilçeye yayılmıyor, üç noktada topluyor.**
%44 mahallede sıfır ayak; %6,7 mahallede 4+ ayak (§1.2). Bir yatırımcı için bu **iyi haberdir**: aranacak küme 45 değil **3**.

**3) Gecikme ölçüldü ve uzun.**
Riva'da kurumsal sermaye 2016-11'de girdi (AGYO arsa), fiziksel inşaat **2025-04'te** başladı → **7,6–8,4 yıl** *(Borsa/KAP, %80)*. Bu, İstanbul için varsayılan ~5 yıldan uzun. **Ama tek zincirdir (n=1)** — ilçe kuralı değil, bir vaka.

**4) Kamu ile özel sermaye eşzamanlı hareket etmiyor.**
Sermaye tepeleri 2017 ve 2022; kamu bedel tepesi 2024 ve o da tek hastane kalemi (§2.2). **Beykoz'da "kamu öncülük etti, özel takip etti" örüntüsü verilerde görünmüyor** — İhale'nin kendi tezi de bunu "zayıf imza" (%55) diye işaretlemişti.

## 3.2 Kesişim kartları — güven ver, kararı bırak

### 🔵 RİVA — "kesişim en geniş, ölçüm en dar"

| Ne biliyoruz | Güven |
|---|---|
| Kurumsal sermaye girdi ve **inşaat 2025-04'te fiilen başladı** (yer teslimi tarihli) | %85 |
| Son 2 haftada 3 haber, ikisi **fiziksel yıkım** (Metruk Otel, kamp oteli) | %70 |
| Fiyat ayağı **iki bağımsız kaynakta** hizalı: 160.000 ↔ 147.190 TL/m² | %75 |
| Kamu 2 ihale / 120,9 M TL (2023) | %85 |

| Ne bilmiyoruz | Neden |
|---|---|
| Uydu ölçümü yok | TT-MAP Riva'yı ⬜ kırsal-N/A sınıfında tutuyor (§G4-Ç1) |
| İmar durumu, parsel, tapu | sistemde kanal yok |
| Fiyatın zaman serisi | tek kesit |

> **Yanlışlanabilir test (F2'den devralındı, SIG1 tarih veriyor):** Riva'da yer teslimi 2025-04'te yapıldıysa, TT-MAP'in **2026 ve 2027** ölçümünde Riva'nın yapılaşma oranı yükselmeli. **Ön koşul:** Riva ⬜ sınıfında olduğu için **şu anda ölçülmüyor** — önce zorunlu izleme listesine alınmalı (§G6-2), yoksa test hiç koşmaz.

### 🔵 KAVACIK — "büyüme değil, likidite"

| Ne biliyoruz | Güven |
|---|---|
| Fiziksel olarak **büyümüyor** (−5,0 p, güven yüksek) | %80 |
| İlçenin **en derin** ilan hücresi: 14 günde 76 ilan (%24,5) | %70 |
| Ticari kira ölçüldü: 442 TL/m²/ay (n=33) | %65 |
| Kamu parası var ama dağınık: 7 ihale / 230 M TL, 2022-2026 | %80 |

| Ne bilmiyoruz | Neden |
|---|---|
| Ofis stoku/işyeri sayısı | TT-AI: POI ile bağlanamıyor, "Kavacık'ta X işyeri" cümlesi **kurulamaz** |
| Getiri oranı (yield) | ticari **satılık** m² boş → ofis kirası ÷ ofis fiyatı hesaplanamıyor |
| Haber tarafı | **0 haber** — temas yok |

> 🔴 **F2'nin "Kavacık ilçenin en ucuz konutu" cümlesi bu turda düştü** — §G4-Ç5.

### 🔵 PAŞABAHÇE — "en çok konuşulan, en az ölçülen"

| Ne biliyoruz | Güven |
|---|---|
| İlçenin **en yüksek söylem yoğunluğu** (3 atıf) | %55 |
| Temmuz 2026 **tapu dağıtımı** kapsamında anılıyor | %60 |
| Uydu +3,4 puan — ama **güven düşük** (4 dolu yıl) | %35 |

| Ne bilmiyoruz | Neden |
|---|---|
| **Fiyat bandı yok** | 14 CSV kaydında m² dolu 1; uzantıda 3 kayıt |
| Şişecam arazisinin durumu | 5 kanalda arandı, 5'i de nicel boş (F2-G2) |

> **İstihbarat okuması:** Paşabahçe'de sıcak olan **anlatı**, ölçü değil. Yatırım dilinde bu "fırsat" değil **belirsizlik**tir.

## 3.3 Ters okuma uyarısı — kentleşen mahalle ≠ konut fırsatı

Ortaçeşme (+10,0 p, güven yüksek, otoyola 0,6 km) ilçenin fiziksel olarak en hızlı büyüyen mahallesi. Aynı mahallede:
- ticari kiralıkların hepsi **1.350–2.200 m² depo/ofis**, m² kirası ilçenin **en düşüğü** (167 TL/m²/ay) *(Analiz S46)*
- konut ilanı **4 adet**, medyan **50.114 TL/m²** — ilçenin **en ucuzu** *(SIG1 hesabı, S47, n=4 — %40)*

**F2'nin sentezi (lojistik/depo, %60) ayakta kalıyor ama artık zayıflatılmış temelde:** F2 bunu *"konut arzı sıfır"* üzerine kurmuştu; **arz sıfır değil, ince ve ucuz** (§G4-Ç4). Doğru cümle: *Ortaçeşme'de büyüyen şey büyük ölçüde konut-dışı görünüyor; konut tarafı hem az hem ucuz.* **Güven %50'ye indirildi** (F2'de %60'tı).

---

# G4 — ★ ÇAPRAZ KONTROL (F2-D9 açığının kapatılması)

> Bu bölümdeki **10 bulgunun 4'ü F2'nin kendi sonucuna itirazdır.** Hiçbiri "CC hata yaptı" demek değildir — hepsi **iki CC'nin sayısı ilk kez yan yana konduğu için** görünür oldu.

## Ç1 🔴 TT-MAP: 31/45 satırda "net 0,0" bir **ölçüm değil, yer-tutucu**

**Kanıt (#21-B):** `vaka_beykoz_ttmap_MAP24.json` — 31 mahallede
`yapilasma_2016 == yapilasma_2025 == wc_yapili` **tam eşit** (ör. Riva 4,4 / 4,4 / 4,4 · Tokatköy 17,6 / 17,6 / 17,6 · Akbaba 5,3 / 5,3 / 5,3).
Ölçülen 14 mahallede bu üçlü **hiçbir zaman eşit değil** (ör. Kavacık 55,5 / 50,5 / 66,5).

**Anlamı:** o 31 satırda yıl sütunlarına Sentinel zaman serisi değil, **statik WorldCover yapılı-oranı** kopyalanmış; `netfark_puan: 0.0` bundan doğuyor. TT-MAP metinde bunu dürüstçe söylüyor (⬜ = *"ölçülecek kentleşme yok"*), **ama JSON'da sayı olarak 0,0 duruyor** — birleştiren herkes bunu "ölçüldü, değişmemiş" diye okur. **#34 ihlali riski: tek sütunda iki kaynak.**

**Etkisi 1 — üç kentsel mahalle de yer-tutucu:** Anadolu Hisarı 🟡, Kanlıca 🟡, Rüzgarlıbahçe 🟡 — ⬜ değiller ama üçü de yer-tutucu satır. Bu üçü **koridor gradyanı hesabına dahil edilmiş.**

**Etkisi 2 — gradyan yeniden hesaplandı:**

| Grup | TT-MAP (ham) | SIG1 (yer-tutucular çıkarılmış) |
|---|---|---|
| Koridora yakın (<3 km) | **+2,26 p** (n=11) | **+2,77 p** (n=9) |
| Koridora uzak (≥3 km) | **−2,82 p** (n=6) | **−3,38 p** (n=5) |
| **Açıklık** | **5,08 p** | **6,15 p** |

> Yön değişmiyor, **açıklık büyüyor** — ama n küçülüyor (17→14). TT-MAP'in karışım uyarısı (köprü ↔ kıyı ayrıştırılamadı) aynen geçerli. **Güven %55'te kalıyor.**
> **Düzeltme talebi (MAP26):** ⬜ ve yer-tutucu satırlarda `netfark_puan` **`null`** olsun, `0.0` olmasın.

## Ç2 🔴 İhale: yayımlanan mahalle yoğunlaşma tablosu, İ60'ın **kendi çözümünü** yansıtmıyor

İhale raporu §3 şunu veriyor — *"[K: 59 çözülen kaydın mahalle-sayımı]"*: Polonezköy 5 · Yalıköy 4 · **Kavacık 4** · Çubuklu 3 · Riva 3 · Kanlıca 3. **F2 bunu aynen aldı.**

**Ham dosyada durum farklı.** `mahalleler[]` alanı = **Katman-1 sözlüğü**, 29 kayıt / 36 hit → yukarıdaki tablo **budur**. `mahalle_coz` alanı = İ60'ın 3 katmanlı çözümü, **59 kayıt / 19 mahalle**:

| Mahalle | İ60 `mahalle_coz` | Toplam bedel | Raporda yazan |
|---|---:|---:|---:|
| **Çubuklu** | **10** | 45,8 M TL | 3 |
| **Gümüşsuyu** | **8** | **4,204 Mr TL** | *(tabloda yok)* |
| **Anadolu Kavağı** | **8** | 21,2 M TL | *(tabloda yok)* |
| **Kavacık** | **7** | 230,4 M TL | 4 |
| Polonezköy | 5 | 6,6 M TL | 5 |
| Yalıköy | 4 | 380,7 M TL | 4 |
| Kanlıca | 3 | 126,5 M TL | 3 |
| Riva | 2 | 120,9 M TL | 3 |

**İki sonucu değiştiriyor:**
1. **Çubuklu, Beykoz'un adet olarak 1 numaralı kamu-yatırım mahallesi** — 10 ihalenin **7'si Türk-Alman Üniversitesi**. İhale raporu "TAÜ 15 ihale" diyor ama **kampüsün Çubuklu'da olduğunu tabloya bağlamamış**; iki olgu aynı raporda yan yana durup birleşmemiş.
2. **Gümüşsuyu para olarak 1 numara** — 4,204 Mr TL, içinde 500 Yataklı Hastane'nin 4,185 Mr'ı. F2 "Hastane-Merkez (Gümüşsuyu)" diyerek tezi doğru kurmuş ama **tablosunda Gümüşsuyu hiç yok**.

*(Not: `mahalle_coz` Katman-2 "tesis-adı" eşlemesiyle üretiliyor — TAÜ→Çubuklu, Devlet Hastanesi→Gümüşsuyu. Bu eşleme **bağımsız doğrulanmadı**; güven %70.)*

## Ç3 🔴 Basın: en çok haber alan mahalle bir **yanlış pozitif**

Basın `mahalle_dagilim_birlesik` → **Cumhuriyet 5** (ilçenin 1 numarası). Ham kayıtlara bakınca **4'ü Cumhuriyetköy ile ilgisiz:**

| Haber | Snippet'te geçen | Gerçek konu |
|---|---|---|
| Beykoz Belediyesi soruşturmasında 2 tutuklama | *"Beykoz **Cumhuriyet Başsavcılığı**nca…"* | rüşvet soruşturması |
| …ikinci dalga: İki tutuklama | *"Beykoz **Cumhuriyet Başsavcılığı**nca…"* | aynı olay |
| Beykoz Belediyesine rüşvet soruşturması | *"Beykoz **Cumhuriyet Basavclnca**…"* (bozuk kodlama) | aynı olay |
| Hayko Cepkin'e AHBAP tepkisi | Cumhuriyetköy geçmiyor | Beykoz ile ilgisiz |

**Düzeltilmiş tablo:** Cumhuriyetköy **1** (Kadın Çiftçiler Kooperatifi, gerçek) · **Riva 3 → ilçenin 1 numarası.**

> **Sebep:** "Cumhuriyet" hem mahalle adı hem adliye adı. **Düzeltme:** mahalle sözlüğüne negatif bağlam kuralı (`cumhuriyet (?!başsavcılığı|savcılığı|gazetesi)`).

## Ç4 🔴 Analiz S47'nin "ESKİ TARAMA ATLAMIŞ" kararı **kanıtlanmadı**

S47, Ortaçeşme'de 4 / Yalıköy'de 10 konut ilanı bulunca *"TUTULAN STOK tezi ZAYIFLIYOR — arz VARDI, v24/CSV görmemişti"* dedi.

**Ham dosyaya baktım — pencereler farklı:**

| Set | Pencere | Ortaçeşme konut |
|---|---|---|
| v24 master | 2026-05/06 kesiti | 0 |
| S46 CSV | ilan tarihleri **2026-02 → 05** | 0 |
| S47 uzantı | ilan tarihleri **2026-07-12 → 07-25** | 4 |

Ortaçeşme'nin 4 ilanının tarihleri: **07-18, 07-18, 07-21, 07-23.** Hepsi CSV penceresi **kapandıktan sonra**.

> **Yani "eski tarama atladı" ile "Mayıs sonrası yeni arz çıktı" aynı veriyle eşit derecede uyumlu.** S47 birinciyi seçti; SIG1 **ikisinin de kanıtlanmadığını** söylüyor. Ayrımı yapacak tek şey: v24/CSV kayıtlarında `ilan_id` (S47 zaten bunu istedi) **veya** S46 penceresindeki Ortaçeşme kayıtlarının ilan tarihleri. **$0, tek sorgu.**
> **Sonuç:** F2'nin "tutulan stok / lojistik" sentezi (%60) **çürütülmedi ama dayanağı değişti** → §3.3, güven **%50**.

## Ç5 🔴 "Kavacık Beykoz'un en ucuz konutu" — düştü

F2 §1.4 iddia 9 ve SONUÇ bölümü: *"konut m² medyanı 84.722 TL ile ilçenin en ucuzu"* (Analiz S46, **n=6**).

Uzantı katmanında Kavacık **n=76** ve medyan **90.995 TL/m²** — ve **en az 8 mahalle daha ucuz:**
Ortaçeşme 50.114 · Yavuz Selim 56.839 · Akbaba 62.500 · Çamlıbahçe 65.000 · Rüzgarlıbahçe 67.368 · Merkez 68.824 · Yalıköy 72.778 · İncirköy 85.399 · Paşabahçe 89.583.

> **n=6'lık bir hücreden "ilçenin en ucuzu" sıralaması çıkarılamaz.** Kavacık'ın **seviyesi** iki kaynakta tutarlı (84.722 ↔ 90.995, %7,4 fark) — **düşen sıralama iddiasıdır, ölçüm değil.** F2'nin Kavacık sentezinin *geri kalanı* (doymuş ofis/kira piyasası) ayakta.

## Ç6 🟢 Pozitif çapraz doğrulama — sistemde ilk kez

| Mahalle | S46 CSV (Şub–May, karma) | S47 uzantı (Tem, yalnız daire) | Fark |
|---|---:|---:|---:|
| Acarlar | 210.000 (n=146) | 190.111 (n=62) | **%9,5** |
| Riva | 160.000 (n=109) | 147.190 (n=6) | **%8,0** |
| Kanlıca | 122.500 (n=4) | 124.019 (n=16) | **%1,2** |

> **İki bağımsız toplama yöntemi** (TT-HAFIZA CSV arşivi ↔ Chrome uzantısı canlı çekim), **iki büyük hücrede %10 içinde** buluşuyor. Bu, Beykoz fiyat ayağının **üst ucunun güvenilir** olduğunun ilk bağımsız kanıtıdır — #21-B çift-imza. **Güven %80.**
> *(Aynı testte Çubuklu %38,7 ve Yavuz Selim %46,7 sapıyor — ikisinin de CSV tarafı n=4 / n=24; ince hücrelerde uyum yok.)*

## Ç7 🔴 "Tapu kanalı sistemde YOK" — **kanal var, okunmadı**

F2-G2 §5: *"TKGM/tapu — **(kanal YOK)** … Sistemde tapu kanalı yok — yapısal boşluk."*

Basın'ın **kendi havuzunda**, aynı hafta, **üç kaynaklı** bir tapu olayı duruyor:

> **"Beykoz'da 1071 hak sahibi tapusuna kavuştu"** — emlakkulisi (07-06) · Beykoz Belediyesi (07-13) · beykozgazetesi *"Bakan Kurum Beykoz'da Tapu Dağıttı"* (07-13)
> **Anılan mahalleler:** Gümüşsuyu · Paşabahçe · Polonezköy · Tokatköy · Anadolu Hisarı · Soğuksu

**Neden önemli:** Beykoz'un ana tezi %62 orman/kısıt = kalıcı arz kısıtı. **1071 hak sahibine tapu verilmesi tam olarak o kısıtın kenarında bir hareket.** Hangi statüde (2B? hazine? kentsel dönüşüm hak sahipliği?), kaç parsel, hangi mahallede kaç adet — **bilmiyorum**: sadece başlık ve mahalle etiketi okundu, gövde metni yok.

> **Doğru cümle:** *"Tapu kanalı yok"* değil → **"Tapu olayı Basın kanalına düştü, hiçbir CC gövdesini okumadı."** [HİPOTEZ, güven %60 — olayın gerçekliği 3 kaynaklı; **içeriği ölçülmedi**]
> **En yüksek getirili tek iş bu (§G6-3).**

## Ç8 🟡 Basın'ın 12 ulusal kaydının 6'sında tarih **yayın tarihi değil**

`haber_akis` kaynaklı 6 kaydın 4'ü **mikro-saniyesine kadar aynı** damgayı taşıyor: `2026-07-13T00:44:49.341245+03:00`. Bu bir **hasat zamanı**. `gövde_arşiv` kaynaklı 6 kayıt ise gerçek yayın damgası taşıyor (`2026-07-17T20:36:00+03:00` gibi).

> **Etkisi:** §2.3'teki 07-13 kümesi (tapu ×2, Altınpark, belediye itiraf haberi) **aynı gün olmayabilir** — o gün *toplandılar*. Kümeyi "3 hafta içinde" diye yazdım, "aynı gün" demedim. **Momentum ekseninde bu 4 kayıt gün çözünürlüğünde kullanılamaz.**

## Ç9 🟡 İ60 Katman-2/3, kanonda **olmayan** 4 "mahalle" üretti

`mahalle_coz` içinde: **emniyet · kaşgarlı · serviburnu · küçüksu** — dördü de 45'lik mahalle kanonunda yok (sokak/mevki/kurum adları). Ayrıca Kavacık'a atanan bir kayıt *"H.472 Ref400 kV (Tepeören-Makine OSB Bağlantısı)"* — muhtemelen metin içi eşleşme, Beykoz-Kavacık işi değil. **F2-D4 (tek kanon listesi) tekrar doğrulandı.**

## Ç10 🟡 Mahalle adı kanonu yok — join elle yapıldı

| Aynı yer | TT-MAP | TT-AI | Basın | Analiz uzantı |
|---|---|---|---|---|
| Cumhuriyetköy | `cumhuriyetkoy` | Cumhuriyet | Cumhuriyet | — |
| Anadolu Hisarı | `anadolu_hisari` | Anadolu Hisarı | Anadolu Hisarı | **Anadoluhisarı** |
| Yeni Mahalle | `yeni` | Yeni Mahalle | Yeni Mahalle | Yeni Mahalle |
| Çavuşbaşı Çiftlik | `cavusbasi_ciftlik` | Çiftlik | — | Çavuşbaşı |

SIG1 bu raporu üretmek için **8 satırlık elle alias tablosu** yazmak zorunda kaldı (`kod/isi_haritasi_SIG1.py` → `ALIAS`). **Bu tablo her yeni ilçede yeniden yazılacak.** #18 üçlü-anahtar mahalle *slug*'ında **fiilen çalışmıyor**.

## Ç11 ⚫ Sayısal denetim özeti

| İddia | Kaynak sayısı | Durum |
|---|---|---|
| Beykoz 45 mahalle | TT-MAP 45 · TT-AI 45 · Basın 45 | 🟢 **3 CC uyumlu** |
| Acarlar fiyat seviyesi | Analiz S46 ↔ S47 | 🟢 %9,5 içinde |
| Riva fiyat seviyesi | Analiz S46 ↔ S47 | 🟢 %8,0 içinde |
| Riva'da 2025'te inşaat | Borsa ✅ ↔ TT-MAP ⬜ | 🟡 **çelişmiyor, TT-MAP ölçmüyor** |
| Beykoz'da kamu yatırımı | Basın `kamu_yatirimi=0` ↔ İhale **144** | 🔴 taksonomi hatası (F2 yakalamıştı, hâlâ açık) |
| Beykoz mahalle sözlüğü | İhale Katman-1 **33** ↔ kanon **45** | 🔴 açık (F2 yakalamıştı) |
| İhale mahalle yoğunlaşması | rapor §3 ↔ İ60 ham | 🔴 **yeni — Ç2** |
| Basın mahalle 1 numarası | S79 sayaç ↔ ham snippet | 🔴 **yeni — Ç3** |
| TT-MAP net değişim | 14 ölçüm ↔ 31 yer-tutucu | 🔴 **yeni — Ç1** |
| Kavacık "en ucuz" | S46 n=6 ↔ S47 n=76 | 🔴 **yeni — Ç5** |

---

# G5 — DÜRÜSTLÜK: NE ÖLÇEMEDİM

## 5.1 Momentum yalnız tarihli sinyalden çıktı

| Kanal | Durum | Sonuç |
|---|---|---|
| KAP (sermaye) | ✅ gün çözünürlüğü, 2016→2025 | momentum'un omurgası |
| EKAP (kamu) | ✅ yıl çözünürlüğü | yıllık eğilim |
| Haber | ⚠️ 6/31 kayıtta tarih **hasat zamanı** (Ç8) | kısmi |
| İlan akışı | ⚠️ **tek 14 günlük pencere** | baz çizgisi, trend değil |
| Söylem | ❌ videolar tarihsiz | momentum'a **girmedi** |
| **Belediye meclis kararları** | ❌ **hiç hasat edilmedi** (Basın S80 borcu, URL bulundu) | **imar momentumu ölçülemedi** |
| **Yapı ruhsatı / iskân** | ❌ kanal yok | "kaç yeni bina" ölçülemez |
| **Tapu devir serisi** | ❌ kanal yok (tek olay Ç7) | gerçekleşen fiyat yok |
| **Google/harita hareketliliği** | ❌ kanal yok | yer-zamanlı talep sinyali yok |

## 5.2 Bu raporda **olmayan** şeyler

1. **Fiyat tahmini yok.** Hiçbir mahalle için "şu kadar olur" denmedi. Verilen tüm rakamlar **ilan (istenen)** fiyatıdır = bandın **üst kenarı**; gerçekleşen fiyat bunların altındadır ve **ne kadar altında bilinmiyor**.
2. **Getiri (yield) yok.** Ticari satılık m² boş; ofis kirasını konut fiyatına bölmeyi reddediyorum (#34).
3. **İlçe kıyaslaması yok** (§3.0). "Beykoz diğer ilçelerden iyidir/kötüdür" cümlesi **kurulmadı**.
4. **Nedensellik yok.** "Köprü sayesinde" denmedi; TT-MAP'in karışım uyarısı (köprü ↔ kıyı) aynen geçerli.
5. **Şişecam/Paşabahçe kapanmadı.** 5 kanalda nicel boş; 2016 tarihli tek ipucu (`Bm-2LwEpclk`) hâlâ okunmadı.
6. **Isı puanı bir skor değildir.** Eşikler SIG1 kararıdır; farklı eşik farklı sıralama verir. Kural §1.1'de açıkta — **tartışılabilir olsun diye.**

## 5.3 V16 — kendi işime itiraz

1. **Fiyat ayağını ben hesapladım, Analiz değil.** §1.4 tablosu SIG1'in `fiyat_tl ÷ m²` hesabıdır; liste-tipi kayıtlarda m² `nitelikler_ham[0]`'dan alındı ve bu alan **her zaman m² olmayabilir** (filtre: 20–3000). Analiz'in kanonik sayısı değildir. **Analiz onaylamalı.**
2. **Ortaçeşme 50.114 TL/m² n=4** — istatistik değil, işaret. Kararda kullanılmamalı.
3. **Isı eşikleri keyfî.** "≥3 ihale veya ≥100 M TL" gerekçelendirilebilir ama tek doğru değil. Eşik değişirse Gümüşsuyu ve Çubuklu üst kümeye çıkar.
4. **7. ayağı (VERİ/TT-AI) tabloda tuttum ama piyasa sinyali saymadım** — yine de sayı sütununa girdi ve 10 mahallenin "1 ayak"ını tek başına o oluşturuyor. Bu bir **şişme**dir; okunurken §1.1 uyarısı hatırlanmalı.
5. **Ç7 (tapu) sadece başlıktan okundu.** Gövde metni yok. Bu bir **ipucudur, bulgu değil**.
6. **Rüşvet soruşturması haberini rapora aldım** (§2.3) — KVKK #31 kapsamında kişi adı geçiyor, kaynak ulusal basın, konu kamu görevi. **Dış feed'e çıkarken maskeleme uygulanmalı.**
7. **Kendi çıktımı onaylayamam.** F1 kural 4 gereği denetleyen imzası boş. **Ç1–Ç5'in doğrulanması ilgili CC'lerin işidir**, benim değil.

---

# G6 — SİPARİŞLER (hepsi $0, getiriye göre sıralı)

| # | İş | Kim | Ne açar | Getiri |
|---|---|---|---|---|
| **1** | **"1071 hak sahibi tapusu" haberinin gövdesini oku** — hangi statü, kaç parsel, hangi mahalle | Basın | Sistemin **ilk tapu sinyali**; %62 orman kısıtının kenarı | ⭐⭐⭐⭐⭐ |
| **2** | **Riva + Tokatköy + Çayağzı'yı ⬜ olsalar da zorunlu izleme listesine al**; `netfark_puan` yer-tutucularını `null` yap | TT-MAP (MAP26) | §3.2'deki **yanlışlanabilir testin ön koşulu**; Ç1 düzelir | ⭐⭐⭐⭐⭐ |
| **3** | **Aynı 7-ayak taramasını 1-2 komşu ilçede koştur** | CC-Signals + 7 CC | "Beykoz neden" sorusunu **kıyasa** çevirir (§3.0) | ⭐⭐⭐⭐⭐ |
| **4** | **Belediye meclis kararlarını hasat et** (URL hazır: `beykoz.bel.tr/haberler?kategori=meclis-kararlari`) | Basın (S80 borcu) | **İmar momentumu** — şu an tamamen kör | ⭐⭐⭐⭐⭐ |
| **5** | **İkinci uzantı turu** — 14 günlük pencereyi ikiye çıkar | Analiz | §2.3'ü baz çizgisinden **gerçek momentuma** çevirir; fiyat düşürme izi açılır | ⭐⭐⭐⭐ |
| **6** | **İ60 mahalle tablosunu `mahalle_coz` ile yeniden yayınla**; Katman-1 sözlüğünü 45'e çıkar; kanon-dışı 4 adı temizle | İhale | Ç2 + Ç9 kapanır | ⭐⭐⭐⭐ |
| **7** | **Mahalle adı kanonu** — TT-AI'nın 45'lik `mahalle_id` listesi tek kaynaktan dağıtılsın; alias tablosu ortak dosya olsun | TT-AI → hepsi | Ç10 kapanır, her ilçede tekrar yazılmaz | ⭐⭐⭐⭐ |
| **8** | **S46 penceresindeki Ortaçeşme/Yalıköy kayıtlarının ilan tarihleri** | Analiz | Ç4'ü çözer: "atlandı" mı "yeni arz" mı | ⭐⭐⭐ |
| **9** | **Basın mahalle sözlüğüne negatif bağlam kuralı** (`cumhuriyet (?!başsavcılığı…)`) | Basın | Ç3 kapanır | ⭐⭐⭐ |
| **10** | **Ticari satılık m² kurtarma** (75 kayıt) | Analiz | Beykoz'un **getiri oranını** açar (F2'den devir) | ⭐⭐⭐ |
| **11** | **KAP backfill 2015→2026** (SISE penceresi) | Borsa | Şişecam dosyası (F2'den devir) | ⭐⭐⭐ |
| **12** | **`Bm-2LwEpclk` manuel çekimi** (Şişecam direnişi 2016) | Sosyal (S203 borcu) | 2016 olayının tarihi (F2'den devir) | ⭐⭐⭐ |

---

# SONUÇ — bugün söyleyebileceğim

> **Beykoz'da sinyal ilçeye yayılmıyor.** 45 mahallenin **20'sinde hiçbir ayak sıcak değil**; sadece **3'ünde dört veya daha fazla ayak aynı anda sıcak**: **Riva (5), Kavacık (4), Paşabahçe (4)**. *(SIG1 ısı kuralı, %75)*
>
> **Riva, dört farklı zaman ekseninde birden hareketli olan tek mahalle** — kurumsal sermaye (KAP, yer teslimi **2025-04**), kamu parası (2023, 120,9 M TL), haber (son 2 haftada **3 kayıt**, ikisi fiziksel yıkım) ve fiyat (iki bağımsız kaynak **%8 içinde** buluşuyor). Üstelik bunu **uydu ayağı olmadan** yapıyor: TT-MAP Riva'yı "kırsal-N/A" sınıfında tutuyor, yani **inşaatın başladığı yeri ölçmüyor**. *(%70)*
>
> **Kavacık'ta sıcak olan büyüme değil, işlem.** Uydu 2016→2025 arasında **−5,0 puan** diyor (güven yüksek) ama ilan akışının **%24,5'i** orada — 14 günde 76 ilan. **Doymuş ama likit.** *(%70)*
>
> **Paşabahçe en çok konuşulan, en az ölçülen yer.** Söylem 3 atıfla ilçe birincisi, haber var, ama **fiyat bandı yok** (14 kayıtta m² dolu 1). İstihbarat dilinde bu fırsat değil **belirsizlik**tir. *(%55)*
>
> **Beykoz'un yapısı üç şeyle ayrışıyor** *(kıyas değil, yapı)*: (1) **kalıcı ve iki katmanlı arz kısıtı** — %62 orman + 9 askeri ihalelik kapalı alan *(%90 / %85)*; (2) **ölçülmüş uzun gecikme** — sermayeden kazmaya **7,6–8,4 yıl**, ama **tek zincir** *(%80)*; (3) **kamu ve özel sermayenin eşzamanlı olmaması** — sermaye tepeleri 2017 ve 2022, kamu bedel tepesi 2024 ve o da **tek hastane kalemi** *(%80)*.
>
> **Ve bir şey oluyor: Temmuz 2026.** Üç hafta içinde tapu dağıtımı (**1071 hak sahibi**, 6 mahalle), belediyede rüşvet soruşturmasının ikinci dalgası ve Riva'da iki ayrı yıkım haberi. **Bunların hiçbiri F2'de yoktu** — çünkü kimse tarihli sinyalleri yan yana koymamıştı.
>
> 🔴 **Ama yanlış deme lüksümüz yok, o yüzden şunu da yazıyorum:** bu turda **7 CC'nin sayısında 10 uyuşmazlık** buldum. Dördü F2'nin sonuçlarına itiraz: TT-MAP'in "net 0,0"larının **31'i ölçüm değil** · İhale'nin yayımlanan mahalle tablosu **kendi ham çözümüyle uyuşmuyor** · Basın'ın 1 numaralı mahallesi **"Cumhuriyet Başsavcılığı" yanlış-pozitifi** · Kavacık'ın **"en ucuz" sıralaması n=6'dan çıkmış ve n=76'da düşüyor**. Buna karşılık **ilk kez pozitif bir çapraz doğrulama** da var: Acarlar ve Riva fiyatı iki bağımsız yöntemde **%10 içinde** buluştu.
>
> **Karar sizin.** Ben "burada bir şey oluyor" diyorum ve nerede olduğunu gösteriyorum. **"Şu kadar eder" demiyorum — çünkü ölçmedim.**

---

**Kaynaklar (#21-B):** CC-TT-MAP MAP24-25 (`vaka_beykoz_ttmap_MAP24.json` 45 kayıt) · CC-İhale İ59-60 (`vaka_beykoz_ihale_I60.json` 144 kayıt) · CC-Borsa S54-55 (KAP ODA, 20 bildirim) · CC-Basın S78-79 (`vaka_beykoz_basin_S79.json` 31 haber) · CC-Sosyal S201-202 (FTS5, 82 video) · CC-TT-AI TTA93-95 (evren, 45 mahalle) · **CC-Analiz S46 + S47** (`uzanti_katmani_beykoz_S47.jsonl` 310 kayıt) · CC-Finans F2 (girdi ve **itiraz hedefi**)

**Üreten:** CC-Signals SIG1 · **Denetleyen:** ☐ (üreten ≠ denetleyen)
**$0 · A04 · V16 · #18 · #21-B · #31 · #34 · SİLME-YOK**
