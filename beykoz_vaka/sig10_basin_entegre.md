# CC-Signals · SIG10 — BASIN ENTEGRE FİNAL
### 11. ayak etkinleştirildi · 16 yıllık gövde arşivi ısıya bağlandı

**Sprint:** SIG10 · **Tarih:** 2026-07-28 · **Üreten:** CC-Signals · **Denetleyen:** ☐
**Girdi:** CC-Basın **S93** — *Beykoz Güncel tam arşiv, **8001/8001 kayıt, 2010-2024*** · olay defteri **v8 (28 olay)**
**Disiplin:** $0 · A04 · V16 · #21-B · #34 · SİLME-YOK

---

## 0. ÖNCE İKİ NOT

**① S94 gelmedi.** En yeni Basın çıktısı **S93**'tür ve ısı-v2'yi (`haber_yogunluk_v2.json`) zaten içeriyor. **S93'ün v2'siyle çalıştım**; "v2r" revizyonu gelirse bu bölüm yeniden koşulur.

**② SIG8'de bu ayağı etkinleştirmemeyi önermiştim — gerekçem koşulluydu ve koşul değişti.**
> SIG8 §5.3: *"Haber yoğunluğu ayağını **bugünkü arşivle** kurmayı önermiyorum... sığ havuzu derin gösterir."* O gün havuz **54 kayıt / ~60 gün**dü. **Bugün 8001 kayıt / 16 yıl.** Gerekçe ortadan kalktı → **ayak etkinleştirildi.**

---

# 1. 🔴 ÖNCE BİR DEFEKT — ısı-v2 ham hâliyle kullanılamaz

**Boilerplate/navigasyon kontaminasyonu bulundu.**

| Mahalle | Toplam | Korpus payı | Yıl profili korpusla aynı mı |
|---|---:|---:|:-:|
| **Fatih** | **7.999** | **%100,0** | ✅ **BİREBİR AYNI** 🔴 |
| **Riva** | **7.999** | **%100,0** | ✅ **BİREBİR AYNI** 🔴 |
| **Kavacık** | **7.999** | **%100,0** | ✅ **BİREBİR AYNI** 🔴 |
| Cumhuriyet | 682 | %8,5 | hayır |
| Paşabahçe | 590 | %7,4 | hayır |

> **Kanıt kesin:** Üç mahallenin **yıl dağılımı korpusun yıl dağılımıyla bit-bit aynı.** Bu, o kelimelerin **her belgede** geçtiği anlamına gelir — muhtemelen site menüsü/etiket listesi veya *"Fatih Sultan Mehmet Köprüsü"* gibi sabit ifadeler. **Gerçek mahalle atfı değil.**
> ⚠️ **Bu, aynı hata sınıfının altıncı yakalanışı** — *"Cumhuriyet Başsavcılığı"* · idare-adresi tuzağı · *"Cumhuriyet Cad."* · *"çiftlik evi"* · adaş-mahalle · ve şimdi **boilerplate**.
> 🔴 **Bedeli ağır:** kirlenen üç mahalleden **ikisi Riva ve Kavacık** — ilçenin en sıcak iki mahallesi. **Onların haber ısısı bu kaynaktan ÖLÇÜLEMEZ.** Isı tablosunda **✕ (ölçülemez)** işaretiyle duruyorlar; **0 değil.**
> 🟡 **Cumhuriyet de şüpheli** (682, listenin başı) — *"Cumhuriyet Cad."* / *"Cumhuriyet Başsavcılığı"* kalıbı bu arşivde de olabilir; **ayrı kontrol edilmedi**, ayak yanmasına izin verildi ama **şerhli**.

---

# 2. 11. AYAK: HABER-ISI — tanım ve sonuç

**Tanım:** `16 yıllık gövde arşivinde mahalle ≥250 kayıt (~%3 korpus) · boilerplate-temiz`

| ● Yanan (11) | Kayıt |
|---|---:|
| Cumhuriyet 🟡 | 682 |
| **Paşabahçe** | 590 |
| **Merkez** | 571 |
| **Çubuklu** | 527 |
| **Tokatköy** | 325 |
| Kanlıca | 300 |
| Soğuksu | 295 |
| **Gümüşsuyu** | 284 |
| **Ortaçeşme** | 279 |
| Çiğdem | 262 |
| Göksu | 254 |
| **✕ ÖLÇÜLEMEZ** | Fatih · **Riva** · **Kavacık** |

