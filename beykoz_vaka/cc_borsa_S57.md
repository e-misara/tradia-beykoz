# BEYKOZ — CC-Borsa S57: 171,5M$ DOĞRULAMA + EKGYO PDF + PEKER GYO

**Tarih:** 2026-07-26 · $0 · A04 · **yorum yok** · SİLME-YOK
**Yöntem:** KAP tam-metin + **PDF eki** canlı çekildi (public, login/captcha yok). kap_cek.py yalnız **import** (salt-okuma, havuz ezilmedi). PDF'ler Java-serialized wrapper içindeydi → offset-27 soyularak pdftotext ile okundu.

---

## G1 — ★ 171,5M$ ŞİŞECAM PAŞABAHÇE ARSA: **DOĞRULANDI** ✅

Sosyal'in tek-kaynak iddiası **KAP birincil kaynağında bire bir teyitli**:

| Alan | Değer (KAP tam metninden) |
|---|---|
| **Bildirim** | "Paşabahçe Gayrimenkullerinin Satışı Hk." |
| **Satıcı** | Türkiye Şişe ve Cam Fabrikaları A.Ş. (SISE) |
| **Konum** | İstanbul, **Beykoz İlçesi, İncirköy Mahallesi** |
| **Parseller** | 11 parsel: 251/4, 257/6, 270/2, 270/16, 270/34, 270/42, 270/43, 271/2, 271/6, 271/8, 294/29 |
| **Yüzölçüm** | **117.018,95 m²** arsa |
| **★ Bedel** | **171.500.000 USD** (peşin) ✅ |
| **★ Alıcı** | **Çelikler Taahhüt İnşaat ve Sanayi A.Ş.** |
| **Nitelik** | "Yatırım amaçlı gayrimenkuller altında takip edilen" |
| **Kaynak** | KAP idx **1559473** (2026-02-20) + devam idx 1562067 (2026-02-26) |

**Neden S55/S56'da bulamamıştım (A04):** Satış **2026-02** tarihli; havuzdaki SISE verisi yalnız 2024 penceresiydi, tarihsel taramam 2015-2023'tü. Olay o pencerelerin **dışında**. S57'de 2024-2026 taranınca ortaya çıktı. → "2015-öncesi/KAP-dışı" hipotezim **yanlıştı**; işlem KAP'ta VAR, sadece **çok yeni** (2026).

➡️ **Örüntü (gözlem, yorum değil):** Şişecam Beykoz'dan **ÇIKIŞ** (171,5M$ arsa satışı), Çelikler Taahhüt **GİRİŞ**. Sermaye el değiştirdi.

---

## G2 — EKGYO Riva: PDF eki m²/konut (pdftotext ile çıkarıldı) ✅

**Beykoz Riva İhale İlanı PDF (idx 606949)** — Ada/Parsel tablosu:

| Parsel | Fonksiyon | Arsa Alanı (m²) | Emsal | Emsale Esas İnşaat (m²) | Yükseklik |
|---|---|---|---|---|---|
| 3202 | **Konut Alanı** | **869.522,18** | 0,20 | **173.904,44** | H=2 kat (max 7m) |
| 3201 | Rekreasyon | 206.497,84 | — | — | — |
| 3203 | İlköğretim Tesis | 8.423,03 | — | — | — |
| — | Park | 72.560,95 | — | — | — |
| **Toplam** | | **1.157.004,00** | | **173.904,44** | |

- Konut: E:0,20, H:2 kat, birim taban max **200 m²** (düşük yoğunluk / villa tipi).
- **Konut ADET sayısı ilanda YAZILI DEĞİL** — yalnız m²/emsal verilmiş. (173.904÷200 ≈ 870 üst-sınır türetilebilir ama bu **tahmin**, ilanda yok — A04.)
- **Tokatköy PDF eki YOK** (attachmentCount=0) → Tokatköy m²/konut çıkarılamadı.

---

## G3 — TERA/PEKER GYO: halka açık + Beykoz izi ✅

**Peker GYO (PEKGY) — halka AÇIK** (BIST, sektör GYO; geniş sözlükte var, derin havuzda yoktu → KAP çekildi):

| Alan | Değer (KAP tam metninden) |
|---|---|
| **Bildirim** | "Tera Orman Beykoz Projesi'nin Lansmanı" |
| **Geliştiren** | **SozInv A.Ş.** (PEKGY'nin %100 bağlı ortaklığı) |
| **Konum** | İstanbul Beykoz, **Polonezköy Ormanları'na komşu** |
| **Arsa** | ~**25.000 m²** |
| **Konut** | farklı tiplerde **toplam 70 villa** |
| **Durum** | inşaat başladı, **2028 ortası** tamamlanma hedefi |
| **Kaynak** | KAP idx **1618761** (2026-06-18) |

("Tera" adı bu projede PEKGY markası olarak geçiyor; Tera Yatırım/Tera Holding [TERA/TEHOL] **ayrı** kurumlar, GYO değil — karıştırılmamalı.)

---

## Beykoz sermaye haritası — güncel (5 halka-açık aktör)
| Şirket | Bölge/Mahalle | Ölçek | Yön |
|---|---|---|---|
| EKGYO | Riva + Tokatköy | 1.157.004 m² (Riva) | konut geliştirme |
| SISE→Çelikler | İncirköy | 117.018,95 m² / 171,5M$ | Şişecam çıkış, Çelikler giriş (2026) |
| PEKGY (SozInv) | Polonezköy | 25.000 m² / 70 villa | premium konut (2026) |
| AGYO | Çayağzı (Riva) | 1.313 m² | arsa (2016) |
| AKSGY | Beykoz | — | imar süreci |

---

## G4 — Cevaplayamadıklarım
| # | Ne | Neden |
|---|---|---|
| 1 | Riva **konut ADET sayısı** | İhale ilanında yok (yalnız m²/emsal); 200 m²/birimden türetme = tahmin |
| 2 | Tokatköy m²/konut | KAP bildiriminde PDF eki yok (attachmentCount=0) |
| 3 | 02-26 ikinci Paşabahçe bildirimi gövdesi | HTML'den temiz çıkarılamadı (tapu-devir teyidi olası) — birincil 02-20 tam |
| 4 | Çelikler Taahhüt'ün Beykoz planı | Çelikler **halka-kapalı** taahhüt firması → KAP-dışı, göremem |
| 5 | Halka-kapalı KOBİ/aile firmaları | KAP'a tabi değil — yapısal kör nokta |

> **A04 kazanımı:** S55'te "ölçemedim", S56'da "2015-öncesi/KAP-dışı" dediğim Paşabahçe arsası → S57'de **KAP'ta 2026-02 tarihli, 171,5M$, alıcı Çelikler Taahhüt** olarak birincil kaynakta doğrulandı. Önceki hipotezimi düzelttim.

**Join #18:** `il=İstanbul · ilce=Beykoz · mahalle={Çayağzı(Riva), Riva, Tokatköy, Kavacık, İncirköy, Polonezköy}` → Finans F2 sermaye ayağı.
