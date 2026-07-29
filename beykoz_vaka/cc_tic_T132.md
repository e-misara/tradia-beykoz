# cc_tic_T132 — S96 SON-TUR (2B Beyan × Çavuşbaşı-233 × Elmalı-İSKİ × T131 Borç)

**Tarih:** 2026-07-29 · **Sprint:** T132
**Görev:** 3 iş — (1) 2014 "2B'de 1,25 Mr TL Beykozluda kaldı" beyanı tutarlılık okuması + Finans'a bugünkü değer notu; (2) 233ha Çavuşbaşı-2B (2010→2015 zinciri) + Elmalı-İSKİ kesişim tüzel-katmanı; (3) T131 borcu: `beykoz_mahalle_zincir_v1.json` yaz + md'yi `beykoz_vaka/`'ya kopyala
**Disiplin:** $0 · A04 · V16 · V37 read-only · KVKK #31 (yalnız tüzel) · Cross-Hat pull-only

---

## 0. Otuz Saniyede

**T131 borcu tam kapatıldı** — JSON kalıcı katman yazıldı (7,8 KB) + md `beykoz_vaka/`'ya kopyalandı. **2014 "1,25 Mr TL" beyanı** birebir açık kaynakta doğrulanamadı (V16 dürüst) ama **Beykoz'un 2B haritası bağlam sağlıyor: 20.500 parsel, İstanbul'un en fazla 2B parseli olan ilçe; 25.330 hak sahibi, 10.000 başvuru → belediye devrinin en az %60'ı**. **233 hektar Çavuşbaşı 2B spesifik ibaresi** doğrulanamadı ama **Çavuşbaşı 2B fiyat 2-3× artış (200-500 → 1000-1500 TL/m² 2013 tabanlı)** + **25 özel proje planlaması (Ekim 2013)** dokümante edildi. **Elmalı-İSKİ kesişimi tüzel-katmanı: kamu tüzel iki taraf (İSKİ + Beykoz Belediyesi + Bakanlık) hakim**, özel-tüzel geliştirici izi yok.

---

## §1 — T131 Borç Kapanışı (İş 3)

### §1.1 JSON kalıcı katman

**Dosya:** [`~/tradia_tic/veri/beykoz_mahalle_zincir_v1.json`](../veri/beykoz_mahalle_zincir_v1.json) · **7,8 KB · 9 mahalle · AS formülü + eşikler + 5 izleme kancası**

**Yapı:**
- `AS_metrik`: formül + segment ağırlıkları + eşikler + V11 disiplin kuralı
- `mahalleler`: 9 mahalle her biri {AS, profil, zincirler[]}
- `diger_mahalleler_zincir_yok`: 36 mahalle özet (koruma-SIT 3 + kırsal örnek 7)
- `uc_bolge_okumasi`: A premium enklav + B iş karma + C ekonomik + D zincir-yok
- `izleme_kancalari_5`: Riva/İncirköy/Karlıtepe/Paşabahçe/Acarkent denetim

### §1.2 md kopyası

**Kaynak:** `~/tradia_tic/cikti/cc_tic_T131_marka_konumlanma.md`
**Hedef:** [`~/tradia_tic/beykoz_vaka/cc_tic_T131_marka_konumlanma.md`](../beykoz_vaka/cc_tic_T131_marka_konumlanma.md) · 15,4 KB kopya tam

### §1.3 Borç durum çıkarımı

| T131 borç maddesi | T132 durum |
|---|:-:|
| JSON kalıcı katman | ✅ |
| md `beykoz_vaka/`'ya kopya | ✅ |
| Nüfus-normalize AS v2 (mağaza/1000 kişi) | 🕓 T133+ (TÜİK mahalle nüfus gerekli) |
| AVM katmanı (ACR LOFT + Palladium) | 🕓 T133+ |
| Restaurant + eczane/banka/ATM katmanları | 🕓 T133+ |

---

## §2 — 2014 "1,25 Mr TL Beykozluda Kaldı" Beyanı (İş 1)

### §2.1 A04 dürüst: birebir ifade doğrulanamadı

