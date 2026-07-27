# VAKA · İstanbul/Beykoz Basın TAM ARŞİV — CC-Basın S80

**Tarih:** 2026-07-26 · **Rol:** CC-Basın · **$0** · **A04** · **#21-B (her sayı kaynak-şeffaf)** · **#24 tr-safe** · **#31 KVKK (iç-kullanım)**

Sinyal haberde başlar. Beykoz'un unutulmuş, bırakılmış, devam eden hikâyeleri.

**Tam veri:** [`~/tradia_basin/cikti/vaka_beykoz_basin_S80.json`](../../tradia_basin/cikti/vaka_beykoz_basin_S80.json)  
**Önceki:** [S79](vaka_beykoz_cc_basin.md) · [S78 JSON](../../tradia_basin/cikti/vaka_beykoz_basin_S78.json)

---

## 1) TOPLAM — birleşik özet

| Metrik | Değer | Kaynağı (#21-B) |
|---|---|---|
| Toplam dedupe haber | **54** | JSON `toplam_dedupe` |
| S78 havuz | 12 | tam-tarama SQLite sorgu |
| S79 yerel-hasat (Bel+Gaz) | 19 | WebFetch canlı |
| **S80 yerel-hasat ek** | **23** | 3 yeni WebFetch fetch (meclis, siyaset, yerel-kategori) |
| Yıl aralığı | 2025 (7) + 2026 (39) | JSON `G5_yil_dagilim` |
| En derin yakalanan | **2025-07-06** | Beykoz Gazetesi vapur haberi |
| Mahalle master (Beykoz) | 45 | `mahalle_il_ilce_map_v3_7_dogrulanmis.jsonl` |
| Fetch sayısı (S80) | 6 WebFetch (2 SSL-fail) | Standing #8 nazik-fetch ✅ |

---

## 2) ★ G2 · HABERİN DEVAMI (sinyal-tekrar analizi)

**"Bir kez çıkıp unutulan" ile "sürekli konuşulan" ayrımı** — ikincisi sıcak sinyal.

| # | Konu | Tekrar | Ne konuşuluyor | Kaynağı |
|---|---|---|---|---|
| **1** | **meclis_kararlari_periodik** | **11** | Belediye meclis gündemleri Oca→Haz 2026 (aylık 2 tetik: cumartesi + pazartesi) | Bel. `/haberler?kategori=meclis-kararlari` |
| **2** | **çubuklu_vapur_iptali** ★★★ | **3** | 6 Tem 2025 (2 haber) + 27 Tem 2025 — MHP ilçe muhalefeti + toplumsal tepki | Beykoz Gazetesi 3 farklı URL |
| **3** | **kultur_etkinlik** | 3 | Sinema, Su Sporları, Çayır Festivali (belediye görünürlük) | Bel + Gaz |
| 4 | **riva_metruk_otel_yikimi** | 1 | Metruk otel yıkım kararı 24 Tem 2026 | Beykoz Bel. tek kayıt |
| 5 | **beykoz_hastane_insaati** | 1 | Şahinkaya Cad vinç devrilmesi 8 Tem 2025 | Beykoz Gazetesi |
| 6 | **orman_yangini_cevre** | 1 | MHP ilçe: orman yangını failleri | Beykoz Gazetesi |
| 7 | **sahil_isletme** | 1 | MHP: plaj alkol satışı ruhsat iddiası | Beykoz Gazetesi |
| 8 | cumhuriyetkoy_kooperatif | 1 | Kadın Çiftçiler Kooperatifi ortak-çalışma | Bel |
| 9 | muhtar_toplantisi | 1 | MHP İstanbul Bşk Volkan Yılmaz muhtar buluşması | Beykoz Gazetesi |

**Sıcak sinyal (2 madde):**
- **Çubuklu vapur hattı iptali** (2025-07): tek olay 3 haberde konuşulmuş; MHP muhalefeti + toplumsal tepki + "Neden sessizce kaldırıldı?" — İDO/Şehir Hatları kararı vs. Beykoz halkı çekişmesi. 1 yıl sonra devam eden bir kayıp; ulaşımı doğrudan etkiliyor.
- **Meclis kararları periyodik akış** (Oca→Haz 2026 11 gündem): imar/plan değişikliği gündemleri düzenli çıkıyor; ancak WebFetch listede DETAY YOK, tek-tek fetch S81 borcu.

---

## 3) ★ G3 · SİYASET DEĞİŞİMİ (kritik bulgu)

| Sinyal | Ne | Kaynağı |
|---|---|---|
| ⭐ **"Belediye Başkan VEKİLİ Özlem Vural Gürzel"** | Beykoz Bel.'de görevli başkan **vekil** — asıl seçilmiş başkan görev başında DEĞİL. Neden **DOĞRULANAMADI** (Wikipedia URL 404 + belediye başkan-sayfası 404). | Beykoz Gazetesi başlığı 2026-07-26 |
| MHP muhalefeti aktif ve sık | Emre Çömlekçi 6 haber (2025-07 → 2026-07) — vapur, çevre, çöp, plaj-alkol, orman, Kızılay | 6 URL Beykoz Gazetesi |
| İl-üstü müdahale | MHP İstanbul İl Bşk Volkan Yılmaz Beykoz muhtar buluşması (2026-07-26) — merkez parti Beykoz'a yakın ilgi | 1 URL Beykoz Gazetesi |
| Çok-partili aktör | DEVA (Şenol Korkmaz) + Yeniden Refah (İskender Közen) + MHP + Bel. vekili | 4 farklı parti aktörü |

**Yönetişim sinyali:** Bir belediye başkanının **vekil** üzerinden yönetiliyor olması + muhalefet baskısı yoğunluğu = imar/plan/yatırım kararlarında **YÜKSEK BELİRSİZLİK**. Sunum-yatırımcısı için **DİKKAT çekmeli**.

**Doğrulanmamış (A04):** Asıl başkanın kim olduğu, ne olduğu, vekilliğin ne zamandan beri sürdüğü — bu kaynaklarda **görülmedi**. Wikipedia + resmi belediye başkan-sayfası her ikisi de 404. **Doğrulanmadan yazılamaz** (kural #21-B).

---

## 4) G4 · SAHİL + İŞLETME + AKTÖR İSİMLERİ

### Siyasi aktörler (isim + parti) — 7 isim
| Aktör | Rol | Haber |
|---|---|---|
| **Özlem Vural Gürzel** | Belediye Başkan Vekili | 1 |
| Emre Çömlekçi | MHP Beykoz İlçe Bşk | 6 (en aktif muhalefet) |
| Şenol Korkmaz | DEVA Beykoz İlçe Bşk | 1 |
| İskender Közen | Yeniden Refah Beykoz İlçe Bşk | 1 |
| Volkan Yılmaz | MHP İstanbul İl Bşk | 1 |
| Sevcenur Özcan | Beykoz İlçe Millî Eğitim Müdürü | 1 |
| Selçuk Yıldız | Kültür (Beykoz spor marşı) | 1 |

### Sahil + işletme sinyalleri (havuzda)
| Konu | Ne biliyoruz | Ne bilmiyoruz |
|---|---|---|
| Boğaz sahili işletme | Su Sporları Festivali (12 Tem 2026) — Boğaz'da coşku | Hangi işletmeler ev sahibi? |
| Karadeniz sahili | Riva Metruk Otel yıkım (24 Tem 2026) | Yıkım sonrası imar planı? İşletme sahibi kim? |
| Plaj + alkol | MHP: "Beykoz Plajları alkol satışı ruhsat" iddiası | Hangi plaj? Ruhsat kime verildi? |
| Beykoz-Çubuklu vapur | 3 haber — İDO/Şehir Hatları kararı | Hangi kurum? Sözleşme detayı? |

### Emlak/İnşaat AKTÖR isimleri — **HAVUZDA YOK**
| Ne aradık | Sonuç |
|---|---|
| İnşaat firma adı (hastane inşaatı Şahinkaya Cad) | **BİLİNMİYOR** — Beykoz Gazetesi haberinde firma yok |
| GYO/yatırımcı ismi | **0 hit** havuzda |
| Metruk Otel eski/yeni sahibi (Riva) | **BİLİNMİYOR** |
| Şişecam/Paşabahçe fabrika arazi alıcısı | **0 hit** havuzda (S79 kanıt) |

**Sonuç:** Basın feed'de özel emlak-aktör ismi ÇIKARILAMADI. KAP açıklamaları (Borsa) + tapu-müdürlüğü kayıtları + tica-sicil (Tic) gerekli.

---

## 5) G5 · ZAMAN YOĞUNLUĞU (ivme haritası)

### Yıl dağılımı
| Yıl | Haber | Yoğunluk açıklaması | Kaynağı |
|---|---|---|---|
| 2025 | 7 | Tem-Ağu zirvesi (vapur haberleri + orman yangını) | Beykoz Gazetesi 1-yıl arşivi |
| 2026 | 39 | Meclis kararları 11 + belediye 10 + gazete 6 + havuz 12 | tüm kaynak toplam |

### Aylık — top 6
| Ay | Haber | Ne konuşuldu |
|---|---|---|
| **2026-07** | **19** | Belediye 10 + Gazete + havuz — belediye görünürlük zirvesi |
| **2025-07** | 5 | ★ Çubuklu vapur iptali (3) + hastane vinç + orman yangını — **kriz-zirvesi** |
| 2026-06 | 2 | Meclis 2 gündem |
| 2026-05 | 2 | Meclis 2 gündem |
| 2025-08 | 2 | MHP Çömlekçi + Çayır Festivali |
| 2026-04 | 2 | Meclis 2 gündem |

**Yorum:** 2025-07 gerçek bir **kriz-ivmesi** (vapur iptali + hastane kazası + orman yangını). 2026-07 daha çok "belediye görünürlük" (festival, kooperatif). Basın-yansımasında hastane inşaatı 1 yıl sessiz (devam ediyor mu bilmiyoruz).

### Isı-haritası özü (basın-ayağı)
- **2024** = 0 haber (Basın arşivi bu döneme ulaşmıyor) → **ivme ölçemiyoruz** öncesi/sonrası
- **2016 YSS köprü açılışı** = **erişilemez** (S79-G1 kanıt: 1 hit)
- Elimizde: 2025-07 (kriz zirvesi) → 2026-07 (belediye görünürlük zirvesi). 1 yıllık trend "kriz-sessiz-görünürlük" örüntüsü ama yetersiz veri.

---

## 6) ★ G6 · CEVAPLAYAMADIKLARIM

| # | Soru | Durum | Öneri |
|---|---|---|---|
| C1 | **Beykoz Belediye Başkanı kim, neden vekil?** | **DOĞRULANMADI** | Wikipedia 404 + Bel. sayfası 404 · Alternatif: Anadolu Ajansı arama, YSK sonuçlar arşivi, TBMM haberleri |
| C2 | Vekilin ne zamandan beri | ? | Aynı kaynaklar |
| C3 | Meclis kararı DETAYLARI (imar/plan/ihale) | Başlık var, gövde yok | 11 meclis-gündem URL'sini tek-tek fetch (S81) |
| C4 | Hastane inşaatı **firma adı + proje boyutu** | Bilinmiyor | Tapu + inşaat ruhsatı + KAP tarama (Borsa köprüsü) |
| C5 | Riva Metruk Otel yıkım sonrası imar planı | Bilinmiyor | Bel. meclis kararı sonraki gündem takip |
| C6 | Beykoz plaj alkol ruhsatı — hangi plaj, kim? | İsim yok | Bel. iş-yeri ruhsatı arşivi (halka açık mı?) |
| C7 | Çubuklu vapur iptali kararını hangi kurum verdi | İDO mu Şehir Hatları mı belirsiz | İBB toplu ulaşım dairesi + Şehir Hatları kararları |
| C8 | Şişecam/Paşabahçe fabrika arazi (Beykoz'un en tartışmalı emlak) | **0 hit** hala | KAP-Şişecam açıklamaları (Borsa köprüsü) + AA arşivi |
| C9 | 2016 YSS köprü sonrası Beykoz kuzeyi (Poyrazköy/Riva) etkileri | Havuz 1 hit | Wayback Machine snapshot + AA/İHA arşiv |
| C10 | Boğaz sahili işletmeleri (Kanlıca/Kavacık iş merkezleri) | 0 aktör-ismi | Beykoz-özel gündelik gazete + esnaf odası + ilan-sitesi tarama |
| C11 | Emlak/inşaat özel-firma isimleri | 0 aktör | Tic-sicil (Tic) + tapu-müdürlüğü + yerel emlakçı reklamları |
| C12 | 2024 dönem seçim öncesi/sonrası Beykoz haber ivmesi | 0 haber (arşiv yok) | Beykoz Gazetesi'nde 2024 sayfaları kategori-URL denemesi (S81) |
| C13 | Anadolu Kavağı, Yalıköy, Kanlıca, Göksu vb. **30+ mahalle** | Temas-YOK hala | Beykoz-özel feed birkaç ay veri birikmesi + muhtar açıklamaları |
| C14 | Beykoz'da yabancı-yatırımcı (Fesa/KHALIJDIA hedef) izleri | 0 hit | Turkuaz Kart + belediye yabancı-şirket kayıtları + Fesa CC'lerinin haberleri |

---

## 7) TARİHSEL-DERİNLİK ÖZETİ (kaynak: canlı ölçüm)

| Katman | Derinlik | Kaynağı |
|---|---|---|
| Ulusal medya havuz (gövde+akış) | ~60 gün (2026-05→07) | `MIN(tarih_iso)` DB sorgu |
| **Beykoz Gazetesi arşivi** | **~1 yıl** (2025-07-06 → 2026-07-26) | En eski URL kanıtlı |
| **Beykoz Belediyesi haber arşivi** | 7 ay (2026-01-08 → 2026-07-24) | Meclis kararı ve haber URL'leri |
| Beykoz Belediyesi meclis kararları | 6 ay (Ocak→Haziran 2026) | 11 gündem sayımı |
| **2016 YSS köprü / Kuzey Marmara Otoyol / Şişecam-Paşabahçe** | **ERİŞİLEMEZ** | S79-G1 canlı ölçüm 0-1 hit |

---

## 8) DÜRÜST SINIR (A04 · Standing #31)

- **54 haber** ≠ yatırım-karar dosyası; "yansımanın ikinci-derece çekimi". Boşluklar (bölüm 6) asıl çıktı.
- **Vekillik-nedeni doğrulanmadı** — WebFetch iki kaynak da 404. Kaynak-kanıt olmadan spekülasyon yazmadım. Bu kural #21-A/B uygulaması.
- Uydurulan aktör-ismi, firma-adı YOK. "Şirket şu inşaatı yapıyor" tipinde iddia yazılmadı — havuzda kanıt bulunmadı.
- WebFetch canlı fetch snapshot niteliğinde (2026-07-26). Feed'e entegre değil; S79 aday manifest Patron onayı bekliyor.
- KVKK #31: siyasi aktör-isimleri iç-kullanım; dış-feed'e çıkarken (Fesa/khalijdia paketi) Standing #31 3-katman maskeleme uygulanacak (siyasi aktörler halka-açık isimler ama kişi-hukukuyla aynı sınıfa girmez, ancak sunum kullanımı için Patron kararı).

---

## 9) SUNUMA HAZIRLIK — sıra önerisi

1. **Bu turda hazır:** ★ Çubuklu vapur iptali (SICAK sinyal) + Riva Metruk Otel yıkımı (BÜYÜK proje) + Belediye başkanlık belirsizliği (YÖNETİM RİSKİ) — 3 madde ile sunuma girer
2. **S81 hızlı-yakalama (1-2 gün):** 11 meclis-gündem detay fetch (C3) + Bel başkan doğrulama (C1) + Beykoz Gazetesi 2024/2023 kategori-URL denemesi (C12)
3. **S82 orta-vade:** Şişecam-KAP köprüsü (C8, Borsa CC ile) + Wayback köprü/imar (C9) + Tic-sicil aktör isim (C11)

---

**Standing:** #8 nazik-fetch (6 WebFetch, 4 başarı) · #17 spot-check · #18 üçlü-anahtar (il/ilçe/mahalle ayrı) · **#21-A/B kaynak-kanıt-şeffaf** · **#22 FIFO** · #24 tr-safe · **#31 KVKK iç-kullanım**  
**A04** ✅ (vekillik-nedeni doğrulanmadı diye yazılmadı) · **$0** ✅ · **SİLME-YOK** ✅  
**BITTI** — Standing #13
