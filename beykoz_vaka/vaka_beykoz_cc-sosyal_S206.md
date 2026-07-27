---
belge: CC-Sosyal · Beykoz derin (Whisper + aktör-özel + muhalefet + yatırım)
sprint: S206 (Patron-etiket S205 · Standing #22 dürüst-düzeltme)
tarih: 2026-07-27
tip: Whisper-kurulum · aktör-hasat · muhalefet-liderleri · yatırım-söylem
finansçı_uyarısı: SÖYLEM ölçüm-değildir · olgu/söylenti KATI-ayrık
disiplin: A04 · V16 · #21-A/B · #22 · #26 · #31 · SİLME-YOK · $0
---

# S206 · Beykoz Derin — Whisper + Aktör + Muhalefet

## Standing #22 · dürüst-düzeltme

Patron bu görevi **S205-etiketiyle** verdi. Ancak önceki **S205 (amaç-taraması)** kapatıldı ve teslim edildi (`vaka_beykoz_cc-sosyal_S205.md` · SHA `b9688220…`). Bu yeni-görev **derinleştirme-tur** · içerik-ölçek-ayrı → sprint-numarası **S206** olarak kayıtlıyorum (Standing #22 gereği aynı-numara-farklı-iş-yasağı). Patron istese bu belgenin dosya-adını `S205_derin.md` olarak da alabilir; SHA-eşit-kopya yaparım.

## TEK CÜMLE İLE

> **G1 KAPANDI:** Whisper+ffmpeg kuruldu · Bm-2LwEpclk (Şişecam 2016 direniş) + cPY2d0vhJBY (Murat Aydın 2019 seçim vaadi) **iki kritik-video transkript edildi** (5+ sprint kalıcı-borç kapatıldı). **G3 KİLİT-KAPANIŞ:** MHP-Çömlekçi · DEVA-Korkmaz · YRP-Erbakan hasat edildi (Basın-Sosyal aktör-boşluk kapatıldı). DB **118 video · 40 kanal · 19.1 MB VTT**.

## Hasat özet-tablosu

| Ölçüm | S205 sonu | S206 sonu | Değişim | Kaynak |
|---|:-:|:-:|---|---|
| Toplam arşiv-video | 108 | **118** | +10 (2 Whisper + 8 yeni-hasat) | SQLite |
| Toplam kanal | 35 | **40** | +5 | SQLite |
| VTT (MB) | 18.3 | **19.1** | +0.8 | SQLite |
| "beykoz" FTS5 | 15 | **32** | **+17** | FTS5 |
| "çömlekçi" | 0 | **3** | +3 (yeni aktör) | FTS5 |
| "korkmaz" | 0 | **4** | +4 (yeni aktör) | FTS5 |
| "erbakan" | 0 | **4** | +4 (yeni-hareket) | FTS5 |
| "köseler" | 2 | **4** | +2 | FTS5 |
| "gürzel" | 4 | **5** | +1 | FTS5 |
| "riva" | 2 | **5** | +3 | FTS5 |
| "düşler vadisi" | 0 | **1** | +1 (EKGYO Riva) | FTS5 |
| "MHP" | 11 | **14** | +3 | FTS5 |
| "yeniden refah" | 8 | **9** | +1 | FTS5 |

## G1 · WHISPER KURULUM + 2 KRİTİK TRANSKRIPT

### Kurulum (yaklaşık ~15 dk toplam)
- `brew install ffmpeg` → **v8.1.2** kuruldu (`/opt/homebrew/bin/ffmpeg`)
- `pip3 install --user openai-whisper` → **v20250625** kuruldu (`/Users/GAC-A/Library/Python/3.9/bin/whisper` · torch 2.8.0 dahil)
- **Small model** ilk-koşuda otomatik indi (~461 MB, `~/.cache/whisper/`)
- **Maliyet:** $0 (yerel-model · API-YOK)

### Bm-2LwEpclk (Şişecam 2016 direniş) — 5 sprint kalıcı-borç KAPATILDI
- Ses-indir: `yt-dlp -x --audio-format mp3` → 1.08 MB
- Whisper: small · Turkish · ~2 dk transkribe → **VTT 334 byte**
- **Kısa transkript nedeni:** Video 142 sn ağırlıklı sessizlik/eylem-görüntü · konuşma-az
- **KRİTİK OLGULAR (whisper transkript):**
  - *"Burası İstanbul Beykoz Paşabahçe."* → OLGU: mekan-teyit
  - *"Kristal-İş genel merkezinin önü."* → OLGU: **Kristal-İş sendikası genel merkezi de Paşabahçe'de** (S204'te bilinmiyordu · YENİ)
  - *"Almanya'ya selamlar."* → SÖYLEM: uluslararası-dayanışma (Almanya'daki Türk-göçmen-işçi bağı)

### cPY2d0vhJBY (Murat Aydın 2019 seçim-vaadi) — kalıcı-borç KAPATILDI
- Ses-indir: 1.6 MB
- Whisper: small · Turkish · ~1.5 dk transkribe → **VTT 1911 byte**
- **KRİTİK OLGULAR (whisper transkript · 2019-03-18 · seçim-öncesi):**
  - *"Sahilde bazı düzenlemeler yapacağız. Yapabilmemiz için önce ruhsatını almamız gerekiyor. Vermedikleri takdirde. Almak için her türlü yol veren temi deneyeceğim."* → **SAHİL-DÜZENLEME + RUHSAT-ÇEKİŞMESİ** (İBB-CHP vs Beykoz AKP gerginliği ima)
  - *"Bürokratik engellerle durdurulamayız."* → SÖYLEM: iddialı-icra-vaadi
  - *"Sorunları çözemezsek kendim yapacak sonucu da şüphesiz gidip hapis yatacak."* → **S203 description-metnini TEYİT** (*"Beykoz uğrunda gidip içeride yatmak da var"*)
  - *"Alışveriş şartları yapacağız. Insanlarımız gençlerimiz alışveriş için Beykoz dışına gitmesin, Beykoz alışveriş yapsın."* → yerelleşme-vaadi
  - *"Cumhurbaşkanına..."* → Erdoğan-üstü-yetkilendirme-atıfı (kesildi)

## G2 · AKTÖR-ÖZEL HASAT (Çelikler/Peker/EKGYO)

### Çelikler İnşaat
- **Beykoz projesi HAVUZDA YOK** — arama-sonucu 10 video Hansaray İnşaat (Elmalı köyü bina güçlendirme) vs. diğer inşaat-genel-konular
- **Sonuç:** Çelikler İnşaat'ın Beykoz projesi Sosyal-havuzumda YOKTUR (kanıt-var-mı Borsa/KAP kontrolü şart)

### Peker GYO
- **Beykoz'a-özel-video YOK** — arama-sonucu 10 video: `x1BM2pBQAL8` "SULTAN MAKAMI PROJESİ" (Peker GYO ama Beykoz-özel değil) · S203'te Ramazan Işık videosunda Peker GYO **2026 satın alma** bilgisi vardı (Tera-Grubu tarafından)
- **Sonuç:** Peker GYO Beykoz-özel-tanıtım Sosyal'de YOK · Tera-Grubu üzerinden bağlantı-VAR

### EKGYO Düşler Vadisi (Riva)
- **6Nu3hEK2Wj4** · Teoman Aksu vlog (8 dk) **HASAT-OK · İLK KEZ İÇERİK YAKALANDI**
- **KRİTİK PROJE-TEKNIK VERİ:**
  - *"3 etap, şu anda ikinci etapındayız."* → OLGU: **etap-durumu**
  - *"3+1, 4+1, 5+1 ve 6+1 villalardan oluşuyor. Kendine ait müstakil havuzlu ya da orta havuzlu villalarımız var."* → OLGU: **tip-envanteri**
  - *"1400 tane villadan oluşuyor."* → OLGU: **büyük-ölçek** (S203 Tera-70-villa vs EKGYO-1400-villa · **20× fark**)
  - *"Beykoz Riva · Karadeniz'e kıyısı olması · İstanbul'un Karadeniz bitki örtüsüne sahip ilçelerinden biri."* → PAZARLAMA-SÖYLEM
- **Aynı-sektör ölçek-farkı:** EKGYO Düşler Vadisi Riva 1400 villa vs Tera Orman Beykoz 70 villa → **Kamu-EKGYO 20× özel-sektör** (Riva-Beykoz konut-arzı ağırlıklı-EKGYO)

## G3 · MUHALEFET LİDERLERİ (Basın-Sosyal aktör-boşluk KAPATIŞI)

### Emre Çömlekçi (MHP Beykoz İlçe Bşk) — 3 video hasadedildi
- `W3mfglnCisg` "Dobra Dobra Beykoz 7. Bölüm" (66 dk röportaj-derin)
- `fWHLEluQNdo` "Dost Kalemleri MHP İlçe Başkanı Çömlekçi" (19 dk panel)
- `BkH9JlWPwMk` "Alaattin Köseler ile yan yana gelmemiz mümkün değil" (6 dk)
- `421CmGbdr3Q` (Gürzel-Çömlekçi ziyaret, ek-kayıt)

**KRİTİK ÇÖMLEKÇİ İDDİALARI:**
| İfade | Sınıf |
|---|---|
| *"Bundan önceki belediyeyi yönetenlerin belediyeyi yönetmek gibi değil, soymak gibi bir derdi vardı."* | 🔴 **YOLSUZLUK-İDDİASI · SÖYLEM · tek-taraf** |
| *"Alaattin Köseler ile yan yana gelmemiz mümkün değil."* | OLGU: parti-tavır-teyit (Köseler-red) |
| *"Bölge milletvekilimiz, genel başkan yardımcımız İzzet Ulgu Yönter Bey'e sordum · böyle bir şey yok."* | OLGU: MHP-Köseler-yakınlaşma-söylentisini genel-merkez REDDetti |
| *"Turgay Sucüoğlu Milliyetçi Hareket Partisi'nde olacak diye bir şey yok."* | OLGU: parti-transfer-red |
| *"AK Parti'nin de kendi saflarına katmayacağını buradan söyleyebilirim."* | SÖYLEM: tahmin-YRP-öngörü (parti-transfer-red) |
| *"Torpil her yere torpil giriyor."* | 🔴 SÖYLEM: torpil-iddia |
| *"Beykoz'un problemlerinin yerinde görüldüğünden emin değilim."* | SÖYLEM: yönetişim-eleştiri |

### Şenol Korkmaz (DEVA Beykoz İlçe Bşk) — 1 video (dfVcjhRz9nE 5 dk)
- *"Ali Babacan'ın olurları · Beykoz Belediye Başkanlığı'na adaylığımı resmi olarak ilan."* → OLGU: adaylık (2024 seçim öncesi)
- *"Sürdürülebilir kalkınma, eğitim, sağlık, ulaşım ve sosyal hizmetler alanlarında somut projeler."* → GENEL-VAAT
- *"İlçemizin doğal ve tarihi dokusunu korurken."* → doğa-koruma-vurgu (Murat Aydın-yeşil-vurgu ile örtüşür)

### İskender Közen (YRP) — 0 video (aynı-arama sadece Erbakan-açılışı buldu)
- `iyH1ujEFfIQ` · **Fatih Erbakan** YRP Beykoz İlçe Başkanlığı açılışı (5 dk) — konuşma-içeriği sloganlar "Mücahit Erbakan" tekrarları · **derin-siyasi-mesaj-çıkmadı**
- Sosyal-havuzda Ömer Zahit Kuvvet (YRP · S202) mevcuttu · Közen kişisel-video YOK

## G4 · BEYKOZ YATIRIM SÖYLEMİ

### Yakalanan
- **RAIcHNsUvmY** · Sadece ENES · "İSTANBUL DEĞİŞİYOR: Yeni Şehir Planı" (8 dk) — Beykoz-özel-değil-genel-İstanbul-şehir-plan-analiz
- **VSVE9N9xSfk** · Demirören Haber Ajansı · "Murat Aydın: Beykoz'a 5 yılda 15 yıllık hizmet vadediyorum" (5 dk) — **ATLA · altyazı-yok** (Whisper aday)
- **ANXeifKk4Eg** · Daima Gayret · "Vizyoner Beykoz 1971-1973" (16 dk) — **ATLA · altyazı-yok** (belgesel-nostaljik)

### Yatırımcı-beklenti-söylem (Sosyal S206'da açığa çıkan)
- **EKGYO 1400 villa** vs **Tera 70 villa** = konut-arzının %95'i kamu-tarafında (Riva-Beykoz)
- **Çömlekçi-yönetişim-eleştirisi**: "problemleri yerinde görülmüyor" — yatırımcı için **yönetişim-belirsizliği-uyarısı** (Basın S80'in "vekil-yönetim yüksek belirsizlik" tespitiyle örtüşür ★ ÇAPRAZ SİNYAL)

## OLGU / SÖYLENTİ ayrımı — S206 eklemeler

### DOĞRULANABİLİR OLGULAR (yeni)
| # | Olgu | Kaynak | Çapraz-durum |
|---|---|---|---|
| O21 | Kristal-İş sendikası genel merkezi Beykoz-Paşabahçe'de | `Bm-2LwEpclk` whisper | 🟢 kolay (sendika-resmi-adres) |
| O22 | Düşler Vadisi Riva 3-etap, 1400 villa, 3+1/4+1/5+1/6+1 tip | `6Nu3hEK2Wj4` Teoman | 🟢 kolay (EKGYO-KAP-Borsa) |
| O23 | MHP-Beykoz-Genel Merkez Köseler-yakınlaşma-söylentisini REDDetti | `BkH9JlWPwMk` Çömlekçi | 🟡 orta (parti-içi-beyan, kesin-belge-yok) |
| O24 | Şenol Korkmaz DEVA-Beykoz-BB-adayı (Ali Babacan onayı) | `dfVcjhRz9nE` | 🟢 kolay (parti-liste-YSK) |
| O25 | Fatih Erbakan YRP-Beykoz-İlçe-Başkanlığı açılışı | `iyH1ujEFfIQ` | 🟢 kolay (parti-arşivi) |
| O26 | Murat Aydın 2019-03-18 seçim-vaadi: sahil-düzenleme + ruhsat-iddiası + "içeride yatma" | `cPY2d0vhJBY` whisper | 🟢 kolay (video-belge) |

### SÖYLENTİ / İDDİA (yeni)
| # | İddia | Kaynak | Durum |
|---|---|---|---|
| S19 | "Bundan önceki belediyeyi yönetenlerin belediyeyi yönetmek gibi değil, soymak gibi bir derdi vardı" | `W3mfglnCisg` Çömlekçi (MHP) | 🔴 **YOLSUZLUK-İDDİASI · TEK-TARAF · dava-yok** |
| S20 | "Torpil her yere torpil giriyor" | `W3mfglnCisg` Çömlekçi (MHP) | 🔴 SÖYLEM · örnek-yok |
| S21 | AK Parti Turgay Sucüoğlu'nu saflarına katmayacak (Çömlekçi öngörüsü) | `BkH9JlWPwMk` Çömlekçi | 🔴 SÖYLEM · tahmin |
| S22 | Beykoz Riva "Karadeniz'e kıyısı · Karadeniz bitki örtüsü" pazarlama-avantajı | `6Nu3hEK2Wj4` EKGYO-vlog | 🟡 coğrafi-olgu + pazarlama-söylem karışım |

## Aktör-listesi GÜNCEL (Basın×Sosyal çapraz S206)

| Aktör | Basın S80 | Sosyal S206 | Sinyal |
|---|:-:|:-:|---|
| Özlem Vural Gürzel | 1 | 5 | ★★★ ÇAPRAZ |
| Alaattin Köseler | 0 | 4 | Sosyal-only |
| Emre Çömlekçi | 6 | **3** (S206 yeni) | ★★★ **ÇAPRAZ-KAPANDI** |
| Şenol Korkmaz | 1 | **1** (S206 yeni) | ★★ **ÇAPRAZ-KAPANDI** |
| İskender Közen | 1 | 0 (aynı-parti YRP kişi Erbakan-hariç) | Basın-only |
| Fatih Erbakan | 0 | **1** (S206 · YRP açılış) | Sosyal-only |
| Ömer Zahit Kuvvet | 0 | 1 | Sosyal-only |
| Murat Aydın | 0 | 4 | Sosyal-only |
| Bakan Kurum | 0 | 25 | Sosyal-only |
| Ali Babacan | 0 | **1** (DEVA-Korkmaz aracılığıyla) | Sosyal-only |
| Ramazan Işık / Tera / Peker GYO | 0 | 1 | Sosyal-only |
| Şişecam Holding | 0 | 3 | Sosyal-only |
| Kristal-İş sendikası | 0 | **1 (S206 yeni)** | Sosyal-only |
| Çelikler İnşaat | ❓ | 0 | ❌ iki-havuz-da yok |

**Kapsam iyileşti:** Basın-Sosyal aktör-çapraş **3 kişi** (Gürzel · Çömlekçi · Korkmaz) — S204'te sadece 1 kişi (Gürzel) idi.

## Denge (S206 sonu)

| Ton | Sosyal S206 sayısı | Kanal-örnek |
|---|:-:|---|
| OLUMLU (proje-vaat-yatırım) | 9 | Murat Aydın(2), EKGYO Teoman, Korkmaz DEVA vaat, Ramazan Işık, Bakan Kurum |
| OLUMSUZ (mağdur-eleştiri-muhalefet) | **12** | Çömlekçi(3), factory_fallout, Şişecam-direniş(4), beykozunsesi, Cumhuriyet Özgür Özel, Bahar Feyzan, Tokatköy sakinleri |
| NÖTR (analiz-haber-tarafsız) | 7 | Birtakım İçerikler, Tele1, ENSONHABER, İBB TV, Dost Beykoz (bazı) |

**Muhalefet-ağır (%43)** — Beykoz-gerçek-tonu-olabilir · özellikle **yönetişim-belirsizliği** hem Basın (vekil-yönetim uyarısı) hem Sosyal (Çömlekçi-eleştirisi + Özgür Özel + Bahar Feyzan) tarafından teyit ediliyor.

## Cevaplayamadıklarım (S206 sonu · güncel)

| Konu | Havuz-durumu | Kim-kapatır |
|---|---|---|
| Paşabahçe arsa ALICI-ismi (171.5M$) | 🔴 hâlâ YOK | Borsa-CC (KAP) |
| Paşabahçe arsa satış-TARİHİ | 🔴 YOK | Borsa-CC (KAP) |
| Çelikler İnşaat Beykoz-projesi | 🔴 Sosyal + Basın iki-havuz-da YOK | Borsa-KAP · Tic-CC şirket-sicil |
| Peker GYO Beykoz-özel-proje | 🔴 YOK (Tera üzerinden bağlantı sadece) | Borsa-KAP |
| Beykoz mahalle m² fiyat-tablosu | 🔴 YOK | Analiz-CC (DURDU) |
| Tera Orman m² satış-fiyatı | 🔴 YOK | Analiz-CC · Basın sektör-röportaj |
| Alaattin Köseler dava-detay + suçlama | 🔴 YOK | Basın-CC adalet-haber |
| İskender Közen kişisel-video | 🔴 YOK | Sosyal S207 aktör-özel arama |
| VSVE9N9xSfk Murat Aydın-Demirören (yatırım-vaat) | 🔴 altyazı-yok · Whisper-aday | Sosyal S207 |
| ANXeifKk4Eg Vizyoner Beykoz 1971-1973 (nostaljik-belgesel) | 🔴 altyazı-yok · Whisper-aday | Sosyal S207 |
| 3. Köprü öngörüsü vs gerçekleşen (2016→2026) fiyat-serisi | 🔴 vaat-var, ölçüm-yok | TT-MAP · Analiz-CC (DURDU) |
| Sahil-işletme-özel-adları | 🔴 genel-anlatı-var, isim-yok | Basın-CC yerel-feed · Tic-CC işyeri |
| 30+ Beykoz-mahalle temas (Basın C13) | 🟡 kısmi-genişleme (Çubuklu, Tokatköy, Kavacık, Paşabahçe, Riva, Anadolu Kavağı) | Zaman |
| Yabancı-yatırımcı Beykoz-izleri | 🔴 0 hit | Fesa-CC · Turkuaz-Kart |

## Örnek-alıntılar (Standing #26 ≤1 cümle · atıf-var)

- *"Burası İstanbul Beykoz Paşabahçe."* — Revoltistanbul · `Bm-2LwEpclk` (whisper) — OLGU
- *"Sorunları çözemezsek kendim yapacak sonucu da şüphesiz gidip hapis yatacak. Açık. Açık."* — Murat Aydın 2019 · `cPY2d0vhJBY` (whisper) — VAAT
- *"Bundan önceki belediyeyi yönetenlerin belediyeyi yönetmek gibi değil, soymak gibi bir derdi vardı."* — Çömlekçi (MHP) · `W3mfglnCisg` — YOLSUZLUK-İDDİASI (SÖYLEM)
- *"Alaattin Köseler ile yan yana gelmemiz mümkün değil."* — Çömlekçi · `BkH9JlWPwMk` — parti-tavır-OLGU
- *"3 etap, 1400 villa, 3+1 4+1 5+1 6+1 tip."* — EKGYO Düşler Vadisi (Teoman Aksu) · `6Nu3hEK2Wj4` — proje-OLGU
- *"Ali Babacan'ın olurları Beykoz Belediye Başkanlığı'na adaylığımı ilan."* — Şenol Korkmaz DEVA · `dfVcjhRz9nE` — adaylık-OLGU
- *"Sahilde bazı düzenlemeler yapacağız. Ruhsatını almamız gerekiyor. Vermedikleri takdirde her türlü yol veren temi deneyeceğim."* — Murat Aydın 2019 · `cPY2d0vhJBY` — RUHSAT-ÇEKİŞMESİ-vaat

---

**Çıktı:** `~/Desktop/TT-Tüm CC/beykoz_vaka/vaka_beykoz_cc-sosyal_S206.md` + kopya `~/tradia_sosyal/cikti/vaka_beykoz_sosyal_S206.md`.

**Bildirimler:**
1. **Basın-CC → Sosyal S206 karşılığı:** Çömlekçi (MHP) 3 video · Korkmaz (DEVA) 1 video · Erbakan (YRP-açılış) 1 video hasadedildi. Kavşak-sinyal-güçlendi.
2. **Borsa-CC → hâlâ 2 kritik-borç:** (a) Paşabahçe 171.5M$ ALICI-kimliği, (b) Çelikler-İnşaat Beykoz-projesi olgu-teyidi.
3. **TT-MAP → G4 yatırım-söylem:** EKGYO Düşler Vadisi 1400 villa vs Tera Orman 70 villa (20× fark) · Sentinel-2 Riva-mahalle yapı-artış ölçüm-hipotezine hazır.

**V16 öz-eleştiri:**
1. **Whisper kurulum başarılı** ($0, ~15 dk) — 5-sprint kalıcı-borç kapatıldı. Bm-2LwEpclk kısa-çıktı (video-doğası) ama Kristal-İş genel-merkez-mekan-teyidi + Almanya-selam olgusu YENİ.
2. **Çelikler İnşaat & Peker GYO Beykoz-özel-video Sosyal'de YOK** → arama-yeterli-değil-mi yoksa gerçekten-YOK-mu belirsiz. Borsa-CC KAP çapraz-doğrulama şart.
3. **G3 Çömlekçi 66-dk röportaj DERİN-OLGU-KAYNAĞI** — daha ayrıntılı analiz S207 aday.
4. **G4 yatırım-söylemi zayıf** — 2 aday atlandı (Whisper aday); Sadece ENES videosu Beykoz-özel-değil-genel.
5. **Muhalefet-ağırlık %43** — üç-kanalın (MHP + CHP + YRP + DEVA + Bahar Feyzan) hepsi yönetişim-eleştirisi verdi → **söylem-eğilim uyum-tarafı-güçlü**.
6. **Sprint-numara #22 dürüst-düzeltme** yapıldı — Patron etiket S205 iken S206 kaydedildi (önceki S205 kapalı).

**$0 · A04 · #21-A/B · #22 · #26 · #31 · SİLME-YOK**.
