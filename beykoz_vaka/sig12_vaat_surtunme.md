# CC-Signals · SIG12 — S96 SON-TUR ENTEGRASYONU
## VAAT DEFTERİ · SÜRTÜNME ENDEKSİ · 20 bulgu · 7 lens · sayfa-paketi onayı

**Sprint:** SIG12 · **Tarih:** 2026-07-29 · **Üreten:** CC-Signals · **Denetleyen:** ☐ Üst Akıl
**Girdi:** CC-Basın **S96** (`vaka_beykoz_basin_S96.md` · `vaka_beykoz_S96_ozet.json` · `s96_sayfa_paketleri/`) → kaynak gövde `gece_S95/aktor_baglam.jsonl` **7.370 cümle**
**Dönem etiketi:** basın gövdesi **`BASIN_16YIL_2010-2026`** (beykozguncel yerel arşiv, S94 v2r temiz) · etiketsiz alıntılanamaz
**Disiplin:** $0 · A04 · V16 · #21-A/B · #34 · SİLME-YOK · **PUSH YOK** (Patron talimatı)

---

## 0. BU TURDA NE YAPTIM — ve ilk iş neden yeniden-üretim oldu

S96 bana iki sayı verdi: **vaat-defteri 229**, **sürtünme 59**. Bunları master'a **olduğu gibi taşımadım** — 3. katmanın işi çapraz kontroldür. Ham gövdeyi (`aktor_baglam.jsonl`) kendim taradım ve Basın'ın filtresini **geri-mühendislikle** yeniden kurdum.

| Lens | Basın S96 | **Signals bağımsız koşu** | Fark | Yorum |
|---|---:|---:|---:|---|
| **L1 Vaat** | 229 | **225** | −4 (%1,8) | filtre yeniden kuruldu: `yapılacak\|kurulacak\|açılacak\|verilecek\|olacak\|edilecek` |
| **L8 Sürtünme** | 59 | **57** | −2 (%3,4) | filtre: `iptal\|dava\|itiraz\|reddedil` |

> ✅ **Bağımsız koşu Basın'ı %2-3 içinde doğruladı.** Kalan fark muhtemelen dedup veya bir-iki ek terimden geliyor; **çelişki değil.** Aşağıdaki tüm analiz **kendi 225/57 kümem** üzerinden yürüdü, çünkü satır-satır künye ancak kendi kümemde var.

---

# 1. ★★ §VAAT-DEFTERİ — 229 kaydın anatomisi

## 1.1 🔴 İlk bulgu: "vaat-defteri" adı, kapsamı **aşıyor**

229 cümlenin filtresi `olacak` ve `edilecek` gibi **jenerik gelecek-kipi** fiillerini içeriyor. Bunlar taahhüt değil, dilbilgisi.

