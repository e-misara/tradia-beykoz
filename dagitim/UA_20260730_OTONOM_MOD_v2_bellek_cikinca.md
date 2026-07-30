# OTONOM-MOD v2 · Bellek Çıkıyor · Mac Yerel Staging

**Tarih:** 2026-07-30
**Kaynak:** Üst Akıl
**Kanal:** Vezir (dağıtım + versiyon farkı + Hafıza-boşaltma protokolü)
**Bağlam:**
- Bir önceki: [`UA_20260730_OTONOM_MOD_patron_offline.md`](UA_20260730_OTONOM_MOD_patron_offline.md) (v1) — depolama TT-HAFIZA staging
- **BU DOSYA (v2):** bellek FİİLEN çıkıyor → depolama katmanı **Mac yerel staging'e** revize edildi
**Disiplin:** $0 · SESSİZ-0 YASAK · SPA-fallback · SİLME-YOK · KVKK #31 v1.1 · A04 · Standing #35+#36

---

## 1. Kuralın Özü (v1'e göre revize)

Beş standardın **4'ü aynen** v1'den:
1. Hasat `nohup + checkpoint + resume` — kapanma = duraklama, kayıp DEĞİL
2. builder ingest **launchd** ile döner (Patron olmadan)
3. Sessiz-0 · SPA-fallback · encoding-detect standart
4. Her CC `"kaldığım yer: X"` checkpoint yazar

**5. — DEĞİŞTİ:**
- v1 (fe319d0): "Yeni ham → TT-HAFIZA staging (Mac'e yığma yok)"
- **v2: "Bellek-yokken yeni ham → Mac yerel staging (boşaldı, yer var)"**

**Ek — v2 yeni:**
- **"Patron 'bellek takıldı' dediğinde: Hafıza boşaltma + toplu sayaç"**

---

## 2. Depolama Akışı — v2 Uyumlu

### 2.a · Offline dönemi (bellek YOK)
```
CC ham çıktı  →  /Users/GAC-A/tradia_*/ham/   (Mac yerel staging)
                 [rsync BEKLEMEDE — bellek yok, hedef yok]
```
- **Rsync launchd görevi:** cron çalışır ama `rsync` **atlar** (target-mount kontrolü fail → sessiz skip, ⚠ log)
- Mac disk kullanımı büyür — HASAT-TAM-SALDIRI ölçeği düşünülürse **kritik risk** (§4.a)

### 2.b · Patron döndü, bellek TAKILDI
```
1. Mount teyidi: TT-HAFIZA görülüyor mu?
2. Hafıza boşaltma tetiği:
   rsync -av --update /Users/GAC-A/tradia_*/ham/  →  /Volumes/TT-HAFIZA/staging/
3. Mac disk boşaltma (Patron onayı sonrası SİL — SİLME-YOK ihlali değil,
   staging tam kopya doğrulandı SHA256 sonrası)
4. Toplu sayaç: Hafıza SORGU-01 tam-ingest yap, havuz_toplam bildir
```

---

## 3. v1 → v2 Fark Tablosu (net)

| Konu | v1 (TT-HAFIZA aktif varsayımı) | **v2 (bellek çıkacak — teyit)** |
|---|---|---|
| Ana staging | TT-HAFIZA | **Mac yerel** (boşaldı → yer var) |
| rsync launchd | Aktif rsync Mac→TT-HAFIZA | **Askıda** (target yok — sessiz-skip + ⚠log) |
| Disk-taşma riski | Düşük (TT-HAFIZA ~800GB) | **YÜKSEK** (Mac ~??GB — teyit gerek) |
| Patron dönüş ilk-iş | Vezir tetikleyip §5 protokolü | **Hafıza boşaltma** (Mac→TT-HAFIZA) + toplu sayaç + Vezir §5 |
| Ham veri gözyaşı riski | Düşük (ayrı disk) | **Orta** (tek disk Mac — SHA256 doğrulama sonra sil) |

---

## 4. Vezir A04 Dürüst-Notlar (v1'in üstüne)

### 4.a 🔴 **Mac disk-taşma riski YÜKSEK — v2'nin en kritik açığı**
- v1'de HASAT-TAM-SALDIRI ölçek uyarısı vardı (§6.b): "20-50M+ kayıt · 100-500GB potansiyel"
- **Bellek yokken bu ham Mac'te birikecek**
- KURULUS_HAFIZA'da S51 planı Mac ~29GB boş idi (2026-07-18)
- Direktif "boşaldı, yer var" diyor ama **Vezir teyit görmedi** (kaç GB boş?)
- **Öneri:** Patron offline'a çıkmadan `df -h /` output'unu bir yere kaydetsin. Hafıza dönüşte karşılaştıracak.

### 4.b 🟡 **rsync launchd sessiz-skip = 0 uyarı**
- `rsync` mount-point yok → başarısız çıkar → launchd genelde loglar ama görünmez
- **Öneri:** rsync wrapper script yazılsın (Hafıza): mount kontrolü + fail → `hafiza_alarm_rsync_target_yok.json` üret
- Aksi 24 saat sonra hasat büyümüş, Mac dolmuş, kimse fark etmemiş

