# Devletin Beykoz Ayak İzi — Bakanlık × Varlık Haritası (CC-TT-AI TTA100)

**Üretici:** CC-TT-AI · **Tarih:** 2026-07-27 · $0 · A04 · launchctl ttai=0 (evren dokunulmadı)
**Kaynak:** OSM amenity 2. tarama (Overpass, 445 tesis → 196 Beykoz-poligon-içi) + kürasyon (bakanlık-siteleri/mevcut-turlar). Her satır **[VERİ]** (ölçülü) / **[HİPOTEZ]** (çıkarım) etiketli.

> **Kapsam sıçraması:** kamu-tesis olan mahalle **13/45 → 41/45** (TTA98→TTA100). Ansiklopedinin §8'i 39 md'ye işlendi + `cikti/bakanlik_varlik.json` (mahalle_norm anahtarlı).

---

## 1. BAKANLIK × VARLIK MATRİSİ (Beykoz toplam)

| Bakanlık/Kurum | Varlık tipi | OSM sayı [VERİ] | Öne çıkan (kürasyon) |
|---|---|---:|---|
| **Diyanet / VGM** | cami/ibadet | 108 | yaygın (her mahalle) |
| **MEB** | okul/anaokulu | 43 | + **Çiftlik tahsisi (8 Oca, S86A)** [VERİ] |
| **Sağlık** | hastane/klinik | 15 | **Beykoz Devlet Hast. ~500-yataklı hat** [HİPOTEZ-mahalle] |
| **YÖK** | üniversite | 5 | — |
| **MSB** | askeri alan | 4 | **Poyrazköy + Riva kıyı** [VERİ, hassas-detay YOK] |
| **Tarım-Orman (DKMP/OGM)** | tabiat-parkı/orman | 3 | **Polonezköy Tabiat Parkı** [VERİ] + fidanlık/işletme |
| **Gençlik-Spor** | kamp | (OSM-dışı) | **Riva gençlik kampı ~16.548 m²** [VERİ] |
| **Kültür-Turizm** | SİT/müze | — | **Yoros Kalesi (A.Kavağı)** [VERİ] · **Beykoz Kundura statü?** [HİPOTEZ] |
| **Özelleştirme/Hazine** | eski-KİT | — | **Paşabahçe Cam** + **Beykoz deri/Kundura** [HİPOTEZ] |
| **Ulaştırma (KGM)** | otoyol | — | **KMO (Kuzey Marmara)** kuzey-güzergâh [HİPOTEZ] |
| **İçişleri / İBB** | karakol/itfaiye | 8 | emniyet+itfaiye |
| **Adalet** | adliye | 1 | Beykoz Adliyesi |

---

## 2. DEVLET AYAK İZİ — mahalle × baskın-bakanlık

| Mahalle | En-çok kamu-tesis | Baskın bakanlık-profili |
|---|---:|---|
| **Kavacık** | 20 | MEB+Sağlık+government (iş+kamu yoğun) |
| Göksu | 13 | Diyanet+MEB |
| Gümüşsuyu | 13 | Diyanet+MEB+Sağlık |
| Çubuklu | 12 | Diyanet+MEB |
| Yeni Mahalle | 10 | Diyanet+MEB |
| Beykoz Merkez | 10 | MEB+Adalet+Sağlık+**Kundura(Kültür)** |
| Rüzgarlıbahçe | 8 | Sağlık+MEB |
| İncirköy | 8 | Diyanet+MEB |
| **Polonezköy** | — | **Tarım-Orman** (tabiat-parkı baskın) |
| **Poyrazköy** | — | **MSB** (askeri baskın) |
| **Riva** | — | **Gençlik-Spor + MSB** (kamp+askeri) |

> **Örüntü:** Kentsel-çekirdek (Kavacık-Merkez-Çubuklu ekseni) = **MEB+Sağlık+Diyanet** yoğun (nüfus-hizmeti). Kuzey/kıyı = **Tarım-Orman + MSB** (korunan-alan + askeri). İki-Beykoz: güney-hizmet devleti, kuzey-koruma/güvenlik devleti.

---

## 3. ⚑ ASKERİ + KİT PARSELLERİ (devir/dönüşüm izleme — TTA99 #10)

| Mahalle | Varlık | Kurum | İzleme notu | Etiket |
|---|---|---|---|---|
| **Poyrazköy** | askeri alan + kıyı | MSB / Sahil Güvenlik | devir gündemi? | [VERİ-varlık] |
| **Riva** | askeri kıyı + gençlik-kampı | MSB + Gençlik-Spor | kıyı-gelişim baskısı | [VERİ] |
| **Anadolu Feneri** | askeri uç + fener | MSB / Ulaştırma | seyir/askeri | [VERİ] |
| **Paşabahçe** | Cam Fabrikası (eski KİT) | Özelleştirme/Hazine | **dönüşüm-adayı** | [HİPOTEZ] |
| **Beykoz Merkez** | Kundura/deri (eski KİT) | Kültür / Özelleştirme | **kültür-kampüs mü, dönüşüm mü?** | [HİPOTEZ] statü-belirsiz |

> Bunlar **büyük tekil parseller** → statü-değişimi Beykoz emlak-dengesini tek-hamlede kaydırabilir. **İhale + Basın + Milli-Emlak** izlemeli. MSB alanları için **yalnız varlık işaretlendi, sınır/detay çizilmedi** (hassasiyet).

---

## 4. HÂLÂ EKSİK (dürüst)

- 4 mahalle OSM'de kamu-tesis-etiketsiz (41/45 kapandı) → belediye-sayfası gerekir.
- Diyanet cami sayıları OSM-eksik olabilir (108 taban, gerçek daha yüksek).
- **Beykoz Kundura + Paşabahçe Cam statüsü** = [HİPOTEZ] → Özelleştirme/Kültür teyidi (soru bankasında açık).
- Sağlık 500-yataklı **kesin mahalle** = [HİPOTEZ] → Sağlık İl Md. teyidi.

---

## SONUÇ

```
TTA100 · Bakanlık × Varlık · $0 · evren dokunulmadı
Kamu-tesis kapsamı 13/45 → 41/45 (OSM 2.tarama, 196 tesis poligon-join)
Baskın: Diyanet/VGM 108 · MEB 43 · Sağlık 15 · MSB 4(Poyrazköy+Riva) · Tarım-Orman(Polonezköy)
İki-Beykoz: güney kentsel-hizmet(MEB+Sağlık) / kuzey koruma-güvenlik(Orman+MSB)
⚑ İzleme adayları: Poyrazköy/Riva/A.Feneri(askeri) + Paşabahçe-Cam/Beykoz-Kundura(KİT)
Çıktı: bakanlik_varlik.json + 39 md §8 + bu sentez · [VERİ]/[HİPOTEZ] her satırda
```
