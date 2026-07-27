# Beykoz Mülk Tipi Taksonomisi — CC-Analiz S53

**Kaynak:** v25 zengin katman (3.293 kayıt) · **Sprint:** S53 · **Tarih:** 2026-07-27

**Kaynak öncelik sırası:** `emlak_tipi` (detay-tipinde %25 dolu) → `url_slug` (regex ile daire/villa/arsa vs) → `kategori` (fallback: konut-belirsiz).

---

## Kanonik Taksonomi

### Alt-Tip Sınıfları

| Kanonik | Kapsanan ham değerler |
|---|---|
| **daire** | Satılık Daire, Kiralık Daire, Satılık Yalı Dairesi, Satılık Rezidans* |
| **villa** | Satılık Villa, Kiralık Villa, Satılık Müstakil Ev, (URL: mustakil, tripleks, dubleks) |
| **rezidans** | Satılık Rezidans |
| **yalı-köşk** | Satılık Yalı, Satılık Köşk & Konak |
| **bina** | Satılık Bina, Kiralık Bina |
| **arsa** | Satılık Arsa (+ URL: tarla, zeytinlik, bahçe, imarlı) |
| **ticari** | Satılık İş Yeri, Kiralık İş Yeri (+ URL: dükkan, mağaza, ofis, depo) |
| **turistik** | Turistik Tesis |
| **konut-belirsiz** | Kategori "konut" ama alt-tip URL/emlak_tipi'nde yok |

### Satılık/Kiralık Ekseni

Öncelik: `emlak_tipi` içindeki "Satılık"/"Kiralık" → `url_slug` `-satilik`/`-kiralik`/`-devren` → `kategori` `_sat`/`_kir` fallback.

**Devren:** Kiralık altında sınıflandırıldı (ticari kira devri).

---

## Kayıt Sayısı Dökümü

| Alt-Tip | Satılık | Kiralık |
|---|---:|---:|
| **villa** | **646** | 230 |
| **arsa** | **611** | 18 |
| **daire** | 255 | **508** |
| **ticari** | 71 | 306 |
| **konut-belirsiz** | 183 | 233 |
| **bina** | 98 | 10 |
| **yalı-köşk** | 35 | 3 |
| **rezidans** | 14 | 5 |

**Toplam kanonik sınıflandırılmış:** 3.226 (%98.0)  
**Sınıflanamayan:** 67 (%2.0)

---

## Sınıflanamayan 67 Kayıt

Genel durum: `emlak_tipi=None`, `kategori=diğer`, URL'de tanım yok. Örnek URL'ler:
- `emlak-{sınıfsız-slug}` — jenerik ilan
- `sb2f` boilerplate işaretli olanlar

**A04:** Bu kayıtlar taksonomi dışı — model ve emsalde kullanılmadı.

---

## Arsa Alt-Sınıflaması (Tapu Durumu)

**Satılık arsa 611 kaydından tapu-durumu dağılımı:**

| Tapu | Kayıt | % | Kanonik |
|---|---:|---:|---|
| Müstakil Tapulu | 106 | 17.4 | **temiz** |
| Hisseli Tapu | 29 | 4.8 | **hisseli** |
| Arsa Tapulu | ~ | ~ | temiz |
| Kat Mülkiyetli/İrtifaklı | ~ | ~ | temiz |
| Kooperatif Hisseli Tapu | 2 | 0.3 | hisseli |
| Tapu Kaydı Yok | 8 | 1.3 | kayıt-yok |
| _YOK (dolmamış) | 466 | 76.3 | belirsiz-yok |

**Kanonik ayrım (emsal-v2'de kullanıldı):**
- **temiz** (Müstakil/Arsa/Kat) — 97 kayıt (medyan 33.207 TL/m²)
- **hisseli** (Hisseli/Kooperatif) — 29 kayıt (medyan 29.993 TL/m²)
- **kayıt-yok** — 6 kayıt (medyan 9.722 TL/m²)
- **belirsiz-yok** (dolmamış) — 409 kayıt (medyan 29.091 TL/m²)

---

## Disiplin

A04 (sınıflanamayan dürüst not, kullanılmadı) · V37 (v24 dokunulmadı, taksonomi zenginleştirme AYRI) · #21-B (tüm sayı v25 katmanı kayıt) · $0
