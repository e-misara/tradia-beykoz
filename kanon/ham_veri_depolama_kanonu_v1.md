# HAM VERİ DEPOLAMA KANONU v1

**Statü:** 🟢 KANON · Patron kararı 2026-10-14 (Vezir kaydı)
**Kapattığı çelişki:** KOS-6 ↔ v3-uygula (2026-08-07'den beri açıktı). KOS-6 "Mac-birincil / harici-ayna", v3-uygula kuralı (2026-07-31) "TT-HAFIZA-birincil" diyordu. Basın kartı (14 Eki) bu çelişkiyi "Patron kararı bekliyor" diye işaretlemişti.

---

## Kural

| Veri sınıfı | Birincil | Ayna / ikincil | Gerekçe |
|---|---|---|---|
| **Küçük veri** — kod, durum, DB, JSON çıktı, kart, özet, CC'nin kendi ürünü | **Mac** | TT-HAFIZA disk (ayna) | Disk takılı değilken iş durmasın |
| **Büyük ham — basın HTML ham** | **TT-HAFIZA disk** | — (NAS gelince **NAS** birincil) | Mac'e sığmaz (Basın kartı: Mac'te 18 GB boş, İstanbul ham tek başına ~29 GB) |
| **Büyük ham — uydu** (Sentinel/DEM/radar ham karoları) | **TT-HAFIZA disk** | — (NAS gelince **NAS** birincil) | Aynı (uydu-arşiv protokolü `TT-HAFIZA/uydu_arsiv/`) |

- **Sınır sayısı yok:** Patron "küçük/büyük" için bayt eşiği vermedi. Büyük ham **liste-bazlı**: yalnız basın HTML hamı + uydu hamı. Listeye ekleme Patron kararıdır; CC kendi verisini "büyük" ilan edip disk-birincil yapamaz.
- **Ayna best-effort'tur:** Disk yokken küçük-veri işi **çalışmaya devam eder**, yalnız ayna adımı atlanır ("[AYNA] TT-HAFIZA mount yok — Mac-local birincil sağlam, ayna atlandı" — Pazarlama V3.1 deseni = referans uygulama).
- **Büyük-ham işi disk yokken:** çalışmaz ama **"üretim yok"** olarak kaydedilir (süreklilik ölçüsünde yeşil sayılmaz · Patron 14 Eki). Mümkünse Mac'te küçük tampon tutup disk dönünce akıtır (Sosyal kartı seçenek A).
- **NAS geldiğinde:** Büyük ham NAS'a taşınır, TT-HAFIZA disk ikinci kopya olur (Standing #37 üç-kopya).

## CC'ler için uygulama listesi (14 Eki kartlarından)

| CC | Bugün | Kanona göre | İş |
|---|---|---|---|
| Pazarlama | Mac-birincil + disk ayna | ✅ uyumlu | — |
| Finans | Mac-birincil + disk ayna | ✅ uyumlu | — |
| TT-AI | Mac-local çekirdek, disk ham-ayna | ✅ uyumlu | — |
| Kitap | tam Mac-local | ✅ uyumlu | — |
| Tic | RG haftalık STAGING'e (disk) yazıyor | ❌ küçük veri disk-birincil | RG artımlı çıktı Mac'e (kart zaten öneriyor) |
| İhale | günlük toplama yalnız TT-HAFIZA'ya | ❌ küçük veri disk-birincil | lokal-birincil yazım (~100 MB/yıl, kart önerisi) |
| Sosyal | hasat + Whisper disk yokken durur | ❌ altyazı hamı küçük veri | Mac tampon + disk ayna (kart seçenek A) |
| Hafıza | builder basın-ingest STAGING'den | ⚠ basın ham = büyük (disk doğru); ama ingest disk yokken durur | kabul — büyük-ham bağımlılığı |
| Basın | ham disk-birincil | ✅ büyük ham | NAS bekleniyor |
| TT-MAP | ham arşiv diske kodlu | ✅ uydu = büyük ham | e-Plan delta (küçük) Mac'e |
| Arşiv | Kopya-2 diske bağlı | ✅ (kopya rolü) | NAS = kalıcı ikinci kopya |

*Vezir · Standing #37 + KOS v1.0 + uydu-arşiv protokolü · 2026-10-14*
