> **KANON KOPYASI NOTU (Vezir 18.10):** aslı Hafıza'nın MU-01 belgesi (`02_CC_STATE`); public repo sızıntı kapısı için desen adı kırıldı (`sk-ant[-]`), içerik değişmedi.

# TRA-BASIN UYGULAMASI v1 (MU-01 modülü) — Hafıza

**Statü:** kuruldu 2026-10-16 22:1x · ilk gerçek açılış **17.10 09:05** · Sahip: CC-Hafıza (Patron kararı, Vezir bildirimi VEZ-HAFIZA-TRABASIN-APP-20261016) · Okur: Patron
**Ne:** bilgisayarda yerel gazete ekranı: MANŞET · MAKALELER · VEZİR · CC ÇALIŞMALARI · BİLGİLENDİRME; sol altta arşiv (geçmiş sayılar). Kendi kendine yenilenir (60 sn), boşta kalınca sekmeleri sırayla gösterir (▶ Oto). İnternetsiz, CDN yok.

## Dosyalar
| Ne | Yol |
|---|---|
| Uygulama | `~/tradia_calisma/tra_basin_app/` → `index.html` + `app.js` (çerçeve yok), `baslat.py`, `veri` → symlink `02_CC_STATE/tra_basin/` |
| Veri katmanı (Hafıza) | `~/tradia_sorgu/scripts/tra_basin_app_veri.py` → `02_CC_STATE/tra_basin/<sayı tarihi>/gazete.json` + `tra_basin/index.json` |
| Dock kabuğu | `~/Applications/TRA-BASIN.app` (Info.plist + kabuk betiği; `baslat.py --pencere` çağırır) |
| launchd | `com.tradia.trabasin.app` **09:05** (sunucu + Chrome `--app` tam ekran; Standing #38 framework Python tam yol) · `com.tradia.trabasin.veri` **30 dk** (veri yenile + sunucu ayakta) |
| Log | `~/tradia_calisma/tra_basin_app/logs/` (`baslat.log`, `sunucu.log`, `launchd_*.log`) |
| Sunum | `python -m http.server 8787 --bind 127.0.0.1` (yalnız localhost) |

## Veri sözleşmesi
- **Okur:** `gazete_app.json` (varsa) → yoksa `gazete.json`. Hafıza `gazete.json`'u **yalnız Basın kendi gazete.json'unu yazmadıysa** yazar; Basın yazdıysa (mansetler[3] · makaleler[] A–D) ezmez, birleşik görünümü `gazete_app.json`'a yazar (manşet/makaleler Basın'dan, Vezir köşesi + CC + bilgilendirme Hafıza'dan).
- **Girdiler (yalnız okur):** `tra_basin_girdi/<veri günü>/*.json` (Basın) · `olay_alarmi_son24.json` · `vezir_kose_<tarih>.json` (Vezir 08:43) · `arsiv/gece_raporu_*.md` · `donus_<cc>_<gün>.md` · `hedef_karti_*.json` · `motor/SUREKLILIK.json` · `motor/SON_TARIH.json` · `agir_is_kilidi.json` · `vezir_bildirim_*` · `hafiza_bildirim_patron_*`.
- **Sayı tarihi** = bugün, **veri günü** = dün. 17.10 öncesi otomatik üretim yok (`--sayi` ile önizleme).
- Boş bölüm uydurulmaz: **"tarandı, yok"** ya da **"TARANMADI"**; "dönüş yok" ayrıca yazılır.

## Gizlilik (gazete_kanonu §5)
Kişi adı: Basın `tra_basin.py`'nin `kisi_maskele`'si aynen yüklenir (BLOK listesi Basın'da güncellenince buraya da yansır) · ada/parsel/koordinat/künye `[parsel künyesi]`/`[koordinat]` · BEY-15/Rize PARSEL-01 `su_paketi.rize_redakte` · `.env` değerleri/`sk-ant[-]*` hem üretimde hem `app.js`'te maskelenir. Tüm metin `textContent` ile yazılır (HTML enjekte edilmez). **Sınır:** serbest metindeki kişi adı yalnız Basın'ın blok listesi + unvan kalıbıyla yakalanır; listede olmayan bir ad kaynak dosyada geçerse maskelenmez.

## Çalıştırma
- Elle: `open ~/Applications/TRA-BASIN.app` ya da `python baslat.py --pencere` · yalnız veri: `python baslat.py --sadece-veri`
- Önizleme: `python ~/tradia_sorgu/scripts/tra_basin_app_veri.py --sayi 2026-10-17 --veri 2026-10-16`
- M4 komuta panosunda (8789) **TRA-BASIN ↗** sekmesi bu uygulamaya (8787) bağlanır.

## Bilinmeyen / bu turda denenmeyen
- Noto Serif Mac'te yok → yığın Liberation → Times'a düşer (Basın PDF'iyle aynı). 
- Tam ekran açılış 22:1x'te `TRA-BASIN.app` ile bir kez denendi (açıldı, kapatıldı); **09:05 launchd tetiği gerçek koşuda ilk kez çalışacak**.
- Basın `gazete.json` şeması (mansetler/makaleler) henüz yazılmadı: birleştirme kodu şemaya göre yazıldı, gerçek dosyayla **denenmedi**.
- Vezir köşesi (`vezir_kose_2026-10-16.json` deneme dosyasıyla) denendi; 08:43 launchd'li üretimi gelince doğrulanır.
