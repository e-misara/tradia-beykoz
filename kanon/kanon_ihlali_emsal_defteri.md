# KANON İHLALİ EMSAL DEFTERİ

**Kanal:** Vezir · SİLME-YOK · $0
**Amaç:** Kanon (kural/disiplin) ihlallerinin emsal kaydı — düzeltme sonrası bile silinmez, öğrenme dokümanıdır.
**Statü:** AÇIK · Vezir tarafından işletilir · her yeni vaka artan numarayla eklenir

---

## Vaka #01 — Hafıza · İkizdere uydurması (PARSEL-01)

- **Tarih:** 2026-09-26
- **CC:** CC-Hafıza
- **Bulgu:** Hafıza `DURUM.json .parsel_01.ilce` alanına **"İkizdere"** yazdı. Gerçek konum **Rize/DEREPAZARI**'dır (TKGM künyesi + Tic birleştirici DOSYA.md).
- **İhlal tipi:** Uydurma (kaynağı olmayan atama).
- **Kanon ihlali:** Kural 1'in ruhu — "belirsizse YOK/BİLİNMİYOR yaz, tahmin etme" (Standing #35+#36 fetch disiplinine kardeş kural).
- **Tespit eden:** Vezir (Patron 2026-09-26 kayıtları) + CC-Finans (Finans katmanı raporunda İkizdere gördü, çelişki bildirdi)
- **Etki:** Vaka konumu 1 gün boyunca yanlış CC'lere yayıldı; Finans raporu eski konumla üretildi (Madde 52 + 63 bulguları konum-bağımsız olduğu için içerik geçerli, ama başlık düzeltmesi gerekir).
- **Düzeltme:** `DURUM.json .parsel_01.ilce` → `"Derepazarı"`; `onceki_yanlis_atama: "İkizdere (Hafıza tahmini, 2026-09-26 düzeltildi)"` alanı eklendi (SİLME-YOK uyumlu, geçmiş kayıt korundu).
- **Uygulama denetimi:** 🔴 **AÇIK** — Finans DURUM.json'da hâlâ İkizdere gördü (2026-09-26 turu). Düzeltme her CC oturumu için ayrı gerekmeyebilir; kaynak tek dosya. Ancak **pano vaat-takibinde KIRMIZI** olarak izlenir, Finans dönüşü ile teyit edilene dek.
- **Emsal ders:**
  1. Hafıza belirsiz alan doldururken **kaynak-imza** zorunlu (nerede okudu?). Kaynak yoksa `BİLİNMİYOR`/`null`.
  2. Coğrafya alanı için TKGM künyesi **tek kanonik kaynak**. Başka kaynaklar (basın, sosyal, kişi beyanı) çelişse bile künye kazanır.
  3. Düzeltme kaydı `onceki_yanlis_atama` benzeri alanla korunur (SİLME-YOK). Silinip yazılmaz.

---

## Vaka #02 — Public repo · Parsel-düzeyi veri sızıntısı (PARSEL-01)

- **Tarih:** 2026-09-26 (retro-tespit · yeni kanon yürürlüğe girdiğinde)
- **CC:** Vezir (public repo bekçisi) · dolaylı: CC-Hafıza (DURUM.json) + Vezir (pano)
- **Bulgu:** Public repo `github.com/e-misara/tradia-beykoz` içinde iki dosyada parsel-düzeyi veri:
  - `pano/ozet-w35.json` PARSEL-01 `konum` alanı: ada + parsel bilgisi vardı
  - `misara-app/veri/DURUM.json` `parsel_01.baslik` alanı: ada + parsel bilgisi vardı
- **İhlal tipi:** Retro-ihlal (kanon çıkmadan önce yazıldı, ama kanon retro-etkili).
- **Kanon:** `parsel_veri_kanonu_v1.md` (2026-09-26 ONAYLI · Patron+Vezir).
- **Tespit eden:** Patron+Vezir (kanon adayı çıkarken retro-tarama).
- **Etki:** Public repo'da ada/parsel görünürlüğü. 3 kanal (Pages/Raw/jsDelivr) üzerinden yayıldı.
- **Düzeltme:** Her iki dosyada ada/parsel dizgisi kaldırıldı, yerine "(parsel-veri lokal · kanon: parsel_veri_kanonu_v1)" konuldu. Git history üzerinde eski değer görünür (SİLME-YOK); redaksiyon güncel HEAD'de.
- **Emsal ders:**
  1. Yeni kanon çıkarken her zaman **retro-tarama** yap (grep + tespit + redakte).
  2. Vezir'in redaksiyon katmanı (`arsiv/arsiv_cek.py`) parsel-veri desenlerini eklemeli: `\bada\s*\d+\b`, `\bparsel\s*\d+\b`, TKGM künye alanları.
  3. Git history public repo'da geri dönülemez — bu yüzden **ilk yazımda kanona uygun** yaz; ancak retro-durumlarda daha yeni bir commit güncel görünümü temizler.

---

## İşletim kuralı

- **Ekleme:** Vezir her turda yeni ihlal tespit ederse `Vaka #NN` bloğu ekler (numara artan). Eski vakalar dokunulmaz.
- **Kapatma:** İhlal düzeltilse bile vaka **kapanmaz**, "Düzeltme" satırı doldurulur. Bu defter emsal-arşividir, iş-listesi değildir.
- **Referans:** Standing #35 (git status baştan sona) · Standing #37 (toplayıcı≠kullanıcı, kaynak-imza) · Standing #38 (SHIM yasağı, dolaylı kural: dolaylı yol yasağı).

*Vezir · Standing #35+#36+#37+#38 · 2026-09-26*
