# CC-TT-PAZARLAMA — TAM KAPSAM ÖZ-ANALİZ

**CC:** CC-TT-Pazarlama (Misara Group · KASA×Tradia×AraçDen pazarlama/adaptasyon köprüsü)
**Dizin:** `~/tt_pazarlama/` · **Rapor tarihi:** 2026-07-15
**Kapsam:** TTP1 (kuruluş) → TTP1.5 (envanter düzeltme) → TTP2 (T1 + Anayasa)

---

## 1. BAŞLANGIÇ — TTP1 kuruluş günü (hiçlik)
TTP1'e girerken **hiçbir şey yoktu**: dizin yok, standart yok, envanter yok. Sadece
Patron'un kimlik brief'i + 6 sınır kuralı vardı. O günün sonunda ilk kez var olan
şeyler: `~/tt_pazarlama/` iskeleti (4 alt-dizin + state.md), envanter v0, rozet v0,
2 tetikli bekleme panosu. Yani TTP1 = **yokluktan iskelet**.

## 2. ZAMAN-ÇİZELGESİ
| Sprint | İş | Tarih |
|---|---|---|
| **TTP1** | Kuruluş — dizin + envanter v0 + rozet v0 + bekleme panosu | 2026-07-11 |
| **TTP1.5** | Envanter düzeltme — 47→**29 URL** kesin, dil×içerik matrisi, Bülten 4-5 planlı | 2026-07-11 |
| **TTP2** | T1 tetiği + Anayasa v1 (P1-P8) + 4 madde taslağı (M2/M4/M5/M6) | 2026-07-11 |

**3 sprint, hepsi tek gün (11 Temmuz).** Bugün 15 Temmuz — takvimsel ~4 gün geçti,
aktif çalışma tek oturum yoğunluğunda.

**T2 (KASA formu) neden hâlâ bekliyor:** T2 **benim açabileceğim bir kapı değil** —
Patron'un "KASA formu bitti" sinyaline bağlı (dış tetik). KASA kendi CC'sinde yürüyor,
formunu bitirmesi benim kontrolümde değil. Ben T2'yi bekletmiyorum; T2 beni bekletiyor.
Doğru davranış: o gelmeden emlakçı/değerleme-beslemesine dokunmamak (akan su).

## 3. ÇALIŞMA YOĞUNLUĞU
**En yoğun sprint = TTP2.** Gerekçe: TTP1 mekanik iskelet (mkdir + 2 dosya), TTP1.5
tek-eksenli düzeltme (envanter). TTP2 ise **4 kanon dosyası okudu** (köprü + K10 kartı
+ T1 bildirimi + brief), **6 yeni dosya üretti** (anayasa + M2 + M4 + M5 + rozet v0.1
+ öneri bildirimi), kavramsal derinlik en yüksekti (SPK dil sınırı, KVKK 8-nokta,
motor-borcu ayrımı). TTP1.5 "en zekâ-yoğun" (hayalet sayı avı) ama TTP2 "en hacim-yoğun".

## 4. OTOMATİKLEŞEN YAPI — dürüst: HİÇBİRİ
**Şu an tek bir otonom süreç yok.** Ne launchd, ne cron, ne besleme borusu çalışıyor.
TTP tamamen **tetik-bekleyen, elle-sürülen** bir yapı:
- `03_BESLEME_GELEN/` **boş** — Sosyal/Basın borusu kurulmadı.
- T1 elle işlendi, T2 elle beklenecek.
- Envanter fetch'leri elle tetiklendi.

Bu, CC-İhale (gece launchd fabrikası) veya TT-AI (03:17 otonom) gibi kardeş CC'lerin
aksine, TTP'nin henüz **otomasyon-öncesi** olduğunu gösterir. Dürüst neden: TTP'nin işi
bugün "veri akıtma" değil "standart yazma" — standart yazımı doğası gereği elle.
Otomasyon ancak besleme borusu (P4) + T2 sonrası kampanya döngüsü kurulunca anlamlı olur.

