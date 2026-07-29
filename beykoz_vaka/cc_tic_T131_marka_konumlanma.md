# cc_tic_T131 — MARKA-KONUMLANMA TABLOSU (Ticari-Zincir Katmanı)

**Tarih:** 2026-07-28 · **Sprint:** T131
**Görev:** Beykoz mahallelerinde zincir mağaza konumlanması → kitle-profil okuması; bölge-datasına kalıcı katman + AS-metrik ticari-zincir formatı
**Disiplin:** $0 · A04 · V16 · V37 read-only · KVKK #31 (yalnız tüzel/marka)

---

## 0. Otuz Saniyede

**V16 dürüst not:** Patron mesajında "S94 market verisi" atıfı Sosyal S94 sprint'inde **market/zincir verisi bulunmadı** — Sosyal S94 emlak-firma keşif turudur (Mersin/Muğla/Çanakkale/K.maraş/Van/İskenderun 6 hat). Bu turda market-zincir verisi **açık kaynaktan bağımsız** kuruldu.

**Ana bulgu:** Beykoz'da **8 zincir × 9 mahalle** matrisi konumlandı. Beykoz'un ticari-zincir haritası **üç bölgeye ayrılıyor:**
1. **Acarlar (Acarkent):** Premium tekel (Macrocenter + MM Migros ACR LOFT)
2. **Kavacık:** Orta-üst denge (M Migros + CarrefourSA Super + A101) — iş merkezi profili
3. **Boğaz hattı + kırsal** (Çubuklu/Paşabahçe/Gümüşsuyu/İncirköy/Merkez/Riva/Soğuksu): **Ekonomik ağırlıklı** (BİM/A101/ŞOK); premium zincir YOK

**AS-metrik ticari-zincir** (Ayırt-edici Skor) formülü tanımlandı — bölge-datasına kalıcı katman.

---

## §1 — S94 Kaynak Denetimi (V16 Dürüst)

**Aranan:** "S94 market verisi"
**Bulunan:** [`~/tradia_konusmalar/data/hafiza_bildirim_ccsosyal_s94.json`](../../tradia_konusmalar/data/hafiza_bildirim_ccsosyal_s94.json) — **CC-Sosyal S94** emlak-firma keşif turu (2026-06-12, 6 hat: Mersin/Muğla/Çanakkale/K.maraş/Van/İskenderun). **Market/zincir verisi YOK.**

**A04 karar:** Patron atıfı Sosyal S94'e denk gelmiyor. Bu turda market-zincir verisi **açık kaynak (WebSearch)** üzerinden bağımsız kuruldu. Patron'un kastettiği başka bir CC/sprint varsa (örn. Basın S94 veya farklı Sosyal sprint), sonraki turda pull-borç.

---

## §2 — Mahalle × Zincir Matris (Açık Kaynak)

### §2.1 Ham matris (● = doğrulanmış mağaza; sayı = mağaza sayısı)

| Mahalle | Macrocenter | MM Migros | M Migros | CarrefourSA | BİM | A101 | ŞOK | File |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **Acarlar** (Acarkent) | **●●** | **●** ACR LOFT | · | · | · | · | · | · |
| **Kavacık** | · | · | **●** Orhan Veli Kanık | **●** Super | · | **●** | · | · |
| **Çubuklu** | · | · | · | · | **●●** Boğaziçi + Kireç Ocağı | · | · | · |
| **Paşabahçe** | · | · | · | · | **●** Barbaros | · | · | · |
| **Gümüşsuyu** | · | · | · | · | **●** Gümüşsuyu Cd. | **●** Sultaniye Cd. 71 | **●** | · |
| **İncirköy** | · | · | · | · | **●** Fıstık Altı Sk. | · | **●** | · |
| **Merkez** | · | · | · | · | · | · | **●** | · |
| **Riva** | · | · | · | · | · | **●** | · | · |
| **Soğuksu** | · | · | · | · | · | **●** Mehmet Akif Ersoy 81 | · | · |

**Toplam:** 9 mahallede **~15 zincir noktası** doğrulandı. Diğer 36 Beykoz mahallesinde bu turda **zincir marker açık kaynakta çıkmadı** (soğuk-21 dahil; bunlarda muhtemelen mahalle bakkalı + minimarket düzeyi baskın, zincir yok).

### §2.2 Zincir segment tanımı (Türkiye perakende genel)

