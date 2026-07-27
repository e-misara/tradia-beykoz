# CC-Signals · SIG5 — SİNYAL KANITI
## Geriye dönük backtest + ileri watchlist
*(SIG4 montajına **"SİNYAL KANITI"** ana bölümü olarak girer)*

**Sprint:** SIG5 · **Tarih:** 2026-07-27 · **Üreten:** CC-Signals · **Denetleyen:** CC-Signals (§V16-1)
**Disiplin:** $0 · A04 · V16 · #21-A/B/C · #34 · **dönem etiketi zorunlu** · SİLME-YOK

---

## 0. BU BÖLÜMÜN DİL KURALI

| ✅ Kurulacak cümle | ❌ Yasak cümle |
|---|---|
| *"Süreç şu tarihte başladı, şu ana kadar şu kadar süre işledi."* | *"Patlayacak" · "değerlenecek" · "kaçırmayın"* |
| *"Şu ayak sıcak, şu ayak soğuk, ölçüm şurada."* | *"X kat kazandırır"* |
| *"Şu olursa güçlenir, şu olmazsa zincir kopar."* | *"Garanti" · "kesin"* |
| *"Kaynak şu, güven şu, karar sizin."* | Kaynaksız/güvensiz sayı |

> **Sinyalin işi tahmin değil, ERKEN GÖRMEKTİR.** Erken görmek "yarın patlar" demek değil; **"süreç başladı, süre işliyor"** demektir. Beykoz'un kendi verisi bunu acımasızca gösteriyor: Riva'da süreç 2017'de başladı, kazma 2025'te vuruldu — **arada 8 yıl ve bir dava vardı.**

---

# BÖLÜM A — GERİYE DÖNÜK: "TRADİA O GÜN OLSAYDI"

## ⚠️ A0 — Backtest'in karşı-olgusal şerhi (bu bölüm bu şerh olmadan okunamaz)

Bu dört vaka **geriye dönük yeniden kurgudur.** Dört sistematik sınır var ve hiçbiri gizlenmemiştir:

| # | Sınır | Etkisi |
|---|---|---|
| 1 | **Tradia 2016-17'de yoktu.** Kanallar (KAP taraması, YouTube arşivi, EKAP hasadı) o gün kurulu değildi. | "Görürdük" ifadesi **kanalın verisi o gün mevcuttu** demektir, sistem çalışıyordu demek değildir. |
| 2 | **Basın havuzu ~60 gün derinlikte.** "Basın kaç yıl sonra fark etti" ölçülemez. | Bu yüzden karşılaştırma **"KAP/birincil sinyal → ölçülebilir piyasa hareketi"** ekseninde kuruldu, "basın fark etti" ekseninde değil. |
| 3 | **Fiyat serisi 2026-02'de başlıyor.** Beykoz için 2026 öncesi fiyat verisi **hiçbir CC'de yok** (Analiz S51 kesin: *"2025 ve öncesi Beykoz kaydı arşivde YOK"*). | Hiçbir vakada "fiyat şu kadar arttı" denemez. |
| 4 | **Seçilim yanlılığı.** Dört vaka **sonucu bilinerek** seçildi. Gerçek backtest, 2017'de sinyal veren **tüm** mahalleleri alıp kaçının tuttuğunu sayardı — o liste yok. | A4 (karşı-örnek) tam da bunu dengelemek için var. |

---

## A1 · RİVA — "süreç başladı, süre işledi"

### Tarih damgalı zincir

