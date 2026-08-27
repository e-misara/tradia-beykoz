# KURULUS · CC-KASA

**CC adı:** CC-Kasa (Siber Kasa + Psikolojik-Finansal Danışman)
**Kuruluş:** S1 · 2026-06-XX (Patron kararı, misara çatısı)
**Statü:** **Tradia'dan AYRI**, bireysel-kapalı ürün
**Kanon kökü:** `~/misara/kasa/`
**Kaynak öz-analiz:** [cc/kasa/CC-Kasa_oz_analiz_tam_kapsam_2026-07-13.md](../cc/kasa/CC-Kasa_oz_analiz_tam_kapsam_2026-07-13.md)
**Standing zinciri:** #37 (KALICILIK) kapsamında bu kuruluş üretildi.

---

## 1. DOĞUŞ

- **Tarih:** S1 (2026-06-XX civarı; kesin tarih commit-history üzerinden inşa edildi)
- **İhtiyaç:** Kişisel/finansal katarsis ve miras yönetimi için bir **siber kasa** — banka+noter+psikolog karışımı, dijital.
- **Faz konumu:** Tradia'nın ARZ→TALEP geçiş döneminde açıldı, **ama Tradia'nın parçası değil** — misara çatısı altında AYRI ürün.
- **İki omurga:**
  - **Katarsis:** Yaz-Yak, sıfır-log (kripto-shredding)
  - **Miras:** Vasiyet + Karar Değiştirme Süresi

---

## 2. FELSEFE & PRENSİPLER

- **Build-free PWA** — framework YOK, build adımı YOK, saf HTML+CSS+JS+SW
- **Web Crypto API tabanlı** — server-side depolama minimum, sıfır-log ilkesi
- **Crypto-shredding** — silme = anahtar-imhası (ADR-01)
- **Kapsam kilidi** — MVP "güvenli çekirdek" (Yaz-Yak + Vasiyet); malvarlığı/değerleme/noter → **Faz-2 kilidi**
- **A04 dürüst-negatif** — historical sprint-başına *tarihsel* assertion sayıları yok, commit'ten geri-inşa edildi (öz-analizde işaretlendi)

---

## 3. ANAYASA / KURAL SETİ

Tradia Standing v1.11 zinciri Kasa için **kısmen** geçerli (AYRI ürün):

