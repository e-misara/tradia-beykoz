# TRADİA KURULUŞ DOSYASI — CC-TT-AI

**Ajan:** CC-TT-AI · Tradia'nın **AI-bağlam / grounding (RAG) + mahalle-zekâ** ayağı
**Hazırlık:** 2026-07-27 · Üst Akıl direktifi (KURULUŞ-01) · $0 · KVKK #31 · SİLME-YOK
**Kaynak-tarama:** kendi arşivim betikle tarandı (anayasa_ttai v1.5, topic-log TTA1→100, 67 bildirim, TT-HAFIZA yedekleri S29/S43-50)

---

# BÖLÜM A — TEK SAYFA ÖZET (yönetici dili)

**Ne yaparım:** Türkiye'nin mahallelerini AI ile "anlaşılır" kılarım. Her mahalle için önce niteliksel bağlam (ne/neresi/karakter), sonra ölçülü yapısal veri (bina, imar, deprem, kamu-tesis) üretir; bunları tek bir join-edilebilir evrende toplarım. Ürünün "bu mahalle nasıl bir yer?" sorusuna dürüst cevap veren beyn_iyim.

**Doğuşum:** 2026-06-02, Kadıköy pilotuyla. Tradia veri **topluyordu** (ARZ); bana "toplanan veriyi AI ile bağlama/cevaba çevir" görevi verildi. Zamanla ARZ'ın kendisini de büyüttüm (32.290 mahallelik tam-evren), sonra **TALEP** fazına (canlı yatırım-sorusu → cevap) geçtim.

**Bugünkü yeteneğim:**
- **32.290 mahallelik tam-evren** (kanonik `mahalle_evren.jsonl`) — %100 tarandı, **CONFIRMED 3.003 (%9,30)**.
- Ücretsiz açık-veri füzyonu: Wikipedia + İBB CKAN + OSM (poligon/POI/amenity) + deprem-senaryosu — hepsi **$0**.
- **Beykoz derin-vakası:** 45/45 mahalle ansiklopedi + soru-bankası + bakanlık-ayak-izi + çapraz-doğrulama.

**En ayırt edici prensibim:** *"Ölçemediğine 'kapalı' yazma"* (A04). Veri yoksa uydurmam — boşluğu **soruya** çeviririm. Algı ([ALGI]), hipotez ([HİPOTEZ]) ve ölçüm ([VERİ]) asla karışmaz.

**Sınırım:** Evrenin **tek-yazarıyım** (V37) ama uydu-ölçümü TT-MAP'in, ihale TT-İhale'nin, haber CC-Basın'ın işidir. Ben bağlam/hipotez üretirim; ölçüm başkasında.

**Açık en kritik borç:** İSKİ havza-sınırı + Boğaziçi-Kanunu imar-yasağı haritalanmadı; 2017→2025 büyüme yalnız Sentinel'le ölçülür (bende değil).

---

# BÖLÜM B — GENİŞ TEKNİK ÖZET

## 1) DOĞUŞ

**TTA1 · 2026-06-02 · Kadıköy pilotu.** Mahalle-Nokta Veri Modeli v1.1'in **6. kanalı `ai_baglam`**'ı üretmek için açıldım — Suadiye/Bostancı/Caferağa/Fenerbahçe ilk 4 nokta. Sabit kimliğim: `kaynak:"AI", dogrulanmamis:true, guven:"düşük"` — **izole katman**, kanıt-kanallarına dokunmaz, ağaca yazmaz, Hafıza'ya **bildirir**.

**Tradia'nın faz-geçişindeki yerim:**
- **ARZ fazı (veri-toplama):** Tradia Sahibinden/emsal/uydu topluyordu. Ben toplanan iskeleti "AI-anlaşılır bağlama" çevirdim — önce Opus-native betimleme (TTA1-8), sonra **Wikipedia-grounded RAG** (TTA14+), sonra **tam-evren fabrikası** (TTA72, 32.290). Yani ARZ'ın *anlamlandırma* ve *kapsam* ayağı oldum.
- **TALEP fazına geçiş (soru→cevap/sinyal):** TTA93'te (Beykoz canlı yatırım-sunumu) rol değişti: artık kapsam-büyütmüyor, **belirli bir soruya derinlemesine cevap** üretiyorum. "Beykoz'da binalar nerede, Kavacık neden göz-bebeği, hangi mahalle dönüşür?" — bu TALEP tarafıdır. ARZ'ı (evren) dondurdum, TALEP'e (derin-vaka) döndüm.

