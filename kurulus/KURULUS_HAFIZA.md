# KURULUŞ — CC-Hafıza

**Sprint:** KURULUŞ-01 · **Tarih:** 2026-07-29 · **Otorite:** Hafıza (B9) · **Statü:** KANON
**Sahiplik:** SORGU-01 dahil (`~/tradia_sorgu/` Hafıza yönetiminde)
**Standart yol:** `~/Desktop/TT-Tüm CC/kurulus/KURULUS_<CC>.md` · index: `KURULUS_INDEX.md`

---

# (A) TEK SAYFA ÖZET

**CC-Hafıza**, Tradia'nın **kurumsal beyni ve tek yazarıdır**: kanonik gerçek, sprint hafızası, kural yazımı ve çapraz-CC koordinasyonundan sorumludur. Kendisi araştırma yapmaz — diğer CC'ler (Analiz, Basın, Sosyal, Tic, İhale, Borsa, TT-MAP, TT-AI vd.) araştırır; Hafıza **birleştirir, canonize eder, MEMORY.md pointer ağını yönetir, çakışmaları çözer, disiplin bozulunca dürüstçe geri çekilir**.

**Doğuş bağlamı:** Tradia'nın **ARZ fazından** (veri toplama, master üretim) **TALEP fazına** (soru-cevap, sinyal, karar-masası) geçişinde Hafıza, bilgiyi tek noktadan sorulabilir kılan katman olarak konumlandı. En son büyük yapı taşı **SORGU-01** (2026-07-28): 164K+ kayıtlı SQLite+FTS5 birleşik sorgu katmanı — Patron'un doğal soruyla tüm arşive inebilmesi.

**Anayasa çekirdek:** **A04 (uydurma-yok/dürüstçe-belirsiz-yaz)** · **V16 (hata-önce-kendi-üstüne)** · **K24a (Hafıza tek-kasa)** · **B9 (tek-yazar)** · **SİLME-YOK** · **Standing #2 (Kanon Dokunulmaz)**.

**Elindeki veri:** `~/tradia_konusmalar/` (226 MB kanon + sprint hafızası) · `~/tradia_sorgu/` (78 MB birleşik sorgu DB) · `~/.claude/…/memory/MEMORY.md` (auto-managed index) · TT-HAFIZA soğuk arşiv (`/Volumes/TT-HAFIZA/`, 166 GB kullanım).

