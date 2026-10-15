# HAM BASIN DİZİN ŞEMASI v1 (Hafıza)

**Statü:** 🟢 KANON — Patron onayı 2026-10-15 gün başı (karar 4: B aşaması ham yeri TT-HAFIZA + bu şema) · **Tarih:** 2026-10-14 · Vezir kaydı 15 Eki
**Dayanak:** `ham_veri_depolama_kanonu_v1` (basın HTML hamı = büyük ham → TT-HAFIZA birincil, NAS gelince NAS)
**Kapsam:** yalnız basın HTML ham. Uydu ham şeması `uydu_arsiv/` ayrı protokoldür; bu belge ona dokunmaz.

## 1. Kök ve dizin yolu

```
/Volumes/TT-HAFIZA/ham/basin/<il_kodu>/<ilce_kodu>/<kaynak>/<yyyy>/
    <slug>_<sha256(url)[:12]>.html
    <slug>_<sha256(url)[:12]>.txt          # çıkarılmış metin (varsa)
    SHA256SUMS                             # o dizindeki dosyaların özeti
```

| Parça | Biçim | Kaynak | Örnek |
|---|---|---|---|
| `il_kodu` | plaka, 2 hane | `cografya.json` `iller.<İl>.kod` (81/81 dolu) | `34` |
| `ilce_kodu` | `<il_kodu>-<ilce_slug>` | `cografya.json` `ilceler.<İlçe>.kod` + `tr_kanonik()` | `34-kartal` |
| `kaynak` | host slug (alan adı, `www.` yok, nokta→tire) | haber sitesi alan adı | `kartalhaber-com-tr` |
| `yyyy` | yayın yılı; tarih bilinmiyorsa `tarihsiz` | `<meta>`/URL; çıkarılamazsa `tarihsiz` | `2025` |

**Kural K-1 (kod kanonik, ad değil):** dizinde yalnız **kod** kullanılır; `Kartal/kartal/KARTAL` ve il-ilçe aynı ad (`Merkez`) karışmaz. İlçe kodunda `tr_kanonik` slug'ı zorunludur (naive `.lower()` yasak — TR-İ tuzağı). Yani eski `Beykoz/beykoz` çift-etiketi bu şemada **doğuştan imkânsız**.

**Kural K-2 (ulusal kaynak):** ilçesi çözülemeyen/ulusal haber `ham/basin/00/00-ulusal/<kaynak>/<yyyy>/` altına gider. Etiket zorla verilmez (262.198 yanlış-Beykoz dersi). İl bilinip ilçe bilinmiyorsa `ham/basin/<il_kodu>/<il_kodu>-bilinmiyor/…`.

**Kural K-3 (tarih yoksa tahmin yok):** yayın tarihi çıkarılamayan haber `tarihsiz/` altına yazılır; indirme tarihi yıl olarak kullanılmaz (indirme ≠ yayın).

## 2. Bütünlük — SHA256SUMS

- Her `<yyyy>/` dizininde `SHA256SUMS` (`shasum -a 256` biçimi: `<hash>  <dosya>`).
- Yazan: indirici, dosyayı yazdıktan **sonra** satırı ekler (dosya `.part` iken yazılmaz).
- Taşıma (Mac tampon → disk) SİLME-YOK: hedefte aynı ad varsa SHA karşılaştır; aynıysa tampondan sil, **farklıysa üzerine yazma** (`.tampon_<ts>` ekle). Bu, `TASIMA_NOTU_HAFIZA.md` kuralıdır, değişmedi.
- Doğrulama: `cd <yyyy> && shasum -a 256 -c SHA256SUMS`. Hafıza haftalık örnekleme yapar (dizin başına ≤ %1).

## 3. İndeks — `02_CC_STATE/ham_basin_indeks.json`

Tek dosya değil **özet + parça** (milyonlarca satır JSON'a sığmaz):

```
02_CC_STATE/ham_basin_indeks.json            # özet (küçük): il/ilçe/kaynak sayaçları, bayt, son_guncelleme
~/tradia_sorgu/data/ham_basin_indeks/<il_kodu>.jsonl   # satır başına bir haber (Mac-birincil, disk aynası)
```

Parça satırı (kullanıcının istediği alanlar + zorunlu iki ek):

```json
{"anahtar": "34-kartal/kartalhaber-com-tr/2025/<slug>_<sha12>",
 "kaynak": "kartalhaber-com-tr",
 "dosya": "34/34-kartal/kartalhaber-com-tr/2025/<slug>_<sha12>.html",
 "boyut": 53213,
 "tarih": "2025-03-14",
 "sha256": "<tam 64>", "url": "https://…"}
```

- `anahtar` = `<ilce_kodu>/<kaynak>/<yyyy>/<slug>_<sha12>` → dizin yoluyla **birebir** türetilebilir (indeks bozulursa dizinden yeniden kurulur).
- `url` ve `sha256` eklendi: SORGU-01'deki "basin_html %86 url boş" borcunun ham katmanda tekrarını önler (künye ham dosyayla birlikte yazılır).
- İndeks **Mac'te birincil** (küçük veri kuralı), diskte ayna — disk yokken sorgu çalışır.
- Özet dosyası yapısı: `{"kesit_utc","il":{"34":{"ilce":{"34-kartal":{"kaynak_sayi","haber","bayt","tarihsiz"}}}},"toplam":{...}}`.

## 4. Mevcut yapıyla uyumsuzluk (karar gerekir)

Basın'ın bugün çalışan Mac tamponu `tampon_ham/basin/bolge/<il_adı>/<ilçe_adı>/derinlik/…` biçiminde (ad bazlı, kaynak/yıl katmanı yok). `TASIMA_NOTU_HAFIZA.md` "göreli yapı AYNI" der → bu şema kabul edilirse **taşıma notu değişir**.

| Seçenek | Ne olur |
|---|---|
| **A (önerilen)** | Yeni indirmeler bu şemaya yazar; mevcut 546 MB tampon + S99 İstanbul (~29 GB, `ilce/<ad>/`) **taşıma sırasında** yeni yola eşlenir (dosya adı değişmez: slug+sha12 zaten var) |
| B | Mevcut yapı korunur, yalnız indeks eklenir | 
| C | Şema yalnız bundan sonraki ulusal indirme için |

Eşleme tablosu (`ad → kod`) `cografya.json`'dan üretilir; Aİ-evren `mahalle_evren.jsonl` ilçe adındaki `X-il_merkezi` çift-etiketi kuralı N1 ile `merkez`e indirgenir (`idari_ad_normalize_kurali_v1`).

## 5. Bu şemanın bilmediği (BİLİNMİYOR)

- 80 ilin ham haber sayısı: ölçülmedi (yalnız İstanbul 566.478 kayıt var). Boyut tahmini `ham_basin_boyut_tahmini_20261014.md`'de senaryo olarak verildi.
- `kaynak` host slug'ında aynı sitenin alt alan adı (`m.`, `amp.`) birleştirme kuralı: tanımlanmadı, Basın'a soru.
