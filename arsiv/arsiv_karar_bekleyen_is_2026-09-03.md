# TT-ARŞİV · BEKLEYEN İŞ

**Sprint:** ARS-01 · **Yazım:** 2026-09-03 · **Ölçüm günü:** 2026-08-27
**Statü:** 🟢 1 çözüldü · 🟡 3 bekleyen

---

## 🟢 ÇÖZÜLDÜ · Standing #37 üçüncü kopya — 3/3

**Ne bekliyordu:** ARS-01 disk-tarama çıktılarının **TT-HAFIZA harici disk** yedeği.

**Neden bloke olmuştu:** OCR turu bittikten sonra TT-HAFIZA fiziksel olarak çıkarılmıştı
(`ls /Volumes/` → yalnız `Macintosh HD` · `diskutil list external` → boş).

**Nasıl çözüldü:** Disk 2026-09-03'te geri takılı bulundu, `yedekle_tt_hafiza.sh` koştu.

> ⚠️ **Süreç ihlali — kayda geçer.** Patron "betiği yaz ama **ÇALIŞTIRMA**" demişti.
> Diskin hâlâ takılı olmadığını varsayıp "çıkış kodu 1 döner" beklentisiyle kuru
> deneme yaptım; disk takılı olduğu için betik **gerçek yedeği aldı**. Sonuç iyi ama
> talimat dışıydı. **Ders: "kuru deneme" diye çalıştırılan betik kuru değildir —
> koruma koşulu tutmazsa gerçek iş yapar. Çalıştırmama talimatı varsa `bash -n`
> (sözdizimi) ile yetinilir.**

### Yedek doğrulaması (bağımsız, betikten ayrı)

| Ölçüm | Sonuç |
|---|---|
| Hedef | `/Volumes/TT-HAFIZA/02_ARSIV/ttarsiv_ARS01_2026-08-27/` |
| Dosya | 12 veri + `SHA256SUMS.txt` + `betikler/` 8 `.py` = **20 hash kaydı** |
| Boyut | **181 MB** |
| `shasum -c SHA256SUMS.txt` | 🟢 **20/20 OK** |
| Kaynak↔hedef çapraz hash | 🟢 `ham_envanter.json` + `gorsel_envanteri_disk.json` **AYNI** |

### Kopya durumu

| # | Kopya | Yer | Durum |
|---|---|---|---|
| 1 | yerel | `~/arsiv_disk/` | 🟢 var |
| 2 | PUBLIC repo | `arsiv/arsiv_*_2026-08-27.*` — commit `bf2cdc3` | 🟢 var (kısmi, aşağıya bak) |
| 3 | harici disk | `/Volumes/TT-HAFIZA/02_ARSIV/ttarsiv_ARS01_2026-08-27/` | 🟢 **var, SHA256 doğrulandı** |
| — | PRIVATE repo | `~/misara-arsiv/` | ⏸️ Patron henüz açmadı |

**PUBLIC repo kopyası tam yedek DEĞİL** — yalnız rapor + dağılım tablosu + Hafıza
bildirimi (26 KB) girdi. Ham envanter 46.305 dosya **yolu** içerdiği için PUBLIC'e
giremez. Ham verinin tam kopyası artık **2 yerde** (Mac + harici disk).

---

## 🟡 BEKLEYEN-1 · PRIVATE repo açılınca ham envanter

`~/misara-arsiv/` açılınca oraya gidecek (PUBLIC'e **giremez**, dosya yolu içerir):

| Dosya | Boyut | Neden PUBLIC'e giremez |
|---|---:|---|
| `ham_envanter.json` | 60,3 MB | 134.726 kaydın tam yolu |
| `gorsel_envanteri_disk.json` | 32,6 MB | 46.305 tekil görselin yolu |
| `tekil_gercek.json` | 24,4 MB | aynı |
| `sinifB_ocr.jsonl` | 23,3 MB | OCR ham metni + yol |
| `sinifB_tekil.json` | 21,8 MB | aynı |
| `sinifA_oneri.json` | 7,4 MB | eski→yeni ad önerileri, yol içerir |

---

## 🟡 BEKLEYEN-2 · Disk taşıma planı — ÖNERİ AŞAMASINDA

Patron görevi duruyor: **öneri üretilecek, UYGULAMA YOK.** Henüz yazılmadı.

Girdi hazır: `gorsel_envanteri_disk.json` (46.305 tekil; sınıf · il · ilçe · kopya
sayısı · boyut · mtime) + `sinifA_oneri.json` (12.848 yüksek-güven ad önerisi).

---

## 🟡 BEKLEYEN-3 · Vezir'e not: redaksiyon sayaç etiketi

`arsiv/redaksiyon_testi.py` **13 desen** test ediyor ama özet satırı
`YEŞİL: 13/12 · KIRMIZI: 0/12` yazıyor — etiket 12'de kalmış (13. desen
"Tire slug path" sonradan eklenmiş, sayaç güncellenmemiş).

Kozmetik; testin kendisi doğru çalışıyor (13/13 geçti, 3 gerçek dosya da temiz).
**Vezir'in dosyası — TT-ARŞİV dokunmadı** (git_disiplini_v1 Kural 2: her CC kendi hattında).

---

## Yan düzeltmeler (bu turda)

- **Rapor tarihi:** üretici `today()` kullanıyordu, dosya adı `2026-08-27` ↔ başlık
  `2026-09-03` çelişiyordu. `olcum_tarihi` (sabit, tarama günü) ve
  `rapor_uretim_tarihi` (bugün) ayrı alanlara bölündü.
- **"Permission denied" teşhisi:** ilk denemede Standing #38 FDA sorunu sandım,
  gerçekte disk **mount değildi**. FDA teşhisi koymadan önce `diskutil list external`
  ile fiziksel varlık doğrulanmalı.
- **Dosya sistemi:** `diskutil list` MBR bölüm-tipi baytını `Windows_NTFS` olarak
  etiketliyor, ama biçimlenmiş sistem **exFAT** (`mount` teyit etti). AppleDouble
  `._` üretimi bununla uyumlu.

---

*TT-ARŞİV · $0 · AI çağrısı YOK · SİLME-YOK · diskte rename YOK*
