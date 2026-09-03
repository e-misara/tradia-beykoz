# TT-ARŞİV · İŞ-2 — DİSK GÖRSEL TARAMASI

**Sprint:** ARS-01/İŞ-2 · **Ölçüm tarihi:** 2026-08-27 (tarama günü) · **Rapor üretimi:** 2026-09-03 · **Maliyet: $0** — AI çağrısı 0, Vision API çağrısı 0

**OCR motoru:** Apple Vision `VNRecognizeTextRequest` (yerel, ağ yok, ücretsiz)

> **Diskte rename YAPILMADI.** Patron kuralı: git güvenliği olmayan yerde sadece *öneri* üretilir.

---

## 1) Kapsam ve temizlik

| | Adet |
|---|---:|
| Ham dosya eşleşmesi | 134726 |
| − AppleDouble (`._*`) artığı | −67834 (**50.3%**) |
| = **Gerçek görsel** | **66892** |
| − yedek kopyalar (ad+boyut tekilleştirme) | −20587 |
| = **Tekil görsel** | **46305** |

**Taranan kökler:** `~/Desktop` · `~/Documents` · `~/Downloads` · `/Volumes/TT-HAFIZA`

**Hariç tutulan:** ~/Pictures/Photos Library.photoslibrary (Patron emri) · Library/Mobile Documents · .Trash · node_modules · .git

> ⚠️ **`._` bulgusu:** ilk sayım 134.726 görsel diyordu; yarısı macOS'un exFAT'e kopyalarken bıraktığı ~4 KB'lık kaynak-çatal artığıydı. Görsel değiller. Bu ayıklanmadan yapılan her sayım **2× şişik** olur.

---

## 2) Sınıf dağılımı

| Sınıf | Adet | Ne demek | İşlem |
|---|---:|---|---|
| **A** | 16049 | Adı zaten bilgilendirici | Vizyonla AÇILMADI, şablona çevrildi |
| **B** | 30256 | Ad hiçbir şey söylemiyor | OCR ile açıldı |

SINIF B alt kırılım: `ekran-goruntusu` 29908 · `sayi-ad` 190 · `belirsiz-ad` 123 · `bos-ad` 35

---

## 3) ★ LİSTE ↔ DETAY — besleme yöntemini belirleyen bulgu

**Patron sorusu: ekranların kaç %'i liste, kaç %'i detay; detaylardan mahalle+ilan-no çıkıyor mu?**

### 3.1 Sayfa tipi (URL'den, n=28055 sahibinden ekranı)

| Sayfa tipi | Adet | Pay |
|---|---:|---:|
| **Liste** (kategori sayfası, `/satilik-arsa/bursa-karacabey?pagingOffset=350`) | 28049 | **100.0%** |
| **Detay** (`/ilan/...-<no>/detay`) | **6** | **0.0%** |

**Detay sayfalarının kırılımı — hepsi incelendi (n=6):**

| Kategori | Ekran | Tekil ilan | il/ilçe | ilan no |
|---|---:|---:|---|---|
| `vasita-deniz-araclari` (yat) | 6 | 2 | ❌ URL'de yok | ✅ **çıkıyor** |
| **emlak** | **0** | **0** | — | — |

> 🔴 **Emlak için tek bir ilan-detay ekranı YOK.** Bulunan 6 detay ekranının tamamı `vasita-deniz-araclari` — 2 tekil yat ilanı, 6 kez çekilmiş. Emlak arşivinin tamamı kategori-liste sayfası.

> ★ **Yan bulgu — iki URL biçimi birbirini tamamlamıyor:** detay URL'i **ilan no veriyor ama konum vermiyor**; liste URL'i **konum veriyor ama ilan no vermiyor**. Hiçbiri mahalle vermiyor. Yani mevcut ekran-görüntüsü yöntemiyle *ilan no + konum aynı kayıtta* hiç elde edilemiyor.

### 3.2 Liste sayfasının gövdesinden ne çıkıyor? (tam-sayfa OCR örneklemi, n=120)

