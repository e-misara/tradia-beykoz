# tradia-beykoz

**Repo:** `e-misara/tradia-beykoz` (PUBLIC — Patron kararı 27 Tem)  
**Sahip:** Misara Group / Tradia  
**Rol:** Vezir (CEO-denetçi) — arşiv sorumluluğu; **çoklu-yazar** repo (Vezir + Üst Akıl doğrudan)  
**Amaç:** Beykoz vakasının tam kanıt-arşivi + her CC'nin kendi tanıtım/öz-analiz belgesi. Üst Akıl bu index'ten çalışır.  
**Standing #31 v1.1 KVKK dış-sınır uyumlu** · yalnız `md/json/png` (istisna: `beykoz_vaka/*.py` analiz scriptleri whitelist)

---

## KURAL

- **Standing #35 (2026-07-28):** Vezir push öncesi `git fetch && git log origin/main` **ZORUNLU** (iş başlangıcında).
- **Standing #36 aday (2026-07-28):** `git commit` atmadan hemen önce **tekrar** `git fetch` — paralel-yazar açığı kapansın.
- **Yeni md üretildiğinde push** (Vezir sorumluluğu).
- **'Eksik tamamla' talepleri Vezir'e / Üst Akıl'a gelir** — CC'ler doğrudan buraya yazmaz.
- **Ham/DB/büyük dosya (>25MB) buraya girmez** — `.gitignore` engel katmanı.
- **Anahtar-token ASLA** — commit öncesi tarama zorunlu.
- **`.py` istisna:** yalnız `beykoz_vaka/**/*.py` (analiz scriptleri).

---

## /beykoz_vaka/ — Beykoz Kapanış + Sürekli-İzlem Arşivi

**Ana giriş:** [`beykoz_master.md`](beykoz_vaka/beykoz_master.md) (SIG6→SIG12 yamalarıyla; SIG12 vaat-defteri son ek)

**Ana görseller:** [`beykoz_isi_haritasi.png`](beykoz_vaka/beykoz_isi_haritasi.png) *(SIG11 vFINAL)* · [`beykoz_arazi_haritasi.png`](beykoz_vaka/beykoz_arazi_haritasi.png) · [`bey15_cubuklu_grafik.png`](beykoz_vaka/bey15_cubuklu_grafik.png) · [`harita_gercek_kisit.png`](beykoz_vaka/harita_gercek_kisit.png) *(MAP35)* · [`harita_gercek_konum.png`](beykoz_vaka/harita_gercek_konum.png) *(MAP35)*

**Karolar (3 sürüm):** [`karolar/`](beykoz_vaka/karolar/) 14 PNG v1 (MAP34) · [`karolar_v2/`](beykoz_vaka/karolar_v2/) 6 PNG v2 (MAP36) · [`karolar_sunum/`](beykoz_vaka/karolar_sunum/) 3 PNG geniş sunum (MAP37)

**Sinyal dosyaları:** [`sinyal_dosyalari/`](beykoz_vaka/sinyal_dosyalari/) — SD-01..06 + şablon (SIG9 standardı)

### FINAL kapanış raporları (9 CC × Beykoz)

| Dosya | Açıklama | Güncelleme |
|---|---|---|
| [`FINAL_cc_analiz_beykoz.md`](beykoz_vaka/FINAL_cc_analiz_beykoz.md) | FINAL — CC-Analiz Beykoz Vaka Kapanış Raporu | 2026-07-27 |
| [`FINAL_cc_basin_beykoz.md`](beykoz_vaka/FINAL_cc_basin_beykoz.md) | BEYKOZ VAKASI · CC-Basın NİHAİ RAPOR (FINAL) | 2026-07-27 |
| [`FINAL_cc_borsa_beykoz.md`](beykoz_vaka/FINAL_cc_borsa_beykoz.md) | BEYKOZ SERMAYE İZİ — CC-BORSA NİHAİ KAPANIŞ RAPORU | 2026-07-27 |
| [`FINAL_cc_finans_beykoz.md`](beykoz_vaka/FINAL_cc_finans_beykoz.md) | CC-FİNANS — BEYKOZ KAPANIŞ RAPORU | 2026-07-28 |
| [`FINAL_cc_ihale_beykoz.md`](beykoz_vaka/FINAL_cc_ihale_beykoz.md) | 🏁 BEYKOZ KAPANIŞ RAPORU — CC-İhale (NİHAİ BEYAN) | 2026-07-27 |
| [`FINAL_cc_sosyal_beykoz.md`](beykoz_vaka/FINAL_cc_sosyal_beykoz.md) | FINAL — CC-Sosyal Beykoz kapanış raporu | 2026-07-27 |
| [`FINAL_cc_tic_beykoz.md`](beykoz_vaka/FINAL_cc_tic_beykoz.md) | FINAL — CC-Tic Beykoz Vakası Nihai Beyan | 2026-07-27 |
| [`FINAL_cc_ttai_beykoz.md`](beykoz_vaka/FINAL_cc_ttai_beykoz.md) | FINAL — Beykoz Kapanış Raporu · CC-TT-AI (Nihai Beyan) | 2026-07-27 |
| [`FINAL_cc_ttmap_beykoz.md`](beykoz_vaka/FINAL_cc_ttmap_beykoz.md) | BEYKOZ KAPANIŞ RAPORU — CC-TT-MAP NİHAİ BEYAN | 2026-07-27 |

### Ana özet + soru bankası (Beykoz + genel) + tip taksonomi + görseller + kamu envanteri

