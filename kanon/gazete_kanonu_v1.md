# GAZETE KANONU v1 — TRADİA GÜNLÜK

**Statü:** 🟢 KANON · Patron kararı 2026-10-16 21:31 ("günlük gazete ürün oldu, Basın yayıncı") · Vezir kaydı 2026-10-16 21:35
**Kaynak notu (dürüst):** Patron "Basın'ın `gazete_plan_v1.md`'sinden" dedi; **dosya diskte bulunamadı** (mdfind + find ~ + 02_CC_STATE grep → 0). Bu kanon Patron'un saydığı maddelerden yazıldı; Basın planı gelince karşılaştırılır, çelişki Tür A olarak işlenir (celiski_referans_kanonu).
**Bağlı:** olay_alarmi_kanonu_v1 · tecrube_kaydi_kanonu_v1 · kiyas_noktalari_kanonu_v1 · adres_anahtari_kanonu v1.2 · prompt_defteri_kanonu v1.2 (gazeteye giren satır) · ust_akil_teslim_kanonu_v1 · KVKK #31 · parsel_veri_kanonu_v1

## 1. Ürün
- **Ad:** TRADİA GÜNLÜK · **Yayıncı:** CC-Basın (`gazete.py`) · **Sahip:** Patron · **Okur:** Patron (09:00), Üst Akıl (Hafıza kopyası).
- **Çıktı:** `02_CC_STATE/gazete/TRADIA_GUNLUK_<YYYY-MM-DD>.md` (+ aynı adla `.json` künye tablosu) · Hafıza 09:00'da `~/Desktop/UST_AKIL_BEKLEYEN/`'e kopyalar (.sha256, BEKLEYEN.md satırı).
- **Zincir:** gece raporu **08:40** (Vezir) → gazete **08:50** (Basın `gazete.py`, launchd `com.tradia.ccbasin.gazete`) → Patron'a **09:00** (Hafıza kopya) → bekçi **09:05** (Vezir).

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
- `com.tradia.vezir.gazete_bekci` **09:05**: bugünkü `TRADIA_GUNLUK_<tarih>.md` yoksa ya da 08:40 öncesi mtime ise **KIRMIZI**; varsa bölüm sayısı 8/8, "TARANMADI" sayısı, CC satır sayısı (kaç CC verdi), UST_AKIL kopyası var mı → `SUREKLILIK.json → gazete[<tarih>]` (**süreklilik tablosunun "gazete" satırı**). Pano ve ertesi gün gece raporu bu satırı gösterir.
- Prompt defteri sütunu **"gazete satırı"** (var/yok) birleştiriciden.

## 7. Gelişim dosyası
SU dosyası **Kısım 3 → 3.13 "Günlük gazete"** (Hafıza paketi): ürün tanımı + ilk sayı künyesi. **İlk sayı çıkınca Vezir Patron'a haber verir.**

*Vezir · 2026-10-16 21:35 · v1 · Basın planı gelince v1.1*
