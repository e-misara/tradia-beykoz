# PROMPT DEFTERİ KANONU v1 — kalıcı dönüş düzeni

**Statü:** 🟢 KANON · Patron direktifi 2026-10-14 · bugün yürürlükte
**Birleştiren:** Vezir · launchd `com.tradia.vezir.prompt_defteri` · her gün **23:00**
**Bağlı:** Standing #38 (launchd), makine_kaynak_kanonu_v1 (log yolu), B11, üretim ölçüsü

---

## CC'nin işi

Üst Akıl promptunu bitiren (ya da durduran) her CC, **aynı gün** şu dosyaya **satır ekler** (silmez, düzeltmez):

`~/tradia_konusmalar/02_CC_STATE/donus_<cc>_<YYYY-MM-DD>.md`

```
| prompt özeti (3-5 kelime) | durum | çıktı yolu | tek satır sonuç | Patron adımı | kapsam |
|---|---|---|---|---|---|
| EVDS kök neden | BİTTİ | ~/tradia-beykoz/arsiv/evds3_kok_neden_2026-10-14.md | H1 doğrulandı, H4 elendi | — | — |
```

- **`<cc>`:** `analiz · borsa · pazarlama · finans · basin · signals · ai · sosyal · ihale · map · tic · kitap · arsiv · hafiza · vezir`
- **durum:** `BİTTİ` · `KISMEN` · `BAŞLAMADI` · `BEKLİYOR→<neyi/kimi>`
- **çıktı yolu:** gerçek dosya yolu (`~` kullanılabilir). Birden çok yol `;` ile ayrılır. Çıktı yoksa `—`.
- **kapsam** (kapsam_kanonu_v1): hasat işinde `n/81`, doğrulama örneğiyse `ÖRNEK`, hasat değilse `—`. Boşsa Vezir CC'nin günlük kapsam oranını yazar.
- **Patron adımı:** yalnız üyelik/anahtar/SMS/ödeme ya da Patron kararı (kaynak_tarama_semasi §2b); yoksa `—`.

## Vezir'in işi (otomatik · 23:00)

Betik `tradia-beykoz/motor/prompt_defteri_birlestir.py`:
1. O günün `donus_*.md` dosyalarını okur → `tradia-beykoz/arsiv/prompt_defteri_<tarih>.md`.
2. **Dosyaya bakar, beyana değil:** satırdaki çıktı yolu diskte yoksa durum **"ÇIKTI YOK (beyan: X, dosya yok)"** olur.
3. Dönüş dosyası olmayan CC → **"BİLDİRİM YOK"** satırı.
4. Sayım (yazan/yazmayan CC, durum dağılımı, beyan-dosya uyuşmazlığı) → `motor/SUREKLILIK.json → bildirim_disiplini`. **Üretim ölçüsüne girer:** bildirim yazmayan CC o gün "dönüş üretmedi" sayılır.
5. Aynı gün Vezir'in elle yazdığı bir defter varsa üzerine yazmaz; `_otomatik` ekli dosya üretir.
6. Push yapmaz. Defter Vezir'in sonraki turunda commit edilir (sızıntı kapısından geçer).

## Patron'a giden

Patron Üst Akıl'a yalnız `arsiv/prompt_defteri_<tarih>.md` dosyasını iletir.

*Vezir · 2026-10-14*
