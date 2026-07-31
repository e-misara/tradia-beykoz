# V3-UYGULA · Kağıt Üstünde Değil, Kodda

**Tarih:** 2026-07-31
**Kaynak:** Üst Akıl (GENEL-KONTROL §4.a bulgusu üzerine acil aksiyon)
**Kanal:** Vezir (uygulama tetiği + teyit-formatı)
**Bağlam:** GENEL-KONTROL 17:00 tespit etti — YAZMA-YOLU v3 direktifi (07-31) klasör kurdu ama **CC'ler hâlâ Mac'e yazıyor**. Havuz +35K/saat büyüyor, Mac 34GB Basın (artmaya devam), STAGING_YENI/ 0 dosya.
**Disiplin:** $0 · Standing #35+#36+#38 · A04 · KVKK #31 v1.1

---

## 1. Kuralın Özü — Acil Tetik

> v3 yazma-yolu **KÂĞIT ÜSTÜNDE** kaldı. Klasörler kuruldu ama siz hâlâ Mac'e yazıyorsunuz.
> **ŞİMDİ UYGULA — 3 satır:**
> ```python
> HAM_YOL = "/Volumes/TT-HAFIZA/STAGING_YENI/<kaynak>/"
> if not os.path.ismount("/Volumes/TT-HAFIZA"):
>     raise SystemExit("mount yok")
> ```
> Bir sonraki hasat turunuzda **Mac'e DEĞİL** STAGING_YENI'ye yazın.
> Teyit: **"v3 uygulandı, STAGING'e yazıyorum"** tek satır.
> **Uygulamayan CC = Mac'i doldurmaya devam eder, mimari çöker.**

---

## 2. Slug Uyumu (SLUG_KANON kararı — bkz. `UA_20260731_SLUG_KANON_kaynak_bazli.md`)

- Yol **KAYNAK-BAZLI**: `STAGING_YENI/<kaynak>/`
- CC-bazlı slug (`cc_basin/`, `cc_analiz/`…) **GEÇERSİZ**
- Örnekler doğru:
  - Basın → `STAGING_YENI/basin/2026-07-31/batch_XXX.jsonl`
  - TT-MAP → `STAGING_YENI/osm/2026-07-31/istanbul_XXX.jsonl`
  - Analiz → `STAGING_YENI/ilan/2026-07-31/…`, `STAGING_YENI/tuik/2026-07-31/…`
  - Tic → `STAGING_YENI/rg/2026-07-31/il_<il>/…`, `STAGING_YENI/mersis/…`
  - Pazarlama → `STAGING_YENI/github_veri/…`, `STAGING_YENI/kaggle/…`
  - Sosyal → `STAGING_YENI/sosyal/2026-07-31/…`
  - Borsa (aktifse) → `STAGING_YENI/evds/…`, `STAGING_YENI/kap/…`

Her batch yanına **`.sha256`** + **`kunye.json`** (kunye içinde `cc: cc_<name>` alanı zorunlu — sorumluluk metadata'da korunur).

---

## 3. Uygulama Kontrol Listesi (CC'nin bugün yapacağı — <5 dk)

1. **Worker'ının yol-sabitini değiştir** (1 satır)
2. **Mount kontrolü ekle** (2 satır — worker başlangıcı)
3. **İlk-batch'ı STAGING_YENI'ye yaz** — batch_001.jsonl + .sha256 + kunye.json
4. **Vezir'e tek-satır** (Desktop'a bırak, `~/Desktop/TT-Tüm CC/durum_v3_uygulama.md` gibi):
   ```
   v3 uygulandı, STAGING'e yazıyorum · kaynak: <slug> · ilk-batch: batch_001.jsonl · SHA:E · kunye:E
   ```

---

## 4. Uygulamayan CC Riski

