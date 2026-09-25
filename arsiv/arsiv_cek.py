#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
arsiv_cek.py — Claude Code oturum arşivleyici (Vezir)

Standing #37 KALICILIK PROTOKOLÜ uygulaması.
Kural: AI ÇAĞRISI YOK. Saf Python, dış bağımlılık yok, $0.

Akış:
  1) ~/.claude/projects/**/*.jsonl tara
  2) TEMİZLE: token/PII/path/env → [REDACTED]
  3) MD üret: başlık, tarih aralığı, CC adı (varsa), H:/A: sıralı tutanak
  4) İki çıktı:
     - arsiv/tam/<CC>/<tarih>_<oturum>.md  (PRIVATE misara-arsiv repo)
     - arsiv/indeks.json                    (PUBLIC pano besler)
  5) Hash-kontrol: değişmeyen dosyayı yeniden yazma (commit gürültüsü yok)
  6) git add + commit + push (misara-arsiv PRIVATE repo)

ÇALIŞTIRMA:
  python3 arsiv/arsiv_cek.py

Not: GitHub Actions kullanma — Actions ~/.claude'u göremez.
"""
import argparse
import glob
import hashlib
import json
import os
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

# ─── Yol sabitleri ────────────────────────────────────────────────
PROJ_ROOT = os.path.expanduser("~/.claude/projects")
# Hedef repo: PRIVATE (Patron açacak, aşağıda kontrol edilir)
ARSIV_REPO = os.path.expanduser("~/misara-arsiv")
TAM_DIR = os.path.join(ARSIV_REPO, "tam")
INDEKS_JSON = os.path.join(ARSIV_REPO, "indeks.json")
INDEKS_MD = os.path.join(ARSIV_REPO, "INDEKS.md")

# ─── Temizlik desenleri (zorunlu) ─────────────────────────────────
REDACT_TOKEN = re.compile(
    r"(?:sk-ant-[a-zA-Z0-9_-]{20,}"
    r"|ghp_[a-zA-Z0-9]{20,}"
    r"|gho_[a-zA-Z0-9]{20,}"
    r"|AKIA[0-9A-Z]{16}"
    r"|Bearer\s+[A-Za-z0-9._~+/=-]{20,}"
    r"|xoxb-[a-zA-Z0-9-]{10,})"
)
# D1: /Users/<ad>/ ve tire-ayraçlı -Users-<ad>- slug hali (Claude Code proje-yolu)
REDACT_ABS_PATH = re.compile(
    r"[-/]Users[-/][A-Za-z0-9_.-]+(?=[-/]|\s|$|['\"`])"
)
REDACT_EMAIL = re.compile(
    r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
)
# TR ve genel telefon örüntüsü: +90 5xx / 05xx / (5xx) / 5xx xxx xx xx
REDACT_PHONE = re.compile(
    r"(?:\+?\d{1,3}[\s.-]?)?(?:\(?\d{2,4}\)?[\s.-]?)?\d{3}[\s.-]?\d{2,4}[\s.-]?\d{2,4}"
)
REDACT_ENV_LINE = re.compile(
    r"^\s*(?:export\s+)?([A-Z_]+(?:KEY|TOKEN|SECRET|PASSWORD|API|PWD|PASS)[A-Z_]*)\s*=.*$",
    re.IGNORECASE | re.MULTILINE,
)

# Telefon aşırı-agresif yakalar; sadece [+90/05...] öneki ile başlıyorsa
REDACT_PHONE_STRICT = re.compile(
    r"(?:\+90[\s.-]?|0)5\d{2}[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}"
)

# ─── Ş1 Ek Desenler (Standing #37/E redaksiyon testi) ──────────
# JWT: 3-bölüm base64.base64.base64, ilk bölüm eyJ ile başlar (JSON header)
REDACT_JWT = re.compile(
    r"\beyJ[A-Za-z0-9_-]+\.eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b"
)
# TC kimlik: 11 hane, ilk hanesi 0 değil. Kelime sınırı zorunlu.
REDACT_TC = re.compile(r"\b[1-9]\d{10}\b")
# IBAN TR: TR + 24 hane (toplam 26 karakter), boşluklu formu da yakala
REDACT_IBAN_TR = re.compile(
    r"\bTR\d{2}[\s]?(?:\d{4}[\s]?){5}\d{2}\b"
)

# E2 (2026-09-25): API anahtarı — özellikle TCMB EVDS `key=93lLgxqTVB` biçimi
# ve genel URL query parametresi `key=<alfanumerik>`.
# Örnek: https://evds2.tcmb.gov.tr/service/evds/...&key=93lLgxqTVB
REDACT_APIKEY_URL = re.compile(
    r"(?i)([?&](?:key|api[_-]?key|token|apikey|access[_-]?token)=)[A-Za-z0-9_-]{8,64}"
)
# TCMB EVDS'nin bilinen sabit anahtarı (Patron settings.json'ında düz metin)
REDACT_EVDS_KEY = re.compile(r"\b93lLgxqTVB[A-Za-z0-9]*\b")

# Uzun base64 blob'ları (>10KB kesintisiz) — genelde ekran görüntüsü
# İçinde false-positive tetikleyicileri (eyJ, sk-*, TC hane, vb.) barındırır.
# Kural (Ş3): YER İŞARETLE, silme.
# 10KB ~ 10240 karakter; base64 alfabesi: [A-Za-z0-9+/=]
REDACT_LONG_B64 = re.compile(
    r"[A-Za-z0-9+/=]{10240,}"
)

def _kes_uzun_b64(metin: str, oturum_id: str = "?") -> str:
    """>10KB kesintisiz base64 dizisi → [GORSEL-KESILDI: <bayt> · <oturum-id> · <satır-no>]"""
    def _repl(m):
        bayt = len(m.group(0))
        # satır no
        satir = metin.count("\n", 0, m.start()) + 1
        return f"[GORSEL-KESILDI: {bayt} bayt · oturum:{oturum_id[:8]} · satır:{satir}]"
    return REDACT_LONG_B64.sub(_repl, metin)


def temizle(metin: str, oturum_id: str = "?") -> str:
    """Zorunlu regex temizlik katmanı — sıra önemli.
    Standing #37/E · Ş1: 12 örüntü tam kapsanmalı.
    Ş2 ek: >10KB kesintisiz base64 dizisi kesilir (görsel-yer-işareti).
    """
    if not metin:
        return metin
    # 0) Önce uzun base64 blob'ları kes — false-positive tetikleyicileri bunun içinde
    metin = _kes_uzun_b64(metin, oturum_id)
    # 1) IBAN (TC ile çakışabilir — IBAN önce)
    metin = REDACT_IBAN_TR.sub("[REDACTED-IBAN]", metin)
    # E2: API anahtarı — URL query + bilinen EVDS anahtar
    metin = REDACT_APIKEY_URL.sub(r"\1[REDACTED-APIKEY]", metin)
    metin = REDACT_EVDS_KEY.sub("[REDACTED-APIKEY-EVDS]", metin)
    metin = REDACT_TOKEN.sub("[REDACTED-TOKEN]", metin)
    metin = REDACT_JWT.sub("[REDACTED-JWT]", metin)  # eyJ.eyJ.sig
    metin = REDACT_ABS_PATH.sub("~/", metin)
    metin = REDACT_EMAIL.sub("[REDACTED-PII-EMAIL]", metin)
    metin = REDACT_PHONE_STRICT.sub("[REDACTED-PII-TEL]", metin)
    metin = REDACT_TC.sub("[REDACTED-TC]", metin)
    metin = REDACT_ENV_LINE.sub(r"\1=[REDACTED-ENV]", metin)
    return metin


def cc_belirle(ilk_mesaj: str, dosya_yolu: str) -> str:
    """Oturumun hangi CC'ye ait olduğunu ilk mesaj/proje-yolundan çıkar.
    D2: Heuristik güçlendirildi — ilk 300 karakter + brief/handoff isimleri.
    """
    ilk300 = ilk_mesaj[:300].lower()
    ilk2000 = ilk_mesaj[:2000]

    # Öncelik 1: TRADIA HANDOFF / DEVIR / BRIEF
    if any(k in ilk300 for k in ["tradia — cc handoff", "tradia handoff", "handoff prompt",
                                   "tradia cc handoff", "devir brief", "tradia devir"]):
        return "tradia_handoff"
    # Standing #37 arşivi (BE-01, MU-01 gibi)
    if any(k in ilk300 for k in ["standing #38", "standing #37", "be-01", "mu-01", "kurulus"]):
        return "vezir_kanon"

    # Öncelik 2: CC-<ad> deseni ilk 2000 karakterde
    m = re.search(
        r"CC[-_]?"
        r"(vezir|hafıza|hafiza|basin|basın|analiz|tic|borsa|sosyal|"
        r"tt-ai|ttai|tt-map|ttmap|tt-pazarlama|ttpazarlama|kitap|kasa|"
        r"arşiv|arsiv|site|finans|signals|ihale)",
        ilk2000, re.IGNORECASE,
    )
    if m:
        return "cc_" + m.group(1).lower().replace("ı", "i").replace("ş", "s").replace("-", "")

    # Öncelik 3: MISARA / KASA / KITAP anahtar kelimeleri
    for anahtar, cc in [("misara masaüstü", "cc_misara_app"), ("kasa siber", "cc_kasa"),
                          ("32 gün", "cc_kitap"), ("ekrandaki ülke", "cc_kitap")]:
        if anahtar in ilk300:
            return cc

    # Öncelik 4: Proje-yol slug'ından (klasör adı)
    slug = os.path.basename(os.path.dirname(dosya_yolu)).lower()
    if "kitap" in slug:
        return "cc_kitap"
    if "kasa" in slug:
        return "cc_kasa"
    return "belirsiz"


def konu_etiketi(ilk_mesaj: str) -> str:
    """D2: İlk kullanıcı mesajının ilk satırını konu etiketi olarak döndür.
    'belirsiz' klasöründe kör arama olmasın diye."""
    if not ilk_mesaj:
        return "(mesaj yok)"
    ilk_satir = ilk_mesaj.strip().split("\n")[0].strip()
    # Markdown # başlıkları temizle
    ilk_satir = re.sub(r"^#+\s*", "", ilk_satir)
    # Uzunsa kes
    if len(ilk_satir) > 120:
        ilk_satir = ilk_satir[:117] + "..."
    return ilk_satir or "(başlık yok)"


def olay_metin(rec: dict) -> str:
    """JSONL kaydından H:/A: format satırı üret."""
    tip = rec.get("type", "?")
    ts = rec.get("timestamp", "")[:19]
    if tip == "user":
        icerik = rec.get("message", {}).get("content", "")
        if isinstance(icerik, list):
            icerik = " ".join(
                str(c.get("text", "") or c.get("content", ""))
                for c in icerik if isinstance(c, dict)
            )
        return f"### H · {ts}\n\n{icerik}\n"
    if tip == "assistant":
        icerik = rec.get("message", {}).get("content", "")
        if isinstance(icerik, list):
            parcalar = []
            for c in icerik:
                if isinstance(c, dict):
                    t = c.get("text") or c.get("content") or ""
                    if c.get("type") == "tool_use":
                        t = f"[tool: {c.get('name', '?')}]"
                    parcalar.append(str(t))
            icerik = "\n".join(p for p in parcalar if p.strip())
        return f"### A · {ts}\n\n{icerik}\n"
    return ""


def oturum_to_md(dosya: str) -> tuple[str, dict]:
    """Bir .jsonl oturumu MD'ye çevir + metadata döndür."""
    parcalar = []
    ilk_ts = son_ts = ""
    msaj = 0
    ilk_kullanici = ""
    with open(dosya, encoding="utf-8", errors="ignore") as fh:
        for satir in fh:
            satir = satir.strip()
            if not satir:
                continue
            try:
                rec = json.loads(satir)
            except json.JSONDecodeError:
                continue
            ts = rec.get("timestamp", "")[:10]
            if ts:
                if not ilk_ts:
                    ilk_ts = ts
                son_ts = ts
            met = olay_metin(rec)
            if met:
                msaj += 1
                if rec.get("type") == "user" and not ilk_kullanici:
                    m = rec.get("message", {}).get("content", "")
                    if isinstance(m, list):
                        m = " ".join(str(c.get("text", "")) for c in m if isinstance(c, dict))
                    ilk_kullanici = str(m)[:500]
                parcalar.append(met)

    ot_id = os.path.basename(dosya).replace(".jsonl", "")
    ilk_kullanici_temiz = temizle(ilk_kullanici, ot_id)
    cc = cc_belirle(ilk_kullanici, dosya)
    konu = konu_etiketi(ilk_kullanici_temiz)

    baslik = f"# {cc.upper()} · {ilk_ts} → {son_ts} · {ot_id[:8]}"
    ustbilgi = (
        f"**Konu:** {konu}  \n"
        f"**Oturum ID:** `{ot_id}`  \n"
        f"**CC:** {cc}  \n"
        f"**Tarih aralığı:** {ilk_ts} → {son_ts}  \n"
        f"**Mesaj sayısı:** {msaj}  \n"
        f"**Kaynak dosya (redakteli):** `[REDACTED-PATH]/{os.path.basename(dosya)}`  \n\n"
        f"**İlk kullanıcı mesajı (özet):** {ilk_kullanici_temiz[:300]}...\n\n"
        f"---\n\n"
    )
    tam_metin = baslik + "\n\n" + ustbilgi + "\n".join(parcalar)
    tam_metin_temiz = temizle(tam_metin, ot_id)

    meta = {
        "oturum_id": ot_id,
        "cc": cc,
        "konu": konu,  # D2: kör aramaya son
        "ilk_mesaj": ilk_ts,
        "son_mesaj": son_ts,
        "mesaj_sayisi": msaj,
        "boyut_bytes_ham": os.path.getsize(dosya),
        "md_uzunluk": len(tam_metin_temiz),
    }
    return tam_metin_temiz, meta