## 5. ANAYASAN — neden bu 8 madde
Ben **kendi anayasasını kuran tek CC'yim** (diğerleri Standing/B-bloğu paylaşır;
benimki kendi kanonum). Neden her madde:

- **P1 Genel-düzen:** Çünkü köprü belgesinde KASA 7 maddeden *biri*. Kendimi KASA'ya
  indirgersem AraçDen/TT-Finans/site körleşir. Koydum ki her standart "AraçDen'e de
  uygulanır mı?" testinden geçsin.
- **P2 Dil disiplini:** Çünkü SPK 6362 gerçek hukuki sınır — "resmi değerleme" demek
  mevzuat ihlali. En sert koruma bende olmalı; pazarlama dili en çok abartıya kayan yer.
- **P3 Kanıtsız-vaat yasağı:** Çünkü M3 motor + M5 cross-source **kanona alınmadı**;
  motoru olmayan "aylık değerleme" boş vaat. A04'ün pazarlama versiyonu — veri yoksa vaat yok.
- **P4 Üretici↔dağıtım:** Çünkü B8 tek-toplama; ben haber toplarsam çift-toplama +
  kanal kirliliği olur. İşim paketleme, üretim değil.
- **P5 KVKK:** Çünkü alım-tarihi/portföy tekilleştirici veri; bir tanesi bile TTP'ye
  gelmemeli. Segment = rakam/rol.
- **P6 Kanon oku/yazma:** Çünkü B9 tek-yazar Hafıza; çok-yazarlı kanon çelişki üretir.
  Öneri sunarım, dayatmam.
- **P7 Taslak-kilidi** *(kendi eklediğim):* Çünkü köprü v0 TASLAK; benim çıktım da
  taslak olmalı, hukuk+T2 kapısı geçmeden yayın yok.
- **P8 Sürüm disiplini** *(kendi eklediğim):* Çünkü Patron "gelişen anayasa" dedi; her
  revizyon tarih+gerekçe ile, eski silinmez (envanter v0→v1 emsali).

Her maddeye **ihlal-tespiti** koydum çünkü kural, nasıl yakalanacağı yazılmazsa süs olur.
TTP2'de kendi grep denetimimi çalıştırdım (P5/P2) — **temiz** çıktı, yani anayasa
dogfood edilebilir.

## 6. TAM KAPSAM — taslak envanteri
**4 madde taslağı + 1 anayasa** aktif:
| Belge | Statü |
|---|---|
| ttp_anayasa_v1 (P1-P8) | 🟢 yürürlükte (kendi kanonum) |
| M6 rozet v0.1 | 🟡 taslak — hukuk bayrağı ("Onaylı" K10d) |
| M2 satış ilkeleri v0 | 🟡 taslak — **hukuk süzgeci zorunlu** (K10a) |
| M4 aylık değerleme v0 | 🔴 **VAAT-KAPALI** (M3+M5 motor borcu) |
| M5 KASA UI şablon v0 | 🟡 kısmi — **katman 3/4/5/6 vaat-kapalı**, dil AR/FA/ZH vaat YASAK |

**Vaat-kapalı bekleyen:** M4 (tümü) + M5'in 4 katmanı → hepsi **K10b (M3 fiyat motoru)**
ve **K10c (cross-source finansal)** borcuna bağlı. Yani bugün yayına hazır tek somut
çıktı: **anayasa + M6 rozet dil standardı**. Gerisi tasarım-rafında, motoru bekliyor.

## 7. GERÇEK-MALİYET DÜRÜSTLÜĞÜ
Şu ana kadar **$0** — ne ücretli ne kayda değer ücretsiz kaynak (sadece bedava
WebFetch/curl + yerel dosya). Bu **hem erken-aşama hem yapısal**:

- **Erken-aşama kısmı:** TTP'nin işi bugün standart/metin yazmak → doğası gereği
  yakın-$0. Motor borcu kapansa bile TTP'nin *kendi* katmanında büyük ölçüde $0 kalır.
