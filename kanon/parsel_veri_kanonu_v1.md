# PARSEL-VERİ KANONU v1

**Statü:** 🟢 ONAYLI · 2026-09-26 · Patron+Vezir mutabakatı
**Emsal:** PARSEL-01 (Derepazarı vakası)
**Bağlı kanon:** KVKK #31 v1.1 · S14 ortaklık yasağı · SİLME-YOK

---

## Kural

**Parsel-düzeyi vaka verisi PUBLIC repoya girmez.**

Parsel-düzeyi sayılan alanlar (public'te YASAK):
- Ada numarası
- Parsel numarası
- Koordinat (enlem/boylam, poligon köşeleri)
- TKGM künye çıktısı (malik, hisse, edinim, dosya no)
- Köşe sayısı / parsel geometrisi ölçütleri (128/7=21 gibi)

Public repo'da yalnız **vaka-durum satırı** durur:
- Vaka kodu (PARSEL-01)
- İl / ilçe / (mahalle: opsiyonel, tek mülke işaret etmiyorsa)
- Vaka statüsü (AKTİF/KAPANDI/BEKLİYOR)
- Katman durumu (hangi CC üzerinde, blok tablosu)
- Kritik yol adı (içerik değil)

## Gerekçe

1. **Tek mülke işaret** — ada/parsel/künye üçlüsü kadastral olarak eşsizdir; public repo'da yayımlamak mülkiyet + konum + zaman üçlüsünü birleştirir.
2. **Patron mülkiyet ilgisi** — vakaya Patron'un mülkiyet ilgisi olduğunda pazarlık pozisyonu bozulur (karşı taraf araştırma yaparsa yakalar).
3. **KVKK #31 v1.1** — kişisel-mülkiyet verisi işleme sınırı.
4. **Pazarlık güvenliği** — üçüncü taraf ilgisini erken uyandırmama.

## Depolama sınıfı

| Sınıf | Yer | İçerik |
|---|---|---|
| Public repo | `github.com/e-misara/tradia-beykoz` | Vaka-durum satırı, katman izleri, kanon+emsal |
| Private repo | `github.com/e-misara/misara-arsiv` | Ham konuşma arşivi; parsel-veri geçerse redaksiyon (arsiv_cek.py katmanı) |
| Lokal | `~/Desktop/TT-Tüm CC/parsel_01_rize/` | Tic birleştirici DOSYA.md, tkgm_kunye, ham dosyalar, SHA'lar |

**Not:** Lokal katman Vezir'in kapsamı değil (CC-Tic sahibi). Vezir yalnız public repo bekçisi.

## Retro-uygulama

Bu kanon **retro-etkilidir**: yürürlüğe girmeden önce public'e sızmış parsel-verisi tespit edilince derhal redakte edilir. Emsal defteri `kanon_ihlali_emsal_defteri.md` Vaka #02'de listelenir (SİLME-YOK: kayıt korunur, veri redakte edilir).

## Yeni vaka kurulumunda

1. CC-Tic (veya vaka sahibi CC) → lokal `DOSYA.md` + kunye + SHA
2. Pano'da yalnız vaka-durum satırı açılır
3. Vezir E1-benzeri "künye yazımı" kritik-yol adımını izler, künye içeriğini public'e taşımaz

*Vezir · Standing #35+#36+#37+#38+#43 + KVKK #31 v1.1 · 2026-09-26*
