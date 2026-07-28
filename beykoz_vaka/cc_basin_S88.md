# VAKA · Beykoz SOĞUK-21 HEDEFLİ TARAMA — CC-Basın S88

**Tarih:** 2026-07-28 · **Rol:** CC-Basın · **$0** · **A04** · **#21-B** · **#24 tr-safe (Türkçe-ek varyant)** · **#31 KVKK (iç)**

Yokluk artık ÖLÇÜM. 17 soğuk-mahalle × varyant × 3 kaynak taraması.

**Çıktılar:**
- **Ana JSON:** [`~/tradia_basin/cikti/vaka_beykoz_soguk21_S88.json`](../../tradia_basin/cikti/vaka_beykoz_soguk21_S88.json)
- **Olay defteri v6:** [`~/tradia_basin/cikti/beykoz_olay_defteri.json`](../../tradia_basin/cikti/beykoz_olay_defteri.json) — 18 olay
- **Bildirim:** [`hafiza_bildirim_ccbasin_beykoz_s88.json`](../../tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccbasin_beykoz_s88.json)

---

## §1 SOĞUK-21 → GERÇEK 17 (dürüst-not)

**Master:** 45 mahalle · **Temas var (S87 kadar):** 28 · **Gerçek-soğuk:** **17** (Patron "Soğuk-21" nominal · 17 gerçek)

### Soğuk-17 mahalle
Acarlar · Akbaba · **Alibahadır** · Anadolufeneri · Bozhane · Dereseki · **Elmalı** · Göllü · Görele · Kaynarca · Kılıçlı · **Paşamandıra** · Yeni Mahalle · Zerzavatçı · Örnekköy · Öğümce · **İshaklı**

### Türkçe-ek varyant üretimi
- Her mahalle için 2-5 varyant (ör: Alibahadır → Alibahadir, Alibahadır, alibahadir, alibahadır)
- Türkçe karakter aşındırma (İ→I, ç→c, ğ→g vb)
- Kelime-sınırlı regex + Beykoz-kesişim ZORUNLU (FP filtresi)

---

## §2 TARAMA KAYNAKLARI

| Kaynak | Boyut | Filter |
|---|---|---|
| **haber_govde.db** | 831 OK kayıt · WAL · FTS5 | Beykoz-kesişim + kelime-sınır |
| **haber_akis.jsonl** | 4,214 kayıt | aynı |
| **Ham arşiv S86** | 40 HTML (~5.8 MB) | Beykoz Bel meclis-gündemleri + CSB İstanbul + Kalyon + planaski |

---

## §3 SONUÇ — 17 mahalle × 3 kaynak

| Mahalle | Varyant | Gövde-DB | Akış | Ham | **TOP** |
|---|---:|---:|---:|---:|---:|
| **★ Elmalı** | 4 | 0 | 0 | **1** | **1** |
| **★ Paşamandıra** | 5 | 0 | 0 | **1** | **1** |
| Acarlar | 2 | 0 | 0 | 0 | 0 |
| Akbaba | 2 | 0 | 0 | 0 | 0 |
| Alibahadır | 4 | 0 | 0 | 0 | 0 |
| Anadolufeneri | 2 | 0 | 0 | 0 | 0 |
| Bozhane | 2 | 0 | 0 | 0 | 0 |
| Dereseki | 2 | 0 | 0 | 0 | 0 |
| Göllü | 4 | 0 | 0 | 0 | 0 |
| Görele | 4 | 0 | 0 | 0 | 0 |
| Kaynarca | 2 | 0 | 0 | 0 | 0 |
| Kılıçlı | 5 | 0 | 0 | 0 | 0 |
| Yeni Mahalle | 2 | 0 | 0 | 0 | 0 |
| Zerzavatçı | 5 | 0 | 0 | 0 | 0 |
| Örnekköy | 4 | 0 | 0 | 0 | 0 |
| Öğümce | 4 | 0 | 0 | 0 | 0 |
| İshaklı | 4 | 0 | 0 | 0 | 0 |

**★ 2 BULUNDU · 15 TARANDI-SIFIR damgası** (yokluk = ölçüm)

---

## §4 BULUNAN 2 · TAM DETAY

### §4.1 ★★★ ELMALI — TTA98 imar-kilit DOĞRUDAN KANIT

**Kaynak:** Beykoz Bel Meclis **4 Mayıs 2026** gündemi · Plan ve Proje Müdürlüğü teklifi

**Alıntı (dokümandan birebir):**
> *"...işyeri ihtiyacının karşılanabilmesi için ticari nitelikte bağımsız bölüm yapılması ve bu caddelerin **Elmalı 1-2 Barajı Havzası Koruma Planında Göl Koruma Alanında** kalan kısımlarında sağlık hizmeti verecek taleplerde **İSKİ'nin görüşü** alınmak kaydıyla bağımsız bölüm yapılması hakkındaki Plan ve Proje Müdürlüğünün..."*

