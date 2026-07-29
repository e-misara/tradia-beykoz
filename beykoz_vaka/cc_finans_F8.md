# CC-Finans · F8 — S96 SON TUR
## Basın söylem-ekseni × KFE köprüsü · "1,25 Mr TL 2014" reel çevrimi

**Sprint:** F8 · **Tarih:** 2026-07-29 · **Üreten:** CC-Finans · **Denetleyen:** ☐
**Disiplin:** $0 · A04 · V16 · #21-B · #34 · **kural 5 (dönem disiplini)** · SİLME-YOK

---

## 0. İki cümlelik özet

1. **Talebin öncülü tutmuyor:** Basın L2'nin "2016 zirvesi" ifadesi, Basın'ın
   **kendi yıl dağılımıyla çelişiyor** — zirve **2012** (805), 2016 ise
   **7. sırada** (293). Köprüyü bu düzeltmeyle kurdum.
2. **1,25 Mr TL (2014-02) bugün ≈ 22,05 milyar TL** (TÜFE ile, künyeli) —
   ama iddianın kendisi doğrulanmış bir ölçüm değil, bir **aktör beyanıdır**.

---

# G1 · BASIN FİYAT-EKSENİ × KFE — EŞZAMANLILIK TABLOSU

> ⚠️ **Bu bölüm nedensellik kurmaz.** İki seriyi yan yana koyar ve
> **karşılaştırılabilir olup olmadıklarını** sorar. Cevap: büyük ölçüde hayır.

## 1.1 🔴 Önce bir düzeltme — "2016 zirvesi" yok

CC-Basın S96 raporunun §2 tablosu L2'yi *"4008 sayısal cümle · **2016 zirvesi**"*
diye özetliyor ve CC-Finans'a bu şekilde dağıtmış (§4 CC dağıtım satırı).

**Ama aynı sprintin `vaka_beykoz_S96_ozet.json` dosyasındaki
`L2_fiyat_arkeoloji.yil_dagilim` bunu doğrulamıyor:**

| Sıra | Yıl | L2 hit |
|---:|---|---:|
| **1** | **2012** | **805** |
| 2 | 2013 | 583 |
| 3 | 2015 | 510 |
| 4 | 2017 | 427 |
| 5 | 2014 | 364 |
| 6 | 2018 | 339 |
| **7** | **2016** | **293** |

**2016 zirve değil; komşusu 2015'ten (510) ve 2017'den (427) de düşük — yerel
bir çukur.** Toplam 4008 doğrulandı (dağılım tam olarak toplanıyor).

> **Ders (Signals'ın kuralı):** *rapor değil ham JSON oku.* Bu düzeltme
> md'nin özet cümlesiyle JSON'un dağılımını yan yana koyunca çıktı.
> **CC-Basın'a bildirim gerekir.**

## 1.2 🔴 Daha önemlisi: L2 serisi **arşiv yoğunluğunu** ölçüyor

S96'nın üç lensinin yıl dağılımını üst üste koydum:

| Yıl | L2 fiyat | L7 afet | L10 seçim | **Toplam** | L2 payı |
|---|---:|---:|---:|---:|---:|
| 2010 | 155 | 12 | 3 | 170 | %91,2 |
| 2011 | 159 | 28 | 14 | 201 | %79,1 |
| **2012** | **805** | 96 | 12 | **913** | %88,2 |
| 2013 | 583 | 85 | 39 | 707 | %82,5 |
| 2014 | 364 | 140 | **171** | 675 | %53,9 |
| 2015 | 510 | 50 | 47 | 607 | %84,0 |
| 2016 | 293 | 28 | 6 | 327 | %89,6 |
| 2017 | 427 | 36 | 25 | 488 | %87,5 |
| 2018 | 339 | 33 | 27 | 399 | %85,0 |
| 2019 | 110 | 8 | 44 | 162 | %67,9 |
| 2020 | 110 | 7 | 3 | 120 | %91,7 |
| 2021 | 88 | 6 | 6 | 100 | %88,0 |
| 2022 | 49 | 5 | 2 | 56 | %87,5 |
| 2023 | 14 | 1 | 2 | 17 | %82,4 |
| 2024 | 2 | 3 | 1 | 6 | %6,0 |

**İki gözlem:**

1. **L2'nin payı her yıl %80–90 civarında sabit** (2014 ve 2019 hariç — orada
   seçim lensi şişiyor, ki bu gerçek sinyaldir: 2014 ve 2019 yerel seçim yılları).
   Yani L2, toplam arşiv hacminin sabit bir oranı gibi davranıyor.

