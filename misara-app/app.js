/* MISARA · MU-01 · app.js
 * Vanilla JS · $0 · AI çağrısı YOK
 * Uygulama SADECE OKUR + GÖSTERİR (veri üretmez).
 */
(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  // Uygulama durumu
  const state = {
    cografya: null,
    durum: null,
    meta: null,
    secim: { il: null, ilce: null, mahalle: null },
  };

  // ─── API ────────────────────────────────────────────
  async function apiCek(yol) {
    const r = await fetch("/api/" + yol, { cache: "no-store" });
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.json();
  }

  function veriYok(veri) {
    return veri && veri.veri_yok === true;
  }

  // ─── Bildirim ───────────────────────────────────────
  let bildirimZaman = null;
  function bildir(metin, ms = 3000) {
    const el = $("#bildirim");
    el.textContent = metin;
    el.classList.add("gorunur");
    if (bildirimZaman) clearTimeout(bildirimZaman);
    bildirimZaman = setTimeout(() => el.classList.remove("gorunur"), ms);
  }

  // ─── Meta ───────────────────────────────────────────
  async function metaCek() {
    state.meta = await apiCek("meta");
    const m = state.meta;
    $("#meta-metin").textContent = `${m.app} · ${m.surum} · veri ${
      m.veri_var ? "✓" : "✗"
    } (${m.veri_dosyalar.length} dosya) · ${m.zaman}`;
  }

  // ─── Kırılım ────────────────────────────────────────
  function kirilim_guncelle() {
    const s = state.secim;
    $("#krl-il").textContent = s.il ? s.il : "il";
    $("#krl-il").classList.toggle("krl-bos", !s.il);
    $("#krl-il").classList.toggle("krl-aktif", !!s.il && !s.ilce);

    $("#krl-ilce").textContent = s.ilce ? s.ilce : "ilçe";
    $("#krl-ilce").classList.toggle("krl-bos", !s.ilce);
    $("#krl-ilce").classList.toggle("krl-aktif", !!s.ilce && !s.mahalle);

    $("#krl-mahalle").textContent = s.mahalle ? s.mahalle : "mahalle";
    $("#krl-mahalle").classList.toggle("krl-bos", !s.mahalle);
    $("#krl-mahalle").classList.toggle("krl-aktif", !!s.mahalle);
  }

  $("#krl-il").addEventListener("click", () => {
    if (!state.secim.il) return;
    state.secim.ilce = null;
    state.secim.mahalle = null;
    haritaAc();
    kartCiz();
  });
  $$(".krl-item").forEach((el) => {
    if (el.dataset.dur === "turkiye") {
      el.addEventListener("click", () => {
        state.secim = { il: null, ilce: null, mahalle: null };
        haritaAc();
        kartCiz();
      });
    }
  });

  // ─── Harita (düğüm liste) ───────────────────────────
  function haritaAc() {
    const g = state.cografya;
    if (!g || veriYok(g)) {
      $("#harita-icerik").innerHTML =
        '<div class="veri-yok">VERİ YOK<div class="veri-yok-alt">cografya.json henüz üretilmedi. veri/ dizinini kontrol edin.</div></div>';
      return;
    }
    const s = state.secim;

    // Türkiye seviyesi (il-liste)
    if (!s.il) {
      const iller = g.turkiye.iller;
      const html =
        '<div class="dugum-liste">' +
        Object.entries(iller)
          .map(([slug, il]) => {
            const dcls = durumSinif(il.durum);
            return `<div class="dugum" data-tur="il" data-slug="${slug}">
              <div class="dugum-ad">${il.ad}</div>
              <div class="dugum-alt">${il.ilce_sayisi} ilçe</div>
              <span class="dugum-durum ${dcls}">${il.durum || "ISKELET"}</span>
            </div>`;
          })
          .join("") +
        "</div>";
      $("#harita-icerik").innerHTML = html;
      $$("#harita-icerik .dugum").forEach((el) => {
        el.addEventListener("click", () => {
          const slug = el.dataset.slug;
          state.secim.il = g.turkiye.iller[slug].ad;
          state.secim.ilSlug = slug;
          state.secim.ilce = null;
          state.secim.mahalle = null;
          haritaAc();
          kartCiz();
          kirilim_guncelle();
        });
      });
      return;
    }

    // İl seviyesi (ilçe-liste)
    if (s.il && !s.ilce) {
      const il = g.turkiye.iller[s.ilSlug];
      if (!il || !il.ilceler || Object.keys(il.ilceler).length === 0) {
        $("#harita-icerik").innerHTML =
          `<div class="veri-yok">${il ? il.ad : s.il} — İSKELET
            <div class="veri-yok-alt">İlçe düğümleri henüz doldurulmadı. Kartal pilotu sonra genişleyecek.</div>
          </div>`;
        return;
      }
      const html =
        '<div class="dugum-liste">' +
        Object.entries(il.ilceler)
          .map(([slug, ilce]) => {
            const dcls = durumSinif(ilce.durum);
            return `<div class="dugum" data-tur="ilce" data-slug="${slug}">
              <div class="dugum-ad">${ilce.ad}</div>
              <div class="dugum-alt">${ilce.mahalle_sayisi} mahalle</div>
              <span class="dugum-durum ${dcls}">${ilce.durum || "ISKELET"}</span>
            </div>`;
          })
          .join("") +
        "</div>";
      $("#harita-icerik").innerHTML = html;
      $$("#harita-icerik .dugum").forEach((el) => {
        el.addEventListener("click", () => {
          const slug = el.dataset.slug;
          const ilce = il.ilceler[slug];
          state.secim.ilce = ilce.ad;
          state.secim.ilceSlug = slug;
          state.secim.mahalle = null;
          haritaAc();
          kartCiz();
          kirilim_guncelle();
        });
      });
      return;
    }

    // İlçe seviyesi (mahalle-liste)
    if (s.il && s.ilce) {
      const il = g.turkiye.iller[s.ilSlug];
      const ilce = il.ilceler[s.ilceSlug];
      if (!ilce.mahalleler || Object.keys(ilce.mahalleler).length === 0) {
        $("#harita-icerik").innerHTML =
          `<div class="veri-yok">${ilce.ad} — MAHALLE YOK
            <div class="veri-yok-alt">Mahalle düğümleri iskelet. Beykoz + Kartal ilk dolu ilçeler.</div>
          </div>`;
        return;
      }
      const html =
        '<div class="dugum-liste">' +
        Object.entries(ilce.mahalleler)
          .map(([slug, mah]) => {
            const dcls = durumSinif(mah.durum);
            const rozet = (mah.a_var ? "A" : "-") + (mah.b_var ? "B" : "-");
            return `<div class="dugum" data-tur="mahalle" data-slug="${slug}">
              <div class="dugum-ad">${mah.ad}</div>
              <div class="dugum-alt">${rozet}</div>
              <span class="dugum-durum ${dcls}">${mah.durum || "TASLAK"}</span>
            </div>`;
          })
          .join("") +
        "</div>";
      $("#harita-icerik").innerHTML = html;
      $$("#harita-icerik .dugum").forEach((el) => {
        el.addEventListener("click", () => {
          const slug = el.dataset.slug;
          const mah = ilce.mahalleler[slug];
          state.secim.mahalle = mah.ad;
          state.secim.mahalleSlug = slug;
          kartCiz();
          kirilim_guncelle();
        });
      });
      return;
    }
  }

  function durumSinif(d) {
    if (!d) return "durum-iskelet";
    const D = d.toUpperCase();
    if (D.includes("TAM")) return D.includes("LAUNCH") ? "durum-launch" : "durum-tam";
    if (D.includes("PILOT")) return "durum-pilot";
    if (D.includes("TASLAK")) return "durum-taslak";
    return "durum-iskelet";
  }

  // ─── Sağ kart ────────────────────────────────────────
  function kartCiz() {
    const g = state.cografya;
    if (!g || veriYok(g)) {
      $("#kart-icerik").innerHTML =
        '<div class="veri-yok">VERİ YOK<div class="veri-yok-alt">cografya.json bekleniyor.</div></div>';
      return;
    }
    const s = state.secim;

    // Türkiye seviye (özet)
    if (!s.il) {
      const t = g.turkiye;
      $("#kart-icerik").innerHTML = `
        <div class="kart-h1">TÜRKİYE · Portföy</div>
        <div class="kart-etiket">Hedef</div>
        <div class="kart-rakam-satir">
          <div class="kart-rakam"><div class="kart-rakam-val">${t.hedef_il}</div><div class="kart-rakam-lbl">Hedef İl</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${t.hedef_ilce}</div><div class="kart-rakam-lbl">Hedef İlçe</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${Object.keys(t.iller).length}</div><div class="kart-rakam-lbl">İskelet İl</div></div>
        </div>
        <div class="kart-metin">
          Bir il seç (soldaki liste). <br>
          <strong>Aktif pilot:</strong> Kartal (dolu) · Beykoz (kapandı, 45 mahalle).<br>
          <strong>Kural:</strong> Kartal çalışmadan 81 ile açılmaz.
        </div>
        <div class="kart-kaynak">Kaynak: <code>veri/cografya.json</code></div>
      `;
      return;
    }

    // İl seviye
    if (s.il && !s.ilce) {
      const il = g.turkiye.iller[s.ilSlug];
      $("#kart-icerik").innerHTML = `
        <div class="kart-h1">${il.ad}</div>
        <div class="kart-etiket">Durum · ${il.durum || "ISKELET"}</div>
        <div class="kart-rakam-satir">
          <div class="kart-rakam"><div class="kart-rakam-val">${il.ilce_sayisi}</div><div class="kart-rakam-lbl">İlçe</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${(il.aktif_pilot || []).length}</div><div class="kart-rakam-lbl">Aktif Pilot</div></div>
        </div>
        ${il.not ? `<div class="kart-metin"><strong>Not:</strong> ${il.not}</div>` : ""}
        ${(il.aktif_pilot || []).length > 0 ? `<div class="kart-metin"><strong>Pilot ilçeler:</strong> ${il.aktif_pilot.join(", ")}</div>` : ""}
        <div class="kart-kaynak">Kaynak: <code>veri/cografya.json#${s.ilSlug}</code></div>
      `;
      return;
    }

    // İlçe seviye
    if (s.ilce && !s.mahalle) {
      const il = g.turkiye.iller[s.ilSlug];
      const ilce = il.ilceler[s.ilceSlug];
      // Özel: Kartal → pilot_kartal bloğunu göster (A + B)
      if (s.ilceSlug === "kartal" && g.pilot_kartal) {
        const p = g.pilot_kartal;
        const a = p.a_ozet;
        const b = p.b_ozet;
        $("#kart-icerik").innerHTML = `
          <div class="kart-h1">${ilce.ad} · ${il.ad}</div>
          <div class="kart-etiket">Durum · ${ilce.durum}</div>

          <div class="kart-h2">A · ${a.baslik}</div>
          <div class="kart-rakam-satir">
            <div class="kart-rakam"><div class="kart-rakam-val">${a.rakamlar.mahalle_sayisi}</div><div class="kart-rakam-lbl">Mahalle</div></div>
            <div class="kart-rakam"><div class="kart-rakam-val">${(a.rakamlar.nufus_tahmin/1000).toFixed(0)}K</div><div class="kart-rakam-lbl">Nüfus (~)</div></div>
            <div class="kart-rakam"><div class="kart-rakam-val">${a.rakamlar.yuzolcumu_km2}</div><div class="kart-rakam-lbl">km²</div></div>
          </div>
          <div class="kart-metin">${a.kisa}</div>
          <div class="kart-kaynak">Kaynak: <code>${a.rakamlar.kaynak_dosya}</code> · Ölçüm: ${a.olcum_tarihi}</div>

          <div class="kart-h2">B · ${b.baslik}</div>
          <div class="kart-metin">${b.kisa}</div>
          <div class="kart-metin" style="margin-top:8px">
            <strong>Gözlem:</strong>
            <ul style="margin-left:18px;margin-top:4px">
              ${b.gozlem.map((g) => `<li>${g}</li>`).join("")}
            </ul>
          </div>
          <div class="kart-kaynak">Kaynak: <code>${b.kaynak_dosya}</code></div>
          <div class="kart-b-tarih">B son yazım: ${b.son_yazim_tarihi}</div>
        `;
        return;
      }
      // Genel ilçe
      $("#kart-icerik").innerHTML = `
        <div class="kart-h1">${ilce.ad} · ${il.ad}</div>
        <div class="kart-etiket">Durum · ${ilce.durum}</div>
        <div class="kart-rakam-satir">
          <div class="kart-rakam"><div class="kart-rakam-val">${ilce.mahalle_sayisi}</div><div class="kart-rakam-lbl">Mahalle</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${ilce.a_ozet_var ? "A ✓" : "A ✗"}</div><div class="kart-rakam-lbl">Ana Özet</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${ilce.b_ozet_var ? "B ✓" : "B ✗"}</div><div class="kart-rakam-lbl">Derin Özet</div></div>
        </div>
        ${ilce.not ? `<div class="kart-metin"><strong>Not:</strong> ${ilce.not}</div>` : ""}
        <div class="kart-metin">Mahalle listesi solda. Bir mahalle seç.</div>
        <div class="kart-kaynak">Kaynak: <code>veri/cografya.json#${s.ilSlug}.${s.ilceSlug}</code></div>
      `;
      return;
    }

    // Mahalle seviye
    if (s.mahalle) {
      const il = g.turkiye.iller[s.ilSlug];
      const ilce = il.ilceler[s.ilceSlug];
      const mah = ilce.mahalleler[s.mahalleSlug];
      $("#kart-icerik").innerHTML = `
        <div class="kart-h1">${mah.ad} · ${ilce.ad} / ${il.ad}</div>
        <div class="kart-etiket">Durum · ${mah.durum || "TASLAK"}</div>
        <div class="kart-rakam-satir">
          <div class="kart-rakam"><div class="kart-rakam-val">${mah.a_var ? "A ✓" : "A ✗"}</div><div class="kart-rakam-lbl">A katmanı</div></div>
          <div class="kart-rakam"><div class="kart-rakam-val">${mah.b_var ? "B ✓" : "B ✗"}</div><div class="kart-rakam-lbl">B katmanı</div></div>
        </div>
        ${mah.a_var ? `
          <div class="kart-h2">A · Ana Görünüm</div>
          <div class="kart-metin">Ana özet iskeleti hazır. Detay veri henüz üretilmedi (v1 iskelet).</div>
        ` : '<div class="veri-yok" style="margin-top:10px">A KATMANI YOK</div>'}
        ${mah.b_var ? `
          <div class="kart-h2">B · Derin Görünüm</div>
          <div class="kart-metin">Beykoz mahalleleri için detay: <code>beykoz_vaka/beykoz_ansiklopedi/${s.mahalleSlug}.md</code></div>
          <div class="kart-b-tarih">B son yazım: 2026-07-27 (Beykoz kapanış)</div>
        ` : '<div class="veri-yok" style="margin-top:10px">B KATMANI YOK<div class="veri-yok-alt">B derin özet henüz yazılmadı.</div></div>'}
        <div class="kart-kaynak">Kaynak: <code>veri/cografya.json#...${s.mahalleSlug}</code></div>
      `;
      return;
    }
  }

  // ─── CC şeridi + hedef ──────────────────────────────
  function ccSeritCiz() {
    const d = state.durum;
    if (!d || veriYok(d)) {
      $("#cc-serit-icerik").innerHTML =
        '<div class="veri-yok">DURUM.json YOK</div>';
      $("#hedef-mesafe").textContent = "?";
      return;
    }
    // Hedef
    const h = d.hedef.il;
    $("#hedef-mesafe").textContent = `${h.mevcut}/${h.hedef} il · ${d.hedef.ilce_pilot.mevcut} pilot ilçe`;

    // CC şeridi
    const html = d.cc_seridi
      .map((c) => {
        const sessCls = c.sessizlik_gun >= 30 ? "sess-uzun" : c.sessizlik_gun >= 14 ? "sess-orta" : "";
        return `<div class="cc-satir">
          <div>
            <div class="cc-ad">${c.durum} ${c.cc}</div>
            <div class="cc-sprint">${c.sprint}</div>
          </div>
          <div class="cc-sess ${sessCls}">${c.sessizlik_gun}g</div>
        </div>`;
      })
      .join("");
    $("#cc-serit-icerik").innerHTML = html;
  }

  // ─── Patron görev kartı ─────────────────────────────
  function patronCiz() {
    const d = state.durum;
    if (!d || veriYok(d) || !d.patron_gorev) {
      $("#patron-icerik").innerHTML =
        '<div class="veri-yok">GÖREV KARTI YOK</div>';
      return;
    }
    const g = d.patron_gorev;
    const html = g.gorevler
      .map(
        (x) => `
      <div class="gorev-satir">
        <span class="gorev-sira">${x.sira}</span>
        <div>
          <div class="gorev-metin">${x.gorev}</div>
          <div class="gorev-etki">${x.etki}</div>
        </div>
      </div>`
      )
      .join("");
    $("#patron-icerik").innerHTML = html;
  }

  // ─── "Şimdi tara" düğmesi ───────────────────────────
  $("#btn-simdi-tara").addEventListener("click", async () => {
    const btn = $("#btn-simdi-tara");
    btn.disabled = true;
    btn.textContent = "▸ TARANIYOR…";
    try {
      const r = await apiCek("simdi_tara");
      bildir(`Tarama tetiklendi · ${r.zaman} · Uygulama veri üretmez (kural).`);
    } catch (e) {
      bildir("Tarama tetiği başarısız: " + e.message);
    } finally {
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = "▸ ŞİMDİ TARA";
      }, 1200);
    }
  });

  // ─── Başlat ─────────────────────────────────────────
  async function baslat() {
    try {
      await metaCek();
      const [c, d] = await Promise.all([
        apiCek("cografya"),
        apiCek("durum"),
      ]);
      state.cografya = c;
      state.durum = d;
      haritaAc();
      kartCiz();
      ccSeritCiz();
      patronCiz();
      kirilim_guncelle();
    } catch (e) {
      $("#kart-icerik").innerHTML =
        `<div class="veri-yok">Sunucuya ulaşılamadı<div class="veri-yok-alt">${e.message}</div></div>`;
    }
  }

  baslat();
})();
