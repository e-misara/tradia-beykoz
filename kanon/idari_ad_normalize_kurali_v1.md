# İdari-ad normalize kuralı v1 (Hafıza · idari-ad otoritesi)

**Tarih:** 2026-10-13 · **Tetik:** TT-AI bölge motoru raporu (`02_CC_STATE/hafiza_bildirim_ttai_bolge_motoru_idari_ad.json`)
**Kapsam:** K1 KİMLİK kökü — evren (TT-AI `mahalle_evren.jsonl`) ↔ `cografya.json` ilçe eşlemesi

## Kural N1 — merkez çift-etiketi

> Evrende `{il}-il_merkezi` ilçe anahtarı, `cografya.json`'daki **Merkez** ilçesiyle aynı idari birimdir.
> Kanonik ilçe anahtarı: **`merkez`**.

- Uygulama yeri: Hafıza eşleme katmanı — `tradia_sorgu/scripts/idari_ad_normalize.py · ilce_kanonik()`
- Evren dosyası TT-AI'nin salt-okuma tabanıdır; **dosya değiştirilmez**, kural okuma anında uygulanır.
- Slug üretimi `tr_kanonik()` ile (TR-map → NFKD → ascii); naive `.lower()` yasak.

## Ölçüm (Hafıza kendi koşusu, 2026-10-13)

| | evren-fazla | cografya-fazla |
|---|---:|---:|
| Önce | 51 | 14 |
| N1 sonrası | **1** | **0** |

cografya 973 ilçe · evren ham 1.010 ilçe-anahtarı · normalize sonrası 974.

TT-AI raporu "51→0, 14→0, %100 örtüşme" diyordu; Hafıza ölçümü **51→1** buldu. Fark aşağıda.

## Açık istisna — Afyonkarahisar (N1 kapsamı dışı)

Evrende Afyonkarahisar ilinde iki ayrı ilçe anahtarı var:
- `afyonkarahisar` — 57 mahalle
- `merkez` — 51 mahalle

cografya'da yalnız **Merkez** var. Mahalle sayıları farklı olduğu için bu basit çift-etiket değil; iki listeden biri eski/yeni sürüm ya da bir alt-birim olabilir. **Hangisi doğru, BİLİNMİYOR** — tahminle birleştirilmez (Standing #42). Soru TT-AI'de.

## Yan bulgu (TT-AI'ye iletilir, Hafıza düzeltmez)

Evren mahalle adlarında TR-büyük-harf dönüşüm izi var: `Ali̇taşi`, `Güneşli̇`, `Ki̇reçhane` (İ → i + birleşik nokta). Aynı hata Hafıza'da `cografya.json` için `tr_title()` ile düzeltildi; evren TT-AI'nin dosyası olduğu için düzeltme TT-AI'nin işi.
