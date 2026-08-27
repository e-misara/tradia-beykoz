# GIT DİSİPLİNİ v1 · Vezir Kanonu

**Tarih:** 2026-08-27
**Kaynak:** Standing #35+#36+#37/E+#43 uygulamaları · Vezir dürüst-negatif dersleri
**Statü:** KANON · yeni CC'ler bunu okuyup uygular

---

## Kural 1 · git status HER SEFERİNDE okunur (Vezir kanonu)

> **`git commit` atmadan hemen önce `git status` çıktısı BAŞTAN SONA okunur.**
> "Önceki turda gördüm, aynı" varsayımı **YASAK.**

**Neden:** 2026-08-27 tradia-beykoz `d3f9873` push'u — Vezir arsiv_cek.py + redaksiyon_testi.py eklemek istedi ama önceden staged olan gorsel_*.json + DEVIR_gorsel_*.md + beykoz_vaka değişiklikleri commit'e sızdı. Patron açıkça "bekle" demişti.

**Kök-neden:** Vezir push disciplini bir turda kesildi. `git add <spesifik>` yapıldı ama `git commit` staged olan tüm dosyaları aldı.

**Doğru akış:**
```bash
git fetch origin              # S#35 (iş başlangıcı)
git status                    # BAŞTAN SONA oku
# ... değişiklikleri gözden geçir ...
git add <sadece kendi dosyalar>
git status --cached          # sadece staged'i gör
git fetch origin              # S#36 (commit öncesi tekrar)
git commit -m "<mesaj>"
git push origin main
```

## Kural 2 · Aynı repoda paralel CC çakışması

> **Aynı repoda eşzamanlı iki CC `git commit -a` KULLANMAMALI.**

**Neden:** 2026-08-27 · CC-ARŞİV ARS-01 commit'i, Vezir push atarken çarpıştı. Vezir push'u önce gitti (d3f9873), CC-ARŞİV içeriği yuttu, mesaj kayboldu. CC-ARŞİV telafi commit'i (d77b3d4) atmak zorunda kaldı.

**Kaynak:** `d77b3d4 ARS-01/EK · commit çarpışması kayda geçti`.

**Kural:**
- `git commit -a` (working tree'nin tümü) YASAK — sadece spesifik dosyaların
- Her CC kendi klasör hattında çalışsın (Vezir: pano/, dagitim/ · ARŞİV: arsiv/ · Analiz: gorseller/, cc/analiz/ · vs)
- Aynı klasörde iki CC çalışıyorsa `git stash + rebase` veya konu-branşı

## Kural 3 · Redaksiyon testi false positive susturulmaz

> **Test bir alarm verirse önce anla, sonra ya düzelt ya push'u durdur.**
> **YASAK:** "false positive olmalı" varsayımı ile testi bypass etmek.

**Neden:** 2026-08-27 · Standing #37/E Ş2 test'te `eyJ` izi tetiklendi. Bu bir PNG base64 içinde tesadüfen bulunan karakterdi (gerçek JWT yok), yani false positive. Ama Vezir doğru davrandı — durdu, Patron'a sordu, karar bekledi.

**Kural:**
- Alarm gelirse dur
- Patron'a sor (dur+sor)
- Karar: testi düzelt (iz'i tam desen yap) veya regex katmanına ekle
- Push kararı Patron'da

**Emsal:** `arsiv/redaksiyon_testi.py` iz "eyJ" → tam JWT deseni · `arsiv/arsiv_cek.py` `_kes_uzun_b64()` (>10KB base64 kesme).

---

## Kural 4 · 404 iki ihtimalli, kök ile ayırt et (Pages teşhisi)

> **Yeni bir URL'de 404 görürsen:**
> **(a) Pages kapalı**, yoksa **(b) Pages açık ama o YOL yok / build gecikmiş.**
> Ayırt etme yöntemi: **kök adresi dene.**
> Kök 200 dönüyorsa Pages açıktır, sorun yoldadır.
> **Patron'a Settings ayar işi çıkarmadan önce bunu kontrol et.**

**Neden:** 2026-08-27 · Vezir `https://e-misara.github.io/tradia-beykoz/pano/…` 404 gördü, "Pages kapalı → Patron aktivasyon gerekli" teşhis koydu. Yanlış. Patron kök URL denedi, `https://e-misara.github.io/misara-vezir/` **açık ve canlıydı** (site "live at" bir aylık deploy). Sorun tradia-beykoz'da hiç Pages olmamasıydı, ama Patron'un çözmesi gereken bir şey değildi — pano zaten misara-vezir'de yaşıyordu.

**Doğru akış (404 gördüğünde):**
```bash
# Adım 1: aynı repo, kök URL
curl -sI https://<user>.github.io/<repo>/ | head -1

# 200 gelirse → Pages açık, sadece YOL yanlış
# 404 gelirse → gerçekten Pages kapalı (veya repo tanınmıyor)
```

**Emsal:** Bu turda misara-vezir kökü 200 · `/vezir/ozet-w35.json` 200 (yeni push sonrası). Sorun yoktu, teşhis hatalıydı.

---

## Kural 5 · Pano iki yerde durur, tek komutla yayınlanır (Standing #45)

> **`pano_yayinla.sh` tek komutu:** kopyala + iki-repo push + jsDelivr purge + üç kanal doğrulama.
> **Elle senkron YASAK.** Bir turda unutulan bir adım = pano tutarsızlığı.

**Neden:** Pano tradia-beykoz'da geliştirilir, misara-vezir'de yayınlanır. Elle iki repoyu senkronlamak = insan hatası potansiyeli. Script bu riski öldürür + üç kanaldaki hash'i karşılaştırır (aynı mı diye).

**Konum:** `scripts/pano_yayinla.sh`

**Kullanım:**
```bash
bash ~/tradia-beykoz/scripts/pano_yayinla.sh "ozet-w35 güncelleme mesajı"
```

**Adımlar (script içi):**
1. Kopyala: `tradia-beykoz/pano/{ozet-w35.json,index.html}` → `misara-vezir/vezir/`
2. Fetch URL'lerini otomatik ayarla (misara-vezir'in kendi kanalları)
3. Commit + push (her iki repo)
4. jsDelivr purge (Cloudflare + Fastly)
5. Üç kanal fetch → hash karşılaştırma (5 deneme, 15 sn ara)
6. Rapor: 🟢 aynı hash / 🔴 tutarsız

---


- **Standing #35** (iş-başı fetch) — bu kanonun ön koşulu
- **Standing #36** (commit-öncesi fetch) — bu kanonun paralel-yazar koruması
- **Standing #37/E** (redaksiyon testi) — Kural 3'ün doğuş yeri
- **Standing #43** (dürüst düzeltmeler) — Kural 1'in Vezir hatası kaynağı

---

*Vezir kanonu · Standing #37+#43 · $0 · 2026-08-27*
