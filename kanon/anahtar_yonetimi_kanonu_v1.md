# ANAHTAR YÖNETİMİ KANONU v1

**Statü:** 🟢 KANON · v1.4 · Patron direktifi 2026-10-14 · Emsal: Vaka #07 (EVDS anahtarı, ikinci tekrar)
**Bağlı:** Standing #37 (redaksiyon), parsel_veri_kanonu_v1 (public sınırı), ham_veri_depolama_kanonu_v1

---

## Kural 1 — Tek dosya

- Tradia'nın **bütün** API anahtarları, token'ları ve parolaları **tek dosyada** durur: `~/landgold-agents/.env`.
- Başka yerde **kopya yasak**: ikinci `.env`, kod içi sabit, JSON/MD içinde düz metin, test fikstürü, redaksiyon deseni.
- `~/.claude/settings.json` ve `settings.local.json` **izin (allow) listesinde anahtar yasak**. İzin satırı anahtarsız desenle yazılır (ör. `Bash(curl https://evds3.tcmb.gov.tr/*)`); anahtar betik içinde `.env`'den okunur.
- Kod anahtarı **değişken adıyla** çağırır, değeri asla yazmaz. Redaksiyon da değeri koddan değil `.env`'den okur (`arsiv/arsiv_cek.py` → `GIZLI_DEGERLER`).

## Kural 2 — Günlük sağlık kontrolü

- Anahtar kullanan **her dış kaynak** için günlük sağlık satırı tutulur: `uç nokta · HTTP kodu · ölçüm anı (UTC) · son taze veri tarihi`.
- Vezir süreklilik ölçüsünde (`motor/SUREKLILIK.json → dis_kaynak_sagligi`) her kaynak için satır vardır.
- Taze veri tarihi beklenen ritmi aşarsa (günlük seri 3 gün, haftalık 10 gün, aylık 40 gün) panoda ve misara-app M4'te **kırmızı kutu** açılır. Kutu, sahibi CC satır kapatana dek kapanmaz.

## Kural 3 — "Ölü / erişilemez" hükmü

- Bir kaynak için **"ölü"**, **"erişilemez"** ya da **"anahtar geçersiz"** hükmü **HTTP kodu + ölçüm tarihi olmadan verilemez**.
- Hüküm, **hipotez tablosu** ile verilir. Asgari satırlar: (a) uç nokta taşındı mı (yönlendirme/ana makine değişti mi), (b) anahtar biçimi değişti mi (header ↔ query), (c) anahtar süresi doldu mu / iptal mi, (d) yerel ağ/DNS, (e) istemci kodu hatası, (f) kaynağın kendisi kapandı mı.
- **Patron'a "yeni anahtar başvurusu yap" yönlendirmesi**, ancak (a)–(e) **kanıtla elendikten** sonra yapılabilir. Test etmeden yönlendirme = Vaka #07 deseni.

## Kural 4 — Raporlarda anahtar

- Rapor, bayrak, kart, tutanak, pano, commit mesajı: anahtar **değeri** yazılmaz, yerine `[REDACTED-APIKEY-<KAYNAK>]` (ör. `[REDACTED-APIKEY-EVDS]`).
- Anahtarı tanımak gerekiyorsa **sha256 ilk 10 hane** yazılır, değer yazılmaz.
- Push kapısı (`scripts/pano_yayinla.sh`): push öncesi fark, `.env`'deki değerlerle **birebir** taranır (değer script'te tutulmaz, ekrana basılmaz); eşleşmede push durur.

