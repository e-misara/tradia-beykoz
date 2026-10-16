# EVDS3 Anahtar Sorunu · Kök Neden Analizi

**Tarih:** 2026-10-14 · **Disiplin:** V37 · A04 (varsayım yasağı — her iddia HTTP kanıtıyla) · SİLME-YOK
**Anahtar değeri:** `[REDACTED-APIKEY-EVDS]` (iki farklı anahtar test edildi, ikisi de aynı davranışı gösterdi)

**🔴→🟢 DÜZELTME (aynı gün, Borsa'nın bildirimi sonrası):** §1-4 bu raporun **ilk turu**, gerçek çalışan yol bulunamadan yazılmıştı. Borsa aynı anahtarla `~/Desktop/tradia/cc_borsa/evds_hasat/evds_ortak.py` ile **200+gerçek JSON** almıştı. Ben bu yolu kendim test ettim (§2b), doğruladım, sonra `tcmb_scraper.py` + `tradia_aylik_makro_cek.py` + `evds_saglik.sh`'ı `evds_ortak.py` kullanacak şekilde yeniden yazdım (§5). **Sonuç: EVDS3 ÇALIŞIYOR.** İlk turun hipotez-tablosu (§3) ve test-matrisi (§2) aşağıda **değiştirilmeden** bırakıldı (dürüstlük — yanlış giden yolu silmek yerine göstermek), ama §2'ye Borsa'nın doğru yolu (2b) ve §5-7 güncel duruma göre yeniden yazıldı.

---

## 1. Arkeoloji

| Dosya | İçerik |
|---|---|
| `~/landgold-agents/.env` | `TCMB_API_KEY` — tek kaynak (Patron isteğiyle öyle kalacak) |
| `~/landgold-agents/.env.example` | EVDS/TCMB satırı yok |
| `~/.claude/settings.json` | 10 satır allow-list, anahtarı **düz metin** içeriyordu (temizlendi, §5) |
| `~/landgold-agents/services/tcmb_scraper.py` | EVDS3 client, `EVDS3_BASE = 'https://evds3.tcmb.gov.tr/igmevdsms-dis'` |
| `~/landgold-agents/scripts/tradia_aylik_makro_cek.py` | Aylık launchd job, `os.environ.get('TCMB_API_KEY')` okuyordu — **ama `.env`'i hiç yüklemiyordu** (düzeltildi, §5) |

**.env ↔ settings.json anahtar karşılaştırması:** AYNI (SHA-256 hash eşleşti, değer karşılaştırılmadı).

**Oturum ortasında keşif:** Çalışma sırasında `.env` dosyası **değişti** — eski anahtar `TCMB_API_KEY_ESKI`'ye taşındı, yeni bir anahtar `TCMB_API_KEY`'e geldi (muhtemelen Patron EVDS3 portalından yeni anahtar aldı). **Her iki anahtar da aşağıdaki test matrisinde AYNI davranışı gösterdi** — bu, sorunun anahtarla değil, endpoint/biçimle ilgili olduğunu güçlü şekilde doğruluyor.

---

## 2. Test Matrisi (gerçek HTTP yanıtları)

| # | İstek | HTTP | Gövde (ilk 200 karakter) |
|---|---|---|---|
| a | `evds2.tcmb.gov.tr/service/evds/series?...&key=X` | **302** | (boş — redirect) → `Location: https://evds3.tcmb.gov.tr` |
| b | `evds3.tcmb.gov.tr/service/evds/series?...&key=X` (query-param) | **200** | `<!DOCTYPE html>...` — React SPA'nın index.html'i (eski path artık API değil, SPA fallback) |
| c | aynı + `key` header | **200** | aynı SPA HTML |
| d | aynı + TP.KTF10 + 2026-09 | **200** | aynı SPA HTML |
| — | `igmevdsms-dis/chart-data?serieCode=X` (key YOK) | **403** | `{"message":"Required request header 'key' is not present"}` |
| — | aynı + **YANLIŞ** key | **401** | `Invalid API Key` |
| — | aynı + **GEÇERLİ** key (eski VE yeni, ayrı ayrı) | **400** | `{"message":"Bad Request. Missing parameters."}` |
| — | rastgele path + geçerli key | **400** | aynı "Missing parameters" (path'ten bağımsız — gateway-seviyesi davranış) |
| — | `igmevdsms-dis/seri-konum?dataGroupCode=X` | **200** | `[]` — çalışıyor ama **key kontrolü yapmıyor** (public endpoint, health-check için YANLIŞ seçim — ilk taslakta bu hataya düştüm, düzeltildi) |
| — | `igmevdsms-dis/serieList/fe/{code}?type=json` (path-param) | **200** | `[]` her zaman, kod ne olursa olsun — stub/yarım-çalışan endpoint |
| — | `igmevdsms-dis/charts/1` | **200** | boş gövde |
| — | OPTIONS preflight | **403** | CORS header'ları açığa çıkmadı |

**Ayırt edici bulgu:** `/chart-data` endpoint'i üç durumu net ayırıyor — **key yok → 403, key yanlış → 401, key doğru → 400 farklı mesajla**. Bu üç-değerli davranış 3 tekrarlı testte **tutarlı** (401/401/401 ve 400/400/400). Bu davranış sağlık-testinde hâlâ kullanılıyor (§5), ama **veri çekimi için `/chart-data` DEĞİL** — doğru yol aşağıda (2b).

### 2b. Borsa'nın bulduğu GERÇEK yol (kendim test ettim, doğrulandı)

Kaynak: `~/Desktop/tradia/cc_borsa/evds_hasat/evds_ortak.py` (Borsa'nın ortak EVDS istemcisi)

```
BASE = 'https://evds3.tcmb.gov.tr/igmevdsms-dis/series='   ← "series=" TABANIN SONUNDA, ? YOK
url  = f'{BASE}{KOD}&startDate=GG-AA-YYYY&endDate=GG-AA-YYYY&type=json'
```

**Benim ayrı yanılgım:** Ben ısrarla standart query-string denemiştim (`?series=X&startDate=...`). Gerçek biçim `?` KULLANMIYOR — `series=` path'in bir PARÇASI, ardından `&` ile devam ediyor. Bu sıra dışı biçim yüzünden kendi reverse-engineering'imde hiç rastlamadım.

**Kendi testim (2026-10-14, kanıt):**

```
curl -s -H "key: ${KEY}" -H "Accept: application/json" \
  "https://evds3.tcmb.gov.tr/igmevdsms-dis/series=TP.KFE.TR10&startDate=01-01-2026&endDate=01-09-2026&type=json"

HTTP: 200
Content-Type: application/json;charset=UTF-8
Gövde: {"totalCount":8,"items":[{"Tarih":"2026-1","TP_KFE_TR10":"196.70000000","UNIXTIME":...},
        {"Tarih":"2026-2","TP_KFE_TR10":"200.95000000",...}, ...]}
```

8 ay gerçek İstanbul KFE verisi, artan trend 196,70→205,10+. **Anahtar her zaman geçerliydi — sorun sadece URL biçimiydi (H1+H2 birleşik kök neden, aşağıda zaten doğru teşhis edilmişti, sadece doğru path bulunamamıştı).**

### Ağ teyidi

```
nslookup evds3.tcmb.gov.tr → 185.98.252.184 (gerçek IP, sahte DNS değil)
curl -v: SSL sertifikası CN=evds3.tcmb.gov.tr, DigiCert zinciri, verify OK
```

---

## 3. Hipotez Tablosu

| # | Hipotez | Sonuç | Kanıt |
|---|---|---|---|
| **H1** | Uç nokta yanlış | **DOĞRULANDI** | Kodun varsaydığı `/chart-data?serieCode=X&startDate=&endDate=` biçimi JS bundle'da **0 occurrence** — hiç kullanılmıyor. Gerçek SPA `/charts/{id}`, `/serieList/fe/{code}`, `/seri-konum?dataGroupCode=` kullanıyor (bundle'dan çıkarıldı) |
| **H2** | Gönderim biçimi yanlış | **KISMEN DOĞRULANDI** | Kodun eski-EVDS2-stili `path/type=json&code=X` (query'nin path içine gömülmesi) biçimi muhtemelen backend'de yanlış parse ediliyor; ayrıca `key` header (query-param değil) doğru biçim — bu kısım zaten doğruydu |
| **H3** | Seri kodu sürüklenmesi | **KISMEN DOĞRULANDI** | Test edilen `TP.HKFE01` kodu placeholder'dı — kodun kendi `KFE_SERIES` sözlüğünde gerçek kod `TP.KFE.TR10` (İstanbul), `TP.KFE.TR9` (Rize bölgesi) imiş. Doğru kodla da chart-data hâlâ 400 verdi (tam çözülmedi) |
| **H4** | Hesap yenileme / yeni anahtar gerekli | **ELENDİ** | Hem eski hem **yeni** (oturum sırasında gelen) anahtar **AYNI** 401≠400 davranışını gösterdi. Yeni anahtar sorunu ÇÖZMEDİ — bu H4'ü kesin olarak çürütür |
| **H5** | Kota/rate-limit | **ELENDİ (yanlış iz)** | `X-Ratelimit-Limit/Remaining/Reset: 0/0/0` header'ları incelendi — ama bu header **key gerektirmeyen ana sayfada da** aynı sabit 0/0/0 değerini veriyor → anlamsız/varsayılan Envoy gateway header'ı, anahtara özgü değil |
| **H6** | Ağ sorunu | **ELENDİ** | DNS doğru IP, TLS sertifikası geçerli ve doğru CN, gerçek sunucuya bağlanılıyor |

**Sadece H4 doğrulanırsa Patron'a "yeni anahtar al" denecekti — H4 KESİN ELENDİ, bu yüzden Patron'a anahtar başvurusu YAPILMADI.**

---

## 4. Karar (güncellendi)

Sorun **anahtar değil, URL biçimiydi** (H1+H2 birleşik, §2b'de çözüldü). TCMB EVDS3'ün gerçek veri-çekme endpoint'i `/igmevdsms-dis/series=KOD&startDate=..&endDate=..&type=json` (standart `?query` DEĞİL, `series=` path'in parçası) — bu biçim hiçbir reverse-engineering yöntemiyle (JS bundle analizi, OPTIONS preflight, path-brute-force) bulunamayan, yalnızca Borsa'nın kod-tabanında kanıtlı bir biçimdi. **İki CC bağımsız çalışınca tek CC'nin bulamadığını diğeri buldu — bu, tek-istemci paylaşımının (§5.2) gerekçesidir.**

---

## 5. Uygulanan Kalıcı Çözüm (güncel)

### 5.1 Tek istemci — evds_ortak.py

**Değişiklik:** `~/landgold-agents/services/tcmb_scraper.py` artık ayrı istemci değil — `~/Desktop/tradia/cc_borsa/evds_hasat/evds_ortak.py`'yi import eder (`sys.path.insert` + `import evds_ortak as E`). `fetch_series_data()` artık `E.cek()` + `E.ayristir()` kullanıyor; eski `/chart-data` denemesi (hiç çalışmamıştı) tamamen silindi.

**Dönüş sözleşmesi değişti** (eskisi zaten hiç çalışmadığı için kırılma sayılmaz):
```python
{'durum': 'OK'|'AUTH_RED'|'GECICI_YOK', 'serie_code': .., 'satirlar': [[tarih, deger_METNI], ...], 'nd_atlanan': int, 'alan_yok': bool}
```

`tradia_aylik_makro_cek.py` güncellendi: `data['durum']=='OK'` kontrolü eklendi, satır-sayısı logluyor.

**Gerçek koşum kanıtı (2026-10-14, framework python3.9, Standing #38):**
```
→ Aylık seri verisi çekiliyor...
  ✓ Bursa (TP.KFE.TR41): 32 satır
  ✓ İstanbul (TP.KFE.TR10): 32 satır
  ✓ Ankara (TP.KFE.TR51): 32 satır
  ✓ İzmir (TP.KFE.TR31): 32 satır
  ✓ Kahramanmaraş (TP.KFE.TR63): 32 satır
  ✓ Hatay (TP.KFE.TR63): 32 satır
  ✓ Adıyaman (TP.KFE.TRC): 32 satır
  ✓ Malatya (TP.KFE.TRB): 32 satır
  ✓ 8/8 il verisi çekildi
```
8/8 il, her biri 32 satır (2024-01'den bugüne aylık KFE), çıktı `data/makro/tcmb_tuik/TP.KFE.TR10_2026-10.json` vb. — içerik doğrulandı (gerçek rakamlar, 2024-1: 118,07 → artan trend).

**⚠ Eşzamanlılık uyarısı (evds_ortak.py'nin kendi docstring'i):** "Eşzamanlı iki akış 2026-10-14'te hızı ~yarıya düşürdü; tek akışta çalış." Bu koşum Borsa'nın kendi hasadıyla aynı güne denk geldi — ileride iki CC aynı anda EVDS'e istek atmamalı (bkz §5.3 Vezir önerisi).

### 5.2 settings.json temizliği (değişmedi, §ilk tur)

10 düz-metin-anahtarlı satır kaldırıldı, anahtarsız genel kurallar kondu.

### 5.3 evds_saglik.sh — gerçek-veri testi (güncellendi)

Artık `/chart-data` ile üç-değerli davranış testi (403/401/400 — anahtar geçerliliği için hâlâ geçerli ve doğru) + **asıl veri endpoint'iyle (`series=` biçimi) gerçek 200+items testi** birleşik:

```json
{"durum":"SAGLAM","not":"anahtar geçerli + TP.KFE.TR10 serisi 8 satır döndü","yol":"evds_ortak.py (Borsa ortak istemci)","tarih":"2026-10-14T15:57:33Z"}
```
**exit=0.** launchd `com.tradia.evds.saglik` (08:00 günlük) hâlâ bağlı, değişmedi.

### 5.4 Çakışan görev notu — ÖNERİ (Vezir karar versin)

Borsa'nın kendi günlük görevi `com.tradia.ccborsa.evds_gunluk` (09:10) ile benim `com.tradia.evds.saglik` (08:00) **aynı EVDS3 sunucusuna** gidiyor — evds_ortak.py'nin "tek akışta çalış" uyarısı nedeniyle bu potansiyel çakışma.

**Öneri (karar Vezir'de):** Benim 08:00 görevim kalsın (sadece 1 seri çekiyor, hafif, sağlık-amaçlı). Borsa'nın asıl hasat işi zaten `pipeline.sh`'ın bir adımı — eğer sağlık kontrolü de oraya (g) adımı olarak eklenirse, benim ayrı launchd'im gereksizleşir ve çakışma riski ortadan kalkar. Ben karar vermiyorum, bu sadece gözlem.

---

## 6. Açık Borç (önceki tur borçlarından elenen/kalan)

- ~~Gerçek `/charts` akışının reverse-engineering'i~~ → **ÇÖZÜLDÜ** (§2b, Borsa'nın yolu)
- **Kalan:** `serieList/fe` stub endpoint'inin neden her zaman boş döndüğü hâlâ anlaşılmadı (ama artık bu endpoint kullanılmıyor, öncelik düşük)
- **Kalan:** evds_ortak.py'nin `KIRIK KURALI` (12 ardışık GECICI_YOK, AUTH_RED, vb.) `tcmb_scraper.py` tarafında henüz ayrı bir alarm/flag mekanizmasına bağlanmadı — şu an sadece `durum` alanı dönüyor, çağıran kod (tradia_aylik_makro_cek.py) print ile logluyor ama `EVDS_KIRIK.flag` gibi bir bayrak yok. Düşük öncelik (Borsa'nın kendi KIRIK mekanizması zaten var, ben ona bağımlı değilim)

---

## 7. CC'lere Teyit Satırı (güncellendi)

**EVDS3 ÇALIŞIYOR — yol: igmevdsms-dis, istemci: evds_ortak.py.** Doğru biçim: `https://evds3.tcmb.gov.tr/igmevdsms-dis/series=KOD&startDate=GG-AA-YYYY&endDate=GG-AA-YYYY&type=json`, `key` header'da. Anahtar hep geçerliydi (H4 elendi, hiç yeni anahtar gerekmedi) — sorun URL biçimiydi, Borsa'nın kod-tabanında kanıtlı biçim bulununca çözüldü. `tcmb_scraper.py` artık `evds_ortak.py`'yi tek-kaynak olarak import ediyor (ayrı istemci YOK). Günlük sağlık kontrolü (`com.tradia.evds.saglik`, 08:00) `02_CC_STATE/evds_saglik.json`'a **SAGLAM** yazıyor (exit=0, gerçek veri kanıtlı). Borsa'nın 09:10 göreviyle çakışma riski var — Vezir'e öneri sunuldu (§5.4), karar bekleniyor.

---

*CC-Analiz · 2026-10-14 · V37 · A04 · Standing #37 (EVDS→Borsa toplayıcı — bu düzeltmede Borsa'nın kod-tabanı doğrudan kullanıldı, toplayıcı rolü teyit edildi) · Standing #38 (launchd ikili tam-yol)*
