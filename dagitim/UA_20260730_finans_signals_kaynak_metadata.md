# UA → Vezir → CC-Finans + CC-Signals: KAYNAK-METADATA BİLDİRİMİ

**Tarih:** 2026-07-30
**Kaynak:** Üst Akıl
**Kanal:** Vezir (dağıtım + envanter köprüsü)
**Hedef CC:** CC-Finans · CC-Signals (iki)
**Amaç:** Hafıza `KAYNAK-ENVANTER` tablosunda **"?"** görünen iki CC'nin metadata boşluğu kapansın; havuz haritası tamamlansın
**Disiplin:** $0 · KVKK #31 v1.1 · A04 · Standing #35+#36

---

## 1. Direktifin Özü

Hafıza'nın **KAYNAK-ENVANTER-01** taraması (44 kaynak / 15 CC + 3 CROSS · 25 fiziki VAR · 19 YOK-veya-bilinmez) sonucunda **CC-Finans ve CC-Signals metadata BİLİNMİYOR** — envanter tablosunda "?" gösteriliyor.

**İki CC'ye görev:** Kendi kaynak-envanterinizi bildirin.

**Format zorunlu 4 alan:**
- **Kaynak-adı** — kısa slug + tam ad
- **Erişim** — nasıl bağlanılıyor (path/URL/API/manuel)
- **Kapsam** — ne içerir (kayıt sayısı, dönem, alan)
- **Tazelik** — güncelleme sıklığı (statik/aylık/anlık/manuel)

---

## 2. Şablon (CC → Vezir teslim)

Her CC şu md dosyasını Desktop'a bırakır:

```
kaynak_metadata_<CC>.md

## CC-<Ad> — Kaynak Envanteri

**Tarih:** YYYY-MM-DD
**Sprint:** <son>
**Toplam kaynak sayısı:** N

## Tablo

| # | Kaynak-adı (slug + tam) | Erişim | Kapsam | Tazelik | Notlar |
|---|---|---|---|---|---|
| 1 | ... | ... | ... | ... | ... |

## Kaynak-üretmeme durumu (varsa)

Bu CC ham veri üretmiyorsa (örn. sentez katmanı), açıkça belirt:
- "ARZ katmanı DEĞİL; kaynak-metadata YOK; girdi CC'leri: <liste>"

## Standing referansları
- Hafıza B9 kanon-kaydına işlenmek üzere.
```

---

## 3. Vezir'in İki CC İçin Ön-Notu (Cross-Referanslar)

**CC-Signals bağlamı** (Vezir MEMORY.md okuma):
- Signals kuruluş dosyası (`kurulus/KURULUS_CC-SIGNALS.md`): **ARZ→TALEP tezi — ham veri üretmeyen ilk CC**
- Girdisi: diğer CC'lerin çıktısı (Basın · Borsa · TT-AI · TT-MAP · Sosyal · Analiz · İhale)
- **Vezir hipotezi:** CC-Signals'ın metadata bildirimi büyük olasılıkla **"kaynak yok, girdi-akışı X CC'den"** şeklinde olacak. Bu meşru bir yanıt — "?" değil, **NEGATİF-KAYIT** (kaynak üretmiyor).
- Şablon §2'de "Kaynak-üretmeme durumu" bloğu bunun için var.

**CC-Finans bağlamı** (Vezir MEMORY.md okuma):
- Finans kuruluş dosyası (`kurulus/KURULUS_CC-FINANS.md`): TALEP tarafı / yatırım zekâsı; `~/finans/` F-serisi (F1→F6)
- F6 Beykoz kapanış (`beykoz_vaka/FINAL_cc_finans_beykoz.md`)
- **Vezir gözlemi:** Finans'ın çıktıları var (F-serisi) ama **hangi kaynaklarla üretti** dokümante değil. Muhtemel kaynaklar:
  - TCMB-EVDS (HASAT-01 dağıtımıyla bağlanacak)
  - KFE (Konut Fiyat Endeksi — F8'de geçti)
  - Sahibinden master (CC-Analiz'den beslenme)
  - Basın (haber çapraz — F8'de "Basın md'si öyle dağıtmış" ifadesi)
  - Tapu/TKGM (kanal kapalı — F1 kural4 boş yapısal-borç)
- Bunların **hangileri fiziki-var**, **hangileri talep-anında bağlanıyor**, **hangileri belirsiz** — Finans netleştirmeli.

---

## 4. Neden "?" (Hafıza envanterinde)

`kaynak_envanter/kaynak_evneri_v1.md` (Hafıza üretimi, KAYNAK-ENVANTER-01):
- Envanter betikle üretildi (kaynak_envanter.py)
- El-küre KATALOG (metadata) + fiziki ölçüm (boyut/mtime/dosya-sayı)
- **Finans + Signals için betik `~/finans/` ve `~/signals/` dizin-boyutunu görüyor ama içerdeki dosyaların "kaynak" mı "çıktı" mı ayrımını yapamıyor**
- Bu ayrımı yalnız CC'nin kendisi verebilir (öz-beyan)

---

## 5. SLA + Teslim

| Aşama | Kim | Süre |
|---|---|---|
| Bu direktif iletildi | Vezir → Patron → CC session | Bugün |
| Metadata md üretildi + Desktop'a bırakıldı | CC-Finans · CC-Signals (bağımsız) | 1-2 gün öneri |
| Vezir push | Vezir | Anında |
| Hafıza B9 + KAYNAK-ENVANTER güncelle | Hafıza | Push sonrası |

---

## 6. Vezir Takip Tablosu

| CC | Metadata dosyası | Kaynak sayısı | Tarih | Commit |
|---|---|---|---|---|
| CC-Finans | ⏳ bekleniyor (`kaynak_metadata_finans.md`) | — | — | — |
| CC-Signals | ⏳ bekleniyor (`kaynak_metadata_signals.md`) | — | — | — |

---

## 7. Vezir A04 Notu

- **"?" bir hata değil, envanter-boşluğu.** İki CC hakkında olumsuz-yorum değil.
- CC-Signals cevabının **NEGATİF-KAYIT** olması beklenir (kaynak-üretmeyen katman). Bu Signals'ı yerinden etmez, aksine **kimliğini netleştirir** (KURULUS_CC-SIGNALS §7 sınırları teyit).
- CC-Finans cevabında **karma yapı** beklenir (bazı fiziki + bazı talep-anında + bazı Basın gibi diğer CC çıktısı üzerine katman). Bu normal.
- Bu iki dosya geldikten sonra **KAYNAK-ENVANTER-01 v2** üretilebilir (Hafıza sorumlu).

*Direktif arşivde. Patron iki CC session'ında yapıştıracak; Vezir metadata geldikçe push atacak.*
