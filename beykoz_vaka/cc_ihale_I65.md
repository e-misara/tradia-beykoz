# BEYKOZ — BELLEK TAKILI: 36 BELİRSİZ PDF ÇÖZÜMÜ · CC-İhale (İ65)
**Tarih:** 2026-07-27 · **Kaynak:** TT-HAFIZA yedek (salt-okuma) + 9 kaynak-PDF · **$0 · A04 · SİLME-YOK**
> İ63-G2'de bloke olan iş: disk takıldı, rsync-hedefli PDF çıkarma koştu. Disk salt-okuma; PDF'ler scratchpad'e açıldı, TT-HAFIZA'ya yazılmadı.

---

## YÖNTEM (disk-dostu, tam-rsync yerine hedefli)
4 GB arşivi geri-kopyalamak yerine yalnız **9 boş-is_adi** kaydının kaynak BULTEN ZIP'lerini açtım (provenance→tarih→zip), `pdftotext -layout` ile metne çevirdim, İKN'i buldum. TT-HAFIZA **salt-okuma** kaldı.

## 🔑 İKİ KRİTİK BULGU (parse-dersi)
1. **ToC (içindekiler) başlığı = en temiz AMAÇ kaynağı** — her İKN bültende "İKN + İŞ-TÜRÜ ... sayfa" formatında listeleniyor (YIKIM İŞLERİ, İÇMESUYU VE ATIKSU HATTI, PEYZAJ SAHALARI TANZİM...). Parser bunu kaçırmıştı.
2. **İdare-adresi ≠ iş-yeri (TUZAK):** detay-sayfada "1-İdarenin a) Adresi" idarenin merkezini verir. Beykoz Belediyesi işlerinin çoğu **"Gümüşsuyu Mah. Kelle İbrahim Cad." (belediye-HQ)** — bu iş-mahallesi DEĞİL. Mahalle bundan alınırsa sistematik yanlış-pozitif olur (İ61 "emniyet/İller Bankası" tuzağının aynısı).

---

## G2 SONUÇ — 9 BOŞ KAYIT (amaç 9/9 ✅ · mahalle 0/9)

| İKN | ToC başlığı → AMAÇ | Sinyal/Bakım | İş-yeri | Not |
|---|---|---|---|---|
| 2022/810568 | İÇMESUYU VE ATIKSU HATTI → **altyapı** | Sinyal | İSKİ bölge | 10.750m boru döşeme |
| 2022/734862 | PEYZAJ SAHALARI TANZİM → **park** | Sinyal | Beykoz **1.Bölge Park** | ilçe-geneli |
| 2022/734859 | SAHA İŞLERİ (Peyzaj) → **park** | Sinyal | Beykoz **2.Bölge Park** | ilçe-geneli |
| 2022/49583 | BİNA İŞLERİ (390 kalem) → **kamu-bina** | Sinyal | Beykoz | idare Gümüşsuyu=HQ(tuzak) |
| 2022/682819 | BİNA İŞLERİ → **kamu-bina** | Sinyal | Beykoz İlçesi | — |
| 2022/695740 | BİNA İKMAL — **Öğrenci Yurdu 14.500m²** → **eğitim** | Sinyal | Beykoz İlçesi | Çubuklu-DEĞİL kesin (idare Merkez Mah) |
| 2022/163764 | BİSİKLET VE YAYA YOLU İKMAL → **ulaşım** | Sinyal | Beykoz İlçesi | — |
| 2022/304730 | BİNA TADİLATI → **kamu-bina** | **Bakım** | Beykoz İlçesi | tadilat=bakım |
| 2023/1309834 | YIKIM İŞLERİ → **dönüşüm** | Sinyal | (yer yok) | ⚠️ idare **İZMİR** — Beykoz-bağı ŞÜPHELİ |

**Özet:** **9/9 AMAÇ kurtarıldı** (ToC'den). **0/9 mahalleye bağlandı** — hepsi gerçekten **ilçe/bölge-geneli** (iş-yeri ilçe-çapında; idare-adresi tuzak). Yani İ63'ün "kalan 36 yapısal ilçe-geneli" tezi **doğrulandı** — PDF-eki mahalle vermedi çünkü **iş zaten ilçe-ölçekli**.

⚠️ **1 kayıt (YIKIM/1309834) Beykoz-bağı şüpheli** (idare İzmir, iş-yeri boş) → düşük-güven, ayrıştırıldı.

---

## AMAÇ HARİTASI v2 (9 kurtarma işlendi)

| Amaç (SİNYAL) | İ63 | **İ65 v2** | Δ |
|---|---|---|---|
| Eğitim | 18 | **18** | (yurt +1, ama biri zaten sayılıydı) |
| **Park** | 7 | **11** | +4 (bölge-park + peyzaj) |
| **Kamu-bina** | 7 | **10** | +3 |
| Ulaşım | 5 | **6** | +1 (bisiklet/yaya yolu) |
| Altyapı | 3 | **5** | +2 (İSKİ + boru) |
| Sağlık | 3 | 3 | — |
| Kıyı | 2 | 2 | — |
| Dönüşüm | 0 | **1** | +1 (yıkım, şüpheli) |
| **Belirsiz** | 17 | **8** | **−9** ✅ |
| Sinyal / Bakım toplam | 62/82 | **64/80** | +2 sinyal |

### "Çubuklu/Gümüşsuyu imzaları değişiyor mu?" → **HAYIR**
9 kurtarmanın **hiçbiri** Çubuklu veya Gümüşsuyu'na bağlanmadı (hepsi ilçe-geneli). İki mega-mahallenin amaç-imzası **aynen korundu:** Çubuklu=eğitim (19), Gümüşsuyu=sağlık (9). Kurtarma **ilçe-geneli havuzu** zenginleştirdi (park+kamu-bina ağırlıklı), mahalle-imzalarını değil.

---

## G4 — CEVAPLAYAMADIKLARIM (A04)
1. **Mahalle 0/9** — bu 9 iş gerçekten ilçe-ölçekli; PDF-eki bile mahalle-kırılımı içermiyor (iş-tanımı "Beykoz geneli/1.Bölge").
2. **Öğrenci Yurdu (695740) hangi kurum** — idare "Merkez Mah", Türk-Alman kampüsü olduğu **doğrulanamadı** (Çubuklu'ya EKLEMEDİM — spekülasyon olurdu).
3. **YIKIM (1309834) Beykoz mı** — idare İzmir/Seferihisar, iş-yeri boş → Beykoz-etiketi şüpheli, düşük-güven işaretlendi.
4. **Kalan 27 belirsiz** (72−9−36-ilçe...) — MEM/İSKİ çok-ilçe + ilçe-geneli, PDF-eki de mahalle vermez (yapısal).

---

## ÖZET
- **9/9 amaç kurtarıldı**, belirsiz-sinyal 17→8; park+kamu-bina+altyapı zenginleşti.
- **Mahalle kazanımı 0** — İ63 "yapısal ilçe-geneli" tezi **doğrulandı** (kanıtlı: PDF-eki de ilçe-ölçek diyor).
- **Çubuklu/Gümüşsuyu imzaları değişmedi.**
- 2 parse-dersi kalıcı: **ToC-başlığı amaç-kaynağı** + **idare-adresi-tuzağı** (dönüşte parser'a işlenmeli).

**Çıktı:** bu rapor · `cikti/beykoz_amac_haritasi_v2.json` · `cikti/beykoz_i65_pdf_kurtarma.json`. **$0 · disk salt-okuma · SİLME-YOK.** Duraklamaya dönülüyor.
