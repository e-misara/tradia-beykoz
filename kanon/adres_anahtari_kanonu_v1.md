# ADRES ANAHTARI KANONU v1

**Statü:** 🟢 KANON · Patron direktifi 2026-10-14 · V16
**Otorite:** CC-TT-AI evren ağacı (`~/tradia_ttai/mahalle_evren.jsonl`) — kodları Aİ işler (cc_sinir_kanonu_v1)
**Bağlı:** K-numara standardı, TR İ/I/ı slug kuralı, motor/SEMA.md, örümcek BM-K1 KİMLİK (idari-ad otoritesi)

---

## Kural

1. **Tek anahtar:** `TR-<il_kodu>-<ilçe_kodu>-<mahalle_kodu>`
   - `il_kodu`: 2 hane plaka/TÜİK il kodu (`34`)
   - `ilçe_kodu`: 4 hane **TÜİK ilçe kodu** (`1103` = Adalar)
   - `mahalle_kodu`: NVİ/UAVT mahalle kodu (**kaynak henüz yok** · aşağı bak)
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
| Mahalle | NVİ/UAVT kodu | ❌ **YOK.** Hiçbir kaynağımızda sayısal mahalle kodu yok. Geçici: `TR-<il>-<ilçe>-M:<aİ_slug>` (ör. `TR-34-1103-M:burgazada`), Aİ evren ağacı otoritesinde. NVİ/UAVT kodu bulununca değişir. Erişim gerekiyorsa Patron adımı (kaynak tarama şeması §2b). |

Öneri eşleme tablosu (Aİ benimseyecek): `02_CC_STATE/vezir_oneri_adres_anahtari_ilce.tsv` (973 satır: anahtar · plaka · TÜİK ilçe kodu · il · TÜİK adı · kısa ad · tr_idari_birim adı · Aİ slug).

## Ek · Havalimanı birimi (v1.1 · Patron 15 Eki)

Havalimanı il değildir; **`ana_il` + `paylasilan_iller[]`** ile yazılır (otorite: Aİ evren ağacı `havalimani_evren.json`; **kaynak tablo: Finans `02_CC_STATE/finans/dhmi_havalimani_il_eslesme.json` — 58 havalimanı, 4 çok-illi, Patron 15 Eki: evren ağacına havalimanı tablosu olarak alınır; Vezir teyit: Zafer = Kütahya + Afyonkarahisar + Uşak, Bilecik YOK, `ana_il_dogrula` 58/58 true**). Çok illi havalimanları: Çukurova (Mersin + Adana) · Ordu-Giresun (Ordu + Giresun) · Rize-Artvin (Rize + Artvin) · Zafer (Kütahya + Afyonkarahisar + Uşak). Kapadokya = Nevşehir tek. **Yolcu sayısı tek ile yazılmaz:** il×ay matrisinde ana ile sayı, paylaşılan illere şerh. Finans DHMİ hasadı (15 Eki) ilk uygulama.

## Bilinen çakışma türleri (denetimde aranır)

- **Aynı ad, çok ilçe:** "Merkez" (51 il), "Yeni Mahalle", "Cumhuriyet", "Fatih", "Atatürk" vb. mahalle adları.
- **Ad = başka şey:** "Kartal" (ilçe + soyadı + kuş), "Fatih" (ilçe + kişi adı), "Bahçelievler" (ilçe + yüzlerce mahalle).
- **İl adı = merkez ilçe adı:** büyükşehirlerde "Adana" ilçe değildir; büyükşehir olmayan 51 ilde il merkezi "Merkez" ilçesidir.

*Vezir · 2026-10-14*
