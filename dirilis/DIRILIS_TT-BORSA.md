# DİRİLİŞ · TT-BORSA

**Tarih:** 2026-09-25
**Kanal:** Vezir · DO-01 Öncelik A · $0
**Amaç:** TT-Borsa yeniden açıldığında ilk 5 dakikada tam bağlam alsın.
**Bağlam:** Cloud çapraz-teyit (25 Eyl) TT-Borsa 1. Kısım'ı buldu; sabah sinyal fazı açılıyor.

---

## 1. KİMLİK

- **CC adı:** CC-Borsa (TT-Borsa)
- **Rol:** Finansal-seri toplayıcı (Standing #37 kanonik) + sabah alım sinyali üretici (yeni faz)
- **Sahip veri kaynakları:** TCMB EVDS · KAP (611 firma) · yfinance
- **Anahtar bulguları besleyen CC:** CC-Finans (F-serisi okur), CC-Signals (SIG12 vaat-defteri)
- **Statü:** AKTİF (bir önceki durumdan uyandı 2026-09-25 · Cloud teyit)

---

## 2. OKU LİSTESİ (3-5 dosya tam yol)

Yeni oturum açıldığında bu 5 dosyayı sırayla oku:

1. **`/Users/GAC-A/tradia-beykoz/kurulus/KURULUS_CC-Borsa.md`** — CC kimlik + 8 zorunlu başlık
2. **`/Users/GAC-A/.claude/projects/-Users-GAC-A/memory/project_cc_borsa.md`** — Memory tek-satır özet (BORSA master KAP cross-source)
3. **`/Users/GAC-A/tradia_konusmalar/02_CC_STATE/sorgu_01_kurulum_20260728.json`** — SORGU-01 · **116/611 KAP kapsam** durumu, EKGYO/Şişecam ingest'i
4. **`/Users/GAC-A/tradia-beykoz/pano/ozet-w35.json`** — Portföy satırı (Borsa Terminal: sabah sinyal fazı) + Mac-uyku kısıt kaydı
5. **`/Users/GAC-A/tradia-beykoz/kanon/git_disiplini_v1.md`** — Vezir kanonu 5 kural (paralel-CC yasağı, script Kural 5)

---

## 3. SON DURUM + BORÇLAR

### 3.1 · Son bilinen durum (T-Borsa 1 · KA-01 cloud teyit)

- **S46 taslağı** cloud'da izler var — henüz kanona geçirilmemiş
- **Dashboard v2.3** taslağı mevcut — deploy edilmedi
- **KAP kapsam: 116/611 firma** (SORGU-01-EK envanteri)
  - EKGYO (KAP JSONL ingested): 14 kayıt
  - Şişecam tarihsel: 129 kayıt (2015-05 → Paşabahçe/Riva zinciri)
  - Kalan **495 firma** henüz SORGU-01'e girmedi
- **EVDS anahtarı** aktif (`93lLgxqTVB`) — E2 (25 Eyl): Vezir arşivinde artık [REDACTED-APIKEY-EVDS]

### 3.2 · Açık borçlar

| # | Borç | Bekleyen |
|---|---|---|
| 1 | **Sabah alım sinyali GitHub Actions'a taşıma** | 🔴 Öncelik-1 — Mac-uyku cron ölümü |
| 2 | S46 kanona geçir | Vezir kanonu Kural 5 uyumlu commit |
| 3 | Dashboard v2.3 deploy | misara-vezir/vezir/ altında ayrı sayfa mı? |
| 4 | KAP 116 → 611 firma kapsamı | Kalan 495 firma JSONL ingest |
| 5 | Encoding mojibake (SORGU-01-EK'te KAP toplu JSONL sorusu) | Borsa'ya soru — hâlâ açık |
| 6 | TKGM_MANUEL kaynak | T128 bildirimlerinde geçmedi — kanaldan çıkmış olabilir |

### 3.3 · KISIT KAYDI (Cloud teyit 25 Eyl)

> 🔴 **Sabah sinyali Mac-uykudan BAĞIMSIZ olmalı — GitHub Actions kararı ilk gündem.**

Neden: Standing #38 emsali (TT-AI 5-gece-çöküş 08-05 · launchd Python.app FDA gerekliliği). Mac-uyku launchd cron'u öldürür. Sabah alım sinyali günlük çalışacağı için Mac uyanık kalmaya bağlı olamaz. Çözüm: GitHub Actions cron (`workflow_dispatch` + `schedule` her sabah 09:00 TR).

---

## 4. İLK SPRINT ÖNERİSİ (S47)

### 4.1 · Ana iş
**Sabah alım sinyali GitHub Actions cron mimarisi** — Mac-bağımsız günlük çalışma.

### 4.2 · Adımlar

1. **Repo seç:** Yeni CC-Borsa GitHub repo mu (private), yoksa mevcut `tradia-beykoz` içinde `.github/workflows/` mı? → Karar Patron'da.
2. **Workflow yaz:** `sabah_sinyal.yml` · `schedule: cron: '0 6 * * *'` (UTC · 09:00 TR)
3. **Sinyal betiği:** Python · SORGU-01 sqlite üzerinden değil (Mac'te) — cloud'a bir sinyal-hesabı taşınmalı ya da hesap Mac'te + Actions yalnız tetikleyici + rapor push
4. **Çıktı formatı:** `sinyal/YYYY-MM-DD.json` (mahalle-benzeri kart yapısı — hangi hisseler alım fasında)
5. **Bildirim:** GitHub Issues auto-open · veya webhook · veya email — karar Patron'da

### 4.3 · A04 dürüst-not
- **Sinyal-hesabı** SORGU-01 içinde mi yapılacak (Mac'e bağlı) yoksa hafif indikatör Cloud'a taşınacak mı? Bu bir mimari-karar, S47'de netleştirilmeli.
- Actions ücretsiz kotası: **2.000 dakika/ay** private repo · public sınırsız — public repo tercih edilirse KVKK dış-sınır kontrolü (Standing #31)

---

## 5. Vezir Notu

- **Cloud çapraz-teyit 25 Eyl:** TT-Borsa 1 tespit edildi (KA-01'de "YOK"tu)
- **DO-01 ana gövde:** iki diriliş paketinin ilki (bu dosya)
- **Kural 5 (pano_yayinla.sh) rev-list güncellemesi** bir sonraki turda uygulanacak (Patron onaylı)

*Vezir · $0 · Standing #35+#36+#38 · 2026-09-25*
