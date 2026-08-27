#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
sunucu.py — MISARA masaüstü uygulaması yerel sunucusu

Standing #41 · MU-01 · Saf Python stdlib · Internet YOK · Node YOK · Electron YOK.
Port 8787. MISARA.command çift-tıkla → bu script kalkar → tarayıcı açılır.

Uygulama SADECE OKUR + GÖSTERİR. Veri ÜRETMEZ (kural).
"Şimdi tara" düğmesi = 3-günlük döngü elle tetiği (launchd yerine).
"""
import http.server
import json
import os
import socketserver
import subprocess
import sys
import threading
import time
import webbrowser
from datetime import datetime
from pathlib import Path

PORT = 8787
KOK = Path(__file__).resolve().parent
VERI = KOK / "veri"


class MisaraHandler(http.server.SimpleHTTPRequestHandler):
    """Statik dosya servisi + /api/* uç noktaları."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(KOK), **kwargs)

    def log_message(self, format, *args):
        # Sessiz: sadece hata log'la
        if "40" in str(args[1]) or "50" in str(args[1]):
            sys.stderr.write(f"[misara] {format % args}\n")

    def do_GET(self):
        if self.path.startswith("/api/"):
            return self._api()
        return super().do_GET()

    def _api(self):
        yol = self.path[5:]  # "/api/" sonrası
        if yol == "durum":
            return self._json(self._oku_json("DURUM.json"))
        if yol == "cografya":
            return self._json(self._oku_json("cografya.json"))
        if yol == "simdi_tara":
            return self._json(self._simdi_tara())
        if yol == "meta":
            return self._json({
                "app": "MISARA",
                "surum": "MU-01 · v1",
                "port": PORT,
                "kok": str(KOK),
                "veri_var": VERI.exists(),
                "veri_dosyalar": [f.name for f in VERI.glob("*.json")] if VERI.exists() else [],
                "zaman": datetime.now().isoformat(timespec="seconds"),
            })
        self._json({"hata": f"bilinmeyen uç: {yol}"}, kod=404)

    def _oku_json(self, ad):
        p = VERI / ad
        if not p.exists():
            return {"veri_yok": True, "beklenen": ad,
                    "aciklama": "Bu dosya henüz üretilmedi. Hafıza / Vezir tarafından beslenmeli."}
        try:
            with open(p, encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            return {"veri_yok": True, "beklenen": ad, "hata": str(e)}

    def _simdi_tara(self):
        """3-günlük döngü elle tetiği. Şimdilik yalnız damga atar (veri üretmez)."""
        damga_yol = VERI / "son_tarama.json"
        VERI.mkdir(exist_ok=True)
        damga = {
            "tetik": "elle · şimdi tara düğmesi",
            "zaman": datetime.now().isoformat(timespec="seconds"),
            "not": "Uygulama veri üretmez (kural). Bu damga launchd 3-günlük döngüyü izlemek için.",
        }
        with open(damga_yol, "w", encoding="utf-8") as f:
            json.dump(damga, f, ensure_ascii=False, indent=2)
        return damga

    def _json(self, data, kod=200):
        gövde = json.dumps(data, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(kod)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(gövde)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(gövde)


def tarayici_ac(gecikme=0.8):
    time.sleep(gecikme)
    webbrowser.open(f"http://localhost:{PORT}/", new=1)


def main():
    print(f"[misara] MU-01 · sunucu :{PORT} · kök: {KOK}")
    print(f"[misara] Tarayıcı: http://localhost:{PORT}/")

    # Tarayıcıyı arka planda aç
    threading.Thread(target=tarayici_ac, daemon=True).start()

    try:
        with socketserver.TCPServer(("127.0.0.1", PORT), MisaraHandler) as srv:
            srv.allow_reuse_address = True
            srv.serve_forever()
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"[misara] Port {PORT} kullanımda — tarayıcıyı aç, mevcut sunucuyu bul.")
            tarayici_ac(0.1)
            return
        raise
    except KeyboardInterrupt:
        print("\n[misara] Kapatıldı.")


if __name__ == "__main__":
    main()
