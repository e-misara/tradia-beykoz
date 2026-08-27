# KURULUS · CC-KİTAP

**CC adı:** CC-Kitap (Tradia Kütüphanesi · Cilt I — "Ekrandaki Ülke")
**Kuruluş:** S37-EK · 2026-07-09 (Patron K10 kararı)
**Statü:** Misara çatısı, **Tradia-DIŞI ürün-hattı**
**Kanon kökü:** `~/kitap_32gun/`
**Kaynak öz-analiz:** [cc/kitap/CC-Kitap_oz-analiz_tam-kapsam_raporu.md](../cc/kitap/CC-Kitap_oz-analiz_tam-kapsam_raporu.md)
**Standing zinciri:** #37 (KALICILIK) kapsamında bu kuruluş üretildi.

---

## 1. DOĞUŞ

- **Tarih:** 2026-07-09 (S37-EK)
- **İhtiyaç:** Sosyal'in 32.Gün tam-metin arşivi olgunlaştıkça bir **damıtma ürünü** gerekti — hammadde vardı, kitaba dönüştürme sürükleyicisi yoktu.
- **Faz konumu:** Tradia'nın **TALEP** fazında (soru-cevap/sinyal öncesi) doğdu; kitap bir "iletişim ürünü" olarak, veri motorlarına paralel bir kanal.
- **Görev:** Türkiye'nin son 30 yılını "ekranda nasıl lanse edildi" ekseninde 6×9 kitap formatına damıtmak.

---

## 2. FELSEFE & PRENSİPLER

