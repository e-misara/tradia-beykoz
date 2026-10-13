# MAC DİSK PLANI v2 · PATRON ONAYINA

**Üreten:** TT-ARŞİV · **Tarih:** 2026-10-14 · **Önceki:** [`arsiv_plan_disk_tasima_2026-09-03.md`](arsiv_plan_disk_tasima_2026-09-03.md) (v1, yalnız görseller; yerini bu belge aldı)
**Statü:** 🟡 **ÖNERİ.** Hiçbir dosya taşınmadı, silinmedi. Her kalemi **sahibi CC** uygular; TT-ARŞİV başkasının verisine dokunmaz.

---

## 1) Bugün — ölçüldü

| | Değer |
|---|---:|
| Mac veri bölümü | 228 GiB |
| Dolu | 185 GiB (%93) |
| **Boş** | **15 GiB** |
| Boş alan 2026-08-27 | 26 GiB |

## 2) 🔴 Düzeltme — düşüş sürekli değil, TEK OLAY

Hedef kartında "7 haftada −9 GiB, bu hızla Ocak ortasında dolar" yazdım. **Yanlış.** Ölçüm:

- Borsa'nın turizm hasadı (`~/Desktop/tradia/cc_borsa/turizm_hasat/`) **9,08 GiB, tamamı 2026-10-13'te** indi (KTB konaklama 3,9 · sınır 2,2 · deniz-yat 1,9 · tesis 1,0 GiB; tek PDF 120-157 MB).
- Yani 26 → 17 GiB düşüşünün neredeyse tamamı **bir günlük bir hasat**. Doğrusal tahmin anlamsız.

**Asıl risk daha acil:** 15 GiB boşken **benzer büyüklükte ikinci bir hasat diski doldurur.** Disk dolarsa SQLite yazımları (SORGU-01 3,9 GB, Basın gövde, Kitap gövde) yarıda kesilir.

Şu an sürenler: TT-MAP `turkey-latest.osm.pbf` iniyor (02:14'te 428 MB, büyüyor) · `tradia_sorgu.db` 3,9 GB.

## 3) Diski kim dolduruyor — ölçüldü

| Kalem | Boyut | Sahip | 27 Ağu'dan beri değişen | Not |
|---|---:|---|---:|---|
| `~/tradia_basin/ham` | **34 GiB** | Basın | 0,08 GiB | durgun; TT-HAFIZA aynası 10-12'de **yarıda kesildi** (rsync rc=23 "Device not configured") |
| `~/Library` | 32 GiB | macOS/uygulamalar | ölçülmedi | Application Support 17 · Caches 4,3 · Containers 3,0 GiB |
| `~/Desktop/tradia/cc_borsa` | 9,7 GiB | Borsa | **9,1 GiB** | turizm hasadı; **iCloud-senkronlu Masaüstü'nde** |
| `~/tradia_sorgu` | 6,1 GiB | Hafıza | 5,15 GiB | db 3,8 GiB · **logs 2,0 GiB = 1.850 rsync günlüğü × 76 MB** |
| Mac'teki görseller | 5,18 GiB | TT-ARŞİV | — | 4,84 GiB'ın TT-HAFIZA'da ad+boyut eşi var |
| `~/finans/kod/cron.log` | 0,12 GiB | Finans | — | tek günlük, döndürülmüyor |

## 4) Öneri — 5 kalem, sırayla, her biri ayrı onay

| # | Kalem | Sahip | Kazanç | Ön-koşul | Risk |
|---|---|---|---:|---|---|
| **A** | Turizm hasadı → TT-HAFIZA (kopya + SHA), sonra Mac'ten kaldır; **gelecek hasatlar Masaüstü dışına ve doğrudan diske** | Borsa | **9,1 GiB** | disk takılı | düşük |
| **B** | rsync günlüğünü özet moda al (dosya listesi değil, sayılar); eski 1.850 günlüğü sıkıştırıp TT-HAFIZA'ya; `finans/kod/cron.log` döndür | Hafıza + Finans | **~2,0 GiB** | yok | yok (günlük) |
| **C** | `tradia_basin/ham` → TT-HAFIZA aynası **tamamlanıp SHA doğrulanınca** Mac'ten kaldır | Basın | **34 GiB** | disk + tam doğrulama | **yüksek** — tek büyük kalem, geri dönüş yalnız diskten |
| **D** | Görseller: TT-HAFIZA'da eşi olan 2.974 dosya için **SHA doğrula** (ad+boyut yetmez), sonra Mac'ten kaldır; eşi olmayan 225 dosya (0,34 GiB) önce kopyalanır | TT-ARŞİV | **4,84 GiB** | disk | düşük |
| **E** | `~/Library/Caches` (4,3 GiB) | Patron | ≤ 4,3 GiB | — | macOS/uygulama kararı; TT-ARŞİV önermez, yalnız ölçtü |

**Toplam (A-D): ~50 GiB → boş alan 15 → ~65 GiB.** A ve B tek başına 11 GiB açar ve diske büyük bağımlılık yok (B'nin hiç yok).

**Değişmez kural:** hiçbir kalem **SHA-doğrulamalı kopya olmadan** Mac'ten kaldırılmaz. Kaldırma = sahibin işi, Patron onayıyla.

## 5) Önerilen sıra

1. **B** hemen (disk gerekmez, risk yok)
2. Disk takılınca: **A** → **D** (küçük, düşük risk)
3. **C** ayrı bir disk penceresinde, Basın'ın kendi doğrulamasıyla — 34 GiB'ı tek seferde Mac'ten çıkarmak geri dönüşü yalnız diske bırakır; **ikinci fiziksel kopya** (hedef kartı §6, NAS) gelmeden yapılmaması önerilir.

## 6) Erken uyarı (öneri)

Bugün boş alanı ölçen düzenli bir iş yok; düşüşü elle ölçtüm. Öneri: Hafıza'nın güç nöbetine benzer bir **disk nöbeti** — boş alan < 10 GiB 🟡, < 5 GiB 🔴 + büyük hasat başlatan CC'lere dur bayrağı. Sahibi: Hafıza (nöbet altyapısı onda).

## 7) v1'den kalanlar

- v1'in "zorunlu 4 ölçüm"ünden **ÖLÇÜM-1** yapıldı (Mac görselleri 3.199 dosya / 5,18 GiB, bugün hepsi yerinde) ve **ÖLÇÜM-2** yapıldı (fazla kopya 20.587 dosya / 36,05 GiB, çoğu TT-HAFIZA üzerinde → **Mac'e alan açmaz**).
- ÖLÇÜM-3/4 yapılmadı: yalnız v1'in `03_GORSEL/` yeniden-adlandırma fazı için gerekli, ve v1 §7'nin sorusu ("bu görsellere bir daha bakılacak mı?") hâlâ cevapsız.

## 8) Patron'a — onay listesi

- [ ] **A** Borsa turizm hasadı diske + Mac'ten kaldırma + hasat yolu değişikliği
- [ ] **B** günlük sadeleştirme (Hafıza rsync, Finans cron.log)
- [ ] **C** Basın ham 34 GiB — **NAS gelmeden önerilmez**; şimdilik yalnız tam ayna + SHA
- [ ] **D** görseller 4,84 GiB (TT-ARŞİV uygular)
- [ ] **§6** disk nöbeti (Hafıza)
- [ ] v1 §7: görsel arşivi "kapandı" mı, "yeniden adlandırılacak" mı?

---

*TT-ARŞİV · $0 · AI çağrısı YOK · ÖNERİ — UYGULAMA YOK · SİLME-YOK · ölçümler 2026-10-14 01:45-02:15*
