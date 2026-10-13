# ÖRÜMCEK SORU SETİ v1 — Tradia'nın tek sorusu ve 640 türevi
**Üst Akıl · 11 Ekim 2026 · kanon adayı** (Hafıza `kanon/orumcek_soru_seti_v1.md` olarak işler; Vezir vaat defterine "VAKA_SABLONU'nun soru omurgası" olarak bağlar)

## 0. Tek soru
Tradia her yere tek soru sorar: **"Bu yer nedir?"** — il, ilçe, mahalle/köy ya da parsel.
Cevap bir sayı değil, bir **dosyadır**. Dosya 16 kök sorudan kurulur; her kök soru örümcek ağı gibi dört halkada açılır.
Son halkada 640 hücre vardır; her hücre bir soru, bir sahip departman ve bir kanıt sınıfı taşır.

```
640 = 16 kök soru × 4 ölçek × 5 bakış × 2 zaman
      (15 konu kökü + 1 sistem-kontrol kökü)
```

| Halka | Adı | Değerler |
|---|---|---|
| 1 | **KÖK** (16) | 15 konu + K16 "bu dosyaya güvenilir mi?" |
| 2 | **ÖLÇEK** (4) | İL · İLÇE · MAHALLE/KÖY · PARSEL — "Türkiye bir ürün": 81 il × 973 ilçe × mahalle × parsel |
| 3 | **BAKIŞ** (5) | TALEPÇİ · ARZ · DENETÇİ · SİNYAL · FİNANS |
| 4 | **ZAMAN** (2) | DURUM (kesit tarihli) · DEĞİŞİM (10 yıl eğilim + kontrol tarihi) |

Hücre adresi `K3·PARSEL·DENETÇİ·DURUM` gibi okunur. Hiçbir hücre boş geçilmez; doldurulamayan hücreye
**ERİŞİLEMEDİ / YOK / BİLİNMİYOR** yazılır — tahmin yazılmaz.

## 1. Beş bakış — ağın rolleri

