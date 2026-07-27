# CC-BORSA — TAM KAPSAM ÖZ-ANALİZ

**Tarih:** 2026-07-11 · **Sprint aralığı:** S1–S51 · **Maliyet:** $0
**Ölçüm anı sayıları:** 53 script · 45 test dosyası (784 test, 0 kaldı) · 27-adımlı otomatik pipeline · 19-blok dashboard · 46 sprint · 13 F-vaka
**Not:** Her rakam ölçülü (uydurma yok). haber_akis canlı büyüyor (okuma-anı 3189 kayıt).

---

## 1. BAŞLANGIÇ
İlk sprint (S1, 2026-05-30): tek per-firma JSON şeması + 5 pilot + ağsız iskelet. Dashboard yoktu — sadece registry + fetch-script taslakları. Bugün 19-blok Bloomberg-tipi terminal + 611-firma breadth + 116-firma derin çekirdek.
Çekirdek felsefe hep sabit: **"NE oldu"yu (fiyat/olay) üret, "NEDEN"i iddia etme; korelasyon ≠ nedensellik.**

## 2. ZAMAN-ÇİZELGESİ (haber-entegrasyon arkı)

```
S1-S45   Çekirdek + breadth: 116 derin firma + 611 İş Yat evren, 19 sinyal katmanı
S46      Envanter: haber DIŞ kaynak YOK tespiti → Basın'a ihtiyaç siparişi
S37→     Dağıtım borusu ARIZASI: Basın üretti AMA Hafıza dağıtım noktasına yansıtmadı
         → Borsa 3 sprint (S47/48/49-erken) BOŞ okudu (F14)
S47-3    Marmaray köprü sektör-lensi (İhale'den gelen ilk cross-CC ham-madde)
S48      611 ad→kod sözlüğü dağıtıma verildi (Basın sirket_eslesme otomasyonu)
S49      Boru TAMİR → İLK DOLU OKUMA (657 kayıt) + K3-FP 7 yakalandı
S50      S37 tetik yanıtı (VAKA önlendi) + haber-teyit KOLONU kuruldu (çift-tier)
S51      GitHub Actions fizibilite (staleness çözümü, Patron onayında)
```

## 3. ÇALIŞMA YOĞUNLUĞU — Mac-sleep / cron staleness
- **Ne zamandır var:** S25'ten beri (cron mimarisi kurulduğunda). Mac gece/uyku 19:00 tetiğini kaçırıyor → gün-sonu pipeline "bayat" kalıyor.
- **Neden hâlâ Patron onayında:** Çözüm (GitHub Actions) **geri-dönülmez altyapı kararı** (repo public/private, dakika bütçesi, veri-transfer stratejisi). Disiplin gereği taslak–onay ayrımı. Uygulamadım çünkü: (a) repo public → İş Yatırım xlsx redistribute + KVKK riski; (b) private-Actions dakika bütçesi intraday'i kaldırmıyor → **hibrit karar Patron'un.** Fabrikasyon yerine 3 net soru sordum, bekliyorum.

## 4. OTOMATİKLEŞEN YAPI

| Katman | Otomatik mi |
|---|---|
| Gün-sonu dashboard-data (27 script → data/dashboard.json) | ✅ **%100 otomatik** (pipeline.sh tek komut) |
| Fetch (fiyat/makro/fundamental/backfill) | ✅ otomatik AMA **ağ = Patron ortamı** (sandbox V59) |
| Intraday (%15dk gün-içi + kur bandı) | ✅ otomatik (ayrı kadans) |
| **Tetikleme (cron)** | ⚠️ **kırılgan** — Mac-sleep staleness (madde 3) |
| haber-teyit kolonu | ✅ otomatik (Basın emisyonu düşünce dolar) |
| Marmaray köprü | ⏳ manuel-bekleme (kazanan sonucu) |

**Özet:** Üretim boru hattı tam otomatik; **zayıf halka tetikleme güvenilirliği** (staleness) — S51'in konusu.

## 5. ANAYASAM — kendi ürettiğim disiplin
Miras alınan (V37 master read-only, KVKK-sert, B-bloğu, $0) **dışında** kendi ürettiklerim:

- **K3-FP guard (S49):** haber `sirket_eslesme`'de generic-kelime/yer-adı yanlış-pozitifi yakalama (KONYA↔bal-hasadı). Basın'a sipariş olarak geri-verildi.
- **Handed-off-file-absent protokolü (F05→F14):** devredilen dosya diskte yoksa → UYDURMA yasak → sahibine bildir. 6 kez uygulandı.
- **probe-first / test-turu ≠ yazım-turu (F04):** batch-iptal önlemi.
- **ağır-script-tek-koş (S45):** başıboş süreç IO-yarışı dersi.
- **çift-tier teyit (S50):** yüksek ≠ orta asla karıştırma.
- **"ölçemedim" A04:** 0 kayıt → "ölçülemedi" yaz, sıfır uydurma.

