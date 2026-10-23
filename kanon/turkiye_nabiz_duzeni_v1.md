> **KANON TASLAĞI · Vezir kaydı 2026-10-23 18:45** — kaynak: Üst Akıl `UST_AKIL_BEKLEYEN/ust_akil/TURKIYE_NABIZ_DUZENI_v1.md` (23.10 18:55; kopya `02_CC_STATE/kanon_taslak/turkiye_nabiz_duzeni_v1.md`). Patron uyarısı 23.10 18:36 (geliştirme uyarısı): Rize/Kartal/Beykoz'da sıkışma, arşivler analiz edilmedi, canlı çekiş yok. **Statü:** 🟡 TASLAK → Patron onayıyla KANON. **Vezir ekleri:** (1) bölge motoru kuyruğu `motor/KUYRUK.json` **TETİKLİ** moda alındı (kuyruk silinmez; öncelik sinyal adayı + Patron isteği); (2) pilot sahalar (Beykoz, Kartal, Rize, PARSEL-01) açık kontrol tarihleriyle takvimde sürer (`beykoz_ongoru_kontrolu_2026-10.md` §4, SON_TARIH) — **yeni derinleştirme turu yok**; (3) 5 ölçü `motor/nabiz_olcu.py` → `SUREKLILIK.turkiye_nabzi[tarih]`, gece raporu + köşe + gazete; ilk ölçüm 24.10 08:40; (4) haftalık denetim `com.tradia.vezir.nabiz_haftalik` Pazartesi 09:30 → `UST_AKIL_BEKLEYEN/vezir/TURKIYE_NABZI_HAFTALIK_<tarih>.md`; (5) CC bildirimleri `vezir_bildirim_<cc>_nabiz_20261023.json` (13 CC). "Makineyi bekliyoruz" gerekçesiyle hiçbir hafif uç durmaz.

# TÜRKİYE NABIZ DÜZENİ v1 · iskelet · Üst Akıl · 2026-10-23

**Patron uyarısı (23.10 18:36):** "Rize, Kartal, Beykoz içinde sıkıştık kaldık; basın tam arşivleri analiz edilmedi; canlı bir çekiş yok; anlık tüm piyasalardan, haberlerden, her şeyden haberdar olamıyoruz; sistem Rize'de bir yer için takılıp kaldı; tüm Türkiye taraması ve CC çalışmaları için bir düzen belirle, iskeleti kontrol et." Bu belge o uyarının cevabıdır: sorun sayımı değil, yeni iskelet.

## 0 · Teşhis: neden sıkıştık (dosya kanıtıyla)

