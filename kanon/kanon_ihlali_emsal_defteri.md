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

## Vaka #03 — PARSEL-01 · Üç-katman doğrulama zinciri (örnek vaka)

- **Tarih:** 2026-09-30
- **CC:** CC-Tic (birleştirici) + CC-Finans (mevzuat) + CC-İhale (plan hükmü)
- **Bulgu:** "15.000 m² alan üzerinde konaklama yapılabilir" söylemi araştırıldığında **üç-katman doğrulama zinciri** kanıtlandı:
  1. **Söylem katmanı:** Sahada dolaşan iddia
  2. **Emsal katmanı:** ÇDP 6.9.7.4 (ekoturizm) — 15.000 m² eşiği bulundu → E7 (bu vakadaki eşik-borcu) KAPANDI
  3. **Plan hükmü katmanı:** Ancak konaklamanın gerçek kapısı **6.2.4** (köyde turizm) — plan zorunlu, E:0,50 emsal · yani söylemin kaynağı doğru olsa da vakanın **cevabı 6.2.4'te**
- **İhlal tipi:** İhlal değil — **metodoloji emsali** (SİLME-YOK aynı deftere kaydediliyor çünkü kanon üretici bir vaka)
- **Emsal ders:**
  1. Söylem tek başına kabul edilmez; **emsal** (hangi mevzuat maddesi?) aranır
  2. Emsal bulunsa da o emsal **gerçek kapı** olmayabilir — plan hükmüne kadar zincir sürer
  3. Vezir kanonuna aday: her mevzuat iddiası için **söylem → emsal → plan hükmü** üç-katman denetimi zorunlu

---

## Vaka #04 — Karıştırma riski · Farklı parsel planı ↔ vakalık parsel (lejantsız pafta fotoğrafı)

- **Tarih:** 2026-09-30
- **CC:** CC-Tic (ön-model testi)
- **Bulgu:** Vakalık parsele komşu/yakın bir parselin (farklı ada · farklı parsel · detay lokal) planında **E:1,00 / 12,50** emsal bulundu. Ancak **lejantsız pafta fotoğrafı** bu değeri vakalık parsele atfetmeye yetmez.
- **İhlal tipi:** Erken atıflama riski (uyarı)
- **Kanon ilişkisi:** [[celiski_referans_kanonu_v1]] Tür B — "aynı sayfa, farklı parsel" gibi görünse de referans netlik eksikliği. Lejant → hangi parsele hangi hüküm eşleştiği kanıtlı olmadan atıflama YASAK.
- **Aksiyon:** Tic'in **ön-model testi** bu ayrımı yapıyor; Patron pafta fotoğrafı (lejantlı) veya İÖİ telefonu ile netleşme sağlar.
- **Emsal ders:**
  1. Pafta fotoğrafı **lejantsız** = kanıt değil, görsel-referans
  2. Aynı ada üzerinde farklı parseller farklı hükümlere tabi olabilir
  3. Ön-model testleri her zaman **karıştırma-riski** kontrolüyle başlar

---

## Vaka #05 — Parsel geometrisi rakamları: pano (Vezir) + örümcek kanonu (Hafıza)

- **Tarih:** 2026-10-13 (BM-K ilk sayım turundaki sızıntı taraması)
- **Bulgu:** (a) Pano'da iki satırda kıyı-mesafe hüküm rakamı kalmıştı — 26 Eyl turunda **Vezir'in kendisi** yazdı, 27 Eyl retro-redaksiyonda kaçtı (tarama deseni yalnız dere/eğim rakamlarını arıyordu). (b) Hafıza'nın untracked `kanon/orumcek_soru_seti_v1.md`'sinde parsel-kesin + proxy eğim ve kıyı mesafesi rakamları.
- **Düzeltme:** Pano HEAD'de redakte (git history'de eski hâl kalır · SİLME-YOK). Hafıza dosyası diskte redakte, commit edilmedi, bayrak: `02_CC_STATE/vezir_bayrak_hafiza_orumcek_parsel_veri.json`.
- **Emsal ders:**
  1. Sızıntı taraması **sabit rakam listesiyle** yapılırsa yeni rakam kaçar. Desen: vaka parselinin her mesafe/eğim/kot ölçüsü — sabit liste değil, sınıf.
  2. Retro-redaksiyon kendi yazdığın satırları da kapsar; "başkasının sızıntısı" refleksi yanıltır.
  3. Üst Akıl kaynak metni (Downloads) parsel rakamı taşıyabilir; public'e işleyen CC süzer.

---

## Vaka #06 — Vezir'in rev-list kuralı, incelenmemiş CC commit'ini public'e itti

