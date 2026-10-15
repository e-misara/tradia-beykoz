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

### Kök neden (Analiz raporu geldi · `arsiv/evds3_kok_neden_2026-10-14.md` · 18:44)
- **H1 uç nokta yanlış → DOĞRULANDI.** Kodun varsaydığı `/chart-data` biçimi EVDS3 arayüz kodunda hiç geçmiyor.
- **H4 yeni anahtar gerekli → ELENDİ.** Eski ve yeni anahtar aynı davranışı gösterdi. Patron'a başvuru yönlendirmesi yapılmadı.
- **Ek kök neden (Analiz):** `tradia_aylik_makro_cek.py` `.env`'i **hiç yüklemiyordu**; launchd ortamında `TCMB_API_KEY` her zaman boştu. Analiz `_env_yukle()` ekledi. Seri yalnız uç nokta yüzünden değil, **anahtarın hiç gönderilmemesi** yüzünden de duruyordu.
- **Kalıcı adımlar (Analiz):** settings.json'da 10 satır temizlendi (Vezir grep teyidi: settings.json 0 ✅, settings.local.json'da **1 satır duruyor** ❌). `evds_saglik.sh` + `com.tradia.evds.saglik` 08:00 kuruldu.

### Çelişki kaydı · Tür A (celiski_referans_kanonu_v1)
- **İddia 1 (Analiz, 15:42Z):** "EVDS3 ÇALIŞMIYOR; gerçek veri uç noktası bulunamadı." Kanıt: `/chart-data` geçerli anahtarla hep 400.
- **İddia 2 (Vezir 15:38Z · Borsa · Pazarlama):** Aynı anahtarlarla `igmevdsms-dis/series=…&startDate=…&endDate=…&type=json` + header `key` → **200 + JSON veri** (Vezir 14 kayıt; Pazarlama 5 partide 82 seri, hepsi 200).
- **Tür:** A. Aynı soru ("veri çekilebiliyor mu"), aynı anahtar, farklı hüküm. Referans farkı değil, bir taraf yanlış yolu test etmiş. Analiz H2'de çalışan biçimi ("query'nin path içine gömülmesi") "muhtemelen yanlış parse ediliyor" diye elemişti, oysa çalışan biçim tam oydu.
- **Çözüm:** Analiz'e gönderildi (Patron). Analiz'in sağlık kontrolü 15:57Z'de ortak istemciye geçti ve `SAGLAM` yazdı.
- **Ders:** Hipotez tablosu da yanlış elenebilir. Eleme, çalışan bir alternatif varken yapılmamalı; aynı soruyu iki CC farklı yolla soruyorsa önce yollar karşılaştırılır.

### Durum (14 Eki akşam)
| Kalem | Durum |
|---|---|
| Kök neden | ✅ iki katmanlı: uç nokta (H1) + `.env` yüklenmiyordu |
| Yeni anahtar `.env`'de + canlı test | ✅ |
| HEAD redaksiyonu (3 repo) + redaksiyon betiği + kapı | ✅ |
| settings.json | ✅ temiz |
| settings.local.json (1 satır, eski anahtar) | ❌ Patron |
| `~/finans/.env` (eski anahtar) | ❌ Finans |
| `.evds_key` (yeni anahtarın kopyası · `~/tt_pazarlama/bolge/` altında görüldü) | ✅ KAPANDI 14 Eki gece: dosya yok, Pazarlama `.env` + `evds_ortak` okuyor. **Düzeltme:** Vezir dosyayı "Pazarlama'nın" diye kaydetmişti; sahibi **Borsa**. Silmeyi Pazarlama yaptı → `cc_sinir_kanonu_v1` uyumsuzluğu (vaka değil) |
| Tek istemci (`evds_ortak.py` kanonik yola) + Borsa ayrı launchd kaldırma | ❌ Borsa |
| Hafıza `evds_saglik.json` okuma | ❌ teyit: OKUMUYOR |
| Eski anahtar iptali + public geçmiş temizliği | ⏳ Patron'a aktarıldı (GitHub Support dönüşüyle birlikte) |

**Vaka #07: KISMEN KAPALI.** Kök neden ve teknik düzeltme tamam; 5 uyum kalemi açık (.evds_key kapandı).

### Emsal ders
1. Bir sızıntıya **desen eklemek** kökü çözmez. 09-25'te anahtar yerinde kaldı, üstelik desenin kendisi public'e taşıdı.
2. Redaksiyon deseni sırrın **kopyası olamaz.** Sır tek kaynaktan çalışma anında okunur.
3. "Geçersiz" bilgisi 07-31'de diskte vardı, 10-14'e kadar dolaşmadı. **Dış kaynak sağlığı günlük satır olmalı** (kanon kural 2).

---

## Vaka #08 — "Veri var" sayılan şey boştu (yabancıya satış il verisi + EVDS haftalık seriler)

