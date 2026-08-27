# BAŞLA · Repo Giriş Kapısı

**Kime:** Bu repoyu açan Patron veya yeni bir CC · **Kanal:** Vezir · **Tarih:** 2026-08-27

> **Kural:** Bu dosya TEK EKRAN. Uzarsa başarısız. Cevap yok mu → [`kanon/INDEKS.md`](kanon/INDEKS.md) tam liste.

---

## Ne arıyorsun? (Soru → Dosya)

| Ne arıyorsan | Buraya bak |
|---|---|
| **1. Pano (tüm portföy tek ekran)** | [`pano/index.html`](pano/index.html) · JSON: [`pano/ozet-w35.json`](pano/ozet-w35.json) |
| **2. 4 aylık büyük envanter (Mayıs → Ağustos)** | [`pano/ENVANTER_BUYUK_v1.md`](pano/ENVANTER_BUYUK_v1.md) |
| **3. Beykoz'da kaç kayıt / kaç mahalle?** | `beykoz_vaka/beykoz_master.md` · **325.186** kayıt · **45** mahalle |
| **4. Kanonik sayılar (250.193 / 412 / 1.239 / v.b.)** | `pano/ozet-w35.json` §kanonik_rakamlar |
| **5. Bir CC'nin kuruluş belgesi** | `kurulus/KURULUS_<CC>.md` · Index: [`kurulus/KURULUS_INDEX.md`](kurulus/KURULUS_INDEX.md) |
| **6. Bir CC'nin öz-analizi** | `cc/<slug>/*.md` · 16 CC klasörü |
| **7. Üst Akıl direktifleri (dağıtım geçmişi)** | `dagitim/UA_*.md` · 17 direktif (Standing #37, #38 dahil) |
| **8. Standing #37 KALICILIK PROTOKOLÜ (arşiv)** | [`arsiv/BITTI.md`](arsiv/BITTI.md) + [`arsiv/3kopya.md`](arsiv/3kopya.md) |
| **9. Claude Code oturumları (14 aktif, 3 kayıp)** | [`arsiv/ENVANTER.md`](arsiv/ENVANTER.md) |
| **10. Beykoz mahalle sözlüğü (45 mahalle)** | `beykoz_vaka/beykoz_ansiklopedi/` · Ana index: `_master.json` |
| **11. Vaat-takip (kim ne söz vermişti, kaç gün geciktir)** | `pano/ozet-w35.json` §vaat_takip · UI: pano sağ kolon |
| **12. Master indeks (bu repo'daki tüm 213 MD)** | [`kanon/INDEKS.md`](kanon/INDEKS.md) |

---

## Proje Haritası — Tek Cümle

| Klasör | Ne içerir |
|---|---|
| **`BASLA.md`** (bu dosya) | Giriş kapısı — soru-cevap navigation |
| **`README.md`** | Repo tanıtımı, kural listesi (Standing #35+#36+#38) |
| **`pano/`** | Vezir 4-katman pano (portföy + CC + vaat + rakamlar) — 🟢 canlı |
| **`arsiv/`** | Standing #37 KALICILIK — Claude Code oturum arşiv scripti + kanon |
| **`kanon/`** | Hafıza kanonları, INDEKS, adlandırma standardı |
| **`kurulus/`** | 18 KURULUŞ dosyası — her CC'nin kimlik belgesi (Doğuş → Sınırlar → Borçlar) |
| **`dagitim/`** | Üst Akıl direktif geçmişi — 17 kronolojik karar |
| **`beykoz_vaka/`** | Beykoz TAM kapanış arşivi — 119 dosya, 45 mahalle ansiklopedisi |
| **`cc/`** | 16 CC klasörü — her CC'nin öz-analizi |

---

## Son 5 Önemli Karar (Nerede Yazılı)

1. **Standing #37 KALICILIK PROTOKOLÜ** (2026-08-27) → [`dagitim/UA_20260827_STANDING_37_kalicilik_arsiv_01.md`](dagitim/UA_20260827_STANDING_37_kalicilik_arsiv_01.md)
2. **Standing #38 TERMİNAL-ÖNCELİK** (2026-07-31, aday) → [`dagitim/UA_20260731_STANDING_terminal_oncelik.md`](dagitim/UA_20260731_STANDING_terminal_oncelik.md)
3. **SLUG KANON — KAYNAK-BAZLI** (2026-07-31) → [`dagitim/UA_20260731_SLUG_KANON_kaynak_bazli.md`](dagitim/UA_20260731_SLUG_KANON_kaynak_bazli.md)
4. **V3-UYGULA (yazma-yolu)** (2026-07-31) → [`dagitim/UA_20260731_V3_UYGULA_kagit_bitti.md`](dagitim/UA_20260731_V3_UYGULA_kagit_bitti.md)
5. **PUBLIC (Patron kararı 27 Tem)** — bu repo görünürlüğü PUBLIC → README.md üst

---

## Nasıl Katkı Yaparım (Yeni Dosya)

- **Adlandırma zorunlu:** `<cc>_<tur>_<konu>_<YYYY-AA-GG>.md` (Türkçe karakter yok, tire ayraç)
- **Kanon:** [`kanon/dosya_adlandirma_v1.md`](kanon/dosya_adlandirma_v1.md)
- **Push:** Standing #35 (fetch önce) + #36 (commit öncesi tekrar-fetch)
- **KVKK:** token/PII/path tarama zorunlu, script `arsiv/arsiv_cek.py` emsal

---

*BASLA.md · Vezir BE-01/H · $0 · AI çağrısı YOK · Standing #38*
