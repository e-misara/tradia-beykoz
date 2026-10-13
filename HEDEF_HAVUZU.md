# HEDEF HAVUZU — 16 CC hedef kartı

**Kesit:** 2026-10-14 · **Derleyen:** Vezir · **Süreklilik kaynağı:** `motor/SUREKLILIK.json` (30 gün: 14 Eyl–13 Eki) · **Kapsam kaynağı:** SORGU-01 `ingest_ts` + `motor/KUYRUK.json`
**Kural:** Gerçek olmayan sayı yok. Ölçülemeyen alan **ölçülmedi**. CC'nin beyan etmediği hedef **CC beyanı yok** (Vezir hedef uydurmaz).

## 0. Derleme durumu — dürüst not

Patron "CC'lerin kendi doldurduğu kartlardan derle" dedi. **Diskte hiçbir CC hedef kartı yok** (`find ~ -iname "*hedef_kart*"` → 0 dosya; HEDEF_HAVUZU daha önce yazılmamış). Bu dosya bu yüzden **Vezir taslağıdır**. Karta yazılan hedef yalnız Patron'dan gelen tektir (Basın). Diğer 15 kartta hedef alanı **CC beyanı yok**. Kart şablonu 16 CC'ye istendi: `02_CC_STATE/vezir_istek_hedef_karti.json`. CC kartları geldikçe "sapma" sütunu dolacak.

**Süreklilik ölçüsünün sınırı:** 44 launchd işinden yalnız **9'u** ölçülebildi. Kalan 35 iş ya log basmıyor ya da koşu satırına tarih yazmıyor. Bu, CC'lerin değil ölçü altyapısının eksiği. Öneri (§3): her iş tek damgalı satır bassın.

## 1. Kartlar

| CC | Hedef | Bugün (ölçülen) | Eksik | Süreklilik (30 g) | Sapma |
|---|---|---|---|---|---|
| **Basın** | **973 ilçe · 12 ay** (Patron 14 Eki → 2027-10-14) · gerekli hız **18,7 ilçe/hafta** | Bölge motorunda **3 ilçe** işlendi (11 Eki) · kuyrukta 22 sıra · havuzda il/ilçe etiketli 31 bölge (etiket kalitesi şüpheli: url %14 / tarih %14 dolu, SIG14 borcu) | 970 ilçe (motor ölçüsüyle) | 🟢 %93 (govde 28/30) · ⚠ haber-akis **73 gündür sessiz** · hasat_v4 son satırı disk-ABORT | 🔴 Bu hafta 3 / gerekli 18,7 · havuz büyümesi: 30 Eyl–6 Eki haftası **0 kayıt** |
| **Hafıza** | CC beyanı yok | dm02 11 Eki'de koştu (gecikme 0) · BM-K1 3/3 bölgede DOLU | dm02 boşluk sebebi · TR etiket bayat · orumcek.json türetme | 🔴 %3 — yalnız 2/15 iş ölçülebildi · **6 iş sessiz** (gunluk-ozet 73 g, primer-monitor 73 g, sorgu.nefes 75 g, sorgu.nobetci 74 g, sorgu.duzen 18 g, tuik-tcmb 131 g) | ölçülmedi (hedef yok) |
| **Analiz** | CC beyanı yok | DFE v0.1 tanımı hazır, ölçüm disk bekliyor | BM-K8 Beykoz+Kartal ERİŞİLEMEDİ | ölçülmedi (1 iş, damgalı log yok) | ölçülmedi |
| **Sosyal** | CC beyanı yok | 3 bölge, 75 yerel kanal · havuza son 4 haftada 480 transkript | — | 🟡 %83 (gnd_retry 15/18) · gnd + whisper son satırı **disk-ABORT** | ölçülmedi |
| **Tic** | CC beyanı yok | BM-K2/K3/K10 3 bölgede DOLU · PARSEL-01 sahibi | TTSG akışı (abonelik duvarı) | 🔴 %0 — rg_haftalik her pazar koşuyor ama **"mount yok" ile çıkıyor**; son tamamlanan ingest **17 Ağu** | ölçülmedi |
| **İhale** | CC beyanı yok | BM-K7 3/3 DOLU · RG afet taraması 23 gün | Kartal rg_kamulaştırma + SİT BAKMADIM | 🔴 %10 (rg 3/30 damgalı tamamlanma · err logunda FileNotFoundError 12 Eki) · 4 iş ölçülmedi | ölçülmedi |
| **Borsa** | CC beyanı yok | S53: KTB YİGM toplayıcı, aylık launchd | EVDS3 anahtarı (Patron) | ölçülmedi (1 iş, damgalı log yok) | ölçülmedi |
| **Kitap** | CC beyanı yok | S4: kapsama %75,0 · katalog v6/95 | 12. bölüm ton onayı bekliyor | ölçülmedi (launchd işi yok, oturum-bazlı) | ölçülmedi |
| **TT-MAP** | CC beyanı yok | BM-K4/K5/K13/K15 3 bölgede DOLU | MTA/AFAD/OGM/DSİ bloke | ölçülmedi (2 iş, damgalı log yok) · eplan err 18 Eyl JSONDecodeError | ölçülmedi |
| **TT-AI** | CC beyanı yok | Rize pilotu 3 ilçe (K1/K6/K7/K14) | BM-K6 + K14 Beykoz/Kartal BOŞ · .gov.tr fetch-BLOKE | ölçülmedi (3 iş, damgalı log yok) | ölçülmedi |
| **Pazarlama** | CC beyanı yok | 10/81 il TÜİK verisi | 71 il KAPALI (EVDS3) | 🟡 %83 (harvest 25/30, yurtdışı 4/5) · disk uyarısı = yalnız ayna atlandı, iş tamam | ölçülmedi |
| **Kasa** | CC beyanı yok | PARK | — | ölçülmedi (launchd işi yok) | ölçülmedi |
| **Finans** | CC beyanı yok | BM-K11 3/3 DOLU · havuza haftada 4–7 belge | Derepazarı hücresi bolge_finans.json'da yok | ölçülmedi (3 iş, damgalı log yok) | ölçülmedi |
| **Signals** | CC beyanı yok | SIG33 örümcek kıyası: 🟢6/🟡6/🔴5/🔵3 | sapma satırları KUYRUK'a | ölçülmedi (launchd işi yok, oturum-bazlı) | ölçülmedi |
| **Site** | CC beyanı yok | S10 deploy 90+ gün açık | — | ölçülmedi (launchd işi yok) | ölçülmedi |
| **Arşiv** | CC beyanı yok | 3/3 kopya GERÇEK (97704f0) | retro-taşıma (disk yok) | 🟢 %100 (uckopya 1/1 — tek koşuluk örnek, istatistik değil) | ölçülmedi |

