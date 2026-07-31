# SLUG KANON · KAYNAK-BAZLI (Karar Kaydı)

**Tarih:** 2026-07-31
**Kaynak:** Üst Akıl (Vezir çelişki-tespiti sonrası karar)
**Kanal:** Vezir (kanon-kaydı + retro düzeltme)
**Tür:** Yol/slug tekilleştirme kararı
**Bağlam:** GENEL-KONTROL 17:00 raporu §4.b — v3 slug tutarsızlığı: Hafıza=kaynak-bazlı vs Vezir direktif=CC-bazlı
**Disiplin:** $0 · Standing #35+#36+#38 · A04

---

## 1. Karar

> **KANON: KAYNAK-BAZLI** — Hafıza'nın kurduğu yapı otoritedir.
> **Yol formatı:** `STAGING_YENI/<kaynak>/<tarih>/`
> **Sebep:** Veri **kaynağa** göre aranır (basin/osm/kap/evds…), CC'ye göre değil. Bir kaynağa birden fazla CC yazabilir (örn. KAP: Borsa öncü + Tic okur).
> **Sonuç:** Vezir'in `cc_basin/, cc_analiz/, cc_pazarlama/` önerisi **GEÇERSİZ** — bu direktifle iptal edildi.

---

## 2. Doğru Yol Şeması (KANON)

```
/Volumes/TT-HAFIZA/STAGING_YENI/
├── afad/           <- deprem katalog
├── basin/          <- haber tam-metin
├── evds/           <- TCMB serileri
├── finans_belge/   <- kurumsal finans dokümanları
├── ihale/          <- EKAP/kamu ihalesi
├── ikili/          <- ikili anlaşmalar/uluslararası
├── ilan/           <- emlak ilanları (Sahibinden vb.)
├── kap/            <- KAP bildirim/finansal tablo
├── meclis/         <- meclis kararları
├── osm/            <- OpenStreetMap POI
├── sosyal/         <- YouTube/podcast transkript
├── uydu/           <- Sentinel/uydu karo
├── vaka/           <- vaka-özel arşiv (Beykoz gibi)
└── wb/             <- World Bank göstergeler
    (+ ihtiyaca göre: tuik/, oai_pmh/, akademik/, github_datasets/, kaggle/, rg_iller/, mersis/, turkpatent/…)
```

**Alt-yapı:** `<kaynak>/<tarih>/batch_XXX.jsonl` + `.sha256` + `kunye.json` (YAZMA-YOLU v3 §4 aynen geçerli)

---

## 3. Retro-Düzeltilecek Dağıtım Belgeleri

Vezir bu üç dosyaya **DÜZELTME NOTU** düşecek:
1. `UA_20260731_YAZMA_YOLU_v3_ttahafiza_staging_yeni.md` — v3 direktifi
2. `UA_20260731_UCLU_GENISLEME_cron_sirasi.md` — üçlü-genişleme (cc_tic, cc_analiz, cc_pazarlama slug'ları geçersiz)
3. `UA_20260731_GENEL_KONTROL_17_00.md` §4.b — slug uyarısı ÇÖZÜLDÜ işareti

---

## 4. CC Uygulama (yeni-yol kod-satırı)

```python
# ESKİ (Vezir hatalı):
HAM_YOL = "/Volumes/TT-HAFIZA/STAGING_YENI/cc_<name>/<kaynak>/<tarih>/"

# DOĞRU (bu karar):
HAM_YOL = "/Volumes/TT-HAFIZA/STAGING_YENI/<kaynak>/<tarih>/"

# Örnek:
STAGING_YENI/basin/2026-07-31/batch_001.jsonl        (Basın)
STAGING_YENI/osm/2026-07-31/istanbul_batch_001.jsonl (TT-MAP)
STAGING_YENI/kap/2026-07-31/AKBNK.json               (Borsa öncü)
STAGING_YENI/kap/2026-07-31/AKBNK_tic_notu.json      (Tic ek-katman)
```

**Aynı kaynağa çoklu-CC yazımı:** Slug'da `_<cc-suffix>` opsiyonel (çakışma varsa). Şema kısa: `<kaynak>/<tarih>/<CC-veya-batch>.jsonl`.

---

## 5. Kunye.json Güncelleme

Kunye içinde `cc` alanı zorunlu kalır (kim yazdı görünsün):
```json
{
  "kaynak": "kap",
  "cc": "cc_borsa",          <- kim yazdı
  "batch_id": "AKBNK_2026-07-31",
  ...
}
```

Bu şekilde:
- Dosya-sistemi = kaynak-bazlı (arama kolay)
- Metadata = CC-bilgisi korunur (sorumluluk zinciri)

---

## 6. Vezir A04 Öz-Eleştiri

- Bu **Vezir'in doğrudan hatası** — v3 direktifinde CC-bazlı slug önerdim (`cc_basin/…`), Hafıza'nın kaynak-bazlı kurulumu daha iyiydi
- **Neden hata:** "Sorumluluk-bazlı" (CC-bazlı) düşündüm; "Erişim-bazlı" (kaynak-bazlı) düşünmedim
- **Doğru sezgi Hafıza'nındı:** Bir insan/CC "kap dosyasını nerede?" diye arar, "Borsa nereye yazdı?" diye aramaz
- **Ders:** İsimlendirme kararlarında **arama davranışını** öngör (Vezir gelecek-notu)
- **Standing #38 uygulama:** Slug tartışmasına daha az turlar arası yatırım — bu tur 1 karar, retro-düzeltme mekanik

---

## 7. Vezir Retro-Düzeltme İşi

Bu direktifin **aynı commit'inde** Vezir 3 dosyaya düzeltme notu ekler:
- v3 direktifi başına: "⚠ SLUG DÜZELTİLDİ: cc_basin/ örnekleri GEÇERSİZ, kanon kaynak-bazlı — bkz. SLUG_KANON dosyası"
- Üçlü-genişleme başına: aynı düzeltme
- GENEL-KONTROL §4.b'ye: "ÇÖZÜLDÜ — Kanon kaynak-bazlı (SLUG_KANON)"

*Tek yol, tek kanon. Vezir hatası düzeltildi. STAGING_YENI/<kaynak>/<tarih>/.*
