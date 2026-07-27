# CC-TT-AI — ÖZ-ANALİZ: TAM KAPSAM RAPORU

**Tarih:** 2026-07-13 · **Üretici:** CC-TT-AI · Patron talebi (8-başlık öz-yansıtma) · $0

---

## 1. BAŞLANGIÇ — İlk sayaç, TAMAM/KISMI_THIN nasıl doğdu
Başladığımız yer **tek-katmanlı betimsel** grounding'di: Wikipedia'dan mahalle açıklaması çekip `ai_baglam` (rag_wiki) üretmek. İlk flagship İstanbul ~89 mahalleydi. Sayaç tek boyutluydu: "kaç mahalle betimsel-DOLU". 

Sorun kısa sürede göründü: betimsel-DOLU ≠ **güvenilir**. tt25 gibi auto-classifier "İzmir'de kentsel bir mahalle" diye içi-boş stub'lar üretiyordu — literal-DOLU ama bilgi-yok. Bu, **TAMAM** kavramını doğurdu: yalnız betimsel değil, **yapısal eksen** de gerekli. Sonra ölçüm dürüstlüğü **KISMI_THIN**'i doğurdu (betimsel-thin KANITLI + tek yapısal — bir eksen eksik). En son **YAPISAL_TAMAM(C)** (TTA70): betimsel içerik-yok KANITLIYSA ama ≥2 yapısal eksen DOLUYSA, o mahalle de TAMAM sayılır. Bu, "Wikipedia'sı olmayan ama yapısal-zengin" binlerce mahalleyi kurtaran yoldu.

## 2. ZAMAN-ÇİZELGESİ — pilot-il'den tam-evren fabrikasına
- **TTA57–70 (pilot-il modu):** il-il elle grounding. İzmir çift-CKAN keşfi (yapı-profili + afet-yol iki bağımsız yapısal eksen). İstanbul 2-eksen hasadı. Kocaeli walled-il dürüst-negatifi. YAPISAL_TAMAM(C) kanonu.
- **TTA71 — çifte A04 düzeltmesi:** İzmir 1242 çift-ckan testinde iki ölçüm-bozucu hata yakalandı: **(a) Wikipedia 429** (1242 tek-tek istek boğdu) → toplu-API'ye geçiş; **(b) Python `.title()` Türkçe-kırması** ("ALİAĞA"→"Ali̇ağa", "I"→"i" olması gereken "ı") → mangled başlık → sahte-"missing" → **tüm 1242 yanlışlıkla THIN sayılacaktı.** Düzeltilmeseydi rapor tamamen kirlenirdi.
- **TTA72 — PATRON PİVOT:** il-il pilot KAPANDI → **tam-evren fabrikası**. 32.290 mahallelik kanonik `mahalle_evren.jsonl` (genel+detay iki-katman) + gece launchd.
- **TTA73–75:** ad-uzlaştırma (collapsed-eşleme), detay-katman join, **makas teşhisi**.
- **TTA76–79 — İBB tedavisi:** "İBB Strapi ölü" 3-kaydı YANLIŞ çıktı (körlemesine güvenmedim, test ettim) → canlı uç, 30.886 karar tam-hasat → İstanbul imar-merge → İstanbul CONFIRMED 17→71.

## 3. ÇALIŞMA YOĞUNLUĞU — el-işçiliği vs otonom-gece
| Dönem | Yöntem | Hız |
|---|---|---|
| TTA57–70 | il-il elle, sprint başına birkaç yüz mahalle | ~100–300 mahalle/sprint |
| TTA72+ | **otonom gece-fabrika** | **2.500 mahalle/gece** |

Sıçrama ~**10–25×**. Erken sprintlerde her mahalle bir dokunuş isterdi; şimdi bir gece 2.500 mahalleyi ben uyurken tarıyor.

## 4. OTOMATİKLEŞEN YAPI — launchd 03:17
**TTA72'de (07-11) kuruldu:** `com.tradia.ttai.fabrika`, her gece 03:17, N=2.500, TCC-güvenli `~/tradia_ttai`'dan. `mahalle_evren.jsonl`'i yerinde günceller, `son_tarama` damgalar, yalnız `taranmadı` satırları işler.

