# KURUMSAL ZEKÂ BÜLTENİ — CC-TT-MAP BÖLÜMÜ

| | |
|---|---|
| **CC adı** | CC-TT-MAP (Görsel-Coğrafi Veri Fabrikası) |
| **Rapor tarihi** | 2026-07-20 |
| **Kapsam** | MAP01 → MAP23 |
| **Üreten** | CC-TT-MAP (kendi kalemimden; Üst Akıl adıma yazmadı) |
| **Dizin** | `~/tradia_ttmap/` |

**Tradia ile ilişkim (kendi sözlerimle):**
Ben Türkiye'nin mahallelerini uzaydan ölçen fabrikayım. Sentinel-2 uydu görüntüsünden her mahalle için deterministik sayılar üretirim: ne kadar yapılaştı, ne kadar yeşil kaldı, yıllar içinde hangi yöne gitti. Kimseye "şu mahalle yatırımlık" demem — o yorum [[project_cc_tt_ai]]'ın işi; ben ona ve Tradia'nın gayrimenkul-zekâsına **ham-gerçeği** beslerim. Kimden beslenirim: [[project_cc_tt_ai]]'ın mahalle-evreninden (32.290 mahalle, salt-okuma) kimlik-anahtarımı alırım; Avrupa'nın Copernicus uydu-programından görüntüyü bedava çekerim. Ürettiğim tek şey **ölçüm**; sattığım şey **güvenilir sayı**.

---

## 1. BAŞLANGIÇ

Doğdum: **2026-07-18**. İlk sprintte elimde şunlar vardı: boş bir dizin, Copernicus/CDSE erişim-anahtarı (üstelik ters-etiketli — access ve secret yer değişmişti, ilk krizim buydu), ve bir hedef cümle: "mahalle bazında yapılaşma-değişimini uydudan ölç." Uydu verisi yoktu, boru-hattı yoktu, tek bir ölçülmüş mahalle yoktu.

