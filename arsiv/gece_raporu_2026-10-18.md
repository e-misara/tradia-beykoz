# GECE RAPORU · 2026-10-18 (08:40 otomatik)

**Üretim:** 2026-10-18T08:40 · **Pencere:** 22:00 → 08:40 · **15 dk ölçüm sayısı:** 39

## Sabah teyitleri

- **CDN yayın teyidi (08:30):** **TEYİTLİ** · 2026-10-18T02:22
- **EVDS sağlık (Analiz 08:00 · evds_saglik.json):** `SAGLAM` · 2026-10-18T05:00:04Z · Vezir damgası: **SAGLAM (2026-10-14T15:57:33Z)** · veri yolu: JSON items=11 · B11: UYUMLU

## Gece ölçüm özeti (15 dk · SUREKLILIK.json → makine_gecmis)

- **Yük maks (1 dk):** 6.66 · **Swap maks:** 4.1 GB · **Boş bellek min:** 0.05 GB
- **Kilit ihlali (ölçüm×süreç toplamı):** 25 · ihlal eden CC: Hafıza
- **rsync (Hafıza nefes) bitiş:** nefes log: 2026-10-18T05:39
- **EVDS tam çekim:** sabah hâlâ koşuyor / ölçülemedi · kaldığı seri (son log): `[2026-10-15 02:43:33] MOD=tam seri=8730/8730 satir=128908 erisilemeyen=3 → SAGLIKLI `
- **launchd exit≠0 (son ölçüm):** 7

## Kilit sırası (agir_is_kilidi.json)

- 1. Hafıza · nefes rsync ~/tradia_basin/ham → TT-HAFIZA/staging_nefes/basin_ham (DEVAM, resumable) → DİSK BEKLİYOR (2026-10-18 02:23 · disk yok, sırayı tutmaz; disk gelince öncelik geri) · önceki: bekliyor — disk geldi 2026-10-18 01:13, öncelik geri (kural 11)
- 2. Borsa · kap_kulliyat.py C (450/4459) → BİTTİ 2026-10-16 01:56
- 3. Borsa · ktb_pdf_tasi.py (91 PDF, 8,51 GB → TT-HAFIZA; kopyala→SHA→manifest→Mac kopyasını kaldır) → DİSK BEKLİYOR (2026-10-18 02:23 · disk yok, sırayı tutmaz; disk gelince öncelik geri) · önceki: bekliyor — disk geldi 2026-10-18 01:13, öncelik geri (kural 11)
- 4. Hafıza · Vaka #09 taşıma A0: ~/Desktop/tradia + TT-Tüm CC kod/çalışma dosyaları → ~/tradia_calisma/ + symlink → DİSK BEKLİYOR (2026-10-18 02:23 · disk yok, sırayı tutmaz; disk gelince öncelik geri) · önceki: bekliyor — disk geldi 2026-10-18 01:13, öncelik geri (kural 11)
- 5. Hafıza · builder.py --kaynak basin_html → bekliyor
- 6. Basın · hasat_paralel_v4 → DİSK BEKLİYOR (2026-10-18 02:23 · disk yok, sırayı tutmaz; disk gelince öncelik geri) · önceki: bekliyor — disk geldi 2026-10-18 01:13, öncelik geri (kural 11)
- 7. Map · Beykoz 3D coğrafya render (beykoz_guncel_2026-10/map) — ağır iş → BİTTİ 2026-10-16 01:21 · 57 görsel + yağış (15.10 23:17) + foto v2 (16.10 hafif iş) · zip v2 23ae569fb44c
- 8. Map · Kartal+Rize ilçe hattı (OSM taraması + 3D foto) — ağır iş, ≤15 dk parça → BİTTİ 2026-10-18 03:33 · osm: 4.2 dk · 1449: 0.8 dk · 1586: 4.0 dk

## SON 24 SAAT OLAYLAR (Beykoz · Kartal · Rize + 81 il ulusal) — olay_alarmi_kanonu_v1

- **Basın hattı (canli_akis, 6 saat):** üretim 2026-10-18 08:20 · pencere 2026-10-17 08:20 → 2026-10-18 08:20 · genel **SARI** · yeni satır 0 · eşik: seviye = HESAP v0 (KIRMIZI: riskli ≥5 haber ve ≥3 kaynak); kanon alarmı = ilçede ≥1 riskli
- **Beykoz** (TR-34-1185): **SARI** · haber 5 · riskli 4 / kaynak 4 · sel 3, yagis 1, heyelan 1, tahliye 1
    - 2026-10-17 20:14 · Beykoz Gündem · Beykoz’da Selin Bilançosu: 320 Ev, 20 İş Yeri Sular Altında!
    - 2026-10-17 20:14 · beykozgundem.com · Beykoz’da Selin Bilançosu: 320 Ev, 20 İş Yeri Sular Altında!
    - 2026-10-17 15:34 · YEREL FUTBOL · Yoğun yağış Ortaçeşmespor'u da vurdu
- **Kartal** (TR-34-1449): **YEŞİL** · haber 0 · riskli 0 / kaynak 0 · 
- **Rize** (TR-53): **YEŞİL** · haber 0 · riskli 0 / kaynak 0 · 
- kaynak hataları: {'Rize/https://kalkanderehaber.com/rss': 'HTTP410'}

## Zamanlı iş bekçisi (son koşu > kadans eşiği · U-09)