- **Mac disk hep dolar** — Basın 34GB (bugün 15:29'da hâlâ artıyor), Whisper GB'lar gelecek
- **Retro-taşıma anlamsız** — Hafıza staging_S1'e taşırken CC arkadan yenisini yığar
- **STAGING_YENI bir kandırmaca** — kurulmuş klasör, kullanılmayan altyapı
- **Mimari çöker** — 24-48 saatte Mac %90+ dolar, hasat durur

Bu kural **agresif**: uygulamayan CC "geride kalmış" olarak işaretlenir; Vezir bir sonraki tarama turunda Mac disk artışını CC-CC bazında raporlar.

---

## 5. Vezir Takip Tablosu

| CC | v3 uygulama | Teyit-satırı geldi mi | STAGING_YENI ilk-batch | Mac disk trend |
|---|---|---|---|---|
| CC-Basın | ⏳ | — | — | 🔴 Artıyor (34GB → ?) |
| CC-TT-MAP | ⏳ | — | — | 🟡 35MB stabil |
| CC-Analiz | ⏳ | — | — | 🟡 20MB stabil |
| CC-Tic | ⏳ | — | — | 🟡 14MB stabil |
| CC-Sosyal | ⏳ | — | — | 🟡 122MB (Whisper açık, artacak) |
| CC-Pazarlama | ⏳ | — | — | 🟢 56KB (yeni kurulum, en kolay v3'e geçer) |
| CC-Borsa | Patron'da | — | — | — |

**Ölçüm:** Vezir bir sonraki filesystem-tarama turunda (24 saat içinde ya da UA istediğinde):
- `find /Volumes/TT-HAFIZA/STAGING_YENI -type f | wc -l` → sayı sıfırdan büyükse uygulama başladı
- `du -sh ~/tradia_basin/ham/` → durmuşsa Basın v3'e geçti
- Kunye JSON'lar okur → hangi CC yazdığını sayar

---

## 6. Vezir A04 Dürüst-Notlar

### 6.a 🔴 **v3 (07-31) dağıtıldı, uygulanmadı — Vezir'in bilinemez-borcu**
- Vezir 3 direktif üretti (v3 + ÜÇLÜ-GENİŞLEME + SLUG_KANON) ama uygulama teyidi yok
- **Kök-neden hipotez:** CC session'larına yapıştırma yapılmadıysa CC direktifi görmez. Yayın-kanalı yapısal boşluk (KURULUS_VEZIR §7)
- Bu tetik direktifi **acil-uygulama** üzerine baskı yapıyor; yayın-boşluğunun sistemik çözümü ayrı iş (Vezir Actions-cron adayı, uzun vadeli)

### 6.b 🔴 **Basın kritik yol — 34GB'e artıyor**
- Bir önceki tur 15:29 mtime kanıt, hâlâ Mac'e yazıyor
- v3 uygulaması Basın'da geç kalırsa Mac disk kısa sürede %50-60+ olur
- **Öneri:** Basın **ilk-CC** v3-uygulama önceliği (motor 7/24 otonom, bir kod-değişikliği geniş etki)

### 6.c 🟡 **Pazarlama en kolay uygulama — 56KB kurulum-modu**
- Henüz büyük çıktı yok, worker daha yeni
- v3-uygulama Pazarlama'da **0-friction** — baştan doğru yaz
- **Öneri:** Pazarlama v3'i ilk uygulayan-model olarak referans-CC yapabilir

### 6.d 🟢 **Standing #38 canlı test**
- v3-direktifi uygulanmadan sürüyorsa Standing #38 (terminal-öncelik) çalışıyor demektir — model "uygula" der, terminal uygulamayı yapar
- Vezir modelin uygulamayı zorlaması yerine **ölçüm-raporu** üretiyor (§5 tablosu Vezir'in izidir)
- Bir sonraki turda tabloyu güncelleyip **uygulama-kanıtını** filesystem'den okuyacak

### 6.e 🟡 **Retro-taşıma ile ilişki**
- Hafıza staging_S1'e Basın 55GB taşıdı, ama Mac 34GB hâlâ duruyor + artıyor
- **Yeni-yol + retro-taşıma birbirini beslemeli:** v3 uygulanınca Basın Mac artışı durur → retro-taşımanın Mac-silme adımı temiz olur
- Aksi retro-taşıma sonsuz-döngü olur (silinen yeniden dolar)

---

## 7. Yayın Kanalı

- Direktif arşivde ✅
- Patron 6 CC session'ında (Basın · TT-MAP · Analiz · Tic · Sosyal · Pazarlama) 3-satır kod-değişimini yapıştıracak
- CC her biri Desktop'a **teyit-satırı** bırakacak (`~/Desktop/TT-Tüm CC/durum_v3_uygulama.md`)
- Vezir bir sonraki tarama turunda uygulama-oranını raporlayacak

*V3-UYGULA acil-tetik dağıtımı arşivde. Kağıt bitti, kod başladı — ya da başlamalı.*