İlk somut çıktım: **İstanbul-pilot** — tek bir Sentinel-2 sahnesinden İstanbul mahallelerini kırpıp NDBI (yapılaşma), NDVI (yeşil), NDWI (su) hesaplayan ilk nokta-tablosu. İlk sayı yanlıştı (offset çift-uygulaması yüzünden yeşil %14-72 arası sahte çıkıyordu, BÖLÜM 8'e bak) — ama boru-hattı dönüyordu. *(kanıt: kod/tt_map_fabrika.py, MAP_STATE.md)*

---

## 2. ZAMAN-ÇİZELGESİ · DÖNÜM NOKTALARI

*Tarihler sıkışık: MAP01→MAP23 aralığı 2026-07-18 ile 2026-07-20 arası (~2,5 gün). Sprint-numaraları anlatının omurgası; takvim-günü değil.*

| Sprint | Ne oldu | Dönüm | Kanıt |
|---|---|---|---|
| MAP01-02 | Doğuş, dizin, CDSE-anahtar (ters-etiketli) | — | MAP_STATE.md |
| MAP03 | İlk ölçüm + **offset-hatası yakalandı** | ★ İLK ÖLÇÜM | hata#1, kod oto-seç |
| MAP04-05 | İstanbul-pilot → ulusal-fabrika iskeleti; bant-hızı yanlış-teşhis (0.7→47 MB/s) | ★ FABRİKA | tt_map_fabrika.py |
| MAP10-11 | 2. dalga katman: DEM + WorldCover; **kontaminasyon yakalandı** | çapraz-doğrulama | hata#2, \*_dem/\*_arazi.jsonl |
| MAP11-12 | **NDBI tarım-yanlış-pozitifi** teşhis + WorldCover-düzeltici | ★ 4. HATA-KANONU | hata#3, ndbi_duzelt.py |
| MAP13 | Çok-yıl fabrikası + değişim-metriği; tam-arşiv kararı | ★ ÇOK-YIL FABRİKASI | ttmap_degisim.jsonl |
| MAP14 | **Harici-bellek koptu (gecede 4×)** → guard krizi; İzmir-cephe üretildi (sonradan geçersiz) | ★ KOPMA KRİZİ | hata#4, map_dondu.json |
| MAP16 | **Kendi düzeltmem sahte-trend üretti (İzmir vakası)** → per-mahalle-fix | ★ ÖZ-HATA | hata#5, ndbi_duzelt.py |
| MAP17 | Etiket-şeması 4-seviye ayrımı (⬜ kırsal-N/A / 🔴 askıda) | ★ ŞEMA | kod/etiket.py |
| MAP18 | MPC (Microsoft Planetary Computer) fizibilite | doğrulama-turu | map18_mpc_fizibilite.json |
| MAP19-A/B | Katalog-keşif; **tarihsel-eksen denemesi + kapanışı**; L7-kuralı | ★ TARİHSEL DENEME→RAF | landsat_deney/ARASTIRMA_RAFI.md |
| MAP20 | io-lulc yıllık-çapa ölçümü (anchor-olarak reddedildi) | doğrulama-turu | map20_iolulc_capa_olcum.json |
| MAP21 | İç-sunum belgesi | derleme | SUNUM_TTMAP_20260719.md |
| MAP23 | Bu öz-analiz bölümü | yazım | (bu dosya) |

---

## 3. ÇALIŞMA YOĞUNLUĞU

- **Sprint sayısı:** 23 (MAP01→MAP23). **Takvim:** ~2,5 gün (07-18→07-20).
- **Hızlandığım yer:** çok-yıl fabrikası (MAP13) — checkpoint-idempotent tasarım sayesinde 115 iş-birimi (tile×yıl) tek-akışta işlendi; kapsam %42'den %99'a bu turda sıçradı.
- **Yavaşladığım yer 1 — kopma krizleri (MAP14):** harici-bellek bir gecede 4 kez koptu; her kopma yarım-dosya-riski + guard-yazımı gerektirdi. Sebep: donanım (harici-disk kararsızlığı + şarj-kritiği), benim-kodum değil.
- **Yavaşladığım yer 2 — öz-hata düzeltmesi (MAP16):** kendi NDBI-düzelticimin ürettiği sahte-trendi fark edip per-yıl→per-mahalle yeniden-yazmak bütün değişim-serisini yeniden-hesaplattı. Sebep: benim hatam.
- **Yavaşladığım yer 3 — tarihsel-eksen (MAP19):** iki sprint (A+B) harcandı, sonuç "yapılamaz, rafa"; verimsiz-görünür ama negatif-sonuç da sonuçtur (BÖLÜM 8).

---

## 4. OTOMATİKLEŞEN YAPI

İnsan-müdahalesi olmadan dönen kısımlar *(kanıt: kod/tt_map_fabrika.py, ulusal_kuyruk.py, kuyruk_kos.py)*:

| Bileşen | Ne yapar | İnsan-gerekir-mi |
|---|---|---|
| Ulusal-kuyruk | tile×yıl iş-birimlerini sıraya koyar | Hayır (kuruldu-döner) |
| Checkpoint-idempotent | işlenen birimi işaretler, tekrar-çalışmada atlar | Hayır |
| Scratch-dönüş | indir→scratch→kırp→ham-taşı/sil→scratch-temiz | Hayır |
| TemizDur | kopma/hata'da çökmeden dur, yarım-.part sil | Hayır (kanıtlandı, 404-testi) |
| Yerel/harici-mod | disk-durumuna göre ham-sakla/sil kararı | Config-satırı (bir-kez) |
| Disk-sağlık-kontrolü | her-birim harici-sağlık ölçer, %90'da uyarır | Hayır |
| Fringe-fix | kısmi-kapsamada en-iyi-aday-sahne seçer | Hayır |

**İnsan-gereken:** yeni-il eklemek, config-modu değiştirmek, kanon-değişikliği onayı, donanım (NAS/harici-disk) takmak. Ölçüm-akışının kendisi kuruldu-döner.

---

## 5. ANAYASAM (tetiklediğim / kanona kazandırdığım kurallar)

| Kural | Kaynak | Rolüm |
|---|---|---|
| **Kaynak-karıştırma yasağı (#34 aday)** | MAP18-G3 (MPC↔CDSE ±1.4p sistematik-ofset) | **BENDEN ÇIKTI** — farklı-kaynağı aynı-seride karıştırmak sahte-basamak üretir; MAP19/20'de tekrar-doğrulandı |
| **L7-kanon-kuralı** | MAP19-B | **BENDEN ÇIKTI** — Landsat-7 ETM+ 2003-sonrası kullanılmaz (SLC-off %22 şerit; dense-mahallede -48p sahte) |
| **NDBI-KISITI kanonu** | MAP11-12, MAP17-G2 | **BENDEN ÇIKTI** — NDBI "yapılı"yı değil "su-içeriği-düşük yüzey"i ölçer; WorldCover-çapraz zorunlu |
| **Etiket 4-seviye + ⬜/🔴 ayrımı** | MAP17 | **BENDEN ÇIKTI** — "ölçülemedi" ≠ "ölçülecek-şey-yok" ayrımı kod'a gömüldü |
| Çift-imza (#21-B, Sentinel↔WorldCover) | Standing #21-B (var-olan) | **UYGULADIM** — kendi etiket-şemamın temeli |
| İncek/çift-sayım dersi (#S14) | Standing #S14 (var-olan) | **UYGULADIM** — 3.660 mahalle ≠ 18.842 ölçüm ayrımını hep koruyorum |

*Dürüstlük: #21-B ve #S14 benden çıkmadı, var-olan-kuralı uyguladım. #34/L7/NDBI-KISITI/etiket-ayrımı benim üretimim.*

---

## 6. TAM KAPSAM (kanonik sayılar) — ★ UZLAŞTIRMA

### Kanonik tablo
| Metrik | KANONİK sayı | Kaynak |
|---|---|---|
| Mahalle (2025-ölçülen, benzersiz) | **3.660** | ttmap_nokta.jsonl (OLCULDU, yıl=2025) |
| Ölçüm-kaydı (mahalle × yıl) | **18.842** | ttmap_nokta.jsonl (OLCULDU kayıt) |
| Değişim-kapsamı | **3.623 / 3.660 = %99** | ttmap_degisim.jsonl |
| İş-birimi (tile × yıl) | **115** | ulusal_kuyruk.json |
| ham-arşiv (TT-HAFIZA) | 18.731.577.549 byte / 470 jp2 | disk-ölçüm (MAP14) |
| Etiket | **🟢1.562 / 🟡184 / ⬜1.914** | kod/etiket.py + \*_arazi.jsonl |
| DEM-ölçülen | 3.783 mahalle | \*_dem.jsonl |

### ★ Kapsam uzlaştırma (%99 vs %97)
İki sayı dolaşıyordu. Yerel-dosyadan yeniden-saydım *(ttmap_degisim.jsonl, 3660-küme)*:

| Tanım | Sayı | % |
|---|---|---|
| A) güven≠yok & netfark-dolu | 3.623 | %99 |
| B) dolu_yıl≥3 (A04 sahte-trend-yasağı) | 3.623 | %99 |
| C) A ∧ B | 3.623 | %99 |

**KARAR: KANONİK = 3.623 / %99.** Gerekçe: dolu_yıl-dağılımı (3660'ta 1yıl:4, 2yıl:33, ≥3yıl:3.623) gösteriyor ki A04-katı-tanım (≥3 dolu-yıl) ile gevşek-tanım (güven≠yok) **aynı 3.623'e** iniyor — üç tanım da örtüşüyor, tek-sayı sağlam.
**Dipnot:** Eski **%97 (3.556)** çok-yıl-genişleme TAMAMLANMADAN alınmış ara-snapshot'tı (MAP13-sonrası, kapsam hâlâ artıyordu). Güncel-dosya 3.623 veriyor; 3.556 **aşıldı**, kullanılmaz.

### ★ Etiket uzlaştırma (1.562/184/1.914 vs 1.558/186/1.960)
| Küme | 🟢 | 🟡 | ⬜ | Toplam |
|---|---|---|---|---|
| **KANONİK: 3.660 (2025-benzersiz)** | 1.562 | 184 | 1.914 | **3.660 ✓** |
| Eski: 1.558/186/1.960 | 1.558 | 186 | 1.960 | **3.704 ✗** |

**KARAR: KANONİK = 1.562 / 184 / 1.914** (toplamı tam 3.660'a oturuyor).
**Dipnot:** Eski 1.558/186/1.960 toplamı **3.704** — bu, makullük-elemesi öncesi daha-geniş bir küme üzerinde sayılmıştı (bugünkü 3.770 herhangi-yıl-kümesiyle de tam-örtüşmez). 3.704-set **aşıldı**; kanonik olan 3.660-üzeri sayımdır.

---

## 7. GERÇEK-MALİYET DÜRÜSTLÜĞÜ (envanter, savunma değil)

**7a. CC sprint-maliyetim:** MAP01→MAP23 boyunca **yeni-harcama yapmadım** (0 yeni-abonelik, 0 yeni-API-satın-alma). Kullandığım: Copernicus/CDSE anonim-erişim, MPC anonim-STAC, yerel-CPU, yerel-disk. Kurduğum tek yeni-araç: `pyarrow`+`adlfs` (ücretsiz açık-kaynak python paketleri, MAP19'da yerel-kuruldu).

**7b. Sistem-maliyeti payım (gerçek durum, tahmin-değil):**
| Servis | Durum | Kota / ücretli-noktası |
|---|---|---|
| Copernicus/CDSE (Sentinel-2) | Ücretsiz, açık-veri | 12 TB/ay ücretsiz-indirme sınırı; aşılırsa throttle (para-değil hız) — hattımda 18,7 GB, sınırın çok-altında |
| MPC (Microsoft, fizibilite) | Anonim ücretsiz | İmzalama-API rate-limitli; yoğun-kullanımda API-key gerekebilir. **Ücretli-eşiği bilmiyorum** — ölçmedim |
| ms-buildings / io-lulc | Ücretsiz | lisans-kapısı var (ODbL/CC-BY), para-değil hukuk |
| **NAS / donanım** | **Henüz-alınmadı** | tam-ham-arşiv (~2.5 TB) ön-koşulu; **maliyet payımı bilmiyorum** (donanım-kararı Patron'da) |

**Bağlam-dürüstlüğü:** Sistemin bugüne-kadarki gerçek-masrafı ~3.000 dolar (abonelik+API, bir-kısmı sıfır-faaliyette ödenen). Benim hattım bu masrafın **hangi dilimini** tükettiğini **ölçmedim** — kendi API-çağrılarımın dolar-karşılığını izlemedim, "bilmiyorum" yazıyorum. Kesin-söyleyebildiğim: kendi sprintlerimde yeni-fatura üretmedim; ama üzerinde-durduğum Copernicus/MPC altyapısı bedava-değil-sıfır, sadece-benim-hacmimde-ücretsiz-eşik-altında. "$0" tek-başına yazmak bu gerçeği gizlerdi.

---

## 8. V16 DÜRÜST (3 hata + 3 kazanım)

### 3 HATA
1. **Kendi düzeltme-kodum sahte-trend üretti (İzmir vakası, MAP16):** NDBI-WorldCover-düzelticiyi PER-YIL uyguladım; her-yıla ayrı-eşik uygulanınca kırsal-mahallelerde YAPAY-trend çıktı (İzmir-Bergama 0→%25 sahte-kentleşme). Hatayı fark edip PER-MAHALLE-tutarlı-düz'e çevirdim. **Ders:** düzeltici de veri-üretir, düzeltici de test-edilmeli. *(kanıt: ndbi_duzelt.py yorum-satırları)*
2. **io-lulc'un WC'den üstün olduğu yanlış-çıkarımı (MAP19-B→20):** MAP19-B'de io-lulc'un Çatalca-tarımı doğru-reddetmesine bakıp "io-lulc yıllık-çapa WC-tek-epok'tan üstün" dedim — **tek-vakadan-genelleme**. MAP20'de 3.770-mahalle ölçünce tersine döndü: io-lulc kırsalda +9.3p şişiriyor, anchor-olarak WC'den **kötü**. Kendi önceki-çıkarımımı çürüttüm. **Ders:** bir-vakadan kural-çıkarma.
3. **Tahmin-ettiğim süreler tutmadı:** "ulusal-tam-tarih ~10-15h" dedim (MAP_STATE); ama kopma-krizleri, öz-hata-düzeltmesi ve tarihsel-eksen-sapması yüzünden gerçek-akış öngörülemez-doğrusal-değildi. Süre-tahminlerimi artık yazmıyorum (MAP19-21'de "süre-yazma" kuralını kendime koydum).

### 3 KAZANIM
1. **Çok-yıl fabrikası (MAP13):** tek-sahne-statik-fotoğraftan → 2016-2025 çok-yıl DEĞİŞİM-serisine geçtim. Asıl-ürün (yapılaşma-hızı) buydu; checkpoint-idempotent tasarım 115 iş-birimini insan-müdahalesiz işledi.
2. **Kapsam %42→%99 sıçraması:** MAP13'te değişim-serisi kapsamı %42'ydi; çok-yıl-genişleme sonrası **3.623/3.660 = %99** *(ttmap_degisim.jsonl)*. Türkiye-mahallelerinin neredeyse-tamamı için değişim-yönü artık ölçülü.
3. **Etiket-şeması ayrımı (MAP17):** "ölçülemedi" ile "ölçülecek-kentleşme-yok" karışıyordu; ⬜ kırsal-N/A (1.914) ile 🔴 askıda (0) ayrımını kod'a gömdüm. Türkiye'nin yarısı kırsal-zemin — bunu "eksik-veri" değil "tanım-gereği-N/A" olarak işaretlemek ürünün-dürüstlüğü.

---

## KALICI UYARILAR (raporda durması-zorunlu)
- **MAP14 cephe-tablosunun İZMİR kısmı GEÇERSİZ:** hata#5 (per-yıl-düzeltme) İzmir-cephesini bozmuştu; per-mahalle-fix uygulandı ama eski MAP14-İzmir-cephe-değerlerine güvenilmez. *(MAP_STATE.md kalıcı-not; SUNUM_TTMAP BÖLÜM 6)*
- **Konya-2022 çukuru:** tüm Konya-mahalle 2022-sahnesinde sistematik-düşük; net-artış robust-uç ile korunuyor, 2022-sahne yeniden-çekim-listesinde. *(yeniden_cekim_listesi.json)*
- **Tarihsel-eksen RAFTA:** 2016-öncesi seri ham-NDBI ile üretilemiyor (rafta, silinmez). *(landsat_deney/ARASTIRMA_RAFI.md)*

---
*CC-TT-MAP · $0 sprint (yeni-harcama-yok) · A04 · V16 · SİLME-YOK · #21-B · kaynak-karıştırma-yasağı · kanon-dokunulmadı (yazım-turu, yalnız-okuma).*
