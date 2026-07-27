# BEYKOZ KAMU İHALE VAKASI — CC-İhale
**Hazırlayan:** CC-İhale (Tradia) · **Tarih:** 2026-07-25 · **Sprint:** İ59+İ60
**Kaynak veri:** EKAP Kamu İhale Bülteni (Yapım İşleri) arşivi — **102.174 kayıt** (2022-01-03 → 2026-07-10)
**Disiplin:** $0 (0 AI-çağrısı) · A04 (ölç-dürüst) · #24 sınır-duyarlı arama · #21-B her-sayı-kaynaklı · SİLME-YOK

> Her sayının yanında **[K]** kaynak-imzası (#21-B çift-imza): hangi dosya/hangi filtreyle üretildiği.

---

## 1. ÖZET TABLO

| Bulgu | Değer | Kaynak [K] |
|---|---|---|
| Beykoz'da/etkileyen toplam kamu ihalesi | **144** | `bulten_yapim.jsonl` → "beykoz" çok-alan taraması (is_adi+yer+ilce+mahalle+yüklenici) |
| — İLAN (henüz sonuçlanmamış) | 33 | tip=YAPIM_ILAN filtresi |
| — SONUÇ (sözleşme imzalı) | 111 | tip=YAPIM_SONUC filtresi |
| — Bedelli (tutar bilinen) | 111 | sozlesme_bedeli/yaklasik_maliyet dolu |
| Köprü/otoyol Beykoz-ekseni doğrudan ihale | **1** | tüm-arşiv sınır-duyarlı köprü/otoyol taraması |
| Mahalleye bağlanabilen kayıt | **59 / 144 (%41,0)** | 3-katman çözünürlük (aşağıda) |
| Paşabahçe/Şişecam doğrudan Beykoz izi | **1** (2 yanlış-pozitif reddedildi) | sınır-duyarlı + İstanbul-bağlam filtresi |
| Sınıflandırma oranı (İ60 sonrası) | **%91,0** | İ59 %75,7 → +15,3 puan |

---

## 2. G1 — KATEGORİ DAĞILIMI (144 ihale)

| Kategori | Adet | Kaynak [K] |
|---|---|---|
| Eğitim (okul/üniversite) | 38 | is_adi kategori-regex (okul\|üniversite\|mem\|kampüs) |
| Yol/Cadde/Sokak | 17 | (yol\|cadde\|sokak\|asfalt) |
| Park/Yeşil/Mesire | 14 | (park\|yeşil\|mesire\|çevre düzenleme) |
| Sağlık (hastane/tesis) | 9 | (hastane\|sağlık\|asm) |
| Su/Altyapı (içmesuyu/kanal) | 8 | (içmesuyu\|kanal\|arıtma\|iski) |
| Kamu binası/Onarım | 8 | (kamu bina\|çatı onarım\|müdürlük) |
| Askeri (kışla/lojman) | 5 | (kışla\|lojman\|komutanlık) |
| Cephe/Sağlıklaştırma | 4 | (cephe\|sağlıklaştırma) |
| Elektrik/Enerji | 3 | (kv\|enerji nakil\|trafo) |
| Kıyı/Deniz (mahmuz/iskele) | 3 | (mahmuz\|iskele\|kıyı) |
| *Sınıflandırılmamış (İ60'ta 13'e indi)* | *35→13* | ek-kategori elden geçirme |

**En büyük 3 ihale** [K: sozlesme_bedeli sıralı ilk-3]:

| # | Tutar | İş | Yıl | Yüklenici |
|---|---|---|---|---|
| 1 | **4,18 Mr TL** | Beykoz 500 Yataklı Devlet Hastanesi | 2024 | Kuzu Toplu Konut A.Ş. |
| 2 | 711 M TL | İSKİ Abone İşleri 3. Bölge | 2025 | — |
| 3 | 421 M TL | İSKİ Abone İşleri 3. Bölge (Üsküdar-Beykoz) | 2024 | — |

---

## 3. G2 — GELİŞİM (yıllara göre kamu yatırımı)

| Yıl | Adet | ≈ Toplam bedel | Kaynak [K] |
|---|---|---|---|
| 2021 | 5 | 49,8 M TL | ikn-yıl + bedel-toplamı |
| 2022 | 35 | 788 M TL | " |
| 2023 | 35 | 1,16 Mr TL | " |
| **2024** | 20 | **5,33 Mr TL** ← zirve | " (tek kalem hastane 4,18 Mr domine) |
| 2025 | 28 | 1,83 Mr TL | " |
| 2026 | 21 | 352 M TL (yıl sürüyor) | " |

**Yorum:** Adet 2022'den beri doygun (~30-35/yıl). 2024 bedel-zirvesi **tek mega-tesise** (hastane) bağlı — onsuz ~1,15 Mr. Yani hacim **istikrarlı-yüksek, mega-tesis-odaklı sıçrama**.

**Mahalle yoğunlaşması** [K: 59 çözülen kaydın mahalle-sayımı]:

| Mahalle | İhale | Not |
|---|---|---|
| Polonezköy | 5 | kuzey orman-kıyı gelişim-cephesi |
| Yalıköy / Kavacık | 4 / 4 | Kavacık = iş-merkezi ekseni |
| Çubuklu / Riva / Kanlıca | 3 / 3 / 3 | Çubuklu = üniversite; Riva = kuzey-kıyı |

**Kamu-öncü tezi (#21 zayıf-imza):** Beykoz'da tek-mahallede *sürekli-sıçrama* örüntüsü **ZAYIF** — ilçenin çoğu orman/SİT-kısıtlı. Sinyal iki noktada toplanıyor: **Hastane-Merkez (Gümüşsuyu) + Kavacık-koridoru**. Özel-yatırım öncülüğü izlenecekse bu iki nokta. *Tek-imza yetersiz; TT-AI/Analiz mahalle-katmanı ile çapraz gerekir (Cross-Hat tek-yön).*

---

## 4. G3 — KURUM İZİ (73 kurum-bağlantılı ihale)

| Kurum tipi | Adet | Kaynak [K] |
|---|---|---|
| Okul / MEM | 22 | kurum-regex + is_adi |
| Türk-Alman Üniversitesi | 15 | "türk-alman üniversite" eşleme |
| Askeri (kışla/lojman/Sualtı Kom.) | 9 | (kışla\|komutanlık\|lojman) |
| Orman / OGM | 9 | (orman) |
| Sağlık | 7 | (hastane\|sağlık) |
| Belediye | 1 | (belediye) |
| Diğer kamu | 10 | kalan |

**Kilit kurum-sinyalleri:**
- **Sağlık kapasite-büyümesi:** 500 Yataklı yeni Devlet Hastanesi (2024) + Beykoz Devlet Hastanesi yangın-sistemi (2023).
- **Aktif-büyüyen kampüs:** Türk-Alman Üniversitesi sürekli-yatırım (blok cephe, oditoryum, veri-merkezi dönüşümü).
- **Askeri-alan payı yüksek** (Sualtı/SAT Komutanlığı, kışla, lojman) → özel-yatırıma kapalı-alan sinyali.

**Paşabahçe / Şişecam** [K: sınır-duyarlı + İstanbul-bağlam]: Cam fabrikası **doğrudan kamu-ihale izi YOK** (özel firma; fabrika-imar/kıyı Kamu İhale Bülteni dışında). Paşabahçe yalnız **1** kayıtta (İSKİ Asya-atıksu-havza ilçe-listesinde) geçiyor. → *2 "Şişecam" kaydı aslında **Mersin/Karaduvar Soda tesisi** (MESKİ) çıktı, Beykoz değil — reddedildi.*

---

## 5. G2-YÖNTEM — MAHALLE ÇÖZÜNÜRLÜĞÜ (diğer ilçelere şablon)

İ59'da 144'ün yalnız 29'u mahalleye bağlıydı. İ60'ta **3-katmanlı çözünürlük** ile **59'a (%41,0)** çıkarıldı (+30):

| Katman | Yöntem | Kazanım [K] |
|---|---|---|
| 1 | Net mahalle-adı sözlüğü (33 Beykoz mahallesi, sınır-duyarlı) | 27 kayıt |
| 2 | Tesis/okul-adı → mahalle eşleme tablosu | 26 kayıt |
| 3 | "X Mahallesi / Mevki" regex kalıbı | 6 kayıt |
| — | **Toplam çözülen** | **59** |
| — | **Gerçekten belirsiz** (ilçe-düzeyinde duruyor) | **85** |

**Şablon notu:** Katman-1 sözlüğü ve Katman-2 tesis-tablosu **ilçe-özel** doldurulur; Katman-3 regex **ortak**. Diğer ilçelere aynı iskelet uygulanabilir.

---

## 6. ⚠️ CEVAPLAYAMADIKLARIM (dürüst açık-liste, A04)

> Bu bölüm ayrı-başlık altında bilinçli tutuldu — vaka-raporunun güvenilirliği bunun şeffaflığından gelir.

| # | Cevaplayamadığım | Neden |
|---|---|---|
| 1 | **85/144 kayıt (%59) hâlâ mahalle-belirsiz** | Bülten metni çoğu kez ilçe-düzeyinde durur; adres/mevki yok |
| 2 | **Kuzey Marmara Otoyolu / YSS Köprüsü doğrudan izi yok** | Otoyol/köprü **BOT (yap-işlet-devret)** modeliyle ihale edildi → Kamu İhale Bülteni'nde görünmez. Beykoz'un "köprü-arkası büyümesi"nin kamu-izini bu arşivden **doğrulayamıyorum** |
| 3 | **Kamu-öncü tezi tek-başına test edilemez** | Özel-yatırım verisi bu arşivde yok; kamu↔özel öncülük ancak TT-AI/Analiz çaprazıyla kanıtlanır |
| 4 | **13 kayıt hâlâ sınıflandırılamadı** (%9) | "4 Kısım Yapım İşi", "Anadolu YDKŞ Bölgesi hat" gibi jenerik/kırpık iş-tanımları |
| 5 | Parsel-bazlı imar/kentsel-dönüşüm | Bülten-dışı (Tapu/Belediye meclis kararı gerekir) |
| 6 | Beykoz ihalelerinin **iptal/kalıcı-iptal oranı** | Bu vakada ayrıştırılmadı (arşiv-geneli %82,6 kalıcı-iptal var, Beykoz-özel hesaplanmadı) |
| 7 | **Yüklenici-tekrarı** (aynı firma kaç Beykoz işi) | Analiz edilmedi — sonraki sprintte |

---

## 7. ÇIKTI DOSYALARI (Mac, ~/cc_ihale/cikti/)
- `vaka_beykoz_ihale_I59.json` — 144 kayıt tam-liste + kategori/yıl/kurum
- `vaka_beykoz_ihale_I60.json` — köprü/otoyol + mahalle-çözünürlük + Şişecam + G4
- `vaka_beykoz_ihale_I59_ozet.md` — İ59 özeti

**Maliyet:** $0 · **Silme:** yok · **Arşiv:** salt-okuma (dokunulmadı).
*CC-İhale duraklamaya (NAS-bekleme) geri döndü.*