| Dosya | Açıklama | Güncelleme |
|---|---|---|
| [`beykoz_master.md`](beykoz_vaka/beykoz_master.md) | BEYKOZ MASTER DOSYASI v1 | 2026-07-29 |
| [`beykoz_amac_kesisim.md`](beykoz_vaka/beykoz_amac_kesisim.md) | BEYKOZ AMAÇ-KESİŞİM — CC-İhale (İ63) | 2026-07-26 |
| [`beykoz_bakanlik_ayakizi.md`](beykoz_vaka/beykoz_bakanlik_ayakizi.md) | Devletin Beykoz Ayak İzi — Bakanlık × Varlık Haritası (CC-TT-AI TTA100) | 2026-07-27 |
| [`beykoz_cevapsizlar.md`](beykoz_vaka/beykoz_cevapsizlar.md) | Beykoz Cevapsızlar — CC-TT-AI TTA99 (soru bankası × 5-tur çakıştırma) | 2026-07-27 |
| [`beykoz_soru_bankasi.md`](beykoz_vaka/beykoz_soru_bankasi.md) | Beykoz Soru Bankası — CC-TT-AI TTA98 (Görev B) | 2026-07-26 |
| [`soru_bankasi.md`](beykoz_vaka/soru_bankasi.md) | CC-Signals — SORU BANKASI | 2026-07-29 |
| [`beykoz_kamu_2022_2026.md`](beykoz_vaka/beykoz_kamu_2022_2026.md) | BEYKOZ KAMU HARCAMA DÖKÜMÜ 2022→2026 + KIYAS — CC-İhale (İ71) | 2026-07-28 |
| [`tip_taksonomi.md`](beykoz_vaka/tip_taksonomi.md) | Beykoz Mülk Tipi Taksonomisi — CC-Analiz S53 | 2026-07-27 |
| [`tkgm_kesif.md`](beykoz_vaka/tkgm_kesif.md) | TKGM + RESMİ MEKÂNSAL KATMAN KEŞFİ — Beykoz · CC-İhale (İ64) | 2026-07-26 |
| [`beykoz_isi_haritasi.png`](beykoz_vaka/beykoz_isi_haritasi.png) | Beykoz mahalle × ayak ısı haritası (SIG11 vFINAL · 11 ayak) | 2026-07-28 |
| [`beykoz_arazi_haritasi.png`](beykoz_vaka/beykoz_arazi_haritasi.png) | Beykoz arazi kullanım haritası | 2026-07-27 |
| [`bey15_cubuklu_grafik.png`](beykoz_vaka/bey15_cubuklu_grafik.png) | BEY-15 Çubuklu hafriyat grafiği | 2026-07-27 |
| [`harita_gercek_kisit.png`](beykoz_vaka/harita_gercek_kisit.png) | MAP35 · gerçek-geometri kısıt katmanı | 2026-07-28 |
| [`harita_gercek_konum.png`](beykoz_vaka/harita_gercek_konum.png) | MAP35 · gerçek-geometri konum katmanı | 2026-07-28 |

### Sinyal montaj serisi (CC-Signals SIG1→SIG12)

| Dosya | Açıklama | Güncelleme |
|---|---|---|
| [`vaka_beykoz_SIG1_signals.md`](beykoz_vaka/vaka_beykoz_SIG1_signals.md) | CC-Signals · SIG1 — BEYKOZ ISI HARİTASI | 2026-07-26 |
| [`vaka_beykoz_SIG2_signals.md`](beykoz_vaka/vaka_beykoz_SIG2_signals.md) | CC-Signals · SIG2 — BEYKOZ ÖRNEK DOSYA (çift-kanıt) | 2026-07-26 |
| [`vaka_beykoz_SIG3_signals.md`](beykoz_vaka/vaka_beykoz_SIG3_signals.md) | CC-Signals — BEYKOZ ÖRNEK DOSYA: NE AMAÇLA GELİŞİYOR? | 2026-07-26 |
| [`vaka_beykoz_SIG4_montaj.md`](beykoz_vaka/vaka_beykoz_SIG4_montaj.md) | CC-Signals · SIG4 — BEYKOZ MONTAJ (Üst Akıl düzeltmeleri işlenmiş) | 2026-07-27 |
| [`vaka_beykoz_SIG5_sinyal_kaniti.md`](beykoz_vaka/vaka_beykoz_SIG5_sinyal_kaniti.md) | CC-Signals · SIG5 — SİNYAL KANITI | 2026-07-27 |
| [`sig7_21_denetim.md`](beykoz_vaka/sig7_21_denetim.md) | CC-Signals · SIG7 — 21-SIFIR DENETİMİ | 2026-07-28 |
| [`sig8_sinyal_kaniti_v2.md`](beykoz_vaka/sig8_sinyal_kaniti_v2.md) | CC-Signals · SIG8 — SİNYAL KANITI v2 | 2026-07-28 |
| [`sig10_basin_entegre.md`](beykoz_vaka/sig10_basin_entegre.md) | CC-Signals · SIG10 — BASIN ENTEGRE FİNAL | 2026-07-28 |
| [`sig12_vaat_surtunme.md`](beykoz_vaka/sig12_vaat_surtunme.md) | CC-Signals · SIG12 — S96 SON-TUR ENTEGRASYONU | 2026-07-29 |

### CC vaka çıktıları (finans + eski-vaka + Sosyal seri)

