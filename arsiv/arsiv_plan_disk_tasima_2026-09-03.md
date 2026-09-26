# DİSK TAŞIMA PLANI · ÖNERİ

**Üreten:** TT-ARŞİV · **Tarih:** 2026-09-03 · **Sprint:** ARS-04
**Statü:** 🟡 **ÖNERİ — UYGULAMA YOK.** Hiçbir dosya taşınmadı, silinmedi, adlandırılmadı.
**Girdi:** `gorsel_envanteri_disk.json` (46.305 tekil) · `sinifA_oneri.json` (16.049 SINIF A)
**Kanon:** [`kanon/arsiv_tarama_v1.md`](../kanon/arsiv_tarama_v1.md) Kural 7 — *diskte rename YOK*

> ⚠️ **Bu plan eksik ölçümle yazıldı.** Oturum ortasında Bash yürütmesi bir güvenlik
> kontrolüne takıldı; §6'daki dört ölçüm **yapılamadı**. Aşağıdaki her sayı ARS-01'de
> fiilen ölçülmüştür ve kaynağı yazılıdır; **tahmin edilen tek sayı yoktur.**
> Eksik ölçümler tamamlanmadan **hiçbir taşıma başlatılmamalıdır.**

---

## 1) Neden taşıma gündemde — ölçülmüş sıkışıklık

| Ölçüm | Değer | Kaynak |
|---|---:|---|
| Mac önyükleme diski **boş alan** | **26 GiB** | `df -h /` |
| TT-HAFIZA boş alan | 505 GB | `df -h` |
| `~/Desktop` soğuk okuma | **0,20 MB/s** | ARS-01 ölçümü |
| TT-HAFIZA soğuk okuma (16 okuyucu) | **24,4 MB/s** | ARS-01 ölçümü |
| **Hız farkı** | **122×** | — |

🔴 **Kök sebep bulundu:** iCloud Masaüstü senkronu **kota hatasıyla takılı** —
`brctl status` → `CKErrorDomain:25`, dosyalar `needs-upload` / `<file-pending>`.
Bu yalnız okumayı yavaşlatmıyor, **Masaüstü'nün yedeklenmesini de durduruyor.**

> **★ Planın en önemli cümlesi:** Taşımanın *kendisi* bu arızayı çözmez. Dosyaları
> Masaüstü'nden çıkarmak iCloud kuyruğunu boşaltır ama **kota sorunu yerinde kalır**.
> Sıra: **önce arıza, sonra taşıma.** Aksi halde taşıma sırasında iCloud aynı
> dosyaları silinmiş sayıp senkron durumunu daha da karıştırabilir.

---

## 2) Ne var elimizde — ölçülmüş envanter

| | Adet | Not |
|---|---:|---|
| Ham dosya eşleşmesi | 134.726 | |
| − AppleDouble (`._*`) artığı | −67.834 | %50,3 · ~0,26 GB · **görsel değil** |
| = Gerçek görsel | 66.892 | 123,4 GB brüt |
| − yedek kopyalar | −20.587 | |
| = **Tekil görsel** | **46.305** | |

**Sınıf:** SINIF A 16.049 (adı bilgilendirici) · SINIF B 30.256 (ekran görüntüsü).
SINIF B tekilin hacmi **57,7 GB**.

**Ad önerisi hazır:** 12.848 yüksek + 583 orta güven · **3.201 öneri-YOK**
(kaynak kanıtı yok — kanon Kural 7 gereği boş bırakıldı, uydurulmadı).

---

## 3) Önerilen hedef yapı

```
/Volumes/TT-HAFIZA/
└── 03_GORSEL/                                  ← YENİ kök (tek doğruluk kaynağı)
    ├── sahibinden/<il>/<ilce>/<YYYY-AA>/       ← 28.055 ekran, il %99,0 · ilçe %89,3
    ├── tradia/<vaka>/<tur>/                    ← repo görsel kanonuyla aynı şema
    ├── _karantina/
    │   ├── hata_sayfasi/                       ← "sayfaya ulaşılamadı" ekranları
    │   └── kaynak_belirsiz/                    ← 3.201 öneri-YOK dosya
    └── _MANIFEST/
        ├── envanter.json                       ← her dosyanın eski→yeni yolu
        └── SHA256SUMS.txt                      ← taşıma öncesi + sonrası
```

**Neden `<il>/<ilce>/` :** ARS-01 kanıtladı ki bu arşiv **il/ilçe düzeyinde** bir
kaynak, ilan düzeyinde değil (kanon Kural 9). Mahalle klasörü açmak **yanlış olur** —
mahalle verisi yok, boş dizin ağacı sahte kapsam izlenimi verir.

**Neden `_karantina` :** ARS-01 gövde örnekleminde **%10,8** "sayfaya ulaşılamadı"
hata sayfası çıktı ve bunlar arşivde duruyor, sayıma giriyor, **hasat başarısını
olduğundan yüksek gösteriyor.** Silinmez (SİLME-YOK) ama ana ağaçtan ayrılır.

---

## 4) Önerilen sıra — 6 faz, her biri geri alınabilir

