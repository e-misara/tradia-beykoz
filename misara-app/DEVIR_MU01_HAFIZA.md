---
doc: MISARA · MU-01 devir notu → TT-HAFIZA
tarih: 2026-08-27
devreden: CC-Site (park'a döndü)
devralan: TT-HAFIZA (bakım + MU-02 7 modül)
kural: uygulama VERİ ÜRETMEZ · SADECE OKUR + GÖSTERİR
kapsam: mimari · SEMA sözleşmesi · deep-link · bilinen eksikler · Hafıza'nın ilk 3 işi
---

# MU-01 DEVİR NOTU

MU-01 (masaüstü MISARA uygulaması) devralma + tanı + düzeltme + doğrulama tamamlandı. Bu belge, TT-HAFIZA'nın kod dokunmadan bakım yapabilmesi ve MU-02 7 modüle geçebilmesi için yazıldı. **CC-Site bu belge yazıldıktan sonra parka döner** (Patron kararı: web sitesi en sona, çağrılınca gelir).

---

## 1. Mimari — hangi dosya neyi yapar

```
misara-app/
├── MISARA.command          # macOS çift-tık başlatıcı (bash) → sunucu.py'yi çağırır
├── sunucu.py               # Saf Python stdlib HTTP sunucu, port 8787
├── tarama_dongusu.py       # launchd tetikli 3-günlük döngü iskeleti (henüz iş yapmaz)
├── com.misara.uc_gunluk_tarama.plist  # launchd tanımı (3-günlük tetik)
├── index.html              # 3 panel çerçeve (üst kırılım+tara, orta sol harita/sağ kart, alt şerit+görev)
├── style.css               # Bloomberg-terminal estetik, koyu, mono, altın vurgu
├── app.js                  # Vanilla JS · fetch+render+drill · şema koruyucu · 3-durum hata
├── ikon/                   # (boş)
├── veri/
│   ├── SEMA.md             # SÖZLEŞME — tüm alan yollarının tek sayfa referansı
│   ├── cografya.json       # 81 il + 973 ilçe ağacı (kanon: CC-Hafıza B9)
│   ├── DURUM.json          # sistem sayacı + patron_gorev (kanon: CC-Hafıza B9)
│   ├── son_tarama.json     # 3-günlük tetik damgası (yalnızca zaman)
│   ├── ozet/<İl>/<İlçe>_A.json     # A ana özet (özet motoru üretir)
│   ├── ozet_B/<İl>/<İlçe>_B.json   # B derin özet (koşullu tetik)
│   └── geojson/il.geojson  # 81 il polygon (MU-02 M1 harita için)
├── README.md               # kullanım özeti
├── BITTI.md                # önceki devir notu (MU-01 önceki)
└── DEVIR_MU01_HAFIZA.md    # BU BELGE — MU-01 kapanış + TT-HAFIZA devir
```

### Ne yapar

| Dosya | Görev | İç mantık |
|---|---|---|
| `MISARA.command` | Uygulamayı çift-tıkla başlatır | `python3 sunucu.py &` → tarayıcı aç (8787) |
| `sunucu.py` | Yerel HTTP sunucu · port **8787** · stdlib only | `SimpleHTTPRequestHandler` + `/api/*` uçları: `meta`, `durum`, `cografya`, `simdi_tara` — geri kalanı statik (index.html, app.js, style.css, veri/**, geojson/**) |
| `app.js` | SPA render — fetch + drill + hata yönetimi | `apiCek()` (fetch→JSON→şema), `haritaAc()` (Türkiye→İl→İlçe→Mahalle düğüm liste), `kartCiz()` (seçili düğüm kartı), `ozetYukle()` (A+B statik fetch), `ccSeritCiz()` (sistem+coğrafya+havuz), `patronCiz()` (görev+açık borç) |
| `index.html` | 3 panel çerçeve | Üst: kırılım+"şimdi tara"; Orta: `#sol-harita` + `#sag-kart`; Alt: `#cc-serit` + `#patron-gorev`; script src="app.js" |
| `style.css` | Görünüm — koyu tema, altın vurgu, mono | Grid tabanlı 3 panel, `.durum-tam/-pilot/-taslak/-iskelet/-launch` rozet renkleri |
| `tarama_dongusu.py` | 3-günlük döngü hedefi | ŞU AN sadece `son_tarama.json` damga yazar; gerçek tarama iskeleti — Hafıza'nın dolduracağı |
| `com.misara.uc_gunluk_tarama.plist` | launchd tetik | `tarama_dongusu.py`'yi 3 günde bir çağırır |
| `veri/SEMA.md` | **Sözleşme belgesi** | Aşağıda #2 |

---

## 2. SEMA.md kuralı — sözleşme önce, kod sonra

**Kural:** Uygulama SADECE okur; veri Hafıza üretir. İki taraf arasındaki **sözleşme** `veri/SEMA.md`'dir.

### Değişiklik akışı (KATİ)

1. **Hafıza şema değiştirmek ister** (yeni alan, kök revize, tip değişimi, dosya yolu değişimi vb.)
2. **ÖNCE `veri/SEMA.md`** güncellenir — yeni alan yolu + tip + örnek + hangi uygulama bloğunda kullanıldığı yazılır
3. **SONRA `app.js`** ilgili render fonksiyonu yeni yola bağlanır
4. **YOK OLAN ALAN** — SEMA.md'de arşiv bölümüne alınır (silinmez), eski alanı arayan yerler `SemaHatasi` mesajıyla açık uyarır

### Neden bu sıra

- Şema önce yazılmadan kod değişirse, iki taraf birbirini dürüklemez — hata bulmak zorlaşır
- SEMA.md okuyup değişikliği KABUL eden Hafıza, yalnızca sözleşme sınırında hareket eder
- Kod tarafı `SemaHatasi` fırlatınca hata mesajı **aranan yolu + mevcut kök anahtarlarını** açıkça yazar → yeni alan uygulama koduna kolay eklenir

### Şu anki sözleşme (2026-08-27 kesitiyle)

- `cografya.json` kök: `kesit_utc · kaynak · kaynak_db_sha_kisa · lisans_idari_birim · geojson_kaynak · kanon_notu · toplam · iller · pilot`
- `DURUM.json` kök: `baslik · standing · kesit_utc · uretici · sistem · cografya · havuz · ozet_motoru · patron_gorev · sonraki_dm`
- `ozet/<İl>/<İlçe>_A.json` kök: `katman · il · ilce · kesit_utc · rakamlar · en_yogun_2_mahalle · eksikler · metin · metin_sha · sablon_versiyon`
- `ozet_B/<İl>/<İlçe>_B.json` kök: `katman · il · ilce · son_yazim_utc · dayandigi_A_snapshot · anlati · onemli_bulgular · eksik_notu · tazelenme_kurali · yazim_yontemi · sonraki_ai_yazim_tetigi`
- **iller.<İl>.ilceler.<İlçe>.mahalleler** → **ARRAY** (list of `{ad, ust_ilce, durum, not}`), dict değil

Tam alan listesi ve tip tablosu için `veri/SEMA.md`.

---

## 3. Deep-link — `#/İl/İlçe[/mahalle_idx]`

app.js `baslat()` sonunda çalışan URL hash ayrıştırıcı:

```
Örnekler:
  http://localhost:8787/#/İstanbul                → İstanbul kartı + ilçe listesi
  http://localhost:8787/#/İstanbul/Kartal         → Kartal ilçe kartı (A+B özet dahil)
  http://localhost:8787/#/İstanbul/Kartal/5       → Kartal Hürriyet mahallesi (index 5)
```

### İç mantık

- Regex: `^#\/([^/]+)(?:\/([^/]+))?(?:\/(\d+))?`
- İl slug'ı = URL-encoded İl adı (Türkçe karakter için `encodeURIComponent`)
- İlçe slug'ı = URL-encoded İlçe adı
- Mahalle = ilçenin `mahalleler[]` dizisindeki index (0-tabanlı)

### Neden hash

- Sunucu tarafında route yok — SPA istemci taraflı
- Hash sunucuya gitmez → statik `index.html` her URL için tek dosya
- Kırılım tıklandığında state güncellenir ama URL güncellenmez (KATIRINYORSA hash'i senkron etmek MU-02'de yapılabilir)

### Kullanım alanı

- Ekran görüntüsü otomasyonu (Chrome headless — bu devir doğrulamasında kullanıldı)
- Kopyalanabilir link — patron/hafıza belirli bir ilçeye doğrudan gönderilebilir
- Hata raporu — kullanıcı hangi ekranda hata gördüğünü URL ile paylaşır

---

## 4. Bilinen eksikler

### 4.1 "Şimdi tara" düğmesi — arka uç bağlı mı?

**HAYIR, bağlı değil.** `sunucu.py::_simdi_tara()` sadece `veri/son_tarama.json`'a bir zaman damgası yazar:

```python
damga = {
    "tetik": "elle · şimdi tara düğmesi",
    "zaman": datetime.now().isoformat(...),
    "not": "Uygulama veri üretmez (kural). Bu damga launchd 3-günlük döngüyü izlemek için.",
}
```

Gerçek tarama tetiği `tarama_dongusu.py`'da:
- Şu an sadece "iskelet damga" atar
- Sonraki adım (yorumlanmış): *"Hafıza SORGU-01'den DURUM.json.cc_seridi yenile"*
- Düğme UI'da çalışır ama sadece damga günceller

**MU-02'de:** Hafıza tarafında bir cron/launchd görevi bu damgayı okuyup gerçek Hafıza SORGU-01 refresh çalıştırmalı. Uygulama tarafında değişiklik gerekmez.

### 4.2 İlçe GeoJSON simplify bekliyor

**Mevcut:** `veri/geojson/il.geojson` — 81 il polygon. **MU-02 M1** için app.js'te SVG polygon rendering **eklenmiş** (fallback: düğüm-liste). Şu an fallback devrede — muhtemelen 81 il polygon boyut/simplify istatistiği doğrulanmadı.

**Eksik:**
- `ilce.geojson` (973 ilçe) **YOK** — MU-02'de gerekecek
- `mahalle.geojson` (Kartal 20 mahalle) **YOK** — MU-02 opsiyonel
- Simplify (Douglas-Peucker toleransı ile küçültme) uygulanmadı — dosya boyutu ve render performansı için Hafıza tarafında yapılmalı

**Kural:** MU-01 poligon yok, düğüm-liste yeterli. MU-02'de simplify + polygon fetch akışı Hafıza'nın işi.

### 4.3 Mahalle rozetleri: İSKELET

Kartal'ın 20 mahallesi cografya.json'da:
```json
{"ad": "Hürriyet", "ust_ilce": "Kartal", "durum": "İSKELET", "not": "mahalle-bazlı ingest yok"}
```

Yani mahalle-özel A/B özet henüz üretilmedi. **App tarafında hata değil** — sözleşmeye uygun görüntüleniyor (İSKELET rozet + "mahalle-bazlı ingest yok" notu).

**MU-02'de:** Hafıza mahalle-bazlı ingest kurunca cografya.json'daki mahalle objeleri `durum: "TAM"` alınır + `ozet/İstanbul/Kartal_Hürriyet_A.json` yolu ile A özet üretilir. **Sözleşme değişikliği** gerekirse: SEMA.md güncelleyip mahalle-özel özet yolu (`ozet/<İl>/<İlçe>_<Mahalle>_A.json`?) eklenir.

### 4.4 B özet fetch — Kartal'a sabit mi, genel mi?

**GENEL.** `app.js::ozetYukle(il, ilce)` fonksiyonu her ilçe için aynı yolu dener:

```js
fetch(`/veri/ozet/${encodeURIComponent(il)}/${encodeURIComponent(ilce)}_A.json`)
fetch(`/veri/ozet_B/${encodeURIComponent(il)}/${encodeURIComponent(ilce)}_B.json`)
```

Yani Hafıza bir ilçeye ozet üretirse otomatik gösterilir. Şu an yalnız **Kartal (İstanbul)** için üretilmiş — o yüzden başka bir ilçe seçilince `A özeti yok · HTTP 404` gösterir (V16 dürüst).

**Test:** Hafıza `Beykoz_A.json` ve `Beykoz_B.json` üretirse ekstra kod olmadan çalışacak.

---

## 5. Hafıza'nın İLK yapması gereken 3 şey

Sıraya göre (CC-Site gözünden):

### İş 1 — DURUM.json'a `hedef` bloğu eklemeyi düşün

Şu an CC şeridi başlığındaki "Hedefe mesafe" bandı `cografya.dolu_il / il_sayi` hesabıyla türetiliyor (11/81). Bu iş görüyor ama **hedef** kavramı belirsiz. Eğer bir yatırım hedefi (ör. "12 il · 90 ilçe · 400 mahalle · Q4") kanona giriyorsa:

- SEMA.md'ye `hedef.il.mevcut / hedef` + `hedef.ilce_pilot.mevcut` alanlarını ekle
- app.js `ccSeritCiz()` şu satırı kullanır: `${c.dolu_il}/${c.il_sayi}` → `${d.hedef.il.mevcut}/${d.hedef.il.hedef}`

Bu değişiklik SEMA-önce disiplinin ilk pratik testi olur.

### İş 2 — `tarama_dongusu.py`'a gerçek Hafıza refresh bağla

Şu anki iskelet damga atıyor. Sonraki adım:
- SORGU-01'den DURUM.json alanlarını yenile (sistem, cografya özet, havuz, ozet_motoru, patron_gorev.gun_gecti)
- cografya.json'da durum değişimlerini (SIFIR→KISMI, KISMI→DOLU) uygula
- launchd 3-günlük tetik zaten kurulu (`com.misara.uc_gunluk_tarama.plist`)

Uygulama tarafında değişiklik yok — sözleşmeye sadık kalınmış olur.

### İş 3 — MU-02 M1 SVG polygon haritası doğrula + il_geojson kanonlaştır

app.js'te SVG polygon rendering kodu **hazır ama fallback devrede** (muhtemelen `il.geojson`'ın feature.properties.name TR karakterli değil, veya BBOX sınırı dışında). Kontrol edilmesi gereken:

- `il.geojson` `features[].properties.name` gerçekten `"İstanbul"`, `"Kartal"` gibi TR karakterli mi (yoksa `"Istanbul"`)?
- Eğer ASCII ise app.js'te `IL_ALIAS` map genişletilmeli (`"Istanbul" → "İstanbul"`, `"Kirsehir" → "Kırşehir"` gibi ~40 kayıt)
- SEMA.md'de `veri/geojson/il.geojson` bölümüne kanon isim eşleme kuralı yazılmalı

Alternatif: SEMA.md sözleşmesi der ki *"features[].properties.name TR karakterli olmalı"* → Hafıza il.geojson'ı normalize eder → alias listesi gerekmez.

---

## 6. CC-Site park notları

- CC-Site bu belge tamamlandıktan sonra parka döner. Web sitesi (tradiaturkey.com) çalışmaları **Patron çağırınca** yeniden açılır — en sona bırakıldı.
- **S10 borcum devir notunda kayıtlı kalsın:** anayasa_site.md v1.0 (S10 yazıldı) sonrası Standing #S-3 (provenance JSON tüm görsellere) uygulanmamış · S6→S11 tüm sprint çıktıları **uncommitted** (Vezir push borcu, 17 modified + docs/v2/* untracked) · S7 görsel damga POC toplu uygulama Patron 5 pozisyon yanıtı bekliyor.
- Bu üç açık borç web sitesi devam ederken çözülür — MU-01/MU-02 kapsamı DIŞINDA.

---

## 7. Kapanış

- MU-01 çalışıyor, doğrulandı (screenshot: `~/Desktop/TT-Tüm CC/kurulus/misara_dogrulama/01_turkiye.png` + `03_kartal.png`)
- Sözleşme yazılı: `veri/SEMA.md`
- Hata mesajları 3 durum ayrı: FetchHatasi / JsonHatasi / SemaHatasi (aranan_yol + mevcut kökler)
- Deep-link `#/İl/İlçe` etkin
- 4 bilinen eksik açık bırakıldı (yukarıda)
- Hafıza'ya 3 iş sırası verildi

**CC-Site DUR.** Uygulamaya bir daha dokunmuyor. Bakım + MU-02 (7 modül) TT-HAFIZA'da. Çağrılınca parktan gelirim.

*— CC-Site · 2026-08-27*