- **Tarih:** 2026-10-14 · **Açan:** Patron · **Kayıt:** Vezir

### Olgu
1. **Yabancıya satış il verisi (Pazarlama):**
   - Dün "veri var" sayılan 10 ilin sınamadan sonra yalnız **5'i geçti**: 4'ü VERİ_HATALI, 1'i ÇOKLU_DEĞER.
   - Vezir bağımsız sınaması (yabancı ≤ toplam, il × ay, toplam = EVDS3 konut satışı): 95 il-ay sınandı. 3'ünde yabancı toplamı aşıyor, 8'inde **toplama eşit** (yabancı satış = tüm satış).
   - İhlaller 4 ilde: Bayburt 1, Gümüşhane 1, Hakkari 2, Tunceli 7. Dördü de Pazarlama'nın VERİ_HATALI işaretlediği iller. CC'nin işaretlemediği ihlal **0**; Pazarlama sınaması bağımsız teyitli.
2. **EVDS haftalık seriler (Borsa):** SORGU-01 `evds_ham`'da `HAFTALIK(CUMA)` frekanslı **1.004 kaydın 1.004'ü** (`son_deger` alanında) ölçüm değeri yerine **yıl-hafta etiketi** taşıyor (ör. "2026-30"). Satır var, değer yok. Borsa'nın "1005 seri bozuk" tespitiyle uyumlu.
3. **Vezir'in kendi kaçağı:** İlk "sayısal mı" sınamam bu etiketleri yakalayamadı. "2026-30" rakam içerir ve sayıya çevrilebilir. Doğru sınama **biçim** sınaması (yıl-hafta deseni) oldu.

### Ortak desen
İki ayrı hatta "satır sayısı > 0" **veri var** diye okundu. Hiçbir aşamada değerin anlamı sınanmadı.

### Düzeltme
Vezir üretim ölçüsüne **değer sınaması** satırı eklendi (`motor/SUREKLILIK.json → deger_sinamasi`). Satır var ≠ değer doğru. Bugün üç sınama:

| Sınama | Sahibi | Sonuç |
|---|---|---|
| yabancı ≤ toplam (il × ay) | Pazarlama | İHLAL var; hepsi CC tarafından işaretli (bağımsız teyit) |
| haftalık seride değer mi, etiket mi | Borsa | **İHLAL 1.004/1.004** |
| beyan edilen alan dosyada var mı (`bm_k_sayi_uyarisi`) | Basın | **İHLAL**: 23 dosyada yok (uyumsuzluk, vaka değil) |

### Açık
- **Borsa:** haftalık seriler yeniden çekilsin; `son_deger` sayısal olsun (ortak istemciyle).
- **Hafıza:** SORGU-01'de bozuk 1.004 kayıt "veri var" sayımından düşülsün ya da işaretlensin.
- **Pazarlama:** 5 il yeniden çekilene kadar VERİ_HATALI / ÇOKLU_DEĞER kalır.

### Emsal ders
1. Doluluk ölçüsü (satır sayısı) ile doğruluk ölçüsü (değer sınaması) ayrı satırdır. Biri diğerinin yerine geçmez.
2. Sınama da sınanır (B11): Vezir'in ilk sayısal testi etiketleri kaçırdı.

---

## Vaka #09 — iCloud: Masaüstü senkronu + "Mac depolamasını optimize et" → parsel verisi üçüncü-taraf bulutta, çalışma dosyaları buluta boşaltılmış

