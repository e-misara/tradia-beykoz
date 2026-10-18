> **KANON KOPYASI NOTU (Vezir 18.10):** aslı `02_CC_STATE/gazete_plan_v1.md` (Basın, plan v1.2). Public repo sızıntı kapısı için desen adları kırıldı (`sk-ant[-]` vb.); içerik değişmedi.

# TRA-BASIN · plan v1.2 (Üst Akıl kararları v2, 22:25, işlendi)

**Yazan:** CC-Basın · **Durum:** ONAYLI (Üst Akıl 22:25 kararları uygulandı) · **Güncelleme:** 2026-10-16 22:27 (v1: 21:50; v1.1: kanon v1.2 uyumu; v1.2: Üst Akıl kararları)
**Dosya adı notu:** istenen `gazete_plan_v1.md`; ad TRA-BASIN olunca `tra_basin_plan_v1.md`. İki yola da konur (`02_CC_STATE/gazete_plan_v1.md`, `UST_AKIL_BEKLEYEN/tra_basin_plan_v1.md`). Şablon `tradia-beykoz/kanon/tra_basin_sablon_v1.html` altına konuldu (onaylı); üretici o dosyayı okur, kopya `landgold-agents/scripts/`'te.

## 1. Kimlik ve çıktılar
| Alan | Değer |
|---|---|
| Künye | `TRA-BASIN · Tradia · Türkiye Konum İstihbaratı · sayı N · dd.mm.yyyy · Yayın: Ahmet Çolak` (sayı = 17.10.2026'dan gün sayısı; sayfa başlıklarında kısa form `TRA-BASIN · sayı N · tarih · Tradia`) |
| Üretici | `landgold-agents/scripts/tra_basin.py` · launchd **`com.tradia.ccbasin.trabasin` 08:50** (karar #5; `com.tradia.trabasin` bootout edildi ve plist kaldırıldı; uygulama etiketi `com.tradia.trabasin.app` Hafıza'nın) |
| Veri katmanı | `02_CC_STATE/tra_basin/TRA-BASIN_<tarih>.md` (8 bölüm) + `.json` |
| **Uygulama girdisi (birincil)** | `02_CC_STATE/tra_basin/<tarih>/gazete.json` + `index.json` satırı (Hafıza uygulaması 09:05 okur) |
| Okur ürünü (arşiv) | `TRA-BASIN_<tarih>.html` + `.pdf` (A4, **11 sayfa**, 3 sütun; Patron'a gönderilmez) → `02_CC_STATE/tra_basin/` (bekçi md+pdf arar), `tra_basin/<tarih>/` (Mac), `UST_AKIL_BEKLEYEN/` (+ `.sha256`) |
| Zincir | 08:20 olay alarmı (canli_akis) → 08:40 gece raporu → 08:43 Vezir köşesi → **08:50 gazete** → 09:00 Hafıza kopya → 09:05 bekçi + uygulama |
| Dizgi | krem `#F4F0E8`, kırmızı `#B3242B`, Noto/Liberation serif (Mac'te yoksa Times), sayı kutuları |

## 2. gazete.json (Vezir şeması)
- `mansetler[3]`: `{baslik, alt_baslik, bolge, kanit_sinifi, kaynak}` (alarm kümeleri; aynı olayın başka başlığı tekrarlanmaz; yetmezse ulusal; son çare "ek manşet adayı yok" satırı).
- `makaleler[]`: `{bolge (Beykoz|Kartal|Rize|Ulusal|Köşe), baslik, satirlar[], kanit_sinifi A-D, kaynak[], adres_anahtari?}`: bölge kümeleri, 81 il ulusal, CC satırları (metinde bölge adı geçerse o bölge, yoksa Ulusal), Vezir köşesi.
- `vezir_kose`: 08:50'de `vezir_kose_<tarih>.json` okunur ve **gömülür**; dosya yoksa `{"durum":"TARANMADI"}` + md/pdf'te açık beyan.
- Ek: `bolumler{kunye, son24, cc_satirlari, tecrube, sayilar, kirmizi, patron_adimlari, duzeltmeler}` (kanon §3 sekiz bölüm), `kaynaklar[{yol, sha8}]`, `bos_bolumler[]`, `onizleme`, `kural`.

## 3. Sayfa planı (11 sayfa)
| # | Bölüm | Girdi |
|---|---|---|
| 1 | Manşet + 3 manşet + 8 sayı kutusu + görsel | olay_alarmi_son24.json; `tra_basin_girdi/<gün>/manset_sayilar.json` (Basın elle, kesitli); görsel **yalnız Map 3D ilçe görseli** (kendi üretimimiz) |
| 2 | Bölge: Beykoz, Kartal, Rize (3 sütun) | alarm; Sosyal CSV; Pazarlama `kesit_gunluk.csv`; Tic ve diğerleri **CC satırlarından** |
| 3 | Bölge ayrıntı: son 24 saat tüm yayın kümeleri | alarm |
| 4 | 81 il ulusal | alarm `ulusal` (eşik ≥3 il) |
| 5 | CC satırları (15 birim) | `donus_<cc>_<dün>.md` **`## GAZETEYE GİREN SATIR`** (Vezir sözleşmesi); yoksa "bugün satır vermedi" |
| 6 | Resmî ilan köşesi RG, EKAP, KAP | İhale ve Borsa CC satırları (veya `tra_basin_girdi`) |
| 7 | Piyasa | Finans CC satırları (veya `tra_basin_girdi`) |
| 8 | Takvim, süre dolan, KIRMIZI | `SON_TARIH.json`; Vezir köşesi `kirmizi[]`; `takvim_yarin` |
| 9 | Defter: hata, gece raporu kırmızıları, tecrübe kaydı, düzeltmeler, "ne ölçemedik" | `kanon_ihlali_emsal_defteri.md`, `arsiv/gece_raporu_<tarih>.md`, `tecrube_kaydi/*.jsonl` |
| 10 | Vezir köşesi | `vezir_kose_<tarih>.json` |
| 11 | Arka sayfa: bugün tarihte + Kütüphane künyesi | SORGU-01 `basin_html` (URL'li, aynı gün-ay, 1 ilçe öncelikli); `katalog_sina_v1.json` |

## 4. Kurallar ve uygulaması
1. **Kanıt sınıfı NİHAİ (Üst Akıl 22:25, Vezir tanımı):** A belge/ölçüm · B ≥2 bağımsız kaynak · C tek kaynak · D türetim/başlık düzeyi. **Ayrı alanlar:** `kaynak_turu` (yerel|ulusal|resmî) ve `kanit_turu` (BELGE|HESAP|PROXY). Basın'ın uygulaması: bir satır, sağladığı en yüksek sınıfı alır (A: resmî belge/ölçüm; B: iki ya da daha fazla ayrı yayıncı; C: tek yayıncı); **D = başlık düzeyi (gövdesi okunmamış tek kaynak; Üst Akıl 22:3x: C değil) ya da bizim türetimimiz (HESAP sayımları, "olay yok" beyanları) ya da sınıfsız CC satırı**; C yalnız gövdesi okunmuş tek kaynak. Canlı akış gövde okumadığı için tek yayıncılı kümeler D, iki ya da daha fazla yayıncılı kümeler B. Haber başlıkları `kanit_turu=PROXY`, resmî belge `BELGE`. *Karar netleşti (Üst Akıl): başlık düzeyi tek başına D.*
2. **Sayı disiplini:** her kutuda kaynak, kesit, sınıf; çelişen değerler tek rakama indirilmez.
3. **Yorum yok:** satır = başlık + künye. Gövde okunmuyor (v1).
4. **Telif:** yalnız başlık + yayıncı bağlantısı (GNews bağlantıları çözülür). **Görsel yalnız kendi üretimimiz/açık lisans:** Sosyal ekran karesi **kaldırıldı** (kanon §5); yerine Map 3D görseli. **Kütüphane künyesi kaldırıldı** (karar #4: Misara kataloğu HAYIR); arka sayfa = bugün tarihte + künye kutusu.
5. **Kişi adı (karar #2):** **sayı 1 hiçbir ad ile çıkar** (Basın'ın uygulaması: blok listesi + "Unvan Ad" kuralı; JSON, md ve HTML'in tamamında). **İstisna: künye satırındaki yayıncı adı.** Sayı 2'den itibaren: yalnız resmî sıfatıyla konuşan kamu görevlisi (vali, kaymakam, belediye başkanı, bakan, kurum sözcüsü) "Unvan Soyad" olarak, **beyaz liste `02_CC_STATE/gorevli_listesi.json` (Vezir)**; listede olmayan her ad maskelenir. Kanca kodda hazır (`gorevli_soyadlari()`), dosya yokken ya da sayı 1'de pasif. Sınır: Title Case başlıkta genel kural yok, tanınmayan bir ad geçebilir (Vezir denetimi).
6. **Parsel yok, sır yok:** yayın öncesi **sızıntı kapısı** (pano_yayinla.sh deseni: ada/parsel, sk-ant[-], ghp[_], AKIA, `?key[=]` + koordinat çifti). Eşleşirse **yayın durur**, `hafiza_bildirim_basin_tra_basin_YAYIN_DURDU_<tarih>.json` yazılır, dosya yalnız yerelde `.DURDU.html` kalır, çıkış kodu 3.
7. **Em-dash yok**, **boş bölüm açık:** "tarandı, yok (taranan: ...)" ile "TARANMADI" ayrı; her TARANMADI "Ne ölçemedik" kutusunda ve json `bos_bolumler`'de.
8. **Gece raporunun yerine geçmez:** onu okur (kırmızı satırlar).

## 5. Girdi hattı
- **Birincil sözleşme (Vezir):** her `donus_<cc>_<dün>.md` içinde `## GAZETEYE GİREN SATIR` (1-3 satır, `- <cümle> - [<CC> · <kaynak> · <tarih> · BELGE|HESAP|PROXY · <yol>]`). Basın'ın 16.10 dönüşü yazıldı (`donus_basin_2026-10-16.md`).
- **İkincil (Basın):** `tra_basin_girdi/<gün>/<bölüm>.json` (sayı kutuları ve elle derleme; CC satırı yoksa kullanılır).
- Alarm: `olay_alarmi_son24.json` kanon şemasında; Vezir `gece_raporu.py` eski şeması için geriye uyum anahtarları duruyor.

## 6. Önizleme (16.10 verisiyle, 11 sayfa, `TRA-BASIN_2026-10-17_ONIZLEME.*`)
- **Dolu:** manşet ve 3 manşet, 8 sayı kutusu, Map 3D görseli, Bölge Beykoz ve Kartal (Basın), ulusal 22 il, CC satırları (Vezir + Basın dolu), takvim, defter (U-08, U-09, tecrübe kaydı 10 satır), Vezir köşesi, arka sayfa.
- **Boş, açıkça "taranmadı/satır vermedi":** diğer 13 CC (16.10 dönüşünde bölüm yok), Rize Sosyal/İlan/Kurumsal, Kartal Sosyal/İlan/Kurumsal, RG/EKAP/KAP, Piyasa, "yarın" takvimi, 17.10 gece raporu (08:40 öncesi olduğu için).
- JSON: `mansetler` 3, `makaleler` 29, `vezir_kose` gömülü, `bolumler` 8.

## 7. Riskler
- Basın hattı başlık düzeyi (gövde okunmuyor): satırlar C/B; gövde okuma v2.
- Alarm penceresi 08:20'de biter (24 saat); "dün" tam gün değil.
- Chrome headless PDF 08:50'de (~300 MB, birkaç sn); pil/adaptör kuralı (kural 8) uygulanmıyor.
- Hafıza'nın `tra_basin_app_veri.py` önizleme jsonu ile Basın'ın gazete.json'u aynı yola yazıyor: resmî sayıda **Basın dosyası** esas, Hafıza betiği üzerine yazmamalı.
- U-09: Mac uyuduysa launchd uyanınca koşar; geri yükleme betiği `launchctl kickstart -k gui/$UID/com.tradia.trabasin` taşımalı. Bekçi: son koşu >24 saat KIRMIZI.
- Noto Serif Mac'te yok (Times'la basılır).

## 8. Karar durumu (Üst Akıl 22:25) ve kalanlar
1. Kanıt sınıfı: Vezir tanımı NİHAİ, uygulandı (§4.1). 2. Görevli adı: sayı 1 hiç ad; sayı 2'den beyaz liste (kanca hazır, liste Vezir'de). 3. Şablon kanon/ altında: yapıldı. 4. Misara künyesi: HAYIR, kaldırıldı; yeni künye satırı yapıldı. 5. launchd adı: `com.tradia.ccbasin.trabasin`, eski kaldırıldı.
- **Gazete.json sahibi Basın;** Hafıza'nın önizleme jsonu `gazete_app.json` olarak ayrı kalır.
- **Tecrübe kaydı ilk 20 satır (≥2 kaynak): 17.10 14:00** (Basın borcu).
- Açık: 13 CC'nin `## GAZETEYE GİREN SATIR` bölümü (yarın 08:30).
