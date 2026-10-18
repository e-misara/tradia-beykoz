# KAYNAK EVRENİ v2 (birleştirme · 2026-10-16T19:26)

**Girdi:** 13 `kaynak_tarama_*.json` · geçerli 1 · geçersiz 56 · okunamayan 1
**Şema:** kanon/kaynak_tarama_semasi_v1.md · **Ham:** motor/kaynak_evreni_v2.json

## CC başına satır
| CC | toplam | geçerli | geçersiz |
|---|---|---|---|
| borsa | 12 | 0 | 12 |
| finans | 13 | 1 | 12 |
| map | 11 | 0 | 11 |
| pazarlama | 7 | 0 | 7 |
| tic | 14 | 0 | 14 |
| sosyal_belge_detay | OKUNAMADI (AttributeError) | — | — |

## ACIK kaynaklar → bölge motoru (0)
| Site | Ölçek | Kök | Zincir | Lisans | HTTP | Beykoz | Derepazarı | CC |
|---|---|---|---|---|---|---|---|---|

## Patron kovası — üyelik / anahtar (0)
| Site | Neden | Adım |
|---|---|---|
| EPİAŞ Şeffaflık Platformu | UYELIK (isteğe bağlı) | epias.com.tr → Şeffaflık → üyelik başvurusu |
| BDDK veri/istatistik | YAZILI_IZIN (ürüne girecekse) | BDDK → yazılı kullanım izni başvurusu |

## Çakışmalar (0)
| Host | CC'ler | Tür | Farklı alanlar |
|---|---|---|---|

