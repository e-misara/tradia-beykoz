# BEYKOZ KARO KESKİNLEŞTİRME v2 (sunum-kalite) · CC-TT-MAP MAP36

**Tarih:** 2026-07-28 · **6 karo:** Riva · BEY-15 · İncirköy · Tokatköy · Gümüşsuyu · Kavacık · **Çıktı:** `beykoz_vaka/karolar_v2/` · $0

## YÖNTEM
- ±~1km mahalle-merkez zoom-crop · **NEAREST ×4** büyütme (bulanık-interpolasyon YOK, pixel-art dokusu)
- 3-panel: ÖNCE 2024 | SONRA 2026 | **DEĞİŞİM-VURGU** (RGB-fark maskesi, kırmızı overlay)
- Fizik-sınır: RGB [0,255] clamp.

## 🔴 BULUT-ARTEFAKTI YAKALANDI + DÜZELTİLDİ (v1→v2)
v1'de **Tokatköy %34,4 değişim** çıktı — görsel-inceleme: 2024-08-16 sahnesinde **karo-yerel BULUT** (sahne-seviyesi bulut<%6 ama crop bulutlu) → kırmızı-overlay bulutun-yerini gösteriyordu, inşaat-değil.
**Düzeltme:** (a) **karo-yerel bulutsuz sahne seçimi** (5 aday-sahne crop-okur, en-az-bulutlu seçer) + (b) değişim-maskesinde **bulut-piksel hariç**.
**Sonuç: Tokatköy %34,4 → %2,7** (artefakt temizlendi). Ders: sahne-seviyesi-bulut ≠ karo-seviyesi-bulut; değişim-tespiti crop-bulut-kontrolü ister.

## DEĞİŞİM% (bulut-temizli)
| Karo | ÖNCE (yerel-bulut) | SONRA | değişim% | not |
|---|---|---|---|---|
| riva | 2024-08-16 (%0,5) | 2026-07-22 | **1,9** | EKGYO-yok teyit (en-düşük) |
| tokatkoy | 2024-08-06 (%0,5) | 2026-07-22 | 2,7 | v1'deki %34 buluttu |
| incirkoy | 2024-08-16 (%0,3) | 2026-07-22 | 5,3 | |
| gumussuyu | 2024-08-16 (%0,7) | 2026-07-22 | 6,5 | |
| BEY15 | 2024-06-10 (%1,0) | 2026-07-20 | 9,7 | mevsim-farkı payı |
| kavacik | 2024-06-10 (%1,5) | 2026-07-20 | 9,9 | dense-doygun; oval-yapı değişimi |

⚠️ **Dürüstlük şerhi:** değişim% = RGB-fark (bulut-hariç); farklı-yaz-ayı sahneler → **fenoloji/mevsim payı var**, saf-inşaat değil. Kesin-inşaat için OPERA-DIST (server-beklemede) + radar. Kırmızı-overlay 'DEĞİŞTİ' der, 'İNŞAAT' demez.

## SONUÇ
6 sunum-kalite karo (keskin pixel-art + değişim-vurgu). En-önemli: **v1'in bulut-artefaktı görsel-denetimle yakalandı ve düzeltildi** — fizik/dürüstlük disiplini görselde de çalıştı. Riva %1,9 (en-düşük) EKGYO-henüz-yok'u görsel-teyit ediyor.

---
*CC-TT-MAP · $0 · A04 · fizik-sınır-bloğu · bulut-artefakt-düzeltmesi · SİLME-YOK. Karolar: beykoz_vaka/karolar_v2/ (6 PNG).*