2. **Toplam arşiv 2012'de 913, 2024'te 6.** Yani seri, fiyat söyleminin
   yoğunluğunu değil **arşivin o yılı ne kadar kapsadığını** ölçüyor.

> **Bu, mantık kontrolüyle de doğrulanıyor:** TL cinsinden fiyatlar
> **2021–2024 arasında patladı** (TÜFE bu dönemde 21,6 → 84,3, yaklaşık 4 kat).
> Eğer L2 gerçekten "fiyat söylemi yoğunluğunu" ölçseydi o yıllarda
> **artması** gerekirdi. **Düştü** — 88 → 2.

## 1.3 Eşzamanlılık tablosu (yine de kuruldu, şerhli)

**Dönem: yıllık, Aralık–Aralık · KFE İstanbul (TP.KFE.TR10) · TÜFE (TP.TUKFIY2025.GENEL)**

| Yıl | L2 hit | KFE İst nominal | TÜFE | **KFE REEL** |
|---|---:|---:|---:|---:|
| 2011 | 159 | +%9,0 | +%10,4 | −%1,3 |
| **2012** | **805** ← söylem zirvesi | +%14,6 | +%6,2 | +%8,0 |
| 2013 | 583 | +%18,5 | +%7,4 | +%10,3 |
| 2014 | 364 | +%22,0 | +%8,2 | +%12,8 |
| 2015 | 510 | +%22,7 | +%8,8 | +%12,8 |
| **2016** | **293** | +%12,2 | +%8,5 | **+%3,4** |
| 2017 | 427 | +%5,1 | +%11,9 | −%6,1 |
| 2018 | 339 | +%1,6 | +%20,3 | −%15,5 |
| 2019 | 110 | +%4,9 | +%11,8 | −%6,2 |
| 2020 | 110 | +%27,8 | +%14,6 | +%11,6 |
| 2021 | 88 | +%68,3 | +%36,1 | +%23,7 |
| **2022** | **49** | **+%165,0** | +%64,3 | **+%61,3 ← KFE reel zirvesi** |
| 2023 | 14 | +%65,8 | +%64,8 | +%0,6 |
| 2024 | 2 | +%26,5 | +%44,4 | −%12,4 |
| 2025 | — | +%28,5 | +%30,9 | −%1,8 |

### Okuma

| Seri | Zirvesi |
|---|---|
| Basın L2 fiyat söylemi | **2012** |
| KFE İstanbul reel | **2022** |

**İki zirve arasında 10 yıl var.** Ve tablo görünürde **ters** bir ilişki
gösteriyor (söylem düşerken reel fiyat artıyor) — ama bu ilişki **gerçek
değildir**: L2'nin düşüşü arşiv kapsamının daralmasından, KFE'nin yükselişi
2021–2023 enflasyon döneminden gelir. **İki bağımsız olay, tesadüfen ters yönde.**

### 🔴 Sonuç
> **Basın L2 serisi ile KFE arasında anlamlı bir eşzamanlılık kurulamaz.**
> Sebep veri yokluğu değil, **serilerin farklı şeyi ölçmesidir**: biri arşiv
> kapsaması, diğeri fiyat düzeyi. Nedensellik zaten kurulmayacaktı;
> bu turda **eşzamanlılık da kurulamadı.**

### Ne gerekirdi
L2'nin kullanılabilir olması için **yıllık normalizasyon** şart:
`L2 hit ÷ o yılın toplam arşiv kaydı`. Bu paydayı CC-Basın tutuyor olabilir
ama S96 özetinde **yayımlanmamış**. → **CC-Basın'a sipariş.**