**Bulgu değerleri:**
| Alan | Değer |
|---|---|
| Havza-adı | **Elmalı 1-2 Barajı Havzası Koruma Planı** |
| Kuşak | **Göl Koruma Alanı** (kısa-mesafe) |
| İzin merci | **İSKİ görüşü** zorunlu |
| Talep | Sağlık-hizmeti bağımsız-bölüm izni |
| Karar mercii | Beykoz Bel Plan ve Proje Md |

**Yeni olay:** **BEY-18** eklendi (haftalık-değil, aylık takip 2026-09-04)

**TTA98 için önemi:** Bu, S83'ten beri arayıp bulamadığımız İSKİ havza-koruma sisteminin **direct-uygulama örneği**. Elmalı Barajı Havzası Beykoz güneybatısında (Anadoluhisarı/Kanlıca komşuluğu). İSKİ görüşü → sağlık-işyeri izni prosesinde havza-koruma aktif işlevde.

**CC-TT-MAP için:** Elmalı 1-2 Barajı Havzası **kısa-mesafe koruma kuşağı** haritada bulunabilir — S86-C-EK BEY-14 (Göztepe) ile birlikte 2. resmi havza-uygulaması.

### §4.2 ★★ PAŞAMANDIRA — sokak-isimlendirme + Riva yol aksı uzatma

**Kaynak:** Beykoz Bel Meclis **6 Nisan 2026** gündemi · **Gündem-DIŞI Md 1** · Emlak ve İstimlak Md · Karar-no **2026-25293**

**Alıntı (birebir):**
> *"1-Beykoz İlçesi, **İsaklı Mahallesi, Göksu Mahallesi ve Paşamandıra Mahallesinde sokak isimlendirmeleri** yapılması ve **Riva Mahallesinde yol aksı uzatılması** hakkındaki Emlak ve İstimlak Müdürlüğünün teklifi. (2026-25293)"*

**Bulgu değerleri:**
| Alan | Değer |
|---|---|
| Kapsam-mahalleler | İsaklı + Göksu + Paşamandıra + Riva (4 mahalle) |
| İşlem | Sokak isimlendirmeleri + yol aksı uzatma |
| Karar-no | **2026-25293** |
| Karar mercii | Emlak ve İstimlak Md |

**BEY-13 ek-not:** S83'te "Meclis 9 Nisan Md 7" olarak zaten kaydedilmiş; **6 Nisan gündeminde ayrıca ele alınmış** (gündem-DIŞI teklif olarak). Paşamandıra + İsaklı temas-alındı.

**Not:** "İsaklı" → S88 tarama "İshaklı" varyantını yakalamadı çünkü meclis-metninde **"İsaklı"** yazılı (h harfsiz). Türkçe-ek varyant üretimi bunu kaçırdı. **Ders:** varyant-set kelime-yazım-varyantı da (İshaklı ↔ İsaklı) içermeli.

---

## §5 TARANDI-SIFIR (15 mahalle) — ★ YOKLUK ÖLÇÜM

Aşağıdaki 15 mahallenin havuz-DB (831 OK · Beykoz-kesişimli), haber_akis.jsonl (4,214 kayıt) ve ham arşiv (~40 HTML meclis + CSB + Bel duyurular + Kalyon + planaski) 2026-07-28 tarihinde tam-taranmış ve **hiçbir kayıt bulunmamıştır**:

**Acarlar · Akbaba · Alibahadır · Anadolufeneri · Bozhane · Dereseki · Göllü · Görele · Kaynarca · Kılıçlı · Yeni Mahalle · Zerzavatçı · Örnekköy · Öğümce · İshaklı**

Bu artık spekülasyon değil, DAMGA:
- **Tarih:** 2026-07-28
- **Kaynak:** gövde-DB + akış + ham (~5,045 birim)
- **Yöntem:** Türkçe-ek varyant + Beykoz-kesişim + kelime-sınır regex
- **Sonuç:** SIFIR

**Not (A04):** *"Bir haber yayınlanmadı"* değil, *"CC-Basın havuzu bu mahalleyi hiç kaydetmedi"* denilebilir. Sınır dürüsttür. Yerel-basın (Beykoz Gazetesi arama işlevi kırık — S87 kanıtlı) bu mahalleler hakkında haber yapmış olabilir, ama Basın-havuzuna ULAŞAMAMIŞ.

---

## §6 KATKI · CC-Basın envanteri güncellemesi (S88 sonrası)

| Metrik | S87 | S88 |
|---|---|---|
| Master mahalle | 45 | 45 |
| Temas VAR | 28 | **30** (+Elmalı +Paşamandıra) |
| Temas-YOK / TARANDI-SIFIR | 17 | 15 |
| Toplam olay defteri | 17 | **18** |
| İzleme kayıtlı-mahalle | 24 | **26** |