| Dosya | Açıklama | Güncelleme |
|---|---|---|
| [`vaka_beykoz_F2_finans.md`](beykoz_vaka/vaka_beykoz_F2_finans.md) | CC-Finans · F2 — BEYKOZ DEĞERLENDİRMESİ | 2026-07-26 |
| [`vaka_beykoz_cc_analiz.md`](beykoz_vaka/vaka_beykoz_cc_analiz.md) | Vaka: Beykoz — CC-Analiz Bulguları | 2026-07-26 |
| [`vaka_beykoz_cc_basin.md`](beykoz_vaka/vaka_beykoz_cc_basin.md) | VAKA · İstanbul/Beykoz Basın İstihbaratı — CC-Basın | 2026-07-25 |
| [`vaka_beykoz_cc_borsa.md`](beykoz_vaka/vaka_beykoz_cc_borsa.md) | BEYKOZ VAKA — CC-Borsa (Sermaye Ayağı) | 2026-07-25 |
| [`vaka_beykoz_cc-ihale.md`](beykoz_vaka/vaka_beykoz_cc-ihale.md) | BEYKOZ KAMU İHALE VAKASI — CC-İhale | 2026-07-25 |
| [`vaka_beykoz_cc_tt_ai.md`](beykoz_vaka/vaka_beykoz_cc_tt_ai.md) | Beykoz Vaka Raporu — CC-TT-AI | 2026-07-25 |
| [`vaka_beykoz_ttmap.md`](beykoz_vaka/vaka_beykoz_ttmap.md) | BEYKOZ VAKA RAPORU — CC-TT-MAP | 2026-07-25 |
| [`vaka_beykoz_cc-sosyal.md`](beykoz_vaka/vaka_beykoz_cc-sosyal.md) | Vaka: Beykoz — CC-Sosyal ana çıktı | 2026-07-25 |
| [`vaka_beykoz_cc-sosyal_S203.md`](beykoz_vaka/vaka_beykoz_cc-sosyal_S203.md) | Vaka: Beykoz — CC-Sosyal S203 | 2026-07-26 |
| [`vaka_beykoz_cc-sosyal_S204.md`](beykoz_vaka/vaka_beykoz_cc-sosyal_S204.md) | Vaka: Beykoz — CC-Sosyal S204 | 2026-07-26 |
| [`vaka_beykoz_cc-sosyal_S205.md`](beykoz_vaka/vaka_beykoz_cc-sosyal_S205.md) | Vaka: Beykoz — CC-Sosyal S205 | 2026-07-26 |
| [`vaka_beykoz_cc-sosyal_S206.md`](beykoz_vaka/vaka_beykoz_cc-sosyal_S206.md) | Vaka: Beykoz — CC-Sosyal S206 | 2026-07-27 |
| [`vaka_beykoz_cc-sosyal_S207.md`](beykoz_vaka/vaka_beykoz_cc-sosyal_S207.md) | Vaka: Beykoz — CC-Sosyal S207 | 2026-07-27 |
| [`vaka_beykoz_cc-sosyal_S208.md`](beykoz_vaka/vaka_beykoz_cc-sosyal_S208.md) | Vaka: Beykoz — CC-Sosyal S208 | 2026-07-27 |
| [`vaka_beykoz_cc-sosyal_SS96.md`](beykoz_vaka/vaka_beykoz_cc-sosyal_SS96.md) | Vaka: Beykoz — CC-Sosyal SS96 | 2026-07-29 |

### CC sprint günlükleri

