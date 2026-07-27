# Beykoz Soru Bankası — CC-TT-AI TTA98 (Görev B)

**Üretici:** CC-TT-AI · **Tarih:** 2026-07-26 · $0 · A04
**Amaç:** Signals "soruldu mu?"ya bakıyor; **bu belge "sorulmalı mıydı?"yı üretir.** 5. tur kapanışında çakıştırılacak.
**Kaynak:** Beykoz Ansiklopedisi (45/45 mahalle) yazılırken **her boş hücre bir soruya** dönüştü.

> **Okuma:** her satır `soru × hedef-CC/kaynak × öncelik × tip`. Tip: **AMAÇ**=ne-için · **VERİ**=ölçülebilir · **HİPOTEZ**=sen-sor-ölçme.

---

## 0. OTO-SORULAR (ansiklopedi boş-hücrelerinden, 95 adet özet)

| Tip | Adet | Örnek soru | Hedef |
|---|---:|---|---|
| KİMLİK | 33 | 33 mahallenin ad-kökeni/tarihçesi bilinmiyor | Wikipedia/belediye/CC-Sosyal |
| FİZİK | 30 | havza-kısıtı kesinleşmemiş + rakım/eğim yok | İSKİ / TT-MAP DEM |
| İŞLEV | 32 | kamu-tesis (okul/sağlık/cami/karakol) envanteri eksik | OSM ek-tara / belediye |

> Tüm 45 mahallede ortak eksik: **rakım/eğim (MAP DEM)**, **erişim-km (O-7/merkez)**, **imar-plan geometrisi** (İBB CKAN yayınlamıyor).

---

## 1. AMAÇ — "NE İÇİN gelişiyor" hipotezleri (45 sentez → doğrulama)

Ansiklopedideki 45 sentez satırı **[HİPOTEZ]**. Doğrulama dağıtımı:

| Soru | Hedef-CC | Öncelik |
|---|---|---|
| Ticaret-çekirdeği hipotezi (Kavacık/Rüzgarlıbahçe/Merkez) gerçek mi? | TT-MAP (yapılaşma) + TT-Tic | yüksek |
| Turizm-ekseni (Riva/A.Kavağı/Polonezköy/Kanlıca) büyüyor mu? | Basın + İhale | orta |
| Dönüşüm-baskısı (İncirköy/Çubuklu/Gümüşsuyu/Yeni Mahalle) fiili mi? | İhale + İmar + Basın | yüksek |
| Havza-köyleri "gelişmiyor" hipotezi doğru mu (yapılaşma düşük-sabit)? | TT-MAP (değişim ≈0 teyit) | orta |

---

## 2. TAPU / MÜLKİYET — kim cevaplar?

| Soru | Hedef-kaynak | Öncelik |
|---|---|---|
| Beykoz kamu/vakıf/özel arazi dağılımı (mahalle) | TKGM/Tapu-Kadastro · CİMER | yüksek |
| Havza+orman mahallelerinde Hazine/Orman-GM arazi oranı | Milli Emlak + OGM | yüksek |
| Yalıların tapu-statüsü + kültür-varlığı tescili | Koruma Kurulu | orta |
| 2/B (orman-vasfı kaybetmiş) araziler nerede | OGM 2/B listesi | orta |
| Kamu ihaleye çıkan Beykoz parselleri | **CC-İhale** (EKAP join) | yüksek |

---

## 3. HAVZA / ORMAN KISITI — imar-kilitli harita (★ ters-sinyal)

**17 havza-kısıtlı mahalle** (Elmalı/Ömerli + orman, [HİPOTEZ-coğrafi, İSKİ-doğrulamalı]):
Akbaba, Alibahadır, Baklacı, Bozhane, Cumhuriyet, Çengeldere, Dereseki, Elmalı, Göllü, Görele, İshaklı, Kaynarca, Kılıçlı, Mahmutşevketpaşa, Öğümce, Paşamandıra, Zerzavatçı.

| Soru | Hedef | Öncelik | Tip |
|---|---|---|---|
| Bu 17 mahallenin havza-sınırı **kesin haritası** (parsel-düzeyi) | İSKİ havza-koruma + İmar | **yüksek** | VERİ |
| Boğaziçi Kanunu (2960) öngörünüm/geri-görünüm yasağı hangi sahil-mahalleleri kesiyor? *(havzadan AYRI ikinci kısıt!)* | İBB Boğaziçi imar + Koruma | **yüksek** | VERİ |
| **★ Kısıtlı komşunun yanındaki kısıtsız mahalle arz-kıtlığı primi taşır mı?** (örn. Kavacık/Çubuklu orman-sınırında; Riva kıyı+orman arası) | sen-sor → emlak-veri ölçer | orta | **HİPOTEZ** |
| Hangi mahalle **ASLA gelişemez** (tam-kilitli) vs kısmi-kilitli? | İSKİ + İmar | yüksek | VERİ |

