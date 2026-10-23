# TRA-BASIN v2 · SAYAÇ ŞERİDİ + KARMA GAZETE

**Üst Akıl · 2026-10-23 22:00 · Patron direktifi 21:48**
Patron: "Günlük gazetede normal bir karma gazete alanı istiyorum; üstte sabit olarak ilerlemeyi rakamsal görmek istiyorum: son sunum dosyasında belirttiğimiz veri rakamları ve Beykoz'dan başlayıp her ilçe için olan düzende nerede olduğumuz."
Bağlı: `kanon/gazete_kanonu_v1.md` (v1.5), `kanon/tra_basin_sablon_v1.1.html`, `turkiye_nabiz_duzeni_v1.md` + EK 1, anayasa B13, `motor/ILCE_RAYI.json`, gelişim dosyası v5 (Kısım 1 sayı kutuları).
Bugünkü durum (sayı 7): manşet kutuları boş ("girdi dosyası gelmedi"), 13 bölüm boş, sayfa düzeni hâlâ Beykoz · Kartal · Rize · Ulusal. Gazete Nabız'dan önce tasarlandı; defter artık 81 il veriyor, gazete onu okumuyor.

---

## 1 · SAYAÇ ŞERİDİ (her sayının üstünde, sabit yer, sabit sıra, yalnız sayılar değişir)

Üç kuşak, tek satır yüksekliğinde kutular; her kutuda **değer · ad · fark (önceki sayı → bugün)**. Rakamın kaynağı makine sayımıdır; elle yazılan rakam şeride giremez. Sayım gelmeyen kutu **"ölçülmedi"** yazar, boş kalmaz, eski değer taşınmaz.

### 1A · HAZİNE (gelişim dosyası v5 Kısım 1 rakamları, canlı sayaca dönüşür)

| # | Kutu | v5'teki değer | Sayan birim · kaynak dosya | Sayım sıklığı |
|---|---|---|---|---|
| 1 | Künyeli kayıt | 1,4 mn | Hafıza · `tradia_sorgu.db kayit` | günlük |
| 2 | Resmî istatistik satırı · tablo | 7,6 mn · 331 tablo | Hafıza · tablo/ + Pazarlama/Finans ham il×ay matrisleri | günlük |
| 3 | Kaynak (lisans durumuyla) | 60+ | Basın · `kaynak_evreni_v2` + `makine_kaynak_kanonu` lisans alanı | günlük |
| 4 | İl / ilçe kapsamı | 81 / 973 | Hafıza · `tablo/_kapsam.json` VAR_81 tablo sayısı, `ilce_karti/_ozet.json` | günlük |
| 5 | İmar planı kaydı | 154.198 | Tic · plan arşivi sayımı | günlük |
| 6 | Çevresel etki duyurusu | 125.914 | sahibi dosyada yazan CC (Tic/İhale) · ÇED arşivi | günlük |
| 7 | Merkez bankası serisi | 8.730 | Borsa · EVDS seri kataloğu | haftalık |
| 8 | Kadastro mahalle kimliği | 51.655 | Aİ · evren_agaci + TKGM çapraz (EK1 A3; çapraz bitene kadar "50.528 / 51.655 bekliyor") | günlük |
| 9 | İlçede yabancıya satış | 973 ilçe · ay ay | Pazarlama · `tablo/konut_yabanci_yapi` | TÜİK günü |
| 10 | Kredi ve mevduat | 81 il × 9 çeyrek | Finans · `tablo/finans_il_gostergeleri` | çeyrek |
| 11 | Yerel basın kaynağı | 653 | Basın · yerel RSS envanteri (81 il) | günlük |
| 12 | Ulusal kaynak | 24 → 27 | Basın · `ulusal_kaynak_listesi` | günlük |
| 13 | Birim | 15 | Vezir · `gorevli_listesi` / SUREKLILIK | sabit |

v5'teki bir rakam makineyle sayılamıyorsa kutu kalır, değeri "ölçülmedi (sayaç yok)" olur; sahibi 7 gün içinde sayacı yazar. Böylece sunumdaki her rakamın bir sayacı olur ve sunum ile gazete aynı sayıyı söyler.

