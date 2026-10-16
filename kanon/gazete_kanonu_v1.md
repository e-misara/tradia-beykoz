# GAZETE KANONU v1.3 — TRA-BASIN (günlük gazete)

**Statü:** 🟢 KANON v1.1 · Patron 2026-10-16 21:31 (ürün) + 21:32 (ad **TRA-BASIN**, katman ayrımı) · Vezir kaydı 2026-10-16 21:35
**Kaynak notu (dürüst):** Patron "Basın'ın `gazete_plan_v1.md`'sinden" dedi; **dosya diskte bulunamadı** (mdfind + find ~ + 02_CC_STATE grep → 0). Bu kanon Patron'un saydığı maddelerden yazıldı; Basın planı gelince karşılaştırılır, çelişki Tür A olarak işlenir (celiski_referans_kanonu).
**Bağlı:** olay_alarmi_kanonu_v1 · tecrube_kaydi_kanonu_v1 · kiyas_noktalari_kanonu_v1 · adres_anahtari_kanonu v1.2 · prompt_defteri_kanonu v1.2 (gazeteye giren satır) · ust_akil_teslim_kanonu_v1 · KVKK #31 · parsel_veri_kanonu_v1

## 1. Ürün
- **Ad:** **TRA-BASIN** (eski çalışma adı kaldırıldı) · **Yayıncı:** CC-Basın (`gazete.py`) · **Sahip:** Patron · **Okur:** Patron (09:00), Üst Akıl (Hafıza kopyası).
- **İki katman (Patron 21:32):**
  - **VERİ KATMANI** (Basın'ın girdisi, makine okur): `02_CC_STATE/tra_basin/TRA-BASIN_<YYYY-MM-DD>.md` (8 bölüm, §3) + `TRA-BASIN_<tarih>.json` (**gazete.json**: bölüm → satır → künye; dizgi bunu okur).
  - **OKUR ÜRÜNÜ** (Patron/Üst Akıl okur): `TRA-BASIN_<tarih>.html` + `TRA-BASIN_<tarih>.pdf` — **A4, 8–12 sayfa, gazete düzeni:** manşet + 3 sütun · bölge sayfaları (Beykoz · Kartal · Rize · ulusal) · resmî ilan köşesi (RG/EKAP/askı) · piyasa (kıyas noktaları: TÜFE/altın/asgari ücret, ilan kesiti) · takvim (SON_TARIH, kontrol tarihleri) · defter (tecrübe kaydı) · arka sayfa **"bugün tarihte"** (olay defteri/arşiv). **Dizgi kanonu = gelişim dosyasınınki:** krem zemin, kırmızı başlık, sayı kutuları. Şablon: Üst Akıl verir (Patron); Basın planı 23:00'e gelmezse ilk sayı **Vezir veri katmanı + Üst Akıl şablonu** ile basılır.
  - Hafıza 09:00'da dördünü `~/Desktop/UST_AKIL_BEKLEYEN/`'e kopyalar (.sha256, BEKLEYEN.md satırı).
- **Zincir:** gece raporu **08:40** (Vezir) → gazete **08:50** (Basın `gazete.py`, launchd `com.tradia.ccbasin.trabasin`) → Patron'a **09:00** (Hafıza kopya) → bekçi **09:05** (Vezir).

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

## v1.3 · Kanıt sınıfı TEK TANIM (Üst Akıl onayı 16.10 22:00 · Basın'ınki geçerli)
| Sınıf | Tanım |
|---|---|
| **A** | resmî belge (RG, EKAP, kurum kararı/açıklaması, resmî veri) |
| **B** | ≥2 **ulusal** kaynak |
| **C** | yalnız **yerel** kaynak |
| **D** | tek kaynak / başlık düzeyi |
**Ayrı eksen — `kanit_turu`:** `BELGE` · `HESAP` (türetim/formül; formül satırda zorunlu) · `PROXY`. A–D **kaynak çokluğu/resmîliği** söyler, `kanit_turu` **nasıl bilindiğini** söyler; ikisi **karıştırılmaz** (Vezir'in v1.2'deki "D = türetim" tanımı **geri çekildi**). Her makale satırı iki alanı da taşır.
*Vezir · 2026-10-16 22:09*
