# SOSYAL KONU AĞACI v1 — TASLAK (CC-Sosyal · Vezir kanonlaştırır)

**Statü:** 🟡 TASLAK · 2026-10-18 · Patron çerçeve düzeltmesi 18.10 02:27 + "keşif köklü" 02:3x. Kanon dizinine koyma/push Vezir'in.

## İlke (kanona ilk madde)
> **Düzen örneklerden değil kökten kurulur; her yeni kaynak, dal ve ilçe eklenerek büyür, hiçbir yapı üç sahaya göre ölçülmez.**
Beykoz, Kartal ve Rize yalnız ilk test sahalarıdır; mimaride, şemada, kodda adları geçmez. Ölçek: 81 il · 973 ilçe · bütün konu dalları.

## 1) Ağaç: tohum + YouTube'dan türeyen alt dallar
- **13 kök dal TOHUMDUR** (Üst Akıl/Patron verdi): kent ve imar · afet ve iklim · ekonomi ve finans · sermaye piyasası · kamu ihale ve altyapı · hukuk ve yargı · tarım ve arazi · enerji ve ulaşım · demografi ve göç · siyaset ve yerel yönetim · medya ve arşiv · bilim ve yöntem · tarih ve kültür.
- **Alt dalları Üst Akıl yazmaz; Sosyal YouTube'un kendisinden çıkarır:** video başlıkları/etiketleri, kanal açıklamaları, oynatma listesi adları. Kural (uygulandı): bir ifade aynı kök dalda **≥5 videoda ve ≥3 farklı kanalda** geçiyorsa `kök/ifade` alt dalı AÇILIR (`kaynak=etiket`).
- **Her CC dal açabilir** (talep kartı `konu_dallari`: `kök` veya `kök/alt`); **Sosyal reddetmez, kaydeder** (`kaynak=cc`, `acan_cc`). Sınır YOK.
- **Sahipsiz dal:** hiçbir CC talep etmediyse `durum=sahipsiz` olarak DURUR, atılmaz; CC isterse sahiplenir.
- Alt dal sözlüğü/sınıf kuralları kural+CC geri yazmasıyla düzelir (`siniflama_geri`). Düzeltmeler kaybolmaz (SİLME-YOK).

## 2) Keşif köklü (kanal grafı)
Kanal listesi "örnek kanal"dan değil **keşiften** büyür; tavan yok, sıra kota ve disk ölçüsüyle verilir.
1. **Tohum sorguları:** CC kartı sorguları + kanal TÜRÜ taraması (haber, ulusal/yerel TV, belediye, valilik/kurum, emlak/emlakçı, inşaat/müteahhit, mimarlık, şehircilik, tarih, arşiv/belgesel, ekonomi/borsa/finans eğitimi, hukuk, tarım, enerji, ulaşım, meclis/komisyon, üniversite/ders, podcast, köy/mahalle, drone/gezi, oda/dernek/sendika, gazete kanalları, ajanslar) + 81 il × 8 tür şablonu + kök dal sözlüğü.
2. **Ağ genişletme (ÖLÇÜLDÜ: zayıf):** kanalın "ilgili kanallar" sekmesi yt-dlp'de çoğu kanalda YOK; kanal ve video açıklamalarındaki kanal bağlantıları/@handle çok nadir (4.172 kanalda 58 kenar; yeni: video açıklamalarındaki kanal atıfları RSS'ten bedava okunur → +47 kenar, 163 @handle çözüm kuyruğunda). **Graf bağlantıyla değil ARAMA (tohum sorguları) ve RSS ile büyüyor.** Kenar türleri kalır (`oneri`, `aciklama_baglanti`, `video_aciklama_atif`), ama büyüme varsayımı bunlara DAYANMAZ; haftalık "en çok atıf alan yeni kanallar" kuralı atıf sayısı düşük olduğundan şimdilik sıralama sinyali olarak işe yaramaz — alternatif sinyal: arama sonuçlarında tekrar görülme sayısı.
   - **RSS taraması:** grafın her kanalı kotasız YouTube RSS ile taranır (son 15 video + yayın tarihi; ~0,15 sn/kanal, 4 iş parçacığı) → ulusal olay alarmı bu veriyi okur. 4.148 kanal ≈ 10 dk. **Hata kademesi (18.10):** ilk deneme paralel → hatalılar seri yeniden denenir → kanal sayfasından channel_id çözülür → kalıcı 'rss_yok'. Ölçülen: ilk denemede hata **3/4.148 (%0,07)**, 3'ü de kalıcı HTTP 404 (yeniden deneme/kimlik çözümü düzeltmedi). Bu sabahki 37 'hata' yeniden taramada hepsi düzeldi → geçiciydi (neden kesin değil; paralel yük/hız kısıtı olası).
