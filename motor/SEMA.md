# BÖLGE MOTORU · KUYRUK (v1)

**Tarih:** 2026-10-11
**Sahibi:** Vezir (Patron direktifi 2026-10-11)
**Kanal:** Vezir · $0 · PARSEL-01 besleme fazı deneyiminden türetildi
**Dosya:** `motor/KUYRUK.json` (bu dizinde)

---

## Amaç

- Her CC'nin cron'u KUYRUK'tan iş çeker; Patron'un "ittirmesi gerekmesin"
- Vezir günlük sağlık raporu üretir (koşmayan CC, 3+ gün KOSUYOR'da takılı iş = 🔴)
- İtme yalnız hüküm/sinyal/denetim için kalır

## Şema (her satır bir hücre)

```json
{
  "bolge": {"il": "<İL>", "ilce": "<İLÇE>"},
  "kok": "K1..K16",
  "cc": "<CC-adı>",
  "durum": "KUYRUKTA | KOSUYOR | DOLU | ERISILEMEDI | BOS",
  "oncelik": 1,
  "kaynak": "<ne, nereden>",
  "tarih": "<ISO>",
  "sinif": "<kabaca kategori>",
  "ozet": "<kısa>",
  "son_kosu": "<ISO | null>"
}
```

**Alan açıklamaları:**

- **bolge.il/ilce:** TR idari birimler (standart ad; mahalle alt-seviye değil)
- **kok:** K1–K16, soru-ağacının 16 kökü · ORUMCEK_SORU_SETI_v1 §2 ARZ sütunu
- **cc:** Hücre sahibi CC (ARZ eşlemesi · Patron verecek)
- **durum:**
  - **KUYRUKTA**: Henüz CC alıp başlamadı
  - **KOSUYOR**: CC işi aldı, çalışıyor (3+ gün takılırsa 🔴)
  - **DOLU**: CC veri + özet üretti, hücre tamam
  - **ERISILEMEDI**: Kaynak kapalı / erişim yok / imkânsız (dürüst-not)
  - **BOS**: Vaka yok (ör: hiçbir sinyal/vaka olmaması o bölge için beklenen durum)
- **oncelik:**
  - **1** = açık vakalar (Beykoz 45 mh, Kartal 15 mh, Rize/Derepazarı)
  - **2** = K22 9 büyükşehir ilçeleri
  - **3** = 81 il merkez ilçesi
  - **4** = kalan ilçeler
- **kaynak:** Ham veri referansı (dosya/API/url · [[celiski_referans_kanonu_v1]] etiket zorunlu)
- **tarih:** ISO 8601 (UTC)
- **sinif:** Kabaca "yapılaşma", "sosyal", "finans", "doğal", "mevzuat" vs.
- **ozet:** Tek-cümle (vaka-durum satırı gibi)
- **son_kosu:** CC cron'u bu hücreyi en son ne zaman çalıştırdı

## CC işletim kuralı

1. CC cron'u `KUYRUK.json`'u okur, kendi `cc` değerinde `KUYRUKTA` olan hücreleri bulur
2. En yüksek öncelikliyi seçer, `durum: "KOSUYOR"` yazar
3. İş biter → `durum: "DOLU"` (veya `ERISILEMEDI`/`BOS`) + `kaynak+tarih+sinif+ozet` doldurur
4. `son_kosu` güncellenir
5. Rename sayılır → Standing #48 R-numarası GEREKMEZ (statü ilerlemesi istisnası)

## Vezir sağlık raporu (günlük)

- Koşmayan CC → İLERLEME.md'ye not + pano `kirmizi_serit`
- 3+ gün KOSUYOR'da takılı iş → 🔴 pano şeridi
- Öncelik-1'de dolu/boş sayımı → İLERLEME.md'ye tablo

## İlk doldurma (bu tur · Vezir ilk sayım)

**Öncelik-1 bölgeler (açık vakalar):**
- **Beykoz** (45 mahalle) · 7 CC vaka tespit edildi (SIG12 vaat defteri)
- **Kartal** (15 mahalle) · pilot ilçe (DURUM.json)
- **Rize / Derepazarı** · PARSEL-01 vakası · 8 katman + Sinyal + Arşiv (10 hücre)

**Kök → CC eşlemesi (K1–K16 · Patron ARZ sütununu verecek):** 🟡 BEKLİYOR

**İlk doldurma yapılamıyor sebep:** Kök→CC eşlemesi Patron'dan gelmeden hücreler açılamaz. KUYRUK.json'un **başlık yapısı** aşağıda, ilk veri Patron ARZ'ından sonra.

*Vezir · Standing #35+#37+#48 + çelişki_referans_kanonu_v1 · 2026-10-11*

---

## Eşleşme sınaması (zorunlu · Patron direktifi 2026-10-14)

**Emsal:** Pazarlama yabancı-satış ↔ toplam satış birleştirmesinde anahtar biçimi `2025-5` / `2025-05` uyuşmadı. 1–9. aylar **hata vermeden atlandı**, çıktı "tamam" göründü.

**Kural:** Her `bolge_isle_<cc>` çıktısı (`02_CC_STATE/bolge_<cc>.json`) birleştirme/eşleştirme yaptığı her adım için şunu **açıkça** yazar:

```json
"eslesme": {
  "adim": "<ne neyle eşleşti, hangi anahtarla>",
  "girdi": 0,
  "eslesen": 0,
  "eslesmeyen": 0,
  "eslesmeyen_ornek": ["<en fazla 5 anahtar>"]
}
```

- `eslesmeyen > 0` → hücre durumu **KIRIK**. Gerekçeli istisna yalnız `eslesmeyen_aciklama` alanıyla verilir (ör. "kaynakta o il yok").
- Alan **yoksa** → Vezir ölçüsünde **"eşleşme beyanı yok"** (uyumsuzluk). Sessiz geçiş sayılmaz.
- Eşleşme adımı yoksa (tek kaynaklı çıktı): `"eslesme": {"adim": "YOK — tek kaynak"}` yazılır.

**Vezir uygulaması:** `motor/SUREKLILIK.json → deger_sinamasi`. 10 CC çıktısı (ai, analiz, basin, borsa, finans, ihale, map, pazarlama, sosyal, tic) her ölçümde `eslesme` alanı için taranır.