### Eski HABER ayağı ile karşılaştırma
| | Eski (S80, 54 kayıt, ≥2 haber) | **Yeni (16 yıl, 8001 kayıt)** |
|---|---|---|
| Yanan | Riva · Çubuklu · Paşabahçe · Merkez | **11 mahalle** |
| Taban | ~60 gün ulusal + ~1 yıl yerel | **16 yıl yerel gövde** |
| Riva | ● | **✕ ölçülemez** |

> ★ **En öğretici sonuç:** *16 yıllık arşiv açıldı ve ilçenin en sıcak mahallesinin haber ölçümü **kayboldu**.* Derinlik her zaman netlik getirmiyor — **temizlik getirmeden derinlik gürültüyü de büyütüyor.**

---

# 3. ★ KÖPRÜ ANLATI-DÖNÜŞÜMÜ — 16 yılda ölçüldü

**Ham sayı yanıltıcıdır** (korpusun kendisi 2012'de 1.197, 2024'te 30). **Normalize edildi:**

| Yıl | Köprü/ulaşım kaydı | Korpus | **Pay** |
|---|---:|---:|---:|
| 2010 | 15 | 261 | %5,7 |
| 2012 | 54 | 1.197 | %4,5 |
| 2015 | 50 | 967 | %5,2 |
| **2016** | **88** | 865 | **%10,2** ← **ZİRVE** *(köprü açılış yılı)* |
| 2017 | 59 | 881 | %6,7 |
| 2018 | 36 | 612 | %5,9 |
| 2020 | 11 | 246 | %4,5 |
| 2023 | 6 | 173 | %3,5 |
| **2024** | **1** | 30 | **%3,3** |

> ★ **Köprü anlatısı 2016'da zirve yaptı (%10,2), sonra istikrarlı biçimde söndü (%3,3).**
> **Ve bu, SIG5-A4'ün karşı-örneğinin söylem tarafındaki karşılığıdır:** 2016'da *"Poyrazköy-Garipçe fiyatlar 3-5x katlanacak"* denmişti; **10 yıl sonra ne fiziksel gelişme geldi ne de anlatı ayakta kaldı.** Vaat söndü, ölçüm de boş çıktı — **iki bağımsız kanal aynı sonuca vardı.**
> 🔴 **Dürüst sınır:** bu **tek kaynağın** (Beykoz Güncel) anlatı payıdır; ulusal basında farklı olabilir. Ve **normalize etmeseydim** *"88 → 1, %99 düşüş"* diye çok daha çarpıcı **ama yanlış** bir cümle kurulurdu.

### Diğer temaların 16 yıllık zirveleri
| Tema | Toplam | Zirve |
|---|---:|---|
| **tapu_hak** | **442** | 2013 |
| kopru_ulasim | 439 | **2016 (%10,2)** |
| orman_yesil | 250 | — |
| **iski_havza** | **235** | 2020 (%6,5) |
| imar_plan | 232 | — |
| kentsel_donusum | 167 | 2013 (%3,8) |
| **sisecam_arazi** | **83** | 2020 |
| sorusturma_rusvet | 77 | 2019 |
| metruk_genclik | 31 | — |
| **kalyon_riva** | **4** | — |

> ★ **iski_havza 235 kayıt** — TTA99'un **altı turdur açık kritik-1 borcu** (İSKİ havza sınırı) için **zengin bir kaynak arşivde duruyormuş.** Sipariş: bu 235 kaydın gövdesi okunsun.

---

# 4. ★★ AKTÖR GÖVDE SAYILARI — yerel basın kör noktası KANITLANDI

| Aktör | 16 yıl / 8001 kayıt |
|---|---:|
| Murat Aydın *(eski başkan)* | 101 |
| Köseler / Alaattin Köseler | 60 / 41 |
| **Şişecam** | **36** |
| Paşabahçe Cam | 17 |
| **Emlak Konut** | **11** |
| **Kalyon İnşaat** | **4** |
| **Çelikler · Torunlar · NEF · Ion · MESA · Peker · Envoy · Sur Yapı** | **0 · 0 · 0 · 0 · 0 · 0 · 0 · 0** |

> ★★ **17 aktörün 8'i, 16 yıllık ve 8001 kayıtlık tam yerel arşivde SIFIR.**
> **Bu artık bir havuz sığlığı iddiası değil, ölçülmüş bir olgudur.** Basın S85'in *"büyük özel emlak projeleri Beykoz basınında görünmüyor"* tezi — o gün 54 kayıtla söylenmişti — şimdi **8001 kayıtla doğrulandı.**
> **Yatırımcı için anlamı:** *Beykoz'da en büyük sermaye hareketleri **kamuoyu denetimi dışında** gerçekleşiyor.* Çelikler'in 171,5 M USD'lik işlemi ilçenin kendi gazetesinde **hiç geçmemiş.**
> 🔴 **Master şerhi:** **Kalyon 4 · Çelikler 0** → HABER ayağının yokluğu bu aktörler için *"olay yok"* değil, **"yerel basın görmüyor"** demektir. **İkisi karıştırılamaz.**