| Dosya | Açıklama | Güncelleme |
|---|---|---|
| [`cc_analiz_S48.md`](beykoz_vaka/cc_analiz_S48.md) | Vaka: Beykoz — CC-Analiz S48 | 2026-07-26 |
| [`cc_analiz_S49.md`](beykoz_vaka/cc_analiz_S49.md) | Vaka: Beykoz — CC-Analiz S49 (4 Aylık Zaman Serisi + Tam Kapsam) | 2026-07-26 |
| [`cc_analiz_S50.md`](beykoz_vaka/cc_analiz_S50.md) | Vaka: Beykoz — CC-Analiz S50 (Fiyat Bug + Hedonik Tam) | 2026-07-26 |
| [`cc_analiz_S51.md`](beykoz_vaka/cc_analiz_S51.md) | Vaka: Beykoz — CC-Analiz S51 (URL-slug PK + Mahalle-FE + Arşiv Geniş) | 2026-07-27 |
| [`cc_analiz_S52.md`](beykoz_vaka/cc_analiz_S52.md) | Vaka: Beykoz — CC-Analiz S52 (Şema-v2 + Hedonik-v2) | 2026-07-27 |
| [`cc_analiz_S53.md`](beykoz_vaka/cc_analiz_S53.md) | Vaka: Beykoz — CC-Analiz S53 (Emsal v2 · Vaka Kapanış Sprinti) | 2026-07-27 |
| [`cc_analiz_S54.md`](beykoz_vaka/cc_analiz_S54.md) | Vaka: Beykoz — CC-Analiz S54 (21-Mahalle İlan Denetimi) | 2026-07-28 |
| [`cc_analiz_S55.md`](beykoz_vaka/cc_analiz_S55.md) | Vaka: Beykoz — CC-Analiz S55 (Elmalı İlan Profili + Komşu Bant) | 2026-07-28 |
| [`cc_analiz_S55EK.md`](beykoz_vaka/cc_analiz_S55EK.md) | Vaka: Beykoz — CC-Analiz S55-EK (Sıfır Yasağı + Elmalı Yeniden Test) | 2026-07-28 |
| [`cc_analiz_S56.md`](beykoz_vaka/cc_analiz_S56.md) | Vaka: Beykoz — CC-Analiz S56 (Fiyat Doğrulama Turu) | 2026-07-28 |
| [`cc_analiz_S57.md`](beykoz_vaka/cc_analiz_S57.md) | Vaka: Beykoz — CC-Analiz S57 (L2 Fiyat-Arkeolojisi 2010→2026) | 2026-07-29 |
| [`cc_basin_S80.md`](beykoz_vaka/cc_basin_S80.md) | VAKA · İstanbul/Beykoz Basın TAM ARŞİV — CC-Basın S80 | 2026-07-26 |
| [`cc_basin_S81.md`](beykoz_vaka/cc_basin_S81.md) | VAKA · İstanbul/Beykoz Basın EN GENİŞ ARŞİV — CC-Basın S81 | 2026-07-26 |
| [`cc_basin_S82.md`](beykoz_vaka/cc_basin_S82.md) | VAKA · İstanbul/Beykoz AMAÇ-TARAMASI — CC-Basın S82 | 2026-07-26 |
| [`cc_basin_S83.md`](beykoz_vaka/cc_basin_S83.md) | VAKA · Beykoz Belediyesi TAM DÖKÜMAN HASADI — CC-Basın S83 | 2026-07-26 |
| [`cc_basin_S84.md`](beykoz_vaka/cc_basin_S84.md) | VAKA · Beykoz DERİN ARŞİV — CC-Basın S84 | 2026-07-26 |
| [`cc_basin_S85.md`](beykoz_vaka/cc_basin_S85.md) | VAKA · Beykoz OLAY DEFTERİ + BELEDİYE EVRENİ — CC-Basın S85 | 2026-07-27 |
| [`cc_basin_S86A.md`](beykoz_vaka/cc_basin_S86A.md) | VAKA · Beykoz İÇ MESAİ (havuz derinleştirme) — CC-Basın S86-A | 2026-07-27 |
| [`cc_basin_S86B.md`](beykoz_vaka/cc_basin_S86B.md) | VAKA · Beykoz FETCH HATTI DEĞİŞİMİ (terminal hasat) — CC-Basın S86-B | 2026-07-27 |
| [`cc_basin_S87.md`](beykoz_vaka/cc_basin_S87.md) | VAKA · Beykoz DIŞ-TARAMA AÇIKLARI — CC-Basın S87 | 2026-07-27 |
| [`cc_basin_S88.md`](beykoz_vaka/cc_basin_S88.md) | VAKA · Beykoz SOĞUK-21 HEDEFLİ TARAMA — CC-Basın S88 | 2026-07-28 |
| [`cc_basin_S90.md`](beykoz_vaka/cc_basin_S90.md) | VAKA · Beykoz YEREL BASIN ENVANTERİ + SİTEMAP HATTI — CC-Basın S90 | 2026-07-28 |
| [`cc_basin_S91.md`](beykoz_vaka/cc_basin_S91.md) | VAKA · Beykoz S91 · TAM HASAT MİMARİSİ + ISI v1 + RETRO — CC-Basın | 2026-07-28 |
| [`cc_basin_S92.md`](beykoz_vaka/cc_basin_S92.md) | VAKA · Beykoz S92 · MEGA-PROJE RETRO + PATRON SORU SETİ-1 — CC-Basın | 2026-07-28 |
| [`cc_basin_S93.md`](beykoz_vaka/cc_basin_S93.md) | VAKA · Beykoz S93 · TAM-ARŞİV FİNAL TURU — CC-Basın | 2026-07-28 |
| [`cc_basin_S94.md`](beykoz_vaka/cc_basin_S94.md) | VAKA · Beykoz S94 · TEMİZLİK + TATMİN TURU — CC-Basın | 2026-07-28 |
| [`cc_basin_S96.md`](beykoz_vaka/cc_basin_S96.md) | VAKA · Beykoz S96 · SÜZME + 10 LENS + DARALTILMIŞ PAKET — CC-Basın | 2026-07-28 |
| [`cc_borsa_S56.md`](beykoz_vaka/cc_borsa_S56.md) | BEYKOZ SERMAYE DERİNLİK — CC-Borsa S56 | 2026-07-26 |
| [`cc_borsa_S57.md`](beykoz_vaka/cc_borsa_S57.md) | BEYKOZ — CC-Borsa S57: 171,5M$ DOĞRULAMA + EKGYO PDF + PEKER GYO | 2026-07-26 |
| [`cc_borsa_S58.md`](beykoz_vaka/cc_borsa_S58.md) | BEYKOZ — CC-Borsa S58: ÇELİKLER DERİN + EKGYO KONUT ADEDİ + ZAMAN ISI | 2026-07-26 |
| [`cc_borsa_S59.md`](beykoz_vaka/cc_borsa_S59.md) | BEYKOZ — CC-Borsa S59: RİVA VİLLA SAYISI TAHKİM + ÇELİKLER KANCASI | 2026-07-27 |
| [`cc_borsa_S60.md`](beykoz_vaka/cc_borsa_S60.md) | BEYKOZ — CC-Borsa S60: ÖİB + KİT DEVİR ZİNCİRİ (Sanayi Mirası) | 2026-07-27 |
| [`cc_borsa_S61.md`](beykoz_vaka/cc_borsa_S61.md) | BEYKOZ — CC-Borsa S61: ACİL TAHKİM "EKGYO Ortaçeşme 776" GERÇEK Mİ? | 2026-07-27 |
| [`cc_borsa_S96ek.md`](beykoz_vaka/cc_borsa_S96ek.md) | BEYKOZ — CC-Borsa B-S96 SON-TUR EK | 2026-07-29 |
| [`cc_ihale_I61.md`](beykoz_vaka/cc_ihale_I61.md) | BEYKOZ İHALE DERİNLİK + ISI-AYAĞI — CC-İhale (İ61) | 2026-07-26 |
| [`cc_ihale_I62.md`](beykoz_vaka/cc_ihale_I62.md) | BEYKOZ İHALE SON KAT + ÖZEL YAYILIM — CC-İhale (İ62) | 2026-07-26 |
| [`cc_ihale_I63.md`](beykoz_vaka/cc_ihale_I63.md) | BEYKOZ İHALE × GELİŞİM AMACI — CC-İhale (İ63) | 2026-07-26 |
| [`cc_ihale_I65.md`](beykoz_vaka/cc_ihale_I65.md) | BEYKOZ — BELLEK TAKILI: 36 BELİRSİZ PDF ÇÖZÜMÜ · CC-İhale (İ65) | 2026-07-27 |
| [`cc_ihale_I66.md`](beykoz_vaka/cc_ihale_I66.md) | BEYKOZ İMAR REJİMİ HARİTASI — CC-İhale (İ66) | 2026-07-27 |
| [`cc_ihale_I67.md`](beykoz_vaka/cc_ihale_I67.md) | BEYKOZ KAMU TAŞINMAZ ENVANTERİ — Hazine + Vakıf + 2B · CC-İhale (İ67) | 2026-07-27 |
| [`cc_ihale_I69.md`](beykoz_vaka/cc_ihale_I69.md) | BEYKOZ İMAR REJİMİ v3 — YENİ KISIT + DÖNÜŞÜM KATMANLARI · CC-İhale (İ69) | 2026-07-27 |
| [`cc_ihale_I70.md`](beykoz_vaka/cc_ihale_I70.md) | BEYKOZ "GENEL" 115 KAYIT YENİDEN-PARSE — CC-İhale (İ70) | 2026-07-28 |
| [`cc_ihale_I72.md`](beykoz_vaka/cc_ihale_I72.md) | BEYKOZ S96-SON-TUR: SEÇİM-DESENİ + İZ TEYİDİ — CC-İhale (İ72) | 2026-07-29 |
| [`cc_ttai_MAP28_nonkanon_capraz.md`](beykoz_vaka/cc_ttai_MAP28_nonkanon_capraz.md) | Beykoz Landsat — NON-KANON ÇAPRAZ-DOĞRULAMA (CC-TT-AI) | 2026-07-27 |
| [`cc_ttai_TTA96.md`](beykoz_vaka/cc_ttai_TTA96.md) | Beykoz Bina + POI Derinlik — CC-TT-AI TTA96 | 2026-07-26 |
| [`cc_ttai_TTA97.md`](beykoz_vaka/cc_ttai_TTA97.md) | Beykoz Güncel Bina + Kavacık Ofis + Deprem — CC-TT-AI TTA97 | 2026-07-26 |
| [`cc_ttmap_MAP26.md`](beykoz_vaka/cc_ttmap_MAP26.md) | BEYKOZ ARAZİ-BİÇİMİ — EN DERİN ÖLÇÜM · CC-TT-MAP | 2026-07-26 |
| [`cc_ttmap_MAP27.md`](beykoz_vaka/cc_ttmap_MAP27.md) | BEYKOZ — NET=0 DEFEKT DÜZELTMESİ + TAM PİKSEL HARİTASI · CC-TT-MAP | 2026-07-26 |
| [`cc_ttmap_MAP28.md`](beykoz_vaka/cc_ttmap_MAP28.md) | BEYKOZ ZAMAN MAKİNESİ — Landsat NDVI 1985→2025 · CC-TT-MAP | 2026-07-26 |
| [`cc_ttmap_MAP30.md`](beykoz_vaka/cc_ttmap_MAP30.md) | BEYKOZ SENTINEL-1 İNŞAAT-TESPİTİ (ACD) — CC-TT-MAP MAP30 | 2026-07-27 |
| [`cc_ttmap_MAP32.md`](beykoz_vaka/cc_ttmap_MAP32.md) | BEYKOZ ARAZİ FORMU — FİZİKSEL TEMEL KATMANI · CC-TT-MAP MAP32 | 2026-07-27 |
| [`cc_ttmap_MAP34.md`](beykoz_vaka/cc_ttmap_MAP34.md) | BEYKOZ GÖRÜNTÜ FABRİKASI + RİVA BORCU · CC-TT-MAP MAP34 | 2026-07-28 |
| [`cc_ttmap_MAP35.md`](beykoz_vaka/cc_ttmap_MAP35.md) | GERÇEK-GEOMETRİ HARİTA + %8 DOĞRULAMA + MEGA-AKS · CC-TT-MAP MAP35 | 2026-07-28 |
| [`cc_ttmap_MAP36.md`](beykoz_vaka/cc_ttmap_MAP36.md) | BEYKOZ KARO KESKİNLEŞTİRME v2 (sunum-kalite) · CC-TT-MAP MAP36 | 2026-07-28 |
| [`cc_ttmap_MAP37.md`](beykoz_vaka/cc_ttmap_MAP37.md) | BEYKOZ SON-TUR: SUNUM KAROLARI + AFET-RİSK ÇAPRAZI · CC-TT-MAP MAP37 | 2026-07-29 |