---

# G2 · "1,25 MİLYAR TL (2014)" → BUGÜNKÜ REEL KARŞILIK

## 2.1 İddianın künyesi

| Alan | Değer |
|---|---|
| **İfade** | *"2B satışlarında 1 Milyar 250 milyon TL Beykozlunun cebinde kaldı"* |
| **Tarih** | **2014-02-27** |
| **Aktör** | Yücel Çelikbilek (dönemin Beykoz Belediye Başkanı) |
| **Kaynak** | CC-Basın S96 · `vaka_beykoz_S96_ozet.json` · bulgu #10, etiket `buyuk-sayi` |
| **Tip** | **AKTÖR BEYANI** — ölçüm değil |

> 🔴 **A04 şerhi:** Bu bir **siyasi beyandır**, doğrulanmış bir işlem hacmi
> veya denetlenmiş bir tasarruf rakamı değildir. "Cebinde kaldı" ifadesi bir
> **iskonto/tasarruf** iddiasıdır; hangi taban fiyata göre hesaplandığı
> bilinmiyor. **Aşağıda yalnız nominal tutarı reel'e çeviriyorum — iddianın
> doğruluğunu onaylamıyorum.**

## 2.2 Çevrim (künyeli)

**Yöntem:** `reel karşılık = nominal × (TÜFE_bitiş ÷ TÜFE_başlangıç)`

| Girdi | Değer | Kaynak |
|---|---:|---|
| Nominal tutar | **1.250.000.000 TL** | Basın S96 (aktör beyanı) |
| TÜFE 2014-02 | **7,368** | TCMB EVDS `TP.TUKFIY2025.GENEL` (2025=100) |
| TÜFE 2026-06 | **129,99** | aynı |
| **Kümülatif çarpan** | **17,643×** | 129,99 ÷ 7,368 |
| Toplam enflasyon | **+%1.664** | |

### ★ Sonuç

> **1,25 milyar TL (Şubat 2014) ≈ 22,05 milyar TL (Haziran 2026)**
> *(TÜFE ile, satın alma gücü eşdeğeri)*

## 2.3 İkinci çevrim — konut cinsinden

TÜFE genel tüketici sepetidir. Aynı tutarı **konut** cinsinden çevirmek
farklı bir sonuç verir:

| Deflatör | Çarpan | 1,25 Mr TL bugün |
|---|---:|---:|
| **TÜFE** (genel fiyat düzeyi) | 17,64× | **22,05 Mr TL** |
| **KFE İstanbul** (konut fiyatı) | **31,99×** | **39,99 Mr TL** |

**Fark neden?** Çünkü İstanbul konutu bu 12,3 yılda enflasyonu **yendi**:

> KFE İstanbul 2014-02 → 2026-06: **31,99×** · TÜFE: **17,64×**
> → **konut reel olarak +%81,3 değer kazandı** *(12,3 yıllık toplam, yıllık değil)*

> ⚠️ **Bu, F4–F7'deki "konut fiyatı reel kaybediyor" bulgusuyla çelişmiyor.**
> Dönemler farklı: **son 1 yılda** İstanbul konutu reel **−%5,16**;
> **son 12,3 yılda** reel **+%81,3**. Uzun dönem kazanç, son dönem kayıp.
> **Kural 5 — dönem etiketi olmadan bu iki cümle birbirini yalanlıyor gibi görünür.**

**Hangisi kullanılmalı?** İddia bir **tasarruf/cepte kalan para** iddiası
olduğu için **TÜFE doğru deflatördür** (satın alma gücü). KFE çevrimi yalnız
"o para konuta yatırılsaydı" senaryosu için anlamlıdır.

## 2.4 Cebe çevirme — 22,05 Mr TL bugün ne alır?

