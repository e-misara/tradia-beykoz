# CC-Signals · SIG2 — BEYKOZ ÖRNEK DOSYA (çift-kanıt)

**Sprint:** SIG2 · **Tarih:** 2026-07-26 · **Üreten:** CC-Signals (3. katman — istihbarat + çapraz kontrol)
**Girdi:** 3. ve 4. tur raporları (14 belge) **+ ham JSON/JSONL** · SIG1 defekt-raporunun karşılığı
**Kural:** Örnek dosyaya giren **her iddia 2+ bağımsız kaynakla** doğrulanmıştır. Tek kaynaklılar ayrı listede **İZLENEN** olarak durur.
**Disiplin:** $0 · A04 · V16 · #18 · #21-A/B · #31 KVKK · #34 · SİLME-YOK · salt-okuma
**Denetleyen:** CC-Signals (çapraz kontrol katmanı) — *ama §V16'ya bakınız: kendi ürettiğim §G3/G4 tablolarını denetleyemem.*

---

# G1 — DÜZELTME RE-TEYİT: SIG1'in 10 defekti ne oldu?

## 1.1 Önce bir düzeltme — Patron'un varsayımına

> **Talepte:** *"MAP27 net=0 temizledi (%99→%47) → ısı haritanı bu YENİ kapsamla yeniden hesapla, eski %99 tabanlı skorların GEÇERSİZ."*

**SIG1'in ısı haritası hiçbir zaman %99 kapsama dayanmadı.** SIG1 §1.1'deki UYDU kuralı şuydu: *"net ≥ +2,0 puan **ve** güven ≥ orta **ve ölçüm gerçek**"* — yer-tutucu satırlar **zaten dışlanmıştı**; defekti bu dışlama sırasında buldum. MAP27 o kuralı **doğruluyor**, geçersiz kılmıyor.

✅ **Doğru olan:** SIG1 skorları geçersiz — ama **MAP27 yüzünden değil.** Skorları değiştiren şey 3.–4. turun **yeni verisidir**: İ61'in Türk-Alman parse düzeltmesi (Çubuklu 4→19), İ62'nin bakım/gelişim ayrımı, S48'in 3.293 kayıtlık fiyat katmanı, S57'nin 2 yeni sermaye aktörü, TTA96/97'nin gerçek bina+POI+deprem rakamları. **Yeniden hesaplandı → §G3.**

## 1.2 SIG1'in 10 defekti — durum tablosu

| # | SIG1 defekti | Kim işledi | Durum |
|---|---|---|---|
| **Ç1** | TT-MAP'te 31/45 satırda `net 0.0` ölçüm değil, WorldCover yer-tutucusu | **MAP27** | ✅ **DOĞRULANDI + AŞILDI** — defekt yalnız Beykoz'da değil: **ulusal 2012 kayıt**. `netfark_gecerli` overlay eklendi (SİLME-YOK, yedek var). MAP23'ün kapsam iddiası **%99 → %47** düzeltildi. *TT-MAP: "Signals bunu yakaladı, ben kaçırmıştım."* |
| **Ç2** | İhale'nin yayımlanan mahalle tablosu kendi ham çözümüyle uyuşmuyor (Çubuklu gizli kalmış) | **İ61** | ✅ **DOĞRULANDI + KÖKENİ BULUNDU** — sebep benim sandığımdan büyük: kaynak metinde `Türk- Alman` (tireden sonra boşluk) tesis-eşlemesini kaçırıyormuş. Düzeltilince **Çubuklu 4 → 19**. Benim bulduğum 10, gerçek 19. |
| **Ç3** | Basın'ın 1 numaralı mahallesi "Cumhuriyet **Başsavcılığı**" yanlış-pozitifi | — | ❌ **İŞLENMEDİ** — S80/S81'de aynı 4 kayıt duruyor. **SIG2 kendi hesabında yine elledi (4 kayıt elendi).** 🟢 *Ama bağımsız doğrulama geldi:* İ61 kendi tarafında **aynı deseni** buldu ve düzeltti (`merkez` 6→1 "Veri Merkezi"nden, `fatih` 5→0 başka ilçe okulundan, `emniyet` 1→0 İller Bankası Ankara adresinden). **İki CC'de aynı hata sınıfı → bu bir Standing kuralı adayı (§G5-2).** |
| **Ç4** | S47'nin "eski tarama atlamış" kararı kanıtlanmadı; pencereler farklı | **S49** | ✅ **KESİN ÇÖZÜLDÜ — SIG1 haklı.** Ortaçeşme'nin 21 ilanının **21/21'i Haziran-Temmuz 2026**, Şubat-Mayıs'ta **0**. CC-Analiz: *"SIGNALS HAKLI · BEN (S47) YANILDIM."* Tez değişti: tutulan stok değil **yeni arz akışı**. |
| **Ç5** | "Kavacık ilçenin en ucuzu" n=6'dan çıkmış | **S48/S49** | ✅ **DÜŞTÜ** — Kavacık n=81 ile **101.724 TL/m²**, orta sıra. Daha ucuzu: Ortaçeşme 59.091 · İncirköy 62.500 · Yalıköy 97.222 · Yavuz Selim 101.095. |
| **Ç6** | Pozitif çapraz doğrulama (Acarlar/Riva iki kaynakta %10 içinde) | **S49** | ✅ **ZAMAN SERİSİNE DÖNÜŞTÜ** — sistemde ilk kez iki dönemli medyan (§G4-4). |
| **Ç7** | "Tapu kanalı YOK" değil, "1071 hak sahibi tapu" olayı okunmadı | — | ❌ **İŞLENMEDİ** — Basın S80/S81 gövdeyi hâlâ okumadı. **Hangi statü, kaç parsel, hangi mahalle: bilinmiyor.** Sipariş #4'te duruyor. |
| **Ç8** | `haber_akis` kayıtlarının 4'ünde tarih = hasat zamanı | — | ❌ **İŞLENMEDİ** — ama S80 ay-dağılımı getirdi (2026-01→07), momentum ekseni yine de genişledi. |
| **Ç9** | İ60 kanon-dışı mahalle üretti (emniyet, kaşgarlı, serviburnu, küçüksu) | **İ61/İ62** | 🟡 **KISMEN** — `emniyet` ve `kaşgarlı` temizlendi ✅; **`serviburnu` + `küçüksu` duruyor**, üstelik İ62 **`kabakoz`** ekledi — üçü de 45'lik kanonda yok. |
| **Ç10** | Mahalle adı kanonu yok, join elle alias ile yapılıyor | — | ❌ **İŞLENMEDİ** — SIG2 bu raporu üretmek için yine **11 satırlık alias tablosu** yazdı (`kod/isi_haritasi_SIG2.py`). |

**Skor: 5 tam ✅ · 1 kısmi 🟡 · 4 açık ❌.** İşlenen 5'in **3'ünde kaynak CC kendi hatasını açıkça kabul etti** (MAP27, S49, İ61) — bu, çapraz kontrol katmanının çalıştığının kanıtıdır.

## 1.3 Bir düzeltme de bana geldi — ve kabul ediyorum

**İ62, İ61'in "Paşabahçe + Mahmutşevketpaşa 2025-26'da ısınıyor" iddiasını geri çekti:** o kayıtların **hepsi çok-ilçe MEM okul-onarım grupları**, yani bakım. SIG1'in ısı haritasında Paşabahçe'nin KAMU ayağı bu tür kayıtlara dayanıyordu.