Hepsi `docs/09-vaka-defteri.md`'de (13 F-vaka) kanonik.

## 6. TAM KAPSAM

| Eksen | Durum |
|---|---|
| **611-BIST evreni** | ozet/finansal/performans 611 · yabancı 592 · sermaye 190 · tarihsel 70 · **derin 116** (12-yıl + 19 sinyal) |
| **Teyit-huni** | haber_akis **canlı büyüyor** (657 → 3189 kayıt); fill oranı hâlâ düşük (~%2 sirket_eslesme) → Basın S51 kalite-düzeltmesinde genişleyecek |
| **Marmaray köprü** | HAZIR-BEKLİYOR (İKN 2026/1054283, 5 BIST-aday: ENKAI/TKFEN/GLRMK/RGYAS/NUGYO); İhale SONUÇ bülteni gelince BIST-doğrulanır |

## 7. GERÇEK-MALİYET DÜRÜSTLÜĞÜ

**Kısa cevap: Kısmen $0, tamamı değil.**

- **Gün-sonu + haftalık (staleness'ın asıl derdi):** GitHub Actions private-free = 2000 dk/ay; ihtiyaç **~340 dk/ay** → **gerçekten $0 içinde kalır.** ✅
- **Intraday (%15dk):** private-Actions'ta **~2112 dk/ay → 2000 tavanı AŞAR** → free-tier'ı geçer, ücretli plana zorlar. Bu yüzden intraday'i Actions'a KOYMADIM; lokal bıraktım. **Ama lokal = Mac-sleep = gündüz market-saatinde uyursa intraday bayatlar → staleness intraday'de $0 ÇÖZÜLMÜYOR.**
- **Gizli teknik risk (maliyetten önemli):** yfinance **datacenter IP'lerinden (Actions/cloud) Yahoo tarafından 429/blok yer** — residential Mac IP'sinden daha sık. Actions'a taşısam bile fetch **güvenilmez olabilir**; bu bir maliyet değil, **reliability duvarı.**

**En dürüst sonuç:**
- Mac-sleep'in **gün-sonu ayağı $0 çözülür** (Actions hibrit-A).
- **Intraday'in gerçek-zamanlı güvenilir çözümü $0 DEĞİL** — ya (a) Mac'i gündüz açık tut (davranış çözümü, $0 ama kırılgan), ya (b) **küçük always-on cloud instance (~$4-6/ay VPS)** — gerçek çözüm ama ücretli.
- Public repo (sınırsız Actions) teknik olarak $0'a intraday'i de çözer **ama veri-gizliliği (İş Yat xlsx + KVKK) nedeniyle REDDEDİLDİ** — $0'ın bedeli veri-açıklığı olurdu, onu ödemem.

**Patron'a dürüst tavsiye:** gün-sonu için Actions ($0); intraday için ya "Mac gündüz açık" kabul et ($0 ama boşluk riski) ya da ayda ~5$ VPS (gerçek çözüm). *"$0 her şeyi çözer" demek yanıltıcı olurdu.*

## 8. V16 DÜRÜST — 3 HATA / 3 KAZANIM

**Hatalar:**
1. **basin_reviews_dir yanlış-yön** — S50'de yeni symlink'i doğru sandım; incelediğimde `→ ~/aracdenbasin/` (araç-inceleme verisi, borsa haberi DEĞİL) çıktı. İyi tarafı: okumadan önce yakaladım, Hafıza'ya düzelt-siparişi yazdım. Hata ama erken-yakalama.
2. **S45 süreç-yarışı** — aggregator "dakikalarca takıldı" sandım; kök neden 5 birikmiş başıboş python süreciydi (kendi bıraktığım). Teşhis gecikti; ders: ağır scripti tek-koş.
3. **Erken körlük-yorumu** — S47-3'te ISDMR/TKFEN premis'ini (mikro-cap) sorgulamadan aldım; S43'te veri premis'i çürüttü (likit mid-cap'ti). Prompt'a fazla güvendim, veriyle geç doğruladım.

**Kazanımlar:**
1. **Handed-off-absent disiplini** — 6 kez (F05–F14) devredilen-dosya-yok durumunda 0 uydurma; hep sahibine bildirim. Sistem güvenini bu tuttu.
2. **K3-FP guard** — Basın'ın 20 eşleşmesinden 7 yanlış-pozitifi yakalayıp geri-sipariş verdim; kendi ürettiğim disiplin cross-CC değer üretti.
3. **784 test / 0 kaldı, 46 sprint boyunca** — her katman fixture-testli, ağsız, atomik; _park / dashboard.html / cross-CC hiç ihlal edilmedi.

---

**Bir cümlelik öz-değerlendirme:** 46 sprintte NE-gören 19-katmanlı bir istihbarat motoru kurdum; NEDEN-katmanı (haber) yeni akmaya başladı; en dürüst açığım **intraday güvenilirliğinin gerçek çözümünün $0 olmadığını** Patron'a net söylemek — orada "bedava" demek yalan olurdu.