### Analiz scriptleri (whitelist)

| Dosya | Açıklama | Güncelleme |
|---|---|---|
| [`isi_haritasi_SIG10.py`](beykoz_vaka/isi_haritasi_SIG10.py) | SIG10 · ısı haritası (basın entegre 11-ayak) | 2026-07-28 |
| [`isi_haritasi_SIG11.py`](beykoz_vaka/isi_haritasi_SIG11.py) | SIG11 · ısı haritası vFINAL (v2r temiz) | 2026-07-28 |
| [`isi_haritasi_SIG8.py`](beykoz_vaka/isi_haritasi_SIG8.py) | SIG8 · ısı haritası scripti | 2026-07-28 |
| [`sig7_denetim.py`](beykoz_vaka/sig7_denetim.py) | SIG7 · 21-sıfır denetim scripti | 2026-07-28 |

### /karolar/ — 14 karo v1 (MAP34)

| Dosya | Karo | Güncelleme |
|---|---|---|
| [`karo_BEY15_942_947.png`](beykoz_vaka/karolar/karo_BEY15_942_947.png) | Karo v1: BEY15_942_947 | 2026-07-28 |
| [`karo_Kundura_Tekel.png`](beykoz_vaka/karolar/karo_Kundura_Tekel.png) | Karo v1: Kundura_Tekel | 2026-07-28 |
| [`karo_camlibahce.png`](beykoz_vaka/karolar/karo_camlibahce.png) | Karo v1: camlibahce | 2026-07-28 |
| [`karo_cubuklu.png`](beykoz_vaka/karolar/karo_cubuklu.png) | Karo v1: cubuklu | 2026-07-28 |
| [`karo_goksu.png`](beykoz_vaka/karolar/karo_goksu.png) | Karo v1: goksu | 2026-07-28 |
| [`karo_goztepe.png`](beykoz_vaka/karolar/karo_goztepe.png) | Karo v1: goztepe | 2026-07-28 |
| [`karo_gumussuyu.png`](beykoz_vaka/karolar/karo_gumussuyu.png) | Karo v1: gumussuyu | 2026-07-28 |
| [`karo_incirkoy.png`](beykoz_vaka/karolar/karo_incirkoy.png) | Karo v1: incirkoy | 2026-07-28 |
| [`karo_kavacik.png`](beykoz_vaka/karolar/karo_kavacik.png) | Karo v1: kavacik | 2026-07-28 |
| [`karo_merkez.png`](beykoz_vaka/karolar/karo_merkez.png) | Karo v1: merkez | 2026-07-28 |
| [`karo_ortacesme.png`](beykoz_vaka/karolar/karo_ortacesme.png) | Karo v1: ortacesme | 2026-07-28 |
| [`karo_pasabahce.png`](beykoz_vaka/karolar/karo_pasabahce.png) | Karo v1: pasabahce | 2026-07-28 |
| [`karo_riva.png`](beykoz_vaka/karolar/karo_riva.png) | Karo v1: riva | 2026-07-28 |
| [`karo_yalikoy.png`](beykoz_vaka/karolar/karo_yalikoy.png) | Karo v1: yalikoy | 2026-07-28 |