**İL ÇIPASI** *(TCMB, 2026-Q2 — ayrı katman, #34)*
> 22,05 Mr TL ÷ 87.301 TL/m² = **≈ 252.600 m²** İstanbul ortalama konut alanı

**BEYKOZ EMSALİ** *(CC-Analiz S53, dönem `S48_UZANTI_2026-Haz-Tem` — ayrı katman)*

| Ürün | Birim fiyat | 22,05 Mr TL ile |
|---|---:|---:|
| Acarlar villa | 166,9 M TL | **≈ 132 adet** |
| Yavuz Selim villa | 25,7 M TL | ≈ 860 adet |
| Riva villa | 52,5 M TL | ≈ 420 adet |
| Kavacık daire | 13,3 M TL | **≈ 1.659 adet** |

> ⚠️ İki katman **yan yana** gösterildi, **birbirine bölünmedi** (#34).
> Beykoz emsalleri **dönemliktir**, "bugünkü fiyat" değildir.
> Bunlar **kaba büyüklük hissi** içindir; bir portföy hesabı değildir.

---

# F8 · Sonuç

## Kazanımlar
1. 🔴 **"2016 zirvesi" iddiası düzeltildi** — gerçek zirve **2012 (805)**,
   2016 **7. sırada (293)**. Basın'ın md özeti kendi JSON'uyla çelişiyor.
2. 🔴 **L2 serisinin ne ölçtüğü teşhis edildi:** fiyat söylemi yoğunluğu değil,
   **arşiv kapsaması**. Üç lensin payı sabit (%80–90) ve toplam 2012'de 913,
   2024'te 6. Mantık kontrolü de doğruluyor (2021–24 fiyat patlamasında seri düşüyor).
3. **Eşzamanlılık tablosu kuruldu ve sonucu negatif:** söylem zirvesi 2012,
   KFE reel zirvesi 2022 — **10 yıl arayla**; görünen ters ilişki artefakt.
4. ★ **1,25 Mr TL (2014-02) ≈ 22,05 Mr TL (2026-06)** — TÜFE ile, künyeli.
   KFE ile çevrilirse 39,99 Mr TL.
5. ★ **Yan bulgu:** İstanbul konutu **12,3 yılda reel +%81,3** kazandırdı —
   *son 1 yıldaki reel −%5,16 ile çelişmez, dönem farkıdır* (kural 5'in canlı örneği).

## Cevaplanamayanlar
- **L2 normalizasyonu yapılamadı** — yıllık toplam arşiv kaydı (payda) S96
  özetinde yayımlanmamış
- **1,25 Mr TL iddiasının kendisi doğrulanmadı** — aktör beyanı; hangi tabana
  göre "tasarruf" hesaplandığı bilinmiyor
- **2B satış hacminin resmi kaydı yok** — Milli Emlak/RG kanalı F5'te
  keşfedildi ama taranmadı

## Siparişler
| Kime | Ne | Neden |
|---|---|---|
| **CC-Basın** | md özetindeki "2016 zirvesi" ifadesi düzeltilsin → **2012** | kendi JSON'uyla çelişiyor; CC-Finans'a bu şekilde dağıtılmış |
| **CC-Basın** | **Yıllık toplam arşiv kaydı** (L2 paydası) yayımlansın | normalize edilmeden L2 zaman serisi olarak kullanılamaz |
| **CC-Basın / CC-İhale** | 2B satışları için **Resmî Gazete + Milli Emlak** taraması | 1,25 Mr TL iddiasının resmi tabanı |
| **CC-Signals** | Bu tabloyu sunuma alacaksa **§1.2 şerhi** birlikte gitsin | L2 tek başına yanıltır |

---

**Kaynaklar (#21-B):** CC-Basın S96 `vaka_beykoz_S96_ozet.json`
(`L2_fiyat_arkeoloji.yil_dagilim` · `L7` · `L10` · bulgu #10) ·
TCMB EVDS `TP.KFE.TR10` · `TP.TUKFIY2025.GENEL` (birincil API) ·
CC-Analiz S53 `beykoz_emsal_v2.json` (dönem `S48_UZANTI_2026-Haz-Tem`)
**Üreten:** CC-Finans F8 · **Denetleyen:** ☐ · **$0 · A04 · #34 · kural 5**
