# BEYKOZ SERMAYE DERİNLİK — CC-Borsa S56

**Tarih:** 2026-07-26 · $0 · A04 · **yorum yok** · SİLME-YOK
**Yöntem:** KAP tam-metin ekleri **canlı çekildi** (kap.org.tr/tr/Bildirim/{idx}, public, login/captcha yok, rate-limit 4s — Standing #8). Mevcut script/cron/_park'a DOKUNULMADI (kap_cek.py yalnız **import** edildi, salt-okuma; havuz dosyaları ezilmedi).
**Not:** KAP HTML'inde Türkçe karakterler mojibake görünür (Ä±=ı) ama **rakamlar temizdir** ve iki ayrı bildirimde çapraz-tutarlıdır.

---

## G1 — EKGYO Riva/Tokatköy: TAM METİN eki (tutar/m²/konut)

### Beykoz Riva — "Arsa Satışı Karşılığı Gelir Paylaşımı İşi"
| Tarih | Aşama | Tutar (ODA tam metninden) | Kaynak idx |
|---|---|---|---|
| 2017-06-15 | İhale 2. oturum (en yüksek teklif) | ASKSTG **3.100.000.000 TL** · Şirket Payı (ASKŞPTG) **1.178.000.000 TL** · İhaleye esas asgari bedel **486.007.689,65 TL** | 612682 |
| 2017-08-16 | İhale sonuç | ASKSTG **3.808.000.000 TL** · Şirket payı oranı **%25** · Asgari şirket payı **952.000.000 TL** · gelirin %80'i idareye | 625894 |
| 2017-09-13 | **Sözleşme imza** | ASKSTG **3.808.000.000 TL** · Asgari şirket payı **952.000.000 TL** (08-16 ile birebir teyit) | 629501 |
| 2022-01-10 | STG artışı (Ek-7 protokol) | Asgari şirket payı **952.000.000 → 1.254.437.837,14 TL** | 992244 |

### Beykoz Tokatköy
| Tarih | Aşama | Tutar | Kaynak idx |
|---|---|---|---|
| 2022-09-29 | 1. Etap sözleşme | **789.743.000 TL** | 1066143 |
| 2022-10-04 | 2. Etap sözleşme | **889.944.000 TL** | 1066890 |

### m² / konut sayısı
- **ODA gövde metninde m²/konut/adet YOK** — büyüklük bilgisi ekli **PDF**'lerde (ör. `Beykoz Riva İhale İlanı.pdf`, `Beykoz Riva İhalesi 2.Oturum Sonucu.pdf`). PDF içi OCR bu sprint dışı.
- Yer teslimi/oturum-tarihi bildirimleri (630111, 611834, 1066889, 1070223, 1424616, 1427643) yalnızca prosedürel — tutar içermiyor ("ODA'da tutar yok").

**Özet (A04):** Riva projesinin sözleşme değeri **3,808 milyar TL ASKSTG**, EKGYO payı **952 mn TL** (2022'de **1,254 mlyr TL**'ye yükseltildi). Tokatköy iki etap toplam **~1,68 mlyr TL** sözleşme. **Rakamlar KAP tam metninden; m²/konut sayısı PDF'te, çıkarılmadı.**

---

## G2 — SISE: 2024 penceresi dışına çıkabildim mi? **EVET**

kap_cek.py import edilerek SISE **2015-2023 salt-okuma** çekildi (havuz ezilmeden):

| Yıl | ODA bildirim | "gayrimenkul/Paşabahçe" eşleşme | İçerik |
|---|---|---|---|
| 2015 | 130 | 2 | Paşabahçe Eskişehir fabrika **yangını** |
| 2016 | 160 | 1 | Paşabahçe Mersin fabrika **kapanışı** |
| 2017 | 146 | 3 | Kırklareli fırın kapanış · Çayırova gayrimenkul haberi · **Maddi Duran Varlık = Mısır/Giza 57.791 m² arsa** |
| 2018-19 | 191 | 0 | — |
| 2020 | 376 | **123** | **Şişecam grup birleşmesi** (Anadolu/Denizli/Paşabahçe/Soda/Trakya devrolma) — kurumsal, arazi değil |
| 2021-23 | 274 | 0 | — |

**SONUÇ (A04):** SISE'nin **2015-2023 tam KAP tarihinde Beykoz geçen HİÇBİR bildirim YOK** (Beykoz=0). "Paşabahçe" eşleşmeleri ya (a) 2020 grup **birleşmesi**, ya (b) başka-şehir fabrika kapanışları, ya (c) Mısır arazi alımı, ya (d) Çayırova (Kocaeli) — **hiçbiri Beykoz arazisi değil**.
➡️ **Beykoz'daki tarihi Paşabahçe cam fabrikası arazi işlemi KAP elektronik arşivinde (2015+) YOK** — işlem 2015 öncesine ait veya KAP-dışı. *Bunu bilmek de bulgudur.*

---

## G3 — Zaman yoğunluğu (ısı haritası — sermaye ayağı)

Beykoz'a halka-açık şirket ilgisi (KAP bildirim/yıl):
```
2016 ██        2   (AGYO Riva arsa + ANELE Kavacık)
2017 ███████   7   ◄ TEPE-1  EKGYO Riva arsa ihale dalgası
2018 █         1   (AKSGY imar)
2019 █         1   (AKSGY imar)
2020 ·         0
2021 ·         0
2022 ███████   7   ◄ TEPE-2  EKGYO Tokatköy + Riva STG artışı + AKSGY imar
2023 ·         0
2024 ·         0
2025 ██        2   (EKGYO Riva inşaat/yer teslimi)
```
**Faz gözlemi (yorum değil):** arsa/ihale (2016-17) → imar/sözleşme (2018-22) → inşaat/yer-teslimi (2022-25). İki tepe 5 yıl arayla (2017 giriş, 2022 icra). *Gecikme katsayısını Finans hesaplar.*

---

## G4 — Cevaplayamadıklarım
| # | Ne | Neden |
|---|---|---|
| 1 | Riva/Tokatköy **m² ve konut sayısı** | ODA gövdesinde yok; ekli PDF'te — PDF-OCR bu sprint dışı |
| 2 | Beykoz Paşabahçe **fabrika arazisi** akıbeti | KAP 2015+ arşivinde yok (2015 öncesi/KAP-dışı) — elektronik arşiv sınırı |
| 3 | Halka **kapalı** şirketler (Kavacık KOBİ) | KAP'a tabi değil — yapısal kör nokta |
| 4 | Merkezi Beykoz'da olup bildirim yapmamış halka-açık firmalar | Havuzda HQ/adres verisi yok |
| 5 | Köprü ana yüklenici çevre-yatırımı | İçtaş/Astaldi/Cengiz vb. halka-kapalı (S55) |

> **A04:** S56'da G1 (tutar) ve G2 (SISE tarih) **çekilerek cevaplandı** — S55'te "ölçemedim" dediğim iki soru bu sprintte KAP tam-metin/tarihsel çekimle kapatıldı. Kalan açık: m²/konut (PDF içinde) ve 2015-öncesi Paşabahçe arazisi (arşiv-dışı).

**Join #18:** `il=İstanbul · ilce=Beykoz · mahalle={Çayağzı(Riva), Riva, Tokatköy, Kavacık}` → Finans F2 sermaye ayağı.
