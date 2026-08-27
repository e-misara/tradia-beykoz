# MU-01 · v1 · BITTI (iskelet + Kartal pilot)

**Tarih:** 2026-08-27
**Sprint:** Standing #41 · MU-01
**Kaynak:** Üst Akıl direktifi (yerel masaüstü uygulaması)
**Kanal:** Vezir uygulama · $0 · AI çağrısı YOK · Internet YOK · Node YOK · Electron YOK

---

## Yerel Test — Çalışıyor ✅

Beş API uç noktası + statik HTML/CSS/JS canlı sunucu üzerinden test edildi:

| Uç | Sonuç |
|---|---|
| `GET /api/meta` | ✅ 200 · app, sürüm, port, veri sayısı, zaman |
| `GET /api/cografya` | ✅ 200 · Türkiye ağacı · 6 il · Kartal DOLU_PILOT · A+B özet |
| `GET /api/durum` | ✅ 200 · 17 CC · 4 kırmızı şerit · 6 patron görevi |
| `GET /api/simdi_tara` | ✅ 200 · elle-tetik damgası (`veri/son_tarama.json`) |
| `GET /` (statik) | ✅ 200 · index.html · 223 satır CSS · 431 satır JS |

**Kullanım:** `MISARA.command` çift-tıkla → tarayıcıda `http://localhost:8787/`

---

## Dosyalar

```
misara-app/
├── MISARA.command                      ← çift-tıkla, chmod +x ✅
├── sunucu.py                           ← Python stdlib · :8787
├── tarama_dongusu.py                   ← launchd iş (iskelet)
├── com.misara.uc_gunluk_tarama.plist   ← launchd konfig (3 günlük)
├── index.html                          ← 5 bölge yerleşim
├── style.css                           ← Bloomberg-dark, JetBrains Mono
├── app.js                              ← Vanilla · fetch API · router
├── README.md                           ← Kurulum + kullanım
├── BITTI.md                            ← bu dosya
├── ikon/                               ← boş · Patron ekleyecek
└── veri/
    ├── cografya.json                   ← 6 il + Kartal DOLU + Beykoz KAPANDI
    ├── DURUM.json                      ← CC + Görev + Kırmızı şerit
    └── son_tarama.json                 ← launchd damgası (otomatik)
```

---

## Ekran Yapısı (Direktif Uyumu)

- ✅ Üst: Kırılım çubuğu (Türkiye › il › ilçe › mahalle) + "ŞİMDİ TARA"
- ✅ Sol: Harita (poligon yok — düğüm-liste, il/ilçe/mahalle tıklanabilir)
- ✅ Sağ: Seçili düğüm kartı (Kartal için A + B ayrı etiketli, B altında son yazım tarihi)
- ✅ Alt-sol: CC şeridi + hedefe mesafe ("2/81 il · 2 pilot ilçe")
- ✅ Alt-sağ: Patron görev kartı (DURUM.json.patron_gorev)
- ✅ Bloomberg-dark: `#0a0e14` bg · `#ff6b35` accent · JetBrains Mono
- ✅ Telefon sürümü YOK (viewport `width=1200`)

---

## Kural Uyumu

- ✅ Node yok · Electron yok · internet yok · saf Python stdlib
- ✅ Veri dosyası yoksa "VERİ YOK" (`app.js#veriYok` + `.veri-yok` class)
- ✅ Her rakamın yanında kaynak dosya (`cografya.json#kartal_temel` gibi)
- ✅ Kartal pilot uçtan uca dolu (A + B + gözlem + rakamlar + son yazım tarihi)
- ✅ launchd (cron değil) · 3-günlük döngü plist hazır
- ✅ Uygulama veri ÜRETMEZ (sadece okur — `sunucu.py._simdi_tara` yalnız damga atar)
- ✅ "Bitti diye rapor verme, hangi parça çalışmadığını yaz" — aşağıda

---

## Eksik Parçalar (v1 iskelet — çalışmayan)

### 🔴 İçerik boşlukları

1. **80 il iskelet** — İstanbul + Bursa + Çanakkale + Konya + Ankara + İzmir dışında 75 il **`cografya.json`**'da yok. Kural gereği (Kartal önce çalışmalı) v2'ye kaldı.

2. **İstanbul 39 ilçesinden 37'si iskelet** — Kartal + Beykoz dolu; kalan 37 ilçe için boş. Beyoğlu, Kadıköy, Şişli, Fatih vb. hiçbir düğüm yok.

3. **Kartal mahallelerinin A+B içeriği yok** — 5 mahalle taslak (`cografya.json.turkiye.iller.istanbul.ilceler.kartal.mahalleler`), ama sadece "TASLAK" durumu. Gerçek A/B özet yazılmadı.

