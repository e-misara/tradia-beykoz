# BEYKOZ — CC-Borsa S58: ÇELİKLER DERİN + EKGYO KONUT ADEDİ + ZAMAN ISI

**Tarih:** 2026-07-26 · $0 · A04 · **yorum yok** · SİLME-YOK
**Yöntem:** KAP tam-metin + PDF eki (faaliyet raporu dahil) canlı çekildi. kap_cek.py yalnız import (salt-okuma). PDF Java-wrapper offset-27 soyuldu → pdftotext.

---

## G1 — Çelikler Taahhüt: **HALKA KAPALI → KAP kör noktası**

| Ölçüt | Bulgu | Kaynak |
|---|---|---|
| BIST kote mi? | **HAYIR** — sözlükte (611) yok, pykap BIST üye listesinde yok | borsa_ad_kod_sozluk + pykap |
| Havuzda başka firma anıyor mu? | **0** — hiçbir kote firmanın KAP'ında "Çelikler" veya "İncirköy" geçmiyor | grep firmalar/ |
| Mali durum / diğer projeler | **Göremiyorum** — özel şirket, KAP'a tabi değil | — |
| İncirköy'de ne yapacak? | **KAP'ta bildirim YOK** — alıcı özel olduğu için planı KAP-dışı | — |

**SONUÇ (A04):** Çelikler Taahhüt İnşaat ve Sanayi A.Ş. **halka kapalı** — 117 bin m²'yi ne yapacağı (konut/karma proje/arsa bankası) **KAP'tan izlenemez**. Yapısal kör nokta. Ancak izlenebilir bir kanca var: Çelikler **kote bir GYO/müteahhitle ortaklık** yapar veya arsayı kote bir firmaya satarsa **o firmanın** KAP'ında görünür → izleme kancası kurulabilir (gelecek sprint).

---

## G2 — EKGYO Riva/Tokatköy konut ADEDİ: **KAP kaynaklarında bulunamadı**

Üç kaynak tarandı, konut adedi hiçbirinde **yok**:
| Kaynak | İçerik | Konut adedi? |
|---|---|---|
| Riva İhale İlanı PDF (606949) | m²/emsal tablosu (S57) | ❌ yok |
| Riva 2. Oturum Sonucu PDF (612682) | **6 istekli teklif tablosu** (aşağıda) | ❌ yok |
| Faaliyet Raporu 2023 PDF (1274021, 9,3MB/7307 satır) | Riva = **dava** dipnotu (12.1.3); **Tokatköy hiç geçmiyor** | ❌ yok |

### Yeni bulgu — Riva ihalesi istekli tablosu (2. oturum, 15.06.2017)
| Sıra | İstekli | ASKSTG (TL) | Şirket Payı Oranı | Şirket Payı (TL) |
|---|---|---|---|---|
| 2 | **YILMAZ İNŞAAT TAAHHÜT VE TİC. A.Ş.** | 3.808.000.000 | %25 | 952.000.000 |
| 3 | GAYR. GELİŞTİRME YAPI VE YAT. A.Ş. | 3.484.000.000 | %25 | 871.000.000 |
| 5 | …& TEKNİK YAPILAR İNŞ. | 2.602.923.076,92 | %26 | 676.760.000 |

### Faaliyet raporu 2023'ün ortaya çıkardığı (önemli):
Riva ihalesini kazanan İş Ortaklığı **sözleşmeye gelmedi** (15.08.2017 süre sonu) → **geçici teminat irat kaydedildi** → iş **2. en uygun teklife (dava dışı yüklenici) yeniden ihale** edildi → **tazminat davası** açıldı, istinaf sürüyor. *Bu, 2017 ihale → 2025 inşaat arasındaki 8 yıllık gecikmeyi açıklıyor.*

### "173.904 m² inşaat kaç villa?" — TÜRETME (resmi değil)
Emsale esas inşaat **173.904,44 m²** ÷ birim taban max **200 m²** ≈ **870 villa ÜST-SINIRI**. **A04: bu bir tahmin**, ihale ilanında/raporda **yazılı konut adedi YOK**; yollar/rekreasyon/villa büyüklüğü nedeniyle gerçek sayı **daha az** olur. Resmi adet için EKGYO proje sunumu/satış kataloğu gerekir (KAP-dışı).

---

## G3 — Beykoz KAP zaman ısısı (momentum ayağı)

5+1 aktörün Beykoz bildirimleri, yıla göre:
```
2016 ██          2   AGYO Riva arsa + ANELE Kavacık showroom
2017 ███████     7   ◄ TEPE-1  EKGYO Riva ihale (sonra DAVA → gecikme)
2018 █           1   AKSGY imar
2019 █           1   AKSGY imar
2020 ·           0
2021 ·           0
2022 ███████     7   ◄ TEPE-2  EKGYO Tokatköy icra + Riva STG + AKSGY imar
2023 ·           0
2024 ·           0
2025 ██          2   EKGYO Riva inşaat/yer teslimi
2026 ███         3   ◄ YENİ DALGA  SISE Paşabahçe SATIŞ(171,5M$) + PEKGY Tera Orman
```
**Momentum gözlemi (yorum değil):**
- **2017 tepe** ihaleyle geldi ama **dava** nedeniyle icraya dönüşmesi 2025'i buldu → *bildirim-yoğunluğu ≠ hayata-geçme; gecikme davada*.
- **2022 tepe** = Tokatköy'ün gerçek icrası (sözleşme+yer teslimi).
- **2026 yeni dalga** niteliksel farklı: **el değiştirme** (Şişecam ÇIKIŞ 171,5M$ → Çelikler GİRİŞ) + **yeni oyuncu** (Peker GYO premium villa). Kamu (EKGYO) ağırlıklı 2016-25'ten, 2026'da **özel sermaye rotasyonuna** kayış.

*Gecikme/momentum katsayısını Finans hesaplar — ben yalnız zaman-dizisini veriyorum.*

---

## G4 — Cevaplayamadıklarım
| # | Ne | Neden |
|---|---|---|
| 1 | Çelikler'in İncirköy planı, mali durumu, diğer projeleri | Halka kapalı → KAP-dışı (kote ortak/alıcı çıkarsa görünür) |
| 2 | Riva/Tokatköy **resmi konut adedi** | Hiçbir KAP kaynağında yok; 870 = türetilmiş üst-sınır tahmini |
| 3 | Yılmaz İnşaat / dava-dışı 2. yüklenici kimliği-sonrası | Yükleniciler halka-kapalı; dava dışı yüklenici adı raporda anonim |
| 4 | Tokatköy proje ölçeği (m²/konut) | Faaliyet raporunda geçmiyor, PDF eki yok |

> **A04:** G1 ve G2'nin ikisi de "veri var ama benim erişimimin dışında" ile kapandı (Çelikler halka-kapalı; konut adedi KAP-dışı sunumda). Uydurma yapılmadı; türetme tahmini açıkça etiketlendi.

**Join #18:** `il=İstanbul · ilce=Beykoz · mahalle={Çayağzı(Riva), Riva, Tokatköy, Kavacık, İncirköy, Polonezköy}` → Finans F2.