- **Tarih:** 2026-10-14
- **Zincir:** Hafıza yerel commit attı (M4 v2 · 214 dosya · yeniden yazım sonrası `0234b8b`) ama push etmedi → Vezir `pano_yayinla.sh` koştu → 11 Eki'de eklenen rev-list kuralı ("HEAD öndeyse mutlaka push") **Hafıza'nın commit'ini de** push etti → `misara-app/veri/DURUM.json` (1 satır) + `misara-app/veri/cografya.json` (6 satır) vaka parselinin ada/parsel numarasını, orman-kadastro parsel numarasını ve kıyı-mesafe değerini public'e taşıdı.
- **Sorumluluk:** Vezir. Kural Patron onaylıydı ama sızıntı kapısı yoktu; "benim commit'im temiz" kontrolü, itilen **tüm** commit'leri kapsamıyordu.
- **Düzeltme:** HEAD'de 7 satır redakte (`pano_yayinla.sh` sonraki çalıştırmada iter). `pano_yayinla.sh`'a **sızıntı kapısı** eklendi: push'tan önce `origin/main..HEAD` farkı sınıf-bazlı desenle (ada/parsel no, anahtar/token) taranır; eşleşme varsa push durur (exit 3).
- **Geçmiş temizliği (Patron kararı a · 14 Eki):** tam bundle yedek → private misara-arsiv (`yedek/`) · `git filter-repo --replace-text` ile 7 dizgi tüm geçmişten çıkarıldı · `--force-with-lease` push. Sonuç: 70 commit korundu, HEAD ağacı birebir aynı, yalnız 3 SHA değişti (yeni: `0234b8b`, `2942cfb`, `5c9f419`), öncesi dokunulmadı. Eski SHA'lar public dosyalarda **yazılmaz** (sızan içeriğe link olur); listesi private arşivde.
- **Açık kalan:** GitHub yetim commit'leri doğrudan SHA ile **hâlâ sunuyor** (14 Eki: web 200 + API 200). Tam silme = GitHub Support 'sensitive data removal' başvurusu → **Patron eylemi**.
- **Bilinçli kapsam dışı:** Vaka #02 ve #05'in eski sızıntıları da geçmişte duruyor. Kapsamak 26 Eyl sonrası ~25 commit'in SHA'sını değiştirir; pano/kanon/İLERLEME'deki SHA atıfları kırılır → ayrı Patron kararı.
- **Emsal ders:**
  1. Otomatik push kuralı, kapsadığı **her** commit için sızıntı kapısı ister. Yoksa ilk başka-CC commit'inde delinir.
  2. Hafıza'nın `misara-app/veri/` türetmeleri public repoya yazıldığı sürece parsel_veri_kanonu süzgecinden geçmeli (türetme betiğine süzgeç).

---

## Vaka #07 — EVDS anahtarı, ikinci tekrar

- **Tarih:** 2026-10-14 · **Açan:** Patron · **Kayıt:** Vezir
- **Tekrar:** İlk olay 2026-09-25 (E2): anahtarın settings.json'da düz metin durduğu fark edildi, yalnız arşiv redaksiyonuna desen eklendi; kök çözülmedi.

### Olgu (Patron + Vezir ölçümü)
1. **Anahtar 4 yerde, tek değer** (sha256 `6470bf2638…`): `~/landgold-agents/.env` (`TCMB_API_KEY`) · `~/finans/.env` (`EVDS_API_KEY`) · `~/.claude/settings.json` (9 izin satırı) · `~/.claude/settings.local.json` (1 izin satırı). Patron "iki yer" diye açtı; ölçüm dört çıktı.
2. **Seri taze değil:** Borsa hattı beyanı 2026-07-17'den beri. Vezir ölçümü: SORGU-01'de `evds_ham` son alımı **2026-08-01** (8.621 kayıt). Bu havuzun alım günüdür, seri tarihi değildir.
3. **Üç ay kimse fark etmedi.** Ama bilgi vardı: 2026-07-31 tarihli bir CC durum dosyası anahtarın EVDS3'te geçersiz olduğunu zaten yazmıştı. Bilgi dolaşmadı.
4. **Pazarlama test etmeden Patron'a yönlendirdi:** hedef kartında "EVDS3 anahtarı, ücretsiz başvuru, Patron'da". Hipotez tablosu yok, HTTP kodu yok.
5. **Uç nokta durumu (Vezir · 2026-10-14 15:34Z · anahtarsız):** `evds2…/` ve `evds2…/service/evds/` → **200, evds3'e yönlendirme** · `evds3…/` → 200 · `evds3…/igmevdsms-dis/` → **404**. Hipotez (a) "uç nokta taşındı" kanıtlı; (b)–(e) elenmedi.