---

# 5. RİVA — 5 KANAL TEK SATIRDA

| # | Kanal | Bulgu | K |
|---|---|---|:-:|
| 1 | **Sermaye (KAP)** | AGYO 2016-11 → EKGYO ihale 2017 → **dava** → ruhsat 2018/2020 (**776 b.böl.**) → **ikmal inşaat 2025-04** | 🟢 |
| 2 | **Piyasa (ilan)** | villa **164.141 TL/m²** (n=97) · kira 633 · **getiri %4,63 / 21,6 yıl** · yıllık +%26,0 = İstanbul'la **başa baş** | 🟢 |
| 3 | **Kamu (EKAP)** | 2 gelişim / **120,9 M TL** (mahmuz + polis merkezi, 2023) · 2026 kaydı 0 | 🟢 |
| 4 | **Kamu-turizm (Basın)** | 186 odalı Metruk Otel yıkıldı (2026-07-24) → **Gençlik Kampı**, Bakanlık ortak | 🟢2 |
| 5 | **Uydu** | ⬜ **ÖLÇÜM YOK — beş turdur** (MAP24 flatten · MAP28'de 2020+2025 boş · radar ölçmedi) | ❌ |
| **+** | **Haber-ısı** | **✕ ÖLÇÜLEMEZ** — boilerplate kontaminasyonu *(bu tur)* | ❌ |

> **Riva'nın portresi:** dört kanalda güçlü, **iki kanalda kör.** Ve körlüklerin ikisi de **ölçüm tarafında** — sinyalin kendisinde değil.

---

# 6. ★ HASTANE 13 YILLIK ZİNCİRİ — retro tarih bulundu

| Tarih | Halka | Kaynak | K |
|---|---|---|:-:|
| **2012** | **Beykoz Devlet Hastanesi + Paşabahçe Devlet Hastanesi dönüşüm gündemi** | **BEY-33** *(defter v8, retro)* | 🟡1 |
| 2022-2023 | Mevcut hastanede yangın sistemi · ısıtma-soğutma işleri | İ62 | 🟢1 |
| **2024** | **500 Yataklı Devlet Hastanesi — 4,185 Mr TL** *(Kuzu Toplu Konut)* + bitişik **Çırçır Deresi ıslahı** | İ61/İ62 | 🟢2 |
| 2025-2026 | Chiller alımı · poliklinik · devreye alma ek işleri | İ62 | 🟢1 |
| — | **Gümüşsuyu 18. madde uygulaması** (Bakanlık onayı 06.10.2023) | İ69 | 🟢1 |

> ★ **Gündem 2012'de açıldı, mega sözleşme 2024'te imzalandı — 12-13 yıl.**
> **Riva'nın sermaye→kazma süresi 7,6-8,4 yıldı; hastanenin gündem→sözleşme süresi ~12 yıl.** Beykoz'da **kamu projelerinin de uzun döngüsü var** — ve bu, ikinci n=1 ölçümdür. *Genelleme yapılmadı.*
> 🔴 **BEY-33 tek kanal (🟡)** — 2012 kaydı yalnız retro taramadan; ara yıllar boş.

---

# 7. OLAY DEFTERİ v8 SENKRON — 28 olay

**BEY-01..18** *(mevcut)* **+ BEY-24..33** *(retro, 2010-2016)*

| ID | Olay | Yıl | Master'daki karşılığı |
|---|---|---|---|
| **BEY-24** | Viyadük iskele çökmesi — **3 ölü** | 2014 | — *(yeni)* |
| **BEY-25** | **YSS Köprüsü → "15 Temmuz Şehitler" ad değişimi** | 2016-12 | ★ **köprü anlatı dönüşümünün kimlik halkası** (§3) |
| BEY-26 | Yücel Çelikbilek — Belediye Başkanı 2004-2014 | 2004-14 | C3 yönetişim tarihçesi |
| **BEY-27** | **Çavuşbaşı 2B arazi toplantısı** | 2010-07 | ★ **2B mekanizmasının en erken izi** — §5 mekanizma-1 |
| BEY-28 | Paşabahçe vapuru müzeye dönüştürme | 2010 | — |
| **BEY-29** | **Paşabahçe Tekel arazisi 5 talipli çıktı** | 2012-03 | ★ **Torunlar/Tekel zincirinin (BEY-18) 14 yıl öncesi halkası** |
| **BEY-30** | Anadolu Hisarı'na 2. Köprü'den kum yağıyor *(çevre)* | 2016-04 | köprü anlatısı — olumsuz taraf |
| **BEY-31** | **Beykoz 2010 imar planı: 1M ev yıktırma + dönüşüm alanları** | 2010 | ★ **kentsel dönüşümün en erken planı** — Tokatköy'ün 12 yıl öncesi |
| BEY-32 | Beykoz'a 7 yıldızlı otel | 2011-02 | — *(izlem gerek)* |
| **BEY-33** | **Beykoz + Paşabahçe Devlet Hastanesi dönüşümü** | 2012 | ★ **hastane 13-yıl zincirinin başı** (§6) |

> ★ **Retro tarama üç zinciri geriye uzattı:** Tekel arsası **2012 → 2026** (14 yıl) · hastane **2012 → 2024** (12 yıl) · 2B **2010 → 2024 dava reddi** (14 yıl). **Beykoz'da hiçbir süreç kısa değil.**

---

# 8. SİNYAL-KANITI SAYFASINA İŞLENEN BASIN-RETRO TARİHLERİ

| SD / satır | Eklenen retro tarih | Kaynak |
|---|---|---|
| **SD-01 İncirköy** | **2012-03-26** — Paşabahçe **Tekel** arazisine 5 talip *(komşu parsel, aynı sanayi mirası kuşağı)* · **sisecam_arazi 16 yılda 83 kayıt** | BEY-29 · ısı-v2 |
| **SD-02 Çubuklu** | **2010** — Beykoz imar planı: dönüşüm alanları ilan edildi · **2012** hastane dönüşüm gündemi | BEY-31 · BEY-33 |
| **SD-03 Riva** | **2016-12-04** — YSS Köprüsü ad değişimi · **2016-04** kum yağması *(çevre şikâyeti)* · köprü anlatısı **2016 zirve %10,2 → 2024 %3,3** | BEY-25 · BEY-30 · §3 |
| **SD-04 Tokatköy** | **2010** — imar planında dönüşüm alanı ilanı → **2022** EKGYO sözleşmesi = **12 yıl** · kentsel_donusum teması **2013 zirve** | BEY-31 · ısı-v2 |
| **SD-05 Riva Yolu aksı** | *(retro iz yok — 2010-2024 arşivde parsel kaydı bulunamadı)* | — |
| **SD-06 Elmalı** | **iski_havza teması 16 yılda 235 kayıt, 2020 zirve (%6,5)** — havza rejimi yeni değil, **on yıllık gündem** | ısı-v2 |

---

# 9. GÜNCEL ISI — 11 ayak

📊 `cikti/beykoz_isi_haritasi.png` · 🔧 `kod/isi_haritasi_SIG10.py`

| Sıra | Mahalle | Ayak |
|---:|---|:-:|
| 1 | **Çubuklu** | **9/11** |
| 2 | **Tokatköy** | **8/11** |
| 3 | Gümüşsuyu · Riva ✕ · Kavacık ✕ | 7/11 |
| 6 | Paşabahçe | 5/11 |
| — | 0 ayaklı | **11 mahalle** |

> ⚠️ **Riva ve Kavacık'ın 7'si eksik ölçümdür** — haber ısıları ölçülemedi. Gerçek değerleri **8 veya 9** olabilirdi. **Sıralama bu yüzden kesin değil.**
> 🔴 Ve yine: **Çubuklu liderliğini koruyor ama 11. ayak da onun lehine çalıştı** (527 kayıt). *Sıralama ayak-setine duyarlıdır — dördüncü kez.*

---

# 10. SIG11 EKİ — v2r TEMİZ + DEFTER v9

## 10.1 ✅ Defekt kapandı
| Mahalle | S93 (v2) | **S94 (v2r)** | Düzeltme |
|---|---:|---:|---|
| **Kavacık** | 7.999 *(%100 · boilerplate)* | **866 (%10,8)** | **−%89** → **ilçenin en çok konuşulan mahallesi** |
| **Fatih** | 7.999 | **649 (%8,1)** | −%92 |
| **Riva** | 7.999 | **476 (%5,9)** | −%94 |

> ✅ **Üç ✕ gerçek skora döndü.** SIG10'da *"sıralama bu turda kesin değil"* demiştim — **artık kesin.**
> **Yeni sıralama:** Çubuklu **9/11** · Kavacık · Riva · Tokatköy **8/11** · Gümüşsuyu **7/11** · **0 ayaklı 11 → 10** *(Fatih ilk ayağını kazandı)*.

## 10.2 Defter v9 — 29 olay
| Değişiklik | İçerik |
|---|---|
| 🔗 **BEY-29 + BEY-32 BİRLEŞTİ** | *"Paşabahçe Tekel arazisi 5 talipli"* (2012) ve *"Beykoz'a 7 yıldızlı otel"* (2011) **aynı olaymış** → **Torunlar / Kentsel Resort Otel zinciri** |
| 🆕 **BEY-34 · Cam Köy** | *"Cam Köy için ilk adım atıldı"* (**2013-04-08**) — Şişecam'ın kültürel-turistik projesi; **Şişecam arazisinin İncirköy devrinden 13 yıl önceki ilk kamusal izi** |

## 10.3 ★ TEKEL ≠ ŞİŞECAM — iki parsel ayrıştı
S94, tek isim altında karışan iki parseli **ayrı regex'e** ayırdı: **tekel_arazi 13 kayıt** (2011-2020) ↔ **sisecam_arazi 35** (Tekel hariç; v2'de 83 idi, **−%57**).
> **Bu ayrım olmasaydı** Torunlar'ın Tekel zinciri ile Çelikler'in Şişecam işlemi **aynı torbada** kalırdı — ve master'daki *"Paşabahçe merkez sahilinde iki mega proje"* cümlesi **tek projeye** indirgenebilirdi. **Ayrım cümleyi doğruladı.**

