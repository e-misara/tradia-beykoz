# BEYKOZ İMAR REJİMİ HARİTASI — CC-İhale (İ66)
**Tarih:** 2026-07-27 · **"Arz kıtlığının HUKUKİ yarısı"** · **$0 · A04**
**Standing #8:** scrape YOK — **görüntüleme-notu düzeyi.** Doğrulama: WebSearch (public plan-duyuruları) + Boğaziçi Kanunu (2960) + CC-Basın S83 meclis (paylaşılan çıktı).
**JOIN:** `mahalle_norm` (#18 üçlü-anahtar: istanbul·beykoz·mahalle) → MAP32 fiziksel tablo.

> **Güven etiketi:** **V**=WebSearch-doğrulandı · **M**=meclis-kararı(S83) · **B**=Boğaziçi-Kanunu/bilgi-çıkarımı (canlı-doğrulanmadı).

---

## 1. DOĞRULANAN PLAN ENVANTERİ (public duyuru)

| Plan | Durum | Kapsam mahalleler | [K] |
|---|---|---|---|
| 1/1000 Boğaziçi Gerigörünüm+Etkilenme KA Revizyon UİP **2.Etap** | ONAYLI (İBB 30.11.2023) + askı 01–02.2024 | Anadoluhisarı·Çubuklu·Göksu·Göztepe·Kanlıca·Kavacık·Yenimahalle | V |
| 1/5000 aynı alan KA Revizyon NİP **1.Etap** | İBB Meclisi ONAYLADI | (Boğaziçi geneli) | V |
| 1/5000 Boğaziçi **2026 askı** | ASKI 31.12.2025–29.01.2026 | Çiğdem·Soğuksu·Çubuklu·Acarlar·Rüzgarlıbahçe·Gümüşsuyu·İncirköy | V |
| Polonezköy KA 1/5000+1/1000 | 2. askı itirazları | Polonezköy | V |

→ **Beykoz imar-rejimi = Boğaziçi Alanı Koruma Amaçlı planları, etap-etap revizyonda, çoğu 2024-2026 askıda.**

---

## 2. BOĞAZİÇİ KANUNU (2960) KUŞAKLARI + FONKSİYON

| Kuşak | Yapılaşma rejimi | Beykoz mahalleleri |
|---|---|---|
| **Öngörünüm** (Boğaz'a bakan ilk kuşak) | En kısıtlı — düşük-yoğun, koruma | Anadoluhisarı·Kanlıca·Çubuklu(kıyı)·Paşabahçe·Beykoz Merkez·İncirköy·Yalıköy·Göksu |
| **Gerigörünüm** | Kısıtlı | Çubuklu(arka)·kuşak-arası |
| **Etkilenme** (en geniş iç kuşak) | Daha esnek | Kavacık·Göztepe·Yenimahalle·Çiğdem·Soğuksu·Acarlar·Rüzgarlıbahçe·Gümüşsuyu |
| **Boğaziçi-DIŞI kuzey** (orman/doğal-SİT) | İmar YOK / koruma | Riva·Poyrazköy·Anadolu Feneri·Bozhane·Polonezköy·Mahmutşevketpaşa·Dereseki·Öğümce·Akbaba·Kaynarca·Alibahadır·İshaklı |

---

## 3. ⭐ ÜÇLÜ TABLO: MAHALLE × PLAN-DURUMU × FONKSİYON × KORUMA (JOIN-anahtarlı)

| mahalle_norm | Kuşak | 1/5000 | 1/1000 | Baskın fonksiyon | Koruma | [K] |
|---|---|---|---|---|---|---|
| anadoluhisarı | öngörünüm | onaylı | onaylı 2.etap | düşük-yoğun konut | Boğaziçi-KA+tarihi-SİT | V/B |
| kanlıca | öngörünüm | onaylı | onaylı 2.etap | konut/yalı | Boğaziçi-KA+tarihi-SİT | V/B |
| **çubuklu** | öngör+gerigör | onaylı+2026askı | onaylı 2.etap | konut + **kampüs(eğitim)** | Boğaziçi-KA | V |
| paşabahçe | öngörünüm | koruma | kısmi | konut + **dönüşüm-baskısı(Şişecam)** | Boğaziçi-KA+eski-fabrika | B |
| beykoz merkez | öngörünüm | koruma | kısmi | konut/ticaret/**kamu(hastane)** | Boğaziçi-KA+tarihi-SİT | B |
| **incirköy** | öngörünüm | **2026 askı** | askı | **arsa/konut-baskısı** (Şişecam denize-sıfır devir) | Boğaziçi-KA | V |
| yalıköy | öngörünüm | koruma | kısmi | konut/kıyı | Boğaziçi-KA | B |
| **kavacık** | etkilenme | onaylı | onaylı 2.etap | **ofis/plaza/ticaret + kavşak** | Boğaziçi-etkilenme(esnek) | V/M |
| göztepe | etkilenme | onaylı | onaylı 2.etap | konut | Boğaziçi-etkilenme | V |
| yenimahalle | etkilenme | onaylı | onaylı 2.etap | konut | Boğaziçi-etkilenme | V |
| göksu | öngör(dere-ağzı) | onaylı | onaylı 2.etap | **rekreasyon/koruma** | Boğaziçi-KA+Göksu-deltası-SİT | V/B |
| çiğdem·soğuksu·acarlar·rüzgarlıbahçe·gümüşsuyu | etkilenme | **2026 askı** | askı | konut (Gümüşsuyu:+kamu) | Boğaziçi-etkilenme | V |
| **tokatköy** | iç | kentsel-dönüşüm | **dönüşüm ONAYLI+YÜRÜRLÜKTE** | **kentsel-dönüşüm(konut)** | 6306 riskli-alan | M |
| çengeldere | iç | belirsiz | **ticari-alan yetki(meclis)** | konut→karma | — | M |
| **riva** | kuzey-kıyı | kısmi | **ticari-alan yetki(meclis)** | konut→karma + **turizm/gençlik-kampı** | doğal-SİT(Riva Deresi Batısı kesin-korunacak) | V/M |
| **ishaklı** | kuzey-iç | tarımsal | **tarım→imar dönüşüm TALEBİ(meclis)** | **tarım→spekülatif** | tarım-arazisi | M |
| polonezköy | kuzey-orman | KA askı-itiraz | KA askı-itiraz | **günübirlik-rekreasyon/turizm** | tabiat-parkı+doğal-SİT | V/B |
| mahmutşevketpaşa·poyrazköy·anadolu feneri·bozhane·dereseki·öğümce·akbaba·kaynarca·alibahadır | kuzey-orman | **YOK** | **YOK** | köy/orman — **imar-belirsiz** | orman+doğal-SİT(+askeri) | B |

---

## 4. RG KAMULAŞTIRMA + MİLLİ EMLAK — İLK ÇEKİM (görüntüleme-notu)

| Kanal | Erişim | İlk-çekim sonucu | Durum |
|---|---|---|---|
| **RG kamulaştırma** | resmigazete.gov.tr (public PDF arşiv) | Public genel-aramada Beykoz **kalkınma-amaçlı** kamulaştırma-parseli çıkmadı; İ64'teki tek iz **Riva Deresi Batısı doğal-sit** (koruma, kalkınma-değil) | Kanal hazır; Beykoz-özel çekim **Patron-manuel** (#8) |
| **Milli Emlak/VGM** | milliemlak.gov.tr/Sale + turkiye.gov.tr (İlan-Filtreleme ilçe=Beykoz) | Portal 5.638 ilan, **Beykoz-filtresi VAR**; canlı-liste **scrape-EDİLMEDİ** (#8) | Filtre-yolu doğrulandı; çekim Patron-manuel |

> **"Başlat" = pipeline-hazırlık + erişim-yolu-doğrulama** düzeyinde yapıldı. Otomatik-hasat #8 gereği YAPILMADI; NAS-dönüşü + Patron-indirme akışıyla canlanır.

---

## 5. 🎯 BULGU — "ARZ KITLIĞININ HUKUKİ YARISI"

Beykoz'un imar-rejimi, arz-kıtlığının **hukuki yarısını** açıklıyor:
1. **Boğaziçi Kanunu kuşakları** (öngörünüm/gerigörünüm/etkilenme) yapılaşmayı sıkı sınırlar — kıyı-bandı en kısıtlı.
2. **Kuzey mahalleler orman + doğal-SİT** → imar YOK/koruma (9 mahalle imar-belirsiz).
3. **Plan-revizyonları etap-etap askıda** (2024-2026) → belirsizlik kendisi arz-frenidir.

**Açılan kapılar (baskı-noktaları):** Tokatköy (kentsel-dönüşüm onaylı) · Kavacık/Çengeldere/Riva (ticari-alan yetki, karma açıldı) · İshaklı (tarım→imar talebi, spekülatif).

**MAP32 JOIN tezi:** `fiziksel-büyüme(MAP) × hukuki-izin(bu tablo) = arz-kıtlığı tam-resmi.` Beklenen kesişim: MAP'in büyüyen mahalleleri (Ortaçeşme/Yalıköy +17p) **koruma-kuşağında** → hukuki-kıtlık fiziksel-büyümeyi baskılıyor, büyüme **kıyı-boşluklarında/koruma-gevşek noktalarda sızıyor** (İ63 "piyasa/kıyı-kaynaklı büyüme" + TT-MAP "köprü-değil kıyı" tezleriyle üçlü-tutarlı).

---

## 6. ⚠️ CEVAPLAYAMADIKLARIM (A04)
1. **1/1000 VAR/YOK kesinliği** — yalnız etap-kapsamındaki ~14 mahalle WebSearch-doğrulandı (V); kuzey-orman mahalleleri "YOK" **çıkarım** (B), e-plan canlı-sorgu #8-gereği yapılmadı.
2. **Parsel-bazlı fonksiyon/emsal** — plan lejantı mahalle-düzeyinde; parsel-emsal e-plan-görüntüleme gerektirir (bu tur yok).
3. **RG Beykoz-kalkınma kamulaştırma** — public-arama negatif; resmigazete.gov.tr tam-arşiv Patron-manuel arama gerektirir (yok-diyemem, aramadım).
4. **Milli Emlak Beykoz canlı-ilan** — filtre var, liste scrape-edilmedi (#8).
5. **S83 meclis ham-json** — CC-Basın özel-dizininde (~/tradia_basin), dizin-kilidi gereği yalnız paylaşılan md'den alındı; 24 kararın tamamı değil kritik-kesit.

---

**Çıktı:** bu rapor + `~/cc_ihale/cikti/beykoz_imar_rejimi.json` (mahalle_norm JOIN-anahtarlı). **$0 · scrape-YOK · A04.** Duraklamaya dönülüyor.
