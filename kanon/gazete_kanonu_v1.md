# GAZETE KANONU v1.6 — TRA-BASIN (günlük gazete)

**Statü:** 🟢 KANON v1.1 · Patron 2026-10-16 21:31 (ürün) + 21:32 (ad **TRA-BASIN**, katman ayrımı) · Vezir kaydı 2026-10-16 21:35
**Kaynak notu (dürüst):** Patron "Basın'ın `gazete_plan_v1.md`'sinden" dedi; **dosya diskte bulunamadı** (mdfind + find ~ + 02_CC_STATE grep → 0). Bu kanon Patron'un saydığı maddelerden yazıldı; Basın planı gelince karşılaştırılır, çelişki Tür A olarak işlenir (celiski_referans_kanonu).
**Bağlı:** olay_alarmi_kanonu_v1 · tecrube_kaydi_kanonu_v1 · kiyas_noktalari_kanonu_v1 · adres_anahtari_kanonu v1.2 · prompt_defteri_kanonu v1.2 (gazeteye giren satır) · ust_akil_teslim_kanonu_v1 · KVKK #31 · parsel_veri_kanonu_v1

## 1. Ürün
- **Ad:** **TRA-BASIN** (eski çalışma adı kaldırıldı) · **Yayıncı:** CC-Basın (`gazete.py`) · **Sahip:** Patron · **Okur:** Patron (09:00), Üst Akıl (Hafıza kopyası).
- **İki katman (Patron 21:32):**
  - **VERİ KATMANI** (Basın'ın girdisi, makine okur): `02_CC_STATE/tra_basin/TRA-BASIN_<YYYY-MM-DD>.md` (8 bölüm, §3) + `TRA-BASIN_<tarih>.json` (**gazete.json**: bölüm → satır → künye; dizgi bunu okur).
  - **OKUR ÜRÜNÜ** (Patron/Üst Akıl okur): `TRA-BASIN_<tarih>.html` + `TRA-BASIN_<tarih>.pdf` — **A4, 8–12 sayfa, gazete düzeni:** manşet + 3 sütun · bölge sayfaları (Beykoz · Kartal · Rize · ulusal) · resmî ilan köşesi (RG/EKAP/askı) · piyasa (kıyas noktaları: TÜFE/altın/asgari ücret, ilan kesiti) · takvim (SON_TARIH, kontrol tarihleri) · defter (tecrübe kaydı) · arka sayfa **"bugün tarihte"** (olay defteri/arşiv). **Dizgi kanonu = gelişim dosyasınınki:** krem zemin, kırmızı başlık, sayı kutuları. Şablon: Üst Akıl verir (Patron); Basın planı 23:00'e gelmezse ilk sayı **Vezir veri katmanı + Üst Akıl şablonu** ile basılır.
  - Hafıza 09:00'da dördünü `~/Desktop/UST_AKIL_BEKLEYEN/`'e kopyalar (.sha256, BEKLEYEN.md satırı).
- **Zincir:** gece raporu **08:40** (Vezir) → gazete **08:50** (Basın `gazete.py`, launchd **`com.tradia.ccbasin.trabasin`** (süreklilik eşlemesi `ccbasin` anahtarından; `com.tradia.trabasin` KALDIRILIR)) → Patron'a **09:00** (Hafıza kopya) → bekçi **09:05** (Vezir).

## 2. Girdi hattı (gazete.py bunları okur)
1. `arsiv/gece_raporu_<tarih>.md` → **SON 24 SAAT OLAYLAR** bölümü (olay_alarmi hattı) ve zamanlı iş bekçisi.
2. `02_CC_STATE/olay_alarmi_son24.json` (Basın canlı akış; Beykoz/Kartal/Rize + ulusal).
3. **Her CC'nin dönüş dosyası** `donus_<cc>_<önceki gün>.md` → **`## GAZETEYE GİREN SATIR`** bölümü (**zorunlu**, 1–3 satır, her satır künyeli): `- <tek cümle> — [<CC> · <kaynak adı> · <tarih> · BELGE|HESAP|PROXY · <dosya yolu>]`. Bölüm yoksa gazete o CC için **"bugün satır vermedi"** yazar (boş bırakmaz, uydurmaz).
4. `tecrube_kaydi/*.jsonl` (yeni/revize olaylar) · `SON_TARIH.json` (geçen son tarihler) · `SUREKLILIK.json` (makine, kilit, zamanlı iş).

## 3. Bölümler (sıra sabit; her bölüm ya dolu ya **"tarandı, yok"**)
1. **Künye** (sayı no, tarih, kesit saatleri, yayıncı, girdi dosyaları + SHA ilk 8) · 2. **Son 24 saat olaylar** (ilçe × seviye, ≤3 başlık) · 3. **CC satırları** (CC başına 1–3) · 4. **Tecrübe kaydı** (yeni/revize) · 5. **Sayılar** (yalnız kesitli, kaynaklı) · 6. **Süre dolan / KIRMIZI** (SON_TARIH, zamanlı iş, olay hattı) · 7. **Patron adımları** · 8. **Düzeltmeler** (önceki sayıya).
**Boş bölüm beyanı:** bölümde veri yoksa "**tarandı, yok** (taranan: …)" yazılır; taranmadıysa "**TARANMADI**" ve bekçi KIRMIZI.

## 4. Sayı disiplini
- Her rakam **kesit tarihli ve kaynak künyeli**; kanıt sınıfı (BELGE/HESAP/PROXY) satırda. Fark biçimi **önceki → yeni = ±fark**. `0` ölçülmüş sıfırdır; eksik `null + gerekçe` (Σ kuralı). İlçe değeri mahalleye atfedilmez (K9). Tarih = yayın/olay tarihi, metin yılı değil.
- "İlk", "rekor", "en" sıfatları yalnız kaynağın kendi sayısıyla ve kesitle (Basın 269,5 kg/m² dersi).

## 5. Hukuk ve gizlilik
- **KVKK #31:** gerçek kişi adı yalnız kamu görevi/ünvanla (Bakan, Başkan, Vali); sahiplik/ortaklık maskeli (A.Ö.); satıcı/danışman adı yok.
- **Telif:** haber alıntısı **en fazla 1 cümle**, kaynak + link; metin yeniden anlatım. Görsel yalnız kendi üretimimiz ya da açık lisans (kaynak_tarama lisans alanı).
- **Parsel yok:** ada/parsel/koordinat/künye gazeteye girmez (parsel_veri_kanonu); mahalle düzeyi adres anahtarı girer. Sızıntı kapısı deseni gazete dosyasına da uygulanır (Basın `gazete.py` yayın öncesi tarar; eşleşmede yayın durur).
- API anahtarı / `.env` değeri / dosya içi sır **asla**.

## 6. Bekçi ve ölçü (Vezir)
- `com.tradia.vezir.trabasin_bekci` **09:05**: bugünkü `TRA-BASIN_<tarih>.md` **VE** `.pdf` ikisi de var mı; biri yoksa ya da 08:40 öncesi mtime ise **KIRMIZI** (pdf yoksa KIRMIZI); varsa bölüm 8/8, TARANMADI sayısı, künyeli CC satır sayısı, pdf sayfa sayısı (8–12 bandı), UST_AKIL kopyası → `SUREKLILIK.json → tra_basin[<tarih>]` (**süreklilik tablosunun "tra_basin" satırı**). Pano ve ertesi gün gece raporu bu satırı gösterir.
- Prompt defteri sütunu **"gazete satırı"** (var/yok) birleştiriciden.

## 7. Gelişim dosyası
SU dosyası **Kısım 3 → 3.13 "TRA-BASIN: günlük gazete"** — **ilk sayıdan sonra, Üst Akıl yazar** (Vezir yazmaz). **İlk sayı çıkınca Vezir Patron'a haber verir.**

**Basın planı son tarih: 2026-10-16 23:00** (`02_CC_STATE/gazete_plan_v1.md`); gelmezse ilk sayı Vezir veri katmanı + Üst Akıl şablonu (Üst Akıl'a bildirildi).

*Vezir · 2026-10-16 21:35 · v1.1 2026-10-16 21:49 (TRA-BASIN adı, katman ayrımı, pdf bekçisi)*

## v1.2 · Ortak yayın (Patron 16.10 21:4x)
### VEZİR KÖŞESİ (Vezir yazar · launchd `com.tradia.vezir.kose` 08:43)
`02_CC_STATE/tra_basin/vezir_kose_<tarih>.json` **her sabah 08:45'e kadar**: `gece_raporu_ozeti[5]` · `kirmizi[]` (olay alarmı, zamanlı iş, son tarih, TRA-BASIN, makine, kilit, disk) · `patron_adimlari[]` · `cc_calismalari[15]` (birim × dün / bugün / durum ÇALIŞTI|SESSİZ · Beykoz teslim dosya · gazete satırı ✓) · `bilgilendirme[]` · `kunye`. Basın `gazete.json`'u 08:50'de **bunu da okur** (köşe sayfası). Her satır dosyadan; ölçülemeyen "ölçülmedi".
### gazete.json şeması ekleri (Basın)
- **`mansetler[3]`**: `{baslik, alt_baslik, bolge, kanit_sinifi, kaynak}`.
- **`makaleler[]`**: `{bolge (Beykoz|Kartal|Rize|Ulusal|Köşe), baslik, satirlar[], kanit_sinifi A–D, kanit_turu BELGE|HESAP|PROXY, kaynak[], adres_anahtari?}`. Uygulama bunu okur.
- `vezir_kose`: köşe JSON'u gömülü ya da yol.
### Dağıtım
- **Uygulama** birincil okur yüzeyi (Patron orada görür). **PDF yine basılır** (arşiv + dağıtım) ama **Patron'a gönderilmez**.
- **Bekçi 09:05** (`trabasin_bekci`): md VE pdf (§6) **+ uygulama açıldı mı** → **`com.tradia.trabasin.app`** (Hafıza · MU-01 sahibi · 09:05) launchd son koşusu → `SUREKLILIK.json → tra_basin_app[<tarih>]`; plist yoksa "ölçülmedi (plist yok)".
*Vezir · 2026-10-16 22:05*

## v1.3 · Kanıt sınıfı NİHAİ (Üst Akıl 22:25 — 22:00 'Basın tanımı' satırı GEÇERSİZ)
| Sınıf | Tanım (koda yazıldığı gibi) |
|---|---|
| **A** | belge / ölçüm (resmî belge, resmî veri, kendi ölçümümüz) |
| **B** | ≥2 **bağımsız** kaynak |
| **C** | tek kaynak |
| **D** | türetim / başlık düzeyi |
**Ayrı alan — `kaynak_turu`:** `yerel` · `ulusal` · `resmî` (yerel/ulusal ayrımı A–D'ye karışmaz). **`kanit_turu`** (BELGE/HESAP/PROXY) üçüncü eksen olarak kalır. Her makale satırı: `kanit_sinifi` + `kaynak_turu` + `kanit_turu`.
*Vezir · 2026-10-16 22:26 (v2 kararları)*

## v1.4 · TRA-BASIN kararları v2 (Üst Akıl 22:25 · Patron)
1. **Görevli adı:** **Sayı 1 hiçbir ad içermez** (Basın uygulaması). Sayı 2'den itibaren: yalnız **resmî sıfatıyla konuşan kamu görevlisi** (vali, kaymakam, belediye başkanı, bakan, kurum sözcüsü) **unvan + soyadı** ile; **beyaz liste `kanon/gorevli_listesi.json`** (Vezir tutar). **Ekleme kuralı:** Basın dönüşünde **'ADAY GÖREVLİ'** künyesiyle gelir (unvan · soyadı · kurum · kaynak url/dosya · tarih · sınıf), Vezir **dosyada doğrular** ve listeye alır; doğrulanamayan `aday_bekleyen`'de kalır ve **maskelenir**. Liste **haftada bir (Pazartesi 09:00)** gözden geçirilir; sıfatı düşen `gecerlilik_bitis` alır, silinmez. Listede olmayan **her ad maskelenir** (KVKK #31).
2. **Şablon:** `kanon/tra_basin_sablon_v1.html` (A4 · krem zemin · kırmızı başlık · sayı kutuları · 8 bölüm yuvası `gazete.json` alan adlarıyla) — kanon dosyasıdır, Basın `gazete.py` bunu kullanır; Üst Akıl/Patron şablon verirse aynı yola v2.
3. **Künye (Misara katalog künyesi YOK):** **"TRA-BASIN · Tradia · Türkiye Konum İstihbaratı · sayı N · <tarih> · Yayın: Ahmet Çolak"**.
4. **launchd:** gazete `com.tradia.ccbasin.trabasin` 08:50 (eski `com.tradia.trabasin` kaldırılır) · uygulama `com.tradia.trabasin.app` 09:05 (Hafıza, MU-01 — Basın işi değil) · köşe `com.tradia.vezir.kose` 08:43 · bekçi `com.tradia.vezir.trabasin_bekci` 09:05.
5. **Dosya sahipliği:** `gazete.json` **Basın**; Hafıza'nın önizleme JSON'u **`gazete_app.json`** ayrı kalır.
6. **Tecrübe kaydı ilk 20 satır (≥2 kaynak): son tarih 17.10 14:00** (Basın; SON_TARIH).
*Vezir · 2026-10-16 22:26*

## v1.5 · Kural kodda yaşar (U-14 · Vaka #15)
KVKK #31 (mağdur/kişi adı), parsel yok, telif ≤1 cümle, görevli beyaz listesi: **API istemine satır + çıktı doğrulayıcısı** (regex/blok liste) olarak `tra_basin.py`/`k5_ozet.py`'de bulunur; yoksa bekçi KIRMIZI. Kanon metni tek başına koruma değildir (B11).
*Vezir · 2026-10-21 17:53*

## v1.6 · Sayaç şeridi + karma gazete + ray sayfası (Üst Akıl 23.10 22:00 · Patron 21:48) — tam metin `kanon/tra_basin_v2_sayac_seridi_karma_gazete.md`
**Bölüm sırası (v1.6, §3'ün yerine):** 1 Manşet + **sayaç şeridi** · 2 Gündem (kamu kararı, siyaset, altyapı) · 3 **Türkiye'den** (il il, il başına ≤2 satır, olmayan iller tek satır "bugün satır yok: n il") · 4 Ekonomi · Piyasa (Borsa ölçüm satırı, Finans kıyas, KAP sermaye, TÜİK günü) · 5 Resmî ilan · Plan (RG, EKAP, askı, CB) · 6 Söylem (Sosyal, kanal ili, kişi adı yok) · 7 **Ray** (açık ilçeler, bugünkü ilçe, Beykoz TAMAM satırı, 973 kutucuk ray çizgisi) · 8 Birimler · Süreklilik (CC satırları, KIRMIZI, Patron adımları, düzeltmeler). Beykoz/Kartal/Rize bölge sayfaları **kalkar**, ray sayfasına taşınır.
**Sayaç şeridi (her sayının üstünde, sabit yer/sıra):** 3 kuşak — **1A HAZİNE 13 kutu** (gelişim dosyası v5 Kısım 1 rakamları → canlı sayaç; sahipleri: Hafıza 1·2·4, Basın 3·11·12, Tic 5·6, Borsa 7, Aİ 8, Pazarlama 9, Finans 10, Vezir 13) · **1B NABIZ 6 kutu** (defter satır·il/81, canlı uç n/11 + sessiz, gecikme, çözüm il·ilçe·adres doğruluğu, tablo VAR_81 n/13, tetik) · **1C RAY 6 kutu** (K1 n/973, K2 TAMAM n/973, açık ilçeler, sıradaki, bu hafta +k · hız, tahminî bitiş). Her kutu `değer · ad · fark (önceki→bugün)`; **rakam yalnız makine sayımı**, sayım yoksa **"ölçülmedi (sayaç yok)"** — boş kalmaz, eski değer taşınmaz; sahibi 7 gün içinde sayacı yazar. Kaynak: Hafıza `tra_basin/sayac_<tarih>.json` 08:30 (sahiplerin `02_CC_STATE/sayac/<cc>_sayac.json` dosyalarını birleştirir).
**Karma satır biçimi:** tek cümle yeniden anlatım (alıntı ≤1) + künye `[il · ilçe? · kaynak · saat · kanıt A/B/C/D · defter id]`; **defter id'siz satır karma sayfaya giremez** (CC satırları hariç). Manşet puanı = kanıt (A3/B2/C1) × sınıf ağırlığı (afet 3, kamu_karari 3, sermaye 2, altyapi 2, plan_askisi 2, ihale 1, piyasa 1, siyaset 1, soylem 1, kaza 1) × il çözümü (TR-NN 1,5 · ULUSAL 1 · COZULEMEDI 0,5). D sınıfı yalnız Söylem/Türkiye'den; `sinif=sistem` girmez.
**Bekçi (v1.6, 26.10'dan):** şerit var/yok · bir kuşak tamamen boş → KIRMIZI · karma sayfa satır sayısı · defter id'siz satır sayısı · `SUREKLILIK.tra_basin[tarih].serit`. **Geçiş:** 24–25.10 sayıları mevcut düzen + "şerit hazırlanıyor" satırı; **26.10 sayısı (sayı 10) v2**; sayfa bandı 8–12 korunur.
*Vezir · 2026-10-24 01:19 · v1.6*
