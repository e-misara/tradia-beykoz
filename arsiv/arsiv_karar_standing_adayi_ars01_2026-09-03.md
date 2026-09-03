# STANDING ADAYI · ARS-01 dersleri

**Kimden:** TT-ARŞİV · **Kime:** Vezir (Standing kaydı) → Üst Akıl onayı
**Tarih:** 2026-09-03 · **Kaynak sprint:** ARS-01 (30.504 görsel OCR, $0)
**Kanon karşılığı:** [`kanon/arsiv_tarama_v1.md`](../kanon/arsiv_tarama_v1.md) (10 kural, yazıldı)

> Aşağıdaki 4 aday **kanona zaten girdi**. Standing'e taşınma önerisi, bunların
> TT-ARŞİV'i aşıp **her CC'yi** bağlaması gerektiği içindir. Karar Üst Akıl'ın.

---

## ADAY-A · Yerel OCR önce, LLM-vision son çare

**Kural:** OCR/metin-çıkarma gerektiren iş **önce yerel motorla** (macOS Apple Vision,
`pyobjc-framework-Vision`) denenir. LLM-vision ancak yerel motor işi çözemiyorsa,
**gerekçe yazılarak** kullanılır.

**Ölçüm:** ARS-01'de 30.256 görsel / 57,7 GB OCR'landı → **$0**, AI çağrısı **0**.
Aynı iş LLM-vision ile ~**45,4M token** olurdu.

**Neden Standing:** Bu yalnız arşiv işi değil. Basın (HTML/PDF), İhale (RG taraması),
Kitap (yazma görselleri), Tic (belge) hattı da metin çıkarıyor. Kural CC'ye değil
**işe** bağlı.

**Karşı-ağırlık (dürüst):** yerel Vision düz metin okur, **yorumlamaz**. Anlam/bağlam
gerektiren işte LLM-vision doğru araçtır — bu kural onu yasaklamaz, **sıraya koyar**.

---

## ADAY-B · Sayımdan önce AppleDouble ayıklama zorunlu

**Kural:** Dosya/görsel sayan her tarama, `._` ile başlayan **AppleDouble kaynak-çatal
artıklarını** ayıklamak zorundadır. Ayıklanmadan verilen sayı **rapora giremez**.

**Ölçüm:** ARS-01 ham eşleşme 134.726 → `._` artığı **67.834 (%50,3)** → gerçek 66.892.
**Sayım tam 2× şişikti.**

**Neden Standing:** TT-HAFIZA **exFAT** ve tüm CC'lerin soğuk arşivi orada. Envanter
sayısı veren her CC (Hafıza `dizin_envanteri.json`, KAYNAK-ENVANTER, TAM-TARAMA)
aynı tuzağa açık. **Geçmiş envanter sayıları bu ölçütle yeniden denetlenmeli.**

**Ek tuzak:** `._Ekran Resmi ....png` adı harf kümesi taşıdığı için
"ad bilgilendirici mi" testini geçer ve yanlış sınıfa düşer.

---

## ADAY-C · Uzun arka plan işi: canlılık = çıktının son yazım zamanı

**Kural:** Uzun süren arka plan işinin yaşadığı, `ps` çıktısında ad görmekle **değil**,
**çıktı dosyasının `mtime`'ıyla** doğrulanır. Ve böyle her iş **idempotent devam
desteğiyle** yazılır.

**Ölçüm/vaka:** ARS-01 turu 22.500/26.068'de **sessizce öldü** — `BITTI` yok, hata yok,
disk bağlıydı. **~4 sa 20 dk** fark edilmedi, çünkü `ps aux | grep tara.py` eşleşme
veriyordu — **o eşleşme kendi bekleme döngümdü.** Devam desteği olduğu için
**veri kaybı 0 / yinelenen iş 0**; olmasaydı 22.500 kayıt yeniden okunacaktı
(~40 dk + 47 GB disk).

**Neden Standing:** Standing #38 launchd hattının kardeşi. #38 "iş **başlıyor** mu"yu
çözdü; bu aday "iş **sürüyor** mu"yu çözüyor. TT-AI'nin 5-gece-çöküşü (elle çalıştı ≠
launchd çalışır) de aynı maskeleme ailesinden.

```bash
pgrep -f "<tam yol>"            # ps|grep DEĞİL
stat -f "%Sm" <cikti dosyasi>   # ilerliyor mu
```

---

## ADAY-D · "Permission denied" ≠ FDA — teşhis sırası

**Kural:** Harici diske yazma hatasında Standing #38 (FDA) teşhisi koymadan önce
**diskin fiziksel varlığı** doğrulanır: `diskutil list external` → `[ -d /Volumes/AD ]`
→ `touch` denemesi. FDA **ancak son adım düşerse** gündeme gelir.

**Vaka:** ARS-01'de `mkdir: /Volumes/TT-HAFIZA: Permission denied` alındı ve FDA
sanıldı; gerçekte disk **çıkarılmıştı**. exFAT'te mount yokluğu "Permission denied"
olarak da görünüyor.

**Neden Standing:** Standing #38 doğru ama **fazla çekici** bir teşhis — harici diskle
ilgili her hatayı FDA'ya bağlama eğilimi yaratıyor. Bu aday #38'e **ön-koşul** ekler,
onu zayıflatmaz.

**Ek not:** `diskutil list` MBR **bölüm-tipi baytını** gösterir (`Windows_NTFS` = `0x07`),
biçimlenmiş sistemi değil. Gerçek sistem `mount` / `diskutil info` ile okunur —
ARS-01 diski **exFAT**'ti.

---

## Kanona giren ama Standing önerilmeyen 6 kural

Bunlar TT-ARŞİV işine özgü, Standing'e taşınmasını **önermiyorum**
(`kanon/arsiv_tarama_v1.md` içinde kalır):

| # | Kural | Neden yalnız kanon |
|---|---|---|
| 3 | İlgili şeridi kırp (~90× kazanç) | OCR'a özgü teknik |
| 4 | Bellekten OCR, page-cache ön-ısıtma ters teper (45×) | OCR'a özgü teknik |
| 7 | Diskte rename YOK, kanıtsız öneri YOK | Patron kuralı olarak **zaten bağlayıcı** |
| 8 | Tekilleştirme temsilcisi ölçülmüş debiye göre | tarama-özgü |
| 9 | Ekran görüntüsü kayıt-düzeyi veri için yanlış taşıyıcı | **Standing #37 toplayıcı tablosuna ek not** olabilir |
| 10 | TR slug: TR-map önce | zaten kayıtlı ders (Borsa `ad_norm`) |

---

## Patron aksiyonu gerektiren (kural değil, arıza)

🔴 **Mac önyükleme diskinde 26 GiB kaldı ve iCloud Masaüstü senkronu kota hatasıyla
takılı.** `brctl status` → `CKErrorDomain:25`, dosyalar `needs-upload` / `<file-pending>`.

Ölçülen etki: `~/Desktop` soğuk okuma **0,20 MB/s** ↔ harici disk **24,4 MB/s** = **122×**.
Bu yalnız taramayı yavaşlatmıyor — **Masaüstü'nün yedeklenmesini de durduruyor.**

---

*TT-ARŞİV · $0 · AI çağrısı YOK · karar Üst Akıl'ın*