| Faz | İş | Risk | Ön-koşul |
|---:|---|---|---|
| **0** | 🔴 **iCloud kota arızasını çöz** (Patron) | — | — |
| **1** | Manifest üret: her dosyanın eski yolu + SHA256 + önerilen yeni yolu | yok (salt-okuma) | Faz 0 |
| **2** | **KOPYALA** (taşıma değil) TT-HAFIZA `03_GORSEL/`'e | düşük | Faz 1 |
| **3** | SHA256 doğrula — kaynak↔hedef **birebir** | yok | Faz 2 |
| **4** | Yeni ada geçiş **hedefte** (`git` yok, manifest geri-alma anahtarı) | orta | Faz 3 🟢 |
| **5** | Mac'teki kaynak ancak **3/3 doğrulama sonrası** boşaltılır — **Patron onayıyla** | **yüksek** | Faz 4 + onay |

**Kural:** Faz 2 **kopyalar**, taşımaz. Kaynak, doğrulama bitene kadar yerinde kalır.
Mac'te 26 GiB kaldığı için bu kademeli olmak zorunda — bkz. §6 ÖLÇÜM-1.

**Geri alma:** her fazda manifest `yeni_yol → eski_yol` eşlemesi taşır. Faz 4'e kadar
tek komutla dönülür; Faz 5 sonrası **dönülmez** — onay bu yüzden orada.

---

## 5) Kazanç tahmini — ve neyin tahmin OLMADIĞI

| Kalem | Değer | Durum |
|---|---:|---|
| AppleDouble artığı | 67.834 dosya / ~0,26 GB | 🟢 **ölçüldü** |
| Fazla kopya adedi | 20.587 | 🟢 **ölçüldü** |
| SINIF B tekil hacim | 57,7 GB | 🟢 **ölçüldü** |
| Gerçek görsel brüt hacim | 123,4 GB | 🟢 **ölçüldü** |
| **Mac'ten kazanılacak alan** | **?** | 🔴 **ÖLÇÜLMEDİ** — §6 |
| Fazla kopyaların hacmi | **?** | 🔴 **ÖLÇÜLMEDİ** — §6 |

> AppleDouble sayısı büyük (67.834) ama **hacmi küçük** (~0,26 GB) — dosya başına
> ~4 KB. Bunları temizlemek **sayım hijyeni** sağlar, **disk açmaz.** Alan kazancı
> fazla kopyalardan gelir ve o sayı henüz ölçülmedi.

---

## 6) 🔴 UYGULAMADAN ÖNCE ZORUNLU 4 ÖLÇÜM

Bu oturumda yapılamadı (Bash yürütmesi güvenlik kontrolüne takıldı). Hepsi
`gorsel_envanteri_disk.json` üzerinden **salt-okuma** hesaplanır, disk erişimi gerekmez.

**ÖLÇÜM-1 · Mac'te ne kadar tekil görsel var, kaç GB?**
Faz 5'in kazancı bu. Mac 26 GiB'e sıkıştığı için Faz 2 kademesi de buna bağlı.

**ÖLÇÜM-2 · Fazla kopyaların gerçek hacmi**
`Σ (kopya_sayisi − 1) × boyut`. §5'teki tek anlamlı kazanç kalemi.

**ÖLÇÜM-3 · Hedef ağacın doluluk profili**
`<il>/<ilce>/<YYYY-AA>` altında dosya dağılımı. Tek klasöre 5.000+ dosya düşüyorsa
exFAT'te dizin listeleme yavaşlar — şema ona göre bölünür.

**ÖLÇÜM-4 · Hata sayfalarının tam sayısı**
%10,8 **120'lik örneklemden** geldi, evren taraması değil. `_karantina/hata_sayfasi/`
boyutlandırması için 28.055'in tamamında ölçülmeli.

---

## 7) Karşı-görüş — taşımamak da bir seçenek

Dürüstlük gereği: **bu arşivin taşınması zorunlu değil.**

- ARS-01, bu ekranların **kayıt düzeyinde veri vermediğini** kanıtladı (kanon Kural 9).
  Değeri **il/ilçe kapsam ölçümü** ve o ölçüm **zaten yapıldı ve raporlandı**.
- Yani 57,7 GB'lık SINIF B'nin bilgi değeri **çıkarıldı**; ham görseller bundan
  sonra ancak **görsel kanıt** olarak lazım olur.
- Bu doğruysa doğru hamle taşıma değil, **arşivleme**: TT-HAFIZA'da olduğu yerde
  bırakıp Mac kopyalarını boşaltmak, yeniden adlandırmaya hiç girmemek.

**Ayrım sorusu Patron'a:** bu görsellere *bir daha bakılacak mı*, yoksa *ölçümü
alındı, kapandı mı*? Cevap "kapandı" ise Faz 4 (yeniden adlandırma) **hiç
yapılmamalı** — 46.305 dosyayı yeniden adlandırmanın maliyeti, bir daha
açılmayacak arşiv için karşılıksızdır.

---

## 8) Bu planın uygulamadığı şeyler

- ❌ Hiçbir dosya taşınmadı · kopyalanmadı · adlandırılmadı · silinmedi
- ❌ AppleDouble artıkları silinmedi (SİLME-YOK — öneri bile ayrı karar)
- ❌ `sinifA_oneri.json`'daki 12.848 öneri **uygulanmadı**
- ❌ Hedef ağaç (`03_GORSEL/`) **oluşturulmadı**

Uygulama için gereken: §6'daki 4 ölçüm + §7 ayrım sorusuna Patron cevabı + Faz 5 onayı.

---

*TT-ARŞİV · ARS-04 · $0 · AI çağrısı YOK · ÖNERİ — UYGULAMA YOK · SİLME-YOK*