| Ölçüm | Adet | Pay |
|---|---:|---:|
| Örneklem (OCR başarılı) | 120 | |
| ⚠️ **Hata/ulaşılamadı sayfası** | 13 | **10.8%** |
| Geçerli liste sayfası | 107 | 89.2% |
| — breadcrumb'lı (il/ilçe teyidi) | 96 | 89.7% (geçerlinin) |
| — en az 1 **mahalle** bahsi geçen | 59 | 55.1% (geçerlinin) |
| — **9-10 haneli ilan no** çıkan | 1 | **0.9%** |

### 3.3 Hüküm

| Alan | Nereden | Durum |
|---|---|---|
| **il** | URL yolu (`/satilik-arsa/bursa-karacabey`) | 🟢 **güvenilir** — 99.0% dolu |
| **ilçe** | URL yolu | 🟢 **güvenilir** — 89.3% dolu |
| **mahalle** | URL'de **YOK**; sayfa gövdesinde `"... Mh"` satırları | 🟡 **kısmi ve BOZUK** — geçerli sayfaların 55%'inde bir şey çıkıyor, ama tokenlar parçalı ve OCR hatalı |
| **ilan no** | Detay sayfası gerekiyor — **arşivde yok** | 🔴 **ÇIKARILAMAZ** |

**Mahalle neden kullanılamaz — ölçülmüş kanıt.** Gövdeden çıkan tokenlar: `ecentene` · `venicehir` · `rekirdere` · `bey` · `evler` · `yurt` · `çay`. İlk üçü OCR bozması, son dördü çok-kelimeli mahalle adının **kırpılmış son parçası** (`Yeşilyurt Mh` → `yurt`). Sayfa başına ortalama 2.2 mahalle bahsi çıkıyor ve bunlar **sayfanın değil, tek tek ilan satırlarının** özelliği — liste sayfasına mahalle etiketi basılamaz.

### 3.4 Gelecek besleme için ne demek

1. **Bu arşiv il/ilçe düzeyinde bir kaynaktır, ilan düzeyinde değil.** Mahalle-anahtarlı ürüne (CC-Analiz mahalle v9, TT-MAP mahalle_id) bu ekranlardan bağlanılamaz.
2. **İlan no isteniyorsa toplama yöntemi değişmeli:** liste sayfası değil, ilan-detay sayfası yakalanmalı. Bir liste sayfası ~50 ilan gösterdiği için, **aynı ilan sayısını detay olarak yakalamak ~50× daha fazla ekran** demek — pahalı ama alan-tam.
3. **Ekran görüntüsü zaten yanlış taşıyıcı.** Liste sayfasında ilan no HTML'de var, ekranda yok. Görüntü yerine sayfa kaynağı alınsaydı ilan no + mahalle + fiyat üçü birden çıkardı.
4. ⚠️ **10.8% hata sayfası** — 'Aradığınız sayfaya ulaşılamadı'. Bunlar dosya olarak arşivde duruyor ve sayıma giriyor; **hasat başarısı olduğundan yüksek görünüyor.** Örneklemdeki hata sayfalarının tamamı `kiralik-konut/istanbul-*` partisinden.

---

## 4) İL / İLÇE DAĞILIM TABLOSU — besleme kapsamı

### 4.1 Sahibinden ekranları, URL'den okunan il (n=27774)

