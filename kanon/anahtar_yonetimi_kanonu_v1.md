# ANAHTAR YÖNETİMİ KANONU v1

**Statü:** 🟢 KANON · Patron direktifi 2026-10-14 · Emsal: Vaka #07 (EVDS anahtarı, ikinci tekrar)
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

## Bugünkü uyumsuzluklar (2026-10-14 ölçümü)

| Yer | Durum | Sahibi | İş |
|---|---|---|---|
| `~/finans/.env` (`EVDS_API_KEY`) | ❌ ikinci kopya (değer aynı) | CC-Finans | `landgold-agents/.env`'den oku, dosyayı kaldır |
| `~/.claude/settings.json` | ❌ 9 izin satırında `key=` düz metin | Patron | satırları anahtarsız desenle değiştir |
| `~/.claude/settings.local.json` | ❌ 1 izin satırında `key=` düz metin | Patron | aynı |
| `~/ttmap/.env`, `~/ttmap/.env.tmp` | ⚠ Tradia içinde ikinci .env (içerik okunmadı) | CC-TT-MAP | içerik `landgold-agents/.env`'e taşınsın, `.tmp` kaldırılsın |
| Public git geçmişi (misara-vezir 11 Haz'dan, tradia-beykoz 25 Eyl'den) | ❌ anahtar geçmişte | Patron | **anahtar değişimi** (TCMB) + geçmiş temizliği kararı |

*Vezir · 2026-10-14*
