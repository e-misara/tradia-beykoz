# GECE RAPORU · 2026-10-17 (08:40 otomatik)

**Üretim:** 2026-10-17T20:37 · **Pencere:** 22:00 → 08:40 · **15 dk ölçüm sayısı:** 22

## Sabah teyitleri

- **CDN yayın teyidi (08:30):** **TEYİTLİ** · 2026-10-16T21:51
- **EVDS sağlık (Analiz 08:00 · evds_saglik.json):** `SAGLAM` · 2026-10-15T05:00:02Z · Vezir damgası: **SAGLAM (2026-10-14T15:57:33Z)** · veri yolu: JSON items=11 · B11: UYUMLU

## Gece ölçüm özeti (15 dk · SUREKLILIK.json → makine_gecmis)

- **Yük maks (1 dk):** 302.34 · **Swap maks:** 7.2 GB · **Boş bellek min:** 0.06 GB
- **Kilit ihlali (ölçüm×süreç toplamı):** 67 · ihlal eden CC: Hafıza
- **rsync (Hafıza nefes) bitiş:** nefes log: 2026-10-17T17:37
- **EVDS tam çekim:** sabah hâlâ koşuyor / ölçülemedi · kaldığı seri (son log): `[2026-10-15 02:43:33] MOD=tam seri=8730/8730 satir=128908 erisilemeyen=3 → SAGLIKLI `
- **launchd exit≠0 (son ölçüm):** 2

## Kilit sırası (agir_is_kilidi.json)

- 1. Hafıza · nefes rsync ~/tradia_basin/ham → TT-HAFIZA/staging_nefes/basin_ham (DEVAM, resumable) → DİSK BEKLİYOR (2026-10-17 13:18 · disk yok, sırayı tutmaz; disk gelince öncelik geri) · önceki: bekliyor — disk geldi 2026-10-17 03:44, öncelik geri (kural 11)
- 2. Borsa · kap_kulliyat.py C (450/4459) → BİTTİ 2026-10-16 01:56
- 3. Borsa · ktb_pdf_tasi.py (91 PDF, 8,51 GB → TT-HAFIZA; kopyala→SHA→manifest→Mac kopyasını kaldır) → DİSK BEKLİYOR (2026-10-17 13:18 · disk yok, sırayı tutmaz; disk gelince öncelik geri) · önceki: bekliyor — disk geldi 2026-10-17 03:44, öncelik geri (kural 11)
- 4. Hafıza · Vaka #09 taşıma A0: ~/Desktop/tradia + TT-Tüm CC kod/çalışma dosyaları → ~/tradia_calisma/ + symlink → DİSK BEKLİYOR (2026-10-17 13:18 · disk yok, sırayı tutmaz; disk gelince öncelik geri) · önceki: bekliyor — disk geldi 2026-10-17 03:44, öncelik geri (kural 11)
- 5. Hafıza · builder.py --kaynak basin_html → bekliyor
- 6. Basın · hasat_paralel_v4 → DİSK BEKLİYOR (2026-10-17 13:18 · disk yok, sırayı tutmaz; disk gelince öncelik geri) · önceki: bekliyor — disk geldi 2026-10-17 03:44, öncelik geri (kural 11)
- 7. Map · Beykoz 3D coğrafya render (beykoz_guncel_2026-10/map) — ağır iş → BİTTİ 2026-10-16 01:21 · 57 görsel + yağış (15.10 23:17) + foto v2 (16.10 hafif iş) · zip v2 23ae569fb44c
- 8. Map · Kartal+Rize ilçe hattı (OSM taraması + 3D foto) — ağır iş, ≤15 dk parça → HATA 2026-10-16 17:04 · osm: 4.2 dk

## SON 24 SAAT OLAYLAR (Beykoz · Kartal · Rize + 81 il ulusal) — olay_alarmi_kanonu_v1

- **Basın hattı (canli_akis, 6 saat):** üretim 2026-10-17 20:20 · pencere 2026-10-16 20:20 → 2026-10-17 20:20 · genel **KIRMIZI** · yeni satır 0 · eşik: seviye = HESAP v0 (KIRMIZI: riskli ≥5 haber ve ≥3 kaynak); kanon alarmı = ilçede ≥1 riskli
- **Beykoz** (TR-34-1185): **KIRMIZI** · haber 8 · riskli 5 / kaynak 5 · heyelan 1, tahliye 1, sel 4, yagis 3
    - 2026-10-17 13:43 · beykozgazetesi.com · Beykoz’da istinat duvarı çöktü; 3 katlı bina tahliye ediliyor
    - 2026-10-17 00:27 · isthaberler.com · Beykoz'da sel sonrası 1.879 başvuru: En fazla talep Tokatköy'den geldi
    - 2026-10-16 21:45 · Beykoz Doğuş Haber · Beykoz’da Yağış Sonrası Çalışan 10 Belediye Personeli Rahatsızlandı
- **Kartal** (TR-34-1449): **YEŞİL** · haber 0 · riskli 0 / kaynak 0 · 
- **Rize** (TR-53): **YEŞİL** · haber 0 · riskli 0 / kaynak 0 · 
- kaynak hataları: {'Beykoz/gnews/sel': 'ERR:URLError', 'Beykoz/gnews/yağış': 'ERR:URLError', 'Beykoz/gnews/heyelan': 'ERR:URLError', 'Beyk

## Zamanlı iş bekçisi (son koşu > kadans eşiği · U-09)

- 🔴 **27 iş eşik dışı:** ttai.duyuru (hiç) · trabasin.app (hiç) · ccihale.arsiv (2.4 gün) · ccfinans.aylik (46.7 gün) · evds.saglik (2.5 gün) · ccbasin.tk_kontrol (hiç) · gunluk-ozet (75.9 gün) · vezir.gece_raporu (2.5 gün) · ccbasin.trabasin (hiç) · pazarlama.beykoz_ilan (1.2 gün) · vezir.trabasin_bekci (hiç) · dm02.dongu (44.0 gün) · vezir.prompt_defteri (2.9 gün) · hafiza.vade_kontrol (2.5 gün) · trabasin.ekran (hiç) · ccihale.rg (2.5 gün) · ccfinans.gunluk (71.3 gün) · hafiza.ayna (hiç) · haber (hiç) · ccihale.uyan (2.4 gün) · ccsignals.gelenkutusu (hiç) · analiz.seo_haftalik (hiç)

## Kilit düşme kayıtları (ölü pid / heartbeat)

- 2026-10-15T04:35 · Hafıza · pid 91683 yok · rsync süreci 0 · /Volumes/TT-HAFIZA mount değil (nefes alarm 01:26) · Hafıza dönüşü 04:30 'canlı süreç 0' → Vezir tutan→null; bildirim vezir_bildirim_hafiza_kilit_dustu.json

## Nabız (5 dk · motor/NABIZ.jsonl)

- **Disk bağlı dakika (bugün):** 300 / 865 ölçülen dk · **pil min:** %1 · **adaptör takılı nabız:** 77/173 · **işlem:** 7

Tutan: {"cc": "Hafıza", "is": "iCloud taşıma Aşama 1 (basın ham klon + yükleme; nice 10, caffeinate)", "pid": 46918, "baslangic": "2026-10-17 20:20:58", "heartbeat": "2026-10-17 20:36:59", "ayar": "Patron 17.10 gece talimatı · parça başına manifest+evict", "not": "ölü pid kilidi bırakır; heartbeat 60 sn"}

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
