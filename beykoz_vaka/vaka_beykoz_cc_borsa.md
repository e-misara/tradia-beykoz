# BEYKOZ VAKA — CC-Borsa (Sermaye Ayağı)

**CC:** cc_borsa (BIST halka-açık şirket istihbarat) · **Tarih:** 2026-07-23
**Kapsam:** S54 (genel iz) + S55 (Şişecam/köprü/EKGYO detay) birleşik
**Disiplin:** $0 · A04 · **yorum yok** ("Beykoz yükselir" demem — o Finans'ın işi) · SİLME-YOK · **#21-B: her sayının kaynağı belirtili**
**Ana kaynak:** `~/Desktop/tradia/cc_borsa/firmalar/[KOD]/kap_olaylar.json` (KAP ODA bildirimleri)

---

## 1. Beykoz'da varlık gösteren halka-açık şirketler

| Kod | Şirket | Sektör | Varlık türü | Mahalle | Bildirim | Kaynak (#21-B) |
|---|---|---|---|---|---|---|
| **AGYO** | Atakule GYO | GYO | Arsa alımı 1.313 m² | Çayağzı (Riva) | 1 | AGYO/kap_olaylar.json 09.11.2016 |
| **AKSGY** | Akiş GYO | GYO | Proje imar süreci | Beykoz | 4 | AKSGY/kap_olaylar.json 2018-2022 |
| **ANELE** | Anel Elektrik | Müteahhit | Kavacık Showroom | Kavacık | 1 | ANELE/kap_olaylar.json 04.05.2016 |
| **EKGYO** | Emlak Konut GYO | GYO | Riva + Tokatköy konut | Riva, Tokatköy | 14 | EKGYO/kap_olaylar.json 2017-2025 |
| | | | | | **Σ 20** | grep beykoz\|kavacık → 4 firma |

### KAP bildirim zinciri (tarihli, kaynaklı)
| Tarih | Kod | Bildirim (ODA) | Yön | Kaynak (#21-B) |
|---|---|---|---|---|
| 2016-05-04 | ANELE | Kosifler İnşaat ile Kavacık Showroom imzalanması | Giriş | ANELE ODA |
| 2016-11-09 | AGYO | Beykoz Çayağzı (Riva) 13 Pafta 2038 Parsel 1.313 m² arsa | Giriş | AGYO ODA "Maddi Duran Varlık Alımı" |
| 2017-05-11 | EKGYO | Beykoz Riva Arsası İhale İlanı | Giriş-ilan | EKGYO ODA |
| 2017-06/08 | EKGYO | Riva ihale oturumları (06-08/06-09/06-15/08-16) | Süreç | EKGYO ODA ×4 |
| 2017-09-13 | EKGYO | Riva Sözleşme İmzalanması | Giriş | EKGYO ODA |
| 2017-09-19 | EKGYO | Riva Yer Teslimi | İcra | EKGYO ODA |
| 2018-08-17 | AKSGY | Beykoz projesi imar planı | Süreç | AKSGY ODA |
| 2019-08-07 | AKSGY | Beykoz projesi imar planı | Süreç | AKSGY ODA |
| 2022-01-10 | EKGYO | Riva STG Artışı | Süreç | EKGYO ODA |
| 2022-01-24/25 | AKSGY | Beykoz imar planı ×2 | Süreç | AKSGY ODA ×2 |
| 2022-09-29 | EKGYO | Tokatköy 1. Etap Sözleşme | Giriş | EKGYO ODA |
| 2022-10-04 | EKGYO | Tokatköy 1. Etap Yer Teslimi + 2. Etap Sözleşme | İcra+Giriş | EKGYO ODA ×2 |
| 2022-10-10 | EKGYO | Tokatköy 2. Etap Yer Teslimi | İcra | EKGYO ODA |
| 2025-04-11 | EKGYO | Riva 1. Etap İkmal İnşaat Sözleşmesi | İcra | EKGYO ODA |
| 2025-04-18 | EKGYO | Riva 1. Etap Yer Teslimi | İcra | EKGYO ODA |

---

## 2. GYO / müteahhit ayrımı
| Tip | Şirketler | Kaynak (#21-B) |
|---|---|---|
| GYO | AGYO (Atakule), AKSGY (Akiş), EKGYO (Emlak Konut) | borsa_ad_kod_sozluk.json sektor=GYO |
| Müteahhit/taahhüt | ANELE (Anel Elektrik) | sözlük sektor=İnşaat Malzemeleri |

---

## 3. Zaman yönü (gözlem — yorum değil)
| Yıl | Bildirim | İçerik | Kaynak (#21-B) |
|---|---|---|---|
| 2016 | 2 | AGYO Riva arsa + ANELE Kavacık | publishDate sayımı |
| **2017** | **7** | EKGYO Riva **arsa ihale dalgası** (tepe-1) | publishDate sayımı |
| 2018 | 1 | AKSGY imar | publishDate sayımı |
| 2019 | 1 | AKSGY imar | publishDate sayımı |
| **2022** | **7** | EKGYO Tokatköy + Riva STG + AKSGY imar (tepe-2) | publishDate sayımı |
| 2025 | 2 | EKGYO Riva inşaat/teslim | publishDate sayımı |

**Faz gözlemi:** arsa/ihale (2016-17) → imar/sözleşme (2018-22) → inşaat/yer-teslimi (2022-25). *Gecikme katsayısını Finans hesaplar.*

---

## 4. Şişecam (SISE) hedefli arama
| Ölçüt | Bulgu | Kaynak (#21-B) |
|---|---|---|
| KAP penceresi | **SADECE 2024** (132 bildirim) | SISE/kap_olaylar.json son_sorgu={2024-01-01,2024-12-31} |
| Gayrimenkul/Paşabahçe (2024) | **0** | subject+summary regex taraması |
| FDV bildirimi (9) | Hepsi kurumsal (ICRON/Pivdenna/soda/düzcam), arazi değil | SISE ODA "Finansal Duran Varlık" |

---

## 5. Köprü sermayesi (YSS / Kuzey Marmara)
| Kod | Şirket | KAP bildirim | Beykoz/Riva | Kaynak (#21-B) |
|---|---|---|---|---|
| ENKAI | Enka İnşaat | 848 | **0** | ENKAI/kap_olaylar.json |
| TKFEN | Tekfen Holding | 449 | **0** | TKFEN/kap_olaylar.json |
| ALARK | Alarko Holding | 527 | **0** | ALARK/kap_olaylar.json |
| AGHOL | Anadolu Grubu Holding | 570 | **0** | AGHOL/kap_olaylar.json |

Ana yükleniciler (İçtaş/Astaldi/Cengiz/Kolin/Limak/Kalyon/Makyol) halka-kapalı/yabancı → KAP'ta yok.

---

## CEVAPLAYAMADIKLARIM (kör noktalar)

| # | Ne | Neden | Aksiyon |
|---|---|---|---|
| 1 | Halka **kapalı** şirketler (Kavacık KOBİ/aile firmaları) | KAP'a tabi değil | görülemez — yapısal sınır |
| 2 | Merkezi Kavacık'ta olup Beykoz-özel bildirimi olmayan halka-açık firmalar | Havuzda **HQ/adres verisi yok** | yalnız proje/varlık bildirimi üzerinden görüyorum |
| 3 | Arsa/proje **TL değeri, değerleme tutarı, konut/m²** (AGYO 1.313 m² hariç) | KAP ODA özetleri kısa (başlık düzeyi) | KAP tam-metin eki çekilmeli |
| 4 | **SISE Paşabahçe** kesin var/yok | SISE KAP yalnız 2024 penceresi | backfill 2015-2026'ya genişletilmeli |
| 5 | Köprü sermayesinin çevre-yatırım örüntüsü | Ana yükleniciler halka-kapalı | KAP'tan izlenemiyor |

> **A04 dürüst sınır:** S55'in iki sorusu (SISE tam-tarih, EKGYO tutar) veri-kapsamı nedeniyle **kesin cevaplanamadı** — bu "ölçemedim"dir, uydurma yapılmadı.

---

## Join anahtarı (#18)
`il=İstanbul · ilce=Beykoz · mahalle={Çayağzı (Riva), Riva, Tokatköy, Kavacık}` — TT-MAP/Finans ile join edilebilir. **Beykoz sermaye ayağı → Finans F2.**
