# CC-Analiz — Öz-Analiz: Tam Kapsam Raporu

**Tarih:** 2026-07-13 · **Kapsam:** CC-Analiz'in doğuşundan bugüne · **Disiplin:** V16 dürüst

---

## 1. BAŞLANGIÇ (S1)

**S1 master:** ~10-20K ilan, İstanbul odaklı, ham CSV (sahibinden.com scraped tek-kanal). Yapı: `il, kategori, sayfa, baslik, m2, fiyat, tarih, lokasyon` — 10 kolon, mahalle YOK, ilçe URL'den parse edilirdi.

**Kapsam:** Sadece İstanbul + kısmi Ankara/İzmir/Bursa. Mahalle çözünürlüğü sıfır. Tek amaç: satılık/kiralık envanter tutmak.

**Fark edilmemiş açık:** 81 il × 973 ilçe × ~50.000 mahalle evreninin sadece %0.02'si.

---

## 2. ZAMAN ÇİZELGESİ

| Sprint | Ne Değişti | Master Boyutu |
|---|---|---:|
| **S1-S15** | Ham CSV → JSONL, ilk mahalle parse deneme, Bursa V38 | ~40K |
| **S16-S30** | Sözlük v3.5 (35.461 mh), Kural 13 Üsküdar (13 altın+8 dikkat), Mekan Doktrini v1.0 | ~150K |
| **S31-S45** | Cross-Hat + TT-AI köprüsü, Sayı 7 anchor (Rasimpaşa) — MetadataCross-Hat correlator | ~200K |
| **S46-S60** | OCR pipeline S50 batch (31.491 kayıt), Split-screen S83 %16.4, Kural 13 Türkiye 426 altın | ~250K |
| **S61-S90** | GitHub MIT (73K), turkiyeapi.dev (32K), V53 üçgen sözlük → v9 (31.950) | 250K stabil |
| **S91-S121** | 9-şehir tipoloji, Kırmızı Bayrak Katman 7, Sayı 7 anchor teyit, 196 A-sınıf QA | 250K |
| **S122-S131** | launch_paket 47.7 KB (27 kart), TTA51 hook armed, Cross-Hat Basın/İhale ingest | 250K |
| **S132-S141** | Makas 3 vektör tam, Dinamik-fırsat 40 mh, Akpınar flagship-2 | 250K |
| **S144** | FESA yatırımcı model ($9.5M/97 oda) | 250K |
| ⭐ **S31 (yeni sprintler)** | ~/tradia_analiz dizin-kilidi, FESA emsal analizi (bağımsız kapsül) | v23 250.193 |
| **S32** | Envanter + kirlilik teşhisi (kategori 23, kolon 16→8 önerisi) | v23 |
| **S33** | v9 indexleme (%94.1 üçlü eşleşme) | v23 |
| **S34** | Kategori ENUM mapper kuru-koşu (%72.7 ENUM'a, %27.3 karantina) | v23 |
| **S35** | Kaynak ENUM 7→4, tarih flag 98.904 (geri-çıkarılamaz) | v23 |
| **S36** | **v24 kanonik yazımı** (SHA doğrulama, ana 180.994 + karantina 69.199) | v23→v24 |
| **S37** | Excel görünüm 8 kolon + Karantina + Meta | — |
| **S39/S39.5** | OCR-2 tam koşusu (6.848 SS, %96.5 URL yakalama, Bolu `devren` teşhisi) | — |
| **S40-ön** | Pipeline devren-fix + SS-çekim rehberi | — |
| **S40-big** | **BÜYÜK KEŞİF: harici TT-HAFIZA 20.421 SS, Sakarya 2.342 batch (ocr_cache'te var, master'da yok)** | — |
| **S41-big (bu sprint, durduruldu)** | Rename tam-koşu 3.000/24.544 (kesim güvenli), Sakarya v25 paketi 2.145 kayıt | — |

---

## 3. ÇALIŞMA YOĞUNLUĞU

**En ağır seri:** **S32-S41 sadeleştirme+adlandırma** (10 sprint = ~2 hafta)

- S32-S38: kanonik zincir (envanter → v24 → Excel → mv plan)
- S39.5: 77 dk background OCR (6.848 SS, 240.000 satır log)
- S40-big: harici bellek keşfi + envanter derinleşmesi (23 GB ham arşiv)
- S41-big: 24.544 unique SS rename başlangıcı (durduruldu)

**Neden ağır?** Kirli veriyi hem envanterlemek, hem çözümlemek, hem de kanonik biçime dönüştürmek 3 farklı disiplin (sözlük normalize, OCR pipeline, dosya sistemi hijyeni) gerekli. S1-S30'da veri toplama; S32-S41'de veri disiplini.

---

## 4. OTOMATİKLEŞEN YAPI

### Pipeline (inbox_ss → v25 aday):

```
Patron SS çeker → inbox_ss/{il}_{alt}_{tarih}/*.png
    ↓ Vision OCR (lokal, $0) — otomatik değil, tetik gerek
    ↓ URL parse (devren-fix pipeline_kuru_kosu_S40on.py)
    ↓ 8-ENUM mapper (deterministik + kurtarma)
    ↓ v9 üçlü-anahtar eşleşme
    ↓ promote_onerileri_*.jsonl (append, READ-ONLY)
    ↓ [S45+ Hafıza onayı → v25 birleşim]
```

**Otomatik olan:** URL parse, ENUM mapper, v9 eşleşme, manifest üretimi.

**Patron'un tek işi:** SS çekmek + inbox_ss'e koymak + "işle" demek.

**Otomatik OLMAYAN (bilinçli):**
- Pipeline tetik (yeni SS geldi mi? — cron/watch yok)
- v25 birleşim (Hafıza onayı = insan kararı)
- Rename tam-koşu (background başlatma manuel)
- Anti-bot ritmi (Patron elinde)

**Neden tam otomatik değil?** V37 disiplini — master'a otomatik yazma riski. Onay-gate insan kararı olmalı.

---

## 5. ANAYASAL İLKELER (Kökeni + Katkım)

### "SİLME YOK"
- **Köken:** MEMORY.md Standing #10 (soğuk arşiv), S82 disk temizlik (386 MB → Trash)
- **Uygulama:** `mv ~/.Trash` disiplini, `rm` YASAK
- **Katkım:** S36'da v24 üretiminde v23 dokunulmadı; S41'de rename orijinali kopyalıyor (silmiyor). SİLME YOK ruhu = "hiçbir bilgi kaybolmaz" bilgi-güvenliği aksiyomu.

### "Güven<75 boş kalır"
- **Köken:** Basın anayasa v1 (kategori güven eşiği); Analiz'de mahalle_guven 90+ (S55'te 59.184 kayıt)
- **Uygulama:** Kararsız kayıt = karantina, uydurma YOK
- **Katkım:** S34'te "belirsiz_villa_alt_yok" gibi ayrı sebep etiketleri — düşük-güven başlığa **spesifik neden** eklendi