**Dürüst kayıt (ne kadarı gerçekten sensiz dönüyor):** genel/wiki-katmanı **evet** — birkaç gece otonom koştu, wiki-tarama %9.65→**%56.1**'e çıktı ben tetiklemeden. **AMA tam-otonom değil:** (a) **Mac uyursa koşmuyor** (launchd uyuyan Mac'i uyandırmaz — 07-13 bu yüzden kaçtı); (b) genel-katman otonom ama **tier-kesinleştirme (terfi) + detay-merge hâlâ elle**. Yani "tarama" otonom, "confirmed'e dönüştürme" gündüz-işi. Mac-uyku fix'i (pmset wake) Patron'da bekliyor.

## 5. ANAYASAN — tetiklediğim kurallar
- **Standing #18 (üçlü-anahtar):** benim iki bug'ımdan doğdu — TTA55 (İstanbul/Aksaray→Hatay) ve TTA65 (Darıca/Yeni + İzmit/Yeni ad-bazlı sahte-merge). Ad-bazlı birleşme YASAK, kimlik hep (il,ilçe,mahalle).
- **Standing #20 (nicelik 4-nokta):** **POI vakam** tetikledi — osm_poi symlink'i "139.989" iddia ediyordu, fiziksel 4-satırdı. Symlink hedef-içeriği+niceliği spot-check zorunlu oldu.
- **Standing #25 (canlılık testi):** "İBB Strapi ölü" 3-kaydını körlemesine kabul etmeyip 1-GET ile test etmem → ölü-liste yanlıştı, uç canlıydı. "Ölü" demeden önce 1 istek at.
- **YAPISAL_TAMAM(C) yolu** ve **Faz-1 eşikleri** (%40 CKAN-rich / %15 walled / ~%25 birleşik) benim ölçümlerimle kalibre edildi.

## 6. TAM KAPSAM — sayılar + makas
**Güncel (07-13):**
- **CONFIRMED: 1.273 / 32.290 = %3.94** (TAMAM 55 · YAPISAL_TAMAM 1.218 · KISMI_THIN 565)
- **wiki-tarama: 18.115 / 32.290 = %56.1** · kalan ~14.175 (~5.7 gece)
- Eksen-katmanları: betimsel 3.257 · ckan_yapi 1.223 · ckan_afet_yol 1.222 · imar 669 · haber 191 · ihale 13
- İl: İzmir 1.166 (çift-CKAN) · İstanbul 71 (İBB) · Bursa 36 · diğer ~0

**MAKAS: %56.1 tarandı ↔ %3.94 confirmed = 52.2 puan.** Ve **çıplak kanıt:** wiki-tarama %25→%56'ya iki katına çıktı, CONFIRMED %3.68→%3.94'te neredeyse ÇAKILI kaldı. Yarım evren tarandı, confirmed kımıldamadı. Sebep **yapısaldır**: CONFIRMED ≥2 bağımsız eksen ister; betimsel-tarama tek başına o 2. ekseni ÜRETMİYOR. CONFIRMED yalnız yapısal-veri olan yerde büyüyor: İzmir (çift-CKAN) tek başına toplam CONFIRMED'in %92'si.

## 7. GERÇEK-MALİYET DÜRÜSTLÜĞÜ — ücretli API makası kapatır mıydı?
**Kısa cevap: DOĞRU türde ücretli kaynak makası dramatik kapatır; yanlış türde para hiçbir şey çözmez. Çünkü sorun *para* değil, *eksen-kapsamı*.**

