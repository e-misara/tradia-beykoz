# PROMPT DEFTERİ · 2026-10-14

**Derleyen:** Vezir · **Kesit:** 2026-10-14 23:50 · **Kural:** durum **dosyaya** bakılarak yazıldı, CC beyanına değil. Dosya yoksa **ÇIKTI YOK**.
**Kaynak:** `02_CC_STATE/` bugünkü 79 dosya · CC dizinleri (find `-newermt 2026-10-14`) · launchd durumu · git log.
**Kısaltma:** `CS/` = `~/tradia_konusmalar/02_CC_STATE/` · `TB/` = `~/tradia-beykoz/`

## Özet

| Durum | Adet |
|---|---|
| BİTTİ | 35 |
| KISMEN | 7 |
| BEKLİYOR | 2 |
| ÇIKTI YOK | 9 |
| **Toplam prompt** | **53** |

Patron adımı: tabloda işaretli kalemler + en altta toplu liste (6 adım).

## Tablo

| CC | Prompt | Durum | Çıktı yolu | Tek satır sonuç | Patron adımı | Kapsam (il/81) |
|---|---|---|---|---|---|---|
| Analiz | EVDS3 kök neden | BİTTİ | `TB/arsiv/evds3_kok_neden_2026-10-14.md` | H1 uç nokta doğrulandı, H4 elendi; ek kök: aylık betik `.env`'i yüklemiyordu. Ama `/chart-data` yanlış yoldu (Tür A çelişki) | — | 2/81 |
| Analiz | Borsa yoluna geçiş + tek istemci + sağlık exit 0 | KISMEN | `CS/evds_saglik.json` | Elle koşu 15:57Z SAĞLAM (evds_ortak). launchd `com.tradia.evds.saglik` **hiç koşmadı** (runs=0) → exit 0 kanıtı yok | — | 2/81 |
| Analiz | Yabancı-il bülten okuma + landgold arkeoloji + çapraz sınama | KISMEN | `CS/tuik_landgold_sinama_2026-10-14.json` (üreten **Pazarlama**) | Analiz adına dosya yok; landgold çapraz sınaması Pazarlama'nın dosyasında "Analiz düzeltmesi (16 kayıt)" olarak duruyor | — | 2/81 |
| Analiz | Kaynak tarama | BİTTİ | `CS/kaynak_tarama_analiz.json` | Şema birleştirmesi 16 Eki | — | 2/81 |
| Analiz | TÜİK SDMX motorlu taşıt + Hal render + DFE v0.2 | ÇIKTI YOK | — | Bugün yazılmış motorlu/hal/dfe dosyası yok | — | 2/81 |
| Borsa | evds_ortak tek istemci | BİTTİ | `~/Desktop/tradia/cc_borsa/evds_hasat/evds_ortak.py` | Var, `cek_ayrimli` fonksiyonu içinde. Kanonik yol `~/landgold-agents/` değil (kanon kural 5 borcu) | — | 34/81 |
| Borsa | Seri listesi v1 | BİTTİ | `cc_borsa/docs/evds_seri_listesi_v1.{tsv,md}` | — | — | 34/81 |
| Borsa | Tam çekim final tablosu | KISMEN | süreç `evds_guncel.py --tam --devam=20261014` çalışıyor | Final tablo yok; 463/8.730 (19:41). Disk gelince 4 ağır işle eşzamanlı | ⚠ sıra kararı | 34/81 |
| Borsa | cek_ayrimli kural + dizin adı teyit | BİTTİ | `evds_ortak.py` + `CS/hafiza_bildirim_ccborsa_evds_DUZELTME_20261014.json` | "EVDS3 anahtarı bekliyor" damgası geri çekildi | — | 34/81 |
| Borsa | Grup → kök eşleme tsv | BİTTİ | `cc_borsa/docs/evds_grup_kok_eslesme_v1.tsv` | — | — | 34/81 |
| Borsa | Kaynak tarama | BİTTİ | `CS/kaynak_tarama_borsa.json` | — | — | 34/81 |
| Pazarlama | .evds_key silme | BİTTİ | dosya diskte yok · `CS/hafiza_bildirim_ccttpazarlama_borsa_evds_key_silme_2026-10-14.json` | Silindi. ⚠ Dosya Borsa'nındı → dizin sınırı uyumsuzluğu (vaka değil) | — | 81/81 |
| Pazarlama | TÜİK anahtarsız tarama | BİTTİ | `~/tt_pazarlama/bolge/tuik_iz/` | — | — | 81/81 |
| Pazarlama | 10 il damga | BİTTİ | `~/tt_pazarlama/bolge/bolge_pazarlama.json` (`veri_durumu`) | 10 il → DOĞRULANMADI/VERİ_HATALI damgaları | — | 81/81 |
| Pazarlama | 81 il payda | BİTTİ | `CS/evds_il_toplam_konut_satis_2026-08.{json,csv}` | EVDS3 82 seri, 5 parti, hepsi 200 | — | 81/81 |
| Pazarlama | Bülten render denemesi | ÇIKTI YOK | — | — | — | 81/81 |
| Pazarlama | T3 SDMX: tuik_ortak + dataflow envanteri + yabancı il 81 + sınama | BİTTİ | `~/landgold-agents/tuik_ortak.py` · `~/landgold-agents/docs/tuik_dataflow_envanteri_v1.tsv` (508) · `CS/tuik_yabanci_il_2026-08.json` · `CS/tuik_landgold_sinama_2026-10-14.json` | 508 dataflow = Vezir canlı ölçümü; eksik il 0 (Σ il = TR) | — | 81/81 |
| Pazarlama | Envanter başlık eşleme | ÇIKTI YOK | — | Dataflow envanterinde eşleme sütunu yok (yalnız `ad_tr`) | — | 81/81 |
| Pazarlama | Kaynak tarama | ÇIKTI YOK | — | `kaynak_tarama_pazarlama.json` yok | — | 81/81 |
| Finans | EVDS seri yenileme | BİTTİ | `CS/hafiza_bildirim_ccfinans_evds_yenileme_20261014.json` | 18:33 "işlem yapma" → 18:48 yenilendi | — | 9/81 |
| Finans | Kaynak tarama | ÇIKTI YOK | — | `kaynak_tarama_finans.json` yok | — | 9/81 |
| Basın | bm_k_sayi_uyarisi alanı + BELGE/SÖYLEM sınıfı | BİTTİ | `CS/bolge_basin.json` · `CS/bm_k_sinif_tablosu_20261014.md` | Alan Vezir değer sınamasında GEÇTİ (uyumsuzluk kapandı) | — | 8/81 |
| Basın | Kaynak tarama (ilan.gov.tr, meclis kararları) | BİTTİ | `CS/kaynak_tarama_basin.json` | İki kaynak da satırlarda | — | 8/81 |
| Basın | Tüm Türkiye kapsam A/B/C | ÇIKTI YOK | — | Basın tarafında dosya yok. Vezir 973 ilçe kuyruğunu açtı (`TB/motor/KUYRUK.json → basin_ulusal`) | — | 8/81 |
| Sinyal | SIG36 | BİTTİ | `~/signals/sig36_ham_sayac_denetimi.md` + `CS/bildirim_ccsignals_ccbasin_ham_sayac_SIG36.json` | Ham sayılar eşik hesabına girmemiş | — | — |
| Sinyal | SIG37 ön-kayıt | BEKLİYOR → Basın | `~/signals/sig37_SPEC_onkayit.md` | Ön-kayıt yazıldı, Basın girdisi bekleniyor | — | — |
| Aİ | Kaynak tarama | BİTTİ | `CS/kaynak_tarama_ai.json` | — | — | 10/81 |
| Aİ | Düzeltme (SGK menü, teşvik render, OSB adres, TOBB 24 ay, İŞKUR) | BİTTİ | `CS/kaynak_tarama_ai.json` (23:24) | 5 başlığın 5'i dosyada | — | 10/81 |
| Aİ | Evren ağacı v1 export + ad_cozumle | ÇIKTI YOK | — | Hafıza'nın kendi yer adı denetimi de "ad_cozumle BULUNAMADI" yazıyor | — | 10/81 |
| Sosyal | Kaynak tarama | BİTTİ | `CS/kaynak_tarama_sosyal.json` + `_belge_detay.json` | — | — | 2/81 |
| Sosyal | 4 ek (TÜİK göç, YÖK render, bölge planları, adres kodlama) | KISMEN | `CS/kaynak_tarama_sosyal.json` | Göç, YÖK, bölge planları var; **adres kodlama yok** | — | 2/81 |
| İhale | Kaynak tarama | BİTTİ | `CS/kaynak_tarama_ihale.json` | — | — | 2/81 |
| TT-MAP | Kaynak tarama | BİTTİ | `CS/kaynak_tarama_map.json` | — | — | 11/81 |
| Tic | Kaynak tarama | BİTTİ | `CS/kaynak_tarama_tic.json` | — | — | 2/81 |
| Kitap | Kaynak tarama | ÇIKTI YOK | — | — | — | — |
| Arşiv | Kaynak tarama | ÇIKTI YOK | — | — | — | — |
| Hafıza | M4 pano launchd | BİTTİ | `~/Library/LaunchAgents/com.tradia.misara.pano.plist` (23:11) | KeepAlive + RunAtLoad, 8789 dinliyor; bir kez SIGKILL (-9) aldı, yeniden kalktı | — | — |
| Hafıza | Disk Aşama 1 | KISMEN | süreç `nefes_dongu.sh → rsync ~/tradia_basin/ham` | Disk 23:3x takıldı, rsync sürüyor | — | — |
| Vezir | Vaka #07 kapanış | BİTTİ | `TB/kanon/kanon_ihlali_emsal_defteri.md` | KISMEN KAPALI: kök neden iki katmanlı (uç nokta + .env), 5 uyum kalemi açık | ✅ eski anahtar iptali · settings.local.json | — |
| Vezir | Vaka #08 | BİTTİ | emsal defteri + `TB/motor/SUREKLILIK.json → deger_sinamasi` | EVDS haftalık 1.004/1.004 etiket · yabancı satış 10 ilin 5'i hatalı | — | — |
| Vezir | Anahtar kanonu | BİTTİ | `TB/kanon/anahtar_yonetimi_kanonu_v1.md` (v1.4) | Kural 1–6 · TUIK_API_KEY · tek istemci (EVDS + TÜİK) | — | — |
| Vezir | Başka-CC-dizini kuralı | BİTTİ | `TB/kanon/cc_sinir_kanonu_v1.md` | Vezir öz-denetimi: 4 geçmiş dokunuş | ✅ acil sızıntı istisnası kararı | — |
| Vezir | Tarih biçimi (eşleşme) sınaması | BİTTİ | `TB/motor/SEMA.md` "Eşleşme sınaması" | 10 CC'nin 10'unda `eslesme` alanı yok | — | — |
| Vezir | PATRON ADIMI tanımı | BİTTİ | `TB/kanon/kaynak_tarama_semasi_v1.md` §2b | Süzgeç sahte testte 5/5 | — | — |
| Vezir | Adres anahtarı kanonu + 973 ilçe kuyruk | BİTTİ | `TB/kanon/adres_anahtari_kanonu_v1.md` · `TB/motor/KUYRUK.json` | TÜİK ilçe kodu 973/973 · mahalle kodu kaynağı yok · kuyruk 51/519/403 | — | — |
| Vezir | Geriye dönük yer adı denetimi | BİTTİ | `CS/vezir_adres_denetim_20261014.json` | 6.770 kayıt · geçmişte kodlu ≤%5 · belirsiz 200 | — | — |
| Vezir | Kaynak evreni şema + 48 saat birleştirme | KISMEN | `TB/kanon/kaynak_tarama_semasi_v1.md` · `TB/motor/kaynak_evreni_birlestir.py` | Şema + betik hazır (kuru test 7/7). Birleştirme **2026-10-16 19:26**. Şu an 8/9+ dosya geldi | — | — |
| Vezir | launchd exit≠0 (5 iş) | KISMEN | `CS/vezir_bildirim_makine_denetimi_20261014.json` | Teşhis tamam (2× disk, 3× Desktop log 78, +gunluk-ozet, +pano -9); düzeltme sahiplerde | — | — |
| Vezir | Oturum/kaynak kanonu | BİTTİ | `TB/kanon/makine_kaynak_kanonu_v1.md` | ≤8 oturum · ağır iş 1 · 02–07 · ölçüm yük 13,7 / swap 3,0 GB | ✅ ağır iş sıra kararı | — |
| Vezir | TÜİK toplu dosya envanteri | BİTTİ | `~/Desktop/TT-Tüm CC/ham/tuik/2026-10-14/` (ENVANTER + SHA256SUMS) | 326 + 481 dosya · JSON↔CSV 263/267 eşit · 4 CSV 500.000'de kesik | — | — |
| Vezir | TUIK_API_KEY teyidi | BİTTİ | `CS/vezir_bildirim_tum_cc_tuik_api_key.json` | `.env`'de 1 satır, istemci okuyor, kopya yok | — | — |
| Vezir | TÜİK dataflow envanterini kaynak evrenine kaydet + 4 CC'ye kök sorusu | BEKLİYOR → Vezir (bu tur) | `~/landgold-agents/docs/tuik_dataflow_envanteri_v1.tsv` geldi | — | — | — |
| Vezir | Prompt defteri + kalıcı düzen | BİTTİ | bu dosya · `TB/kanon/prompt_defteri_kanonu_v1.md` | 23:00 launchd | — | — |

## Kapsam kuralı (kanon/kapsam_kanonu_v1.md · bugün yürürlük)

Varsayılan kapsam 81 il / 973 ilçe; Beykoz · Kartal · Derepazarı · Rize · İstanbul yalnız **örnek satır**. Kapsam sütunu CC'nin bugünkü il düzeyi çıktılarında geçen il sayısıdır (üst sınır). 81'in altındaki her hasat satırı, ACIK kaynaksa **81 il tam hasat** olarak yeniden koşulacak.

## Patron adımları (toplu)

1. **Eski EVDS anahtarını TCMB'de iptal et** (hâlâ geçerli ve public; Vaka #07)
2. **`~/.claude/settings.local.json`**: 1 izin satırında eski anahtar
3. **GitHub Support**: yetim commit önbellek temizliği (Vaka #06)
4. **Acil sızıntı istisnası kararı** (cc_sinir_kanonu açık soru)
5. **Ağır iş sırası:** disk gelince 4 ağır iş eşzamanlı; öneri `CS/agir_is_kilidi.json`
6. **7/24 makine** (makine kanonu ölçümü: 8 GB, yük 13,7)

*Vezir · 2026-10-14*
