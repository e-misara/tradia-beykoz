# DİRİLİŞ · TT-HAFIZA

**Tarih:** 2026-09-25
**Kanal:** Vezir · DO-01 Öncelik A · $0
**Amaç:** TT-Hafıza yeniden açıldığında ilk 5 dakikada tam bağlam alsın.
**Bağlam:** DM-02 3-günlük döngü kanıtlandı (09-23→09-24, exit 0, gecikme 0).

---

## 1. KİMLİK

- **CC adı:** CC-Hafıza (TT-Hafıza)
- **Rol:** Kurum belleği + DURUM.json üretici + kanon bekçisi + SORGU-01 ingest orkestratörü
- **Kanon kökü:** `/Users/GAC-A/tradia_konusmalar/00_KURUM_HAFIZASI/` + `/Users/GAC-A/tradia_sorgu/`
- **Statü:** AKTİF · DM-02 döngü sağlıklı (3-haftalık sınav geçti)

---

## 2. OKU LİSTESİ (5 dosya tam yol)

Yeni oturum açıldığında bu 5 dosyayı sırayla oku:

1. **`/Users/GAC-A/.claude/projects/-Users-GAC-A/memory/MEMORY.md`** — Tek-satır pointer index (150+ entry)
2. **`/Users/GAC-A/tradia_konusmalar/00_KURUM_HAFIZASI/standing_38_aday_launchd_python_framework.md`** — Standing #38 ✅ ONAYLI (v1.14 · 32 kural)
3. **`/Users/GAC-A/tradia_konusmalar/00_KURUM_HAFIZASI/standing_37_aday_toplayici_kullanici.md`** — Standing #37 ✅ ONAYLI (toplayıcı≠kullanıcı · 31 kural)
4. **`/Users/GAC-A/tradia-beykoz/misara-app/veri/DURUM.json`** — Kesit-anı sistem durumu (Hafıza ürünü · DM-02 çıktı)
5. **`/Users/GAC-A/tradia-beykoz/kurulus/KURULUS_HAFIZA.md`** — 8 zorunlu başlık + FDA envanteri §4.1

---

## 3. SON DURUM + BORÇLAR

### 3.1 · Sistem sağlığı (DURUM.json 2026-09-24 son_bitti_utc)

| Metrik | Değer | Bayrak |
|---|---|---|
| Mac disk dolu | **%88** | 🔴 kritik (retro-taşıma bekliyor) |
| TT-HAFIZA mount | 🟢 mount | OK |
| launchd tradia label | **34** | 21→34 (+13 servis) |
| SORGU-01 DB boyut | 4.03 GB | sha `dd6a96b6f99d742b` |
| Havuz ulusal ham | **1.424.676** | 165K → 1.42M (8.6×) |
| DM-02 son koşu | **09-24 00:07:33Z** | exit=0 · gecikme_gun=0 · 🟢 kanıtlandı |
| Sonraki DM-02 | 09-27 00:07:33Z | 2 gün |

### 3.2 · M2 Proje Portföyü — 10 kart (bekleyen)

**Vezir cloud çapraz-teyit 25 Eyl tespiti:** Portföyde 10 farklı proje/konu-hattı takip edilmeli. TT-Hafıza'nın DURUM.json'a **proje portföyü bloğu** eklemesi bekleniyor. Şu an pano tarafında var (`pano/ozet-w35.json .portfoy_katmani.projeler` 10 satır), Hafıza tarafında yok.

**10 kart (kaynak: pano/ozet-w35.json):**
1. Tradia · 🟢 AKTİF
2. AraçDen · 🟡 BEKLEMEDE (Cloud teyit sonrası "OLU" → "BEKLEMEDE" düzeltildi)
3. KASA · 🟡 BEKLEMEDE
4. Tradia Kütüphanesi / Kitap · 🟡 BEKLEMEDE (K8 → K9 tetiği bekliyor)
5. Misara Hospitality · ❔ IZ_YOK_REPO_DISI (repo arşivinde yok)
6. **Borsa Terminal · 🟢 AKTİF (yeni · sabah sinyal fazı)** ← Cloud teyit 25 Eyl
7. Glass Chain · ❔ IZ_YOK_REPO_DISI
8. Kök Çubuğu · ❔ IZ_YOK_REPO_DISI
9. Aldemir · 🟡 (Cloud teyit sonrası iz bulundu, Patron ayrı işi)
10. Vezir (kendisi) · 🟢 AKTİF

