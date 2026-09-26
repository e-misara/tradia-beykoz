# STANDING #48 · ETKİ LİSTESİ (rename disiplini)

**Tarih:** 2026-09-26
**Statü:** 🟡 İSKELET · Standing #48'in **kesin metni Vezir'de değil** (Patron kanonundan gelecek); bu dosya iş-tarafı iskeleti
**Kanal:** Vezir · $0 · Standing #48 (rename) etki analizi

---

## 1. Dürüst-not

Standing #48'in tam metni Vezir'in elinde onaylı olarak **yok**. Patron İnşaat Hattı bağlamında "Standing #48 etki listesi (rename)" beklendiğini bildirdi. Bu iskelet **hipotez** üzerinden inşa edildi: Standing #48 = "kalem-rename disiplini" (dosya/CC/kanon/klasör adı değiştiğinde etki listesi zorunlu).

**Patron doğrulaması bekleniyor:** Standing #48 metni geldiğinde bu iskelet üstünde çalışır.

## 2. Hipotez metin (Vezir tahmini)

> **Standing #48:** Bir kalem (dosya, klasör, CC, kanon başlığı, vaka kodu, sprint numarası, standing) yeniden adlandırıldığında **etki listesi** zorunludur:
> - Rename edilen kalemin **eski adı** (SİLME-YOK · git history'de kalır)
> - **Yeni adı**
> - **Etkilenen dosyalar** (grep listesi)
> - **Geriye dönüş yolu** (rollback komutu)
> - **Bildirilecek CC'ler** (adı geçen dosyaların sahipleri)

## 3. Şablon (Vezir'in her rename işlemi için doldurulur)

```
### Rename kaydı
- Tarih:
- Kalem türü: (dosya / klasör / CC / kanon / vaka / sprint / standing)
- Eski ad:
- Yeni ad:
- Sebep:
- Etkilenen dosyalar (grep):
- Bildirilecek CC'ler:
- Rollback: git revert <sha>
- Etki notu:
```

## 4. PARSEL-01 kapsamındaki rename'ler (bugüne kadar)

| # | Tarih | Eski | Yeni | Etki |
|---|---|---|---|---|
| R1 | 2026-09-26 | PARSEL-01 · İkizdere | PARSEL-01 · Derepazarı | Hafıza uydurma vakası #01; pano+DURUM.json güncellendi (SİLME-YOK) |
| R2 | 2026-09-26 | SIG14 (Sinyal son sprint) | SIG30 | UYANDIR_SINYAL güncellendi (16 sprint izi) |
| R3 | 2026-09-26 | F8 (Finans son sprint) | F21 | UYANDIR_FINANS güncellendi (13 sprint izi) |
| R4 | 2026-09-26 | konum: "Rize / DEREPAZARI (`<parsel-veri redakte>`)" | konum: "Rize / DEREPAZARI (parsel-veri lokal · kanon: parsel_veri_kanonu_v1)" | Parsel-veri kanonu v1 retro-redaksiyon (emsal defteri Vaka #02); eski ham hâl git history'de kalır (SİLME-YOK), tablo public'te redakte |
| R5 | 2026-09-26 | kritik yol: Arşiv (E1 künye) | kritik yol: TT-MAP (MAP42) | E1 zinciri tamam sonrası kritik-yol devri |
| R6 | 2026-09-26 | vaka-durum: "7/8 katman, kilit E3+çay, Patron saha bekleniyor" | vaka-durum: "8/8 katman, kilit E3, çay teyitli" | Tic C10-C12 teslim (2018/97) + Patron saha beyan (çay fiilen var) |

## 5. Bekleyen iş

- Patron Standing #48 metni onaylayınca bu iskelet formalize edilir
- Rename kaydı bundan sonra her turda `standing_48_etki_listesi_v1.md` §4 tablosuna eklenir (SİLME-YOK)
- Vaka-durum satırı değişiklikleri de rename sayılır (statü ilerlemesi ≠ rename değildir; ancak katman-sayısı/kilit-adı değişiklikleri rename'dir)

*Vezir · Standing #35+#36+#37+#38+#43 + hipotez #48 · 2026-09-26*
