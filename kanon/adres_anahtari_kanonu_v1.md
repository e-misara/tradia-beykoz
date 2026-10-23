# ADRES ANAHTARI KANONU v1

**Statü:** 🟢 KANON · **YÜRÜRLÜKTE** · **v1.3** (Üst Akıl EK1-A, Patron 23.10 20:33: 'isim benzerlikleri yanlış kayıt olmasın') · v1.2 15 Eki · Patron direktifi 2026-10-14 · V16
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

## v1.3 · Adres doğruluğu (Üst Akıl EK1 §A · Patron 23.10 20:33) — Vezir yazdı, Aİ + Hafıza uygular

**Ölçülen risk (A0, Üst Akıl 23.10):** aynı kısa adlı ilçe 25 ad (+Merkez 51 il); önek çakışması 34 çift (Buca/Bucak, Kale/Kalecik…); ilçe adı = başka yerde mahalle adı 455 ad/4.502 mahalle (Fatih 252, Bahçelievler 171…); il adı = mahalle adı 32 il/199; 50.528 mahalle/köy için 22.996 ad, yalnız 16.616 tekil (Cumhuriyet 407, Yeni 282, Fatih 252); TÜİK master'da 100 ilçe il önekli ("Rize Pazar"); evren TKGM 51.655 çaprazı BEKLİYOR (fark 1.127), Afyonkarahisar çift anahtar açık. **Sonuç:** metinden ad eşlemesi tek başına anahtar üretemez.

### Kurallar
1. **Ad anahtar değildir** (kural 2, 4): deftere giren her il/ilçe/mahalle alanı anahtar taşır; çıplak ad `ilce_ad_ham` olarak kalır.
2. **İki sinyal kuralı:** metinden çözülen ilçe/mahalle anahtarı ancak **iki bağımsız sinyal** aynı yeri gösterirse yazılır: (a) metindeki ad + (b) kaynak ili / kanal ili / idare ili / URL alanı / şirket merkezi. Tek sinyal → yalnız il (`TR-NN`), ilçe yazılmaz.
3. **Çakışma sözlüğü v1** `02_CC_STATE/tablo/referans/ad_cakisma_sozlugu_v1.json` (yazar Aİ, doğrulayan Hafıza): 25 eş-adlı ilçe + Merkez, 34 önek çifti, 455 ilçe=mahalle adı, 32 il=mahalle adı, en eş-adlı 200 mahalle. Sözlükteki ad **hiçbir zaman tek sinyalle çözülmez**; "Merkez" yalnız il anahtarı belliyken.
4. **Çözüm güveni her satırda:** `cozum_yontemi` + `cozum_guven` — **A** resmî kod/anahtar kaynağın kendisinden · **B** iki sinyal · **C** tek sinyal, yalnız il düzeyi. Güven C ile ilçe/mahalle yazmak **red** nedenidir.
5. **Mahalle anahtarı listeye karşı:** Hafıza doğrulayıcı `tablo/referans/mahalle_master.csv` (evren_agaci_v1 türevi, Aİ otorite, 50.528 satır) ile denetler; listede olmayan anahtar red (`mahalle_anahtari_listede_yok`).
6. **Kaynak ili tuzağı:** KAP'ta il = şirket merkezi, olay yeri değil → özette yatırım ili varsa o; yoksa `il_anahtari` = şirket merkezi + **`il_kaynagi: sirket_merkezi`**. Aynı bayrak yerel RSS (`kaynak_ili`), YouTube (`kanal_ili`), `metin`, `idare`.
7. **Yurt dışı olay deftere girmez** (Türkiye süzgeci üreticide; Hafıza red `turkiye_disi`).
8. **Yanlış adres = ölçü, ihlal değil:** günlük örnekleme yanlış bulursa yama ile düzelir, `yanlis_adres` sayacı artar; düzeltme adres geçmişinde kalır.

### Günlük adres denetimi (A2 · Hafıza + Aİ · 24.10'dan)
Hafıza 03:10: günlük satırlardan **rastgele 40 çözülmüş satır + çakışma sözlüğü adlı tüm satırlar** → `akis/denetim/adres_ornek_<gün>.jsonl`. Aİ 07:00'a kadar **bağımsız ikinci yöntemle** DOĞRU/YANLIŞ/BELİRSİZ → `akis/denetim/adres_sonuc_<gün>.jsonl`, YANLIŞ'a yama. **Ölçü 4: adres doğruluğu = DOĞRU/(DOĞRU+YANLIŞ) ≥ %97**; altı KIRMIZI (gece raporu + gazete). Geçmiş yüklemede 1.000 satırda 40.

### Açık borçlar (7 gün)
Aİ: TKGM 51.655 çapraz (fark 1.127), Afyonkarahisar çift anahtar kararı, `mahalle_master.csv`, çakışma sözlüğü v1 (26.10) · Hafıza: doğrulayıcıya 4/5/7, `akis/denetim/`, ölçü satırı (25.10) · Sosyal, Borsa, Basın, İhale, Tic: `il_kaynagi` + Türkiye süzgeci.
*Vezir · 2026-10-23 20:42 · v1.3*
