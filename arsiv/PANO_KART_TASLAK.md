# PANO KART TASLAK — misara-vezir statik pano

**Amaç:** misara-vezir (PUBLIC) statik panosuna "ARŞİV DURUMU" kartı eklenecek.
**Kaynak:** `arsiv/indeks.json` (metadata yalnız)
**Yol:** Patron/Vezir misara-vezir repo'sunda `vezir/ozet-w<N>.json`'a ekleyecek.

---

## HTML Kart Örneği (Bloomberg estetik, #ff6b35)

```html
<div class="card" data-source="arsiv">
  <div class="card-header">
    <span class="card-title">📚 ARŞİV DURUMU</span>
    <span class="card-badge">Standing #37</span>
  </div>
  <div class="card-body">
    <div class="metric">
      <span class="metric-value" id="arsiv-oturum">14</span>
      <span class="metric-label">Toplam Oturum</span>
    </div>
    <div class="metric">
      <span class="metric-value" id="arsiv-mesaj">81.5K</span>
      <span class="metric-label">Toplam Mesaj</span>
    </div>
    <div class="metric">
      <span class="metric-value" id="arsiv-son">2026-08-27</span>
      <span class="metric-label">Son Çekim</span>
    </div>
    <div class="metric metric-alert">
      <span class="metric-value" id="arsiv-kirmizi">1</span>
      <span class="metric-label">🔴 KIRMIZI Bayrak (&lt;7 gün)</span>
    </div>
  </div>
  <div class="card-footer">
    <a href="https://github.com/e-misara/tradia-beykoz/blob/main/arsiv/INDEKS_PUBLIC.md">
      Detaylı Metadata →
    </a>
  </div>
</div>
```

---

## JSON Şeması (ozet-wXX.json içine yeni alan)

```json
{
  "arsiv_durumu": {
    "standing": "#37 KALICILIK PROTOKOLÜ",
    "toplam_oturum": 14,
    "toplam_mesaj": 81543,
    "toplam_boyut_mb": 458.2,
    "son_cekim_tarih": "2026-08-27",
    "kirmizi_bayrak_sayisi": 1,
    "kaynak_url_public_indeks": "https://raw.githubusercontent.com/e-misara/tradia-beykoz/main/arsiv/INDEKS_PUBLIC.md",
    "not": "İçerik PRIVATE (misara-arsiv). Bu kart yalnız metadata sayaçlarını gösterir."
  }
}
```

---

## Vezir Uygulama Adımı (misara-vezir repo'sunda)

1. `git clone https://github.com/e-misara/misara-vezir.git` (yoksa)
2. `vezir/ozet.json` güncelle → `arsiv_durumu` bloğu ekle
3. `vezir/index.html` güncelle → yukarıdaki kart HTML'ini uygun yere yerleştir
4. Fetch script eklenecek — `arsiv_durumu.toplam_oturum` gibi alanlar ID'lere bağla
5. 3-kanal güncelleme (Pages + Raw + jsDelivr) aynen

**Vezir notu:** Bu tur `misara-vezir` repo'su üzerinde çalışma yapılmadı çünkü:
- Ana odak `tradia-beykoz` (misara-arsiv iskeleti + KURULUŞ dosyaları + envanter)
- misara-vezir yerel klon durumu belirsiz
- Patron/Vezir bir sonraki turda misara-vezir'e taşıma yapabilir (bu taslak referans)

---

*PANO_KART_TASLAK.md · Standing #37 · 2026-08-27*