| # | İl | Ekran | Pay |
|---:|---|---:|---:|
| 1 | istanbul | 3614 | 13.0% |
| 2 | mugla | 3034 | 10.9% |
| 3 | tekirdag | 2507 | 9.0% |
| 4 | bursa | 2162 | 7.8% |
| 5 | sakarya | 2113 | 7.6% |
| 6 | kocaeli | 2096 | 7.5% |
| 7 | mersin | 1529 | 5.5% |
| 8 | izmir | 1359 | 4.9% |
| 9 | canakkale | 1258 | 4.5% |
| 10 | eskisehir | 971 | 3.5% |
| 11 | antalya | 732 | 2.6% |
| 12 | yalova | 634 | 2.3% |
| 13 | gaziantep | 564 | 2.0% |
| 14 | adana | 555 | 2.0% |
| 15 | balikesir | 546 | 2.0% |
| 16 | afyonkarahisar | 518 | 1.9% |
| 17 | duzce | 507 | 1.8% |
| 18 | bilecik | 482 | 1.7% |
| 19 | bolu | 428 | 1.5% |
| 20 | corum | 385 | 1.4% |
| 21 | malatya | 318 | 1.1% |
| 22 | rize | 290 | 1.0% |
| 23 | hatay | 278 | 1.0% |
| 24 | cankiri | 209 | 0.8% |
| 25 | ankara | 154 | 0.6% |
| 26 | konya | 140 | 0.5% |
| 27 | adiyaman | 136 | 0.5% |
| 28 | kahramanmaras | 108 | 0.4% |
| 29 | bayburt | 83 | 0.3% |
| 30 | mus | 60 | 0.2% |
| 31 | ardahan | 4 | 0.0% |

**Kapsanan il: 31 / 81.** Hiç ekranı olmayan il: **50**

### 4.2 En yoğun 30 il-ilçe

| # | İl | İlçe | Ekran |
|---:|---|---|---:|
| 1 | mugla | bodrum | 707 |
| 2 | mugla | fethiye | 514 |
| 3 | tekirdag | corlu | 495 |
| 4 | eskisehir | tepebasi | 401 |
| 5 | adana | adana | 369 |
| 6 | mugla | milas | 363 |
| 7 | sakarya | adapazari | 360 |
| 8 | eskisehir | odunpazari | 346 |
| 9 | bursa | osmangazi | 321 |
| 10 | malatya | malatya | 318 |
| 11 | tekirdag | cerkezkoy | 314 |
| 12 | bursa | nilufer | 312 |
| 13 | kocaeli | izmit | 311 |
| 14 | tekirdag | marmaraereglisi | 301 |
| 15 | istanbul | kartal | 296 |
| 16 | tekirdag | kapakli | 290 |
| 17 | sakarya | serdivan | 287 |
| 18 | kocaeli | gebze | 274 |
| 19 | afyonkarahisar | merkez | 269 |
| 20 | bolu | merkez | 267 |
| 21 | mersin | yenisehir | 257 |
| 22 | corum | merkez | 250 |
| 23 | mugla | marmaris | 239 |
| 24 | duzce | merkez | 238 |
| 25 | tekirdag | suleymanpasa | 230 |
| 26 | kocaeli | basiskele | 227 |
| 27 | mugla | mentese | 222 |
| 28 | kocaeli | kartepe | 222 |
| 29 | yalova | merkez | 220 |
| 30 | mersin | toroslar | 213 |

Toplam **341** ayrı il-ilçe çifti.

### 4.3 Tüm görsel evreni (OCR + dosya yolundan, n=42411)

| # | İl | Görsel | Pay |
|---:|---|---:|---:|
| 1 | mugla | 5448 | 12.8% |
| 2 | tekirdag | 4684 | 11.0% |
| 3 | sakarya | 4273 | 10.1% |
| 4 | istanbul | 3799 | 9.0% |
| 5 | izmir | 3045 | 7.2% |
| 6 | mersin | 2523 | 5.9% |
| 7 | bursa | 2505 | 5.9% |
| 8 | kocaeli | 2096 | 4.9% |
| 9 | eskisehir | 1776 | 4.2% |
| 10 | canakkale | 1616 | 3.8% |
| 11 | balikesir | 1514 | 3.6% |
| 12 | yalova | 1023 | 2.4% |
| 13 | antalya | 945 | 2.2% |
| 14 | bilecik | 845 | 2.0% |
| 15 | duzce | 799 | 1.9% |
| 16 | adana | 723 | 1.7% |
| 17 | afyonkarahisar | 688 | 1.6% |
| 18 | bolu | 610 | 1.4% |
| 19 | rize | 604 | 1.4% |
| 20 | gaziantep | 564 | 1.3% |
| 21 | corum | 508 | 1.2% |
| 22 | hatay | 368 | 0.9% |
| 23 | cankiri | 359 | 0.8% |
| 24 | malatya | 318 | 0.7% |
| 25 | ankara | 169 | 0.4% |
| 26 | konya | 140 | 0.3% |
| 27 | adiyaman | 136 | 0.3% |
| 28 | kahramanmaras | 108 | 0.3% |
| 29 | bayburt | 104 | 0.2% |
| 30 | mus | 84 | 0.2% |
| 31 | ardahan | 19 | 0.0% |
| 32 | kars | 17 | 0.0% |
| 33 | sinop | 1 | 0.0% |

