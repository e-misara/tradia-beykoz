# CC-KASA — TAM KAPSAM ÖZ-ANALİZ (v1)

> **Tarih:** 2026-07-13 · **Kapsam:** S1 → S20 · **Bu sprint:** yalnızca analiz, yeni özellik YOK ($0)
> **KASA nedir:** Tradia'dan **AYRI**, bireysel-kapalı bir "siber kasa" + psikolojik-finansal danışman.
> İki omurga: **katarsis** (Yaz-Yak, sıfır-log) ve **miras** (Vasiyet + Karar Değiştirme Süresi).
> Şerit: `~/misara/kasa/` — kendi izole alanı. Yapı: build-free PWA (framework YOK), $0 bütçe.
>
> ⚠️ **A04 dürüstlük notu:** Aşağıdaki güncel sayılar (11 test paketi, 190 assertion, 24 commit, 11 ADR)
> gerçek repo taramasından. Sprint-başına *tarihsel* assertion anlık-görüntüleri korunmuş bir defterden
> gelmiyor; commit kapsamından geri-inşa edildi ve öyle işaretlendi.

---

## 1. BAŞLANGIÇ — S1'de ne vardı

S1 (`e66e30c`) bir **iskelet + anayasa** teslimiydi, çalışan ürün değil.

| Öğe | S1 durumu |
|-----|-----------|
| Repo | `~/misara/kasa/` — `app/` (PWA kabuğu), `docs/adr/`, `tests/`, `backend/` yer-tutucu |
| STACK | Pure HTML/CSS/JS + Service Worker + Web Crypto API. **Build adımı YOK**, framework YOK |
| KAPSAM-kilidi | MVP = "güvenli çekirdek": Yaz-Yak + Vasiyet. Malvarlığı/değerleme/noter → **Faz-2'ye kilitlendi** |
| İlk ADR'ler | **ADR-01** (şifreleme+silme = crypto-shredding), **ADR-02** (gazete/gösterge guardrail — ertelendi), **ADR-03** (ölüm-doğrulama — yalnız TASARIM) |

**O gün "çalışıyor" muydu, "ayakta duruyor" muydu?** → **Ayakta duruyordu.** Manifest + SW + boş kabuk açılıyordu; hiçbir kripto/veri akışı henüz *kanıtlanmamıştı*. "Çalışan" ilk parça S2'de geldi.

---

## 2. ZAMAN-ÇİZELGESİ — sprint sprint ne kanıtlandı

| Sprint | Teslim | Kanıtlanan | Devreye giren motor |
|--------|--------|-----------|---------------------|
| **S1** | İskelet + ADR-01/02/03 + PWA kabuğu | (yapı) | — |
| **S2** | Yaz-Yak (sıfır-log) + kripto çekirdeği | **crypto-shredding**: anahtar yok→veri geri-dönülemez | Node |
| **S3** | Vasiyet çekirdeği + Karar Değiştirme Süresi | KDF'li mühürleme + kalıcı shred; ADR-04/05 | Node |
| **S4** | Kalıcılık kanıtı | **Gerçek Chrome**'da process-restart sonrası veri kaldı; ADR-06 doğdu | **Chrome (gerçek)** |
| **S5** | Zarf şifreleme / varis (ADR-07) | Multi-recipient key-wrapping (DEK/KEK) iki motorla | Node + **Python** |
| **S6** | KDF kanonikleştirme + CSP/DEK sertleştirme | TR-locale veri-kaybı fix; determinizm | Node + Python |
| **S7** | canonVersion + seal-time guard (ADR-09) | 3 motorla determinizm + CSP negatif test | Node + Python + **Apple JSC** |
| **S8** | Backend çekirdeği (YEREL, ADR-10) | Opak ciphertext-kasası + güvenilir saat | **Miniflare/workerd** + D1 |
| **S9** | Auth perimetresi + seal-stamping (yerel) | İmzalı istek; sunucu-damgalı `sealAt` | Miniflare |
| **S10** | Paroladan deterministik imza anahtarı | Cihaz-kaybı bağışıklığı + anti-replay nonce | Node + Miniflare |
| **S11** | Onboarding (zorunlu yaz-yak karşılama) | Backend-siz görünür ürün | Chrome |
| **S12** | Üyelik akışı + per-user salt | Rainbow-table fix (kimlik-türevli tuz) | Node |
| **S13** | Parola gücü zorlaması + vasiyet oturum-cache | Deploy-öncesi son yerel sağlamlık | Node + Chrome |
| **S14** | İlk deploy hazırlığı (Cloudflare Pages) | Statik frontend paketi + iOS checklist | — |
| **S15** | Gerçek-kullanım UX + bilgi mimarisi | Çekirdeğe DOKUNMADAN kabuk | Chrome |
| **S16** | **Backend GERÇEK Cloudflare'de CANLI** 🎯 | 8/8 canlı doğrulama (Worker + D1 + R2) | Miniflare + gerçek URL |
| **S17** | Frontend ↔ Backend bağlama | Remote=hakikat, IndexedDB=cache (DualAdapter) | Miniflare + Chrome |
| **S18** | Giriş hub + vasiyet kilit ekranı | Çok-hesap akışı + gerçek-kullanım düzeltmeleri | Chrome |
| **S19** | Premium redesign (build-free) | Tema motoru; çekirdek DOKUNULMADI | Chrome |
| **S20** | Gerçek görsel + tema tamamlama + UX | 4 WebP entegrasyonu; hash korundu | 5 motor (regresyon) |