3. **Otomatik sınıf (her kanal):** tür · konu dalları · konum (il/ilçe) · dil · yayın sıklığı · ortalama süre · güven (kurum / medya / bireysel; `.bel.tr/.gov.tr/.edu.tr` açıklama bağlantısı = kurum teyidi). Kural tabanlı + CC geri yazmasıyla düzelir.
4. **Meta sınırsız** (ucuz: RSS/yt-dlp düz liste); **indirme ve transkript yalnız talep ve öncelik sırasıyla**.
5. Depo: `02_CC_STATE/sosyal/kanal_grafi.sqlite` (kanal · kenar · dal · kanal_dal · tohum · video_meta · olcu · siniflama_geri · handle_kuyruk).

## 3) Konum etikettir, filtre DEĞİLDİR
Her video/kanal konum etiketi alır: **il/ilçe/(mahalle) anahtarı** (adres_anahtari_kanonu v1.2) çıkarılır; çıkmazsa **"ulusal/konumsuz"**. İkisi de arşive girer. Tuzaklar: çok anlamlı ilçe adları il ipucu olmadan eşlenmez; genel sözcük/soyadı gibi kullanılan ilçe adları (Araç, İmamoğlu, Pazar, Çay, Aralık, Genç, Olur…) yalnız yer-ekiyle kabul edilir (soyadı olanlar ayrıca yalnız "belediyesi/ilçesi" ile); metinde il adı varsa o ilde olmayan ilçe adayı elenir ("Samsun'da … araç" ≠ Kastamonu/Araç); mahalle kodu kaynağı yalnız tanımlı ilçelerde (şu an yalnız Beykoz tablosu) — diğerlerinde mahalle çıkarılmaz.

## 4) Olay alarmı olay TÜRÜYLE çalışır
afet · kaza · karar · ihale · dava · açıklama — ülkenin neresinde olursa olsun canlı akışa düşer (konum etiketle birlikte). Biçim Basın `olay_alarmi_son24.json` ile aynıdır; Basın'ın alarm kanonu aynı şekilde genişlemelidir (ilçe listesi kalkar).

## 5) Haftalık "YENİ DAL" raporu ve ölçüler
`02_CC_STATE/sosyal/yeni_dal_raporu_<tarih>.md`: bu hafta keşfedilen dallar, hangi CC ilgilenmeli; CC'si olmayan dal sahipsiz durur. **Ölçüler (`kanal_grafi_olcu.json`):** dal sayısı · kanal sayısı · konumlu kanal oranı · **81 ilin kaçında yerel kanal var (hedef 81/81)** · kök dal başına kanal.

## 6) Sınırlar (dürüstlük)
Sözlük/sınıf kuralları TOHUMDUR ve hatalıdır; ad eşleşmesi tuzağı (kanal/ilçe adı = lakap, soyadı ya da ortak sözcük; 36.529 başlıklık korpusta Araç, İmamoğlu, Aralık, Genç, Olur… yanlış ilçe üretti) sınıflamada da geçerlidir → konum ve güven alanları `kural` ve güven ile yazılır, düşük güven "kurum/yerel" iddiası sayılmaz. Meta sayıları ≠ kapsam: bulunan kanal, kapsanan konu değildir.

## 7) Değişiklik notu (ölçümden çıkan)
18.10 03:30: ağ-genişletme varsayımı ölçümle çürüdü (madde 2); konum çözümleyiciye korpus tabanlı ortak-sözcük listesi ve il-tutarlılık kuralı eklendi; konumlu kanal oranı bu düzeltmeden sonra yeniden hesaplanır (eski değer şişikti).

*CC-Sosyal · 2026-10-18 · taslak*
