# KANON UYGULAMA KURALLARI v1 — kural kodda yaşar

**Statü:** 🟢 KANON · Patron 2026-10-21 kararları (Vaka #12/#15/#16 → U-10/U-14/U-11 + iCloud bekçisi) · Vezir kaydı 2026-10-21 17:53
**Bağlı:** Anayasa B11 (koruma testi) · B12 (liste tohumdur) · ham_veri_depolama_kanonu · makine_kaynak_kanonu · gazete_kanonu · KVKK #31

## §1 · Doğrulama örneği yalnız bulut-tek kopyadan (U-10 · Vaka #12)
Bellek/iCloud aktarımında "doğrulandı" damgası, **yerel kopya ayrıldıktan sonra** bulut-tek kopyanın indirilip SHA ile sınanmasıyla verilir. Yerel kopyadan alınan örnek doğrulama değildir. Hafıza `bellek_durum.json → icloud_dogrulandi` bu kurala göre sayılır (eski sayım şerhli).

## §2 · Kanon kuralı kodda ve istemde yaşar (U-14 · Vaka #15)
Her kanon kuralı (KVKK #31 mağdur adı, parsel yok, telif ≤1 cümle, kesit/künye…) **(a)** API istemine satır olarak, **(b)** çıktı kod denetimine (regex/doğrulayıcı) yazılır. Kanon dosyasında durması yetmez. Vezir bekçisi: CC'nin istem şablonu/doğrulayıcı dosyası yoksa "kural kodda yok" KIRMIZI.

## §3 · iCloud bekçisi ve ağ (Vaka #16)
Yükleme hızı **0 KB/s > 30 dk** (mmcs:7) → KIRMIZI + yeniden deneme + Hafıza bildirimi. **Hotspot pahalı ağdır:** ağır yükleme yalnız **ev Wi-Fi'sinde**; Vezir nabzı SSID yazar, hotspot şüphesinde (iPhone/Hotspot/kişisel erişim noktası) kilit "AĞ BEKLEME". CloudKit sistem önbelleği (`~/Library/Caches/CloudKit`, 21.10: 24 GB) **dokunulmaz**, yükleme bittikçe erir; **günlük satır** (makine ölçüsü `cloudkit_onbellek_gb`).

## §4 · Ajan durma kaydı (U-11)
Bir ajan/launchd işi kendini durdurduğunda state dosyasına **hata metni + son 20 log satırı** yazar; **metinsiz durma KIRMIZI** (gece raporu "Zamanlı iş bekçisi" sayar).

## §5 · Bellek ve SİL (Patron 21.10)
Bellek: adaptörde **pil ≥%50** olunca Patron takar (Hafıza bildirir). **SİL** (Borsa 9 GiB turizm + görsel 4,84 GiB): Hafıza'nın iCloud hattına → **iki doğrulama** (§1) → yerelden sil; SİL yetkisi **Patron'un 00:30 kararı**.

## §6 · Betik referanslı dosya Masaüstü/Belgeler'de durmaz (Vaka #17 · Üst Akıl 21.10)
iCloud "Optimize Mac Storage" `~/Desktop` ve `~/Documents` altındaki **betik ve veri dosyalarını dataless** yapar (boyut var, blok 0); launchd/cron bunları okurken **EX_CONFIG / EDEADLK / PermissionError** verir. Kural: **launchd/cron/betik tarafından referanslanan hiçbir dosya Masaüstü/Belgeler'de durmaz, yerel kökte durur** (`~/tradia_*`, `~/tradia_calisma`, `~/landgold-agents`, `~/cc_*`). Taşıma Hafıza'nın (Standing #48 symlink + R-kaydı); Vezir bekçisi `zamanli_is_kirmizi` + `makine_olc` EDEADLK sayar. Aynı kökten vakalar: Finans EVDS kapısı · Borsa `evds_gunluk.sh`/`backfill.sh` (EX_CONFIG) · Kitap Arşiv istekleri · Tic rize md 22/22 · Borsa `evds_guncel.log` (Vezir makine_olc).

## §7 · CC kısa adı tek (Üst Akıl 21.10)
Kanonik kısa adlar (dosya/klasör/dönüş/kart/launchd anahtarı): `vezir · hafiza · basin · sosyal · kitap · arsiv · map · ai · finans · ihale · analiz · signals · pazarlama · tic · borsa`. "sinyal", "ttai", "ccbasin" gibi varyantlar yalnız launchd etiketi/geçmiş dosyalarda; **yeni dosya adı kısa adı kullanır** (örn. `sosyal/talep/signals.json`, `donus_signals_`). Sosyal şema enum'u bu listeyle aynı.

*Vezir · 2026-10-21 17:53*
