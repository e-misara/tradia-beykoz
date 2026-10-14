# KAPSAM KANONU v1 — varsayılan kapsam Türkiye'nin tamamı

**Statü:** 🟢 KANON · Patron direktifi 2026-10-14 · bugün yürürlükte · V16
**Bağlı:** adres_anahtari_kanonu_v1 (il/ilçe kodu), ham_veri_depolama_kanonu_v1, kaynak_tarama_semasi_v1, makine_kaynak_kanonu_v1 (ağır iş 1 · 02–07 bandı), prompt_defteri_kanonu_v1

---

## Kural

1. **Varsayılan kapsam: 81 il · 973 ilçe · tüm mahalleler.**
2. Bir kaynak il ya da ilçe bazında veri veriyorsa **hasat TAM yapılır.**
3. **Beykoz · Kartal · Derepazarı · Rize · İstanbul yalnız doğrulama örneğidir.** Rapora "örnek satır" olarak girer, **kapsam olarak girmez.**
4. Üst Akıl promptunda "örnek" geçmesi **kapsamı daraltmaz.**
5. Geçerli olduğu yerler: bölge motoru, kaynak taraması, bülten, hücre, hedef kartı, vaka dışı her toplama işi.
6. **İstisna** yalnız Patron kararıyla ve gerekçeyle verilir (ör. vaka dosyası). Gerekçe çıktıda `kapsam_istisnasi` alanında yazılır.

## Uygulama (bugün)

- Bugünkü kaynak taramalarında **ACIK** bulunan her kaynak **81 il tam hasat** olarak yeniden koşulur. Çıktı **il × ay matrisi** olur (satır: `adres_anahtari` = `TR-<il>`; sütun: dönem). Eksik hücre `null` + gerekçedir, 0 değildir. 0 yalnız kanıtla yazılır (ör. Σ il = TR).
- **Ağır iş kuralı geçerli:** tam hasatlar makine kanonuna göre sırayla ve 02:00–07:00 bandında koşar; `02_CC_STATE/agir_is_kilidi.json`.
- **Disk şeması (Hafıza):** `TT-HAFIZA/…/ham/<kaynak>/<il_kodu>/` (il_kodu = 2 hane plaka). Büyük ham diskte; küçük il×ay matrisi Mac birincil (ham veri kanonu).

## Ölçüm

- **Kapsam oranı** = hasat edilen il sayısı / 81 · CC başına · `motor/SUREKLILIK.json → kapsam_orani`.
- Yöntem: CC'nin il düzeyi çıktı dosyalarında il alanı geçen farklı il sayısı. "Geçti" ≠ "hasat edildi" olabileceği için **üst sınırdır**.
- **Prompt defteri:** her satırda **Kapsam** sütunu (`n/81` · `ÖRNEK` · `—`). Kapsamı 81'in altında kalan, örnek dışı bir hasat satırı defterde işaretlenir.

## Bugünkü ölçüm (2026-10-14 · üst sınır)

| CC | İl | Oran |
|---|---|---|
| Pazarlama | 81 | **%100** |
| Borsa | 34 | %42 |
| TT-MAP | 11 | %14 |
| TT-AI | 10 | %12 |
| Finans | 9 | %11 |
| Basın | 8 | %10 |
| Analiz | 2 | %2 |
| Sosyal | 2 | %2 |
| İhale | 2 | %2 |
| Tic | 2 | %2 |

*Vezir · 2026-10-14*
