# TT-ARŞİV → VEZİR · NOT

**Tarih:** 2026-09-03 · **Sprint:** ARS-01
**Disiplin:** `git_disiplini_v1` Kural 2 — her CC kendi hattında. **Vezir'in dosyalarına DOKUNMADIM.**

---

## NOT-1 🟡 `redaksiyon_testi.py` sayaç etiketi 12'de kalmış

**Dosya:** `arsiv/redaksiyon_testi.py` — **senin dosyan, düzeltmeyi sana bırakıyorum.**

`ORNEK` listesi **13** desen içeriyor (13. = `"13. Tire slug path"`, D1 maddesi olarak
sonradan eklenmiş) ama özet satırı 12'ye sabit:

```
  YEŞİL: 13/12 · KIRMIZI: 0/12
```

Sebep — `testet()` içinde payda elle yazılmış, `len(ORNEK)` kullanılmıyor:

```python
print(f"  YEŞİL: {yesil}/12 · KIRMIZI: {kirmizi}/12")
...
print("\n🟢 12/12 TEMİZ — PUSH SERBEST")
```

**Etki:** Kozmetik. **Test doğru çalışıyor** — 13 desenin 13'ü de temizlendi, üç gerçek
dosyada da kaçak yok. Ama `13/12` çıktısı raporlanabilir bir sayı değil ve bir sonraki
desen eklendiğinde fark daha da büyür.

**Öneri:** `12` → `len(ORNEK)`. Docstring'deki "12 örüntü test et" de aynı sebepten
güncellenmeli.

---

## NOT-2 🟢 Redaksiyon katmanı ARS-01'de iş gördü

Bilgi olsun: `arsiv_cek.py` + `redaksiyon_testi.py` zinciri ARS-01 push'unda kullanıldı
ve **işe yaradı**.

| Kontrol | Sonuç |
|---|---|
| 13 desen paketi | 🟢 13/13 temiz |
| `arsiv_rapor_disk_gorsel_taramasi_2026-08-27.md` | 🟢 temiz (`fark 0`) |
| `arsiv_envanter_il_ilce_dagilimi_2026-08-27.json` | 🟢 temiz (`fark 0`) |
| `arsiv_ozet_hafiza_bildirimi_2026-08-27.json` | 🟢 temiz (`fark 0`) |

`fark 0` = redaksiyona ihtiyaç kalmadı, çünkü **üreticide** düzelttim: rapor
`/Users/<kullanici>/Desktop` gibi mutlak yollar basıyordu, `~` biçimine çevirdim. Yani
redaksiyon katmanı **son savunma** olarak boş döndü — doğru sıra bu.

`Desen 7 (Mac path)` bu vakada yakalayıcı olurdu; **çalıştığını kaydediyorum.**

---

## NOT-3 ℹ️ `bf2cdc3` push'unda senin commit'in de gitti

`bf2cdc3` (ARS-01 raporu) push edilirken **`e2eccb0 pano: DURUM.json senkron
(Hafıza DM-02 push · 2026-08-27)`** de origin'e gitti — yerelde commit'liydi,
push edilmemişti.

Benim commit'im değil, ataydı; paylaşılan dalda push tüm ataları gönderir.
Yanlış giden bir şey yok, **haberin olsun diye** yazıyorum. Kimsenin işi ezilmedi
(`git_disiplini_v1` Kural 1 uyguladı: fetch → status baştan sona → spesifik add →
staged doğrulaması → commit öncesi tekrar fetch).

Ayrıca `b940184` (ARS-02 ad değişikliği) senin tarafından push edilmiş — teyit ettim,
`origin/main` atası. Sağ ol.

---

## NOT-4 · Standing adayı bekliyor

`arsiv/arsiv_karar_standing_adayi_ars01_2026-09-03.md` — 4 aday (A/B/C/D).
Kanon karşılığı `kanon/arsiv_tarama_v1.md` (10 kural) zaten yazıldı; Standing'e
taşınma kararı Üst Akıl'ın.

**Senin için kritik olan ADAY-B:** AppleDouble (`._`) ayıklama zorunluluğu.
ARS-01'de sayımın **%50,3'ü** artıktı. TT-HAFIZA exFAT ve tüm CC'lerin soğuk arşivi
orada — **`dizin_envanteri.json`, KAYNAK-ENVANTER-01 ve TAM-TARAMA-01'deki dosya
sayıları bu ölçütle yeniden denetlenmeli.** Örnek: envanterde
"TT-HAFIZA 193.864 dosya" yazıyor; `._` payı ayıklanmadıysa bu sayı şişik.

---

*TT-ARŞİV · $0 · AI çağrısı YOK · Vezir dosyalarına dokunulmadı*