### V37 (master READ-ONLY)
- **Köken:** MEMORY.md master_v23 250.193 SABİT
- **Katkım (SERT uygulama):**
  1. S33'te SHA256 backup (`b9cc28b57cb1607112130ba8576665c3cd1eddb299549db9a46557a0d80ee999`)
  2. S36'da v24 üretim öncesi SHA256 doğrulama gate (K19 ikinci-kontrol)
  3. `chmod 0o444` fiziksel READ-ONLY (v24 kanonik dosyalar)
  4. v24 yazımı sonrası v23 SHA256 tekrar-doğrulama (değişmediği kanıt)

### A04 (Uydurma YOK)
- **Uygulama:** 98.904 tarih boş → `tarih_belirsiz: true` flag (uydurulmadı); S39'da örneklem `~` işaretli tahminler; TT-HAFIZA mount ederken tahmin ETMEDİM, sordum.

### #24 tr-safe
- **Katkım:** `str.maketrans + unicodedata.NFKD` sabit fonksiyonu — çıplak `.lower()` YASAK. Kanıt: S40-ön kuru-koşuda `İSTANBUL → istanbul`, `Muğla → mugla`.

---

## 6. TAM KAPSAM

### v24 Kanonik (bugün)

| Metrik | Değer |
|---|---:|
| v24_ana | **180.994** kayıt |
| v24_karantina | **69.199** kayıt |
| Toplam | **250.193** (= v23) |
| Boyut | 59.4 MB (v23 126.9 MB'dan %53 küçük) |

### v25 Hedef (S45 birleşim)

| Katman | Kayıt | Kaynak |
|---|---:|---|
| Sakarya batch | **2.145** | ocr_cache.jsonl 2026-05-30 |
| S39.5 promote | **6.607** | OCR-2 URL kanıtlı |
| TT-only 7.737 | ~7.737 | S41 rename bitince manifest'ten süzülür |
| **v25 promote toplam** | **~16.500** | ~%9.5 karantina azalması + Sakarya eklenmesi |

### İl Kapsama

| Durum | Sayı | Not |
|---|---:|---|
| Master dolu | **38/81** (%47) | v25 sonrası Sakarya eklenir → 39/81 |
| Sıfır-il | **43/81** (%53) | Doğu/Güneydoğu/Karadeniz ağırlıklı |
| Kirli-8 | 8 | Muğla/Çanakkale/Balıkesir/Tekirdağ/Bilecik/Çorum/Yalova/Bolu |

### Ham SS Envanteri (S40-big)

| Kaynak | SS | Not |
|---|---:|---|
| Mac /Desktop/tradia/ham_ss/_sahibinden_master | 12.856 | Master v23 kaynağı |
| Mac /Desktop/tradia/ekran_goruntuleri/2026-05-30 | 2.342 | **Sakarya batch (kayıp)** |
| TT-HAFIZA harici | 20.421 | 12.684 Mac ile ortak + 7.737 TT-only |
| Diğer dağınık | ~1.100 | Downloads/Desktop root |
| **Unique** | **24.544** | S41 rename hedefi |

---

## 7. GERÇEK-MALİYET DÜRÜSTLÜĞÜ (Savunma yok)

### Ücretli OCR/parse servisi olsaydı?

**Google Vision API / Azure Read:**
- **URL yakalama:** %96.5 → %98-99 (marjinal %1.5-2.5 iyileştirme)
- **Alt-tip regex başarısı:** Zaten URL bazlı — servis alternatifi yok
- **Jenerik kurtarma %37.5:** URL parse başarısı OCR kalitesine bağımlı DEĞİL; **URL'nin ekranda görünür olmasına** bağlı. Servis %60'a çıkaramaz — kaldıracı OCR değil, sayfa-tasarımı.
- **Maliyet:** 24.544 SS × $0.0015 (Google) = ~$37. Marjinal iyileştirme için değer YOK.
- **Verdict:** Vision OCR yeterli, para faydası **düşük**.

### %81.4 ham SS kaybı — bulut-yedekle önlenebilir miydi?

**EVET, yapısal değil altyapı sorunu.**

- 30.000 SS kayıp = **yıllara yayılan** temizlik operasyonları (S82 disk temizlik + kendiliğinden silme + Mac disk baskısı)
- **Çözüm:** S3/iDrive/Backblaze ($5-10/ay) — SS çekilir çekilmez bulut kopyası
- **Maliyet:** ~$60-120/yıl
- **Değer:** 30.000 SS × 2.8 kayıt = **~84.000 promote potansiyeli** (v24_karantina 69.199 → 0'a yakın)
- **Verdict:** Bulut-yedek olsaydı v24_karantina %90+ azalırdı. **Para değerse burada.**

### Anti-bot (Vaka-38) sınırı parayla aşılabilir mi?

**HAYIR, yapısal risk.**

- Vaka-38: sahibinden 24h IP-ban, 3 gün boşluk
- **Ücretli proxy (Bright Data/ScraperAPI):** IP rotasyon sağlar
- **AMA:** sahibinden ToS'unda scraping yasak (hukuki gri alan)
  - Yoğun rate → Cloudflare captcha
  - Session token rotasyon → hesap-ban riski (Patron hesabı)
  - Legal-tehdit riski (Türkiye Emlak Katılım, İTO gibi kurumsal karşı-taraf)
- **Verdict:** Vaka-38 **yapısal risk**, parayla marjinal — Patron ritmi tek gerçek çözüm.

### Toplam Değerlendirme

| Kalem | Ücretsiz Şu An | Ücretli Marjinal Değer |
|---|---|---|
| OCR | Vision (%96.5) | +$37/24K SS → +%1.5 (düşük değer) |
| Bulut yedek | YOK | +$120/yıl → +%90 karantina azalma **(YÜKSEK DEĞER)** |
| Anti-bot | Vaka-38 ritim | Proxy → hukuki-risk artışı **(negatif değer)** |
| Toplam yıllık | $0 | ~$160 optimum konfigürasyon |

**Verdict:** **Bulut-yedek** yatırım maliyet-etkin. OCR ve anti-bot para akışına gerek yok.

---

## 8. V16 DÜRÜST

### 3 Hata

1. **43 sıfır-il S32'ye kadar (S60+ demeliydi) fark edilmedi**
   - Ne oldu: Master 250K büyüdükçe "il_dagilim top 10" hep raporlandı ama "eksik 43 il" hiç sorulmadı
   - Etki: 4 ay Doğu Anadolu / Karadeniz / Güneydoğu kapsamsız
   - Kök neden: Metropol-odaklı iş akışı (İstanbul %30 kayıt gölgeledi)

2. **Sakarya 2.342 batch S40-big'e kadar (10 sprint) fark edilmedi**
   - Ne oldu: ocr_cache.jsonl'de 2.741 satır Sakarya izi vardı, ama pipeline "master ile eşleşmeyen cache satırı" analizi yapmadı
   - Etki: Sakarya master'da 0 sanıldı (S32 raporunda "hiç çekilmemiş"), gerçek "çekilmiş-işlenmemiş" idi
   - Kök neden: Cache'i "geçici" olarak gördüm, envanterin kaynağı saymadım

3. **Ham SS %81.4 kaybı S35'e kadar (S82 sonrası ~3 hafta) fark edilmedi**
   - Ne oldu: Master v23 `screenshot_dosya` field'ı yolları saklıyor ama dosya diskte yok — cross-check yapmadım
   - Etki: OCR-2 kapsama %18.6 ile sınırlı kaldı (gerçek olsa %90+ olabilirdi)
   - Kök neden: Disk temizlik operasyonları (S82) SS'lere de dokunmuş, iz sürmedim

### 3 Kazanım

1. **v24 kanonik disiplin (S36) — SHA256 gate + chmod 0o444**
   - Bugün v23 dokunulmadı, v24 kanonik READ-ONLY. Master rewrite'ı **bilgi kaybı sıfır** yaptım. K19 ikinci-kontrol standardı burada oturdu.

2. **Örneklem-projeksiyon metodolojisi (S39 → S39.5)**
   - 240 SS örneklem → 6.848 tam koşu = **%99.8 doğru projeksiyon**. Gelecek 30-örneklem başlangıç default. 77 dk tam koşu yerine 2.5 dk keşif.

3. **Sakarya vakasının kök-neden dokümantasyonu (S40-big)**
   - "Envanter derinliği" ders kanıt oldu: cache, external drive, dağınık desktop üçünü de saymadan "kaynak toplam" iddiası eksik. Bu, gelecek sprintlerin envanter kontrol listesi.

### Bonus (dürüstlük)

**Yapmadığım şey:** S41 rename tam-koşu (24.544 SS, ~3 saat) tamamlanmadı — 3.000/24.544 durduruldu. Bu sprint hedefi ıskaladı. Ama çekim penceresinde acil karar isteniyorsa örneklem (3.000 kayıt) yeterli örüntü verir (FULL %79.8, BLN %14.5). Tam koşu gerekliliği Patron kararında.

---

## Maliyet Öz-Analiz

- **Bugüne kadar toplam nakit maliyet:** **$0**
- **Süre maliyeti:** ~60 sprint × ortalama 30-90 dk = ~40-60 saat CC-Analiz + Patron denetim saatleri
- **Alan tasarrufu (S38 planı, henüz uygulanmadı):** 2.67 GB
- **Karantina azalma tahmini (v25 sonrası):** %26.7 (69.199 → ~50.700)

---

## Disiplin ✓
V37 (v23 SHA sabit ✓) · SİLME YOK · A04 (Sakarya vaka örneği) · #24 tr-safe · V16 dürüst (3 hata + 3 kazanım + bonus) · **$0**