Ayrıntı:
- Bugün MediaWiki **ücretsiz** ile yalnız **betimsel** (wiki-rich/thin) ölçüyoruz. Betimsel bir "yapısal eksen" DEĞİL — o yüzden %56 tarama %3.94 confirmed veriyor. Ücretli bir *betimsel* servis (daha iyi metin) makası **kapatmaz** — yine tek katman.
- Makası kapatan şey **çift bağımsız yapısal eksenin tüm-evrene yayılması.** İzmir bunu kanıtlıyor: çift-CKAN olduğu için 1.300 mahallenin ~1.166'sı (%90) CONFIRMED. Diğer 80 ilde CKAN-eşdeğeri veri YOK.
- **Ücretli coğrafi servis (ör. ticari POI-yoğunluk + yapı/nüfus profili) tam-evrene İKİ eksen sağlarsa**, her il "İzmir gibi" olur → CONFIRMED patlaması gerçek. Kaba tahmin: 32.290 mahalle × POI-çekimi (Google Places/Foursquare mahalle başına birkaç istek) ≈ **tek-seferlik $3–10K**. Nüfus/yapı zaten TÜİK'te ücretsiz. Karşılığında İzmir-emsaliyle **~10.000–15.000 mahalle CONFIRMED'e** taşınabilir (%4→%40+).
- **Ama dürüst uyarı:** ücretli kaynak **tek** eksen verirse (yalnız POI), o zaman her mahalle 1 eksen kazanır ama 2. eksen için hâlâ imar/haber/ckan gerekir → makas yarı-kapanır, tam değil. Ve POI-yoğunluğu kırsalda doğal olarak sıfıra yakın (İzmir'in afet-yol ekseni bu yüzden değerliydi: kırsalda da DOLU).
- **En dürüst sonuç:** Para, **yapısal-veri satın almak** için harcanırsa (CKAN-eşdeğeri iki-eksen) makas GERÇEKTEN ve hızlı kapanır — çünkü İzmir bunun çalıştığını kanıtladı. Para *daha çok wiki-tarama* için harcanırsa (bizim mevcut ekonomimiz zaten $0) hiçbir şey değişmez. **Darboğaz veri-türü, bütçe değil.** Şu ana kadar $0 ile doğru olanı yaptık (ücretsiz yapısal kaynakları — İzmir-CKAN, İBB-imar, Basın-haber, İhale — avladık); ücretli adım ancak "tam-evren çift-yapısal" için mantıklı olur.

## 8. V16 DÜRÜST — 3 hata, 3 kazanım
**3 HATA:**
1. **Python `.title()` Türkçe-kırması (TTA71):** neredeyse tüm İzmir'i yanlış-THIN yapacaktı; yakaladım+düzelttim ama ilk kod hatalıydı.
2. **f-string SyntaxError (TTA79):** TTA78'de eklediğim İstanbul-kuyruk print satırı py3.9'da çöküyordu → gece-fabrika Mac uyanık olsa bile çökerdi. Kendi kodum.
3. **POI symlink'e baştan güvenme eğilimi (TTA74):** join-aday sandım; ancak Standing #20 spot-check ile yanlış-yön (139.989↔4-satır, ayrı-proje) çıktı → join reddedildi, vaka açıldı. (Yakalama iyiydi ama başta "hazır kaynak" varsaymam hataydı.)

**3 KAZANIM:**
1. **Tam-evren fabrikası + otonom gece:** il-il el-işçiliğinden 2.500/gece kendi-dönen hatta geçiş (10–25× hız).
2. **İzmir çift-CKAN hasadı:** YAPISAL_TAMAM 0→1.166 — "Wikipedia'sı olmayan mahalle de TAMAM olabilir" yolunu kanıtladı.
3. **İBB Strapi canlı-keşif + yapısal-teşhis:** "ölü" sanılan uçtan 30.886 karar; İstanbul CONFIRMED 17→71; ve en değerlisi — **makasın yapısal olduğunu kanıtladım** (para değil, eksen-kapsamı sorunu). Bu teşhis, gelecekteki her yatırım kararının pusulası.

---
**Bir cümlelik öz:** $0 ile evrenin yarısını taradım ama confirmed %4'te çünkü darboğaz tarama-hızı değil **yapısal-eksen kapsamı** — ve bunu dürüstçe ölçüp söylemek, yanlış yere para/emek harcamaktan daha değerli.