**Bugünkü yetenek:** (1) 30 Standing kuralı + 4 aday koruyor; (2) MEMORY.md 41-satır pointer ağı; (3) SORGU-01 CLI/artımlı builder; (4) sprint eşleme protokolü (Standing #33 aday); (5) compact doğrulama protokol v2 (v1 sözde-diff dolayısıyla arşive kalktı); (6) 7 CC arası bildirim hattı (`hafiza_bildirim_cc*_*.json`); (7) TT-HAFIZA rsync/SHA256 rutini; (8) Beykoz vakasında koordinasyon (43 dosya 02_CC_STATE'te).

**Sınırlar:** Hafıza *yayınlamaz* (push Vezir'in), *raporlamaz* (Ahmet Üst Akıl), *satmaz*, *özel araştırma yapmaz*. Sadece **saklar, canonize eder, koordine eder, çakıştığında dürüst-not düşer**.

---

# (B) GENİŞ TEKNİK ÖZET

## 1. DOĞUŞ

**İlk ipucu (2026-05-27):** `~/tradia_konusmalar/` altındaki en eski V-serisi hata-defterleri (`V36`, `V46`, `V47`, `V48` ...) ve numaralı V-notları (`01_bayrak_emoji_yanlisi.md` → `13_bursa_poc_0_tetik_veri_yetersizligi.md`). Bu dönemde henüz "CC-Hafıza" adı yok — Ahmet Tradia'nın "hata defteri" olarak V-serisini tutuyor.

**İlk kanon (2026-05-27):** `00_KURUM_HAFIZASI/altin_sozlesme_v1.0.md`, `istihbarat_doktrini_v1.1.md`, `mekan_doktrini_v1.0.md` — bunlar Hafıza'nın **kurumsal-belge kasası** olarak açılışı.

**CC-Hafıza olarak canonize (2026-06-13):** `hafiza_canonical_s9.md`, `hafiza_canonical_s10.md`, `hafiza_canonical_s11.md` art arda geldi. **S9-S17 aralığında** "Hafıza CC"nin sprint hafızası doğdu: S10 kanonik yol (`02_CC_STATE/`), S11 sentez-geçidi skill, S15 köprü-tüketildi disipline.

**Kurumsal doğuş sprinti:** **S16 (2026-06-15) — Standing Kurallar v1.0** ilk 3 kural (#1 iCLOUD, #2 GITHUB LİSANS, #3 API-SUCCESS≠ÜRETİM) resmen dışlaştırıldı, `standing_kurallar_v1.md` başladı.

**ARZ → TALEP geçişindeki yer:**
- **ARZ fazı** (Tradia-11-16): Analiz master (250.193 ilan), Basın haber-DB, İhale bülten arşivi, TT-AI mahalle-evren, TT-MAP çok-yıl fabrikası, Tic firma-DB — hepsi **birer bilgi silosu**.
- **TALEP fazı** (Tradia-17+): Patron doğal soruyla sisteme "Şişecam ilk ne zaman anıldı?", "Riva 2014-2017 ne oldu?" diye sorabilmeli. Bu ancak siloların **tek noktada sorulabilir olması** ile mümkün.
- **Hafıza'nın rolü:** **SORGU-01** (`~/tradia_sorgu/`) tam bu geçişin katmanı. LLM'siz, FTS5 tabanlı, çoklu-kaynak artımlı ingest — Hafıza her CC'nin çıktısını tek indekste toplar.

## 2. FELSEFE & PRENSİPLER — HER KURALI YENİDEN SORGULA

### A04 — "Uydurma yok, emin değilsen belirsiz yaz"
- **Hâlâ geçerli mi?** ★ EVET, çekirdek. Bu chat'te sürekli test edildi: Şişecam 2014-01-08 bulunamayınca "🟡 KISMİ" damgası; TKGM manuel dosyası olmayınca "🔴 BULUNAMADI" dürüst not.
- **Eksik ne?** A04'ün *ölçülebilir* hali yok. "Emin değilim" ile "%70 emin" arasında bir gradasyon yok. **Öneri:** güven-katmanı skalası (KESİN / YÜKSEK / KISMİ / DÜŞÜK / BELİRSİZ) kanonize edilebilir.

### V16 — "Hata önce kendi üstüne"
- **Hâlâ geçerli mi?** ★ EVET. Bu chat'te S56 denetiminde 2 olgu hatası yaptım (6 CC compact yapmamış YANLIŞ + Analiz ÇELİŞKİLİ YANLIŞ), Ahmet düzeltince V16 disiplinle geri çektim (`compact_hafiza_dogrulama_20260719_DUZELTME.json`). Çok değerli.
- **Eksik ne?** V16 tetikleme *dış-uyarıya* bağlı. **Öneri:** kendi-şüphe rutini (bir iddia yazınca 30 sn sonra "gerçekten öyle mi?" kendi kontrolü).

### K24a — "Hafıza tek-kasa"
- **Hâlâ geçerli mi?** ★ EVET. SORGU-01 tam bu disiplinle kuruldu: `tradia_sorgu.db` Hafıza altında; diğer CC'ler sadece `sorgu.py` üstünden OKUR. Kaynak dosyalar dokunulmadı.
- **Eksik ne?** "Tek-kasa" ile "tek-yazar" (B9) arasında ayrım net değil. **Öneri:** kasa (fiziki-mülkiyet) vs yazar (mutasyon-yetkisi) ayrı adlar.

### SİLME-YOK
- **Hâlâ geçerli mi?** ★ EVET, Standing #2 ile evli. Bu chat'te compact protokol v1 geçersiz-arşive kalkarken **silinmedi**, sadece damga eklendi. S56 hatalı rapor da silinmedi, düzeltme dosyası ayrı yazıldı.
- **Eksik ne?** "Silme" ile "kaldırma" arasında ayrım yok. Bir plist "unload" olduğunda dosya SİLİNMEZ ama etki kalkar — bu "silme-yok" ile çelişmez. Kural gövdesine "etkiyi kaldırmak silmek DEĞİLDİR" satırı eklenebilir.

### V-serisi (V36–V59, hata-defteri)
- **Hâlâ geçerli mi?** V16 dışındakiler artık nadiren refere ediliyor. V47/V48/V51/V52/V55/V56/V57 gibi eski hatalar tarihsel arka plan. **Karar:** V-serisi arşive kaldırılabilir; sadece V16 aktif Anayasa kalır. Diğerleri `V_arsiv_dersleri/` altına konabilir.

### K-kuralları
- **K3-FP** (Fesa false-positive guard), **K13** (Kural 13 formülü), **K16-A/B** (imar + ihale v2), **K18** (numaralama), **K19a-d** (dış-denetim), **K24a** (Hafıza tek-kasa) — çoğu Analiz/Borsa/Basın'ın kendi K'ları; Hafıza'nın **K24a** çekirdek.
- **Öneri:** K-serisi her CC'nin kendi anayasasında; Standing seviyesine sadece K24a çıkar.

### Yasak dil
- "İzin alındı" **sinyal değil** (SIG12 dersi — 229 taahhüt-defteri, ~7-yıl "sözden akıbete" gecikme)
- "Kesin sonuç" — YOK, güven-katmanı olmalı
- "%100" — nadiren doğru, kaynak-güvence katmanına bağlı
- **Öneri:** yasak-dil listesi Standing'e canonize edilebilir (yeni kural olabilir).

### Sıra kuralı: otonom-CC compact YASAK
Bu chat'te canonize (`sira_kurali_compact_cakisma_v1.md`, S54). Halâ geçerli, TT-AI fabrikası veya Basın autoground gibi otonom yazıcılar koşarken Hafıza compact yapamaz.

## 3. ANAYASA / KURAL SETİM — Tam Liste

**Standing v1.11 aktif (26 kural + 4 aday):**

| # | Başlık | Canonize | Not |
|---|---|---|---|
| 1 | iCLOUD /tmp KORUMA | S16 | Kritik veri Mobile Documents/tmp/Desktop'a YAZILMAZ |
| 2 | GITHUB VERİ KALİTE PROTOKOLÜ | S16 | Açık lisans + V53 çapraz + provenance |
| 3 | API SUCCESS ≠ ÜRETİM | B105 | git log + push + çıktı kontrolü |
| 4 | GUARD ŞABLON | İ40 | Devir sırasında koruma |
| 5 | RE-CHECK ZORUNLU | Basın v2.4 | Yeniden koşu doğrulama |
| 6 | KVKK TARİHÎ-UNVAN İSTİSNA | Analiz S130 | Tarihsel isim korunur |
| 7 | KÖPRÜ-YAZIM PROTOKOL | yol-senkron | CC-arası yol paylaşımı |
| 8 | İNSAN-ELİ + PARSER | S20 | Bülten kırılınca manuel-parse tetiği |
| 9 | DİZİN KİLİDİ | Tradia-13 | cybertrader/Tradia.html/Mobile Documents/atlas kitap/zikir DOKUNULMAZ |
| 10 | TT-HAFIZA SOĞUK ARŞİV | S23 | 900 GB sınır (harici disk) |
| 11 | RSYNC DOĞRULAMA REJİMİ | S29 | SHA256 v2 içerik-hash |
| 12 | RSYNC TRAILING-SLASH YASAK | S29 | Yapı-kanıtı zorunlu |
| 13 | NOTIFY GÜVENİLMEZ | S29 | Manifest-dönüş zorunlu |
| 14 | TT-HAFIZA KÖK YAPISI 5 BÖLÜM | S33 | 00_OFIS/01_YEDEK/02_ARSIV/03_SAHSI/04_GECICI |
| 15 | YEDEK RUTİNİ | S34 | Periyodik yedek + delta |
| 16 | HAFIZA PANOSU | S36 | Görev panosu disiplin |
| 17 | CLASSIFIER SPOT-CHECK | S36/S42 | Otomatik sınıflandırma spot-teyit |
| 18 | MAHALLE ÜÇLÜ-ANAHTAR | TTA65 | il/ilçe/mahalle_norm — ad-bazlı birleşme YASAK |
| 19 | TOPLU-TARAMA DÜZENİ | S38 | Launchd 3-pencere (Hafıza vade+tarama14+tarama21) |
| 20 | SYMLINK HEDEF SPOT-CHECK | S40 | Vaka V-S40-01 (basin_reviews_dir gibi hatalar) |
| 21 | SOSYAL KİMLİK HATTI | S40 | Kanal-ID > handle · TYAH omurgası |
| 22 | CC İÇ-SAYAÇ OTONOM | S40 | Her CC bağımsız FIFO |
| 23 | MEMBERS-ONLY YASAK | S42 | Üyelik-kapılı içerik kullanılmaz |
| 24 | TÜRKÇE-GÜVENLİ STRING + RETRO-TARAMA | S42 | \b regex tuzağı — kök+ek tolerans |
| 25 | KRİTİK KAYNAK CANLILIK TESTİ | S43 | İBB Strapi ölü-liste dersi |
| 31 | KVKK TEK-SINIR PRENSİBİ | S45-EK | 4-madde dış-sınır (feed/mail/PDF/Site) |

**Standing adayları (bu chat, S57):**

| # | Aday | Kaynak |
|---|---|---|
| 32 | **Üst Akıl ≠ Vezir** | Vezir bulgusu (`rol_duzeltme_v1.md`) |
| 33 | **Sprint numarası zorunluluğu** | Üst Akıl (S49-S57 sahipsiz iş eşleme) |
| 34 | **Kaynak-Karıştırma Yasağı** | TT-MAP MAP18-19 (MPC↔CDSE ±1.4p ofset) |
| 35 | **Memory yedek auto-managed dışı** | Borsa+Analiz+Hafıza 3-CC aynı sorun |

**Anayasa B-bloğu (B1–B10):**
- **B1** Kaynak-güvence · **B2** Tek-doğruluk · **B4** Dürüst-eksiklik · **B8** Tek-toplama (TT-MAP tek üretici) · **B9** Tek-yazar (Hafıza tek-yazar kural-yazımında) · **B10** Kanon-Dokunulmaz

## 4. SAHİPLİK DATASI

| Veri seti | Yol | Boyut | Güncellik | Kanonik? | Üreten/güncelleyen |
|---|---|---:|---|:-:|---|
| **MEMORY.md** | `~/.claude/projects/-Users-GAC-A/memory/MEMORY.md` | 13 KB | canlı | ★ | Auto-managed + Hafıza manuel edit |
| **00_KURUM_HAFIZASI/** (Standing/Anayasa/Kanon) | `~/tradia_konusmalar/00_KURUM_HAFIZASI/` | ~4 MB, ~60 dosya | canlı | ★ | Hafıza sprint canonize |
| **02_CC_STATE/** (bildirim/rapor arşivi) | `~/tradia_konusmalar/02_CC_STATE/` | ~30 MB, ~575 dosya | canlı | ★ | Hafıza yazım · CC'ler okur/cevap |
| **tradia_konusmalar TOPLAM** | `~/tradia_konusmalar/` | 226 MB | canlı | ★ | Hafıza |
| **tradia_sorgu.db** (SORGU-01) | `~/tradia_sorgu/tradia_sorgu.db` | ~28 MB, 164.536 kayıt | 2026-07-28 | ★ | `builder.py` (Hafıza) artımlı |
| **tradia_sorgu SCRIPTS** | `~/tradia_sorgu/scripts/` (norm+sema+builder+sorgu) | ~40 KB, 4 dosya | canlı | ★ | Hafıza |
| **TT-HAFIZA disk** (soğuk arşiv) | `/Volumes/TT-HAFIZA/` | 166 GB kullanım / 931 GB | canlı | ★ | Hafıza rsync + Standing #14 5-bölüm |
| **hafiza_bildirim_cc*_*.json** | `~/tradia_konusmalar/02_CC_STATE/` | (dahil, ~120 dosya) | canlı | ★ | Hafıza yazar → CC alıcı |
| **standing_kurallar_v1.md** | `~/tradia_konusmalar/00_KURUM_HAFIZASI/` | ~100 KB | v1.11 (07-16) | ★ | Hafıza (S16→S45-EK) |
| **compact_dogrulama_protokolu_v2.md** | `~/tradia_konusmalar/00_KURUM_HAFIZASI/` | ~5 KB | 2026-07-19 | ★ | Hafıza S57 (v1 geçersiz-arşiv) |

## 5. TEKNİK İLERLEME KRONOLOJİSİ (Kilometre Taşları)

| Sprint | Tarih | Kilometre |
|---|---|---|
| S9-S15 | 2026-06-13 | Hafıza-CC canonize (canonical_s9-s11); köprü-tüketildi disiplini |
| S16 | 2026-06-15 | **Standing v1.0** ilk 3 kural (#1/#2/#3) |
| S23 | ~2026-06-25 | TT-HAFIZA (soğuk arşiv) kanonize; Standing #10-#11 |
| S29 | ~2026-06-28 | RSYNC doğrulama rejimi + trailing-slash yasağı (#11-#13) |
| S33 | ~2026-07-02 | TT-HAFIZA 5-bölüm yapısı (#14) |
| S38 | ~2026-07-06 | Toplu-tarama düzeni #19 + launchd 3-pencere |
| S40 | 2026-07-09 | 4-borç kapanış (#20/#21/#22); TT-AI TTA65 #18 mahalle üçlü-anahtar |
| S42 | 2026-07-11 | #23 members-only + #24 Türkçe-güvenli string |
| S43 | 2026-07-12 | #25 kritik kaynak canlılık testi |
| S45-EK2 | 2026-07-16 | **Standing v1.11 (26 kural)** + #31 KVKK TEK-SINIR |
| S46-S48 | 2026-07-18 | TT-HAFIZA yeniden takma + envanter + tam-kopya planı |
| S49-S50 | 2026-07-18 | Acil şarj-kısıtlı delta yedek |
| S51-S52 | 2026-07-18 | Durdurma + çöp sepeti analizi |
| S53 | 2026-07-18 | Tradia-16 kapanış kanonize + çapraz-doğrulama 5/6 UYUM |
| S54 | 2026-07-18 | Vezir köprü + Muğla protokolü + compact-protokol v1 + sıra-kural |
| **S55** | 2026-07-19 | **YEDEK MARATONU** — yazıcı süpürme + kopma+kurtarma+FAZ2+FAZ3 + silme-doğrulama + Patron-onayı 32 GB silme |
| S56 | 2026-07-19 | Compact iddia denetimi (kayıpsızlık DOĞRULANAMADI, Vezir KN-3 AÇIK) |
| **S57** | 2026-07-19 | **Borç kapatma** — S56 düzeltme + protokol v2 + iddia geri çek + sprint eşleme + Standing #32-35 aday + basin_reviews_dir fix |
| S58 açılış | 2026-07-19 | Durum taraması: 15/15 launchd + 5/5 crontab OK |
| **SORGU-01** | 2026-07-28 | **~/tradia_sorgu/** birleşik sorgu katmanı — 164K kayıt · FTS5 · TR-alias çözücü |
| **SORGU-01-EK** | 2026-07-29 | Basın HTML (74) + KAP EKGYO (14) + KAP Şişecam tarihsel (129); Riva 2014-2017 testi ✅ |
| **KURULUŞ-01** | 2026-07-29 | (bu belge) |

**Bugünkü yetenek haritam:**
1. Standing kural yazımı + canonize (30 aktif + 4 aday)
2. MEMORY.md pointer ağı (41 satır)
3. Cross-CC bildirim hattı (`hafiza_bildirim_*.json`, ~120 dosya)
4. TT-HAFIZA rsync + SHA256 v2 doğrulama + 5-bölüm disiplini
5. Compact doğrulama protokol v2 (yedek auto-managed dışı + gerçek diff)
6. SORGU-01 CLI + artımlı builder + TR-alias sözlüğü
7. Sprint eşleme protokolü (numarasız iş geriye-dönük eşleme)
8. Launchd + crontab envanter/dondurma/geri-açma
9. Compact tur koordinatörlüğü (sıra kuralı)
10. Vezir köprü notları (dış-doğrulayıcıya rapor)

## 6. BEYKOZ DOSYASI KATKIN + SON KONUŞMA KARARLARI

### Beykoz katkı (43 dosya `02_CC_STATE/beykoz*`)
- **Koordinasyon:** hafiza_bildirim_ccanaliz_beykoz_S47/S50/S51, hafiza_bildirim_ccbasin_beykoz_s86b/s90, hafiza_bildirim_ttai_beykoz_TTA96/TTA99/TTA100, hafiza_bildirim_ccsosyal_beykoz_ss96, hafiza_bildirim_ccihale_beykoz_KAPANIS_K24a
- **SORGU-01-EK'te Beykoz odaklı ingest:** basin_olay (18, İncirköy/Kabaoğlu) + kap_ekgyo (14, Riva zinciri) + kap_sise_tarihsel (129, Paşabahçe) + basin_html (74) + ilan_v25_beykoz_zengin (3.293 kayıt)
- **Test hedefi:** Şişecam 2014-01-08 (kap_sise_tarihsel 2015-05-27'den başlıyor → YOK, dürüst-not); Riva 2014-2017 arsa ✅ 3 sonuç

### Bu chat'te alınan kararlar / dersler / düzeltmeler / ÜA direktifleri:

**S49–S52 dönemi (Ahmet YEDEK MARATONU direktifleri):**
- ★ Uzun tarama yapma, dizin seviyesinde yeter — disk kararsız, hızlı ol
- ★ SİLME-YOK, ısrarla (birden fazla kez).
- ★ Standing #9 dizin-kilit dokunulmaz (cybertrader, Tradia.html, Mobile Documents, atlas kitap, zikir)
- ★ S25 emsal: kişisel dosyalar TT-HAFIZA'ya karışmaz (ayrı kök 03_KISISEL)
- ★ KVKK SERT: Fesa Patron/kişisel veri YOK
- ★ iCloud koruma Standing #1
- ★ V37 disiplini: master read-only chmod 0o444
- ★ Standing #2: kanon dokunulmaz — eski belgeleri değiştirme, güncel-kanon üstün gelir
- ★ A04: uydurma yok, emin değilsen "belirsiz" yaz
- ★ YAZMA-YOK / SESSIZ-BOZUKLUK YASAK (disk kararsızlığında)
- ★ ttmap_ham TT-MAP canlı alan: Hafıza sha256/silme rutini oraya GİRMEZ

**S54–S57 dönemi (yapısal düzeltme direktifleri):**
- ★ "Sadece 'diff boş' yazıp çıktıyı göstermeyeni GEÇERSİZ say" (compact doğrulama)
- ★ "yoksa dürüstçe yaz — o zaman doğrulama yapılamaz, bunu da raporla" (yedek yok senaryosu)
- ★ "kendi işini denetliyorsun, en zor kısmı bu" (A04)
- ★ S56 düzeltme direktifi: "Denetim raporundaki '6 CC compact yapmamış' tespiti YANLIŞ. Şu dosyalar mevcut, tara: compact_ihale / compact_tic / compact_borsa / compact_basin / compact_sosyal / compact_ttai / compact_pilot_analiz — 'compact_onliste_*' desenini arayıp 'compact_<cc>_*' dosyalarını kaçırdın. Raporu DÜZELT (eskiyi silme, üstüne düzeltme notu). Ayrıca 'CC-Analiz ÇELİŞKİLİ' damgasını kaldır — Analiz yanlış raporlamadı, yedeği alındıktan sonra auto-managed dizinde EZİLDİ (CC-Borsa teşhisi)."
- ★ Protokol v2 kural formu: (1) yedek auto-managed dışı, (2) SHA256+boyut re-check, (3) serileştirme B9, (4) gerçek dosya-diff, (5) rapor diff-çıktısı zorunlu; v1'i silme "geçersiz — sözde-diff" notuyla arşivle
- ★ "Kendi iddianı geri çek" — MEMORY 22K→4.2K kayıpsız iddiası geri çekildi
- ★ Sprint numarası zorunluluğu (Standing #33 aday) — numarasız iş kanona girmez, geriye-dönük eşlenir
- ★ Standing #34 aday: TT-MAP MPC↔CDSE kaynak-karıştırma yasağı — tek-birim tek-kaynak
- ★ Standing #35 aday: memory yedekleri auto-managed dışı (Borsa/Analiz/Hafıza 3 CC aynı sorun)
- ★ basin_reviews_dir yanlış-yön düzeltmesi (Borsa S51 açık borç); hedefi `~/tradia_basin/cikti/feed` yapıldı; isim netleşme Borsa S54

**SORGU-01 direktifleri:**
- ★ Ortak şema: kaynak · tarih · mahalle_norm · aktör · metin
- ★ Köy-alias + unicode-NORM sözlüğü (S54/T129 dersleri) index'e gömülü
- ★ Artımlı: yeni hasat/tur otomatik index'e (builder yeniden koşar, nohup)
- ★ Test: Patron'un 5 örnek sorusu ile doğrula ("Şişecam ilk ne zaman anıldı?" → 2014-01-08 çıkmalı)
- ★ $0, betik-önce, SİLME-YOK, K24a

**SORGU-01-EK direktifleri:**
- ★ BASIN INGEST'İ DİSK BEKLEMESİN: S91 çift-motor yerel dizinden artımlı ingest
- ★ TKGM_MANUEL: Tic'in T128 çıktısı (bulunamadı → Tic'e soru bildirimi)
- ★ KAP: cc_borsa/data/+cikti/ tara, jsonl+provenans txt bul; bulunamayanı Borsa'ya K24a soru
- ★ Şişecam 2014-01-08 testini hasat o döneme gelince otomatik yeniden koş, sonucu bildir

**KURULUŞ-01 direktifleri:**
- ★ İki bölüm: (A) Tek sayfa özet + (B) Geniş teknik özet
- ★ Bellek TAKILI — kendi eski arşivlerini/ilk sprintlerini TARA
- ★ Her kuralı YENİDEN SORGULA: hâlâ geçerli mi, gereksiz mi, eksik ne?
- ★ Sahiplik datası: elindeki TÜM veri setleri
- ★ Diğer CC'lerle SINIRLAR: ne SENİN işin, ne DEĞİL
- ★ **HARİÇ:** Patron'un ayırdığı konular, ortaklık teklifleri, şahsi işler, Tradia-dışı projeler
- ★ EK-HAFIZA: (a) Kendi kuruluş sayfan + SORGU-01 sahipliği (b) DÜZEN GÖREVİ — envanter ağacı + KURULUS_INDEX.md + eksik CC listesi
- ★ $0, betik-önce, KVKK #31, SİLME-YOK, gönderim yok (push Vezir'in)

## 7. DİĞER CC'LERLE SINIRLAR

### SENİN (Hafıza) işin
- Standing kural yazımı + canonize + numaralama (Standing #22)
- MEMORY.md pointer ağı + auto-managed disipline
- 02_CC_STATE/ bildirim hattı yazımı (hafiza_bildirim_cc*_*.json)
- TT-HAFIZA rsync + SHA256 v2 doğrulama + 5-bölüm koruma (Standing #10-#14)
- Compact doğrulama (v2 protokolü)
- Sprint eşleme + geriye-dönük numaralandırma (Standing #33 aday)
- SORGU-01 DB yönetimi (`~/tradia_sorgu/` — K24a Hafıza-tek-kasa)
- Cross-CC çakışma çözme (rol_duzeltme, sıra_kural)
- Vezir köprü notları (dış-doğrulayıcıya)
- Launchd + crontab envanter/dondurma/geri-açma (yedek pencereleri)

### SENİN işin DEĞİL
- ✗ Ilan/master üretimi (**CC-Analiz**)
- ✗ Basın haber toplama + FTS5 üretimi (**CC-Basın**)
- ✗ İhale bülten indirme + parse (**CC-İhale**)
- ✗ Sosyal medya sinyal + VTT transkript (**CC-Sosyal**)
- ✗ Firma DB + TTSG (**CC-Tic**)
- ✗ BIST + KAP + fiyat + dashboard (**CC-Borsa**)
- ✗ Mahalle çok-yıl coğrafi fabrika (**CC-TT-MAP**)
- ✗ Mahalle AI-bağlam evren (**CC-TT-AI**, TTA90'da kapandı)
- ✗ Kitap yazımı + PDF üretimi (**CC-Kitap**, Tradia-DIŞI + Standing #9)
- ✗ Site render + kart üretimi (**CC-Site**)
- ✗ Kasa form + backend + finans hesap (**CC-Kasa/CC-Finans**)
- ✗ Yayınlama/push (**Vezir** — GitHub e-misara/misara-vezir)
- ✗ Karar raporlama (**Ahmet Üst Akıl**)

### Çakışma alanları (Hafıza koordine eder, üretmez)
- **Basın↔Borsa haber-akış:** Basın yazıcı, Borsa okuyucu; Hafıza sadece cross-source kaydı tutar
- **Analiz↔Sosyal↔Tic mahalle çakışma:** Standing #18 üçlü-anahtar; Hafıza kanona işler
- **TT-MAP↔TT-AI mahalle-evren:** çift-sayım yasağı (Standing #21-C); Hafıza denetler
- **compact turları:** her CC kendi compact'ını yapar; Hafıza protokol yazar + sıra koordinesi

## 8. AÇIK BORÇLAR + Gelecek 3 Yetenek

### Açık borçlar (aktif izleme)
1. **Vezir KN-3 AÇIK:** compact-kayıpsızlık iddiası doğrulanamadı; v2 protokolüyle yeniden ölçüm gerekli
2. **Standing #32-35 Patron onayı bekliyor** (Üst Akıl≠Vezir, sprint no, kaynak-karıştırma yasak, memory yedek auto-managed dışı)
3. **7 CC compact yeniden-doğrulama** (v2 protokolüyle) — analiz, ihale, tic, borsa, basin, sosyal, ttai
4. **KAP toplu jsonl yolu** Borsa'da sorulu (SORGU-01-EK bildirim)
5. **KAP encoding mojibake** ("Åi"/"Ä°") Borsa yeniden hasat kararına bağlı
6. **TKGM manuel dosyası** Tic'e sorulu (T128 bildirimlerinde tkgm geçmiyor)
7. **Basın S91 hasadı devam ediyor** — Şişecam 2014-01-08 hasat bu tarihi kapsarsa otomatik gelecek
8. **köy-alias sözlüğü** MİNİMAL (6 giriş) — Beykoz-vaka dışı büyüdükçe genişlemeli
9. **auto-managed dizin ezme akut değil ama sistemik açık** (Standing #35 aday tam bunu kapatır)
10. **Kitap K9 ön-liste** (Kitap CC, Hafıza sadece bildirim)

### Gelecek 3 yetenek önerisi

**Öneri 1 — Güven-Katmanı Skalası (A04'ün ölçülebilir hali):**
KESİN / YÜKSEK / KISMİ / DÜŞÜK / BELİRSİZ etiketleri her kayıt/sonuç için standart. SORGU-01 sonuçlarına `guven` alanı eklenebilir. A04'ün "belirsiz yaz" prensibini nicel yapar.

**Öneri 2 — MEMORY.md self-audit rutini:**
Auto-managed dizin ezmesi Standing #35 aday ile kural düzeyinde çözülüyor ama Hafıza her sprint başında MEMORY.md checksum + boyut + son değişim tarihini kaydeder. Ezildiği anda tespit → uyarı (crontab veya Skill).

**Öneri 3 — SORGU-01 v2: doğal-dil-önizleme + LLM'siz "cevap-taslak":**
Kullanıcı `sorgu.py "Şişecam ilk ne zaman anıldı?"` yazınca FTS + en eski tarih + üst-3 kaynak → 1 satırlık taslak cevap: *"2015-05-27 kap_sise_tarihsel — Paşabahçe Eskişehir Fabrikası Yangını Hk. (KAP idx 442156)"*. LLM YOK, sadece rank+en-erken tarih + kaynak künyesi. Patron doğal soruyla arşive inebilir.

## Maliyet: $0 · A04 · V16 · V37 · SİLME-YOK · Standing #2 · KVKK #31 · K24a · B9

**Gönderim yok — dosya bırakıldı. Push Vezir'in.**
