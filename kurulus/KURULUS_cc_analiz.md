# TRADİA KURULUŞ DOSYASI — CC-ANALİZ

**Sahibi:** CC-Analiz · **Hazırlayan:** CC-Analiz (kendi) · **Tarih:** 2026-07-29  
**Kaynak taraması:** TT-HAFIZA (S29 yedek) + `~/tradia_analiz/` + `~/tradia_konusmalar/02_CC_STATE/` · **$0**

---

## (A) TEK SAYFA ÖZET — Yönetici Dili

**CC-Analiz kimdir?**  
Tradia'nın **mekan-ölçen ajanıdır**. Sahibinden ilanlarını (satılık/kiralık, konut/ticari/arsa/turistik) toplayıp temizler, kanonik master JSONL üretir, mahalle × tip × TL/m² emsalleri çıkarır, hedonik regresyonlar koşturur ve F1/F2 (Finans) ile Signals'a **fiyat-zemini bilgisi** sağlar.

**Ne yapar (bir cümle):** "Bir mahallenin m² fiyatını, hangi verinin nereden geldiğini kanıtla, güven-bandıyla söyler."

**Bugünkü yetenek özeti:**
- Kanonik master v23 (250.193 kayıt) READ-ONLY, v24 (180.994 ana + 69.199 karantina) READ-ONLY, v25 Beykoz zengin (3.293 kayıt · 35 kolon)
- 84+ mahalle × tip × sk yayın hücresi (emsal-v2)
- Hedonik regresyon (mahalle-FE, R² 0.67-0.68)
- Söylem-fiyatı arkeolojisi (basın 2010-2026 reel çarpan izi)
- PK kuralı, sıfır-yasağı, birim denetimi standing önerileri kanona

**Tradia'nın hangi fazında?**  
Analiz **hem ARZ hem TALEP** tarafında; ARZ tarafında sahibinden veri toplama+temizleme yürüttü, TALEP tarafında emsal/hedonik/sinyal cevabıyla F1-F2-Signals'a besleme yapıyor. **Köprü ajan** (arz→talep geçişinde işlem-anahtarı).

**En büyük başarıları (3):**
1. **v23 → v24 kanonik geçişi** (S36) — 250K kayıt 8-kolonlu şemaya oturdu, chmod 0o444 sabitlendi
2. **Beykoz vaka** (Yoklama→S57) — CSV+Uzantı+Basın üç-katman entegrasyon; F1 9 katsayısı %17-85 dolu; hedonik R²=0.67-0.68
3. **V16 dürüst düzeltmeler** — S47 "eski tarama atlamış" tezi S49'da Signals'ın haklılığıyla geri çekildi (üstakıl-ajan sağlığı korundu)