### /karolar_v2/ — 6 karo v2 (MAP36)

| Dosya | Karo | Güncelleme |
|---|---|---|
| [`karo2_BEY15.png`](beykoz_vaka/karolar_v2/karo2_BEY15.png) | Karo v2: BEY15 | 2026-07-28 |
| [`karo2_gumussuyu.png`](beykoz_vaka/karolar_v2/karo2_gumussuyu.png) | Karo v2: gumussuyu | 2026-07-28 |
| [`karo2_incirkoy.png`](beykoz_vaka/karolar_v2/karo2_incirkoy.png) | Karo v2: incirkoy | 2026-07-28 |
| [`karo2_kavacik.png`](beykoz_vaka/karolar_v2/karo2_kavacik.png) | Karo v2: kavacik | 2026-07-28 |
| [`karo2_riva.png`](beykoz_vaka/karolar_v2/karo2_riva.png) | Karo v2: riva | 2026-07-28 |
| [`karo2_tokatkoy.png`](beykoz_vaka/karolar_v2/karo2_tokatkoy.png) | Karo v2: tokatkoy | 2026-07-28 |

### /karolar_sunum/ — 3 geniş sunum karosu (MAP37)

| Dosya | Karo | Güncelleme |
|---|---|---|
| [`sunum_BEY15_942_947.png`](beykoz_vaka/karolar_sunum/sunum_BEY15_942_947.png) | Karo sunum (geniş): BEY15_942_947 | 2026-07-29 |
| [`sunum_incirkoy.png`](beykoz_vaka/karolar_sunum/sunum_incirkoy.png) | Karo sunum (geniş): incirkoy | 2026-07-29 |
| [`sunum_riva.png`](beykoz_vaka/karolar_sunum/sunum_riva.png) | Karo sunum (geniş): riva | 2026-07-29 |

### /sinyal_dosyalari/ — Sürekli İzlem Kartları (SIG9)

| Dosya | Açıklama | Güncelleme |
|---|---|---|
| [`SD-01_incirkoy.md`](beykoz_vaka/sinyal_dosyalari/SD-01_incirkoy.md) | SD-01 · İNCİRKÖY — SERMAYE GİRDİ, KAZMA VURULMADI | 2026-07-28 |
| [`SD-02_cubuklu.md`](beykoz_vaka/sinyal_dosyalari/SD-02_cubuklu.md) | SD-02 · ÇUBUKLU — TEK İSİM, İKİ BÖLGE | 2026-07-28 |
| [`SD-03_riva.md`](beykoz_vaka/sinyal_dosyalari/SD-03_riva.md) | SD-03 · RİVA — ÜÇ MEGA PROJE, ÖLÇÜLMEYEN ZEMİN | 2026-07-28 |
| [`SD-04_tokatkoy.md`](beykoz_vaka/sinyal_dosyalari/SD-04_tokatkoy.md) | SD-04 · TOKATKÖY — ZİNCİR TAMAMLANDI, GETİRİ EN DÜŞÜK | 2026-07-28 |
| [`SD-05_riva_yolu_aksi.md`](beykoz_vaka/sinyal_dosyalari/SD-05_riva_yolu_aksi.md) | SD-05 · RİVA YOLU AKSI — 942-947 + 246 PARSEL KÜMESİ | 2026-07-28 |
| [`SD-06_elmali.md`](beykoz_vaka/sinyal_dosyalari/SD-06_elmali.md) | SD-06 · ELMALI — TOPLAMA × KORUMA ÇARPIŞMASI | 2026-07-28 |
| [`SD-SABLON.md`](beykoz_vaka/sinyal_dosyalari/SD-SABLON.md) | SD-XX · <SİNYAL ADI> | 2026-07-28 |

---
## /beykoz_vaka/beykoz_ansiklopedi/ — 45 Mahalle Sözlüğü

**Üreten:** CC-TT-AI (TTA98)  ·  **Ana index:** [`_master.json`](beykoz_vaka/beykoz_ansiklopedi/_master.json)

