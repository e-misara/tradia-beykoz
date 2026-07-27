# VAKA · Beykoz DIŞ-TARAMA AÇIKLARI — CC-Basın S87

**Tarih:** 2026-07-27 · **Rol:** CC-Basın · **$0** · **A04** · **#21-B** · **#24** · **#31 KVKK (iç)**

Hızlı-kapanış tur: 4 iş, terminal-hasat, dürüst kaynak-erişimi raporu.

**Betik:** [`~/landgold-agents/scripts/beykoz_S86B_hasat.py`](../../landgold-agents/scripts/beykoz_S86B_hasat.py) (mevcut)  
**Ham arşiv:** `~/tradia_basin/ham/S86/{csb,planaski,beykozgazetesi}/` (S86-B klasörüne düşüyor)  
**Olay defteri v5:** [`~/tradia_basin/cikti/beykoz_olay_defteri.json`](../../tradia_basin/cikti/beykoz_olay_defteri.json)  
**Bildirim:** [`hafiza_bildirim_ccbasin_beykoz_s87.json`](../../tradia_konusmalar/02_CC_STATE/hafiza_bildirim_ccbasin_beykoz_s87.json)

---

## HASAT İSTATİSTİĞİ (S87)

| Alan | URL | OK | Kapalı | Yorum |
|---|---:|---:|---:|---|
| planaski.ibb.gov.tr | 5 + 4 | 2 | 7 | **JS-form arka-uçlu** (ada+parsel input) direkt-hasat imkansız |
| CSB İstanbul Beykoz-filtre | 8 | 4 | 4 | Filtre-URL çalışmıyor — hepsi genel Duyurular sayfasını döner |
| Beykoz Gazetesi arama | 8 (URL-encode) | 8 | 0 | Tüm sorgular anasayfa listesi döner — **arama işlevi yok** |
| Emlakkulisi | 4 | 0 | 4 | robots.txt disallow (KKL-kalıcı, S86-B) |
| **TOPLAM** | **29** | **14** | **15** | Başarı %48 · ama içerik-anlamlı bulgular sınırlı |

---

## §1 BEY-16 · Çubuklu Riskli Alan A + B Bölgesi

**Aranan:**
- A Bölgesi 18. madde askı tutanağı
- B Bölgesi 149.200 m² riskli alan planları

**Denenen kanallar:**
| Kanal | Sonuç |
|---|---|
| Emlakkulisi `/beykoz-imar-plani` + `/tag/beykoz` | **robots.txt disallow** (KKL-kalıcı) |
| CSB İstanbul `/istanbul-ili-beykoz-ilcesi-cubuklu-mahallesi-a-bolgesi` | HTTP 404 |
| CSB İstanbul `/duyurular/imar-planlari?sayfa=2/3` | OK ama **Beykoz-filtre çalışmıyor** — genel-Duyurular listesi (Esenyurt/Şişli/Kaptanpaşa dahil, Beykoz için Göztepe hariç yok) |
| planaski.ibb.gov.tr | **JS-form** (ada+parsel input) — hasat için form-post JSON gerek |
| Beykoz Gazetesi "Çubuklu riskli" | Arama çalışmıyor |

**Sonuç (A04):** Çubuklu A/B Bölgesi askı tutanakları **basında ve resmi-portallarda direct-erişilir konumda değil**. Kanal-yok. BEY-16 kaynak-erişilemedi durumunda kayıtlı.

**Sonraki adım:** CSB İstanbul filtre-URL keşif · planaski ada+parsel form-post JSON denemesi · Tic-CC İ66/BEY-15 verim eşleştirmesi

---

## §2 BEY-17 · ÇŞB Riva Deresi 6 mahalle askısı

**Aranan:** ÇŞB tarafından askıya çıkarılan Riva Deresi havzası 6-mahalle koruma-planı — hangi 6 mahalle, tarih, plan-türü.

**Denenen kanallar:**
| Kanal | Sonuç |
|---|---|
| istanbul.csb.gov.tr `/riva-deresi` | HTTP 404 |
| csb.gov.tr genel-portal | OK ama Beykoz Riva-Deresi araması yok |
| Beykoz Gazetesi "Riva Deresi" arama | Anasayfa listesi (arama çalışmıyor) |

**Bilinen dış-veri:** Riva Deresi havzası coğrafi olarak **Riva + Poyrazköy + Anadolufeneri + Anadolu Kavağı + Öğümce + İncirköy** hattında akıyor (6 mahalle tahmin). Ancak resmi doğrulama HALA yok.