| Bakış | Kim | Soruyu nasıl sorar | Sistemdeki karşılığı |
|---|---|---|---|
| **TALEPÇİ** | Patron · yatırımcı · İnşaat hattı · bayi | Kendi dilinde; "hangi bilgi gelirse kararım değişir" ekiyle | Talep havuzu → vaka açılışı (VAKA_SABLONU) |
| **ARZ** | 12 departman CC — her biri kendi arşiviyle | "Hangi kaynaktan, hangi kesit tarihiyle, hangi ritimle?" | Basın · Sosyal · Tic · İhale · Finans · Map · Aİ · Analiz · Arşiv · Borsa · Hafıza · Pazarlama |
| **DENETÇİ** | Vezir (sistemin CEO'su) · Sinyal · İkinci Kontrol · Üst Akıl tam tarama | "Kanıt sınıfı ne — ÖLÇÜM / BELGE / PROXY / SÖYLEM / BEYAN? İkinci kanıt var mı? Çelişki defteri kapalı mı?" | Çelişki-referans kanonu · varsayım yasağı · idari-ad otoritesi · **Yeniden Arama Hakkı** |
| **SİNYAL** | TT-Sinyal | "Hangi eksen, hangi yön; eşik önceden yazıldı mı; K≥2 sağlanıyor mu?" | 6 eksen: A rejim · B fizik · C kıyı/üst katman · D kamu · E piyasa · F aktör-söylem |
| **FİNANS** | TT-Finans | "Parasal karşılığı ne — maliyet, getiri, teşvik, finansman? Rakam yoksa rakam yazılmaz." | ÇŞB tebliği · teşvik mevzuatı · katılım/murabaha akdi · ÇED · hibe haritası |

**Vezir'in yeri:** bütün sistemin CEO'su. Vaat defteri, kanon, pano ve dondurma yetkisiyle hedeften sapmayı ve
gereksiz uğraşı keser; hiçbir vaka Vezir kaydına girmeden "açık", Vezir kapatmadan "kapalı" sayılmaz.

**Yeniden Arama Hakkı:** Denetçi, kapanmış bir bulgudan tatmin olmazsa onu yeniden açar ve tarama tekrar koşar.
Emsaller: kıyı mesafesi proxy → parsel-kesin (hüküm değişti · değerler lokal) · "PLANSIZ" → "PLAN-DURUM BELİRSİZ" (e-Plan'daki yokluk kanıt sayılmadı) ·
262K yanlış Beykoz etiketi (taban düzeltildi) · İkizdere varsayımı (kanondan silindi).

## 2. On altı kök soru

| # | Kök | Talepçinin sorusu | ARZ — departman · kaynak | DENETÇİ kuralı | SİNYAL ekseni |
|---|---|---|---|---|---|
| K1 | **KİMLİK** | Bu yer tam olarak neresi? | Aİ (TÜİK/MAKS idari ağaç, kaymakamlık köy listesi, OSM) · Hafıza (cografya.json 81×973) | **İdari-ad otoritesi:** ad, evren ağacından doğrulanmadan kanonik dosyaya giremez; Mahalle ≠ Mevkii; köy/mahalle hiyerarşisi | Ön koşul — kimlik yanlışsa tüm eksenler geçersiz |
| K2 | **MÜLKİYET / KADASTRO** | Niteliği ne, sınırı ne, birleştirilebilir mi? | Tic (TKGM künye — Patron ekranından, otomatik sorgu yok) · Arşiv (ham geometri, SHA, 3 kopya) | BELGE sınıfı; **malik yok (KVKK)**; kapalı poligon teyidi; parsel-düzeyi veri public'e girmez | A ekseni girdisi (E1) |
| K3 | **PLAN / İMAR REJİMİ** | Burada ne yapılabilir? | Tic (yönetmelik, ÇDP hükümleri, İÖİ meclis kararları OCR, askılar) · Map (e-Plan) · Patron saha (pafta, beyan) | **Tek-kaynak hüküm yasağı**; e-Plan/EKAP/CKAN "yokluk kanıtı" sayılmaz; yerleşik alan İÇİ / KISMİ / DIŞI üç senaryo | **A** — yön üretebilen ana eksen |
| K4 | **FİZİK / ARAZİ** | Arazi nasıl — eğim, bakı, kot, örtü? | Map (GLO-30 DEM, Sentinel optik+radar, parsel-kesin kesişim) | ÖLÇÜM / PROXY ayrımı; **DSM damgası** ("inşaat kotu için kullanılmaz"); her sayıya referans-noktası etiketi | **B** |
| K5 | **AFET / RİSK** | Burayı ne tehdit eder? | Map (radar hakem, dere/havza) · Basın (sel-heyelan arşivi) · İhale (7269 afet kararları, RG) · Finans (ÇED) | Optik ↔ radar hakemi; haber-kanıtı ≠ belge-kanıtı; MTA/AFAD/DSİ erişilemezse **ERİŞİLEMEDİ** | **C** + B |
| K6 | **ALTYAPI / ERİŞİM** | Oraya ne ulaşıyor — yol, su, enerji, iletişim? | Aİ (OSM altyapı, kurum sayfaları) · Tic (yol statüsü, çekme) · Map (mesafeler) | OSM = PROXY; operatör verisi tescilliyse **YOK** yazılır, tahmin yazılmaz | B/C destek |
| K7 | **KAMU HAMLESİ** | Devlet burada ne yapıyor, ne yapacak? | İhale (EKAP, RG-CB kararları, kamulaştırma) · Basın (meclis kararları, İBB Strapi) · Aİ (kurum-duyuru izleme) | Kapsam **RG metninden** çıkar, haberden değil; "ölçtüm-yoktu" ≠ "bakmadım" | **D** |
| K8 | **PİYASA / ARZ** | Kaç ilan, hangi fiyat dağılımı, emsal var mı? | Analiz (ilan tabanı v24/v25, emsal) · Arşiv (HTML detay beslemesi) | **n-eşiği** (n≥8 → ölçülebilir; altı ⬛ TAVAN, "ucuz" denemez); ilan ≠ işlem (duygusal fiyatlama şerhi) | **E** |
| K9 | **TALEP / NÜFUS** | Kim geliyor, kim gidiyor? | Analiz (ADNKS serisi, TÜİK yabancı satış) · Pazarlama (yurtdışı talep) · Borsa (KTB turizm toplayıcısı) | Resmî seri + tarih damgası; il-düzeyi PROXY mahalleye atfedilmez (**etiket ≠ kapsam**) | **E** |
| K10 | **EKONOMİ / AKTÖR** | Burada kim iş yapıyor? | Tic (**TTSG — görünmez harita**, MERSİS, GİB ilk-100, firma DB) · Borsa (KAP) · Aİ (OSM POI) | Abonelik duvarı aşılmaz; kişisel veri yok; vergi sırası = ölçek proxy'si, kalite değil | **F** |
| K11 | **FİNANS** | Para nereden, kaça, hangi şartla? | Finans (9903 teşvik, katılım/murabaha akdi, ÇŞB birim maliyet, DOKA/TKDK/KOSGEB/KGF, ÇED) | Birincil belge (RG / akit metni); oran gün-damgalı; "yorum şerhi" banka beyanı değildir; lisans-kapalı kaynak (YFK) kullanılmaz | E/F + fizibilite |
| K12 | **SÖYLEM** | Burası hakkında ne konuşuluyor? | Basın (558K+ havuz, yerel probe) · Sosyal (YouTube 4.761 video / 202 kanal, Whisper) · Aİ (kurum duyuruları) · lokal dikkat (yerel sosyal hesaplar) | SÖYLEM sınıfı; parsel-özel söylem 0 ise (0) yazılır, (−) değil; komşu ilçe söylemi bu parsele yazılmaz | **F** |
| K13 | **ÇEVRE / KORUMA / TARIM** | Koruma var mı, toprak ne? | Map (koruma oranı, orman mesafesi, NDVI) · Tic (5403 dikili arazi, çay, SİT) · İhale (SİT PDF hattı) | "Orman rejimi hukuki statüdür, uydudan çıkmaz" → İŞARETLİ-DOĞRULANMADI damgası | A/C |
| K14 | **KARŞILAŞTIRMA** | Buna benzeyen başka nerede var? | Hafıza (81×973 taban) · Aİ (nitelendirme kartı) · Map (metrik tablo) → **benzerlik motoru** (DENETİM-2 tasarımı) | Profil vektörü aynı kesit tarihli; oranlar (44,5× gibi) aynı yöntemle ölçülmüş iki değerden kurulur | Emsal ekseni (SIG12 Beykoz) |
| K15 | **ZAMAN / ARKEOLOJİ** | Burası 10 yılda ne oldu, yarın ne olabilir? | Basın arkeolojisi · Map 10-yıl örtü serisi · Analiz nüfus serisi · Sinyal yanlışlanabilir öngörü + kontrol tarihi | Kesit tarihi zorunlu (durum dosyası yazıldığı andan sonra bayatlar — K26); öngörü yanlışlanabilir olmalı | Tüm eksenlerin DEĞİŞİM yüzü |
| K16 | **SİSTEM KONTROLÜ** | **Bu dosyaya güvenebilir miyiz?** | Vezir (vaat defteri, kanon, pano, dondurma) · Üst Akıl (tam tarama protokolü) | Künye tam mı · çift kanıt var mı · çelişki defteri kapalı mı · varsayım sızmış mı · idari-ad uyumlu mu · sayaç tek mi · sürüklenen kalem var mı · $0 mı · 3 kopya mı · yeniden-arama hakkı kullanıldı mı | **Sinyal yayın izni** (K≥2 + kontrol tarihi) |

Sinyal'in iki sert kuralı ağın tamamını bağlar: **(K1)** eşik veriden ÖNCE yazılır — "eşik sonradan seçilirse sonuç seçilmiş olur";
**(K≥2)** tek eksen sinyal değildir, en az iki bağımsız eksen aynı yöne bakmalıdır. E3 gelse dahi sinyal çıkmayabilir — bu kuralın zayıflığı değil, işleyişidir.

## 3. Hücre örnekleri — dış halka nasıl okunur (hepsi yaşanmış vakalardan)

- `K3·PARSEL·DENETÇİ·DURUM` — Plan hükmü hangi birincil belgeden doğrulandı; e-Plan'da görünmeme, İÖİ kararları ve ÇDP hükümleriyle çapraz kontrol edildi mi? *(Rize: PLANSIZ → PLAN-DURUM BELİRSİZ)*
- `K3·PARSEL·TALEPÇİ·DURUM` — Bu arsaya ev + konaklama yapılabilir mi; yapılamıyorsa hangi tek bilgi bunu değiştirir? *(Rize: E3 — köy yerleşik alan sınırı)*
- `K4·PARSEL·SİNYAL·DURUM` — Parsel-kesin ortalama eğim, önceden yazılmış banda göre hangi yönü verir? *(Rize: parsel-kesin eğim → (0) "maliyet artar, engel değil"; proxy değer kalsaydı (−) güçlü olacaktı · rakamlar lokal, parsel_veri_kanonu_v1)*
- `K7·İLÇE·DENETÇİ·DURUM` — Kamulaştırma kararının köy listesi RG metninden okundu mu; haber kanıtı belge yerine geçirildi mi? *(Rize: RG 9000 → DOKUNMUYOR)*
- `K8·İLÇE·SİNYAL·DURUM` — İlçe arsa ilan sayısı n≥8 eşiğini geçiyor mu? *(Derepazarı n=4 → E ekseni ⬛ TAVAN; "ucuz" denemez)*
- `K10·MAHALLE·ARZ·DEĞİŞİM` — Son 10 yılda bu mahalleye kayıtlı şirket kuruluş/tasfiye/adres/sermaye akışı (TTSG — görünmez harita)? *(Bugün: abonelik duvarı — karar askıda)*
- `K11·PARSEL·FİNANS·DURUM` — Teşvik belgesi asgari yatırım eşiği aşılıyor mu; hangi bölge, hangi ek destek? *(Rize: 3. bölge, EK-5 SGK avantajı, 6 M TL eşiği)*
- `K12·KÖY·DENETÇİ·DURUM` — Söylem gerçekten bu köye mi ait, komşu ilçenin mi? *(111 İyidere haberi Derepazarı'na yazılmadı)*
- `K13·PARSEL·ARZ·DURUM` — Tarım niteliği ve fiilî kullanım (çay/dikili) belgesi ve saha beyanı var mı? *(Rize: TARLA + saha beyanı ÇAY VAR → 5403 hattı)*
- `K14·MAHALLE·TALEPÇİ·DURUM` — Bu mahalleyle aynı profilde (iklim·eğim·kıyı·örtü·idari·ekonomi) hangi mahalleler var? *(Benzerlik motoru — DENETİM-2'de kurulacak)*
- `K15·MAHALLE·SİNYAL·DEĞİŞİM` — Yanlışlanabilir öngörü ve kontrol tarihi yazıldı mı? *(Riva: nüfus +%98 iddiası ADNKS 2013→2024 ile %0,2 farkla doğrulandı)*
- `K16·DOSYA·DENETÇİ·DURUM` — Dosyada tek-kaynak hüküm, varsayım, bayat sayaç ya da sürüklenen kalem var mı? *(Vezir: dondurma, HEDEF_HAVUZU, İLERLEME.md, açılan/kapanan/net sayacı)*

## 4. Görünmez harita — Ticaret Sicil Gazetesi (K10)
Şirket kuruluşu, tasfiye, adres nakli, sermaye artışı, NACE değişimi, ortak giriş-çıkışı: bir bölgeye **sermayenin ne zaman
girip ne zaman çıktığını fiyattan önce gösteren** tek resmî akış. T3'ten beri Tradia'nın kurucu fikri ("NACE koduna göre açılan
şirketler = erken sinyal"). Bugün: firma DB 527 kayıt (MERSİS/GİB/KAP üzerinden); TTSG tam akışı abonelik duvarının arkasında
(yıllık 485K / 952K / 1.430K TL, üç kademe) — karar T11'den beri askıda; hasat mimarisi LİSTE→DETAY dersine göre denetlenecek;
Standing #8 "insan eli + parser" ile kısmen açılabilir. Sunumdaki yeri: **"Eklemediğimiz ama en çok önem verdiğimiz katman."**

## 5. Doluluk ölçüsü — sunuma girecek dürüst metrik
Bir vaka için 640 hücrenin kaçı DOLU · kaçı ERİŞİLEMEDİ · kaçı BOŞ olduğu sayılır; yüzde değil sayı yazılır. "Dolu" demek için
hücrede kaynak + tarih + kanıt sınıfı üçü birden bulunmalıdır. PARSEL-01 için ilk sayım parsel ölçeğinde (16 × 5 × 2 = 160 hücre)
Tic + Hafıza'dan; Beykoz için ilçe/mahalle ölçeğinde Hafıza'dan istenecek.

## 6. Kanonlaştırma kuralları
- VAKA_SABLONU her vaka açılışında 16 kökü otomatik açar; katman dosyaları hücre adresiyle yazılır.
- Kök soru eklenip çıkarılamaz (16 sabit); bakış ve ölçek sabittir; yeni kaynaklar yalnız ARZ sütununa eklenir.
- Vaka dosyası, K16 kapanmadan sunuma, panoya ya da talepçiye "tamam" diye çıkmaz.

---

## EK-A · Eski soru setlerinin köklere eşlenmesi (Hafıza, 2026-10-12)

M4 ilk iskeletteki 16 TASLAK soru (S01-S16, Hafıza üretimi) bu kanona şöyle eşlenir:

| Eski | Yeni kök | Not |
|---|---|---|
| S01 Burası neresi? | **K1 KİMLİK** | birebir |
| S02 Ne yapılabilir? | **K3 PLAN/İMAR** | birebir |
| S03 Devlet ne yapıyor? | **K7 KAMU HAMLESİ** | birebir |
| S04 Nasıl bir yerleşim? | K9 TALEP/NÜFUS | kısmi |
| S05 Fiziki özellikleri? | **K4 FİZİK/ARAZİ** | birebir |
| S06 Hukuki rejim nedir? | K3 | S02 ile K3'te birleşti |
| S07 Son 10 yılda ne değişti? | K15 ZAMAN | S16 ile birleşti |
| S08 Kim satıyor, kim alıyor? | K8 PİYASA/ARZ | S09 ile birleşti |
| S09 Fiyat nerede, trend ne? | K8 | " |
| S10 Risk var mı? | **K5 AFET/RİSK** | birebir |
| S11 Komşu bölgelerle farkı? | **K14 KARŞILAŞTIRMA** | birebir |
| S12 Yerelde kim konuşuyor? | K12 SÖYLEM | S13 ile birleşti |
| S13 Sosyal medyada ne diyor? | K12 | " |
| S14 Rakip oyuncular? | K10 EKONOMİ/AKTÖR | kısmi |
| S15 Para var mı? | **K11 FİNANS** | birebir |
| S16 İzle-takip olaylar? | K15 | S07 ile birleşti |

**Eşleşmeyen — eski sette HİÇ OLMAYAN 4 kök:** K2 MÜLKİYET/KADASTRO · K6 ALTYAPI/ERİŞİM · K13 ÇEVRE/KORUMA/TARIM · K16 SİSTEM KONTROLÜ.
Taslağın kör noktaları buydu; kanon seti bunları kapatıyor. TASLAK rozetleri panodan düştü (2026-10-12).