## 2. Sistem geneli (30 gün)

- **Güvenli-duruş (pil kritik) günü: 21 / 30.** Hafıza T7 güç alarmı. Mac'in günlük uyanık yüzdesi ortalama **%56**, en düşük gün **%0** (pmset 2 dk örnekleri). Kaçırılan koşuların çoğu bununla örtüşüyor. Bu örtüşme kanıt değil, **olası** sebep.
- **TT-HAFIZA disk takılı değil.** Tic, Sosyal (gnd, whisper) ve Basın (hasat_v4) işleri son koşularında disk yüzünden çıktı.
- **SORGU-01 kapsam büyümesi (son 4 hafta):** yalnız 3 kaynak kayıt ekledi (basin_html, sosyal_transkript, finans_belge). **Yeni ilçe 0, yeni kaynak 0.**

## 3. Vezir önerisi — koşu-damgası standardı (kanon adayı)

Her launchd işi başında ve sonunda tek satır bassın:
`[2026-10-14T03:00:00Z] <label> BAŞLA` · `[…] <label> BİTTİ exit=<n> disk=<var|yok> kayit=<n>`
Bu standart olmadan 44 işin 35'inin sürekliliği **ölçülemez**. Bugün yapılabilen tek ölçü "son iz tarihi"dir.

## 4. Hafıza'ya hipotez (kanıtlı değil)

73 gündür sessiz `gunluk-ozet`, `primer-monitor` ve `haber-akis` işlerinin üçü de: (a) 1 Ağu Standing #38 shim düzeltmesinde yeniden yazıldı (`.pre_python3.9_20260801` yedekleri var), (b) logunu `~/Desktop`'a (TCC korumalı) yazıyor, (c) `bin/python3.9` bağlantısı ya da `/bin/bash` çağırıyor. Hafıza'daki Standing #38 ek-dersine göre bağlantı FDA mirasını kırıyor. Logları **2 Ağu**'da durdu. `haber` ve `tuik-tcmb-monthly` ise **hiç yüklü değil**.

*Vezir · $0 · salt-okuma ölçüm · 2026-10-14*
