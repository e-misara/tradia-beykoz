# CC-Finans · F2 — BEYKOZ DEĞERLENDİRMESİ
**Sprint:** F2 · **Tarih:** 2026-07-25 · **Üreten:** CC-Finans (talep tarafı)
**Girdi:** 7 CC vaka raporu · `~/Desktop/TT-Tüm CC/beykoz_vaka/`
**Yöntem:** rapor-okuma. Ham havuzlara inilmedi.
**Disiplin:** $0 · A04 · V16 · #21-B (her sayıda kaynak CC) · #34 kaynak-karıştırma yasağı · SİLME-YOK
**Denetleyen:** ☐ boş — CC-Finans kendi çıktısını onaylayamaz (F1 kural 4)

---

## 0. Revizyon notu — bu rapor bir kez yeniden yazıldı

İlk okumamda klasörde **5 rapor** vardı; Analiz ve Sosyal yoktu. Onları kendi CC
dizinlerinden okudum (Analiz'in **yoklama**'sı, Sosyal'in **S201**'i) ve F2'yi
yazdım. Yazarken ikisi klasöre düştü — ve ikisi de **daha güçlü sürümdü**:

| CC | İlk okuduğum | Klasöre gelen | Fark |
|---|---|---|---|
| Analiz | `vaka_beykoz_analiz_yoklama.json` (TT-HAFIZA takılı **değil**) | **S46 tam raporu** (TT-HAFIZA **takılı**, 797 CSV kaydı) | ticari kira m²/ay **açıldı**, oda %58,8, makas sorusu **cevaplandı** |
| Sosyal | S201 ("havuzum kör") | **S202** (6 yerel video hasat edildi) | Beykoz atıf 1→6, Paşabahçe 0→**3** |

**Bu yüzden iki sonucumu geri alıyorum:**
1. "Kira getirisi hesaplanamıyor" — **yanlıştı**. Kira tarafı artık ölçülü
   (Kavacık 442 TL/m²/ay, n=33). Getiri hâlâ tamamlanamıyor ama sebebi
   değişti (§1.1-c).
2. "Sosyal'e yanlış soru soruldu, katkı veremez" — **eksikti**. Sosyal aynı
   gün kendi boşluğunu kapattı ve Paşabahçe dosyasına **söylem kanıtı** getirdi.

Ders, denetimin kendisine ait: **bir CC'yi bir anlık kesitinden yargılamak,
o CC'nin o gün yaptığı işi kaçırır.**

---

## 0.1 F1'de yaptığım bir hatayı düzeltiyorum

F1'de "İhale havuzunda İstanbul kaydı 0, Beykoz 0" dedim ve "kamu yatırımı
sinyali yok" sonucuna vardım. **Yanlıştı.** `ihale_takvim.jsonl` (40 satır)
İhale'nin *takvim* dosyasıydı; asıl arşiv `bulten_yapim.jsonl` — İhale orada
**144 Beykoz ihalesi** buldu. Yanlış dosyaya baktım. F1'in **S7 siparişi
geçersizdir.**

Bunun dersi F2'nin de yöntemi oldu: *bir CC'nin kapsamını yokluğuyla değil,
o CC'ye sorarak ölçersin.*

---

# G1 — BEYKOZ YATIRIM ÇERÇEVESİ

**Güven yüzdeleri kalibre edilmiş yargıdır, olasılık hesabı değildir (A04).**

| Bant | Anlamı |
|---|---|
| %85–95 | 2+ bağımsız CC · tarihli birincil kayıt (KAP/EKAP) |
| %60–80 | Tek CC · birincil ölçüm · bilinen sistematik sınır |
| %35–55 | Tek CC · türev/proxy · karışım uyarısı var |
| <%35 | Hipotez veya algı — sayı olarak kullanılamaz |

---

## 1.1 DEĞER

### ⚠️ Kaynak ayrımı (#34) — iki farklı Analiz seti var, karıştırılamaz

| Set | Kaynak | Kapsam | Kesit |
|---|---|---|---|
| **A) master v24** | Sahibinden scrape | 892 Beykoz kaydı | 2026-05/06 |
| **B) S46 CSV** | TT-HAFIZA `2026-07-03_S29` · 5 CSV | 797 kayıt, m² %71, oda %58,8 | ilan tarihleri 2026-02 → 05 |

İkisi aynı mahalle için farklı n veriyor (Acarlar 126 ↔ **146**, Riva 80 ↔ **109**,
Göztepe 20 ↔ **27**, Kavacık 9 ↔ **6**). Bu bir çelişki değil, **farklı kesit ve
farklı m² kurtarma oranıdır** — ama **hangisi kanon, belirlenmemiştir.**

Aşağıda **yalnız B (S46 CSV)** kullanıyorum: daha yeni, m² doluluğu yüksek,
oda alanı var. **A ile B tek tabloda karıştırılmadı.**

### (a) Konut satılık — mahalle bantları

**Kaynak:** CC-Analiz S46 · TL/m², konut satılık, m²+fiyat dolu

| Mahalle | n | **Medyan (ilan)** | Ortanca m² | Oda profili | Güven |
|---|---:|---:|---:|---|---|
| **Acarlar** (Acarkent) | **146** | **210.000** | 340 | 6+2 / 7+2 / 2+1 | %75 |
| **Riva** | **109** | **160.000** | 220 | 5+1 / 3+1 / 4+1 | %75 |
| Göztepe | 27 | 113.889 | — | — | %65 |
| Yavuz Selim | 24 | 106.667 | — | — | %65 |
| Baklacı | 22 | 181.016 | 300 | 7+1 / 4+1 | %60 |
| Çengeldere | 19 | 152.225 | — | — | %60 |
| Görele | 13 | 146.154 | — | — | %55 |
| Çavuşbaşı Çiftlik | 10 | 137.222 | — | — | %50 |
| **Kavacık** | 6 | **84.722** | — | 3+1 / 2+1 | %40 |
| Polonezköy | 6 | 111.236 | — | — | %40 |
| **Mahmutşevketpaşa** | 6 | **259.361** ← en yüksek | 405 | 5,5+1 / 3+2 | %40 |
| Paşamandıra | 5 | 109.375 | — | — | %35 |
| Öğümce | 5 | 99.800 | — | — | %35 |
| Çubuklu | 4 | 223.077 | 245 | 6+2 / 7+2 | %30 |
| Kanlıca | 4 | 122.500 | — | — | %30 |
| Elmalı | 3 | 148.077 | — | — | %30 |

### ⚠️ Bandın hangi kenarı olduğu — değişmedi
Bunlar **ilan (istenen) fiyatlarıdır = üst kenar.** Alt kenar (tapu/gerçekleşen)
hiçbir CC'de yok. **Şişirme katsayısı bu turda da ÖLÇÜLEMEDİ** ve artık sebebi
kesin biliniyor:

> CC-Analiz S46: *"Tek snapshot: 2026-07-03_S29 (797 kayıt) · **S55 snapshot
> Beykoz klasörü BOŞ**. 'Ortalama kaç günde satıldı' ve 'kaç indirimle'
> HESAPLANAMAZ — en az 2 tarih-farklı snapshot lazım."*

**Yani gerçek işlem fiyatı bu rakamların altındadır ve ne kadar altında
olduğunu bilmiyoruz.** Düzeltme yapılmadı; yapılsaydı uydurma olurdu.

### (b) Yayılım problemi — kısmen çözüldü

