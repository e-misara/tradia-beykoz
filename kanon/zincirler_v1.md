# ZİNCİRLER v1 (Z1–Z7) — İSKELET

**Statü:** 🟡 İSKELET · Patron direktifi 2026-10-15 · **kanonik tanım diskte YOK**
**Beklenen kaynak:** Patron'un Borsa'ya gönderdiği metin / "TASLAK_v1" tablosu — Vezir aramasında bulunamadı (`find … -iname "*TASLAK_v1*"` → yalnız `tanitim_taslak_v1.md`, içinde Z geçmiyor).

---

## Dürüst durum (2026-10-15 00:30)

| Nerede arandı | Sonuç |
|---|---|
| `kanon/`, `00_KURUM_HAFIZASI/` | Z1–Z7 tanımı yok |
| Borsa `hafiza_bildirim_ccborsa_evds_grup_kok_20261014.json` | Borsa'nın kendi notu: **"TANIMSIZ — kanonik tanım diskte bulunamadı; INSAAT_PAKETI.md'deki Z1–Z7 parsel bulgu listesidir, zincir sınıflaması değil"** |
| `parsel_01_rize/INSAAT_PAKETI.md` | Z1–Z7 var ama **PARSEL-01 bulgu numaraları** (vaka içi), zincir değil |
| `kaynak_tarama_tic.json` | 14 satırda `zincir: "BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı)"` |
| Downloads HTML'ler (index*.html) | Z1/Z7 geçiyor; pano/demo sayfaları, kanon değil |

**Sonuç:** CC'ler zincir alanını dolduramıyor; Borsa ve Tic bunu açıkça yazmış. Tanım gelmeden kaynak evreni v2 birleştirmesi (16 Eki 19:26) zincir sütununu **"TANIMSIZ"** geçer, satırı geçersiz saymaz.

## Beklenen şema (Patron metni gelince doldurulur)

| Zincir | Ad | Kaynak → birim | Sahip CC | Bugünkü doluluk |
|---|---|---|---|---|
| Z1 | — | — | — | — |
| Z2 | — | — | — | — |
| Z3 | — | — | — | — |
| Z4 | — | — | — | — |
| Z5 | — | — | — | — |
| Z6 | — | — | — | — |
| Z7 | — | — | — | — |

## Patron adımı

Z1–Z7 tanım metnini (ya da TASLAK_v1 tablosunun bulunduğu dosya yolunu) Vezir'e ver. Borsa bulut sohbetinde; tanım geldiğinde **bu dosya + agir_is_kilidi.json üzerinden, Patron aracılığıyla** Borsa'ya iletilir.

*Vezir · 2026-10-15*
