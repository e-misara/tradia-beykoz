# BEYKOZ — CC-Borsa S59: RİVA VİLLA SAYISI TAHKİM + ÇELİKLER KANCASI

**Tarih:** 2026-07-27 · $0 · A04 · **türetme etiketi zorunlu** · SİLME-YOK

---

## S1 — Riva konut sayısı: **870 GERİ ÇEKİLDİ, resmi sayı 776 (KAP birincil)**

### ★ Kesin bağlantı: "Düşler Vadisi" = Beykoz Riva projesi
KAP yapı ruhsatı bildirimleri, projeyi açıkça tanımlıyor:
> *"İstanbul İli, Beykoz İlçesi, Riva Mahallesi, İstanbul Beykoz Riva Arsa Satışı Karşılığı Gelir Paylaşımı İşi **(Düşler Vadisi)** kapsamında, **3202 Parsel**..."*

Aynı parsel (3202 = S57'deki konut parseli). Yani vlog'un "Düşler Vadisi" adı ile benim "Riva" verim **aynı proje** — karıştırma yok, teyit var.

### Resmi bağımsız bölüm sayısı (KAP yapı ruhsatı)
| Bildirim | Tarih | İçerik | Kaynak idx |
|---|---|---|---|
| Yapı Ruhsatı | 2018-09-24 | 3202 parselde **509 adet konut** ruhsatı (14.09.2018) | 709039 |
| Yapı Ruhsatı | 2020-11-09 | +**199 konut** + **68 dükkan** = 267 b.böl. · **"Proje toplam bağımsız bölüm sayısı 776 adet olmuştur"** | 887441 |

**→ Riva Düşler Vadisi resmi toplam = 776 bağımsız bölüm** (509+199 = **708 konut** + **68 dükkan**). *KAP birincil kaynak, türetme DEĞİL.*

### Tahkim sonucu (net)
| İddia | Değer | Durum |
|---|---|---|
| Benim S58 türetmem | 870 üst-sınır (÷200 m²) | **🔴 GERİ ÇEKİLDİ** — keyfi 200 m² varsayımı artefaktıydı |
| Vlog (S206, Sosyal) | 1400 (3 etap) | **🔴 KAP ile UYUŞMUYOR** — 1,8× fazla |
| **KAP yapı ruhsatı** | **776 bağımsız bölüm** | **🟢 RESMİ — kabul** |

**Tutarlılık kanıtı:** Emsale esas inşaat 173.904,44 m² ÷ 776 = **224,1 m²/bağımsız bölüm** — E:0,20 / H:2 kat / max 200 m² taban villa şemasıyla **tutarlı**. Buna karşın vlog'un 1400'ü 124 m²/birim ima eder = apartman yoğunluğu, düşük-yoğunluk villa şemasına **aykırı**. 1400 muhtemelen hatalı veya farklı/genişletilmiş kapsam.

> **Türetme etiketi (A04):** "870" bir TÜRETMEYDİ (÷200 varsayımı), geri çekildi. "776" TÜRETME DEĞİL — KAP yapı ruhsatı metninde harfiyen yazılı. "224 m²/birim" türetme (173.904÷776), yalnız tutarlılık kontrolü için.

---

## S2 — Çelikler izleme kancası: **KURULDU**

Çelikler Taahhüt halka-kapalı (S58) → doğrudan göremem. Kanca: **kote bir firma üzerinden dolaylı görünürlük**.

### İzleme sorgusu (tanım)
Günlük/haftalık KAP taramasında (kote GYO + İnşaat-Taahhüt sektörü öncelikli, gerekirse tüm evren) şu tetikleyiciler:
| # | Tetikleyici | Anlam |
|---|---|---|
| T1 | Bir kote firmanın bildiriminde **"Çelikler"** karşı-taraf (ortaklık / hasılat paylaşımı / arsa devri / iştirak) | Çelikler kote sermayeyle temas etti |
| T2 | Bir kote firmanın bildiriminde **"İncirköy"** (Beykoz) | 117 bin m² arsa kote el değiştirdi/geliştirildi |
| T3 | **11 parselden biri** (251/4, 257/6, 270/2·16·34·42·43, 271/2·6·8, 294/29) | Aynı taşınmaz kote kayıtta |
| T4 | **SISE** Paşabahçe satışı devam/tapu-devir bildirimi (02-26 sonrası) | Satışın kapanış teyidi |
| T5 | **Çelikler'in kendisi** KAP üye listesine girerse (halka arz) | Doğrudan görünürlük açılır |

**Tetik aksiyonu:** `02_CC_STATE/`'e bildirim + `beykoz_vaka/` güncelleme. Sorgu, mevcut kap_cek altyapısıyla ($0, import-only) haftalık koşuya eklenebilir — **yeni cron KURULMADI** (Patron onayına; şimdilik tanım kayıtta).

**Kayıt:** `docs/09-vaka-defteri.md`'ye **İZLEME-01 — İncirköy KAP-kancası kurulu** eklendi.

---

## Cevaplayamadıklarım
| # | Ne | Neden |
|---|---|---|
| 1 | Vlog 1400'ün kaynağı/kapsamı | 3. taraf video; KAP'la çelişiyor, ben KAP'ı esas aldım |
| 2 | Çelikler İncirköy planı | Halka-kapalı; kanca kurulu, tetik bekliyor |
| 3 | Dükkan/konut m² kırılımı (708 konut vs 68 dükkan alan payı) | Ruhsat adet verdi, m²-kırılımı vermedi |

**Join #18:** `mahalle={Çayağzı(Riva), Riva, Tokatköy, Kavacık, İncirköy, Polonezköy}` → Finans F2. Riva=776 b.böl. rakamı Finans'a girer.
