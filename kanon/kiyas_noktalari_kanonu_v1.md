# KIYAS NOKTALARI KANONU v1 — üç kıyas ekseni

**Statü:** 🟡 TASLAK → CC'lere dağıtıldı (Patron 2026-10-15 20:30) · Vezir kaydı
**Bağlı:** celiski_referans_kanonu_v1 · motor/SEMA.md (eksik değer) · anahtar_yonetimi (EVDS tek istemci Borsa) · Standing #37 (toplayıcı≠kullanıcı: TÜFE/altın/asgari ücret serileri **Borsa**, yapı yılı **Analiz/Pazarlama/Map**, basın ağırlığı **Basın/Sosyal**)
**İlke:** her rakam **kesit tarihli**; `HESAP` sınıfı **formülüyle** yazılır; "bugünün parası" iddiası çıplak yazılmaz.

## (a) Yapı yılı × dönem teknolojisi → `donem_sinifi`
| Dönem | Yönetmelik/teknoloji | Sınıf |
|---|---|---|
| ≤1975 | 1975 öncesi deprem yönetmeliği yok sayılır · yığma ağırlıklı | `D0_oncesi_1975` |
| 1976–1998 | 1975 Afet Bölgeleri Yönetmeliği · betonarme yaygın, denetim zayıf | `D1_1975` |
| 1999–2007 | 1998 yönetmeliği (1999 depremleri sonrası uygulama) · yapı denetim 2001 (19 pilot il) | `D2_1998` |
| 2008–2018 | 2007 DBYBHY · tünel kalıp/toplu konut dönemi · yapı denetim 81 il (2011) | `D3_2007` |
| ≥2019 | 2018 TBDY (01.01.2019) | `D4_2018` |
Kural: **ruhsat yılı** esastır (ilan "bina yaşı" PROXY'dir, `kanit_sinifi: PROXY`); ruhsat yılı yoksa `donem_sinifi: null + eksik_gerekce`. Yapı sistemi (`yigma` · `betonarme` · `tunel_kalip` · `celik`) ayrı alan; dönemden **türetilmez**, kaynak ister. Sınır yılları Vezir taslağıdır; **Analiz/Map** mevzuat tarihleriyle teyit eder (yönetmelik yürürlük ≠ yayım).

## (b) Alım gücü — "bugünün 50.000 TL'si = dünkü X"
- **TÜFE (TÜİK, 2003=100):** `deger_bugun = deger_o_gun × TÜFE_bugun / TÜFE_o_gun` · seri `Borsa` (EVDS TP.FG.J0) · kesit ay yazılır.
- **Altın gramı:** `m2_altin = m2_tl / gram_altin_tl` (TCMB/EVDS gram altın ya da BIST altın kapanış) · kesit gün.
- **Asgari ücret:** `m2_asgari = m2_tl / net_asgari_ucret_ay` · dönem (yılın 1. / 2. yarısı).
- Üç ölçü birlikte yazılır; tek başına "reel" iddiası yok. Hepsi `HESAP`; formül + girdi kesitleri + kaynak künyesi satırda.
- **Payda hatası dersi:** Kitap "%42 → %73,7" emsali — payda tanımı yazılmadan oran yazılmaz.

## (c) Basın ağırlığı → `populerlik_endeksi`
- `yerel = yerel gazete/site haber sayısı (ilçe adı başlıkta, 30 gün)` · `ulusal = ulusal yayın haber sayısı (aynı süzgeç)` · `izlenme = Sosyal kanal görüntülenme/transkript atfı (K12)`.
- `populerlik_endeksi = log(1+yerel) + log(1+ulusal) + log(1+izlenme)` — **Vezir taslağı**, Basın+Sosyal kalibre eder; ağırlıklar yazılmadan endeks sunulmaz.
- Basın süzgeci (BELGE/SÖYLEM, soyad tuzağı, il teyidi) aynen uygulanır; tarih = yayın tarihi (metin yılı değil).

## Ortak kurallar
1. Her kıyas satırı: `{deger, birim, kesit, kaynak_kunyesi, kanit_sinifi: HESAP|BELGE|PROXY, formul?}`.
2. Eksik = `null + eksik_gerekce` (0 değil).
3. Kıyas noktası **mahalle kartına** düşer (adres anahtarı zorunlu); ilçe düzeyi değer mahalleye atfedilmez (K9 PROXY şerhi).
4. Toplayıcı≠kullanıcı: seriyi sahibi çeker, kullanan CC künyeyle okur.

*Vezir · 2026-10-15 20:4x · v1 taslak*
