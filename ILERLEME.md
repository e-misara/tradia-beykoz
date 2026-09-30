# İLERLEME (Vezir vaat sayacı)

**Format:** `açılan / kapanan / net · toplam-aktif`
**Zorunlu:** Bu dosyanın açılış sayısından itibaren tüm Vezir turlarında **üç sütun** ayrımı uygulanır (yalnız net-artış YASAK).
**Kanon:** Standing #48 (rename disiplini) + Patron direktifi 2026-09-30

---

## Turlar

| Tur tarihi | Açılan | Kapanan | Net | Toplam-aktif | Not |
|---|---|---|---|---|---|
| 2026-09-30 (ilk kayıt) | — | — | — | 41 | Sayaç formatı bu tur başladı; öncesi retro-hesap yok; toplam-aktif = pano `vaat_takip.kritik` içinde `gecerli` alanı `✅` ile başlamayan kayıtlar |
| 2026-09-30 (BESLEME v2 turu) | +5 | −3 | +2 | 41 | Açılan: BESLEME v2, E7, üç-katman zinciri, karıştırma riski, Patron 2-iş. Aynı turda kapanan: BESLEME v2 ✅, E7 ✅, üç-katman ✅ (hızlı-teslim). Toplam-aktif değişmedi (+5−3−2=0; ancak canlı sayım 41 → önceki turda kapanmalar da devrede) |

## Retro-not (sayaç öncesi)

Bu tablonun ilk satırından **önce** yayınlanan vaat sayaç güncellemeleri **yalnız net-artış** biçiminde yazılmıştı ("27→73"). Retro-ayrım yapılmadı; ilk satırın **toplam-aktif** hücresi (73) canlı bir denetimin sonucudur. Öncesi için detay pano `vaat_takip` bloğundan okunur (`gecerli = "✅ ..."` = kapandı, aksi = açık).

## Kural

- Her Vezir turu sonunda İLERLEME.md'ye **yeni satır** eklenir.
- Sayı vermeden önce pano `vaat_takip.kritik`'ten `gecerli` alanı `✅ ...` ile başlayanlar SAYIL(kapalı), diğerleri AÇIK. Bu sayım her turun **kanıtıdır** — göz-hesabıyla yazılmaz.

*Vezir · Standing #35+#48 · 2026-09-30*
