# MISARA · MU-01 (Standing #41)

**Sürüm:** v1 · Kartal pilot + 80 il iskelet
**Tarih:** 2026-08-27
**Kanal:** Vezir · $0 · AI çağrısı YOK · Internet YOK

---

## Ne Bu?

macOS yerel masaüstü uygulaması. Node yok, Electron yok, internet yok.
Saf Python stdlib + vanilla HTML/CSS/JS. Sadece bu Mac'te çalışır.

**Test kriteri (direktif):** Patron ekrana 5 saniye bakınca yönünü bulmalı.

---

## Çalıştırma

### İlk kez

1. `MISARA.command` dosyasını çift-tıkla
2. Terminal açılır, sunucu :8787 portunda kalkar
3. Tarayıcı otomatik açılır → `http://localhost:8787/`

### Kapatma

Terminal penceresinde `Ctrl+C` → Enter.

### İkon (Patron)

`ikon/misara.icns` boş şimdilik. Patron:
1. İkon dosyası hazırlanınca `ikon/misara.icns`'e koy
2. Finder'da `MISARA.command`'a sağ tık → Get Info → sol üstteki ikona `.icns` sürükle

---

## Yapı

```
misara-app/
├── MISARA.command             ← çift-tıkla çalıştır
├── sunucu.py                  ← Python stdlib http server, :8787
├── tarama_dongusu.py          ← launchd 3-günlük iş
├── com.misara.uc_gunluk_tarama.plist  ← launchd konfig
├── index.html · style.css · app.js    ← vanilla web arayüzü
├── ikon/misara.icns           ← Patron ekler
└── veri/
    ├── cografya.json          ← Türkiye/il/ilçe/mahalle ağacı
    ├── DURUM.json             ← CC şeridi + patron görev + kırmızı şerit
    └── son_tarama.json        ← launchd damgası (otomatik)
```

---

## Ekran

- **Üst:** Kırılım çubuğu (Türkiye › İl › İlçe › Mahalle) + "ŞİMDİ TARA"
- **Orta sol:** Düğüm-liste harita (poligon yok; il/ilçe/mahalle kartları)
- **Orta sağ:** Seçili düğüm kartı (A ana özet + B derin özet + son yazım tarihi)
- **Alt sol:** CC şeridi + hedefe mesafe (2/81 il · 2 pilot ilçe)
- **Alt sağ:** Patron görev kartı (DURUM.json'dan)

---

## 3-Günlük Döngü (launchd)

**Kurulum:**
```bash
cp com.misara.uc_gunluk_tarama.plist ~/Library/LaunchAgents/
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.misara.uc_gunluk_tarama.plist
```

**Kaldırma:**
```bash
launchctl bootout gui/$(id -u)/com.misara.uc_gunluk_tarama
rm ~/Library/LaunchAgents/com.misara.uc_gunluk_tarama.plist
```

**Kontrol:**
```bash
launchctl list | grep misara
cat veri/tarama_stdout.log
cat veri/son_tarama.json
```

**Kural:** launchd 3 günde bir `tarama_dongusu.py` çağırır. Şu an **iskelet** — gerçek tarama henüz uygulanmadı. Uygulama SADECE OKUR + GÖSTERİR (üretim ayrı CC'nin işi).

---

## Kartal Pilot

- **Kartal ilçesi** dolu (A + B özet + rakamlar + gözlem)
- Diğer 38 İstanbul ilçesi + 80 il = iskelet
- **Kural:** "Kartal çalışmadan 81 ile açılmaz."

Kartal'da açılan detay:
- A: mahalle/nüfus/km² + genel karakter
- B: alt-bölge analizi + son yazım tarihi (kart altında)
- Kaynak dosya yolu her rakamın yanında

**Beykoz** ilçesi zaten kapandı (TAM_KAPANDI · 45 mahalle · 119 dosya · `beykoz_vaka/`).

---

## Kural Kontrolü (Direktif)

- ✅ Node yok · Electron yok · internet yok
- ✅ Saf Python stdlib + vanilla HTML/CSS/JS
- ✅ Telefon sürümü YOK (viewport `width=1200`)
- ✅ Bloomberg-dark (#0a0e14 · #ff6b35 · JetBrains Mono)
- ✅ Veri dosyası yoksa "VERİ YOK" gösterir (eski veri gösterme kuralı)
- ✅ Her rakamın yanında kaynak dosya
- ✅ launchd (cron değil)
- ✅ Uygulama veri ÜRETMEZ (sadece okur)
- ⚠ İkon boş (Patron ekleyecek)

---

## Bilinen Eksikler (v1 iskelet)

Bkz. `BITTI.md`.