### 1B · NABIZ (bugün; Türkiye Nabzı 6 ölçüsü, `akis/olcu_anlik.json` + `nabiz_olcu.py`)

| Kutu | Kaynak |
|---|---|
| Olay defteri satır (son 24 sa) · il/81 | Hafıza `akis/son24.json` |
| Canlı uç n/11 · sessiz: adlar | `akis/_durum.json` |
| Gecikme medyan (saat) | `olcu_anlik.json` |
| Çözüm il % · ilçe % · adres doğruluğu % | `olcu_anlik.json` + `akis/denetim/` |
| Tablo kapsamı: VAR_81 n/13 | `tablo/_kapsam.json` |
| Tetik (bu hafta) | `motor/KUYRUK.json tetikler[]` |

### 1C · RAY (Beykoz'dan başlayan ilçe düzeni, `motor/ILCE_RAYI.json`)

| Kutu | Örnek (bugün) |
|---|---|
| K1 ilçe kartı | 973 / 973 |
| K2 bölge dosyası TAMAM | 1 / 973 (Beykoz) |
| AÇIK ilçeler | Kartal · Rize Merkez · Derepazarı |
| Sıradaki | (ILCE_RAYI sira: ilk BEKLİYOR) |
| Bu hafta +k · haftalık hız | 0 · ölçüm Pzt |
| Tahminî bitiş | ~486 gün (günde 2) |

Kural: **1A sayıları büyür, 1B günlük durum, 1C ilerleme.** Üç kuşak şeritte her gün aynı sırada; şerit yoksa ya da bir kuşak tamamen boşsa Vezir bekçisi KIRMIZI.

---

## 2 · KARMA GAZETE (TÜRKİYE sayfaları)

Beykoz · Kartal · Rize bölge sayfalarının yerine **Türkiye olay defterinden** üretilen gerçek gazete düzeni. Kaynak: `akis/son24.json` (canlı satırlar) + CC "GAZETEYE GİREN SATIR"ları + Borsa/Finans piyasa satırları. Bölge sayfaları ray sayfasına taşınır (§3).

### 2A · Sayfa düzeni (sıra sabit)

| Sayfa | Bölüm | İçerik | Kaynak süzgeci |
|---|---|---|---|
| 1 | **Manşet** | günün en ağır olayı: kanıt A/B, sınıf afet · kamu_karari · sermaye · altyapi öncelikli; il adı başlıkta; manşet karesi (Map/Basın) | defter, `kanit_sinifi in (A,B)` |
| 1 | **Sayaç şeridi** | §1 | |
| 2 | **Gündem** | kamu kararı, siyaset, altyapı (ulusal + il) | sinif ∈ kamu_karari, siyaset, altyapi |
| 3 | **Türkiye'den** (yerel) | il il kısa haber: **her il en fazla 2 satır**, kaynak ili belli; olan iller listelenir, olmayan iller tek satırda "bugün satır yok: n il" | sinif ∈ afet, kaza, altyapi, kamu_karari; il_anahtari TR-NN |
| 4 | **Ekonomi · Piyasa** | Borsa ölçüm satırı (BIST, kur, altın, fonlama, KTF), Finans kıyas satırı, KAP sermaye hareketleri (il ile), TÜİK yayın günü | uc ∈ borsa, finans, pazarlama; sinif ∈ piyasa, sermaye |
| 5 | **Resmî ilan · Plan** | RG ihale ilanları (il × tür), EKAP (varsa), plan askıları (il · ilçe · ne askıda), CB kararları | uc ∈ ihale, tic |
| 6 | **Söylem** | Sosyal: il bazlı söylem/olay (kanal ili), konu başlıkları; kişi adı yok | uc = sosyal |
| 7 | **Ray** (§3) | açık ilçeler, bugünkü ilçe, kart özeti | ILCE_RAYI + ilce_karti |
| 8 | **Birimler · Süreklilik** | CC satırları, KIRMIZI, Patron adımları, düzeltmeler (mevcut bölümler) | donus_* |