### 🔴 Public sızıntı (tarama sonucu: VAR)
- **misara-vezir (public):** **2026-06-11'den beri** 3 tutanak dosyasında + pano kopyasında.
- **tradia-beykoz (public):** 2026-09-25'ten beri 4 dosyada. **İkisini Vezir yazdı**: diriliş paketi ve redaksiyon kaydı. Kalan ikisi redaksiyon betiği ile testi; anahtar **redaksiyon deseninin kendisi** olarak düz metin duruyordu.
- **misara-arsiv (private):** 5 dosya. Redaksiyon kaçırdı, çünkü desen `\b<anahtar>` idi ve tutanakta anahtar `\b` metninden sonra geliyordu; kelime sınırı oluşmadı.
- Commit listesi: **private** `misara-arsiv/yedek/VAKA07_anahtar_tarama.md` (sızan içeriğe link olmasın diye public'e yazılmaz).

### Düzeltme (Vezir · 14 Eki · yıkıcı olmayan)
- HEAD redaksiyonu: tradia-beykoz 2, misara-vezir 17, misara-arsiv 12 yer → `[REDACTED-APIKEY-EVDS]`. Üç repoda HEAD'de kalan **0**.
- `arsiv_cek.py`: anahtar koddan çıktı; değerler çalışma anında `.env`'den okunuyor, birebir eşleşme, `\b` yok. Test 16/16 (gerçek anahtarlı gizli test dahil, değer basılmadan).
- `pano_yayinla.sh` kapısı: push öncesi fark `.env` değerleriyle birebir taranıyor. Anahtar içeren eski commit'i yakaladı, temiz farkta 0.
- Kanon: `kanon/anahtar_yonetimi_kanonu_v1.md`.

### Açık (Patron)
1. **Anahtar değişimi.** Değer 4 aydır public. Geçmiş temizlense bile kopyalanmış olabilir. Geçerliliği şüpheli olsa da iptal + yeni anahtar.
2. **Geçmiş temizliği:** misara-vezir + tradia-beykoz. Değişim yapılırsa aciliyeti düşer.
3. **settings.json / settings.local.json:** 10 izin satırı anahtarsız desene çevrilmeli.

### Vezir anahtarlı testi (2026-10-14 15:38Z · değerler basılmadı)
| Anahtar | Uç nokta | HTTP | Yanıt |
|---|---|---|---|
| YENİ (Patron 14 Eki, `.env`'de) | `evds3…/igmevdsms-dis/series=…` (header `key`) | **200** | **JSON, 14 kayıt** (USD 01–14 Eki) |
| YENİ | `evds2…/service/evds/series=…` | 200 | **HTML**: evds3 ana sayfasına yönlendirme, veri yok |
| ESKİ (public olan) | `evds3…/igmevdsms-dis/…` | **200** | **JSON, 14 kayıt** → eski anahtar **HÂLÂ GEÇERLİ** |
| ESKİ | `evds2…/service/evds/…` | 200 | HTML, veri yok |

**Hüküm (kanon kural 3 tablosuyla):**
- (a) **Uç nokta taşındı → KANITLANDI.** evds2 yolu 200 + HTML döndürüyor. JSON bekleyen istemci sessizce boş kalır.
- (c) **Anahtar geçersiz → ELENDİ.** İki anahtar da veri döndü.
- **Sonuç:** "Yeni anahtar başvurusu" yönlendirmesi gereksizdi. Seriyi durduran, istemcinin hâlâ evds2 yolunu çağırması. 07-31'deki "EVDS3'te GEÇERSİZ" notu da büyük olasılıkla yanlış yolla yapılmış bir testti (doğrulanmalı).
- **"HTTP 200 = canlı" değildir:** içerik imzası (JSON + `items`) kontrol edilmeli (Kitap'ın 13 Eki yoklama dersiyle aynı).

### Kök neden
⏳ Analiz raporu `arsiv/evds3_kok_neden_2026-10-14.md` hâlâ bekleniyor; Vezir testi kök nedeni yukarıda daralttı. Rapor gelince karşılaştırılacak.

### Emsal ders
1. Bir sızıntıya **desen eklemek** kökü çözmez. 09-25'te anahtar yerinde kaldı, üstelik desenin kendisi public'e taşıdı.
2. Redaksiyon deseni sırrın **kopyası olamaz.** Sır tek kaynaktan çalışma anında okunur.
3. "Geçersiz" bilgisi 07-31'de diskte vardı, 10-14'e kadar dolaşmadı. **Dış kaynak sağlığı günlük satır olmalı** (kanon kural 2).

---

## İşletim kuralı

- **Ekleme:** Vezir her turda yeni ihlal tespit ederse `Vaka #NN` bloğu ekler (numara artan). Eski vakalar dokunulmaz.
- **Kapatma:** İhlal düzeltilse bile vaka **kapanmaz**, "Düzeltme" satırı doldurulur. Bu defter emsal-arşividir, iş-listesi değildir.
- **Referans:** Standing #35 (git status baştan sona) · Standing #37 (toplayıcı≠kullanıcı, kaynak-imza) · Standing #38 (SHIM yasağı, dolaylı kural: dolaylı yol yasağı).

*Vezir · Standing #35+#36+#37+#38 · 2026-09-26*
