# BEYKOZ SON-TUR: SUNUM KAROLARI + AFET-RİSK ÇAPRAZI · CC-TT-MAP MAP37

**Tarih:** 2026-07-29 · **S96-son-tur** · $0 · fizik-blok

## PART-1 — KARO GERİ-DÖNÜŞ (Patron kararı)
**KANONİK sunum görseli = GENİŞ karolar** (MAP34-stili, tam-mahalle, ÖNCE/SONRA 2-panel, sarı-sınır, kenar-temiz).
- **Sunumluk (yeniden-bası, temiz):** `karolar_sunum/sunum_riva.png · sunum_incirkoy.png · sunum_BEY15_942_947.png` (dpi-130, bulut-temizli-sahne, minimal-başlık).
- **Arşive iner (sunumdan çıkar):** `karolar_v2/` 3-panel-zoom (MAP36) — inceleme/arşiv, sunumda kullanılmaz.
- MAP34 `karolar/` 14 geniş-karo = tam-set (sunum havuzu).

## PART-2 — L7 AFET-539 × TAŞKIN/HEYELAN-PROXY ÇAPRAZI
**Haber-risk** (Basın L7 afet-539, mahalle-dosyalarından deprem/heyelan/sel/yangın anması) **×** **Fiziksel-risk** (TT-MAP: taşkın-proxy + dik-yamaç=heyelan-proxy).

| Sınıf | Mahalleler | Anlam |
|---|---|---|
| ✅ **UYUM** (yüksek-güven) | **Elmalı(32) · Gümüşsuyu(22) · Akbaba(18)** | haber-yüksek + fiziksel-dik-yamaç → gerçek heyelan-riski |
| 🟡 **HABER-ONLY** (proxy-boşluğu) | **Riva(20) · Rüzgarlıbahçe(20)** | haber-afet-yüksek ama proxy-flag-yok |
| 🔴 **LATENT** (fiziksel ama haber-sessiz) | Acarlar(0) · Yeni(0) · Anadolu Kavağı(8) · Dereseki(7)... | dik-yamaç var, haber-sessiz = bildirilmemiş-risk-adayı |

### ★ İKİ KRİTİK UYUŞMAZLIK (çaprazın değeri)
1. **🟡 RİVA — proxy'm KAÇIRDI:** Basın sel-haberi Riva'yı 11-kez anıyor (Riva deresi taşkını) ama TAŞKIN-proxy'm Riva'yı flag-etMEDİ (eğim 7,7° eşik-üstü, dere 1,17km eşik-dışı). **Haber, fiziksel-proxy'min boşluğunu yakaladı → proxy-eşiği Riva'yı içerecek şekilde gevşetilmeli.** (öz-denetim: haber-katmanı benim-hatamı buldu)
2. **🔴 GÖKSU — proxy YANLIŞ-ALARM olabilir:** TAŞKIN-proxy Göksu'yu flag-ediyor (dere-deltası) ama haber-afet düşük(4). Göksu-deltası **korunan-park** (Küçüksu/Göksu mesire) — bina-yok → taşkın-hasar-yok. **Proxy'nin fiziksel-flag'i doğru ama 'risk'i abartıyor (park≠yerleşim).**

**DOKTRIN:** Haber-risk × fiziksel-risk = **ikisi birbirinin kör-noktasını yakalar.** UYUM=yüksek-güven; UYUŞMAZLIK=inceleme-listesi (Riva proxy-gevşet, Göksu park-şerhi). Ne haber-tek ne proxy-tek yeterli.

⚠️ **Fizik/dürüstlük şerhi:** haber-sayımı ham-kelime ('sel/dere/deprem' substring) — mahalle-haber-hacmiyle korele, saf-afet-değil; bant-göstergesi (yüksek/orta/düşük) olarak okunmalı, mutlak-sıralama değil. Fiziksel-proxy 30m-DEM + OSM-dere (park/yerleşim ayrımı yok).

## SONUÇ
Sunum-karoları kanonik-geniş-formata döndü (Patron). Afet-çaprazı **çift-yönlü öz-denetim** üretti: haber Riva-taşkın-boşluğumu yakaladı, proxy Göksu-park-şerhini gösterdi. Elmalı/Gümüşsuyu/Akbaba = iki-kaynak-uyumlu yüksek-güven heyelan-riski.

---
*CC-TT-MAP · $0 · A04 · fizik-blok · #34(Basın-verisi ayrı-kaynak, çapraz-amaçlı) · SİLME-YOK. Çıktı: karolar_sunum/ (3) + beykoz_afet_cross.json.*