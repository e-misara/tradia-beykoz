# MISARA · MU-02 · Veri Şeması (v1.1 — M1 sonrası)

**Sürüm notu (v1.1, 2026-08-27):** M1 Harita teslim edildi. Değişenler:
- `veri/geojson/il.geojson` REZERV değil AKTİF (§6)
- `veri/geojson/ilce.geojson` YENİ (§6b) — 2.6 MB, ODbL
- `/api/ozet_a/<İl>/<İlçe>` + `/api/ozet_b/<İl>/<İlçe>` YENİ (§7) — statik değil API
- `veri/M1_snapshot.svg` YENİ (§8) — server-side render kanıtı
- `veri/ekran_goruntuleri/M1_20260827_v3.png` YENİ (§8) — canlı ekran kanıtı

---

# MISARA · MU-01/MU-02 · Veri Şeması (v1.1)

**Kural:** Uygulama SADECE okur. Hafıza (CC-Hafıza / B9) üretir. Şema uyuşmazsa uyum **uygulama tarafında** (app.js) yapılır — dosya dokunulmaz.

Bu belge, `misara-app/veri/` altındaki dosyaların gerçek şemasını, uygulamanın her yerde beklediği alan yollarını listeler. `app.js` bu yollara göre okur; şema kayarsa **`SemaHatasi`** aranan yol + mevcut kök anahtarlarla açık mesaj verir.

---

## 1. `veri/cografya.json` — coğrafya ağacı (kanon)

**Üretici:** CC-Hafıza (B9) · **Hedef okuyucu:** app.js · **Kaynak:** `/Users/GAC-A/tradia_sorgu/data/cografya.json`

### Kök anahtarlar (2026-08-19 kesitiyle)

| Yol | Tip | Örnek | Uygulamada kullanım |
|---|---|---|---|
| `kesit_utc` | string ISO | `"2026-08-19T…"` | Türkiye kartı altı, il kartı |
| `kaynak` | string | `"tradia_sorgu"` | (bilgi) |
| `kaynak_db_sha_kisa` | string | `"dd6a96b6f99…"` | Şerit sistem satırı |
| `lisans_idari_birim` | string | — | (bilgi) |
| `geojson_kaynak` | string | — | (rezerv) |
| `kanon_notu` | string | — | (bilgi) |
| `toplam` | object | ↓ | Türkiye kartı rakam-satırı |
| `iller` | object (dict) | ↓ | Ana ağaç · il/ilçe/mahalle drill |
| `pilot` | object | ↓ | Türkiye kartı "aktif pilot" satırı |

### `toplam` (Türkiye özet KPI)

| Yol | Tip |
|---|---|
| `toplam.il_sayi` | int (81) |
| `toplam.ilce_sayi` | int (973) |
| `toplam.dolu_il` | int |
| `toplam.kismi_il` | int |
| `toplam.sifir_il` | int |
| `toplam.dolu_ilce` | int |
| `toplam.kismi_ilce` | int |
| `toplam.sifir_ilce` | int |

### `pilot` (aktif pilot ilçe)

| Yol | Tip |
|---|---|
| `pilot.il` | string |
| `pilot.ilce` | string |
| `pilot.mahalle_sayi` | int (20) |
| `pilot.kaynak_kirilim` | object (basin_html, ilan_v24, osm_poi, ced_metin, plan_metin) |

### `iller[<İl>]` — il düğümü

| Yol | Tip |
|---|---|
| `iller.<İl>.kod` | string ("34") |
| `iller.<İl>.ad` | string |
| `iller.<İl>.ust_kod` | string / null |
| `iller.<İl>.ilce_sayi` | int |
| `iller.<İl>.ilan_sayisi` | int |
| `iller.<İl>.ced_sayisi` | int |
| `iller.<İl>.plan_sayisi` | int |
| `iller.<İl>.basin_sayisi` | int |
| `iller.<İl>.son_tarama` | string / null |
| `iller.<İl>.kaynak_dosya` | string ("kayit") |
| `iller.<İl>.durum` | string ("DOLU" / "KISMI" / "SIFIR" / "İSKELET") |
| `iller.<İl>.ilceler` | object (dict) |

