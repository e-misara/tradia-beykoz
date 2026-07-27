# BEYKOZ SENTINEL-1 İNŞAAT-TESPİTİ (ACD) — CC-TT-MAP MAP30

**Tarih:** 2026-07-27 · **Erişim:** MPC-anonim (token-siz) · **Kanon-dışı:** `nasa_kesif/` · **Ham:** yerel-geçici

## ⚠️ YÖNTEM DÜZELTMESİ — 'koherans' DEĞİL, ACD
MPC'de **InSAR/SLC/koherans ürünü YOK** (yalnız RTC=backscatter). Gerçek-InSAR-koherans SLC-işleme ister (token/ASF). Onun yerine **Amplitude-Change-Detection (ACD):** aynı-yörünge (desc/138) erken (2024-06/11) ↔ güncel (2026-03/07) VV-medyan farkı (dB). İnşaat = VV-artışı (yeni sert-saçıcı). *Bu koherans-değil; daha-zayıf ama token-siz.*

## 🔴 FİZİK-SINIR KONTROLÜ (zorunlu) — LAYOVER UYARISI
- VV değer-aralığı: erken [-24.8, 26.5] · güncel [-28.8, 26.4] dB
- Değişim: [-36.0, 32.4] dB
- **UYARI:** VV +26dB ve değişim ±32-36dB = fizik-üstü uç-değerler → **Beykoz dik-yamaç SAR-LAYOVER artefaktı.** Ham inşaat-adayı sıralamasının top-12'sinin 10'u eğim>10°, üstelik medyan-VV NEGATİF → layover/speckle-baskın, mahalle-agrega mutlak-değer GÜVENİLMEZ.

## ✅ ÇAPRAZ-DOĞRULAMA — asıl-değer burada

### (a) Ortaçeşme radar-HAKEM (fenoloji vs gerçek-inşaat)
| Kaynak | Sinyal |
|---|---|
| Optik (MAP26) | yeni-yapı %17,1 güneydoğu — ama **fenoloji-şüpheli** (MAP27, flip-piksel NDVI 0,30) |
| Radar (S1-ACD) | VV-artış yalnız **%3,5**, medyan **−2,98 dB (VV DÜŞTÜ)** |
| **HAKEM** | **FENOLOJİ-TEYİDİ** — radar inşaat GÖRMÜYOR → MAP27 şüphesi **bağımsız-radar ile doğrulandı.** İki-sensör (optik-caveat + radar) aynı sonuç. |

### (b) İ63 pozitif-kontrol (bilinen-inşaat yakalanıyor mu)
| Nokta | VV-artış% | Sonuç |
|---|---|---|
| Çubuklu (kampüs) | 6.9 | YAKALADI ✅ |
| Gümüşsuyu (hastane) | 11.9 | YAKALADI ✅ |
Bilinen-inşaat noktaları fenoloji-only Ortaçeşme'den (%3,5) belirgin-yüksek → **RELATİF sinyal ayırt-edici** (mutlak-değer layover-gürültülü olsa da).

## İNŞAAT-ADAYI LİSTESİ (güven-etiketli, layover-filtreli)

**Temiz-aday (medyan-VV>0 & artış≥5% & eğim<12°): 0 mahalle** — hiçbiri sıkı-eşiği geçmedi (hepsi medyan-negatif). Tek-çift-tarih ACD Beykoz-topografyasında standalone-güvenilir-değil.

| Mahalle | VV-artış% | medyan-VV | eğim° | güven |
|---|---|---|---|---|
| kanlica | 29.1 | -2.9 | 11 | dusuk |
| fatih | 20.7 | -0.34 | 11 | dusuk |
| cavusbasi_ciftlik | 18.6 | -0.09 | 10 | dusuk |
| ruzgarlibahce | 17.9 | -0.62 | 10 | dusuk |
| yeni | 16.5 | -1.06 | 13 | dusuk-LAYOVER |
| anadolu_kavagi | 12.1 | -0.78 | 17 | dusuk-LAYOVER |
| gumussuyu | 11.9 | -0.55 | 14 | dusuk-LAYOVER |
| pasabahce | 11.5 | -0.63 | 11 | dusuk |

Tüm satırlar **düşük-güven** (çoğu LAYOVER); mutlak-inşaat-kararı için kullanılamaz. Değer RELATİF/hakem-modunda.

## SONUÇ
- ✅ **Radar-hakem çalışıyor:** Ortaçeşme'nin optik-'büyümesi' fenolojiymiş — radar bağımsız-doğruladı (MAP27 + MAP30 = iki-imza).
- ✅ **Pozitif-kontrol geçti:** Çubuklu/Gümüşsuyu bilinen-inşaatlar relatif-yüksek.
- 🔴 **Standalone-detektör DEĞİL:** dik-arazi layover + tek-çift-tarih speckle → mutlak mahalle-adayı güvenilmez (0 temiz-aday, ±32dB uç-değer).
- **Gerçek-değer için:** çok-tarih terrain-flattened yığın + layover-maske, VEYA gerçek-koherans (SLC/ASF, token). OPERA DIST (token) hâlâ birincil-hedef.

## SIG4 KÖPRÜSÜ
S1-ACD **SIG4'e 'uydu-hakem-ayağı' olarak girer** (birincil-detektör değil): optik-bulguları fenoloji/gerçek diye tahkim eder. OPERA (token) gelince aynı-bölgede optik+radar+DIST üç-imza = güçlü uydu-ayağı.

---
*CC-TT-MAP · $0 · A04 (koherans-yok dürüstlüğü + fizik-sınır-layover) · Standing#34 (kanon-dışı) · #21-B (radar-optik çift-imza) · kanon-dokunulmadı.*