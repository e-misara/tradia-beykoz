# BEYKOZ İHALE DERİNLİK + ISI-AYAĞI — CC-İhale (İ61)
**Tarih:** 2026-07-26 · **Kaynak:** EKAP Yapım Bülteni · 144 Beykoz kaydı (102.174'lük arşivden)
**Disiplin:** $0 · A04 · #24 sınır-duyarlı · #21-B kaynak-imzalı · SİLME-YOK

> İ59 (144 kayıt bulundu) → İ60 (%41 mahalle) → **İ61: F2-fix + sözlük45 + yanlış-pozitif temizliği.**

---

## 1. G1 — MAHALLE DERİNLİĞİ (85 belirsizi elden geçir)

| Sonuç | Adet | Kaynak/Yöntem [K] |
|---|---|---|
| **Mahalleye bağlandı** | **70 / 144 (%48,6)** | 3-katman + F2-fix |
| Meşru ilçe-geneli (tek-mahalle DEĞİL) | **36** | "Muhtelif Cadde/Sokak", "İlçe Sınırları", "1./2. Bölge" |
| Gerçekten belirsiz | **38** | jenerik/kırpık iş-tanımı, adres yok |
| *Toplam* | *144 ✓* | 70+36+38 |

### F2 DEFEKTİ (bulundu + düzeltildi)
"Türk**- Alman** Üniversitesi" — kaynak-metinde tire-den sonra **boşluk** var (`Türk- Alman`). Tesis-eşleme anahtarım `türk-alman` bu varyantı **kaçırıyordu** → 15+ kampüs kaydı yanlışlıkla belirsiz kalmıştı. **Çözüm:** `norm()` fonksiyonu tire-etrafı boşlukları sıkıştırıyor (`Türk- Alman`→`türk-alman`). → **Çubuklu 4 → 19'a çıktı.**

### YANLIŞ-POZİTİF TEMİZLİĞİ (A04 dürüstlük)
İlk denemede 3 sahte-eşleşme yakalanıp elendi:

| Sahte | Ne olmuştu | Düzeltme [K] |
|---|---|---|
| **merkez** (6→1) | "Veri **Merkezi**", "Polis **Merkezi**"ne takıldı (ek-serbest) | jenerik adlar "X **Mahallesi**" formu şartına bağlandı |
| **fatih** (5→0) | MEM-grup kaydında **başka ilçe** (Beyoğlu/Avcılar) okul-adı | aynı "X Mahallesi" guard'ı |
| **emniyet** (1→0) | "İller Bankası **Emniyet Mah**" = idarenin **Ankara adresi** | adres-kalıbı yalnız bilinen Beykoz-45 mahallesiyse kabul |

> Ders: jenerik mahalle adları (Merkez/Fatih) + idare/banka adresleri, ilçe taramasında sistematik yanlış-pozitif kaynağı. Guard'lar diğer ilçelere taşınmalı.

---

## 2. G2 — ISI-AYAĞI (yıl × mahalle, kamu-yatırımı yoğunluğu)

**Mahalle yoğunluk sıralaması** [K: 70 çözülen kaydın mahalle×yıl sayımı]:

| Mahalle | Toplam | 2022 | 2023 | 2024 | 2025 | 2026 | Örüntü |
|---|---|---|---|---|---|---|---|
| **Çubuklu** | **19** | 5 | 4 | 2 | 5 | 3 | Kampüs — 5-yıl **sürekli**, en yoğun |
| **Gümüşsuyu** | **9** | 1 | 1 | 3 | 2 | 2 | Hastane — **2024'ten sonra tırmanış** |
| Anadolukavağı | 7 | 1 | 2 | 1 | 3 | — | Askeri/deniz |
| Kavacık | 7 | 1 | 4 | 1 | — | 1 | 2023 zirvesi (iş-merkezi) |
| Polonezköy | 5 | 1 | 1 | 1 | 2 | — | Orman-kıyı, düşük-yoğun sürekli |
| Yalıköy | 4 | — | 1 | 1 | 2 | — | kıyı |
| Mahmutşevketpaşa | 3 | — | — | — | 1 | 2 | **2025-26 yeni** (okul) |
| Paşabahçe | 3 | — | — | 1 | — | 2 | **2026 yeni** |
| Kanlıca | 3 | 1 | — | 2 | — | — | |
| Riva / İshaklı | 2 / 2 | | | | | | kuzey-kıyı / kuzey-köy |

**Isı-ayağı okuması:** Kamu-yatırımı **iki sıcak-noktada** yoğunlaşıyor — **Çubuklu (kampüs, sürekli)** ve **Gümüşsuyu (hastane, yükselen)**. Kavacık 2023'te parladı sonra soğudu. **Yeni ısınanlar:** Mahmutşevketpaşa + Paşabahçe (2025-26). Kuzey mahalleleri (Polonezköy/Riva/İshaklı) düşük ama süregelen — orman/SİT sınırı nedeniyle.

---

## 3. G3 — KÜMELENME (mega-yatırım = sinyal)

Kamu yatırımı kümesi = özel-yatırım öncü-sinyali (#21 zayıf-imza). İki mega-yatırımın çevresi:

### 🏥 Gümüşsuyu — 500 Yataklı Hastane kümesi (9 ihale)
| Kategori | Adet |
|---|---|
| Sağlık (hastane) | 6 |
| Elektrik/Enerji | 2 |
| Diğer (dere ıslahı) | 1 |

İçerik [K]: 500 Yataklı yeni hastane (4,18 Mr, 2024) **+ etrafında** eski Beykoz Devlet Hastanesi (yangın-sistemi, chiller, ısıtma-soğutma, mutfak-havalandırma) **+ Çırçır Deresi ıslahı** (altyapı-hazırlık). → **Gerçek küme: sağlık-mega-yatırım kendi çevre-altyapısını çekiyor.**

### 🎓 Çubuklu — Türk-Alman Üniversitesi kampüsü kümesi (19 ihale)
| Kategori | Adet |
|---|---|
| Eğitim (kampüs/blok) | 15 |
| Kıyı/Deniz (SHOD, Deniz Saha Kom.) | 2 |
| Diğer | 2 |

İçerik [K]: Kampüs **5 yıl sürekli** yatırım — blok cephe, oditoryum, veri-merkezi, öğrenci-yurdu, çevre-kamera, etkinlik-alanı. → **Aktif-büyüyen kampüs; Çubuklu'nun kamu-yatırım motoru tek kurum (üniversite).**

**Kümelenme yorumu:** Her iki mega-yatırım da **çevresinde ikincil ihale kümesi** üretiyor — bu, ısı-haritasının kamu-ayağının **gerçek sinyal** taşıdığını gösteriyor. Ama küme **kurum-içi** (hastane kendi ek-işleri / kampüs kendi blokları); **mahalle-çapında yayılım** (özel-yatırım öncülüğü) bu arşivden görünmüyor — o TT-AI/Analiz katmanı işi.

---

## 4. ⚠️ CEVAPLAYAMADIKLARIM (A04, ayrı başlık)

| # | Cevaplayamadığım | Neden |
|---|---|---|
| 1 | **38/144 kayıt gerçekten mahalle-belirsiz** | Jenerik/kırpık iş-tanımı; bülten adres taşımıyor. Sözlük genişletmesi bunları çözmez (metin-eksik) |
| 2 | **Kümelenmenin mahalle-yayılımı** | Küme kurum-içi (hastane ek-işleri/kampüs blokları). Çevre mahalleye taşıp taşmadığını **özel-yatırım verisi olmadan** söyleyemem |
| 3 | **Isı-ayağının "özel-ayağı" yok** | Kamu-ısı haritasını çıkardım; özel-yatırım ısısı TT-AI/Analiz'de. Kamu-öncü tezi ancak **çapraz** kanıtlanır |
| 4 | 36 ilçe-geneli kaydın iç-dağılımı | "Muhtelif Cadde/Sokak" hangi mahalleleri kapsıyor — bülten söylemiyor |
| 5 | Yüklenici-tekrarı / firma-ağı | Bu sprintte analiz edilmedi |
| 6 | Kampüs/hastane yatırımının **parasal büyüklüğü mahalle-bazında** | İLAN kayıtlarında bedel yok; toplam eksik-tahmin |

---

## 5. ÇIKTI
- `~/cc_ihale/cikti/vaka_beykoz_ihale_I61.json` — 144 kayıt + mahalle_i61 + ısı-matris + kümeler
- Bu rapor: `beykoz_vaka/cc_ihale_I61.md`

**Maliyet $0 · Arşiv salt-okuma · Silme yok.** CC-İhale duraklamaya (NAS-bekleme) döndü.