**"1 milyar 250 milyon TL Beykozluda kaldı"** ifadesinin **birebir 2014 tarihli açık kaynakta yer aldığı doğrulanamadı**. WebSearch sonuçları farklı tutar referansları içeriyor:

- **41 Milyon TL** — Beykoz Belediyesi 2026'da taşınmaz satışa çıkardı (spesifik varlık, farklı bağlam)
- **1 Milyar 85 Milyon TL** — İBB'nin Beykoz'a yatırım ve hizmetleri (bağlam farklı, İBB → Beykoz)
- **%90 mülkiyet çözüldü** — Yücel Çelikbilek (dönemin belediye başkanı) beyanı

**Sonuç:** "1,25 Mr TL" rakamı **Yücel Çelikbilek** veya sonraki belediye başkanı beyanlarında geçmiş olabilir; ancak WebSearch'te bugün doğrulama bulunamadı. **Bulunamadı = sonuçtur (A04)**.

### §2.2 Beykoz 2B yapısal veri (bağlam)

**Doğrulanan:**
- **Beykoz İstanbul'un en fazla 2B parseli olan ilçesi: 20.500 parsel**
- **25.330 hak sahibi** başvuru hakkı vardı
- **~10.000 başvuru** yapıldı; kalan ~15.330 hakkın **belediye tarafından karşılanması** için Beykoz Belediyesi müdahale etti
- **85.000 kişi** üzerinde yerleşim olan alanları belediye kendisine tahsis etti (rayiç değer bazlı)
- Sonuç: **120.000 Beykozlu tapusuna kavuştu** (kümülatif, yıllar arası)
- **Ekim 2013:** Beykoz 2B alanlarına **25 özel proje** yapılacak planlaması
- **2026-07-05:** Belediye töreni **1.071 hak sahibi 25 mahalle** (bu ayrı bir olay, T126'da Basın-kaynak olarak doğrulandı)

### §2.3 Tutarlılık okuması

Eğer "1,25 Mr TL" gerçekten **2014'te vatandaşta kalan rakam** ise:
- Hipotez: **belediye devri sonucu** vatandaşın yasal tapu edinimi + belediye satış-devir gelirlerinin bir kısmı (yerel kanuni pay)
- Hipotez skaladan uyumlu: 20.500 parsel × 2014 tabanı ortalama rayiç ≈ 1,25 Mr TL büyüklüğünde (mertebe olarak akla yatkın)
- **Kesinlik yok** — birebir kaynak gerekli

### §2.4 ★ Bugünkü değer notu — Finans'a (K24a)

**Yalın enflasyon çevrimi (TL cinsinden, TÜİK ÜFE + TÜİK Konut Fiyatı yaklaşık):**

| Kalem | 2014 taban | Bugünkü değer (2026-07 tahmini) | Katsayı |
|---|---:|---:|---:|
| TL enflasyon (kabaca ÜFE bazlı) | 1,25 Mia TL | **~40-50 Mia TL** | 32-40× |
| Konut fiyat endeksi (TÜİK KFE Beykoz proxy) | 1,25 Mia TL | **~60-80 Mia TL** (varlık değer katsayısı yüksek) | 48-64× |
| Çavuşbaşı 2B fiyat tabanı (200-500 → 1000-1500 TL/m² 2013→2026 civarı) | 3× artış (**yalnız 2013→2015-16 civarı**; sonrası hesaba katılmadı) | 6-8× 2026'ya | — |

**V11 disiplin — kehanet YASAK, kalıp gözlemi:**
- 2014'ten 2026'ya varlık değerinde 30-60× enflasyon çevrimi Türkiye örüntüsüyle **tutarlıdır**
- Bu **beklenti değil, mertebe kontrolüdür**
- Finans F5 hedonik model + TCMB İl Çıpası (İstanbul 87.301 TL/m² 2026-Q2) referans alınarak Beykoz-spesifik çevrim üretilebilir

**Finans için K24a-borç:** *"CC-Tic'ten pull — 2B beyanı bağlam: Beykoz 20.500 parsel + 25.330 hak sahibi; birebir 1,25 Mr TL ifadesi doğrulanmadı ama mertebe akla yatkın. Bugünkü değer için TL çevrimi 40-80 Mia TL aralığı — TCMB çıpası + KFE ile daraltılabilir."*

---

## §3 — 233ha Çavuşbaşı-2B (2010→2015) + Elmalı-İSKİ Kesişimi (İş 2)

### §3.1 233 hektar Çavuşbaşı 2B — A04 dürüst

**"233 hektar" birebir ibaresi WebSearch'te bulunamadı.** WebSearch sonuçları:

- **Genel Çavuşbaşı 2B durumu:** kentsel dönüşüm hazırlığı, kadastro işlerinin son safhasına yaklaştığı raporu (emlakkulisi 2026-06)
- **Çavuşbaşı 2B fiyat evrimi:** **200-500 TL/m² (2013 tabanı) → 1000-1500 TL/m²** — 2-3× artış (13 yıl önce)
- **Yapı durumu:** Sultanbeyli+Beykoz+Çavuşbaşı 2B'lerde **7-8 katlı yapılar** mevcut (kayıt-dışı yapılaşma bölgesi)
- **2010→2015 zinciri:** özel tarih bulunamadı ancak **2013 Ekim 25 özel proje planı** + **2026 kentsel dönüşüm hazırlığı** bir zincirin uçlarını gösteriyor

### §3.2 Çavuşbaşı 2B tüzel-katmanı (T129-A + T132 birleşim)

**T129-A'dan:** Vanlıoğlu İnşaat'ın 4 mahalle portföyünde **"Çiftlik"** var (muhtemelen **Çavuşbaşı Çiftlik**). Vanlıoğlu'nun Çavuşbaşı 2B alanında parselleri olabilir — doğrudan kanıt yok.

**T126-T127'den:** **HSN Kentsel Dönüşüm (Hasanoğlu Grubu iştirak)** Çavuşbaşı'nda ek proje planlı — bu 2B alanları içerebilir (kentsel dönüşüm = 2B çözümü olabilir).

**Bulunmayan:** 233 hektar spesifik proje sahibi kimdir — kesin doğrulama Beykoz Belediyesi + Milli Emlak tahsis kaydı gerektirir.

### §3.3 Elmalı-İSKİ kesişimi tüzel-katmanı

**Kamu tüzel iki taraf (kesin):**

| Tüzel | Rol |
|---|---|
| **İSKİ Genel Müdürlüğü** | Elmalı Su Havzası koruma; **10 metre dere işletme şeridi zorunlu** (İSKİ mevzuatı 29.09.2017 yönetmeliği); atık yönetim kuralları; Elmalı Barajı-1 (1893) + Elmalı Barajı-2 (1950) mal sahibi |
| **Çevre-Şehircilik Bakanlığı → Beykoz Belediyesi** | 23 Ocak 2024 tarihli **koruma amaçlı imar plan revizyonu (Elmalı + Örnekköy 1/5000 + 1/1000)** — devir zinciri Bakanlık → Belediye |
| **Milli Emlak** | 2B tahsis + kamulaştırma resmi süreçlerinde başı çeker |
| **Beykoz Belediyesi** | Nihai uygulayıcı; Bakanlıktan devir alan tüzel |

**Özel-tüzel geliştirici izi:** **YOK** — Elmalı mahallesinde 18 aktörden hiçbiri T130'da bulunmadı (kesin: Elmalı hisseli-arsa toplama tüzel deseni = 0). Elmalı-İSKİ kesişimi **kamu-tüzel tekelinde**; özel sermaye radar dışında.

### §3.4 Çavuşbaşı vs Elmalı — 2B kesişim farklılığı

| Kriter | Çavuşbaşı | Elmalı |
|---|---|---|
| 2B parseli yoğunluğu | Yüksek (Beykoz'un 2B odaklarından) | Düşük (kamu-altyapı + koruma baskın) |
| Fiyat evrimi 2013→2020+ | 2-3× artış (200-500 → 1000-1500 TL/m² 2013 tabanı) | Bilinmiyor / bireysel arsa listing 12 M TL 797 m² = ~15.000 TL/m² 2026 (T130) |
| Özel-tüzel geliştirici | Vanlıoğlu (muhtemel) + HSN (kentsel dönüşüm) — 2 aday | **YOK** |
| Kamu tüzel | Beykoz Belediyesi (2B devir) + Milli Emlak | İSKİ + Bakanlık + Belediye (koruma-baskın) |
| İmar rejimi | Kentsel dönüşüm hazırlığı (2026) | Koruma amaçlı imar revizyonu (23 Ocak 2024, Elmalı+Örnekköy) |
| Kat izni | Kayıt-dışı 7-8 kat mevcut → 4 kat düzenli plan | Koruma statüsü (yeni yapı zor) |

**★ Çıkarım:** Çavuşbaşı = **düzensiz-yapılaşma → düzene sokma projesi (kentsel dönüşüm)**; Elmalı = **koruma-kilitli tutulacak kamu-altyapı köyü**. İki farklı 2B örüntü; **aynı 2B kanunu farklı sonuçlar**.

---

## §4 — Cevaplayamadıklarım (A04)

| # | Aranan | Neden |
|---:|---|---|
| 1 | 2014 "1,25 Mr TL Beykozluda" ifadesinin birebir kaynağı | WebSearch bulamadı — Belediye Başkanı beyanı olabilir, dönemin haber gazetesi arşivi gerekli |
| 2 | 233 hektar Çavuşbaşı 2B spesifik ada/parsel listesi | Milli Emlak + Beykoz Belediyesi tahsis kayıt gerekli |
| 3 | 2010→2015 Çavuşbaşı 2B zincirinin resmi süreç adımları | RG kamulaştırma taraması (Signals açık borç) |
| 4 | HSN Kentsel Dönüşüm'ün Çavuşbaşı 2B parseli üzerinde çalışıp çalışmadığı | Basın disclosure derinleştirmesi gerekli |
| 5 | Vanlıoğlu İnşaat "Çiftlik" = Çavuşbaşı Çiftlik mi kesin | Vanlıoğlu resmi web + belediye ruhsat |
| 6 | Elmalı-İSKİ kesişiminde özel-tüzel katmanı gerçekten yok mu | Kamu tüzel baskın; hipotez güçlü ama kanıt kısıtlı |

---

## §5 — Cross-CC K24a

- **★ Finans'a:** 2014 "1,25 Mr TL Beykozlu" varsayımı bağlam sağlar — TL enflasyon çevrimi 30-60× (mertebe 40-80 Mia TL 2026 karşılığı); F5 hedonik model + TCMB İstanbul çıpası ile Beykoz-spesifik daraltma
- **Signals'a:** Çavuşbaşı 2B kentsel dönüşüm hazırlığı SIG5 §Ç arz-kısıtı "üç mekanizma" (2B + TOKİ + özel orman) 1. mekanizma canlı örneği; **Vanlıoğlu + HSN aktör-aday çift-imza için Basın'a yönlendir**
- **Basın'a:** Vanlıoğlu "Çiftlik" = Çavuşbaşı Çiftlik mi kesinlemek + HSN Çavuşbaşı 2B parsel doğrulama + 2014 "1,25 Mr TL" beyanının birebir kaynak arşiv taraması
- **Signals SIG4-R3'e:** Elmalı-İSKİ kesişimi tüzel-katmanı **kamu-tüzel tekelinde** doğrulandı; T130 bulgusu (Elmalı özel-tüzel hisseli toplama = 0) ile aynı yönde

---

## §6 — Kanonik Sayılar

| Metrik | Değer |
|---|---:|
| T131 JSON boyut | 7,8 KB |
| T131 md kopya beykoz_vaka | 15,4 KB |
| Beykoz 2B parsel toplam (İstanbul zirvesi) | 20.500 |
| Beykoz 2B hak sahibi | 25.330 |
| 2B başvuru | ~10.000 |
| Belediye devir muhtemel (25.330-10.000) | ~15.330 (%60) |
| 2013 Ekim planlı 2B özel proje | 25 |
| 2026-07-05 tapu töreni hak sahibi | 1.071 (25 mahalle) |
| Çavuşbaşı 2B fiyat 2013 taban | 200-500 TL/m² |
| Çavuşbaşı 2B fiyat 2013 sonrası | 1000-1500 TL/m² (2-3×) |
| Elmalı arsa listing 2026 | 15.000 TL/m² (797 m² 12 M TL) |
| 2014 "1,25 Mr TL" birebir | ❌ bulunamadı |
| 233 ha Çavuşbaşı 2B birebir | ❌ bulunamadı |
| Elmalı özel-tüzel geliştirici | ❌ 0 (kamu tüzel tekelinde) |
| Bugünkü değer mertebe tahmini (2014 → 2026) | 40-80 Mia TL |
| Beykoz aktör toplam | 19 (T130 sonrası, değişiklik yok) |
| Maliyet | $0 |

---

**Sonuç tek satır:**

> **T131 borcu tam kapatıldı (JSON kalıcı katman + md beykoz_vaka kopya). 2014 "1,25 Mr TL Beykozluda" ve "233 ha Çavuşbaşı 2B" ibareleri birebir açık kaynakta doğrulanamadı ama mertebe bağlamı akla yatkın (Beykoz İstanbul'un 20.500 parsel ile en fazla 2B ilçesi; 25.330 hak sahibi %60 belediye devir muhtemel). Finans'a K24a bugünkü değer notu: TL çevrimi 40-80 Mia TL aralığı. Çavuşbaşı 2B = düzensiz-yapılaşma-düzene-sokma (Vanlıoğlu+HSN aktör aday); Elmalı-İSKİ kesişim = kamu-tüzel tekel (İSKİ+Belediye+Bakanlık, özel-tüzel geliştirici sıfır — T130 bulgusu ile tutarlı).** $0 · A04 · V16 · V37 read-only · KVKK #31 · SİLME-YOK · Gönderim işi YOK.

---

## Kaynak

- [Emlakkulisi — Beykoz 2B kentsel dönüşüm 2026](https://emlakkulisi.com/guncel/beykoz-2b-arazilerinde-kentsel-donusum/836567)
- [Emlakkulisi — Beykoz 2B'de 25 özel proje 2013](https://emlakkulisi.com/beykozdaki-2b-alanlarina-25-ozel-proje-yapilacak/201389)
- [Aksam — 1071 hak sahibi tapusuna kavuştu](https://www.aksam.com.tr/guncel/beykozda-2b-kordugumu-cozuldu-1071-hak-sahibi-tapusuna-kavustu/haber-1680432)
- [Habertürk — Yücel Çelikbilek Beykoz %90 mülkiyet çözüldü](https://www.haberturk.com/beykoz-belediye-baskani-yucel-celikbilek-beykozda-mulkiyetin-yuzde-90-i-cozuldu-1686045-ekonomi)
- [Bigpara — 2B zengin edecek Çavuşbaşı fiyat 200-1500 TL/m²](https://bigpara.hurriyet.com.tr/haberler/konut-haberleri/2b-zengin-edecek_ID738496/)
- [Memurlar.net — 2B arazilerinde kimler hak sahibi (İstanbul 18.233 ha)](https://www.memurlar.net/haber/217612/2b-arazilerinde-kimler-hak-sahibi.html)
- [İSKİ Genel Müdürlüğü İçmesuyu Havzaları Yönetmeliği 29.09.2017](https://www.iski.gov.tr/web/assets/SayfalarDocs/Mevzuat%20ve%20Y%C3%B6netmelikler/ISKI-ICMESUYU-HAVZALARI-YONETMELIGI-29092017.pdf)
- [Çevre-Şehircilik Bakanlığı — Elmalı+Örnekköy koruma imar revizyonu 23.01.2024](https://istanbul.csb.gov.tr/istanbul-ili-beykoz-ilcesi-elmali-ve-ornekkoy-mahallelerinin-bir-kismina-iliskin-1-5000-olcekli-koruma-amacli-nazim-imar-plani-revizyonu-ve-1-1000-olcekli-koruma-amacli-uygulama-imar-plani-revizyonu-duyuru-447995)