## Geçersiz satırlar (56) — CC'ye geri
| CC | Site | Hata |
|---|---|---|
| borsa | KTB — Turizm tesisleri dizini (Bakanlık belgeli + başvurusu olan tesisler) | lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| borsa | KTB YİGM — Belgeli tesis istatistikleri yıllık bülten (il/ilçe × tür × sınıf) | lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| borsa | KTB YİGM — Konaklama istatistikleri yıllık bülten (geliş, geceleme, doluluk; il/ilçe) | lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| borsa | KTB YİGM — Sınır istatistikleri aylık bülten (Ağustos 2026) | lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| borsa | KTB YİGM — Turizm geliri aylık (2019–2026) | lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| borsa | TÜİK Veri Portalı — konaklama geliş-geceleme, il aylık (HEDEF; varlığı doğrulanamadı) | ornek_cekim {beykoz,derepazari} değil; lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| borsa | TÜİK SDMX web servisi (nsiws) | ornek_cekim {beykoz,derepazari} değil; lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| borsa | DHMİ — Havalimanları karşılaştırmalı istatistikleri (aylık dosyalar) | lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| borsa | TCMB EVDS3 — Turizm geliri/gideri, çıkış yapan ziyaretçi, yurtdışını ziyaret eden vatandaş (TP.TURIZMGELGIT/YZS/ZYVS) | lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| borsa | TCMB EVDS3 — Seyahat gelirleri ve giderleri (TP.SGEGI) | lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| borsa | TCMB EVDS3 — Milliyetlere göre ziyaretçi sayısı (TP.ODEMGZS) | lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| borsa | TCMB EVDS3 — Sınır kapılarının bağlı olduğu illere göre yabancı ziyaretçi (TP.URISTSAYIL, Arşiv) | lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| finans | BDDK FinTürk — İllere Göre Seçilmiş Bankacılık Sektörü Verileri (VeriGetir) | zincir geçersiz: Z1/Z6; lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| finans | BDDK FinTürk — Excel dışa aktarma (ExceleAktar) | zincir geçersiz: Z1/Z6; lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| finans | EPDK — 2025 Yılı Elektrik Piyasası Gelişim Raporu + Eki (il tabloları) | lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| finans | EPDK — Resmi İstatistikler, Elektrik Piyasası Aylık Sektör Raporu (Genel Görünüm) | ACIK ama örnek çekim 0/ölçülmedi (200 ≠ veri) → en fazla KISITLI; lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| finans | EPİAŞ Şeffaflık Platformu — Elektrik API (consumption/data/*) | CC işi Patron'a yazılmış (patron_adimi üyelik/anahtar/SMS/ödeme değil) |
| finans | DASK — Yürürlükteki Poliçeler: Bölge ve İl Bazında (sigortalılık oranı) | zincir geçersiz: DENETÇİ (risk algısı; Z numarası yok); lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| finans | TCİP / DASK İngilizce site | zincir geçersiz: DENETÇİ (risk algısı; Z numarası yok) |
| finans | GYODER — Gösterge Sayı 44 (Veriden Bilgiye Gayrimenkul 2026/2) | zincir geçersiz: Z7 (payda); lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| finans | KkONUTDER — Sektörel Beklenti Anketi H1'26 (NielsenIQ) | zincir geçersiz: Z7 (payda); ACIK ama örnek çekim 0/ölçülmedi (200 ≠ veri) → en fazla KISITLI; lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| finans | KONUTDER × PwC — İstanbul'da Gelecek 10 Yılda Konut İhtiyacı (Nisan 2025) | zincir geçersiz: Z7 (payda) |
| finans | İNDER — Yayınlar ve Raporlar | zincir geçersiz: Z7 (payda) |
| finans | DHMİ — İstatistikler: Havalimanları Karşılaştırmalı İstatistikleri (ay sonu, yolcu) | zincir geçersiz: Z4 / turizm; lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| map | HGM Atlas (Ulusal CBS) | kok geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); zincir geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); ornek_cekim {beykoz,derepazari} değil; lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| map | TÜİK Coğrafi İstatistik Portalı | kok geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); zincir geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi) |
| map | AFAD TDTH (Deprem Tehlike Haritası) | kok geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); zincir geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); ornek_cekim {beykoz,derepazari} değil |
| map | AFAD Deprem Olay Kataloğu | kok geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); zincir geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| map | MTA Yerbilimleri Harita Görüntüleyici | kok geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); zincir geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); ornek_cekim {beykoz,derepazari} değil |
| map | DSİ (Taşkın) | kok geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); zincir geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); ornek_cekim {beykoz,derepazari} değil |
| map | OGM ORBİS (Orman Bilgi Sistemi) | kok geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); zincir geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); ornek_cekim {beykoz,derepazari} değil |
| map | MGM (Meteoroloji) açık servis | kok geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); zincir geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| map | İBB Açık Veri Portalı | kok geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); zincir geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| map | İzmir Açık Veri (bizizmir) | kok geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); zincir geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); ACIK ama örnek çekim 0/ölçülmedi (200 ≠ veri) → en fazla KISITLI; lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| map | Ankara Büyükşehir açık veri | kok geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); zincir geçersiz: BİLİNMİYOR (Patron dağıtım listesi bu CC'ye verilmedi); ornek_cekim {beykoz,derepazari} değil |
| pazarlama | UYAP e-Satış Portal (icradan satılık gayrimenkul) | zincir geçersiz: None |
| pazarlama | TKGM Tapu İstatistikleri (Power BI paneli) | zincir geçersiz: None |
| pazarlama | Emlakjet (ilçe/mahalle ilan fiyatı ve kira) | zincir geçersiz: None; lisans yok/dayanaksız → ACIK sayılmaz (v1.1) |
| pazarlama | Endeksa (ilçe/mahalle fiyat ve kira endeksi) | zincir geçersiz: None |
| pazarlama | Zingat (ilçe fiyat/kira) | zincir geçersiz: None |
| pazarlama | REIDIN (R-Insight / R-Report) | zincir geçersiz: None |
| pazarlama | Google Trends (pytrends ile) | zincir geçersiz: None |
| tic | TÜİK Veri Portalı API (yapı izin istatistikleri) | zincir geçersiz: BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı) |
| tic | TÜİK SDMX (nsiws) | zincir geçersiz: BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı) |
| tic | TÜİK MEDAS (bitkisel üretim ürün × il) | zincir geçersiz: BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı) |
| tic | TÜİK eski yapı izin uygulaması | zincir geçersiz: BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı) |
| tic | İBB Açık Veri — Türkiye ve İstanbul ölçeğinde yapı ruhsatı ve yapı kullanma izni | zincir geçersiz: BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı); ACIK ama örnek çekim 0/ölçülmedi (200 ≠ veri) → en fazla KISITLI |
| tic | ÇŞB Yapı Denetim Sistemi (YDS) | zincir geçersiz: BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı) |
| tic | e-Devlet ÇKS Belgesi Sorgulama (gerçek kişi) | zincir geçersiz: BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı) |
| tic | e-Devlet ÇKS Belgesi Doğrulama | zincir geçersiz: BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı) |
| tic | TARBİL (Tarımsal İzleme ve Bilgi Sistemi) | zincir geçersiz: BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı) |
| tic | Rize İl Tarım ve Orman Md. — 2025 İl Faaliyet Raporu | zincir geçersiz: BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı); ACIK ama örnek çekim 0/ölçülmedi (200 ≠ veri) → en fazla KISITLI |
| tic | Rize İl Tarım ve Orman Md. — Derepazarı İlçe Müdürlüğü sayfası | zincir geçersiz: BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı) |
| tic | ÇAYKUR kurumsal site | zincir geçersiz: BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı) |
| tic | Rize İl Özel İdaresi — duyurular | zincir geçersiz: BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı); ACIK ama örnek çekim 0/ölçülmedi (200 ≠ veri) → en fazla KISITLI |
| tic | Rize İl Özel İdaresi — İl Genel Meclisi / Encümen kararları 2026 | zincir geçersiz: BİLİNMİYOR (Z1-Z7 tanımı Tic'e ulaşmadı); ACIK ama örnek çekim 0/ölçülmedi (200 ≠ veri) → en fazla KISITLI |
