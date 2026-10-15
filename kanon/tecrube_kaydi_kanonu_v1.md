# TECRÜBE KAYDI KANONU v1 — adres anahtarına bağlı olay defteri

**Statü:** 🟡 TASLAK → CC'lere dağıtıldı (Patron 2026-10-15 20:30 · Beykoz güncelleme turu) · Vezir kaydı
**Bağlı:** adres_anahtari_kanonu_v1 (v1.2 yürürlükte) · celiski_referans_kanonu_v1 (Σ/null) · Standing #21-A kaynak_kanit · Standing #34 SİLME-YOK · kaynak_tarama_semasi (BELGE/SÖYLEM) · motor/SEMA.md
**Amaç:** "Parsel gösterdik" değil, **"böyle bakıyoruz"**: bir yerde olmuş her şey (yağış, sel, heyelan, yangın, deprem, tahliye, riskli alan, plan askısı, ihale, kapanış, açılış) **adres anahtarıyla** kaydedilir; kayıt, mahallenin **tecrübesi**dir ve mahalle kartına düşer.

## 1. Birim ve anahtar
- Her kayıt bir **adres anahtarına** bağlanır: `TR-34-1185-<evren sıra>` (mahalle). Mahalle çözülemiyorsa `semt_veya_bolge {tur S|B, ad, kaynak}` + ilçe anahtarı `TR-34-1185`. **Çıplak ad = KIRIK** (kanon kural 4). Çözücü: `02_CC_STATE/ad_cozumle.py`.
- Sokak/cadde varsa `yer.sokak`; koordinat varsa `yer.koordinat` **yalnız lokal/private** (parsel_veri_kanonu: public repoya girmez).

## 2. Alanlar (zorunlu ★)
| Alan | Tanım |
|---|---|
| ★ `olay_id` | `TK-<ilçe anahtarı>-<yyyy>-<sıra>` (ör. `TK-TR-34-1185-2026-001`) · numara yeniden kullanılmaz |
| ★ `olay_turu` | `yagis` · `sel` · `heyelan` · `yangin` · `deprem` · `tahliye` · `riskli_alan` · `plan_askisi` · `ihale` · `kapanis` · `acilis` (liste olabilir) |
| ★ `tarih` | ISO `YYYY-MM-DD` (saat varsa `THH:MM`); belirsizse `tarih_belirsiz: true` + aralık |
| ★ `yer` | `{adres_anahtari, mahalle_ad, sokak?, semt_veya_bolge?}` |
| ★ `kaynak_kunyesi[]` | **en az 2 bağımsız kaynak**; en az biri **resmî** (AFAD, İSKİ, belediye, RG, ÇŞB, EKAP) **ya da yerel basın**. Her kaynak: `{ad, url, tarih, sinif BELGE|SÖYLEM, erisim_ts}`. Aynı haberin ajans kopyaları tek kaynak sayılır. |
| ★ `etki` | `{hasar, kapanan_yol[], tahliye_kisi, sigorta_hasari_tl, diger}` — **sayı varsa kesitli** (`deger, kesit, kaynak`); yoksa `null + eksik_gerekce` (Σ kuralı: 0 yazılmaz) |
| `kurum_tepkisi` | `{kurum, eylem, tarih, kaynak}` (kriz merkezi, tahliye kararı, ihale, askı) |
| ★ `kanit_sinifi` | `BELGE` (resmî metin/kayıt) · `HESAP` (bizim türetimimiz, formül yazılır) · `PROXY` (dolaylı gösterge) |
| ★ `ogrettigi` | mahalleye dair kalıcı ders: `dere_yatagi` · `egim` · `altyapi_yasi` · `yapi_yili` · `kiyi` · `orman_siniri` · `erisim` + bir cümle |
| ★ `kontrol_tarihi` | bir sonraki bakış (ISO); geçince **KONTROL YAPILDI/YAPILMADI** satırı zorunlu (öngörü kontrolü dersi: 13/15 kontrol yapılmamıştı) |
| `kesit` | kaydın yazıldığı an · `yazan_cc` · `revizyon[]` |

## 3. Kurallar
1. **Olay silinmez, yalnız üstüne yazılır** (`revizyon[]` ile; eski değer kalır).
2. **Her satır mahalle kartına düşer:** Aİ evren mahalle kaydı `tecrube[]` alanına `olay_id` eklenir (Aİ otorite). **Isı matrisine AYAK olarak GİRMEZ** (Signals SIG39 önerisi KABUL: olay = akış/şok, 11 ayak = stok; ayak eklemek ısıyı takvimle kaydırır). Signals matris hücresine **görsel işaret** basar; olayın etkisi ancak ilgili soru kapandığında **mevcut ayağın verisi** üzerinden dolaylı girer. Tek olay kaynağı bu defterdir (`cikti/olay_defteri.json` ayrı tutulmaz; Signals buradan okur).
3. **Çelişki:** iki kaynak farklı sayı veriyorsa ikisi de yazılır, `celiski: Tür A/B` (celiski_referans_kanonu); toplam tutması eksik satırı 0 yapmaz.
4. **Kanıt sınıfı düşürülemez:** PROXY'den BELGE'ye ancak belge künyesiyle çıkılır.
5. **Zaman:** olayın tarihi haber tarihi değildir; haber tarihi `kaynak_kunyesi.tarih`'te durur (Basın gelecek-tarih dersi).
6. **Sahip:** olayı ilk yazan CC sahibidir; diğer CC'ler kendi eksenini `ek[]` ile ekler (cc_sinir).

## 4. Dosya
`02_CC_STATE/tecrube_kaydi/<ilçe anahtarı>.jsonl` (satır = olay) · Beykoz güncel turu için: `beykoz_guncel_2026-10/<cc>/tecrube_<cc>_kesit-2026-10-16.jsonl`.

## 5. İlk emsal — 14.10.2026 yağış/sel (tur konusu)
Her CC aynı olaya kendi ekseninden bakar; Vezir derler. Basın bölge motoru (15 Eki, GNews) başlıkları: *"Beykoz'a 242 kilo yağış düştü"* (İndigo) · *"Beykoz'da sağanak vurdu: araçlar çamurlu suya gömüldü"* (Yeni Şafak) · *"göle dönen yollarda araçlarında mahsur kaldılar"* (DHA) · *"çok sayıda yol trafiğe kapandı… kriz merkezi kuruldu"* (Dost Beykoz) · İstanbul geneli *"1.277 su baskını, bir ölüm, 15 heyelan"* (Bianet). **Bu başlıklar kaynak künyesi değildir; CC'ler künyeyi (url, tarih, sınıf) kendileri yazar.**

*Vezir · 2026-10-15 20:4x · v1 taslak*