### `iller.<İl>.ilceler.<İlçe>` — ilçe düğümü

| Yol | Tip |
|---|---|
| `.kod` | string ("34-KARTAL") |
| `.ad` | string |
| `.ust_kod` | string ("34") |
| `.ilan_sayisi` `.ced_sayisi` `.plan_sayisi` `.basin_sayisi` | int |
| `.son_tarama` | string / null |
| `.kaynak_dosya` | string |
| `.durum` | string ("DOLU" / "İSKELET" …) |
| `.mahalleler` | **ARRAY** (list of mahalle obj) — boş `[]` ise ingest kurulmamış |
| `.mahalle_sayi` | int **(sadece pilot ilçede geçer, Kartal)** |
| `.pilot` | bool **(sadece pilot ilçede)** |

### `iller.<İl>.ilceler.<İlçe>.mahalleler[i]` — mahalle nesnesi

| Yol | Tip |
|---|---|
| `.ad` | string |
| `.ust_ilce` | string |
| `.durum` | string ("İSKELET" / "TAM" / "TASLAK" …) |
| `.not` | string ("mahalle-bazlı ingest yok") |

> **UYARI:** `mahalleler` bir **liste**tir, dict değil. `Object.entries(mahalleler)` sayısal key döndürür → `Array.map((mah, idx) => …)` kullan.

---

## 2. `veri/DURUM.json` — sistem sayacı

**Üretici:** CC-Hafıza (B9) · Sistem sağlığı + coğrafya kapsama + havuz + özet motoru + patron görev.

### Kök anahtarlar (kanon)

| Yol | Tip | Uygulamada kullanım |
|---|---|---|
| `baslik` | string | (bilgi) |
| `standing` | string ("#39 + #40") | Şerit son satır |
| `kesit_utc` | string ISO | Şerit meta |
| `uretici` | string ("CC-Hafıza (B9)") | Şerit ilk satır |
| `sistem` | object | Şerit sistem satırı |
| `cografya` | object | Hedef bandı + şerit iki satır |
| `havuz` | object | Şerit havuz satırı |
| `ozet_motoru` | object | Şerit özet-motoru satırı |
| `patron_gorev` | object | Görev kartı |
| `sonraki_dm` | object | (rezerv — bir sonraki DM hedefleri) |

### `sistem`

| Yol | Tip |
|---|---|
| `.mac_disk_kullanim_yuzde` | int |
| `.tt_hafiza_mount` | string ("mount") |
| `.launchd_tradia_label_sayi` | int |
| `.crontab_aktif_satir` | int |
| `.db_sha_kisa` | string |
| `.db_boyut_byte` | int |

### `cografya` (özet — cografya.json'un cepteki halinden bağımsız)

| Yol | Tip |
|---|---|
| `.il_sayi` | int (81) |
| `.ilce_sayi` | int (973) |
| `.dolu_il` `.kismi_il` `.sifir_il` | int |
| `.dolu_ilce` `.kismi_ilce` `.sifir_ilce` | int |
| `.pilot_il` `.pilot_ilce` | string |
| `.pilot_mahalle_sayi` | int |
| `.cografya_json_yol` | string (dosya yolu) |

### `havuz`

| Yol | Tip |
|---|---|
| `.ulusal_ham_kayit` | int |
| `.ulusal_kanonik_alt_sinir` | int |
| `.beykoz_ham` `.beykoz_kanonik` | int |
| `.basin_html_toplam` | int |

### `ozet_motoru`

| Yol | Tip |
|---|---|
| `.a_katmani_yol` `.b_katmani_yol` | string (dosya deseni) |
| `.a_uretilen_sayi` `.b_yazilan_sayi` | int |
| `.b_tetikleyici` | string |

### `patron_gorev` — görev kartı ana kaynağı

| Yol | Tip |
|---|---|
| `.aciklama` | string |
| `.son_sahibinden_beslemesi_utc` | string ISO |
| `.gun_gecti` | int |
| `.bekleyen_il_sayisi` | int |
| `.bekleyen_il_aciklama` | string |
| `.harici_disk_durumu` | string |
| `.gh_auth_durumu` | object (aktif/scopes) |
| `.acik_borclar` | **array of string** |
| `.gorevler` | array **(opsiyonel — yoksa `acik_borclar` gösterilir)** |

