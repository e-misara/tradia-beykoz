#!/bin/bash
# MISARA masaüstü uygulaması · çift-tıkla-çalıştır
# Standing #41 · MU-01 · Saf Python stdlib

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR" || exit 1

echo "═══════════════════════════════════════"
echo "  MISARA · MU-01"
echo "  $(date '+%Y-%m-%d %H:%M')"
echo "═══════════════════════════════════════"
echo ""

# Python3 var mı?
if ! command -v python3 >/dev/null 2>&1; then
    echo "❌ python3 bulunamadı."
    echo "   macOS 12+ için Xcode Command Line Tools gerekli:"
    echo "   xcode-select --install"
    echo ""
    read -n1 -p "Enter'a basıp pencereyi kapatın..."
    exit 1
fi

# Sunucuyu başlat
python3 sunucu.py

echo ""
read -n1 -p "Enter'a basıp pencereyi kapatın..."
