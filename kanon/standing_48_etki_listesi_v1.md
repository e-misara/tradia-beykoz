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
| R7 | 2026-09-27 | vaka-durum: "8/8 katman TAMAM · kilit E3 · çay TEYİTLİ · Patron-saha bekleniyor" | vaka-durum: "PARSEL-01: paket dış-devirde · kilit E3 + çay · RG köy listesi İhale'de" | DEVIR_INSAAT_KONUSMASI.md teslim (7 bölüm · 4 etiket · dış-devir ilk ürünü) + Basın 7/7 + dere hüküm + eğim düzeltme (proxy → kesin) |
| R8 | 2026-09-29 | vaka-durum: "paket dış-devirde · kilit E3 + çay · RG köy listesi İhale'de" | vaka-durum: "3. faz SUNUM_PAKETI (3 seçenek A/B/C · 8 blok · 7 CC) · kilit E3 (Tic 2018/97 karar-metni araması) · yeni soru: 18 Eyl Derepazarı seli → afete-maruz-bölge" | SUNUM_PAKETI açılışı (3. faz) + yeni kritik soru (Basın+İhale sel-afet kararı) + Tic'e E3-alternatif görev (2018/97 karar metni bulunursa E3 sahasız kapanır) |
| R9 | 2026-09-30 | vaka-durum: "3. faz SUNUM_PAKETI · kilit E3 · yeni soru sel-afet" | vaka-durum: "SUNUM olgunlaştı · İhale DOKUNMUYOR · Map sel-izi YOK · Tic yasal-zarf 3-senaryo · Finans Rize 3.bölge/EK-5/6M · Arşiv 3/3 · Bürücek=köy KESİN · Sinyal B=(0)" | 30 Eyl dalgası (8 madde): İhale RG 9000 hükmü + Map radar-hakem + Tic yasal zarf 3-senaryo + Finans 9903 BKK + Arşiv 97704f0 + Bürücek kimlik + Sinyal B=(0) + kanon celiski_referans_kanonu_v1 açıldı |
| R10 | 2026-09-30 | idari birim: "TKGM künyesinden çözülecek" (2026-09-26) | idari birim: "Bürücek = KÖY (kaymakamlık idari birim listesi)" | Standing #37 kanonik toplayıcı tablosuna 'idari-ad otoritesi = kaymakamlık' eklenmesi önerisi |
| R11 | 2026-09-30 | vaka-durum: "SUNUM olgunlaştı..." | vaka-durum: "PARSEL-01 → BESLEME FAZI (Tradia'nın ilk iç-müşterisi) · plan-durum BELİRSİZ (e-Plan vs İÖİ pafta) · 5 kalemlik canlı abonelik · GERİ-AKIŞ vaadi aktif" | 🏛️ Tarihi satır: 4. faz BESLEME açıldı · TRADIA_BESLEME_INSAAT_v2.md · ilk iç-müşteri · GERİ-AKIŞ mimarisi (Tradia'nın ilk saha-doğrulama verisi) · DENETİM-2 mühürlü |
| R12 | 2026-09-30 | vaka-durum: "PARSEL-01 → BESLEME FAZI · 5 kalem abonelik..." | vaka-durum: "BESLEME v2 TESLİM (10 bölüm/4-etiket, v1 GEÇERSİZ damgalı) · E7 KAPANDI · konaklama gerçek kapısı 6.2.4 · karıştırma riski · Patron 2-iş" | BESLEME v2 teslim + üç-katman doğrulama zinciri (emsal defteri Vaka #03) + karıştırma riski (Vaka #04) + Patron 2-iş (besleme→sohbet, pafta 3-foto) + SAYAÇ FORMAT DÜZELTMESİ (İLERLEME.md açıldı, üç-sütun zorunlu) |

## 5. Bekleyen iş

- Patron Standing #48 metni onaylayınca bu iskelet formalize edilir
- Rename kaydı bundan sonra her turda `standing_48_etki_listesi_v1.md` §4 tablosuna eklenir (SİLME-YOK)
- Vaka-durum satırı değişiklikleri de rename sayılır (statü ilerlemesi ≠ rename değildir; ancak katman-sayısı/kilit-adı değişiklikleri rename'dir)

*Vezir · Standing #35+#36+#37+#38+#43 + hipotez #48 · 2026-09-26*
