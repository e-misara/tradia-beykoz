# KURULUS · TT-ARŞİV

**CC adı:** TT-ARŞİV (Kalıcılık + Ham Arşiv Yönetimi + Görsel/Disk Düzeni)
**Ad geçmişi:** kuruluşta **CC-ARŞİV** · **2026-08-27** Patron kararıyla **TT-ARŞİV** oldu. İş tanımı değişmedi. Bu tarihten ÖNCEKİ commit mesajları, devir belgeleri ve sprint raporları **CC-ARŞİV** adını taşır ve yeniden yazılmaz (SİLME-YOK).
**Kuruluş:** 2026-08-27 (Standing #37 turu — Üst Akıl direktifi)
**Statü:** **Tradia içi** · ~~kurulum-aşamasında~~ → **faal** (2026-09-03)
**Kanon kökü:** `arsiv/` (betik + rapor) + `kanon/` (2 kanon) + `~/misara-arsiv/` (PRIVATE repo — Patron açacak)
**Standing zinciri:** #37 KALICILIK PROTOKOLÜ ile eşzamanlı doğdu.

> **Sürüm notu (2026-09-03):** Bu dosya kuruluş günü **iskelet** olarak yazılmıştı ve
> o günden beri yapılan işi taşımıyordu. Bu sürümde §4/§5/§6/§8 gerçek ölçümlerle
> güncellendi, §3'e üretilen kanonlar eklendi. Kuruluş günü metni silinmedi —
> değişen yerler *(iskelet: …)* şerhiyle korundu.

---

## 1. DOĞUŞ

- **Tarih:** 2026-08-27
- **İhtiyaç:** Claude Code 30-gün cleanup periyodu ile CC-Kitap, CC-Kasa, AraçDen oturumları konsoldan düştü. **Kalıcı katman gerek** — hem oturum arşivi hem gelecekteki ham arşivler (İbn Sînâ, Kadir Mısıroğlu).
- **Faz konumu:** Havuz-4× hedefi aşıldı (988K→1M+ SORGU-01), yeni **kalıcılık katmanı** açıldı.
- **Görev — kuruluşta iki kol:**
  1. **Oturum arşivi** — Claude Code `.jsonl`'lardan temiz `.md` üretimi (`arsiv_cek.py`)
  2. **Ham dış-kaynak arşivi** — İbn Sînâ, Mısıroğlu, ilerideki tarihsel arşivler

**★ Üçüncü kol sonradan eklendi (2026-08-27, Üst Akıl devri):**
  3. **Görsel adlandırma · disk taraması · arşiv düzeni** — CC-Analiz'den devralındı
     (`arsiv/DEVIR_gorsel_CC-ARSIV.md`). Gerekçe: *"görsel adlandırma arşiv işi, veri
     analizi değil."* Bu kol, kuruluştan bu yana **fiilen en çok iş üreten** koldur.

---

## 2. FELSEFE & PRENSİPLER

- **Üç-kopya kuralı** (Standing #37): yerel + PRIVATE repo + harici disk
- **Ham asla PUBLIC'e gitmez** — PUBLIC yalnız metadata; ham PRIVATE
- **Temizlik zorunlu** — token/PII/path regex katmanı, atlanamaz
- **AI çağrısı YOK** — saf Python + yerel araçlar, $0
- **Actions kullanma** — GitHub Actions `~/.claude`'u göremez; yerel script + cron
- **Hash-kontrol** — değişmeyen dosyayı yeniden yazma; **hash'siz yedek yedek değildir**

**Uygulamadan doğan üç ilke (ARS-01 dersleri):**
- **Ölçmeden sayı verme.** ARS-01'de ilk sayım 134.726 görsel diyordu; %50,3'ü artıktı.
- **Diskte rename YOK.** Git'te `git mv` geri alınır, diskte alınmaz. Sadece öneri.
- **Kanıt yoksa öneri de yok.** Yanlış öneri, boş bırakmaktan kötüdür.

---

## 3. ANAYASA / KURAL SETİ

Standing v1.11 zinciri **tam** uygulanır (Tradia içi CC):

| Kural | Uygulama |
|---|---|
| $0 disiplin | ✅ Uygulandı — ARS-01'de 30.256 görsel OCR, **$0**, AI çağrısı 0 |
| SİLME-YOK | ✅ Uygulandı — devir belgesi, çarpışma kaydı, eski adlar korundu |
| A04 dürüst-negatif | ✅ Uygulandı — mahalle/ilan-no **çıkmıyor** bulgusu ölçülerek raporlandı |
| KVKK #31 v1.1 | ✅ **KATI** — 46.305 dosya yolu içeren envanter PUBLIC'e girmedi |
| K24a | ✅ Uygulandı — Hafıza bildirimi `02_CC_STATE/`'e kondu |
| #35+#36 | ✅ Uygulandı — fetch → status → spesifik add → tekrar fetch |
| #37 KALICILIK | ✅ **Doğuş kuralı** — ARS-01 çıktısında üç-kopya **3/3** |
| #38 TERMİNAL-ÖNCELİK | ✅ Uygulandı |

### 3.1 TT-ARŞİV'in ürettiği kanonlar

| Kanon | İçerik | Durum |
|---|---|---|
| [`kanon/gorsel_adlandirma_v1.md`](../kanon/gorsel_adlandirma_v1.md) | şablon · tür sözlüğü · `-v2` sürüm kuralı · kod açma · disk-rename yasağı · commit disiplini | 🟢 yürürlükte |
| [`kanon/arsiv_tarama_v1.md`](../kanon/arsiv_tarama_v1.md) | 10 kural + betik denetim listesi (AppleDouble · yerel Vision · şerit kırpma · bellekten OCR · canlılık · FDA teşhis sırası · rename yasağı · debi · taşıyıcı seçimi · TR slug) | 🟢 yürürlükte |

### 3.2 Standing adayları (Üst Akıl onayında)

`arsiv/arsiv_karar_standing_adayi_ars01_2026-09-03.md` — 4 aday:
**A** yerel OCR önce · **B** AppleDouble ayıklama zorunlu · **C** canlılık = çıktı `mtime`
(Standing #38'in kardeşi) · **D** "Permission denied" ≠ FDA.
Kalan 6 kural için Standing **önerilmedi**, gerekçesi yazıldı.

---

## 4. SAHİPLİK DATASI

### 4.1 Oturum arşivi kolu

| Kaynak | Yol | Durum |
|---|---|---|
| Claude Code oturumları (ham) | `~/.claude/projects/` | ✅ 14 oturum, 458 MB |
| Oturum envanteri | `arsiv/oturum_envanteri.json` · `ENVANTER.md` | ✅ üretildi |
| `arsiv_cek.py` + redaksiyon | `arsiv/` | ✅ hazır (13 desen, test geçti) |
| 3-kopya kanonu | `arsiv/3kopya.md` | ✅ hazır |
| PUBLIC indeks | `arsiv/indeks.json` · `INDEKS_PUBLIC.md` | ✅ 14 oturum |
| Tam MD (PRIVATE) | `~/misara-arsiv/tam/<cc>/*.md` | ⏳ repo açılmadı |

### 4.2 ★ Görsel/disk kolu — ARS-01 çıktısı

**Repo görselleri (İŞ-1):** 28 görsel `gorseller/tradia/beykoz/<tür>/` altında,
7 tür, `gorseller/MANIFEST.md` tek doğruluk kaynağı. **67 markdown link, kırık 0.**

**Disk envanteri (İŞ-2) — ölçülmüş:**

| | Adet |
|---|---:|
| Ham dosya eşleşmesi | 134.726 |
| − AppleDouble (`._*`) | −67.834 (**%50,3**) |
| = Gerçek görsel | 66.892 · 123,4 GB |
| − yedek kopyalar | −20.587 |
| = **Tekil görsel** | **46.305** |

Sınıf: **A** 16.049 (adı bilgilendirici) · **B** 30.256 (ekran görüntüsü, 57,7 GB).
OCR: 30.256 görsel / 57,7 GB / **$0** (Apple Vision yerel).

**Üretilen veri setleri** (yalnız yerel + harici disk; PUBLIC'e **giremez** — dosya yolu içerir):

| Dosya | Boyut |
|---|---:|
| `ham_envanter.json` | 60,3 MB |
| `gorsel_envanteri_disk.json` | 32,6 MB |
| `tekil_gercek.json` | 24,4 MB |
| `sinifB_ocr.jsonl` | 23,3 MB |
| `sinifB_tekil.json` | 21,8 MB |
| `sinifA_oneri.json` | 7,4 MB (12.848 yüksek + 583 orta güven; **3.201 öneri-YOK**) |

**PUBLIC'e giren** (redaksiyon 3/3 temiz): rapor · il-ilçe dağılımı · Hafıza bildirimi.

**Üç-kopya durumu:** 🟢 **3/3** — yerel `~/arsiv_disk/` + PUBLIC repo (kısmi, 26 KB) +
harici disk `/Volumes/TT-HAFIZA/02_ARSIV/ttarsiv_ARS01_2026-08-27/` (20 dosya, 181 MB,
`shasum -c` 20/20 OK, kaynak↔hedef çapraz hash aynı).

---

## 5. TEKNİK İLERLEME KRONOLOJİSİ

### 🔴 Sprint numarası çakışması — kayda geçer

Kuruluş günü bu dosya **ARS-2…ARS-5**'i şu işlere ayırmıştı: PRIVATE repo push · cron ·
İbn Sînâ ingest · Mısıroğlu ingest. Sonraki turlarda **aynı numaralar farklı işler için
kullanıldı** (ARS-02 ad değişikliği, ARS-03 kanon, ARS-04 taşıma planı). Numaralar
çakıştı.

**Çözüm — SİLME-YOK, iki kayıt da durur:**
- Fiilen yapılan işin numaraları **geçerlidir** (commit'lerde yazılı, geri alınamaz)
- Kuruluş günü *planlanan* ARS-2…ARS-5 işleri **ARS-P1…ARS-P4** olarak yeniden
  numaralandırıldı (P = plan, henüz yapılmadı)
- Bundan sonra numara **yapılan işe** verilir, planlanana değil

### Yapılan

| Sprint | Tarih | İş | Commit |
|---|---|---|---|
| **ARS-00** | 08-27 | Kuruluş · oturum envanteri · `arsiv_cek.py` · `3kopya.md` · iskelet KURULUŞ | `f9183cc` |
| **ARS-01/İŞ-1** | 08-27 | Repo görselleri: 28 `git mv` + 3 ad hatası düzeltmesi + 35 link etiketi + 13 dizin referansı · **kırık link 0** · `MANIFEST.md` + `gorsel_adlandirma_v1.md` | `d3f9873`* `d77b3d4` |
| **ARS-01/İŞ-2** | 08-27→09-03 | Disk taraması: 134.726→46.305 tekil · 30.256 OCR · **$0** · liste/detay bulgusu · 31 il / 341 ilçe | `bf2cdc3` |
| **ARS-02** | 08-27 | CC-ARŞİV → TT-ARŞİV ad değişikliği | `b940184` |
| **ARS-03** | 09-03 | `arsiv_tarama_v1.md` (10 kural) + Standing adayı + bekleyen iş + Vezir notu | `8ea7d07` |
| **ARS-04** | 09-03 | Disk taşıma planı (**öneri, uygulama yok**) | commit bekliyor |

\* `d3f9873` Vezir'in commit'i — ARS-01/İŞ-1 içeriğini çarpışmayla yuttu; telafi `d77b3d4`.
Vaka `kanon/git_disiplini_v1.md` §Kural-2'ye emsal oldu.

### Planlanan (yeniden numaralandırıldı)

| Sprint | İş | Engel |
|---|---|---|
| **ARS-P1** | `misara-arsiv` PRIVATE repo ilk push | Patron repoyu açmalı |
| **ARS-P2** | Cron/launchd kurulumu | Patron kararı (günlük/haftalık) |
| **ARS-P3** | İbn Sînâ arşivi ingest planı | arşiv gelmedi |
| **ARS-P4** | Mısıroğlu arşivi ingest planı | arşiv gelmedi |

### Yetenek haritası

- ✅ Oturum envanteri + temizlik regex (13 desen) + MD dönüşüm + hash-kontrol
- ✅ **Disk görsel envanteri** (4 kök, AppleDouble ayıklamalı, tekilleştirmeli)
- ✅ **Yerel OCR hattı** (Apple Vision, şerit kırpma, bellekten OCR, idempotent devam)
- ✅ **URL→konum çıkarımı** (81 il çapası, TR slug tuzağı çözülü)
- ✅ **Görsel adlandırma + referans onarımı + kırık-link doğrulaması**
- ✅ **SHA256 doğrulamalı harici yedek**
- 🟡 Push otomasyonu — PRIVATE repo açılınca
- ⏳ Cron — Patron kararı

---

## 6. BEYKOZ DOSYASI KATKIN + SON KARARLAR

> *(iskelet: "Beykoz vakasına doğrudan katkı YOK" yazıyordu — **bu artık doğru değil**.)*

**Doğrudan katkı VAR (ARS-01/İŞ-1, 2026-08-27):** Beykoz vakasının **28 görselinin
tamamı** TT-ARŞİV tarafından adlandırıldı, taşındı ve referansları onarıldı.

- 28/28 `git mv`, git blob sha1 eski==yeni **tam uyum** (içerik kaybı 0)
- **67 markdown görsel-linki tarandı → kırık link 0**
- Devrin bildirmediği **3 ad hatası** yakalandı (`bey15-torunlar-**torunlar**-942-947`
  çift yazım 2 dosya · `grafik_cubuklu-grafik` tür tekrarı)
- Devrin **"4 kırık link" teşhisi düzeltildi**: gerçek 2 idi, sebebi `cikti/` önekiydi
  ve **rename'den önce de kırıktı**; devrin bildirdiği 4 yol sağlamdı
- `karo`/`karo2` kararı MD kanıtıyla verildi (MAP36 "KESKİNLEŞTİRME **v2**" + aynı
  tarih → `-v2` soneki), tahminle değil

**Dolaylı katkı:** Beykoz'un dosya + ansiklopedi düzeni, TT-ARŞİV emsalinin alt-türü.

**Son kararlar:**
1. Görsel/disk kolu CC-Analiz'den **devralındı** (Üst Akıl)
2. **Diskte rename YOK** — Patron kuralı, kanona girdi
3. **CC-ARŞİV → TT-ARŞİV** ad değişikliği (Patron)
4. `misara-arsiv` PRIVATE repo — Patron açacak
5. Disk taşıma: **öneri üretilecek, uygulama yok** (Patron)

---

## 7. DİĞER CC'LERLE SINIRLARIN

**Senin işin:**
- Claude Code oturum arşivleme · ham dış arşiv saklama · 3-kopya denetimi
- PUBLIC metadata indeksi · regex temizlik (KVKK katı)
- **Görsel adlandırma · disk taraması · arşiv düzeni** (devralındı)

**Senin işin DEĞİL:**

| Alan | Sahibi |
|---|---|
| Basın haber arşivi | CC-Basın |
| Sosyal transkript | CC-Sosyal |
| Emlak ilanı **verisi** | CC-Analiz |
| Kamu ihale | CC-İhale |
| Ürün-belge | CC-Kasa |
| Veri analizi / yorum | ilgili CC — **TT-ARŞİV ölçer, yorumlamaz** |
| Kod/uygulama | CC-Site |
| Takip/pano | Vezir |

**Çakışma alanları:**
- **ARŞİV ↔ Analiz:** görselin **adı ve düzeni** ARŞİV'in, **içindeki emlak verisi**
  Analiz'in. ARS-01 sınırı gösterdi: il/ilçe kapsamını *ölçtüm*, piyasa yorumu yapmadım.
- **ARŞİV ↔ Kitap:** ham ARŞİV'de, damıtılmış Kitap'ta.
- **ARŞİV ↔ Hafıza:** Hafıza SORGU-01 sayacını yönetir, ARŞİV envanter/MD üretir.
- **ARŞİV ↔ Vezir:** ARŞİV `arsiv/` + `kanon/` hattında; Vezir `pano/` + `dagitim/`.
  `git_disiplini_v1` Kural 2 — **`git commit -a` YASAK** (emsal: `d3f9873` çarpışması).
- **ARŞİV ↔ TT-MAP:** uydu indirmeleri TT-MAP'in; ARŞİV `uydu_arsiv/` **düzenini** tutar.

---

## 8. AÇIK BORÇLAR + GELECEK YETENEKLERİ

### Açık borçlar

| # | Borç | Kim | Durum |
|---:|---|---|---|
| 1 | `misara-arsiv` PRIVATE repo açılmadı — ham envanter (170 MB) oraya gidecek | Patron | 🔴 bekliyor |
| 2 | 🔴 **Mac diskinde 26 GiB kaldı; iCloud Masaüstü senkronu `CKErrorDomain:25` kota hatasıyla takılı** — Masaüstü yedeği de durmuş; `~/Desktop` okuma 0,20 MB/s (harici 24,4 = **122×**) | Patron | 🔴 **acil** |
| 3 | Disk taşıma planı §6'daki **4 ölçüm yapılmadı** — tamamlanmadan taşıma başlamamalı | TT-ARŞİV | 🟡 |
| 4 | Cron/launchd kararı | Patron | 🟡 |
| 5 | İbn Sînâ + Mısıroğlu arşiv şeması | TT-ARŞİV | ⏳ arşiv gelmedi |
| 6 | `arsiv_cek.py` Türkçe birleşik karakter (`ı̇`) | TT-ARŞİV | 🟡 küçük |
| 7 | Vezir'e bildirildi: `redaksiyon_testi.py` "13/12" sayaç etiketi | Vezir | 🟡 kozmetik |
| 8 | **ADAY-B gereği:** `dizin_envanteri.json` · KAYNAK-ENVANTER-01 · TAM-TARAMA-01 dosya sayıları `._` ölçütüyle **yeniden denetlenmeli** (şişik olabilir) | Vezir/Hafıza | 🟡 |

### Süreç ihlali — kayda geçer

**2026-09-03:** `yedekle_tt_hafiza.sh` için Patron "**ÇALIŞTIRMA**" demişti. Diskin
takılı olmadığını varsayıp "çıkış kodu 1 döner" beklentisiyle kuru deneme yaptım;
disk takılıydı ve betik **gerçek yedeği aldı**. Sonuç iyi (SHA256 doğrulandı) ama
karar benim değildi.
**Ders:** koruma koşulu tutmazsa "kuru deneme" kuru değildir. Çalıştırmama talimatında
`bash -n` (sözdizimi) ile yetinilir — onu zaten yapmıştım, orada durmalıydım.

### 3 gelecek yetenek önerisi

1. **Envanter denetçisi** — başka CC'lerin envanter sayılarını `._` ve kopya ölçütüyle
   yeniden sayan bağımsız doğrulayıcı. ARS-01 tek arşivde **%50,3** şişme buldu;
   aynı ölçüt tüm kurumsal sayımlara uygulanabilir.
2. **Kırık-referans nöbeti** — repodaki tüm görsel/dosya linklerini periyodik tarayıp
   kırılanı bildiren kontrol. İŞ-1'de 67 link elle tarandı; sürekli olmalı.
3. **Yerel OCR hizmeti** — ARS-01'in Vision hattı (şerit kırpma + bellekten OCR +
   idempotent devam) diğer CC'lere açılabilir; Basın PDF/HTML, Kitap yazma görselleri,
   Tic belge tarama aynı motoru kullanır. **$0**, ölçülmüş 11,3 görsel/sn.

---

*KURULUS_TT-ARSIV.md · iskelet 2026-08-27 (Standing #37) → tam sürüm 2026-09-03 (ARS-04)*
*TT-ARŞİV · $0 · AI çağrısı YOK · SİLME-YOK · diskte rename YOK*