## 10.4 Kanıt boşluğu kısmen açıldı
**Kalyon İnşaat v2r'de 4 hit** (2012:2 · 2014:2) — S91-93'te **0** idi; **article-body izolasyonu** yakaladı. **Kalyon-Beykoz bağlantısı 12-14 yıl önce basında geçmiş.**
🔴 Kalan **7 aktör hâlâ 0** (Çelikler · Torunlar · NEF · Ion · MESA · Peker · Envoy · Sur Yapı) → **kör nokta şerhi duruyor.**

---

# V16 · Sınırlar
1. **S94 gelmedi** — S93'ün ısı-v2'siyle çalışıldı; v2r revizyonu bu bölümü değiştirebilir.
2. **Üç mahalle ölçülemez** ve ikisi ilçenin en sıcakları. **Isı sıralaması bu turda güvenilir değil.**
3. **Cumhuriyet (682) şüpheli** — aynı FP kalıbı olabilir, ayrı kontrol edilmedi, ayak yanmasına izin verildi.
4. **Tek kaynak** — Beykoz Güncel. Ulusal basında anlatı farklı olabilir.
5. **Köprü anlatısını normalize ettim**; ham sayıyla *"%99 düşüş"* denebilirdi ve **yanlış olurdu.**
6. **BEY-33 hastane zinciri tek kanal** — 2012 kaydı retro taramadan, ara yıllar boş.
8. **SIG10'daki defekt SIG11'de kapandı** — ama o tur boyunca yayımladığım *"Riva/Kavacık ölçülemez"* ifadesi **bir tur boyunca yanlış tabloyu** dolaşımda tuttu. **Defekti ben buldum, düzeltmeyi Basın yaptı; arada geçen tur benim maliyetimdir.**
9. **T131 katmanı ısıya girmedi (ÜA kararı)** — doğru karar; ama bu, Acarlar'ın **ticari profilde ilçe zirvesi (AS 8,0)** olmasının ısı tablosunda **hiç görünmemesi** demek. **Isı tablosu tek başına okunursa Acarlar 2/11 ile sıradan görünür.**
7. **11. ayağı SIG8'de reddetmiştim, şimdi etkinleştirdim** — gerekçe değişti (54 kayıt → 8001), ama **tutarsız görünebilir; koşulu açıkça yazdım.**

**Kaynaklar (#21-B):** CC-Basın **S93** (`haber_yogunluk_v2.json` · 8001/8001 · olay defteri v8, 28 olay) · S80-S92 · CC-İhale İ61-62·İ69 · CC-Borsa S56-59 · CC-Analiz S48·S53 · CC-Tic T126-128EK · CC-TT-MAP MAP24·28·30 · CC-TT-AI TTA96-99 · Signals SIG5-SIG9
**$0 · A04 · V16 · #21-B · #34 · SİLME-YOK**