---

## 3. ÇALIŞMA YOĞUNLUĞU

**Güncel test envanteri (bugün fiilen koşan):**

| Paket | Assertion | Motor |
|-------|-----------|-------|
| node_crypto | 8 | Node V8 |
| node_envelope | 19 | Node V8 |
| node_will | 28 | Node V8 |
| node_determinism | 29 | Node V8 |
| node_canonversion | 14 | Node V8 |
| node_wiring | 8 | Miniflare |
| **backend** | **47** | Miniflare/workerd + D1 |
| py_envelope_crossproof | 8 | Python `cryptography` |
| py_canon_crossproof | 6 | Python |
| jsc_canon | 6 | Apple JavaScriptCore |
| browser_persistence | 17 | Gerçek Chrome |
| **TOPLAM** | **190** | **5 motor** |

- **En yoğun kanıt üreten eşik: S5–S8.** Zarf şifreleme (S5) crypto çekirdeğini 2. motora (Python) taşıdı; S7 3. motoru (Apple JSC) ekledi; S8 backend paketini (bugün 47 assertion) doğurdu — tekil en büyük paket. Yoğunluk zirvesi kripto+backend omurgasının kurulduğu bu banttadır.
- **Sprint-başına iş büyüklüğü eğrisi:** S1–S3 mimari-ağır/az-assertion → S4–S10 kanıt-patlaması (motor sayısı 1→5) → S11–S15 UX/kabuk (çekirdeğe dokunmadan) → S16–S20 entegrasyon + cila. Yani ağırlık **"kanıt üretme"den → "kanıtı bozmadan ürünleştirme"ye** kaydı.
- ⚠️ *Tarihsel* per-sprint assertion sayıları (ör. "S5=75") korunmuş bir ledger'dan değil; yukarıdaki 190 bugünkü gerçek toplamdır (A04).

---

## 4. OTOMATİKLEŞEN YAPI

**Kendiliğinden koşan (disiplin haline gelen):**
- ✅ **Çok-motorlu doğrulama**: aynı kripto sözleşmesi Node + Python + Apple JSC + Chrome + Miniflare'de çapraz-kanıtlanıyor. Tek komutla 190 assertion / 5 motor.
- ✅ **Çekirdek-hash muhafızası**: her sprint sonunda `crypto.js / envelope.js / will-core.js / worker.js` md5'i sabit referansla karşılaştırılıyor — "çekirdeğe dokunmadım" iddiası **makine-doğrulanıyor** (S20'de yine AYNI çıktı).
- ✅ **Gerçek-tarayıcı kalıcılık** (browser_persistence, 17) ve **gerçek-D1 backend** (47) — mock değil.

**Hâlâ manuel / backend-bekleyen:**
- ⚠️ **Canlı sayaçlar placeholder** — ana ekrandaki ömür/geri-sayım göstergeleri gerçek veriye bağlı değil (A04: sahte rakam gösterilmiyor, "yakında" durumu).
- ⚠️ **Ölüm-tetiği YOK** — vasiyetin "vefat sonrası teslim" mekanizması tasarım (ADR-03/11), kod değil. Şu an teslim tetiklenemez.
- ⚠️ **iOS/Safari gerçek-cihaz testi YOK** — Apple JSC motoru kripto'yu doğruluyor ama gerçek Safari PWA (ITP/eviction davranışı) hiç test edilmedi.
- ⚠️ **CI yok** — testler tek-komutla koşuyor ama otomatik tetikleyici (git hook/CI) kurulmadı; "koş" kararı hâlâ insan.