| Mahalle | Dosya | Güncelleme |
|---|---|---|
| Acarlar | [`acarlar.md`](beykoz_vaka/beykoz_ansiklopedi/acarlar.md) | 2026-07-27 |
| Akbaba | [`akbaba.md`](beykoz_vaka/beykoz_ansiklopedi/akbaba.md) | 2026-07-27 |
| Alibahadir | [`alibahadir.md`](beykoz_vaka/beykoz_ansiklopedi/alibahadir.md) | 2026-07-27 |
| Anadolu Feneri | [`anadolu_feneri.md`](beykoz_vaka/beykoz_ansiklopedi/anadolu_feneri.md) | 2026-07-26 |
| Anadolu Hisari | [`anadolu_hisari.md`](beykoz_vaka/beykoz_ansiklopedi/anadolu_hisari.md) | 2026-07-27 |
| Anadolu Kavagi | [`anadolu_kavagi.md`](beykoz_vaka/beykoz_ansiklopedi/anadolu_kavagi.md) | 2026-07-27 |
| Baklaci | [`baklaci.md`](beykoz_vaka/beykoz_ansiklopedi/baklaci.md) | 2026-07-27 |
| Bozhane | [`bozhane.md`](beykoz_vaka/beykoz_ansiklopedi/bozhane.md) | 2026-07-27 |
| Camlibahce | [`camlibahce.md`](beykoz_vaka/beykoz_ansiklopedi/camlibahce.md) | 2026-07-27 |
| Cengeldere | [`cengeldere.md`](beykoz_vaka/beykoz_ansiklopedi/cengeldere.md) | 2026-07-27 |
| Ciftlik | [`ciftlik.md`](beykoz_vaka/beykoz_ansiklopedi/ciftlik.md) | 2026-07-27 |
| Cigdem | [`cigdem.md`](beykoz_vaka/beykoz_ansiklopedi/cigdem.md) | 2026-07-27 |
| Cubuklu | [`cubuklu.md`](beykoz_vaka/beykoz_ansiklopedi/cubuklu.md) | 2026-07-27 |
| Cumhuriyet | [`cumhuriyet.md`](beykoz_vaka/beykoz_ansiklopedi/cumhuriyet.md) | 2026-07-26 |
| Dereseki | [`dereseki.md`](beykoz_vaka/beykoz_ansiklopedi/dereseki.md) | 2026-07-27 |
| Elmali | [`elmali.md`](beykoz_vaka/beykoz_ansiklopedi/elmali.md) | 2026-07-27 |
| Fatih | [`fatih.md`](beykoz_vaka/beykoz_ansiklopedi/fatih.md) | 2026-07-27 |
| Goksu | [`goksu.md`](beykoz_vaka/beykoz_ansiklopedi/goksu.md) | 2026-07-27 |
| Gollu | [`gollu.md`](beykoz_vaka/beykoz_ansiklopedi/gollu.md) | 2026-07-26 |
| Gorele | [`gorele.md`](beykoz_vaka/beykoz_ansiklopedi/gorele.md) | 2026-07-27 |
| Goztepe | [`goztepe.md`](beykoz_vaka/beykoz_ansiklopedi/goztepe.md) | 2026-07-27 |
| Gumussuyu | [`gumussuyu.md`](beykoz_vaka/beykoz_ansiklopedi/gumussuyu.md) | 2026-07-27 |
| Incirkoy | [`incirkoy.md`](beykoz_vaka/beykoz_ansiklopedi/incirkoy.md) | 2026-07-27 |
| Ishakli | [`ishakli.md`](beykoz_vaka/beykoz_ansiklopedi/ishakli.md) | 2026-07-27 |
| Kanlica | [`kanlica.md`](beykoz_vaka/beykoz_ansiklopedi/kanlica.md) | 2026-07-27 |
| Kavacik | [`kavacik.md`](beykoz_vaka/beykoz_ansiklopedi/kavacik.md) | 2026-07-27 |
| Kaynarca | [`kaynarca.md`](beykoz_vaka/beykoz_ansiklopedi/kaynarca.md) | 2026-07-26 |
| Kilicli | [`kilicli.md`](beykoz_vaka/beykoz_ansiklopedi/kilicli.md) | 2026-07-27 |
| Mahmutsevketpasa | [`mahmutsevketpasa.md`](beykoz_vaka/beykoz_ansiklopedi/mahmutsevketpasa.md) | 2026-07-26 |
| Merkez | [`merkez.md`](beykoz_vaka/beykoz_ansiklopedi/merkez.md) | 2026-07-27 |
| Ogumce | [`ogumce.md`](beykoz_vaka/beykoz_ansiklopedi/ogumce.md) | 2026-07-26 |
| Ornekkoy | [`ornekkoy.md`](beykoz_vaka/beykoz_ansiklopedi/ornekkoy.md) | 2026-07-27 |
| Ortacesme | [`ortacesme.md`](beykoz_vaka/beykoz_ansiklopedi/ortacesme.md) | 2026-07-27 |
| Pasabahce | [`pasabahce.md`](beykoz_vaka/beykoz_ansiklopedi/pasabahce.md) | 2026-07-27 |
| Pasamandira | [`pasamandira.md`](beykoz_vaka/beykoz_ansiklopedi/pasamandira.md) | 2026-07-27 |
| Polonezkoy | [`polonezkoy.md`](beykoz_vaka/beykoz_ansiklopedi/polonezkoy.md) | 2026-07-27 |
| Poyrazkoy | [`poyrazkoy.md`](beykoz_vaka/beykoz_ansiklopedi/poyrazkoy.md) | 2026-07-27 |
| Riva | [`riva.md`](beykoz_vaka/beykoz_ansiklopedi/riva.md) | 2026-07-27 |
| Ruzgarlibahce | [`ruzgarlibahce.md`](beykoz_vaka/beykoz_ansiklopedi/ruzgarlibahce.md) | 2026-07-27 |
| Soguksu | [`soguksu.md`](beykoz_vaka/beykoz_ansiklopedi/soguksu.md) | 2026-07-27 |
| Tokatkoy | [`tokatkoy.md`](beykoz_vaka/beykoz_ansiklopedi/tokatkoy.md) | 2026-07-27 |
| Yalikoy | [`yalikoy.md`](beykoz_vaka/beykoz_ansiklopedi/yalikoy.md) | 2026-07-27 |
| Yavuz Selim | [`yavuz_selim.md`](beykoz_vaka/beykoz_ansiklopedi/yavuz_selim.md) | 2026-07-27 |
| Yeni Mahalle | [`yeni_mahalle.md`](beykoz_vaka/beykoz_ansiklopedi/yeni_mahalle.md) | 2026-07-27 |
| Zerzavatci | [`zerzavatci.md`](beykoz_vaka/beykoz_ansiklopedi/zerzavatci.md) | 2026-07-27 |