> **Ters-değer tezi [HİPOTEZ, ölçme]:** 17 kısıtlı mahalle arzı dondurur → 28 kısıtsız mahalle (özellikle kısıtlı-komşu sınırındakiler) yapılaşabilir-arz kıtlığı primi kazanır. En değerli kesişim: **kısıtsız + Boğaz/orman-manzaralı + erişimi iyi** (Çubuklu, Kavacık sırtı, Kanlıca üstü).

---

## 4. ASKERİ / KAMU PARSELLERİ — devir/dönüşüm ihtimali

| Soru | Hedef | Öncelik |
|---|---|---|
| Poyrazköy / Anadolu Feneri / A.Kavağı **askeri parselleri** — devir gündemi? | Milli Savunma + Milli Emlak + Basın | yüksek |
| **Paşabahçe Cam Fabrikası** arazisi (eski KİT) statü/dönüşüm | Özelleştirme İd. + Basın | yüksek |
| **Beykoz deri/kundura fabrikası** arazisi (Merkez) — kültür-kampüs mü? | İBB + Basın | orta |
| Büyük kamu parselleri (hastane/kampüs/orman-işletme) envanteri | Milli Emlak | orta |

---

## 5. SERBEST BÖLÜM — 4 turda HİÇ sorulmamış (12 yeni soru)

| # | Soru | Hedef-kaynak | Öncelik | Tip |
|---|---|---|---|---|
| 1 | Boğaziçi Kanunu imar-yasağı ≠ havza — bu ikinci-kısıtı kimse haritalamadı | İBB Boğaziçi | yüksek | VERİ |
| 2 | Mahalle **nüfus yoğunluğu** (kişi/km²) — alan var, nüfus yok | TÜİK | orta | VERİ |
| 3 | **Kamu-hizmet açığı**: okul/hastane başına nüfus | TÜİK + OSM | orta | VERİ |
| 4 | 6306 kapsamı **ilan-edilmiş riskli-alan** Beykoz'da var mı | Çevre-Şehircilik | yüksek | VERİ |
| 5 | **Kıyı-kenar-çizgisi** hangi sahil-parselleri kısıtlıyor | Çevre-Şehircilik | orta | VERİ |
| 6 | Beykoz **raylı-sistem/metro** gelecek-planı (erişim sıçraması) | İBB Ulaşım | yüksek | AMAÇ |
| 7 | **Emlak fiyat-gradyanı** sahil↔tepe (TTA93 ALGI'yı ölçüme çevir) | emlak-veri | yüksek | VERİ |
| 8 | Kavacık **ofis boşluk-oranı / kira** (göz-bebeği doluluk) | GYODER/emlak | yüksek | VERİ |
| 9 | Turizm **yatak-kapasitesi** trendi (Polonezköy/A.Kavağı) | Kültür-Turizm | düşük | VERİ |
| 10 | İSKİ **isale hattı / baraj** hangi mahalleyi fiziksel kesiyor | İSKİ | düşük | VERİ |
| 11 | Beykoz **yeşil-alan / orman oranı** mahalle (yapılaşabilir-net alan) | OSM landuse + OGM | orta | VERİ |
| 12 | 2017→2025 **bina-artışı** (açık-veri veremedi, TTA97) | **TT-MAP Sentinel** | yüksek | VERİ |

---

## SONUÇ

```
Beykoz Soru Bankası · $0 · A04
Ansiklopedi 45/45 → 95 oto-soru (kimlik33/işlev32/fizik30) + 5-eksen strateji-soruları
★ En değerli 3 açık: (1) Boğaziçi-Kanunu imar-yasağı (havzadan AYRI, hiç haritalanmadı)
  (2) tapu/mülkiyet kamu-özel dağılımı (TKGM/İhale)  (3) askeri+KİT parsel-devri (Paşabahçe/deri-fabrika/Poyrazköy)
★ Ters-değer tezi [HİPOTEZ]: 17 kısıtlı mahalle → kısıtsız-komşu arz-kıtlığı primi (sen-sor, emlak-ölçer)
Signals "soruldu mu" × bu-belge "sorulmalı mıydı" → 5.tur çakıştırma
```