### 2B · Satır biçimi
Her haber satırı: **tek cümle yeniden anlatım** (alıntı ≤ 1 cümle, telif) + künye `[il · ilçe? · kaynak · saat · kanıt A/B/C/D · defter id]`. Defter id'si olmayan satır karma sayfaya giremez (CC satırları hariç). Kişi adı kuralı (KVKK #31, görevli beyaz listesi), parsel yok, API anahtarı yok: `gazete.py` çıktı doğrulayıcısı aynen (v1.5 kural kodda yaşar).

### 2C · Seçim ve sıralama
- Manşet puanı = kanıt (A 3, B 2, C 1) × sınıf ağırlığı (afet 3, kamu_karari 3, sermaye 2, altyapi 2, plan_askisi 2, ihale 1, piyasa 1, siyaset 1, soylem 1, kaza 1) × il çözümü (TR-NN 1,5; ULUSAL 1; COZULEMEDI 0,5). Eşitlikte en yeni.
- "Türkiye'den" sayfasında il sırası: olay sayısı azalan; aynı ilden en fazla 2 satır; `sinif=sistem` satırları girmez.
- Boş bölüm beyanı değişmez: "tarandı, yok (taranan: n uç, n satır)" ya da "TARANMADI".
- Başlık düzeyi (D) satırlar yalnız "Söylem" ve "Türkiye'den"e girer, manşete girmez.

---

## 3 · RAY SAYFASI (bölge sayfalarının yeni hâli)
- **Açık ilçeler** (bugün Kartal, Rize Merkez, Derepazarı): her biri için K2 adım durumu (map/ai/basin/tic/ihale/sosyal TAMAM/AÇIK), bu hafta ne yapıldı (CC dönüşlerinden), açık soru.
- **Bugünkü ilçe** (K2 sırasında bu gün açılan): ilçe kartı özeti (K1: nüfus/satış, ihale, askı, olay 90 gün) + "neden bu ilçe" (tetik mi, sinyal puanı mı, sıra mı).
- **Beykoz** TAMAM satırı: "K2 tamam 29.07; K3 vaka; son güncel tarama 16.10" (kısa, her gün aynı).
- Sayfa sonunda ray çizgisi: 973 kutucuk, TAMAM dolu, AÇIK yarım, BEKLİYOR boş (şablon).

---

## 4 · KİM NE YAPAR

| Kim | İş | Teslim |
|---|---|---|
| **Hafıza** | `tra_basin/sayac_<tarih>.json` 08:30 (1A+1B+1C tek dosya; her kutu: ad, deger, onceki, fark, kesit, kaynak_dosya, sayan, durum ölçüldü/ölçülmedi); sayaç sahiplerinden gelen `sayac/<cc>_sayac.json` dosyalarını birleştirir; 1B/1C kendi okur | 25.10 (ilk şerit 26.10 sayısı) |
| **Sayaç sahipleri** (Tic, Borsa, Aİ, Pazarlama, Finans, Basın, Vezir) | kendi kutularının günlük sayaç dosyası `02_CC_STATE/sayac/<cc>_sayac.json` (değer, kesit, kaynak, yöntem); sayaç yoksa "sayaç yok" + 7 gün | 25.10 |
| **Basın** | `gazete.py` v2: şerit render (sayac json), karma sayfalar §2 (defter okur, Haiku/kural yeniden anlatım, çıktı doğrulayıcı), ray sayfası §3; eski bölge sayfaları kalkar; `gazete.json` şemasına `serit`, `turkiye`, `ray` alanları | 26.10 sayısı (sayı 10) |
| **Vezir** | gazete kanonu v1.6 (bu belge), şablon v2 (`tra_basin_sablon_v2.html`: üst şerit 3 kuşak, 8 sayfa yuvası, ray çizgisi), bekçi: şerit var/yok + kuşak boş + karma sayfa satır sayısı; SUREKLILIK `tra_basin` satırına "serit" alanı | kanon/şablon 24.10, bekçi 26.10 |
| **Üst Akıl** | gelişim dosyası 3.13 bölümü v6'da şerit ve karma sayfayı anlatır; v5 Kısım 1 rakamları sayaç kaynaklarına bağlanır | ilk şerit çıkınca |

Geçiş: 24–25.10 sayıları mevcut düzende çıkar, şerit "hazırlanıyor" satırıyla; 26.10 sayısı v2. Sayfa bandı 8–12 korunur.

*Üst Akıl · 2026-10-23 22:00*