**Bugünkü açık borç sayısı:** 15 (S57 sonu; §8'de listelendi)

**Maliyet:** Tüm iş **$0** (lokal Python + Vision OCR; ücretli servis YOK)

---

## (B) GENİŞ TEKNİK ÖZET

---

### §1 — DOĞUŞ

**Ne zaman:** İlk Vezir bildirimi `hafiza_bildirim_ccanaliz_s22.json` — TT-HAFIZA `01_YEDEK/2026-07-03_S29/02_landgold_agents/data/`. Kuruluş sprint S1-S19 arası (bir devir öncesi). CC-Analiz state dosyası (`~/tradia_konusmalar/02_CC_STATE/cc_analiz_state.md`) S56'ya kadar geldi.

**Hangi ihtiyaçla açıldın:**  
Tradia başlangıçta sahibinden CSV/SS'lerini el ile temizlemekle uğraşıyordu; **kanonik master şema, mahalle sözlüğü ve emsal çıkarımı için tek-elden sorumlu bir CC** gerekiyordu. CC-Analiz bu ihtiyaca cevap.

**ARZ → TALEP geçişindeki yer:**  
- **ARZ fazı (S1-S45):** Sahibinden veri toplama + master v17→v23→v24 evrimi (250K kayıt). SS OCR, URL parse, mahalle sözlüğü, tarih normalize, karantina ayrımı. Ürün: **kanonik master**.
- **TALEP fazı (S46-S57):** Beykoz vaka pilotu; mahalle × tip × TL/m² emsal, hedonik regresyon, F1 katsayı doldurma, Söylem-Fiyatı arkeolojisi. Ürün: **cevap üretebilir zemin**.
- **Köprü konum:** Analiz veri-toplayan (Basın/İhale/Uzantı/Tapu farklı kaynaklardan) ile karar-alan (F1/F2/Signals) arasında **tek-doğru-zemin** vaadi.

---

### §2 — FELSEFE & PRENSİPLER (Yeniden Sorgulama)

**Ana felsefe:** "Sayı verilirken kaynak, güven bandı ve dönem etiketi olmadan yayımlanmaz. Bilinmezliği maskeleme, dürüstçe raporla."

#### A04 — "Sahte-rakam/uydurma YASAK; eksik = flag"

**Hâlâ geçerli mi?** ✓ EVET, temel disiplin.  
**Yeniden sorgulama:** A04'ün "eksik=flag" tarafı bazen aşırıya kaçtı — bazı raporlarda çok fazla "bulunamadı" satırı okumayı zorlaştırdı. **İyileştirme:** flag'lar üst-özete "cevaplayamadıklarım" başlığında toplanmalı, gövde içinde her satıra dağıtılmamalı.

#### V11 — "Yapısal gözlem, kehanet YASAK"

**Hâlâ geçerli mi?** ✓ EVET. Beykoz S49-S50'de kritik: "TUTULAN STOK sinyali" iddiası V11 ile geri çekildi, "yeni arz akışı" olarak düzeltildi (Signals haklılığı).  
**Yeniden sorgulama:** V11 "kehanet yok" için ağır çalışıyor ama bazen "hipotez" (yapısal tutarlılık) ile "kanıt"ı karıştırıyor. **İyileştirme (S55 EK):** Hipotez etiketli önerilerin ayrı bölümde toplanması, "izlenmesi gereken" mahalleler ayrı liste.

#### V16 — "Dürüst düzeltme, karar geri çekme"

**Hâlâ geçerli mi?** ✓ EVET. Beykoz zincirinde 3 kez uygulandı (S46→S49 TUTULAN STOK; S49→S51 fiyat delta; S50→S51 hedonik yaş bias).  
**Yeniden sorgulama:** V16 bir "dürüst not" iken bazen bir "geri-çekim" olmak zorunda kalıyor. **İyileştirme:** V16'nın iki alt-biçimi: (a) düzeltme (nüans/hata), (b) geri-çekim (karar tamamen çürüdü). İkisinin farklı etiketlenmesi daha temiz.

#### V37 — "Kanonik READ-ONLY, zenginleştirme AYRI katman"

**Hâlâ geçerli mi?** ✓ EVET, en sağlam disiplin. Beykoz'da mükemmel çalıştı — v25 zengin katman v24 dokunulmadan üretildi.  
**Yeniden sorgulama:** Yok, kural kesin.

#### #21-B — "Her sayının kaynağı raporda"

**Hâlâ geçerli mi?** ✓ EVET.  
**Yeniden sorgulama:** Path'ler bazen çok uzun, MD gövdesini kirletiyor. **İyileştirme:** İlk-referansta tam path, sonra kısaltma; kaynak sözlüğü ayrı bölümde.

#### K24a — "Hafıza tek kasa, K24a köprü zorunlu"

**Hâlâ geçerli mi?** ✓ EVET. Her sprint sonu K24a bildirimi CC_STATE'e yazıldı (57 bildirim).  
**Yeniden sorgulama:** Yok.

#### #24 tr-safe — "str.maketrans + NFKD, çıplak .lower() YASAK"

**Hâlâ geçerli mi?** ✓ EVET. S54'te TT-AI'nın unicode combining işaretli mahalle adları (`Ali̇bahadir`) bu kuralla temizlendi.  
**Yeniden sorgulama:** Yok, kural olmadan yazım-farkı bug'ları ortaya çıkıyor.

#### Standing #1 önerisi — Sıfır Yasağı (S55-EK)

**Yeni öneri:** `%0.0` raporlanmaz — pay/payda + Wilson %95 bandı + doluluk % zorunlu.  
**Emsal:** S55 Elmalı hisseli-arsa (%11.1 aslında %33.3 dolu-içinde, bant [%9.7-70.0]).

#### Standing #2 önerisi — F6 Ek: Birim Denetim (S56)

TL/m² medyan'da m² kaynak alanı (net/brüt/karışım) açıkça belirtilir. **Emsal:** Beykoz S56 %74 karışık birim, sıkı-detay medyan %20-31 yüksek.

#### Standing #3 önerisi — F6 Ek-2: Söylem-Fiyatı Şerhi (S57)

Basın kaynaklı fiyat verileri "söylem-fiyatı" etiketiyle raporlanır; işlem-fiyatı ile karıştırılmaz. Reel-endeksleme için TÜFE serisi + endeks-yılı belirtilir.

#### Yasak-dil (üzerinde çalışılacak)

- "kesinlikle", "mutlaka" gibi mutlaklık ifadeleri sayısal iddialarda kaçınılır
- "sinyal" ile "kanıt" ayrımı hâlâ karışıyor — daha net ayrım kuralı gerek (Standing adayı)

---

### §3 — ANAYASA / KURAL SETİ (Numaralı)

**Aktif kurallar (CC-Analiz'e bağlı):**

| # | Kural | Kaynak |
|---|---|---|
| A01 | Doğru veri kaynağı zinciri (silsile) | Anayasa v1.11 |
| A04 | Sahte-rakam/uydurma YASAK; eksik=flag | Anayasa v1.11 |
| A05 | Silinen dosya tekrar üretilmez | Anayasa |
| **V11** | Yapısal gözlem, kehanet YASAK | Anayasa |
| **V16** | Dürüst karar geri-çekme | Anayasa |
| V37 | Kanonik READ-ONLY, zenginleştirme AYRI katman | Anayasa v1.11 |
| V48 | Uydurma yok | Anayasa |
| V53 | Cross-source ≥2 (kanıt belkemiği) | Anayasa |
| V55 | Master + SS READ-ONLY | Anayasa |
| **#21-B** | Her sayının kaynağı (path/URL) | Anayasa |
| **K24a** | Hafıza tek kasa; her sprint K24a bildirim | Anayasa v1.11 |
| **#24** | tr-safe norm (str.maketrans + NFKD) | Standing |
| #31 | KVKK — kişisel veri paylaşılmaz | Anayasa v1.11 |
| Dizin kilidi | Yalnız `~/tradia_analiz/` altında çalış | Standing |
| Cross-Hat DOKUNULMAZ | Cross-source correlator kutsal | Anayasa |

**Standing Adayları (Analiz'in önerdiği):**

- **Standing #1 — Sıfır Yasağı** (S55-EK): oranlar Wilson %95 bandı + pay/payda + doluluk zorunlu
- **Standing #2 — F6 Ek Birim Denetim** (S56): m² kaynak alanı raporda
- **Standing #3 — F6 Ek-2 Söylem-Fiyatı Şerhi** (S57): basın fiyatı ≠ işlem fiyatı
- **Standing #4 — PK zorunluluğu** (S51): scraper kayıtlarında `(kaynak_id, url_slug)` primary key
- **Standing #5 — Dönem-etiketi zorunluluğu** (S49): iki farklı zamandan veri karşılaştırıldığında `donem_etiketi` zorunlu

---

### §4 — SAHİPLİK DATASI (Tüm Veri Setleri)

#### Kanonik (READ-ONLY, chmod 0o444)

| Dosya | Yol | Boyut | Kayıt | Son güncelleme |
|---|---|---:|---:|---|
| **v23 master** | `/Users/GAC-A/landgold-agents/data/sahibinden/sahibinden_master_v23_2026-06-05.jsonl` | 126.9 MB | 250.193 | 2026-06-05 |
| **v24 ana** | `~/tradia_analiz/data/sahibinden_master_v24_2026-06-30.jsonl` | 42.6 MB | 180.994 | 2026-06-30 |
| **v24 karantina** | `~/tradia_analiz/data/sahibinden_master_v24_karantina_2026-06-30.jsonl` | 16.8 MB | 69.199 | 2026-06-30 |

#### v25 Zenginleştirme Katmanı (v24 dokunulmadan)

| Dosya | Yol | Boyut | Kayıt |
|---|---|---:|---:|
| v25 Beykoz zengin | `~/tradia_analiz/data/sahibinden_master_v25_beykoz_zengin_S52.jsonl` | 2.64 MB | 3.293 (35 kolon) |
| Uzantı S47 | `~/tradia_analiz/data/uzanti_katmani_beykoz_S47.jsonl` | 501 KB | 310 |
| Uzantı S48 birleşim | `~/tradia_analiz/data/uzanti_katmani_beykoz_S48.jsonl` | 3.9 MB | 3.293 |
| Beykoz CSV | `~/tradia_analiz/data/beykoz_csv_derin_S46.jsonl` | 229 KB | 797 |
| v25 promote paketi | `~/tradia_analiz/data/v25_promote_paketi.jsonl` | 675 KB | 2.145 |
| S39 promote önerileri | `~/tradia_analiz/data/promote_onerileri_S39.jsonl` | 1.67 MB | 6.607 (READ-ONLY) |

#### SS Manifest

| Dosya | Kayıt | Not |
|---|---:|---|
| `~/tradia_analiz/ss_arsiv/manifest_master.jsonl` | 15.702 | S41 rename final; Mac'te SICAK, PNG'ler TT-HAFIZA'da |

#### Betikler (`~/tradia_analiz/data/*.py`)

- `beykoz_ss_derin_tarama.py` (10.7 KB) — bellek gelince Beykoz SS OCR (kuru-kontrol geçmiş)
- `rename_tam_kosu_S41.py` (8 KB) — 15.702 SS rename ana motor
- `s39_5_tam_kosu.py` (5.5 KB) — S39.5 OCR-2 tam koşu
- `pipeline_kuru_kosu_S40on.py` (3.5 KB) — S40 pipeline test

#### Çıktı Raporları

- **MD raporları:** `~/tradia_analiz/cikti/*.md` (16 dosya: S31→S41 sprintleri)
- **JSON raporları:** `~/tradia_analiz/cikti/*.json` (15 dosya: Beykoz yoklama→S57 + emsal-v2/v2r)

#### K24a Bildirimleri

- **CC-STATE:** `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_*.json` (57 bildirim: S78→S144 + Beykoz S46→S57 + kuruluş yardımcıları)

#### v9 Üçlü-Anahtar Sözlüğü (referans)

- **31.802 il+ilçe+mahalle üçlüsü** — Standing #18 üçlü-anahtar READ-ONLY
- Kaynak: v9 mahalle sözlüğü, master v6+ ile karşılaştırma

---

### §5 — TEKNİK İLERLEME KRONOLOJİSİ

**Kilometre Taşları:**

| Sprint | Tarih | Olay |
|---:|---|---|
| ~S1-S19 | (kuruluş) | Vezir bildirimleri + ilk master v6 |
| S22 | ~2026-06 | Vezir S22 bildirimi (ilk arşiv izi) |
| S29 | 2026-06-15 | İlk Hafıza bildirimi ccanaliz_s29 (TT-HAFIZA yedek) |
| S36 | ~2026-06-30 | **v23 → v24 kanonik geçişi** — 250K kayıt 8-kolon şemaya |
| S39.5 | 2026-07-12 | OCR-2 tam koşu 6.848 SS %96.5 URL yakalama |
| S41 | 2026-07-15 | Rename tam-koşu 15.702 SS (FULL 12.855) |
| S45 | 2026-07-18 | v25 birleşim beklendi (paket ~28.000, Sakarya + S39.5 + Mac FULL) |
| S52-S55 | 2026-06 | Üsküdar Kural 13 (13 altın + 8 dikkat) |
| S56 | 2026-06-07 | FESA otel yatırımcı model — $9.5M / 97 oda / 16-yıl amorti |
| S78-S131 | 2026-06→07 | Launch hazırlık: 9-şehir flagship, metropol, ekran-resmi temizlik, launch_paket |
| S132-S141 | 2026-07 | Cross-Hat INGEST (basın+ihale+ısı), makas modeli, dinamik-fırsat showcase |
| S144 | 2026-07 | FESA yatırımcı modeli finalize (per-key $97.9K, brüt %6.25) |
| **Uykuya alındı** | 2026-07-18 | NAS bekleme (2-3 ay); devir notu yazıldı |
| **Uyanış** | 2026-07-25 | Beykoz Yoklama (TT-HAFIZA takıldı, CSV bulundu) |
| S46 | 2026-07-25 | Beykoz CSV 797 kayıt · Ortaçeşme "tutulan stok" ilk beyanı |
| S47 | 2026-07-26 | Chrome uzantısı 310 Beykoz kayıt · 9/9 katsayı %95 dolu · "eski tarama atlamış" (S49'da geri çekildi) |
| S48 | 2026-07-26 | S47+S48 birleşim 3.293 (%369 v24 kapsam) · yeni kategoriler (arsa/ticari) |
| S49 | 2026-07-26 | **İLK 4-aylık zaman serisi** · Ortaçeşme 21/21 Haz-Tem → Signals haklı, V16 |
| S50 | 2026-07-26 | Fiyat delta "%99 indirim" bug tanısı: ilan_id recycle |
| S51 | 2026-07-27 | PK=(ilan_id,url_slug) uygulandı · mahalle-FE hedonik R² 0.671 |
| S52 | 2026-07-27 | v25 zengin katman (35 kolon) · F1 9 katsayısı %17-85 dolu |
| S53 | 2026-07-27 | Emsal-v2 (84 hücre) · taksonomi · tip-hedonik · brüt getiri |
| S54 | 2026-07-28 | 21-mahalle ilan denetimi · V16 kritik norm düzeltmesi (26→5 gerçek soğuk) |
| S55 | 2026-07-28 | Elmalı profil · hisseli-arsa toplama-göstergesi hipotezi |
| S55-EK | 2026-07-28 | **Sıfır-Yasağı** Standing önerisi · Wilson %95 bantla yeniden test |
| S56 | 2026-07-28 | Fiyat doğrulama · 85 hücre GÜNCEL · **%74 karışık birim uyarısı** |
| S57 | 2026-07-29 | **L2 Fiyat-Arkeolojisi 2010→2026** · reel çarpan 3-8× (Gümüşsuyu/Görele) |

**Bugünkü yetenek haritası:**

| Yetenek | Durum |
|---|---|
| Kanonik master yazımı | ✓ v24 sabit |
| CSV/NDJSON entegrasyon | ✓ 3 kaynak (CSV/Uzantı/Basın) |
| Kategori taksonomisi | ✓ 8-ENUM + alt-tip 9-sınıf |
| Mahalle sözlüğü + norm | ✓ TT-AI 45 mahalle + varyant |
| Emsal (mahalle × tip × sk × medyan+IQR) | ✓ 84-85 hücre yayın |
| Hedonik regresyon (mahalle-FE) | ✓ R² 0.67-0.68 |
| Zaman serisi (2 dönem karşılaştırma) | ✓ 4-aylık Beykoz |
| Söylem-fiyatı arkeolojisi (basın) | ✓ 2010-2026 reel çarpan |
| Wilson %95 güven bandı | ✓ Standing önerisi |
| Boilerplate filtresi | ✓ 9 marker regex |
| PK denetimi (id+slug) | ✓ Standing önerisi |
| Detay OCR (SS'ten alan çekimi) | Betik hazır, PNG'ler TT-HAFIZA'da |
| Villa-only hedonik | ✗ Villa detay-tam n=0 |
| İşlem-fiyatı doğrulaması | ✗ TSM verisi yok |
| Zamansal delta (2+ tur uzantı) | ✗ Tek tur, 3-4 ay bekleme |

---

### §6 — BEYKOZ DOSYASI KATKIN + SON KONUŞMA KARARLARI

**Beykoz vaka üretilen çıktılar (kronolojik):**

| Sprint | Dosya | Ana bulgu |
|---|---|---|
| Yoklama | `vaka_beykoz_analiz_yoklama.json` | Mac'te v24 Beykoz 892 kayıt, m² %46 |
| S46-hazır | `vaka_beykoz_derin_betik_hazir.json` | beykoz_ss_derin_tarama.py kuru-kontrol geçti |
| S46 | `vaka_beykoz_analiz_S46.json` + MD | CSV 797 · Kavacık ofis 442 TL/m²/ay F1 |
| S47 | `vaka_beykoz_uzanti_S47.json` + MD ek | Uzantı 310 · 9/9 katsayı %95 |
| S48 | `vaka_beykoz_uzanti_S48.json` + MD | Birleşim 3.293 %369 v24 kapsam |
| S49 | `vaka_beykoz_S49.json` + MD | **İlk zaman serisi** · V16 Ortaçeşme |
| S50 | `vaka_beykoz_S50.json` + MD | Recycle-ID bug tanısı |
| S51 | `vaka_beykoz_S51.json` + MD | Mahalle-FE R² 0.671 |
| S52 | `vaka_beykoz_S52.json` + MD | v25 zengin 35 kolon |
| S53 | `beykoz_emsal_v2.json` + `tip_taksonomi.md` + `cc_analiz_S53.md` | Emsal-v2 84 hücre |
| S54 | `vaka_beykoz_S54.json` + MD | 21-mahalle denetim V16 |
| S55 | `vaka_beykoz_S55.json` + MD | Elmalı hisseli-arsa toplama-göstergesi hipotezi |
| S55-EK | `vaka_beykoz_S55EK.json` + MD | Sıfır-Yasağı standing önerisi |
| S56 | `beykoz_emsal_v2r.json` + MD | 85 hücre GÜNCEL · birim denetim |
| S57 | `vaka_beykoz_S57.json` + MD | Söylem-fiyatı arkeolojisi 2010→2026 |
| FINAL | `FINAL_cc_analiz_beykoz.md` | Kapanış raporu (347 satır) |
| KURULUŞ | `KURULUS_cc_analiz.md` | **Bu dosya** |

**Sana verilen ÜA direktifleri / dersler / düzeltmeler (dipte kalmasın):**

1. **[S49 Signals düzeltmesi]** — "Ortaçeşme yeni-arz da olabilir, kesin atlanmış değil": tarih damgalarına bakmam istendi, gerçekten Signals haklıymış (21/21 Haz-Tem 2026). **Ders:** dönem-farkını atla-me.
2. **[S50 fiyat bug soru]** — Delta absürd olduğunda "uzantı bug" değil, "PK yanlış" tanısı istendi. **Ders:** İlk hipotez yerine tanı derinleştir.
3. **[S51 PK öneri]** — `(ilan_id, url_slug)` primary key kuralı Standing adayı.
4. **[S52 F1 keşfi]** — Uzantı 977 detay kaydında yaş/kat/ısıtma/site VAR bilgisi Finans'ta paylaşıldı; benim şemaya taşımam istendi (V37 ayrı katman).
5. **[S54 21-mahalle denetimi]** — Signals'ın "21 soğuk" iddiasını doğrulamam istendi; norm sonrası 26→5 gerçek soğuk çıktı (V16 kritik düzeltme).
6. **[S55 Elmalı odak]** — Signals'tan gelen "Elmalı hisseli-arsa" istihbarat; toplama-göstergesi hipotezini test etmem istendi.
7. **[S55-EK Sıfır Yasağı]** — Patron: "bundan sonra Standing adayı, %0.0 raporlanmaz, pay/payda + bant zorunlu". **Anayasa öneriye çevrildi.**
8. **[S56 fiyat doğrulama]** — Yayın-öncesi tüm 84 hücrenin yeniden hesap+damga+uç-değer+çapraz+birim denetimi istendi. **Standing #2 (birim denetim) doğdu.**
9. **[S57 L2 basın arkeoloji]** — 5991 basın sayısal cümlesinden 2010→2026 fiyat izleri; söylem-fiyatı şerhi Standing #3 olarak konuldu.
10. **[Kuruluş dosyası — bu belge]** — Kuruluşundan bugüne, felsefeni, dosyalarını, kararlarını YAZ. **Ders:** kendini belgele, gelecek CC-Analiz seni okuyabilsin.

**Beykoz vaka kesin bulgular (kısa):**
- 85 emsal hücre yayın-hazır
- F1 9 katsayı %17-85 dolu
- Hedonik R² 0.671 (mahalle-FE) → 0.673 (daire-only)
- Yerden ısıtma +%127, Kanlıca (Kavacık'a göre) +%110
- Ortaçeşme YENİ ARZ akışı (kesinleşti), TUTULAN STOK DEĞİL
- Elmalı hisseli-arsa: hipotez sürüyor ama kesin kanıt DEĞİL

---

### §7 — DİĞER CC'LERLE SINIRLAR

**SENİN İŞİN (CC-Analiz):**
- Sahibinden ilan verisi (satılık/kiralık + konut/ticari/arsa/turistik)
- Mahalle × tip × TL/m² emsal
- Hedonik regresyon (mahalle-FE, tip-dummy)
- Zaman serisi (2+ dönem karşılaştırma)
- Yatırım-getirisi hesap (brüt getiri = kira×12 ÷ satış_fiyat)
- Boilerplate/spam filtre
- SS OCR (Vision + PIL preprocessing)
- Kanonik master + karantina ayrımı

**DEĞİL:**
- **CC-Basın** — haber taraması, sayısal cümle çıkarımı, aktör-lens (Ali Kılıçlı-Kızılırmak, Şişecam vs) — sen sadece **fiyat cümlelerini alırsın** (S57 emsali)
- **CC-Signals** — istihbarat çapraz-kontrolü, VAAT-DEFTERİ, sürtünme-endeksi, HABER-ISI. Sen Signals'a **zemin fiyat verisi** verirsin, o senin cevaplarını **doğrular veya çürütür**.
- **CC-Finans (F1/F2)** — yatırım-zekası, KFE reel, hedonik-katsayı yorumu — sen katsayıyı **ölçersin**, Finans **yorumlar**
- **CC-TT-MAP** — Sentinel-2 mahalle değişim, kentleşme sinyalleri, üç-imza doktrini (NDBI+NDVI+radar) — sen mahalle *ilan* verisi tutarsın, o uydu-fizik verisi
- **CC-TT-AI** — mahalle AI-bağlam fabrikası (nokta demografi + koordinat + AI özet) — sen fiyat, o bağlam
- **CC-İhale** — ihale ilanları (kapı-önü, kısa-vadeli). Sen konut/ticari/arsa, o kamu-özel
- **CC-Tic** — firma DB (527/262 %100 launch-temiz), TTSG — sen mahalle-emlak, o firma-tüzel
- **CC-Borsa** — KAP cross-source, borsa şirket haberleri — sen "Şişecam Paşabahçe arsası" gibi haberlerin FIYAT ayağı, o Şişecam'ın KAP açıklaması
- **CC-Sosyal** — YouTube/IG içerik, müşteri
- **CC-Kitap / TT-Pazarlama** — dış-proje/basılı

**Çakışma alanları (ihtiyati):**
- **Signals ile:** "TUTULAN STOK" gibi mahalle-yorumları Signals'ın alanı, benim verim onun altlığı. Yorum çakışmasında Signals kazanır, ben zemin veririm.
- **Basın ile:** S57'de basın sayısal cümlelerinden fiyat türev — bu **Analiz'in Basın'a soru** hakkı, Basın **ham cümleyi verir**.
- **Finans ile:** Hedonik yorum. Ben katsayıyı ölçer, Finans yatırım anlamı verir.

---

### §8 — AÇIK BORÇLAR + Gelecek 3 Yetenek Önerisi

**Açık borçlar (15):**

| # | Borç | Öncelik |
|---:|---|---|
| 1 | v25 kanonik birleşim (S45) — Sakarya 2.145 + S39.5 6.607 + Mac FULL 12.855 → v25 kanonik | Yüksek |
| 2 | Villa-only hedonik — villa detay-tam n=0, ek uzantı tur şart | Orta |
| 3 | Fiyat delta ölçümü — 3+ tur uzantı (n≥150 hedef) | Yüksek |
| 4 | İşlem-fiyatı doğrulama — Tapu Sicil Müdürlüğü verisi (dış kaynak, Patron) | Yüksek |
| 5 | v24 öncesi zaman serisi — Endeksa/REIDIN ($, Patron kararı) | Orta |
| 6 | Sıfır-Yasağı Standing #1 — Anayasa'ya resmi geçiş | Yüksek |
| 7 | Birim denetim Standing #2 — kanonlaşma | Yüksek |
| 8 | Söylem-fiyatı şerhi Standing #3 — kanonlaşma | Orta |
| 9 | PK zorunluluğu Standing #4 — uzantı-ekibine bildirim | Yüksek |
| 10 | Dönem-etiketi Standing #5 | Orta |
| 11 | Uzantı sb2f kaynağı — uzantı-ekibi cevabı bekleniyor | Orta |
| 12 | Ortaçeşme 352K TL/m² uç-değer segment tanısı | Düşük |
| 13 | Tokatköy villa<daire segment karışıklığı — Standing tanım | Orta |
| 14 | Riva/Yalıköy/Ortaçeşme hedonik-FE n<8 → ek uzantı | Orta |
| 15 | Konut-belirsiz 416 kayıt — alt-tip tespit (URL semantik) | Düşük |

**Gelecek 3 Yetenek Önerisi:**

1. **Sokak-bazlı granül (S55 Elmalı'da eksikti)**  
   Şu an mahalle en küçük birim. Sokak-adı çıkarımı + emlakçı-kimliği ile "aynı sokakta 8 hisse tek satıcıda" gibi toplama-göstergesi doğrudan tespit edilebilir. **Getiri:** F6 seçilim eksenini kanıtla besler.

2. **Otomatik boilerplate/sentetik-veri sınıflandırıcı**  
   Şu an 9 regex marker'la %12 kayıt bayraklanıyor. LLM-etiketli veya küçük-model sınıflandırıcı ile %98+ doğrulukla "gerçek ilan mı, spam mı" ayrımı. **Getiri:** Sıkı-detay medyan güvenilirliği artar.

3. **Kısa-dönem elastisite ölçümü (uzantı-tur otomasyonu)**  
   Şu an tek-tur uzantı verisi. Cron ile haftalık uzantı-çekim + PK-eşleşme + fiyat_geçmişi delta → "gerçek asılı-kalma süresi", "gerçek indirim oranı" ölçülür. **Getiri:** F1/F2'nin kilit "zaman-yok" açığı kapanır.

---

## Hariç Tutulan (Kesin — YAZILMADI)

Patron'un ayırdığı konular · Ortaklık teklifleri · Şahsi işler · Tradia-dışı projeler → bu dosyada YOK.

---

## Disiplin KURULUŞ

A04 (arşiv taraması ile geçmiş atlanmadı) · V37 (kaynak dosyalar okundu, hiçbir kanonik dokunulmadı) · V11 (yetenek/borç raporlama yapısal, kehanet YOK) · **#21-B** (her sayı/yol için path) · **K24a** (kuruluş dosyası kaydolur, gönderim YOK) · **KVKK #31** (kişisel veri YOK) · $0 · SİLME YOK

**Push:** Vezir'e bırakılır. Bu dosya sadece Desktop'a yazıldı.
