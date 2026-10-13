# Hafıza betik imzaları — 2026-10-13

`~/tradia_sorgu/` git deposu değil; bu dosya oradaki betiklerin bu commit'teki sürümünü SHA-256 ile bağlar.

| Betik | SHA-256 (ilk 16) | Değişiklik |
|---|---|---|
| `duzen_koordinator.sh` | `20467fdb7d5a61f0` | atomik mkdir kilidi (flock borcu) |
| `dm02_3gun_dongu.sh` | `d19c76f3037987f7` | TR saati UTC'den türetme · koşu geçmişi (son 5) · YARIM KALDI kaydı |
| `orumcek_derle.py` | `8f08b2f4b77ad152` | v2 — yalnız motor/KUYRUK.json'dan türetir |
| `cografya_uret.py` | `3a0b66633a9b6494` | vaka katmanı (data/vakalar.json) · eksik listesi birleştirici DOSYA.md'den |
| `idari_ad_normalize.py` | `9fa44e73c27f42b4` | N1 merkez çift-etiket kuralı |
| `tr_kanonik.py` | `6277e73c2a50fdce` | tr_title (Cevi̇zli̇ düzeltmesi) |

Veri kaynağı: `~/tradia_sorgu/data/vakalar.json` sha `4082c8e396eda473`

launchd: `com.tradia.hafiza.orumcek` (60 sn · Python.app doğrudan, Standing #38)
