# ARŞİV TARAMA KANONU v1

**Üreten:** TT-ARŞİV · **Tarih:** 2026-09-03 · **Kaynak:** ARS-01 (30.504 görsel OCR, $0)
**Statü:** KANON · disk/arşiv taraması yapan her CC bunu okur
**Kardeş kanonlar:** [`gorsel_adlandirma_v1.md`](gorsel_adlandirma_v1.md) · [`git_disiplini_v1.md`](git_disiplini_v1.md) · [`dosya_adlandirma_v1.md`](dosya_adlandirma_v1.md)

> Bu kanonun tamamı **ölçülmüş** derslerden çıktı. Her kural bir ARS-01 vakasına dayanır; tahmin yok.

---

## Kural 1 · AppleDouble ayıklama ZORUNLU — saymadan önce

> **Görsel/dosya sayımı yapan her tarama, `._` ile başlayan dosyaları ayıklamak zorundadır.**

macOS, HFS+ olmayan dosya sistemlerine (exFAT, FAT32, NTFS, ağ paylaşımı) kopyalarken her dosya için `._<ad>` biçiminde bir **AppleDouble kaynak-çatal artığı** bırakır. Bunlar ~4 KB metadata dosyalarıdır, **görsel değildir**, ama uzantıyı (`.png`, `.jpg`) taşıdıkları için naive bir `find -name "*.png"` bunları sayar.

**ARS-01 vakası:**

| | Adet |
|---|---:|
| Ham eşleşme | 134.726 |
| `._` artığı | **67.834 (%50,3)** |
| Gerçek görsel | 66.892 |

**Ayıklanmadan yapılan sayım tam 2× şişikti.**

Ek tuzak: `._Ekran Resmi 2026-05-27.png` adı **"Ekran"/"Resmi"** harf kümeleri taşıdığı için ad-bilgilendiriciliği testini geçer ve yanlış sınıfa (SINIF A) düşer. ARS-01'de SINIF A sayısı 61.819 → 16.049'a indi.

```python
ger = [r for r in kayitlar if not r["ad"].startswith("._")]
```

`.gitignore`'da `._*` zaten var — ama **tarama** ayrı iş, gitignore taramayı korumaz.

---

## Kural 2 · Yerel Vision ÖNCE, LLM-vision SON ÇARE

> **OCR gerektiren arşiv işi önce yerel Apple Vision ile denenir.** LLM-vision, yerel motor işi çözemiyorsa gerekçesiyle kullanılır.

macOS'ta `pyobjc-framework-Vision` kurulu (`VNRecognizeTextRequest`). Yerel, ağ trafiği yok, **ücretsiz**, TR+EN dil desteği var.

**ARS-01 ölçümü:**

| | |
|---|---|
| OCR'lanan görsel | 30.256 |
| Okunan veri | 57,7 GB |
| **Maliyet** | **$0** |
| AI / Vision API çağrısı | **0** |
| LLM-vision ile aynı iş | ~45,4M token (30.256 × ~1.500) — **kaçınıldı** |

Devir notu 28 repo görselini "~420K token" gerekçesiyle vizyonla açmamıştı; haklıydı ama **çözüm yerel Vision'du**, hiç açmamak değil.

**Yerel Vision'ın YETMEDİĞİ yer (dürüst sınır):** yorum/anlam gerektiren işler. ARS-01'de düz metin okuma yeterliydi çünkü hedef adres çubuğundaki URL'ydi.

---

## Kural 3 · İlgili şeridi kırp — tüm görseli OCR'lama

> **Aradığın bilgi görselin belirli bir bölgesindeyse yalnız o bölgeyi OCR'la.**

Tarayıcı adres çubuğu görselin **üst şeridinde**. Tam 2940×1912 kare yerine üst %15:

| Kapsam | Hız |
|---|---:|
| Tam görsel, doğru mod | ~0,08 gör/sn |
| **Üst %15 şerit** | **~10 gör/sn** |

**~90× kazanç**, hiçbir bilgi kaybı yok.

```python
img = Quartz.CGImageCreateWithImageInRect(
    img, Quartz.CGRectMake(0, 0, w, int(h * 0.15)))   # CGImage: (0,0) SOL-ÜST
```