---

## 5. ANAYASAN — ADR + KAPSAM disiplini

**11 ADR. CC'nin (benim) aldığı vs. Patron onayı bekleyen:**

| ADR | Konu | Statü | Kim |
|-----|------|-------|-----|
| 01 | Şifreleme + silme (crypto-shredding) | Kabul (S1) | CC |
| 02 | Gazete/gösterge guardrail | Kabul — **ertelendi** | CC |
| 03 | Ölüm-doğrulama | Kabul — yalnız **TASARIM** | CC |
| 04 | Passkey/WebAuthn erteleme | Kabul (S3) | CC |
| 05 | Anahtar türetme (KDF) | Kabul (S3) | CC |
| 06 | Kalıcılık katmanı (backend şart) | **Öneri — Patron onayı** | ⏳ Patron |
| 07 | Zarf şifreleme | Kabul (S5) — 2 motor | CC |
| 08 | KDF kanonikleştirme | Kabul (S6) — 3 motor | CC |
| 09 | canonVersion + seal-guard | Kabul (S7) — 3 motor | CC |
| 10 | Backend çekirdeği | Kabul (S8) — yerel kanıtlı | CC |
| 11 | Kimlik + varis + erişim | **Tasarım (S9)** — sahip-auth kuruldu, varis-erişim/Passkey/kurtarma tasarlandı-kurulmadı | ⏳ Patron |

**Dürüst karar-kayması (A04):** ADR-06 **birincil olarak Supabase** önerdi (hazır RLS + Auth). Ama S16'da fiilen **Cloudflare (D1+R2) — ikincil seçenek** deploy edildi. Edge-gecikme/blob-maliyeti lehine sapıldı; bu sapma ADR-06'da resmî güncelleme olarak **henüz yazılmadı** → borç.

**KAPSAM-kilidi zamanla:**
- **Daraldı/korundu:** MVP hep "güvenli çekirdek" kaldı (Yaz-Yak + Vasiyet). Malvarlığı modülü, aylık değerleme, noter → S1'den beri **Faz-2'de tutuldu**, sprint-içi genişlemeye izin verilmedi. Kasa ekranı bugün bile dürüst "yakında" önizlemesi.
- **Genişledi:** yalnız *altyapı* yönünde — backend (ADR-06/10, S8→S16 canlı), çok-hesap kimlik (S12/S18), tema/görsel cila (S19/S20). Ürün *özellik* yüzeyi genişlemedi; *sağlamlık* derinleşti.

---

## 6. TAM KAPSAM (bugün) — MVP "güvenli çekirdek"

| Bileşen | Durum | Not |
|---------|-------|-----|
| **Yaz-Yak** (katarsis, sıfır-log) | ✅ | RAM-only, yakınca null-overwrite; crypto-shredding kanıtlı |
| **Vasiyet + Karar Değiştirme Süresi** | ✅ | KDF-mühür + grace penceresi + sunucu-saati damgası |
| **İstemci şifreleme** (AES-GCM 256, PBKDF2 600k, HKDF) | ✅ | 5 motorla çapraz-kanıt; sunucu düz-metni ASLA görmez |
| **Backend** (opak blob + güvenilir saat) | ✅ CANLI | Cloudflare Worker + D1 + R2; CORS spesifik-origin |
| **Kimlik / çok-hesap** | ✅ | Per-user salt, deterministik imza anahtarı, /register tekillik |
| **Erişim / Varis** | ⚠️ | Zarf-wrapping var, **ölüm-tetiği YOK** → teslim mekanizması eksik |
| **Kapsül-5** (5. sır tipi) | ⏳ | Kapsam-dışı / bekliyor |

**Faz-2 backlog:** malvarlığı modülü (mülk/araç/altın/belge), aylık değerleme motoru, noter/e-imza/KEP yasallaştırma, gazete-guardrail (ADR-02), Passkey (ADR-04).