**Sonuç (A04):** ÇŞB Riva Deresi 6-mahalle askısı doğrudan yakalanamadı. **BEY-17 kaynak-erişilemedi** durumunda kayıtlı. **İ66 envanteriyle birleşim** Tic-CC talebine gitti.

---

## §3 planaski.ibb.gov.tr — MANİFEST-ADAY KEŞİF

**Anasayfa:** `https://planaski.ibb.gov.tr/` (22,720 byte) — *"Askı Plan Uygulaması / İstanbul Büyükşehir Belediyesi"*

**Yapı:**
- Ada + Parsel input form (JS-render arka uç)
- `planaskisms.ibb.gov.tr` alt-domain'e yönlendirme (SMS-abonelik sistemi, 5697 byte)
- 17 toplam link, 3 plan-askı link

**Sonuç (A04):**
- Anasayfa **statik HTML olarak yakalandı** (JS-render değil)
- Ancak Beykoz-ilçe filtreleme veya tüm-plan-liste **form-post JSON gerektiriyor** — direct-fetch YETMİYOR
- **Manifest-aday olarak KAYDA GEÇTİ:** `planaski.ibb.gov.tr` **İstanbul-genel resmi askı organı**; direct-hasat için `POST /api/PlanAskilari` benzeri backend keşif gerekli (S88 borç)

**Değeri (Manifest için):**
- İl-üstü organ (İBB) — İstanbul'un 39 ilçesi için TEK-kanal
- CSB İstanbul (İl Müdürlüğü) + Bel (İlçe) + **planaski (Büyükşehir)** = 3-katmanlı askı-sistemi keşfi

---

## §4 Köseler "imar revizyonu/göç ettirme" açıklaması

**Aranan:** Alaattin Köseler'in imar revizyonu ve göç ettirme konularındaki açıklaması — tarih + kaynak + özet.

**Denenen kanallar:**
| Kanal | Sonuç |
|---|---|
| Beykoz Gazetesi `?s=Köseler+imar` (URL-encode) | Anasayfa listesi döner (arama işlevi çalışmıyor) |
| Beykoz Gazetesi `?s=Köseler+göç` (URL-encode) | Aynı |
| Beykoz Gazetesi `?s=Alaattin+Köseler` (URL-encode) | Aynı |
| Havuz (S86-A tarama) | 2 hit (dunya+yenişafak 2026-07-17 tutuklama), **imar-revizyonu içeriği YOK** |

**Sonuç (A04):** Köseler'in "imar revizyonu/göç ettirme" açıklaması **basında yakalanamadı**. Wikipedia + tutuklama-haberleri "rüşvet ve irtikap" suçlamasına odaklı, imar-revizyonu-tez seviyesinde detay YOK.

**Not (yönetişim bölümü için):** Köseler'in kamuya-açık dava-savunmalarında imar-revizyonu içerikli açıklama varsa arşiv Beykoz Gazetesi'nin JS-arama'sının arkasında; ya da başka kaynakta (T24, Diken, Sözcü, Halk TV özel-röportaj). Sonraki çekilmesi Beykoz Gazetesi arama-alternatif URL formatı denemesi (S88).

---

## §5 CSB İSTANBUL ARAMA-URL SORUNU (yeni-öğrenim)

**Kritik teknik-bulgu:** CSB İstanbul (istanbul.csb.gov.tr) sitesinde 6 farklı Beykoz-filtre URL denedim:

| URL | Sonuç |
|---|---|
| `/duyurular/beykoz` | Genel Duyurular (Beykoz 0 hit) |
| `/duyurular/imar-planlari/beykoz` | Aynı |
| `/duyurular/imar-planlari?sayfa=2` | Aynı |
| `/duyurular/imar-planlari?sayfa=3` | Aynı |
| `/haberler/beykoz` | HTTP 404 |
| `/haberler/beykoz-*` (S86-C-EK) | HTTP 404 |

**Sonuç:** CSB İstanbul'un web-yapısında **URL-tabanlı Beykoz-filtre YOK**. Sadece TAM-URL ile spesifik haber çekilebiliyor (Göztepe 2760/110, Beykoz tapu 306013 gibi bilinen URL'ler). Filtre için ya JS-arama ya da doküman-ID formatı gerekli.

**Yol:** S88'de arama-URL formatı denemesi (`/arama?q=Beykoz`) veya sitemap.xml keşif.

---

