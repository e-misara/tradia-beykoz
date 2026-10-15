# ADRES ANAHTARI KANONU v1

**Statü:** 🟢 KANON · **YÜRÜRLÜKTE (Patron 15 Eki 18:xx · evren_agaci_v1 ile)** · v1.2 · Patron direktifi 2026-10-14 · V16
**Otorite:** CC-TT-AI evren ağacı (`~/tradia_ttai/mahalle_evren.jsonl`) — kodları Aİ işler (cc_sinir_kanonu_v1)
**Bağlı:** K-numara standardı, TR İ/I/ı slug kuralı, motor/SEMA.md, örümcek BM-K1 KİMLİK (idari-ad otoritesi)

---

## Kural

1. **Tek anahtar:** `TR-<il_kodu>-<ilçe_kodu>-<mahalle_kodu>`
   - `il_kodu`: 2 hane plaka/TÜİK il kodu (`34`)
   - `ilçe_kodu`: 4 hane **TÜİK ilçe kodu** (`1103` = Adalar)
   - `mahalle_kodu`: **evren_agaci_v1 `mahalle_kod` son 4 hanesi** (ilçe içi sıra; ör. Beykoz `34-010-0007` → `TR-34-1185-0007`) — otorite v1, damga **"CC0 liste (tr_idari_birim, kesit 2026-07-30), TKGM 51.655 ile çapraz BEKLİYOR"**; NVİ/UAVT kodu gelince v2. Eski `M:<slug>` biçimi **gösterim takma adı** olarak tabloda kalır, anahtar değildir
   - İlçe düzeyi kayıt: `TR-34-1103`; il düzeyi: `TR-34`.
2. **Ad alanları ayrıdır:** `il_ad`, `ilce_ad`, `mahalle_ad` (gösterim için). Ad **hiçbir zaman anahtar değildir**.
3. **Mahalle yoksa** (semt, bölge, mevkii, köy-altı birim): `"semt_veya_bolge": {"tur": "S" | "B", "ad": "...", "kaynak": "..."}` (S = semt, B = bölge/mevkii). Bu alan yine bir ilçe anahtarına bağlanır.
4. **Çıplak ad yasak:** Bir CC dosyasında (bölge çıktısı, hücre, künye, bülten, hedef kartı, katman, SIG, vaka) anahtarsız mahalle ya da ilçe adı geçen kayıt **KIRIK**tır.
5. **Zorunlu alan:** `bolge_<cc>.json` hücreleri, KUYRUK hücreleri, künye satırları, bülten maddeleri, hedef kartları → `adres_anahtari` alanı. Şema: `motor/SEMA.md` → "Adres anahtarı".

## Kod kaynakları (2026-10-14 Vezir ölçümü)

| Düzey | Kaynak | Durum |
|---|---|---|
| İl | `tr_idari_birim` (plaka) · TÜİK NUTS-3 | ✅ 81/81 |
| İlçe | **TÜİK SDMX `DF_ADNKS_T38` → `IKAMET_YERI` kod listesi** (Patron toplu indirmesi 14 Eki) | ✅ **973/973** · tekil kod · `parent` = NUTS-3 il · "Merkez" adları il önekli ("Adıyaman Merkez") |
| İlçe ↔ `tr_idari_birim` | ad eşleştirme (TR-map → ascii) | ✅ 973/973 |
| İlçe ↔ Aİ evren slug | ad eşleştirme | ⚠ **958/973**. 15 "Merkez" ilçe evrende farklı adlı; evrende 1.010 ilçe slug'ı var (37 çift-etiket artefaktı, Aİ'nin bildirdiği) |
| Mahalle | **evren_agaci_v1** (`02_CC_STATE/evren_agaci_v1.json`, Aİ, 15 Eki 17:47) | ✅ **50.528 mahalle+köy** (32.288 M + 18.240 K) · `mahalle_kod` = `<il>-<ilçe sıra>-<sıra>` · damga: CC0 liste, **TKGM 51.655 ile çapraz BEKLİYOR** (fark 1.127) · eş-adlı risk `esadli_sayisi` (Cumhuriyet 407, Yeni 282, Fatih 252) · çözücü `ad_cozumle(ad, ipucu_il, ipucu_ilce)` belirsizse KARAR VERMEZ |
| İlçe ↔ evren | `evren ilce_kod` (plaka-sıra, **TÜİK değil** — Aİ kodlama notu) ↔ TÜİK 4 hane | ✅ eşleme tablosu `02_CC_STATE/adres_anahtari_ilce_eslesme_v1.tsv` (Vezir 15 Eki) — anahtarda **TÜİK kodu** kalır, evren kodu iç referanstır |

Öneri eşleme tablosu (Aİ benimseyecek): `02_CC_STATE/vezir_oneri_adres_anahtari_ilce.tsv` (973 satır: anahtar · plaka · TÜİK ilçe kodu · il · TÜİK adı · kısa ad · tr_idari_birim adı · Aİ slug).

## Ek · Havalimanı birimi (v1.1 · Patron 15 Eki)

Havalimanı il değildir; **`ana_il` + `paylasilan_iller[]`** ile yazılır (otorite: Aİ evren ağacı `havalimani_evren.json`; **kaynak tablo: Finans `02_CC_STATE/finans/dhmi_havalimani_il_eslesme.json` — 58 havalimanı, 4 çok-illi, Patron 15 Eki: evren ağacına alındı (evren_agaci_v1 `havalimanlari`); Vezir teyit: Zafer = Kütahya + Afyonkarahisar + Uşak, Bilecik YOK; `ana_il_dogrula` **3/58 true, 55/58 FALSE (doğrulanmamış — Aİ dürüst notu; Vezir'in 18:1x 'tam 58/58' yazısı HATALIYDI, yalnız Zafer'e bakılmıştı, düzeltildi)**). Çok illi havalimanları: Çukurova (Mersin + Adana) · Ordu-Giresun (Ordu + Giresun) · Rize-Artvin (Rize + Artvin) · Zafer (Kütahya + Afyonkarahisar + Uşak). Kapadokya = Nevşehir tek. **Yolcu sayısı tek ile yazılmaz:** il×ay matrisinde ana ile sayı, paylaşılan illere şerh. Finans DHMİ hasadı (15 Eki) ilk uygulama.

## Bilinen çakışma türleri (denetimde aranır)

- **Aynı ad, çok ilçe:** "Merkez" (51 il), "Yeni Mahalle", "Cumhuriyet", "Fatih", "Atatürk" vb. mahalle adları.
- **Ad = başka şey:** "Kartal" (ilçe + soyadı + kuş), "Fatih" (ilçe + kişi adı), "Bahçelievler" (ilçe + yüzlerce mahalle).
- **İl adı = merkez ilçe adı:** büyükşehirlerde "Adana" ilçe değildir; büyükşehir olmayan 51 ilde il merkezi "Merkez" ilçesidir.

## Emsal · İlk uygulama (Sosyal, 15 Eki)
"Kartal" **ad eşleşmesiyle** 3 ilgisiz YouTube kanalı Kartal ilçesine atanmıştı (27 → 4 kanal); anahtar yerine ad kullanımı = kural 4 **KIRIK** kaydı. Uyumsuzluk defteri U-04. Ders: kanal/aktör eşleşmesi `ad_cozumle` + il ipucu + ikinci kanıt ister; "Kartal" il teyidi zorunlu (Basın süzgeci de aynı kuralı taşır).

*Vezir · 2026-10-14 · v1.2 15 Eki*