| Tarih | Olay | Kanal (#21-B) |
|---|---|---|
| **2016-11-09** | AGYO, Beykoz Çayağzı (Riva) 13 Pafta 2038 Parsel **1.313 m² arsa** aldı | KAP ODA — *ilk sinyal* |
| 2017-05-11 | EKGYO **Riva Arsası İhale İlanı** | KAP ODA |
| 2017-06/08 | İhale oturumları ×4 · 2. oturum 6 istekli · en yüksek **ASKSTG 3,808 Mr TL** | KAP + PDF eki (idx 612682) |
| **2017-09-13** | **Sözleşme imzalandı** · asgari şirket payı 952 M TL | KAP ODA |
| 2017-09-19 | Yer teslimi | KAP ODA |
| 🔴 *(2017-08-15 sonrası)* | **Kazanan iş ortaklığı sözleşmeye GELMEDİ** → geçici teminat irat → 2. teklife yeniden ihale → **tazminat davası, istinaf sürüyor** | KAP faaliyet raporu 2023 (idx 1274021) |
| 2018-09-24 | **Yapı ruhsatı: 3202 parselde 509 konut** | KAP (idx 709039) |
| 2020-11-09 | +199 konut +68 dükkan → **proje toplam 776 bağımsız bölüm** | KAP (idx 887441) |
| 2022-01-10 | STG artışı: 952 M → **1,254 Mr TL** | KAP ODA |
| **2025-04-11** | **1. Etap İkmal İnşaat Sözleşmesi** | KAP ODA |
| 2025-04-18 | 1. Etap yer teslimi | KAP ODA |
| **2026-07** | 4 eksen aynı anda: fiyat **+%26,0 yıllık** (İstanbul +%25,3) · ilan 109→122 · Metruk Otel yıkımı → Gençlik Kampı · 2 kamu ihalesi 120,9 M TL | Analiz S49 · Basın S82/S85 · İhale İ62 |

### Metrik

| Ölçüm | Değer | Dönem etiketi |
|---|---|---|
| **Tradia sinyal tarihi** | **2016-11** (AGYO arsa) / kesinleşme **2017-05** (EKGYO ihale ilanı) | nokta |
| İlk fiziksel icra | **2025-04** (ikmal inşaat + yer teslimi) | nokta |
| **Sermaye → kazma** | **7,6 – 8,4 yıl** | 2016-11/2017-09 → 2025-04 |
| Ölçülebilir piyasa hareketi | **2026-07** (fiyat İstanbul'a yetişme) | 4 aylık ölçüm, yıllıklandırılmış |
| **Sinyal → piyasa hareketi** | **≈ 9 yıl 2 ay** | 2017-05 → 2026-07 |

### ★ Dersi — "sinyal patlama demez"

> Tradia 2017'de **Riva'da bir süreç başladığını** görürdü: KAP'ta ihale ilanı, sözleşme, yer teslimi. Ne göremezdi: **8 yıl süreceğini ve sebebinin dava olacağını.**
>
> **Olay defteri dilinde doğru kayıt (2017-09):**
> `BEY-RIVA · durum: işliyor · evre: sözleşme · beklenen yansıma: bilinmiyor · not: yer teslimi yapıldı, inşaat bildirimi bekleniyor`
> **Yanlış kayıt olurdu:** `Riva değerlenecek`
>
> Gecikmenin sebebi 2026'da **birincil kaynakta** ortaya çıktı (KAP faaliyet raporu): kazanan sözleşmeye gelmedi. **Yani gecikme imar rejiminden değil, ihale hukukundan geldi.** Bu, F2'nin 7,6–8,4 yıllık ölçümüne mekanizma kazandırıyor. 🟢 K=2 (KAP zinciri + faaliyet raporu)

---

## A2 · TOKATKÖY — "en hızlı kapanan zincir, ama tam kapanmadı"

### Tarih damgalı zincir

| Tarih | Olay | Kanal |
|---|---|---|
| 2007 → 2024 | Nüfus **15.669 → 13.445 (−%14)**; **2022 tek yılda −%8** | Wikipedia (Basın S84) |
| **2022-09-29** | EKGYO **Tokatköy 1. Etap sözleşme, 789,7 M TL** | KAP ODA |
| 2022-10-04 | 1. Etap yer teslimi + **2. Etap sözleşme 889,9 M TL** | KAP ODA |
| 2022-10-10 | 2. Etap yer teslimi | KAP ODA |
| **2026-01-08** | **Meclis M1: "Tokatköy Kentsel Dönüşüm alanında yol ismi düzenlemesi"** → alan **onaylı ve yürürlükte** | Beykoz Bel. Meclis (Basın S83) |
| **2026-07** | Piyasada **15 ilan** "Emlak Konut projesi"ne atıflı, **15/15'i Tokatköy** · konut medyanı 98.333 TL/m² (n=35) | Analiz S48 (SIG2 tespiti) |

### Metrik

| Ölçüm | Değer |
|---|---|
| **Tradia sinyal tarihi** | **2022-09** (KAP sözleşme) — aynı yıl nüfus −%8 ile **çift imza** |
| Piyasada görünürlük | **2026-07** (15 ilan) |
| **Sinyal → piyasa** | **≈ 3 yıl 10 ay** |
| Uydu teyidi | NDVI 0,651 (2015) → 0,489 (2020) → 0,471 (2025) — **Beykoz'un tek yeşil kaybı** |

### 🔴 Ama zincir tam kapanmıyor — ve bunu yazıyorum

**Yeşil kaybın büyük kısmı 2015→2020 penceresinde (−0,162); EKGYO sözleşmesi 2022-09.** Yani **uydu kaybı sermayeden önce.** İki olası açıklama var, ikisi de ölçülmedi:
1. Daha erken bir dönüşüm/TOKİ evresi (nüfus 2007'den beri düşüyor),
2. Landsat TM↔OLI sensör ofseti (TT-MAP'in kendi uyarısı).

> **Nedensellik iddia edilmedi.** Söylenebilecek: *"Tokatköy, sermayenin, fiziksel değişimin ve piyasa görünürlüğünün üçünün birden ölçüldüğü tek Beykoz mahallesidir — ama sıralaması beklenen sırada değil."*
> 🟡 **1071 tapu iddiası hâlâ doğrulanmadı:** Basın S85 havuzda **0 hit** buldu. SIG1'den beri beş turdur açık.

---

## A3 · İNCİRKÖY — "kanalda 10 yıl önce vardı, ama farklı bir cümleyle"

### Tarih damgalı zincir

| Tarih | Olay | Kanal |
|---|---|---|
| 1930'lar | Paşabahçe cam fabrikası kuruldu (İnönü-Bayar dönemi) | Sosyal `zrhMJ_kcCEw` |
| **2016-03-11** | **"Şişecam işçileri 127 gün direniyor · Beykoz Paşabahçe"** | Sosyal `Bm-2LwEpclk` (metadata) + **3 bağımsız video teyidi** (`HwAdHXQU500`, `7Zc4hVYA_Gw`, `U3DGc5M8SY8`) |
| 2020 | Şişecam grup birleşmesi — Paşabahçe A.Ş. devrolma (123 KAP bildirimi) | Borsa S56 |
| **2026-02-20** | **KAP: "Paşabahçe Gayrimenkullerinin Satışı"** · İncirköy Mh. · 11 parsel · **117.018,95 m²** · **171,5 M USD peşin** · alıcı **Çelikler Taahhüt İnşaat ve Sanayi A.Ş.** | KAP idx 1559473 |
| 2026-05-07 | Meclis M4: İncirköy 26.938 m² parselin **7.219,46 m²'si satışa** çıkarıldı (belediye taşınmazı) | Beykoz Bel. Meclis |
| **2026-07-08** | Sahibinden ilanı `1315829024`: emlakçı **tutarı ve alıcıyı birebir yazarak** komşu arsayı pazarlıyor | Analiz S48 |

### Metrik

| Ölçüm | Değer |
|---|---|
| **Kanalda ilk iz** | **2016-03** (fabrika kapanış/direniş süreci) |
| Kesin işlem | **2026-02** |
| **Aralık** | **≈ 9 yıl 11 ay** |
| İşlem → piyasa fiyatlaması | **≈ 4,5 ay** (2026-02 → 2026-07 ilan metni) |

### 🔴 Dürüstlük: 2016'daki sinyal ne DEĞİLDİ

2016'daki video *"arazi satılacak"* demiyordu — *"fabrika kapanıyor, işçiler direniyor"* diyordu. **"Kapanan sanayi arazisi → dönüşüm"** çıkarımı o gün yapılabilirdi ama **kesin değildi**; 10 yıl boyunca hiçbir kanal işlemi göstermedi (Borsa 2015-2023 KAP taramasında Beykoz = **0**).

> **Bu vakanın gerçek dersi zamanlama değil, KANAL:** işlem KAP'ta **vardı** ve Borsa iki sprint boyunca (S55, S56) *"2015 öncesi/KAP-dışı"* diye yanlış hipotez kurdu — çünkü **arama penceresi 2015-2023'tü, işlem 2026'daydı.**
> **Ders (§B kuralı):** *bir kanalda "yok" demeden önce, pencerenin olayı kapsayıp kapsamadığı kontrol edilir.*
>
> ★ En hızlı halka ise sondaydı: **işlemden 4,5 ay sonra piyasa onu fiyatlamaya başlamıştı.** Emlakçı ilan metni, kurumsal işlemi **KAP'tan bağımsız** taşıyor — SIG2'de açtığımız kanal.

---

## A4 · KARŞI-ÖRNEK — "köprü gelecek, Beykoz değerlenecek" · **10 yıl sonra ölçüm**

*Bu vaka dosyanın dürüstlük şovudur: sinyal ürününün bir işi de **yanlış hikâyeden korumaktır.***

### Vaat (2016 öncesi, söylem kanalı)

> *"3. köprü... oldukça kuzey bölgede, Poyrazköy ve Garipçe köylerinin bölgesinden geçiyor."* — **OLGU**
> *"Fiyatlar 3'e katlayacak 5'e katlayacak diye ben o zaman da şunu iddia ettim... o bölgede fiyatlar katlanacak."* — **VAAT**
> — erblogtube `ZyIdHE3QvoM` (Sosyal S205)

**2016-08-26:** YSS Köprüsü açıldı. Ayak Poyrazköy'de; 300.000 ağaç kesildi (Basın S82, Wikipedia).

### 10 yıl sonra dört bağımsız ölçüm

| Ölçüm | Sonuç | Kaynak |
|---|---|---|
| Koridor gradyanı (Sentinel 2016→2025) | yakın 11 mahalle **+2,3 p** · uzak 6 mahalle **−2,8 p** → **görünüşte vaadi destekliyor** | TT-MAP MAP25 |
| 🔴 **SIG1 düzeltmesi** | 3 mahalle **yer-tutucu satır**; temizlenince +2,77 ↔ −3,38 (n 17→14). Yön aynı, **ama TT-MAP'in kendi karışım uyarısı duruyor: koridor yakınlığı ≈ Boğaz kıyısı, ikisi AYRIŞTIRILAMADI** | SIG1 Ç1 |
| **Landsat 1985→2025 kıyı testi** | kıyı bandı 2015→2025 NDVI eğimi **−0,003 = DÜZ.** Köprü sonrası hızlanan yeşil kaybı **YOK** | TT-MAP MAP28 |
| **NDBI çapraz (ayrı CC)** | köprü etkisi **izole edilemedi**; her konum sınıfında aynı U-şekli = **sensör artefaktı** | TT-AI non-kanon çapraz |

### ★ Vaadin adres verdiği yer: **Poyrazköy — bugün**

| Ayak | Poyrazköy |
|---|---|
| Isı skoru | **0/8 — Beykoz'un 23 sıfır-ayaklı mahallesinden biri** |
| Uydu (Sentinel) | ⬜ flatten · net ölçüm yok |
| Uydu (Landsat NDVI) | **+0,253 = yeşil ARTTI** (dönüşüm yok) |
| Kamu | 1 ihale — balıkçı barınağı, **6,0 M TL** (2022) |
| Sermaye | **yok** |
| Konut ilanı | **n=1** |
| Basın | **0 haber** (S79'da açıkça "temas-yok" listesinde) |

### Metrik: Tradia bu vaadi **çürütürdü**

| | |
|---|---|
| Vaat tarihi | 2016 öncesi (söylem) |
| Ölçüm tarihi | 2025 (Sentinel) / 2026-07 (Landsat + ısı haritası) |
| **Sonuç** | **10 yıl sonra Poyrazköy'de fiziksel gelişme, kamu yatırımı, sermaye ve ilan derinliğinin DÖRDÜ DE YOK** |

> ✅ **Tradia'nın kuracağı cümle:** *"Otoyol yakınlığı Beykoz'da tek başına sinyal üretmedi. Büyüme koridorda değil, kıyı bandında ve koruma boşluklarında oldu — ve vaadin adres verdiği Poyrazköy bugün ilçenin en sessiz mahallelerinden biri."*
> 🔴 **Söyleyemeyeceğim:** *"fiyatlar 3-5x olmadı."* **Beykoz için 2026 öncesi fiyat serisi yok** (Analiz S51). Vaadi **fiyat tarafında** ne doğrulayabilirim ne çürütebilirim — çürüttüğüm şey **fiziksel, kamusal ve sermaye ayağıdır.**
> 🟢 K=3 (Sentinel + Landsat NDVI + NDBI çapraz, ikisi ayrı CC)

---

## A · ÖZET TABLOSU

| Vaka | Sinyal tarihi | Kanal | Doğrulama tarihi | **Öndelik** | Sonuç |
|---|---|---|---|---|---|
| **A1 Riva** | 2016-11 / 2017-05 | KAP | 2026-07 | **≈ 9 yıl 2 ay** | ✅ süreç doğru okundu, **süresi okunamazdı** |
| **A2 Tokatköy** | 2022-09 | KAP + nüfus | 2026-07 | **≈ 3 yıl 10 ay** | ✅ en hızlı zincir · ⚠️ uydu sırası ters |
| **A3 İncirköy** | 2016-03 | Sosyal (söylem) | 2026-02 | **≈ 9 yıl 11 ay** | ⚠️ iz vardı, **cümle farklıydı**; asıl ders **pencere hatası** |
| **A4 Poyrazköy** | 2016 (vaat) | söylem | 2025-26 | **10 yıl** | ✅ **vaat çürütüldü** — 4 ayağın dördü de boş |

> **Dört vakanın ortak dersi:** Tradia'nın gördüğü şey **başlangıç**tı, **bitiş** değil. Üç vakada süreç gerçekten başlamıştı; birinde (Poyrazköy) hiç başlamamıştı ve **onu da ayırt edebilirdi.**

---

# BÖLÜM B — SİNYAL TAKSONOMİSİ, OPERASYONEL

## B1 · ASKIDA KALAN KARARLAR — vaat/gerçekleşme

**Girdi:** Basın S83 · **24 meclis kararı** (21'i imar-ilgili) · **2026-01-08 → 2026-06-03**
**İz kanalı:** EKAP (İ62, arşiv **2026-07-10'da bitiyor**) + olay defteri + ilan akışı

### 🔴 Önce ölçüm sınırı — bu metrik henüz hesaplanamaz

| Sınır | Değer |
|---|---|
| En eski karar | **2026-01-08** = **6 ay** |
| En yeni karar | 2026-06-03 = 1 ay |
| Karar yaşı dağılımı (ay) | 1 ay:4 · 2 ay:6 · 3 ay:7 · 4 ay:1 · 5 ay:2 · 6 ay:4 |
| EKAP arşiv bitişi | **2026-07-10** |

> **24 kararın hiçbiri 6 aydan eski değil.** Bir imar kararının ihaleye/ruhsata dönüşmesi Beykoz'da ölçtüğümüz tek örnekte **3-4 ay** sürdü; birçok karar tipinde (tahsis, dönüşüm) yıllar sürer. **Bu pencerede "gerçekleşme oranı" hesaplamak yöntem hatası olur.** Aşağıdaki tek satır bu yüzden bir **oran değil, bir gözlem**.

### ✅ Ölçülebilen tek zincir

| Karar | Tarih | İz | Tarih | Gecikme |
|---|---|---|---|---|
| **M7 — Sokak-cephe rehabilitasyonu (İller Bankası finansmanı)** | **2026-03-06** | EKAP **2 ihale İLANI**: `2026/773577` *Muhtelif Sokak Sağlıklaştırması* + `2026/789813` *Muhtelif Sokaklarda Cephe Sağlıklaştırma* | ~2026-06/07 | **≈ 3–4 ay** |

**Durum:** ikisi de **İLAN aşamasında, sonuç yok** → karar **uygulamaya girdi ama tamamlanmadı.**

### Kalan 23 kararın izleme durumu

| Sınıf | Adet | Not |
|---|---:|---|
| **İz aranabilir, henüz yok** | 20 | pencere çok genç — negatif sinyal **sayılmaz** |
| **Yapısal olarak EKAP'ta görünmez** | 3 | taşınmaz tahsisi (Çengeldere ×2, Çiftlik okul) — tahsis ihale değildir, **iz kanalı yanlış** |

### Mahalle × meclis kararı yoğunluğu *(S83 matrisi — 13 mahalle)*

| Mahalle | Karar | Öne çıkan |
|---|---:|---|
| **Çengeldere** | **4** | 2× Diyanet 29 yıl bedelsiz tahsis · Sağlık Bakanlığı ASH · ticari alan yetkisi |
| **Kavacık** | **3** | ★ **Kavacık Kavşağı imar planı** · Medistate protokolü · ticari alan yetkisi |
| Tokatköy · Riva · Polonezköy | 2'şer | Tokatköy **dönüşüm alanı onayı** · Riva **yol uzatma + ticari alan** |
| İncirköy · İshaklı · Çamlıbahçe · Rüzgarlıbahçe · Mahmutşevketpaşa · Göksu · Baklacı · Çiftlik | 1'er | İncirköy **7.219 m² satış** · İshaklı **tarım arazisi dönüşüm TALEBİ** |

> ★ **Meclis kanalı ısı haritasına 8 yeni mahalle ekledi** (S82'de 5 temas vardı). **Çengeldere ve Kavacık, ısı haritasında görünmeyen bir yoğunluk taşıyor** — bu, meclis ayağının ısı tablosuna **9. ayak** olarak eklenmesi gerektiğini gösteriyor. *(SIG6 önerisi)*

### Metriğin kendisi — ne zaman hesaplanabilir

```
vaat_gerçekleşme_oranı = (izi bulunan karar) / (izi aranabilir + yaşı ≥ eşik olan karar)
eşik: ihale-üretebilen karar için ≥6 ay · tahsis/dönüşüm için ≥24 ay
BUGÜN: payda = 4 karar (≥6 ay), pay = 1  →  n=4, ORAN YAYIMLANMAZ
```

## B2 · HABER DOLUM TAKİBİ — beklenen yansıma penceresi

Olay defterinin 13 olayına **Beykoz'un kendi ölçtüğü gecikmelerle** pencere eklendi:

### Beykoz'da ölçülmüş geçiş süreleri — **hepsi n=1**

| Geçiş | Süre | Kaynak | ⚠️ |
|---|---|---|---|
| KAP arsa/ihale → fiziksel inşaat | **7,6 – 8,4 yıl** | Riva | n=1, **sebebi dava** — norm değil |
| KAP sözleşme → piyasada ilan görünürlüğü | **≈ 3 yıl 10 ay** | Tokatköy | n=1 |
| Yapı ruhsatı → ek ruhsat (etap) | **2 yıl 2 ay** | Riva 2018-09 → 2020-11 | n=1 |
| Meclis kararı → ihale ilanı | **≈ 3 – 4 ay** | Sokak-cephe | n=1 |
| Kurumsal işlem → piyasa fiyatlaması (söylem) | **≈ 4,5 ay** | İncirköy | n=1 |
| İhale sonucu → tamamlanma/kabul | **ÖLÇÜLEMEDİ** | — | kabul ilanı arşivde ayrıştırılmadı (İ63) |

> 🔴 **Bunlar norm değil, tek gözlemdir.** Aşağıdaki "beklenen pencere" sütunu **bu tek gözlemlerden türetilmiş bir bekleme aralığıdır**, istatistik değildir.

### Olay defteri × beklenen yansıma penceresi

| ID | Olay | Evre | Sinyal tarihi | **Beklenen yansıma penceresi** | Durum |
|---|---|---|---|---|---|
| **BEY-01** | Şişecam→Çelikler İncirköy | **arsa devri tamam, proje yok** | 2026-02 | imar/ruhsat izi: **1–2 yıl** · fiziksel: **3–8 yıl** | 🔴 SICAK |
| **BEY-02** | Kalyon "Riva Country" 1.300 villa | **doğrulanmamış** | — | ilk kanal teyidi: **belirsiz** | 🟡 K=1 |
| **BEY-03** | Riva Metruk Otel → Gençlik Kampı | **yıkım tamam** | 2026-07 | kamu yapım ihalesi: **6 ay – 2 yıl** | 🔴 SICAK |
| **BEY-04** | Köseler davası 2. dalga | **yargı** | 2026-07 | 3. dalga / iddianame: **aylar** | 🔴 SICAK |
| **BEY-06** | Tokatköy dönüşüm + 1071 tapu | **konut teslim + alan onaylı** | 2022 / 2026-01 | piyasada zaten görünür ✅ | işliyor |
| **BEY-08** | Kavacık Kavşağı + Medistate | **imar planı kararı** | 2026-01/02 | ihale/ruhsat: **1–2 yıl** | 🔴 SICAK |
| **BEY-09** | Çengeldere kamu-kampüs zinciri (4 karar) | **tahsis** | 2026-02/06 | yapım ihalesi: **1–3 yıl** | işliyor |
| **BEY-10** | İshaklı tarım arazisi dönüşüm **talebi** | **talep** | 2026-05 | onay/ret: **belirsiz** | işliyor |
| **BEY-11** | İncirköy 7.219 m² belediye satışı | **satış kararı** | 2026-05 | ihale sonucu: **3 ay – 1 yıl** | işliyor |
| **BEY-05** | Çubuklu vapur iptali | — | 2025-07 | ⬜ **SÖNDÜ** — 2026'da devam haberi 0 | söndü |
| BEY-07 | Şahinkaya hastanesi | belirsiz | 2025-07 | ⚫ basın sessiz | sessiz |
| BEY-12 / BEY-13 | Festival · 5 mahalle altyapı | rutin | 2026 | yıllık / 1 yıl | işliyor |

> **Kural:** *bir olay beklenen penceresini aşar ve iz gelmezse durum `işliyor` → `askıda` olur; iki pencere aşılırsa `söndü`.* Şu an **1 olay söndü** (BEY-05, vapur — 12 aydır devam haberi yok).

## B3 · MEGA-PROJE YAKINLIK ENDEKSİ

**Yöntem:** mahalle centroid'i ↔ mega-proje mahallesi centroid'i arası kuş-uçuşu (Haversine) · evre ağırlığı ile üstel mesafe azalımı
`skor = Σ ağırlık × exp(−km / 3)`

| Mega-proje | Mahalle | Evre | Ağırlık |
|---|---|---|---|
| Gümüşsuyu 500 Yataklı Hastane | Gümüşsuyu | inşaat + devreye alma | 1,0 |
| Riva Gençlik Kampı + EKGYO Düşler Vadisi | Riva | yıkım tamam / inşaat | 1,0 |
| Tokatköy Kentsel Dönüşüm alanı | Tokatköy | onaylı + teslim | 1,0 |
| Türk-Alman Üniversitesi kampüsü | Çubuklu | sürekli, 5 ilan açık | 0,7 |
| PEKGY Tera Orman | Polonezköy | inşaat başladı | 0,6 |
| Çelikler İncirköy 117 bin m² | İncirköy | **arsa devri — proje yok** | 0,4 |

### Sonuç (ilk 12)

| # | Mahalle | Skor | En yakın mega-proje |
|---:|---|---:|---|
| 1 | **Gümüşsuyu** | **1,85** | kendisi (hastane) |
| 2 | **İncirköy** | **1,69** | kendisi · Gümüşsuyu 0,8 km |
| 3 | **Merkez** | **1,54** | Gümüşsuyu 0,9 km · İncirköy 1,6 km |
| 4 | **Tokatköy** | **1,43** | kendisi |
| 5 | **Soğuksu** | **1,41** | İncirköy 1,0 km · Gümüşsuyu 1,6 km |
| 6 | Paşabahçe · Çiğdem | 1,36 | Çubuklu ~1,3 km · İncirköy ~1,9 km |
| 8 | **Çubuklu** | **1,31** | kendisi (kampüs) |
| 9 | Ortaçeşme · Akbaba | 1,22 | Tokatköy ~1,3–2,0 km |
| 11 | Elmalı | 1,20 | Gümüşsuyu 2,0 km |
| 12 | Acarlar | 1,16 | İncirköy 1,5 km |
| — | **Riva** | **1,04** | kendisi — **coğrafi olarak izole** (en yakın diğer proje 13,1 km) |
| — | Kavacık | 0,84 | Çubuklu 1,4 km |

> ⚠️ **Üç sınır:** (1) **mahalle centroid'i kullanıldı, proje noktası değil** — Gümüşsuyu hastanesi mahallenin neresinde bilinmiyor; (2) **kuş uçuşu, yol mesafesi değil** — Beykoz'un topoğrafyasında ikisi çok ayrışır; (3) ağırlıklar **SIG5 kararıdır**, tartışmaya açık.
> ★ **Endeksin okuttuğu şey:** Gümüşsuyu–İncirköy–Merkez–Soğuksu **bitişik bir küme** oluşturuyor; hastane, Şişecam arazisi ve eski merkez 2 km'lik bir daire içinde. **Bu küme ısı haritasında ayrı ayrı görünüyordu, bir arada değil.**

## B4 · ULAŞIM ENDEKSİ — **Beykoz dersi etiketiyle**

**Girdi:** MAP24/25 otoyol-km + net yapılaşma değişimi

| Grup | n | Ort. net (p) | Yıllık eğim |
|---|---:|---:|---:|
| Koridora yakın (<3 km) | 11 → **9 temiz** | +2,26 → **+2,77** | +0,10 |
| Koridora uzak (≥3 km) | 6 → **5 temiz** | −2,82 → **−3,38** | −0,72 |

### 🔴 Ama endeks körü körüne kullanılamaz — üç kanıt

1. **TT-MAP'in karışım uyarısı:** koridora yakın mahalleler aynı zamanda Boğaz kıyı bandı → **köprü etkisi ile kıyı etkisi ayrıştırılamadı.**
2. **Landsat 1985→2025:** kıyı bandı 2015→2025 NDVI eğimi **−0,003 = düz** → köprü sonrası hızlanan dönüşüm **yok**.
3. **Vaadin adresi boş çıktı:** Poyrazköy (otoyola 4,0 km, köprü ayağının mahallesi) **0/8 ayak** (§A4).

> ✅ **Endeksin taşıyacağı etiket:**
> **`ULASIM_ENDEKSI · BEYKOZ_DERSI: otoyol yakınlığı tek başına sinyal ÜRETMEDİ; büyüme kıyı bandında ve koruma boşluklarında oldu.`**
> Endeks başka ilçeye taşınırken bu etiket **birlikte taşınır** — aksi halde Beykoz'da çürütülen varsayım yeni ilçede yeniden üretilir.

## B5 · KULLANIM-SEBEBİ (amaç) HARİTASI

**Girdi:** İhale İ63 + **İ65 v2** (9 PDF kurtarması işlendi)

| Amaç | İ63 | **İ65 v2** | Δ |
|---|---:|---:|---:|
| Eğitim | 18 | 18 | — |
| **Park** | 7 | **11** | +4 |
| **Kamu binası** | 7 | **10** | +3 |
| Ulaşım | 5 | 6 | +1 |
| Altyapı | 3 | 5 | +2 |
| Sağlık | 3 | 3 | — |
| Kıyı | 2 | 2 | — |
| Dönüşüm | 0 | 1 | +1 *(şüpheli — idare İzmir)* |
| **Belirsiz** | 17 | **8** | **−9** ✅ |
| **Sinyal / Bakım** | 62 / 82 | **64 / 80** | +2 |

### Mahalle amaç etiketleri *(değişmedi — İ65 doğruladı)*

| Mahalle | Amaç | Kanıt |
|---|---|---|
| **Çubuklu** | 🎓 EĞİTİM | 19 ihale, 8 gelişim / 266,3 M TL, **8/8 eğitim** |
| **Gümüşsuyu** | 🏥 SAĞLIK | 9 ihale, 3 gelişim / **4.194,8 M TL**, 3/3 sağlık |
| **İncirköy** | 💰 SERMAYE/ARSA | Çelikler 171,5 M$ · 0 gelişim ihalesi |
| **Polonezköy** | 🌲 SERMAYE ↔ KORUMA | PEKGY 70 villa **↔** kamu parası Tarım-Orman Bakanlığı'ndan doğa korumaya |
| **Riva** | 🔀 KARMA | EKGYO 776 b.böl. + **Gençlik Kampı (kamu)** + kıyı altyapısı |
| **Tokatköy** | 🏘️ KONUT — tamamlandı | KAP + 15 ilan + meclis dönüşüm alanı onayı |

> ⏸️ **Arazi-imar matrisi (MAP32 + İ66) henüz YOK.** Amaç etiketi şu an **kamu ihalesi kategorisinden** türetiliyor — *"para ne için harcandı"*, *"arazi ne için imarlı"* değil. **İ64'ün keşfi** ara bilgiyi veriyor: Beykoz ağırlıklı **koruma amaçlı imar rejiminde** (1/25.000 KANİP + Boğaziçi öngörünüm + SİT). Tam matris gelene kadar amaç etiketleri **kamu-harcama eksenlidir**, imar ekseni değil.

## B6 · ARZ-KISITI PRİMİ — 🟡 **HİPOTEZ, ölçülemedi**

**TTA98 hipotezi:** 17 havza/orman kısıtlı mahalle arzı dondurur → kısıtsız komşuları **arz kıtlığı primi** kazanır. En değerli kesişim: *kısıtsız + Boğaz/orman manzaralı + erişimi iyi.*

### Neden ölçemedim

| Gereken | Durum |
|---|---|
| İSKİ havza sınırı **resmî haritası** | ❌ Basın S83: *"RESMİ HARİTA HÂLÂ YAKALANMADI"* |
| Boğaziçi öngörünüm/geri-görünüm sınırı | ❌ TTA98 açık sorusu |
| Mahalle bitişiklik grafiği | ❌ OSM poligonları TTA96'da çekildi ama **komşuluk matrisi çıkarılmadı** |
| Kısıtlı/kısıtsız ikili sınıflandırma | 🟡 TTA98'de **[HİPOTEZ-coğrafi]** etiketli 17 mahalle listesi var, İSKİ doğrulaması yok |

### Elimdeki dolaylı gözlem — kanıt değil

| Mahalle | Arsa medyanı TL/m² | Not |
|---|---:|---|
| **Polonezköy** | **118.966** (n=6) | %98 orman, **korunan** — Beykoz'un **en pahalı arsası** |
| Kavacık | 113.750 (n=11) | doymuş iş merkezi |
| İncirköy | 93.129 (n=12) | Şişecam arazisi komşuluğu |
| Yalıköy | 87.324 (n=3) | kıyı |
| — | — | |
| Cumhuriyetköy | 10.162 (n=22) | kuzey kırsal, büyük parsel |
| Anadolufeneri | 11.058 (n=25) | kuzey uç |

> 🟡 **Gözlem:** *Beykoz'un en pahalı arsası, %98'i korunan ormanla kaplı bir mahallededir.* Bu, "kısıt fiyat üretir" hipoteziyle **tutarlı** — ama **kanıt değil**: parsel büyüklüğü, manzara ve erişim de aynı yönde çalışıyor ve ayrıştırılmadı.
> **Etiket: `[HİPOTEZ] · ölçülemedi · ön koşul: İSKİ havza haritası + komşuluk matrisi`**

---

# BÖLÜM C — İLERİ WATCHLIST (12–24 ay)

> **Bu bir alım-satım listesi değildir.** Sıralama **sinyal yoğunluğuna** göredir — hangi mahallede kaç bağımsız kanal aynı anda hareketli. Fiyat öngörüsü yoktur.

## C0 · ★★ WATCHLIST'İN TEPESİ: ASKI × SERMAYE EŞZAMANLILIĞI

**Bu, watchlist'in tek satırlık cevabıdır.** 1/5000 Boğaziçi KA plan revizyonu **31.12.2025–29.01.2026** arasında **7 mahallede askıya çıktı** (İ66) ve o 7 mahallenin **en az 4'ünde aynı dönemde kurumsal sermaye pozisyon aldı** (T126).

| Askıdaki mahalle | Sermaye | Ölçek | Kanıt |
|---|---|---|:-:|
| **İncirköy** | **Çelikler Taahhüt** + **Envoy Gayrimenkul** | 117.018,95 m² / 171,5 M USD · **300 konut / 65.000 m²** | 🟢 KAP + 🟡 web |
| **Gümüşsuyu** | **NEF (Timur Holding)** — Karlıtepe | **~1.300 konut / 220.000 m²** | 🟡 GYODER |
| **Soğuksu** | **Sur Yapı** — kentsel dönüşüm | ölçek yok | 🟡 web |
| **Acarlar** | *(sermaye adı yok)* | ilçenin en derin fiyat hücresi (n=191) | — |
| Çubuklu *(askıda)* | **MESA MESKEN** (Çubuklu 28 + Orman 2) | ölçek yok | 🟡 GYODER |
| Çiğdem · Rüzgarlıbahçe *(askıda)* | — | — | — |
| *(ayrı süreç)* **Polonezköy** | **PEKGY Tera Orman** | 70 villa | 🟢 KAP — KA planı **2. askı itirazında** |

> 🔴 **Ne demek DEĞİL:** *"sermaye askıyı biliyordu"* · *"askı onaylanacak"* · *"bu mahalleler değerlenecek"*. **Nedensellik kurulmadı, sıralama bile ölçülmedi** — yalnız Çelikler'de tarih net (işlem 2026-02-20, askı 31.12.2025-29.01.2026 → **askı önce**); diğer üçünde giriş tarihi **yok**.
> ✅ **Ne demek:** *Hukuki belirsizliğin (askı) ve sermaye hareketinin aynı takvim penceresinde bulunduğu dört mahalle var — ve askının sonucu dördünde de doğrudan izlenebilir tek tetikleyicidir.*

### Ortak tetikleyici — dördünde de aynı

| Tetik | Anlam |
|---|---|
| **T-A1** | Askı **onaylanır** → kısıt netleşir, geliştirme yolu açılır |
| **T-A2** | **İtiraz kabul / revizyon** → belirsizlik uzar, sermaye bekler |
| **T-A3** | Askı sonrası ilgili mahallede **ilk yapı ruhsatı** |
| **T-A4** | Askı sonrası **arsa ilan akışında sıçrama** (Analiz uzantı turu) |

> **Yanlışlanabilir öngörü (ortak):** *Askı 2026-01-29'da kapandı. **2027-01'e kadar** bu dört mahallenin hiçbirinde askı sonucu ilan edilmez **veya** ilk yapı ruhsatı çıkmazsa → eşzamanlılık bir **tesadüf** olarak kalır ve "sermaye plan sürecini izliyor" okuması **zayıflar**.*

## C1 · Watchlist tablosu

| # | Mahalle | Isı | Güven | Gerekçe (hangi ayaklar) | **Tetikleyici** — şu olursa güçlenir | **Yanlışlanabilir öngörü** |
|---:|---|:-:|:-:|---|---|---|
| **1** | **İncirköy** | 3/8 | **%70** | ★ **ASKI × SERMAYE** (§C0) · **iki mega proje**: Çelikler 117 dönüm (🟢KAP K=3) + **Envoy Vadi 300 konut / 65.000 m²** (🟡) · yapı: **2.043 bina 1980-öncesi = ilçe #1 eski stok** · mega-proje yakınlık **#2 (1,69)** · meclis (7.219 m² belediye satışı) · **öngörünüm kuşağı** (en kısıtlı) · **fiziksel değişim henüz SIFIR** | ① **T-A1/A2 askı sonucu** ② Çelikler imar başvurusu ③ **KAP kancası T1-T5** ④ Envoy'un ilk ruhsatı ⑤ 11 parselden birinde ruhsat | **2027-07'ye kadar** İncirköy'de imar/ruhsat izi **veya** kote firma bildirimi gelmezse → *arsa bankası* senaryosu güçlenir, geliştirme senaryosu zayıflar |
| **2** | **Tokatköy** | 4/8 | **%70** | Zinciri kapanmış tek mahalle (KAP + NDVI −0,134 + 15 ilan) · dönüşüm alanı **meclis onaylı** (2026-01) · deprem 30 ağır hasar · 995 eski bina · nüfus −%14 | ① 1071 tapu olayının **gövdesi okunursa** ② 2. faz dönüşüm ihalesi ③ Çamlıbahçe sınır düzenlemesinin sonucu | **2027 ölçümünde** Tokatköy NDVI'si **daha fazla düşmezse** → dönüşümün ilk fazı bitmiş, ikinci faz başlamamış demektir |
| **3** | **Riva** | 6/8 | **%65** | İlçenin en çok ayaklı mahallesi · ★ **ÜÇ mega proje**: EKGYO Düşler Vadisi **708 konut + 68 dükkan** (🟢KAP) · Kalyon Riva Country **1.300 villa** (🟡) · **Ion Riva 933 birim / 84 ha / 2027 teslim** (🟡) · Gençlik Kampı (kamu) · fiyat İstanbul'la **başa baş** (+%26,0 ↔ +%25,3) · **uydu ayağı 4 turdur ölçülmüyor** | ① **Kalyon lansmanı / ilk basın izi** (BEY-02) ② **Ion Riva'nın ilk KAP/ruhsat izi** ③ Gençlik Kampı **yapım ihalesi** ④ Riva'da ilk **"Emlak Konut" atıflı ilan** (Tokatköy emsali) | **F2 öngörüsü, tarihli:** yer teslimi 2025-04 ise TT-MAP'in **2026-2027** Riva ölçümünde yapılaşma yükselmeli. **Ön koşul: Riva'nın ölçülmesi** — MAP24 flatten, MAP28'de 2020+2025 epokları boş. **Ölçüm gelmezse öngörü test edilemez, zincir "bilinmiyor" kalır.**<br>**İkinci öngörü:** Ion Riva 2027 teslim diyorsa **2027'ye kadar** Riva'da ruhsat/inşaat izi görünmeli — görünmezse üç mega projenin **ikisi tek kanallı iddia** olarak kalır |
| **4** | **Çengeldere** | 1/8 | **%55** | ⚠️ **Isı haritasında görünmüyor ama meclis kanalında #1** (4 karar: 2× Diyanet tahsisi + Sağlık Bakanlığı ASH + ticari alan yetkisi) · konut medyanı 153.866 (n=24) | ① 4 tahsisin **yapım ihalesine** dönmesi ② ticari alan yetkisinin ruhsata dönmesi | **2028'e kadar** 4 tahsisin hiçbiri yapım ihalesine dönmezse → tahsisler **askıda karar** sınıfına geçer (B1 metriği) |
| **5** | **Çubuklu** | 4/8 | **%75** | Kamu gelişiminde 5 yıl kesintisiz (19 ihale) · **5 ilan hâlâ açık** · radar inşaatı doğruladı (%6,9) · 1.414 eski bina · POI 26 | ① kampüs dışına taşan ilk **yol/altyapı** ihalesi ② ilk **kamulaştırma** kaydı (şu an 0) | **2028'e kadar** kampüs çevresinde ayrı altyapı ihalesi çıkmazsa → İ62'nin *"kurum parseline kapalı gelişim"* tezi doğrulanmış olur; mahalleye yayılma **olmayacak** demektir |
| **6** | **Gümüşsuyu** | 3/8 | **%70** | ★ **ASKI × SERMAYE** (§C0) · **NEF Karlıtepe ~1.300 konut / 220.000 m²** (🟡 GYODER) — ilçenin **en büyük tek özel konut projesi iddiası** · mega-proje yakınlık **#1 (1,85)** · 4.194,8 M TL hastane · radar doğruladı (%11,9) · arsa medyanı 62.888 TL/m² (n=34) · 1.354 eski bina | ① **T-A1/A2 askı sonucu** ② **NEF projesinin ilk ruhsat/KAP izi** ③ hastanenin kabul/açılış ilanı ④ İncirköy-Merkez kümesiyle birlikte hareket | **Hastane açıldıktan 24 ay içinde** Gümüşsuyu-İncirköy-Merkez kümesinde yeni kamu **veya** özel yapım ihalesi çıkmazsa → İ62'nin *"kamu yatırımı noktasaldır, yayılmaz"* tezi ikinci kez doğrulanır.<br>**NEF testi:** 1.300 konutluk bir proje **2027'ye kadar** hiçbir kanalda (ruhsat/KAP/basın) iz bırakmazsa → iddia **tek kanal** olarak kalır |
| **7** | **Soğuksu** 🆕 | 1/8 | **%50** | ★ **ASKI × SERMAYE** (§C0) · **Sur Yapı kentsel dönüşüm** (🟡, ölçek bilinmiyor) · mega-proje yakınlık **#5 (1,41)** — İncirköy'e **1,0 km** · konut medyanı 141.046 (n=20) · hedonik FE: **+%84,2** (Kavacık bazlı) | ① **T-A1/A2 askı sonucu** ② Sur Yapı projesinin ölçeği/ruhsatı ③ 6306 riskli alan ilanı | **2027-07'ye kadar** Sur Yapı'nın Soğuksu projesi için **ölçek bilgisi bile** çıkmazsa → aktör listesinden **İZLENEN'e** düşer |

## C2 · ⚠️ TERS SİNYAL — dikkat etiketli

### T1 · ORTAÇEŞME — *"mevcut stok hareketli, yeni fiziksel yatırım yok"*

> **Çelişki çözüldü (SIG4 §3.2):** F2'nin *"lojistik"*i ile üç imzanın *"inşaat yok"*u **çelişmiyor** — F2 **mevcut kullanımı** ölçtü (depo/ofis kiralık akışı, m² kirası ilçenin en düşüğü 167 TL), üç imza **yeni yapımı** ölçtü. Doğru profil: **mahalle işliyor, büyümüyor.**


| Ayak | Durum |
|---|---|
| İlan akışı | **21 ilan, 21/21'i Haziran-Temmuz 2026** · medyan **59.091 TL/m²** = ilçenin en ucuzu |
| Fiziksel inşaat | 🔴 **ÜÇ İMZA DA YOK** — NDVI (MAP28) artış · NDBI (TT-AI) net +0,009 ≈ 0 · **radar VV −2,98 dB** |
| MAP26'nın %17,1'i | **ARTEFAKT — kesinleşti** (fenoloji) |
| Kamu | tek park ihalesi | Sermaye | yok |

> **Dikkat etiketi:** *Ortaçeşme'de son iki ayda yoğun bir satış ilanı akışı var ve zeminde ölçülebilir bir inşaat yok. Satılan büyük olasılıkla **mevcut stok**; "gelişen bölge" anlatısının fiziksel karşılığı üç bağımsız ölçümde bulunamadı.*
> **Ayırt edici test:** ilan akışı **3. turda da devam eder ama radar/optik hâlâ sıfır gösterirse** → arz cephesinde bir hareket var, yapı cephesinde yok. Bu, *stok çıkışı* ile *gelişim* arasındaki farktır.

### T2 · YAVUZ SELİM ve GÖZTEPE — *"dip mi, tuzak mı?"*

| | Yavuz Selim | Göztepe |
|---|---|---|
| Yıllık nominal *(4 aylık→yıllık)* | **−%14,8** | **±%0,0** |
| **Reel** *(TÜFE %32,11)* | **−%35,5** | **−%24,3** |
| Örneklem | n 22→28 (sağlam) | n 27→43 (sağlam) |
| Isı skoru | 1/8 (yalnız fiyat) | 1/8 (yalnız fiyat) |
| Uydu | ⬜ flatten (Y.Selim) | −6,6 p, güven orta (Göztepe) |
| Kamu gelişim | 1 ihale / 74,1 M TL | **0** |
| Sermaye · Basın · Söylem | yok · 0 · 0 | yok · 0 · 0 |
| Yapı | 1.411 bina, **30 eski** (yeni doku) | 1.040 bina, 189 eski · 19 ağır hasar |
| Arsa medyanı | 30.521 TL/m² (n=48 — **ilçenin en derin arsa hücrelerinden**) | 81.247 (n=2, ince) |

**🔴 "Dip" ile "tuzak"ı ayıracak veriler — hangisi geldiğinde ne söylenir:**

| Ayırt edici veri | **DİP** işareti | **TUZAK** işareti | Kimden |
|---|---|---|---|
| **Fiyat serisinin 3. dönemi** (2026-08+) | düşüş durur / toparlar | düşüş sürer | Analiz, 3. tur çekim |
| **İlan yaşı / stokta kalma süresi** | kısalır | uzar | Analiz (**henüz ölçülemiyor** — 3-4 tur şart) |
| **Kompozisyon** | aynı segment ucuzluyor | pahalı segment listeden çıkmış = **yöntem artefaktı** | Analiz (mahalle-FE — **ikisi de model dışı: n<8**) |
| **1/5000 askı kapsamı** | ikisi de **askı listesinde YOK** → hukuki belirsizlik yok | — | İ66 |
| **Kamu/sermaye ayağı** | herhangi bir ayak ısınır | dört tur boyunca sıfır kalır | İhale + Borsa |
| **Meclis kanalı** | imar/tahsis kararı gelir | hiç karar gelmez (ikisi de S83'ün 13 mahallesinde **yok**) | Basın |

> 🔴 **Bugün ikisini ayıramıyorum — ve ayırıyormuş gibi yapmıyorum.** İkisinde de fiyat dışında **hiçbir ayak sıcak değil**; bu, "ucuzladı çünkü fırsat" değil, **"ucuzladı çünkü hiçbir şey olmuyor"** okumasına daha yakın duruyor. Ama **4 aylık pencere** ve **kompozisyon etkisi ayrıştırılmadı** — bu bir yargı değil, bir uyarıdır.
> ⚠️ Aynı tabloda **Çavuşbaşı Çiftlik +%90,2** var ve **kullanılmadı**: n=10→17, yıllıklandırma artefaktı (F4 kural 5).

## C3 · İzleme kancaları — tetik geldiğinde ne olacak

| Kanca | Nerede kurulu | Tetik | Aksiyon |
|---|---|---|---|
| **İZLEME-01 · İncirköy KAP kancası** | Borsa S59 (tanım kayıtta, **cron KURULMADI** — Patron onayı) | T1 "Çelikler" · T2 "İncirköy" · T3 11 parselden biri · T4 SISE devir teyidi · T5 Çelikler halka arz | `02_CC_STATE/` bildirimi + watchlist güncelleme |
| **Olay defteri** | Basın S85 (13 olay, kalıcı) | pencere aşımı | `işliyor` → `askıda` → `söndü` |
| **Meclis izleme** | Basın S83 (24 karar) | EKAP'ta ilan/sonuç | B1 vaat-gerçekleşme oranı (payda ≥6 ay olunca) |
| **OPERA DIST** | ⏸️ **BEKLEMEDE** | Earthdata token geçerli olunca | Riva dahil 45 mahallede bağımsız inşaat tespiti |

---

# CEVAPLAYAMADIKLARIM · V16

## Ölçemediklerim

1. **Gerçek backtest** — dört vaka **sonucu bilinerek** seçildi. 2017'de sinyal veren *tüm* mahallelerin listesi ve kaçının tuttuğu **yok**. A4 bunu dengelemek için var ama bir karşı-örnek, bir kontrol grubu değildir.
2. **Vaat-gerçekleşme oranı (B1)** — payda 4 karar. **Oran yayımlanmadı.**
3. **Arz-kısıtı primi (B6)** — İSKİ havza haritası + komşuluk matrisi yok → **hipotez etiketli**.
4. **Arazi-imar matrisi (B5)** — MAP32 + İ66 gelmedi; amaç etiketleri **kamu-harcama eksenli**, imar eksenli değil.
5. **Fiyat delta / stokta kalma süresi** — Analiz S51: gerçek çakışma **n=1**, ölçülemez. C2-T2'nin en kritik ayırt edici verisi **bu yüzden yok**.
6. **Riva'nın uydu ölçümü** — 4 turdur yok. **F2'nin yanlışlanabilir öngörüsü hâlâ koşamıyor.**
7. **2026 öncesi Beykoz fiyat serisi** — arşivde yok (S51 kesin). A4'te vaadi fiyat tarafında ne doğrulayabildim ne çürütebildim.
8. **1071 tapu** — beş turdur açık; S85 havuzda 0 hit.

## V16 — kendi işime itiraz

1. **Denetleyen yine benim.** §A backtest zincirleri ve §C watchlist skorları **benim ürettiğim** yorumlardır; kaynak CC'lerin ölçümü değil. **Kural 4 beşinci turdur karşılanmıyor.**
2. **"Öndelik" metriği yanıltıcı olabilir.** "9 yıl 2 ay önden görürdük" cümlesi güçlü duruyor ama **karşılaştırma noktası bir seçimdir**: 2017 KAP ilanı ↔ 2026 fiyat ölçümü. Başka bir bitiş noktası (2018 yapı ruhsatı, 2025 inşaat) çok daha kısa süreler verirdi. **Tek sayıya indirgenmemeli** — §A0'daki şerhle birlikte okunmalı.
3. **A3'te Tradia 2016'da o videoyu görmezdi.** Sosyal o kanalı **2026-07'de** hasat etti; 2016'da arşivde yoktu. "Kanalda vardı" ile "bizde vardı" farklıdır ve ikincisi **yanlış olurdu**.
4. **B3 endeksi mahalle centroid'i kullanıyor**, proje noktası değil. Gümüşsuyu hastanesinin mahalle içindeki yeri bilinmiyor; kuş uçuşu Beykoz topoğrafyasında yol mesafesinden ciddi sapar. **Sıralama gösterge, mesafe değil.**
5. **C2-T2'de bir yargıya yaklaştım** ("ucuzladı çünkü hiçbir şey olmuyor") ve bunu **uyarı** olarak etiketledim. Yine de sınırdayım: 4 aylık pencere ve kompozisyon etkisiyle bu okuma yanlış çıkabilir. **Karar Patron'un.**
6. **B2'nin tüm geçiş süreleri n=1.** "Beklenen yansıma penceresi" sütunu tek gözlemlerden türetilmiş bir **bekleme aralığıdır**, istatistik değil. Başka ilçeye taşınırsa bu şerh **birlikte taşınmalı**.
7. **Kalyon 1.300 + Ion 933 villayı watchlist gerekçesine yazdım** (Riva, C1-#3) — **ikisi de tek kanal (T126 açık web)**. Skoru artırmadılar, gerekçe metninde 🟡 etiketiyle duruyorlar. Yine de bir okuyucu bunları veri sanabilir. **Riva'nın "üç mega proje" tanımının 2/3'ü doğrulanmamıştır.**
9. **★ ASKI × SERMAYE bulgusunu watchlist'in tepesine koydum — ve bu benim en riskli kararım.** Eşzamanlılık gerçek (İ66 askı listesi + T126 aktör listesi, iki ayrı CC), **ama nedensellik yok ve sıralama üç mahallede ölçülmedi.** Bir okuyucu bunu kolayca *"sermaye içeriden biliyor"* diye okuyabilir; §C0'a üç ayrı yasak cümle koydum ama **bu okumayı tamamen engelleyemem.** Eğer bulgu ileride tesadüf çıkarsa, sorumluluk onu tepeye koyan bendedir.
10. **Sermaye payı üç turda %95 → %50 → %36 → %23 diye düştü** ve her düşüş paydaya yeni aktör girmesinden geldi. **Payda hâlâ tamamlanmamış olabilir** — %23 bugünkü en iyi okumadır, nihai değildir. Doğrulanmış birimlerle hesap %91 verir; **iki uç arasındaki mesafe bu ayağın gerçek belirsizliğidir.**
8. **KVKK (#31):** §A ve §B'de kamu görevlisi/kurumsal lider isimleri geçiyor. Belge **iç kullanım**; dış sunumda maskeleme Patron kararı.

---

**Kaynaklar (#21-B):** CC-Borsa S54-**S59** (KAP idx 1559473 · 709039 · 887441 · 1274021 · 612682) · CC-Analiz S46-**S51** · CC-Basın S79-**S85** (`vaka_beykoz_meclis_S83.json` 24 karar · `beykoz_olay_defteri.json` 13 olay) · CC-Sosyal S202-**S206** (`ZyIdHE3QvoM` · `Bm-2LwEpclk` · `6Nu3hEK2Wj4`) · CC-TT-MAP MAP24-25-27-28-**30** · CC-TT-AI TTA96-98 + **MAP28 non-kanon çapraz** · CC-İhale İ62-63-64-**İ65** · CC-Finans **F4** · CC-Signals SIG1-4

**Üreten:** CC-Signals SIG5 · **Denetleyen:** ☐ (V16-1)
**Kod:** `~/signals/kod/sig5_backtest_watchlist.py` (B1 meclis çapraz + B3 yakınlık endeksi)
**$0 · A04 · V16 · #21-A/B/C · #34 · dönem etiketi zorunlu · SİLME-YOK**