### 4.c 🟡 **"Bellek takıldı" tetikleme protokolü belirsiz**
- v2 diyor: "Patron 'bellek takıldı' dediğinde Hafıza boşaltma"
- Kim tetikliyor? Patron sözlü mü, otomatik-mount detect mi?
- **Öneri:** Hafıza launchd her ~5-10 dk `ls /Volumes/TT-HAFIZA/ 2>/dev/null` kontrol; ilk-görüldüğünde otomatik boşaltma başlat + Vezir bildirimi

### 4.d 🟡 **Ham silme kararı (Mac disk boşaltma) SİLME-YOK ile çelişik gibi**
- Standing kural "SİLME-YOK"
- Ama Mac disk boşaltmak için Mac'teki ham kopyası silinmeli (TT-HAFIZA'ya taşındıktan sonra)
- **Vezir yorumu:** SİLME-YOK = **veri kaybı yok** anlamındadır. SHA256-doğrulanmış TT-HAFIZA kopyası varsa Mac silme **taşıma**dır, kayıp değil.
- Bu ayrımı Standing dilinde netleştirmek Hafıza'nın işi (kural revizyonu adayı).

### 4.e 🟢 **v1'in v2'ye taşınan kritik uyarıları hala geçerli:**
- pmset Mac-uyanık zorunlu (launchd cron için)
- CC-Tic uyandırma manuel
- Whisper otonom kuyruk yeni-test edilmemiş
- Signals + Finans doğal-dışarıda
- Vezir OTONOM DEĞİL (bir tur sonra Patron dönüşünde toplu-push)

---

## 5. Patron Dönüş Protokolü (v2 revize — v1 §5 güncelleme)

### Yeni Adım-0 (v2 eklenti): **Hafıza boşaltma**
```
[Patron] "Bellek takıldı"
       ↓
[Hafıza] Mount teyit → rsync -av --update Mac→TT-HAFIZA/staging/
       ↓
[Hafıza] SHA256 doğrula (Mac + TT-HAFIZA aynı hash)
       ↓
[Hafıza] Mac disk boşalt (Patron onayı sonrası — SHA256-güvenli silme)
       ↓
[Hafıza] SORGU-01 tam-ingest (biriken ham yut)
       ↓
[Hafıza] havuz_toplam sayacı güncelle
       ↓
[Hafıza → Vezir bildirim] "Boşaltma tamam, havuz: 165K → NK"
```

### Sonrası — v1'deki 4 adım (aynen):
1. Envanter tara (`durum_otonom.md` × 7 CC)
2. `OTONOM_DONUS_<tarih>.md` üret (bkz. v1 §5)
3. Toplu-push (HASAT-TAM-SALDIRI §5 12+ satır update)
4. Patron'a tek-satır özet

**Toplam süre tahmini:** 5-15 dk (biriken hasat hacmine bağlı)

---

## 6. Vezir Takip Tablosu (offline sonrası — v1 §7 devamı)

v1'deki takip tablosuna ek satır:

| CC | Checkpoint | Havuz katkı | Sessiz-0 | Disk (offline) | Disk (dönüş sonrası) | Anomali |
|---|---|---|---|---|---|---|
| CC-Borsa | ⏳ | — | — | ⚠ Mac yerel | Hafıza boşaltma sonrası TT-HAFIZA | — |
| CC-TT-MAP | ⏳ | — | — | ⚠ Mac yerel | ⇒ TT-HAFIZA | — |
| CC-Analiz | ⏳ | — | — | ⚠ Mac yerel | ⇒ TT-HAFIZA | — |
| CC-Basın | ⏳ | — | — | ⚠ Mac yerel | ⇒ TT-HAFIZA | — |
| CC-Tic | ⏳ (uyanıksa) | — | — | ⚠ Mac yerel | ⇒ TT-HAFIZA | — |
| CC-Sosyal | ⏳ | — | — | ⚠ Mac yerel | ⇒ TT-HAFIZA | — |
| CC-Hafıza | ⏳ | havuz sayacı | — | rsync-askıda | Boşaltma tetiği | — |

---

## 7. Kısa-Yön Özeti (v1 §8'in v2 revizesi)

**Offline'a girmeden BUGÜN yapılacaklar (kritik):**
1. Her CC otonom-worker'ı `nohup` başlat + ilk checkpoint yaz
2. `df -h /` output kaydet (dönüşte disk-fark karşılaştırma için)
3. Hafıza launchd ingest doğrulan (rsync launchd → askıda, sessiz-skip loglama açık)
4. `pmset` Mac-uyanık teyit (aksi launchd = kâğıt)
5. Her CC `durum_otonom.md` başlangıç-satırı

**Offline döneminde:**
- CC'ler otonom hasat (Mac uyanık + launchd + nohup)
- **Ham → Mac yerel staging** (v2 farkı)
- Rsync target yok → sessiz-skip
- Vezir uykuda
- Repo'da ilerleme yok

**Patron dönüp "bellek takıldı" dediğinde:**
- **Adım-0 yeni:** Hafıza boşaltma (Mac → TT-HAFIZA, SHA256 → sil)
- Sonrası v1 §5 adımları (envanter, dönüş raporu, toplu-push, tek-satır özet)

*OTONOM-MOD v2 dağıtımı arşivde. Depolama katmanı Mac-yerel'e revize; Hafıza-boşaltma protokolü eklenti.*
