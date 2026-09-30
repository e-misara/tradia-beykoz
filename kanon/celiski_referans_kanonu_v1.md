# ÇELİŞKİ-REFERANS KANONU v1

**Statü:** 🟢 KANON ADAYI · 2026-09-30 · CC-Signals 5. tur dersi
**Emsal:** PARSEL-01 · dere mesafesi çelişkisi (iki farklı ölçüm noktası) + eğim proxy/kesin çelişkisi

---

## Kural

**Bir sayı çelişkisi tespit edildiğinde ilk soru "hangi rakam doğru?" DEĞİLDİR; ilk soru "neyin neresinden ölçüldüğü yazılı mı?" olmalıdır.**

> "Sayı yanlış değildi, neyin neresinden ölçüldüğü yazılmamıştı." — Sinyal 5. tur dersi

## Örüntü

Görünen çelişki iki tür yapıdan doğar:

**Tür A · Yanlış ölçüm:** Aynı büyüklük, iki kaynak farklı sayı vermiş → biri yanlış.
**Tür B · Farklı referans:** Aynı sayı adı, iki kaynak farklı **başlangıç noktası / eşik / yöntem** kullanmış → ikisi de doğru olabilir, karşılaştırılabilir değiller.

**Kanon:** Çelişki tespit edilir edilmez önce **Tür B varsayılır**, referans netleştirmesi yapılır. Ancak referans aynı olduğu kanıtlandıktan sonra Tür A soruşturmasına geçilir.

## Pratik gerektirdikleri

1. **Rakama etiket zorunlu:** Her sayı yanına referans etiketi (`<sayı> · [<ne, nereden, hangi yöntem>]`). Örnek şablon: "mesafe <sayı> [parsel kenar → en yakın hedef noktası, kuş uçuşu]".
2. **Çelişki kaydında iki hipotez:** SIG-serisi çelişki kaydında **A/B ikili hipotez** yazılır.
3. **Kanıt paketleri:** Referans-farklılığı hipotezi, kanıt olmadan **kabul edilmez** (aksi hâlde her hata "referans farkı" gibi süslenir).

## Emsal (PARSEL-01)

- **Dere mesafesi çelişkisi (iki değer):** Tür B çıktı. Bir kaynak parsel batı kenarını, diğer kaynak parsel merkezini almış (kesin rakam ve referanslar lokal).
- **Eğim proxy vs kesin:** Tür B çıktı. Proxy 30m grid ortalaması, kesin ölçüm parsel-içi topografi. Rakamlar arasındaki fark yöntemsel.

Her iki vakada da "hangi rakam doğru?" sorusu zamana yazık olurdu; **referans-yazımı** kilit adımdı.

## Uygulama sırası (Vezir + CC'ler)

1. Çelişki tespit → **Etiket-eksikliği taraması** (Tür B testi)
2. Etiket varsa → Tür A soruşturması (hangi ölçüm hatalı)
3. Etiket yoksa → Referansı belgele + iki değer de saklanır (SİLME-YOK)
4. Kanon `kanon_ihlali_emsal_defteri.md`'ye vaka olarak girer

## Standing ile ilişki

- **Standing #21-A** (kaynak_kanit) → her rakamın kaynağı belgeli
- **Standing #34** (kaynak-karıştırma) → farklı kaynaklar aynı ölçüm sanılmasın
- Bu kanon **her ikisinin arası:** rakam DOĞRU kaynaklı olsa da **referansı** yazılı değilse çelişki üretir.

*Vezir · Standing #21-A + #34 + Anayasa B7 + Kural 21 · 2026-09-30*