| Küme | n | Pay |
|---|---:|---:|
| Geniş filtre (Basın'ın L1 kümesi) | **225** | %100 |
| **Somut taahhüt fiili** (`yapılacak/kurulacak/açılacak/inşa edilecek/hizmete girecek/tamamlanacak/başlayacak`) | **120** | **%53,3** |
| ❌ **Yalnız jenerik gelecek-kipi** (taahhüt DEĞİL) | **122** | **%54,2** |

**Elenen cümlelerden örnekler** *(hiçbiri bir vaat değildir)*:
- `2015-05-15` — *"40 bin yürek bu gece tek yürek **olacak**!"*
- `2014-03-19` — *"…halkın tercihi hizmet edenlerden yana **olacak**"*
- `2012-02-29` — *"Satış olmazsa, ecrimisil söz konusu **olacak**"*

> ★ **Bu, "etiket ≠ kapsam" hata sınıfının 7. vakası** — ve bu kez hatayı üreten CC'nin (Basın) değil, **etiketin** kendisi: `L1_vaat_defteri` adı, kümenin yarısının vaat olmadığını gizliyor.
> 🔧 **Karar:** master'a **229 girmez.** Master'a **"229 aday cümle → 120 taahhüt çekirdeği"** girer. Sayı düşürüldü, kaynak korundu (SİLME-YOK).

## 1.2 ⚠️ ÇELİKBİLEK-YANSIMA ŞERHİ — bu defter kimin defteri?

| Küme | n | Çelikbilek payı |
|---|---:|---:|
| Tüm aktör-bağlam gövdesi | 7.370 | **%85,5** (6.298) |
| Vaat — geniş | 225 | **%79,1** (178) |
| Vaat — taahhüt çekirdeği | 120 | **%76,7** (92) |
| **Sürtünme** | 57 | **%54,4** (31) |

Çekirdekteki diğer aktörler: **İSKİ 9 · TOKİ 4 · Torunlar 4 · Torunlar GYO 4 · ÇŞB 2 · Milli Emlak 2 · Paşabahçe Cam 1 · Emlak Konut 1.**

> 🔴 **ŞERH (master'a aynen girer):** Bu bir *"Beykoz'un vaat defteri"* değil, **büyük ölçüde tek bir aktörün — 2004-2014 dönemi belediye başkanı Yücel Çelikbilek'in — beyanat defteridir.** Yerel arşivin kendisi %85,5 oranında bu aktörün yansımasıdır; vaat kümesi bu yanlılığı **birebir devralır.**
> **Ne DEMEK DEĞİLDİR:** kayıtlar sahte değildir, hepsi künyeli ve URL'lidir.
> **Ne DEMEKTİR:** *"Beykoz'da kim ne söz verdi"* sorusunun cevabı **eksiktir** — İBB, ÇŞB, TOKİ, özel sektör sözlerinin çoğu bu arşive hiç girmemiştir. Defter **temsilî değil, kaynak-bağımlıdır.**
> ★ **Ve yan bulgu:** **sürtünme endeksi vaat defterinden yapısal olarak daha az yanlıdır** (%54,4 ↔ %79,1). Sebebi basit — **itiraz eden, konuşandan başkasıdır.** İtirazlar ÇŞB (15), Milli Emlak, meslek odaları ve muhalefet üzerinden gelir. **Bu yüzden sürtünme endeksi, vaat defterinden daha güvenilir bir yönetişim göstergesidir.**

## 1.3 ★★★ SÖZ × AKIBET ÇEKİRDEĞİ — defterin asıl işi

Vaat defteri tek başına bir liste. **Değeri, sözün akıbetiyle eşleştirilmesinde.** Aşağıdaki her satırın sözü basın arşivinden künyeli, akıbeti başka bir CC'den doğrulanmıştır *(#21-B · #34: söz basın, akıbet KAP/İhale/saha — kaynaklar karıştırılmadı)*.

| # | **SÖZ** (tarih · aktör · künye) | **AKIBET** (kaynak) | Geçen süre | Durum |
|:-:|---|---|---:|:-:|
| **V1** | **2011-02-13** · Çelikbilek + İş Bankası/İş Yatırım — *"2002'de üretime son veren **Paşabahçe Cam Fabrikası** 7 yıldızlı otele dönüştürülecek; İBB ve **Boğaziçi İmar Müdürlüğü'ne izin başvurusu yapıldı"* · `beykozguncel.com/beykoza-yedi-yildizli-otel-yapiliyor` | 🔴 **Arşivde bu vaadin izi 2011-02-13'ten sonra YOK.** 4 cümlenin dördü de aynı gün; 15 yıl boyunca tek takip haberi yok. Otel kurulmadı. | **15,4 yıl** | 🔴 **SÖNDÜ** |
| **V2** | **2011-02-13** · Çelikbilek — *"**Sümerbank Deri Kundura** özelleştirildi, bu arsada da otel yapılmak için **izinler alındı**"* (5 yıldızlı) · aynı künye | 🔴 Otel yok. Kundura bugün **kültür/film kampüsü** işlevinde *(master §5: 183 dönüm)*. **İzin alındı → bina yok.** | **15,4 yıl** | 🔴 **SÖNDÜ** |
| **V3** | **2011-01-31** · Çelikbilek — *"**Beykoz Vakfı**, Tekel Fabrikası arsası üzerinde **bir üniversite** yapmak için atılımlarda bulunuyor"* · `beykoz-vakfindan-sicak-karsilama` | 🔴 Üniversite olmadı; arsa **Torunlar**'a gitti *(2012-09-20 tapu devri)*. **Aynı parselin rakip geleceği kaybetti.** | — | 🔴 **KAYBETTİ** |
| **V4** | **2011-02-13** · Çelikbilek — *"Satışı **iptal edilen** Paşabahçe **Tekel** Fabrikası'nın yeniden satışı sürüyor; büyük ihtimalle orası da **büyük bir otel zincirine** dönüşecek"* | 🟡 **Gerçekleşti — ama 17 yılda.** 2012-04-28 Torunlar Gıda 5 yıldızlı otel · 2012-09-20 tapu devri · 2016-03-08 *"Kentsel Resort Otel"* · **2026 KAP: 71.909 m², 129 odalı otel, açılış 2028** *(CC-Tic T128-EK + CC-Borsa)* | **17,1 yıl** | 🟡 **GECİKMELİ ✓** |
| **V5** | **2011-01-31** · Çelikbilek — *"Beykoz'da **6 ay içerisinde** Türk-Alman Üniversitesi ile Kavacık'ta büyük bir **Medipol** sağlık üniversitesi yapılacak"* | 🟢 **Oldu** — 2014-10-21 Çelikbilek: *"TAÜ kuruldu, **iki yıldır** eğitime devam ediyor"* → fiilî başlangıç ~2012 sonu. Medipol Kavacık ✓ | söz **6 ay** ↔ gerçek **~36 ay** = **6 kat** | 🟢 **OLDU, 6× geç** |
| **V6** | **2013-01-06** · *"**Kanal Riva**"* — Ömerli Barajı ile Karadeniz arası Riva Deresi ıslahı + turizm tesisleri, **2 milyar TL**, **Zaha Hadid** · ★ *"fikir burada **yer sahibi olan işadamlarından** çıktı"* · `2-milyarlik-kanala-hadidin-eli` | 🔴 **Kanal Riva yok.** 2015-07-22 hâlâ *"İSKİ'yle yazışmalar sürüyor… Riva **İstanbul'un Bodrum'u** olacak"*. Riva'nın 2026'daki fiilî gelişimi **turizm değil KONUT** (EKGYO 708 konut + Kalyon villa) | **13,6 yıl** | 🔴 **SÖNDÜ + AMAÇ DEĞİŞTİ** |
| **V7** | **2010-05-12** · Çelikbilek — *"Ağız ve Diş Sağlığı Hastanesi'nin **yanına sağlık ocağı** yapılacak"* · `celikbilek-kavacikta-esnafi-dinledi` | ❓ **Ölçmedim** — arşivde takip yok, saha teyidi yok. **Bilinmiyor yazıyorum.** | — | ❓ **ÖLÇÜLMEDİ** |

### ★ Defterin öğrettiği üç şey

1. **Söz veren ile yapan aynı taraf değil.** V1-V2-V3'ün üçünde de sözü **belediye başkanı** verdi, yapması gereken **özel sektör/özelleştirme idaresi**ydi. Üçü de söndü. V4'te ise vaadi bir **şirket** üstlendi (Torunlar) — **gecikti ama oldu.**
2. ★★ **"İzin alındı" bir sinyal değildir.** V2'de 2011'de *"izinler alındı"* denmiş; 15 yıl sonra bina yok. **İzin, niyetin değil prosedürün ölçüsüdür.** *(Bu doğrudan master §6 ASKI×SERMAYE bulgusunun sınırıdır: askı bir sinyaldir, garanti değil.)*
3. **Gerçekleşen tek büyük vaadin süresi 17,1 yıl.** Riva 7,6-8,4 · hastane ~12 · **Tekel 17,1** — Beykoz'un ölçülmüş dördüncü uzun-döngü kaydı ve **en uzunu.**

## 1.4 🔧 SIG11 DÜZELTMESİ — TEKEL zincirinin ilk halkası yanlış atfedilmişti

SIG11'de master'a şunu yazmıştım:

> ❌ *"TEKEL zinciri: **2011-02-13 '7 yıldızlı otel'** → 2012-03-28 'yeni sahibi' → …"*

**Ham kayıt bunu doğrulamıyor.** `beykoza-yedi-yildizli-otel-yapiliyor` künyeli 2011-02-13 tarihli yazı **tek fabrikayı değil, ÜÇ fabrikayı** birden anlatıyor:

| Fabrika | O yazıdaki ifade |
|---|---|
| **Paşabahçe CAM** | ★ **"7 yıldızlı otele dönüştürülecek"** — İş Bankası kuruluşu **İş Yatırım** · İBB + Boğaziçi İmar'a başvuru |
| **Sümerbank Deri Kundura** | "5 yıldızlı otel için izinler alındı" |
| **TEKEL** | **"Satışı İPTAL edilen"** Tekel'in *yeniden satışı* sürüyor; *"büyük ihtimalle"* otel zinciri olacak |

> 🔴 **Yani "7 yıldızlı otel" TEKEL'in değil, CAM FABRİKASI'nın vaadidir.** Tekel o yazıda bir **vaat** değil, bir **sürtünme** kaydıdır (satış iptali).
> ✅ **Düzeltme:** TEKEL zincirinin başlangıcı **2011-02-13'te kalır** — ama etiketi *"7 yıldızlı otel vaadi"* değil, **"satış iptali + yeniden satış arayışı"**dır. Vaat halkası **2012-04-28**'dir (*"Tekel Fabrikası'nı alan **Torunlar Gıda** burada **beş yıldızlı** otel inşa edecek"*).
> 📏 **Zincir uzunluğu değişmedi** (2011-02 → 2028 = 17,1 yıl); **değişen, ilk halkanın ne olduğudur.** Ve ilk halka bir vaat değil bir **iptal** olduğu için, Tekel zinciri artık **her iki deftere birden** giriyor.
> ⚠️ Aynı hata S96 sayfa paketine de taşındı: `s4_pasabahce_tekel_incirkoy.txt` içinde **BEY-29'un ilk kaydı** *"Beykoz'a yedi yıldızlı otel yapılıyor"* olarak duruyor. **Basın'a düzeltme bildirimi gerekiyor.**

## 1.5 Vaat konu dağılımı — *ne* vadedildi

*(taahhüt çekirdeği n=120 · çoklu-sayım: 101 etiket)*

| Konu | n | Yıllar |
|---|---:|---|
| **su/altyapı** | **35** | 2011-2021 · tek sürekli kalem |
| okul/eğitim | 15 | 2011:6 · 2018'e kadar |
| spor/tesis | 15 | 2011-2015 · **2015'ten sonra 0** |
| park/yeşil | 13 | 2011-2018 |
| **2B/mülkiyet** | **10** | 2012:3 · 2013:4 · 2016:1 · 2017:2 |
| konut/dönüşüm | 7 | 2012:1 · 2016:2 · **2017:4** |
| ulaşım/yol/köprü | 4 | 2010-2012 |
| hastane/sağlık | 2 | 2011:2 |

> ★ **Vaat konusu 2016-2017'de kaydı değiştirdi:** spor/tesis/park sıfırlanırken **konut/dönüşüm** yükseliyor (2017'de 4 — kümenin zirvesi). **Belediye dili "hizmet"ten "dönüşüm"e geçmiş.** Bu, master §6'daki askı×sermaye eşzamanlılığının **söylem tarafındaki öncülüdür** — ve tarih olarak **9 yıl öndedir.**

---

# 2. ★★ §SÜRTÜNME-ENDEKSİ — itiraz/dava → gecikme

**Tanım:** `iptal · dava · itiraz · reddedil` fiillerinden en az birini içeren, aktör-atıflı, künyeli cümle. **n = 57** *(Basın L8: 59)*.

## 2.1 Zaman serisi — ve ham sayının tuzağı

| Yıl | Korpus | Sürtünme | **‰ (binde)** | Vaat | **Vaat ‰** |
|---|---:|---:|---:|---:|---:|
| 2010 | 189 | 2 | 10,6 | 7 | 37,0 |
| 2011 | 206 | 2 | 9,7 | 20 | **97,1** |
| 2012 | 878 | 5 | 5,7 | 36 | 41,0 |
| 2013 | 698 | 3 | 4,3 | 38 | 54,4 |
| 2014 | 634 | 7 | 11,0 | 34 | 53,6 |
| **2015** | 665 | **17** | **25,6** | 13 | 19,5 |
| 2016 | 593 | 3 | 5,1 | 28 | 47,2 |
| 2017 | 614 | 4 | 6,5 | 26 | 42,3 |
| 2018 | 436 | 5 | 11,5 | 15 | 34,4 |
| **2019** | 150 | 5 | **33,3** | 3 | 20,0 |
| 2020 | 140 | 1 | 7,1 | 2 | 14,3 |
| 2021 | 128 | 2 | 15,6 | 1 | 7,8 |
| 2023 | 131 | 1 | 7,6 | 2 | 15,3 |

> ⚠️ **Ham sayı 2015'i zirve gösterir (17). Normalize edilince zirve 2019'dur (33,3‰).** Korpus 2019'da 150'ye düşmüştü; 5 kayıt orada 17 kayıttan yoğundur.
> **Bu, SIG10'daki köprü-anlatısı tuzağının tekrarıdır** ve bu kez **düşmeden yakaladım.** Arşiv derinliği yıllara göre 44 kat değişiyor (878 ↔ 20) — **bu gövdede hiçbir yıl-karşılaştırması normalize edilmeden yapılamaz.**

## 2.2 ★★★ ANA BULGU — söz/itiraz oranı 16 yılda **6 kat** tersine döndü

| Dönem | Korpus | Vaat ‰ | Sürtünme ‰ | **Vaat/Sürtünme** |
|---|---:|---:|---:|---:|
| **2010-2014** | 2.605 | 51,8 | 7,3 | **7,1×** |
| **2015-2019** | 2.458 | 34,6 | 13,8 | **2,5×** |
| **2020-2024** | 515 | 9,7 | 7,8 | **1,2×** |

> ★★ **Beykoz'un yerel gündemi, 16 yılda "söz verilen yer"den "itiraz edilen yer"e döndü.** Vaat yoğunluğu **5,3 kat düştü** (51,8 → 9,7‰), sürtünme yoğunluğu ise **hemen hemen sabit kaldı** (7,3 → 7,8‰). Oran **7,1× → 1,2×**.
> **Kırılma yılı 2015'tir** — sürtünmenin vaadi ilk kez geçtiği yıl (25,6 ↔ 19,5‰).
> **Ve 2015 tesadüf değil:** o yıl **Beykoz 1. etap koruma amaçlı revizyon 1/5000 + 1/1000 planları askıya çıktı** (aşağıda G1). **Plan rejimi geldiği anda defter tarafını değiştirdi.**
> ⚠️ **Şerh:** korpus 2020 sonrası 515'e düşüyor — son dönem oranı **ince örneklem üzerinde**. Yön güvenilir, büyüklük değil.

## 2.3 ★ ÖLÇÜLMÜŞ SÜRTÜNME → GECİKME VAKALARI

| # | Sürtünme olayı (künye) | Sonuç | **Ölçülen gecikme** |
|:-:|---|---|---:|
| **G1** | **2015-01-21** ÇŞB — 1. etap koruma amaçlı revizyon planları askıda, itiraz dilekçeleri **17.02.2015'e kadar** → **2015-02-20** Çelikbilek: *"Planlar askıdan inecek ama bir de **itiraz safahatı** başlayacak"* → **2015-07-22** *"askı süresi içinde yapılan **itirazlara ilişkin değişiklikler ÇŞB tarafından onaylandı**"*, plan yeniden 30 gün askıya | plan yürürlüğe | **6 ay 1 gün** *(21.01 → 22.07.2015)* |
| **G2** | **2011-02-13** — Paşabahçe Tekel **satışı iptal edildi**, yeniden satış çalışmaları | **2012-09-20** Torunlar GYO **tapu devri tamamlandı** | **19 ay** |
| **G3** | **2015-06-10** ÇŞB — **Mimarlar Odası + Şehir Plancıları Odası** davası, **Kuzey Marmara Otoyolu**'nun bölgeye ilişkin ÇŞB planı hakkında mahkeme kararı | ⚖️ Çavuşbaşı plan davası **2024-04'te istinafta REDDEDİLDİ**, planlar yürürlüğe döndü *(master §5.0-B)* | **~9 yıl** *(dava rejimi süresi)* |
| **G4** | **2011-09-07** Çelikbilek — *"bu sene yapımı düşünülen **asfaltlama çalışmaları 2 ay gecikti**"* | — | **2 ay** *(beyan, küçük ölçek referansı)* |

> ★ **G1, dosyanın en kullanışlı sayısıdır:** Beykoz'da bir imar planının **askı → itiraz → itiraz değerlendirmesi → yeniden askı** turu **~6 ay** sürüyor.
> **Neden önemli:** master §6'da *"dört mahallede plan askıda"* diyoruz ve §8.3'te *"askıda kalan kararların oranı yayımlanmadı"* diye borç yazmıştık. **G1 bu borcun ilk gerçek ölçüsüdür** — oranı değil ama **çevrim süresini** veriyor: 2026'da askıya çıkan bir plan için **en erken ~6 ay sonra** yürürlük beklenir; **itiraz dava'ya dönerse G3 rejimi (yıllar) devreye girer.**
> 🔴 **Şerh:** G1 tek bir plan turudur (n=1). Genelleme değil, **çıpa**dır.

## 2.4 ★ POYRAZKÖY-2012 — bir mahallenin basın hayatına **itirazla** başlaması

S96 `mahalle_ilkler` verisi *(#21-B künye: `beykozguncel.com/…`)*:

| Mahalle | **İmar konulu ilk kayıt** | Başlık |
|---|---|---|
| **Poyrazköy** | **2012-07-25** | ★ *"**3. köprüye karşı dilekçe kampanyası**"* |
| **Çengeldere** | 2012-04-20 | *"**2B ajanları işbaşında**"* |
| **Gümüşsuyu** | 2012-04-23 | *"**2B Bağdat'tan değil, Beykoz'dan döner!**"* |

> ★★ **Üç mahallenin de imar konusundaki ilk basın kaydı bir itiraz/uyarı kaydıdır.** Hiçbiri *"şu proje geliyor"* ile başlamıyor; üçü de **savunma diliyle** başlıyor.
> **Poyrazköy ilk-vakadır** çünkü itirazın hedefi bir plan değil, **YSS (3.) köprüsünün kendisidir** — yani kısıtın değil, **kısıtı kaldıracak altyapının** karşısında. *(Poyrazköy'ün `ilk_proje` ve `ilk_fiyat` kaydı da aynı olay: **2010-05-13 "3. Köprü açıklandı; Poyrazköy - Garipçe"** — mahalle basına köprüyle girdi, 2 yıl sonra köprüye karşı dilekçeyle döndü.)*
> **Master'a katkısı:** master §5'te arz kıtlığını **kurumsal kısıtlarla** (Boğaziçi/orman/SİT/NATO-POL) açıklamıştık. Sürtünme endeksi **beşinci bir kısıt tipi** gösteriyor: **toplumsal itiraz.** Diğer dördü gibi haritada bir sınırı yok, ama **ölçülebilir bir gecikme** üretiyor (G1: 6 ay · G3: ~9 yıl).

## 2.5 Sürtünme teması

| Tema | n | Yıllar |
|---|---:|---|
| **imar-planı** | **25** | 2011-2023 · sürekli |
| **havza/su** | **10** | 2010-2023 · sürekli |
| 2B/orman | 6 | 2013-2019 |
| ihale/tahsis | 4 | 2011, 2017 |
| köprü/yol | 3 | 2013-2015 |

> **İmar-planı ve havza/su, 13-14 yıl boyunca hiç kesilmeyen iki sürtünme hattıdır.** Master §5'in dört kısıtından **ikisi** (Boğaziçi imar rejimi · havza) böylece **basın tarafında da sürekli** — çift kanıt.
> 💰 **Nicel iddia (tek taraflı, künyeli):** `2015-07-29` Çelikbilek — *"CHP meclis üyelerinin açtığı davalar nedeniyle belediye **80 milyon** zarara uğradı."* **Bu bir taraf beyanıdır**, doğrulanmadı; sürtünmenin *maliyeti olduğu* iddiasının arşivdeki tek sayısal izi olduğu için kaydedildi. **İZLENEN.**

## 2.6 🔴 Sürtünme bir ısı ayağı OLMALI MI? — **hayır, bu turda değil**

Cazip: 57 kayıt, mahalle atfı kısmen var, yönetişim riskini ölçüyor. Ama:

| Engel | Açıklama |
|---|---|
| **Mahalle atfı zayıf** | 57 kaydın çoğu **ilçe düzeyinde** (ÇŞB planı, meclis davası). Ayak, mahalle düzeyinde tanımlı olmalı (#18). |
| **Tek kaynak** | Tamamı beykozguncel. HABER-ISI ayağı zaten aynı gövdeden besleniyor → **çift sayım riski** (#34). |
| **Yön belirsiz** | Sürtünme *"burada değerli bir şey var"* da demek olabilir, *"burada iş yürümüyor"* da. Ayak, **yönü belli** olmalı. |
| **Çelikbilek yanlılığı %54,4** | Vaatten daha iyi ama hâlâ tek aktör ağırlıklı. |

> ✅ **Karar: sürtünme = KATMAN, ayak değil.** *(T131 ticari-zincir için ÜA'nın verdiği kararla aynı gerekçe.)* Isı tablosu **11 ayakta kalır.**
> 🔧 **Ayak-adayı olması için gereken:** mahalle-atıflı dava/itiraz kaydı **ikinci bir kanaldan** (planaski itiraz tutanağı veya UYAP/istinaf kararı). **Bu, B5/B6 borcunun içinde.**

---

# 3. 20 BULGU — Signals süzgeci

| Karar | n | Bulgular |
|---|---:|---|
| ✅ **Master'a girdi** | **6** | #6 (İSKİ 2012 zirvesi → §9.3) · #7-8-9 (mahalle ilk-imar kayıtları → §9.3 Poyrazköy vakası) · #15-16 (Çelikbilek 4266+2032 → **yansıma şerhi**) |
| 🟡 **Şartlı / şerhle** | **5** | #1-2-3-4-5 (BEY-zincir kayıt sayıları) — **"boşluk-yıl 0" bir süreklilik kanıtı değil**, korpus yoğunluğunun türevi; normalize edilmeden kullanılamaz |
| ❌ **Alınmadı** | **6** | #10-11 (2B "1 milyar 250 milyon TL cebinde kaldı" — **tek taraf beyanı, doğrulanmadı**) · #12-13-14 (izci kampı 10 bin / İBB 200 bin / 45 mahalle atkı — **gayrimenkul sinyali değil**) · #20 (112 istasyonu alıntısı) |
| 🔵 **İç kayda** | **3** | #17 Murat Aydın 215 · #18 İSKİ 209 · #19 ÇŞB 184 → aktör-yoğunluk referansı |

> 🔴 **#10'a özel not:** *"2B satışlarında 1 milyar 250 milyon TL Beykozlunun cebinde kaldı"* (2014-02-27) cümlesi **seçim öncesi bir kampanya beyanıdır** (yerel seçim 30.03.2014). Master §5'te 2B'yi **arz kıtlığını kıran mekanizma-1** olarak işledik; bu cümle o mekanizmanın **büyüklüğünü** verecek tek sayı — ama **kaynağı, ölçmesi gereken tarafın kendisi.** Doğrulanmadan girmez. **Milli Emlak 2B satış cetveli = B-borcu.**

---

# 4. 7 LENS → hangi ayağa dokunuyor

| Lens | n | Signals'ta karşılığı | Karar |
|---|---:|---|---|
| **L1 Vaat** | 229→**120** | yeni **§9.2** | ✅ **bölüm oldu** |
| **L8 Sürtünme** | 59→**57** | yeni **§9.3** | ✅ **bölüm oldu** |
| **L2 Fiyat-arkeolojisi** | 4.008 | §7 finans — **2016 zirvesi** | 🟡 **CC-Finans'a devir** (S96 dağıtımı ile aynı); Signals fiyat üretmez |
| **L7 Afet-risk** | 539 | §3 dönüşüm amacı · TTA97 deprem-tezi | 🟡 **şartlı** — 2014 zirvesi (140) normalize edilmeli; ham hâliyle kullanılmaz |
| **L10 Seçim-deseni** | 402 | — | 🔵 **iç kayıt** — 2014'te 171; vaat/sürtünme okumasında **takvim şerhi** olarak kullanıldı |
| **L6 Altyapı-öncülleri** | 59 | ısı YAPI ayağı | 🟡 **şartlı** — mahalle atfı yok |
| **L4 Sessizlik** | **0 mahalle** | ★ aşağıda | ✅ **çapraz kontrol** |

## ★ L4 × Isı haritası — "sessiz" iki farklı şey demek

Basın: **45 mahallenin 45'i de arşivde en az bir kez geçiyor → 0 sessiz mahalle.**
Signals: **45 mahallenin 10'unda ölçülebilir ayak yok (0/11).**

> ★ **Çelişki değil, tanım farkı — ve master'a girmesi gereken bir ayrım:**
> **Basın-sessizliği ≠ sinyal-sessizliği.** Bir mahalle basında geçebilir (muhtar ziyareti, iftar, kaza) ve yine de **hiçbir ölçülebilir gelişim ayağı taşımayabilir.**
> 🔧 **Sonuç:** master §2'deki *"tarandı-sıfır"* damgası **doğru kalıyor** ama ifadesi netleşiyor: **"basında yok" demiyoruz, "ölçtüğümüz 11 kanalın hiçbirinde eşiği geçmiyor" diyoruz.**

---

# 5. SAYFA PAKETLERİ — ONAY LİSTESİ (dürüst)

Talep: *"10/10 sunum-hammadde"*. **Onaylayamıyorum.** On paketin her satırını okudum; sistematik bir etiket hatası var: `ilk_imar` / `ilk_fiyat` / `ilk_proje` alanları, **konusu o olan** habere değil, **o kelimeyi herhangi bir yerinde geçiren** ilk habere bağlanmış.

| # | Paket | Boyut | **Karar** | Gerekçe |
|:-:|---|---:|:-:|---|
| 1 | s1_yonetisim | 878 b | 🟡 **ŞARTLI** | BEY-04 (Köseler/yönetişim) ilk kaydı *"Beykoz köylerinden biri: ÖĞÜMCE"* — **konu dışı**. Aktör satırları (2B 1,25 Mr TL) kullanılabilir, **beyan şerhiyle** |
| 2 | s2_ulasim_kopru | 1.135 b | 🟡 **ŞARTLI** | BEY-24 viyadük ölümlü kaza ✓ gerçek · BEY-25 ilk kaydı *"milli mutabakat metni"* ✕ · ★ **2016-12-05 Göksu/15 Temmuz Gaziler Köprüsü satırı kurtarılmalı** (aşağıda) |
| 3 | s3_riva_ekseni | 499 b | 🟡 **ŞARTLI** | `ilk_imar` ve `ilk_proje` ikisi de *"2018 için Beykoz'a 513 milyonluk bütçe"* — ✕ bütçe haberi. ★ Ama `ilk_fiyat` = **"2 milyarlık kanala Hadid'in eli"** — **paketin en değerli satırı** (V6) |
| 4 | s4_pasabahce_tekel | 726 b | 🔴 **DÜZELTME ŞART** | BEY-29 ilk kaydı *"yedi yıldızlı otel"* → **§1.4'teki yanlış atıf.** Düzeltilmeden sunuma girmemeli · `Paşabahçe·ilk_fiyat` = *"suçlar %10 azaldı"* ✕ |
| 5 | s5_havza_koruma | 596 b | 🟢 **ONAY** *(2 satır)* | BEY-18 ilk kaydı ✕ (*"Bir Yuva Arıyorum"* hayvan barınağı) **ama** iki İSKİ satırı birinci sınıf: **Kanal Riva 2013** + ★★ **NATO boru hattı deplasesi** (aşağıda) |
| 6 | s6_tokatkoy | 499 b | 🔴 **RED** | 3 etiketin 3'ü de yanlış: `ilk_proje` = *"120 Bilgili Hanım sertifikasını aldı"* · `ilk_imar`/`ilk_fiyat` = *"16'ıncı Halk Meclisi"*. **Tokatköy'ün gerçek zinciri master'da zaten var** (EKGYO 2022 · 1.071 tapu 2026) — bu paket ondan zayıf |
| 7 | s7_kavacik_uclu | 552 b | 🔴 **RED** | `Kavacık·ilk_proje` = *"112 Acil Yardım İstasyonu **Ortaçeşme'ye** taşındı"* — **başka mahalle** (#18 ihlali) · `ilk_fiyat` = *"1,5 milyon TL'lik inşaat malzemesini çaldılar"* — hırsızlık haberi |
| 8 | s8_seffaflik | 377 b | 🟡 **ŞARTLI** *(1 satır)* | BEY-04 satırları konu dışı; ★ **2012-08-23 "Teftiş Kurulu Müdürlüğü'ne ve İnsan Kaynakları'na sevk"** satırı gerçek yönetişim kaydı, **tek başına** kullanılabilir |
| 9 | s9_hastane_saglik | 902 b | 🟡 **ŞARTLI** | BEY-33'ün son kaydı *"Kanlıca sahilinde erkek cesedi bulundu"* ✕. 2014-01-02 sağlık yatırımı satırı ✓ |
| 10 | s10_mahalle_nabiz | **0 b** | 🔴 **BOŞ** | Dosya sıfır bayt. **Ama boşluk bir bulgudur** (L4 = 0 sessiz mahalle) — §4'te işlendi |

### 📊 Onay tablosu
**🟢 Onay: 1 · 🟡 Şartlı: 6 · 🔴 Red/düzeltme: 3** → **"10/10 sunum-hammadde" DEĞİL.**
**Sunuma hazır satır sayısı: ~9** (10 paketten süzülen, tek tek doğrulanmış). Paketlerin değeri **yüksek**, ama **paket düzeyinde değil satır düzeyinde.**

> 🔧 **CC-Basın'a bildirim (3 madde):** ① `ilk_imar/ilk_fiyat/ilk_proje` alanları **başlık+gövde konu eşleşmesi** ile yeniden kurulmalı, salt kelime varlığıyla değil. ② s7'de **mahalle atfı çapraz kaçağı** var (Kavacık→Ortaçeşme). ③ BEY-29'un ilk kaydı yanlış atıflı.

## 5.1 ★★ Paketlerden çıkan İKİ YENİ BİRİNCİ-EL KAYIT

**① NATO-POL kısıtı MUTLAK DEĞİL — bedeli ölçüldü**
`2016-12-05` · `beykozguncel.com/15-temmuz-gaziler-koprusu-uc-mahalleyi-birbirine-bagladi`
> *"Köprü İmal Bilgileri: **405 metre uzunluğunda Nato Boru Hattı Deplasesi** · 215 metre İGDAŞ Boru Hattı Deplasesi · 200 metre 700 mm çaplı İSKİ İshale Hattı · 223 metre Yüksek Gerilim Hattı · 25 metre Telekom Hattı · 587 metre oto korkuluğu…"*

Master §5.0'da **NATO-POL boru hattını 4. kısıt tipi** olarak yazmıştık. Bu kayıt gösteriyor ki hat, **2016'da bir belediye köprüsü için 405 metre fiilen deplase edilmiştir.**
> ✅ **Master düzeltmesi:** NATO-POL **mutlak bir kısıt değil, bedelli bir kısıttır.** Aşılabilir — ama deplase mühendisliği ve kurumsal izin gerektirir. **Kısıt, "imkânsız"dan "pahalı ve yavaş"a düşürüldü.** *(B7 borcu — güzergâh mahalleleri — hâlâ açık; bu kayıt güzergâhın **Göksu/15 Temmuz Gaziler Köprüsü hattında** olduğunu söylüyor, üç mahalleyi bağlıyor.)*

**② Kanal Riva'nın fikri KİMDEN çıktı**
`2013-01-06` · `beykozguncel.com/2-milyarlik-kanala-hadidin-eli`
> *"Riva Deresinin ıslah edilerek turizm tesislerini içeren Kanal Riva projesine dönüşme fikri **burada yer sahibi olan işadamlarından çıktı**."*

> ★ Master §4'te sermaye haritasını çıkarırken *"kim geldi"* sorusunu sorduk. Bu satır **"kim başlattı"** sorusunu cevaplıyor: **Riva'da girişim kamudan değil, arazi sahiplerinden gelmiş** — ve 13,6 yıl sonra hayata geçen şey **onların önerdiği turizm değil, EKGYO/Kalyon konutu** oldu. **Amaç değişti, arazi aynı kaldı.**

---

# 6. 20 SORU → SORU BANKASI (damgalı)

**Dosya:** `~/signals/soru_bankasi.md` · **SB-01…SB-20** · sahibi/kanalı/durumu ile.
**Bu turda SIG12'nin kendisi 3 soruyu kısmen cevapladı:**

| Soru | S96 hâli | **SIG12 katkısı** |
|---|---|---|
| **SB-10** | *"Paşabahçe TEKEL 2012 5-talipli ihalesinde diğer 4 aday kim?"* | 🟡 **Kazanan doğrulandı:** `2012-04-28` *"Tekel Fabrikası'nı alan **Torunlar Gıda**"* + `2012-09-20` tapu devri. **Diğer 4 aday hâlâ bilinmiyor** → CC-İhale |
| **SB-04** | *"Torunlar Kentsel Resort 2017 sonrası inşaat durumu (2018-2024 arşiv boşluğu)?"* | 🟢 **Boşluk kapandı — basından değil KAP'tan:** 71.909 m², 129 oda, otel **2028** (T128-EK). **Arşiv boşluğu bir bilgi boşluğu değilmiş, kanal boşluğuymuş** |
| **SB-06** | *"Çelikbilek döneminde en tartışmalı 3 imar kararı?"* | 🟡 **Sürtünme endeksi aday veriyor:** ① 1. etap koruma revizyon planları (2015, 17 itiraz kaydı) ② 2B/ÖPA süreci (2013-2014) ③ KMO/Çavuşbaşı planları (2015 dava → 2024 red) |

---

# 7. MASTER'A GİREN (rX) — özet

| # | Değişiklik | Yer |
|:-:|---|---|
| 1 | 🆕 **§9.2 VAAT DEFTERİ** — 229→120 çekirdek · söz×akıbet 7 satır · Çelikbilek yansıma şerhi | yeni bölüm |
| 2 | 🆕 **§9.3 SÜRTÜNME ENDEKSİ** — 57 kayıt · 7,1×→1,2× dönüşü · G1-G4 gecikmeleri · Poyrazköy ilk-vaka | yeni bölüm |
| 3 | 🔧 **TEKEL zinciri ilk halka düzeltmesi** — "7 yıldızlı otel" = CAM Fabrikası | §9 defter notu + §13 V16 |
| 4 | 🔧 **NATO-POL: mutlak → bedelli kısıt** (405 m deplase, 2016) | §5.0 |
| 5 | 🆕 **5. kısıt tipi: toplumsal itiraz** | §5 |
| 6 | 🔧 **"tarandı-sıfır" ifadesi netleşti** — basın-sessizliği ≠ sinyal-sessizliği | §2 |
| 7 | 🆕 Defter **v9 + yansıma şerhi**; **BEY-35/36 aday** (ÜA numaralandırma onayına) | §9 |

---

# 8. V16 — bu turda kendi işime itiraz

1. **229'u 120'ye indirdim ama filtreyi ben de yeniden kurdum.** Benim `dar` filtrem de bir seçimdir; başka bir fiil seti başka bir sayı verir. **120 bir gerçek değil, bir tanımdır** — tanımı yazdım, sayıyı da onunla birlikte okutuyorum.
2. **Söz×akıbet tablosunun 7 satırından 1'i ölçülmedi (V7).** Kalan 6'nın akıbetlerinden 3'ü *"arşivde iz yok"*a dayanıyor — **iz yokluğu, olmadığının kanıtı değildir.** Bu arşiv 2019 sonrası zaten ince. **V1/V2 "söndü" damgası, bu şerhle okunmalıdır.**
3. 🔴 **SIG11'de TEKEL zincirinin ilk halkasını yanlış atfettim** — ve bu, **bir tur boyunca master'da yanlış durdu.** SIG10-11'de tam da bunu yapmamak için ham JSON okumaya geçmiştim; bu kez ham veriyi **S96 zorlayana kadar** okumadım. **Ders tekrar etti: özet tablo, gövde metninin yerine geçmiyor.**
4. **Sürtünme→gecikme eşleştirmelerinin hepsi n=1.** G1 (6 ay) bir plan turudur, G2 (19 ay) bir satıştır, G3 (~9 yıl) bir dava rejimidir. **Bunlar bir dağılım değil, dört çıpadır.**
5. **Normalizasyonu bu kez önce yaptım — ama yalnız çünkü SIG10'da neredeyse düşüyordum.** Ham 2015 zirvesi (17) tabloya girseydi *"itirazlar 2015'te patladı"* yazacaktım; doğrusu **2019'un daha yoğun olduğu.** Refleks hâline gelmedi, **kural hâline getirmek gerekiyor** → Standing aday.
6. **Sayfa paketleri için "10/10 onay" istendi, 1 onay verdim.** Bunu bir ret olarak değil bir **süzgeç** olarak yazdım; paketlerin içindeki 9 satır gerçekten değerli ve ikisi (NATO deplase · Hadid) **master'ı düzeltecek kadar** değerli. **Kusur pakette değil, etiketleme yönteminde.**
7. **Çelikbilek yansıma şerhini yazdım ama sonuçlarını sonuna kadar götürmedim:** eğer arşivin %85,5'i tek aktörse, **HABER-ISI ayağı da aynı yanlılığı taşıyor.** Kavacık'ın 866 kaydı ne kadar "mahalle gündemi", ne kadar "başkanın Kavacık'a gitmesi"? **Bu turda ölçmedim — SIG13 borcu.**

---

**Kaynaklar (#21-B):** CC-Basın **S94-S96** (`aktor_baglam.jsonl` 7.370 · `iski_havza_ozut.jsonl` 519 · `mahalle_ilkler.json` 45 · `adaylar_beykoz_S94_TEMIZ.jsonl` 5.579 tarihli) · CC-Tic **T128-EK** · CC-Borsa · CC-Analiz **S51/S53** · CC-Signals **SIG10-11**
**Kod:** `kod/sig12_vaat_surtunme.py` · **Çıktı:** `cikti/sig12_vaat_surtunme.json` (225 vaat + 57 sürtünme, künyeli tam liste)
**Üreten:** CC-Signals · **Denetleyen:** ☐ **ÜST AKIL** (kural 4 — üreten ≠ denetleyen)
**$0 · A04 · V16 · #18 · #21-A/B · #34 · SİLME-YOK · PUSH YOK**
