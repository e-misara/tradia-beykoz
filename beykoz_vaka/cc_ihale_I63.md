# BEYKOZ İHALE × GELİŞİM AMACI — CC-İhale (İ63)
**Tarih:** 2026-07-26 · **Patron sorusu:** "her bölge ne amaçla gelişti, ihalelerle kesiştirelim."
**Kaynak:** 144 Beykoz ihalesi (72 mahalle-bağlı) · **$0 · A04** · MAP28 "ne amaçla gelişti" uydusuyla kesişmeye hazır.

> İ62 kanonu korundu: **bakım ≠ gelişim.** Her hücrede **S/B = Sinyal(yeni-yapım) / Bakım(onarım).**

---

## G1 — MAHALLE × AMAÇ KESİŞİMİ (her bölge ne amaçla gelişti)

| Mahalle | Eğitim | Sağlık | Ulaşım | Altyapı | Park | Kamu-bina | Kıyı | **Gelişim parmak-izi** |
|---|---|---|---|---|---|---|---|---|
| **Çubuklu** | **13**/2 | · | · | · | 0/1 | · | · | 🎓 **EĞİTİM** (Türk-Alman kampüsü) |
| **Gümüşsuyu** | · | **3**/3 | · | 1/2 | · | · | · | 🏥 **SAĞLIK** (500 Yataklı hastane) |
| Anadolukavağı | · | · | · | · | · | **3**/3 | 0/1 | 🪖 KAMU-BİNA (askeri/deniz) |
| Kavacık | 1/2 | · | 1/0 | 1/0 | 1/0 | · | · | 🏙️ **KARMA** (iş-merkezi: eğitim+yol+altyapı+park) |
| Yalıköy | 1/0 | · | · | 0/3 | · | · | · | 💧 altyapı-bakım + 1 okul |
| Paşabahçe | 0/2 | · | · | 0/1 | · | · | · | 🔧 okul-bakım |
| Mahmutşevketpaşa | 0/3 | · | · | · | · | · | · | 🔧 tamamen okul-bakım |
| Polonezköy | · | · | 0/2 | · | 1/1 | · | · | 🌲 park + yol-bakım (orman-köy) |
| Riva | · | · | · | · | · | 1/0 | 1/0 | 🌊 KIYI + emniyet |
| Ortaçeşme | · | · | · | · | **1**/0 | · | · | 🌳 yalnız park |
| Kanlıca/Yavuzselim/Kabakoz/Soğuksu | 1/0 karışık | | | | | 1/0 | | tekil |

**Okuma:** Her gelişen-bölgenin **tek-amaçlı kamu-imzası** var:
- **Çubuklu = eğitim-motoru** (kampüs, 13 yeni-yapım).
- **Gümüşsuyu = sağlık-motoru** (hastane).
- **Anadolukavağı = askeri/deniz** (kamu-bina, özel-yatırıma-kapalı).
- **Kavacık = tek karma-kentsel** mahalle (eğitim+yol+altyapı+park birlikte) → gerçek "çok-amaçlı kentleşme" imzası burada.
- Geri kalanların çoğu **bakım-ağırlıklı** (Paşabahçe/Mahmutşevketpaşa/Yalıköy = mevcut-stok onarımı, gelişim değil).

→ **MAP28 kesişimi için:** Çubuklu'da uydu "kampüs-yapılaşması", Gümüşsuyu'nda "hastane-inşaatı", Kavacık'ta "karma-kentsel" beklenir. Ortaçeşme/Yalıköy uydu-büyümesi **kamu-amacıyla eşleşmiyor** (İ63-önceki kesişim: piyasa/kıyı-kaynaklı).

---

## G2 — 36 PDF-EKİ (yedekten) → ⛔ BU TUR BLOKE (dürüst)

**Yedeği açmayı denedim — erişilemedi.**