def hash_dosya(metin: str) -> str:
    return hashlib.sha256(metin.encode("utf-8")).hexdigest()[:16]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--kuru", action="store_true", help="Yalnız indeks üret, yaz-atlama.")
    ap.add_argument("--push", action="store_true", help="Sonda git add/commit/push yap.")
    args = ap.parse_args()

    if not os.path.isdir(ARSIV_REPO):
        print(f"⚠ misara-arsiv PRIVATE repo YOK: {ARSIV_REPO}")
        print("Patron açacak: gh repo create e-misara/misara-arsiv --private + clone.")
        print("Script devam edecek — yalnız indeks JSON (metadata) üretilecek.")
        # Yerel indeks çıktısı için tradia-beykoz/arsiv/ kullan
        pub_indeks = os.path.expanduser("~/tradia-beykoz/arsiv/indeks.json")
        pub_indeks_md = os.path.expanduser("~/tradia-beykoz/arsiv/INDEKS_PUBLIC.md")
    else:
        pub_indeks = INDEKS_JSON
        pub_indeks_md = INDEKS_MD

    dosyalar = sorted(glob.glob(os.path.join(PROJ_ROOT, "*/*.jsonl")))
    print(f"📚 {len(dosyalar)} oturum bulundu.")

    indeks = {"tarih": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
              "toplam_oturum": 0, "toplam_mesaj": 0, "oturumlar": []}

    for dosya in dosyalar:
        ot_id = os.path.basename(dosya).replace(".jsonl", "")
        try:
            md, meta = oturum_to_md(dosya)
        except Exception as e:
            print(f"  ⚠ HATA {ot_id[:8]}: {e}")
            continue

        hash_yeni = hash_dosya(md)
        cc = meta["cc"]
        tarih = meta["son_mesaj"] or meta["ilk_mesaj"] or "0000-00-00"
        md_ad = f"{tarih}_{ot_id[:8]}.md"

        if os.path.isdir(ARSIV_REPO):
            cc_dir = os.path.join(TAM_DIR, cc)
            os.makedirs(cc_dir, exist_ok=True)
            md_yol = os.path.join(cc_dir, md_ad)
            hash_eski = ""
            if os.path.exists(md_yol):
                with open(md_yol, encoding="utf-8") as f:
                    hash_eski = hash_dosya(f.read())
            if hash_yeni != hash_eski and not args.kuru:
                with open(md_yol, "w", encoding="utf-8") as f:
                    f.write(md)
                print(f"  ✍  {cc}/{md_ad}")
            else:
                print(f"  = {cc}/{md_ad} (değişmedi)")
            meta["md_yol_repo"] = f"tam/{cc}/{md_ad}"

        indeks["toplam_oturum"] += 1
        indeks["toplam_mesaj"] += meta["mesaj_sayisi"]
        indeks["oturumlar"].append(meta)

    # İndeks yaz
    with open(pub_indeks, "w", encoding="utf-8") as f:
        json.dump(indeks, f, ensure_ascii=False, indent=2)
    print(f"📇 indeks.json → {pub_indeks}")

    # Public MD indeks (yalnız metadata)
    with open(pub_indeks_md, "w", encoding="utf-8") as f:
        f.write(f"# Arşiv İndeksi (PUBLIC — metadata yalnız)\n\n")
        f.write(f"**Tarih:** {indeks['tarih']}  \n")
        f.write(f"**Toplam:** {indeks['toplam_oturum']} oturum · {indeks['toplam_mesaj']:,} mesaj\n\n")
        f.write("| CC | Oturum | Tarih aralığı | Mesaj |\n|---|---|---|---|\n")
        for o in sorted(indeks["oturumlar"], key=lambda x: x.get("son_mesaj") or "", reverse=True):
            f.write(f"| {o['cc']} | {o.get('konu','?')[:60]} | `{o['oturum_id'][:8]}` | {o['ilk_mesaj']} → {o['son_mesaj']} | {o['mesaj_sayisi']:,} |\n")
    print(f"📇 INDEKS_PUBLIC.md → {pub_indeks_md}")

    if args.push and os.path.isdir(ARSIV_REPO):
        try:
            subprocess.check_call(["git", "-C", ARSIV_REPO, "add", "."])
            n = indeks["toplam_oturum"]
            tarih = indeks["tarih"]
            subprocess.check_call([
                "git", "-C", ARSIV_REPO, "commit",
                "-m", f"arşiv: {tarih} {n} oturum"
            ])
            subprocess.check_call(["git", "-C", ARSIV_REPO, "push", "origin", "main"])
            print("🚀 push OK")
        except subprocess.CalledProcessError as e:
            print(f"⚠ git push hatası (muhtemel: değişiklik yok): {e}")


if __name__ == "__main__":
    main()