| Segment | Zincir | Kitle profili |
|---|---|---|
| **★ Premium+** | Macrocenter | Üst-üst gelir, gurme, ithal ürün ağırlıklı |
| **Premium/orta-üst** | MM Migros, CarrefourSA Super | Üst-orta, taze/organik geniş |
| **Orta** | M Migros | Orta gelir, standart karma |
| **Ekonomik** | BİM, A101, ŞOK, File | Alt-orta ve alt gelir, ürün sınırlı, ucuz |
| **Convenience** | Migros Jet | Küçük ölçekli mahalle-ihtiyaç, kolay-erişim |

Bu segment mantığı Migros grubunun kendi hiyerarşisiyle uyumlu: **Migros → Migros Jet (1.186) → M Migros (539) → MM Migros (159) → MMM Migros (?) → Macrocenter (123)**; sağa gittikçe premium/format büyür.

---

## §3 — Kitle-Profil Okuması (Bölge-Profil Teyidi)

### §3.1 Üç bölge tanımı

**Bölge A — Premium enklav: Acarlar/Acarkent**

Zincir profili: **Macrocenter (2 lokasyon) + MM Migros ACR LOFT** = premium tekel; ekonomik zincir **yok**. Bu, Acarkent'in kapalı-lüks-site profili (1.452 villa + 600 daire, güvenlikli 2,6M m²) ile birebir örtüşür.

**Bölge B — İş merkezi karışım: Kavacık**

Zincir profili: **M Migros + CarrefourSA Super + A101** = orta-üst orta-ekonomik karma; premium yok, ekonomik var. Bu, Kavacık'ın **iş-yaşam karma zonu** (BEYKOZ ilçesinin en yoğun 9-19 kat bina konsantrasyonu: 121 binadan 87'si Kavacık'ta — Signals master §1) profili ile uyumlu. Ofis çalışanları (öğle) + rezidans sakinleri (akşam) iki kitle bir arada.

**Bölge C — Boğaz + kırsal ekonomik: Çubuklu, Paşabahçe, Gümüşsuyu, İncirköy, Merkez, Riva, Soğuksu**

Zincir profili: **BİM, A101, ŞOK baskın; premium ve orta-üst zincir yok.** Gümüşsuyu tek istisna (3 ekonomik zincir bir arada — mahalle yoğunluk göstergesi). Bu, Boğaz sahili + kuzey kırsal koridorun **yerleşik-orta-alt gelir + tarihi-yerli nüfus** profili ile uyumlu.

**Bölge dışı — Zincir yok**

45 mahallenin **~36'sında** zincir marker açık kaynakta bulunmadı. Bu grup:
- **SOĞUK-21 mahalleleri** (T129-A + T130) — Elmalı, Bozhane, Poyrazköy, Anadolu Feneri, Öğümce vb.
- Yaygın kırsal-köy + doğal SİT alanlar
- Nüfus/hane sayısı düşük → zincir eşiği geçmiyor

**Yorum:** Zincir marker'ın olmaması **fiili durum**; mahalle bakkalı + minimarket + yerel manav düzeyi baskın. Bu, bu mahallelerin **kurumsal-perakende radarın dışında** olduğunun bir doğrulaması.

### §3.2 Bölge profil × Beykoz aktör tablosu çapraz-okuma

