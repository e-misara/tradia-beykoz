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
| `lisans` | `{"sinif": IC_KULLANIM \| KAYNAK_GOSTER \| YAZILI_IZIN \| YASAK, "dayanak": "<lisans metni/sayfa URL'si/mevzuat>"}` | **(v1.1 · Patron 15 Eki)** Kullanım hakkı. `IC_KULLANIM` = yalnız iç analiz · `KAYNAK_GOSTER` = atıfla yayımlanabilir · `YAZILI_IZIN` = ürüne girmesi yazılı izne bağlı (Patron adımı) · `YASAK` = kullanılmaz. Dayanak zorunlu. **Lisansı boş/dayanaksız kaynak `ACIK` sayılmaz** (en fazla KISITLI). |

**Ek kurallar**
- **200 ≠ veri:** `erisim: ACIK` demek için `ornek_cekim`'de en az bir bölge > 0 ya da açıkça "kaynakta bu bölge yok" kanıtı gerekir (B11 · EVDS ve TÜİK dersi). Yalnız 200 dönen sayfa en fazla `KISITLI` sayılır.
- **Anahtar/parola/token** satıra yazılmaz (anahtar kanonu kural 4). `patron_adimi` yalnız yolu tarif eder.
- **Parsel-düzeyi örnek** (ada/parsel no, koordinat) public'e taşınmaz. `ornek_cekim` yalnız **sayı** içerir (parsel_veri_kanonu_v1).
- Başka CC'nin tarama dosyası düzeltilmez (cc_sinir_kanonu_v1).

## 2a. Lisans (v1.1)

- `erisim: ACIK` ya da `API_ANAHTAR` ise `lisans.sinif` + `lisans.dayanak` zorunlu; yoksa satır **geçersiz** ("lisans yok → ACIK sayılmaz").
- `YAZILI_IZIN` satırı Patron kovasına da düşer (adım: izin yazısı).
- **Patron kovası ön kayıt (Patron 15 Eki):** EPİAŞ üyeliği (isteğe bağlı) · BDDK yazılı izin (ürüne girecekse). Tarama satırı gelmese de kovada görünür.

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

**Değişiklik:** v1.1 (2026-10-15) lisans alanı + Patron kovası ön kayıt.

*Vezir · 2026-10-14 · v1.1 2026-10-15*
