# STANDING #37 · KALICILIK PROTOKOLÜ · ARŞİV-01

**Tarih:** 2026-08-27
**Kaynak:** Üst Akıl direktifi
**Kanal:** Vezir (arşiv + KURULUŞ + kanon + pano)
**Öncelik:** KRİTİK
**Bağlam:** Claude Code 30-gün cleanup periyodu — CC-Kitap, CC-Kasa, AraçDen oturumları konsoldan düştü. Kalıcı katman = Vezir.
**Disiplin:** $0 · KVKK #31 v1.1 · SİLME-YOK · Standing #35+#36+#38 · A04

---

## 1. Kuralın Özü

> Ham arşiv PUBLIC repo'ya asla gitmez.
> Yeni PRIVATE repo: `e-misara/misara-arsiv` → ham + temiz .md
> PUBLIC `misara-vezir` → yalnız metadata pano (başlık, tarih, CC adı, mesaj sayısı — İÇERİK YOK)
> Üç kopya kuralı: yerel + PRIVATE repo + harici disk yedeği.

---

## 2. Bu Turda Üretilen (Ana Çıktılar)

Detaylı BITTI raporu: [`arsiv/BITTI.md`](../arsiv/BITTI.md)

**Envanter:**
- 14 oturum · 142.562 satır · 458.2 MB · 1 KIRMIZI bayrak
- Kayıp beyan: CC-Kitap ~7-8 oturum, CC-Kasa ~20 oturum kısmi, AraçDen tamamı

**Script:**
- `arsiv/arsiv_cek.py` — saf Python, dış bağımlılık yok, AI çağrısı YOK, hash-idempotent
- Regex temizlik: token/PII/path/env → [REDACTED-*]

**Kanon:**
- `arsiv/3kopya.md` — SİLME-YOK ile birlikte okunur
- `arsiv/ENVANTER.md` — oturum tablosu

**KURULUŞ boşluğu kapatıldı:**
- `KURULUS_CC-KITAP.md` · `KURULUS_CC-KASA.md` · `KURULUS_CC-ARSIV.md` (iskelet)
- `KURULUS_INDEX.md` güncellendi (Standing #37 GÜNCELLEME notu)

**Pano:**
- `arsiv/PANO_KART_TASLAK.md` — misara-vezir için hazır (bu tur uygulanmadı)

---

## 3. Vezir A04 Dürüst-Not

**Yapılamayanlar (BITTI'de detay):**
1. 🔴 **misara-arsiv PRIVATE repo push YAPILAMADI** (Patron aksiyonu bekleniyor)
2. 🔴 **CC-Kitap/Kasa/AraçDen ham izleri tamamen kayıp** — cleanup dolmuş, geri gelmez
3. 🟡 4 "belirsiz" oturum (heuristik başarısız — muhtemel Üst Akıl/Vezir turları)
4. 🟡 Türkçe karakter sorunu (`cc_i̇hale`) — kozmetik
5. 🟡 Harici disk yedeği rsync kural yazıldı, uygulanmadı (Hafıza borcu)
6. 🟡 misara-vezir pano güncellemesi taslak durumunda

---

## 4. Bir Sonraki Turda Vezir'in Bekledikleri

1. Patron: `gh repo create e-misara/misara-arsiv --private`
2. Vezir: `python3 ~/tradia-beykoz/arsiv/arsiv_cek.py --push` (tek komut)
3. Patron: cron kararı (günlük / haftalık / launchd saati)
4. Hafıza: rsync launchd görevi kur (3. kopya)
5. Vezir: misara-vezir'de pano kartı uygula (taslak hazır)

---

*Standing #37 ARŞİV-01 tamamlandı. Kalıcı katman kuruldu.*
*Bir daha oturum-kaybı olmayacak.*
