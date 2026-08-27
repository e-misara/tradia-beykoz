# DEVİR: Görsel Adlandırma → CC-ARŞİV

**Devir tarihi:** 2026-08-27 · **Devreden:** CC-Analiz · **Devralan:** CC-ARŞİV · **Sebep:** Görsel adlandırma arşiv işi, veri analizi değil (Üst Akıl kararı)

---

## 1) MEVCUT DURUM — DOKUNMAYIN

- `arsiv/gorsel_envanteri.json` — 28 görsel için ad·yol·boyut·mtime·MD referans sayısı ✓
- `arsiv/gorsel_adlandirma_onerisi.json` — 28 görsel için kanon adlandırma önerisi (Patron C1-C5 kararları uygulandı) ✓

Bu iki JSON hazır. **CC-ARŞİV üzerlerine yazmadan, girdi olarak kullanabilir.**

## 2) ★ UYARI: RENAME BAŞLATILDI (staged, commit YOK)

**Devir emri gelmeden önce `git mv` çalıştırıldı.** Şu an git working tree'de:
- **28 dosya renamed** (`git mv` başarılı, commit yok)
- **10 MD dosyası referansları güncellendi** (write ile)
- **4 kırık link** kaldı (MD refactor bug'ı — aşağıda)

CC-ARŞİV kararı:
- **Devam:** `git status` → kalan kırık linkleri düzelt → commit
- **Geri al:** `git reset --hard HEAD` → orijinal duruma dön (10 MD refactor da geri gelir çünkü henüz commit yok)

## 3) 4 KIRIK LİNK (refactor bug'ı)

`beykoz_vaka/cc_ttmap_MAP32.md`, `MAP34.md`, `MAP35.md` içindeki 4 referans hedef dosyalar oluşmadığı için (typo veya dizin uyuşmazlığı) kırık:
- `gorseller/tradia/beykoz/harita-arazi/beykoz_harita-arazi_genel_2026-07-27.png` (yol OK ama farklı MD yolla kaydetmiş olabilir)
- `gorseller/tradia/beykoz/karo/beykoz_karo_riva_2026-07-28.png`
- `gorseller/tradia/beykoz/harita/beykoz_harita_kisit-gercek_2026-07-28.png`
- `gorseller/tradia/beykoz/harita/beykoz_harita_konum-gercek_2026-07-28.png`

**Muhtemel sebep:** cc_ttmap_MAP32/34/35 dosyaları TT-MAP tarafında yazılmış, farklı relative yol kullanmış. Refactor sadece tam yolu değiştirdi.

## 4) Kanon Adlandırma (Patron C1-C5 uygulandı)

Şablon: `beykoz_<tur>_<konu-slug>_<YYYY-AA-GG>.png`  
Yer: `gorseller/tradia/beykoz/<tur>/`

Tür envanteri (uygulanmış):
- **karo** — 14 dosya (v1, çoğunluk)
- **karo-v2** — 6 dosya (metin ipucu "revizyon/güncel"; C1 kararı)
- **sunum** — 3
- **isi-haritasi** — 1
- **harita-arazi** — 1
- **harita** — 2 (kisit-gercek + konum-gercek)
- **grafik** — 1

**bey15 açıklaması:** `bey15-torunlar-942-947` (C5 uygulandı)

## 5) CC-ARŞİV'İN BİLMESİ GEREKEN 5 MADDE

1. **`arsiv/gorsel_envanteri.json` + `gorsel_adlandirma_onerisi.json`** girdi — üzerine yazma, oku
2. **Staged git mv WORKING TREE'de** — commit yok, geri alınabilir. Karar CC-ARŞİV'e ait
3. **4 kırık link** düzeltilmeli (TT-MAP MD'lerinde relative yol farkı)
4. **`/tmp/rename_uygulama.json`** detaylı raporum var (plan + git_mv sonuç + refactor listesi + kırık liste). CC-ARŞİV kanoniğe alabilir
5. **`gorseller/MANIFEST.md` + `kanon/gorsel_adlandirma_v1.md` YAZILMADI** — CC-ARŞİV üretmeli (kanon şablonu bu belgede §4)

## Ek

- **Görsel-tam-içerik (Vision) açılmadı** — Adlar zaten bilgilendirici (karo_riva vs), 28 × Vision Read ~420K token — token gerekçesi. CC-ARŞİV yeniden karar verebilir.
- **Repo tarafı bitiş:** 28/28 git mv OK, 10 MD refactor, 4 kırık link kaldı
- **Disk-geneli hasat (SINIF A/B) BAŞLAMADI** — devrin bu bölümü de CC-ARŞİV'e

**Disiplin:** V37 (JSON'lar dokunulmadı) · A04 (uygulama başladı — dürüst not) · SİLME YOK · $0