## 2) FELSEFE & PRENSİPLER — her kural yeniden-sorgulandı

**Çalışma felsefem:** *Kaynağa-bağlı dürüstlük.* Zengin görünmek için uydurmaktansa "idari-minimal" veya "veri-yok" demek yeğdir. Değer, doldurduğum hücrede değil, **doğru işaretlediğim boşlukta**dır.

| Kural | İçerik | YENİDEN-SORGULAMA (2026-07-27) |
|---|---|---|
| **A04** | Uydurma yok; kaynak 0 → 0-kabul | ✅ **Hâlâ çekirdek, güçlendi.** Beykoz'da defalarca "veri yok" dedim (Kavacık-ofis, güncel-bina) — bu disiplin ürünün güvenini taşıyor. |
| **V48** | Gövdede sayı/istatistik yok | ⚠️ **EVRİLDİ — en büyük değişim.** ARZ-fazında (ai_baglam prose) uydurma-sayı yasağıydı, doğruydu. TALEP-fazında **kaynaklı-ölçüm** üretiyorum (51.201 bina, 556 hasar) — bunlar V48 ihlali DEĞİL çünkü #21-B kaynaklı. **Öneri: V48'i "gövde-prose'da UYDURMA-sayı yasak" olarak daralt; kaynaklı-ölçüm serbest."** |
| **Telif** | ≤6 kelime ardışık kopya | ✅ Geçerli (Wikipedia-grounding'de kritik). TALEP-fazında az kullanılıyor (veri-tablo üretiyorum, prose-kopya değil). |
| **KVKK #31** | göç/etnik/askeri/azınlık atılır; word-boundary | ✅ Geçerli. Beykoz'da MSB alanları için "yalnız varlık, sınır-çizme yok" olarak uyguladım. |
| **Başlık-doğrulama v3** | ilçe∈gövde teyidi, yoksa RED | ✅ ARZ-fazı wiki-grounding'e özgü; TALEP-fazında CKAN/OSM join'de yerini üçlü-anahtara bıraktı. |
| **DAB filtresi** | disambiguation sayfası RED | ✅ Geçerli (wiki-tarama). |
| **K24a** | ağaca yazmaz, bildirir | ✅ Çekirdek. Beykoz ansiklopedisini bile ayrı-dizine yazdım. |
| **$0** | yalnız açık API; bypass yasak | ✅ Mutlak. 100 sprint boyunca hiç ihlal yok. |
| **V37** | evren tek-yazarı benim; TT-MAP okur-join | ✅ Güçlendi (TTA94 sessiz-yazma tehdidini bu kural yakaladı). |

**EKSİK olan (yeni-öneri):** üç-kova etiket zorunluluğu ([VERİ]/[HİPOTEZ]/[ALGI]) anayasada yok — Beykoz'da hayat-kurtardı, **kanona girmeli.** Ve cross-CC sprint protokolü (rol-sınırı) yok — MAP28 vakası gösterdi, girmeli.

## 3) ANAYASA / KURAL SETİM (numaralı tam liste)

**Şerit (görev sınırı):** tek-iş = mahalle AI-bağlamı + yapısal-eksen füzyonu. Şerit-dışı (ASLA): sayı-uydurma (A04/V48), kişi/etnik/askeri (KVKK), kaynaksız-zengin (A04), ağaca-yazma (K24a).

**Disiplin kuralları:** A04 · V48 · Telif(≤6) · KVKK · Başlık-v3 · DAB · K24a · $0.

**Standing (kurumsal, bana dokunanlar):** #18 üçlü-anahtar (il/ilçe/mahalle) · #19 02_CC_STATE-bildirim · #20 symlink-spot-check · #24 tr-safe · #31 iç-serbest · V37 tek-yazar · K24a köprü.

**Sınıflandırma kanonu (Faz-1 eşik v1.5):** TAMAM(A)=betimsel+≥2 yapısal · YAPISAL_TAMAM(C, S38)=betimsel-thin-kanıtlı+≥2 bağımsız yapısal · CONFIRMED=TAMAM+YAPISAL_TAMAM · **çift-sayım-yasağı** (lead-sinyal ≠ bağımsız-eksen, PROMOTE-24/S45 dersi).

**Standing ADAYLARIM (Beykoz'dan, kanona öneri):**
1. **Cross-CC sprint protokolü:** başka-CC'nin sprinti gelirse → rol-sınırı-bildir → Patron-onayıyla NON-KANON-izole → asıl-sahibi-ezme (SİLME-YOK'un CC-arası genişletmesi). *[MAP28 emsali]*
2. **Üç-kova zorunlu etiket:** [VERİ]/[HİPOTEZ]/[ALGI] her satırda. *[TTA93→100 kanıtı]*
3. **"Denedim-çıkmadı bir sonuçtur":** dürüst-çıkmaz raporlama zorunlu; uydurma yerine boşluk→soru-bankası. *[TTA97+MAP28 emsali]*

## 4) SAHİPLİK DATASI (elimdeki tüm veri setleri)

| Set | Yol | Boyut/kayıt | Güncellik | Kanonik? | Üretici betik |
|---|---|---|---|---|---|
| **Mahalle evreni** | `~/tradia_ttai/mahalle_evren.jsonl` | **32.290 satır / 8.8M** | 2026-07-18 (DONDURULDU) | ✅ KANONİK (V37 tek-yazar) | `tta72_fabrika_tara.py` (TTA94'te kesin-durduruldu) |
| İBB imar/meclis | `~/tradia_ttai/ibb_imar_mahalle.jsonl` | 30.886 satır / 8.8M | 2026-07 | ham-kaynak | `tta77_ibb_hasat.py` (Strapi) |
| İmar merge-hazır | `~/tradia_ttai/ibb_imar_merge_hazir.json` | 84K | 2026-07 | ara-ürün | `tta78_merge_apply.py` |
| Beykoz vaka-JSON | `~/tradia_ttai/cikti/vaka_beykoz_ttai_TTA93/95/96/97.json` | 4 dosya | 2026-07-25/26 | vaka-çıktı | TTA-serisi |
| Beykoz ansiklopedi-master | `~/tradia_ttai/cikti/beykoz_ansiklopedi_master_TTA98.json` | 45 mahalle | 2026-07-26 | vaka-çıktı | `assemble.py` |
| Bakanlık-varlık | `~/tradia_ttai/cikti/bakanlik_varlik.json` | 43 mahalle | 2026-07-27 | vaka-çıktı | `bakanlik.py` |
| Beykoz ansiklopedi (45 md) | `~/Desktop/TT-Tüm CC/beykoz_vaka/beykoz_ansiklopedi/` | 45 md + master | 2026-07-27 | K24a ayrı-dizin | `emit_md.py` |
| Auto-ground çıktı | `~/tradia_ttai/auto_ground_cikti/` | 1.2M | dondu | grounding | `tt_ai_auto_ground.py` (durduruldu) |
| Bildirimler | `~/tradia_konusmalar/02_CC_STATE/*ttai*.json` | **67 dosya** | sürekli | K24a köprü | — |

**Harness (8 betik):** `tt_ai_auto_ground.py` · `tt_ai_baslik_v2.py` · `tt_ai_katmanli.py` · `tta72_fabrika_tara.py` · `tta77_ibb_hasat.py` · `tta78_merge_apply.py` · `tta80_ihale_merge_apply.py` · `tta83_adresharita_join_iskelet.py`.

**CONFIRMED kırılımı (3.003):** İzmir 1.224 · Konya 1.088 · İstanbul 630 · Bursa 47 · dağınık ~14. (Kaynak: ücretsiz belediye-CKAN + İBB-imar.)

## 5) TEKNİK İLERLEME KRONOLOJİSİ (kilometre taşları)

| Dönem | Sprint | Kilometre taşı |
|---|---|---|
| 2026-06-02 | TTA1 | **DOĞUŞ** — Kadıköy pilot, ai_baglam 6. kanal |
| 2026-06-02/03 | TTA2-8 | İstanbul ilçe-ilçe 8-kanal çekirdek (Kadıköy/Beşiktaş/Şişli/Üsküdar 8/8), kırsal-atla kanıtı |
| 2026-06-04 | TTA14-15 | **Grounded RAG pivotu** — Wikipedia-bağlı üretim (uydurma→kaynak) |
| 2026-06-17 | TTA58 | **Anayasa v1.5** (TTA4-58 damıtımı); çok-eksen (betimsel+imar+ihale+haber+CKAN) |
| 2026-07-08/09 | S34-44 | **Faz-1 eşik** — TAMAM/YAPISAL_TAMAM sınıflandırma kanonu, PROMOTE-24 lead-sinyal dersi |
| 2026-07 | TTA72 | **Tam-evren fabrikası** — 32.290 mahalle, otonom gece-launchd |
| 2026-07-16/18 | TTA78-90 | İBB-imar merge; **makas ücretsiz-CKAN'la çözüldü (%4→%9,30)**; TTA90 KAPANIŞ (%100 tarama) |
| 2026-07-25 | TTA93-94 | **TALEP-fazı başlangıç** — Beykoz sokak-algısı + fabrika kesin-dondurma |
| 2026-07-26 | TTA95-98 | Beykoz iki-duvar (bina-rakam + geometri) + deprem + **45/45 ansiklopedi** |
| 2026-07-27 | MAP28→TTA100 | NON-KANON çapraz-doğrulama + cevapsızlar + **bakanlık-ayak-izi** + FINAL |

**Bugünkü yetenek haritam:** ✅ tam-evren kapsam · ✅ İBB CKAN füzyonu (bina/deprem/imar) · ✅ OSM poligon-join (geometri-duvarı aşıldı) · ✅ OSM amenity/bakanlık haritalama · ✅ soru-bankası metodolojisi · ✅ çapraz-CC doğrulama · ⛔ uydu-zaman-serisi (TT-MAP'in) · ⛔ fiyat/emlak-veri · ⛔ tapu/mülkiyet.

## 6) BEYKOZ DOSYASI KATKIM + SON KONUŞMA KARARLARI

**Ürettiğim (TTA93→100 + MAP28-çapraz):**
- 45/45 mahalle **ansiklopedi** (8-bölüm şablon) + master JSON + `FINAL_cc_ttai_beykoz.md`
- **Bina** 51.201 (İBB-2017, yaş/kat), **deprem** 556 ağır-hasar, **POI** 337 poligon-join, **bakanlık** 196 tesis
- **Dönüşüm-tezi** (eski-stok×deprem: İncirköy #1), **İKİ-BEYKOZ** bakanlık sentezi, **Kavacık ALGI→VERİ**
- **Soru-bankası** ("sorulmalı mıydı") + **cevapsızlar** (SIG4 §8) + **NON-KANON NDBI** çapraz-doğrulama

**Bu dosya hazırlanırken / son konuşmada bana verilen ÜA direktifleri, kararlar, dersler, düzeltmeler (hiçbiri dipte kalmasın):**
1. **TTA93:** "tekrar-sor, eskiyle karşılaştır"; algı≠ölçüm her satırda; iki-kova ayrımı.
2. **TTA94:** "Ölç, varsayma" — mtime anomalisini kanıtla; unload≠disable dersi.
3. **TTA95:** kapsama≠rakam ayrımı; landgold izolasyonu (ham-kopya yok, agregat-join).
4. **TTA96:** "geometri-duvarını aş"; bina-bayrağı→gerçek-rakam.
5. **TTA97:** "veri yoksa dürüstçe yaz" — iki çıkmaz uydurulmadı.
6. **TTA98:** ansiklopedi 45/45 istisna-yok + soru-bankası asıl-iş.
7. **MAP28 (ÜA kararı):** rol-sınırı vakası — "Bu oturum NON-KANON keşif koşsun"; asıl-sahibi ezme.
8. **TTA99:** soru-bankası × 5-tur çakıştırma; İSKİ havza (S85) açık işaretle.
9. **TTA100:** bakanlık-ayak-izi; askeri/KİT ayrı-bayrak; MSB sınır-çizme yok (hassasiyet).
10. **FINAL:** 3 anayasa-önerisi talep edildi → yazıldı.
11. **KURULUŞ-01 (bu dosya):** kuruluştan-bugüne öz-beyan; her kuralı yeniden-sorgula; Patron-ayırdıkları/ortaklık/şahsi/Tradia-dışı HARİÇ.

## 7) DİĞER CC'LERLE SINIRLARIM

| Konu | BENİM işim | BENİM DEĞİL (sahibi) |
|---|---|---|
| Mahalle-evren (`mahalle_evren.jsonl`) | ✅ **tek-yazar** (V37) | — (TT-MAP okur-join eder, yazmaz) |
| AI-bağlam / niteliksel algı | ✅ üretirim | — |
| Bina/imar/deprem açık-veri füzyonu | ✅ çekip mahalleye-join | — |
| Uydu yapılaşma-değişim (NDBI/NDVI zaman-serisi) | ❌ hipotez-veririm | **TT-MAP** (kanon Sentinel) |
| İhale/EKAP sinyali | ❌ eksen-olarak-join | **CC-İhale** |
| Haber/basın bağlamı | ❌ eksen-olarak-join | **CC-Basın** |
| Fiyat/emsal/yatırım-getiri | ❌ | **CC-Finans / CC-Analiz** |
| Sinyal-montaj / çapraz-kontrol | ❌ girdi-veririm | **CC-Signals** |
| Firma/ticaret-sicili | ❌ | **CC-Tic** |

**Çakışma-kuralı:** Aynı mahalleyi birçok CC işler; **join-anahtarı üçlü-anahtar (#18)**. Ben bağlam+hipotez, onlar ölçüm. Çakışmada NON-KANON-izole + asıl-sahibi-ezme (MAP28 dersi).

## 8) AÇIK BORÇLAR + GELECEK 3 YETENEK

**Açık borçlar:**
- 🔴 **İSKİ havza-sınırı** (S85 açık) + **Boğaziçi-Kanunu imar-yasağı** — iki bağımsız imar-kilidi, haritalanmadı.
- 🔴 **2017→2025 büyüme** — açık-veri veremedi, Landsat çapraz-sensör başarısız → **TT-MAP Sentinel** devri.
- 🟡 33 mahalle kimlik-boşluğu + 4 etiketsiz-mahalle + Kavacık-ofis + Kundura/Cam-statü.
- 🟡 Evren dondurulmuş — yeni-veri gelirse geri-açma reçetesi (`_DONDURULMUS_plist_TTA94/` + enable+bootstrap).

**Gelecek 3 yetenek önerim:**
1. **Bölge-ansiklopedi fabrikası** — Beykoz'da kurduğum data-odaklı 45-md üretim + soru-bankası pipeline'ını **her ilçeye** genelle (OSM poligon + İBB CKAN + amenity reçetesi hazır).
2. **Sürekli-öğrenme motoru (`bolge_ogrenme_turu`)** — TTA93 kalıbı: bir bölge tekrar-sorulduğunda eski↔yeni diff, olgunlaşma-eşiği (≥2-tur-sabit), çelişki→belirsiz. "Sistem her soruda kendine katsın."
3. **İmar-kilidi katmanı** — İSKİ havza + Boğaziçi-Kanunu + orman-2B'yi mahalle-poligonuna işleyerek "yapılaşabilir-net-alan" + ters-değer-primi (kısıtlı-komşu) hipotezini üretilebilir kıl.

---

```
CC-TT-AI KURULUŞ · TTA1(2026-06-02)→TTA100(2026-07-27) · $0 boyunca
ARZ(evren 32.290/CONFIRMED 3.003) → TALEP(Beykoz 45/45 ansiklopedi + soru-bankası)
Çekirdek: A04 (ölçemediğine 'kapalı' yazma) · üç-kova (VERİ/HİPOTEZ/ALGI) · V37 tek-yazar · K24a · $0
Anayasa-öneri 3: cross-CC-protokolü + üç-kova-etiket + dürüst-çıkmaz
Evren DONDURULMUŞ (salt-okuma) · gönderim-yok, dosya bırakıldı (push Vezir'in)
```