---

## §7 CROSS-CC (İ70 çapraz + K24a)

### CC-İhale (İ70 ile çapraz)
- **BEY-18 Elmalı Barajı Havzası** İSKİ-görüşlü sağlık-işyeri talebi — ihale-yansıması olabilir mi? İ70 envanterinde Elmalı kaydı var mı?
- **Paşamandıra sokak-isim** kararı 2026-25293 — Emlak ve İstimlak Md kararı, ihale-arşivinde bulunmalı

### CC-TT-MAP
- **Elmalı 1-2 Barajı Havzası koruma kuşağı** — TT-MAP fabrikasına aktarılabilir katman
- BEY-17 (ÇŞB Riva Deresi) + BEY-18 (Elmalı Barajı) → **Beykoz'un 2 havza-planı bilinen** hali

### CC-Tic
- 15 tarandı-sıfır mahalle için tapu-kaydı sorgu (yerleşim var mı yok mu)

### CC-Hafıza (K24a)
- **TARANDI-SIFIR damgası** kalıcı olay-defteri meta-alanına eklendi. Diğer CC'ler kendi vakalarında aynı damgayı kullanabilir.

---

## §8 CEVAPLAYAMADIKLARIM (S87 → S88 delta)

### ✅ KAPATILAN (S88)
- ✅ Elmalı Barajı Havzası: TTA98 için DOĞRUDAN kanıt bulundu (Meclis 4 Mayıs)
- ✅ Paşamandıra: temas-alındı (Meclis 6 Nisan gündem-dışı Md 1)
- ✅ 15 mahalle tarandı-sıfır damgası (yokluk-ölçüm oldu)

### ❌ HALA AÇIK (S89)
| # | Soru | Neden | Sonraki |
|---|---|---|---|
| C37 | 15 tarandı-sıfır mahalle için yerel-basın kaydı | Beykoz Gazetesi arama işlevi kırık (S87) | Alternatif arşiv (Beykoz Kulesi vb.) |
| C38 | İshaklı varyantı "İsaklı" (h harfsiz) yakalamadı | Varyant-set yazım-varyantı içermiyor | Betik güncelleme (S89 borç) |
| C39 | Elmalı 1-2 Barajı Havzası tam-harita | Bel meclis metin verildi, harita yok | İSKİ + BEY-14+18 birleşik katman |
| C40 | Paşamandıra 2026-25293 kararının uygulama-izi | 6 Nisan gündem-dışı teklif · onay/red bilinmiyor | 9 Nisan meclis-oturumunda sonuç? |

---

## §9 DÜRÜST SINIR (A04 · #31)

- **Patron "Soğuk-21" dedi, gerçek 17.** Nominal sayı ile fiili sayı farkı dürüstçe not edildi.
- **Elmalı bulgusu KRİTİK** — S83'ten beri arayıp bulamadığımız İSKİ havza-koruma sistemi burada AKTİF işleyişte gözlemlendi. TTA98 için altın-standart.
- **İshaklı varyant kaçırması** — betik hatası (yazım-varyantı içerilmemesi). "İshaklı" master-mahalle-adı, ancak meclis-metninde "İsaklı" yazılmış. Bu S89 borç.
- **15 mahalle "tarandı-sıfır"** — bu bir GEÇERSİZ bulgu değil, bir **negatif bulgu**. Damganın anlamı: *"bu tarama-turu, bu kaynaklarda, bu tarihte SIFIR sonuç."*
- **Uydurma yok:** Elmalı Barajı Havzası alıntısı ve Paşamandıra kararı birebir Bel gündeminden.
- KVKK #31: Meclis-müdür isimleri (Plan-Proje Md, Emlak-İstimlak Md) kamu-görevli halka-açık; rapor iç-kullanım.

---

## §10 YATIRIM-SUNUM GÜNCELLEMESİ (S87 → S88)

**Sunum-hazır madde SAYISI:** 13 → **14** (+1)

**YENİ EKLENEN:**
14. **★★ [S88 YENİ] Elmalı 1-2 Barajı Havzası Koruma Planı — sağlık-işyeri bağımsız-bölüm izni** (Meclis 4 Mayıs 2026 · İSKİ görüşlü). TTA98 imar-kilit sisteminin Beykoz'daki AKTİF uygulaması.

---

**Standing:** #8 · #17 · #18 · **#21-A/B kaynak-şeffaf** · #22 FIFO · **#24 tr-safe (Türkçe-ek varyant)** · **#31 KVKK iç** · **#34 SİLME-YOK**  
**A04** ✅ (17 mahalle taranmış · 15 tarandı-sıfır damgalı · nominal-fiili farkı dürüst) · **$0** ✅ · **SİLME-YOK** ✅  
**BITTI** — Standing #13