- **"Damıt, araştırma değil"** — Sosyal'in tam-metin arşivi + Basın çıktıları hazır girdiler; CC-Kitap sıfırdan araştırma yapmaz.
- **A04 dürüst-negatif** — "kaç haftada" sorusuna "aslında ~4 gün" cevabı emsal.
- **NUMARA DONDURMA** — kaynakça FROZEN, strip-regen kapalı (K5 dersi).
- **Yeni-ton, 5 katman** — Patron vizyon-pivotu ile 3 → 5 katman anlatı (K3'te kanona).
- **48-sayfa 6×9 disiplin** — MVP boyutu; Cilt II/III için ayrı karar.

---

## 3. ANAYASA / KURAL SETİ

Bu CC Tradia-DIŞI olduğu için Standing v1.11 zinciri **kısmen** uygulanır:

| Kural | Uygulama |
|---|---|
| $0 disiplin | Uygulanır (K1-K8 hiçbir ücretli çağrı yok) |
| SİLME-YOK | Uygulanır (K5 yapısal değişiklikte eski taslak korunur) |
| A04 dürüst-negatif | Uygulanır (öz-analiz zaman-çizelgesi düzeltmesi emsal) |
| KVKK #31 | Uygulanır (32.Gün transkript zaten kamuya-yayın, ek KVKK riski düşük) |
| K24a (CC → Hafıza) | **Kısmi** — Hafıza'ya sınır-kanon (`cc_kitap_sinir_v1`) yazıldı, ama Kitap sonrasında bağımsız çalışıyor |

**CC-Kitap özel disiplinleri:**
- **KIT-1:** Kaynakça FROZEN — yeni ekleme numarası artırır, eski numaraları değiştirmez
- **KIT-2:** Strip-regen kapalı — düzenli sayfa numaraları LaTeX/InDesign'a kalır
- **KIT-3:** Yeni-ton 5 katman şablonu tüm bölümlerde tekrar edilir

---

## 4. SAHİPLİK DATASI

| Kaynak | Yol | Boyut | Kanonik | Güncelleyen |
|---|---|---|---|---|
| Sosyal 32.Gün tam-metin | `~/tradia_sosyal/kitap_arsiv/tam_metin_govde.jsonl` | ~22 MB | ✅ | CC-Sosyal (Whisper kuyruğu) |
| Basın arşivi (referans) | `~/tradia_basin/veri/govde/` | ~34 GB | ✅ (üzerine yazılmaz) | CC-Basın |
| Kitap üretim kökü | `~/kitap_32gun/` | ~50 MB | ✅ | CC-Kitap |
| Okuyucu-PDF v1 | `~/Desktop/kitap_32gun_v1.pdf` | 3.4 MB | v1 K8 (dondurulmuş) | Patron elle |

**Yeni gelen kaynaklar (Standing #37 sonrası):**
- **İbn Sînâ arşivi** — TT-ARŞİV üzerinden alınacak (bekleniyor)
- **Kadir Mısıroğlu arşivi** — TT-ARŞİV üzerinden (bekleniyor)

---

## 5. TEKNİK İLERLEME KRONOLOJİSİ

| Sprint | Tarih | Ana iş | Kanıt |
|---|---|---|---|
| **K1** | 2026-07-09 | Envanter 36 belge · mimari + 3 ton + 8 isim | envanter.md |
| **K2** | 2026-07-10 | Strip 46 + I.Kısım taslak + **2 Patron vizyon-pivotu** | strip_46.pdf |
| **K3** | 2026-07-10 | Hammadde 46→93 · I.Kısım TAM · II iskelet | I_kisim_final.md |
| **K4** | 2026-07-12 | II.Kısım TAM | II_kisim_final.md |
| **K5** | 2026-07-12 | G3 kesinleştirme (yapısal değişiklik) · III.Kısım TAM | III_kisim_final.md · FROZEN kaynakça |
| **K6** | 2026-07-12 | I.Kısım revize + IV.Kısım TAM | IV_kisim_final.md |
| **K7** | 2026-07-12 | Beat-genişletme + Önsöz | onsoz.md |
| **K8** | 2026-07-12 | 48-sayfa okuyucu PDF (Chrome-headless) | ekrandaki_ulke_okuyucu_nushasi_v1.pdf |
| **K9+** | pending | Patron okuma → geri-bildirim → editör-turu |

**Bugünkü yetenek haritası:**
- ✅ Damıtma pipeline (jsonl → md → PDF)
- ✅ 5-katman şablon (Cilt I emsal)
- 🟡 Editör-turu iş akışı belirsiz (K9 tetikleyicisi Patron okuması)
- ⏳ Cilt II ve sonrası: İbn Sînâ + Mısıroğlu arşiv-gelişine bağlı

---

## 6. BEYKOZ DOSYASI KATKIN + SON KONUŞMA KARARLARI

**Beykoz vakasına doğrudan katkı YOK** — CC-Kitap Tradia-DIŞI, Beykoz Tradia'nın vakasıydı. Ama:

- **Dolaylı katkı:** Kitap'ın "damıtma pipeline" mantığı Sosyal'in Beykoz S204-S208 turlarında **32.Gün arşivi kaynak kanalı** olarak kullanıldı → Kitap için hammadde biriktirilirken Beykoz bilgi tarafına da beslenme oldu.

**Son konuşma kararları (Standing #37 turu · 2026-08-27):**
1. CC-Kitap KURULUŞ dosyası **kasten dışarıda** kararı **DEĞİŞTİ** — direktif verildi, dosya üretildi
2. İbn Sînâ + Mısıroğlu arşivi TT-ARŞİV üzerinden gelecek (yeni CC)
3. Kitap hattı büyüyor: Cilt II tetiği için arşiv beklenmesi

**Direktif kayıtları (Vezir dağıtımdan):**
- 2026-07-09 K10 karar (Patron): CC-Kitap kurulacak
- 2026-08-27 Standing #37: KURULUŞ boşluğu kapatılacak (bu dosya)

---

## 7. DİĞER CC'LERLE SINIRLARIN

**Senin işin:**
- Damıtma (hammadde → 6×9 sayfa)
- Anlatı katmanları
- Kaynakça yönetimi (FROZEN kural)
- Cilt yönetimi (I, II+)

**Senin işin DEĞİL:**
- Ham arşiv hasadı → **TT-ARŞİV** (yeni)
- 32.Gün transkript çekimi → **CC-Sosyal**
- Basın haber toplama → **CC-Basın**
- Yayınevi/dağıtım süreçleri → Patron elle
- Ticari model / fiyatlandırma → **Kasa** dışı, ayrı karar

**Çakışma alanları:**
- **Sosyal ↔ Kitap:** Sosyal transkript üretir, Kitap kullanır. Sosyal Cilt II için farklı arşiv hattı (Mısıroğlu) hazırlayacak → bu koordine gerektirir
- **ARŞİV ↔ Kitap:** TT-ARŞİV kurulunca İbn Sînâ + Mısıroğlu ham arşivi ARŞİV'de tutulacak; Kitap oradan çeker

---

## 8. AÇIK BORÇLAR + 3 GELECEK YETENEĞİ

**Açık borçlar:**
1. **K9 tetiği** — Patron okuma → geri-bildirim (belirsiz tarih)
2. **Cilt II mimarisi** — İbn Sînâ arşivi geldikçe planlanacak (TT-ARŞİV bekleniyor)
3. **Yayınevi kararı** — Misara-içi print-on-demand mi, dış yayınevi mi (K10 sonrası açık)

**3 gelecek yetenek önerisi:**
1. **Otomatik-editör turu** — LLM-yardımlı ilk-tur editör (dış-CC değil, Kitap-içi)
2. **Çoklu-format yayın** — PDF + EPUB + HTML (aynı kaynaktan üretim)
3. **Kaynak-çapraz-doğrulama** — 32.Gün ↔ Basın ↔ Mısıroğlu arşivi üçlü karşılaştırma (TT-ARŞİV entegrasyonu sonrası)

---

*KURULUS_CC-KITAP.md · Vezir Standing #37 kapsamında üretildi · 2026-08-27*
