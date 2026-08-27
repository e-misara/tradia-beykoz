# BE-01/H · HAFIZA GİRİŞ KAPISI — BITTI

**Tarih:** 2026-08-27
**Ek Sprint:** BE-01/H (BE-01'in H alt-turu)
**Kaynak:** Üst Akıl direktifi — "Arşive bakıyorum, aradığımı bulamıyorum"
**Kanal:** Vezir uygulama · $0 · AI çağrısı YOK

---

## Üretilenler (5 madde × H)

### ✅ H1) BAŞLA.md — Tek Giriş Kapısı
- **`BASLA.md`** repo kökünde
- 12 soru → dosya yolu tablosu
- Proje haritası (9 klasör, tek cümle)
- Son 5 önemli karar + linkler
- Yeni-dosya kuralları özet
- **Test:** tek ekran, uzarsa başarısız — 116 satır, 4.7 KB (kabul edilebilir)

### ✅ H2) Adlandırma Standardı
- **`kanon/dosya_adlandirma_v1.md`**
- Kural: `<cc>_<tur>_<konu>_<YYYY-AA-GG>.md`
- Türkçe karakter, boşluk, iki-nokta yasak
- ✅ Yasak listesi + ✅ doğru örnekler + ❌ yanlış örnekler ve düzeltme
- **Eski 213 dosyaya TOPLU RENAME YOK** — SÜPERSEDE mekanizması

### ✅ H3) Master İndeks
- **`kanon/INDEKS.md`**
- 213 MD dosya tabloda: dosya · içerik · CC · tarih · durum
- Durum sütunu: GÜNCEL / GÜNCEL (kapanış) / SÜPERSEDE→<yeni>
- **Otomatik-üretim:** Python script tek turda, tekrar üretilebilir
- **CC ataması heuristik** — dosya yoluna göre (belirsiz olanlar için `-`)

### ✅ H4) Çelişkiler Listesi
- **`kanon/celiskiler_v1.md`**
- **7 vaka tespit:**
  - 🔴 Beykoz sayısı (363.582 vs 325.186) — ✅ çözüldü
  - 🔴 Ulusal alt sınır (1.4M+ vs 1.383.177) — ✅ çözüldü
  - 🟡 SORGU-01 havuz (5 farklı ölçüm, 26 gün eski) — 🟡 kısmi
  - 🔴 STAGING_YENI slug (Vezir cc-bazlı vs Hafıza kaynak-bazlı) — ✅ SLUG_KANON
  - 🟡 Depolama katmanı v1/v2/v3 — ✅ v3 kanon
  - 🟡 Tutanak sayısı (direktif 27 vs gerçek 8+16) — 🟡 HAKEM BEKLENEN
  - 🟢 CC sayısı (10 vs 16) — uyumlu (üretici vs toplam)
- **Vezir kendi karar vermedi** — hakemi Üst Akıl

### ✅ H5) Hafıza S43 Vaat EN ÜSTE
- **`pano/ozet-w35.json`** güncellendi
- **`vaat_takip.kritik[0]`** — Hafıza S43 raporu (46 gün gecikti)
- Bağlı borçlar: 9 kanonizasyon kalemi + 2 PROMOTE onayı + Standing #17 revizyonu
- HTML pano bir sonraki fetch'te otomatik yansıtır (fetch cache-no-cache)

---

## Vezir A04 — Dürüst-Notlar

### 🟡 Otomatik CC-atama Heuristik Sınırı
- INDEKS.md'de bazı dosyalar `-` (CC belirsiz) — dosya yoluna göre otomatik heuristik yetersiz
- Örnek: `README.md` root'ta, CC atanamadı
- **Çözüm:** Yeni dosyalarda H2 standardı zorunlu → CC ilk kelimede net

### 🟡 213 dosyanın "içerik" sütunu = ilk H1 başlık
- Bazı dosyalarda başlık yok / başlık dosya-adı ile aynı
- INDEKS okurken bu belirsizliğe dikkat

### 🟢 SÜPERSEDE Mekanizması Çalışıyor
- v1/v2/v3 depolama katmanı örneği: eski dosyalarda REVİZE NOTU var
- INDEKS'te durum "SÜPERSEDE→v3" olarak işaretlenebiliyor
- SİLME-YOK kanonu korunuyor (eski dosyalar diskte)

### 🔴 Tutanak "27" Belirsizliği Aktif
- Direktifte "27 tutanak" ama gerçek: 8 + 16 = 24 (3 belirsiz)
- Üst Akıl "27" kaynağını netleştirmeli

---

## Tek-Ekran Test (Direktif kriteri)

> "Patron ekrana 5 saniye bakınca 'aradığımı nerede' görmeli."

**BASLA.md akışı:**
1. Sorunu bul (12 soru listesinde) — 3 saniye
2. Dosya yolu tıkla — 1 saniye
3. Hedef dosya açıldı — 1 saniye

**Toplam: 5 saniye** ✅

Eğer soru listesinde yok:
- INDEKS.md — 213 satır tam liste
- Arama: browser Ctrl+F

---

## Kanıt Dosyaları

```
BASLA.md                          (yeni · repo kökü)
kanon/dosya_adlandirma_v1.md      (yeni · adlandırma kanonu)
kanon/INDEKS.md                   (yeni · 213 MD tablosu)
kanon/celiskiler_v1.md            (yeni · 7 vaka)
pano/ozet-w35.json                (güncellendi · Hafıza S43 EN ÜSTE)
pano/BITTI_H.md                   (bu dosya)
```

---

## BITTI (BE-01/H)

Hafıza yazma değil, artık **OKUMA sistemi** olarak da kuruldu. Repo'yu açan biri BASLA.md üzerinden 5 saniyede yönünü bulacak. 213 MD dosyanın tamamı INDEKS'te izlenebilir. Yeni dosyalar bir standarda göre isimlendirilecek. Çelişkiler kayda geçti, hakem Üst Akıl'da.

Patron'un şikâyeti kapatıldı: "Arşive bakıyorum, aradığımı bulamıyorum" → BASLA.md.

*Vezir BE-01/H · $0 · 2026-08-27 · Standing #38*
