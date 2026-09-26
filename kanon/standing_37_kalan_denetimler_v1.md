# STANDING #37 · KALAN DENETİMLER

**Tarih:** 2026-09-26
**Statü:** 🟡 İSKELET · denetim henüz yapılmadı, plan aşamasında
**Kanal:** Vezir · $0 · Standing #37 (toplayıcı≠kullanıcı) uyum denetimi

**Kaynak kanon:** MEMORY `standing_37_aday_toplayici_kullanici.md` (v1.13 · 31 kural · Patron onay 2026-07-31)

---

## 1. Kanonik toplayıcı tablosu (Standing #37)

| Kaynak | Toplayıcı CC | Kullanıcı CC (okur) |
|---|---|---|
| EVDS / TCMB | CC-Borsa | CC-Finans |
| KAP | CC-Borsa | CC-Finans, CC-Tic (paylaşımlı) |
| yfinance | CC-Borsa | CC-Finans |
| **KTB (Kültür-Turizm Bakanlığı)** | **CC-Borsa** (2026-09-26 karar · yıllık ritim, S35-36 sonrası) | (Analiz adaylığı kapandı) |
| TÜİK | CC-Borsa + CC-Analiz | herkes |
| AFAD / WorldBank / OSM / Sahibinden | CC-Analiz | herkes |
| RG (Resmî Gazete) | CC-İhale | herkes |
| **RG-CB Kararları** (2026-09-26 eklendi) | CC-İhale (alt-kanal) | herkes |
| Uydu | CC-TT-MAP | CC-Analiz, CC-Signals |
| Sosyal (YouTube/IG) | CC-Sosyal | herkes |
| CKAN | CC-TT-AI + CC-TT-MAP | herkes |
| Meclis | landgold | (belirsiz) |

## 2. Denetim çalışması (bekleyen)

### 2.1 Kaynak-toplayıcı ihlali taraması

**Yöntem:** Her CC dizinindeki kod tabanı taranarak kanon dışı kaynak-erişimi tespit edilir.

```bash
# Örnek: CC-Finans EVDS anahtarı doğrudan çağırıyorsa ihlaldir
grep -rn "evds2.tcmb.gov.tr" ~/finans/  # boş dönmeli
grep -rn "sorgu_01" ~/finans/            # dolu dönmeli (Finans SORGU-01'den okur)
```

**Bekleyen dosyalar:** 15 CC × ~10 grep = ~150 grep · Vezir turunda çalıştırılacak

### 2.2 KURULUS_CC-*.md EK-C sahiplik iddiaları taraması

- ✅ **CC-Finans EK-C sahiplik** 2026-09-26 kapatıldı (Standing #37 ile örtüşme kutulu-geçersiz)
- 🟡 Diğer 14 CC'nin KURULUS dosyalarında benzer sahiplik iddiaları var mı? — DENETLENMEDİ

**Bekleyen liste (Vezir grep):**
```bash
grep -rn "sahipliği\|sahip veri kaynakları\|ana kaynak\|kanonik kaynak" ~/tradia-beykoz/kurulus/
```

### 2.3 Yeni kaynak → Hafıza toplayıcı-ataması disiplini

**Kanon:** Standing #37 gereği yeni kaynak keşfedildiğinde Hafıza toplayıcı-ataması yapar.

**Kalan iş:** 
- KAYNAK-ENVANTER-01 (`~/Desktop/TT-Tüm CC/kaynak_envanter/kaynak_evreni_v1.md`) 44 kaynak listesi Standing #37 kanonik tablosuyla karşılaştırılmalı
- Eksik atama varsa Hafıza'ya bildirilir (Vezir · $0 dispatcher)

### 2.4 SORGU-01 kanon uyumu

- SORGU-01 (`~/tradia_sorgu/`) 10 kaynak / 164.536 kayıt (MEMORY SORGU-01-EK) — hepsi toplayıcı-yolundan mı geldi?
- **KAP toplu JSONL** Borsa'ya soru (mojibake) — hâlâ AÇIK

## 3. Öncelik sırası

1. **KTB toplayıcı kararı** ✅ 2026-09-26 (CC-Borsa) — bu dosyaya kaydedildi
2. **RG-CB-Kararları alt-kanalı** İhale'ye ✅ 2026-09-26
3. Kod tabanı taraması (§2.1) — 150 grep · Vezir turunda
4. KURULUS EK-C taraması (§2.2) — 14 CC
5. KAYNAK-ENVANTER-01 karşılaştırması (§2.3)

## 4. Dürüst-not

**Vezir'in tek bir turda çalıştıramayacağı iş.** §2.1 taraması ~150 grep gerektirir; her CC'nin farklı erişim deseni var (env var, sabit URL, subprocess call…). **Adım-adım**, öncelik sırasıyla, ayrı turlarda yapılır. Bu iskelet checklist görevi görür.

*Vezir · Standing #35+#36+#37+#38+#43 · 2026-09-26*