## Kayıtlı anahtarlar (yalnız ad · değer yazılmaz)
| Değişken | Kaynak | Sahibi (toplayıcı · Standing #37) | Durum |
|---|---|---|---|
| `TCMB_API_KEY` | TCMB EVDS3 | Borsa | ✅ yeni değer 14 Eki · canlı test 200 |
| `TCMB_API_KEY_ESKI` | TCMB EVDS (iptal edilecek) | — | geçici; TCMB'de iptalden sonra satır silinir |
| `TUIK_API_KEY` | TÜİK veri portalı (veriportali.tuik.gov.tr) | Borsa + Analiz (TÜİK toplayıcıları) | ✅ 14 Eki `.env`'e yazıldı (Patron) · başka kopya taraması yapıldı · redaksiyon `[REDACTED-APIKEY-TUIK]` + kapı tanıyor (test) · **sağlık testi YAPILMADI**: doğru veri uç noktasını toplayıcı CC belirler, ilk kullanımda kural 2 + 3 |

## Kural 5 — EVDS: tek istemci, tek sağlık kontrolü (v1.1 · Patron kararı 2026-10-14)

- **Tek istemci:** `~/landgold-agents/evds_ortak.py` (sahibi CC-Borsa). EVDS çağıran **her** kod bunu içe aktarır; kendi HTTP çağrısını yazmaz.
  - Bugün dosya Borsa'nın dizininde: `~/Desktop/tradia/cc_borsa/evds_hasat/evds_ortak.py`. Kanonik yola taşınması Borsa borcu.
- **Tek sağlık kontrolü:** CC-Analiz'in 08:00 görevi (`com.tradia.evds.saglik`) → `02_CC_STATE/evds_saglik.json`. Durum değerleri: `SAGLAM` / `KISMEN` / `KIRIK` + tarih + yol.
- **Borsa:** sağlık adımı **pipeline içinde** kalır; ayrı launchd görevi (`com.tradia.ccborsa.evds_gunluk`) **kaldırılır**.
- **Okuyucu:** Hafıza taraması `evds_saglik.json`'un `durum` alanını okur ve M4'te gösterir. 14 Eki teyidi: **OKUMUYOR** (aşağıda).
- **Vezir:** ikinci sağlık kontrolü tutmaz. Kendi veri-yolu çağrısı yalnız **B11 koruma testidir** ("resmî durum gerçeği yansıtıyor mu").
- **Sağlık kontrolü içerik imzası ister:** HTTP 200 yetmez. Gerçek seri satırı (`items` > 0) dönmeli. Geçerli anahtarla bile hep 400 dönen bir yolu ölçen kontrol, veri akarken "KISMEN" der. 15:42Z sürümünde olan buydu.

## Kural 6 — TÜİK SDMX: tek istemci, anahtar .env, token bellekte (v1.4 · Patron 2026-10-14)

- **Tek istemci:** `~/landgold-agents/tuik_ortak.py` (yazan CC-Pazarlama · 14 Eki 19:21). TÜİK SDMX REST'i (`nsiws.tuik.gov.tr/rest`) çağıran **her** kod bunu içe aktarır.
- **Anahtar:** yalnız `~/landgold-agents/.env` → `TUIK_API_KEY`. Başka dosya ya da ortam değişkeni okunmaz.
- **Token:** OpenID access_token **yalnız bellekte** (modül değişkeni). Diske, loga, çıktıya, hata mesajına yazılmaz. İstemci hiçbir şey basmaz.
- **KIRIK kuralı (istemci belgesinden):** `AUTH_RED` · token alınamadı · koşum toplam satırı 0 · ardışık 5 `GECICI_YOK`.
- **Günlük sağlık:** Vezir süreklilik ölçüsü (`dis_kaynak_sagligi` → "TÜİK SDMX") günde **1** `/dataflow/TR/all/latest` çağrısı yapar. SAĞLAM = **HTTP 200 + dataflow sayısı > 0**.
  - Sayım önek bağımsızdır. B11 testi: `str:` önekli ilk desen 200 dönen canlı kaynakta 0 sayıyordu; gerçek önek `structure:` · 14 Eki **508 dataflow**.
- **Dataflow envanteri:** Pazarlama `docs/tuik_dataflow_envanteri_v1.tsv` → gelince kaynak evrenine kaydedilir; Finans/Sinyal/Aİ/İhale'ye kök eşleşmesi sorulur.

## Uyumsuzluklar (v1.1 · 2026-10-14 akşam ölçümü)

| Yer | Durum | Sahibi | Kapanış kanıtı |
|---|---|---|---|
| `~/.claude/settings.json` | ✅ **TEMİZ** (9 satır → 0 · Analiz 18:41) | — | kapandı (grep 0) |
| `~/.claude/settings.local.json` | ❌ **1 satır, ESKİ anahtar** (dosya Temmuz'dan beri dokunulmamış) | Patron | grep 0 |
| `~/finans/.env` (`EVDS_API_KEY`) | ❌ ESKİ anahtar kopyası | CC-Finans | dosya/satır silindi + Finans `landgold-agents/.env`'den okuyor |
| `.evds_key` (Borsa'nın; `~/tt_pazarlama/bolge/` altında görüldü) | ✅ **KAPANDI** 14 Eki akşam: dosya diskte yok · Pazarlama kodu `.env` + `evds_ortak` okuyor · ⚠ silmeyi sahibi değil Pazarlama yaptı → `cc_sinir_kanonu_v1` uyumsuzluğu | — | dosya yok (find) |
| `~/ttmap/.env`, `.env.tmp` | ⚠ Tradia içinde ikinci .env (içerik okunmadı) | CC-TT-MAP | içerik tek dosyaya |
| EVDS istemcileri | ❌ **4 CC'de 8 dosya** doğrudan EVDS çağırıyor: landgold-agents (tcmb_scraper, tuik_scraper, tradia_aylik_makro_cek) · Pazarlama (bolge_isle_pazarlama, evds_il_toplam_satis) · Finans (evds_hasat_f4) · Borsa (evds_ortak + 5 betik) | Borsa + ilgili CC | hepsi `evds_ortak` içe aktarır |
| Borsa ayrı sağlık launchd'si | ❌ `com.tradia.ccborsa.evds_gunluk` hâlâ yüklü | CC-Borsa | plist kaldırıldı |
| Hafıza → `evds_saglik.json` | ❌ **okunmuyor**: `hafiza_tarama.sh` yalnız `hafiza_bildirim_*` dosyalarına bakıyor; `orumcek_derle.py` dosyayı yalnız "son 24 saatte değişen" listesine koyuyor, `durum` alanını okumuyor | CC-Hafıza | betikte `evds_saglik.json` → `durum` okuma satırı |
| Public git geçmişi (misara-vezir 11 Haz'dan, tradia-beykoz 25 Eyl'den) | ❌ ESKİ anahtar geçmişte | Patron | eski anahtar iptali (GitHub Support dönüşüyle birlikte) |

## Değişiklik kaydı
- **v1 (14 Eki öğle):** Kural 1–4.
- **v1.4 (14 Eki gece):** Kural 6 (TÜİK tek istemci + token bellekte + günlük dataflow sağlığı).
- **v1.3 (14 Eki gece):** `TUIK_API_KEY` `.env`'de.
- **v1.2 (14 Eki gece):** `TUIK_API_KEY` kaydı · `.evds_key` kapandı (sınır ihlali cc_sinir_kanonu'nda).
- **v1.1 (14 Eki akşam):** Kural 5 (EVDS tek istemci + tek sağlık) · uyumsuzluk tablosu yeniden ölçüldü (settings.json kapandı; Pazarlama `.evds_key` eklendi; istemci envanteri 3 → 8 dosya / 4 CC; Hafıza okuma teyidi: HAYIR).

*Vezir · 2026-10-14*
