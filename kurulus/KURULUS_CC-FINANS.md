# TRADİA KURULUŞ DOSYASI — **CC-FİNANS**
### Talep tarafı · Yatırım zekâsı birimi

**Dizin:** `~/finans/` · **Sprint serisi:** bağımsız `F` (Standing #33)
**Kuruluş:** 2026-07-25 · **Bu dosya:** 2026-07-29 · **Yaş:** 5 gün · **8 sprint**
**Üreten:** CC-Finans · **Denetleyen:** ☐ *(kural 4 — sekiz sprinttir boş)*
**Disiplin:** $0 · A04 · V16 · #21-B · #34 · kural 5 · KVKK #31 · SİLME-YOK

> **Arşiv taraması yapıldı (betik-önce).** TT-HAFIZA takılı (931 Gi, %18 dolu).
> `find /Volumes/TT-HAFIZA -iname "*finans*"` → tek eşleşme Basın'ın haber
> arşivindeki alakasız bir HTML. **Kuruluş öncesi CC-Finans arşivi YOKTUR** —
> aranan yer yazılarak beyan edilmiştir (kendi "YOK beyanı kuralım").

---
---

# BÖLÜM A · TEK SAYFA ÖZET

## Ne yapıyorum
Tradia'nın diğer birimleri **veri toplar** (ilan, ihale, haber, uydu, KAP).
Ben o ham gerçeği **bir yatırımcının sorusuna çeviririm.** Her çıktımda dört
şey birlikte durur: **DEĞER** (bu para burada neyi alır) · **YÖN** (bölge
nereye gidiyor) · **ZAMANLAMA** (fiziksel değişim fiyata kaç yılda yansır) ·
**GÜVEN** (bunu ne kadar güvenle söylüyoruz).

Kendi ham verim yok. **Türetilmiş katmanım** — okurum, hesaplarım, hiçbir
havuza yazmam.

## Beş günde ne kurdum

| | |
|---|---|
| **Resmî çıpa** | TCMB EVDS'ye API erişimi açıldı; İstanbul konut birim fiyatı **87.301 TL/m²** (2026-Q2) sisteme girdi |
| **Zaman ekseni** | 16 yıllık seri indirildi — KFE 198 ay, kira endeksi 102 ay, kredi faizi 863 hafta |
| **Getiri eğrisi** | İstanbul brüt kira getirisi 34 çeyrek: 2022-Q2 **%4,02** dip → 2026-Q2 **%6,09** |
| **Emsal tablosu** | Beykoz 84 hücre (n≥8, IQR'lı, dönem damgalı) — 64 hücreye bilerek **rakam yazılmadı** |
| **Gecikme katsayısı** | İlk ölçüm: Riva'da sermaye→inşaat **7,6–8,4 yıl** |
| **Kalite bayrağı** | Konut kredisi 2021-07→2025-07 arası **49 ay reel daraldı**; o pencerede resmî endeks piyasanın yalnız **%17'sini** gördü |

## Bugün söyleyebildiğim en net üç cümle

1. **Konutun fiyatı enflasyonu yenmiyor, kirası yeniyor.** *(yıllık, 2026-06:
   İstanbul fiyat reel **−%5,16**, kira reel **+%0,99** — ölçtüğüm tek pozitif)*
2. **Beykoz tek parça değil.** *(yıllıklandırılmış: Riva reel −%4,6 ile
   İstanbul'la başa baş, Yavuz Selim −%35,5 ile 40 puan geride)* — soru
   *"Beykoz'a girer miyim"* değil, **"hangi tarafına"**dır.
3. **Prestijli mahalle getiri değil prim satıyor.** *(Kavacık %6,19 > İstanbul
   %6,09 > Acarlar %4,97 — Acarlar en pahalı, getirisi en düşüklerden)*

## Söyleyemediğim
**Bir mülkün değerini.** Gerçekleşen satış fiyatı (tapu) hiçbir kaynağımızda
yok — TKGM toplu veri ToS gereği kapalı, MEGSİS kurumsal protokol istiyor.
Elimizdeki iki kenar **ilan** ve **değerleme**dir; alt kenar açıktır.
Ayrıca **ilçe kırılımı hiçbir resmî kaynakta yok** — ne TCMB değerlemesinde
ne TÜİK satışında. Beykoz'un kendi resmî çıpası yoktur.

## En pahalı dersim
**Dört kez "veri yok" dedim, dördünde de vardı.** İhale arşivi · EVDS API'si ·
`Krediye Uygun` alanı · dokuz hedonik katsayı. Hepsi ben "yok" derken diskteydi.
Bundan bir kural çıkardı: ***"veri yok" bir ölçüm değil, bir arama sonucudur.***

## Anayasaya üç önerim
1. **"YOK" BEYANI KURALI** — bir CC "veri yok" derken **nerede aradığını**
   yazmak zorunda; kapsamsız "yok" bulgu değil nottur.
2. **DÖNEM DİSİPLİNİ** — dönem etiketi zorunlu, dönemler eşitlenmeden kıyas yok.
3. **İKİ POPÜLASYON KURALI** — farklı evrenlerin oranına mekanizma adı
   ("şişirme/prim/iskonto") verilemez; nötr ad zorunlu.

## Açık yapısal borcum
**Sekiz sprinttir `Denetleyen: ☐` boş.** Kural 4 gereği kendi çıktımı
onaylayamam. Bu benim çözebileceğim bir şey değil — **kurumsal karardır.**

---
---

# BÖLÜM B · GENİŞ TEKNİK ÖZET

---

## 1 · DOĞUŞ

### Ne zaman, hangi ihtiyaçla
**2026-07-25.** Tradia o tarihte olgun bir **ARZ** sistemiydi: yedi CC ilan,
ihale, haber, uydu ölçümü, KAP bildirimi, sosyal söylem topluyordu. Ama
sistemin ürettiği hiçbir şey **bir yatırımcının sorusuna** cevap vermiyordu.

Elde şu vardı: 180.994 ilan kaydı, 3.770 mahallenin uydu değişim serisi,
102.174 kamu ihalesi, canlı haber akışı. Elde **olmayan** şuydu: *"300 milyon
lira Beykoz'a girer mi?"* sorusunun cevabı.

**Ben o boşluk için açıldım.**

### ARZ → TALEP geçişindeki yerim

```
ARZ FAZI (kuruluşumdan önce)          TALEP FAZI (benden itibaren)
─────────────────────────────         ────────────────────────────
Analiz   → ilan topla                 CC-FİNANS → dört ekseni birleştir:
TT-MAP   → uyduyla ölç                            DEĞER / YÖN / ZAMANLAMA / GÜVEN
İhale    → kamu parasını izle                     ↓
Basın    → haberi tara                 CC-Signals → çapraz kontrol (F2'de
Borsa    → sermayeyi izle                          benim tespit ettiğim
TT-AI    → mahalle bağlamı                         açıktan doğdu)
Sosyal   → söylemi dinle
```

**Kritik nokta:** Ben ARZ birimlerinin *devamı* değil, **tüketicisiyim.**
Onların ölçtüğünü almam, birleştiririm ve **bir soruya bağlarım.** Bu yüzden
kendi ham verim yoktur ve olmamalıdır.

### Doğuşumun ikinci ürünü: CC-Signals
F2'de yedi CC'nin Beykoz raporunu tek masaya koyduğumda şunu gördüm:

> *"Hiçbir CC bir diğerinin sayısını kontrol etmedi. Yedi dürüst monolog,
> sıfır diyalog. Çapraz kontrol katmanı sistemde yok — ve kural 4 gereği o
> katman ben de olamam."*

**CC-Signals bu tespitten doğdu** (`SIGNALS_STATE.md`: *"Var oluş sebebi:
F2-G3/D9"*). Yani doğuşum, sistemde ikinci bir birimin doğmasına yol açtı.

---

## 2 · FELSEFE & PRENSİPLER — her kural yeniden sorgulandı

### Çalışma felsefem
**Bir finansçının işi tahmin etmek değil, neyi bilip neyi bilmediğini
ayırmaktır.** Yanlış bir sayı, hiç sayı olmamasından kötüdür — çünkü karara
girer. Bu yüzden ilk sprintimde **bilerek sıfır sayı yayınladım.**

### Kurallarımın denetimi

| # | Kural | Kaynak | **Hâlâ geçerli mi?** |
|---|---|---|---|
| 1 | **Tek sayı yok, bant var** | F1 | 🟡 **KISMEN — revize gerek.** Gerekçesi ("ilan yukarı, tapu aşağı yalan söyler") **ölçümle çürüdü** (bkz. kural 2). Ama pratikte doğru kaldı: her hücrede Q1–Q3 veriyorum. **Gerekçe değişmeli, kural kalmalı.** |
| 2 | **Şişirme varsayılmaz, ölçülür** | F1 | 🟢 **EN DEĞERLİ KURALIM.** Üç kez kendini kanıtladı. Varsayım "%10 yukarı düzelt" idi; ölçüm **%17 AŞAĞI** çıktı — yönü bile yanlıştı. Ölçmeden düzeltmeme kararı beni iki kat büyük bir hatadan korudu. |
| 3 | **Başkasının havuzuna yazılmaz, okunur** | F1 | 🟢 **GEÇERLİ, hiç ihlal edilmedi.** 8 sprintte 10+ havuz okundu, hiçbirine yazılmadı. K24a köprüsü de bu kuralın uygulaması. |
| 4 | **Denetleyen ≠ üreten** | F1 | 🟢 **Doğru ama İŞLEMİYOR.** Sekiz sprinttir `☐`. Kural haklı, **kurumsal karşılığı kurulmamış.** En büyük yapısal borcum. |
| 5 | **Dönem disiplini** | F4 | 🟢 **GEÇERLİ, bedelle öğrenildi.** F3'te 4 aylık ile yıllığı kıyasladım; sayılar doğruydu, **sonuç ters çıktı.** F8'de tekrar işe yaradı (12,3 yıl +%81,3 ↔ son yıl −%5,16 çelişkisini çözdü). |

### Ortak Tradia kurallarının bendeki karşılığı

| Kural | Bende nasıl işliyor | Denetim |
|---|---|---|
| **A04** (ölç-dürüst) | Ölçemediğimi "ölçemedim" diye yazdım: 64 emsal hücresi "VERİ YETERSİZ", kaynaksız kat karşılığı aralığı yazılmadı, İncirköy anomalisi doğrulanamadı | 🟢 |
| **V16** (öz-eleştiri) | Üç iddiamı geri çektim, gerekçesiyle (§6) | 🟢 |
| **#21-B** (her sayıda kaynak) | Her tabloda seri kodu + dönem + n | 🟢 |
| **#34** (kaynak karıştırma yasağı) | İL çıpası ile MAHALLE verisi **yan yana gösterildi, hiç bölünmedi.** Seçilim primi (+%26,1, Beykoz) bir mahalle fiyatıyla çarpılmadı | 🟢 **en sık uyguladığım kural** |
| **$0** | 8 sprint, sıfır maliyet. EVDS anahtarı ücretsiz | 🟢 |
| **SİLME-YOK** | Hiçbir dosya silinmedi; sürümler yan yana duruyor | 🟢 |
| **KVKK #31** | Çıktılarımda kişi verisi yok — ilan sahibi, telefon, isim hiç işlenmedi. Tek kişi adı geçen yer: **kamusal sıfatıyla** aktör beyanları (belediye başkanı açıklaması) | 🟢 |
| **yasak-dil** | F7 lansman bloğunda uygulandı: "kesin/garanti/fırsat/kaçırmayın/yükselecek" yok; kalıp **ölçüm + dönem + kaynak + bant + n** | 🟢 |

### 🔴 Eksik gördüğüm — kural setimde olmayan ama olması gereken

1. **Deflatör kuralı yok.** Reel hesaplarımın hepsi TÜFE'ye dayanıyor ama
   "hangi deflatör hangi soruda" yazılı değil. F8'de bu somutlaştı: aynı tutar
   TÜFE ile 22,05 Mr, KFE ile 39,99 Mr TL. **Kural adayı:** *tasarruf/satın
   alma gücü sorularında TÜFE, varlık senaryolarında varlık endeksi; hangisi
   seçildiyse gerekçesiyle yazılır.*
2. **Örneklem eşiği kuralım hücre bazında var, seri bazında yok.** n≥8'i emsal
   hücresine uyguluyorum ama bir zaman serisinin kaç noktadan sonra
   "seri" sayılacağı tanımsız.
3. **Güven yüzdesi rubriğim yazılı ama kalibre değil.** F2'de %85/%60/%40
   bantları tanımladım; bunlar **kalibre edilmiş yargıdır, olasılık değil** —
   bunu her seferinde yazıyorum ama kural haline getirmedim.

### Gereksiz gördüğüm
**Hiçbirini gereksiz görmüyorum** — ama **kural 1'in gerekçesi yanlış** ve
düzeltilmeden durması, sonraki bir CC'yi aynı hataya götürür.

---

## 3 · ANAYASA / KURAL SETİM

### Yürürlükteki 5 kural (kanonik: `~/finans/FINANS_STATE.md §2`)

**1 — TEK SAYI YOK, BANT VAR.**
Her çıktı alt sınır + üst sınır + bantta konum + güven içerir. Bandın darlığı
güvenimizin ölçüsüdür.
*🟡 Gerekçe revizyonu bekliyor (bkz. §2).*

**2 — ŞİŞİRME PAYI VARSAYILMAZ, ÖLÇÜLÜR.**
Ölçülemiyorsa düzeltme **uygulanmaz** ve `kaynak_kanit_tipi: VARSAYIM` diye
etiketlenir — asla `OLCUM` değil (Standing #21-A).

**3 — BAŞKASININ HAVUZUNA YAZILMAZ, OKUNUR.**
Her sayının arkasında hangi CC, hangi tarih, hangi güven yazar (#21-B).
Kaynak karıştırma yasak (#34).

**4 — DENETLEYEN ≠ ÜRETEN.**
CC-Finans kendi bandını onaylayamaz. Otonom hat en fazla `durum: ADAY` üretir.

**5 — DÖNEM DİSİPLİNİ.**
Her sayının yanında dönem etiketi zorunludur; dönemler eşitlenmeden kıyas
yapılmaz. Yıllıklandırma açıkça yazılır: `(1+Δ)^(12/ay) − 1`.
**n<20 örneklemde yıllıklandırılmış değer ARTEFAKT sayılır.**

### Standing adaylarım (3)

| # | Ad | Metin | Gerekçe (bedeli ödenmiş) |
|---|---|---|---|
| **A1** | **"YOK" BEYANI KURALI** | Bir CC "şu veri yok" dediğinde **nerede aradığını** yazmak zorundadır: hangi dosya, hangi alan, hangi sorgu. Kapsamı yazılmamış "yok" beyanı **bulgu değil not** sayılır ve başka CC'nin kararına dayanak yapılamaz. | Dört kez "yok" dedim, dördünde de vardı. F1'in "şema darlığı" teşhisi üç gün sistemin en çok alıntılanan bulgusuydu ve **yanlıştı**. |
| **A2** | **DÖNEM DİSİPLİNİ** *(kural 5)* | yukarıdaki metin | F3'te 4 aylık ile yıllığı kıyasladım; sonuç **tersine döndü**. |
| **A3** | **İKİ POPÜLASYON KURALI** | Farklı evrenlerden gelen iki istatistik oranlandığında çıkan sayıya **mekanizma adı verilemez** ("şişirme", "prim", "iskonto"). Farklı evrenler için nötr ad zorunlu: *"A evreni ÷ B evreni oranı"*. | 0,829'a üç sprint "şişirme oranı" demeye çok yaklaştım; mekanizması **seçilimdi**. Yanlış ad yanlış düzeltmeyi davet eder. |

**+ Yeni aday (bu dosyada doğdu):**
**A4 — DEFLATÖR BEYANI:** Reel bir sayı verilirken hangi deflatörün neden
seçildiği yazılır. *(F8: aynı tutar TÜFE ile 22,05 Mr, KFE ile 39,99 Mr TL.)*

---

## 4 · SAHİPLİK DATASI

> **Hiçbiri ham veri değildir.** Hepsi resmî API'den çekilmiş veya başka CC'nin
> havuzundan **okunarak türetilmiştir.** Kanonik ham veri sahibi ben değilim.

### 4.1 EVDS hasadı — **kanonik türev**

**`~/finans/data/istanbul_kfe_tam.json`** · **186.023 bayt** · üretim 2026-07-27
**Üreten betik:** `~/finans/kod/evds_hasat_f4.py` (7.181 b) · **güncelleme: manuel**

| Seri | Kayıt | Kapsam | EVDS kodu |
|---|---:|---|---|
| KFE (TR + İstanbul) | **198** | 2010-01→2026-06 | `TP.KFE.TR` · `TP.KFE.TR10` |
| YKKE kira endeksi | **102** | 2018-01→2026-06 | `TP.YKKE.TR` · `TP.YKKE.TR10` |
| Konut birim **fiyatı** TL/m² | **66** | 2010-Q1→2026-Q2 | `TP.BIRIMFIYAT.TR` · `.IST` |
| Konut birim **kirası** TL/m² | **34** | 2018-Q1→2026-Q2 | `TP.BK.TR` · `.ISTANBUL` |
| TÜFE (2025=100) | **198** | 2010-01→2026-06 | `TP.TUKFIY2025.GENEL` |
| TÜFE (eski, 2003=100) | 193 | →2026-01 *(seri bitti)* | `TP.FG.J0` |
| Konut kredisi **faizi** | **863** | 2010-01→2026-07 haftalık | `TP.KTF12` |
| Konut kredisi stoku (aylık) | **197** | 2005-12→2026-05 | `TP.KM.B11` |
| Konut kredisi stoku (haftalık) | **108** | 2024-06→2026-07 | `TP.HPBITABLO6.3` |
| Konut kredisi hacmi *(arşiv, ölü)* | 634 | →2025-01 | `TP.TUKKRE.K014` |
| **Getiri eğrisi** *(türetilmiş)* | **34** | 2018-Q1→2026-Q2 | hesap |
| **Reel daralma bayrağı** *(türetilmiş)* | **185** | aylık | hesap |

**Tazelik:** çıpa 2026-Q2 · endeks 2026-06 · faiz 2026-07-17
**API:** `GET https://evds3.tcmb.gov.tr/igmevdsms-dis/{uri}` · anahtar **header**'da
(`key:`) · şema `/v3/api-docs` (116 uç) · anahtar `~/finans/.env` (mod 600,
**hiçbir çıktıya yazılmadı**)

### 4.2 Beykoz türev setleri

| Dosya | Boyut | İçerik | Dönem | Kanonik? |
|---|---:|---|---|---|
| `data/beykoz_satis_serisi.json` | 22.861 b | İstanbul konut satışı **162 ay** (toplam + ipotekli) + kredi daralması çaprazı | 2013-01→2026-06 | türev, kanonik |
| `data/beykoz_emsal_v1.json` | 12.590 b | **84 hücre** (20 rakamlı / 64 "VERİ YETERSİZ") + FE katsayıları + getiri | `S48_UZANTI_2026-Haz-Tem` | türev; **kanonik emsal CC-Analiz'de** (`beykoz_emsal_v2.json`, S53, 84 yayın hücresi) |
| `data/sisirme_orani_v1.json` | 6.430 b | ilan ÷ değerleme = **0,829** + 5 kompozisyon ekseni + yasak kurulumlar | 2026-Q2 | türev |
| `data/beykoz_kat_karsiligi_v1.json` | 3.227 b | ilan izi %4,6 + arsa/konut oranı | 2026-06→07 | türev, **ilk çerçeve** |
| `data/fiyat_guven_karti.json` | 8.825 b | üç kalite katı + güncellik vitrini + TL-cebe seti | 2026-07-28 | sunum eki |
| `data/istanbul_kfe.json` | 8.703 b | F3'ün anahtarsız bülten hasadı | 2026-06 | **eski**, `_tam` ile yer değiştirdi |
| `data/_istanbul_satis_ham.json` | 16.890 b | ara dosya (162 kayıt) | — | geçici |

### 4.3 Belgeler

| Dosya | Boyut | Sprint |
|---|---:|---|
| `FINAL_cc_finans_beykoz.md` | **39.938 b** | Kapanış + F7 EK-1 |
| `vaka_beykoz_F2.md` | 43.693 b | F2 — 7 CC değerlendirmesi |
| `FINANS_STATE.md` | 24.552 b | kanon (sürekli güncel) |
| `ortak_dosya_girdi_f4.md` | 16.925 b | F4 |
| `evds_envanter.md` | 16.258 b | F3 |
| `cc_finans_F5.md` / `F6.md` / `F8.md` | 15.985 / 15.172 / 10.927 b | F5, F6, F8 |
| F1 belgeleri (5 dosya) | 41.657 b | G1–G5 iskeletleri |

**`~/finans/` toplam: 497.837 bayt / 22 dosya.**

### 4.4 Ortak alandaki çıktılarım
`~/tradia_konusmalar/02_CC_STATE/` → 5 Hafıza bildirimi (F1, F4, F5, F6, F8)
+ 1 K24a köprüsü (F7→Signals). **Toplam 63.405 b.**

### 4.5 Okuduğum havuzlar (salt-okuma, hiçbirine yazılmadı)
CC-Analiz `sahibinden_master_v24` · `beykoz_csv_derin_S46` ·
`uzanti_katmani_beykoz_S48` · `beykoz_emsal_v2` · S46/S49/S51/S53 raporları ·
CC-TT-MAP `ttmap_nokta/degisim` · CC-Basın feed + `vaka_beykoz_S96_ozet.json` ·
CC-İhale `bulten_yapim.jsonl` · CC-Borsa KAP · CC-TT-AI evren ·
CC-Sosyal S201-208 · CC-Signals SIG1-SIG7

---

## 5 · TEKNİK İLERLEME KRONOLOJİSİ

| Sprint | Tarih | Kilometre taşı |
|---|---|---|
| **F1** | 07-25 | Kuruluş. 5 belge + kanon. **Bilerek sıfır sayı.** Üç sert bulgu: şema darlığı · zaman yok · bant tek kenarlı |
| **F2** | 07-25 | 7 CC raporu tek masada. **Gecikmenin ilk ölçümü** (Riva 7,6–8,4 yıl). **"Çapraz kontrol katmanı yok"** tespiti → CC-Signals doğdu |
| **F3** | 07-26 | TCMB keşfi. **KFE = DEĞERLEME fiyatı** (üçüncü fiyat). EVDS evds2→evds3 taşınmış, API bulunamadı |
| **F4** | 07-27 | **API OpenAPI şemasından çözüldü.** 16 yıllık hasat. TÜFE %32,11 ölçüldü. Getiri eğrisi. **Şişirme 0,829** — F1 varsayımı çürüdü. **Kural 5 doğdu** |
| **F5** | 07-27 | Makasın ayrıştırması: **coğrafya + kırpma elendi.** Kredi hacim halefi. **Bayrak katmanı çalıştı: 49 ay reel daralma** |
| **F6** | 07-27 | **Uzantı `detay` alanı açıldı** — F1'in "yok" dediği 9 alan orada. **Seçilim ölçüldü (+%26,1).** Emsal v1, satış serisi, kat karşılığı çerçevesi |
| **KAPANIŞ** | 07-27 | Beykoz nihai beyan: 8 bölüm · 10 altın cümle · 3 geri çekme · 3 anayasa önerisi |
| **F7** | 07-28 | Fiyat katmanı lansmanı (EK-1) + güven kartı + K24a→Signals. **"Üç bağımsız katman" ifadesi düzeltildi** |
| **F8** | 07-29 | S96 son tur. **"2016 zirvesi" öncülü çürütüldü** (gerçek zirve 2012). **L2 = arşiv kapsaması teşhisi.** 1,25 Mr TL → **22,05 Mr TL** |

### Bugünkü yetenek haritam

| Yetenek | Durum |
|---|---|
| Resmî çıpaya bağlı fiyat konumlandırma (il düzeyi) | 🟢 çalışıyor |
| Reel/nominal ayrımı, deflatör uygulama | 🟢 çalışıyor, TCMB ile doğrulandı |
| Getiri eğrisi (seviye bazlı, endeks değil) | 🟢 çalışıyor |
| Emsal hücresi üretimi (eşik + IQR + dönem damgası) | 🟢 çalışıyor |
| Endeks kalite denetimi (kredi bayrağı + ipotekli pay) | 🟢 çalışıyor |
| Mahalle bazlı reel konumlandırma | 🟡 çalışıyor ama **ilan tarafı tek kaynak** |
| Gecikme katsayısı | 🟡 **yöntem var, temiz vaka yok** (tek zincir ve o da davalı) |
| Hedonik değerleme | 🔴 **kurulmadı** — alanlar F6'da bulundu ama v24'e taşınmadı |
| Bir mülkün değerlemesi | 🔴 **yapılamaz** (tapu kenarı yok) |
| Otonom çalışma | 🔴 **zamanlayıcı kurulmadı** (bilinçli) |

---

## 6 · BEYKOZ DOSYASI KATKIM + BANA VERİLEN KARARLAR

### 6.1 Ürettiklerim

| Ne | Nerede |
|---|---|
| 7 CC raporunun tek masada değerlendirmesi + sistem denetimi | `vaka_beykoz_F2.md` (43,7 KB) |
| Gecikme katsayısının **ilk ölçümü** — Riva 7,6–8,4 yıl | F2 §1.3 |
| **Yanlışlanabilir öngörü:** Riva yapılaşması TT-MAP 2026-27'de görünmeli | F2 §1.3 (hâlâ test bekliyor) |
| Resmî çıpa: **87.301 TL/m²** İstanbul 2026-Q2 | F3-F4 |
| **Getiri eğrisi** 34 çeyrek (%4,02 dip → %6,09) | F4 |
| **Şişirme oranı 0,829** + 5 eksenlik ayrıştırma | F4-F6 |
| **Seçilim primi +%26,1** ölçümü | F6 |
| **Satış serisi** 162 ay + nakit payı %65,8→%83,0 | F6 |
| Emsal tablosu (84 hücre, 64'ü "VERİ YETERSİZ") | F6 |
| **Kat karşılığı ilk çerçevesi** (Yavuz Selim yakınsaması) | F6 |
| Kapanış raporu + fiyat güven bloğu | FINAL + EK-1 |

### 6.2 Beykoz'un dört ekseni — benim cevabım

**DEĞER:** Anadolu Hisarı villa 480.000 → Kavacık daire 82.000 TL/m² *(dönem
`S48_UZANTI_2026-Haz-Tem`, n≥8)*
**YÖN:** %62 orman = kalıcı arz kısıtı; kamu parası iki noktada (Hastane-Merkez,
Kavacık); büyüme köprü koridoru boyunca *(nedensellik kurulamadı)*
**ZAMANLAMA:** Riva sermaye→inşaat 7,6–8,4 yıl — **ama vaka kirli** (§6.3)
**GÜVEN:** her iddiada kaynak CC + yüzde; 64 hücrede bilerek sayı yok

### 6.3 Bana verilen kararlar, dersler, düzeltmeler — **tamamı**

#### Üst Akıl / Patron direktifleri
| # | Direktif | Sprint | Nasıl uyguladım |
|---|---|---|---|
| D1 | *"Ham havuzlara inme — bu .md'leri oku"* | F2 | Uydum. İki rapor klasörde yoktu, kendi CC dizinlerinden okudum ve **bunu yazdım** |
| D2 | *"Ne tam övgü ne rezillik — doğruları bul"* | F2 | 7 CC'yi ayrı ayrı, iyi/kötü yanlarıyla değerlendirdim |
| D3 | *"Bant ver, tek sayı verme"* | F2 | Her hücrede Q1–Q3 |
| D4 | *"Bilmediğine bilmiyorum de"* | F2 | 64 hücre "VERİ YETERSİZ" |
| D5 | *"Dönem etiketi zorunlu"* + **"sert negatif okuması geri çekildi"** | F4 | **Kural 5 olarak kanona aldım** |
| D6 | *"İlçe kırılımı YOK uyarısı her çıktıda"* | F4 | Her il-düzeyi tabloda var |
| D7 | *"n<8 hücreye rakam YAZMA — uçurum-önleme"* | F6 | 64/84 hücre boş bırakıldı |
| D8 | *"Yasak-dil uyumlu, künyeli"* | F7 | Lansman bloğunda uygulandı |
| D9 | *"Nedensellik YOK, eşzamanlılık tablosu"* | F8 | Kurdum; **eşzamanlılık da kurulamadı** dedim |
| D10 | *"Eski EVDS anahtarını ara, ANAHTARI ÇIKTIYA YAZMA"* | F4-ÖN | Yol raporladım, değer yazmadım; landgold Tradia-DIŞI diye kullanmadım |

#### Diğer CC'lerden gelen düzeltmeler — **kabul ettiklerim**
| Kaynak | Düzeltme | Sonuç |
|---|---|---|
| **CC-Signals SIG4** | Riva'daki 8 yıllık gecikmenin sebebi **imar rejimi değil, DAVA** (2017 ihale kazananı sözleşmeye gelmedi, tazminat istinafta — KAP 2023) | **Yorumumu geri aldım.** Ölçüm doğru (7,6–8,4 yıl), **genelleme yanlış** — vaka kirli, temiz ölçüm için davasız zincir gerek |
| **CC-Signals SIG4** | Ortaçeşme'de fiziksel inşaat yok (üç imza: NDVI+NDBI+radar) | F2'deki **"lojistik" yorumum çelişiyor** — çözmedim, **açık bıraktım** |
| **CC-İhale İ64** | TKGM toplu veri ToS-yasak, MEGSİS kurumsal protokol | *"Tapu kanalı yok"* iddiamı **bağımsız doğruladı**; §4.4'ü buna göre inceltim |
| **CC-Analiz S49** | *"'Taramadım' DEĞİL — 'taradım-yok'"* (Ortaçeşme) | F1-B2 siparişim kapandı; **"tutulan stok" yorumumu düzelttim** |

#### Kendi yakaladığım hatalar
| # | Hata | Sprint | Düzeltme |
|---|---|---|---|
| E1 | **"İhale'de İstanbul kaydı 0"** — yanlış dosyaya baktım | F2 | Asıl arşivde **144 Beykoz ihalesi** var; F1-S7 siparişi **geçersiz** |
| E2 | **"Sert negatif"** — 4 aylık ile yıllığı kıyasladım | F3→F4 | Yıllıklandırınca Riva +%26,0 çıktı — **İstanbul'un üstünde.** Kural 5 doğdu |
| E3 | **"Medyanların ortalaması"** yanlış istatistik | F5 | 83.093 çıkıyordu ve *"kompozisyon açıklıyor"* diyecektim; doğrusu **ağırlıklı medyan 72.353** — sonuç tersine döndü |
| E4 | **F1 "ilan şişiktir ~%10"** — yön hatası | F1→F4 | İlan **%17 ALTINDA** çıktı |
| E5 | **"Üç bağımsız katman"** ifadesi | F7 | Talebi **düzelterek** yazdım: çıpa ile oran aynı ölçümün iki yüzü → *"üç kalite katı"* |

#### Başka CC'de bulduğum defektler (bildirdim)
- **CC-Basın S96:** md özeti *"2016 zirvesi"* diyor, **kendi JSON'u 2012'yi
  gösteriyor** (805 ↔ 293, 2016 yedinci sırada). Ayrıca **L2 serisi arşiv
  kapsamasını ölçüyor**, söylem yoğunluğunu değil → normalize edilmeden
  zaman serisi olarak kullanılamaz *(F8)*
- **CC-Analiz:** 7 ilçede yazım tekrarı (`Cekmeköy`/`Çekmeköy`…); 44 girdi ↔
  37 normalize ↔ 39 gerçek ilçe *(F5)*
- **CC-Basın taksonomi:** `kamu_yatirimi = 0` derken İhale aynı ilçede
  144 kamu ihalesi buluyor *(F2)*
- **CC-İhale:** mahalle sözlüğü **33**, gerçek **45** → 12 mahalle eşleşemiyor *(F2)*
- **CC-TT-MAP kapsama boşluğu:** Riva/Tokatköy ⬜ sınıfında → kurumsal inşaat
  yapısal olarak görünmüyor *(F2)*

---

## 7 · DİĞER CC'LERLE SINIRLARIM

### Benim işim
- Dört ekseni **birleştirmek** (DEĞER/YÖN/ZAMANLAMA/GÜVEN)
- **Resmî çıpaya** bağlanmak (TCMB/TÜİK) ve reel/nominal ayrımı
- **Bant + güven** üretmek; hücre eşiği uygulamak
- **Gecikme katsayısı** — fiziksel değişimin fiyata yansıma süresi
- **Endeks kalite denetimi** (kredi bayrağı, örneklem temsiliyeti)
- Başka CC'nin sayısını **kendi sorusuna** çevirmek

### Benim işim DEĞİL
| İş | Sahibi |
|---|---|
| İlan toplamak, mahalle/fiyat havuzu tutmak | **CC-Analiz** |
| Uydu ölçümü, fiziksel değişim | **CC-TT-MAP** |
| Kamu ihalesi arşivi | **CC-İhale** |
| Haber hasadı, söylem arşivi | **CC-Basın** |
| KAP/sermaye takibi | **CC-Borsa** |
| Mahalle ansiklopedisi | **CC-TT-AI** |
| Sosyal söylem | **CC-Sosyal** |
| **CC'lerin birbirini denetlemesi** | **CC-Signals** |

### Çakışma alanları — nasıl çözülüyor

| Alan | Gerilim | Çözüm |
|---|---|---|
| **Emsal tablosu** | Ben de üretiyorum (`beykoz_emsal_v1`), CC-Analiz de (`beykoz_emsal_v2`) | **Analiz'inki kanonik.** Benimki F6'da onlardan önce üretildi; artık **onların v2'sini okuyorum** |
| **Fiyat yorumu** | CC-Borsa *"Beykoz yükselir demem, o Finans'ın işi"* dedi | ✅ **Sınır net ve doğru işledi** |
| **Çapraz kontrol** | Ben başka CC'nin sayısını kontrol ediyorum — Signals'ın işi | **Fark:** ben *kendi hesabım için* kontrol ederim, Signals *sistem adına*. Ama **beni** denetleyemem — kural 4 |
| **Söylem serisi yorumu** | F8'de Basın'ın L2 lensini ölçüt olarak eleştirdim | Kendi alanı ama **finansal seri olarak kullanılacaksa** kalite denetimi benim işim |
| **Sunum dili** | F7 lansman bloğu — pazarlama sınırında | **Yasak-dil + künye** ile sınırladım; abartılı ifadeyi **reddettim** |

---

## 8 · AÇIK BORÇLAR + GELECEK 3 YETENEK

### 8.1 Açık borçlar

| # | Borç | Tip | Kim çözer |
|---|---|---|---|
| **B1** | **`Denetleyen: ☐` sekiz sprinttir boş** | 🔴 yapısal | **Kurumsal karar** — ben çözemem |
| **B2** | **Tapu kenarı yok** — bandın gerçek alt kenarı | 🔴 hukuki sınır | TKGM kurumsal protokol |
| **B3** | **İlçe kırılımı yok** — Beykoz'un resmî çıpası yok | 🔴 yapısal | TCMB "Tabaka" katmanı → **kurumsal veri talebi** |
| **B4** | **Değerleme yanlılığı** — 0,829'un tek kalan açık ekseni | 🔴 ölçülemez | TCMB iç verisi |
| **B5** | **Hedonik model kurulmadı** — alanlar F6'da bulundu, v24'e taşınmadı | 🟡 çözülebilir | **CC-Analiz** |
| **B6** | **Gecikme katsayısı temiz vakası yok** — tek zincir, o da davalı | 🟡 | davasız zincir gerek |
| **B7** | **Riva öngörüsü test edilemedi** — uydu ayağı üç turdur boş | 🟡 | **CC-TT-MAP** |
| **B8** | **L2 normalizasyonu** — yıllık arşiv paydası yayımlanmamış | 🟡 | **CC-Basın** |
| **B9** | **Otonom hat kurulmadı** (bilinçli) | 🟢 karar | panel hazır olunca |
| **B10** | **Kural 1'in gerekçesi yanlış**, düzeltilmedi | 🟡 | ben — F9 |

### 8.2 Gelecek üç yetenek önerim

#### **Y1 — Panel: fiyatın zaman ekseni** *(en kritik)*
Bugün mahalle fiyatım **tek kesit + 4 aylık bir pencere**. Gecikme katsayısı
bu yüzden ölçülemiyor. **Öneri:** her tur fiyat kesiti **sürümlenerek**
dondurulsun. 24 ay sonra ilk gerçek gecikme ölçümü mümkün olur.
*Maliyet $0 — sadece "üzerine yazma, sürümle" disiplini.*

#### **Y2 — Hedonik değerleme v1**
F6'da dokuz katsayının kaynağı bulundu (`Bina Yaşı`, `Bulunduğu Kat`,
`Isıtma`, `Krediye Uygun`, brüt/net m²…). CC-Analiz bunları v24'e taşırsa
**"Mahalle Medyan Bandı v0"dan gerçek hedonik modele** geçilir — bir mülkü
niteliklerine göre değerleyebilirim. *S51 zaten 4 mahallede FE-hedonik
çalıştırdı (R²=0,671); ölçek sorunu.*

#### **Y3 — Otonom izleme hattı + tazelik kapısı**
Aylık KFE/YKKE çekimi, kredi bayrağı, ipotekli pay takibi — tasarımı F4'te
hazır, kurulmadı. **Ön koşul:** tazelik kapısı hesaptan **önce** çalışmalı;
bayrak kırmızıysa çıpa **kullanılmamalı**. *(Bugünkü durum: reel +%3,7 🟢,
ipotekli pay %23,3 🟡 — tarihsel ortalamanın altında.)*

---

## Kapanış

Beş günde bir mülkün değerini söyleyemedim ve söylemeyeceğim — o iş için ne
tapu kanalımız var ne ilçe düzeyinde resmî çıpamız.

Söyleyebildiğim: **konutun fiyatı değil kirası enflasyonu yeniyor; Beykoz tek
parça değil ve soru "hangi tarafına"dır; prestijli mahalle getiri değil prim
satıyor; ve elimizdeki ilan fiyatları resmî değerlemenin altında — çünkü
ilanlar piyasanın daha ucuz, daha az kredilenebilir kesimini gösteriyor.**

Bir de şunu: **dört kez "veri yok" dedim, dördünde de vardı.**
Benden sonraki birim bunu benden önce bilsin.

---

**Üreten:** CC-Finans · F1→F8 · 2026-07-25 → 2026-07-29
**Denetleyen:** ☐ *(kural 4 — yapısal borç)*
**Kanon:** `~/finans/FINANS_STATE.md` · **Kapanış:** `beykoz_vaka/FINAL_cc_finans_beykoz.md`
**Hariç tutulanlar:** Patron'un ayırdığı konular, ortaklık, şahsi işler,
Tradia-dışı projeler — **bu dosyada yer almaz.**
**$0 · A04 · V16 · #21-B · #34 · kural 5 · KVKK #31 · SİLME-YOK · gönderim yok**

---
---

# EK · CC-FİNANS EK BEYANI
**Tarih:** 2026-07-29 · **Talep:** ÜA · **Denetleyen:** ☐

---

## EK-A · SİNYAL ↔ FİNANS FARKI

> **Bağımsızlık notu:** Bu bölümü CC-Signals'ın kendi metnine **bakmadan**
> yazdım — kıyasın anlamı bu. Signals'ın rol tanımını daha önce `SIGNALS_STATE.md`
> okurken görmüştüm (F5 sırasında); o bilgi aklımda, ama aşağıdaki ayrım
> **benim kendi vantaj noktamdan** kurulmuştur.

### En kısa ayrım

> **CC-Signals: "Burada bir şey oluyor."**
> **CC-Finans: "Bu para burada ne eder, ne zaman eder, ne kadar güvenle?"**

Signals **olayı** bulur. Ben **fiyatı** bağlarım.

### Beş eksende fark

| Eksen | CC-Signals | CC-Finans |
|---|---|---|
| **Birimi** | olay / ayak / ısı skoru | **TL, %, yıl** |
| **Sorusu** | "kaç bağımsız kanal aynı yeri gösteriyor?" | "bu rakam neye göre, hangi dönemde, hangi bantta?" |
| **Girdisi** | 7+ CC'nin **bulguları** | 7+ CC'nin **sayıları** + resmî çıpa (TCMB/TÜİK) |
| **Çıktısı** | kesişim haritası, çift-kanıt dosyası | bant + getiri + gecikme + güven yüzdesi |
| **Zaman anlayışı** | *olay ne zaman oldu* (kronoloji) | *etkisi fiyata ne zaman yansır* (gecikme) |
| **Dış çıpası** | yok — iç tutarlılıkla çalışır | **var ve zorunlu** — TCMB/TÜİK |

### Yöntemsel fark: **yatay ↔ dikey**

```
SIGNALS — YATAY                        FİNANS — DİKEY
────────────────                       ──────────────
Aynı mahalleyi 8 ayakta tarar          Tek soruyu kaynaktan çıpaya indirir
(ihale·uydu·haber·KAP·sosyal…)
                                       ilan medyanı
Riva 6 · Kavacık 5 · Çubuklu 4              ↓ (÷ resmî değerleme)
        ↓                              0,829 oranı
"3+ ayak = bak buraya"                      ↓ (mekanizma ayrıştırması)
                                       seçilim +%26,1
                                            ↓ (deflatör)
                                       reel −%5,16
```

Signals **genişler** — kaç kanal aynı yeri gösteriyor?
Ben **derinleşirim** — bu sayı hangi zincirden geçti, nerede kırılır?

### Örtüştüğümüz yer ve nasıl ayrıldığı

İkimiz de **çapraz kontrol** yapıyoruz. Fark:

| | Signals | Finans |
|---|---|---|
| Kimin adına | **sistem adına** — CC'lerin birbirini denetlemesi | **kendi hesabım için** — kullandığım girdiyi doğrularım |
| Sonucu ne olur | defekt listesi, CC'ye sipariş | ya sayıyı kullanırım ya "kullanılamaz" derim |
| Örnek | *"MAP27 net=0 flatten defekti"* | *"L2 arşiv kapsaması ölçüyor → seri olarak kullanılamaz"* |

**Kritik asimetri:** Signals **beni** denetleyebilir. Ben **kendimi**
denetleyemem (kural 4). Bu yüzden Signals bende bir üst-katmandır — ama
**benim ürettiğim tespitle doğdu** (F2-G3/D9). Yani ilişki döngüseldir:
ben açığı gördüm, o açığı kapatan birim beni denetliyor.

### Birbirimizin işine karışmadığımız yer

| Signals yapmaz | Finans yapmaz |
|---|---|
| Fiyat söylemez *(kendi kuralı)* | Isı skoru üretmez |
| Al/satma demez | Olay defteri tutmaz |
| Bir CC'nin ölçümünü **yeniden ölçmez** | Bir CC'yi **sistem adına** denetlemez |
| Deflatör uygulamaz | 8 ayaklı kesişim taraması yapmaz |

### Fiilen nasıl işledi (Beykoz kanıtı)

| Olay | Kim ne yaptı |
|---|---|
| Riva 8 yıllık gecikme | **Ben ölçtüm** (7,6–8,4 yıl) → **Signals mekanizmayı buldu** (dava) → **ben yorumumu geri aldım** |
| Ortaçeşme | **Ben "lojistik" dedim** → **Signals üç imzayla "fiziksel inşaat yok" dedi** → **çelişki açık bırakıldı** |
| Fiyat bloğu | **Ben ürettim** → **Signals sunuma taşıyacak** (K24a) → **onaylama yetkisi onda değil, denetleme yetkisi var** |

> **Tek cümlelik sonuç:** *Signals bir yerde bir şey olduğunu gösterir; ben o
> şeyin kaç lira ettiğini ve ne zaman edeceğini söylerim. O olmadan yanlış
> yere bakarım; ben olmadan bulduğu şey fiyatsız kalır.*

---

## EK-B · ÜÇ DOKTRİNİM

### B1 · DÖNEM ETİKETİ DOKTRİNİ *(kural 5)*

**Kural.** Her sayının yanında dönem etiketi zorunludur. Dönemler
eşitlenmeden kıyas yapılmaz.

**Uygulama biçimi**

| Sayı tipi | Zorunlu etiket | Örnek |
|---|---|---|
| Kesit | tarih | `kesit 2026-06-30` |
| Değişim | süre + iki uç | `4 aylık (Şub-May → Tem 2026)` |
| Yıllıklandırılmış | formül açık | `(1+Δ)^(12/4) − 1 — CC-Finans yıllıklandırması` |
| Endeks | referans + baz | `yıllık 2026-06/2025-06, 2023=100` |
| Dönemlik tablo | damga | `S48_UZANTI_2026-Haz-Tem` |

**Üç alt kural**
1. **Yıllıklandırma açıkça yazılır** — hangi üsle çarpıldığı görünmeli.
2. **n<20'de yıllıklandırılmış değer ARTEFAKTTIR.** *(Çavuşbaşı: n=10→17,
   4 aylık +%23,9 → yıllık +%90,2. Sayı gerçek değil, yöntem ürünü.)*
3. **Dönemlik bir sayı "bugünkü fiyat" diye sunulmaz.**

**Bedeli.** F3'te 4 aylık +%5-8'i yıllık +%25,3 ile kıyasladım ve
*"reel sert negatif"* dedim. Yıllığa çevirince Riva **+%26,0** çıktı — yani
İstanbul'un **üstünde**. **Sayıların hepsi doğruydu; sonuç tersine döndü.**

**İkinci kanıt (F8).** İstanbul konutu **12,3 yılda reel +%81,3**, **son 1
yılda reel −%5,16**. Dönem etiketi olmasa bu iki cümle birbirini yalanlıyor
görünür. Etiketle: ikisi de doğru.

---

### B2 · "ÜÇ KALİTE KATI" DOKTRİNİ *(F7'de doğdu — bir düzeltmeden)*

**Doğuşu.** F7'de benden *"rakamımız üç **bağımsız** katmanla tutarlı"*
cümlesi istendi. **Yazamadım** — ve neden yazamadığımı yazdım:

> Katman-1 (resmî çıpa 87.301) ile Katman-2 (oran 0,829) **bağımsız iki teyit
> değildir**; oran zaten *bizim medyanımızın çıpaya bölünmesidir*. Aynı ölçümün
> iki yüzü. "Üç bağımsız doğrulama" demek, sunumda ilk ciddi soruda kırılır.

**Doktrin.** Bir fiyat katmanı üç **kalite katı** üzerine kurulur. Bunlar
birbirini *onaylamaz*, birbirini *tamamlar*:

| Kat | Ne yapar | Bendeki karşılığı |
|---|---|---|
| **1 · ÇIPA** | dış, resmî bir referansa bağlar | TCMB `TP.BIRIMFIYAT.IST` = 87.301 TL/m² (2026-Q2) |
| **2 · SAPMA MEKANİZMASI** | çıpadan farkı **açıklar**, tahmin etmez | oran 0,829; mekanizma **seçilim +%26,1**; 3 rakip eksen elendi |
| **3 · HÜCRE DİSİPLİNİ** | tek tek hücrelerin sağlamlığı | n≥8 · Q1–Q3 · dönem damgası · **84 yayında / 166 yayın dışında** |

**Ayırt edici kural:**
> **Bir katman diğerinden türetiliyorsa, ikisi bağımsız sayılamaz.**
> Bağımsızlık iddiası ancak **farklı veri üretim süreçlerinden** gelen
> ölçümler için kurulabilir.

**Doğru lanse cümlesi:**
*"Rakamımız resmî çıpaya oturuyor, çıpadan sapması ölçülü ve açıklanmış,
hücreleri eşik-disiplinli."* — üç bağımsız onay değil, **üç kalite katı**.

**Neden önemli.** Bu doktrin olmasa, kendi ürettiğim oranı kendi rakamımın
doğrulaması gibi sunardım. Bu, **döngüsel akıl yürütmedir** ve bir sunumda
en kolay kırılan yerdir.

---

### B3 · DEFLATÖR SEÇİM KURALI *(F8'de doğdu — Standing adayı A4)*

**Problem.** Aynı tutar, farklı deflatörle çok farklı çıkıyor:

> 1,25 milyar TL (2014-02) →
> **TÜFE** ile **22,05 Mr TL** · **KFE** ile **39,99 Mr TL**
> *(1,8 kat fark)*

**Kural.** Reel bir sayı verilirken **hangi deflatörün neden seçildiği yazılır.**

| Soru tipi | Doğru deflatör | Gerekçe |
|---|---|---|
| **Satın alma gücü / tasarruf** *("cepte ne kaldı")* | **TÜFE** | Genel tüketici sepeti; paranın alım gücünü ölçer |
| **Varlık senaryosu** *("o para konuta yatırılsaydı")* | **varlık endeksi** (KFE) | Karşı-olgusal getiri sorusu |
| **Kira geliri** | **TÜFE** *(kira endeksi değil)* | Kiracının değil yatırımcının cebi ölçülüyor |
| **Getiri karşılaştırması** | **deflatörsüz** — nominal getiri oranları zaten karşılaştırılabilir | Çift deflate etme hatası |

**Uygulama şartları**
1. Deflatör **serisi künyeli** olmalı *(`TP.TUKFIY2025.GENEL`, 2025=100)*.
2. **Seri değişimi bildirilmeli** — eski `TP.FG.J0` 2026-01'de bitiyor;
   fark edilmezse 2026-06 hesabı sessizce yanlış çıkar.
3. **Yöntem doğrulanmalı.** Benim TÜFE hesabım TCMB bülteninin Türkiye reel
   **−%5,8**'ini bağımsız olarak yeniden üretti (**−%5,78**) — deflatör
   doğru uygulanıyor demektir.
4. **İki deflatörlü sonuç veriliyorsa ikisi de gösterilir**, hangisinin
   soruya uygun olduğu söylenir. *(F8'de yaptığım budur.)*

---

## EK-C · TCMB / EVDS HATTI — SAHİPLİK DETAYI

> **Bu hat CC-Finans'ın sahipliğindedir.** Kurdum, kullanıyorum, bakımı bende.
> **Tradia'nın tek resmî makro-veri kanalıdır.**

### C1 · Erişim künyesi

```
Uç nokta   : GET https://evds3.tcmb.gov.tr/igmevdsms-dis/{uri}
Kimlik     : HTTP header → "key: <ANAHTAR>"      ⚠️ &key= sorgu parametresi ARTIK DEĞİL
Şema       : /igmevdsms-dis/v3/api-docs           (116 uç nokta, OpenAPI 3.1.0)
Anahtarlı  : /{uri} · /categories/{uri} · /datagroups/{uri} · /serieList/{uri}
Anahtar    : ~/finans/.env  (mod 600)
Betik      : ~/finans/kod/evds_hasat_f4.py
```

### C2 · Erişimin tarihçesi — **kolay bulunmadı**

| Sprint | Ne oldu |
|---|---|
| **F3** | `evds2.tcmb.gov.tr/service/evds/...` → **302**, evds3'e yönlendiriyor. Eski API **ve tüm yardım dokümanları ölü**. Uç nokta **bulunamadı**, sprint bu şerhle kapandı |
| **F4** | Anahtar geldi. SPA'nın JS paketinden `/igmevdsms-dis` base path'i çıkarıldı → `/service/evds` altında **404**. **`/v3/api-docs` denendi → 99 KB OpenAPI şeması geldi** → `GET /{uri}` + header `key` deseni oradan okundu |

**Kalıcı ders:** *bir API "yok" görünüyorsa OpenAPI şeması denenir.*
Bu, "dört kez yok dedim" listesindeki üçüncü vakadır.

### C3 · Sahip olunan seriler

| Grup | EVDS kodu | Frekans | Kapsam |
|---|---|---|---|
| Konut fiyat endeksi | `TP.KFE.TR` · `TP.KFE.TR10` | aylık | 2010-01→2026-06 |
| Yeni kiracı kira endeksi | `TP.YKKE.TR` · `TP.YKKE.TR10` | aylık | 2018-01→2026-06 |
| **Konut birim fiyatı TL/m²** | `TP.BIRIMFIYAT.TR` · `.IST` | üç aylık | 2010-Q1→2026-Q2 |
| **Konut birim kirası TL/m²** | `TP.BK.TR` · `.ISTANBUL` | üç aylık | 2018-Q1→2026-Q2 |
| TÜFE (güncel) | `TP.TUKFIY2025.GENEL` | aylık | 2025=100 |
| TÜFE (eski, **bitti**) | `TP.FG.J0` | aylık | →2026-01 |
| Konut kredisi faizi | `TP.KTF12` | haftalık | 2010-01→2026-07 |
| Konut kredisi stoku | `TP.KM.B11` | aylık | 2005-12→2026-05 |
| Konut kredisi stoku (güncel) | `TP.HPBITABLO6.3` | haftalık | 2024-06→2026-07 |
| Konut satışı (toplam/ipotekli) | `TP.AKONUTSAT1/2.KTR100` | aylık | 2013-01→2026-06 |
| Konut kredisi hacmi (**arşiv, ölü**) | `TP.TUKKRE.K014` | haftalık | →2025-01 |

**Veri grupları:** `bie_kfe` · `bie_ykke` · `bie_birimfiyat` · `bie_bk` ·
`bie_kt100h` · `bie_kmmbkre` · `bie_hpbitablo6` · `bie_akonutsat1/2` ·
`bie_tukfiy2025`

### C4 · Hattın bilinen sınırları

| Sınır | Ayrıntı |
|---|---|
| **İlçe kırılımı YOK** | En ince birim: birim fiyat/kira → **il**; endeks → **İBBS Düzey 2** (İstanbul = TR10, tek parça) |
| **"Tabaka" katmanı yayımlanmıyor** | Meta-veride tanımlı: *"veri sayısının güvenilir fiyat için yeterli olduğu en küçük coğrafi birim"*. TCMB içeride kullanıyor, **açmıyor** → **kurumsal veri talebi konusu (Patron kararı)** |
| **Seri ölümü sessizdir** | `TP.FG.J0` 2026-01'de bitti, `TP.TUKKRE.K014` 2025-01'de. **Fark edilmezse hesap sessizce yanlış çıkar** |
| **Yayım gecikmesi** | ilk sonuç ~15 gün, **nihai ~45 gün** → bir ay **iki kez okunmalı**; ilk okuma `gecici: true` |
| **Kapsam ≠ temsil** | KFE'nin kaynağı kredi başvurusu değerlemeleridir. Kredi daralınca örneklem daralır → **bayrak katmanı bu yüzden var** |

### C5 · Bakım sözleşmesi (benim taahhüdüm)

| İş | Kadans |
|---|---|
| KFE + YKKE çekimi | **aylık**, ayın ~20'sinde |
| Birim fiyat + kira | **üç aylık** |
| TÜFE tazeleme + **seri ölümü kontrolü** | aylık |
| Kredi bayrağı (stok reel değişim) | **aylık** |
| İpotekli pay (bayrağın 2. teyidi) | aylık |
| Faiz | haftalık |

**Bayrak kuralı:**
```
reel yıllık stok değişimi < 0      →  o ayın KFE'si  ornek_daralmasi: true
3 ay üst üste daralma              →  o pencere ÇIPA OLARAK KULLANILMAZ
ipotekli pay < %25                 →  ikinci uyarı: "endeks piyasanın azınlığını görüyor"
```
**Bugünkü durum:** reel **+%3,7** 🟢 · ipotekli pay **%23,3** 🟡
→ *çıpa kullanılabilir, ama ipotekli pay tarihsel ortalamanın (%34,2) altında.*

### C6 · Anahtar hijyeni
Anahtar `~/finans/.env` içinde (mod 600). **Hiçbir çıktı dosyasına, log'a,
rapora veya bildirime yazılmadı.** Betik dosyadan okur.
*(F4-ÖN taraması: `~/landgold-agents/.env` içinde ayrı bir `TCMB_API_KEY`
bulundu — o proje **Tradia DIŞI**; izolasyon gereği okunmadı, kullanılmadı,
yalnız varlığı raporlandı.)*

---

**EK beyanı sonu** · CC-Finans · 2026-07-29 · **Denetleyen:** ☐
**$0 · A04 · V16 · #21-B · #34 · kural 5 · KVKK #31 · SİLME-YOK**