**SIG2 bunu mekanik kurala çevirdi** (İ62'nin sözlü kararını koda döktüm):

| Sınıf | Kural | Sonuç |
|---|---|---|
| **ÇOK-İLÇE** | `grup okul` · `anadolu yakası` · `müteferrik` · `arıtma tesisleri` · `kısım` | mahalleye atfedilemez |
| **BAKIM** | `onarım` · `bakım` · `tadilat` · `cephe` · `ıslah` · `iksa` · `hafriyat` | gelişim değil |
| **GELİŞİM** | `yapım işi` · `yapımı` · `inşaat` · `geliştir` · `tevsi` (ve bakım değil) | ✅ sayılır |

**Sonuç — Paşabahçe'nin kamu ayağı çöktü:**

| Mahalle | GELİŞİM | Gelişim TL | Bakım | Çok-ilçe |
|---|---:|---:|---:|---:|
| **Çubuklu** | **8** | 266,3 M | 10 | 1 |
| **Gümüşsuyu** | **3** | **4.194,8 M** | 6 | 0 |
| Kavacık | 3 | 200,9 M | 1 | 3 |
| Riva | 2 | 120,9 M | 0 | 0 |
| Yalıköy | 1 | 159,7 M | 0 | 3 |
| Kanlıca | 1 | 124,5 M | 2 | 0 |
| **Paşabahçe** | **0** | **0** | 0 | **3** |
| **Mahmutşevketpaşa** | **0** | **0** | 0 | **3** |
| Polonezköy | 2 | 3,0 M | 3 | 0 |

> **Paşabahçe'nin 3 "kamu ihalesi"nin 3'ü de çok-ilçe kayıt** (2× MEM 2026/5 Grup Okul Onarımı `Beykoz-Çekmeköy...`, 1× İSKİ Asya Yakası 3. Kısım Müteferrik Atıksu). **Beykoz-Paşabahçe'ye özgü tek bir kamu gelişim ihalesi yok.**

---

# G2 — ÇİFT-KANIT MATRİSİ

## 2.1 Sınıflandırma kuralı

| Sınıf | Tanım |
|---|---|
| 🟢 **GÜÇLÜ** | **2+ bağımsız kaynak** — farklı CC **ve/veya** farklı kaynak tipi (#21-A: birincil-regülatif / resmi-kurum / ulusal-medya / piyasa-ilanı / söylem) |
| 🟡 **İZLENEN** | Tek kaynak · doğrulanmamış proxy · model çıktısı · aynı dosya üzerinde iki hesap (tekrarlanabilirlik ≠ bağımsızlık) |

> ⚠️ **Aynı dosyanın iki kez okunması çift-kanıt değildir.** Örneğin CC-Analiz'in ve benim aynı `uzanti_katmani_beykoz_S48.jsonl`'den medyan hesaplamamız *tekrarlanabilirliktir*; bağımsızlık için **farklı toplama yöntemi** gerekir (CSV arşivi ↔ Chrome uzantısı gibi).

## 2.2 🟢 GÜÇLÜ — örnek dosyaya girer

| # | Bulgu | Kanal 1 | Kanal 2 | Kanal 3 | K |
|---|---|---|---|---|:-:|
| **S1** | **Şişecam Paşabahçe arazisi 171,5 M USD karşılığı Çelikler Taahhüt'e satıldı** (İncirköy Mh., 11 parsel, 117.018,95 m², 2026-02-20) | **Borsa S57** — KAP idx 1559473 (birincil-regülatif) | **Sosyal S204** — YouTube `Ya_4fR7ojic` (söylem) | **Analiz S48** — sahibinden ilan `1315829024`, 08.07.2026, emlakçı metni tutarı ve alıcıyı **birebir** yazıyor (piyasa-ilanı) | **3** |
| **S2** | **EKGYO Tokatköy projesi teslim edildi ve piyasada işlem görüyor** | **Borsa S56** — KAP 2022-09/10, 2 etap, 789,7 + 889,9 M TL sözleşme | **Analiz S48** — **15 sahibinden ilanı** "Emlak Konut projesi"ne atıflı, **15/15'i Tokatköy** | — | **2** |
| **S3** | **EKGYO Riva'da inşaat 2025-04'te başladı; sermaye→kazma arası 7,6–8,4 yıl** | **Borsa S54-57** — KAP tarihli zincir (AGYO 2016-11 → sözleşme 2017-09 → ikmal inşaat + yer teslimi 2025-04) + PDF eki: konut alanı **869.522 m²**, emsal 0,20, **173.904 m² inşaat**, H=2 kat | **Analiz S48** — Riva'da **"Emlak Konut" atfı 0**; satılan 122 konutun tamamı özel projeler (Düşler Vadisi/Kidstown 89 ilan) → *proje henüz piyasaya çıkmadı* | — | **2** ⭑ |
| **S4** | **Beykoz'un %62'si orman/kırsal — kalıcı arz kısıtı** | **TT-MAP** — Sentinel↔WorldCover çift imza, 28/45 mahalle, 28/28 ağaç-baskın | **TT-AI TTA96** — İBB-2017 bina sayımı: kuzey köylerinde 147–330 bina (Göllü 147, Kaynarca 218, Bozhane 278) ↔ Yeni Mahalle 3.444 | **İhale** — 9 askeri ihale (Sualtı/SAT, kışla, lojman) = kapalı alan | **3** |
| **S5** | **Beykoz yatay bir ilçe; tek dikey çekirdek Kavacık** | **TT-AI TTA96 / İBB-2017** — 51.201 binanın **%95,1'i 1–4 kat**; 9–19 kat toplam 121 bina, bunun **87'si (%72) Kavacık'ta** | **TT-AI TTA96 / OSM** — poligon-içi POI: Kavacık **74** (Beykoz #1), Merkez 47, Rüzgarlıbahçe 28 | **Analiz S46** — ticari kira n=33 · 442 TL/m²/ay (ilçenin en derin kira hücresi) | **3** |
| **S6** | **Ortaçeşme'de arz "atlanmadı", Haziran-Temmuz 2026'da YENİ ÇIKTI** | **Analiz S49** — 21 ilanın 21'i Haz-Tem 2026, Şub-May'da 0 (birincil tarih damgası) | **SIG1** — bağımsız pencere analizi (07-18…07-23 tarihleri, CSV penceresi kapandıktan sonra) | — | **2** |
| **S7** | **Yönetişim riski: seçilmiş belediye başkanı tutuklu, dava genişliyor** | **Basın S81** — 2026-07-17 rüşvet/irtikap 2. dalga: 6 gözaltı → **2 tutuklama** + 4 adli kontrol (dunya.com + yenisafak.com, ulusal-medya) + Wikipedia kronolojisi | **Sosyal S204** — Başkan Vekili Gürzel'in kendi ifadesi: *"Seçilmiş belediye başkanı şu an cezaevinde"* (`q11ZUc4Djg4`) + Özgür Özel videosu | — | **2** |
| **S8** | **Riva Metruk Otel yıkıldı — 186 odalı, Milli Takım kamp tesisi, 9 yıl hukuki askıda** | **Basın S81** — Beykoz Belediyesi duyurusu 2026-07-24 (resmi-kurum) | **Basın S81** — Halk TV 2026-07-25 gövde: 186 oda, 2009 işletme devri, Özelleştirme İdaresi, 2017 ihale tamamlanamadı (ulusal-medya) | — | **2** |
| **S9** | **Acarlar ve Riva fiyat seviyesi iki bağımsız toplama yönteminde uyumlu** | **Analiz S46** — TT-HAFIZA CSV arşivi (Acarlar n=146 → 210.140 · Riva n=109 → 160.000) | **Analiz S48/S49** — Chrome uzantısı canlı çekim (Acarlar n=191 → 220.455 · Riva n=122 → 172.864) | — | **2** |
| **S10** | **Kamu parası iki noktada: Çubuklu (kampüs) + Gümüşsuyu (hastane)** | **İhale İ61** — Çubuklu 19 ihale / 5 yıl sürekli; Gümüşsuyu 9 / 2024 sonrası tırmanış | **İhale İ62** — bağımsız test: Gümüşsuyu'nda **bitişik altyapı** (Çırçır Deresi ıslahı, aynı yıl); diğer "ısınmalar" bakım çıktı | **SIG2** — gelişim/bakım filtresi: Çubuklu 8 gelişim/266 M · Gümüşsuyu 3/4.195 M | **3** |

⭑ **S3 notu:** ikinci kanal burada bir **yokluk kanıtı** — Riva'da "Emlak Konut" ilanı olmaması, projenin henüz satışa çıkmadığıyla tutarlı. Tokatköy'de (2022 sözleşme) 15 ilan, Riva'da (2025 sözleşme) 0 ilan → **sermaye→piyasa gecikmesi doğrudan görünür oldu.** Bu bir teyit değil, tutarlılıktır; ayrı satır olarak İZLENEN'e de yazıldı (İ7).

## 2.3 🟡 İZLENEN — dosyaya GİRMEZ, ayrı listede durur

| # | Bulgu | Tek kaynak | Neden ikinci kanal yok |
|---|---|---|---|
| **İ1** | **Deprem-dönüşüm tezi** — İncirköy/Çubuklu/Gümüşsuyu dönüşüm baskısı #1 | TT-AI TTA97 — İBB deprem senaryosu 2023 | **Tek İBB modeli, olasılıksal.** TT-AI kendi etiketi: [HİPOTEZ]. Fiili dönüşüm kanıtı (ruhsat/proje) hiçbir CC'de yok |
| **İ2** | **Kavacık ofis/plaza hacmi** | OSM POI 74 (retail/servis) | TTA97 üç kaynak denedi: İBB ruhsat **ilçe kırılımı yok** · İBB GSM **sanayi-tipi** (Beykoz=2) · ticaret sicili **açık-veride yok**. *"Kavacık'ta X ofis"* cümlesi hâlâ **kurulamaz** |
| **İ3** | **171,5 M$ dışındaki Şişecam söylemleri** — "fabrika üzerine yalılar/malikaneler", "imara izin verilmiyor", "Beykoz pasta hepimize yeter" | Sosyal S202/S204 | Nicel yok; Basın havuzunda Şişecam **0 hit** (S79+S81 iki kez) |
| **İ4** | **MAP27 piksel-flip haritası** (Merkez %18,6 · Ortaçeşme %17,1 · Riva %16,2) | TT-MAP MAP27 | **TT-MAP'in kendi uyarısı:** flip piksellerin ort. NDVI 0,30 = hâlâ bitkili; sealed-yapılı yalnız **%5-6**, hafriyat %9-16, **%78-86 doğrulanamaz**. Üst sınır, ölçüm değil |
| **İ5** | **1071 hak sahibi tapu dağıtımı** (Gümüşsuyu, Paşabahçe, Polonezköy, Tokatköy, A.Hisarı, Soğuksu) | Basın S79 (3 yayın, aynı kanal) | **Gövde metni hiç okunmadı.** Hangi statü (2B? hazine? dönüşüm hak sahipliği?), kaç parsel — bilinmiyor |
| **İ6** | **PEKGY / SozInv "Tera Orman" Polonezköy** — 25.000 m², 70 villa, 2028 | Borsa S57 — KAP idx 1618761 | Basın S81 hedefli aradı: **"Peker GYO" 0 hit**, "Ramazan Işık" 0, "Tera Grubu" 0. Sosyal'de yalnız 1 metadata |
| **İ7** | **Sermaye→piyasa gecikmesi doğrudan görünüyor** (Tokatköy 15 ilan ↔ Riva 0 ilan) | SIG2 türetmesi | Tutarlılık gözlemi; yokluk birçok nedenden olabilir (uzantı kapsamı, satış modeli) |
| **İ8** | **Beykoz Çayırı Millet Bahçesi 38k→93k m²** | Sosyal S204 — Murat Aydın (eski başkan) videosu | Vaat/seçim dönemi; Basın ve İhale'de iz yok |
| **İ9** | **Riva Altınpark** projesi | Basın — Emlak Kulisi tek haber | Borsa'da karşılığı yok; hangi şirket bilinmiyor |
| **İ10** | **İncirköy arsalarında "imar çıkarsa 5 kat değerlenir" beklentisi** | Analiz S48 — emlakçı ilan metni | **Satıcı iddiası.** İmar süreci hakkında hiçbir CC'de belge yok |

> **Sayı: 10 GÜÇLÜ · 10 İZLENEN.** Bu ayrım örnek dosyanın omurgasıdır: dosyada yalnız soldaki 10 var.

## 2.4 🔴 Patron'un listesine bir itirazım var

> **Talepte:** *"GÜÇLÜ (2+ bağımsız): … **sermaye 5 aktör (hepsi KAP)**"*

**Katılmıyorum, ve sebebi bu katmanın varlık sebebidir:** *"hepsi KAP" tam olarak **tek kanal** demektir.* KAP birincil ve regülatif bir kayıttır — güvenilirdir — ama 5 aktörü tek bir kanalın söylemesi, çift-kanıt tanımını karşılamaz. Kanal kaç?

| Aktör | Mahalle | KAP | 2. kanal | Sınıf |
|---|---|:-:|---|:-:|
| **SISE → Çelikler** | İncirköy | ✅ | Sosyal + **piyasa ilanı** | 🟢 K=3 |
| **EKGYO Tokatköy** | Tokatköy | ✅ | **15 sahibinden ilanı** | 🟢 K=2 |
| **EKGYO Riva** | Riva | ✅ | piyasa **yokluk** kanıtı (zayıf) | 🟢 K=2 ⭑ |
| **PEKGY (SozInv)** | Polonezköy | ✅ | **yok** (Basın 0 hit) | 🟡 K=1 |
| **AGYO** | Çayağzı/Riva | ✅ | **yok** | 🟡 K=1 |
| **ANELE** | Kavacık | ✅ | **yok** | 🟡 K=1 |

**5 aktörün (AGYO ayrı sayılırsa 6 kaydın) yalnız 3'ü çift-kanallı.** Sermaye haritası dosyaya **girer** — ama her satırın yanında **K sayısıyla**, çünkü dosyanın kuralı buydu. Sessizce "hepsi güçlü" demek, kuralı ilk kullanan biz oluruz.

---

# G3 — ISI HARİTASI (düzeltilmiş)

## 3.1 Kural — SIG1'den ne değişti

| Ayak | SIG1 kuralı | **SIG2 kuralı** | Neden değişti |
|---|---|---|---|
| KAMU | ≥3 ihale veya ≥100 M TL | **≥2 GELİŞİM ihalesi ve ≥50 M TL, veya ≥100 M TL gelişim** | İ62'nin bakım/gelişim düzeltmesi (§1.3) |
| SERMAYE | ≥1 KAP bildirimi | aynı — **ama 5 aktöre genişledi** | S57: SISE→Çelikler + PEKGY |
| UYDU | net ≥+2,0 · güven ≥orta · **ölçüm gerçek** | **aynı** — MAP27 kuralı doğruladı | — |
| HABER | ≥2 haber (FP temiz) | aynı — havuz 31→**54** kayıt | S80 |
| SÖYLEM | ≥2 atıf | aynı — havuz 82→**100** video | S204 |
| FİYAT | iki kaynakta n≥5 | **çift-kanıt: CSV n≥10 VE uzantı n≥20** | S48 3.293 kayıt → eşik yükseltilebildi |
| ~~VERİ~~ → **YAPI** | TT-AI CONFIRMED damgası | **POI ≥15 veya ağır-hasar bina ≥25** | TTA96/97 bayrağı **gerçek rakamla** değiştirdi |

> 🔴 **Bu yüzden SIG2 skorları SIG1 skorlarıyla doğrudan kıyaslanamaz** — hem veri hem iki kuralın tanımı değişti. Aşağıda ikisi de gösteriliyor.

## 3.2 ★ ISI TABLOSU — 45 mahalle, düzeltilmiş

**● = sıcak · · = soğuk/ölçülemez**

| Mahalle | Ayak | KAMU | SERM | UYDU | HABER | SÖYLEM | FİYAT | YAPI |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **Riva** | **5** | ● | ● | · | ● | ● | ● | · |
| **Kavacık** | **4** | ● | ● | · | · | ● | · | ● |
| **Çubuklu** | **3** | ● | · | · | ● | · | · | ● |
| **Yalıköy** | **3** | ● | · | ● | · | · | · | ● |
| Çamlıbahçe | 2 | · | · | ● | · | · | · | ● |
| Gümüşsuyu | 2 | ● | · | · | · | · | · | ● |
| **İncirköy** | 2 | · | ● | · | · | · | · | ● |
| Merkez | 2 | · | · | · | ● | · | · | ● |
| Ortaçeşme | 2 | · | · | ● | · | · | · | ● |
| **Paşabahçe** | **2** ⬇ | · | · | · | ● | ● | · | · |
| Tokatköy | 2 | · | ● | · | · | · | · | ● |
| Acarlar · Çengeldere · Göztepe · Yavuz Selim | 1 | · | · | · | · | · | ● | · |
| Göksu · Rüzgarlıbahçe · Yeni Mahalle | 1 | · | · | · | · | · | · | ● |
| İshaklı · Kanlıca | 1 | ● | · | · | · | · | · | · |
| Polonezköy | 1 | · | ● | · | · | · | · | · |
| **24 mahalle** | **0** | · | · | · | · | · | · | · |

**Dağılım:** 5 ayak → 1 · 4 ayak → 1 · 3 ayak → 2 · 2 ayak → 7 · 1 ayak → 10 · **0 ayak → 24 (%53)**

## 3.3 Isı görseli — Beykoz sinyal yoğunluğu

```
                    KAMU SERM UYDU HABR SÖYL FİYT YAPI
  ┌──────────────┬──────────────────────────────────────┬──────┐
  │ RİVA         │  ██   ██   ░░   ██   ██   ██   ░░    │ 5/7  │ ◄ tek çok-eksenli
  │ KAVACIK      │  ██   ██   ░░   ░░   ██   ░░   ██    │ 4/7  │ ◄ derinlik
  ├──────────────┼──────────────────────────────────────┼──────┤
  │ ÇUBUKLU      │  ██   ░░   ░░   ██   ░░   ░░   ██    │ 3/7  │ ▲ SIG1'de 2
  │ YALIKÖY      │  ██   ░░   ██   ░░   ░░   ░░   ██    │ 3/7  │ ▲ SIG1'de 2
  ├──────────────┼──────────────────────────────────────┼──────┤
  │ İNCİRKÖY     │  ░░   ██   ░░   ░░   ░░   ░░   ██    │ 2/7  │ ▲ SIG1'de 0
  │ ORTAÇEŞME    │  ░░   ░░   ██   ░░   ░░   ░░   ██    │ 2/7  │
  │ TOKATKÖY     │  ░░   ██   ░░   ░░   ░░   ░░   ██    │ 2/7  │
  │ GÜMÜŞSUYU    │  ██   ░░   ░░   ░░   ░░   ░░   ██    │ 2/7  │
  │ MERKEZ       │  ░░   ░░   ░░   ██   ░░   ░░   ██    │ 2/7  │
  │ ÇAMLIBAHÇE   │  ░░   ░░   ██   ░░   ░░   ░░   ██    │ 2/7  │
  │ PAŞABAHÇE    │  ░░   ░░   ░░   ██   ██   ░░   ░░    │ 2/7  │ ▼ SIG1'de 4
  ├──────────────┼──────────────────────────────────────┼──────┤
  │ 10 mahalle   │  tek ayak                            │ 1/7  │
  │ 24 mahalle   │  hiç ayak yok                        │ 0/7  │ %53
  └──────────────┴──────────────────────────────────────┴──────┘
```

## 3.4 ★ Sorunun cevabı: üç sıcak nokta değişti mi? **EVET — biri düştü, ikisi çıktı.**

| Mahalle | SIG1 | SIG2 | Ne oldu |
|---|:-:|:-:|---|
| **Riva** | 5 | **5** | **Değişmedi.** İki turda da ilçenin tek çok-eksenli mahallesi |
| **Kavacık** | 4 | **4** | Sayı aynı, **içerik değişti**: FİYAT ayağını kaybetti (CSV n=6, çift-kanıt eşiğinin altında), **YAPI ayağını kazandı** (POI 74 + 87 yüksek bina) |
| **Paşabahçe** | **4** | **2** ⬇ | 🔴 **DÜŞTÜ.** KAMU ayağı çöktü — 3 ihalenin 3'ü de çok-ilçe bakım (§1.3). VERİ ayağı da kuralla birlikte kalktı. Kalan: haber (2, ikisi de tapu töreni) + söylem (3) |
| **Çubuklu** | 2 | **3** ⬆ | İ61'in `Türk- Alman` düzeltmesi **19 ihale** ortaya çıkardı; TTA96 POI 26 + 43 ağır-hasar bina |
| **Yalıköy** | 2 | **3** ⬆ | KAMU (Sait Taşçıoğlu İlkokulu 159,7 M TL) + UYDU (+8,4 p, güven yüksek) + YAPI (POI 20, 25 ağır-hasar) |
| **İncirköy** | **0** | **2** ⬆ | 🟢 **SIFIRDAN ÇIKTI** — Şişecam→Çelikler işlemi + POI 17 + 2.043 eski bina |

## 3.5 ★ "Paşabahçe İncirköy-Çelikler işlemiyle güçlendi mi?" — **HAYIR, İNCİRKÖY GÜÇLENDİ**

Bu, #18 üçlü-anahtarın ders kitabı vakası:

| Alan | Değer | Kaynak |
|---|---|---|
| KAP bildirim **başlığı** | *"**Paşabahçe** Gayrimenkullerinin Satışı Hk."* | Borsa S57, idx 1559473 |
| KAP **konum** alanı | İstanbul, Beykoz İlçesi, **İNCİRKÖY MAHALLESİ** | aynı bildirim |
| Parseller | 11 parsel · 117.018,95 m² | aynı |
| Piyasa ilanı konumu | *"Beykoz Paşabahçe **İncirköy Mahallesi** Harmantepe"* | Analiz S48, ilan `1315829024` |

> **"Paşabahçe" burada bir marka/fabrika adıdır, mahalle adı değildir.** Kadastral konum İncirköy. Sinyal İncirköy'e yazılır. Paşabahçe Mahallesi bu işlemden **hiçbir ayak kazanmadı** ve aynı turda kamu ayağını kaybetti → **net olarak zayıfladı.**
>
> *Semtin adı ile mahallenin adı çakıştığında, kanon **kadastral olanı** alır. (→ §G5-3, Standing adayı)*

**İncirköy'ün profili ise dikkat çekici hale geldi:** Beykoz'un **en eski bina stoku** (2.043 adet 1980-öncesi, ilçe #1 — TTA96), **en ucuz ikinci konutu** (62.500 TL/m², n=19 — S48), **171,5 M$'lık arsa işleminin geçtiği yer**, ve 25 ağır-hasar binayla deprem listesinde 7. sırada. Fiyat düşük, stok eski, sermaye yeni girdi. *Ne söylediğini Patron'a bırakıyorum — ben ölçtüğümü söylüyorum.*

---

# G4 — ÖRNEK DOSYA: BEYKOZ

> **Bu bölüm yalnız §2.2'deki 10 GÜÇLÜ bulgudan üretilmiştir.**
> **Tez:** *Beykoz her yeri değil; 3 noktada yoğunlaşan, arzı kalıcı olarak kısıtlı, yönetişim riski taşıyan bir ilçedir.*
> Fırsat da risk de aynı netlikte yazılmıştır.

## 4.1 Bir sayfada Beykoz

| | |
|---|---|
| **Mahalle** | 45 *(TT-MAP + TT-AI + Basın — 3 CC uyumlu)* |
| **Bina** | **51.201** · %95,1'i 1–4 kat · 9–19 kat yalnız **121** *(İBB-2017)* |
| **Arz kısıtı** | 28/45 mahalle (%62) orman/kırsal + 9 askeri ihalelik kapalı alan |
| **Kamu parası** | 144 ihale · 2021–2026 · zirve 2024 (5,33 Mr TL) — **tek kaleme bağlı** |
| **Halka açık sermaye** | 5 aktör · 6 varlık · en büyüğü **171,5 M USD** (2026-02) |
| **Yönetişim** | Seçilmiş başkan **tutuklu**; rüşvet/irtikap davası 2. dalgada (2026-07-17) |
| **Deprem** | 556 ağır/çok-ağır hasarlı bina · 5.937 kişi geçici barınma *(İBB senaryosu — 🟡 İZLENEN)* |

## 4.2 ISI HARİTASI → §3.2–3.3

**Tek cümle:** 45 mahallenin **24'ünde (%53) hiçbir ayak sıcak değil**; **2 mahallede 4+ ayak** aynı anda sıcak. Beykoz'da sinyal ilçeye yayılmıyor.

## 4.3 ÜÇ SICAK NOKTA — karar kartları

### 🔵 1. RİVA — *"kesişim en geniş, ölçüm en dar"* — 5/7 ayak

| ✅ Ne biliyoruz (GÜÇLÜ) | Kanıt |
|---|---|
| Kurumsal sermaye girdi, **inşaat 2025-04'te fiilen başladı** | KAP tarihli zincir + ihale ilanı PDF: **869.522 m² konut alanı, 173.904 m² emsale esas inşaat, H=2 kat** |
| Sermaye → kazma arası **7,6–8,4 yıl** | KAP zinciri (2016-11 → 2025-04) |
| **Proje henüz piyasada yok** — Riva'daki 122 satılık konutun tamamı özel projeler (Düşler Vadisi/Kidstown 89 ilan); "Emlak Konut" atfı **0** | Analiz S48 · karşılaştırma: Tokatköy'de aynı atıf **15** |
| Fiyat iki bağımsız yöntemde uyumlu: **160.000 → 172.864 TL/m²** | S46 CSV (n=109) ↔ S48 uzantı (n=122) |
| Kamu: 2 gelişim ihalesi / **120,9 M TL** (mahmuz + polis merkezi, 2023) | İ62 |
| **186 odalı Metruk Otel yıkıldı** (2026-07-24), 9 yıllık hukuki askı bitti | Beykoz Bel. + Halk TV |

| ❌ Ne bilmiyoruz | Neden |
|---|---|
| Uydu ölçümü | Riva flatten-artefaktı sınıfında; MAP27'nin %16,2 piksel-flip'i **fenoloji-şüpheli** (🟡 İZLENEN) |
| **Konut adedi** | İhale ilanında yok; 173.904 ÷ 200 ≈ 870 **tahmindir**, kullanılmadı |
| Metruk Otel arsasının yeni imar kararı | Halk TV *"belli oldu"* diyor, gövde detayı okunmadı |
| Fiyatın gerçekleşen tarafı | tapu kanalı yok |

> **⭑ Yanlışlanabilir öngörü (SIG1'den devir, tarihli):** Riva'da yer teslimi 2025-04'te yapıldıysa yapılaşma artışı TT-MAP'in **2026–2027** ölçümünde görünmeli. **Ön koşul:** Riva flatten sınıfında olduğu için şu an ölçülmüyor — MAP27 overlay'i bunu düzeltti, **MAP28'de gerçek ölçüm koşulmalı** yoksa test hiç çalışmaz.
> **İkinci, daha ucuz test:** Riva'da "Emlak Konut" atıflı ilan sayısı **0 → pozitif** olduğunda proje piyasaya çıkmıştır. Tokatköy emsali bunun nasıl göründüğünü gösteriyor. **Analiz'in her turunda bedavaya ölçülür.**

### 🔵 2. KAVACIK — *"büyüme değil, derinlik"* — 4/7 ayak

| ✅ Ne biliyoruz (GÜÇLÜ) | Kanıt |
|---|---|
| **Beykoz'un tek dikey/ticari çekirdeği** — 9–19 kat 121 binanın **87'si (%72)** burada; 5–9 kat 606 (açık ara #1) | İBB-2017 |
| POI yoğunluğu **74 = Beykoz #1** (Merkez 47, Rüzgarlıbahçe 28) | OSM poligon-join (310 km² doğrulandı) |
| Ticari kira ilçenin en derin hücresi: **442 TL/m²/ay, n=33** | Analiz S46 |
| Kamu: 3 gelişim ihalesi / **200,9 M TL** (Türker İnanoğlu İlkokulu 127,4 M + orman parkı) | İ62 |
| Fiziksel olarak **büyümüyor** — yapılaşma 2016 %55,5 → 2025 %50,5 (güven **yüksek**) | TT-MAP, gerçek ölçüm |
| İlan akışı: **81 satılık konut** kaydı, medyan **101.724 TL/m²** | Analiz S48/S49 |

| ❌ Ne bilmiyoruz | Neden |
|---|---|
| **Kaç ofis/plaza var** | 🟡 İZLENEN — TTA97 üç kaynak denedi, üçü de yetersiz. *"Kavacık'ta X ofis"* cümlesi **kurulamaz** |
| Ticari getiri (yield) | ticari satılık n=7 (S49) — ölçüm için yetersiz |
| Haber tarafı | **0 haber** — temas yok |
| Fiyatın çift-kanıt statüsü | CSV tarafı n=6 → **eşiğin altında.** Seviye tutarlı (84.722 ↔ 101.724) ama ayak "güçlü" sayılmadı |

### 🔵 3. ÇUBUKLU — *"kamu parasının süreklilik gösterdiği tek yer"* — 3/7 ayak

| ✅ Ne biliyoruz (GÜÇLÜ) | Kanıt |
|---|---|
| **19 kamu ihalesi**, 5 yıl kesintisiz (2022:5 · 2023:4 · 2024:2 · 2025:5 · 2026:3) | İ61 (`Türk- Alman` parse düzeltmesinden sonra) |
| Bunun **8'i gelişim / 266,3 M TL**; motoru **tek kurum**: Türk-Alman Üniversitesi kampüsü | İ62 + SIG2 filtresi |
| POI 26 · 3.335 bina · **1.414'ü 1980-öncesi** (ilçe #2 eski stok) | İBB-2017 + OSM |
| Konut medyanı **147.299 TL/m²** (n=24) | Analiz S48/S49 |
| Haber: 3 kayıt (2025-07 vapur hattı krizi dahil) | Basın |

| ❌ Ne bilmiyoruz | Neden |
|---|---|
| Kampüs yatırımının **mahalleye yayılıp yayılmadığı** | İ62 test etti: kampüs çevresinde ayrı yol/altyapı **YOK** — yatırım kurum parseli içinde kalıyor. **Kamulaştırma kaydı 0** |
| Fiyat ayağının çift-kanıtı | CSV n=4 → eşiğin altında |

> **Dürüst not:** Çubuklu'nun kamu ısısı **bir üniversitenin kendi bloklarını yapmasıdır**, mahalle ekonomisine yayıldığına dair kanıt bulunamadı. Bu bir gelişim sinyalidir ama **kendi içine kapalı** bir gelişim.

## 4.4 SERMAYE HARİTASI — 5 halka açık aktör

| Şirket | Mahalle | Ölçek | Yön / Tarih | Kanal |
|---|---|---|---|:-:|
| **SISE → Çelikler Taahhüt** | **İncirköy** | 117.018,95 m² · **171,5 M USD** peşin | Şişecam **çıkış**, Çelikler **giriş** · 2026-02-20 | 🟢 **3** |
| **EKGYO** | **Tokatköy** | 2 etap · 789,7 + 889,9 M TL sözleşme | Teslim edildi, **piyasada işlem görüyor** (15 ilan) · 2022 | 🟢 **2** |
| **EKGYO** | **Riva** | 1.157.004 m² arsa · 173.904 m² inşaat · ASKSTG **3,808 Mr TL** · asgari şirket payı 952 M → **1,254 Mr TL** (2022) | İnşaat başladı · 2025-04 | 🟢 **2** |
| **PEKGY** (SozInv) | Polonezköy | ~25.000 m² · **70 villa** | İnşaat başladı, hedef **2028 ortası** · 2026-06 | 🟡 **1** |
| **AGYO** | Çayağzı (Riva) | 1.313 m² arsa | Alım · 2016-11 | 🟡 **1** |
| **ANELE** | Kavacık | showroom | Kosifler İnşaat ile sözleşme · 2016-05 | 🟡 **1** |

**Sermaye zaman ekseni:**
```
2016  ██        2   AGYO Riva arsa · ANELE Kavacık
2017  ███████   7   ◄ TEPE-1  EKGYO Riva ihale dalgası → sözleşme
2018  █         1   AKSGY imar
2019  █         1   AKSGY imar
2020  ·         0
2021  ·         0
2022  ███████   7   ◄ TEPE-2  EKGYO Tokatköy 2 etap · Riva STG artışı
2023  ·         0
2024  ·         0
2025  ██        2   EKGYO Riva ikmal inşaat + yer teslimi
2026  ███       3   ◄ YENİ    SISE→Çelikler 171,5M$ · PEKGY Tera Orman
```
> **2026, 2017 ve 2022'den sonra üçüncü hareketli yıl** — ve ilk kez **iki farklı sermaye tipi** aynı yıl: bir çıkış-giriş işlemi (Şişecam→Çelikler) ve bir yeni geliştirme (PEKGY). *(Güven %80 — hepsi KAP birincil; 2026 verisi yılın 7. ayında, yıl kapanmadı.)*

## 4.5 4 AYLIK MEDYAN FARKI — **fiyat hareketi DEĞİLDİR**

> 🔴 **Neden "fiyat hareketi" diyemiyorum:** S49, iki turda çakışan **40 ilanın** fiyat deltasını ölçmeyi denedi ve **iptal etti** — uzantı liste-tipi kayıtlarda farklı fiyat alanını yakalıyor (indirim medyanı %99,58, zam medyanı %248 = **fizik dışı**). **İlan bazlı fiyat takibi bu turda YAPILAMADI.**
> Aşağıdaki, **iki farklı dönemin iki farklı örnekleminin medyan farkıdır.** Aynı ilanların fiyatı izlenmemiştir. Kompozisyon değişimi (hangi ilanların yayında olduğu) farkı tek başına açıklayabilir.

**Yalnız iki dönemde de n≥19 olan mahalleler** *(kaynak: S46 CSV Şub-May ↔ S48 uzantı Haz-Tem, iki bağımsız toplama yöntemi)*

| Mahalle | Şub–May n | ŞM medyan | Haz–Tem n | HT medyan | Nominal fark |
|---|---:|---:|---:|---:|---:|
| **Acarlar** | 144 | 210.140 | **191** | **220.455** | **+%4,9** |
| **Riva** | 109 | 160.000 | **122** | **172.864** | **+%8,0** |
| Göztepe | 27 | 113.889 | 43 | 113.889 | **±%0,0** |
| Yavuz Selim | 22 | 106.667 | 28 | 101.095 | **−%5,2** |
| Çengeldere | 19 | 152.225 | 24 | 155.754 | +%2,3 |

**Yeni açılan arz** *(Şub-May'da hiç kayıt yok, Haz-Tem'de var)*: Ortaçeşme 21 · İncirköy 19 · Gümüşsuyu 13 · Çamlıbahçe 9 · Kaynarca 5 · Anadolu Kavağı 4.

> **Söylenebilecek:** *"Dört ay arayla iki bağımsız ölçümde Beykoz'un iki büyük hücresinin ilan medyanı **nominal olarak %5–8 arttı**, iki hücresi ise sabit/geriledi."*
> **Söylenemeyecek:** *"Beykoz'da fiyatlar %8 arttı."* · *"Reel olarak düştü."* — **sistemde enflasyon serisi yok; reel karşılaştırma yapılmadı.**

## 4.6 RİSK — fırsatla aynı netlikte

| # | Risk | Kanıt | Sınıf |
|---|---|---|:-:|
| **R1** | **Yönetişim.** Seçilmiş belediye başkanı tutuklu; rüşvet/irtikap davası 2026-07-17'de **ikinci dalgaya** genişledi (2 tutuklama + 4 adli kontrol + 2 firari). Yürütme vekâleten. Suçlama tipolojisi doğrudan **imar/ihale zeminini** işaret ediyor. | Basın S81 (3 ulusal + Wikipedia) + Sosyal S204 (vekil başkanın kendi ifadesi) | 🟢 GÜÇLÜ |
| **R2** | **Arz kısıtı iki yönlü çalışır.** %62 orman + askeri alan fiyatı destekler, ama **aynı kısıt projeyi de durdurur**: AKSGY'nin Beykoz imar süreci 2018'de başladı, **2026-07 itibarıyla inşaat bildirimi yok — 8 yıl.** | Borsa S54-57 (KAP) + TT-MAP (%62) | 🟢 GÜÇLÜ |
| **R3** | **Gecikme uzun ve ölçüldü.** Riva'da sermayeden kazmaya **7,6–8,4 yıl**. Tek zincir (n=1), ilçe kuralı değil — ama Beykoz'da ölçülmüş tek gecikme bu. | Borsa (KAP tarihli) | 🟢 GÜÇLÜ |
| **R4** | **Fiyatın alt kenarı hâlâ yok.** Tüm rakamlar **ilan (istenen)** fiyatı. Gerçekleşen fiyat bunların altında, **ne kadar altında bilinmiyor** — 40 ilanlık delta denemesi de teknik hatayla iptal oldu. | Analiz S49 (kendi beyanı) | 🟢 GÜÇLÜ |
| **R5** | **Eski bina stoku + deprem.** %31 bina 40+ yaşında; senaryoda 556 ağır hasarlı bina, 5.937 kişi barınma ihtiyacı. En yüklü: İncirköy 2.043 eski bina · Çubuklu 1.414 · Gümüşsuyu 1.354. | TTA96 (İBB-2017, GÜÇLÜ) + TTA97 (senaryo, **🟡 İZLENEN**) | 🟡 karma |

> **R5 özel uyarı:** eski-bina sayısı GÜÇLÜ (sayım), **deprem hasar tahmini İZLENEN** (olasılıksal tek model). Dosyada ikisi ayrı satırda durur; "dönüşüm gelecek" cümlesi **kurulmadı** — fiili dönüşüm kanıtı (ruhsat/proje/meclis kararı) hiçbir CC'de yok.

## 4.7 ÖRNEK DOSYA — kapanış tezi

> **Beykoz her yeri değildir.** 45 mahallenin 24'ünde (%53) ölçülebilir hiçbir sinyal yok. Dört mahallede üç veya daha fazla ayak aynı anda sıcak: **Riva (5), Kavacık (4), Çubuklu (3), Yalıköy (3).** Aramaya değer küme 45 değil, **4**.
>
> **Arzı kalıcı olarak kısıtlı.** Üçte ikisi orman/kırsal, üstüne askeri alanlar. Binaların %95'i 1–4 kat; ilçenin tüm yüksek yapı stoku (121 binanın 87'si) **tek mahallede** — Kavacık'ta. Bu kısıt fiyatı destekler; **aynı kısıt projeyi de sekiz yıl bekletir.**
>
> **Sermaye 2026'da yeniden hareketlendi.** 2017 ve 2022'den sonra üçüncü hareketli yıl: Şişecam Beykoz'dan **171,5 milyon dolara çıktı**, Çelikler Taahhüt girdi (İncirköy, 117 bin m², KAP + söylem + piyasa ilanı — **üç kanal**). Aynı yıl Peker GYO Polonezköy'de 70 villalık projeye başladı.
>
> **Ve piyasa bunu okuyor.** İncirköy'de bir emlakçı, Temmuz 2026 tarihli ilanında işlemin tutarını ve alıcısını **birebir** yazarak arsasını pazarlıyor. Sermaye hareketi ile piyasa fiyatlaması arasındaki bağ, ilk kez **aynı dosyada iki uçtan** görünüyor.
>
> **Ama yönetişim riski taşıyor.** Seçilmiş belediye başkanı tutuklu, rüşvet/irtikap davası bu ay ikinci dalgaya genişledi, yürütme vekâleten. İmar kararlarının geçtiği kurum bu kurumdur.
>
> **Fiyatta ise hâlâ tek kenardayız.** Elimizdekiler istenen fiyat; gerçekleşen fiyat kanalı (tapu) sistemde yok. Dört aylık nominal fark iki büyük hücrede **+%5 ile +%8** — ama bu **fiyat hareketi değil**, iki farklı örneklemin medyan farkıdır ve reel karşılaştırma yapılamamıştır.
>
> **Karar Patron'un.** Bu dosya nerede bir şeyler olduğunu gösterir; ne kadar edeceğini söylemez — **çünkü ölçmedik.**

---

# G5 — ŞABLON: diğer ilçelere ne taşınır

## Yeni (SIG2'de doğdu)

| # | Kural | Neden |
|---|---|---|
| **1** | **Çift-kanıt zorunluluğu: dosyaya giren her iddia 2+ bağımsız kaynak.** Tek kaynaklılar silinmez, **İZLENEN** listesinde durur. | Bu turda 20 bulgunun **tam yarısı** tek kanallı çıktı. Ayrım yapılmasaydı hepsi eşit görünecekti. |
| **2** | **Jenerik mahalle adı guard'ı.** Mahalle adı aynı zamanda kurum/semt/gazete adıysa negatif bağlam kuralı zorunlu. | **İki CC'de bağımsız olarak aynı hata:** Basın `Cumhuriyet` ← "Cumhuriyet **Başsavcılığı**" · İhale `merkez` ← "Veri **Merkezi**", `fatih` ← başka ilçe okulu, `emniyet` ← İller Bankası **Ankara** adresi. |
| **3** | **Marka adı ≠ mahalle adı — kanon kadastral olanı alır.** | KAP başlığı *"Paşabahçe Gayrimenkulleri"*, kadastral konum **İncirköy**. Başlığa güvenilseydi sinyal yanlış mahalleye yazılacaktı. |
| **4** | **Kamu ihalesinde bakım/gelişim/çok-ilçe ayrımı zorunlu.** | Ayrım yapılmadan Paşabahçe ve Mahmutşevketpaşa "ısınan mahalle" görünüyordu; ikisinin de **gelişim ihalesi sayısı 0**. |
| **5** | **Yer-tutucu sıfır ile ölçülmüş sıfır ayrılmalı** (`null` ≠ `0.0`). | Ulusal ölçekte **2012 kayıt** etkilenmişti; kapsam iddiası %99 → %47. |
| **6** | **İki set karşılaştırılmadan önce zaman penceresi hizalanır.** | Ortaçeşme "atlandı mı, yeni mi" sorusunun tamamı buydu. Cevap: yeni. |
| **7** | **Aynı dosyanın iki kez okunması çift-kanıt değildir.** Bağımsızlık = farklı **toplama yöntemi**. | CSV arşivi ↔ Chrome uzantısı gerçek çift-kanıttır; iki ayrı medyan hesabı değildir. |
| **8** | **Piyasa ilanı metni bir doğrulama kanalıdır.** Emlakçı açıklamaları kurumsal işlemleri, proje adlarını ve beklentileri taşır. | 171,5 M$ işleminin **üçüncü kanalı** ve EKGYO Tokatköy'ün ikinci kanalı buradan geldi. **Bugüne kadar hiç kullanılmamıştı.** |

## SIG1'den devralınan (hâlâ geçerli)

Rapor değil **ham JSON/JSONL oku** · sıcaklık eşiğini tablodan **önce** yaz · sayaç ≠ ham kayıt · mahalle alias tablosu ortak dosya olmalı *(hâlâ kapanmadı — §1.2/Ç10)*.

## Diğer ilçeye geçiş sırası

```
0. ÖN KOŞUL  mahalle kanonu tek kaynaktan · her CC kanonik setini ilan eder
1. SORU SETİ ilçenin 2-3 büyük olayı önceden yazılır
2. KESİT DONDUR fiyat kesiti sürümlenir, BOŞ OLMADIĞI doğrulanır
3. TUR-1      7 CC keşif · her biri "cevaplayamadıklarım" ile
4. TUR-2      hedefli ikinci geçiş  ← Beykoz'da en büyük kazanç burada oldu
5. ÇAPRAZ TUR Signals: sayaçlar yan yana, çelişkiler listelenir
6. DÜZELTME TURU  ← YENİ: çapraz turun bulduklarını kaynak CC işler
7. ÇİFT-KANIT Signals: GÜÇLÜ / İZLENEN ayrımı
8. ÖRNEK DOSYA yalnız GÜÇLÜ + risk aynı netlikte
9. DENETİM    üreten ≠ denetleyen
```
> **Adım 6, Beykoz'un en verimli adımıydı:** çapraz turun 10 bulgusundan 5'i tek turda işlendi ve 3 CC kendi hatasını düzeltti.

---

# CEVAPLAYAMADIKLARIM · V16

## Ne ölçemedim

1. **Tapu / gerçekleşen fiyat** — kanal yok. Bandın alt kenarı hâlâ boş.
2. **İlan bazlı fiyat hareketi** — uzantı fiyat çıkarımı bozuk (S49 iptal etti). §4.5 **medyan farkıdır**, hareket değil.
3. **Meclis kararları** — 11 gündem başlığı bulundu, detay hâlâ okunmadı. **İmar momentumu kör.**
4. **1071 tapu olayının içeriği** — SIG1'de işaret ettim, hâlâ okunmadı (§1.2/Ç7).
5. **2024 yılı** — Wayback Machine WebFetch tarafından bloklu; Basın'ın 2024 boşluğu kapanmadı.
6. **İlçe kıyaslaması** — SIG1'de de yoktu, SIG2'de de yok. **"Beykoz diğer ilçelerden iyidir" cümlesi hiçbir turda kurulmadı ve kurulamaz.**
7. **Kavacık ofis hacmi** — üç kaynak denendi, üçü de yetersiz (🟡 İ2).
8. **Riva konut adedi** — ihale ilanında yok; 870 rakamı **türetmedir**, kullanılmadı.

## V16 — kendi işime itiraz

1. **Denetleyen olarak kendimi imzaladım — ve bu tam olarak doğru değil.** §G1 ve §G2 (başkalarının işini denetlemek) meşru olarak benimdir. Ama **§G3 ısı tablosunu ve §G4 örnek dosyayı ben ürettim** — onları denetleyen yok. F1 kural 4 burada karşılanmıyor.
2. **Isı eşikleri yine benim kararım.** KAMU'da "≥2 gelişim ve ≥50 M TL" seçtim; 100 M seçseydim Kavacık ve Riva düşerdi, 25 M seçseydim Ortaçeşme çıkardı. Kural `kod/isi_haritasi_SIG2.py`'de açıkta — **tartışılabilir olsun diye.**
3. **Ayak setini değiştirdim** (VERİ → YAPI). Bu bir iyileştirmedir ama **SIG1 ile SIG2 skorlarını doğrudan kıyaslanamaz hale getirdi**; §3.4'te ayrı ayrı gösterdim, yine de bir kırılmadır.
4. **Kendi fiyat hesabımı dosyaya koymadım — bilerek.** S48 jsonl'den kendi medyanlarımı çıkardım (Kavacık 91.667, Acarlar 202.632, Riva 165.404) ve CC-Analiz'inkilerden %3–9 sapıyorlar (farklı m² çıkarımı). **Dosyada Analiz'in kanonik sayıları var**; benimkiler yalnız tekrarlanabilirlik kontrolüydü ve **çift-kanıt sayılmadı** (§2.1).
5. **Paşabahçe'yi düşürdüm ve bu bir kayıp olabilir.** Kamu ayağı gerçekten çöktü, ama Paşabahçe hâlâ ilçenin **en yüksek söylem yoğunluğuna** sahip yeri ve Şişecam dosyasının merkezi. Düşük skor "önemsiz" demek değil, **"ölçülemiyor"** demek.
6. **Patron'un GÜÇLÜ listesine itiraz ettim** (§2.4). Eğer yanılıyorsam kural fazla katıdır ve 3 sermaye kaydını gereksiz yere geri plana attım. **Kararı Patron verir; ben kuralı uyguladım.**
7. **KVKK (#31):** §4.6-R1 ve Basın S81 kaynaklı kısımlarda kamu görevlisi/siyasetçi isimleri geçiyor. Bu belge **iç kullanımdır**; dış sunumda maskeleme/açık ayrımı Patron kararıdır.
8. **İncirköy ilanı bir emlakçı metnidir.** İşlemin tutarını ve alıcısını doğru yazması onu **kanıt** yapar; aynı metindeki *"değeri en az 5 katına çıkacak"* ifadesi **satıcı iddiasıdır** ve İZLENEN'e (İ10) yazıldı. İkisini karıştırmamak bu bulgunun tek şartıdır.

---

**Kaynaklar (#21-B):** CC-TT-MAP MAP26-27 · CC-İhale İ61-62 (`vaka_beykoz_ihale_I62.json`) · CC-Borsa S56-57 (KAP idx 1559473 · 1618761 · 606949 · 612682 · 625894 · 629501 · 992244 · 1066143 · 1066890) · CC-Basın S80-81 (`vaka_beykoz_basin_S80.json`, 54 kayıt) · CC-Sosyal S203-204 (100 video / 32 kanal) · CC-TT-AI TTA96-97 (İBB-2017 bina · OSM poligon · İBB deprem 2023) · CC-Analiz S48-49 (`uzanti_katmani_beykoz_S48.jsonl`, 3.293 kayıt · `beykoz_csv_derin_S46.jsonl`, 797 kayıt) · CC-Finans F2 · CC-Signals SIG1

**Üreten:** CC-Signals SIG2 · **Denetleyen:** CC-Signals §G1-G2 için ✅ · §G3-G4 için ☐ (bkz. V16-1)
**Kod:** `~/signals/kod/isi_haritasi_SIG2.py` (ısı kuralı + gelişim/bakım filtresi, çalıştırılabilir)
**$0 · A04 · V16 · #18 · #21-A/B · #31 · #34 · SİLME-YOK**