| Kural | Uygulama |
|---|---|
| $0 disiplin | ✅ Uygulanır (framework yok, hosting minimum) |
| SİLME-YOK | ⚠ **Değiştirilmiş** — Kasa'nın DNA'sında SİLME VAR (crypto-shredding) ama iz-yok (sıfır-log) → farklı yorum |
| A04 dürüst-negatif | ✅ Uygulanır |
| KVKK #31 | ✅ KATI uygulanır (Kasa'nın ana konusu bireysel-veri) |
| K24a | ❌ Uygulanmaz (Tradia dışı, Hafıza'ya bildirim borusu yok) |

**CC-Kasa özel disiplinleri:**
- **KAS-1:** Sıfır-log ilkesi — kullanıcı içeriği server'da hiç tutulmaz
- **KAS-2:** Anahtar-imha = silme; SİLME-YOK ilkesi tersine çevrilir (bilinçli tasarım)
- **KAS-3:** ADR-driven geliştirme — her mimari karar `docs/adr/` altında
- **KAS-4:** Faz-2 kilidi — malvarlığı özellikleri erken açılmaz

---

## 4. SAHİPLİK DATASI

Kasa'nın "veri seti"leri klasik CC gibi değil — çoğunlukla **kanon dokümanlar + test suite**:

| Kaynak | Yol | Boyut | Tür |
|---|---|---|---|
| PWA kabuğu | `~/misara/kasa/app/` | ~200 KB | Kod |
| ADR belgeleri | `~/misara/kasa/docs/adr/` | 11 belge | Karar-kaydı |
| Test paketi | `~/misara/kasa/tests/` | 11 paket · 190 assertion | Kanıt |
| Commit tarihi | `~/misara/kasa/.git/` | 24 commit | Hafıza |
| Backend yer-tutucu | `~/misara/kasa/backend/` | — | (Faz-2 için) |

**Kanonik sayılar (öz-analiz A04-doğrulu):**
- **24 commit** (öz-analiz tarihine kadar)
- **11 ADR** karar-kaydı
- **11 test paketi · 190 assertion**
- **S1 → S20** sprint aralığı

---

## 5. TEKNİK İLERLEME KRONOLOJİSİ

Öz-analiz S1-S20 sprintlerini detaylı verir. Ana kilometre taşları:

| Sprint | Ana iş | Kanıt |
|---|---|---|
| **S1** | İskelet + anayasa (ADR-01, ADR-02, ADR-03) | commit `e66e30c` |
| **S2** | İlk çalışan kripto akışı | assertion suite |
| **S5-S10** | Yaz-Yak MVP olgunlaştı | ADR-04, ADR-05 |
| **S15-S20** | Vasiyet + Karar Değiştirme Süresi entegrasyonu | ADR-11 |
| **S21+** | pending (yeni sprint tetiği yok) |

**Bugünkü yetenek haritası:**
- ✅ Yaz-Yak akışı (kripto + shredding)
- ✅ Vasiyet MVP
- ✅ Karar Değiştirme Süresi (KDS) — kullanıcı iptal-penceresi
- 🟡 Ölüm-doğrulama akışı — ADR-03 sadece **TASARIM** (henüz kanıtlanmamış)
- 🔒 Faz-2 (malvarlığı, değerleme, noter) — kilit

---

## 6. BEYKOZ DOSYASI KATKIN + SON KONUŞMA KARARLARI

**Beykoz vakasına doğrudan katkı YOK** — Kasa Tradia dışı. Ama:

- **Dolaylı katkı:** Beykoz'un ADR-driven yaklaşımına Kasa'nın ADR şablonu **emsal** oldu (Kasa'nın 11 ADR'si, Beykoz'un vaka-kararlarına format örneği)

**Son konuşma kararları (Standing #37 turu · 2026-08-27):**
1. CC-Kasa KURULUŞ dosyası **kasten dışarıda** kararı **DEĞİŞTİ** — üretildi
2. Kasa hattı **hâlâ Tradia'dan ayrı** — Standing #37 sonrası da bu değişmiyor
3. Kasa'nın kaynak dokümanları (`~/misara/kasa/`) misara-arsiv PRIVATE repo'ya alınmayacak (Kasa kendi private repo'sunda)

**Direktif kayıtları:**
- 2026-06-XX S1 kuruluş kararı (Patron)
- 2026-07-13 öz-analiz üretildi
- 2026-08-27 KURULUŞ dosyası (bu belge)

---

## 7. DİĞER CC'LERLE SINIRLARIN

**Senin işin:**
- Kişisel veri şifreleme + saklama (Web Crypto)
- Vasiyet mekaniği + KDS
- Ölüm-doğrulama tasarımı (Faz-2 için hazırlık)
- ADR süreci (mimari karar-kaydı)

**Senin işin DEĞİL:**
- Malvarlığı değerleme → **Tradia** (kısmi kesişim ileride mümkün)
- Kripto para/yatırım → **CC-Borsa/Finans** (Tradia)
- Ticari sicil/tüzel-kişi → **CC-Tic** (Tradia)
- Ham arşiv → **TT-ARŞİV** (Tradia)

**Çakışma alanları:**
- **Tradia ↔ Kasa "değerleme":** Kasa'nın Faz-2'sinde malvarlığı değerlemesi olacaksa Tradia veri hattıyla köprü kurulabilir → **Patron kararı bekliyor** (K10 sonrası)
- **Kasa ↔ ARŞİV:** Kasa kişisel veri işler, ARŞİV proje-verisi. Çakışma yok ama sınır net tutulmalı.

---

## 8. AÇIK BORÇLAR + 3 GELECEK YETENEĞİ

**Açık borçlar:**
1. **Ölüm-doğrulama kanıtı** (ADR-03 tasarım-only) — canlı akış test edilmemiş
2. **Faz-2 kilit çözümü** — malvarlığı özellikleri hangi tetikleyicide açılır?
3. **Kasa-Tradia köprü kararı** (K10) — Patron sonrası açıklık

**3 gelecek yetenek önerisi:**
1. **Ölüm-doğrulama canlı akış** — üçüncü-parti (aile üyesi + yasal temsilci) çift-imza
2. **Vasiyet çoklu-dil** — TR + EN + AR ilk aşama
3. **Kasa-Tradia SELECTIVE köprü** — Kasa kullanıcısı Tradia'dan değerleme talep edebilir (opt-in, KVKK bariyerli)

---

*KURULUS_CC-KASA.md · Vezir Standing #37 kapsamında üretildi · 2026-08-27*
