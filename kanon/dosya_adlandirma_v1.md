# DOSYA ADLANDIRMA STANDARDI v1

**Tarih:** 2026-08-27
**Kanal:** Vezir BE-01/H
**Statü:** KANON · Standing #38 uyumlu
**Uygulama:** YENİ dosyalar için ZORUNLU · eski 213 dosya dokunulmaz

---

## 1. Kural (kısa)

```
<cc>_<tur>_<konu>_<YYYY-AA-GG>.md
```

**Bileşenler:**
- **`<cc>`** — CC slug (küçük harf, tire yok): `vezir`, `hafiza`, `basin`, `ttmap`, `ttai`, `ttpazarlama`, `analiz`, `tic`, `borsa`, `sosyal`, `ihale`, `finans`, `signals`, `kasa`, `kitap`, `arsiv`, `site`. Ortak alanlar için: `kurulus`, `dagitim`, `beykoz`, `ua` (Üst Akıl direktifi).
- **`<tur>`** — Belge türü: `rapor`, `karar`, `envanter`, `analiz`, `ozet`, `brief`, `plan`, `direktif`, `vaka`, `sprint`, `checkpoint`, `kanon`.
- **`<konu>`** — Kısa açıklayıcı slug (2-5 kelime): `havuz_4x`, `beykoz_kapanis`, `evds_toplayici`, `standing_37`.
- **`<YYYY-AA-GG>`** — ISO tarih: `2026-08-27`.

**Ayraç:** `_` (alt-tire). Kelime içinde `_` de OK.
**Uzantı:** `.md` (yeni belge), `.json` (data), `.png` (görsel).

---

## 2. Yasak

- 🚫 **Türkçe karakter:** ç ğ ı ö ş ü (ve büyük harfleri) → yerine `c g i o s u`
- 🚫 **Boşluk:** `Vezir Rapor` → `vezir_rapor`
- 🚫 **Nokta iki kere:** `dosya..md` → tek nokta
- 🚫 **Büyük harf başlangıç:** `KURULUS_XXX` (eski standart) yerine yeni dosyalarda küçük harf tercih
- 🚫 **Türkçe karakter dizin adında:** `beykoz_ansiklopedi/riva.md` ✅ vs `beykoz_ansiklopedi/İnci̇rköy.md` ❌

---

## 3. Örnekler

### ✅ Doğru

```
vezir_envanter_buyuk_2026-08-27.md
hafiza_kanon_slug_kaynak_bazli_2026-07-31.md
basin_sprint_s89_2026-07-27.md
ua_direktif_hasat_tam_saldiri_2026-07-30.md
beykoz_vaka_signals_sig12_2026-07-29.md
```

### ❌ Yanlış (ve düzeltmesi)

| Eski/yanlış | Doğrusu |
|---|---|
| `HASAT_EMRİ.md` | `ua_direktif_hasat_emri_2026-07-30.md` |
| `CC-Kitap Öz Analiz.md` | `kitap_analiz_oz_kapsam_2026-07-12.md` |
| `Rapor 27 Ağustos.md` | `vezir_rapor_be_01_2026-08-27.md` |

---

## 4. Eski Dosyalar — DOKUNULMAZ

- **213 mevcut dosya için TOPLU RENAME YOK** (referanslar/link kırılır)
- Bunun yerine [`kanon/INDEKS.md`](INDEKS.md) üzerinden erişilebilir
- **SÜPERSEDE mekanizması:** yeni dosya adında `_v2` / yeni tarih; eski dosya INDEKS'te "SÜPERSEDE→<yeni>" işareti alır
- **SİLME-YOK kanonu** korunur (eski dosya diskte kalır, INDEKS'te statüsü değişir)

---

## 5. Alt-dizin Kuralları

| Dizin | Kural |
|---|---|
| `kurulus/` | `KURULUS_<CC>.md` (büyük harf, eski standart) — **istisna korunur** |
| `dagitim/` | `UA_YYYYMMDD_<konu>.md` (mevcut kalıp) — **istisna korunur** |
| `pano/` | tek dosya çekirdeği (`index.html`, `ozet-wNN.json`, `ENVANTER_*`) — istisna |
| `arsiv/` | Standing #37 script + kanon — istisna |
| `kanon/` | `<konu>_v<n>.md` — yeni kanon dosyaları |
| **Yeni serbest dosya** | `<cc>_<tur>_<konu>_<tarih>.md` (bu standart) |

---

## 6. Zorunluluk Sınırı

Bu standart:
- ✅ **Yeni CC** kuruluşunda ZORUNLU
- ✅ **Yeni serbest belge** (kanon dışı) için ZORUNLU
- ⚠ **`kurulus/`, `dagitim/`, `pano/`** için istisna (mevcut kalıp)
- ❌ **Rename işi YAPILMAZ** — sadece yeni dosyalarda uygulama

---

## 7. Standing İlişkisi

- **Standing #37 KALICILIK** — SİLME-YOK ile uyumlu (eski dosya kalır)
- **Standing #38 TERMİNAL-ÖNCELİK** — script/awk ile dosya listeleme kolaylaşır (regex uyumu)
- **KVKK #31** — dosya adında kişi/kurum ismi YASAK (ör: `patron_talimat_...`.md yasak)

---

*Vezir BE-01/H · $0 · 2026-08-27*