### `sonraki_dm`

| Yol | Tip |
|---|---|
| `.dm_no` | string ("DM-02+") |
| `.hedefler` | array of string |

---

## 3. `veri/ozet/<İl>/<İlçe>_A.json` — A ana özet (ilçe kartında yan tarafta)

**Üretici:** özet motoru (`ozet_B_gerek_mi.py` tetikleyicisi)

| Yol | Tip |
|---|---|
| `katman` | string ("A") |
| `il` `ilce` | string |
| `kesit_utc` | string ISO |
| `rakamlar.basin_sayisi` `.ilan_sayisi` `.ced_sayisi` `.plan_sayisi` | int |
| `rakamlar.yeni_30g` `.onceki_30g` | int |
| `rakamlar.delta_yuzde` | float / null |
| `rakamlar.toplam_mahalleli_etiket` | int |
| `en_yogun_2_mahalle[]` | array of `{mahalle, kayit, pay_yuzde}` |
| `eksikler[]` | array of string |
| `metin` | string (A metni) |
| `metin_sha` | string |
| `sablon_versiyon` | string |

**HTTP path:** `/veri/ozet/<İl-encoded>/<İlçe-encoded>_A.json` (statik dosya, /api DEĞİL)

---

## 4. `veri/ozet_B/<İl>/<İlçe>_B.json` — B derin özet

| Yol | Tip |
|---|---|
| `katman` | string ("B") |
| `il` `ilce` | string |
| `son_yazim_utc` | string ISO |
| `dayandigi_A_snapshot` | object |
| `anlati[]` | array of string paragraf |
| `onemli_bulgular[]` | array of string |
| `eksik_notu` | string |
| `tazelenme_kurali` | string |
| `yazim_yontemi` | string |
| `sonraki_ai_yazim_tetigi` | string |

---

## 5. `veri/son_tarama.json` — 3-günlük döngü tetiği

| Yol | Tip |
|---|---|
| `tetik` | string ("elle · şimdi tara düğmesi") |
| `zaman` | string ISO |
| `not` | string |

**Yazan:** `tarama_dongusu.py` (elle veya launchd) · **Kural:** uygulama BU dosyayı da yazmaz, sadece `tarama_dongusu.py` yazar.

---

## 6. `veri/geojson/il.geojson` — AKTİF (MU-02 M1)

**Kaynak:** `alpers/Turkey-Maps-GeoJSON · tr-cities.json` · **Lisans:** Apache-2.0 · **Boyut:** 236 KB · **Feature:** 81 il

| Yol | Tip | Not |
|---|---|---|
| `type` | "FeatureCollection" | — |
| `features[].properties.name` | string | TR il adı (Adana, Ankara, İstanbul…) |
| `features[].properties.number` | int | Plaka kodu (1-81) |
| `features[].geometry.type` | "Polygon" veya "MultiPolygon" | — |
| `features[].geometry.coordinates` | array | WGS84 (lng, lat) |

**Uygulama kullanımı:** `app.js` `state.geojsonIl` alanına `fetch('/veri/geojson/il.geojson')` ile yükler. Türkiye seviyesinde SVG polygon üretir, `IL_ALIAS = {"Afyon":"Afyonkarahisar"}` map ile cografya anahtarına eşler. Polygon renk sınıfı `cografya.iller[<İl>].durum`'a bakar (`durum-tam` yeşil / `durum-pilot` sarı / `durum-iskelet` gri).

**BBOX:** lng 25.67-44.83 · lat 35.82-42.11 (SVG projection: equirectangular · `SVG_W=900 · SVG_H=340`)

## 6b. `veri/geojson/ilce.geojson` — YENİ (MU-02 M1 kanun-üstü)

**Kaynak:** OSM Overpass API `admin_level=6` · **Lisans:** ODbL · **Atıf:** © OpenStreetMap contributors · **Boyut:** 2.6 MB (simplified, orijinal 26 MB) · **Feature:** 974 ilçe