### 3.3 · Açık borçlar

| # | Borç | Aciliyet |
|---|---|---|
| 1 | 🔴 **`DURUM.json .dongu_saglik.beklenen_sonraki_kosu_tr` etiketi bayat** | Öncelik-1 · aşağıda §3.4 detay |
| 2 | 🔴 **Mac disk %88** — retro-taşıma SHA-verify+sil | Öncelik-1 |
| 3 | 🔴 **cleanupPeriodDays** ayarı BUGÜN (27 Ağu oturumları 26 Eyl'de ölüyor · 1 gün) | Öncelik-1 · Patron |
| 4 | **M2 proje portföyü** DURUM.json'a taşıma (Hafıza üretimi) | Öncelik-2 |
| 5 | **launchd envanter kararları** (34 servis, FDA hangileri, hangi Python.app) | Öncelik-2 |
| 6 | S43 raporu (46 gün gecikti · 9 kanonizasyon + 2 PROMOTE + Standing #17 revizyonu) | Öncelik-2 |
| 7 | Compact doğrulama v2 (KN-3 hâlâ AÇIK · 22K→4.2K kayıpsız iddiası doğrulanamadı) | Öncelik-3 |

### 3.4 · beklenen_sonraki_kosu_tr etiket borcu (kritik detay)

**Sorun:** `DURUM.json .dongu_saglik.beklenen_sonraki_kosu_tr` alanı **"2026-09-04 20:11 +03"** gösteriyor. Bayat.

**Doğrusu:** UTC alanı doğru — `beklenen_sonraki_kosu_utc: "2026-09-27T00:07:33Z"`. TR karşılığı **"2026-09-27 03:07 +03"** olmalı.

**Kök-neden:** Hafıza üretim scripti TR-etiketi UTC'den türetmiyor, muhtemelen sabit string. 

**Aksiyon:** Hafıza scripti güncellemesi:
```python
from datetime import datetime, timezone, timedelta
utc = datetime.fromisoformat(beklenen_utc.replace("Z", "+00:00"))
tr = utc.astimezone(timezone(timedelta(hours=3)))
beklenen_tr = tr.strftime("%Y-%m-%d %H:%M +03")
```

### 3.5 · launchd envanter kararları (Öncelik-2)

**34 servis · durumu belirsiz (Hafıza denetimi bekliyor):**
- **Standing #38 uyum:** Kaç tanesi `/usr/bin/python3` SHIM kullanıyor (yasak)? Kaç tanesi framework tam-yolunda?
- **FDA envanteri (KURULUS_HAFIZA §4.1):** 8 binary listede — güncel mi?
- **Mac-uyku senaryosu:** launchd cron'ların hangileri Mac uykuya girince ölür (Standing #38 emsali)?

**Bir sonraki DM turunda üretilecek:** `launchd_envanteri_v2_20260927.json` — 34 servis × durum × FDA × uyku-güvenli.

---

## 4. İLK SPRINT ÖNERİSİ (S52)

### 4.1 · Ana iş
**M2 proje portföyü bloğu DURUM.json'a taşıma + beklenen_sonraki_kosu_tr düzeltmesi.**

### 4.2 · Adımlar

1. **`beklenen_sonraki_kosu_tr` düzeltme** — 5 satır Python, tek commit (Vezir kanonu Kural 5 uygun)
2. **M2 proje portföyü** — `pano/ozet-w35.json .portfoy_katmani.projeler`'ı DURUM.json'a mirror et
3. **launchd envanter v2** — 34 servis tam-liste + FDA + uyku-güvenli-mi (Standing #38 checklist)
4. **DM-02 dokumentasyonu** — 3-günlük döngü kanıtı canlı örnek olarak KURULUS_HAFIZA'ya ek

### 4.3 · Sıra
1 → 2 → 3 → 4 (küçük iş önce, script düzeltmesi ilk).

---

## 5. Vezir Notu

- **DM-02 3-haftalık sınav GEÇTİ 2026-09-25** (pano.dongu_kaniti bloğu tanıtım).
- **Cloud çapraz-teyit** sonrası portföy güncel (10 kart, 3 IZ_YOK_REPO_DISI).
- **Vezir kanonu Kural 1** disciplin: bu paket sadece Hafıza için okuma-referansı, dış-CC dosyalarına dokunulmadı.

*Vezir · $0 · Standing #35+#36+#37+#38 · 2026-09-25*
