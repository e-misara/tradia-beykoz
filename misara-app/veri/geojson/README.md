# GeoJSON kaynakları · Türkiye idari birimler

## Kanon (DM-02+ 2026-08-27)

Uygulama İL seviyesinde çalışır. İlçe polygon şart değil.
İlçeler mahalle gibi liste olarak açılır. Uygulama bu yüzden beklemeyecek.

## İl seviyesi (81 il) — HAZIR ✅

- **Dosya:** `il.geojson` (236 KB)
- **Kaynak:** github.com/alpers/Turkey-Maps-GeoJSON · `tr-cities.json`
- **Lisans:** Apache 2.0 (LICENSE_alpers)
- **Kalite:** MultiPolygon her il için, TÜİK isimleriyle uyumlu
- **İndirme:** 2026-08-19

## İlçe seviyesi (975 ilçe) — HAZIR ✅ (kanon-üstü kazanç)

- **Dosya:** `ilce.geojson` (26 MB, sıkıştırılmadı)
- **Kaynak:** OSM Overpass API `admin_level=6` (2026-08-27T20:04Z)
- **Lisans:** ODbL (Open Database License) — Atıf: © OpenStreetMap contributors
- **Kalite:** 975 ilçe (DB'de 973, 2 fark 2020+ ayrılmalar)
- **Sınır:** OSM relation → basit MultiPolygon dönüşümü. Kartal 28 parça — sınır way'leri ayrı geldi. Uygulama için yeterli, harita rendering'de görünür.

## Sıkıştırma (sonraki DM)

- 26 MB büyük — mapshaper/topojson ile simplify + gzip → hedef 3-5 MB
- Şimdilik `misara-app/veri/geojson/` altına KOPYALANMADI (repo şişmesin)
- Simplify sonrası köprü'ye eklenir

## Mahalle seviyesi — YOK (Kanon)

Bütünlüklü ücretsiz açık-kaynak MAHALLE-POLİGON set yok. Mahalleler
`cografya.json` içinde LİSTE olarak durur, haritada çizilmez.
Detay: `GEOJSON_KAYNAK_NOTU_20260819.md`

## Güncelleme 2026-08-27 · İlçe eklendi (simplified)

- `ilce.geojson` 2.60 MB (kaynak 26 MB → Douglas-Peucker eps=0.0027 → -90% boyut)
- 974/975 ilçe (1 kayıp: çok küçük ring)
- Kaynak: OSM Overpass `admin_level=6` · Lisans: ODbL
- Simplify script: `tradia_sorgu/scripts/ilce_simplify.py`