## OLAY DEFTERİ v5 — GÜNCELLEME (15 → 17)

| Yeni | Başlık | Durum | Bayrak | Sonraki |
|---|---|---|---|---|
| **BEY-16** | Çubuklu Riskli Alan A + B (18.md + 149,200 m²) | işliyor · kaynak-erişilemedi | **HAFTALIK** | 2026-08-10 |
| **BEY-17** | ÇŞB Riva Deresi 6 mahalle askısı | işliyor · kaynak-erişilemedi | **HAFTALIK** | 2026-08-10 |

**Toplam:** 17 olay · işliyor 14 · yansıdı 2 · söndü 1 · **haftalık 5** (BEY-03, BEY-04, BEY-14, BEY-16, BEY-17)

---

## G6 · CEVAPLAYAMADIKLARIM (S86-B → S87 delta)

### ✅ KAPATILAN
| # | Soru | S87 yanıt |
|---|---|---|
| ✅ (yeni) | planaski.ibb.gov.tr nasıl çalışıyor | JS-form (ada+parsel), backend API gerekli · MANİFEST-ADAY |
| ✅ (kısmi) | CSB İstanbul Beykoz-filtre URL | URL-filtre YOK, tam-doc-URL gerekli |
| ✅ (kısmi) | Beykoz Gazetesi arama işlevi | ÇALIŞMIYOR — tüm sorgular anasayfa döner (?s= parametre backend'de işlenmiyor) |

### ❌ HALA AÇIK (S88)
| # | Soru | Neden | Sonraki |
|---|---|---|---|
| C33 | Çubuklu Riskli Alan A/B tutanakları | Kanal-yok (Emlakkulisi WAF + CSB filtre YOK + planaski JS-form) | Tic-CC İ66 + CSB sitemap keşif |
| C34 | ÇŞB Riva Deresi 6 mahalle tam-liste | Kanal-yok | csb.gov.tr sitemap + Tic-CC İ66 |
| C35 | planaski.ibb backend API keşif | JS-form arkası bilinmiyor | Chrome network-tab veya alternatif ilan-portal |
| C36 | Köseler "imar revizyonu" alıntısı | Beykoz Gazetesi arama çalışmıyor | T24 + Sözcü + Halk TV özel arama |

---

## DÜRÜST SINIR (A04 · #31)

- ★ **4 iş talebinden 4'ü tam-cevap alamadı.** Nedenler HTTP-kod ve JS-render seviyesinde belgelendi.
- **Manifest-aday keşif:** planaski.ibb.gov.tr kayda geçti (İstanbul-genel askı organı). Diğer illere de aynı format (planaski.[il].bel.tr) genişletilebilir mi araştırılacak.
- **Beykoz Gazetesi arama işlevi çalışmıyor:** 8 URL-encode denemenin hepsi anasayfa listesi döndürdü. Bu, S79'dan beri "1 yıl arşiv" varsayımımızı YENİDEN sorgulatmalı — belki arşiv daha derin ama arama çalışmıyor, biz ancak anasayfa+kategori linkleriyle yakalıyoruz.
- **Uydurma yok:** ÇŞB Riva Deresi 6 mahalle spekülasyonu tahminen listelendi (Riva/Poyrazköy/Anadolufeneri/Anadolu Kavağı/Öğümce/İncirköy) ama **doğrulanmadı** (A04 dürüst-not).

---

## §6 SUNUM-ETKİSİ (S86-B → S87 delta)

**Sunum-madde SAYISI değişmedi (hala 13)** ama iki YENİ AÇIK-BORÇ eklendi:
- **BEY-16 Çubuklu Riskli Alan** (149,200 m² · sunum-değer yüksek ama havuz doğrulaması yok)
- **BEY-17 ÇŞB Riva Deresi 6 mahalle** (havza-koruma · sunum-değer orta)

Bu iki madde **doğrulandığında** sunum 15 maddeye çıkacak. Şu-anki durum: "Tic-CC ipucu VAR, CC-Basın havuzu doğrulayamadı" — dürüst-boş kayıt.

---

**Standing:** #8 (2sn+UA+robots) · #17 · #18 · **#21-A/B kaynak-şeffaf** · #22 FIFO · **#24 tr-safe** · **#31 KVKK iç** · **#34 SİLME-YOK**  
**A04** ✅ (4 iş için kanal-yok dürüstçe · manifest-aday planaski kayda geçti) · **$0** ✅ · **SİLME-YOK** ✅  
**BITTI** — Standing #13
