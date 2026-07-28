# Vaka: Beykoz — CC-Analiz S55 (Elmalı İlan Profili + Komşu Bant)

**Sprint:** S55 · **Tarih:** 2026-07-28 · **$0** · **V37** · **Dönem: `S48_UZANTI_2026-Haz-Tem`**

**Kaynak (#21-B):**
- v25 zengin katman: `~/tradia_analiz/data/sahibinden_master_v25_beykoz_zengin_S52.jsonl` (3.293 kayıt)
- Uzantı NDJSON (başlık): `~/Downloads/tradia_sahibinden_2026-07-25...ndjson` + `2026-07-26...ndjson`

---

## Elmalı Ana Profil (n=50)

### Tip × SK Dağılımı

| Tip × SK | n |
|---|---:|
| **arsa_sat** | **18** |
| villa_sat | 14 |
| ticari_kir | 8 |
| daire_kir | 3 |
| konut-belirsiz_sat | 2 |
| bina_sat | 2 |
| daire_sat, villa_kir, ticari_sat | 1'er |

**Detay:** 16 · Liste: 34

### ★ Hisseli-Arsa Oranı (TOPLAMA GÖSTERGESİ)

| Metrik | Değer |
|---|---:|
| Arsa satılık toplam | 18 |
| **Hisseli/Kooperatif** | **2** |
| Temiz (Müstakil/Arsa/Kat) | 4 |
| Belirsiz (tapu boş) | 12 |
| **Hisseli oranı (arsa içinde)** | **%11.1** |
| **Hisseli oranı (dolu içinde, temiz+hisseli)** | **%33.3** |

### Manzara/Boğaz Kelime Sıklığı

- **1/50 = %2.0** — çok düşük (kırsal iç bölge, boğaz-görüş yok)

### m² Bandı (tüm kayıt, n=41)

| min | Q1 | Medyan | Q3 | max |
|---:|---:|---:|---:|---:|
| 3 | 145 | **386** | 752 | 2.933 |

### Satıcı-Tipi

| Kim | n | % (dolu içinde) |
|---|---:|---:|
| Emlak Ofisinden | 13 | 81.2 |
| Sahibinden | 3 | 18.8 |
| _YOK | 34 | — |

**Dolu-oranı düşük (16/50 = %32)** — kim-den alanı seyrek.

---

## Komşu Bant Kıyası (Çavuşbaşı Bandı)

### Karşılaştırma Tablosu

| Metrik | **Elmalı** | Çavuşbaşı Çiftlik | Yavuz Selim | Fatih | Baklacı | Çengeldere |
|---|---:|---:|---:|---:|---:|---:|
| Toplam n | **50** | 100 | 127 | 27 | 66 | 102 |
| Arsa sat n | 18 | 38 | 39 | 6 | 20 | 32 |
| **Hisseli n** | **2** | 0 | 1 | 0 | 0 | 0 |
| **Hisseli % (arsa içinde)** | **%11.1** ★ | 0.0 | %2.6 | 0.0 | 0.0 | 0.0 |
| **Hisseli % (dolu içinde)** | **%33.3** ★ | 0.0 | %11.1 | 0.0 | 0.0 | 0.0 |
| Manzara kelime % | %2.0 | 11.0 | 15.0 | 0.0 | 9.1 | 5.9 |
| **m² medyan** | **386** | 921 | 684 | 216 | 692 | 494 |
| **m² Q3** | 752 | 2.140 | 2.054 | 431 | 1.500 | 1.037 |
| Emlakçı % | 81.2 | 87.5 | 86.0 | 88.9 | 86.7 | **93.5** |

### ★ Kritik Bulgu: Hisseli-Arsa Farkı

**Elmalı komşu bantta hisseli-arsa oranında ANORMAL YÜKSEK:**
- Elmalı: **2/18 = %11.1** (arsa içinde) veya **2/6 = %33.3** (dolu içinde)
- Komşu bant: 5 mahalleden 4'ünde **%0.0**, tek istisna Yavuz Selim %2.6/%11.1

**Yorumlama (V11 yapısal, kehanet YOK):**
- Beykoz'un kuzey-iç kırsal mahallelerinde tarihsel arazi bölünmesi (miras hisseleri) hisseli oran genelde bir baz düzeyde olur
- Elmalı'nın hisseli oranı komşulardan bariz farklı — **toplama-göstergesi hipotezi tutarlı** (bir yatırımcı/proje sahibi küçük hisseleri satın alıp büyük parsel oluşturmak istiyor olabilir)
- Bu **hipotez**; tek başına kanıt değil, sokak-bazlı sahibinden takip veya tapu-sicil kontrol gerek

### m² Bandı Yorumu

**Elmalı parselleri komşulardan bariz KÜÇÜK:**
- Elmalı medyan 386 m² (Q3 752)
- Çavuşbaşı Çiftlik medyan 921 m² (Q3 2.140) — **2.4×**
- Yavuz Selim medyan 684 m² · Baklacı 692 m² · Çengeldere 494 m²

**Fatih daha küçük (medyan 216)** — Fatih Cad. çevresi merkezi/dükkan ağırlıklı.

**Elmalı küçük parsel + hisseli oran birlikte** → arazi tarihsel olarak bölünmüş bir bölge sinyali. Toplama-öncesi patern uyumlu.

### Manzara Kelime Yorumu

Elmalı **%2.0** — bant en düşük (Fatih hariç %0). Cazibe kelimeleri (boğaz/deniz/manzara) yok. Bu:
- Elmalı **iç kırsal** (Boğaz görmez)
- İlanlar cazibeye değil, **arazi teklifine** dayanıyor
- Alıcı-hedefi manzara-arayan değil, **arazi-toplayıcı/proje** olabilir (yatırım-mantıklı, toplama-göstergesiyle örtüşür)

### Satıcı-Tipi Yorumu

Elmalı **%81.2 emlakçı** — komşulardan biraz düşük ama emlakçı yine baskın. Çengeldere en yüksek (%93.5).
Elmalı'daki %18.8 sahibinden oranı sıradan; toplama-hipotezini destekleyecek "yoğun emlakçı" sinyali yok.

---

## Ana Yorumlama (Toplama-Göstergesi Hipotezi)

**LEHİNE:**
1. ★ Hisseli-arsa oranı komşu bantta anormal (%11.1 arsa içinde, komşular %0)
2. Küçük parsel medyanı (386 m²) — bölünmüş arazi işareti
3. Manzara/cazibe kelimesi yok — arsa-teklif odaklı ilan

**ALEYHİNE / KESİN DEĞİL:**
1. n=50 küçük örneklem — istatistiksel güç zayıf
2. Hisseli n=2 tek başına toplama kanıtı değil (miras-yol bölünme de olabilir)
3. Sahibinden ilanları oranı komşularla benzer — "yatırımcı yoğunluğu" işareti belirsiz
4. Tapu-sicil kontrolü / SBS verisi yok — dış kaynak

**Sonuç:** Hipotez **YAPISAL-TUTARLI** ama tek başına yeterli değil. F6 seçilim ekseninde **izlenmesi gereken mahalle** sinyali → sonraki turda:
- Sokak-bazlı ilan takibi (hangi sokaklarda küçük hisseler)
- Aynı ilan sahibinin/emlakçının farklı hisseleri listesi
- Tapu sicil müdürlüğü sorgusu (Patron/saha)

---

## Cevaplayamadıklarım

1. **n=50 küçük** — istatistiksel güç zayıf; tek tur veriden kesin bulgu çıkmaz
2. **Sokak/mevki granülü yok** — Elmalı Mah. içinde hangi sokakta hisse yoğun bilinmiyor
3. **Ilan sahibi/emlakçı tekrarı** — aynı satıcı birden fazla hisse mi listeliyor ölçülmedi (emlakçı-kimlik alanı zayıf)
4. **Tapu sicil doğrulaması** — hisseli tapu sayısı sadece ilan-bildirimine dayalı, tapu-kayıt tarafından doğrulanmadı (dış kaynak)
5. **Toplama-hipotezi zamansal** — tek snapshot (Tem 2026); 3-4 ay sonra "hisseli sayısı azaldı mı" izlenmedi
6. **Yavuz Selim %2.6 hisseli** — Elmalı ile aynı bantta ama daha zayıf; ikinci bir kontrol mahallesi olabilir

---

## Çıktılar

- **Bu MD:** `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S55.md`
- **JSON:** `~/tradia_analiz/cikti/vaka_beykoz_S55.json`
- **K24a bildirim (Signals + Finans):** `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_beykoz_S55.json`

## Disiplin S55
A04 (n=50 küçük, hisseli n=2 tek başına kanıt değil dürüst not) · V37 (v24 dokunulmadı) · V11 (yapısal, kehanet YOK — toplama HİPOTEZ, kanıt değil) · #21-B kaynak-kanıt · dönem etiketi=`S48_UZANTI_2026-Haz-Tem` · $0 · SİLME YOK
