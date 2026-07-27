# Beykoz Vaka Raporu — CC-TT-AI

**Üretici:** CC-TT-AI · **Sprint:** TTA93–TTA95 · **Tarih:** 2026-07-25 · **Maliyet:** $0
**Disiplin:** A04 (AI-algı ≠ ölçüm) · #18 (üçlü-anahtar) · #21-B (her sayının kaynağı etiketli) · V37 (evren salt-okuma) · SİLME-YOK

> **Okuma anahtarı — iki kova:**
> **[ALGI]** = niteliksel AI-algısı (ölçülemez, TT-AI katkısı) · **[HİPOTEZ]** = ölçülebilir iddia (başka CC doğrular) · **[VERİ]** = ölçülmüş/sayılmış değer.
> **Kaynak-tipi (#21-B):** `evren` = mahalle_evren.jsonl (TT-AI kanon, salt-okuma) · `ibb-imar` = ibb_imar_mahalle.jsonl · `landgold-POI` = ⚠️ ayrı proje (Tradia-DIŞI), salt-okundu.

---

## 1. ÖZET SAYAÇLAR  *(kaynak: evren, #21-B)*

| Metrik | Değer | Kova | Kaynak (#21-B) |
|---|---:|---|---|
| Beykoz mahalle (toplam) | **45** | [VERİ] | evren |
| CONFIRMED (TAMAM+YAPISAL_TAMAM) | **18** | [VERİ] | evren durum_damga |
| — TAMAM | 8 | [VERİ] | evren |
| — YAPISAL_TAMAM | 10 | [VERİ] | evren |
| KISMI_THIN (1-eksen) | 22 | [VERİ] | evren |
| ham (0–zayıf) | 5 | [VERİ] | evren |
| **Bina-KAPSAMA bayrağı** (ckan_yapi_ibb) | **44/45** | [VERİ] | evren eksen-sayımı |
| imar ekseni | 7/45 | [VERİ] | evren |
| haber ekseni | 11/45 | [VERİ] | evren |
| ihale ekseni | 1/45 (İshaklı) | [VERİ] | evren |

> **★ KRİTİK DÜRÜST-AYRIM:** "44/45'te bina-verisi var" = **KAPSAMA var** demek, **her binanın kaydı elimizde** demek DEĞİL. Evren yalnız *bayrak* tutar; ham bina sayısı/kat/yaş **evrende YOK** — İBB CKAN bina-analiz kaynak-setinde (yerelde saklanmadı, yeniden-çekilebilir). Bkz. §5.

---

## 2. G1 — 45 MAHALLE BİNA/VERİ KATMANI TABLOSU  *(kaynak: evren)*

### CONFIRMED (18) — 2+ bağımsız eksen

| Mahalle | mahalle_id | Damga | Eksenler |
|---|---|---|---|
| Göksu | istanbul/beykoz/goksu | TAMAM | betimsel+bina+imar |
| Gümüşsuyu | istanbul/beykoz/gumussuyu | TAMAM | betimsel+bina+haber |
| Mahmutşevketpaşa | istanbul/beykoz/mahmutsevketpasa | TAMAM | betimsel+bina+haber |
| Ortaçeşme | istanbul/beykoz/ortacesme | TAMAM | betimsel+bina+imar |
| Paşabahçe | istanbul/beykoz/pasabahce | TAMAM | betimsel+bina+haber |
| Polonezköy | istanbul/beykoz/polonezkoy | TAMAM | betimsel+bina+haber |
| Soğuksu | istanbul/beykoz/soguksu | TAMAM | betimsel+bina+haber |
| Çubuklu | istanbul/beykoz/cubuklu | TAMAM | betimsel+bina+imar |
| Akbaba | istanbul/beykoz/akbaba | YAPISAL_TAMAM | bina+imar |
| Alibahadır | istanbul/beykoz/alibahadir | YAPISAL_TAMAM | bina+imar |
| Anadolu Hisarı | istanbul/beykoz/anadolu_hisari | YAPISAL_TAMAM | betimsel+bina+haber |
| Anadolu Kavağı | istanbul/beykoz/anadolu_kavagi | YAPISAL_TAMAM | bina+haber |
| Baklacı | istanbul/beykoz/baklaci | YAPISAL_TAMAM | bina+imar |
| Kanlıca | istanbul/beykoz/kanlica | YAPISAL_TAMAM | bina+imar |
| Kılıçlı | istanbul/beykoz/kilicli | YAPISAL_TAMAM | bina+haber |
| Tokatköy | istanbul/beykoz/tokatkoy | YAPISAL_TAMAM | bina+haber |
| Çiğdem | istanbul/beykoz/cigdem | YAPISAL_TAMAM | betimsel+bina+haber |
| İshaklı | istanbul/beykoz/ishakli | YAPISAL_TAMAM | bina+haber+**ihale** |

### KISMI_THIN (22) — yalnız 1 bağımsız eksen (gelecek-yakıt)

Anadolufeneri, Bozhane, Cumhuriyet, Dereseki, Elmalı, Fatih, Göllü, Görele, **Kavacık**, Paşamandıra, **Riva**, Rüzgarlıbahçe, Yalıköy, Yavuz Selim, Yeni Mahalle, Zerzavatçı, Çamlıbahçe, Çiftlik, Örnekköy, Öğümce, İncirköy, **Poyrazköy**
*(hepsinde bina-bayrağı var; 2. bağımsız eksen yok → CONFIRMED değil)*

### ham (5) — veri-zayıf

Acarlar (Acarkent!), Beykoz Merkez *(0 eksen — bina-bayrağı bile yok)*, Göztepe, Kaynarca, Çengeldere

> **İki ironi:** (1) **Acarkent (Acarlar)** — lüks kapalı-site — bizde `ham`. (2) **Beykoz Merkez** 45 mahalle içinde tek **0-eksen** (bina-bayrağı dahi yok).

---

## 3. G2 — KAVACIK DERİN + POI  *(kaynak: evren + landgold-POI ⚠️)*

| Bulgu | Değer | Kova | Kaynak (#21-B) |
|---|---:|---|---|
| Kavacık evren damgası | **KISMI_THIN** | [VERİ] | evren |
| Kavacık eksenleri | betimsel+bina (2.eksen YOK) | [VERİ] | evren |
| POI ham-set toplam | **139.989** | [VERİ] | landgold-POI ⚠️ (33MB, hepsi lat/lng) |
| Beykoz açık-etiketli POI (addr:district) | **29** | [VERİ-TABAN] | landgold-POI (floor; çoğu POI tag'siz) |
| Kavacık açık-etiketli POI (addr:neighbourhood) | **2–3** | [VERİ] | landgold-POI (çok-seyrek) |
| Kavacık kaba-bbox POI (41.075–41.105 / 29.065–29.10) | **136** | **[HİPOTEZ]** | landgold-POI bbox (kontamine) |

**Beykoz açık-etiket POI kategori** (29 taban): restaurant 9 · cafe 6 · supermarket 5 · fuel 3 · bank 2 · diğer 4.
**Kavacık bbox kategori** (136, kontamine): restaurant 31 · cafe 14 · bank 14 · market 13 · fast-food 13.

> **★ VERDICT (A04):** "Kavacık göz-bebeği" iddiası şu an **[ALGI]** — POI verisiyle GÜVENİLİR bağlanamıyor: açık-etiket 2–3 (yetersiz), kaba-bbox 136 (komşu-mahalle sızıntısı). Temiz Kavacık iş-yeri envanteri **nokta→mahalle-poligon join** gerektirir; evren poligon **%0** (geometri-duvarı, TTA85). Sunumda **"Kavacık'ta X işyeri"** cümlesi kurulamaz.
> **İzolasyon notu:** POI seti **landgold-agents = ayrı proje (Tradia-DIŞI)**; yalnız salt-ölçüm için okundu, evrene alınmadı, symlink/bağımlılık kurulmadı.

---

## 4. G3 — KÖPRÜ EKSENİ (TUR-2 başlangıcı, hepsi [HİPOTEZ])  *(MAP25 doğrulayacak)*

| Mahalle | Hipotez | Güven | Doğrulayıcı | Diff durumu |
|---|---|---|---|---|
| **Riva** | 3.köprü(YSS)+Kuzey-Marmara otoyolu → yapılaşma/site ivmesi, ikinci-konut | ORTA | MAP25+Basın | TUR-2 baseline, ölçüm-bekliyor |
| **Poyrazköy** | Köprü-erişim arttı ama askeri-kıyı+kısıt → DÜŞÜK-artış | DÜŞÜK-ORTA | MAP25+İmar | TUR-2 baseline |
| **Anadolu Feneri** | Kuzey-uç, köprüden uzak+havza/orman → DURGUN, köprü-etkisi zayıf | ORTA | MAP25+İmar | TUR-2 baseline |

> Bunlar **ölçüm değil hipotez** — TT-MAP (MAP25 Sentinel yapılaşma-değişim) doğrulayınca G4-kalıbı (`bolge_ogrenme_turu`: SABİT/DEĞİŞTİ/ÇELİŞTİ) işletilecek.

---

## 5. CEVAPLAYAMADIKLARIM (dürüstlük sınırı — AI UYDURABİLİR, GÜVENME)

> Bu bölüm **ayrı başlık** olarak duruyor: bir finansçıya sunulurken bunların **hiçbiri sayı olarak verilemez.**

| Soru | Neden veremem | Kim ölçer |
|---|---|---|
| Beykoz'da / bir mahallede **kaç bina** var, kat/yaş dağılımı | Evren yalnız kapsama-BAYRAĞI tutar; ham-rakam yerelde YOK | İBB CKAN bina-analiz seti (re-fetch) |
| **Kavacık'ta kaç ofis/plaza/işyeri** | Açık-etiket 2–3 (yetersiz), bbox 136 (kontamine); poligon yok | Nokta→poligon join (OSM admin_level=8) |
| Bir sokakta **kaç yeni bina / ruhsat** | AI sayı-uydurur; ruhsat-verisi yok | İmar/ruhsat seti + MAP25 |
| Güncel **m²-fiyat / kira / yalı satış-fiyatı** | Piyasa-verisi yok; AI eski/uydurma verir | Emlak-veri sağlayıcı |
| Mahalle-başı **güncel nüfus/hane** | TÜİK gerekir; AI tahmin-eder | TÜİK |
| Su-havzası/imar **sınır koordinatı** (parsel) | Kadastro gerekir | TKGM/İBB imar-poligon |
| Riva/kuzey **köprü-etkisi gerçekleşti mi** | Şu an sadece [HİPOTEZ] | MAP25 (Sentinel) |

---

## 6. EKSİK İBB SETLERİ + EN HIZLI DOLDURMA (G4)  *(hepsi $0)*

| Öncelik | Çekilmeyen set | Ne kazandırır | Yol |
|---|---|---|---|
| **1** | İBB bina-analiz HAM (kat/yaş/kullanım, mahalle-kırılımlı) | 44/45 bayrağı → GERÇEK-RAKAM | İBB CKAN 'bina' CSV, latin5-decode, tta78 merge-deseni |
| **2** | Mahalle-poligonu (nokta→mahalle join) | 139.989 POI'yi Kavacık'a atar; geometri-duvarını kırar | OSM admin_level=8 (ODbL, İstanbul %99 — TTA85) |
| 3 | Yapı-ruhsatı/iskân (varsa) | 'yeni-bina' hipotezini ölçer | İBB CKAN taraması |
| 4 | Ulaşım/yol katmanı | köprü-hipotezini destekler | İBB CKAN (MAP25 ile çift-kaynak temkini) |

> **İzolasyon-güvenli yol:** landgold POI'yi Tradia-tarafına **kopyalamadan**, poligon-join'i landgold-tarafında koşup yalnız **mahalle-agregat sonucunu** köprüyle al (K24a-deseni).

---

## SONUÇ

```
Beykoz: 45 mahalle · CONFIRMED 18 · bina-KAPSAMA 44/45 (RAKAM değil, BAYRAK) · imar 7 · ihale 1
Kavacık ironisi: 'göz bebeği' AMA evrende KISMI_THIN; POI 139.989 gerçek (landgold, Tradia-DIŞI) ama Kavacık-atama YETERSİZ (poligon %0)
Köprü-ekseni: Riva/Poyrazköy/A.Feneri [HİPOTEZ] → MAP25 doğrulayacak
En-değerli eksik (ikisi de $0): İBB bina-analiz HAM-rakamı + mahalle-poligonu
A04 korundu: her sayı kaynak-etiketli; kapsama≠rakam; algı≠ölçüm; hipotez≠veri
```
