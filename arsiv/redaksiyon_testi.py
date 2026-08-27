#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
redaksiyon_testi.py — Standing #37/E · Ş1 gereği zorunlu test

12 örüntü test et. Bir tanesi kaçarsa push YASAK.

Kullanım:
  python3 arsiv/redaksiyon_testi.py           → 12 test paketi
  python3 arsiv/redaksiyon_testi.py <dosya>   → gerçek dosyada tara

Çıkış kodu 0 = TÜM 12 TEMİZ · != 0 = KAÇAK VAR (push YASAK)
"""
import re
import sys
from pathlib import Path

# arsiv_cek.py'deki gerçek regex katmanını import et
sys.path.insert(0, str(Path(__file__).parent))
try:
    from arsiv_cek import temizle
except ImportError:
    print("❌ arsiv_cek.py bulunamadı"); sys.exit(2)

# ─── 12 test örneği ─────────────────────────────────────────
ORNEK = [
    # (etiket, ham, kaçamayacak-token/deseni)
    ("1. sk-ant token", "API anahtarım: sk-ant-abc123XYZ789def456GHI789jklMNOPQR", "sk-ant"),
    ("2. ghp token", "GitHub PAT: ghp_abcdefghijklmnop1234567890ABCDEF", "ghp_"),
    ("3. gho token", "OAuth: gho_1234567890abcdefghijklmnopqrstuvwxyz", "gho_"),
    ("4. AWS AKIA", "AWS: AKIAIOSFODNN7EXAMPLE", "AKIA"),
    ("5. Bearer token", "Authorization: Bearer sk-live-abc123XYZ789def456GHI789jklMNOPQR",  "sk-live-abc123XYZ789def456GHI789jklMNOPQR"),
    ("6. JWT eyJ",     "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMjMifQ.signature", "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMjMifQ.signature"),
    ("7. Mac path",    "Log: /Users/GAC-A/tradia_borsa/data/x.json", "/Users/GAC-A"),
    ("8. E-posta",     "İletişim: ahmet.colak@hotmail.com", "@hotmail.com"),
    ("9. Türk telefon","GSM +905321234567 arayın",  "5321234567"),
    ("10. .env satırı", "API_KEY=sk-live-12345secretmoresecret", "sk-live"),
    # TC 11 hane ve IBAN TR şu an regex katmanında YOK — dürüst-negatif
    ("11. TC 11 hane",  "TCKN: 12345678901", "12345678901"),
    ("12. IBAN TR",     "IBAN: TR330006100519786457841326",  "TR33"),
    # D1 · Claude Code proje-yolu tire-ayraçlı slug
    ("13. Tire slug path", "log: ~/.claude/projects/-Users-GAC-A/oturum.jsonl", "-Users-GAC-A"),
]

def testet():
    yesil = 0
    kirmizi = 0
    detay = []
    print("═" * 70)
    print("  REDAKSİYON TESTİ · Standing #37/E · Ş1")
    print("═" * 70)
    for etiket, ham, iz in ORNEK:
        temiz = temizle(ham)
        kaci = iz in temiz  # iz hâlâ görünüyorsa temizlik başarısız
        if kaci:
            print(f"  🔴 {etiket}")
            print(f"     ham   : {ham}")
            print(f"     temiz : {temiz}")
            print(f"     kaçak iz: {iz!r}")
            kirmizi += 1
            detay.append((etiket, "KAÇAK", iz, temiz))
        else:
            print(f"  ✅ {etiket}")
            yesil += 1
            detay.append((etiket, "TEMİZ", iz, temiz))
    print("═" * 70)
    print(f"  YEŞİL: {yesil}/12 · KIRMIZI: {kirmizi}/12")
    print("═" * 70)
    if kirmizi > 0:
        print("\n🔴 PUSH YASAK — regex katmanı eksik. arsiv_cek.py güncellenmeli.")
        print("\nEksikler (Vezir A04):")
        for etiket, dur, iz, _ in detay:
            if dur == "KAÇAK":
                print(f"  - {etiket}: {iz!r} desen katmanı yok")
        return 1
    print("\n🟢 12/12 TEMİZ — PUSH SERBEST")
    return 0


def dosya_tara(yol):
    print(f"═ dosya tara: {yol}")
    metin = Path(yol).read_text(encoding="utf-8", errors="ignore")
    temiz = temizle(metin)
    fark = len(metin) - len(temiz)
    print(f"  giriş {len(metin)} char, çıkış {len(temiz)} char, fark {fark}")
    for etiket, _, iz in ORNEK:
        if iz in temiz:
            print(f"  🔴 hâlâ görünüyor: {etiket} → {iz!r}")
            return 1
    print(f"  ✅ 12 örüntünün hiçbiri temiz çıktıda yok")
    return 0


if __name__ == "__main__":
    if len(sys.argv) > 1:
        sys.exit(dosya_tara(sys.argv[1]))
    sys.exit(testet())
