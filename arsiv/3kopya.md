# ÜÇ KOPYA KURALI (Standing #37 Kanonu)

**Tarih:** 2026-08-27
**Kaynak:** Üst Akıl direktifi · Standing #37 KALICILIK PROTOKOLÜ
**Sahip:** Vezir (kural bekçisi)

---

## Kural

> **Her oturum üç yerde durur.** Biri düşerse ikisi ayakta.

```
┌─────────────────────────┐  ┌─────────────────────────┐  ┌─────────────────────────┐
│ (1) YEREL               │  │ (2) misara-arsiv        │  │ (3) HARİCİ DİSK YEDEĞİ  │
│ ~/.claude/projects/     │  │ PRIVATE GitHub repo     │  │ TT-HAFIZA/01_YEDEK/     │
│ .jsonl (ham)            │  │ tam/ (temiz .md)        │  │ arsiv_yedek/            │
│ ⚠ 30 gün cleanup        │  │ + indeks.json           │  │ (aylık rsync)           │
└─────────────────────────┘  └─────────────────────────┘  └─────────────────────────┘
```

## Sorumluluk Zinciri

| Kopya | Kim üretir | Kim korur | Ömür |
|---|---|---|---|
| **(1) YEREL** | Claude Code kendiliğinden | Patron Mac + settings | 30 gün (cleanup varsayılan) |
| **(2) PRIVATE REPO** | `arsiv/arsiv_cek.py` script | Vezir (elle/cron) | Süresiz (git history) |
| **(3) HARİCİ DİSK** | rsync launchd (Hafıza) | Hafıza (aylık) | Süresiz (dış disk) |

## Düşme Senaryoları

- **(1) düşerse** (30 gün dolar → cleanup) → (2) PRIVATE repo'dan geri getirilir; ham `.jsonl` yerine temiz `.md` üzerinden okuma
- **(2) düşerse** (GitHub silme, hesap kaybı) → (3) harici diskten yeniden push
- **(3) düşerse** (disk bozulması) → (2) PRIVATE repo'dan yeniden rsync

## Uygulama

1. **arsiv_cek.py günlük çalışsın** (Patron cron eklerse; şimdilik elle)
2. **rsync launchd — aylık**: `rsync -a ~/misara-arsiv/ /Volumes/TT-HAFIZA/01_YEDEK/arsiv_yedek/`
3. **INDEX kontrolü**: her ay Vezir 3 kopyanın oturum-sayılarını karşılaştırır; sapma → alarm

## SİLME-YOK Uyumu

Bu kural SİLME-YOK Standing'i (kanon) ile birlikte okunur:
- **YEREL cleanup** = Claude Code kararı, Patron müdahale edemez (varsayılan davranış)
- **(1) → (2) taşıma** = kayıp değil, aksine kalıcılık kazanımı
- **(1) sonrası silme** = doğal süreç; (2) ve (3) sağ olduğu sürece **kayıp yok**

## Vezir Denetim

Vezir her ayın **1'inde** üç-kopya denetimi yapar:
```bash
# yerel .jsonl sayısı
find ~/.claude/projects -name "*.jsonl" | wc -l
# repo .md sayısı
find ~/misara-arsiv/tam -name "*.md" | wc -l
# harici disk yedeği
find /Volumes/TT-HAFIZA/01_YEDEK/arsiv_yedek -name "*.md" | wc -l
```
İki değer arasında %5+ sapma → alarm dosyası + Vezir raporu.

---

*Bu kanon Standing #37 KALICILIK PROTOKOLÜ'nün parçasıdır.*