- **Tarih:** 2026-10-15 00:15 · **Açan:** Patron · **Doğrulayan:** Vezir (dosyaya bakarak)
- **Olgu (ölçüm):**
  - `~/Desktop` iCloud "Masaüstü ve Belgeler" senkronunda: `~/Library/Mobile Documents/com~apple~CloudDocs/Desktop/` içinde `tradia` ve `TT-Tüm CC` var. `com.apple.bird optimize-storage = 1`.
  - **Buluta boşaltılmış (dataless: boyut > 0, blok = 0):** `~/Desktop/tradia` **18.349 / 35.082** dosya · yalnız `cc_borsa` **11.719 / 26.958** (Patron beyanı 3.205; ölçüm daha büyük) · `~/Desktop/TT-Tüm CC` **366 / 1.194**. `.icloud` yer tutucu 0 — boşaltma APFS dataless biçiminde, Finder/`find` listesinde dosya "var" görünür.
  - **Parsel verisi:** `~/Desktop/TT-Tüm CC/parsel_01_rize/` (DOSYA.md, INSAAT_PAKETI.md, künye) iCloud'a senkronlu → **parsel_veri_kanonu_v1 ihlali** (public repo yasağı üçüncü-taraf bulutu da kapsar; kanon metni "public" diyordu, bulut açıkça yazılmamıştı → kanon v1.1 ile eklenir).
  - Disk: Data birimi **%94**, 12 GiB boş. Patron: "15 GiB bilmecesi"nin kök nedeni bu (boşaltılan dosyalar yerelde yer tutmaz; iş onları okumaya kalkınca iCloud'dan indirir → disk dalgalanır, G/Ç şişer).
- **Etki:** (a) Parsel ve ham veri Apple sunucusunda. (b) Boşaltılmış dosyayı okuyan her iş (Borsa arşivi, külliyat, SORGU-01 kaynakları) sessiz indirme yapıyor → gecenin G/Ç yükü ve "dosya var ama boş" davranışı (Vaka #08 deseniyle akraba). (c) `Desktop/tradia` altındaki launchd log yolları zaten TCC yüzünden exit 78 (Vaka #06 makine denetimi).
- **Karar (Patron onaylı):** Patron iCloud ayarına dokunmaz. rsync bitince **Hafıza** `~/Desktop/tradia` ve `~/Desktop/TT-Tüm CC`'yi `~/tradia_calisma/` altına taşır; eski yollara symlink. **Standing #48 prosedürü:** önce etki listesi (launchd plist, crontab, koddaki mutlak yollar — grep sayımı), sonra taşıma, sonra **kırık bağlantı 0** kanıtı. Taşıma ağır G/Ç → kilit sırasına girer.
- **Vezir'in payı:** etki listesini çıkarır (`02_CC_STATE/vezir_bildirim_hafiza_vaka09_tasima.json`), taşımayı yapmaz (cc_sinir).
- **Karar 2 (Patron 00:55):** A0/A1 onaylı. **iCloud kopyası silinir** — A1'de her parti TT-HAFIZA'ya SHA-verify, sonra Masaüstü'nden çıkar. Patron adımı: taşıma bitince **iCloud 'Son Silinenler'i boşalt** (parsel dosyası bulutta 30 gün daha kalmasın). Hafıza: `duzen_koordinator` flock, launchd 10 dk örneği kilit varken çıkar.
- **Emsal ders:**
  1. "Dosya var" ≠ "dosya yerelde". Disk-bağımlılık ölçüsü (`5_diskten_bagimsiz`) iCloud'u hiç saymıyordu; HEDEF kartlarındaki "Mac-local" beyanları bu açıdan yeniden okunmalı.
  2. Sır/parsel kanonları "nereye yazılmaz"ı listelerken **senkron klasörleri** (iCloud, Dropbox, Drive) açıkça saymalı.
  3. Masaüstü çalışma dizini olarak kullanılmaz: TCC + iCloud iki ayrı tuzak.

---

## Uyumsuzluk kayıtları (Vaka değil · Patron sınıflaması)

- **U-01 · 2026-10-15 · Hafıza kilit:** "kilit bende" beyanı ↔ süreç ölü (pid 91683 yok, rsync 0, disk 01:26 düştü); külliyat 3 saat boşa bekledi. Düzeltme: makine_kaynak kural 9 (pid+heartbeat, Vezir nabzı 5 dk).
- **U-02 · 2026-10-15 · Basın saatlik envanter — "yazıcı tek, sütun koruma":** `com.tradia.ccbasin.envanter` (saatlik) `basin_kaynak_envanteri_v1.tsv`'yi yeniden yazarken Wayback sütunlarını (wayback_ilk_yakalama_yil / indeks_sayfa / durum) SİLDİ; başka betiğin doldurduğu sütunlar yazıcı tarafından korunmadı. Kural: bir dosyanın **tek yazıcısı** olur; o yazıcı kendi üretmediği sütunları **okur-taşır-korur**, boşla ezmez. Düzeltildi (Patron beyanı 17:xx; dosyada wayback VAR 626 — Vezir teyit). Ölçü: `havuz_gecikme`/`kaynak_bosluk` gibi sütun-kaybı sayacı yok → ileride.
- **U-03 · 2026-10-15 · Vezir kilit yer tutucusu 14:08:14–14:08:45 arası kimliği belirsiz boşaldı;** nabız 31 sn'de geri koydu; iz alanları eklendi (`onceki_tutan`, `kilit_mtime`). Sahibi bulunamadı — tekrarında bulunur.

## İşletim kuralı

- **Ekleme:** Vezir her turda yeni ihlal tespit ederse `Vaka #NN` bloğu ekler (numara artan). Eski vakalar dokunulmaz.
- **Kapatma:** İhlal düzeltilse bile vaka **kapanmaz**, "Düzeltme" satırı doldurulur. Bu defter emsal-arşividir, iş-listesi değildir.
- **Referans:** Standing #35 (git status baştan sona) · Standing #37 (toplayıcı≠kullanıcı, kaynak-imza) · Standing #38 (SHIM yasağı, dolaylı kural: dolaylı yol yasağı).

*Vezir · Standing #35+#36+#37+#38 · 2026-09-26*
