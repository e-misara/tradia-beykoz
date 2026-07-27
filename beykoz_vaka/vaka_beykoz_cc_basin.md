# VAKA · İstanbul/Beykoz Basın İstihbaratı — CC-Basın

**Sprint:** S78 + S79 · **Tarih:** 2026-07-25 · **Rol:** CC-Basın · **$0** · **A04** · **#21-B (her sayı kaynak-şeffaf)**

Finansçı yatırım-sunumu için Beykoz'un basın-yansıma özeti.  
**JSON (tam veri):** [`~/tradia_basin/cikti/vaka_beykoz_basin_S79.json`](../../tradia_basin/cikti/vaka_beykoz_basin_S79.json)  
**Manifest aday kaynak envanteri:** [`~/tradia_basin/veri/feeds_manifest_aday_beykoz_S79.json`](../../tradia_basin/veri/feeds_manifest_aday_beykoz_S79.json)

---

## 1) TOPLAM — birleşik özet

| Metrik | Değer | Kaynağı (#21-B) |
|---|---|---|
| Toplam Beykoz-geçen dedupe haber | **31** | `vaka_beykoz_basin_S79.json` `toplam_birlesik` |
| S78 (ulusal havuz) | 12 | S79-G1 tam-tarama sayaç |
| S79 (yerel-hasat) | 19 | Beykoz Bel. 10 + Beykoz Gazetesi 9, WebFetch canlı |
| Yıl aralığı | 2025 (3) + 2026 (28) | JSON `yil_dagilim_birlesik` |
| **En eski yakalanan haber** | **2025-07-27** (Beykoz-Çubuklu vapur) | `beykozgazetesi.com.tr` |
| Mahalle master (Beykoz) | 45 | `mahalle_il_ilce_map_v3_7_dogrulanmis.jsonl` grep il=İstanbul ilce=Beykoz |
| Haber-temas edilen mahalle | 10 (S78: 9 → **+1 Ortaçeşme, +1 Çubuklu, +Riva güç**) | JSON `mahalle_dagilim_birlesik` |
| Temas-YOK mahalle | **35** (%78) | 45 − 10 |
| Beykoz-özel feed (öncesi) | **0** | S78-G4 raporu |
| Beykoz-özel feed (S79 aday) | **2** (Bel. + Gazetesi) | `feeds_manifest_aday_beykoz_S79.json` |

---

## 2) KAYNAK DAĞILIMI

| Kaynak veri | Haber | Not | Kaynağı |
|---|---|---|---|
| gövde_arşiv (haber_govde.db) | 6 | ulusal medya body-metin | `sqlite SELECT ... FROM govde WHERE sonuc='OK' AND baslik/govde LIKE '%eykoz%'` |
| haber_akis.jsonl | 6 | S79-G1 türkçe-ek regex | `grep + json.loads` |
| yerel_hasat_S79 | 19 | 2 site canlı WebFetch | Beykoz Bel + Beykoz Gazetesi |
| havuz jsonl (ek) | 0 | çoğu haber_akis'e aktı, dedupe eledi | glob + grep |

---

## 3) TERİM VURUM (S79-G1 · köprü/otoyol/Şişecam eksen)

| Terim | Hit | Yorum | Kaynağı |
|---|---|---|---|
| beykoz (genel) | 10 | ana kelime | `re.compile r'(?:^|\W)beykoz'` |
| riva | 2 | mahalle | aynı |
| **yavuz sultan selim** | **1** | 10 yıllık büyük olay, tek kayıt | `r'(?:^|\W)yavuz sultan selim'` |
| **3.köprü / üçüncü köprü** | **0** | havuz kapsam-dışı | `r'3\.?\s*köprü|üçüncü\s+köprü'` |
| **kuzey marmara otoyol** | **0** | havuz kapsam-dışı | `r'kuzey marmara'` |
| **şişecam** | **0** | Paşabahçe fabrika arsa satışı yok | `r'şişecam|sisecam'` |
| **paşabahçe (fabrika/arazi)** | **0** | marka-fabrika bağlamı yok | `r'paşabahçe\s+(fabrika|arazi|arsa)'` |
| poyrazköy | 0 | mahalle temas-yok | `r'poyrazköy'` |

**Bulgu (A04):** Türkçe-ek farkındalıklı arama YSS köprü için sadece **1 kayıt** buldu. Bu 10 yıl önceki açılışın **havuz derinliği yüzünden erişilemez** olduğunun deneysel kanıtı.

---

## 4) MAHALLE DAĞILIMI

| Mahalle | Haber | Kaynak |
|---|---|---|
| Cumhuriyet | 5 | 3 haber_akis + 2 yerel |
| **Riva** | **3** ⬆ | S78'de 1 → S79'da 3 (Metruk otel yıkımı) |
| Merkez | 2 | havuz |
| Paşabahçe | 2 | havuz |
| **Ortaçeşme** | **1 (yeni)** ⬆ | S78'de 0 → S79 yerel hasat |
| **Çubuklu** | **1 (yeni)** ⬆ | S78'de 0 → 2025 arabalı vapur hattı haberi |
| Anadolu Hisarı, Soğuksu, Çiğdem, Gümüşsuyu, Polonezköy, Fatih, Yeni Mahalle | 1'er | dağınık |

**Temas-YOK 35 mahalle** (örnek): Kavacık, Anadolu Kavağı, Yalıköy, Kanlıca, Göksu, Küçüksu, Anadoluhisarı, Acarlar, Rüzgarlıbahçe, Poyrazköy, **Anadolufeneri**, Akbaba, Dereseki, Örnekköy, Zerzavatçı, Elmalı, Mahmutşevketpaşa (17 mahalle listelendi, +18).

---

## 5) KATEGORİ DAĞILIMI

| Kategori | S78 | S79 | Delta | Not |
|---|---|---|---|---|
| diger | 11 | 11 | +0 | kural regex sığ |
| kurum_degisikligi | 4 | **5** | +1 | belediye zabıta alımı |
| **ulasim** | **0** | **1** | **+1** ⬆ | Beykoz-Çubuklu vapur (2025-07 yerel) |
| **buyuk_proje** | 2 | 1 | -1 | (dedupe) |
| cevre_orman | 2 | 2 | +0 | fırtına + ilaçlama |
| suc_asayis | 3 | 0 | dedupe | — |
| imar_plan | **0** | **0** | +0 | HALA BOŞ |
| kamu_yatirimi | **0** | **0** | +0 | HALA BOŞ |

**Kritik:** İmar plan + kamu yatırımı **hâlâ 0**. Belediye meclis kararı URL'si (`?kategori=meclis-kararlari`) bulundu ama bu turda hasat edilmedi (S80 borç).

---

## 6) YENİ MANİFEST KAYNAK ENVANTERİ (S79 aday)

| id | Kaynak | Tür | URL | Aktif | Not | Kaynağı |
|---|---|---|---|---|---|---|
| beykoz_bel_haber_arsiv | Beykoz Belediyesi | html_scrape | beykoz.bel.tr/haberler | aday | RSS yok · meclis kararı özel URL var | WebFetch probe 2026-07-25 |
| beykoz_gazetesi | Beykoz Gazetesi | html_scrape | beykozgazetesi.com.tr | aday | 1 yıl geriye ulaşıyor · karma yerel+ulusal | WebFetch probe 2026-07-25 |

**Sonraki adım:** Patron onayı → HTML-scrape modülü yazılıp ana manifest'e entegre → 431+2=433 kaynak.

**SSL-hata olan iki aday** (elenen): beykoz24.com · bogazicigazetesi.com (unable to verify first certificate)

---

## 7) EN DEĞERLİ 5 HABER (yatırım-sunumu için)

| # | Başlık | Tarih | Kaynak | Mahalle | Kategori |
|---|---|---|---|---|---|
| 1 | Riva'da 'Metruk Otel' yıkılıyor | 2026-07-24 | Beykoz Bel. | **Riva** | kurum_deg + buyuk_proje |
| 2 | Beykoz-Çubuklu Arabalı Vapur Hattı Kaldırılması Tepki | 2025-07-27 | Beykoz Gaz. | **Çubuklu** | **ulasim** |
| 3 | Cumhuriyetköy Kadın Çiftçiler Kooperatifi | 2026-07-24 | Beykoz Gaz. | Cumhuriyet | kurum_deg |
| 4 | Ortaçeşme okul güzergâhı kırık ağaç | 2026-07-25 | Beykoz Gaz. | Ortaçeşme | diger |
| 5 | Beykoz fırtına 50+ nokta müdahale | 2026-07-23 | Beykoz Gaz. | — | cevre_orman |

---

## 8) ★ CEVAPLAYAMADIKLARIM (asıl çıktı)

| # | Soru | Cevap durumu | Neden / Öneri |
|---|---|---|---|
| C1 | **YSS Köprüsü 2016 açılışı → Beykoz kuzey etki** | **HAYIR** — havuzda 1 hit | Havuz ~60 gün (2026 Haz-Tem); 10 yıl geriye Wayback Machine + AA arşivi |
| C2 | Kuzey Marmara Otoyolu Beykoz kesişim | **HAYIR** — 0 hit | Aynı — tarihsel derinlik yok |
| C3 | Şişecam/Paşabahçe fabrika arazi satışı (Beykoz'un en tartışmalı emlak) | **HAYIR** — 0 hit | KAP açıklamaları (Borsa tarafı) + Anadolu Ajansı arşiv |
| C4 | Beykoz Belediyesi imar meclis kararları | **KISMEN** — URL bulundu | `beykoz.bel.tr/haberler?kategori=meclis-kararlari` hasadı **S80** |
| C5 | İBB Beykoz duyuruları (metrobüs/vapur) | **BEKLEMEDE** | primer-monitor 35 İBB CKAN dataset var, Beykoz-filtre S80 |
| C6 | Poyrazköy, Kavacık, Anadolu Kavağı, Yalıköy | **HAYIR** — 0 haber | Beykoz-özel feed hala yeni; birkaç ay veri birikimi gerekli |
| C7 | Yalı satışları, GYO değerlendirme, konut fiyat | **HAYIR** — 0 | Emlak Kulisi WAF blok · alt-emlak-portal (arkitera, ekonomist emlak) |
| C8 | Riva/Poyrazköy arazi imar spekülasyonu | **HAYIR** | C1+C3 yakın; yerel muhtarlar/dernek kaynakları |
| C9 | Beykoz orman/SİT alan gelişimi | **HAYIR** — 2 çevre haberi ilaçlama+fırtına | ÇŞB CKAN + Beykoz Orman İşletme Müdürlüğü |

**Tarihsel derinlik özeti (kaynak: canlı ölçüm)**  
| Katman | Derinlik | Kaynak |
|---|---|---|
| Ulusal medya havuzu (gövde+akış) | **~60 gün** | `MIN(tarih_iso)` DB sorgusu |
| Yerel-basın (Beykoz Gazetesi) | **~1 yıl** | 2025-07-27 en eski haber |
| Belediye (Beykoz Bel.) | ~2-3 hafta | 2026-07-09 → 07-24 |
| **2016 köprü dönemi** | **ERİŞİLEMEZ** | ödevimize dair kanıt |

---

## 9) DÜRÜST SINIR (A04 · Standing #31)

- 31 haber ≠ yatırım-karar dosyası; **yansıma resmi**. Boşluklar (bölüm 8) asıl çıktı.
- Uydurma yok. "Metro geliyor" tipinde iddia için havuzda kanıt bulunmadı; yazılmadı.
- Yerel-hasat WebFetch canlı fetch — 2026-07-25 zamanlı, snapshot niteliğinde. Anlık; feed'e entegre değil.
- KVKK (#31): kişi-adı geçen haberlerde (Şenol Korkmaz, Selçuk Yıldız, Emre Çömlekçi, Cemal Yıldız, Beykoz Bel. Başkanı) — bu rapor iç-kullanım · dış-feed'e çıkarken maskeleme uygulanacak.

---

## 10) SUNUMA HAZIRLIK — Patron için sıra

1. **S80 hızlı-yakalama (1-2 gün):** Belediye meclis kararları hasat (C4) + Beykoz Gazetesi 1-yıl arşiv full-tarama (C6, C8'e kısmi yanıt)
2. **S81 orta-vade:** Wayback Machine köprü/imar arşivi (C1, C2) + KAP-Şişecam bağlantı (Borsa köprüsü — C3)
3. **Aynı gün:** Bu rapor + JSON tam-veri finansçıya şeffaf ver, boşluk-listesi Patron kartında

**Öneri:** Sunum yakınsa → **1 + boşluk-şeffaflığı**; zaman varsa **1 → 2**.

---

**Standing:** #8 nazik-fetch ✅ · #17 spot-check ✅ · #18 üçlü-anahtar (il/ilçe/mahalle ayrı) ✅ · #21-B kaynak-şeffaf ✅ · #24 tr-safe ✅ · **#31 KVKK** ✅  
**A04:** ✅ (2016 köprü ERİŞİLEMEZ dürüstçe raporlandı)  
**$0:** ✅  
**SİLME-YOK:** ✅  
**BITTI** — Standing #13