---
## /cc/ — Her CC'nin Kendi Tanıtımı

| CC | Dosya | Açıklama | Güncelleme |
|---|---|---|---|
| CC-analiz | [`CC-Analiz_oz_analiz_tam_kapsam_2026-07-13.md`](cc/analiz/CC-Analiz_oz_analiz_tam_kapsam_2026-07-13.md) | CC-Analiz — Öz-Analiz: Tam Kapsam Raporu | 2026-07-15 |
| CC-basin | [`CC-Basin_oz_analiz_tam_kapsam_S62.md`](cc/basin/CC-Basin_oz_analiz_tam_kapsam_S62.md) | CC-BASIN · ÖZ-ANALİZ · TAM KAPSAM | 2026-07-15 |
| CC-borsa | [`CC-Borsa_oz_analiz_tam_kapsam_s51.md`](cc/borsa/CC-Borsa_oz_analiz_tam_kapsam_s51.md) | CC-BORSA — TAM KAPSAM ÖZ-ANALİZ | 2026-07-15 |
| CC-finans | [`README.md`](cc/finans/README.md) | CC-Finans — Tanıtım | 2026-07-27 |
| CC-hafiza | [`CC-Hafıza_oz_analiz_tam_kapsam_2026-07-15.md`](cc/hafiza/CC-Hafıza_oz_analiz_tam_kapsam_2026-07-15.md) | CC-Hafıza — Öz-Analiz Tam Kapsam Raporu | 2026-07-15 |
| CC-ihale | [`CC-Ihale_Oz-Analiz_Tam-Kapsam_2026-07-13.md`](cc/ihale/CC-Ihale_Oz-Analiz_Tam-Kapsam_2026-07-13.md) | CC-İHALE — ÖZ-ANALİZ: TAM KAPSAM RAPORU | 2026-07-15 |
| CC-kasa | [`CC-Kasa_oz_analiz_tam_kapsam_2026-07-13.md`](cc/kasa/CC-Kasa_oz_analiz_tam_kapsam_2026-07-13.md) | CC-KASA — TAM KAPSAM ÖZ-ANALİZ (v1) | 2026-07-15 |
| CC-kitap | [`CC-Kitap_oz-analiz_tam-kapsam_raporu.md`](cc/kitap/CC-Kitap_oz-analiz_tam-kapsam_raporu.md) | CC-Kitap — Tam Kapsam Öz-Analizi | 2026-07-15 |
| CC-signals | [`README.md`](cc/signals/README.md) | CC-Signals — Tanıtım | 2026-07-27 |
| CC-site | [`CC-Site_oz_analiz_2026-06-07.md`](cc/site/CC-Site_oz_analiz_2026-06-07.md) | CC-Site öz-analiz (tam kapsam, 2026-06-07) | 2026-07-15 |
| CC-sosyal | [`CC-Sosyal_oz_analiz_tam_kapsam_2026-07-12.md`](cc/sosyal/CC-Sosyal_oz_analiz_tam_kapsam_2026-07-12.md) | CC-Sosyal öz-analiz tam kapsam (2026-07-12) | 2026-07-15 |
| CC-tic | [`cc_tic_oz_analiz_t116.md`](cc/tic/cc_tic_oz_analiz_t116.md) | CC-Tic Öz-Analiz Raporu — Tam Kapsam (T1 → T116) | 2026-07-15 |
| CC-tt-ai | [`CC-TT-AI_oz_analiz_tam_kapsam_2026-07-13.md`](cc/tt-ai/CC-TT-AI_oz_analiz_tam_kapsam_2026-07-13.md) | CC-TT-AI — ÖZ-ANALİZ: TAM KAPSAM RAPORU | 2026-07-15 |
| CC-tt-map | [`ttmap_oz_analiz_dergi_20260720.md`](cc/tt-map/ttmap_oz_analiz_dergi_20260720.md) | KURUMSAL ZEKÂ BÜLTENİ — CC-TT-MAP BÖLÜMÜ | 2026-07-20 |
| CC-tt-pazarlama | [`CC-TT-Pazarlama_oz_analiz_tam_kapsam_2026-07-15.md`](cc/tt-pazarlama/CC-TT-Pazarlama_oz_analiz_tam_kapsam_2026-07-15.md) | CC-TT-PAZARLAMA — TAM KAPSAM ÖZ-ANALİZ | 2026-07-15 |
| CC-vezir | [`Chat-Vezir_oz_analiz_tam_kapsam_2026-07-15.md`](cc/vezir/Chat-Vezir_oz_analiz_tam_kapsam_2026-07-15.md) | CHAT VEZİR — ÖZ-ANALİZ (Tradia-16 açılış → bugün) | 2026-07-15 |

---
## Disiplin

- **Standing #31 v1.1 (KVKK):** PUBLIC — 'kendimize kanıt' işlevi (Patron 2026-07-27).
- **Standing #35 (2026-07-28):** Vezir push öncesi `git fetch && git log origin/main` **zorunlu** (iş başlangıcında).
- **Standing #36 aday (2026-07-28):** commit-öncesi tekrar-fetch (paralel-yazar açığı).
- **A04 dürüst-negatif · #21-B çift-imza · #24 EK-NOT Türkçe-ek toleransı**
- **V16 dürüst · $0 · dizin-kilidi · doygunluk→yeni-yol**

---

*Bu index otomatik üretildi. Son yenileme: 2026-07-29 (Vezir).*
