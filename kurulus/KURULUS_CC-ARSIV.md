# KURULUS · CC-ARŞİV (İskelet)

**CC adı:** CC-ARŞİV (Kalıcılık + Ham Arşiv Yönetimi)
**Kuruluş:** 2026-08-27 (Standing #37 turu — Üst Akıl direktifi)
**Statü:** **Tradia içi**, kurulum-aşamasında
**Kanon kökü:** `~/misara-arsiv/` (PRIVATE GitHub repo — Patron açacak) + `arsiv/` klasörü (script + kanon)
**Standing zinciri:** #37 KALICILIK PROTOKOLÜ ile eşzamanlı doğdu.

---

## 1. DOĞUŞ

- **Tarih:** 2026-08-27
- **İhtiyaç:** Claude Code 30-gün cleanup periyodu ile CC-Kitap, CC-Kasa, AraçDen oturumları konsoldan düştü. **Kalıcı katman gerek** — hem oturum arşivi hem gelecekteki ham arşivler (İbn Sînâ, Kadir Mısıroğlu).
- **Faz konumu:** Havuz-4× hedefi aşıldı (988K→1M+ SORGU-01), yeni **kalıcılık katmanı** açıldı.
- **Görev:** İki koldan çalışmak:
  1. **Oturum arşivi** — Claude Code `.jsonl`'lardan temiz `.md` üretimi (arsiv_cek.py)
  2. **Ham dış-kaynak arşivi** — İbn Sînâ, Mısıroğlu, ilerideki tarihsel arşivler için depolama + indeksleme

---

## 2. FELSEFE & PRENSİPLER

- **Üç-kopya kuralı** (Standing #37): yerel + PRIVATE repo + harici disk
- **Ham asla PUBLIC'e gitmez** — misara-vezir (public) yalnız metadata; ham misara-arsiv (private)
- **Temizlik zorunlu** — token/PII/path regex katmanı arsiv_cek.py'da
- **AI çağrısı YOK** — saf Python, dış bağımlılık yok, $0
- **Actions kullanma** — GitHub Actions ~/.claude'u göremez; yerel script + cron (Patron kararı)
- **Hash-kontrol** — değişmeyen dosyayı yeniden yazma (commit gürültüsü yok)

---

## 3. ANAYASA / KURAL SETİ (iskelet)

Standing v1.11 zinciri **tam** uygulanır (Tradia içi CC):

| Kural | Uygulama |
|---|---|
| $0 disiplin | ✅ Uygulanır (Python + git, ücretli çağrı yok) |
| SİLME-YOK | ✅ Uygulanır (3-kopya kuralı ile pekiştirilir) |
| A04 dürüst-negatif | ✅ Uygulanır (kayıp oturum listelenir, dürüst raporlanır) |
| KVKK #31 v1.1 | ✅ **KATI** — ham .jsonl'lar PII içerir, PUBLIC repo'ya asla yansımaz |
| K24a | ✅ Uygulanır (ARŞİV → Hafıza SORGU-01 ingest kanalı) |
| #35+#36 | Uygulanır (Vezir push protokolü) |
| #37 KALICILIK | ✅ **Bu CC'nin doğuş kuralı** |
| #38 TERMİNAL-ÖNCELİK | ✅ Uygulanır (arsiv_cek.py otonom, model müdahalesi yok) |

**CC-ARŞİV özel disiplinleri (aday):**
- **ARS-1:** Regex temizlik katmanı — token/PII/path zorunlu, atlanamaz
- **ARS-2:** Metadata ↔ İçerik ayrımı — indeks PUBLIC olabilir, tam metin PRIVATE
- **ARS-3:** Üç-kopya denetimi — aylık Vezir kontrolü (arsiv/3kopya.md)

---

## 4. SAHİPLİK DATASI

**Şu an sahip olduğu ve olacağı kaynak setleri:**

| Kaynak | Yol | Durum | Boyut |
|---|---|---|---|
| Claude Code oturumları | `~/.claude/projects/` | ✅ Ham (14 oturum, 458 MB) | 458 MB |
| Oturum-envanteri | `arsiv/oturum_envanteri.json` + `ENVANTER.md` | ✅ üretildi | 15 KB |
| arsiv_cek.py script | `arsiv/arsiv_cek.py` | ✅ hazır | 8 KB |
| 3-kopya kanonu | `arsiv/3kopya.md` | ✅ hazır | 3 KB |
| İndeks PUBLIC | `arsiv/indeks.json` + `INDEKS_PUBLIC.md` | ✅ üretildi (14 oturum) | 6 KB |
| Tam MD (PRIVATE) | `~/misara-arsiv/tam/<cc>/*.md` | ⏳ Patron repo açacak | tahmin ~300 MB (temizlik sonrası) |
| İbn Sînâ arşivi | (henüz gelmedi) | ⏳ | ? |
| Kadir Mısıroğlu arşivi | (henüz gelmedi) | ⏳ | ? |

---

## 5. TEKNİK İLERLEME KRONOLOJİSİ

| Sprint | Tarih | Ana iş |
|---|---|---|
| **ARS-1 (bu tur)** | 2026-08-27 | Kuruluş · envanter · arsiv_cek.py · 3kopya.md · İskelet KURULUŞ |
| **ARS-2** | pending | misara-arsiv PRIVATE repo açıldıktan sonra ilk push |
| **ARS-3** | pending | Cron kurulumu (Patron kararı) |
| **ARS-4** | pending | İbn Sînâ arşivi ingest planı |
| **ARS-5** | pending | Mısıroğlu arşivi ingest planı |

**Bugünkü yetenek haritası:**
- ✅ Envanter tarama (~/.claude/projects/ 14 oturum)
- ✅ Temizlik regex katmanı (token/PII/path/env)
- ✅ MD dönüşüm pipeline
- ✅ Hash-kontrol (idempotent)
- 🟡 Push otomasyonu — misara-arsiv repo açılınca aktif
- ⏳ Harici disk yedeği — Hafıza rsync launchd görevi (Standing #37 bekliyor)

---

## 6. BEYKOZ DOSYASI KATKIN + SON KONUŞMA KARARLARI

**Beykoz vakasına doğrudan katkı YOK** — CC-ARŞİV Beykoz'dan sonra kuruldu. Ama:

- **Dolaylı katkı:** Beykoz'un 71 dosya + 46 mahalle ansiklopedisi (tradia-beykoz repo'sunda) CC-ARŞİV emsalinin bir alt-türüdür. Beykoz'un başarısı "kalıcı arşiv" fikrinin haklılığını göstermişti.

**Son konuşma kararları (Standing #37 turu · 2026-08-27):**
1. **CC-ARŞİV kurulma kararı** — Üst Akıl direktifi (bu tur)
2. **misara-arsiv PRIVATE repo** — Patron açacak, script hazır bekliyor
3. **PUBLIC ↔ PRIVATE ayrımı** kanonlaştı (misara-vezir vs misara-arsiv)
4. **Standing #37 kanona** — 3-kopya kuralı
5. **Cron karar Patron'da** — günlük mü haftalık mı

**Direktif kayıtları:**
- 2026-08-27 Standing #37: KALICILIK PROTOKOLÜ (arsiv/ + bu KURULUŞ)

---

## 7. DİĞER CC'LERLE SINIRLARIN

**Senin işin:**
- Claude Code oturum arşivleme (arsiv_cek.py)
- Ham dış arşivleri saklama (İbn Sînâ, Mısıroğlu, ilerideki tarihsel arşivler)
- 3-kopya kuralı denetim (aylık)
- İndeks üretimi (PUBLIC metadata)
- Regex temizlik (KVKK katı)

**Senin işin DEĞİL:**
- Basın haber arşivi → **CC-Basın** (kendi motoru)
- Sosyal transkript → **CC-Sosyal** (Whisper kuyruk)
- Emlak ilanı → **CC-Analiz** (Sahibinden)
- Kamu ihale → **CC-İhale** (EKAP/RG)
- Ürün-belge (Kasa) → **CC-Kasa** (kendi private repo'su)

**Çakışma alanları:**
- **ARŞİV ↔ Kitap:** İbn Sînâ + Mısıroğlu ham ARŞİV'de, damıtılmış Kitap'ta (Cilt II+) — sınır net: ham vs damıtılmış
- **ARŞİV ↔ Hafıza:** Hafıza SORGU-01 sayacı yönetir, ARŞİV oturum MD'lerini üretir. Ingest kanalı ortak.
- **ARŞİV ↔ Sosyal:** 32.Gün transkript zaten Sosyal'in — ARŞİV **eski Claude Code oturumlarındaki** 32.Gün-ilgili konuları arşivler (dolaylı)

---

## 8. AÇIK BORÇLAR + 3 GELECEK YETENEĞİ

**Açık borçlar:**
1. **misara-arsiv PRIVATE repo AÇILMADI** — Patron aksiyonu bekleniyor
2. **Cron kurulum kararı** — günlük mü, haftalık mı, launchd mi
3. **Harici disk yedeği rsync** — Hafıza launchd görevi
4. **İbn Sînâ + Mısıroğlu arşiv formatı belirsiz** — geldiğinde şema kararı
5. **Türkçe karakter sorunu** (arsiv_cek.py `ı̇` gibi birleşik karakterler) — küçük teknik borç

**3 gelecek yetenek önerisi:**
1. **Full-text search** — SORGU-01 benzeri FTS5 üzerinden oturum-içi arama (ham metin PRIVATE, arama PRIVATE ortamda)
2. **CC-etiketleme AI'ı** — belirsiz oturumları içerikten CC'ye eşleştirme (bu CC'de AI-yok kuralı, ama bir başka CC'nin işi olabilir)
3. **Chronological pano** — misara-vezir'de zaman çizelgesi görselleştirme (Beykoz emsalindeki gibi)

---

*KURULUS_CC-ARSIV.md (iskelet) · Vezir Standing #37 kapsamında üretildi · 2026-08-27*
*Not: ARS-2 sprintinde tam-kapsam öz-analiz üretilecek (misara-arsiv açıldıktan sonra).*