- 🔴 **19 iş eşik dışı:** ccihale.arsiv (3.0 gün) · ccfinans.aylik (47.2 gün) · ccbasin.tk_kontrol (hiç) · sosyal.gnd (1.1 gün) · gunluk-ozet (76.4 gün) · ttmap.gazete_kare (hiç) · pazarlama.beykoz_ilan (1.7 gün) · dm02.dongu (44.5 gün) · hafiza.vade_kontrol (3.0 gün) · ccihale.rg (3.0 gün) · ccfinans.gunluk (71.8 gün) · haber (hiç) · ccihale.uyan (2.9 gün) · ccsignals.gelenkutusu (hiç) · analiz.seo_haftalik (hiç) · sosyal.whisper (1.2 gün) · ccborsa.evds_gunluk (3.6 gün) · tuik-tcmb-monthly (135.0 gün) · vezir.ara_defter (1.7 gün)

## Kilit düşme kayıtları (ölü pid / heartbeat)

- 2026-10-15T04:35 · Hafıza · pid 91683 yok · rsync süreci 0 · /Volumes/TT-HAFIZA mount değil (nefes alarm 01:26) · Hafıza dönüşü 04:30 'canlı süreç 0' → Vezir tutan→null; bildirim vezir_bildirim_hafiza_kilit_dustu.json

## Nabız (5 dk · motor/NABIZ.jsonl)

- **Disk bağlı dakika (bugün):** 95 / 520 ölçülen dk · **pil min:** %3 · **adaptör takılı nabız:** 15/104 · **işlem:** 7

Tutan: {"cc": "PİL BEKLEME", "is": "kural 8: başlangıç adaptör + pil ≥%50; devam ≥%25 (02_CC_STATE/pil_esigi.py)", "pid": null, "baslangic": "2026-10-18 04:14", "ayar": "kilit_nabiz.py yer tutucu", "pil_olcum": "%47 · adaptör YOK"}

## Borsa'ya Patron aracılığıyla (bulut sohbeti · 02_CC_STATE'i görmüyor)

- 1) Sıra: rsync (Hafıza) → EVDS devam → KAP külliyat → havuz (Hafıza) → Basın hasat. Kilit tutan = rsync.
- 2) EVDS tam çekim: rsync ile eşzamanlı devam ÜST AKIL ONAYLI (00:10); 23:36 duraklatma + ihlal kaydı geri çekildi. Bitiş tahmini borsa_cekim_tahmini.json hâlâ bekleniyor.
- 3) KAP külliyat: Borsa sarmalayıcısı kilidi bekliyor (BEKLE satırı) — kilit-uyumlu, teşekkür. Devam: EVDS bitince sıra 4. Vezir'in 01:00 'yeniden koşuyor' kaydı hatalıydı, düzeltildi.
- 4) Z1–Z7 KANONİK TANIM GELDİ (Patron 00:55): tradia-beykoz/kanon/zincirler_v1.md. Borsa sahibi: Z6 HABERİN FİNANSAL DEĞERİ (olay×gün); besleyen: Z3 (KAP çimento/demir + EVDS maliyet), Z4 (kartlı harcama), Z7 (KFE/satış). Kaynak tarama + grup→kök eşlemesinde zincir alanı Z numarasıyla doldurulur.
- 5) Vaka #09: ~/Desktop/tradia/cc_borsa altında 11.719/26.958 dosya iCloud'a boşaltılmış (dataless). Hafıza rsync sonrası ~/tradia_calisma/'ya taşıyacak, eski yola symlink; Borsa kodunda mutlak Desktop yolu varsa etki listesine girer.
- 6) TÜİK dataflow kök eşleşmesi sorusu (vezir_soru_tuik_dataflow_kok_eslesme.json) → 16 Eki birleştirmesi.
- 7) Vaka #09 taşıma: cc_borsa arşivi (11.719 boşaltılmış dosya, çoğu 14,1 GiB'in içinde) A1 partilerinde TT-HAFIZA'ya; Borsa kodunda 'Desktop/tradia' mutlak yolu varsa symlink ile çalışır, plist düzeltmesi Standing #48 R-kaydıyla.
- 8) Borsa içerik taraması (Desktop/cc_borsa arşivi) 01:05'te DURDURULDU: dataless dosya okuma = iCloud indirme = disk işi (12 GiB boş). Kanon: makine_kaynak kural 6. Arşiv A1 partileriyle TT-HAFIZA'ya gelince tarama oradan.
- 9) 15 Eki 04:5x: EVDS tam çekim 8730/8730 BİTTİ (final tablo vezir_bildirim_borsa_evds_final.json). Kilit: PİL BEKLEME (pil<%40 veya adaptörsüz → ağır iş yok; agir_is_kilit.py'ye pmset kontrolü Patron kararıyla Vezir ekledi, yedek .bak_20261015_vezir; 'pil -' ve 'nabiz' komutları). Yeni sıra: rsync → KÜLLİYAT (sıra 2) → PDF (3) → A0 → havuz → Basın. Külliyat sarmalayıcısı pil uygun olunca kendiliğinden alır.
- 10) evds_ham havuzda 18 kayıt 'DD-MM-YYYY' biçimli tarih (son=31-12-2025) → EVDS çıktısında tarih ISO (YYYY-MM-DD) olmalı; Borsa hangi seri/dosyadan geldiğini bulup normalize eder (Vaka #08 haftalık etiket kardeşi). Ayrıca: kuyruk disk kuralı — disk yokken rsync/PDF sırayı tutmaz, külliyat geçer (agir_is_kilit.py güncellendi, Patron kararı).

## Patron için

- Bu dosya tek okuma noktasıdır; ayrıntı pano ve SUREKLILIK.json'da.
- Borsa bölümünü bulut sohbetine yapıştır.

*Vezir · otomatik*
