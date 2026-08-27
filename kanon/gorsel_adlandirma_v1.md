# GÖRSEL ADLANDIRMA KANONU v1

**Üreten:** CC-ARŞİV · **Tarih:** 2026-08-27 · **Kapsam:** repo içi tüm görseller (PNG/JPG/SVG)
**Kardeş kanon:** [`dosya_adlandirma_v1.md`](dosya_adlandirma_v1.md) (MD/JSON için)

---

## 1) Şablon

```
gorseller/<proje>/<vaka>/<tur>/<vaka>_<tur>_<konu-slug>_<YYYY-AA-GG>.<uzanti>
```

Örnek:
`gorseller/tradia/beykoz/karo/beykoz_karo_bey15-torunlar-942-947_2026-07-28.png`

| Alan | Kural |
|---|---|
| `<proje>` | Proje/kurum. Şu an tek değer: `tradia`. Tradia-dışı işler bu ağaca **girmez**. |
| `<vaka>` | Vaka/ilçe kökü — `beykoz`. Dosya adı da **bununla başlar**. |
| `<tur>` | Görselin cinsi (§2). Klasör adı ile dosya adındaki tür **aynı olmak zorunda**. |
| `<konu-slug>` | Ne gösterdiği. Küçük harf, tire ayraç, Türkçe karakter yok. |
| `<YYYY-AA-GG>` | Dosyanın `mtime`'ı. Üretim tarihi. |

**Yasak:** boşluk · büyük harf · Türkçe karakter (`ç ğ ı ö ş ü`) · alt-tire konu içinde · `v2`/`son`/`final` gibi ekler konu-slug'ında.

**TR slug tuzağı:** `İ`→`i`, `I`→`i`, `ı`→`i` dönüşümü **naive `.lower()` ile yapılmaz** — önce TR-map, sonra NFKD+ascii. (Bkz. Borsa `ad_norm` vakası.)

---

## 2) Tür sözlüğü (mevcut)

| Tür | Ne | Örnek konu |
|---|---|---|
| `karo` | ÖNCE/SONRA uydu karosu (true-color, yan-yana) | `riva`, `pasabahce` |
| `karo-v2` | Aynı karonun **revizyon** basımı (§3) | `tokatkoy` |
| `sunum` | Sunum/yeniden-bası kalitesi görsel | `incirkoy` |
| `isi-haritasi` | Mahalle × ayak ısı matrisi | `ced-yogunluk` |
| `harita` | Tematik harita | `kisit-gercek`, `konum-gercek` |
| `harita-arazi` | Arazi kullanım haritası | `genel` |
| `grafik` | Çubuk/çizgi/dağılım grafiği | `bey15-cubuklu-hafriyat` |

Yeni tür eklenirse **bu tabloya ve `gorseller/MANIFEST.md`'ye** aynı commit'te yazılır.

---

## 3) Sürüm kuralı — `-v2` soneki ne zaman?

> **Tarih ayırıyorsa sürüm soneki KULLANILMAZ.** Aynı işin farklı günlerdeki basımı zaten `<YYYY-AA-GG>` ile ayrışır.

`-v2` soneki **yalnızca** şu iki koşul birlikte sağlanınca:

1. Kaynak MD'de **açık revizyon işareti** var ("v2", "revizyon", "keskinleştirme", "düzeltme"), **ve**
2. Tarih ayırt etmiyor (aynı gün üretilmiş).

**Uygulanan emsal — Beykoz karo/karo2:**
- Kanıt: `cc_ttmap_MAP36.md:1` → "BEYKOZ KARO KESKİNLEŞTİRME **v2**" · `README.md` → "6 karo **v2**" · `cc_ttmap_MAP37.md:8` → "arşive iner"
- Tarih: v1 ve v2 **ikisi de 2026-07-28** → tarih ayırmıyor
- **Karar:** `-v2` soneki kullanılır → `karo` + `karo-v2` ayrı iki tür/klasör

Karşı emsal: `sunum` 2026-07-29 tarihli, karo'lardan **tarihle** ayrışıyor → sonek almaz, kendi türü.

---

## 4) Kod açma kuralı

İç kodlar (`bey15`, `BEY-29`, `SD-01`) tek başına dosya adına **konmaz**; okuyanın kim olduğunu bilmesi gerekmez.

```
kod-kalır + açıklaması eklenir:  bey15-torunlar-942-947
```

Açıklama **kaynak MD'den okunur, uydurulmaz**. Kaynak çelişiyorsa (BEY-15 için Tic "Paşabahçe/Torunlar" ↔ TT-MAP "Çubuklu" der) → **konu-slug'a çelişki yazılmaz**, MANIFEST'e şerh düşülür.

Okunamayan alan → `BELIRSIZ`. **UYDURMA YOK.**

---

## 5) Nerede uygulanır

| Yer | Kural |
|---|---|
| **Repo içi (git)** | Zorunlu. `git mv` + **aynı commit'te** MD referans onarımı + kırık-link doğrulaması. |
| **Disk (repo dışı)** | **Rename YAPILMAZ** — git güvenliği yok, geri alınamaz. Sadece *öneri* JSON'u üretilir. |
| **TT-HAFIZA** | Uydu arşivi kendi protokolüne tabi: `uydu_arsiv/<mahalle>/<tarih>/` (bkz. uydu-arşiv protokolü). |

---

## 6) Commit disiplini

Tek commit'te **hepsi** olmak zorunda:
1. `git mv` (rename)
2. Tüm MD referans onarımı (link **hedefi** + link **etiketi** + düz-metin dizin adı)
3. Kırık-link doğrulama raporu
4. `gorseller/MANIFEST.md` güncellemesi

Yarım bırakılan rename = kırık repo. (Emsal: bu kanondan önceki devir — 28 rename staged, 2 kırık link, MANIFEST yok.)

---

*CC-ARŞİV · kanon v1 · $0 · SİLME-YOK*
