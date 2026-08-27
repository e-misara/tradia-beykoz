#!/bin/bash
# pano_yayinla.sh — Tek komutla pano yayını
#
# Standing #45 (Vezir kanonu): "Pano iki yerde durur, tek komutla yayınlanır."
#
# Akış:
#   1) tradia-beykoz/pano/ → misara-vezir/vezir/ kopyala
#   2) tradia-beykoz + misara-vezir commit + push
#   3) jsDelivr purge (Cloudflare + Fastly)
#   4) Üç kanalı sırayla çek → rakamları karşılaştır → aynı mı?
#   5) Rapor
#
# Kullanım: bash pano_yayinla.sh ["opsiyonel commit mesajı"]
#
# Ç0: dış bağımlılık yok · saf bash + curl + python3 · Standing #38

set -e  # herhangi bir adım fail olursa dur

BEY_REPO=~/tradia-beykoz
VEZ_REPO=~/misara-vezir
KAYNAK="$BEY_REPO/pano"
HEDEF="$VEZ_REPO/vezir"
MESAJ="${1:-pano: w35 yenile (otomatik yayın)}"

kirmizi() { printf "\033[31m%s\033[0m\n" "$1"; }
yesil()   { printf "\033[32m%s\033[0m\n" "$1"; }
sari()    { printf "\033[33m%s\033[0m\n" "$1"; }
mavi()    { printf "\033[36m%s\033[0m\n" "$1"; }

mavi "═══ 1. KOPYALA · tradia-beykoz/pano → misara-vezir/vezir ═══"
cp "$KAYNAK/ozet-w35.json" "$HEDEF/ozet-w35.json"
# index.html'i kopyala ve fetch URL'lerini misara-vezir'e ayarla
cp "$KAYNAK/index.html" "$HEDEF/index.html"
python3 <<'PY'
from pathlib import Path
h = Path("/Users/GAC-A/misara-vezir/vezir/index.html")
txt = h.read_text()
esk_root = "'./ozet-w35.json',\n    'https://raw.githubusercontent.com/e-misara/tradia-beykoz/main/pano/ozet-w35.json',\n    'https://cdn.jsdelivr.net/gh/e-misara/tradia-beykoz@main/pano/ozet-w35.json'"
yni_root = "'./ozet-w35.json',\n    'https://raw.githubusercontent.com/e-misara/misara-vezir/main/vezir/ozet-w35.json',\n    'https://cdn.jsdelivr.net/gh/e-misara/misara-vezir@main/vezir/ozet-w35.json'"
if esk_root in txt:
    h.write_text(txt.replace(esk_root, yni_root))
    print("  ✓ fetch URL'leri misara-vezir'e ayarlı")
else:
    print("  = fetch URL'leri zaten güncel")
PY
yesil "  ✓ ozet-w35.json + index.html taşındı"

mavi ""
mavi "═══ 2. COMMIT + PUSH ═══"

# tradia-beykoz (kaynak)
cd "$BEY_REPO"
git fetch origin --quiet
if ! git diff --quiet pano/ozet-w35.json pano/index.html 2>/dev/null; then
    git add pano/ozet-w35.json pano/index.html
    git commit -qm "pano: $MESAJ"
    git push -q origin main
    yesil "  ✓ tradia-beykoz push"
else
    echo "  = tradia-beykoz değişiklik yok"
fi

# misara-vezir (yayın)
cd "$VEZ_REPO"
git fetch origin --quiet
if ! git diff --quiet vezir/ozet-w35.json vezir/index.html 2>/dev/null; then
    git add vezir/ozet-w35.json vezir/index.html
    git commit -qm "pano: $MESAJ"
    git push -q origin main
    yesil "  ✓ misara-vezir push"
else
    echo "  = misara-vezir değişiklik yok"
fi

mavi ""
mavi "═══ 3. JSDELIVR PURGE ═══"
for f in ozet-w35.json index.html; do
    resp=$(curl -sX GET "https://purge.jsdelivr.net/gh/e-misara/misara-vezir@main/vezir/$f")
    status=$(echo "$resp" | python3 -c "import json,sys; print(json.load(sys.stdin).get('status','hata'))" 2>/dev/null || echo "hata")
    if [ "$status" = "finished" ]; then
        yesil "  ✓ purge $f"
    else
        sari "  ⚠ purge $f: $status"
    fi
