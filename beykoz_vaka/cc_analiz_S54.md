# Vaka: Beykoz — CC-Analiz S54 (21-Mahalle İlan Denetimi)

**Sprint:** S54 · **Tarih:** 2026-07-28 · **$0** · **V37** · **Dönem: `S48_UZANTI_2026-Haz-Tem`**

**Kaynak (#21-B):**
- v25 zengin katman: `~/tradia_analiz/data/sahibinden_master_v25_beykoz_zengin_S52.jsonl` (3.293 kayıt)
- TT-AI mahalle listesi: `~/tradia_konusmalar/mahalleler/istanbul/beykoz.json` (45 mahalle)
- Uzantı NDJSON kaynakları (başlık/URL çekimi)

---

## V16 KRİTİK DÜZELTMESİ (İlk-Bulgu → Doğrusu)

**İlk sayım:** 26 mahalle "n=0" görünüyordu → 21 soğuk aday.  
**Sebep:** TT-AI listesindeki mahalle adları unicode combining işaretli (`Ali̇bahadir`, `Anadolu Hi̇sari`, `Ri̇va`), v25'te normal Türkçe (`Alibahadır`, `Anadolu Hisarı`, `Riva`). Ham `Counter` yazım-farklı hesapladı.

**Norm sonrası (str.maketrans + NFKD + ASCII):** 45 mahalleden **sadece 3'ü tamamen boş** (n=0), 2'si <10 (n=5,6). Yani asıl "sıcak-olmayan" 5 mahalle var, gerçek soğuk-21 iddiası düzeltildi.

**Ancak Signals'a "21" kesimi verildiği için** en düşük n'li 21 mahalleyi (TT-AI 45'inin en soğuk üçte biri) denetime aldım.

---

## En Soğuk 21 (Norm sonrası)

| Mahalle | Orij n |
|---|---:|
| Beykoz Merkez | **0** |
| Cumhuriyet | **0** |
| Çiftlik | **0** |
| Kılıçlı | 5 |
| Bozhane | 6 |
| Poyrazköy | 8 |
| Göllü | 9 |
| Anadolu Kavağı | 11 |
| Kaynarca | 13 |
| Öğümce | 14 |
| Alibahadır | 16 |
| Zerzavatçı | 16 |
| Çamlıbahçe | 17 |
| Dereseki | 20 |
| İshaklı | 20 |
| Akbaba | 21 |
| Fatih | 27 |
| Paşamandıra | 28 |
| Görele | 38 |
| Göksu | 40 |
| Polonezköy | 40 |

---

## Denetim Sonuçları

**Yöntem:** v25 her kayıt için (başlık + URL + lokasyon_ust) NORM edilmiş metinde, 21 soğuk mahalle adının word-boundary regex'i ile eşleşme + varyantlar (köy suffix, boşluksuz). Atanmış mahalle FARKLI ise ek_bulgu olarak sayıldı.

### Bulgu Dökümü

| Mahalle | Orij n | Ek | Toplam | Not |
|---|---:|---:|---:|---|
| Beykoz Merkez | 0 | 0 | 0 | Hiçbir varyant başlıkta yok |
| Cumhuriyet | 0 | **8** | 8 | "Cumhuriyet Cad." sokak — mahalle DEĞİL |
| Çiftlik | 0 | **6** | 6 | "Çiftlik evi/arazisi/caddesi" jenerik — mahalle DEĞİL |
| Kılıçlı | 5 | 0 | 5 | |
| Bozhane | 6 | **1** | 7 | 1 gerçek şüphe |
| Poyrazköy | 8 | 0 | 8 | |
| Göllü | 9 | 0 | 9 | |
| Anadolu Kavağı | 11 | **1** | 12 | 1 gerçek şüphe |
| Kaynarca | 13 | 0 | 13 | |
| Öğümce | 14 | 0 | 14 | |
| Alibahadır | 16 | 0 | 16 | |
| Zerzavatçı | 16 | 0 | 16 | |
| Çamlıbahçe | 17 | **2** | 19 | 2 gerçek şüphe |
| Dereseki | 20 | 0 | 20 | |
| İshaklı | 20 | 0 | 20 | |
| Akbaba | 21 | 0 | 21 | |
| Fatih | 27 | **1** | 28 | Cadde adı |
| Paşamandıra | 28 | 0 | 28 | |
| Görele | 38 | 0 | 38 | |
| **Göksu** | 40 | **138** | 178 | "ust=Göksu" olanların "alt=Göztepe" atanması (üst-bölge ≠ mahalle) |
| Polonezköy | 40 | 0 | 40 | |

**Toplam ek bulgu: 157 · Gerçek yanlış-atama şüphesi: ~5** (Bozhane 1 + Anadolu Kavağı 1 + Çamlıbahçe 2 + Fatih 1)

### Gerçek Yanlış-Atama Örnekleri

| ilan_id | Atanmış | Doğrusu (aday) | Kanıt (başlık) |
|---|---|---|---|
| 1274980380 | Tokatköy | **Anadolu Kavağı** | "BEYKOZ ANADOLU KAVAĞI" |
| 1180242535 | Göllü | **Bozhane** | "İstanbul Riva bozhane" |
| 1316069421 | Tokatköy | **Çamlıbahçe** | "Ortaçeşme Çamlıbahçe Mrk Yakın" |
| 1304736868 | Ortaçeşme | **Çamlıbahçe** | "BEYKOZ ÇAMLIBAHÇE MEVKİİNDE" |

### Sokak/Jenerik/Üst-Bölge (yanlış-bulgu, bayrakla)

- **Cumhuriyet Cad.** (8 kayıt) — sokak adı; asıl mahalle Yavuz Selim/Fatih/Çavuşbaşı vd. → **doğru atanmış**, ek_bulgu YANLIŞ-POZİTİF
- **Çiftlik** (6 kayıt) — "çiftlik evi/arazisi" jenerik, mahalle "Çiftlik" değil → yanlış-pozitif
- **Göksu** (138 kayıt) — üst-bölge adı; kayıtlar lokasyon_ust=Göksu, alt-mahalle=Göztepe → **doğru atanmış**, ek_bulgu yanlış-pozitif (Göztepe Göksu'nun alt-mahallesi)

---

## Güncel Mahalle × Tip Sayımı

**Ek bulgular MİNİMAL (gerçek 5 yanlış-atama)** — güncel emsal-v2 tabloları anlamlı değişmedi. Aşağıdaki mahalleler için minimal güncelleme:

| Mahalle | Önceki n | Güncel n (+ek) |
|---|---:|---:|
| Bozhane | 6 | 7 (+1) |
| Anadolu Kavağı | 11 | 12 (+1) |
| Çamlıbahçe | 17 | 19 (+2) |
| Fatih | 27 | 28 (+1) |

Hâlâ n<8 olan mahalleler emsal-v2 yayın eşiğinin altında.

---

## Cevaplayamadıklarım

1. **Signals'ın "21 soğuk mahalle" kesin listesi bilinmiyor** — Signals raporunu okumadan varsayım: TT-AI 45'inin en soğuk 21'i. Signals'ın listesi farklıysa denetim yeniden yapılmalı.
2. **Word-boundary regex "içinde geçen" hepsini yakalıyor** — sokak/mevki/cadde ayrımı manuel bayraklama gerektirdi; automated tanı yok.
3. **Göksu üst-bölge/alt-mahalle karışıklığı** — v25 şemasında `lokasyon_ust` var ama tip-belirsizlik nedeniyle karışım oluyor. Standing önerisi: mahalle hiyerarşisi (semt → alt-mahalle) explicit.
4. **"Beykoz Merkez" mahallesi hiçbir kayıt bulamadı** — TT-AI'da var, sahibinden'de "Merkez" olarak geçiyor olabilir; ad eşleme sözlüğü gerek.
5. **Cumhuriyet Cad.'in gerçek mahallesi** — Yavuz Selim/Çavuşbaşı Çiftlik çeperinde; cadde-mahalle sözlüğü CBS'den istenirse doğru atama yapılabilir (bu tur atlandı, saha bilgisi gerek).

---

## Çıktılar

- **Bu MD:** `~/Desktop/TT-Tüm CC/beykoz_vaka/cc_analiz_S54.md`
- **Denetim JSON:** `/tmp/beykoz_s54/denetim_v2.json` → kanoniğe kopyalanacak `~/tradia_analiz/cikti/vaka_beykoz_S54.json`
- **K24a bildirim (Signals):** `~/tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccanaliz_beykoz_S54.json`

## Disiplin S54
**V16 (ilk sayımda 26 sanılan soğuk → norm sonrası 5, dürüst düzeltme)** · A04 (157 ek bulgunun sadece ~5'i gerçek, yanlış-pozitif dürüst not) · V37 (v24 dokunulmadı) · V11 · #21-B · **dönem etiketi: `S48_UZANTI_2026-Haz-Tem`** · $0 · SİLME YOK
