# BEYKOZ — NET=0 DEFEKT DÜZELTMESİ + TAM PİKSEL HARİTASI · CC-TT-MAP

**Üreten:** CC-TT-MAP · **Tarih:** 2026-07-26 · **Sprint:** MAP27 · **Tetik:** Signals defekt-raporu (45 satırın 31'i net=0 = flatten-artefaktı)
**Kaynak (#21-B):** değişim `ttmap_degisim.jsonl` (+MAP27-overlay) · ham-yıllık `ttmap_nokta.jsonl` · flatten `ttmap_nokta_duz.jsonl` · piksel `Sentinel-2 L2A (MPC 2016↔2025)`

## G1 — SAHTE net=0 SATIR TEMİZLİĞİ (defekt DOĞRULANDI + DÜZELTİLDİ)

**Defekt:** WC-flatten edilen kırsal mahallede yapılaşma TÜM yıllara WC-statik-değer yazılıyor → ilk=son → net=0. Bu ÖLÇÜM-DEĞİL, düzleştirme-artefaktı. Örnek: ishakli ham-NDBI 2016=17.5 / 2025=20.6 (değişiyor) ama flatten sonrası ilk=son=2.6 (WC) → net=0.

**Kapsam (ulusal, sadece Beykoz değil):**

| | Sayı | Kaynak |
|---|---|---|
| Beykoz net=0 satır | 31/45 (28⬜+3🟡) | ttmap_degisim.jsonl |
| **Ulusal net=0 flatten-artefaktı** | **2012** | İst277/İzm800/Ank703/Kon232 |
| Ulusal net=0 flatten-DEĞİL (şüpheli) | 14 | gözden-geçir işaretlendi |

**Düzeltme (SİLME-YOK, overlay):** `ttmap_degisim.jsonl`'e `netfark_gecerli` alanı eklendi (orijinal değer korundu; yedek `ttmap_degisim_precorrection_MAP27.jsonl`). 2012 artefakt→`False`, 14 şüpheli→`gozden_gecir`, 1744 gerçek→`True`.

**★ ZİNCİRLEME DÜZELTME — MAP23 kapsam-iddiası ŞİŞİRİLMİŞTİ:**

| Metrik | Eski (MAP23) | GERÇEK (MAP27) |
|---|---|---|
| Değişim-kapsamı (3660) | %99 (3623) | **%47 (1708)** |
| Flatten-artefakt (⬜, N/A) | (sayılmıştı) | 1938 |

MAP23'te net=0 flatten-satırları 'ölçülen' saymıştım — Signals bunu yakaladı, ben kaçırmıştım. Gerçek anlamlı-değişim ölçülen: **1708/3660 = %47** (kentsel/yarı-kentsel ağırlıklı). Kırsal-N/A'da değişim tanım-gereği-ölçülemez.

## G2 — TAM 45-MAHALLE PİKSEL HARİTASI (2016↔2025 Sentinel)

> Yöntem: piksel 2016-NDBI<0 → 2025-NDBI>0 = yeni-yapı-adayı. ⚠️ **FENOLOJİ-UYARISI (G3'te doğrulandı):** ham piksel-flip ÜST-SINIR; büyük-kısmı mevsim-farkı-gürültüsü olabilir (Ortaçeşme flip-piksel ort-NDVI 0.30 = hâlâ-bitkili). Aşağıdaki % = flip-üst-sınır, gerçek-yapı bunun küçük-bir-kısmı.

| Mahalle | Yeni-flip% (üst-sınır) | Yeşil-kayıp% | Konum | Etiket | net=0 düzeltmesi |
|---|---|---|---|---|---|
| merkez | 18.6 | 19.2 | guney-dogu | ⬜ | FLATTEN-net0→N/A |
| ortacesme | 17.1 | 13.0 | guney-dogu | 🟢 | gerçek-ölçüm |
| riva | 16.2 | 8.7 | guney-dogu | ⬜ | FLATTEN-net0→N/A |
| pasabahce | 13.5 | 14.6 | kuzey-bati | 🟢 | gerçek-ölçüm |
| alibahadir | 13.2 | 4.7 | kuzey-dogu | ⬜ | FLATTEN-net0→N/A |
| cubuklu | 12.5 | 9.5 | guney-dogu | 🟢 | gerçek-ölçüm |
| cengeldere | 11.7 | 5.4 | guney-dogu | ⬜ | FLATTEN-net0→N/A |
| ornekkoy | 11.0 | 2.6 | kuzey-dogu | ⬜ | FLATTEN-net0→N/A |
| cigdem | 10.8 | 13.6 | guney-dogu | 🟢 | gerçek-ölçüm |
| cavusbasi_ciftlik | 10.7 | 5.8 | kuzey-dogu | ⬜ | FLATTEN-net0→N/A |
| yalikoy | 10.5 | 10.1 | guney-dogu | 🟢 | gerçek-ölçüm |
| gumussuyu | 10.3 | 5.1 | kuzey-bati | 🟡 | gerçek-ölçüm |
| soguksu | 10.3 | 9.0 | kuzey-bati | 🟢 | gerçek-ölçüm |
| incirkoy | 9.3 | 8.2 | guney-bati | 🟢 | gerçek-ölçüm |
| camlibahce | 9.0 | 13.5 | guney-dogu | 🟢 | gerçek-ölçüm |
| goksu | 8.4 | 5.4 | kuzey-dogu | 🟡 | gerçek-ölçüm |
| yeni | 8.0 | 7.5 | guney-bati | 🟡 | gerçek-ölçüm |
| kavacik | 7.7 | 14.5 | guney-dogu | 🟢 | gerçek-ölçüm |
| pasamandira | 7.5 | 5.7 | kuzey-dogu | ⬜ | FLATTEN-net0→N/A |
| kanlica | 7.3 | 3.5 | kuzey-bati | 🟡 | FLATTEN-net0→N/A |
| ishakli | 7.2 | 5.0 | kuzey-bati | ⬜ | FLATTEN-net0→N/A |
| ogumce | 7.1 | 12.9 | kuzey-dogu | ⬜ | FLATTEN-net0→N/A |
| elmali | 7.0 | 2.5 | kuzey-dogu | ⬜ | FLATTEN-net0→N/A |
| zerzavatci | 7.0 | 2.6 | guney-bati | ⬜ | FLATTEN-net0→N/A |
| gorele | 6.6 | 3.2 | guney-dogu | ⬜ | FLATTEN-net0→N/A |
| baklaci | 6.6 | 3.3 | guney-dogu | ⬜ | FLATTEN-net0→N/A |
| yavuz_selim | 6.6 | 1.8 | kuzey-bati | ⬜ | FLATTEN-net0→N/A |
| cumhuriyetkoy | 6.4 | 2.7 | kuzey-dogu | ⬜ | FLATTEN-net0→N/A |
| goztepe | 6.4 | 5.4 | kuzey-bati | 🟡 | gerçek-ölçüm |
| ruzgarlibahce | 6.0 | 4.9 | kuzey-bati | 🟡 | FLATTEN-net0→N/A |
| mahmutsevketpasa | 5.8 | 6.7 | kuzey-dogu | ⬜ | FLATTEN-net0→N/A |
| anadolufeneri | 5.8 | 1.5 | kuzey-bati | ⬜ | FLATTEN-net0→N/A |
| poyrazkoy | 5.7 | 2.1 | kuzey-dogu | ⬜ | FLATTEN-net0→N/A |
| tokatkoy | 5.7 | 7.3 | guney-bati | ⬜ | FLATTEN-net0→N/A |
| anadolu_hisari | 5.7 | 4.1 | kuzey-bati | 🟡 | FLATTEN-net0→N/A |
| akbaba | 5.5 | 1.9 | guney-dogu | ⬜ | FLATTEN-net0→N/A |
| bozhane | 4.9 | 9.2 | kuzey-dogu | ⬜ | FLATTEN-net0→N/A |
| gollu | 4.8 | 1.9 | guney-bati | ⬜ | FLATTEN-net0→N/A |
| dereseki | 3.6 | 1.9 | guney-bati | ⬜ | FLATTEN-net0→N/A |
| acarlar | 3.6 | 3.1 | kuzey-dogu | 🟡 | gerçek-ölçüm |
| kaynarca | 3.5 | 4.4 | kuzey-dogu | ⬜ | FLATTEN-net0→N/A |
| fatih | 3.5 | 2.3 | kuzey-dogu | ⬜ | FLATTEN-net0→N/A |
| kilicli | 3.4 | 2.6 | kuzey-bati | ⬜ | FLATTEN-net0→N/A |
| anadolu_kavagi | 2.5 | 1.8 | kuzey-bati | ⬜ | FLATTEN-net0→N/A |
| polonezkoy | 1.6 | 0.6 | kuzey-dogu | ⬜ | FLATTEN-net0→N/A |

**★ Bulgu:** `merkez` piksel-flip %18.6 (en-yüksek) ama etiketi ⬜ ve net=0'dı → **flatten'ın gizlediği gerçek-değişim** (merkez'in %15.6 yapılı-çekirdeği yoğunlaşmış). Flatten bu sinyali sıfırlamıştı. (Yine de fenoloji-payı var.)

## G3 — DEĞİŞİMİN "NE"Sİ (spektral-tip)

Yeni-flip piksellerinin 2025 spektral-imzası (NDVI + parlaklık):

| Mahalle | sealed-yapılı | hafriyat/çıplak | belirsiz | flip-ort-NDVI |
|---|---|---|---|---|
| ortaçeşme | ~%5 | ~%9 | ~%86 | **0.30 (bitkili!)** |
| merkez | ~%6 | ~%16 | ~%78 | 0.17 |

**İki katmanlı dürüst-sonuç:**
1. **Bina-TÜRÜ (konut/AVM/yol) AYRILAMIYOR** — 10m spektral bunu vermez; şekil/boyut/geometri gerek. → 'yapılaşma arttı ama türü belirsiz'.
2. **Daha derini:** flip-piksellerin ÇOĞU spektral-olarak yapı-değil (Ortaçeşme ort-NDVI 0.30 = bitki) → **fenoloji-flip'i**. Ayrılabilen tek şey: yeşil→çıplak/şantiye (hafriyat, %9-16) vs kalıcı-sealed (%5-6). Gerisi (%78-86) doğrulanamaz. Piksel-yöntemi de tek-sahne-NDBI zaafını taşıyor.

## G4 — CEVAPLAYAMADIKLARIM

- **Flip-pikselin gerçekten-bina-mı fenoloji-mi** kesin-ayrımı — çok-sahne-medyan/mevsim-eşli-sahne gerek; tek-sahne çifti yetmiyor (bu turda yapmadım).
- **Bina türü** konut/AVM/yol/depo — spektral-imkânsız (geometri/yükseklik gerek).
- **14 'gözden-geçir' net=0** gerçek-static mı başka-artefakt mı — ayrı-inceleme gerek.
- **Ulusal 2012 artefaktın il-bazlı düzeltilmiş cephe-listeleri** — overlay-flag kondu ama cephe-tabloları yeniden-üretilmedi (Patron-onayı sonrası ayrı-tur).
- **SİT/imar, bina-sayımı, fiyat** — önceki turlardaki sınırlar sürüyor.

## KANON ETKİSİ (özet)
- `ttmap_degisim.jsonl`: 2012 kayıt `netfark_gecerli=False` (overlay, orijinal korundu, yedek var).
- Değişim-kapsamı düzeltmesi: **%99 → %47** (MAP23 iddiası şişirilmişti).
- MAP26'nın Ortaçeşme %17.1 'yeni-yapı' değeri de fenoloji-şişirilmiş (gerçek çok-daha-küçük) — bu raporla düzeltildi.

---
*CC-TT-MAP · $0 · A04 · #21-B · kaynak-karıştırma-yasağı (MPC tek-kaynak; CDSE-canon değerleri değişmedi, sadece geçerlilik-flag'i eklendi) · SİLME-YOK (yedek+overlay) · V16.*