# SOSYAL KANAL KANONU v1 — TASLAK (CC-Sosyal önerisi · Vezir kanonlaştırır)

**Statü:** 🟡 TASLAK · 2026-10-17 · Patron talimatı "kanal listesi kanon/sosyal_kanal_kanonu_v1.md" — bu dosya `tradia-beykoz/kanon/` içinde YOKTU; Sosyal yazar, **kanon dizinine koymak ve push Vezir'in**.
**Bağlı:** adres_anahtari_kanonu v1.2 · kaynak_tarama_semasi · olay_alarmi_kanonu_v1 · makine_kaynak_kanonu_v1 (kural 2, 8, 9) · ham_veri_depolama_kanonu (ayna borcu) · KVKK #31 · KOS v1.0 · Standing #21-A, #22, #26

## 1) Tek kayıt yeri
Takip edilen kanal listesi **tek dosyadır**: `~/tradia_sosyal/cikti/gundem_nabiz/channels_manifest.json` (`kanallar[]`). Başka liste (elle, CC dosyası, bölge JSON'u) kanal ekleyemez/çıkaramaz. Dış görünüm: `02_CC_STATE/sosyal/sosyal_kanal_tablosu.md/.csv` (Sosyal üretir).

## 2) Zorunlu alanlar (her kanal)
`slug` · `handle` ve/veya `id` (UC…) · `katman` (A/B/C) · `kanit` (#21-A: YUKSEK-birincil-veri | DUSUK-teyit-gerekli) · `alan` (haber/program/belgesel/yerel/kurum türünü türetir) · `durum` · `kaynak` (neden/nasıl eklendi, tarih) · `adres_anahtari` + `adres_kapsam` (ULUSAL | IL | ILCE | BOLGE | YER_YOK) + `adres_kaynak` (AD | ICERIK | ETIKET | TAHMIN) + `adres_guven` · `icerik_kaniti` (son 10 videoda yer adı/mahalle oranı, güven YÜKSEK/ORTA/DÜŞÜK).
**Ad anahtar değildir:** yer adı yalnız `adres_anahtari` (TR-<plaka>-<TÜİK ilçe>[-<mahalle sıra>]) ile bağlanır.

## 3) Durum sözlüğü
| durum | anlam | hasat |
|---|---|---|
| `aktif` | kimliği doğrulanmış, hasatta | günlük |
| `aday` | eklendi, içerik kanıtı bekliyor (≥3 video) | günlük, kanıt gelene dek raporlarda sayılmaz |
| `handle_yok_404` | handle YouTube'da yok (tahmin edilmişti); kayıt SİLİNMEZ | atlanır |
| `yanlis_kanal` | handle başka kanala çıkıyor | atlanır |
| `yanlis_icerik` | içerik denetiminde yer iddiasıyla ilgisiz (ör. Kartal=Beşiktaş lakabı) — ad eşleşmesi tuzağı | atlanır, DB kaydı SİLİNMEZ |

## 4) Kanal ekleme kuralı (KOS-1 uyumlu)
1. **Kimlik kanıtı:** kurum/medya kanalı için kendi **resmî sitesinin** YouTube bağlantısı (HTTP kodu+tarih) YA DA kanal sayfasında kurum adı eşleşmesi; yalnız YouTube araması sonucu eklenmez (arama = ADAY).
2. **İçerik kanıtı:** yer iddiası taşıyan kanalda son 10 videoda yer adı/tekil mahalle adı oranı; **kanal ADINA bakarak karar verilmez, içerik okunur** (emsal: `halk_53`'ü adından müzik sanıp yanlış işaretlemiştim, içerik Rize yerel çıktı).
3. **Gürültü kontrolü:** "Kartal", "Aksu", "Çay", "Merkez" gibi çok anlamlı adlar il ipucu olmadan eşlenmez.
4. **Kişi hesabı:** kamu görevlisi/makam hesabı yalnız resmî site bağlantısı varsa ve `makam` sınıfında; vatandaş/emlakçı/muhtar kişisel hesabı **eklenmez** (KVKK #31).

## 5) Hasat düzeni (özet)
launchd `com.tradia.sosyal.hasat` **03:10** (kanal başına yeni videolar + YouTube otomatik altyazı) → `transkript` **03:40** (altyazısız: Whisper kuyruğu) → `gece_satiri` **08:20**. Ağır iş kilidi + pil kapısı (adaptör + ≥%50, devam ≥%25); ham veri **Mac tamponu → ayna_borcu.json → Hafıza** (diske doğrudan yazma YOK). Her koşu `02_CC_STATE/sosyal/hasat_<tarih>.json`; koşmadıysa/üretmediyse **KIRMIZI** ("exit 0 ≠ üretim").

## 6) Telif ve alıntı
YouTube karesi/küçük resmi **gazeteye, rapora, Üst Akıl'a girmez**; transkript alıntısı **≤2 cümle** (Standing #26); video/ses kalıcı saklanmaz (Whisper mp3 işlenince silinir; ses >7 gün tamponda tutulmaz).

## 7) Olay alarmı
Yerel kapsam (Beykoz/Kartal/Rize-Derepazarı) + olay anahtarı (başlıkta ya da altyazıda ≥3) → `02_CC_STATE/sosyal/olay_alarmi_sosyal_son24.json` (Basın biçimi: `olaylar[]`, `ek[]`). Birleştirme Basın/Vezir'de; Sosyal Basın'ın dosyasına yazmaz.

## 8) Bilinen sınırlar (kanona yazılacak dürüstlük)
- yt-dlp **2025.10.14 = Python 3.9 için son sürüm**; sonrası Python ≥3.10 ister → YouTube değişikliklerine karşı hat donmuş; yorum çekimi (web istemcisi) çalışmıyor.
- IG/X/Facebook: **kazıma yok**; resmî hesap LİSTESİ var (`yerel_sosyal_hesap_listesi.json`), içerik okunmaz.
- Takip ≠ kapsam: günlük hasat her kanalın yalnız **son 5 videosuna** bakar; geçmiş arşiv (ör. 32. Gün 1.212 video) Kitap/derinlik işleriyle ayrıca indirilir.

*CC-Sosyal · 2026-10-17 · taslak — kanon dizinine koyma ve sürümleme Vezir'in*
