# Vaka: Beykoz — CC-Analiz S51 (URL-slug PK + Mahalle-FE + Arşiv Geniş)

**Sprint:** S51 · **Tarih:** 2026-07-27 · **$0**

**Kaynak (#21-B):**
- S47 NDJSON: `~/Downloads/tradia_sahibinden_2026-07-25-21-09-32.ndjson`
- S48 NDJSON: `~/Downloads/tradia_sahibinden_2026-07-26-08-56-19.ndjson`
- CSV S29 arşiv: `/Volumes/TT-HAFIZA/01_YEDEK/2026-07-03_S29/.../Istanbul-Beykoz/*.csv`
- Uzantı katman: `~/tradia_analiz/data/uzanti_katmani_beykoz_S48.jsonl` (3.293 kayıt)

---

## G1 — URL-Slug PK ile Yeniden Eşleme

**S50 önerisi uygulandı:** PK = (ilan_id, url_slug)

### Sonuç Tablosu

| Ölçüm | S49 (id-only) | **S51 (id+slug)** |
|---|---:|---:|
| S48 toplam kayıt | 3.022 | 3.022 |
| Çakışan (gerçek aynı ilan) | 40 → 39 hatalı | **1** |
| Yeni kayıt | 2.982 | **3.021** |
| Fiyat değişen aynı-slug | — | **0** |
| Aynı fiyat aynı-slug | — | **1** (52M → 52M) |
| Liste→Detay upgrade | — | 1 |

**Gerçek çakışma tek örnek:** ilan_id 1316370381, 52.000.000 → 52.000.000 **±0.00%** (24 saatte fiyat sabit)

### Fiyat Delta Örneklem Durumu

**Hâlâ ölçülemez** — n=1 fiyat-değişimi için yetersiz. 3-4 tur çekim şart. S49'daki "40 ilan indirdi/zamlandı" iddiası **kesin çürüdü** — recycle olan farklı ilanlardı.

**S50 önerisi RESMİLEŞTİ:** Uzantıya `pk = (ilan_id, url_slug)` kuralı gönderilecek.

---

## G2 — Arşivde v24 Öncesi Beykoz Var mı?

**KESİN CEVAP: YOK.**

### Kaynak Tarama

| Kaynak | Beykoz kayıt | Tarih aralığı |
|---|---:|---|
| CSV S29 (5 dosya) | 797 | Yıl=2026 (tümü) |
| S46 JSONL (CSV işlenmiş) | 797 | 2026-02-07 → 2026-05-08 |
| Uzantı S48 | 3.293 | 2026-06 → 2026-07-25 |

Ham CSV dosyaları da 2026 yılı ilanları içeriyor. **2025 ve öncesi Beykoz kaydı arşivde YOK.**

**Zaman serisi geriye uzatma:** İmkansız — mevcut arşiv 2026 yılında başlıyor.

**Var olan zaman serisi:**
- **Dönem 1:** 2026-02 → 2026-05 (CSV 797 kayıt)
- **Dönem 2:** 2026-06 → 2026-07 (Uzantı 3.293 kayıt)
- 4 aylık gözlem penceresi maksimum (S49'da bunu ölçtük).

---

## G3 — Mahalle Fixed-Effects Hedonik (S50 Düzeltmesi)

**S50 tanısı:** Yaş katsayısı POZİTİF (+%0.84) — omitted variable bias (mahalle sabit etkisi eksik).  
**S51 çözüm:** Mahalle dummies eklendi (n≥8 mahalleler için).

### Örneklem

- Toplam detay konut satılık m²+f: **141**
- Mahalle n≥8 kesinti: **97 gözlem, 4 mahalle** (Kavacık, Acarlar, Soğuksu, Kanlıca)
- Baz mahalle: **Kavacık** (yüksek n=45)

### OLS Regresyon (Mahalle-FE)

```
log(TL/m²) = 11.6194 − 0.0034·yaş − 0.0077·kat
           + 0.8212·yerden + 0.5983·merkezi − 0.1829·site
           + 0.6110·Soğuksu + 0.4476·Acarlar + 0.7701·Kanlıca
```

| Değişken | S50 (FE-siz) | **S51 (Mahalle-FE)** | Yorum |
|---|---:|---:|---|
| Baz TL/m² | 77.247 (mix) | **111.235** (Kavacık) | Mahalle-koşullu |
| Yaş / yıl | +%0.84 ⚠ | **-%0.34 ✓** | Doğru işaret |
| Kat / seviye | +%1.44 | **-%0.77** | Zayıf negatif |
| **Yerden ısıtma** | +%107.5 | **+%127.3** | Güçlendi |
| Merkezi ısıtma | +%106.3 | **+%81.9** | Bir kısmı mahalleye kaptı |
| Site içinde | +%34.4 | **-%16.7 ⚠** | İşaret döndü |
| Kanlıca (mh) | — | **+%116.0** | Baz Kavacık üstünde |
| Soğuksu (mh) | — | +%84.2 | |
| Acarlar (mh) | — | +%56.5 | |
| **R²** | **0.439** | **0.671** | +%53 iyileşme |

### Yorumlar (A04 dürüst)

**Yaş katsayısı düzeldi** ✓ — mahalle sabit etkisi bias'ı temizledi. Şimdi -%0.34/yıl (küçük negatif, klasik amortisman).

**Site içinde katsayısı ters döndü** (+%34 → -%16.7). Sebep: Acarlar/Kanlıca zaten site-ağırlıklı yüksek fiyat bölgeleri, mahalle FE bu etkiyi absorbe edince "site içinde olmak" tek başına primi vermiyor — hatta site içinde olan daireler mahalle-koşullu olarak biraz daha düşük fiyat. **Site etkisi lokasyon-bağımlı**, evrensel bir prim değil.

**Isıtma etkisi hâlâ güçlü** — yerden +%127, merkezi +%82. Mahalle-kontrol sonrası bile bu prim koruyor, **modernizasyon primi gerçek**.

**Mahalle etkileri (Kavacık bazlı):** Kanlıca +%116 · Soğuksu +%84 · Acarlar +%56. Coğrafi Boğaz-yakın konumun net primi.

**R² 0.671** — model açıklama gücü orta-yüksek, S50'den %53 iyileşme.

---

## G4 — SB2F Boilerplate: Uzantı-Ekibi Bildirimi

### Yeniden Ölçüm (case-insensitive)

**414 kayıt** başlık VEYA URL slug'da `sb2f` içeriyor (S50'de %12.7 sayıldı, doğrulandı).

### Örnek Kalıplar

| ilan_id | Başlık (ilk 80 char) | URL sb2f | Fiyat |
|---|---|---|---:|
| 846718521 | "Kaçırılmayacak Fırsat! Açık & Kapalı Otopark Sahibinden Var 2+1 ..." | — | 54.000.000 |
| 846747315 | "Mükemmel Ötesi 3.5+1 Ferah Kapalı Otopark Geniş Var Satılık" | `...mukemmel-otesi-sb2f-ferah-ka` | 18.500.000 |
| 846754051 | "Var Acil! 30 ve üzeri Fiyat Düştü! Satılık Doğa Manzaralı 1+1" | `...30-ve-sb2f-fiyat-du` | 8.600.000 |
| 846755851 | "Var Ferah Satılık Hastalık Sebebiyle 2+1 Merkezi Konum **true**" | — | 13.600.000 |

### Tespit Edilen Kalıplar

1. **URL sb2f:** Sahibinden URL slug'ında bazı kelimeleri "sb2f" ile ikame ediyor (muhtemelen "sahibinden" kısaltma, ama slug içinde placeholder gibi görünüyor). Normal sahibinden davranışı olabilir.
2. **Jenerik boilerplate başlıklar:** "Fiyat Düştü! Son 3 gün!", "Mükemmel Ötesi", "Kaçırılmayacak Fırsat!", "Hastalık Sebebiyle", "Merkezi Konum" — emlak ofis SEO şablonu tekrarı.
3. **"true" gibi debug/placeholder token'ları** başlıkta görünüyor (örn. `846755851`: "Merkezi Konum true").

### Uzantı-Ekibi'ne Bildirim

**Sorular:**
1. sb2f URL slug'ta "sahibinden" kısaltması mı, yoksa uzantı kendi placeholder'ı mı?
2. "true" gibi debug string'ler nereden geliyor — parse-log'u başlığa sızıyor mu?
3. Jenerik başlık kalıpları %12.7 oranında — bunlar test/sandbox mı, yoksa gerçek emlak SEO tekrarı mı?
4. **★ PK Kuralı:** `(ilan_id, url_slug)` primary key — 40 çakışmadan sadece 1'i gerçek. Sahibinden ilan_id recycle ediyor, uzantı schema'sına slug eklenmeli.

---

## G5 — Cevaplayamadıklarım

1. **Gerçek fiyat delta** — n=1 hâlâ yetersiz, 3-4 tur çekim gerek
2. **v24 öncesi Beykoz zaman serisi** — arşivde yok, yeni veri kaynağı (Endeksa/Reidin) gerek
3. **Site içinde katsayısı işaret döndü** — nedeni tam açıklanamadı, site×mahalle interaksiyon lazım
4. **Kat katsayısı zayıf negatif** — kısıtlı örneklem (n=97), çatı/teras kategorisi az
5. **SB2F kaynağı** — uzantı-ekibi cevabı olmadan sentetik-mi bilinmez
6. **Diğer mahalleler** (Riva, Yalıköy, Ortaçeşme) hedonik-FE dışı (n<8 detay-yeterli)

---

## Çıktılar

- **Bu MD:** `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S51.md`
- **JSON özet:** `~/tradia_analiz/cikti/vaka_beykoz_S51.json`
- **v24 dokunulmadı** (V37) · Disk salt-okuma ✓

## Disiplin S51
A04 (n=1 delta ölçülemez dürüst; arşiv yok dürüst) · V37 (v24 read-only, uzantı+arşiv READ-ONLY) · V11 (yapısal, kehanet yok) · #21-B kaynak-kanıt · $0 · SİLME YOK
