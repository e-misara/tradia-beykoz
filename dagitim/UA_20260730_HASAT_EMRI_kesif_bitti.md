# HASAT-EMRİ · KEŞİF BİTTİ, ARTIK İNDİRME

**Tarih:** 2026-07-30
**Kaynak:** Üst Akıl
**Kanal:** Vezir (dağıtım + takip)
**Bağlam zinciri:**
- [`UA_20260729_havuz4x_ilk_hamle.md`](UA_20260729_havuz4x_ilk_hamle.md) — plan
- [`UA_20260730_acik_veri_hemen_al.md`](UA_20260730_acik_veri_hemen_al.md) — davranışsal disiplin (Standing aday #37)
- [`UA_20260730_HASAT_01_sifir_risk_hasadi.md`](UA_20260730_HASAT_01_sifir_risk_hasadi.md) — 9 kalem × 4 CC (ilk uygulama)
- **BU DOSYA (HASAT-EMRİ):** ölçek genişletme (6 CC) + davranış sertleştirme + tek-satır rapor + günlük SLA
**Disiplin:** $0 · açık-kanal · KVKK #31 v1.1 · SİLME-YOK · A04 · Standing #35+#36

---

## 1. Kuralın Özü

> **KEŞİF BİTTİ. ARTIK İNDİRME.**
> Her CC kendi doğrulanmış-açık kaynağını **ŞİMDİ** çeker.
> **Çıktı = harita değil, DİSKTEKİ KAYIT + sayı.**
> "Buldum" yasak; **"indirdim, N kayıt, şu yolda"** zorunlu.
> **Bugün EN AZ BİR kaynağı fiilen indir.**
> Rapor tek satır: `indirildi · N kayıt · yol · SORGU-01'e verildi mi`

---

## 2. CC × Görev Tablosu (6 CC — genişletilmiş)

| # | CC | Görev | Somut hedef | Rapor sayacı |
|---|---|---|---|---|
| **A** | **CC-Borsa** | TCMB-EVDS token al → TÜM seri çek + KAP bildirim arşivi | Kaç seri + kaç bildirim | seri_sayısı, bildirim_sayısı |
| **B** | **CC-TT-MAP** | İBB CKAN **557 seti** indir + OSM Overpass TR-geneli POI (**ilçe-ilçe böl** — timeout kırılırsa) | Kaç set + kaç POI | ckan_set_sayısı, POI_sayısı |
| **C** | **CC-Analiz** + **CC-TT-AI** | TÜİK (**tüm il/ilçe tablolar**) + AFAD deprem **tam arşiv** + World Bank TR göstergeleri | Kaç tablo + kaç kayıt | tablo_sayısı, kayıt_sayısı |
| **D** | **CC-Basın** | S99 SÜZME bitince **GERCEK_ZENGIN + ORTA ilçeleri O AN hasata sok** (bekleme yok, süzülen ilçe hemen indirilir). Ulusal gazete açık arşivlerini de başlat. | Kaç haber (ilçe-ilçe) + ulusal arşiv sayısı | haber_sayısı_ilçe, ulusal_arşiv_sayısı |
| **E** | **CC-Sosyal** | Whisper otonom kuyruğu **aç**, açık-altyazı kanallarını çek | Kaç video + kaç dk transcript | video_sayısı, transcript_dakika |
| **F** | **CC-Hafıza** | Gelen her hasadı **SORGU-01'e ingest** + toplam kayıt sayacı tut. Baz: **414K**. Hedef: **414K → ŞİMDİ kaç** | Havuz toplam kayıt (SORGU-01) | havuz_toplam |

---

## 3. Tek-Satır Rapor Formatı (kural)

CC her hasat kalemi bittiğinde şu formatta bildirim atar (Desktop'a bırakır, Vezir push):

```
indirildi · N kayıt · <YOL> · SORGU-01: EVET/HAYIR
```

**Örnek:**
```
CC-Borsa: TCMB-EVDS tam seri indirildi · 1.847 seri · ~/tradia_borsa/ham/tcmb_evds/ · SORGU-01: EVET
CC-TT-MAP: OSM Overpass İstanbul 39 ilçe indirildi · 284.712 POI · ~/tt_map/ham/osm_tr/istanbul/ · SORGU-01: EVET
```

**"Buldum" YASAK:** kaynak-adı + link + "planlanıyor" gibi ifadeler artık geçersiz. **Sadece disk-üstünde ölçülebilen kayıt** raporlanır.

---

## 4. HASAT-01 Referansı (tekrar yazmıyorum)

Deliverable formatı ("Kaynak Künye Kartı" 6-blok), karantina rejimi, batch kuralları — **hepsi zaten** [`UA_20260730_HASAT_01_sifir_risk_hasadi.md`](UA_20260730_HASAT_01_sifir_risk_hasadi.md) §3-4-5'te. Bu direktif onların **üstüne**:
- **Ölçek:** 4 CC → 6 CC (+Basın +Sosyal +Hafıza)
- **Davranış:** "keşif+plan" → "ŞİMDİ indir + tek-satır rapor + günlük SLA"
- **Sayaç kanona:** Hafıza SORGU-01'de havuz-toplam-kayıt (baz 414K)

---

## 5. Vezir Takip Tablosu (canlı — CC bildirim atınca güncellenir)

| # | CC | Kaynak | Rapor | Kayıt sayısı | Yol | SORGU-01 | Tarih | Commit |
|---|---|---|---|---|---|---|---|---|
| A1 | CC-Borsa | TCMB-EVDS (tam seri) | ⏳ | — | — | — | — | — |
| A2 | CC-Borsa | KAP bildirim arşivi | ⏳ | — | — | — | — | — |
| B1 | CC-TT-MAP | İBB CKAN 557 set | ⏳ | — | — | — | — | — |
| B2 | CC-TT-MAP | OSM Overpass TR POI (ilçe-ilçe) | ⏳ | — | — | — | — | — |
| C1 | CC-Analiz/TT-AI | TÜİK tüm il/ilçe | ⏳ | — | — | — | — | — |
| C2 | CC-Analiz/TT-AI | AFAD deprem tam arşiv | ⏳ | — | — | — | — | — |
| C3 | CC-Analiz/TT-AI | World Bank TR göstergeler | ⏳ | — | — | — | — | — |
| D1 | CC-Basın | S99 SÜZME akış hasadı (ilçe-ilçe) | ⏳ | — | — | — | — | — |
| D2 | CC-Basın | Ulusal gazete açık arşiv | ⏳ | — | — | — | — | — |
| E1 | CC-Sosyal | Whisper otonom kuyruk | ⏳ | — | — | — | — | — |
| E2 | CC-Sosyal | Açık-altyazı kanal çekimi | ⏳ | — | — | — | — | — |
| **F** | **CC-Hafıza** | **SORGU-01 havuz toplam** | **⏳** | **414K (baz)** | **~/tradia_sorgu/** | **N/A** | **—** | **—** |

**Havuz büyüme özeti (Vezir güncelleyecek):**
- Baz (2026-07-30): **414.000** kayıt
- Şimdi: ⏳ bekleniyor
- Δ (fark): ⏳

---

## 6. Vezir A04 Dürüst-Not

- **"Bugün en az bir kaynak"** SLA'sı agresif — kaynak sahiplerinin (CC) hepsinin senkron çalışması gerekli. Patron dikkat-bütçesi darboğazı olabilir (KURULUS_VEZIR §6 tespiti).
- **Basın S99 SÜZME'ye bağımlı** — S99 bitmezse D1 çalışmaz. Kritik yol.
- **Whisper otonom kuyruk** (E1) yeni bir mekanizma — Sosyal S195+ yükü zaten yüksek. Kuyruğun kurulum-zamanı hasat-zamanına dahil sayılmamalı.
- **SORGU-01 ingest** her hasat için hemen çalışmalı — biriken hasat kanona geçmeden depolama ölçeği kontrol edilmez.
- **KAP bildirim ToS** hâlâ karantina adayı (HASAT-01 §6 riski). Ürüne katma öncesi lisans-teyit.
- **414K → ??? sayacı** = havuz-4× planının **görünür KPI'ı** oldu. Bu tek metrik, tüm CC'lerin bugünkü emeğini toplayacak.

---

## 7. Yayın Kanalı

- **Vezir:** direktif arşivde ✅, takip tablosu §5 hazır
- **Patron:** 6 CC session'ında ilgili satırları yapıştıracak
- **Hafıza:** SORGU-01 sayaç canlı tutacak, her ingest sonrası bildirim

**Vezir devam görevi:** Her tek-satır rapor Desktop'a düştüğü an §5 tablosu satırı güncellenip push. Bu tablo Havuz-4× planının **canlı skoru** olacak.

*HASAT-EMRİ dağıtıldı. Sayaç 414K'dan başladı.*
