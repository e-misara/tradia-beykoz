# ZİNCİRLER v1 — Tradia'nın 7 istihbarat zinciri

**Statü:** 🟢 KANON · Patron metni 2026-10-15 00:55 (kanonik) · Vezir kaydı
**Önceki durum:** 00:30 iskelet ("tanım diskte yok"); Borsa ve Tic de tanımsız yazmıştı. Bu metinle kapandı.
**Bağlı:** ORUMCEK_SORU_SETI_v1 (16 kök), kaynak_tarama_semasi_v1 (`zincir` alanı), motor/SEMA.md, kapsam_kanonu_v1

---

## Mantık

Her zincir: **tetik** (en erken resmî iz) → **ara halkalar** → **sonuç** (fiyat / talep / risk). Mikrodan makroya; **haber son halkadır, ilk değil.**

**Örümcek 16 kökle ilişki:** zincirler **yatay** (süreç), kökler **dikey** (soru). Bir hücre hem kök (`BM-K…`) hem zincir (`Z…`) etiketi taşır.

## Yedi zincir

| Z | Ad | Tetik (en erken resmî iz) | Ara halkalar | Sonuç | Birim | Sahip | Besleyen |
|---|---|---|---|---|---|---|---|
| **Z1** | İÇ TÜZÜK → İSTİHDAM | belediye meclis/encümen kararı, imar tadilatı, ruhsat (Basın, e-Plan) | yatırım teşvik belgesi (Aİ) → TOBB şirket kuruluşu / TTSG ilan (Aİ, Tic) → SGK işyeri-sigortalı artışı (Aİ) → BDDK il kredisi (Finans) | ilçede istihdam ve talep | ilçe × ay | **Aİ** | Basın, Tic, Finans |
| **Z2** | MEGA PROJE | SBB yıllık yatırım programı / KÖİ listesi (İhale) | EKAP ihale ilanı → sözleşme → şantiye (Map uydu) → haber (Basın) → ilan fiyatı (Pazarlama) | projenin fiyata yansıma gecikmesi (haberden kaç ay önce bilinebilirdi) | proje × ilçe | **İhale** | Map, Basın, Pazarlama |
| **Z3** | MALZEME | inşaat maliyet endeksi (malzeme/işçilik) + KAP'ta çimento/demir fiyat bildirimleri (Borsa, Finans) | ihale birim fiyat sapması (İhale) → müteahhit kârlılığı → proje iptal/gecikme | arz tarafı baskı | ülke/bölge × ay | **İhale** | Borsa, Finans |
| **Z4** | RAF / MARKET | perakende açılış/kapanış (TTSG, Basın), kartlı harcama sektörel (EVDS), hal fiyatı (kapalı) | ilçede market/zincir yoğunluğu (Map, Sosyal) → yerel talep → kira | ilçenin tüketim nabzı | ilçe × ay | **Analiz** | Tic, Basın, Borsa, Map |
| **Z5** | TTSG GİZLİ HARİTA | Ticaret Sicil Gazetesi: kuruluş, adres değişikliği, sermaye artırımı, tasfiye (Tic) | sermaye nereye gidiyor (il/ilçe), hangi sektör, hangi ortaklar; teşvik ve SGK ile birleştirme (Aİ) | haberde hiç çıkmayan sermaye hareketi haritası | firma × ilçe × ay | **Tic** | Aİ |
| **Z6** | HABERİN FİNANSAL DEĞERİ | haber / karar (Basın) | KAP bildirimi, hisse/tahvil tepkisi, kur-faiz bağlamı (Borsa), kredi koşulu (Finans) | bir haberin parasal etkisi ve gecikmesi — "bu haber kaç lira" | olay × gün | **Borsa** | Basın, Finans |
| **Z7** | DUYGUSAL FİYATLAMA (DFE) | ilan fiyatı davranışı (Pazarlama): D1 dağılım, D2 yuvarlama, D3 uç, D4 absürd + D5 duygu (EVDS konut alma olasılığı ulusal, Google Trends bölgesel) | resmî payda: KFE m² fiyatı, icra kıymet takdiri, TÜİK satış | ilçede fiyat köpüğü / çökmesi | ilçe × ay | **Analiz** | Pazarlama, Finans, Borsa |

## Bugünkü doluluk (halka başına: veri alıyor / almıyor)

**Doldurulacak:** 2026-10-16 19:26 kaynak evreni birleştirmesinde (`motor/kaynak_evreni_birlestir.py` zincir × halka sayımı). Aşağıdaki satırlar o ana kadar **ölçülmedi**; yalnız bugün bilinen halkalar not edildi.

| Z | Alan halkalar (bugün bilinen) | Almayan / belirsiz | Doluluk |
|---|---|---|---|
| Z1 | e-Plan (Map/Tic) · SGK/teşvik/TOBB tarama Aİ'de (14 Eki kaynak taraması) · BDDK il kredisi (Finans, ACIK) | meclis/encümen kararı sistematik hasat yok (Basın) | ölçülmedi |
| Z2 | EKAP (İhale) · uydu (Map) · haber (Basın) · ilan (Pazarlama) | SBB yatırım programı / KÖİ listesi taraması | ölçülmedi |
| Z3 | KAP (Borsa) · EVDS inşaat maliyet (Borsa) | ihale birim fiyat sapması hesabı | ölçülmedi |
| Z4 | TTSG kısmi (Tic) · EVDS kartlı harcama (Borsa) | hal fiyatı KAPALI (Analiz) · market yoğunluğu (Map/Sosyal) | ölçülmedi |
| Z5 | Firma DB 527 (Tic) | TTSG tam akış abonelik duvarı (karar askıda) | ölçülmedi |
| Z6 | Basın + KAP + EVDS (Borsa) | olay×gün eşleştirme motoru yok | ölçülmedi |
| Z7 | DFE v0.1 (Analiz, 2 bölge) · KFE/TÜİK satış (Borsa/Pazarlama) | D5 duygu (Google Trends) · icra kıymet takdiri · 81 il ölçümü | ölçülmedi |

## Uygulama

- Kaynak taraması ve grup eşlemelerinde **`zincir` alanı bu numaralarla** doldurulur (`Z1`…`Z7`, liste olabilir). "BİLİNMİYOR" artık geçersiz.
- Bölge motoru hücreleri (`motor/SEMA.md`) `kok` + `zincir` birlikte taşır.
- Zincir **sahibi** doluluk satırını birleştirmede teyit eder; Vezir yalnız sayar.
- Borsa bulut sohbetinde: bu dosya Patron aracılığıyla iletilir (agir_is_kilidi.json madde 4 güncellendi).

*Vezir · 2026-10-15*
