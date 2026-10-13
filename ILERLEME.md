# İLERLEME (Vezir vaat sayacı)

**Format:** `açılan / kapanan / net · toplam-aktif`
**Zorunlu:** Bu dosyanın açılış sayısından itibaren tüm Vezir turlarında **üç sütun** ayrımı uygulanır (yalnız net-artış YASAK).
**Kanon:** Standing #48 (rename disiplini) + Patron direktifi 2026-09-30

---

## Turlar

| Tur tarihi | Açılan | Kapanan | Net | Toplam-aktif | Hedefe uzaklık | Not |
|---|---|---|---|---|---|---|
| 2026-09-30 (ilk kayıt) | — | — | — | 41 | ölçülmedi (sütun 14 Eki açıldı) | Sayaç formatı bu tur başladı; öncesi retro-hesap yok; toplam-aktif = pano `vaat_takip.kritik` içinde `gecerli` alanı `✅` ile başlamayan kayıtlar |
| 2026-09-30 (BESLEME v2 turu) | +5 | −3 | +2 | 41 | ölçülmedi (sütun 14 Eki açıldı) | Açılan: BESLEME v2, E7, üç-katman zinciri, karıştırma riski, Patron 2-iş. Aynı turda kapanan: BESLEME v2 ✅, E7 ✅, üç-katman ✅ (hızlı-teslim). Toplam-aktif değişmedi (+5−3−2=0; ancak canlı sayım 41 → önceki turda kapanmalar da devrede) |
| 2026-10-11 (4 borç kapatma + KUYRUK) | +6 | −4 | +2 | 43 | ölçülmedi (sütun 14 Eki açıldı) | Açılan: 4 borç kapanış satırı (rev-list, #48 formalize, 14 oturum, KURULUS INDEX) + KUYRUK motoru + ARZ eşlemesi. Kapanan: 4 borç ✅ aynı turda. Vezir'in iç borçlarının temizlenme turu. |
| 2026-10-13 (BM-K ilk sayım + tek kaynak) | +4 | −3 | +1 | 44 | ölçülmedi (sütun 14 Eki açıldı) | Açılan: motor ilk-sayım teslimi (✅ doğdu), dm02 sebep sorusu (Hafıza), SIG32 sapma satırları (Sinyal), BM-K6/K14 boş hücreler. Kapanan: motor teslimi ✅, ARZ eşlemesi ✅, Borsa sayaç çelişkisi ✅ (S51/S52). Canlı sayım: toplam 80 / kapalı 36 / açık 44 (önceki açık 43). |
| 2026-10-14 (süreklilik + hedef kartları) | +6 | −2 | +4 | 48 | Basın: 970 ilçe (3/973 · gerekli 18,7/hafta · bu hafta 3) · diğer 15 CC: hedef beyanı yok → ölçülmedi | Açılan: süreklilik ✅, kapsam ✅, HEDEF_HAVUZU, koşu-damgası, 73-gün-sessiz teşhisi (Hafıza), Basın hedef eğrisi. Kapanan: süreklilik + kapsam teslimi. Canlı sayım 86 / 38 / 48. |
| 2026-10-14 (ek · Vaka #06 sızıntı) | +3 | −1 | +2 | 50 | Basın: 970 ilçe (değişmedi) | Açılan: Patron geçmiş-temizlik kararı, sızıntı kapısı (✅ doğdu), Hafıza süzgeci. Kapanan: sızıntı kapısı. Canlı sayım 89 / 39 / 50. |

## Retro-not (sayaç öncesi)

Bu tablonun ilk satırından **önce** yayınlanan vaat sayaç güncellemeleri **yalnız net-artış** biçiminde yazılmıştı ("27→73"). Retro-ayrım yapılmadı; ilk satırın **toplam-aktif** hücresi (73) canlı bir denetimin sonucudur. Öncesi için detay pano `vaat_takip` bloğundan okunur (`gecerli = "✅ ..."` = kapandı, aksi = açık).

## Kural

- **Hedefe uzaklık** sütunu (14 Eki): yalnız hedefi beyan edilmiş CC için (hedef − bugün). Hedef beyanı olmayan CC için **ölçülmedi** yazılır.

- Her Vezir turu sonunda İLERLEME.md'ye **yeni satır** eklenir.
- Sayı vermeden önce pano `vaat_takip.kritik`'ten `gecerli` alanı `✅ ...` ile başlayanlar SAYIL(kapalı), diğerleri AÇIK. Bu sayım her turun **kanıtıdır** — göz-hesabıyla yazılmaz.

*Vezir · Standing #35+#48 · 2026-09-30*
