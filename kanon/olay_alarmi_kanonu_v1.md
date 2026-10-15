# OLAY ALARMI KANONU v1 — "sistem sabah bilmeli"

**Statü:** 🟢 KANON · Patron 2026-10-15 21:1x (Vaka #10) · Vezir kaydı
**Bağlı:** tecrube_kaydi_kanonu_v1 · kaynak_tarama_semasi (BELGE/SÖYLEM, soyad tuzağı, il teyidi) · adres_anahtari_kanonu v1.2 · prompt_defteri_kanonu · Signals SIG39 olay katmanı önerisi (`kanon_onerisi_ccsignals_vezir_olay_katmani_SIG39.json`)
**Emsal (Vaka #10):** 14–15.10.2026 İstanbul seli — Basın bölge motoru 06:11'de Beykoz BM-K5'te 5 sel başlığını tutuyordu (süzgeçli 1), Kartal 11; **08:40 gece raporunda tek satır yok**. Kök neden: Basın **arşiv modunda**, canlı olay alarmı **tanımsız**; gece raporunda OLAY bölümü yoktu.

## Kural
1. **Gece raporu zorunlu bölüm — "SON 24 SAAT OLAYLAR":** kapsam **Beykoz · Kartal · Rize (Merkez + Derepazarı) + 81 il ulusal**. Üç durum: olay varsa satırlar; boşsa **"tarandı, olay yok"** (taranan kaynak sayısı ile); taranmadıysa **🔴 TARANMADI** (üretim ölçüsünde kırmızı).
2. **Kaynak hattı:** Basın `02_CC_STATE/olay_alarmi_son24.json` dosyasını **her gün 08:20'ye kadar** yazar: `{kesit, taranan_kaynak_sayisi, kapsam[], olaylar[]}`; olay = `{adres_anahtari, ilce, olay_turu, baslik, kaynak, url, yayin_tarihi, sinif BELGE|SÖYLEM, etki_ozeti?}`. **Sosyal aynı hatta bağlanır:** resmî hesap paylaşımları (AFAD, İSKİ, valilik, belediye, AKOM) `kaynak_tipi: resmi_hesap` ile aynı dosyaya `ek[]`.
3. **Vezir ikincil hat:** dosya yoksa ya da bayatsa gece raporu `bolge_basin.json` BM-K5 (afet) süzgeçli örneklerinden son 24 saati okur ve **"İKİNCİL (Basın hattı yok)"** damgasıyla yazar — bilmemek yerine az bilmek. Üretim ölçüsünde yine kırmızı.
4. **Olay türleri** tecrube_kaydi kanonuyla aynı liste; alarm eşiği: **kapsam ilçesinde ≥1 süzgeçli afet/tahliye/kapanış haberi** ya da ulusal ≥3 il. Eşik yazılıdır, haber sayısıyla değişmez.
5. **Olay → tecrübe kaydı:** alarmda görünen her olay 48 saat içinde `tecrube_kaydi/<ilçe>.jsonl`'e ≥2 kaynakla düşer (sahip Basın; Sosyal/İhale/Map ek). Düşmeyen olay gece raporunda **"kayda geçmedi"** sayılır.
6. **Tarih = yayın tarihi** (metin yılı değil); 24 saat penceresi `yayin_tarihi`'ne göre.
7. **İlk 20 satır:** tecrübe kaydı Beykoz defterinin ilk 20 satırı **bu selden** gelir (Patron). Vezir 10 taslak satır tohumladı (tek kaynak, `TASLAK`); Basın ≥2 kaynakla tamamlar.

*Vezir · 2026-10-15 20:52*