1. **Canlı akış pilot sahaya kilitli.** `olay_alarmi_son24.json` kapsamı: Beykoz, Kartal, Rize (Merkez + Derepazarı) + "81 il ulusal" (yalnız afet/tahliye anahtar sözcükleriyle, Google News RSS, 36 kaynak, günde 5 olay). Türkiye'nin kalan 970 ilçesinde olan biten bu dosyaya girmiyor.
2. **"Basın arşivi" Türkiye arşivi değil.** 565 bin kayıt = 28 İstanbul ilçe sitesi (Vaka #13). 653 kaynaklık 81 il envanteri var, ham hasadı yapılmadı (makine ve disk bekliyor). Ulusal hasat 15.10'dan beri, başlık düzeyi, 27 kaynak. Arşivin tamamı üstünde tek bir Türkiye analizi (konu, yer, aktör, zaman) çıkmadı.
3. **Bölge motoru ilçe sırasıyla sürünüyor.** Her birim 973 ilçeyi kendi hızında tek tek dolaşıyor: Sosyal 20 ilçe/gün (49 gün), Arşiv 100/gün, Tic 25/gün, Map 1/gün. Bu düzen "Türkiye'yi bilmek" değil, "Türkiye'yi sırayla ziyaret etmek"tir; sıra bitmeden hiçbir tablo 81/81 olmaz.
4. **Derinlik pilotta, genişlik yok.** Beykoz'a yedi tur, Kartal ve Rize'ye bölge hattı, PARSEL-01'e parsel dosyası; aynı emek 81 ile hiç dağıtılmadı. Sistem bir ilçeyi 640 hücreyle okumayı öğrendi, ülkeyi 1 hücreyle okumayı öğrenmedi.
5. **Piyasa katmanı akışa bağlı değil.** EVDS, KAP, BIST, TÜİK, EKAP, RG hepsi arşiv olarak alınıyor; "bugün ne oldu" sorusuna cevap veren tek günlük üretim TRA-BASIN, o da olay alarmından besleniyor. KAP bildirimi, RG kararı, EKAP ihalesi, plan askısı günlük olay defterine düşmüyor.
6. **Kapasite pilot işlere gitti.** Ekim'in on günü iCloud taşıması, Kitap, Kütüphane ve gelişim dosyasına; ülke akışı kimsenin ilk işi olmadı. Bu Üst Akıl'ın dağıtım hatasıdır.

## 1 · İlke

- **Türkiye önce, katman katman.** Hiçbir birim ilçe sırasıyla dolaşmaz; her birim kendi katmanını 81 il için bir seferde kurar (envanter, akış, tablo), derinlik tetikle gelir.
- **Akış önce, dosya sonra.** Günlük işin ilk kalemi "bugün Türkiye'de ne oldu" defteridir. Beykoz tipi dosya yalnız tetikle (sinyal) ya da Patron isteğiyle açılır.
- **Her olay her yerde.** Afet, kaza, karar, ihale, dava, plan askısı, şirket kuruluşu, devir, satış, fiyat, altyapı, siyaset, söylem: hepsi aynı deftere, aynı adres anahtarıyla.
- **Haberdar olmak ölçülür:** bugün 81 ilin kaçından kayıt düştü; olayın deftere düşme gecikmesi kaç saat; kaç tablo 81/81.

## 2 · Üç katman

### A · AKIŞ (saatlik): Türkiye Olay Defteri
Tek dosya, saatte bir yazılır: `02_CC_STATE/akis/turkiye_olay_defteri.jsonl` (gün dosyası) + `son24.json`. Her satır: zaman · kaynak · kaynak türü · sınıf (afet · kaza · kamu kararı · plan askısı · ihale · sermaye (KAP, devir, kuruluş) · piyasa (kur, faiz, altın, BIST) · altyapı · siyaset · söylem) · adres anahtarı (il zorunlu, ilçe varsa, mahalle varsa) · kanıt sınıfı (A–D) · etki sayısı (kişi, bina, TL) · bağlantı.

| Uç | Sahip | Kadans | Bugün | Olması gereken |
|---|---|---|---|---|
| Ulusal basın RSS | Basın | 1 saat | 27 kaynak, başlık düzeyi | 27 + Hürriyet, Habertürk (RSS var) + NTV/TRT Haber (adres bekliyor) + AA bölge servisleri; başlık + ilk paragraf; her satıra il anahtarı |
| Yerel basın RSS, 81 il | Basın | 3 saat | 18 ilçe sitesi | 653 kaynağın RSS'i olan hepsi (envanterde 261 RSS); günde en az 81 ilden kayıt |
| YouTube olay alarmı | Sosyal | 30 dk | 7.314 kaynak, 448 olay/gün, çoğu konumsuz | Konum çözümü zorunlu (kanal ili + başlık), konumsuz olay il düzeyinde "ulusal" kalır; sınıflar aynı |
| KAP bildirimleri | Borsa | 1 saat | külliyat (arşiv) | Günlük akış: gayrimenkul, arsa, tesis, devir, sermaye artırımı, yeni şirket bildirimleri olay satırı olur |
| Piyasa satırı | Borsa + Finans | günde 3 | EVDS günlük, altın hesap serisi | Kur, faiz, altın, BIST kapanış, konut kredisi faizi tek satır; TCMB karar günleri işaretli |
| Resmî Gazete | İhale | günlük | 8 bin başlık arşiv | Her sabah: CB kararları (2B, acele kamulaştırma, riskli alan), yönetmelik, ihale ilanı → il/ilçe anahtarıyla deftere |
| EKAP | İhale | günlük | 102 bin arşiv, 973 ilçe hücresi | Günün yeni ihaleleri 81 il; altyapı/dönüşüm/kamulaştırma sınıfıyla |
| Plan askıları | Tic + Map | günlük | Beykoz izleniyor | e-Plan ve büyükşehir askı sayfaları 81 il; "askıya çıktı" olay satırı |
| TÜİK takvimi | Pazarlama | yayın günü | aylık elle | Yayın takvimine bağlı otomatik: konut satışı, yabancı satış, yapı izni, TÜFE günü deftere |
| Uydu | Map | tetikli | Beykoz | Deftere düşen afet/şantiye/2B olayında 72 saat içinde önce/sonra karesi |
| Adres çözümleme | Aİ | sürekli | evren ağacı | Defterdeki her satırın il/ilçe/mahalle çözümü ve "çözülemedi" sayacı |

### B · TABLO (günlük ve haftalık toplu analiz): Türkiye Tabloları
Her tablo 81 il × 973 ilçe, aynı şemayla, `02_CC_STATE/tablo/<ad>_<kesit>.csv`. Tablo "dolaşarak" değil, eldeki arşivin tamamı bir seferde işlenerek kurulur.

| Tablo | Sahip | İlk kesit | Yenileme |
|---|---|---|---|
| Haber yoğunluğu ve konu dağılımı (il × ay × sınıf; 565 bin kayıt + ulusal akış) | Basın + Analiz | 7 gün | haftalık |
| Mahalle anma sayacı (hangi mahalle kaç kez, hangi konuda) | Basın + Aİ | 7 gün | haftalık |
| Aktör ve vaat defteri (kurum × il: söz, tarih, gerçekleşme) | Basın + Tic | 14 gün | aylık |
| Firma kuruluş ve kapanış ritmi (il × ay, 2010'dan) | Aİ | var | aylık |
| İhale ve kamu hamlesi (il × ilçe × sınıf × TL) | İhale | var (973 hücre) | haftalık |
| KAP gayrimenkul hareketi (il × ay: devir, arsa, tesis) | Borsa | 14 gün | haftalık |
| Yabancı satış, konut satışı, yapı izni (973 ilçe) | Pazarlama | var | TÜİK günü |
| Kredi, mevduat, sigorta, enerji, havalimanı (81 il) | Finans | var | çeyreklik |
| Söylem yoğunluğu (il × hafta × sınıf, YouTube) | Sosyal | 7 gün | haftalık |
| Uydu değişim (ilçe × çeyrek) | Map | ağır iş bandı | çeyreklik |
| Kısıt katmanı (il × ilçe: koruma, orman, 2B, sit) | Map + Tic | 30 gün | aylık |

**Basın arşiv analiz programı (öncelik 1):** 565 bin kaydın tamamı tek geçişte sınıflanır (konu, yer, aktör, tarih), ulusal akış aynı şemaya eklenir; çıktı ilk üç tablodur. Ham 653 kaynak hasadı (193–398 GiB) makine gelince başlar; o güne kadar RSS + başlık + ilk paragraf.

### C · DOSYA (tetikli): ilçe ve parsel dosyası
Beykoz düzeni korunur ama varsayılan değildir. Tetik: Sinyal'in defter + tablolardan ürettiği "sinyal adayı" (iki bağımsız eksen aynı yöne bakar) ya da Patron isteği. Tetiklenen ilçe için 640 hücre, bölge fotoğrafları, mahalle kartları; süre: 7 gün. Kuyruk yok, sıra yok; tetik var.

## 3 · Sinyal: ülke eşiği
Sinyal birimi defteri ve tabloları her gün okur; eşikler Türkiye için tek sözlükte yazılır: olay yoğunluğu × sermaye hareketi × kamu hamlesi × söylem sıçraması. Günde en çok 5 "bakılacak yer" satırı; her satır tetik olur ya da "izlenen" kalır. Pilot sahalar bu düzende özel değildir; Beykoz'un açık kontrol tarihleri takvimde sürer.

## 4 · Günlük ürün: TRA-BASIN "Türkiye Nabzı"
Gazete bu düzenin yüzüdür; manşet sayfasına dört satır eklenir: piyasa (kur, faiz, altın, BIST, KAP), kamu (RG, EKAP, askı), il tablosu (bugün 81 ilin kaçında kayıt var, en yoğun 10 il), bakılacak yer (Sinyal). Bölge sayfası pilot üçlü değil, günün en yoğun 10 ilidir.

## 5 · Ölçü (Vezir, günlük)
- **Farkındalık:** bugün kayıt düşen il sayısı / 81 (hedef ilk hafta ≥40, bir ay ≥70).
- **Gecikme:** olayın yayın saati ile deftere düşme saati arasındaki medyan (hedef ≤3 saat).
- **Kapsam:** 81/81 olan tablo sayısı / 11.
- **Çözüm:** defterde il anahtarı olan satır oranı (hedef ≥%95), ilçe anahtarı (≥%60).
- **Tetik:** haftada açılan dosya sayısı ve kaynağı (sinyal mi Patron mı).
Bu beş sayı gece raporuna ve gazeteye girer; biri düşerse kırmızıdır.

## 6 · Kapasite ve sıra
Makine sınırı değişmedi (8 GB, tek dizüstü). Bu yüzden sıra: (1) RSS ve API akışları hafiftir, bugün açılır; (2) 565 bin kaydın sınıflanması tek geçişlik ağır iştir, gece bandında 3–5 gece; (3) ham 653 kaynak hasadı ve uydu tabloları makine ve depolama gelince. Hiçbir şey "makineyi bekliyoruz" diye durmaz: hafif katman bugün, ağır katman sırayla.

## 7 · İlk 7 gün (birim başına tek iş)
| Birim | İş | Teslim |
|---|---|---|
| Vezir | Bu düzeni kanon taslağına al, CC bildirimlerini dağıt, 5 ölçüyü gece raporuna ekle, haftalık "Türkiye Nabzı" denetimi | 24.10 |
| Basın | Olay alarmı kapsamını 81 ile aç (yerel RSS'ler + ulusal, il anahtarı zorunlu); arşiv analiz programının 1. geçişi | akış 25.10 · tablo 30.10 |
| Sosyal | Alarm satırlarında konum çözümü (kanal ili); il × hafta söylem tablosu; ilçe sırası dolaşması durur, keşif il × tür ile | 26.10 |
| Borsa | KAP günlük akışı deftere; piyasa satırı günde 3 | 25.10 |
| Finans | Piyasa satırı ortak şeması; TCMB karar günü bayrağı; 81 il tabloları şemaya | 25.10 |
| İhale | RG ve EKAP günlük olay satırları, 81 il; CB kararları sınıfı | 25.10 |
| Tic | Askı izleme 81 il (büyükşehir e-Plan listesi); PARSEL-01 bekleyen kalır, öncelik değil | 28.10 |
| Pazarlama | TÜİK takvimi otomasyonu; yabancı satış tablosu şemaya | 27.10 |
| Aİ | Defter adres çözümleme hattı (il zorunlu, çözülemedi sayacı) | 25.10 |
| Analiz | Arşiv analiz programı: sınıflandırıcı + il × ay tablosu (Basın'la) | 30.10 |
| Map | Tetikli uydu kuralı (72 saat); ilçe sırası dolaşması durur | 26.10 |
| Hafıza | akis/ ve tablo/ klasörleri, tek yazıcı, şema dosyaları; defter gece arşivi | 24.10 |
| Signals | Ülke eşik sözlüğü v1; günlük "bakılacak yer" satırı | 27.10 |
| Kitap · Kütüphane · Arşiv | Mevcut düzen sürer; ülke akışına kapasite bırakır (gece bandı öncelik akışta) | sürekli |

*Üst Akıl · 2026-10-23 · kanıt: olay_alarmi_son24.json kapsam alanı, sosyal alarm 448/41 il, ulusal_kaynak_listesi 27, Vaka #13, CC günlük dönüşlerindeki ilçe sıra sayaçları.*