F2'nin ilk taslağında "Acarlar'da 8,1 kat yayılım var, açıklayamıyoruz" demiştim.
S46 raporu **açıklamanın bir kısmını verdi:** Acarlar'da ortanca daire **340 m²**
ve baskın oda tipi **6+2 / 7+2**. Yani Acarlar bir daire mahallesi değil,
**villa/büyük konut stoku** — Acarkent. Yayılımın bir bölümü "villa ile 2+1'in
aynı torbada olmasından" geliyor.

**Hâlâ eksik:** bina yaşı, kat, site içi/dışı, eşya — **dördü de %0**
(CC-Analiz: *"CSV'de yok"*). Yani yayılımı **daraltamıyoruz**, sadece bir
kısmını **adlandırabiliyoruz**.

> **Yatırımcıya söylenecek:** *"Acarlar ilanlarının ortası 210.000 TL/m²;
> ama tipik ürün 340 m², 6+2 bir villa. Bunu 2+1 bir daireye uygulayamazsınız.
> Ayrıştıracak yaş/kat verisi elimizde yok."*

### (c) Kira tarafı — **açıldı** (F2'nin en somut kazancı)

**Kaynak:** CC-Analiz S46 · ticari kiralık, TL/m²/ay · 122/308 kayıt kurtarıldı
(master v24'te **0** idi)

| Mahalle | n | **Medyan TL/m²/ay** | Aralık | Ortanca m² |
|---|---:|---:|---|---:|
| Rüzgarlıbahçe | 12 | **460** | 236 – 1.000 | 600 |
| **Kavacık** | **33** | **442** | 167 – 1.998 | 300 |
| Yeni Mahalle | 5 | 433 | 240 – 567 | 150 |
| Fatih | 5 | 417 | 356 – 629 | 120 |
| Çavuşbaşı Çiftlik | 8 | 344 | 195 – 1.000 | 298 |
| Tokatköy | 13 | 333 | 125 – 2.000 | 120 |
| Çubuklu | 3 | 320 | 167 – 509 | 100 |
| Göztepe | 4 | 304 | 103 – 529 | 950 |
| Çengeldere | 8 | 261 | 69 – 525 | 650 |
| Merkez | 3 | 230 | 210 – 400 | 100 |
| **Ortaçeşme** | 3 | **167** | 148 – 300 | **1.350** |

**Kavacık ofis kirası 442 TL/m²/ay = 5.304 TL/m²/yıl** (n=33 — Beykoz'un en
kalabalık kira hücresi). **Güven %65.**

### 🔴 Getiri (yield) hâlâ hesaplanamıyor — ama sebebi artık dar ve ucuz

Getiri = **yıllık kira ÷ satış fiyatı**, *aynı varlık sınıfında*. Elimizde:
- ticari **kira** m²/ay ✅ (yeni)
- ticari **satılık** m² ❌ (75 kayıt var, m² boş)

Kavacık ofis kirasını (5.304 TL/m²/yıl) Kavacık **konut** satış fiyatına
(84.722 TL/m²) bölersem %6,3 çıkar — **ama bu sayıyı vermiyorum, çünkü yanlış
olur:** ofis kirasını konut satış fiyatına bölmek iki farklı varlık sınıfını
karıştırmaktır (#34).

> **Sipariş (dar, ucuz, yüksek getirili):** Analiz `ticari_satilik` (75 kayıt)
> için m²'yi CSV başlıklarından kurtarsın — konut tarafında aynı yöntemle
> +139 kurtarmış. **Bu tek işlem Beykoz'un ticari getiri oranını açar.**

### (d) Bant üretilemeyen yerler
| Mahalle | Durum |
|---|---|
| **Paşabahçe Mh.** | 14 kayıt, m² dolu **1** → bant yok *(Şişecam dosyasının tam ortası)* |
| Rüzgarlıbahçe | konut m² **0** (ama ticari kira 460 ✅) |
| Zerzavatçı | 1 kayıt, m² 0 |
| Soğuksu / Çiğdem | m² 2 / 1 |
| **Poyrazköy** | master'da n=2, yayılım 11,2× → **artefakt, kullanmayın** (TT-AI köprü hipotezinde anılıyor, fiyat dayanağı **yok**) |

---

## 1.2 YÖN

### (a) Köprü koridoru gradyanı — ölçüldü, nedensellik kurulamadı
**Kaynak:** CC-TT-MAP (Sentinel-2, 2016→2025, 6 zaman noktası) · **Güven %55**

| Grup | Mahalle | Ort. net yapılaşma | Yıllık eğim |
|---|---:|---:|---:|
| Koridora **yakın** (<3 km) | 11 | **+2,3 puan** | +0,10 p/yıl |
| Koridora **uzak** (≥3 km) | 6 | **−2,8 puan** | −0,72 p/yıl |

En hızlı 6 mahallenin hepsi ≤2,7 km. Ortaçeşme **+10,0 p @0,6 km** ·
Yalıköy **+8,4 p @0,9 km**.

Neden %55: TT-MAP'in kendi iki uyarısı — (1) seri 2016'da başlıyor, köprü de
2016'da açıldı, **öncesi görülemiyor**; (2) koridor yakınlığı ≈ Boğaz kıyısı,
**köprü etkisi ile kıyı etkisi ayrıştırılamadı**.

> "Köprü sayesinde" denemez. "Köprü koridoru boyunca" denir.

### (b) ★ Ortaçeşme/Yalıköy — kentleşme **konut değil, lojistik** olabilir

F1'de bir "makas" bulmuştum: en güçlü fiziksel sinyal olan iki mahallede
neredeyse hiç ilan yoktu. Sipariş **B2** buydu: *gerçekten arz mı yok, yoksa
tarama mı atladı?*

**CC-Analiz S46 cevap verdi ve net:** *"'Taramadım' DEĞİL — **'taradım-yok'**.
CSV'de kayıtlar var, konut arz gerçekten sıfır/1."*

| Mahalle | CSV kaydı | konut satılık | ticari kiralık | Ortanca kiralık m² |
|---|---:|---:|---:|---:|
| **Ortaçeşme** | 5 | **0** | **5** | **1.350** (1.350 m² ofis+depo, 2.200 m² işyeri) |
| **Yalıköy** | 4 | 1 | 3 | — |

Şimdi üç kaynağı üst üste koyuyorum:
- TT-MAP: Ortaçeşme yapılaşma **+10,0 puan**, otoyola **0,6 km**, yeşil kaybı −8,9 p
- Analiz: konut arzı **sıfır**, kiralıkların hepsi **büyük ölçekli depo/işyeri**
  (1.350 m², 2.200 m²), kira **167 TL/m²/ay** — Beykoz'un **en düşüğü**
- İhale: Yalıköy'de 4 kamu ihalesi

**Sentez (CC-Finans, güven %60):** Ortaçeşme'deki kentleşme büyük olasılıkla
**konut değil, depo/lojistik** yapılaşmasıdır. Otoyola 0,6 km + 1.000 m²+ birimler
+ metrekare kirasının en düşük olması (depo, ofis değil) bu okumayı destekliyor.

**Yatırımcı için anlamı tersine döner:** "kentleşen mahalle = konut fırsatı"
değil, **"koridor lojistiği"**. Farklı varlık sınıfı, farklı alıcı, farklı getiri.
F1'de bunu "tutulan stok" diye okumuştum — **düzeltiyorum**: tutulan stok değil,
**başka bir işlev**.

*(Bu bir sentezdir, tek CC ölçümü değil. Test: Ortaçeşme'deki yapıların
fonksiyonu — TT-MAP 2B optikle bina fonksiyonu göremiyor, doğrulama İBB bina
kullanım verisi ister.)*

### (c) İki koridor — kamu parasının düştüğü yer
**Kaynak:** CC-İhale (EKAP 102.174 kayıt, 2022-01→2026-07) · **Güven %85**

- **144 Beykoz ihalesi** (33 ilan + 111 sonuç); 59'u (%41) mahalleye bağlandı
- Hacim 2022'den beri doygun (~30-35/yıl)
- 2024'ün **5,33 Mr TL** zirvesi **tek kaleme** bağlı:
  **Beykoz 500 Yataklı Devlet Hastanesi 4,18 Mr TL** (Kuzu Toplu Konut A.Ş.).
  O kalem çıkınca 2024 ≈ 1,15 Mr TL — yani **sıçrama değil, tek mega tesis**.
- Mahalle yoğunlaşması: Polonezköy 5 · Yalıköy 4 · **Kavacık 4** · Çubuklu 3 ·
  Riva 3 · Kanlıca 3
- İhale'nin tezi: sürekli sıçrama örüntüsü **zayıf**; sinyal iki noktada →
  **Hastane-Merkez (Gümüşsuyu) + Kavacık koridoru** *(güven %55, zayıf imza)*

**Kurumsal iz:** Türk-Alman Üniversitesi **15** ihale (büyüyen kampüs) ·
Okul/MEM 22 · **Askeri 9** (Sualtı/SAT Komutanlığı, kışla, lojman)
→ askeri alan payı yüksek = **özel yatırıma kapalı alan** sinyali.

### (d) Kavacık — beş kaynak, tek sonuç
| Kaynak | Ne diyor |
|---|---|
| TT-MAP | Yapılaşma %58,4 (2016) → **%52,4** (2025), net **−5,0**, güven **YÜKSEK** → yeni inşaat yok |
| Analiz | konut satılık n=6, medyan **84.722** — listenin **en düşüğü**; ticari kira **442 TL/m²/ay, n=33** — en kalabalık kira hücresi |
| İhale | 4 kamu ihalesi; iki koridordan biri |
| TT-AI | Evren damgası **KISMI_THIN**; "göz bebeği" **[ALGI]**; POI ile bağlanamadı → *"Kavacık'ta X işyeri" cümlesi kurulamaz* |
| Basın | **0 haber** (temas-yok) |
| Sosyal | 2 atıf — "FSM/YSS köprü bağlantı avantajı" *(SÖYLEM, nicel yok)* |

**Sentez (CC-Finans, güven %70 — F2'de yükseldi):** Kavacık bir konut değeri
hikâyesi **değil**, **doymuş bir ofis/kira piyasasıdır.** Fiziksel olarak
büyümüyor (−5,0 p, güven yüksek), konut m²'si Beykoz'un en ucuzu (84.722),
buna karşılık ofis kirası ilçenin en derin hücresi (n=33, 442 TL/m²/ay).
"Göz bebeği" nitelemesi **fonksiyona** işaret ediyor, **değer artışına** değil.

### (e) %62 orman — yapısal arz kısıtı
**Kaynak:** CC-TT-MAP (Sentinel↔WorldCover çift imza) · **Güven %90**

28/45 mahalle (**%62**) ⬜ *kırsal-N/A*; 28/28'i ağaç baskın, yeşil %77–99.
TT-MAP'in vurgusu kritik: ⬜ = **"ölçülecek kentleşme yok"**, *"gelişmiyor" değil*.
Finansçı okuması: kentleşme ekseni değil, **koruma statüsü** ekseni.

**Yatırım anlamı:** Beykoz'un üçte ikisi imara kapalı/orman → kalan üçte birde
fiyat baskısı yaratan **temel mekanizma budur**. Askeri alanlar bu kısıtı büyütüyor.

**Dönüşüm baskısı adayları** *(TT-MAP, yalnız mesafe — imar bilgisi değil, %40)*:
Dereseki 0,0 km · Akbaba 0,9 · Paşamandıra 1,3 · Merkez 1,4 · Kaynarca 1,5 ·
Örnekköy 1,5 · Alibahadır 1,6 · Elmalı 1,6.

> **TT-MAP düzeltmesi:** "Otoyola yakın" sanılan Riva (3,1 km) / Poyrazköy (4,0) /
> Anadolu Feneri (3,7) ölçümde **orta mesafede**. Kuzey kıyı ≠ koridor iç hattı.

---

## 1.3 ZAMANLAMA — gecikme katsayısının ilk ölçümü

**Tek kaynak: CC-Borsa (KAP ODA bildirimleri).** Tarihli zincir veren tek CC bu.

### Riva zinciri

| Tarih | Şirket | Olay | Faz |
|---|---|---|---|
| 2016-11-09 | AGYO | Beykoz Çayağzı (Riva) 13 Pafta 2038 Parsel **1.313 m² arsa alımı** | **SERMAYE** |
| 2017-05-11 | EKGYO | Riva Arsası İhale İlanı | sermaye |
| 2017-06→08 | EKGYO | İhale oturumları (×4) | sermaye |
| 2017-09-13 | EKGYO | **Riva Sözleşme İmzalanması** | sermaye kilit |
| 2017-09-19 | EKGYO | Riva Yer Teslimi | sermaye kilit |
| 2022-01-10 | EKGYO | Riva STG Artışı | ara |
| **2025-04-11** | EKGYO | **Riva 1. Etap İkmal İnşaat Sözleşmesi** | **İNŞAAT** |
| 2025-04-18 | EKGYO | Riva 1. Etap Yer Teslimi | inşaat |

### Ölçülen gecikme

| Ayak | Ölçüm | Güven |
|---|---|---|
| **Sermaye → İnşaat** | **7,6 – 8,4 yıl** | **%80** |
| — üst uç: 2016-11-09 (AGYO arsa) → 2025-04-11 | 8,42 yıl | |
| — alt uç: 2017-09-13 (EKGYO sözleşme) → 2025-04-11 | 7,58 yıl | |
| — ara: sözleşme → STG (2017-09 → 2022-01) | 4,3 yıl | |
| — ara: STG → ikmal inşaat (2022-01 → 2025-04) | 3,2 yıl | |
| **İmar → İnşaat** (AKSGY Beykoz) | **>6,9 yıl, HÂLÂ AÇIK** — 2018-08 ilk imar, 2026-07 itibarıyla inşaat bildirimi **yok** | %70 |
| **İnşaat → Fiyat yansıması** | 🔴 **ÖLÇÜLEMEDİ** | — |

### 🔴 Patron'un zincirinde bir düzeltme

Talepte zincir *"sermaye 2016 → inşaat 2022 → fiyat 2025"* diye kuruldu. Veriye göre:

- **sermaye 2016-17** ✅ doğru
- **inşaat 2022** — bu tarih **Tokatköy**'e ait (EKGYO Tokatköy 1./2. Etap,
  2022-09/10). **Riva'nın inşaatı 2022 değil, 2025.**
- **fiyat 2025** — **hiçbir raporda fiyat kanıtı yok.** 2025'te olan şey yine
  inşaattır (Riva 1. Etap ikmal sözleşmesi). Fiyat tarafında elimizdeki tek şey
  2026-02/05 kesiti: Riva medyanı 160.000 TL/m² (n=109) — **tek nokta, geçmişi
  yok, "yansıdı" denemez.**

Zincirin üçüncü halkası fiyat değil, **yine inşaat**. **Fiyat halkası sistemde
hiç yok** — ve CC-Analiz bunu bağımsız olarak doğruladı: *"Arşivim 2026-02'den
başlıyor… A04: köprü kesiti ölçülemez."*

### Ne söylenebilir, ne söylenemez

✅ **(%80)** *Beykoz/Riva'da kurumsal sermaye 2016-17'de girdi, fiziksel inşaat
2025'te başladı. Sermaye ile kazma arasında **7,6–8,4 yıl** geçti.*

✅ **(%60)** *Bu, İstanbul geneli için varsayılan ~5 yıldan **uzun**. Muhtemel
sebep Beykoz'a özgü: %62 orman/SİT + askeri alan + boğaz imar rejimi = uzun
izin döngüsü. Ama **tek zincirdir (n=1)** — ilçe kuralı değil, bir vaka.*

🔴 *"Fiyat 2025'te yansıdı"* — fiyat serisi yok.
🔴 *"Şimdi girersen X yıl sonra kazanırsın"* — fiyat ayağı ölçülmeden gecikme
katsayısı yatırım tavsiyesine **dönüştürülemez**.

### ★ Yanlışlanabilir öngörü — CC-Finans'ın ilk gerçek IP çıktısı

TT-MAP Riva'yı ⬜ *kırsal-N/A* görüyor (yeşil %77, 2025'te ölçülebilir kentleşme
yok). Borsa ise Riva'da **2025-04'te yer teslimi** yapıldığını söylüyor.
Bu ikisi **çelişmiyor, tamamlıyor:** inşaat Nisan 2025'te başladıysa uydu 2025
yaz ölçümünde henüz göremez.

> **ÖNGÖRÜ:** TT-MAP'in **2026 ve 2027** Riva ölçümünde yapılaşma oranı
> yükselmeli. Yükselmezse ya proje durmuştur ya zincir kopmuştur.
> **Tarihli, test edilebilir. MAP26'da bakılacak.**

**Yan destek (zayıf, söylem):** Sosyal S202 — Riva'da "Düşler Vadisi" konut
projesi anlatan tanıtım videosu var (`InaXiIdPO74`), ve bir emlakçı Riva arsası
için 7M$ **talep** ettiğini anlatıyor (`DCMDmquFCSI`). Sosyal kendi uyarısını
düşmüş: *başlıkta 7M$, ses kaydında en fazla 3M$ geçiyor — başlık pazarlaması.*
**Bu bir fiyat kanıtı değildir**, ama Riva'da aktif bir arsa pazarlığı ortamı
olduğunun söylem izidir.

---

## 1.4 GÜVEN — iddia tablosu

| # | İddia | Kaynak | Güven |
|---|---|---|---|
| 1 | Beykoz 45 mahalle | TT-MAP + TT-AI + Basın | **%95** |
| 2 | %62 orman/kırsal → yapısal arz kısıtı | TT-MAP (çift imza) | **%90** |
| 3 | 144 kamu ihalesi; 2024 zirvesi tek hastane kalemi (4,18 Mr TL) | İhale (EKAP) | **%85** |
| 4 | Riva sermaye→inşaat gecikmesi 7,6–8,4 yıl | Borsa (KAP) | **%80** |
| 5 | Ortaçeşme +10,0 p / Yalıköy +8,4 p yapılaşma | TT-MAP (güven yüksek) | **%80** |
| 6 | Ortaçeşme/Yalıköy'de konut arzı gerçekten sıfır ("taradım-yok") | Analiz S46 | **%80** |
| 7 | Kavacık fiziksel olarak doygun (−5,0 p) | TT-MAP | **%75** |
| 8 | Acarlar ilan medyanı 210.000 TL/m², ürün 340 m² villa | Analiz S46 (n=146) | **%75** |
| 9 | Kavacık = ofis/kira piyasası, konut değil | Finans sentezi (5 CC) | **%70** |
| 10 | Kavacık ofis kirası 442 TL/m²/ay | Analiz S46 (n=33) | **%65** |
| 11 | Ortaçeşme kentleşmesi lojistik/depo işlevli | Finans sentezi (3 CC) | **%60** |
| 12 | Beykoz döngüsü İstanbul ortalamasından uzun | Finans yorumu (n=1) | **%60** |
| 13 | Kamu sinyali: Hastane-Merkez + Kavacık | İhale (zayıf imza) | **%55** |
| 14 | Koridor yakınlığı ↔ büyüme birlikteliği | TT-MAP (karışım uyarılı) | **%55** |
| 15 | Orman köyleri dönüşüm baskısı adayı | TT-MAP (yalnız mesafe) | **%40** |
| 16 | "Köprü Beykoz'u büyüttü" | — | **<%30 kurulamaz** |
| 17 | Şişecam/Paşabahçe arazi işlemi | — | **ölçülemedi (§G2)** |
| 18 | Herhangi bir mülkün değeri | — | **hesaplanamaz** (yaş/kat/site yok) |
| 19 | Ticari getiri oranı (yield) | — | **hesaplanamaz** — tek eksik: ticari satılık m² |

---

# G2 — PAŞABAHÇE / ŞİŞECAM DOSYASI

## Bu turda ne kapandı

**Beş bağımsız kanalda arandı:**

| Kanal | Arama | Sonuç | CC |
|---|---|---|---|
| KAP (sermaye) | SISE 2024 penceresi, 132 bildirim | gayrimenkul/Paşabahçe **0**; FDV 9'u da kurumsal | Borsa |
| EKAP (kamu ihale) | 102.174 kayıt, sınır-duyarlı | Paşabahçe **1** (İSKİ atıksu havza listesi — arazi ile ilgisiz) | İhale |
| Basın (ulusal+yerel) | `şişecam` · `paşabahçe (fabrika\|arazi\|arsa)` | **0 / 0** | Basın |
| **Sosyal (S202)** | 82 video, FTS5 | **Paşabahçe 3 · Şişecam 2** (Beykoz bağlamı **ilk kez**) | Sosyal |
| Fiyat (ilan) | Paşabahçe Mh. | 14 kayıt, m² dolu **1** → bant üretilemedi | Analiz |

### Kapanan üç şey

1. **İki yanlış pozitif elendi.** İhale'nin bulduğu 2 "Şişecam" kaydı aslında
   **Mersin/Karaduvar Soda tesisi (MESKİ)** çıktı → reddedildi. #34'ün doğru
   uygulanması.
2. **Konunun nerede OLMADIĞI kesinleşti:** halka açık şirket bildirimi (2024),
   kamu ihalesi, ulusal basın (60 gün). Bu kanallar tekrar taranmamalı.
3. **★ Söylem tarafı ilk kez açıldı** (Sosyal S202). Artık elimizde **belgesel
   düzeyinde bir anlatı** var:
   > *"Paşabahçe fabrikasının üzerine yalılar, özel rıhtımlar ve milyon dolarlık
   > malikaneler mantar gibi çoğalıyordu."* — Factory Fallout `Q_NE_w6ksRg`
   > **(SÖYLEM · nicel yok · Sosyal'in kendi etiketi 🔴)**

   Ve doğrulanabilir bir olgu: fabrika **1930'larda İnönü-Bayar döneminde
   kuruldu** (`zrhMJ_kcCEw`) — kurumsal tarih, kolay çapraz doğrulanır.

### ★ En değerli tek ipucu — ve atlanmış
Sosyal'in **hasat edemediği** 4 videodan biri:
**`Bm-2LwEpclk` — Revoltistanbul, "Şişecam direnişi 2016"** (tr-altyazı yok).

Bu, *2016'da Paşabahçe/Şişecam çevresinde kamuya açık bir direniş/olay
yaşandığının* işaretidir. Eğer öyleyse, tüm kanallarımızın onu kaçırmasının
sebebi nettir: **ulusal basın havuzumuz 60 günlük, KAP penceremiz 2024.**
Bir 2016 olayı bunların hiçbirinde **görünemezdi.**

> **Metodolojik sonuç:** Beş kanalda sıfır bulmak *"olay olmadı"* demek değildir.
> **Kanıt yokluğu ≠ yokluk kanıtı.** Sosyal'in tek satırı bunu kanıta çevirdi.

### Fiziksel taraf
TT-MAP: Paşabahçe yapılaşma 40→44 (**+3,4 puan**), **güven DÜŞÜK** (4 dolu yıl).
Fabrika ölçeğinde bir dönüşüm mahalle oranında görünürdü; +3,4 puan bunun için
ne kanıt ne ret. **Güven %35.**

## Ne hâlâ açık
🔴 **Asıl soru cevapsız:** *Arazinin mülkiyet ve imar durumu ne, el değiştirdi mi,
ne yapılacak, kaça?*

## Açığı kapatmanın yolu — öncelik sırasıyla

| # | Yol | Kim | $ | Ne getirir |
|---|---|---|---|---|
| **1** | **`Bm-2LwEpclk` (Revoltistanbul 2016) manuel çekimi** | Sosyal (S203 borcu) | $0 | 2016 olayının **ne olduğunu** söyler — tarihi verir, geri kalan aramayı hedefler |
| **2** | **KAP backfill 2015→2026** (SISE penceresini genişlet) | Borsa | $0 | Kurumsal işlem varsa **kesin** çıkar |
| **3** | **Beykoz Belediyesi meclis kararları** — URL bulundu: `beykoz.bel.tr/haberler?kategori=meclis-kararlari` | Basın (S80 borcu) | $0 | İmar plan değişikliği doğrudan burada |
| **4** | **Wayback Machine + AA arşivi (2015-2023)** | Basın | $0 | 60 günlük havuz duvarını aşar |
| **5** | **TKGM/tapu — parsel sorgusu** | *(kanal YOK)* | ? | **Kesin cevap burada.** Sistemde tapu kanalı yok — yapısal boşluk |
| 6 | Paşabahçe Mh. m² kurtarma (14 kayıt) | Analiz | $0 | Fiyat tarafını açar (şu an bant yok) |

**Öneri:** **1 + 2 + 3 aynı hafta.** Üçü de $0. Sıralamada 1'i öne aldım çünkü
tek bir videonun tarihi, 2-4'ün arama penceresini **daraltır** — önce ne
aradığımızı öğrenmek, sonra aramak daha ucuz.

**5 (tapu) sistemin en büyük yapısal eksiğidir.** Türkiye'de gayrimenkulün tek
gerçek kaydı tapudur ve Tradia'nın hiçbir CC'si oraya bakmıyor. Bu aynı zamanda
F1'in *"bant alt kenarı yok"* sorununun da çözüm yeridir — **aynı kanal.**

---

# G3 — SİSTEM DENETİMİ (7 CC)

## Ölçüt: iki eksik türü ayrılır

- **VERİ EKSİKLİĞİ** — kaynak yok/erişilemez. Çözüm: kaynak edin, para/zaman.
- **SORU EKSİKLİĞİ** — kaynak vardı, doğru soru sorulmadı. Çözüm: **bedava.**

Patron'un tespiti doğru — *köprünün ilk turda kaçması soru hatasıydı*: TT-MAP
verisi MAP24'te de vardı, köprü ekseni MAP25'te sorulunca çıktı.

**Bu turda üç CC aynı deseni gösterdi ve üçü de kendi kendini düzeltti:**
| CC | İlk tur | İkinci tur | Kazanç |
|---|---|---|---|
| TT-MAP | MAP24 (köprü yok) | MAP25 (köprü ekseni) | koridor gradyanı |
| Basın | S78 ulusal, 12 haber | S79 yerel hasat, **31** haber | **2,6×**, $0 |
| Sosyal | S201 "havuzum kör" | S202 yerel hasat, **6 video** | Paşabahçe 0→**3** |
| Analiz | yoklama (bellek yok) | **S46 tam** (bellek takıldı) | ticari kira **0→122 kayıt** |

**Desen açık: ilk tur soruyu yanlış soruyor, ikinci tur düzeltiyor ve kazanç
büyük oluyor.** Bu, *tek turluk vaka çalışmasının yapısal olarak eksik kalacağı*
anlamına gelir. (→ G4-D1)

---

## CC-İhale — bu turun en kullanışlı çıktısı
**Cevapladı:** 144 Beykoz ihalesi, kategori/yıl/kurum dağılımı, en büyük 3 kalem;
mahalle çözünürlüğü İ59 29 → İ60 **59 (%41)**. **Güven %85.**

**Doğru yaptığı:** (a) 2024 zirvesinin **tek kaleme** bağlı olduğunu kendi söyledi
— bu uyarı olmasa yıllık seri yanlış okunurdu. (b) İki yanlış pozitifi
gerekçesiyle reddetti. (c) Köprü/otoyolun **BOT modeli yüzünden bültende
görünmeyeceğini** açıkladı — "bulamadım"ı **yapısal açıklamaya** çevirmek, en iyi
cins dürüstlük.

**VERİ eksikliği:** 85/144 (%59) hâlâ ilçe düzeyinde.

**🔴 Yöntem defekti (bulduğum):** İhale'nin Katman-1 sözlüğü **33 Beykoz mahallesi**
içeriyor; Beykoz'da **45 mahalle** var (üç bağımsız kaynak doğruluyor).
**12 mahalle sözlükte yok** → o mahallelere düşen ihaleler yapısal olarak
eşleşemez. %41'lik çözünürlüğün bir kısmı bu yüzden.
**Bedava düzeltme:** sözlüğü TT-AI'nın 45'lik mahalle_id listesinden yenile,
İ60'ı tekrar koştur.

Bunu **duraklamış** (NAS-bekleme) durumdayken çıkardı.

---

## CC-Borsa — hacmi en küçük, yoğunluğu en yüksek
**Cevapladı:** 4 halka açık şirket, 20 KAP bildirimi, **tarihli zincir**.
ZAMANLAMA ayağının **tek** kaynağı. **Güven %80-85.**

**Doğru yaptığı:** *"Beykoz yükselir demem, o Finans'ın işi"* diyerek yorum
yapmadı, faz gözlemini verip gecikme hesabını bana bıraktı. **Rol disiplini
kusursuz.** Her bildirimde tarih + ODA kaynağı (#21-B).

**VERİ (yapısal, kapatılamaz):** Ana köprü yüklenicileri (İçtaş/Astaldi/Cengiz/
Kolin/Limak/Kalyon/Makyol) ve Kavacık KOBİ'leri halka kapalı → KAP'ta yok.
Doğru raporlanmış.

**SORU:** SISE penceresi yalnız 2024 — bu veri eksikliği **değil**, sorgu
parametresi. **$0 ile düzelir.** Borsa eksiği biliyor ("backfill 2015-2026'ya
genişletilmeli"), sorulmamış.

**Kayıp fırsat (SORU):** Borsa "havuzda HQ/adres verisi yok" diyor. Kimse
sormamış: *merkezi Kavacık'ta olan halka açık şirketler kimler?* — Kavacık ofis
tezini test edecek tek sayısal yol buydu.

---

## CC-TT-MAP — ölçümü en sağlam, sınırlarını en iyi bilen
**Cevapladı:** 45 mahalle × 6 zaman noktası, koridor gradyanı, Kavacık doygunluk
kesiti, %62 orman, topoğrafya. **Ölçümde %80-90, nedensellikte %55.**

**Doğru yaptığı:** ⬜ etiketini *"gelişmiyor"* değil *"ölçülecek kentleşme yok"*
diye tanımladı — bir finansçının en kolay yanlış okuyacağı yeri önceden kapattı.
Kendi karışım sorununu (köprü ↔ kıyı) kendisi ilan etti.

**SORU eksikliği (kabul edilmiş, düzeltilmiş):** Köprü ekseni MAP25'te sorulunca
aynı veriden çıktı.

**🔴 Kimsenin yakalamadığı kapsama boşluğu (ben ekliyorum):**
Borsa'nın kurumsal inşaat kaydettiği **Riva ve Tokatköy'ün ikisi de TT-MAP'te
⬜ kırsal-N/A**. Yani TT-MAP, EKGYO'nun oradaki projesini **ölçüm dışı bıraktığı
sınıfta** tutuyor. Hata değil, ama boşluk: *kurumsal proje alanları
"orman/kırsal" kalıyorsa, dönüşümün başladığı yeri kaçırıyoruz.*
**Düzeltme:** Borsa/İhale'nin proje mahalleleri (Riva, Tokatköy, Çayağzı) ⬜ olsa
bile **zorunlu izleme listesine** alınsın (§1.3 öngörüsünün ön koşulu).

**VERİ (pahalı/kapatılamaz):** 2016 öncesi seri, GIS koridor geometrisi, bina
sayısı/kat/fonksiyon (2B optik sınırı), mahalle altı çözünürlük.

---

## CC-Analiz — **turun en çok mesafe alan CC'si** (revize değerlendirme)
**Cevapladı:** TT-HAFIZA takılınca 5 CSV / 797 kayıt işledi; m² doluluğunu
başlıktan **+139 kurtarmayla %71'e** çıkardı; **ticari kiralık TL/m²/ay'ı
0'dan 122 kayda** getirdi; 16 mahallede konut, 11 mahallede ticari medyan üretti;
oda alanını %58,8 doldurdu. **Güven %70-75.**

**Doğru yaptığı — bu turun en iyi cross-CC davranışı:**
F1'de ona bir soru sormuştum (**B2**: Ortaçeşme/Yalıköy'de arz gerçekten yok mu,
yoksa tarama mı atladı?). **Doğrudan cevapladı ve ayrımı kendisi kurdu:**
> *"'Taramadım' DEĞİL — 'taradım-yok'. CSV'de kayıtlar var, konut arz gerçekten
> sıfır/1."*

Ayrıca "kaç günde satıldı / kaç indirimle" sorusunu **hesaplayamadığını** ve
sebebini (tek snapshot, S55 klasörü boş) yazdı; uydurmadı.

**VERİ eksikliği (gerçek ve sistemik):** bina yaşı, kat, site, eşya —
**dördü de %0**, CSV'de yok, PNG ilan sayfası Beykoz için yok. Bu benim F1-G2'deki
`K_yaş`/`K_kat` katsayılarımın kaynağıdır → **hedonik model hâlâ kurulamıyor.**

**🟡 Çözülmesi gereken tutarsızlık (#21-B / #34):** İki Analiz çıktısı aynı
mahalleler için farklı n veriyor (Acarlar 126↔146, Riva 80↔109, Kavacık 9↔6).
Sebebi meşru (farklı kaynak, farklı kesit, farklı m² kurtarma) ama **hangisi
kanon belirlenmemiş.** İki rapor iki farklı sayı verirse dışarıya karşı tek ses
olmaz. **Sipariş: kanonik set ilan edilsin.**

---

## CC-Basın — en çok gelişen, en sığ havuz
**Cevapladı:** 31 haber (12→31), 10 mahalle temaslı, **35 mahalle (%78)
temas-yok**, 2 yeni yerel kaynak adayı. **Güven %70.**

**Doğru yaptığı:** (a) YSS köprüsü için Türkçe-ek duyarlı arama yapıp **1 hit**
buldu ve bunu *"havuz derinliği yetersiz"in deneysel kanıtı* diye sundu —
negatifi kanıta çevirmek. (b) Tarihsel derinliği katman katman ölçtü (ulusal
~60 gün / yerel ~1 yıl / belediye ~2-3 hafta / **2016 erişilemez**).
(c) KVKK maskeleme notunu kendisi düştü (#31).

**SORU eksikliği (düzeltildi):** İlk tur yalnız ulusal havuza sordu → 12.
Yerel sorulunca 31. **Aynı gün, $0, 2,6×.**

**🔴 Çapraz-CC çelişkisi (yakalanmamış):** Basın'ın sayacında
`kamu_yatirimi = 0` ve `imar_plan = 0`. Ama İhale aynı ilçede **144 kamu ihalesi**
buluyor, biri **4,18 milyar TL'lik hastane**. Beykoz'da kamu yatırımı vardı;
Basın'ın **kategorisi** onu görmedi. Basın sorunu biliyor ("kural regex sığ",
`diger=11`) ama iki CC'nin sayacı yan yana konmamış.
**Veri eksikliği değil, taksonomi hatası** — $0 ile düzelir.

**VERİ (gerçek):** 2016 dönemi erişilemez, Emlak Kulisi WAF blokta, meclis
kararları henüz hasat edilmedi.

---

## CC-TT-AI — disiplini en keskin, yatırım sorusuna katkısı en dolaylı
**Cevapladı:** 45 mahallenin veri-katman haritası (CONFIRMED 18 / KISMI_THIN 22 /
ham 5), Kavacık POI verdicti, 3 köprü hipotezi. **Veri sayaçlarında %85,
hipotezlerde <%35 (kendi etiketiyle).**

**Doğru yaptığı — turun en iyi tek cümlesi:**
> *"44/45'te bina verisi var" = KAPSAMA var demek, her binanın kaydı elimizde
> demek DEĞİL.*

Bu ayrım olmasa "Beykoz'da bina verimiz %98" diye yazardım ve yanlış olurdu.
[ALGI]/[HİPOTEZ]/[VERİ] kovaları aynı işi yapıyor. Ayrıca *"Kavacık'ta X işyeri
cümlesi kurulamaz"* diyerek **kendi en cazip çıktısını kendisi reddetti** —
denetime en az ihtiyaç duyan davranış.

**Sert ama adil:** TT-AI dört yatırım sorusunun hiçbirine **doğrudan sayı**
vermedi; verdiği *meta-katman* (hangi mahallede hangi veri var). Değerli ama
finansçı sunumunda tek başına kullanılamaz. En işe yarar çıktısı iki **ironi**:
**Acarkent** — Beykoz'un en pahalı yerleşimi, Analiz'in en kalabalık fiyat
hücresi (n=146) — TT-AI evreninde **`ham`**; **Beykoz Merkez** 45 mahalle içinde
tek **0-eksen** mahalle. *Veri zenginliğimiz piyasa önemiyle ters orantılı.*

**En değerli açık:** TT-AI'nın 1. öncelik eksiği (İBB bina-analiz HAM:
kat/yaş/kullanım, mahalle kırılımlı, **$0**) benim `K_yaş`/`K_kat`
katsayılarımın **tam kaynağıdır**; Analiz de aynı boşluğu (%0 yaş/kat) kendi
tarafından bildirdi. **Üç CC aynı boşluğu gördü → sistemin en yüksek getirili
tek işi budur.**

---

## CC-Sosyal — körlüğünü ilan etti, sonra körlüğünü kapattı (revize)
**S201:** 76 videoda Beykoz **1** atıf (o da siyasi), duygu yönü **hesaplanamaz**
dedi — tek atıftan ton çıkarmayı "veri çarpıtması" sayıp reddetti.
**S202:** 6 yerel video hasat etti → Beykoz 1→**6**, Paşabahçe 0→**3**,
Kavacık 0→2, Riva 0→2.

**Doğru yaptığı — turun ikinci en iyi cümlesi:**
> *"Havuz-yokluğu ≠ dolaşımda-yokluk."*

Üç kova kurdu (olgu / söylenti / arşivimde-yok-ama-dolaşıyor-olabilir),
söylentiyi olgu diye sunmadı. S202'de kendi kaynağını da denetledi:
*7M$ başlıkta yazıyor ama ses kaydında en fazla 3M$ geçiyor — başlık pazarlaması.*
Kendi verisinin başlığı ile içeriğini karşılaştıran **tek CC** bu.

**İlk değerlendirmemi düzeltiyorum.** "Yanlış adrese soruldu, katkı veremez"
demiştim. Sosyal aynı gün gösterdi ki **soru doğruydu, havuz yanlıştı ve havuz
genişletilebilirdi.** Paşabahçe dosyasının §G2'deki tek yeni ipucu (2016
Şişecam direnişi videosu) ondan geldi.

**Kalan borç (kendi yazdığı):** 4 video tr-altyazısızlık yüzünden atlandı
(biri **`Bm-2LwEpclk`, 2016 direnişi — G2'nin 1 numaralı yolu**); muhalif taraf
1 video, pozitif 0 → **balans eksik**; düşük güven katmanıyla çalışma riski.

---

## G3 Özet

| CC | Yatırım sorusuna katkı | Dürüstlük | Ana eksik türü |
|---|---|---|---|
| **İhale** | ⭐⭐⭐⭐⭐ YÖN'ün omurgası | ⭐⭐⭐⭐⭐ BOT'u yapısal açıkladı | VERİ (%59 belirsiz) + **SORU/yöntem** (33≠45 sözlük) |
| **Borsa** | ⭐⭐⭐⭐⭐ ZAMANLAMA'nın tek kaynağı | ⭐⭐⭐⭐⭐ rol sınırını korudu | **SORU** (SISE 2024 penceresi, $0) |
| **Analiz** | ⭐⭐⭐⭐ DEĞER'in tek kaynağı; kira tarafını açtı | ⭐⭐⭐⭐⭐ "taradım-yok" ayrımı | **VERİ** (yaş/kat/site %0) + kanon belirsizliği |
| **TT-MAP** | ⭐⭐⭐⭐ YÖN + arz kısıtı | ⭐⭐⭐⭐⭐ karışımı kendi ilan etti | VERİ (2016 öncesi) + **kapsama boşluğu** (⬜ proje alanları) |
| **Basın** | ⭐⭐⭐ YÖN'e destek | ⭐⭐⭐⭐⭐ negatifi kanıta çevirdi | VERİ (60 gün) + **SORU** (taksonomi 0 ↔ 144) |
| **Sosyal** | ⭐⭐⭐ Paşabahçe'nin tek yeni ipucu | ⭐⭐⭐⭐⭐ kendi başlığını denetledi | **SORU** (havuz karakteri) — aynı gün kapattı |
| **TT-AI** | ⭐⭐ dolaylı (meta-katman) | ⭐⭐⭐⭐⭐ kapsama≠rakam | **SORU** (finansçı rakam istedi, bayrak geldi) |

### Genel — ne övgü ne rezillik

**Yedi CC'nin hiçbiri uydurmadı.** Yedisi de "cevaplayamadıklarım" başlığını ayrı
tuttu. Bu raporun yazılabilmesi tamamen buna dayanıyor. Dördü tek turda kendi
boşluğunu kapattı. Bu sıradan bir performans değil.

**Buna karşılık: hiçbir CC bir diğerinin sayısını kontrol etmedi.**
Basın'ın `kamu_yatirimi=0`'ı ile İhale'nin 144'ü · Borsa'nın Riva inşaatı ile
TT-MAP'in Riva-⬜'sü · TT-AI'nın Acarkent-`ham`'ı ile Analiz'in Acarlar-n=146'sı ·
Analiz'in kendi iki setinin farklı n'leri — **hepsi ancak burada, tek masada
karşılaştı.** Yedi dürüst monolog, sıfır diyalog.

**Çapraz kontrol katmanı sistemde yok — ve F1 kural 4 gereği o katman ben de
olamam** (üreten denetleyemez). Bu, sistemin şu anki en büyük yapısal açığıdır.

**Sayısal denetim:** 45 mahalle — üç bağımsız CC uyuştu ✅ · Analiz 44/30
(ilan olan mahalle, farklı tanım — çelişki değil) ✅ · İhale 33 (**eksik sözlük**) 🔴 ·
Acarlar n: 126 ↔ 146 (↔ benim F1'deki 149) 🟡 **kanon gerek.**

---

# G4 — BEYKOZ YÖNTEMİ (tek sayfa, diğer ilçelere şablon)

## AYNEN TAŞINACAK

1. **"Cevaplayamadıklarım" zorunlu başlık.** Yedi CC'nin yedisi yaptı; bu raporun
   yazılabilmesinin tek sebebi bu. Şablonun 1. maddesi.
2. **Üçlü-anahtar (#18) `il/ilce/mahalle-slug`** — Beykoz'da %98,3 eşleşme.
   Çalışıyor, dokunma.
3. **Kova ayrımı [VERİ]/[HİPOTEZ]/[ALGI]** (TT-AI) — her CC'ye yayılsın.
4. **"Kapsama ≠ rakam"** (TT-AI) — bayrak sayısını veri sanmayı önler.
5. **"Havuz yokluğu ≠ dolaşımda yokluk"** (Sosyal) — beş sıfırın anlamını doğru
   okutur; G2'de kritikti.
6. **"Taradım-yok" ≠ "taramadım"** (Analiz) — boşluğun **bulgu** mu **eksik** mi
   olduğunu ayırır. F1'in makas sorusunu bu ayrım çözdü.
7. **Negatifi kanıta çevirmek** (Basın: 1 hit = havuz sığlığının kanıtı;
   İhale: BOT ⇒ bültende görünmez). "Bulamadım" değil, "şu yüzden görünmez".
8. **Yanlış pozitif reddi + gerekçe** (İhale: Mersin Şişecam). Kaydedilir, silinmez.
9. **Kendi kaynağını denetlemek** (Sosyal: başlık 7M$ ↔ ses kaydı 3M$).
10. **Rol disiplini** (Borsa: "yorum Finans'ın işi"). Üreten ≠ yorumlayan.
11. **3 katmanlı mahalle çözünürlüğü** (İhale): sözlük → tesis/okul adı tablosu →
    "X Mahallesi/Mevki" regex. Katman-3 ortak; 1-2 ilçeye özel.
12. **m² kurtarma** (Analiz: başlık regexi ile +139 konut, +122 ticari).
    Alan boşsa metinden kurtarmayı dene, sonra "yok" de.

## DÜZELTEREK TAŞINACAK

| # | Beykoz'da ne oldu | Diğer ilçede ne yapılmalı |
|---|---|---|
| **D1** | Dört CC'de ilk tur eksik, ikinci tur büyük kazanç (Basın 2,6× · Sosyal 1→6 · Analiz kira 0→122 · TT-MAP köprü) | **İlçe turu tek turluk tasarlanmasın — iki tur kanona alınsın.** Tur-1 keşif, tur-2 hedefli. |
| **D2** | Köprü ekseni ilk turda sorulmadı | **Tur öncesi "bu ilçenin 2-3 büyük olayı ne?"** yazılsın. Beykoz'da köprü + orman + Şişecam idi. |
| **D3** | Basın `kamu_yatirimi=0` ↔ İhale 144 | **Taksonomi ortaklaştırılsın** — İhale'nin kategori listesi Basın regexine beslensin. |
| **D4** | İhale sözlüğü 33, gerçek 45 | **Mahalle listesi tek kanondan** dağıtılsın; her CC kendi listesini yazmasın. |
| **D5** | Analiz'in iki seti farklı n veriyor | **Her CC tek kanonik set ilan etsin** (#34): hangi dosya, hangi kesit, hangi filtre. |
| **D6** | Analiz bellek takılı değilken tura girdi, sonra takıldı | **Ön koşul kontrolü:** tur başlamadan her CC "koşabilir miyim" der. Sonradan öğrenilmesin. |
| **D7** | Riva/Tokatköy ⬜ → TT-MAP kurumsal inşaatı göremiyor | **Borsa/İhale'nin proje mahalleleri, sınıfı ne olursa olsun TT-MAP zorunlu izleme listesine.** |
| **D8** | 2 rapor ortak klasöre geç düştü; ilk değerlendirme eski sürümle yapıldı | **Ortak klasör tek doğruluk kaynağı + teslim kesme saati.** Değerlendirme, teslim kapandıktan sonra başlar. |
| **D9** | Hiçbir CC diğerini kontrol etmedi | **Çapraz kontrol turu eklensin.** Üreten ≠ denetleyen (F1 kural 4) — Finans üretiyorsa Finans denetleyemez. |
| **D10** | Fiyat tek kesit → gecikmenin fiyat ayağı ölçülemedi; S55 Beykoz klasörü boş çıktı | **İlk iş: kesiti sürümle ve boş olmadığını doğrula.** Panel bugün başlamazsa 2 yıl sonra da başlamamış olur. |
| **D11** | Tapu kanalı sistemde hiç yok | **Yeni kanal ihtiyacı.** Bant alt kenarı + mülkiyet sorusu ancak buradan kapanır. İlçe turundan bağımsız, sistemik. |

## İLÇE TURU — sıra

```
0. ÖN KOŞUL    her CC "koşabilir miyim" der (D6) · mahalle kanonu dağıtılır (D4)
               · her CC kanonik setini ilan eder (D5)
1. SORU SETİ   ilçenin 2-3 büyük olayı önceden yazılır (D2)
2. FİYAT DONDUR o günkü kesit sürümlenir + BOŞ OLMADIĞI doğrulanır (D10)
3. TUR-1       7 CC keşif · her biri "cevaplayamadıklarım" ile
4. TUR-2       tur-1'in boşluklarına hedefli ikinci geçiş (D1) ← en büyük kazanç burada
5. ÇAPRAZ TUR  sayaçlar yan yana; çelişkiler listelenir (D3, D9)
6. FİNANS SENTEZ dört eksen + güven yüzdesi + yanlışlanabilir öngörü
7. DENETİM     Finans dışı imza (kural 4)
```

---

# SONUÇ — bir yatırımcıya bugün söyleyebileceğim

> **Beykoz'un üçte ikisi (28/45 mahalle, %62) orman/kırsal statüde — kalıcı bir
> arz kısıtı** *(TT-MAP, %90)*. Kalan üçte birde kamu parası iki noktada
> toplanıyor: **Hastane-Merkez ve Kavacık** *(İhale, %55)*; 2024'teki 5,3 milyar
> TL'lik zirve tek bir kaleme — **4,18 milyar TL'lik 500 yataklı hastaneye** —
> ait *(İhale, %85)*, yani süreklilik değil, tek tesis.
>
> **Fiziksel büyüme köprü koridoru boyunca yoğunlaşıyor:** koridora 3 km'den
> yakın 11 mahalle ort. +2,3 puan, uzak 6 mahalle −2,8 puan; en hızlı ikisi
> **Ortaçeşme (+10,0 p) ve Yalıköy (+8,4 p)** *(TT-MAP, %55 — köprü etkisi ile
> kıyı etkisi ayrıştırılamadı, "köprü sayesinde" diyemiyoruz)*.
>
> **Ama o iki mahallede konut yok.** Ortaçeşme'de satılık konut ilanı **sıfır**;
> kiralıkların hepsi 1.350–2.200 m²'lik depo ve işyeri, m² kirası ilçenin en
> düşüğü *(Analiz S46, %80)*. Oradaki kentleşme büyük olasılıkla **konut değil
> lojistik** *(Finans sentezi, %60)*. "Kentleşen mahalle = konut fırsatı"
> okuması burada **yanlış olur**.
>
> **Kavacık büyümüyor, doluyor.** Yapılaşma 2016 %58,4 → 2025 %52,4 *(TT-MAP,
> güven yüksek)*; konut m² medyanı **84.722 TL** ile ilçenin en ucuzu, buna
> karşılık ofis kirası **442 TL/m²/ay (n=33)** ile en derin hücresi *(Analiz S46)*.
> Buradaki hikâye değer artışı değil **kira**.
>
> **Getiri oranını yine de veremiyorum** — ticari satılık ilanlarının m² alanı
> boş. Ofis kirasını konut satış fiyatına bölmeyi reddediyorum; iki farklı varlık
> sınıfı. **Tek bir işlem** (ticari satılık m² kurtarma) bunu açar.
>
> **Zamanlama:** Riva'da kurumsal sermaye 2016-17'de girdi (AGYO arsa, EKGYO ihale
> ve sözleşme), fiziksel inşaat **2025 Nisan'da** başladı — arada **7,6–8,4 yıl**
> *(Borsa/KAP, %80)*. İstanbul için varsayılan ~5 yıldan **uzun**; muhtemel sebep
> Beykoz'un imar rejimi. **Tek zincir — ilçe kuralı değil.**
>
> **Fiyat tarafında gerçek bant veremiyorum.** Acarlar'da ilan medyanı
> 210.000 TL/m² ama tipik ürün **340 m², 6+2 bir villa** — bunu 2+1 daireye
> uygulayamazsınız. Ayrıştıracak yaş/kat/site verisi **hiçbir CC'de yok**;
> şişirme payı da **ölçülemedi** (tek snapshot). Bu rakamlar **istenen**
> fiyattır; işlem fiyatı altındadır, **ne kadar altında bilmiyorum.**
>
> **Şişecam/Paşabahçe dosyası açık.** Beş kanalda arandı, beşi de nicel olarak
> boş; ama ulusal basın havuzumuz **60 günlük**, KAP penceremiz **yalnız 2024**.
> Elimizde 2016'da bir "Şişecam direnişi" videosunun **varlığı** var, içeriği
> henüz okunamadı. **Bir 2016 olayı kanallarımızda zaten görünemezdi —
> yokluk kanıtı değil.**
>
> **Bir tahminde bulunuyorum ve yanlışlanabilir:** Riva'da yer teslimi 2025-04'te
> yapıldıysa, uydu ölçümünde yapılaşma artışı **2026-2027'de görünmeli.**
> Görünmezse zincir kopmuştur. Bu, gecikme katsayısının ilk canlı testidir.

---

**Kaynaklar (#21-B):** CC-TT-MAP MAP24-25 · CC-Basın S78-79 · CC-İhale İ59-60 ·
CC-Borsa S54-55 · CC-TT-AI TTA93-95 · **CC-Analiz S46** · **CC-Sosyal S201-202**
**Üreten:** CC-Finans F2 · **Denetleyen:** ☐ (kural 4 — boş bırakılamaz)
**$0 · A04 · V16 · SİLME-YOK · #21-B · #34**