**Risk defteri (güncel):** repo'da müstakil `risk.md` **yok** — riskler ADR'lere gömülü. Bu başlı başına bir açık: dağınık risk kaydı, tek panoya toplanmamış. Bilinen açık riskler: (1) ölüm-tetiği eksik, (2) iOS/Safari ITP eviction test edilmemiş, (3) varis-yolu sır-gücü zayıf, (4) ADR-06↔S16 karar-kayması belgelenmemiş, (5) CI yok. → **Öneri: `docs/RISK-DEFTERI.md` müstakil dosya (gelecek sprint).**

---

## 7. GERÇEK-MALİYET DÜRÜSTLÜĞÜ (envanter, savunma değil)

"$0 bütçe" bugüne kadar **gerçekten $0**: Node/Chromium/Python/Miniflare ücretsiz dev-araç; Cloudflare free-tier'da canlı. Ama neyi **öteledik**:

| Kalem | Bugün | Ne zaman gerçek maliyet olur |
|-------|-------|------------------------------|
| **Backend free-tier** | Cloudflare Workers/D1/R2 ücretsiz | Kota-duvarı: D1 okuma/yazma + R2 depolama büyüyünce. **Uzun-vade $0'a en yakın aday Cloudflare** (ölçeğe-sıfır, duraklatma yok). **Supabase** free projeleri **inaktivitede duraklatılır** — "ölüm sonrası teslim" senaryosuyla **doğrudan çelişir**, bu yüzden ADR-06 önerisinden fiilen sapıldı. **Neon** ölçeğe-sıfır ama Auth ek-iş. → Cloudflare seçimi maliyet-dürüstlüğü açısından savunulabilir. |
| **Noter / e-imza / KEP yasallaştırma** | YOK (Faz-2) | **Kesinlikle ücretli.** Vasiyetin hukuki bağlayıcılığı istendiği an devreye girer — işlem-başı ücret. $0 mümkün değil, açıkça öyle. |
| **Passkey/WebAuthn** (ADR-04 ertelendi) | Ertelendi | Parasal değil ama **kaynak-maliyeti**: gerçek-cihaz testi = Patron zamanı + cihazı. |
| **iOS gerçek-cihaz** | Hiç test edilmedi | Yine Patron zaman/cihaz maliyeti; Apple Developer hesabı gerekirse ($99/yıl) parasal. |

**Özet:** yazılım tarafı gerçekten $0 ve öyle kalabilir (Cloudflare). Ama **yasallaştırma** ve **gerçek-cihaz doğrulama** ötelenmiş gerçek maliyetlerdir — "$0" bunları kapsamıyor, örtmüyoruz.

---

## 8. V16 DÜRÜST — 3 en büyük hata/risk + 3 en büyük kazanım

### En büyük 3 hata/risk
1. **Ölüm-tetiği yok** — ürünün çekirdek vaadi ("vefat sonrası teslim") kod olarak YOK, sadece tasarım (ADR-03/11). Vasiyet mühürlenir ama teslim tetiklenemez. En büyük fonksiyonel boşluk.
2. **iOS/Safari hiç test edilmemiş** — hedef kitle iPhone; Safari ITP 7-gün eviction'ı tam da bu ürünü çökertebilir (ADR-06'nın yüzleştiği risk), ama gerçek Safari'de hiç koşmadı. Backend kalıcılık bunu hafifletir; yine de doğrulanmadı.
3. **Varis-yolu sır-gücü zayıf + risk defteri dağınık** — varis erişim sırrı zayıf tasarlanabilir; ayrıca riskler tek panoya toplanmadı (ADR'lere gömülü), ADR-06↔S16 karar-kayması belgelenmedi.

### En büyük 3 kazanım
1. **Crypto-shredding kanıtlandı** — anahtar imhasıyla verinin geri-dönülemez yok oluşu 5 motorda çapraz-doğrulandı. KVKK-uyumlu "unutulma" modelinin sağlam temeli.
2. **Çok-motorlu test disiplini** — 190 assertion / 5 bağımsız motor (Node, Python, Apple JSC, gerçek Chrome, Miniflare/D1). Tek-implementasyon körlüğüne karşı gerçek sigorta.
3. **Çekirdek-hash muhafızası** — "çekirdeğe dokunmadım" iddiası her sprintte makine-doğrulanıyor; UX/cila sprintleri (S15/S19/S20) kripto omurgasını kanıtlı biçimde bozmadan geçti.

---

*Üretim: yalnız analiz sprinti — hiçbir kod/özellik değişmedi ($0).*