- **İlerde doğacak gerçek maliyet — ama çoğu TTP'nin değil:**
  - **M3/M5 motor borcu** kapanınca doğacak maliyet **Tradia/TT-AI altyapısının**,
    TTP'nin değil (fiyat modeli hesap gücü, cross-source veri çekimi). TCMB/BIST/KAP
    verisi büyük ölçüde **kamu+ücretsiz** — buradan büyük fatura beklemem.
  - **TTP'ye ait olabilecek gerçek maliyet:** T2 sonrası kampanya araçları (tasarım/
    görsel üretimi) ve **reklam bütçesi**. Ama Tradia politikası **K29: $0 Faz 0-2
    (organik), ücretli reklam ancak Faz 3 (Tradia Pro geliri) ile açılır.** Yani reklam
    maliyeti geç ve gelire-bağlı.
- **Dürüst projeksiyon:** TTP yakın vadede $0 kalır. İlk gerçek TTP-maliyeti = T2 sonrası
  görsel/kampanya-aracı üretimi (küçük); ciddi maliyet = Faz 3 reklam bütçesi (uzak,
  gelir-tetikli, K29). Motor-borcu maliyeti benim hanemde değil, Tradia altyapısında.

## 8. V16 DÜRÜST — 3 hata, 3 kazanım

**Hatalar:**
1. **"47 URL" hayalet sayı (kanon kirliliğine yol açtı).** TTP1'de özet-modele güvenip
   47 yazdım; TTP1.5'te 29'a düzelttim — **ama yanlış sayı köprü kanonuna (satır 83)
   sızmıştı.** Bunu bu öz-analizde yakaladım ve Hafıza'ya düzeltme bildirimi yazdım
   (`hafiza_bildirim_ccttpazarlama_duzeltme_envanter.json`). Ders: özet-model rakamı
   kanona sokulmadan deterministik doğrulanmalı.
2. **Rozet v0'ı köprü gelmeden tanımladım.** TTP1'de rozeti "çevre istihbaratıyla
   zenginleştirilmiş kart" dedim; köprü M6 asıl anlamın **"havuzda kayıtlı"** olduğunu
   gösterince v0.1'de düzeltmem gerekti. Sınır kural #2'ye (kanon gelmeden varsayım
   üretme) teğet geçtim.
3. **M7a yanlış-yazım** *(Hafıza-kaynaklı, ama beni ilgilendiren):* Köprü belgesi ilk
   yazımında beni "yeni kurulacak CC" yazdı — gerçekte zaten kuruluydum. Bu Hafıza'nın
   CC-listesi taramama hatasıydı, benim değil; ama #1 ile aynı ailenin aynasıdır (özet/
   tarama disiplini eksiği). Dürüst atıf: köken Hafıza, ders ortak.

**Kazanımlar:**
1. **A04'ün canlı örneği** — kendi TTP1 hatamı avladım. Özet-model 47/39/29 çelişkisini
   fark edip ham curl+grep ile 29'u kesinleştirmek, "uydurma-yok" disiplininin somut kanıtı.
2. **Dogfood edilebilir anayasa** — P1-P8'i yazmakla kalmadım, ihlal-tespiti kurallarını
   kendi dosyalarıma **çalıştırdım** (P5 KVKK grep + P2 dil grep = temiz). Kural +
   kendini-denetleme birlikte.
3. **Motor-borcu dürüstlüğü** — M4/M5'i "vaat-kapalı" etiketleyerek boş vaat üretmeyi
   reddettim; köprü M6 düzeltmesini yakalayıp rozeti hizaladım. Cazip ama kanıtsız
   vaatleri kapatmak, pazarlama CC'si için en zor disiplindir ve tuttum.

---

**ÖZET:** 3 sprint, tek gün, yokluktan → kendi anayasalı + 4 taslaklı bir köprü CC'si.
Otonom değilim (dürüst), $0'dayım (yapısal olarak bir süre daha öyle kalacağım), somut
yayına-hazır çıktım anayasa + rozet dili; gerisi motor-borcunu ve T2'yi bekliyor. En
değerli anım kendi hatamı avlayıp kanona sızmasını düzeltmemdi. **Akan su: T2 gelene
dek yeni cephe açmıyorum.**
