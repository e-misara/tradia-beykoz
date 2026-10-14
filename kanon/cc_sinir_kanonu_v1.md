# CC SINIR KANONU v1 — dizin sahipliği

**Statü:** 🟢 KANON · Patron direktifi 2026-10-14
**Bağlı:** Standing #37 (toplayıcı ≠ kullanıcı), B9 tek-yazar, anahtar_yonetimi_kanonu_v1

---

## Kural

> **Başka CC'nin dizinindeki dosyaya dokunulmaz. Gerekirse o CC'ye bildirim yazılır. Silme, sahibinindir.**

- **Dokunmak:** yazmak, düzeltmek, taşımak, silmek, yeniden adlandırmak. Okumak serbest.
- **Bildirim yeri:** `02_CC_STATE/<yazan>_bildirim_<sahip>_<konu>.json` (ya da `vezir_bayrak_…`). Bildirimde "ne, nerede, kanıt, istenen" olur.
- **Sahiplik:** dizinin kökü kimin adını taşıyorsa (`~/tt_pazarlama` → Pazarlama, `~/Desktop/tradia/cc_borsa` → Borsa…). Tereddütte KURULUS dosyası belirler.
- **Ortak alanlar** (`02_CC_STATE/`, `tradia-beykoz/kanon/`) için: her CC **kendi dosyasını** yazar, başkasının dosyasını düzeltmez.

## Emsal (uyumsuzluk, vaka değil)

| Tarih | Kim | Ne | Zarar | Durum |
|---|---|---|---|---|
| 2026-10-14 | Pazarlama | Borsa'nın `.evds_key` dosyasını sildi | Yok (`.env`'de aynı değer var; Pazarlama artık `.env` + `evds_ortak` kullanıyor) | Dosya yok (14 Eki ölçüm) · **kural ihlali kayıtta**, sonuç kanon 1'e uygun |

## Vezir öz-denetimi (bu kural öncesi Vezir'in başka CC dosyasına dokunduğu kayıtlar)

| Tarih | Dosya (sahibi) | Ne yapıldı | Gerekçe o gün |
|---|---|---|---|
| 26 Eyl · 14 Eki | `misara-app/veri/DURUM.json`, `cografya.json` (Hafıza) | parsel-veri satırları redakte | public repoda sızıntı (Vaka #02, #06) |
| 13 Eki | `kanon/orumcek_soru_seti_v1.md` (Hafıza, untracked) | 2 satırda rakam redakte | commit öncesi sızıntı önleme (Vaka #05) |
| 14 Eki | `misara-arsiv/tam/…` + `veri/haftalik/…` (Arşiv) | EVDS anahtarı redakte | sır sızıntısı (Vaka #07) |
| 14 Eki | `00_KURUM_HAFIZASI/anayasa_b_blogu_v1.md` (Hafıza) | B11 eklendi | Patron direktifi "anayasaya al" |

Bu kural yürürlükten sonra Vezir bunları **yapmaz**. Bildirim yazar, sahibi uygular.

## Açık soru (Patron kararı)

**Acil sızıntı istisnası?** Public repoda **canlı sır** ya da **parsel verisi** görüldüğünde sahibi CC oturumda değilse ne yapılacak? Vezir önerisi: yalnız public repoda, yalnız redaksiyon (silme değil), yalnız sızıntı kapsamında dokunulsun. Aynı anda sahibine bildirim yazılsın, emsal defterine kayıt düşülsün. Patron onaylamadıkça **istisna yoktur**.

*Vezir · 2026-10-14*