| Yol | Tip | Not |
|---|---|---|
| `type` | "FeatureCollection" | — |
| `name` | "TR_ilce_OSM" | — |
| `kaynak` | string | — |
| `lisans` | "ODbL" | — |
| `kesit_utc` | string ISO | OSM snapshot zamanı |
| `feature_sayi` | int (974) | 1 kayıp (çok küçük ring, DP-simplify sonrası ring < 4 nokta) |
| `features[].properties.name` | string | TR ilçe adı |
| `features[].properties.osm_id` | int | — |
| `features[].properties.wikidata` | string | — |
| `features[].geometry` | Polygon/MultiPolygon | — |

**Uygulama kullanımı:** MU-02 M1'de HENÜZ RENDER EDİLMİYOR (kanon: ilçe seviyesinde düğüm-liste devam). M2 veya sonraki modülde il polygon'una tıklandığında ilçe polygon katmanı aktive edilebilir.

**Simplify not:** `tradia_sorgu/scripts/ilce_simplify.py` (Douglas-Peucker eps=0.0027, stdlib, dış-kütüphane yok). Şekil bütünlüğü kabul edilebilir seviyede; büyük şehir sınırlarında hafif dişli.

---

## 7. `/api/ozet_a/<İl>/<İlçe>` + `/api/ozet_b/<İl>/<İlçe>` — YENİ (MU-02 M1)

**Sunucu:** `sunucu.py._api()` içinde. URL-encoded Türkçe karakter destekli (`urllib.parse.unquote`).

**Örnek çağrı:**
```
GET /api/ozet_a/%C4%B0stanbul/Kartal   →  200 · veri/ozet/İstanbul/Kartal_A.json içeriği
GET /api/ozet_b/%C4%B0stanbul/Kartal   →  200 · veri/ozet_B/İstanbul/Kartal_B.json içeriği
```

**Hata:** ilce dosyası yoksa `{"veri_yok": true, "beklenen": "...", "aciklama": "..."}` döner (200, veri_yok=true).

**Uygulama kullanımı:** İlçe kartında sağ panelde `<div id="a-ozet-yeri">` ve `<div id="b-ozet-yeri">` içine fetch ile doldurur.

---

## 8. Kanıt paketi — `veri/M1_snapshot.svg` + `veri/ekran_goruntuleri/`

| Dosya | Ne? |
|---|---|
| `veri/M1_snapshot.svg` | Server-side render (77 KB, statik). Canlı sunucu olmadan da harita önizlenebilir: `open veri/M1_snapshot.svg` |
| `veri/ekran_goruntuleri/M1_20260827_v3.png` | Canlı ekran görüntüsü (690 KB, Safari MISARA sekmesi) — Patron sunumu için |

Bu dosyalar `veri/` altındadır ancak uygulama JS bunları kullanmaz — kanıt/arşiv amaçlı.

---

## Hata Sınıfları (app.js)

| Sınıf | Tetik | Mesaj örneği |
|---|---|---|
| `FetchHatasi` | fetch/network/HTTP 4xx-5xx | "HTTP 404 · durum" |
| `JsonHatasi` | JSON.parse başarısız | "JSON bozuk (cografya): Unexpected token…" |
| `SemaHatasi` | aranan yol yok | "Şema uyuşmazlığı — aranan: iller · Mevcut kök: kesit_utc, kaynak, toplam, pilot" |

---

## Kayan-şema kuralı

Şema kayarsa (yeni sürüm CC-Hafıza yayınlarsa):
1. **Bu belgeyi güncelle** (eski yollar korunmaz; SİLİNMEZ, arşivlenir aşağıda).
2. `app.js`'te ilgili render fonksiyonu yeni yola bağlanır.
3. `SemaHatasi` mesajı ile eski yolu arayan yerler açıkça uyarır.

*Belge sürümü: v1.1 — 2026-08-27 · MU-02 M1 sonrası (Hafıza)*
*Önceki: v1.0 · MU-01 devralma sonrası (Vezir)*
