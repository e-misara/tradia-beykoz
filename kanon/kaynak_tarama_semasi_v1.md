# KAYNAK TARAMA ŞEMASI v1 — kaynak evreni taraması (EVDS/TÜİK dışı resmî kaynaklar)

**Statü:** 🟢 KANON · Patron direktifi 2026-10-14 19:26 · **Birleştirme son tarihi: 2026-10-16 19:26** (48 saat)
**Katılan:** 9 CC (Patron'un dağıttığı listeyle) · **Birleştiren:** Vezir → `kanon/kaynak_evreni_v2.md`
**Bağlı:** anahtar_yonetimi_kanonu (kural 2–3), celiski_referans_kanonu_v1 (Tür A), cc_sinir_kanonu_v1, motor/SEMA.md (eşleşme), B11

---

## 1. Dosya

Her CC yalnız **kendi** dosyasını yazar: `~/tradia_konusmalar/02_CC_STATE/kaynak_tarama_<cc>.json`
(`<cc>` küçük harf, Türkçe karaktersiz: `basin`, `sosyal`, `tic`, `ihale`, `finans`, `map`, `ai`, `analiz`, `pazarlama`, …)

```json
{
  "_meta": {"cc": "<CC adı>", "tarih": "<ISO>", "liste_kaynagi": "Patron dağıtımı 2026-10-14"},
  "satirlar": [ { …satır şeması… } ]
}
```

## 2. Satır şeması (zorunlu alanlar)

| Alan | Tür | Kural |
|---|---|---|
| `site` | metin | kurum/site adı (ör. "TKGM Parsel Sorgu") |
| `url` | metin | taranan **tam** adres. Karşılaştırma bu alanın ana makinesi (host) ile yapılır |
| `ne_verir` | metin | tek cümle: hangi veri, hangi birimde |
| `olcek` | `il` \| `ilce` \| `mahalle` \| `parsel` \| `ulke` | en ince erişilebilir ölçek |
| `erisim` | `ACIK` \| `API_ANAHTAR` \| `UYELIK` \| `KISITLI` \| `KAPALI` | `KAPALI` = denendi, erişilemedi (≠ "bakmadım") |
| `http_kodu` | sayı | **ölçülmüş** HTTP kodu. Yoksa satır geçersiz (anahtar kanonu kural 3) |
| `test_tarihi` | ISO | ölçüm anı |
| `ornek_cekim` | `{"beykoz": n, "derepazari": n}` | iki vaka bölgesi için çekilen **satır sayısı**. Ölçülmediyse `null`, 0 yazılmaz (0 = ölçtüm, yoktu) |
| `kok` | `K1`…`K16` (liste olabilir) | örümcek kökü; çıplak K yazılır ama birleştirmede `BM-K` önekine çevrilir (K-numara standardı) |
| `zincir` | `Z1`…`Z7` (liste olabilir) | **kanon/zincirler_v1.md** (Patron metni 2026-10-15). `BİLİNMİYOR` geçersiz; birleştirmede zincir sahibi doluluk satırını teyit eder |
| `patron_adimi` | metin | erişim `UYELIK`/`API_ANAHTAR` ise Patron'un yapacağı **tam adım** (site → menü → form); değilse boş `""` |
| `ilk_hasat_tahmini` | metin | ilk hasadın hacmi/süresi + **dayanağı** (ölçümden mi, tahminden mi) |
| `lisans` | `{"sinif": IC_KULLANIM \| KAYNAK_GOSTER \| YAZILI_IZIN \| YASAK \| KARAR_PATRON (v1.2), "dayanak": "<lisans metni/sayfa URL'si/mevzuat>"}` | **(v1.1 · Patron 15 Eki)** Kullanım hakkı. `IC_KULLANIM` = yalnız iç analiz · `KAYNAK_GOSTER` = atıfla yayımlanabilir · `YAZILI_IZIN` = ürüne girmesi yazılı izne bağlı (Patron adımı) · `YASAK` = kullanılmaz. Dayanak zorunlu. **Lisansı boş/dayanaksız kaynak `ACIK` sayılmaz** (en fazla KISITLI). |

**Ek kurallar**
- **200 ≠ veri:** `erisim: ACIK` demek için `ornek_cekim`'de en az bir bölge > 0 ya da açıkça "kaynakta bu bölge yok" kanıtı gerekir (B11 · EVDS ve TÜİK dersi). Yalnız 200 dönen sayfa en fazla `KISITLI` sayılır.
- **Anahtar/parola/token** satıra yazılmaz (anahtar kanonu kural 4). `patron_adimi` yalnız yolu tarif eder.
- **Parsel-düzeyi örnek** (ada/parsel no, koordinat) public'e taşınmaz. `ornek_cekim` yalnız **sayı** içerir (parsel_veri_kanonu_v1).
- Başka CC'nin tarama dosyası düzeltilmez (cc_sinir_kanonu_v1).

## 2a. Lisans (v1.1)

- `erisim: ACIK` ya da `API_ANAHTAR` ise `lisans.sinif` + `lisans.dayanak` zorunlu; yoksa satır **geçersiz** ("lisans yok → ACIK sayılmaz").
- `YAZILI_IZIN` satırı Patron kovasına da düşer (adım: izin yazısı).
- **Patron kovası ön kayıt (Patron 15 Eki):** EPİAŞ üyeliği (isteğe bağlı) · BDDK yazılı izin (ürüne girecekse). Tarama satırı gelmese de kovada görünür.

- **KAPALI istisnası (v1.2 · Finans TCİP emsali):** `erisim: KAPALI` ise `http_kodu` `null` olabilir; şart: `http_durumu: "ERİŞİLEMEDİ"` + en az 3 zaman damgalı deneme (`denemeler[]`: zaman, URL, hata kodu). Damgasız KAPALI geçersiz.
- **Lisans `KARAR_PATRON` (v1.2):** iki resmî metin çelişiyorsa (BDDK emsali: FinTürk 'izinsiz yayımlanabilir' ↔ site şartları 'kısmen alıntı') sınıf `KARAR_PATRON` yazılır, iki dayanak da satırda; Patron kovasına düşer. ACIK sayılır ama ürüne girişi Patron kararına bağlı.

## 2b. PATRON ADIMI süzgeci (Patron 2026-10-14)

- `patron_adimi` **yalnız** şu dört engel için yazılır: **üyelik/kayıt** · **anahtar/token başvurusu** · **SMS/e-Devlet kimlik doğrulaması** · **ödeme/abonelik**.
- **CC işidir, Patron adımı DEĞİLDİR:** menüde gezinmek, doğru sayfayı/alan adını bulmak, JS ile render edilen sayfayı okumak (tarayıcı otomasyonu), form doldurup sorgu çalıştırmak, CAPTCHA'sız arama, dosya indirme bağlantısını bulmak.
- `erisim` `ACIK` veya `KISITLI` ise `patron_adimi` **boş** olmalıdır.
- Emsal: Aİ taramasında iki satır menü/JS işini Patron adımı olarak yazmıştı; düzeltme gönderildi (14 Eki).
- Birleştirmede uygulanır: dört engelden birine işaret etmeyen Patron adımı → satır **geçersiz** ("CC işi Patron'a yazılmış") ve Patron kovasına girmez.

## 3. Birleştirme (Vezir · 2026-10-16 19:26)

Betik: `tradia-beykoz/motor/kaynak_evreni_birlestir.py` (yerel). Çıktılar:
1. `kanon/kaynak_evreni_v2.md` + `motor/kaynak_evreni_v2.json`
2. **ACIK** satırlar → `motor/SEMA.md` bölge motoru kaynak listesi (kök × ölçek)
3. **UYELIK / API_ANAHTAR** satırlar → **Patron kovası tek liste:** `site | neden | adım`
4. **Çakışma:** aynı ana makineyi (host) ≥2 CC taradıysa alanlar karşılaştırılır. `erisim`, `olcek`, `http_kodu` ya da `ornek_cekim` farklıysa → **Tür A çelişki turu** (iki CC aynı yolla yeniden ölçer). Fark yolun kendisindeyse (farklı URL yolu) → Tür B, referans yazılır.
5. **Şema denetimi:** zorunlu alanı eksik ya da `http_kodu`'suz satır **geçersiz** sayılır ve CC'ye geri döner. Geçerli/geçersiz satır sayısı CC başına raporlanır.
6. **Süreklilik:** her geçerli ACIK kaynak `dis_kaynak_sagligi`'na satır olarak girer (günlük HTTP + test tarihi). İçerik imzası olmayanlar "yalnız erişim" damgası taşır.

## 4. Gecikme

Son tarihte dosyası olmayan CC raporda **"yazmadı"** olarak görünür. Birleştirme beklemez; geç gelen dosya bir sonraki birleştirmeye (v2.1) girer.

**Değişiklik:** v1.1 (2026-10-15) lisans alanı + Patron kovası ön kayıt · v1.2 (15 Eki 01:20) KAPALI istisnası (3 damga) + KARAR_PATRON lisans sınıfı.

*Vezir · 2026-10-14 · v1.1 2026-10-15*

## v1.3 ekleri (Patron 15 Eki 18:xx · Aİ tam Türkiye dersleri)

### TAVAN damgası
`erisim: TAVAN` — kaynak **yapısal olarak** belirli bir tarihten/düzeyden ötesini vermez; **bütçe, üyelik, anahtar veya Patron adımı ile AÇILMAZ**. KAPALI'dan farkı: KAPALI "bize kapalı", TAVAN "kimseye yok". Zorunlu alanlar: `tavan_siniri` (ör. "2023-09 · firma düzeyi"), `dayanak` (kaynağın kendi beyanı / kanıtlı tarama), `3 damgalı deneme` KAPALI'daki gibi. Birleştirmede TAVAN satırı **kütüphane kaynak evreninde** kalır (silinmez, "açılacak" listesine girmez). **Emsal:** Sanayi Teşvik firma düzeyi 2019-04 → 2023-09 (53 ay), 2024+ yok, kanıtlı (Aİ `kaynak_tarama_ai_tam_turkiye.json`, 57.369 firma kaydı, 81/81 il).

### Teknik not · WAF ve taze oturum (Aİ dersi)
`sanayi.gov.tr` indirme ucu aynı tarayıcı oturumunda ardışık indirmeyi tıkıyor (1. dosyadan sonra hepsi); `WebFetch` SPA/WAF'a 500/boş döner; çıplak `curl` WAF-engelli. **Çalışan yöntem:** gerçek tarayıcı motoru (Playwright-chromium) + modal kaldırma + force-click + **her dosya için TAZE OTURUM**. Kural: kaynak tarama satırında `erisim_yontemi` alanına yöntem yazılır; "403/500 döndü" tek başına KAPALI hükmü değildir (3 damgalı deneme, en az biri taze oturum + gerçek tarayıcı). Muhtemelen diğer `.gov.tr` indirme uçlarında da geçerli.
*Vezir · 2026-10-15 17:47*
