# HAFIZA'YA ENVANTER-KAPANIŞ · Rol Değişimi

**Tarih:** 2026-07-30
**Kaynak:** Üst Akıl
**Kanal:** Vezir (dağıtım + rol-değişim kaydı)
**Hedef CC:** CC-Hafıza (yalnız)
**Bağlam:**
- KAYNAK-ENVANTER-01 (`kaynak_envanter/kaynak_evneri_v1.md`) — Hafıza'nın son envanter/harita ürünü
- Aynı gün gelen HASAT-EMRİ (`UA_20260730_HASAT_EMRI_kesif_bitti.md` §2/F) — Hafıza'ya SORGU-01 ingest + sayaç görevi verildi
**Disiplin:** $0 · SİLME-YOK · A04 · Standing #35+#36

---

## 1. Direktifin Özü

> **Envanter/harita turunu KAPAT — bu son.**
> Bundan sonra görevin: gelen her hasadı **SORGU-01'e ingest** + **toplam kayıt sayacı** (baz **414K** → güncel).
> **Yeni keşif YOK; sadece yutma + sayma.**

---

## 2. Rol Değişimi (Hafıza — önce/sonra)

| Ekseni | ÖNCE (envanter dönemi) | ŞİMDİ (ingest/sayaç dönemi) |
|---|---|---|
| Ana iş | Kaynak envanteri + harita üretimi (KAYNAK-ENVANTER-01) | Hasat ingest + kayıt sayacı |
| Ürün | `kaynak_evneri_v1.md` · 44 kaynak · 15 CC + 3 CROSS · 25 fiziki VAR / 19 YOK | SORGU-01 canlı sayaç + havuz-toplam güncel |
| Yeni-keşif | AÇIK (yeni kaynak aramak Hafıza turu) | **KAPALI** (yeni-keşif Hafıza turu değil) |
| CC etkileşimi | Her CC'nin envanterini sorgula | Her CC'nin hasat teslimini SORGU-01'e yaz |
| Standing kanona | B9 kanon-kaydı + kaynak envanteri | B9 devam + **havuz-toplam sayaç ayrı satır** |

---

## 3. Hafıza'nın Yeni Ürünü (canlı sayaç)

Her hasat CC → Hafıza teslim akışında:

```
[CC → Desktop] tek-satır rapor (indirildi · N · yol · SORGU-01: E/H)
       ↓
[Hafıza] SORGU-01 ingest scripti çalıştır
       ↓
[Hafıza] havuz_toplam_kayit sayacı güncelle
       ↓
[Hafıza → Vezir bildirim] "N kayıt eklendi · havuz: X → X+N"
       ↓
[Vezir push] takip tablosunda skoru güncelle (HASAT-EMRİ §5)
```

---

## 4. Havuz Sayacı — Tek Kanonik Metrik

| Zaman | Havuz toplam | Fark | Kaynak |
|---|---|---|---|
| 2026-07-30 baz | **414.000** | — | SORGU-01 kurulum tabanı |
| Bugün sonu | ⏳ | ⏳ | HASAT-EMRİ 12 kalem katkısı |
| Hafta sonu | ⏳ | ⏳ | Kümülatif |

Bu **tek metrik** Havuz-4× planının canlı KPI'ıdır. Baz 414K → hedef ~1.65M (4×).

---

## 5. Vezir A04 Dürüst-Not

- **"Envanter kapanışı" bir kayıp değil** — kaynak-arama/haritalama işi CC'lere (uygulama zamanı gelen ürün) devrediliyor. Hafıza artık **veri-yönetici** rolünde (indeksleme + sayaç), keşif değil.
- **KAYNAK-ENVANTER-01 dondu** — v2 üretimi gündemde değil (CC-Finans + CC-Signals metadata beklerken de değil — o iki dosya geldiğinde başka bir mekanizmayla işlenecek; belki dosyalar SORGU-01'e ingest, envanter dosyası güncellenmez).
- **Standing #23-24 (K24a) dağıtım borusu** korunur — CC bildirimleri Hafıza'ya, Hafıza SORGU-01'e.
- **Hafıza'nın kompakt disiplin** (Standing v1.11 22K→4.2K emsali) devam eder — ingest scripti + sayaç kod dosyalar dışa dokunmasız.
- **Yeni keşif YOK** kuralı **Hafıza için** — Vezir/Üst Akıl için değil. UA yeni kaynak fark ederse CC'ye yönlendirir (HASAT emrindeki disiplin).

---

## 6. Vezir Takip

Bu dosya HASAT-EMRİ §2/F satırının **detay-tamamlayıcısı**. İkisi birlikte okunmalı.
Havuz sayacı skoru **HASAT-EMRİ §5 tablosu** F satırında Vezir güncelleyecek.

*Envanter turu kapandı. Hafıza artık sadece yutuyor ve sayıyor.*
