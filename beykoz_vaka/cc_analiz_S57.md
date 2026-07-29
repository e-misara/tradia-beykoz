# Vaka: Beykoz — CC-Analiz S57 (L2 Fiyat-Arkeolojisi 2010→2026)

**Sprint:** S57 (S96-son-tur) · **Tarih:** 2026-07-29 · **$0** · **V37**

**Kaynak (#21-B):**
- Basın: `~/tradia_basin/gece_S95/sayisal_cumleler.jsonl` (5.991 sayısal cümle, 2010→2026)
- v25 karşılaştırma: `~/tradia_analiz/cikti/beykoz_emsal_v2r.json` (85 güçlü hücre)
- Reel dönüşüm: TÜFE 2003=100 endeksi (2010: 176.6 → 2026: 3800)

**★ ŞERH — Söylem-Fiyatı Kavramı**  
Bu raporda çıkarılan tarihsel TL/m² değerleri **basında geçen ilan/rayiç/haber fiyatlarıdır**. İşlem-fiyatı (tapu-gerçek) DEĞİL. Yatırım kararı için tek başına kullanılamaz — trend göstergesi olarak yorumlanmalı.

---

## §1 — Yöntem

### Filtreleme
1. Sayısal cümlelerden Beykoz mahallesi geçenler (word-boundary + norm)
2. Yıl 2010-2026 aralığı
3. Hırsızlık/bütçe/yardım/ceza kelimeleri filtrelendi (`BAD` regex)
4. Kategori: arsa/konut-daire/konut-villa/ticari (kelime tespit)
5. TL/m² doğrudan geçiyor VEYA (TL_toplam + m²/dönüm) → türev
6. Kavacık 2013 "Medipol vakfı 20 milyar" (tahmini bağış tutarı) → aykırı at
7. Çubuklu 2018 "KİPTAŞ 33 bin 500 m²" (parser 500 yakaladı) → aykırı at

### Birim Normalize (Reel 2026 TL)
`reel_2026 = nominal × TÜFE(2026) / TÜFE(yıl)`

TÜFE tablosu (kaba proxy): 2010=176.6 · 2013=220.3 · 2014=236.9 · 2015=250.7 · 2018=333.1 · 2026=3800

---

## §2 — Bulunan Fiyat Kayıtları (7 temiz)

| Yıl | Mahalle | Kat | Nominal TL/m² | **2026 Reel TL/m²** | v25 emsal (2026) | Reel × |
|---:|---|---|---:|---:|---:|---:|
| 2013 | Gümüşsuyu | arsa | 500 | **8.624** | 67.059 | **×7.78** |
| 2014 | Görele | arsa | 310* | **4.972** | 41.593 | **×8.36** |
| 2015 | Çengeldere | arsa | 600 | 9.094 | 33.676 | ×3.70 |
| 2015 | Çengeldere | arsa | 747 | 11.322 | 33.676 | ×2.97 |
| 2015 | Yavuz Selim | arsa | 680 | 10.307 | — (n<8) | — |
| 2010 | Öğümce (Tarkan) | arsa | 60* | 1.291 | — (n<8) | — |
| 2018 | Çubuklu | arsa | (parser fail) | — | 44.814 | — |

**\* dönüm-türev:** TL/dönüm ÷ 1000

### Söylem-Kaynak Örnekleri

**Gümüşsuyu 2013 (500 TL/m²):**
> "M2'si 500 TL olan Gümüşsuyu Mahallesi'nde 400 M2 yeri olan bir vatandaş..." — Beykoz Güncel

**Görele 2014 (310K/dönüm):**
> "Oturduğu Görele Mahallesi'nde 1 dönüm arazisi için 310 bin TL'lik rayiç bedeli belirlenen Hayrullah Usta..."

**Çengeldere 2015 (600 TL/m²):**
> "Beykoz Çavuşbaşı ÇENGELDERE MAHALLESİ'nde... 2.190 m2 SATILIK ARSA 1.315.000 TL"

**Öğümce/Tarkan 2010:**
> "Megastar Tarkan, 2004'te Öğümce Köyü'nde 1.5 milyon TL'ye 25 dönümlük arazi satın alarak..." → 60.000 TL/dönüm = 60 TL/m² nominal

---

## §3 — Uç-Kıyas: "2014'te X denen yer bugün Y"

### Anahtar Mesajlar (Reel-2026 tabanlı)

**Gümüşsuyu:**  
- 2013 basın söylem-fiyatı: **500 TL/m²** (nominal)
- Reel 2026'ya endekslenmiş: **8.624 TL/m²**
- v25 güncel emsal (2026): **67.059 TL/m²**
- **★ Reel çarpan: 7.78×** — Beykoz kırsalı 13 yılda **enflasyon üstünde yaklaşık 8 katı reel değer kazanmış**.

**Görele:**  
- 2014 rayiç bedel: **310.000 TL/dönüm** (= 310 TL/m² nominal, muhtemel-alt-tahmin)
- Reel 2026: **4.972 TL/m²**
- v25 emsal: **41.593 TL/m²**
- **★ Reel çarpan: 8.36×**

**Çengeldere:**  
- 2015 basın ilan fiyatı: **600-747 TL/m²** (nominal, 2 örneklem)
- Reel 2026: **9.094 – 11.322 TL/m²**
- v25 emsal: **33.676 TL/m²**
- Reel çarpan: **2.97 – 3.70×** — daha ılımlı reel artış

### Sıralama Yorumu

| Bölge | Reel çarpan (2010'lar → 2026) |
|---|---:|
| **Görele (kuzey-iç kırsal)** | ×8.36 |
| **Gümüşsuyu (orta bant)** | ×7.78 |
| **Çengeldere (Çavuşbaşı bandı)** | ×2.97-3.70 |

**Kırsal/uzak mahalleler daha hızlı reel-değerlenmiş** — Beykoz kentleşme baskısı, Çavuşbaşı zaten yüksek başlangıç fiyatına sahip olduğu için reel çarpan düşük.

---

## §4 — Örneklem Zayıflığı ve Dürüst Uyarılar (A04)

1. **n=7 kayıt** — 5.991 sayısal cümleden 7 temiz fiyat çıktı; istatistiksel güç düşük
2. **Basın veri türü heterojen:** rayiç bedel (Görele) + ilan fiyatı (Çengeldere) + gazete haberi (Gümüşsuyu) + spot alım (Tarkan)
3. **TÜFE tablosu kaba** — özellikle 2022-2026 aralığı yüksek belirsizlik (endeksin gerçek TÜFE'yle sapması olabilir); reel çarpanların ±%20 tolerans payı var
4. **Yavuz Selim / Öğümce v25'te n<8** → uç-kıyas yapılamadı
5. **Türev formüller** (dönüm-türevi, TL_toplam÷m² türevi) → doğrudan basılan TL/m²'ye göre daha kırılgan
6. **Öğümce/Tarkan 2010** cümlesi 2004'e ait — çift-tarihli anlatı; sayı 2004'ün, cümle 2010'un
7. **v25 emsal tabanı karışık m² (%74 belirsiz brüt/net)** — S56 uyarısı geçerli; reel çarpan tahminleri karışık-birim tabanlı

---

## §5 — Neden 5.991'den Sadece 7?

Filtre kırılımı:
1. **Mahalle geçmiyor** — 5.991'in büyük çoğunluğu (istatistiksel-boyutlu haberler, mahalle spesifik değil)
2. **Hırsızlık/bütçe/yardım kelimeleri** filtrelendi (BAD regex — 1.5M TL çalınan malzeme gibi)
3. **TL yoktur** — bazı sayısal cümleler yaş/nüfus/tarih (fiyat değil)
4. **TL var ama m²/dönüm yok** — hesap yapılamaz
5. **Beykoz spesifik mahalle** — TT-AI 45 mahalleye tam eşleşme şart (word-boundary)

**İyileştirme:** İleride cümle-tipi sınıflandırma (LLM-etiketleme) ile daha fazla fiyat cümlesi çıkarılabilir; şu an regex-tabanlı, muhafazakâr.

---

## §6 — Cevaplayamadıklarım

1. **Konut-daire tarihsel fiyatı** — basın verisinde daire TL/m² örneklem sıfır; Beykoz basın'da arsa/villa haberleri baskın
2. **2019-2024 aralığı boş** — 5-yıllık boşluk (basın'da fiyat cümlesi çıkmadı bu dönem)
3. **Reel çarpan güven bandı** — n=1-2 küçük örneklem; Wilson bandı hesaplanabilir ama tek-örneklem için anlamsız
4. **İşlem-fiyatı doğrulama** — Tapu Sicil Müdürlüğü verisi olmadan söylem-fiyatı işlem-fiyatına eşitlenemez
5. **TÜFE proxy — bölgesel** — İstanbul TÜFE, Beykoz-özel değil; bölgesel enflasyon farkı ölçülmedi
6. **Öğümce/Tarkan çift-tarihli** — 2004 alımı 2010 haberi; hangi TÜFE kullanılmalı sorusu

---

## §7 — Master için Kullanım

**Master'a şu satırlar eklenebilir (şerhli):**

> "2013 basın kayıtlarında Gümüşsuyu arsa m²'si 500 TL idi (bugünün parasıyla ~8.600 TL); 2026'da benzer arsalar ~67.000 TL/m². Beykoz kırsalı 13 yılda enflasyonun **~8 katı** reel değer kazandı (n=1 basın kaydı, söylem-fiyatı; işlem-fiyatı DEĞİL)."

**Sınırlar:** Bu tek-satır Beykoz genel için OKUYAMAZ — sadece Gümüşsuyu-Görele-Çengeldere üçlüsü için ipucu.

---

## §8 — Standing Adayı (S56'yı destekler)

**F6 ek-2 önerisi:**  
> Basın'dan çıkarılan fiyat verileri **söylem-fiyatı** olarak açıkça etiketlenmeli. İşlem-fiyatı ile karıştırılmaz. Reel-endekslemede kullanılan TÜFE serisi ve endeks-yılı raporda belirtilmeli.

---

## Çıktılar

- **Bu MD:** `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S57.md`
- **JSON:** `~/tradia_analiz/cikti/vaka_beykoz_S57.json`
- **K24a:** `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_beykoz_S57.json`

## Disiplin S57
A04 (n=7 küçük, söylem-fiyatı şerhi zorunlu, TÜFE kaba dürüst) · V37 (basın+v25 read-only) · V11 (yapısal, kehanet YOK — reel çarpanlar trend gösterir, tahmin değil) · #21-B kaynak-kanıt (her sayı için cümle+URL) · **Söylem-Fiyatı Şerhi** · $0 · SİLME YOK