> İl bilgisi **91.6%** görselde var (42411/46305). Bunun 14748'i dosya yolundan ($0, OCR'sız), 27663'i OCR ile URL'den.

---

## 5) OCR'da görülen kaynaklar

| Kaynak | Ekran |
|---|---:|
| sahibinden.com | 28055 |
| BELIRSIZ | 1721 |
| dizipal2.com.tr | 359 |
| parselsorgu.tkgm.gov.tr | 42 |
| imesdilovasi.org | 20 |
| github.com | 13 |
| mobbin.com | 10 |
| aldemirglobal.com | 6 |
| tr.tradingview.com | 6 |
| tradiaturkey.com | 6 |
| console.cloud.google.com | 5 |
| status.claude.com | 3 |
| hpanel.hostinger.com | 2 |
| gemini.google.com | 1 |
| youtube.com | 1 |

---

## 6) MALİYET RAPORU

| Kalem | Değer |
|---|---|
| **Toplam para maliyeti** | **$0** |
| AI / LLM çağrısı | **0** |
| Bulut Vision API çağrısı | **0** |
| OCR motoru | Apple Vision, yerel, ağ trafiği yok |
| OCR'lanan görsel | 30256 |
| Okunan veri | 57.7 GB |
| Tam-sayfa OCR örneklemi | 120 görsel |

### 6.1 Vision yerine bulut kullanılsaydı (kaçınılan maliyet)

| Yöntem | Hesap | Tutar |
|---|---|---|
| Claude Vision (28 repo görseli için devrin tahmini) | ~15K token/görsel × 28 | devrin gerekçesiyle **yapılmadı** |
| Aynı işi LLM-vision ile: 30256 görsel × ~1.500 token (üst şerit) | ~45.4M token | **kaçınıldı** |
> Yerel Apple Vision zaten kurulu (`pyobjc-framework-Vision`) olduğu için tercih edildi. **Kural adayı: OCR gerektiren arşiv işi önce yerel Vision ile denenir; LLM-vision son çare.**

### 6.2 Performans — ölçülmüş, üç mimari

| Mimari | Hız | Not |
|---|---:|---|
| Tam görsel + doğru mod | ~0,08 gör/sn | 2940×1912 tüm alan |
| **Üst %15 şerit kırpma** | ~10 gör/sn | adres çubuğu orada — **~90× kazanç** |
| Şerit + page-cache ön-ısıtma | 0,25 gör/sn | 🔴 **ters tepti** (aşağıda) |
| **Şerit + belleğe oku + bellekten OCR** | **11,3 gör/sn** | 9,6 MB/s — nihai |

**Ön-ısıtmanın neden ters teptiği (ders):** 8 GB RAM'de page-cache'e ön-okunan dosyalar OCR sırası gelmeden düşüyor, disk **ikinci kez** okunuyor. Çözüm: baytı belleğe al, `CGImageSourceCreateWithData` ile bellekten OCR'la — tek okuma. **45× fark.**

### 6.2b Tur ortasında SESSİZ ÖLÜM — operasyon dersi

