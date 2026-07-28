# Vaka: Beykoz — CC-Analiz S55-EK (Sıfır Yasağı + Elmalı Yeniden Test)

**Sprint:** S55-EK · **Tarih:** 2026-07-28 · **$0** · **V37** · **Dönem: `S48_UZANTI_2026-Haz-Tem`**

**Kaynak (#21-B):** v25 zengin katman + uzantı NDJSON başlık/açıklama

---

## Standing Adayı — Sıfır Yasağı (bundan sonra Analiz kuralı)

**%0.0 raporlanmaz.** Her oran şu 4 bilgiyle verilir:
1. Pay (k) + Payda (n)
2. Payda-tanımı açık (tapu-alanı DOLU arsa mı, tüm arsa mı, metin-bazlı mı)
3. Doluluk %'si yan sütun
4. Wilson %95 güven bandı — küçük n'de nokta-oran yerine

**Örnek:** "0/12 dolu → %0-24 bandı" (sıfır DEĞİL, bant)

---

## G1 — Payda Düzeltmesi (Alan-Bazlı)

**Eski (S55):** hisseli / tüm-arsa → çoğu %0 gibi görüldü
**Yeni (S55-EK):** hisseli / (tapu_durumu DOLU arsa) + doluluk yan sütun

### Alan-Bazlı Hisseli Oranı — Wilson %95 Bandıyla

| Mahalle | Arsa N | Alan Dolu | Doluluk % | Alan-hisseli | **Nokta % [Wilson %95]** |
|---|---:|---:|---:|---:|---|
| **Elmalı** | 18 | 6 | 33.3 | 2 | **%33.3 [%9.7 – %70.0]** |
| Çavuşbaşı Çiftlik | 38 | 9 | 23.7 | 0 | %0 üst-bant [%0 – **%29.9**] |
| Yavuz Selim | 39 | 9 | 23.1 | 1 | %11.1 [%2.0 – %43.5] |
| Fatih | 6 | 3 | 50.0 | 0 | %0 üst-bant [%0 – **%56.2**] |
| Baklacı | 20 | 5 | 25.0 | 0 | %0 üst-bant [%0 – **%43.4**] |
| Çengeldere | 32 | 10 | 31.2 | 0 | %0 üst-bant [%0 – **%27.8**] |

**Kritik gözlem:** Küçük örneklem yüzünden Fatih üst-bandı %56, Baklacı %43. **"%0" değil, "üst-bantı %28-56 arası" demek doğru.**

---

## G2 — Metin Taraması (★)

**Yöntem:** başlık + açıklama_özet + URL_slug NORM edilip regex `\b(hisseli|hisse|hisseleri|kooperatif|payli|paylı)\b`

### Metin-Bazlı Hisseli Oranı

| Mahalle | Arsa N | Metin-hisseli | **Nokta % [Wilson %95]** |
|---|---:|---:|---|
| **Elmalı** | 18 | 1 | %5.6 [%1.0 – %25.8] |
| Yavuz Selim | 39 | 1 | %2.6 [%0.5 – %13.2] |
| Çavuşbaşı Çiftlik | 38 | 0 | %0 üst-bant [%0 – %9.2] |
| Fatih | 6 | 0 | %0 üst-bant [%0 – %39.0] |
| Baklacı | 20 | 0 | %0 üst-bant [%0 – %16.1] |
| Çengeldere | 32 | 0 | %0 üst-bant [%0 – %10.7] |

### Metin-Bulgu Örnekleri

| Mahalle | ilan_id | Tapu (alan) | Başlık |
|---|---|---|---|
| Elmalı | 1267859997 | Hisseli Tapu | "ELMALI KİRAZLI YAYLA CADDESİ ÜZERİNDE ARSAMIZ" |
| Yavuz Selim | 1134890258 | Hisseli Tapu | "KARANLIK DERE CADDESİNE PARALEL 424 M2 TAŞ DUVARLA ÇEVRİLİ ARSA" |

**Not:** Her iki metin-hisseli kayıt zaten alan-bazlı sayımda dahil (overlap %100). Yani metin-tarama Elmalı'nın alan-bazlı bulgusunu **doğruluyor ama yeni kayıt eklemiyor**.

---

## G3 — Elmalı %11.1 Bulgusunun Yeniden Testi

### Karşılaştırma: S55 vs S55-EK

| Metrik | S55 (eski) | S55-EK (yeni) |
|---|---:|---|
| Payda | tüm arsa (18) | dolu arsa (6) |
| Nokta | %11.1 (2/18) | **%33.3 (2/6)** |
| Bant | — | **[%9.7 – %70.0]** |
| Metin-doğrulama | — | 1/18 = %5.6 [%1 – %26] |

### Komşu Bant Kıyası (Nokta + Bant)

| Mahalle | Alan nokta | Alan bandı | Metin nokta | Metin bandı |
|---|---:|---|---:|---|
| **Elmalı** | **%33.3** | **[%9.7 – %70.0]** | %5.6 | [%1.0 – %25.8] |
| Yavuz Selim | %11.1 | [%2.0 – %43.5] | %2.6 | [%0.5 – %13.2] |
| Çavuşbaşı Çiftlik | %0-üst | [%0 – %29.9] | %0-üst | [%0 – %9.2] |
| Fatih | %0-üst | [%0 – %56.2] | %0-üst | [%0 – %39.0] |
| Baklacı | %0-üst | [%0 – %43.4] | %0-üst | [%0 – %16.1] |
| Çengeldere | %0-üst | [%0 – %27.8] | %0-üst | [%0 – %10.7] |

### Fark Metin-Taramada da Sürüyor mu?

**KISMEN:** 
- **Alan-bazlı:** Elmalı alt-bandı %9.7 — komşuların alt-bantı %0. **Anlamlı fark KORUNDU** (Elmalı alt-band > komşu üst-band değil, ama daha yüksek konumda).
- **Metin-bazlı:** Elmalı %5.6 [%1 – %26], Yavuz Selim %2.6 [%0.5 – %13]. **Bantlar örtüşüyor** — istatistiksel farklılık zayıf.
- **Çengeldere üst-bant %10.7 (metin)** — Elmalı nokta %5.6'nın üstünde. Bantlar örtüştüğü için metin-bazlı olarak Elmalı **komşu bantta anormal DEĞİL**.

### BEY-20 Kanıtı Değerlendirmesi

**BEY-20 kanıtı ZAYIFLADI, tamamen ERİMEDİ:**

**LEHİNE (korunan):**
1. Alan-bazlı nokta-tahmin (%33.3) — komşularda karşılığı Yavuz Selim %11.1
2. Alan-bazlı alt-bant (%9.7) — 4 komşuda %0
3. Küçük parsel medyanı (386 m² vs komşu 494-921)
4. Manzara kelime %2 — iç kırsal arsa-teklif odaklı

**ALEYHİNE (yeni ortaya çıkan):**
1. **Wilson bantları örtüşüyor** — Elmalı [%9.7-70] · Fatih [%0-56.2] · Yavuz Selim [%2-43.5]; istatistiksel farklılık zayıf
2. **Metin-tarama bulguyu güçlendirmedi** (sadece 1 kayıt, alan-bazlı ile aynı ilan)
3. **Payda küçük (n=6 dolu)** — üst-bant %70'e kadar geniş

**Sonuç (A04 dürüst):**
- Elmalı hisseli-arsa **ANORMALLİK SİNYALİ** korunuyor ama **KESİN KANIT DEĞİL**
- BEY-20 kanıtı için ek veri gerek: (a) 3-4 ay sonra yeni tur, (b) tapu-sicil doğrulama, (c) sokak-bazlı granül
- Bulgu "izlenmesi gereken hipotez" olarak sürdürülür — "toplama-göstergesi TESPİT EDİLDİ" DEĞİL

---

## Standing #1 Önerisi (Sıfır Yasağı)

**Anayasa Metni:**
> Analiz raporlarında oranlar (%X.X) daima pay/payda + Wilson %95 güven bandı + doluluk (%dolu) ile verilir. Payda "tümü" ise ayrıca "tanımlı-alt-küme" için de hesaplanmalı. "%0.0" raporlanmaz — küçük k=0 durumunda "%0 nokta, üst-bant %Z" formatı zorunlu. Emsal: S55 Elmalı hisseli-arsa (S55-EK'te düzeltildi).

---

## Cevaplayamadıklarım (S55-EK)

1. **Alan-doluluk %23-50** — 6 mahalle ortalamasında %28; hisseli oranının payda-güvenirliği düşük. TT-HAFIZA'da her arsa için tapu-alanı çekmek gerek.
2. **Metin-tarama sözlüğü** — "paylı tapu", "hisse", "kooperatif" haricinde varyantlar (örn. "3 kişi ortak", "iki hisse") yakalanmadı; sözlük genişletilebilir.
3. **Wilson %95 vs eşik testi** — %95 muhafazakâr; %68 (1σ) veya Bayes bant daha bilgilendirici olur ama karşılaştırma standardı olarak %95 kaldı.
4. **BEY-20'nin diğer sinyalleri** — S55'te küçük parsel + manzara-yok bulguları hâlâ geçerli; bu sprintte sadece hisseli oranı yeniden test edildi.
5. **Fatih üst-bant %56** — n=3 alan-dolu, bant o kadar geniş ki karşılaştırmak anlamlı değil; Fatih için ek veri şart.

---

## Çıktılar

- **Bu MD:** `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S55EK.md`
- **JSON:** `~/tradia_analiz/cikti/vaka_beykoz_S55EK.json`
- **K24a bildirim (Signals + Anayasa):** `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_beykoz_S55EK.json`

## Disiplin S55-EK
**Standing #1 önerisi: Sıfır Yasağı** · A04 (Elmalı bulgusu zayıfladı, kesin kanıt DEĞİL — dürüst) · V37 (v24 dokunulmadı) · V11 (hipotez, kehanet YOK) · #21-B kaynak-kanıt · Wilson %95 bandı · dönem etiketi=`S48_UZANTI_2026-Haz-Tem` · $0 · SİLME YOK