Gövde bilgisi gerekiyorsa (ARS-01'de mahalle denemesi) tam sayfa ayrı bir örneklem turunda okunur — **tüm evrende değil**.

---

## Kural 4 · Belleğe oku, bellekten OCR'la — page-cache ön-ısıtma ise YARAMAZ

> **Az RAM'li makinede dosyayı page-cache'e "ön-ısıtmak" ters teper. Baytı belleğe al, bellekten OCR'la.**

Sezgisel çözüm: bir iş parçacığı havuzu dosyaları önden okuyup page-cache'i ısıtsın, ana döngü OCR'lasın. **8 GB RAM'de bu çöktü** — ön-okunan dosyalar OCR sırası gelmeden bellekten düşüyor, disk **ikinci kez** okunuyor.

| Mimari | Hız |
|---|---:|
| Şerit + page-cache ön-ısıtma (16 işçi) | 🔴 **0,25 gör/sn** |
| **Şerit + belleğe oku + bellekten OCR** (8-12 okuyucu, sınırlı kuyruk) | 🟢 **11,3 gör/sn** |

**45× fark.** Doğru mimari: okuyucu iş parçacıkları baytı **sınırlı bir kuyruğa** koyar (bellek tavanı), ana döngü kuyruktan alıp `CGImageSourceCreateWithData` ile bellekten OCR'lar. Disk **bir kez** okunur.

```python
d = NSData.dataWithBytes_length_(veri, len(veri))
src = Quartz.CGImageSourceCreateWithData(d, None)
```

Kuyruk **sınırlı** olmalı — sınırsız kuyruk tüm dosyayı belleğe çeker ve süreç öldürülür (Kural 5).

---

## Kural 5 · Canlılık = çıktının SON YAZIM ZAMANI, `ps` eşleşmesi değil

> **Uzun arka plan işinin yaşadığı, `ps` çıktısında ad görmekle değil, çıktı dosyasının `mtime`'ıyla doğrulanır.**

**ARS-01 vakası:** tur 22.500/26.068'de **sessizce öldü** — `BITTI` satırı yok, hata yok, disk bağlıydı, uyku kaydı yok. En olası sebep: 8 GB RAM'de 12 okuyucu + 24'lük kuyruk tutarken sistem tarafından sonlandırılma.

| | |
|---|---|
| Fark edilme gecikmesi | **~4 sa 20 dk** (son yazım 15:51, tespit 20:13) |
| Yanlış güven kaynağı | `ps aux \| grep tara.py` eşleşme veriyordu — **o eşleşme kendi bekleme döngümdü** |
| Doğru kontrol | `stat` ile çıktının son yazım zamanı + `pgrep -f` ile gerçek süreç |

```bash
# YANLIŞ: kendi grep/bekleme döngün de eşleşir
ps aux | grep "[t]ara.py"

# DOĞRU: gerçek süreç + çıktının ilerlediği
pgrep -f "arsiv_disk/tara.py"
stat -f "%Sm" ~/arsiv_disk/cikti.jsonl    # ilerliyor mu?
```

**Zorunlu eşlik: idempotent devam-desteği.** Betik başlarken çıktıyı okuyup işlenmişleri atlamalı. ARS-01'de bu vardı → **veri kaybı 0, yinelenen iş 0**. Olmasaydı 22.500 kayıt yeniden okunacaktı (~40 dk + 47 GB disk).

Ek: flush sıklığı kayıp penceresini belirler. ARS-01'de 500→200'e düşürüldü.

---

## Kural 6 · "Permission denied" ≠ FDA — önce diskin VARLIĞINI doğrula

> **Harici diske yazma hatası alınca Standing #38 (FDA) teşhisi koymadan önce diskin fiziksel varlığı doğrulanır.**

**ARS-01 vakası:** `mkdir: /Volumes/TT-HAFIZA: Permission denied` alındı ve FDA sorunu sanıldı. Gerçekte disk **mount değildi** — fiziksel olarak çıkarılmıştı. exFAT'te mount yokluğu "Permission denied" olarak da görünebiliyor.

```bash
diskutil list external     # boş → disk fiziksel olarak YOK
[ -d /Volumes/<AD> ]       # yok → mount değil
touch /Volumes/<AD>/.test  # düşerse → ŞİMDİ FDA'yı düşün (Standing #38)
```

Ek tuzak: `diskutil list` MBR **bölüm-tipi baytını** gösterir (`Windows_NTFS` = `0x07`), biçimlenmiş dosya sistemini değil. Gerçek sistemi `mount` veya `diskutil info` söyler — ARS-01 diski **exFAT**'ti.

---

## Kural 7 · Diskte rename YOK — yalnız öneri

> **Git dışındaki hiçbir yerde toplu yeniden adlandırma yapılmaz.** Sadece öneri JSON'u üretilir.

Git'te `git mv` geri alınabilir, kırık referans commit öncesi yakalanabilir. Diskte bu güvenlik **yoktur**. Patron kuralı.

Öneri üretirken **kanıt yoksa öneri üretilmez** — yanlış öneri üretmek boş bırakmaktan kötüdür. ARS-01'de 16.049 SINIF A dosyasının **3.201'i** için kaynak kanıtı bulunamadı ve öneri hiç üretilmedi.

Okunamayan her alan `BELIRSIZ`. **UYDURMA YOK.**

---

## Kural 8 · Tekilleştirme tercihi OKUMA HIZINA göre

> **Aynı dosya birden çok yerde varsa, temsilci en HIZLI okunan kopyadır.**

Sezgi "Mac-local hızlıdır" der. ARS-01'de tersi çıktı:

| Konum | Soğuk okuma |
|---|---:|
| `~/Desktop` | **0,20 MB/s** |
| `/Volumes/TT-HAFIZA` (tek okuyucu) | 3,4 MB/s |
| `/Volumes/TT-HAFIZA` (16 okuyucu) | **24,4 MB/s** |

**122× fark.** Sebep: Mac önyükleme diskinde 26 GiB kalmıştı ve iCloud Masaüstü senkronu kota hatasıyla takılıydı (`brctl status` → `CKErrorDomain:25`, dosyalar `needs-upload` / `<file-pending>`). Tercih **harici diske** çevrildi.

Ders: tekilleştirme temsilcisi seçilmeden önce her kökün debisi **ölçülür**, varsayılmaz.

---

## Kural 9 · Ekran görüntüsü ilan/kayıt düzeyi veri için YANLIŞ TAŞIYICI

> **Sayfada HTML'de olan ama ekranda görünmeyen alan, ekran görüntüsünden çıkarılamaz.**

**ARS-01 vakası:** 28.055 sahibinden ekranının %99,98'i **liste sayfası**.

| | il/ilçe | ilan no | mahalle |
|---|---|---|---|
| Liste URL'i | 🟢 %99,0 / %89,3 | 🔴 yok | 🔴 yok |
| Detay URL'i | 🔴 yok | 🟢 çıkıyor | 🔴 yok |

İki biçim birbirini **tamamlamıyor** — ilan no + konum aynı kayıtta hiç elde edilemedi. Mahalle sayfa gövdesinde geçiyor ama tokenlar bozuk (`ecentene`, `venicehir`) ve kırpık (`Yeşilyurt Mh` → `yurt`).

Ayrıca gövde örnekleminin **%10,8'i "sayfaya ulaşılamadı" hata sayfası** — dosya olarak arşivde duruyor ve sayıma giriyor, **hasat başarısını olduğundan yüksek gösteriyor**.

**Kural:** kayıt-düzeyi (ilan no, parsel, mahalle) veri hedefleniyorsa **sayfa kaynağı** alınır, ekran görüntüsü alınmaz. Ekran görüntüsü ancak **görsel kanıt** veya **toplu düzey** (il/ilçe) kapsam ölçümü için taşıyıcıdır.

---

## Kural 10 · TR slug: TR-map ÖNCE, sonra NFKD

> **Türkçe metinden slug üretirken naive `.lower()` YASAK.**

`İ` → `.lower()` → `i̇` (i + birleşen nokta) → NFKD+ascii → `i` **veya boş**, platforma göre değişir. Doğru sıra: TR karakter eşlemesi **önce**, ardından NFKD + ascii.

```python
TRMAP = {"ı":"i","İ":"i","I":"i","ş":"s","Ş":"s","ğ":"g","Ğ":"g",
         "ü":"u","Ü":"u","ö":"o","Ö":"o","ç":"c","Ç":"c"}
s = "".join(TRMAP.get(ch, ch) for ch in s)
s = unicodedata.normalize("NFKD", s).encode("ascii","ignore").decode().lower()
```

Emsal: CC-Borsa `ad_norm` vakası (251/611 kayıt düzeldi).

---

## Özet — tarama betiği denetim listesi

- [ ] `._` AppleDouble ayıklandı mı? (Kural 1)
- [ ] Yerel Vision denendi mi, LLM-vision'a gerekçe var mı? (Kural 2)
- [ ] Yalnız gerekli şerit OCR'lanıyor mu? (Kural 3)
- [ ] Bellekten OCR + **sınırlı** kuyruk? (Kural 4)
- [ ] İdempotent devam-desteği var mı? Canlılık `mtime` ile mi izleniyor? (Kural 5)
- [ ] Disk hatası alınırsa varlık → mount → FDA sırası izleniyor mu? (Kural 6)
- [ ] Diskte rename YOK, kanıtsız öneri YOK, `BELIRSIZ` yazılıyor mu? (Kural 7)
- [ ] Tekilleştirme temsilcisi ölçülmüş debiye göre mi seçildi? (Kural 8)
- [ ] Hedef kayıt-düzeyi veri mi? O zaman ekran görüntüsü **yanlış taşıyıcı** (Kural 9)
- [ ] TR slug'da TR-map önce mi? (Kural 10)

---

*TT-ARŞİV · kanon v1 · $0 · AI çağrısı YOK · SİLME-YOK*