| Kontrol | Sonuç [K] |
|---|---|
| Silinen arşiv yedek-yeri | `/Volumes/TT-HAFIZA/02_ARSIV/tradia/2026-07/tahliye_S49/.../cc_ihale/arsiv/` (1.121 ZIP, 4,04 GB) |
| TT-HAFIZA disk durumu | ❌ **TAKILI DEĞİL** — `/Volumes/TT-HAFIZA/: No such file or directory` |
| Yerel arşiv kalıntısı | Yok (S55'te silindi, doğrulandı) |
| Yerel tam-metin PDF-cache | Yok |

**Sonuç:** 36 belirsizin çözümü için gereken **PDF ekleri TT-HAFIZA yedeğinde**, disk **şu an bağlı değil**. Fabrikasyon yapmadım — G2 **ertelendi**.
**Gerekli aksiyon:** Patron TT-HAFIZA diskini Mac'e takarsa → tek komutla geri-getirme:
`rsync -a /Volumes/TT-HAFIZA/02_ARSIV/tradia/2026-07/tahliye_S49/.../cc_ihale/arsiv/ ~/cc_ihale/arsiv/`
sonra PDF-eki parse → mahalle-bağlama çalıştırılabilir. (Alternatif: NAS-dönüşü.)

> **Not:** 36'nın yapısı zaten büyük ölçüde **çözülemez-yapısal** (9 MEM çok-ilçe + 4 İSKİ çok-ilçe + ~14 ilçe-geneli). PDF-eki asıl **9 boş-is_adi** kaydını kurtarabilir (parser o PDF'lerde iş-adı çıkaramamıştı). Yani yedek-açılınca beklenen kazanç **~9 kayıt**, hepsi değil.

---

## G3 — ZAMAN × MAHALLE ISI (Signals momentum ayağı)

**Sinyal (yeni-yapım) yatırımın yıllara dağılımı** — bakım hariç:

| Mahalle | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 | Toplam | Momentum |
|---|---|---|---|---|---|---|---|---|
| **Çubuklu** | · | 2 | 4 | 2 | **5** | 3 | 16 | 🔥 **CANLI** (8/16 son-2yıl) |
| Gümüşsuyu | · | · | 1 | **3** | · | · | 4 | ⚡ 2024-tepe, sonra soğudu |
| Kavacık | · | 1 | **3** | · | · | 1 | 5 | 📉 2023-tepe, doygun |
| Anadolukavağı | · | 1 | 1 | · | 1 | · | 3 | ➡️ düşük-sürekli |
| Riva | · | · | 2 | · | · | · | 2 | tek-atım 2023 |
| Polonezköy | · | 1 | · | 1 | · | · | 2 | dağınık |
| Ortaçeşme/Yalıköy/Kanlıca/… | · | tekil | | | | | 1'er | noktasal |

**Momentum okuması (Signals için):**
- **Çubuklu tek "canlı-momentum" mahalle** — son 2 yılda 8 yeni-yapım, kampüs hâlâ büyüyor. Forward-sinyal BURADA.
- **Gümüşsuyu 2024'te patladı** (hastane sözleşmesi), sonrası bakım → momentum **öne-yüklü, şimdi sönük**.
- **Kavacık 2023-tepe**, sonra doygun.
- Diğerleri **noktasal/tek-atım** — momentum yok.
→ **Kamu-momentum haritası:** yalnız **Çubuklu ileri-ivmeli**; hastane+Kavacık **geçmiş-ivme**; büyüyen-mahalleler (Ortaçeşme/Yalıköy) kamu-momentumu **taşımıyor** (piyasa-kaynaklı büyüme tezini tekrar destekler).

---

## G4 — CEVAPLAYAMADIKLARIM (A04)
1. **36 belirsizin PDF-çözümü** — TT-HAFIZA yedeği bağlı değil; disk-takılınca ~9 boş-kayıt kurtarılabilir, tamamı değil.
2. **Çubuklu/Gümüşsuyu MAP-büyümesi** ölçülmedi (MAP26 yalnız Ortaçeşme/Yalıköy piksel-çıkardı) → kamu-amaç ile uydu-büyüme bu 2 mahallede henüz çapraz-doğrulanamadı (MAP28 bekliyor).
3. **Bakım-yatırımların parasal-payı** — bedel çoğu bakım-kaydında yok, "gelişim vs bakım" TL-ağırlığı hesaplanamadı.
4. **Kavacık "karma" imzasının bütünlüğü** — 5 sinyal az; tek mahallede çok-amaç mı yoksa dağınık mı, örneklem-küçük.

---

## ÖZET
- **Her bölgenin tek-amaç kamu-imzası:** Çubuklu=eğitim · Gümüşsuyu=sağlık · Anadolukavağı=askeri · Kavacık=karma-kentsel. Gerisi bakım.
- **Momentum yalnız Çubuklu'da canlı**; hastane+Kavacık geçmiş-ivme; büyüyen-mahalleler kamu-momentumsuz.
- **G2 ertelendi** — yedek-disk bağlı değil (fabrikasyon yok).
- **MAP28 kesişimine hazır:** mahalle×amaç parmak-izi + zaman×mahalle momentum matrisi.

**Çıktı:** bu rapor + `~/cc_ihale/cikti/vaka_beykoz_ihale_I63.json`. **$0 · salt-okuma · SİLME-YOK.** CC-İhale duraklamaya döndü.