| Bölge | Zincir profili | Aktör tablosu (T125-T130) | Çapraz doğrulama |
|---|---|---|---|
| Bölge A (Acarlar/Acarkent) | Premium tekel | ⚠️ Aktör YOK (Acarkent yönetim ayrı; Acarlar Grubu bilinen kurucu; Signals T128'de 316/4 kat-irtifak keşfi) | 🟢 **Premium konut ↔ premium zincir** birbirini destekliyor |
| Bölge B (Kavacık) | Orta-üst karma | Anele showroom 2016 (Signals SIG1) + 87 GYODER üye çoğu Kavacık ofis-adresli | 🟢 **İş merkezi ↔ karma zincir** tutarlı |
| Bölge C-1 (İncirköy) | Ekonomik | **Çelikler Taahhüt 117 dönüm** + **Envoy Vadi 65 dönüm** | ⚠️ **Yatırım gelmiş ama zincir hâlâ ekonomik** — projelerin bittiği tarihte (2028+) Macrocenter/CarrefourSA gelmesi beklenir; şu an gecikme normali |
| Bölge C-2 (Riva) | A101 tek | **EKGYO 708 konut + Kalyon 1.300 villa + İon 933 birim** | ⚠️ **En büyük 3 mega proje ama zincir haritası dahi 1 A101** — proje-teslim öncesi zincir gecikmesi çok belirgin |
| Bölge C-3 (Paşabahçe) | BİM tek | **Torunlar Tekel 3 parsel karma proje (2028 otel)** | ⚠️ Aynı örüntü — proje-öncesi ekonomik zincir |
| Bölge C-4 (Gümüşsuyu) | 3 ekonomik zincir | **NEF + Akiş 32 parsel + HSN + Toya = 4 mega geliştirici** | 🟢 Nüfus yoğunluğu zincir sayısıyla uyumlu; **premium zincir gecikmesi izlenmeli** — 2027-2028 Karlıtepe teslim döngüsünde bir Macrocenter/MM Migros açılabilir |
| Bölge C-5 (Soğuksu) | A101 tek | Sur Yapı 10+ yıl beklemede | 🟢 **Beklemede proje ↔ minimum zincir** tutarlı |
| Bölge C-6 (Merkez) | ŞOK tek | Signals §1 en yoğun tarihi merkez ama Tic aktör yok | 🟢 **Yerleşik-eski nüfus ↔ ekonomik zincir** |

**★ Öngörü çerçevesi (V11 kehanet YASAK — sadece kalıp-gözlemi):**

- Proje-yoğun mahallelerde (Riva, İncirköy, Gümüşsuyu-Karlıtepe) **zincir kompozisyonu şu an ekonomik**; teslim sonrası (2027-2028) premium zincirin girmesi Türkiye örüntüsüyle **uyumlu olur**. Bu **beklenti değil, izleme kancasıdır**.

---

## §4 — AS-Metrik "Ticari-Zincir" Formatı

Bölge-datasına **kalıcı katman** olarak eklenmesi önerilen skor. AS = **Ayırt-edici Skor**.

### §4.1 Formül

```
AS_ticari_zincir(mahalle) = 
    3 × (Premium+ zincir sayısı)     [Macrocenter]
  + 2 × (Premium/orta-üst zincir)    [MM/MMM Migros, CarrefourSA Super]
  + 1.5 × (Orta zincir)              [M Migros]
  + 1 × (Ekonomik zincir sayısı)     [BİM, A101, ŞOK, File]
  + 0.5 × (Convenience zincir)       [Migros Jet]
```

### §4.2 T131 hesap sonuçları

| Mahalle | Premium+ | Premium/orta-üst | Orta | Ekonomik | AS |
|---|:-:|:-:|:-:|:-:|---:|
| **Acarlar** | 2 | 1 | 0 | 0 | **8,0** |
| **Kavacık** | 0 | 1 | 1 | 1 | **4,5** |
| **Gümüşsuyu** | 0 | 0 | 0 | 3 | **3,0** |
| **Çubuklu** | 0 | 0 | 0 | 2 | **2,0** |
| **İncirköy** | 0 | 0 | 0 | 2 | **2,0** |
| **Paşabahçe** | 0 | 0 | 0 | 1 | **1,0** |
| **Merkez** | 0 | 0 | 0 | 1 | **1,0** |
| **Riva** | 0 | 0 | 0 | 1 | **1,0** |
| **Soğuksu** | 0 | 0 | 0 | 1 | **1,0** |
| Diğer 36 mahalle | 0 | 0 | 0 | 0 | **0,0** |

**AS dağılım:** Acarlar (8,0) tek başına ilçe zirvesi; Kavacık (4,5) 2. sıra; sonrası hep ≤3 (ekonomik ağırlıklı) veya 0 (zincir yok).

### §4.3 Yorum kuralı (V11 disiplin)

- **AS ≥ 6:** Premium enklav (Acarlar)
- **AS 3-5,9:** İş/karma bölge (Kavacık)
- **AS 1-2,9:** Ekonomik-ağırlıklı yerleşim
- **AS = 0:** Kırsal/kurumsal radar dışı

**Kural:** AS **fiyat öngörüsü değil, kitle-profil sınıflandırmasıdır**. Bir mahallenin AS'i yüksek olması "fiyatı artar" demek değil; **bugünkü konumlanmayı özetler**. Fiyat için ayrı metrik (Signals SIG5 §Ç, Finans F5) referans alınır.

### §4.4 JSON kalıcı katman şablonu

Önerilen dosya: [`~/tradia_tic/veri/beykoz_mahalle_zincir_v1.json`](../veri/beykoz_mahalle_zincir_v1.json) (T131 bu sprintte doldurmuyor, T132 yazım turunda)

```json
{
  "surum": "v1.0-T131",
  "tarih": "2026-07-28",
  "kaynak_disiplin": "$0 · A04 · Cross-Hat pull-only",
  "kaynak": ["Migros mağaza katalog", "BİM İstanbul bayileri", "CarrefourSA + Foursquare + Yandex Maps"],
  "AS_formul_v1": "3P+ + 2*Premium + 1.5*Orta + 1*Ekonomik + 0.5*Convenience",
  "mahalleler": {
    "Acarlar": {"AS": 8.0, "profil": "premium-enklav", "zincirler": ["Macrocenter x2", "MM Migros ACR LOFT"]},
    "Kavacık": {"AS": 4.5, "profil": "iş-karma", "zincirler": ["M Migros Orhan Veli Kanık 106", "CarrefourSA Super", "A101"]},
    "Gümüşsuyu": {"AS": 3.0, "profil": "ekonomik-yoğun", "zincirler": ["BİM Gümüşsuyu Cd.", "A101 Sultaniye Cd. 71", "ŞOK"]},
    "Çubuklu": {"AS": 2.0, "profil": "ekonomik", "zincirler": ["BİM Boğaziçi Cd. 32", "BİM Kireç Ocağı Cd. 36/A"]},
    "İncirköy": {"AS": 2.0, "profil": "ekonomik", "zincirler": ["BİM Fıstık Altı Sk.", "ŞOK"]},
    "Paşabahçe": {"AS": 1.0, "profil": "ekonomik-tek", "zincirler": ["BİM Barbaros Cd. 2"]},
    "Merkez": {"AS": 1.0, "profil": "ekonomik-tek", "zincirler": ["ŞOK"]},
    "Riva": {"AS": 1.0, "profil": "ekonomik-tek", "zincirler": ["A101"]},
    "Soğuksu": {"AS": 1.0, "profil": "ekonomik-tek", "zincirler": ["A101 M.A.Ersoy 81"]}
  },
  "izleme_kancalari": {
    "Riva_premium_gecikme": "EKGYO+Kalyon+İon teslim 2027-2028 sonrası Macrocenter/MM Migros aç.",
    "Karlıtepe_premium_gecikme": "NEF+Akiş+HSN+Toya teslim sonrası aynı",
    "İncirköy_premium_gecikme": "Çelikler+Envoy teslim sonrası aynı",
    "Paşabahçe_premium_gecikme": "Torunlar Tekel 2028 otel açılış + rezidans → premium zincir",
    "Acarkent_denetim": "Macrocenter ayakta kalıyor mu?"
  }
}
```

---

## §5 — Cevaplayamadıklarım (A04)

| # | Aranan | Neden |
|---:|---|---|
| 1 | "S94 market verisi" atıfının kaynağı | Sosyal S94 emlak-firma keşif; başka CC/sprint kastediliyor olabilir |
| 2 | Bütün Migros/BIM/A101/ŞOK/CarrefourSA/File Beykoz mağaza tam listesi | Kurumsal API kullanılmadı; 3 WebSearch turu ~15 nokta ile sınırlı |
| 3 | Diğer 36 mahallede zincir gerçekten yok mu | Açık web'te "yok" — mahalle bakkalı ölçeği izlenmiyor |
| 4 | Migros Jet Beykoz noktaları | Bu turda çıkarılmadı |
| 5 | AVM ölçeği (ACR LOFT + Palladium Beykoz?) | Ek pull-borç |
| 6 | Nüfus-normalize AS-metrik (mağaza/1000 kişi) | TÜİK mahalle-nüfus verisi + normalizasyon T132 |

---

## Cross-CC K24a

- **Signals'a:** AS-metrik ticari-zincir SIG3 8-ayaklı ısı haritasına **9. ayak** olarak eklenebilir; Acarlar (8,0) + Kavacık (4,5) mevcut sıcaklık sıralamasını doğruluyor.
- **Finans'a:** Kitle-profil × fiyat ilişkisi F5 hedonik modelinde bir kontrol değişkeni olabilir (AS_ticari_zincir); Kavacık'ın orta-üst zincir varlığı fiyat priminde açıklayıcı olabilir.
- **Sosyal'a:** "S94 market verisi" atıfı hangi sprintten geldi teyit-sorusu; Sosyal S94 emlak-firma, market değil.
- **Basın'a:** Riva/İncirköy/Karlıtepe/Paşabahçe teslim sonrası premium zincir açılış izleme kancası — bu ilk fiziksel-yatırım göstergesi olabilir.

---

## Kanonik Sayılar

| Metrik | Değer |
|---|---:|
| Doğrulanan zincir mağaza sayısı | ~15 |
| Zincir bulunan mahalle sayısı | 9 |
| Zincir bulunmayan mahalle sayısı | ~36 |
| AS-metrik zirve mahalle | Acarlar (8,0) |
| AS-metrik 2. sıra | Kavacık (4,5) |
| Premium+ (Macrocenter) tek konsantrasyon | Acarlar |
| Ekonomik zincir yoğun mahalle | Gümüşsuyu (3 zincir) |
| Proje-yoğun ↔ zincir-ekonomik uyuşmazlık | 4 mahalle (Riva/İncirköy/Karlıtepe-Gümüşsuyu/Paşabahçe) — teslim-öncesi gecikme örüntüsü |
| Formül | AS = 3P+ + 2*Premium + 1.5*Orta + 1*Eko + 0.5*Conv |
| Maliyet | $0 |

---

**Sonuç tek satır:**

> **Beykoz'un ticari-zincir haritası üç bölge: Premium enklav Acarlar (AS 8,0 · Macrocenter+MM Migros tekel), iş-karma Kavacık (AS 4,5 · M+CarrefourSA+A101), ekonomik ağırlıklı Boğaz+kırsal (AS 1-3, 7 mahalle BİM/A101/ŞOK baskın); diğer 36 mahalle zincir marker yok (SOĞUK-21 dahil, mahalle-bakkal ölçeği baskın). Proje-yoğun 4 mahallede (Riva/İncirköy/Karlıtepe/Paşabahçe) zincir kompozisyonu HÂLÂ ekonomik — teslim sonrası (2027-2028) premium zincir izleme kancası kuruldu. AS-metrik formülü bölge-datasına kalıcı katman olarak önerildi (JSON şablonu §4.4).** $0 · A04 · V16 · V37 read-only · KVKK #31 · SİLME-YOK · Gönderim işi YOK.

---

## Kaynak

- [Migros Kavacık M şubesi — Orhan Veli Kanık Cd. 106](https://www.okatalog.com/istanbul-migros-kavacik-istanbul-m-migros-subesi-adresi-68758)
- [Macrocenter Acarlar — 9. Cad. No: 9 (Foursquare)](https://tr.foursquare.com/v/macrocenter/4bee7bd2d355a59309ec0a60)
- [Macrocenter Acarkent Şubesi (Bulurum)](https://www.bulurum.com/details/_ace3c2ebb0ha_7f4f567j5abd366j3j)
- [MM Migros ACR LOFT — Acarlar Polonez Bağlantı Yolu 2 (Migros kurumsal katalog)](https://www.migroskurumsal.com/userfiles/file/guncel_elektronik_atik_magaza_listesi.pdf)
- [CarrefourSA Super Kavacık](https://www.okatalog.com/istanbul-carrefoursa-super-istanbul-kavacik-adresi-25701)
- [BİM Beykoz İstanbul bayileri (kurumsal)](https://www.bim.com.tr/Categories/104/magazalar.aspx?CityKey=34&CountyKey=1185)
- [A101 Soğuksu Beykoz — M.A. Ersoy Cd. 81](https://turkce-brosurler.com/beykoz/a101/soguksu-mah-mehmet-akif-ersoy-cad-no-81-beykoz)
- [A101 Beykoz şubeleri (okatalog)](https://www.okatalog.com/a101-subeleri-beykoz-istanbul)
- [ŞOK Beykoz şubeleri (okatalog)](https://www.okatalog.com/sok-subeleri-beykoz-istanbul)
- [Wikipedia — Migros grubu format hiyerarşisi](https://en.wikipedia.org/wiki/Migros_(Turkey))
- [Wikipedia — File şirket (BİM iştirak 2015)](https://en.wikipedia.org/wiki/File_(company))