4. **Beykoz mahallelerinden 8 tanesi listeli** — Ansiklopedi 45 mahalle var ama JSON'da sadece 8 (Riva, Çubuklu, İncirköy, Tokatköy, Elmalı, Kavacık, Paşabahçe, Anadolu Hisarı). Kalan 37 mahalle referans için `beykoz_vaka/beykoz_ansiklopedi/` altında ama JSON ağacında değil.

### 🟡 İşlevsel eksikler

5. **launchd `tarama_dongusu.py` iskelet** — sadece damga atıyor. Gerçek "A katmanını yenile / B'yi güncelle" mantığı yok. Kural (uygulama üretmez) uyumlu ama üretici CC'nin ne yapacağı belirsiz.

6. **İkon dosyası YOK** — `ikon/misara.icns` boş. Patron finder'dan takacak (README'de talimat).

7. **Poligon yok (kasıtlı)** — Direktif "poligon yok" dedi. Düğüm-liste ile açıldı. Gerçek harita katmanı gelecek CC turu.

8. **B katmanı son-yazım-tarihi manuel** — Kartal için "2026-08-27" sabit. Otomatik güncelleme mekanizması yok.

### 🟢 Kabul edilebilir eksikler

9. **Meta polling yok** — Sayfa açıldığında bir kez fetch. F5 gerek. Real-time güncelleme gelecek CC turu.

10. **Kararlar (`kararlar.md`) linkleri kart-dışı** — Kart-içinde "kaynak dosya" gösteriyor ama tıklanabilir link değil (yerel `file://` sorun yaratabilir). Metin.

11. **Uluslararası dil desteği yok** — Direktife göre Türkçe tek dil. TR karakterler CSS'te sorunsuz.

---

## Bloke (Push)

`gh auth login` hâlâ kapalı. Yerelde 3 commit bekliyor:
- `f9183cc` Standing #37
- `fdd23e1` BE-01 + BE-01/H
- `eb3a2ca` pano/index.html whitelist

Ve bu turda **MU-01 v1** eklenecek.

**Patron aksiyonu:** `gh auth login` sonra tek `git push origin main` → 4 commit birden gider.

---

## Sonraki Turlar (MU-02+)

**Öncelik sırası (Vezir önerisi):**

1. **Kartal 5 mahallenin A+B içeriği** — cografya.json genişletme
2. **İstanbul kalan 37 ilçe iskelet** — düğümler görünsün, "ISKELET" statüsü
3. **tarama_dongusu.py'ye gerçek iş** — Hafıza SORGU-01'den CC şeridi yenileme
4. **launchd kurulum otomasyonu** — `MISARA.command` içine ilk-çalıştırma bootstrap
5. **İkon** — Patron `.icns` ekleyince Finder'dan bağla
6. **Poligon katmanı** — d3-topojson veya vanilla SVG (dış-bağımlılık yasağı devam ediyorsa vanilla SVG)
7. **Gerçek zamanlı bildirim** — SSE (Server-Sent Events, stdlib uyumlu) ile CC durumu değişince toast

---

## Test Kriteri (Direktif)

> "Kartal uçtan uca dolu çalışacak."

**Manuel test:**
1. `MISARA.command` çift-tıkla
2. Tarayıcıda "İstanbul" tıkla → 2 ilçe görünür (Kartal + Beykoz)
3. "Kartal" tıkla → sağ kartta A ana görünüm + B derin görünüm + rakamlar + gözlem listesi + son yazım tarihi
4. Kartaldaki 5 mahalle listelenir (TASLAK) — tıklanınca "B KATMANI YOK" gösterir (dürüst)

**Sonuç:** Kartal ilçe düzeyi ✅ dolu. Mahalle düzeyi ✗ iskelet.

---

## Direktif Uyum Puanı (Vezir öz-değerlendirme)

| Direktif kriteri | Puan | Not |
|---|---|---|
| Node/Electron/Internet YOK | ✅ | Saf stdlib |
| Telefon sürümü YOK | ✅ | width=1200 |
| Bloomberg-dark | ✅ | Renk + font eşleşiyor |
| launchd (cron değil) | ✅ | plist hazır |
| Uygulama okur, üretmez | ✅ | sunucu.py damga atar |
| Veri yoksa "VERİ YOK" | ✅ | JS + CSS destek |
| Kaynak dosya her rakamda | ✅ | Kartal kartında `.kart-kaynak` |
| Kartal dolu | 🟡 | İlçe düzeyi dolu, mahalle iskelet |
| 81 il iskelet | 🟡 | 6 il var, 75 yok (Kartal çalışsın önce kuralı) |
| İkon | 🔴 | boş, Patron ekleyecek |

**Genel:** v1 iskelet + Kartal pilot **çalışıyor.** Direktifin "bitti diye rapor verme" kuralı gereği eksikler §Eksik Parçalar listelendi.

---

*Vezir MU-01 v1 · $0 · 2026-08-27 · Standing #41*