done

mavi ""
mavi "═══ 4. ÜÇ KANAL TEYİT + RAKAM KARŞILAŞTIRMA ═══"
mavi "  (Raw ve Pages 30-120 sn cache · deneme aralığı 15 sn)"

# 3 kanalı çek, aynı mı karşılaştır (hash-based)
python3 <<'PY'
import json, sys, urllib.request, hashlib, time

KANALLAR = {
    "Pages":    "https://e-misara.github.io/misara-vezir/vezir/ozet-w35.json",
    "Raw":      "https://raw.githubusercontent.com/e-misara/misara-vezir/main/vezir/ozet-w35.json",
    "jsDelivr": "https://cdn.jsdelivr.net/gh/e-misara/misara-vezir@main/vezir/ozet-w35.json",
}

# Yerel dosya = doğrusu
with open("/Users/GAC-A/misara-vezir/vezir/ozet-w35.json") as f:
    yerel = json.load(f)
yerel_hash = hashlib.md5(json.dumps(yerel, sort_keys=True).encode()).hexdigest()[:12]
yerel_aracden = [p for p in yerel["portfoy_katmani"]["projeler"] if p["ad"] == "AraçDen"][0]["durum"]
yerel_serit = yerel["kirmizi_serit"]["bloke"][0]["konu"][:40]
print(f"  Yerel     · hash {yerel_hash} · AraçDen={yerel_aracden} · şerit={yerel_serit}")

sonuc = {"eslesme": 0, "uyum": 0}
for deneme in range(1, 6):
    tum_esles = True
    for ad, url in KANALLAR.items():
        try:
            r = urllib.request.urlopen(url, timeout=10)
            veri = json.loads(r.read())
            uzak_hash = hashlib.md5(json.dumps(veri, sort_keys=True).encode()).hexdigest()[:12]
            uzak_aracden = [p for p in veri["portfoy_katmani"]["projeler"] if p["ad"] == "AraçDen"][0]["durum"]
            uzak_serit = veri["kirmizi_serit"]["bloke"][0]["konu"][:40]
            esles = "✅" if uzak_hash == yerel_hash else "🔴"
            if uzak_hash != yerel_hash:
                tum_esles = False
            print(f"  {ad:<9} · hash {uzak_hash} · AraçDen={uzak_aracden:<10} · şerit={uzak_serit} {esles}")
        except Exception as e:
            tum_esles = False
            print(f"  {ad:<9} · 🔴 hata: {e}")

    if tum_esles:
        print(f"\n  🟢 Tüm kanallar YEREL ile aynı hash — YAYIN BAŞARILI (deneme {deneme})")
        sonuc["eslesme"] = 3
        sys.exit(0)

    if deneme < 5:
        print(f"  ⏳ Bir veya daha fazla kanal cache'de eski; 15 sn bekleyip yeniden dene...")
        time.sleep(15)

print(f"\n  🔴 5 denemede kanallar eşitlenmedi — cache Update etti ama hala eski görebiliyor.")
print(f"  📌 Manuel test öneri: 30-60 sn sonra tarayıcıda hard-reload (Cmd+Shift+R)")
sys.exit(2)
PY

RET=$?
echo ""
if [ $RET -eq 0 ]; then
    yesil "═══ ✅ PANO YAYIN BAŞARILI ═══"
    yesil "  URL: https://e-misara.github.io/misara-vezir/vezir/"
elif [ $RET -eq 2 ]; then
    sari "═══ ⚠ YAYIN TAMAM AMA CACHE HENÜZ TAM YAYILMADI ═══"
    sari "  Pages/Raw cache 1-2 dk daha sürebilir"
else
    kirmizi "═══ 🔴 YAYIN AKIŞINDA HATA ═══"
    exit $RET
fi

echo ""
echo "Vezir kanonu: 'Pano iki yerde durur, tek komutla yayınlanır.'"
echo "Bir sonraki güncelleme: pano/ozet-w35.json'u düzenle → yeniden bu script'i çalıştır."