Tur **22.500/26.068**'de hiçbir hata yazmadan öldü. `BITTI` satırı yok, disk bağlıydı, uyku kaydı yok. En olası sebep: 8 GB RAM'de 12 okuyucu + 24'lük kuyruk tutarken sistem tarafından sonlandırılma.

| | |
|---|---|
| Fark edilme gecikmesi | **~4 sa 20 dk** (son yazım 15:51, tespit 20:13) |
| Veri kaybı | **0** — betikte devam desteği vardı, işlenmişler atlandı |
| Yeniden yapılan iş | 0 kayıt |
| Düzeltme | okuyucu 12→8 · kuyruk 24→12 · flush 500→200 |

★ **Ders:** `ps` çıktısında eşleşme görmek 'çalışıyor' demek değil — o eşleşme kendi bekleme döngümdü. Canlılık **çıktı dosyasının son yazım zamanından** doğrulanmalı. Uzun arka plan işlerinde idempotent devam-desteği zorunlu; olmasaydı 22.500 kayıt yeniden okunacaktı (~40 dk + 47 GB disk).

### 6.3 Disk I/O — engel olarak ölçüldü

| Konum | Soğuk okuma |
|---|---:|
| `~/Desktop` | **0,20 MB/s** |
| `/Volumes/TT-HAFIZA` (tek okuyucu) | 3,4 MB/s |
| `/Volumes/TT-HAFIZA` (16 okuyucu) | **24,4 MB/s** |

🔴 **Desktop 77× yavaş. Sebep bulundu:** Mac önyükleme diskinde **26 GiB** kaldı ve iCloud Masaüstü senkronu **kota hatasıyla takılı** (`brctl status` → `CKErrorDomain:25`, dosyalar `needs-upload` / `<file-pending>`). Bu yüzden tekilleştirmede **Mac kopyası değil harici disk kopyası** tercih edildi. **Patron aksiyonu gerekir** — bu sadece bizim taramamızı değil, Masaüstü'nün yedeklenmesini de durduruyor.

---

## 7) Üretilen dosyalar

| Dosya | Ne |
|---|---|
| `~/arsiv_disk/gorsel_envanteri_disk.json` | **Ana çıktı** — 46305 tekil görsel, alan alan |
| `~/arsiv_disk/sinifA_oneri.json` | SINIF A ad önerileri (şablon, vizyon yok) |
| `~/arsiv_disk/sinifB_ocr.jsonl` | SINIF B OCR ham çıktısı |
| `~/arsiv_disk/govde_orneklem.json` | Tam-sayfa gövde örneklemi (liste/detay hükmü buradan) |
| `~/arsiv_disk/ham_envanter.json` | Ham tarama (AppleDouble dahil, denetim izi) |
| `~/arsiv_disk/DAGILIM_RAPORU.md` | Bu belge |
| `~/arsiv_disk/*.py` | `envanter` · `ocr` · `sahibinden` · `yol_il` · `tara` · `govde` · `rapor` · `yaz` |

---

## 8) Dürüst notlar

- **Diskte hiçbir dosya yeniden adlandırılmadı, silinmedi, taşınmadı.** Sadece okundu.
- **Uydurma yok:** okunamayan her alan `BELIRSIZ`. SINIF A'da 3201 dosya için kaynak kanıtı bulunamadığından **öneri hiç üretilmedi** (yanlış öneri üretmektense boş bırakıldı).
- **`~/Pictures/Ekran Resimleri` diye bir klasör yok** — orada yalnızca Photos Library var, Patron emri gereği girilmedi. Ekran görüntüleri Masaüstü'nde ve TT-HAFIZA yedeklerinde.
- Mahalle/ilan-no bulgusu **olumsuz ama ölçülmüş**: 'çıkmıyor' demiyorum, *ne kadar çıktığını* ve *neden kullanılamaz olduğunu* sayıyla koydum.

*TT-ARŞİV · ARS-01/İŞ-2 · $0 · AI çağrısı YOK · SİLME-YOK · diskte rename YOK*