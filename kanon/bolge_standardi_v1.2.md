# BÖLGE STANDARDI v1.2

**Statü:** 🟢 KANON · kaynak: TT-MAP'in talimat-metni, Patron üzerinden Aİ'ye iletildi (görev 2026-10-17)
**Bağlı:** `adres_anahtari_kanonu v1.2`, `evren_agaci_v1` + `ad_cozumle()`, Standing #18 (üçlü-anahtar)
**Önceki-durum:** Bu dosya YOKTU — Map kendi talimat-metninden çalışıyordu, kanona hiç yazılmamıştı.

---

## Amaç

İlçe **5–9 bölgeye** bölünür. Her bölge aynı açıdan fotoğraflanır (görsel standardı aşağıda); bölge-kartı bu fotoğrafın üstüne biner. Hedef: ilçe-ölçeğinde insan-gözüyle-taranabilir, karşılaştırılabilir birim.

## Kurallar

1. **Bitişiklik zorunlu.** Her bölge coğrafi olarak bitişik tek-parça olmalı. Kopuk-parça çıkarsa en-uzun-ortak-sınırlı komşu-bölgeye eklenir (25 m tampon kuralı — bkz. TT-MAP uygulaması).
2. **Her mahalle tam bir bölgede.** Çift-atama yasak, atanmamış-mahalle yasak (anahtarsız-mahalleler için kural 5 istisna).
3. **Bölge = mahalle birleşimi, parsel değil.** Bölünme her-zaman tam-mahalle biriminde; parsel-düzeyinde bölge-sınırı çizilmez.
4. **Bölge sayısı 5–9.**
5. **Anahtarsız mahalle bölgeye atanmaz.** Adres-anahtarı çözülmemiş mahalle ayrı bir bekleme-tablosunda durur; anahtar çözülünce ilgili-bölgeye girer. (Kanon: belirsizse karar verme — bkz. `evren_agaci_v1`.)
6. **Kapsama-oranı raporlanır:** bölgeler-toplam-alanı / resmî-ilçe-alanı. **%85 altı → KIRMIZI.**
7. **Bitişiklik-kaydırması** (bir mahallenin komşu-bölgeye kaymasına yol-açan düzeltme-sayısı) ölçülür ve raporlanır.
8. **Adlandırma:** `"B<sıra> · <Ad>: <karakter-cümlesi>"`. Ad = bölgedeki **en-çok-binalı iki-mahalle**.
9. **Kart 9 kalem** (10-17 düzeltme — ilk-yazımda "8" yazılmıştı, Patron-onaylı sayım-düzeltmesi):
   mahalleler · alan/bina · eğim/dere · ısı · yapı yaşı · kurumsal iz · olay kaydı · ilan · açık soru.
10. **Kaynak-kesitleri etiketli** — kartın her veri-alanı hangi-kaynaktan hangi-tarihte geldiğini taşır (A04: ölçülmeyen alan null+gerekçe).
11. **Görsel standardı:** `gb35` (ana), `tepe70` (yardımcı), yakın-kare (seçmeli).

## Denetim ölçütü (bölge-önerisi bu-standartla GEÇER/KALIR)

| Ölçüt | Eşik |
|---|---|
| Bölge sayısı | 5–9 |
| Bitişiklik | hepsi ✅ |
| Mahalle-birleşimi | atanan=tekil=toplam, çift-atanan=0, atanmayan=0 (anahtarsız hariç) |
| İlçe-alan-kapsaması | ≥%85 ✅ / <%85 KIRMIZI |
| Bitişiklik-kaydırması | raporlanır (0 ideal) |

## Emsal (bu standartla denetlenmiş/denetlenecek bölge-önerileri)

| İlçe | Bölge sayısı | Durum |
|---|---:|---|
| Beykoz | 7 | v1.2 örnek |
| Kartal | 5 | denetim-sonucu emsal |
| Rize Merkez | 7 | denetim GEÇTİ (2026-10-17, kapsama %93,4 — bkz `rize_merkez_bolge_denetim.json`) |

---
*v1.2 · 2026-10-17 · CC-TT-AI (Map'in talimat-metninden kanona yazıldı) · 2026-10-17 düzeltme: madde-9 "8 kalem"→"9 kalem" (sayım-hatası, sürüm v1.2 kalır, SİLME-YOK)*
